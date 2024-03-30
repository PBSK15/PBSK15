//require.include("weblib/command/AbstractCommand");

/*
*
* CSSCommand
*
*/
function CSSCommand ( selector, cssProperties, parent ) {

    var _super ={};
    var _this = AbstractCommand ( this, "CSSCommand" );

    var _selector;
    var _cssProperties;
    var _parent;

    function _construct ( selector, cssProperties, parent ) {
        _selector = selector;
        _cssProperties = cssProperties;
        _parent = parent;

        return _this;
    }
    
    _super.execute = _this.execute;
    _this.execute = function ( session ) {
        
        if ( _this.state () == "CommandState.IDLE" ) {

                // mark the command as "EXECUTING"
            _this.state ( "CommandState.EXECUTING" );

                // param can be a selector ( String ) or jQuery object
            try {   
                $ ( _selector, _parent ).css ( _cssProperties );
            } catch ( e ) {
                _selector.css ( instance._cssProperties );  
            }
            
                // pretty much a synchronous command
            _super.execute ();

        }
    }
    
    return _construct ( selector, cssProperties, parent );
}