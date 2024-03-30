function showTrackingBanner() {
	
	var params = {
		quality: "high",
		scale: "noscale",
		allowscriptaccess: "always",
		bgcolor: "#FFFFFF"
	};
	
	var flashvars = {
	};
			
	var attributes = {
		id: "flashTrackingBannerContent",
		name: "flashTrackingBannerContent"
	};
	
	swfobject.embedSWF("http://www-tc.pbskids.org/wordquest/media/swf/modules/trackingBanner/trackingBanner.swf", "flashTrackingBannerContent", "960", "90", "9.0.124", "http://www-tc.pbskids.org/wordquest/media/swf/global/expressInstall/expressInstall.swf", flashvars, params, attributes);
	
	setStyle('flashTrackingBannerContent','display','block');
	setStyle('trackingBannerContainer','height','110px');
}

function setStyle(objId, style, value){
   document.getElementById(objId).style[style]= value;
}
/* USAGE:
 * objId    = element id.
 * style    = the style to be changed.
 * value    = the value assigned to the style.
*/