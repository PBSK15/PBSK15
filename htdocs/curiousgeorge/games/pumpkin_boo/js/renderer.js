//Pumpkin Boo! HTML 5 Game (CreateJS [easelJS, tweenJS, preloadJS] + SoundManager2)
//by Bharat Battu, WGBH Educational Foundation
//***********************


//using Preloader- image[] holds unique/single instances of each bitmap image as Image objects
//preloaded ONCE as Image() into image[id] (id is the filename (minus file ext))
    //for level-defining tilesheets ONLY:  numbered array indices (per level) are set to equal the single instance of each image[id] Image().
    //so each level uses the same Image, which is loaded just once.
var image = [];
var spritesheet = [];

//preloader vars
var pl_outer = "#00546e";
var pl_inner = "#3698c5";
var pl_bg = "#fed601";
var pl_width = 400;
var pl_height = 60;
var pl_radius = 150;
var pl_x = html5game.width/2 - pl_width/2;
var pl_y = 382;

//controls
doUP = false;
doDOWN = false;
doLEFT = false;
doRIGHT = false;

var gamemask = new createjs.Shape();
gamemask.graphics.beginFill("white").drawRect(8,8, html5game.width-15, html5game.height-15);


_moving = false; //bool true when hero is moving (tweening from one tile to another). used to prevent keypress during movement
_scared = false; //bool true when hero first contacts enemy (checkHurt), beginning scared running. prevents checkHurt from running repeatedly
walkpause = 100; //ms time pause between walk movements (per tile)
_jumping = false;

dPadHeight = 160;
//

var to; //var to hold timeout timers (can be cleared via clearTimeout(to);)
var sndto; //var to hold SOUND related timeout timers;

var TILESIZE = 48; //desired size of each tile-- EVERYTHING IS SCALED BASED OFF THIS. will scale each tile from tile set to fit this.

var sFactor = 1.0; // based on TILESIZE/tileset's tilewidth. scale factor that tile sizes from tileset, and x/y movement of hero and enemies.
//** example: tileset with 32px tilewidth will have sFactor of 1.0 (as usual). tileset with 16px tilewidth will have sFactor of 2.0

//2D array that holds each level tile (BitmapAnim), defined via layer 'level': [col][row] (LIKE AN EXCEL SPREADSHEET, A1, A2)
//all tiles initially are open (.wall = false) 'walls' layer determines which are impassible (.wall=true)
var tiles = [];

//array that holds any tiles that have data in their 'exitwall' layer from TILED. these tiles are "opened" (hidden and .wall set to true) when pumpkins all collected
var exitwall = [];

var nROWS = 0; //# rows (per given level)
var nCOLS = 0; //# cols (per given level)
var lvl_width=0;
var lvl_height=0;


var stage;
var mapData;
var fadeBox;

var _active = false; //to allow/disallow keyinput
var lvl = 0; //lvl indx in levels[] (global int that changes on level change, or tap/click on lvl select screen)

var endTile; //tile that wins level on contact


//containers: lvlContainer is main container that holds everything and pans.
//lvlStatic holds just static level terrain as bottomost child of lvlContainer. CACHE lvlStatic
var lvlContainer, lvlStatic;
//canWidthMax and canHeightMax determine max html5game.dimensions. any levels larger in either dimension have panning enabled in that dimension
var canWidthMax = 900;
var canHeightMax = 506;

//player character
hero = {};
hero_speed_ORIG = 600; // CONSTANT: default # ms to move (tween) from one tile to next. defaulting to 300ms
hero_speed = hero_speed_ORIG; //hero_speed is what player currently moves at, can be changed via owerups / hazards
scared_speed = hero_speed_ORIG / 3; //default speed for scared running
scared_amount = 5; //max/default # of tiles hero runs in opp. direction when scared. reduced by 1 as needed when wall(s) fall in path

offsetX = {};
offsetY = {};
currentCol = {};
currentRow = {};
currentTile = {};
prevTile = {};

//global vars that equal tile row/column values *indices in tiles[][], set and used in hero movement (checkMove_v/checkMove_v, scared_run() )
//moveToX and moveToY are for hero character movement. panToX, and panToY are for camera/view panning (lvlContainer movement)
moveToX = {};
moveToY = {};
panToX = {};
panToY = {};


//COLLECTABLES:
// pumpkin-- exit activated only once all pumpkins collected (score reset to 0 on every lvl start)
var pumpkins = [];
var score_pumpkins = 0;
var next_pkin = -1; //var that holds next pumpkin's index# in pumpkins[] IF IT IS OFFSCREEN. used to find when offscreen is no longer offscreen
var next_pkin_dir = "";
var leafpiles = [];
var current_leafpile={};
var thebunny; //holds the level's SINGLE bunny
var bunnypeek = 21; //amount of pixels bunny peeks above leafpile (so not hidden). undone once bunny_leafpile is opened
var bunny_leafpile; //the leafpile that holds thebunny

var levelaborted = false; //bool set to false at level start. only set to true if 'back to menu' used to go back to lvl select. (prevents reward screen from showing)

var hud_pumpkins = [];
var hud_ribbons = [];
var indicatorX = 200;
var indicatorY = html5game.height-70;
var color_hudstroke = "#015674";
var color_hudfill = "#3695c7";
var score_pumpkins_txt;

//**These are the 4 containers to show hide as offscreen indicators
var offscreenLEFT;
var offscreenRIGHT;
var offscreenUP;
var offscreenDOWN;

//ENEMIES:
var enemies = []; //2D array holding each enemy's path tiles coords
var strikes = 0; //number of enemy collisions, reset at each level start. if strikes=3, have enemies move to start position and STAY THERE

//FRIENDS (moving objects, like bunnies, to collect)
var friends = [];

var rewardscreen; //var holding the bitmap for either reward screen
var firstplay = false; //set to True on first load init level only. false always after

//*************************



//INIT:
//window.onload = function()
function doTheLoad(){
    //**console.log("doTheLoad");

    //creating easeljs Stage
  stage = new createjs.Stage("html5game");
    //enable MouseOver for onscreen controls
    stage.enableMouseOver(20);
    //enable touch interactions if supported on the current device:
    //params: single touch only (true), allow scroll/zoom gestures (true)
    createjs.Touch.enable(stage, true, false);

    // initial ticker (for level select)
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addListener(levelSelect_tick);

    canvasblueborder = new createjs.Bitmap('img/site/blueborder.png');

    document.getElementById('blueborder').style.display = 'none';

    //preloader anim and bar:
    spritesheet['preloader_george'] = new createjs.SpriteSheet({
        "frames" : {width : 159, height : 198},
        "animations": {
            "loop": {"frames": [0,1,2,3,4,5], "frequency": 6, "next": true},
        },
        "images": ['img/site/preloader_george.png']
    });
    loaderbar_george = new createjs.BitmapAnimation(spritesheet['preloader_george']);
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
};

function preloadIMG(){
    queue = new createjs.LoadQueue(false);

    //*** GATHERING TILESET IMAGES (defined images in JSON from Levels[]) into queue
    //*** TILESET images will have id equal to filename w/o ext.
    //loading level definition data, loading images
    //for each level (i in levels[]): levels[i].tilesets[0].image is a string (file path to image file)
    var tset_used = [];
    for (var i=0;i<levels.length;i++){

        var imgpath = levels[i].tilesets[0].image;
        var fname = imgpath.substring(imgpath.lastIndexOf("/")+1);
        fname = fname.substring(0,fname.lastIndexOf('.'));
        ////**console.log("imgpath: " + imgpath)
        ////**console.log('new id: ' + fname)

        //first time img is being referenced, add it to queue
        //give tilesiet unique ID so it is available for use in image[]
        if(!tset_used[fname]){
          tset_used[fname] = 1;
          queue.loadFile({src:imgpath, id:'tile_'+fname });
          ////**console.log('level ' + i + ': NEW use of ' + imgpath);
          //
        }
        else{
            ////**console.log('level ' + i + ': REPEAT use of ' + imgpath);
        }
    }

    //*** OTHER IMAGES (to be Bitmaps and Bitmap animations) used in game- will have unique IDs defined
    //add needed images to queue

    //splash & start button:
    queue.loadFile({src:'img/site/splash.jpg', id:'splash'});
    queue.loadFile({src:'img/site/play_btn.png', id:'play_btn'});

    //levelselect:
    queue.loadFile({src:'img/levelselect_bg.jpg', id:'levelselect_bg'});
    queue.loadFile({src:'img/levelselect_signpost.png', id:'levelselect_signpost'});
    queue.loadFile({src:'img/levelselect_bunnies.png', id:'levelselect_bunnies'});
    queue.loadFile({src:'img/levelselect_pumpkins.png', id:'levelselect_pumpkins'});

    //reward screens:
    queue.loadFile({src:'img/reward_nobunnies.jpg', id:'reward_nobunnies'});
    queue.loadFile({src:'img/reward_bunnies.jpg', id:'reward_bunnies'});

    //dpad & HUD:
    queue.loadFile({src:'img/hud-bg.png', id:'hud_bg'});
    queue.loadFile({src:'img/hud-menu-button.png', id:'hud_menu_btn'});
    queue.loadFile({src:'img/hud-ribbon.png', id:'hud_ribbon'});
    queue.loadFile({src:'img/hud-numbers.png', id:'hud_numbers'});
    queue.loadFile({src:'img/hud_bunnies.png', id:'hud_bunnies'});
    queue.loadFile({src:'img/dpad_arrow.png', id:'dpadArrow'});
    //queue.loadFile({src:'img/dpad_arrow_over.png', id:'dpadArrowOver'});
    queue.loadFile({src:'img/arrow-offscreen.png', id:'arrow_offscreen'});
    queue.loadFile({src:'img/adjacent-circ.png', id:'adjCircle'});

    //onscreen hit regions:
    queue.loadFile({src:'img/hitregion_up.png', id:'hitregion_up'});
    queue.loadFile({src:'img/hitregion_down.png', id:'hitregion_down'});
    queue.loadFile({src:'img/hitregion_left.png', id:'hitregion_left'});
    queue.loadFile({src:'img/hitregion_right.png', id:'hitregion_right'});

    //hero:
    queue.loadFile({src:'img/george.png', id:'george'});
    queue.loadFile({src:'img/george_hud.png', id:'george_face'});

    //collectables (not in spritesheet)
    queue.loadFile({src:'img/pumpkin.png', id:'pumpkin'});

    //enemies (bitmap anims created in create_spritesheets() ):
    queue.loadFile({src:'img/cat.png', id:'cat'});
    queue.loadFile({src:'img/allie.png', id:'allie'});

    //bunny (animated sprites)
    queue.loadFile({src:'img/bunnies_boofest.png', id:'bunnies'});
    //
    //leafpile (96x48)
    queue.loadFile({src:'img/leafpile_96x48.png', id:'leafpile'});

    //exit/fairground:
    queue.loadFile({src:'img/fairground.png', id:'fairground'});

    //preloading queue:
    queue.addEventListener("progress", handleProgress);
    queue.addEventListener("complete", handleComplete);
    queue.addEventListener("fileload", handleFileLoad);


    queue.load();
}

/*
function stop() {
    if (preload != null) { preload.close(); }
}
*/
function handleProgress(event) {
     //**console.log("loading: " + event.loaded + "/" + event.total);
     loaderbar_fill.graphics.beginFill(pl_outer).drawRoundRect(pl_x,pl_y, (pl_width/2 + parseInt((event.loaded / event.total)* pl_width/2) ), pl_height, pl_radius);
}

