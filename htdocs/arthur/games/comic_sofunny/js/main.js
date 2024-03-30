/*
	Arthur - Arthur Comics - So Funny
	main.js - core controller/mediator of story
*/

var canvas, stage, exportRoot, storySequence;
var stageWidth, stageHeight;
var originalWidth, originalHeight;
var debug = true;
var enableScaleDimensions = false;
var images;
var loader;
var manifest;

var loadingScreen, isLoading = false;

var sceneSequenceContainer, currentScene, hudContainer, sc01Discussion, sc02Discussion, sc03Discussion, sc04Discussion, sc05Discussion;
var sceneIndex = 0;

var sequence_1 = [];
var sequence_2 = [];
var sequence_3 = [];
var sequence_4_5_6 = [];
var sequence_7_8 = [];

var VIEWSTATE_SEQUENCE_1 = "viewstate_sequence_1";
var VIEWSTATE_SEQUENCE_2 = "viewstate_sequence_2";
var VIEWSTATE_SEQUENCE_3 = "viewstate_sequence_3";
var VIEWSTATE_SEQUENCE_4_5_6 = "viewstate_sequence_4";
var VIEWSTATE_SEQUENCE_7_8 = "viewstate_sequence_7";
var VIEWSTATE_END_QUESTIONS = "viewstate_end_questions";

var currentState =  VIEWSTATE_SEQUENCE_1; 
var lastState = "", lastSceneIndex = 0; 

var sequence = [];

var isEndOfGame = false;

var questionDisplay0a1, questionDisplay0a2, questionDisplay0a3;

var transitionDisplayReallyThinking, transitionDisplayHappensNext; 

var questionDisplay1a, questionDisplay1b, questionDisplay2a, questionDisplay2b, questionDisplay3a, questionDisplay3b;

var chooseEndingDisplay, arthurEndingSequence, busterEndingSequence, sueellenEndingSequence, endingSequence;

var currentLoadManifest;

var menuDisplay, ifMenuCalledLoading = false;

var titleImage;

var selectedCharacterEnd = "arthur";

var spaceAudioHasPlayed = false;

