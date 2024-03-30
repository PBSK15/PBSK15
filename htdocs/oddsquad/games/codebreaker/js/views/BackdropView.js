
//require.include("objects/ExitTile.js");
//require.include("objects/RoomDoor.js");

var TILE_WRAPPER_CLASS = "tileWrapper";
var TILE_CLASS = "tileItem";

// Generate the background elements
function BackdropView( parentScreen ) {

	var _this = new createjs.Container();
	var _exitBtn;
	var _winPopup;
	var _floorIndex;
	var _myDoor;


	// create all background scene elements
	function _Construct () {

		// construct the container
		_this.width = parentScreen.width;
		_this.height = parentScreen.height;
		_floorIndex = parentScreen.mapInfo.m;
		parentScreen.addChild(_this);
		
		_AddBehindDoor();
		_CreateDoor();
		_AddRoom();

//		_AddEnvironment();

		//console.log(_myScene.width);
		return _this;
	}



	function _AddBehindDoor() {
		var floorImgId = "GameDoorway0" + (parentScreen.mapInfo.m + 1) + "Floor";
		var doorFloor = CreateJSAssetManager.getBitmap( floorImgId, false, false, false, true);
		doorFloor.x = _this.width / 2;
		doorFloor.y = 208;
		_this.addChild(doorFloor);
	}



	function _CreateDoor() {

		// create the exit button
		_exitBtn = new ExitTile();
		_this.addChild(_exitBtn);
		
		_exitBtn.on('mousedown', _ShowMenu);
		_exitBtn.Enable(false);
		_exitBtn.x = _this.width / 2;
		_exitBtn.y = 206;
		

		// create the end tile
		_myDoor = new RoomDoor(_floorIndex + 1);
		_this.addChild(_myDoor);
		_myDoor.x = _this.width / 2;
		_myDoor.y = 208;
	}

	function _AddRoom() {
		var bitmapName = "GameRoom0" + (_floorIndex + 1);
		var bgImage = CreateJSAssetManager.getBitmap( bitmapName );
		bgImage.y = 0;
		_this.addChild(bgImage);
	}


	function _ShowMenu() {
		CodeController.AgentToExit(_exitBtn.x, _exitBtn.y + 40);
		//CodeController.LevelEnd();
	}



	function _AddEnvironment() {

		var leftTubes = CreateJSAssetManager.getBitmap( "GameSideTubes" );
		leftTubes.y = _this.height - leftTubes.image.height;
		_this.addChild(leftTubes);

		var rightTables = CreateJSAssetManager.getBitmap( "GameSideTables" );
		rightTables.x = _this.width - rightTables.image.width;
		rightTables.y = _this.height - rightTables.image.height;
		_this.addChild(rightTables);

	}


	

	_this.getEndTile = function() {
		return _exitBtn;
	}


	_this.OpenDoor = function() {

		if (_myDoor.currentState == RoomDoor.STATE.CLOSED || _myDoor.currentState == RoomDoor.STATE.CLOSING) {
			_myDoor.slideDoor(true);
		}
	}


	_this.CloseDoor = function() {
		if (_myDoor.currentState == RoomDoor.STATE.OPENED || _myDoor.currentState == RoomDoor.STATE.OPENING) {
			_myDoor.slideDoor(false);
		}
	}

	_this.destroy = function() {
		_this.parent.removeChild(_this);
	}

	return _Construct();
};
