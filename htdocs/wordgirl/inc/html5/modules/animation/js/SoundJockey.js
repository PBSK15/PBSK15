function SoundJockey(){}

SoundJockey.touches = [];
SoundJockey.sounds = [];
SoundJockey.contexts = [];
SoundJockey.webAudioAPI = (('webkitAudioContext' in window || 'AudioContext' in window) ? true : false);
SoundJockey.soundFormat = (navigator.userAgent.match(/(iPad|iPhone|iPod|Safari|MSIE)/g) ? 'mp3' : 'ogg');
SoundJockey.iOS = ( navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false );
SoundJockey.android = ((!SoundJockey.webAudioAPI && SoundJockey.soundFormat === 'mp3') ? true : false);
SoundJockey.basePath = '';
SoundJockey.muted = false;

SoundJockey.soundIsPlaying = function(soundName)
{
	if(SoundJockey.webAudioAPI)
	{
		if(soundName in SoundJockey.sounds)
		{
			if(!SoundJockey.sounds[soundName]['source'])
			{
				return false;
			}
			if(SoundJockey.sounds[soundName]['source'].buffer)
			{
				return true;
			}
		}
	}
	else
	{
		if(soundName in SoundJockey.sounds)
		{
			return !SoundJockey.sounds[soundName].audioElement.paused;
		}
	}
	return false;
}

SoundJockey.soundExists = function(soundName)
{
	if(soundName in SoundJockey.sounds)
	{
		if(SoundJockey.sounds[soundName]['source'])
		{
			return true;
		}
	}
	return false;
}

SoundJockey.initSounds = function()
{
	for(var soundName in SoundJockey.sounds)
	{
		if(soundName == '__class__')
		{
			continue;
		}
		if(!SoundJockey.sounds[soundName].source)
		{
			SoundJockey.playSound(soundName);
			SoundJockey.stopSound(soundName);
		}
	}
}

SoundJockey.addSound = function(soundName, context, base64Sound)
{
//	debugger;
	if(SoundJockey.sounds[soundName])
	{
		return;
	}

	if(!context)
	{
		context = 'default';
	}

	SoundJockey.sounds[soundName] = {};
	SoundJockey.sounds[soundName].channel = context;
	SoundJockey.sounds[soundName].context = SoundJockey.getContext(context);
	SoundJockey.sounds[soundName].base64Sound = base64Sound;

	if(!SoundJockey.webAudioAPI)
	{
		SoundJockey.sounds[soundName].audioElement = document.createElement("audio");
		SoundJockey.sounds[soundName].audioElement.autostart = true;
		SoundJockey.sounds[soundName].audioElement.src = (SoundJockey.soundFormat == 'mp3') ? "data:audio/mpeg;base64," + SoundJockey.sounds[soundName].base64Sound : "data:audio/ogg;base64," + SoundJockey.sounds[soundName].base64Sound;
		SoundJockey.sounds[soundName].audioElement.load();
	}
}

SoundJockey.getContext = function(contextName)
{
	if(SoundJockey.webAudioAPI)
	{
		if(!SoundJockey.contexts[contextName])
		{
			try
			{
				SoundJockey.contexts[contextName] = new webkitAudioContext() || AudioContext();
			}
			catch(e)
			{
			}
		}
		return SoundJockey.contexts[contextName];
	}
}

SoundJockey.stopChannel = function(channel)
{
	for(var soundName in SoundJockey.sounds)
	{
		if(SoundJockey.sounds[soundName].channel == channel && SoundJockey.sounds[soundName].source)
		{
			SoundJockey.sounds[soundName].source.stop();
		}
	}
}

SoundJockey.toggleMute = function()
{
	SoundJockey.muted = !SoundJockey.muted;
	for(var contextName in SoundJockey.contexts)
	{
		if(contextName == '__class__')
		{
			continue;
		}
		SoundJockey.contexts[contextName]['gainNode'].gain.value = SoundJockey.muted ? 0 : 1;
	}
}

