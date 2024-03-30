/*
window.mobilecheck = function() {
	var check = false;
	var hasFlash = false;
	var isSizeForMobile = false;
	try {
	  if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) hasFlash = true;
	} catch(e) {
	  if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;
	}

	if (screen.width <= 699) {
		isSizeForMobile = true;
	}

	// if Flash is not support or flash is enabled but smaller in size - 699px
	if(hasFlash === false || (hasFlash === true && isSizeForMobile === true)){
		check = true;
	}

	//console.log("hasFlash=" + hasFlash + " isSizeForMobile=" + isSizeForMobile);
	
	return check; 
}
*/
window.mobilecheck = function() {
	
  var isMobile = {
      Android: function() {
          return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
          return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
          return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
          return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
          return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
  };
  return isMobile.any();
}