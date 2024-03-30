LevelSelector.FONT_BASE_COLOR = "#464339";
LevelSelector.FONT_BORDER_BASE = "#376D60";

LevelSelector.FONT_ACTIVE_COLOR = "#FFFFFF";
LevelSelector.FONT_ACTIVE_BORDER = "#4CCCCD";

LevelSelector.TOUCH_RADIUS = 64;

/**
 * Create a button that indicate the given level
 * @lvlData {name, lvlIndex, mapInfo: {x, y, m}} : The information needed to create this button
 */
function LevelSelector( lvlData, isActive ) {
	
	"use strict";

	var _this = new createjs.Container();
	var _lvlText;
	var _tileBG;
	var _boxList = [];

	function _Constructor( ) {

		_this.active = isActive;

		var levelIndex = lvlData.lvlIndex;
		var positionInfo = lvlData.mapInfo;

		// find the base color
		var colorBase = (isActive) ? LevelSelector.FONT_ACTIVE_COLOR : LevelSelector.FONT_BASE_COLOR;
		var colorBorder = (isActive) ? LevelSelector.FONT_ACTIVE_BORDER : LevelSelector.FONT_BORDER_BASE;

		// create the base touch area
		var targetCircle = TouchHelper.NewTouchCircle(0, 0, LevelSelector.TOUCH_RADIUS);
		_this.addChild(targetCircle);
    

		// create the tile background
		_tileBG = CreateJSAssetManager.getBitmap("MapSelector", false, false, false, true);
		_tileBG.regX = 60;
    	_this.addChild(_tileBG);

    	// create the level text
		_lvlText = FxHelper.CreateLevelNumber( levelIndex + 1, 80, 0, 6, colorBase, colorBorder);
		_lvlText.regY = -44;
		_this.addChild(_lvlText);


    	_this.x = positionInfo.x;
    	_this.y = positionInfo.y;
    	_this.name = lvlData.name;
    	_this.lvlData = lvlData;

		return _this;
	}


	function _MakeJuiceIcon( boxID, idx ) {
		var boxImg = CreateJSAssetManager.getSprite("JuiceBox" + boxID, false, false, false, true);
		boxImg.x = (idx - 1) * 24;
		boxImg.y = (idx == 1) ? 40 : 36;
		boxImg.scaleX = .75;
		boxImg.scaleY = .75;
		boxImg.rotation = -24;
		
		createjs.Tween.get(boxImg).wait(idx * 200).play(
			createjs.Tween
				.get(boxImg, {paused:true, loop:true})
				.to({y:boxImg.y + 1}, 800, Loopolation.easeSine)
		);
		//FxHelper.PulseFloat(boxImg, 200, 200 + Math.random() * 200);
		return boxImg;
	}




	_this.ResetInfo = function ( lvlProgress ) {

		//_tileBG.visible = false;

		// reset text
		if (lvlData.lvlIndex <= lvlProgress) {
			_this.active = true;
			_this.cursor = "pointer";
			_lvlText.SetTextColor(LevelSelector.FONT_ACTIVE_COLOR, LevelSelector.FONT_ACTIVE_BORDER);
		} else {
			_this.active = false;
			_this.cursor = "auto";
			_lvlText.SetTextColor(LevelSelector.FONT_BASE_COLOR, LevelSelector.FONT_BORDER_BASE);
		}

		// pulse current level
		_lvlText.scaleX = 1;
		_lvlText.scaleY = 1;
		FxHelper.StopPulse(_lvlText);
		if (lvlData.lvlIndex == lvlProgress) {
			FxHelper.PulseGrow(_lvlText, 1.4, 360);
		}


		// reset juicebox
		for ( var j = 0; j < _boxList.length; j++) {
			_this.removeChild(_boxList[j]);
		}
		
		_boxList = [];
		var juiceBoxes = SaveHelper.GetLevelData(lvlData.lvlIndex);
		for ( var i = 0; i < juiceBoxes.length; i++ ) {
			var jIcon = _MakeJuiceIcon(juiceBoxes[i], i);
			_this.addChild(jIcon);
			_boxList.push(jIcon);
		}
	}



	return _Constructor();
}

