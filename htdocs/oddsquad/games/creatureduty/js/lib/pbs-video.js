$(function(){
	var player, 
	    playlist,
	    playlistsLoaded = false;
 
	function init(){ 

	

		// return;
		player = new org.pbskids.video.Player( "pbs-video-player",
			{
				onPlayerComplete	: onPlayerComplete,
				onVideoClick		: "toggle-pause"
			});
	}
 

	function onPlayerComplete(e){
		if( e.success ){
			_log("Player was successfully built");

			//initPlaylist(e.player);
			player.loadAndPlay("ecfbbc88-0b39-4a71-a1a4-7dd52dc024f8");

		}else {
			alert("Whoops! Something went wrong building the player: " + e.message);
		}
	}
	function loadPlaylists(){
	
		if (playlistsLoaded)
		{	return;
		}

		var numPlaylists = $('.browserPlaylist').length;
		_log("There are " + numPlaylists + " playlists");

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


	$(document).ready(init);
});
