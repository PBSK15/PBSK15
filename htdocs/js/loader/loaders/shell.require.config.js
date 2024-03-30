(function( require ){

  require.config( function( viewSelector ){
    var href  = ( window.top != window ) ? document.referrer : window.location.href;
    //var cdn   = href.match(/soup\.pbskids\.org/) ? "http://soup-tc.pbskids.org" : href.match(/ernie\.pbskids\.org\//) ? "http://ernie-tc.pbskids.org" : href.match(/^http:\/\/((?!www(\-tc)?\.).+)pbskids\.org/) ? "" : "http://www-tc.pbskids.org";
	var cdn = "https://pbskids.org";
    var views = [
      {"page" : 'newsletter' , "view": 'newsletter'},
      {"page" : 'games'      , "view": 'games'},
      {"page" : 'all-topics' , "view": 'all-page'},
      //{"page" : 'everything' , "view": 'all-page'},
      {"page": 'everything', "view": "home"},
      {"page" : 'profile'    , "view": 'profile'},
      {"page" : 'tv-times'   , "view": 'tv-times'}
    ];

    var getQuery = (function (a) {
      var i, p, b = {};
      if( a !== "" ){
        for( i = 0; i < a.length; i ++ ) {
          p = a[i].split('=');
          if( p.length > 0 ) b[p[0]] = p[1] ? decodeURIComponent( p[1].replace(/\+/g, " ") ) : "" ;
        }
      }
      return b;
    }(window.location.search.substr(1).split('&')));

    var shell_root    = cdn + (href.match(/\/~.*\/site\/?/) ? href.substring(0,href.indexOf("site") + 4) + "/" : "/shell/");
    var messages_root = cdn + '/messages/scripts/';
    var carson_root   = cdn + (function( m ){ return ( m ? m[0] : "/" ); }( href.match(/(\/~([a-zA-Z0-9]+)\/)|\/cms/) ));
    var view          = viewSelector( href, views, 'home' );
    var faye_root     = href.match(/dev\.pbskids\.org/) ? "http://automata.pbskids.org:9000" : href.match(/qa\.pbskids\.org\//) ? "http://automata.pbskids.org:9000" : "http://supervision.pbskids.org:9100";
    
    require.cdn = cdn;


    return{
      baseUrl: cdn + '/js/',
      urlArgs: "version=1.52",
      shim: {
        'sound': {
          exports: 'createjs'
        },
        'Handlebars': {
          exports: 'Handlebars'
        },
        'faye': {
          exports: 'Faye'
        }
      },
      paths: {
        //jQuery and jQuery Plugins
        'jquery'          : 'loader/lib/jquery/jquery-1.10.2',
        'jquery-easing'   : shell_root + 'js/lib/jquery/plugins/jquery-easing-1.3',
        'jquery-touch'    : shell_root + 'js/lib/jquery/jquery.mobile-1.3.1-touch-swipe-only.min',
        'jquery-mobile'   : shell_root + 'js/lib/jquery/jquery.mobile.custom',
        'jquery-bxslider' : shell_root + 'js/lib/jquery/plugins/jquery.bxSlider.min',

        //PBS KIDS HEADBAND MODULES
        'headband'     : shell_root + 'js/headband/headband',
        'login'        : 'lib/login/login',
        'login-compatibility' : 'lib/login/login-compatibility',
        'localization' : 'lib/localization/localization',
        
        //PBS KIDS MESSAGING SYSTEM
        'jquery-noconflict' : messages_root + 'jquery/jquery-noconflict',
        'pubsub'            : messages_root + 'PubSubJS/PBS.KIDS.pubsub',
        'messages'          : messages_root + 'messages',
        
        //PBS KIDS Supervision
        'super-vision'        : 'pikachu/browser-client',
        'super-vision-overlay': 'pikachu/overlay',
        'socket.io'           : 'lib/PBS.KIDS.socket.io',
        'lodash'              : 'lib/PBS.KIDS.lodash.compat.min',
        'text'                : 'lib/PBS.KIDS.text',
        'Handlebars'          : 'lib/handlebars-v1.3.0',
        'hbars'               : 'lib/PBS.KIDS.hbars',
        'simple-storage'      : 'lib/PBS.KIDS.simple-storage',

        //Faye real-time communication client
        'event-emitter' : 'lib/PBS.KIDS.EventEmitter',
        'faye'          : faye_root + '/faye/client',
        'faye-client'   : cdn + '/super-vision/faye-client/connection',

        //Page Views
        'shell' : shell_root + 'js/shell',
        'view'  : ( ( view === "newsletter" && typeof getQuery["confirm"] != "undefined" ) || view === "supervision" ? undefined : shell_root + 'js/views/' + view ),

        //Other Plugins and Libs
        'images-loaded'   : shell_root + 'js/lib/imagesloaded',
        'sound'           : shell_root + 'js/lib/Sound',
        'howler'          : shell_root + 'audio/howler',
        'swf-object'      : shell_root + 'js/lib/swfobject-2.2.min',
        'unity-sniffer'   : shell_root + 'js/tracking/unity-sniffer',

        'kinetic'         : shell_root  + 'js/lib/kinetic-v5.1.0.min',
        'the-wheel'       : shell_root  + 'js/the-wheel/the-wheel',
        'carson'          : carson_root + 'carson/carson',

        'bridge-overlay'  : "lib/bridge-overlay/bridge",
        'bridge-urls'     : "lib/bridge-overlay/bridge.urls",
        
        'jquery-video'    : cdn + '/pbsk/video/lib/jquery.pbskidsvideo.' + ( cdn.match(/www\-tc/) ? 'min-latest' : 'latest' )
      }
    };
  }( function(href, views, default_view){
    var path_segments = window.location.pathname.split('/');

    if( !path_segments.indexOf ){
     /* IE7 array.indexOf() fix
      * NOT putting it on ARRAY.prototype because that was
      * breaking some for loops on other arrays.
      **/
      path_segments.indexOf = function(obj, start) {
        for( var i = (start || 0), j = this.length; i < j; i++ ){
          if ( this[i] === obj) return i;
        }
        return -1;
      };
    }

    //First look for subpages i.e. games/all-topics
    var i;
    for(i in views ){
      if( (path_segments[2] && path_segments[2] == views[i].page)  || ( path_segments.indexOf('site') > -1 && path_segments[path_segments.indexOf('site') + 2] && path_segments[path_segments.indexOf('site') + 2] == views[i].page) ){
        return views[i].view;
      }
    }

    //If subpage was not a match then check top-level pages
    for( i in views ){
      if( path_segments[1] == views[i].page  || (path_segments.indexOf('site') > -1 && path_segments[path_segments.indexOf('site') + 1] == views[i].page) ){
        return views[i].view;
      }
    }

    return default_view;
  }));



  //Loaders for Supervision
  (function(){
    var getCookie = function(a){var b=document.cookie,c=b.indexOf(" "+a+"=");if(-1==c&&(c=b.indexOf(a+"=")),-1==c)b=null;else{c=b.indexOf("=",c)+1;var d=b.indexOf(";",c);-1==d&&(d=b.length),b=unescape(b.substring(c,d))}return b}
    var isIE7 = Boolean( navigator.appVersion.indexOf("MSIE 7.") != -1 );
    var hasSupervision = !isIE7;
    if( hasSupervision ) require( ["super-vision", "super-vision-overlay"] );
  })();


  //Load view if available
  if( Boolean( require.s.contexts._.config.paths.view ) ){
    require( ["view"] );
  }

  //Loaders
  require( ["shell"] );
  require( ["messages", "headband"] );//require headband AFTER supervision

}( PBS.KIDS.require ));
