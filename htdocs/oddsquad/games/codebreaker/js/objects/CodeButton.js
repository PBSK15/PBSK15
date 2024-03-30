/** a super class for all touch objects **/


function CodeButton( btnImageSrc, isCenter, isSprite ) {

	"use strict";

	var _this = new createjs.Container();


	// return the newly constructed canvas element container
	function _Construct () {

		// create assets
		var btnImage;
		if (isSprite) {
			btnImage = CreateJSAssetManager.getSprite( btnImageSrc, false, false, false, isCenter );
		} else {
			btnImage = CreateJSAssetManager.getBitmap( btnImageSrc, false, false, false, isCenter );
		}
		_this.width = btnImage.width;
		_this.height = btnImage.height;

		var minRadius = (_this.height < _this.width) ? _this.height / 2 : _this.width / 2;
		var btnTouchArea = TouchHelper.NewTouchCircle(0, 0, minRadius);
		btnTouchArea.cursor = "pointer";

		_this.addChild(btnTouchArea);
		_this.addChild(btnImage);

		return _this;
	}


	return _Construct();

}
