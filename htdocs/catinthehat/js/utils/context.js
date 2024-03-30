//context.js
define([],function() {
	
	var start = Date.now()
	
	return function(){
	
		var TARGET_WIDTH = 1024;
		
		var _scale;
		var _portrait;
		var _large;
		var _width;
		var _height;
		var _isAndroid;
		var _isKindle;
		var _isNook;
		var _native;
		var _androidVersion;
		
		
		
		this.update = function() {
			
			var w = window.innerWidth;
			var h = window.innerHeight;
			
			if(((_portrait && h>=w) || (!_portrait && w >= h)) && Date.now() > (start + 8000) && navigator.userAgent.match(/Nook/i)) return
			
			_width = w;
			_height = h;
			_portrait = h > (w -50);
			
			if(window.orientation != null){
				_portrait = window.orientation == 0 || window.orientation == 180;
			}
			
			_large = (w > 500) && (h > 500);
			_scale = (_portrait ? (_large ? 4/3 : 1.5) : 1) * w / TARGET_WIDTH;
			
			var ua = navigator.userAgent;
			_isAndroid = ua.indexOf("Android") > -1; //&& ua.indexOf("mobile");
			
			_isKindle = ua.indexOf('Kindle') > -1 || ua.indexOf('Silk') > -1
			_isNook = ua.toLowerCase().indexOf('nook') > -1
			//alert (ua);
		
			_native = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android') > -1 && ua.indexOf('AppleWebKit') > -1) && !(ua.indexOf('Chrome') > -1));
			
			if( ua.indexOf("Android") >= 0 )
				{
				  _androidVersion = parseFloat(ua.slice(ua.indexOf("Android")+8)); 
				}
				else
					_androidVersion = 0;
			
			
		}
	
		this.scale = function() { return _scale }
		this.portrait = function() { return _portrait }
		this.landscape = function() { return !_portrait }
		this.phone = function() { return !_large }
		this.small = function() { return !_large }
		this.tablet = function() { return _large }
		this.large = function() { return _large }
		this.width = function() { return _width }
		this.height = function() { return _height }
		this.android = function() {return _isAndroid}
		this.nativeAndroid = function() {return _native}
		this.androidVersion = function() {return _androidVersion}
		this.isKindle = function(){return _isKindle}
		this.isNook = function(){return _isNook}
	}
});