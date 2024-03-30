//require.include("weblib/command/AbstractCommand");

/*
*
* LockCommand
*
*/
function LockCommand ( delay ) {

    var _super = {};
    var _this = AbstractCommand ( this, "LockCommand" );

    var _delay;
    var _timeOut;

    function _construct ( delay ) {
        _delay = delay;

        return _this;
    }

    function _timeOutComplete () {
        _super.execute ();
    }

    _super.release = _this.release;
    _this.release = function () {
        if ( _timeOut )
            clearTimeout ( _timeOut );
        
        _super.release ();
    }

    _this.unlock = function () {
        _super._execute ();
    }

    _super.execute = _this.execute;
    _this.execute = function ( session ) {

        if ( _this.state () == "CommandState.IDLE" ) {
            _this.state ( "CommandState.EXECUTING" );
            if ( _delay )
                _timeOut = setTimeout ( function () { _timeOutComplete () }, _delay );

        }

    }

    _super.cancel = _this.cancel;
    _this.cancel = function ( session ) {
        if ( _timeOut )
            clearTimeout ( _timeOut );
        
        
        _super.cancel ();
    }
    
    return _construct ( delay );
}