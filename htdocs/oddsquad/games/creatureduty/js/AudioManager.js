/*

  Audio Manager
  
  
  Assuming you have "audio/something.mp3" and "audio/something.ogg" in your game folder, pass:
  parameter: Object /audioData/, of the form  {	filename: "something", sound1: { start: 0.18, length: 0.5 }, sound2: { start: 1.1, 	length: 0.4	} }
  
*/
	
var AudioManager = function (audioData,gameManager) {

	createjs.Container.apply(this);

	var _this = this;
	var ALMOST_ZERO = 0.01;
	var LOOP_SIZE = 0.2;
	var hasPlayed = false;

	this.audioElement;
	this.loaded = false;
	this.spriteData = audioData;
	this.currentSprite = audioData["init"] == undefined ? {'start': 0.1, 'duration': 0.1 } : audioData["init"];
	this.currentId = "";
	this.currentPriority = 0;
	this.audioTweener = {};
    this.initialized = false;
    this.muted = false;
    this.silentSound = false;
    this.detectedCanPlay = false;
	this.source1;
	this.source2;
	this.isMobile;
	this.targetVolume = 1;
	this.gameManager = gameManager;

	this.firstTimeUpdate = true;
	this.testInt = 0;

	/**
	 * readyToPlay
	 * -----------
	 * Is the Audio element ready to play sounds now without getting errors?
	 * @return {Boolean}
	 */
	this.readyToPlay = function(){
		return (_this.audioElement != null && _this.audioElement.currentTime != undefined && !isNaN(_this.audioElement.duration) && (_this.audioElement.readyState > 0 || _this.gameManager.browserDetect.isIE()) );
	}

	/**
	 * onLoaded
	 * --------
	 * Register and announce that the audio has been loaded.
	 * @param  {Event} e -- A canplaythrough event
	 * @return {void}
	 */
	this.onLoaded = function (e){
		_log("_ _ _ _ _ _ _ _ _ _" +_this.name+", "+_this.audioElement.id + " loaded!");

		_this.loaded = true; 
		_this.audioElement.removeEventListener('canplaythrough', _this.onLoaded);
		_this.audioElement.pause();

		var evt = new createjs.Event("AUDIO_LOADED", true);
		evt.data = {audioManager:_this};
		_this.dispatchEvent(evt);
		
	}


	/** 
	 * sndInit
	 * -------
	 * Initialize this manager for use (load the audio; set the volume)
	 * @return {void}
	 */
	this.sndInit = function (){	
		_log("____________________" +_this.name+", "+ _this.audioElement.id + " init.");

		_this.audioElement.volume = _this.targetVolume;
		_this.audioElement.addEventListener('canplaythrough', _this.onLoaded);
		_this.audioElement.load();
		_this.audioElement.play();
		_this.audioElement.pause();
		
		_this.playSound("init",0);	
	}

	/**
	 * reportComplete
	 * --------------
	 * Dispatch an event reporting the id of the sound sprite that just finished playing.
	 * @param  {string} id
	 * @return {void}
	 */
	this.reportComplete = function(id){
		_log(" === REPORTING === "+id+" complete.")
		var evt = new createjs.Event("SOUND_COMPLETE", true);
		evt.data = {soundname:id};
		_this.dispatchEvent(evt);
	}

	/**
	 * onTimeUpdate
	 * ------------
	 * Check to see whether a playing sound has reached the end of the current sprite, 
	 * and if so, stop it and report.
	 * @param  {Event} e 
	 * @return {void}
	 */
	this.onTimeUpdate = function (e) {

		//_log("__oTU__"+_this.name+"___ "+_this.audioElement.currentTime)
		if(_this.loaded){


			var runningSilent = _this.silentSound && (_this.audioElement.currentTime >= (_this.currentSprite.start) + LOOP_SIZE);

			var runningFromTheStart = ((_this.audioElement.currentTIME > ALMOST_ZERO) && (_this.audioElement.currentTime < 0.5));

			var endOfSprite = _this.currentId == "init" || ( (_this.currentSprite != null) && (_this.audioElement.currentTime >= (_this.currentSprite.start) + _this.currentSprite.duration) );

			_this.muted = !_this.gameManager.hasFocus;

			if( runningSilent && !endOfSprite) {
				// special case for when we can't disable volume but we still want sounds to run for a certain time
				_this.currentSprite.duration = Math.max(0,_this.currentSprite.duration - LOOP_SIZE);
				_this.audioElement.currentTime = (_this.currentSprite.start).toFixed(2);

			} else if ( runningFromTheStart || endOfSprite	) {
				//_log("oTU, STOP sprite " + _this.currentId);	
				_this.audioElement.pause();
				if(_this.audioElement.readyState > 0){
					_this.audioElement.currentTime = ALMOST_ZERO;
				}
				_this.stopSound(true);	
			}
			
		} else {
			_log("oTU, !loaded, stopping sound "+_this.currentId+" and not reporting.")
			_this.stopSoundAfter(0,false);
			_this.audioElement.pause();
			/*
			if(_this.audioElement.currentTime != undefined && _this.audioElement.currentTime != null){
				_log("||| audioElement: "+_this.audioElement);
				_log("||| currentTime: "+_this.audioElement.currentTime);
				_log("||| ALMOST_ZERO: "+ALMOST_ZERO);
				_this.audioElement.currentTime = ALMOST_ZERO;
			}
			*/
			_this.onLoaded(e);
		}
	};
	
	/**
	 * setVolume
	 * ---------
	 * @param {[type]} v [description]
	 * @return {void}
	 */
	this.setVolume = function (v){
		_this.targetVolume = v;
		if(_this.audioElement !== undefined){
			_this.audioElement.volume = _this.targetVolume;
		}
		
	}
	/**
	 * playSoundAfter
	 * --------------
	 *  wait /ms/ milliseconds and then play sound /id/.
	 * @param  {string} id       Name of the sound to play
	 * @param  {int} priority    If this is lower than the priority of a playing sound, this won't play.
	 * @param  {int} ms          How many milliseconds to wait
	 * @return {void}
	 */
	this.playSoundAfter = function (id, priority, ms){
		_log (" PLAYSOUND " + id+" AFTER "+ms+" MS, priority "+priority);
		createjs.Tween.get(_this.audioTweener).wait(ms).call(_this.playSound, [id, priority],_this);
	}

	this.seekStart = function(){
		if(_this.currentSprite != null){
			_log("seeking Start, at "+_this.audioElement.currentTime+", seeking for "+(_this.currentSprite.start) );
			
	        _this.audioElement.removeEventListener('playing', _this.seekStart);
			_this.audioElement.currentTime = (_this.currentSprite.start).toFixed(2);
			_this.audioElement.play();

			hasPlayed = true;	
		} else {
			_log("seeking Start, no currentSprite");
		}
        
    }

	// play the sound named /id/ in the sprite.
	// if priority of older sound is higher than priority of this sound, don't do it.
	//----------------------------------------------------------------------------------------------
	this.playSound = function (id, priority) {
		var STYLISH = "color: indigo; font-weight: bold; background-image:url(\"http://unicodey.com/emoji-data/img-hangouts-64/1f3b5.png\"); background-size:15px 15px; background-repeat: no-repeat";
		_log("%c   "+_this.name+" playSound %c"+id+", "+priority, STYLISH,"");
		//////alert(_this.name+" playSound "+id+", "+priority);
		var priority = priority || 0;
		
		_this.muted = !_this.gameManager.hasFocus;
		var doSilently = false;

		if(id != "init" && (!_this.loaded || _this.audioElement == undefined || (!_this.readyToPlay() && !_this.isMobile) ) ){
			_log("going silent, cause: ");
			//////alert("going silent, cause: ");
			_log("A: "+(id != "init")+", B: "+(_this.loaded)+", C: "+(_this.audioElement !== undefined)+", D: "+ (_this.readyToPlay())+", E: "+_this.isMobile+".");
			//////alert("A: "+(id != "init")+", B: "+(_this.loaded)+", C: "+(_this.audioElement !== undefined)+", D: "+ (_this.readyToPlay())+", E: "+_this.isMobile+".");

			doSilently = true;
		} else if (!_this.initialized){
			_log(_this+" NOW is INIT!");
			//////alert(_this+" NOW is INIT!");
			_this.initialized = true;
		}
		// cancel any calls to stop the sound, we're playing a new one.
		if(!_this.busy() || priority >= _this.currentPriority){
			_log (" PLAYSOUND " + id+", priority "+priority);
			////alert(" PLAYSOUND " + id+", priority "+priority);
			if (_this.spriteData[id] != null && _this.initialized) {
				
				_log (", good to go, "+_this.isMobile+", "+_this.muted+", "+_this.targetVolume+", "+_this.spriteData[id].start+" vs "+(_this.spriteData.full_length) );


				//_this.stopSound(false);
				_this.audioElement.pause();

				if(doSilently || (_this.isMobile && (_this.muted || _this.targetVolume < 1)) ){
					_this.silentSound = true;
					_this.currentSprite = { 'start': LOOP_SIZE, 'duration':  _this.spriteData[id].duration };
				} else {
					_this.silentSound = false;
					_this.currentSprite = _this.spriteData[id];	
				}
	
				_this.currentId = id;
				_this.currentPriority = priority;
				

				if((_this.currentSprite.start) < (_this.spriteData.full_length)){

					_this.audioElement.volume = _this.muted ? 0 : _this.targetVolume;

					if(!hasPlayed){
						_this.audioElement.removeEventListener('playing', _this.seekStart);
						_this.audioElement.addEventListener('playing', _this.seekStart);
					} 
					
					/*
					_log(".     _this.audioElement: "+_this.audioElement);
					_log(".     _this.audioElement.src: "+_this.audioElement.src);
					_log(".     _this.audioElement.readyState: "+_this.audioElement.readyState);
					_log(".     _this.audioElement.duration: "+_this.audioElement.duration);
					_log(".     _this.audioElement.currentTime: "+_this.audioElement.currentTime);
					_log(".     _this.currentSprite: "+_this.currentSprite);
					_log(".     _this.currentSprite.start: "+_this.currentSprite.start);
					*/
					if(_this.readyToPlay()){	
	      				_this.audioElement.currentTime = ALMOST_ZERO;
	      				_this.audioElement.pause();
						_this.audioElement.play();
						_this.audioElement.currentTime = (_this.currentSprite.start).toFixed(2);

						_log("PLAYING sound "+id+" from "+(_this.currentSprite.start)+" to "+(_this.currentSprite.start + _this.currentSprite.duration)+", now at "+_this.audioElement.currentTime);
					} else if (_this.initialized && _this.currentId != null){
						_log("FAKING sound "+id+" for "+_this.spriteData[id].duration+" ms. cause RS "+_this.audioElement.readyState+", CPT "+_this.detectedCanPlay+" and cT "+(_this.audioElement.currentTime != undefined));
						_this.stopSoundAfter(_this.spriteData[id].duration,true);
					}
				}
				
			} else {
				_log("if " + _this.initialized + " then we couldn't find " + id + " in the sprite: "+_this.spriteData[id]);
				////alert("if " + _this.initialized + " then we couldn't find " + id + " in the sprite: "+_this.spriteData[id]);
			}
		} else {
			_log("NOT playing " + id + " because " + _this.currentId + " has higher priority, " + _this.currentPriority + " vs " + priority);
			////alert("NOT playing " + id + " because " + _this.currentId + " has higher priority, " + _this.currentPriority + " vs " + priority);
		}

	};
	

	
	// Stop the currently playing sound immediately and report that it has completed.
	//------------------------------------------------------------------------------------------------
	this.stopSound = function (andReport){
		var STYLISH = "color: mediumvioletred; font-weight: bold; background-image:url(\"http://unicodey.com/emoji-data/gemoji/images/emoji/unicode/1f6a5.png\"); background-size:20px 20px; background-repeat: no-repeat";
		
		_log("%c    "+_this.name+" stopSound %c"+_this.currentId+" at "+_this.audioElement.currentTime+", reporting? "+andReport, STYLISH," ");
		//////alert(_this.name+" stopSound "+_this.currentId+" at "+_this.audioElement.currentTime+", reporting? "+andReport);


		//createjs.Tween.removeAllTweens(_this.audioTweener);
		if(_this.audioElement !== undefined && _this.audioElement.initialized && _this.readyToPlay()){
			
			_this.audioElement.currentTime = ALMOST_ZERO;
			_this.audioElement.pause();
		}

		if(_this.currentId != null){
			if(andReport !== undefined && andReport){
				_this.reportComplete(_this.currentId);
			}
			_this.currentPriority = -99;
			_this.currentId = null;
			_this.silentSound = false;
			//_this.currentSprite = null;
		}
		
	}
	
	// Stop the currently playing sound after /ms/ milliseconds.
	//-----------------------------------------------------------------------------------------------
	this.stopSoundAfter = function (ms,andReport){
		//if(_this.loaded){
		//	createjs.Tween.get(_this.audioTweener).wait(ms).call(_this.stopSound,[andReport],_this);
		//} else {
			//createjs.Tween.get(_this.audioTweener).wait(1000).call(_this.stopSoundAfter,[ms,andReport]);
			setTimeout(function(){_this.stopSound(andReport)},ms);
			_log("stopping sound sprite, but sprite not loaded.");
		//}
	}
	
	// return whether the audio is playing
	//---------------------------------------------
	this.busy = function (){
		return (!_this.initialized || (_this.initialized && !_this.audioElement.paused));
	}

	this.cancelSounds = function(){
		_this.stopSound(false);
		createjs.Tween.removeTweens(_this.audioTweener);
	}
	
	this.deconstruct = function (){
		document.body.removeChild(_this.audioElement);
	}	

	this.onCanPlay = function(){
		_this.detectedCanPlay = true;
		_this.audioElement.removeEventListener('canplaythrough', _this.onCanPlay);
		_this.audioElement.pause();
	}

	this.testForAudio = function(){
		if(_this.firstTimeUpdate && (_this.audioElement.duration >= _this.spriteData.full_length || _this.audioElement.readyState >= 4)) {
			_this.firstTimeUpdate = false;
			clearInterval(_this.testInt);
			//alert("GOT IT.");
		}
	}

	this.isCurrentlyPlaying = function(id){
		return (_this.currentId == id);
	}
	this.construct = function(){

		if(_this.spriteData != null && _this.gameManager != null){
			_this.audioElement = document.createElement('audio');
			_this.audioElement.id = audioData.filename + "_" + Math.floor(Math.random()*9999);
			_this.audioElement.controls = true;
			_this.audioElement.autoplay = true;
			_this.audioElement.preload = "metadata";
			_this.audioElement.addEventListener('timeupdate', _this.onTimeUpdate);
			
			_this.audioElement.addEventListener('canplaythrough', _this.onCanPlay);
			_this.audioElement.addEventListener('canplaythrough', _this.onLoaded);

			_this.isMobile = _this.gameManager.browserDetect.isMobile();
			
			// use ogg if we can 
		  	if(_this.audioElement.canPlayType('video/ogg') && !_this.gameManager.browserDetect.isKindle() && !_this.gameManager.browserDetect.isIE() ){
		  		_this.oggsource = document.createElement('source');
		  		_this.oggsource.type = 'audio/ogg';
		  		_this.oggsource.src = 'audio/' + audioData.filename + '.ogg';
		  		_this.audioElement.appendChild(_this.oggsource);

		  	} 

			_this.mp3source = document.createElement('source');
			_this.mp3source.type = 'audio/mpeg';
			_this.mp3source.src = 'audio/' + audioData.filename + '.mp3';
			_this.audioElement.appendChild(_this.mp3source);

			if(!_this.isMobile && !_this.gameManager.browserDetect.isIE()){
				_this.audioElement.load();
				_this.audioElement.play();
				_this.audioElement.pause();
			}

			_this.testInt = setInterval(_this.testForAudio,100);
		}
	}

	this.construct();


};

AudioManager.prototype = createjs.Container.prototype;
AudioManager.prototype.constructor = AudioManager;
