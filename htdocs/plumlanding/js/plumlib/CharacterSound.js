// Special CharacterSound object to abstract out sound stuff in case I have to change the sound engine at some point

// CURRENTLY REQUIRES SOUND.JS

// namespace?


(function(lib,createjs) {

		var CharacterSound=function(lines,sync) {
			this.init(lines,sync);
		}
	
	var cs=CharacterSound.prototype;
	
	cs.playing; // t/f whether sound is playing
	cs.voice; //current "voice" or track (there can be only one)
	cs.sfxvoice; // maybe another voice?
	cs.currentsoundname; // which sound is playing now
	cs.soundlist; // array of all sounds; gets loaded as a JSON object
	cs.soundhash; // object of all loaded sounds
	cs.loadedsounds;
	cs.soundsneeded;
	cs.sentence;
	cs.configfile; // to pass back in an event to indicate which set of sounds is ready
	cs.soundendmessage; // message to send with the event when this sound ends
	
	cs.synclist; // array of arrays of mouth frames timed out to the sound

	cs.init=function(lines,syncfile) {
		//cs.logit("lines: " + lines + " sync: " + syncfile);
		//cs.logit("plugo? " + createjs.FlashPlugin);
		//createjs.FlashPlugin.BASE_PATH = "swf/";
		
	//	createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin,createjs.FlashPlugin]);
		createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin]);
	//	cs.logit("flash plug in? " + createjs.Sound.registerPlugin(createjs.FlashPlugin));
 	//	createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, (this));




//		lines="plumlines";
		if(lines) {
			this.loadLines(lines);
 	//	var myself=this;
		}
 	
 		if(syncfile) {
 			this.loadSyncfile(syncfile);
 		}

	}
	
	
	cs.loadLines=function(configfile) {
		var myself=this;
		this.configfile=configfile;
		this.soundlist;
		
		this.synclist=new Object;
		this.soundhash=new Object;
	    myself.logit("open sound config file in audio/" + configfile + ".json");
	    $.getJSON('audio/'+configfile+'.json',function(data,status,xhr){
			myself.logit("AUDIO CONFIG LOADED " + status);
			myself.soundlist=data;
			myself.loadSounds();
		});
	}

	cs.removeSounds=function(soundstokill) {
		for(var t in soundstokill) {
			var soundname=soundstokill[t];
			this.removeSound(soundname);
		}
	}

	cs.removeSound=function(soundname) {
		this.logit("remove sound " + soundname);
		createjs.Sound.removeSound("audio/"+soundname+".mp3|audio/ogg/"+soundname+".ogg", soundname);
	}

	cs.loadSounds=function() {
			this.loadedsounds=0;
			var myself=this;
			this.soundsneeded=myself.soundlist.length;
			// check if event listener has already been set up (multiple lines files)
			if(!createjs.Sound.hasEventListener("fileload")) {
				createjs.Sound.addEventListener("fileload",function(ev) {
					myself.loadedsounds++;
//					myself.logit("loaded sound.. " + myself.loadedsounds + " of " + myself.soundsneeded + " " + ev.id);
					myself.soundhash[ev.id]=true;
					if(myself.loadedsounds>=myself.soundsneeded) {
						myself.allDone();
					}
				});
			}
	 		for(var t in this.soundlist) {
				var soundname=this.soundlist[t];
				this.loadASound(soundname);
			}
	}
	
	cs.allDone=function() {
		this.logit("LOADED EVERY SOUND!");
		this.soundsloaded=true;
		//this.playSound('clicktostart');
		var myself=this;
		$.event.trigger({
			type: "soundLoaded",
			message: myself.configfile
		});
	}
	
	cs.loadASoundSet=function(soundarray) {
		this.soundsloaded=false;
		this.loadedsounds=0;
		this.soundsneeded=soundarray.length;
		for(var a=0;a<soundarray.length;a++) {
			this.loadASound(soundarray[a]);
		}
	}
	
	cs.loadASound=function(soundname) {
	 		this.logit('loading ' + soundname);
	 		var soundpath="audio/";
	 		var sp=soundname.lastIndexOf('/')+1;
	 		if(sp > 0) {
	 			// got a path	 			
	 			soundpath+=soundname.substr(0,sp);
	 			soundname=soundname.substr(sp);
	 		}
	 		//var soundpath="audio/" + pathtosound;
	 		this.logit("path is " + soundpath + " sound is " + soundname);
	 		myself=this;
	 		if(!createjs.Sound.registerSound(soundpath+soundname+".mp3|" + soundpath + "ogg/"+soundname+".ogg", soundname)) {
	 			// can't register? pretend it loaded
	 			myself.logit("can't register " + soundname + "; just pretend it loaded...");
	 			myself.loadedsounds++;
	 			if(myself.loadedsounds>=myself.soundsneeded) {
	 				myself.allDone();
	 			}
	 		}
	}



	cs.loadSyncfile=function(configfile) {
		var myself=this;
	    myself.logit("open sync config file in audio/" + configfile + ".json");
	    $.getJSON('audio/'+configfile+'.json',function(data,status,xhr){
	  	  	myself.logit("AUDIO CONFIG LOADED " + status);
	  		// format is 'soundname':[]
	  		for(d in data) {
	  			myself.setSync(d,data[d]);
	  		}
    	});
	}


	cs.setSync=function(soundname,syncarray) {
		this.synclist[soundname]=syncarray;
		this.logit("setting " + soundname + " to " + syncarray);
	}
	
	cs.playLoop=function(soundname) {
		this.sfxvoice=createjs.Sound.createInstance(soundname);
		this.sfxvoice.play({loop:-1});
	}

	cs.soundReady=function(soundname) {
		// just check to see whether this sound is anywhere...
		if(this.soundhash[soundname]) {
			return true;
		} else {
			this.logit("*** ERROR: Could not find sound for " + soundname);
			return false;
		}
	}

	cs.playSound=function(soundname,message) {
	
		this.logit("trying to play a sound: " + soundname + " message " + this.soundendmessage);
		if(!this.soundReady(soundname)) {
		this.logit("fail! not ready");
			if(message) {
				$.event.trigger({
				type: "soundEnded",
				message: message,
				soundname: soundname
				});
			}
			return;
		}
		this.stopSound();
		this.playing=true;
		this.currentsoundname=soundname;
		this.currentsyncarray=(this.synclist[soundname])?this.synclist[soundname]:null;
		
//		this.logit("sync array: "  + this.currentsyncarray.length);
		
	//	this.voice=createjs.Sound.play(soundname);
		this.voice=createjs.Sound.createInstance(soundname);
		this.voice.play();
		if(message) {
			this.soundendmessage=message;
		} else {
			this.soundendmessage=null;
		}
		var myself=this;
		this.voice.addEventListener("complete", function(ev) {
		myself.playing=false;
		myself.voice.removeEventListener("complete");
		myself.logit("sound is done! " + myself.currentsoundname);
		$.event.trigger({
			type: "soundEnded",
			message: myself.soundendmessage,
			soundname: myself.currentsoundname
		});
		});
	}
	
	cs.playSFX=function(soundname,message) {
		this.playing=true;
		this.currentsoundname=soundname;
		if(this.sfxvoice) {
			this.sfxvoice.removeEventListener("complete");
			this.sfxvoice.stop();
		}
		this.sfxvoice=createjs.Sound.createInstance(soundname);
		this.sfxvoice.play();
/*
		if(message) {
			this.soundendmessage=message;
		} else {
			this.soundendmessage=null;
		}
		var myself=this;
		this.sfxvoice.addEventListener("complete", function(ev) {		
		myself.sfxvoice.removeEventListener("complete");
		myself.playing=false;
		this.logit("sound is done! " + myself.currentsoundname);
		$.event.trigger({
			type: "sfxEnded",
			message: myself.soundendmessage,
			soundname: myself.currentsoundname
		});
		});
	*/
	}

	cs.stopSFX=function() {
		if(this.sfxvoice) {
			this.sfxvoice.removeEventListener("complete");
			this.sfxvoice.stop();
		}
		this.sfxvoice=null;
	}


	cs.playSounds=function(soundarray,message) {
		this.stopSound();
		this.playing=true;
		this.sentence=soundarray;
		this.soundendmessage=message;
		this.logit("after sound: " + message);
		this.playNextSound();
	}

	cs.playNextSound=function() {
		if(this.voice) {
			this.voice.removeEventListener("complete", function() {this.playNextSound()});
		}
		var sndname=this.sentence.shift();
		
		var me=this;
		if(this.sentence.length>0) {
			this.currentsoundname=sndname;
//			this.currentsyncarray=this.synclist[sndname];
			this.currentsyncarray=(this.synclist[sndname])?this.synclist[sndname]:null;
			if(!this.soundReady(sndname)) {
				this.playNextSound();
				return;
			}
			this.voice=createjs.Sound.play(sndname);
			this.voice.addEventListener("complete", function() {me.playNextSound()});

		} else {
			this.playSound(sndname,this.soundendmessage);
		}
	}

	cs.stopSound=function() {
		this.playing=false;
		//this.soundendmessage=null;
		if(this.voice) {
			//this.voice.removeAllListeners();
			this.voice.removeEventListener("complete", function() {this.playNextSound()});
			this.voice.stop();
		}

		this.voice=null;
	}
	
	
	cs.getPos=function() {
		if(!this.playing) {
			return null;
		}
		if(this.voice) {
			return this.voice.getPosition()/this.voice.getDuration();
		}
		return null;
	}
	
	cs.getSyncFrame=function() {
		if(!this.playing) {
			return null;
		}
		if(!this.currentsyncarray) {
			return null;
		}
		if(this.voice) {
		//	this.logit("voice!" + parseInt(this.currentsyncarray.length*this.voice.getPosition()/this.voice.getDuration()));
			return (this.currentsyncarray[parseInt(this.currentsyncarray.length*this.voice.getPosition()/this.voice.getDuration())]);
		}
		return null;
	}
	
	// used to load an additional sound list and sync group
	cs.loadAdditionalSounds = function(add_lines, add_sync) {
	    $.getJSON('audio/'+add_lines+'.json',function(data,status,xhr){
			myself.logit("AUDIO CONFIG LOADED " + status);
			myself.soundlist=data;
			myself.loadSounds();
		});
 		if(add_sync) {
 			this.loadSyncfile(add_sync);
 		}
	}
	
	/*	Helper function for writing to console if available */
	cs.logit = function (msg) {
/*
		if(window.console){
		   console.log(msg);
		}
*/
	}
	
	/*
	cs.soundDone=function(ev) {
		this.logit("sound is done! " + this.currentsoundname);
		$.event.trigger({
		type: "soundEnded",
		message: this.soundendmessage,
		soundname: this.currentsoundname
	});	
	}
	*/

	lib.CharacterSound=CharacterSound;


})(plumlib = plumlib||{}, createjs = createjs||{});
var plumlib,createjs;