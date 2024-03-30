var sndurl = 'snd/build_a_bot'; //sound filename (w/o ext.)
var snd_multisound;
var sounds = [];
var sndplaying = false; //bool set to true when sound playing, false when sound finished
var currentTag; //stores name of currently plaing tag (in sounds[].  if a newer/different sound begins playing, will prevent prev. callbacks from executing)

//for hosting on PBS servers: checking domain and adjusting filepaths accordingly
var fpath = ""; //empty by default, just to load things from same folder


/*
//SOUND SETUP:
*/
soundManager.audioFormats = {
  'mp3': {
    'type': ['audio/mpeg; codecs="mp3"', 'audio/mpeg', 'audio/mp3', 'audio/MPA', 'audio/mpa-robust'],
    'required': false
  },

  'mp4': {
    'related': ['aac','m4a'], // additional formats under the MP4 container
    'type': ['audio/mp4; codecs="mp4a.40.2"', 'audio/aac', 'audio/x-m4a', 'audio/MP4A-LATM', 'audio/mpeg4-generic'],
    'required': false
  },

  'ogg': {
    'type': ['audio/ogg; codecs=vorbis'],
    'required': false
  },

  'wav': {
    'type': ['audio/wav; codecs="1"', 'audio/wav', 'audio/wave', 'audio/x-wav'],
    'required': false
  }
};

soundManager.setup({
  waitForWindowLoad: true,
  preferFlash: true,
  useHTML5Audio: true,
  html5PollingInterval: 10,
  useHighPerformance: true,
  flashPollingInterval:10,
  flashLoadTimeout: 0,
  flashVersion: 8,
  url: 'js/soundmanager2/swf/',
  debugMode: false,
  ignoreMobileRestrictions: true,
  
  onready: function() {
    //console.log("SM2 ready!");

    sndurl = fpath + sndurl;

    var ext = "";
    //preferring mp3
    if (soundManager.canPlayURL( sndurl + '.mp3' )) {
        //console.log( "MP3 works.");
        ext = ".mp3";
    }
    //else ogg
    else if (soundManager.canPlayURL(sndurl + '.ogg' )) {
        //console.log('ogg works... use it!');
        ext = ".ogg";
    }

    else{
        //console.log('cannot detect any soundtype to play....will try mp3');
        ext = ".mp3";
    }

    sndurl+=ext;
    console.log('FINAL SNDURL IS:\n' + sndurl);

    //first, begin sound loading:
    createSM();
  },
  ontimeout: function() {
    //console.log('SM2 init failed!');

  },
  defaultOptions: {
    // set global default volume for all sound objects
    //volume: 33
    autoLoad: false,
    autoPlay: false,
    multiShot: false,        // let sounds "restart" or "chorus" when played multiple times..
    stream: false,

  }

});


function createSM(){
    //console.log("createSM ready to load: " + sndurl);

    snd_multisound = soundManager.createSound({
     id: 'multisound', // required
     url: sndurl,

    onbufferchange: function() {
        //console.log('sound buffer state changed: ' + (this.isBuffering ? 'true' : 'false'));
        if (this.isBuffering) {
            //console.log("SM2 sound loading begins...");
            //console.log('total bytes: ' + snd_multisound.bytesTotal);
        } else {
            //console.log("SM2 sound loading DONE!");
        }
    },
    onload: function() {
        //console.log('sound ' + this.id + ' has fully loaded');
        //**SOUND LOAD DONE, BEGIN IMG ASSET LOADING
        //when sound loading is done... call preloadIMG()
        preloadIMG();
    },
    whileloading: function() {
          //console.log(this.sID + ' loaded ' + this.bytesLoaded + ' of ' + this.bytesTotal + '(' + parseInt((this.bytesLoaded/this.bytesTotal)*100, 10) + '%)');
          //fill from 0 to max of 50% of loaderbar_fill's width (pl_width)
          loaderbar_fill.graphics.beginFill(pl_outer).drawRoundRect(pl_x,pl_y, ( parseInt( (this.bytesLoaded/this.bytesTotal) * pl_width/2) ), pl_height, pl_radius);
    }

    });


  //console.log('createSM bottom');
  //if(dType!='iOS' && dType!='android'){ soundManager.load('multisound'); }
  if(dType=='iOS'){
    soundManager.load('multisound');
  }
  else if(dType=='android'){
    //soundManager.load('multisound');
  }
  else soundManager.load('multisound');

}


