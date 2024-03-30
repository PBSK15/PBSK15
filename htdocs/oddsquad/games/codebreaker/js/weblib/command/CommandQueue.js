//require.include("weblib/core/Util");
//require.include("weblib/collection/Iterator");
//require.include("weblib/event/AbstractEventDispatcher");
//require.include("weblib/command/AbstractCommand");

/*
*
* CommandQueue
*
*/

function CommandQueue ( commandSet, autoStart ) {

    var _this = AbstractEventDispatcher ( this );

    var _iIterator = new Iterator ( [] ); // IIterator;
    var _activeCommand; // ICommand;
    var _currentCommandSet; // CommandSet;
    var _asyncCommandSet;

    var _commandSetQueue;
    var _isConsuming;
    var _session;

    function _construct ( commandSet, autoStart ) {

        _commandSetQueue = [];
        _asyncCommandSet = [];
        _isConsuming = false;

        if ( !isEmpty ( commandSet ) ) {
            _this.queue ( commandSet );
        }

        if ( autoStart == true ) {
            _this.start ();
        }

        return _this;
    }

    function _isQueueEmpty () {
        return ( _iIterator.hasNext () || _commandSetQueue.length ) ? false : true;
    }

    function _getNextCommand () {
        if ( !_iIterator.hasNext () ) {
            var currentCommandSet = _commandSetQueue.shift ();
            _iIterator = currentCommandSet.getIterator ();
            _currentCommandSet = currentCommandSet;
        }

        return _iIterator.next () ;
    }

    function _consumeExecute () {

        if ( isEmpty ( _activeCommand ) && !_isQueueEmpty () ) {
            _activeCommand = _getNextCommand ();

                // automatically handle asynchronous commands 
            if ( _activeCommand.async () ) {

                    // NEW : save a copy of async commands otherwise l can't cancel them
                _asyncCommandSet.push ( _activeCommand );
                _activeCommand.addEventListener ( "EXECUTE" , _onAsyncCommandExecute_listener ) ;

                    // mimic an instantaneous execute
                _activeCommand.execute ( _session ) ;
                _onCommandExecute_listener ( _activeCommand );
            } else {
                _activeCommand.addEventListener ( "EXECUTE" , _onCommandExecute_listener );
                _activeCommand.execute ( _session ) ;
            }
        }
    }

    function _consumeCancel () {
        if ( _activeCommand ) {
            _activeCommand.addEventListener ( "CANCEL" , _onCommandCancel_listener ) ;
            _activeCommand.cancel ( _session ) ;
        } else if ( isEmpty ( _activeCommand ) && !_isQueueEmpty () ) {
            _activeCommand = _getNextCommand ();
            _activeCommand.addEventListener ( "CANCEL" , _onCommandCancel_listener ) ;
            _activeCommand.cancel ( _session ) ;
        }
    }

    function _disposeOfCommand ( iCommand ) {
            // remove of all possible listeners
        iCommand.removeEventListener ( "EXECUTE" , _onCommandExecute_listener ) ;
        iCommand.removeEventListener ( "CANCEL" , _onCommandCancel_listener ) ;
    }

    function _onCommandExecute_listener ( target, data ) {
        _activeCommand = undefined;

            // dispatch an execute command
        _this.dispatchEvent ( "EXECUTE" ) ;

        if ( _isQueueEmpty () ) {
            _this.dispatchEvent ( "SEQUENCE_EXECUTED" );
            _this.dispatchEvent ( "QUEUE_EMPTY" );
        }

            // unless the the commandQueue has been stopped continue consuming
        if ( _isConsuming ) {
            _consumeExecute () ;
        }
    }

    function _onCommandCancel_listener ( commandEvent ) {

        _disposeOfCommand ( _activeCommand ) ;
        _activeCommand = undefined;

            // dispatch an cancel command
        _this.dispatchEvent ( "CANCEL" ) ;

        if ( _isQueueEmpty () ) {
            _this.dispatchEvent ( "SEQUENCE_CANCELLED" );
            _this.dispatchEvent ( "QUEUE_EMPTY" );
        } else {
            _consumeCancel ();
        }
    }

    function _onAsyncCommandExecute_listener ( commandEvent ) {

            // just remove the command from the async list
        _asyncCommandSet.splice ( _asyncCommandSet.indexOf ( commandEvent.target [ 0 ] ), 1 );
    }

    _this.queue = function ( item ) {

        var commandSet;
        if ( item.toString () == "ICommand" ) {
            commandSet = new CommandSet ();
            commandSet.push ( item );
            _commandSetQueue.push ( commandSet );
        } else if ( item.toString () == "CommandSet" ) {
            commandSet = item;
            if ( commandSet.length () ) {
                _commandSetQueue.push ( item ) ;
            }
        } else {
            throw new Error ( "CommandQueue.queue ( ... ) argument must be either an ICommand or CommandSet" );
        }

        if ( !_iIterator.hasNext () && _commandSetQueue.length ) {
            var currentCommandSet = _commandSetQueue.shift ();
            _iIterator = currentCommandSet.getIterator () ;
            _currentCommandSet = currentCommandSet;
        }

        if ( _isConsuming )
            _consumeExecute ();
    }

    _this.start = function () {
        _isConsuming = true;
        _consumeExecute ();
    }

    _this.stop = function () {
        _isConsuming = false;
    }

    _this.cancel = function () {

            // first cancal all the async commands
        while ( _asyncCommandSet.length > 0 ) {
            _asyncCommandSet.pop ().cancel ();
        }

        _consumeCancel ();
    }

    _this.session = function ( value ) {
        return ( isEmpty ( value ) ) ? _session : _session = value;
    }

    return _construct ( commandSet, autoStart );
}


