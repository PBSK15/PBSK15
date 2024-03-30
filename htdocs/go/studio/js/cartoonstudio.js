/*
 * PBS_CartoonStudio
 */


function querySt(ji) {
	hu = window.location.search.substring(1);
	gy = hu.split("&");
	for (i=0;i<gy.length;i++) {
		ft = gy[i].split("=");
		if (ft[0] == ji) {
			return ft[1];
		}
	}
}
	
function buttonClick(btn){
	//alert("buttonClick:"+btn)
	
	switch(btn){
		case "nav_studio":
			window.location = "#";
			break;
		case "nav_character":
			showPage("CharacterBuilder.swf");
			break;
		case "nav_make_cartoon":
			showPage("PBS_CartoonStudio.swf");
			break;
		case "nav_watch_cartoon":
			showPage("ServiceTester.swf");
			break;
		
	}
}

function showPage(swfname){
	displaySWF = swfname || querySt("displaySWF") || "CharacterBuilder.swf";
	
	var flashvars = {};
	var params = {};
	var attributes = {};
	
	swfobject.embedSWF(displaySWF, "flashcontent_cs", "936", "628", "9.0.0","expressInstall.swf", flashvars, params, attributes);
}


/*
 * PBS_CartoonStudio Character Saving helper file
 */


var get_movie = function(id) {
   //return $("#"+id);
	 return getFlashMovie(id);
 };

function getObjectById(objectIdStr) {
	var r = null;
 	var o = getElementById(objectIdStr);
	if (o && o.nodeName == "OBJECT") {
		if (typeof o.SetVariable != UNDEF) {
			r = o;
		} else {
			var n = o.getElementsByTagName(OBJECT)[0];
			if (n) {
				r = n;
			}
		}
	}
	return r;
}

var show_flash_save = function() {
	get_movie("flashpage").showSaveDialog();
};

function getFlashMovie(movieName) {
	var isIE = navigator.appName.indexOf("Microsoft") != -1;
 	return (isIE) ? window[movieName] : document[movieName];
}

var save_character = function() {
	if (document.cookie.indexOf('pbskids.userid') > 0) { // logged in
		show_flash_save();
	} else {
    	PKG.prmpt('?refresh=0');
    	$('body').bind('cbox_closed', function() {
			if(document.cookie.indexOf('pbskids.userid') > 0) show_flash_save();
		});
	}
};

var isLogggedIn = function(){
	return true;
}

var logged_in_flash = function() {
    get_movie("flashpage").loggedIn();
};

var not_logged_in_flash = function() {
    get_movie("flashpage").notLoggedIn();
};

var check_login = function() {
	console.log(document.cookie.indexOf('pbskids.userid'));
 	if (document.cookie.indexOf('pbskids.userid') > 0) { // logged in
    	logged_in_flash();
		console.log("logged_in_flash");
	} else {
    	not_logged_in_flash();
		console.log("not_logged_in_flash");
	}

  
/*
 * 
 If Logged in:
 flash.showSaveDialog()

 If not:
 PKG.prmpt, '?refresh=0';
 when dismissed, check if logged in:

 flash.showSaveDialog()
 else:
 do nothing

 check if logged in with:
 document.cookie.indexOf('pbskids.userid') > 0
 *
 */

};