function createSounds(){
    //console.log("createSounds!!");

    makeSound('empty', 0.5, 0.6);

    makeSound('title_push_start',  1.139, 7.001);
    makeSound('title', 1.139, 2.196);
    makeSound('george_hi', 2.635, 4.377);
    makeSound('push_start',  5.107998,  7.210998);
    makeSound('intro', 7.731998,  12.452998);
    makeSound('click_part',  12.751998, 14.615998);
    makeSound('part_on_robot', 14.964998, 17.999998);
    makeSound('click_on_george', 18.540998, 21.079998);
    makeSound('first_help_george', 21.745998, 24.827937);
    makeSound('next_help_george',  25.541998, 29.019138);
    makeSound('help_george_make',  26.724998, 29.007528);
    makeSound('now_help_george', 29.988998, 33.262585);
    makeSound('help_george_build', 30.903998, 33.25678);
    makeSound('that_robot_can',  34.420998, 35.869025);
    makeSound('and0',  36.831998, 37.604717);
    makeSound('and1',  38.472998, 39.235918);
    makeSound('or',  40.206998, 40.77424);
    makeSound('finally_help_george', 41.505998, 44.913197);
    makeSound('catch_a_ball_sfx',  45.809998, 47.182948);
    makeSound('brush_teeth_sfx', 47.852998, 49.609433);
    makeSound('stick_to_metal_sfx',  50.794998, 52.438141);
    makeSound('pound_a_nail',  52.674998, 53.864998);
    makeSound('play_music_sfx',  54.453998, 57.0);
    makeSound('help_you_see_in_the_dark',  57.652998, 59.219998);
    makeSound('stay_dry_sfx',  59.785998, 65.789615);
    makeSound('light_up_the_room', 66.528998, 67.956998);
    makeSound('propellor_sfx', 68.534998, 70.870977);
    makeSound('jet_sfx', 71.827,  75.403);
    makeSound('see_far_away',  77.644998, 79.311998);
    makeSound('make_things_look_bigger', 79.831998, 81.537998);
    makeSound('fly_a_kite',  82.022998, 83.172998);
    makeSound('walk_on_snow',  83.842998, 85.370998);
    makeSound('skateboard',  85.982998, 87.172998);
    makeSound('rollerskate', 87.866998, 89.175998);
    makeSound('slide_down_snow', 89.821998, 91.785998);
    makeSound('walk_sfx',  92.281998, 93.556712);
    makeSound('take_parts_off',  93.985998, 97.100998);
    makeSound('good_job',  97.689998, 98.959998);
    makeSound('great_building',  99.603998, 100.892998);
    makeSound('well_done', 101.516998,  102.845998);
    makeSound('nice_work', 103.365998,  104.774998);
    makeSound('now_build_your_own',  105.398998,  107.977998);
    makeSound('what_do_you_want',  108.636998,  110.897998);
    makeSound('pick_parts',  111.463998,  115.410998);
    makeSound('click_green_arrows',  116.173998,  119.645998);
    makeSound('click_camera',  120.501998,  123.259998);
    makeSound('to_change', 124.138998,  126.915998);
    makeSound('to_start_over', 127.783998,  130.481998);
    makeSound('correct1',  131.905, 133.022687);
    makeSound('correct2',  133.553, 134.870333);
    makeSound('correct3',  135.365, 136.538104);
    makeSound('correct4',  137.245, 140.421);
    makeSound('correct5',  141.181, 142.146333);
    makeSound('george_laugh',  142.783, 144.483271);
    makeSound('correct6',  142.783, 144.483271);
    makeSound('wrong1',  145.129, 145.611083);
    makeSound('wrong2',  146.278, 146.800667);
    makeSound('wrong3',  147.253, 148.393333);
    makeSound('wrong4',  149.099, 150.86);
    makeSound('camera',  151.212, 152.167);
    makeSound('catch_a_ball',  152.619, 153.652);
    makeSound('brush_teeth', 154.593, 155.469);
    makeSound('stick_to_metal',  156.056, 157.251);
    makeSound('play_music',  157.739, 158.627);
    makeSound('stay_dry',  158.993, 159.986);
    makeSound('fly', 160.374, 161.222);
    makeSound('walk',  161.448, 162.254);
    makeSound('leverpull', 162.482000, 163.048000);
    makeSound('pound_a_nail_sfx', 163.347, 167.335);

    //console.log('time to begin loading sounds...')
    //console.log('dType:' + dType);

    //** iOS does its load at different point
  if(dType=='android'){
      //for iOS and Android to work:
      //console.log("Android PLAY PAUSE!");
      soundManager.play('multisound');
      soundManager.pause('multisound');
    }
}


function makeSound(tag, begin, end){
    sounds[tag] = new Array(begin, end);
}

//has optional callback, with optional args
function playSound(tag, callback, args){
    //console.log('playSound: ' + tag);

    //setting sound to play's tag to currentTag, so if another sound is called to play, prev. sound's callback won't execute.
    currentTag = tag;

    snd_multisound.stop();

    var ms=300;

    setTimeout(function() {
      snd_multisound.play({

        from: (sounds[tag][0] * 1000),
        to: (sounds[tag][1] * 1000),
        onplay: function(){
          //console.log("playing sound: " + tag)
          sndplaying=true;
        },
        onstop: function(){
          //console.log("stopping sound: " + tag)
          if(callback && currentTag==tag){
            //console.log("SOUND CALLBACK!");
            callback(args);
          }

          sndplaying=false;
        }
    });
//

    }, ms);


}

function stopSound(){
  snd_multisound.stop();
  //soundManager.stopAll();
  sndplaying=false;
}