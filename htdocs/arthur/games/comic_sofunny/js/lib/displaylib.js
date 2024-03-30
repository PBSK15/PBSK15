/*
	Arthur - Arthur Comics - So Funny
	displayLib.js - library for application component and displays - HUD Shell, Loading Display, Character Actions Display, 
	Choose Ending display, Components and Menu Display
*/
var displaylib = {};

// create scope of Class

(function(window){

	displaylib.GameHUD = function(stage, img){ 
		(displaylib.arrows = function() {
			this.initialize(img.arrowSheet);
		}).prototype = new createjs.Bitmap();

		// create spritesheet and assign the associated data.
        var spriteSheet  = new createjs.SpriteSheet({
            images: [img.arrowSheet],
            frames: {width:63, height:128, regY:16},
            animations: {
                backUp:[0],
                backOver:[1],
                backOn:[2],
                nextUp:[3],
                nextOver:[4],
                nextOn:[5]
            }
         });

		(displaylib.nextButton = function() {
			
			var buttonElement = new createjs.BitmapAnimation(spriteSheet);
			var helper = new createjs.ButtonHelper(buttonElement, "nextUp", "nextOver", "nextOn", false, buttonElement);
		 	this.addChild(buttonElement);
		 	buttonElement.regY = 128 / 2;
		 	buttonElement.y = (128 / 2) - 10;
		 	buttonElement.regX = 63 / 2;
		 	buttonElement.x = 63 / 2;

		}).prototype = p = new createjs.Container();

		(displaylib.backButton = function() {

			var buttonElement = new createjs.BitmapAnimation(spriteSheet);
			var helper = new createjs.ButtonHelper(buttonElement, "backUp", "backOver", "backOn", false, buttonElement);
		 	this.addChild(buttonElement);
		 	buttonElement.regY = 128 / 2;
		 	buttonElement.y = (128 / 2) - 10;
		 	buttonElement.regX = 63 / 2;
		 	buttonElement.x = 63 / 2;

		}).prototype = p = new createjs.Container();
		

		(displaylib.startButton = function(imgs) {
			this.initialize();

			var startBtnImage = new createjs.Bitmap(imgs.start_btn_off_png);
			startBtnImage.cursor = "pointer";
			this.addChild( startBtnImage );
			this.cursor = "pointer";
			this.addChild(startBtnImage);

		}).prototype = new createjs.Container();

		(displaylib.nextQuestionButton = function() {
			var buttonElement = new createjs.Bitmap(img.nextQuestionBtn_png);
			this.addChild(buttonElement);
		}).prototype = p = new createjs.Container();

		this.startButton = new displaylib.startButton(img);

		this.nextButton = new displaylib.nextButton();

		this.backButton = new displaylib.backButton();

		this.nextQuestionButton = new displaylib.nextQuestionButton();

		var dataMenuButton = {
		     images: [img.menu_button_on_png, img.menu_button_off_png],
		     frames: {width:87, height:40},
		     animations: {on:[0], off:[1]}
		 };
		var spriteSheetMenuButton = new createjs.SpriteSheet(dataMenuButton);
		var menuButtonBitmap = new createjs.BitmapAnimation(spriteSheetMenuButton);
		var helper = new createjs.ButtonHelper(menuButtonBitmap, "off", "on", "on", false, menuButtonBitmap);
		this.menuButton = new createjs.Container();
		this.menuButton.addChild(menuButtonBitmap);

		this.setup = function(){
			stage.addChild( this.startButton );
			stage.addChild( this.nextButton );
			stage.addChild( this.backButton );
			stage.addChild( this.nextQuestionButton );
			stage.addChild( this.menuButton );
			this.onResize();
		};

		this.onResize = function(){
			this.startButton.x = 772;
			this.startButton.y = 404;
			
			this.nextButton.x = stageWidth - 63;
			this.nextButton.y = stageHeight/2 - 128/2;
			
			this.backButton.x = 0;
			this.backButton.y = stageHeight/2 - 128/2;

			this.nextQuestionButton.x = 640;
			this.nextQuestionButton.y = 410;

			this.menuButton.x = stageWidth - 98;
			this.menuButton.y = 10;
		}

		this.destroy = function(){
			//console.log("destroy");
		}

	}	
	window.displaylib.GameHUD = displaylib.GameHUD;


//loading display 
	(displaylib.LoadingDisplay = function() {
		this.initialize();
		var blocker = createSquare(originalWidth, originalHeight, 0, 0, createjs.Graphics.getRGB(0,0,0,.1)); //width, height, x, y, fillColor, strokeColor, radius
		var displayArea = createSquare(325, 45, 0, 10, createjs.Graphics.getRGB(253,215,107,1), createjs.Graphics.getRGB(0,0,0,1), 12, 2); //width, height, x, y, fillColor, strokeColor, radius //createjs.Graphics.getRGB(145,127,51,1)
		this.addChild(displayArea);

		this.addChild(blocker);
		blocker.x = -610;
		blocker.y = -458;

		// createText is part if EaselJSUtil
		var loadingText = createText("Starting to Load...", FONT_STYLE_LOADING, createjs.Graphics.getRGB(0,0,0,1), 160, 35, 400, 32); // text, fontSettings, hexColor, x, y, width, height
		this.addChild(loadingText);
		loadingText.textBaseline = "middle";
		loadingText.textAlign = "center";

		this.progressText = function(value){
			if(value > 0){
				var percent = value;
				loadingText.text = "Loading ... " +  Math.round(percent * 100) + " %";
			}else{
				loadingText.text = "Starting to Load...";
			}

			if(value > 99){
				blocker.visible = false;
			}else{
				blocker.visible = true;
			}
		}
		

		this.width = loadingText.width;
		this.height = loadingText.height;

		return this;

	}).prototype = new createjs.Container();

	window.displaylib.LoadingDisplay = displaylib.LoadingDisplay;



	(displaylib.ChooseEndingDisplay = function(stage, imgs) {
		this.initialize();

		var displayArea = new createjs.Bitmap(imgs.bg_character_select_png);

		var row1_Y = 167;
		var row2_Y = 286;

		var col1_X = 22;
		var col2_X = 335;
		var col3_X = 646;

		var startLabel = createText("Let's explore some story endings. Which\ncharacter do you want to follow? You\ncan come back later and try the\nother characters, too.", FONT_STYLE_QUESTION_END, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 750, 80); // text, fontSettings, hexColor, x, y, width, height
		startLabel.textAlign = "center";
		startLabel.x = originalWidth/2;
		startLabel.y = 30;

		this.chooseArthurEnding = new createjs.Bitmap(imgs.arthur_select_png);
		this.chooseArthurEnding.x = col1_X;
		this.chooseArthurEnding.y = row1_Y;
		this.chooseArthurEnding.cursor = "pointer";
		
		this.chooseBusterEnding  = new createjs.Bitmap(imgs.buster_select_png);
		this.chooseBusterEnding.x = col3_X;
		this.chooseBusterEnding.y = row1_Y;
		this.chooseBusterEnding.cursor = "pointer";

		this.chooseSueEllenEnding  = new createjs.Bitmap(imgs.sue_ellen_select_png);
		this.chooseSueEllenEnding.x = col2_X;
		this.chooseSueEllenEnding.y = row1_Y;
		this.chooseSueEllenEnding.cursor = "pointer";

		this.addChild(displayArea);
		this.addChild(startLabel);
		this.addChild(this.chooseArthurEnding);
		this.addChild(this.chooseBusterEnding);
		this.addChild(this.chooseSueEllenEnding);

		return this;
	}).prototype = new createjs.Container();

	window.displaylib.ChooseEndingDisplay = displaylib.ChooseEndingDisplay;


	(displaylib.CharacterActionsDisplay = function(questionText, choice1Text, choice2Text, choice3Text, characterPic, subChar1, subChar2, imgs, buttonYPos, borderYPos) {
		this.initialize();

		var instanceRef = this;

		var background = new createjs.Bitmap(imgs.bg_character_select_png);

		var question_X = 470;
		var questionLabel = createText(questionText, FONT_STYLE_QUESTION_END, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 386, 118); // text, fontSettings, hexColor, x, y, width, height
		questionLabel.x = question_X;
		questionLabel.y = 64;

		var choose1Text = createText(choice1Text[0], FONT_STYLE_QUESTION_END_01, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 386, 118); // text, fontSettings, hexColor, x, y, width, height
		choose1Text.x = question_X + 5;
		choose1Text.y = choice1Text[1];//207;

		var goButton1 = new displaylib.onButton(imgs);
		goButton1.x = 855;
		goButton1.y = buttonYPos[0];

		//var border1 = createSquare(500, 4, 468, borderYPos[0], createjs.Graphics.getRGB(136, 192, 239), createjs.Graphics.getRGB(136, 192, 239), 6);
		var border1 = new createjs.Bitmap(imgs.dotted_line_png); //createDottedLine(500, createjs.Graphics.getRGB(136, 192, 239), 5) //lineWidth, color, lengthOfDash
		border1.x = 468; 
		border1.y = borderYPos[0];

		var choose2Text = createText(choice2Text[0], FONT_STYLE_QUESTION_END_01, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 386, 118); // text, fontSettings, hexColor, x, y, width, height
		choose2Text.x = question_X + 5;
		choose2Text.y = choice2Text[1]; //285;

		var goButton2 = new displaylib.onButton(imgs);
		goButton2.x = 855;
		goButton2.y = buttonYPos[1];

		var border2 = new createjs.Bitmap(imgs.dotted_line_png); //createSquare(500, 4, 468, borderYPos[1], createjs.Graphics.getRGB(136, 192, 239), createjs.Graphics.getRGB(136, 192, 239), 6);
		border2.x = 468; 
		border2.y = borderYPos[1];

		var choose3Text = createText(choice3Text[0], FONT_STYLE_QUESTION_END_01, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 386, 118); // text, fontSettings, hexColor, x, y, width, height
		choose3Text.x = question_X + 5;
		choose3Text.y = choice3Text[1]; //338;

		var goButton3 = new displaylib.onButton(imgs);
		goButton3.x = 855;
		goButton3.y = buttonYPos[2];

		var characterPic = new createjs.Bitmap(characterPic);
		characterPic.x = 0;
		characterPic.y = 56;
		
		var selectFooter = new createjs.Bitmap(imgs.select_footer_png);
		selectFooter.x = 0;
		selectFooter.y = 412;

		var footerSubChar1  = new createjs.Bitmap(subChar1);
		footerSubChar1.x = 375;
		footerSubChar1.y = 430;

		var footerSubChar2 = new createjs.Bitmap(subChar2);
		footerSubChar2.x = 486;
		footerSubChar2.y = 430;

		this.addChild(background);
		this.addChild(questionLabel);
		this.addChild(choose1Text);
		this.addChild(goButton1);
		this.addChild(border1);
		this.addChild(choose2Text);
		this.addChild(goButton2);
		this.addChild(border2);
		this.addChild(choose3Text);
		this.addChild(goButton3);
		this.addChild(characterPic);
		this.addChild(selectFooter);
		this.addChild(footerSubChar1);
		this.addChild(footerSubChar2);

		footerSubChar1.cursor = "pointer";
		footerSubChar1.addEventListener("click", function(obj){ 
			instanceRef.dispatchEvent("FOOTER_CHAR1_SELECTED");
		});	

		footerSubChar2.cursor = "pointer";
		footerSubChar2.addEventListener("click", function(obj){ 
			instanceRef.dispatchEvent("FOOTER_CHAR2_SELECTED");
		});

		goButton1.getChildAt(0).addEventListener("click", function(obj){ 
			instanceRef.dispatchEvent("FIRST_ENDING_SELECTED");
		});

		goButton2.getChildAt(0).addEventListener("click", function(obj){ 
			instanceRef.dispatchEvent("SECOND_ENDING_SELECTED");
		});	

		goButton3.getChildAt(0).addEventListener("click", function(obj){ 
			instanceRef.dispatchEvent("THIRD_ENDING_SELECTED");
		});	

		return this;
	}).prototype = new createjs.Container();

	createjs.EventDispatcher.initialize(displaylib.ChooseEndingDisplay.prototype);


// Menu display - popup menu to go to another scene
	(displaylib.MenuDisplay = function(stage, imgs) {
		this.initialize();

		var menuArea = createSquare(originalWidth, originalHeight, 0, 0, createjs.Graphics.getRGB(255,255,255,.1)); //width, height, x, y, fillColor, strokeColor, radius
		
		var background = createSquare(930, 512, 15, 12, createjs.Graphics.getRGB(106,201,202,1), createjs.Graphics.getRGB(61,170,169,1), 12, 5); //width, height, x, y, fillColor, strokeColor, radius

		var row1_Y = 100;
		var row2_Y = 310;

		var col1_X = 100;
		var col2_X = 332;
		var col3_X = 565;

		this.chapter1_button = new createjs.Bitmap(imgs.morning_locker_png);
		this.chapter1_button.x = col1_X;
		this.chapter1_button.y = row1_Y;
		this.chapter1_button.cursor = "pointer";

		this.chapter2_button = new createjs.Bitmap(imgs.cafeteria_png);
		this.chapter2_button.x = col2_X;
		this.chapter2_button.y = row1_Y;
		this.chapter2_button.cursor = "pointer";

		this.chapter3_button = new createjs.Bitmap(imgs.sheepdog_png);
		this.chapter3_button.x = col3_X;
		this.chapter3_button.y = row1_Y;
		this.chapter3_button.cursor = "pointer";

		this.chapter4_button = new createjs.Bitmap(imgs.apology_png);
		this.chapter4_button.x = col1_X;
		this.chapter4_button.y = row2_Y;
		this.chapter4_button.cursor = "pointer";

		this.chapter5_button = new createjs.Bitmap(imgs.silent_treatment_png);
		this.chapter5_button.x = col2_X;
		this.chapter5_button.y = row2_Y;
		this.chapter5_button.cursor = "pointer";

		this.lastChapter_button = new createjs.Bitmap(imgs.choose_ending_png);
		this.lastChapter_button.x = col3_X;
		this.lastChapter_button.y = row2_Y;
		this.lastChapter_button.cursor = "pointer";

		this.continue_button = new displaylib.continueButton(imgs);
		this.continue_button.x = 790;
		this.continue_button.y = 400;

		this.questions_chap1 = new displaylib.questionsButton(imgs);
		this.questions_chap1.x = col1_X + 50;
		this.questions_chap1.y = 255;

		this.questions_chap2 = new displaylib.questionsButton(imgs);
		this.questions_chap2.x = col2_X + 50;
		this.questions_chap2.y = 255;

		this.questions_chap3 = new displaylib.questionsButton(imgs);
		this.questions_chap3.x = col3_X + 50;
		this.questions_chap3.y = 255;

		this.questions_chap4 = new displaylib.questionsButton(imgs);
		this.questions_chap4.x = col1_X + 50;
		this.questions_chap4.y = 465;

		var dataCloseButton = {
		     images: [imgs.close_button_on_png, imgs.close_button_off_png],
		     frames: {width:53, height:51},
		     animations: {on:[0], off:[1]}
		 };

		var closeButtonBitmap = new createjs.BitmapAnimation(new createjs.SpriteSheet(dataCloseButton));
		var helper = new createjs.ButtonHelper(closeButtonBitmap, "off", "on", "on", false, closeButtonBitmap);
		this.close_button = new createjs.Container();
		this.close_button.addChild(closeButtonBitmap);
		this.close_button.x = originalWidth - 78;
		this.close_button.y = 20;

		var menuTitle = new createjs.Bitmap(imgs.menuTitle_png);
		
		this.addChild(menuArea);
		this.addChild(background);
		this.addChild( menuTitle );
		menuTitle.x = originalWidth/2 - 266/2;
		menuTitle.y = 45;

		this.addChild(this.chapter1_button);
		this.addChild(this.chapter2_button);
		this.addChild(this.chapter3_button);
		this.addChild(this.chapter4_button);
		this.addChild(this.chapter5_button);
		this.addChild(this.lastChapter_button);

		this.addChild(this.questions_chap1);
		this.addChild(this.questions_chap2);
		this.addChild(this.questions_chap3);

		this.addChild(this.questions_chap4);
		
		this.addChild(this.continue_button);
		this.addChild(this.close_button);

		return this;

	}).prototype = new createjs.Container();

	window.displaylib.MenuDisplay = displaylib.MenuDisplay;

// question button control
	(displaylib.questionsButton = function(imgs) {
		this.initialize();

		var dataQuestionsButton = {
		     images: [imgs.questions_button_on_png, imgs.questions_button_off_png],
		     frames: {width:159, height:43},
		     animations: {on:[0], off:[1]}
		 };
		//var spriteSheetQuestionsButton = new createjs.SpriteSheet(dataQuestionsButton);
		var questionsButtonBitmap = new createjs.BitmapAnimation(new createjs.SpriteSheet(dataQuestionsButton));
		var helper = new createjs.ButtonHelper(questionsButtonBitmap, "off", "on", "on", false, questionsButtonBitmap);

		this.addChild(questionsButtonBitmap);

	}).prototype = new createjs.Container();

// Continue button control
	(displaylib.continueButton = function(imgs) {
		this.initialize();

		var dataQuestionsButton = {
		     images: [imgs.continue_button_on_png, imgs.continue_button_off_png],
		     frames: {width:154, height:119},
		     animations: {on:[0], off:[1]}
		 };
		//var spriteSheetQuestionsButton = new createjs.SpriteSheet(dataQuestionsButton);
		var continueButtonBitmap = new createjs.BitmapAnimation(new createjs.SpriteSheet(dataQuestionsButton));
		var helper = new createjs.ButtonHelper(continueButtonBitmap, "off", "on", "on", false, continueButtonBitmap);

		this.addChild(continueButtonBitmap);

	}).prototype = new createjs.Container();

//On Button
	(displaylib.onButton = function(imgs) {
		this.initialize();

		var dataOnButton = {
		     images: [imgs.go_button_on_png, imgs.go_button_off_png],
		     frames: {width:68, height:59},
		     animations: {on:[0], off:[1]}
		 };
		//var spriteSheetQuestionsButton = new createjs.SpriteSheet(dataQuestionsButton);
		var onButtonBitmap = new createjs.BitmapAnimation(new createjs.SpriteSheet(dataOnButton));
		var helper = new createjs.ButtonHelper(onButtonBitmap, "off", "on", "on", false, onButtonBitmap);

		this.addChild(onButtonBitmap);

	}).prototype = new createjs.Container();


// Menu Button control
	(displaylib.menuButton = function(title) {
		this.initialize();

		var startLabel = new createjs.Text();
		startLabel.text = title;
		startLabel.font = FONT_STYLE_START_BUTTON;
		var widthLabel = startLabel.getMeasuredWidth();

		var startButtonBG = createSquare(widthLabel + (widthLabel * .10), 25, 0, 0, createjs.Graphics.getRGB(221,221,215,1), createjs.Graphics.getRGB(0,0,0,1), 12);
		this.addChild( startButtonBG );
		
		this.addChild( startLabel );
		startLabel.x =  (widthLabel + (widthLabel * .10))/2  - (widthLabel/2);
		startLabel.y = startLabel.getMeasuredLineHeight()/2;
		
	}).prototype = new createjs.Container();

// Ending Sequence Item component
	(displaylib.EndingSequenceItem = function(imageID, audioID) {
		var image = new createjs.Bitmap(imageID);
		this.initialize();

		this.audioID = audioID;

		this.addChild(image)
	}).prototype = new createjs.Container();

// Ending Question component
	(displaylib.EndingQuestion = function(imgs, questionText, audioID) {
		this.initialize();

		var displayArea = new createjs.Bitmap(imgs.bg_character_select_png);

		this.audioID = audioID;

		var questionLabel = createText(questionText, FONT_STYLE_QUESTION_END_02, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 750, 80); // text, fontSettings, hexColor, x, y, width, height
		questionLabel.textAlign = "center";
		questionLabel.x = originalWidth/2;
		questionLabel.y = originalHeight/2 - 160/2;

		this.addChild(displayArea);
		this.addChild(questionLabel);
		
		return this;
	}).prototype = new createjs.Container();

// Endning Question Choice component
	(displaylib.EndingQuestionChoice = function(imgs, audioID, character) {
		this.initialize();

		var questionText = "";
		var displayArea = new createjs.Bitmap(imgs.bg_character_select_png);

		var characterChoice_1;
		var characterImg_01;
		var characterChoice_2;
		var characterImg_02;
		var characterChoice_3;
		var characterImg_03;

		var row1_Y = 165;
		//var row2_Y = 286;

		var col1_X = 70;
		var col2_X = 345;
		var col3_X = 620;

		switch(character){
			case "arthur":
			questionText = "Which ending did you like best?";
			characterImg_01 = new createjs.Bitmap(imgs.arthur_best_01_png);
			characterImg_02 = new createjs.Bitmap(imgs.arthur_best_02_png);
			characterImg_03 = new createjs.Bitmap(imgs.arthur_best_03_png);
			characterChoice_1 = createChoiceItem(characterImg_01, "Keep making dog jokes\nabout Sue Ellen");
			characterChoice_2 = createChoiceItem(characterImg_02, "Stop making dog jokes");
			characterChoice_3 = createChoiceItem(characterImg_03, "Stop making dog jokes\nAND apologize to\nSue Ellen");
			break;

			case "sue_ellen":
			questionText = "Which ending did you like best?";
			characterImg_01 = new createjs.Bitmap(imgs.sue_ellen_best_01_png);
			characterImg_02 = new createjs.Bitmap(imgs.sue_ellen_best_02_png);
			characterImg_03 = new createjs.Bitmap(imgs.sue_ellen_best_03_png);
			characterChoice_1 = createChoiceItem(characterImg_01, "Do nothing. Maybe Arthur\nwill just come to his\nsenses and stop.");
			characterChoice_2 = createChoiceItem(characterImg_02, "Tease Arthur back");
			characterChoice_3 = createChoiceItem(characterImg_03, "Tell her mom and dad\nabout the situation");
			break;

			case "buster":
			questionText = "Which ending did you like best?";
			characterImg_01 = new createjs.Bitmap(imgs.buster_best_01_png);
			characterImg_02 = new createjs.Bitmap(imgs.buster_best_02_png);
			characterImg_03 = new createjs.Bitmap(imgs.buster_best_03_png);
			characterChoice_1 = createChoiceItem(characterImg_01, "Keep giving Arthur the\nsilent treatment");
			characterChoice_2 = createChoiceItem(characterImg_02, "Tell Arthur that he’s \nhurting Sue Ellen’s feelings");
			characterChoice_3 = createChoiceItem(characterImg_03, "Talk to Sue Ellen");
			break;

		}

		function createChoiceItem(characterImg, choiceText){
			var item = new createjs.Container();

			item.addChild(characterImg);

			var choiceText = createText(choiceText, FONT_STYLE_QUESTION_END_03, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 250, 70); 
			choiceText.y = 170;
			item.addChild(choiceText); 

			return item;
		}

		this.audioID = audioID;

		var questionLabel = createText(questionText, FONT_STYLE_QUESTION_END, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 750, 80); // text, fontSettings, hexColor, x, y, width, height
		questionLabel.textAlign = "center";
		questionLabel.x = originalWidth/2;
		questionLabel.y = 80;

		var whyLabel = createText("Why?", FONT_STYLE_QUESTION_END, createjs.Graphics.getRGB(15,65,108,1), 0, 0, 750, 80); // text, fontSettings, hexColor, x, y, width, height
		whyLabel.textAlign = "center";
		whyLabel.x = originalWidth/2;
		whyLabel.y = 445;

		this.addChild(displayArea);
		this.addChild(questionLabel);
		this.addChild(whyLabel);

		this.addChild(characterChoice_1);
		characterChoice_1.x = col1_X;
		characterChoice_1.y = row1_Y;
		this.addChild(characterChoice_2);
		characterChoice_2.x = col2_X;
		characterChoice_2.y = row1_Y;
		this.addChild(characterChoice_3);
		characterChoice_3.x = col3_X;
		characterChoice_3.y = row1_Y;
		
		return this;
	}).prototype = new createjs.Container();

	
}(window));