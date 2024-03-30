$(document).bind("org_pbskids_login_LoginEvent_LoggedIn", function () {
	if(!$('[data-overlay="createagent"]').exists()){
	    location.reload();
	}
});

$(document).bind("org_pbskids_login_LoginEvent_LoggedOut", function () {
    location.reload();
});

(function($) {

	//initiate responsive font sizing
	$.fn.flowtype = function(options) {
	
	  var settings = $.extend({
		 maximum   : 9999,
		 minimum   : 1,
		 maxFont   : 9999,
		 minFont   : 1,
		 fontRatio : 30
	  }, options),
	
	  changes = function(el) {
		 var $el = $(el),
			elw = $el.width(),
			width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
			fontBase = width / settings.fontRatio,
			fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
		 $el.css('font-size', fontSize + 'px');
	  };
	
	  return this.each(function() {
	  // Context for resize callback
		 var that = this;
	  // Make changes upon resize
		 $(window).resize(function(){changes(that);});
	  // Set changes on load
		 changes(this);
	  });
	};
	
})(jQuery);

//global variables
var startPage = 0,
	pageScroll,
	position,
	scrollPages = [],
	pageWidth = 0,
	scrollPagesQty,
	scrollEase = 'cubic-bezier(0.1, 0.57, 0.1, 1)',
	featuredAgents = [],
	userLogin = [],
	site = [],
	pbsBarLoaded = false,
	agentInfoLoaded = false,
	awardsCreated = false,
	awardsLoaded = false,
	agentsCreated = false,
	doorsCreated = false,
	doorsLoaded = false,
	videoJSLoaded = false,
	playerLoaded = false;

var agenttype


$(document).on ({
	"PBS_BAR_LOADED" : function ( event ) {
		
		//opens loading page once pbs bar has loaded
		if($('html.loaded').exists() == false){
		
			$('html').addClass('loaded');
			
			setTimeout(function () {
				$('html').removeClass('delayload');
			}, 500);
			setTimeout(function () {
				$('[data-overlay="loading"]').remove();
			}, 1000);	
		}
		
		var o = agent.getInfo(gotInfo);
		
		function gotInfo(data) {
			
			userLogin.push({
				name: org.pbskids.login.user ? data.name : false,
				code: org.pbskids.login.user ? data.code : false,
				background: org.pbskids.login.user ? data.background : 1,
				avatar: org.pbskids.login.user ? data.avatar : '',
				username: org.pbskids.login.user ? org.pbskids.login.user.name : false,
				userid: org.pbskids.login.user ? org.pbskids.login.user.id : false,
				isloggedin: org.pbskids.login.user ? org.pbskids.login.loggedin : false
			});
	/*
			userLogin.push({
				name: data.name,
				code: data.code,
				background: data.background,
				avatar: data.avatar,
				username: org.pbskids.login.user ? org.pbskids.login.user.name : '',
				userid: org.pbskids.login.user ? org.pbskids.login.user.id : '',
				isloggedin: org.pbskids.login.user ? org.pbskids.login.loggedin : ''	//,
				//accesstoken: PBS.KIDS.identity.getCurrentUsers()[0].accesstoken,
				//anonymousGuid: PBS.KIDS.identity.getCurrentUsers()[0].anonymousGuid
			});
			userLogin.push({
				name: data.name,
				code: data.code,
				background: data.background,
				avatar: data.avatar,
				username: PBS.KIDS.identity.getCurrentUsers()[0].username,
				userid: PBS.KIDS.identity.getCurrentUsers()[0].userid,
				accesstoken: PBS.KIDS.identity.getCurrentUsers()[0].accesstoken,
				isloggedin: PBS.KIDS.identity.getCurrentUsers()[0].isloggedin,
				anonymousGuid: PBS.KIDS.identity.getCurrentUsers()[0].anonymousGuid
			});
			*/
			
			agentInfoLoaded = true;
			$(document).trigger( "AGENT_INFO_LOADED" );
			
			if(userLogin[0].code == '' || userLogin[0].agent == '') {
				$('body').attr('data-agent-login', 'false');

			} else {
				$('body').attr('data-agent-login', 'true');
				//set agent num in login bar
				$('em.agentNum').html(userLogin[0].code);
				
			};
			
			if(userLogin[0].background !== ''){
				$('html').removeClass(function (index, css) {
					return (css.match (/(^|\s)bgImg-\S+/g) || []).join(' ');
				});
				
				$('html').addClass('bgImg-' + userLogin[0].background);
			};
			
		}
		
		achievements.get(achievementsLoaded);
		
		function achievementsLoaded(unlocked, viewed) {
			awardsLoaded = true;
			$ ( document ).trigger ( "AWARDS_LOADED" );
		}
		
		locker.get(initLockers);
		function initLockers(unlocked, viewed) {
			doorsLoaded = true;
			$ ( document ).trigger ( "DOORS_LOADED" );
		}
		
		if ( pbsBarLoaded && videoJSLoaded ) {
			//initVideoPlayer();
		}
		
		

	}, 
	"VIDEOJS_LOADED" : function ( event ) {
		if ( pbsBarLoaded && videoJSLoaded ) {
			initVideoPlayer();
		}
	}, 
	"AWARDS_CREATED" : function ( event ) {
		if ( pbsBarLoaded && awardsCreated && awardsLoaded ) {
			updateAwards();
		}
	},
	"AGENT_INFO_LOADED" : function (event) {
		if ( $('.agent-dashboard').exists() && pbsBarLoaded && awardsLoaded && agentInfoLoaded ) {
			updateAgentSections();
		}
	},
	"AWARDS_LOADED" : function ( event ) {
		if ( pbsBarLoaded && awardsCreated && awardsLoaded ) {
			updateAwards();		
		}
		if ( $('.agent-dashboard').exists() && pbsBarLoaded && awardsLoaded && agentInfoLoaded ) {
			updateAgentSections();
		}
	}, 
	"AGENTS_CREATED" : function ( event ) {
		//infoBox('dt', 'Agents - Total(' + site.agents.length + ')');
	}, 
	"DOORS_CREATED" : function ( event ) {
		if ( pbsBarLoaded && doorsCreated && doorsLoaded ) {
			updateDoors();
		}
	}, 
	"DOORS_LOADED" : function ( event ) {
		if ( pbsBarLoaded && doorsCreated && doorsLoaded ) {
			updateDoors();		
		}
		if ( $('.agent-dashboard').exists() && pbsBarLoaded && doorsLoaded && awardsLoaded ) {
			updateAgentSections();
		}
	},
	'OVERLAY_CREATED' : function(event, type){
		$('.ov-wrapper[data-type="' + type + '"]').addClass('init-overlay');
		$('.pg-wrapper').addClass('hide');
	},
	'OVERLAY_REMOVED' : function(event, type){
		$('.pg-wrapper').removeClass('hide');
		if(type !== '') {
			$('.ov-wrapper[data-type="' + type + '"]').removeClass('init-overlay');
			
			setTimeout(function () {
				$('.ov-wrapper[data-type="' + type + '"]').remove();
				//refresh page to show new user accnt if pbs accnt exists now
				if(type == 'createagent' && newAgent.getCookie("pbskids.username") !== "") {
					location.reload();
				};
				
			}, 500);
			
		} else {
			$('.ov-wrapper').removeClass('init-overlay');
			
			$('.ov-wrapper').remove();
			
		}
	}
});