function handleFileLoad(event) {
    ////**console.log('----');
    ////**console.log('image preloaded, src: ' + event.item.src);
    ////**console.log('image preloaded, id: ' + event.item.id);
    ////**console.log('new Image: ' + event.result);
    ////**console.log('----');

    image[event.item.id]  = event.result;

    //if id begins with 'tile' : it is a tilesheet, set Image  to image[#] for all levels its used
    //so- image[#] are all the level tilesets (can be set as usable spritesheets if needed)
    if(event.item.id.search('tile_') != -1){
        //**console.log("TILESHEET IMG");

        for (var i=0;i<levels.length;i++){
            var imgpath = levels[i].tilesets[0].image;
            if(event.item.src.indexOf(imgpath)!= -1){
                //**console.log("level " + i + " uses tilesheet: " + event.item.id);
                image[i] = image[event.item.id];
            }
        }
    }
    else{
        //**console.log("NOT A TILESHEET IMG");

    }
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
    //spritesheet from first level's tilesheet img (already loaded, can define indiv. sprite here
    //**CAN CONTAIN SEPARATE BITMAP IMAGES WITHIN THIS INSTEAD....
    //**UPDATE AS NEEDED
    spritesheet['tilesheet'] = new createjs.SpriteSheet({
        frames : {width : 48, height : 48},
        "animations": {
            "pkin": {"frames": [3]},
            "pkin-checked": {"frames": [8]},
            "exit": {"frames": [13]},
            "bunny0": {"frames": [18]},
            "bunny1": {"frames": [23]},
            "bunny2": {"frames": [28]},
            "bunny3": {"frames": [33]},
            "bunny4": {"frames": [38]},
            "bunny5": {"frames": [43]},
            "bunny6": {"frames": [48]},
        },
        "images": [image[0]]
    });

    //levelselect signpost:
    spritesheet['levelselect_signpost'] = new createjs.SpriteSheet({
        frames : {width : 121, height : 185},
        "images": [image['levelselect_signpost']]
    });

    spritesheet['levelselect_bunnies'] = new createjs.SpriteSheet({
        frames : {width : 70, height : 123},
        "images": [image['levelselect_bunnies']]
    });

    //game character asset
    spritesheet['george'] = new createjs.SpriteSheet({
        "frames": [
            [138, 91, 35, 44, 0, -6, -3],
            [231, 135, 35, 44, 0, -6, -3],
            [197, 135, 34, 44, 0, -6, -3],
            [163, 135, 34, 44, 0, -6, -3],
            [132, 135, 31, 44, 0, -6, -3],
            [101, 135, 31, 44, 0, -6, -3],
            [221, 0, 32, 45, 0, -6, -2],
            [465, 0, 32, 45, 0, -6, -2],
            [0, 135, 33, 44, 0, -6, -3],
            [449, 91, 33, 44, 0, -6, -3],
            [415, 91, 34, 44, 0, -6, -3],
            [381, 91, 34, 44, 0, -6, -3],
            [347, 91, 34, 44, 0, -6, -3],
            [313, 91, 34, 44, 0, -6, -3],
            [278, 91, 35, 44, 0, -6, -3],
            [243, 91, 35, 44, 0, -6, -3],
            [435, 0, 30, 45, 0, -5, -2],
            [60, 46, 30, 45, 0, -5, -2],
            [0, 46, 30, 45, 0, -5, -2],
            [30, 46, 30, 45, 0, -5, -2],
            [90, 46, 32, 45, 0, -5, -2],
            [122, 46, 32, 45, 0, -5, -2],
            [0, 91, 34, 44, 0, -6, -3],
            [454, 46, 34, 44, 0, -6, -3],
            [419, 46, 35, 44, 0, -6, -3],
            [384, 46, 35, 44, 0, -6, -3],
            [67, 135, 34, 44, 0, -7, -3],
            [33, 135, 34, 44, 0, -7, -3],
            [482, 91, 30, 44, 0, -10, -3],
            [253, 46, 30, 44, 0, -10, -3],
            [154, 46, 32, 45, 0, -8, -2],
            [189, 0, 32, 45, 0, -8, -2],
            [220, 46, 33, 44, 0, -7, -3],
            [283, 46, 33, 44, 0, -7, -3],
            [186, 46, 34, 44, 0, -7, -3],
            [69, 91, 34, 44, 0, -7, -3],
            [103, 91, 35, 44, 0, -6, -3],
            [34, 91, 35, 44, 0, -6, -3],
            [173, 91, 35, 44, 0, -6, -3],
            [208, 91, 35, 44, 0, -6, -3],
            [405, 0, 30, 45, 0, -11, -2],
            [375, 0, 30, 45, 0, -11, -2],
            [346, 0, 29, 45, 0, -12, -2],
            [317, 0, 29, 45, 0, -12, -2],
            [285, 0, 32, 45, 0, -9, -2],
            [253, 0, 32, 45, 0, -9, -2],
            [316, 46, 34, 44, 0, -7, -3],
            [350, 46, 34, 44, 0, -7, -3],
            [65, 0, 25, 46, 0, -11, -1],
            [139, 0, 25, 45, 0, -10, -2],
            [40, 0, 25, 46, 0, -11, -1],
            [90, 0, 25, 45, 0, -10, -2],
            [164, 0, 25, 45, 0, -10, -2],
            [20, 0, 20, 46, 0, -14, -1],
            [115, 0, 24, 45, 0, -11, -2],
            [0, 0, 20, 46, 0, -14, -1]
        ],
        "animations": {
            "right": {"frames": [24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47], "frequency": 2, "next": true},
            "left": {"frames": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23], "frequency": 2, "next": true},
            "down": {"frames": [52,53,54,55], "frequency": 8, "next": true},
            "up": {"frames": [48,49,50,51], "frequency": 8, "next": true},
        },
        "images": [image['george']]
    });

    //HUD:
  spritesheet['george_face'] = new createjs.SpriteSheet({
    frames : {width : 190, height : 180},
        "animations": {
            "happy": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14,15,16,17], "frequency": 3,"next": false},
            "happy_reverse": {"frames": [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], "frequency": 3,"next": false},
            "scared": {"frames": [18, 19, 20, 21, 22, 23, 24, 25, 26], "frequency": 3,"next": false},
            "scared_reverse": {"frames": [26, 25, 24, 23, 22, 21, 20, 19, 18], "frequency": 3,"next": false},
        },
       "images": [image['george_face']]
    });

    spritesheet['hud_menu_btn'] = new createjs.SpriteSheet({
        frames : {width : 69, height : 59},
        "images": [image['hud_menu_btn']]
    });
    spritesheet['hud_numbers'] = new createjs.SpriteSheet({
        frames : {width : 17, height : 21},
        "images": [image['hud_numbers']]
    });

    //enemies:
    spritesheet['cat'] = new createjs.SpriteSheet({
        frames : {width : 64, height : 64},
        "animations": {
            "up": {"frames": [0,1], "frequency": 8, "next": true},
            "down": {"frames": [0,1], "frequency": 8, "next": true},
            "right": {"frames": [0,1], "frequency": 8, "next": true},
            "left": {"frames": [2,3], "frequency": 8, "next": true}
        },
        "images": [image['cat']]
    });
    spritesheet['allie'] = new createjs.SpriteSheet({
        frames : {width : 54, height : 80},
        "animations": {
            "up": {"frames": [0,1], "frequency": 8, "next": true},
            "down": {"frames": [0,1], "frequency": 8, "next": true},
            "right": {"frames": [0,1], "frequency": 8, "next": true},
            "left": {"frames": [2,3], "frequency": 8, "next": true}
        },
        "images": [image['allie']]
    });


    //bunnies (all 7 from boofest)
    spritesheet['bunnies'] = new createjs.SpriteSheet({
        frames : {width : 64, height : 64},
        "animations": {
            "left0": {"frames": [0,1,2], "frequency": 8, "next": true},
            "right0": {"frames": [3,4,5], "frequency": 8, "next": true},
            "up0": {"frames": [6,7,8], "frequency": 8, "next": true},
            "down0": {"frames": [9,10,11], "frequency": 8, "next": true},
            "idle0":{"frames": [10]},

            "left1": {"frames": [12,13,14], "frequency": 8, "next": true},
            "right1": {"frames": [15,16,17], "frequency": 8, "next": true},
            "up1": {"frames": [18,19,20], "frequency": 8, "next": true},
            "down1": {"frames": [21,22,23], "frequency": 8, "next": true},
            "idle1":{"frames": [22]},

            "left2": {"frames": [24,25,26], "frequency": 8, "next": true},
            "right2": {"frames": [27,28,29], "frequency": 8, "next": true},
            "up2": {"frames": [30,31,32], "frequency": 8, "next": true},
            "down2": {"frames": [33,34,35], "frequency": 8, "next": true},
            "idle2":{"frames": [34]},

            "left3": {"frames": [36,37,38], "frequency": 8, "next": true},
            "right3": {"frames": [39,40,41], "frequency": 8, "next": true},
            "up3": {"frames": [42,43,44], "frequency": 8, "next": true},
            "down3": {"frames": [45,46,47], "frequency": 8, "next": true},
            "idle3":{"frames": [46]},

            "left4": {"frames": [48,49,50], "frequency": 8, "next": true},
            "right4": {"frames": [51,52,53], "frequency": 8, "next": true},
            "up4": {"frames": [54,55,56], "frequency": 8, "next": true},
            "down4": {"frames": [57,58,59], "frequency": 8, "next": true},
            "idle4":{"frames": [58]},

            "left5": {"frames": [60,61,62], "frequency": 8, "next": true},
            "right5": {"frames": [63,64,65], "frequency": 8, "next": true},
            "up5": {"frames": [66,67,68], "frequency": 8, "next": true},
            "down5": {"frames": [69,70,71], "frequency": 8, "next": true},
            "idle5":{"frames": [70]},

            "left6": {"frames": [72,73,74], "frequency": 8, "next": true},
            "right6": {"frames": [75,76,77], "frequency": 8, "next": true},
            "up6": {"frames": [78,79,80], "frequency": 8, "next": true},
            "down6": {"frames": [81,82,83], "frequency": 8, "next": true},
            "idle6":{"frames": [82]}
        },
        "images": [image['bunnies']]
    });

    //leafpile:
    spritesheet['leafpile'] = new createjs.SpriteSheet({
        frames : { width : 96, height : 48 },
        "animations": {
            "begin": {"frames": [0,0,0,0,0], "frequency": 4, "next": false},
            "mid": {"frames": [1,1,1,1,1], "frequency": 4, "next": false},
            "end": {"frames": [2,2,2,2,2], "frequency": 4, "next": false},
        },
        "images": [image['leafpile']]
    });

    //hud bunnies:
    spritesheet['hud_bunnies'] = new createjs.SpriteSheet({
        frames : { width : 114, height : 86 },
        "images": [image['hud_bunnies']]
    });

    //
    //**console.log('spritesheets created!');
    preloadDone();
}

function preloadDone(){

    //init key input events only once at init
    setupKeys();

    //only once all images are fully loaded (preload finished).. render first level, setup input listeners
    //initLayers();

    //**INITIAL SOUND PLAY-- 'gametitle' first
    playSound('pumpkingeorge');
    //**levels.js create_levelSelect() is creating lvlselect, then loading up lvl0**

    play_btn = new createjs.Bitmap(image['play_btn']);
    play_btn.x = 520; play_btn.y = 360;
    play_btn.onPress = beginGame;
    play_btn.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    play_btn.onMouseOut = function(e){
        document.body.style.cursor='default';
    }

    splashscrn = new createjs.Bitmap(image['splash']);
    stage.addChild(splashscrn);
    stage.addChild(canvasblueborder);
    stage.addChild(play_btn);
    stage.update();
}

function beginGame(e){
    play_btn.onPress = null;
    stage.removeChild(play_btn);
    play_btn=null;

    create_levelSelect();
}

