function ThreadCommand ( item ) {

    var _super = {};
    var _this = AbstractCommand ( this, "ThreadCommand" );
    var _commandQueue;
    var _threadCommandQueue;

    function _construct ( item ) {
        _commandQueue = ( item instanceof CommandSet ) ? new CommandQueue ( item, false ) : item;
    }

    function _executeComplete_listener ( event ) {

    }

    _super.execute = _this.execute;
    _this.execute = function ( session ) {
        var commandSet = new CommandSet ();
        commandSet.listener ( _commandQueue, "SEQUENCE_EXECUTED" );
        commandSet.apply ( _super.execute );
        _threadCommandQueue = commandSet.queue ();

            // start the commandQueue
        _commandQueue.start ();
    }
    
    _super.cancel = _this.cancel;
    _this.cancel = function ( session ) {
        _threadCommandQueue.cancel ();
    }

    return _construct ( item );
}