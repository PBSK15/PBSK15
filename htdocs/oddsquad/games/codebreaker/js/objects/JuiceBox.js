JuiceBox.BOUNCE_HEIGHT = 16;
JuiceBox.BOUNCE_SPEED = 1200;

JuiceBox.ID1 = "A";
JuiceBox.ID2 = "B";
JuiceBox.ID3 = "C";

/**
 * The TileButton class, create a tile object with different tile states
 */
function JuiceBox( boxID, isHover ) {

	"use strict";

	var _this = new createjs.Container();
	var _shadowImg;
	var _boxImg;
	var _boxID = boxID;

	_this.getID = function () {
		return _boxID;
	}

	_this.getIndex = function () {
		switch (_boxID) {
			case JuiceBox.ID1:
				return 0;
			break;
			case JuiceBox.ID2:
				return 1;
			break;
			case JuiceBox.ID3:
				return 2;
			break;
		}
	}


	// return the newly constructed canvas element container
	function _Construct () {
		
		// create a juice box and its shadow
		_shadowImg = CreateJSAssetManager.getSprite("JuiceBox_Shadow", false, false, false, true);
		_boxImg = CreateJSAssetManager.getSprite("JuiceBox" + _boxID, false, false, false, true);
		_boxImg.regY = _boxImg.height;

		_this.width = _boxImg.width;
		_this.height = _boxImg.height;

		_this.addChild(_shadowImg);
		_this.addChild(_boxImg);
	
		// bounce the juice box
		_this.Hover(isHover);
//		_this.alpha = 0.6;
		
		return _this;

	}


	_this.Hover = function( isHovering ) {
		if (isHovering) {
			FxHelper.PulseFloat(_boxImg, JuiceBox.BOUNCE_HEIGHT, JuiceBox.BOUNCE_SPEED + Math.random() * 500);
		} else {
			FxHelper.StopPulse(_boxImg);
			_boxImg.x = 0;
			_boxImg.y = 0;
		}
	}

	return _Construct();
}


//.to({y:-JuiceBox.BOUNCE_HEIGHT}, JuiceBox.BOUNCE_TIME, createjs.Ease.quadIn )
//.to({y:0}, JuiceBox.BOUNCE_TIME / 2, createjs.Ease.quadIn);

//.to({y:-JuiceBox.BOUNCE_HEIGHT}, JuiceBox.BOUNCE_TIME, createjs.Ease.circOut )
//.to({y:0}, JuiceBox.BOUNCE_TIME / 2, createjs.Ease.circIn);