var BrowserDetection = function(){

	if ( arguments.callee._singletonInstance )
    return arguments.callee._singletonInstance;
  	arguments.callee._singletonInstance = this;

	var ua = navigator.userAgent.toLowerCase(); 
	this.isSafari = function(){ return ((ua.indexOf('safari') != -1) && !(ua.indexOf('chrome') > -1)); };
	this.isKindle = function(){ return (navigator.userAgent.indexOf("Silk") !== -1); };
	this.isMobile = function(){ return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ); };
	this.isMac = function(){ return (navigator.appVersion.indexOf("Mac")!=-1); };
	this.isIE = function(){ return (navigator.userAgent.indexOf("MSIE") != -1) || (/rv:11.0/i.test(navigator.userAgent)) || (/MSIE 10/i.test(navigator.userAgent)) || (/MSIE 9/i.test(navigator.userAgent)); };
	this.isFirefox = function() { return (typeof InstallTrigger !== 'undefined'); };
	this.isChrome = function(){ return window.chrome; };
	this.isAndroid =  function() { return /Android/i.test(navigator.userAgent);};
}