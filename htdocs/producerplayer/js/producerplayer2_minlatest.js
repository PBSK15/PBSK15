(function(){
  /* globals console, PBS, org */
  "use strict";

  var _APP_NAME = "PBS KIDS PRODUCER PLAYER";
  var _APP_VERS = "3.0.0";
  var _HREF  = (window.top !== window) ? document.referrer : window.location.href;
  var _DEBUG = (/^(((?!www(\-tc)?\.).+)pbskids\.org|pbskids\.localhost)$/).test(window.location.hostname);
  var _CDN   = _DEBUG ? "/" : "https://www-tc.pbskids.org/";
  var _log   = function(message, args, type, force){if( _DEBUG === true || force === true ){if( typeof message === "string" || !!args ){message = _APP_NAME + " ver. " + _APP_VERS + " | " + message; } else{args = message; message = _APP_NAME + " ver. " + _APP_VERS + " | "; } if(typeof console!=="undefined"){if(type === "error" && console.error){console.error(message,args); } else if(type === "error" && window.Error){throw new Error(message); } else if(type === "info" && console.info){console.info(message,args); } else if(type === "warn" && console.warn){console.warn(message,args); }  else if(type === "debug" && console.debug){console.debug(message,args); } else if(console.log){console.log(message,args); } else if(typeof window.debug !== "undefined"){window.debug.log.apply(message,args); } } } };
  var _info  = function(message, args, force){ _log(message, args, "info", force); };
  var _debug = function(message, args, force){ _log(message, args, "debug", force); };
  var _warn  = function(message, args, force){ _log(message, args, "warn", force); };
  var _error = function(message, args, force){ _log(message, args, "error", force); };

  var $, require, define;

  if( typeof PBS !== "undefined" && PBS.KIDS && PBS.KIDS.require && PBS.KIDS.define){
    _debug("FOUND PBS.KIDS.require");
    require = PBS.KIDS.require;
    define  = PBS.KIDS.define;
  }
  else{
    require = window.require;
    define  = window.define;
  }

  var _KIDS_GO_CSS = _CDN + "producerplayer/css/KidsGoSquared.css";
  var _KIDS_PREK_CSS = _CDN + "producerplayer/css/KidsPreschool.css";

  var _KIDS_GO_CLASS = "kids-go-squared";
  var _KIDS_PREK_CLASS = "kids-preschool";
  var _TEMP_CONTAINER_ID = "temp-producer-player-container";

  //Use the legacy wrapper-id for sites that have CSS/JS dependent on it and no means to update their code.
  var _USE_LEGACY_WRAPPER_ID = (/(\:\/\/|\.)pbskids\.org\/(lions\/videos\/|wilsonandditch\/cities\/)/).test(_HREF);

  var _producerPlayer_controller;
  var _producerPlayerID;
  var _containerID;
  var _player;
  var _playlist;
  var _bannerDisplay;

  var _bannerWidth = 278;
  var _bannerHeight = 69;
  var _bannerPadding = 4;
  var _bannerDisplayHeight = _bannerHeight + 2*_bannerPadding;

  var _config;
  var _playerCSS;
  var _playlistCSS;
  var _hasSkipButtons = false;
  var _colorSchemes = {};
  var _firstRun = true;
  var _firstOnLoad = true;

  var _categoriesScroll;
  var _topics;
  var _programs;

  var _IS_TOUCH_PAD = (/hp-tablet/gi).test(navigator.appVersion);
  var _HAS_POINTER  = Boolean(window.PointerEvent || window.MSPointerEvent);
  var _HAS_TOUCH    = ('ontouchstart' in window && !_IS_TOUCH_PAD);

  //Quick and Simple SVG-Support Check
  //https://css-tricks.com/test-support-svg-img/
  var _supportsSVG = document.implementation.hasFeature("https://www.w3.org/TR/SVG11/feature#Image", "1.1") ? true : false;
  var _GET = (function (a) {var i, p, b = {}; if( a !== "" ){for( i = 0; i < a.length; i ++ ) {p = a[i].split('='); if( p.length > 0 ) b[p[0]] = p[1] ? decodeURIComponent( p[1].replace(/\+/g, " ") ) : "" ; } } return b; }(window.location.search.substr(1).split('&')));

  var _deps = [
    {
      name: "KIDS Video Plugin - latest",
      src: _CDN + "pbsk/video/lib/jquery.pbskidsvideo.min-latest.js",
      test: function(){
        return !!window.org.pbskids.video;
      }
    }
  ];//_deps


  function _simpleLoaderSystem(deps, onComplete){
    // Load Dependencies
    _info("Loading dependencies...");
    var _waiting;
    var _check_count = 0;
    var _waiting_interval = 500;//check every half second
    var _max_wait_time = 30000;//30 second timeout

    var _load_next_lib = function(){
      for( var i=0; i<deps.length ; i++ ){
        if( !deps[i].loaded ){
          if( deps[i].test() ){
            deps[i].loaded = true;
            continue;
          }

          var __script = document.createElement("script");
          __script.type = "text/javascript";
          __script.src = deps[i].src;
          _check_count = 0;
          _info("Loading " + deps[i].name + "...");
          document.getElementsByTagName("head")[0].appendChild(__script);
          _waiting = setInterval(_check_deps, _waiting_interval);
          return;
        }
      }
      _info("Loaded all dependencies");
      onComplete();
    };//_load_next_lib()

    var _check_deps = function(){
      _check_count ++;
      for( var i=0; i<deps.length ; i++ ){
        if( !deps[i].loaded ){
          if( deps[i].test() ){
            clearInterval(_waiting);
            deps[i].loaded = true;
            _info("Loaded " + deps[i].name + " in " + (_check_count/2) + " seconds");
            _load_next_lib();
          }
          else if( _check_count >= _max_wait_time / _waiting_interval ){
            clearInterval(_waiting);
            _error("Timed-out attempting to load " + deps[i].name, undefined, true);
          }
          return;
        }
      }
      //Should never get to this far, but just in case
      if( _waiting ){
        clearInterval(_waiting);
        _debug("Somehow it got this far. ::sad face::");
      }
    };//_check_deps()

    _load_next_lib();

  }//_simpleLoaderSystem()



  /* Build Components
  ****************************/
  function _construct() {
    _log("Build Producer Player");

    // Use whatever jQuery instance the player is using
    $ = org.pbskids.video.jQuery;
    _info("Using jQuery v" + $.fn.jquery);

    // Build producerplayer container and replace the temp-container
    _producerPlayerID = $(".producerplayer-wrapper").length + 1;
    _containerID = _USE_LEGACY_WRAPPER_ID ? "playerWrapper" : "producerplayer-" + _producerPlayerID ;

    $("#"+_TEMP_CONTAINER_ID).before(
      $('<div id="' + _containerID + '" class="producerplayer-wrapper"/>').css({
        "text-align": "left",
        "position" : "relative",
        "overflow" : "hidden",
        "width" : _config.containerWidth,
        "height" : _config.containerHeight
      })
    ).remove();

    $(document).ready(function(){
      _loadColorScheme(_config.playerColorScheme, "player", _buildPlayer);
    });
  }//_construct()


  function _buildPlayer(){
    _log("Build Player Component");
    var __onVideoClick;
    var __loadingOverlay;
    var __onHoverOverlay;

    var __component = "#" + _containerID + " .player-wrapper";
    var __componentClass = "";

    var _hasControlRack = true;
    var _hastimerRemaining = false;

    // Default Component Styles (Do this first so that some style may be overridden by skins below)
    // NOTE USED: <playProgressColor/>
    // COULD USE: <controlHighlightColor/>, onhover-state of a control that is currently selected?
    // COULD USE: <pageBackgroundColor/>, maybe the color for the wrapper?
    _addStyle(__component, "background-color", _getColor("player", "backgroundColor"));
    _addStyle(__component + " .video-player", {"width": "100%", "display": "block"});
    _addStyle(__component + " .frame", "background-color", _getColor("player", "frameColor"));

    _addStyle(__component + " .timer-remaining", {"color": _getColor("player", "textColor"), "background-color": _getColor("player", "textBackgroundColor") });

    _addStyle(__component + " .scrubber", "background-color", _getColor("player", "scrubberFrameColor"));
    _addStyle(__component + " .scrubber-track", "background-color", _getColor("player", "loadProgressColor"));//_getColor("player", "scrubTrackColor")
    _addStyle(__component + " .scrubber-thumb", "background-color", _getColor("player", "scrubberColor"));
    _addStyle(__component + "  button.scrubber-thumb", "background-color", _getColor("player", "scrubberColor") + " !important");

    _addStyle(__component + " .controlrack", {"height": _config.controlRackHeight + "px", "background-color": _getColor("player", "controlBackgroundColor")});
    _addStyle(__component + " .controlrack button", "background-color", _getColor("player", "controlFrameColor"));

    _addStyle(__component + " .controlrack button .icon", {"color": _getColor("player", "controlColor"), "border-color": _getColor("player", "controlColor")});
    _addStyle(__component + " .controlrack button .icon:before", "border-color", _getColor("player", "controlColor"));
    _addStyle(__component + " .controlrack button .icon:after", "border-color", _getColor("player", "controlColor"));

    _addStyle(__component + " .controlrack button:hover .icon", {"color": _getColor("player", "controlHoverColor"), "border-color": _getColor("player", "controlHoverColor")});
    _addStyle(__component + " .controlrack button:hover .icon:before", "border-color", _getColor("player", "controlHoverColor"));
    _addStyle(__component + " .controlrack button:hover .icon:after", "border-color", _getColor("player", "controlHoverColor"));

    _addStyle(__component + " .controlrack button:active .icon", {"color": _getColor("player", "controlSelectedColor"), "border-color": _getColor("player", "controlSelectedColor")});
    _addStyle(__component + " .controlrack button:active .icon:before", "border-color", _getColor("player", "controlSelectedColor"));
    _addStyle(__component + " .controlrack button:active .icon:after", "border-color", _getColor("player", "controlSelectedColor"));

    // Build Player Component
    if( (/skinVideoOnly/i).test(_config.playerSkinURL) || (/metaLayout\-empty/i).test(_config.controlLayoutURL) ){
      // NO Controls
      _hasControlRack = false;
      __componentClass = "video-only";
      __onVideoClick = "toggle-pause";

      $("#" + _containerID).append( $('<div class="player-wrapper"/>')
        .append('<div class="frame"><video id="video-player-' + _producerPlayerID + '" class="video-player"/></div>')
      );

      __loadingOverlay = {
        url: _CDN + "producerplayer/img/spinner" + (_supportsSVG ? ".svg" : ".gif"),
        width:"64px", height:"64px",
        color : "black", opacity : 80
      };
    }
    else if( (/metaLayout\-GoSquare\-AllControls/i).test(_config.controlLayoutURL) ){
      // KIDS GO! Control-Rack
      $("#" + _containerID).append( $('<div class="player-wrapper"/>')
        .append('<div class="frame"><video id="video-player-' + _producerPlayerID + '" class="video-player"/></div>')
        .append( $('<div class="controlrack"/>')
          .append( $('<aside class="deep-link-display"/>')
            .append('<h3 class="deep-link-label">Copy URL:</h3>')
            .append('<p class="deep-link-url"/>')
            .append( $('<div class="deep-link-buttons"/>')
              .append(
                $('<button class="deep-link-copy-button">Copy</button>').addClass("mac", navigator.userAgent.indexOf('Mac OS X') != -1).click(_copyDeeplink)
              )
              .append(
                $('<button>Cancel</button>').click(_toggleDeeplink)
              )
            )
          )
          .append('<button class="play-pause go-button" title="Play/Pause"><span class="icon"/></button>')
          .append('<div class="scrubber"><div class="scrubber-track"><button class="scrubber-thumb go-button"></button></div></div>')
          .append( $('<div class="secondary-buttons"/>')
            .append(
              $('<button class="deep-link go-button" title="Link"><span class="icon"/></button>').click(_toggleDeeplink)
            )
            .append('<button class="toggle-fullscreen go-button" title="Fullscreen"><span class="icon"/></button>')
            .append('<button class="toggle-captions go-button" title="Closed Captions"><span class="icon"/></button>')
            .append('<button class="toggle-mute go-button" title="Mute/Unmute"><span class="icon"/></button>')
          )
        )
      );

      _addStyle(__component + " .controlrack .deep-link-display.open", "bottom", _config.controlRackHeight + "px");
      _addStyle(
        __component + " .controlrack .deep-link-display .deep-link-url, " +
        __component + " .controlrack .deep-link-display .deep-link-buttons button", {
          "color": _getColor("player", "controlColor"),
          "border-color": _getColor("player", "controlFrameColor"),
          "background-color": _getColor("player", "controlBackgroundColor")
        }
      );

      $(document).on(org.pbskids.video.VideoEvent.VIDEO_START, _onReleaseLoaded);
    }
    else if( (/metaLayout\-KidsPreschool/i).test(_config.controlLayoutURL) ){
      // KIDS GO! Control-Rack
      _hasSkipButtons = true;
      _hastimerRemaining = true;

      $("#" + _containerID).append( $('<div class="player-wrapper"/>')
        .append('<div class="frame"><video id="video-player-' + _producerPlayerID + '" class="video-player"/></div>')
        .append( $('<div class="controlrack"/>')
          .append('<span class="timer-remaining">00:00</span>')
          .append('<div class="scrubber"><div class="scrubber-track"><button class="scrubber-thumb"></button></div></div>')
          .append( $('<div class="secondary-buttons"/>')
            .append('<button class="toggle-captions" title="Closed Captions"><span class="icon"></span></button>')
            .append('<button class="toggle-fullscreen" title="Fullscreen"><span class="icon"></span></button>')
            .append('<button class="toggle-mute" title="Mute/Unmute"><span class="icon"></span></button>')
          )
          .append( $('<div class="playback-buttons"/>')
            .append('<button class="previous" title="Previous"><span class="icon"></span></button>')
            .append('<button class="play-pause" title="Play/Pause"><span class="icon"></span></button>')
            .append('<button class="next" title="Next"><span class="icon"></span></button>')
          )
        )
      );
    }
    else if( (/\/lions\/VideoControls\.xml/i).test(_config.controlLayoutURL) ){
      // LEGACY SUPPORT: Between the Lions custom control-rack.
      // Same as KIDS GO! Control-Rack, but without the deep-linking button and display.
      $("#" + _containerID).append( $('<div class="player-wrapper"/>')
        .append('<div class="frame"><video id="video-player-' + _producerPlayerID + '" class="video-player"/></div>')
        .append( $('<div class="controlrack"/>')
          .append('<button class="play-pause go-button" title="Play/Pause"><span class="icon"/></button>')
          .append('<div class="scrubber"><div class="scrubber-track"><button class="scrubber-thumb go-button"></button></div></div>')
          .append( $('<div class="secondary-buttons"/>')
            .append('<button class="toggle-fullscreen go-button" title="Fullscreen"><span class="icon"/></button>')
            .append('<button class="toggle-captions go-button" title="Closed Captions"><span class="icon"/></button>')
            .append('<button class="toggle-mute go-button" title="Mute/Unmute"><span class="icon"/></button>')
          )
        ).addClass("remove-deeplink-button")
      );
    }
    else{
      _error("No control-layout was provided", _config.controlLayoutURL, true);
      return;
    }


    // Start Setting up the Skin/CSS
    if( (/skinKidsGoSquared/i).test(_config.playerSkinURL) ){
      // KIDS GO! Skin
      _playerCSS = _KIDS_GO_CSS;
      __componentClass = _KIDS_GO_CLASS;
      __onVideoClick = "toggle-fullscreen";

      __loadingOverlay = {
        url: _CDN + "producerplayer/img/spinner" + (_supportsSVG ? ".svg" : ".gif"),
        width:"64px", height:"64px",
        color : "black", opacity : 80
      };
    }
    else if( (/skinKidsPreschool/i).test(_config.playerSkinURL) ){
      // KIDS PREK Skin
      _playerCSS = _KIDS_PREK_CSS;
      __componentClass = _KIDS_PREK_CLASS;
      __onVideoClick = "toggle-fullscreen";

      __loadingOverlay = {
        url: _CDN + "producerplayer/img/spinner" + (_supportsSVG ? ".svg" : ".gif"),
        width:"64px", height:"64px",
        color : "black", opacity : 80
      };

      _addStyle(__component + " .controlrack", "background", "none");
      _addStyle(__component + " .controlrack button", "background-color", _getColor("player", "controlBackgroundColor"));
    }

    if( !__componentClass ){
      _warn("No skin was provided for the player", _config.playerSkinURL, true);
    }


    // Complete styles on the component-wrapper.
    // Add component class for namespacing styles in case
    // a user decides to load one theme/css file for one component
    // and a different theme/css file for another component.
    $("#" + _containerID + " .player-wrapper").addClass(__componentClass).css({
      "position" : "absolute",
      "width" : _config.playerWidth,
      "height" : _config.playerHeight,
      "top" : _config.playerPaddingTop,
      "left" : _config.playerPaddingLeft + (_config.dockReleaseList === "left" ? ( _config.releaseListWidth + _config.releaseListPaddingLeft) : 0),
    });


    // Build Banner Display if docked above the player
    if( _config.dockBanner === "playertop" ){
      _buildBannerDisplay(__componentClass);
    }


    // Load Player CSS
    if( _playerCSS ){
      $("head").append( $("<link/>").attr({"id": "producerplayer-player-css-" + _producerPlayerID, "type":"text/css", "rel":"stylesheet", "href": _playerCSS}) );
    }

    // Add Video Controller
    _player = new org.pbskids.video.Player(
      'video-player-' + _producerPlayerID,
      {
        debug                   : _DEBUG,
        aspectRatio             : _config.aspectRatio,
        autoPlay                : _config.autoPlay,
        onVideoClick            : __onVideoClick,
        onHoverOverlay          : __onHoverOverlay,
        loadingOverlay          : __loadingOverlay,
        pauseToggleControl      : ( _hasControlRack ? "#" + _containerID + " .controlrack .play-pause" : null ),
        captionsToggleControl   : ( _hasControlRack ? "#" + _containerID + " .controlrack .toggle-captions" : null ),
        fullscreenToggleControl : ( _hasControlRack ? "#" + _containerID + " .controlrack .toggle-fullscreen" : null ),
        muteToggleControl       : ( _hasControlRack ? "#" + _containerID + " .controlrack .toggle-mute" : null ),
        scrubber                : ( _hasControlRack ? "#" + _containerID + " .controlrack .scrubber" : null ),
        timerRemaining          : ( _hastimerRemaining ? "#" + _containerID + " .controlrack .timer-remaining" : null ),
        onPlayerComplete        : function(e){
          if( e.success ){
            if(_config.dockReleaseList === "false"){
              $("#" + _containerID).append(
                $('<div class="playlist-wrapper" style="display:none;"/>').append(
                  $('<ul id="playlist-' + _producerPlayerID + '" class="playlist"/>').append( $('<li class="playlistItem"/>') )
                )
              );
              _addPlaylistController();
            }
            else{
              _loadColorScheme(_config.releaseListColorScheme, "releaseList", _buildPlaylist);
            }
          }
          else{
            _debug("Player Failed to Initialize", e, true);
          }
        }
      }
    );
  }//_buildPlayer()


  function _buildPlaylist(){
    _log("Build Playlist Component");

    var __component = "#" + _containerID + " .playlist-wrapper";
    var __componentClass = "";

    // Define Component Styles and Colors
    // NOT USED: <scrollTrackFrameColor/>
    _addStyle(__component, "background-color", _getColor("releaseList", "frameColor"));

    _addStyle(__component + " .playlistItem", {
      "color": _getColor("releaseList", "textColor"),
      "background-color": _getColor("releaseList", "itemBackgroundColor"),
      "border-color": _getColor("releaseList", "textFrameColor")
    });

    _addStyle(__component + " .playlistItem.alternate", {
      "color": _getColor("releaseList", "text2Color"),
      "background-color": _getColor("releaseList", "itemBackground2Color")
    });

    _addStyle(__component + " .playlistItem.selected", {
      "color": _getColor("releaseList", "textSelectedColor"),
      "background-color": _getColor("releaseList", "itemBackgroundSelectedColor")
    });

    _addStyle(__component + " .playlistItem:hover", {
      "color": _getColor("releaseList", "textHoverColor"),
      "background-color": _getColor("releaseList", "itemBackgroundHoverColor")
    });

    // _addStyle(__component + " .playlistItem .thumb-container", "width", _config.thumbnailWidth + "px");
    // _addStyle(__component + " .playlistItem .thumb-container", "height", _config.thumbnailHeight + "px");
    _addStyle(__component + " .playlistItem .thumb-container", "background-color", _getColor("releaseList", "thumbnailFrameColor"));
    _addStyle(__component + " .playlistItem .video-info", "border-color", _getColor("releaseList", "textFrameColor"));

    _addStyle(__component + " .iScrollContainer", "background-color", _getColor("releaseList", "backgroundColor"));
    _addStyle(__component + " .iScrollContainer .scrollbarV", "background-color", _getColor("releaseList", "scrollTrackColor"));
    _addStyle(__component + " .iScrollContainer .scrollbarH", "background-color", _getColor("releaseList", "scrollTrackColor"));
    _addStyle(__component + " .iScrollContainer .scrollbarV div", "background-color", _getColor("releaseList", "scrollThumbColor"));
    _addStyle(__component + " .iScrollContainer .scrollbarH div", "background-color", _getColor("releaseList", "scrollThumbColor"));

    _addStyle(__component + " .scroll-button", {"background-color": _getColor("releaseList", "scrollButtonColor"), "border-color": _getColor("releaseList", "scrollTrackColor")});
    _addStyle(__component + " .scroll-button:after", "border-color", _getColor("releaseList", "scrollIconColor"));

    _addStyle(__component + " .playlist .showmore-videos", {"color": _getColor("releaseList", "scrollTrackColor"), "background-color": _getColor("releaseList", "scrollThumbColor")});
    _addStyle(__component + " .playlist .appendingIndicator-container", {"color": _getColor("releaseList", "scrollTrackColor"), "background-color": _getColor("releaseList", "scrollThumbColor")});


    // Build Playlist Component
    $("#" + _containerID).append(
      $('<div class="playlist-wrapper"/>').append(
        $('<button class="scroll-up playlist-scroll-button scroll-button"/>').click(function(){
          _scrollList(_playlist.iScroll, -1);
        })
      ).append(
        $('<ul id="playlist-' + _producerPlayerID + '" class="playlist"/>').append(
          $('<li class="playlistItem"/>').append(
            $('<div class="thumb-container"/>')
              .append('<img class="thumbnailkidsgodefault" src="">')
              .append('<span class="fullep-label"><span class="full-label">Full </span>Episode</span>')
          ).append(
            $('<div class="video-info">')
              .append('<span class="video-title"/>')
              .append('&nbsp;(<span class="video-duration"/>)')
              .append('<span class="video-description"/>')
          ).append('<span class="new-label">New</span>')
        ).addClass("cols-" + _config.releaseCols)
      ).append(
        $('<button class="scroll-down playlist-scroll-button scroll-button"/>').click(function(){
          _scrollList(_playlist.iScroll, 1);
        })
      )
    );


    // Apply skin/theme
    if( (/skinKidsGoSquared/i).test(_config.releaseListSkinURL) ){
      // KIDS GO! Skin
      __componentClass = _KIDS_GO_CLASS;
      _playlistCSS = _KIDS_GO_CSS;

      _addStyle(__component + " .playlistItem .fullep-label", {
        "color": _getColor("releaseList", "scrollIconColor"),
        "border-color": _getColor("releaseList", "scrollTrackColor"),
        "background-color": _getColor("releaseList", "scrollButtonColor")
      });
    }
    else if( (/skinKidsPreschool/i).test(_config.releaseListSkinURL) ){
      // KIDS PREK Skin
      __componentClass = _KIDS_PREK_CLASS;
      _playlistCSS = _KIDS_PREK_CSS;

      _addStyle(__component + " .playlistItem .fullep-label",{
        "color": _getColor("releaseList", "scrollIconColor"),
        "border-color": _getColor("releaseList", "scrollTrackColor"),
        "background-color": _getColor("releaseList", "scrollButtonColor")
      });

      _addStyle(__component + " .playlist .showmore-videos", {
        "color": _getColor("releaseList", "textColor"),
        "background-color": _getColor("releaseList", "itemBackgroundColor")
      });

      _addStyle(__component + " .playlist .appendingIndicator-container", {
        "color": _getColor("releaseList", "textColor"),
        "background-color": _getColor("releaseList", "itemBackgroundColor")
      });
    }
    else{
      _error("No skin was provided for the playlist/releaselist", _config.releaseListSkinURL, true);
    }


    // Complete styles on the component-wrapper.
    // Add component class for namespacing styles in case
    // a user decides to load one theme/css file for one component
    // and a different theme/css file for another component.
    $("#" + _containerID + " .playlist-wrapper").addClass(__componentClass).css({
      "position" : "absolute",
      "box-sizing" : "border-box",
      "width" : _config.releaseListWidth,
      "height" : _config.releaseListHeight,
      "left" : _config.releaseListPaddingLeft + (_config.dockReleaseList === "right" ? ( _config.playerWidth + _config.playerPaddingLeft) : 0),
      "top" : _config.releaseListPaddingTop + (_config.dockReleaseList === "bottom" ? ( _config.playerHeight + _config.playerPaddingTop) : 0)
    });


    // Build Banner Display if docked above the playlist
    if( _config.dockBanner === "releaselisttop" ){
      _buildBannerDisplay(__componentClass);
    }


    // Load Playlist CSS if it is different from the Player CSS
    if( _playlistCSS !== _playerCSS ){
      $("head").append( $("<link/>").attr({"id": "producerplayer-playlist-css-" + _producerPlayerID, "type":"text/css", "rel":"stylesheet", "href": _playlistCSS}) );
    }

    _addPlaylistController();

  }//_buildPlaylist()


  function _addPlaylistController(){
    // Add Playlist Controller
    _playlist = new org.pbskids.video.PlayList(
      "playlist-" + _producerPlayerID,
      "playlistItem",
      _player,
      {
        autoPlay              : _config.autoPlay,
        loadingIndicator      :  _CDN + "producerplayer/img/spinner" + (_supportsSVG ? ".svg" : ".gif"),
        loadMoreVideosMessage : "Show More Videos",
        loadMoreButtonClass   : "showmore-videos",
        previousVideoControl  : (_hasSkipButtons ? "#" + _containerID + " .controlrack .previous" : null),
        nextVideoControl      : (_hasSkipButtons ? "#" + _containerID + " .controlrack .next" : null),
        iScrollOpts           : {
          hScroll             : false,
          vScroll             : true,
          containerClass      : "iScrollContainer",
          dragScrollBars      : true,
          minBarHeight        : 36,
          scrollbarClass      : 'scrollbar',
          onScrollMove : function(){ _updateScrollButtons(_playlist.iScroll, "#" + _containerID + " .playlist-wrapper"); },
          onScrollEnd  : function(){ _updateScrollButtons(_playlist.iScroll, "#" + _containerID + " .playlist-wrapper"); }
        }
      }
    );

    if( _bannerDisplay || !_playlist.autoPlay() ){
      _playlist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_COMPLETE, _onLoadedPlaylist, false);
    }

    if( _bannerDisplay ){
      _playlist.addEventListener(org.pbskids.video.PlaylistEvent.REFRESH_START, _onLoadingPlaylist , false);
    }

    if( _player.isStationPlayer() || _bannerDisplay){
      $.ajax({
        url: "https://pbskids.org/pbsk/video/api/getCategories/",
        dataType:"jsonp",
        success : function(response){
          _topics = response.items;
          $.ajax({
            url: "https://pbskids.org/pbsk/video/api/getShows/",
            dataType:"jsonp",
            data: {"return" : "nodefaults,images"},
            success : function(response){
              _programs = response.items;
              // _info("programs:", _programs);
              // _info("topics:", _topics);

              if( _config.category.length > 1 || (_config.category.length === 1 && !_config.autoLoadReleaseList) ){
                _buildCategorylist();
              }
              else{
                _finalize();
              }

              if( _config.autoLoadReleaseList ){
                // Load First Playlist
                _refreshReleaseList();
              }
            }//success
          });
        }//success
      });
    }
    else if( _config.autoLoadReleaseList ){
      // Load First Playlist
      _refreshReleaseList();
    }
  }//_addPlaylistController()


  function _buildBannerDisplay(componentClass) {
    // Build Banner Display
    var __dims;
    var __component =  "#" + _containerID + " .banner-display";

    if( _config.dockBanner === "playertop"){
      __dims = {
        "width" : _config.playerWidth,
        "top" : _config.playerPaddingTop - _bannerDisplayHeight,
        "left" : _config.playerPaddingLeft + (_config.dockReleaseList === "left" ? ( _config.releaseListWidth + _config.releaseListPaddingLeft) : 0)
      };

      if( (/skinKidsPreschool/i).test(_config.playerSkinURL) ){
        _addStyle(__component, {
          "color": _getColor("player", "frameColor"),
          "background-color": _getColor("player", "backgroundColor")
        });
      }
      else{
        _addStyle(__component, {
          "color": _getColor("player", "controlColor"),
          "background-color": _getColor("player", "controlBackgroundColor")
        });
      }
    }
    else if( _config.dockBanner === "releaselisttop"){
      __dims = {
        "width" : _config.releaseListWidth,
        "left" : _config.releaseListPaddingLeft + (_config.dockReleaseList === "right" ? ( _config.playerWidth + _config.playerPaddingLeft) : 0),
        "top" : _config.releaseListPaddingTop - _bannerDisplayHeight + (_config.dockReleaseList === "bottom" ? ( _config.playerHeight + _config.playerPaddingTop) : 0),
      };

      _addStyle(__component, {
        "color": _getColor("releaseList", "textColor"),
        "background-color": _getColor("releaseList", "frameColor")
      });
    }

    if(__dims){
      _addStyle(__component, {
        "font-family": "Arial, sans-serif",
        "font-weight": "bold",
        "text-align": "center",
        "line-height": _bannerHeight + "px",
        "font-size": "16px",
        "text-transform": "uppercase",
        "overflow" : "hidden"
      });

      _addStyle(__component + " .banner-image, " + __component + ":after", {
        "width": _bannerWidth + "px",
        "height": _bannerHeight + "px",
        "margin": _bannerPadding + "px auto",
        "display" : "none"
      });

      _addStyle(__component + " .banner-image.loaded", {
        "display" : "block"
      });

      _addStyle(__component + ":after", {
        "content" : "attr(data-category)",
        "display" : "block",
        "font-size": "2em"
      });

      _addStyle(__component + ".loaded:after", {
        "font-size": "1em"
      });

      _bannerDisplay = $('<div class="banner-display"/>').css({
        "position" : "absolute",
        "width" : __dims.width,
        "height" : _bannerDisplayHeight,
        "top" : __dims.top,
        "left" : __dims.left,
      }).append(
        $('<img class="banner-image"/>').load(_onImageLoaded)
      ).prependTo(
        $("#" + _containerID)
      ).addClass(componentClass).addClass(_config.dockBanner);

      if( _config.category.length >= 1 && !_config.autoLoadReleaseList ){
        _bannerDisplay.attr("data-category","Channels");
      }
    }
  }//_buildBannerDisplay()


  function _buildCategorylist() {
    _log("Build Category List Component");
    var __component = "#" + _containerID + " .playlist-wrapper";

    _addStyle(__component + " button.category-button", {
      "background-color": _getColor("releaseList", "scrollButtonColor"),
      "color": _getColor("releaseList", "scrollIconColor")
    });

    _addStyle(__component + " .categorylistItem .thumb-container", {
      "font-family": "Arial, sans-serif",
      "font-weight": "bold",
      "text-align": "center",
      "height": _bannerHeight + "px",
      "line-height": _bannerHeight + "px",
      "font-size": "16px",
      "text-transform": "uppercase",
      "color": _getColor("releaseList", "textColor"),
      "background-color": _getColor("releaseList", "itemBackgroundColor"),
      "overflow": "hidden",
      "position": "relative"
    });

    _addStyle(__component + " .categorylistItem.program .thumb-container",{
      "height": "107px"
    });

    _addStyle(__component + " .categorylistItem .thumb-container:before", {
      "content": "''",
      "display": "block",
      "border": "solid 6px #FFFFFF",
      "box-sizing": "border-box",
      "position": "absolute",
      "height": "100%",
      "width": "100%"
    });

    _addStyle(__component + " .categorylistItem .thumb-container:after", {
      "content" : "attr(data-category)",
      "display" : "block",
      "padding": "6px",
      "box-sizing": "border-box",
      "height": "100%",
      "line-height": (_bannerHeight - 12) + "px",
    });

    _addStyle(__component + " .categorylistItem .thumb-container .banner-image", {
      "height": _bannerHeight + "px",
      "display" : "none"
    });

    _addStyle(__component + " .categorylistItem .thumb-container .banner-image.loaded", {
      "display": "block",
      "height": "100%",
      "box-sizing": "border-box"
    });

    _addStyle(__component + " .categorylistItem.program .thumb-container .banner-image.loaded",{
      "padding" : "6px"
    });


    // Initially hide categorylist
    _addStyle("button.close-categorylist", "display", "none !important");
    _addStyle(__component + " .categorylist-wrapper", "display", "none !important");

    // On open, show the categorylist
    _addStyle(__component + ".categorylist-open button.close-categorylist", "display", "block !important");
    _addStyle(__component + ".categorylist-open .categorylist-wrapper", "display", "block !important");

    // On open, hide the playlist
    _addStyle(__component + ".categorylist-open button.open-categorylist", "display", "none !important");
    _addStyle(__component + ".categorylist-open .playlist-scroll-button", "display", "none !important");
    _addStyle(__component + ".categorylist-open #playlist-" + _producerPlayerID + "-iScrollContainer", "display", "none !important");


    // Build Categorylist and scroll-buttons
    $(__component).addClass("has-categorylist").append(
      $('<div class="categorylist-wrapper"/>').append(
        $('<button class="scroll-up categorylist-scroll-button scroll-button"/>').click(function(){
          _scrollList(_categoriesScroll, -1);
        })
      ).append(
        $('<div id="categorylist-' + _producerPlayerID + '-iScrollContainer" class="iScrollContainer"/>').append(
          $('<ul id="categorylist-' + _producerPlayerID + '" class="categorylist"/>')
        )
      ).append(
        $('<button class="scroll-down categorylist-scroll-button scroll-button"/>').click(function(){
          _scrollList(_categoriesScroll, 1);
        })
      )
    );


    // Add categories to the list
    for( var i = 0 ; i < _config.category.length ; i++ ){
      var categoryType = undefined;
      _config.category[i] = _config.category[i].replace(/\%20/g," ");
      if( _isTopic(_config.category[i]) ){
        categoryType = "topic";
      }
      else if( _isProgram(_config.category[i]) ){
        categoryType = "program";
      }

      if( categoryType ){
        $('#categorylist-' + _producerPlayerID).append(
          $('<li class="categorylistItem"/>').append(
            $('<div class="thumb-container"/>').attr("data-category", _config.category[i]).append(
              $('<img/>').addClass("banner-image").load(_onImageLoaded).attr({
                "src" : _getCategoryIMG(_config.category[i]),
                "alt" : _config.category[i],
                "title" : _config.category[i]
              })
            )
          ).addClass(categoryType).click( _onCategorySelected.bind(null, _config.category[i], __component) )
        );
      }
      else{
        _warn("'" + _config.category[i] + "' is not a current program or topic. This is possibly due to a typo or it has been retired.", undefined, true);
        _config.category.splice(i, 1);//remove category from list
        i--;
      }
    }


    // Build Categorylist navigation buttons
    if( (/skinKidsGoSquared/i).test(_config.releaseListSkinURL) ){
      // KIDS GO! Skin
      $(__component).append(
        $('<button class="open-categorylist category-button go-button" title="Categories"><span class="icon"/></button>')
      ).append(
        $('<button class="close-categorylist category-button go-button" title="Back to Now Playing"><span class="icon"/></button>')
      );
    }
    else if( (/skinKidsPreschool/i).test(_config.releaseListSkinURL) ){
      // KIDS GO! Skin
      $(__component).append(
        $('<button class="open-categorylist category-button" title="Categories"><span class="icon"/></button>')
      ).append(
        $('<button class="close-categorylist category-button" title="Back to Now Playing"><span class="icon"/></button>')
      );
    }


    // Add Click-events to navigation buttons
    $(__component + " .open-categorylist").click(function(){
      $(__component).addClass("categorylist-open");
      _categoriesScroll.refresh();
    });

    $(__component + " .close-categorylist").click(function(){
      $(__component).removeClass("categorylist-open");
    });


    // Instantiate iScroll
    _categoriesScroll = new org.pbskids.iScrollMOD('categorylist-' + _producerPlayerID + '-iScrollContainer' , {
      hScroll        : false,
      vScroll        : true,
      dragScrollBars : true,
      minBarHeight   : 36,
      scrollbarClass : 'scrollbar',
      onScrollMove   : function(){ _updateScrollButtons(_categoriesScroll, __component + " .categorylist-wrapper"); },
      onScrollEnd    : function(){ _updateScrollButtons(_categoriesScroll, __component + " .categorylist-wrapper"); },
      onRefresh      : function(){
        if(_categoriesScroll && _categoriesScroll.vScrollbarWrapper){
          $(_categoriesScroll.vScrollbarWrapper).css({"position": "absolute", "top": "0px", "right": "0px"});
          _updateScrollButtons(_categoriesScroll, __component + " .categorylist-wrapper");
        }
      }
    });

    if( !_config.autoLoadReleaseList ){
      $(__component).addClass("categorylist-open");
      _categoriesScroll.refresh();
    }

    // Finish!!
    _finalize();

  }//_buildCategorylist()


  function _exposePlayerFunctions(){
    _producerPlayer_controller = {
      //-- Legacy Functions ----
      pausePlayer : _player.pause,
      getPauseState : _player.paused,
      getCurrentPID : _getReleaseInfo.bind(null, "guid"),
      getCurrentGUID : _getReleaseInfo.bind(null, "guid"),
      getCurrentTitle : _getReleaseInfo.bind(null, "title"),
      getCurrentDescription : _getReleaseInfo.bind(null, "description"),
      getCurrentKeywords : _getReleaseInfo.bind(null, "tags"),
      getCurrentThumbnail : _getImageUrl.bind(null, "thumbnailkidsgodefault"),
      getCurrentSeriesUrl : _getReleaseInfo.bind(null, "series_url"),
      getCurrentSeriesTitle : _getReleaseInfo.bind(null, "series_title"),
      resetPlayer : _player.unload,

      //-- Additional Video-Plugin Functions ----
      supportsFullscreen : _player.supportsFullscreen,
      isFullscreen : _player.isFullscreen,
      toggleFullscreen : _player.toggleFullscreen,
      enterFullscreen : _player.enterFullscreen,
      exitFullscreen : _player.exitFullscreen,

      paused : _player.paused,
      muted : _player.muted,
      canSeek : _player.canSeek,
      canPlay : _player.canPlay,

      currentTime : _player.currentTime,
      remainingTime : _player.remainingTime,
      duration : _player.duration,

      pause : _player.pause,
      unpause : _player.unpause,
      playVideo : _player.playVideo,
      togglePause : _player.togglePause,

      aspectRatio : _player.aspectRatio,
      seekToTime : _player.seekToTime,

      mute : _player.mute,
      unmute : _player.unmute,
      volume : _player.volume,

      showingCaptions : _player.showingCaptions,
      toggleCaptions : _player.toggleCaptions,
      showCaptions : _player.showCaptions,
      hideCaptions : _player.hideCaptions,

      showingCaptionSettings : _player.showingCaptionSettings,
      showCaptionSettings : _player.showCaptionSettings,
      hideCaptionSettings : _player.hideCaptionSettings,
      toggleCaptionSettings : _player.toggleCaptionSettings,

      loadAndPlay : _player.loadAndPlay,
      loadAndPause : _player.loadAndPause,

      unload : _player.unload,
      destroy : _player.destroy
    };
  }//_exposePlayerFunctions()


  function _exposePlaylistFunctions(){
    //-- Legacy Functions ----
    _producerPlayer_controller.refreshReleaseList = _refreshReleaseList;
    _producerPlayer_controller.resetReleaseList = _playlist.purge;
    _producerPlayer_controller.hideReleaseList = function(){
      $("#" + _containerID + " .playlist-wrapper").css({"display":"none"});
    };

    //-- Additional Video-Plugin Functions ----
    _producerPlayer_controller.addEventListener = _playlist.addEventListener;
    _producerPlayer_controller.removeEventListener = _playlist.removeEventListener;

    _producerPlayer_controller.iScroll = _playlist.iScroll;
    _producerPlayer_controller.scrollToSelectedItem = _playlist.scrollToSelectedItem;
    _producerPlayer_controller.getContainerID = _playlist.getContainerID;

    _producerPlayer_controller.getListData = _playlist.getListData;
    _producerPlayer_controller.getCategory = _playlist.getCategory;
    _producerPlayer_controller.getProgram = _playlist.getProgram;
    _producerPlayer_controller.getGroup = _playlist.getGroup;
    _producerPlayer_controller.getTotalCount = _playlist.getTotalCount;
    _producerPlayer_controller.getQueryOptions = _playlist.getQueryOptions;

    _producerPlayer_controller.autoPlayNext = _playlist.autoPlayNext;
    _producerPlayer_controller.autoPlay = _playlist.autoPlay;

    _producerPlayer_controller.hasPlaylist = _playlist.hasPlaylist;
    _producerPlayer_controller.loading = _playlist.loading;
    _producerPlayer_controller.abortLoad = _playlist.abortLoad;
    _producerPlayer_controller.canLoadMore = _playlist.canLoadMore;
    _producerPlayer_controller.appendMore = _playlist.appendMore;
    _producerPlayer_controller.appendItem = _playlist.appendItem;
    _producerPlayer_controller.purge = _playlist.purge;
    _producerPlayer_controller.destroy = _playlist.destroy;

    _producerPlayer_controller.selectedIndex = _playlist.selectedIndex;
    _producerPlayer_controller.selectItem = _playlist.selectItem;
    _producerPlayer_controller.setFocusTo = _playlist.setFocusTo;

    _producerPlayer_controller.copyFromPlaylist = _playlist.copyFromPlaylist;
    _producerPlayer_controller.copyPlaylistData = _playlist.copyPlaylistData;

    _producerPlayer_controller.previous = _playlist.previous;
    _producerPlayer_controller.next = _playlist.next;

  }//_exposePlaylistFunctions()


  function _finalize(){
    _log("Finalize()");

    _exposePlayerFunctions();
    if( _playlist ){
      _exposePlaylistFunctions();
    }

    // Maintain legacy producerplayer references
    window.ProducerPlayer = producerplayer.getProducerPlayer();
    document.ProducerPlayer = producerplayer.getProducerPlayer();
  }//_finalize()



  /* UTILS
  ****************************/
  function _validateConfig(config){
    var playerMinWidth = 300;
    var releaseListMinWidth = 0;
    var releaseListDefaultWidth = 300;
    var _isNumber = function(value){
      if( value === null){
        return false
      }
      else if( typeof value === 'boolean' ){
        return false;
      }
      else if(typeof value === 'string' && value.replace(/\s/g,"") === ""){
        return false;
      }
      else{
        return !isNaN(value);
      }
    };

    config.aspectRatio = config.aspectRatio ? config.aspectRatio === "16:9" ? 16/9 : 4/3 : 4/3 ;
    config.autoLoadReleaseList = (config.autoLoadReleaseList !== false && config.autoLoadReleaseList !== "false");
    config.autoPlay = (config.autoPlay !== false && config.autoPlay !== "false");

    config.controlLayoutURL = config.controlLayoutURL || "metaLayout-GoSquare-AllControls";
    config.controlRackHeight = (/(nobottomregion|metalayout\-empty)/).test(config.controlLayoutURL)? 0 : 50;

    config.dockBanner = (/^(releaselisttop|playertop|false)$/i).test(config.dockBanner) ? config.dockBanner.toLowerCase() : "releaselisttop";
    config.dockReleaseList = (/^(left|right|bottom|false)$/i).test(config.dockReleaseList) ? config.dockReleaseList.toLowerCase() : "left" ;
    config.releaseCols = _isNumber(config.releaseCols) && config.releaseCols > 1 ? config.releaseCols : 1;

    config.releaseEndIndex = _isNumber(config.releaseEndIndex) && config.releaseEndIndex > 0 ? config.releaseEndIndex : 20;
    config.category = config.category && config.category !== "undefined" ? config.category.replace(/%27/g,"'").replace(/%26/g,"&").split(",") : [""];
    config.playerUrl = config.playerUrl || _createPlayerURL();

    config.playerSkinURL = config.playerSkinURL || "skinKidsGoSquared";
    config.releaseListSkinURL = config.releaseListSkinURL || "skinKidsGoSquared";

    config.playerColorScheme = config.playerColorScheme || "https://www-tc.pbskids.org/producerplayer/colorschemes/go-scheme.xml";
    config.releaseListColorScheme = config.releaseListColorScheme || "https://www-tc.pbskids.org/producerplayer/colorschemes/go-scheme.xml";

    // Validate config.playerPaddingTop
    if( !_isNumber(config.playerPaddingTop) ){
      if( (/skinKidsPreschool/i).test(config.playerSkinURL) ){
        config.playerPaddingTop = 20;
      }
      else{
        config.playerPaddingTop = 0;
      }
    }

    // Validate config.playerPaddingLeft
    if( !_isNumber(config.playerPaddingLeft) ){
      if( config.dockReleaseList === "left" ){
        config.playerPaddingLeft = _isNumber(config.componentPadding) ? config.componentPadding : 5;
      }
      else if( (/skinKidsPreschool/i).test(config.playerSkinURL) ){
        config.playerPaddingLeft = 20;
      }
      else{
        config.playerPaddingLeft = 0;
      }
    }

    // Validate config.releaseListPaddingTop
    if( !_isNumber(config.releaseListPaddingTop) ){
      if( config.dockReleaseList === "bottom" ){
        config.releaseListPaddingTop = _isNumber(config.componentPadding) ? config.componentPadding : 5;
      }
      else{
        config.releaseListPaddingTop = 0;
      }
    }

    // Validate config.releaseListPaddingLeft
    if( !_isNumber(config.releaseListPaddingLeft) ){
      if( config.dockReleaseList === "right" ){
        config.releaseListPaddingLeft = _isNumber(config.componentPadding) ? config.componentPadding : 5;
      }
      else{
        config.releaseListPaddingLeft = 0;
      }
    }

    // Validate config.playerWidth
    if( _isNumber(config.playerWidth) ){
      Math.max(config.playerWidth, playerMinWidth);
    }
    else if( _isNumber(config.containerWidth) && _isNumber(config.releaseListWidth) ){
      if( config.dockReleaseList === "bottom" || config.dockReleaseList === "false" ){
        config.playerWidth = Math.max(
          config.releaseListPaddingLeft + config.releaseListWidth,
          config.containerWidth - config.playerPaddingLeft,
          playerMinWidth
        );
      }
      else{
        var playerPaddingRight = (/skinKidsPreschool/i).test(config.playerSkinURL) ? 42 : 0;
        config.playerWidth = Math.max(
          config.containerWidth - config.releaseListWidth - config.releaseListPaddingLeft - config.playerPaddingLeft - playerPaddingRight,
          playerMinWidth
        );
      }
    }
    else{
      config.playerWidth = config.aspectRatio < 1.5 ? 480 : 512;
    }

    // Define the player height AFTER validating config.playerWidth
    config.playerHeight = config.playerWidth / config.aspectRatio + config.controlRackHeight;

    // Define the release height AFTER defining config.playerHeight
    config.releaseListHeight = _isNumber(config.releaseListHeight) ? config.releaseListHeight : config.playerHeight;

    // Validate config.releaseListWidth
    if( _isNumber(config.releaseListWidth) ){
      config.releaseListWidth = Math.max(config.releaseListWidth, releaseListMinWidth);
    }
    else{
      config.releaseListWidth = config.dockReleaseList === "bottom" ? config.playerWidth : releaseListDefaultWidth;
    }

    // Validate positioning of the banner
    if(config.dockBanner === "playertop"){
      config.playerPaddingTop += _bannerDisplayHeight;
      if( config.dockReleaseList !== "bottom" ){
        config.releaseListHeight += _bannerDisplayHeight;
      }
    }
    else if(config.dockBanner === "releaselisttop"){
      config.releaseListHeight -= _bannerDisplayHeight;
      config.releaseListPaddingTop += _bannerDisplayHeight;
    }

    // Validate config.containerWidth
    if( !_isNumber(config.containerWidth) ){
      if( config.dockReleaseList === "false" ){
        config.containerWidth = config.playerPaddingLeft + config.playerWidth;
      }
      else if( config.dockReleaseList === "bottom" ){
        config.containerWidth = Math.max(config.releaseListPaddingLeft + config.releaseListWidth, config.playerPaddingLeft + config.playerWidth);
      }
      else{
        config.containerWidth = config.playerPaddingLeft + config.playerWidth + config.releaseListPaddingLeft + config.releaseListWidth;
      }
    }

    // Validate config.containerHeight
    if( !_isNumber(config.containerHeight) ){
      if( config.dockReleaseList === "false" ){
        config.containerHeight = config.playerPaddingTop + config.playerHeight;
      }
      else if( config.dockReleaseList === "bottom" ){
        config.containerHeight = config.playerPaddingTop + config.playerHeight + config.releaseListPaddingTop + config.releaseListHeight;
      }
      else{
        config.containerHeight = Math.max(config.playerPaddingTop + config.playerHeight, config.releaseListPaddingTop + config.releaseListHeight);
      }
    }

    return config;
  }//_validateConfig()


  function _loadColorScheme(url, component, onComplete){
    _log("_loadColorScheme()", url);
    function __parseXML(xml){
      _colorSchemes[component] = $(component, xml);
      onComplete.apply(null);
    }

    if( (/</).test(url) ){
      __parseXML( $(url) );
    }
    else{
      $.ajax({
        url: url,
        dataType: "xml",
        success: __parseXML
      });
    }
  }//_loadColorScheme()


  function _getColor(component, item, defaultColor){
    var color = $(item, _colorSchemes[component]).text() || defaultColor || "0x000000";
    return color.replace("0x", "#");
  }//_getColor()


  function _addStyle(component, property, value){
    // Add generated-css to the document head
    var customStyles = $("style.producer-player-custom-styles-" + _producerPlayerID);
    if( !customStyles.get(0) ){
      customStyles = $('<style class="producer-player-custom-styles-' + _producerPlayerID + '"/>').appendTo(  $("head") );
    }

    if(typeof property === "string"){
      customStyles.html( customStyles.html() + component + "{\n\t" + property + " : " + value +";\n}\n" );
    }
    else{
      var styles = "";
      for(var prop in property){
        styles += "\t" + prop + " : " + property[prop] +";\n";
      }
      //TODO: May change the following to .text() instead of .html()
      customStyles.html( customStyles.html() + component + "{\n" + styles + "}\n" );
    }
  }//_addStyle()


  function _toggleDeeplink(){
    $("#" + _containerID + " .player-wrapper .deep-link-display").toggleClass("open");
  }//_toggleDeeplink()


  function _copyDeeplink(e){
    var __selectText = function(element){
      var range, selection;
      if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
      } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    };

    var __clearSelection = function() {
      if ( document.selection ) {
          document.selection.empty();
      } else if ( window.getSelection ) {
          window.getSelection().removeAllRanges();
      }
    }

    __selectText( $("#" + _containerID + " .player-wrapper .deep-link-display .deep-link-url")[0] );

    try {
      // copy text
      if( document.execCommand('copy') || navigator.userAgent.indexOf('Chrome') != -1 ){
        // Chrome always returns false for document.execCommand(), but we know that clipboard
        // support is available on it so treat as success.
        __clearSelection();
        $(e.target).addClass("success");
      }
      else{
        $(e.target).addClass("failed");
      }
    }
    catch (err) {
      $(e.target).addClass("failed");
    }
  }//_copyDeeplink()


  function _onReleaseLoaded(e){
    // Update deeplink url
    var deepLinkUrl = _config.playerUrl.replace("pid=","guid=").replace("{releasePID}", e.release.guid).replace("{releaseguid}", e.release.guid);
    deepLinkUrl = deepLinkUrl.replace("{releaseProgram}", _player.isStationPlayer() ? e.release.series_title : "").replace(/\s/g,"%20");

    // Strip-out empty get params
    deepLinkUrl = deepLinkUrl.replace("guid=&","").replace("program=&","").replace("category=&","");

    // Update contents of deeplink display
    $("#" + _containerID + " .player-wrapper .deep-link-display .deep-link-url").html(deepLinkUrl);
    $("#" + _containerID + " .player-wrapper .deep-link-display .deep-link-copy-button").removeClass("success").removeClass("failed");

  }//_onReleaseLoaded()


  function _createPlayerURL(){
    var href = _HREF;

    if( (/[&?]pid=/i).test(href) ){
      href = href.replace(/([&?])pid=[A-Za-z0-9_-]{1,32}&??/gi, "$1guid={releaseguid}");
    }
    else if( (/[&?]guid=/i).test(href) ){
      href = href.replace(/([&?])guid=[A-Za-z0-9_-]*&??/gi, "$1guid={releaseguid}");
    }
    else{
      href = href + (href.indexOf("?") == -1 ? ("?guid={releaseguid}") : ("&guid={releaseguid}"));
    }

    if( (/[&?]program=/i).test(href) ){
      href = href.replace(/([&?])program=[^&]*/gi, "program={releaseProgram}");
    }
    else{
      href = href + (href.indexOf("?") == -1 ? ("?program={releaseProgram}") : ("&program={releaseProgram}"));
    }

    _debug("_HREF", _HREF);
    _debug("href", href);

    return href;
  }//_createPlayerURL()


  function _getReleaseInfo(field){
    var release = _player.currentRelease();
    if( !release ) return "";

    var data = release[field];
    if( !data ) return "";

    return typeof data === "string" ? data : data.join(",");
  }//_getReleaseInfo()


  function _getImageUrl(imageName){
    var images = _getReleaseInfo("images");
    return images[imageName].url;
  }//_getImageUrl()


  function _isGUID(id){
    return (/[0-9a-z\-]{36}/).test(id);
  }//_isGUID()


  function _isPID(id){
    return (/[0-9A-z_]{32}/).test(id);
  }//_isPID


  function _getDeeplinkID(){
    // Get the favoritePIDs for the "Parents/Teacher Player"
    return (_GET.guid || _GET.pid || _config.guids || _config.videoPID || _config.favoritePIDs || "");
  }//_getDeeplinkID()


  function _isTopic(category){
    var pattern = new RegExp("^" + category.replace(/\+/g,"\\+").replace(/\-/g,"\\-") + "$", "i");
    for(var i = 0 ; i < _topics.length ; i++){
      if( pattern.test(_topics[i].name) ){
        //_debug("Found Topic", {category:category, matched:_topics[i].name}, true);
        return true;
      }
    }
    return false;
  }//_isTopic()


  function _isProgram(category){
    var pattern = new RegExp("^" + category.replace(/\+/g,"\\+").replace(/\-/g,"\\-") + "$", "i");
    for(var i = 0 ; i < _programs.length ; i++){
      if( pattern.test(_programs[i].title) ){
        //_debug("Found Program", {category:category, matched:_programs[i].title}, true);
        return true;
      }
    }
    return false;
  }//_isProgram()


  function _getCategoryIMG(category){
    var pattern = new RegExp("^" + category.replace(/\+/g,"\\+").replace(/\-/g,"\\-") + "$", "i");
    var i;
    for(i = 0 ; i < _programs.length ; i++){
      if( pattern.test(_programs[i].title) ){
        if( _programs[i].images["program-showcase"] && _programs[i].images["program-showcase"].url ){
          return _programs[i].images["program-showcase"].url;
        }
        return "";
      }
    }

    for(i = 0 ; i < _topics.length ; i++){
      if( pattern.test(_topics[i].name) ){
        if( _topics[i].images["program-kids-channel"] && _topics[i].images["program-kids-channel"].url ){
          return _topics[i].images["program-kids-channel"].url;
        }
        return "";
      }
    }

    return "";
  }//_getCategoryIMG()


  function _scrollList(iscroll, direction){
    if( iscroll ){
      var bounds = {
        top   : iscroll.y,
        bottom: iscroll.y - iscroll.maxScrollY
      };

      var y = Math.min( Math.max( direction * iscroll.wrapperH , bounds.top ), bounds.bottom );
      iscroll.scrollTo(0, y, 200, true);
    }
  }//_scrollList()


  function _updateScrollButtons(iscroll, container){
    $(container).toggleClass("at-top"   , ( iscroll.y >= -10 ));
    $(container).toggleClass("at-bottom", ( iscroll.y <= iscroll.maxScrollY + 10 ));
  }//_updateScrollButtons()


  function _onImageLoaded(e){
    $(e.target).addClass("loaded");
  }//_onImageLoaded()


  function _onCategorySelected(category, container){
    _refreshReleaseList(category);
    $(container).removeClass("categorylist-open");
  }//_onCategorySelected()


  function _refreshReleaseList(category, id, keywords, search, isClip, selectID){
    /*@**************************************************************************************
      @category:String (default = null) â€” Defaults to "" (empty quotes). The category
      you want to load, i.e. "Monkeys".

      @pid:String (default = null) â€” Defaults to null and is omitted from the query
      if null. This is good if you want to load just ONE specific clip.
      This parameter can also be used to load a list of specific clips by submitting
      a comma-delimited string of pids.
      i.e. "l9ke892kj30dk2kd30fj3kfi4kcnois2, 84idjmekdoeo8rkdrb4ms0oekfh1lr65".

      @keywords:String (default = null) â€” Defaults to null and is omitted from the
      query if null. A comma-delimited string of keywords, i.e. "green, big, monkeys".

      @search:String !!DEPRECATED!!

      @isClip:String(default = null) â€” Defaults to null and is omitted from the query
      if isClip has a value of anything other than "true" or "false". If omitted from
      query then a mix of clips and full episodes is loaded;  If isClip == "true" then
      only clips will be loaded; if "false", only full episodes will be loaded.

      @selectID:String(default = null) â€” Designates the release which should play
      first upon completion of loading the new realeaselist; if not set then the first
      clip in the realeaselist will play.
    ****************************************************************************************/
    _log("_refreshReleaseList()");

    var _options = {
      "status" : "available",
      "endindex" : _config.releaseEndIndex,
      "return" : "type,airdate,tags,captions,images"
    };

    _player.unload();

    if(_firstRun) {
      // Get the favoritePIDs for the "Parents/Teacher Player"
      id = (id || _getDeeplinkID());
      keywords = keywords || _config.keywords || _GET.keywords;

      // Set First Category
      category = category || _GET.category || _config.category[0];

      _firstRun = false;
    }

    id = id || selectID;

    if(id){
      var __ids = id.replace(/\s/g,"").split(",");
      var __pids = "";
      var __guids = "";

      for(var i = 0; i < __ids.length ; i++){
        if( _isPID(__ids[i]) ){
          //ex: z8Ec9Lcn_uPzwUeHAOuqcNQN6x5UdKPZ
          __pids  += "," + __ids;
        }
        else if( _isGUID(__ids[i]) ){
          //ex: 8fc7bdf5-58aa-43f9-a66a-415f6d252ed2
          __guids += "," + __ids;
        }
      }

      if( __pids ){
        _options.pid =  __pids.substring(1);
      }

      if( __guids ){
        _options.guid = __guids.substring(1);
      }
    }

    if( keywords ){
      _options.keywords = keywords;
    }

    if( selectID || id ){
      _options.selectID = (selectID || id).replace(/\s/g,"").split(",")[0];
    }

    if( (/^true$/i).test(isClip) ){
      _options.type = "Clip";
    }
    else if( (/^false$/i).test(isClip) ){
      _options.type = "Episode";
    }

    if( category ){
      _log("category:",category);
      if( _player.isStationPlayer() && _isProgram(category) ){
        _options.program = category;
      }
      else{
        _options.category = category;
      }
    }

    _playlist.refresh(_options);
    _log("_refreshReleaseList: options = ", _options);

  }//_refreshReleaseList()


  function _onLoadingPlaylist(e){
    _info("_onLoadingPlaylist() e", e);
    $(_bannerDisplay).attr("data-category", "Loading...").removeClass("loaded");
    $("img", _bannerDisplay).removeClass("loaded").attr({
      "src" : "",//_EMPTY_GIF,
      "title" : "Loading...",
      "alt" : "Loading..."
    });
  }//_onLoadingPlaylist()


  function _onLoadedPlaylist(e){
    _info("_onLoadedPlaylist() e", e);

    if(_bannerDisplay){
      // Display the category if it exists, is not "New Videos", and has a banner image
      // otherwise try and use the program name; If no program name then, just go ahead
      // and use the category regardless of what it is.
      var __category = ( e.category && e.category !== "New Videos" && _getCategoryIMG(e.category)) ? e.category : e.program || e.category ;

      $(_bannerDisplay).attr("data-category", __category).addClass("loaded");
      $("img", _bannerDisplay).attr({
        "src" : _getCategoryIMG(__category),
        "title" : __category,
        "alt" : __category
      });
    }

    if(_firstOnLoad){
      _firstOnLoad = false;
      if( !_playlist.autoPlay() ){
        // Simply load and do not play the
        // first video in the playlist.
        _playlist.loadNext();

        // Future onloads will autoplay
        _playlist.autoPlay(true);

        if( !_bannerDisplay ){
          _playlist.removeEventListener(org.pbskids.video.PlaylistEvent.REFRESH_COMPLETE, _onLoadedPlaylist, false);
        }
      }
    }
  }//_onLoadedPlaylist()



  /* Construct Legacy Object
  ****************************/
  var producerplayer = {
    init : function (config, elementID) {
      // BUILD THIS DUDE NOW!! Because reasons.
      if( !elementID || !document.getElementById(elementID) ){
        _log("Create Temp Container");
        document.writeln('<div id="' + _TEMP_CONTAINER_ID + '"></div>');
      }
      else {
        _log("Append Temp Container to #" + elementID);
        var _el = document.createElement("div");
        _el.id = _TEMP_CONTAINER_ID;
        document.getElementById(elementID).appendChild(_el);
      }

      _config = _validateConfig(config);
      _info("Validated config:", _config);

      if( !require ){
        // Not under pbskids.org (possibly a station site).
        // Dependencies will be loaded via the .init method.
        _debug("No Require-Loader-System found.");
        _simpleLoaderSystem(_deps, _construct);
      }
      else if( require.specified("jquery") && require.specified("jquery-video") ){
        _debug("Load Dependencies via Require. reguire-config = ", require.s.contexts._.config);
        require(["jquery","jquery-video"], function(jquery){
          $ = jquery;
          _construct();
        });
      }
      else{
        _debug("Dependencies are not specified in the Require config. Load Dependencies upon calling the .init() method. reguire-config = ", require.s.contexts._.config);
        _simpleLoaderSystem(_deps, _construct);
      }
    },//init()

    getProducerPlayer : function(){
      if( _player ){
        return _producerPlayer_controller;
      }
      else{
        var message = "Please Initialize a Producer Player First";
        _error(message, null, true);
        return { message : message };
      }
    }
  };


  //export to global namespace
  window.org = window.org || {};
  window.org.pbskids = window.org.pbskids || {};
  window.org.pbskids.producerplayer = producerplayer;

  //legacy object
  window.pbs = window.pbs || {};
  window.pbs.kidsgo = window.pbs.kidsgo || {};
  window.pbs.kidsgo.producerplayer = producerplayer;

}());

