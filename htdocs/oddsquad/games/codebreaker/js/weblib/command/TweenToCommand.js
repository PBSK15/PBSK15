//require.include( "weblib/external/TweenMax.min.js" );

/*
*
* TweenToCommand
*
*/
function TweenToCommand ( target, time, tweenObject ) {

    var _super = {};
    var _this = AbstractCommand ( this, "TweenCommand" );

    var _tweenCommand;
    var _target;
    var _time;
    var _tweenObject;
    var _onComplete;
    var _onCompleteParams;

    function _construct ( target, time, tweenObject ) {
        _target = target;
        _time = time;
        _tweenObject = tweenObject;
        _onComplete = tweenObject.onComplete;
        _onCompleteParams = tweenObject.onCompleteParams;

        _tweenObject.onComplete = _onCompleteCallBack;
        _tweenObject.onCompleteParams = [ _this ];
        

        return _this;
    }
    
        // replace onComplete function
    function _onCompleteCallBack ( instance ) {
        
            // launch a onComplete callback if one exists
        if ( !isEmpty ( _onComplete ) )
            _onComplete.apply ( _this, _onCompleteParams );
        
        _super.execute ();
    }
    
    _super.execute = _this.execute;
    _this.execute = function ( session ) {

        _tweenCommand = TweenMax.to ( _target, _time, _tweenObject );
    }
    
    _super.cancel = _this.cancel;
    _this.cancel = function ( session ) {
    
        if ( !isUndefined ( _tweenCommand ) )
            _tweenCommand.kill ();
        
        
        _super.cancel ();
    }
    
    return _construct ( target, time, tweenObject );
}