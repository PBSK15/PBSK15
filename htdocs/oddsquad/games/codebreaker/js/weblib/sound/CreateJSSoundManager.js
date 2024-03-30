/* global require, AbstractEventDispatcher, isEmpty, createjs, SoundPriority, BaseEvent */
//require.include("weblib/external/createjs.min.js");
//require.include("weblib/core/CorePackage.js");
//require.include("weblib/sound/SoundManager");

/*
* CreateJS Sound Manager.
* Provides access to soundJS, and adds audio priority.
* Dispatches the following events:
*	"loaded" -> when an audio sprite has finished loading.
* 	"complete"  (audioId) -> When an audio file finishes playing, or when one cycle of a looping audio track finishes.
*/
var CreateJSSoundManager = CreateJSSoundManager || new function () {
	"use strict";

	// locally scoped copy of this, extend AbstractEventDispatcher.
	var _this = AbstractEventDispatcher ( this );

	// sprite map definition within the audio sprite.
	var _spriteMap;

	// Queued audio file (if play was called before audio was loaded.)
	var _queuedAudio;

	// Whether or not the audio sprite has been loaded.
	var _loaded;

	//[Array<Object>] List of objects containing data for currently playing sounds.
	var _currentSounds = [];

	// Current volume.
	var _volume;

	//[Boolean] - Whether the sound manager is currently paused or not
	var _isPaused;

	/*
	* Constructor. Volume defaults to 1.
	*/
	function _construct () {
		_volume = 1;
		_loaded = false;
		_isPaused = false;

		return _this;
	}

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

		// if we haven't loaded yet, queue the playback.
		if(!_loaded) {
			_queuedAudio = soundId;
			return false;
		}

		// if there's no sound by that name, bail.
		if(isEmpty(_spriteMap[soundId])) {
			return false;
		}

		return true;
	}

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

		// use the 1st file as a default, unless we find one in our preferred format.
		var mainFile = audioResources[0];

		for(i = 0; i < audioResources.length; i++) {
			var res = audioResources[i];

			// extract the file extension.
			var extension = res.substring(res.length - 3, res.length);
			if(extension !== "ogg") {
				// if it's not an ogg, ad dit to the extension list.
				extensionList.push(extension);
			}

			// if we find an ogg version of the file, use that one, as it has the
			// best compatibility across desktop browsers. see: https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats for details on browser support.
			if(extension === "ogg") {
				mainFile = res;
			}
		}

		// set the list of alternate extensions.
		createjs.Sound.alternateExtensions = extensionList;

		// wait for load.
		createjs.Sound.addEventListener("fileload", createjs.proxy(_this.handleLoad, _this));

		// register the audio sprite.
		createjs.Sound.registerSound(mainFile, "mainAudio");
	};

	/*
	* Listener for when load is complete.
	*/
	_this.handleLoad = function(event) {
		// set the loaded flag.
		_loaded = true;
		
		//Stop all sound just in case some browser start playing audio by default
		_this.stopAllSounds();

		// If we have a queued piece of audio, play it.
		if(!isEmpty(_queuedAudio)) {
			_this.playSound(_queuedAudio);
		}

		// dispatch the loaded event.
		_this.dispatchEvent(new BaseEvent("loaded"));


	};

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
	}


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
	}


	/*
	* Play a sound.
	* @param soundId: The id of the sound from the sound sprite. NOTE: using a sound that isn't in the sprite will result in an error.
	* @param priority (optional): a SoundPriority specifying the priority of the sound we are starting.
	* @param loop: True to loop the sound, false otherwise.
	*/
	_this.playSound = function (soundId, priority, loop) {

		//console.log("PLAYING: " + soundId);
		// default priority to low.
		if(isEmpty(priority))
		{
			priority = ss.SoundPriority.LOW;
		}
		
		// default loop to false.
		if(isEmpty(loop)) {
			loop = false;
		}

		// if we haven't set a sprite map, bail.
		if(isEmpty(_spriteMap)) {
			return;
		}

		// if we haven't loaded yet, queue the playback.
		if(!_loaded) {
			_queuedAudio = soundId;
			return;
		}
		
		// if there's no sound by that name, bail.
		if(isEmpty(_spriteMap[soundId])) {
			console.warn("Good sir, your request to play sound '" + soundId + "' is completely unreasonable, for it does not exist!");
			return;
		}

		// extract the times for the audio file.
		var start = _spriteMap[soundId].start;
		var end = _spriteMap[soundId].end;
		var length = end - start;

		//TESTING
		//ss.DebugUtil.showMessage("Play Audio: ID = " + soundId + ", Start = " + start + ", End = " + end, "SoundPlay" + soundId);
		//END TESTING

		//console.log("START: " + start + " END: " + end + " LENGTH: " + length);
		// create a new instance for playback.
		var instance = createjs.Sound.createInstance("mainAudio");

		// set the interrupt on the audio playback based on the priority.
		var interrupt;
		if(priority == ss.SoundPriority.HIGH) {
			// set high priority stuff to interrupt, and anything else to not.
			interrupt = createjs.Sound.INTERRUPT_ANY;
			//console.log("PLAYING: " + soundId + " WITH INTERRUPT_ANY");
		} else {
			interrupt = createjs.Sound.INTERRUPT_NONE;
			//console.log("PLAYING: " + soundId + " WITH INTERRUPT_NONE");
		}

		// play the clip.
		instance.play({offset:start * 1000, interrupt:interrupt, volume:_volume});

		// create a holder for the instance and the sound ID (to be referenced if we need to stop a sound.)
		var soundObj = {soundId: soundId, instance: instance, priority: priority};
		_currentSounds.push (soundObj);

		if(!loop) {
			// if we aren't looping, stop the audio when the length is up.
			createjs.Tween.get(instance).wait(length * 1000).call(function(){
				var remIndex;

				instance.stop();
				_this.dispatchEvent(new BaseEvent("complete", soundObj.soundId));
				
				//Remove the sound from the current sounds list
				remIndex = _currentSounds.indexOf(soundObj);
				if(remIndex < 0){
					//console.log("!! WARNING !! Couldn't find sound " + soundObj.soundId + " in the current sounds list while attempting to stop it!");
				}else{
					_currentSounds.splice(remIndex, 1);
				}
			});
		} else {
			// if we are looping, restart the audio when the length is up.
			createjs.Tween.get(instance).wait(length * 1000).call(function(){
				var remIndex;

				instance.stop();
				_this.dispatchEvent(new BaseEvent("complete", soundObj.soundId));
				
				//Remove the sound from the current sounds list
				remIndex = _currentSounds.indexOf(soundObj);
				if(remIndex < 0){
					//console.log("!! WARNING !! Couldn't find sound " + soundObj.soundId + " in the current sounds list while attempting to stop it!");
				}else{
					_currentSounds.splice(remIndex, 1);
				}

				_this.playSound(soundObj.soundId, priority, loop);
			});
		}
	};

	/*
	* Pause a particular sound currently being played
	* @param soundId:[String] - Id of the sound to pause
	*/
	_this.pauseSound = function(soundId){
		//Look for this sound in the list of current sounds and pause it
		for(var i = 0; i < _currentSounds.length; i++){
			if(_currentSounds[i].soundId == soundId){
				_currentSounds[i].instance.pause();
			}
		}
	}

	/*
	* Resume a particular sound currently being played
	* @param soundId:[String] - Id of the sound to resume
	*/
	_this.resumeSound = function(soundId){
		//Look for this sound in the list of current sounds and resume it
		for(var i = 0; i < _currentSounds.length; i++){
			if(_currentSounds[i].soundId == soundId){
				_currentSounds[i].instance.resume();
			}
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

		//Loop through all current sounds and pause them
		for(var i = 0; i < _currentSounds.length; i++){
			_currentSounds[i].instance.pause();
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

		//Loop through all current sounds and resume them
		for(var i = 0; i < _currentSounds.length; i++){
			_currentSounds[i].instance.resume();
		}

		_isPaused = false;
	}

	/*
	* Stops all instances of sounds playing with the given soundId.
	* @param soundId: The identifier of the sound instance(s) to stop.
	*/
	_this.stopSound = function (soundId) {

		// keep a list of which sounds need to be removed from the currently playing list.
		var toRemove = [];
		//var removeIndices = [];
		var snd;
		var i;	
		var remIndex;	

		//Look through all sounds for any with a matching ID
		for (i = 0; i < _currentSounds.length; i++){		
			snd = _currentSounds[i];						

			if(snd.soundId == soundId) {

				// if the sound matches, stop it and flag it to be removed from the currently playing list.
				if(!isEmpty(snd.instance)) {
					snd.instance.stop();

					// stop any tweens waiting on the end of the sound.
					createjs.Tween.removeTweens(snd.instance);
				}
				_this.dispatchEvent(new BaseEvent("complete", snd.soundId));
				toRemove.push(snd);
			}
		}

		// remove the stopped instances from the currently playing list.
		for (i = 0; i < toRemove.length; i++){	

			remIndex = _currentSounds.indexOf(toRemove[i]);
			if(remIndex >= 0){
				_currentSounds.splice(remIndex, 1);	
			}
			//_currentSounds.pop(toRemove[i]);
			
		}
	};

	/*
	* Stop all sounds that are currently playing.
	* @param priority:SoundPriority (Optional) - If provided, only sounds with this priority will be stopped
	*/
	_this.stopAllSounds = function ( priority ) {

		var snd;
		// keep a list of which sounds need to be removed from the currently playing list.
		var toRemove = [];
		var remIndex;

		for (var i = 0; i < _currentSounds.length; i++) {
			snd = _currentSounds[i];

			if (isEmpty(priority) || snd.priority === priority)
 			{
				snd.instance.stop();
				toRemove.push(snd);

				// stop any tweens that are waiting on the end of the sound.
				createjs.Tween.removeTweens(snd.instance);
				_this.dispatchEvent(new BaseEvent("complete", snd.soundId));
			}
		}
		
		// remove the stopped instances from the currently playing list.
		for (i = 0; i < toRemove.length; i++){	
			remIndex = _currentSounds.indexOf(toRemove[i]);
			if(remIndex >= 0){
				_currentSounds.splice(remIndex, 1);	
			}
			//_currentSounds.pop(toRemove[i]);
			
		}
	};

	/*
	* Sets the global volume for the sound manager.
	* @param vol: the volume to use, ranging from (0-1) meaning (silence-full volume)
	*/
	_this.setVolume = function(vol) {
		var snd;

		_volume = vol;
		for (var i = 0; i < _currentSounds.length; i++){
			snd = _currentSounds[i];

			// set the volume on any currently playing instances.
			snd.instance.volume = _volume;
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
	_this.getPlayingSounds = function () {
		var soundList = [];
		var snd;

		for (var i = 0; i < _currentSounds.length; i++){
			snd = _currentSounds[i];
			soundList.push(snd.soundId);
		}
		return soundList;
	};

	/*
	* Returns whether there are any instances of a given SoundId playing.
	*/
	_this.isPlaying = function (soundId) {
		var snd;

		for (var i = 0; i < _currentSounds.length; i++){
			snd = _currentSounds[i];
			if (snd.soundId == soundId) {
				return true;
			}
		}
		return false;
	};

	return _construct ();
};