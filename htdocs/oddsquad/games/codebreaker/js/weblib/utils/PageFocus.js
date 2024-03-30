/* global require, ss, createjs, isEmpty, console */

//require.include("weblib/external/createjs.min.js");
//require.include("weblib/ssnamespace");
//require.include("weblib/utils/SystemInfo");
//require.include("weblib/core/Util");

//require.include("weblib/utils/DebugUtil");

/*
* Class PageFocus extends createjs.EventDispatcher
*	Handles detection of gain and loss of focus by the page
*/

/*
* Get the singleton instance of the PageFocus class
*/
ss.PageFocus = function(){
	"use strict";

	var _this = this;
	var _hidden;

	if(!isEmpty(ss.PageFocus._instance)){
		return ss.PageFocus._instance;
	}

	//Call base class constructor
	createjs.EventDispatcher.call(this);

	/*
	* Initialize this object
	*/
	function _construct(){

		var visibilityChange;

		if (typeof document.webkitHidden !== "undefined") {
			_hidden = "webkitHidden";
			visibilityChange = "webkitvisibilitychange";
		}else if (typeof document.mozHidden !== "undefined") {
			_hidden = "mozHidden";
			visibilityChange = "mozvisibilitychange";
		}else if (typeof document.msHidden !== "undefined") {
			_hidden = "msHidden";
			visibilityChange = "msvisibilitychange";
		}else if(typeof document.hidden !== "undefined"){
			_hidden = "hidden";
			visibilityChange = "visibilitychange";
		}else{
			//TESTING
			//ss.DebugUtil.showMessage("PageFocus: No Visibility support detected!", "VisNoSupport");

			_registerFocusListeners();
		}

		//Force registration of focus listeners on Silk since it lies about implementing the Page Visibility API
		// if(ss.SystemInfo.isSilk){
		// 	ss.DebugUtil.showMessage("PageFocus: Running on Silk - Using Focus listeners");
		// 	_registerFocusListeners();
		// }

		//Check for page hiding and showing if it appears to be supported
		if(window.onpagehide || window.onpagehide === null){
		 	//TESTING
			//ss.DebugUtil.showMessage("PageFocus: Add Show/Hide listeners", "ShowSupport");

		 	window.addEventListener("pagehide", _handlePageHide);
		 	window.addEventListener("pageshow", _handlePageShow);
		}else{
			//TESTING
			//ss.DebugUtil.showMessage("PageFocus: No Hide/Show support detected!", "ShowNoSupport");
		}

		
		//TESTING
		//ss.DebugUtil.showMessage("PageFocus: Visibility event: '" + visibilityChange + "'", "VisEvent");
		//console.log("Adding page visibility listeners: Using event '" + visibilityChange + "'");

		if(typeof document.addEventListener === "undefined" || typeof document[_hidden] === "undefined"){
			console.warn("Page Visibility API is not supported on this browser!");
		}else{
			//TESTING
			//ss.DebugUtil.showMessage("PageFocus: Listening for '" + visibilityChange + "'", "PageFocusListen");
			document.addEventListener(visibilityChange, _handleVisibilityChange, false);
		}

		return _this;
	}

	/*
	* Helper function that registers listeners for the document or window focus events
	*/
	function _registerFocusListeners(){
		if(/*@cc_on!@*/false){
			document.onfocusout = _handleFocusOut;
			document.onfocusin = _handleFocusIn;
		}else{
			window.onfocus = _handleFocusIn;
			window.onblur = _handleFocusOut;
		}
	}

	/*
	* Handle a change in visibility state for the page
	*/
	function _handleVisibilityChange(){
		ss.DebugUtil.showMessage("PageFocus: GOT VISIBILITY CHANGE!", "PageFocusVisChange");

		if(document[_hidden]){
			//TESTING
			//ss.DebugUtil.showMessage("PageFocus: Visibility Focus Lost", "VisChangeFocusLost");
			//console.log("PageFocus: Focus Lost");

			_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_LOST));
		}else{
			//TESTING
			//ss.DebugUtil.showMessage("PageFocus: Visibility Focus Gained", "VisChangeFocusGained");
			//console.log("PageFocus: Focus Gained");

			_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_GAIN));
		}
	}

	function _handleFocusIn(){
		//TESTING
		//ss.DebugUtil.showMessage("PageFocus: Window Focus Gained", "WindowFocusGained");
		//console.log("PageFocus: Window Focus Gained");

		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_GAIN));
	}

	function _handleFocusOut(){
		//TESTING
		//ss.DebugUtil.showMessage("PageFocus: Window Focus Lost", "WindowFocusLost");
		//console.log("PageFocus: Window Focus Lost");

		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_LOST));
	}

	/*
	* Handle the hiding of the page
	*/
	function _handlePageHide(){
		//TESTING
		//ss.DebugUtil.showMessage("PageFocus: Window Hide", "WindowHide");
		//console.log("PageFocus: Window Hide");

		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_LOST));
	}

	/*
	* Handle the showing of the page
	*/
	function _handlePageShow(){
		//TESTING
		//ss.DebugUtil.showMessage("PageFocus: Window Show", "WindowShow");
		//console.log("PageFocus: Window Show");

		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_GAIN));
	}

	return _construct();
};

//Inherit from EventDispatcher
ss.PageFocus.prototype = new createjs.EventDispatcher();
ss.PageFocus.prototype.constructor = ss.PageFocus;

//Event indicating that the page has lost focus
ss.PageFocus.FOCUS_LOST = "FOCUS_LOST";
//Event indicating that the page has gained focus
ss.PageFocus.FOCUS_GAIN = "FOCUS_GAIN";

/*
* Get the Singleton instance of this class
*/
ss.PageFocus._instance = null;
ss.PageFocus.getInstance = function(){
	"use strict";

	if(isEmpty(ss.PageFocus._instance)){
		ss.PageFocus._instance = new ss.PageFocus();
	}

	return ss.PageFocus._instance;
};



