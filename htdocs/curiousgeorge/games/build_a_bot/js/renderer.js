//Build-A-Bot! HTML 5 Game (CreateJS [easelJS, tweenJS, preloadJS] + SoundManager2)
//FINAL, with post-launch fixes, 2/21/2014
//by Bharat Battu, WGBH Educational Foundation
//***********************

var isTouch;
//using Preloader- image[] holds unique/single instances of each bitmap image as Image objects
//preloaded ONCE as Image() into image[id] (id is the filename (minus file ext))
    //for level-defining tilesheets ONLY:  numbered array indices (per level) are set to equal the single instance of each image[id] Image().
    //so each level uses the same Image, which is loaded just once.
var image = [];
var spritesheet = [];

//preloader vars
var pl_outer = "#00546e";
var pl_inner = "#3698c5";
var pl_bg = "#d3f28f";
var pl_width = 400;
var pl_height = 60;
var pl_radius = 150;
var pl_x = html5game.width/2 - pl_width/2;
var pl_y = 382;

//shape used as mask of everything on stage (to allow rounded corners with blueborder on html page)
var gamemask = new createjs.Shape();
gamemask.graphics.beginFill("white").drawRect(8,8, html5game.width-15, html5game.height-15);

//fadeBox : only needs to be created once to do fade ins and outs, but then alpha and child layering changed as needed
var fadeBox = new createjs.Shape();
fadeBox.graphics.beginFill("black").drawRect(0,0, html5game.width, html5game.height);
fadeBox.cache(0,0, html5game.width, html5game.height);
fadeBox.mask = gamemask;


var to; //var to hold timeout timers (can be cleared via clearTimeout(to);)
var sndto; //var to hold SOUND related timeout timers;

//canWidthMax and canHeightMax determine max html5game.dimensions. any levels larger in either dimension have panning enabled in that dimension
var canWidthMax = 900;
var canHeightMax = 506;

//var that equals which draggable object has been clicked (mouse down and up), and is then moved on any mouse movement via stagemousemove event
// set and reset to -1 when there is no sticky
var sticky = -1;
var stickyPrev = -2;
var dragHighlight;


var bodytarget; // the intended target of drag actions (var set during level creation, used by drop/drag release event functions)

var bodyparts = [];
var bgloopers = []; //used to store any bg elements created and tweened in the win animations. kill_level can stop tweens for elements in here, destroy contents
var staticbg=null; //var used by some animations, set to null by default so kill_level only removes if it exists

var head,leftarm,rightarm,legs;

var level = 0; //num storing the level/round number. set at level start

var george_clickable = true;
var choiceIdx = 0;
var _isWin = false; //determines whether level ends or returns to part dragging on anim. complete (for setTimeout in all anim functions)
var _sandbox = false;
var _sandboxInProgress = false;
var sandbox_order = [3,0,1,2];
var sandIdx;
var sandboxCount = 0;

//array elements:
//0:  (actual level #). # appended to createparts_
//1: bodypart type appended to connectparts_, (allows reuse of part(s) being dragged code)
//2: bodypart name appended to anim_ (allows reusable animation code)
//3: bg color for left half
//4: instruction sound to play

var levels;
var set1 = [
    [1,'rightarm','trumpet', "#d3f587", "play_music"],
    [2,'legs','walk', "#d3f587", "walk"],
    [8,'head','umbrella', "#d3f587", "stay_dry"],
    [0,'arms','twoarm', "#e0f6ff"],
];
var set2 = [
    [6,'leftarm','hammer', "#d3f587", "pound_a_nail"],
    [5,'legs','jet', "#d3f587", "fly"],
    [13,'head','kite', "#d3f587", "fly_a_kite"],
    [15,'arms','twoarm', "#e0f6ff"],
];
var set3=[
    [3,'leftarm','baseball', "#d3f587", "catch_a_ball"],
    [12,'legs','skateboard', "#d3f587", "skateboard"],
    [16,'head','propellor', "#d3f587", "fly"],
    [9,'arms','twoarm', "#e0f6ff"],
];
var set4=[
    [7,'leftarm','magnet', "#d3f587", "stick_to_metal"],
    [11,'legs','ski', "#d3f587", "slide_down_snow"],
    [14,'head','lamp', "#d3f587", "light_up_the_room"],
    [17,'arms','twoarm', "#e0f6ff"],
];


//padding for robot body's hit region
var hitbox_padX = 70;
var hitbox_padY = 70;


var shoulder_leftX = 235;
var shoulder_leftY = 195;
var shoulder_rightX = 322;
var shoulder_rightY = 195;

//second createjs stage to render ANY contents and dupicate as bitmaps for highlighting (maybe printing)
dh_canvas = document.getElementById('dhCanvas');
dhStage = new createjs.Stage("dhCanvas");
dhStage.update();

debugtext = new createjs.Text("debugtext", "16px Arial", "black");

//*************************



//INIT: loads automatically on desktop, on tap on mobile.
function doTheLoad(){
    //**console.log("doTheLoad");

    //creating easeljs Stage
	stage = new createjs.Stage("html5game");

    //enable MouseOver for onscreen controls and pointer changes
    stage.enableMouseOver(20);

    //allow active mouse dragging when mouse is moved outside of canvas
    stage.mouseMoveOutside = true;

    //enable touch interactions if supported on the current device:
    //params: single touch only (true), allow scroll/zoom gestures (true)

    isTouch = createjs.Touch.isSupported();
    //**console.log("touch supported? : " + isTouch);

    createjs.Touch.enable(stage, true, false);

    //ticker
    createjs.Ticker.setFPS(60);
    //new easeljs 0.7 ticker:
    createjs.Ticker.addEventListener("tick", main_ticker);

    canvasblueborder = new createjs.Bitmap('img/site/blueborder.png');

    document.getElementById('blueborder').style.display = 'none';

    //preloader anim and bar:
    spritesheet['preloader_george'] = new createjs.SpriteSheet({
        "frames" : {width : 159, height : 198},
        "animations": {
            "loop": {"frames": [0,1,2,3,4,5], "speed": 0.3, "next": true},
        },
        "images": ['img/site/preloader_george.png']
    });
    loaderbar_george = new createjs.Sprite(spritesheet['preloader_george']);
    loaderbar_george.x = html5game.width/2 - 159/2;
    loaderbar_george.y = pl_y - 220;
    loaderbar_george.gotoAndPlay('loop');

    preloader_bg = new createjs.Shape();
    preloader_bg.graphics.beginFill(pl_bg).drawRect(0,0, html5game.width, html5game.height);
    preloader_bg.mask = gamemask;

    loaderbar_stroke = new createjs.Shape();
    loaderbar_stroke.graphics.setStrokeStyle(6,"round").beginStroke(pl_outer);
    loaderbar_stroke.graphics.beginFill(null).drawRoundRect(pl_x,pl_y,pl_width,pl_height, pl_radius);
    loaderbar_bg = new createjs. Shape();
    loaderbar_bg.graphics.beginFill(pl_inner).drawRoundRect(pl_x,pl_y,pl_width,pl_height, pl_radius);
    loaderbar_fill = new createjs.Shape();
    loaderbar_fill.graphics.beginFill(pl_outer).drawRoundRect(pl_x,pl_y,0,pl_height, pl_radius);
    loaderbar_fill.mask = loaderbar_bg;
    //*** fill up loaderbar_fill as loading happens...

    stage.addChild(preloader_bg);
    stage.addChild(loaderbar_bg);
    stage.addChild(loaderbar_fill);
    stage.addChild(loaderbar_stroke);
    stage.addChild(loaderbar_george);
    stage.addChild(canvasblueborder);

    createSounds();

    //** iOS needs to play and pause sound at this point.
    if(dType=='iOS'){
        //**console.log("iOS PLAY PAUSE!");
      soundManager.play('multisound');
      soundManager.pause('multisound');
    }

};

function preloadIMG(){
    //**console.log("preloadIMG... creating then loading the QUEUE");

    //preloading queue:
    queue = new createjs.LoadQueue(false);


    queue.addEventListener("progress", handleProgress);
    queue.addEventListener("complete", handleComplete);
    queue.addEventListener("fileload", handleFileLoad);

    //***IMAGES (to be Bitmaps and Bitmap animations) used in game- will have unique IDs defined
    //add needed images to queue

    //splash & start button:
    queue.loadFile({src:'img/site/splash.jpg', id:'splash'});
    queue.loadFile({src:'img/site/play_btn.png', id:'play_btn'});

    //assets
    queue.loadFile({src:'img/george_bg.jpg', id:'george_bg'});
    queue.loadFile({src:'img/george_lever.png', id:'george_lever'});
    queue.loadFile({src:'img/arrow_sprite.png', id:'arrow_sprite'});

    queue.loadFile({src:'img/saveimg_bg.png', id:'saveimg_bg'});
    queue.loadFile({src:'img/btn_camera.png', id:'btn_camera'});
    //bg:
    queue.loadFile({src:'img/bodyparts/sky.jpg', id:'sky'});
    queue.loadFile({src:'img/bodyparts/cloud1.png', id:'cloud1'});
    queue.loadFile({src:'img/bodyparts/cloud2.png', id:'cloud2'});
    queue.loadFile({src:'img/bodyparts/cloud3.png', id:'cloud3'});
    queue.loadFile({src:'img/bodyparts/cloud4.png', id:'cloud4'});
    queue.loadFile({src:'img/bodyparts/musicnotes.png', id:'musicnotes'});
    queue.loadFile({src:'img/bodyparts/metalscraps.png', id:'metalscraps'});
    queue.loadFile({src:'img/bodyparts/bg_normal.jpg', id:'bg_normal'});
    queue.loadFile({src:'img/bodyparts/bg_snow.jpg', id:'bg_snow'});
    queue.loadFile({src:'img/bodyparts/bg_ski.jpg', id:'bg_ski'});
    queue.loadFile({src:'img/bodyparts/rain.png', id:'rain'});

    //NEW BODY ASSETS:
    queue.loadFile({src:'img/bodyparts/hip.png', id:'hip'});
    queue.loadFile({src:'img/bodyparts/leg_walk.png', id:'leg_walk'});
    queue.loadFile({src:'img/bodyparts/leg_rollerskate.png', id:'leg_rollerskate'});
    queue.loadFile({src:'img/bodyparts/leg_snowshoe.png', id:'leg_snowshoe'});
    queue.loadFile({src:'img/bodyparts/leg_ski.png', id:'leg_ski'});
    queue.loadFile({src:'img/bodyparts/leg_jet.png', id:'leg_jet'});
    queue.loadFile({src:'img/bodyparts/leg_skateboard.png', id:'leg_skateboard'});

    queue.loadFile({src:'img/bodyparts/head_1.png', id:'head_1'});
    queue.loadFile({src:'img/bodyparts/head_lamp.png', id:'head_lamp'});
    queue.loadFile({src:'img/bodyparts/head_propellor.png', id:'head_propellor'});
    queue.loadFile({src:'img/bodyparts/head_kite_arm.png', id:'head_kite_arm'});
    queue.loadFile({src:'img/bodyparts/head_telescope.png', id:'head_telescope'});
    queue.loadFile({src:'img/bodyparts/head_top2.png', id:'head_top2'});
    queue.loadFile({src:'img/bodyparts/head_top1.png', id:'head_top1'});
    queue.loadFile({src:'img/bodyparts/head_kite.png', id:'head_kite'});
    queue.loadFile({src:'img/bodyparts/head_umbrella.png', id:'head_umbrella'});

    queue.loadFile({src:'img/bodyparts/divider.png', id:'divider'});
    queue.loadFile({src:'img/bodyparts/lever_handle.png', id:'lever_handle'});
    queue.loadFile({src:'img/bodyparts/lever_base.png', id:'lever_base'});
    queue.loadFile({src:'img/bodyparts/torso.png', id:'torso'});

    queue.loadFile({src:'img/bodyparts/arm_bicep.png', id:'arm_bicep'});
    queue.loadFile({src:'img/bodyparts/arm_forearm.png', id:'arm_forearm'});
    queue.loadFile({src:'img/bodyparts/arm_shoulder.png', id:'arm_shoulder'});
    queue.loadFile({src:'img/bodyparts/leg_calf.png', id:'leg_calf'});

    queue.loadFile({src:'img/bodyparts/hand_generic.png', id:'hand_generic'});
    queue.loadFile({src:'img/bodyparts/hand_magnet.png', id:'hand_magnet'});
    queue.loadFile({src:'img/bodyparts/hand_trumpet.png', id:'hand_trumpet'});
    queue.loadFile({src:'img/bodyparts/hand_hammer.png', id:'hand_hammer'});
    queue.loadFile({src:'img/bodyparts/hand_toothbrush.png', id:'hand_toothbrush'});
    queue.loadFile({src:'img/bodyparts/hand_flashlight.png', id:'hand_flashlight'});
    queue.loadFile({src:'img/bodyparts/hand_baseball.png', id:'hand_baseball'});
    queue.loadFile({src:'img/bodyparts/baseball.png', id:'baseball'});

    queue.loadFile({src:'img/bodyparts/extra_claw.png', id:'extra_claw'});
    queue.loadFile({src:'img/bodyparts/extra_nail.png', id:'extra_nail'});
    queue.loadFile({src:'img/bodyparts/extra_plate_ant.png', id:'extra_plate_ant'});
    queue.loadFile({src:'img/bodyparts/head_magglass.png', id:'head_magglass'});
    //


    //**console.log('queue is made, time to load!');
    queue.load();
}


function handleProgress(event) {
     //**console.log("loading: " + event.loaded + "/" + event.total);
     loaderbar_fill.graphics.beginFill(pl_outer).drawRoundRect(pl_x,pl_y, (pl_width/2 + parseInt((event.loaded / event.total)* pl_width/2) ), pl_height, pl_radius);
}

function handleFileLoad(event) {

    //the image (tag element) itself
    image[event.item.id]  = event.result;

    //.id is a string property containing the loaded's image's dot notation name within images[]
    image[event.item.id].id = event.item.id;
}


function handleComplete(event) {
    //**console.log('all img preload DONE');

    //removing/destroying preloader objects
    stage.removeChild(preloader_bg);
    stage.removeChild(loaderbar_bg);
    stage.removeChild(loaderbar_fill);
    stage.removeChild(loaderbar_stroke);
    stage.removeChild(loaderbar_george);
    loaderbar_george.stop();
    preloader_bg = null;
    loaderbar_george = null;
    loaderbar_bg = null;
    loaderbar_stroke = null;
    loaderbar_fill = null;

    create_spritesheets();
}

