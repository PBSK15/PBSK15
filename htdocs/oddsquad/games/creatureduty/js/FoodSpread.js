/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  FoodSpread
  displays a selection of food choices for each pen
	
  parameters:
	Pen /pen/ : the zone that contains this buffet.
*/

var FoodSpread = function (pen) {
	//require.include("js/FoodTray.js");
	//_log("FOOD SPREAD");
	
	var _this = this;
	this.phase = "choose";
	this.choiceAttempts = 0;

	_this.pressedReset = false;
	var numFoodTypesUnlocked = 1;

	// puzzles[n] is the puzzle selection for a group of n creatures.
	var puzzles = [
		{}, 
		{ small:[1], medium:[2], large:[3] }, 
		{ small:[2, 1, 3], medium:[3, 2, 1, 4], large:[4, 5] }, 
		{ small:[3, 1], medium:[1, 4, 6], large:[6, 4, 7] }, 
		{ small:[4, 1, 2], medium:[4, 2, 5], large:[5, 8, 9] }
	];
	/*
	var puzzles = [
		{}, 
		{ small:[1], medium:[2], large:[3] }, 
		{ small:[2, 1, 3], medium:[4, 5], large:[6, 7] }, 
		{ small:[3, 1, 1.5, 2], medium:[6, 7, 4.5, 4, 8], large:[9, 10, 7.5, 11] }, 
		{ small:[4, 1, 5, 2, 1 + 1/3], medium:[8, 9, 6, 10], large:[12] }
	];
	*/
	
	var preferenceProgression = [
		//{colours:1, shapes:1, details:1}, 
		{colours:1, shapes:2, details:1}, {colours:2, shapes:1, details:1}, {colours:1, shapes:1, details:2}, {colours:2, shapes:2, details:1}, {colours:1, shapes:2, details:2}, {colours:2, shapes:1, details:2}, {colours:2, shapes:2, details:2}
	];
	
	var foodFamilies = [
		{family:"sandwich", colours:["beige", "brown"], details:["olive", "pickle"], shapes:["circle", "tri", "rect"]}, 
		{family:"cake", colours:["pink", "purple"], details:["raspberries", "blueberries"], shapes:["circle", "tri", "rect"]}, 
		{family:"loaf", colours:["yellow", "orange"], details:["bluebow", "greenbow"], shapes:["circle", "tri", "rect"]}
	];
	
	
	this.targetFeatures = [];
	this.targetFamily = "sandwich";
	this.targetColour = "brown";
	this.targetDetail = "pickle";
	this.targetShape = "circle";
	this.choicesDisplayed = [];
	this.boxTubes = [];
	
	var fakeTube_front = new lib.tube_front;
	var fakeTube_back = new lib.tube_back;
	fakeTube_front.mouseEnabled = fakeTube_back.mouseEnabled = false;
	fakeTube_front.rotation = fakeTube_back.rotation = 90;

	
	this.firstClick = false;
	
	this.pen = pen;
	var penBounds = this.pen.inZoom.nominalBounds;
	var zoneHeight = 200;
	
	var _rand = Math.random();
	
	this.displayObj = new createjs.Container();
	this.displayObj.name = "Food Spread Main";
	
	this.foodContainer = new createjs.Container();
	this.foodContainer.name = "Food Container";
	this.foodContainer.returnZone = new lib.countertop();
	this.foodContainer.returnZone.mouseEnabled = false;
	
	this.choiceContainer = new createjs.Container();
	this.choiceContainer.name = "Choice Container";
	this.choiceContainer.returnZone = new lib.countertop();
	this.choiceContainer.returnZone.mouseEnabled = false;
	//this.choiceContainer.mouseChildren = true;
	
	this.currentChoice = null;

	this.displayObj.addChild(this.choiceContainer);
	
	this.CENTER_Y = -this.foodContainer.returnZone.nominalBounds.height/2;
	
	var tabletop = this.foodContainer.returnZone;
	tabletop.x = -tabletop.nominalBounds.width/2;
	tabletop.y =  -tabletop.nominalBounds.height;
	this.choiceContainer.returnZone.x = -this.choiceContainer.returnZone.nominalBounds.width/2;
	this.choiceContainer.returnZone.y =  -this.choiceContainer.returnZone.nominalBounds.height;
	//_log("\n\n RETURN ZONE : " + this.foodContainer.returnZone.x + ", " + this.foodContainer.returnZone.y + "\n\n");
	
	this.resetButton = new lib.replay_button();
	//this.resetButton.setTransform(-460, this.CENTER_Y + 70, 1, 1);
	this.resetButton.setTransform(tabletop.x + tabletop.nominalBounds.width - 40, this.CENTER_Y + 70, 1, 1);

	
	var resetHA = new createjs.Shape();
	resetHA.graphics.beginFill("red").drawRect(this.resetButton.nominalBounds.x, this.resetButton.nominalBounds.y, this.resetButton.nominalBounds.width, this.resetButton.nominalBounds.height);
	this.resetButton.hitArea = resetHA;
	this.resetButton.on("pressup", function (e){_this.resetSpread();});
	this.resetButton.on("mouseover",function (evt){evt.target.cursor = 'pointer';});

	var CUTTER_Y_OFFSET = 20;
	
	// diagonal
	var cutter1Pt = new Point(-455, this.CENTER_Y - 35);
	var cutter2Pt = new Point(-362, this.CENTER_Y + 15);
	var cutter3Pt = new Point(-269, this.CENTER_Y + 65);
	
	var triDock1 = new lib.cutter_tri_slot();
	var triDock2 = new lib.cutter_tri_slot();
	var triDock3 = new lib.cutter_tri_slot();
	var triCutter1 = new Cutter("tri", "halves", cutter1Pt, triDock1);
	var triCutter2 = new Cutter("tri", "thirds", cutter2Pt, triDock2);
	var triCutter3 = new Cutter("tri", "fourths", cutter3Pt, triDock3);
	var circleDock1 = new lib.cutter_circle_slot();
	var circleDock2 = new lib.cutter_circle_slot();
	var circleDock3 = new lib.cutter_circle_slot();
	var circleCutter1 = new Cutter("circle", "halves", cutter1Pt, circleDock1);
	var circleCutter2 = new Cutter("circle", "thirds", cutter2Pt, circleDock2);
	var circleCutter3 = new Cutter("circle", "fourths", cutter3Pt, circleDock3);
	var rectDock1 = new lib.cutter_rect_slot();
	var rectDock2 = new lib.cutter_rect_slot();
	var rectDock3 = new lib.cutter_rect_slot();
	var rectCutter1 = new Cutter("rect", "halves", cutter1Pt, rectDock1);
	var rectCutter2 = new Cutter("rect", "thirds", cutter2Pt, rectDock2);
	var rectCutter3 = new Cutter("rect", "fourths", cutter3Pt, rectDock3);
	rectCutter1.scaleX = rectCutter2.scaleX = rectCutter3.scaleX = 0.9;
	rectCutter1.scaleY = rectCutter2.scaleY = rectCutter3.scaleY = 1.3;
	
	
	
	this.cutters = {tri:[triCutter1, triCutter2, triCutter3], circle:[circleCutter1, circleCutter2, circleCutter3], rect:[rectCutter1, rectCutter2, rectCutter3]};
	this.docks = {tri:[triDock1, triDock2, triDock3], circle:[circleDock1, circleDock2, circleDock3], rect:[rectDock1, rectDock2, rectDock3]};
	
	this.foodContainer.addChild(this.foodContainer.returnZone);
	this.choiceContainer.addChild(this.choiceContainer.returnZone);
	
	for(var i=0; i<3; i++ ){
		
		//var rot = i==0 ? -45 : i==1 ? -22.5 : 0;
		var rot = 0;
		
		this.cutters.tri[i].displayObj.setTransform(this.cutters.tri[i].startPos.x, this.cutters.tri[i].startPos.y, this.cutters.tri[i].CUTTER_SCALE, this.cutters.tri[i].CUTTER_SCALE);
		this.docks.tri[i].setTransform(this.cutters.tri[i].startPos.x, this.cutters.tri[i].startPos.y, this.cutters.tri[i].CUTTER_SCALE, this.cutters.tri[i].CUTTER_SCALE, rot);
		this.cutters.circle[i].displayObj.setTransform(this.cutters.circle[i].startPos.x, this.cutters.circle[i].startPos.y, this.cutters.circle[i].CUTTER_SCALE, this.cutters.circle[i].CUTTER_SCALE);
		this.docks.circle[i].setTransform(this.cutters.circle[i].startPos.x, this.cutters.circle[i].startPos.y, this.cutters.circle[i].CUTTER_SCALE, this.cutters.circle[i].CUTTER_SCALE, rot);
		this.cutters.rect[i].displayObj.setTransform(this.cutters.rect[i].startPos.x, this.cutters.rect[i].startPos.y, this.cutters.rect[i].CUTTER_SCALE, this.cutters.rect[i].CUTTER_SCALE);
		this.docks.rect[i].setTransform(this.cutters.rect[i].startPos.x, this.cutters.rect[i].startPos.y, this.cutters.rect[i].CUTTER_SCALE, this.cutters.rect[i].CUTTER_SCALE, rot);
		
		this.cutters.tri[i].setRotation(rot);
		this.cutters.circle[i].setRotation(rot);
		this.cutters.rect[i].setRotation(rot);
		
		this.docks.tri[i].mouseEnabled = this.docks.circle[i].mouseEnabled = this.docks.rect[i].mouseEnabled = false;
	}
	
	this.selectedCutter = null;
	
	_this.MAX_TRAY_SIZE = 8;
	var TRAY_SPACING = 130;
	var MIN_PAD = 40;
	var DROP_DIST = 20;
	this.trays = [];
	
	//var foodPool = this.pen.gameManager.foodPool;
	
	var steps = 0;
	
	var numTraysCreated = 0;

	this.firstRun = true;
	this.selectedTray = null;
	this.foodSelected = false;
	
	this.setPosition = function (_x, _y){
		_this.foodContainer.x = _this.choiceContainer.x = _x;
		_this.foodContainer.y = _this.choiceContainer.y = _y;
	}
	
	this.initRound = function (){
		_this.foodSelected = false;
		
		_this.initChoices();
		_this.layOutChoices();
		_this.firstClick = true;

	}
	
	this.initChoices = function (){
		//_log("  i n i t C h o i c e s   " + _this.pen.name);
		//--{family:"cake", colours:["pink", "purple"], details:["raspberries", "blueberries"], shapes:["circle", "tri", "rect"]}, 
		var foodFamily = foodFamilies[Math.floor(Math.random()*foodFamilies.length)];
		
		_this.targetFamily = foodFamily.family;
		
		var randomColourIndex = Math.floor(Math.random()*foodFamily.colours.length);
		_this.targetColour = foodFamily.colours[randomColourIndex];
		_this.nonTargetColours = [].concat(foodFamily.colours);
		_this.nonTargetColours.splice(randomColourIndex, 1);

		var randomDetailIndex = Math.floor(Math.random()*foodFamily.details.length);
		_this.targetDetail = foodFamily.details[randomDetailIndex];
		_this.nonTargetDetails = [].concat(foodFamily.details);
		_this.nonTargetDetails.splice(randomDetailIndex, 1);
		
		var randomShapeIndex = Math.floor(Math.random()*foodFamily.shapes.length);
		_this.targetShape = foodFamily.shapes[randomShapeIndex];
		_this.nonTargetShapes = [].concat(foodFamily.shapes);
		_this.nonTargetShapes.splice(randomShapeIndex, 1);
		
		//_log("targetColour: " + _this.targetColour + ", nonTargetColours: " + _this.nonTargetColours);
		//_log("targetDetail: " + _this.targetDetail + ", nonTargetDetails: " + _this.nonTargetDetails);
		//_log("targetShape: " + _this.targetShape + ", nonTargetShapes: " + _this.nonTargetShapes);
		
		//--{colours:1, shapes:1, details:1}, 
		var numCreatures = _this.pen.creatures.length;
		var MIN_CHOICES = _this.pen.gameManager.gameRound > 5 ? 4 : 3;
		var naturalLimit = numCreatures == 1 ? 2 : numCreatures == 2 ? 5 : preferenceProgression.length-1;
		var challengeLevel = Math.max(0, Math.min(_this.pen.gameManager.gameRound, naturalLimit));
		
		var targetSpecifics = preferenceProgression[challengeLevel];
		//_log("using challengeLevel " + challengeLevel + " based on gameRound " + _this.pen.gameManager.gameRound + " to get targetSpecifics " + targetSpecifics);
		_this.targetFeatures = [];
		_this.allChoices = [];
		
		while(_this.choiceContainer.getNumChildren()>1){
			_this.choiceContainer.removeChild(_this.choiceContainer.getChildAt(_this.choiceContainer.getNumChildren()-1));
		}
		
		_this.choicesDisplayed = [];
		
		if(targetSpecifics.colours > 1){
			_this.targetFeatures.push("colours");
		}
		if(targetSpecifics.shapes > 1){
			_this.targetFeatures.push("shapes");
		}
		if(targetSpecifics.details > 1){
			_this.targetFeatures.push("details");
		}
		
		//_log("--> targetFeatures: " + _this.targetFeatures);
		
		_this.allChoices.push({family:_this.targetFamily, colour:_this.targetColour, shape:_this.targetShape, detail:_this.targetDetail});
		for(var i=0; i < _this.targetFeatures.length; i++ ){
			var feature = _this.targetFeatures[i];
			var featureValues = feature == "shapes" ? _this.nonTargetShapes : feature == "colours" ? _this.nonTargetColours : _this.nonTargetDetails;
			
			//_log("--> featureValues: " + featureValues);
			for(var j=0; j < featureValues.length; j++ ){
				_this.allChoices.push({
								family: _this.targetFamily, 
								colour: feature == "colours" ? featureValues[j] : _this.targetColour, 
								shape: feature == "shapes" ? featureValues[j] : _this.targetShape, 
								detail: feature == "details" ? featureValues[j] : _this.targetDetail
								});
				//_log("--> _this.allChoices: " + _this.allChoices);
				var justAdded = _this.allChoices[_this.allChoices.length-1];
				//_log("foodChoice for " + _this.pen + ": " + justAdded.family + ", " + justAdded.colour + ", " + justAdded.shape + ", " + justAdded.detail);
			}
		}
		//_log("--> _this.allChoices: " + _this.allChoices);
		//_log("--> _this.nonTargetColours: " + _this.nonTargetColours);
		//_log("--> _this.nonTargetShapes: " + _this.nonTargetShapes);
		//_log("--> _this.nonTargetDetails: " + _this.nonTargetDetails);
		while(_this.allChoices.length < MIN_CHOICES){
			_this.allChoices.push({
				family: _this.targetFamily, 
				colour: _this.nonTargetColours[Math.floor(Math.random()*_this.nonTargetColours.length)], 
				shape: _this.nonTargetShapes[Math.floor(Math.random()*_this.nonTargetShapes.length)], 
				detail: _this.nonTargetDetails[Math.floor(Math.random()*_this.nonTargetDetails.length)]
			});
			var justAdded = _this.allChoices[_this.allChoices.length-1];
			//_log("foodChoice for " + _this.pen.name + ": " + justAdded.family + ", " + justAdded.colour + ", " + justAdded.shape + ", " + justAdded.detail);
		}
		
		//_log("TOTAL CHOICES FOR " + _this.pen.name + ": " + _this.allChoices.length);
		
		//_log("in pen " + _this.pen.name + ", TARGET: " + _this.targetFamily + ", " + _this.targetColour + ", " + _this.targetDetail + ", " + _this.targetShape);
	}


	
	this.resetChoices = function (){
		//_log("--> _this.choicesDisplayed: " + _this.choicesDisplayed);
		for(var i=0; i<_this.choicesDisplayed.length; i++ ){
			_this.deselectFood(_this.choicesDisplayed[i]);
			
		}
	}
	this.selectFood = function (foodChoice){
		//_log(" * * * SELECTING " + foodChoice.shape + ", " + foodChoice.colour + ", " + foodChoice.detail);
		if(foodChoice.selected){
			_this.deselectFood(foodChoice);
		} else {
			_this.resetChoices();
			foodChoice.selected = true;
			foodChoice.displayObj.y = foodChoice.trayPos.y - 50;
			foodChoice.shadowontable.y = foodChoice.shadowontable.baseY + 50;
			//_log("mah shadow: " + foodChoice.shadowontable + ", " + foodChoice.shadowontable.x + ", " + foodChoice.shadowontable.y);
			//foodChoice.displayObj.removeAllEventListeners();
			
			_this.firstClick = false;
			var evt = new createjs.Event("CHOOSE_FOOD", true);
			evt.data = {choice: foodChoice};
			foodChoice.displayObj.dispatchEvent(evt);
		}
	}
	
	this.deselectFood = function (foodChoice){
		//_log(" * * * DEselecting " + foodChoice.shape + ", " + foodChoice.colour + ", " + foodChoice.detail);
		foodChoice.selected = false;
		foodChoice.displayObj.y = foodChoice.trayPos.y;
		foodChoice.shadowontable.y = foodChoice.shadowontable.baseY;
		//_log("mah shadow: " + foodChoice.shadowontable + ", " + foodChoice.shadowontable.x + ", " + foodChoice.shadowontable.y);
	}

	
	this.dumpAllBut = function (rightChoice){
		//_log("--> _this.choicesDisplayed: " + _this.choicesDisplayed);
		for(var i=0; i<_this.choicesDisplayed.length; i++ ){
			var box = _this.choicesDisplayed[i];
			box.disableInteractivity();
			if (box != rightChoice){
				var new_y = box.displayObj.y + 300;
				var new_x = box.displayObj.x + (box.displayObj.x -_this.CENTER_Y)/4;
				////_log("T w e e n  1");
		   createjs.Tween.get(box.displayObj).to({ x:new_x, y:new_y }, 350, createjs.Ease.quadIn);
			}
		}
	}
	
	this.layOutChoices = function (){
		// Create and lay out the specified food options
		
		_this.choiceAttempts = 0;
		_this.allChoices.sort(function (a, b){return (Math.random() < 0.5 ? 1 : -1);});
		//_log("--> _this.allChoices: " + _this.allChoices);
		var i_mid = (_this.allChoices.length-1)/2;
		
		//_log(" LAYING OUT -}" + _this.allChoices.length + "{- CHOICES, mid pt at " + i_mid);
		
		var choiceSpacing = new Point(penBounds.width/(_this.allChoices.length + 1), 10);
		var BOX_SCALE = 1.4 - 0.1*(_this.allChoices.length-3);
		
		var PIECES_PER_ROW = 8;
		
		for(var i=0; i<_this.allChoices.length; i++ ){
			
			var choiceX = ((i%PIECES_PER_ROW)-i_mid)*choiceSpacing.x;
			var foodChoice = new Food("whole", _this.allChoices[i].shape, _this.allChoices[i].colour, _this.allChoices[i].detail, _this.targetFamily, null, new Point(choiceX, -95), 0);

			_this.choicesDisplayed.push(foodChoice);
			
			foodChoice.selected = false;
			foodChoice.innerDO = foodChoice.displayObj;
		
			var newShell = new createjs.Container();
			newShell.x = foodChoice.displayObj.x;
			newShell.y = foodChoice.displayObj.y;
			newShell.foodObj = foodChoice.innerDO.foodObj;

			foodChoice.disableInteractivity();
			
			newShell.addChild(foodChoice.innerDO);
			foodChoice.innerDO.x = foodChoice.innerDO.y = 0;
			
			var choicebox = new lib.choicebox();
			
			foodChoice.shadowontable = new lib.choiceboxshadow();
			foodChoice.shadowontable.alpha = 0.5;
			foodChoice.shadowontable.mouseEnabled = false;
			
			choicebox.scaleX = choicebox.scaleY = foodChoice.shadowontable.scaleX = foodChoice.shadowontable.scaleY = BOX_SCALE;
			foodChoice.innerDO.scaleX = foodChoice.innerDO.scaleY = BOX_SCALE * 0.7;
	
			foodChoice.shadowontable.x = 0, foodChoice.shadowontable.y = -20;
			choicebox.x = 0;
			choicebox.y = -20;
			
			foodChoice.shadowontable.baseY = foodChoice.shadowontable.y;
			newShell.addChildAt(choicebox, 0);
			newShell.addChildAt(foodChoice.shadowontable, 0);
			
			var boxHA = new createjs.Shape();
			boxHA.graphics.beginFill("red").drawRect((choicebox.nominalBounds.x + choicebox.x)*BOX_SCALE, (choicebox.nominalBounds.y + choicebox.y)*BOX_SCALE, choicebox.nominalBounds.width*BOX_SCALE, choicebox.nominalBounds.height*BOX_SCALE);
			newShell.hitArea = boxHA;
			
			foodChoice.displayObj = newShell;
			
			//_this.pen.gameManager.disableMouseChildren(foodChoice.displayObj);
			
			foodChoice.displayObj.on("pressup", function (e){_this.selectFood(e.currentTarget.foodObj);});
			foodChoice.displayObj.on("mouseover",function (evt){evt.target.cursor = 'pointer';});
			foodChoice.y = -200;
			_this.choiceContainer.addChild(foodChoice.displayObj);
			
			
			_this.displayObj.removeChild(_this.foodContainer);
			_this.displayObj.addChild(_this.choiceContainer);
			this.phase = "choice";
			
		}
	}
	
		
	this.dropInChoices = function (){
		//_log(" DROPPING IN " + _this.choicesDisplayed.length + " choices");
		_this.choiceContainer.addChild(fakeTube_back);
		for(var i=0; i<_this.choicesDisplayed.length; i++ ){
			_this.choiceContainer.addChild(_this.choicesDisplayed[i].displayObj);
		}
		_this.choiceContainer.addChild(fakeTube_front);
		
		var TUBE_IN_TIME = 200;
		var TUBE_OUT_TIME = 200;
		var BOX_IN_TIME = 600;
		var BOX_IN_DELAY = 30;
		fakeTube_front.scaleX = fakeTube_front.scaleY = fakeTube_back.scaleX = fakeTube_back.scaleY = 1.5;
		fakeTube_front.x = fakeTube_back.x = 1800;
		fakeTube_front.y = fakeTube_back.y = -250;
		////_log("T w e e n  2");
		   createjs.Tween.get(fakeTube_front).to({x:1400}, TUBE_IN_TIME*2, createjs.Ease.quintOut).wait(_this.choicesDisplayed.length*BOX_IN_DELAY + BOX_IN_TIME/2 + TUBE_IN_TIME).to({x:1800}, TUBE_OUT_TIME, createjs.Ease.quintIn).call(function(){_this.choiceContainer.removeChild(fakeTube_front);});
		////_log("T w e e n  3");
		   createjs.Tween.get(fakeTube_back).to({x:1400}, TUBE_IN_TIME*2, createjs.Ease.quintOut).wait(_this.choicesDisplayed.length*BOX_IN_DELAY + BOX_IN_TIME/2 + TUBE_IN_TIME).to({x:1800}, TUBE_OUT_TIME, createjs.Ease.quintIn).call(function(){_this.choiceContainer.removeChild(fakeTube_back);});
		
		for(var i=0; i<_this.choicesDisplayed.length; i++ ){
			var box = _this.choicesDisplayed[i].displayObj;
			box.x += _this.pen.inZoom.nominalBounds.width;
			box.scaleX = box.scaleY = 0.9;
			////_log("T w e e n  4");
		   createjs.Tween.get(box).wait(TUBE_IN_TIME*2 + i*BOX_IN_DELAY).to({x:_this.choicesDisplayed[i].trayPos.x, scaleX:1, scaleY:1}, BOX_IN_TIME, createjs.Ease.quintInOut);
			////_log("T w e e n  5");
		   createjs.Tween.get(box).wait(TUBE_IN_TIME*2 + i*BOX_IN_DELAY).to({x:_this.choicesDisplayed[i].trayPos.x, scaleX:1, scaleY:1}, BOX_IN_TIME, createjs.Ease.quintInOut);
		}
		
		_this.pen.gameManager.soundManager.playSoundAfter("foodfliesin", 0, 500);
	}
	
	this.highlightRedo = function (){
		var btnScale = _this.resetButton.scaleX;
		var BIG_SIZE = 1.7;
		////_log("T w e e n  6");
		   createjs.Tween.get(_this.resetButton).to({scaleX:btnScale*BIG_SIZE, scaleY:btnScale*BIG_SIZE}, 500).wait(100).to({scaleX:btnScale, scaleY:btnScale}, 500).wait(100).to({scaleX:btnScale*BIG_SIZE, scaleY:btnScale*BIG_SIZE}, 500).wait(100).to({scaleX:btnScale, scaleY:btnScale}, 500).wait(100).to({scaleX:btnScale*BIG_SIZE, scaleY:btnScale*BIG_SIZE}, 500).wait(100).to({scaleX:btnScale, scaleY:btnScale}, 500);
	}
	
	this.displayFood = function (){
		//_log(" displaying food in " + _this.pen);
		////_log("T w e e n  7");
		   createjs.Tween.removeTweens(_this);
		
		if(_this.selectedTray == null){
			_this.spawnFood();
		}
	
		if(_this.selectedTray !== null){

			_this.trays.push(_this.selectedTray);
			_this.selectedTray.displayObj.x = (!_this.pen.gameManager.introducedCutters && _this.pen.correctPieces()) ? 5 : 155;
			_this.selectedTray.displayObj.y = _this.CENTER_Y;
			
			_this.selectedTray.reset();
			_this.foodContainer.addChild(_this.selectedTray.displayObj);
			numTraysCreated++;
		}
		
		var evt = new createjs.Event("FOOD_DISPLAYED", true);
		_this.foodContainer.dispatchEvent(evt);
	}
	
	this.switchToFood = function (){
		
		var food_x = _this.foodContainer.x;
		var choice_x = _this.choiceContainer.x;
		var counterWidth = _this.foodContainer.returnZone.nominalBounds.width;
		
		_this.foodContainer.x = food_x + counterWidth;
		_this.displayObj.addChild(_this.foodContainer);
		this.phase = "eat";
		
		_this.foodContainer.removeChild(_this.resetButton);
		this.deselectFood(_this.currentChoice);
		
		////_log("T w e e n  8");
		   createjs.Tween.get(_this.foodContainer).to({x:food_x}, 750, createjs.Ease.circIn).wait(200).call(_this.foodContainer.addChild, [_this.resetButton],_this.foodContainer);
		////_log("T w e e n  9");
		   createjs.Tween.get(_this.choiceContainer).to({x:choice_x-counterWidth}, 750, createjs.Ease.circIn).call(_this.onFoodDisplayed,[],_this).to({x:choice_x}, 0);
	
		_this.pen.gameManager.soundManager.playSound("foodslide", 0);
	}
	
	// isCutting
	// =======
	// return whether a piece of food is being cut right now
	//--------------------------------------------------------------
	this.isCutting = function (){
		var cutting = false;

		var targetCutters = _this.cutters[_this.targetShape];

		for(var i=0; i<targetCutters.length; i++ ){
			if(targetCutters[i].inDrag || targetCutters[i].inCut){
				cutting = true;
				break;
			}
		}
		return cutting;
	}

	this.onFoodDisplayed = function (){
	
		_this.displayObj.removeChild(_this.choiceContainer);
		
		var targetCutters = _this.cutters[_this.targetShape];
		var targetDocks = _this.docks[_this.targetShape];
		var correctPieces = _this.pen.correctPieces();
		
		//_log("__o_o_o_o__food displayed! correct pieces??");
		
		if(_this.pen.gameManager.introducedCutters || !correctPieces){
		
			if(!_this.pen.gameManager.introducedCutters){
				_this.showCutters();
			} else {
				//_log(".....NO, show the cutters.");
				if(_this.selectedTray !== null){
					_this.selectedTray.displayObj.x = 155;
				}
				_this.foodContainer.addChild(targetDocks[0], targetDocks[1], targetDocks[2], targetCutters[0].displayObj, targetCutters[1].displayObj, targetCutters[2].displayObj);
				
				targetCutters[0].reset(true);
				targetCutters[1].reset(true);
				targetCutters[2].reset(true);

				if(!correctPieces && _this.pressedReset){
					_this.pressedReset = false;
					_this.pen.playDivisionHintAfter(900);
				}
			}
		} else {
			//_log(".....YES, get rid of the cutters.");
			_this.selectedTray.displayObj.x = 5;
			_this.foodContainer.removeChild(targetDocks[0], targetDocks[1], targetDocks[2], targetCutters[0].displayObj, targetCutters[1].displayObj, targetCutters[2].displayj);
		}

	}

	this.highlightCutters = function(specificShape){
		////_log("highlighting cutters here.");
		var targetCutters = _this.cutters[_this.targetShape];
		for(var i=0; i<targetCutters.length; i++){
			if(specificShape == null || targetCutters[i].fractions == specificShape){
				targetCutters[i].pulse();
			}
		}
	}
	
	this.highlightCuttersAfter = function(ms,specificShape){
		createjs.Tween.get(_this.selectedTray).wait(ms).call(_this.highlightCutters,[specificShape]);
	}

	this.showCutters = function (){
	
		_log("Show the fracs!");
		var targetCutters = _this.cutters[_this.targetShape];
		var targetDocks = _this.docks[_this.targetShape];
		
		var delayTime = 100;
		var dropTime = 350;
		
		for(var i=0; i<3; i++ ){
			targetCutters[i].displayObj.y = -_this.foodContainer.y - 100;
			_this.foodContainer.addChild(targetCutters[i].displayObj);
			_log("T w e e n i n g   drop in cutters");
		   createjs.Tween.get(targetCutters[i].displayObj).wait(i*delayTime).to({y:targetCutters[i].startPos.y}, dropTime, createjs.Ease.bounceOut).call(function (_i){_this.foodContainer.addChild(targetDocks[_i], targetCutters[_i].displayObj); targetCutters[_i].reset(true);}, [i]);
		}
		var evt = new createjs.Event("REQUEST_RAY", true);
		evt.data = { pen:_this.pen, x:targetDocks[1].x, y:targetDocks[1].y, spinTime:800};
		targetDocks[1].dispatchEvent(evt);

		var cuttersVO = (_this.pen.moreFoodThanCreatures()) ? "foodleftover" : "notenoughcut";

		if(!_this.pen.gameManager.voManager.isCurrentlyPlaying(cuttersVO)){
			_this.pen.gameManager.voManager.playSound(cuttersVO, 2);
			_this.pen.gameManager.prompts.showPrompt(true, _this.pen.gameManager.audioData.captionForId(cuttersVO));
		}
		
		
		setTimeout(_this.pen.buffet.highlightCutters,_this.pen.gameManager.audioData.durationForId(cuttersVO)*0.95);
	}

	
	
	this.resetSpread = function (){
		////_log("++ \n  ++   RESET buffet ");
		//_this.resetButton.gotoAndPlay(1);
		_this.pen.gameManager.soundManager.playSound("foodfliesin", 0);

		_this.pressedReset = true;
		_this.selectedTray.reset();
		_this.clear();
		_this.firstClick = true;
		_this.spawnFood();
		_this.reset();
		//////_log("T w e e n  11");
		   createjs.Tween.get(_this.resetButton).wait(1000).call(_this.foodContainer.addChild, [_this.resetButton],_this.foodContainer).call(_this.onFoodDisplayed);
	}
	
	this.getPreference = function (creatureIndex){
		//_log("targetFeature for creature " + creatureIndex + " is " + _this.targetFeatures[creatureIndex%_this.targetFeatures.length]);
		if(_this.targetFeatures.length == 0){
			return _this.targetShape;
		} else {
			var targetFeature = _this.targetFeatures[creatureIndex%_this.targetFeatures.length];
			return targetFeature == "shapes" ? _this.targetShape : targetFeature == "colours" ? _this.targetColour : targetFeature == "details" ? _this.targetDetail : "sad";
		}
	}
	
	// Given the number of total pieces to display, 
	// return an array of "whole", "half", "third" or "fourth" pieces.
	// Works ONLY as long as there is intended to be only one piece that is not whole
	//------------------------------------------------------------------------------------
	var createPieceNameArray = function (numPieces){
		var solution = [];
		var remainder = numPieces%1;
		var numWholes = numPieces - remainder;
		for(var i=0; i<numWholes; i++ ){
			solution.push("whole");
		}
		if(remainder == 0.5){
			solution.push("half");
		} else if (remainder == 0.25){
			solution.push("fourth");
		} else if (Math.abs(remainder - 1/3) < 0.01){
			solution.push("third");
		}
		return solution;
	}
	
	this.spawnFood = function (){
			
		var numCreaturesSharing = _this.pen.creatures.length;
		if(numCreaturesSharing > 0){
		
			if(!_this.firstClick){
				_this.initChoices();
			}	
			
			var numTimesThisGroupFed = _this.pen.feedingHistory[numCreaturesSharing];
			//_log("spawnFood in " + _this.pen.name + ", size: " + _this.pen.size + ", numcreaturessharing: " + numCreaturesSharing);
			try{
				var numPuzzlesForThisGroup = puzzles[numCreaturesSharing][_this.pen.size].length;
			} catch(err){
				//_log("FAILED to find a puzzle. "+err);
			}

			var puzzle_index = Math.min(numTimesThisGroupFed, numPuzzlesForThisGroup-1);
			var advancedMode = _this.pen.gameManager.advancedMode;
			
			if (numCreaturesSharing > 1){
				var max_safe_puzzles = advancedMode ? numPuzzlesForThisGroup : (_this.pen.size == "small") ? 3 : 2;
				if(puzzle_index >= max_safe_puzzles){
					puzzle_index = Math.floor(Math.random()*max_safe_index);
				}			
			}
			var trayDimensions = new Point(660, zoneHeight-20);
			
			if(_this.selectedTray !== null){
				//_this.removeTray(_this.selectedTray);
			}
			
			var newTray = new FoodTray(createPieceNameArray(puzzles[numCreaturesSharing][_this.pen.size][puzzle_index]), _this.targetFamily, _this.targetColour, _this.targetDetail, _this.targetShape, _this.pen, trayDimensions);
			_this.selectedTray = newTray;
		}
	}


	// void removeTray
	//      ==========
	// Cease to display the specified tray and return it to the pool
	//----------------------------------------------------------------
	this.removeTray = function (tray){
		if(tray !== null){
			_this.foodContainer.removeChild(tray.displayObj);
			//_log("--> _this.trays: " + _this.trays);
			for(var a = _this.trays.length - 1; a >= 0; a--) {
				if(_this.trays[a] === tray) {
				   _this.trays.splice(a, 1);
				}
			}
			if(tray == _this.selectedTray){
				_this.selectedTray = null;
			}
		}
		//_log(" >>  in removeTray, selectedTray is " + (_this.selectedTray == null ? "null." : _this.selectedTray.name));
	}
	
	// void reset
	//      =====
	// Clear out all the trays
	//-------------------------------------------
	this.reset = function (){
		_this.clear();
		_this.displayFood();
	}
	
	// void clear
	//      =====
	// Remove and reset all the trays
	//-------------------------------------------
	this.clear = function (){
		
		//_log("\n__ Clearing out " + _this.trays.length + " trays __");
		while(_this.trays.length > 0){
			_this.removeTray(_this.trays[_this.trays.length-1]);

		}
				
		while(_this.foodContainer.getNumChildren()>1){
			_this.foodContainer.removeChild(_this.foodContainer.getChildAt(_this.foodContainer.getNumChildren()-1));
		}
		
		////_log("T w e e n  12");
		   createjs.Tween.removeTweens(_this);
	}
	

	
	this.onSelectCutter = function (evt){
		//_log("--> _this.cutters[_this.targetShape]: " + _this.cutters[_this.targetShape]);
		for(var i=0; i<_this.cutters[_this.targetShape].length; i++ ){
			if(_this.cutters[_this.targetShape][i] != evt.data.cutter){
				_this.cutters[_this.targetShape][i].deselect();
			}
		}
		_this.selectedCutter = evt.data.cutter;
	}
	this.onDeselectCutter = function (evt){
		if(_this.selectedCutter == evt.data.cutter){
			_this.selectedCutter = null;
		}
	}
	
	this.checkForCut = function (evt){
		if(_this.selectedCutter !== null && !_this.selectedCutter.inDrag){
		 createjs.Tween.get(_this.selectedTray).wait(100).call(_this.selectedTray.cutFoodWith, [evt.data.food, _this.selectedCutter, false],_this.selectedTray);
		  
		}
	}
	
	this.onPressFood = function (evt){
		_this.pen.gameManager.prompts.showPrompt(false);
	}
	
	
	this.foodContainer.addEventListener("SELECT_CUTTER", _this.onSelectCutter);
	
	this.foodContainer.addEventListener("DESELECT_CUTTER", _this.onDeselectCutter);
	
	this.foodContainer.addEventListener("DROP_FOOD", _this.checkForCut);
	
	this.foodContainer.addEventListener("PRESS_FOOD", _this.onPressFood);
	
}

//traceLoadProgress();