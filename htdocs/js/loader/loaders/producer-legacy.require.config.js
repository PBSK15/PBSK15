(function( require ){
  
  require.config( function(){
    var href = ( window.top != window ) ? document.referrer : window.location.href;
    var cdn  = href.match(/soup\.pbskids\.org/) ? "https://soup-tc.pbskids.org" : href.match(/ernie\.pbskids\.org\//) ? "https://ernie-tc.pbskids.org" : href.match(/^http:\/\/((?!www(\-tc)?\.).+)pbskids\.org/) ? "" : "https://pbskids.org";
    
    var shell_root    = cdn + "/shell/";
    var messages_root = cdn + '/messages/scripts/';
    var faye_root     = href.match(/dev\.pbskids\.org/) ? "https://automata.pbskids.org:9000" : href.match(/qa\.pbskids\.org\//) ? "https://automata.pbskids.org:9000" : "https://supervision.pbskids.org:9100";

    require.cdn = cdn;
    
    return{
      baseUrl: cdn + '/js/',
      urlArgs: "version=1.65",
      shim: {
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
        
        //PBS KIDS MESSAGING SYSTEM
        'uuid'              : 'lib/PBS.KIDS.uuid',
        'jquery-noconflict' : messages_root + 'jquery/jquery-noconflict',
        'messages'          : messages_root + 'messages',
        'pubsub'            : messages_root + 'PubSubJS/PBS.KIDS.pubsub',
        
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
        'faye-client'   : cdn + '/super-vision/faye-client/connection'
      }
    };
  }());



  //Loaders
  (function(){
    var getCookie = function(a){var b=document.cookie,c=b.indexOf(" "+a+"=");if(-1==c&&(c=b.indexOf(a+"=")),-1==c)b=null;else{c=b.indexOf("=",c)+1;var d=b.indexOf(";",c);-1==d&&(d=b.length),b=unescape(b.substring(c,d))}return b}
    var isIE7 = Boolean( navigator.appVersion.indexOf("MSIE 7.") != -1 );
    var hasSupervision = !isIE7;
    
    if( hasSupervision ){
      require( ["super-vision", "super-vision-overlay"] );
      //NOTE: "supervision" loades in "messages" & "simple-storage"; "messages" loads "pubsub".
    }
    else{
      //If no "supervision", still load messages service
      require( ["messages"], function(Messages){
        Messages.init();
      });
    }

  })();

}( PBS.KIDS.require ));