SoundJockey.playSound = function(soundName, loop)
{
	var thisSound = SoundJockey.sounds[soundName];
	if(!thisSound)
	{
		console.log('You cannot play a sound until you add it. ' + soundName + ' has not been added.');
		return;
	}

// 	SoundJockey.stopChannel(thisSound.channel);

	if(SoundJockey.webAudioAPI)
	{
		if(thisSound.source)
		{
			thisSound.source.disconnect();
		}

		if(!thisSound.context)
		{
			return;
		}

		thisSound.source = thisSound.context.createBufferSource();

		var arrayBuff = Base64Binary.decodeArrayBuffer(thisSound.base64Sound);
		thisSound.context.decodeAudioData(arrayBuff, function(audioData)
		{
			thisSound.source.buffer = audioData;
		});
	}
	else
	{
		thisSound.audioElement = document.createElement('audio');
		thisSound.audioElement.autostart = false;
		thisSound.audioElement.src = "data:audio/ogg;base64," + thisSound.base64Sound;

		thisSound.audioElement.load();

//		setTimeout(SoundJockey.playSound, 0, soundName, '', Boolean(loop));
		thisSound.audioElement.play();
		return;
	}

	if(SoundJockey.webAudioAPI)
	{

		thisSound.source.loop = Boolean(loop);
		if(!thisSound.context.gainNode && typeof thisSound.context.createGainNode === "function")
		{
			thisSound.context.gainNode = thisSound.context.createGainNode();
		} else {
			return;
		}

		thisSound.source.connect(thisSound.context.gainNode);
		thisSound.context.gainNode.connect(thisSound.context.destination);

// 		if(SoundJockey.contexts[thisSound.context]['slider'])
// 			thisSound.context.gainNode.gain.value = SoundJockey.contexts[thisSound.context]['slider'].value;

		thisSound.source.noteOn(0);
	}
	else
	{

		if(thisSound['timeout'])
		{
			clearTimeout(thisSound['timeout']);
		}
		if(loop)
		{
			thisSound['timeout'] = setTimeout(SoundJockey.playSound, thisSound.audioElement.duration * 1000, soundName, '', loop);
		}
		thisSound.audioElement.play();
	}

};

SoundJockey.pauseSound = function(soundName)
{

	if(SoundJockey.webAudioAPI)
	{
		if(soundName in SoundJockey.sounds)
		{
			if(SoundJockey.sounds[soundName]['source'])
			{
				SoundJockey.sounds[soundName]['source'].disconnect();
			}
		}
	}
	else
	{
		if(SoundJockey.sounds[soundName])
		{
			if(SoundJockey.sounds[soundName]['timeout'])
			{
				clearTimeout(SoundJockey.sounds[soundName]['timeout']);
			}
			SoundJockey.sounds[soundName].audioElement.pause();
		}
	}
};

SoundJockey.stopSound = function(soundName)
{

	if(SoundJockey.webAudioAPI)
	{
		if(soundName in SoundJockey.sounds)
		{
			if(SoundJockey.sounds[soundName]['source'])
			{
				SoundJockey.sounds[soundName]['source'].disconnect();
			}
// 			delete SoundJockey.sounds[soundName];
		}
	}
	else
	{
		if(SoundJockey.sounds[soundName]['timeout'])
		{
			clearTimeout(SoundJockey.sounds[soundName]['timeout']);
		}
		SoundJockey.sounds[soundName].audioElement.pause();

		if(SoundJockey.sounds[soundName].audioElement.currentTime != 0)
			SoundJockey.sounds[soundName].audioElement.currentTime = 0;
	}
};

SoundJockey.attachSliderToContext = function(slider, context)
{

	if(!(slider instanceof HTMLInputElement))
	{
		console.log('Invalid slider: ' + slider);
		return;
	}

	if(!(context in SoundJockey.contexts))
	{
		if(SoundJockey.webAudioAPI)
		{
			SoundJockey.contexts[context] = {};
			SoundJockey.contexts[context]['context'] = new webkitAudioContext() || AudioContext();
		}
	}

	if(SoundJockey.webAudioAPI)
	{
		SoundJockey.contexts[context]['gainNode'] = SoundJockey.contexts[context]['context'].createGainNode();
		SoundJockey.contexts[context]['slider'] = slider;

		SoundJockey.contexts[context]['slider'].addEventListener('change', SoundJockey.updateVolume);
	}
}

SoundJockey.updateVolume = function(e)
{

	for(var i in SoundJockey.contexts)
	{
		var context = SoundJockey.contexts[i];
		if(context['slider'] == e.target)
		{
			context['gainNode'].gain.value = context['slider'].value;
			break;
		}
	}

}