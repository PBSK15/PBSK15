
locker = {

	VIEWED: "viewed",
	
	unlocked: [ ],
	viewed:[ ],
	
	init: function() {
		
	},
	
	// check if user is logged in (only works after PBS module is loaded)
	loggedIn: function() {
		if (typeof org === 'undefined' || typeof org.pbskids === 'undefined' || typeof org.pbskids.login === 'undefined') { 
		//if (typeof PBS === 'undefined' || typeof PBS.KIDS === 'undefined' || typeof PBS.KIDS.identity === 'undefined' || locker.getCookie("pbskids.username") === "") {
			 return false; }
		else { return true; }
	},
	
	// returns current username
	username: function() {
		return locker.getCookie("pbskids.username");
	},
	
	// add locker item, execute doneFunction when completed
	add: function(lockerId, type, doneFunction) {
		$.post("/oddsquad/php/addLocker.php", { username:locker.getCookie("pbskids.username"), userid:locker.getCookie("pbskids.userid"), locker:lockerId, type:type } ).done(doneFunction);
	},
	
	// gets all locker items, execute doneFunction when completed passing along array of locker ids
	// locker ids are also stored in locker.locker
	get: function(doneFunction) {
		// keep trying until pbs object is loaded
		if (typeof PBS === 'undefined' || typeof PBS.KIDS === 'undefined' || typeof PBS.KIDS.identity === 'undefined') { 
			setTimeout(function() { locker.get(doneFunction); }, 500);
			return;
		}
		
		$.post("/oddsquad/php/getLocker.php", { username:locker.getCookie("pbskids.username"), userid:locker.getCookie("pbskids.userid") } ).done(function(data) {
			var a = data.split("|");
			locker.unlocked = a[0].split("/");
			locker.viewed = a[1].split("/");
			doneFunction(locker.unlocked, locker.viewed);
			});
	},
	
	// clear all locker items, execute doneFunction when completed
	clear: function(doneFunction) {
		$.post("/oddsquad/php/clearLocker.php", { username:locker.getCookie("pbskids.username"), userid:locker.getCookie("pbskids.userid") } ).done(doneFunction);
	},
	
	
	// adds a key to the website, at coordinates x/y and which will open lockerId. 
	// This method also returns image element that was added to site, in case you want to do anything else with it
	addKeyRandom: function(x, y, lockerId) {
		var e = document.createElement("img");
		e.setAttribute("id", "lockerKey");
		e.setAttribute("lockerid", lockerId);
		e.setAttribute("src", "img/key.png");
		e.setAttribute("title", "opens locker " + lockerId);
		e.style.position = "absolute";
		e.style.cursor = "pointer";
		e.style.left = x + "px";
		e.style.top = y + "px";
		e.onclick = locker.keyClick;
		document.body.appendChild(e);
		return e;
	},
	
	
	// adds a key to a random element on the screen
	addKeyToElement: function(elementId, lockerId) {
		var e = document.createElement("img");
		e.setAttribute("id", "lockerKey");
		e.setAttribute("lockerid", lockerId);
		e.setAttribute("src", "img/key.png");
		e.setAttribute("title", "opens locker " + lockerId);
		e.style.cursor = "pointer";
		e.onclick = locker.keyClick;
		document.getElementById(elementId).appendChild(e);
		return e;
	},
	
	// user picks up a key
	keyClick: function(event) {
		var e = event.target;
		$(e).css("display", "none");
		locker.add(e.getAttribute("lockerid"), "");
	},
	
	
	// read a cookie
	getCookie: function(c_name) {
		var c_start;
		var c_end;		
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf(c_name + "=");
			if (c_start !== -1) {
				c_start = c_start + c_name.length + 1;
				c_end = document.cookie.indexOf(";", c_start);
				if (c_end === -1) { c_end = document.cookie.length; }
				return unescape(document.cookie.substring(c_start, c_end));
			}
		}
		return "";
	},
	
	// create a cookie (useful for debugging)
	createCookie: function(name, value, days) {
		var expires;
		if (days) {
			var date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		}
		else {
	        expires = "";
	    }
		document.cookie = name + "=" + value + expires + "; path=/";
	},
	
};

locker.init();
