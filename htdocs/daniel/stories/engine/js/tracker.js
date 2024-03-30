//  ------------------------------------------------------------------
//  tracker.js
//
//  Copyright 2014 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.tracker = function (GLOBAL, PBS, GAObj, config) {
    
    "use strict";
    
    var that = {},
        initialized = false,
        category,
        
        init = function () {
            if (!initialized) {
                category = config.uniqueBookID;

                if(GAObj && config) {
                    PBS.KIDS.storybook.debug("Tracking Initialized");
                    initialized = true;

                    category = config.uniqueBookID;
                }else {
                    PBS.KIDS.storybook.debug("Tracking Object NOT Found!!");
                }
            }
        };
    
    // Display the next item in list
    that.trackEvent = function (action, label, value) {

        PBS.KIDS.storybook.debug("Track Event:"+category + ":"+action+":"+label);

        if(!initialized) {
            return;
        }

        if(GAObj && action) {
            var trackArr = [category];
            trackArr.push(action);
            if(label) {
                trackArr.push(label);
                if(value) {
                    trackArr.push(value);
                }
            }
            GAObj.trackEvent.apply(GAObj, trackArr);
        }
    };
    
    init();
    
    return that;
};

PBS.KIDS.storybook.makeTrackable = function (GLOBAL, PBS, tracker, view, tracking) {

    "use strict";
    
    var sb = PBS.KIDS.storybook,
        
        press = function (e) {

            tracker.trackEvent(tracking.action, tracking.label, tracking.value);
        };
    
    // Listen to when the sprite is touched or clicked
    view.addEventListener("PRESS", press);

    return view;
};