/**
 * PBS KIDS Login
 *
 * @author Galen Lockwood
 * @email glockwood@pbs.org
 *
 * @author Renzo Olguin
 * @email rmolguin@pbs.org
 */
(function(){
  'use strict';
  //========================================================
  var _APP_NAME = "PBS KIDS LOGIN";
  var _APP_VERSION = "3.0";
  var _DEBUG=window.location.hostname.match(/^((?!www(\-tc)?\.).+)pbskids\.org$/) ? true : false;//only debug on subdomains of pbskids.org
  var _log=function(message,args,type,force){if(_DEBUG===true||force===true){if( typeof message == "string" || !!args ){ message = _APP_NAME + " ver. " + _APP_VERSION + " | " + message;} else { args = message; message = _APP_NAME + " ver. " + _APP_VERSION + " | "; } if(typeof console!=="undefined"){if(type=="error")if(console.error){console.error(message,args);return;}else if(window.Error)throw new Error(message);if(type=="info"&&console.info){console.info(message,args);return;}if(type=="warn"&&console.warn){console.warn(message,args);return;}if(console.log)console.log(message,args);}else if(window.debug)window.debug.log.apply(message,args);}};
  var _createPackage = function(packagePath){var pak = ( typeof exports !== 'undefined' ) ? exports : window ; var dir; if( typeof packagePath === 'string' ){dir = packagePath.split("."); for( var i = 0; i < dir.length; i++ ){if( !pak[dir[i]] ) pak[dir[i]] = {}; pak = pak[dir[i]]; } } return pak; };
  var _getCookie = function(c_name){var c_value = document.cookie; var c_start = c_value.indexOf( " " + c_name + "=" ); if( c_start == -1 ){c_start = c_value.indexOf( c_name + "=" ); } if( c_start == -1 ){c_value = null; } else{c_start = c_value.indexOf( "=", c_start ) + 1; var c_end = c_value.indexOf( ";", c_start ); if( c_end == -1 ){c_end = c_value.length; } c_value = unescape( c_value.substring( c_start, c_end ) ); } return c_value; };
  var _deleteCookie = function(c_name) { document.cookie = c_name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/'; };

  //Start Building
  //========================================================
  (function( require, define, factory ){
    if( typeof define === "function" && define.amd ){
      //Global AMD for requireJS
      define("login", ["jquery", "login-compatibility"], factory);
    }
    else{
      //Assume jQuery is directly loaded via <script/>
      factory( jQuery );
    }

  }(PBS.KIDS.require, PBS.KIDS.define, function($){

    var loginClass;//top level class | org.pbskids.login
    var utils = {};//top level object for utils

    var audioLoaded = false;
    var loginHowls;//Howls (Howler) for playing audio in audioSprite

    var _LOGIN_URL  = "https://" + window.location.host + "/go/apps/auth/prompt/";
    var _LOGOUT_URL = "";

    var DEFAULT_WINDOW_WIDTH  = 600;
    var DEFAULT_WINDOW_HEIGHT = 200;
    var WINDOW_BORDER_WIDTH   =  10;
    var ANIMATION_DURATION    = 500;

    var _IS_TOUCH_PAD = (/hp-tablet/gi).test(navigator.appVersion);
    var _HAS_POINTER  = Boolean(window.PointerEvent || window.MSPointerEvent);
    var _HAS_TOUCH    = ('ontouchstart' in window && !_IS_TOUCH_PAD);
    var _FORCE_TO_FULLSCREEN = _HAS_TOUCH;


    var href            = ( window.top != window ) ? document.referrer : window.location.href ;
    var _SITE_ROOT      = ( href.match(/\/~/) ? href.substring(0,href.indexOf("site") + 4) + "/" : "/shell/" );
    var _AUDIO_LIST_URL = _SITE_ROOT + "audio/views/login/audiosprite.json";

    var pbsLoginChannel = null;//JSChannel


    function init(){
      loginClass = _createPackage("org.pbskids.login");
      loginClass.ready = false;
      initEvents();
      initPublicMethods();
      checkLogin();

      $(document).ready(function() {
        //Find and update in-page login(s)
        $('a[href="' + _LOGIN_URL +'?destination="]').removeAttr('href').attr('data-action', 'pbskids-login-sign-in');

        //Add click-event handlers to login/out buttons
        $("[data-action='pbskids-login-sign-in']").click(function(e){ loginClass.displayLogin(null); });
        $("[data-action='pbskids-login-sign-out']").click(loginClass.logout);
        $("[data-action='pbskids-login-close']").click(loginClass.closeLogin);

        //Cue sounds
        initAudio();

        //Announce self to the world
        loginClass.ready = true;
        loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGIN_READY });

      });//end .ready()

    }//end init()


    function initEvents(){
      loginClass.LoginEvent = loginClass.LoginEvent || function(){
        /* Private Properties
        **************************/
        var _EVENT_CLASS = "org_pbskids_login_LoginEvent";
        var _debug = false;

        return {
          /* Public Properties
          **************************/
          /* Event Types */
          LOGIN_READY  : _EVENT_CLASS + "_LoginReady",
          LOGIN_OPEN   : _EVENT_CLASS + "_LoginOpen",
          LOGIN_CLOSED : _EVENT_CLASS + "_LoginClosed",
          LOGGED_IN    : _EVENT_CLASS + "_LoggedIn",
          LOGGED_OUT   : _EVENT_CLASS + "_LoggedOut",
          LOGIN_UPDATE : _EVENT_CLASS + "_LoginUpdate",


          /* Public Methods
          **************************/
          dispatchEvent : function(o){
            var e, d = {};
            o.eventType = (o.eventType || "").replace(/\./g,"_");

            switch( o.eventType ){
              case this.LOGIN_READY:
              case this.LOGGED_IN:
                d.user        = loginClass.user;
                d.loggedin    = loginClass.loggedin;
                d.loginStatus = loginClass.loginStatus;
                d.loginInfo   = loginClass.loginInfo;
                break;

              case this.LOGIN_OPEN:
              case this.LOGIN_CLOSED:
              case this.LOGGED_OUT:
                //these events have no additional data to send in dataObject, d = {}
                break;

              case this.LOGIN_UPDATE:
                d.process = o.process;
                d.status = o.status;
                break;

              default:
                return;
            }//end switch

            e = $.Event(o.eventType);// build custom event object
            for(var i in d) e[i] = d[i];//add custom data to event object
            _log("Dispatch Event: '" + o.eventType + "', payload = ", d);
            $(document).trigger(e);//fire/dispatch/trigger custom event


            if( window.$ && window.$ != $ ){
              //This is to dispatch the event if a producer is using a global
              //version of jQuery which is not the same version used by this class.
              if( typeof (window.$(document).trigger) == "function"  ){
                //_log("Dispatch Event to Global jQuery: '" + o.eventType + "', payload = ", d);
                window.$(document).trigger(e);
              }
            }

            if (window.PBSKidsPlayerEvents) {
              PBSKidsPlayerEvents.emit(e.type, e);
            }

          }//dispatchEvent()
        };//return
      }();//LoginEvent();
    }//end initEvents()


    var initAudio = function(){
      if( typeof Howl == "undefined" ){
        loginClass.playAudio = loginClass.playAudio || function(){ _log("Please Include Howler.js to use this method", null, "warn"); };
        loginClass.stopAudio = loginClass.stopAudio || function(){ _log("Please Include Howler.js to use this method", null, "warn"); };
        return;
      }

      var _stopAudio = function(){
        if( loginHowls && audioLoaded ) {
          loginHowls.stop();
        }
      };//stopAudio()

      var _playAudio = function(audioSlug){
        if( !loginHowls || !audioSlug || !audioLoaded ) return;
        _stopAudio();
        loginHowls.play(audioSlug);
      };//playAudio()

      var _supportsMedia = function(mimetype, container) {
        var elem = document.createElement(container);
        if(typeof elem.canPlayType == 'function'){
          var playable = elem.canPlayType(mimetype);
          if((playable.toLowerCase() == 'maybe')||(playable.toLowerCase() == 'probably')){
            return true;
          }
        }
        return false;
      };

      loginClass.playAudio = loginClass.playAudio || function( audioSlug ){ _playAudio( audioSlug ); };
      loginClass.stopAudio = loginClass.stopAudio || function(){ _stopAudio(); };

      if( ( _supportsMedia('audio/mpeg','audio') || _supportsMedia('audio/ogg','audio') ) && Howl ){
        $.ajax({
          type     : 'GET',
          url      : _AUDIO_LIST_URL,
          dataType : 'json',
          success  : function(audioData){
            var audioResources = [];
            var audioSprite    = {};

            for(var k in audioData.resources ){
              audioResources[k] = _SITE_ROOT + audioData.resources[k];
            }

            for(var i in audioData.spritemap ){
              audioSprite[i] = [audioData.spritemap[i].start * 1000, ( audioData.spritemap[i].end - audioData.spritemap[i].start) * 1000 ];
            }

            loginHowls = new Howl({ urls: audioResources, sprite: audioSprite, onload: function(){ audioLoaded = true; } });
          }
        });
      }
    };//initAudio()


    var checkLogin = function(){
    /**
     * Look for username and userid cookies
     * Return all preference values if user is logged in
     * If user is not logged in return minimal config
     */
      var username = _getCookie('pbskids.username');
      var userid   = _getCookie('pbskids.userid');
      if (username && userid){
        loginClass.user = {
          id     : userid,
          name   : username,
          avatar : 'https://www.pbskids.org/go/secretbox/images/avatars/' + ( _getCookie('pbskids.avatar') || 'trophy' ) + '.jpg',
          returning : _getCookie('pbskids.returning') ? true : false
        };
        loginClass.loggedin    = true;
        loginClass.loginStatus = "logged-in";
        loginClass.loginInfo   = "l=1&r=" + ( loginClass.user.returning ? "1" : "0" );
        return true;
      }
      else{
        loginClass.user        = undefined;
        loginClass.loggedin    = false;
        loginClass.loginStatus = "logged-out";
        loginClass.loginInfo   = "l=1&r=0";
        return false;
      }
    };//end checkLogin()

    var onChannelReady = function(){
      _log("On Channel Ready");
      if( !_FORCE_TO_FULLSCREEN ){
        resizeWindow();
      }
    }

    var onLoginUpdate = function(transport, params){
      _log("On Login Update : params = ", params);
      loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGIN_UPDATE, process : params.process, status : params.status });
      
      if (params.status === 'logged-in') {
        loginClass.closeLogin();
      }
    };

    var completeResize = function(contentWindow, measuredHeight){
      measuredHeight = Math.max(measuredHeight || DEFAULT_WINDOW_HEIGHT, DEFAULT_WINDOW_HEIGHT );
      contentWindow.css({
        "height": measuredHeight + "px",
        "margin-top" : (-(measuredHeight + WINDOW_BORDER_WIDTH * 2) / 2) + "px",
        "-webkit-transition": "height " + ANIMATION_DURATION + "ms",//Safari 3.1 to 6.0
        "transition": "height " + ANIMATION_DURATION + "ms"
      });
    };

    var resizeWindow = function(contentWidth, contentHeight){
      _log("resizeWindow()",{
        contentWidth: contentWidth,
        contentHeight: contentHeight,
        DEFAULT_WINDOW_WIDTH: DEFAULT_WINDOW_WIDTH,
        DEFAULT_WINDOW_HEIGHT: DEFAULT_WINDOW_HEIGHT
      });

      var contentWindow = $("#pbskids-login-lightbox .pbskids-login-lightbox-content");
      var winWidth = $("body").width();

      if (contentWidth) {
        // IE10 bugfix: iframeContent could not be calculated due to a race-condition where
        // the iframeContent wasn't fully rendered before the calculation was attempted.
        contentWidth = Math.max(contentWidth, DEFAULT_WINDOW_WIDTH );
      }
      else {
        // If error in calculating the iframeContent width, then use default width.
        contentWidth = DEFAULT_WINDOW_WIDTH;
      }

       // change fixed to absolute positioning
      if( !_HAS_TOUCH ){
        $("#pbskids-login-lightbox").css("position", (winWidth < DEFAULT_WINDOW_WIDTH ? "absolute" : "fixed") );
      }

      //this is saying if the body is greater than 600 px do the following
	  // PBSK15: comment out height attr, i dont know what the cause of the issue is (doesn't resize the window) and frankly idc, ill just use my (albeit very) hacky js fix
      if( !_FORCE_TO_FULLSCREEN && winWidth >= DEFAULT_WINDOW_WIDTH ){
        contentWindow.css({
          "width": contentWidth + "px",
          // "height": DEFAULT_WINDOW_HEIGHT + "px",
          "margin-left": (-(contentWidth  + WINDOW_BORDER_WIDTH * 2) / 2) + "px",
          "margin-top" : (-(DEFAULT_WINDOW_HEIGHT + WINDOW_BORDER_WIDTH * 2) / 2) + "px",
          "border": "solid #FFFFFF " + WINDOW_BORDER_WIDTH + "px",
          "top":"50%",
          "left":"50%",
          "right" : "",
          "bottom" : "",
          "-webkit-transition": "",
          "transition": ""
        });
        
        if (!pbsLoginChannel) {
          // Pass-through the height reported by the page upon load.
          completeResize(contentWindow, contentHeight);
          return;
        }

		// PBSK15: comment out resize window, i dont know what the cause of the issue is (doesn't resize the window) and frankly idc, ill just use my (albeit very) hacky js fix
        pbsLoginChannel.call({
          method: "getContentHeight",
          params: undefined,
          timeout: 1000,
          error: function(){
            // Pass-through the height reported by the page upon load.
            // completeResize(contentWindow, contentHeight);
          },
          success: function(measuredHeight){
            // Pass-through the measured height.
            // completeResize(contentWindow, measuredHeight);
          }
        });
      }

      //if it is not greater than 480 do this
      else{
        contentWindow.css({
          "width": "auto",
          // "height": "auto",
          // added extra padding to bottom
          "height": "140%",
          "margin-left": "",
          "margin-top": "",
          "border": "",
          "top" : "0",
          "left" : "0",
          "right" : "0",
          "bottom" : "0",
          "-webkit-transition": "",
          "transition": ""
        });
      }

    };//resizeWindow()

    var deleteLoginCookies = function(){
      _deleteCookie('pbskids.username');
      _deleteCookie('pbskids.userid');
      _deleteCookie('pbskids.avatar');
      _deleteCookie('PBSKIDS_AUTH');
    };

    function initPublicMethods(){
      loginClass._setDefaultLoginURL  = function( url ){ _LOGIN_URL  = url; };
      loginClass._setDefaultLogoutURL = function( url ){ _LOGOUT_URL = url; };

      loginClass.closeLogin = function(e){
        _log('Close Login');
        //Hide Login-Overlay
        $("#pbskids-login-lightbox").hide();
        $("#pbskids-login-lightbox .pbskids-login-lightbox-iframe").attr({"src":""});
        $("body").css('padding-bottom', '');
        loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGIN_CLOSED });
      };


      loginClass.logout = function(e){
        if( !loginClass.loggedin || !loginClass.user || !loginClass.user.id || !loginClass.user.name) return;

        if(!_LOGOUT_URL) {
          deleteLoginCookies();
          
          // Confirm that cookies were deleted
          checkLogin();

          if( !loginClass.loggedin ){
            loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGGED_OUT });
          }

          return;
        }

        // If a logout url exists, then attempt to call that via ajax.
        $.ajax({
          url: _LOGOUT_URL,
          error: deleteLoginCookies,// If error, then delete cookies directly.
          complete: function(e){
            // Check login after onSuccess and onError.
            checkLogin();
            if( !loginClass.loggedin ){
              loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGGED_OUT });
            }
          }
        });//.ajax()
      };//logout()


      loginClass.displayLogin = function( queryData, url ){
        var closeButtonImageURL = "https://www.pbskids.org/includes/auth/images/close.gif";
        var iframeSrcURL = url || _LOGIN_URL;
        var wasLoggedin = loginClass.loggedin;
        var winWidth  = $("body").width();

        var queryString = "";

        if( queryData && typeof queryData == "object" ){
          queryString = "?";
          for( var i in queryData ){
            queryString += i + "=" + queryData[i] + "&";
          }
        }

        if( $("#pbskids-login-lightbox").get(0) ){
          //Show/Unhide Login-Overlay
          $("#pbskids-login-lightbox").show();

          $("#pbskids-login-lightbox .pbskids-login-lightbox-iframe")
           .attr({"src":iframeSrcURL + queryString})
           .removeClass("loaded")
           .addClass("loading");

        }
        else{
          //Build Login Overlay
          //this is only the background
          $("<div/>")
           .attr({"id":"pbskids-login-lightbox"})
           .css({
              // "position":"fixed",
              // allowed to scroll up with page
              "position":"absolute",
              "top":"0",
              "left":"0",
              "z-index":"15000",
              "width":"100%" ,
              "height":"100%",
              "background":"#ccc%"
           })
           .appendTo("body")
           .append(
             $("<div/>")
              .addClass("pbskids-login-lightbox-background")
              .css({
                "position":"absolute",
                "top":"0",
                "left":"0",
                "background":"#000000",
                "opacity":"0.70",
                "width":"100%" ,
                "height":"100%",
                "cursor" : "pointer"
              })
              .click(loginClass.closeLogin)

           )//append .pbskids-login-lightbox-background


           .append(
             $("<div/>")
              .addClass("pbskids-login-lightbox-content")
              .css({
                "position":"absolute",
                "background":"#FFFFFF"
              })

              .append(
                 $("<iframe/>")
                  .addClass("pbskids-login-lightbox-iframe")
                  .addClass("loading")
                  .css({
                    "position":"absolute",
                    "top":"0",
                    "left":"0",
                    "background":"#99CC00",
                    "width":"100%" ,
                    "height":"100%"
                  })
                  .load(function(){
                    _log("here: load()");

                    if( pbsLoginChannel != null ) pbsLoginChannel.destroy();
                    pbsLoginChannel = Channel.build({ "window": this.contentWindow, "origin": "*", "scope": "pbskids-login", "onReady": onChannelReady});
                    pbsLoginChannel.bind("onLoginUpdate", onLoginUpdate);

                    _log("here: before checkLogin()");
                    checkLogin();

                    if( !wasLoggedin && loginClass.loggedin ){
                      wasLoggedin = true;
                      loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGGED_IN });
                    }

                    if( wasLoggedin && !loginClass.loggedin ){
                      wasLoggedin = false;
                      loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGGED_OUT });
                    }

                    $(this).removeClass("loading").addClass("loaded");

                  })
                  .attr({"src":iframeSrcURL + queryString, "scrolling":"no"})
              )//append .pbskids-login-lightbox-iframe
              .append(
                $("<div/>")
                 .addClass("pbskids-login-lightbox-close-button")
                 .css({
                   "position":"absolute",
                   "top":"5px",
                   "right":"5px",
                   "background":"url("+ closeButtonImageURL + ") 0 0 no-repeat",
                   "width":"30px",
                   "height":"30px",
                   "cursor" : "pointer"
                 })
                 .click(loginClass.closeLogin)
              )//append .pbskids-login-lightbox-close-button
           )//append .pbskids-login-lightbox-content
           ;//end building #pbskids-login-lightbox

           //Add event-handler for resizing lightbox on window-resize event, ONLY if not a touch device.
           if( !_FORCE_TO_FULLSCREEN ){
             $( window ).resize(function(){
              _log("here: check if resizable");

              if( (winWidth >  DEFAULT_WINDOW_WIDTH && $("body").width() <= DEFAULT_WINDOW_WIDTH) ||
                  (winWidth <= DEFAULT_WINDOW_WIDTH && $("body").width() >  DEFAULT_WINDOW_WIDTH)
              ){
                //Only resize if we're crossing over the mobile to non-mobile boundary, and vice-versa.
                resizeWindow();
                _log("here: after resizeWindow()");
              }
             });
           }

        }//end if #pbskids-login-lightbox exists

        //Resize login-window upon creating it or after re-opening it.
        resizeWindow();

        // padding to overlap keyboard in mobile landscape view
        if ( _FORCE_TO_FULLSCREEN && (window.innerHeight < window.innerWidth)) {
          $("body").css('padding-bottom', '300px');
        }
        else
        {
           $("body").css('padding-bottom', '0px');
        }

        //Dispatch event telling the dom that the login-window is open.
        loginClass.LoginEvent.dispatchEvent({ eventType: loginClass.LoginEvent.LOGIN_OPEN });

      };//end displayLogin()

    }//end initPublicMethods()


    /* LIBRARIES
    ************************/
    //JSChannel for cross-domain iframe communication
    var Channel = function(){"use strict";function c(a,c,d,e){function f(b){for(var c=0;c<b.length;c++)if(b[c].win===a)return!0;return!1}var g=!1;if("*"===c){for(var h in b)if(b.hasOwnProperty(h)&&"*"!==h&&"object"==typeof b[h][d]&&(g=f(b[h][d])))break}else b["*"]&&b["*"][d]&&(g=f(b["*"][d])),!g&&b[c]&&b[c][d]&&(g=f(b[c][d]));if(g)throw"A channel is already bound to the same window which overlaps with origin '"+c+"' and has scope '"+d+"'";"object"!=typeof b[c]&&(b[c]={}),"object"!=typeof b[c][d]&&(b[c][d]=[]),b[c][d].push({win:a,handler:e})}function d(a,c,d){for(var e=b[c][d],f=0;f<e.length;f++)e[f].win===a&&e.splice(f,1);0===b[c][d].length&&delete b[c][d]}function e(a){return Array.isArray?Array.isArray(a):-1!=a.constructor.toString().indexOf("Array")}var a=Math.floor(1000001*Math.random()),b={},f={},g=function(a){try{var c=JSON.parse(a.data);if("object"!=typeof c||null===c)throw"malformed"}catch(a){return}var g,h,i,d=a.source,e=a.origin;if("string"==typeof c.method){var j=c.method.split("::");2==j.length?(g=j[0],i=j[1]):i=c.method}if("undefined"!=typeof c.id&&(h=c.id),"string"==typeof i){var k=!1;if(b[e]&&b[e][g])for(var l=0;l<b[e][g].length;l++)if(b[e][g][l].win===d){b[e][g][l].handler(e,i,c),k=!0;break}if(!k&&b["*"]&&b["*"][g])for(var l=0;l<b["*"][g].length;l++)if(b["*"][g][l].win===d){b["*"][g][l].handler(e,i,c);break}}else"undefined"!=typeof h&&f[h]&&f[h](e,i,c)};return window.addEventListener?window.addEventListener("message",g,!1):window.attachEvent&&window.attachEvent("onmessage",g),{build:function(b){var g=function(a){if(b.debugOutput&&window.console&&window.console.log){try{"string"!=typeof a&&(a=JSON.stringify(a))}catch(c){}console.log("["+j+"] "+a)}};if(!window.postMessage)throw"jschannel cannot run this browser, no postMessage";if(!window.JSON||!window.JSON.stringify||!window.JSON.parse)throw"jschannel cannot run this browser, no JSON parsing/serialization";if("object"!=typeof b)throw"Channel build invoked without a proper object argument";if(!b.window||!b.window.postMessage)throw"Channel.build() called without a valid window argument";if(window===b.window)throw"target window is same as present window -- not allowed";var h=!1;if("string"==typeof b.origin){var i;"*"===b.origin?h=!0:null!==(i=b.origin.match(/^https?:\/\/(?:[-a-zA-Z0-9_\.])+(?::\d+)?/))&&(b.origin=i[0].toLowerCase(),h=!0)}if(!h)throw"Channel.build() called with an invalid origin";if("undefined"!=typeof b.scope){if("string"!=typeof b.scope)throw"scope, when specified, must be a string";if(b.scope.split("::").length>1)throw"scope may not contain double colons: '::'"}var j=function(){for(var a="",b="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",c=0;5>c;c++)a+=b.charAt(Math.floor(Math.random()*b.length));return a}(),k={},l={},m={},n=!1,o=[],p=function(a,b,c){var d=!1,e=!1;return{origin:b,invoke:function(b,d){if(!m[a])throw"attempting to invoke a callback of a nonexistent transaction: "+a;for(var e=!1,f=0;f<c.length;f++)if(b===c[f]){e=!0;break}if(!e)throw"request supports no such callback '"+b+"'";t({id:a,callback:b,params:d})},error:function(b,c){if(e=!0,!m[a])throw"error called for nonexistent message: "+a;delete m[a],t({id:a,error:b,message:c})},complete:function(b){if(e=!0,!m[a])throw"complete called for nonexistent message: "+a;delete m[a],t({id:a,result:b})},delayReturn:function(a){return"boolean"==typeof a&&(d=a===!0),d},completed:function(){return e}}},q=function(a,b,c){return window.setTimeout(function(){if(l[a]){var d="timeout ("+b+"ms) exceeded on method '"+c+"'";l[a].error("timeout_error",d),delete l[a],delete f[a]}},b)},r=function(a,c,d){if("function"==typeof b.gotMessageObserver)try{b.gotMessageObserver(a,d)}catch(h){g("gotMessageObserver() raised an exception: "+h.toString())}if(d.id&&c){if(k[c]){var i=p(d.id,a,d.callbacks?d.callbacks:[]);m[d.id]={};try{if(d.callbacks&&e(d.callbacks)&&d.callbacks.length>0)for(var j=0;j<d.callbacks.length;j++){for(var n=d.callbacks[j],o=d.params,q=n.split("/"),r=0;r<q.length-1;r++){var s=q[r];"object"!=typeof o[s]&&(o[s]={}),o=o[s]}o[q[q.length-1]]=function(){var a=n;return function(b){return i.invoke(a,b)}}()}var t=k[c](i,d.params);i.delayReturn()||i.completed()||i.complete(t)}catch(h){var u="runtime_error",v=null;if("string"==typeof h?v=h:"object"==typeof h&&(h&&e(h)&&2==h.length?(u=h[0],v=h[1]):"string"==typeof h.error&&(u=h.error,h.message?"string"==typeof h.message?v=h.message:h=h.message:v="")),null===v)try{v=JSON.stringify(h),"undefined"==typeof v&&(v=h.toString())}catch(w){v=h.toString()}i.error(u,v)}}}else d.id&&d.callback?l[d.id]&&l[d.id].callbacks&&l[d.id].callbacks[d.callback]?l[d.id].callbacks[d.callback](d.params):g("ignoring invalid callback, id:"+d.id+" ("+d.callback+")"):d.id?l[d.id]?(d.error?l[d.id].error(d.error,d.message):void 0!==d.result?l[d.id].success(d.result):l[d.id].success(),delete l[d.id],delete f[d.id]):g("ignoring invalid response: "+d.id):c&&k[c]&&k[c]({origin:a},d.params)};c(b.window,b.origin,"string"==typeof b.scope?b.scope:"",r);var s=function(a){return"string"==typeof b.scope&&b.scope.length&&(a=[b.scope,a].join("::")),a},t=function(a,c){if(!a)throw"postMessage called with null message";var d=n?"post  ":"queue ";if(g(d+" message: "+JSON.stringify(a)),c||n){if("function"==typeof b.postMessageObserver)try{b.postMessageObserver(b.origin,a)}catch(e){g("postMessageObserver() raised an exception: "+e.toString())}b.window.postMessage(JSON.stringify(a),b.origin)}else o.push(a)},u=function(a,c){if(g("ready msg received"),n)throw"received ready message while in ready state.  help!";for(j+="ping"===c?"-R":"-L",v.unbind("__ready"),n=!0,g("ready msg accepted."),"ping"===c&&v.notify({method:"__ready",params:"pong"});o.length;)t(o.pop());"function"==typeof b.onReady&&b.onReady(v)},v={unbind:function(a){if(k[a]){if(!delete k[a])throw"can't delete method: "+a;return!0}return!1},bind:function(a,b){if(!a||"string"!=typeof a)throw"'method' argument to bind must be string";if(!b||"function"!=typeof b)throw"callback missing from bind params";if(k[a])throw"method '"+a+"' is already bound!";return k[a]=b,this},call:function(b){if(!b)throw"missing arguments to call function";if(!b.method||"string"!=typeof b.method)throw"'method' argument to call must be string";if(!b.success||"function"!=typeof b.success)throw"'success' callback missing from call";var c={},d=[],e=[],g=function(a,b){if(e.indexOf(b)>=0)throw"params cannot be a recursive data structure";if(e.push(b),"object"==typeof b)for(var f in b)if(b.hasOwnProperty(f)){var h=a+(a.length?"/":"")+f;"function"==typeof b[f]?(c[h]=b[f],d.push(h),delete b[f]):"object"==typeof b[f]&&g(h,b[f])}};g("",b.params);var h={id:a,method:s(b.method),params:b.params};d.length&&(h.callbacks=d),b.timeout&&q(a,b.timeout,s(b.method)),l[a]={callbacks:c,error:b.error,success:b.success},f[a]=r,a++,t(h)},notify:function(a){if(!a)throw"missing arguments to notify function";if(!a.method||"string"!=typeof a.method)throw"'method' argument to notify must be string";t({method:s(a.method),params:a.params})},destroy:function(){d(b.window,b.origin,"string"==typeof b.scope?b.scope:""),window.removeEventListener?window.removeEventListener("message",r,!1):window.detachEvent&&window.detachEvent("onmessage",r),n=!1,k={},m={},l={},b.origin=null,o=[],g("channel destroyed"),j=""}};return v.bind("__ready",u),setTimeout(function(){t({method:s("__ready"),params:"ping"},!0)},0),v}}}();


    //Complete and return the Global Localization Object, (window|exports).org.pbskids.login
    init();
    return loginClass;

  }));

}());