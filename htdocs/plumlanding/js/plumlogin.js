var plumlogin={};
var plum_u=plum_u || {};
var GA_obj;

(function($,plumlogin) {
	var tpass;
	var username;
	
	var loginnav;
	var csrftoken = get_cook('csrftoken');

	
function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({

    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

	var savePoints=function(gamename,score,points,notfinal) {
		// returns a new token
/*		$.getJSON('/plumlanding/backend/score/savepoints/?game=' + gamename + "&p=" + amt+ "&t=" + tpass,function(data,status,xhr){	
			var expires = "";
			tpass=data.token;
			document.cookie = "plumscore="+token+expires+"; path=/";
		});
*/		

			var expires='';
			document.cookie="pbskids.plum_score="+score +expires + "; path=/";

//			$.post( '/plumlanding/backend/user/award_points/',{"points":amt,"g":gamename},function(data) {
			var sendinfo={"g":gamename,"points":score};
			var amt=score;

			if(points!==undefined) {
				document.cookie="pbskids.plum_points="+points +expires + "; path=/";
				amt=points;
			} else {
				document.cookie="pbskids.plum_points="+score +expires + "; path=/";
			}
			
			var mid=(notfinal)?1:0;

			$.post( '/plumlanding/backend/game/score/',{"g":gamename,"points":score,"m":mid},function(data) {
				if(data['status']) {
					changepoints(amt);
					$(document).trigger({type:"org_wgbh_plumlogin_savedpoints",payload:data});
				} else {
					$(document).trigger({type:"org_wgbh_plumlogin_savedpoints",payload:{"status":false,"reason":data['reason']}});
				}
			});
/*
		$.post( '/plumlanding/backend/game/score/',{"g":gamename},function(data) {
			var d=$.parseJSON(data);
//			var expires = "";
//			tpass=d.token;
//			document.cookie = "plumscore="+tpass+expires+"; path=/";
			
			
			if(data['status']) {
// successful save
				changepoints(amt);
				logGameScore(gamename,amt);
				document.cookie="pbskids.plum_score=0" +expires + "; path=/";
			}
			
			$(document).trigger({type:"org_wgbh_plumlogin_savedpoints",payload:{"status":data['status']}});
		});
		*/
	}

	var startGame=function(gamename) {		
			$.post( '/plumlanding/backend/game/prep/',{"g":gamename},function(data){
			
			if(data['status']) {
			//	var d=$.parseJSON(data['gamestatus']);
				var expires = "";
				tpass=data['gamestatus'].scoretoken;
				data['status']=true;
				document.cookie = "pbskids.plum_token="+tpass+expires+"; path=/";
				$(document).trigger({type:"org_wgbh_plumlogin_gamestarted",payload:data})
			} else {
				// something went wrong, but send the event
				$(document).trigger({type:"org_wgbh_plumlogin_gamestarted",payload:{'status':false,'reason':data['reason']}})
			}
			
	//		$(document).trigger("org_wgbh_plumlogin_gamestarted",plum_u);

		});
	}
	

	
	
	var getUser=function() {
		if(typeof plum_u!=='undefined') {
			username=plum_u[0];
			return plum_u[0];
		}
		return null;
	}
	
	
	var changepoints=function(amt) {
			var p=plum_u[1];
			var n=p+amt;
			plum_u[1]=n;
			$('.upts').html(n);
	}
	
	var launchLogin=function() {
		logIn();
	}
	
	var cookieProfile=function() {
		var data = ["You",0,"bilby","Desert Mission"];
		if(getLocal('PBS_Plum_Profile')) {
			data = JSON.parse(getLocal('PBS_Plum_Profile'));
		}
		plum_u=[data[0],data[1],data[2],data[3]];
		avimage=document.getElementById("avnav");	
		if(avimage) {
			avimage.src="/plumlanding/i/avatars/bubl_icon_"+plum_u[2]+".png";
		}
	}

	var changeCookieProfile=function(animal,world) {
		var data = ["You",0,animal,world];
		data = saveLocal('PBS_Plum_Profile',JSON.stringify(data));
	}
	
	var setProfile=function() {
	
		// getting username from 
			$.get( '/plumlanding/backend/user/json/',function(data){
			
	//		plum_u=['fake',29,'gartersnake','Jungle Mission'];
			plum_u=[data.name,data.current_points,data.profile_pic,data.profile_pic_world];
			
			loginnav=document.getElementById("loginnav");
			
			loginnav.innerHTML='<a id="mystuff" href="/plumlanding/mystuff/index.html" class="gnav-button">\n<div class="navpoints">\n<div>Points:</div>\n<div id="navpts" class="upts">'+plum_u[1]+'</div>\n</div>\n<div id="myicon" class="nav-icon bubble3">\n<img id="avnav" src="/plumlanding/i/avatars/bubl_icon_'+plum_u[2]+'.png" alt="'+plum_u[0]+'" >\n</div>\n<div class="bubble-border">\n<img src="/plumlanding/i/common/bubble3_border.svg" alt="">\n</div>\n<span class="gnav-text">My Stuff</span></a>';
			
			
			$(document).trigger({type:"org_wgbh_plumlogin_loginchange",payload:{"u":plum_u}});
			
			});
		/*	
			plum_u=['fake',29,'gartersnake','Jungle Mission'];
			loginnav.innerHTML='<a id="mystuff" href="/plumlanding/mystuff/index.html" class="gnav-button">\n<div class="navpoints">\n<div>Points:</div>\n<div id="navpts" class="upts">'+plum_u[1]+'</div>\n</div>\n<div id="myicon" class="nav-icon bubble3">\n<img id="avnav" src="/plumlanding/i/avatars/bubl_icon_'+plum_u[2]+'.png" alt="'+plum_u[0]+'" >\n</div>\n<div class="bubble-border">\n<img src="/plumlanding/i/common/bubble3_border.svg" alt="">\n</div>\n<span class="gnav-text">My Stuff</span></a>';
		*/	

		
	}
	
	var loggedOut=function() {
	// just reload the page
		location.reload(false);
		return;
		

	// change "My Stuff" to plain
		loginnav=document.getElementById("loginnav");
	
		loginnav.innerHTML='<a id="mystuff" class="gnav-button" data-action="pbskids-login-sign-in"><div id="myicon" class="nav-icon bubble3">\n<img src="/plumlanding/i/common/mystuff_icon.svg" alt="My Stuff" ></div>\n<div class="bubble-border">\n		<img src="/plumlanding/i/common/bubble3_border.svg" alt="">\n		</div>\n		<span class="gnav-text">Sign In</span></a>\n		<script type="text/javascript">\n		// listen for login\n		\n		\n		\n		</script>';
		
		$("[data-action='pbskids-login-sign-in']").click(function(e){ logIn(); });
		plum_u=null;
		$(document).trigger({type:"org_wgbh_plumlogin_loginchange",payload:{"u":null}});
		
	}

	var logGameLevel=function(gamename,level) {
		// GA call to log game level. Would this happen automatically with an added anchor?
		// PBS Video events sometimes use the video episode as Action, sometimes as Label.
		
		/* 
		
		 in GA, you can show Category, Action, or Label as 1st-order dimension; shows totals for each.
		 add one of the others for secondary dimension. 
		 But VALUE is only aggregated - you get TOTAL and AVERAGE, but not a breakdown of each (so not very useful alone for levels; possibly OK for score)
		
		 So what do you want to know?
		 
		*/
		
		// GA Events: Category, Action, Label, Value = "Plum Game Level",  "Level_" + (p_zeropad(level)),gamename, level

		GA_obj&&GA_obj.trackEvent("Plum Game Level","Level_" + p_zeropad(level,2),gamename,level);
	}
	
	var logGameScore=function(gamename,score) {
		// GA call to event to save score; call this when saving user's score.
		// "Plum Game Score", "Score", gamename, score 
		
		GA_obj&&GA_obj.trackEvent("Plum Game Score","Score",gamename,score);
	}
	
	
	var logGameAction=function(gamename,action,value) {
		// GA call to event to save arbitrary action for a game
		// "Plum Game Actions", action, gamename, value (opt)
		
		// set by PBS as GA_obj
		
		GA_obj&&GA_obj.trackEvent("Plum Game Actions",action,gamename,value);
	}
	
	
	var saveGameInfo=function(gamename,info) {
	
		// save arbitrary info for the current user and the given game in the back end
		$.post( '/plumlanding/backend/game/status/',{"g":gamename,"status":info},function(data){
			if(data['status']) {
				$(document).trigger({type:"org_wgbh_plumlogin_savedstatus",payload:data});
			} else {
				// something went wrong, but send the event
				$(document).trigger({type:"org_wgbh_plumlogin_savedstatus",payload:{'status':false,"reason":data['reason']}});
			}
			});
	}
	
	
	var getGameInfo=function(gamename) {
		startGame(); // really no different; may as well get all game info at once
	}
	
	var loggedIn=function() {
		if(typeof plum_u!=='undefined' && plum_u!=null) {
		//	alert("plum_u");
			if(plum_u[0]) {
//				alert("user is logged in " + plum_u[0]);
				//username=plum_u[0];
			return true;
			}
			return false;
		}
		return false;
	}

	var logIn=function() {
		// launch a login 
		
		org.pbskids.login.displayLogin();
		
	}
	
	
	
	var getBrowserInfo=function() {
	
	var dType;
	var os;
	var osversion;
	var browser;
	var bversion;
	
	if( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)) ) {
			//redirect of iOS <= 5.0
			if (/OS [1-4](.*) like Mac OS X/i.test(navigator.userAgent)) {};//window.location.href = redirectURL;

			dType = 'iOS';

			if(navigator.userAgent.search("Safari") != -1) browser = 'safari';
			if(navigator.userAgent.search("Chrome") != -1) browser = 'chrome';
			else browser = 'other';
		}
		//android?
		else if( (navigator.userAgent.search("Android") != -1) ){
			dType = 'android';

			var androidversion = parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android")+8));
			if (androidversion < 4.0){}; //window.location.href = redirectURL;

			if(navigator.userAgent.search("Chrome") != -1) browser = 'chrome';
			else browser = 'other';
		}
		//else, a desktop browser, with version-based redirect to url specified in redirectURL
		else{

			if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
				bversion=new Number(RegExp.$1) // capture x.x portion and store as a number
				if(bversion < 24){}; //window.location.href = redirectURL;

				dType = 'desktop';
				browser = 'chrome';
			}
			else if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
				bversion=new Number(RegExp.$1) // capture x.x portion and store as a number
				//minimum safari support: 5.0 in Snow Leopard
				if(bversion < 533.21){};// window.location.href = redirectURL;

				dType = 'desktop';
				browser = 'safari';
			}
			else if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)){
				bversion=new Number(RegExp.$1) // capture x.x portion and store as a number
				if(bversion < 18){}; //window.location.href = redirectURL;

				dType = 'desktop';
				browser = 'firefox';
			}

			else if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
				//retaining this var to know which IE version (for sound loading: IE9 needs Flash)
				bversion=new Number(RegExp.$1) // capture x.x portion and store as a number
				if(bversion < 9.0){}; //window.location.href = redirectURL;

				dType='desktop';
				browser = 'ie';
			} else if (/Trident/.test(navigator.userAgent)) {
				dType='desktop';
				browser = 'ie';
				bversion=11;
			}
			else{
				//alert('unknown desktop browser');
				dType = 'desktop';
				browser = 'other';
			}
		}
		trace("navigator.userAgent: " + navigator.userAgent,true);
		return {'dType':dType,'browser':browser,'bversion':bversion};	
	}
	
	
	
	plumlogin.launchLogin=launchLogin;
	
	plumlogin.startGame=startGame;
	plumlogin.savePoints=savePoints;
	plumlogin.saveGameInfo=saveGameInfo;
	plumlogin.getGameInfo=getGameInfo;
	
	plumlogin.checkLogin=loggedIn;
	
	plumlogin.setProfile=setProfile;
	plumlogin.loggedOut=loggedOut;
	
	plumlogin.getBrowserInfo=getBrowserInfo;
	
	plumlogin.logGameLevel=logGameLevel;
	plumlogin.logGameAction=logGameAction;
	plumlogin.logGameScore=logGameScore;

	plumlogin.changeCookieProfile=changeCookieProfile;
	plumlogin.cookieProfile=cookieProfile;
	
	$(document).on("org_pbskids_login_LoginEvent_LoggedIn", setProfile);
	$(document).on("org_pbskids_login_LoginEvent_LoggedOut", loggedOut);
