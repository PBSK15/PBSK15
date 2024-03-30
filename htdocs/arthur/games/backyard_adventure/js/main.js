/* main.js - controller class for game - level setter*/

/*
TO DO:
	- Audio Manager - need to use one object to control them all
	- Refactor commonly used functions in all levels
*/

// global variables
var CANVAS_WIDTH = 660, CANVAS_HEIGHT = 500,
//var CANVAS_WIDTH = 200, CANVAS_HEIGHT = 167,
	currentScreen = 0,
	useMouse = true,
	totalIdols = 0,
	hasFailed = false,

	needsRebuild = false,
	backgroundImg = null,
	hud = null,
	debug = true,
	enableRandomSeries = false,
	series = 1, // used for debugging all levels in concurrent series
	seriesSet = [series,series,series,series],
	idolIndex = 0,
	idolArray = [ ["arthur_idol_01", "arthur_idol_02"], ["dw_idol_01", "dw_idol_02"], ["bud_idol_01", "bud_idol_02"], ["binky_idol_01", "binky_idol_02"] ],

	levelPositionOne = [], //[new GameLevelVO("jungle_screen1", 'Screen 1a', 1), new GameLevelVO("jungle_screen3", 'Screen 1b', 3), new GameLevelVO("jungle_screen5", 'Screen 1c', 5), new GameLevelVO("jungle_screen7", 'Screen 1d', 1)],
	levelPositionTwo = [], //[new GameLevelVO("jungle_screen2", 'Screen 2a', 2), new GameLevelVO("jungle_screen4", 'Screen 2b', 4), new GameLevelVO("jungle_screen6", 'Screen 2c', 6), new GameLevelVO("jungle_screen8", 'Screen 2d', 2)],
	levelPositionThree = [],//[new GameLevelVO("temple_screen1", 'Screen 3a', 1), new GameLevelVO("temple_screen3", 'Screen 3b', 3), new GameLevelVO("temple_screen5", 'Screen 3c', 5), new GameLevelVO("temple_screen7", 'Screen 3d', 1)],
	levelPositionFour = [],//[new GameLevelVO("temple_screen2", 'Screen 4a', 2), new GameLevelVO("temple_screen4", 'Screen 4b', 4), new GameLevelVO("temple_screen6", 'Screen 4c', 6), new GameLevelVO("temple_screen8", 'Screen 4d', 2)],
	isInputDown = false;

/*
1 - [	jungleScreen1 , jungleScreen3 , jungleScreen5 , jungleScreen7	]
2 - [ 	jungleScreen2 , jungleScreen4 , jungleScreen6 , jungleScreen8	]
3 - [ 	templeScreen1 , templeScreen3 , templeScreen5 , templeScreen7	] 
4 - [	templeScreen2 , templeScreen4 , templeScreen6 , templeScreen8	]
*/

