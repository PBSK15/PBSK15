/*
	Arthur - Arthur Comics - So Funny
	storylib.js - library for Scene, Scene Decorator Displays and Components related to Scene and Ending Displays
*/
var storylib = {};


// create scope of Class

(function(window){

/// Scene view/mediator Object

	(storylib.Scene = function(stage, sceneIMG, scriptArray, audiotag, transitionTime, delay){

		var soundInstance;
		var instanceRef = this;
		var isDestroyed = false;

		this.delay = delay;

		this.audioTag = audiotag;

		this.isInteractiveDisplay = false;

		(storylib.sceneImg = function() {
			this.initialize(sceneIMG);
		}).prototype = new createjs.Bitmap();

		this.sceneCell = new storylib.sceneImg();
		this.view = new createjs.MovieClip();
		this.captionView = new createjs.Container();

		if(transitionTime){
			this.transitionTime = transitionTime;
		}else{
			this.transitionTime = 0;
		}
		
		// public functions
		this.start = function(){

			isDestroyed = false;

			stage.addChild(this.view);
			
			if(sceneIMG instanceof createjs.Container){
				this.view.addChild(sceneIMG);
			}else{
				this.view.addChild(this.sceneCell);
			}
			
			stage.addChild(this.captionView);

			if(this.delay){
				createjs.Tween.get(this).wait(this.delay).call( function(obj){
					if(!isDestroyed){
						obj.target.startAudioAndScript();
					}
				});	
			}else{
				this.startAudioAndScript();
			}

		}

		this.destroy = function(){
			this.view.removeChild(this.sceneCell);
			this.captionView.removeAllChildren();
			stage.removeChild(this.view);
			stage.removeChild(this.captionView);
			isDestroyed = true;
		}

		this.startAudioAndScript = function(){
			// play audio asset
			if(isDestroyed) return; // if destroyed don't play audio

			if(this.audioTag) lowLag.stopAndPlay(this.audioTag); // play audio
				
			for(var x = 0; x < scriptArray.length; x++){
				var scriptData = scriptArray[x];
				switch(x){
					case 0:
					var caption1;
					createTitle(scriptData.text, scriptData.width, scriptData.height, scriptData.x, scriptData.y, this.captionView, caption1, scriptData.captionDirection, 
						scriptData.delayInDisplay, scriptData.xOffSet, scriptData.yOffSet);
					break;

					case 1:
					var caption2;
					createTitle(scriptData.text, scriptData.width, scriptData.height, scriptData.x, scriptData.y, this.captionView, caption2, scriptData.captionDirection, 
						scriptData.delayInDisplay, scriptData.xOffSet, scriptData.yOffSet);
					break;

					case 2:
					var caption3;
					createTitle(scriptData.text, scriptData.width, scriptData.height, scriptData.x, scriptData.y, this.captionView, caption3, scriptData.captionDirection, 
						scriptData.delayInDisplay, scriptData.xOffSet, scriptData.yOffSet);
					break;
				}
					
			}
		}

		// private functions
		function createTitle(text, width, height, x, y, view, caption, captionDirection, delayInDisplay, xOffset, yOffset){
				
			var gameTitle;
			var gameTitleBackground;
			var baseLineYOffset = 10;

			if(caption){
				view.removeChild(caption);
				caption.removeAllChildren();
				caption = null;
			}
			caption = new createjs.Container();

			if(!captionDirection){
				captionDirection = "bottomLeft";
			}
			
			gameTitleBackground = new storylib.CaptionBubble(captionDirection);
			gameTitleBackground.shadow = new createjs.Shadow("#000000", 5, 5, 1);
			caption.addChild(gameTitleBackground);
			
			gameTitleBackground.scaleX = ((width * 100) / 130) * .01;	//((height * 100) / 100) * .01; 	//2.80;
			gameTitleBackground.scaleY = ((height * 100) / 60) * .01; 	// ((width * 100) / 138) * .01;		//2.80;
			
			gameTitleBackground.x = x;
			gameTitleBackground.y = y; 

			var setX = x + ((140 * gameTitleBackground.scaleX) / 2) - ((width/2)) + 20;// + (width/2); //gameTitleBackground.x + gameTitleBackground.width/2 - width/2;
			var setY = y + ((100 * gameTitleBackground.scaleY) / 2) - ((height/2)); //gameTitleBackground.y + gameTitleBackground.height/2 - height/2;

			if(captionDirection === "topLeft" || captionDirection === "topRight") setY = setY + 37.5;

			gameTitle = createText(text, FONT_STYLE_1, createjs.Graphics.getRGB(0,0,0,1), setX, setY, width, height);
			gameTitle.lineHeight = 23;
			gameTitle.textBaseline = "middle";
			caption.addChild(gameTitle);
			if(xOffset) {
				gameTitle.x = gameTitle.x + xOffset;
			}
			if(yOffset) {
				gameTitle.y = gameTitle.y + yOffset;
			}
			gameTitle.y = gameTitle.y + baseLineYOffset;

			view.addChild(caption);

			if( delayInDisplay && delayInDisplay > 0 ){
				caption.visible = false;
				createjs.Tween.get(caption).wait(delayInDisplay).call( function(obj){ 
					caption.visible = true; 
				});
			}

			return caption;
		}

	}).prototype = new createjs.Container();

	createjs.EventDispatcher.initialize(storylib.Scene.prototype);

	window.storylib.Scene = storylib.Scene;

//AltScene - a different variation on original scene - as Decorator - additional parameters
	(storylib.AltScene = function(stage, sceneIMG, scriptArray, audiotag, transitionTime, delay, positionX, positionY, scaleXY, duration){
		var instanceRef = this;

		this.stage = stage;
		this.sceneIMG = sceneIMG;
		this.scriptArray = scriptArray;
		this.audioTag = audiotag;
		this.transitionTime = transitionTime;
		this.delay = delay;

		this.postionX = positionX; //-50;
		this.postionY = positionY; //-50;
		this.scaleXY = scaleXY; //1.3;
		this.duration = duration; //800;

		var p = storylib.AltScene.prototype = new storylib.Scene(this.stage, this.sceneIMG, this.scriptArray, this.audioTag, this.transitionTime, this.delay);
		
		this.view = p.view;
		this.captionView = p.captionView;

		// public functions
		this.start = function(){ 

			p.start(); 

			this.view.scaleX = this.view.scaleY = this.scaleXY;
			this.view.x = this.postionX;
			this.view.y = this.postionY;
			createjs.Tween.get(this.view).to({scaleX:1, scaleY:1, x:0, y:0}, this.duration); 

			this.captionView.scaleX = this.captionView.scaleY = this.scaleXY;
			this.captionView.x = this.postionX;
			this.captionView.y = this.postionY;
			createjs.Tween.get(this.captionView).to({scaleX:1, scaleY:1, x:0, y:0}, this.duration); 
		}

		this.destroy = function(){ p.destroy(); }	

	})

	createjs.EventDispatcher.initialize(storylib.AltScene.prototype);

	window.storylib.AltScene = storylib.AltScene;

//NarrationScene - a different variation on original scene - as Decorator - additional components
	(storylib.NarrationScene = function(stage, sceneIMG, scriptArray, audiotag, transitionTime, delay, positionX, positionY, scaleXY, duration){
		var instanceRef = this;

		this.stage = stage;
		this.sceneIMG = sceneIMG;
		this.scriptArray = scriptArray;
		this.audioTag = audiotag;
		this.transitionTime = transitionTime;
		this.delay = delay;

		this.postionX = positionX; //-50;
		this.postionY = positionY; //-50;
		this.scaleXY = scaleXY; //1.3;
		this.duration = duration; //800;

		var p = storylib.AltScene.prototype = new storylib.Scene(this.stage, this.sceneIMG, this.scriptArray, this.audioTag, this.transitionTime, this.delay);
		
		this.view = p.view;
		this.captionView = p.captionView;
		this.sceneCell = p.sceneCell;

		// public functions
		this.start = function(){ 
			isDestroyed = false;

			this.stage.addChild(p.view);
			
			if(sceneIMG instanceof createjs.Container){
				p.view.addChild(sceneIMG);
			}else{
				p.view.addChild(this.sceneCell);
			}
			
			stage.addChild(this.captionView);

			this.startNarrationScript();

			this.view.scaleX = this.view.scaleY = this.scaleXY;
			this.view.x = this.postionX;
			this.view.y = this.postionY;
			createjs.Tween.get(this.view).to({scaleX:1, scaleY:1, x:0, y:0}, this.duration); 

			this.captionView.scaleX = this.captionView.scaleY = this.scaleXY;
			this.captionView.x = this.postionX;
			this.captionView.y = this.postionY;
			createjs.Tween.get(this.captionView).to({scaleX:1, scaleY:1, x:0, y:0}, this.duration); 
			
		}

		this.destroy = function(){ p.destroy(); }

		this.startNarrationScript = function(){
			// play audio asset
			if(isDestroyed) return; // if destroyed don't play audio

			if(this.audioTag) lowLag.stopAndPlay(this.audioTag); // play audio
			
			var scriptData = scriptArray[0];
			createNarrationText(scriptData.text, scriptData.width, scriptData.height, scriptData.x, scriptData.y, scriptData.xOffSet, scriptData.yOffSet);
		}

		function createNarrationText(text, width, height, xPos, yPos, view, xOffset, yOffset){
			var instructions = new createjs.Container(); 
			var instructionText = createText(text, FONT_STYLE_1, createjs.Graphics.getRGB(0,0,0,1), 0, 0, width, height); // text, fontSettings, hexColor, x, y, width, height
			instructionText.lineHeight = 28;
			
			if(!xOffset) xOffset = -10;
			if(!yOffset) yOffset = -10;

			var instructionBackground = createSquare(width, height, instructionText.x + xOffset, instructionText.y + yOffset, createjs.Graphics.getRGB(255,252,0,1), createjs.Graphics.getRGB(0,0,0,1));
			instructions.addChild(instructionBackground);
			instructions.addChild(instructionText);
			p.captionView.addChild(instructions);
			instructions.x = xPos;
			instructions.y = yPos;
		}		

	})

	createjs.EventDispatcher.initialize(storylib.NarrationScene.prototype);

	window.storylib.NarrationScene = storylib.NarrationScene;


/// ScriptData value object
	(storylib.ScriptData = function(text, width, height, x, y, captionDirection, delayInDisplay, xOffSet, yOffSet){
		this.text = text;
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
		this.xOffSet = xOffSet;
		this.yOffSet = yOffSet;
		this.captionDirection = captionDirection;
		this.delayInDisplay = delayInDisplay;
	});

	window.storylib.ScriptData = storylib.ScriptData;


//Caption bubble Objects
	(storylib.CaptionBubble = function(direction) {
		this.initialize();
		switch(direction){
			case "bottomLeft":
			this.shape_1 = new createjs.Shape();
			this.shape_1.graphics.f("#FFFFFF").ss(1.5,1,1).p("AKykCIAAEMQAABjhHBHQhGBGhjAAInEAAQALBCg0BAQhqCAlMgJQDUghAkhwQAMgigIgnIgKgfIjSAAQhjAAhHhGQhGhGAAhkIAAkMQAAhkBGhGQBHhGBjAAIODAAQBjAABGBGQBHBGAABkIAAAA").cp();
			this.shape_1.setTransform(77.5,56.5);
			this.addChild(this.shape_1);
			break;

			case "topRight":
			this.shape_2 = new createjs.Shape();
			this.shape_2.graphics.f("#FFFFFF").ss(1.5,1,1).p("AKykCIAAEMQAABjhHBHQhGBGhjAAInEAAQALBCg0BAQhqCAlMgJQDUghAkhwQAMgigIgnIgKgfIjSAAQhjAAhHhGQhGhGAAhkIAAkMQAAhkBGhGQBHhGBjAAIODAAQBjAABGBGQBHBGAABkIAAAA").cp();
			this.shape_2.setTransform(77.5,56.5,1,1,180);
			this.addChild(this.shape_2);
			break;

			case "topLeft":
			this.shape_3 = new createjs.Shape();
			this.shape_3.graphics.f("#FFFFFF").ss(1.5,1,1).p("AKykCIAAEMQAABjhHBHQhGBGhjAAInEAAQALBCg0BAQhqCAlMgJQDUghAkhwQAMgigIgnIgKgfIjSAAQhjAAhHhGQhGhGAAhkIAAkMQAAhkBGhGQBHhGBjAAIODAAQBjAABGBGQBHBGAABkIAAAA").cp();
			this.shape_3.setTransform(77.5,56.5,1,1,0,180,0);
			this.addChild(this.shape_3);
			break;

			case "bottomRight":
			this.shape_4 = new createjs.Shape();
			this.shape_4.graphics.f("#FFFFFF").ss(1.5,1,1).p("AKykCIAAEMQAABjhHBHQhGBGhjAAInEAAQALBCg0BAQhqCAlMgJQDUghAkhwQAMgigIgnIgKgfIjSAAQhjAAhHhGQhGhGAAhkIAAkMQAAhkBGhGQBHhGBjAAIODAAQBjAABGBGQBHBGAABkIAAAA").cp();
			this.shape_4.setTransform(77.5,56.5,1,1,0,0,180);
			this.addChild(this.shape_4);
			break;

		}
		
	}).prototype = new createjs.Container();


 /// DiscussionDisplay Object
 	(storylib.DiscussionDisplay = function(imgs, width, height, id) {
		this.initialize();

		this.isInteractiveDisplay = true;

		var soundInstance;
		var isPlaying = false;
		var instanceRef = this;

		var arthurHasBeenClicked = false;
		var busterHasBeenClicked = false;
		var sueEllenHasBeenClicked = false;

		(storylib.SCBackground = function() {
			switch(id){
				default:
				case 1:
				this.initialize(imgs.sc01_discussion_1_jpg);
				break;

				case 2:
				this.initialize(imgs.sc02_discussion_2_jpg);
				break;

				case 3:
				this.initialize(imgs.sc03_discussion_2_jpg);
				break;

				case 4:
				this.initialize(imgs.sc06_discussion_2_jpg);
				break;
			}
			
		}).prototype = new createjs.Bitmap();

		(storylib.Arthur = function() {
			switch(id){
				default:
				case 1:
				case 2:
				case 3:
				this.initialize(imgs.arthur_png);
				break;

				case 4:
				this.initialize(imgs.arthur6_png);
				break;
			}
				
		}).prototype = new createjs.Bitmap();

		(storylib.ArthurSelected = function() {
			switch(id){
				default:
				case 1:
				case 2:
				case 3:
				this.initialize(imgs.arthur_selected_png);
				break;

				case 4:
				this.initialize(imgs.arthur6_selected_png);
				break;
			}
				
		}).prototype = new createjs.Bitmap();
		

		(storylib.ArthurBubble = function() {
			switch(id){
				default:
				case 1:
				this.initialize(imgs.arthur_bubble_png);
				break;

				case 2:
				this.initialize(imgs.arthur_bubble2_png);
				break;

				case 3:
				this.initialize(imgs.arthur_bubble3_png);
				break;

				case 4:
				this.initialize(imgs.arthur_bubble6_png);
				break;
			}
		}).prototype = new createjs.Bitmap();

		(storylib.Buster = function() {
			switch(id){
				default:
				case 1:
				case 2:
				case 3:
				this.initialize(imgs.buster_png);
				break;

				case 4:
				this.initialize(imgs.buster6_png);
				break;
			}

			
		}).prototype = new createjs.Bitmap();

		(storylib.BusterSelected = function() {
			switch(id){
				default:
				case 1:
				case 2:
				case 3:
				this.initialize(imgs.buster_selected_png);
				break;

				case 4:
				this.initialize(imgs.buster6_selected_png);
				break;
			}

			
		}).prototype = new createjs.Bitmap();

		(storylib.BusterBubble = function() {
			switch(id){
				default:
				case 1:
				this.initialize(imgs.buster_bubble_png);
				break;

				case 2:
				this.initialize(imgs.buster_bubble2_png);
				break;

				case 3:
				this.initialize(imgs.buster_bubble3_png);
				break;

				case 4:
				this.initialize(imgs.buster_bubble6_png);
				break;

			}
		}).prototype = new createjs.Bitmap();

		(storylib.SueEllen = function() {
			switch(id){
				default:
				case 1:
				case 2:
				case 3:
				this.initialize(imgs.sue_ellen_png);
				break;

				case 4:
				this.initialize(imgs.sue_ellen6_png);
				break;
			}
			
		}).prototype = new createjs.Bitmap();

		(storylib.SueEllenSelected = function() {
			switch(id){
				default:
				case 1:
				case 2:
				case 3:
				this.initialize(imgs.sue_ellen_selected_png);
				break;

				case 4:
				this.initialize(imgs.sue_ellen6_selected_png);
				break;
			}
			
		}).prototype = new createjs.Bitmap();

		(storylib.SueEllenBubble = function() {
			switch(id){
				default:
				case 1:
				this.initialize(imgs.sue_ellen_bubble_png);
				break;

				case 2:
				this.initialize(imgs.sue_ellen_bubble2_png);
				break;

				case 3:
				this.initialize(imgs.sue_ellen_bubble3_png);
				break;

				case 4:
				this.initialize(imgs.sue_ellen_bubble6_png);
				break;
			}

		}).prototype = new createjs.Bitmap();

		// instances
		var scbackground = new storylib.SCBackground();
		this.addChild(scbackground);

		// createText is part if EaselJSUtil
		var instructions = new createjs.Container(); 
		var instructionText = createText("Let's see what they are really thinking... \nClick on Arthur, Sue Ellen, and Buster.", FONT_STYLE_1 , createjs.Graphics.getRGB(0,0,0,1), 10, 10, 500, 64); // text, fontSettings, hexColor, x, y, width, height
		instructionText.lineHeight = 28;
		var instructionBackground = createSquare(390, 70, instructionText.x - 10, instructionText.y - 10, createjs.Graphics.getRGB(255,252,0,1), createjs.Graphics.getRGB(0,0,0,1));
		instructions.addChild(instructionBackground);
		instructions.addChild(instructionText);
		this.addChild(instructions);
		instructions.x = 5;
		instructions.y = 5;

		var buster = new storylib.Buster();
		this.addChild(buster);

		var sueEllen = new storylib.SueEllen();
		this.addChild(sueEllen);

		var arthur = new storylib.Arthur();
		this.addChild(arthur);


		var arthurSelectContainer = new createjs.Container();
		var arthurdarkBG = createSquare(width, height, 0, 0, createjs.Graphics.getRGB(0,0,0,.5));
		arthurSelectContainer.addChild(arthurdarkBG);
		var arthurSelected = new storylib.ArthurSelected();
		arthurSelectContainer.addChild(arthurSelected);
		var arthurBubble = new storylib.ArthurBubble();
		arthurBubble.shadow = new createjs.Shadow("#000000", 5, 5, 1);
		arthurSelectContainer.addChild(arthurBubble);
		this.addChild(arthurSelectContainer);
		arthurSelectContainer.visible = false;


		var sueEllenSelectContainer = new createjs.Container();
		var sueEllendarkBG = createSquare(width, height, 0, 0, createjs.Graphics.getRGB(0,0,0,.5));
		sueEllenSelectContainer.addChild(sueEllendarkBG);
		var sueEllenSelected = new storylib.SueEllenSelected();
		sueEllenSelectContainer.addChild(sueEllenSelected);
		var sueEllenBubble  = new storylib.SueEllenBubble();
		sueEllenSelectContainer.addChild(sueEllenBubble);
		sueEllenBubble.shadow = new createjs.Shadow("#000000", 5, 5, 1);
		this.addChild(sueEllenSelectContainer);
		sueEllenSelectContainer.visible = false;


		var busterSelectContainer = new createjs.Container(); 
		var busterdarkBG = createSquare(width, height, 0, 0, createjs.Graphics.getRGB(0,0,0,.5));
		busterSelectContainer.addChild(busterdarkBG);
		var busterSelected = new storylib.BusterSelected();
		busterSelectContainer.addChild(busterSelected);
		var busterBubble  = new storylib.BusterBubble();
		busterSelectContainer.addChild(busterBubble);
		busterBubble.shadow = new createjs.Shadow("#000000", 5, 5, 1);
		this.addChild(busterSelectContainer);
		busterSelectContainer.visible = false;


		var arthurHitArea = createSquare(190, 324, 195, 200, createjs.Graphics.getRGB(0,0,0,1));
		this.addChild(arthurHitArea);
		arthurHitArea.alpha = 0.01;
		arthurHitArea.addEventListener("click", onClickArthurHA);
		arthurHitArea.cursor = "pointer";

		var sueEllenHitArea = createSquare(153, 297, 413, 212, createjs.Graphics.getRGB(0,0,0,1));
		this.addChild(sueEllenHitArea);
		sueEllenHitArea.alpha = 0.01;
		sueEllenHitArea.cursor = "pointer";
		sueEllenHitArea.addEventListener("click", onClickSueEllenHA);
		
		var busterHitArea = createSquare(108, 325, 632, 165, createjs.Graphics.getRGB(0,0,0,1));
		this.addChild(busterHitArea);
		busterHitArea.alpha = 0.01;
		busterHitArea.cursor = "pointer";
		busterHitArea.addEventListener("click", onClickBusterHA);
		
		function onClickArthurHA(){
			if(isPlaying) return;

			//logger("onClickArthurHA");
			arthurSelectContainer.visible = true;
			
			sueEllenSelectContainer.visible = false;

			busterSelectContainer.visible = false;
			
			arthurHasBeenClicked = true;
			checkCharClickNum();

			switch(id){
				case 1:
				playSound("disc1_arthur_imgetting", characterAudioComplete);
				break;

				case 2:
				playSound("disc2_arthur_usuallybuster", characterAudioComplete);
				break;

				case 3:
				playSound("disc3_arthur_cantsueellentell", characterAudioComplete);
				break;

				case 4:
				playSound("disc4_arthur_iwrotealetter", characterAudioComplete);
				break;

			}
		}

		function onClickSueEllenHA(){
			if(isPlaying) return;

			//logger("onClickSueEllenHA");
			arthurSelectContainer.visible = false;

			sueEllenSelectContainer.visible = true;

			busterSelectContainer.visible = false;
			
			sueEllenHasBeenClicked = true;
			checkCharClickNum();

			switch(id){
				case 1:
				playSound("disc1_sueellen_itspretty", characterAudioComplete);
				break;

				case 2:
				playSound("disc2_sueellen_arthurismaking", characterAudioComplete);
				break;

				case 3:
				playSound("disc3_sueellen_iamsoangry", characterAudioComplete);
				break;

				case 4:
				playSound("disc4_sueellen_arthurisntstopping", characterAudioComplete);
				break;

			}
		}

		function onClickBusterHA(){
			if(isPlaying) return;

			//logger("onClickBusterHA");
			arthurSelectContainer.visible = false;

			sueEllenSelectContainer.visible = false;

			busterSelectContainer.visible = true;
			
			busterHasBeenClicked = true;
			checkCharClickNum();

			switch(id){
				case 1:
				playSound("disc1_buster_arthurcracks", characterAudioComplete);
				break;

				case 2:
				playSound("disc2_buster_arthurwaspretty", characterAudioComplete);
				break;

				case 3:
				playSound("disc3_buster_sueellenisupset", characterAudioComplete);
				break;

				case 4:
				playSound("disc4_buster_arthursletterwas", characterAudioComplete);
				break;

			}
		}

		function checkCharClickNum(){
			//instructions.visible = false;
			if(arthurHasBeenClicked && busterHasBeenClicked && sueEllenHasBeenClicked){
				switch(id){
					case 1:
						instanceRef.dispatchEvent("SCO1_DISCUSS_COMPLETE");
						break;

					case 2:
						instanceRef.dispatchEvent("SCO2_DISCUSS_COMPLETE");
						break;

					case 3:
						instanceRef.dispatchEvent("SCO3_DISCUSS_COMPLETE");
						break;

					case 4:
						instanceRef.dispatchEvent("SCO4_DISCUSS_COMPLETE");
						break;
				}
				
			}
		}

		function playSound(audioTag, handlerCompleteFunction) {
			
			lowLag.stopAndPlay(audioTag);
			
		}

		function stopSound(){
			//soundInstance.stop();
			lowLag.stop();
			isPlaying = false;
			//soundInstance.removeEventListener("complete", startSoundPlayComplete);
			//soundInstance.removeEventListener("complete", headSoundComplete);
			//soundInstance.removeEventListener("complete", characterAudioComplete);
		}

		function startSoundPlayComplete(){
			soundInstance.removeEventListener("complete", startSoundPlayComplete);
			isPlaying = false;
			playSound("disc1234_header", headSoundComplete);
		}

		function headSoundComplete(){
			soundInstance.removeEventListener("complete", headSoundComplete);
			isPlaying = false;
		}

		function characterAudioComplete(){
			soundInstance.removeEventListener("complete", characterAudioComplete);
			isPlaying = false;
		}

		this.start = function(){
			playSound("disc-thinkingintro", startSoundPlayComplete);
		}

		this.stop = function(){
			stopSound();
		}

		this.reset = function(){
			arthurHasBeenClicked = false;
			busterHasBeenClicked = false;
			sueEllenHasBeenClicked = false;
			arthurSelectContainer.visible = false;
			sueEllenSelectContainer.visible = false;
			busterSelectContainer.visible = false;
			instructions.visible = true;
		}

		createjs.EventDispatcher.initialize(storylib.DiscussionDisplay.prototype);

	}).prototype = new createjs.Container();

	window.storylib.DiscussionDisplay = storylib.DiscussionDisplay;


/// QuestionDisplay Object
 	(storylib.QuestionDisplay = function(img, width, height, backgroundColor, QuestionText, x, y) {
		this.initialize();

		var instanceRef = this;

		var xPos = (!x) ? width/2 : x;
		var yPos = (!y) ? 210 : y;

		(storylib.QuestionBackground = function() {
			var bgshape = createSquare(width, height, 0, 0, backgroundColor); //width, height, x, y, fillColor, strokeColor, radius
			this.initialize();

			this.addChild(bgshape)
		}).prototype = new createjs.Container();

		(storylib.BorderEdge = function() {
			this.initialize(img);
		}).prototype = new createjs.Bitmap();

		// instances
		var background = new storylib.QuestionBackground();
		this.addChild(background);

		// background image
		var borderEdge = new storylib.BorderEdge();
		this.addChild(borderEdge);
		borderEdge.x = 0;
		borderEdge.y = 0;

		// createText is part if EaselJSUtil
		var instructions = new createjs.Container(); 
		var instructionText = createText(QuestionText, FONT_STYLE_QUESTION, createjs.Graphics.getRGB(2,38,90,1), 10, 10, width, 120); // text, fontSettings, hexColor, x, y, width, height
		instructionText.textAlign = "center";
		instructionText.lineHeight = 50;
		instructions.addChild(instructionText);
		instructions.x = xPos;
		instructions.y = yPos;
		this.addChild(instructions);

		function ready(){
			instanceRef.dispatchEvent("QUESTION_COMPLETE");
		}

		createjs.EventDispatcher.initialize(storylib.QuestionDisplay.prototype);

	}).prototype = new createjs.Container();

	window.storylib.QuestionDisplay = storylib.QuestionDisplay;


 /// EndingSequenceArthur
 	(storylib.EndingSequenceArthur = function(arrowSheet, endingSelect, eventChar1, eventChar2, selectChoiceAudio, ending1Array, ending2Array, ending3Array) {
		this.initialize();

		var isEnd01Complete = false;
		var isEnd03Complete = false;
		var isEnd02Complete = false;

		var currentEnding = "";

		var instanceRef = this;

		var endingSequenceArray = [];

		var index = 0;

		// create spritesheet and assign the associated data.
        var spriteSheet  = new createjs.SpriteSheet({
            images: [arrowSheet],
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

		(storylib.nextButton = function() {
			var buttonElement = new createjs.BitmapAnimation(spriteSheet);
			var helper = new createjs.ButtonHelper(buttonElement, "nextUp", "nextOver", "nextOn", true, buttonElement);
		 	this.addChild(buttonElement);
		}).prototype = p = new createjs.Container();

		(storylib.backButton = function() {
			var buttonElement = new createjs.BitmapAnimation(spriteSheet);
			var helper = new createjs.ButtonHelper(buttonElement, "backUp", "backOver", "backOn", false, buttonElement);
		 	this.addChild(buttonElement);
		}).prototype = p = new createjs.Container();

		var displaySequence = new createjs.Container();
		this.addChild(displaySequence);

		// var endingSelect = new displaylib.CharacterActionsDisplay("What should Arthur do?\nMake a choice and see\nwhat happens.", ["Keep making dog jokes about\nSue Ellen", 207], 
		// 	["Stop making dog jokes", 285], ["Stop making dog jokes\nAND apologize to Sue Ellen", 338], imgs.arthur_pic_png, imgs.sueellen_footer_button_png, imgs.buster_footer_button_png, 
		// 	imgs, [202,328,262], [264,318]);
		this.addChild(endingSelect);
		endingSelect.visible = false;

		var nextButton = new storylib.nextButton();
		this.addChild( nextButton );
		nextButton.x = stageWidth - 63;
		nextButton.y = stageHeight/2 - 128/2;
		nextButton.visible = false;
		nextButton.getChildAt(0).addEventListener("click", onNextSequence);

		var backButton = new storylib.backButton();
		this.addChild( backButton );
		backButton.x = 0;
		backButton.y = stageHeight/2 - 128/2;
		backButton.visible = false;
		backButton.getChildAt(0).addEventListener("click", onBackSequence);

		endingSelect.addEventListener("FOOTER_CHAR1_SELECTED", function(){
			instanceRef.dispatchEvent(eventChar1);
		});
		endingSelect.addEventListener("FOOTER_CHAR2_SELECTED", function(){
			instanceRef.dispatchEvent(eventChar2);
		});

		endingSelect.addEventListener("FIRST_ENDING_SELECTED", function(){
			instanceRef.dispatchEvent("END_SEQ_FIRST_ENDING_SELECTED");
			endingSequenceArray = getEndingSequences(1);
			startSequence();
		});
		endingSelect.addEventListener("SECOND_ENDING_SELECTED", function(){
			instanceRef.dispatchEvent("END_SEQ_SECOND_ENDING_SELECTED");
			endingSequenceArray = getEndingSequences(2);
			startSequence();
		});
		endingSelect.addEventListener("THIRD_ENDING_SELECTED", function(){
			instanceRef.dispatchEvent("END_SEQ_THIRD_ENDING_SELECTED");
			endingSequenceArray = getEndingSequences(3);
			startSequence();
		});
		var goBackToMenu = false;
		var backToCharacters = false;
		
		//public methods
		this.start = function(){
			lowLag.stopAndPlay(selectChoiceAudio);
			isEnd01Complete = false;
			isEnd02Complete = false;
			isEnd03Complete = false;
			endingSelect.visible = true;
			displaySequence.visible = false;
			nextButton.visible = false;
			backButton.visible = false;
		}

		function soundPlayComplete(){
			//isPlaying = false;
			soundInstance.removeEventListener("complete", soundPlayComplete);
		}

		function getEndingSequences(endingNumber){
			var sequences = [];

			//sequences.push( new displaylib.EndingSequenceItem(imgs.arthur_ending1_question1_jpg, "art_nowthatyouveseen") );
			//sequences.push( new displaylib.EndingSequenceItem(imgs.the_end_jpg, "art_nowthatyouveseen") );

			currentEnding = endingNumber;

			switch(endingNumber){
				case 1:
				sequences = ending1Array;
				break;

				case 2:
				sequences = ending2Array;
				break;

				case 3:
				sequences = ending3Array;
				break;
			}
			

			return sequences;
		}

		function startSequence(){
			index = 0;
			displaySequence.visible = true;
			displaySequence.addChild(endingSequenceArray[index]);
			lowLag.stopAndPlay(endingSequenceArray[index].audioID);
			endingSelect.visible = false;
			nextButton.visible = true;
			backButton.visible = true;
			goBackToMenu = false;
		}

		function onNextSequence(obj){
			if(goBackToMenu){
				lowLag.stopAndPlay(selectChoiceAudio);
				endingSelect.visible = true;
				displaySequence.visible = false;
				goBackToMenu = false;
				nextButton.visible = false;
				backButton.visible = false;
				return;
			}

			if(backToCharacters){
				endingSelect.visible = false;
				displaySequence.visible = false;
				instanceRef.dispatchEvent("DISPLAY_CHOOSE_CHARACTER_ENDING");
				backToCharacters = false;
				nextButton.visible = false;
				backButton.visible = false;
				return;
			}

			index++;

			if(index == 3){
				switch(currentEnding){
					case 1:
					isEnd01Complete = true;
					break;

					case 2:
					isEnd02Complete = true;
					break;

					case 3:
					isEnd03Complete = true;
					break;
				}
				
			}

			//special case - question seqence - not all ending reached
			if(index == 4){
				//logger("isEnd01Complete: " + isEnd01Complete + " isEnd02Complete:" + isEnd02Complete + " isEnd03Complete:" + isEnd03Complete);
				if(isEnd01Complete && isEnd02Complete && isEnd03Complete){
					index = 5; // go to best answer
				}else{
					nextButton.visible = true;
					backButton.visible = true;
					// button needed to go back to Arthur
					//goBackToMenuButton.visible = true;
					goBackToMenu = true;
				}
				
			}

			if(index > 4){
				backButton.visible = false;
			}

			if(index == 6){
				nextButton.visible = true;
				backButton.visible = true;
				// button needed to go back to choose characters
				//backToCharactersButton.visible = true;
				backToCharacters = true;
			}

			if(index <= (endingSequenceArray.length - 1)){
				displaySequence.addChild(endingSequenceArray[index]);
				lowLag.stopAndPlay(endingSequenceArray[index].audioID);
			}else{
				logger("EndingSequence - End of Sequence");
			}
			

		}

		function onBackSequence(obj){
			index--;

			goBackToMenu = false;
			backToCharacters = false;

			if(index < 0){
				// go back to select character Screen
				lowLag.stopAndPlay(selectChoiceAudio);
				endingSelect.visible = true;
				displaySequence.visible = true;
				nextButton.visible = false;
				backButton.visible = false;
			}else{
				displaySequence.addChild(endingSequenceArray[index]);
				lowLag.stopAndPlay(endingSequenceArray[index].audioID);
			}

		}

		createjs.EventDispatcher.initialize(storylib.EndingSequenceArthur.prototype);

	}).prototype = new createjs.Container();

	createjs.EventDispatcher.initialize(storylib.EndingSequenceArthur.prototype);

	window.storylib.EndingSequenceArthur = storylib.EndingSequenceArthur;

}(window)); 