function infoBox(type, info) {
	$('.info-box dl').append('<' + type + '>' + info + '</' + type + '>');
}	

$(document).ready(function () {
	
	
	$('.mobileNav a').on('click', function() {
		$('body').toggleClass('showNav');
		
		
		setTimeout(function () {
			$('html, body').scrollTop();
		}, 5000);
	});
	
	
	
	$('.info-box .toggle').on('click', function() {
		$(this).parent().toggleClass('collapse');
	});
	
	// build page content and clean up urls
	if($('[data-pageGenratr="true"]').exists() == true) {
		genratrGrab('body');
	} else {		
		//buildContent();
	};
	
	
	agent.loggedIn(function() {
		
		//is user logged in?
		$('body').attr('data-pbs-login', loggedIn());
		
		if($('body[data-pbs-login="false"]').exists() == true && $('body.game-page').exists()) {
			//console.log('USER IS NOT LOGGED INTO PBS');
			
			//PBS.KIDS.identity.prompt();
		} else if ($('body[data-pbs-login="true"]').exists() == true) {
			//console.log('USER IS LOGGED INTO PBS TIME TO CHECK AGENT INFO');
		};
		
		pbsBarLoaded = true;
		$(document).trigger( "PBS_BAR_LOADED" );
	});
	
	setTimeout(function () {
		
		$('body').flowtype({
			minimum   : 100,
			maximum   : 1500,
			fontRatio : 40
		});
		
	}, 50);
	
	setTimeout(function () {
		prefix();
		getWinSize();
		
		//lte9 white cover to prevent partial load while .htaccess runs
		if($('.lte9').exists() == true ) {
			setTimeout(function () {
				$('.iecover').remove();
			}, 500);
		} else {
			//clean up html if not needed
			$('.iecover').remove();
		};
		
		
		
		//add active class to page to init load animations
		if($('[data-pagegenratr="true"]').exists() !== true) {
			
			setTimeout(function () {
				$('.pg-agents').addClass('active');
			}, 500);
		}
		
		if($('.backgroudSelect').exists()) {
		
			backgroundScroll = new IScroll('.backgroudSelect', {
				snap: true,
				momentum: false,
				scrollX: true,
				scrollY: false,
				probeType: 3,
				tap: true	
			});
			
			backgroundScroll.on('scrollEnd', function() {
				$('.backgroudSelect').removeClass('scrollStart scrollEnd-desktop scrollEnd-mobile');
				$('footer').removeClass('scrollStart scrollEnd-desktop scrollEnd-mobile');
				//console.log(this.currentPage.pageX);
				if(this.currentPage.pageX == 0) {
					$('.backgroudSelect').addClass('scrollStart');
					$('footer').addClass('scrollStart');
					
				} else if(this.currentPage.pageX == 4) {
					$('.backgroudSelect').addClass('scrollEnd-desktop');
					$('footer').addClass('scrollEnd-desktop');
					
				} else if(this.currentPage.pageX == 9) {
					$('.backgroudSelect').addClass('scrollEnd-mobile');
					$('footer').addClass('scrollEnd-mobile');
					
				}
				
			});
			
			$('footer .btn-close, .toggleBgSelect a, .clickShield').on('click', function(event) {
				event.preventDefault();
				$('footer').toggleClass('collapse');
			});
			$('.bgSelectWrapper li').on('tap', function() {
				$('.bgSelectWrapper li').removeClass('active');
				
				var bgImg = $(this).attr('data-bgnum');
				
				$('html').removeClass(function (index, css) {
					return (css.match (/(^|\s)bgImg-\S+/g) || []).join(' ');
				});
				
				$(this).addClass('active');
				$('html').addClass('bgImg-' + bgImg);
				agent.setBackground(bgImg);
				
			});
			
		}
		

	}, 0);
	

	
	
	if($('[data-pageDepth="root"]').exists() == true) {
		
		// <= ie9 html5 poly fill refresh & removal of /#/
		var url = window.location.href;
		var hashExist = url.search(new RegExp('#/', 'i'));
		
		if(hashExist >= 0) {
			
			//need to relook at...
			url = url.replace('#/', '');
			url = url.replace('index.html', '');
			window.location.replace(url);
		}
		
		setTimeout(function () {
			//setStageSize();
			//getPages(scrollPages);
			getPages();
		}, 0);
		
		setTimeout(function () {
				//init main page carousel
				pageScroll = new IScroll('.pg-wrapper', {
					snap: true,
					momentum: false,
					eventPassthrough: true,
					scrollX: true,
					scrollY: false,
					disableMouse: true,
					disablePointer: true,
					probeType: 3
					
				});
				if(params !== undefined) {
					//console.log('PARAMS DETECTED NOW FIRING SET URL FUNC');
					genratrSetURL(params[1].dir, '', true)
				};
				
				pageScroll.on('scrollStart', function() {
					$('html').addClass('grabbing');
					$('.scrollNav, .pageNav').addClass('disabled');
					
					setStartPage(this.currentPage.pageX);
					
					getScrollingStatus(this.currentPage.pageX);
					$('html').removeClass('scroll-done');
				});
				pageScroll.on('scrollEnd', function() {
					$('html').removeClass('grabbing');
					getScrollingStatus(this.currentPage.pageX, this.x);
					
					$('html').addClass('scroll-done');
					$('.scrollNav, .pageNav').removeClass('disabled');
				});
				pageScroll.on('scroll', function() {
					getScrollingStatus(this.currentPage.pageX, this.x);
				});
				
				setStageStatus(0);
					
				
				//set start button size and init
				$('.btn-animate').each( function() {
					/*
					$(this).width($(this).parent().width());
					$(this).height($(this).parent().height());
					*/
				});
				/*
				$('.btn-animate').sprite({
					fps: 20,
					no_of_frames: 14, 
					on_last_frame: function(obj) {
						obj.spStop();
						
						setTimeout(function () {
								obj.spStart();
						}, 3000);
					}
					
				});
				*/
				
				setTimeout(function () {
					$('.notification').addClass('show');
				}, 1000);
		
				$('.avatar').sprite({fps: 20, no_of_frames: 18});

			}, 100);
	};
	
	calcBGSize();
	
    $('.btn-continue').on('click', function(event) {
		event.preventDefault();
		
		$('html').addClass('loaded');
		
		setTimeout(function () {
			$('html').removeClass('delayload');
		}, 500);
		setTimeout(function () {
			$('[data-overlay="loading"]').remove();
		}, 1000);
		
	});
	

	// Change faux url on click 
	$('[data-genratrTarget]').on('click', function(event) {
		//console.log('data-genratrtarget CLICK FUNCTION FIRED');
		event.preventDefault();
		
		if(playerLoaded == true) {
			player.pause();
		}
		
		var url		= $(this).attr('href'),
			title	= 'Odd Squad - ' + url;
		pushUrl(url, title, event)
		
	});
	

});
function loggedIn() {
	return org.pbskids.login.loggedin;
	//return PBS.KIDS.identity.getCurrentUsers()[0].isloggedin;
}
function buildContent(num) {
	var num = num || 0;
	
	//console.log('STARTING BUILD CONTENT FUNCTION');
	
	if($('.award-lst').exists() || $('.agents-lst').exists() || $('.agent-dashboard').exists()){
		$.getJSON('/oddsquad/json/awards.json', function(data) {
			//console.log('AWARDS JSON GET STARTED');
			site.awards = data.awards;
		})
		.success( function() {
			//console.log('AWARDS JSON GET SUCCESS');
			if($('.award-lst').exists()) {
				buildAwards(0);
			};
		})
		.error( function(jqXHR, textStatus, errorThrown) {
			console.log('getJSON error: ', textStatus);
			console.log('getJSON errorThrown: ', errorThrown);
			console.log('arguments: ', arguments);
			console.log("getJSON incoming Text " + jqXHR.responseText);
		})
		.complete( function() {
			//console.log('AWARDS JSON GET COMPLETE');
			if($('.award-lst').exists()) {
			};
			
		});
	};
	
	if($('.doors-lst').exists() || $('.agent-dashboard').exists()){
		$.getJSON('/oddsquad/json/hallofdoors.json', function(data) {
			site.doors = data.doors;
		})
		.success( function() {
			if($('.doors-lst').exists()) {
				buildDoors(0);
			};
		})
		.error( function(jqXHR, textStatus, errorThrown) {
			console.log('getJSON error: ', textStatus);
			console.log('getJSON errorThrown: ', errorThrown);
			console.log('arguments: ', arguments);
			console.log("getJSON incoming Text " + jqXHR.responseText);
		})
		.complete( function() {
			if($('.doors-lst').exists()) {
				doorsCreated = true;
				$(document).trigger ('DOORS_CREATED');
			};
			
		});
	};
	
	if($('.agents-lst').exists() || $('.award-lst').exists() || $('.agent-dashboard').exists()){
		$.getJSON('/oddsquad/json/agents.json', function(data) {
			site.agents = data.agents;		
		})
		.success( function() {
			buildAgents();
		})
		.error( function(jqXHR, textStatus, errorThrown) {
			console.log('getJSON error: ', textStatus);
			console.log('getJSON errorThrown: ', errorThrown);
			console.log('arguments: ', arguments);
			console.log("getJSON incoming Text " + jqXHR.responseText);
		})
		.complete( function() {
			
		});
	};
	
	if($('[data-overlay="createagent"]').exists()){
		$.getScript("/oddsquad/js/newAgent.js", function(){
		});
	};
};

