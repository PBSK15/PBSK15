/////////////////////////////////////////////////////////////////////////
//                                                                                                                                     
//  Testing JQuery video player                          
//
//  Copyright © 2013 WGBH Interactive                                 
//  WGBH Educational Foundation                                        
//  Developed by Kal Gieber                                          
//                                                                     
//	This code is used to control a single-play video player that is not 
//	using a playlist.
//                                                                     
/////////////////////////////////////////////////////////////////////////
var player;
var pagevideo={};
;(function($) {
	
	// FUNCTIONS ********************************************************
	
	// used to initialize the video play instance on the page 
	function init(){ 
		/* urls to overlays point to images used by PBS, can be replaced with ones specific to the site */
		
		if(!org.pbskids.video.Player) {
			return;
		}
		
		pagevideo.initialized = true;
		player = new org.pbskids.video.Player( "video-player",
			{
			onPlayerComplete		: onPlayerComplete,
			aspectRatio				:16/9,
			onVideoClick			: "toggle-fullscreen", /* can also do "toggle-pause" or ""  */
			pauseToggleControl		: "#player-controls .play-pause",
			muteToggleControl		: "#player-controls .mute-unmute",
			captionsToggleControl	: "#player-controls .toggle-captions",
			timerRemaining			: "#player .timer-remaining",
			scrubber				: "#player .scrubber",
			onHoverOverlay        	: {
				url:"https://www-tc.pbskids.org/shell/video/img/button_big.png",
//				url:"https://www-tc.pbskids.org/video/img/button_big.png",
				width:"58px", height:"30px",
				fs_url:"https://www-tc.pbskids.org/shell/video/img/button_small.png",
//				fs_url:"https://www-tc.pbskids.org/video/img/button_small.png",
				fs_width:"78px"
			},
			loadingOverlay        	: {
				url:"https://www-tc.pbskids.org/video/img/arrowspin.gif",
				swf:"https://www-tc.pbskids.org/video/img/arrowspin.swf",
				width:"50px", height:"50px"
			},
			playIconOverlay			: {
				url:"https://www-tc.pbskids.org/pbsk/video/img/button_overlay_play.png",
//				url:"https://www-tc.pbskids.org/video/img/button_overlay_play.png",
				color:"black", 
				opacity:50
			}

		});
	}

	// used to check if the video player was successfully built
	function onPlayerComplete(e){
		if( e.success ){
			setVideoControls();
			finalize(e.player);
		}
		else {
			alert("Whoops! Something went wrong building the player: " + e.message);
		}
	}
	
	// used to set the appearance of the video controls 
	function setVideoControls(){
		// if HTML 5 player, set up fullscreen button
		if(player!=null&&!player.isFlashPlayer()){
			$('.show-fullscreen').removeClass('hidden');
			$('.scrubber-area').addClass('fs-enabled');
			$('.show-fullscreen button').click(function(){
				player.enterFullscreen();
			});
		}
		// show video controls area
		$('#player-controls').removeClass('hidden');
	}
	
	// used to finalize the single-video player loading the video. videoID must be set in the JS of the page that calls this
	function finalize(playerInstance){
		playerInstance.loadAndPause(videoID);
	}

	// START ****************************************************************
	
	// start initialization - accordions have to wait though
	if(!window.accordionvideo) {
		$(document).ready(init);
	}
	pagevideo.init = init;
})(jQuery);
