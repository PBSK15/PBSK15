/* global require, createjs, console */

//require.include("lib/SceneContainer.js");
//require.include("lib/MakeEventDispatcher.js");
//require.include("lib/AssetManager.js");

//require.include("scenes/GameScene.js");
//require.include("scenes/LoadScene.js");
//require.include("scenes/MapScene.js");

//require.include("helpers/FxHelper.js");
//require.include("helpers/SaveHelper.js");
//require.include("helpers/AudioHelper.js");
//require.include("helpers/TouchHelper.js");
//require.include("objects/CodeButton.js");

//require.include("weblib/sound/SoundPackage.js");

// world > stage > level > blank

/** Tile state **/
GameManager.Scene = {
	LOAD_SCENE: 0,
	MAP_SCENE: 1,
	GAME_SCENE: 2
};

//GameManager.FONT = "refrigerator-deluxe";
GameManager.FONT = "RefrigeratorDeluxe-Heavy"; //"impact";


function GameManager( canvasId ) {

	"use strict";

	// making this a singleton class
  	if ( GameManager.prototype._singletonInstance ) {
    	return GameManager.prototype._singletonInstance;
    }
  	GameManager.prototype._singletonInstance = this;
  	
  	
	var _this = this;
	
	var _canvas;
	
	var _loadScene;
	var _mapScene;
	var _gameScene;

	// On screen debug
	//var debugContainer;

	function _Construct () {


		// initialize canvas object
		_canvas = new createjs.Stage(canvasId);
		createjs.Touch.enable(_canvas, true );
		createjs.Ticker.addEventListener("tick", _UpdateLoop);

		_canvas.enableMouseOver();
		createjs.Ticker.setFPS(60);

		// initialize loading process
		_loadScene = new LoadScene(_canvas);
		_loadScene.Enable();
		_loadScene.Start();

		_loadScene.addEventListener(LoadScene.START_EVENT, _LoadMap);

		/*
		this.inputManager = new InputManager;
		this.scoreManager = new ScoreManager;
		this.actuator     = new Actuator;

		this.startTiles   = 2;

		this.inputManager.on("move", this.move.bind(this));
		this.inputManager.on("restart", this.restart.bind(this));
		this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));
		*/

		ss.PageFocus.getInstance().addEventListener(ss.PageFocus.FOCUS_LOST, _FocusLost);
		ss.PageFocus.getInstance().addEventListener(ss.PageFocus.FOCUS_GAIN, _FocusGain);

		// On screen debug
		//debugContainer = new createjs.Container();
		//ss.DebugUtil.setEnabled(true);
		//ss.DebugUtil.setDisplay(debugContainer, 20);
		//_canvas.addChild(debugContainer);
	}

	// pause audio for page focus lost
	function _FocusLost(evt) {
		ss.SoundManager.pauseAllSounds();
	}

	// unpause audio for page focus lost
	function _FocusGain(evt) {
		ss.SoundManager.resumeAllSounds();
	}


	function _LoadMap(evt) {

		_loadScene.removeEventListener(LoadScene.START_EVENT, _LoadMap);


		// initialize scenes
		_loadScene.visible = false;
		_gameScene = new GameScene(_canvas);
		_mapScene = new MapScene(_canvas);

		// create cc container
		AudioHelper.addCCBox(_canvas);

		_this.GotoScene(GameManager.Scene.MAP_SCENE);
		//_mapScene.Enable();
	}



	function _UpdateLoop(evt) {
		
		evt.deltaSec = evt.delta / 1000;

		if (_mapScene) {
			_mapScene.Update(evt);
		}
		
		if (_gameScene) {
			_gameScene.Update(evt);
		}

		_canvas.update(evt);

	}


	_this.GotoGameScene = function( lvlData ) {
		_this.GotoScene(GameManager.Scene.GAME_SCENE);
		_gameScene.Setup( lvlData );
	}


	_this.GotoScene = function( sceneName ) {

		// stop all sound playing from the tweens
	   	ss.SoundManager.stopAllSounds();
		createjs.Tween.removeAllTweens();

		switch (sceneName) {
			case GameManager.Scene.LOAD_SCENE:
				_loadScene.Enable();
			break;
			case GameManager.Scene.MAP_SCENE:
				_loadScene.visible = false;
				_gameScene.visible = false;
				_mapScene.UpdateMap();
				_mapScene.Enable();
				if (_gameScene) {
					_gameScene.destroy();
				}
			break;
			case GameManager.Scene.GAME_SCENE:
				_loadScene.visible = false;
				_mapScene.visible = false;
				_gameScene.Enable();
			break;
		}
		AudioHelper.addCCBox(_canvas);

		// On screen debug
		//_canvas.setChildIndex(debugContainer, _canvas.getNumChildren() - 1);
	}

	_this.NextLevel = function() {
		var hasNext = _mapScene.NextLevel();
		if (!hasNext) {
			_this.GotoScene(GameManager.Scene.MAP_SCENE);
		}
	}

/*
	_this.doorOpen = function() {
		console.log("------------");
		_gameModel.openDoor();
	}

	_this.moveAgentTo = function( position ) {
		_gameModel.moveAgent(position);
	}

	_this.resetAgent = function() {
		_gameModel.resetAgent();
	}


	_this.killAgent = function () {
		_gameModel.killAgent();
	}
*/
	return _Construct();
};
