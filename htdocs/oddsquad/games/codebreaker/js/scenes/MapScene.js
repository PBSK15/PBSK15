/* global require, createjs, console */

//require.include("objects/map/Elevator.js");
//require.include("objects/map/LevelSelector.js");


MapScene.FLOOR_TOTAL = 5;
MapScene.CONTROL_PADDING_RIGHT = 80;
MapScene.CONTROL_PADDING_TOP = 200;



function MapScene( parentCanvas ) {

	"use strict";

	var _this = new SceneContainer( parentCanvas );

	var _elevatorControl;

	var _currentFloor;
	var _currentLevel;
	var _mapContainer;
	var _levelList = [];

	// return a canvas element container
	function _Construct () {

		// background
		var background = CreateJSAssetManager.getBitmap("MapBackground");
		_this.addChild(background);

		// avatar
		var bgAvatar = CreateJSAssetManager.getBitmap("MapAgent" + AgentIndex);
		bgAvatar.regY = bgAvatar.height;
		bgAvatar.y = _this.height;
		_this.addChild(bgAvatar);


		// create a map container to hole all the maps
		_mapContainer = new createjs.Container();
		_this.addChild(_mapContainer);

		// create the map controls
		_CreateMaps();
		_CreateControl();

		return _this;
	}


	// create elevator controls on the side
	function _CreateControl() {
		// create controls
		_elevatorControl = new Elevator(MapScene.FLOOR_TOTAL, _mapContainer);
		_this.addChild(_elevatorControl);
		_elevatorControl.x = _this.width - MapScene.CONTROL_PADDING_RIGHT;
		_elevatorControl.y = MapScene.CONTROL_PADDING_TOP;

		// create reset button
		//var btnMapReset = new CodeButton( "MapUnlock" , true);
		//btnMapReset.x = _this.width - MapScene.CONTROL_PADDING_RIGHT;
		//btnMapReset.y= _this.height - 50;
		//_this.addChild(btnMapReset);
		//btnMapReset.on("mousedown", UnlockMap);
	}


	// create all floors
	function _CreateMaps() {
		for (var i = 0; i < MapScene.FLOOR_TOTAL; i++) {
			var aMap = _this.LoadMap(i);
			aMap.y = i * _this.height;
			_mapContainer.addChild(aMap);
		}
	}



	function _LoadLevelData ( levelData ) {

		// goto level
		if (levelData) {
			_currentLevel = levelData;
			GameManager().GotoGameScene(levelData);
		} else {
			console.log("Unable to load level data: " + levelData);
		}

	}


	_this.LoadMap = function ( mapId ) {

    	// a map container
    	var newMap = new createjs.Container();

		// show current map
		var mapSrc = "Map0" + (mapId + 1);
		var currentMapImage = CreateJSAssetManager.getBitmap(mapSrc);
		newMap.addChild(currentMapImage);
		newMap.width = currentMapImage.width;
		newMap.height = currentMapImage.height;

		// get number of levels unlocked
		var unlockCount = SaveHelper.GetLastUnlockedLevel();

		// create level selection buttons
		GameLevels.forEach(function( lvlData, lvlIdx ) {

			if (lvlData.mapInfo.m == mapId) {
				lvlData.lvlIndex = lvlIdx;
				lvlData.juiceBoxes = SaveHelper.GetLevelData(lvlData.lvlIndex);

				var isPlayed = lvlIdx < unlockCount;
				var targetSpot = new LevelSelector(lvlData, isPlayed);
				targetSpot.on("mousedown", _this.GotoLevel);

				_levelList.push(targetSpot);
				newMap.addChild(targetSpot);
			}
		});

		return newMap;
	}




	_this.NextLevel = function () {
		
		if (_currentLevel == null) {
			return false;
		}

		if (GameLevels.length > _currentLevel.lvlIndex + 1) {
			var nextLvlData = GameLevels[_currentLevel.lvlIndex + 1];
			_LoadLevelData( nextLvlData );
		} else {
			return false;
		}

		return true;
	}

	// Level button on click event
	_this.GotoLevel = function( evt ) {
		if (evt.currentTarget.active) {
			_LoadLevelData( evt.currentTarget.lvlData );
			console.log("Going to level: " + evt.currentTarget + " || " + evt.currentTarget.lvlData.lvlIndex);
			ga ("send", "event", "CodeBreaker_Screenflow", "Level_Selected", evt.currentTarget.lvlData.lvlIndex);
		}
	}




	_this.UpdateMap = function () {

		// start audio
	    ss.SoundManager.stopAllSounds();
    	AudioHelper.PlayVO("ChooseALevel", ss.SoundPriority.HIGH);
    	
		// update the floor position
		var lvlProgress = SaveHelper.GetLastUnlockedLevel();
		var currentProgress = (_currentLevel) ? _currentLevel.lvlIndex : 999;
		var lastLevel = (currentProgress < lvlProgress) ? currentProgress : lvlProgress;
		var floorNumber = Math.floor(lastLevel / 9);
		_elevatorControl.GotoFloor(floorNumber);

		// update indidivual level information
		for (var i = 0; i < _levelList.length; i++) {
			_levelList[i].ResetInfo(lvlProgress);
		}
	}

	
	function ResetMap ( evt ) {
		FxHelper.PulseBouncy(evt.currentTarget, 1, 100);
		localStorage.clear();
		_this.UpdateMap();
	}


	function UnlockMap( evt ) {
		localStorage.clear();
		SaveHelper.UnlockLevel(46);
		_this.UpdateMap();
	}


	// Update the views
	_this.Update = function(evt) {
		//_mapContainer.y = -2304;
	}

	// Use this to find click location event // pressmove
	/*
	_this.on("mousedown", function(e) {
		console.log("X: " + e.rawX + " | Y: " + e.rawY);
		//_mapContainer.y = -e.rawY * 4;  //use pressmove
	});
	*/


	return _Construct();

}