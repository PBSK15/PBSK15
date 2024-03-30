(function(require, define, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery', 'utils', 'queueingLibrary2', 'pubsub', 'simple-storage'], factory);
    } else {
        factory(window.jQuery, PBS.KIDS.utils, PBS.KIDS.bufferedQueue, window.PubSub, window.simpleStorage);
    }
} (PBS.KIDS.require, PBS.KIDS.define, function($, utils, bufferedQueue, pubsub, SimpleStorage) {
    //If tracker js is already loaded return the object.
    if(PBS.KIDS.game_tracker)
        return PBS.KIDS.game_tracker;

    (function(ns) {

        var session_id = utils.uuid();
        var batch_size = '5';
        var event_service_url = 'http://progresstracker.pbskids.org:8000/progresstracker/api/v2/games/events.json';
        var name_space = ['PBS' , 'KIDS' ,'game_tracker'];
        var key_prefix = 'PBS_KIDS_game_tracker_';
        var queue = bufferedQueue.init(batch_size, key_prefix, event_service_url);
        var valid_keys = ['timestamp', 'user_ids', 'game_id', 
                                        'device_id','platform_id', 'event_id', 
                                        'event_data', 'game_session'];
        var trackerObj = ns;
        var anonymousUserID = utils.uuid();

        // Create the namespace structure if not available
        for(var i=0; i<name_space.length; i++){
            if(trackerObj[name_space[i]] === undefined)
                trackerObj = trackerObj[name_space[i]] = {};
            else
                trackerObj = trackerObj[name_space[i]];
        }

        function appendTimeStamp(obj){
            var da = new Date();
            utils.log(da.getTime());
            obj.timestamp = da.getTime();
            return;
        }

        function resetSessionId(){
            session_id = utils.uuid();
        }

        function appendSessionId(obj){
            obj['game_session'] = session_id;
        }

        function appendPlatformDetails(obj){
            obj.platform_id = utils.platformIdentify.browser;
            obj.device_id = utils.platformIdentify.OS;
        }

        // Insert GUID in JSON Data
        var appendData = function(obj){
            var users = PBS.KIDS.identity.getCurrentUsers();
            if(obj.user_ids === undefined){
                obj.user_ids = [];
            }
            for(var i = 0; i < users.length; i++){
                obj.is_logged_in = users[i].isloggedin;
                if (obj.is_logged_in) {
                    obj.user_ids[i] = users[i].userid;
                } else {
                    obj.user_ids[i] = anonymousUserID;
                }
            }

            if(!obj['timestamp']){
                appendTimeStamp(obj);
            }
            appendSessionId(obj);
            appendPlatformDetails(obj);
            return;
        }

        // validate event data
        var validateEvent = function(eventData){
            var objData = eventData;
            var isValid = false;
            for (var i = 0; i < valid_keys.length; i++) {
                isValid = validate(objData[valid_keys[i]]);
                if(isValid == false){
                    utils.log("Valid event?", isValid);
                    return false;
                }
            }
            utils.log("Valid event?", isValid);
            return isValid;
        }

        // validate event data values
        var validate = function(value){
            if( (value == null) || (value == 'undefined') || (value == '') ) {
                return false;
            }
            else return true;
        };

        // auto calling functin to keep updating online staus
        (function(){
            utils.log("user is online:", navigator.onLine);
            window.setInterval(function () {
                queue.setOnline(navigator.onLine);
            }, 10000);
        })();

        // public function
        trackerObj.init = function(game_id){

            var trackingEnabled = true;

            return {
                pushEvent : function(eventData){
                    var objEventData = eventData;
                    
                    appendData(objEventData);
                    var isValid = validateEvent(objEventData);
                    if(isValid == true && trackingEnabled == true){

                        var channel_metadata = SimpleStorage.get('channel-metadata');
                        if (!!channel_metadata) {
                            objEventData.channel_id = channel_metadata.channel_id;
                            pubsub.publish('pbskids.messages.games.events', objEventData)
                        } else {
                            utils.log("objEventData",objEventData);
                            queue.pushEvent(objEventData);
                        }

                    } else {
                        utils.log("trackingEnabled ",trackingEnabled)
                    }
                },

                setAutoFlush : queue.setAutoFlush,

                flushAll : queue.flushAll,

                setTracking: function(on){
                    on ? queue.enable() : queue.disable();
                    trackingEnabled = on;
                },

                end : queue.end,
                resetSessionId: function(){
                    resetSessionId();
                }

            }
        }
        
        $('body').trigger('init.tracker');
        PBS.KIDS.tracker = PBS.KIDS.game_tracker;
        
    })(window);

    return PBS.KIDS.game_tracker;

}));
