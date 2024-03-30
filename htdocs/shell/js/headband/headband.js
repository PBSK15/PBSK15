/**
 * PBS KIDS Parents Bar
 * PBS KIDS Settings
 *
 * @author Renzo Olguin
 * @email rmolguin@pbs.org
 */

(function( require, define, factory ){
  if( typeof define === "function" && define.amd ){
    //PBS.KIDS AMD support for requireJS
    define( "headband", ["jquery", "require", "jquery-touch", "login", "localization", "bridge-overlay"], factory );
  }
  else{
    //Assume jQuery is directly loaded via <script/>
    factory( jQuery );
  }
}( PBS.KIDS.require, PBS.KIDS.define, function( $, require ){
  var parentsbar = {};//global top level package for parents bar
  var settings   = {};//global top level package for settings
  var tooltips   = {};//global package for tooltips, parentsbar.tooltips
  
  var _tips  = [];//private array of all generated tooltips
  var _hideExternalLinks  = false;
  var _confirmationTimeout;//timeout for auto-removing the station confirmation prompt
  var _isIE7  = Boolean( navigator.appVersion.indexOf("MSIE 7.")  != -1 );
  var _isIE9  = Boolean( navigator.appVersion.indexOf("MSIE 9.")  != -1 );
  var _isIE10 = Boolean( navigator.appVersion.indexOf("MSIE 10.") != -1 );
  var _firstRun = true;

  var _site_message;
  var _video_message;
  
  var MessagesService;
  if( require ){
    //subscribe to messages service if available
    if( require.specified('messages') ){
      if( require.defined('messages') ){
       MessagesService = require('messages');
       subscribeToMessages();
      }
      else{
        require( [ 'messages' ], function ( __messages ) {
          MessagesService = __messages;
          subscribeToMessages();
        });
      }
    }
  }
  

  var _createPackage = function(packagePath){
    /**
    * @packagePath, String, ex: "com.domain.path.appName.featureName"
    * @return, Object, ex: exports.com.domain.path.appName.featureName = {}
    */
     
    var pak = ( typeof exports !== 'undefined' ) ? exports : window ;
    var dir;

    if( typeof packagePath === 'string' ){
      dir = packagePath.split(".");
      for( var i = 0; i < dir.length; i++ ){
        if( !pak[dir[i]] ) pak[dir[i]] = {};
        pak = pak[dir[i]];
      }
    }

    return pak;
  };//end _createPackage

  // Set The Top-Level Package ASAP
  parentsbar = _createPackage("org.pbskids.parentsBar");
  tooltips   = _createPackage("org.pbskids.parentsBar.tooltips");
  settings   = _createPackage("org.pbskids.settings");

  // Important things to track
  parentsbar.ready = false;
  _hideExternalLinks  = $("html").hasClass("hide-external-links");
  
  initEvents();//MUST INIT NOW!!

  function init(){
    initTooltips();//MUST INIT BEFORE CONTROLLER AND SETTINGS!!
    initController();//MUST INIT PRIOR TO onUpdatedURL()
    initSettings();
    addEventListeners();
    buildParentsInfoTooltip();
    
    $("body").addClass("has-headband");
    
    if (_isIE9 || _isIE10) {
      $("body").addClass("svg-smushed"); // Needed due to issue in IE 9 and 10 with SVG scaling.
    }

    if( !parentsbar.ready ){
      parentsbar.ready = true;
      parentsbar.HeadbandEvent.dispatchEvent({
        eventType: parentsbar.HeadbandEvent.HEADBAND_READY,
        caller   : document
      });//HeadbandEvent.dispatchEvent()
    }

    if( _site_message )  onMessagesUpdate( "pbskids.messages.site" , _site_message );
    if( _video_message ) onMessagesUpdate( "pbskids.messages.video", _video_message );
    
    if ( window.Modernizr != undefined ) {
      if ( Modernizr.webaudioapi ) {
        if( Modernizr.issilky ) GA_obj.trackEvent('Web Auido API - Sniffer', 'Amazon Silk', 'true');
        if( Modernizr.isandroid) GA_obj.trackEvent('Web Auido API - Sniffer', 'Android Browser or Chrome', 'true');
        
        if ( !Modernizr.issilky && !Modernizr.isandroid ) {
          GA_obj.trackEvent('Web Auido API - Sniffer', 'Modern Browser', 'true');
        }
      }
      else {
        if( Modernizr.issilky ) GA_obj.trackEvent('Web Auido API - Sniffer', 'Amazon Silk', 'false');
        if( Modernizr.isandroid) GA_obj.trackEvent('Web Auido API - Sniffer', 'Android Browser', 'false');
        
        if ( !Modernizr.issilky && !Modernizr.isandroid ) {
            GA_obj.trackEvent('Web Auido API - Sniffer', 'Any Browser', 'false');
        }
      }
    }
      
  }//init()


  function subscribeToMessages(){
    if( MessagesService && !$("body").hasClass("no-messages") ){
      MessagesService.subscribe('pbskids.messages.site', onMessagesUpdate);
      MessagesService.subscribe('pbskids.messages.video', onMessagesUpdate);
      MessagesService.init();
    }
  }//subscribeToMessages()


  function addEventListeners(){
    if( org.pbskids.login ){
      $(document).on("org_pbskids_login_LoginEvent_LoggedIn", onLoggedIn);
      $(document).on("org_pbskids_login_LoginEvent_LoggedOut", onLoggedOut);

      if( org.pbskids.login.ready ) onLoginReady();
      else $(document).on("org_pbskids_login_LoginEvent_LoginReady", onLoginReady);
    }

    if( org.pbskids.localization ){
      //Listen for localization change events
      $(document).on(org.pbskids.localization.LocalizationEvent.STATION_CHANGE, onLocalized);

      //Check if already localized and updated html
      if( org.pbskids.localization.station ) onLocalized({ "station" : org.pbskids.localization.station });
    }

    //Add Event-Listeners on HTML elements
    $("#headband-container .headband-nav .nav-item.station img").on("load", function(){
      $("#headband-container .headband-nav .nav-item.station").addClass("logo-loaded");
    });

    if( typeof touch_party != "undefined" ) $('#squished-headband-toggle').touch_party('button');
    
    //Needs to be on 'click' since touch_party does its magic then triggers 'click'.  
    $('#squished-headband-toggle').on('click', function(){ expandHeadband(false); });

  }//addEventListeners()



  /* Event Handlers 
  *****************************/
  function onLoginReady(e){
    if( org.pbskids.login.loggedin === true ) onLoggedIn();
  }//onLoginReady()


  function onLoggedIn(e){
    if( org.pbskids.login.user &&  org.pbskids.login.user.id && org.pbskids.login.user.name ){
      $("#headband-user-block").addClass("logged-in").removeClass("logged-out");
      $("#headband-user-block .avatar img").attr("src",org.pbskids.login.user.avatar);
      $("#headband-user-block .user-name a").attr("title", org.pbskids.login.user.name + "'s Profile");
      $("#headband-user-block .user-name em").html(org.pbskids.login.user.name);
    }
    else{
      onLoggedOut();
    }
  }//onLoggedIn()


  function onLoggedOut(e){
    $("#headband-user-block").addClass("logged-out").removeClass("logged-in");
    $("#headband-user-block .avatar img").attr("src","");
    $("#headband-user-block .user-name em").html("Not Logged In");
  }//onLogout()

  function onLocalized(e){
    if( e.station ){
      if(_confirmationTimeout) clearTimeout(_confirmationTimeout);

      $("#headband-container .headband-nav .nav-item.station").removeClass("logo-loaded");
      $("#headband-container .headband-nav .nav-item.station a.callsign").attr({"title": e.station.callLetters, "href": (e.station.kidsSite || "" ) });
      $("#headband-container .headband-nav .nav-item.station .alt-call-letters").html(e.station.callLetters);
      $("#headband-container .headband-nav .nav-item.station img").attr("src", e.station.ipadLogoURL || "");
      
      //Auto-localization confirmation box:
      if( e.station.autoLocalized === true ){
        $("#headband-container .headband-nav .nav-item.station").append(
          $("<div/>").addClass("confirm-station parents-tooltip down").html("Confirm your local station:").append(
            $("<button/>").html("OK").click(function(){
              clearTimeout(_confirmationTimeout);
              $("#headband-container .headband-nav .nav-item.station img").attr("src", "");
              org.pbskids.localization.updateStation(org.pbskids.localization.station.callLetters);
            })
          ).append(
            $("<button/>").html("Change It").click(function(){
              $("#headband-container .headband-nav .nav-item.settings button[data-action=settings-trigger]").click();
              $("#settings-tooltip .localization-module .view-settings").click();
            })
          )
        );

        //auto-remove confirmation tooltip after 10 seconds.
        _confirmationTimeout = setTimeout(function(){
          $("#headband-container .headband-nav .nav-item.station .confirm-station").remove();
        }, 10000);
      }
      else{
        $("#headband-container .headband-nav .nav-item.station .confirm-station").remove();
      }
    }
    $("#headband-container .headband-nav .nav-item.station").css("display","");
  }//onLocalized()


  function onMessagesUpdate(type, messages){
    if( !parentsbar.ready ){
      //In case the Headband hasn't been created yet, 
      //save any received messages for when it is ready.
      if( type == "pbskids.messages.site" )  _site_message  = messages;
      if( type == "pbskids.messages.video" ) _video_message = messages;
      return;
    }

    if( parentsbar.controller ){
      if( type == "pbskids.messages.site"){
        if( _firstRun === true && !!$(".parents-message.video").get(0) ){
          //If this is the first time that a site message has dispatched
          //and there is already a video message, then don't create site message.
          _firstRun = false;
          return;
        }
        //In case messages already exist from a previous view
        clearMessages();

        //Rebuild tooltips with updated messages
        if( !_hideExternalLinks ){
          //Add newsletter-signup message on non-exempt shell pages.
          //Do NOT add newsletter-signup message to producer pages.
          var __exempt = (function(href){
            var __href = href.match(/\/~/) ? href.substring(0,href.indexOf("~")) + href.substring(href.indexOf("site") + 5) : href;
            var __exemptPages = [
              /pbskids.org\/video/,
              /pbskids.org\/games/,
              /pbskids.org\/newsletter/
            ];
            for(var i = 0 ; i < __exemptPages.length ; i++ ){
              if( __href.match( __exemptPages[i] ) ){
                  return true;
              }
            }
            return false;
          })( window.top != window ? document.referrer : window.location.href );

          //if( !__exempt ) buildNewsletterSignup();

          //build the messages passed in via MessagesService
          for( var i = 0; i < messages.length ; i++ ){
            var __message = messages[i];
            var __messageType = (__message.subtype || "daily-tip");
            var __parentsMessage = $(
              "<article class='parents-message track'>" +
                "<i class='message-badge " + __messageType + "'><span class='copy'>" +  __messageType.replace(/\-/g," ") + "</span></i>" +
                "<p class='message'>"+ __message.long_description +"</p>" +
              "</article>"
            );

            parentsbar.controller.addItem( __parentsMessage, __message.content, __message.type, __message.action_text || "", __message.link || "", __message.link_title || "", __message.tooltip_title || "" );
          }//end for var i            
        }//end if .hide-external-links
      }//end if type == "pbskids.messages.site"

      else if( type == "pbskids.messages.video" && messages.series ){
        if( !!$(".parents-message.video").get(0) ){
          updateVideoMessage( messages );
        }
        else{
          builVideoMessage( messages );
        }
      }//end if type == "pbskids.messages.video"
    }//end if parentsbar.controller
  }//onMessagesUpdate()

  

  /* Private Methods
  *****************************/
  function trackHeadbandEvent(action, label, value){
    var category = "Parents Bar";
    //if(console && console.log) console.log( "trackHeadbandEvent: "   + category + " : " + action + " : " + label + " : " + value );
    if( window.GA_obj && window.GA_obj.trackEvent ) window.GA_obj.trackEvent( category, action, label, value );
  }//trackHeadbandEvent()


  function expandHeadband(openOnly){
    openOnly = !!openOnly;

    var headband_container  = $('#headband-container');
    var headband_messages   = $("#parents-message-bar");
    var headband_nav_height = headband_container.height() - headband_messages.height();//headband_container.find('.headband-nav').height();

    if( $("#squished-headband-toggle").css("display") != "none" ) {
      if( headband_container.hasClass('expanded') ){
        if( !openOnly ){
          headband_container.animate({
            top: -(headband_nav_height)
          }, 400, function() {
            $(headband_container).removeClass('expanded');
            $("body").removeClass("headband-open");
            headband_container.css("top","");//remove inline styles
            $('#parents-message-bar').animate({
              height: 40
            }, 200, function() {
              $('.parents-tooltip').removeClass('show');
              headband_messages.css("height","");//remove inline styles
            });
          });
        }//if !openOnly
      }
      else{
        headband_container.animate({
          top: 0
        }, 400, function() {
          $(headband_container).addClass('expanded');
          $("body").addClass("headband-open");
          var messages_height = 0;
          $('.parents-message').each(function(){
            if( messages_height < $(this).height() )
              messages_height = $(this).height();
          });
          headband_messages.animate({
            height: messages_height + 20
          }, 400);
        });
      }//end if hasClass 'expanded'
    }//end if "headband is in squishmode"
  }//expandHeadband()


  function clearMessages(){
    $(".parents-bar-tooltips .parents-tooltip").not("#for-parents-tooltip").remove();
    while( parentsbar.controller.deleteItem() > 0 ) parentsbar.controller.deleteItem(0);
  }//end clearMessages()

  
  function buildNewsletterSignup(){
    var __openStationFinder =  function(e){
      $('.parents-tooltip.newsletter-signup').addClass('show-station-finder');
    };

    var __closeStationFinder = function(e){
      $('.parents-tooltip.newsletter-signup').removeClass('show-station-finder');
    };

    var __closeThankYou = function(e){
      $('.parents-tooltip.newsletter-signup input[type="text"]').val("");
      $('.parents-tooltip.newsletter-signup').removeClass("subscribed");
    };

    var __onStationSelected = function(e){
      $('.parents-tooltip.newsletter-signup .pbskids-insider-signup-station').val(e.station.callLetters);
      $('.parents-tooltip.newsletter-signup .pbskids-insider-signup-station-logo').html('<img src="https://www-tc.pbs.org/images/stations/standard/' + e.station.callLetters + '.gif"/>' + e.station.commonName);
      $('.parents-tooltip.newsletter-signup .find-station-button').html('Not your station? Select another.');
      $('.parents-tooltip.newsletter-signup .station-group').removeClass('error');
      __closeStationFinder();
    };

    var __validate = function(e){
      var __form = $('.parents-tooltip.newsletter-signup form.pbskids-insider-signup');
      $('.error', __form).removeClass('error');

      if( !$( "input[name='emailAddress']", __form ).val().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) ){
        $( ".email-group", __form ).addClass('error');
        window.scrollTo(0,0);
        return false;
      }

      if( !$( "input[name='memberStationOfferedField']", __form ).val().match(/^[A-Z]{4}$/) ){
        $( ".station-group", __form ).addClass('error');
        window.scrollTo(0,0);
        return false;
      }
      
      $('.parents-tooltip.newsletter-signup').addClass("subscribed");
      window.scrollTo(0,0);
      return true;
    };

    var newsLetterMessage = $( "<article class='parents-message  track'><i class='message-badge newsletter'><span class='copy'>Newsletter</span></i><p class='message'>Sign up for the free PBS KIDS Insider for tips, crafts, recipes, & more PBS KIDS fun!</p></article>" );
    var newsLetterContent = '<h3>Sign up for newsletter</h3>'
                          + '<form class="pbskids-insider-signup" name="pbskids-insider-signup-1379000792898" action="https://s2143.t.eloqua.com/e/f2" method="post" target="eloqua-iframe-tooltip">'
                          +   '<input value="untitledForm-1379000792898" type="hidden" name="elqFormName" />'
                          +   '<input value="2143" type="hidden" name="elqSiteId"  />'
                          +   '<input name="elqCampaignId" type="hidden"  />'
                          +   '<input name="hiddenField" type="hidden" value="PBS KIDS"/>'
                          +   '<p class="input-group email-group">'
                          +     '<label for="emailAddress" class="required">Email Address</label>'
                          +     '<input class="pbskids-insider-signup-email" name="emailAddress" type="email" value="" placeholder="email@example.com" type="emailfield" syntax="EmailAddress" />'
                          +   '</p>'
                          +   '<p class="input-group">'
                          +     '<span>'
                          +       '<label for="firstName">First Name</label>'
                          +       '<input class="pbskids-insider-signup-first-name" name="firstName" type="text"/>'
                          +     '</span>'
                          +     '<span>'
                          +       '<label for="lastName">Last Name</label>'
                          +       '<input class="pbskids-insider-signup-last-name" name="lastName" type="text"/>'
                          +     '</span>'
                          +   '</p>'
                          +   '<p class="input-group station-group">'
                          +     '<label for="memberStationOfferedField" class="required">Your Local Station</label>'
                          +     '<input class="pbskids-insider-signup-station" name="memberStationOfferedField" type="hidden"' + ( org.pbskids.localization.station ? ' value="' + org.pbskids.localization.station.callLetters + '"' : '' ) + ' />'
                          +     '<span class="pbskids-insider-signup-station-logo">'
                          +       (org.pbskids.localization.station ? '<img src="https://www-tc.pbs.org/images/stations/standard/' + org.pbskids.localization.station.callLetters + '.gif"/>' + org.pbskids.localization.station.commonName : '')
                          +     '</span>'
                          +     '<a class="find-station-button">' + ( org.pbskids.localization.station ? 'Not your station? Select another.' : 'Find your local station' ) + '</a>'
                          +   '</p>'
                          +   '<input type="submit" value="Subscribe"/>'
                          + '</form>'
                          + '<iframe name="eloqua-iframe-tooltip" style="display:none;"></iframe>'
                          + org.pbskids.localization.getStationPickerHTML()
                          + '<button class="exit-station-finder">Back</button>'
                          + '<article class="thank-you-for-subscribing"><header><h1>Thank you!!</h1></header><p>Please check your email to confirm your PBS KIDS Insider subscription.</p><footer><button class="close-thank-you">Back</button></footer></article>'
                          ;

    parentsbar.controller.addItem( newsLetterMessage, newsLetterContent, "newsletter-signup", "Sign Up" );

    $(document).on( org.pbskids.localization.LocalizationEvent.STATION_CHANGE, __onStationSelected );
    $('.parents-tooltip.newsletter-signup .exit-station-finder').click( __closeStationFinder );
    $('.parents-tooltip.newsletter-signup .close-thank-you').click( __closeThankYou );
    $('.parents-tooltip.newsletter-signup .find-station-button').click( __openStationFinder );
    $('.parents-tooltip.newsletter-signup form.pbskids-insider-signup').submit( __validate );
    $('.parents-tooltip.newsletter-signup .pbskids-insider-signup-email').focus( function(){
      $('.parents-tooltip.newsletter-signup .email-group').removeClass('error');
    });
    
  }//buildNewsletterSignup()


  function builVideoMessage( message ){
    //Build Video Message in Parents Bar
    parentsbar.controller.addItem(
      $("<article class='video track'>" +
          "<i class='message-badge now-playing'>" +
            "<span class='copy'>Now Playing</span>" +
          "</i>" +
          "<h3></h3>" +
          "<p class='message'><span class='goals'></span></p>" +
        "</article>"
      ),
      $("<h3 class='series-title'></h3>" +
        "<p class='about-series'><em>TV Y7</em> <span></span></p>" +
        "<p class='about-video'><em>Video Description</em> <span></span></p>" +
        "<p class='age-range'><em>Ages:</em> <span></span></p>" +
        "<p class='edu-goals'><em>Educational Goals:</em> <span></span></p>" +
        "<footer>" +
          "<aside class='related-links'>" +
            "<em>For more, visit:</em>" +
            "<ul>" +
              "<li><a class='pbsparents'></a></li>" +
              "<li><a class='pbsshop'></a></li>" +
              "<li><a class='pbsitunes'></a></li>" +
            "</ul>" +
          "</aside>" +
          "<i class='sponsored-by'>PBS KIDS video funded by <span class='cpb-logo'>CPB</span></i>" +
        "</footer>"
      ),
      "series-video-info",
      "More info"
    );

    updateVideoMessage( message );

  }//builVideoMessage()


  function updateVideoMessage( message ){
    //Information Tooltip et al
    if( message && message.series ) {
      var v = message;
      var s = v.series;
      var goals = "";

      //build list of goals from curriculum array
      if(s.curriculum){
        for( var i = 0 ; i < s.curriculum.length ; i++ ){
          if( s.curriculum[i].name ){
            goals += (goals ? ", " : "") + s.curriculum[i].name;
          }
        }
      }
      
      //update info in parents-message-bar rotating item
      $(".parents-message.video h3" ).html( "<span class='titles'>" + s.title + ": " + v.title + "</span> <i>(" + ( formatTime(v.duration) || "--:--" ) + ")</i> " );
      $(".parents-message.video .message .goals" ).html( "Goals: " + (goals || "not available") + " " );
      $(".parents-message.video .copy").html("Now Playing<span class='hidden'> | " +  (s.title || "") + "</span>");

      //update tooltip
      $('.parents-tooltip.series-video-info .series-title'     ).html("About " + s.title);
      $('.parents-tooltip.series-video-info .about-video  span').html(v.description || v.title || "");
      $('.parents-tooltip.series-video-info .about-series span').html(s.description || "No information about this show is available");
      $('.parents-tooltip.series-video-info .age-range    span').html(s.age_range   || "The target age range for this show is not available");
      $('.parents-tooltip.series-video-info .edu-goals    span').html(goals         || "The educational goals for this show are not available");

      if( !_hideExternalLinks ){
        //update related links
        if( s.parents_url || s.shop_url || s.itunes_url ){
          $('.parents-tooltip.series-video-info .related-links .pbsparents').prop("data-series-title", s.title).addHref(s.parents_url );
          $('.parents-tooltip.series-video-info .related-links .pbsshop'   ).prop("data-series-title", s.title).addHref(s.shop_url, s.title + " on PBS KIDS Shop");
          $('.parents-tooltip.series-video-info .related-links .pbsitunes' ).prop("data-series-title", s.title).addHref(s.itunes_url, s.title + " on iTunes");
          $('.parents-tooltip.series-video-info .related-links li').css("display","none").each(function(){ if( $("a", this).attr("href") !== "" ) $(this).css("display",""); });
          $('.parents-tooltip.series-video-info .related-links').css("display","block");
        }
        else{
          $('.parents-tooltip.series-video-info .related-links').css("display","none");
        }
      }//end if !hide-external-links

      if( parentsbar.ready && parentsbar.controller ){
        parentsbar.controller.resume( false );
        parentsbar.controller.gotoElement(".video");
        parentsbar.controller.pause(8000, true);// pause for 8 seconds then resume rotating
        $('#parents-messages .parents-message.video .more-toggle').removeClass("hidden");
      }

      return;
    }//end if has series data


    //Not a release or release does not belong to a program (i.e. Dash Onload or Bump)
    if( parentsbar.ready && parentsbar.controller ){
      parentsbar.controller.gotoIndex(0);
      parentsbar.controller.pause();
      $('#parents-messages .parents-message.video .more-toggle').addClass("hidden");
    }

    $('.parents-tooltip.series-video-info .series-title'    ).html("");
    $('.parents-tooltip.series-video-info .about-video span').html("");
    $('.parents-tooltip.series-video-info .about-show  span').html("No information about this show is available");
    $('.parents-tooltip.series-video-info .age-range   span').html("The target age range for this show is not available");
    $('.parents-tooltip.series-video-info .edu-goals   span').html("The educational goals for this show are not available");
    $('.parents-tooltip.series-video-info .related-links li a').addHref(false);
    $('.parents-tooltip.series-video-info .related-links').css("display","none");

  }//updateVideoMessage()


  function buildParentsInfoTooltip() {
      //Don't build for producer-version of headband 
      //nor for instances where external links should be hidden
      if( _hideExternalLinks ) return;
      
      var __href        = ( window.top != window ) ? document.referrer : window.location.href ;
      //var __CDN         = __href.match(/soup\.pbskids\.org/) ? "https://soup-tc.pbskids.org" : __href.match(/ernie\.pbskids\.org\//) ? "https://ernie-tc.pbskids.org" : __href.match(/^http:\/\/((?!www(\-tc)?\.).+)pbskids\.org/) ? "" : "https://www-tc.pbskids.org";
	  var __CDN = "https://pbskids.org";
      var __SITE_ROOT   = ( __href.match(/\/~/) ? __href.substring(0,__href.indexOf("site") + 4 ) + "/" : "/shell/" );

      var _tooltipID    = "for-parents-tooltip";
      var _parentsLogo  = __CDN + __SITE_ROOT + "images/content/pbs-parents_logo" + ( typeof Modernizr !== "undefined" && Modernizr.svg ? ".svg" : ".png" );
      var _toggleButton = "#parents-message-bar .wrap .for-parents-badge";
      var _tipContent   = "<h3>Check out these sites for parents of PBS KIDS</h3>" +
                          "<ul class='stack-list content-col narrow'>" +
                            "<li><a href='https://www.pbslearningmedia.org/' class='not-bridge parents-flag-link learningmedia' title='PBS Learning Media'></a>" +
                              "<em>Classroom-ready, digital resources for teachers</em> </li>" +
                            "<li><a href='https://pbskids.org/lab'           class='not-bridge parents-flag-link pbskidslab'    title='PBS KIDS Lab'></a>" +
                              "<em>All the new games &amp; technologies we're working on</em></li>" +
                            "<li><a href='https://www.pbskidsplay.org/'     class='not-bridge parents-flag-link pbskidsplay'   title='PBS KIDS Play!'></a>" +
                              "<em>School readiness program for kids &#8211; develops 30+ skills</em></li>" +
                          "</ul>" +
                          "<figure class='feature content-col wide'>" +
                            "<a href='https://www.pbs.org/parents/' class='not-bridge parents-flag-link pbsparents' title='PBS Parents'>" +
                              "<img alt='' src='" + _parentsLogo + "' />" +
                            "</a>" +
                            "<figcaption>" +
                              "<p>Parenting resources and tips on raising children, planning birthday parties &amp; kids activities.</p>" +
                              "<a href='https://www.pbs.org/parents/' class='not-bridge parents-flag-link button' title='PBS Parents'>VISIT PBS PARENTS</a>" +
                            "</figcaption>" +
                          "</figure>" +
                          "<footer>" +
                            "Clicking these links will leave PBS KIDS for a trusted site." +
                            "<em class='fineprint'><a href='https://pbskids.org/privacy/'>Privacy Policy</a> | <a href='https://pbskids.org/privacy/termsofuse.html'>Terms of Use</a> | pbskids.org &copy; 1995-2015</em>" +
                          "</footer>";

      var _onShow = function(){
        trackHeadbandEvent("Parents Flag", "Open");
        $('#parents-message-bar .wrap .for-parents-badge').addClass('open');
      };
      
      var _onHide = function(){
        trackHeadbandEvent("Parents Flag", "Close");
        $('#parents-message-bar .wrap .for-parents-badge').removeClass('open');
      };

      var _tooltip = new tooltips.Tooltip(_tooltipID, _tipContent, _toggleButton, $(".parents-bar-tooltips"), _onShow, _onHide);

      $("a.parents-flag-link", _tooltip.tip).click(function(){
        trackHeadbandEvent("Parents Flag", $(this).attr("title"));
      });

      //(id, content, toggleButton, parent, onShow, onHide, tooltipLink, tooltipLinkTitle, tooltipTitle
  }//buildParentsInfoTooltip()


  function initController() {
    parentsbar.controller = parentsbar.controller || function(){
    /**
     * Parentsbar Controller
     * @desc: Self-executing "Singleton" Object.
     * @exports: {dom}.org.pbskids.parentsBar.controller()
     */

      /* Private Properties
      **************************/
      var _enabled = false;
      var _stopped = true;//paused with no auto-resume

      var _rotationSpeed =  1000;//in milliseconds, default =  1 second
      var _rotationDelay = 10000;//in milliseconds, default = 10 seconds
      var _rotateInterval;
      var _restartTimeout;

      var _list_arr  = [];
      var _list      = "#parents-messages";
      var _itemClass = "parents-message";
      var _items     = _list + "> ." + _itemClass;
      var _currentIndex;

      var _bookmarksContainer = "#parents-message-bar .parents-bar-bookmarks";
      var _bookmarksClass     = "parents-bar-bookmark";
      var _bookmarks          = _bookmarksContainer + " ." + _bookmarksClass;


      /* Private Functions
      **************************/
      //-- Build & Destroy ----
      var _init = function(){
        $( _list ).children().each( function(){
          _list_arr.push( $(this).addClass( _itemClass ).prop( "data-index", $(this).index() )[ 0 ] );
        });

        $( _list )
         .on("swipeleft" , function(){
           _stopTimers();
           _rotate(1, -1);
           if( !_stopped ) _resumeRotate();
         })
         .on("swiperight" , function(){
           _stopTimers();
           _rotate(1, 1);
           if( !_stopped ) _resumeRotate();
         });

        _currentIndex = 0;
        _updateBookmarks();
        _enable();
      };//_init


      var _enable = function(){
        if( _enabled ) return;
        _enabled = true;
        _resumeRotate();
      };//_enable()


      var _disable = function(){
        _pauseRotate();
        _enabled = false;
      };//_disable()


      var _destroy = function(){
        _disable();
        $( _list ).empty();
        dom.org.pbskids.parentsBar.controller = undefined;
      };//_destroy()



      //-- Modify Content ----
      var _addItem = function( item_arg, tooltip_arg, tooltipClass_arg, more_info_label, tooltipLink, tooltipLinkTitle, tooltipTitle){
        if( !_enabled ) return _list_arr.length;
        
        var __item;

        try{
           //build jquery object from item markup/arg
           __item = $( item_arg ).addClass( _itemClass ).prop("data-index", _list_arr.length );

           //add item to dom
           if( _list_arr.length ){
            $( _list_arr[ _list_arr.length - 1 ] ).after( __item );
           }
           else{
             $( _list ).append(__item);
           }

           //add item to items-list
           _list_arr.push( __item.get( 0 ) );
           
           // Set width of each p.message based on char count
           var message = __item.find('.message');
           var message_text = message.text();
           var message_width_test = '<span class="text-test" style="position:fixed; left:-999em;">' + message_text + '</span>';
           var message_total_text_width;
           
           // add rendered message string test container and calc width
           message.append(message_width_test);
           message_total_text_width =  message.find('span.text-test').width() + message.find('.more-toggle').width();
           
           
           // if message is a video type quit
           if (!__item.hasClass('video')) {
            // Set width of p.message to % of total string width.
            if ($(window).width() <= 550){
              message_total_text_width =  message.find('span.text-test').width();
              message.width(message_total_text_width * 0.6);
            } else {
              message.width(message_total_text_width * 0.63);
            }
             
             // Do it again on resize.
            $(window).resize(function() {
              message_total_text_width = message.find('span.text-test').width() + message.find('.more-toggle').width();
              if (__item.hasClass('video')) {
                return false;
              }
                   
              if ($(window).width() <= 550){
                message_total_text_width =  message.find('span.text-test').width();
                message.width(message_total_text_width * 0.6);
              } else {
                message.width(message_total_text_width * 0.63);
              }
            });
          }
        }
        catch( e ){
          return _list_arr.length;
        }


        //build tooltip or add href to .more-toggle
        if( tooltip_arg ){
          $( ".message", __item ).append( $("<a/>").addClass("more-toggle").html( (more_info_label || "Read More") ) );

          if( typeof tooltip_arg == "string" && tooltip_arg.match(/^(http|\.*\/)/) ){
            $(".more-toggle", __item ).attr({ "href":tooltip_arg, "target": "_blank" }).click(function(e){
              if( __item.hasClass("track") ){
                trackHeadbandEvent(
                  tooltipClass_arg.replace("type-","") + " | " + $(".copy", __item).text().toLowerCase(), //{Group-type}|{Message-type}
                  tooltip_arg, //href url
                  ( __item.prop("data-index") + 1 ) //position in rotation
                );
              }

              if( !$(this).hasClass(".not-bridge") && typeof validateForBridge == "function") {
                validateForBridge(this, e);
              }
            });
          }
          else{
            var __onShow = function(){
              _disable();

              expandHeadband(true);

              if( __item.hasClass("track") ){
                trackHeadbandEvent(
                  tooltipClass_arg.replace("type-","") + " | " + $(".copy", __item).text().toLowerCase(), //{Group-type}|{Message-type}
                  "Open Tooltip",
                  ( __item.prop("data-index") + 1 ) //position in rotation
                );
              }
            };
            var __id  = "tooltip_" + ( Math.ceil(Math.random() * 1000) + "_" + Math.ceil(Math.random() * 100) + "_" + Math.ceil(Math.random() * 10) );
            var __tip = new tooltips.Tooltip(__id, tooltip_arg, $(".more-toggle", __item ), $(".parents-bar-tooltips"), __onShow, _enable, tooltipLink, tooltipLinkTitle, tooltipTitle);
            if( __tip && __tip.tip && tooltipClass_arg && typeof tooltipClass_arg == "string"){
                __tip.tip.addClass( tooltipClass_arg );
                __tip.tip.addClass( "center-tip" );
            }
          }
        }

        _updateBookmarks();
        _resumeRotate();

        return _list_arr.length;
      };//_addItem()


      var _deleteItem = function( arg ){
        var __item;
        if( !_enabled ) return _list_arr.length;
        if( !isNaN( arg ) ){
          //remove item from items-list
          __item = _list_arr.splice( arg, 1 );
          //remove item from dom
          $( __item ).remove();
        }
        else{
          //remove item from dom
          $( arg, _list ).remove();

          //remove item from items-list
          var __offset = 0;
          for( var i = 0 ; i < _list_arr.length ; i++ ){
            __item = $( _list_arr[ i - __offset ] );
            if( __item.length === 0 ) {
              _list_arr.splice( i - __offset, 1);
              __offset ++ ;
            }
            else{
              __item.prop("data-index", i - __offset );
            }
          }
        }

        _rotateTo(0);//reset to first item immediately. this also set _currentIndex to 0.
        _updateBookmarks();
        return _list_arr.length;
      };//_deleteItem()


      var _updateBookmarks = function(){
        $( _bookmarksContainer ).empty().append("<ul/>");
        if( _list_arr.length < 2 ) return;

        for(var i = 0 ; i < _list_arr.length; i++){
          $( "ul", _bookmarksContainer )
          .append(
            $("<li>")
            .append(
              $("<a/>")
              .addClass( _bookmarksClass )
              .prop( "data-index", i)
              .on("click", function(){
                if( !_stopped ){
                  var __index = parseInt( $(this).prop("data-index"), 10 );
                  _rotateTo( __index );
                  _selectBookmark( __index );
                }
              })
            )
          );
        }//end for

        $( $( _bookmarks ).toggleClass("disabled", _stopped)[_currentIndex] ).addClass("selected");
      };//_updateBookmarks()


      var _selectBookmark = function(index){
        $( $( _bookmarks ).removeClass("selected")[ (!isNaN(index) ? index : _currentIndex) ] ).addClass("selected");
      };//_selectBookmark()

      //-- Animate Content ----
      var _rotate = function( steps, direction ){
        var __moveItem;//item to move
        var __DISTANCE_BEFORE_VANISH = 150;
        var __TRANSLATE_RATIO = 1/2;

        if( !_enabled || _list_arr.length <= 1 ) return;

        steps = steps || 1;//if steps is null or undefined then default to 1;
        direction = direction || 1;//if direction is null or undefined then default to 1;
        direction = direction / Math.abs(direction);//normalize to be 1 or -1

        __moveItem = $( _items ).first();

        $( __moveItem ).animate(
          { "margin-left" : "+=" + (direction * __DISTANCE_BEFORE_VANISH), "opacity" : 0  },
          ( _rotationSpeed * __TRANSLATE_RATIO ),
          function(){
              $( _list ).css({"display" : "none", "opacity" : "0" });

              for( var i = 1 ; i <= Math.abs( steps ) ; i++ ){
                steps > 0 ? $( _list ).append( $( _items ).first() ) : $( _list ).prepend( $( _items ).last() );
              }

              $( __moveItem ).css({"margin-left":"", "opacity":""});
              _currentIndex = parseInt( $( _items ).first().prop("data-index"), 10 );
              _selectBookmark();

              $( _list ).css({"display" : "", "opacity" : "0" }).animate(
                { "opacity" : 1 },
                ( _rotationSpeed * (1 - __TRANSLATE_RATIO) )
              );
          }//function()
        );//animate() translate

      };//_rotate()


      var _rotateTo = function( arg ){
        if( !_enabled || _list_arr.length <= 1 ) return;

        _stopTimers();//clear current timeouts and intervals

        if( arg == "prev" ){
          //previous item
          steps = -1;
        }
        else if( !isNaN(arg) ){
          //to item at a specific index in list
          steps = _getShortestDistance( Math.round( arg ) );
        }
        else if( typeof arg == "string" ){
          var __item;

          if( !arg.match(/^[\.#]/)  )
            //get item by id
            __item = $( "#" + arg );

          if( !__item || !__item.length )
            //get item by css selector
            __item = $( arg, _list );

          if( !__item.length )
            //can't find, exit.
            return;

          //found item
          __item = __item.first();//in case more than one match, get first
          steps = _getShortestDistance( parseInt( __item.prop("data-index"), 10 ) );
        }
        else{
          steps = 1;//next
        }

        if( !steps ) return;
        if( !_stopped ) _resumeRotate();
        _rotate( steps );
      };//_rotateTo()


      var _getShortestDistance = function( targetIndex ){
          var __forward_dist  =   ( targetIndex - _currentIndex + _list_arr.length )%_list_arr.length;
          var __backward_dist = -(( targetIndex - _currentIndex - _list_arr.length )%_list_arr.length);
          return ( __forward_dist <= __backward_dist ? __forward_dist : -__backward_dist );
      };//_getShortestDistance()


      var _resumeRotate = function(rotate_on_resume){
        if( !_enabled || _list_arr.length <= 1 ) return;

        _stopped = false;
        $( _bookmarks ).removeClass("disabled");

        _stopTimers();//clear current timeouts and intervals
        _rotateInterval = setInterval( _rotate, ( _rotationDelay + _rotationSpeed ) );

        if( rotate_on_resume === true ) _rotate();
      };//_resumeRotate();


      var _pauseRotate = function( delay, rotate_on_resume ){
        _stopTimers();
        if( delay && !isNaN( delay ) ){
          _restartTimeout = setTimeout( _resumeRotate, delay, rotate_on_resume);
        }
        else{
          _stopped = true;
          $( _bookmarks ).addClass("disabled");
        }
      };//_pauseRotate()


      var _stopTimers = function(){
        if( _rotateInterval ) clearInterval( _rotateInterval );
        if( _restartTimeout ) clearTimeout( _restartTimeout );
      };//_stopTimers()


      var _closeTooltips = function(){
        tooltips.closeAll();
        //_enable();
      };//_closeTooltips()

      var _toggleMoreinfo = function( targetMessage ){
        var __target;

        if( $(targetMessage).get(0) && ( $(targetMessage + " .more-toggle").get(0) || $(targetMessage + ".more-toggle").get(0) ) ){
          __target = $( $(targetMessage + " .more-toggle").get(0) || $(targetMessage + ".more-toggle").get(0) );
        }
        else {
          __target = $( ".more-toggle", $( _items ).first() ).get(0);
        }

        if( __target ){
          $(__target).click();
        }

      };//_toggleMoreinfo()



      /** Getters & Setters ****/
      var _updateRotationSpeed = function( s ){
        if( s && !isNaN( speed_in_ms ) ) _rotationSpeed = s;
        return _rotationSpeed;
      };//_updateRotationSpeed()


      var _updateRotationDelay = function( s ){
        if( s && !isNaN( speed_in_ms ) ){
           var __old_delay = _rotationDelay;
           _rotationDelay = s;
           if( __old_delay != _rotationDelay ) _resumeRotate();
        }
        return _rotationDelay;
      };//_updateRotationDelay()


      _init();//GO!


      return {
        /* Public Methods
        **************************/
        deleteItem : function( index_or_css_selector ){
         /**
          *@index_or_css_selector: index(int) or css-selector(string) of the item to remove
          *returns the updated number of items in the parents bar messages list
          */
          return _deleteItem( index_or_css_selector );
        },

        addItem : function( item, tooltip_or_url, tooltipClass, more_info_label, tooltipLink, tooltipLinkTitle, tooltipTitle ){
         /**
          *@item           : jquery object or html string for the items markup
          *@tooltip_or_url : jquery object or html string for the tooltips innerHTML. May also be a url instead of markup
          *@tooltipClass   : class to assign to tooltip for overriding styles
          *
          *@more_info_label  (optional): Defaults to "Read More": text to display for the more-info link or more-info tooltip toggle
          *@tooltipLink      (optional): Defaults to null: a link at the end of the tooltip leading to even more info
          *@tooltipLinkTitle (optional): Defaults to "Even More": text to display for the even-more link in the tooltip
          *@tooltipTitle     (optional): Defaults to "": H3 title to display at top of tooltip
          *returns the updated number of items in the parents bar messages list
          */
          return _addItem( item, tooltip_or_url, tooltipClass, more_info_label, tooltipLink, tooltipLinkTitle, tooltipTitle );
        },

        rotationSpeed : function( speed_in_ms ){
         /**
          *@speed_in_ms: the duration of the rotating animation -- how fast to rotate.
          *if speed_in_ms is provided then the speed of rotation is updated.
          *returns the updated/current rotation speed in milliseconds
          */
          return _updateRotationSpeed( speed_in_ms );
        },

        rotationDelay : function( delay_in_ms ){
         /**
          *@speed_in_ms: the duration of the rotating animation -- how fast to rotate.
          *if speed_in_ms is provided then the speed of rotation is updated.
          *returns the updated/current rotation speed in milliseconds
          */
          return _updateRotationDelay( delay_in_ms );
        },

        gotoNext    : function(){ _rotateTo(); },
        gotoPrevious: function(){ _rotateTo( "prev" );},
        gotoIndex   : function( integer_index ){ _rotateTo( parseInt(integer_index) ); },
        gotoElement : function( css_selector  ){ _rotateTo( css_selector ); },

        stop  : function(){ _pauseRotate(); },
        resume: function( rotate_on_resume ){ _resumeRotate( rotate_on_resume ); },
        pause : function( restart_delay_in_ms, rotate_on_resume ){
         /**
          *@restart_delay_in_ms(int): if supplied, resume will be called after restart_delay_in_ms milliseconds.
          * if restart_delay_in_ms is not supplied then this method functions the same as .stop();
          *
          *@rotate_on_resumef(boolean) if true, then upon resume the list will rotate once before abiding by the rotation delay.
          * if false, then rotating will resume and strictly abide by the rotation delay.
          */
          _pauseRotate( restart_delay_in_ms, rotate_on_resume );
        },

        toggleMoreinfo: function( targetMessage ){
          /* activate/close the "more-info" of the specified
           * message. Defaults to first message in
           * the list (currently visible message)
           *
           * @targetMessage (jQuery Object || CSS Selector : String )
           * */
          _toggleMoreinfo( targetMessage );
        },

        closeTooltips: function(){
          /* Close all tooltips  */
          _closeTooltips();
        }
        
      };//end return
    }();//end Controller
  }//end initController()



  function initSettings(){
    var settingsTooltip;
    
    settings.modules = settings.modules || function(){
    /**
     * Parentsbar Settings Controller
     * @desc:
     * @exports: {dom}.org.pbskids.parentsBar.settings()
     */

      /* Private Properties
      **************************/
      var _tooltipID     = "settings-tooltip";
      var _tipContent    = "<h3>PBS KIDS Settings</h3>";
      var _toggleButton  = "#headband-container .nav-item.settings [data-action=settings-trigger]";

      var _modulesContainer = "#" + _tooltipID;
      var _moduleClass      = "module";
      var _panelClass       = "settings-panel";
      var _allModules       = _modulesContainer + " ." + _moduleClass;
      var _allPanels        = "#" + _tooltipID + " ." + _panelClass;

      var _hotkeysModule;
      var SupervisionClient;

      /* Private Functions
      **************************/
      //-- Build & Destroy ----
      var _init = function(){
        //build tooltip
        settingsTooltip = new tooltips.Tooltip(_tooltipID, _tipContent, _toggleButton, null, _onOpenSettings, _closeAllPanels);

        if( settingsTooltip ){
          $( _toggleButton ).removeAttr("href");//just in case
        }

        //add site-wide modules
        if( !_hideExternalLinks ) _addLocalizationModule();
        if( $("html").hasClass("no-touch") || $("html").hasClass("mspointer")) _addKeyboardShortcuts();

        if( require ){
          //integrate with supervision if available
          if( require.specified('super-vision') ){
            if( require.defined('super-vision') ){
             SupervisionClient = require('super-vision');
             _addSuperVisionModule();
            }
            else{
              require( [ 'super-vision' ], function ( __supervision ) {
                SupervisionClient = __supervision;
                _addSuperVisionModule();
              });
            }
          }
        }

      };//_init()


      var _addKeyboardShortcuts = function(){
        var __Keyboard = {
              S   : 83,//show_settings
              ESC : 27 //close sh!t
            };

        var __onKeyDown = function(e){
          var keyCode = e.keyCode;
          switch(keyCode){
            case __Keyboard.S://show_settings
                 if( e.shiftKey ) settingsTooltip.toggle();
                 break;

            case __Keyboard.ESC:
                 parentsbar.controller.closeTooltips();//closes settingsTooltip too
                 break;
          }//end switch
        };//onKeyDown()

        $(document).on("keydown", __onKeyDown );
      };//_addKeyboardShortcuts()


      //-- Default (Site-wide) Modules ----
      var _addLocalizationModule = function(){
        if( org.pbskids.localization ){
          var __description = "";
          var __buttonText  = "";
          var __settings    = org.pbskids.localization.getStationPickerHTML();
          var __graphic;
          var __linkout;
          

          if( org.pbskids.localization.station ){
            __description = org.pbskids.localization.station.commonName;
            __buttonText  = "Change your station";
            __graphic     = org.pbskids.localization.station.logoURL  || "(none)";
            __linkout     = org.pbskids.localization.station.kidsSite || "";
          }
          else{
            __description = "Choose your station for TV schedules and local features";
            __buttonText  = "Find your station";
            __graphic     = "(none)";//set this to anything so that the <img/> element can be built and populated later upon localizing
          }

          //setTimeout( trackHeadbandEvent, 6000, "Localized", ( org.pbskids.localization.station ? org.pbskids.localization.station.callLetters : "Not Set") );

          var __module = _addModule( "Your Local PBS Station", __description, __buttonText, __settings, __graphic, __linkout);
          __module.module.addClass( "localization-module" );

          $(".view-settings" , __module.module).on("click",function(){
            trackHeadbandEvent( "Settings", __buttonText );
          });

          var __onLocalized = function(e){
            if( e.station ){
              $(".view-settings" , __module.module).html("Change your station");
              $(".logo" , __module.module).attr("href", e.station.kidsSite);
              $(".logo img" , __module.module).attr("src", e.station.logoURL);
              $("p.module-description" , __module.module).html(e.station.commonName || e.station.callLetters);
            }

            $("#headband-container .headband-nav .nav-item.station").css("display","");
            __module.closePanel();
          };//onLocalized()

          $(document).on(org.pbskids.localization.LocalizationEvent.STATION_CHANGE, __onLocalized);
          
        }//end if
      };//_addLocalizationModule()


      var _addSuperVisionModule = function(){
        var getCookie = function(a){var b=document.cookie,c=b.indexOf(" "+a+"=");if(-1==c&&(c=b.indexOf(a+"=")),-1==c)b=null;else{c=b.indexOf("=",c)+1;var d=b.indexOf(";",c);-1==d&&(d=b.length),b=unescape(b.substring(c,d))}return b}
        
        var __enabled     = true;
        var __href        = ( window.top != window ) ? document.referrer : window.location.href ;
        // var __CDN         = __href.match(/soup\.pbskids\.org/) ? "https://soup-tc.pbskids.org" : __href.match(/ernie\.pbskids\.org\//) ? "https://ernie-tc.pbskids.org" : __href.match(/^http:\/\/((?!www(\-tc)?\.).+)pbskids\.org/) ? "" : "https://www-tc.pbskids.org";
		var __CDN = "https://pbskids.org";
        var __SITE_ROOT   = ( __href.match(/\/~/) ? __href.substring(0,__href.indexOf("site") + 4) + "/" : "/shell/" );

        var __graphic     = __CDN + __SITE_ROOT + "images/present/supervision/logo_supervision" + ( typeof Modernizr !== "undefined" && Modernizr.svg ? ".svg" : ".png" );
        var __linkout     = "/supervision/";
        var __description = "See what your child is playing, watching, &amp; learning with our free <a href=\"" + __linkout + "\">Super Vision app for iPhone</a>. <em>Super Vision app is connected</em>";
        var __buttonText;
        var __settings;

        if( !__enabled ){
          __description += "<p style=\"font-style:italic; color:red; margin-top:6px; font-size: 0.85em;\">" +
                            "Thanks for the overwhelming interest in the Super Vision app. Our \"connect code\" system is at capacity, but will be fixed shortly." +
                           "</p>";
        }
        else{
          __buttonText  = "Connect to app";
          __settings    = '<article id="code-receipt-panel" class="sync-panels">' +
                            '<h5 class="sync-state-graphic"><em>Currently Not Connected.</em></h5>' +
                            '<h6>This is your unique Connect Code.</h6>' +
                            '<p id="sync-id-input-group" class="input-group">' +
                                '<label for="sync-id">Enter this code in the <a href="' + __linkout + '">Super Vision App</a> to connect.</label>' +
                                '<input name="sync-id" type="text" readonly/>' +
                            '</p>' +
                            '<footer></footer>' +
                          '</article>' +
                          '<article id="connection-confirmation-panel" class="sync-panels">' +
                            '<h5 class="sync-state-graphic"><em>Currently Connected.</em></h5>' +
                            '<h6>Connected to Super Vision app.</h6>' +
                            '<footer></footer>' +
                          '</article>';
        }
        
        var __module = _addModule( "PBS KIDS Super Vision", __description, __buttonText, __settings, __graphic, __linkout);
        __module.module.addClass( "supervision-module" );

        //Event handlers for Super Vision events
        var __onConnectRequest = function(e){
          $("input[name=sync-id]", __module.module).val("loading...");
          PBS.KIDS.FayeClient.refresh();
        };

        var __onRecieveSyncCode = function(data){
          $("input[name=sync-id]", __module.module).val(data.sync_code);
        };

        var __onAppConnected = function(e){
          $("body").addClass("supervision-connected");
        };

        var __onAppDisconnected = function(e){
          $("body").removeClass("supervision-connected");
          $(">footer .disconnect-supervision", __module.module).removeClass("hidden");
          $(">footer .confirm-disconnect", __module.module).addClass("hidden");
        };

        var __onConfirmDisconnect = function(e){
          $(">footer .disconnect-supervision", __module.module).addClass("hidden");
          $(">footer .confirm-disconnect", __module.module).removeClass("hidden");
        };

        var __onCancelDisconnect = function(e){
          $(">footer .disconnect-supervision", __module.module).removeClass("hidden");
          $(">footer .confirm-disconnect", __module.module).addClass("hidden");
        };

        var __onDisconnect = function(e){
          PBS.KIDS.FayeClient.disconnect();
        };


        //Finish building Super Vision settings module by adding non-common module buttons/forms
        $(">footer .view-settings", __module.module).on("click", __onConnectRequest);

        $(">footer", __module.module)
          .append(
            $("<button class=\"disconnect-supervision\">Disconnect</button>").on("click", __onConfirmDisconnect )
          )
          .append(
            $("<div class=\"confirm-disconnect hidden\" />")
              .append( $("<label>Are you sure?</label>") )
              .append( $("<button>Yes</button>").on("click", __onDisconnect ) )
              .append( $("<button>No</button>").on("click", __onCancelDisconnect ) )
          );

        $("#connection-confirmation-panel footer").append(
          $('<button>Done</button>').on("click", function(e){ settingsTooltip.hide(); })
        );

        
        // Add Listeners for Supervision Socket Events
        PBS.KIDS.FayeClient.on('init', __onRecieveSyncCode);
        PBS.KIDS.FayeClient.on('unpaired', __onAppDisconnected);
        PBS.KIDS.FayeClient.ready(__onAppConnected);

      };//_addSuperVisionModule()


      //-- Private Class Module() ----
      var Module = function( title, description, buttonText, settingsContent, image, imagelinkoutURL ){
        var __module;

        var _init = function (){
          __module = $(
                        "<article class='" + _moduleClass + "'>"  +
                          "<header><h4>" + title + "</h4></header>" +
                          (image ? (imagelinkoutURL ? "<a href='" + imagelinkoutURL + "' " : "<span" ) + " class='logo'><img src='" + (image != "(none)" ? image : "") + "' />" + (imagelinkoutURL ? "</a>" : "</span>" ) : "") +
                          "<p class='module-description'>" + description + "</p>" +
                          "<div class='" + _panelClass +" hidden'/>" +
                          ( !buttonText ? "" :
                          "<footer>" +
                            "<button class='view-settings'>" + buttonText + "</button>" +
                            "<button class='all-settings hidden'>"  + "Back" + "</button>" +
                          "</footer>"
                          ) +
                        "</article>"
                     );

          $("." + _panelClass, __module).append( $(settingsContent) );
          $(".view-settings" , __module).on("click", _openPanel );
          $(".all-settings"  , __module).on("click", _closePanel);
        };

        var _openPanel = function (){
          _closeAllPanels();
          trackHeadbandEvent( "Settings", title );
          $(_allModules).addClass("hidden").removeClass("show");
          $(__module).removeClass("hidden").addClass("show");
          $("." + _panelClass, __module).addClass("show").removeClass("hidden");
          $(".all-settings"  , __module).addClass("show").removeClass("hidden");
          $(".view-settings" , __module).removeClass("show").addClass("hidden");
          settingsTooltip.show();
        };

        var _closePanel = function(){
          $(_allModules).removeClass("hidden").removeClass("show");
          $("." + _panelClass, __module).removeClass("show").addClass("hidden");
          $(".all-settings"  , __module).removeClass("show").addClass("hidden");
          $(".view-settings" , __module).addClass("show").removeClass("hidden");
        };

        _init();//go!

        this.module     = __module;
        this.openPanel  = function(){ _openPanel();  };
        this.closePanel = function(){ _closePanel(); };
        this.closeAllPanels = function(){ _closeAllPanels(); };

      };//Module()


      var _addModule = function(title, description, buttonText, settingsContent, image, imagelinkoutURL){
        var __module = new Module(title, description, buttonText, settingsContent, image, imagelinkoutURL);
        $(_modulesContainer).append( __module.module );
        return __module;
      };


      var _closeAllPanels = function(){
        $(".all-settings", _allModules).click();
      };


      var _onOpenSettings = function(){
        trackHeadbandEvent( "Settings" );
      };


      _init();//GO!


      return {
        /* Public Methods
        **************************/
        addModule : function(title, description, buttonText, settingsContent, graphic){
          return _addModule(title, description, buttonText, settingsContent, graphic);
        },

        closeAllPanels : function(){ _closeAllPanels(); }

      };//end return
    }();//end settings
  }//end initSettings()


  function initEvents(){
    parentsbar.HeadbandEvent = parentsbar.HeadbandEvent || function(){
      /* Private Properties
      **************************/
      var _EVENT_CLASS = "org_pbskids_parentsbar_HeadbandEvent";
      var _debug = false;

      return {
        /* Public Properties
        **************************/
        /* Event Types */
        HEADBAND_READY : _EVENT_CLASS + "_HeadbandReady",

        /* Public Methods
        **************************/
        dispatchEvent : function(o){
          var e, d = {};
          o.eventType = (o.eventType || "").replace(/\./g,"_");
          switch( o.eventType ){
            case this.HEADBAND_READY:
              //this event has no additional data to send in dataObject, d = {}
              break;

            default:
              return;
          }//end switch

          e = $.Event(o.eventType);// build custom event object
          for(var i in d) e[i] = d[i];//add custom data to event object
          $(o.caller || document).trigger(e);//fire/dispatch/trigger custom event

          if( window.$ && window.$ != $ ){
            //This is to dispatch the event if a producer is using a global 
            //version of jQuery which is not the same version used by this class.
            if( typeof (window.$(o.caller || document).trigger) == "function"  )
              window.$(o.caller || document).trigger(e);
          }

        }//dispatchEvent()
      };//return
    }();//HeadbandEvent();
  }//end initEvents()


  function initTooltips(){
    var _tooltipsContainer = "";
    var _tooltipClass      = "parents-tooltip";
    var _tooltips          = _tooltipsContainer + " ." + _tooltipClass;

    var _closeAll = function(){
      if( _tips ){
        for(var tip = 0 ; tip < _tips.length ; tip++ ){
          _tips[tip].hide();
        }
      }

     /**
      * "return true", is here solely for preventing any
      * code from executing until this function is done.
      */
      return true;
    };

    var _Tooltip = function(id, content, toggleButton, parent, onShow, onHide, tooltipLink, tooltipLinkTitle, tooltipTitle){
      var _that = this;
      var _tooltipsContainer;//Set in try/catch below
      var _tip;

      // validate input parameters
      if( !id || typeof id !== "string"){
        return false;
      }

      if( $( "#" + id ).get(0) ){
        return false;
      }

      if( //check if they submit something
          !toggleButton

          //check that they didn't submit an empty string or a string of spaces/tabs
          || (typeof toggleButton === "string" && toggleButton.replace(/\s*/g,"").length == 0 )

          //check that the button exists
          || !$(toggleButton).get(0)
      ){
        return false;
      }

      try{
        // all required items exist, try to build it
        if( typeof content === "string" && !content.match(/^\s*\<.*\>\s*$/) ){
          content = "<h3 class='title'>" + ( typeof tooltipTitle === "string" ? tooltipTitle : "" ) + "</h3><p class='message'>" + content + "</p>";
        }

        _tooltipsContainer = $(parent).get(0) || $( toggleButton ).parent();
        content = $( content );

        _tip = $("<div/>")
               .attr("id", id)
               .addClass(_tooltipClass + " down no-show")
               .appendTo( $( _tooltipsContainer ) )
               .append( content )
               .append(
                 $("<button><em>Close</em></button>")
                  .addClass("close-tooltip-button")
                  .attr("title","Close")
                  .on("click", function(e){ _that.hide(); })
               );

        if( tooltipLink  ){
          $(".message", _tip).append( $("<a href='" + tooltipLink + "' target= '_blank' class='link-out-Button'>" + ( tooltipLinkTitle || "Even More") + "</a>") );
        }

        $("a", _tip).attr("target","_blank")
        .not(".not-bridge").click(function(e){
          if(typeof validateForBridge == "function") {
            validateForBridge(this, e);
          }
        });

        $( toggleButton ).on("click", function(e){ _that.toggle(); });

      }
      catch( e ){
        return false;
      }

      // Finalize ToolTip Object
      var _show = function(){
        if( _tip.hasClass("show") ) return;

        _closeAll();
        _tip.addClass("show").removeClass("no-show");

        if( onShow && typeof onShow === "function"){
          onShow.call( _tip );
          
          if (_tip.hasClass('center-tip')){
            // Set position of tooltip
            var current_tootip =  _tip;

            var current_tootip_trigger = $('.parents-message:first-child').find('.message .more-toggle');

            var _position_tip = function() {
              var tootip_trigger_position_left = current_tootip_trigger.offset().left;
              var tootip_center_position = current_tootip.width()/2;
              var corrected_tooltip_position = tootip_trigger_position_left - tootip_center_position;
              
              current_tootip.css({
                marginLeft: '0',
                left: corrected_tooltip_position
              });
            };
        
            // Set position first time, then bind on resize
            _position_tip();
            $(window).on('resize', _position_tip);
          }
        }
        
        setTimeout(function(){
         $("body").addClass("tool-open"); // Timeout to account for CSS animation 
        }, 500);
        
      };

      var _hide = function(){
        _tip.removeClass("show").addClass("no-show");
        if( onHide && typeof onHide === "function"){
          onHide.call( _tip );
        }
        $("body").removeClass("tool-open");
      };

      var _toggle = function(){
        _tip.hasClass("show") ? _hide() : _show() ;
      };
      
      // Adding close tooltip on clickoutside functionality
      $(document).on('click', function(e){
        if ($(e.target).is('.parents-tooltip') || $(e.target).parents().is('.parents-tooltip')){
      
      } else if ($('body').hasClass('tool-open')) {
          PBS.KIDS.require('headband').parentsbar.tooltips.closeAll();
        }
      });

      _tips = _tips || [];
      _tips.push(this);
    

      //create "public" methods and properties
      this.toggle = function(){ _toggle(); };
      this.hide   = function(){ _hide();   };
      this.show   = function(){ _show();   };
      this.tip    = _tip;
    };//end _tooltip()

    tooltips.closeAll = function(){ _closeAll(); };
    tooltips.Tooltip  = function(id, content, toggleButton, parent, onShow, onHide, tooltipLink, tooltipLinkTitle, tooltipTitle ){
    /**
     * @id: the id to give the tooltip element
     * @content: the contents of the tooltip as an htmlString or jquery object
     * @toggleButton: css-selecter or jquery object of the button(s) which toggle open/close the tooltip
     * @parent (optional): Default = parent of @toggleButton | The parent element you want to append the tool tip to.
     * @onShow (optional): Default = null | a callback function to call upon opening/showing the tooltip
     * @onHide (optional): Default = null | a callback function to call upon closing/hiding the tooltip
     *
     * @tooltipLink      (optional): Defaults to null        | a link at the end of the tooltip leading to even more info
     * @tooltipLinkTitle (optional): Defaults to "Even More" | text to display for the even-more link in the tooltip
     *
     * @tooltipTitle (optional): Defaults to "" | title to be wrapped in <h3/>. Only used if @content is a string void of any non-html markup.
     * usage: "<h3 class='title'>" + tooltipTitle + "</h3><p class='message'>" + content + "</p>"
     *
     * Returns tooltip Object. Returns false if failure to create tooltip
     */

      var _t = new _Tooltip(id, content, toggleButton, parent, onShow, onHide, tooltipLink, tooltipLinkTitle, tooltipTitle);
      return _t.tip ? _t : false;
    };
    
  }//end initTooltips()
  
  function initSponsors(){
      var sponsoship_container = $('#shell-sponsorship');
      var sponsor_name = sponsoship_container.find('.sponsor-name');
      var sponsor_link = sponsoship_container.find('.sponsor-link');
      var sponsor_identity = sponsoship_container.find('.sponsor-identity');
      var bridge_content = sponsoship_container.find('#sponsor-overlay-content');
      var sponsor_data = null;
      
      $.getJSON('/sponsorship/campaigns.json', function(data) {
          sponsor_data = data[0];
          var sponsor = sponsor_data.web;
          var bridge_data = sponsor.bridge_page;
          var headband_text_color = $('#headband-container .headband-nav .nav-item a').css('color');
          
          // Set content in sponsor container
          sponsor_name.css('color', headband_text_color);
          sponsor_name.find('em').html(sponsor_data.name);
          sponsor_link.attr('href', sponsor.url);
          sponsor_link.attr('title', sponsor_data.name);
          sponsor_identity.attr('src', sponsor.logo);
          sponsor_identity.attr('alt', sponsor_data.name + ' Logo');
          
          // Set content and color for Bridge Overlay
          bridge_content.find('.sponsor-overlay-image').attr('src', bridge_data.image_url);
          bridge_content.find('.sponsor-overlay-image').attr('alt', bridge_data.image_alt_text);
          bridge_content.find('.sponsor-overlay-headline').html(bridge_data.headline_text);
          bridge_content.find('.sponsor-overlay-text').html(bridge_data.body_text);
          bridge_content.find('.sponsor-overlay-button').html('Visit Our Site');
          bridge_content.find('.sponsor-overlay-button').attr('href', sponsor.url);
          
          bridge_content.css('color', bridge_data.content_color);
          bridge_content.find('.sponsor-overlay-button').css('background-color', bridge_data.content_color);
          
          sponsor_link.on('click', function(e) {
              e.preventDefault();
              bridge(sponsor.url, sponsor_data.name, 'sponsor-link');
              GA_obj.trackEvent('website sponsorship', 'display unit click', sponsor_data.name);
              
          });
          
          // Add cloned sponsor to footer for handheld states
          var footer_sponsor = sponsoship_container.clone().attr('id', 'shell-sponsorship-footer');
          footer_sponsor.find('#sponsor-overlay-content').remove();
          
          // Place footer version of sponsor in appropiate location on each shell page.
          if ($('body').hasClass('home')) {  $('#6-to-8 .content-col.grid-tabs.wide').append(footer_sponsor);  }
          else if ($('body').hasClass('video-player')) {  $('div[role=main] .browsing-panel').append(footer_sponsor);  }
          else if ($('.no-flash body').hasClass('games') || $('body').hasClass('topics-page')) {  $('#topics-panel').append(footer_sponsor);  }
          else if ($('.has-flash body').hasClass('games')) {  $('#hard-games-panel').append(footer_sponsor);  }
          else if ($('body').hasClass('all-page')) {  $('.section-panel > .max-wrapper').append(footer_sponsor);  }
          else if ($('[role=main] > footer div').hasClass('viewOn')) {  $('[role=main] > footer').append(footer_sponsor);  } // for more apps. Change once there is a body class hook. -mm
          
          
          $('#shell-sponsorship-footer').find('.sponsor-link').on('click', function(e) {
              e.preventDefault();
              bridge(sponsor.url, sponsor_data.name, 'sponsor-link');
              GA_obj.trackEvent('website sponsorship', 'display unit click (from footer)', sponsor_data.name);
          });
          
          sponsoship_container.fadeIn();

          $('body').on('touchmove', function(e) {
              if ($(this).hasClass('bridge-open')){
                  e.preventDefault();
              }
          });
          
          // Thorottled Resize event to update values for RWD    
          $(window).smartresize( function(){
            var headband_text_color = $('#headband-container .headband-nav .nav-item a').css('color');
            sponsor_name.css('color', headband_text_color);
          });
          
      });
  }
    
  initSponsors();


  function formatTime(seconds){
  /* @seconds (Number), time in seconds
   * return (String), [m]m:ss
   */
    if( isNaN(seconds) ) return "--:--";
    if( seconds <= 0 || seconds > Infinity) return "--:--";

    var __m = Math.floor(seconds / 60),
        __s = Math.floor((seconds) % 60);

    return ( __m + ":" + (__s < 10 ? "0" : "") + __s );
  }//end formatTime()


  $.fn.addHref = function(url, title)
  {
    if(!url) $(this).attr({'href': "",'title': "" }).addClass("hidden");
    else $(this).attr({'href': url,'title': ( title || "") }).removeClass("hidden");
    return $(this);
  };//$.fn.addHref()


  $(document).ready( init );


  return{
    "parentsbar": parentsbar,
    "settings"  : settings
    //parentsbar object is also accessible via (window|exports).org.pbskids.parentsbar
    //settings object is also accessible via (window|exports).org.pbskids.settings
  };
}));
