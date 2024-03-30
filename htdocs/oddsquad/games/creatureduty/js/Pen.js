/**
 * ODDSQUAD CREATURE DUTY 
 * 
 * Pen 
 * 
 * is a habitat enclosing a group of creatures.
 *     
 * @param {string} penSize      		"small", "medium" or "large"
 * @param {GameManager} gameManager  	the boss
 * @param {int} numOfSize    			each pen of a given size is assigned an index identifier
 * @param {int} maxCreatures 			max number of creatures this pen can hold
 * 
 */
var Pen = function (penSize, gameManager, numOfSize, maxCreatures) {
	
	var _this = this;
	var CLOSE_ENOUGH = 0.01;

	this.name = penSize + "-Pen-" + numOfSize;
	
	this.gameManager = gameManager;
	
	this.decorations = [];
	
	this.id = numOfSize;
	this.maxCreatures = maxCreatures;
	
	var feedbackTweener = {};

	this.inOverview = new lib["overview_" + penSize + "_zone"]();
	this.inOverview.name = "overview_" + penSize + "_" + numOfSize;
	this.overviewBounds = this.inOverview.nominalBounds;
	
	this.inZoom = new lib.habitatbg();
	//this.inZoom.mouseEnabled = false;
	//this.gameManager.disableMouseChildren(this.inZoom);
	
	this.inZoom.name = "zoom_" + penSize + "_" + numOfSize;
	
	for(var i=0; i<this.decorations.length; i++ ){
		this.inZoom.decorations[this.decorations[i].objName].alpha = 1;
		this.inOverview[_this.decorations[i].objName].alpha = 1;
	}
		
	// Creatures inhabiting this pen
	this.creatures = [];
	
	this.glows = [];
	for(var i=0; i<= maxCreatures; i++ ){
		this.glows.push(new lib.creatureGlow());
		this.glows[i].mouseEnabled = false;
	}
	
	// Decorations available for this pen
	this.decorations = [];
	
	this.challengeRound = false;
	
	// Valid states: open / justopened / closed
	this.state = "closed";
	
	// Valid sizes: small / medium / large
	this.size = penSize;
	
	// The pen to which to navigate on right arrow press
	this.nextPen = null;
	// The pen to which to navigate on left arrow press
	this.prevPen = null;
	
	this.buffet = new FoodSpread(_this);
	var thecanvas = this.gameManager.getCanvas();
	this.buffet.setPosition(thecanvas.width/2, thecanvas.height);
			
	this.numCreaturesEating = 0;

	this.roundPrompts = 0;
	
	// feedingHistory:
	// The number of times that each number of creatures have been fed in this pen.
	// E.g. this.feedingHistory[2] = the number of times that 2 creatures have been fed in this pen.
	// Used to assist with level progression: for each grouping of creatures, we start with easy sharingPuzzles
	// and then ramp up the difficulty.
	this.feedingHistory = [null, 0, 0, 0, 0];
	
	/**
	 * @return {int} The number of creatures in this pen.
	 */
	this.numCreatures = function (){
		return _this.creatures.length;
	}
	
	/**
	 * @return {Number} What scale to use to represent this creature in Zoom view 
	 */
	this.creatureScaleInZoom = function (){
		return _this.size == "small" ? 0.6 : _this.size == "medium" ? 0.7 : _this.size == "large" ? 0.8 : 1;
	}
	
	/**
	 * @return {Number} What scale to use to represent this creature in Map view 
	 */
	this.creatureScaleInOverview = function (){
		return _this.size == "small" ? 0.25 : _this.size == "medium" ? 0.35 : _this.size == "large" ? 0.45 : 0.65;
	}
	
	/**
	 * @return {Boolean} Does this pen contain any creatures that are hungry?
	 */
	this.hasHungryCreatures = function (){

		var anyoneHungry = false;
		for(var i=0; i<_this.creatures.length; i++ ){
			if(_this.creatures[i].state == "hungry"){
				anyoneHungry = true;
			}
		}
		return anyoneHungry;
	}
	
	/**
	 * @return {Boolean} Is there room to add another creature to this pen?
	 */
	this.hasRoom = function (){
		return _this.creatures.length < _this.maxCreatures;
	}

	this.isSmall = function (){
		return _this.size == "small";
	}
	this.isMedium = function (){
		return _this.size == "medium";
	}
	this.isLarge = function (){
		return _this.size == "large";
	}
	
	/**
	 * layerCreaturesIn
	 * ----------------
	 * put the smaller creatures in front of bigger creatures so none of them are 
	 * sniffing each others' butts.
	 * 
	 * @param  {createjs.Container} enclosure The visual representation of this pen
	 * @return {void}
	 */
	var layerCreaturesIn = function(enclosure){
		var orderedCreatures = [].concat(_this.creatures);
		orderedCreatures.sort(function(a,b){return b.layerOrder - a.layerOrder;});
		for(var i=0; i<orderedCreatures.length; i++){
			enclosure.addChild(orderedCreatures[i].displayObj);
		}
	}

	/**
	 * open
	 * ----
	 * Open this pen and make it available for housing
	 * @return {void}
	 */
	this.open = function (){
		_this.state = "open";
		_this.inOverview.gotoAndStop("open");
		_this.gameManager.updatePens();
	}
	
	/**
	 * showCloseUp
	 * -----------
	 * Assemble and if true, show, or if false, hide a close up view of this pen
	 * 
	 * @param  {Boolean} toShow 	Should we show a close up view of this pen?
	 * @return {void}
	 */
	this.showCloseUp = function (toShow){
		//_log(_this + " showCloseUp | " + toShow);
		for(var i=0; i<_this.creatures.length; i++ ){
			_this.creatures[i].bowl.clear();
			_this.creatures[i].showBowl(false);
		}
		if(toShow){
			if(_this.inZoom.getCurrentLabel() != _this.size + "_" + _this.type){
				var bgFrame = numOfSize%2==0 ? (_this.size == "medium" ? 0 : 1 ) : (_this.size == "medium" ? 1 : 0 );
				_this.inZoom.gotoAndStop(bgFrame);			
			}
			_this.updatePreview();
			_this.gameManager.helpPrompt.setHint(null);
		} else {
			for(var i=0; i<_this.creatures.length; i++ ){
				_this.creatures[i].displayObj.removeAllEventListeners();
			}
			_this.inZoom.removeChild(_this.buffet.displayObj);
			_this.inOverview.icon.alpha = (_this.gameManager.gamePhase == "feeding") ? 0 : 1;
		}
	}

	/**
	 * updateOverview
	 * --------------
	 * Display a representation of this pen in the map view reflecting all the latest data:
	 * - equally space and layer all the creatures with a sandy glow behind them for visibility
	 * - display creatures in the appropriate animation state.
	 * - show food bubbles on hungry creatures, hide them on sated creatures
	 * 
	 * @return {void}
	 */
	this.updateOverview = function (){
		//_log("[] updating Overview view for " + _this.creatures.length + " creatures.");
		var whichScale = _this.creatureScaleInOverview();
		var penBounds = _this.inOverview.nominalBounds;
		var nc = _this.creatures.length;
		var creatureSpacing = _this.creatures.length%2 == 0 ?  9 : 5;
		var pbw = penBounds.width;
	
		_this.inOverview.gotoAndStop(_this.state);
		
		for(var i=0; i<_this.creatures.length; i++ ){
			_this.inOverview.addChild(_this.glows[i]);
		}

		for(var i=0; i<_this.creatures.length; i++ ){
	
			var creature = _this.creatures[i];
			creature.setLargeHitArea();
			//_this.inOverview.removeChild(creature.displayObj);
			
			var whichX = 0;
			var whichY = 25;
			//var whichY = (_this.size == "small" ? 65 : _this.size == "medium" ? 32 : 0) + (Math.random()*40 - 30);
			//var spacing = nc==2 ? pbw/6 : nc==3 ? pbw/4 : nc==4 ? pbw/10 : 0;
			var spacing = 1.25*(nc==2 ? pbw/8 : nc==3 ? pbw/6 : nc==4 ? pbw/13 : 0);
			whichX += nc==1? 0 : (nc==2? (i==0 ? -spacing : spacing) : (nc==3? (i==0?0 : i==1? -spacing : spacing) : (i==0? -spacing : i==1? spacing : i==2? -3*spacing : 3*spacing)));
			 
			//whichContainer.addChildAt(creature.displayObj, whichContainer.getNumChildren());
			_this.inOverview.addChild(creature.displayObj);
			
			
			//_log("==--- in updateOverview for " + _this.name + ", just set scale on " + creature.name + " to " + creature.displayObj.scaleX);
			creature.displayObj.scaleX = creature.displayObj.scaleY = whichScale;
			
			_this.glows[i].x = whichX;
			_this.glows[i].y = whichY;
			creature.displayObj.x = whichX;
			creature.displayObj.y = whichY;
			//createjs.Tween.get(creature.displayObj).to({x:whichX, y:whichY}, 200);
			_this.glows[i].scaleX = _this.glows[i].scaleY = 1.25;
			
			creature.body.scaleX *= Math.random() < 0.3 ? -1 : 1;
			
			if(creature.state == "hungry"){
				//_log("             this creature in "+_this+" is hungry: "+creature.name);

				creature.showBubble(true);
			} else {
				//_log("             this creature in "+_this+" is NOT hungry: "+creature.name);
				creature.settle();
			}
			creature.freezeInSlowBrowsers();
		}
		for(var i=_this.creatures.length; i<maxCreatures; i++ ){
			_this.inOverview.removeChild(_this.glows[i]);
		}
		layerCreaturesIn(_this.inOverview);
	}
	
	/**
	 * updateZoom
	 * ----------
	 * Display a representation of this pen in close up view reflecting all the latest data:
	 * - equally space and layer all the creatures with a sandy glow behind them for visibility
	 * - display creatures in the appropriate animation state.
	 * - show food bubbles on hungry creatures, hide them on sated creatures
	 * - if this pen contains hungry creatures, display a buffet of food for them!
	 * 
	 * @return {void}
	 */
	this.updateZoom = function (){
		//_log("[] updating Zoom view for " + _this.creatures.length + " creatures.");
		var whichScale = _this.creatureScaleInZoom();
		var penBounds = _this.inZoom.nominalBounds;
		var pbw = penBounds.width;
		var nc = _this.creatures.length;
			
		for(var i=0; i<_this.creatures.length; i++ ){
		
			var creature = _this.creatures[i];
		
			creature.unFreeze();
			_this.inZoom.removeChild(creature.displayObj);
			
			//var whichY = (penBounds.height/4) + (creature.size == "small" ? 130 : creature.size == "medium" ? 110 : 100) + (Math.random()*40 - 15);
			var whichY = (penBounds.height/4) + ((creature.size == "small") ? 70 : (creature.size == "medium") ? 60 : 40) + 25;
			
			var whichX = _this.gameManager.getCanvas().width/2;
				
			var creatureSpacing = _this.creatures.length%2 == 0 ? 7 : 3.75;
				
			whichX += (Math.random()*60-30) + nc==1? 0 : nc==2? pbw/6*(i==0 ? -1 : 1) : nc==3? (i==0?0 : i==1? -pbw/4 : pbw/4) : (i==0? -pbw/10 : i==1? pbw/10 : i==2? -pbw/5 -pbw/10 : pbw/5 + pbw/10);	
			
			_this.inZoom.addChildAt(creature.displayObj, _this.inZoom.getNumChildren());
			creature.displayObj.scaleX = creature.displayObj.scaleY = whichScale;
			creature.body.scaleX *= Math.random() < 0.3 ? -1 : 1;
			
			_this.inZoom.addChildAt(_this.glows[i], i + 1);
			_this.glows[i].x = creature.displayObj.x = whichX;
			_this.glows[i].y = creature.displayObj.y = whichY;
			_this.glows[i].scaleX = 1.5; 
			_this.glows[i].scaleY = 2;
			
			_this.inZoom.addChild(_this.buffet.displayObj);
			
			if(creature.state == "hungry"){
				creature.showBubble(true);
			} else {
				//_log(" :( settling "+creature.name+" cause it's "+creature.state+" not hungry.");
				creature.settle();
			}
		
		}
		
		// Adjust the layering of the creatures to reflect their desired ordering
		layerCreaturesIn(_this.inZoom);
		_this.checkToIntroduceFood();
	}

	/**
	 * checkToIntroduceFood
	 * --------------------
	 * If the creatures are hungry, set up a buffet!  Otherwise, clear out all the food.
	 * 
	 * @return {void} 
	 */
	this.checkToIntroduceFood = function(){
		if(_this.hasHungryCreatures()){

			_this.gameManager.prompts.introduceChoosing();
			_this.inZoom.removeChild(_this.buffet.displayObj);
			_this.inZoom.addChild(_this.buffet.displayObj);
		
			if(!_this.firstClick){
				_this.buffet.reset();
			}
			_this.inZoom.addChild(_this.buffet.displayObj);
			_this.buffet.dropInChoices();

		} else {
			_this.inZoom.removeChild(_this.buffet.displayObj);
			
		}
	}
	
	/**
	 * updatePreview
	 * -------------
	 * Update the preview object to show all the creatures housed here
	 * 
	 * @return {void}
	 */
	this.updatePreview = function (){
		if(_this.gameManager.gameView == "overview" || _this.gameManager.gameView == "splash"){
			_this.updateOverview();
		} else if (_this.gameManager.gameView == "zoom"){
			_this.updateZoom();
		}
		_this.gameManager.prompts.keepPromptOnTop();
	}
	
	/**
	 * showHighlight
	 * -------------
	 * @param  {Boolean} toShow 	Should we show a border around this pen in the map view?
	 * @return {void}     
	 */
	this.showHighlight = function (toShow){
		_this.inOverview.border.alpha = toShow ? 1 : 0;
	}
	
	/**
	 * onChooseFood
	 * ------------
	 * A box of food has been chosen!  Does it satisfy all the creatures?  
	 * If so, continue to feeding them.  Otherwise, give feedback from Oscar
	 * and have any unhappy creatures shake their heads 'no'.
	 * 
	 * @param  {Event} evt 	with {Food} data.choice 
	 * @return {void}
	 */
	this.onChooseFood = function (evt){
		var choice = evt.data.choice;
		var numHappy = 0;
		var creatureObjecting = false;
		

		for(var i=0; i<_this.creatures.length; i++ ){
			if(choice.colour == _this.creatures[i].preference || choice.shape == _this.creatures[i].preference || choice.detail ==  _this.creatures[i].preference){
				 _this.creatures[i].settle();
				 _this.creatures[i].showBubbleAfter(1100, true);
				 
				 // Need to do this to give the APPEARANCE of settling (above) while remaining in hungry state.  
				 _this.creatures[i].state = "hungry";
				numHappy++;
			} else {
				_this.creatures[i].shakeHeadNo();
				if(!creatureObjecting){
					_log(" --- "+_this.creatures[i].name+" OBJECTING ---");
					_this.gameManager.soundManager.stopSound(false);
					_this.gameManager.soundManager.playSound(_this.creatures[i].creatureType + "no", 0);
					creatureObjecting = true;
				 }
				 _this.creatures[i].showBubble(true);			 
			}
		}
		if(numHappy == _this.creatures.length){
			 _this.buffet.dumpAllBut(choice);
			 _this.buffet.currentChoice = choice;
			 
			for(var i=0; i<_this.creatures.length; i++ ){
				_this.creatures[i].happyBounce();
			}	
			var feedback_id = _this.gameManager.audioData.randomSoundNameFrom("affirmationVOs");
			_this.gameManager.helpPrompt.setHint(null);
			_this.gameManager.cancelVoicePrompts();
			_this.gameManager.voManager.playSoundAfter(feedback_id, 1, 100);
			_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId(feedback_id));
			
			createjs.Tween.get(_this).wait(1800).call(_this.onFoodAccepted);
			
		} else if (_this.buffet.choiceAttempts == 0 && _this.gameManager.gameRound < 5) {
			_log(" --- PICK DIFFERENT ---");
			_this.gameManager.voManager.playSoundAfter("pickdifferent", 1, 500);
			_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("pickdifferent"));
		} else if (_this.buffet.choiceAttempts%3 == 2) {
			_this.gameManager.prompts.playChooseIntro();
		}
		_this.buffet.choiceAttempts++;
	}

	/**
	 * onFoodAccepted
	 * --------------
	 * The correct food has been selected; let's feed these creatures.
	 * Play instructions for distributing the food fairly, switch creatures to a settled state,
	 * and put plates in front of each creature to accept the food.
	 *  
	 * @return {void}
	 */
	this.onFoodAccepted = function (){
		_this.buffet.switchToFood();
		
		_this.gameManager.cancelVoicePrompts();

		if(!_this.gameManager.introducedFeeding){
			_this.gameManager.prompts.introduceFeeding();

		} else if (_this.creatures.length > 1 && !_this.gameManager.introducedSharing){
			_this.gameManager.prompts.introduceSharing();

		} else if (_this.numCreatures() > 1 && _this.moreFoodThanCreatures() && !_this.correctPieces() &&_this.gameManager.numPlaysTooMuchFood < 2){
			_this.gameManager.numPlaysTooMuchFood++;
			_this.gameManager.voManager.playSound("foodleftover",1);
			_this.gameManager.prompts.showPrompt(true,_this.gameManager.audioData.captionForId("foodleftover"));

		} else if (_this.moreCreaturesThanFood() && _this.gameManager.numPlaysNotEnoughFood<2){
			_log("%c\nNOT ENOUGH FOOD, playing prompt","background-color:green; color:greenyellow;");
			_this.gameManager.numPlaysNotEnoughFood++;
			if(!_this.gameManager.voManager.isCurrentlyPlaying("notenoughcut")){
				_this.gameManager.voManager.playSound("notenoughcut",2);
			}
			
			_this.gameManager.prompts.showPrompt(true,_this.gameManager.audioData.captionForId("notenoughcut"));

		} else if (_this.moreFoodThanCreatures() && !_this.gameManager.playedUseAllFood){
			_log("%c\nMORE THAN ENOUGH FOOD, playing prompt","background-color:green; color:greenyellow;");
			_this.gameManager.playedUseAllFood = true;
			_this.gameManager.voManager.playSound("useallfood",1);
			_this.gameManager.prompts.showPrompt(true,_this.gameManager.audioData.captionForId("useallfood"));
		}

		_this.gameManager.helpPrompt.setHint("deliver_food", null);

		for(var i=0; i<_this.creatures.length; i++ ){
			_this.creatures[i].settle();
			_this.creatures[i].showBowl(true);
			// Need to do this to give the APPEARANCE of settling (above) while remaining in hungry state.  
			_this.creatures[i].state = "hungry";
		}

	}
	
	/**
	 * addCreature
	 * -----------
	 * House the specified creature in this pen
	 * 
	 * @param {Creature} creature 	The creature to add to this pen
	 */
	this.addCreature = function (creature){
		_log("ADDING " + creature.name + " to " + _this.name);
		_this.inOverview.addChildAt(creature.displayObj, _this.inOverview.getNumChildren());
		
		if(!_this.containsCreature(creature)){
			_this.creatures.push(creature);
			if(creature.pen != undefined){
				creature.pen.removeCreature(creature);
			}
		}
		creature.pen = _this;
		creature.displayObj.removeAllEventListeners();
		_this.gameManager.unHighlightCreature();
		_this.updatePreview();

		if(_this.creatures.length == 1){
			_this.buffet.initRound();
		}
		_this.gameManager.updatePens();
	}
	

	/**
	 * removeCreature
	 * --------------
	 * Remove the specified creature from this pen
	 * 
	 * @param  {Creature} creature 	
	 * @return {void} 
	 */
	this.removeCreature = function (creature){
		_this.inOverview.removeChild(creature.displayObj);
		_this.inZoom.removeChild(creature.displayObj);
		for(var a = _this.creatures.length - 1; a >= 0; a--) {
			if(_this.creatures[a] === creature) {
			   _this.creatures.splice(a, 1);
			}
		}
		_this.updatePreview();
	}
	
	/**
	 * raiseChildren
	 * -------------
	 * Bring the creatures to the top of the display hierarchy
	 * 
	 * @return {void}
	 */
	this.raiseChildren = function (){
		var container = _this.gameManager.gameView == "zoom" ? _this.inZoom : _this.inOverview;
		for(var i=0; i<_this.creatures.length; i++ ){
			container.addChild(_this.creatures[i].displayObj);
		}
		_this.inZoom.addChild(_this.buffet.displayObj);
	}
	
	/**
	 * fairlyShared
	 * ------------
	 * @return {Boolean}  whether all creatures in this pen have the same amount of food in their bowls
	 */
	this.fairlyShared = function (){
		var foodAmt = -1;
		var isFair = true;
		for(var i=0; i<_this.creatures.length; i++ ){
			if(i == 0){
				foodAmt = _this.creatures[i].bowl.numFood();
				if(foodAmt == 0){
					_log(" NOT FAIR: no food in bowl of "+_this.creatures[i].name);
					isFair = false;
					break;
				}
			} else {
				if (Math.abs(foodAmt - _this.creatures[i].bowl.numFood()) > 0.0001 ){
					_log(" NOT FAIR: "+_this.creatures[i].name+" has "+_this.creatures[i].bowl.numFood()+", not "+foodAmt);
					isFair = false;
					break;
				}
			}
		}
		return isFair;
	}

	/**
	 * alreadyDivided
	 * --------------
	 * @return {Boolean} whether some pieces of food have already been cut.
	 */
	this.alreadyDivided = function (){
		if (_this.buffet.selectedTray != null){
			var allPieces = _this.buffet.selectedTray.allFood();
			for(var i = 0; i < allPieces.length; i++ ){
				if(allPieces[i].value < 1){
					return true;
				}
			}
		}
		return false;
	}
	
	/**
	 * moreFoodThanCreatures
	 * ---------------------
	 * @return {Boolean} 
	 */
	this.moreFoodThanCreatures = function (){
		if (_this.buffet.selectedTray != null){
			var trayAmount = _this.buffet.selectedTray.numFood();
			_log("Is " + trayAmount + " MORE than 1 each for " + _this.creatures.length + " creatures? " + ((trayAmount/_this.creatures.length) > 1));
			return ( trayAmount > _this.creatures.length );
		} else {
			return false;
		}
	}

	/**
	 * moreCreaturesThanFood
	 * ---------------------
	 * @return {Boolean} 
	 */
	this.moreCreaturesThanFood = function (){
		if (_this.buffet.selectedTray != null){
			var trayAmount = _this.buffet.selectedTray.numFood();
			_log("Is " + trayAmount + " LESS than 1 each for " + _this.creatures.length + " creatures? " + ((trayAmount/_this.creatures.length) < 1));
			return ( (trayAmount/_this.creatures.length) < 1 );
		} else {
			return false;
		}
	}
	
	/**
	 * correctPieces
	 * -------------
	 * @return {Boolean} whether there are enough food pieces to feed all 
	 * creatures in this pen without dividing any pieces further
	 */
	this.correctPieces = function (){

		// Get a list of all the available food, sorted by piece size, biggest to smallest.
		if(_this.buffet.selectedTray == null || _this.creatures.length == 0){
			return false;
		}
		var availableFood = _this.buffet.selectedTray.allFood();
		availableFood.sort(function (a, b){ return (b.value - a.value); });
		
		var foodPerCreature = _this.buffet.selectedTray.numFood()/_this.creatures.length;
		
		var allocations = [];
		for(var i=0; i<_this.creatures.length; i++ ){
			allocations.push({allotted:0, pieces:[]});
		}
		foodloop:
		for(var i=0; i<availableFood.length; i++ ){
			allocationloop:
			for(var j=0; j<allocations.length; j++ ){
				if(allocations[j].allotted + availableFood[i].value <= foodPerCreature){
					allocations[j].pieces.push(availableFood[i]);
					allocations[j].allotted += availableFood[i].value;
					break allocationloop;
				}
			}
		}
		var numFed = 0;
		
		for(var i=0; i<allocations.length; i++ ){
			if(Math.abs(allocations[i].allotted - foodPerCreature) < CLOSE_ENOUGH){
				numFed++;
			}
		}
		return (numFed == _this.creatures.length);
	}
	
	/**
	 * foodTime
	 * --------
	 * It's food time; if this pen is already zoomed in, let's introduce some choices of foods. 
	 * Otherwise, show in the map what kinds of food these creatures want.
	 * 
	 * @return {void}
	 */
	this.foodTime = function (){
		var thisPenNowShowing = _this.gameManager.gameView == "zoom" && _this.gameManager.currentPen == _this;
		
		if(thisPenNowShowing){
			_this.buffet.reset();
			_this.inZoom.addChild(_this.buffet.displayObj);
			_this.gameManager.prompts.introduceChoosing();
		}
		for(var i = 0; i < _this.creatures.length; i++ ){
			_this.creatures[i].unFreeze();
			_this.creatures[i].setSmallHitArea();
			_this.creatures[i].wantFood(_this.buffet.getPreference(i), false);
			if(!thisPenNowShowing){
				_this.creatures[i].freezeInSlowBrowsers();
			}
		}
		
	}
	
	/**
	 * containsCreature
	 * ----------------
	 * @param  {Creature} creature
	 * @return {Boolean}          Whether the specified creature is already in this pen.
	 */
	this.containsCreature = function (creature){
		for(var i=0; i<_this.creatures.length; i++ ){
			if(_this.creatures[i] == creature){
				return true;
			}
		}
		return false;
	}
	
	/**
	 * onPressPen
	 * ----------
	 * @param  {Event} e 
	 *                 with {Boolean} data.fromDrop : whether this press is being triggered by a drag'n'drop on a creature.
	 * @return {[type]}   [description]
	 */
	this.onPressPen = function (e){
		var targ = _this.gameManager.getTargetCreature();
		var grower = _this.gameManager.getGrowingCreature();
		
		var doAddCreature = false;
		
		var fromDrop = (e.data == undefined || e.data.fromDrop == undefined) ? false : e.data.fromDrop;
		
		_log("PEN PRESS! on " + _this.name + "  targ: " + (targ==null?"null":targ.name) + ", grower: " + (grower==null?"null":grower.name) + ", _this.gameManager.gamePhase: " + _this.gameManager.gamePhase + ", _this.gameManager.gameView: " + _this.gameManager.gameView);
		if(_this.state != "closed" && _this.gameManager.gameView != "splash" && _this.gameManager.gamePhase != "release"){

			_this.gameManager.hideHelp();
			// First check to see if a creature needs to be housed
			targ = (targ == null) ? grower : targ;
			if(targ == null){
				_log("   pp   targ is null.");
			} else {
				_log("   pp   targ is "+targ+", droppedIn? "+targ.droppedIn+", inPlacement? "+targ.inPlacement+", inGrowth? "+targ.inGrowth+", inTube? "+targ.inTube);
			}
			if(targ != null){
				if(targ.droppedIn && !targ.inPlacement && !targ.inGrowth && !targ.inTube && (_this.creatures.length < _this.maxCreatures)){
					if(targ.size == _this.size){
						_log("   pp   targ.size "+targ.size+" == _this.size "+_this.size+" so let's add it!");
						targ.displayObj.removeAllEventListeners();
						targ.inPlacement = true;
						doAddCreature = true;
					} else {
						_log("   pp   wrong size so not adding it.");
						targ.shakeHeadNo();
						targ.inPlacement = false;
					}
				}
			} else if (_this.gameManager.gamePhase == "feeding" && grower == null){
				_log("   pp   feeding phase, so zooming in                               !!!");
				_this.gameManager.showZoomOn(_this);
				_log("   pp   ..... showedZoomOn "+_this+" in onPressPen");
			}  else {
				_log("   pp   nothing checked out so we're not adding anything.")
			}
		} else {
			_log("   pp   no reason to do anything with this press, doAdd? "+doAddCreature);
		}
		if(doAddCreature){
			/*
			if(targ == _this.gameManager.getGrowingCreature()){
				_this.gameManager.setGrowingCreature(null);
			}
			if(targ == _this.gameManager.getTargetCreature()){
				_this.gameManager.setTargetCreature(null);
			}
			*/
			_this.addCreature(targ, false);
			if(!fromDrop){
				var evt = new createjs.Event("CREATURE_HOUSED", true);
				evt.data = {creature: targ};
				_this.inOverview.dispatchEvent(evt);
				//_this.gameManager.onCreatureHoused(evt);
			}

			_log("ADDED >>     " + targ.name + " to " + _this.name + ", it's a " + (targ==grower?"...grower.":"...newbie."));
		} 
		
		_log("Done pen press: targetCreature: " + _this.gameManager.getTargetCreature() + ", growingCreature: " + _this.gameManager.getGrowingCreature()+", gameView: " + _this.gameManager.gameView+", gamePhase: " + _this.gameManager.gamePhase+", state: "+_this.state);
		return doAddCreature;
	}
	
	this.initRound = function (){
		_this.challengeRound = false;
		_this.roundPrompts = 0;
		if(_this.creatures.length > 0){
			_this.buffet.initRound();
		}
		
		_log(_this.name + " initRound, num creatures: " + _this.creatures.length + ", size: " + _this.size);
		if(_this.creatures.length == 1 && _this.size != "small"){
			if (!_this.gameManager.introduced1wayChallenge){
				//_log(" ! ! !     1 WAY CHALLENGE   " + _this.name);
				_this.gameManager.introduced1wayChallenge = true;
				_this.challengeRound = true;
			}
		} else if(_this.creatures.length == 2 && _this.size != "small"){
			if (!_this.gameManager.introduced2wayChallenge){
				//_log(" ! ! !     2 WAY CHALLENGE   " + _this.name);
				_this.gameManager.introduced2wayChallenge = true;
				_this.challengeRound = true;
			}
		} else if(_this.creatures.length == 3 && _this.size != "small"){
			if (!_this.gameManager.introduced3wayChallenge){
				//_log(" ! ! !     3 WAY CHALLENGE   " + _this.name);
				_this.gameManager.introduced3wayChallenge = true;
				_this.challengeRound = true;
			}
		}	
		for(var i=0; i<_this.creatures.length; i++ ){
			_this.creatures[i].numFoodEatenThisRound = 0;
		}
		if(_this.creatures.length > 0){
			//_this.buffet.spawnFood();
		}
	}
	
	this.inOverview.on("pressup", _this.onPressPen);
	this.inOverview.on("mouseover",function (evt){if(_this.state == "open"){evt.target.cursor = 'pointer';}});
	
	this.raiseCreatures = function (){
		if(_this.gameManager.gameView == "zoom"){
			for(var i=0; i<_this.creatures.length; i++ ){
				_this.inZoom.addChild(_this.creatures[i]);
			}
		}
		_this.inZoom.addChild(_this.buffet.displayObj);
	}
	
	this.onSelectBowl = function (evt){
		//_log("onSelect.");
		if(_this.buffet.selectedTray != null && !_this.buffet.selectedTray.isDistributing() && !_this.buffet.isCutting()){
			
			var foodToAdd = _this.buffet.selectedTray.removeOne();
		
			evt.data.bowl.addFood(foodToAdd);
			_this.gameManager.hideHelp();
		} else {
			//_log("no tray selected so nothing to add to bowl.");
		}
		_this.prepareBowlHint();
		_this.gameManager.prompts.showPrompt(false);
	}
	
	this.onBowlFull = function (evt){
		//_log("full!!");
		_this.gameManager.prompts.showPromptAfter(true, "This plate is full. Try putting food\non a plate that isn't full yet.",50);
		_this.gameManager.voManager.playSound("plateisfull", 1);
	}
	this.playRandomEatingSound = function (){
		_log("%c makin some noise ","font-weight:bold;");
		var eatingSound = (_this.creatures.length == 1) ? _this.creatures[0].creatureType + "eat" : "groupeat";
		_this.gameManager.soundManager.playSound(eatingSound, 2);
		//setTimeout(_this.gameManager.isRoundOver,_this.gameManager.audioData.durationForId(eatingSound));
	}
	
	this.allCreaturesEat = function (evt){
		_this.stopFeedback();
		_this.gameManager.waitingForPraiseToComplete = true;
		_this.numCreaturesEating = _this.creatures.length;
		_log("allCreaturesEat!  That means all " + _this.creatures.length + " of you!");
		for(var i=0; i<_this.creatures.length; i++ ){
			_this.creatures[i].eatFoodInBowl();
		}
		_this.playRandomEatingSound();
	}
	
	this.creaturesEating = function (){
		for(var i=0; i<_this.creatures.length; i++ ){
			if(_this.creatures[i].state == "eating"){
				return true;
			}
		}
		return false;
	}
	
	this.stopFeedback = function (){
		_log("STOP feedback.");
		_this.gameManager.voManager.stopSound(false);
		_this.gameManager.prompts.showPrompt(false);
		createjs.Tween.removeTweens(feedbackTweener);
		
	}
	var is_touch_device = function () {
	  return !!('ontouchstart' in window);
	}
	
	this.playDivisionHintAfter = function(delay){
		if(_this.creatures.length == 2){
			_this.gameManager.prompts.showPromptAfter(true, _this.gameManager.audioData.captionForId("dividehalf"), delay);
			_this.gameManager.voManager.playSoundAfter("dividehalf", 1, delay);
			_this.buffet.highlightCuttersAfter(delay,"halves");
			_this.roundPrompts++;
		
		} else if(_this.creatures.length == 3){
			_this.gameManager.prompts.showPromptAfter(true, _this.gameManager.audioData.captionForId("dividethirds"), delay);
			_this.gameManager.voManager.playSoundAfter("dividethirds", 1, delay);
			_this.buffet.highlightCuttersAfter(delay,"thirds");
			_this.roundPrompts++;
		
		} else if(_this.creatures.length == 4){
			_this.gameManager.prompts.showPromptAfter(true, _this.gameManager.audioData.captionForId("dividefourths"), delay);
			_this.gameManager.voManager.playSoundAfter("dividefourths", 1, delay);
			_this.buffet.highlightCuttersAfter(delay,"fourths");
			_this.roundPrompts++;
		
		}
	}

	this.giveFeedback = function (){


		var anybodyEating = false;
		for(var i=0; i<_this.creatures.length; i++){
			if(_this.creatures[i].state == "eating"){
				anybodyEating = true;
				break;
			}
		}
		if(!anybodyEating){
			_this.stopFeedback();
			var correctPieces = _this.correctPieces();
			var alreadyDivided = _this.alreadyDivided();
			
			//_log("Not Fair! " + _this.roundPrompts + " prompts issued so far.  moreFoodThanCreatures? " + moreFoodThanCreatures + ", correctPieces? " + correctPieces);
			if(_this.roundPrompts == 0){
				// This is the first warning in this feeding cycle, let's not give any advice, 
				// just point out that there's a problem
				if(Math.random() < 2/3){
					_this.gameManager.prompts.showPrompt(true, "That's not fair sharing!");
					_this.gameManager.voManager.playSound(_this.gameManager.audioData.randomSoundNameFrom("notFairVOs"), 1);
				} else {
					_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("giveeachsame"));
					_this.gameManager.voManager.playSound("giveeachsame", 1);
				}
				_this.roundPrompts++;
			} else {

				for(var i=0; i<_this.creatures.length; i++ ){
					_this.creatures[i].shakeHeadNo();
				}

				// Still having difficulty? Ok, we will tell you what to do.
				if(correctPieces){
					_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("trymoving"));
					_this.gameManager.voManager.playSound("trymoving", 1);
					_this.roundPrompts++;	
				} else if (alreadyDivided) {
					if(_this.gameManager.is_touch_device()){
						_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("taptoredo"));
						_this.gameManager.voManager.playSound("taptoredo", 1);
					} else {
						_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("clicktoredo"));
						_this.gameManager.voManager.playSound("clicktoredo", 1);		
					}
					_this.roundPrompts++;
					_this.buffet.highlightRedo();
				} else if (_this.moreFoodThanCreatures()){
					if(Math.random() < 0.5){
						_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("foodleftover"));
						_this.gameManager.voManager.playSound("foodleftover", 1);
						_this.roundPrompts++;
					} else {
						_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("putbackandcut"));
						_this.gameManager.voManager.playSound("putbackandcut", 1);
						_this.roundPrompts++;
					}	
				} else if (_this.moreCreaturesThanFood()){
					_this.gameManager.prompts.showPrompt(true, _this.gameManager.audioData.captionForId("putbackandcut"));
					_this.gameManager.voManager.playSound("putbackandcut", 1);
					_this.roundPrompts++;
				} 
			}
		}
	}

	
	
	this.checkReadinessToEat = function (evt){
		var rightFoodTypes = true;
		for(var i=0; i<_this.creatures.length; i++ ){
			if(!_this.creatures[i].bowl.allFoodOfType(_this.type)){
				rightFoodTypes = false;
			}
		}
		var fairlyShared = _this.fairlyShared();

		
		if(fairlyShared){
			_log("FAIR!");
			_this.buffet.removeTray(evt.data.tray);
			_this.buffet.displayObj.removeChild(_this.buffet.returnArrow);
			_this.buffet.displayObj.removeChild(_this.buffet.foodContainer);
			_this.allCreaturesEat(evt);
			
			if(_this.creatures.length > 1 && !_this.gameManager.achievedFairSharing && ss.oddsquad.UserLogin.hasPbsLogin()){
				_log("AWARDED achievement for fair sharing.");
				//alert("AWARDED achievement for fair sharing.");
				_this.gameManager.achievedFairSharing = true;
				CreatureDutyAchievementManager.addAchievement(CreatureDutyAchievementManager.FAIR_SHARING_ACHIEVE_ID);
			} else {
				//alert("Not awarding fair sharing achievement because ... ALREADY GOT IT ? "+_this.gameManager.achievedFairSharing+"  HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin());
				_log("  Not awarding achievement because ... ALREADY GOT IT ? "+_this.gameManager.achievedFairSharing+"  HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin());
			}
		} else {
			if(_this.roundPrompts == 0){
				for(var i=0; i<_this.creatures.length; i++ ){
					_this.creatures[i].shakeHeadNo();
				}
			}
			createjs.Tween.removeTweens(feedbackTweener);
			createjs.Tween.get(feedbackTweener).wait(1500).call(_this.giveFeedback);
		}
	}
	
	// void onDoneEating
	//      ============
	// To be triggered after each single creature has finished eating 
	// to determine whether feeding is finished for the pen as a whole
	//-------------------------------------------------------------------------------
	this.onDoneEating = function (evt){
		
		_this.numCreaturesEating--;
		
		_log("%c"+evt.data.creature+" done eating, "+_this.numCreaturesEating+" still eating.","font-style:italic");

		if(_this.numCreaturesEating == 0){
			var numHungryCreatures = 0;
			
			sendGAEvent("CreatureDuty_GamePlay", "Creatures_Fed", "NUM_FED", _this.creatures.length);
			
			for(var i=0; i<_this.creatures.length; i++ ){
				if(_this.creatures[i].state == "hungry"){
					numHungryCreatures++;
				}
			}
			if(numHungryCreatures == 0){
				// We're all done.
				_this.inZoom.removeChild(_this.buffet.displayObj);
				_this.feedingHistory[_this.creatures.length]++;
			}
			_this.gameManager.isCurrentPenFed();
		}
	}
	
	// void prepareBowlHint
	//      ===============
	// pick a bowl to hint at in case the player can't figure out what to do next.
	//-----------------------------------------------------------------------------------------------
	this.prepareBowlHint = function (event){
	
		var targetBowl;
		var leastFood = 99;
		for(var i=0; i<_this.creatures.length; i++ ){
			var cr = _this.creatures[i];
			var foodInBowl = cr.bowl.numFood();
			if(foodInBowl < leastFood){
				targetBowl = cr.bowl;
				leastfood = foodInBowl;
			}
		}
		//_this.gameManager.helpPrompt.setHint("deliver_food", targetBowl.displayObj);
	}
	
	this.onReturnTray = function (){
		for(var i=0; i<_this.creatures.length; i++ ){
			_this.creatures[i].stopSayingNo();
		}
	}
	
	this.onDropFood = function (event){
		
		_this.gameManager.hideHelp();
		
		var food = event.data.food;
		var tray = event.data.tray;

		var dropPt = food.displayObj.localToGlobal(0,0);
		var origEvent = event.data.origEvent;
		var hitABowl = false;
		var hitTheTray = false;
		var comingFromTray = tray.contains(food);
	
		for(var i=0; i<_this.creatures.length; i++ ){
			var bowlPt = _this.creatures[i].bowl.dish.globalToLocal(dropPt.x, dropPt.y);
			
			var bowlBounds = _this.creatures[i].bowl.dish.nominalBounds;
			if( (Math.abs(bowlPt.x) < bowlBounds.width/2) && (Math.abs(bowlPt.y) < bowlBounds.height/3) ){

			_this.creatures[i].bowl.addFood(food);
				
				hitABowl = true;
				
				
				break;
			}
		}
		
		if(dropPt.y > _this.inZoom.nominalBounds.height - 200){
			hitTheTray = true;
		}
		
		if(hitTheTray || !hitABowl){	
			tray.returnSpecific(food);
		} else if (hitABowl){
			//_this.gameManager.helpPrompt.setHint(null);
			_this.gameManager.helpPrompt.reset();
		}
		
	} 
	
	this.onDropCutter = function (evt){
		_this.buffet.selectedTray.cutFoodIfTouching(evt);
	}
	this.onCutterMiss = function (evt){
		evt.data.cutter.reset(false);
	}
	
	// Once the food is out, update the food requirements of the creatures in this pen
	this.onFoodDisplayed = function (evt){
	
		var totalFood = _this.buffet.selectedTray.numFood();
		
		//_log("\n_this.buffet: " + _this.buffet + ", selectedTray: " + _this.buffet.selectedTray + ": The food is out; each creature gets " + totalFood + "/" + _this.creatures.length + " (== " + totalFood/_this.creatures.length + ")  pieces.");
		
		for(var i=0; i<_this.creatures.length; i++ ){
			_this.creatures[i].numFoodEatenThisRound = 0;
			_this.creatures[i].numFoodRequired = totalFood/_this.creatures.length;
		}
	}
	
	this.inZoom.addEventListener("PRESS_BOWL", function (e){_this.onSelectBowl(e);});
	this.inZoom.addEventListener("PRESS_FOOD_IN_BOWL", _this.stopFeedback);
	this.inZoom.addEventListener("TRAY_DISTRIBUTED", function (e){_this.checkReadinessToEat(e);});
	this.inZoom.addEventListener("DONE_EATING", function (e){_this.onDoneEating(e);});
	this.inZoom.addEventListener("DROP_FOOD", _this.onDropFood);
	this.inZoom.addEventListener("DROP_CUTTER", _this.onDropCutter);
	this.inZoom.addEventListener("CUTTER_MISS", _this.onCutterMiss);
	//this.inZoom.addEventListener("SELECT_TRAY", _this.prepareBowlHint);
	this.inZoom.addEventListener("RETURN_TRAY", _this.onReturnTray);
	this.inZoom.addEventListener("BOWL_FULL", _this.onBowlFull);
	this.inZoom.addEventListener("FOOD_DISPLAYED", _this.onFoodDisplayed);
	this.inZoom.addEventListener("CHOOSE_FOOD", _this.onChooseFood);
	this.inZoom.addEventListener("ADDED_FOOD", function (e){ _this.gameManager.helpPrompt.reset();});

}

//traceLoadProgress();