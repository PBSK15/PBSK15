/***********************************
 * September 20, 2013
 *-------------------------------
 * @author Renzo Olguin
 * @email rmolguin@pbs.org
 *
 * Added dev.pbskids.org, qa.pbskids.org, and demo.pbskids.org
 * Added bridge events:
 *    org.pbskids.bridge.BRIDGE_READY
 *    org.pbskids.bridge.BRIDGE_OPENNING
 *    org.pbskids.bridge.BRIDGE_OPEN
 *    org.pbskids.bridge.BRIDGE_CLOSING
 *    org.pbskids.bridge.BRIDGE_CLOSED
 *
 * Made AMD ready for PBS.KIDS.require.js and require.js
 ***********************************/

/***********************************
 * November 3, 2011
 *-------------------------------
 * @author Jon P. White
 * @author Cosimo Felline
 *
 * CF and JPW temporarily commented out both the EVENT TRACKING CLICK EVENTS (see bottom) and this instantiating GETTRACKER string assignment for SPONSOR TRACKING.
 * (We left in the generic, non-sponsor-bound GA event trackings.)
 * As soon as we have an actual sponsor, that requires actual Event Tracking, BE SURE TO UN-COMMENT EACH OF THESE LINES/BLOCKS.
 * And make sure that the GETTRACKER UA string (i.e., ua-4005001-4) is really and truly accurate against the proper online GA account.
 * ...For both Soup and Live.
 ***********************************/


