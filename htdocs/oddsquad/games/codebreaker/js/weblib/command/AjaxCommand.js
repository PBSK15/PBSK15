//require.include("weblib/command/AbstractCommand");

/*
*
* AjaxCommand
*
*/
function AjaxCommand ( url, settings ) {

    var _super = {};
    var _this = AbstractCommand ( this, "AjaxCommand" );

    var _jqueryAjax;
    var _url;
    var _context;
    var _complete;
    var _success;
    var _response;

    function _construct ( settings ) {
        _url = url;
        _settings = settings;

        _context = _settings.context;
        _complete = _settings.complete;
        _success = _settings.success;

             // replace complete with our own complete callbacks, then callback original
        _settings.context = _this;
        _settings.complete = _ajaxComplete;
        _settings.success = _ajaxSuccess;

        return _this;
    }

    function _ajaxComplete () {

        if ( !isEmpty ( _complete ) )
            _complete.apply ( _context );

            // all done, execution complete
        _super.execute ();
    }

    function _ajaxSuccess ( response ) {
        _response = response;

        if ( !isEmpty ( _success ) ) 
           _success.apply ( _context, response );
        

    }

    _super.execute = _this.execute;
    _this.execute = function ( session ) {

        if ( _this.state () == "CommandState.IDLE" ) {
            _this.state ( "CommandState.EXECUTING" );
            _jqueryAjax = $.ajax ( _url, _settings );
        }

    }

    _super.cancel = _this.cancel;
    _this.cancel = function ( session ) {
    
        if ( !isEmpty ( _jqueryAjax ) )
            _jqueryAjax.abort ();
            
            // let the command finish 
        _super.cancel ();
    }

    return _construct ( url, settings );
}