function create_spritesheets(){
//easelJS 0.7 replaces "frequency" with "speed" for anim playback speed

spritesheet['george_lever'] = new createjs.SpriteSheet({
    "frames": [
        [696, 0, 100, 218, 0, -132, 0],
        [706, 218, 232, 218, 0, 0, 0],
        [464, 0, 232, 218, 0, 0, 0],
        [796, 0, 232, 218, 0, 0, 0],
        [1726, 0, 232, 218, 0, 0, 0],
        [0, 218, 232, 218, 0, 0, 0],
        [474, 218, 232, 218, 0, 0, 0],
        [1028, 0, 232, 218, 0, 0, 0],
        [1260, 0, 232, 218, 0, 0, 0],
        [1492, 0, 234, 218, 0, 0, 0],
        [938, 218, 234, 218, 0, 0, 0],
        [232, 218, 242, 218, 0, 0, 0],
        [241, 436, 254, 215, 0, 0, -3],
        [981, 436, 254, 208, 0, 0, -10],
        [233, 651, 246, 193, 0, 0, -24],
        [0, 651, 233, 194, 0, 0, -23],
        [1473, 436, 231, 196, 0, 0, -21],
        [479, 651, 234, 192, 0, 0, -25],
        [1704, 436, 241, 194, 0, 0, -23],
        [1235, 436, 238, 207, 0, 0, -10],
        [738, 436, 243, 209, 0, 0, -9],
        [495, 436, 243, 209, 0, 0, -9],
        [0, 436, 241, 215, 0, 0, -3],
        [1411, 218, 239, 216, 0, 0, -2],
        [1172, 218, 239, 216, 0, 0, -2],
        [1650, 218, 239, 216, 0, 0, -2],
        [232, 0, 232, 218, 0, 0, 0],
        [0, 0, 232, 218, 0, 0, 0]
    ],
    "animations": {
        "happy": {"frames": [26]},
        "idle": {"frames": [0]},
        "sad": {"frames": [27]},
        "lever_out": {"frames": [1, 2, 3, 4, 5, 6], "next":false, "speed":0.4},
        "lever_in": {"frames": [6,5,4,3,2,1], "next":'idle', "speed":0.4},
        "pull_lever": {"frames": [7, 7, 8, 8, 9, 10, 11, 12], "next":'turn_around', "speed":0.3},
        "turn_around": {"frames": [13, 13, 14, 15, 15, 16], "next":false, "speed":0.3},
        "turn_around_reverse_sad": {"frames": [17, 18, 18, 19, 19, 20, 21, 22, 23, 24, 25], "next":'sad', "speed":0.4},
        "turn_around_reverse_happy": {"frames": [16,15,14,13,12,11,10,9,8,7], "next":'happy', "speed":0.3}
    },
    "images": [image['george_lever']]
});

  spritesheet['arrow_sprite'] = new createjs.SpriteSheet({
    frames : {width : 86, height : 66},
        "animations": {},
        "images": [image['arrow_sprite']]
    });
    //

  //musicnotes: use frames 0,1,2
  spritesheet['musicnotes'] = new createjs.SpriteSheet({
    frames : {width : 24, height : 34},
        "animations": {},
        "images": [image['musicnotes']]
    });
    //

  //metalscraps: use frames 0,1,2
  spritesheet['metalscraps'] = new createjs.SpriteSheet({
    frames : {width : 45, height : 65},
        "animations": {},
        "images": [image['metalscraps']]
    });
    //

    //rain
  spritesheet['rain'] = new createjs.SpriteSheet({
        "frames": [[0, 0, 443, 253, 0, 443, 0], [443, 0, 443, 253, 0, 443, 0], [0, 253, 443, 253, 0, 443, 0], [443, 253, 443, 253, 0, 443, 0]],
        "animations": {"loop": {"frames": [0, 1, 2, 3], "next": true, "speed": 0.25}
        },
        "images": [image['rain']]
    });

    //leg_jet:
    spritesheet['leg_jet'] = new createjs.SpriteSheet({
        frames: [[0, 0, 90, 141, 0, 0, 0], [90, 0, 90, 139, 0, 0, 0], [270, 0, 90, 137, 0, 0, 0], [180, 0, 90, 137, 0, 0, 0], [0, 141, 90, 131, 0, 0, 0], [90, 141, 90, 130, 0, 0, 0], [360, 0, 90, 132, 0, 0, 0]],
        "animations": {"fly": {"frames": [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6], "speed":0.4, "next":true}},
        "images": [image['leg_jet']]
    });

    //hand_flashlight
    spritesheet['hand_flashlight'] = new createjs.SpriteSheet({
        "frames": [[0, 0, 512, 128, 0, 512, 0], [0, 128, 512, 128, 0, 512, 0]],
        "animations": {"on": {"frames": [0,1], "speed":0.04, "next":true}},
        "images": [image['hand_flashlight']]
    });

    //head_propellor
    spritesheet['head_propellor'] = new createjs.SpriteSheet({
        "frames": [[0, 0, 256, 128, 0, 256, 0], [256, 0, 256, 128, 0, 256, 0], [0, 128, 256, 128, 0, 256, 0]],
        "animations": {
            "loop": {"frames": [0,1,2], "speed": 0.3, "next": true},
            },
        "images": [image['head_propellor']]
    });

    spritesheet['head_magglass'] = new createjs.SpriteSheet({
        "frames": [
            [1897, 0, 148, 61, 0, -96, 0],
            [242, 108, 189, 61, 0, -55, 0],
            [0, 108, 242, 61, 0, -3, 0],
            [431, 108, 242, 60, 0, -2, -8],
            [916, 108, 243, 58, 0, -1, -16],
            [1159, 108, 243, 57, 0, -1, -24],
            [1402, 108, 243, 54, 0, -1, -33],
            [673, 108, 243, 58, 0, -1, -36],
            [1654, 0, 243, 65, 0, -1, -36],
            [1413, 0, 241, 71, 0, -2, -36],
            [1173, 0, 240, 78, 0, -3, -36],
            [934, 0, 239, 84, 0, -4, -36],
            [697, 0, 237, 90, 0, -6, -36],
            [462, 0, 235, 96, 0, -8, -36],
            [230, 0, 232, 102, 0, -10, -36],
            [0, 0, 230, 108, 0, -12, -36]
        ],
        "animations": {
            "forward": {"frames": [0, 0, 1, 1, 2, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "speed":0.4, "next":false},
            "reverse": {"frames": [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 2, 2, 2, 2, 1, 1, 0, 0], "speed":0.7, "next":false},
        },
        "images": [image['head_magglass']]
    });

    //head_telescope
    spritesheet['head_telescope'] = new createjs.SpriteSheet({
        "frames": [[112, 109, 96, 41, 0, -50, -4], [0, 109, 112, 41, 0, -34, -4], [348, 109, 126, 41, 0, -20, -4], [208, 109, 140, 41, 0, -6, -4], [0, 150, 140, 40, 0, -6, -8], [140, 150, 141, 38, 0, -6, -13], [281, 150, 141, 38, 0, -6, -17], [0, 190, 140, 38, 0, -7, -20], [279, 61, 140, 41, 0, -7, -20], [140, 61, 139, 45, 0, -8, -20], [0, 61, 140, 48, 0, -8, -20], [281, 0, 139, 51, 0, -9, -20], [143, 0, 138, 55, 0, -10, -20], [0, 0, 143, 61, 0, -5, -20]],
        "animations": {
            "forward": {"frames": [0, 0, 1, 1, 2, 2, 3, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 12, 12, 12, 13], "next": false, "speed":0.3},
            "reverse": {"frames": [13, 12, 12, 12, 12, 12, 12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 3, 3, 2, 2, 1, 1, 0, 0], "next": false, "speed":0.6}
        },
        "images": [image['head_telescope']]
    });

    //head_lamp
    spritesheet['head_lamp'] = new createjs.SpriteSheet({
        "frames": [[386, 0, 96, 42, 0, -290, -3], [392, 227, 96, 42, 0, -290, -3], [140, 269, 96, 42, 0, -290, -3], [0, 269, 140, 42, 0, -246, -3], [236, 269, 140, 42, 0, -246, -3], [196, 227, 196, 42, 0, -190, -3], [0, 227, 196, 42, 0, -190, -3], [0, 0, 386, 227, 0, 0, -2]],
        "animations": {
            "forward": {"frames": [0, 1, 2, 3, 4, 5, 6, 7], "speed":0.3, "next":false},
            "reverse": {"frames": [7,6,5,4,3,2,1,0], "speed":0.3, "next":false}
        },
        "images": [image['head_lamp']]
    });


    //**console.log('spritesheets created!');
    preloadDone();
}

function preloadDone(){

    //**INITIAL SOUND PLAY-- 'gametitle' first
    //playSound('empty');
    playSound('title_push_start');

    play_btn = new createjs.Bitmap(image['play_btn']);
    play_btn.x = 572; play_btn.y = 364;

    play_btn.addEventListener("click", fadeOutSplash);
    play_btn.addEventListener("mouseover", cursorPointer);
    play_btn.addEventListener("rollover", cursorPointer);
    play_btn.addEventListener("mouseout", cursorDefault);
    play_btn.addEventListener("rollout", cursorDefault);

    splashscrn = new createjs.Bitmap(image['splash']);

    stage.addChild(splashscrn);
    stage.addChild(canvasblueborder);
    stage.addChild(play_btn);
}

function fadeOutSplash(e){
    clearTimeout(sndto);
    stopSound();

     // Remove all listeners
     play_btn.removeAllEventListeners();
     // OR  Remove all click listeners
     //play_btn.removeAllEventListeners("click");
    stage.removeChild(play_btn);
    cursorDefault();


    //fadebox alpha set to 0 and made topmost
    fadeBox.alpha = 0;
    stage.addChild(fadeBox);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:1}, 1000, createjs.Ease.none)
     .call(function(){
        document.getElementById('coverImg').style.display = 'none';
        beginGame();
     });
}


function beginGame(){
    //**console.log('begin game!')
    //setting up beginning of game, should be createlevelselect, but testing with level 1 for now...

    //picking a random level set (1-4)
    var r = randomInt(1,4);
    switch(r){
        case 1: levels = set1; break;
        case 2: levels = set2; break;
        case 3: levels = set3; break;
        case 4: levels = set4; break;
        default: levels = set1; break;
    }

    nlevel = 0;

    //direct to levels, followed by sandbox
    directToLevels();

    //OR direct to sandbox
    //directToSandbox();

}


//launches first level only... so include initial instructions
function directToLevels(e){

    level = levels[nlevel][0];
    function_connectparts = "connectparts_" + levels[nlevel][1];
    function_createparts = "createparts_" + levels[nlevel][0];
    function_anim = "anim_" + levels[nlevel][2];

    createlevel(levels[nlevel][3]);


    playSound('intro', instruct1);
}

function instruct1(){
    clearTimeout(sndto);
    sndto = setTimeout(function(){
            playSound('click_part', instruct2);
    }, 500);

}
function instruct2(){
    clearTimeout(sndto);
    sndto = setTimeout(function(){
            playSound('part_on_robot', instruct3);
    }, 500);

}
function instruct3(){
    clearTimeout(sndto);

    sndto = setTimeout(function(){
            playSound('first_help_george', play_lvl_sound);
    }, 500);

}

function play_lvl_sound(){

    clearTimeout(sndto);

    sndto = setTimeout(function(){
        if(levels[nlevel][1]!='arms') playSound(levels[nlevel][4]);
        else playSound(robot.sounds[0], play_lvl_sound1);
    }, 400);

}
function play_lvl_sound1(){
    playSound('and0', play_lvl_sound2);
}
function play_lvl_sound2(){
    playSound(robot.sounds[1]);
}

//plays sound based on passed string
function play_this_sound(snd){
    if(_sandbox){
        playSound(snd);
    }
    else{
        if(_isWin) playSound(snd, happyAnimate);
        else playSound(snd, sadAnimate);
    }
}


function directToSandbox(e){
    //temp-- direct to sandbox
    beginSandbox();
}
function beginSandbox(){
    //**console.log('beginSandbox!')

    sandboxCount = 0;
    sandIdx = 0;

    function_connectparts = "connectparts_sandbox";
    function_createparts = "createparts_sandbox";

    createlevel("#d3f587");

    playSound('now_build_your_own', sandbox_instruct1);
}

function sandbox_instruct1(){
    clearTimeout(sndto);
    sndto = setTimeout(function(){
            playSound('pick_parts', sandbox_instruct2);
    }, 500);

}
function sandbox_instruct2(){
    clearTimeout(sndto);
    sndto = setTimeout(function(){
            playSound('click_green_arrows');
    }, 500);

}


function flipswitch(e){
    //if anim is already playing, don't allow flip switch
    if(!george_clickable) return;

    cursorDefault();

    //new, call checkparts first, then play pull_lever_happy or pull_lever_sad depending on outcome
    checkparts();
}

function flipswitch_sandbox(e){
    //preventing flipswitch and run of animations if they are already in progress
    if(_sandboxInProgress) return;

    //check of all parts. if all empty, don't allow flipswitch:
    var partsfilled = false;

    for (var i=0;i<robot.userchoice.length;i++){
        if(robot.userchoice[i].length>0){
            partsfilled=true;
            break;
        }
    }
    if(!partsfilled){
        //**console.log("NO PARTS IN SANDBOX! ABORT");
        return;
    }

    //

    cursorDefault();

    //to iterate thru userchoice (sandbox_order[]) using sandIdx
    sandIdx = 0;

    /*pull_lever animation*/
    george_bottom.gotoAndPlay("pull_lever");

    //removed b/c iOS / Android
    //playSound('leverpull');
    //

    runrobot_sandbox();
}

function runrobot_sandbox(){
    //**console.log("run/test the sandbox robot!");
    //**console.log('userchoices: ' + robot.userchoice);
    //**console.log("sandIdx is: " + sandIdx)

    //iterating thru robot.userchoice
    for(var i=sandIdx;i<robot.userchoice.length;i++){
        var s = sandbox_order[i];
        //**console.log('checking userchoice index: ' + s)
        current_sandboxpart = s;
        if(robot.userchoice[s]!=""){
            //**console.log('doing sandbox anim: ' + s);
            break;
        }
        else{
            //**console.log('sandbox part ' + s + ' is empty');
            sandIdx++;
            continue;
        }
    }
    //**console.log('loop check done. sandIdx is ' + sandIdx)
    //change this conditional to 4 once heads are possible sandbox part.
    if(sandIdx==4){
        //**console.log('animated the last possible part (For now)');
        finish_runrobot_sandbox();
        return;
    }

    var str = robot.userchoice[s];
    ////**console.log('partname is: ' + str.substring(str.indexOf("_"))  )
    str = str.substring(str.indexOf("_")) ;

    //window['anim'+str]();
    _isWin = false;
    function_anim = 'anim'+str;
    //**console.log('sandbox anim to play: ' + function_anim);

    //showing arm shoulders, whether arm added by player or not.
    robot.shoulder_left.visible = true;
    robot.shoulder_right.visible = true;

    shiftForAnim();

}


function finish_runrobot_sandbox(){
    //**console.log("finish_runrobot_sandbox");

    //shoulder and topbone fixes between animaions
    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    if(leftarm.shoulder) leftarm.addChild(leftarm.shoulder);
    if(rightarm.shoulder) rightarm.addChild(rightarm.shoulder);
    if(legs.leftleg){
        legs.leftleg.addChild(legs.leftleg.topbone);
        legs.rightleg.addChild(legs.rightleg.topbone);
    }

    //restoring skateboard legs to orig calf positioning
    if(legs.partname=="leg_skateboard"){
        legs.leftleg.c1.x=legs.leftleg.c1.startX;
        legs.leftleg.c1.y=legs.leftleg.c1.startY;
        legs.rightleg.c1.x=legs.rightleg.c1.startX;
        legs.rightleg.c1.y=legs.rightleg.c1.startY;
    }

    //remove /untween bgloopers
    for(var i=0;i<bgloopers.length;i++){
        //createjs.Tween.removeTweens(bgloopers[i]);
        stage.removeChild(bgloopers[i]);
        bgloopers[i] = null;
    }

    if(staticbg){
        createjs.Tween.get(staticbg, {loop:false})
            .to({alpha:0}, 500, createjs.Ease.none)
            .call(function(){
                stage.removeChild(staticbg);
            });
    }

    if(bgA){
        createjs.Tween.get(bgA, {loop:false})
            .to({alpha:0}, 500, createjs.Ease.none)
            .call(function(){
                stage.removeChild(bgA);
            });
    }
    if(bgB){
        createjs.Tween.get(bgB, {loop:false})
            .to({alpha:0}, 500, createjs.Ease.none)
            .call(function(){
                stage.removeChild(bgB);
            });
    }

    createjs.Tween.get(robot, {loop:false})
     .to({x: robot.x-200}, 500, createjs.Ease.none);


    createjs.Tween.get(pal_right, {loop:false})
        .to({x: pal_right.x-360}, 750, createjs.Ease.none);
    createjs.Tween.get(pal_left, {loop:false})
        .to({x: pal_left.x-360}, 750, createjs.Ease.none);

    createjs.Tween.get(palette, {loop:false})
        .to({x: palette.x-360}, 750, createjs.Ease.none);
    createjs.Tween.get(palette_bg, {loop:false})
        .to({x: palette_bg.x-360}, 750, createjs.Ease.none);

    createjs.Tween.get(pal_mask, {loop:false})
        .to({x: pal_mask.x-360}, 750, createjs.Ease.none);

    createjs.Tween.get(palette_divider, {loop:false})
        .to({x: palette_divider.x-360}, 750, createjs.Ease.none)
        .call(resume_sandbox);

/*
    createjs.Tween.get(palette_bg, {loop:false})
        .to({alpha:1}, 750, createjs.Ease.none);
*/

}

function resume_sandbox(){
    _sandboxInProgress = false;
    sandboxCount = 0;
    sandIdx = 0;

    george_bottom.addEventListener("click", flipswitch_sandbox);
    george_bottom.gotoAndPlay('turn_around_reverse_happy');

    setTimeout(function(){
        var i = randomInt(1,5);
        i = i.toString();
        playSound('correct'+ i, resume_sandbox_instructions1);
    }, 200);

    //restoring bodyparts mouse listeners
    for(var i=0;i<bodyparts.length;i++){
        var bp = bodyparts[i];
            bp.hitbox.addEventListener("mousedown", draggerhitbox_mousedown);
            bp.hitbox.addEventListener("pressmove", draggerhitbox_pressmove);
            bp.hitbox.addEventListener("mouseover", cursorPointer);
            bp.hitbox.addEventListener("rollover", cursorPointer);
            bp.hitbox.addEventListener("mouseout", cursorDefault);
            bp.hitbox.addEventListener("rollout", cursorDefault);

            bp.hitbox.visible = true;
    }


    stage.addChild(bg_level_left, palette_bg);

    stage.addChild(pal_left,pal_right);
    stage.addChild(palette, palette_divider);
    stage.addChild(palette_blocker, btn_camera);
    stage.addChild(robot);
    stage.addChild(george_bottom, divider1);
    stage.addChild(canvasblueborder);

    btn_camera.visible = true;


}

//audio instructions: take parts off / camera pic
function resume_sandbox_instructions1(){

    playSound('click_camera', resume_sandbox_instructions2);
}
function resume_sandbox_instructions2(){
    clearTimeout(sndto);
    sndto = setTimeout(function(){
        playSound('or', resume_sandbox_instructions3);
    }, 400);

}
function resume_sandbox_instructions3(){
    clearTimeout(sndto);
    sndto = setTimeout(function(){
        playSound('take_parts_off');
    }, 300);

}
//checks if every slot in robot is filled, shows/hides switch as needed
function checkpartsfilled(){
    var allfilled = true;
    for (var i=0;i<robot.userchoice.length;i++){
        if(robot.userchoice[i]==""){
            //**console.log('more slots to fill. do not show theswitch');
            allfilled = false;
            break;
        }
    }

    if(allfilled){
        //play click on george audio: *only for first level
        //if(nlevel==0) playSound('click_on_george');
        if(nlevel==0) playSound('click_on_george', resume_sandbox_instructions2);

        george_bottom.gotoAndPlay('lever_out');
        george_bottom.addEventListener("click", flipswitch);
    }
    else if(george_bottom.currentFrame!=0){
        george_bottom.removeEventListener("click", flipswitch);
        george_bottom.gotoAndPlay('lever_in');
    }

}

//universal partcheck function, can be used across all levels.
//called when user taps on george.

