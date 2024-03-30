
var agent = {
	
	name: "", // agent name
	code: "", // agent code
	avatar: "", // agent avatar
	background: 0, // background #
	
	// keep checking if pbs module has loaded, then call callback function if user has logged in
	// passes true as parameter if user is logged in, otherwise passes false
	loggedIn: function(doneFunction) {
		if (typeof org === 'undefined' || typeof org.pbskids === 'undefined' || typeof org.pbskids.login === 'undefined') { 
			setTimeout(function() { agent.loggedIn(doneFunction); }, 500);
		}
		else {
			var a =  org.pbskids.login.user === 'undefined' ? 0 : 1;
			//var a = PBS.KIDS.identity.getCurrentUsers();
			var i;
			var loggedIn = false;
			for (i = 0; i < a.length; i++) {
				if (org.pbskids.login.loggedin) { loggedIn = true; }
			}
			doneFunction(loggedIn);
		}
	},
	
	// returns current username
	username: function() {
		return agent.getCookie("pbskids.username");
	},
	
	// get agent info, pass it to done function when complete
	getInfo: function(doneFunction) {
		$.post("/oddsquad/php/getAgent.php", { username:agent.getCookie("pbskids.username"), userid:agent.getCookie("pbskids.userid") } ).done(
			function (data) {
				var a = data.split("~~");
				agent.name = a[0];
				agent.code = a[1];
				agent.avatar = a[2];
				agent.id = agent.getCookie("pbskids.userid") || '';
				agent.background = parseInt(a[3]);
				if (doneFunction) { doneFunction(agent); }
			}
		);
	},
	
	// set the background # for this user
	setBackground: function(background, doneFunction) {
		$.post("/oddsquad/php/setBackground.php", { username:agent.getCookie("pbskids.username"), userid:agent.getCookie("pbskids.userid"), background:background } ).done(
				function (data) {
					if (doneFunction) { doneFunction(this); }
				}
			);
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
	