//	$(document).on("org_pbskids_login_LoginEvent_LoginClosed", function() {alert("closed login?");});
	
	
	
	var initPlumload=function(gamediv) {
	
	if(!gamediv) {
		gamediv=document.getElementById('game'); // by default
	}
	var playimage,playb,loginb,load,$lbar;
	
	var loadme=function() {
	// LOADING/PLAY BUTTON
	
	// assume that gamediv is the div containing the game
		load=document.createElement('div');
		load.id='loading';
		load.innerHTML='<div id="spinner"><div class="text"><div id="bar">&nbsp;</div><span class="words">Loading</span></div></div>';
		gamediv.appendChild(load);

		playb=document.createElement("A");
		playimage=new Image();
		playb.id='playbtn';
		//playimage.src="/plumlanding/i/common/blank.png";
		playimage.src="../../i/common/playbutton.png";
		$(playb).hide();
		/*playb.src='i/loading.png';*/
		playb.appendChild(playimage);
		gamediv.appendChild(playb);
		$(playb).css('right','40%');
		$(playb).css('bottom','0');
		$lbar=$("#bar");

		loginb=document.createElement("A");
		loginb.id='loginbtn';
		loginb.innerHTML="Login";
		$(loginb).addClass('btn');
		$(loginb).addClass('btn');
		$(loginb).on('click',plumlogin.launchLogin);
		$(loginb).css('right','30%');
		$(loginb).css('bottom','20px');
		gamediv.appendChild(loginb);
		$(loginb).hide();
		
		$(document).on("org_wgbh_plumlogin_loginchange",function(ev) {
		if(ev.payload.u) {
			$(loginb).hide();}else{$(loginb).show();}
		})
		
	}
	
	var finishedLoading=function(skip) {
		if(!skip) {
			showplaybutton();
		}
		stoploading();
	}
	
	var showplaybutton=function() {
			playimage.src="../../i/common/playbutton.png";
			$(playb).show();
			$(playb).on("click",startplay);
			if(plumlogin.checkLogin()) {
	// user is logged in, so hide login
			$(loginb).hide();
			} else {
			$(loginb).show();
			}
	
	}


	var stoploading=function() {
		$(load).hide();
	}
	
	var startplay=function() {
		$(window).trigger('Plumload.CLICKPLAY');
		$(loginb).hide();
		$(playb).hide();
	}
	
	var updateLoadbar=function(loadpercent) {
		$(load).show();
		loadpercent=parseInt(loadpercent*100);
		$lbar.css('width',loadpercent+'%');
	}
	
	Plumload.finishedLoading=finishedLoading;
	Plumload.updateLoadbar=updateLoadbar;
	
	loadme();
}
	plumlogin.initPlumload=initPlumload;
	
})(jQuery,plumlogin);


