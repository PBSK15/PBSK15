/////////////////////////////////////////////////////////////////////////
//                                                                                                                                     
//  Testing JQuery video player                          
//
//  Copyright © 2013 WGBH Interactive                                 
//  WGBH Educational Foundation                                        
//  Developed by Kal Gieber                                          
//                                                                     
//	This code is used to control the video player that includes a 
//	playlist where the first video autostarts.
//                                                                     
/////////////////////////////////////////////////////////////////////////
var player;
;(function($) {

	// VARIABLES ********************************************************
	
	// OBJECTS
	var intCheck;
	var guidRef;
	
	// FUNCTIONS ********************************************************
	
	// used to initialize the video play instance on the page 
	function init(){ 
		/* urls to overlays point to images used by PBS, can be replaced with ones specific to the site */
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
//				url:"https://www-tc.pbskids.org/shell/video/img/button_big.png",
//				url:"https://www-tc.pbskids.org/video/img/button_big.png",
				url:"/plumlanding/i/common/video/btn_full.png",
				width:"83px", height:"80px",
//				fs_url:"https://www-tc.pbskids.org/shell/video/img/button_small.png",
//				fs_url:"https://www-tc.pbskids.org/video/img/button_small.png",
				fs_url:"/plumlanding/i/common/video/btn_sm.png",
				fs_width:"78px"
			},
			loadingOverlay        	: {
				url:"https://www-tc.pbskids.org/pbsk/video/img/arrowspin.gif",
				swf:"https://www-tc.pbskids.org/pbsk/video/swf/arrowspin.swf",
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
	
	// used to finalize the player set by adding a playlist 
	function finalize(playerInstance){
		// for playlist
		playlist = new org.pbskids.video.PlayList(
			"playlist-column",
			"playlist-item",
			playerInstance,
			{	
				autoPlay				:false,
				autoPlayNext 			:false,
				debugMode				:false,
				iScrollOpts:"NO_ISCROLL",
				loadingIndicator		: "https://www-tc.pbskids.org/video/img/arrowspin.gif"
				// additional options				
/*				loadMoreVideosMessage : "Show More Videos",
				loadMoreButtonClass   : "showmore-videos"
				previousVideoControl  : "#controlrack .previous",
				nextVideoControl      : "#controlrack .next"
*/			}
		);
		
		// set up listeners for playlist - NOT BEING USED FOR AUTOSTART VERSION
//		playlist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_COMPLETE, onRefreshCompletePlaylist, false); 	// this one is activated after the playlist is loaded when the page appears
 
//		additional events available for the playlist
//		playlist.addEventListener(org.pbskids.video.PlaylistEvent.COPY_COMPLETE , onCopiedToPlaylist, false);
//		playlist.addEventListener(org.pbskids.video.PlaylistEvent.APPEND_COMPLETE , onCompletePlaylist, false);

		// load the Design Squad playlist
		//var program='Plum Landing';
		//var keyword='jungle';
		//var playlistparams={"program":program,"keyword":keyword};

		// playlistparams comes from the page this is on.
		playlist.refresh(playlistparams);
		
		// check if this is the button version of the playlist
		if(document.getElementById("playlistBT-main")!=null || 1==1){
			// set up timer to check when playlist has been built
			intCheck=window.setInterval(adjustPlayList, 200);
		}

		// set up listener for end of video being reached
		$(document).on(org.pbskids.video.VideoEvent.VIDEO_END, videoReachedEnd);
				
	}

	
	// used to set up the classes to create columns in the button-style playlist
	function adjustPlayList(){
	$('.video-title').each(function() {
		var titles=this.innerHTML.split(" -- ");
		if(titles.length > 1) {
			this.innerHTML=titles[0] + "<br /><span class=\"tn-sub\">" + titles[1] + "</span>";
		}
	});


		// check if playlist has been created
		var $l=$('#playlist-column > li');
		if($l.length>1){
			window.clearInterval(intCheck);
			// add a class to the second and third li elements
			//$('#vidplaylist').show();
			var liCtr=1;
			
			var guidRef=""; 
			var listindex=0;
			var playnum=1;
			
			
			// play video based on passed guid...
			if(videoID && $(".guid_" + videoID)!=null) {
					guidRef=videoID;
			} else 

			// or just pick the first one
			if(guidRef=="") {
			if(playnum) {
				
			// ...or on passed index in playlist (as long as it isn't too big)...
				if(playnum<$l.length && playnum>0) {
					listindex=playnum-1;
				}
			} else {
				listindex=0;	
				}

			// find the guid for the first element in the playlist (which is in the class attribute) so it can be loaded up without starting (PBS player doesn't seem to load it up if autoPlay is set to 'false')
			var cs=$l[listindex].className.split(' ');
			for(var c in cs) {
				if(cs[c].match('guid_')) {
				guidRef=cs[c].split('_')[1];
				break;
				}
			}
			}
	
			player.loadAndPause(guidRef);
			
			$(".guid_" + guidRef).addClass('selected');
			
	//		firstguid=guid_f25afce1-044b-4773-a481-4f8c9254c852
			
		/*	$('#playlist-column > li').each(function(){
			
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
			*/
			// show the playlist area
			$('#playlist-column').removeClass('hidden');
		
			
		}
	}
	
	// EVENT LISTENERS ******************************************************
	
	// used to do something when the video has reached the end
	function videoReachedEnd(){
/*
		// this starts a new video
		playlist.selectItem("e140a8ce-5d22-4fcc-b5a2-d9ced13113ff");
*/
	}

	// START ****************************************************************
	
	// start initialization
	$(document).ready(init);

})(jQuery);
