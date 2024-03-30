var Prompts = function (gM) {

	var alertPopup, cc_box, _this = this, gameManager = gM, numHousingPrompts = 0;

	var TAKE_A_BREATH = 900;

	this.init = function(){

		
		// ~ Closed Captioning ~
		
		cc_box = new createjs.Container();
		cc_box.landingPos = new Point(0, -10);
		cc_box.x = cc_box.landingPos.x;
		cc_box.y = cc_box.landingPos.y;
		var ccbg = new createjs.Shape();
		ccbg.graphics.beginFill("rgba(0, 0, 0, 0.7)").drawRect(0, 0, 1024, 113);
		var ccbmp = new lib.caption_bg();
		//_log(">> ccbmp: "+ccbmp);
		ccbmp.mouseEnabled = false;
		
		cc_box.promptText = new createjs.Text("", "40px RefrigeratorDeluxe-Heavy", "white");
		
		/*
		cc_box.textDup1 = new createjs.Text("That's not fair sharing!", "40px refrigerator-deluxe", "#0d4a44");
		
		cc_box.textDup2 = new createjs.Text("That's not fair sharing!", "40px refrigerator-deluxe", "#0d4a44");
		
		cc_box.textDup3 = new createjs.Text("That's not fair sharing!", "40px refrigerator-deluxe", "#0d4a44");
		
		cc_box.textDup4 = new createjs.Text("That's not fair sharing!", "40px refrigerator-deluxe", "#0d4a44");
		*/

		cc_box.promptText.textAlign =  "center";
		cc_box.promptText.textBaseline = "middle";
		cc_box.promptText.lineHeight = 36;
		
		/*
		cc_box.promptText.textAlign =  cc_box.textDup1.textAlign =  cc_box.textDup2.textAlign =  cc_box.textDup3.textAlign =  cc_box.textDup4.textAlign = "center";
		cc_box.promptText.textBaseline = cc_box.textDup1.textBaseline  =  cc_box.textDup2.textBaseline  =  cc_box.textDup3.textBaseline  = cc_box.textDup4.textBaseline  = "middle";
		cc_box.promptText.lineHeight = cc_box.textDup1.lineHeight = cc_box.textDup2.lineHeight = cc_box.textDup3.lineHeight = cc_box.textDup4.lineHeight = 36;
		*/

		var PROMPT_TEXT_POS = {x:512, y:38};
		var PROMPT_OUTLINE = 2;
		
		cc_box.promptText.x = PROMPT_TEXT_POS.x;
		cc_box.promptText.y = PROMPT_TEXT_POS.y;
		/*
		cc_box.textDup1.x = PROMPT_TEXT_POS.x + PROMPT_OUTLINE;
		cc_box.textDup2.x = PROMPT_TEXT_POS.x - PROMPT_OUTLINE;
		cc_box.textDup3.x = PROMPT_TEXT_POS.x + PROMPT_OUTLINE;
		cc_box.textDup4.x = PROMPT_TEXT_POS.x - PROMPT_OUTLINE;
		cc_box.textDup1.y = PROMPT_TEXT_POS.y + PROMPT_OUTLINE;
		cc_box.textDup2.y = PROMPT_TEXT_POS.y - PROMPT_OUTLINE;
		cc_box.textDup3.y = PROMPT_TEXT_POS.y - PROMPT_OUTLINE;
		cc_box.textDup4.y = PROMPT_TEXT_POS.y + PROMPT_OUTLINE;
		*/
		
		cc_box.promptText.shadow = new createjs.Shadow("#0d5a54", 0, 0, 10);
		
		var cc_cb = new lib.continue_button();
		var cc_cbHA = new createjs.Shape();
		cc_cbHA.graphics.beginFill("red").drawRect(cc_cb.nominalBounds.x, cc_cb.nominalBounds.y, cc_cb.nominalBounds.width, cc_cb.nominalBounds.height);
		cc_cb.hitArea = cc_cbHA;
		
		cc_cb.x = 110, cc_cb.y = 95;
		//cc_box.addChild(ccbmp, cc_box.textDup1, cc_box.textDup2, cc_box.textDup3, cc_box.textDup4, cc_box.promptText);
		cc_box.addChild(ccbmp, cc_box.promptText);
		cc_box.on("click", function (e){_this.showPrompt(false);});

		// ~ Alerts ~
		var ALERT_TEXT_POS = {x:30, y:50};
		var ALERT_OUTLINE = 1;
		
		alertPopup = new createjs.Container();
		var alertbg = new lib.instructionbox_large();
		alertbg.mouseEnabled = false;
		alertbg.scaleX = 0.7;
		alertbg.scaleY = 0.5;
		
		
		alertPopup.alerttext = new createjs.Text(" ", "48px 'RefrigeratorDeluxe-Heavy'", "#0d3a34");

		alertbg.x = 250;
		alertPopup.x = 100;
		alertPopup.y = 100;

		alertPopup.alerttext.textAlign = "left";
		alertPopup.alerttext.textBaseline = "middle";
		alertPopup.alerttext.lineWidth = 600;
		alertPopup.alerttext.lineHeight = 48;
		
		var cb = new lib.continue_button();
		cb.x = 350, cb.y = 135;
		var cbHA = new createjs.Shape();
		cbHA.graphics.beginFill("red").drawRect(cb.nominalBounds.x, cb.nominalBounds.y, cb.nominalBounds.width, cb.nominalBounds.height);
		cb.hitArea = cbHA;

		//alertPopup.addChild(alertbg, alertPopup.textDup1, alertPopup.textDup2, alertPopup.textDup3, alertPopup.textDup4, alertPopup.alerttext, cb);
		alertPopup.addChild(alertbg, alertPopup.alerttext, cb);
		alertPopup.alerttext.x = ALERT_TEXT_POS.x;
		alertPopup.alerttext.y = ALERT_TEXT_POS.y;
		
	}
	// ALERTS are floating popups with text!  Show and hide them with these handy functions.
	//------------------------------------------------------------------------------------------------------
	this.showAlert = function (popupText, clickFunction){
		////_log(" ALERT :    " + popupText);
		gameManager.displayInGame(alertPopup,true);
		alertPopup.alerttext.text = alertPopup.textDup1.text = alertPopup.textDup2.text = alertPopup.textDup3.text = alertPopup.textDup4.text = popupText;
		alertPopup.addEventListener("click", clickFunction);
	};
	this.hideAlert = function (){
		//createjs.Tween.removeTweens(alertPopup);
		gameManager.displayInGame(alertPopup,false);
	};

	// Play instructions for feeding creatures
	//--------------------------------------------
	this.introduceFeeding = function (){
		////_log("INTRODUCE FEEDING eh");
		gameManager.voManager.stopSound(false);
		var introVO = (gameManager.currentPen.numCreatures() > 1) ? "giveeachsame" : "pickandfeed";
		_this.showPromptAfter(true, gameManager.audioData.captionForId(introVO), 600);
		gameManager.voManager.playSoundAfter(introVO, 1, 600);
		gameManager.introducedFeeding = true;
	};
	
	// Play instructions for choosing food
	//--------------------------------------------
	this.introduceChoosing = function (){
		gameManager.voManager.stopSound(false);
		var actionVO, actionText, numCreaturesChoosing = gameManager.currentPen.creatures.length;
		if (gameManager.gameRound < 4){
			_this.playChooseIntro();
		} else {
			_this.playChooseAction();
		}
	};

	// Play instructions for dividing food among 2 or more creatures
	//-------------------------------------------------------------------------------------
	this.introduceSharing = function (){
		////_log("INTRODUCE SHARING eh");
		_this.showPrompt(true, "Give each creature the\nsame amount of food. ");
		gameManager.voManager.playSound("giveeachsame", 1);
		gameManager.introducedSharing = true;
	};

	// showPrompt(bool toShow, string promptText)
	// ===========================================
	// If true, show, or if false, hide a reminder that food must be fairly shared.
	//-----------------------------------------------------------------------------
	this.showPrompt = function (toShow, promptText){
		_log("%c---------------------------------showPrompt? " + toShow + ", " + promptText,"color:darkgreen; font-weight:bold");
		
		createjs.Tween.removeTweens(cc_box);
		
		if(toShow && (gameManager.ccOn || gameManager.gameView == "splash") && promptText != ""){
			_log("PROMPT    show,     " + promptText);
			if(promptText != undefined && promptText != null){
				//cc_box.promptText.text = cc_box.textDup1.text = cc_box.textDup2.text = cc_box.textDup3.text = cc_box.textDup4.text = promptText;
				cc_box.promptText.text = promptText;
			}	
			cc_box.x = cc_box.landingPos.x;
			cc_box.y = cc_box.landingPos.y;
			//cc_box.y = cc_box.landingPos.y - 100;
			gameManager.displayInGame(cc_box,true);
			gameManager.menuHelper.raiseMenu();

		} else {
			_log("PROMPT    hide: toShow ? " + toShow + ", ccOn? " + gameManager.ccOn);
			if(!gameManager.voManager.busy()){
				gameManager.displayInGame(cc_box,false);
			} else {
				_log("  (actually, not hiding it cause Oscar is still speaking.)");
			}
		}
	};

	this.raisePrompts = function(){
		gameManager.displayInGame(alertPopup,true,true,false);
		gameManager.displayInGame(cc_box,true,true,false);
	};

	// showPrompt(bool toShow, string promptText, int ms)
	// ===================================================
	// Show, or not, the provided prompt text, after /ms/ milliseconds.
	//---------------------------------------------------------------------------------------------
	this.showPromptAfter = function (toShow, promptText, ms){
		createjs.Tween.get(cc_box).wait(ms).call(_this.showPrompt, [toShow, promptText],_this);
	};
	
	this.keepPromptOnTop = function (){
		if(gameManager.currentPen !== null && gameManager.currentPen.inZoom.contains(cc_box)){
			gameManager.currentPen.inZoom.addChildAt(cc_box, gameManager.currentPen.inZoom.getNumChildren());
		} 
	};

	this.playNewArrivalIntro = function (){
		////_log(" ~ ~ Announcing a new creature ~ ~ ");
		if(gameManager.gameView == "overview"){
			/*
			if(gameManager.voManager.busy()){
				createjs.Tween.get(_this).wait(100).call(_this.playNewArrivalIntro);
			} else {
			*/
				gameManager.voManager.playSoundAfter(gameManager.audioData.randomSoundNameFrom("newCreatureVOs"), 1, TAKE_A_BREATH);
				gameManager.prompts.showPromptAfter(true, "A new creature has arrived!", TAKE_A_BREATH);
			/*
			}	
			*/
		}
	};
	
	this.playHouseCreaturePrompt = function (){
		_log(" ...^... playHouseCreaturePrompt");
		if(gameManager.targetCreature != null || gameManager.growingCreature != null){

			var allCreatures = gameManager.getAllCreatures();
			numHousingPrompts++;

			if(allCreatures.length <= 4){
				gameManager.voManager.playSoundAfter(gameManager.is_touch_device() ? "taptoplace" : "clicktoplace", 1, TAKE_A_BREATH*2);
				_this.showPromptAfter(true, gameManager.is_touch_device() ? "Tap an area to put the new creature there." : "Click an area to put the new creature there.", TAKE_A_BREATH);
			} else if(numHousingPrompts%2 == 0){
				gameManager.voManager.playSoundAfter(gameManager.audioData.randomSoundNameFrom("houseCreatureVOs_stage2"), 1, TAKE_A_BREATH*2);
				_this.showPromptAfter(true, "Choose a new home for it.", TAKE_A_BREATH);
			} else {
				gameManager.voManager.playSoundAfter(gameManager.audioData.randomSoundNameFrom("houseCreatureVOs_stage3"), 1, TAKE_A_BREATH*2);
				_this.showPromptAfter(true, "Where do you want to put it?", TAKE_A_BREATH);
			}
			gameManager.helpPrompt.setHint("house", null);
		}

		
	};

	this.playChooseIntro = function (){
	
		//gameManager.voManager.stopSound(false);
				
		var introVO = "";
		var solo = gameManager.currentPen.numCreatures() == 1;
		
		if (gameManager.gameRound == 0){
			introVO = solo ? "tellingshape" : "tellingshapes";
		} else if (gameManager.gameRound == 1){
			introVO = solo ? "tellingcolour" : "tellingcolours";
		} else if (gameManager.gameRound == 2){
			introVO = solo ? "tellingpattern" : "tellingpatterns";
		} else if (gameManager.gameRound >= 3){
			introVO = solo ? "tellingkind" : "thinkingdifferent";
		}

		gameManager.voManager.playSoundAfter(introVO, 1, TAKE_A_BREATH*2);
		_this.showPromptAfter(true, gameManager.audioData.captionForId(introVO), TAKE_A_BREATH*2);
	};

	this.playChooseAction = function (){
		gameManager.cancelVoicePrompts();
		
		var numCreaturesChoosing = gameManager.currentPen.numCreatures();
		var actionVO, actionText;

		if (numCreaturesChoosing > 1){
			if (gameManager.gameRound < 4){
				actionVO = "chooseforall";
			} else {
				actionVO = gameManager.audioData.randomSoundNameFrom("chooseVOs");
			}
			
			gameManager.voManager.playSoundAfter(actionVO, 1, TAKE_A_BREATH);
			_this.showPromptAfter(true, gameManager.audioData.captionForId(actionVO), TAKE_A_BREATH);
		} else {
			_this.showPromptAfter(false, "", 500);
		}
	
	};
	
	
	
	this.init();

};