// loading layers for a NEW LEVEL - called upon pressing/selecting a level (lvlBox_pressed)
function initLayers() {
  // compose EaselJS tileset from image (fixed 64x64 now, but can be parametized)
    ////**console.log("mapData:\n" + mapData)
  var imageData = {
    images : [ image[lvl] ],
    frames : {
      width : mapData.tilewidth,
      height : mapData.tileheight
    }
  };

    lvlContainer = new createjs.Container();
    lvlContainer.x = lvlContainer.y = 0;

    //lvlStatic is bottommost child of lvlContainer. all 'level' tiles are added to lvlStatic to be cached
    lvlStatic = new createjs.Container();
    lvlContainer.addChild(lvlStatic);

    ////**console.log('imageData: ' + imageData)
  // create spritesheet
  var tilesetSheet = new createjs.SpriteSheet(imageData);

    sFactor = TILESIZE/mapData.tilewidth;
    //**console.log("@#$*)(#*$()@#*$)");
    //**console.log("SFACTOR: " + sFactor);
    //**console.log("@#$*)(#*$()@#*$)");

  // loading "level", "speed_##" and "wall" layer, establishing tiles[]
    //"level" tiles are rendered onscreen. each "level" layer is pushed to levelData[]
        //** ONLY levelData[0] (bottom most level layer) is passed to initLayer_Level0
    //"wall" tiles define which tiles are impassible by hero (top-down)
    //OR "open" tiles define which are the ONLY passable tiles by hero (side platformer)
    //"tar" tiles define which tiles alter player speed
    //passed to initLayer_Level0
    var levelData = [];
    var bgData, wallData, exitwallData;
    var spData = [];
  for (var idx = 0; idx < mapData.layers.length; idx++) {
    var layerData = mapData.layers[idx];

        //level layer is what is rendered on stage (all that is seen)
    if(layerData.name.indexOf('level') != -1) levelData.push(mapData.layers[idx]);

        //if there is a bg layer (underneath main level[0] layer), set its mapData to bgData, pass to optional initLayer_bg)
        //bg layer is rendered FIRST (bottommost)
        if(layerData.name == "bg"){
            bgData = mapData.layers[idx];
            initLayer_bg(bgData, tilesetSheet, mapData.tilewidth, mapData.tileheight);
        }

        //wall layer determines which tiles player cannot pass through (not seen)
        if(layerData.name == "wall") wallData = mapData.layers[idx];
            //OLD:open layer determines which tiles player CAN pass through (not seen)
            //if(layerData.name == "open") openData = mapData.layers[idx];

        //exitwall layer determines which tiles OPEN UP once all pumpkins collected
        if(layerData.name == "exitwall") exitwallData = mapData.layers[idx];

        //speed_  layers are tiles which alter player's speed (# following "speed_") (not seen)
        //spData is an array, each index has its own .speed value gathered from layer name
        if(layerData.name.indexOf('speed_') != -1){
            var tSpeed = layerData.name.split('_');
            tSpeed = parseInt(tSpeed[1]);
            //**console.log('speed layer, speed will be: ' + tSpeed);
            spData.push(mapData.layers[idx]);
            spData[spData.length-1].speed = tSpeed;
        }

  }

    //main level data (only necssary 'level' layer) (above bg if exists, otherwise bottomost)
    initLayer_Level0(levelData[0], wallData, exitwallData, spData, tilesetSheet, mapData.tilewidth, mapData.tileheight);


    //render any levelData[] after 0 just as cellbitmaps
    for(var i=1; i<levelData.length;i++){
        //**console.log('next lvl layer: ' + i)
        initLayer_LevelExtra(levelData[i], tilesetSheet, mapData.tilewidth, mapData.tileheight);
    }


    //finding 'start' and 'end' tiles
    for (var idx = 0; idx < mapData.layers.length; idx++) {
        var layerData = mapData.layers[idx];
        if(layerData.name == "start"){
            set_startTile(layerData, mapData.tilewidth, mapData.tileheight);
            break;
        }
    }
    for (var idx = 0; idx < mapData.layers.length; idx++) {
        var layerData = mapData.layers[idx];
        if(layerData.name == "end"){
            set_endTile(layerData, mapData.tilewidth, mapData.tileheight);
            break;
        }
    }

    thebunny = {}; //establishing thebunny as an empty object. it becomes a bitmapAnim with props. if leafpiles exist

    // loading "pumpkins" & "leafpiles" layer. accounting for multiple pumpking layers (for varied layouts) - only one at random will be loaded
    var pLayers = [];
    for (var idx = 0; idx < mapData.layers.length; idx++) {
        var layerData = mapData.layers[idx];
        //if(layerData.name == "pumpkins") initLayer_Pumpkins(layerData, tilesetSheet, mapData.tilewidth, mapData.tileheight);
        if(layerData.name == "pumpkins") pLayers.push(idx);
        if(layerData.name == "leafpiles") initLayer_Leafpiles(layerData, tilesetSheet, mapData.tilewidth, mapData.tileheight);
    }

    //picking one random pumpkin layer to load into level
    var pInt = randomInt(0,pLayers.length-1);
    //**console.log('pInt: ' + pInt);
    initLayer_Pumpkins(mapData.layers[pLayers[pInt]], tilesetSheet, mapData.tilewidth, mapData.tileheight);

    // loading "enemy" and "friend" layers
    for (var idx = 0; idx < mapData.layers.length; idx++) {
        var layerData = mapData.layers[idx];
        if(layerData.name.indexOf("enemy")!=-1 ){
            var type = 'enemy';
            //props: [0]: type (spritesheet to use), [1]: speed
            var props = layerData.name.split('_');
            props.splice(0,1);
            initLayer_Frenemy(type, layerData, props[0], props[1]);
        }
        else if(layerData.name.indexOf("friend")!=-1 ){
            var type = 'friend';
            //props: [0]: type (spritesheet to use), [1]: speed
            var props = layerData.name.split('_');
            props.splice(0,1);
            initLayer_Frenemy(type, layerData, props[0], props[1]);
        }
    }
    //

    //setup HUD
    setupHUD();

    //setup hudFace
    setupHUD_face();
    //create player
    setupHero();

  // establish ticker for level
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addListener(game_tick);

    dpad.x  = html5game.width/2 - 52;
    dpad.y = html5game.height/2 - 92;

    //hiding offscreen indicators
    offscreenUP.visible = false;
    offscreenLEFT.visible = false;
    offscreenRIGHT.visible = false;
    offscreenDOWN.visible = false;


    //if oversized level (panning): moving lvlContainer to where hero character begins
    //**console.log("lvl_width: " + lvl_width)
    //**console.log("lvl_height: " + lvl_height)

    lvlContainer.x = -1 * hero.x  + html5game.width/2 - mapData.tilewidth*sFactor;
    lvlContainer.y = -1 * hero.y + html5game.height/2 - dPadHeight + 2*mapData.tileheight*sFactor;

    panToX = lvlContainer.x;
    panToY = lvlContainer.y;

    //show/hide control arrows based on george's initial currentTile
    init_checkWalls();

    //setting bool for CURRENT playthrough
    levelaborted = false;

    //if there are pumkins in the level:
    if(next_pkin==-1 && pumpkins.length>0){
        //change the offScreen arrows inset img
        offscreenUP_pkin.gotoAndStop('pkin');
        offscreenDOWN_pkin.gotoAndStop('pkin');
        offscreenLEFT_pkin.gotoAndStop('pkin');
        offscreenRIGHT_pkin.gotoAndStop('pkin');
        //find next pumpkin and show offscreen indc. if neeeded
        //findNextPumpkin();
    }

    //optional fadeBox (topmost):
    fadeBox = new createjs.Shape();
    fadeBox.graphics.beginFill("black").drawRect(0,0, html5game.width, html5game.height);
    fadeBox.cache(0,0, html5game.width, html5game.height);
    fadeBox.mask = gamemask;

    lvlContainer.mask = gamemask;
    HUD.mask = gamemask;
    stage.addChild(lvlContainer);
    stage.addChild(dpad);
    stage.addChild(HUD);

    stage.addChild(fadeBox);
    stage.addChild(canvasblueborder);

    //initial cache of original visible lvlStatic content
    lvlStatic.cache(hero.x-html5game.width/2,(-1*lvlContainer.y -(mapData.tileheight*sFactor) ), (html5game.width+1*mapData.tilewidth*sFactor), html5game.height + 2*mapData.tileheight*sFactor);
    //deactive controls until desired sfx played

    _active = false;
    dpad.visible = false;

    ////**console.log("precache: " + lvlContainer.y)

    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:0}, 1000, createjs.Ease.none)
     .call(function(){
        if(firstplay){
            firstplay=false;
            beginLevelSounds0();
        }
        else beginLevelSounds1();
     });
}
//firsttime play:
function beginLevelSounds0(){
    playSound('level_instruct', beginLevelSounds0a);

}
function beginLevelSounds0a(){
    sndto=setTimeout(function(){
        _active = true;
        dpad.visible = true;
        playSound('move_instruct', beginLevelSounds1);
    },400);
}

//any non-first play:
function beginLevelSounds1(){
    _active = true;
    dpad.visible = true;
    playSound( ('helpfind' + pumpkins.length.toString()),  beginLevelSounds2);
}
//conclusion
function beginLevelSounds2(){
    sndto=setTimeout(function(){
        playSound('bunnyhiding');
    }, 300);
}

//for bg layer if it exists- it is rendered on stage FIRST, before main level data (level[0])
function  initLayer_bg(levelData, tilesetSheet, tilewidth, tileheight){
    for ( var col = 0; col < levelData.height; col++) {
        for ( var row = 0; row < levelData.width; row++) {
            // create a new Bitmap for each cell
            var cellBitmap = new createjs.BitmapAnimation(tilesetSheet);
            cellBitmap.scaleX = cellBitmap.scaleY = sFactor;

            // layer data has single dimension array
            var idx = row + (col * levelData.width);

            // tilemap data uses 1 as first value, EaselJS uses 0 (sub 1 to load correct tile)
            if(levelData.data[idx]) cellBitmap.gotoAndStop(levelData.data[idx] - 1);

            cellBitmap.x = row * tilewidth *sFactor;
            cellBitmap.y = col * tileheight *sFactor;

            // add bitmap to stage
            lvlStatic.addChild(cellBitmap);
        }
    }
        //**console.log('BG level layer on screen');
}


//any additional 'level' layers are rendered on stage (in the order they're positioned in Tiled), but that's it.
//called AFTER initLayer_Level0, so can determine if something is an exitwall (for tile to be hidden when exitwall opens)
function  initLayer_LevelExtra(levelData, tilesetSheet, tilewidth, tileheight){
    for ( var col = 0; col < levelData.height; col++) {
        for ( var row = 0; row < levelData.width; row++) {
            // create a new Bitmap for each cell
            var cellBitmap = new createjs.BitmapAnimation(tilesetSheet);
            cellBitmap.scaleX = cellBitmap.scaleY = sFactor;

            // layer data has single dimension array
            var idx = row + (col * levelData.width);

            // tilemap data uses 1 as first value, EaselJS uses 0 (sub 1 to load correct tile)
            if(levelData.data[idx]) cellBitmap.gotoAndStop(levelData.data[idx] - 1);

            cellBitmap.x = row * tilewidth *sFactor;
            cellBitmap.y = col * tileheight *sFactor;

            // add bitmap to stage
            lvlStatic.addChild(cellBitmap);

        }
    }
        //**console.log('EXTRA level layer on screen');
}



// layer initialization, creating each tile: gfx to render, and any optional property (.wall, .speed)
// levelData is just FIRST 'level' layer. only first layer's cellBitmaps are added to tiles[][], and have .wall and .speed properties attributed to them
// EVERY TILE gets a value for .wall (true/false), and .speed (default hero_speed_ORIG, unless spData specifies something else)
function initLayer_Level0(levelData, wallData, exitwallData, spData, tilesetSheet, tilewidth, tileheight) {
    //**console.log("start: initLayer_Level0");

    ////**console.log("levelData.data.length:" + levelData.data.length)
  for ( var col = 0; col < levelData.height; col++) {

        tiles[col] = [];

    for ( var row = 0; row < levelData.width; row++) {
      // create a new Bitmap for each cell
      var cellBitmap = new createjs.BitmapAnimation(tilesetSheet);
            cellBitmap.scaleX = cellBitmap.scaleY = sFactor;

            // layer data has single dimension array
      var idx = row + (col * levelData.width);
            // tilemap data uses 1 as first value, EaselJS uses 0 (sub 1 to load correct tile)
      cellBitmap.gotoAndStop(levelData.data[idx] - 1);

      cellBitmap.x = row * tilewidth *sFactor;
      cellBitmap.y = col * tileheight *sFactor;
            ////**console.log(row +", " + col +":, " + cellBitmap.x+", " + cellBitmap.y);

            //WALL: defaulting .wall prop to false, so player can pass through all
            if(wallData.data[idx]==0) cellBitmap.wall = false;
            else cellBitmap.wall = true;

            //EXITWALL: if tile was included in 'exitwall' layer, store its col/row values, and push tile into exitwall[]
            //once all pumpkins found, all tiles in exitwall[] are "opened" (have .wall set to false, and are then hidden)
            if(exitwallData.data[idx]!=0){
                cellBitmap.col = col;
                cellBitmap.row = row;
                exitwall.push(cellBitmap);
            }

            //speed: defaulting to hero_speed unless a spData exists for tile
            // spData is an array, each index has its own .speed value

            //if no spData at all, tile automatically gets set to hero_speed_ORIG
            if(spData.length==0){
                cellBitmap.speed = hero_speed_ORIG;
            }
            else{
                cellBitmap.speed = hero_speed_ORIG;
                //checking all spData layers for a value for current tile
                for(var i=0; i<spData.length; i++){
                    if(spData[i].data[idx] != 0) cellBitmap.speed = spData[i].speed;

                }
            }
            ////**console.log('speed: ' + cellBitmap.speed);

            //defaulting each tile to NOT having a pumpkin. set to TRUE in initLayer_Pumpkins
            cellBitmap.pkin = false;

            // add bitmap to array tiles[y]
            tiles[col].push(cellBitmap);

      // add bitmap to stage
      //stage.addChild(cellBitmap);
            lvlStatic.addChild(cellBitmap);
    }
  }

    //**console.log('level layer on screen');

    //if(sFactor>1) sFactor = sFactor*(tileheight/TILESIZE);
    //if(tileheight!=TILESIZE) sFactor*=tileheight/TILESIZE;

    nROWS = tiles.length;
    nCOLS = tiles[0].length;
    lvl_width = levelData.width*tilewidth *sFactor;
    lvl_height = levelData.height*tileheight *sFactor;

    /*
    //**console.log("nROWS: " + nROWS);
    //**console.log("nCOLS: " + nCOLS);
    //**console.log('LEVEL WIDTH: ' + lvl_width);
    //**console.log('LEVEL HEIGHT: ' + lvl_height);
    */

    //html5game.width = canWidthMax;
    //html5game.height = canHeightMax;
}


//layerData is tile coords for enemy (movement path), asset is name of spritesheet to use, speed is speed in ms for movement
function initLayer_Frenemy(type, layerData, asset, speed){
    var array;
    if(type=='enemy') array = enemies;
    if(type=='friend') array = friends;

    // obj = new array for current enemy/friend that will hold objs that have x y properties of each tile in enemy's path
    array[array.length] = [];
    var frenemy = array[array.length-1];

    frenemy.pos = 0;
    frenemy.incr = 1;
    ////**console.log('frenemy.pos: ' + frenemy.pos);

    //getting all the x and y values for this enemy later and attached each as a prop to a new obj that is enemy[i]
    for(var i=0;i<layerData.x.length;i++){
        frenemy[i] = {};
        frenemy[i].x = sFactor* layerData.x[i];
        frenemy[i].y = sFactor* (layerData.y[i] - mapData.tileheight); //*for some reason y values are being received one tile beneath actual placement
    }

    //storing enemey's passed SS type and speed as usable properties
    frenemy.name  = asset;
    frenemy.type = spritesheet[asset];
    frenemy.speed = speed;

    //passing created array of x and y coords to createEnemy
    createFrenemy(frenemy);
}