/* -----------------------------------------------------------

						BUILD AGENTS

----------------------------------------------------------- */
function buildAgents() {
	var container 		= $('.agents-wrapper'),
		agentsPerPg		= 13,
		agentsTotal		= site.agents.length;
	
	
		for (i = 0; i < agentsTotal; i++) {
			
			$(container).find('ul.agents-lst.disp-desktop').append('<li class="agent-' + (i + 1) +'" data-agentid="' + i + '"><div class="sizer"></div><div class="img-wrap sized"><figure class="agent-hex agent-hex-1"><div class="sizer"></div><div class="sized"><img src="/oddsquad/img/agents/' + site.agents[i].img1 + '" /></div></figure><figure class="agent-hex agent-hex-2"><div class="sizer"></div><div class="sized"><img src="/oddsquad/img/agents/' + site.agents[i].img1 + '" /></div></figure><figure class="agent-hex agent-hex-3"><div class="sizer"></div><div class="sized"><img src="/oddsquad/img/agents/' + site.agents[i].img1 + '" /></div></figure></div></li>');
		
			$(container).find('ul.agents-bgs.disp-desktop').append('<li class="agent-' + (i + 1) +'"><div class="sizer"></div><div class="border-hex sized"><div class="bg-hex bg-hex-1"><div class="sizer"></div><div class="sized"><span></span></div></div><div class="bg-hex bg-hex-2"><div class="sizer"></div><div class="sized"><span></span></div></div><div class="bg-hex bg-hex-3"><div class="sizer"></div><div class="sized"><span></span></div></div></div></li>');
			
			
			$(container).find('ul.agents-lst.disp-mobile').append('<li class="agent-' + (i + 1) +'" data-agentid="' + i + '"><figure><img src="/oddsquad/img/agents/' + site.agents[i].img1 + '" /></figure><dl><dt class="name">' + site.agents[i].name + '</dt><dt>Department</dt><dd>' + site.agents[i].department + '</dd><dt>Partner</dt><dd>' + site.agents[i].partner + '</dd><dt>' + site.agents[i].accessory + ' size</dt><dd>' + site.agents[i].accessorysize + '</dd><dt>Hobbies</dt><dd>' + site.agents[i].hobby + '</dd><dt>Favorite Food</dt><dd>' + site.agents[i].favoritefood + '</dd><dt>Quote</dt><dd>' + site.agents[i].quote + '</dd><dt>Status</dt><dd>' + site.agents[i].status + '</dd></dl></li>');
			
		};
	
	
	
	$('a.close-agent').on('click', function() {
		$('ul.agents-lst li[data-agentid]').removeClass('hide');
		$('.agent-details').removeClass('show').css('z-index', 0);
	});
	
	$('.agents-lst.disp-desktop figure').on('click', function() {
		$('ul.agents-lst li[data-agentid]').removeClass('hide');
		
		var aid = $(this).closest('li').attr('data-agentid');		
		var detailsContainer = $('dl.agent-details');
		
		$(detailsContainer).find('figure img').attr('src', '/oddsquad/img/agents/' + site.agents[aid].img1);
		
		$(detailsContainer).find('dt.name span').html(site.agents[aid].name);
		$(detailsContainer).find('dd.dept span').html(site.agents[aid].department);
		
		if(site.agents[aid].partner !== '') {
			$(detailsContainer).find('dd.partner span').html(site.agents[aid].partner);
		} else {
			$(detailsContainer).find('dd.partner span').html('n/a');
		}
		
		$(detailsContainer).find('dt.accessory span').html(site.agents[aid].accessory + ' size:');
		$(detailsContainer).find('dd.accessory span').html(site.agents[aid].accessorysize);
		
		
		$(detailsContainer).find('dd.hobbies span').html(site.agents[aid].hobby);
		$(detailsContainer).find('dd.favoritefood span').html(site.agents[aid].favoritefood);
		$(detailsContainer).find('dd.quote span').html(site.agents[aid].quote);
		
		$(detailsContainer).find('dd.status span').html(site.agents[aid].status);
		
		$(detailsContainer).addClass('show').css('z-index', 1);
		
		
		for (i = 0; i < agentsTotal; i++) {
			$('ul.agents-lst li[data-agentid="' + i + '"]').addClass('hide');
		};
			
	});
	
	agentsCreated = true;
	$(document).trigger ('AGENTS_CREATED');

};
function updateAwards() {
	//console.log('STARTING TO UPDATE AWARDS');
	// check for UNLOCKED achievements/awards
	if ($('body').attr('data-agent-login') == 'false' || achievements.unlocked[0] == '' || achievements.unlocked[0] == null || achievements.unlocked[0] == undefined || achievements.unlocked.length == 0 || achievements.unlocked == null || achievements.unlocked == 'undefined' || achievements.unlocked == '') {
		
		//infoBox('dt', 'Achievements - total(0/' + site.awards.length + ')');
		$('.user-stats.awards-stats .accnt-rec').html(0);
		
	} else {
		
		$('.user-stats.awards-stats .accnt-rec').html(achievements.unlocked.length);
		//infoBox('dt', 'Achievements - unlocked(' + achievements.unlocked.length + '/' + site.awards.length + ')');
		
		for(var i=0; i < achievements.unlocked.length && achievements.unlocked[i] !== ''; i++) {
			//infoBox('dd', 'award unlocked: ' + (achievements.unlocked[i]) + ' - ' + site.awards[achievements.unlocked[i]-1].name);
			$('[data-award="' + achievements.unlocked[i] + '"]').attr('data-status', 'unlocked');
		}

	};
	
	// check for VIEWED achievements/awards
	if(achievements.viewed.length > 0 && achievements.viewed[0] !== '') {
		
		//infoBox('dt', 'Achievements - viewed(' + achievements.viewed.length + '/' + site.awards.length + ')');
		for(var i=0; i < achievements.viewed.length && achievements.viewed[i] !== ''; i++) {
			
			//infoBox('dd', 'award viewed: ' + (achievements.viewed[i]) + ' - ' + site.awards[achievements.viewed[i]-1].name);
			$('[data-award="' + achievements.viewed[i] + '"]').attr('data-status', 'viewed');
		}
	} else {
		//infoBox('dt', 'Achievements - viewed(0/' + site.awards.length + ')');
	}
	
	gotoScroll('awardScroll', 0, 1000);
	probeCarousel('awardScroll');
			
	$('.award-lst li').on('tap', function() {
		
		var award = $(this).index('.award-lst li') + 1;
		//console.log('AWARD POSITION INDEX: ', award);
		gotoScroll('awardScroll', award - 1, 1000);
		
		if($(this).attr('data-status') == 'unlocked') {
			
			
			//ADD ACHIEVEMENT HERE AS VIEWED!!
			achievements.add(parseInt($(this).attr('data-award')), achievements.VIEWED);
			$(this).attr('data-status', 'viewed');
			//infoBox('dd', 'award viewed: ' + award + ' - ' + site.awards[award-1].name);
		};
	});
	
}
function buildAwards(num) {
	//console.log('STARTING TO BUILD AWARDS HTML');
	var container	= $('.award-lst');
	// 15 was hardcoded due to laziness on the programmers' part. Go to the updateAgentSections() function for more information.
	$('.user-stats.awards-stats .accnt-tot').html(site.awards.length);
	//$('.user-stats.awards-stats .accnt-tot').html('15');
	
	
	for (i = 0; i < site.awards.length; i++) {
		$(container).append('<li data-award="' + site.awards[i].id + '" data-status="locked" style="width: ' + 100 / site.awards.length + '%"><div class="sizer"></div><div class="sized"><div class="award-lights"></div><div class="award-stars"></div><div class="award-box"><img src="/oddsquad/img/agents/box-body.png" /></div><div class="award-lid"><img src="/oddsquad/img/agents/box-lid.png" /></div><div class="award-award"><img src="/oddsquad/img/awards/' + site.awards[i].src + '" /></div></div><div class="award-lock"><img src="/oddsquad/img/agents/box-lock.png" /></div></li>');
	};
	
//"""'
	$(container).width(100 * site.awards.length + '%');
	
	//console.log('STARTING TO BUILD AWARDS HTML CAROUSEL');
	awardScroll = new IScroll('.award-wrapper', {
		snap: true,
		momentum: false,
		scrollX: true,
		scrollY: false,
		probeType: 3,
		tap: true	
	});
	
	//console.log('SETTING AWARDS CREATED TRIGGER');
	awardsCreated = true;
	$(document).trigger ('AWARDS_CREATED');
	
}

