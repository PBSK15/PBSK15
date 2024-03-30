//require.include("weblib/command/AbstractCommand");
//NOTE: Requires TweenJS

/*
*
* EaseToCommand ( for CreateJS object )
*
*/
function EaseToCommand ( target, time, tweenObject, completeCallback ) {

    var _super = {};
    var _this = AbstractCommand ( this, "EaseCommand" );

    var _tween;
    var _target;
    var _time;
    var _tweenObject;
    var _completeCallback;
    // var _onCompleteParams = tweenObject.onCompleteParams;

    function _construct ( target, time, tweenObject, completeCallback ) {
        _target = target;
        _time = time;
        _tweenObject = tweenObject;
        _completeCallback = completeCallback;

        return _this;
    }

    function _handleComplete () {
        
      // add on complete callback
            if ( !isEmpty ( _completeCallback ) )
                 _completeCallback ();

            // all done
        _super.execute ();
    }
    
    _super.execute = _this.execute;
    _this.execute = function ( session ) {

        if ( _this.state () == "CommandState.IDLE" ) {
            _this.state ( "CommandState.EXECUTING" );

            _tween = createjs.Tween.get ( _target ).to ( _tweenObject, _time ).call ( _handleComplete );

            console.log ( _tween );
            console.log ( _target );
            console.log ( _tweenObject );
            console.log ( _time );


        }
    }
    
    _super.cancel = _this.cancel;
    _this.cancel = function ( session ) {
    
        if ( !isEmpty ( _tween ) )
            _tween.removeTweens ( _tweenObject );
        
        
        _this._cancel ();
    }
    
    return _construct ( target, time, tweenObject, completeCallback );
}