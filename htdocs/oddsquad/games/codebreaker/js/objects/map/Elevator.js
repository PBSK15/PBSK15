/* global require, createjs, console */

//require.include("objects/map/ScrollArrow.js");


Elevator.MAP_SCROLL_HEIGHT = 768;
Elevator.CART_START = 60;
Elevator.TEXT_SHIFT = 42;
Elevator.FLOOR_SHIFT = 21;
Elevator.FLOOR_HEIGHT = 48;

/**
 * The TileButton class, create a tile object with different tile states
 */
function Elevator( maxFloors, mapObject ) {

	"use strict";

	var _this = new createjs.Container();
	var _currentFloor = 0;
	var _floorNameList;
	var _cartImg;
	var _cartLine;

	var _ArwUp;
	var _ArwDown;

	// return the newly constructed canvas element container
	function _Construct () {

		// add direction buttons
		_ArwUp = new ScrollArrow( ScrollArrow.Direction.UP );
		_ArwDown = new ScrollArrow( ScrollArrow.Direction.DOWN );
		_ArwDown.y = maxFloors * Elevator.FLOOR_HEIGHT + Elevator.CART_START + Elevator.FLOOR_SHIFT;

		// cart string
		_cartLine = new createjs.Shape();
 		_cartLine.graphics.setStrokeStyle(3, "round");
 		_cartLine.graphics.beginStroke("#048D89");
 		_cartLine.graphics.moveTo(0, 0);
 		_cartLine.graphics.lineTo(0, 50);
 		_cartLine.graphics.endStroke();

 		_this.addChild(_cartLine);
		_this.addChild(_ArwUp);
		_this.addChild(_ArwDown);


		// add in between background
		_floorNameList = [];
		var initY = _ArwUp.height;
		for (var i = 0; i < maxFloors; i++) {

			// create floor bg
			var floorTile = CreateJSAssetManager.getBitmap("MapScrollBG", false, false, false, true);
			floorTile.x = Elevator.FLOOR_SHIFT;
			floorTile.y = i * Elevator.FLOOR_HEIGHT + Elevator.CART_START;
			_this.addChild(floorTile);
			
			// create floor text
			var floorText = new createjs.Text( i,  "normal 24px " + GameManager.FONT, "#FFFFFF");	//#575F61
			floorText.textBaseline = "middle";
			floorText.textAlign = "center";
			floorText.x = Elevator.TEXT_SHIFT;
			floorText.y = floorTile.y;
			floorText.alpha = 0.5;
			_this.addChild(floorText);

			_floorNameList.push(floorText);
		}


		// add events to buttons
		_ArwUp.on("mousedown", _ScrollUp);
		_ArwDown.on("mousedown", _ScrollDown);


		// cart image
		_cartImg = CreateJSAssetManager.getBitmap("MapElevator", false, false, false, true);
		_this.addChild(_cartImg);
		_cartImg.y = Elevator.CART_START;


		_ChkFloor();
		_this.GotoFloor(_currentFloor);
		return _this;
	}


	function _ScrollUp( evt ) {
		if (_currentFloor > 0) {
			AudioHelper.PlayBtnSound();
			AudioHelper.PlaySFX("SFX_Elevator_Slide_Up");
			FxHelper.PulseBouncy(evt.currentTarget, 1, 100);
			_this.GotoFloor(_currentFloor - 1);
			ga("send", "event", "CodeBreaker_Screenflow", "Elevator_Movement");
		} else {
			ga("send", "event", "CodeBreaker_Screenflow", "Elevator_Movement_Fail");
		}
	}

	function _ScrollDown( evt ) {
		if (_currentFloor + 1 < maxFloors) {
			AudioHelper.PlayBtnSound();
			AudioHelper.PlaySFX("SFX_Elevator_Slide_Down");
			FxHelper.PulseBouncy(evt.currentTarget, 1, 100);
			_this.GotoFloor(_currentFloor + 1);
			ga("send", "event", "CodeBreaker_Screenflow", "Elevator_Movement");
		} else {
			ga("send", "event", "CodeBreaker_Screenflow", "Elevator_Movement_Fail");
		}
	}


	function _ChkFloor() {
		var canGoUp = (_currentFloor > 0);
		_ArwUp.Active( canGoUp );

		var canGoDown = (_currentFloor < maxFloors - 1);
		_ArwDown.Active( canGoDown );

		for ( var i = 0; i < _floorNameList.length; i++) {
			_floorNameList[i].alpha = (_currentFloor == i) ? 1 : 0.5;
		}
	}


	_this.GotoFloor = function ( floorNumb ) {
		
		if (floorNumb >= maxFloors) {
			return;
		}

		_currentFloor = floorNumb;
		var mapPosY = -_currentFloor * Elevator.MAP_SCROLL_HEIGHT;
		var cartPosY = _currentFloor * Elevator.FLOOR_HEIGHT + Elevator.CART_START;
		var lineScaleY = (1 + ((cartPosY - Elevator.CART_START) / Elevator.FLOOR_HEIGHT));
		createjs.Tween.get(mapObject).to({y: mapPosY}, 500, createjs.Ease.sineInOut);
		createjs.Tween.get(_cartLine).to({scaleY: lineScaleY}, 500, createjs.Ease.sineInOut);
		createjs.Tween.get(_cartImg).to({y: cartPosY}, 500, createjs.Ease.sineInOut).call(_ChkFloor);
	};


	return _Construct();

}

