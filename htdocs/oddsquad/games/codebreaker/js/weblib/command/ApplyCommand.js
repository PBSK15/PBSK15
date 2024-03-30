//require.include("weblib/command/AbstractCommand");

/*
*
* ApplyCommand
*
*/
function ApplyCommand ( callback, params, conxtext ) {

    var _super = {};
    var _this = AbstractCommand ( this, "ApplyCommand" );

    var _callback;
    var _params;
    var _context;

    function _construct ( callback, params, conxtext ) {
        _callback = callback;
        _params = params;
        _context = conxtext;

        return _this;
    }

    _super.execute = _this.execute;
    _this.execute = function ( session ) {

        if ( _this.state () == "CommandState.IDLE" ) {
            _this.state ( "CommandState.EXECUTING" );
            _callback.apply ( _context, _params );
            _super.execute ();
        }
        
    }
    
    return _construct ( callback, params, conxtext );
}