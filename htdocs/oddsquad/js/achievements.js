
achievements = {
	
	unlocked: [ ],
	viewed: [ ],
	VIEWED: "viewed",
	
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
	
	
	// add achievement id, execute doneFunction when completed
	// to set achievement to having been viewed set type to achievements.VIEWED, otherwise blank will unlock the achievement
	add: function(achievementId, type, doneFunction) {
		$.post("/oddsquad/php/addAchievement.php", { username:achievements.getCookie("pbskids.username"), userid:achievements.getCookie("pbskids.userid"), achievement:achievementId, type:type } ).done(doneFunction);
	},
	
	// gets all achievements, execute doneFunction when completed passing along array of achievement ids
	// achievements that are unlocked are stored achievements.unlocked, viewed achievements are stored achievements.viewed
	// achievement ids are also stored in achievements
	get: function(doneFunction) {
		// keep trying until pbs object is loaded
		if (typeof org === 'undefined' || typeof org.pbskids === 'undefined' || typeof org.pbskids.login === 'undefined') { 
		//if (typeof PBS === 'undefined' || typeof PBS.KIDS === 'undefined' || typeof PBS.KIDS.identity === 'undefined') { 
			setTimeout(function() { achievements.get(doneFunction); }, 500);
			return;
		}
		$.post("/oddsquad/php/getAchievements.php", { username:achievements.getCookie("pbskids.username"), userid:achievements.getCookie("pbskids.userid") } ).done(function(data) {
				var a = data.split("|");
				achievements.unlocked = a[0].split("/");
				achievements.viewed = a[1].split("/");
				doneFunction(achievements.unlocked, achievements.viewed);
			});
	},
	
	// clear all achievements, execute doneFunction when completed
	clear: function(doneFunction) {
		$.post("/oddsquad/php/clearAchievement.php", { username:achievements.getCookie("pbskids.username"), userid:achievements.getCookie("pbskids.userid") } ).done(doneFunction);
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
	}	
	
};

achievements.init();

