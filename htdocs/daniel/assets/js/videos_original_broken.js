/*################################################
          Daniel Tiger | PBS KIDS VIDEO
################################################*/
$(function(){
  
  var _CDN               = "http://www-tc.pbskids.org";
  var _SITE_ROOT         = "/shell/";
  
  /* Status Vars */
  var resumePlaying      = false;
  var mobileView        = null;//true or false, but null for initial state

  /* Player and Playlist Controller Objects */
  var player;
  var playlist;

  /* Browser/Device Capabilities */
  var _IS_TOUCH_PAD  = (/hp-tablet/gi).test(navigator.appVersion);
  var _HAS_POINTER   = window.navigator.msPointerEnabled;
  var _HAS_TOUCH     = ('ontouchstart' in window && !_IS_TOUCH_PAD);
  var _IS_iDEVICE    = (/iphone|ipad|ipod/gi).test(navigator.appVersion);
  
  /* Event Types */
  var START_EV  = _HAS_POINTER ? "MSPointerDown" : (!_HAS_TOUCH ? 'mousedown' : 'touchstart');
  var MOVE_EV   = _HAS_POINTER ? "MSPointerMove" : (!_HAS_TOUCH ? 'mousemove' : 'touchmove');
  var END_EV    = _HAS_POINTER ? "MSPointerUp"   : (!_HAS_TOUCH ? 'mouseup'   : 'touchend');
  var CANCEL_EV = _HAS_POINTER ? "MSPointerOut"  : (!_HAS_TOUCH ? 'mouseout'  : 'touchcancel');

  
  /* Sidebar Navigation */
  var SHOW_HOW_MANY = 20;


  /* GOOGLE ANALYTICS, PAGE & EVENT TRACKING
  ################################################*/
  function init(){
    /* Instantiate Video Player :
       The Player object will first run a Flash-Compatibility test via SWfObject.js
       and an iOS check and send the results to the onPlayerComplete() function. If the
       user is on an iDevice or they have Adobe Flash 10.1+ installed then the finalize()
       function is called and the app finishes initializing.
    */
    player = new org.pbskids.video.Player(
      "video-player", {
      onPlayerComplete      : onPlayerComplete,
      onVideoClick          : "toggle-fullscreen",
      pauseToggleControl    : "#controlrack .play-pause",
      muteToggleControl     : "#controlrack .toggle-mute",
      captionsToggleControl : "#controlrack .toggle-captions",
      timerRemaining        : "#controlrack .timer-remaining",
      scrubber              : "#controlrack .scrubber",
      volumeDisplay         : "#volume-slider-tooltip .volume-level",
      verticalVolumeSlider  : "#volume-slider-tooltip .volume-slider",
      onHoverOverlay        : {url:_CDN + _SITE_ROOT + "video/img/button_big.png"  , width:"43px" , height:"43px", fs_url:_CDN + _SITE_ROOT + "video/img/button_small.png", fs_width:"78px", fs_height:"30px", alignment:"BR"},
      loadingOverlay        : {url:_CDN + _SITE_ROOT + "video/img/looping_bee.gif" , width:"375px", height:"225px", swf:_CDN + _SITE_ROOT + "video/img/looping_bee.swf"}
    });

    /* Add Event Listener for Window-Resize and Resize */
    $(window).resize(onResize);

    /* Set up playlist toggle */
    $(".playlist-toggle").on("click", function() {
      var $player = $('#player');
      if ($player.hasClass('mobile-browsing')) {
        window.scrollTo(0, 0);
        $player.removeClass('mobile-browsing');
      }
      else {
        $player.addClass('mobile-browsing');
        var y_position = $('.playback-buttons').offset().top;        
        window.scrollTo(0, y_position);
      }
    });

    // When someone clicks on one of the video buttons, we need to pop them back to the top as well
    $('body').on('click', '.playlistItem', function() {
      window.scrollTo(0,0);
    });

    /* Set playlist filtering */
    $("#playlist-filters a").click( function(){
      var __opts = { 'return' : 'airdate, expirationdate' };//default params for each .refresh() call;
      
      $("#playlist-filters a.current").removeClass("current");
      $(this).addClass("current");

      switch( $(this).attr("data-filter-type") ){
        case 'keyword':
        case 'type':
        case 'category':
          __opts[ $(this).attr("data-filter-type") ] = $(this).attr("data-filter");
          break;

        default:
          //don't modify __opts object and just get all videos available for Daniel Tiger
      }

      /*console.log( "data-filter-type: " + $(this).attr("data-filter-type") );
      console.log("__opts: ");
      console.log(__opts);*/

      playlist.refresh(__opts);

    });

  }//init()


  function finalize(playerInstance)
  {
    /* Enable App
    ***************************************************/
    //$(".disabled").removeClass("disabled");
    //$("button").click(function(e){e.preventDefault();});
    
    playlist = new org.pbskids.video.PlayList(
        "now-playing-list",
        "playlistItem",
         playerInstance,
        {//config object
          loadingIndicator      : "http://www-tc.pbskids.org/video/img/arrowspin.gif",
          loadMoreVideosMessage : "Show More Videos",
          loadMoreButtonClass   : "showmore-videos",
          previousVideoControl  : "#controlrack .previous",
          nextVideoControl      : "#controlrack .next",
          iScrollOpts           : {
            hScroll:false,
            dragScrollBars : !(_HAS_TOUCH || _HAS_POINTER),
            containerClass : "list-container",
            scrollbarClass : ( _HAS_TOUCH || _HAS_POINTER ? 'touch ' : '') + 'scrollbar',
            minBarHeight   : ( _HAS_TOUCH || _HAS_POINTER ? 8 : 36)
          }
        }
    );

    playlist.refresh({
      endindex: SHOW_HOW_MANY
    });

    window.playlist = playlist;

    $(window).resize();//trigger first resize
    
  }//finalize()


  /* Event Handlers and Callbacks
  *********************************************/
  function onPlayerComplete(e){
    if(e.success) {
      finalize(e.player);
    }
    else {
      //player failed to initialize
    }
  }//onPlayerComplete()


  function onResize(){
    var __wasMobile = mobileView;
    mobileView = Boolean( $("#playlist-wrapper").width() > 240 );//!important, PLEASE update this check to something more reliable than just checking the window width

    console.log( "mobileView: " + mobileView );
    console.log( "__wasMobile: " + __wasMobile );

    if( __wasMobile !== mobileView ){
      mobileView ? playlist.iScroll.disable() : playlist.iScroll.enable();
    }//end if view changes

    if (__wasMobile && !mobileView) {
      var $player = $('#player');
      if ($player.hasClass('mobile-browsing')) {
        window.scrollTo(0, 0);
        $player.removeClass('mobile-browsing');
      }
    }

    playlist.iScroll.refresh();    

  }//onResize()


  // scrolling
  $(".scroll-up").on("click",function(){
    console.log('up')
    scrollPlaylist( -1 );
  })

  $(".scroll-down").on("click",function(){
    console.log('down')
    scrollPlaylist( 1 );
  })

  var transitionTime Â  Â  = Â  200;// 0.2 seconds
  var verticalPadding Â  Â = Â  Â 70;// or whatever makes for you

  functionÂ scrollPlaylist(direction){
    direction = Math.min(1, Math.max(-1, direction || 1));//direction is either -1 or 1.
    var iscroll =Â playlist.iScroll;
    var x = 0;
    var y = 0;
    var bounds = {
      top Â  :Â iscroll.y,
      bottom:Â iscroll.y -Â iscroll.maxScrollY,
      left Â :Â iscroll.x,
      right :Â iscroll.x -Â iscroll.maxScrollX
    };

    y = Math.min( Math.max( direction * (iscroll.wrapperH - 2*verticalPadding) , bounds.top ), bounds.bottom );
    
    //overshoot to avoid double-click of first/last items during rapid clicking
    if( y >= bounds.bottom - 10 ){
      y +=Â iscroll.wrapperH * (3/4);
    }
    else if( y <= bounds.top + 10 ){
      y -=Â iscroll.wrapperH * (3/4);
    }

    iscroll.scrollTo(x, y, transitionTime, true);
  }//scrollPlaylist()

  $('.exit').click(function(e) {
    if (document.referrer) {
      e.stopPropagation();
      e.preventDefault();

      window.location = document.referrer;
    }
  });


  /* GO!
  ********************************/
  $(document).ready(init);

});