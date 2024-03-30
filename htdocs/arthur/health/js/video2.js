;(function($) {
	var player, nextID;

	function init() {
		var fileURL = "http://www-tc.pbskids.org/pbsk/video/";
		configObj = {
			onPlayerComplete: onPlayerComplete,
			aspectRatio: 1.7778,
			onVideoClick: "toggle-fullscreen",
			pauseToggleControl: "#player-controls .play-pause",
			muteToggleControl: "#player-controls .mute-unmute",
			captionsToggleControl: "#player-controls .toggle-captions",
			timerRemaining: "#player .timer-remaining",
			scrubber: "#player .scrubber",
			loadingOverlay: {url:fileURL+"img/arrowspin.gif", swf:fileURL+"swf/arrowspin.swf", width:"50px", height:"50px"},
			playIconOverlay: {url:fileURL+"img/button_overlay_play.png", color:"black", opacity:50}
		};
		if (/Mobile/i.test(navigator.userAgent)) { configObj.onHoverOverlay = {url:"/arthur/health/img/dot.png"}; }
		else { configObj.onHoverOverlay = {url:"/arthur/health/img/fullscrn_hover.png", fs_url:"/arthur/health/img/dot.png"}; }
		player = new org.pbskids.video.Player("video-player", configObj);
	}

	function onPlayerComplete(evt) {
		if (evt.success) {
			setVideoControls();
			finalize(evt.player);
		} else { alert("Whoops! Something went wrong building the player: " + e.message); }
	}

	function setVideoControls() {
		if (player!=null && !player.isFlashPlayer()) {
			$(".show-fullscreen").removeClass("removed");
			$(".show-fullscreen button").click(function(){player.enterFullscreen();});
		}
		if ($(window).width() >= 481 && $(".mute-unmute").css("display") == "none" && $(".toggle-captions").css("display") == "none") {
			$("#player-controls .scrubber").css("margin-right", "96px");
		}

		$("#player-controls").removeClass("hidden");
	}

	function finalize(playerInstance) {
		vidPlayerRef = playerInstance;
		vidPlayerRef.loadAndPause(videoID);
		$("#player").css("background-color", "#ffc45e");
		if (typeof videoID2 != 'undefined') {
			nextID = videoID2;
			$(document).on(org.pbskids.video.VideoEvent.VIDEO_END, videoReachedEnd);
		}
	}

	function videoReachedEnd(evt) {
		if (nextID == videoID2) {
			vidPlayerRef.loadAndPlay(nextID);
			nextID = videoID;
		} else {
			vidPlayerRef.loadAndPause(nextID);
			nextID = videoID2;
		}
	}

	$(document).ready(init);
})(jQuery);