//if idx passed in, make that the index of robot.userchoice to animate
function checkparts(idx){
    //**console.log('checkparts: ' + idx)

    //check if userchoices match .correct
    var go = 0;

    for (var i=0;i<robot.userchoice.length;i++){

        if(robot.userchoice[i]==""){
            //**console.log('choice ' + i + ': ' + robot.userchoice[i] + 'empty. more choice to make!');
            go = -1;
            break;
        }
        else if(robot.correct.indexOf(robot.userchoice[i])!= -1){
            //**console.log('choice ' + i + ': ' + robot.userchoice[i] + ' is correct!');
            //go = true;
            continue;
        }

        else{
            //**console.log('choice ' + i + ': ' + robot.userchoice[i] + ' is WRONG!');
            go = -2;
            continue;
        }
    }


    //**console.log('go check is: ' + go);
    if(go==-1){
        //**console.log('more choices to make!. abort. let more dragging occur');
        return;
    }
    else if(go==-2){
        //**console.log('wrong choice made. play it anyway, but do not end level.');

        /*pull_lever animation*/
        george_bottom.gotoAndPlay("pull_lever");
        if(!choiceIdx){
            //removed b/c iOS / Android
            //playSound('leverpull');
        }
        else playSound('and0');
        //

        //setTimeout(snapbackWrong, 1000);
        //**console.log('parts added were: ' + robot.userchoice)



        var str = robot.userchoice[0];
        if(idx) str = robot.userchoice[idx];

        ////**console.log('partname is: ' + str.substring(str.indexOf("_"))  )
        str = str.substring(str.indexOf("_")) ;

        //window['anim'+str]();
        _isWin = false;
        function_anim = 'anim'+str;
        //**console.log('WRONG anim to play: ' + function_anim);

        if(choiceIdx==0) shiftForAnim();
        else window[function_anim]();

        return;
    }
    else{
        //**console.log('alls good, show this levels win');

        /*pull_lever animation*/
        george_bottom.gotoAndPlay("pull_lever");

        if(!choiceIdx) randomGoodJob();
        else playSound('and0');
        //

        //

        var str = robot.userchoice[0];
        if(idx) str = robot.userchoice[idx];

        ////**console.log('partname is: ' + str.substring(str.indexOf("_"))  )
        str = str.substring(str.indexOf("_")) ;

        _isWin = true;
        //function_anim = "anim_" + levels[nlevel][2];
        function_anim = "anim" + str;

        if(choiceIdx==0) shiftForAnim();
        else window[function_anim]();
    }
}

function randomGoodJob(){
    //random good job sound
    var s = "";
    var r = randomInt(1,4);
    switch(r){
        case 1: s="good_job"; break;
        case 2: s="great_building"; break;
        case 3: s="nice_work"; break;
        case 4: s="well_done"; break;
    }
    playSound(s);

}


function checkparts_multi(){
    //check if userchoices match .correct
    var go = 0;

    for (var i=0;i<robot.userchoice.length;i++){

        if(robot.userchoice[i]==""){
            //**console.log('choice ' + i + ': ' + robot.userchoice[i] + 'empty. more choice to make!');
            go = -1;
            break;
        }
        else if(robot.correct.indexOf(robot.userchoice[i])!= -1){
            //**console.log('choice ' + i + ': ' + robot.userchoice[i] + ' is correct!');
            //go = true;
            continue;
        }

        else{
            //**console.log('choice ' + i + ': ' + robot.userchoice[i] + ' is WRONG!');
            go = -2;
            continue;
        }
    }


    //**console.log('go check is: ' + go);
    if(go==-1){
        //**console.log('more choices to make!. abort. let more dragging occur');
        return;
    }
    /*
    else if(go==-2){
        //**console.log('wrong choice made. abort. snapback wrongs.');

        george_bottom.gotoAndPlay("confused");
        setTimeout(snapbackWrong, 1000);
        return;
    }
    */
    else if(go==-2){
        //**console.log('wrong choice made. play it anyway, but do not end level.');

        /*pull_lever animation*/
        george_bottom.gotoAndPlay("pull_lever");

        //removed b/c iOS / Android
        //playSound('leverpull');
        //


        //setTimeout(snapbackWrong, 1000);
        //**console.log('parts added were: ' + robot.userchoice)

        george_bottom.gotoAndPlay("confused");


        var str = robot.userchoice[0];
        ////**console.log('partname is: ' + str.substring(str.indexOf("_"))  )
        str = str.substring(str.indexOf("_")) ;

        //window['anim'+str]();
        _isWin = false;
        function_anim = 'anim'+str;
        //**console.log('WRONG anim to play: ' + function_anim);
        shiftForAnim();

        return;
    }
    else{
        //**console.log('alls good, show this levels win');

        /*pull_lever animation*/
        george_bottom.gotoAndPlay("pull_lever");

        //removed b/c iOS / Android
        //playSound('leverpull');
        //

        //random good job sound
        var s = "";
        var r = randomInt(1,4);
        switch(r){
            case 1: s="good_job"; break;
            case 2: s="great_building"; break;
            case 3: s="nice_work"; break;
            case 4: s="well_done"; break;
        }
        playSound(s);
        //

        var str = robot.userchoice[0];
            ////**console.log('partname is: ' + str.substring(str.indexOf("_"))  )
        str = str.substring(str.indexOf("_")) ;

        _isWin = true;
        function_anim = "anim_" + levels[nlevel][2];
        shiftForAnim();
    }
}


//create level function:
function createlevel(bgcolor){
    //**console.log("creating level:  " + nlevel);


    if(nlevel>0 && nlevel<levels.length){
        //play_lvl_sound();
        var sndintro = "";
        if(nlevel%2==0) sndintro="now_help_george";
        else sndintro="next_help_george";

        playSound(sndintro, play_lvl_sound);
    }


    choiceIdx = 0;
    sandIdx=0;
    _isWin = false;
    _sandbox = false;
    _sandboxInProgress = false;

    /*
    if(!bgcolor) bgcolor="white";
    bg_level_left = new createjs.Shape();
    bg_level_left.graphics.beginFill(bgcolor).drawRect(0,0, html5game.width, html5game.height);
    */
    bg_level_left  = new createjs.Bitmap(image['george_bg']);
    bg_level_left.mask = gamemask;
    stage.addChild(bg_level_left);

    //left-side divider
    divider1 = new createjs.Bitmap(image['divider']);
    divider1.x = 14;
    divider1.y = 2;
    stage.addChild(divider1);


    //create george
    george_bottom = new createjs.Sprite(spritesheet['george_lever']);
    george_bottom.gotoAndStop('idle');

    george_bottom.x = -35//0;
    george_bottom.y = html5game.height -160;
    stage.addChild(george_bottom, divider1);

    george_bottom.addEventListener("mouseover", cursorPointer);
    george_bottom.addEventListener("rollover", cursorPointer);
    george_bottom.addEventListener("mouseout", cursorDefault);
    george_bottom.addEventListener("rollout", cursorDefault);

    //palette is container containing right divider, right bg, all draggable parts
    palette = new createjs.Container();
    palette.x = 516;

    //grey bg for right side parts palette
    palette_bg = new createjs.Shape();
    palette_bg.graphics.beginFill("#cccccc").drawRect(0,0, html5game.width-516, html5game.height);
    palette_bg.mask = gamemask;
    palette.addChild(palette_bg);

    //
    pal_mask = new createjs.Shape();
    pal_mask.graphics.beginFill("red").drawRect(0,0, html5game.width-516, html5game.height);
    //pal_mask.alpha = 0.3;


    palette_divider = new createjs.Bitmap(image['divider']);
    palette_divider.x = 506;
    pal_mask.x = palette_divider.x +10;
    //re-enable after testing done
    palette.mask = pal_mask;
    stage.addChild(palette, palette_divider);

    //



    //setting all bodypart vars to empty at start
    head={};
    legs={};
    leftarm={};
    rightarm={};

    george_clickable = true;

    window[function_createparts]();

    //for entering level: always make fadebox and canvasblueborder topmost
    stage.addChild(fadeBox);
    stage.addChild(canvasblueborder);

    fadeIn();
}



//this example: robot needs BOTH leftarm and rightarm
function connectparts_arms(bodypart){
    //**console.log("connectparts_arms");

    //each bodypart type has a defining id, using dotnotation from passed dragger
    //**console.log('bodypart.partname = '  + bodypart.partname);
    bodypart.hitbox.removeEventListener("pressup", draggerhitbox_stickyDragOn);

    //if bodypart is a 'hand' type:
    if(bodypart.partname.search("hand") != -1){
        //**console.log('part is a HAND')

        //userchoice[0] (left)
        if(bodypart.x <= robotbody.x){
            //**console.log('trying left');
            if(robot.userchoice[0]==""){

                //**console.log('left is open! filler up');
                //
                //**console.log('testing move of hitbox for LEFT ARM');
                bodypart.hitbox.visible = true;
                bodypart.hitbox.x += robotbody.x - (bodypart.startX + 130);
                bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                //
                bodypart.x = bodypart.xL;
                bodypart.y = bodypart.yL;
                robot.addChild(bodypart);

                bodypart.scaleX = -1.0;
                bodypart.scaleY = 1.0;
                bodypart.rotation = -64;

                robot.userchoice[0] = bodypart.partname;
                leftarm = bodypart;
                bodypart.holder = 0;
                //**console.log('bodypart.holder is : ' + bodypart.holder);
            }
            else{
                //**console.log('left already filled, checking right');
                if(robot.userchoice[1]==""){
                    //**console.log('right is open! filler up');
                    //
                    //**console.log('testing move of hitbox for RIGHT ARM');
                    bodypart.hitbox.visible = true;
                    bodypart.hitbox.x += robotbody.x + robotbody.regX - bodypart.startX;
                    bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                    //

                    bodypart.x = bodypart.xR;
                    bodypart.y = bodypart.yR;
                    robot.addChild(bodypart);

                    bodypart.scaleX = 1.0;
                    bodypart.scaleY = 1.0;
                    //bodypart.rotation += 90;
                    bodypart.rotation = 64;

                    robot.userchoice[1] = bodypart.partname;
                    rightarm = bodypart;
                    bodypart.holder = 1;
                    //**console.log('bodypart.holder is : ' + bodypart.holder);
                }
                else{
                    //return piece if above conditions aren't met:
                    //**console.log('left and right both filled, snapback!');
                    snapbackWrong(bodypart);
                    return;
                }

            }
        }

        //userchoice[1] (right)
        else if(bodypart.x > robotbody.x){
            //**console.log('trying right');
            if(robot.userchoice[1]==""){
                //**console.log('right is open! filler up');
                //
                //**console.log('testing move of hitbox for RIGHT ARM');
                bodypart.hitbox.visible = true;
                bodypart.hitbox.x += robotbody.x + robotbody.regX - bodypart.startX;
                bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                //

                bodypart.x = bodypart.xR;
                bodypart.y = bodypart.yR;
                robot.addChild(bodypart);

                bodypart.scaleX = 1.0;
                bodypart.scaleY = 1.0;
                //bodypart.rotation += 90;
                bodypart.rotation = 64;


                robot.userchoice[1] = bodypart.partname;
                rightarm = bodypart;
                bodypart.holder = 1;
                //**console.log('bodypart.holder is : ' + bodypart.holder);
            }
            else{
                //**console.log('right already filled, checking left');
                if(robot.userchoice[0]==""){
                    //**console.log('left is open! filler up');
                    //
                    //**console.log('testing move of hitbox for LEFT ARM');
                    bodypart.hitbox.visible = true;
                    bodypart.hitbox.x += robotbody.x - (bodypart.startX + 130);
                    bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                    //

                    bodypart.x = bodypart.xL;
                    bodypart.y = bodypart.yL;
                    robot.addChild(bodypart);

                    bodypart.scaleX = -1.0;
                    bodypart.scaleY = 1.0;
                    bodypart.rotation = -64;

                    robot.userchoice[0] = bodypart.partname;
                    leftarm = bodypart;
                    bodypart.holder = 0;
                    //**console.log('bodypart.holder is : ' + bodypart.holder);
                }
                else{
                    //**console.log('left and right both filled, snapback!');
                    snapbackWrong(bodypart);
                    return;
                }

            }
        }
    }

    checkpartsfilled();
}



//two arm test: catch a ball and stick to metal
function createparts_0(){
    //**console.log("createparts_0");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, 314);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)


    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.lineWidth = 440;
    instruct_text.lineHeight = 25;
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can catch a ball and stick to metal.";

    //DRAGGERS: filling leftarm and right arm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;
    var xR = 355;
    var yR = yL;


    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_baseball", "hand_magnet"]; //constant
    robot.userchoice = ["", ""]; //changeable

    robot.sounds = ['catch_a_ball','stick_to_metal'];
    //
}


//two arm test: play music and help_you_see_in_the_dark
function createparts_15(){
    //**console.log("createparts_15");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, 314);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)


    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.lineWidth = 440;
    instruct_text.lineHeight = 25;
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can play music and help you see in the dark.";

    //DRAGGERS: filling leftarm and right arm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];


    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;



    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_trumpet", "hand_flashlight"]; //constant
    robot.userchoice = ["", ""]; //changeable

    robot.sounds = ['play_music','help_you_see_in_the_dark'];
    //
}

//two arm test: play music and help_you_see_in_the_dark
function createparts_17(){
    //**console.log("createparts_17");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, 314);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)


    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.lineWidth = 440;
    instruct_text.lineHeight = 25;
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can play music and help you see in the dark.";

    //DRAGGERS: filling leftarm and right arm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,240,350,420];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;



    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_trumpet", "hand_flashlight"]; //constant
    robot.userchoice = ["", ""]; //changeable

    robot.sounds = ['play_music','help_you_see_in_the_dark'];
    //
}

function createparts_1(){
    //**console.log("createparts_1");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm (flipped depending on if leftarm or rightarm needed to be added by player)
    var flip = false;
    var staticL = robotbody.x+75;//355;
    var staticR = robotbody.y-26;//209;
    if(levels[nlevel][1]=='rightarm'){
      flip = true;
      staticL = robotbody.x-77;//203;
      staticR = robotbody.y-27;//208;
    }
    createArmStatic('hand_generic',staticL,staticR, flip);

    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)


    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can play music.";

    //DRAGGERS: filling leftarm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;

    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_trumpet"]; //constant
    robot.userchoice = [""]; //changeable
    //
}