/*
*
* CommandQueue.init ( element )
*
*/


CommandQueue.init = function ( element ) {

    function evalDataString ( dataString ) {
        
        var fixedDataString = dataString;
        var isJSONRegExp = /\s*{.*?}\s*/i;
        if ( isJSONRegExp.test ( dataString ) ) {
            
            // fix if there are no parenthesis, add them
            var regExpFix = /\({.*?}\)/i
            if ( !regExpFix.test ( dataString ) ) {
                fixedDataString = "(" + dataString + ")";
            }
        }
        
        return eval ( fixedDataString );
    }

    function queueCommandSet ( htmlCommandNode, commandSet ) {
        
        nodeName = htmlCommandNode.nodeName.toLowerCase ();
        
        var iCommand;
        switch ( nodeName ) {
            case "apply" :
                var callback = eval ( $( htmlCommandNode ).attr ( "callback" ) );
                var params = eval ( $( htmlCommandNode ).attr ( "params" ) );
                iCommand = commandSet.apply ( callback, params );
                break;
            case "ajax" :
                var url = $( htmlCommandNode ).attr ( "url" );
                var settings = evalDataString ( $( htmlCommandNode ).attr ( "settings" ) );
                iCommand = commandSet.ajax ( url, settings );
                break;
            case "css" :
                var selector = $( htmlCommandNode ).attr ( "selector" );
                var propeties = evalDataString ( $( htmlCommandNode ).attr ( "properties" ) );
                var parent = eval ( $( htmlCommandNode ).attr ( "parent" ) );
                iCommand = commandSet.css ( selector, propeties, parent );
                break;
            case "lock" :
                var delay = $( htmlCommandNode ).attr ( "delay" );
                iCommand = commandSet.lock ( delay );
                break;
            case "dispatchevent" :
                var target = evalDataString ( $( htmlCommandNode ).attr ( "target" ) );
                var event = $( htmlCommandNode ).attr ( "event" );
                var data = evalDataString ( $( htmlCommandNode ).attr ( "data" ) );
                iCommand = commandSet.dispatchEvent ( target, event, data );
                break;
            case "listener" :
                var target = evalDataString ( $( htmlCommandNode ).attr ( "target" ) );
                var event = $( htmlCommandNode ).attr ( "event" );
                var data = evalDataString ( $( htmlCommandNode ).attr ( "data" ) );
                iCommand = commandSet.listener ( target, event, data );
                break;
            case "assign" :
                var target = evalDataString ( $( htmlCommandNode ).attr ( "target" ) );
                var propery = $( htmlCommandNode ).attr ( "property" );
                var value = evalDataString ( $( htmlCommandNode ).attr ( "value" ) );
                iCommand = commandSet.assign ( target, event, data );
                break;
            case "debug" :
                var target = evalDataString ( $( htmlCommandNode ).attr ( "target" ) );
                var event = $( htmlCommandNode ).attr ( "event" );
                var data = evalDataString ( $( htmlCommandNode ).attr ( "data" ) );
                iCommand = commandSet.listener ( target, event, data );
                break;
        /*  
    }

    this.assign = function ( target, property, value ) {
        return this.apply ( this._assign, [ target, property, value ] );
    }


    this.debug
    */
                
            default :
                alert ( "nothing found" );
        }
        
        
    }

    $ ( "commandQueue", element ).each ( function ( index, value ) {
    
        var parentHTMLNode = $ ( value ).parent ();
        
        try {
            var autoStart = ( $( value ).attr ( "autostart" ).toLowerCase () == "false" ) ? false : true;
        } catch ( error ) {
            autoStart = true;
        }
        
        var commandQueue = new CommandQueue ( null, autoStart );
        parentHTMLNode.commandQueue = commandQueue;
    
        $( "commandSet", this ).each ( function ( index, value ) {
            
            var commandSet = new CommandSet ();
            
            $( "*", value ).each ( function ( index, value ) {
                queueCommandSet ( value, commandSet );
            } );
            
            commandQueue.queue ( commandSet );
        } );
    } );
}