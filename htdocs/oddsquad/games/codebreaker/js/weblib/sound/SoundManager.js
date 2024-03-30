/* global require, isEmpty, createjs, CreateJSSoundManager, AudioElementSoundManager */

//require.include("weblib/ssnamespace");
//require.include("weblib/utils/SystemInfo");
//require.include ("weblib/core/CorePackage.js");
//require.include ("weblib/sound/CreateJSSoundManager");
//require.include ("weblib/sound/AudioElementSoundManager");

/*
* Sound Manager.
* Delegates it's work out to either a CreateJSSoundManager or an AudioElementSoundManager, depending on support.
*/
ss.SoundManager = ss.SoundManager || new function () {
	"use strict";

	// locally scoped copy of this. Will be set to the appropriate sound manager in the constructor.
	var _this;

	function _construct () {

		if(isEmpty(_this)) {
			//Always use AudioElementSoundManager on Silk
			if(ss.SystemInfo.isIE || ss.SystemInfo.isMaxthon) {
				//TESTING
				console.log("ss.SoundManager - [IE, Fuhunabi]");

				_this = AudioElementSoundManager;
			// If soundJS is supported, use the createjs sound manager.
			} else if(createjs.Sound.initializeDefaultPlugins()) {
				//TESTING
				console.log("ss.SoundManager - using CreateJSSoundManager.");
				
				_this = CreateJSSoundManager;
			// if soundJS is not supported, use the audio element sound manager.
			} else {
				//TESTING
				console.log("ss.SoundManager - using AudioElementSoundManager.");
				
				_this = AudioElementSoundManager;
			}
		}

		return _this;
	};

	return _construct();
};

//Event dispatched when all sounds are loaded for a sound manager
ss.SoundManager.LOADED = "loaded";
//Event dispatched when a sound has completed playing
ss.SoundManager.SOUND_COMPLETE = "complete";


/*
* Sound Priority,
* specifies when sounds should interrupt other sounds, and when they should play.
*/
ss.SoundPriority = {
	HIGH: 0, // Will play a sound no matter what is currently playing.
	LOW: 1,	// Plays a sound if there are channels available. If there aren't channels available, play if the current sound isn't high priority, otherwise don't.
	MULTI_CHANNEL_ONLY:2 // Only plays sounds on devices with support for multiple audio channels.
};