//*****BEGIN SANDBOX
function createparts_sandbox(){
    //**console.log("createparts_sandbox");

    //sandbox only:
    _sandbox = true;
    palette_panning = false;
    pal_pg = 1;

    palette_bg.x = palette.x;
    palette_divider.x = palette.x;
    stage.addChild(palette_bg);
    palette.mask = palette_bg;

    //for sandbox, arrows to navigate pages of palette
    pal_right = new createjs.Sprite(spritesheet['arrow_sprite']);
    pal_right.x = 750; pal_right.y = 410;

    pal_left = new createjs.Sprite(spritesheet['arrow_sprite']);
    pal_left.scaleX = -1;
    pal_left.x = 670; pal_left.y = 410;


    btn_camera = new createjs.Bitmap(image['btn_camera']);
    btn_camera.scaleX  = btn_camera.scaleY = 0.8;
    btn_camera.x = 400;
    btn_camera.y = 400;
    stage.addChild(btn_camera);

    pal_right.addEventListener("click", palette_next);
    pal_left.addEventListener("click", palette_prev);
    btn_camera.addEventListener("click", testPic);

    pal_left.addEventListener("mouseover", cursorPointer);
    pal_left.addEventListener("rollover", cursorPointer);
    pal_left.addEventListener("mouseout", cursorDefault);
    pal_left.addEventListener("rollout", cursorDefault);

    pal_right.addEventListener("mouseover", cursorPointer);
    pal_right.addEventListener("rollover", cursorPointer);
    pal_right.addEventListener("mouseout", cursorDefault);
    pal_right.addEventListener("rollout", cursorDefault);

    btn_camera.addEventListener("mouseover", cursorPointer);
    btn_camera.addEventListener("rollover", cursorPointer);
    btn_camera.addEventListener("mouseout", cursorDefault);
    btn_camera.addEventListener("rollout", cursorDefault);

    pal_left.gotoAndStop(1);
    stage.addChild(pal_right, pal_left)

    //
    pal_mask = new createjs.Shape();
    pal_mask.graphics.beginFill("red").drawRect(0,0, html5game.width-516, html5game.height);
    //pal_mask.alpha = 0.3;

    //removing old palette_divider created by default in createlevel()
    stage.removeChild(palette_divider);

    palette_divider = new createjs.Bitmap(image['divider']);
    palette_divider.x = 506;
    pal_mask.x = palette_divider.x +10;
    palette.mask = pal_mask;
    //palette.addChild(palette_divider);

    //prevents click and dragging of part pieces that move to left of visible area
    palette_blocker = new createjs.Shape();
    palette_blocker.graphics.beginFill("white").drawRect(0,0, 515, html5game.height);
    palette_blocker.alpha = 0.01;


    stage.addChild(palette, palette_divider);
    stage.addChild(palette_blocker, btn_camera);


    //

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)

    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    //instruct_text.text = "SANDBOX!";
    instruct_text.text = "Build Your Own!";

    //DRAGGERS: filling leftarm
    leftarm={};
    rightarm={};
    legs={};
    head={};


    //heads
    var xP0 = [635, 815];
    var yP0 = [104,235, 360];

    //arms
    var xP1 = [940,1100];
    var yP1 = [100,230,350];

    //legs
    var xP2 = [1320, 1480];
    var yP2 = [45,175,295];


    //for sticking head
    var head_finalX = robotbody.x - 2;
    var head_finalY = robotbody.y - 100;

    //for sticking arms
    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;
    //for sticking legs
    var leg_finalX = robotbody.x;
    var leg_finalY = 324;


    //actual draggers:
    createArm('hand_baseball' ,xP1[0], yP1[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP1[0], yP1[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP1[1], yP1[0], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP1[1], yP1[1], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP1[0], yP1[2], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP1[1], yP1[2], xL, yL, xR, yR);


    createLegs('leg_walk',xP2[0], yP2[0], leg_finalX, leg_finalY);
    createLegsJet(xP2[0], yP2[1], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP2[1], yP2[0], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP2[1], yP2[1], leg_finalX, leg_finalY);
    createLegs('leg_snowshoe',xP2[0], yP2[2], leg_finalX, leg_finalY);
    createLegs('leg_skateboard',xP2[1], yP2[2], leg_finalX, leg_finalY);

    //actual draggers:

    //createHead(partname,xpos,ypos,finalX,finalY)
    createHead('head_propellor', xP0[0], yP0[0], head_finalX, head_finalY);
    createHead('head_umbrella', xP0[0], yP0[1], head_finalX, head_finalY);
    createHead('head_kite', xP0[0], yP0[2], head_finalX, head_finalY);
    createHead('head_magglass', xP0[1], yP0[0], head_finalX, head_finalY);
    createHead('head_telescope', xP0[1], yP0[1], head_finalX, head_finalY);
    createHead('head_lamp', xP0[1], yP0[2], head_finalX, head_finalY);


    //leftarm,rightarm,legs,head
    robot.userchoice = ["","","",""]; //changeable
    //

    //sandbox
    //theswitch.x = theswitch.finalX;
    //theswitch.hitbox.addEventListener("click", flipswitch_sandbox);
    //stage.addChild(theswitch);

    george_bottom.addEventListener("click", flipswitch_sandbox);
    stage.addChild(palette_divider);
    stage.addChild(robot);
    stage.addChild(george_bottom, divider1);

    george_bottom.gotoAndStop(6);
}

function palette_prev(e){
    if(palette_panning) return;
    if(pal_left.currentFrame==1) return;

    palette_panning = true;
    pal_right.gotoAndStop(0);

    createjs.Tween.get(palette, {loop:false})
        .to({x: palette.x+350}, 750, createjs.Ease.none)
        .call(function(){
            pal_pg--;
            palette_panning = false;

            if(pal_pg==1){
                pal_left.gotoAndStop(1);
                pal_right.gotoAndStop(0);
                return;
            }

        });
}

function palette_next(e){
    if(palette_panning) return;
    if(pal_right.currentFrame==1) return;

    palette_panning = true;

    pal_left.gotoAndStop(0);

    createjs.Tween.get(palette, {loop:false})
        .to({x: palette.x-350}, 750, createjs.Ease.none)
        .call(function(){
            pal_pg++;
            palette_panning = false;

            if(pal_pg==3){
                pal_left.gotoAndStop(0);
                pal_right.gotoAndStop(1);
                return;
            }

        });

}


//checking robot.userchoice indexes 3,0,1,2 (head,leftarm,rightarm,legs), as defined in sandbox_order[]
//this is the play order.
function connectparts_sandbox(bodypart, eX, eY){
    //**console.log("connectparts_sandbox");
    //each bodypart type has a defining id, using dotnotation from passed dragger
    //**console.log('bodypart.partname = '  + bodypart.partname);
    bodypart.hitbox.removeEventListener("pressup", draggerhitbox_stickyDragOn);

    //**console.log('bodypart.x: '+ bodypart.x);
    //**console.log('robotbody.x: '+ robotbody.x);
    //**console.log("eX: " + eX)
    //**console.log("eY: " + eY)

    //if bodypart is a 'hand' type:
    if(bodypart.partname.search("hand") != -1){

        //**console.log('part is a HAND')
        //userchoice[0] (left)
        if(eX <= robotbody.x){
            //**console.log('trying left');
            if(robot.userchoice[0]==""){

                //**console.log('left is open! filler up');
                //
                //**console.log('testing move of hitbox for LEFT ARM');
                bodypart.hitbox.visible = true;
                //bodypart.hitbox.x += robotbody.x - (bodypart.startX + 130);
                //bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                //
                bodypart.x = bodypart.xL;
                bodypart.y = bodypart.yL;

                bodypart.hitbox.x += 380 + robotbody.x - bodypart.startX;
                bodypart.hitbox.y += ( bodypart.y - bodypart.startY)

                robot.addChild(bodypart);
                robot.addChild(bodypart.hitbox);

                bodypart.scaleX = -1.0;
                bodypart.scaleY = 1.0;
                bodypart.rotation = -64;

                robot.userchoice[0] = bodypart.partname;
                leftarm = bodypart;
                bodypart.holder = 0;
                //**console.log('bodypart.holder is : ' + bodypart.holder);

                //if this was previously the other arm, then clear the other arm
                if(rightarm.partname==bodypart.partname){
                    rightarm={};
                    rightarm.partname="";
                }
            }
            else{
                //**console.log('left already filled, checking right');
                if(robot.userchoice[1]==""){
                    //**console.log('right is open! filler up');
                    //
                    //**console.log('testing move of hitbox for RIGHT ARM');
                    bodypart.hitbox.visible = true;
                    //bodypart.hitbox.x += robotbody.x + robotbody.regX - bodypart.startX;
                    //bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                    //
                    bodypart.x = bodypart.xR;
                    bodypart.y = bodypart.yR;
                    bodypart.hitbox.x -= (bodypart.startX -885);
                    bodypart.hitbox.y += ( bodypart.y - bodypart.startY);

                    robot.addChild(bodypart);
                    robot.addChild(bodypart.hitbox);

                    bodypart.scaleX = 1.0;
                    bodypart.scaleY = 1.0;
                    //bodypart.rotation += 90;
                    bodypart.rotation = 64;

                    robot.userchoice[1] = bodypart.partname;
                    rightarm = bodypart;
                    bodypart.holder = 1;
                    //**console.log('bodypart.holder is : ' + bodypart.holder);

                    //if this was previously the other arm, then clear the other arm
                    if(leftarm.partname==bodypart.partname){
                        leftarm={};
                        leftarm.partname="";
                    }

                }
                else{
                    //return piece if above conditions aren't met:
                    //**console.log('left and right both filled, snapback!');
                    snapbackWrong(bodypart);
                    return;
                }

            }
        }
        //userchoice[1] (right)
        else if(eX > robotbody.x){
            //**console.log('trying right');
            if(robot.userchoice[1]==""){
                //**console.log('right is open! filler up');
                //
                //**console.log('testing move of hitbox for RIGHT ARM');
                bodypart.hitbox.visible = true;
                //bodypart.hitbox.x += robotbody.x + robotbody.regX - bodypart.startX;
                //bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
                //

                bodypart.x = bodypart.xR;
                bodypart.y = bodypart.yR;

                bodypart.hitbox.x -= (bodypart.startX -885);
                bodypart.hitbox.y += ( bodypart.y - bodypart.startY);

                robot.addChild(bodypart);
                robot.addChild(bodypart.hitbox);

                bodypart.scaleX = 1.0;
                bodypart.scaleY = 1.0;
                //bodypart.rotation += 90;
                bodypart.rotation = 64;

                robot.userchoice[1] = bodypart.partname;
                rightarm = bodypart;

                bodypart.holder = 1;
                //**console.log('bodypart.holder is : ' + bodypart.holder);

                //if this was previously the other arm, then clear the other arm
                if(leftarm.partname==bodypart.partname){
                    leftarm={};
                    leftarm.partname="";
                }
            }
            else{
                //**console.log('right already filled, checking left');
                if(robot.userchoice[0]==""){
                    //**console.log('left is open! filler up');
                    //
                    //**console.log('testing move of hitbox for LEFT ARM');
                    bodypart.hitbox.visible = true;
                    //

                    bodypart.x = bodypart.xL;
                    bodypart.y = bodypart.yL;
                    //bodypart.hitbox.x +=50;
                    bodypart.hitbox.x += 380 + robotbody.x - bodypart.startX;
                    bodypart.hitbox.y += ( bodypart.y - bodypart.startY)

                    robot.addChild(bodypart);
                    robot.addChild(bodypart.hitbox);

                    bodypart.scaleX = -1.0;
                    bodypart.scaleY = 1.0;
                    bodypart.rotation = -64;

                    robot.userchoice[0] = bodypart.partname;
                    leftarm = bodypart;
                    bodypart.holder = 0;
                    //**console.log('bodypart.holder is : ' + bodypart.holder);

                //if this was previously the other arm, then clear the other arm
                if(rightarm.partname==bodypart.partname){
                    rightarm={};
                    rightarm.partname="";
                }
                }
                else{
                    //**console.log('left and right both filled, snapback!');
                    snapbackWrong(bodypart);
                    return;
                }

            }
        }
    }

    //if bodypart is a 'leg' type:
    if(bodypart.partname.search("leg") != -1){
        //**console.log('part is a LEG');

        if(robot.userchoice[2]==""){
            //**console.log('legs are OPEN!');

            bodypart.scaleX = bodypart.scaleY = 1.0;
            bodypart.x = bodypart.finalX;
            bodypart.y = bodypart.finalY;

            bodypart.hitbox.visible = true;
            //bodypart.hitbox.x += robotbody.x - (bodypart.startX + 10);
            //bodypart.hitbox.y += robotbody.y - (bodypart.startY - 100);

            ////**console.log('leg.startX: ' + bodypart.startX)
            bodypart.hitbox.x -= (bodypart.startX -788);
            bodypart.hitbox.y += ( bodypart.y - bodypart.startY)

            robot.addChild(bodypart);
            robot.addChild(bodypart.hitbox);

            robot.userchoice[2] = bodypart.partname;
            legs = bodypart;
            bodypart.holder = 2;
            //**console.log('bodypart.holder is : ' + bodypart.holder);
        }
        else{
            //**console.log('legs already filled, snapback!');
            snapbackWrong(bodypart);
        }
    }

    //if bodypart is a'head type:
    if(bodypart.partname.search("head") != -1){
        //**console.log('part is a HEAD');
        if(robot.userchoice[3]==""){

            //**console.log('head is open! filler up');
            //
            //**console.log('testing move of hitbox for LEFT ARM');
            bodypart.hitbox.visible = true;

            //
            bodypart.hitbox.x -= (bodypart.x - 280);
            bodypart.hitbox.y += robotbody.y - (bodypart.startY + 105);

            //
            bodypart.x = bodypart.finalX;
            bodypart.y = bodypart.finalY;

            //bodypart.hitbox.x = -420


            robot.addChild(bodypart);
            robot.addChild(bodypart.hitbox);

            bodypart.scaleX = 1.0;
            bodypart.scaleY = 1.0;

            robot.userchoice[3] = bodypart.partname;
            head = bodypart;
            bodypart.holder = 3;
            //**console.log('bodypart.holder is : ' + bodypart.holder);
        }
        else{
            //**console.log('head already filled, snapback!');
            snapbackWrong(bodypart);
        }


    }

    //checkpartsfilled();
}
//*****END SANDBOX


function createparts_6(){
    //**console.log("createparts_6: " + levels[nlevel][1]);

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm (flipped depending on if leftarm or rightarm needed to be added by player)
    var flip = false;
    var staticL = robotbody.x+75;// 355;
    var staticR = robotbody.y-26;// 209;
    if(levels[nlevel][1]=='rightarm'){
      flip = true;
      staticL = robotbody.x-77;
      staticR = robotbody.y-27;
    }
    createArmStatic('hand_generic',staticL,staticR, flip);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)

    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)


    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can pound a nail.";

    //DRAGGERS: filling leftarm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;

    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[1], yP[2], xL, yL, xR, yR);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_hammer"]; //constant
    robot.userchoice = [""]; //changeable
    //
}


function createparts_7(){
    //**console.log("createparts_7: " + levels[nlevel][1]);

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm (flipped depending on if leftarm or rightarm needed to be added by player)
    var flip = false;
    var staticL = robotbody.x+75;// 355;
    var staticR = robotbody.y-26;// 209;
    if(levels[nlevel][1]=='rightarm'){
      flip = true;
      staticL = robotbody.x-77;
      staticR = robotbody.y-27;
    }
    createArmStatic('hand_generic',staticL,staticR, flip);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)

    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)


    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can stick to metal.";


    //DRAGGERS: filling leftarm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;

    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[1], yP[2], xL, yL, xR, yR);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_magnet"]; //constant
    robot.userchoice = [""]; //changeable
    //
}


function createparts_8(){
    //**console.log("createparts_8: " + levels[nlevel][1]);

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can stay dry.";


    //DRAGGERS: filling head
    head={};

    var xP = [610, 780];
    var yP = [120,255, 400];

    var finalX = robotbody.x - 2;
    var finalY = robotbody.y - 100;
    //actual draggers:

    //createHead(partname,xpos,ypos,finalX,finalY)
    createHead('head_propellor', xP[0], yP[0], finalX, finalY);
    createHead('head_kite', xP[0], yP[1], finalX, finalY);
    createHead('head_lamp', xP[0], yP[2], finalX, finalY);
    createHead('head_umbrella', xP[1], yP[0], finalX, finalY);
    createHead('head_magglass', xP[1], yP[1], finalX, finalY);
    createHead('head_telescope', xP[1], yP[2], finalX, finalY);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["head_umbrella"]; //constant
    robot.userchoice = [""]; //changeable
    //
}

function createparts_16(){
    //**console.log("createparts_16: " + levels[nlevel][1]);

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can fly.";


    //DRAGGERS: filling head
    head={};

    var xP = [610, 780];
    var yP = [120,255, 400];

    var finalX = robotbody.x - 2;
    var finalY = robotbody.y - 100;
    //actual draggers:

    //createHead(partname,xpos,ypos,finalX,finalY)
    createHead('head_propellor', xP[0], yP[0], finalX, finalY);
    createHead('head_kite', xP[0], yP[1], finalX, finalY);
    createHead('head_lamp', xP[0], yP[2], finalX, finalY);
    createHead('head_umbrella', xP[1], yP[0], finalX, finalY);
    createHead('head_magglass', xP[1], yP[1], finalX, finalY);
    createHead('head_telescope', xP[1], yP[2], finalX, finalY);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["head_propellor"]; //constant
    robot.userchoice = [""]; //changeable
    //
}

//two-arm: brush teeth and pound a nail
function createparts_9(){
    //**console.log("createparts_9");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, 314);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)


    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.lineWidth = 440;
    instruct_text.lineHeight = 25;
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can brush teeth and pound a nail.";

    //DRAGGERS: filling leftarm and right arm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;



    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_toothbrush", "hand_hammer"]; //constant
    robot.userchoice = ["", ""]; //changeable

    robot.sounds = ['brush_teeth','pound_a_nail'];

}


//two-arm: catch_a_ball and brush teeth
function createparts_17(){
    //**console.log("createparts_17");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, 314);


    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)


    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.lineWidth = 440;
    instruct_text.lineHeight = 25;
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can catch a ball and brush teeth.";

    //DRAGGERS: filling leftarm and right arm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;



    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_baseball", "hand_toothbrush"]; //constant
    robot.userchoice = ["", ""]; //changeable

    robot.sounds = ['catch_a_ball','brush_teeth'];

}

function createparts_13(){
    //**console.log("createparts_13: " + levels[nlevel][1]);

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can fly a kite.";


    //DRAGGERS: filling head
    head={};

    var xP = [610, 780];
    var yP = [120,255, 400];

    var finalX = robotbody.x - 2;
    var finalY = robotbody.y - 100;
    //actual draggers:

    //createHead(partname,xpos,ypos,finalX,finalY)
    createHead('head_propellor', xP[0], yP[0], finalX, finalY);
    createHead('head_kite', xP[0], yP[1], finalX, finalY);
    createHead('head_lamp', xP[0], yP[2], finalX, finalY);
    createHead('head_umbrella', xP[1], yP[0], finalX, finalY);
    createHead('head_magglass', xP[1], yP[1], finalX, finalY);
    createHead('head_telescope', xP[1], yP[2], finalX, finalY);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["head_kite"]; //constant
    robot.userchoice = [""]; //changeable
    //

}

function createparts_14(){
    //**console.log("createparts_14: " + levels[nlevel][1]);

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.lineWidth = 440;
    instruct_text.lineHeight = 25;
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can light up the room.";


    //DRAGGERS: filling head
    head={};

    var xP = [610, 780];
    var yP = [120,255, 400];

    var finalX = robotbody.x - 2;
    var finalY = robotbody.y - 100;
    //actual draggers:

    //createHead(partname,xpos,ypos,finalX,finalY)
    createHead('head_propellor', xP[0], yP[0], finalX, finalY);
    createHead('head_kite', xP[0], yP[1], finalX, finalY);
    createHead('head_lamp', xP[0], yP[2], finalX, finalY);
    createHead('head_umbrella', xP[1], yP[0], finalX, finalY);
    createHead('head_magglass', xP[1], yP[1], finalX, finalY);
    createHead('head_telescope', xP[1], yP[2], finalX, finalY);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["head_lamp"]; //constant
    robot.userchoice = [""]; //changeable
    //

}

//this example: robot needs a head
function connectparts_head(bodypart){
    //**console.log("connectparts_head");

    //each bodypart type has a defining id, using dotnotation from passed dragger
    //**console.log('bodypart.partname = '  + bodypart.partname);
    bodypart.hitbox.removeEventListener("pressup", draggerhitbox_stickyDragOn);

    ////**console.log('part is a HEAD');
    if(robot.userchoice[0]==""){

        //**console.log('head is open! filler up');
        //
        //**console.log('testing move of hitbox for LEFT ARM');
        bodypart.hitbox.visible = true;
        bodypart.hitbox.x += robotbody.x - (bodypart.startX);
        bodypart.hitbox.y += robotbody.y - (bodypart.startY + 105);

        //
        bodypart.x = bodypart.finalX;
        bodypart.y = bodypart.finalY;
        robot.addChild(bodypart);

        bodypart.scaleX = 1.0;
        bodypart.scaleY = 1.0;

        robot.userchoice[0] = bodypart.partname;
        head = bodypart;
        bodypart.holder = 0;
        //**console.log('bodypart.holder is : ' + bodypart.holder);
    }
    else{
        //**console.log('head already filled, snapback!');
        snapbackWrong(bodypart);
    }


    checkpartsfilled();
}