//receives array of objs with x and y properties
//make enemy.body an actual bitmap/bitmap anim/shape that is depicted on screen
function createFrenemy(frenemy){
    ////**console.log(e)

    frenemy.body = new createjs.BitmapAnimation(frenemy.type);
    if(frenemy.name=='allie'){
        frenemy.body.regY = 35;
    }
    //frenemy.body.gotoAndPlay('right');
    frenemy.body.gotoAndStop(0);

    frenemy.body.x = frenemy[0].x;
    frenemy.body.y = frenemy[0].y;

    //'32' should be the dimension of one frame of anim
    var sf;
    if(mapData.tileheight==48) sf = 48/mapData.tileheight *sFactor;
    else sf = TILESIZE/48; // / sFactor;
    frenemy.body.scaleX = frenemy.body.scaleY = sf;
    //stage.addChild(frenemy.body);
    lvlContainer.addChild(frenemy.body);


    moveFrenemy(frenemy);
}

//oscillating enemy/friend movement through passed frenemy's x/y positions
function moveFrenemy(frenemy){
    ////**console.log(enemy['pos']);

    if(frenemy.pos==0) frenemy.incr = 1;
    if(frenemy.pos==(frenemy.length-1)) frenemy.incr = -1;

    frenemy.pos += frenemy.incr;

    //figuring out frenemy anims: faces left or right when moving horizontally. faces george when moving vertically:
    if(frenemy[frenemy.pos].x > frenemy.body.x) frenemy.body.gotoAndPlay('right');
    else if(frenemy[frenemy.pos].x < frenemy.body.x) frenemy.body.gotoAndPlay('left');
    //else if(frenemy[frenemy.pos].y > frenemy.body.y) frenemy.body.gotoAndPlay('down');
    //else if(frenemy[frenemy.pos].y < frenemy.body.y) frenemy.body.gotoAndPlay('up');
    else{
      //frenemy.body.gotoAndPlay('left');
      if(frenemy.body.x >= hero.x) frenemy.body.gotoAndPlay('left');
      else frenemy.body.gotoAndPlay('right');
    }

    createjs.Tween.get(frenemy.body, {loop:false})
     .to({x:frenemy[frenemy.pos].x,y:frenemy[frenemy.pos].y}, frenemy.speed, createjs.Ease.none)
     .call(function(){
        moveFrenemy(frenemy);
     });
}

//stops enemy movement, moves them backward to their start positions where they freeze
function freezeEnemies(){
    //**console.log("freezeEnemies: " + enemies.length);

    for(var i=0; i<enemies.length; i++){
        var e = enemies[i];
        createjs.Tween.removeTweens(e.body);
        returnFrenemy(e);
    }

}

//recurisvely moves passed enemy back to start position at 2x speed, then stops
function returnFrenemy(frenemy){
    //if enemy is at start position, STOP this recursive movement.
    if(frenemy.pos==0) return;

    frenemy.incr = -1;
    frenemy.pos += frenemy.incr;

    //figuring out frenemy anims:
    if(frenemy[frenemy.pos].x > frenemy.body.x) frenemy.body.gotoAndPlay('right');
    else if(frenemy[frenemy.pos].x < frenemy.body.x) frenemy.body.gotoAndPlay('left');
    else if(frenemy[frenemy.pos].y > frenemy.body.y) frenemy.body.gotoAndPlay('down');
    else if(frenemy[frenemy.pos].y < frenemy.body.y) frenemy.body.gotoAndPlay('up');
    else frenemy.body.gotoAndPlay('down');

    createjs.Tween.get(frenemy.body, {loop:false})
     .to({x:frenemy[frenemy.pos].x,y:frenemy[frenemy.pos].y}, frenemy.speed/2, createjs.Ease.none)
     .call(function(){
        returnFrenemy(frenemy);
     });
}

function initLayer_Pumpkins(layerData, tilesetSheet, tilewidth, tileheight){
    for ( var col = 0; col < layerData.height; col++) {
        for ( var row = 0; row < layerData.width; row++) {
            var idx = row + col * layerData.width;

            if(layerData.data[idx]!=0){
                //var pkin = new createjs.BitmapAnimation(spritesheet['tilesheet']);
                //pkin.gotoAndStop('pkin');
                var pkin = new createjs.Bitmap(image['pumpkin']);
                pumpkins.push(pkin);
                pkin.x = sFactor* (row * tilewidth);
                pkin.y = sFactor* (col * tileheight);

                //'48' should be the dimension of one frame of anim
                var sf;
                if(mapData.tileheight==48) sf = 48/mapData.tileheight *sFactor;
                else sf = TILESIZE/48// / sFactor;
                pkin.scaleX = pkin.scaleY = sf;

                lvlContainer.addChild(pkin);

                //setting this tiles .pkin value to TRUE.
                tiles[col][row].pkin = true;
            }
        }
    }
}


//creates all leafpiles as laid out in Tiled
//creates ONE bunny and has it hidden underneath a random leafpile
function initLayer_Leafpiles(layerData, tilesetSheet, tilewidth, tileheight){
    for ( var col = 0; col < layerData.height; col++) {
        for ( var row = 0; row < layerData.width; row++) {
            var idx = row + col * layerData.width;

            if(layerData.data[idx]!=0){
                var lp = new createjs.BitmapAnimation(spritesheet['leafpile']);
                lp.regY = 15;
                lp.gotoAndStop(0);
                leafpiles.push(lp);
                    //keeping the row and col tiles that make up the leafpile
                    lp.row = col;
                    lp.col1 = row;
                    lp.col2 = row+1;
                    lp.col3 = row+2;
                lp.x = sFactor* (row * tilewidth);
                lp.y = sFactor* (col * tileheight);

                //'48' should be the dimension of one frame of anim
                var sf;
                if(mapData.tileheight==48) sf = 48/mapData.tileheight *sFactor;
                else sf = TILESIZE/48;
                lp.scaleX = sf*1.5;
                lp.scaleY = sf*1.5;

                //lvlContainer.addChild(lp);
            }

        }
    }

    //one random bunny:
    var rb = randomInt(0,leafpiles.length-1);
    for(var i=0;i<leafpiles.length;i++){
        if(i==rb){
            thebunny = new createjs.BitmapAnimation(spritesheet['bunnies']);
            thebunny.gotoAndStop('left'+lvl.toString());

            //'48' should be the dimension of one frame of anim
            var sf;
            if(mapData.tileheight==48) sf = 48/mapData.tileheight *sFactor;
            else sf = TILESIZE/48;// / sFactor;
            thebunny.scaleX = thebunny.scaleY = sf;

            bunny_leafpile = leafpiles[i];
            thebunny.x = sFactor* (bunny_leafpile.col2 * tilewidth);
            thebunny.y = sFactor* (bunny_leafpile.row * tileheight);

            thebunny.y -= bunnypeek;
            //init vars
            thebunny.revealed = false; //once bunny walks out of bunny_leafpile
            thebunny.found = false; //once george grabs bunny

            lvlContainer.addChild(thebunny);
        }

        lvlContainer.addChild(leafpiles[i]);
    }
}


function set_startTile(layerData, tilewidth, tileheight){
    //**console.log('start: set_startTile');
    var startX = sFactor *  (layerData.x[0]);
    var startY = sFactor * (layerData.y[0] - tileheight);

    //**console.log('startX: '+ startX);
    //**console.log('startY: '+ startY);

    var tile;

    for (var col=0;col<tiles.length;col++){
        for (var row=0; row<tiles[col].length;row++){
            tile = tiles[col][row];
            ////**console.log('tile.x: ' + tile.x)
            if(tile.x == startX){
                ////**console.log('tile.y: ' + tile.y)
                if(tile.y == startY){
                    currentRow = moveToX = col;
                    currentCol = moveToY = row;

                    currentTile = tiles[col][row];
                    //**console.log('starting tile is: ' + currentCol+", " +currentRow);
                    return;
                }
            }

        }
    }

    //**console.log("NO START TILE FOUND!");
}


function set_endTile(layerData, tilewidth, tileheight){
    //**console.log('start: end_startTile');
    var endX = sFactor * (layerData.x[0]);
    var endY = sFactor * (layerData.y[0] - tileheight);

    //**console.log('endX: '+ endX);
    //**console.log('endY: '+ endY);


    var t;
    for (var col=0;col<tiles.length;col++){
        for (var row=0; row<tiles[col].length;row++){
            t = tiles[col][row];
            if(t.x == endX){
                if(t.y == endY) {
                    endTile = tiles[col][row];
                    //**console.log('end tile is: ' + col+", " + row);

                    fairground = new createjs.Bitmap(image['fairground']);
                    fairground.x = endTile.x;
                    fairground.y = endTile.y;
                    lvlContainer.addChild(fairground);
                    return;
                }
            }
        }
    }

    //**console.log("NO END TILE FOUND!");
}



function setupHUD(){
    HUD = new createjs.Container();

    HUD_bg = new createjs.Bitmap(image['hud_bg']);
    HUD_bg.x = 0;
    HUD_bg.y = html5game.height - HUD_bg.image.height - 3;
    HUD.addChild(HUD_bg);

    indicator = new createjs.Container();
    indicator.x = indicatorX;
    indicator.y = indicatorY;
    HUD.addChild(indicator);


    hud_pumpkins = [];
    hud_ribbons = [];
    for(var i=0;i<pumpkins.length;i++){
        //hud_pumpkins[i] = new createjs.BitmapAnimation(spritesheet['tilesheet']);
        //hud_pumpkins[i].gotoAndStop('pkin');
        hud_pumpkins[i] = new createjs.Bitmap(image['pumpkin']);
        hud_pumpkins[i].y = indicatorY;
        hud_pumpkins[i].x = indicatorX + 70*i;

        hud_ribbons[i] = new createjs.Bitmap(image['hud_ribbon']);
        hud_ribbons[i].x = hud_pumpkins[i].x + 20;
        hud_ribbons[i].y = hud_pumpkins[i].y - 6;

        hud_ribbons[i].num = new createjs.BitmapAnimation(spritesheet['hud_numbers']);
        hud_ribbons[i].num.gotoAndStop(i);
        hud_ribbons[i].num.x = hud_ribbons[i].x + 8;
        hud_ribbons[i].num.y = hud_ribbons[i].y + 5;

        hud_ribbons[i].visible = false;
        hud_ribbons[i].num.visible = false;

        HUD.addChild(hud_pumpkins[i]);
        HUD.addChild(hud_ribbons[i]);
        HUD.addChild(hud_ribbons[i].num);
    }

    hudbunny = new createjs.BitmapAnimation(spritesheet['hud_bunnies']);
    hudbunny.gotoAndStop(7);
    hudbunny.x = 700;
    hudbunny.y = 420;
    hudbunny.visible = false;
    HUD.addChild(hudbunny);
}

function setupHUD_face(){
    georgeHUD = new createjs.BitmapAnimation(spritesheet['george_face']);
    georgeHUD.gotoAndStop(0);
    georgeHUD.visible = false;
    georgeHUD.emotion = "";

    georgeHUD.x = 0;
    georgeHUD.y = html5game.height - 180;
    HUD.addChild(georgeHUD);

    HUD.addChild(backArrow);
}

//resets georgeHUD anim back to neutral state after 1 second.
function reset_georgeHUD(){
    //to is variable that holds running timeout timer. CAN BE CLEARED VIA clearTimeout(to);
    to=setTimeout(function(){
        georgeHUD.gotoAndPlay(georgeHUD.emotion +'_reverse');
        georgeHUD.onAnimationEnd = hide_georgeHUD;
    }, 300);
}

function hide_georgeHUD(){
    clearTimeout(to);
    georgeHUD.stop();
    georgeHUD.onAnimationEnd = null;
    georgeHUD.visible = false;
}
function setupHero(){

    //hero = new createjs.BitmapAnimation(spritesheet['herodog']);
    hero = new createjs.BitmapAnimation(spritesheet['george']);
    hero.gotoAndStop(52);

    //'48' should be the dimension of one frame of anim
    var sf;
    if(mapData.tileheight==48) sf = 48/mapData.tileheight *sFactor;
    else sf = TILESIZE/48// / sFactor;
    hero.scaleX = hero.scaleY = sf;

    offsetX = 0;
    offsetY = 0;

    hero.x = (tiles[currentRow][currentCol].x + offsetX) ||0;
    hero.y = (tiles[currentRow][currentCol].y + offsetY) ||0;
    //stage.addChild(hero);
    lvlContainer.addChild(hero);

    //_active = true;
}


