var VisualEffects = function(gM){

	var _this = this;
	_this.gameManager = gM;

	_this.raybursts = [];
	for(var i=0; i<4; i++){
		_this.raybursts.push(new lib.rayburst());
		_this.raybursts[i].mouseEnabled = false;
		_this.raybursts[i].name = "ray_"+i;
	}

	var ASTERISK = "color: orangered; font-weight: bold; background-image:url(\"http://unicodey.com/emoji-data/img-hangouts-64/2733.png\"); background-size:20px 20px; background-repeat: no-repeat";

	this.showRayAt = function (pen, rayburst, _x, _y, spinTime) {
		//_log("%c   RAY at " + _x+","+_y+", "+spinTime, ASTERISK,"");
		if(pen.inZoom == null){
			_log("                               X pen.inZoom is null.");
			pen.addChild(rayburst);
		} else {
			_log("                               X adding "+rayburst+" to "+pen.inZoom);
			pen.inZoom.addChild(rayburst);
			pen.raiseChildren();
		}
		if(rayburst != null && rayburst != undefined){
			rayburst.x = _x;
			rayburst.y = _y;
			rayburst.scaleX = rayburst.scaleY = 0.5;
			rayburst.alpha = 0;
			rayburst.rotation = 0;
			//var speedMultiplier = (800/spinTime)*(800/spinTime);
			var speedMultiplier = 1;
			var isLastRay = false;
			for(var i=0; i<_this.raybursts.length; i++){
				if(rayburst == _this.raybursts[i] && i == pen.creatures.length-1){
					isLastRay = true;
				}
			}
			if(isLastRay){
				_this.gameManager.playFeedingFeedback(pen);
			}
			createjs.Tween.get(rayburst).to({rotation:179*speedMultiplier, alpha:0.8, scaleX:1, scaleY:1}, spinTime).to({rotation:360*speedMultiplier, alpha:0, scaleX:0.5, scaleY:0.5}, spinTime);
		} else {
			_log("rayburst fail.");
		}
		
	};
	
	
	this.showRayAfter = function (pen, rayburst, _x, _y, spinTime, ms) {
		//_log(".....will show "+rayburst+" after "+ms);
		createjs.Tween.get(rayburst).wait(ms).call(_this.showRayAt, [pen, rayburst, _x, _y, spinTime]);
	};
	
	// Show a pretty rayburst behind each creature in the designated pen
	//-----------------------------------------------------------------------
	this.showRaysOnCreaturesIn = function (pen){

		//_log("%c   showing rays on "+pen.creatures.length+" creatures in " + pen.name, ASTERISK,"");

		var creaturesLeftToRight = [].concat(pen.creatures);
		creaturesLeftToRight.sort(function (a, b){return(a.displayObj.x - b.displayObj.x);});
		
		var RAY_DELAY = 250;
		
		var SPIN_TIME = 500;
		
		for(var i=0; i<creaturesLeftToRight.length; i++ ){
			_this.showRayAfter(pen, _this.raybursts[i], creaturesLeftToRight[i].displayObj.x, creaturesLeftToRight[i].displayObj.y, SPIN_TIME, i*RAY_DELAY);
		}
	};

	// highlightZones
	// ==============
	// @param: String array /conditions/ -> An array containing the names of functions in the
	// namespace of Pen that return whether that pen should be highlighted.  
	// @param: Boolean /leaveOn/ -> After highlighting a pen, leave the highlight showing!  Or fade it out.
	// Test all the _this.pens and highlight them in the overview if they pass all test functions
	//--------------------------------------------------------------------------------------------------------
	this.highlightZones = function (conditions, leaveOn){
		//_log(" h i g h l i g h t  z o n e s ! ");
		_this.unHighlightZones(true);
		var highlitPens = [];
		penloop:
		for(var i=0; i < _this.gameManager.pens.length; i++ ){
			var meetsConditions = true;
			conditionloop:
			for(var j=0; j<conditions.length; j++ ){
				if(!_this.gameManager.pens[i][conditions[j]]()){
					meetsConditions = false;
					break conditionloop;
				}
			}
			_this.gameManager.pens[i].showHighlight(meetsConditions);
			if(meetsConditions){
				highlitPens.push(_this.gameManager.pens[i]);
			}
		}
		
		for(var i=0; i <  highlitPens.length; i++ ){
			var sc = highlitPens[i].inOverview.border.scaleX;
			createjs.Tween.removeTweens(highlitPens[i].inOverview.border);
			highlitPens[i].showHighlight(true);
			createjs.Tween.get(highlitPens[i].inOverview.border).wait(i*500).to({alpha:leaveOn?1:0}, 0);
		}
	};
	this.unHighlightZones = function (andStopTweensToo){
		for(var i=0; i < _this.gameManager.pens.length; i++ ){
			if(andStopTweensToo){
				createjs.Tween.removeTweens(_this.gameManager.pens[i].inOverview.border);
			}
			_this.gameManager.pens[i].showHighlight(false);
		}
	};

}