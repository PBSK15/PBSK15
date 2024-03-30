//////////////////////////////////////////////////////
// every page's onLoad, regardless of the page, calls
// this function. each individual page should define its
// own loadContent function.
//////////////////////////////////////////////////////
function onLoad(){
	var resize = function(e){
		fixWidths(getSize());
	};
	
	window.addEventListener('resize', resize, false);
	window.addEventListener('orientationchange', resize, false);
	
	//handle footer tab
	document.getElementById('footer-tab').addEventListener('click', (function(){
		var panel = document.getElementById('main_footer'),
		panelOpen = false;
		
		return function(e){
			if(panelOpen) {
				panel.className = panel.className.replace(' showing', '');
				panelOpen = false;
			} else {
				panel.className += ' showing';
				panelOpen = true;
			}
		};
	})(), false);
	
	loadTopNavSFX();
	loadContent();
	
	document.getElementById('main_footer').style.visibility = 'visible';
//	window.scrollTo(0,0);
	window.scrollTo(0,41); //hiding grownup bar by default on iOS
}
//////////////////////////////////////////////////////
// there is a requirement to play sfx on img rollover
// this swf handles that placement
//////////////////////////////////////////////////////
function loadTopNavSFX(){
	if( typeof PBS_FlashCanPlay == 'function' && !PBS_FlashCanPlay(9) ){
		document.getElementById("topNavSFX").innerHTML = 'Please download the latest version of Flash to view this page.';
	} else {
		var obj	= new SWFObject('topNavSFX.swf', 'topnavsfxswf', '5', '5', '9', '#D97825');
		obj.write('topNavSFX');
	}
}

//////////////////////////////////////////////////////
// TOP NAV MOUSE EVENTS 
//////////////////////////////////////////////////////
function gamesOver(obj){
	playswfSFX("games");
}
function gamesOut(obj){
}
function fieldGuideOver(obj){
	playswfSFX("fieldGuide");
}
function fieldGuideOut(obj){
}
function printablesOver(obj){
	playswfSFX("printables");
}
function printablesOut(obj){
}
function videoOver(obj){
	playswfSFX("videos");
}
function videoOut(obj){
}

//////////////////////////////////////////////////////
// Replaces all flash content with the non-flash
// box explaining how to get flash
//////////////////////////////////////////////////////
function getNonFlashContent(title){
	if(title === 'game'){ //redirect to the game page
		window.location = window.location.origin + '/dinosaurtrain/games/';
	} else {// redirect to the home page
		window.location = window.location.origin + '/dinosaurtrain/';
	}
	
	//If for whatever reason the client-side redirect fails, the page content will update - this can probably be removed at some point (DDD):
	var content 	= "<center><br><br><div class='nonFlashBox'>";
	content		+= "<h2>Flash Plug-in Required for this Web site.</h2>";
	content		+= "<table style='width: 600px;'>";
	content		+= "<tr><td width='50%'><img src='/dinosaurtrain/media/images/nonFlashTrain.gif' alt='Dinosaur Train'></td>";
	content		+= "<td style='word-break:break-all;'>We're glad you're here! To use the "+title+", you'll ";
	content		+= "need to download the latest version of Adobe Flash Player. ";
	content		+= "Once you have the <a href='BRIDGE'>Adobe Flash Player</a> installed, you can ";
	content		+= "use the "+title+" by clicking here:<br><br>";
	content		+= "<a href='"+location.href+"'>"+location.href+"</a>";
	content		+= "</td></tr></table>";
	content		+= "</div></center>";
	return content;
}
///////////////////////////////////////////////
// gets and returns the size of the browser
///////////////////////////////////////////////
function getWidth(){
	if( typeof( window.innerWidth ) == 'number' ) {
	    //Non-IE
	    return window.innerWidth;
	} else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
	    //IE 6+ in 'standards compliant mode'
	    return document.documentElement.clientWidth;
	} else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
	    //IE 4 compatible
	    return document.body.clientWidth;
	}
}