//sets up keypress listeners. accepts bool to allow/disallow key input
function setupKeys(){
    dpad = new createjs.Container();

    //on screen (Dpad) controls
    btnUP = new createjs.Bitmap(image['dpadArrow']);
    btnUP.alpha = 0.8;
    btnUP.regX =  btnUP.image.width/2;
    btnUP.regY =  btnUP.image.height/2;
    btnDOWN = btnUP.clone();
    btnDOWN.rotation = 180;
    btnLEFT = btnUP.clone();
    btnLEFT.rotation = -90;
    btnRIGHT = btnUP.clone();
    btnRIGHT.rotation = 90;

    btnUP.x = btnUP.regX +5;
    btnUP.y = btnUP.regY - 18;
    btnDOWN.x = btnUP.x;
    btnDOWN.y = btnDOWN.image.height *2 +6;
    btnLEFT.x = -0.25 * btnLEFT.image.width - 5;
    btnLEFT.y = btnLEFT.image.height + 6;
    btnRIGHT.x = 1.5 * btnRIGHT.image.width + 5;
    btnRIGHT.y = btnRIGHT.image.height + 6;

    //overstates:
    btnUP_over = new createjs.Bitmap(image['dpadArrow']);
    btnUP_over.alpha = 1;
    btnUP_over.regX = btnUP_over.image.width/2;
    btnUP_over.regY = btnUP_over.image.height/2;
    btnUP_over.x = btnUP.x;
    btnUP_over.y = btnUP.y;
    btnUP_over.visible = false;

    btnLEFT_over = btnUP_over.clone();
    btnLEFT_over.rotation = btnLEFT.rotation;
    btnLEFT_over.x = btnLEFT.x;
    btnLEFT_over.y = btnLEFT.y;
    btnLEFT_over.visible = false;

    btnDOWN_over = btnUP_over.clone();
    btnDOWN_over.rotation = btnDOWN.rotation;
    btnDOWN_over.x = btnDOWN.x;
    btnDOWN_over.y = btnDOWN.y;
    btnDOWN_over.visible = false;

    btnRIGHT_over = btnUP_over.clone();
    btnRIGHT_over.rotation = btnRIGHT.rotation;
    btnRIGHT_over.x = btnRIGHT.x;
    btnRIGHT_over.y = btnRIGHT.y;
    btnRIGHT_over.visible = false;


    //large screen regions to trigger movements:
    regionUP = new createjs.Bitmap(image['hitregion_up'])
    regionUP.x = -150 ; regionUP.y = -135;
    regionUP.alpha = 0.01;

    regionDOWN = new createjs.Bitmap(image['hitregion_down'])
    regionDOWN.x = -150; regionDOWN.y = 110;
    regionDOWN.alpha = 0.01;

    regionLEFT = new createjs.Bitmap(image['hitregion_left'])
    regionLEFT.x = -385; regionLEFT.y = -18;
    regionLEFT.alpha = 0.01;

    regionRIGHT = new createjs.Bitmap(image['hitregion_right'])
    regionRIGHT.x = 80; regionRIGHT.y = -18;
    regionRIGHT.alpha = 0.01;

    regionUP.onPress = dpadPress;
    regionDOWN.onPress = dpadPress;
    regionLEFT.onPress = dpadPress;
    regionRIGHT.onPress = dpadPress;
    //

    //adjacent circles, uses 'tilesheet' spritesheet to display different inset imgs
    adjUP = new createjs.Container();
    adjUP.visible = false;
    adjUP_bg = new createjs.Bitmap(image['adjCircle']);
    adjUP_bg.regX = 24;
    adjUP_bg.regY = 24;
    adjUP_img = new createjs.BitmapAnimation(spritesheet['tilesheet']);
    adjUP_img.gotoAndStop('pkin');
    adjUP_img.regX = 24;
    adjUP_img.regY = 24;
    adjUP.addChild(adjUP_bg);
    adjUP.addChild(adjUP_img);

    adjDOWN = adjUP.clone(); adjDOWN_bg = adjUP_bg.clone(); adjDOWN_img = adjUP_img.clone();
    adjLEFT = adjUP.clone(); adjLEFT_bg = adjUP_bg.clone(); adjLEFT_img = adjUP_img.clone();
    adjRIGHT = adjUP.clone(); adjRIGHT_bg = adjUP_bg.clone(); adjRIGHT_img = adjUP_img.clone();

    adjDOWN.addChild(adjDOWN_bg); adjDOWN.addChild(adjDOWN_img);
    adjLEFT.addChild(adjLEFT_bg); adjLEFT.addChild(adjLEFT_img);
    adjRIGHT.addChild(adjRIGHT_bg); adjRIGHT.addChild(adjRIGHT_img);

    adjUP.x = btnUP.x; adjUP.y = btnUP.y;
    adjDOWN.x = btnDOWN.x; adjDOWN.y = btnDOWN.y;
    adjLEFT.x = btnLEFT.x; adjLEFT.y = btnLEFT.y;
    adjRIGHT.x = btnRIGHT.x; adjRIGHT.y = btnRIGHT.y;

    //pointer cursor for onscreen arrows and adjacent indicators
    btnUP.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    btnUP.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    btnLEFT.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    btnLEFT.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    btnRIGHT.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    btnRIGHT.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    btnDOWN.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    btnDOWN.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    adjUP.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    adjUP.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    adjLEFT.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    adjLEFT.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    adjRIGHT.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    adjRIGHT.onMouseOut = function(e){
        document.body.style.cursor='default';
    }
    adjDOWN.onMouseOver = function(e){
        document.body.style.cursor='pointer';
    }
    adjDOWN.onMouseOut = function(e){
        document.body.style.cursor='default';
    }

    //offscreen directional indicators
    offscreenUP = new createjs.Container();
    offscreenUP.x = btnUP.x;
    offscreenUP.y = -92;
        offscreenUP_arrow = new createjs.Bitmap(image['arrow_offscreen']);
        offscreenUP_arrow.regX = offscreenUP_arrow.image.width/2;
        offscreenUP_arrow.regY = offscreenUP_arrow.image.height/2;
        //offscreenUP_pkin = new createjs.Bitmap(image['pumpkin']);
        offscreenUP_pkin = new createjs.BitmapAnimation(spritesheet['tilesheet']);
        offscreenUP_pkin.gotoAndStop('pkin');
        offscreenUP_pkin.regX = 24;
        offscreenUP_pkin.regY = 24;
        offscreenUP_pkin.scaleX = offscreenUP_pkin.scaleY = 0.8;
        offscreenUP_pkin.y = -10;
    offscreenUP.addChild(offscreenUP_arrow);
    offscreenUP.addChild(offscreenUP_pkin);

    offscreenLEFT = new createjs.Container();
    offscreenLEFT.x -= 330;
    offscreenLEFT.y +=56;
        offscreenLEFT_arrow = offscreenUP_arrow.clone();
        offscreenLEFT_arrow.rotation = -90;
        offscreenLEFT_pkin = offscreenUP_pkin.clone();
        offscreenLEFT_pkin.x -=10;
        offscreenLEFT_pkin.y +=10;
    offscreenLEFT.addChild(offscreenLEFT_arrow);
    offscreenLEFT.addChild(offscreenLEFT_pkin);

    offscreenRIGHT = new createjs.Container();
    offscreenRIGHT.x += 424;
    offscreenRIGHT.y +=56;
        offscreenRIGHT_arrow = offscreenUP_arrow.clone();
        offscreenRIGHT_arrow.rotation = 90
        offscreenRIGHT_pkin = offscreenUP_pkin.clone();
        offscreenRIGHT_pkin.x += 8;
        offscreenRIGHT_pkin.y +=10;
    offscreenRIGHT.addChild(offscreenRIGHT_arrow);
    offscreenRIGHT.addChild(offscreenRIGHT_pkin);

    offscreenDOWN = new createjs.Container();
    offscreenDOWN.x  = offscreenUP.x;
    offscreenDOWN.y += 200;;
        offscreenDOWN_arrow = offscreenUP_arrow.clone();
        offscreenDOWN_arrow.rotation = 180;
        offscreenDOWN_pkin = offscreenUP_pkin.clone();
        offscreenDOWN_pkin.x =0;
        offscreenDOWN_pkin.y +=20;
    offscreenDOWN.addChild(offscreenDOWN_arrow);
    offscreenDOWN.addChild(offscreenDOWN_pkin);

    //**These are the 4 containers to show hide as offscreen indicators
    offscreenUP.visible = false;
    offscreenLEFT.visible = false;
    offscreenRIGHT.visible = false;
    offscreenDOWN.visible = false;

    dpad.addChild(offscreenUP);
    dpad.addChild(offscreenLEFT);
    dpad.addChild(offscreenRIGHT);
    dpad.addChild(offscreenDOWN);

    dpad.addChild(regionUP);
    dpad.addChild(regionDOWN);
    dpad.addChild(regionLEFT);
    dpad.addChild(regionRIGHT);

    dpad.addChild(btnUP);
    dpad.addChild(btnDOWN);
    dpad.addChild(btnLEFT);
    dpad.addChild(btnRIGHT);

    dpad.addChild(btnUP_over);
    dpad.addChild(btnLEFT_over);
    dpad.addChild(btnDOWN_over);
    dpad.addChild(btnRIGHT_over);

    dpad.addChild(adjUP);
    dpad.addChild(adjDOWN);
    dpad.addChild(adjLEFT);
    dpad.addChild(adjRIGHT);

    //back arrow on HUD, create Bitmap once, assign press event once
    backArrow = new createjs.BitmapAnimation(spritesheet['hud_menu_btn']);
    backArrow.gotoAndStop(0);
    backArrow.x = html5game.width -125;
    backArrow.y = 350;
    backArrow.onMouseOver = function(e){
        document.body.style.cursor='pointer';
        backArrow.gotoAndStop(1);
    }
    backArrow.onMouseOut = function(e){
        document.body.style.cursor='default';
        backArrow.gotoAndStop(0);
    }

    //desktop mouse & touch input:
    btnUP.onPress = dpadPress;
    btnDOWN.onPress = dpadPress;
    btnLEFT.onPress = dpadPress;
    btnRIGHT.onPress = dpadPress;
    adjUP.onPress = dpadPress;
    adjDOWN.onPress = dpadPress;
    adjLEFT.onPress = dpadPress;
    adjRIGHT.onPress = dpadPress;

    backArrow.onPress = goBack;

    //keyboard input
    $(document).keydown(function(e){
        if(!_active){
            //check for konami (if konami >-1)
            if(konami > -1){
                //levelSelect_presses.push(e.keyCode);
                if(e.keyCode == konamicode[konami]){
                    //**console.log('yes! ' + konami)
                    konami++;

                    if(konami==konamicode.length){
                        konami = -1;
                        execute_konamicode();
                    }
                }
                else {
                    //**console.log('konami reset');
                    konami=0;
                }
            }

            //preventing arrow keys from browser scrolling during gameplay:
            if (e.keyCode==37 || e.keyCode==39 || e.keyCode==38 || e.keyCode==40){ return false;}

            //if !_active, don't allow any other key input
            return;
        }

        ////**console.log( "LEFT" );
        if (e.keyCode==37){
            doLEFT = true;
            return false;
        }
        ////**console.log( "RIGHT" );
        if (e.keyCode==39){
            doRIGHT = true;
            return false;
        }
        ////**console.log( "UP" );
        if (e.keyCode==38){
            doUP = true;
           return false;
        }
        ////**console.log( "DOWN" );
        if (e.keyCode==40){
            doDOWN = true;
           return false;
        }
    });

    $(document).keyup(function(e){ buttonsOFF(); });
}

function dpadPress(e){
    ////**console.log(e.target);
    if(!_active) return;

    switch(e.target){
        case btnUP: case regionUP:
            if(btnUP.visible) btnUP_over.visible = true;
            doUP = true;
            break;
        case btnDOWN: case regionDOWN:
            if(btnDOWN.visible) btnDOWN_over.visible = true;
            doDOWN = true;
            break;
        case btnLEFT: case regionLEFT:
            if(btnLEFT.visible) btnLEFT_over.visible = true;
            doLEFT = true;
            break;
        case btnRIGHT: case regionRIGHT:
            if(btnRIGHT.visible)  btnRIGHT_over.visible = true;
            doRIGHT = true;
            break;

        case adjUP:
            doUP = true;
            break;
        case adjDOWN:
            doDOWN = true;
            break;
        case adjLEFT:
            doLEFT = true;
            break;
        case adjRIGHT:
            doRIGHT = true;
            break;

    }

    e.onMouseUp = function(evt){
        ////**console.log('dd up')
        buttonsOFF();
    }
}

function buttonsOFF(){
    doUP=false;
    doDOWN=false;
    doLEFT=false;
    doRIGHT=false;

    btnUP_over.visible = false;
    btnDOWN_over.visible = false;
    btnLEFT_over.visible = false;
    btnRIGHT_over.visible = false;
}

function goBack(e){
    stopSound();
    createjs.Tween.removeTweens(hero);

    clearTimeout(to);
    clearTimeout(sndto);

    levelaborted = true; //set to TRUE so rewardscreen doesn't show

    //deactivate key input
    _active = false;
    _moving = false;
    _jumping = false;
    buttonsOFF();

    endLevel();
}


