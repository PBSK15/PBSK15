/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  Creature
  is the star of the game
  
  parameters:
	string /size/: "small", "medium" or "large"
	string /creatureType/: The name of the type of creature to instantiate

*/

var Creature = function (size, creatureType, isNew) {
	//_log(habitat + " CREATURE");

	var _this, bodyHA;

	var creatureOrder = ["jackalope", "unicorn", "whiteunicorn","spidercat",  "hebeetle",  "shebeetle", "tiggle","griffin", "trex", "laserchicken","dragon", "reddragon"];

	_this = this;
	
	this.name = creatureType + "_" + Math.floor(Math.random()*999);
	this.creatureType = creatureType;
	this.species = creatureType + "s";
	this.flying = (this.creatureType == "hebeetle" ||  this.creatureType == "shebeetle" ||  this.creatureType == "griffin" ||  this.creatureType == "laserchicken" ||  this.creatureType == "dragon" || this.creatureType == "reddragon");
	for(var i=0; i<creatureOrder.length; i++){
		if(creatureOrder[i] == this.creatureType){
			this.layerOrder = i;
		}
	}
	
	if(isNew != undefined && !isNew){
		_this.isNew = false;
		_this.droppedIn = true;
	} else {
		this.isNew = true;
		this.droppedIn = false;
	}
	
	//_log("new Creature, creating baby body: " + "creature_" + creatureType + "_baby" + " and adult body: " + "creature_" + creatureType + "_adult_" + colour);
	this.body =  new lib["creature_" + creatureType + "_baby"]();
	bodyHA = new createjs.Shape();
	bodyHA.graphics.beginFill("#f00").drawRect(-150, -150, 300, 335);
	this.body.hitArea = bodyHA;
	
	//this.body.scaleX *= (Math.random() < 0.5 ? -1 : 1);
	this.bodyDefaultPos = new Point(0, 0);
	
	this.preference = null;
	
	this.colourTag = new createjs.Shape();
	this.colourTag.graphics.beginFill(this.colour).rect(-40, -10, 80, 35);
	this.fashionTag = new createjs.Text("", "48px bold refrigerator-deluxe", "white");
	this.fashionTag.textAlign = "center";
	this.fashionTag.Baseline = "middle";
	this.colourTag.y = 55;
	this.fashionTag.y = 55;
	this.fashionTag.scaleX = this.body.scaleX;
	
	this.displayObj = new createjs.Container();

	this.displayObj.name = this.name + "_Container";
	this.displayObj.addChild(this.body);
	this.displayObj.creatureObj = this;

	this.frozen = false;
	this.pen = null;
	
	// acceptable sizes: "small", "medium", "large" or "fullgrown"
	this.size = size;
	this.numRoundsAtSize = 0;
	// acceptable states: "hungry", "happy", "idle"
	this.state = "idle";
	this.hopping = false;
	this.inDrag = false;
	this.inTube = false;
	this.inPlacement = false;
	this.inGrowth = false;
	
	var BOWL_POS = new Point(0, _this.size == "small" ? 200 : _this.size == "medium" ? 205 : 200);
	
	this.bowl = new Bowl(_this.size, _this);
	

	this.bubble = new lib.request_bubble();
	this.bubble.mouseEnabled = false;
	//_this.bubble.x = 0;
	//_this.bubble.y = -10;
			
	// small creatures require 1 food
	// medium creatures require 2 food
	// large creatures require 4 food
	this.numFoodRequired = 0.25;
	this.numFoodEatenThisRound = 0;
	
	var browserDetect = new BrowserDetection();
	var isMobile = browserDetect.isMobile();
	var isKindle = browserDetect.isKindle();

	this.freezeInSlowBrowsers = function(){
		
		if(!_this.flying && (_this.pen.gameManager.gameView != "zoom") && (isMobile || isKindle)) {
			var doBounds = _this.body.nominalBounds;
			_this.body.cache(doBounds.x-30,doBounds.y-200,doBounds.width+60,doBounds.height+230);
			_this.frozen = true;
		}
		
	}
	this.unFreeze = function(){
		_this.body.uncache();
		_this.frozen = false;
	}
	var reFreeze = function(){
		if(_this.frozen && (browserDetect.isMobile() ||browserDetect.isKindle()) ){
			_this.body.updateCache();
		}
		
	}

	this.setSize = function (newSize){
		_this.size = newSize;
	};
	
	this.shakeHeadNo = function (){
		//_this.returnLabel = _this.body.currentLabel;
		_this.body.gotoAndStop("still");
		_this.body.gotoAndPlay("no");
		reFreeze();
		createjs.Tween.get(_this.body).wait(2000).call(_this.stopSayingNo);
	};
	this.stopSayingNo = function (){
		_this.body.gotoAndStop(_this.state);
		reFreeze();
	};
	this.showHappy = function (){
		_this.bubble.gotoAndStop("happy");
		_this.showBubble(true);
	};
	this.happyBounce = function (){
		_this.body.gotoAndStop("happy");
		reFreeze();
		_this.state = "happy";
		_this.bubble.gotoAndStop("happy");
		_this.showBubble(true);
		createjs.Tween.get(_this).wait(1000).call(function(){if(_this.state != "hungry"){_this.showBubble(false);}});
	};

	this.setSmallHitArea = function(){
		bodyHA.graphics.clear();
		bodyHA.graphics.beginFill("#f00").drawRect(-150, -150, 300, 180);
		this.body.hitArea = bodyHA;
	}
	this.setLargeHitArea = function(){
		bodyHA.graphics.clear();
		bodyHA.graphics.beginFill("#f00").drawRect(-150, -150, 300, 335);
		this.body.hitArea = bodyHA;
	}

	
	this.settle = function (){
		//_log("  --- -- - "+_this.name+" settling....");
		_this.body.gotoAndStop("still");
		reFreeze();
		_this.state = "idle";
		_this.showBubble(false);
	};
	this.grow = function (){
		_log(_this.name + " g r o w i n g !!");
		_this.body.colorName = _this.colour;
		_this.inGrowth = true;

		var penObj = _this.displayObj.parent;
		//penObj.removeChild(_this.displayObj);
		penObj.addChild(_this.displayObj);
		
		var startScale = _this.displayObj.scaleX*0.8;
		_this.displayObj.scaleX = startScale;
		_this.displayObj.scaleY = startScale;
		
		_this.numRoundsAtSize = 0;
		
		var stretchT = 800;
		var pauseT = 150; 
	
		var nextScale = _this.size == "small" ? "medium" : _this.size == "medium" ? "large" : "fullgrown";
	
		var scaleStep3 = nextScale == "fullgrown" ? startScale*2 :_this.pen.gameManager[nextScale + "_0"].creatureScaleInOverview()*1.1;
		var scaleStep2 = startScale + (scaleStep3 - startScale)*(2/3);
		var scaleStep1 = startScale + (scaleStep2 - startScale)/2;
	
		_this.pen.gameManager.highlightCreature(_this);
		
		createjs.Tween.get(_this.displayObj).wait(pauseT*2).to({scaleX:scaleStep1, scaleY:scaleStep1}, stretchT, createjs.Ease.quintIn).call(function(cr){_this.pen.gameManager.highlightCreature(cr)},[_this],_this.pen.gameManager).wait(pauseT).to({scaleX:scaleStep2, scaleY:scaleStep2}, stretchT, createjs.Ease.quintIn).call(function(cr){_this.pen.gameManager.highlightCreature(cr)},[_this],_this.pen.gameManager).wait(pauseT).to({scaleX:scaleStep3, scaleY:scaleStep3}, stretchT, createjs.Ease.quintIn).call(_this.fallOut);	
		
		if(nextScale == "fullgrown"){
			_this.pen.gameManager.soundManager.playSound("creaturegrowrelease",0);
		} else {
			_this.pen.gameManager.soundManager.playSound("creaturegrowup",2);
		}
	};
	
	this.fallOut = function (){
		
		_log(" ///// fallout")
		
		if(_this.size == "small"){
			_this.size = "medium";
			_this.numFoodRequired = 2;
		} else if (_this.size == "medium") {
			_this.size = "large";
			_this.numFoodRequired = 3;
		} else {
			_this.size = "fullgrown";
		}
		
		if(_this.size != "fullgrown"){
			_this.bowl.setSize(_this.size);
		}
		_this.numRoundsAtSize = 0;
		//_this.body.ras.text = "";
		//_this.body.ras.text = _this.numRoundsAtSize;
		//_this.body.ras.colour = "yellow";
		
		var evt = new createjs.Event("FALLING", true);
		evt.data = {creature: _this, isNew: false};
		_this.displayObj.dispatchEvent(evt);
	};
	
	this.eatOne = function (){
		var foodToEat = _this.bowl.removeFood();
		
		var TIME_TO_EAT_ONE_PIECE = 1000;
		
		if(foodToEat !== null && foodToEat !== undefined){
			if(foodToEat.displayObj.parent !== null){
				foodToEat.displayObj.parent.removeChild(foodToEat.displayObj);
			}
			_this.numFoodEatenThisRound++;
			_log("omnom " + _this.name + " eating " + foodToEat.name + ", of value " + foodToEat.value + ", now eaten " + _this.numFoodEatenThisRound);
			
			if(_this.bowl.numFood() > 0){
				//_log("    " + _this.name + " ateOne! ....and there's more...");
				createjs.Tween.get(_this).call(_this.eatOne).wait(TIME_TO_EAT_ONE_PIECE);
			} else {
				//_log("    " + _this.name + " ateOne! the last one!");
				createjs.Tween.get(_this).wait(TIME_TO_EAT_ONE_PIECE).call(_this.doneEating);
			}
			
		} else {
			//_log("ummmmmmm trying to eat but there's nothing in my bowl.");
		}
	};
	this.eatFoodInBowl = function (){
		_this.state = "eating";
		// We're committed to eating, so let's prevent the player from pulling food out of the bowl
		// before we have a chance to finish the eating process.
		_this.bowl.protectFood();

		//_log(_this.name + " getting ready to eat " + _this.bowl.numFood() + " food from bowl.");
		_this.body.gotoAndPlay("eating");
		createjs.Tween.get(_this).wait(1000).call(_this.eatOne);

	};
	
	this.doneEating = function (){
		var APPLE = "color: midnightblue; font-weight: bold; background-image:url(\"http://unicodey.com/emoji-data/gemoji/images/emoji/unicode/1f34e.png\"); background-size:12px 12px; background-repeat: no-repeat";
		_log("%c   "+_this.name+" done eating.", APPLE,"");
		_this.bowl.show(false);
		_this.happyBounce();
		reFreeze();
		_this.pen.gameManager.soundManager.playSound(_this.creatureType + "voice", 1);
		createjs.Tween.get(_this).wait(1000).call(function(){if(_this.state != "hungry"){_this.showBubble(false);}});
		
		var evt = new createjs.Event("DONE_EATING", true);
		evt.data = {creature:_this};
		_this.displayObj.dispatchEvent(evt);
	};
	
	this.showBubble = function (toShow){
		
		//_log("showing bubble in " + _this.pen.gameManager.gameView+" for "+_this.name+" ? "+toShow);
		createjs.Tween.removeTweens(_this.bubble);
		_this.unFreeze();
		
		if(toShow){
			if(_this.pen.gameManager.gameView == "overview"){
				_this.bubble.scaleX = _this.bubble.scaleY = 0.5/_this.pen.creatureScaleInOverview();	
			} else {
				_this.bubble.scaleX = _this.bubble.scaleY = 1.15/_this.pen.creatureScaleInZoom();
			}
			if(_this.pen.gameManager.gamePhase == "feeding"){
				//_log("for " + _this.name + ", bubblePos is " + _this.body.bubblePos + " in " + _this.body);
				_this.body.bubblePos.addChild(_this.bubble);
				if(_this.bubble["preficon_" + _this.preference] !== null){
					_this.bubble["preficon_" + _this.preference].scaleX = _this.bubble["preficon_" + _this.preference].scaleY = 0.01;
					createjs.Tween.get(_this.bubble["preficon_" + _this.preference]).to({scaleX:1.1, scaleY:1.1}, 500).to({scaleX:1, scaleY:1}, 150).call(_this.freezeInSlowBrowsers);
				} 
			} else {
				_this.body.bubblePos.removeChild(_this.bubble);
			}
		} else {
			_this.body.bubblePos.removeChild(_this.bubble);
		}
	};
	
	this.showBubbleAfter = function (ms, toShow){
		_log("WILL show bubble for "+_this.name+" after "+ms+" ms? "+toShow);
		createjs.Tween.get(_this.bubble).wait(ms).call(_this.showBubble, [toShow + Math.random()*200]);
	};
	// wantFood
	// ========
	// Display an indicator (thought bubble) showing
	// how much, and what kind of food I want
	//----------------------------------------------------
	this.wantFood = function (preference, withBowl){
		var ROUNDS_TO_ZERO = -0.01;
		//_log("do I, " + _this.name + ", want food?  I've eaten " + _this.numFoodEatenThisRound + " and require " + _this.numFoodRequired + ".  I want " + preference);
		if(_this.numFoodEatenThisRound - _this.numFoodRequired < ROUNDS_TO_ZERO){
			_this.state = "hungry";
			_this.unFreeze();
			_this.body.gotoAndStop("hungry");
			reFreeze();
			_this.preference = preference;
			_log("   ~   I, " + _this.name + ", am hungry! I want " + preference);
			
			_this.bubble.gotoAndStop(preference);	
			_this.showBubble(true);		
			_this.showBowl(withBowl);
			if(_this.pen.gameManager.gameView == "overview"){
				_this.pen.gameManager.soundManager.playSound("bubbleappears", 0);
			} 
		} else {
			_log("   ~   I, " + _this.name + ", would want food but I've already eaten.");
		}
	};
	
	
	this.checkToPressBowl = function (e){
		
		if(_this.displayObj.contains(_this.bowl.displayObj)){
			var pressPt = _this.bowl.dish.globalToLocal(e.stageX, e.stageY);
			_this.bowl.pressBowl(e);
		} else {
			_log(" not showing the bowl, hence not pressing it.")
		}
		
	};
	
	this.showBowl = function (toShow){
		//_log(_this.name + " showBowl ? " + toShow);
		_this.bowl.clear();
		
		if(toShow){
			_this.bowl.displayObj.x = BOWL_POS.x;
			_this.bowl.displayObj.y = BOWL_POS.y;
			_this.bowl.displayObj.scaleX = _this.bowl.displayObj.scaleY = 1/_this.displayObj.scaleX;
			
			_this.displayObj.addEventListener("pressup", _this.checkToPressBowl);
		
		} else {
			_this.displayObj.removeAllEventListeners();
			_this.displayObj.on("mouseover",function (evt){evt.target.cursor = 'pointer';});
		}
		_this.bowl.show(toShow);
	};
	
	// pause (toPause)
	// ===================
	// stop anything moving in this creature.
	//-----------------------------------------
	this.pause = function (toPause){
		//_log("pausing children of " + _this.name + ", all " + _this.body.getNumChildren() + " of them.");
		for(var i=0; i<_this.body.getNumChildren(); i++ ){		
		
			if (_this.body.getChildAt(i).paused !== undefined){
				//_log("trying to pause " + _this.body.getChildAt(i) + " in " + _this.name);
				_this.body.getChildAt(i).paused = toPause;
			} 
		}
	};

	
};

//traceLoadProgress();