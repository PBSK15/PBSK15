/* global require, ss, createjs, isEmpty, console */
/*
require.include("weblib/external/createjs.min.js");
require.include("weblib/ssnamespace");
require.include("weblib/core/Util");

require.include("weblib/utils/DebugUtil");
*/
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

		if(typeof document.hidden !== "undefined"){
			_hidden = "hidden";
			visibilityChange = "visibilitychange";
		}else if (typeof document.webkitHidden !== "undefined") {
			_hidden = "webkitHidden";
			visibilityChange = "webkitvisibilitychange";
		}else if (typeof document.mozHidden !== "undefined") {
			_hidden = "mozHidden";
			visibilityChange = "mozvisibilitychange";
		}else if (typeof document.msHidden !== "undefined") {
			_hidden = "msHidden";
			visibilityChange = "msvisibilitychange";
		}else{
			//TESTING
			ss.DebugUtil.showMessage("PageFocus: No Visibility support detected!", "VisNoSupport");

			if(/*@cc_on!@*/false){
				document.onfocusout = _handleFocusOut;
				document.onfocusin = _handleFocusIn;
			}else{
				window.onfocus = _handleFocusIn;
				window.onblur = _handleFocusOut;
			}

			if(window.onpagehide || window.onpagehide === null){
			 	//TESTING
				ss.DebugUtil.showMessage("PageFocus: Add Show/Hide listeners", "ShowSupport");

			 	window.addEventListener("pagehide", _handlePageHide);
			 	window.addEventListener("pageshow", _handlePageShow);
			}else{
				//TESTING
				ss.DebugUtil.showMessage("PageFocus: No Hide/Show support detected!", "ShowNoSupport");
			}
			
		}
		
		//TESTING
		ss.DebugUtil.showMessage("PageFocus: Visibility event: '" + visibilityChange + "'", "VisEvent");
		_log("Adding page visibility listeners: Using event '" + visibilityChange + "'");

		if(typeof document.addEventListener === "undefined" || typeof document[_hidden] === "undefined"){
			console.warn("Page Visibility API is not supported on this browser!");
		}else{
			document.addEventListener(visibilityChange, _handleVisibilityChange, false);
		}

		return _this;
	}

	/*
	* Handle a change in visibility state for the page
	*/
	function _handleVisibilityChange(){
		if(document[_hidden]){
			//TESTING
			_log("PageFocus: Focus Lost");

			_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_LOST));
		}else{
			//TESTING
			_log("PageFocus: Focus Gained");

			_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_GAIN));
		}
	}

	function _handleFocusIn(){
		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_GAIN));
	}

	function _handleFocusOut(){
		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_LOST));
	}

	/*
	* Handle the hiding of the page
	*/
	function _handlePageHide(){
		_this.dispatchEvent(new createjs.Event(ss.PageFocus.FOCUS_LOST));
	}

	/*
	* Handle the showing of the page
	*/
	function _handlePageShow(){
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

	//TESTING
	//_log("PageFocus: Get Instance");

	if(isEmpty(ss.PageFocus._instance)){
		ss.PageFocus._instance = new ss.PageFocus();
	}

	return ss.PageFocus._instance;
};



