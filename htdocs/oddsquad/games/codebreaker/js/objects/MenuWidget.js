
// menu item position variables
MenuWidget.BAR_BASE_SCALE = 0.2;
MenuWidget.BUTTON_SHIFT = 16;
MenuWidget.BUTTON_SPACING = 55;

// menu item enums
MenuWidget.HOME = 0;
MenuWidget.REPLAY = 1;
MenuWidget.AUDIO = 2;
MenuWidget.CC = 3;
MenuWidget.FULLSCREEN = 4;

// menu events
MenuWidget.OPEN_MENU_EVENT = "menuopen";
MenuWidget.HOME_EVENT = "presshome";
MenuWidget.REPLAY_EVENT = "pressreplay";
MenuWidget.AUDIO_EVENT = "pressaudio";
MenuWidget.CC_EVENT = "presscc";
MenuWidget.FULLSCREEN_EVENT = "pressfullscreen";

MenuWidget.ORIENTATION = {
	Horz: 0,
	Vert: 1
};

/*
* Class MenuWidget extends AbstractEventDispatcher
*	Defines the interface that all scenes are expected to implement
*/
function MenuWidget( params, menuOrientation ){
	
	"use strict";
	var _this = new createjs.Container();

	// keep track of default menu orientation
	var _isVert = false;

	// keep track of menu open state
	var _isOpen = false;

	// keep track of the asset names
	var _itemAry = {
		0: {
			enabled: true,
			bmpName: "MenuHome"
		},
		1: {
			enabled: false,
			bmpName: "MenuReplay"
		},
		2: {
			enabled: false,
			bmpName: "MenuAudio",
			bmpNameOff: "MenuAudioOff"
		},
		3: {
			enabled: false,
			bmpName: "MenuCC",
			bmpNameOff: "MenuCCOff"
		},
		4: {
			enabled: false,
			bmpName: "MenuFullscreen",
			bmpNameOff: "MenuFullscreenOff"
		}
	};

	// menu image objects
	var _barContainer;
	var _imgStart;
	var _imgBar;

	var _btnStart;
	var _btnHome;
	var _btnReplay;
	var _btnAudio;
	var _btnCC;
	var _btnFullscreen;


	// place the images
	function _construct() {
		
		// enabled only the specified buttons
		if (params) {
			for (var i = 0; i < params.length; i++) {
				_itemAry[params[i]].enabled = true;
			}
		}

		// create the base image elements
		_barContainer = new createjs.Shape();
		_imgBar = getAsset("MenuBar", true);
		_imgStart = getAsset("MenuStart", true);
		_btnStart = TouchHelper.NewTouchCircle(0, 0, _imgStart.width / 2.5);

		// add the base images
		_imgBar.regX = 0;
		_imgBar.scaleX = 0;
		_this.addChild(_imgBar);
		_this.addChild(_imgStart);
		_this.addChild(_btnStart);
		_btnStart.cursor = "pointer";
		_btnStart.on("pressup", eventOpenMenu);
		if (menuOrientation == MenuWidget.ORIENTATION.Vert) {
			_imgBar.rotation = 90;
			_isVert = true;
		}

		// home button will be always on by default
		var itemIdx = 0;
		if (_itemAry[MenuWidget.HOME].enabled == true) {
			_btnHome = makeMenuButton(MenuWidget.HOME, ++itemIdx, false);
			_btnHome.on("pressup", eventHome);
			_this.addChild(_btnHome);
		}

		// replay button without off state
		if (_itemAry[MenuWidget.REPLAY].enabled == true) {
			_btnReplay = makeMenuButton(MenuWidget.REPLAY, ++itemIdx, false);
			_btnReplay.on("pressup", eventRelay);
			_this.addChild(_btnReplay);
		}

		// audio button with off state icon
		if (_itemAry[MenuWidget.AUDIO].enabled == true) {
			_btnAudio = makeMenuButton(MenuWidget.AUDIO, ++itemIdx, true);
			_btnAudio.on("click", eventAudio);
			_this.addChild(_btnAudio);
		}

		// close caption button with off state icon
		if (_itemAry[MenuWidget.CC].enabled == true) {
			_btnCC = makeMenuButton(MenuWidget.CC, ++itemIdx, true);
			_btnCC.on("click", eventCC);
			_this.addChild(_btnCC);
		}

		// full screen button with off state icon
		if (_itemAry[MenuWidget.FULLSCREEN].enabled == true) {
			_btnFullscreen = makeMenuButton(MenuWidget.FULLSCREEN, ++itemIdx, true);
			_btnFullscreen.on("click", eventFullScreen);
			_this.addChild(_btnFullscreen);
		}


		return _this;
	}

	/*
	* Open or close the menu based on previous state
	*/
	function toggleMenu() {
		_isOpen = !_isOpen;

		// rotate menu icon (the gear)
		var rotDeg = (_isOpen) ? 180 : 0;
		createjs.Tween
			.get(_imgStart, {loop:false, override:true})
			.to({rotation: rotDeg}, 200, createjs.Ease.quadIn);

		// setup menu bar length based on number of icons enabled
		var barPercent = MenuWidget.BAR_BASE_SCALE + (getenabledItemCount() / Object.keys(_itemAry).length * (1 - MenuWidget.BAR_BASE_SCALE));
		
		// set bar length based on bar is open or closed
		var barScale = (_isOpen) ? barPercent : 0;
		createjs.Tween
			.get(_imgBar, {loop:false, override:true})
			.to({scaleX: barScale}, 100, createjs.Ease.quadIn);

		// position the icons in order
		var itemIdx = 0;
		if (_itemAry[MenuWidget.HOME].enabled == true) {
			tweenButtonDisplay(_btnHome, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.REPLAY].enabled == true) {
			tweenButtonDisplay(_btnReplay, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.AUDIO].enabled == true) {
			tweenButtonDisplay(_btnAudio, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.CC].enabled == true) {
			tweenButtonDisplay(_btnCC, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.FULLSCREEN].enabled == true) {
			tweenButtonDisplay(_btnFullscreen, _isOpen, ++itemIdx);
		}
	}


	function eventOpenMenu( evt ) {
		toggleMenu();
		AudioHelper.PlayBtnSound();
		//_this.dispatchEvent(MenuWidget.OPEN_MENU_EVENT);
	}

	function eventHome( evt ) {
		AudioHelper.PlayBtnSound();
		_this.dispatchEvent(MenuWidget.HOME_EVENT);
	}

	function eventRelay( evt ) {
		AudioHelper.PlayBtnSound();
		_this.dispatchEvent(MenuWidget.REPLAY_EVENT);
	}

	function eventAudio( evt ) {
		_this.setState(MenuWidget.AUDIO, !_btnAudio.isOn);
		AudioHelper.PlayBtnSound();
		_this.dispatchEvent(MenuWidget.AUDIO_EVENT);
	}

	function eventCC( evt ) {
		_this.setState(MenuWidget.CC, !_btnCC.isOn);
		AudioHelper.PlayBtnSound();
		_this.dispatchEvent(MenuWidget.CC_EVENT);
	}

	function eventFullScreen( evt ) {
		_this.setState(MenuWidget.FULLSCREEN, !_btnFullscreen.isOn);
		AudioHelper.PlayBtnSound();
		_this.dispatchEvent(MenuWidget.FULLSCREEN_EVENT);
	}


	/*
	* Return the widget current state
	* @param widgetName:[Number]|MenuWidget enum names (e.g. MenuWidget.HOME) - The widget name
	* @return - the state of the button 1 for on, 0 for off, null if button was disabled.
	*/
	_this.getState = function( widgetName ) {
		if (_itemAry[widgetName].enabled) {
			var offImage = _itemAry[widgetName].obj.offIcon;
			if (offImage) {
				return (offImage.visible) ? 0 : 1;
			}
			return 1;
		}
		return null;
	}


	/*
	* Set the widget current state
	* @param widgetName:[Number]|MenuWidget enum names (e.g. MenuWidget.HOME) - The widget name
	* @param isOn:[Bool] - The state to set it
	* @return - the state of the button 1 for on, 0 for off, null if button was disabled.
	*/
	_this.setState = function( widgetName, isOn ) {
		if (_itemAry[widgetName].enabled) {
			//console.log(_itemAry[widgetName].obj);
			_itemAry[widgetName].obj.setToggle(isOn);
		}
		return isOn;
	}



	// Helper methods

	function _toggleIcon( iconObj ) {
		if (iconObj.offIcon) {
			iconObj.offIcon.visible = !iconObj.offIcon.visible;
		}
	}

	function tweenButtonDisplay( btnObj, isOn, index ) {
		var itemScale = isOn ? 1 : 0;

		createjs.Tween
			.get(btnObj, {loop:false, override:true})
			.to({scaleX: itemScale, scaleY: itemScale}, itemScale * (index * 50), createjs.Ease.quadIn);

		if (btnObj.offIcon) {
			createjs.Tween
				.get(btnObj.offIcon, {loop:false, override:true})
				.to({scaleX: itemScale, scaleY: itemScale}, itemScale * (index * 50), createjs.Ease.quadIn);
		}
	}


	// Return the number of items enabled
	function getenabledItemCount() {
		var enabledCount = 0;
		for( var key in _itemAry) {
			if(_itemAry[key].enabled == true) {
				enabledCount++;
			}
		}
		return enabledCount;
	}

	// Get image asset
	function getAsset( bmpItemName, centerImg ) {
		return CreateJSAssetManager.getBitmap(bmpItemName, false, false, false, centerImg);
	}


	// Get button asset
	function makeMenuButton( widgetName, menuIdx, offState ) {

		var btnContainer = new createjs.Container();
		btnContainer.name = widgetName;

		var btnImg = getAsset(_itemAry[widgetName].bmpName, true);
		btnContainer.addChild(btnImg);

		if (offState == true) {
			var btnImgOff = getAsset(_itemAry[widgetName].bmpNameOff, true);
			btnImgOff.visible = false;
			btnContainer.offIcon = btnImgOff;
			btnContainer.addChild(btnImgOff);
		}

		// config the btn container
		var minRadius = (btnImg.height < btnImg.width) ? btnImg.height/2.5 : btnImg.width/2.5;
		var btnTouchArea = TouchHelper.NewTouchCircle(0, 0, minRadius);
		btnContainer.addChild(btnTouchArea);
		btnContainer.cursor = "pointer";
		btnContainer.isOn = true;
		btnContainer.scaleX = 0;
		btnContainer.scaleY = 0;

		btnContainer.y = (_isVert) ? menuIdx * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT : 0;
		btnContainer.x = (_isVert) ? 0 : menuIdx * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
		
		btnContainer.setToggle = function( newState ) {
			if (btnContainer.offIcon) {
				btnContainer.isOn = newState;
				btnContainer.offIcon.visible = !btnContainer.isOn;
			}
		}

		_itemAry[widgetName].obj = btnContainer;
		return btnContainer;
	}


	/*
	* Destructor to remove all event listeners
	*/
	_this.destroy = function() {
		_imgStart.removeEventListener("pressup", eventOpenMenu);
		_btnHome.removeEventListener("pressup", eventHome);
		_btnReplay.removeEventListener("pressup", eventRelay);
		_btnAudio.removeEventListener("click", eventAudio);
		_btnCC.removeEventListener("click", eventCC);

		if (_btnFullscreen) {
			_btnFullscreen.removeEventListener("click", eventFullScreen);
		}
		_this.parent.removeChild(_this);
	}

	return _construct();
}