//this example: robot needs a leftarm
function connectparts_leftarm(bodypart){
    //**console.log("connectparts_1");

    //each bodypart type has a defining id, using dotnotation from passed dragger
    //**console.log('bodypart.partname = '  + bodypart.partname);
    bodypart.hitbox.removeEventListener("pressup", draggerhitbox_stickyDragOn);

    ////**console.log('part is a HAND');
    if(robot.userchoice[0]==""){

        //**console.log('left is open! filler up');
        //
        //**console.log('testing move of hitbox for LEFT ARM');
        bodypart.hitbox.visible = true;
        bodypart.hitbox.x += robotbody.x - (bodypart.startX + 130);
        bodypart.hitbox.y += robotbody.y - (bodypart.startY + 50);
        //
        bodypart.x = bodypart.xL;
        bodypart.y = bodypart.yL;
        robot.addChild(bodypart);

        bodypart.scaleX = -1.0;
        bodypart.scaleY = 1.0;
        bodypart.rotation = -64;

        robot.userchoice[0] = bodypart.partname;
        leftarm = bodypart;
        bodypart.holder = 0;
        //**console.log('bodypart.holder is : ' + bodypart.holder);
    }
    else{
        //**console.log('left already filled, snapback!');
        snapbackWrong(bodypart);
    }


    checkpartsfilled();
}

function connectparts_rightarm(bodypart){
    //**console.log("connectparts_rightarm");

    //each bodypart type has a defining id, using dotnotation from passed dragger
    //**console.log('bodypart.partname = '  + bodypart.partname);
    bodypart.hitbox.removeEventListener("pressup", draggerhitbox_stickyDragOn);

    //**console.log('part is a HAND')

    if(robot.userchoice[0]==""){
        //**console.log('right is open! filler up');
        //
        //**console.log('testing move of hitbox for RIGHT ARM');
        bodypart.hitbox.visible = true;
        //

        //var pt1 = bodypart.localToLocal(bodypart.hitbox.x, bodypart.hitbox.y, robot);
        ////**console.log('robot new xy is: ' + pt1.x + ', ' + pt1.y)

        bodypart.hitbox.x += robotbody.x + robotbody.regX - bodypart.startX;
        bodypart.hitbox.y += robotbody.y - (bodypart.startY + 30);
        //bodypart.hitbox.x = pt1.x;
        //bodypart.hitbox.y = pt1.y;
        //

        bodypart.x = bodypart.xR;
        bodypart.y = bodypart.yR;
        robot.addChild(bodypart);

        bodypart.scaleX = 1.0;
        bodypart.scaleY = 1.0;
        //bodypart.rotation += 90;
        bodypart.rotation = 64;

        robot.userchoice[0] = bodypart.partname;
        rightarm = bodypart;
        bodypart.holder = 0;
        //**console.log('bodypart.holder is : ' + bodypart.holder);
    }
    else{
        //return piece if above conditions aren't met:
        //**console.log('right filled, snapback!');
        snapbackWrong(bodypart);
        return;
    }

    checkpartsfilled();
}








function createparts_2(){
    //**console.log("createparts_2");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    //robot.topbone_left.rotation = 90;
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    //robot.topbone_right.rotation = 90;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can walk.";

    //DRAGGERS: filling legs slot
    legs = {};

    var xP = [620,780];
    var yP = [60,210, 360];

    var leg_finalX = robotbody.x;
    var leg_finalY = 324;

    //actual draggers:
    createLegs('leg_walk',xP[0], yP[0], leg_finalX, leg_finalY);
    createLegsJet(xP[0], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP[1], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_snowshoe',xP[1], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_skateboard',xP[0], yP[2], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP[1], yP[2], leg_finalX, leg_finalY);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["leg_walk"]; //constant
    robot.userchoice = [""]; //changeable
    //
}


