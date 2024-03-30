/* global console, require, isEmpty, createjs, ss, BaseEvent, AbstractEventDispatcher */
//require.include("weblib/external/createjs.min.js");
//require.include("weblib/core/CorePackage.js");
//require.include("weblib/sound/SoundManager");

/*
* Audio Element Sound Manager.
* Provides limited audio support for devices which are not compatible with soundJS.
* Uses a single audio element to play sounds.
* There are two main restrictions when using this manager.
* 1) In order to work on iOS / older android phones, all audio must be triggered by user input,
*   so the manager must be instantiated within a user input event.
* 2) Only 1 channel will be available when playing audio using this manager.
*
* Dispatches the following events:
*	"loaded" -> when an audio sprite has finished loading and is ready to play.
*	"complete" (audioId) -> When an audio finishes playing, or when one cycle of a looping audio track finishes.
*/
var AudioElementSoundManager = AudioElementSoundManager || new function () {// jshint ignore:line
	"use strict";

	// create a locally scoped copy of this, extending AbstractEventDispatcher.
	var _this = AbstractEventDispatcher ( this ); // jshint ignore:line

	//How far from the correct time a sound must start in order to be considered an error
	var _TIME_TOLERANCE = 0.5;

	// sprite map definition within the audio sprite.
	var _spriteMap;

	// the audio element that will play the sounds.
	var _audioElement;

	//[Array<Object>] - List of audio queued to play while the sound is being loaded, along with additional properties
	//Object format: {"soundId", "priority", "loop"}
	var _queuedAudio;

	//[Boolean] - Whether or not the audio sprite has loaded.
	var _loaded;
	//[Boolean] - Whether the sound is completely ready to play
	var _ready;

	// the soundId of the currently playing sound.
	var _currentSoundId;

	//[Number] - The starting position of the current sound (in seconds)
	var _currentSoundStart;
	//[Number] - The ending position of the current sound (in seconds)
	var _currentSoundEnd;
	
	
	var _currentSoundLoop;

	// The priority of the currently playing sound.
	var _currentPriority;

	// the current volume.
	var _volume;

	//[Boolean] - Whether this sound manager is currently paused
	var _isPaused;

	/*
	* Constructor, builds the manager.
	*/
	function _construct () {
		_loaded = false;
		_ready = false;
		_volume = 1;
		_queuedAudio = new Array();	
		_isPaused = false;	

		return _this;
	}

	/*
	* Listener for when loading is finished.
	* plays any queued audio, and dispatches the "loaded" event.
	*/
	_this.handleLoad = function() {
		_audioElement.removeEventListener("canplaythrough", _this.handleLoad);
		
		// flag loaded as true.
		_loaded = true;
		
		//Stop all sound just in case some browser start playing audio by default
		_this.stopAllSounds();

		//Check if the sound is all ready to play now
		_checkSoundReady();

		//Inform others that the sound has been loaded
		_this.dispatchEvent(new BaseEvent("loaded"));
	};

	/*
	* Loads an audio sprite.
	* @param audioDefinitionJSON: an object containing an audio definition, as output by the audiosprite tool here: https://github.com/tonistiigi/audiosprite
	* See weblib/examples/sound/SoundTest.js for a sample output in the correct format.
	*/
	_this.loadSoundSprite = function(audioDefinitionJson) {

		// pull the data we need out of the JSON.
		_spriteMap = audioDefinitionJson.spritemap;
		var audioResources = audioDefinitionJson.resources;

		// determine the main file, and build a list of all available extensions.
		var i;
		var extensionList = [];
		
		// create the audio element to play this sound sprite.
		_audioElement = document.createElement("audio");
		_audioElement.volume = 1;
		
		_audioElement.id = "combined";
		_audioElement.controls = true;
		_audioElement.preload = "auto";
		
		//var mainFile = audioResources[0];
		//console.log("looping through resources.");
		for(i = 0; i < audioResources.length; i++) {

			var res = audioResources[i];

			// extract the file extension.
			var extension = res.substring(res.length - 3, res.length);
			
			extensionList.push(extension);

			// if we have an m4a, set that as the main file, since it's supported on all mobile platforms.
						// set the sources on the audio element.
			var type;
			if (extension ===  "mp3" || extension == "m4a") {
				type = "audio/mpeg";
			} else {
				type = "audio/" + extension;
			}

			//console.log("audio type: " + type);
			var source = document.createElement("source");
			source.type = type;

			source.src = res;
			_audioElement.appendChild(source);
		}

		_audioElement.addEventListener("canplaythrough", _this.handleLoad);
		_audioElement.addEventListener("timeupdate", _this.onTimeUpdate);
		_audioElement.load();

		// need to play this immediately so it's tied to the mouse event, then we can pause it immediately afterwards.
		_audioElement.play();
		_audioElement.pause();
	};

	/*
	* Check if the sound is completely ready to play
	*/
	function _checkSoundReady() {
		//If no duration is set, wait until it is before continuing
		if(isNaN(_audioElement.duration) || (_audioElement.duration <= 0) || (_audioElement.readyState < 4)) {
			createjs.Tween.get(_this).wait(100).call(_this.handleLoad);
		//If duration is set, set the sound as ready
		} else {
			_handleSoundReady();
		}
	}

	/*
	* Handle the sound being completely ready to play
	*/
	function _handleSoundReady(){
		_ready = true;
		_tryPlayNextQueuedSound();
	}

	/*
	* Helper function that handles completion of audio loading
	*/
	// function _completeLoad(){

	// 	_tryPlayNextQueuedSound();
	// }	

	/*
	* Play the next queued sound, if any
	* @return:[Boolean] - True if a queued sound started playing, false if there wasn't any
	*/
	function _tryPlayNextQueuedSound(){		
		var queuedObj;

		if(_queuedAudio.length > 0) {
			queuedObj = _queuedAudio.shift();
			_this.playSound(queuedObj.soundId, queuedObj.priority, queuedObj.loop);
			return true;
		}

		return false;
	}

	//TESTING
	// function _handleLoadProgress(e){
	// 	ss.DebugUtil.showMessage("Audio Load Progress: " + e, "AudioLoadProgress");
	// 	ss.DebugUtil.showMessage("Audio Load Duration: " + _audioElement.duration, "AudioLoadDuration");
	// }
	//END TESTING

	//TESTING
	// function _handleLoadStart(e){
	// 	//console.log("AESoundMan: Load Start");
	// }

	// function _handleCanPlay(e){
	// 	//console.log("AESoundMan: Can Play");
	// }


	/*
	* Return the audio text that came with the audio clip.
	* @param soundId: The id of the sound from the sound sprite. NOTE: using a sound that isn't in the sprite will result in an error.
	* @return - the text specified in the json file for given audio, otherwise return undefined.
	*/
	_this.getText = function (soundId) {

		// get the text field of the audio sprite data
		if (_isValid(soundId)) {
			var audioText = _spriteMap[soundId].text;
			return audioText;
		}
		return undefined;
	};


	/*
	* Return the audio length of the audio clip.
	* @param soundId: The id of the sound from the sound sprite. NOTE: using a sound that isn't in the sprite will result in an error.
	* @return - the length in second of the audio clip.
	*/
	_this.getDuration = function(soundId) {

		// extract the times for the audio file.
		if (_isValid(soundId)) {
			var start = _spriteMap[soundId].start;
			var end = _spriteMap[soundId].end;
			var length = end - start;
			return length;
		}
		return 0;
	};

	/*
	* Play a sound.
	* @param soundId: The id of the sound from the sound sprite. NOTE: using a sound that isn't in the sprite will result in an error.
	* @param priority (optional): a SoundPriority specifying the priority of the sound we are starting.
	* @param loop: True to loop the sound, false otherwise.
	*/
	_this.playSound = function (soundId, priority, loop) {

		priority = !isEmpty(priority)? priority: ss.SoundPriority.LOW;
		loop = !isEmpty(loop)? loop: false;

		// this sound manager doesn't support multi channel sounds, so bail.
		if(priority == ss.SoundPriority.MULTI_CHANNEL_ONLY) {return;}

		// if there's a high priority sound playing, and we aren't high priority, bail.
		if(_currentSoundId !== null && _currentPriority == ss.SoundPriority.HIGH && priority != ss.SoundPriority.HIGH) { return; }
		
		// if we don't have any sounds loaded, bail.
		if(isEmpty(_spriteMap)) {
			console.warn ("AudioElementSoundManager: Trying to play a sound without setting an audiosprite.");
			return;
		}

		// if there's no sound by that name, bail.
		if(isEmpty(_spriteMap[soundId])) { return; }

		// if we're on iOS and our volume is less than 1/2, bail.
		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
		if(iOS && _volume < 0.5) { return; }

		// pause the audio, just in case.
		_audioElement.pause();

		//Stop the sound immediately if the sound isn't ready yet
		if(!_ready) {
			//If the sound is high priority, queue it for later
			if(priority == ss.SoundPriority.HIGH) {
				_queuedAudio.push({"soundId": soundId, "priority": priority, "loop":loop});
				return;
			}
			_currentSoundEnd = 0;
		}
		
		// set the currently playing sound, and the current priority.
		_currentSoundId = soundId;
		_currentPriority = priority;
		_currentSoundLoop = loop;

		// determine where in the sound sprite to play.
		var start = _spriteMap[soundId].start;
		var end = _spriteMap[soundId].end;
		//var length = end - start;

		_currentSoundStart = start;
		_currentSoundEnd = end;

		//TESTING
		//ss.DebugUtil.showMessage("Play Audio: ID = " + soundId + " Duration = " + _audioElement.duration + ", Start = " + start + ", End = " + end, "SoundPlay" + soundId);


		// play the sound, and setup the tween to stop the sound.
		_audioElement.currentTime = start;

		//Start playing the sound right away if not paused
		if(!_isPaused){
			_audioElement.play();
		}
	};

	_this.onTimeUpdate = function (e) {
		var finSound;

		//Don't perform updates if paused
		if(_isPaused) {
			return;
		}

		//TESTING
		ss.DebugUtil.showMessage("CurSound: " + _currentSoundId + ", Sound: CurTime: " + _audioElement.currentTime + ", EndTime: " + _currentSoundEnd, "SoundCheck");

		if (_currentSoundId !== null) {
			//Check if the sound is erroniously playing from prior to its start time, and try to correct it
			if(_audioElement.currentTime < _currentSoundStart - _TIME_TOLERANCE){
				//TESTING
				//console.log("AudioElementSoundManager: Sound started from incorrect time! Start = " + _currentSoundStart + ", Actual = " + _audioElement.currentTime);
				//ss.DebugUtil.showMessage("AudioElementSoundManager: Sound started from incorrect time! Start = " + _currentSoundStart + ", Actual = " + _audioElement.currentTime, "SndStartError");

				_audioElement.currentTime = _currentSoundStart;
			}

			//Check if the sound has completed playing
			if(_audioElement.currentTime >= _currentSoundEnd) {
			_audioElement.pause();
			_audioElement.currentTime = 0;
				if (!_currentSoundLoop) {
					finSound = _currentSoundId;
					_currentSoundId = null;

					//Start any additional queued sounds
					_tryPlayNextQueuedSound();

					_this.dispatchEvent(new BaseEvent("complete", finSound));
				} else {
					_this.playSound(_currentSoundId, _currentPriority, _currentSoundLoop);
				}
			}
		}
	};

	/*
	* Pause a particular sound currently being played
	* @param soundId:[String] - Id of the sound to pause
	*/
	_this.pauseSound = function(soundId){
		if(!isEmpty(_currentSoundId) && _currentSoundId == soundId){
			_audioElement.pause();
		}
	}


	/*
	* Resume a particular sound currently being played
	* @param soundId:[String] - Id of the sound to resume
	*/
	_this.resumeSound = function(soundId){
		if(!isEmpty(_currentSoundId) && _currentSoundId == soundId && !_isPaused){
			_audioElement.play();
		}
	}

	/*
	* Pause all currently playing sounds
	*/
	_this.pauseAllSounds = function(){
		//Do nothing if already paused
		if(_isPaused){
			return;
		}

		if(!isEmpty(_currentSoundId)){
			_audioElement.pause();
		}

		_isPaused = true;
	}

	/*
	* Resume all currently playing sounds
	*/
	_this.resumeAllSounds = function(){
		//Do nothing if not currently paused
		if(!_isPaused){
			return;
		}

		if(!isEmpty(_currentSoundId)){
			_audioElement.play();
		}

		_isPaused = false;
	}

	/*
	* Stops all instances of sounds playing with the given soundId.
	* @param soundId: The identifier of the sound instance(s) to stop.
	*/
	_this.stopSound = function(soundId) {
		var finSound;

		if(_currentSoundId == soundId) {
			_audioElement.pause();
			finSound = _currentSoundId;
			_currentSoundId = null;
			_this.dispatchEvent(new BaseEvent("complete", finSound));
			
		}
	};

	/*
	* Stop all sounds that are currently playing.
	*/
	_this.stopAllSounds = function () {
		var finSound;
		finSound = _currentSoundId;

		if(!isEmpty(_audioElement)){
			_audioElement.pause();
		}
		
		_currentSoundId = null;

		_this.dispatchEvent(new BaseEvent("complete", finSound));
	};

	/*
	* Sets the global volume for the sound manager.
	* @param vol: the volume to use, ranging from (0-1) meaning (silence-full volume)
	* NOTE: iOS does not respect the volume property on _audioElements,
	*  -on iOS a volume less than 0.5 will play no sounds.
	*  -on iOS a volume greater than or equal to 0.5 will play soudns at full volme.
	*/
	_this.setVolume = function(vol) {
		if (isEmpty(_audioElement)) {
			return;
		}
		_audioElement.volume = vol;
		
		_volume = vol;

		var iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );

		if(iOS && vol < 0.5)  {
			_this.stopAllSounds();
		}
	};

	/*
	* Gets the current volume.
	* @return - the current volume of the sound manager.
	*/
	_this.getVolume = function() {
		return _volume;
	};

	/*
	* Gets a list of currently playing sounds.
	* @return - a list of the soundIds that are currently playing.
	* NOTE: If a sound has multiple playing instances, it will be listed multiple times.
	*/
	_this.getPlayingSounds = function() {
		return [_currentSoundId];
	};

	/*
	* Returns whether there are any instances of a given SoundId playing.
	*/
	_this.isPlaying = function(soundId) {
		return (_currentSoundId == soundId);
	};

	/*
	 * Check if the audio id is valid
	 * @param soundId: The id of the sound from the sound sprite. NOTE: using a sound that isn't in the sprite will result in an error.
	 * @return - true if the audio id is valid and exist such data, false otherwise
	 */
	function _isValid(soundId) {

		// if we haven't set a sprite map, bail.
		if(isEmpty(_spriteMap)) {
			return false;
		}

		// if there's no sound by that name, bail.
		if(isEmpty(_spriteMap[soundId])) {
			return false;
		}

		return true;
	}

	return _construct ();
};