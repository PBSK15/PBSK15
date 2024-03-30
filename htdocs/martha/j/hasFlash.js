/*
Flash Detection for redirect to Martha Mobile index page.
If no Flash support detected, redirect to mobile/index.html
*/

var hasFlash = false;

try {
  if (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')) hasFlash = true;

} catch(e) {

  if (navigator.mimeTypes ["application/x-shockwave-flash"] != undefined) hasFlash = true;

}

//redirect:
if(!hasFlash) window.location.href = "/martha/mobile/index.html";