// left/right movement
function checkMove_h(dir){
    if(_moving){ return false; }

    _scared = false;
    //hero distance from left and right edges of screen (Dependent on lvlContainer.x and html5game.width)
    herodistLEFT =  (hero.x + lvlContainer.x);
    herodistRIGHT = html5game.width - herodistLEFT;
    dist_right = (lvl_width + lvlContainer.x - html5game.width) *sFactor;


    if(dir=='left'){
        //return if at leftmost edge
        if(currentCol==0){ hero.gotoAndStop('down'); return false;}
        moveToX = currentCol -1;
        moveToY = currentRow;
    }
    if(dir=='right'){
        //return if at rightmost edge
        if(currentCol==tiles[0].length-1){ hero.gotoAndStop('down'); return false;}
        moveToX = currentCol +1;
        moveToY = currentRow;
    }

    //if tile in direction of move is a WALL, return
    if(tiles[currentRow][moveToX].wall){
        moveToX = currentCol;
        moveToY = currentRow;
        hero.gotoAndStop('down');

        //snd
        if(!sndplaying) playSound('bump');

        return;
    }

    checkWalls(dir);
    hero.gotoAndPlay(dir);

    _moving = true;
    _jumping = false;

    //snd
    if(!sndplaying) playSound('move_'+dir);

    //panning movement:
    if(dir=='left') {
        panToX = lvlContainer.x+mapData.tilewidth*sFactor;

        lvlStatic.cache(-1*lvlContainer.x - TILESIZE,(-1*lvlContainer.y), html5game.width+TILESIZE*sFactor, html5game.height + dPadHeight);
        createjs.Tween.get(lvlContainer, {loop:false})
         .to({
            x: panToX
        }, hero_speed, createjs.Ease.cubicInOut);
    }
    //if(panRIGHT && dist_right>=mapData.tilewidth*sFactor){
    if(dir=='right'){
        panToX = lvlContainer.x-mapData.tilewidth*sFactor;

        lvlStatic.cache(-1*lvlContainer.x,(-1*lvlContainer.y), html5game.width+TILESIZE*sFactor, html5game.height + 128);
        createjs.Tween.get(lvlContainer, {loop:false})
         .to({
            x: panToX
        }, hero_speed, createjs.Ease.cubicInOut);
    }


    //hero movement:
    createjs.Tween.get(hero, {loop:false})
     .to({
        x:tiles[currentRow][moveToX].x + offsetX
    }, hero_speed, createjs.Ease.cubicInOut)
    .call(function(){
        hero.stop();
     })
    .wait(walkpause)
    .call(function(){
        _moving = false;
        if(next_pkin==-1 && pumpkins.length>0) findNextPumpkin();
     });

    currentCol = moveToX;
    prevTile = currentTile;
    currentTile = tiles[currentRow][currentCol];
     //hero's speed changes to tile it just landed on
    hero_speed = currentTile.speed;

    checkPumpkins();
    checkLeafpiles();
    if(thebunny.revealed && !thebunny.found) check_thebunny();

    //only allow end level on reaching exit if all pumpkins collected (or no pumpkins in lvl at all)
    if(pumpkins.length==0){
        show_offscreen_exit();
        checkWin();
    }

    //hero.x = tiles[currentRow][moveTo].x + offsetX;
}

function checkMove_v(dir){
    if(_moving){ return false; }

    _scared = false;
    _jumping = true; //to disallow jumping (Which isn't enabled anyways...)

    if(dir=='up'){
        //return if at topmost edge
        if(currentRow==0){ hero.gotoAndStop('down'); return false;}
        moveToY = currentRow -1;
        moveToX = currentCol;
    }
    if(dir=='down'){
        //return if at bottommost edge
        if(currentRow==tiles[0].length-1){ hero.gotoAndStop('down'); return false;}
        moveToY = currentRow +1;
        moveToX = currentCol;
    }

    //if tile in direction of move is a WALL, return
    if(tiles[moveToY][currentCol].wall){
        moveToY = currentRow;
        moveToX = currentCol;
        hero.gotoAndStop('down');
        //snd
        if(!sndplaying) playSound('bump');

        return;
    }

    checkWalls(dir);
    hero.gotoAndPlay(dir);

    _moving = true;

    //snd
    if(!sndplaying) playSound('move_'+dir);

    //panning movement:
    if(dir=='up'){
        var cacheY = -1*lvlContainer.y - mapData.tileheight*sFactor;
        lvlStatic.cache(-1*lvlContainer.x,cacheY, html5game.width, html5game.height + 2*mapData.tileheight);

        panToY = lvlContainer.y+mapData.tileheight*sFactor;

        createjs.Tween.get(lvlContainer, {loop:false})
         .to({
            y: panToY
        }, hero_speed, createjs.Ease.cubicInOut);
    }


    if(dir=='down'){
        var cacheY = -1*lvlContainer.y;
        lvlStatic.cache(-1*lvlContainer.x,cacheY, html5game.width, html5game.height + 2*mapData.tileheight);

        panToY = lvlContainer.y-mapData.tileheight*sFactor

        createjs.Tween.get(lvlContainer, {loop:false})
         .to({
            y: panToY
        }, hero_speed, createjs.Ease.cubicInOut);
    }

    //hero movement:
    createjs.Tween.get(hero, {loop:false})
     .to({
        y:tiles[moveToY][currentCol].y + offsetY,
    }, hero_speed, createjs.Ease.cubicInOut)
     .call(function(){
        hero.stop();
     })
     .wait(walkpause)
     .call(function(){
        _moving = false;
        if(next_pkin==-1 && pumpkins.length>0) findNextPumpkin();
     });

    currentRow = moveToY;
    prevTile = currentTile;
    currentTile = tiles[currentRow][currentCol];

    //hero's speed changes to tile it just landed on
    hero_speed = currentTile.speed;


    checkPumpkins();
    checkLeafpiles();
    if(thebunny.revealed && !thebunny.found) check_thebunny();

    //only allow end level on reaching exit if all pumpkins collected (or no pumpkins in lvl at all)
    if(pumpkins.length==0){
        show_offscreen_exit();
        checkWin();
    }

}

//checks if hero in same position as any enemy, if so-- a hit, do lose conditions
//**ON EVERY TICK B/C ENEMIES KEEP MOVING EVEN IF PLAYER IS NOT
function checkHurt(){
    if(!_active) return;
    if(_scared) return;

    var enemy;
    for(var i=0;i<enemies.length;i++){
        enemy = enemies[i];
        if((currentTile.x == enemy[enemy.pos].x) && (currentTile.y == enemy[enemy.pos].y) ){
            //**console.log("OUCH!!")

            //hero_dies();
            _scared = true;

            setTimeout(function(){
                hero_scared(enemy);
            }, 200);
            //hero_scared();

            return;
        }
    }
}

function hero_scared(enemy){
    strikes++;
    //**console.log("num strikes: " + strikes);
    if(strikes==3) freezeEnemies();

    createjs.Tween.removeTweens(hero);
    createjs.Tween.removeTweens(lvlContainer);

    lvlContainer.x = panToX;
    lvlContainer.y = panToY;

    hero.x = tiles[currentRow][moveToX].x + offsetX;
    hero.y = tiles[moveToY][currentCol].y + offsetY;


    _moving = true; //disables user input
    _scared = true; //prevents hero_scared from being called on tick

    stopSound();
    clearTimeout(sndto);

    //uncomment to have George pop up scared when he touches an enemy
    /*
    clearTimeout(to);
    georgeHUD.onAnimationEnd = null;
    georgeHUD.emotion = 'scared';
    georgeHUD.gotoAndPlay('scared');
    georgeHUD.x = 0;
    georgeHUD.visible = true;
    */

    //play enemy-specific scared sound:
    //**console.log('enemY:  ' + enemy.name)
    playSound(enemy.name+'_boo');


    btnUP.visible = false;
    btnDOWN.visible = false;
    btnLEFT.visible = false;
    btnRIGHT.visible = false;

    var dir;
    //compare currentTile to prevTile to determine moveToX and moveToY
    var amount = scared_amount;

    //figuring out which direction hero is running to
    if(prevTile.y == currentTile.y){
        if(prevTile.x < currentTile.x){dir = 'left'; hero.gotoAndPlay('left');}
        if(prevTile.x > currentTile.x){dir = 'right'; hero.gotoAndPlay('right');}
    }
    else{
        if(prevTile.y < currentTile.y){dir = 'up'; hero.gotoAndPlay('up');}
        if(prevTile.y > currentTile.y){dir = 'down'; hero.gotoAndPlay('down');}
    }

    ////**console.log("scared move, wall?: " + tiles[moveToY][moveToX].wall);
    //**console.log('scared run to: ' + dir);

    moveToX = currentCol;
    moveToY = currentRow;
    //**figuring out how far to move, based on walls
    if(dir=='left'){
        moveToX = currentCol;
        for(var i=1;i<=amount;i++){
            if(moveToX==0){break;}
            if(tiles[currentRow][moveToX-1].wall){break;}
            else{moveToX--;}
        }
        if(tiles[currentRow][moveToX].wall){moveToX=currentCol;}

        amount = currentCol - moveToX;
    }
    if(dir=='right'){
        moveToX = currentCol;
        for (var i=1;i<=amount;i++){
            if(moveToX == nCOLS-1){break;}
            if(tiles[currentRow][moveToX+1].wall){break;}
            else{moveToX++;}
        }
        if(tiles[currentRow][moveToX].wall){moveToX=currentCol;}

        amount = moveToX - currentCol;
    }
    if(dir=='up'){
        moveToY = currentRow;
        for(var i=1;i<=amount;i++){
            if(moveToY==0){break;}
            if(tiles[moveToY-1][currentCol].wall){break;}
            else{moveToY--;}
        }
        if(tiles[moveToY][currentCol].wall){moveToY=currentRow;}

        amount = currentRow - moveToY;
    }
    if(dir=='down'){
        moveToY = currentRow;
        for(var i=1;i<=amount;i++){
            if(moveToY==nROWS-1){break;}
            if(tiles[moveToY+1][currentCol].wall){break;}
            else{moveToY++;}
        }
        if(tiles[moveToY][currentCol].wall){moveToY=currentRow;}

        amount = moveToY - currentRow;
    }

    //**console.log('scared: ' + dir + "  for "  + amount + " tiles");
    scared_run(dir, amount);
}

//scared running, MOVING ONE TILE AT A TIME, determing whether to pan or not per each tile move.
//recursive, decrements amount by one after each tile move, until amount==0
function scared_run(dir, amount){
    //**console.log('scaredrun: amount: ' + amount)
    if(amount==0){
        stop_scared_run(dir);
        return;
    }

    if(dir=='left') moveToX = currentCol -1;
    if(dir=='right') moveToX = currentCol +1;
    if(dir=='up') moveToY = currentRow -1;
    if(dir=='down') moveToY = currentRow +1;


    panToX = lvlContainer.x + tiles[currentRow][currentCol].x - tiles[currentRow][moveToX].x;
    panToY = lvlContainer.y + tiles[currentRow][currentCol].y - tiles[moveToY][currentCol].y;

    //pan movement
        if(dir=='left'){
            lvlStatic.cache(-1*lvlContainer.x - TILESIZE,(-1*lvlContainer.y), html5game.width+TILESIZE*sFactor, html5game.height + dPadHeight);
            createjs.Tween.get(lvlContainer, {loop:false})
             .to({
                x: panToX
            }, scared_speed, createjs.Ease.none);
        }
        if(dir=='right'){
            lvlStatic.cache(-1*lvlContainer.x,(-1*lvlContainer.y), html5game.width+TILESIZE*sFactor, html5game.height + 128);
            createjs.Tween.get(lvlContainer, {loop:false})
             .to({
                x: panToX
            }, scared_speed, createjs.Ease.none);
        }
        if(dir=='up'){
            var cacheY = -1*lvlContainer.y - mapData.tileheight*sFactor;
            lvlStatic.cache(-1*lvlContainer.x,cacheY, html5game.width, html5game.height + 2*mapData.tileheight);
            createjs.Tween.get(lvlContainer, {loop:false})
             .to({
                y: panToY
            }, scared_speed, createjs.Ease.none);
        }
        if(dir=='down'){
            var cacheY = -1*lvlContainer.y;
            lvlStatic.cache(-1*lvlContainer.x,cacheY, html5game.width, html5game.height + 2*mapData.tileheight);
            createjs.Tween.get(lvlContainer, {loop:false})
             .to({
                y: panToY
            }, scared_speed, createjs.Ease.none);
        }

    //hero movement
    createjs.Tween.get(hero, {loop:false})
         .to({
            x:tiles[currentRow][moveToX].x + offsetX,
            y:tiles[moveToY][currentCol].y + offsetY
        }, scared_speed, createjs.Ease.none)
         .wait(20)
        .call(function(){
            amount--;

            prevTile = currentTile;
            currentRow = moveToY;
            currentCol = moveToX;
            currentTile = tiles[currentRow][currentCol];
            hero_speed = currentTile.speed;

            checkPumpkins(); //checking for collision w/ non-moving collectables on each scared tile move:
            if(thebunny.revealed && !thebunny.found) check_thebunny();

            scared_run(dir, amount);
        });

}

