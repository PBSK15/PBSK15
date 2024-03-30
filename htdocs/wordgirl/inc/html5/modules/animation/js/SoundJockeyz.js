// JavaScript Document
var SoundJockeyz = function()
{
	window.soundJockeyz = this;
	//window.soundJockeyz.updateTimeout = setInterval(window.soundJockeyz.update, window.soundJockeyz.updateRate);
    return window.soundJockeyz;
};

SoundJockeyz.prototype = {

	soundFiles: [],
    currentAudioFileName: undefined,
	initialized: false,
	paused: false,
	updateTimeout: 0,
	timeout: undefined,
	currentStart: 0,
	currentDuration: 0,
	currentFile: undefined,
	padding: 0,
	retryRate: 500,
	updateRate: 250,
	metadataHasLoadedOnAndroid: false,
	iOS: navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false,
	IE: navigator.userAgent.match(/(MSIE)/g) ? true : false,
	format: navigator.userAgent.match(/(iPad|iPhone|iPod|Safari|MSIE)/g) ? 'mp3' : 'ogg',

	destroy: function()
	{
		window.clearInterval(this.updateTimeout);
		for(var f in this.soundFiles)
		{
			this.soundFiles[f]['file'].stop();
		}
		this.soundFiles = [];
	},
	loadXMLDoc: function(url)
	{
		var xhttp = null;
		if (window.XMLHttpRequest)
		{
			xhttp = new XMLHttpRequest();
		}
		else
		{
			xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.open("GET", url, false);
		xhttp.send();
		return xhttp.responseXML;
	},
	addSoundFile: function(fileID, soundFileURL, xmlURL, soundID)
	{
//		console.log("ADD SOUND FILE");
		var soundFileURL = soundFileURL.replace('.*', '.'+this.format);
		this.soundFiles[fileID] = [];
		if(soundID && soundID != '')
		{
			var thisSound = this.soundFiles[fileID]['file'] = document.getElementById(soundID);
		}
		else
		{
			thisSound = this.soundFiles[fileID]['file'] = document.createElement("audio");
		}
		thisSound.preload = 'auto';
		thisSound.autoBuffer = 'auto';
		thisSound.autostart = false;
		thisSound.src = soundFileURL;
		try
		{
//			thisSound.addEventListener('loadedmetadata', function(e) {console.log("LOADED METADATA: " + e);});
			thisSound.addEventListener('loadedmetadata', function(e) {this.metadataHasLoadedOnAndroid = true});
			thisSound.load();
		}
		catch(e)
		{
			console.log('Browser does not support audio element');
			try
			{
				thisSound = new Audio(soundFileURL);
			}
			catch(e)
			{
				console.log('Browser does not support Audio object');
			}
		}
		this.soundFiles[fileID]['timeout'] = 0;
		this.soundFiles[fileID]['config'] = this.loadXMLDoc(xmlURL);
		this.soundFiles[fileID]['currentSound'] = '';
		this.soundFiles[fileID]['startTime'] = 0;
		this.soundFiles[fileID]['duration'] = 3000;
		this.soundFiles[fileID]['loop'] = false;
//		console.log(this.soundFiles[fileID].duration);
	},
	playSoundFile: function(fileName)
	{
		if(this.soundFiles[fileName])
		{
			if(this.soundFiles[fileName]['timeout'] != 0)
			{
				window.clearTimeout(this.soundFiles[fileName]['timeout']);
			}
			this.soundFiles[fileName]['file'].play();
		}
	},
	percentageLoaded: function($fileNamesArray)
	{
//		console.log("--------");
		var percLoaded = 0;

		var totalBuffered = 0;
		var totalDuration = 0;
		for(var i = 0; i < $fileNamesArray.length; i++)
		{
			var currentSoundFile = this.soundFiles[$fileNamesArray[i]]['file'];
			currentSoundFile.play();
//			    console.log(currentSoundFile.buffered.end);
//			console.log(currentSoundFile.buffered.length);
			totalBuffered += currentSoundFile.buffered.end(currentSoundFile.buffered.length-1);
//			console.log(currentSoundFile);
			var currentDuration = 0;
			if(!isNaN(currentSoundFile.duration))
				currentDuration = currentSoundFile.duration;
			else
				currentDuration = currentSoundFile.buffered.length-1;
			totalDuration += currentDuration;
		}

//		console.log("totalBuffered: " + totalBuffered);
//		console.log("totalDuration: " + totalDuration);
		percLoaded = totalBuffered / totalDuration;
		return percLoaded * 100;
	},
	soundFileIsPlaying: function(fileName)
    {
	    return !this.soundFiles[fileName]['file'].paused;
	},
	soundIsPlaying: function(fileName, soundName)
    {
		return (this.soundFiles[fileName]['currentSound'] == soundName);
	},
	playSound: function(fileName, soundName, loop)
	{
		if(!this.soundFiles[fileName])
		{
			console.log(fileName+' does not exist');
			return;
		}
		if(!this.soundFiles[fileName]['config'])
		{
			console.log('Config for '+fileName+' not found');
			return;
		}
		try
		{
			var sounds = this.soundFiles[fileName]['config'].childNodes[0].getElementsByTagName('sound');
		}
		catch(e)
		{
			sounds = this.soundFiles[fileName]['config'].childNodes[1].getElementsByTagName('sound');
		}

		for(var s = 0; s < sounds.length; ++s)
        {
			if($(sounds[s]).attr('name') == soundName)
            {
				var targetTime = $(sounds[s]).attr('start');
				var duration = $(sounds[s]).attr('duration');
				var soundFile = this.soundFiles[fileName]['file'];
				if(this.soundFiles[fileName]['timeout'] != 0)
				{
					window.clearTimeout(this.soundFiles[fileName]['timeout']);
				}
				break;
			}
		}


//		console.log(soundFile.buffered.length);
		if(soundFile.buffered.length)
        {
			if(soundFile.buffered.end(soundFile.buffered.length-1) >= targetTime)
            {
                window.soundJockeyz.currentAudioFileName = undefined;
				if(loop)
                {
					this.soundFiles[fileName]['loop'] = true;
                }
                else
                {
					this.soundFiles[fileName]['loop'] = false;
                }
				this.soundFiles[fileName]['currentSound'] = soundName;
				this.soundFiles[fileName]['startTime'] = Date.now();
				this.soundFiles[fileName]['duration'] = duration*1000-this.padding;

				try
                {
					soundFile.currentTime = targetTime;
				}
                catch(e)
                {
				    console.log("catch: " + e);
				}
				
				soundFile.play().catch(error => {
					// just need to catch it, not do anything else. this logs A LOT in the console if I try printing it
				});
				
				this.soundFiles[fileName]['timeout'] = window.setTimeout(function(){ window.soundJockeyz.onSoundComplete(fileName); }, duration*1000-this.padding);
			}
            else
            {
                window.soundJockeyz.currentAudioFileName = fileName;
				soundFile.play();
//	            soundFile.pause();
//				console.log(soundName+' not buffered');
				window.setTimeout(function(){window.soundJockeyz.playSound(fileName,soundName,loop);}, this.retryRate);
			}
		}
        else
        {
//			console.log(soundName+' not buffered');
//	        window.setTimeout(function(){window.soundJockeyz.playSound(fileName,soundName,loop);}, this.retryRate);
	        try
	        {
		        soundFile.currentTime = targetTime;
		        soundFile.play();
	        }
	        catch(e)
	        {
		        console.log("catch: " + e);
	        }
//	        soundFile.play();
//	        soundFile.pause();
		}
	},
	onSoundComplete: function(fileName){
		if(window.soundJockeyz.soundFiles[fileName]['loop'])
		{
			window.soundJockeyz.playSound(fileName, window.soundJockeyz.soundFiles[fileName]['currentSound'], true);
		}
		else
		{
			window.soundJockeyz.playSound(fileName, 'silence');
		}
	},
	setSoundVolume: function(fileName, level)
	{
		try
		{
			this.soundFiles[fileName]['file'].volume = level;
		}
		catch(e)
		{
			console.log(e);
		}
	},
	pauseSounds: function($fileNamesArray)
	{
		for(var i = 0; i < $fileNamesArray.length; i++)
		{
			var currentSoundFile = this.soundFiles[$fileNamesArray[i]]['file'];
			window.clearTimeout(this.soundFiles[$fileNamesArray[i]]['timeout']);
			currentSoundFile.pause();
		}
	},
	update: function(){
		var now = Date.now();
		for(var f in window.soundJockeyz.soundFiles)
		{
			if(now - window.soundJockeyz.soundFiles[f]['startTime'] >= window.soundJockeyz.soundFiles[f]['duration'])
			{
				window.soundJockeyz.onSoundComplete(f);
			}
		}
	}
};