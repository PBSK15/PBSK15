ExitTile.FLOAT_AMT = 24;
ExitTile.FLOAT_SPD = 200;

/**
 * The TileButton class, create a tile object with different tile states
 */
function ExitTile() {

	"use strict";

	var _this = new createjs.Container();
	var _tileBackground;

	var _tileArrow;
	var _tileArrowShadow;
	var _tileArrowContainer;
	var _touchArea;

	// return the newly constructed canvas element container
	function _Construct () {

		_tileBackground = CreateJSAssetManager.getBitmap("GameDoorway01Floor", false, false, false, true);
		
		_tileArrow = CreateJSAssetManager.getSprite("Arrow", false, false, false, true);
		_tileArrowShadow = CreateJSAssetManager.getSprite("Arrow_Up_Shadow", false, false, false, true);
		_tileArrowContainer = new createjs.Container();

		_this.addChild(_tileBackground);
		_this.addChild(_tileArrowContainer);

		_tileArrowContainer.addChild(_tileArrow);
		_tileArrowContainer.addChild(_tileArrowShadow);
		_tileArrow.rotation = 180;
		_tileArrowShadow.rotation = 180;
		_tileArrow.y = 20;
		_tileArrowShadow.y = 50;
		
		_touchArea = TouchHelper.NewTouchCircle(0, 12, 64);
		_this.addChild(_touchArea);

		_this.cursor = "pointer";
		_this.Enable( true );

		return _this;
	}


	_this.Enable = function ( isEnabled ) {
		_this.visible = isEnabled;
		if (isEnabled) {
			FxHelper.PulseFloat(_tileArrowContainer, ExitTile.FLOAT_AMT, ExitTile.FLOAT_SPD);
		} else {
			FxHelper.StopPulse(_tileArrowContainer);
		}
	}

	return _Construct();

}


//.to({y:-JuiceBox.BOUNCE_HEIGHT}, JuiceBox.BOUNCE_TIME, createjs.Ease.quadIn )
//.to({y:0}, JuiceBox.BOUNCE_TIME / 2, createjs.Ease.quadIn);

//.to({y:-JuiceBox.BOUNCE_HEIGHT}, JuiceBox.BOUNCE_TIME, createjs.Ease.circOut )
//.to({y:0}, JuiceBox.BOUNCE_TIME / 2, createjs.Ease.circIn);