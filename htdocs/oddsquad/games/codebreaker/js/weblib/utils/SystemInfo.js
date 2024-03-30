//require.include("weblib/ssnamespace");
//require.include("weblib/utils/DebugUtil");

/*
* Static Class SystemInfo
*/

ss.SystemInfo = new Object();

ss.SystemInfo.isIOS = undefined;
ss.SystemInfo.isIPhone = undefined;
ss.SystemInfo.isIPod = undefined;
ss.SystemInfo.isIPad = undefined;
ss.SystemInfo.isNexus = undefined;
ss.SystemInfo.isNabi = undefined;

ss.SystemInfo.isIE = undefined;
ss.SystemInfo.isSafari = undefined;
ss.SystemInfo.isChrome = undefined;
ss.SystemInfo.isMaxthon = undefined;
ss.SystemInfo.isFirefox = undefined;
ss.SystemInfo.isSilk = undefined;

/*
* Check if this program is being run on a mobile browser
* @return:[Boolean] - True if this program is being run on a mobile browser, false otherwise
*/
ss.SystemInfo.isMobile = function() {
	if( navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
	 		|| navigator.userAgent.match(/iPad/i)
	 		|| navigator.userAgent.match(/iPod/i)
		 	|| navigator.userAgent.match(/BlackBerry/i)
		 	|| navigator.userAgent.match(/Windows Phone/i)
		 	|| navigator.userAgent.match(/Mobile/i)
		 	|| navigator.userAgent.match(/Silk/i)
			|| navigator.userAgent.match(/NABI/i)){
		return true;
	}else{
	    return false;
	}
}

/*
* Check if this program is being run on a browser on iOS
* @return:[Boolean] - True if this program is being run on an iOS browser, false otherwise
*/
/*
ss.SystemInfo.isIOS = function(){
	return navigator.userAgent.match(/iPhone/i)
	 	|| navigator.userAgent.match(/iPad/i)
	 	|| navigator.userAgent.match(/iPod/i);
}*/

/*
* Get the version of iOS the game is running on
* @return:[Integer] - 
*/
ss.SystemInfo.getIOSVersion = function(){
	//Return -1 if not running on IOS
	if(!ss.SystemInfo.isIOS){
		return -1;
	}

	var ua = window.navigator.userAgent;
	var osIndex = ua.indexOf('OS ');

	if(osIndex >= 0){
		return parseInt(ua.substring(osIndex + 3, osIndex + 4));
	}

	console.warn("SystemInfo.getIOSVersion: Couldn't detect IOS version!");
	return 0;
}

/*
* Get the version of IE the game is running on
* @return:[Integer] - If on IE, the version of IE the game is running on.
*					- If not on IE, returns -1.
*/
ss.SystemInfo.getIEVersion = function(){
	//Return -1 if not running on IE
	if(!ss.SystemInfo.isIE){
		return -1;
	}

	var ua = window.navigator.userAgent;
	var msie = ua.indexOf('MSIE ');
	var trident = ua.indexOf('Trident/');

	//Check for IE 10 or older and return version number
	if(msie >= 0){
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	//Check for IE 11 or newer and return version number
	if(trident >= 0){
		var rv = ua.indexOf('rv');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	console.warn("SystemInfo.getIEVersion: Couldn't detect IE version!");
	return 0;
}

/*
* Get the version of Safari the game is running on
* @return:[Integer] - If on Safari, the version of Safari the game is running on.
*					- If not on Safari, returns -1.
*/
ss.SystemInfo.getSafariVersion = function(){
	var versionIndex;
	var versionStart;
	

	//return -1 if not on Safari
	if(!ss.SystemInfo.isSafari){
		return -1;
	}

	//Look for the start of the version tag
	versionIndex = parseInt(window.navigator.userAgent.indexOf("Version/"));
	versionStart = versionIndex + 8;

	//ss.DebugUtil.showMessage("Version Start: " + versionStart, "VStart");

	//TESTING
	//ss.DebugUtil.showMessage("Version Index: " + window.navigator.userAgent.indexOf("Version/"), "VIndex");
	//ss.DebugUtil.showMessage("Version Index Add: " + Number(versionIndex + 8), "VIndex2");
	//ss.DebugUtil.showMessage("Version text: " + window.navigator.userAgent.substring(versionStart, versionStart + 1), "VText");

	if(versionIndex < 0){		
		console.warn("SystemInfo: Unable to detect Safari version!");
		return 0;
	}

	return parseInt(window.navigator.userAgent.substring(versionStart, versionStart + 1));
}

/*
* Check if this program is being run on any version of Internet Explorer
* @return:
*/
// ss.SystemInfo.isInternetExplorer = function(){
	


// 	// if(navigator.appName == 'Microsoft Internet Explorer'){
// 	// 	return true;
// 	// }else{
// 	// 	return false;
// 	// }
// }

/*
* Initialize the system info object
*/
ss.SystemInfo._init = function(){
	"use strict";

	var ua = window.navigator.userAgent;

	this.isIOS = false;
	this.isIPhone = false;
	this.isIPod = false;
	this.isIPad = false;
	this.isNexus = false;
	
	this.isIE = false;
	this.isSafari = false;
	this.isChrome = false;
	this.isFirefox = false;
	this.isMaxthon = false;	
	this.isSilk = false;

	//Check for (cr)Apple devices
	if(ua.match(/iPhone/i)){
		this.isIPhone = true;
	}else if (ua.match(/iPad/i)){
		this.isIPad = true;
	}else if(ua.match(/iPod/i)){
		this.isIPod = true;
	}

	//Check for any IOS device
	if(this.isIPhone || this.isIPad || this.isIPod){
		this.isIOS = true;
	}
	
	//Check for a Nexus device
	if(ua.match(/Nexus/i)){
		this.isNexus = true;
	}

	//Check for Internet Explorer
	if(ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident') >= 0){
		this.isIE = true;
	//Check for Silk
	}else if(ua.match(/Silk/i)){
		this.isSilk = true;
	//Check for Maxthon
	}else if(ua.match(/NABI/i)){
		this.isMaxthon = true;
		//Check for Chrome
	}else if(ua.match(/Chrome/i)){
		this.isChrome = true;
	//Check for Firefox
	}else if(ua.match(/Firefox/i)){
		this.isFirefox = true;
	//Check for Safari
	}else if(ua.match(/Safari/i)){
		this.isSafari = true;
	}else{
		console.warn("SystemInfo: Couldn't detect browser type!");		
	}
}

//Run the initialization code immediately
ss.SystemInfo._init();