function updateDoors() {
	
	if($('body').attr('data-agent-login') == 'false') {
	$('.user-stats.doors-stats .accnt-rec').html(0);
	} else {
	$('.user-stats.doors-stats .accnt-rec').html(locker.unlocked.length);
	}
	
		
	// check for UNLOCKED lockers/doors	
	if (locker.unlocked.length == 0 || locker.unlocked == null || locker.unlocked == 'undefined' || locker.unlocked == '') {
		
			//infoBox('dt', 'Doors - total(0/' + site.doors.length + ')');
		
	} else {
	
		//infoBox('dt', 'Doors - unlocked(' + locker.unlocked.length + '/' + site.doors.length + ')');
		for(var i=0; i < locker.unlocked.length; i++) {
			$('[data-door="' + locker.unlocked[i] + '"]').attr('data-status', 'unlocked');
			//infoBox('dd', 'door unlocked: ' + (locker.viewed[i]) + ' - ' + site.doors[locker.unlocked[i]-1].name);
		}

	};
	
	// check for VIEWED lockers/doors
	if(locker.viewed.length > 0 && locker.viewed[0] !== '') {
		
		//infoBox('dt', 'Doors - viewed(' + locker.viewed.length + '/' + site.doors.length + ')');
		for(var i=0; i < locker.viewed.length; i++) {
			
			//infoBox('dd', 'door viewed: ' + (locker.viewed[i]) + ' - ' + site.doors[locker.viewed[i]-1].name);
			$('[data-door="' + locker.viewed[i] + '"]').attr('data-status', 'viewed');
		}
		
	} else {
		//infoBox('dt', 'Doors - viewed(0/' + site.doors.length + ')');
	}
	
	gotoScroll('doorsScroll', 0, 1000);
	probeCarousel('doorsScroll');
			
	$('.doors-lst li').on('tap', function() {
		
		var door = parseInt($(this).attr('data-door'));
		gotoScroll('doorsScroll', door - 1, 1000);
		
		if($(this).attr('data-status') == 'unlocked') {
			
			//infoBox('dd', 'door viewed: ' + door + ' - ' + site.doors[door-1].name);
			//ADD DOOR HERE AS VIEWED!!
			locker.add(door, locker.VIEWED)
			$(this).attr('data-status', 'viewed');
		};
	});
	
}
function buildDoors(num) {
	var container	= $('.doors-lst');
	
	$('.user-stats.doors-stats .accnt-tot').html(site.doors.length);
	
	
	for (i = 0; i < site.doors.length; i++) {
		$(container).append('<li data-door="' + (i + 1) + '" data-status="locked" style="width: ' + 100 / site.doors.length + '%"><div class="sizer"></div><div class="sized"><h4>' + site.doors[i].name + '</h4><div class="door-door"><img src="/oddsquad/img/doors/' + site.doors[i].src + '-OPEN.png" class="door-open" /><img src="/oddsquad/img/doors/' + site.doors[i].src + '-CLOSED.png" class="door-closed" /></div></div><div class="award-lock"><img src="/oddsquad/img/doors/lock-locked.png" class="key-locked" /><img src="/oddsquad/img/doors/lock-unlocked.png" class="key-unlocked" /></div></li>');
	};
//'
	
	$(container).width(100 * site.doors.length + '%');
	doorsScroll = new IScroll('.doors-wrapper', {
		snap: true,
		momentum: false,
		scrollX: true,
		scrollY: false,
		probeType: 3,
		tap: true	
	});
	
}
function updateAgentSections() {
	buildContent();
	//console.log('UPDATE AGENT DASHBOARD');
	
		$('.agent-profile .photo .yespbs').attr('src', '/oddsquad/img/agents/' + agent.avatar );
		$('.agent-profile .badge.yespbs em').html(agent.code);
		
		//30 awards is hard coded to by pass a loading issue
		// PBSK15: It was initially hardcoded due to a loading issue caused by the fact that the initial programmers forgot to add a buildContent call 
		// to the beginning of the agent "transition page" function, causing the agent and awards JSON data to not be retrieved, thus resulting in the site JS
		// erroring out because the site.awards property was never defined, because the data was never retrieved in the first place, because the function that does that
		// was never called in the first place. The programmers didn't notice this and just decided to go with this horrendous hack.
		//$('.user-stats.awards-stats .accnt-tot').html('15');
		$('.user-stats.awards-stats .accnt-tot').html(site.awards.length);
		$('.user-stats.doors-stats .accnt-tot').html(site.doors.length);
	
	
	if ($('body').attr('data-agent-login') == 'false' || achievements.unlocked[0] == '' || achievements.unlocked[0] == null || achievements.unlocked[0] == undefined || achievements.unlocked.length == 0 || achievements.unlocked == null || achievements.unlocked == 'undefined' || achievements.unlocked == '') {
		
		//infoBox('dt', 'Achievements - total(0/' + site.awards.length + ')');
		$('.user-stats.awards-stats .accnt-rec').html(0);
		
	}
	
	if($('body').attr('data-agent-login') == 'false' || achievements.unlocked[0] == '' || achievements.unlocked[0] == null || achievements.unlocked[0] == undefined || achievements.unlocked.length == 0 || achievements.unlocked == null || achievements.unlocked == 'undefined' || achievements.unlocked == '') {
		$('.user-stats.awards-stats .accnt-rec').html(0);
	} else {
		$('.user-stats.awards-stats .accnt-rec').html(achievements.unlocked.length);
	}
	
	if($('body').attr('data-agent-login') == 'false') {
		
		$('.user-stats.doors-stats .accnt-rec').html(0);
	} else {
		$('.user-stats.doors-stats .accnt-rec').html(locker.unlocked.length);
		
	}
	
}

