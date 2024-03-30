
/*
* Class AbstractCommand
*   Provides a base for classes which act as executable commands
*/
function AbstractCommand ( reference, id ) {

    var _super;
    var _this = AbstractEventDispatcher ( reference );

    var _id;
    var _state;
    var _async;

    function _construct ( id ) {
        _id = id;
        _state = "CommandState.IDLE";
        _async = false;

        return _this;
    }

    function _executeComplete () {
        _state = "CommandState.EXECUTED";
        _this.dispatchEvent ( new BaseEvent ( "EXECUTE" ) ) ;
        _this.release ();
    }

    function _cancelComplete () {
        _state = "CommandState.CANCEL";
        _this.dispatchEvent ( new BaseEvent ( "CANCEL" ) ) ;
        _this.release ();
    }

    _this.async = function ( value ) {
        return ( isEmpty ( value ) ) ? _async : _async = value;
    } 

    _this.id = function ( value ) {
        return ( isEmpty ( value ) ) ? _id : _id = value;
    }

    _this.state = function ( value ) {
        return ( isEmpty ( value ) ) ? _state : _state = value;
    }

    _this.execute = function ( session ) {
       _executeComplete ();
    }

    _this.cancel = function ( session ) {
       _cancelComplete ();
    }

    _this.reset = function () {
        _state = "CommandState.IDLE";
    }

    _this.toString = function () {
        return "ICommand";
    }
    
    return _construct ( id );
}