/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  HelpPrompt
  
  parameters:
	DisplayObject /helpButton/: the button you press to launch the prompt
	Stage /gameStage/: the game stage.

*/

var HelpPrompt = function (helpButton, gameStage, gameManager) {

	////_log("HELP_PROMPT, gameStage is " + gameStage);
	
	var _this = this;
	this.gameStage = gameStage;
	this.gameManager = gameManager;
	var hand = new lib.instruction_hand();
	var helpBtn = helpButton;

	var currentHint;
	
	var centerPt = new Point(this.gameStage.canvas.width/2, this.gameStage.canvas.height/2);
	
	// Size of helping hand
	var BASE_SCALE = 0.4;
	
	// How long to wait for the players to act before prompting them
	var PATIENCE = 12000;

	var numFeedingHints = 0;
	var numDeliveryHints = 0;
	var numHousingHints = 0;

	hand.name = "hand";
	hand.scaleX = hand.scaleY = BASE_SCALE;
	hand.addEventListener("tapComplete", function (event) {createjs.Tween.get(hand).wait(200).to({x:hand.bouncePt.x, y:hand.bouncePt.y, alpha:0}, 500).call(_this.hide); });
	hand.mouseEnabled = false;

	// hide
	// ====
	// Hide the hand and wait for the player to act
	//-----------------------------------------------------------------------------
	this.hide = function (e){
		////_log("removing " + hand + " from " + _this.gameStage);
		_this.gameStage.removeChild(hand);
		_this.reset();
	}
	
	var doTap = function (){
		hand.gotoAndPlay("tap");
	}
	
	var vicariousTap = function (){
		if(currentHint.target !== null){
			////_log("trying to trigger a PRESS on " + currentHint.target);
			var evt = new createjs.Event("PRESS_HAND", true);
			evt.data = {target:currentHint.target};
			helpBtn.dispatchEvent(evt);
		}
	}
	
	this.reset = function (){
		////_log(".................... hinting RESET (clearing tweens and calling last hint in " + PATIENCE + " ms)");
		createjs.Tween.removeTweens(hand);
		hand.scaleX = hand.scaleY = BASE_SCALE;
		if(currentHint != undefined && currentHint.type != null){
			createjs.Tween.get(hand).wait(PATIENCE).call(_this.showLastHint);
		}
	}
	
	// tapOn
	// =====
	// Show the hand tapping on /displayObj/
	//-----------------------------------------------
	this.tapOn = function (displayObj, startPt, setupTime){
		
		var tapPt = (displayObj.parent == null) ? new Point(displayObj.x, displayObj.y) : displayObj.localToGlobal(0,0);
		
		startPt = startPt || new Point( tapPt.x + ( tapPt.x <= centerPt.x ? 50 : -50 ) , tapPt.y + ( tapPt.y <= centerPt.y ? 100 : -100 ) );
		setupTime = setupTime || 500;
		var hoverTime = 300;
		
		////_log("TAP on " + displayObj + " at " + tapPt.x + ", " + tapPt.y + " vs " + centerPt);
		
		hand.x = startPt.x;
		hand.y = startPt.y;
		hand.bouncePt = new Point(  tapPt.x + (startPt.x - tapPt.x)/5 , tapPt.y + (startPt.y - tapPt.y)/5  );
		hand.scaleX = BASE_SCALE/2;
		hand.scaleY = BASE_SCALE/2;
		hand.alpha = 0;
		_this.gameStage.removeChild(hand);
		//_this.gameStage.addChild(hand);
		
		createjs.Tween.get(hand).to({alpha:1, scaleX:BASE_SCALE, scaleY:BASE_SCALE, x:tapPt.x, y:tapPt.y}, setupTime).wait(hoverTime).call(doTap);
		
	}
	

	// showHint
	// ========
	// String /hintType/ : "house", "deliverFood", "selectFood", "misc"
	//------------------------------------------------------------------
	this.showHint = function (hintType, hintTarget){
		//_log("   !hint!   " + hintType + ", " + hintTarget);
		//createjs.Tween.removeTweens(hand);
		if(hintType !== null){
			if (hintType == "misc"){
				miscHint(hintTarget);
			} if ( hintType == "house"){
				houseHint(hintTarget);
			} else if ( hintType == "deliver_food"){
				deliverFoodHint(hintTarget);
			}  else if ( hintType == "select_food"){
				selectFoodHint(hintTarget);
			}  else if ( hintType == "switch_pen"){
				switchPenHint(hintTarget);
			}  else if ( hintType == "use_garbage"){
				useGarbageHint(hintTarget);
			}  else if ( hintType == "empty_garbage"){
				emptyGarbageHint(hintTarget);
			}  else if ( hintType == "exit_zoom"){
				exitZoomHint(hintTarget);
			}  else if ( hintType == "feed_creatures"){
				feedCreaturesHint();
			}
			createjs.Tween.removeTweens(hand);
			_this.showHintAfter(hintType, hintTarget, PATIENCE);
		}

	}
	
	// showHintAfter
	// =============
	// Play the specified hint after /ms/ milliseconds.
	//------------------------------------------------------------------
	this.showHintAfter = function (hintType, hintTarget, ms){
		createjs.Tween.get(hand).wait(ms).call(_this.showHint, [hintType, hintTarget]);
	}
	
	// showLastHint
	// ============
	// Replay the last hint played
	//------------------------------------------------------------------
	this.showLastHint = function (){
		//_log("     showing last hint, current hint is type " + currentHint.type + ", target " + currentHint.target);
		if(currentHint !== undefined && currentHint.type !== null){
			_this.showHint(currentHint.type, currentHint.target);
		}
	}
	
	
	// setHint
	// ========
	// String /hintType/ : "house", "deliver_food", "select_food", "misc", "exit_zoom", "feed_creatures"
	// DisplayObject hintTarget
	//------------------------------------------------------------------
	this.setHint = function (hintType, hintTarget){
		currentHint = {type:hintType, target:hintTarget};	
		_this.reset();
	
		//_log("... next hint will be ... " + hintType + ", " + hintTarget);
	}
	
	
	//   T H E   S P E C I F I C   H I N T   F U N C T I O N S 
	
	
	var miscHint = function (hintTarget){
		////_log("miscHint, tapping on " + hintTarget);
		_this.tapOn(hintTarget);
		currentHint = {type:"misc", target:hintTarget};
	}
	
	
	var feedCreaturesHint = function (){

		numFeedingHints++;
		currentHint = {type:"feed_creatures", target:null};

		var creature_vo;
		var theCreature;
		var hungryCreatures = [];
		var allCreatures = _this.gameManager.getAllCreatures();
		
		for(var i=0; i< allCreatures.length; i++){
			if(allCreatures[i].state == "hungry" && _this.gameManager.audioData.sound_data[allCreatures[i].creatureType+"voice"] != undefined){
				hungryCreatures.push(allCreatures[i]);
			}
		}

		var hint_vo = (_this.gameManager.is_touch_device()) ? 
			((hungryCreatures.length == 1) ? "taptofeedit" : "taptofeedthem" ) :  
			((hungryCreatures.length == 1) ? "clicktofeedit" : "clicktofeedthem" );
			//"clicktofeed";
		


		if(hungryCreatures.length > 0){
			theCreature = hungryCreatures[Math.floor(Math.random()*hungryCreatures.length)];
			creature_vo = theCreature.creatureType+"voice";
		}
		
		if(numFeedingHints%2==0){
			_this.gameManager.soundManager.playSound(creature_vo, 0);
		} else {
			_this.gameManager.voManager.playSound(hint_vo, 2);
			_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId(hint_vo));	
		}
		//_log("%chinting: feedCreatures", "background-color: lightskyblue");
	}
	
	var houseHint = function (hintTarget){
		//_this.tapOn(hintTarget);
		
		_log(" hey!    .    .     .     .     . houseHint");

		currentHint = {type:"house", target:null};
		var toHint = true;

		if(_this.gameManager.targetCreature !== null ){
			_this.gameManager[_this.gameManager.targetCreature.size + "_0"].open();
			_this.gameManager[_this.gameManager.targetCreature.size + "_1"].open();
			_this.gameManager[_this.gameManager.targetCreature.size + "_2"].open();
		} else if (_this.gameManager.growingCreature !== null){
			_this.gameManager[_this.gameManager.growingCreature.size + "_0"].open();
			_this.gameManager[_this.gameManager.growingCreature.size + "_1"].open();
			_this.gameManager[_this.gameManager.growingCreature.size + "_2"].open();
		} else {
			toHint = false;
		}
		if(toHint){
			numHousingHints++;
			var vo_hint1 = (_this.gameManager.is_touch_device()) ? "taptoplace" : "clicktoplace";
			var vo_hint2 = _this.gameManager.audioData.randomSoundNameFrom("houseCreatureVOs_stage2");
			var vo_hint3 = _this.gameManager.audioData.randomSoundNameFrom("houseCreatureVOs_stage3");

			var vo_hint = ((numHousingHints%3==1) ? vo_hint1 : (numHousingHints%3==2) ? vo_hint2 : vo_hint3);
			var vo_text = _this.gameManager.audioData.captionForId(vo_hint);

			_this.gameManager.voManager.playSound( vo_hint, 1);
			_this.gameManager.prompts.showPrompt(true, vo_text );
		}

		//_log("%c houseHint: feedCreatures", "background-color: lightskyblue");
	}
	
	var exitZoomHint = function (hintTarget){
	
	// start the pointer near the middle of the screen and then move to tap the overview button
		var startPt = new Point(hintTarget.x, hintTarget.y + 200);
		_this.tapOn(hintTarget, startPt, 600);
		
		currentHint = {type:"exit_zoom", target:hintTarget};
	}
	
	var deliverFoodHint = function (hintTarget){

		currentHint = {type:"deliver_food", target:null};
		//_log(" deliver food   H  I  N  T   ");

		numDeliveryHints++;
		var penCreatures = _this.gameManager.currentPen.creatures;

		var anybodyHungry = true;
		for(var i=0; i<penCreatures.length; i++){
			if(penCreatures[i].state != "hungry"){
				anybodyHungry = false;
			}
		}

		if(anybodyHungry){
			var hint_vo;
			do {
				hint_vo = _this.gameManager.audioData.randomSoundNameFrom( (penCreatures.length > 1) ? "feedingHintsMultiple" : "feedingHintsSingle");	
			} while (hint_vo == "useallfood" && !_this.gameManager.currentPen.moreFoodThanCreatures());
			
			var creature_vo = penCreatures[Math.floor(Math.random()*penCreatures.length)].creatureType+"voice";
			_log("Playing hint: "+hint_vo+": "+_this.gameManager.audioData.captionForId(hint_vo));
			if(numDeliveryHints%2==0){
				_this.gameManager.soundManager.playSound(creature_vo, 0);
				_this.gameManager.prompts.showPrompt(false);
			} else {
				_this.gameManager.voManager.playSound(hint_vo, 2);
				_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId(hint_vo));	
			}

			//_log("%chinting: deliverFood", "background-color: lightskyblue");
		}
		
	}
	
	var selectFoodHint = function (hintTarget){
		//_this.tapOn(hintTarget);
		var buffetCenter = new Point(hintTarget.x, hintTarget.y);
		var padding = 50;
		
		hand.y = buffetCenter.y;
		hand.x = buffetCenter.x + _this.gameStage.canvas.width/2 + padding;
		hand.alpha = 1;
		//_this.gameStage.addChild(hand);
		////_log("showing select food hint, y " + buffetCenter.y + ", x from " + (buffetCenter.x + _this.gameStage.canvas.width/2 + padding) + " to " + (buffetCenter.x - _this.gameStage.canvas.width/2 - padding));
		createjs.Tween.get(hand).to({x:buffetCenter.x - _this.gameStage.canvas.width/2 - padding}, 3000).to({alpha:0}, 0);
		currentHint = {type:"select_food", target:hintTarget};
	}
	
	var switchPenHint = function (hintTarget){
		_this.tapOn(hintTarget);
		currentHint = {type:"switch_pen", target:hintTarget};
	}
	
	var useGarbageHint = function (hintTarget){
		_this.tapOn(hintTarget);
		currentHint = {type:"use_garbage", target:hintTarget};
	}
	
	var emptyGarbageHint = function (hintTarget){
		_this.tapOn(hintTarget);
		currentHint = {type:"empty_garbage", target:hintTarget};
	}
}

//traceLoadProgress();