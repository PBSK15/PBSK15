(function (require, define) {
  define('super-vision',
    ['jquery-noconflict', 'faye-client', 'lodash', 'messages', 'simple-storage', 'event-emitter'],
    function ($, fayeClient, _, Messages, SimpleStorage, EventEmitter) {
      var SupervisionClient = function ($, fayeClient, _, Messages, SimpleStorage) {
        // The current status of a supervision sync session
        this.sync_state = null

        // A nicer name for "that". Binds are ugly, and aren't supported in older browsers anyways
        var supervisionClient = this

        // The current playing video title
        this.currentVideoTitle = null

        // A lookup table of any message service event subscriptions we may have, to make it easier to start and stop
        // listening to them in the future
        this.messageTokens = {
          'pbskids.messages.games': null,
          'pbskids.messages.games.events': null,
          'pbskids.messages.video': null,
          'pbskids.messages.video.events': null
        }

        var sleepTimer = null
        var videoView = null

        var deployPlayTimer = function (mode, countdown) {
          clearTimeout(sleepTimer)

          sleepTimer = setTimeout(function () {
            // Deploy overlay
            $('.companion-overlay.full-overlay').fadeOut()
            $('#' + mode + '-overlay.full-overlay').fadeIn()

            // Pause video if player is available
            if (videoView && (typeof videoView.player !== 'undefined')) {
              videoView.player.pause()
            }

            // Notify any listeners
            supervisionClient.emitEvent('playtimer.sleep', [mode])
          }, countdown)
        }

        var teardownPlayTimer = function () {
          clearTimeout(sleepTimer)
          sleepTimer = null
          $('.companion-overlay.full-overlay').fadeOut()

          supervisionClient.emitEvent('playtimer.cancel', [])
        }

        /**
         * Controller has desynced.
         * - Stop listening to PubSubJS messages.
         * - Stop play timer.
         */
        fayeClient.on('unpaired', function () {
          supervisionClient.emitEvent('unpaired')

          teardownPlayTimer()

          supervisionClient.unsubscribeMessages()

          fayeClient.refresh()
        })

        var config = function (options) {
          if (typeof options === 'undefined') {
            return
          }

          if (typeof options.videoView !== 'undefined') {
            videoView = options.video_view
          }
        }

        /**
         * Controller synced.
         * - Subscribe to PubSubJS messages (idempotent). Note that we're passing "true" as the third argument,
         *   indicating that if any PubSub messages have occurred and we missed them to also catch those events.
         *   This will prevent any race conditions where the message was emitted before we had a chance to listen
         * - Watch for controller play timer commands.
         */
        fayeClient.ready(function (syncState) {
          supervisionClient.subscribeMessages()

          fayeClient.recieve('play_timer', function (data) {
            if (data.name === 'sleep') {
              deployPlayTimer(data.mode, data.value)
            } else if (data.name === 'cancel_sleep') {
              teardownPlayTimer()
            }
          })

          fayeClient.recieve('update_kid_label', function (data) {
            supervisionClient.sync_state = supervisionClient.sync_state || {}
            supervisionClient.sync_state.default_kid_label = data.kid_label_guid

            supervisionClient.emitEvent('kidlabel.update', [data.kid_label_guid])
          })
        })

        /**
         * Channel subscribed.
         * - Resume/tear down existing play timer countdown.
         */
        fayeClient.subscribed(function (syncState) {
          supervisionClient.sync_state = syncState

          supervisionClient.emitEvent('subscribed', [syncState])

          // Play timer SST from the server
          if (typeof (syncState) !== 'undefined') {
            if (syncState.timer == null) {
              teardownPlayTimer()
            } else {
              deployPlayTimer(syncState.timer.mode, syncState.timer.value)
            }
          }
        })

        $(document).ready(function () {
          // Video event bootstrapping
          var lazyVideoProgress = window._.debounce(function (event) {
            var data = {
              current_video_title: supervisionClient.currentVideoTitle,
              time: event.time,
              percent: event.percent
            }

            data._meta = {
              type: 'video_progress'
            }

            // Don't send a progress event to super vision if there's no channel
            if (supervisionClient.sync_state == null) {
              return
            }

            // attach default kid label
            data.kid_label_guid = supervisionClient.sync_state.default_kid_label

            fayeClient.send(data, false)
          }, 1000, {leading: true, maxWait: 25})

          $(document).on('org_pbskids_video_VideoEvent_CurrentTimeChange', function (event) {
            lazyVideoProgress(event)
          })

          $(document).on('org_pbskids_video_VideoEvent_VideoViewed', function (event) {
            var duration = Math.floor((event.percentViewed / 100) * event.release.duration)
            var data = {
              title: event.release.title,
              property: event.release.series_title,
              image: event.release.images.littlevideothumbnail.url,
              duration: duration
            }

            data._meta = {
              type: 'video_view'
            }

            // Don't send a progress event to super vision if there's no channel
            if (supervisionClient.sync_state == null) {
              return
            }

            // attach default kid label
            data.kid_label_guid = supervisionClient.sync_state.default_kid_label

            fayeClient.send(data, false)
          })

          if (typeof window.PBSKidsPlayerEvents !== 'undefined') {
            var lazyProgress = window._.debounce(function (event) {
              // Don't send an event if we're not synced
              if(supervisionClient.sync_state == null) {
                return;
              }

              fayeClient.send({
                current_video_title: supervisionClient.currentVideoTitle,
                time: event.currentTime,
                percent: event.currentTime / event.duration,
                _meta: { type: 'video_progress' }
              }, false);
            }, 1000, { leading: true, maxWait: 25 });
            PBSKidsPlayerEvents.on('VOD_MEDIA_TIME_CHANGE', lazyProgress);
            PBSKidsPlayerEvents.on('LIVESTREAM_MEDIA_TIME_CHANGE', lazyProgress);

            var videoViewed = function (event) {
              if(supervisionClient.sync_state == null) {
                return;
              }

              fayeClient.send({
                title: event.name,
                property: event.program.title,
                image: event.thumbnail,
                duration: event.duration,
                _meta: { type: 'video_view' }
              }, false);
            };
            PBSKidsPlayerEvents.on('VOD_MEDIA_END', videoViewed);
            PBSKidsPlayerEvents.on('LIVESTREAM_MEDIA_END', videoViewed);
          }

          // Remove timer overlay on browser reload
          fayeClient.send({
            _meta: {
              type: 'play_timer'
            },
            status: 'site_refresh'
          }, false)
        })

        this.config = config
      }

      // Allow the Super Vision client to emit events to things that might care what's going on
      SupervisionClient.prototype = new EventEmitter()

      /**
       * Handler for when the messages service sends an event that Super Vision cares about
       *
       * @param {String} message The message that was sent
       * @param {Object} data The raw meta data from the event
       */
      SupervisionClient.prototype.onMessageReceived = function (message, data) {
        // if there is no sync state, don't send any events
        if (this.sync_state == null) {
          return
        }

        var dataType = data.type ? data.type.toLowerCase() : ''
        if (dataType === 'clip' || dataType === 'episode') {
          this.currentVideoTitle = data.title
          data._meta = { type: 'activity' }
        } else if (dataType === 'game') {
          data._meta = { type: 'activity' }
        }

        // attach default kid label
        data.kid_label_guid = this.sync_state.default_kid_label

        // attach timestamp
        data.timestamp = new Date().getTime()

        fayeClient.send(data, false)
      }

      /**
       * Unsubscribes from any Messages Service events that super vision might be listening to
       */
      SupervisionClient.prototype.unsubscribeMessages = function () {
        if (!Messages) {
          return
        }

        for (var messageType in this.messageTokens) {
          var token = this.messageTokens[messageType]

          if (token === null) {
            continue
          }

          Messages.unsubscribe(token)

          this.messageTokens[messageType] = null
        }
      }

      /**
       * Removes any existing message service listeners that Super Vision set up, and the resubscribes to relevant events
       *
       * @return {Object} A map of the subscribed tokens
       */
      SupervisionClient.prototype.subscribeMessages = function () {
        if (!Messages) {
          return
        }

        this.unsubscribeMessages()

        for (var messageType in this.messageTokens) {
          this.messageTokens[messageType] = Messages.subscribe(messageType, this.onMessageReceived.bind(this), true)
        }

        Messages.init()

        return this.messageTokens
      }

      window.PBS.KIDS.SuperVision = new SupervisionClient($, fayeClient, _, Messages, SimpleStorage)
      return window.PBS.KIDS.SuperVision
    }
  )
})(window.PBS.KIDS.require, window.PBS.KIDS.define)