function createparts_10(){
    //**console.log("createparts_10: snowshoe");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    //robot.topbone_left.rotation = 90;
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    //robot.topbone_right.rotation = 90;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can snowshoe.";

    //DRAGGERS: filling legs slot
    legs = {};

    var xP = [620,780];
    var yP = [60,210, 360];

    var leg_finalX = robotbody.x;
    var leg_finalY = 324;

    //actual draggers:
    createLegs('leg_skateboard',xP[0], yP[0], leg_finalX, leg_finalY);
    createLegsJet(xP[0], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_snowshoe',xP[1], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP[1], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP[0], yP[2], leg_finalX, leg_finalY);
    createLegs('leg_walk',xP[1], yP[2], leg_finalX, leg_finalY);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["leg_snowshoe"]; //constant
    robot.userchoice = [""]; //changeable
    //
}

function createparts_11(){
    //**console.log("createparts_11: ski");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    //robot.topbone_left.rotation = 90;
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    //robot.topbone_right.rotation = 90;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can slide down snow.";

    //DRAGGERS: filling legs slot
    legs = {};

    var xP = [620,780];
    var yP = [60,210, 360];

    var leg_finalX = robotbody.x;
    var leg_finalY = 324;

    //actual draggers:
    createLegs('leg_walk',xP[0], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP[0], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_skateboard',xP[0], yP[2], leg_finalX, leg_finalY);

    createLegs('leg_snowshoe',xP[1], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP[1], yP[1], leg_finalX, leg_finalY);
    createLegsJet(xP[1], yP[2], leg_finalX, leg_finalY);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["leg_ski"]; //constant
    robot.userchoice = [""]; //changeable
    //
}

function createparts_12(){
    //**console.log("createparts_12: skateboard");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    //robot.topbone_left.rotation = 90;
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    //robot.topbone_right.rotation = 90;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can skateboard.";

    //DRAGGERS: filling legs slot
    legs = {};

    var xP = [620,780];
    var yP = [60,210, 360];

    var leg_finalX = robotbody.x;
    var leg_finalY = 324;

    //actual draggers:
    createLegs('leg_walk',xP[0], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP[0], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_snowshoe',xP[1], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP[1], yP[1], leg_finalX, leg_finalY);
    createLegsJet(xP[0], yP[2], leg_finalX, leg_finalY);
    createLegs('leg_skateboard', xP[1], yP[2], leg_finalX, leg_finalY);


    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["leg_skateboard"]; //constant
    robot.userchoice = [""]; //changeable
    //
}


//this example, robot needs legs
function connectparts_legs(bodypart){
    //**console.log('connectparts_legs')

    //each bodypart type has a defining id, using dotnotation from passed dragger
    //**console.log('bodypart.partname = '  + bodypart.partname);
    bodypart.hitbox.removeEventListener("pressup", draggerhitbox_stickyDragOn);

    if(robot.userchoice[0]==""){
        //**console.log('legs are OPEN!');

        bodypart.scaleX = bodypart.scaleY = 1.0;
        bodypart.x = bodypart.finalX;
        bodypart.y = bodypart.finalY;

        bodypart.hitbox.visible = true;
        bodypart.hitbox.x += robotbody.x - (bodypart.startX + 10);
        bodypart.hitbox.y += robotbody.y - (bodypart.startY - 100);

        robot.addChild(bodypart);

        robot.userchoice[0] = bodypart.partname;
        legs = bodypart;
        bodypart.holder = 0;
        //**console.log('bodypart.holder is : ' + bodypart.holder);
    }
    else{
        //**console.log('legs already filled, snapback!');
        snapbackWrong(bodypart);
    }

    checkpartsfilled();
}




function createparts_3(){
    //**console.log("createparts_3");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //legs
    //req (for static): partname,xPos,yPos
    //opt (if dragger): xL,yL,xR,yR
    createLegs('leg_walk', robotbody.x, robotbody.y+79);

    //static arm (flipped depending on if leftarm or rightarm needed to be added by player)
    var flip = false;
    var staticL = robotbody.x+75;// 355;
    var staticR = robotbody.y-26;// 209;
    if(levels[nlevel][1]=='rightarm'){
      flip = true;
      staticL = robotbody.x-77;
      staticR = robotbody.y-27;
    }
    createArmStatic('hand_generic',staticL,staticR, flip);

    //these static shoulders are hidden, and shown only when arms need to animate
    robot.shoulder_left = new createjs.Bitmap(image['arm_shoulder']);
    //**key thing: flip leftarm_shoulder horizontally
    robot.shoulder_left.scaleX = -1;
    robot.shoulder_left.x = shoulder_leftX;
    robot.shoulder_left.y = shoulder_leftY;
    robot.addChild(robot.shoulder_left)

    robot.shoulder_right = new createjs.Bitmap(image['arm_shoulder']);
    robot.shoulder_right.x = shoulder_rightX;
    robot.shoulder_right.y = shoulder_rightY;
    robot.addChild(robot.shoulder_right)

    robot.shoulder_left.visible = false;
    robot.shoulder_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0

    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can catch a ball.";


    //DRAGGERS: filling leftarm
    leftarm={};
    rightarm={};

    var xP = [590,740];
    var yP = [100,250,400];

    var xL = 203;
    var yL = 218;//208;
    var xR = 355;
    var yR = yL;

    //actual draggers:
    createArm('hand_baseball' ,xP[0], yP[0], xL, yL, xR, yR);
    createArm('hand_magnet' ,xP[1], yP[0], xL, yL, xR, yR);
    createArm('hand_hammer' ,xP[0], yP[1], xL, yL, xR, yR);
    createArm('hand_trumpet' ,xP[1], yP[1], xL, yL, xR, yR);
    createArm('hand_flashlight' ,xP[0], yP[2], xL, yL, xR, yR);
    createArm('hand_toothbrush' ,xP[1], yP[2], xL, yL, xR, yR);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["hand_baseball"]; //constant
    robot.userchoice = [""]; //changeable
    //
}






function createparts_4(){
    //**console.log("createparts_4");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);


    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);


    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    //robot.topbone_left.rotation = 90;
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    //robot.topbone_right.rotation = 90;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can rollerskate.";

    //DRAGGERS: filling legs slot
    legs = {};

    var xP = [620,780];
    var yP = [60,210, 360];

    var leg_finalX = robotbody.x;
    var leg_finalY = 324;

    //actual draggers:
    createLegs('leg_walk',xP[0], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_skateboard', xP[1], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP[0], yP[2], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP[1], yP[0], leg_finalX, leg_finalY);
    createLegsJet(xP[0], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_snowshoe',xP[1], yP[2], leg_finalX, leg_finalY);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["leg_rollerskate"]; //constant
    robot.userchoice = [""]; //changeable
    //
}



function createparts_5(){
    //**console.log("createparts_5");

    bodyparts = [];
    bgloopers = [];

    //master robot container.
    robot = new createjs.Container();
    stage.addChild(robot); stage.addChild(palette, palette_divider);

    //torso
    robotbody = new createjs.Bitmap(image['torso']);
    robotbody.regX = robotbody.image.width/2;
    robotbody.regY = robotbody.image.height/2;
    robotbody.x = 280;
    robotbody.y = 245;
    robot.addChild(robotbody);

    //head
    robothead = new createjs.Bitmap(image['head_1']);
    robothead.regX = robothead.image.width/2;
    robothead.regY = robothead.image.height/2;
    robothead.x = robotbody.x - 2;
    robothead.y = robotbody.y - 100;
    robot.addChild(robothead);

    //static arm
    createArmStatic('hand_generic',robotbody.x+75,robotbody.y-26);
    createArmStatic('hand_generic',robotbody.x-77,robotbody.y-27,true);

    //these static leg topbones are hidden, and shown only when legs need to animate
    robot.topbone_left = new createjs.Bitmap(image['hip']);
    //robot.topbone_left.rotation = 90;
    robot.topbone_left.x = 233;
    robot.topbone_left.y = 300;
    robot.addChild(robot.topbone_left)

    robot.topbone_right = new createjs.Bitmap(image['hip']); robot.topbone_right.scaleX*=-1;
    //robot.topbone_right.rotation = 90;
    robot.topbone_right.x = 325;
    robot.topbone_right.y = 300;
    robot.addChild(robot.topbone_right)

    robot.topbone_left.visible = false;
    robot.topbone_right.visible = false;

    robotbody.hitbox = new createjs.Shape();
    robotbody.hitbox.graphics.beginFill("white").drawRect(robotbody.x-robotbody.regX-hitbox_padX, robotbody.y-robotbody.regY-hitbox_padY, robotbody.image.width + 2*hitbox_padX, robotbody.image.height + 2*hitbox_padY);
        //robotbody.hitbox.alpha = 0.4;
        //robot.addChild(robotbody.hitbox);
    bodytarget = robotbody.hitbox; //drop target for level 0


    instruct_text = new createjs.Text("", "16px Wellfleet", "black");
    instruct_text.textAlign = "center";
    instruct_text.textBaseline = "middle";
    instruct_text.x = robotbody.x;
    instruct_text.y = 40;
    stage.addChild(instruct_text);
    instruct_text.text = "Make a robot that can fly!";

    //DRAGGERS: filling legs slot
    legs = {};

    var xP = [620,780];
    var yP = [60,210, 360];

    var leg_finalX = robotbody.x;
    var leg_finalY = 324;

    //actual draggers:
    createLegs('leg_walk',xP[0], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_snowshoe',xP[0], yP[1], leg_finalX, leg_finalY);
    createLegs('leg_ski',xP[1], yP[0], leg_finalX, leg_finalY);
    createLegs('leg_rollerskate',xP[1], yP[1], leg_finalX, leg_finalY);
    createLegsJet(xP[1], yP[2], leg_finalX, leg_finalY);
    createLegs('leg_skateboard', xP[0], yP[2], leg_finalX, leg_finalY);

    //what does robotbody need, and what is it taking? use partname
    //these line up
    robot.correct = ["leg_jet"]; //constant
    robot.userchoice = [""]; //changeable
    //
}


//limb creation functions
//###########
function createArm(partname, xpos, ypos, xL, yL, xR, yR){

    var sf = 0.85; //modify to adjust scale when part is in palette

    //bicep container is the entire moveable arm
    var bp = new createjs.Container();
    //bodyparts.push(bp);
    bp.x = xpos;
    bp.y = ypos;

    //**key thing: flip left arm container horizontally
    bp.scaleX = sf;
    bp.scaleY = sf;

    //left arm shoulder. on its own as child of robot, does not rotate.
    bp.shoulder = new createjs.Bitmap(image['arm_shoulder']);

    bp.bicep = new createjs.Bitmap(image['arm_bicep']);
    bp.forearm = new createjs.Bitmap(image['arm_forearm']);

    if(partname == "hand_flashlight"){
        bp.hand = new createjs.Sprite(spritesheet['hand_flashlight']);
        bp.hand.gotoAndStop(0);
    }
    else bp.hand = new createjs.Bitmap(image[partname]);

    bp.partname = partname; //for knowing which arm/hand type it is

    bp.bicep.x = -17;
    bp.bicep.y = 0;
    bp.bicep.regX = -10;
    bp.bicep.regY = 0//5;

    //forearm container - child of leftarm
    bp.c1 = new createjs.Container();
    bp.c1.regX = 9;
    bp.c1.regY = bp.forearm.image.height/2;
    bp.c1.x = bp.bicep.x+60;//45;
    bp.c1.y = bp.bicep.y+12//5;//10;

    //hand container
    bp.c2 = new createjs.Container();

    //unique hand container reg points
    if(partname=="hand_generic"){
        bp.c2.regX = 0//9;
        bp.c2.regY = bp.hand.image.height/2 +3;
    }
    else if(partname=="hand_phone"){
        bp.c2.regX = 34;
        bp.c2.regY = 44;
    }
    else if(partname=="hand_trumpet"){
        bp.c2.regX = 14;
        bp.c2.regY = 58;
    }
    else if(partname=="hand_baseball"){
        bp.c2.regX = 24;
        bp.c2.regY = 58;
    }
    else if(partname=="hand_hammer"){
        bp.c2.regX = 29;
        bp.c2.regY = bp.hand.image.height/2;
    }
    else if(partname=="hand_toothbrush"){
        bp.c2.regX = 30;
        bp.c2.regY = 10;
    }
    else if(partname=="hand_flashlight"){
        bp.c2.regX = 30;
        bp.c2.regY = 10;
    }
    //default
    else{
        bp.c2.regX = 9;
        bp.c2.regY = bp.hand.image.height/2;
    }

    bp.c2.x = 84;
    bp.c2.y = 15;


    /*
    //for rotations
    bp is the bicep + forearm + hand
    bp.c1 is the FOREARM + HAND
    bp.c2 is the HAND
    bp.shoulder should be set last (after others set)
    */
    //start up rotations: (saving as .startR)
    bp.rotation = 66; bp.startR = bp.rotation;
    bp.bicep.rotation = 0; bp.bicep.startR = bp.bicep.rotation;
    bp.c1.rotation = -112; bp.c1.startR = bp.c1.rotation;
    bp.c2.rotation = 0; bp.c2.startR = bp.c2.rotation;
    bp.shoulder.rotation = -66; bp.shoulder.startR = bp.shoulder.rotation;

    bp.shoulder.x = -35;
    bp.shoulder.y = 20;

    //adding and layering arm parts:
    bp.addChild(bp.bicep);
    bp.c1.addChild(bp.forearm);
    bp.c2.addChild(bp.hand);

    //adding and layering arm containers
    bp.c1.addChild(bp.c2);
    bp.addChild(bp.c1);


    // if toothbrush, duplicate forearm on top of hand
    if(partname=="hand_toothbrush"){
        bp.c2.forearmcopy = new createjs.Bitmap(image['arm_forearm']);
        bp.c2.forearmcopy.x = -54;
        bp.c2.forearmcopy.y= -5;
        bp.c2.addChild(bp.c2.forearmcopy);
    }
    if(partname=="hand_flashlight"){
        bp.c2.x = 220
        bp.c2.y = 500;
        bp.c2.rotation = 81;
        bp.c2.startR = bp.c2.rotation;
    }


    //shoulder goes on top
    bp.addChild(bp.shoulder);

    //adding it all on stage
    stage.addChild(bp);

    //storing start values
    bp.startX = bp.x;
    bp.startY = bp.y;
    bp.startR = bp.rotation;
    bp.sf = sf; //to ref back to tool palette sf on tool active/deactive
    bp.xL = xL;
    bp.xR = xR;
    bp.yL = yL;
    bp.yR = yR;

    dragger_make(bp, true);
}

function createArmStatic(partname, xpos, ypos, flipped){

    //bicep container is the entire moveable arm
    var bp = new createjs.Container();
    bp.x = xpos;
    bp.y = ypos;

    //left arm shoulder. on its own as child of robot, does not rotate.
    bp.shoulder = new createjs.Bitmap(image['arm_shoulder']);

    bp.bicep = new createjs.Bitmap(image['arm_bicep']);
    bp.forearm = new createjs.Bitmap(image['arm_forearm']);
    bp.hand = new createjs.Bitmap(image[partname]);

    bp.partname = partname; //for knowing which arm/hand type it is

    //forearm container - child of leftarm
    bp.c1 = new createjs.Container();
    bp.c1.regX = 9;
    bp.c1.regY = bp.forearm.image.height/2;
    bp.c1.x = 45;
    bp.c1.y = 10;

    //hand container
    bp.c2 = new createjs.Container();

    //unique hand container reg points
    if(partname=="hand_generic"){
        bp.c2.regX = 9;
        bp.c2.regY = bp.hand.image.height/2 +3;
    }
    else if(partname=="hand_phone"){
        bp.c2.regX = 34;
        bp.c2.regY = 44;
    }
    else if(partname=="hand_trumpet"){
        bp.c2.regX = 14;
        bp.c2.regY = 58;
    }
    else if(partname=="hand_baseball"){
        bp.c2.regX = 24;
        bp.c2.regY = 58;
    }
    else if(partname=="hand_hammer"){
        bp.c2.regX = 29;
        bp.c2.regY = bp.hand.image.height/2;
    }
    //default
    else{
        bp.c2.regX = 9;
        bp.c2.regY = bp.hand.image.height/2;
    }

    bp.c2.x = 84;
    bp.c2.y = 15;


    //start up rotations:
    bp.rotation = 66//-65;//-45;
    bp.bicep.rotation = 0;
    bp.c1.rotation = -112;
    bp.c2.rotation = 0;
    bp.shoulder.rotation = -66;//135;

    bp.shoulder.x = -35;
    bp.shoulder.y = 20;

    //adding and layering arm parts:
    bp.addChild(bp.bicep);
    bp.c1.addChild(bp.forearm);
    bp.c2.addChild(bp.hand);

    //adding and layering arm containers
    bp.c1.addChild(bp.c2);
    bp.addChild(bp.c1);

    //shoulder goes on top
    bp.addChild(bp.shoulder);

    //adding it all onto robot
    robot.addChild(bp);

    if(flipped){
        bp.scaleX = -1.0;
        bp.scaleY = 1.0;
        bp.rotation = -64;
    }

}


function createLegs(partname,xpos,ypos,finalX,finalY){
    var sf = 1;
    if(finalX && finalY) sf = 0.75; //modify to adjust scale when part is in palette

    //bp is master container, contains two separate leg containers, each containing its own subpart containers.
    var bp = new createjs.Container();
    //bodyparts.push(bp);
    bp.x = xpos;
    bp.y = ypos;
    bp.partname = partname; //for knowing which arm/hand type it is
    //**key thing: flip left arm container horizontally
    bp.scaleX = sf;
    bp.scaleY = sf;
    //

    //left leg and right leg are containers. children of bp
    //
    //LEFT LEG:
    bp.leftleg = new createjs.Container();
    //bp.leftleg.topbone = new createjs.Bitmap(image['arm_shoulder']);
    bp.leftleg.topbone = new createjs.Bitmap(image['hip']);


    bp.leftleg.calf = new createjs.Bitmap(image['leg_calf']);
    bp.leftleg.thigh = new createjs.Bitmap(image['arm_bicep']);

    if(partname=="leg_skateboard"){
        bp.leftleg.foot = new createjs.Bitmap(image['leg_walk']);
    }
    else{
        bp.leftleg.foot = new createjs.Bitmap(image[partname]);
    }

    //lowerleg (calf) + foot container
    bp.leftleg.c1 = new createjs.Container();
    bp.leftleg.c1.regX = bp.leftleg.calf.image.height/2;
    bp.leftleg.c1.regY = bp.leftleg.calf.image.height/2;

    bp.leftleg.topbone.x = -27//8;
    bp.leftleg.topbone.y = -24//-16;
    bp.leftleg.c1.x = -10//bp.leftleg.topbone.x - 18;
    bp.leftleg.c1.y = 42//bp.leftleg.topbone.y + 58;

    bp.leftleg.thigh.y = -6;

    //foot container
    bp.leftleg.c2 = new createjs.Container();
    //unique foot container reg points
    if(partname=="leg_walk" || partname=="leg_skateboard"){
        bp.leftleg.c2.regX = bp.leftleg.foot.image.width/2 + 3;
        bp.leftleg.c2.regY = -10;
    }
    else if(partname=="leg_rollerskate"){
        bp.leftleg.c2.regX = bp.leftleg.foot.image.width/2 ;
        bp.leftleg.c2.regY = -10;
    }
    else if(partname=="leg_wheel"){
        bp.leftleg.c2.regX = bp.leftleg.foot.image.width/2 +14;
        bp.leftleg.c2.regY = -3;
    }
    else if(partname=="leg_snowshoe"){
        bp.leftleg.c2.regX = bp.leftleg.foot.image.width/2 +8;
        bp.leftleg.c2.regY = -2;
    }
    //default
    else{
        bp.leftleg.c2.regX = bp.leftleg.foot.image.width/2 ;
        bp.leftleg.c2.regY = -10;
    }
    bp.leftleg.c2.x = 45//55
    bp.leftleg.c2.y = 0

    /*
    //for rotations
    bp.leftleg is the thigh + calf + foot
    bp.leftleg.c1 is the calf + foot
    bp.leftleg.c2 is the foot
    bp.leftleg.topbone should be set last (after others set)
    */

    //start up rotations:
    bp.leftleg.rotation = 0;
    bp.leftleg.thigh.rotation = 90;
    bp.leftleg.c1.rotation = 90;
    bp.leftleg.c2.rotation = -90;
    //bp.leftleg.topbone.rotation = 90;

    //adding and layering arm parts:
    bp.leftleg.addChild(bp.leftleg.thigh);
    bp.leftleg.c1.addChild(bp.leftleg.calf);
    bp.leftleg.c2.addChild(bp.leftleg.foot);

    //adding and layering arm containers
    bp.leftleg.c1.addChild(bp.leftleg.c2);
    bp.leftleg.addChild(bp.leftleg.c1);
    //topbone goes on top
    bp.leftleg.addChild(bp.leftleg.topbone);


    //
    //RIGHT LEG:
    bp.rightleg = new createjs.Container();
    //bp.rightleg.topbone = new createjs.Bitmap(image['arm_shoulder']);
    bp.rightleg.topbone = new createjs.Bitmap(image['hip']);
    bp.rightleg.topbone.scaleX*=-1;

    //bp.rightleg.calf = new createjs.Bitmap(image['arm_forearm']);
    bp.rightleg.calf = new createjs.Bitmap(image['leg_calf']);

    bp.rightleg.thigh = new createjs.Bitmap(image['arm_bicep']);


    if(partname=="leg_skateboard"){
        bp.rightleg.foot = new createjs.Bitmap(image['leg_walk']);
    }
    else{
        bp.rightleg.foot = new createjs.Bitmap(image[partname]);
    }

    //lowerleg (calf) + foot container
    bp.rightleg.c1 = new createjs.Container();
    bp.rightleg.c1.regX = bp.rightleg.calf.image.height/2;
    bp.rightleg.c1.regY = bp.rightleg.calf.image.height/2;

    bp.rightleg.topbone.x = 10//8;
    bp.rightleg.topbone.y = -24//-16;
    bp.rightleg.c1.x = -6//bp.rightleg.topbone.x - 18;
    bp.rightleg.c1.y = 42//bp.rightleg.topbone.y + 58;

    bp.rightleg.thigh.x = 3;
    bp.rightleg.thigh.y = -6;

    //foot container
    bp.rightleg.c2 = new createjs.Container();
    //unique foot container reg points
    if(partname=="leg_walk" || partname=="leg_skateboard"){
        bp.rightleg.c2.regX = bp.rightleg.foot.image.width/2 + 3;
        bp.rightleg.c2.regY = -10;
    }
    else if(partname=="leg_rollerskate"){
        bp.rightleg.c2.regX = bp.rightleg.foot.image.width/2 ;
        bp.rightleg.c2.regY = -10;
    }
    else if(partname=="leg_wheel"){
        bp.rightleg.c2.regX = bp.rightleg.foot.image.width/2 +14;
        bp.rightleg.c2.regY = -3;
    }
    else if(partname=="leg_snowshoe"){
        bp.rightleg.c2.regX = bp.leftleg.foot.image.width/2 +8;
        bp.rightleg.c2.regY = -2;
    }
    //default
    else{
        bp.rightleg.c2.regX = bp.rightleg.foot.image.width/2 ;
        bp.rightleg.c2.regY = -10;
    }
    bp.rightleg.c2.x = 45//55
    bp.rightleg.c2.y = 0

    //start up rotations:
    bp.rightleg.rotation = 0;
    bp.rightleg.thigh.rotation = 90;
    bp.rightleg.c1.rotation = 90;
    bp.rightleg.c2.rotation = -90;
    //bp.rightleg.topbone.rotation = 90;

    //adding and layering arm parts:
    bp.rightleg.addChild(bp.rightleg.thigh);
    bp.rightleg.c1.addChild(bp.rightleg.calf);
    bp.rightleg.c2.addChild(bp.rightleg.foot);

    //adding and layering arm containers
    bp.rightleg.c1.addChild(bp.rightleg.c2);
    bp.rightleg.addChild(bp.rightleg.c1);
    //topbone goes on top
    bp.rightleg.addChild(bp.rightleg.topbone);

    //leftleg and rightleg containers are moved a certain amount from xpos/ypos center
    bp.leftleg.x  -= 20;
    bp.rightleg.x  += 36;

    if(partname=="leg_skateboard"){
        bp.skateboard = new createjs.Bitmap(image['leg_skateboard']);
        bp.skateboard.x = -95;
        bp.skateboard.y = 106;
        bp.addChild(bp.skateboard);
    }

    //adding it all to bp (leftleg on top of rightleg)
    bp.addChild(bp.rightleg);
    bp.addChild(bp.leftleg);

    robot.addChild(bp);

    //only make dragger if finalX and finalY passed in
    if(finalX && finalY){
        //storing start values
        bp.startX = bp.x;
        bp.startY = bp.y;
        bp.startR = bp.rotation;
        bp.leftleg.startR = bp.leftleg.rotation;
        bp.rightleg.startR = bp.rightleg.rotation;
        bp.leftleg.c1.startX = bp.leftleg.c1.x;
        bp.leftleg.c1.startY = bp.leftleg.c1.y;
        bp.leftleg.c1.startR = bp.leftleg.c1.rotation;

        bp.rightleg.c1.startX = bp.rightleg.c1.x;
        bp.rightleg.c1.startY = bp.rightleg.c1.y;
        bp.rightleg.c1.startR = bp.rightleg.c1.rotation;
        bp.leftleg.c2.startR = bp.leftleg.c2.rotation;
        bp.rightleg.c2.startR = bp.rightleg.c2.rotation;
        bp.sf = sf; //to ref back to tool palette sf on tool active/deactive
        bp.finalX = finalX;
        bp.finalY = finalY;

        dragger_make(bp, true);
    }

}

function createLegsJet(xpos,ypos,finalX,finalY){
    var sf = 1;
    if(finalX && finalY) sf = 0.75; //modify to adjust scale when part is in palette

    ////bp is master container, contains two separate leg containers, each containing its own subpart containers.
    var bp = new createjs.Container();
    bp.jet = new createjs.Sprite(spritesheet['leg_jet']);

    bp.jet.gotoAndStop(0);
    bp.regX = 92/2;
    bp.regY =  138/8;
    bp.x = xpos;
    bp.y = ypos;
    bp.partname = 'leg_jet'; //for knowing which arm/hand type it is
    //**key thing: flip left arm container horizontally
    bp.scaleX = sf;
    bp.scaleY = sf;

    //storing start values
    bp.startX = bp.x;
    bp.startY = bp.y;
    bp.startR = bp.rotation;
    bp.sf = sf; //to ref back to tool palette sf on tool active/deactive
    bp.finalX = finalX;
    bp.finalY = finalY-10;

    bp.addChild(bp.jet);
    robot.addChild(bp);

    dragger_make(bp, true);

}


function createHead(partname,xpos,ypos,finalX,finalY){
    var sf = 0.70; //modify to adjust scale when part is in palette

    //container for entire draggable head's various parts
    var bp = new createjs.Container();
    bp.x = xpos;
    bp.y = ypos;
    bp.scaleX = sf;
    bp.scaleY = sf;
    bp.head = new createjs.Bitmap(image['head_1']);

    bp.regX = bp.head.image.width/2;
    bp.regY = bp.head.image.height/2;

    //unique head parts
    if(partname=="head_propellor"){
        bp.appendage = new createjs.Sprite(spritesheet['head_propellor']);
        bp.appendage.gotoAndStop(2);
        bp.appendage.regX = bp.regX;
        bp.appendage.regY = bp.regY;
        bp.appendage.x = 292;
        bp.appendage.y = 0;
    }
    else if(partname=="head_umbrella"){
        bp.appendage = new createjs.Bitmap(image['head_umbrella']);
        bp.appendage.regX = bp.regX;
        bp.appendage.regY = bp.regY;
        bp.appendage.x = 27;
        bp.appendage.y = -10;
    }
    else if(partname=="head_kite"){
        bp.appendage = new createjs.Container();

        bp.top1 = new createjs.Bitmap(image['head_top1']);
        bp.top2 = new createjs.Bitmap(image['head_kite_arm']);
        bp.kite = new createjs.Bitmap(image['head_kite']);

        bp.appendage.addChild(bp.top1,bp.top2,bp.kite);

        bp.top1.regX = bp.regX;
        bp.top1.regY = bp.regY;
        bp.top1.x = 148;
        bp.top1.y = 22;
        bp.top2.x = -139;
        bp.top2.y = -70;

        bp.kite.regX = bp.regX;
        bp.kite.regY = bp.regY;
        bp.kite.x = 60;
        bp.kite.y = -10;
        bp.kite.startX = bp.kite.x;
        bp.kite.startY = bp.kite.y;
        bp.kite.finalX = -50;
        bp.kite.finalY = -30;

        bp.top2.maskshape = new createjs.Shape();
        bp.top2.maskshape.graphics.beginFill("white").drawRect(0,0,230,50);
        bp.top2.maskshape.x = 0;
        bp.top2.maskshape.y = -55;
        bp.top2.maskshape.startX = bp.top2.maskshape.x;
        bp.top2.maskshape.finalX = -120;

        bp.top2.mask = bp.top2.maskshape;
        //bp.top2.maskshape.alpha = 0.4;
        //bp.appendage.addChild(bp.top2.maskshape)

    }
    else if(partname=="head_magglass"){
        bp.appendage = new createjs.Container();

        bp.top1 = new createjs.Bitmap(image['head_top1']);
        bp.magglass = new createjs.Sprite(spritesheet['head_magglass']);
        bp.magglass.gotoAndStop(0);

        bp.appendage.addChild(bp.magglass,bp.top1);

        bp.top1.regX = bp.regX;
        bp.top1.regY = bp.regY;
        bp.top1.x = 148;
        bp.top1.y = 22;

        bp.magglass.x = -160;
        bp.magglass.y = -60;
  }
    else if(partname=="head_telescope"){
        bp.appendage = new createjs.Container();

        bp.top1 = new createjs.Bitmap(image['head_top1']);
        bp.telescope = new createjs.Sprite(spritesheet['head_telescope']);
        bp.telescope.gotoAndStop(0);

        bp.appendage.addChild(bp.telescope,bp.top1);

        bp.top1.regX = bp.regX;
        bp.top1.regY = bp.regY;
        bp.top1.x = 148;
        bp.top1.y = 22;

        bp.telescope.x = -67;
        bp.telescope.y = -44;
  }
    else if(partname=="head_lamp"){
        bp.appendage = new createjs.Container();

        bp.top1 = new createjs.Bitmap(image['head_top1']);
        bp.lamp = new createjs.Sprite(spritesheet['head_lamp']);
        bp.lamp.gotoAndStop(0);

        bp.appendage.addChild(bp.lamp,bp.top1);

        bp.top1.regX = bp.regX;
        bp.top1.regY = bp.regY;
        bp.top1.x = 148;
        bp.top1.y = 22;

        bp.lamp.x = -304;
        bp.lamp.y = -44;
  }
    else{
    }

    //

    bp.addChild(bp.head);
    bp.addChild(bp.appendage);
    stage.addChild(bp);

    //storing start values
    bp.partname = partname;
    bp.startX = bp.x;
    bp.startY = bp.y;
    bp.finalX = finalX;
    bp.finalY = finalY;
    bp.sf = sf; //to ref back to tool palette sf on tool active/deactive


    dragger_make(bp, true);
}


//##########
//creating Highlights
function createHead_Highlight(obj){

    draggercopy = new createjs.Container();

    draggercopy.scaleX = obj.scaleX;
    draggercopy.scaleY = obj.scaleY;

    draggercopy.head = new createjs.Bitmap(image['head_1']);
    draggercopy.regX = draggercopy.head.image.width/2;
    draggercopy.regY = draggercopy.head.image.height/2;


    draggercopy.partname = obj.partname; //for knowing which arm/hand type it is

    //unique head parts
    if(draggercopy.partname=="head_propellor"){
        draggercopy.appendage = new createjs.Sprite(spritesheet['head_propellor']);
        draggercopy.appendage.gotoAndStop(2);
        draggercopy.appendage.regX = draggercopy.regX;
        draggercopy.appendage.regY = draggercopy.regY;
        draggercopy.appendage.x = 292;
        draggercopy.appendage.y = -2;
    }
    else if(draggercopy.partname=="head_umbrella"){
        draggercopy.appendage = new createjs.Bitmap(image['head_umbrella']);
        draggercopy.appendage.regX = draggercopy.regX;
        draggercopy.appendage.regY = draggercopy.regY;
        draggercopy.appendage.x = 0;
        draggercopy.appendage.y = -30;
    }
    else{
    }

    //

    draggercopy.addChild(draggercopy.appendage);
    draggercopy.addChild(draggercopy.head);

    draggercopy.x = obj.x;
    draggercopy.y = obj.y;

    dhStage.addChild(draggercopy);
    dhStage.update();

}


//universal funct. that removes eventlisteners, pans tool palette to right, calls level's end function
function shiftForAnim(){
    //playSound('empty');

    //to prevent clicking of george until anims are done
    george_clickable = false;

    //remove mouse event listeners for all bodyparts
    stage.removeAllEventListeners("stagemousemove");
    stage.removeAllEventListeners("stagemousedown");

    //remove all mouse listeners on body parts
    for (var i=0;i<bodyparts.length;i++){
        var bp = bodyparts[i];
        bp.hitbox.removeAllEventListeners("click");
        bp.hitbox.removeAllEventListeners("mousedown");
        bp.hitbox.removeAllEventListeners("pressup");
        bp.hitbox.removeAllEventListeners("pressmove");
        bp.hitbox.removeAllEventListeners("rollover");
        bp.hitbox.removeAllEventListeners("rollout");
        bp.hitbox.removeAllEventListeners("mouseover");
        bp.hitbox.removeAllEventListeners("mouseout");
    }

    //palette tween done EVERYTIME for non-sandbox levels, only first time for sandbox
    if(!_sandbox){
        createjs.Tween.get(palette_divider, {loop:false})
            .to({x: palette_divider.x+360}, 750, createjs.Ease.none);

        createjs.Tween.get(palette, {loop:false})
            .to({x: palette.x+360}, 750, createjs.Ease.none);

        createjs.Tween.get(robot, {loop:false})
        .wait(200)
         .to({x: robot.x+200}, 500, createjs.Ease.none)
         .wait(500)
         .call(function(){
            //call specific anim.-- delay to allow random positive sound to finish first.
            setTimeout(function(){
                window[function_anim]();
            }, 500);

         });
    }
    //for sandbox
    else{
        //do this only ONCE, at start of sandbox anim run
        if(!_sandboxInProgress){
            _sandboxInProgress = true;

            btn_camera.visible = false;

            createjs.Tween.get(pal_right, {loop:false})
                .to({x: pal_right.x+360}, 750, createjs.Ease.none);
            createjs.Tween.get(pal_left, {loop:false})
                .to({x: pal_left.x+360}, 750, createjs.Ease.none);

            createjs.Tween.get(palette_divider, {loop:false})
                .to({x: palette_divider.x+360}, 750, createjs.Ease.none);
            createjs.Tween.get(palette_bg, {loop:false})
                .to({x: palette_bg.x+360}, 750, createjs.Ease.none);
            createjs.Tween.get(palette, {loop:false})
                .to({x: palette.x+360}, 750, createjs.Ease.none);

            createjs.Tween.get(pal_mask, {loop:false})
                .to({x: pal_mask.x+360}, 750, createjs.Ease.none);

            createjs.Tween.get(robot, {loop:false})
            .wait(200)
             .to({x: robot.x+200}, 500, createjs.Ease.none)
             .wait(500)
             .call(function(){
                sandboxCount==0;
                //call specific anim.
                window[function_anim]();
             });

        }

        else{
            sandboxCount++;
            window[function_anim]();
        }
    }
}


//once all holes needing parts are filled, snapsback ALL wrong parts
function snapbackWrong(singlepart){
    //**console.log("returning wrong parts");

    if(singlepart){
        //**console.log('snapping back SINGLE PART');

        //singlepart.x = singlepart.startX - palette.x;
        //singlepart.y = singlepart.startY;
        singlepart.scaleX = singlepart.scaleY = singlepart.sf;
        singlepart.rotation = singlepart.startR;
        if(singlepart.partname.indexOf('hand')!=-1){
            singlepart.c1.rotation = singlepart.c1.startR;
            singlepart.c2.rotation = singlepart.c2.startR;
            singlepart.bicep.rotation = singlepart.bicep.startR;
            singlepart.shoulder.rotation = singlepart.shoulder.startR;
            singlepart.addChild(singlepart.shoulder);
                    robot.shoulder_left.visible = false;
                    robot.shoulder_right.visible = false;
        }
        if(singlepart.partname.indexOf('leg')!=-1){
            if(singlepart.leftleg){
                singlepart.leftleg.rotation = singlepart.leftleg.startR;
                singlepart.leftleg.c1.rotation = singlepart.leftleg.c1.startR;
                singlepart.leftleg.c2.rotation = singlepart.leftleg.c2.startR;
                singlepart.rightleg.rotation = singlepart.rightleg.startR;
                singlepart.rightleg.c1.rotation = singlepart.rightleg.c1.startR;
                singlepart.rightleg.c2.rotation = singlepart.rightleg.c2.startR;
                    singlepart.leftleg.addChild(singlepart.leftleg.topbone);
                    singlepart.rightleg.addChild(singlepart.rightleg.topbone);
                    robot.topbone_left.visible = false;
                    robot.topbone_right.visible = false;
            }

        }
        robot.userchoice[singlepart.holder] = "";
        singlepart.holder = -1;

        singlepart.hitbox.x = -1* palette.x;
        //fixing hitbox positioning for parts on palette pages other than 1
        if(_sandbox && singlepart.partname.indexOf('hand')!=-1){
            //**console.log('sandbox hand fix')
            singlepart.hitbox.x = -516;
        }
        if(_sandbox && singlepart.partname.indexOf('leg')!=-1){
            //**console.log('sandbox leg fix')
            singlepart.hitbox.x = -516;
        }
        singlepart.hitbox.y = 0;
        palette.addChild(singlepart);
        palette.addChild(singlepart.hitbox);
        singlepart.hitbox.visible = true;

        return;
    }
    else{
        //**console.log("returning all WRONG dragged bodyparts");
        for(var i=0;i<bodyparts.length;i++){
            //if(robot.correct.indexOf(bodyparts[i].image.id) ==-1 ){
            if(robot.correct.indexOf(bodyparts[i].partname) ==-1 ){
                var bp = bodyparts[i];
                bp.x = bodyparts[i].startX - palette.x;
                bp.y = bodyparts[i].startY;
                bp.scaleX = bp.scaleY = bp.sf;
                bp.rotation = bp.startR;
                if(bp.partname.indexOf('hand_')!=-1){
                    bp.bicep.rotation = bp.bicep.startR;
                    bp.c1.rotation = bp.c1.startR;
                    bp.c2.rotation = bp.c2.startR;
                    bp.shoulder.rotation = bp.shoulder.startR;
                    bp.addChild(bp.shoulder);
                        robot.shoulder_left.visible = false;
                        robot.shoulder_right.visible = false;
                }
                if(bp.partname.indexOf('leg')!=-1){
                    if(bp.leftleg){
                        bp.leftleg.rotation = bp.leftleg.startR;
                        bp.leftleg.c1.rotation = bp.leftleg.c1.startR;
                            bp.leftleg.c1.x = bp.leftleg.c1.startX;
                            bp.leftleg.c1.y = bp.leftleg.c1.startY;
                        bp.leftleg.c2.rotation = bp.leftleg.c2.startR;
                        bp.rightleg.rotation = bp.rightleg.startR;
                        bp.rightleg.c1.rotation = bp.rightleg.c1.startR;
                        bp.rightleg.c2.rotation = bp.rightleg.c2.startR;
                            bp.leftleg.addChild(bp.leftleg.topbone);
                            bp.rightleg.addChild(bp.rightleg.topbone);
                        robot.topbone_left.visible = false;
                        robot.topbone_right.visible = false;
                    }
                }
                robot.userchoice[bp.holder] = "";
                bp.holder = -1;
                bp.hitbox.x = -1* palette.x;
                bp.hitbox.y = 0;
                palette.addChild(bp);
                palette.addChild(bp.hitbox);
                bp.hitbox.visible = true;

                bp.hitbox.addEventListener("mousedown", draggerhitbox_mousedown);
                bp.hitbox.addEventListener("pressmove", draggerhitbox_pressmove);
                bp.hitbox.addEventListener("mouseover", cursorPointer);
                bp.hitbox.addEventListener("rollover", cursorPointer);
                bp.hitbox.addEventListener("mouseout", cursorDefault);
                bp.hitbox.addEventListener("rollout", cursorDefault);

            }
        }
    george_bottom.gotoAndPlay("confused_reverse");
    }

    //only check if needed parts filled in regular levels
    if(!_sandbox) checkpartsfilled();

    //allow george click again
    george_clickable = true;
}


//universal funct. kill level, move to next (reusable by all levels)
function kill_level(e){

    if(robot.userchoice.length>1){
        choiceIdx++;
        if(choiceIdx<robot.userchoice.length){
            checkparts(choiceIdx);
            return;
        }
    }

    //**console.log('kill level ' + level)

    //fading out
    fadeBox.alpha = 0;
    stage.addChild(fadeBox);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:1}, 1000, createjs.Ease.none)
     .call(function(){

        //remove ALL tweens once screen is black
        createjs.Tween.removeAllTweens();

        //remove level bg
        stage.removeChild(bg_level_left);
        bg_level_left = null;

        //remove /untween level's bodyparts
        for(var i=0;i<bodyparts.length;i++){
            //createjs.Tween.removeTweens(bodyparts[i]);
            stage.removeChild(bodyparts[i]);
            bodyparts[i] = null;
        }

        //remove /untween bgloopers
        for(var i=0;i<bgloopers.length;i++){
            //createjs.Tween.removeTweens(bgloopers[i]);
            stage.removeChild(bgloopers[i]);
            bgloopers[i] = null;
        }

        stage.removeAllChildren();
        stage.addChild(fadeBox);
        stage.addChild(canvasblueborder);

        staticbg = null;
        bgA = null;
        bgB = null;
        bg_level_left = null;

        bodyparts = [];
        bgloopers = [];

        dragHighlight = null;

        //level ++;
        nlevel++; //= levels.indexOf(level) + 1;

        if(nlevel==levels.length){
            //nlevel=0;
            //**console.log('all levels done... goto sandbox!');
            beginSandbox();
            return;
        }

        //**console.log('index to play: ' + nlevel);
        //**console.log('level to play: ' + levels[nlevel]);
        level = levels[nlevel][0];
        function_connectparts = "connectparts_" + levels[nlevel][1];
        function_createparts = "createparts_" + levels[nlevel][0];
        function_anim = "anim_" + levels[nlevel][2];

        createlevel(levels[nlevel][3]);

     });

}

function returnto_level(e){
    //**console.log('returnto_level');

    if(_sandbox){
        //**console.log('sandbox! check for and play next anim!');
        sandboxNext();
        return;
    }
    else if(robot.userchoice.length>1){
        choiceIdx++;
        if(choiceIdx<robot.userchoice.length){
            checkparts(choiceIdx);
            return;
        }
    }

    //stop all tweens
    createjs.Tween.removeAllTweens();

    //remove /untween bgloopers
    for(var i=0;i<bgloopers.length;i++){
        //createjs.Tween.removeTweens(bgloopers[i]);
        stage.removeChild(bgloopers[i]);
        bgloopers[i] = null;
    }

    //readd bodyparts to stage, tween back into place
    for(var i=0;i<bodyparts.length;i++){
        var bp = bodyparts[i];
        //return a body part if it wasn't a userchoice
        if(robot.userchoice.indexOf(bp.partname) == -1){
            //createjs.Tween.removeTweens(bp);
            //stage.addChild(bp);
            //stage.addChild(bp.hitbox);
            bp.hitbox.addEventListener("mousedown", draggerhitbox_mousedown);
            bp.hitbox.addEventListener("pressmove", draggerhitbox_pressmove);
            bp.hitbox.addEventListener("mouseover", cursorPointer);
            bp.hitbox.addEventListener("rollover", cursorPointer);
            bp.hitbox.addEventListener("mouseout", cursorDefault);
            bp.hitbox.addEventListener("rollout", cursorDefault);

            bp.hitbox.visible = true;
        }
        //if a connected bodypart is CORRECT, reset it to starting state for re-animation
        else{

        //bp is set to match different parts lined up in robot.userchoice, depending on sandIdx
            switch(bp){
                case leftarm: bp = leftarm; bp.x = bp.xL; bp.y = bp.yL; bp.rotation = -1*bp.startR; break; /*bp.shoulder.rotation = -45; bp.shoulder.x = -29; bp.shoulder.y = 10;*/ break;
                case rightarm: bp = rightarm; bp.x = bp.xR; bp.y = bp.yR; bp.rotation = bp.startR; break;/*bp.shoulder.rotation = -45; bp.shoulder.x = -29; bp.shoulder.y = 10;*/ break;
                case legs: bp = legs; bp.x = bp.finalX; bp.y = bp.finalY; break;
                case head: bp = head; break;
            }

            if(bp.partname.indexOf('hand_')!=-1){

                bp.bicep.rotation = bp.bicep.startR;
                bp.c1.rotation = bp.c1.startR;
                bp.c2.rotation = bp.c2.startR;
                //bp.shoulder.rotation = bp.shoulder.startR;
                bp.shoulder.visible = true;
                bp.addChild(bp.shoulder);
                    robot.shoulder_left.visible = false;
                    robot.shoulder_right.visible = false;
            }
            if(bp.partname.indexOf('leg')!=-1){
                if(bp.leftleg){
                    bp.leftleg.rotation = bp.leftleg.startR;
                    bp.leftleg.c1.rotation = bp.leftleg.c1.startR;
                    bp.leftleg.c2.rotation = bp.leftleg.c2.startR;
                    bp.rightleg.rotation = bp.rightleg.startR;
                    bp.rightleg.c1.rotation = bp.rightleg.c1.startR;
                    bp.rightleg.c2.rotation = bp.rightleg.c2.startR;
                        //bp.leftleg.addChild(bp.leftleg.topbone);
                        //bp.rightleg.addChild(bp.rightleg.topbone);
                    //robot.topbone_left.visible = false;
                    //robot.topbone_right.visible = false;
                }
            }
        }

    }

    if(staticbg){
    createjs.Tween.get(staticbg, {loop:false})
        .to({alpha:0}, 500, createjs.Ease.none)
        .call(function(){
            stage.removeChild(staticbg);
            staticbg=null;
        });
    }

    if(bgA){
        createjs.Tween.get(bgA, {loop:false})
            .to({alpha:0}, 500, createjs.Ease.none)
            .call(function(){
                stage.removeChild(bgA);
            });
    }
    if(bgB){
        createjs.Tween.get(bgB, {loop:false})
            .to({alpha:0}, 500, createjs.Ease.none)
            .call(function(){
                stage.removeChild(bgB);
            });
    }

    if(legs.mask) legs.mask = null;

    createjs.Tween.get(palette_divider, {loop:false})
        .to({x: palette_divider.x-360}, 750, createjs.Ease.none);
    createjs.Tween.get(palette, {loop:false})
        .to({x: palette.x-360}, 750, createjs.Ease.none);

    createjs.Tween.get(robot, {loop:false})
     .to({x: robot.x-200}, 750, createjs.Ease.none)
     .call(function(){
        snapbackWrong(false);
     });

    choiceIdx=0;

    //if twoarms:
    if(levels[nlevel][1]=='arms'){
        stage.addChild(bg_level_left);
        stage.addChild(instruct_text);
        stage.addChild(george_bottom);
        stage.addChild(robot);
        stage.addChild(divider1);
        stage.addChild(palette, palette_divider);
        stage.addChild(canvasblueborder);
    }

    //random "help george..." audio before repeating level's instruction
    setTimeout(function(){
        var r = randomInt(1,2);
        if(r==1) playSound('help_george_build', play_lvl_sound);
        else playSound('help_george_make', play_lvl_sound);
    }, 500);

}


function sandboxNext(){
     //stop all tweens
    createjs.Tween.removeAllTweens();

    //remove /untween bgloopers
    for(var i=0;i<bgloopers.length;i++){
        //createjs.Tween.removeTweens(bgloopers[i]);
        stage.removeChild(bgloopers[i]);
        bgloopers[i] = null;
    }

    var bp;
    //bp is set to match different parts lined up in robot.userchoice, depending on sandIdx
    switch(current_sandboxpart){
        case 0: bp = leftarm; bp.x = bp.xL; bp.y = bp.yL; bp.rotation = -1*bp.startR; break; /*bp.shoulder.rotation = -45; bp.shoulder.x = -29; bp.shoulder.y = 10;*/ break;
        case 1: bp = rightarm; bp.x = bp.xR; bp.y = bp.yR; bp.rotation = bp.startR; break;/*bp.shoulder.rotation = -45; bp.shoulder.x = -29; bp.shoulder.y = 10;*/ break;
        case 2: bp = legs; bp.x = bp.finalX; bp.y = bp.finalY; break;
        case 3: bp = head; break;
    }

//restore just animated part to orig rotations
    //bp.x = bodyparts[i].startX - palette.x;
    //bp.y = bodyparts[i].startY;
    //bp.scaleX = bp.scaleY = bp.sf;


    if(bp.partname.indexOf('hand_')!=-1){

        bp.bicep.rotation = bp.bicep.startR;
        bp.c1.rotation = bp.c1.startR;
        bp.c2.rotation = bp.c2.startR;
        //bp.shoulder.rotation = bp.shoulder.startR;
        bp.shoulder.visible = true;
        bp.addChild(bp.shoulder);
            robot.shoulder_left.visible = false;
            robot.shoulder_right.visible = false;
    }
    if(bp.partname.indexOf('leg')!=-1){
        if(bp.leftleg){
            bp.leftleg.rotation = bp.leftleg.startR;
            bp.leftleg.c1.rotation = bp.leftleg.c1.startR;
            bp.leftleg.c2.rotation = bp.leftleg.c2.startR;
            bp.rightleg.rotation = bp.rightleg.startR;
            bp.rightleg.c1.rotation = bp.rightleg.c1.startR;
            bp.rightleg.c2.rotation = bp.rightleg.c2.startR;
                //bp.leftleg.addChild(bp.leftleg.topbone);
                //bp.rightleg.addChild(bp.rightleg.topbone);
            //robot.topbone_left.visible = false;
            //robot.topbone_right.visible = false;
        }
    }

    sandIdx++;

    runrobot_sandbox();
}
/*
function bodyparts_goback(e){
    //**console.log('go back@!');
}
*/

//fades shape fadeBox from alpha 1 to alpha 0, then removes it from stage
function fadeIn(){
    //fading in to reveal the beginning:
    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:0}, 500, createjs.Ease.none)
     .call(function(){
        stage.removeChild(fadeBox);
     });
}


//mouse drag related functions:

//object that gets mouseEvent listeners. snapback is optional bool whether to allow snapback on release
function dragger_make(obj, snapback){
    ////**console.log('draggermake: obj is: ' + obj)
    bodyparts.push(obj);

    obj.hitbox = new createjs.Shape();
    obj.hitbox.owner = obj;

    var rectX, rectY, rectW, rectH;
    //assuming hitbox of 130 width and 120 height for hand
    if(obj.partname.search('hand_')!=-1){
        rectX = obj.x - 30;
        rectY = obj.y - 60;
        rectW = 130;
        rectH = 120;
    }
    if(obj.partname.search('leg_')!=-1){
        rectX = obj.x - 55;
        rectY = obj.y - 17;
        rectW = 130;
        rectH = 130;
    }
    if(obj.partname.search('head_')!=-1){
        rectX = obj.x - 66;
        rectY = obj.y - 80;
        rectW = 130;
        rectH = 130;
    }

    obj.hitbox.graphics.beginFill("white").drawRect(rectX,rectY,rectW,rectH);
        obj.hitbox.alpha = 0.01;

    //**console.log('creating dragger: '+ bodyparts.indexOf(obj))

    obj.x -= palette.x;
    obj.hitbox.x -= palette.x;
    palette.addChild(obj);
    palette.addChild(obj.hitbox);

    //mouse eventlisteners on dragger's hitbox, that accept input and then pass onto dragger's functions
    obj.hitbox.addEventListener("mousedown", draggerhitbox_mousedown);
    obj.hitbox.addEventListener("pressmove", draggerhitbox_pressmove);
    obj.hitbox.addEventListener("mouseover", cursorPointer);
    obj.hitbox.addEventListener("rollover", cursorPointer);
    obj.hitbox.addEventListener("mouseout", cursorDefault);
    obj.hitbox.addEventListener("rollout", cursorDefault);
    //

    //.holder stores the index of .userchoice that a part is dragged onto (the 'slot' that a part fills up)
    obj.holder = -1;

    obj.snapback = false;

    if(snapback){
        obj.snapback = true;
        if(!obj.startX) obj.startX =  obj.x;
        if(!obj.startY) obj.startY = obj.y;
    }
}



//hitbox around draggers can accept mouse input, but then pass onto regular dragger mouseEvent functions
function draggerhitbox_mousedown(e){
    //**console.log('draggerhitbox_mousedown!!!');
    debugtext.text = "draggerhitbox_mousedown";

    if(!isTouch){
        e.target.removeEventListener("mousedown", draggerhitbox_mousedown);
        e.target.addEventListener("pressup", draggerhitbox_stickyDragOn);
    }

    //e.target.visible = false;

    var obj = {};
    obj.target = e.target.owner;

    ////**console.log("obj.target.partname : " + obj.target.partname);

    //obj.stageX = e.stageX;
    //obj.stageY = e.stageY;

    obj.target.x = e.stageX;

    obj.stageX = e.stageX - palette.x;
    obj.stageY = e.stageY;

    dragger_mousedown(obj);
}

//on mousedown
function dragger_mousedown(e){
    //**console.log('dragger_mousedown');
    debugtext.text = "dragger_mousedown";
    //stage.removeAllEventListeners("stagemousemove");
    //stage.removeAllEventListeners("stagemousedown");

    addGlow(e.target);

    robot.userchoice[e.target.holder]="";
    e.target.holder = -1;
    //**console.log("e.target.holder is :" + e.target.holder)

    //set offset here on mousedown, to be used on dragging in pressMove
    e.target.offsetX = e.stageX - e.target.x;
    e.target.offsetY = e.stageY - e.target.y;

    //make topmost:
    stage.addChild(e.target);

    if(isTouch){
        sticky = e.target;

        e.target.hitbox.removeEventListener("pressmove", draggerhitbox_pressmove);

        stage.addEventListener("pressmove", touch_stagemove);

        //Why? this fires too soon on mobile (Chrome for Android)...
        setTimeout(function(){
            stage.addEventListener("pressup", touch_stagemouseup);
        }, 200);

    }

}

//touch_stagemove
function touch_stagemove(e){
    if(sticky==-1){
        debugtext.text = "touch_stagemove w/o sticky";
        return;
    }

    //**console.log('touch_stagemove');
    debugtext.text = "touch_stagemove";


    sticky.x = e.stageX //- sticky.offsetX;
    sticky.y = e.stageY //- sticky.offsetY;

}

function touch_stagemouseup(e){
    //**console.log('touch_stagemouseup');
    debugtext.text = "touch_stagemouseup";

    stage.removeEventListener("pressmove", touch_stagemove);
    stage.removeEventListener("pressup", touch_stagemouseup);

    var obj = {};
    obj.target = sticky;

    obj.stageX = e.stageX;
    obj.stageY = e.stageY;

    dragger_mouserelease(obj);

}

function draggerhitbox_stickyDragOn(e){
    //**console.log('draggerhitbox_stickyDragOn');
    debugtext.text = "draggerhitbox_stickyDragOn";

    e.target.removeEventListener("mousedown", draggerhitbox_mousedown);

    var obj = {};
    obj.target = e.target.owner//parent.obj;


    obj.stageX = e.stageX;
    obj.stageY = e.stageY;

    dragger_stickyDragOn(obj);
}

function draggerhitbox_pressmove(e){
    //**console.log('draggerhitbox_pressmove');
    debugtext.text = "draggerhitbox_pressmove";


    e.target.removeEventListener("pressup", draggerhitbox_stickyDragOn);
    e.target.addEventListener("pressup", draggerhitbox_mouserelease);

    var obj = {};
    obj.target = e.target.owner//parent.obj;

    //obj.stageX = e.stageX;
    //obj.stageY = e.stageY;

    obj.stageX = e.stageX - palette.x;
    obj.stageY = e.stageY;

    dragger_pressmove(obj);
}


//pressMove (drag-based move)
function dragger_pressmove(e){
    //**console.log('dragger_pressmove');
    debugtext.text = 'dragger_pressmove';

    e.target.removeAllEventListeners("click");
    //e.target.addEventListener("pressup", draggerhitbox_mouserelease); //need to fix.
    if(isTouch){
        stage.removeEventListener("stagemousemove", touch_stagemove);
        sticky.hitbox.removeEventListener("pressup", touch_stagemouseup);
    }

    e.target.x = e.stageX - e.target.offsetX;
    e.target.y = e.stageY - e.target.offsetY;

}



function draggerhitbox_mouserelease(e){
    //**console.log('draggerhitbox_mouserelease');
    debugtext.text = 'draggerhitbox_mouserelease';

    var obj = {};
    obj.target = e.target.owner;//parent.obj;

    obj.stageX = e.stageX;
    obj.stageY = e.stageY;

    //stage.addChild(e.target);

    dragger_mouserelease(obj);
}

//on mouse release -- drop the dragged object
function dragger_mouserelease(e){
    //**console.log("dragger_mouserelease");

    sticky = -1;
    debugtext.text = 'dragger_mouserelease';

    //e.target.addEventListener("click", dragger_stickyDragOn);

    e.target.hitbox.visible = true;

    //hit test with bodytarget:
    var pt = e.target.localToLocal(e.target.regX, e.target.regY, bodytarget);
    if (bodytarget.hitTest(pt.x, pt.y)) {
        //**console.log('-----');
        //**console.log('successful hit!');

        removeGlow(e.target);
        window[function_connectparts](e.target, e.stageX, e.stageY);
    }
    else{
        //e.target.holder = "";
        for(var i=0;i<robot.userchoice.length;i++){
            //if(robot.userchoice[i] == e.target.image.id){
            if(robot.userchoice[i] == e.target.partname){
                //**console.log('clearing robot.userchoice[' + i + ']');
                robot.userchoice[i] = "";
                robot.removeChild(e.target);
            }
            if(!_sandbox) checkpartsfilled();
        }
        e.target.x = e.target.startX - 516;//palette.x;
        e.target.y = e.target.startY;
        removeGlow(e.target);

        if(!isTouch){
            e.target.addEventListener("click", dragger_stickyDragOn);
        }

    }
}


//


//beginning sticky click if its a complete mousedown and up
function dragger_stickyDragOn(e){
    //**console.log('dragger_stickyDragOn');
    debugtext.text = "dragger_stickyDragOn";

    if(stickyPrev == e.target){
        stickyPrev = -2;
        sticky = -1;
        //**console.log('repeat sticky try');
        return;
    }

    sticky = e.target;
    if(sticky.hitbox) sticky.hitbox.visible = false;
    //**console.log('sticky ON! ' + sticky);


    robot.userchoice[sticky.holder]="";
    sticky.holder = -1;

    if(dragHighlight==null) addGlow(sticky);

    sticky.removeAllEventListeners("click");
    sticky.removeAllEventListeners("mousedown");
    sticky.removeAllEventListeners("pressup");
    sticky.removeAllEventListeners("pressmove");

    //set offset here on mousedown, to be used on dragging in pressMove
    e.target.offsetX = e.stageX - e.target.x;
    e.target.offsetY = e.stageY - e.target.y;

    stage.addEventListener("stagemousemove", stickyDragMove);
    stage.addEventListener("stagemousedown", stickyDragOff);
}

function stickyDragOff(e){
    //**console.log("stickyDragOff");
    debugtext.text = "stickyDragOff";

    //removeGlow(sticky);

    stage.removeAllEventListeners("stagemousemove");
    stage.removeAllEventListeners("stagemousedown");

    //hit test with bodytarget:
    var pt = sticky.localToLocal(sticky.regX, sticky.regY, bodytarget);
    if (bodytarget.hitTest(pt.x, pt.y)) {
        //**console.log('-----');
        //**console.log('successful hit!');

        removeGlow(sticky);
        window[function_connectparts](sticky, e.stageX, e.stageY);

        return;
    }

    else{
        //**console.log('snapping back to palette');
        //if(sticky.x != sticky.startX || sticky.y != sticky.startY){
            sticky.x = sticky.startX;
            sticky.y = sticky.startY;

            for(var i=0;i<robot.userchoice.length;i++){
                if(robot.userchoice[i]==""){
                    //**console.log('there still an empty slot to fill.');
                    if(!_sandbox) checkpartsfilled();
                }
            }

        //}
    }

    var stickytemp = sticky;
    sticky = -1;
    stickyPrev = -2;

    stage.addChild(stickytemp);

    //need slight delay (10ms)
    setTimeout(function(){
        stickyPrev = sticky;
        /*
        stickytemp.addEventListener("click", dragger_stickyDragOn);
        stickytemp.addEventListener("mousedown", dragger_mousedown);
        stickytemp.addEventListener("pressup", dragger_mouserelease);
        stickytemp.addEventListener("pressmove", dragger_pressmove);
        */
        stickytemp.hitbox.visible = true;
        removeGlow(stickytemp);
    }, 10);
}


//sticky-click move
function stickyDragMove(e){
    //**console.log('stickyDragMove');
    debugtext.text = "stickyDragMove";

    sticky.x = e.stageX - sticky.offsetX;
    sticky.y = e.stageY - sticky.offsetY;


}


//called by events or on its own to make cursor a hand
function cursorPointer(e){
    document.body.style.cursor='pointer';
}
//called by events or on its own to make cursor its default
function cursorDefault(e){
    document.body.style.cursor='default';
}

//using BlurFilter and ColorFilter on enlarged clone of dragged object to simulate a glow!
//Shadow(color. offsetX, offsetY, blur)
//ColorFilter ( [redMultiplier=1]  [greenMultiplier=1]  [blueMultiplier=1]  [alphaMultiplier=1]  [redOffset=0]  [greenOffset=0] [blueOffset=0]  [alphaOffset=0] )
//BlurFilter ( [blurX=0]  [blurY=0]  [quality=1]
function addGlow(obj){
    //**console.log("ADDING GLOW! for " + obj.partname);

    //remove pressup/mouserelease event from obj's hitbox
    obj.hitbox.removeEventListener("pressup", draggerhitbox_mouserelease);

    //hiding all hitboxes
    for (var i=0;i<bodyparts.length;i++){
        bodyparts[i].hitbox.visible = false;
    }

    if(obj.scaleX<0) obj.scaleX = -1;
    else obj.scaleX = 1;

    obj.scaleY = 1;
    stage.addChild(obj);

}

function removeGlow(obj){
    //**console.log('removeGLOW!!!');

    //obj.scaleX = obj.sf * -1;
    obj.scaleX = obj.sf;
    obj.scaleY = obj.sf;
    obj.rotation = obj.startR;

    //stage.addChild(obj);
    //stage.addChild(obj.hitbox);

    //**console.log('this should be when restoring the bodypart hitbox original x/y')
    obj.hitbox.x = 0;
    obj.hitbox.y = 0;

    obj.x = obj.startX - 516;
    obj.hitbox.x -= 516;
    obj.y = obj.startY;

    palette.addChild(obj);
    palette.addChild(obj.hitbox);

    if(_sandbox){
        if(leftarm.shoulder) leftarm.addChild(leftarm.shoulder);
        if(rightarm.shoulder) rightarm.addChild(rightarm.shoulder);

        if(legs.leftleg){
            legs.leftleg.addChild(legs.leftleg.topbone);
            legs.rightleg.addChild(legs.rightleg.topbone);
        }

    }

    //restore mousedown to initiate stickydrag AFTER a short amount of time (so obj can be dropped in place on robot without starting sticky drag)
    setTimeout(function(){
        //**console.log('restoring recent obj hitbox mousedown')
        obj.hitbox.addEventListener("mousedown", draggerhitbox_mousedown);
        //showing all hitboxes
        for (var i=0;i<bodyparts.length;i++){
            bodyparts[i].hitbox.visible = true;
        }

    },200);
}


function testPic(){
    dhStage.removeAllChildren();
    dhStage.update();

    pic_whitebg = new createjs.Shape();
    pic_whitebg.graphics.beginFill("white").drawRect(0,0, html5game.width, html5game.height);

    pic_bg = new createjs.Bitmap(image['saveimg_bg']);

    stage.addChild(pic_whitebg, robot);


    setTimeout(function(){

        sgrab = new createjs.Bitmap(html5game);
        //var bmp = html5game.toDataURL("image/png");

        sgrab.sourceRect = new createjs.Rectangle(
            0,
            0,
            html5game.width,
            html5game.height
        );


        dhStage.addChild(pic_whitebg, sgrab, pic_bg);
        sgrab.scaleX = sgrab.scaleY = 0.7;
        sgrab.x = 250;
        sgrab.y = 0;
        dhStage.update();

        sgrabcode = dhStage.toDataURL("image/png");

        //**console.log("img encode is: ");
        //**console.log(sgrabcode);

        //**OPEN IMG IN A NEW TAB!

        //when done:
        dhStage.removeAllChildren();
        dhStage.update();

        stage.removeChild(pic_whitebg);
        pic_whitebg=null;
        pic_bg=null;

        OpenInNewTab(sgrabcode);

    }, 250);

}


function OpenInNewTab(url)
{
    playSound('camera');

    //open png file in a new tab (user has to manually save image file)
    var win=window.open(url, '_blank');
    win.focus();

    //force download of file (by mimicking an unknown file type)
    //var fin = url.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
    //window.open(fin);

}


//easeljs 0.7 ticker accepts event
function main_ticker(event){

    stage.update();
}



//*****

//HELPER FUNCTIONS:
// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
  var rest = this.slice((to || from) + 1 || this.length);
  this.length = from < 0 ? this.length + from : from;
  return this.push.apply(this, rest);
};

//Array indexOf: Returns the index of the found element.
Array.prototype.indexOf = function(elt /*, from*/)
{
    var len = this.length;

    var from = Number(arguments[1]) || 0;
    from = (from < 0)
         ? Math.ceil(from)
         : Math.floor(from);
    if (from < 0)
      from += len;

    for (; from < len; from++)
    {
      if (from in this &&
          this[from] === elt)
        return from;
    }
    return -1;
};

// get random Int
function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random num
function randomNum (min, max) {
    return Math.random() * (max - min) + min;
}