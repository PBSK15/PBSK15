var PhaseManager = function(gM){
	
	var _this = this;
	var gameManager = gM;

	var doGrowthPhase = function (){
		_log("%c\n    __ Growth Phase. __    %c" + gameManager.nextToGrow.length + " to grow, gameManager.growingCreature: " + gameManager.growingCreature + ", gameManager.targetCreature: " + gameManager.targetCreature,"color:darkolivegreen; background-color:palegreen;","");
		
		if(gameManager.targetCreature == null && gameManager.growingCreature == null){
		
			if(gameManager.nextToGrow.length > 0){
				gameManager.gamePhase = "growth";
				gameManager.setGrowingCreature(gameManager.nextToGrow.pop());
				gameManager.showGrowCreaturePopup();
				gameManager.highlightCreature(gameManager.growingCreature);
				gameManager.growingCreature.grow();

			} else {
				doArrivalPhase();
			}
			gameManager.menuHelper.raiseMenu();
		
		} else {
			_log("%c....nm Growth CANCELED: %cwe still have " + (gameManager.targetCreature==null?gameManager.targetCreature:gameManager.targetCreature.name) + " and/or " + (gameManager.growingCreature==null?gameManager.growingCreature:gameManager.growingCreature.name) + " to worry about.","color:darkolivegreen; background-color:palegreen;","");
		}
	};
	
	var doReleasePhase = function (){
		_log("%c\n    __ Release Phase. __    %c" + gameManager.nextToGrow.length + " to grow, gameManager.growingCreature: " + gameManager.growingCreature,"color:darkolivegreen; background-color:palegreen;","");
		if(gameManager.growingCreature == null){	
			gameManager.setGrowingCreature(gameManager.nextToRelease.pop());
			gameManager.showReleaseCreaturePopup();
			gameManager.prompts.raisePrompts();
		} 
		//growingCreature.pen.removeCreature(growingCreature);
		
	};
	
	var doArrivalPhase = function (){
		_log("%c\n    __ Arrival Phase. __    %c" + gameManager.nextToArrive.length + " to arrive.","color:darkolivegreen; background-color:palegreen;","");
		if(gameManager.targetCreature == null && gameManager.growingCreature == null){
		
			if (gameManager.nextToRelease.length > 0){
				doReleasePhase();
			} else if (gameManager.nextToGrow.length > 0){
				doGrowthPhase();
			} else if(gameManager.nextToArrive.length > 0 && gameManager.roomForNewCreatures()){
				gameManager.gamePhase = "arrival";
				gameManager.showNewCreature();
			} else {
				//_log("....... end of arrival, nobody yet to arrive, doFeeding");
				doFeedingPhase();
			}
			gameManager.menuHelper.raiseMenu();
			
		} else {
			_log("%c....nm Arrivals CANCELED: %cwe still have " + (gameManager.targetCreature==null?gameManager.targetCreature:gameManager.targetCreature.name) + " and/or " + (gameManager.growingCreature==null?gameManager.growingCreature:gameManager.growingCreature.name) + " to worry about.","color:darkolivegreen; background-color:palegreen;","");
		}
	};
	
	var doFeedingPhase = function (){
		_log("%c\n    __ Feeding Phase. __    gC? "+gameManager.growingCreature+", tC? "+gameManager.targetCreature,"color:darkolivegreen; background-color:palegreen;");
		if(gameManager.growingCreature == null && gameManager.targetCreature == null){

			gameManager.gamePhase = "feeding";
			gameManager.foodTime();
			if(gameManager.gameView != "splash"){
				//_log(".................... setting feed hint");
				gameManager.helpPrompt.setHint("feed_creatures", null);
			} else {
				//_log(".................... still in splash, so not hinting.");
			}
		} else{
			_log("%c   (nm)  %c","color:darkolivegreen; background-color:palegreen;","");
		}
	};

	var doCurrentPhase = function (){
		if(gameManager.gamePhase == "growth"){
			doReleasePhase();	
		} else if(gameManager.gamePhase == "arrival"){
			doArrivalPhase();	
		} else if(gameManager.gamePhase == "feeding"){
			//_log("....... end of doCurrentPhase, doFeeding");
			doFeedingPhase();	
		}
	};
	
	this.updatePhase = function (){		
		_log("\nU p d a t e   P h a s e   :   nTR--" + gameManager.nextToRelease.length + ",  nTG--" + gameManager.nextToGrow.length + ",  nTA--" + gameManager.nextToArrive.length);	
		
		if(gameManager.nextToRelease.length > 0){
			showingAPrompt = true;
			doReleasePhase();
		} else if (gameManager.nextToGrow.length > 0 ){
			showingAPrompt = true;
			doGrowthPhase();
		} else if(gameManager.nextToArrive.length > 0 ){
			doArrivalPhase();
		} else {
			//_log("....... end of updatePhase, doFeeding");
			doFeedingPhase();
		}
	};
}