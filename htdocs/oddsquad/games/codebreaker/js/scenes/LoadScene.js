
//require.include("lib/PbsVideo.js");
// TileButton.js

var LoadStart = {
	"id": "LoadScreen",
	"src": "img/preloader/startbtn.png"
}
var LoadBar = {
	"id": "LoadScreen",
	"src": "img/preloader/loadbar.png"
}


var AgentIndex = 1;
var AgentJSON = agentAnimJson1;

LoadScene.START_EVENT = "START_GAME_EVENT";

function LoadScene( parentCanvas ) {

	"use strict";

	var _this = new SceneContainer( parentCanvas );

	var _background;
	var _progressText;
	var _progressBar;

	var _playButton;
	var _playImg;

	var _gameAssets;

	var isAudioAutoLoad = false;
	var isAudioLoaded = false;
	var isAssetLoaded = false;

	var audioLoadOnTouch = ss.SystemInfo.isIOS && (ss.SystemInfo.getIOSVersion() < 7); //ss.SystemInfo.isMobile(); //(ss.SystemInfo.isIOS && ss.SystemInfo.getIOSVersion() < 7);
	var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );


	// return a canvas element container
	function _Construct () {
/*
		// start game button
		_startContainer = new createjs.Container();
		_startContainer.x = _this.width - 140;
		_startContainer.y = 500;
		_startContainer.cursor = "pointer";
		_this.addChild(_startContainer);
*/
		// play touch area
		_playButton = TouchHelper.NewTouchCircle(60, 60, 60);
		_this.addChild(_playButton);

		// play image
		_playImg = new createjs.Bitmap( LoadStart.src );
		_playImg.mouseEnabled = false;
		_this.addChild(_playImg);

		_playImg.visible = _playButton.visible = false;
		_playImg.x = _playButton.x = _this.width - 140;
		_playImg.y = _playButton.y = 500;


		// load bar
		_progressBar = new createjs.Bitmap( LoadBar.src );
		_progressBar.regX = 12;
		_progressBar.x = 154;
		_progressBar.y = _this.height - 34;
		_progressBar.mouseEnabled = false;
		_this.addChild(_progressBar);
		

		// loading text
		_progressText = new createjs.Text( 0 , "bold 32px " + GameManager.FONT, "#FFF");
		_progressText.textBaseline = "bottom";
		_progressText.textAlign = "right";
		_progressText.x = _this.width - 42;
		_progressText.y = _this.height - 2;
		_progressText.mouseEnabled = false;
		_this.addChild(_progressText);

		
		// load movie
		PbsVideo.init();

		return _this;
	}


	/**
	 * Start loading the asset json sheet that contains all other things that needs to be loaded
	 */
	_this.Start = function() {
		//_LoadAssets();
		CreateJSAssetManager.addEventListener(AssetLoaderEvent.LOAD_COMPLETE, _LoadAssets);
		CreateJSAssetManager.load({assets: [{id:"mainassets", src:"json/assets.json"}]});
	}


	/**
	 * Load audio and game assets
	 */
	function _LoadAssets() {

		CreateJSAssetManager.removeEventListener(AssetLoaderEvent.LOAD_COMPLETE, _LoadAssets);

		// start loading audio
		if (!audioLoadOnTouch) {
			isAudioAutoLoad = true;
			if (ss.SystemInfo.isMobile()) {
				ss.SoundManager.loadSoundSprite(gameAudioIOS);	
			} else {
				ss.SoundManager.loadSoundSprite(gameAudio);
			}
			ss.SoundManager.addEventListener("loaded", _SoundLoaded);
	    }

	    // start loading visual assets
		_gameAssets = CreateJSAssetManager.getJson("mainassets");
		CreateJSAssetManager.addEventListener(AssetLoaderEvent.FILE_LOADED, _LoadAssetProgress);
		CreateJSAssetManager.addEventListener(AssetLoaderEvent.LOAD_COMPLETE, _LoadAssetComplete);
		CreateJSAssetManager.load(_gameAssets);

		/*
		_gameAssets = new AssetManager();
		_gameAssets.addEventListener( "started", _LoadAssetStarted());
		_gameAssets.addEventListener( "complete", _LoadAssetComplete);
		_gameAssets.addEventListener( "progress", _LoadAssetProgress);
		_gameAssets.loadJSON("json/assets.json");
		*/
	
		// load save data
		if (typeof(userLogin) !== "undefined") {
			SaveHelper.loadStorage();
		}
	}


	//function _LoadAssetStarted(evt) {	}

	function _SoundLoaded(evt) {
		console.log("Game audio loaded ... ");

		ss.SoundManager.removeEventListener("loaded", _SoundLoaded);
		isAudioLoaded = true;

		if (isAssetLoaded) {

			// audio loaded after the assets are loaded, show start button
			if (isAudioAutoLoad) {
				_ActiveStart();

			// audio loading took place after start button is pressed
			} else {
				_StartGame();
			}

		} else {
			// wait for assets to load, and that function will show the start button
		}
		
	}


	function _LoadAssetProgress(evt) {
		_UpdateProgress(evt.data.loaded / evt.data.count);
	}


	function _LoadAssetComplete() {
		console.log("Game assets loaded ... ");

		CreateJSAssetManager.removeEventListener(AssetLoaderEvent.FILE_LOADED, _LoadAssetProgress);
		CreateJSAssetManager.removeEventListener(AssetLoaderEvent.LOAD_COMPLETE, _LoadAssetComplete);
		isAssetLoaded = true;
		_UpdateProgress(1.0);
		
		// request player avatar
		if (ss.oddsquad.UserLogin.loginLoaded()) {
			_LoadAvatar();
		} else {
			ss.oddsquad.UserLogin.addEventListener(ss.oddsquad.USER_LOGIN_LOADED, _LoadAvatar);
			ss.oddsquad.UserLogin.addEventListener(ss.oddsquad.USER_LOGIN_FAILED, _LoadAvatar);
			ss.oddsquad.UserLogin.loadUserLogin();
		}

		// when audio is already done, or not even starting, show the start game button.
		if ((isAudioAutoLoad && isAudioLoaded) || (!isAudioAutoLoad)) {
			// display start button
			_ActiveStart();
		}
	}


	function _UpdateProgress (progressPerc) {

		// set a reserve area for unloaded audio in the progess
		progressPerc = isAudioLoaded ? progressPerc : (progressPerc * 0.9);
		_progressBar.scaleX = progressPerc;

		// the display percentage number for the progress
		var textValue = Math.round(progressPerc * 100);

		if (isAudioLoaded || !isAssetLoaded) {
			_progressText.text = textValue + " %";
		} else {
			_progressText.text = "Loading Audio";
		}
		
	}


	function _LoadAvatar() {
		
		ss.oddsquad.UserLogin.removeEventListener(ss.oddsquad.USER_LOGIN_LOADED, _LoadAvatar);
		ss.oddsquad.UserLogin.removeEventListener(ss.oddsquad.USER_LOGIN_FAILED, _LoadAvatar);
		
		SaveHelper.loadStorage();
		KeyValueStorage.enablePersistentStorage();
		
		// check PBS login
		/*
		if (ss.oddsquad.hasPbsLogin) {
			KeyValueStorage.enablePersistentStorage();
		} else {
			KeyValueStorage.disablePersistentStorage();
		}
		*/

		// set current avatar
		var userLogin = ss.oddsquad.UserLogin.getAgentData();
		
		AgentIndex = 1;
		AgentJSON = agentAnimJson1;
		if(!isEmpty(userLogin)) {

			var avatarImage = userLogin["avatar"];

			switch(avatarImage) {
				default:
				case "male0.png":
					AgentJSON = agentAnimJson1;
					AgentIndex = 3;
				break;
				case "male1.png":
					AgentJSON = agentAnimJson2;
					AgentIndex = 2;
				break;
				case "male2.png":
					AgentJSON = agentAnimJson3;
					AgentIndex = 1;
				break;
				case "female0.png":
					AgentJSON = agentAnimJson4;
					AgentIndex = 4;
				break;
				case "female1.png":
					AgentJSON = agentAnimJson5;
					AgentIndex = 5;
				break;
				case "female2.png":
					AgentJSON = agentAnimJson6;
					AgentIndex = 6;
				break;
			}
		}
	}


	function _ActiveStart() {

		_UpdateProgress(1.0);

		_playImg.visible = true;
		_playButton.visible = true;
		_playButton.cursor = "pointer";

		_playButton.on("click", function() {

			if (!isAudioAutoLoad) {

				// if audio did not start during normal loading, try load it when button is clicked.
		    	ss.SoundManager.loadSoundSprite(gameAudioIOS);
				ss.SoundManager.addEventListener("loaded", _SoundLoaded);

		    } else {

		    	// all are loaded before this step
		    	_StartGame();
		    }

		});

		// google analytics call
		ga ("send", "event", "CodeBreaker_Gameplay", "Play_Button_Clicked");
	}


	/**
	 * Switch to level scene
	 */
	function _StartGame() {

		// remove video player
		PbsVideo.destroy();
		$("#videoPlayer").remove();

		// start game
		_this.dispatchEvent(LoadScene.START_EVENT);
	}


	return _Construct();

}