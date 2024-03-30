/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  Bowl
  receives the food the creature will eat
	
  parameters:
	string /bowlSize/:  "small", "medium", or "large"
	Creature /creature/: The creature who is parent to this bowl.
*/


var Bowl = function (bowlSize, creature) {

	//_log("BOWL");
	
	var _this = this;
	var MAX_PIECES = 12;

	// acceptable sizes: "small", "medium", or "large"
	this.size = bowlSize !== undefined ? bowlSize : "small";
	
	this.owner = creature;
		
	this.foodInBowl = [];
	
	this.displayObj = new lib.bowl();
	this.displayObj.manager = _this;
	
	this.dish = this.displayObj.dish;
	
	var FOOD_SCALE = 0.65;
	var NUM_OF_TYPE = 3;
	
	this.numFood = function (){
		
		var foodTotal = 0;
		for(var i=0; i<_this.foodInBowl.length; i++ ){
			foodTotal += _this.foodInBowl[i].value;
		}
		return foodTotal;
	}
	
	this.setSize = function (newSize){
		_this.size = newSize;
	}
	
	this.protectFood = function (){
		for(var i=0; i < _this.foodInBowl.length; i++ ){
			_this.foodInBowl[i].disableInteractivity();
		}
	}
	
	// Boolean allFoodOfType
	//         =============
	// Return whether all the food in this bowl is of the specified type.
	//--------------------------------------------------------------------------
	this.allFoodOfType = function (type){
		return true;
	}
	
	this.contains = function (food){
		for(var i=0; i<_this.foodInBowl.length; i++ ){
			if(_this.foodInBowl[i] == food){
				return true;
			}
		}
		return false;
	}
	
	// void addFood
	//      =======
	// Add the specified piece of food to this bowl
	//------------------------------------------------------------------------
	this.addFood = function (foodPiece){

		if(foodPiece !== null){
			//_log("addFood::::: " + _this.foodInBowl.length + " in bowl");
			var foodPos = -1;
			var newNumPieces = (_this.foodInBowl.length+1);

			for(var i=0; i<MAX_PIECES; i++ ){
				//_log("     looking for room at " + ("pos" + i) + " in " + _this.displayObj);
				if(_this.displayObj["pos"+newNumPieces+"_"+i] != undefined){
					if(_this.displayObj["pos"+newNumPieces+"_"+i].getNumChildren()==0){
						foodPos = i;
						break;
					}
				} else {
					foodPiece.tray.returnSpecific(foodPiece);
					var evt = new createjs.Event("BOWL_FULL", true);
					evt.data = {bowl:_this, creature:_this.owner};
					_this.displayObj.dispatchEvent(evt);
					//_this.owner.pen.gameManager.soundManager.playSound("onoffbutton", 0);
				}
			}
			if(foodPos >= 0 && foodPos < MAX_PIECES){
				//_log("::: adding at pos " + foodPos);
				
				
				if(!_this.contains(foodPiece)){
					_this.foodInBowl.push(foodPiece);
				

					for(var i=0; i < _this.foodInBowl.length; i++){
						//_log(" ### trying to add "+_this.foodInBowl[i] + " to pos"+newNumPieces+"_"+i);
						_this.displayObj["pos"+newNumPieces+"_"+i].addChild(_this.foodInBowl[i].displayObj);
					}
					foodPiece.displayObj.x = 0, foodPiece.displayObj.y = 0;
					foodPiece.displayObj.scaleX = foodPiece.displayObj.scaleY = FOOD_SCALE;
					foodPiece.bowl = _this;
					foodPiece.reportPlaced();
					var dropY = foodPiece.displayObj.y;
					createjs.Tween.get(foodPiece.displayObj).to({y:dropY-20}, 0).to({y:dropY}, 100);
					//_log("    o    the bowl for " + foodPiece.name + " is with " + foodPiece.bowl.owner.name + ", food in bowl: " + _this.numFood());
					//_this.owner.pen.gameManager.cancelVoicePrompts();
					_this.owner.pen.gameManager.helpPrompt.reset();
					_this.owner.pen.gameManager.soundManager.playSoundAfter("putfoodonplate", 0, 20);
					
					var evt = new createjs.Event("ADDED_FOOD", true);
					evt.data = {bowl:_this, creature:_this.owner};
					_this.displayObj.dispatchEvent(evt);
					
					//_this.owner.pen.gameManager.soundManager.playSound("onoffbutton", 0);
				}
				
			} else {
				//_log("    o    couldn't find a place to add it.");
				foodPiece.tray.returnSpecific(foodPiece);
				var evt = new createjs.Event("BOWL_FULL", true);
				evt.data = {bowl:_this, creature:_this.owner};
				_this.displayObj.dispatchEvent(evt);
				//_this.owner.pen.gameManager.soundManager.playSound("onoffbutton", 0);
			}
		} else {
			//_log("    o    null food, not adding to the bowl.");
			//this.owner.pen.gameManager.soundManager.playSound("onoffbutton", 0);
		}
	}
	
	// Remove the last added foodPiece from the bowl
	this.removeFood = function (){
		return _this.removeSpecific(_this.foodInBowl[_this.foodInBowl.length-1]);

	}
	
	this.removeSpecific = function (foodToRemove){
		//_log("       " + _this.owner.name + " about to remove 1 food piece from a BOWL of " + _this.numFood() + ", i.e. " + _this.foodInBowl.length + " pieces.");
		if(foodToRemove !== undefined){
			var foundFood = false;
			for(var i=0; i<_this.foodInBowl.length; i++ ){
				if(_this.foodInBowl[i] == foodToRemove){
					if(foodToRemove.displayObj.parent !== null){
						foodToRemove.displayObj.parent.removeChild(foodToRemove.displayObj);
					}
					_this.foodInBowl.splice(i, 1);
					foundFood = true;
				}
			}
			if(!foundFood){
				//wwit???
				//_log("       " + _this.owner.name + " couldn't find food in its bowl! reset?");
				foodToRemove.reset();
			}
			
			foodToRemove.bowl = null;
			//foodToRemove.reportUnplaced(foodToRemove);
			
			//_log("       done. " + _this.numFood() + " left.");
		}
		var newNumPieces = _this.foodInBowl.length;
		for(var i=0; i < newNumPieces; i++){
			//_log(" ### trying to add "+_this.foodInBowl[i] + " to pos"+newNumPieces+"_"+i);
			_this.displayObj["pos"+newNumPieces+"_"+i].addChild(_this.foodInBowl[i].displayObj);
		}
		return foodToRemove;
	}
	
	// Clear all foodPieces out of the bowl
	this.clear = function (){
		while(_this.foodInBowl.length > 0){
			_this.removeSpecific(_this.foodInBowl.pop());
		}
	}
	
	// show
	// ====
	// If true, show, or if false, hide this bowl
	//-------------------------------------------------
	this.show = function (toShow){
		if(toShow){
			_this.owner.displayObj.addChild(_this.displayObj);
			_this.displayObj.gotoAndStop(_this.size);
			_this.dish = _this.displayObj.dish;
			_this.owner.displayObj.addChild(_this.owner.body);
			//_this.owner.pen.gameManager.soundManager.playSound("plateappears", 0);
		} else {
			_this.owner.displayObj.removeChild(_this.displayObj);
		}
		//_log("show me? " + toShow + ", my currentLabel: " + _this.displayObj.getCurrentLabel() + " and my size: " + _this.size);
	}
	
	
	this.pressBowl = function (e){
		if(_this.owner.state == "hungry"){
			//_log("\n p r e s s   b o w l, " + _this.foodInBowl.length + " in so far.");
			var evt = new createjs.Event("PRESS_BOWL", true);
			evt.data = {bowl:_this, creature:_this.owner};
			_this.displayObj.dispatchEvent(evt);
		}
	}	
}

//traceLoadProgress();