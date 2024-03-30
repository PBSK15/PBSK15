function psAudioInit()
{
    if( browserInfo.webAudio == false )
        return psAudioAlt();

    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    var context 	= null;
    var sounds 		= {};
    var soundGroups = {};
    var nodes 		= {};

    var AudioManager =
    {
        init: function ()
        {
            context = new AudioContext();
            
            context.createGain 				= context.createGain || context.createGainNode;
            context.createDelay 			= context.createDelay || context.createDelayNode;
            context.createScriptProcessor 	= context.createScriptProcessor || context.createJavaScriptNode;
            context.setTargetAtTime 		= context.setTargetAtTime || context.setTargetValueAtTime;            
            
            nodes.gain = context.createGain();            	
	        nodes.gain.connect( context.destination );
        },
        loadSound: function( name, path, volume, callback, groupName )
        {
            var soundpath = "./assets/snd/";
            
            if( browserInfo.ogg )
                soundpath += "ogg/" + path + ".ogg";
            else 
                soundpath += "mp3/" + path + ".mp3";

            if( sounds[name] != undefined )
            {
                callback();
                return;
            }

            sounds[name] =
            {
                name: 	name,
                ready: 	false,
                buffer: null,
                volume: context.createGain(),
                group: 	groupName
            };

            if( groupName != undefined )
            {
                if( soundGroups[groupName] == undefined )
                    soundGroups[groupName] = [];

                soundGroups[groupName].push( sounds[name] );
            }

            if( volume != undefined && volume != null )
            {
                sounds[name].volume.gain.value = volume;
            }

            var request = new XMLHttpRequest();
            
            request.open('GET', soundpath, true);
            request.responseType = 'arraybuffer';

            request.onload = function()
            {
                if (request.status == 200)
                {
                    context.decodeAudioData( request.response, function(buffer)
                    {
                        sounds[name].buffer = buffer;
                        sounds[name].ready  = true;
                        sounds[name].volume.connect(nodes.gain);
                        
                        if( callback != undefined && callback != null )
                            callback();      
                    } );
                }
            }
            request.send();
        },
        playSound: function( name, loop, callback )
        {
            if( sounds[name] == undefined || sounds[name] == null )
                return;
            
            if( !sounds[name].ready )
                return;
            
            if( sounds[name].group != undefined && soundGroups[sounds[name].group] != undefined )
            {
                for (var i = 0; i < soundGroups[sounds[name].group].length; i++)
                    audioManager.stopSound(soundGroups[sounds[name].group][i].name);
            }
            sounds[name].source 		= context.createBufferSource();
            sounds[name].source.start 	= sounds[name].source.start || sounds[name].source.noteOn;
            sounds[name].source.stop 	= sounds[name].source.stop  || sounds[name].source.noteOff;            
            sounds[name].source.loop 	= loop || false;
            sounds[name].source.buffer 	= sounds[name].buffer;
            sounds[name].source.onended = callback;            
            sounds[name].source.connect( context.destination );
            sounds[name].source.start( 0 );
        },
        stopSound: function( name )
        {
            if( sounds[name] == undefined || sounds[name] == null )
                return;

            if( !sounds[name].ready )
                return;

            if( sounds[name].source == undefined || sounds[name].source == null ) 
                return;

            sounds[name].source.stop(0);
        },
        setSoundVolume: function( name, value ) 
        {
            if( sounds[name] == undefined || sounds[name] == null )
                return;

            sounds[name].volume.gain.value = value;
        },
        setMasterVolume: function( value )  
        {
            nodes.gain.gain.value = value;
        }
    };

    AudioManager.init();
    
    return AudioManager;
}


function psAudioAlt()
{
    var audioParent 	= document.getElementById('GameSounds');
    var sounds 			= {};
    var soundGroups		= {};
    var masterVolume 	= 1;
    
    var AlternateAudioManager =
    {
        init: function ()
        {
        },
        loadSound: function( name, path, volume, callback, groupName )
        {
            var soundpathogg = "./assets/snd/ogg/" + path + ".ogg";
            var soundpathmp3 = "./assets/snd/mp3/" + path + ".mp3";

            console.log("Loading sound: - " + path);

            var elem = document.createElement('audio');
            var ogg  = document.createElement('source');
            var mp3  = document.createElement('source');

            ogg.setAttribute('type', 'audio/ogg');
            mp3.setAttribute('type', 'audio/mp3');

            ogg.src = soundpathogg;
            mp3.src = soundpathmp3;

            elem.appendChild(ogg);
            elem.appendChild(mp3);
            audioParent.appendChild(elem);

            elem.load();

            sounds[name] =
            {
                name: 	name,
                elem: 	elem,
                volume: volume,
                group: 	groupName
            };

            if( groupName != undefined )
            {
                if( soundGroups[groupName] == undefined )
                    soundGroups[groupName] = [];
                    
                soundGroups[groupName].push( sounds[name] );
            }
            callback();
        },
        playSound: function( name, loop, callback )
        {
            sounds[name].elem.loop = loop || false;

            if( sounds[name].group != undefined && soundGroups[sounds[name].group] != undefined )
            {
                for (var i = 0; i < soundGroups[sounds[name].group].length; i++)
                    audioManager.stopSound(soundGroups[sounds[name].group][i].name);
            }
            sounds[name].elem.onended = callback;
            sounds[name].elem.play();
        },
        stopSound: function (name)
        {
            sounds[name].elem.pause();
        },
        setSoundVolume: function (name, value)
        {
            sounds[name].volume = value;
        },
        setMasterVolume: function (value)
        {
            masterVolume = value;
        },
        setSoundSpeed: function (name, value)
        {            
        }
    };

    AlternateAudioManager.init();
    
    return AlternateAudioManager;
}
