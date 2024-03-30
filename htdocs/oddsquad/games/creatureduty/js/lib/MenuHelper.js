/*

  MenuHelper

  gm: the _this.gameManager that is running this thing
  mm: A MenuWidget

  Contains the functions that get called when users interact with the menu:
  toggleAudio: turn the sound on or off
  toggleCC: turn the closed captioning on or off
  toggleFullScreen: turn fullscreen on or off
  
*/
	
var MenuHelper = function (gm,mm) {
	var _this = this;
	var _mainMenu = mm;
	this.gameManager = gm;
	this.fullscreen = false;

	_this.playMenuOpenSound = function (){
		//_log(" -ding- ");
	}

	_this.raiseMenu = function (){
		_this.gameManager.displayInGame(_mainMenu,true,true);
	}
	
	_this.setAudio = function(audioOn){
		_this.gameManager.setAudio(audioOn);
		_mainMenu.setState(MenuWidget.AUDIO, audioOn);

		sendGAEvent("CreatureDuty_ScreenFlow", (audioOn) ? "Game_Unmuted" : "Game_Muted");

	}

	_this.toggleAudio = function (){
		_this.setAudio(!_this.gameManager.audioOn);
	}
	
	_this.setCC = function(ccOn){
		_this.gameManager.setCC(ccOn);
		_mainMenu.setState(MenuWidget.CC, ccOn);
		sendGAEvent("CreatureDuty_ScreenFlow", (ccOn) ? "Captions_On" : "Captions_Off");
	}

	_this.toggleCC = function (){
		_this.setCC(!_this.gameManager.ccOn);
	}
	
	_this.toggleFullscreen = function (){
		_this.fullscreen = !_this.fullscreen;
		_log("Vvvv\ndocument.fullscreenEnabled? "+document.fullscreenEnabled+", document.webkitFullscreenEnabled? "+document.webkitFullscreenEnabled+", document.mozFullScreenEnabled? "+document.mozFullScreenEnabled+", document.msFullscreenEnabled? "+document.msFullscreenEnabled);
		if (_this.fullscreen && (
			document.fullscreenEnabled || 
			document.webkitFullscreenEnabled || 
			document.mozFullScreenEnabled ||
			document.msFullscreenEnabled
			)
		) {
			if (canvas.requestFullscreen) {
				canvas.requestFullscreen();
			} else if (canvas.webkitRequestFullscreen) {
				canvas.webkitRequestFullscreen();
			} else if (canvas.mozRequestFullScreen) {
				canvas.mozRequestFullScreen();
			} else if (canvas.msRequestFullscreen) {
				_log("IIIIIIIIIIEEEEEEEEEEEEE");
				fullScreenButton.msRequestFullscreen();
			}		
		} else if(!_this.fullscreen) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if (document.webkitExitFullscreen) {
				document.webkitExitFullscreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.msExitFullscreen) {
				document.msExitFullscreen();
			}
		} else {
			_log("toggleFS fail, nothing checked out.");
		}
		//_log(" Full Screen On -> " + _this.fullscreen);
		sendGAEvent("CreatureDuty_ScreenFlow", "FullScreen_Clicked");
	}
	
	_mainMenu.addEventListener(MenuWidget.OPEN_MENU_EVENT, _this.playMenuOpenSound);
	_mainMenu.addEventListener(MenuWidget.AUDIO_EVENT, _this.toggleAudio);
	_mainMenu.addEventListener(MenuWidget.CC_EVENT, _this.toggleCC);
	_mainMenu.addEventListener(MenuWidget.FULLSCREEN_EVENT, _this.toggleFullscreen);

}