(function( require, define, factory ){
  //AMD support for {Global}.requireJS
  if( typeof define === "function" && define.amd ){
    define(["jquery", "bridge-urls"], factory);
  }
  else{
    factory( jQuery );
  }

}( PBS.KIDS.require, PBS.KIDS.define, function( jQuery ){
  var bridgeParentsLogo   = jQuery('').attr('src','https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622036768/common/images/bridge/parents-logo.gif');
  var bridgeTeachersLogo  = jQuery('').attr('src','https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622036802/common/images/bridge/teachers-logo.gif');
  var bridgeSign          = jQuery('').attr('src','https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622036838/common/images/bridge/sign.gif');
  var bridgeYouAreLeaving = jQuery('').attr('src','https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622036859/common/images/bridge/youareleaving.gif');

  var cursorFix = false;
  var bridgeActive = false;
  var osName = '';

  if( typeof window.jQuery !== 'undefined' && jQuery === window.jQuery && bridgeNoConflict(location.hostname, location.pathname) === true) {
    jQuery.noConflict();
  }

  var defaultCustomBridgeOpacity = '.8';
  if( typeof customBridgeOpacity == 'undefined' ) var customBridgeOpacity = defaultCustomBridgeOpacity;

  var exports = ( typeof exports !== 'undefined' ) ? exports : window ;
  var createPackage = function(packagePath){
    // @packagePath(String), ex: "com.domain.path.appName.featureName"
    // @return(Object), ex: exports.com.domain.path.appName.featureName = {}

    var pak = exports;
    var dir;

    if( typeof packagePath === 'string' ){
      dir = packagePath.split(".");
      for( var i = 0; i < dir.length; i++ ){
        if( !pak[dir[i]] ) pak[dir[i]] = {};
        pak = pak[dir[i]];
      }
    }

    return pak;
  };//end utils.createPackage

  createPackage("org.pbskids.bridge");
  exports.org.pbskids.bridge.BridgeEvent = exports.org.pbskids.bridge.BridgeEvent || function(){
    /* Private Properties
    **************************/
    var _EVENT_CLASS = "org_pbskids_bridge_BridgeEvent";
    var _debug = false;

    return {
      /* Public Properties
      **************************/
      /* Event Types */
      BRIDGE_READY    : _EVENT_CLASS + "_BridgeReady",
      BRIDGE_OPEN     : _EVENT_CLASS + "_BridgeOpen",
      BRIDGE_CLOSED   : _EVENT_CLASS + "_BridgeClosed",

      /* Public Methods
      **************************/
      dispatchEvent : function(o){
        var e, d = {};
        o.eventType = (o.eventType || "").replace(/\./g,"_");
        switch( o.eventType ){
          case this.BRIDGE_READY:
          case this.BRIDGE_OPEN:
          case this.BRIDGE_CLOSED:
            //these events have no additional data to send in dataObject, d = {}
            break;

          default:
            return;
        }//end switch

        e = jQuery.Event(o.eventType);// build custom event object
        for(var i in d) e[i] = d[i];//add custom data to event object
        jQuery(o.caller || document).trigger(e);//fire/dispatch/trigger custom event

        if( window.jQuery && window.jQuery != jQuery ){
          //This is to dispatch the event if a producer is using a global
          //version of jQuery which is not the same version used by this class.
          window.jQuery(o.caller || document).trigger(e);
        }

        if (window.PBSKidsPlayerEvents) {
          PBSKidsPlayerEvents.emit(e.type, e);
        }

      }//dispatchEvent()
    };//return
  }();//BridgeEvent();


  var validateForBridge = function (element, e){
    if( (( bridgeURLs(element.hostname, element.pathname) === true ) && bridgeURLs( window.location.hostname, window.location.pathname ) === false ) && ( jQuery(element).attr('href').indexOf('javascript:') == -1 ) )
    {
      var pathnameslash = '';
      if( element.pathname.substring(0, 1) != '/' ) { pathnameslash = '/'; }

      var bridgeNotBuilt = ( bridge((jQuery(element).attr('href')), jQuery(element).attr('title'), jQuery(element).attr('class'), jQuery(element).attr('rel'), jQuery(element).attr('rev')) );
      if( !bridgeNotBuilt ){
        //This is to also stop links which target "_blank"
        if(e.preventDefault) e.preventDefault();
        else e.returnValue = false;
        e.cancelBubble = true;
        if(e.stopPropagation) e.stopPropagation();
      }
      return bridgeNotBuilt;
    }
  };//end validateForBridge()


  var flashBridge = function (href, title){
    if( bridgeURLs(window.location.hostname, window.location.pathname) === false ){
      bridge(href, title);
    } else {
      window.location.href = href;
    }
  };//end flashBridge()


  var bridge = function (linkhref, linktitle, linkclass, linkrel, linkrev) {
    // Make arguments optional
    if (typeof linkclass == 'undefined' ) linkclass = 'default';
    if (typeof linkrel == 'undefined' ) linkrel = 'default';
    if (typeof linkrev == 'undefined' ) linkrev = 'default';

    // Split linkhref into hostname and pathname
    var linkhrefSplit = linkhref.split('//');
    var hostname;

    if (linkhrefSplit.length > 1) {
      linkhrefSplit = linkhrefSplit[1].split('/');
      hostname = linkhrefSplit[0];

      var pathnamestring = '';
      for (var i=1;i<linkhrefSplit.length;i++) {
        pathnamestring += '/' + linkhrefSplit[i];
      }
      pathname = pathnamestring;

      if (typeof pathname == 'undefined') { pathname = ''; }
    }
    else {
      pathname = linkhrefSplit[0];
      var windowhref = window.location.href;
      windowhref = windowhref.split('//');
      windowhref = windowhref[1].split('/');
      hostname   = windowhref[0];
    }

    if ( !bridgeActive ) {
      var documentWidth = jQuery(window).width();
      var documentHeight = jQuery(document).height();

      // Configuration Variables . All sizes are pixels
      bridgeHeight = 210;
      if( (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPhone/i)) ) {
        bridgeWidth = documentWidth * 0.9;
      } else {
        bridgeWidth = 370;
      }
      bridgeBorder = 10;
      bridgePadding = 15;

      // Attach bridge event to all links not going to pbskids.org, soup.pbskids.org, dev.pbskids.org, qa.pbskids.org, or demo.pbskids.org

      bridgeActive = true;

      if (pathname.substring(0,1) == '/') { bridgeLinkPathname = pathname; }
      else { bridgeLinkPathname = '/' + pathname; }

      // If link has a linktitle attribute, use it for bridge link
      if ( linktitle ) {
        bridgeLinkTitle = linktitle;
      }
      // If not, use the URL itself
      else {
        bridgeLinkTitle = hostname + bridgeLinkPathname;
        // If url is longer than 50 characters, cut the URL short and append '...'
        if ( bridgeLinkTitle != bridgeLinkTitle.substring(0, 20) ) {
          bridgeLinkTitle = bridgeLinkTitle.substring(0, 20) + '&hellip;';
        }
      }
      bridgeLink = linkhref;

      // Accesses function from bridge.urls.js where templates are specified
      bridgeTemplate = bridgeURLTemplates( hostname, pathname, linkclass );


      // A/B Testing
      // var coinFlip = Math.floor(Math.random()*2);
      var coinFlip = 0;
      var testSegment = coinFlip === 0 ? 'alpha' : 'beta';

      // Turn all bridge templates to default except sponsor
      if (testSegment == 'beta' && bridgeTemplate != 'sponsor') {
        bridgeTemplate = 'default';
      }


      if ( bridgeTemplate == 'parentsSection' ) {
        bridgeLinkTitle = 'the Parents&nbsp;and&nbsp;Teachers&nbsp;section';
      }

      bridgeBackground = '#b3ce34';
      bridgeTitleBackground = '#b3ce34 url(https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622036859/common/images/bridge/youareleaving.gif) no-repeat 50% 50%';
      bridgeX = 'bridge-x.gif';
      bridgeLinkColor = '#516F00';
      bridgeTextColor = '#ffffff';

      if (navigator.appVersion.indexOf("Mac") != (-1) ) { osName="MacOS"; }
      cursorFix = bridgeCursorFix(window.location.hostname, window.location.pathname);

      jQuery('object, embed').each(function(){
        var windowMode = jQuery(this).attr('wmode');
        if (typeof windowMode == 'undefined'){
          windowMode = jQuery('object').find("param[name='wmode']").attr('value');
        }
        if( (windowMode != 'transparent' && windowMode != 'Transparent' && windowMode != 'opaque' && windowMode != 'Opaque') || (osName == 'MacOS' && cursorFix)) {
          this.style.visibility = 'hidden';
        }
      });

      // Create bridge overlay elements
      if ( bridgeTemplate == 'parents' || bridgeTemplate == 'parentsSection' ) {

      jQuery('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeSignLink"><img src="/images/bridge/sign.gif" id="sign" width="213" height="92" alt="" /><img src="/images/bridge/parents-logo.gif" id="parentsLogo" width="159" height="27" alt="PBS Parents" /></a></p><a href="" id="close" title="Back to PBS KIDS"><img src="https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622037383/common/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');

        jQuery('#bridgeInner a.bridgeSignLink').css({
          'bottom' : '0',
          'display' : 'block',
          'height' : '92px',
          'left' : '10px',
          'margin' : '0 80px',
          'outline' : 'none',
          'position' : 'absolute',
          'width' : '213px'
        });

        jQuery('#parentsLogo').css({
          'left' : '20px',
          'position' : 'absolute',
          'top' : '18px'
        });

      }
      else if ( bridgeTemplate == 'teachers' ) {

        jQuery('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeSignLink"><img src="/images/bridge/sign.gif" id="sign" width="213" height="92" alt="" /><img src="/images/bridge/teachers-logo.gif" id="learningMediaLogo" width="138" height="33" alt="PBS LearningMedia" /></a></p><a href="" id="close" title="Back to PBS KIDS"><img src="https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622037383/common/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');

        jQuery('#learningMediaLogo').css({
          'left' : '30px',
          'position' : 'absolute',
          'top' : '14px'
        });

      } else if ( bridgeTemplate == 'sponsor' ) {
        var sponspor_bridge_content = jQuery('#sponsor-overlay-content').clone();

        bridgeWidth = 637;
        bridgeBackground = '#ffffff';

        jQuery('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge" class="sponsor-bridge"><div id="bridgeInner"><button id="secondaryClose" class="close-overlay"><em>Close</em></button></div></div>');

        jQuery('#bridgeInner').append(sponspor_bridge_content);
        jQuery('#bridgeInner').css({ 'height' : '320px'});
      }
      else {
        jQuery('body').append('<div id="bridgeContainer"></div><div id="bridgeOutline"></div><div id="bridge"><div id="bridgeInner"><h3>You are now leaving PBS KIDS</h3><p><a href="' + bridgeLink + '" title="' + bridgeLink + '" class="bridgeLink">Continue to ' + bridgeLinkTitle + '&nbsp;&raquo;</a></p><a href="" id="close" title="Back to PBS KIDS"><img src="https://res.cloudinary.com/good-old-pbs-cdn/image/upload/v1622037383/common/images/bridge/back-arrow.gif" width="55" height="67" alt="Back" /></a></div></div>');

        jQuery('#bridge #bridgeInner a.bridgeLink').click(closeBridge);
      }

      // All Styles necessary to get height
      jQuery('#bridgeInner p').css({
        'margin' : '0 0 1em 0'
      });

      jQuery('#bridgeInner a.bridgeLink').css({
        'cursor' : 'pointer',
        'font-weight' : 'normal',
        'text-decoration' : 'underline'
      });

      jQuery('a img').css({ 'border' : '0' });

      jQuery('#bridgeContainer').css({
        'background-color' : '#000000',
        'position' : 'absolute',
        'height' : documentHeight,
        'width' : documentWidth,
        'top' : '0',
        'left' : '0',
        'opacity' : '0',
        'text-align' : 'left',
        'z-index' : '10000'
      });

      jQuery('#bridgeInner').css({
        'font-size' : '16px',
        'padding' : '1px',
        'line-height' : '1.4',
        'text-align' : 'left'
      });

      jQuery('#bridge').css({
        'background' : bridgeBackground,
        'font-family' : 'arial, verdana, sans-serif',
        'padding' : '1px',
        'position' : 'absolute',
        'left' : (documentWidth / 2) - (bridgeWidth / 2) + 'px',
        'opacity' : '0',
        'z-index' : '10002'
      });

      if (bridgeTemplate !== 'sponsor') {
        jQuery('#close').css({
          'bottom' : '0',
          'display' : 'block',
          'height' : '67px',
          'left' : '15px',
          'outline' : 'none',
          'position' : 'absolute',
          'width' : '55px'
        });
      }


      // All post-height styles
      bridgeHeight = jQuery('#bridgeInner').height();

      jQuery('#bridgeOutline').css({
        'position' : 'absolute',
        'width': (bridgeWidth * 1) + (bridgeBorder * 2) + 'px',
        'height' : '222px',
        'top' : (jQuery(window).height() / 2) - (bridgeHeight / 2) - (bridgeBorder * 1) + jQuery(window).scrollTop() + 'px',
        'left' : (documentWidth / 2) - (bridgeWidth / 2) - (bridgeBorder * 1) + 'px',
        'opacity' : '0',
        'z-index' : '10001'
      });

      jQuery('#bridge').css({
        'height' : bridgeHeight + 'px',
        'top' : (jQuery(window).height() / 2) - (bridgeHeight / 2) + jQuery(window).scrollTop() + 'px'
      });

      // Bridge behaviors
      if (typeof GA_obj !== 'undefined'){
        jQuery('.bridgeLink').click(function(){
          if (bridgeTemplate == 'sponsor') {
            var sponsor = jQuery('#shell-sponsorship.static-sponsor .sponsor-name em').html();
            GA_obj.trackEvent('website sponsorship', 'bridge page click through', sponsor);
          }
          GA_obj.trackEvent('bridge_click_' + bridgeTemplate + '_' + testSegment, 'continue', 'textlink');
        });

        jQuery('.bridgeSignLink').click(function(){
          GA_obj.trackEvent('bridge_click_' + bridgeTemplate + '_' + testSegment, 'continue', 'sign');
        });

        jQuery('.bridgeImageLink').click(function(){
          GA_obj.trackEvent('bridge_click_' + bridgeTemplate + '_' + testSegment, 'continue', 'imagelink');
        });

      }

      jQuery('#bridgeContainer').animate({'opacity' : customBridgeOpacity}, 'fast', function() {
        jQuery('#bridge').animate({'opacity' : '1'}, 'fast');

        jQuery('#bridgeOutline').animate({'opacity' : '1'}, 'fast', function(){
	        jQuery('#bridgeOutline').css('width', '+=1');
        });

        jQuery('#bridgeContainer').css('width', '+=1');
      });



      jQuery('#bridgeContainer').click(function() {
        if (typeof GA_obj !== 'undefined') {
          GA_obj.trackEvent('bridge_click_' + bridgeTemplate + '_' + testSegment, 'close', 'outside');
        }
        closeBridge();
      });

      jQuery('#close,#secondaryClose').click(function() {
        if (typeof GA_obj !== 'undefined') {
          GA_obj.trackEvent('bridge_click_' + bridgeTemplate + '_' + testSegment, 'close', 'arrow');
        }
        closeBridge();
        return false;
      });

      jQuery(document).keyup(function(event){
        if (event.keyCode == 27) {
          if (typeof GA_obj !== 'undefined') {
            GA_obj.trackEvent('bridge_click_' + bridgeTemplate + '_' + testSegment, 'close', 'escape');
          }
          closeBridge();
        }
      });

      var windowScrolled = function() {
        jQuery('#bridgeOutline').css({
          'top' : (jQuery(window).height() / 2) - (bridgeHeight / 2) - (bridgeBorder * 1) + jQuery(window).scrollTop() + 'px',
          'left' : (jQuery(window).width() / 2) - (bridgeWidth / 2) - (bridgeBorder * 1) + 'px'
        });
        jQuery('#bridge').css({
          'top' : (jQuery(window).height() / 2) - (bridgeHeight / 2) + jQuery(window).scrollTop() + 'px',
          'left' : (jQuery(window).width() / 2) - (bridgeWidth / 2) + 'px'
        });
      };

      var windowResized = function () {
        jQuery('#bridgeContainer').css({
          'height' : jQuery(document).height(),
          'width' : jQuery(window).width()
        });
        windowScrolled();
      };

      // Reposition bridge on scroll
      jQuery(window).bind("scroll", windowScrolled);

      // Resize container on resize event
      jQuery(window).bind("resize", windowResized);

      // add body class for hooks
      jQuery('body').addClass('bridge-open');

      if ( bridgeTemplate == 'sponsor' ) {
          jQuery('body').addClass('sponsor-bridge-open');
      }

      exports.org.pbskids.bridge.BridgeEvent.dispatchEvent({
        eventType: exports.org.pbskids.bridge.BridgeEvent.BRIDGE_OPEN,
        caller   : document
      });//BridgeEvent.dispatchEvent()
      return false;

    }
    else {
      return false;
    }

    return true;// not sure why this is here. Need to ask Cosimo or Miguel. I don't think this ever gets reached
  };//end bridge()

  var closeBridge = function(e) {
    jQuery('#bridgeOutline').animate({'opacity' : '0'}, 'fast');
    jQuery('#bridge').animate({'opacity' : '0'}, 'fast', function() {
      jQuery('#bridgeContainer').animate({'opacity' : '0'}, 'fast', function() {
        jQuery('#bridge').remove();
        jQuery('#bridgeOutline').remove();
        jQuery('#bridgeContainer').remove();
        jQuery('object, embed').each(function(){this.style.visibility = 'visible';});
      });
    });
    /* jQuery(window).unbind('resize'); This breaks a lot of things...WTF. -mm */
    bridgeActive = false;
    jQuery('body').removeClass('bridge-open');
    jQuery('body').removeClass('sponsor-bridge-open');

    exports.org.pbskids.bridge.BridgeEvent.dispatchEvent({
      eventType: exports.org.pbskids.bridge.BridgeEvent.BRIDGE_CLOSED,
      caller   : document
    });//BridgeEvent.dispatchEvent()
  };//end closeBridge()

  jQuery(document).ready(function(){
    // First, get the global GA tracker variable ready
    currentUrl = window.location.href;

    if( typeof customBridgeOpacity == 'undefined' ) customBridgeOpacity = defaultCustomBridgeOpacity;
    // Preload bridge images
    // jQuery.preloadImages('/images/bridge/parents-logo.gif', '/images/bridge/teachers-logo.gif', '/images/bridge/sign.gif', '/images/bridge/youareleaving.gif');
    var bridgeSponsorImages = [];

    jQuery('a').not('.not-bridge').each(function(i){
      if( jQuery(this).attr('class') == 'pbskids_bridge_sponsor' )
      {
        bridgeSponsorImages[i] = new Image();
        bridgeSponsorImages[i].src = jQuery(this).attr('rel');
      }
    });

    jQuery('a, area').not('.not-bridge').click( function(e){
      var vali = validateForBridge(this, e);
      return vali;
    });

    exports.org.pbskids.bridge.BridgeEvent.dispatchEvent({
      eventType: exports.org.pbskids.bridge.BridgeEvent.BRIDGE_READY,
      caller   : document
    });//BridgeEvent.dispatchEvent()

  });//end .ready();

  //Create Globals
  exports.validateForBridge = validateForBridge;
  exports.flashBridge       = flashBridge;
  exports.bridge            = bridge;
  exports.closeBridge       = closeBridge;

  return (
    "Created : \r\n" +
    "  - window.validateForBridge() \r\n" +
    "  - window.flashBridge() \r\n" +
    "  - window.bridge() \r\n" +
    "  - window.closeBridge() \r\n" +
    "  - window.org.pbskids.bridge.BridgeEvent()"
  );

}));