(function(define, require) {
  define('faye-client', ['jquery', 'event-emitter', 'faye', 'simple-storage'], function($, EventEmitter, Faye, SimpleStorage) {
    var connection = function(cached){
      var payload;
      var href = ( window.top != window ) ? document.referrer : window.location.href;
      var faye_root = href.match(/dev\.pbskids\.org/) ? "http://automata.pbskids.org:9000" : href.match(/qa\.pbskids\.org\//) ? "http://automata.pbskids.org:9000" : "http://supervision.pbskids.org:9100";
      var client = new Faye.Client(faye_root + '/faye');

      var channel;

      var sync_state;
      client.addExtension({
        incoming: function(message, callback) {
          if (message.channel === '/meta/subscribe') {
            sync_state = message._channel;
            conn.emitEvent('subscribed', [message._channel]);
          }
          callback(message);
        }
      });

      var getNewChannel = function() {
        console.log('blah');
        return $.post(faye_root + '/channel/create');
      };

      var deferred = $.Deferred();

      var complete = function(data) {
        console.log(payload);

        var self = this;
        console.log(self);
        channel = '/' + data.channel_id;

        SimpleStorage.set('channel-metadata', data);

        // send the payload again
        if (payload) client.publish(channel, payload);
        self.emitEvent('paired', [sync_state]);

        client.subscribe(channel, function(m) {
          self.emitEvent('message-received', [m]);

          if(m.type === 'status' && m.value === 'unpaired') {
            self.disconnect();
          }
        }).then(function() {}, self.disconnect);
        if(deferred.resolve) deferred.resolve(self);
      };

      var Connection = function() {
        this.send = function(message, reliable) {
          reliable = reliable !== false;
          payload = message; 
          console.log('in send');
          if (channel) {
            console.log('has channel');
            client.publish(channel, payload);
          }
        };
        this.recieve = function(message_type, callback) {
            client.subscribe(channel, function(data) {
                if (!!data._meta && 
                    !!data._meta.type && 
                    (data._meta.type == message_type)) {
                    callback(data);
                }
            });
        };
        this.refresh = function(){
          var self = this;
          if (channel) {
            client.unsubscribe(channel);
          }
          getNewChannel().then(function(res){
            console.log(res); 
            self.emitEvent('init', [res]);
            client.subscribe('/' + res.channel_id, function(m) {
              if(m.value === 'paired') {
                complete.bind(self)(res);
              }
            });
          });
        };
        this.disconnect = function() {
          client.publish(channel, {type: 'status', value: 'unpaired'});
          if (channel) {
            client.unsubscribe(channel);
            channel = null;
          }
          SimpleStorage.deleteKey('channel-metadata');
          this.emitEvent('unpaired');
        };
        this.ready = function(cb) {
          if (channel) cb(sync_state);
          this.on('paired', function(sync_state) {
            cb(sync_state);
          });
        };
        // TODO: Evalute if this.ready should pass in sync_state, since
        // it isn't actually processed by extensions yet at that point.
        this.subscribed = function(cb) {
          this.on('subscribed', function(sync_state) {
            cb(sync_state);
          });
        }
        // Flag to turn on/off Faye functionality.
        // Set to false for maintenance/updates.
        // UI elements on pbskids.org should react accordingly.
        this.enabled = true;
      };

      Connection.prototype = new EventEmitter();

      var conn = new Connection();

      var cached = SimpleStorage.get('channel-metadata');
      if (!!cached) {
        complete.bind(conn)(cached);
      }

      return conn;

    };

    PBS.KIDS.FayeClient = connection();
    return PBS.KIDS.FayeClient;
  });
}(PBS.KIDS.define, PBS.KIDS.require));