function probeCarousel(name) {
	var items			= window[name].pages.length,
		itemWidth		= window[name].pages[0][0].width,
		scrollerWidth	= window[name].scrollerWidth,
		scrollerElem	= $(window[name].scroller).attr('class');
	
	/*
	console.log('carousel '+name+': ', window[name]);
	console.log('items: ', items);
	console.log('item width: ', itemWidth);
	console.log('scroller width: ', scrollerWidth);
	console.log('scroller elem: ', scrollerElem);
	*/
	
	//gives active page an active class and depth class names
	probeHighlightPage(scrollerElem, window[name].currentPage.pageX, 3)
	
	window[name].on('scrollStart', function() {
		$('[data-overlay]').removeClass('animate');
	});
	window[name].on('scrollEnd', function() {
		$('.'+scrollerElem+' > *:eq('+probeCurPage(name, itemWidth, this.x * -1, scrollerElem)+')').addClass('active');
		
		
		if($('.'+scrollerElem+' > *:eq('+probeCurPage(name, itemWidth, this.x * -1, scrollerElem)+')').attr('data-status') !== 'locked'){		
			$('[data-overlay]').addClass('animate');
		}
		//probeHighlightPage(scrollerElem, window[name].currentPage.pageX, 2)
		
	});
	window[name].on('scroll', function() {
		
		probeHighlightPage(scrollerElem, probeCurPage(name, itemWidth, this.x * -1, scrollerElem), 3);
		
			if(name == 'awardScroll') {
				
				var cleanGame = (site.awards[probeCurPage(name, itemWidth, this.x * -1, scrollerElem)].game).replace(/[^a-z0-9\s]/gi, '').replace(/[_\s]/g, '').toLowerCase();
				
				$('[data-overlay="awards"] .banner span').html(site.awards[probeCurPage(name, itemWidth, this.x * -1, scrollerElem)].name);
				$('[data-overlay="awards"] .award-desc').html(site.awards[probeCurPage(name, itemWidth, this.x * -1, scrollerElem)].desc);
				$('[data-overlay="awards"] .award-game span').html(site.awards[probeCurPage(name, itemWidth, this.x * -1, scrollerElem)].game);
				if(cleanGame == 'general'){
					
					$('.game-hex').replaceWith('<a href="/games/" data-genratrtarget onclick="closeOverlay(\'awards\'), pushUrl(\'/games/\', \'Games\', event)" class="game-hex"><img src="/oddsquad/img/hexagons/' + cleanGame + '-badge.png"></a>');
					
				} else {
					$('.game-hex').replaceWith('<a href="/oddsquad/games/' + cleanGame + '/" class="game-hex"><img src="/oddsquad/img/hexagons/' + cleanGame + '-badge.png"></a>');
				}

			// console.log(site.awards[probeCurPage(name, itemWidth, this.x * -1, scrollerElem)].name);
			
		}
	});
	
};
function gotoScroll(name, num, speed) {	
	$('[data-overlay]').removeClass('animate');
	
	var transition = speed || 500;
	
	if(num == 'next'){
		window[name].goToPage((window[name].currentPage.pageX + 1), 0, speed);
		return;
	} else if(num == 'prev') {
		window[name].goToPage((window[name].currentPage.pageX - 1), 0, speed);
		return;
	}
	window[name].goToPage(num, 0, speed);
};