function getSize() {
  return (getWidth() > 1099) ? 1100 : 960;
}
///////////////////////////////////////////////
// gives us the hostname of the server
///////////////////////////////////////////////
function getHost(){
	var url 	= "" + window.location;
	var parts	= url.split("/");
	return parts[2];	
}

// Determine whether this browser supports Flash and run the appropriate function
function isFlashEnabled(yesFunction,noFunction){
    if( typeof PBS_FlashCanPlay == 'function' && !PBS_FlashCanPlay(10.1) ){
    	if(noFunction) noFunction();
    	return false;
    } else {
    	if(yesFunction) yesFunction();
    	return true;
    }
}

///////////////////////////////////////////////
// fixes the 960vs.1100 problem
///////////////////////////////////////////////
window.fixWidths = (function(){
	var neverFixWidth = false,
	flashDisabled = '',
	pageClass = '';

	return function(w, noFlash, pageClassName){
		if(noFlash){
			flashDisabled = 'no-print ';
		}
		
		if(pageClassName){
			pageClass = pageClassName + ' ';
			switch(pageClassName){
			case 'game-page':
				document.getElementById('games-link').parentElement.className += ' current-page';
				break;
			case 'field-guide-page':
				document.getElementById('guide-link').parentElement.className += ' current-page';
				break;
			case 'video-page':
				document.getElementById('video-link').parentElement.className += ' current-page';
				break;
			case 'print-page':
				document.getElementById('print-link').parentElement.className += ' current-page';
				break;
			}
		}
		
		if(neverFixWidth || (w === false)){ // used to turn off width-fixing for mobile platforms - DDD
			neverFixWidth = true;
			w = getWidth();
		} else {
			fixTopAndContent(w);
		}
		
		var header  = document.getElementById('main_header');
		var content = document.getElementById('main_content');
		var footer  = document.getElementById('main_footer');
		header.className  = pageClass + flashDisabled;
		
		var arr = null;
		
		if(content){
			arr = (content.className || '').split(' ');
			for (var i = arr.length - 1; i > -1; i --){
				if((arr[i] === 'flex') || (arr[i] === 'mobilify') || (arr[i] === 'too-small') || (arr[i] === pageClass) || arr[i] === ''){
					arr.splice(i, 1);
				}
			}
			arr.push(pageClass);
			content.className = arr.join(' ');
		}
		
		footer.className  = pageClass;
		if(w < 960){
			document.body.className = 'mobile';
			if(!flashDisabled){
				header.className += 'no-print ';
			}
			if(content){
				content.className +=  ' flex';
			}
			footer.className  +=  'flex';
			if(w < 775){
				header.className += 'flex';
				if(w < 640){
					header.className += ' mobilify';
					if(content){
						content.className += ' mobilify';
						if(w < 450){
							content.className += ' too-small';
						}
					}
					footer.className += ' mobilify';
				}
			}
		} else {
			if(w > 1099){
				w = 1100;
			} else {
				w = 960;
			}
			document.body.className = 'desktop-' + w;
			if(flashDisabled){
				footer.className += 'flex';
				document.body.className = 'tablet-' + w;
			}
		}
		footer.style.width = header.offsetWidth + 'px';
		if(content){
			content.style.width = footer.style.width;
		}
		
	};
})();

function fixTopAndContent(w){
    // this div removed in videoPlayer
    if( document.getElementById('main_content') ) {
        document.getElementById('main_content').style.width	= w+"px";
    }
    // video player swaps out div id
    if( document.getElementById('producerPlayer') ) {
        document.getElementById('producerPlayer').style.width	= w+"px";
    }
	if( document.getElementById('swfContent') ){
		document.getElementById('swfContent').style.width = w;
	}
	
}
//Function called for discovery tour's page, so fix the widths of the html pages' footer. Called on Load
function fixHTML5Widths(){
document.getElementById('bottom-right').style.width	= "170px";
document.getElementById('bottom-left').style.width	= "170px";
document.getElementById('bottom-back').style.width	= "960px";
document.getElementById('bottom-back').style.background ="url('/dinosaurtrain/media/images/bottom_nav_background_960.png')";
document.getElementById('bottom-back').style.backgroundRepeat = "no-repeat";
}
