HintPing.BOUNCE_HEIGHT = 2;
HintPing.BOUNCE_SPEED = 500;

HintPing.PULSE_HEIGHT = 3;
HintPing.PULSE_SPEED = 800;

/**
 * The TileButton class, create a tile object with different tile states
 */
function HintPing( pingObj ) {

	"use strict";

	var _this = new createjs.Container();
	var _shadowImg;
	var _pingImg;

	// return the newly constructed canvas element container
	function _Construct () {

		if (pingObj) {

			// use custome object
			_pingImg = pingObj;//.clone(true);

		} else {

			// create a juice box and its shadow
			_shadowImg = CreateJSAssetManager.getSprite(gameTilesJson,"Arrow_Shadow", true);
			_pingImg = CreateJSAssetManager.getSprite(gameTilesJson, "Arrow", true);
			_this.addChild(_shadowImg);

			_pingImg.regY = _pingImg.height;
		}

		_this.width = _pingImg.width;
		_this.height = _pingImg.height;

		_this.addChild(_pingImg);

		return _this;
	}


	_this.Enable = function ( isEnabled ) {
		if (isEnabled) {
			//FxHelper.PulseArrow(_pingImg, HintPing.BOUNCE_HEIGHT, HintPing.BOUNCE_SPEED);
			//FxHelper.PulseBlink(_pingImg, HintPing.PULSE_HEIGHT, HintPing.PULSE_SPEED);
			FxHelper.PulseHint(_pingImg, HintPing.PULSE_HEIGHT, HintPing.PULSE_SPEED);
		} else {
			FxHelper.StopPulse(_pingImg);
		}
		_pingImg.visible = isEnabled;
	}

	return _Construct();

}
