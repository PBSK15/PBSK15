
var PbsVideo = PbsVideo || new function () {

	"use strict";

	var _this = this;
	var player, 
	    playlist,
	    playlistsLoaded = false;

	_this.State = {
		STALL: 0,
		PLAYING: 1,
		DONE: 2
	}

	_this.init = function() {
		
		// return;
		player = new org.pbskids.video.Player( "pbs-video-player",
			{
				onPlayerComplete	: onPlayerComplete,
				onVideoClick		: "toggle-pause"
			});
	}

	_this.getState = function() {
		if (player.currentTime() > 0) {
			if (player.currentTime() < player.duration()) {
				return PbsVideo.State.PLAYING;
			} else {
				return PbsVideo.State.DONE;
			}
		}
		return PbsVideo.State.STALL;
	}
	
	_this.destroy = function() {
		if (player) {
			player.unload();
		} else {
			console.error("PBS - video unload error.");
		}
	}


	function onPlayerComplete(e){
		if( e.success ){
			console.log("Player was successfully built");

			//initPlaylist(e.player);
			//player.loadAndPlay("45361c31-58e7-4f87-be64-2f9d01e0795d");
			player.loadAndPlay("d8cf677d-d5f7-4c88-9ff6-8c57b58254c2");

		} else {
			alert("Whoops! Something went wrong building the player: " + e.message);
		}
	}


	function loadPlaylists(){
	
		if (playlistsLoaded)
		{	return;
		}

		var numPlaylists = $('.browserPlaylist').length;
		console.log("There are " + numPlaylists + " playlists");

		var list;
		for (var i = 0; i < numPlaylists; i++)
		{
			list = new org.pbskids.video.PlayList(
				"playlist_"+(i+1),
				"playlistItem",
				player,
				{
					loadingIndicator	: "http://www-tc.pbskids.org/video/img/arrowspin.gif",
				}
				);
			list.refresh();
		}

		playlistsLoaded = true;
	}


	function scrollVert(container, direction)
	{
		container.animate({
			scrollTop : container.scrollTop() + (container.height() * 0.8 * direction)
			}, 250);
	}

	function scrollHoriz(container, direction)
	{
		container.animate({
			scrollLeft : container.scrollLeft() + (container.width() * 0.8 * direction)
			}, 250);
	}


	function videoSelected(videoThumb)
	{
		$('.thumb-container .video-info').hide();
		$(videoThumb).find('.video-info').show();

		$('#browserWrapper').hide();
	}

}