(function(window){

	function init() {
		// initialize and setup - soundmanager(lowLag), Canvas, EaselJs, dimensions(Resize), loadScreen and start loading first section
		soundManager.setup({ debugMode: false, url: 'js/sm2/swf/' });

		canvas = window.document.getElementById("canvas");
		images = images||{};

		stage = new createjs.Stage(canvas);
		stage.enableMouseOver();
		createjs.Touch.enable(stage);
		
		originalWidth = 960; //1920;
		originalHeight = 540; //1080;

		resize_canvas();

		loadingScreen = new displaylib.LoadingDisplay();
		loadingScreen.x = stageWidth - loadingScreen.width + 50;
		loadingScreen.y = stageHeight - loadingScreen.height - 50;

		createjs.Ticker.setFPS(29);
		createjs.Ticker.addListener(stage);

		titleScreen();

		window.onresize = resize_canvas;

		if(debug) {
			loader = new createjs.LoadQueue(false); //false when local - false
		}else{
			loader = new createjs.LoadQueue(); //false when local - false
		}

		loadAudio(); // settings.js - load all of the audio needed - Note: may need to split the load here as well
		//$("#lowLag").on("audioPlayComplete", function (e) { logger("PlayComplete"); }, false);

		spaceAudioHasPlayed = false;

		lowLag.audioPlayComplete = function(){
			if(debug) logger("audioPlayComplete fired");

			if(!spaceAudioHasPlayed){ // have to play blank audio - for mobile support - do not want to enable animation until after
				spaceAudioHasPlayed = true;
				return;
			}

			createjs.Tween.get(hudContainer.nextButton).to({scaleX:1.4,scaleY:1.4}, 200).call(function(){
				createjs.Tween.get(hudContainer.nextButton).to({scaleX:1,scaleY:1}, 200);
			}) 
		};

		getNextSectionLoaded(); // load default - ViewState - Sequence 1 (which loads initial images)


	}

	function titleScreen(){
		titleImage = new createjs.Bitmap("assets/images/misc/arthur_cover_landscape.png");
		stage.addChild( titleImage );
	}

	function getNextSectionLoaded(){
		// based on current View state - load particular manifest for images
		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				currentLoadManifest = "section1";
			break;

			case VIEWSTATE_SEQUENCE_2:
				currentLoadManifest = "section2";
			break;

			case VIEWSTATE_SEQUENCE_3:
				currentLoadManifest = "section3";
			break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				currentLoadManifest = "section4_5_6";	
			break;

			case VIEWSTATE_SEQUENCE_7_8:
				currentLoadManifest = "section_7_8";	
			break;

			case VIEWSTATE_END_QUESTIONS:
				currentLoadManifest = "chooseEndings";
			break;	
		}

		loadManifest();
	}

	function loadManifest(){
		loader.addEventListener("fileload", handleFileLoad);
		loader.addEventListener("complete", handleComplete);
		loader.loadManifest(setUpManifest(currentLoadManifest)); // settings.js - setUpManifest()

		loader.load();
		loadingScreen.progressText(0);
		isLoading = true;

		stage.addChild(loadingScreen);

		if(hudContainer){
			hudContainer.nextButton.alpha = 0;
			hudContainer.backButton.alpha = 0;
		}
		
	}


	function handleFileLoad(o) {
		//logger("percent " + loader.progress);
		loadingScreen.progressText(loader.progress);

		if(debug) logger("handleFileLoad " + o.item.id + " " + o.result);

		if (o.item.type == createjs.LoadQueue.IMAGE) { 
			//logger("image " + o.item.id);
			images[o.item.id] = o.result; 
		}
	}


	function handleComplete() {
		isLoading = false;
		if(ifMenuCalledLoading) {
			menuDisplay.continue_button.visible = true;
			ifMenuCalledLoading = false;
		}

		loader.removeEventListener("fileload", handleFileLoad);
		loader.removeEventListener("complete", handleComplete);

		//console.log("handleComplete");
		createjs.Tween.get({}).wait(250).call( function(){
			stage.removeChild(loadingScreen);
		} );

		// once images are loaded and added to images array - build out display and sequences

		switch(currentLoadManifest){
			case "section1": // initial load - complete
				// setup scene container  - the display of all scenes and interactive sections
				sceneSequenceContainer = new createjs.Container();
				stage.addChild(sceneSequenceContainer);
				
				// build discussion display objects
				buildDiscussionDisplays();

				// add end sequence container
				createEndSequenceContainer();

				//create choose ending display
				createChooseCharacterDisplay();

				// create the hud of the display - navigation buttons live here
				createHUD();

				// create menu display
				createMenuDisplay();
				
				// create add event handlers - mostly for hud
				addEventHandlers();

				// create display scene objects for sequences
				createSequences("section1");
			break;

			case "section2":
				// create display scene objects for sequences
				createSequences("section2");
			break;

			case "section3":
				createSequences("section3");
			break;

			case "section4_5_6":
				createSequences("section4_5_6");
			break;

			case "section_7_8":
				createSequences("section_7_8");
			break;

			case "chooseEndings":
				// build ending sequence
				if(!arthurEndingSequence) {
					var artEndSelectContent = new displaylib.CharacterActionsDisplay("Choose what Arthur could\rdo next.", ["Keep making dog jokes about\nSue Ellen", 207], 
						["Stop making dog jokes", 290], ["Stop making dog jokes\nAND tell Sue Ellen he is sorry", 348], images.arthur_pic_png, images.sueellen_footer_button_png, images.buster_footer_button_png, 
						images, [202,268,333], [264,330]);
					var ending1Art = [];
					ending1Art.push( new displaylib.EndingSequenceItem(images.arthur_ending02_01_jpg, "art_choice1_panel1") );
					ending1Art.push( new displaylib.EndingSequenceItem(images.arthur_ending02_02_jpg, "art_choice1_panel2") );
					ending1Art.push( new displaylib.EndingSequenceItem(images.arthur_ending02_03_jpg, "art_choice1_panel3") );
					ending1Art.push( new displaylib.EndingQuestion(images, "Do you like what\nArthur did in this\nending? Why?", "ending_arthur_ending") ); //imgs, questionText, audioID
					ending1Art.push( new displaylib.EndingQuestion(images, "Let’s see what else\nArthur could do...", "art_whatelsearthurdo") );
					ending1Art.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "arthur") );
					ending1Art.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do.", "ending_f_letssee") );
					
					var ending2Art = [];
					ending2Art.push( new displaylib.EndingSequenceItem(images.arthur_ending03_01_jpg, "art_choice2_panel1") );
					ending2Art.push( new displaylib.EndingSequenceItem(images.arthur_ending03_02_jpg, "art_choice2_panel2") );
					ending2Art.push( new displaylib.EndingSequenceItem(images.arthur_ending03_03_jpg, "art_choice2_panel3") );
					ending2Art.push( new displaylib.EndingQuestion(images, "Do you like what\nArthur did in this\nending? Why?",  "ending_arthur_ending") );
					ending2Art.push( new displaylib.EndingQuestion(images, "Let’s see what else\nArthur could do...", "art_whatelsearthurdo") );
					ending2Art.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "arthur") );
					ending2Art.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do.", "ending_f_letssee") );
					
					var ending3Art = [];
					ending3Art.push( new displaylib.EndingSequenceItem(images.arthur_ending04_01_jpg, "art_choice3_panel1") );
					ending3Art.push( new displaylib.EndingSequenceItem(images.arthur_ending04_02_jpg, "art_choice3_panel2") );
					ending3Art.push( new displaylib.EndingSequenceItem(images.arthur_ending04_03_jpg, "art_choice3_panel3") );
					ending3Art.push( new displaylib.EndingQuestion(images, "Do you like what\nArthur did in this\nending? Why?", "ending_arthur_ending") );
					ending3Art.push( new displaylib.EndingQuestion(images, "Let’s see what else\nArthur could do...", "art_whatelsearthurdo") );
					ending3Art.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "arthur") );
					ending3Art.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do.", "ending_f_letssee") );

					arthurEndingSequence = new storylib.EndingSequenceArthur(images.arrowSheet, artEndSelectContent, "OPEN_SUE_ELLEN_ENDING", "OPEN_BUSTER_ENDING", "art_choicescreen",
						ending1Art, ending2Art, ending3Art);
					arthurEndingSequence.addEventListener("OPEN_SUE_ELLEN_ENDING", onOpenSueEllenEnding);
					arthurEndingSequence.addEventListener("OPEN_BUSTER_ENDING", onOpenBusterEnding);
					arthurEndingSequence.addEventListener("DISPLAY_CHOOSE_CHARACTER_ENDING", setupLoadingForEndSequence);
					arthurEndingSequence.addEventListener("END_SEQ_FIRST_ENDING_SELECTED", function(){
						trackEnding("arthurEnding1");
					});
					arthurEndingSequence.addEventListener("END_SEQ_SECOND_ENDING_SELECTED", function(){
						trackEnding("arthurEnding2");
					});
					arthurEndingSequence.addEventListener("END_SEQ_THIRD_ENDING_SELECTED", function(){
						trackEnding("arthurEnding3");
					});
				}
			
				if(!busterEndingSequence) {
					var busterEndSelectContent = new displaylib.CharacterActionsDisplay("Choose what Buster could\rdo next.", ["Keep giving Arthur the\n\"silent treatment\"", 207], 
						["Tell Arthur that he’s hurting\nSue Ellen’s feelings", 285], ["Talk to Sue Ellen", 378], images.buster_pic_png, images.arthur_footer_button_png, images.sueellen_footer_button_png, 
						images, [202,278,360], [264,355]);
					var ending1Buster = [];
					ending1Buster.push( new displaylib.EndingSequenceItem(images.buster_ending02_01_jpg, "bus_choice1_panel1") );
					ending1Buster.push( new displaylib.EndingSequenceItem(images.buster_ending02_02_jpg, "bus_choice1_panel2") );
					ending1Buster.push( new displaylib.EndingSequenceItem(images.buster_ending02_03_jpg, "bus_choice1_panel3") );
					ending1Buster.push( new displaylib.EndingQuestion(images, "Do you like what\nBuster did in this\nending? Why?", "ending_buster_ending") );
					ending1Buster.push( new displaylib.EndingQuestion(images, "Let’s see what else\nBuster could do...", "bus_whatelsebusterdo") );
					ending1Buster.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "buster") );
					ending1Buster.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do...", "ending_f_letssee") );
					var ending2Buster = [];
					ending2Buster.push( new displaylib.EndingSequenceItem(images.buster_ending03_01_jpg, "bus_choice2_panel1") );
					ending2Buster.push( new displaylib.EndingSequenceItem(images.buster_ending03_02_jpg, "bus_choice2_panel2") );
					ending2Buster.push( new displaylib.EndingSequenceItem(images.buster_ending03_03_jpg, "bus_choice2_panel3") );
					ending2Buster.push( new displaylib.EndingQuestion(images, "Do you like what\nBuster did in this\nending? Why?", "ending_buster_ending") );
					ending2Buster.push( new displaylib.EndingQuestion(images, "Let’s see what else\nBuster could do...", "bus_whatelsebusterdo") );
					ending2Buster.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "buster") );
					ending2Buster.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do...", "ending_f_letssee") );
					var ending3Buster = [];
					ending3Buster.push( new displaylib.EndingSequenceItem(images.buster_ending04_01_jpg, "bus_choice3_panel1") );
					ending3Buster.push( new displaylib.EndingSequenceItem(images.buster_ending04_02_jpg, "bus_choice3_panel2") );
					ending3Buster.push( new displaylib.EndingSequenceItem(images.buster_ending04_03_jpg, "bus_choice3_panel3") );
					ending3Buster.push( new displaylib.EndingQuestion(images, "Do you like what\nBuster did in this\nending? Why?", "ending_buster_ending") );
					ending3Buster.push( new displaylib.EndingQuestion(images, "Let’s see what else\nBuster could do...", "bus_whatelsebusterdo") );
					ending3Buster.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "buster") );
					ending3Buster.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do...", "ending_f_letssee") );

					busterEndingSequence = new storylib.EndingSequenceArthur(images.arrowSheet, busterEndSelectContent, "OPEN_ARTHUR_ENDING", "OPEN_SUE_ELLEN_ENDING", "bus_choicescreen",
						ending1Buster, ending2Buster, ending3Buster);
					busterEndingSequence.addEventListener("OPEN_SUE_ELLEN_ENDING", onOpenSueEllenEnding);
					busterEndingSequence.addEventListener("OPEN_ARTHUR_ENDING", onOpenArthurEnding);
					busterEndingSequence.addEventListener("DISPLAY_CHOOSE_CHARACTER_ENDING", setupLoadingForEndSequence);
					busterEndingSequence.addEventListener("END_SEQ_FIRST_ENDING_SELECTED", function(){
						trackEnding("busterEnding1");
					});
					busterEndingSequence.addEventListener("END_SEQ_SECOND_ENDING_SELECTED", function(){
						trackEnding("busterEnding2");
					});
					busterEndingSequence.addEventListener("END_SEQ_THIRD_ENDING_SELECTED", function(){
						trackEnding("busterEnding3");
					});
				}

				if(!sueellenEndingSequence) {
					var sueEllenEndSelectContent = new displaylib.CharacterActionsDisplay("Choose what Sue Ellen could\rdo next.\n", ["Do nothing. Maybe Arthur will\njust come to his senses and stop.", 207], 
						["Tease Arthur back", 285], ["Tell her mom and dad what\nis going on", 338], images.sueellen_pic_png, images.arthur_footer_button_png, images.buster_footer_button_png, 
						images, [202, 262, 328], [264,318]);
					var ending1SueEllen = [];
					ending1SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending02_01_jpg, "sue_choice1_panel1") );
					ending1SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending02_02_jpg, "sue_choice1_panel2") );
					ending1SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending02_03_jpg, "sue_choice1_panel3") );
					ending1SueEllen.push( new displaylib.EndingQuestion(images, "Do you like what\nSue Ellen did in this\nending? Why?", "ending_sueellen_ending") );
					ending1SueEllen.push( new displaylib.EndingQuestion(images, "Let’s see what else\nSue Ellen could do...", "sue_whatelsesuedo") );
					ending1SueEllen.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "sue_ellen") );
					ending1SueEllen.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do...", "ending_f_letssee") );
					var ending2SueEllen = [];
					ending2SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending03_01_jpg, "sue_choice2_panel1") );
					ending2SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending03_02_jpg, "sue_choice2_panel2") );
					ending2SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending03_03_jpg, "sue_choice2_panel3") );
					ending2SueEllen.push( new displaylib.EndingQuestion(images, "Do you like what\nSue Ellen did in this\nending? Why?", "ending_sueellen_ending") );
					ending2SueEllen.push( new displaylib.EndingQuestion(images, "Let’s see what else\nSue Ellen could do...", "sue_whatelsesuedo") );
					ending2SueEllen.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "sue_ellen") );
					ending2SueEllen.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do...", "ending_f_letssee") );
					var ending3SueEllen = [];
					ending3SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending04_01_jpg, "sue_choice3_panel1") );
					ending3SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending04_02_jpg, "sue_choice3_panel2") );
					ending3SueEllen.push( new displaylib.EndingSequenceItem(images.sue_ellen_ending04_03_jpg, "sue_choice3_panel3") );
					ending3SueEllen.push( new displaylib.EndingQuestion(images, "Do you like what\nSue Ellen did in this\nending? Why?", "ending_sueellen_ending") );
					ending3SueEllen.push( new displaylib.EndingQuestion(images, "Let’s see what else\nSue Ellen could do...", "sue_whatelsesuedo") );
					ending3SueEllen.push( new displaylib.EndingQuestionChoice(images, "ending_e_whichending", "sue_ellen") );
					ending3SueEllen.push( new displaylib.EndingQuestion(images, "Let’s see what\nthe other characters\ncould do...", "ending_f_letssee") );

					sueellenEndingSequence = new storylib.EndingSequenceArthur(images.arrowSheet, sueEllenEndSelectContent, "OPEN_ARTHUR_ENDING", "OPEN_BUSTER_ENDING", "sue_choicescreen",
						ending1SueEllen, ending2SueEllen, ending3SueEllen);
					sueellenEndingSequence.addEventListener("OPEN_BUSTER_ENDING", onOpenBusterEnding);
					sueellenEndingSequence.addEventListener("OPEN_ARTHUR_ENDING", onOpenArthurEnding);
					sueellenEndingSequence.addEventListener("DISPLAY_CHOOSE_CHARACTER_ENDING", setupLoadingForEndSequence);
					sueellenEndingSequence.addEventListener("END_SEQ_FIRST_ENDING_SELECTED", function(){
						trackEnding("sueEllenEnding1");
					});
					sueellenEndingSequence.addEventListener("END_SEQ_SECOND_ENDING_SELECTED", function(){
						trackEnding("sueEllenEnding2");
					});
					sueellenEndingSequence.addEventListener("END_SEQ_THIRD_ENDING_SELECTED", function(){
						trackEnding("sueEllenEnding3");
					});
				}
			break;


		}

		// disable nav buttons initially - This may change depending on what the title page will looks like.
		if(currentLoadManifest != "section1"){
			hudContainer.nextButton.alpha = 1;
			hudContainer.backButton.alpha = 1;
		}

	}

	function createChooseCharacterDisplay(){
		// create choose ending display
		if(!chooseEndingDisplay){
			chooseEndingDisplay = new displaylib.ChooseEndingDisplay(stage, images);
			stage.addChild(chooseEndingDisplay);
			chooseEndingDisplay.visible = false;
		}
	}

	function createEndSequenceContainer(){
		// add end sequence container
		if(!endingSequence) endingSequence = new createjs.Container();

		if(!stage.contains(endingSequence)){
			stage.addChild(endingSequence);
		}
	}

	function createHUD(){
		// create the hud of the display - navigation buttons live here
		hudContainer = new displaylib.GameHUD(stage, images);
		hudContainer.setup();
		hudContainer.nextButton.alpha = 0; // hide next button
		hudContainer.backButton.alpha = 0; // hide back button
		hudContainer.nextQuestionButton.alpha = 0; // next question button
		hudContainer.menuButton.visible = false; // menu button
	}

	function createMenuDisplay(){
		menuDisplay = new displaylib.MenuDisplay(stage, images);
		stage.addChild(menuDisplay);

		menuDisplay.continue_button.visible = false;

		menuDisplay.visible = false;
	}

	function addEventHandlers(){
		// event handlers for hud - navigation and discussion displays

		hudContainer.startButton.addEventListener("click", function(obj){ 
			
			if(isLoading) return;

			lowLag.play('space'); // play audio

			hudContainer.startButton.alpha = 0;
			
			titleImage.visible = false;

			setUpCurrentSequence();
			nextScene();
			
			hudContainer.menuButton.visible = true;

			if(debug) logger("click - Start");
		});

		hudContainer.nextButton.getChildAt(0).addEventListener("click", function(obj){ 
			if(isLoading) return;
			nextScene();
		});

		hudContainer.backButton.getChildAt(0).addEventListener("click", function(obj){ 
			if(isLoading) return;
			backScene();
		});

		hudContainer.nextQuestionButton.addEventListener("click", function(obj){
			hudContainer.nextQuestionButton.alpha = 0; 
			nextScene();
		});

		hudContainer.menuButton.getChildAt(0).addEventListener("click", function(obj){
			if(isLoading) return;
			menuDisplay.visible = true;
		});

		menuDisplay.chapter1_button.addEventListener("click", function(obj){ 
			logger("Goto : Morning Lockers");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_1;
			menuHandler();
		});

		menuDisplay.questions_chap1.getChildAt(0).addEventListener("click", function(obj){ 
			logger("Goto : Morning Lockers Questions");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_1;
			menuHandler(true);
		});

		
		menuDisplay.chapter2_button.addEventListener("click", function(obj){ 
			logger("Goto : The Cafeteria");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_2;
			menuHandler();

		});

		menuDisplay.questions_chap2.getChildAt(0).addEventListener("click", function(obj){ 
			logger("Goto : The Cafeteria Questions");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_2;
			menuHandler(true);

		});

		menuDisplay.chapter3_button.addEventListener("click", function(obj){ 
			logger("Goto : Sheepdog Appreciation Day");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_3;
			menuHandler();
		});

		menuDisplay.questions_chap3.getChildAt(0).addEventListener("click", function(obj){ 
			logger("Goto : Sheepdog Appreciation Day Questions");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_3;
			menuHandler(true);

		});

		menuDisplay.chapter4_button.addEventListener("click", function(obj){ 
			logger("Goto : The Apology Letter");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_4_5_6;
			menuHandler();
		});

		menuDisplay.questions_chap4.getChildAt(0).addEventListener("click", function(obj){ 
			logger("Goto : The Apology Letter Questions");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_4_5_6;
			menuHandler(true);

		});

		menuDisplay.chapter5_button.addEventListener("click", function(obj){ 
			logger("Goto : The Silent Treatment");
			lastState = currentState;
			currentState = VIEWSTATE_SEQUENCE_7_8;
			menuHandler();
		});

		menuDisplay.lastChapter_button.addEventListener("click", function(obj){
			//menuDisplay.continue_button.visible = true;
			lowLag.stop();
			menuDisplay.visible = false;
			setupLoadingForEndSequence();
		});

		chooseEndingDisplay.chooseArthurEnding.addEventListener("click", onOpenArthurEnding);

		chooseEndingDisplay.chooseBusterEnding.addEventListener("click", onOpenBusterEnding);
		
		chooseEndingDisplay.chooseSueEllenEnding.addEventListener("click", onOpenSueEllenEnding);


		menuDisplay.continue_button.getChildAt(0).addEventListener("click", function(obj){ 
			if(isLoading) return;

			if(currentState == VIEWSTATE_END_QUESTIONS){
				setEndSequence();
			}else{
				// hide the ending sequence
				endingSequence.visible = false;
				// hide menu
				menuDisplay.visible = false;
				// hide choose ending
				chooseEndingDisplay.visible = false;
				hudContainer.nextButton.visible = true;
				hudContainer.backButton.visible = true;
				navSetup();
		 		startScene(true); // param - isNext - for transitions 
			}

	 		menuDisplay.continue_button.visible = false;
	 		lastState = "";
		});

		menuDisplay.close_button.getChildAt(0).addEventListener("click", function(obj){ 
			if(isLoading) return;
			menuDisplay.continue_button.visible = false;
			menuDisplay.visible = false;

			if(lastState){
				currentState = lastState;
				sceneIndex = lastSceneIndex;
				lastState = "";
			}
		});	

		
		sc01Discussion.addEventListener("SCO1_DISCUSS_COMPLETE", onSC01DiscussComplete);

		sc02Discussion.addEventListener("SCO2_DISCUSS_COMPLETE", onSC02DiscussComplete);

		sc03Discussion.addEventListener("SCO3_DISCUSS_COMPLETE", onSC03DiscussComplete);
		
		sc04Discussion.addEventListener("SCO4_DISCUSS_COMPLETE", onSC04DiscussComplete);

	}

	function onOpenSueEllenEnding(obj){
		if(isLoading) return;
		selectedCharacterEnd = "sueellen";
		setEndSequence();
	}

	function onOpenBusterEnding(obj){
		if(isLoading) return;
		selectedCharacterEnd = "buster";
		setEndSequence();
	}

	function onOpenArthurEnding(obj){
		if(isLoading) return;
		selectedCharacterEnd = "arthur";
		setEndSequence();
	}

	function setupLoadingForEndSequence(){
		currentState = VIEWSTATE_END_QUESTIONS;
		chooseEndingDisplay.visible = true;
		hudContainer.nextButton.visible = false;
		hudContainer.backButton.visible = false;
		
		trackEnding("choiceScreen");

		// load ending sequences
		if(!arthurEndingSequence || !busterEndingSequence || !sueellenEndingSequence){
			getNextSectionLoaded();
		}else{
			chooseEndingDisplay.visible = true;
		}

		lowLag.stopAndPlay("ending_a_explore");

	}

	function resize_canvas(){
		if(enableScaleDimensions === true){ // is set to true - set canvas based on browser width and height - cutting off 50 px
			canvas.width = window.innerWidth - 50; // 960;
			canvas.height = window.innerHeight - 50; // 540;
		}
			
		stageWidth =  canvas.width; //should be 960;
		stageHeight = canvas.height; // should be 540;

		//console.log( canvas.width );
		//console.log( (canvas.width * originalHeight) / originalWidth ); //originalWidth

		var changedHeight = (canvas.width * originalHeight) / originalWidth; //originalHeight

		// change dimensions based on ratio scale
		if(currentScene){
			currentScene.view.scaleX = ((canvas.width * 100) / originalWidth) * .01;
			currentScene.view.scaleY = ((changedHeight * 100) / originalHeight) * .01;
		}

		if(hudContainer){
			hudContainer.onResize();
		}

		if(sc01Discussion){
			sc01Discussion.scaleX = ((canvas.width * 100) / originalWidth) * .01;
			sc01Discussion.scaleY = ((changedHeight * 100) / originalHeight) * .01;
		}

		if(sc02Discussion){
			sc02Discussion.scaleX = ((canvas.width * 100) / originalWidth) * .01;
			sc02Discussion.scaleY = ((changedHeight * 100) / originalHeight) * .01;
		}

		if(sc03Discussion){
			sc03Discussion.scaleX = ((canvas.width * 100) / originalWidth) * .01;
			sc03Discussion.scaleY = ((changedHeight * 100) / originalHeight) * .01;
		}

		if(sc04Discussion){
			sc04Discussion.scaleX = ((canvas.width * 100) / originalWidth) * .01;
			sc04Discussion.scaleY = ((changedHeight * 100) / originalHeight) * .01;
		}


	}

	function buildDiscussionDisplays(){
		// build discussion/interactive displays
		// QuestionDisplay - img, width, height, backgroundColor, QuestionText, x, y
		// transitionDisplayReallyThinking0 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(130,214,242,1), 
		// 	"Let's see what they're\rreally thinking...", 460, 200);

		transitionDisplayHappensNext0 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(130,214,242,1), 
			"Let's see what happens next...", 460, 220);

		questionDisplay0a1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(130,214,242,1), 
			"Is Arthur laughing WITH Sue\rEllen or AT Sue Ellen?\rHow do you know?", 460, 180);

		questionDisplay0a2 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(130,214,242,1), 
			"Was Sue Ellen upset?\rHow do you know?", 460, 200);  

		questionDisplay0a3 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(130,214,242,1), 
			"Did Buster like the jokes?\rHow do you know?", 460, 200); 

		questionDisplay0a4 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(130,214,242,1), 
			"Now that we know what\rthey're thinking, will Arthur\rkeep making dog jokes?\nWhy do you think that?", 460, 150); 


		questionDisplay1a1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(96,192,154,1), 
			"Why does Arthur keep\rmaking dog jokes?\rHow do you know?", 460, 180);

		questionDisplay1a2 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(96,192,154,1), 
			"How does Sue Ellen feel\rabout the jokes? How\rdo you know?", 460, 180);
		
		questionDisplay1b1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(96,192,154,1), 
			"How does Buster feel about\rthe jokes now? How\rdo you know?", 460, 180);

		questionDisplay1b2 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(96,192,154,1), 
			"Now that we know what\rthey're thinking, what would\ryou tell Arthur to do? Why?", 460, 180);

		transitionDisplayHappensNext1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(96,192,154,1), 
			"Let's see what happens next...", 460, 220);

		
		questionDisplay2a1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(168,157,203,1), 
			"Why did Arthur make\rthat picture?\rHow do you know?", 460, 180);

		questionDisplay2a2 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(168,157,203,1), 
			"How did Sue Ellen feel when\rshe found the picture?\rHow do you know?", 460, 180);

		questionDisplay2a3 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(168,157,203,1), 
			"What will Buster\rthink about the picture?\rHow do you know?", 460, 180);
		
		questionDisplay2b1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(168,157,203,1), 
			"Now that we know what\rthey're thinking, what could\rSue Ellen do to stop Arthur's\rteasing? Why might that work?", 470, 150);

		transitionDisplayHappensNext2 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(168,157,203,1), 
			"Let's see what happens next...", 460, 220); //img, width, height, backgroundColor, QuestionText

		
		questionDisplay3a1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(204,204,153,1), 
			"Why do you think Arthur\rwrote his letter like that?\rHow do you know?", 460, 180); 

		questionDisplay3a2 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(204,204,153,1), 
			"How did Sue Ellen feel\rwhen she read the letter?\rHow do you know?", 460, 180); 

		questionDisplay3a3 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(204,204,153,1), 
			"Will Buster like Arthur's\rapology letter? How\ndo you know?", 460, 180);  
		
		questionDisplay3b1 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(204,204,153,1), 
			"Now that we know what\rthey're thinking, is there\ranything you could tell\rBuster to do? Why?", 460, 150);

		transitionDisplayHappensNext3 = new storylib.QuestionDisplay(images.question_frame_png, stageWidth, stageHeight, createjs.Graphics.getRGB(204,204,153,1),
			"Let's see what happens next...", 460, 220); //img, width, height, backgroundColor, QuestionText 

		sc01Discussion = new storylib.DiscussionDisplay(images, originalWidth, originalHeight, 1);
		stage.addChild(sc01Discussion);
		sc01Discussion.visible = false;

		sc02Discussion = new storylib.DiscussionDisplay(images, originalWidth, originalHeight, 2);
		stage.addChild(sc02Discussion);
		sc02Discussion.visible = false;

		sc03Discussion = new storylib.DiscussionDisplay(images, originalWidth, originalHeight, 3);
		stage.addChild(sc03Discussion);
		sc03Discussion.visible = false;

		sc04Discussion = new storylib.DiscussionDisplay(images, originalWidth, originalHeight, 4);
		stage.addChild(sc04Discussion);
		sc04Discussion.visible = false;
	}

	

	// Object definition and prototype
	//storylib.Scene - stage, sceneIMG, scriptArray, audioTag, transitionTime, delay
	//storyLib.ScriptData - text, width, height, x, y, captionDirection, delayInDisplay, xOffset, yOffset
	//storylib.AltScene - stage, sceneIMG, scriptArray, audioTag, transitionTime, delay, positionX, positionY, scaleXY, duration

	function createSequences(currentSequence){
	  // when images are added to Image array - build section object and push on to sequence array
	  switch(currentSequence){
			case "section1":
				sequence_1.push( new storylib.AltScene(sceneSequenceContainer, images.sc01_01_jpg, 
					[new storylib.ScriptData("Brr! Man, is it\rcold out there!", 160, 71, 625, 55, "bottomLeft" , 0, 0, 10),
					 new storylib.ScriptData("I know. My ears\rare still frozen.", 160, 71, 145, 100, "bottomRight", 4000, 0, 10)], "sc01_01-02", 0, 1000, -50, -50, 1.3, 600) );

				sequence_1.push( new storylib.AltScene(sceneSequenceContainer, images.sc01_03_jpg, 
						[new storylib.ScriptData("What you need is\ra pair of genuine\ryak wool earmuffs!", 190, 85, 250, 100, "bottomLeft" , 0, 0, 5), 
						 new storylib.ScriptData("Where would I\rget those?", 160, 71, 330, 300, "topRight", 3500, 0, 0)], "sc01_03", 0, 0, -60, -200, 2, 600) );


				sequence_1.push(new storylib.Scene(sceneSequenceContainer, images.sc01_05_jpg, 
						[new storylib.ScriptData("From a Tibetan pen pal, if you\rare lucky enough to have one.\rMy friend Tenzin just sent me\rthis. It's the warmest thing\rI've ever worn!", 
							290, 127, 300, -14, "bottomLeft", 0, 8, 0), 
						new storylib.ScriptData("It's so soft, too.", 155, 69,  365, 400, "topRight", 8000, -5, 10)], "sc01_04-05") );

				sequence_1.push( new storylib.AltScene(sceneSequenceContainer, images.sc01_06_jpg, 
						[new storylib.ScriptData("Wow! What is that\ryou're wearing?", 185, 82, 470, 152, "bottomLeft", 0, 0, 15)], "sc01_06", 0, 0, -50, -50, 1.3, 400) );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, images.sc01_07_jpg, 
						[new storylib.ScriptData("My new sweater.", 165, 72, 390, 340, "topRight", 0, -5, 10), 
						 new storylib.ScriptData("And it's made\rfrom a yak.", 160, 71, 100, 92, "bottomRight", 1800, 0, 10)], "sc01_07") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, images.sc01_09_jpg, 
						[new storylib.ScriptData("You mean YAKS. They\rmust have used a\rcouple of them. It's\rpretty big on you.", 240, 105, 550, 60, "bottomLeft", 0, 10, 0),
						 new storylib.ScriptData("Hey, you know what?\rIt kind of makes you\rlook like a big\rsheepdog.", 240, 105, 550, 325, "topLeft", 5000, 15, 5)], "sc01_08-09") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, images.sc01_10_jpg, 
						[new storylib.ScriptData("Ha-ha-ha-ha!", 130, 60, 275, 110, "bottomLeft", 0, -5, 15), 
						 new storylib.ScriptData("Ha-ha-ha-ha!", 130, 60, 475, 110, "bottomLeft", 0, -5, 15),
						 new storylib.ScriptData("Ha-ha-ha-ha!", 130, 60, 675, 110, "bottomLeft", 0, -5, 15)], "sc01_10") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, images.sc01_11_jpg, 
						[new storylib.ScriptData("That's true! But you\rstill need a tail.", 200, 88,  300, 75, "bottomLeft", 0, 0, 15),
						 new storylib.ScriptData("All right, so I look like a\rsheepdog. But at least\rI'm a warm and cozy\rsheepdog.", 240, 105, 210, 340, "topRight", 3000, 5, 5)], "sc01_11") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, images.sc01_12_jpg, 
						[new storylib.ScriptData("AH-ROOOOO!", 140, 50, 280, 115, "bottomRight", 0, -5, 15),
						 new storylib.ScriptData("Ha-ha-ha-ha!", 130, 60, 260, 320, "topLeft", 1000, -5, 5),
						 new storylib.ScriptData("Ha-ha-ha-ha!", 130, 60, 450, 320, "topRight", 1000, -5, 5)], "sc01_12") );

				sequence_1.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc01_13_jpg, [new storylib.ScriptData("Arthur saw that Sue Ellen had forgotten her backpack.", 520, 40, 20, 20, -10, -10)], "sc01_13", 0, 1500, -50, -50, 1.5, 600) );

				sequence_1.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc01_14_jpg, [new storylib.ScriptData("He picked it up.", 170, 40, 20, 20, -10, -10)], "sc01_14", 0, 1500, -300, -500, 2, 600) );
				
				sequence_1.push( new storylib.Scene(sceneSequenceContainer, images.sc01_15_jpg, 
						[new storylib.ScriptData("Hey, you left your\rbackpack behind.\rBAD DOG!", 180, 80, 250, 70),
						 new storylib.ScriptData("Ha-ha-ha-ha!\rGood one.", 138, 55, 735, 120, "bottomLeft", 3500)], "sc01_15-16") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, questionDisplay0a1, [], "disc1-q1-whydoyouthinks") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, questionDisplay0a2, [], "disc1-q2-doyouthinksues") );

				sequence_1.push( new storylib.Scene(sceneSequenceContainer, questionDisplay0a3, [], "disc1-q3-didbusterlikethes") );
				
				sequence_1.push( sc01Discussion  );

			break;

			case "section2":	
				sequence_2.push( new storylib.Scene(sceneSequenceContainer, questionDisplay0a4, [], "disc1-q4-nowthatweknows") );

				sequence_2.push( new storylib.AltScene(sceneSequenceContainer, transitionDisplayHappensNext0, [], "disc-letsseewhathappens", 0) );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_01_jpg, 
					[new storylib.ScriptData("Hey! Over here!\rCome here, girl!\rOver here!", 180, 80, 475, 55, "bottomLeft", 0, 5, 5)], "sc02_01") );

				sequence_2.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc02_02_jpg, [new storylib.ScriptData("Sue Ellen realized that Arthur was still making those dog jokes.", 600, 40, 20, 20, -10, -10)], "sc02_02", 0) );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_03_jpg, 
						[new storylib.ScriptData("Who's a good sheep-\rdoggie? You're a good\rsheepdoggie! Yes, you\rare!", 240, 105, 325, 270, "topLeft", 0, 10, 5)], "sc02_03") );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_04_jpg, 
						[new storylib.ScriptData("Heh-heh-heh!", 140, 61, 425, 80, "bottomLeft", 0, -5, 20),
						 new storylib.ScriptData("Heh-heh-heh!", 140, 61, 725, 80, "bottomLeft", 0, -5, 20)], "sc02_04") );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_05_jpg, 
						[new storylib.ScriptData("Okay, okay, you can\rstop now. This dog\rmight just get angry\rand bite you.", 230, 102, 335, 43, "bottomLeft", 0, 15, 0)], "sc02_05") );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_06_jpg, 
						[new storylib.ScriptData("Oh, you wouldn't do\rthat. Sheepdogs have\ra very gentle nature.", 220, 98, 310, 75, "bottomRight", 0, 5, 10)], "sc02_06") );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_07_jpg, 
						[new storylib.ScriptData("You know, I thought I\rwould never say this,\rbut I actually think you\rlook très chic.", 230, 102, 0, 5, "bottomRight", 0, 5, 0),
						 new storylib.ScriptData("Really?!", 90, 40, 550, 325, "topRight", 5500, -5, -12),
						 new storylib.ScriptData("Uh-huh. I saw Capri di\rVapida wearing something\rjust like that at a fashion\rshow.", 260, 114, 360, 22, "bottomLeft", 6800, 6, 5)], "sc02_07-08-09") );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_10_jpg, 
						[new storylib.ScriptData("Are you sure it was a\rfashion show and not\ra... dog show?", 226, 100, 335, 360, "topRight", 0, 10, 15)], "sc02_10") );
				
				sequence_2.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc02_11_jpg, [new storylib.ScriptData("This time Arthur's friends didn't laugh.", 380, 40, 20, 20, -10, -10)], "sc02_11", 0, 0, 0, -50, 1.5, 900) );
				
				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_12_jpg, 
						[new storylib.ScriptData("Okay, okay, I'll stop. I\rdon't know why, it just\rcracks me up!", 230,  102, 335, 90, "bottomRight", 0, 5, 13)], "sc02_12") );

				sequence_2.push( new storylib.Scene(sceneSequenceContainer, images.sc02_13_jpg, 
						[new storylib.ScriptData("Here. Why don't you\rhave my... biscuit.\rHa-ha-ha-ha!", 210, 92, 315, 65, "bottomRight", 0, 2, 6)], "sc02_13") );
				
				sequence_2.push( new storylib.AltScene(sceneSequenceContainer, images.sc02_14_jpg,[new storylib.ScriptData("* sigh *", 90, 40, 600, 50, "bottomLeft", 0, -5, 6)], 
						"sc02_14", 0, 500, -50, -50, 1.3, 600) );
				
				sequence_2.push( new storylib.Scene(sceneSequenceContainer, questionDisplay1a1, [], "disc2_q1_whydoesarthurkeep", 0, 500, 0, stageHeight, 1, 600) );
				
				sequence_2.push( new storylib.Scene(sceneSequenceContainer, questionDisplay1a2, [], "disc2_q2_howdoessueellen", 0, 500, 0, stageHeight, 1, 600) ); 
				
				sequence_2.push( new storylib.Scene(sceneSequenceContainer, questionDisplay1b1, [], "disc2_q3_howdoesbusterfeel", 0, 500, 0, stageHeight, 1, 600) ); 
				
				sequence_2.push( sc02Discussion );

			break;

			case "section3":	
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, questionDisplay1b2, [], "disc2_q4_nowthatweknow", 0, 500, 0, stageHeight, 1, 600) );
				
				sequence_3.push( new storylib.AltScene(sceneSequenceContainer, transitionDisplayHappensNext1, [], "disc-letsseewhathappens", 0) ); 
				
				sequence_3.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc03_01_jpg, [new storylib.ScriptData("The next day was also cold. Sue Ellen wore her sweater again.", 595, 40, 20, 20, -10, -10)], "sc03_01", 0) );
				
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, images.sc03_02_jpg, [new storylib.ScriptData("* gasp! *", 100, 44, 535, 150, "bottomLeft", 0, -5, 12)], "sc03_02") );
				
				sequence_3.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc03_03_jpg, [new storylib.ScriptData("Sue Ellen found something on her locker.", 410, 40, 20, 20, -10, -10)], "sc03_03", 0) );
				
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, images.sc03_04_jpg, 
					[new storylib.ScriptData('"Happy Sheepdog\rAppreciation Day?"', 200,  74, 150, 55, "bottomRight", 0, 5, 10)], "sc03_04") );
				
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, images.sc03_05_jpg, 
					[new storylib.ScriptData("Did you do this?", 165,  72, 560, 55, "bottomLeft", 0, 0, 22),
					new storylib.ScriptData("Um... Well... It\rwas just a joke.", 168, 74, 80, 230, "topRight", 1000, 0, 5)], "sc03_05-06"));
				
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, images.sc03_07_jpg, 
					[new storylib.ScriptData("Well, I don't think\rit's funny!", 180, 78, 150, 55, "bottomRight", 0, 0, 12)], "sc03_07") );
				
				sequence_3.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc03_08_jpg, [new storylib.ScriptData("Sue Ellen turned around and left.", 330, 40, 20, 20, -10, -10)], "sc03_08", 0) );
				
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, images.sc03_09_jpg, 
					[new storylib.ScriptData("Ha-ha-ha-ha!", 135, 60, 400, 55, "bottomLeft", 0, -5, 15)], "sc03_09") );
				
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, questionDisplay2a1, [], "disc3_q1_whydoyou") ); 
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, questionDisplay2a2, [], "disc3_q2_howdoyouthink") ); 
				sequence_3.push( new storylib.Scene(sceneSequenceContainer, questionDisplay2a3, [], "disc3_q3_whatdoyouthink") );
				sequence_3.push( sc03Discussion );
			break; 

			case "section4_5_6":
			//sequence 4
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, questionDisplay2b1, [], "disc3_q4_nowthatweknow") );
				sequence_4_5_6.push( new storylib.AltScene(sceneSequenceContainer, transitionDisplayHappensNext2, [], "disc-letsseewhathappens", 0) ); 

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_01_jpg, 
					[new storylib.ScriptData("And that, in short,\ris how iron ore is\rsmelted.", 183, 80, 420, 50, "bottomLeft", 0, 0, 5)], "sc04_01") );

				sequence_4_5_6.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc04_02_jpg, [new storylib.ScriptData("Class was over, so everyone got up to leave.", 435, 40, 20, 20, -10, -10)], "sc04_02", 0) );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_03_jpg, 
					[new storylib.ScriptData("Arthur? Would\ryou stay behind\rplease?", 178, 78, 535, 400, "bottomRight", 0, 5, 0)], "sc04_03") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_04_jpg, 
					[new storylib.ScriptData("A bully? Me? I\rdidn't bully Sue\rEllen!", 183, 80, 235, 200, "bottomRight", 0, 10, 0)], "sc04_04") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_05_jpg, 
					[new storylib.ScriptData("I was surprised, too, Arthur.\rIt doesn't seem like you. But\rwhen you continue to tease\rsomeone, even after they've\rasked you to stop, that's\rbullying.", 
						320, 140, 500, 250, "topLeft", 0, 30, 12)], "sc04_05") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_06_jpg, 
					[new storylib.ScriptData("But... but it was\rjust a joke.", 170, 74, 240, 250, "bottomRight", 0, 5, 10)], "sc04_06") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_07_jpg, 
					[new storylib.ScriptData("Maybe to you. But imagine if\rsomeone made you feel bad\rfor what you wore. We have\rno tolerance for that kind of\rbehavior here. You must treat\reveryone with respect.", 
						325, 144, 380, -15, "bottomLeft", 0, 25, -5),
					 new storylib.ScriptData("Fine. I promise not\rto do it again.", 202,  75, 450, 300, "topRight", 9500, 10, 5),
					 new storylib.ScriptData("I'm glad to\rhear that.", 140,  62, 285, 375, "topLeft", 12000, 10, -5)], "sc04_07") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc04_09_jpg, 
					[new storylib.ScriptData("Arthur? We're not\rquite finished yet.", 202,  75, 100, 150, "bottomLeft", 0, 5, 10)], "sc04_08") );

			//sequence 5
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_01_jpg, 
					[new storylib.ScriptData("I have to write Sue Ellen\ra letter apologizing for\rwhat I did -- by\rtomorrow!", 250, 109, 200, 20, "bottomRight", 0, 10, 5)], "sc05_01", 0) );

				sequence_4_5_6.push( new storylib.AltScene(sceneSequenceContainer, images.sc05_02_jpg,
					[new storylib.ScriptData("And we have that\rhistory test! I'll\rprobably fail!", 190, 83, 600, 100, "bottomLeft", 0, 5, 5),
					new storylib.ScriptData("I think SHE should be\rthe one apologizing\rto ME.", 220, 96, 600, 360, "topLeft", 3200, 5, 10)], "sc05_02-05", 0) );
				
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_06_jpg, 
					[new storylib.ScriptData("How do you\rfigure that?", 134, 59, 350, 100, "bottomRight", 0, 0, 5)], "sc05_06", 0) );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_07_jpg, 
					[new storylib.ScriptData("She didn't have to go to\rMr. Ratburn. She could\rhave just told me to\rstop.", 
						250, 111, 550, 10, "bottomLeft", 0, 10, 0)], "sc05_07") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_08_jpg, 
					[new storylib.ScriptData("She DID tell you\rto stop. I was\rthere.", 170, 75, 300, 150, "bottomRight", 0, 0, 0)], "sc05_08") );
				
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_01_jpg, 
					[new storylib.ScriptData("Well... okay, but I didn't\rthink she meant it. Come\ron, she was being over-\rsensitive, right?",
						250, 120, 190, 20, "bottomRight", 0, 5, 5)], "sc05_09a") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_09_jpg, 
					[new storylib.ScriptData("I don't know. Sue Ellen's\rnever seemed over-\rsensitive to me. I'm the\roversensitive one.",
						250, 109, 500, 0, "bottomLeft", 0, 5, 0)], "sc05_09b") );
				
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_10_jpg, 
					[new storylib.ScriptData("No, you're not.\rYou're just the\rweird one.", 160, 71, 520, 100, "bottomLeft", 0, 0, 0)], "sc05_10") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_11_jpg, 
					[new storylib.ScriptData("* gasp! * ", 90, 40, 400, 80, "bottomRight", 0, -10, 10)], "sc05_11") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_12_jpg, 
					[new storylib.ScriptData("YOU TAKE THAT\rBACK!", 175,  78, 535, 50, "bottomRight", 0, 0, 15),
					 new storylib.ScriptData("Okay, okay! I'm \rsorry!", 170,  75, 200, 400, "topRight", 2000, 5, 5)], "sc05_12") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_13_jpg, 
					[new storylib.ScriptData("See? Saying you're\rsorry isn't that hard.", 202,  75, 535, 50, "bottomLeft", 0, 0, 10)], "sc05_13") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc05_14_jpg, 
					[new storylib.ScriptData("You'll be finished\rwith that letter in\rno time.", 188, 83, 250, 100, "bottomRight", 0, 5, 5)], "sc05_14") );

			//sequence 6
				sequence_4_5_6.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc06_01_jpg, [new storylib.ScriptData("Later that night, Arthur was in his bedroom.", 430, 40, 20, 20, -10, -10)], "sc06_01", 0) );

				sequence_4_5_6.push( new storylib.AltScene(sceneSequenceContainer, images.sc06_02_jpg,
					[new storylib.ScriptData("Dear Sue Ellen. I'm sorry\rI upset you. I didn't mean\rto. It was really just a\rjoke.", 
						260, 115, 200, 100, "bottomRight", 0, 10, 5),
					 new storylib.ScriptData("I thought you could\rtake a joke - but I\rguess I was wrong.", 
					 	200, 89, 260, 300, "topRight", 6000, 0, 5)], "sc06_02", 0) );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc06_03_jpg, 
					[new storylib.ScriptData("I've been teased\rbefore about wearing\rglasses...", 
						210, 93, 600, 100, "bottomLeft", 0, 0, 5)], "sc06_03") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc06_04_jpg, 
					[new storylib.ScriptData("... \"but I never felt I had to\rtell the teacher about it and\rget someone else in trouble.\rMaybe you're just...\roverreacting?\"", 
						296, 131, 400, 100, "topLeft", 0, 15, 15)], "sc06_04") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc06_05_jpg, 
					[new storylib.ScriptData("It goes on like that\rfor the whole page.", 190,  84, 520, 100, "bottomLeft", 0, 0, 15),
				     new storylib.ScriptData("What are you\rgoing to do?", 140,  62, 250, 140, "bottomRight", 2600, 0, 5),
					 new storylib.ScriptData("I don't know.", 140,  62, 550, 340, "topLeft", 3900, 0, 5)], "sc06_05-08") );

				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, images.sc06_09_jpg, 
					[new storylib.ScriptData("Well, until he gives\ryou a real apology,\rI'm not speaking to\rhim!", 215, 95, 30, 300, "topRight", 0, 10, 0),
					 new storylib.ScriptData("Me, too!", 94,  42, 600, 450, "topLeft", 5000, -5, -10)], "sc06_09") );
				
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, questionDisplay3a1, [], "disc4_q1_whydoyouthink") );
				
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, questionDisplay3a2, [], "disc4-q2-howdoyouthink") );
				
				sequence_4_5_6.push( new storylib.Scene(sceneSequenceContainer, questionDisplay3a3, [], "disc4-q3-willbusterthinkthat") );

				sequence_4_5_6.push( sc04Discussion );
			break;  

			case "section_7_8":
			//sequence 7
				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, questionDisplay3b1, [], "disc4_q4_nowthatweknow") );
				
				sequence_7_8.push( new storylib.AltScene(sceneSequenceContainer, transitionDisplayHappensNext3, [], "disc-letsseewhathappens", 0) ); 
				
				sequence_7_8.push(new storylib.Scene(sceneSequenceContainer, images.sc07_01_jpg, [new storylib.ScriptData("Hey, guys!", 
					110,  49, 700, 60, "bottomRight", 0, -5, 10)], "sc07_01") );
				
				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc07_02_jpg, [new storylib.ScriptData("Buster didn't say anything.", 275, 40, 20, 20, -10, -10)], "sc07_02", 0) );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_03_jpg, 
					[new storylib.ScriptData("How about that\rhistory test? Pretty\rhard, right?", 
						200,  89, 500, 100, "bottomLeft", 0, 5, 5)], "sc07_03") );
				
				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc07_04_jpg, [new storylib.ScriptData("As a matter of fact, no one said anything.", 400, 40, 20, 20, -10, -10)], "sc07_04", 0) );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_05_jpg, 
					[new storylib.ScriptData("What's going\ron?", 150, 66, 620, 150, "bottomLeft", 0, 5, 10)], "sc07_05") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_07_jpg, 
					[new storylib.ScriptData("We're not speaking\rto you. That's\rwhat's going on.", 
						200, 89, 560, 50, "bottomLeft", 0, 0, 5)], "sc07_07") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_08_jpg, 
					[new storylib.ScriptData("Buster! You just\rruined it!", 
						170, 75, 90, 200, "bottomRight", 0, 0, 10)], "sc07_08") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_10_jpg, 
					[new storylib.ScriptData("I did? OH!", 110,  49, 300, 390, "topLeft", 0, -5, -5),
					 new storylib.ScriptData("Why aren't you\rspeaking to me?", 175, 78, 450, 380, "topRight", 1900, 0, 5)], "sc07_09-10") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_11_jpg, 
					[new storylib.ScriptData("I'd tell you... but\rI'm not speaking!", 175, 78, 30, 380, "topRight", 0, 0, 5)], "sc07_11") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_13_jpg, 
					[new storylib.ScriptData("Come on, Francine!\rLet's sit at a table\rthat doesn't have\rany bullies at it!", 
						210, 93, 180, 200, "topRight", 0, 5, -5)], "sc07_13") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_14_jpg, 
					[new storylib.ScriptData("I'm not a\rbully!", 
						120, 53, 490, 350, "topRight", 0, 5, -15)], "sc07_14") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_15_jpg, 
					[new storylib.ScriptData("I don't get it! What\rdid I do wrong?", 
						190, 84, 400, 320, "topRight", 0, 0, 10)], "sc07_15") );
				
				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc07_18_jpg, [new storylib.ScriptData("Buster wrote his answer on a pad of paper.", 425, 40, 20, 20, -10, -10)], "sc07_18", 0) );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_19_jpg, 
					[new storylib.ScriptData("\"Your letter to Sue\rEllen.\" What about it?", 
						220, 82, 250, 390, "topRight", 0, 0, 10)], "sc07_19") );
				
				
				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc07_21_jpg, 
					[new storylib.ScriptData("It was terrible! It's\rlike you weren't\rsorry at all!", 
						200, 89, 325, 45, "bottomRight", 0, 5, 5),
					 new storylib.ScriptData("That's why I'm not\rspeaking to you!\rWhich I'm clearly not\rvery good at!", 
					 	230, 102, 325, 350, "topRight", 3200, 10, 5)], "sc07_20-21") );

				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc07_23_jpg, [new storylib.ScriptData("Arthur didn't know what to say.", 315, 40, 20, 20, -10, -10)], "sc07_22a", 0) );

			//sequence 8
				sequence_7_8.push(new storylib.NarrationScene(sceneSequenceContainer, images.sc08_01_jpg, [new storylib.ScriptData("After school, Arthur looked for Sue Ellen.", 400, 40, 20, 20, -10, -10)], "sc08_01", 0) );
				
				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc08_02_jpg, 
					[new storylib.ScriptData("Sue Ellen!\rWait up!", 120, 53, 250, 200, "bottomRight", 0, 0, 0)], "sc08_02") );
				
				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc08_03_jpg, [new storylib.ScriptData("Sue Ellen heard Arthur calling.", 300, 40, 20, 20, -10, -10)], "sc08_03", 0) );
				
				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc08_04_jpg, [new storylib.ScriptData("She turned around and waited for him to catch up.", 485, 40, 20, 20, -10, -10)], "sc08_04", 0) );
				
				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc08_05_jpg, 
					[new storylib.ScriptData("Look, I'm really sorry, okay?\rI never meant to hurt your\rfeelings. Can we please just\rforget it and be friends?", 298, 110, 560, 50, "bottomLeft", 0, 15, 0)], 
					"sc08_05") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc08_06_jpg, 
					[new storylib.ScriptData("Do you still think\rI overreacted?", 170, 63, 425, 250, "topLeft", 0, 0, -5)], "sc08_06") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc08_07_jpg, 
					[new storylib.ScriptData("Um... well...", 135, 60, 250, 220, "bottomRight", 0, 0, 15)], "sc08_07") );

				sequence_7_8.push( new storylib.Scene(sceneSequenceContainer, images.sc08_08_jpg, 
					[new storylib.ScriptData("* sigh *", 100, 44, 480, 250, "topLeft", 0, 0, -10)], "sc08_08") );

				sequence_7_8.push( new storylib.NarrationScene(sceneSequenceContainer, images.sc08_09_jpg, [new storylib.ScriptData("Arthur was speechless.", 235, 40, 20, 20, -10, -10)], "sc07_22", 0, 500, -50, -50, 1.3, 600) );
			break;
			
			default:
				if(debug) logger("Error on createSequences");
			break;
	  }
		
	}

	function nextScene(){
		// loading next Scene

		if(debug) logger("nextScene");

		sceneIndex++; // iterate to next scene index

		// if this is the last scene, change the view state
		if(sceneIndex > sequence.length) {
			if(debug) logger("Scene Sequence Ends");
			
			switch(currentState){
				case VIEWSTATE_SEQUENCE_1:
					currentState = VIEWSTATE_SEQUENCE_2;
				break;

				case VIEWSTATE_SEQUENCE_2:
					currentState = VIEWSTATE_SEQUENCE_3;
				break;

				case VIEWSTATE_SEQUENCE_3:
					currentState = VIEWSTATE_SEQUENCE_4_5_6;
					break;

				case VIEWSTATE_SEQUENCE_4_5_6:
					currentState = VIEWSTATE_SEQUENCE_7_8;
					break;

				case VIEWSTATE_SEQUENCE_7_8:
					setupLoadingForEndSequence();
					return; // end
					break;		
			}

			sceneIndex = 1; // set beginning scene index - zero based 
		}

		/* 
		note: this logic is not actively used since the next sequence is loaded - second to last in start scene. This may become a catch all.
		*/
		if(setUpCurrentSequence()){ // if sequence is ready (images are loaded) start next scene 
			navSetup();
			startScene(true); // param - isNext - for transitions
		}else{
			if(debug) logger("getNextSectionLoaded is being loaded - catch all solution.");
			// sequence is not ready - need to load assets
			getNextSectionLoaded();
		}

	}

	function backScene(){
		// loading last scene

		if(debug) logger("backScene");

		sceneIndex--; // iterate to next scene index

		//logger("backScene() - sceneIndex: " + sceneIndex + " currentState: " + currentState);

		// if this is the first scene, change the view state
		if(sceneIndex <= 0) {

			if(debug) logger("Scene Sequence Begins");

			switch(currentState){
				case VIEWSTATE_SEQUENCE_1:
					currentState = VIEWSTATE_SEQUENCE_3;
					sequence = sequence_3;
				break;

				case VIEWSTATE_SEQUENCE_2:
					currentState = VIEWSTATE_SEQUENCE_1;
					sequence = sequence_1;
				break;

				case VIEWSTATE_SEQUENCE_3:
					currentState = VIEWSTATE_SEQUENCE_2;
					sequence = sequence_2;
				break;

				case VIEWSTATE_SEQUENCE_4_5_6:
					currentState = VIEWSTATE_SEQUENCE_3;
					sequence = sequence_3;
				break;

				case VIEWSTATE_SEQUENCE_7_8:
					currentState = VIEWSTATE_SEQUENCE_4_5_6;
					sequence = sequence_4_5_6;
				break;

			}
			sceneIndex = sequence.length; // back to end scene of last sequence - zero based
		}

		/* 
		note: this logic is not actively used since the next sequence is loaded - second to last in start scene. This may become a catch all.
		*/
		if(setUpCurrentSequence()){
			navSetup();
			startScene(false); // param - isNext - for transitions
		}else{
			if(debug) logger("getNextSectionLoaded is being loaded - catch all solution.");
			// sequence is not ready - need to load assets
			getNextSectionLoaded();
		}

		//logger("end of backScene() - sceneIndex: " + sceneIndex + " currentState: " + currentState);

	}

	function menuHandler(isQuestion){
		lastSceneIndex = sceneIndex;

		if(isQuestion && isQuestion === true){
			getLastIndex();
		}else{
			if(currentState == VIEWSTATE_SEQUENCE_1){
				sceneIndex = 1; // set beginning scene index - zero based 
			}else{
				sceneIndex = 3; // set beginning scene index - zero based 	
			}
			
		}

		/* 
		note: this logic is not actively used since the next sequence is loaded - second to last in start scene. This may become a catch all.
		*/
		if(setUpCurrentSequence()){ // if sequence is ready (images are loaded) start next scene 
			// Hide menu
			menuDisplay.visible = false;
			// hide the ending sequence
			endingSequence.visible = false;
			// hide choose ending
			chooseEndingDisplay.visible = false;

			hudContainer.nextButton.visible = true;
			hudContainer.backButton.visible = true;
			navSetup();
			startScene(true); // param - isNext - for transitions
		}else{
			if(debug) logger("getNextSectionLoaded is being loaded - catch all solution.");
			// sequence is not ready - need to load assets
			getNextSectionLoaded();

			menuDisplay.continue_button.visible = false;

			ifMenuCalledLoading = true;
		}
	}


	function getLastIndex(){
		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				sceneIndex = 13;
			break;

			case VIEWSTATE_SEQUENCE_2:
				sceneIndex = 15;
			break;

			case VIEWSTATE_SEQUENCE_3:
				sceneIndex = 11;
			break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				sceneIndex = 29;
			break;

			case VIEWSTATE_SEQUENCE_7_8:
				sceneIndex = 31;
			break;	
		}

	}

	function checkToLoadNextSequence(){
		// check to see if sequence array is loaded when needed - Next Sequence
		var testSequence = [];

		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				currentLoadManifest = "section2"; //currentLoadManifest = "section1";
				testSequence = sequence_2;
			break;

			case VIEWSTATE_SEQUENCE_2:
				currentLoadManifest = "section3";
				testSequence = sequence_3;
			break;

			case VIEWSTATE_SEQUENCE_3:
				currentLoadManifest = "section4_5_6";
				testSequence = sequence_4_5_6;
			break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				currentLoadManifest = "section_7_8";
				testSequence = sequence_7_8;		
			break;

			case VIEWSTATE_SEQUENCE_7_8:
				currentLoadManifest = "chooseEndings";
			break;	
		}

		if(testSequence.length == 0){
			loadManifest();
		}

		
	}

	function checkToLoadBackSequence(){
		// check to see if sequence array is loaded when needed - Last Sequence
		var testSequence = [];

		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				return;
			break;

			case VIEWSTATE_SEQUENCE_2:
				currentLoadManifest = "section1"; //currentLoadManifest = "section1";
				testSequence = sequence_1;
			break;

			case VIEWSTATE_SEQUENCE_3:
				currentLoadManifest = "section2";
				testSequence = sequence_2;
			break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				currentLoadManifest = "section3";
				testSequence = sequence_3;
			break;

			case VIEWSTATE_SEQUENCE_7_8:
				currentLoadManifest = "section4_5_6";
				testSequence = sequence_4_5_6;
			break;

			case VIEWSTATE_END_QUESTIONS:
				currentLoadManifest = "section_7_8";
				testSequence = sequence_7_8;	
			break;

		}

		if(testSequence.length == 0){
			loadManifest();
		}
		
	}

	function startScene(isNext){
		if(currentScene){
			if(!currentScene.isInteractiveDisplay || currentScene.isInteractiveDisplay == undefined){
				currentScene.destroy();
			}else{
				currentScene.visible = false;
				currentScene.stop();
			}
		}

		// start the next scene - sequence or interactive display
		currentScene = sequence[sceneIndex - 1];

		if(!currentScene && debug) logger("StartScene - current scene is undefined");

		if(currentScene.isInteractiveDisplay){
			hudContainer.backButton.alpha = 0;
			hudContainer.nextButton.alpha = 0;
			currentScene.visible = true;
			currentScene.reset();
			currentScene.start();
		}else{
			// play audio if it exists in the scene 
			currentScene.start(); // start scene
			
			// if there is a transition - run it - Note: this maybe removed since audio playback for mobile requires user interaction
			if(currentScene.transitionTime != 0){
				hudContainer.nextButton.alpha = 0; // hide next button
				hudContainer.backButton.alpha = 0; // hide next button
				if(isNext){
					createjs.Tween.get({}).wait(currentScene.transitionTime).call( nextScene );
				}else{
					createjs.Tween.get({}).wait(currentScene.transitionTime).call( backScene );
				}
				
			}
			resize_canvas(); // resize canvas if needed
		}

		// load next sequence - second to last scene
		if(isNext){
			if( (sceneIndex == sequence.length - 1 && currentState != VIEWSTATE_SEQUENCE_7_8) 
				|| (sceneIndex == sequence.length && currentState == VIEWSTATE_SEQUENCE_7_8) ) {
				checkToLoadNextSequence();
			}
		}else{ 
			// going back - if needed
			if(sceneIndex == 2) checkToLoadBackSequence();
		}
	}

	function setEndSequence(){
		// "End Sequence" is the last set of questions and end results for characters 
		
		chooseEndingDisplay.visible = false;
		menuDisplay.visible = false;

		endingSequence.removeAllChildren();

		switch(selectedCharacterEnd){
			case "arthur":
			endingSequence.addChild(arthurEndingSequence);
			break;
			
			case "buster":
			endingSequence.addChild(busterEndingSequence);
			break;

			case "sueellen":
			endingSequence.addChild(sueellenEndingSequence);
			break;			
		}

		endingSequence.visible = true;
		
		endingSequence.getChildAt(0).start();
		isEndOfGame = true;
		navSetup();
	}

	var trackingCurrentState

	function setUpCurrentSequence(){
		// match view state with sequence array - display objects
		var isReady = false;

		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				sequence = sequence_1;
			break;

			case VIEWSTATE_SEQUENCE_2:
				sequence = sequence_2;
			break;

			case VIEWSTATE_SEQUENCE_3:
				sequence = sequence_3;
			break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				sequence = sequence_4_5_6;
			break;

			case VIEWSTATE_SEQUENCE_7_8:
				sequence = sequence_7_8;
			break;
		}

		// call tracking event - currentState
		if(trackingCurrentState != currentState) trackViewStateEvent(false);
		trackingCurrentState = currentState;

		if(sequence.length > 0){ // if sequence has more than one object it is ready
			isReady = true;
		}

		return isReady;
	}

	function createInteractive(interactiveID){
		// setup for staring discussion/unteractive display
		if(debug) logger("createInteractive " + interactiveID);

		hudContainer.backButton.alpha = 0;
		hudContainer.nextButton.alpha = 0;
		
		switch(interactiveID){
			case 1:
			sc01Discussion.visible = true;
			sc01Discussion.start();
			break;

			case 2:
			sc02Discussion.visible = true;
			sc02Discussion.start();
			break;

			case 3:
			sc03Discussion.visible = true;
			sc03Discussion.start();
			break;

			case 4:
			sc04Discussion.visible = true;
			sc04Discussion.start();
			break;

		}

		
	}

	function onSoundPlayComplete(){
		// handler for soundPlay complete
		currentScene.removeEventListener("SOUND_PLAY_COMPLETE", onSoundPlayComplete);
	}

	function navSetup(){
		// hud navigation buttons are displayed or hidden based on View state and sequence number - Needs to be refactored 
		var isQuestionSection = false;

		hudContainer.startButton.alpha = 0;

		if(currentState == VIEWSTATE_SEQUENCE_1 && sceneIndex <= 1){
			hudContainer.backButton.alpha = 0; 
		}else{
			hudContainer.backButton.alpha = 1; 
		}

		//logger("navSetup() - sceneIndex " + sceneIndex + " currentState " + currentState);
		hudContainer.nextQuestionButton.alpha = 0;

		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				if(sceneIndex == 13){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
					trackViewStateEvent(true);
				}else if(sceneIndex == 14 || sceneIndex == 15){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}else if(sceneIndex == 16){
					hudContainer.nextButton.alpha = 0;
					isQuestionSection = true;
				}
			break;

			case VIEWSTATE_SEQUENCE_2:
				if(sceneIndex == 15){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
					trackViewStateEvent(true);
				}else if(sceneIndex == 1  || sceneIndex == 16 || sceneIndex == 17){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}else if(sceneIndex == 2 || sceneIndex == 18){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}
			break;

			case VIEWSTATE_SEQUENCE_3:
				if(sceneIndex == 11){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
					trackViewStateEvent(true);
				}else if(sceneIndex == 1 || sceneIndex == 12 || sceneIndex == 13){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}else if(sceneIndex == 2 || sceneIndex == 14){
					hudContainer.nextButton.alpha = 1;
					hudContainer.nextQuestionButton.alpha = 0;
					isQuestionSection = true;
				}
			break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				if(sceneIndex == 29){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
					trackViewStateEvent(true);
				}else if(sceneIndex == 1 || sceneIndex == 30 || sceneIndex == 31){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}else if(sceneIndex == 2 || sceneIndex == 32){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}
			break;

			case VIEWSTATE_SEQUENCE_7_8:
				if(sceneIndex == 1){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
					trackViewStateEvent(true);
				}else if(sceneIndex == 2 || sceneIndex == 31){
					hudContainer.nextButton.alpha = 1;
					isQuestionSection = true;
				}
			break;

			case VIEWSTATE_END_QUESTIONS:
				hudContainer.nextButton.visible = false;
				hudContainer.backButton.visible = false;
				break;
		}
		
		if( !isQuestionSection && (sceneIndex < sequence.length || !isEndOfGame)) {
			//logger("disable buttons - sceneIndex: " + sceneIndex + " sequence.length: " + sequence.length + " isEndOfGame: " + isEndOfGame);
			hudContainer.nextButton.alpha = 1; // show next button when sound has played
			//hudContainer.backButton.alpha = 0;
		}

		if(sceneIndex == 0) {
			hudContainer.nextButton.alpha = 0;
		}

		
	}

	// handlers for discussion/interactive displays
	function onSC01DiscussComplete(){
		if(debug) logger("onSC01DiscussComplete");
		resetNavButtons(true);
	}

	function onSC02DiscussComplete(){
		if(debug) logger("onSC02DiscussComplete");
		resetNavButtons(true);
	}

	function onSC03DiscussComplete(){
		if(debug) logger("onSC03DiscussComplete");
		resetNavButtons(true);
	}

	function onSC04DiscussComplete(){
		if(debug) logger("onSC04DiscussComplete");
		resetNavButtons(true);
	}

	// reset nav Buttons
	function resetNavButtons(enableButtons){
		if(enableButtons){
			hudContainer.nextButton.alpha = 1;
			hudContainer.backButton.alpha = 1;
		}else{
			hudContainer.nextButton.alpha = 0;
			hudContainer.backButton.alpha = 0;
		}
		
	}

