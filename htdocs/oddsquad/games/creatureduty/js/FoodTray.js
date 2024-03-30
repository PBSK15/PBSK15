/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  FoodTray
  contains the food choices for each pen
	
	
*/

var FoodTray = function (setup, family, colour, detail, shape, pen, trayDimensions) {
	
	var _this = this;

	this.foodSetup = setup;
	
	this.subTypeNum = 0;
	this.foodInTray = [];
	this.foodServed = [];
	this.pen = pen;
	
	var sheetWidth = trayDimensions.x;
	var sheetHeight = trayDimensions.y;

	this.displayObj = new createjs.Container();
	this.displayObj.trayBg = new lib.waxpaper();
	this.displayObj.trayBg.y = -this.displayObj.trayBg.nominalBounds.height/2;
	this.displayObj.trayBg.x = -this.displayObj.trayBg.nominalBounds.width/2;
	
	var trayHA = new createjs.Shape();
	trayHA.graphics.beginFill("red").drawRect(this.displayObj.trayBg.nominalBounds.x, this.displayObj.trayBg.nominalBounds.y, this.displayObj.trayBg.nominalBounds.width, this.displayObj.trayBg.nominalBounds.height);
	this.displayObj.trayBg.hitArea = trayHA;                                                                                 
	
	//this.displayObj.trayBg.mouseEnabled = false;
	//_log("\n\nTRAY BG: " + this.displayObj.trayBg.x + ", " + this.displayObj.trayBg.y + "\n\n");
	this.displayObj.addChild(this.displayObj.trayBg);
	
	this.setPen = function (newPen){
		_this.pen = newPen;
		//_log(_this + " now belongs to pen " + _this.pen);
	}
	
	this.trayScale = 1;
	
	
	var startPos = new Point(this.displayObj.trayBg.x + Math.max(60, 512-_this.foodSetup.length*150), 0);
	var midTrayX = 43;
	var midTrayY = -5;
	
	var foodColour = colour;
	var foodDetail = detail;
	var foodFamily = family;
	var foodShape = shape;
	
	this.foodSpacing = new Point((foodShape=="rect"?125:110) + Math.max(0, 100-_this.foodSetup.length*20), 100);
	var PIECES_PER_ROW = 5;
	
	this.layOutFood = function (){
	
		var i_mid = Math.min(_this.foodSetup.length, PIECES_PER_ROW)/2;
	
		// Create and lay out the specified food
		for(var i=0; i<_this.foodSetup.length; i++ ){
			
			var pieceIndex = _this.foodSetup[i] == "whole" ? 0 : 1;
			
			var pieceX = midTrayX + (((i%PIECES_PER_ROW)-i_mid)*_this.foodSpacing.x) + ((i<PIECES_PER_ROW) ? 0 : _this.foodSpacing.x/2);
			var pieceY = midTrayY + ((_this.foodSetup.length <= PIECES_PER_ROW) ? 0 : (i<PIECES_PER_ROW) ? _this.foodSpacing.y/2 : -_this.foodSpacing.y/2);
			var piecePt = {x:pieceX, y:pieceY};

			var foodPiece = new Food(_this.foodSetup[i], foodShape, foodColour, foodDetail, foodFamily, _this, piecePt, pieceIndex);
			
			_this.displayObj.addChild(foodPiece.displayObj);
		
			_this.foodInTray.push(foodPiece);
		}
		for(var i=0; i<_this.foodSetup.length; i++ ){
			if(i>= PIECES_PER_ROW){
				_this.displayObj.addChild(foodPiece.displayObj);
			}
		}
	}
	
	this.layOutFood();
	
	
	//_log("*\n *\n  * n e w " + _this.name + " in " + _this.pen.name);
	
	this.pressTray = function (){
		//_log(" pressing tray " + _this.name);
		var evt = new createjs.Event("SELECT_TRAY", true);
		evt.data = {tray:_this};
		_this.displayObj.dispatchEvent(evt);
	}

	this.clear = function (){
		var allFood = _this.allFood();
		//_log("CLEARING all " + allFood.length + " food." );
		for (var i=0; i < allFood.length; i++ ){
			//allFood[i].removeAllEventListeners();
			if(allFood[i].parent !== null){
				allFood[i].parent.removeChild(allFood[i]);
			}
		}
	}
	
	this.allFood = function (){
		return _this.foodInTray.concat(_this.foodServed);
	}
	
	
	this.reportPlaced = function (food){
	
		food.placed = true;
		food.inDrag = false;
		var alreadyPlaced = false;
		for(var i=0; i< _this.foodServed.length; i++ ){
			if(_this.foodServed[i] == food){
				alreadyPlaced = true;
			}
		}
		if(!alreadyPlaced){	
			//_log("----------- " + food + " just placed.");
			_this.foodServed.push(food);
		} else {
			//_log(food + " ALREADY placed.");
		}
		
		var totalServed = 0;
		for(var i=0; i<_this.foodServed.length; i++ ){
			totalServed += _this.foodServed[i].value;
		}
			
		if(totalServed.toFixed(3) == _this.numFood().toFixed(3)){
			//_log("so, all placed!");
			createjs.Tween.get(_this).wait(200).call(_this.announceAllPlaced);
		} else {
			//_log("but, not all placed yet.  " + totalServed.toFixed(3) + " vs " + _this.numFood().toFixed(3));
		}
	}
	
	this.reset = function (){
		var allFood = _this.foodInTray.concat(_this.foodServed);
		//_log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
		//_log("RESETTING all " + allFood.length + " food on tray " + _this );
		_this.foodInTray = [];
		_this.foodServed = [];
		for (var i=0; i < allFood.length; i++ ){
			
			var foodPiece = allFood[i];
			
			_this.displayObj.addChild(foodPiece.displayObj);
			
			_this.returnSpecific(foodPiece);
			foodPiece.reset();
			//_this.displayObj.addChild(foodPiece.displayObj);
			foodPiece.displayObj.x = foodPiece.trayPos.x;
			foodPiece.displayObj.y = foodPiece.trayPos.y;
			//_log("food piece " + i + " reset to pos " + foodPiece.displayObj.x + ", " + foodPiece.displayObj.y);
			//_this.foodInTray.push(allFood[i]);
		}
		
	}
	
	this.announceEmpty = function (){
		var evt = new createjs.Event("TRAY_EMPTY", true);
		evt.data = {tray:_this};
		_this.displayObj.dispatchEvent(evt);
	}

	
	this.announceAllPlaced = function (){
		var evt = new createjs.Event("TRAY_DISTRIBUTED", true);
		evt.data = {tray:_this};
		_this.displayObj.dispatchEvent(evt);
	}

	this.numFood = function(){
		var allFood = [].concat(_this.foodInTray).concat(_this.foodServed);
		var numFood = 0;
		for(var i=0; i<allFood.length; i++ ){
			numFood += allFood[i].value;
		}
		return numFood;
	}

	// isFull
	// ======     =======
	// return whether this tray is full
	//--------------------------------------------------------------------------
	this.isFull = function (){
		//_log("isFull? " + _this.foodInTray.length + " of " + _this.numFood());
		return _this.foodInTray.length == _this.numFood();
	}
	// isEmptyAndEaten
	// ===============
	// return whether this tray is empty AND ALL THE FOOD HAS BEEN EATEN.
	//--------------------------------------------------------------------------
	this.isEmptyAndEaten = function (){
		var foodInBowls = false;
		for(var i=0; i<_this.foodServed.length; i++ ){
			if(_this.foodServed[i].bowl !== null){
				foodInBowls = true;
			}
		}
		
		return (!foodInBowls && _this.isEmpty());
	}
	// isEmpty
	// =======
	// return whether this tray is empty
	//------------------------------------------
	this.isEmpty = function (){
		return _this.foodInTray.length == 0;
	}
	
	// isDistributing
	// =======
	// return whether food is being dragged around right now
	//-----------------------------------------------------------
	this.isDistributing = function (){
		var distributing = false;
		for(var i=0; i<_this.foodInTray.length; i++ ){
			if(_this.foodInTray[i].inDrag){
				distributing = true;
				break;
			}
		}
		return distributing;
	}


	
	// removeOne
	// =========
	// take out and return one cupcake.  
	// If there are none left, dispatch a notifier to that effect
	//----------------------------------------------------------------------------------------------------
	this.removeOne = function (){
		//_log(" remove One ");
		//_log("(first let's look at what's in foodInTray):");
		for(var i=0; i<_this.foodInTray.length; i++ ){
			//_log("       " + i + ": " + _this.foodInTray[i].name);
		}
		if(_this.foodInTray.length > 0){
			var foodToRemove = _this.foodInTray.pop();
			//_log("      ...just popped " + foodToRemove.name + " out of foodInTray");
			_this.displayObj.removeChild(foodToRemove);
			
			if(_this.foodInTray.length == 0){
				createjs.Tween.get(_this).wait(200).call(_this.announceEmpty);
			}
			return foodToRemove;
			
		} else {
			return null;
		}
	}
	
	this.removeSpecific = function (foodToRemove){
		//_log("trying to remove food item " + _this.foodInTray.indexOf(foodToRemove) + " of " + _this.foodInTray.length + " from TRAY");
		var foundFood = false;
		for(var i=0; i<_this.foodInTray.length; i++ ){
			if(_this.foodInTray[i] == foodToRemove){
				//_log("found it and removing it.");
				/*_this.displayObj.removeChild(foodToRemove);*/		
				_this.foodInTray.splice(i, 1);
				foundFood = true;
				break;
			}
		}
		if(foundFood){
			//_log("just removed " + foodToRemove + ", food left? " + _this.foodInTray.length);
			
			if(_this.foodInTray.length == 0){
				createjs.Tween.get(_this).wait(200).call(_this.announceEmpty);
			}
		
		} else {
			//_log("totally couldn't find it.  food left: " + _this.foodInTray.length);
		}
		return foodToRemove;
	}
	
	this.contains = function (food){
		for(var i=0; i<_this.foodInTray.length; i++ ){
			if(_this.foodInTray[i] == food){
				return true;
			}
		}
		return false;
	}
	
	this.returnSpecific = function (foodToReturn){
		//_log("returning specifically " + foodToReturn);
		var foundFood = false;

		//_log("FOUND IT, putting it back.");

		if(foodToReturn.bowl !== undefined && foodToReturn.bowl !== null){
			foodToReturn.bowl.removeSpecific(foodToReturn);
		}
		_this.displayObj.addChild(foodToReturn.displayObj);
		foodToReturn.displayObj.setTransform(foodToReturn.trayPos.x, foodToReturn.trayPos.y, foodToReturn.tray.trayScale, foodToReturn.tray.trayScale);
		
		for(var i=0; i< _this.foodServed.length; i++ ){
			if(_this.foodServed[i] == foodToReturn){
				_this.foodServed.splice(i, 1);
				break;
			}
		}
		
		
		if(!_this.contains(foodToReturn)){
			_this.foodInTray.push(foodToReturn);
			//_log("adding it back into the fold!  now in tray: " + _this.foodInTray);
		} else {
			//_log("this food piece is already in the tray eh: " + _this.foodInTray);
		}
	}
	
	this.returnOne = function (){
		//_log(" return One ");
		if(_this.foodServed.length > 0){
			var foodToReturn = _this.foodServed.pop();
			//_log("     ...just popped " + foodToReturn.name + " out of foodServed.");
			var localTrayPos = _this.displayObj.localToLocal(foodToReturn.trayPos.x, foodToReturn.trayPos.y, foodToReturn.parent);
			
			
					
			createjs.Tween.get(foodToReturn).to({x:localTrayPos.x, y:localTrayPos.y}, 300).call(
				function (e){
					var foodToReturn = e.target;
					if(foodToReturn.bowl !== undefined){
						foodToReturn.bowl.removeSpecific(foodToReturn);
					}
					_this.foodInTray.push(foodToReturn);
					_this.displayObj.addChild(foodToReturn.displayObj);
					foodToReturn.scaleX = foodToReturn.trayScale.x;
					foodToReturn.scaleY = foodToReturn.trayScale.y;
					foodToReturn.displayObj.x = foodToReturn.trayPos.x;
					foodToReturn.displayObj.y = foodToReturn.trayPos.y;
					foodToReturn.reset();
				}
			);
			
		}
	}
	
	// replace foodPiece with the equivalent smaller pieces indicated by the cutter
	// Food foodPiece: the piece to cut
	// Cutter cutter: the cutter to cut it with
	// Boolean inPlace: is the cutter already positioned over the food?
	//----------------------------------------------------------------------------------------------------------------------
	this.cutFoodWith = function (foodPiece, cutter, inPlace){
		
		//_log("Tray " + _this.name + ", Looking for " + foodPiece + " among " + _this.foodInTray.length + " pieces in tray so I can cut it.");
		
		if(cutter !== null && !cutter.inCut){
			cutter.showHighlight(false);
			cutter.inCut = true;
			foodPiece.disableInteractivity();
			
			var foundFoodInTray = false;
			
			for(var i=0; i<_this.foodInTray.length; i++ ){
			
				if(foodPiece == _this.foodInTray[i]){
					//_log("got it, proceeding.");
					
					var foodPos = foodPiece.trayPos;
					var foodPosInSpread = _this.displayObj.localToLocal(foodPiece.trayPos.x, foodPiece.trayPos.y, _this.pen.buffet.foodContainer);
				
					// We can only cut up whole pieces
					if(foodPiece.value == 1){
						cutter.engage();
						foundFoodInTray = true;
						createjs.Tween.get(cutter.displayObj).to({y:cutter.displayObj.y-50}, inPlace? 25 : 50).to({x:foodPosInSpread.x, y:foodPosInSpread.y-50}, inPlace? 25 : 150).to({x:foodPosInSpread.x, y:foodPosInSpread.y}, 300).wait(75).call(cutFoodPart2, [foodPiece, cutter]).to({x:foodPosInSpread.x, y:foodPosInSpread.y-50}, 150).to({x:cutter.startPos.x, y:cutter.startPos.y-50}, 150).to({x:cutter.startPos.x, y:cutter.startPos.y}, 50).call(cutter.reset, [true], cutter);
						
					} else {
						// Hover over the piece and then go back 'cause it's not cuttable.
						createjs.Tween.get(cutter.displayObj).to({y:cutter.displayObj.y-50}, inPlace? 25 : 50).to({x:foodPosInSpread.x, y:foodPosInSpread.y-50}, inPlace? 25 : 300).wait(100).to({x:cutter.startPos.x, y:cutter.startPos.y-50}, 300).to({x:cutter.startPos.x, y:cutter.startPos.y}, 50).call(cutter.reset, [true], cutter);
					}
				} 
			}
			
			if(!foundFoodInTray){
				// ok, we didn't find it.  Deselect so this insta-cut behaviour doesn't automatically apply to the very next piece that gets dragged back to the table.
				//_log (":(  :( failed to find it, deselecting.");
				
				cutter.reset(true);
				//cutter.deselect();
				foodPiece.resetListeners();
			}
		}
	
	}
	
	
	var cutFoodPart2 = function (foodPiece, cutter){
	
		var foodPos = foodPiece.trayPos;
		var foodPosInSpread = _this.displayObj.localToLocal(foodPiece.trayPos.x, foodPiece.trayPos.y, _this.pen.buffet.displayObj);
		cutter.inCut;
		
		//_log(" Cutting a " + foodPiece.shape);
	
		for(var a = _this.foodInTray.length - 1; a >= 0; a--) {
			if(_this.foodInTray[a] === foodPiece) {
			   _this.foodInTray.splice(a, 1);
			}
		}

		var fractionNames = { "halves": "half", "thirds": "third", "fourths": "fourth"};
		var piecePositions = { 
			circle:{ 
				"half1": {x:-26,y:0}, "half2": {x:26,y:0}, 
				"third1": {x:0,y:25}, "third2": {x:-28,y:-25}, "third3": {x:28,y:-25},
				"fourth1": {x:-29,y:-27}, "fourth2": {x:29,y:-27}, "fourth3": {x:-29,y:27}, "fourth4": {x:29,y:27}
			},
			tri:{ 
				"half1": {x:-21,y:0}, "half2": {x:21,y:0},
				"third1": {x:0,y:28}, "third2": {x:-21,y:-25}, "third3": {x:21,y:-25},
				"fourth1": {x:0,y:-22}, "fourth2": {x:0,y:10}, "fourth3": {x:-36,y:35}, "fourth4": {x:36,y:35}
			},
			rect:{ 
				"half1": {x:-30,y:0}, "half2": {x:30,y:0},
				"third1": {x:0,y:0}, "third2": {x:-45,y:0}, "third3": {x:45,y:0}, 
				"fourth1": {x:-32,y:-26}, "fourth2": {x:32,y:-26}, "fourth3": {x:-32,y:26}, "fourth4": {x:32,y:26} 
			}
		};
		
		var newPieces = 
		(cutter.fractions == "halves") ? ["half1","half2"]
		 : (cutter.fractions == "thirds") ? ["third1","third2","third3"]
		  : ["fourth1","fourth2","fourth3","fourth4"];

		for(var i=0; i<newPieces.length; i++){
			var adjusts = piecePositions[foodPiece.shape][newPieces[i]];
			var piecePt = new Point(foodPos.x + adjusts.x, foodPos.y + adjusts.y);
			_log("=>  new Food( "+fractionNames[cutter.fractions]+", "+foodPiece.shape+", "+foodPiece.colour+", "+foodPiece.detail+", "+foodPiece.family+", "+_this+", "+ piecePt+", "+(i+1)+" )");
			var pc_i =  new Food(fractionNames[cutter.fractions], foodPiece.shape, foodPiece.colour, foodPiece.detail, foodPiece.family, _this, piecePt, (i+1));
			pc_i.displayObj.regX = pc_i.displayObj.regY = 0;
			_this.displayObj.addChild(pc_i.displayObj);
			_this.foodInTray.push(pc_i);
		}

		_this.displayObj.removeChild(foodPiece.displayObj);
		
		_this.pen.gameManager.soundManager.playSound("cutfood", 0);
		
		var evt = new createjs.Event("CUTTING_FOOD", true);
		_this.displayObj.dispatchEvent(evt);
	}
		
		
	this.cutFoodIfTouching = function (evt){
	
		if(!evt.data.cutter.inCut){
			
			var cutterObj = evt.data.cutter.displayObj;
			
			var hittingFood = false;
			
			hittestloop:
			for (var i=0; i < _this.foodInTray.length; i++ ){
				var targetFoodObj = _this.foodInTray[i].displayObj;
				var localCutterPos = _this.pen.buffet.foodContainer.localToLocal(cutterObj.x, cutterObj.y, targetFoodObj);
				_log("%c ? " + targetFoodObj + " hitting " + cutterObj + " at " + localCutterPos + " ? ","background-color:powderblue;");
				_log("\nfake HITTEST food vs cutter pt\n");
				var tfBounds = targetFoodObj.nominalBounds;
				if( (Math.abs(localCutterPos.x) < tfBounds.width/2) && (Math.abs(localCutterPos.y) < tfBounds.height/2) ){
					hittingFood = true;
					
					_this.cutFoodWith(_this.foodInTray[i], evt.data.cutter, true);
					break hittestloop;
				}
			}
			
			if(!hittingFood){
				_log("broadcasting a MISS.");
				var evt2 = new createjs.Event("CUTTER_MISS", true);
				evt2.data = {cutter:evt.data.cutter};
				_this.displayObj.dispatchEvent(evt2);
				
			}
		}
		
	}

	this.name = Math.round(Math.random()*9999) + " TRAY of " + this.numFood() + " " + family + "_" + colour + "_" + detail + "_" + shape;

}

//traceLoadProgress();