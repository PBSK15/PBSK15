var myPlayer;
var myPlayerInterval;

//myPlayer.unload();
//$("#videoPlayer").remove();

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
			
		myPlayer = player;
	}
 

	function onPlayerComplete ( e ) {
		if( e.success ){
			// console.log("Player was successfully built");

			//initPlaylist(e.player);
			player.loadAndPlay("10a1177e-140a-4b2a-bd88-7c1c5658e026");

		}else {
			alert("Whoops! Something went wrong building the player: " + e.message);
		}
	}



	/*function initPlaylist(playerInstance){

		playlist = new org.pbskids.video.PlayList(
			"nowPlayingList",
			"playlistItem",
			player,
			{
				loadingIndicator	: "https://pbskids.org/video/img/arrowspin.gif",
				previousVideoControl	: "#controlRack .prevVideo",
				nextVideoControl	: "#controlRack .nextVideo",
			}
			);

		playlist.refresh();

		$("#playlistWrapper").show();
	}*/


	function loadPlaylists(){
	
		if (playlistsLoaded)
		{	return;
		}

		var numPlaylists = $('.browserPlaylist').length;
		// console.log("There are " + numPlaylists + " playlists");

		var list;
		for (var i = 0; i < numPlaylists; i++)
		{
			list = new org.pbskids.video.PlayList(
				"playlist_"+(i+1),
				"playlistItem",
				player,
				{
					loadingIndicator	: "https://pbskids.org/video/img/arrowspin.gif",
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