//tracking
	function trackViewStateEvent(isQuestionScene){
		switch(currentState){
			case VIEWSTATE_SEQUENCE_1:
				if(!isQuestionScene){
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Morning Lockers', 'story']);
				}else{
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Morning Lockers', 'questions']);
				}
				break;

			case VIEWSTATE_SEQUENCE_2:
				if(!isQuestionScene){
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'The Cafeteria', 'story']);
				}else{
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'The Cafeteria', 'questions']);
				}
				break;

			case VIEWSTATE_SEQUENCE_3:
				if(!isQuestionScene){
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Sheepdog Appreciation Day', 'story']);
				}else{
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Sheepdog Appreciation Day', 'questions']);
				}
				break;

			case VIEWSTATE_SEQUENCE_4_5_6:
				if(!isQuestionScene){
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'The Apology Letter', 'story']);
				}else{
					if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'The Apology Letter', 'questions']);
				}
				break;

			case VIEWSTATE_SEQUENCE_7_8:
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'The Silent Treatment', 'story']);
				break;

		}

		if(debug) logger("trackViewStateEvent " + currentState + " isQuestionScene: " + isQuestionScene);
	}

	function trackEnding(eventName){
		switch(eventName){
			case "choiceScreen":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Choice Screen']);
			break;

			case "arthurEnding1":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Arthur 1']);
			break;

			case "arthurEnding2":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Arthur 2']);
			break;

			case "arthurEnding3":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Arthur 3']);
			break;

			case "busterEnding1":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Buster 1']);
			break;

			case "busterEnding2":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Buster 2']);
			break;

			case "busterEnding3":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Buster 3']);
			break;

			case "sueEllenEnding1":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Sue Ellen 1']);
			break;

			case "sueEllenEnding2":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Sue Ellen 2']);
			break;

			case "sueEllenEnding3":
				if(_gaq) _gaq.push(['_trackEvent', 'ArthurComicBook', 'Choose Your Endings', 'Sue Ellen 3']);
			break;

		}
		
		if(debug) logger("trackEnding eventName:" + eventName);
	}

	init(); /// call init function

}(window));