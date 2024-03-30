/*

  ODDSQUAD CREATURE DUTY 
  PROTOTYPE

  Cutter
  a tool that helps us cut food into smaller sharable pieces

	
*/

var Cutter = function (shape, fractions, startPos, dock) {

	var _this = this;
	this.shape = shape;
	this.fractions = fractions;
	this.startPos = startPos;
	this.dock = dock;
	this.CUTTER_SCALE = 1;
	this.name = "cutter_" + this.shape + "_" + this.fractions;
	////_log(" >>>  >>>  >>>  new cutter: " + this.name);
	this.rot = 0;
	this.displayObj = new lib[this.name];
	
	var cutterHA = new  createjs.Shape();
	cutterHA.graphics.beginFill("#f00").drawRect(-50, -50, 100, 100);
	this.displayObj.hitArea = cutterHA;
	
	this.inDrag = false;
	this.inCut = false;
	this.selected = false;
	
	this.engage = function (){
		////_log(_this.name + " ENGAGE!");
		//_this.displayObj.fractionNum.alpha = 0;
		_this.displayObj.scaleX = _this.displayObj.scaleY = _this.CUTTER_SCALE * 1.6;
	}
	
	this.startDrag = function (event){
		////_log("startDrag! ");
		_this.inDrag = true;
		_this.select();
		_this.followPos(event);
	}

	this.pulse = function(){
		createjs.Tween.get(_this.displayObj).to({scaleX:_this.CUTTER_SCALE*1.6,scaleY:_this.CUTTER_SCALE*1.6,y:_this.startPos.y-20},500).to({scaleX:_this.CUTTER_SCALE,scaleY:_this.CUTTER_SCALE,y:_this.startPos.y},500);
	}
	this.setRotation = function (r){
		
		_this.displayObj.rotation = _this.rot = r;
	}
	this.dropCutter = function (event){		
		//_log(" dropCutter " + event.currentTarget);
		_this.inDrag = false;
		//_this.displayObj.removeAllEventListeners();
		
		var newEvent = new createjs.Event("DROP_CUTTER", true);
		newEvent.data = {cutter:_this};
		_this.displayObj.dispatchEvent(newEvent);
		
	}

	this.followPos = function (event){
		////_log("followPos , currentTarget is " + event.currentTarget);
		_this.showHighlight(false);
		if(!_this.inDrag){
			_this.startDrag(event);
		} else {
			var localPt = _this.displayObj.parent.globalToLocal(event.stageX, event.stageY);
			_this.displayObj.x = localPt.x;
			_this.displayObj.y = localPt.y;
		}
	}

	
	this.showHighlight = function (toShow){
		//_log("%c HIGHLIGHT "+toShow+" "+_this.name,"background-color:darkslategray; color:palegreen");
		_this.dock.highlight.alpha = toShow ? 1 : 0.05;
	}
	
	this.reset = function (andDeselect){
		////_log("resetting cutter, rot " + _this.rot);
		var andDeselect = andDeselect !== undefined ? andDeselect : true;
		
		_this.displayObj.removeAllEventListeners();
		_this.displayObj.addEventListener("mousedown", _this.startDrag, false);
		_this.displayObj.addEventListener("pressup", _this.dropCutter, false); 
		_this.displayObj.addEventListener("pressmove", _this.followPos, false);
		_this.displayObj.on("mouseover",function (evt){evt.target.cursor = 'pointer';});
		
		//_this.displayObj.fractionNum.alpha = 1;
		
		_this.displayObj.setTransform(_this.startPos.x, _this.startPos.y, _this.CUTTER_SCALE, _this.CUTTER_SCALE, _this.rot);
		_this.placed = false;
		_this.inDrag = false;
		_this.inCut = false;

		if(andDeselect){
			_this.deselect();
		} else {
			_this.showHighlight(true);
		}
		////_log("            resetting cutter " + _this.displayObj + ", positioned at " + _this.displayObj.x + ", " + _this.displayObj.y);
	}
	
	this.select = function (){
		////_log(" --- select me: " + _this.name);
		_this.showHighlight(true);
		_this.engage();
		
		if(!_this.selected){
			var evt = new createjs.Event("SELECT_CUTTER", true);
			evt.data = {cutter:_this};
			_this.displayObj.dispatchEvent(evt);
			_this.selected = true;
		} else {
			//_this.deselect();
		}
		
	}
	this.deselect = function (){
		////_log(" --- DEselect me: " + _this.name);
		_this.showHighlight(false);
		var evt = new createjs.Event("DESELECT_CUTTER", true);
		evt.data = {cutter:_this};
		_this.displayObj.dispatchEvent(evt);
		_this.displayObj.setTransform(_this.startPos.x, _this.startPos.y, _this.CUTTER_SCALE, _this.CUTTER_SCALE, _this.rot);
		_this.selected = false;
	}
	
	
	_this.displayObj.addEventListener("mousedown", _this.startDrag, false);
	_this.displayObj.addEventListener("pressup", _this.dropCutter, false); 
	_this.displayObj.addEventListener("pressmove", _this.followPos, false);
}
