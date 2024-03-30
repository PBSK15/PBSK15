
WinPopup.POPUP_SPEED = 800;
WinPopup.JUICE_SPEED = 500;
WinPopup.JUICE_DELAY = 300;

WinPopup.BUTTONS_Y = 340;

// Generate the lazer element based on given sequense
function WinPopup( parentHud ) {

	"use strict";

	var _this = new createjs.Container();

	var _btnNextImage;
	var _btnMenuImage;
	var _btnReplayImage;
	var _juiceBoxImage1;
	var _juiceBoxImage2;
	var _juiceBoxImage3;
	var _blingParticlesEmitter;
	var _fadeLayer;

	// return a canvas element container
	function _Construct () {

		// get assets
		var backgroundTexts = CreateJSAssetManager.getSprite( "Puzzle_Solved", false, false, false, true);
		var backgroundImage = CreateJSAssetManager.getSprite( "Win_Background", false, false, false, true);
		var backgroundAvatar = CreateJSAssetManager.getBitmap( "GameWinAvatar" + AgentIndex, false, false, false, true);

		_btnNextImage = new CodeButton( "Win_Btn_Next", true, true);
		_btnMenuImage = new CodeButton( "Win_Btn_Menu", true, true);
		_btnReplayImage = new CodeButton( "Win_Btn_Replay", true, true);
		_juiceBoxImage1 = CreateJSAssetManager.getSprite( "Win_Juice_01", false, false, false, true);
		_juiceBoxImage2 = CreateJSAssetManager.getSprite( "Win_Juice_02", false, false, false, true);
		_juiceBoxImage3 = CreateJSAssetManager.getSprite( "Win_Juice_03", false, false, false, true);

		// create the back fading layer
		_fadeLayer = new createjs.Shape();
		_fadeLayer.graphics.beginFill("#000000").drawRect(-1000, -1000, 2000, 2000);
		_fadeLayer.alpha = 0.6;
		_this.addChild(_fadeLayer);

		// create the background
 		_this.addChild(backgroundImage);
		_this.width = backgroundImage.width;
		_this.height = backgroundImage.height;
		_this.visible = false;
		
		// create the agent avatar
		_this.addChild(backgroundAvatar);
		backgroundAvatar.y = 140;
		backgroundAvatar.x = -400;


		// create the menu buttons
		_this.addChild(_btnNextImage);
		_btnNextImage.x = 240;
		_btnNextImage.y = WinPopup.BUTTONS_Y;
		_btnNextImage.cursor = "pointer";
		_btnNextImage.on('mousedown', _NextLevel);

		_this.addChild(_btnMenuImage);
		_btnMenuImage.x = -240;
		_btnMenuImage.y = WinPopup.BUTTONS_Y;
		_btnMenuImage.cursor = "pointer";
		_btnMenuImage.on('mousedown', _ToMenu);
		
		_this.addChild(_btnReplayImage);
		_btnReplayImage.x = 0;
		_btnReplayImage.y = WinPopup.BUTTONS_Y;
		_btnReplayImage.cursor = "pointer";
		_btnReplayImage.on('mousedown', _Replay);
		
		// popup texts
		_this.addChild(backgroundTexts);
		backgroundTexts.y = -160;


		// create the juiceboxes
		_this.addChild(_juiceBoxImage1);
		_this.addChild(_juiceBoxImage2);
		_this.addChild(_juiceBoxImage3);
		_juiceBoxImage1.visible = false;
		_juiceBoxImage2.visible = false;
		_juiceBoxImage3.visible = false;
		_juiceBoxImage1.y = _juiceBoxImage2.y = _juiceBoxImage3.y = 72;

	    // create particle emitter
	    _blingParticlesEmitter = FxHelper.CreateBlingEffect(_this);

		return _this;
	}


	function _NextLevel(evt) {
		_this.HidePopup();
		AudioHelper.PlayBtnSound();
		GameManager().NextLevel();
		ga ("send", "event", "CodeBreaker_Screenflow", "Post_To_Next");
	}


	function _ToMenu(evt) {
		_this.HidePopup();
		AudioHelper.PlayBtnSound();
		GameManager().GotoScene(GameManager.Scene.MAP_SCENE);
		ga ("send", "event", "CodeBreaker_Screenflow", "Post_To_Levels");
	}

	
	function _Replay(evt) {
		_this.HidePopup();
		AudioHelper.PlayBtnSound();
		CodeController.ReplayLevel();
		ga ("send", "event", "CodeBreaker_Screenflow", "Post_To_Replay");
	}


	function _PopInOneJuice( juiceObj, delay ) {
		juiceObj.visible = true;
		juiceObj.alpha = 0.0;
		juiceObj.scaleX = 0.0;
		juiceObj.scaleY = 0.0;
		
		createjs.Tween.get(juiceObj).wait(delay)
			.call( function() { AudioHelper.PlaySFX("SFX_Win_Juicebox", ss.SoundPriority.MULTI_CHANNEL_ONLY); } )
			.to({scaleX: 1, scaleY: 1, alpha:1.0}, WinPopup.JUICE_SPEED, createjs.Ease.bounceOut);
	}


	function _ShowJuice( collection ) {
		for (var i = 0; i < collection.length; i++) {
			switch (collection[i]) {
				case JuiceBox.ID1:
					_juiceBoxImage1.x = (i - 1) * 146;
					_PopInOneJuice(_juiceBoxImage1, i * WinPopup.JUICE_DELAY);
				break;
				case JuiceBox.ID2:
					_juiceBoxImage2.x = (i - 1) * 146;
					_PopInOneJuice(_juiceBoxImage2, i * WinPopup.JUICE_DELAY);
				break;
				case JuiceBox.ID3:
					_juiceBoxImage3.x = (i - 1) * 146;
					_PopInOneJuice(_juiceBoxImage3, i * WinPopup.JUICE_DELAY);
				break;
			}
		}
	}


	/**
	 * Display this entire win screen popup, also play audio and start emit particles.
	 * @param juiceCollection:[list] - List of collected juicebox objects
	 */
	_this.ShowPopup = function ( juiceCollection ) {

		// disable parent hud controls
		parentHud.setEnable(false);

		// stop all other high priority audio
	    ss.SoundManager.stopAllSounds(ss.SoundPriority.HIGH);
	    AudioHelper.PlaySFX("SFX_Win_Screen", ss.SoundPriority.MULTI_CHANNEL_ONLY);

	    // random a success sound
	    var voRand = Math.random();
	    if (voRand < 0.1) {
    		AudioHelper.PlayVO("CB_Win_01");
	    } else if (voRand < 0.2) {
	    	AudioHelper.PlayVO("CB_Win_02");
	    } else if (voRand < 0.3) {
	    	AudioHelper.PlayVO("CB_Win_03");
	    } else if (voRand < 0.4) {
	    	AudioHelper.PlayVO("CB_Win_04");
	    } else if (voRand < 0.5) {
	    	AudioHelper.PlayVO("CB_Win_05");
	    } else if (voRand < 0.6) {
	    	AudioHelper.PlayVO("CB_Win_06");
	    } else if (voRand < 0.65) {
	    	AudioHelper.PlayVO("CB_Win_07");
	    } else if (voRand < 0.7) {
	    	AudioHelper.PlayVO("CB_Win_08");
	    } else if (voRand < 0.75) {
	    	AudioHelper.PlayVO("CB_Win_09");
	    } else if (voRand < 0.8) {
	    	AudioHelper.PlayVO("CB_Win_10");
	    } else if (voRand < 0.85) {
	    	AudioHelper.PlayVO("CB_Win_11");
	    } else if (voRand < 0.9) {
	    	AudioHelper.PlayVO("CB_Win_12");
	    } else if (voRand < 0.95) {
	    	AudioHelper.PlayVO("CB_Win_13");
	    } else {
	    	AudioHelper.PlayVO("CB_Win_14");
	    }

		// display
		//_this.collectedBoxes = (juiceCollection) ? juiceCollection.length : 0;
 		_this.visible = true;
 		_this.alpha = 0.0;
		createjs.Tween.get(_this).to({y: 340, alpha:1.0}, WinPopup.POPUP_SPEED, createjs.Ease.bounceOut).call(_ShowJuice, [juiceCollection]);

		// start particles
		_blingParticlesEmitter.startEmit(true);
	}


	/**
	 * Hide this entire win screen popup
	 */
	_this.HidePopup = function () {

		// stop paricles
		_blingParticlesEmitter.stopEmit(false);

		// shift to the hidden position
		createjs.Tween.get(_this).to({y: 0, alpha:0.0, visible: false}, WinPopup.POPUP_SPEED);
		_juiceBoxImage1.visible = false;
		_juiceBoxImage2.visible = false;
		_juiceBoxImage3.visible = false;
		parentHud.setEnable(true);
	}

	return _Construct();
}