function probeCurPage(name, itemWidth, curPosi, scrollerElem) {
	var	activePg = Math.round(curPosi / itemWidth);
	if(activePg < 0) {
		activePg = 0;
	}
	return activePg;
};

function probeHighlightPage(scrollerElem, activePg, depth) {
	$('.'+scrollerElem+' > *').removeClass();
	$('.'+scrollerElem+' > *:eq('+activePg+')').addClass('active');
	
	for (i = 1; i <= depth; i++) {
		$('.'+scrollerElem+' > *:eq('+(activePg - i)+')').addClass('prev' + i);
		$('.'+scrollerElem+' > *:eq('+(activePg + i)+')').addClass('next' + i);
	}
	
};

function pushUrl(url, title, event) {
	//console.log('PUSH URL FIRED');
	
	if(playerLoaded == true) {
		player.pause();
	};
	
	if($('[data-pageDepth="root"]').exists() == false ) {
		//if interrior page build link to send params to home page for opening correct point
		//if ie9 or below handle as normal link and send to static page
		if($('.lte9').exists() == false ) {
			event.preventDefault();
			window.location.replace('/oddsquad/index.html?dir=' + url);
		} else {
			event.preventDefault();
			window.location.replace('/oddsquad' + url);
		}
		return
	} else if ($('[data-pageDepth="root"]').exists() == true) {
		//if home page use this method for push state
		event.preventDefault();
			
		genratrSetURL(url, title, false);
	}
}
function closeOverlay(type) {
	$(document).trigger('OVERLAY_REMOVED', type);
};