function stop_scared_run(dir){
        //**console.log('scared done');
        hero.gotoAndStop('down');

        //uncomment to have George finish his pop-up scared anim.
        /*
        clearTimeout(to);
        georgeHUD.onAnimationEnd = hide_georgeHUD;
        georgeHUD.gotoAndPlay('scared_reverse');
        */

        //fix for level pan and george positioning, so George is centered within dpad arrows
        lvlContainer.x = panToX;
        lvlContainer.y = panToY;

        hero.x = tiles[currentRow][moveToX].x + offsetX;
        hero.y = tiles[moveToY][currentCol].y + offsetY;

        _moving=false;
        _scared=false;

        if(next_pkin==-1 && pumpkins.length>0) findNextPumpkin();

        checkWalls(dir);
}


//OLD: hero death anim, calls endLevel upon completion
function hero_dies(){
    createjs.Tween.removeTweens(hero);

    //deactivate key input
    _active = false;
    _moving = false;
    _jumping = false;
    buttonsOFF();

    stopSound();
    clearTimeout(to);
    clearTimeout(sndto);
    //georgeHUD.onAnimationEnd = null;
    georgeHUD.emotion = 'scared';
    georgeHUD.gotoAndPlay('scared');
    georgeHUD.x = 0;
    georgeHUD.visible = true;

    //death anim: make sure hero is positioned at tile where he died, change to death frame ('down') once in position.
    createjs.Tween.get(hero, {loop:false})
        .to({x: currentTile.x, y: currentTile.y }, hero_speed, createjs.Ease.none)
        .call(function(){
            hero.gotoAndStop('down');
            playGeorge(randomInt(-1,0) );
        })
        .wait(600)
        .to({y: hero.y+500 }, 2000, createjs.Ease.none)
        .call(endLevel);

}

function init_checkWalls(){
    adjUP.visible = false;
    adjDOWN.visible = false;
    adjLEFT.visible = false;
    adjRIGHT.visible = false;

    var cl = currentCol -1;
    var cr = currentCol +1;
    var cu = currentRow -1;
    var cd = currentRow +1;

    if(cl==0 || tiles[currentRow][cl].wall) btnLEFT.visible = false;
    else btnLEFT.visible = true;

    if((cr==nCOLS-1) || tiles[currentRow][cr].wall) btnRIGHT.visible = false;
    else btnRIGHT.visible = true;

    if(cu==0 || tiles[cu][currentCol].wall) btnUP.visible = false;
    else btnUP.visible = true;

    if((cd==nROWS-1) || tiles[cd][currentCol].wall) btnDOWN.visible = false;
    else btnDOWN.visible = true;

}

function checkWalls(dir){
    //hero is at currentTile (tiles[currentRow][currentCol])

    adjUP.visible = false;
    adjDOWN.visible = false;
    adjLEFT.visible = false;
    adjRIGHT.visible = false;

    var cl,cr,cu,cd;

    if(!dir){cl=moveToX; cr=moveToX; cu=moveToY; cd=moveToY;}
    if(dir=='left'){cl=moveToX-1; cr=moveToX; cu=moveToY-1; cd=moveToY+1;}
    if(dir=='right'){cl=moveToX;cr=moveToX+1;cu=moveToY-1; cd=moveToY+1;}
    if(dir=='up'){cl=moveToX-1;cr=moveToX+1;cu=moveToY-1;cd=moveToY;}
    if(dir=='down'){cl=moveToX-1;cr=moveToX+1;cu=moveToY;cd=moveToY+1;}

    if(cl<0) cl=0;
    if(cr>=nCOLS) cr = nCOLS-1;
    if(cu<0) cu=0;
    if(cd>=nROWS) cd=nROWS-1;


    if(cl==0 || tiles[moveToY][cl].wall) btnLEFT.visible = false;
    else btnLEFT.visible = true;

    if((cr==nCOLS-1) || tiles[moveToY][cr].wall) btnRIGHT.visible = false;
    else btnRIGHT.visible = true;

    if(cu==0 || tiles[cu][moveToX].wall) btnUP.visible = false;
    else btnUP.visible = true;

    if((cd==nROWS-1) || tiles[cd][moveToX].wall) btnDOWN.visible = false;
    else btnDOWN.visible = true;

    //pumpkin arrows-- having them appear AFTER george finishes walking:
    setTimeout(function(){
        if(tiles[moveToY][cl].pkin){ adjLEFT_img.gotoAndStop('pkin'); adjLEFT.visible = true; btnLEFT.visible=false;}
        else adjLEFT.visible = false;

        if(tiles[moveToY][cr].pkin){ adjRIGHT_img.gotoAndStop('pkin'); adjRIGHT.visible = true; btnRIGHT.visible=false;}
        else adjRIGHT.visible=false;

        if(tiles[cu][moveToX].pkin){ adjUP_img.gotoAndStop('pkin'); adjUP.visible = true; btnUP.visible=false;}
        else adjUP.visible =false;

        if(tiles[cd][moveToX].pkin){ adjDOWN_img.gotoAndStop('pkin'); adjDOWN.visible = true; btnDOWN.visible=false;}
        else adjDOWN.visible=false;
    }, hero_speed);

}


function checkPumpkins(){
    if(next_pkin!=-1) show_offscreen_pumpkin();

    var pkin;

    for(var i=0;i<pumpkins.length;i++){
        pkin = pumpkins[i];
        if((currentTile.x == pkin.x) && (currentTile.y == pkin.y) ){
            ////**console.log("PUMPKIN FOUND")
            stopSound();
            clearTimeout(to);
            clearTimeout(sndto);
            georgeHUD.onAnimationEnd = null;
            georgeHUD.emotion = 'happy';
            georgeHUD.gotoAndPlay('happy');
            georgeHUD.x = -30;
            georgeHUD.visible = true;

            //playGeorge(randomInt(1,3) );

            //removing from lvlContainer
            lvlContainer.removeChild(pkin);
            //setting this tiles .pkin value back to FALSe.
            currentTile.pkin = false;

            hud_ribbons[score_pumpkins].visible = true;
            hud_ribbons[score_pumpkins].num.visible = true;

            score_pumpkins++;

            playSound('ding', play_foundsound_pkin);
            //hud_pump_fill.graphics.clear();
            //hud_pump_fill.graphics.beginFill(color_hudfill).drawRoundRect(-5,0,60+score_pumpkins*50 + 5,50,20);

            pumpkins.remove(i);
            //**console.log("PUMPKINSLEFT: " + pumpkins.length)
            next_pkin = -1;

            if(pumpkins.length==0){
                //**console.log("ALL PUMPKINS COLLECTED.. OPEN EXIT, SHOW OFFSCREEN IF NEEDED.");
                find_exitTile();
            }
            else findNextPumpkin(); //called if any pumpkins remain

            return;
        }
    }
}

//called AFTER collecting pumpkin or upon completing a tile move (or scared run)
//determines:
//1 - if any pumpkin is close enough to be ON SCREEN... next_pkin =-1 (so no offscreen indic., findNextPumpkin set to call again on next move)
//2 - if all pumpkins are offscreen, find closest to george, set its index to next_pkin
    // a non -1 value for next_pkin has show_offscreen_pumpkin() and checkPumkin_offscreen() called whenever checkPumpkin is called (every move)
function findNextPumpkin(){
    var d = -1;
    var check_pkin, xThresh, yThresh, pkin, distX, distY;

    for(var i=0;i<pumpkins.length;i++){
        ////**console.log('distance to pumpkin ' + i + ': ' + getDist(hero,pumpkins[i]) );
        pkin = pumpkins[i];

        distX = Math.abs(tiles[moveToY][moveToX].x-pkin.x);
        distY = Math.abs(tiles[moveToY][moveToX].y-pkin.y);

        if(tiles[moveToY][moveToX].x >= pkin.x) xThresh = 384;
        else xThresh = 432;
        var yThresh;
        if(tiles[moveToY][moveToX].y >= pkin.y) yThresh = 144;
        else yThresh = 192;


        if( distY<=yThresh && distX<=xThresh){
            ////**console.log('some pkin close enough!!');
            next_pkin = -1;
            next_pkin_dir = "";
            return;
        }
        else if(d == -1 || d>getDist(hero,pkin) ){
            d = getDist(hero,pkin);
            check_pkin = pkin;
        }
    }

    //
    distX = Math.abs(hero.x-check_pkin.x);
    distY = Math.abs(hero.y-check_pkin.y);

    ////**console.log("distX: " + distX + "... can.w/2: " + html5game.width/2)
    ////**console.log("distY: " + distY + "... can.h/2: " + html5game.height/2)

    //determining whether pumpkin is offscreen or not
    if(distX >= (html5game.width/2 - 1*mapData.tilewidth) || distY >= (html5game.height/2 - 1*mapData.tileheight) ){
        ////**console.log("**** OFFSCREEN!!!! ***");
        next_pkin = pumpkins.indexOf(check_pkin);
    }
    else{
        ////**console.log('NOT OFF SCREEN');
        next_pkin = -1;
        next_pkin_dir = "";
    }


    ////**console.log('&*&* offscreen pumpkin? :  ' + next_pkin);
    if(next_pkin!=-1) show_offscreen_pumpkin();
}

//IF closest pumpkin is OFFSCREEN (next_pkin!=-1):
//called whenever checkPumpkin is called (every move or scared move)..
//shows appropriate offscreen indicator, then calls checkPumkin_offscreen()
function show_offscreen_pumpkin(){
    ////**console.log("show_offscreen_pumpkin");
    pkin = pumpkins[next_pkin];

    var diffX = pkin.x - hero.x;
    var diffY = pkin.y - hero.y;

    if(Math.abs(diffX) >= Math.abs(diffY)){
        //pkin is LEFT
        if(diffX<0){
            ////**console.log("pkin is LEFT")
            offscreenLEFT.visible=true;
            next_pkin_dir = "h";
        }
        //pkin is RIGHT
        if(diffX>0){
            ////**console.log("pkin is RIGHT")
            offscreenRIGHT.visible=true;
            next_pkin_dir = "h";
        }
    }
    else{
        //pkin is ABOVE
        if(diffY<0){
            ////**console.log("pkin is ABOVE")
            offscreenUP.visible=true;
            next_pkin_dir = "v";
        }
        //pkin is BELOW
        if(diffY>0){
            ////**console.log("pkin is BELOW")
            offscreenDOWN.visible=true;
            next_pkin_dir = "v";
        }
    }

    ////**console.log('next_pkin_dir: ' + next_pkin_dir)
    checkPumkin_offscreen();
}

//checks to see if current next_pkin (offscreen pumpkin) is no longer offscreen, hides indicators if so.
function checkPumkin_offscreen(){
    ////**console.log('checking if pumpkin  ' + next_pkin + ' is still offscreen...');

    var pkin = pumpkins[next_pkin];
    var distX = Math.abs(tiles[moveToY][moveToX].x - pkin.x);
    var distY = Math.abs(tiles[moveToY][moveToX].y - pkin.y);


    ////**console.log("dir: " + next_pkin_dir + " .. distX: " + distX + "  ..  distY: " + distY);
        //x dist hero LEFT (george.x<pkin.x): 9 tiles (9*48 = 432)
        //x dist hero RIGHT (george.x>pkin.x): 8 tiles (8*48 = 384)
        //y dist HERO ABOVE(george.y<pkin.y): 4 tiles (4*48 = 192)
        //y dist HERO BELOW(george.y>pkin.y): 3 tiles (3*48 = 144)

    var xThresh;
    if(tiles[moveToY][moveToX].x >= pkin.x) xThresh = 384;
    else xThresh = 432;
    var yThresh;
    if(tiles[moveToY][moveToX].y >= pkin.y) yThresh = 144;
    else yThresh = 192;

    if( distY<=yThresh ){
        ////**console.log('*&* close enough! V');
        offscreenDOWN.visible=false;
        offscreenUP.visible=false;
    }
    if( distX<=xThresh ){
        ////**console.log('*&* close enough! H');
        offscreenLEFT.visible=false;
        offscreenRIGHT.visible=false;
    }
}

