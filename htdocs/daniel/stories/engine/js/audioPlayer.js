//  ------------------------------------------------------------------
//  audioElement.js
//
//  Copyright 2012 PBS KIDS Interactive. All Rights Reserved.

PBS.KIDS.storybook.audioPlayer = function (GLOBAL, PBS, src, options) {
	
	"use strict";
	
	var that = PBS.KIDS.storybook.eventDispatcher(),
		initialized = false,
		loadStarted = false,
		loadComplete = false,
		playable = false,
		loadPercentage = 0,
		currentSound = null,
		loadInterval,
		sound,

		init = function () {

			if (!initialized) {
				initialized = true;
				
				src += ".mp3";

				// Initialization was successful
				return createjs.Sound.isReady();
			}
		},
		
		load = function () {
			if(typeof PBS.KIDS.storybook.config.resourcePath === "string") {
				src = PBS.KIDS.storybook.config.resourcePath + src;
			}

			loadInterval = GLOBAL.setInterval(function () {
				// Dispatch a load complete event if sound is complete
				if (createjs.Sound.loadComplete(src)) {

					GLOBAL.clearInterval(loadInterval);
					that.dispatchEvent("LOAD_COMPLETE");
				}
			}, 1000);

			if ( createjs.WebAudioPlugin.isSupported() )
				createjs.WebAudioPlugin.playEmptySound();

			createjs.Sound.registerSound(src, "sound", 1);
		},
		
		endSound = function () {

			if(sound) { sound.stop(); }
			currentSound = null;
		},
		
		onSoundComplete = function () {

			endSound();
			that.dispatchEvent("PLAY_COMPLETE");
		};
	
	// Public properties
	that.autoStart = options && (options.autoStart !== undefined) ? options.autoStart : true;
	that.autoReset = options && (options.autoReset !== undefined) ? options.autoReset : false;
	
	// Play the sound specified by a sound parameter
	//
	// Sound Properties
	//    startTime
	//    endTime
	//    loop
	that.play = function (soundObj, force) {
		
		// Validate the sound object
		if (!soundObj) {
			PBS.KIDS.storybook.warning("Trying to play invalid sound.");
			return;
		}
		
		if (soundObj.startTime === undefined || soundObj.startTime < 0) {
			PBS.KIDS.storybook.warning("Trying to play sound with invalid sound property. Start time invalid.");
			return;
		}
		
		if (soundObj.endTime === undefined || soundObj.endTime < 0) {
			PBS.KIDS.storybook.warning("Trying to play sound with invalid sound property. End time invalid.");
			return;
		}
		
		if (soundObj.startTime >= soundObj.endTime) {
			PBS.KIDS.storybook.warning("Trying to play sound with invalid sound property. Duration is zero or negative.");
			return;
		}
		
		// If a sound is already playing see if it can be interrupted
		if ( !force )
		{
			if (currentSound && currentSound.persist) {
				PBS.KIDS.storybook.debug("Current sound cannot be interrupted. This sound will not play.");
				return;
			}
		}
		else
			this.stop();
		
		// Save the sound properties
		currentSound = soundObj;
				
		//PBS.KIDS.storybook.log("Play Sound: " + currentSound.startTime + " -> " + currentSound.endTime + " (loop: " + currentSound.loop + ")");

		// Play the audio from the current scrubber locatio
		var st = currentSound.startTime * 1000; // Convert seconds to milliseconds for SoundJS
		var duration = (currentSound.endTime - currentSound.startTime) * 1000; // Convert seconds to milliseconds for SoundJS
		sound = createjs.Sound.play("sound", {startTime: st, duration: duration, loop:currentSound.loop});
		sound.volume = soundObj.volume || 1;
		sound.on("complete", onSoundComplete);
	};
	
	// Pause the audio element and clear the current sound
	that.stop = function () {
	
		endSound();
	};
	
	// Load the audio element
	that.load = function () {
	
		if (!loadStarted) {
			loadStarted = true;
			
			load();
		}
	};
	
	// Remove the audio element from memory
	that.destroy = function () {
		audioElement = null;
	};

	// Methods for test player
	that.getElement = function () {
		
		return audioElement;
	};
	
	that.getLoadPercentage = function () {
		return loadPercentage;
	};
	
	that.getSound = function () {
	
		return currentSound;
	};

	that.isPlaying = function()
	{
		return currentSound != null
	};
	
	if (init()) {
		return that;
	} else {
		return false;
	}
};