//gameLib.js - game library - game display, component objects, game logic and hit collision

var gamelib = gamelib||{};

// create scope of Class

(function(window){

//static variables for view state
	(gamelib.viewState = function() { });
	gamelib.viewState.VIEW_STATE_LOADING = "loading";
	gamelib.viewState.VIEW_STATE_INSTRUCTIONS = "instructions";
	gamelib.viewState.VIEW_STATE_END_ROUND = "end_round";
	gamelib.viewState.VIEW_STATE_FAIL = "fail";
	gamelib.viewState.VIEW_STATE_END_GAME = "end_game";
	gamelib.viewState.VIEW_CLOSE_WINDOW = "close_window";

	// fun fact text array
	gamelib.viewState.FunFactsText = [
	"Small fish and baby fish find safety in the tree roots. Even shark babies!",
	"Groupers can grow to almost five feet. But when they're babies, they are small and keep safe by hiding in the roots of the mangrove trees.",
	"There are mangrove forests on the coasts of oceans around the world. They grow in brackish water, a mix of freshwater and saltwater.",
	"Mangrove trees drop mini-mangrove plants into the water to start new trees.",
	"Mangrove trees help protect the shorelines from storms. Their roots help keep waves from washing away the coastline.",
	"Lemon sharks can hunt at night, sensing the tiny amounts of electricity fish give off.",
	"Lemon sharks are cold blooded, which is why they like to live in the warm mangrove waters.",
	"Young sharks are called pups. They stay near their mothers for several years.",
	"Lemon sharks have curved teeth that help them catch small fish. Fish get caught and can't escape!",
	];

	// response text variables
	gamelib.viewState.SHARK_FAIL_MESSAGE = "Oh no, you got eaten! Sharks have to eat too! But try again!";
	gamelib.viewState.HERON_FAIL_MESSAGE = "Oh no, you got eaten! Herons have to eat too! But try again!";

	gamelib.viewState.MISSION_1 = "In this game YOU are a baby grouper fish! You'll need to swim out in the open water to eat all the shrimp."; 
	gamelib.viewState.MISSION_2 = "But there are predators like sharks and herons, so don't get eaten!";
	gamelib.viewState.MISSION_ACTION_TAP = "Tap to swim to food or safety.";
	gamelib.viewState.MISSION_ACTION_CLICK = "Click to swim to food or safety."; 

	// game events definitions
	gamelib.viewState.EVENT_FOOD_FOUND = "FOOD_FOUND";
	gamelib.viewState.EVENT_SUCCESS_FIRED = "SUCCESS_FIRED";
	gamelib.viewState.EVENT_FAIL_SHARK = "FAIL_FIRED_SHARK";
	gamelib.viewState.EVENT_FAIL_HERON = "FAIL_FIRED_HERON";

	gamelib.viewState.EVENT_NEW_TICKER_TEXT = "NEW_TICKER_TEXT";
	gamelib.viewState.EVENT_CLOSE_WINDOW = "CLOSE_WINDOW";
	gamelib.viewState.EVENT_END_GAME = "END_GAME";

	gamelib.viewState.EVENT_START_GAME = "START_GAME";
	gamelib.viewState.EVENT_OPEN_WINDOW = "OPEN_WINDOW";
	gamelib.viewState.EVENT_RESTART_GAME = "RESTART_GAME";
	gamelib.viewState.EVENT_REPLAY_GAME = "REPLAY_GAME";
	
	
//loading display 
	(gamelib.LoadingDisplay = function() {
		this.initialize();

		gamelib.LoadingDisplay.EVENT_BEGIN = "BEGIN";
		gamelib.LoadingDisplay.EVENT_LOGIN = "LOGIN";

		var refThis = this;
		var startButton;
		var button_login = new plumlib.buttonbg("Login", "", 200, 0);//labeltext,icon,width,height
		var hitToStartAudio = null;
		var splashScreen = new createjs.Bitmap("assets/img/splash_page.jpg");
		this.addChild(splashScreen);

		this.loadingComplete = function(startImg){
			// handle loading complete

			// display start button
			startButton = new createjs.Bitmap(startImg);
			this.addChild(startButton);
			startButton.x = stageWidth/2 - 178/2;
			startButton.y = stageHeight - 149;
			startButton.addEventListener("click", this.handleStartButton);
			
			// display login button
			this.addChild(button_login);
			button_login.x = startButton.x + 200;
			button_login.y = startButton.y + 60;
			button_login.alpha = 0;

			var gameTitle = createjs.Sound.play("gametitle");
			gameTitle.addEventListener("complete", handleGameTitleComplete);
			
			function handleGameTitleComplete(){
				// handle audio complete - game title
				gameTitle.removeEventListener("complete", handleGameTitleComplete);

				if(debug === true) logger("handleGameTitleComplete");

				// login to display login button
				$(document).on("org_wgbh_plumlogin_loginchange",function(ev) {
					if(debug === true) logger("org_wgbh_plumlogin_loginchange");
					if(ev.payload.u) {
						button_login.alpha = 0;
					}else{
						button_login.removeEventListener("click", handleClickLogin); // just in case
						button_login.addEventListener("click", handleClickLogin);
						button_login.alpha = 1;
					}
				});

				if(plumlogin.checkLogin() === true){
					if(isMobileDevice){
						createjs.Sound.play("tap_play");
					}else{
						createjs.Sound.play("click_play");	
					}
					button_login.alpha = 0;
				}else{
					button_login.addEventListener("click", handleClickLogin);
					button_login.alpha = 1;
					if(isMobileDevice){
						hitToStartAudio = createjs.Sound.play("hit_to_start_unlogged_touch");
					}else{
						hitToStartAudio = createjs.Sound.play("hit_to_start_unlogged_key");	
					}
				}
				
			}

		}

		this.handleStartButton = function(){
			// handle start button click
			createjs.Sound.stop();
			startButton.removeEventListener("click", this.handleStartButton);
			refThis.dispatchEvent(gamelib.LoadingDisplay.EVENT_BEGIN);
		}

		function handleClickLogin(event){
			// handle login button click
			if(debug === true) logger("Clicked - Login");
			startButton.removeEventListener("click", this.handleStartButton);
			refThis.dispatchEvent(gamelib.LoadingDisplay.EVENT_LOGIN);
		}

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.LoadingDisplay = gamelib.LoadingDisplay;

	createjs.EventDispatcher.initialize(gamelib.LoadingDisplay.prototype);

// game heads up display - more or less handles view state, the current properties for plink window and contains the outline border
	(gamelib.GameHUD = function(stage){
		this.initialize();

		var refThis = this;
		var score = 0;

		this.displayState = "";
		this.predatorFail = "";
		this.displayTitle = ""
		this.readTextString = "";
		this.currentRoundNumber = 0;
		this.splitOpenWindow = true;

		this.setState = function(value){
			// set current view state, open plink window and set up display properties
			if(value) this.displayState = value;
			refThis.dispatchEvent(gamelib.viewState.EVENT_OPEN_WINDOW);
			createjs.Tween.get(this).wait(500).call(displayNextState);
		}

		this.openPopupSuccess = function(currentRoundNumber){
			// set popup for success and set view state
			this.currentRoundNumber = currentRoundNumber;
			this.setState(gamelib.viewState.VIEW_STATE_END_ROUND);
		}

		this.openPopupEndOfGame = function(scoreData){
			// set popup for end of gane
			this.scoreResults = scoreData;
			this.splitOpenWindow = true;
			this.setState(gamelib.viewState.VIEW_STATE_END_GAME);
		}

		this.openPopupFail = function(currentRoundNumber, predatorWhoAteFail){
			// set popup for fail
			this.currentRoundNumber = currentRoundNumber;
			this.predatorFail = predatorWhoAteFail;
			this.setState(gamelib.viewState.VIEW_STATE_FAIL);
		}

		function displayNextState(){
			// set game display values and fire event for next action
			switch(this.displayState){
				case gamelib.viewState.VIEW_STATE_END_ROUND:
					this.displayTitle = "Good Job!";
					refThis.readTextString = "You made it to safety!";
					createjs.Sound.stop();
					var safeSound = createjs.Sound.play('safe');
					refThis.dispatchEvent(gamelib.viewState.EVENT_NEW_TICKER_TEXT);

					var funFactText = gamelib.viewState.FunFactsText[this.currentRoundNumber - 1];
					safeSound.addEventListener("complete", function(){
						refThis.displayTitle = "Fun Facts";
						refThis.readTextString = funFactText;
						refThis.dispatchEvent(gamelib.viewState.EVENT_NEW_TICKER_TEXT);
					});
				break;

				case gamelib.viewState.VIEW_STATE_FAIL:
					this.displayTitle = "Try Again!";
					if(this.predatorFail == "FAIL_FIRED_HERON"){
						refThis.readTextString = gamelib.viewState.HERON_FAIL_MESSAGE;
					}else if(this.predatorFail == gamelib.viewState.EVENT_FAIL_SHARK){
						refThis.readTextString = gamelib.viewState.SHARK_FAIL_MESSAGE;
					}else{
						refThis.readTextString = "Failed... Try again";
					}
					refThis.dispatchEvent(gamelib.viewState.EVENT_NEW_TICKER_TEXT);
				break;

				case gamelib.viewState.VIEW_STATE_END_GAME:
					refThis.readTextString = "Well done!";
					this.dispatchEvent(gamelib.viewState.EVENT_END_GAME);
				break;
			}
		}

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.GameHUD = gamelib.GameHUD; 

	createjs.EventDispatcher.initialize(gamelib.GameHUD.prototype);


	(gamelib.PlumPlinkDisplay = function(stage,images){
		// Plum character Plink window display object - buttons audio for intro, in game and ending

		this.initialize();

		var refThis = this;
		var plumSpeaks = false;
		var plumherself;
		var plumShip = null;
		var pointBox = null;
		var currentSpeakSync = null;
		var currentAudio = null;
		var welcome1Audio = null;
		var welcome2Audio = null;
		var welcome3Audio = null;
		var welcome4Audio = null;
		var endOfGameAudio = null;
		var startButton = null;
		var isPlumCelebrating = false;
		var plinkScreen = null;
		var isIntroWindow = true;
		var plumContainer = null;
		var isPlumRemovedFromPLink = false;
		var plinkOpenAudio = null;
		var totalScoreResults = 0;

		this.plinkScreenContainer = null;
		this.tickerText = null;
		this.playButton = null;
		

		plumShip = new createjs.Bitmap(images.plumShip);
		this.addChild(plumShip);
		plumShip.alpha = 0;
		
		plumContainer = new createjs.Container();
		this.addChild(plumContainer);
		plumContainer.x = 0;
		plumContainer.y = 0;
		
		// Display order - Plum Puppet, Plink window and then Game Hud 
		plumPuppet();
		
		this.plinkScreenContainer = new gamelib.PlinkScreenContainer();
		this.addChild(this.plinkScreenContainer);
		this.plinkScreenContainer.setTitle("Your Mission"); 
		this.plinkScreenContainer.alpha = 0;

		this.tickerText = new gamelib.TickerTextContainer();
		this.addChild(this.tickerText);

		pointBox = new gamelib.PointBoxContainer();
		this.addChild(pointBox);
		pointBox.alpha = 0;
		pointBox.setPosition(-100,-100); 
		pointBox.addEventListener("AUDIO_STOPPED", onPointBoxAudioStopped);

		this.playButton = new plumlib.buttonbg('Play',true);
		this.plinkScreenContainer.addChild(this.playButton);
		this.playButton.addEventListener("click", handlePlayButton);
		this.playButton.alpha = 0;

		var funFactsImgContainer = new createjs.Container();

		this.button_replay = new plumlib.buttonbg("Play Again", 200, 0); //= new createjs.Bitmap(this.imgs.PlayButton);
		this.addChild(this.button_replay);
		this.button_replay.x = (stageWidth/2) - 265;
		this.button_replay.y = (stageHeight/2 + 200);
		this.button_replay.addEventListener("click", handleClickReplay);
		this.button_replay.alpha = 0;

		this.button_ok = new plumlib.buttonbg("Ok", true);//labeltext,icon,width,height
		this.addChild(this.button_ok);
		this.button_ok.x = stageWidth/2 - 40;
		this.button_ok.y = stageHeight/2 + 125;
		this.button_ok.addEventListener("click", handleClickOk);
		this.button_ok.alpha = 0;

		this.addChild(funFactsImgContainer);

		function handleClickOk(event){
			// handle ok button click
			if(debug === true) logger("Clicked - Ok");
			gamelib.stopAudio();
			refThis.dispatchEvent(gamelib.viewState.EVENT_RESTART_GAME);
			//isSuccessful = false;
			refThis.hideAllButtons();
			if(funFactsImgContainer.getNumChildren() > 0){
				funFactsImgContainer.removeAllChildren();
			}
		}

		function handleClickReplay(event){
			// handle replay button click
			if(debug === true) logger("onReplayComplete");
			
			plumherself.settleDown();

			createjs.Sound.stop();
			refThis.dispatchEvent(gamelib.viewState.EVENT_REPLAY_GAME);
			//isSuccessful = false;
			refThis.hideAllButtons();
		}

		this.hideAllButtons = function(){
			// hide current buttons in display
			this.button_ok.alpha = 0;
			this.button_replay.alpha = 0;
		}

		this.setCurrentRound = function(roundNumber){
			// set fun fact image and audio
			setFunFactsImg(roundNumber);
			getFunFactAudio(roundNumber);
		}

		function setFunFactsImg(roundNumber){
			// helper to display fun facts image
			if(debug === true) logger("setFunFactsImg " + roundNumber);

			if(funFactsImgContainer.getNumChildren() > 0){
				funFactsImgContainer.removeAllChildren();
			}
			var funFactsImg = null;
			switch(roundNumber){
				case 1:
				funFactsImg = new createjs.Bitmap(images.funFact1);
				break;

				case 2:
				funFactsImg = new createjs.Bitmap(images.funFact2);
				break;

				case 3:
				funFactsImg = new createjs.Bitmap(images.funFact3);
				break;

				case 4:
				funFactsImg = new createjs.Bitmap(images.funFact4);
				break;

				case 5:
				funFactsImg = new createjs.Bitmap(images.funFact5);
				break;

				case 6:
				funFactsImg = new createjs.Bitmap(images.funFact6);
				break;

				case 7:
				funFactsImg = new createjs.Bitmap(images.funFact7);
				break;

				case 8:
				funFactsImg = new createjs.Bitmap(images.funFact8);
				break;

				case 9:
				funFactsImg = new createjs.Bitmap(images.funFact9);
				break;

			}
			
			funFactsImgContainer.addChild(funFactsImg);
			funFactsImg.x = stageWidth/2 + 40;
			funFactsImg.y = stageHeight/2 - 100;
		}

		function getFunFactAudio(currentRoundNumber){
			// helper for func facts audio

			switch (currentRoundNumber){
				case 1:
				createjs.Sound.play('fact1');
				break;

				case 2:
				createjs.Sound.play('fact2');
				break;

				case 3:
				createjs.Sound.play('fact3');
				break;

				case 4:
				createjs.Sound.play('fact4');
				break;

				case 5:
				createjs.Sound.play('fact5');
				break;

				case 6:
				createjs.Sound.play('fact6');
				break;

				case 7:
				createjs.Sound.play('fact7');
				break;

				case 8:
				createjs.Sound.play('fact8');
				break;

				case 9:
				createjs.Sound.play('fact9');
				break;
			}
		}

		// beginning of Intro elements
		function onPointBoxAudioStopped(){
			// handler for audio when points text box stops playing - play tap or click instructions
			var myStuffAudio = null;
			if(isMobileDevice){
				myStuffAudio = createjs.Sound.play('mystufftap');
				makePlumSpeak(10, myStuffAudio);
			}else{
				myStuffAudio = createjs.Sound.play('mystuffpress');
				makePlumSpeak(11, myStuffAudio);
			}
		}

		function handlePlayButton(){
			// handle play button click
			if(refThis.playButton.alpha == 0) return;
			
			refThis.playButton.removeEventListener("click", handlePlayButton);
			refThis.plinkScreenContainer.removeChild(refThis.playButton);
			refThis.dispatchEvent(gamelib.viewState.EVENT_START_GAME);
			createjs.Tween.get(plinkScreen).to({scaleX:.15,scaleY:.15,override:true},300,createjs.Ease.backIn).call(refThis.resetDisplay);
		}
			
		function createPlum(){
			// helper to creat plum character
			var plum = new plumlib.PlumPuppet();
			plum.setMouth(0);
			plum.getSprites("assets/img/plum/");
			
			plum.x=-.5*plum.nominalBounds.width;
			plum.y=-.5*plum.nominalBounds.height - 16;
			
			plum.sourceRect=new createjs.Rectangle(0,0,60,42);
			plum.mask=plinkScreen.masky;

			plum.nofloat=false;
			plum.floataround();

			return plum;
		}

		function createPlinkScreen(){
			// helper for creating plink window for plum
			var plinkScreen = new plumlib.plinkscreen("assets/img/plum/theship2.jpg");
			plinkScreen.x = stageWidth/2;
			plinkScreen.y = stageHeight/2;
			plinkScreen.alpha = 1;
			plinkScreen.scaleX=plinkScreen.scaleY=.15;
			plinkScreen.hideheader();

			return plinkScreen;
		}

		function plumPuppet(){
			// helper to create plum with window and buttons
			if(!plinkScreen) plinkScreen = createPlinkScreen();
			if(!plumherself) plumherself = createPlum();

			startButton = new plumlib.buttonbg('Skip Intro',true);  //new createjs.Bitmap(img["PlayButton"]);
			startButton.x = stageWidth - 150;
			startButton.y = stageHeight - 50;
			startButton.addEventListener("click", handleSkipButton);

			plinkOpenAudio = createjs.Sound.play('plinkopen');
			plinkOpenAudio.addEventListener("complete", handleInitialPlinkOpenComplete);

			var carefulPredatorsAudio = null;
			var playAudio = null;

			refThis.addChild(plinkScreen);
			plinkScreen.addChildAt(plumherself,1);
			//refThis.addChild(plumherself);
			tweenScreen = createjs.Tween.get(plinkScreen).to({scaleX:.15,scaleY:.15,override:true},500,createjs.Ease.backIn)
			.to({scaleX:1.5,scaleY:1.5,override:true},500,createjs.Ease.backOut)
			.to({x:stageWidth/2, y:stageHeight/2},500,createjs.Ease.backOut);

			refThis.addChild(startButton);
		}

		function handleInitialPlinkOpenComplete(){
			// handle audio complete of plinkOpenAudio
			plinkOpenAudio.removeEventListener("complete", handleInitialPlinkOpenComplete);
			welcome1Audio = createjs.Sound.play('welcome1');
			makePlumSpeak(0, welcome1Audio);
			welcome1Audio.addEventListener("complete", handleWelcome1Complete);
		}

		function handleWelcome1Complete(){
			// handle audio complete of welcome1Audio
			welcome1Audio.removeEventListener("complete", handleWelcome1Complete);
			welcome2Audio = createjs.Sound.play('welcome2');
			makePlumSpeak(1, welcome2Audio);
			welcome2Audio.addEventListener("complete", handleWelcome2Complete);
		}

		function handleWelcome2Complete(){
			// handle audio complete of welcome2Audio
			if(welcome2Audio) welcome2Audio.removeEventListener("complete", handleWelcome2Complete);
			plinkOpenAudio = createjs.Sound.play('plinkopen');
			plinkOpenAudio.addEventListener("complete", handlePlinkOpenComplete);

			refThis.removeChild(startButton);
			startButton = null;

			// open plink window
			createjs.Tween.get(plinkScreen).to({scaleX:1, scaleY:1, x:stageWidth/2 + 200, y:stageHeight/2 - 100, override:true}, 300, createjs.Ease.backIn);
			refThis.dispatchEvent(gamelib.viewState.EVENT_OPEN_WINDOW);
			
		}

		var isTextReady = false;
		var isAudioReady = false;

		function handlePlinkOpenComplete(){
			// handle audio complete of plinkOpenAudio
			plinkOpenAudio.removeEventListener("complete", handlePlinkOpenComplete);

			welcome3Audio = createjs.Sound.play('welcome3');
			makePlumSpeak(2, welcome3Audio);
			welcome3Audio.addEventListener("complete", handleWelcome3Complete);
			refThis.tickerText.readOutText(gamelib.viewState.MISSION_1);

			refThis.tickerText.addEventListener("READ_OUT_TEXT_COMPLETE", onReadOutWelcome3Complete);
			
			isTextReady = false;
			isAudioReady = false;
		}

		function onReadOutWelcome3Complete(){
			refThis.tickerText.removeEventListener("READ_OUT_TEXT_COMPLETE", onReadOutWelcome3Complete);
			isTextReady = true;
			playWelcome3();
			if(debug === true) logger("onReadOutTextComplete");
		}

		function handleWelcome3Complete(){
			// handle audio complete of welcome3Audio
			welcome3Audio.removeEventListener("complete", handleWelcome3Complete);
			isAudioReady = true;
			playWelcome3();
		}

		function playWelcome3(){
			if(isTextReady === true && isAudioReady === true){
				welcome4Audio = createjs.Sound.play('welcome4');
				makePlumSpeak(3, welcome4Audio);
				welcome4Audio.addEventListener("complete", handleWelcome4Complete);

				refThis.tickerText.readOutText(gamelib.viewState.MISSION_2);
				refThis.tickerText.addEventListener("READ_OUT_TEXT_COMPLETE", onReadOutWelcome4Complete);
				
				isTextReady = false;
				isAudioReady = false;
			}
			
		}

		function onReadOutWelcome4Complete(){
			refThis.tickerText.removeEventListener("READ_OUT_TEXT_COMPLETE", onReadOutWelcome4Complete);
			isTextReady = true;
			playWelcome4();
			if(debug === true) logger("onReadOutTextComplete");
		}

		function handleWelcome4Complete(){
			// handle audio complete of welcome3Audio
			welcome4Audio.removeEventListener("complete", handleWelcome4Complete);
			isAudioReady = true;
			playWelcome4();
		}

		function playWelcome4(){
			// handle audio complete of welcome4Audio

			if(isTextReady === true && isAudioReady === true){
			
				if(isMobileDevice){
					refThis.tickerText.readOutText(gamelib.viewState.MISSION_ACTION_TAP, "blurb-emphasis");
				}else{
					refThis.tickerText.readOutText(gamelib.viewState.MISSION_ACTION_CLICK, "blurb-emphasis");
				}
				
				if(isMobileDevice){
					toSwimAudio = createjs.Sound.play('tap_toswim');
					makePlumSpeak(4, toSwimAudio);
				}else{
					toSwimAudio = createjs.Sound.play('click_toswim');
					makePlumSpeak(5, toSwimAudio);
				}
				
				makePlumSpeak(4, toSwimAudio);
				toSwimAudio.addEventListener("complete", handleToSwimComplete);
			}
		}

		function handleToSwimComplete(){
			// handle audio complete of toSwimAudio
			toSwimAudio.removeEventListener("complete", handleToSwimComplete);

			refThis.playButton.alpha = 1;
			refThis.playButton.x = (stageWidth/2 - 200) - 40 ;
			refThis.playButton.y = (stageHeight/2 + 200);
			if(isMobileDevice){
				playAudio = createjs.Sound.play("tap_play");
				makePlumSpeak(7, playAudio);
			}else{
				playAudio = createjs.Sound.play("click_play");
				makePlumSpeak(8, playAudio);	
			}
			//makePlumSpeak(6, toSwimAudio);
			playAudio.addEventListener("complete", function(){
				makePlumStopSpeak();
			});
			// end of Intro
		}

		function handleSkipButton(){
			// handle action to skip intro
			if(welcome1Audio) {
				welcome1Audio.stop();
				welcome1Audio.removeEventListener("complete", handleWelcome1Complete);
			}
			if(welcome2Audio) {
				welcome2Audio.stop();
				welcome2Audio.removeEventListener("complete", handleWelcome2Complete);
			}
			handleWelcome2Complete();
		}

		function makePlumSpeak(syncIndex, audio){
			// help to plum speaking animation and audio sync
			plumSpeaks = true;
			currentSpeakSync = speakSync[syncIndex];
			currentAudio = audio;
		}

		function makePlumStopSpeak(){
			// help to stop plum speaking animation
			plumSpeaks = false;
			plumherself.nofloat=true;
		}
		// end of intro

		// celebration at end
		function playPlumCelebration(){
			// start celebration animation and audio
			if(!isPlumRemovedFromPLink){
				plumContainer.addChild(plumherself);
				
				plumherself.mask = stage;

				isPlumRemovedFromPLink = true;
				plumherself.x = stageWidth/2 + 50;
				plumherself.y = stageHeight/2 - 170;

				plumherself.scaleX = plumherself.scaleY = .8; 
			}

			plumContainer.y = 0;
			isPlumCelebrating = true;
			plumherself.doConfetti();
			createjs.Sound.play('plumconfetti');
		}

		this.resetDisplay = function(){
			// reset display after end of celebration
			refThis.closeWindow("");

			plinkScreen.alpha = 0;
			createjs.Tween.removeTweens(plinkScreen);

			pointBox.show(false);
			pointBox.setPosition(-100,-100); 
			plumShip.alpha = 0;
			plumContainer.y = 1000;
		}

		this.openWindow = function(displayTitle,splitOpenWindow){
			// helper to open plink window
			createjs.Sound.play('plinkopen');
			this.plinkScreenContainer.setTitle(displayTitle);
			this.hideAllButtons(); 

			if(splitOpenWindow){
				this.plinkScreenContainer.alpha = 1;
				this.plinkScreenContainer.openWindow(-200, 100);
				this.tickerText.x = (stageWidth/2 - 170) - 200;
				this.tickerText.y = (stageHeight/2) + 20;
			}else{
				this.plinkScreenContainer.openWindow(0, 0, 1.2);
				this.tickerText.x = stageWidth/2 - 200;
				this.tickerText.y = stageHeight/2 - 80;
			}
		}

		this.closeWindow = function(displayTitle){
			// helper to close plink window
			this.plinkScreenContainer.closeWindow();
			this.tickerText.x = -1000;
			this.plinkScreenContainer.setTitle("");
			this.tickerText.readOutText(" ");
			this.tickerText.y = stageHeight/2 - 125;
			this.playButton.alpha = 0; 
		}

		this.playTickerText = function(displayTitle, currentRoundNumber, readTextString){
			// run ticker text and position text based on title
			this.plinkScreenContainer.setTitle(displayTitle);
			this.tickerText.readOutText(" ");

			if(displayTitle == "Fun Facts"){ // if fun facts position text and set round to display
				this.setCurrentRound(currentRoundNumber);	
				this.tickerText.readOutText(readTextString, "game-blurb-sm");
				this.tickerText.x = this.tickerText.x - 60;
			}else{
				// other wise display text based on design position
				this.tickerText.readOutText(readTextString);
			}

			this.button_ok.alpha = 1; // display ok button
		}

		this.plumOnTick = function(){
			// handler for game ticker - handle changes and iterations
			if(this.tickerText) this.tickerText.onTick();
			if(pointBox) pointBox.onTick();

			if(plumSpeaks === true){
				//logger( parseInt(speakSync.length*welcome1Audio.getPosition()/welcome1Audio.getDuration()) );
				plumherself.setMouth( currentSpeakSync[ parseInt(currentSpeakSync.length*currentAudio.getPosition()/currentAudio.getDuration()) ] );
			}

			if(isPlumCelebrating === true){
				plumherself.update();
			}
		}

		this.endGame = function(displayTitle, scoreResults, currentRoundNumber, readTextString){
			// end of game display action

			totalScoreResults = scoreResults;

			this.tickerText.x = (stageWidth/2 - 260);
			this.tickerText.y = (stageHeight/2) + 35;
		
			createjs.Tween.get(plumShip).to({alpha:1}, 400, createjs.Ease.linear);

			playPlumCelebration();
			
			endOfGameAudio = createjs.Sound.play('endofgame');
			makePlumSpeak(9, endOfGameAudio); 
			endOfGameAudio.addEventListener("complete", onEndOfGameAudioComplete);
			
			this.playTickerText(displayTitle, currentRoundNumber, readTextString);

			this.hideAllButtons();
			this.button_replay.alpha = 1; 
			this.button_ok.alpha = 0;
		}

		function onEndOfGameAudioComplete(){
			// handle audio end of game and point ticker
			endOfGameAudio.removeEventListener("complete", onEndOfGameAudioComplete);
			
			pointBox.show(true);
			pointBox.setPosition( refThis.tickerText.x - 5, refThis.tickerText.y + 50 );  
			if(debug) logger("totalScoreResults " + totalScoreResults);
			pointBox.countNumber( totalScoreResults );	
		}

	}).prototype = new createjs.Container();

	window.gamelib.PlumPlinkDisplay = gamelib.PlumPlinkDisplay; 

	createjs.EventDispatcher.initialize(gamelib.PlumPlinkDisplay.prototype);


	(gamelib.PlinkScreenContainer = function() {
		// Plink window display object - a helper for plink screen window 

		this.initialize();

		var refThis = this;
		refThis.newScreen = new plumlib.plinkscreen();
		
		this.addChild(refThis.newScreen);
		refThis.newScreen.x = stageWidth/2;
		refThis.newScreen.y = stageHeight/2;
		refThis.newScreen.alpha = 1;
		refThis.newScreen.scaleX=refThis.newScreen.scaleY=.15;

		this.closeWindow = function(){
			// action closing window
			if(debug === true) logger("PlinkScreenContainer closeWindow " + refThis.newScreen);
			createjs.Tween.get(refThis.newScreen).to({scaleX:.15,scaleY:.15,override:true},300,createjs.Ease.backIn).call(onCloseWindow);
		}

		function onCloseWindow (){
			// handle closing window action
			if(debug === true) logger("PlinkScreenContainer onCloseWindow")
			//refThis.newScreen.alpha = 0;
			refThis.newScreen.x = -1000;
			createjs.Tween.removeTweens(refThis.newScreen);
		}

		this.openWindow = function(xOffSet, yOffset, scaleSize){
			// action opening window
			if(!scaleSize){
				scaleSize = 1;
			}
			refThis.newScreen.alpha = 1;
			refThis.newScreen.x = stageWidth/2 + xOffSet;
			refThis.newScreen.y = stageHeight/2 + yOffset;
			createjs.Tween.get(refThis.newScreen).to({scaleX:scaleSize, scaleY:scaleSize, override:true}, 500, createjs.Ease.backOut).call(onOpenWindow);
		}

		function onOpenWindow(){
			// handle opening window action
			refThis.dispatchEvent(gamelib.viewState.EVENT_OPEN_WINDOW);
		}

		this.setTitle = function(textTitle){
			// setter for title component
			if(textTitle == ""){
				refThis.newScreen.hideheader();
				refThis.newScreen.settitle("");
			}else{
				refThis.newScreen.setheader();
				refThis.newScreen.settitle(textTitle);
			}
			
		}

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.PlinkScreenContainer = gamelib.PlinkScreenContainer;

	createjs.EventDispatcher.initialize(gamelib.PlinkScreenContainer.prototype);



	(gamelib.TickerTextContainer = function() {
		// ticker text display object
		this.initialize();

		var refThis = this;
		var hideXPos = 500;
		
		var totype = new Array; // Array holds all things that need to be typed out, but there's only going to be one element here.
		var typing = false; // are we typing?
		var maxcharwidth=28;//31; // the character width of this span - used to determine how to break up the words across lines
		
		var readTextString = "";
		
		// make a new DOM object to hold the text
		var contentDiv=document.createElement('div');
		contentDiv.id = 'plinkScreenContent';

		var contentText=document.createElement('span');
		
		// add it to the page (see styles - some things need to be absolute positioned, others relative)
		contentDiv.appendChild(contentText);
		var content=document.getElementById('canvasContainer');
		content.appendChild(contentDiv);

		var cjsDiv=new createjs.DOMElement(contentDiv);
		this.addChild(cjsDiv);
	
		this.readOutText = function(msg, className) {
			// handle and format ticker text action
			if(!className) className = "game-blurb";
			contentText.className = className;

			contentText.innerHTML=plumlib.TickerText.addBreaks(msg,maxcharwidth); // add line breaks to avoid weird wrapping
			typeText(contentText); // this is a regular DOM object passed to typetext
		}

		function typeText(textobject) {
			// make text get "typed out" for visual interest while there's audio
			// input is a DOM object
			// it pulls out the innerHTML from the input DOM object to determine what text to write

			var tt=new plumlib.TickerText(textobject.innerHTML); // uses TickerText util
			totype.push([textobject,tt,tt.untaggedlength(),0]);
			textobject.innerHTML="";
			
			typing=true; // now start typing
		}

		this.onTick = function(){
			// handle game tick - Type out any text fields
			if(typing === true) {
				if(totype.length > 0) {
					var t=0;
					var str=totype[t];
					if(str[2]>str[3]) {
						str[3]+=1; // type out two chars at a time. One-at-a-time is sometimes a bit too slow to match audio.
						str[0].innerHTML=str[1].subticker(0,str[3]);
					} else {
						totype.splice(t,1);
					}
				} else {
					// typing is finished... turn flag off
					typing=false;
					refThis.dispatchEvent("READ_OUT_TEXT_COMPLETE");
				}
			}
		}

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.TickerTextContainer = gamelib.TickerTextContainer;
	createjs.EventDispatcher.initialize(gamelib.TickerTextContainer.prototype);


	(gamelib.PointBoxContainer = function() {
		// point box component object

		this.initialize();

		var tocount = new Array; // Array holds all things that need to be counted out, but there's only going to be one element here.
		var counting = false; // are we counting?

		// make a new DOM object to hold the text
		var contentDiv=document.createElement('div');
		contentDiv.id = 'plinkScreenContent';

		var contentText=document.createElement('span');
		//contentText.className = "game-blurb"; // add class to pick up style
		contentText.className = "blurb-emphasis"; // add class to pick up style
		// add it to the page (see styles - some things need to be absolute positioned, others relative)
		contentDiv.appendChild(contentText);
		var content=document.getElementById('canvasContainer');
		content.appendChild(contentDiv);

		var cjsDiv=new createjs.DOMElement(contentDiv);
		this.addChild(cjsDiv);

	// // SET UP DOM ELEMENTS FOR THE POINT BOX
		var pointbox=document.createElement('div');
		pointbox.className = 'user-points-main';

		pointbox.innerHTML='<h6>POINTS:<'+'/h6>';
		var visiblescore=document.createElement('h1');
		visiblescore.innerHTML='0';
		pointbox.appendChild(visiblescore);
		pointbox.style.visibility = "hidden";
		content.appendChild(pointbox);
		
		var cjsscorevis=new createjs.DOMElement(pointbox);
		stage.addChild(cjsscorevis);
		cjsscorevis.alpha = 0;
		
		this.setPosition = function(x, y){
			// set position
			cjsscorevis.x = x;
			cjsscorevis.y = y;
		}

		this.show = function(isShown){
			// show or hide Dom element
			if(isShown){
				cjsscorevis.alpha = 1;
				pointbox.style.visibility = "visible";
			}else{
				cjsscorevis.alpha = 0;
				pointbox.style.visibility = "hidden";
			}
			
		}

		this.countNumber = function(endnumber) {
			// start count
			//var nn=parseInt(visiblescore.innerHTML);
			var nn=parseInt("0"); // always reset the points back to zero
			tocount.push([visiblescore,nn,endnumber]);
			createjs.Sound.play('pointcount');
			counting = true;
		}

		this.onTick = function(){
			// handler for game tick
			// Do any countups
			if(counting === true) {
				if(tocount.length > 0) {
					var str=tocount[0];
					var df=str[2]-str[1];
					if(df>0) 
					{
						var prop=Math.max(1,parseInt(df/8));
						str[1]+=(df<prop)?df:prop;
						str[0].innerHTML=str[1];
					} else {
						//	counting is finished.
						tocount.splice(0,1);
						// you can trigger an event
						$.event.trigger({
							type: "countEnded"
						});

						//  or just do stuff here
						//console.log("STOP!!!");
						createjs.Sound.stop();
						this.dispatchEvent("AUDIO_STOPPED");
						counting=false;
					}
				}
			}
		}

	}).prototype = new createjs.Container();

	window.gamelib.PointBoxContainer = gamelib.PointBoxContainer;
	createjs.EventDispatcher.initialize(gamelib.PointBoxContainer.prototype);


	(gamelib.Player = function(spriteSheet,xPos,yPos){
		// player display object - spritesheet , set x and y position

		this.initialize();

		this.enabled = false;

		var refThis = this;
		var grouperWidth = 60; //75;
		var grouperHeight = 45; //43;
		var movementTween = null;

		var grouperImg = new createjs.Sprite(spriteSheet, "goliath_grouper");
		this.addChild(grouperImg);
		grouperImg.scaleX = grouperImg.scaleY = .55;
		grouperImg.gotoAndPlay("_rest");
		
		grouperImg.regX = grouperWidth/2;
		grouperImg.regY = grouperHeight/2;
		
		this.scaleX = -1;
		
		if(xPos){
			this.currentPlayerX = xPos;
		}else{
			this.currentPlayerX = 0;
		}
		if(yPos){
			this.currentPlayerY = yPos;
		}else{
			this.currentPlayerY = 0;
		}
		
		this.newPlayerX = 0;
		this.newPlayerY = 0;
		this.x = this.currentPlayerX;
		this.y = this.currentPlayerY;
		this.isSafe = false;

		this.setPosition = function(xPos, yPos){
			// set x and y position
			this.currentPlayerX = xPos;
			this.currentPlayerY = yPos;
			this.x = this.currentPlayerX;
			this.y = this.currentPlayerY;
		}

		this.move = function(moveToX, moveToY){
			// handle move action - mouse click
			if(this.enabled !== true) return;

			grouperImg.gotoAndPlay("_loop");

			//logger("mouse/touch x - new/current: " + this.newPlayerX + " " + currentPlayerX);
			//logger("mouse/touch y - new/current: " + this.newPlayerY + " " + currentPlayerY);
			if(movementTween) movementTween.pause();

			this.newPlayerX = moveToX;
			this.newPlayerY = moveToY;

			if(this.newPlayerX > this.currentPlayerX){
				this.scaleX = -1;
			}else{
				this.scaleX = 1;
			}

			var rotationChange = 0;

			if(this.newPlayerY > this.currentPlayerY && Math.abs(this.newPlayerY - this.currentPlayerY) > 50){
				if(this.newPlayerX > this.currentPlayerX){ // face right 
					rotationChange = Math.atan2(this.newPlayerY - this.currentPlayerY, this.newPlayerX - this.currentPlayerX) * 180 / Math.PI; 	
				}else{ // face left 
					rotationChange = Math.atan2(this.currentPlayerY - this.newPlayerY, this.currentPlayerX - this.newPlayerX) * 180 / Math.PI; 	
				}
				
			}else if(this.newPlayerY < this.currentPlayerY && 
				Math.abs(this.newPlayerY - this.currentPlayerY) > 50){
				if(this.newPlayerX > this.currentPlayerX){ // face right
					rotationChange = Math.atan2(this.newPlayerY - this.currentPlayerY, this.newPlayerX - this.currentPlayerX) * 180 / Math.PI; 	 		
				}else{
					rotationChange = -Math.atan2(this.newPlayerY - this.currentPlayerY, this.newPlayerX - this.currentPlayerX) * 180 / Math.PI; 	 				
				}	
			}
			
			var FPS = 30; // frames per second
			var xdist = this.newPlayerX - this.x; // To and from are points with x and y properties.
			var ydist = this.newPlayerY - this.y;
			var distance = Math.sqrt(xdist*xdist + ydist*ydist);
			var ticks = distance / 10;
			var duration = ticks / FPS * 1000; // In milliseconds

			// clamp rotation
			if(rotationChange > 75){
				rotationChange = 75;
			}
			if(rotationChange < -75){
				rotationChange = -75;
			}
			
			createjs.Tween.get(this).to({rotation:rotationChange}, duration, createjs.Ease.linear).to({rotation:0}, duration, createjs.Ease.sineOut);

			movementTween = createjs.Tween.get(this).to({x:this.newPlayerX, y:this.newPlayerY}, duration, createjs.Ease.cublicIn).call(function(){
				this.currentPlayerX = this.newPlayerX;
				this.currentPlayerY = this.newPlayerY;
				grouperImg.gotoAndPlay("_rest");
				refThis.onStopped();
			});
			movementTween.addEventListener('change', function(){
				refThis.onMove();
			});		

		}

		// functions that are meant to be over ridden
		this.onStopped = function(){
			//logger("onStopped");
		}

		this.onIdleMessage = function(){
			//logger("onIdleMessage");
		}

		this.onMove = function(){ 
			//logger("Override onMove function") 
		};

		return this;

	}).prototype = new createjs.Container();
	
	window.gamelib.Player = gamelib.Player;


	(gamelib.Predator = function(spriteSheet,spriteName,xPos,yPos,width,height){
		// common used predator display object - sprite sheet and name, positions and width/height
		// shark and heron

		this.initialize();

		var refThis = this;
		var imgWidth = width;
		var imgHeight = height;
		var img = null;
		var animTween = null;

		this.hitArea = null;
		
		this.enabled = false;
		
		if(xPos){
			this.currentX = xPos;
		}else{
			this.currentX = 0;
		}
		if(yPos){
			this.currentY = yPos;
		}else{
			this.currentY = 0;
		}
		this.x = this.currentX;
		this.y = this.currentY;

		this.setPosition = function(xPos, yPos){
			this.currentX = xPos;
			this.currentY = yPos;
			this.x = this.currentX;
			this.y = this.currentY;
		}

		var img = new createjs.Sprite(spriteSheet, spriteName);
		this.addChild(img);
		img.regX = imgWidth/2;
		img.regY = imgHeight/2;
		
		this.playAnim = function(startX, stopX, duration, loop, waitTime){
			// initial animation to move back and forth
			if(refThis.enabled !== true) return;

			animTween = createjs.Tween.get(this).to({x:startX}, duration, createjs.Ease.linear).wait(waitTime).call(function(){
				img.scaleX = -1;
			}).to({x:stopX}, duration, createjs.Ease.linear).call(function(){
				img.scaleX = 1;
			}).wait(waitTime).call(function(){
				refThis.dispatchEvent("ANIM_COMPLETE");
			});
			animTween.addEventListener('change', refThis.whilePlayingAnim);
			animTween.loop = loop;
		};

		// mean to be over ridden - while playing the predator
		this.whilePlayingAnim = function() {
			animTween.removeEventListener('change', refThis.whilePlayingAnim); 
		};

		this.stopAnim = function(){
			//handle stop animation
			if(animTween) animTween.pause();
			createjs.Tween.removeTweens(refThis);
			animTween = null;
		}

		this.addHitArea = function(hitAreaImg, xPos, yPos, alpha){
			// set hit area
			this.addChild(hitAreaImg);
			hitAreaImg.x = xPos;
			hitAreaImg.y = yPos;
			hitAreaImg.alpha = alpha;
			this.hitArea = hitAreaImg;
		}

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.Predator = gamelib.Predator;

	createjs.EventDispatcher.initialize(gamelib.Predator.prototype); 


	(gamelib.Food = function(id,spriteSheet,spriteName,xPos,yPos,width,height){
		// food display object - shrimp
		this.initialize();

		var refThis = this;
		var imgWidth = width;
		var imgHeight = height;
		var img = null;
		var animTween = null;

		this.id = id;
		this.score = 100;
		
		if(xPos){
			this.currentX = xPos;
		}else{
			this.currentX = 0;
		}
		if(yPos){
			this.currentY = yPos;
		}else{
			this.currentY = 0;
		}
		this.x = this.currentX;
		this.y = this.currentY;

		this.setPosition = function(xPos, yPos){
			this.currentX = xPos;
			this.currentY = yPos;
			this.x = this.currentX;
			this.y = this.currentY;
		}

		var img = new createjs.Sprite(spriteSheet, "_loop");
		this.addChild(img);
		this.sprite = img;

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.Food = gamelib.Food;


	(gamelib.SeaBackground = function(img, isFirstSegment, waterBtm1Pos, waterBtm2Pos, waterBtm3Pos){
		// display element for seabackground

		this.initialize();

		var bgImg_1 = new createjs.Bitmap(img["background_1"]);	
		var bgImg_2 = new createjs.Bitmap(img["background_2"]);

		this.addChild(bgImg_1);
		this.addChild(bgImg_2);

		this.showFirstSegment = function(value){
			bgImg_1.alpha = 0;
			bgImg_2.alpha = 0; 
			if(value === true){
				bgImg_1.alpha = 1; 
			}else{
				bgImg_2.alpha = 1;
			}
		}

		this.showFirstSegment(isFirstSegment);

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.SeaBackground = gamelib.SeaBackground;


	(gamelib.SeaBottom = function(img, waterBtmImageID, width, height, xPos, yPos){
		// Display element  - Seabottom

		this.initialize();

		var waterBottom1 = new createjs.Bitmap(img[waterBtmImageID]);
		waterBottom1.x = xPos; //0
		waterBottom1.y = stageHeight - height + yPos;
		this.addChild(waterBottom1);
		
		var waterBottom2 = new createjs.Bitmap(img[waterBtmImageID]);
		waterBottom2.x = xPos + width - 1; //0;
		waterBottom2.y = waterBottom1.y;
		this.addChild(waterBottom2);

		var waterBottom3 = new createjs.Bitmap(img[waterBtmImageID]);
		waterBottom3.x = xPos + waterBottom2.x + width - 1;
		waterBottom3.y = waterBottom1.y;
		this.addChild(waterBottom3);

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.SeaBottom = gamelib.SeaBottom;


	(gamelib.RockElement = function(img, xPos, yPos){
		// componsite display element for rock elements in the scene

		this.initialize();

		var rockAsset = new createjs.Bitmap(img["rock"]); 
		var rockAsset_2 = new createjs.Bitmap(img["rock2"]);
		rockAsset_2.x = 400;
		rockAsset_2.y = 25; 

		var grass = new createjs.Bitmap(img["grassTuff"]);
		grass.x = -60;
		grass.y = 0;

		var root1Asset = new createjs.Bitmap(img["root2"]);
		root1Asset.y = -10;
		root1Asset.x = 170;
		this.addChild(root1Asset);
		
		this.addChild(rockAsset);
		this.addChild(grass);

		this.addChild(rockAsset_2); 

		this.enableRoot1 = function(value){
			var alphaValue = 0;
			if(value === true){
				alphaValue = 1;
				rockAsset_2.alpha = 0;
			}else{
				rockAsset_2.alpha = 1;
			}
			root1Asset.alpha = alphaValue;
		}
		return this;

	}).prototype = new createjs.Container();

	window.gamelib.RockElement = gamelib.RockElement;


	(gamelib.BubblesArea = function(){
		// bubbles component display object
		this.initialize();

		var bubblesSpritesheet = new createjs.SpriteSheet(bubblesData);
		
		var bubbles_1 = new createjs.Sprite(bubblesSpritesheet, "_loop");
		var bubbles_2 = new createjs.Sprite(bubblesSpritesheet, "_loop");
		var bubbles_3 = new createjs.Sprite(bubblesSpritesheet, "_loop");
		var bubbles_4 = new createjs.Sprite(bubblesSpritesheet, "_loop");

		var bubbles_5 = new createjs.Sprite(bubblesSpritesheet, "_loop");
		var bubbles_6 = new createjs.Sprite(bubblesSpritesheet, "_loop");
		var bubbles_7 = new createjs.Sprite(bubblesSpritesheet, "_loop");

		this.addChild(bubbles_1);
		bubbles_1.x = 0;
		bubbles_2.y = 0;

		this.addChild(bubbles_2);
		bubbles_2.x = 25;
		bubbles_2.y = -50;
		bubbles_2.stop();
		
		this.addChild(bubbles_3);
		bubbles_3.x = 10;
		bubbles_3.y = -150;
		bubbles_3.stop();
		
		this.addChild(bubbles_4);
		bubbles_4.x = 35;
		bubbles_4.y = -175;
		bubbles_4.stop();

		this.addChild(bubbles_5);
		bubbles_5.x = -20;
		bubbles_5.y = 50;
		bubbles_5.stop();
		
		this.addChild(bubbles_6);
		bubbles_6.x = 0;
		bubbles_6.y = 100;
		bubbles_6.stop();

		this.addChild(bubbles_7);
		bubbles_7.x = 50;
		bubbles_7.y = 100;
		bubbles_7.stop();

		createjs.Tween.get(this).wait(6525).call(function(){
			bubbles_2.play();
		});

		createjs.Tween.get(this).wait(3057).call(function(){
			bubbles_3.play();
		});

		createjs.Tween.get(this).wait(1511).call(function(){
			bubbles_4.play();
		});

		createjs.Tween.get(this).wait(1293).call(function(){
			bubbles_5.play();
		});

		createjs.Tween.get(this).wait(617).call(function(){
			bubbles_6.play();
		});

		createjs.Tween.get(this).wait(52).call(function(){
			bubbles_7.play();
		});
		
		return this;

	}).prototype = new createjs.Container();

	window.gamelib.BubblesArea = gamelib.BubblesArea;



	(gamelib.GameWorld = function(stage, img){
		// game world object - the container for all elements in the game

		var refThis = this;

		var enabled = false;
		var background = new createjs.Container();
		var foreground = new createjs.Container();

		var heronSpritesheet = null;
		var prawnSpritesheet = null;
		var blueheron = null;
		var heronShadow = null;
		var camoImg = null;
		var nextcamoImg = null;
		var shark_1 = null;
		var shark_2 = null;
		var exitZone = null;

		var grouperSpritesheet = null;
		var player = null;

		var isSafe = false;

		var prawnItems = [];
		var isResultsEnabled = false;
		
		var prawnID = -1;
		var prawnFoundCount = 0;
		var currentPlayerX = 0;
		var currentPlayerY = 0;
		var currentRound = null;

		var blueHeronTween;
		var disableHeronCollisionDetection = false;
		var disableSharkCollisionDetection = false;
		var disableShark_2_CollisionDetection = false;

		var frequencyOfHeron = 6000;

		var bgSegment1 = null;
		var bgSegment2 = null;
		var waterBottom1 = null;
		var waterBottom2 = null;
		var waterBottom3 = null;

		var backgroundFlipped = false;
		var rootBranch_1 = null;
		var rootBranch_2 = null;
		var grassTuff_a = null;
		var grassTuff_b = null;
		var grassTuff2_a = null;
		var grassTuff2_b = null;
		var rock1a = null;
		var rock2a = null;
		var rock1b = null;
		var rock2b = null;
		var camoRockBack = null;
		var camoRockFront = null;
		var camoRockBack_next = null;
		var camoRockFront_next = null;
		var displayMiddleRoots = true;
		var underwater_splash = null;

		var nextcamoImg_front = null;
		var imgHitAreaHome = null;
		var imgHitAreaCamoRock = null;

		var hasSafeButEatMorePlayed = false;
		var hasSafeButEatMoreShortPlayed = false;
		var hasSafeButPlayed = false;

		var waitTimeEaten = 1500;
		var oneLeftAudioPlayed = false;
		var isTheLastShrimp = false;
		var bubblesArea = null;

		var bgFish = null;

		var lastRandomNumber = 0; // for heron random positioning
		var tweenIdle = {};
		var isIdleMessageFired = false; // boolean for firing idel message audio

		//audio
		var openGateAudio;
		var lastShrimpAudio;

		this.addChild(background); // add background

		this.setRound = function(gameRound, nextRound){
			// set game round

			currentRound = gameRound;

			resetAssets();

			disableHeronCollisionDetection = false;
			disableSharkCollisionDetection = false;
			disableShark_2_CollisionDetection = false;
			oneLeftAudioPlayed = false;
			isTheLastShrimp = false;

			var isSharkPresent = false;
			var areTwoSharksPresent = false;
			var isHeronPresent = false;
			var prawnPositions = getPrawnPositions(gameRound.prawnLevel);

			// set positions for shrimps
			for(var i = 0; i < prawnItems.length; i++){ 
				if(i < currentRound.numberOfShrimp){
					prawnItems[i].alpha = 1;
					prawnItems[i].x = prawnPositions[i][0];
					prawnItems[i].y = prawnPositions[i][1];
					prawnItems[i].sprite.play();	
				}else{
					prawnItems[i].alpha = 0;
					prawnItems[i].x = -1000;
				}
				
			}

			// display or hide heron
			if(currentRound.heronFreq){
				frequencyOfHeron = currentRound.heronFreq;
			
				if(currentRound.heronFreq <= 0){
					disableHeronCollisionDetection = true;
					underwater_splash.stop();
					underwater_splash.alpha = 0;
					isHeronPresent = false;
				}else{
					blueheron.alpha = 1;
					disableHeronCollisionDetection = false;
					underwater_splash.alpha = 0;
					isHeronPresent = true;
				}
			}else{
				disableHeronCollisionDetection = true;
				underwater_splash.stop();
				underwater_splash.alpha = 0;
				isHeronPresent = false;
			}

			// display sharks
			switch(currentRound.sharks){

				default:
				case 0:
				disableSharkCollisionDetection = true;
				disableShark_2_CollisionDetection = true;
				break;

				case 1:
				shark_1.alpha = 1;
				shark_2.alpha = 0;
				disableSharkCollisionDetection = false;
				disableShark_2_CollisionDetection = true;
				isSharkPresent = true;
				break;

				case 2:
				shark_1.alpha = 1;
				shark_2.alpha = 1;
				disableSharkCollisionDetection = false;
				disableShark_2_CollisionDetection = false;
				isSharkPresent = true;
				areTwoSharksPresent = true;
				break;
			}	

			// display camo element
			if(currentRound.doesCamouflageExist === true) {
				camoRockBack.alpha = 1;
				camoRockFront.alpha = 1;
				isCamoPresent = true;
			}else{
				camoRockBack.alpha = 0;
				camoRockFront.alpha = 0;
				isCamoPresent = false;
			}

			if(nextRound){
				if(nextRound.doesCamouflageExist === true) {
					camoRockBack_next.alpha = 1;
					camoRockFront_next.alpha = 1;
				}else{
					camoRockBack_next.alpha = 0;
					camoRockFront_next.alpha = 0;
				}
			}else{
				camoRockBack_next.alpha = 0;
				camoRockFront_next.alpha = 0;
			}

			if(currentRound.roundNumber == 5){
				rock1a.alpha = 0;
			}else{
				rock1a.alpha = 1;
			}

			//in between rounds/levels audio
			switch(currentRound.roundNumber){ // reset default asset state
				case 1:
					//createjs.Sound.play('safe_roots');
				break;

				case 2:
					//createjs.Sound.play('watchout_heron');
					gamelib.playAudio('watchout_heron');
				break;

				case 3:
					//createjs.Sound.play('watchout_heron');
				break;

				case 4:
					//createjs.Sound.play('watchout_heron');
				break;

				case 5:
					//createjs.Sound.play('watchout_shark');
					gamelib.playAudio('watchout_shark');
				break;

				case 6:
					//createjs.Sound.play('careful_predators');
					gamelib.playAudio('careful_predators');
				break;

				case 7:
					//createjs.Sound.play('heron_quicker');
					gamelib.playAudio('heron_quicker');
				break;

				case 8:
					//createjs.Sound.play('more_sharks');
					gamelib.playAudio('more_sharks');
				break;
			}
		}

		function getPrawnPositions(level){
			// helper for setting shrimp x/y positions

			var posArray = "";
			var randomNumber = Math.round(Math.random() * 2);
			
			switch(level){
				case "1":
				if(randomNumber == 0){
					posArray = prawnLevel_1A;
				}else{
					posArray = prawnLevel_1B;
				}
				break;

				case "2":
				if(randomNumber == 0){
					posArray = prawnLevel_2A;
				}else{
					posArray = prawnLevel_2B;
				}
				break;

				case "3":
				if(randomNumber == 0){
					posArray = prawnLevel_3A;
				}else{
					posArray = prawnLevel_3B;
				}
				break;
			}

			return posArray;
		}

		function getSharkSpeed(speed){
			// set shark speed
			var value  = 8000;
			if(speed == "slow"){
				value = 8000;
			}else if(speed == "quicker"){
				value = 4000;
			}

			return value;
		}
		 
		function resetAssets(){
			// reset elements
			shark_1.alpha = 0;
			shark_2.alpha = 0;
			blueheron.alpha = 0;
			bubblesArea.alpha = 0;
		}

		this.setup = function(){
			// setup display elements

			// hook up mouse events for moving player/fish
			this.addEventListener('mousedown', onMouseClick);
			//this.addEventListener('pressmove', onMouseClick);
			this.addEventListener('click', onMouseClick);

			bgSegment1 = new gamelib.SeaBackground(img, true, [0, stageHeight - 235], [0, stageHeight - 246], [0, stageHeight - 200]);
			background.addChild(bgSegment1);

			bgSegment2 = new gamelib.SeaBackground(img, false, [216, stageHeight - 235], [612, stageHeight - 246], [216, stageHeight - 200]);
			bgSegment2.x = 987;
			bgSegment2.y = 0;
			background.addChild(bgSegment2);

			bgFish = new createjs.Bitmap(img["bgFish"]); 
			background.addChild(bgFish);
			bgFish.x = stageWidth;
			bgFish.y = 50;

			waterBottom1 = new gamelib.SeaBottom(img, "waterBottom1", 1217, 235, 0, -35);
			waterBottom2 = new gamelib.SeaBottom(img, "waterBottom2", 1601, 246, 0, 0);
			waterBottom3 = new gamelib.SeaBottom(img, "waterBottom3", 1237, 241, 0, 46);
			
			background.addChild(waterBottom1);
			background.addChild(waterBottom2);
			background.addChild(waterBottom3);

			camoRockBack = new createjs.Bitmap(img["camoRock_back"]); 
			background.addChild(camoRockBack);
			camoRockFront = new createjs.Bitmap(img["camoRock_front"]);
			foreground.addChild(camoRockFront);
			camoRockBack.x = camoRockFront.x = 300;
			camoRockBack.y = camoRockFront.y = 310;
			camoRockBack.alpha = camoRockFront.alpha = 0;

			camoRockBack_next = new createjs.Bitmap(img["camoRock_back"]); 
			background.addChild(camoRockBack_next);
			camoRockFront_next = new createjs.Bitmap(img["camoRock_front"]);
			foreground.addChild(camoRockFront_next);
			camoRockBack_next.x = camoRockFront_next.x = 300 + 988;
			camoRockBack_next.y = camoRockFront_next.y = 310;
			camoRockBack_next.alpha = camoRockFront_next.alpha = 0;

			imgHitAreaCamoRock = new createjs.Bitmap(img.hitboxArea);
			foreground.addChild(imgHitAreaCamoRock);
			imgHitAreaCamoRock.scaleX = 1.3;
			imgHitAreaCamoRock.scaleY = 2.5;
			imgHitAreaCamoRock.x = camoRockFront.x + 60;
			imgHitAreaCamoRock.y = camoRockFront.y + 80;
			imgHitAreaCamoRock.alpha = 0.009;

			
			heronSpritesheet = new createjs.SpriteSheet(heronSpritesheetData);
			grouperSpritesheet = new createjs.SpriteSheet(grouperBabyData);
			spritesheetShark = new createjs.SpriteSheet(sharkData);

			player = new gamelib.Player(grouperSpritesheet, -100, 300)
			this.addChild(player);

			grassTuff_a = new createjs.Bitmap(img["grassTuff"]); 
			background.addChild(grassTuff_a);
			grassTuff_a.x = 600;
			grassTuff_a.y = 340;

			grassTuff_b = new createjs.Bitmap(img["grassTuff"]); 
			background.addChild(grassTuff_b);
			grassTuff_b.x = 600 + 988;
			grassTuff_b.y = 340;
			grassTuff_b.alpha = 0;


			grassTuff2_a = new createjs.Bitmap(img["grassTuff2"]); 
			background.addChild(grassTuff2_a);
			grassTuff2_a.x = 110;
			grassTuff2_a.y = 354;
			grassTuff2_a.alpha = 0;

			grassTuff2_b = new createjs.Bitmap(img["grassTuff2"]); 
			background.addChild(grassTuff2_b);
			grassTuff2_b.x = 110 + 988;
			grassTuff2_b.y = 354;
			grassTuff2_b.alpha = 1;

			stick1_a = new createjs.Bitmap(img["root1"]); 
			background.addChild(stick1_a);
			stick1_a.x = 550;
			stick1_a.y = 450;
			// stick1_a.x = 150;
			// stick1_a.y = 450;
			stick1_a.alpha = 1;

			stick1_b = new createjs.Bitmap(img["root1"]); 
			background.addChild(stick1_b);
			stick1_b.x = 550 + 988;
			stick1_b.y = 450;
			// stick1_a.x = 150;
			// stick1_a.y = 450;
			stick1_b.alpha = 0;


			rock1a = new gamelib.RockElement(img, 300, 460);
			rock1a.enableRoot1(false);
			//rock1a.enableRoot2(false);
			background.addChild(rock1a);
			rock1a.x = 250;
			rock1a.y = 300;

			rock1b = new gamelib.RockElement(img, 300, 460);
			rock1b.enableRoot1(true);
			//rock1b.enableRoot2(true);
			background.addChild(rock1b);
			rock1b.x = 250 + 988;
			rock1b.y = 300;
			rock1b.y = rock1b.y + 40;
		
			camoImg = new createjs.Bitmap(img["mangrove_back"]);
			camoImg.x = -200;
			camoImg.y = -35;
			background.addChild(camoImg);
			camoImg.alpha = 1;
			var camoImg_front = new createjs.Bitmap(img["mangrove_front"]);
			camoImg_front.x = camoImg.x;
			camoImg_front.y = camoImg.y;
			foreground.addChild(camoImg_front);


			nextcamoImg = new createjs.Bitmap(img["mangrove_back"]);
			nextcamoImg.x = 988 - 200;
			nextcamoImg.y = -35;
			background.addChild(nextcamoImg);
			nextcamoImg.alpha = 1;
			nextcamoImg_front = new createjs.Bitmap(img["mangrove_front"]);
			nextcamoImg_front.x = nextcamoImg.x;
			nextcamoImg_front.y = nextcamoImg.y;
			foreground.addChild(nextcamoImg_front);

			imgHitAreaHome = new createjs.Bitmap(img.homeExitArea);
			foreground.addChild(imgHitAreaHome);
			//imgHitAreaHome.scaleX = 2;
			//imgHitAreaHome.scaleY = 10;
			imgHitAreaHome.x = nextcamoImg_front.x + 85;
			imgHitAreaHome.y = -50;
			imgHitAreaHome.alpha =  0.01;

			var thirdCamoImg = new createjs.Bitmap(img["mangrove_back"]);
			thirdCamoImg.x = (988 * 2) - 200;
			thirdCamoImg.y = -35;
			background.addChild(thirdCamoImg);
			thirdCamoImg.alpha = 1;
			var thirdCamoImg_front = new createjs.Bitmap(img["mangrove_front"]);
			thirdCamoImg_front.x = thirdCamoImg.x;
			thirdCamoImg_front.y = thirdCamoImg.y;
			foreground.addChild(thirdCamoImg_front);


			shark_1 = new gamelib.Predator(spritesheetShark, "_loop", 0, 0, stageWidth - 905, 100, 1);
			var imgHitAreaShark_1 = new createjs.Bitmap(img.hitboxArea);
			shark_1.addHitArea(imgHitAreaShark_1, -60, 0, 0.009); 

			shark_2 = new gamelib.Predator(spritesheetShark, "_loop", 0, 0, stageWidth - 905, 100, 1);
			var imgHitAreaShark_2 = new createjs.Bitmap(img.hitboxArea);
			shark_2.addHitArea(imgHitAreaShark_2, -60, 0, 0.009);
			
			//actors.push(shark);
			shark_1.setPosition(stageWidth - 100,400);
			shark_1.whilePlayingAnim = onCollisionShark;
			shark_1.alpha = 0;

			shark_2.setPosition(stageWidth - 100,150);
			shark_2.whilePlayingAnim = onCollisionShark_2;
			shark_2.alpha = 0;
			
			prawnSpritesheet = new createjs.SpriteSheet(prawnData);

			// set initial shrimp
			prawnItems = 
			[new gamelib.Food("0",prawnSpritesheet,"prawn",639,147,43,14),
			new gamelib.Food("1",prawnSpritesheet,"prawn",697,461,43,14),
			new gamelib.Food("2",prawnSpritesheet,"prawn",240,456,43,14),
			new gamelib.Food("4",prawnSpritesheet,"prawn",514,436,43,14),
			new gamelib.Food("5",prawnSpritesheet,"prawn",349,431,43,14),
			new gamelib.Food("6",prawnSpritesheet,"prawn",474,56,43,14),
			new gamelib.Food("7",prawnSpritesheet,"prawn",240,378,43,14),
			new gamelib.Food("8",prawnSpritesheet,"prawn",134,304,43,14),
			new gamelib.Food("9",prawnSpritesheet,"prawn",811,283,43,14)];

			for(var i = 0; i < prawnItems.length; i++){
				this.addChild(prawnItems[i]);
				prawnItems[i].sprite.stop();
				prawnItems[i].alpha = 0;
			}

			blueheron = new gamelib.Predator(heronSpritesheet, "blue_heron_on_water", 600, -200, 185, 103);
			this.addChild(blueheron);

			var imgHitAreaHeron = new createjs.Bitmap(img.hitboxArea);
			blueheron.addHitArea(imgHitAreaHeron, -10, -55, 0.009); 

			blueheron.setPosition(600,-200);
			//blueheron.removeEventListener("ANIM_COMPLETE", onBlueHeronAnimComplete);
			//blueheron.removeAllEventListeners("ANIM_COMPLETE");
			blueheron.addEventListener("ANIM_COMPLETE", onBlueHeronAnimComplete);
			blueheron.alpha = 0;

			underwater_splash = new createjs.Sprite(heronSpritesheet, "underwater_splash");
			foreground.addChild(underwater_splash);
			underwater_splash.stop();
			underwater_splash.alpha = 0;

			heronShadow = new createjs.Bitmap(img["heron_shadow"]);
			foreground.addChild(heronShadow);
			heronShadow.alpha = 0;

			bubblesArea = new gamelib.BubblesArea();
			foreground.addChild(bubblesArea);
			bubblesArea.x = stageWidth - 110;
			bubblesArea.y = stageHeight - 400;
			bubblesArea.alpha = 0;
			
			exitZone = createCircle(50, 0, 0, createjs.Graphics.getRGB(0,0,0,.5));
			this.addChild(exitZone);
			exitZone.x = 960;
			exitZone.y = 300;
			exitZone.alpha = 0;

			nextcamoImg_front.alpha = 1;

			this.addChild(foreground);

			this.addChild(shark_1);
			this.addChild(shark_2);

		}

		this.changeBackground = function(){
			// set change in background element post transition

			if(!backgroundFlipped){
				bgSegment1.showFirstSegment(false);
				bgSegment2.showFirstSegment(true);
				backgroundFlipped = true;
				grassTuff_a.alpha = 0;
				grassTuff_b.alpha = 1;
				rock1a.enableRoot1(true);
				//rock1a.enableRoot2(true);
				rock1a.y = rock1a.y + 40;
				rock1b.y = rock1b.y - 40;
				rock1b.enableRoot1(false);
				//rock1b.enableRoot2(false);
				stick1_a.alpha = 0;
				stick1_b.alpha = 1;
				grassTuff2_a.alpha = 1;
				grassTuff2_b.alpha = 0;

			}else{
				grassTuff_a.alpha = 1;
				grassTuff_b.alpha = 0;
				bgSegment1.showFirstSegment(true);
				bgSegment2.showFirstSegment(false);
				backgroundFlipped = false;
				rock1a.enableRoot1(false);
				//rock1a.enableRoot2(false);
				rock1a.y = rock1a.y - 40;
				rock1b.y = rock1b.y + 40;
				rock1b.enableRoot1(true);
				//rock1b.enableRoot2(true);
				stick1_a.alpha = 1;
				stick1_b.alpha = 0;
				grassTuff2_a.alpha = 0;
				grassTuff2_b.alpha = 1;
			}
			waterBottom1.x = waterBottom2.x = waterBottom3.x = waterBottom3.x - 988;

			if(waterBottom1.x <= -2964){ // reset bottom assets
				waterBottom1.x = waterBottom2.x = waterBottom3.x = 0;
			}

			if(currentRound.roundNumber == 3){ // condition for next level 4
				rock1b.alpha = 0;
			}else{
				rock1b.alpha = 1;
			}
			 
		}

		function onBlueHeronAnimComplete(){
			// handle heron animation complete
			if(disableHeronCollisionDetection) return;
			
			var randomNumber = Math.round(Math.random() * 2);
			var heronXPos = 650; // default
			var heronShadowXPos = 580; // default

			if(lastRandomNumber == randomNumber){
				switch(randomNumber){
					case 0:
					randomNumber = 1;
					break;

					case 1:
					randomNumber = 0;
					break;

					default:
					randomNumber = 1;
					break;
				}
			}

			if(randomNumber == 0){
				blueheron.x = heronXPos = 650;
				heronShadow.x = heronShadowXPos = 580;
			}else if(randomNumber == 1){
				blueheron.x = heronXPos = 450;
				heronShadow.x = heronShadowXPos = 380;
			}else{
				blueheron.x = heronXPos = 200;
				heronShadow.x = heronShadowXPos = 130;
			}

			lastRandomNumber = randomNumber;

			var randDirection = Math.round(Math.random() * 1);
			if(debug === true) logger("randDirection " + randDirection);

			blueheron.scaleX = 1;

			if(randDirection == 1){
				createjs.Tween.get(heronShadow).to({alpha: 1}, 500, createjs.Ease.linear);
				splash();
				blueHeronTween = createjs.Tween.get(blueheron).wait(800).call(function(){
					blueheron.getChildAt(0).gotoAndStop("blue_heron_diving");
					blueheron.scaleY = -1;
					blueheron.rotation = 0;
					//logger("blueheron.x " + blueheron.x);
				})
				.to({y:275, x:heronXPos}, 500, createjs.Ease.linear)
				.call(function(){
					blueheron.scaleY = 1;
					blueheron.getChildAt(0).gotoAndPlay("heron_flaps");
					blueheron.rotation = 55;
					createjs.Tween.get(heronShadow).to({x:heronShadowXPos-140}, 500, createjs.Ease.linear);
					createjs.Tween.get(heronShadow).to({alpha: 0}, 1000, createjs.Ease.linear);
				})
				.to({y:-200, x:heronXPos-100}, 2000, createjs.Ease.linear).call(function(){
					frequencyOfHeron = currentRound.heronFreq;
					blueheron.playAnim(500,600,frequencyOfHeron,false,0);
				});
				blueHeronTween.addEventListener("change", onCollisionHeron);
				// blueHeronTween.addEventListener("change", function(){
				// 	onCollisionHeron();
				// });
			}else if(randDirection == 0){
				createjs.Tween.get(heronShadow).to({alpha: 1}, 500, createjs.Ease.linear);
				splash();
				blueHeronTween = createjs.Tween.get(blueheron).wait(800).call(function(){
					blueheron.getChildAt(0).gotoAndStop("blue_heron_diving");
					blueheron.scaleY = -1;
					blueheron.rotation = 0;
					//logger("blueheron.x " + blueheron.x);
				})
				.to({y:275, x:heronXPos}, 500, createjs.Ease.linear)
				.call(function(){
					blueheron.scaleY = 1;
					blueheron.scaleX = -1;
					blueheron.getChildAt(0).gotoAndPlay("heron_flaps");
					blueheron.rotation = -40;
					createjs.Tween.get(heronShadow).to({x:heronShadowXPos+140}, 1000, createjs.Ease.linear);
					createjs.Tween.get(heronShadow).to({alpha: 0}, 1800, createjs.Ease.linear);
				})
				.to({y:-200, x:heronXPos+200}, 2000, createjs.Ease.linear).call(function(){
					frequencyOfHeron = currentRound.heronFreq;
					blueheron.playAnim(500,600,frequencyOfHeron,false,0);
				});
				blueHeronTween.addEventListener("change", onCollisionHeron);
				// blueHeronTween.addEventListener("change", function(){
				// 	onCollisionHeron();
				// });
			}
			
		}

		function splash(){
			// splash action
			underwater_splash.alpha = 1;
			underwater_splash.x = blueheron.x - 20;
			underwater_splash.y = 0;
			underwater_splash.addEventListener("animationend", function(){
				underwater_splash.stop();
				underwater_splash.alpha = 0;
				underwater_splash.removeAllEventListeners();
			});
			underwater_splash.gotoAndPlay("underwater_splash");
			createjs.Sound.play('heronsplash');
		}

		this.start = function(){
			// start game world

			isResultsEnabled = false;
			isEnabled(true);
			player.setPosition(160, 300);
			//player.move(160, 300);
			player.alpha = 1;
			player.onStopped = handlePlayStopped; 
			player.onIdleMessage = handleIdleMessage;

			frequencyOfHeron = currentRound.heronFreq;
			if(!frequencyOfHeron) {
				//logger("frequencyOfHeron null");
				frequencyOfHeron = 4000;
			}

			var sharkSpeedValue = getSharkSpeed(currentRound.sharkSpeed);

			blueheron.playAnim(500,600,frequencyOfHeron,false,0);
			shark_1.playAnim(-200,stageWidth + 400,sharkSpeedValue,true,0);
			shark_2.playAnim(-400,stageWidth + 400,sharkSpeedValue,true,1000);
			//createjs.Tween.get(player).to({x:100}, 500, createjs.Ease.linear);

			for(var i = 0; i < prawnItems.length; i++){
				prawnItems[i].sprite.play();
			}

			hasSafeButEatMorePlayed = false;
			hasSafeButEatMoreShortPlayed = false;
			hasSafeButPlayed = false;

			createjs.Tween.get(bgFish, {loop:true}).to({scaleY:.8}, 2000, createjs.Ease.linear).to({scaleY:1}, 2000, createjs.Ease.linear);

			createjs.Tween.get(bgFish, {loop:true}).to({x:-379}, 8000, createjs.Ease.quadIn).call(function(){
				bgFish.scaleX = -1;
			}).to({x:stageWidth + 379}, 8000, createjs.Ease.quadIn).call(function(){
				bgFish.scaleX = 1;
			});

			isPlayingAudio = false; 

			createjs.Tween.get(tweenIdle, {loop:true}).wait(8000).call(player.onIdleMessage);
		}

		function handlePlayStopped(){
			// handle play stopped
			if(debug === true) logger(" handlePlayStopped()");
			isIdleMessageFired = false;
			createjs.Tween.removeTweens(tweenIdle);
			createjs.Tween.get(tweenIdle, {loop:true}).wait(8000).call(player.onIdleMessage);			
		}

		function handleIdleMessage(){
			// handle idle messages

			if(debug === true) logger("handleIdleMessage " + isIdleMessageFired);
			if(isResultsEnabled === true || enabled == false) return;

			if(isIdleMessageFired === false){
				//isIdleMessageFired = true;
				
				var intersectionCamo_1 = ndgmr.checkPixelCollision(player.getChildAt(0), camoImg,0,true);
				var intersectionCamo_2 = ndgmr.checkPixelCollision(player.getChildAt(0), nextcamoImg,0,true);
				var intersectionCamoRock = ndgmr.checkPixelCollision(player.getChildAt(0), imgHitAreaCamoRock,0,true);
			

				if( intersectionCamo_1 || intersectionCamo_2 || (intersectionCamoRock && camoRockBack.alpha == 1) ){
					gamelib.playAudio('Safe_but');
					//createjs.Sound.play('Safe_but');
				}else{
					if(isMobileDevice){
						gamelib.playAudio('tap_toswim');
					}else{
						gamelib.playAudio('click_toswim');
					}
				}

			}
			
		}

		this.restart = function(){
			// handle restart of game

			isResultsEnabled = false;

			isEnabled(true);
			player.setPosition(160, 300);
			player.alpha = 1;
			player.scaleX = -1;
			player.onStopped = handlePlayStopped; 

			exitZone.alpha = 0;
			nextcamoImg_front.alpha = 1;
			prawnID = -1;

			blueheron.setPosition(600,-200);
			frequencyOfHeron = currentRound.heronFreq;
			if(debug === true) logger("frequencyOfHeron " + frequencyOfHeron);
			blueheron.scaleY = 1;
			blueheron.playAnim(500,600,frequencyOfHeron,false,0);// need to restart animation
			blueheron.scaleY = 1;
			heronShadow.alpha = 0;

			var sharkSpeedValue = getSharkSpeed(currentRound.sharkSpeed);

			shark_1.setPosition(stageWidth - 100,400);
			shark_1.playAnim(-200,stageWidth + 400,sharkSpeedValue,true,0);
			shark_1.whilePlayingAnim = onCollisionShark;
			shark_1.getChildAt(0).scaleX = 1;

			shark_2.setPosition(stageWidth - 100,150);
			shark_2.playAnim(-400,stageWidth + 400,sharkSpeedValue,true,1000);
			shark_2.whilePlayingAnim = onCollisionShark_2;
			shark_2.getChildAt(0).scaleX = 1;

			hasSafeButEatMorePlayed = false;
			hasSafeButEatMoreShortPlayed = false;
			hasSafeButPlayed = false;

			isPlayingAudio = false;

			createjs.Tween.removeTweens(tweenIdle);
			createjs.Tween.get(tweenIdle, {loop:true}).wait(8000).call(player.onIdleMessage);
			isIdleMessageFired = false;
		}

		this.stopWorld = function(){
			// stop game world

			isEnabled(false);

			prawnFoundCount = 0;
			
			blueheron.stopAnim();
			blueheron.alpha = 0;
			heronShadow.alpha = 0;
			
			shark_1.stopAnim();
			shark_1.alpha = 0;
			shark_2.stopAnim();
			shark_2.alpha = 0;

			for(var i = 0; i < prawnItems.length; i++){
				prawnItems[i].sprite.stop();
			}
		}

		function onMouseClick(event){
			// handle mouse click
			if(enabled !== true) return;

			var newPlayerX = 0;
			var newPlayerY = 0;

			newPlayerX = event.stageX;
			newPlayerY = Math.clamp(event.stageY, 45, stageHeight);
			
			player.move(newPlayerX, newPlayerY);

			isIdleMessageFired = true;

			player.onMove = function(){
				onCollisionShrimp();
				if(camoImg) onCollisionCamo();
				if(nextcamoImg) onCollisionCamo();
			};

		}

		function isEnabled(value){
			// enable/disable game

			enabled = value;
			if(player) player.enabled = enabled;
			if(blueheron) blueheron.enabled = enabled;
			if(shark_1) shark_1.enabled = enabled;
			if(shark_2) shark_2.enabled = enabled;
		}

		this.onTick = function(){
			// handle game tick
			if(enabled === false) return;
			
			if(debug === false) logger("GameWorld OnTick ");

			if(currentRound) onExitCollision();
		}

		function onCollisionShrimp(){
			// handle Shrimp hit collision

			var currentPrawn;
			var intersectionPrawn;
			
			for(var i = 0; i < prawnItems.length; i++){
				currentPrawn = prawnItems[i];
				intersectionPrawn = ndgmr.checkRectCollision(player, currentPrawn);
				if(prawnID != currentPrawn.id){
					if(intersectionPrawn){
						prawnID = currentPrawn.id;
						prawnFoundCount++;
						currentPrawn.x = -1000;
						
						//if(prawnFoundCount < currentRound.numberOfShrimp - 1){
							//if(isPlayingAudio == false) 
							createjs.Sound.play('shrimpeaten');
						//}
						
						refThis.dispatchEvent(gamelib.viewState.EVENT_FOOD_FOUND);
					}
				}
			}

			if( (currentRound.numberOfShrimp - prawnFoundCount == 1) && oneLeftAudioPlayed === false){
				oneLeftAudioPlayed = true;
				gamelib.playAudio('oneleft');	
			}
		
		}

		function onExitCollision(){
			// handle exit area hit collision

			if(prawnFoundCount >= currentRound.numberOfShrimp){
				
				if(isTheLastShrimp == false){
					isTheLastShrimp = true;
					createjs.Tween.get(nextcamoImg_front).to({alpha:.5},1000,createjs.Ease.backOut);
					bubblesArea.alpha = 1;

					if(isPlayingAudio == false){
						
						player.onStopped = function(){};
						isIdleMessageFired = true;

						lastShrimpAudio = createjs.Sound.play('last_shrimp');
						lastShrimpAudio.addEventListener("complete", handleLastShrimpAudio);
					}
					
				}
				var intersectionExit = ndgmr.checkPixelCollision(player.getChildAt(0),imgHitAreaHome,0,true);
				if(intersectionExit && isResultsEnabled === false){
					createjs.Tween.get(this).wait(650).call(handleExitSuccess);
					isResultsEnabled = true;
					hasSafeButEatMoreShortPlayed = true;
					hasSafeButEatMorePlayed = true;
				}
			}else{
				createjs.Tween.get(this).wait(2000).call(checkShrimpLeft);
			}
			
		}

		function handleLastShrimpAudio(){
			// handle audio for last shrimp
			lastShrimpAudio.removeEventListener("complete", handleLastShrimpAudio);
			openGateAudio = createjs.Sound.play('opengate2');
			openGateAudio.addEventListener("complete", handleOpenGate);
		}

		function handleOpenGate(){
			// handle open gate audio - exit area
			openGateAudio.removeEventListener("complete", handleOpenGate);
			createjs.Sound.play('waterbubbles');
		}

		function handleExitSuccess(){
			// handle exit success
			refThis.stopWorld();
			refThis.dispatchEvent(gamelib.viewState.EVENT_SUCCESS_FIRED);
		}

		function checkShrimpLeft(){
			// check for shrimp collision

			var intersectionCamo_1 = ndgmr.checkPixelCollision(player.getChildAt(0), camoImg);
			if(intersectionCamo_1){
				if(prawnFoundCount < currentRound.numberOfShrimp && hasSafeButEatMoreShortPlayed === false){
					if(debug === true) logger("checkShrimpLeft intersectionCamo_1 " + intersectionCamo_1);
					hasSafeButEatMoreShortPlayed = true;
					//createjs.Sound.play('safe_but_eat_more');
					gamelib.playAudio('safe_but_eat_more');
				}
			}

			var intersectionCamo_2 = ndgmr.checkPixelCollision(player.getChildAt(0), nextcamoImg);
			if(intersectionCamo_2){
				if(prawnFoundCount < currentRound.numberOfShrimp && hasSafeButEatMorePlayed === false){
					if(debug === true) logger("checkShrimpLeft intersectionCamo_2 " + intersectionCamo_2);
					hasSafeButEatMorePlayed = true;
					//createjs.Sound.play('safe_but_eat_more');
					//isPlayingAudio = false;
					gamelib.playAudio('safe_but_eat_more');
				}
			}
		}

		function onCollisionCamo(){
			// handle camo hit collision

			var intersectionCamo_1 = ndgmr.checkRectCollision(player, camoImg);
			var intersectionCamo_2 = ndgmr.checkRectCollision(player, nextcamoImg);
			var intersectionCamoRock = ndgmr.checkRectCollision(player, imgHitAreaCamoRock);
			if(intersectionCamo_1 || intersectionCamo_2 || intersectionCamoRock){
				isSafe = true;
			}else{
				isSafe = false;
			}

			if(intersectionCamoRock && camoRockBack.alpha == 1 && hasSafeButPlayed === false){
				if(oneLeftAudioPlayed === true) return;
				hasSafeButPlayed = true;
				gamelib.playAudio('Safe_but');
			}
		}

		function onCollisionShark(){
			// handle Shark hit collision
			if(disableSharkCollisionDetection || isResultsEnabled === true) return;
			
			//var intersectionShark = ndgmr.checkRectCollision(player.getChildAt(0), shark_1.getChildAt(0));
			var intersectionShark = ndgmr.checkPixelCollision(player.getChildAt(0),shark_1.hitArea,0,true);
			if(intersectionShark && enabled === true && isSafe === false){
				if(debug === true) logger("Shark captured Grouper fish - intersectionShark " + intersectionShark.x + " " + intersectionShark.y);
				
				hasSafeButEatMoreShortPlayed = true;
				hasSafeButEatMorePlayed = true;
				isResultsEnabled = true;
				shark_1.getChildAt(0).gotoAndPlay("_attack");
				shark_1.getChildAt(0).addEventListener("animationend", handleSharkAttackEnd);
				player.enabled = false;
				player.alpha = 0;
				disableSharkCollisionDetection = true;
				createjs.Sound.play('sharkchomp');
			}
		}

		function handleSharkAttackEnd(){
			// handle end of shark attack
			shark_1.getChildAt(0).gotoAndPlay("_loop");
			shark_1.getChildAt(0).removeAllEventListeners();
			createjs.Tween.get(this).wait(waitTimeEaten).call(handleSharkFail);
		}

		function onCollisionShark_2(){
			// handle Shark hit collision
			if(disableShark_2_CollisionDetection || isResultsEnabled === true) return;

			//var intersectionShark = ndgmr.checkRectCollision(player.getChildAt(0), shark_1.getChildAt(0));
			var intersectionShark = ndgmr.checkPixelCollision(player.getChildAt(0),shark_2.hitArea,0,true);
			if(intersectionShark && enabled === true && isSafe === false){
				if(debug === true) logger("Shark captured Grouper fish - intersectionShark " + intersectionShark.x + " " + intersectionShark.y);
				
				hasSafeButEatMoreShortPlayed = true;
				hasSafeButEatMorePlayed = true;
				isResultsEnabled = true;
				shark_2.getChildAt(0).gotoAndPlay("_attack");
				shark_2.getChildAt(0).addEventListener("animationend", handleShark_2_AttackEnd);
				player.enabled = false;
				player.alpha = 0;
				disableShark_2_CollisionDetection = true;
				createjs.Sound.play('sharkchomp');
			}
		}

		function handleShark_2_AttackEnd(){
			// handle end of shark attack
			shark_2.getChildAt(0).gotoAndPlay("_loop");
			shark_2.getChildAt(0).removeAllEventListeners();
			createjs.Tween.get(this).wait(waitTimeEaten).call(handleSharkFail);
		}

		function handleSharkFail(){
			// handle shark attack / player fail
			refThis.dispatchEvent(gamelib.viewState.EVENT_FAIL_SHARK);
		}

		function onCollisionHeron(){
			// handle heron hit collision
			if(disableHeronCollisionDetection || isResultsEnabled === true) return;

			var intersectionHeron = ndgmr.checkRectCollision(player,blueheron.hitArea);
				
			if(intersectionHeron && enabled === true && disableHeronCollisionDetection === false){
				if(debug === true) logger("Blue Heron captured Player/Grouper Fish");
				player.setPosition(-100, 300);
				player.alpha = 0;
				disableHeronCollisionDetection = true;
				disableSharkCollisionDetection = true;
				disableShark_2_CollisionDetection = true;
				hasSafeButEatMoreShortPlayed = true;
				hasSafeButEatMorePlayed = true;
				isResultsEnabled = true;
				createjs.Tween.get(this).wait(waitTimeEaten).call(handleHeronFail);

				blueHeronTween.removeAllEventListeners("change");
			}

			
		}

		function handleHeronFail(){
			// handle heron attack / player fail
			refThis.dispatchEvent(gamelib.viewState.EVENT_FAIL_HERON);
			refThis.stopWorld();
		}

		return this;

	}).prototype = new createjs.Container();

	window.gamelib.GameWorld = gamelib.GameWorld;

	createjs.EventDispatcher.initialize(gamelib.GameWorld.prototype); 


}(window));


gamelib.GameData = function (){
	// game VO - contain current points and round/level
	this.points = 0;
	this.currentRound = null;
	this.nextRound = null;
	this.level = 0;
}

gamelib.GameRound = function (roundNumber, numberOfShrimp, heronFreq, sharks, sharkSpeed, doesCamouflageExist, prawnLevel){
	// game round object
	this.roundNumber = roundNumber; //  number of round
	this.numberOfShrimp = numberOfShrimp; // number of shrimp
	this.heronFreq = heronFreq; // Heron Frequency - if zero, no herons
	this.sharks = sharks; // Number of sharks
	if(this.sharkSpeed){
		this.sharkSpeed = sharkSpeed; // "slow", "quick"
	}else{
		this.sharkSpeed = "slow"; // "slow", "quick"
	}
	if(doesCamouflageExist) {
		this.doesCamouflageExist = doesCamouflageExist; // flag for camo
	}else{
		this.doesCamouflageExist = false; // flag for camo
	}
	this.score = 100; // total score for complete round / if eaten this score decreases by 50
	this.shrimpEatenNumber = 0;// so far
	this.isSuccessful = false;
	this.prawnLevel = prawnLevel;
}

gamelib.GameRound.prototype.setScore = function(value){
	this.score = this.score + value;
	if(debug === true) logger("score: " + this.score );
}

// utility Math clamp function
Math.clamp = function(number, min, max) {
  return Math.max(min, Math.min(number, max));
}

// audio manager
var isPlayingAudio = false;

gamelib.playAudio = function(audioID){
	if(debug === true) logger("playAudio " + isPlayingAudio);
	
	if(isPlayingAudio === false){
		var audio = createjs.Sound.play(audioID);
		isPlayingAudio = true;
		audio.addEventListener('complete', function(){
			isPlayingAudio = false;
		})
	}
	
}

gamelib.stopAudio = function(){
	createjs.Sound.stop();
}

