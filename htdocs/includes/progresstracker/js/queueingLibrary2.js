/***************************************************************/
//ns is the main object (window global object) to which we will attach our objects
/***************************************************************/
(function(require, define, factory) {
    if (typeof define == 'function' && define.amd) {
        define(['jquery', 'utils', 'uuid'], factory);
    } else {
        factory(window.jQuery, PBS.KIDS.utils, window.UUID);
    }
} (PBS.KIDS.require, PBS.KIDS.define, function($, utils, UUID) {
    (function(ns) {
        var nameSpace = ['PBS', 'KIDS', 'bufferedQueue'];       

        //Create the namespace structure if not available
        var mainObj = ns;
        for(var i=0;i<nameSpace.length;i++){
            if(mainObj[nameSpace[i]] === undefined) 
                mainObj = mainObj[nameSpace[i]] = {};
            else
                mainObj = mainObj[nameSpace[i]];
        }
        
        // Add a localStorage dummy object for IE 7 and other older browsers.
        if(window.localStorage === undefined){
            window.localStorage = function() {
                var inMemoryStorage = {};
                return {
                    length : 0,
                    removeItem : function(key){
                        delete inMemoryStorage[key];
                        this.length--;
                    },
                    key : function(index){
                        for(key in inMemoryStorage){
                            return key;
                        }
                    },
                    getItem : function(key){
                        return inMemoryStorage[key];
                    },
                    setItem : function(key,value){
                        inMemoryStorage[key] = value;
                        this.length++;
                    },
                    clear : function(){
                        for(key in inMemoryStorage){
                            delete inMemoryStorage[key];
                        }
                        this.length = 0;
                    }
                }
            }();
        }
     

        //Internal functions
        /***************************************************************/
        //Generate GUID for now
        /***************************************************************/
        function guid() {
           return UUID.genV4().hexString;
        }
        /***************************************************************/
        //Public function
        //Parameter 1: batch size for flushing data
        //Parameter 2: Key prefix for local storage
        //Parameter 3: Service URL
        /***************************************************************/   
        mainObj.init = function(batchSize, keyPrefix, eventServiceUrl){
            PBS.KIDS.utils.log("eventServiceUrl: ", eventServiceUrl);
            var onlineStatus = true;

            var timer = null;
            var current_batch = [];
            var in_transit_keys = {};
            var current_buffer_key = keyPrefix + guid();

            var process_batch = function(key){
              if(in_transit_keys[key] === undefined && key.indexOf(keyPrefix) === 0) {
                in_transit_keys[key] = 0;
                $.ajax({
                  url : eventServiceUrl,
                  data : localStorage[key],
                  type : "POST",
                  contentType : "application/json",
                  dataType : "json",
                  success : function(){
                    localStorage.removeItem(key);
                    delete(in_transit_keys[key]);
                  },
                  error : function(response){
                    PBS.KIDS.utils.log("response", response);
                    if(response.status == 400){ //400 is invalid
                      //data response from server for events
                      localStorage.removeItem(key);
                    }
                    delete(in_transit_keys[key]);
                  } 
                });
                return true;
              } else {
                return false;
              }
            }

            var start_timer = function(){
              timer = window.setInterval(function(){

                if(!onlineStatus)
                  return;

                for(var key in localStorage){
                  if(process_batch(key)) {                   
                    break;
                  }
                }
              },1000);
            }

            var stop_timer = function(){
              window.clearInterval(timer);
              timer = null;
            }
            
            return {
                  
                enable : function(callback) {            
                  in_transit_keys = {};
                  current_batch = [];
                  current_buffer_key = keyPrefix + guid();
                  start_timer();
                  if(callback)
                    callback();
                },

                disable : function(callback){
                  stop_timer();
                  if(callback){
                    callback();
                  }
                },
                
                setAutoFlush : function(on) {
                    if(!on)
                        stop_timer();
                    else if(!timer)
                        start_timer();                
                },

                setOnline : function(isOnline) {
                    onlineStatus = isOnline;
                },

                pushEvent : function(event){
                  in_transit_keys[current_buffer_key] = 0;
                  current_batch.push(event);
                  localStorage[current_buffer_key] = JSON.stringify(current_batch);
                  if(current_batch.length >= batchSize) {
                    current_batch = [];
                    delete(in_transit_keys[current_buffer_key]);
                    current_buffer_key = keyPrefix + guid();
                  }
                },

                flushAll : function() {
                  current_batch = [];
                  delete(in_transit_keys[current_buffer_key]);
                  current_buffer_key = keyPrefix + guid();

                  if(!timer) { 
                    //timer is not running hence manually flush
                    //all events
                    for(var key in localStorage){
                      process_batch(key);
                    }
                  }             
                },

                end : function(){
                  current_batch = [];
                  delete(in_transit_keys[current_buffer_key]);
                  current_buffer_key = keyPrefix + guid();              
                }

            }

        }

    })(window);
    return PBS.KIDS.bufferedQueue;
}));
