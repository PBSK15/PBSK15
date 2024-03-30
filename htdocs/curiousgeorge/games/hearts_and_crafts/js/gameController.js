/////////////////////////////////////////////////////////////////////////
//
//  Valentine's Day Game - George's Hearts and Crafts - Curious George           
//
//  Copyright © 2015 WGBH Digital                                 
//  WGBH Educational Foundation
//
//  Main javascript programming for Valentine's Day Game.
//
/////////////////////////////////////////////////////////////////////////
//; var gameController = 
;(function(gameController,$,undefined) {

	// VARIABLES ********************************************************

	// STATIC
	var STAGE_FPS = 30,			// stage frames per second
		IMG_PATH = 'img/',		// path to images
		DATA_PATH = 'data/',	// path to data for levels
		ASSETS_PATH = 'assets/',	// path to animation assets
		GAME_WIDTH = 900,		//game canvas width
		GAME_HEIGHT = 609,		// game canvas height
		OFFSET = 0.6,
		CORRECT_TOTAL=4,		//total correct heart = 1 round

		//preloader vars
		pl_outer = "#00546e",	//preloader outer color
		pl_inner = "#3698c5",	//preloader inner color
		pl_bg = "#d3f28f",		//preloader bg
		pl_width = 400,			//preloader width
		pl_height = 60,			//preloader height
		pl_radius = 30,			//preloader rounded corner radius
		pl_x = GAME_WIDTH/2 - pl_width/2;	//preloader x pos
		pl_y = 382,				//preloaded y pos

		//shape vars
		SHAPE_WIDTH = 462,		// width of each heart shape
		SHAPE_HEIGHT = 468,		// height of each heart shape
		STROKE = 4,				//heart shape stroke thickness
		CAP = "round",			//heart shape line connection style
		FILL_COLOR = "rgba(238,49,40,254)",	//heart shape fill color
		STROKE_COLOR = "rgba(0,0,0,254)";	//heart shape stroke color
	
	// PARAMETERS
	var game_name,				// hold onto the name of the game for score
		game_width = 0,			// width of the game area
		game_height = 0,		// height of the game area
		original_scale=0.3,		// reduced scale for half hearts
		final_scale = 0.9,		// final scale of heart halves
		posSndIndx=0,			// indx for pos sound array
		negSndIndx=0,			// indx for neg sound array
		negSFXIndx=0,			// indx for george neg sound
		fdbkSndIndx=0,			// indx for george feddback sound
		sketchIndx=0,			// indx for sketch array
		charSndIndx=0,			// indx for receive card char sound array
		correctCount=1,			// current heart of total hearts
		currentLevel=0,			// current set of hearts
		correctIndx=0,			// correct heart to match
		loadedNum=0,			// num of objects loaded
		loadedTotal=0,			// num of objects loading total
		to=0,
		all_level_data_length=0;	// total number of levels available

	var dType = "";
	var browser = "";			 //to store specific type of browser

	// OBJECTS
	var c=createjs,				// reference to createjs namespace
		gamediv,				// pointer to div containing game elements
		game_canv,				// canvas for main game
		stage_game,				// stage for the main game
		stage_bg,				// stage for background		
		bg_cont,				// bg container
		fade_box,				// fade in/out box
		gameborder,				// blue border on game
		game_cont,				// container for game
		card_cont,				// container for card
		preload_cont,			// container for preloader
		who_cont,				// container for between card and success screen
		success_cont,			// container for round success
		loaderbar_george,		// george loading animation
		preloader_bg,			// preloader bar bg
		play_btn,				// play button
		splash_bg,				// game splash bitmap
		draggableObj,			// current object for sticky click
		targetObj,				// current droppable target
		heartLeft,				// TargetObject for heart to match
		heartRight1,			// DragObject for heart choice1
		heartRight2,			// DragObject for heart choice2
		heartRight3,			// DragObject for heart choice3
		cardHeart1,				// animated heart on card
		cardHeart2,				// animated heart on card
		cardHeart3,				// animated heart on card
		cardHeart4,				// animated heart on card
		cardText,				// PLACEHOLDER: text for card scene
		cardSketch,				// George's sketch for card
		successText,			// PLACEHOLDER: text for success scene
		successSketch,			// George's sketch for card on success screen
		charSprite,				// recipient sprite
		all_level_data,			// json for all levels data
		phrase_list,			// array of audio
		heartsJSON,				// json data for making vector hearts
		gamemask,				// mask for rounded corners
		gamesounds;				// CharacterSound object manages sound playback
		
	// FLAGS
	var update = true;			// should update game stage once;
		check_anim = false;		// should continueously update stage 
		updateBG=true;			// should update bg
		checking=false;			// is game doing logic checking? disable all interaction
		firstTime = true;		// first level of the game

	var dotouch = false;		// indicates if a touchscreen is in use
		
	// ARRAYS
	var spritesheet=[];
	var levelsArr=[];
	var image = [];
	var choicesIndx=[];
	var posSndArr = [0,1,2];
	var negSndArr = [0,1,2,3];
	var sketchArr=[1,2,3];
	var cardHeartsArr = [];
	var charArr = ["hundley","gnocchi","myh","allie","pisghetti"];
	//var charArr = ["allie","bill","charkie","doorman","gnocchi","hundley","marco","myh","pisghetti","wiseman"];

	
	// INIT OBJECTS *****************************************************

	function MatchObject(img,startX,startY)
	{
		this.Container_constructor();
		this.obj;
		this.img=img;
		this.bounds;
		this.pos = {
			'x':startX,
			'y':startY
		}
		this.setup();
	}
	var b=c.extend(MatchObject,c.Container);
	b.setup=function()
	{
		this.setBounds(0,0,SHAPE_WIDTH,SHAPE_HEIGHT);
		this.bounds = {
			'width':SHAPE_WIDTH,
			'height':SHAPE_HEIGHT
		}
		
		//this.debugDraw();
		this.setFrame(this.img);

		this.x = this.pos.x;
		this.y = this.pos.y;
	}

	b.debugDraw = function() {
		//trace(">>>		DEBUG DRAW?!")
		var rect=new c.Shape();
		rect.graphics.beginFill('#ddd').drawRect(0,0,SHAPE_WIDTH*.5,SHAPE_HEIGHT*.5).endFill();
		//rect.alpha=0.2;
		this.addChild(rect);
	}

	b.setFrame = function(frame) {
		if(this.obj!=null) {
			//trace("RESET GRAPHICS: "+frame)
			this.obj.graphics.clear().f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_left']).cp().ef().es();
		}else {
			//trace("CREATE NEW! "+frame)
			var g = new c.Graphics();
			g.f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_left']).cp().ef().es();

			this.obj= new c.Shape(g);
			this.obj.y = -SHAPE_HEIGHT*.5;
			this.addChild(this.obj);
			this.obj.name = "heart";
		}


		this.addChild(this.obj);
		update=true;
	}

	function AnimHeart(startX,startY)
	{
		this.Container_constructor();
		this.obj;
		this.pos = {
			'x':startX,
			'y':startY
		}
		this.setup();
	}
	var e=c.extend(AnimHeart,c.Container);
	e.setup=function()
	{
		this.bounds = {
			'width':138,
			'height':125.33
		}

		this.setFrame();
		this.reset();

		this.x = this.pos.x;
		this.y = this.pos.y;
	}

	e.setFrame = function() {
		if(this.obj!=null) this.obj.graphics.clear().f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_left']).cp().ef().es();
		else {
			var g = new c.Graphics();
			g.f(FILL_COLOR).ss(STROKE-1,CAP,CAP).s(STROKE_COLOR).p("AK8SwYAAAApslAAAnCYAAAAAAleFUAAYAAAADIgKBGCqYAAAABaiqDcAKYAAAAEYAoAeEOYAoEOjwEsmaDw").cp().ef().es();

			this.obj= new c.Shape(g);
			this.obj.y = -this.bounds.width*.5;
			this.obj.x = -this.bounds.height*.5;
			this.addChild(this.obj);
			this.obj.name = "heart";
		}


		this.addChild(this.obj);
		update=true;
	}

	e.animateIt = function(){
		this.reset();
		check_anim=true;
		setTimeout(function(){
			playSFXSound("sfx_pop");
		},500);
		
		c.Tween.get(this).to({scaleX:1,scaleY:1,alpha:1},1500,c.Ease.elasticInOut).call(function(){
			heartAnimDone();
		})
	}

	e.reset = function() {
		this.scaleX=this.scaleY=0;
		this.alpha=0;
	}
	
	function TargetObject(img,startX,startY)
	{
		this.Container_constructor();
		this.obj;
		this.img=img;
		this.bounds;
		this.rect;
		this.pos = {
			'x':startX,
			'y':startY
		}
		this.setup();
	}
	var a=c.extend(TargetObject,c.Container);
	a.setup=function()
	{
		this.setBounds(0,0,SHAPE_WIDTH,SHAPE_HEIGHT);
		this.bounds = {
			'width':SHAPE_WIDTH,
			'height':SHAPE_HEIGHT
		}

		var rect=new c.Shape();
		rect.graphics.beginFill('#ddd').beginStroke('#000').drawRect(0,0,100,100).endFill();
		this.addChild(rect);
		this.rect=rect;
		this.rect.alpha=0;

		//this.debugDraw();
		this.setFrame(this.img);

		this.x = this.pos.x;
		this.y = this.pos.y;
	}
	a.debugDraw = function() {
		var rect=new c.Shape();
		rect.graphics.beginFill('#fcf').drawRect(0,0,SHAPE_WIDTH*.5,SHAPE_HEIGHT*.5).endFill();
		rect.alpha=0.5;
		this.addChild(rect);
	}
	a.setStroke = function(isHit){
		var color = (isHit)?"yellow":"black";
		this.rect.graphics.clear().beginFill(color).beginStroke('#000').drawRect(0,0,100,100).endFill();
	}

	a.setFrame = function(frame) {

		if(this.obj!=null) this.obj.graphics.clear().f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_right']).cp().ef().es();
		else{
			var g = new c.Graphics();
			g.f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_right']).cp().ef().es();

			this.obj= new c.Shape(g);
			this.obj.setBounds(0,0,SHAPE_WIDTH,SHAPE_HEIGHT);
			this.obj.x = -SHAPE_WIDTH*.5;
			this.obj.y = -SHAPE_HEIGHT*.5;

			this.addChild(this.obj);
			this.obj.alpha=0.2;
			this.obj.name = "heart";
		}


		this.addChild(this.obj);
		update=true;
	}

	function DragObject(img,color,indx,startX,startY)
	{
		this.Container_constructor();
		this.color=color;
		this.indx=indx;
		this.stickyClick=false;
		this.moving=false;
		this.hitTarget=false;
		this.isDown=false;
		this.img=img;
		this.bounds;
		this.obj;
		this.pos = {
			'x':startX,
			'y':startY
		}


		this.setup();
	}
	var d=c.extend(DragObject,c.Container);
	d.setup=function()
	{
		this.setBounds(0,0,SHAPE_WIDTH,SHAPE_HEIGHT);
		this.bounds = {
			'width':SHAPE_WIDTH,
			'height':SHAPE_HEIGHT
		}


		this.setFrame(this.img);

		var cir = new c.Shape();
		cir.graphics.beginFill("red").drawRoundRect(this.obj.x+220,this.obj.y+20,this.bounds.width*0.6,this.bounds.height*.8,150);
		cir.alpha=0.01; //make hit area invisible to eye but still register as hit area.
		this.addChild(cir);
		cir.name="hit";


		this.x = this.pos.x;
		this.y = this.pos.y;
		this.scaleX=this.scaleY=original_scale;



		this.on("click", this.handleClick);
		this.on("pressmove",this.handleMove);
		this.on("mousedown",this.handleDown);
		this.on("pressup",this.handleUp);
		this.on("rollover", this.handleRollOver);
		this.on("rollout", this.handleRollOver);
		this.cursor = "pointer";

		this.mouseChildren = false;
	}

	d.setFrame = function(frame,id) {
		if(this.obj!=null) this.obj.graphics.clear().f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_right']).cp().ef().es();
		else{
			var g = new c.Graphics();
			g.f(FILL_COLOR).ss(STROKE,CAP,CAP).s(STROKE_COLOR).p(heartsJSON[frame+'_right']).cp().ef().es();
	
			this.obj = new c.Shape(g);
	
			this.obj.x = -SHAPE_WIDTH*.5;
			this.obj.y = -SHAPE_HEIGHT*.5;
			this.addChild(this.obj);
			this.obj.name="heart";
		}

		this.indx=id;
		update=true;
	}

	d.handleClick = function (event) {
		//trace("click! = moving? "+this.moving+" || "+this.name);
		if(!checking)
		{
			this.x = event.stageX-(this.bounds.width*final_scale)*OFFSET;
			this.y = event.stageY;


			draggableObj = this;
			if(!draggableObj.moving && !dotouch)
			{
				if(!draggableObj.stickyClick)
				{
					draggableObj.stickyClick=true;
					update=true;
					//trace("DragObj:: start sticky click!");
				}else{
					//trace("DragObj:: end sticky click");
					draggableObj.stickyClick=false;
					draggableObj=null;
				}
			}


			update=true;
		}
	};

	d.handleMove = function(event) {
		if(!checking && this.isDown)
		{
			this.x = event.stageX-(this.bounds.width*final_scale)*OFFSET;
			this.y = event.stageY;
			this.moving=true;
			this.stickyClick=false;
			this.hitTest();
			update=true;
			//trace("DragObj:: moving!" + this.x+", "+this.y)
		}
	};

	d.handleDown = function(event) {
		if(!checking)
		{
			//trace("down! = moving? "+this.moving+" || "+this.name+" "+this.indx);
			if(!this.stickyClick)playSFXSound("sfx_pick");

			this.isDown=true;
			this.x = event.stageX-(this.bounds.width*final_scale)*OFFSET;
			this.y = event.stageY;
			this.alpha = 0.7;
			this.scaleX = this.scaleY = final_scale;

			game_cont.addChild(this);
			update=true;
		}
	};

	d.handleUp = function(event) {
		this.isDown=false;
		if(!checking)
		{
			//trace("DragObj:: touch up!");
			this.hitTest();
			if(!this.stickyClick)
			{
				checking=true;
				if(this.indx!=correctIndx)
				{
					//trace("DragObj::  RESET = NOT CORRECT")					
					targetObj.setStroke(false);
					if(this.hitTarget){
						stopSound();
						//trace('// feedback neg '+negSndArr[negSndIndx]);
						playSFXSound("sfx_drop");
						playAudioSeq('tinypause,fdbk-neg'+negSndArr[negSndIndx]+',george_neg'+negSFXIndx);
						if(negSndIndx<negSndArr.length-1)negSndIndx++;
						else {
							negSndIndx=0;
							//negSndArr = shuffleArray(negSndArr);
						}
						
						if(negSFXIndx<2)negSFXIndx++;
						else {
							negSFXIndx=0;
							//negSndArr = shuffleArray(negSndArr);
						}
						this.x = targetObj.x;
						this.y = targetObj.y;
						
						setTimeout(function(){
							playSFXSound("sfx_puff");
						},1500);

						check_anim=true;
						c.Tween.get(this,{loop:false}).wait(1500).to({x:this.pos.x,y:this.pos.y, scaleX:original_scale,scaleY:original_scale, alpha:1},200).wait(500).call(function(){
						//	trace("tween done!");
							checking=false;
							check_anim=false;
						});
					}else{
						this.reset();
						checking=false;
					}
				}else{
					if(!this.hitTarget)
					{
						//trace("DragObj::  RESET = NOT HIT")
						this.reset();
						targetObj.setStroke(false);
						checking=false;
					}else{
						stopSound();
						playSFXSound("sfx_drop");

						playAudioSeq('tinypause,fdbk-pos'+posSndArr[posSndIndx]+',george_pos'+posSndIndx);
						if(posSndIndx<posSndArr.length-1)posSndIndx++;
						else {
							posSndIndx=0;
							//posSndArr = shuffleArray(posSndArr);
						}

						this.alpha=1;
						this.x = targetObj.x;
						this.y = targetObj.y;
						update=true;
						
					//	trace("THIS IS CORRECT!!!!")
						setTimeout(clearTheLevel,2500);
					}
				}
				
			}
			this.moving=false;
		}
	};

	d.reset = function() {
		this.x = this.pos.x;
		this.y = this.pos.y;
		this.alpha=1;
		this.scaleX = this.scaleY = original_scale;
		this.moving=false;
		this.stickyClick=false;
		update=true;
	};

	d.hitTest = function() {
		var diff = this.x - targetObj.x;
		var absDiff = (diff<0)?-diff:diff;
		
		var diffY = this.y - targetObj.y;
		var absDiffY = (diffY<0)?-diffY:diffY;
		//trace("diff: "+absDiff);


		var totalWidth = SHAPE_WIDTH*.5;
		//trace("total width: "+totalWidth)
		
		if(absDiff<totalWidth && absDiffY<totalWidth)
		{
			this.hitTarget=true;
			targetObj.setStroke(true);
		}else{
			this.hitTarget=false;
			targetObj.setStroke(false);
		}
		
	};

	d.handleRollOver = function(event) {   
	};

	

	function Button(img,func) {
		this.Container_constructor();
		this.img = img;
		this.obj;
		this.canClick=true;
		this.clickFunc=func;

		this.setup();
	}

	var p = c.extend(Button,c.Container);
	p.setup = function() {
		this.setFrame(this.img);
	};

	p.setFrame = function(frame)
	{
		if(this.obj!=null)
		{
			this.removeChild(this.obj);
			
		}
		this.obj = new c.Bitmap(image[frame]);
		this.addChild(this.obj);
		this.on("click", this.handleClick);
		this.on("rollover", this.handleRollOver);
		this.on("rollout", this.handleRollOver);
		this.cursor = "pointer";

		this.mouseChildren = false;
		
		this.offset = Math.random()*10;
		this.count = 0;
	}

	p.setClickFunc = function(func) {
		this.clickFunc = func;
	}

	p.handleClick = function (event) {
		//alert("You clicked on a button: "+this.label);
		if(this.clickFunc!=null && this.canClick)this.clickFunc();
	} ;

	p.handleRollOver = function(event) {   
	};

	window.MatchObject=c.promote(MatchObject,"Container");
	window.AnimHeart=c.promote(AnimHeart,"Container");
	window.TargetObject=c.promote(TargetObject,"Container");
	window.DragObject=c.promote(DragObject,"Container");
	window.Button = c.promote(Button,"Container");

	// INIT FUNCTION ****************************************************

	// used to initialize the objects in the game
	function initGame() {

		//trace("GAME INIT!");

		var bg_canv;		// canvas for background image

		// get the main game div
		gamediv = document.getElementById('georgehc-game');
			
		// set up the canvas elements
		game_canv = document.getElementById('georgehc-game-canv');
		game_width = game_canv.width;
		game_height = game_canv.height;

		// add background canvas
		bg_canv = document.createElement('canvas');
		bg_canv.width = game_width;
		bg_canv.height = game_height;
		$(bg_canv).addClass('fullsize');
		$(gamediv).prepend(bg_canv);
		

		// set up stages for createjs
		stage_game = new c.Stage(game_canv);
		stage_bg = new c.Stage(bg_canv);
		
		// add containers to stage
		bg_cont = new c.Container();
		bg_cont.name="bg_cont";

		game_cont = new c.Container();
		game_cont.name = 'game_cont';

		preload_cont = new c.Container();
		preload_cont.name='preload_cont';

		card_cont = new c.Container();
		card_cont.name = 'card_cont';

		who_cont = new c.Container();
		who_cont.name="who_cont";

		success_cont = new c.Container();
		success_cont.name = 'success_cont';

		cont_bg = new c.Container();
		stage_bg.addChild(cont_bg);

		
		//game sounds listeners
		$(document).on("soundLoaded",soundsLoad);
		$(document).on("soundEnded",soundDone);	
		
		// determine type of interactivity
		if ('ontouchstart' in document.documentElement) {
			// is touchable
			setForTouch();
		}
		
		// TOUCH / MOUSE SET-UP ***********
		
		// listen for touch
		document.body.addEventListener('touchstart', setForTouch, false);
	
		// listen for the mouse being used
		game_canv.addEventListener('mouseover', setForMouse, false);
		
		// enable touch and set for single touch, if supported
		c.Touch.enable(stage_game,true);
		
		stage_game.on("stagemousemove",stageMove);
		
		gamemask = new c.Shape();
		gamemask.graphics.beginFill("white").drawRect(8,8, game_width-15, game_height-15);
		
		//fade_box : only needs to be created once to do fade ins and outs, but then alpha and child layering changed as needed
		fade_box = new c.Shape();
		fade_box.graphics.beginFill("black").drawRect(0,0, game_width, game_height);
		fade_box.cache(0,0, game_width, game_height);
		fade_box.mask = gamemask;
		fade_box.name="fade_box"
		
		
		gameborder = new c.Bitmap('img/site/blueborder.png');
		gameborder.name="gameborder"
		
		//preloader anim and bar:
		var spritesheet = new c.SpriteSheet({
			"frames" : {width : 159, height : 198, numFrames:6},
			"animations": {
				"loop": {frames: [0,1,2,3,4,5], speed: 0.3, next: true}
			},
			"images": ['img/site/preloader_george.png']
		});
		loaderbar_george = new c.Sprite(spritesheet,"loop");
		loaderbar_george.name="loaderbar_george"
		loaderbar_george.x = game_width/2 - 159/2;
		loaderbar_george.y = pl_y - 220;
		loaderbar_george.gotoAndStop('loop');

	
		preloader_bg = new c.Shape();
		preloader_bg.name="preloader_bg"
		preloader_bg.graphics.beginFill(pl_bg).drawRect(0,0, game_width, game_height);
		preloader_bg.mask = gamemask;
	
		loaderbar_stroke = new c.Shape();
		loaderbar_stroke.name="loaderbar_stroke"
		loaderbar_stroke.graphics.setStrokeStyle(6,"round").beginStroke(pl_outer).drawRoundRect(pl_x,pl_y,pl_width,pl_height, pl_radius);
			
		loaderbar_bg = new c. Shape();
		loaderbar_bg.name="loaderbar_bg";
		loaderbar_bg.graphics.beginFill(pl_inner).drawRoundRect(pl_x,pl_y,pl_width,pl_height, pl_radius);
		loaderbar_fill = new c.Shape();
		loaderbar_fill.name="loaderbar_fill"
		loaderbar_fill.graphics.beginFill(pl_outer).drawRoundRect(pl_x,pl_y,0,pl_height, pl_radius);
		loaderbar_fill.mask = loaderbar_bg;
		//*** fill up loaderbar_fill as loading happens...
	
		preload_cont.addChild(preloader_bg);
		preload_cont.addChild(loaderbar_bg);
		preload_cont.addChild(loaderbar_fill);
		preload_cont.addChild(loaderbar_stroke);
		preload_cont.addChild(loaderbar_george);
		stage_game.addChild(bg_cont,gameborder);

		preloadIMG();

		update=true;
		check_anim=true;

		sketchArr = shuffleArray(sketchArr);

		// set up listener to detect createjs ticks
		c.Ticker.addEventListener('tick', tickUpdate);
		c.Ticker.setFPS(STAGE_FPS);
	}

	function showAllChildren()
	{
		/*for(var i=0; i<stage_game.numChildren; i++)
		{
			trace(">> CHILD "+i+": "+stage_game.getChildAt(i));
		}*/
	}

	function startPreload()
	{
		//trace("// PRELOAD STARTS")

		play_btn.visible=false;

		stage_game.addChildAt(preload_cont,0);
		loaderbar_george.gotoAndPlay('loop');

		showAllChildren();

		sound_load_state = 'intro';
		gamesounds = new plumlib.CharacterSound('game_intro_lines','');
	}
	
	function preloadIMG(){
		//**console.log("preloadIMG... creating then loading the QUEUE");
	
		//preloading queue:
		queue = new c.LoadQueue(false);
	
	
		queue.addEventListener("fileprogress", handleProgress);
		queue.addEventListener("complete", handleComplete);
		queue.addEventListener("fileload", handleFileLoad);
		queue.addEventListener("fileerror",handleFileError);
		queue.addEventListener("error",handleFileError);
	
		//***IMAGES (to be Bitmaps and Bitmap animations) used in game- will have unique IDs defined
		//add needed images to queue
	
		//start button:
		queue.loadFile({src:IMG_PATH+'site/splash.png', id:'splash'});
		queue.loadFile({src:IMG_PATH+'site/play_btn.png', id:'play_btn'});
		queue.loadFile({src:IMG_PATH+'site/next_btn.png', id:'next_btn'});
		queue.loadFile({src:IMG_PATH+'game_sprites.json', id:'game_sprites',type:'json'});
		queue.loadFile({src:DATA_PATH+'hearts.json', id:'hearts',type:'json'});
		queue.loadFile({src:DATA_PATH+'levels.json', id:'levels',type:'json'});

		loadedTotal=7; // plus 1 for sound
    }
    
    function handleProgress(event) {
		 //trace("loading: " + loadedNum + "/" + loadedTotal);

		 if(event!=null)
		 {
			// trace("loading: " + event.loaded + "/" + event.total);
			 var total = event.total;
			 var loaded = (event.loaded<total)?event.loaded:total;
			 var diff = loaded/total;
			 loaderbar_fill.graphics.beginFill(pl_outer).drawRoundRect(pl_x,pl_y, (pl_width*parseInt(diff)-100), pl_height, pl_radius);
		}
	}

	function handleFileError(event)
	{
		//trace(event);
	}

	function handleFileLoad(event) {
		//trace("ID: "+event.item.id);
		
		loadedNum++;
		//trace("LOADED: "+event.item.id+" // "+loadedNum);
		if(event.item.id=='game_sprites')
		{
			spritesheet= new c.SpriteSheet(JSON.parse(event.rawResult));
			if (spritesheet == null) {
				console.error("Can not play. spritesheet was not loaded.");
				return;
			}
		}else if(event.item.id=='levels')
		{
			var json = event.rawResult;
			all_level_data = JSON.parse(json);


			if (all_level_data == null) {
				console.error("Can not play. level json was not loaded.");
				return;
			}else{
				$.each(all_level_data,function(){
					all_level_data_length++;
					levelsArr.push(all_level_data_length);
				});
				$.each(all_level_data["level1"]["round1"].choices,function(i){
					choicesIndx.push(i);
				});

				//TODO: enable level shuffle
				levelsArr = shuffleArray(levelsArr);

				//trace("HOW MANY LEVELS: "+all_level_data_length)
				//trace("NEW ORDER: "+levelsArr);
				//trace("HOW MANY CHOICES: "+choicesIndx);
			}


		}else if(event.item.id=='hearts'){
			var json = event.rawResult;
			heartsJSON = JSON.parse(json);
			//trace("HEARTS JSON LOADED: "+heartsJSON);
		}else{
			//the image (tag element) itself
			image[event.item.id]  = event.result;
		
			//.id is a string property containing the loaded's image's dot notation name within images[]
			image[event.item.id].id = event.item.id;
			if(event.item.id=="splash")
			{
				splash_bg = new c.Bitmap(image['splash']);
				stage_bg.addChild(splash_bg);
				splash_bg.mask = gamemask;
				updateBG=true;



			}else if(event.item.id=="play_btn")
			{
				play_btn = new Button('play_btn',startPreload);
				play_btn.x = 572; play_btn.y = 364;
				play_btn.name="play_btn";
				stage_game.addChild(play_btn);

				if(dType=='desktop' || dType=='ie')
				{
					startPreload();
				}
			}
		}
	}
	
	
	function handleComplete(event) {
		//trace("CHECK COMPLETE? "+loadedNum+"/"+loadedTotal)
		if(loadedNum==loadedTotal)
		{
			//trace("done!");
		
			//removing/destroying preloader objects
			stage_game.removeChild(preload_cont);
			loaderbar_george.stop();
			preloader_bg = null;
			loaderbar_george = null;
			loaderbar_bg = null;
			loaderbar_stroke = null;
			loaderbar_fill = null;
			check_anim=false;


			preloadDone();
		}
	
	}
	
	// TITLE CARD - PLAY TITLE AUDIO
	function preloadDone(){
		//trace("// PRELOAD DONE");
		updateBG=true;

		var time = (dType=='desktop')?1700:2500;
		//trace(">>	INTRO TIME: "+time);
			
		if(isSoundAvailable('splash-title')) playAudioSeq('splash-title,tinypause','',false);
		to = setTimeout(function(){
			playAudioSeq('tinypause,george_title,tinypause,splash-click','',false);
		},time);
		play_btn.visible=true;
		play_btn.setClickFunc(fadeOutSplash);	
		update=true;		
	}
	
	// FADE TO GAME
	function fadeOutSplash(e){
		clearTimeout(to);
		gamesounds.stopSound();
		play_btn.canClick=false;

		cursorDefault();
	
		//fade_box alpha set to 0 and made topmost
		fade_box.alpha = 0;
		stage_game.addChild(fade_box);
		stage_game.addChild(gameborder);
		check_anim=true;
		
		c.Tween.get(fade_box,{loop:false}).to({alpha:1},500).call(function(){
			setupTheGame();
		});
	}
	
	// INIT GAME SETUP
	function setupTheGame()
	{
		check_anim=false;
		//trace("// SETUP THE GAME!")
		//posSndArr = shuffleArray(posSndArr);
		//negSndArr = shuffleArray(negSndArr);
		charArr = shuffleArray(charArr);

		correctCount=1;
		
		stage_bg.removeChild(splash_bg);
		
		splash_bg = new c.Shape();
		splash_bg.graphics.beginFill("white").drawRect(0,0,game_width,game_height);

		splash_bg.mask = gamemask;
		
		stage_bg.addChild(splash_bg);

		stage_game.addChild(card_cont,who_cont,success_cont,game_cont,fade_box,gameborder);
		//trace("// ADD THE CHILDREN");



		heartLeft = new MatchObject('h1',100,258);
		heartLeft.name="heartLeft";
		heartLeft.scaleX = heartLeft.scaleY = final_scale;
		

		targetObj = new TargetObject('h1',heartLeft.x+(SHAPE_WIDTH*.5)*final_scale,258);
		targetObj.name="target";
		targetObj.scaleX = targetObj.scaleY = final_scale;
		targetObj.alpha=0.01;


		heartRight1 = new DragObject('h1',"blue",0,755,95);
		heartRight1.name="drag"
		heartRight2 = new DragObject('h2',"green",1,755,251);
		heartRight2.name="drag"
		heartRight3 = new DragObject('h3',"purple",2,755,411);
		heartRight3.name="drag"

		card_cont.visible=false;
		success_cont.visible=false;
		who_cont.visible=false;

		var bg = new c.Shape();
		bg.graphics.beginFill("#ff6691").drawRect(0,0,GAME_WIDTH,GAME_HEIGHT);
		bg.mask = gamemask;

		var cardContainer = new c.Container();
		cardContainer.rotation = -5;
		cardContainer.y=50;

		
		// animated heart on card screen
		cardHeart1 = new AnimHeart(345.5,115);
		cardHeart2 = new AnimHeart(520,113);
		cardHeart3 = new AnimHeart(349,380);
		cardHeart4 = new AnimHeart(523,380);

		var card = new c.Sprite(spritesheet,'card');
		card.x = GAME_WIDTH*.3;
		card.y = 30;

		cardSketch = new c.Sprite(spritesheet,'sketch1');
		cardSketch.x = GAME_WIDTH*.4;
		cardSketch.y = 150;

		cardHeartsArr.push(cardHeart1,cardHeart2,cardHeart3,cardHeart4);

		cardContainer.addChild(card,cardSketch,cardHeart1,cardHeart2,cardHeart3,cardHeart4);

		// george thinking screen
		card_cont.addChild(bg,cardContainer);

		var pic = new c.Sprite(spritesheet,'choose');
		who_cont.addChild(pic);

		var bound = spritesheet.getFrameBounds(7);
		//trace("BOUNDS:: "+bound);
		pic.x = GAME_WIDTH*.5 - bound.width*.5;
		pic.y = GAME_HEIGHT*.5 - bound.height*.6;


		// deliver card screen
		var pic2 = new c.Sprite(spritesheet,'char_george');
		pic2.x = 20; pic2.y = 140;
		charSprite = new c.Sprite(spritesheet,'char_chef');
		charSprite.x = 490; charSprite.y=20;

		successSketch = new c.Sprite(spritesheet,'sketch1');
		successSketch.scaleX = successSketch.scaleY = .5;
		successSketch.x = 417.5;
		successSketch.y = 200;

		
		success_cont.addChild(charSprite,pic2,successSketch);

		cardSketch.gotoAndStop('sketch'+sketchArr[sketchIndx]);
		successSketch.gotoAndStop('sketch'+sketchArr[sketchIndx]);

		//trace(">>	SKETCH::: "+sketchArr[sketchIndx])


		play_btn.x = 700; play_btn.y = 364;
		play_btn.setFrame('next_btn');
		play_btn.setClickFunc(showNextLevel);
		success_cont.addChild(play_btn);



		game_cont.addChildAt(heartLeft,targetObj,heartRight1,heartRight2,heartRight3,0);

		var yellowRect = new c.Shape();
		yellowRect.graphics.beginFill("rgba(255,246,143,254)").drawRect(657,0,243,506).endFill();
		yellowRect.mask = gamemask;

		var ypos=10;
		for(var i=0; i<3; i++)
		{
			var g = new c.Graphics();
			g.f("rgba(255,222,63,254)").p("EB5kAZAYAAAAsqmkAApYYAAAAAAnCHCAAYAAAAEEgKBkDSYAAAABujcEiAUYAAAAFyAoAoFoYAoFek2GaocE2").cp().ef();

			var heart = new c.Shape(g);
			heart.y=ypos;
			ypos+=160;
			bg_cont.addChildAt(heart,0);
		}

		var outline = new c.Sprite(spritesheet,'outline');
		outline.scaleX=outline.scaleY = 0.83;
		outline.x=382;outline.y=63;
		//outline.visible=false;

		bg_cont.addChildAt(yellowRect,outline,0);

		
		update=true;
		updateBG=true;
		setTheLevel();
		showNextLevel();

		fade_box.alpha=1;
		check_anim=true;
		play_btn.canClick=false;
		checking=true;
		c.Tween.get(fade_box,{loop:false}).to({alpha:0},500).call(function(){
			fade_box.visible=false;
			update=true;
			if(isSoundAvailable('instr0')) playAudioSeq('instr0,instr1','instr1',false);
			else checking=false;

			check_anim=false;
			
			stage_game.addChildAt(gameborder,stage_game.numChildren-3)

			showAllChildren();
		});
	}

    
    
	// SET LEVEL
	function setTheLevel()
	{
		//trace("CURRENT LEVEL: "+currentLevel+' = '+levelsArr[currentLevel]);
		//trace("CURRENT ROUND: "+correctCount);
		

		draggableObj = null;


		var choices = all_level_data["level"+levelsArr[currentLevel]]["round"+correctCount].choices;
		choicesIndx = shuffleArray(choicesIndx);
		//trace(choices);

		var match = all_level_data["level"+levelsArr[currentLevel]]["round"+correctCount].match
		//trace(match)

		heartLeft.setFrame(match);
		targetObj.setFrame(match);
		//trace("// SET TARGET")

		heartRight1.reset();
		heartRight2.reset();
		heartRight3.reset();
		//trace("// HEARTS RESET")

		heartRight1.setFrame(choices[choicesIndx[0]],choicesIndx[0]);
		heartRight2.setFrame(choices[choicesIndx[1]],choicesIndx[1]);
		heartRight3.setFrame(choices[choicesIndx[2]],choicesIndx[2]);
		//trace("// SET CHOICES!")

		showAllChildren();


		update=true;
		correctIndx=0;
	}

	// HIDE GAME AFTER EACH ROUND
	function clearTheLevel()
	{
		game_cont.visible=false;
		bg_cont.visible=false;
		
		fade_box.alpha=0;

		update=true;
	
		showCardFill();		
	}

	function heartAnimDone()
	{
		check_anim=false;

		update=true;
		if(correctCount<=CORRECT_TOTAL){
			setTheLevel();
			setTimeout(showNextLevel,1000);
		}else {
			if(isSoundAvailable('fdbk-complete0')) playAudioSeq('fdbk-complete0,george_fdbk'+fdbkSndIndx,'',false);
			if(fdbkSndIndx<2) fdbkSndIndx++;
			else fdbkSndIndx=0;
			setTimeout(whoCard,3500);
		}
	}

	// SHOW HEART IN CARD AFTER EACH ROUND
	function showCardFill()
	{
		card_cont.visible=true;
		cardHeartsArr[correctCount-1].animateIt();
		correctCount++;
	}

	function whoCard()
	{
		card_cont.visible=false;
		who_cont.visible=true;
		if(isSoundAvailable('fdbk-complete1')) playAudioSeq('fdbk-complete1','',false);

		setTimeout(cardCompleteScreen,3200);
		update=true;
	}

	// COMPLETE 4 HEARTS = LEVEL DONE! CARD HAND-OFF
	function cardCompleteScreen()
	{
		
		card_cont.visible=false;
		who_cont.visible=false;
		success_cont.visible=true;
		play_btn.visible=false;

		for(var i=0; i<cardHeartsArr.length; i++)
		{
			cardHeartsArr[i].reset();
		}
		charSprite.gotoAndStop("char_"+charArr[charSndIndx]);
		//trace(">>	SOUND: "+charArr[charSndIndx]);

		//var time = (firstTime)?3500:1000

		if(isSoundAvailable('card-'+charArr[charSndIndx])) playAudioSeq('george_tada,card-'+charArr[charSndIndx],'',false);
		setTimeout(showPlayBtn,4000);
		if(charSndIndx<charArr.length-1) charSndIndx++;
		else{
			charSndIndx=0;
			charArr = shuffleArray(charArr);
		}
		update=true;


		if(currentLevel<all_level_data_length-1) currentLevel++;
		else {
			//TODO: enable level shuffle
			levelsArr = shuffleArray(levelsArr);
			currentLevel=0;
		}

		correctCount=1;
		setTheLevel();
	}

	// SHOW PLAY AGAIN BUTTON AFTER CHAR AUDIO DONE
	function showPlayBtn()
	{
		//trace("SHOW PLAY BTN!");
		play_btn.visible=true;
		play_btn.canClick=true;
		update=true;
		if(isSoundAvailable('replay0') && firstTime) playAudioSeq('replay0','',false);
		firstTime=false;
	}

	//SHOW NEXT LEVEL
	function showNextLevel()
	{
		stopSound();

		if(success_cont.visible)
		{
			//trace(">>		GET NEW SKETCH!!!");
			if(sketchIndx<sketchArr.length-1)sketchIndx++;
			else sketchIndx=0;

			cardSketch.gotoAndStop('sketch'+sketchArr[sketchIndx]);
			successSketch.gotoAndStop('sketch'+sketchArr[sketchIndx]);
		}

		card_cont.visible=false;
		success_cont.visible=false;
		who_cont.visible=false;
		game_cont.visible=true;
		bg_cont.visible=true;

		checking=false;

		update=true;
		//trace("// SHOW NEXT LEVEL");
	}


	//For Sticky Drag Move
	function stageMove(ev)
	{
		if(draggableObj!=null && !draggableObj.moving && draggableObj.stickyClick && !checking)
		{
			draggableObj.x = ev.stageX-(draggableObj.bounds.width*final_scale)*OFFSET;
			draggableObj.y = ev.stageY;
			draggableObj.alpha=0.7;
			draggableObj.scaleX=draggableObj.scaleY = final_scale;
			draggableObj.hitTest();
			
			if(draggableObj.hitTarget)
			{
				targetObj.setStroke(true);
			}else{
				targetObj.setStroke(false);
			}	
		
			update=true;
		}
	}

	// AUDIO FUNCTIONS **************************************************

	// sound the sound
	function stopSound()
	{
		gamesounds.stopSound();
	}

	// play audio sequence - one sound or a list of sounds in order
	function playAudioSeq(phr_str,end_st,sync) {

		phrase_list = phr_str.split(',');
		//trace(">>		PLAY PHRASE: "+phrase_list.length)

		// check how many phrases
		if(phrase_list.length > 1) {
			gamesounds.playSounds(phrase_list, end_st);
		}
		else {
			gamesounds.playSound(phrase_list, end_st);
		}
	}

	// used to check if the sound is available
	function isSoundAvailable(snd_name) {
		//return false;
		//trace(">>		SOUND AVAILABLE? "+gamesounds.soundReady(snd_name));
		return gamesounds.soundReady(snd_name);
	}

	// used to play a sound effect
	function playSFXSound(sfx_snd) {
		gamesounds.playSFX(sfx_snd,'');
	}

	// sound is done playing
	function soundDone(ev)
	{
		//trace("SOUND DONE:: "+ev.message);
		switch(ev.message)
		{
			case "title":
			
			break;

			case "card":
			showPlayBtn();
			break;

			case "instr1":
			//trace("instr done");
			checking=false;
			break;
		}
	}

	// all sounds loaded!
	function soundsLoad(ev)
	{
		//trace("SOUNDS LOADED! "+ev);
		if(sound_load_state=='intro')
		{
			loadedNum++;
			handleProgress(null);
			handleComplete(null);

			sound_load_state="rest";
			gamesounds.loadAdditionalSounds('game_lines2','')
		}
	}

	// EVENT FUNCTIONS **************************************************
		
	// used to trigger actions when createjs signals a tick
	function tickUpdate(ev){
	
		if(update)
		{
			update=false;
			stage_game.update();
		}
		
		if(check_anim)
		{
			stage_game.update();
		}
		
		if(updateBG)
		{
			updateBG=false;
			stage_bg.update();
		}	
	}	
	// used to listen for mouse being used
	function setForMouse(ev) {
		dotouch = false;
		ev.target.removeEventListener('mouseover', setForMouse);
		stage_game.enableMouseOver(STAGE_FPS);
		stage_game.mouesMoveOutside = true;
	}
	
	// used to listen for touch being used
	function setForTouch(ev) {		
		dotouch = true;
		if(ev !== undefined){
			document.body.removeEventListener('touchstart', setForTouch);
		}
	}	
	
	//called by events or on its own to make cursor a hand
	function cursorPointer(e){
		document.body.style.cursor='pointer';
	}
	//called by events or on its own to make cursor its default
	function cursorDefault(e){
		document.body.style.cursor='default';
	}
	
	// UTILITY FUNCTIONS ************************************************
	
	// console log function - REMOVE FOR LAUNCH!
	function trace(msg)
	{
		//TODO: disable console log
		//console.log(msg);
	}

	// used to sort arrays based on a property in an object
	function createComparator(property) {
		return function(a, b) {
			return a[property] - b[property];
		};
	}

	function shuffleArray(array) {
	    for (var i = array.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = array[i];
	        array[i] = array[j];
	        array[j] = temp;
	    }
	    return array;
	}
	
	// START INITIALIZATION *********************************************
		

	//wait til broswer test is done to start the game
	gameController.getType=function(str)
	{
		dType = str;
		initGame();
	}
		
})(window.gameController = window.gameController || {}, jQuery);

