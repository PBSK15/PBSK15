RoomDoor.DOOR_PAD = 10;
RoomDoor.DOOR_OPENSIZE = 140;
RoomDoor.DOOR_OPENTIME = 500;

RoomDoor.STATE = {
	NULL: 0,
	CLOSED: 1,
	CLOSING: 2,
	OPENED: 3,
	OPENING: 4
}
/**
 * The TileButton class, create a tile object with different tile states
 */
function RoomDoor( floorNumb ) {

	"use strict";
	var _this = new createjs.Container();
	var _doorLeft;
	var _doorRight;
	var _doorLaser;
	var _doorNodes;
	
	function _Construct() {
		
		_setDoorState(RoomDoor.STATE.CLOSED);
		
		_doorLeft = CreateJSAssetManager.getBitmap("GameDoorway0" + floorNumb + "Left");
		_doorRight = CreateJSAssetManager.getBitmap("GameDoorway0" + floorNumb + "Right");
		_doorNodes = CreateJSAssetManager.getBitmap("GameDoorway0" + floorNumb + "Nodes", false, false, false, true);
		_doorLeft.regY = _doorRight.regY = (_doorLeft.height / 2);
		_doorLeft.regX = _doorLeft.width - RoomDoor.DOOR_PAD;
		_doorRight.regX = RoomDoor.DOOR_PAD;
		_this.addChild(_doorLeft);
		_this.addChild(_doorRight);
		_this.addChild(_doorNodes);

		_doorLaser = CreateJSAssetManager.getBitmap("GameDoorway0" + floorNumb + "Beam", false, false, false, true);
		_doorLaser.y = 4;
		_doorNodes.y = 4;
		createjs.Tween
			.get(_doorLaser, {loop:true, override:true})
			.to({alpha: 0.1}, Math.random() * 50)
			.to({alpha: 1.0}, Math.random() * 50)
			.to({alpha: 1.0}, Math.random() * 1000)
			.to({alpha: 1.0}, Math.random() * 50)
			.to({alpha: 0.1}, Math.random() * 200)
			.to({alpha: 1.0}, Math.random() * 50);
		_this.addChild(_doorLaser);

		return _this;
	}



	function _setDoorState( state ) {
		_this.currentState = state;
	}


	_this.slideDoor = function( isOpen ) {

		AudioHelper.PlaySFX("SFX_Door_Slide");

		if (isOpen) {

			_setDoorState(RoomDoor.STATE.OPENING);
			createjs.Tween.removeTweens(_doorLeft);
			createjs.Tween.removeTweens(_doorRight);

			createjs.Tween.get(_doorLeft)
				.to({x: -RoomDoor.DOOR_OPENSIZE}, RoomDoor.DOOR_OPENTIME);
			createjs.Tween.get(_doorRight)
				.to({x: RoomDoor.DOOR_OPENSIZE}, RoomDoor.DOOR_OPENTIME)
				.call(_setDoorState, [RoomDoor.STATE.OPENED]);
			_doorLaser.visible = !isOpen;

		} else {

			_setDoorState(RoomDoor.STATE.CLOSING);
			createjs.Tween.removeTweens(_doorLeft);
			createjs.Tween.removeTweens(_doorRight);

			createjs.Tween.get(_doorLeft)
				.to({x: 0}, RoomDoor.DOOR_OPENTIME);
			createjs.Tween.get(_doorRight)
				.to({x: 0}, RoomDoor.DOOR_OPENTIME)
				.call(_setDoorState, [RoomDoor.STATE.CLOSED]);
			_doorLaser.visible = !isOpen;
		}
	}

	return _Construct();
}