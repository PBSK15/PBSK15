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
		audioElement,
		currentSound = null,
		loadInterval,
		completeInterval,
        loadedMetaData,

		onPlay = function () {},

		onPause = function () {},

		onCanPlay = function () {
			if (!playable) {
				playable = true;
				that.dispatchEvent("LOAD_STARTED");
			}
		},

		onCanPlayThrough = function () {
			/*
			if (!playable) {
				playable = true;
				that.dispatchEvent("LOAD_STARTED");
			}
			*/
		},

		onLoadedData = function () {
            loadedMetaData = true;
		},

		onLoadedMetadata = function () {
            //alert('onloaded meta data');
		},

		onProgress = function () {

		},

		onEnded = function () {

		},

		onStalled = function () {

		},

		onError = function (e) {
            alert('error: ' + e.message);
			PBS.KIDS.storybook.debug("audioPlayer.onError: " + e.message);
		},

		init = function () {
			if (!initialized) {
				initialized = true;

				// Create the audio element
				//audioElement = GLOBAL.document.getElementById('audioMain');

                // Create the audio element
				audioElement = GLOBAL.document.createElement("audio");

				// Add listeners
				audioElement.addEventListener("pause", onPause);
				audioElement.addEventListener("play", onPlay);
				audioElement.addEventListener("canplay", onCanPlay);
				audioElement.addEventListener("canplaythrough", onCanPlayThrough);
				audioElement.addEventListener("loadeddata", onLoadedData);
				audioElement.addEventListener("loadedmetadata", onLoadedMetadata);
				audioElement.addEventListener("progress", onProgress);
				audioElement.addEventListener("ended", onEnded);
				audioElement.addEventListener("stalled", onStalled);
				audioElement.addEventListener("error", onError);

				// android default browser
                // chrome on nexus 7
				// iOS 5
				// iOS 5.1
				// iOS 6
				// iOS 6.1
				// Safari 6
				if (
					(audioElement.canPlayType("audio/mp4") && isChrome && isMobile.seven_inch && !isFirefox) ||
					(audioElement.canPlayType("audio/mp4") && !isChrome && !isIE && !isFirefox)) {
			        src += ".m4a";
			        //alert('m4a');
			    }
                // chrome on OS X
                // firefox on OS X
                // firefox on Windows 7
                else if (audioElement.canPlayType("audio/ogg") && !isMobile.seven_inch) {
                    src += ".ogg";
                    //alert('ogg');
                }
                else if (audioElement.canPlayType("audio/mpeg")) {
                    src += ".mp3";
                    //alert('mp3');

                } else {
                    //alert('no valid sound file found');
					return false;
				}

				// Initialization was successful
				return true;
			}
		},

		load = function () {
            audioElement.preload = 'auto';
            audioElement.autobuffer = 'auto';
            audioElement.src = src;
            audioElement.volume = 0;
			audioElement.play();
			audioElement.pause();

			loadInterval = GLOBAL.setInterval(function () {

				var curLoadTime, curLoadPercentage;

				// If sound isn't buffered then no need to update
				if (!audioElement.buffered.length) {
					return;
				}

				// Set the current load time to the last buffered item
				curLoadTime = audioElement.buffered.end(audioElement.buffered.length - 1);

				// Set the current load percentage
				curLoadPercentage = curLoadTime / audioElement.duration * 100;

				// If a change in the load percentage then dispatch an event
				if (curLoadTime && !isNaN(curLoadPercentage) && loadPercentage !== curLoadPercentage) {
					loadPercentage = curLoadPercentage;
					that.dispatchEvent("LOAD_PERCENTAGE_CHANGE");
					//PBS.KIDS.storybook.debug("Audio Load Percentage: " + curLoadPercentage.toFixed(2) + "%");
				}
				if (curLoadPercentage >= 100 && loadedMetaData) {
					GLOBAL.clearInterval(loadInterval);
					that.dispatchEvent("LOAD_COMPLETE");
				}
			}, 100);

            audioElement.load();
		},

		endSound = function (soundObj) {
            audioElement.pause();

			// Clear the sound complete timer
			GLOBAL.clearInterval(completeInterval);
			completeInterval = null;
			currentSound = null;

            if(soundObj) {
                PBS.KIDS.storybook.audio.playNext(soundObj);
            }
		},

		checkIfComplete = function (soundObj) {

			if (!currentSound) {
				PBS.KIDS.storybook.debug("Current sound variable is not defined and the complete timer is still running.");
				GLOBAL.clearInterval(completeInterval);
                endSound(soundObj);
				return;
			}

	//		PBS.KIDS.storybook.debug("checkIfComplete: " + audioElement.currentTime + " >= " + currentSound.endTime);

			// If the scrubber position is greater or equal to the end time
			if (audioElement.currentTime >= currentSound.endTime) {
				//PBS.KIDS.storybook.log("Sound Complete");
                //console.log('--------------------');
                //console.log(soundObj.clipId + " complete");
                //console.log(soundObj);
                //console.log('--------------------');

				if (currentSound.loop === true) {
					PBS.KIDS.storybook.log("Loop Sound");
					audioElement.currentTime = currentSound.startTime;
				} else {
					endSound(soundObj);
				}
				that.dispatchEvent("PLAY_COMPLETE");
			}
		};

	// Public properties
	that.autoStart = options && (options.autoStart !== undefined) ? options.autoStart : false;
	that.autoReset = options && (options.autoReset !== undefined) ? options.autoReset : false;

	// Play the sound specified by a sound parameter
	//
	// Sound Properties
	//    startTime
	//    endTime
	//    loop
	that.play = function (soundObj) {

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
		if (currentSound && currentSound.persist) {
			//PBS.KIDS.storybook.debug("Current sound cannot be interrupted. This sound will not play.");
			return;
		}

        that.stop();

		// Save the sound properties
        currentSound = soundObj;

		if(isIE9) {
			if(currentSound.startTime - 1 >= 0) {
				currentSound.startTime -= 1;
			}
		}

		audioElement.currentTime = currentSound.startTime;

		if(audioElement.currentTime === 100 && currentSound.startTime !== 100) {
			return;
		}

		// Set the scrubber to the sound start time
		audioElement.play();

		if (isChrome && isMobile.android.device) {
			audioElement.currentTime = currentSound.startTime + 0.10;
			var audioVolumeDelay = setTimeout(function() {
				audioElement.volume = 1;
				window.clearTimeout(audioVolumeDelay);
			}, 175);
		} else {
			audioElement.volume = 1;
		}


		// Set a timer to check if the sound is complete
		if (!completeInterval) {
			completeInterval = GLOBAL.setInterval(function() {
                checkIfComplete(soundObj);
            }, 300);
		}


	};

	// Pause the audio element and clear the current sound
	that.stop = function () {
        audioElement.volume = 0;
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

	if (init()) {
		return that;
	} else {
		return false;
	}

};