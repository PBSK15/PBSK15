/* global createjs, WinPopup, JuiceBag, SaveHelper, AchievementsPopup, FxHelper, AssetManager, SolutionBar, ss, MenuWidget*/
//require.include("objects/MenuWidget.js");
//require.include("objects/SolutionBar.js");
//require.include("objects/WinPopup.js");
//require.include("objects/JuiceBag.js");
//require.include("lib/AchievementsPopup.js");

HudView.HINT_BOX_X = 234; // The X coordinate of the hint box display.
HudView.HINT_BOX_Y = 160; // The Y Coordinate of the hint box display.
HudView.COLOR_A = "#EEEEEE"; // The 1st interface colour of the HUD.
HudView.COLOR_B = "#666666"; // The 2nd interface colour of the HUD.

/**
 * Creates the heads up display for the main game levels in the CodeBreaker game.
 * @param {createjs.Container} The scene that the HUD will be added to.
 */
function HudView( gameScene ) {
	"use strict";

	var _this = new createjs.Container(); // create a locally scoped copy of this object.

	var _mainMenu; // {MenuWidget} the main menu.
	var _txtAgentCount; // {createjs.Container} the fancy text for the number of remaining agents.
	var _winScreen; // {WinPopup} the win screen.
	var _achievementPanel; // {AchievementsPopup} the panel that will show achievements when they're unlocked.

	var _solutionBar; // {createjs.Container} The bar which holds the current number sequence that the player is solving.
	var _myBag; // {JuiceBag} The backpack that displays the collected juice boxes.

	var isEnabled = true; // {Boolean} whether or not this HUD view is currently enabled.

	/**
	 * Return the bar which shows the number sequence the player is currently solving.
	 * @return {createjs.Container} The sequence/solution bar.
	 */
	_this.getSolutionBar = function() {
		return _solutionBar;
	};

	/**
	 * Gets the Juice Bag for this hud view.
	 * @return JuiceBag - The juice bag for this view.
	 */
	_this.getBag = function() {
		return _myBag;
	};

	_this.setEnable = function ( enable ) {
		isEnabled = enable;
	};


	// return a canvas element container
	function _Construct () {

		// construct the container
		_this.width = gameScene.width;
		_this.height = gameScene.height;

		gameScene.addChild(_this);
		

		// create hud backgrounds
		_CreateHUDBG();

		// create the hud objects
		_DisplayHint();
		_CreateSolutionBar();
		_CreateMenuButtons();
		//_CreateAgentCounter();
		
		// create the hidden top layers
		//_CreateWinScreen();
		_winScreen = new WinPopup( _this );
		_winScreen.x = _this.width / 2;
 		_this.addChild(_winScreen);

 		_myBag = new JuiceBag( gameScene.TheJuice, SaveHelper.GetLevelData(gameScene.lvlIndex) );
 		_this.addChild(_myBag);
 		_myBag.x = _this.width - _myBag.width;
 		_myBag.y = _this.height;

		_this.setEnable(true);

		
		// Add achievement panel
		_achievementPanel = new AchievementsPopup();
		_achievementPanel.x = _this.width / 2;
		_achievementPanel.y = _this.height;
		_this.addChild(_achievementPanel);

		return _this;
	}



	function _DisplayHint() {
		// make the corner display number
		_txtAgentCount = FxHelper.CreateFansyText(gameScene.hint, 26, 20, 1.0, HudView.COLOR_A, HudView.COLOR_B);
		_txtAgentCount.textAlign = "center";
		_txtAgentCount.x = HudView.HINT_BOX_X;
		_txtAgentCount.y = HudView.HINT_BOX_Y;
		_this.addChild(_txtAgentCount);
	}


	// Create the background elements on in the HUD
	function _CreateHUDBG() {

		// Create the docking area for the puzzle, which is part of the lazer blocking the door.
		var topBG = CreateJSAssetManager.getSprite( "Top_Panel_Frame" );
		_this.addChild(topBG);
	}

	// Create the list of solutions
	function _CreateSolutionBar() {

		var solList = gameScene.TheSol;
		var solBlk = gameScene.BlankIdx;
		var solGiv = gameScene.GivenIdx;
		var solEnd = gameScene.EndIdx;
		var solDiff = gameScene.Diff;

		// request the solution
		_solutionBar = new SolutionBar(solList, solBlk, solGiv, solEnd, solDiff);
		
		//_solutionBar.x = _this.width / 2 - _solutionBar.width / 2;
		_solutionBar.y = 23;
		_this.addChild(_solutionBar);
	}


	// Create the coner peice at the bottom right, it will contain the agent icon and number of agents left.
	/*function _CreateAgentCounter() {

		// make the corner display number
		_txtAgentCount = new createjs.Text( gameScene.tries , "normal 32px " + GameManager.FONT, "#5D5E79");
		_txtAgentCount.x = _this.width - 48;
		_txtAgentCount.y = 124;
		_this.addChild(_txtAgentCount);
	}*/


	/**
	 * Initialize the menu widget object
	 */
	function _CreateMenuButtons() {

		// Add Menu widget
		if (ss.SystemInfo.isIE || ss.SystemInfo.isMobile()) {
			_mainMenu = new MenuWidget([MenuWidget.HOME, MenuWidget.REPLAY, MenuWidget.AUDIO, MenuWidget.CC], MenuWidget.ORIENTATION.Vert);	
		} else {
			_mainMenu = new MenuWidget([MenuWidget.HOME, MenuWidget.REPLAY, MenuWidget.AUDIO, MenuWidget.CC, MenuWidget.FULLSCREEN], MenuWidget.ORIENTATION.Vert);	
		}

		//_mainMenu = new MenuWidget([MenuWidget.HOME, MenuWidget.REPLAY, MenuWidget.AUDIO, MenuWidget.CC, MenuWidget.FULLSCREEN], MenuWidget.ORIENTATION.Vert);	
		_this.addChild(_mainMenu);
		_mainMenu.x = 38;
		_mainMenu.y = 62;

		if (ss.SoundManager.getVolume() === 0) {
			_mainMenu.setState(MenuWidget.AUDIO, false);	
		}

		if (CheckFullscreen()) {
			_mainMenu.setState(MenuWidget.FULLSCREEN, false);
		}

		_mainMenu.setState(MenuWidget.CC, SaveHelper.GetCC());

		_mainMenu.addEventListener(MenuWidget.HOME_EVENT, _ToMap);
		_mainMenu.addEventListener(MenuWidget.REPLAY_EVENT, _ResetLevel);
		_mainMenu.addEventListener(MenuWidget.AUDIO_EVENT, _ToggleAudio);
		_mainMenu.addEventListener(MenuWidget.CC_EVENT, _ToggleCC);
		_mainMenu.addEventListener(MenuWidget.FULLSCREEN_EVENT, _ToggleFullscreen);
		
	}

	function _ToggleFullscreen(evt) {
		var fsState = !_mainMenu.getState(MenuWidget.FULLSCREEN);
		RequestFullscreen(fsState);

		ga ("send", "event", "CodeBreaker_Screenflow", "Menu_Fullscreen");
	}

	function _ToggleAudio(evt) {
		// given audio state always return 0 or 1
		var audioState = _mainMenu.getState(MenuWidget.AUDIO);
		ss.SoundManager.setVolume(audioState);

		if (audioState == 0) {
			ga ("send", "event", "CodeBreaker_Screenflow", "Menu_Mute");
		} else {
			ga ("send", "event", "CodeBreaker_Screenflow", "Menu_Unmuted");
		}
	}


	function _ToggleCC(evt) {
		var isCaptionOn = SaveHelper.GetCC();
		if (isCaptionOn) {
			SaveHelper.SetCC(false);
			ga ("send", "event", "CodeBreaker_Screenflow", "Menu_CC_Off");
		} else {
			SaveHelper.SetCC(true);
			ga ("send", "event", "CodeBreaker_Screenflow", "Menu_CC_On");
		}
	}


	// Goto the map scene
	function _ToMap(evt) {
		GameManager().GotoScene(GameManager.Scene.MAP_SCENE);
		ga ("send", "event", "CodeBreaker_Screenflow", "Menu_Back_To_Levels");
	}


	// Reset the level
	function _ResetLevel(evt) {
		//if (isEnabled) {
		ga ("send", "event", "CodeBreaker_Screenflow", "Menu_Replay");
		var isReset = true;
		CodeController.KillAgent( isReset );
		//}
	}

	
	_this.GetReady = function() {
		_solutionBar.InitBar();
	}

	_this.UpdateLives = function() {
		_txtAgentCount.text = "x" + gameScene.tries;
	}

	_this.GameWin = function( numCollected, lvlNumber ) {
		_this.setEnable(false);
		_winScreen.ShowPopup(numCollected);
		
		if (lvlNumber == 8) {
			_achievementPanel.ShowAward(AchievementsPopup.CB1);
		} else if (lvlNumber == 17) {
			_achievementPanel.ShowAward(AchievementsPopup.CB2);
		} else if (lvlNumber == 26) {
			_achievementPanel.ShowAward(AchievementsPopup.CB3);
		} else if (lvlNumber == 35) {
			_achievementPanel.ShowAward(AchievementsPopup.CB4);
		} else if (lvlNumber == 44) {
			_achievementPanel.ShowAward(AchievementsPopup.CB5);
		}
	}

	// Helper
	function CheckFullscreen() {
		if ((window.innerWidth == screen.width) || (window.innerHeight == screen.height)) {
			return true;
		}
		return false;
	}

	/**
	 * Toggle full screen mode for the game
	 * @param makeFull:[Bool] - make the screen full or not.
	 */
	function RequestFullscreen( makeFull ) {

		if (makeFull) {

			var docElm = document.documentElement;

			if (docElm.requestFullscreen) {
				docElm.requestFullscreen();
			}
			else if (docElm.mozRequestFullScreen) {
				docElm.mozRequestFullScreen();
			}
			else if (docElm.webkitRequestFullScreen) {
				docElm.webkitRequestFullScreen();
			}
			else if (docElm.msRequestFullscreen) {
				docElm.msRequestFullscreen();
			}
		} else {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			}
			else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			}
			else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
			else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		}
	}

	_this.destroy = function() {
		if (_mainMenu) {
			_mainMenu.destroy();
		}
		_this.parent.removeChild(_this);
	}

	return _Construct();
};

