;(function($) {
 
  /*var videoID="3341dfa9-4baa-4e6e-a5ae-308c244978a1"; init video id - for testing only*/

  // VARIABLES ********************************************************
  // STATIC
  var MAX_ITEMS = 4;  // max number of videos in the playlist

  // PARAMETERS
  var total_items = 0,  // total number of items in the playlist
    top_index = 1,    // index of top item in list
    btm_index = 0,    // index of last element in the top of playlist
    curr_index = 1,   // pointer to top index element in the playlist
    li_height = 0,    // height of playlist item
    pl_view_hgt = 0,  // playlist view height
    ctr = 0,      // generic counter
    end_indx = 0,   // ending index
    new_pos = 0,    // new position for moving playlist
    curr_url;     // url of page
  
  // OBJECTS
  var intCheck;     // interval check for playlist availability
  var player;       //ref to player
  
  // FLAGS
  var images_loaded=false;    // indicates when the images have been loaded

  //var current_playlist = {"program":"Arthur"};//"keyword":"characterDW"

// FUNCTIONS ********************************************************
  //init video player
  function init() {
    console.log("[VIDEO PLAYER] init");

    var fileURL = "https://www-tc.pbskids.org/pbsk/video/";
    //video player config
    configObj = {
      onPlayerComplete: onPlayerComplete,
      aspectRatio: 1.7778,
      onVideoClick: "toggle-fullscreen",//toggle-fullscreen
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
    console.log("[VIDEO PLAYER] PLAYER COMPLETE: "+evt.success);
    if (evt.success) {
      setVideoControls();
      finalize(evt.player);
    } else { alert("Whoops! Something went wrong building the player: " + e.message); }
  }

  function setVideoControls() {
    $('#player-controls').addClass("hidden");
    if (player!=null && !player.isFlashPlayer()) {
      $(".show-fullscreen").removeClass("removed");
      $(".show-fullscreen button").click(function(){player.enterFullscreen();});
    }
    if ($(window).width() >= 481 && $(".mute-unmute").css("display") == "none" && $(".toggle-captions").css("display") == "none") {
      $("#player-controls .scrubber").css("margin-right", "96px");
    }
  }

  function finalize(playerInstance) {
    console.log("[VIDEO PLAYER] finialize video");
    //setup playlist
    playlist = new org.pbskids.video.PlayList(
      "playlist-column",
      "playlist-item",
      playerInstance,
      {
        autoPlay      : false,
        autoPlayNext  : false,
        debugMode     : false,
        iScrollOpts   : "NO_ISCROLL",
        loadingIndicator : "https://www-tc.pbskids.org/video/img/arrowspin.gif"
      }
    );

    //load the playlist
    playlist.refresh(current_playlist);//"keyword":"characterDW"

    intCheck = setInterval(finalizePlaylist,200);
  }

  function finalizePlaylist(){
    var guidRef = "",
    idx = -1;
    guidStr = '?guid=';
    listindex = 0;
    $plist = $('#playlist-column > li');

    // check if playlist has been created and the playlist images have been loaded
    if(($plist.length>1) && images_loaded){
      console.log("[VIDEO PLAYER] got play list = "+$plist.length);
      window.clearInterval(intCheck);
      total_items = $('#playlist-column > li').length;
      btm_index = total_items - MAX_ITEMS + 1;
      curr_index = 1;
      
      // adjust the height of the video list column
      //adjustPlaylistHeight();
      
      // set up the buttons for scrolling
      if($plist.length > MAX_ITEMS) {
        // show buttons
        $('#plbtn-up').removeClass('noshow');
        $('#plbtn-dn').removeClass('noshow');
        $('#plbtn-up').addClass('bt-inactive');
        
        // if browser doesn't recognize svg graphics, using pngs
        /*if (!supportsSVG()) {
          $('.plbuttons').addClass('nosvg');
        }*/
        
        $('#plbtn-up').click(function(ev){
          ev.preventDefault();
          if(!$('#plbtn-up').hasClass('bt-inactive')) {
            li_height = parseInt($('#playlist-column > li:nth-child(' + (curr_index + MAX_ITEMS - 1) + ')').css('height'), 10) + parseInt($('#playlist-column > li:nth-child(' + (curr_index + MAX_ITEMS - 1) + ')').css('margin-bottom'), 10);
    
            new_pos = parseInt($('#playlist-column').css('top'), 10) + li_height;
            $('#playlist-column').css('top', new_pos);
            --curr_index;
            //adjustPlaylistHeight();
            // has the end been reached
            if(curr_index === top_index) {
              $('#plbtn-up').addClass('bt-inactive');
            }
            // check if down was inactive
            if($('#plbtn-dn').hasClass('bt-inactive')){
              $('#plbtn-dn').removeClass('bt-inactive');
            }
          }
        });
        
        $('#plbtn-dn').click(function(ev){
          ev.preventDefault();
          if(!$('#plbtn-dn').hasClass('bt-inactive')) {
            li_height = parseInt($('#playlist-column > li:nth-child(' + curr_index + ')').css('height'), 10) + parseInt($('#playlist-column > li:nth-child(' + curr_index + ')').css('margin-bottom'), 10);
            
            new_pos = parseInt($('#playlist-column').css('top'), 10) - li_height;

            $('#playlist-column').css('top', new_pos);
            ++curr_index;
            //adjustPlaylistHeight();
            // has the end been reached
            if(curr_index === btm_index) {
              $('#plbtn-dn').addClass('bt-inactive');
            }
            // check if up was inactive
            if($('#plbtn-up').hasClass('bt-inactive')){
              $('#plbtn-up').removeClass('bt-inactive');
            }
          }
        });
        
      }

      // check for a guid ref in url
      curr_url = window.location.href;
      idx = curr_url.indexOf(guidStr);
      
      if(idx !== -1) {
        guidRef = curr_url.slice(idx + guidStr.length);   
      }
      else {
        // find the guid for the first element in the playlist (which is in the class attribute) so it can be loaded up without starting (PBS player doesn't seem to load it up if autoPlay is set to 'false')
        var cs=$plist[listindex].className.split(' ');
        for(var c in cs) {
          if(cs[c].match('guid_')) {
          guidRef=cs[c].split('_')[1];
          break;
          }
        }
      }
      
      // set first video in the player
      player.loadAndPause(guidRef);
      
      $(".guid_" + guidRef).addClass('selected');
  
      // show the playlist area
      $('.playlist-region').removeClass('hidden');

      //show video controls
      $("#player-controls").removeClass("hidden");
  
      // set window resize to recheck playlist dimensions
      //$( window ).resize(playlistViewReset);
        
    }
  }

  /*function videoReachedEnd(evt) {
    if (nextID == videoID2) {
      vidPlayerRef.loadAndPlay(nextID);
      nextID = videoID;
    } else {
      vidPlayerRef.loadAndPause(nextID);
      nextID = videoID2;
    }
  }*/

  $(document).ready(init);

  // detect when the images are loaded in the playlist
  $(window).load(function(){
    images_loaded=true;
  })
})(jQuery);
