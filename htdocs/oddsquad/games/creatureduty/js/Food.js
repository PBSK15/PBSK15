/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  Food
  represents one piece of food of a specified amount
  
*/

var Food = function (fraction, shape, colour, detail, family, tray, trayPos, pieceIndex) {
	
	var _this = this;
	
	
	var foodValues = { whole:1, half:1/2, third:1/3, fourth:1/4 };
	
	this.fraction = fraction;
	this.value = foodValues[this.fraction];
	this.index = pieceIndex;
	this.shape = shape;
	this.colour = colour;
	this.detail = detail;
	// food 'families': "cake", "sandwich", "loaf"
	this.family = family;
	//e.g. circle_cake_pink_blueberries_half1 
	this.name = this.shape + "_" + this.colour + "_" + this.detail + "_" + this.fraction + (pieceIndex==0?"":pieceIndex) + "_" + Math.round(Math.random()*999);
	
	this.tray = tray;
	this.trayPos = trayPos;
	
	
	//_log("--------> new FOOD: " + _this.name+", new lib[food_" + _this.shape + " _" + _this.fraction + (pieceIndex==0 ? "" : pieceIndex )+"]");
	this.displayObj = new lib["food_" + _this.shape + "_" + _this.fraction + (pieceIndex==0 ? "" : pieceIndex)];
	this.displayObj.name = _this.shape + "_" + _this.family + "_" + _this.colour + "_" + _this.detail + "_" + _this.fraction + (pieceIndex==0?"":pieceIndex);
	this.displayObj.foodObj = _this;
	this.displayObj.gotoAndStop(_this.colour + "_" + _this.detail);
	var foodHA = new createjs.Shape();
	foodHA.graphics.beginFill("red").drawRect(_this.displayObj.nominalBounds.x, _this.displayObj.nominalBounds.y, _this.displayObj.nominalBounds.width, _this.displayObj.nominalBounds.height);
	this.displayObj.hitArea = foodHA;


	////_log("New Food : " + _this.name + ":  " + "food_" + this.shape + "_" + this.fraction + (pieceIndex==0?"":pieceIndex) + " on frame " + this.colour + "_" + this.detail);

	this.placed = false;
	this.inDrag = false;
	
	this.bowl = null;
	
	this.reportPlaced = function (e){tray.reportPlaced(_this);};

	// void startDrag
	//      =========
	// AWKWARD!
	// this function was copied in from another object;
	// should dispatch events, not call these functions in other objs directly
	//-------------------------------------------------------------------------------
	this.startDrag = function (event){
		////_log("Food| startDrag! " + _this.name);		
		_this.inDrag = true;
		this.dragEvent = event;
		_this.tray.pen.gameManager.prompts.showPrompt(false);
		createjs.Tween.get(_this.displayObj).wait(100).call(_this.continueDrag, [_this.dragEvent]);
	}
	
	//-------------------------------------------------------------------------------
	this.continueDrag = function (event){
		////_log("Food| CONTINUEdrag........ " + _this.name);
		if(_this.inDrag ){
			
			if(_this.bowl == null || _this.bowl == undefined){
				_this.tray.removeSpecific(_this);
			} else {
				_this.bowl.removeSpecific(_this);
			}
			_this.tray.displayObj.addChild(_this.displayObj);
			_this.scaleX = _this.scaleY = _this.tray.trayScale;
			
			_this.displayObj.addEventListener("pressmove", _this.followPos, false);
		}
	}
	
	this.disableInteractivity = function (){
		_this.displayObj.removeAllEventListeners();
	}
	
	this.dropFood = function (event){		
		////_log(" dropping " + event.currentTarget);
		_this.inDrag = false;
		
		var newEvent = new createjs.Event("DROP_FOOD", true);
		newEvent.data = {tray:_this.tray, food:_this};
		event.currentTarget.dispatchEvent(newEvent);
		
		createjs.Tween.removeTweens(_this.displayObj);
		_this.displayObj.removeEventListener("pressmove", _this.followPos);
	}
	
	this.followPos = function (event){
		////_log("followPos , currentTarget is " + event.currentTarget);
		if(!_this.inDrag){
			_this.startDrag(event);
		} else {
			var localPt = event.currentTarget.parent.globalToLocal(event.stageX, event.stageY);
			event.currentTarget.x = localPt.x;
			event.currentTarget.y = localPt.y;
		}
	}

	this.resetListeners = function (){
		_this.displayObj.addEventListener("mousedown", _this.startDrag, false);
		_this.displayObj.addEventListener("pressup", _this.dropFood, false); 
		_this.displayObj.on("mouseover",function (evt){evt.target.cursor = 'pointer';});
	}
	
	this.reset = function (){
		
		_this.displayObj.removeAllEventListeners();
		_this.resetListeners();
	
		if(_this.tray !== null){
			////_log("!\ntray is " + _this.tray);
			_this.displayObj.scaleX = _this.tray.trayScale;
			_this.displayObj.scaleY = _this.tray.trayScale;
			_this.displayObj.setTransform(_this.trayPos.x, _this.trayPos.y, _this.tray.trayScale, _this.tray.trayScale);
		} else {
			////_log("!\nnull tray.");
			_this.displayObj.setTransform(_this.trayPos.x, _this.trayPos.y);
		}
		_this.placed = false;
		_this.inDrag = false;
		////_log("            resetting " + _this.displayObj + ", positioned at " + _this.displayObj.x + ", " + _this.displayObj.y);
		
	}
	
	
	this.pressFood = function (){
		////_log(" PRESSING food " + _this.name + " in tray " + _this.tray);
		if(!_this.placed){
			var evt = new createjs.Event("PRESS_FOOD", true);
			evt.data = {tray:_this};
			_this.displayObj.dispatchEvent(evt);
		}
	}
	
	_this.reset();
}