// some utility functions:

function get_qs(){
    var url = location.search;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
        qs[i] = qs[i].split('=');
        result[qs[i][0]] = decodeURIComponent(qs[i][1]);
    }
    return result;
}


function get_cook(cname) {
	var cval='';
	var cn=cname.length+1;
	var cmatch=cname + '=';
	if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            if (cookie.substring(0, cn) == (cmatch)) {
                cval = decodeURIComponent(cookie.substring(cn));
                break;
            }
        }
    }
    return cval;
}

function saveLocal(key,val) {
	localStorage[key] = val;
}

function getLocal(key) {
	return localStorage[key];
}

function trace(what,forsure) {
	//forsure=true;
	if(console && forsure) {
		console.log(what); // in case I copy and paste something from flash...
	}
}


function p_zeropad(number,digits) {
	if(!digits) digits=2;
	var string;
	if(typeof number=="string") {
		string=number;
	} else {
		string=parseInt(number).toString();
	}
	var diff=digits-string.length;
	if(diff>0) {
		var prefix='';
		for(var i=0;i<diff;i++) {
			prefix+="0";
		}
		return prefix+string;
	} else {
		return string;
	}
}


	var nosvg=!document.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#Image", "1.1");

//	var nosvg=true;

	var Plumload={};
	



	$(document).ready(function(){
		if(nosvg) {
		
			$('img').each(function(){
			var src=$(this).attr('src');
			if(src.match('.svg')) {
				var ns=src.replace('svg','png');
				$(this).attr('src',ns);
			}
		});
		}
		
		$('.pbsbridge').each(function() {
			$(this).on('click',function(ev) {ev.preventDefault();
				var blink=$(this).attr('href');
				var btitle=$(this).attr('title');
			bridge(blink, btitle)})
			});
			
			
			plumlogin.cookieProfile();
		//trace("obj? " + GA_obj + " " + GA_obj.trackEvent,true);
	});