function play_foundsound_pkin(){
    sndto=setTimeout(function(){
        if(pumpkins.length==0) {
            var r = randomInt(1,2);
            var s;
            if(r==1) s='hoorayallpumpkins';
            if(r==2) s='foundallgreatjob';
            playSound(s, play_findexit);
        }
        else{ playSound( ('found' + score_pumpkins.toString()),  play_findexit); }
    }, 500);
}
function play_foundsound_bunny(){
    sndto=setTimeout(function(){
        playSound( 'caughtbunny' + lvl.toString(), reset_georgeHUD );
    }, 500);
}
function play_findexit(){
    reset_georgeHUD();

    if(pumpkins.length==0){
        sndto=setTimeout(function(){
            var r = randomInt(1,2);
            if(r==1) playSound('nowfindfestival1');
            if(r==2) playSound('nowfindfestival2');
        }, 500);
    }
}
function check_thebunny(){

    //first, check if ON bunny:
    if((currentTile.x == thebunny.x) && (currentTile.y == thebunny.y) ){
        ////**console.log("BUNNY FOUND")
        stopSound();

        clearTimeout(sndto);

        //uncomment to have George pop up happy on bunny capture
        /*
        //georgeHUD.onAnimationEnd = reset_georgeHUD;
        clearTimeout(to);
        georgeHUD.emotion = 'happy';
        georgeHUD.gotoAndPlay('happy');
        georgeHUD.x = -30;
        georgeHUD.visible = true;
        */

        var s;
        var r = randomInt(1,2);
        if(r==1) s = 'yeeha';
        if(r==2) s = 'whee';
        //playGeorge(randomInt(1,2) );
        playSound(s, play_foundsound_bunny);

        //removing from lvlContainer
        lvlContainer.removeChild(thebunny);
        thebunny.found = true;

        hudbunny.gotoAndStop(lvl);
        hudbunny.visible = true;

        return;
    }

    //if not ON bunny, check if adjacent to bunny (after movement complete)
    setTimeout(function(){
        var tL = sFactor * (thebunny.x - mapData.tilewidth);
        var tR = sFactor * (thebunny.x + mapData.tilewidth);
        var tU = sFactor * (thebunny.y - mapData.tileheight);
        var tD = sFactor * (thebunny.y + mapData.tileheight);

        if((currentTile.y == thebunny.y) && (currentTile.x == tR)){ adjLEFT_img.gotoAndStop('bunny' + lvl.toString()); adjLEFT.visible = true; btnLEFT.visible=false; return;}
        if((currentTile.y == thebunny.y) && (currentTile.x == tL)){ adjRIGHT_img.gotoAndStop('bunny' + lvl.toString()); adjRIGHT.visible = true; btnRIGHT.visible=false; return;}
        if((currentTile.x == thebunny.x) && (currentTile.y == tD)){ adjUP_img.gotoAndStop('bunny' + lvl.toString()); adjUP.visible = true; btnUP.visible=false; return;}
        if((currentTile.x == thebunny.x) && (currentTile.y == tU)){ adjDOWN_img.gotoAndStop('bunny' + lvl.toString()); adjDOWN.visible = true; btnDOWN.visible=false; return;}
    }, hero_speed);

}

function checkLeafpiles(){
    var lp;

    for(var i=0;i<leafpiles.length;i++){
        lp = leafpiles[i];

        if (currentRow == lp.row){
            if( (currentCol == lp.col1) || (currentCol == lp.col2) || (currentCol == lp.col3) ){
                //**console.log("LEAFPILE FOUND");
                current_leafpile = lp;
                if(current_leafpile == bunny_leafpile){
                    stopSound();
                    clearTimeout(to);
                    clearTimeout(sndto);
                    playSound('ding');

                    //georgeHUD.onAnimationEnd = reset_georgeHUD;
                    georgeHUD.emotion = 'happy';
                    georgeHUD.gotoAndPlay('happy');
                    georgeHUD.x = -30;
                    georgeHUD.visible = true;

                    thebunny.y += bunnypeek;
                }

                leafpiles.remove(leafpiles.indexOf(current_leafpile));

                current_leafpile.onAnimationEnd = leafpile_1;
                current_leafpile.gotoAndPlay('begin');
                return;
            }
        }

    }
}

//leafpile animations:
function leafpile_1(e){
    current_leafpile.onAnimationEnd = leafpile_2;
    current_leafpile.gotoAndPlay('mid');
}
function leafpile_2(e){
    current_leafpile.onAnimationEnd = leafpile_3;
    current_leafpile.gotoAndPlay('end');
}
function leafpile_3(e){
    current_leafpile.onAnimationEnd = null;

    createjs.Tween.get(current_leafpile, {loop:false})
        .to({alpha:0 }, 600, createjs.Ease.none)
        .call(function(){
            //removing from lvlContainer
            lvlContainer.removeChild(current_leafpile);

            //**console.log("leafpiles left: " + leafpiles.length);

            //if leafpile just played is bunny_leafpile, have thebunny run!
            if(current_leafpile == bunny_leafpile) bunnyRun();
        });
}

function bunnyRun(){
    stopSound();
    clearTimeout(to);
    clearTimeout(sndto);


    playSound('foundbunnynowcatch', reset_georgeHUD);

    var dir ='left';
    var dest;

    if(hero.y==thebunny.y){
        if(hero.x<thebunny.x) dir='right';
        if(hero.x>=thebunny.x) dir='left';
    }
    else{
        if(hero.y>=thebunny.y) dir='up';
        else dir='down';
    }


    thebunny.gotoAndPlay(dir+lvl.toString());

    //**console.log('bunnyRun: ' + dir);

    var q=2;
    if(dir=='right'){
        if(!tiles[bunny_leafpile.row][bunny_leafpile.col3].wall){ dest = tiles[bunny_leafpile.row][bunny_leafpile.col3];}
        else{ dest = tiles[bunny_leafpile.row][bunny_leafpile.col2]; q=1; }
    }
    if(dir=='left'){
        if(!tiles[bunny_leafpile.col1-2][bunny_leafpile.row].wall) dest = tiles[bunny_leafpile.row][bunny_leafpile.col1-1];
        else{ dest = tiles[bunny_leafpile.row][bunny_leafpile.col1]; q=1;}
    }
    if(dir=='up'){
        dest = tiles[bunny_leafpile.row-1][bunny_leafpile.col1]; q=1;
    }
    if(dir=='down'){
        dest = tiles[bunny_leafpile.row+1][bunny_leafpile.col1]; q=1;
    }

    //**console.log("bunnyRun dest.x is: " + dest.x)

    if(dir=='right' || dir=='left'){
        createjs.Tween.get(thebunny, {loop:false})
            .to({x:dest.x}, hero_speed*q, createjs.Ease.none)
            .call(function(){
                thebunny.gotoAndStop('idle'+lvl.toString() );
                thebunny.revealed = true;
                check_thebunny();
            });
    }
    else if(dir=='up' || dir=='down'){
        createjs.Tween.get(thebunny, {loop:false})
            .to({y:dest.y }, hero_speed*q, createjs.Ease.none)
            .call(function(){
                thebunny.gotoAndStop('idle'+lvl.toString() );
                thebunny.revealed = true;
                check_thebunny();
            });
    }

}

function find_exitTile(){
    //**console.log('finding exit tile');


    //check all exitwall tiles, open them up! and hide exitwall's tiles (which are above bg)
    for (var i=0; i<exitwall.length;i++){
        var t = tiles[exitwall[i].col][exitwall[i].row];
        ////**console.log("opening: " + exitwall[i].col +", " + exitwall[i].row )
        t.wall = false;
        t.visible = false;
    }
    lvlStatic.cache(hero.x-html5game.width/2,(-1*lvlContainer.y -(mapData.tileheight*sFactor) ), html5game.width+2*mapData.tilewidth*sFactor, html5game.height + 2*mapData.tileheight*sFactor);

    //change the offScreen arrows inset img
    offscreenUP_pkin.gotoAndStop('exit');
    offscreenDOWN_pkin.gotoAndStop('exit');
    offscreenLEFT_pkin.gotoAndStop('exit');
    offscreenRIGHT_pkin.gotoAndStop('exit');
    //

    show_offscreen_exit();
}

function show_offscreen_exit(){

    var diffX = fairground.x - hero.x;
    var diffY = fairground.y - hero.y;

    if(Math.abs(diffX) >= Math.abs(diffY)){
        //exit is LEFT
        if(diffX<0) offscreenLEFT.visible=true;
        //exit is RIGHT
        if(diffX>0) offscreenRIGHT.visible=true;
    }
    else{
        //exit is ABOVE
        if(diffY<0) offscreenUP.visible=true;
        //exit is BELOW
        if(diffY>0) offscreenDOWN.visible=true;
    }

    //
    var distX = Math.abs(tiles[moveToY][moveToX].x - fairground.x);
    var distY = Math.abs(tiles[moveToY][moveToX].y - fairground.y);

    var xThresh;
    if(tiles[moveToY][moveToX].x >= fairground.x) xThresh = 384;
    else xThresh = 432;
    var yThresh;
    if(tiles[moveToY][moveToX].y >= fairground.y) yThresh = 144;
    else yThresh = 192;

    if( distY<=yThresh ){
        ////**console.log('*&* close enough! V');
        offscreenDOWN.visible=false;
        offscreenUP.visible=false;
    }
    if( distX<=xThresh ){
        ////**console.log('*&* close enough! H');
        offscreenLEFT.visible=false;
        offscreenRIGHT.visible=false;
    }

}

function checkWin(){
    //if(currentTile == endTile){
    if( (currentTile.x>=fairground.x) && (currentTile.x<=fairground.x+fairground.image.width)
        && (currentTile.y>=fairground.y) && (currentTile.y<=fairground.y+fairground.image.height) ){
        //**console.log("WIN");

        //setting level's PERMANENT statuses:
        if(pumpkins.length==0 && score_pumpkins>0) signposts[lvl].GOTpumpkins = true;
        if(thebunny.found) signposts[lvl].GOTbunnies = true;


        createjs.Tween.get(hero, {loop:false})
            .to({x: currentTile.x, y: currentTile.y }, hero_speed, createjs.Ease.none)
            .call(function(){
                //playGeorge(randomInt(1,3) );
                endLevel();
            });
    }
}

function endLevel(){
    //createjs.Tween.removeTweens(hero);
    stopSound();

    //deactivate key input
    _active = false;
    _moving = false;
    _jumping = false;
    buttonsOFF();

    //optional fade away of fadeBox before calling endLevel
    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:1}, 1000, createjs.Ease.none)
    .call(nextLevel);
}

//called on hero death AND beating level-- can trigger same or different level to load
function nextLevel(){
    stage.removeChild(lvlContainer);
    lvlContainer = null;
    lvlStatic = null;
    stage.removeAllChildren();

    //stage.update();
    //createjs.Ticker.removeListener(game_tick);
    createjs.Tween.removeAllTweens();

    tiles = [];
    exitwall = [];

    enemies = [];
    strikes = 0;
    friends = [];
    pumpkins = [];
    next_pkin = -1;
    leafpiles = [];
    current_leafpile={};

    //pumpkin & bunny score resets to 0 on each level start
    score_pumpkins = 0;
    hud_pumpkins = [];
    hud_ribbons = [];

    //restoring hero_speed to ORIG
    hero_speed = hero_speed_ORIG;

    //only show reward screens if all pumpkins found in THIS playthrough (not checking persistent level statuses here)
    if(!levelaborted) show_reward();
    else bringup_levelSelect();


}

function show_reward(){
    //switch to BUNNY reward screen if bunny found in THIS playthrough
    if(thebunny.found) rewardscreen = reward_bunnies;
    else rewardscreen = reward_nobunnies;

    rewardscreen.mask = gamemask;

    stage.addChild(rewardscreen);
    stage.addChild(fadeBox);
    stage.addChild(canvasblueborder);

    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:0}, 500, createjs.Ease.none)
     .call(function(){
        playMYH_payoff(randomInt(1,3));
        //rewardscreen.onPress = goToLevelSelect;
        setTimeout(goToLevelSelect, 4000);
     });
}

function goToLevelSelect(e){
    //rewardscreen.onPress = null;

    createjs.Tween.get(fadeBox, {loop:false})
     .to({alpha:1}, 500, createjs.Ease.none)
     .call(function(){
        createjs.Ticker.removeListener(game_tick);
        bringup_levelSelect();
     });
}


//** TICKER -- only triggers when a level is active
function game_tick(){
    //do movement/action is respective bool is true (via keypress or mousebtn down)

    if(doUP) checkMove_v('up');
    if(doDOWN) checkMove_v('down');
    if(doLEFT) checkMove_h('left');
    if(doRIGHT) checkMove_h('right');

    //checking for player-enemy/friend colisions (on every tick b/c frenemies move)
    checkHurt();
    //checkBunnies();

    stage.update();
}



//GENERAL FUNCTIONS:
//adds standard 'sticker'-style dropshadow to passed DisplayObject
//params: Shadow ( color  offsetX  offsetY  blur )
function addShadow(obj){
    obj.shadow = new createjs.Shadow("#213652", 2, 3, 20);
}
function removeShadow(obj){
    obj.shadow = null;
}

//****************
//HELPER FUNCTIONS:


//OLD / wasn't reliable
function distance(obj1, obj2){
    var answer = 0;

    var distanceX = Math.abs(obj2.x - obj1.x);
    var distanceY = Math.abs(obj2.y - obj1.y);

    return distanceY/distanceX;
}


//gets length of diagonal line between 2 objects using pythagorem theorem!
function getDist(obj1, obj2){
    var C2  = 0;
    var C = 0;

    var A = Math.abs(obj2.x - obj1.x);
    var B = Math.abs(obj2.y - obj1.y);

    C2 = (A^2) + (B^2);
    C = Math.sqrt(C2);

    return C;
}

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