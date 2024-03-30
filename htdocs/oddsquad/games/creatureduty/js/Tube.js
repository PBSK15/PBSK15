/**
 * ODDSQUAD CREATURE DUTY 
 * 
 * Tube
 * 
 * handles saving, loading, and erasing of game data, including:
 * - how many rounds of the game have been played
 * - which creatures are in each pen
 * - how many rounds each creature has been fed
 * - how many creatures have been released
 * - what achievements have been achieved
 * - whether audio is on or off
 * - whether captions are on or off
 *     
 * @param {Boolean} isBig  	That's what she said.
 * (Big tubes are used in releasing creatures and delivering food; small tubes drop in creatures.)
 *
 */
var Tube = function (isBig) {
	createjs.Container.apply(this);
	var _this = this;
	
	this.front = isBig ? new lib.bigtube_front() : new lib.tube_front();
	this.back = isBig ? new lib.bigtube_back() : new lib.tube_back();
	this.front.mouseEnabled = this.back.mouseEnabled = false;
	
	if(isBig){
		_this.front.scaleX = _this.back.scaleX = 1.5;
	}
	
	this.interior = new createjs.Container();
	
	_log("tube front is "+this.front+", "+this.front.nominalBounds);
	this.nominalBounds = new createjs.Rectangle(-this.front.nominalBounds.width/2, 0, this.front.nominalBounds.width, this.front.nominalBounds.height);
	this.y = -this.nominalBounds.height;

	this.front.x = this.back.x = isBig ? 0 : -(this.front.nominalBounds.width*this.front.scaleX)/2;
	this.front.y = this.back.y = 0;
	
	this.contents = null;
	this.contentsParent = null;
	
	this.topPt = new Point(0, 0);
	
	this.addChild(this.back, this.interior, this.front);
	
	this.hide = function (){
		_this.y = -this.nominalBounds.height;
	}
	
	/**
	 * dropIn
	 * ------
	 * Animate a giant tube onto the screen, have it spit something out, and then retract tube.
	 * 
	 * @param  {createjs.DisplayObject} displayObj   The thing that will be dropped out of the tube.
	 * @param  {Point} dropPt       	Coords for where to drop the thing, relative to the thing's local space.
	 * @param  {int} dropDuration 	How many milliseconds the drop should take
	 * @param  {function} dropEase   	Easing type for movement of thing through tube, as per createjs.Ease
	 * @return {void}
	 */
	this.dropIn = function (displayObj, dropPt, dropDuration, dropEase){
		_log("%c dropIn ","background-color:chartreuse;");
		var localDropPt = displayObj.parent.localToLocal(dropPt.x, dropPt.y, _this.parent);
		_this.x = localDropPt.x;
		_this.contents = displayObj;
		_this.contentsParent = _this.contents.parent;
		createjs.Tween.get(_this).to({x:localDropPt.x, y:localDropPt.y - _this.nominalBounds.height}, 500, createjs.Ease.getPowIn(1.2)).call(_this.dropContents, [localDropPt, dropDuration, dropEase]);
	}

	/**
	 * dropContents
	 * ------------
	 * Display the contents moving through the tube from top to bottom
	 * 
	 * @param  {Point} localDropPt  	Where to drop the contents, relative to the tube.
	 * @param  {int} dropDuration 	How many milliseconds the drop should take
	 * @param  {function} dropEase    Easing type for movement of contents through tube, as per createjs.Ease
	 * @return {void}
	 */
	this.dropContents = function (localDropPt, dropDuration, dropEase){
		_log("%c dropContents ","background-color:chartreuse;");
		_this.contents.alpha = 1;
		_this.interior.addChild(_this.contents);
		_this.contents.x = 0;
		_this.contents.y = -200;
		createjs.Tween.get(_this.contents).to({y:_this.nominalBounds.height}, dropDuration, dropEase).call(_this.doTheDrop);
	}

	/**
	 * doTheDrop
	 * ---------
	 * Eject the contents from the tube and retract the tube
	 * 
	 * @return {void}
	 */
	this.doTheDrop = function (){
		_log(("%c doTheDrop! %c tube currently at "+_this.y.toFixed(2)),"background-color:yellowgreen");
		if(_this.contents != undefined){
			var oppositeMovementTarget = _this.front.nominalBounds.height + _this.y;
			
			var cppt = _this.interior.localToLocal(_this.contents.x, _this.contents.y, _this.contentsParent);
			_this.contentsParent.addChild(_this.contents);	
			_this.contents.x = canvas.width/2;
			_this.contents.y = cppt.y;
			
			createjs.Tween.get(_this).wait(100).to({y:_this.y -_this.front.nominalBounds.height}, 200, createjs.Ease.getPowOut(1.3)).call(_this.dropComplete);
		}
	}

	/**
	 * dropComplete
	 * ------------
	 * Dispatch an event announcing that the drop is complete.
	 * 
	 * @return {void}
	 */
	this.dropComplete = function (){
		var evt = new createjs.Event("TUBE_DROP", true);
		evt.data = {contents:_this.contents};
		_this.dispatchEvent(evt);
	}
	
		/**
		 * liftUp
		 * ------
		 *  Animate a giant tube onto the screen, have it suck something up, and then retract tube.
		 * 
		 * @param  {createjs.Container} inContainer  Inside what object should we display this tube?
		 * @param  {createjs.DisplayObject} displayObj   The thing to lift up.
		 * @param  {Point} liftPt     	Where to center the bottom of the tube, local to the thing to lift.
		 * @param  {int} liftDuration  	How many milliseconds should the lift take
		 * @param  {function} liftEase   	Easing type for movement of contents through tube, as per createjs.Ease
		 * @return {void}
		 */
	this.liftUp = function (inContainer, displayObj, liftPt, liftDuration, liftEase){
		inContainer.addChild(_this);
		_this.contents = displayObj;
		var localLiftPt = displayObj.parent.localToLocal(liftPt.x, liftPt.y, _this.parent);
		_this.x = localLiftPt.x;
		createjs.Tween.get(_this).to({y:220}, 500, createjs.Ease.getPowIn(1.2)).call(_this.liftContents, [liftDuration, liftEase]);	
	}

	/**
	 * liftContents
	 * ------------
	 * Display the contents moving through the tube from bottom to top
	 * @param  {int} liftDuration 	How many milliseconds should the lift take
	 * @param  {function} liftEase    Easing type for movement of contents through tube, as per createjs.Ease
	 * @return {void}
	 */
	this.liftContents = function (liftDuration, liftEase){
		_this.contentsParent = _this.contents.parent;
		var cppt = _this.contentsParent.localToLocal(_this.contents.x, _this.contents.y, _this.interior);
		_this.interior.addChild(_this.contents);	
		_this.contents.scaleX *= _this.contentsParent.scaleX;
		_this.contents.scaleY *= _this.contentsParent.scaleY;
		_this.contents.x = cppt.x;
		_this.contents.y = cppt.y;
		
		createjs.Tween.get(_this.contents).to({y:-200}, liftDuration, liftEase);
		createjs.Tween.get(_this).wait(liftDuration + 100).to({y:-_this.front.nominalBounds.height}, 200, createjs.Ease.getPowOut(1.3)).call(_this.liftComplete);
	}

	/**
	 * liftComplete
	 * ------------
	 * Get rid of the thing we lifted out, and dispatch an event announcing that the lift is complete.
	 * 
	 * @return {void}
	 */
	this.liftComplete = function (){
		
		var evt = new createjs.Event("LIFTED_CREATURE", true);
		evt.data = {contents:_this.contents};
		_this.dispatchEvent(evt);
		_this.parent.removeChild(_this);
	}	

}

Tube.prototype = createjs.Container.prototype;
Tube.prototype.constructor = Tube;

