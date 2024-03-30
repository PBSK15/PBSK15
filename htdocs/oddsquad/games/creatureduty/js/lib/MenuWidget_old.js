
// menu item position variables
MenuWidget.BAR_BASE_SCALE = 0.2;
MenuWidget.BUTTON_SHIFT = 16;
MenuWidget.BUTTON_SPACING = 54;

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
	var _isVert = false;
	var _isOpen = false;


	var _itemAry = {
		0: {
			enable: true,
			bmpName: "MenuHome"
		},
		1: {
			enable: false,
			bmpName: "MenuReplay"
		},
		2: {
			enable: false,
			bmpName: "MenuAudio",
			bmpNameOff: "MenuAudioOff"
		},
		3: {
			enable: false,
			bmpName: "MenuCC",
			bmpNameOff: "MenuCCOff"
		},
		4: {
			enable: false,
			bmpName: "MenuFullscreen",
			bmpNameOff: "MenuFullscreenOff"
		}
	};

	var _barContainer;
	var _imgStart;
	var _imgBar;
	var _imgHome;
	var _imgReplay;
	var _imgAudio;
	var _imgAudioOff;
	var _imgCC;
	var _imgCCOff;
	var _imgFullscreen;
	var _imgFullscreenOff;

	// place the images
	function _construct() {
		
		// enable only the specified buttons
		if (params) {
			for (var i = 0; i < params.length; i++) {
				_itemAry[params[i]].enable = true;
			}
		}

		// create the base image elements
		_barContainer = new createjs.Shape();
		_imgStart = getAsset("MenuStart", true);
		_imgBar = getAsset("MenuBar", true);

		// add the base images
		_imgBar.regX = 0;
		_imgBar.scaleX = 0;
		_this.addChild(_imgBar);
		_this.addChild(_imgStart);
		_imgStart.on("pressup", eventOpenMenu);
		if (menuOrientation == MenuWidget.ORIENTATION.Vert) {
			_imgBar.rotation = 90;
			_isVert = true;
		}


		// home button will be always on by default
		var itemIdx = 0;
		if (_itemAry[MenuWidget.HOME].enable == true) {
			_imgHome = getAsset(_itemAry[MenuWidget.HOME].bmpName, true);
			if (_isVert) {
				_imgHome.y = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			} else {
				_imgHome.x = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			}
			_this.addChild(_imgHome);
			_imgHome.scaleX = 0;
			_imgHome.scaleY = 0;
			_itemAry[MenuWidget.HOME].obj = _imgHome;
			_imgHome.on("pressup", eventHome);
		}

		if (_itemAry[MenuWidget.REPLAY].enable == true) {
			_imgReplay = getAsset(_itemAry[MenuWidget.REPLAY].bmpName, true);
			if (_isVert) {
				_imgReplay.y = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			} else {
				_imgReplay.x = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			}
			_this.addChild(_imgReplay);
			_imgReplay.scaleX = 0;
			_imgReplay.scaleY = 0;
			_itemAry[MenuWidget.REPLAY].obj = _imgReplay;
			_imgReplay.on("pressup", eventRelay);
		}

		if (_itemAry[MenuWidget.AUDIO].enable == true) {
			_imgAudio = getAsset(_itemAry[MenuWidget.AUDIO].bmpName, true);
			_imgAudioOff = getAsset(_itemAry[MenuWidget.AUDIO].bmpNameOff, true);
			if (_isVert) {
				_imgAudioOff.y = _imgAudio.y = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			} else {
				_imgAudioOff.x = _imgAudio.x = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			}
			_this.addChild(_imgAudio);
			_this.addChild(_imgAudioOff);
			_imgAudio.scaleX = 0;
			_imgAudio.scaleY = 0;
			_imgAudioOff.scaleX = 0;
			_imgAudioOff.scaleY = 0;
			_imgAudioOff.visible = false;
			_imgAudio.offIcon = _imgAudioOff;
			_itemAry[MenuWidget.AUDIO].obj = _imgAudio;
			_imgAudio.on("mousedown", eventAudio);
		}

		if (_itemAry[MenuWidget.CC].enable == true) {
			_imgCC = getAsset(_itemAry[MenuWidget.CC].bmpName, true);
			_imgCCOff = getAsset(_itemAry[MenuWidget.CC].bmpNameOff, true);
			if (_isVert) {
				_imgCCOff.y = _imgCC.y = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			} else {
				_imgCCOff.x = _imgCC.x = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			}
			_this.addChild(_imgCC);
			_this.addChild(_imgCCOff);
			_imgCC.scaleX = 0;
			_imgCC.scaleY = 0;
			_imgCCOff.scaleX = 0;
			_imgCCOff.scaleY = 0;
			_imgCCOff.visible = false;
			_imgCC.offIcon = _imgCCOff;
			_itemAry[MenuWidget.CC].obj = _imgCC;
			_imgCC.on("mousedown", eventCC);
		}

		if (_itemAry[MenuWidget.FULLSCREEN].enable == true) {
			_imgFullscreen = getAsset(_itemAry[MenuWidget.FULLSCREEN].bmpName, true);
			_imgFullscreenOff = getAsset(_itemAry[MenuWidget.FULLSCREEN].bmpNameOff, true);
			if (_isVert) {
				_imgFullscreenOff.y = _imgFullscreen.y = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			} else {
				_imgFullscreenOff.x = _imgFullscreen.x = (++itemIdx) * MenuWidget.BUTTON_SPACING + MenuWidget.BUTTON_SHIFT;
			}
			_this.addChild(_imgFullscreen);
			_this.addChild(_imgFullscreenOff);
			_imgFullscreen.scaleX = 0;
			_imgFullscreen.scaleY = 0;
			_imgFullscreenOff.scaleX = 0;
			_imgFullscreenOff.scaleY = 0;
			_imgFullscreenOff.visible = false;
			_imgFullscreen.offIcon = _imgFullscreenOff;
			_itemAry[MenuWidget.FULLSCREEN].obj = _imgFullscreen;
			_imgFullscreen.on("mousedown", eventFullScreen);
		}


		return _this;
	}


	function toggleMenu() {
		_isOpen = !_isOpen;

		var barPercent = MenuWidget.BAR_BASE_SCALE + (getEnableItemCount() / Object.keys(_itemAry).length * (1 - MenuWidget.BAR_BASE_SCALE));
		var barScale = (_isOpen) ? barPercent : 0;

		createjs.Tween
			.get(_imgBar, {loop:false, override:true})
			.to({scaleX: barScale}, 100, createjs.Ease.quadIn);

		createjs.Tween
			.get(_imgBar, {loop:false, override:true})
			.to({scaleX: barScale}, 100, createjs.Ease.quadIn);

		var itemIdx = 0;
		if (_itemAry[MenuWidget.HOME].enable == true) {
			tweenButtonDisplay(_imgHome, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.REPLAY].enable == true) {
			tweenButtonDisplay(_imgReplay, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.AUDIO].enable == true) {
			tweenButtonDisplay(_imgAudio, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.CC].enable == true) {
			tweenButtonDisplay(_imgCC, _isOpen, ++itemIdx);
		}

		if (_itemAry[MenuWidget.FULLSCREEN].enable == true) {
			tweenButtonDisplay(_imgFullscreen, _isOpen, ++itemIdx);
		}
	}


	function eventOpenMenu( evt ) {
		toggleMenu();
		_imgStart.rotation = _isOpen ? 12 : 0;
		_imgStart.removeEventListener("pressup", eventHome);
		_this.dispatchEvent(new createjs.Event(MenuWidget.OPEN_MENU_EVENT,true));
	}

	function eventHome( evt ) {
		_imgHome.removeEventListener("pressup", eventHome);
		_this.dispatchEvent(new createjs.Event(MenuWidget.HOME_EVENT,true));
		_log(_this.getState(MenuWidget.HOME));
	}

	function eventRelay( evt ) {
		_imgReplay.removeEventListener("pressup", eventRelay);
		_this.dispatchEvent(new createjs.Event(MenuWidget.REPLAY_EVENT,true));
		_log(_this.getState(MenuWidget.REPLAY));
	}

	function eventAudio( evt ) {
		_toggleIcon(_imgAudio);
		_imgAudio.removeEventListener("mousedown", eventAudio);
		_this.dispatchEvent(new createjs.Event(MenuWidget.AUDIO_EVENT,true));
		_log(_this.getState(MenuWidget.AUDIO));
	}

	function eventCC( evt ) {
		_toggleIcon(_imgCC);
		_imgCC.removeEventListener("mousedown", eventCC);
		_this.dispatchEvent(new createjs.Event(MenuWidget.CC_EVENT,true));
		_log(_this.getState(MenuWidget.CC));
	}

	function eventFullScreen( evt ) {
		_toggleIcon(_imgFullscreen);
		_imgFullscreen.removeEventListener("mousedown", eventFullScreen);
		_this.dispatchEvent(new createjs.Event(MenuWidget.FULLSCREEN_EVENT,true));
		_log(_this.getState(MenuWidget.FULLSCREEN));
	}



	/*
	* Return the widget current state
	* @param widgetName:[Number]|MenuWidget enum names (e.g. MenuWidget.HOME) - The widget name
	* @return - the state of the button 1 for on, 0 for off, null if button was disabled.
	*/
	_this.getState = function( widgetName ) {
		if (_itemAry[widgetName].enable) {
			var offImage = _itemAry[widgetName].obj.offIcon;
			if (offImage) {
				return (offImage.visible) ? 0 : 1;
			}
			return 1;
		}
		return null;
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
	function getEnableItemCount() {
		var enabledCount = 0;
		for( var key in _itemAry) {
			if(_itemAry[key].enable == true) {
				enabledCount++;
			}
		}
		return enabledCount;
	}

	// get image asset
	function getAsset( bmpItemName, centerImg ) {
		return AssetManager().getBitmap(bmpItemName, centerImg);
	}

	return _construct();
}


