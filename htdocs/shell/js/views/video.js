/*################################################
               PBS KIDS VIDEO
################################################*/
(function( require, define, pageview ){
  'use-strict';

  if( typeof define === "function" && define.amd ){
    define( "video-view", ["jquery", "jquery-video", "images-loaded", "jquery-touch"], pageview );
  }
  else{
    pageview( jQuery );
  }

}(PBS.KIDS.require, PBS.KIDS.define, function( $ ){
  'use-strict';

  //only debug on subdomains of pbskids.org, e.g. dev.pbskids.org
  var _DEBUG=window.location.hostname.match(/^((?!www(\-tc)?\.).+)pbskids\.org$/) ? true : false;
  var _log=function(message, args, type, force) { if( _DEBUG === true || force === true){if( typeof console !== "undefined" ){if( type == "error" ){if( console.error ){console.error(message, args); return; } else if( window.Error ){throw new Error(message); } /*else keep going down choices until console.log*/ } if( type == "info" && console.info ) {console.info(message, args); return; } if( type == "warn" && console.warn ) {console.warn(message, args); return; } if( console.log ) {console.log(message, args); } } else if( window.debug ) {window.debug.log.apply(message, args); } } };

  var view = {};// view is what gets returned when pulled in as an AMD Module
  var player;
  var playlist;
  var browsingPlaylist;
  var justAddedPlaylist;

  //var _CDN               = window.location.hostname.match(/^((?!www(\-tc)?\.).+)pbskids\.org$/) ? "" : "http://pbskids.org";
  var _CDN = "http://pbskids.org";
  var _SITE_ROOT         = "/shell/";
  var _API_URL           = "/pbsk/video/api/";
  //var _AUDIO_LIST_URL    = _SITE_ROOT + "audio/views/video/audiosprite.json";
  //var _AUDIO_FOLDER_ROOT = _SITE_ROOT + "audio/views/video/";
  var _IMAGE_FOLDER_ROOT = _CDN + _SITE_ROOT + "images/content/show-bubbles/";
  var _SHOW_POSTERS_PATH = _CDN + _SITE_ROOT + "images/content/shows/";

  var _FOCUS_CLASS       = "google-focus";
  var _HAD_FOCUS_CLASS   = "had-google-focus";

  var shows      = {};//Object Containing Properties for all of the shows under the KIDS Brand (e.g. Thumb Urls, Funder Info)
  var showTitles = [];//Array of Show titles to submit on category/topic requests. This is to make sure that all videos returned are KIDS BRAND only

  var _CIRCLE_IMG = "program-kids-home-page-round";
  var _SQUARE_IMG = "program-kids-icon";
  var _POSTER_IMG = "program-mezzanine-16x9";
  
  var errorTimeout;
  var errorTimeoutDelay  = 10000;//10 seconds
  var transitionTime     =   200;//character scroll
  var horizontalPadding  =    50;
  var verticalPadding    =    70;//character scroll
  var resumePlaying      = false;
  var _PERCENT_THRESHOLD =    80;//80% : percent viewed to be considered as "watched"

  var characterBarWidth = 145;//for calc position when dragging browsingPanel
  var mobileView        = null;//true or false, but null for initial state
  var rightDraggingBound;

  var currentRelease;
  var currentCategory   = "";
  var dashPicksTitle    = "";
  var _DASH_PICKS_GROUP = "ipad_kids_dashpicks";
  var _DASH_HOST_SPOTS  = "ipad_kids_intro_dashpicks";


  /* Audio */
  var videoHowls;//for playing sounds on button-hover states
  var audioLoaded = false;
  var audioTimeout;
  var _AUDIO_DELAY = 500;

  /* Sponsors Dropdown */
  var sponsorTimeout;
  var sponsorMaxDisplayTime = 15000;//15 seconds
  var sponsorTimer;
  var sponsorTimerInterval;

  /* iScroll Objects */
  var characterScroll;
  var nowplayingScroll;
  var showsScroll;
  var topicsScroll;
  var browsingScroll;
  var justAddedScroll;
  var iScrollOpts = {};

  /* Browser/Device Capabilities */
  var _IS_GOOGLE_TV  = (/googletv/gi).test(navigator.appVersion);
  var _IS_TOUCH_PAD  = (/hp-tablet/gi).test(navigator.appVersion);
  var _HAS_POINTER   = Boolean(window.PointerEvent || window.MSPointerEvent);
  var _HAS_TOUCH     = ('ontouchstart' in window && !_IS_TOUCH_PAD);
  var _IS_iDEVICE    = (/iphone|ipad|ipod/gi).test(navigator.appVersion);
  var _IS_KINDLE_APP = $("html").hasClass("kindle-app");
  var _HIDE_LINKS    = $("html").hasClass("hide-external-links");

  /* Event Types */
  var START_EV  = window.PointerEvent ? "pointerdown" : window.MSPointerEvent ? "MSPointerDown" : (!_HAS_TOUCH ? 'mousedown' : 'touchstart');
  var MOVE_EV   = window.PointerEvent ? "pointermove" : window.MSPointerEvent ? "MSPointerMove" : (!_HAS_TOUCH ? 'mousemove' : 'touchmove');
  var END_EV    = window.PointerEvent ? "pointerup"   : window.MSPointerEvent ? "MSPointerUp"   : (!_HAS_TOUCH ? 'mouseup'   : 'touchend');
  var CANCEL_EV = window.PointerEvent ? "pointerout"  : window.MSPointerEvent ? "MSPointerOut"  : (!_HAS_TOUCH ? 'mouseout'  : 'touchcancel');

  /* Player Names / IDs */
  var commonName, affiliateId;

  /* U.S. KEY CODES */
  var Keyboard = {
        I:73,//more_info
        B:66,//browse
        //F:70,//toggle_fullscreen

        ESC   : 27,
        ENTER : 13,
        TAB   :  9,
        LEFT  : 37,
        UP    : 38,
        RIGHT : 39,
        DOWN  : 40
      };


  /* GOOGLE ANALYTICS, PAGE & EVENT TRACKING
  ################################################*/
  function trackEvent(category, action, label, value){
    category = commonName + " - " + category;
    action   = ( affiliateId ? affiliateId + " - " : "" ) + action;
    if( window.GA_obj && window.GA_obj.trackEvent ) window.GA_obj.trackEvent( category, action, label, value );
  }//trackEvent()


  function init()
  {
    /* Shrink KIDS Logo */
    setTimeout( function(){ $(".brand").addClass("small"); }, 5000 );

    /* Set iScroll Options */
    iScrollOpts = {
      hScroll:false,
      dragScrollBars:!(_HAS_TOUCH || _HAS_POINTER),
      containerClass:"list-container",
      scrollbarClass:( _HAS_TOUCH || _HAS_POINTER ? 'touch ' : '') + 'scrollbar',
      minBarHeight:( _HAS_TOUCH || _HAS_POINTER ? 8 : 36)
    };

    /* Key Board Navigation */
    if( !_HAS_TOUCH || _HAS_POINTER ) $(document).on("keydown", ( _IS_GOOGLE_TV ? onGoogleKeyDown : onKeyDown ) );

    /* Listen for Video Error Events Prior to constructing the player */
    $(document).on(org.pbskids.video.VideoErrorEvent.GEO_RESTRICTED , onVideoError);
    $(document).on(org.pbskids.video.VideoErrorEvent.VIDEO_EXPIRED  , onVideoError);
    $(document).on(org.pbskids.video.VideoErrorEvent.VIDEO_NOT_FOUND, onVideoError);
    $(document).on(org.pbskids.video.VideoErrorEvent.NO_RESPONSE    , onVideoError);
    $('#error-message button').on(START_EV, function(e){ if(playlist) playlist.next(); else closeErrorMessage(); });

    /* Listen for Bridge-Overlay AND Login Events */
    if( !_HIDE_LINKS ) {
      $(document).on("org_pbskids_bridge_BridgeEvent_BridgeOpen"  , onOverlayOpen);
      $(document).on("org_pbskids_bridge_BridgeEvent_BridgeClosed", onOverlayClosed);
      $(document).on("org_pbskids_login_LoginEvent_LoginOpen"     , onOverlayOpen);
      $(document).on("org_pbskids_login_LoginEvent_LoginClosed"   , onOverlayClosed);
    }

    /* Instantiate Video Player :
       The Player object will first run a Flash-Compatibility test via SWfObject.js
       and an iOS check and send the results to the onPlayerComplete() function. If the
       user is on an iDevice or they have Adobe Flash 10.1+ installed then the finalize()
       function is called and the app finishes initializing.
    */
    player = new org.pbskids.video.Player( "video-player", {
      onPlayerComplete      : onPlayerComplete,
      onVideoClick          : _IS_GOOGLE_TV ? "toggle-pause" : "toggle-fullscreen",
      pauseToggleControl    : _IS_GOOGLE_TV ? null : "#controlrack .play-pause",
      muteToggleControl     : _IS_GOOGLE_TV ? null : "#controlrack .toggle-mute",
      captionsToggleControl : _IS_GOOGLE_TV ? null : "#controlrack .toggle-captions",
      timerRemaining        : "#controlrack .timer-remaining",
      scrubber              : "#controlrack .scrubber",
      volumeDisplay         : _IS_GOOGLE_TV ? null : "#volume-slider-tooltip .volume-level",
      verticalVolumeSlider  : _IS_GOOGLE_TV ? null : "#volume-slider-tooltip .volume-slider",
      onHoverOverlay        : _IS_GOOGLE_TV ? null : {url:_CDN + _SITE_ROOT + "video/img/button_big.png"  , width:"43px" , height:"43px", fs_url:_CDN + _SITE_ROOT + "video/img/button_small.png", fs_width:"78px", fs_height:"30px", alignment:"BR"},
      loadingOverlay        : {url:_CDN + _SITE_ROOT + "video/img/looping_bee.gif" , width:"375px", height:"225px", swf:_CDN + _SITE_ROOT + "video/img/looping_bee.swf"}
    });

    view.player = player;
    
  }//init()


  function finalize(playerInstance)
  {
    /* Enable App
    ***************************************************/
    $(".disabled").removeClass("disabled");
    $("button").click(function(e){e.preventDefault();});
    if( !_HAS_TOUCH && !_IS_GOOGLE_TV ) $("#controlrack .hidden").removeClass("hidden");


    /* Init HTML5 Audio for Hover States
    ***************************************************/
    //initAudio();


    /* Integrate into Headband
    ***************************************************/
    if( org.pbskids.parentsBar && org.pbskids.parentsBar.ready ) onHeadbandReady();
    else $(document).on("org_pbskids_parentsbar_HeadbandEvent_HeadbandReady", onHeadbandReady);
    

    /* Instantiate Playlist
    ***************************************************/
     playlist = new org.pbskids.video.PlayList(
       "nowplaying-list", 'playlistItem', playerInstance,
       {iScrollOpts:iScrollOpts, loadingIndicator:"http://pbskids.org/video/img/arrowspin.gif", loadMoreVideosMessage : "Load More", loadMoreButtonClass : "showmore-videos", autoPlay:false, autoPlayNext:!_IS_KINDLE_APP, previousVideoControl: (_IS_GOOGLE_TV ? null : "#controlrack .previous"), nextVideoControl: (_IS_GOOGLE_TV ? null : "#controlrack .next")}
     );

     browsingPlaylist = new org.pbskids.video.PlayList(
       "browsing-list", 'playlistItem', playerInstance,
       {iScrollOpts:iScrollOpts, loadingIndicator:"http://pbskids.org/video/img/arrowspin.gif", loadMoreVideosMessage : "Load More", loadMoreButtonClass : "showmore-videos", autoPlay:false, autoPlayNext:false, disableKeyboard:true}
     );

     justAddedPlaylist = new org.pbskids.video.PlayList(
       "just-added-list", 'playlistItem', playerInstance,
       {iScrollOpts:iScrollOpts, loadingIndicator:"http://pbskids.org/video/img/arrowspin.gif", loadMoreVideosMessage : "Load More", loadMoreButtonClass : "showmore-videos", autoPlay:false, autoPlayNext:false, disableKeyboard:true}
     );

     view.playlist = playlist;


    /* Build/Retrieve iScrolls for lists in Dropdowns
    ***************************************************/
    nowplayingScroll = playlist.iScroll;
    browsingScroll   = browsingPlaylist.iScroll;
    justAddedScroll  = justAddedPlaylist.iScroll;
    showsScroll      = new org.pbskids.iScrollMOD('shows-list-container' , iScrollOpts);
    topicsScroll     = new org.pbskids.iScrollMOD('topics-list-container', iScrollOpts);

    /* iScroll for Character Buttons */
    characterScroll = new org.pbskids.iScrollMOD('character-list', {
      hScroll:false, vScrollbar:false,
      onScrollMove: updateCharacterScroll,
      onScrollEnd: updateCharacterScroll
    });


    /* Add Event Listeners
    ***************************************************/
    playlist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_START   , onLoadingPlaylist , false);
    playlist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_COMPLETE, onCompletePlaylist, false);
    playlist.addEventListener(org.pbskids.video.PlaylistEvent.COPY_COMPLETE   , onCopiedToPlaylist, false);
    playlist.addEventListener(org.pbskids.video.PlaylistEvent.APPEND_COMPLETE , onCompletePlaylist, false);
    playlist.addEventListener(org.pbskids.video.PlaylistEvent.RELEASE_SELECTED, onReleaseSelected , false);

    browsingPlaylist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_START   , onLoadingBrowsingList , false);
    browsingPlaylist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_COMPLETE, onLoadedBrowsingList  , false);
    browsingPlaylist.addEventListener(org.pbskids.video.PlaylistEvent.APPEND_COMPLETE , onLoadedBrowsingList  , false);
    browsingPlaylist.addEventListener(org.pbskids.video.PlaylistEvent.RELEASE_SELECTED, onBrowsingListSelected, false);

    justAddedPlaylist.addEventListener(org.pbskids.video.PlaylistEvent.RELEASE_SELECTED, onJustAddedListSelected, false);


    /* Additional Video Event Listeners */
    $(document).on(org.pbskids.video.VideoEvent.VIDEO_VIEWED, onVideoViewed);


    /* Character Scroll-Buttons */
    $(".character-list-wrapper .scroll-up"   ).click(function(){ scrollCharacters(-1); });
    $(".character-list-wrapper .scroll-down" ).click(function(){ scrollCharacters(1); });


    /* Browsing Controls */
    $("#now-playing-flag"  ).click(function(){ switchBrowsingList( $(this), playlist.getContainerID()         , nowplayingScroll, currentCategory ); trackEvent("Browse", "Now Playing"    ); });
    $("#just-added-flag"   ).click(function(){ switchBrowsingList( $(this), justAddedPlaylist.getContainerID(), justAddedScroll , 'Just Added'    ); trackEvent("Browse", "Just Added"     ); });
    $("#browse-shows-flag" ).click(function(){ switchBrowsingList( $(this), 'shows-list-container'            , showsScroll     , 'Pick a Show'   ); trackEvent("Browse", "Show Selection" ); });
    $("#browse-topics-flag").click(function(){ switchBrowsingList( $(this), 'topics-list-container'           , topicsScroll    , 'Pick a Topic'  ); trackEvent("Browse", "Topic Selection"); });

    $(".video-type-filters .filter-episodes").click(function(e){
      filterPlaylist(true);
      trackEvent("Browse", "Toggle Full Episode" , ( $(this).hasClass("selected") ? "On" : "Off" ) + " - " + $('#list-title').html() );
    });

    $(document).on(org.pbskids.video.VideoEvent.PLAY_STATE_CHANGE, onPlayStateChange);


    /* Add Event Listener for Window-Resize and Resize */
    $(window).resize(onResize);


    /* Add Sponsor Bar */
    if( !_HIDE_LINKS ){
      $("body").append('<article id="sponsors-dropdown" class="closed">' +
                         '<h4>Sponsored by:</h4>' +
                         '<button class="close-sponsors-button" title="Close"/>'+
                         '<ul class="sponsors-list"></ul>'+
                         '</article>');

      $(".close-sponsors-button").click(closeSponsors);
    }


    /* Load & Build Content for Browsing Lists
    ***************************************************/
    buildShowsList();
    buildTopicsList();
    justAddedPlaylist.refresh({
      endindex : 20,
      airedAfter:relativeDay(-7),
      airedBefore:relativeDay(1),
      'return' : 'airdate, expirationdate'
    });


    /* Initial Settings
    ***************************************************/
    /* Video Info and Buttons */
    onReleaseSelected();

    /* Layouts and Visibility */
    $(window).resize();//first resize


    /* GO!
    ***************************************************/
    loadFirstPlaylist();

  }//finalize()


  function onHeadbandReady(e){

    /* Integrate Into Parents-Bar
    ***************************************************/
    if( !_HAS_TOUCH || _HAS_POINTER ){
      var __settingsContent = "<dl class='additional-hotkeys'></dl>"+
                              "<dl>"+
                                "<dt>SHIFT + S</dt> <dd>show/hide settings</dd>" +
                                "<dt>ESC</dt> <dd>close settings</dd>" +
                              "</dl>";


      var __hotkeysModule = org.pbskids.settings.modules.addModule("Keyboard Shortcuts", "", "View shortcuts", __settingsContent);
      $(__hotkeysModule.module).addClass("keyboard-settings");


      var __addHotKeyInfo = function(keyCombo, description){
        $(".settings-panel .additional-hotkeys", __hotkeysModule.module).append( $("<dt>"+ keyCombo +"</dt> <dd>"+ description +"</dd>") );
      };

      // Add Additional Keyboard Shortcut Descriptions
      if( !_IS_GOOGLE_TV ) {
        //Everything but GoogleTV
        __addHotKeyInfo("SPACEBAR/ENTER", "Play and pause the video");
        __addHotKeyInfo("RIGHT ARROW", "skip ahead 10 seconds");
        __addHotKeyInfo("LEFT ARROW" , "skip back 5 seconds");
        __addHotKeyInfo("SHIFT + RIGHT ARROW", "next video");
        __addHotKeyInfo("SHIFT + LEFT ARROW" , "rewind &amp; previous video");

        if(_HAS_TOUCH){
          __addHotKeyInfo("UP ARROW"  , "volume up");
          __addHotKeyInfo("DOWN ARROW", "volume down");
        }
      }
      else{
        //Just for Google TV
        __addHotKeyInfo("PLAY/PAUSE or SPACEBAR", "Play and pause the video");
        __addHotKeyInfo("STOP"   , "Pauses the video");
        __addHotKeyInfo("FORWARD", "fast-forward 10 seconds");
        __addHotKeyInfo("REWIND" , "rewind 5 seconds");

        __addHotKeyInfo("TAB"   , "Navigate between lists");
        __addHotKeyInfo("ARROWS", "Navigate through current list");

        __addHotKeyInfo("NEXT"     , "next video");
        __addHotKeyInfo("PREVIOUS" , "rewind &amp; previous video");
      }

      //Desktop and GoogleTV
      __addHotKeyInfo("SHIFT + I", "open/close video info");
      __addHotKeyInfo("SHIFT + B", "open/close browse menu");
      __addHotKeyInfo("SHIFT + C", "show/hide closed captions");


      // Add Closed Captions Settings Module
      //var __ccSettings = "<div><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></div>";
      //org.pbskids.settings.modules.addModule("Closed Captions", "Change the color, size, and display of closed captioning", "Edit CC settings", __ccSettings, null);

    }//end if ( !_HAS_TOUCH || _HAS_POINTER )
  }//onHeadbandReady()


  function initAudio(){
    if( typeof Howl == "undefined" || (_HAS_TOUCH && !_HAS_POINTER && !_IS_iDEVICE) ) return;

    var supportsMedia = function(mimetype, container) {
      var elem = document.createElement(container);
      if(typeof elem.canPlayType == 'function'){
        var playable = elem.canPlayType(mimetype);
        if((playable.toLowerCase() == 'maybe')||(playable.toLowerCase() == 'probably')){
          return true;
        }
      }
      return false;
    };


    if( ( supportsMedia('audio/mpeg','audio') || supportsMedia('audio/ogg','audio') ) ){
      $.ajax({
        type     : 'GET',
        url      : _AUDIO_LIST_URL,
        dataType : 'json',
        success  : function(audioData){

          var audioResources = [];
          var audioSprite    = {};
          var uiComponents   = [
                ["#controlrack .play-pause", "play"],
                ["#controlrack .previous", "previous"],
                ["#controlrack .next", "next"],

                ["#volume-controls .toggle-volume-slider", "volume"],
                ["#controlrack .toggle-captions", "closed-captioning"],
                [".browsing-panel .browse-tab-wrapper", "browse"],

                ["#now-playing-flag", "now-playing"],
                ["#just-added-flag", "just-added"],
                ["#browse-shows-flag", "shows"],
                ["#browse-topics-flag", "topics"],

                ["#video-panel .brand", "pbs-kids"]
              ];

          for(var i in audioData.resources ){
            audioResources[i] = _SITE_ROOT + audioData.resources[i];
          }

          for(var i in audioData.spritemap ){
            audioSprite[i] = [audioData.spritemap[i].start * 1000, ( audioData.spritemap[i].end - audioData.spritemap[i].start) * 1000 ];
          }

          videoHowls = new Howl({ urls: audioResources, sprite: audioSprite, onload: function(){ audioLoaded = true; } });

          /* Add EventListeners for Volume/MuteState Changes */
          $(document).on(org.pbskids.video.VideoEvent.VOLUME_CHANGE, onVolumeChange);
          $(document).on(org.pbskids.video.VideoEvent.MUTE_CHANGE  , onVolumeChange);

          /* Add onHover Audio to Select UI Components */
          for(var i in uiComponents ){
            $(uiComponents[i][0])
            .attr({"data-audio-id": uiComponents[i][1] })
            .mouseenter(function(){ playAudio( $(this).attr("data-audio-id") ); })
            .mouseleave(stopAudio);
          }
        }
      });
    }
  }//initAudio()


  function loadAndPlayHostSpot()
  {  /* Get and Play Host Spot */
      $.ajax({
        type     : "GET",
        url      : _API_URL + "getVideos/",
        dataType : 'jsonp',
        data     : {
                     group  : _DASH_HOST_SPOTS,
                     player : player.videoType(),
                     flash  : player.isFlashPlayer()
                   },

        fail     : function(){
          if( playlist.hasPlaylist() ) playlist.next();
          else playlist.autoPlay(true);
        },//fail

        success  : function(data)
        {
          var __r = null;
          data = data.items;
          while(data.length){
            var __i = randomInt(data.length - 1);
            __r = data.splice(__i,1)[0];
            if(__r.videos) if(__r.videos[player.videoType()]) break;
            __r = null;
          }

          if(__r) player.loadAndPlay(__r);
          else {
            if( playlist.hasPlaylist() ) playlist.next();
            else playlist.autoPlay(true);
          }

        }//success
      });//ajax()
  }//loadAndPlayHostSpot()


  function loadFirstPlaylist()
  {/* Load Dash's Picks or Deeplinked Content */
    var __opts = {};
    
    if(dl_program || dl_category || dl_pid  || dl_guid ){
      __opts.pid      = (dl_pid      || "");
      __opts.guid     = (dl_guid     || "");
      __opts.category = (dl_category || "");
      __opts.program  = (dl_program  || "");

      playlist.autoPlayNext(false);
      playlist.autoPlay(true);
    }
    else{
      __opts.group = _DASH_PICKS_GROUP;
      loadAndPlayHostSpot();
    }

    playlist.refresh(__opts);//No query params will return the Newest Videos
  }//loadFirstPlaylist()


  function onDragBrowsingPanel(e){
    var point = _HAS_TOUCH ? ( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] ) : _HAS_POINTER ? e.originalEvent : e ;
    if(point) $('.browsing-panel').css("left", Math.min( (point.pageX + characterBarWidth), rightDraggingBound) );
  }//onDragBrowsingPanel()

  function onReleaseBrowsingPanel(e){
    $(document).off(MOVE_EV, onDragBrowsingPanel);
    $(document).off(END_EV , onReleaseBrowsingPanel);
    $(document).off(CANCEL_EV, onReleaseBrowsingPanel);

    var point = _HAS_TOUCH ? ( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] ) : _HAS_POINTER ? e.originalEvent : e ;
    ( (point.pageX + characterBarWidth) < $(document).width() ) ? openBrowsingPanel() : closeBrowsingPanel() ;
  }//onReleaseBrowsingPanel()


  function openBrowsingPanel(){
    if( mobileView ){
      player.pause();
      $('.browsing-panel').resetStyles().addClass("open");
      $(window).scrollTop( $(".browse-tab").offset().top - 14);
    }
    else if( _IS_GOOGLE_TV || _IS_KINDLE_APP ){
      player.pause();
      $('.browsing-panel').addClass("open");
      $('.brand').addClass('hidden');
    }
    else{
      resumePlaying = !player.paused();
      player.pause();

      /* Instead of doing $("#now-playing-flag").click(), just do
       * the following because .click() will dispatch a google-event
       * which it should NOT dispatch for this function
       */
      switchBrowsingList( $("#now-playing-flag"), playlist.getContainerID(), nowplayingScroll, currentCategory );

      $('.browsing-panel')
      .stop()
      .addClass("opening")
      .animate(
        { "left":"182px" }, 1000, function() {
          // Animation complete.
          $('.browsing-panel').resetStyles().addClass("open").removeClass("opening");
          $('.brand').addClass('hidden');
        }
      );

      setTimeout( onResize, 400);
    }
  }//openBrowsingPanel()


  function closeBrowsingPanel(resume){
    if( mobileView ){
      $('.browsing-panel').resetStyles().removeClass("open");
    }
    else if( _IS_GOOGLE_TV || _IS_KINDLE_APP ){
      $('.browsing-panel').removeClass("open");
      if( _IS_GOOGLE_TV ){
        $('.' + _FOCUS_CLASS).removeClass(_FOCUS_CLASS);
        __ci = $( $("#character-list ul li.selected").get(0) || $("#character-list ul li." + _HAD_FOCUS_CLASS).get(0) || $("#character-list ul li").get(0) ).addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
        moveToCharacter( __ci );
      }
      $('.brand').removeClass('hidden');
    }
    else{
      $('.brand').removeClass('hidden');
      $('.browsing-panel')
      .stop()
      .css("left" , $('.browsing-panel').css("left") )
      .removeClass("open opening")
      .animate(
        { "left":"100%" }, 500, function(){
          // Animation complete.
          $('.browsing-panel').resetStyles();
        }
      );

      if(resume === undefined || resume === null) resume = resumePlaying;
      if( !!resume ) player.unpause();
    }
  }//closeBrowsingPanel()


  function onOverlayOpen(e){
    resumePlaying = !player.paused();//capture if video was playing prior to openning bridge
    player.pause();//pause if playing
  }//onBridgeOpen()


  function onOverlayClosed(e){
    if( !!resumePlaying ) player.unpause();//resume playback if video was playing prior to openning bridge
  }//onBridgeClosed()


  function switchBrowsingList(toggleFlag, listContainer, iScrollObject, title){
    $(".list-container").addClass("hidden");
    $("#no-results-message").hide();
    if( toggleFlag ){
      $(".panel-head.toggle-flag.active").removeClass("active");
      $(toggleFlag).addClass("active");
      if( _IS_GOOGLE_TV ){
        $("." + _FOCUS_CLASS).removeClass(_FOCUS_CLASS).addClass(_HAD_FOCUS_CLASS);
        $(toggleFlag).addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
      }
    }

    $('#' + (listContainer || playlist.getContainerID())).removeClass("hidden");
    $('#list-title').html( (title == _DASH_PICKS_GROUP ? dashPicksTitle : title) || "&nbsp;");

    setTimeout( function(){ iScrollObject.refresh(); }, 400 );
    if(iScrollObject == nowplayingScroll) setTimeout( function(){ playlist.scrollToSelectedItem(); }, 800);


    if( iScrollObject == showsScroll || iScrollObject == topicsScroll ){
      $(".video-type-filters").addClass("hidden");
    }
    else{
      $(".video-type-filters").removeClass("hidden");
      enableFilter();//this is needed here really only for JustAdded Playlist, but do for all
      filterPlaylist();
    }
  }//switchBrowsingList()


  function scrollCharacters(direction){
    direction = Math.min(1, Math.max(-1, direction || 1));//direction is either -1 or 1.
    var x = 0;
    var y = 0;
    var bounds = {
          top   : characterScroll.y,
          bottom: characterScroll.y - characterScroll.maxScrollY,
          left  : characterScroll.x,
          right : characterScroll.x - characterScroll.maxScrollX
        };

    if( !mobileView ){
      y = Math.min( Math.max( direction * (characterScroll.wrapperH - 2*verticalPadding) , bounds.top ), bounds.bottom );
      //overshoot to avoid double-click of first/last items during rapid clicking
      if( y >= bounds.bottom - 10 ){
        $(".character-list-wrapper").addClass("at-bottom");
        y += characterScroll.wrapperH * (3/4);
      }
      else if( y <= bounds.top + 10 ){
        $(".character-list-wrapper").addClass("at-top");
        y -= characterScroll.wrapperH * (3/4);
      }
    }
    else{
      x = Math.min( Math.max( direction * (characterScroll.wrapperW - 2*horizontalPadding) , bounds.left ), bounds.right );
      //overshoot to avoid double-click of first/last items during rapid clicking
      if( x >= bounds.right - 10 ){
        $(".character-list-wrapper").addClass("at-right");
        x += characterScroll.wrapperW * (3/4);
      }
      else if( x <= bounds.left + 10 ){
        $(".character-list-wrapper").addClass("at-left");
        x -= characterScroll.wrapperW * (3/4);
      }
    }

    characterScroll.scrollTo(x, y, transitionTime, true);
  }//scrollCharacters()


  function updateCharacterScroll()
  {  /*
      Hide/Show the Scroll Buttons based on the list x-y coordinates
    */
    $(".character-list-wrapper").toggleClass("at-top"   , ( characterScroll.y >= -10 ));
    $(".character-list-wrapper").toggleClass("at-bottom", ( characterScroll.y <= characterScroll.maxScrollY + 10 ));

    $(".character-list-wrapper").toggleClass("at-left"  , ( characterScroll.x >= -10 ));
    $(".character-list-wrapper").toggleClass("at-right" , ( characterScroll.x <= characterScroll.maxScrollX + 10 ));


    /***************************************************************
      IE7 bug fix: without this line the ".scroll-down" button is
      ~5px from being flush with the container upon re-appearing.
      Clicking the body makes it refresh and correct itself. smh.
    ***************************************************************/
    $("body").click();

  }//updateCharacterScroll()

  function moveToCharacter(characterButton){
    characterButton = $(characterButton);
    if( characterButton.length == 0 ) return;
    if( characterButton.length > 1 ) characterButton = characterButton.first();

    if( !mobileView ){
      var topTolerance    = $(".character-list-wrapper").hasClass("at-top")    ? 0 : 30;
      var bottomTolerance = $(".character-list-wrapper").hasClass("at-bottom") ? 0 : 50;

      if( characterButton.position().top + characterButton.height() + characterScroll.y  > characterScroll.wrapperH - bottomTolerance ){
        characterScroll.scrollTo(0, -characterButton.position().top + verticalPadding);
      }
      else if( characterButton.position().top + characterScroll.y < topTolerance ){
        characterScroll.scrollTo(0, -characterButton.position().top + verticalPadding);
      }
    }
    else{
      var leftTolerance  = $(".character-list-wrapper").hasClass("at-left")  ? 0 : 40;
      var rightTolerance = $(".character-list-wrapper").hasClass("at-right") ? 0 : 40;

      if( characterButton.position().left + characterButton.width() + characterScroll.x  > characterScroll.wrapperW - rightTolerance )
        characterScroll.scrollTo(-characterButton.position().left + horizontalPadding, 0);

      else if( characterButton.position().left + characterScroll.x < leftTolerance )
        characterScroll.scrollTo(-characterButton.position().left + horizontalPadding, 0);
    }

  }//moveToCharacter()

  function enableFilter(forceZero){
    var __filter = (".video-type-filters .filter-episodes");
    var __list =  $(".list-container:not(.hidden)");
    var __f = forceZero === true ? 0 : $(".playlistItem" + ".episode", __list).length;
    $(__filter + " .full-ep-count").html(__f);
    $(__filter).toggleClass("disabled", __f === 0 );
  }//enableFilter

  function filterPlaylist(toggleFilter, scrollToSelected){
    var __button = (".video-type-filters .filter-episodes");
    toggleFilter = !!toggleFilter;
    scrollToSelected = !!scrollToSelected;

    if( toggleFilter ) $(__button).toggleClass("selected");
    else $(__button).removeClass("selected");

    filterClass = $(__button).hasClass("selected") ? ".episode" : "" ;

    var __list =  $(".list-container:not(.hidden)");
    var __l = $(".playlistItem", __list).hide().length;
    var __f = $(".playlistItem" + filterClass, __list).resetStyles().length;

    $(__list).toggleClass("no-results", ( __f === 0 && __l > 0 )).toggleClass("filtered", ( filterClass !== "" ) );
    $(".showmore-videos", __list).css("display", (filterClass === "" ? "" : "none" ));

    $(".playlistItem", __list).removeClass("even").removeClass("third").removeClass("fourth").removeClass("fifth").removeClass("sixth");
    $(".playlistItem" + filterClass, __list).filter(function(index){ return index % 2 == 1; }).addClass("even");
    $(".playlistItem" + filterClass, __list).filter(function(index){ return index % 3 == 2; }).addClass("third");
    $(".playlistItem" + filterClass, __list).filter(function(index){ return index % 4 == 3; }).addClass("fourth");
    $(".playlistItem" + filterClass, __list).filter(function(index){ return index % 5 == 4; }).addClass("fifth");
    $(".playlistItem" + filterClass, __list).filter(function(index){ return index % 6 == 5; }).addClass("sixth");

    setTimeout( function(){
      nowplayingScroll.refresh();
      browsingScroll.refresh();
      justAddedScroll.refresh();
    }, 400 );

    if(scrollToSelected) setTimeout( function(){ playlist.scrollToSelectedItem(); }, 800);
  }//filterPlaylist()


  function buildShowsList(){
    $.ajax({
            type     : 'GET',
            url      : _API_URL + "getShows/",
            dataType : 'jsonp',
            data     : { "destination":"national", "return" : "images" },
            success  : onShowslistLoaded
          });
  }//buildShowsList()


  function buildTopicsList(){
    $.ajax({
            type     : 'GET',
            url      : _API_URL + "getCategories/",
            dataType : 'jsonp',
            success  : onTopicslistLoaded
          });
  }//buildTopicsList()


  function relativeDay(offset){
    var __day = new Date();
    __day.setDate(__day.getDate() + offset);
    return ( __day.getFullYear() + "-" + (__day.getMonth() + 1) + "-" + __day.getDate() );
  }//relativeDay()


  function randomInt(upperlimit, lowerlimit){
    var u = !isNaN(upperlimit) ? upperlimit : 1; //doing it this way to allow passing 0 as an upperlimit
    var l = (lowerlimit || 0);
    return Math.min(u, Math.floor(l + Math.random() * (u - l +1)));
  }//randomInt()


  function closeSponsors(e){
    clearInterval(sponsorTimerInterval);
    $("#sponsors-dropdown").addClass("closed");
  }//closeSponsors()


  function displaySponsors(sponsors){
    clearTimeout(sponsorTimeout);

    for( var i = 0; i < sponsors.length ; i++ ){
      $("<img/>")
      .prop({"src": "http://pbskids.org" + sponsors[i].bates_path + "?size=sponsors-200-200", "alt": sponsors[i].name})
      .appendTo(
        $("<a/>")
        .prop({"href":sponsors[i].link, "title":sponsors[i].name, "target":"_blank"})
        .appendTo(
          $("<li/>")
          .appendTo("#sponsors-dropdown .sponsors-list")
        )
        .click(function(e){
          trackEvent("Sponsors", "logoClicked", $(this).attr("title"));
          if(typeof flashBridge == "function") {
            e.preventDefault();
            flashBridge( $(this).attr("href"), $(this).attr("title") );
          }
        })
      );
    }//end for

    $("#sponsors-dropdown").removeClass("closed");
    sponsorTimer = 0;
    sponsorTimerInterval = setInterval(function(){ sponsorTimer ++; }, 1000);
    sponsorTimeout = setTimeout(closeSponsors, sponsorMaxDisplayTime);
    trackEvent("Sponsors", "Open", ( currentRelease.series_title || "No-Series-Title" ) + "|" + ( currentRelease.title || "No-Title" ));
  }//displaySponsors()


  function getPlaylistTitle(e){
    return (e.category !== "New Videos" ? e.category || e.program : e.program);
  }//getPlaylistTitle()


  function closeErrorMessage(){
    if(errorTimeout) clearTimeout(errorTimeout);
    $('#error-message').hide();
    if(player) $('.wrapper-block').removeClass("disabled");
  }//closeErrorMessage()



  /* Event Handlers and Callbacks
  *********************************************/
  function onVolumeChange(e){
    videoHowls.volume( e.volume );
  }//onVolumeChange()


  function onVideoError(e){
    if(errorTimeout) clearTimeout(errorTimeout);
    if(player) player.pause();//just in case it wasn't already stopped
    $('.wrapper-block').addClass("disabled");
    if( e.type == org.pbskids.video.VideoErrorEvent.GEO_RESTRICTED ){
      $('#error-message p.message').html("PBS KIDS Video is restricted to the United States and its territories.<br/>"+
                                         "<small>If you were directed to this page in error, <a style='text-decoration:underline;' href='mailto:audienceservices@pbs.org'>please report the issue here.</a></small>");
      $('#error-message img').attr("src", _CDN + _SITE_ROOT + "video/img/icon_nowatch.png").resetStyles();
      $('#error-message button').hide();
      $('#error-message').css("display","block");
      //var outsideUS = new Howl({ autoplay:true, urls: [_AUDIO_FOLDER_ROOT + "this-video-is-only-available.mp3", _AUDIO_FOLDER_ROOT + "this-video-is-only-available.ogg"] });
    }
    else{
      e.message = e.message.replace(/^Video/,"This video");
      $('#error-message p.message').html("Whoops! " + e.message + ".");
      $('#error-message img').hide();
      $('#error-message button').resetStyles();
      $('#error-message').css("display","block");
      if(playlist) errorTimeout = setTimeout( function(){ playlist.next(); }, errorTimeoutDelay);
      playAudio("whoops");
    }
  }//onVideoError()


  function onPlayerComplete(e){
    if(e.success) {
      commonName  = e.player.commonName();
      affiliateId = e.player.affiliateId();

      $.ajax({//make api request
        type     : "GET",
        url      : _API_URL + "getGroups/",
        dataType : 'jsonp',
        data     : { "endindex" : "1" , "group" : _DASH_PICKS_GROUP },
        success  : function(data)
        {
          dashPicksTitle = "Weekly Pick";
          if( data ) if(data.items) if( data.items[0] ) if( data.items[0].short_description ) dashPicksTitle = data.items[0].short_description;//.replace(/weekly pick: /i, "");
          finalize(e.player);
        }
      });
    }
    else {
      $('#error-message p.message').html(e.message);
      $('#error-message img').attr("src", _CDN + _SITE_ROOT + "video/img/icon_nowatch.png");
      $('#error-message button').hide();
      $('#error-message').css("display","block");
    }
  }//onPlayerComplete()


  function onShowslistLoaded(data){
    /* Arrays for capturing program groups */
    var __groups = { a : [], b : [], c : [], d : [], n : [] };

    var __randomizeArray = function(array){
      var newArray = [];
      while( array.length > 0 ){
        newArray.push( array.splice( randomInt(array.length - 1) , 1 ) );
      }
      return newArray;
    };

    /* Collect Shows into Groups */
    data = data.items;
    for(var d in data){
      /* Assign Metadata object to group */
      if( data[d].title ) {
        (__groups[ (data[d].group || "n").toLowerCase() ] || __groups.n).push(data[d]);

        /* create series/show object to be referenced later upon
           each video load to populate the information dropdown.
        *********************************************************/
        shows[data[d].title] = data[d];
        showTitles.push(data[d].title);

      }//end if
    }//end for
    

    /* Randomize Order within Groups */
    for(var i in __groups) __groups[i] = __randomizeArray( __groups[i] );


    /* Build the Kid's Character List */
    var __charList  = $("#character-list ul");
    var __charModel = $("li", __charList).first().removeClass("hidden");
    __charList.empty();


    /* Build the Parent's Shows List */
    var __gridList  = $("#shows-list");
    var __gridModel = $(".showItem", __gridList).first();
    __gridList.empty();


    /* Resize/Refresh iScroll as images load */
    $('#shows-list').imagesLoaded()
     .always( function( instance ) {
       // fail-safe for when .progress isn't caught.
       // still keep .progress for smoother refreshes
       if(showsScroll) showsScroll.refresh();
     })
     .progress( function( instance, image ) {
       if(image.isLoaded && showsScroll) showsScroll.refresh();
     });


    /* Build Dash's Picks Button */
    var o = __charModel.clone();

    o.attr({
       "title":"Weekly Pick",
       "data-group":_DASH_PICKS_GROUP,
       "data-audio-id":"the-weekly-pick"
     })
     .mouseenter(function(){ playAudio( $(this).attr("data-audio-id") ); })
     .mouseleave(stopAudio)
     .click(onCharacterSelected)
     .on(START_EV , function(e){$(this).addClass("active");})
     .on(END_EV   , function(e){$(this).removeClass("active");})
     .on(CANCEL_EV, function(e){$(this).removeClass("active");})
     .append( $("<img class='transparent-square'/>").attr({"src": _IMAGE_FOLDER_ROOT + "square/dot.png"}) )
     .append( $("<img class='white-circle'/>").attr({"src": _IMAGE_FOLDER_ROOT + "circle/dot.png"}) )
     .appendTo(__charList);


    /* Build Remaining Character Buttons and Shows-Grid */
    var s;//show meta object
    var o1;//character-button dom element
    var o2;//show-grid dom element

    for(var i in __groups){
      for(var j in __groups[i]) {
        s  = __groups[i][j][0];
        o1 = __charModel.clone();
        o2 = __gridModel.clone();

        /* Build Character Button */
        if( true){//s.images[_SQUARE_IMG] && s.images[_SQUARE_IMG].url && s.images[_CIRCLE_IMG] && s.images[_CIRCLE_IMG].url){
          o1.attr({
              "title":s.title,
              "data-program":escape(s.title),
              "data-audio-id":s.title.toLowerCase().replace(/[\+|\?|\'|\!|\&]/g,"").replace(/\s+/g,"-")
            })
            .mouseenter(function(){ playAudio( $(this).attr("data-audio-id") ); })
            .mouseleave(stopAudio)
            .click(onCharacterSelected)
            .on(START_EV , function(e){$(this).addClass("active")   ;})
            .on(END_EV   , function(e){$(this).removeClass("active");})
            .on(CANCEL_EV, function(e){$(this).removeClass("active");})
            .append( $("<img class='transparent-square'/>").attr({"src": (s.images[_SQUARE_IMG] ? s.images[_SQUARE_IMG].url : "") }) )
            .append( $("<img class='white-circle'/>").attr({"src": (s.images[_CIRCLE_IMG] ? s.images[_CIRCLE_IMG].url : "") }) )
            .appendTo(__charList);
        }
        else{
          if(!s.images[_SQUARE_IMG] || !s.images[_SQUARE_IMG].url) _log("Missing Image ('"+_SQUARE_IMG+"') for '" + s.title + "'", s.images);
          if(!s.images[_CIRCLE_IMG] || !s.images[_CIRCLE_IMG].url) _log("Missing Image ('"+_CIRCLE_IMG+"') for '" + s.title + "'", s.images);
        }

        /* Build Grid-List Item */
        if( s.images[_POSTER_IMG] && s.images[_POSTER_IMG].url ){
          $(".series-poster", o2).attr({"src": s.images[_POSTER_IMG].url});
          $(".series-title", o2).html(s.title);
          $(".series-description", o2).html(s.description);
          $(".age-range", o2).html(s.ages);
          $(".ed-goals", o2).html(s["educational goal"]);
          o2.attr({
              "title":s.title,
              "data-program":escape(s.title),
              "data-audio-id":s.title.toLowerCase().replace(/[\+|\?|\'|\!|\&]/g,"").replace(/\s+/g,"-")
            })
            .mouseenter(function(){ playAudio( $(this).attr("data-audio-id") ); })
            .mouseleave(stopAudio)
            .click(onProgramSelected)
            .appendTo(__gridList);
        }
        else{
          _log("Missing Poster Image ('"+_POSTER_IMG+"') for '" + s.title + "'", s.images);
        }
      }//end for j
    }//end for i


    $(".showItem", __gridList).filter(function(index){ return index % 4 == 3; }).addClass("fourth");
    mobileView = null;//reset so the the view-change conditional is entered in onResize
    onResize();//resize to update width of character-carousel

  }//onShowslistLoaded()


  function playAudio(audioSlug){
    if( !videoHowls || !audioSlug || !audioLoaded ) return;
    if( stopAudio() ){
      audioTimeout = setTimeout( function(){ videoHowls.play(audioSlug); } , _AUDIO_DELAY );
    }
  }//playAudio()


  function stopAudio(){
    if( videoHowls && audioLoaded ) {
      if( audioTimeout ) clearTimeout( audioTimeout );
      videoHowls.stop();
    }
    return true;
  }//stopAudio()


  function onTopicslistLoaded(data){
    data = data.items;
    var __list  = $("#topics-list");
    var __groupModel = $(".topics-group", __list).first();

    var __cleantTitle = function(title){ if(!title) return ""; return title.toLowerCase().replace(/\s/g,"-").replace(/\&/g,"and"); };
    var __sortTopics = function (a,b) {
      if ( (a.parent ? a.parent.name : "" ) + a.name < (b.parent ? b.parent.name : "" ) + b.name)
         return -1;
      if ( (a.parent ? a.parent.name : "" ) + a.name > (b.parent ? b.parent.name : "" ) + b.name)
        return 1;
      return 0;
    };//sortTopics()

    data.sort(__sortTopics);
    __list.empty();

    for(i in data){
      var o = $("<li/>").addClass("sub-topic")
              .attr({"data-category" : data[i].name})
              .click(onCategorySelected);

      if( !data[i].parent ){
        g = __groupModel.clone()
            .appendTo( __list )
            .addClass( __cleantTitle(data[i].name) );

        o.html("All " + data[i].name)
         .appendTo($(".sub-topics", g));

        $(".parent-topic", g).html( '<span class="icon ' + __cleantTitle(data[i].name) + '"></span>' + data[i].name );
      }
      else{
        o.html(data[i].name)
         .appendTo(".topics-group." + __cleantTitle(data[i].parent.name) + " .sub-topics");
      }//end if

    }//end for

    if(topicsScroll) setTimeout( function(){ topicsScroll.refresh(); }, 400 );
  }//onTopicslistLoaded()


  function onCharacterSelected(e){
    var __opts = {};
    __opts.program = unescape($(e.currentTarget).attr("data-program") || "");
    __opts.group   = $(e.currentTarget).attr("data-group");

    if( $('.browsing-panel').hasClass("open") || $('.browsing-panel').hasClass("opening") ){
      switchBrowsingList("#browse-shows-flag", browsingPlaylist.getContainerID(), browsingScroll, "");
      browsingPlaylist.refresh(__opts);
      trackEvent("Show Carousel", (__opts.program || __opts.group) , "Browse Show" );
    }
    else{

      if( ( $(e.currentTarget).attr("data-group") || $(e.currentTarget).attr("data-program") ) == escape(currentCategory) ){
        playlist.next();
        trackEvent("Show Carousel", (__opts.program || __opts.group) , "Move to Next Video" );
      }
      else {
        $("#character-list ul li").addClass("disabled");
        player.unload();
        playlist.autoPlay(true);
        //playlist.autoPlayNext(true);

        playlist.refresh(__opts);
        trackEvent("Show Carousel", (__opts.program || __opts.group) , "Starts New Category" );
      }//end if

    }//end if
  }//onCharacterSelected()


  function onProgramSelected(e){
    var __opts = {};
    __opts.program = unescape($(e.currentTarget).attr("data-program") || "");
    browsingPlaylist.refresh(__opts);
    trackEvent("Browse", "Show Selection", __opts.program );
  }//onProgramSelected()


  function onCategorySelected(e){
    var __opts = {};
    __opts.program  = showTitles.join(",");
    __opts.category = $(e.currentTarget).attr("data-category");
    browsingPlaylist.refresh(__opts);
    trackEvent("Browse", "Topic Selection", __opts.category );
  }//onCategorySelected()


  function onLoadingPlaylist(e){
    switchBrowsingList("#now-playing-flag", playlist.getContainerID(), nowplayingScroll, getPlaylistTitle(e));
    enableFilter(true);
  }//onLoadingPlaylist()


  function onCopiedToPlaylist(e){
    switchBrowsingList("#now-playing-flag", playlist.getContainerID(), nowplayingScroll, getPlaylistTitle(e));
    onCompletePlaylist(e);
  }//onCopiedToPlaylist()


  function onCompletePlaylist(e){
    $("#character-list ul li").removeClass("disabled").removeClass("selected");
    $('#character-list ul li[data-program="' + escape(e.program) + '"]').addClass("selected");
    $('#character-list ul li[data-group="' + escape(e.category) + '"]').addClass("selected");
    currentCategory = getPlaylistTitle(e);
    $("#nowplaying-list").toggleClass("series-playlist", $.inArray(e.program, showTitles) > -1 );
    $('#list-title').html( (e.category == _DASH_PICKS_GROUP ? dashPicksTitle : getPlaylistTitle(e)) || "&nbsp;" );//this line may be redundant, but better to be safe especially if not costly to run.
    enableFilter();
    filterPlaylist();

    if( typeof JSON !== "undefined" && Modernizr.localstorage ){
      var __watchedlist = localStorage["/video:watchedlist"] ? JSON.parse( localStorage["/video:watchedlist"] ) : [] ;
      for( var i in __watchedlist ){
        $(".playlistItem.guid_" + __watchedlist[i]).addClass("watched");
      }
    }

    playlist.autoPlay(false);//prevents from autoplaying upon completing a "Load More" (Appending)
    playlist.autoPlayNext(true);//auto plays next video upon the completion of current video

  }//onLoadedPlaylist()


  function onLoadingBrowsingList(e){
    switchBrowsingList(null, browsingPlaylist.getContainerID(), browsingScroll, getPlaylistTitle(e));
    enableFilter(true);
  }//onLoadingBrowsinglist()


  function onLoadedBrowsingList(e){
    if(e.playlist.length == 0 && e.type != org.pbskids.video.PlaylistEvent.APPEND_COMPLETE) $("#no-results-message").css("display","block");
    $("#browsing-list").toggleClass("series-playlist", $.inArray(e.program, showTitles) > -1 );
    enableFilter();
    filterPlaylist();
    setTimeout( function(){ browsingScroll.refresh(); }, 400 );
  }//onLoadedBrowsinglist()


  function onBrowsingListSelected(e){
    browsingPlaylist.abortLoad();
    //playlist.autoPlayNext(true);
    playlist.autoPlay(false);
    playlist.copyFromPlaylist(browsingPlaylist, e.release.guid);
    onReleaseSelected(e);
    browsingPlaylist.purge();
  }//onBrowsingListSelected()


  function onJustAddedListSelected(e){
    justAddedPlaylist.abortLoad();
    //playlist.autoPlayNext(true);
    playlist.autoPlay(false);
    playlist.copyFromPlaylist(justAddedPlaylist, e.release.guid);
    onReleaseSelected(e);
  }//onJustAddedListSelected()


  function onPlayStateChange(e){
    if( e.playState == "playing" ){
      $("#controlrack .play-pause").attr( "data-audio-id",  "pause" );
      closeBrowsingPanel(false);
    }
    else{
      $("#controlrack .play-pause").attr( "data-audio-id",  "play" );
    }
  }//onPlayStateChange()


  function onReleaseSelected(e){
    if(e && e.release){
      closeErrorMessage();
      
      filterPlaylist(false, true);
      currentRelease = e.release;
      
      //clear out sponsors if any
      if( !_HIDE_LINKS ){
        $("#sponsors-dropdown").addClass("closed");
        $("#sponsors-dropdown .sponsors-list").empty();

        if( e.release.series_title && shows[e.release.series_title] ) {
          var s = shows[e.release.series_title];

          //update and show sponsors dropdown
          if( e.release.type && e.release.type.toLowerCase() == "episode" && s.sponsors && s.sponsors.length > 0){
            displaySponsors(s.sponsors);
          }

          //update games/series character image and href url
          $('#series-website-button').addHref(e.release.series_url, (e.release.series_title || ""));
          $('#series-website-button img').attr({"src": s.images[_SQUARE_IMG].url });
          return;
        }//end if e.release.series_title
      }//end if !_HIDE_LINKS
    }//end if e.release

    $('#series-website-button').addHref(false);
  }//onReleaseSelected()


  function onVideoViewed(e){
    if( typeof JSON !== "undefined" && Modernizr.localstorage && e.percentViewed >= _PERCENT_THRESHOLD ){//80%
      var __watchedlist = localStorage["/video:watchedlist"] ? JSON.parse( localStorage["/video:watchedlist"] ) : [] ;
      if( __watchedlist.indexOf(e.release.guid) == -1 ) __watchedlist.push( e.release.guid );

      localStorage["/video:watchedlist"] = JSON.stringify( __watchedlist );
      $(".playlistItem.guid_" + e.release.guid).addClass("watched");
    }

  }//onVideoViewed()


  function onKeyDown(e){
    var keyCode = e.keyCode;
    switch(keyCode){
      case Keyboard.I://more_info
           if( e.shiftKey ) {
            org.pbskids.parentsBar.controller.gotoElement(".video");
            $('#parents-messages .parents-message.video .more-toggle').click();
           }
           break;

      case Keyboard.B://browse
           if( e.shiftKey ) $('.browsing-panel .browse-tab').click();
           break;

      case Keyboard.S://show_settings
           if( e.shiftKey ) settingsTooltip.toggle();
           break;

      case Keyboard.ESC:
           closeBrowsingPanel();
           break;
    }//end switch
  }//onKeyDown()


  function onGoogleKeyDown(e){
    var keyCode = e.keyCode;

    switch(keyCode){
      case Keyboard.I://more_info
            if( e.shiftKey ) {
              org.pbskids.parentsBar.controller.gotoElement(".video");
              $('#parents-messages .parents-message.video .more-toggle').click();
             }
            break;

      case Keyboard.B://browse
            if( e.shiftKey ) $('.browsing-panel .browse-tab').click();
            break;

      case Keyboard.ESC:
            closeBrowsingPanel();
            break;

      case Keyboard.ENTER:
            $("." + _FOCUS_CLASS).click();
            break;

      case Keyboard.TAB:
            //[TODO: some of the following nested if-statements could be combined]
            if( $('.browsing-panel').hasClass("open") ){
              e.preventDefault();

              if( $("#character-list ul li." + _FOCUS_CLASS).removeClass( _FOCUS_CLASS ).addClass(_HAD_FOCUS_CLASS).length > 0 ){
                if(e.shiftKey){
                  $( $(".browsing-lists-container .list-container:not(.hidden) .list ." + _HAD_FOCUS_CLASS ).get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .selected"    ).get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .playlistItem").get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .showItem"    ).get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .sub-topic"   ).get(0)
                  ).addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
                }
                else{
                  $(".browsing-lists-container .panel-head.toggle-flag.active").addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
                }
              }
              else if( $(".browsing-lists-container .panel-head.toggle-flag." + _FOCUS_CLASS).removeClass( _FOCUS_CLASS ).addClass(_HAD_FOCUS_CLASS).length > 0 ){
                if(e.shiftKey){
                  $( $("#character-list ul li." + _HAD_FOCUS_CLASS).get(0) || $("#character-list ul li.selected").get(0) || $("#character-list ul li").get(0) ).addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
                }
                else{
                  $( $(".browsing-lists-container .list-container:not(.hidden) .list ." + _HAD_FOCUS_CLASS ).get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .selected"    ).get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .playlistItem").get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .showItem"    ).get(0) ||
                     $(".browsing-lists-container .list-container:not(.hidden) .list .sub-topic"   ).get(0)
                  ).addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
                }
              }
              else if( $(".browsing-lists-container .list-container:not(.hidden) .list ." + _FOCUS_CLASS).removeClass( _FOCUS_CLASS ).addClass(_HAD_FOCUS_CLASS).length > 0 ){
                if(e.shiftKey){
                  $(".browsing-lists-container .panel-head.toggle-flag.active").addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
                }
                else{
                  $( $("#character-list ul li." + _HAD_FOCUS_CLASS).get(0) || $("#character-list ul li.selected").get(0) || $("#character-list ul li").get(0) ).addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
                }
              }
              else{
                $(".browsing-lists-container .panel-head.toggle-flag.active").addClass(_FOCUS_CLASS).removeClass(_HAD_FOCUS_CLASS);
              }

              break;
            }
            //else continue

      case Keyboard.RIGHT:
      case Keyboard.LEFT:
      case Keyboard.UP:
      case Keyboard.DOWN:
            e.preventDefault();
            var list;
            var listScroll;
            var childElementType;// li, h2, article
            var currentItem;//current item
            var tI;//total indices
            var ct;//count/steps between target and current
            var cI;//current index

            if( $('.browsing-panel').hasClass("open") ){
              var __isCharList = false;

              if( $(".list-container:not(.hidden) .list ." + _FOCUS_CLASS).get(0) ){
                //for playlists
                list = ".list-container:not(.hidden) .list";
                var listID = $(list).attr("id");

                switch( listID ){
                  case "nowplaying-list":
                  case "just-added-list":
                  case "browsing-list":
                    childElementType = "article";
                    ct = ( keyCode == Keyboard.UP || keyCode == Keyboard.DOWN ) ? 3 : 1;

                    if( listID == "nowplaying-list" )
                      listScroll = nowplayingScroll;

                    else if( listID == "just-added-list")
                      listScroll = justAddedScroll;

                    else if( listID == "browsing-list")
                      listScroll = browsingScroll;

                    break;

                  case "shows-list":
                    childElementType = "li";
                    ct = ( keyCode == Keyboard.UP || keyCode == Keyboard.DOWN ) ? 3 : 1;
                    listScroll = showsScroll;
                    break;


                  case "topics-list":
                    childElementType = "li.sub-topic";
                    ct = ( keyCode == Keyboard.UP || keyCode == Keyboard.DOWN ) ? 4 : 1;
                    listScroll = topicsScroll;
                    break;

                }//end switch

                if( keyCode == Keyboard.LEFT || keyCode == Keyboard.UP ) ct *= -1;

              }

              else if( $("#character-list ul ." + _FOCUS_CLASS).get(0) ){
                //for character-list
                list = "#character-list ul";
                childElementType = "li";
                ct = ( keyCode == Keyboard.LEFT || keyCode == Keyboard.UP ) ? -1 : 1;
                listScroll = characterScroll;
              }

              else{
                //move about toggle-flags
                list = ".browsing-lists-container";
                childElementType = "> h2";
                ct = ( keyCode == Keyboard.LEFT || keyCode == Keyboard.UP ) ? -1 : 1;
                listScroll = "toggle-flags";
              }

              currentItem = $(list + " " + childElementType + "." + _FOCUS_CLASS).get(0);
              tI = $(list + " " + childElementType).length;//total number of items in set
              if( e.shiftKey ) ct *= -1;
              cI = $(list + " " + childElementType).index(currentItem);
              cI = (cI + ct + tI) % tI;

              $(list + " " + childElementType + "." + _FOCUS_CLASS).removeClass(_FOCUS_CLASS);
              currentItem = $(list + " " + childElementType).eq(cI).addClass(_FOCUS_CLASS);

              if( listScroll ){
                if( listScroll == characterScroll ) moveToCharacter( currentItem );
                else if( listScroll == "toggle-flags") currentItem.click();
                else if( listScroll.scrollToElement ) listScroll.scrollToElement(currentItem.get(0), 100);
              }

            }
            else{
              list = "#character-list ul";
              childElementType = "li";
              currentItem = $(list + " " + childElementType + "." + _FOCUS_CLASS).get(0);
              ct = 1;

              if( !currentItem ) {
                currentItem = $(list + " " + childElementType + ".selected").get(0) || $(list + " " + childElementType).get(0);
                $(currentItem).addClass(_FOCUS_CLASS);
                moveToCharacter(currentItem);
                return;
              }

              tI = $(list + " " + childElementType).length;//total number of items in set
              if( keyCode == Keyboard.LEFT || keyCode == Keyboard.UP ) ct *= -1;
              if( e.shiftKey ) ct *= -1;

              cI = $(currentItem).index();
              cI = (cI + ct + tI) % tI;

              $(list + " " + childElementType + "." + _FOCUS_CLASS).removeClass(_FOCUS_CLASS);
              currentItem = $(list + " " + childElementType).eq(cI).addClass(_FOCUS_CLASS);
              moveToCharacter(currentItem);
            }

            break;
    }//end switch
  }//onGoogleKeyDown()


  function onResize(){
    var __wasMobile = mobileView;
    mobileView = ( $("#video-panel").width() >= $(window).width() - 4 );

    if( __wasMobile !== mobileView ){
      //if view changes
      $('.browsing-panel .browse-tab').off();

      if( mobileView ){
        $('.brand').removeClass('hidden');
        $("#character-list ul").width( $("#character-list ul li").length * $("#character-list ul li").outerWidth(true) + 2 );
        characterScroll.options.vScroll = false;
        characterScroll.options.hScroll = true;
        characterScroll.options.wheelAction = "none";
        characterScroll.options.onBeforeScrollStart = null;

        $('.browsing-panel .browse-tab').on("click", function(){
           $('.browsing-panel').hasClass("open") ? closeBrowsingPanel() : openBrowsingPanel() ;
        });

        nowplayingScroll.disable();
        showsScroll.disable();
        topicsScroll.disable();
        browsingScroll.disable();
        justAddedScroll.disable();
      }
      else{
        $('.brand').toggleClass('hidden', $('.browsing-panel').hasClass("open"));
        $("#character-list ul").css("width","100%");
        characterScroll.options.vScroll = true;
        characterScroll.options.hScroll = false;
        characterScroll.options.wheelAction = "scroll";
        characterScroll.options.onBeforeScrollStart = function (e) { e.preventDefault(); };

        $('.browsing-panel .browse-tab').on("click", function(){
           $('.browsing-panel').hasClass("open") || $('.browsing-panel').hasClass("opening") ? closeBrowsingPanel() : openBrowsingPanel() ;
        });

        $('.touch .browsing-panel .browse-tab')
         .on("swipeleft" , openBrowsingPanel  )
         .on("swiperight", closeBrowsingPanel )
         .taphold(function(e){
           rightDraggingBound = $(window).width();
           $(document).on(MOVE_EV  , onDragBrowsingPanel);
           $(document).on(END_EV   , onReleaseBrowsingPanel);
           $(document).on(CANCEL_EV, onReleaseBrowsingPanel);
         });

        nowplayingScroll.enable();
        showsScroll.enable();
        topicsScroll.enable();
        browsingScroll.enable();
        justAddedScroll.enable();

      }//end if mobile
    }//end if view changes

    characterScroll.refresh();
    nowplayingScroll.refresh();
    showsScroll.refresh();
    topicsScroll.refresh();
    browsingScroll.refresh();
    justAddedScroll.refresh();
    updateCharacterScroll();

  }//onResize()


  /* Custom jQuery Methods
  *********************************************/
  $.fn.addHref = function(url, title){
    if(!url) $(this).attr({'href': "",'title': ""}).addClass("hidden");
    else $(this).attr({'href': url,'title': (title || "")}).removeClass("hidden");
    return $(this);
  };//$.fn.addHref()


  $.fn.resetStyles = function(){
    return $(this).css({
      'display' : '',
      'padding-top' : '',
      'padding-bottom' : '',
      'padding-right' : '',
      'padding-left' : '',
      'margin-top' : '',
      'margin-bottom' : '',
      'margin-right' : '',
      'margin-left' : '',
      'top' : '',
      'left' : '',
      'right' : '',
      'bottom' : '',
      'overflow' : '',
      'position' : '',
      'width' : '',
      'height' : ''
    });
  };//$.fn.resetStyles()


  /* GO!
  ********************************/
  $(document).ready(init);
      
  return view;

}));