(function(window){
	// other global variables
	var game, map, player, backyardScreen,
		screenLevel1, screenLevel2, screenLevel3, screenLevel4,
		goalScreen, 
		peril_hit_and_fade_audio,
		isReadyReset = true,
		tutorialCompleted = false, 
		isSplashPageDisplayed = true,
		gameLevels = [];
	
	// reference div containers 
	//var stageCanvas = window.document.getElementById("stageCanvas");
	//var loadingDiv = window.document.getElementById("loading");

	var loadingDiv = null,
		stageCanvas = null,
		containerDiv = null;

	// logic to check whether medium is a mobile device
	window.mobilecheck = function() {
		if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)){ return true;} else { return false;}
	}

	if(window.mobilecheck()){
		useMouse = false;
	}

	function init(){
		if(enableRandomSeries === true) {
			 // initial series
			if(levelPositionOne.length > 0 && levelPositionTwo.length > 0 && levelPositionThree.length > 0 && levelPositionFour.length > 0){
				buildRandomSeriesSet();
			}else{
				resetLevelPositions();
				buildRandomSeriesSet();
			}
			
		} else{
			if(series == 1){
				gameLevels.push( new GameLevelVO("jungle_screen1", 'Screen 1a', "jung_bg_1") );
				gameLevels.push( new GameLevelVO("jungle_screen2", 'Screen 2a', "jung_bg_2") );
				gameLevels.push( new GameLevelVO("temple_screen1", 'Screen 3a', "temp_bg_1") );
				gameLevels.push( new GameLevelVO("temple_screen2", 'Screen 4a', "temp_bg_2") );
			}else if(series == 2){
				gameLevels.push( new GameLevelVO("jungle_screen3", 'Screen 1b', "jung_bg_3") );
				gameLevels.push( new GameLevelVO("jungle_screen4", 'Screen 2b', "jung_bg_4") );
				gameLevels.push( new GameLevelVO("temple_screen3", 'Screen 3b', "temp_bg_3") );
				gameLevels.push( new GameLevelVO("temple_screen4", 'Screen 4b', "temp_bg_4") );
			}else if(series == 3){
				gameLevels.push( new GameLevelVO("jungle_screen5", 'Screen 1c', "jung_bg_1") );
				gameLevels.push( new GameLevelVO("jungle_screen6", 'Screen 2c', "jung_bg_2") );
				gameLevels.push( new GameLevelVO("temple_screen5", 'Screen 3c', "temp_bg_1") );
				gameLevels.push( new GameLevelVO("temple_screen6", 'Screen 4c', "temp_bg_2") );
			}else if(series == 4){
				gameLevels.push( new GameLevelVO("jungle_screen7", 'Screen 1d', "jung_bg_3") );
				gameLevels.push( new GameLevelVO("jungle_screen8", 'Screen 2d', "jung_bg_4") );
				gameLevels.push( new GameLevelVO("temple_screen7", 'Screen 3d', "temp_bg_3") );
				gameLevels.push( new GameLevelVO("temple_screen8", 'Screen 4d', "temp_bg_4") );
			}  
		}

		if(game == null) buildGame();
		gameSetup();

		if(needsRebuild){
			rebuildScreens();
			setScreen(); // display next level - backyard scene
		}

		// if(stageCanvas){
		// 	window.document.body.removeChild(stageCanvas);
		// 	//stageCanvas = null;
		// }
		
	}

	function buildRandomSeriesSet(){
		// randomly create the series set 
		// var i = 0;
		// var seriesIndex;
		// for(i = 0; i <= 3; i++){
		// 	seriesIndex = Math.round((Math.random() * 3) * 1) + 1; 
		// 	//seriesSet[i] = seriesIndex;
		// 	if(debug === true) logger("buildRandomSeriesSet " + seriesIndex);
		// }

		getLevelFromPositionArray(levelPositionOne);
		getLevelFromPositionArray(levelPositionTwo);
		getLevelFromPositionArray(levelPositionThree);
		getLevelFromPositionArray(levelPositionFour);

		if(debug === true){
			var i;
			for(i = 0; i <= 3; i++){
				logger(gameLevels[i]);
			}

			if(debug === false) {
				logger("levelPositionOne.length " + levelPositionOne.length);
				logger("levelPositionTwo.length " + levelPositionTwo.length);
				logger("levelPositionThree.length " + levelPositionThree.length);
				logger("levelPositionFour.length " + levelPositionFour.length);

				logger("gameLevels[0] " + gameLevels[0]);
			}
			
		}
	}

	function getLevelFromPositionArray(positionArray){
		var i = 0;
		var seriesIndex;

		//logger("positionArray.length " + positionArray.length)
		var item;

		for(i = 0; i <= 3; i++){
			seriesIndex = Math.round((Math.random() * 3) * 1); 
			item = positionArray.splice(seriesIndex, 1);
			//seriesSet[i] = seriesIndex;
			break;
			//if(debug === true) logger("buildRandomSeriesSet " + seriesIndex);
		}
		if(debug === false) logger("item[0] " + item[0]);
		gameLevels.push(item[0]);

	}

	function resetLevelPositions(){
		levelPositionOne = [new GameLevelVO("jungle_screen1", 'Screen 1a', 1), new GameLevelVO("jungle_screen3", 'Screen 1b', 3), new GameLevelVO("jungle_screen5", 'Screen 1c', 5), new GameLevelVO("jungle_screen7", 'Screen 1d', 1)];
		levelPositionTwo = [new GameLevelVO("jungle_screen2", 'Screen 2a', 2), new GameLevelVO("jungle_screen4", 'Screen 2b', 4), new GameLevelVO("jungle_screen6", 'Screen 2c', 6), new GameLevelVO("jungle_screen8", 'Screen 2d', 2)];
		levelPositionThree = [new GameLevelVO("temple_screen1", 'Screen 3a', 1), new GameLevelVO("temple_screen3", 'Screen 3b', 3), new GameLevelVO("temple_screen5", 'Screen 3c', 5), new GameLevelVO("temple_screen7", 'Screen 3d', 1)];
		levelPositionFour = [new GameLevelVO("temple_screen2", 'Screen 4a', 2), new GameLevelVO("temple_screen4", 'Screen 4b', 4), new GameLevelVO("temple_screen6", 'Screen 4c', 6), new GameLevelVO("temple_screen8", 'Screen 4d', 2)];
	}

	function buildGame(){
		if(stageCanvas) {
			window.document.body.removeChild(stageCanvas);
		}

		containerDiv = document.getElementById("gameContainer");
		stageCanvas = document.createElement("div");
		stageCanvas.id =  "stageCanvas";
		//window.document.body.appendChild(stageCanvas);
		loadingDiv = document.createElement("div");
		loadingDiv.id =  "loading";
		imgDiv = document.createElement("img");
		imgDiv.src =  "images/loader.gif";
		loadingDiv.appendChild(imgDiv);
		stageCanvas.appendChild(loadingDiv);
		containerDiv.appendChild(stageCanvas);

		// define core game object with core framework - set handlers
		game = new Phaser.Game(CANVAS_WIDTH, CANVAS_HEIGHT, Phaser.CANVAS, 'stageCanvas', {preload: preload, create: create, render: render, 
			update: update }, true);
		//Phaser.AUTO
	}

	function gameSetup(){
		if(debug === false) logger("gameSetup()");

		if(game == null){
			if(debug === false) logger("game is null");
			return;
		}
		// create instances of level/display obejcts
		if(backyardScreen == null){
			backyardScreen = new BackyardScreen(game);
			backyardScreen.exitScreen = function(){
				currentScreen = 1;
				screenLevel1.idolFound = false;
				setScreen();
			};
			backyardScreen.tutorialIsCompleted = tutorialCompleted;
		}

		if(debug === false) logger("gameLevels[0].levelID " + gameLevels[0].levelID);

		screenLevel1 = LevelFactory(gameLevels[0].levelID, game);
		screenLevel1.exitScreen = function(){
			currentScreen = 2;
			screenLevel2.idolFound = false;
			setScreen();
		};

		screenLevel2 = LevelFactory(gameLevels[1].levelID, game);
		screenLevel2.exitScreen = function(){
			currentScreen = 3;
			screenLevel3.idolFound = false;
			setScreen();
		};

		screenLevel3 = LevelFactory(gameLevels[2].levelID, game);
		screenLevel3.exitScreen = function(){
			currentScreen = 4;
			screenLevel4.idolFound = false;
			setScreen();
		};

		screenLevel4 = LevelFactory(gameLevels[3].levelID, game);
		screenLevel4.exitScreen = function(){
			logger("End of Series");
			endOfSeries();
		};

		
		goalScreen = new GoalScreen(game);
		goalScreen.onMoreHandler = getNextSeries;
		goalScreen.exitScreen = function(){};
		
	}

	function preload() {

		game.input.maxPointers = 1;
		game.stage.scaleMode = 2;
		game.stage.scale.minWidth = 200;
		game.stage.scale.minHeight = 167;
		game.stage.scale.maxWidth = 660;
		game.stage.scale.maxHeight = 500;

		game.stage.scale.pageAlignHorizontally = false;

		game.stage.scale.setScreenSize(false);

		if(debug === true) {
			logger("preload()");
			logger("document.domain " + document.domain);
		}

		

		var baseURL = "";

		if(document.domain == "pbskids.org"){
			baseURL = "https://pbskids.org/arthur/games/backyard_adventure/";

			game.load.crossOrigin = "https://pbskids.org"; //"anonymous";
			game.load.baseURL = baseURL;  //"http://localhost:8888/games/backyard_adventure/";

		}

		// preload images/audio/atlas data
		 game.load.tilemap('levelTiles', 'images/tiles_pieces.json', null, Phaser.Tilemap.TILED_JSON);
		 game.load.image('tiles_pieces', 'images/tiles_pieces.png');
		 
		 game.load.image("jungleBreakingTile", "images/tile-40.png");
		 game.load.image("templeBreakingTile", "images/tile-41.png");

		 //game.load.spritesheet('BudDWWalk', 'images/budDWwalk.png', 72, 62);
		 game.load.atlasXML("Bud_DW_jumponback", 'images/Bud_DW_jumponback.png', 'images/Bud_DW_jumponback.xml');
		 game.load.image('vine_branch', 'images/vine_branch.png');
		 game.load.image('vine_branch_out', 'images/vine_branch_out.png');
		 //game.load.image('arrow_select', 'images/arrow_select_up.png');
		 //game.load.image('arrow_select_down', 'images/arrow_select_down.png');
		 //game.load.atlasXML('Bud_DW_Log', 'images/Bud_DW_log.png', 'images/Bud_DW_log.xml');
		 game.load.image('log', 'images/log.png');
		 game.load.image('splashPage', 'images/backjung_splash-screen.jpg');
		 game.load.image('backyard', 'images/arthurs_backyard.jpg');
		 game.load.image('startButton', 'images/start_button.png');
		 game.load.image('moreButton', 'images/more_button.png');
		 game.load.atlasXML('Bud_DW_Actions', 'images/Bud_DW_Actions.png', 'images/Bud_DW_Actions.xml');

		 //game.load.image('Bud_climbs_db', 'images/Bud_climbs_db_0.png');

		 game.load.atlasXML('PerilActions', 'images/PerilActions.png', 'images/PerilActions.xml');
		 game.load.atlasXML('game_assets', 'images/game_assets.png', 'images/game_assets.xml');

		 game.load.atlasXML('arthurIdolForm', 'images/idol_forms/arthur_idol_form.png', 'images/idol_forms/arthur_idol_form.xml');
		 game.load.atlasXML('binkyIdolForm', 'images/idol_forms/binky_idol_form.png', 'images/idol_forms/binky_idol_form.xml');
		 game.load.atlasXML('busterIdolForm', 'images/idol_forms/buster_idol_form.png', 'images/idol_forms/buster_idol_form.xml');
		 game.load.atlasXML('iadonnaIdolForm', 'images/idol_forms/iadonna_idol_form.png', 'images/idol_forms/iadonna_idol_form.xml');
		 game.load.atlasXML('fingerPoint', 'images/finger_point.png', 'images/finger_point.xml');

		 game.load.image("jung_bg_1", 'images/background/jungle/jung_bg_1.jpg');
		 game.load.image("jung_bg_2", 'images/background/jungle/jung_bg_2.jpg');
		 game.load.image("jung_bg_3", 'images/background/jungle/jung_bg_3.jpg');
		 game.load.image("jung_bg_4", 'images/background/jungle/jung_bg_4.jpg');
		 //game.load.image("jung_bg_5", 'images/background/jungle/jung_bg_5.jpg');
		 //game.load.image("jung_bg_6", 'images/background/jungle/jung_bg_6.jpg');
		 //game.load.image("jung_bg_7", 'images/background/jungle/jung_bg_7.jpg');
		 //game.load.image("jung_bg_8", 'images/background/jungle/jung_bg_8.jpg');

		 game.load.image("temp_bg_1", 'images/background/temple/temp_bg_1.jpg');
		 game.load.image("temp_bg_2", 'images/background/temple/temp_bg_2.jpg');
		 game.load.image("temp_bg_3", 'images/background/temple/temp_bg_3.jpg');
		 game.load.image("temp_bg_4", 'images/background/temple/temp_bg_4.jpg');
		 //game.load.image("temp_bg_5", 'images/background/temple/temp_bg_5.jpg');
		 //game.load.image("temp_bg_6", 'images/background/temple/temp_bg_6.jpg');
		 //game.load.image("temp_bg_7", 'images/background/temple/temp_bg_7.jpg');
		 //game.load.image("temp_bg_8", 'images/background/temple/temp_bg_8.jpg');
	
		 game.load.image("pointer_icon", 'images/pointer_icon.png');

		 // bug - issue with safari browsers and loading mp3 audio ... 
		 //logger( "Safari " + navigator.userAgent);
		 if(/^((?!chrome).)*safari/i.test(navigator.userAgent)){
		 	
		 	 game.load.audio("bat-flap-2secs", ['audio/wav/bat-flap-2secs.wav', 'audio/ogg/bat-flap-2secs.ogg', 'audio/mp3/bat-flap-2secs.mp3']);
			 game.load.audio("bat-squeal-flap", ['audio/wav/bat-squeal-flap.wav', 'audio/ogg/bat-squeal-flap.ogg', 'audio/mp3/bat-squeal-flap.mp3']);
			 game.load.audio("cage-drop", [ 'audio/wav/cage-drop.wav', 'audio/ogg/cage-drop.ogg', 'audio/mp3/cage-drop.mp3']);
			 game.load.audio("cage-lever", ['audio/wav/cage-lever.wav', 'audio/mp3/cage-lever.mp3', 'audio/ogg/cage-lever.ogg']);
			 game.load.audio("door-slide-loopable", ['audio/wav/door-slide-loopable.wav', 'audio/mp3/door-slide-loopable.mp3', 'audio/ogg/door-slide-loopable.ogg']);
			 game.load.audio("door-up-down", ['audio/wav/door-up-down.wav', 'audio/mp3/door-up-down.mp3', 'audio/ogg/door-up-down.ogg']);
			 game.load.audio("fall", ['audio/wav/fall.wav', 'audio/mp3/fall.mp3', 'audio/ogg/fall.ogg']);
			 game.load.audio("floor-crumble", ['audio/wav/floor-crumble.wav', 'audio/mp3/floor-crumble.mp3', 'audio/ogg/floor-crumble.ogg']);
			 game.load.audio("got-the-idol", ['audio/wav/got-the-idol.wav', 'audio/mp3/got-the-idol.mp3', 'audio/ogg/got-the-idol.ogg']);
			 game.load.audio("idol-choir-with-sparkle", ['audio/wav/idol-choir-with-sparkle.wav', 'audio/mp3/idol-choir-with-sparkle.mp3', 'audio/ogg/idol-choir-with-sparkle.ogg']);
			 game.load.audio("log-down", ['audio/wav/log-down.wav', 'audio/mp3/log-down.mp3', 'audio/ogg/log-down.ogg']);
			 game.load.audio("log-up", ['audio/wav/log-up.wav', 'audio/mp3/log-up.mp3', 'audio/ogg/log-up.ogg']);
			 game.load.audio("peril-hit-and-fade", ['audio/wav/peril-hit-and-fade.wav', 'audio/mp3/peril-hit-and-fade.mp3', 'audio/ogg/peril-hit-and-fade.ogg']);
			 game.load.audio("sandwich-loss", ['audio/wav/sandwich-loss.wav', 'audio/mp3/sandwich-loss.mp3', 'audio/ogg/sandwich-loss.ogg']);
			 game.load.audio("snake-rattle", ['audio/wav/snake-rattle.wav', 'audio/mp3/snake-rattle.mp3', 'audio/ogg/snake-rattle.ogg']);
			 game.load.audio("trapdoor-open-close", ['audio/wav/trapdoor-open-close.wav', 'audio/mp3/trapdoor-open-close.mp3', 'audio/ogg/trapdoor_open_close.ogg']);
			 game.load.audio("vine-swing", ['audio/wav/vine-swing.wav', 'audio/mp3/vine-swing.mp3', 'audio/ogg/vine-swing.ogg']);
			 game.load.audio("water-splash", ['audio/wav/water-splash.wav', 'audio/mp3/water-splash.mp3', 'audio/ogg/water-splash.ogg']);
			 game.load.audio("dream-shimmer", ['audio/wav/dream-shimmer.wav', 'audio/mp3/dream-shimmer.mp3', 'audio/ogg/dream-shimmer.ogg']);
		 } else {

		 	game.load.audio("bat-flap-2secs", ['audio/mp3/bat-flap-2secs.mp3', 'audio/ogg/bat-flap-2secs.ogg']);
			game.load.audio("bat-squeal-flap", ['audio/mp3/bat-squeal-flap.mp3', 'audio/ogg/bat-squeal-flap.ogg']);
			game.load.audio("cage-drop", ['audio/mp3/cage-drop.mp3', 'audio/ogg/cage-drop.ogg']);
			game.load.audio("cage-lever", ['audio/mp3/cage-lever.mp3', 'audio/ogg/cage-lever.ogg']);
			game.load.audio("door-slide-loopable", ['audio/mp3/door-slide-loopable.mp3', 'audio/ogg/door-slide-loopable.ogg']);
			game.load.audio("door-up-down", ['audio/mp3/door-up-down.mp3', 'audio/ogg/door-up-down.ogg']);
			game.load.audio("fall", ['audio/mp3/fall.mp3', 'audio/ogg/fall.ogg']);
			game.load.audio("floor-crumble", ['audio/mp3/floor-crumble.mp3', 'audio/ogg/floor-crumble.ogg']);
			game.load.audio("got-the-idol", ['audio/mp3/got-the-idol.mp3', 'audio/ogg/got-the-idol.ogg']);
			game.load.audio("idol-choir-with-sparkle", ['audio/mp3/idol-choir-with-sparkle.mp3', 'audio/ogg/idol-choir-with-sparkle.ogg']);
			game.load.audio("log-down", ['audio/mp3/log-down.mp3', 'audio/ogg/log-down.ogg']);
			game.load.audio("log-up", ['audio/mp3/log-up.mp3', 'audio/ogg/log-up.ogg']);
			game.load.audio("peril-hit-and-fade", ['audio/mp3/peril-hit-and-fade.mp3', 'audio/ogg/peril-hit-and-fade.ogg']);
			game.load.audio("sandwich-loss", ['audio/mp3/sandwich-loss.mp3', 'audio/ogg/sandwich-loss.ogg']);
			game.load.audio("snake-rattle", ['audio/mp3/snake-rattle.mp3', 'audio/ogg/snake-rattle.ogg']);
			game.load.audio("trapdoor-open-close", ['audio/mp3/trapdoor-open-close.mp3', 'audio/ogg/trapdoor_open_close.ogg']);
			game.load.audio("vine-swing", ['audio/mp3/vine-swing.mp3', 'audio/ogg/vine-swing.ogg']);
			game.load.audio("water-splash", ['audio/mp3/water-splash.mp3', 'audio/ogg/water-splash.ogg']);
			game.load.audio("dream-shimmer", ['audio/mp3/dream-shimmer.mp3', 'audio/ogg/dream-shimmer.ogg']);

		 }	

	}

	function create() {
		

		if(debug === false) logger("create()");
		/* handler for create function 
			- establish tile map, 
			- create background display layer, 
			- setup tile maps for levels, 
			- setup physics for World
			- hook up/setup level/display objects including hud 
		*/

		//var trapdoor_open_close = game.add.audio('trapdoor-open-close');
		//trapdoor_open_close.play();

		// adding audio instances to game sound manager
    	game.add.audio('bat-squeal-flap');
    	game.add.audio('bat-flap-2secs');
    	game.add.audio('vine-swing');
    	game.add.audio('trapdoor-open-close');
    	game.add.audio('water-splash');
    	game.add.audio('cage-drop');
    	game.add.audio('cage-lever');
    	game.add.audio('got-the-idol');
    	game.add.audio('door-up-down');
    	game.add.audio('log-up');
    	game.add.audio('log-down');
    	game.add.audio('snake-rattle');
    	game.add.audio("dream-shimmer");
    	game.add.audio('door-slide-loopable'); 
    	game.add.audio('water-splash');
    	game.add.audio('floor-crumble');

		/// remove loading div
		if(loadingDiv) {
			stageCanvas.removeChild(loadingDiv);
			loadingDiv = null; 
		}

		if(game == null) logger("game is null");

		//createBackgrounds(game);
		backgroundImg = new BackgroundSystem(game);

		game.stage.backgroundColor = '#cccccc';

		map = game.add.tilemap('levelTiles');
    	map.addTilesetImage('tiles_pieces');

    	if(map == null) logger("map is null");

    	backyardScreen.create('Backyard', map);

    	screenLevel1.create(gameLevels[0].layerName, map);
    	screenLevel2.create(gameLevels[1].layerName, map);
    	screenLevel3.create(gameLevels[2].layerName, map);
    	screenLevel4.create(gameLevels[3].layerName, map);

    	goalScreen.create('Goal', map);

    	game.physics.gravity.y = 250;
    	game.physics.setBoundsToWorld();

		// player Asset
		player = new Player(game);
		player.create(0, 350, 'Bud_DW_Actions');
		player.useMouse = useMouse;
		player.enablePlayer = false;
		
		backyardScreen.setPlayer(player);
		// // jungleScreen1.playerFailed = playerFailed;
		backyardScreen.postcreate();
		backyardScreen.playerSucceeded = playerSucceeded;

		screenLevel1.setPlayer(player);
		screenLevel1.playerFailed = playerFailed;
		screenLevel1.postcreate();
		screenLevel1.playerSucceeded = playerSucceeded;

		screenLevel2.setPlayer(player);
		screenLevel2.playerFailed = playerFailed;
		screenLevel2.postcreate();
		screenLevel2.playerSucceeded = playerSucceeded;

		screenLevel3.setPlayer(player);
		screenLevel3.playerFailed = playerFailed;
		screenLevel3.postcreate();
		screenLevel3.playerSucceeded = playerSucceeded;

		screenLevel4.setPlayer(player);
		screenLevel4.playerFailed = playerFailed;
		screenLevel4.postcreate();
		screenLevel4.playerSucceeded = playerSucceeded;

		goalScreen.setPlayer(player);
		//goalScreen.playerFailed = playerFailed;
		goalScreen.postcreate();
		goalScreen.playerSucceeded = playerSucceeded;

    	//createHUD(game);
    	hud = new HUDDisplay(game);
    	hud.create(isSplashPageDisplayed);
    	if(isSplashPageDisplayed === true) {
    		hud.onStartHandler = startHandler;
    	}else{
    		setScreen(); // display next level - backyard scene
    	}

    	if(debug === false) logger("Message: " + "Backyard Jungle");

    	peril_hit_and_fade_audio = this.game.add.audio('peril-hit-and-fade');

	}

	function rebuildScreens(){
		backyardScreen.create('Backyard', map);

    	screenLevel1.create(gameLevels[0].layerName, map);
    	screenLevel2.create(gameLevels[1].layerName, map);
    	screenLevel3.create(gameLevels[2].layerName, map);
    	screenLevel4.create(gameLevels[3].layerName, map);

    	goalScreen.create('Goal', map);

    	player = new Player(game);
		player.create(0, 350, 'Bud_DW_Actions');
		player.useMouse = useMouse;
		player.enablePlayer = false;

		backyardScreen.setPlayer(player);
		// // jungleScreen1.playerFailed = playerFailed;
		backyardScreen.postcreate();
		backyardScreen.playerSucceeded = playerSucceeded;

		screenLevel1.setPlayer(player);
		screenLevel1.playerFailed = playerFailed;
		screenLevel1.postcreate();
		screenLevel1.playerSucceeded = playerSucceeded;

		screenLevel2.setPlayer(player);
		screenLevel2.playerFailed = playerFailed;
		screenLevel2.postcreate();
		screenLevel2.playerSucceeded = playerSucceeded;

		screenLevel3.setPlayer(player);
		screenLevel3.playerFailed = playerFailed;
		screenLevel3.postcreate();
		screenLevel3.playerSucceeded = playerSucceeded;

		screenLevel4.setPlayer(player);
		screenLevel4.playerFailed = playerFailed;
		screenLevel4.postcreate();
		screenLevel4.playerSucceeded = playerSucceeded;

		goalScreen.setPlayer(player);
		//goalScreen.playerFailed = playerFailed;
		goalScreen.postcreate();
		goalScreen.playerSucceeded = playerSucceeded;

		hud = new HUDDisplay(game);
    	hud.create(isSplashPageDisplayed);
	}

	function startHandler(){
		// handler for initial game start - with hud
		if(debug === false) logger("startHandler");
		setScreen();
	}

	function setScreen(){
		// function call to set up current screen

		if(debug === false) logger("SetScreen currentScreen: " + currentScreen + " idolIndex: " + idolIndex + " series: " + series);

		isReadyReset = true;

		player.stop();
		hasFailed = false;
		player.enablePlayer = false;
		player.sprite.alpha = 1;

		switch(currentScreen){
			case 0:
			hud.showHudBG(false);
			backyardScreen.setScreen();
			break;

			case 1:
			hud.showHudBG(true);
			screenLevel1.setScreen(idolArray[idolIndex][0]);
			backgroundImg.setViewStateID(gameLevels[0].bgViewStateID);
			break;

			case 2:
			screenLevel2.setScreen(idolArray[idolIndex][1]);
			backgroundImg.setViewStateID(gameLevels[1].bgViewStateID);
    		break;

    		case 3:
    		screenLevel3.setScreen('idol_bottom_right');
			backgroundImg.setViewStateID(gameLevels[2].bgViewStateID);	
    		break;

    		case 4:
    		screenLevel4.setScreen("idol_bottom_left");
			backgroundImg.setViewStateID(gameLevels[3].bgViewStateID);
    		break;

	    	case 5:
	    	hud.showHudBG(false);
			goalScreen.setScreen(idolArray[idolIndex][0]);
			backgroundImg.setViewStateID("temp_bg_1");
			break;
	    }
	}

	function render() {
		// handler for displaying debug displays like hit tile collision

		//  Un-comment this on to see the collision tiles
    	// layer_1.debug = true;

    	if(debug === false) return;

    	player.render();
    	
    	backyardScreen.render();

    	switch(series){
	    	case 1:
	    	screenLevel1.render();
	    	break;
	    	
	    	case 2:
	    	screenLevel2.render();
	    	break;

	    	case 3:
	    	screenLevel3.render();
	    	break;

	    	case 4:
	    	screenLevel4.render();
	    	break;
	    }
    
    	goalScreen.render();
	}

	function playerFailed(errorMessage){
		// handler for player fail in game
		if(hasFailed === false){
			if(this.debug === true) logger("playerFailed()");

			peril_hit_and_fade_audio.play();
			
			hasFailed = true;

			var timerReset = game.time.create(true);
			timerReset.add(500, postFailed, this, errorMessage);
			timerReset.start();
		}
	}

	// this is for the first screen
	function postFailed(errorMessage){
		// handler called to setup up restart of level - reset player position, set screen

		this.player.stop(true);
		//this.game.tweens.removeAll();

		switch(currentScreen){
			case 0:
			player.sprite.x = backyardScreen.startPosX;
			player.sprite.y = backyardScreen.startPosY;
			break;

			case 1:
			player.sprite.x = screenLevel1.startPosX;
			player.sprite.y = screenLevel1.startPosY;
			break;

			case 2:
			player.sprite.x = screenLevel2.startPosX;
			player.sprite.y = screenLevel2.startPosY;
			break;

			case 3:
			player.sprite.x = screenLevel3.startPosX;
			player.sprite.y = screenLevel3.startPosY;
			break;

			case 4:
			player.sprite.x = screenLevel4.startPosX;
			player.sprite.y = screenLevel4.startPosY;
			break;

			case 5:
			player.sprite.x = goalScreen.startPosX;
			player.sprite.y = goalScreen.startPosY;
			break;
			
		}

		var timerReset = game.time.create(true);
		if(debug === false) logger("Message: " + errorMessage);

		timerReset.add(500, function(){
			timerReset.destroy();

			// reset player
			player.enablePlayer = true;
			player.sprite.scale.x = 1; 
    		player.movingRight = true;
			
			setScreen();
			//messageDisplayGrp.x = 800;
		},this);
		timerReset.start();
	}

	function playerSucceeded(){
		// handler for player success - 
		// Note: basically updates number of idols found - exit screen handled the next level

		totalIdols = totalIdols + 1;
		var charIdol = idolArray[idolIndex][0];
		charIdol = charIdol.split("_")[0];
		if(debug === true) logger("charIdol " + charIdol);
		hud.setIdols(totalIdols, charIdol);
	}

	function endOfSeries(){
		// hander for end of current series
		if(debug === true) logger("Message: " + "You have all the pieces!");

		currentScreen = 5; // go to goal screen
		setScreen();
	}

	function update(){
		
		//logger("Update currentScreen: " + currentScreen);

		// note: should not be called every time
		if(isReadyReset === true) resetScreen(); 
		isReadyReset = false;

		switch(currentScreen){
			case 0:
			if(backyardScreen) {
				backyardScreen.layer.alpha = 1;
				backyardScreen.enabled = true;
				backyardScreen.update();
			}
			break;

			case 1:
			screenLevel1.layer.alpha = 1;
			screenLevel1.enabled = true;
			screenLevel1.update();
			break;
			
			case 2:
			screenLevel2.layer.alpha = 1;
			screenLevel2.enabled = true;
			screenLevel2.update();
			break;

			case 3:
			screenLevel3.layer.alpha = 1;
			screenLevel3.enabled = true;
			screenLevel3.update();
			break;

			case 4:
			screenLevel4.layer.alpha = 1;
			screenLevel4.enabled = true;
			screenLevel4.update();
			break;

			case 5:
			if(goalScreen) {
				goalScreen.layer.alpha = 1;
				goalScreen.enabled = true;
				goalScreen.update();
			}
			break;

		}

		if(player != null) player.runControls(); // constant function for player controls
	}

	function resetScreen(){
		if(debug === true) logger("resetScreen");

		// reset display of levels
		if(backyardScreen){
			backyardScreen.layer.alpha = 0;
			backyardScreen.clear();
		}

		screenLevel1.layer.alpha = 0;
		screenLevel1.clear();
		
		screenLevel2.layer.alpha = 0;
		screenLevel2.clear();
		
		screenLevel3.layer.alpha = 0;
		screenLevel3.clear();
		
		screenLevel4.layer.alpha = 0;
		screenLevel4.clear();
		
		if(goalScreen){
			goalScreen.layer.alpha = 0;
			goalScreen.clear();
		}
	}

	function getNextSeries(){
		// at end of series reset current levels
		if(debug === true) logger("getNextSeries");
		
		currentScreen = 0;

		// Debug series and idols
		//series = 2;
		//idolIndex = 0;

		if(enableRandomSeries === true){
			buildRandomSeriesSet();
		}else{
			series = series + 1;
			if(series > 4) series = 1; // start over again after all levels played
			seriesSet = [series,series,series,series];
		}
		
		idolIndex = idolIndex + 1;
		if(idolIndex > 3) idolIndex = 0; 
		
		totalIdols = 0;

		player.destroy();
		player = null;
		backyardScreen.destroy();
		backyardScreen = null;
		screenLevel1.destroy();
		screenLevel1 = null;
		screenLevel2.destroy();
		screenLevel2 = null;
		screenLevel3.destroy();
		screenLevel3 = null;
		screenLevel4.destroy();
		screenLevel4 = null;
		goalScreen.layer.alpha = 0;
		goalScreen.destroy();
		goalScreen = null;
		hud.destroy();
		hud = null;

		//backgroundImg.destroy();
		//backgroundImg = null;

		gameLevels = [];
		
		isSplashPageDisplayed = false;
		isReadyReset = true;
		tutorialCompleted = true;

		needsRebuild = true;

		//map.destroy();
		//map = null;

		//game.destroy();
		//game = null;

		init();

	}

	init(); // initialize game

}(window));
