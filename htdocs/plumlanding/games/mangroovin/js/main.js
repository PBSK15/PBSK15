//main.js - game controller - handing loading, event handling, game logic handling

// global values
var canvas, stageWidth = 988, stageHeight = 556, // canvas object reference, Stage width and height
	gameDataDisplay, gameRoundDisplay, // reference to html divs - used for debugin and profiling
	isMobileDevice = true, // mobile device flag
	GAME_NAME = 'mangroovin';
/*
Note: These variables are referenced in settings.js 
	assetManifest : Manifest for assets when using Loader
	prawn position arrays : dynamic positioning of shrimps based on level
	grouperBabyData, heronSpritesheetData, bubblesData, prawnData : Spritesheet data
	speakSync : audio for plum speaking animation  
*/

(function(window){
	var canvasContainer = null, // reference to canvas container - div
		loadingScreen = null, // reference to loading screen display container
		gameHUD = null, // reference to game hud - handles viewstate to a certain extent
		plumPlinkDisplay = null, // reference to plum and plink window used throughout game 
		currentRound = null, // referenc to the current round object
		currentHighScore = 0,
		gameData = null, // reference to overall game data - round, point and level
		isLoading, images, loader, manifest, load; // values for loading state, image array, asset manifest, reference to load div
	// defined round for the game
	var rounds = [
	new gamelib.GameRound(0, 6, 2000, 2, "quicker", true, "3"),
	new gamelib.GameRound(1, 4, 0, 0, "slow", false, "1"),
	new gamelib.GameRound(2, 4, 2500, 0, "slow", false, "1"),
	new gamelib.GameRound(3, 4, 2500, 0, "slow", false, "1"),
	new gamelib.GameRound(4, 5, 2500, 0, "slow", false, "2"),
	new gamelib.GameRound(5, 4, 0, 1, "slow", true, "1"),
	new gamelib.GameRound(6, 4, 2000, 1, "slow", true, "1"),
	new gamelib.GameRound(7, 4, 1250, 1, "quicker", true, "1"),
	new gamelib.GameRound(8, 5, 0, 2, "slow", true, "2"),
	new gamelib.GameRound(9, 6, 1250, 2, "slow", true, "3"),
	new gamelib.GameRound(10, 6, 1250, 2, "quicker", true, "3")];
	//INFO : gamelib.GameRound(roundNumber, numberOfShrimp, heronFreq, sharks, sharkSpeed, doesCamouflageExist, prawnlevel)
	
	function init() {
		// initialize function - setup display, loading and hooks for divs

		createjs.Ticker.useRAF = true;
		//createjs.Ticker.addListener(window);
		createjs.Ticker.setFPS(30);

		// detect whether this game is played on a moble device
		if ('ontouchstart' in document.documentElement) {
			isMobileDevice = true;
		}else{
			isMobileDevice = false;
		}

		canvasContainer = window.document.getElementById("canvasContainer");
		canvas = document.createElement('canvas');
		canvas.width = stageWidth;
		canvas.height = stageHeight;
		canvas.id = "stagecanvas";
		canvasContainer.appendChild(canvas);
		stageCanvas = window.document.getElementById("stagecanvas");

		gameDataDisplay = window.document.getElementById("gameData");
		gameRoundDisplay = window.document.getElementById("gameRound");

		load=document.createElement('div');
		load.id='loading';
		load.innerHTML='<div id="spinner"><div class="text"><div id="bar">&nbsp;<'+'/div><span class="words">Loading<'+'/span><'+'/div><'+'/div>';
		canvasContainer.appendChild(load);
		$lbar=$("#bar");

		images = images||{};

		stage = new createjs.Stage(canvas);
		stage.enableMouseOver();
		createjs.Touch.enable(stage);

		loadingScreen = new gamelib.LoadingDisplay();

		createjs.Ticker.setFPS(29);
		createjs.Ticker.addEventListener("tick", onTick);
		//createjs.FlashPlugin.swfPath = "js/createjs/";
 		//createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin]);

		createjs.Sound.alternateExtensions = ["ogg"];

		loader = new createjs.LoadQueue(false); //false when local - false
		
		loader.installPlugin(createjs.Sound);
		loadManifest();

		gameWorld = new gamelib.GameWorld(stage, images);
		stage.addChild(gameWorld);
		gameWorld.addEventListener(gamelib.viewState.EVENT_FOOD_FOUND, onFoodFound);
		gameWorld.addEventListener(gamelib.viewState.EVENT_SUCCESS_FIRED, onSuccessFired);
		gameWorld.addEventListener(gamelib.viewState.EVENT_FAIL_SHARK, onFailFired);
		gameWorld.addEventListener(gamelib.viewState.EVENT_FAIL_HERON, onFailFired);
		
		gameHUD = new gamelib.GameHUD(stage);
		gameHUD.addEventListener(gamelib.viewState.EVENT_OPEN_WINDOW, handleOpenWindow);
		gameHUD.addEventListener(gamelib.viewState.EVENT_NEW_TICKER_TEXT, handleNewTickerText);
		gameHUD.addEventListener(gamelib.viewState.EVENT_CLOSE_WINDOW, handleCloseWindow);
		gameHUD.addEventListener(gamelib.viewState.EVENT_END_GAME, handleEndGame);

		stage.addChild(loadingScreen);

		$(document).on("org_wgbh_plumlogin_savedpoints",function(ev) {
			if(debug === true) logger("org_wgbh_plumlogin_savedpoints " + ev);
		});

		$(document).on("org_wgbh_plumlogin_gamestarted",function(ev) {
			if(debug === true) logger("org_wgbh_plumlogin_gamestarted " + ev);

			currentHighScore = ev.payload.gamestatus.highscore;
		});
	}

	function onTick(){
		// ticker for heart of game
		gameWorld.onTick();
		stage.update();
		
		if(plumPlinkDisplay) plumPlinkDisplay.plumOnTick();
	}

	function loadManifest(){
		// setup loader and start the asset loading
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		
		if(debug === true) logger("IS_IE_OLDER_BROWSER " + IS_IE_OLDER_BROWSER);

		if(IS_IE_OLDER_BROWSER){
			loader.loadManifest(assetManifest_IE);
		}else{
			loader.loadManifest(assetManifest); // settings.js - setUpManifest()
		}

		loader.load();
		isLoading = true;
	}

	function handleFileLoad(event) {
		// handle loading
		// note: would be nice to get reference to spritesheet data ... but can't set up until images are loaded

		var item = event.item; // A reference to the item that was passed in to the LoadQueue
     	var type = item.type;

		//logger("percent " + loader.progress);

		// Function to set the bar; takes in a float (0 to 1) and sets the bar to that % filled in:
		updateLoadbar(loader.progress);

		//if(debug) logger("handleFileLoad " + item.id + " " + event.result);

		if (type == createjs.LoadQueue.IMAGE) { 
			images[item.id] = event.result; 
		}

		if (type == createjs.LoadQueue.JSON) { 
			//logger("json " +item.id);
			//images[o.item.id] = o.result; 
		}
	}

	function updateLoadbar(loadpercent) {
		// handle loading percent and update visual
		loadpercent=parseInt(loadpercent*100);
		$lbar.css('width',loadpercent+'%');
	}

	function handleComplete() {
		// handle loading complete - setup spritesheets, game data, display start button
		isLoading = false;

		canvasContainer.removeChild(load);

		loader.removeEventListener("fileload", handleFileLoad);
		loader.removeEventListener("complete", handleComplete);

		buildSpritesheetData(images);

		gameWorld.setup();
		
		gameData = new gamelib.GameData();

		loadingScreen.loadingComplete(images["PlayButton"]);
		loadingScreen.addEventListener(gamelib.LoadingDisplay.EVENT_BEGIN, onBeginning);
		loadingScreen.addEventListener(gamelib.LoadingDisplay.EVENT_LOGIN, onLoggingIn);
	}

	function onBeginning(){
		// begin initial plum intro, create plum link display with handlers

		loadingScreen.removeEventListener(gamelib.LoadingDisplay.EVENT_BEGIN, onBeginning);
		stage.removeChild(loadingScreen);

		plumPlinkDisplay = new gamelib.PlumPlinkDisplay(stage, images);
		stage.addChild(plumPlinkDisplay);

		gameHUD.displayTitle = "Your Mission";
		plumPlinkDisplay.addEventListener(gamelib.viewState.EVENT_START_GAME, onStartGame);
		plumPlinkDisplay.addEventListener(gamelib.viewState.EVENT_OPEN_WINDOW, handleOpenWindow);
		plumPlinkDisplay.addEventListener(gamelib.viewState.EVENT_RESTART_GAME, onRestartGame); /// restart reset assets
		plumPlinkDisplay.addEventListener(gamelib.viewState.EVENT_REPLAY_GAME, onReplay);

		stage.addChild(gameHUD);

		plumlogin.startGame(GAME_NAME);
	}

	function onLoggingIn(){
		// handle login 
		loadingScreen.removeEventListener(gamelib.LoadingDisplay.EVENT_LOGIN, onLoggingIn);
		if(debug === true) logger("onLoggingIn");

		plumlogin.launchLogin();
	}

	function displayDebugContent(){
		// display debug data to debug display components
		addDebugContent(gameRoundDisplay, "Current Round Number: " + gameData.currentRound.roundNumber);
		addDebugContent(gameRoundDisplay, "Number Of Shrimp: " + gameData.currentRound.numberOfShrimp);
		addDebugContent(gameRoundDisplay, "Heron Frequency: " + gameData.currentRound.heronFreq);
		addDebugContent(gameRoundDisplay, "Number of Sharks: " + gameData.currentRound.sharks);
		addDebugContent(gameRoundDisplay, "Shark Speed: " + gameData.currentRound.sharkSpeed);
		addDebugContent(gameRoundDisplay, "Does Camouflage Exist: " + gameData.currentRound.doesCamouflageExist);
		addDebugContent(gameRoundDisplay, "Score: " + gameData.currentRound.score);
		addDebugContent(gameRoundDisplay, "--------------------");
	}

	function onStartGame(){
		// handle start of game - set starting level/round (useful for debugging level/round) and start game world

		if(debug === true) logger("onStartGame");

		gameHUD.splitOpenWindow = false;
		gameHUD.displayTitle = "";

		gameWorld.enabled = true;
		gameData.level = 1; // starting level
		gameData.currentRound = rounds[gameData.level];
		//gameData.currentRound.sharkSpeed = "quicker";
		gameData.nextRound = rounds[gameData.level + 1]; // get next round to match transition
		gameWorld.setRound(gameData.currentRound, gameData.nextRound);	
		if(debug === true) displayDebugContent();

		gameWorld.start();

		plumlogin.startGame(GAME_NAME);
	}

	function onRestartGame(){
		// handle restart of game - between rounds/level - completed or failed

		if(debug === true) logger("onRestartGame");

		if(gameData.currentRound.isSuccessful === true){
			gameWorld.stopWorld();
			createjs.Tween.get(gameWorld).to({x:-stageWidth}, 500, createjs.Ease.circOut).call(function(){	
				if(gameData.level < rounds.length - 1){
					gameWorld.x = 0; // reset back to first half of area
					gameWorld.changeBackground();
					gameData.level = gameData.level + 1;
					if(debug === true) logger("gameData.level " + gameData.level);
					
					gameData.currentRound = rounds[gameData.level];
					if(gameData.level + 1 <= rounds.length){
						gameData.nextRound = rounds[gameData.level + 1];
					}
					if(debug === true) logger("gameData.currentRound.roundNumber " + gameData.currentRound.roundNumber);
					nextLevel();
				}
				
			});
		}else{
			nextLevel();
		}
		
		handleCloseWindow(); // close current window

	}

	function onReplay(){
		// handle replay of the game

		if(debug === true) logger("onReplay");
		
		//handleCloseWindow();	
		plumPlinkDisplay.resetDisplay();
		gameHUD.splitOpenWindow = false;
		gameHUD.displayTitle = "";

		// reset scores
		for(var i = 1; i < rounds.length; i++){
			rounds[i].score = 100;
		}
		gameWorld.x = 0; // reset back to first half of area
		gameData.level = 1;
		gameData.currentRound = rounds[gameData.level];
		gameData.nextRound = rounds[gameData.level + 1];
		
		gameWorld.setRound(gameData.currentRound, gameData.nextRound);
		nextLevel();
	}

	function nextLevel(){
		// handle next round/level

		gameData.currentRound.shrimpEatenNumber = 0;
		if(debug === true) displayDebugContent();

		gameWorld.stopWorld();
		gameWorld.restart();

		gameWorld.setRound(gameData.currentRound, gameData.nextRound);	
		
		addDebugContent(gameRoundDisplay, "Game Restarted");
	}

	function onFoodFound(){
		// handler for when shrimp is eaten
		if(gameData.currentRound.shrimpEatenNumber <= 6){
			gameData.currentRound.shrimpEatenNumber = gameData.currentRound.shrimpEatenNumber + 1;
			addDebugContent(gameRoundDisplay, "shrimpEatenNumber: " + gameData.currentRound.shrimpEatenNumber);
		}
	}

	function onSuccessFired(){
		// handle end of successful round/level
		gameData.currentRound.isSuccessful = true;
		gameWorld.stopWorld();

		if(gameData.level < rounds.length - 1){
			addDebugContent(gameRoundDisplay, "Player Successful");
			addDebugContent(gameRoundDisplay, "--------------------");
			gameHUD.openPopupSuccess(gameData.currentRound.roundNumber);

			plumlogin.logGameLevel(GAME_NAME, gameData.currentRound.roundNumber); // log current level
			
		}else{
			if(debug === true) logger("No More Round/Levels");
			//createjs.Tween.get(gameWorld).to({x:-stageWidth}, 1000, createjs.Ease.linear).call(function(){	
			var resultText = "";
			var totalScore = 0;

			for(var i = 1; i < rounds.length; i++){
				totalScore = totalScore + rounds[i].score;
			}
			resultText = resultText + totalScore + " Points Earned!";
			
			plumlogin.startGame(GAME_NAME);
			plumlogin.logGameScore(GAME_NAME, totalScore); // log current score and save
			plumlogin.savePoints(GAME_NAME, totalScore);

			addDebugContent(gameRoundDisplay, resultText);

			gameHUD.openPopupEndOfGame(totalScore);
		}
	}

	function onFailFired(data){
		// handle failed round/level
		if(debug === true) {
			logger("data " + data.type);
			addDebugContent(gameRoundDisplay, "Player Failed");
			addDebugContent(gameRoundDisplay, "--------------------");
		}

		gameData.currentRound.isSuccessful = false;
		gameWorld.stopWorld();
		gameData.currentRound.setScore(-50);
		gameHUD.openPopupFail(gameData.currentRound.roundNumber, data.type);

		if(data.type == gamelib.viewState.EVENT_FAIL_HERON){
			createjs.Sound.stop();
			createjs.Sound.play('eaten_by_heron');
		}else if(data.type == gamelib.viewState.EVENT_FAIL_SHARK){
			createjs.Sound.stop();
			createjs.Sound.play('eaten_by_shark');
		}
	}

	function handleOpenWindow(){
		// handler for opening plink window
		if(debug === true) logger("handleOpenWindow");
		plumPlinkDisplay.openWindow(gameHUD.displayTitle,gameHUD.splitOpenWindow);
	}

	function handleNewTickerText(){
		// handler for opening textticker running
		if(debug === true) logger("handleNewTickerText");
		plumPlinkDisplay.playTickerText(gameHUD.displayTitle, gameHUD.currentRoundNumber, gameHUD.readTextString);
	}

	function handleCloseWindow(){
		// handler for closing plink window
		if(debug === true) logger("handleCloseWindow()");
		gameHUD.displayTitle = "";
		plumPlinkDisplay.closeWindow(gameHUD.displayTitle);
	}

	function handleEndGame(){
		// handler for end of game
		if(debug === true) logger("handleEndGame");
		gameHUD.displayTitle = "Winner!";
		plumPlinkDisplay.endGame(gameHUD.displayTitle, gameHUD.scoreResults, gameHUD.currentRoundNumber, gameHUD.readTextString);
		gameWorld.stopWorld();
	}

	init(); /// call init function

}(window));