$(window).resize( function () {
	$('.videoPlaylist-wrapper').height($('.videoPlayer-wrapper').height());
	
	if($('[data-pageDepth="root"]').exists() == true) {
		$('.btn-animate').destroy();
		$('.btn-animate').each( function() {
			/*
			$(this).width($(this).parent().width());
			$(this).height($(this).parent().height());
			*/
		});
		$('.btn-animate').sprite({
			fps: 20,
			no_of_frames: 14, 
			on_last_frame: function(obj) {
				obj.spStop();
				
				setTimeout(function () {
						obj.spStart();
				}, 3000);
			}
			
		});
		setTimeout(function () {
			calcHex();
			pageScroll.refresh();
		}, 0);
	};
	
	if($('[data-overlay="awards"]').exists() == true) {
		location.reload();
		/*
		console.log('refresh awards now');
		awardScroll.destroy();
		setTimeout(function () {
			awardScroll = new IScroll('.award-wrapper', {
				snap: true,
				momentum: false,
				scrollX: true,
				scrollY: false,
				probeType: 3,
				tap: true
			});
			probeCarousel('awardScroll');
			
		}, 500);
		*/
	}
    setTimeout(function () {
		getWinSize();
		calcBGSize();
		//setStageSize();
    }, 0);
	
});
function calcBGSize() {
	getWinSize();
	if(winSize.x < winSize.y) {
		$('.odd-wrapper > .backgrounds img').css({
		   width : 'auto',
		   height : '100%'
		});
	} else if(winSize.x >= winSize.y) {
		$('.odd-wrapper > .backgrounds img').css({
		   width : '100%',
		   height : 'auto'
		});
	}
}

