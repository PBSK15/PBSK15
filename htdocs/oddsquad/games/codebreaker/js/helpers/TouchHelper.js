
var TouchHelper = TouchHelper || new function () {

	"use strict";

  	var _this = this;

	function _Construct() {
		return _this;
	}


	// create the cicular base touch area
	_this.NewTouchCircle = function( x, y, radius, alpha ) {
		var touchCircle = new createjs.Shape();
		touchCircle.graphics.beginFill("red").drawCircle(x, y, radius);
		touchCircle.alpha = alpha > 0 ? alpha : 0.01;
		return touchCircle;
	}

	return _Construct();
}