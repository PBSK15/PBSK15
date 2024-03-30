(function( require ){
  require.config( function(){
    var href          = ( window.top != window ) ? document.referrer : window.location.href;
    var cdn           = window.location.protocol + '//' + window.location.hostname;
    var messages_root = 'http://super-vision-dev.pbskids.org/messages/scripts/';
    var faye_root     = 'http://super-vision-dev.pbskids.org:9000';
 
    return{
      baseUrl: cdn + '/js/',
      urlArgs: "version=0.01",
      shim: {
        'Handlebars': {
          exports: 'Handlebars'
        },
        'faye': {
          exports: 'Faye'
        }
      },
      paths: {
        'jquery-noconflict'    : messages_root + 'jquery/jquery-noconflict',
        'messages'             : messages_root + 'messages',
        'pubsub'               : messages_root + 'PubSubJS/PBS.KIDS.pubsub',

        'jquery'               : 'loader/lib/jquery/jquery-1.10.2',
        'lodash'               : 'lib/PBS.KIDS.lodash.compat.min',
        'simple-storage'       : 'lib/PBS.KIDS.simple-storage',
        'event-emitter'        : 'lib/PBS.KIDS.EventEmitter',
        'bellhop'              : 'lib/bellhop-1.1.4',
        'uuid'                 : '/includes/progresstracker/js/uuid',
        'utils'                : '/includes/progresstracker/js/utils',

        'colorbox'             : '/pbs-kids-headband/js/colorbox/PBS.KIDS.jquery.colorbox',
        'identity-0.2'         : '/includes/progresstracker/js/identity-0.2',
        'queueingLibrary2'     : '/includes/progresstracker/js/queueingLibrary2',

        'faye'                 : faye_root + '/faye/client',
        'faye-client'          : cdn + '/super-vision/faye-client/connection',
        'super-vision'         : 'pikachu/browser-client',

        'super-vision-overlay' : 'pikachu/overlay',
        'text'                 : 'lib/PBS.KIDS.text',
        'Handlebars'           : 'lib/handlebars-v1.3.0',
        'hbars'                : 'lib/PBS.KIDS.hbars',
      }
    };
  }());

  require( ['super-vision', 'super-vision-overlay', 'bellhop'], function( SuperVision, FayeClient, Bellhop) {
    SuperVision.config({cordova: true});

    PBS.KIDS.FayeClient.on('init', function(data) {
        document.getElementById('sync-code').textContent = data.sync_code;
    });

    PBS.KIDS.FayeClient.refresh();

    PBS.KIDS.FayeClient.ready(function() {
        document.getElementsByClassName('supervision')[0].className += ' connected';
    });
  });
}( PBS.KIDS.require ));
