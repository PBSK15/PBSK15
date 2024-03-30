
/**
*   Provides a base for classes that can have listeners registered and can dispatch events
*/
function AbstractEventDispatcher ( reference ) {

    var _this = reference;
    var _listenerMap;

    function _construct () {
        _listenerMap = {};

        _this._listenerMap = _listenerMap;

        return _this;
    }

    _this.indexOfListener = function ( listener, context, listenerSet ) {
        
        for ( var i = 0; i < listenerSet.length; i++ ) 
            if ( listener === listenerSet [ i ].listener && context === listenerSet [ i ].context ) 
                return i;


        return -1;
    }

    _this.addEventListener = function ( event, listener, context ) {

        if ( !_this.hasEventListener ( event.toUpperCase (), listener, context ) ) {
            try {
                var listenerSet = _listenerMap [ event.toUpperCase () ];
                listenerSet.push ( { listener : listener, context : context } );
            } catch ( error ) {
                _listenerMap [ event.toUpperCase () ] = [ { listener : listener, context : context } ];
            }
        }
    }

    _this.removeEventListener = function ( event, listener, context ) {
        var listenerSet = _listenerMap [ event.toUpperCase () ];
        if ( listenerSet ) {
            var indexOf = _this.indexOfListener ( listener, context, listenerSet );
            if ( indexOf > -1 ) {
                listenerSet.splice ( indexOf, 1 );
            }
        }
    }

    _this.hasEventListener = function ( event, listener, context ) {

            // check if the
        var listenerSet = _listenerMap [ event.toUpperCase () ];
        if ( listenerSet ) {
            if ( _this.indexOfListener ( listener, context, listenerSet ) > -1 ) {
                return true;
            }
        }

        return false;
    }

    _this.dispatchEvent = function ( event, data ) {
        var listenerSet = _listenerMap [ String ( event ).toUpperCase () ];

        if ( listenerSet ) {

            //If this event already has at least one target set, append this object to the end of the target list
            if ( event.target instanceof Array ) {
                event.target.push ( _this );
            } else {
                event.target = [ _this ];
            } 

            for ( var i = 0; i < listenerSet.length; i++ ) {
            
                // maintains backwards compatibility
                if ( typeof ( event ) == "string" ) {
                    listenerSet [ i ].listener.apply ( listenerSet [ i ].context, [ _this, data ] );
                } else {

                    listenerSet [ i ].listener.apply ( listenerSet [ i ].context, [ event ] );
                }
                
            }
        }
    }
    
    _this.release = function () {

        for ( var property in _listenerMap ) {
            delete _listenerMap [ property ];
		}
    }

    return _construct ();
}