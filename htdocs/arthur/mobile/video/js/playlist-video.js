/////////////////////////////////////////////////////////////////////////
//                                                                                                                                     
//  Testing JQuery video player                          
//
//  Copyright © 2013 WGBH Interactive                                 
//  WGBH Educational Foundation                                        
//  Developed by Kal Gieber                                          
//                                                                     
/////////////////////////////////////////////////////////////////////////

;(function($) {

	// VARIABLES ********************************************************
	
	// OBJECTS
	var intCheck;
	
	// FUNCTIONS ********************************************************
	
	function init(){ 
		player = new org.pbskids.video.Player( "video-player",
			{
			onPlayerComplete		: onPlayerComplete,
	/*		aspectRatio				:16/9,			*//*	
	*/		onVideoClick			: "toggle-fullscreen", // can also do "toggle-pause"
			pauseToggleControl		: "#controlrack .play-pause",
			muteToggleControl		: "#player-controls .mute-unmute",
			captionsToggleControl	: "#player-controls .toggle-captions",
			timerRemaining			: "#player .timer-remaining",
			scrubber				: "#player .scrubber",
			onHoverOverlay        	: {
				url:"http://www-tc.pbskids.org/video/img/button_big.png",
				width:"58px", height:"30px",
				fs_url:"http://www-tc.pbskids.org/video/img/button_small.png",
				fs_width:"78px"
			},
			loadingOverlay        	: {
				url:"http://www-tc.pbskids.org/pbsk/video/img/arrowspin.gif",
				swf:"",
				width:"50px", height:"50px"
			},
			playIconOverlay			: {
				url:"http://www-tc.pbskids.org/pbsk/video/img/button_overlay_play.png",
				color:"black", 
				opacity:50
			}
			
		});
	}//init()

	function onPlayerComplete(e){
		if( e.success ){
			setVideoControls();
			finalize(e.player);
		}
		else {
			alert("Whoops! Something went wrong building the player: " + e.message);
		}
	}//onPlayerComplete()
	
	// used to set view of the video controls 
	function setVideoControls(){
		// set up fullscreen button
		if(player!=null&&!player.isFlashPlayer()){
			$('.show-fullscreen').removeClass('hidden');
			$('.scrubber-area').addClass('fs-enabled');
			$('.show-fullscreen button').click(function(){
				player.enterFullscreen();
			});
		}
		// show controls
		$('#player-controls').removeClass('hidden');
	}
	
	function finalize(playerInstance){
		// for playlist
		playlist = new org.pbskids.video.PlayList(
			"playlist-column",
			"playlist-item",
			playerInstance,
			{	
				autoPlay				:true,
				autoPlayNext 			:true,
				debugMode				:true,
				loadingIndicator		: "http://www-tc.pbskids.org/video/img/arrowspin.gif",
/*				loadMoreVideosMessage : "Show More Videos",
				loadMoreButtonClass   : "showmore-videos"
*/
				previousVideoControl  : "#controlrack .previous",
				nextVideoControl      : "#controlrack .next"
			}
		);
		// start the Design Squad playlist
		playlist.refresh({"program":"Arthur"},{"keyword":"season1"});
		
		// check if this is the button version
		if(document.getElementById("playlistBT-main")!=null){
			// set up timer to check when playlist has been built
			intCheck=window.setInterval(adjustPlayList, 200);
		}

		// set up listener for end
		$(document).on(org.pbskids.video.VideoEvent.VIDEO_END, videoReachedEnd);
				
	}//finalize
	
	// used to set up the classes to create columns in the playlist
	function adjustPlayList(){
		// check if playlist has been created
		if($('#playlist-column > li').length>1){
			window.clearInterval(intCheck);
			// add a class to the second and third li elements
			var liCtr=1;
			$('#playlist-column > li').each(function(){
			
				// mark two columns
				if((liCtr % 2) == 1){
					$(this).addClass('two-col');
				}
				// mark three columns
				if((liCtr % 3) == 1){
					$(this).addClass('three-col');
				}
				// mark four columns
				if((liCtr % 4) == 1){
					$(this).addClass('four-col');
				}
				++liCtr;
			});
			
			//$('#playlist-column').removeClass('hidden');
			
		}
	}
	
	// used to do something when the video has reached the end
	function videoReachedEnd(){
		playlist.selectItem("e140a8ce-5d22-4fcc-b5a2-d9ced13113ff");
	}

	// start initialization
	$(document).ready(init);

})(jQuery);