function getPages() {
	scrollPagesQty	= $('.pg-wrapper > section > article').length;
	for (var i = 0; i < scrollPagesQty; i++) {
		
		var self	= $('.pg-wrapper > section > article:eq(' + i + ')');
		
		scrollPages.push({
			_details: {				
				name: $(self).attr('data-title'),
				status: null
			},
			_size: {
				x: $(self).width(),
				y: $(self).height()
			},
			_position: {			
				x: $(self).offset().left,
				y: $(self).offset().top	
			}

		});
		pageWidth = pageWidth + scrollPages[i]._size.x;
	};
};

function setStartPage(page) {
	startPage = page;
}
function getScrollingStatus(newPage, curPosi) {
	
	startPosi 		= scrollPages[startPage]._position.x;
	
	if(startPage > newPage || (curPosi * (-1)) < startPosi ) {
		pageScroll.dir = '-1';
	}else if(startPage < newPage || (curPosi * (-1)) > startPosi) {
		pageScroll.dir = '1';
	//}else if (startPage == newPage) {
	}else {
		pageScroll.dir = '0';
	}
	
	pageScroll.dif = Math.abs(startPosi + curPosi)
	
	setStageStatus(newPage);
};
function setStageStatus(newPage) {
	//setScrollPageStatus
	//clear active status if exists to clear active animations
	$('.pg-wrapper > section > article').removeClass('active');
	//add active status to current stage to init animations
	$('.pg-wrapper > section > article:eq(' + newPage + ')').addClass('active');
	
	curStage	= newPage
	
	for (var i = 0; i < scrollPagesQty; i++) {
		//clear all stage status
		$('.pg-wrapper > section > article:eq(' + i + ')').removeAttr('data-status');
	};
	
	for (var i = 0; i < curStage; i++) {
		//clear all stage status
		$('.pg-wrapper > section > article:eq(' + i + ')').attr('data-status', 'old');
	};
	for (var i = curStage + 1; i < scrollPagesQty; i++) {
		//clear all stage status
		$('.pg-wrapper > section > article:eq(' + i + ')').attr('data-status', 'new');
	};
	
	$('.pg-wrapper > section > article:eq(' + curStage + ')	').attr('data-status','cur');
	$('html').attr('data-activeStage', curStage);
	
	
	
	//only init video player when that page is hit.. this stops the auto play on playlist load
	if($('.pg-wrapper > section > article:eq(' + curStage + ')	').hasClass('pg-videos')){
		 if(player == undefined) {
			initVideoPlayer();
		 };
	}

};

function gotoStage(stage, speed) {
	
		if(playerLoaded == true) {
			player.pause();
		}
		
	//prevents bug with overclicking by disabling btns
	$('.scrollNav, .pageNav').addClass('disabled');
	
	var transition = speed || 500;
	
	//console.log('transition: ', transition);
	if(stage == 'next'){
		pageScroll.goToPage((pageScroll.currentPage.pageX + 1), 0, speed);
		return;
	} else if(stage == 'prev') {
		pageScroll.goToPage((pageScroll.currentPage.pageX - 1), 0, speed);
		return;
	}
	pageScroll.goToPage(stage, 0, speed);
};

/* -------------------------------------------------
                   GLOBAL FUNCTIONS
------------------------------------------------- */
function translate(elem, x, y, z){
	
	var elemMatrix = 	getMatrix(elem),
		matrixType =	elemMatrix[1].length == 6 ? '2D' : elemMatrix[1].length == 17 ? '3D' : undefined,
		translateAxis = {
			x: x !== undefined ? x : matrixType == '2D' ? elemMatrix[1][4] : matrixType == '3D' ? elemMatrix[1][13] : 0,
			y: y !== undefined ? y : matrixType == '2D' ? elemMatrix[1][5] : matrixType == '3D' ? elemMatrix[1][14] : 0,
			z: z !== undefined ? z : matrixType == '2D' ? 0 : matrixType == '3D' ? elemMatrix[1][15] : 0
		};

	$(elem).css(prefix.css + 'transform', 'translateX(' + translateAxis.x + 'px) translateY(' + translateAxis.y + 'px) translateZ(' + translateAxis.z + 'px)');

};
function getMatrix(target) {
	
	var	matrix = $(target).css(prefix.css + 'transform');	
	matrixValues = matrix.match(/-?[0-9\.]+/g);
	
	return [matrix, matrixValues];
};

function getWinSize() {
	return winSize = {
		x: $(window).width(),
		y: $(window).height()
	};
};

function prefix() {
	var styles = window.getComputedStyle(document.documentElement, '');
	
	pre = (Array.prototype.slice
			.call(styles)
			.join('') 
			.match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
		)[1],
		dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
	return prefix = {
		dom: dom,
		lowercase: pre,
		css: '-' + pre + '-',
		js: pre[0].toUpperCase() + pre.substr(1)
	};
};

$.fn.exists = function () {
    return this.length !== 0;
}