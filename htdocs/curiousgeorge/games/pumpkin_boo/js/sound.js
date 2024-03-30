var sndurl = 'snd/pumpkinboo'; //sound filename (w/o ext.)
var snd_multisound;
var sounds = [];
var sndplaying = false; //bool set to true when sound playing, false when sound finished

//for hosting on PBS servers: checking domain and adjusting filepaths accordingly
var fpath = ""; //empty by default, just to load things from same folder
/*
if( (document.domain).search("ernie") !== -1) fpath = "http://ernie-tc.pbskids.org/curiousgeorge/games/pumpkin_boo/"
if( (document.domain).search("soup") !== -1) fpath = "http://soup-tc.pbskids.org/curiousgeorge/games/pumpkin_boo/"

//iOS devices- keep fpath as empty
if ( navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ){
  //console.log('iOS device detected');
  fpath="";
}
*/

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

//prefer flash for IE sake...
soundManager.setup({
  waitForWindowLoad: true,
  preferFlash: true,
  useHTML5Audio: true,
  //html5PollingInterval: 10,
  useHighPerformance: true,
  flashPollingInterval:10,
  flashLoadTimeout: 0,
  flashVersion: 9,
  url: 'js/soundmanager2/swf/',
  debugMode: false,
  ignoreMobileRestrictions: true,

  onready: function() {
    //console.log('SM2 ready!');
    //console.log("SM2 ready!");

    sndurl = fpath + sndurl;

    var ext = "";
    //preferring mp3 First
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
    //console.log('FINAL SNDURL IS:\n' + sndurl);

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
        } else{
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

    makeSound('empty', 0.522, 0.708);
    makeSound('pumpkingeorge', 0.992653,  5.379098);
    makeSound('clickstart',  3.580098,  5.379098);
    makeSound('pickpatch', 5.981098,  8.454098);
    makeSound('patch0',  9.022098,  10.386098);
    makeSound('patch1',  10.892098, 12.065098);
    makeSound('patch2',  12.482098, 13.731098);
    makeSound('patch3',  14.305098, 15.708098);
    makeSound('patch4',  16.255098, 17.746098);
    makeSound('patch5',  18.299098, 19.855098);
    makeSound('patch6',  20.400098, 22.198098);
    makeSound('level_instruct',  22.908098, 30.524098);
    makeSound('bunnyhiding', 31.163098, 33.701098);
    makeSound('helpfind1', 34.309098, 36.668098);
    makeSound('helpfind2', 37.618098, 39.940098);
    makeSound('helpfind3', 40.917098, 43.076098);
    makeSound('helpfind4', 43.748098, 46.186098);
    makeSound('helpfind5', 47.115098, 49.599098);
    makeSound('helpfind6', 50.551098, 53.291098);
    makeSound('helpfind7', 54.092098, 56.554098);
    makeSound('watchout_surprises',  57.960098, 60.026098);
    makeSound('move_instruct', 60.642098, 66.584098);
    makeSound('found1',  67.259098, 68.777098);
    makeSound('found2',  69.384098, 71.449098);
    makeSound('found3',  71.950098, 74.097098);
    makeSound('found4',  74.608098, 76.801098);
    makeSound('found5',  77.406098, 79.727098);
    makeSound('found6',  80.390098, 82.673098);
    makeSound('found7',  83.490098, 85.875098);
    makeSound('keeplooking', 86.426098, 87.594098);
    makeSound('moretofind',  88.179098, 90.346098);
    makeSound('onemoretogo', 90.977098, 93.170098);
    makeSound('greatfound',  93.775098, 96.070098);
    makeSound('hoorayallpumpkins', 96.736098, 99.758098);
    makeSound('foundallgreatjob',  100.497098,  102.677098);
    makeSound('nowfindfestival1',  103.400098,  105.803098);
    makeSound('nowfindfestival2',  106.442098,  108.667098);
    makeSound('foundbunnynowcatch',  109.414098,  111.881098);
    makeSound('caughtbunny0',  112.572098,  113.700098);
    makeSound('caughtbunny1',  114.406098,  115.559098);
    makeSound('caughtbunny2',  116.136098,  117.169098);
    makeSound('caughtbunny3',  117.738098,  118.828098);
    makeSound('caughtbunny4',  119.468098,  120.870098);
    makeSound('caughtbunny5',  121.535098,  122.919098);
    makeSound('caughtbunny6',  123.543098,  125.264098);
    makeSound('lookout', 125.935098,  126.675098);
    makeSound('watchout',  127.224098,  128.014098);
    makeSound('greatjob',  128.675098,  129.701098);
    makeSound('welldone',  130.207098,  131.418098);
    makeSound('nicework',  131.949098,  133.161098);
    makeSound('keepplaying', 133.865098,  134.853098);
    makeSound('playagain', 135.536098,  136.428098);
    makeSound('thanksforhelping',  137.150098,  140.691302);
    makeSound('scared1', 141.225098,  142.479098);
    makeSound('allie_boo', 142.727, 143.748934);
    makeSound('cat_boo', 144.033, 145.507846);
    makeSound('yeeha', 146.090399,  147.623399);
    makeSound('whee',  148.169399,  149.109399);
    makeSound('whoohehe',  149.620399,  150.827399);
    makeSound('ahaaha',  151.315399,  153.315399);
    makeSound('ding',  153.819399,  154.980399);
    makeSound('move_left', 155.853302,  156.431351);
    makeSound('move_right',  157.072302,  157.685816);
    makeSound('move_up', 158.174302,  158.727408);
    makeSound('move_down', 159.167302,  159.759048);
    makeSound('bump',  160.468302,  161.044424);
    makeSound('boosong', 161.699211,  186.289143);


    //console.log('time to begin loading sounds...')
    //console.log('dType:' + dType);

  if(dType=='iOS' || dType=='android'){
      //for iOS and Android to work:
      //console.log("iOS PLAY PAUSE!");
      soundManager.play('multisound');
      soundManager.pause('multisound');
    }
}


function makeSound(tag, begin, end){
    sounds[tag] = new Array(begin, end);
}

//has optional callback
function playSound(tag, callback){
    //console.log('playSound: ' + tag);
    snd_multisound.stop()

    snd_multisound.play({
        from: (sounds[tag][0] * 1000),
        to: (sounds[tag][1] * 1000),
        onplay: function(){
          //console.log("playing sound: " + tag)
          sndplaying=true;
        },
        onstop: function(){
          //console.log("stopping sound: " + tag)
          sndplaying=false;
          if(callback){
            //console.log("callback!");
            callback();
          }
        }
    });
}

function stopSound(){
  snd_multisound.stop();
}

function playGeorge(s){
	//if(!s) return;
	if(s==-1) playSound('scared2');
  if(s ==0) playSound('scared1');

	if(s==1) playSound('yeeha');
	if(s==2) playSound('whee');
	if(s==3) playSound('whoohehe');
  if(s==4) playSound('ahaaha');
}

function playTheme(){
  //playSound('theme');
}

function playMYH_payoff(s){
  var payoff;
  if(s==1) payoff = 'greatjob';
  if(s==2) payoff = 'welldone';
  if(s==3) payoff = 'nicework';
  //if(s==4) payoff = 'keepplaying';

  playSound(payoff, playGeorge_payoff);
}
function playGeorge_payoff(){
  var payoff;
  var s = randomInt(1,2);

  if(s==1) s = 'whoohehe';
  if(s==2) s = 'ahaaha';

  playSound(s);
}