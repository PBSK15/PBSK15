
/*
* Class CommandSet
*   Contains a set of commands and provides convenience methods for adding new commands.
*/
function CommandSet ( initId ) {

    var _this = this;

    var _commandSet = [];
    var _version = "1.01";
    var _id = initId;

    _this.length = function () {
        return _commandSet.length;
    }

    _this.getIterator = function () {
        return new Iterator ( _commandSet );
    }

    _this.unshift = function ( iCommand ) {
        _commandSet.unshift ( iCommand );
    }

    _this.push = function ( iCommand ) {
        _commandSet.push ( iCommand );
    }

    _this.apply = function ( callBack, params, context ) {
        var applyCommand = new ApplyCommand ( callBack, params, context );
        _commandSet.push ( applyCommand );
        return applyCommand;
    }
    
    _this.css = function ( selector, cssProperties ) {
        var cssCommand = new CSSCommand ( selector, cssProperties );
        _commandSet.push ( cssCommand );
        return cssCommand;
    }
    
    _this.ajax = function ( url, settings ) {
        var ajaxCommand = new AjaxCommand ( url, settings );
        _commandSet.push ( ajaxCommand );
        return ajaxCommand;
    }

    _this.tweenTo = function ( target, time, tweenProperties ) {
        var tweenToCommand = new TweenToCommand ( target, time, tweenProperties );
        _commandSet.push ( tweenToCommand );
        return tweenToCommand;
    }

    _this.easeTo = function ( target, time, tweenProperties ) {
        var easeToCommand = new EaseToCommand ( target, time, tweenProperties );
        _commandSet.push ( easeToCommand );
        return easeToCommand;
    }

        /* public function tweenFrom ( target : Object, time : Number, tweenProperties : Object ) : ICommand {
            var tweenCommand : TweenCommand = new TweenCommand ( target, time, tweenProperties, false );
            _commandSet.push ( tweenCommand );
            return tweenCommand;
        } */

    _this.lock = function ( delay ) {
        var lockCommand = new LockCommand ( delay );
        _commandSet.push ( lockCommand );
        return lockCommand;
    }

    _this.dispatchEvent = function ( target, event, data ) {
        return _this.apply ( target.dispatchEvent, [ event, data ], target );
    }

    _this.listener = function ( target, event, listener, context ) {
        var listenerCommand = new ListenerCommand ( target, event, listener, context );
        _commandSet.push ( listenerCommand );
        return listenerCommand;
    }

    /* _this.assign = function ( target, property, value ) {
        return _this.apply ( _assign, [ target, property, value ] );
    }

    _this._assign = function ( target, property, value ) {
        target [ property ] = value;
    } */

    _this.thread = function ( commandSet ) {
        var threadCommand = new ThreadCommand ( CommandSet );
        _commandSet.push ( listenerCommand );
        return threadCommand;
    }

    _this.debug = function ( message ) {
        /* for( var i = 0; i < arguments.length; i++ ) {
            alert("This accident was caused by " + arguments[i]);
        } */

        _this.apply ( _log, [ message ] );
    }

    _this.queue = function () {
        return new CommandQueue ( _this, true );
    }

    _this.release = function () {
        for ( var i = 0; i < _commandSet.length; i++ ) 
            _commandSet [ i ].cancel ();
        
        _commandSet = null;
    }

    _this.toString = function () {
        return "CommandSet";
    }
}