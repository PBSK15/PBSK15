/*

ODDSQUAD CREATURE DUTY 
***** GameManager *****

RULES
- every small creature that is fed properly for two to three rounds (some randomness) in a row grows 
  if there is room for it below
- every large creature that grows gets released  
- every round that every creature is properly fed, if there is room for new creatures,
  a new creature is introduced.
 

*/

var GameManager = function (stage) {

	//_log("GAME MANAGER, stage is " + stage);

	var _this = this;
	this.name = "GameManager";

	_this.feedCheat = false;
	
	var gameContainer = new createjs.Container();
	gameContainer.name = "GameContainer";
	
	var mapContainer = new createjs.Container();
	mapContainer.name = "MapContainer";
	gameContainer.addChild(mapContainer);
	
	var pauseButton, helpButton, overviewButton, playButton, howToPlayButton, skipButton;
	var gameTitle, howToPlayTitle, overviewBg, dropCreatureTube, liftCreatureTube, newCreatureHighlight, newCreatureSpotlight;

	// How many creatures have been released?
	this.numCreaturesReleased = 0;
	// Game Phases: feeding / growth / releases / arrivals / decoration
	this.gamePhase = "intro";
	this.gameView = "splash";
	this.storageUpToDate = false;
	this.gameIsOnline = false;
	this.allAudioLoaded = false;
	this.gameRound = 0;
	this.lastRound = -1;
	this.pens = [];

	this.debugBtn;
	this.debugUtil;

	this.hasFocus = true;

	var audioSettingFromKVS = KeyValueStorage.get("audioOn", true);
	var ccSettingFromKVS = KeyValueStorage.get("ccOn", false);
	var traySelected = null, foodSelected = null;

	this.audioOn = audioSettingFromKVS;
	this.ccOn = ccSettingFromKVS;
	this.fullscreen = false;
	
	var roundText = new createjs.Text("      ", "36px RefrigeratorDeluxe-Heavy", "chartreuse");
	
	var allCreatures = [];
	this.nextToArrive = [], this.nextToGrow = [], this.nextToRelease = [];
	
	this.numAudioLoaded = 0;
	this.audioOverlay;
	
	this.loggedIn = false;

	//_log("gM creating _mM");
	this.browserDetect = new BrowserDetection();
	var focusMonitor = new ss.PageFocus();
	var menuButtons = (_this.browserDetect.isIE() || _this.browserDetect.isMobile() || (_this.browserDetect.isSafari() && _this.browserDetect.isMac())) ? [MenuWidget.AUDIO, MenuWidget.CC] : [MenuWidget.AUDIO, MenuWidget.CC, MenuWidget.FULLSCREEN];
	var _mainMenu = new MenuWidget(menuButtons, MenuWidget.ORIENTATION.Vert);
	_mainMenu.setState(MenuWidget.CC, _this.ccOn);
	_mainMenu.x = 38, _mainMenu.y = 38;

	var phases = new PhaseManager(_this);
	this.menuHelper = new MenuHelper(_this,_mainMenu);
	this.prompts = new Prompts(_this);
	this.gameData = new GameData(_this);
	this.effects = new VisualEffects(_this);
	this.audioData = new AudioData();
	this.voManager = new AudioManager(_this.audioData.sound_data,_this);
	this.voManager.name = "VO";
	
	this.helpPrompt;
	
	this.gameInitialized = false;
	this.paused = false;	
	this.advancedMode = true;
	this.waitingForPraiseToComplete = false;
	this.introducedFeeding = false, this.introducedSharing = false, this.introducedCutters = false;
	this.introduced1wayChallenge = false, this.introduced2wayChallenge = false, this.introduced3wayChallenge = false;
	this.numPlaysTooMuchFood = 0, this.numPlaysNotEnoughFood = 0;
	this.achievedFirstCreature = false, this.achievedFairSharing = false, this.achievedGrowth = false, this.achievedRelease = false, this.achievedFractionation = false;
	this.playedUseAllFood = false;

	this.targetCreature = null, this.growingCreature = null;
	this.currentPen = null;
	
	this.MAX_PER_PEN = 4;
	
	var creatureTypes = ["unicorn", "whiteunicorn", "jackalope", "shebeetle", "hebeetle", "dragon", "reddragon", "griffin", "spidercat", "trex", "laserchicken", "tiggle"];

	
	var audioManagers = [_this.voManager];

	
	if(_this.browserDetect.isMobile() || _this.browserDetect.isSafari()){		
		_log(" ))) isMobile || isSafari");
		this.soundManager = this.voManager;
	} else {
		_log(" ))) not mobile, not safari");
		this.soundManager = new AudioManager(_this.audioData.sound_data,_this);
		this.soundManager.name = "SFX";
		audioManagers.push(this.soundManager);
	}
	 
	for(var i=0; i<audioManagers.length; i++ ){
		gameContainer.addChild(audioManagers[i]);
	}
	
	_this.creaturesReleasedDO = new createjs.Container();
	_this.creaturesReleasedDO.releasedLabel = new createjs.Text("Creatures Released :", "30px 'RefrigeratorDeluxe-Heavy'", "white");
	_this.creaturesReleasedDO.releasedLabel.x = -150;
	_this.creaturesReleasedDO.releasedLabel.y = 0;
	_this.creaturesReleasedDO.releasedLabel.textBaseline = "hanging";
	_this.creaturesReleasedDO.releasedTxt = new createjs.Text("0", "30px 'RefrigeratorDeluxe-Heavy'", "white");
	_this.creaturesReleasedDO.releasedTxt.x = 130;
	_this.creaturesReleasedDO.releasedTxt.y = 0;
	_this.creaturesReleasedDO.releasedTxt.textBaseline = "hanging";
	var crbg = new createjs.Shape();

	var hexLeft = -170;
	var hexRight = 190;
	var hexMid = 15;
	crbg.graphics.moveTo(hexLeft,hexMid-20).beginFill("rgba(0, 80, 80, 0.7)").lineTo(hexRight,hexMid-20).lineTo(hexRight+10,hexMid).lineTo(hexRight,hexMid+20).lineTo(hexLeft,hexMid+20).lineTo(hexLeft-10,hexMid).lineTo(hexLeft-10,hexMid-20).endFill();
	//drawRoundRect(-170, -5, 360, 40, 10);
	_this.creaturesReleasedDO.addChild(crbg, _this.creaturesReleasedDO.releasedLabel, _this.creaturesReleasedDO.releasedTxt);



	this.is_touch_device = function () {
	  return !!('ontouchstart' in window);
	};
	
	// Some getters
	//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
	this.getCanvas = function (){
		//_log("someone is looking for this canvas: "+canvas);
		return canvas;
	};

	this.getAllCreatures = function(){
		return allCreatures;
	}

	this.getTargetCreature = function (){
		return _this.targetCreature;
	};
	this.setTargetCreature = function (creature){
		_this.targetCreature = creature;
		_log("%c targetCreature is now "+(creature==null ? null : creature.name),"background-color:lightpink;");
	};

	this.getGrowingCreature = function (){
		return _this.growingCreature;
	};
	this.setGrowingCreature = function (creature){
		_this.growingCreature = creature;
		_log("%c growingCreature is now "+(creature==null ? null : creature.name),"background-color:hotpink;");
	};

	// setAudio(bool toPlay)
	// ===============================
	// Turn the sound on (if toPlay) or off.
	//-----------------------------------------------------------------------
	this.setAudio = function (toPlay){

		//_log("setAudio --> " + toPlay);
		_this.audioOn = toPlay;
			
		for(var i=0; i<audioManagers.length; i++ ){
			audioManagers[i].setVolume( _this.audioOn? 1 : 0 );
		}
		if(_this.gameView != "splash"){
			_this.gameData.saveGame();
		}
	}
	this.setCC = function (toShow){
		_this.ccOn = toShow;
		
		if(_this.gameView != "splash"){
			_this.gameData.saveGame();
		}
	}
	// pauseGame(bool toPause)
	// ======================
	// Stop animations and show the pause screen.
	//-----------------------------------------------------------------------
	var pauseGame = function (toPause){
		_this.paused = toPause;
		
		for(var i=0; i<_this.pens.length; i++ ){
			_this.pens[i].pause(toPause);
		}
	};
	
	this.setGamePhase = function (newPhase){
		_this.gamePhase = newPhase;
		roundText.text = parseInt(_this.gameRound + 1) + ": " + _this.gamePhase;
	};
	
	var startGame = function (){

		var WAIT_FOR_AUDIO = 1000;
		gameContainer.removeChild(skipButton);
	
		if(_this.voManager.firstTimeUpdate){

			_log("Audio not ready so looping, "+_this.voManager.audioElement.duration+", "+_this.voManager.audioElement.readyState+","+_this.voManager.audioElement.currentTime);

			gameContainer.addChild(_this.audioOverlay);
			createjs.Tween.get(_this.audioOverlay).to({alpha:0.5},500).to({alpha:1},500);
			createjs.Tween.get(_this).wait(WAIT_FOR_AUDIO).call(startGame);

		} else {

			_log("Starting Game! in phase " + _this.gamePhase);

			createjs.Tween.removeTweens(_this.audioOverlay);
			_this.audioOverlay.alpha = 1;
			stage.removeChild(_this.audioOverlay);

			_this.voManager.stopSound(false);
			
			if(_this.roomForNewCreatures()){
				_this.nextToArrive.push(_this.spawnCreature(true));
			}
			_this.showOverview(true);
			
			var START_DELAY = 2000;

			if(_this.gameRound > 1){
				var welcomeSound = Math.random() < 0.5 ? "welcomeback0" : "welcomeback1";
				_this.voManager.playSound(welcomeSound,2);
				_this.prompts.showPrompt(true, _this.audioData.captionForId(welcomeSound));
				START_DELAY += _this.audioData.durationForId(welcomeSound);
			}

			createjs.Tween.get(_this).wait(START_DELAY).call(phases.updatePhase,[],phases);
			//-->doArrival-->showNewCreature	
		}
	};
		
	// _this.showOverview(bool toShow)
	// =========================
	// Assemble and if true, show, or if false, hide the Overview Screen
	//-----------------------------------------------------------------------
	_this.showOverview = function (toShow){
		_log("\n\nSHOW OVERVIEW\n____________________________________" + toShow + " " + Math.random()*999);
		createjs.Tween.removeTweens(gameContainer);
		
		if(toShow && _this.gameView != "overview"){

			var anyoneHungry = false;
			
			// hide prompts and hints
			if(_this.gameView == "zoom"){
				_this.hideHelp();
				_this.helpPrompt.setHint(null);
				_log("s!P!f! from showOverview, in zoom view");
				_this.prompts.showPrompt(false);
			}
			
			_this.gameView = "overview";
			
			_log(" -----> _this.pens: "+_this.pens);
			for(var i=0; i<_this.pens.length; i++ ){
				_this.pens[i].showCloseUp(false);
				gameContainer.removeChild(_this.pens[i].inZoom);
				if(_this.pens[i].hasHungryCreatures()){
					anyoneHungry = true;
				}
				_this.pens[i].updatePreview();
			}		
			
			gameContainer.removeChild(pauseButton, helpButton, overviewButton);			
			
			gameContainer.addChild(mapContainer);
			_this.resetMapPosition();

			gameContainer.addChild(pauseButton, helpButton);
			if(_this.numCreaturesReleased > 0){
				gameContainer.addChild(_this.creaturesReleasedDO);
			}
			
			if(_this.targetCreature !== null){
				var localPt = _this.targetCreature.displayObj.localToLocal(0,0, gameContainer);
				gameContainer.addChild(_this.targetCreature.displayObj);
				_this.targetCreature.displayObj.x = localPt.x;
				_this.targetCreature.displayObj.y = localPt.y;
				//_log(" A D D I N G _this.targetCreature.displayObj at " + _this.targetCreature.displayObj.x + ", " + _this.targetCreature.displayObj.y);
			}
			if(_this.growingCreature !== null){
				var localPt = _this.growingCreature.displayObj.localToLocal(0,0, gameContainer);
				gameContainer.addChild(_this.growingCreature.displayObj);
				_this.growingCreature.displayObj.x = localPt.x;
				_this.growingCreature.displayObj.y = localPt.y;
				//_log(" A D D I N G _this.growingCreature.displayObj at " + _this.growingCreature.displayObj.x + ", " + _this.growingCreature.displayObj.y);
			}
			
			
			// Keep any alert popups on top 
			
			
			if(_this.feedCheat){
				anyoneHungry = false;
				_this.feedCheat = false;
			}
			//_log("showOverview, anyone hungry? " + anyoneHungry + ", anyone target? " + (_this.targetCreature !== null) + ", anyone growing? " + (_this.growingCreature !== null));
			if(!anyoneHungry && _this.targetCreature == null && _this.growingCreature == null){
				//_log("showOverview, nobody hungry, nobody growing, update.");
				phases.updatePhase();
			} else if (anyoneHungry){
				_this.effects.unHighlightZones(false);
				_this.helpPrompt.setHint("feed_creatures", null);
			}
			_this.displayInMap(newCreatureSpotlight,true,true);
		} else {
			//gameContainer.addChild(mapContainer);
			//_this.resetMapPosition();
			gameContainer.removeChild(mapContainer);
			if(_this.numCreaturesReleased > 0){
				gameContainer.removeChild(_this.creaturesReleasedDO);
			}
			//_this.currentPen.checkToIntroduceFood();
		}
		_this.prompts.raisePrompts();
		gameContainer.addChild(dropCreatureTube);
		gameContainer.addChild(_mainMenu);
		
		//_log("..... showed the Overview or not ......");
	};
	
	_this.roomForNewCreatures = function (){
		for(var i=0; i<_this.pens.length; i++ ){
			if(_this.pens[i].size == "small"){
				if(_this.pens[i].hasRoom()){
					return true;
				}
			}
		}
		return false;
	};

	
	
	this.foodTime = function (){
		//_log("   *\n    FOOD TIME in GM!");
		_this.effects.unHighlightZones(true);
		if(_this.lastRound != _this.gameRound){
			_this.lastRound = _this.gameRound;
			for(var i=0; i<_this.pens.length; i++ ){
				_this.pens[i].initRound();
				_this.pens[i].showCloseUp(_this.gameView == "zoom" && _this.pens[i] == _this.currentPen);
			}
		}
		
		var randomOrderedPens = [].concat(_this.pens);
		var POP_SPEED = 800; 
		randomOrderedPens.sort(function (a, b){return (Math.random() < 0.5 ? 1 : -1);});
		//_log(randomOrderedPens.length + " _this.pens about to enter food time");
		
		var numAssigned = 0;
		for(var i=0; i<randomOrderedPens.length; i++ ){
			//_log("randomOrderedPens " + i + ": " + randomOrderedPens[i].name);
			if(randomOrderedPens[i].creatures.length > 0){
				createjs.Tween.get(randomOrderedPens[i]).wait(i*numAssigned).call(randomOrderedPens[i].foodTime,[],randomOrderedPens[i]);
				numAssigned++;
			}
		}
		_this.helpPrompt.setHint("feed_creatures", null);
	};
	
	// showZoomOn(Pen pen) with showZoomHelper
	// ===================      ==============
	// Assemble and show the Zoomed view of the specified pen
	//-------------------------------------------------------------------------------
	var showZoomHelper = function (pen){
		_this.currentPen.showCloseUp(true);
		//_log(".....showedCloseUp in showZoomHelper.....");
		gameContainer.addChild(pen.inZoom);
	};

	this.showZoomOn = function (pen){
		_log(" SHOW ZOOM ON " + pen.name);
		
		var penInZoom = false;
		for(var i=0; i<_this.pens.length; i++ ){
			if(createjs.Tween.hasActiveTweens(_this.pens[i].inZoom)){
				penInZoom = true;
				_log(" !    " + _this.pens[i].name + " still tweening");
			}
		}
		if(pen.creatures.length > 0 && !penInZoom && !gameContainer.contains(pen.inZoom)){
			
			
			if(pen.hasHungryCreatures()){	

				_log(" DOING IT.");
				_this.unHighlightCreature();
			
				if(_this.currentPen !== null){
					gameContainer.removeChild(_this.currentPen.inZoom);
				}
				
				_this.currentPen = pen;

				for(var i=0; i<_this.pens.length; i++ ){
					_this.pens[i].showCloseUp(false);	
				}
				_this.gameView = "zoom";
				
				gameContainer.removeChild(pauseButton, helpButton);

				//gameContainer.addChild(overviewButton);
				if(_this.growingCreature !== null){
					gameContainer.addChild(_this.growingCreature);
				}
				// Make sure to keep any alert popups on top 
				_this.prompts.raisePrompts();
				
				var activePens = 0;
				for(var i=0; i<_this.pens.length; i++ ){
					if(_this.pens[i].state != "closed"){
						activePens++;
					}
				}
				
				gameContainer.addChildAt(pauseButton, gameContainer.getNumChildren()-1);
				gameContainer.addChildAt(helpButton, gameContainer.getNumChildren()-1);
				gameContainer.addChild(_mainMenu);
				stage.update();

				_this.helpPrompt.setHint(null);
				_this.cancelVoicePrompts();


				// everything above this line used to be above this if statement
				//-----------------------------------------------------------------------------------------------------
				var ZOOM_TIME = 900;
				
				_this.zoomMapToPoint(3, 3, pen.inOverview.x, pen.inOverview.y, ZOOM_TIME, function (){_log("zoomedMapToPoint.");});
				
				pen.inZoom.alpha = 0;
				showZoomHelper(pen);
				createjs.Tween.get(pen.inZoom).to({alpha:1}, ZOOM_TIME*0.3).call(_this.hideMap);		

				//createjs.Tween.get(pen.inZoom).to({alpha:0}, 10).wait(ZOOM_TIME*0.7).call(showZoomHelper,[pen]).to({alpha:1}, ZOOM_TIME*0.3).call(_this.showOverview, [false],_this);	
				//
			} else {
				_this.voManager.playSound(_this.audioData.randomSoundNameFrom("alreadyFedVOs"), 1);
				_this.prompts.showPrompt(true, "You already fed these creatures.");
			}
		} else {
			_log(" umm, no, there's a zoom happening (" + penInZoom + ") or there are no creatures in that pen: " + pen.creatures.length);
		}
		
		
		_log("just showedZoomOn " + pen.inZoom);
	};
	
	this.hideMap = function(){
		
		var penInZoom = false;
		for(var i=0; i<_this.pens.length; i++ ){
			if(createjs.Tween.hasActiveTweens(_this.pens[i].inZoom)){
				penInZoom = true;
			}
		}
		
		if(gameContainer.contains(_this.currentPen.inZoom) && _this.currentPen.inZoom.alpha == 1){
			_this.showOverview(false);	
		} else {
			createjs.Tween.get(_this.currentPen.inZoom).wait(50).call(_this.hideMap);
		}
	}
	this.disableMouseChildren = function (container){
	
		//_log("disabling " + container);
		if(container !== undefined && container.children !== undefined){
			var numChildren = container.getNumChildren();
			for(var i=0; i<numChildren; i++ ){
				if(container.getChildAt[i] !== undefined){
					container.getChildAt[i].mouseEnabled = false;
					if(container.getChildAt[i].children !== undefined){
						_this.disableMouseChildren(container.getChildAt[i]);
					}
				}
			}
		}
		
	};
	
	this.updatePens = function (){
		//_log("> > > updatePens");
		var openPens = [];
		for(var i=0; i<_this.pens.length; i++ ){
			if(_this.pens[i].state != "closed" && _this.pens[i].creatures.length > 0){
				openPens.push(_this.pens[i]);
			}
		}
	};

	// showNewCreature
	// ====================
	// Assemble and if true, show, or if false, the New Growing Popup
	//-----------------------------------------------------------------------
	this.showNewCreature = function (evt){
		_this.prompts.hideAlert();
		
		var nextCreature = null;

		if(_this.nextToArrive.length == 0){
			if(nextCreature !== null){
				_this.nextToArrive.push(nextCreature);
			} else {
				_this.nextToArrive.push(_this.spawnCreature(true));
			}
			
		} else {
			nextCreature = _this.nextToArrive.pop();
		}
		_this.setTargetCreature(nextCreature);
		_this.prompts.playNewArrivalIntro();
		introduceCreature(nextCreature);
		
		_this.hideHelp();
	};
	
	
	// showGrowCreaturePopup(Creature creature)
	// =======================================
	// Assemble and if true, show, or if false, the Creature Growing Popup
	//-----------------------------------------------------------------------
	this.showGrowCreaturePopup = function (){
		_log("%c -= showGrowCreaturePopup =- ","font-weight:bold; color:white; background-color:gray");
		//_this.voManager.stopSound(true);
		
		//if(_this.voManager.busy()){
		//	_log("%c ... vo busy ... ","font-weight:bold; color:white; background-color:gray");
		//	createjs.Tween.get(_this).wait(100).call(_this.showGrowCreaturePopup);
		//} else {
			var grow_vo = _this.audioData.randomSoundNameFrom("growingUpVOs");
			_this.prompts.showPrompt(true, _this.audioData.captionForId(grow_vo));
			_this.voManager.playSound(grow_vo, 3);
		//}
	};
	
	// showReleaseCreaturePopup(Creature creature)
	// ============================================
	// Assemble and if true, show, or if false, the Creature Release Popup
	//-----------------------------------------------------------------------
	this.showReleaseCreaturePopup = function (){
		_log("%c -= showReleaseCreaturePopup =- ","font-weight:bold; color:white; background-color:gray");	
		var vo_id = _this.audioData.randomSoundNameFrom( _this.numCreaturesReleased <= 1 ? "releaseVOs_stage1" :  _this.numCreaturesReleased <= 3 ? "releaseVOs_stage2" : ( Math.random()<0.3 ?  "releaseVOs_stage1" : Math.random()<0.5 ? "releaseVOs_stage2" : "releaseVOs_stage3" ))
		var vo_dur = _this.audioData.durationForId(vo_id);
		var vo_text = _this.audioData.captionForId(vo_id);
		
		
		createjs.Tween.get(_this.growingCreature.displayObj).wait(vo_dur+500).call(releaseCreature, [_this.growingCreature]);
		
		_this.voManager.playSound(vo_id, 999);
		_this.prompts.showPrompt(true,vo_text);
		_log("showing vo_id ="+vo_text+", for "+vo_dur+" ms.");
	};
	
	this.startDrag = function (event){
		if(_this.gameView != "splash" && _this.gamePhase != "release"){
			var creature = event.currentTarget.creatureObj;
			_log("startDrag! PRESSING creature " + creature.name + ", inTube ? " + creature.inTube);
			if(creature.droppedIn && !creature.inTube){
				creature.inDrag = true;
				_this.followPos(event);
			}
		}
	};

	this.followPos = function (event){
		if(_this.gameView != "splash"  && _this.gamePhase != "release"){
			var creatureBody = event.currentTarget;

			if(creatureBody !== undefined && !creatureBody.creatureObj.inTube && creatureBody.creatureObj.droppedIn){
				var localPt = gameContainer.globalToLocal(event.stageX, event.stageY);

				if(!gameContainer.contains(creatureBody)){
					gameContainer.addChild(creatureBody);
				} 
				creatureBody.x = localPt.x, creatureBody.y = localPt.y;
			}
			_this.highlightCreature(creatureBody.creatureObj);
		}
		
	};
	
	this.highlightCreature = function (creature){
		
		newCreatureSpotlight.scaleX = creature.displayObj.scaleX*3;
		newCreatureSpotlight.scaleY = creature.displayObj.scaleY*3;
		mapContainer.addChild(newCreatureSpotlight);
		for(var i = 0; i < _this.pens.length; i++ ){
			mapContainer.addChild(_this.pens[i].inOverview);
		}
		creature.displayObj.parent.addChild(creature.displayObj);

		var localCreaturePos = creature.displayObj.localToLocal(0,0,mapContainer);
		newCreatureSpotlight.x = localCreaturePos.x;
		newCreatureSpotlight.y = localCreaturePos.y + 50*creature.displayObj.scaleX;
	};

	this.unHighlightCreature = function (){
		_log("%c -*- unHighlight creature! ", "background-color: sandybrown");
		_this.displayInMap(newCreatureSpotlight,false);
	};
	
	this.dropCreature = function (event){	

		var creatureBody = event.data !== undefined ? (event.data.creature !== undefined ? event.data.creature.displayObj : event.currentTarget) : event.currentTarget;
		var creature = creatureBody.creatureObj;

		if(_this.gameView != "splash" && _this.gamePhase != "release" && !creature.inTube){
			
			
			//_log(" d r o p p i n g " + creature.name + ", _this.targetCreature is " + (_this.targetCreature==null?"null":_this.targetCreature.name) + ", _this.growingCreature is " + (_this.growingCreature==null?"null":_this.growingCreature.name) + ", isNew? " + creature.isNew);
			//var creatureBody = event.currentTarget;
			
			if((_this.targetCreature !== null || _this.growingCreature !== null) && creature.droppedIn){
			
				var placedCreature = false;
				
				penloop:
				for(var i=0; i<_this.pens.length; i++ ){
					var dropPt = gameContainer.localToLocal(creatureBody.x, creatureBody.y, _this.pens[i].inOverview);
					if(_this.pens[i].state != "closed"){
						//_log ("pen " + i + ": " + _this.pens[i].state + ", hitting " + dropPt.x + ", " + dropPt.y + " ? " + _this.pens[i].inOverview.hitTest(dropPt.x, dropPt.y));
						_log("\nHITTEST inoverview vs drop pt --- ? "+(Math.abs(dropPt.x))+","+(Math.abs(dropPt.y)));
						var penBounds = _this.pens[i].inOverview.nominalBounds;
						if( (Math.abs(dropPt.x) < penBounds.width/2) && (Math.abs(dropPt.y) < penBounds.height/2) ){
							_log("     HITTING zone.");
						//if(_this.pens[i].inOverview.hitTest(dropPt.x, dropPt.y)){
							if (event.data == undefined){
								event.data = {};
							} 
							event.data.fromDrop = true;
							placedCreature = _this.pens[i].onPressPen(event);
							if(placedCreature){
								//creatureBody.removeAllEventListeners();
								break penloop;
							}
						}
					}
				}
				_log("     ... p l a c e d   i t ? " + placedCreature);
				
					
				if(placedCreature){
					creatureBody.removeAllEventListeners();
					createjs.Tween.removeTweens(creatureBody);
					var evt = new createjs.Event("CREATURE_HOUSED", true);
					evt.data = {creature: creature};
					_log("calling OCH directly from dropCreature, we placed it.")
					_this.onCreatureHoused(evt);
				} else {
					_log("     didn't hit ANY zone.");
					if (creature == _this.targetCreature || creature == _this.growingCreature) {
						makeCreatureTumble(creature);
					}
				}
			} else {
				_log(" . . . n n n o t   r e a l l y .  Moving on.");
				//phases.updatePhase();
			}
		}
		
	};
	
	// introduceCreature(Creature creature)
	// ===================================================
	// Drop the specified creature into the overview area
	//-----------------------------------------------------------------------
	var introduceCreature = function (creature){

		if(creature == null){
			_log("!!   introducing a null creature, abandon.");
		} else {
			_this.prompts.hideAlert();

			_log("> > >     I N T R O D U C I N G   " + creature.name + ", " + (creature.isNew?"NEW!":"NOT new."));

			if(creature.isNew){
				_this.setTargetCreature(creature);
			} else {
				_this.setGrowingCreature(creature);
			}

			// make sure the requisite pen is open
			for(var i=0; i<_this.pens.length; i++ ){
				if(creature.size == _this.pens[i].size && (creature.type == _this.pens[i].type || _this.pens[i].type == "any") && (creature.colour == _this.pens[i].colour || _this.pens[i].colour == "any") && (creature.fashion == _this.pens[i].fashion || _this.pens[i].fashion == "any")){

					gameContainer.addChild(creature.displayObj);
					creature.displayObj.scaleX = creature.displayObj.scaleY = _this.pens[i].creatureScaleInOverview();
					//_log("in introduceCreature, just set scale on " + creature.name + " to " + creature.displayObj.scaleX);
					
					createjs.Tween.get(_this).wait(750).call(_this.pens[i].open);
				}
			}
			
			var creatureHeight = creature.body.nominalBounds.height * creature.displayObj.scaleY;
			
			// drop it in
			_log("do we need to drop this creature in?  isNew? "+creature.isNew+", droppedIn? "+creature.droppedIn);
			if(creature.isNew && !creature.droppedIn){
				var dropPos = new Point(canvas.width/2, canvas.height-creatureHeight/2-20);
				
				if(creature.displayObj.y != dropPos.y){
					//creature.displayObj.x = dropPos.x;
					//creature.displayObj.y = dropPos.y;
					
					gameContainer.addChild(dropCreatureTube);
					creature.inTube = true;
					dropCreatureTube.dropIn(creature.displayObj, dropPos, 1500, createjs.Ease.bounceInOut);
					creature.droppedIn = true;
					_this.soundManager.playSoundAfter("creaturedropin", 0,500);
				}
			}
			
			creature.displayObj.addEventListener("mousedown", _this.startDrag);
			creature.displayObj.addEventListener("pressup", function (e){_this.dropCreature(e, creature == e.currentTarget.creatureObj.isNew);}); 
			creature.displayObj.addEventListener("pressmove", _this.followPos);
	
			_this.effects.highlightZones( (creature.size == "small") ? ["isSmall", "hasRoom"] : (creature.size == "medium") ? ["isMedium", "hasRoom"] : ["isLarge", "hasRoom"], true);
		}
		gameContainer.addChild(_mainMenu);
	};

	
	var pressPlay = function (e){

		_log("\np\n r\n  e\n   s\n    s")
	

		if(_this.gameView == "splash"){
			
			var innerwrap = document.getElementById("gameBack");
			canvas.style.display = "block";
			var ctx = canvas.getContext("2d");
			
			_log(" PRESSING PLAY, REMOVING PLAY BUTTON!");
			stage.removeChild(playButton);
			//skipButton.removeAllEventListeners();
			
			var vwrapper = document.getElementById("videoplayerwrapper");
			var viddiv = document.getElementById("pbs-video-player");
			vwrapper.removeChild(viddiv);
			vwrapper.parentNode.removeChild(vwrapper);
			
			stage.addChild(gameContainer);	
			//gameContainer.addChild(roundText);
			stage.update();

			for(var i=0; i<audioManagers.length; i++ ){
				if(!audioManagers[i].initialized){
					_log(" initializing sound on "+audioManagers[i]);
					audioManagers[i].sndInit();
				}
			}
			var PLAY_DELAY = 1500;
			setTimeout(function(){startGame();},PLAY_DELAY);
		} 
		var suppose_all_loaded = true;
		for(var i=0; i<audioManagers.length; i++){
			if(!audioManagers[i].loaded){
				suppose_all_loaded = false;
			}
		}
		_this.allAudioLoaded = suppose_all_loaded;
		if(!_this.allAudioLoaded && !_this.browserDetect.isSafari()){
			stage.addChild(_this.audioOverlay);
		}
		sendGAEvent("CreatureDuty_ScreenFlow", "Play_Button_Clicked");
	};

	
	var pressPause = function (e){
		startGame();
	};
	
	// initScreens
	// =============
	// initialize the locations of elements of the overview and zoom screens
	//------------------------------------------------------------------------
	var initScreens = function (){
	
		_this.small_0 = new Pen("small", _this, 0, _this.MAX_PER_PEN);
		_this.small_1 = new Pen("small", _this, 1, _this.MAX_PER_PEN);
		_this.small_2 = new Pen("small", _this, 2, _this.MAX_PER_PEN);
		
		_this.medium_0 = new Pen("medium", _this, 0, _this.MAX_PER_PEN);
		_this.medium_1 = new Pen("medium", _this, 1, _this.MAX_PER_PEN);
		_this.medium_2 = new Pen("medium", _this, 2, _this.MAX_PER_PEN);
		
		_this.large_0 = new Pen("large", _this, 0, _this.MAX_PER_PEN);
		_this.large_1 = new Pen("large", _this, 1, _this.MAX_PER_PEN);
		_this.large_2 = new Pen("large", _this, 2, _this.MAX_PER_PEN);
		
		_this.pens = [_this.small_0, _this.small_1, _this.small_2, _this.medium_0, _this.medium_1, _this.medium_2, _this.large_0, _this.large_1, _this.large_2];
		
		var ROW_PAD_X = 10;
		var ROW_PAD_Y = 10;
		
		var CENTER_Y = canvas.height/2 + 30;
		
		var ALL_W = 320;
		
		var SMALL_H = _this.small_0.overviewBounds.height;
		var MEDIUM_H = _this.medium_0.overviewBounds.height;
		var LARGE_H = _this.large_0.overviewBounds.height;	
		
		_this.small_0.inOverview.x = canvas.width/2 - ALL_W - ROW_PAD_Y;
		_this.small_1.inOverview.x = canvas.width/2;
		_this.small_2.inOverview.x = canvas.width/2 + ALL_W + ROW_PAD_Y;
		_this.small_0.inOverview.y = _this.small_1.inOverview.y = _this.small_2.inOverview.y = CENTER_Y + MEDIUM_H/2 + SMALL_H/2 + ROW_PAD_Y;

		_this.medium_0.inOverview.x = canvas.width/2 - ALL_W - ROW_PAD_Y;
		_this.medium_1.inOverview.x = canvas.width/2;
		_this.medium_2.inOverview.x = canvas.width/2 + ALL_W + ROW_PAD_Y;
		_this.medium_0.inOverview.y = _this.medium_1.inOverview.y = _this.medium_2.inOverview.y = CENTER_Y;
		
		_this.large_0.inOverview.x = canvas.width/2 - ALL_W - ROW_PAD_Y;
		_this.large_1.inOverview.x = canvas.width/2;
		_this.large_2.inOverview.x = canvas.width/2 + ALL_W + ROW_PAD_Y;
		_this.large_0.inOverview.y = _this.large_1.inOverview.y = _this.large_2.inOverview.y = CENTER_Y - MEDIUM_H/2 - LARGE_H/2 - ROW_PAD_Y;
	
		var BACK_ADJ = 6;
		

		pauseButton = new lib.pause_button();
		pauseButton.scaleX = pauseButton.scaleY = 0.85;
		
		helpButton = new lib.help_button();
		helpButton.scaleX = helpButton.scaleY = 0.85;
				
		overviewButton = new lib.overview_button();
		var overviewButtonHA = new createjs.Shape();
		overviewButtonHA.graphics.beginFill("red").drawRect(overviewButton.nominalBounds.x, overviewButton.nominalBounds.y, overviewButton.nominalBounds.width, overviewButton.nominalBounds.height);
		overviewButton.hitArea = overviewButtonHA;
		overviewButton.name = "Overview_Button";
		_this.disableMouseChildren(overviewButton);
		
		playButton = new lib.splash_play();
		playButton.x = 940, playButton.y = 660;
		playButton.scaleX = playButton.scaleY = 0.9;

		var hitShape = new createjs.Shape();
		hitShape.graphics.beginFill("red").drawRect(playButton.nominalBounds.x, playButton.nominalBounds.y, playButton.nominalBounds.width, playButton.nominalBounds.height);
		playButton.hitArea = hitShape;


		playButton.on("mouseover",function (evt){evt.target.cursor = 'pointer';});

		skipButton = new lib.splash_skip();
		skipButton.x = playButton.x, skipButton.y = playButton.y;
		skipButton.scaleX = playButton.scaleX, skipButton.scaleY = playButton.scaleY;
		skipButton.on("mouseover",function (evt){evt.target.cursor = 'pointer';});

		gameTitle = new createjs.Container();
		
		roundText.x = canvas.width*4/5;
		roundText.y = 0;
	
		dropCreatureTube = new Tube(false);
		liftCreatureTube = new Tube(true);
		_this.disableMouseChildren(dropCreatureTube);
		_this.disableMouseChildren(liftCreatureTube);
	
		_this.helpPrompt = new HelpPrompt(helpButton, stage, _this);
	
		_this.audioOverlay = new lib.audioOverlay();
		//_this.audioOverlay.mouseEnabled = true;
			
		newCreatureSpotlight = new lib.creature_spotlight();
		newCreatureSpotlight.mouseEnabled = false;
		newCreatureSpotlight.name = "* SPOT *";
		_this.disableMouseChildren(newCreatureSpotlight);
		
		pauseButton.on("pressup", pressPause);
	
		overviewButton.x = canvas.width - overviewButton.nominalBounds.width/2 + BACK_ADJ;
		overviewButton.y = overviewButton.nominalBounds.height/2 - BACK_ADJ + 100;
		overviewButton.scaleX = overviewButton.scaleY = 1;
		
		// show the map bg, the overview pen icons, and the overview buttons
		_log(" ~A~ ");
		overviewBg = new lib.main_map();
		overviewBg.mouseEnabled = "false";
		if(_this.browserDetect.isMobile()){
			overviewBg.removeChild(overviewBg.ripples);
		}
		_this.disableMouseChildren(overviewBg);
		overviewBg.scaleX = overviewBg.scaleY = 1;
		overviewBg.x = overviewBg.y = 0;
		
		gameContainer.addChild(mapContainer);
		//gameContainer.addChild(_this.debugBtn);

		_this.creaturesReleasedDO.x = 200;
		_this.creaturesReleasedDO.y = canvas.height - ROW_PAD_Y - 30;

		//pauseButton.x = pauseButton.nominalBounds.width/2 - BACK_ADJ;
		// TEMPORARILY DISABLE:
		pauseButton.x = -200;
		pauseButton.y = pauseButton.nominalBounds.height/2 - BACK_ADJ*2;
	
		//helpButton.x = pauseButton.x + 60;
		// TEMPORARILY DISABLE:
		helpButton.x = -200;
		helpButton.y = helpButton.nominalBounds.height/2 - BACK_ADJ*2;
		helpButton.name = "Help Button";
	

		mapContainer.addChild(overviewBg);
		if(!_this.browserDetect.isMobile()){
			var tubeBalls = new lib.tubeBalls();
			tubeBalls.mouseEnabled = false;
			_this.disableMouseChildren(tubeBalls);
			mapContainer.addChild(tubeBalls);
		}
		mapContainer.addChild(_this.large_0.inOverview, _this.large_1.inOverview, _this.large_2.inOverview);
		mapContainer.addChild(overviewBg.tower_medium_large);
		mapContainer.addChild(_this.medium_0.inOverview, _this.medium_1.inOverview, _this.medium_2.inOverview);
		mapContainer.addChild(overviewBg.tower_small_medium);
		mapContainer.addChild(_this.small_0.inOverview, _this.small_1.inOverview, _this.small_2.inOverview);

	};
	
	this.hideHelp = function (){
		_this.helpPrompt.hide();
	};
	
	this.showExitAnim = function (toShow){
		if(toShow){
			overviewButton.gotoAndPlay(1);
		} else {
			overviewButton.gotoAndStop(0);
		}
	};
	

	this.onFeedingFeedbackComplete = function(){

		if(_this.waitingForPraiseToComplete){
			//alert(" onFFC, showing overview");
			_this.waitingForPraiseToComplete = false;
			_this.showOverview(true);
		}
	}
	
	this.onSoundComplete = function (evt){
		
		var id = evt.data.soundname;
		_log("follow up!  on " + id);
		
		// If we have just finished introducing a creature, prompt for where to put it.
		if (_this.audioData.soundBelongsTo(id, "newCreatureVOs")){
			_this.prompts.playHouseCreaturePrompt();

		} else if (_this.audioData.soundBelongsTo(id, "tellingVOs")){
			_this.prompts.playChooseAction();
		} else if (_this.audioData.soundBelongsTo(id, "feedingVOs")){
			//_this.helpPrompt.setHint("deliver_food", null);
			
		}  else if (_this.audioData.soundBelongsTo(id, "sharingFeedbackVOs")){
			_this.prompts.showPromptAfter(false, "", 500);
			_log("%c that was a SHARING vo.  waiting? "+_this.waitingForPraiseToComplete,"font-weight:bold; color:darkgreen; background-color:yellowgreen;");
			
			if(_this.waitingForPraiseToComplete){		
				_log("calling isRoundOver from onSoundComplete");
				_this.waitingForPraiseToComplete = false;
				_this.isRoundOver();
			}else {
				_log(" :[ not waitingForPraiseToComplete.");
			}
			
		} else if (_this.audioData.soundBelongsTo(id, "crunchSounds")){
			_log("%c  y   u   m   m   y    ! ","background-color:yellow;");
			_this.soundManager.playSound("yummy", 0);
		} else if (id == "yummy"){
			_this.soundManager.playSoundAfter(_this.currentPen.creatures[Math.floor(_this.currentPen.creatures.length*Math.random())].creatureType + "voice", 0, 200);
			
			if(_this.waitingForPraiseToComplete){		
				_log("calling isRoundOver from onSoundComplete");
				_this.waitingForPraiseToComplete = false;
				_this.isRoundOver();
			} else {
				_log(" :[ not waitingForPraiseToComplete.");
			}
					
		} else if (id == "creaturegrowup" || id == "creaturegrowrelease"){
			_this.soundManager.playSoundAfter("happyfaceappears", 0, 300);
		} else if (_this.audioData.soundBelongsTo(id, "growingUpVOs")){
			_this.prompts.playHouseCreaturePrompt();
		} else if (id == "intropart1"){
			_this.voManager.playSoundAfter("intropart2", 1, 500);
			_this.prompts.showPrompt(true, "Odd Squad needs you to follow the instructions to feed them\nso they can grow-up strong and go back home. ");
		
		} else if (id == "intropart2"){
			createjs.Tween.get(_this).wait(1000).call(_this.onIntroComplete);
		} else if (id == "foodleftover"){
			if(!_this.currentPen.correctPieces()){
				_this.voManager.playSoundAfter("choosefractionator",1,500);
				_this.prompts.showPromptAfter(true,_this.audioData.captionForId("choosefractionator"),500);
			}
		}

		if (_this.audioData.soundBelongsTo(id, "praiseVOs") || _this.audioData.soundBelongsTo(id, "affirmationVOs") || _this.audioData.soundBelongsTo(id, "chooseVOs") || _this.audioData.soundBelongsTo(id,"sharingFeedbackVOs") ){
			_this.prompts.showPromptAfter(false, "", 500);	
		}
	
	};
	

	this.playFeedingFeedback = function(pen){
		_log("%c playing feedback----------","color:blue; font-weight:bold");
		var feedback_id;
		_this.waitingForPraiseToComplete = true;
		if(pen.creatures.length > 1){				
			feedback_id = _this.audioData.randomSoundNameFrom("sharingFeedbackVOs");
			_this.voManager.playSoundAfter(feedback_id, 2, 20);
			_this.prompts.showPrompt(true, _this.audioData.captionForId(feedback_id));
		} else {
			feedback_id = _this.audioData.randomSoundNameFrom("praiseVOs");
			_this.voManager.playSoundAfter(feedback_id, 2, 20);
			_this.prompts.showPrompt(true, _this.audioData.captionForId(feedback_id));
		}
		var durationOfFeedback = _this.audioData.durationForId(feedback_id);
		if(durationOfFeedback == 0){
			//alert("calling isRoundOver in 2.25 secs from pFF");
			createjs.Tween.get(pen.inZoom).wait(2250).call(_this.isRoundOver);	
		}
		
	};


	
	// void isCurrentPenFed
	//      ===============
	// Check to see if everyone in the current pen is fed and if so, play reward and check to continue
	//----------------------------------------------------------------------------------------------------------
	this.isCurrentPenFed = function (evt){
		_log("is Current Pen Fed?");

		var thisPenFed = true;
			
		for(var j=_this.currentPen.creatures.length-1; j>=0; j--){	
			if(_this.currentPen.creatures[j].numFoodEatenThisRound == 0 && !_this.feedCheat){
				thisPenFed = false;	
			} 
		}
		if(thisPenFed){
			_log(_this.currentPen+" fed!, issuing praise");
			_this.effects.showRaysOnCreaturesIn(_this.currentPen);	
			_this.helpPrompt.setHint(null);
		}

	};
	

	// void isRoundOver
	//      ===========
	// Check to see if the round is over.... or not... and call for any necessary end-of-round updates.
	//----------------------------------------------------------------------------------------------------------
	this.isRoundOver = function (evt){

		var everyoneFed = true;
		var scheduledToGrowInto = {small:0, medium:0, large:0, fullgrown:0};

		for(var i=0; i<_this.pens.length; i++ ){
			for(var j=_this.pens[i].creatures.length-1; j>=0; j--){
				if(_this.pens[i].creatures[j].numFoodEatenThisRound == 0 && !_this.feedCheat){
					everyoneFed = false;
				} 
			}
		}
		//alert("isRoundOver ? "+everyoneFed);	
		if(everyoneFed){	

			_log("%c isRoundOver ? TRUE, so continuing","font-weight:bold; color:white; background-color:cornflowerblue;");
			_this.roundIsOver(scheduledToGrowInto);
		} else {
			_log("%c isRoundOver ? FALSE, so WOULD HAVE BEEN jumping to the overview","font-weight:bold; color:white; background-color:cornflowerblue;");
			//alert("isRoundOver? jumping to overview");
			_this.showOverview(true);
		}
		
	};

	// void roundIsOver
	//      ===========
	// The round is over!
	// Update stats for _this.pens, grow creatures as required, and set up incoming creatures or question time
	//------------------------------------------------------------------------------------------------------------------------
	this.roundIsOver = function (scheduledToGrowInto){
		_log("%c roundIsOver! ","font-weight:bold; color:white; background-color:slateblue;");
		_this.gameRound++;
			
		roundText.text = parseInt(_this.gameRound + 1) + ": " + _this.gamePhase;
		
		sendGAEvent("CreatureDuty_GamePlay", "Round_Complete","ROUND_NUM", _this.gameRound);
				
		for(var i=0; i<_this.pens.length; i++ ){	
			for(var j=0; j<_this.pens[i].creatures.length; j++ ){
				var cj = _this.pens[i].creatures[j];
				cj.numRoundsAtSize++;
				
				if (cj.numRoundsAtSize > growthTarget){
					var nextPen = cj.size == "small" ? "medium" : cj.size == "medium" ? "large" : "fullgrown";
					scheduledToGrowInto[nextPen]++;
				}
			}
		}
		
		
		
		for(var i=0; i<_this.pens.length; i++ ){
			for(var j=0; j<_this.pens[i].creatures.length; j++ ){			
				
				var rseed = Math.random();
				var growthTarget = rseed < 0.25 ? 1 : 2;
							
				if (_this.pens[i].creatures[j].numRoundsAtSize > growthTarget){

					var cj = _this.pens[i].creatures[j];

					var roomInMedium = (_this["medium_0"].creatures.length + _this["medium_1"].creatures.length + _this["medium_2"].creatures.length + scheduledToGrowInto["medium"] - scheduledToGrowInto["large"] ) < 3*_this.MAX_PER_PEN;
					
					var roomInLarge = (_this["large_0"].creatures.length + _this["large_1"].creatures.length + _this["large_2"].creatures.length + scheduledToGrowInto["large"] - scheduledToGrowInto["fullgrown"] ) < 3*_this.MAX_PER_PEN;

					if(cj.size == "large"){
						//_log("        > > >  we need to RELEASE " + cj.name + ", it's " + cj.size + " and in a pen of size " + cj.pen.size + ", i.e. " + _this.pens[i].name);
						_this.nextToRelease.push(cj);
					} else if ((cj.size == "small" && roomInMedium)){
						_this.nextToGrow.push(cj);
						scheduledToGrowInto["medium"]++;
					} else if ( (cj.size == "medium" && roomInLarge )){
						_this.nextToGrow.push(cj);
						scheduledToGrowInto["large"]++;
					}
				}


			}
		}
		
		var largestFirst = function (a, b){
			var aSize = a.size == "large" ? 0 : a.size == "medium" ? 1 : 2;
			var bSize = b.size == "large" ? 0 : b.size == "medium" ? 1 : 2;
			return(a-b);
		}
		_this.nextToGrow.sort(largestFirst);
		
		if(_this.nextToArrive.length == 0 && (_this.gameRound < 4 || (_this.roomForNewCreatures() && Math.random()>0.3))){
			_this.nextToArrive.push(_this.spawnCreature(true));
		}
		
		if(_this.nextToGrow.length > 0){
			_log(_this.nextToGrow.length+" creatures next to grow . . . ");
			showingAPrompt = true;
			if(_this.nextToGrow[_this.nextToGrow.length-1].size == "large" || _this.nextToGrow[_this.nextToGrow.length-1].size == "fullgrown" ){
				//X doReleasePhase();
			} else {
				//X doGrowthPhase();
			}
		} 
		

		if(_this.gameView != "splash"){
			_this.gameData.saveGame();
		}
		//alert(" round! is!  over!  showing overview.");
		_this.showOverview(true);
	};
	
	this.spawnCreature = function (isNew,species){
	
		var types = ["land", "air"];
		var critId;
		var critType;
		var isNew = (typeof isNew == 'undefined') ? true : isNew;

		if(typeof species == 'undefined'){
						
			// Which creature should we add?
			var speciesRoll = Math.random();		
			critId = creatureTypes[Math.floor(speciesRoll*creatureTypes.length)];
			
		} else {
			critId = species;
		}
		
		var sizes = ["small"];
		var NUM_SPECIES = 3;
					
		// What size of creature should we add?
		var numOpenMediumPens = 0;
		var numOpenLargePens = 0;
		for(var i=0; i < _this.pens.length; i++ ){
			if(_this.pens[i].state != "closed"){
				if(_this.pens[i].size == "medium"){
					numOpenMediumPens++;
				} else if (_this.pens[i].size == "large"){
					numOpenLargePens++;
				}
			}
		}
		
		var newCrit = new Creature("small", critId, isNew);
		newCrit.displayObj.on("mouseover",function (evt){evt.target.cursor = 'pointer';});
		_log("======================= mouseover on |||> "+newCrit.name);
		// icky
		//_this.disableMouseChildren(newCrit.body);
		
		allCreatures.push(newCrit);
		//_log(" SPAWNED  >>------->>  " + newCrit.name);
		return newCrit;
		_this.hideHelp();
	};
	
	var fallComplete = function (creature){
		if(creature.size == "fullgrown"){
			releaseCreature(creature);
		} else {
			introduceCreature(creature);
		}
		creature.inGrowth = false;
	};

	var makeCreatureTumble = function (creature){
		//_log("||| " + creature.name + " tumbling");
		
		var creatureHeight = creature.body.sizer.nominalBounds.height * creature.displayObj.scaleY;
		
		var creaturePos = new Point(creature.displayObj.x, creature.displayObj.y);
		//_log("creaturePos 1 : " + creaturePos.x + ", " + creaturePos.y);
		var dropPos = new Point(creaturePos.x, creaturePos.y);
		//_log("dropPos 1 : " + dropPos.x + ", " + dropPos.y);
		var oldPen = creature.pen;
		
		if(creature.displayObj.parent !== null){
		
			creaturePos = creature.displayObj.localToLocal(0,0, gameContainer);
			
			dropPos = new Point(creature.isNew ? canvas.width/2 : creaturePos.x, (creature.size == "fullgrown" || creature.isNew) ? canvas.height-creatureHeight/2 : creaturePos.y);
					
			if(oldPen!== null){
				var freshDrop = false;
				if(creature.displayObj.parent == oldPen.inOverview){
					freshDrop = true;
				}
				oldPen.removeCreature(creature);
			}
		}
		
		var postFallFunction = (creature.size == "fullgrown") ? function (){releaseCreature(creature)} : function (){fallComplete(creature);};

		var dropTime = 1000;
			
		createjs.Tween.removeTweens(creature.displayObj);
		creature.displayObj.rotation = 0;
		
		var targetScale = creature.size == "fullgrown" ? 2.5 :  _this[creature.size + "_0"].creatureScaleInOverview();
		
		gameContainer.addChild(creature.displayObj);
		creature.displayObj.x = dropPos.x;
		creature.displayObj.y = dropPos.y;
		
		_this.highlightCreature(creature);
		createjs.Tween.get(creature.displayObj).to({scaleX:targetScale, scaleY:targetScale}, dropTime, createjs.Ease.quadOut).call(postFallFunction);		
		_this.hideHelp();
	};
	
	this.creatureTumble = function (evt){
		//_log("tumble " + evt.data.creature);
		var creature = evt.data.creature;
		if(creature.size == "fullgrown"){
			mapContainer.addChild(_this.effects.rayburst0,creature.displayObj);
			_this.effects.showRayAt(mapContainer, _this.effects.rayburst0, creature.displayObj.x, creature.displayObj.y, 1000);
			mapContainer.addChild(creature.displayObj);
			creature.inGrowth = false;
		} else {
			makeCreatureTumble(creature);
		}
	};
	
	
	var releaseCreature = function (creature){
		//_log("release! " + creature.name);
		creature.state = "released";
		creature.inGrowth = false;
		creature.displayObj.removeAllEventListeners(); 
		var RELEASE_SCALE = 2.5, ZOOM_TIME = 5000;
		
		var gCpos = (creature.displayObj.parent !== null) ? creature.displayObj.localToLocal(0,0, gameContainer) : new Point(creature.displayObj.x, creature.displayObj.y);
		
		creature.pen.removeCreature(creature);
		_this.displayInMap(creature.displayObj,true);
		creature.displayObj.x = gCpos.x;
		creature.displayObj.y = gCpos.y;
		
		var creatureHeight = creature.body.nominalBounds.height*RELEASE_SCALE;
		
		_this.zoomMapToPoint(RELEASE_SCALE, RELEASE_SCALE, gCpos.x, gCpos.y, ZOOM_TIME, _this.liftCreature);
		
		creature.happyBounce();
		_this.highlightCreature(creature);
		creature.grow();
	
		_this.hideHelp();
		
		for(var a = allCreatures.length - 1; a >= 0; a--) {
			if(allCreatures[a] === creature) {
			   allCreatures.splice(a, 1);
			}
		}
		_this.numCreaturesReleased++;
		_this.creaturesReleasedDO.releasedTxt.text = _this.numCreaturesReleased;
		gameContainer.addChild(_this.creaturesReleasedDO);
		
		_this.creaturesReleasedDO.scaleX = _this.creaturesReleasedDO.scaleY = 1.5;
		createjs.Tween.get(_this.creaturesReleasedDO).to({scaleX:1, scaleY:1}, 500);
		
		_this.hideHelp();
		
		if(_this.gameView != "splash"){
			_this.gameData.saveGame();
		}
		 
	};
	
	_this.liftCreature = function (){
		var creature = _this.growingCreature;
		creature.body.gotoAndStop("release");
		var liftPt = new Point(_this.growingCreature.displayObj.x, creature.displayObj.y + (creature.body.nominalBounds.height*creature.displayObj.scaleY) + 500);
		
		creature.inTube = true;
		liftCreatureTube.liftUp(gameContainer, creature.displayObj, liftPt, 1000, createjs.Ease.circIn);
		
		_this.soundManager.playSound("creatureliftup", 0);
		
		if(creature == _this.targetCreature){
			_this.setTargetCreature(null);
		}
		if(creature == _this.growingCreature){
			_this.setGrowingCreature(null);
		}
		
	};
	
	
	// _func is a function with no arguments in the scope of _this.
	_this.zoomMapToPoint = function (_scaleX, _scaleY, _x, _y, _time, _func){
		var zoomMargin = 30;		
		
		var idealX = -_x*_scaleX + canvas.width/2;
		var idealY = -_y*_scaleY + canvas.height/2;
		var minX = -canvas.width*_scaleX + canvas.width + zoomMargin;
		var minY = -canvas.height*_scaleY + canvas.height + zoomMargin;
		var maxX = -zoomMargin;
		var maxY = -zoomMargin;
		
		var zoomX = Math.min(maxX, Math.max(minX, idealX));
		var zoomY = Math.min(maxY, Math.max(minY, idealY));
				
		createjs.Tween.get(mapContainer).to({scaleX:_scaleX, scaleY:_scaleX, x:zoomX, y:zoomY}, _time, createjs.Ease.circIn).call(_func);
		_this.soundManager.playSound("newpensopen", 0);
		
	};
	
	_this.resetMapPosition = function (){
		mapContainer.scaleX = mapContainer.scaleY = 1;
		mapContainer.x = mapContainer.y = 0;
	};
	
	var releaseComplete = function (displayObj){
		//_log("releaseComplete.  ");
		if(displayObj.parent !== null){
			displayObj.parent.removeChild(displayObj); 
		}
		_this.unHighlightCreature();
		_this.resetMapPosition();
		phases.updatePhase();
	
		if(!_this.achievedRelease && ss.oddsquad.UserLogin.hasPbsLogin()){
			_log("AWARDING achievement for first release! ");
			_this.achievedRelease = true;
			CreatureDutyAchievementManager.addAchievement(CreatureDutyAchievementManager.FIRST_RELEASE_ACHIEVE_ID);
		} else {
			_log(" Not awarding achievement because ... ALREADY GOT IT ? "+_this.achievedRelease+" or HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin());
		}
		
		sendGAEvent("CreatureDuty_GamePlay", "Creature_Released", "NUM_RELEASED", _this.numCreaturesReleased);
	};
	
	// If /toShow/, display the designated displayObject by adding it to the designated container.  Else remove.
	//-----------------------------------------------------------------------------------------------------------------
	this.displayIn = function (displayContainer,displayObj,toShow,toRaise){
		var toRaise = (toRaise == undefined) ? false : toRaise;
		if(toShow && (displayContainer.contains(displayObj) || !toRaise) ){
			displayContainer.addChild(displayObj);
		} else {
			displayContainer.removeChild(displayObj);
		}
	}
	// Let's get a little more specific.
	//------------------------------------------------------------
	this.displayInGame = function(displayObj,toShow,toRaise){
		_this.displayIn(gameContainer,displayObj,toShow,toRaise);
	}
	// Let's get a little more specific.
	//------------------------------------------------------------
	this.displayInMap = function(displayObj,toShow,toRaise){
		_this.displayIn(mapContainer,displayObj,toShow,toRaise);
	}

	this.cancelVoicePrompts = function(){
		_log("X x x x  CANCEL  x x x X");
		_this.prompts.showPrompt(false);
		_this.helpPrompt.reset();
		_this.voManager.cancelSounds();
	}
	this.onCreatureHoused = function (evt){
		var creature = evt.data.creature;
		creature.inPlacement = false;
		_log("%c|=+=|  creature " + creature.name + " housed. %c" + _this.nextToGrow.length + " left to grow, " + _this.nextToArrive.length + " left to arrive.    " + (creature.creatureType + "voice"),"font-weight:bold;","");
		_this.unHighlightCreature();
		_this.effects.unHighlightZones(true);
		_log("s!P!f! from onCreatureHoused");
		_this.prompts.showPrompt(false);
		if(_this.gamePhase != "splash"){
			_this.voManager.stopSound(true);
		}
		
		creature.happyBounce();
		_this.soundManager.stopSound(false);
		_this.soundManager.playSound(creature.creatureType + "voice", 0);
		
		if(!_this.achievedFirstCreature && ss.oddsquad.UserLogin.hasPbsLogin()){
			//alert("AWARDING achievement for first creature!");
			_log("AWARDING achievement for first creature!");
			_this.achievedFirstCreature = true;
			CreatureDutyAchievementManager.addAchievement(CreatureDutyAchievementManager.FIRST_CREATURE_ACHIEVE_ID);
		} else if (!_this.achievedGrowth && !creature.isNew && ss.oddsquad.UserLogin.hasPbsLogin()){
			//alert("AWARDING achievement for first  growth! ...isNew? "+creature.isNew);
			_log("AWARDING achievement for first growth! ...isNew? "+creature.isNew);
			_this.achievedGrowth = true;
			CreatureDutyAchievementManager.addAchievement(CreatureDutyAchievementManager.FIRST_GROW_ACHIEVE_ID);
		} else {
			//alert(" Not awarding achievement because ... achievedFirstCreature? "+_this.achievedFirstCreature+", achievedGrowth? "+_this.achievedGrowth+" HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin()+", creature.isNew? "+creature.isNew);
			_log(" Not awarding achievement because ... achievedFirstCreature? "+_this.achievedFirstCreature+", achievedGrowth? "+_this.achievedGrowth+" HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin()+", creature.isNew? "+creature.isNew);
		}
		
		if(creature == _this.growingCreature){
			_this.setGrowingCreature(null);
		} 
		if(creature == _this.targetCreature){
			_this.setTargetCreature(null);
		}
		
		_log("HOUSED " + creature + "; tC now " + _this.targetCreature + "; gC now " + _this.growingCreature);
		
		for(var i=0; i < _this.pens.length; i++ ){
			_this.pens[i].showHighlight(false);
		}
		var feedback_id = _this.audioData.randomSoundNameFrom("affirmationVOs");
		
		_this.cancelVoicePrompts();

		_this.voManager.playSoundAfter(feedback_id, 1, 100);
		_this.prompts.showPrompt(true, _this.audioData.captionForId(feedback_id));
		
		creature.isNew = false;
		_this.gameData.saveGame();
		_this.helpPrompt.setHint(null);
		phases.updatePhase();
	};


	
	this.onFoodCut = function (e){
		if(!_this.introducedCutters){
			_this.introducedCutters = true;
			_this.gameData.saveGame();
			if(_this.currentPen.correctPieces()){
				//_log("correct pieces!  playing praise.");
				var feedback_id = _this.audioData.randomSoundNameFrom("praiseVOs");
				_this.voManager.playSoundAfter(feedback_id, 1, 100);
				_this.prompts.showPrompt(true, _this.audioData.captionForId(feedback_id));
				
				if(!_this.achievedFractionation && ss.oddsquad.UserLogin.hasPbsLogin()){
					//alert("AWARDING achievement for fractionation!");
					_log("AWARDING achievement for fractionation!");
					_this.achievedFractionation = true;
					CreatureDutyAchievementManager.addAchievement(CreatureDutyAchievementManager.FIRST_CUT_ACHIEVE_ID);
				} else {
					//alert(" Not awarding achievement because ... ALREADY GOT IT ? "+_this.achievedFractionation+" or HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin());
					_log(" Not awarding achievement because ... ALREADY GOT IT ? "+_this.achievedFractionation+" or HAS LOGIN ? " + ss.oddsquad.UserLogin.hasPbsLogin());
				}
			} else {
				//_log("not the correct pieces, so not playing any praise.");
			}
		}
		sendGAEvent("CreatureDuty_GamePlay", "Used_Fractions");
	};

	this.onAudioLoaded = function (evt){

		_this.numAudioLoaded++;
		//alert(">>>   " + _this.numAudioLoaded + " audioElements loaded.")
		_log(">>>   " + _this.numAudioLoaded + " audioElements loaded.");
		if(_this.numAudioLoaded == audioManagers.length){
			_this.allAudioLoaded = true;
		}
		
		evt.data.audioManager.stopSound(true);

		if(_this.allAudioLoaded){
			stage.removeChild(_this.audioOverlay);
			_this.audioOverlay.x = 3000;
			gameContainer.removeEventListener("AUDIO_LOADED", _this.onAudioLoaded);	
			_log(">>>   " + "ALL audio LOADED");
		} else {
			_log(">>>   " + "one of "+audioManagers.length+" AUDIO LOADED, still waiting to remove overlay");
		}
	};
	
	this.doFreshStart = function (){
		_log(" ------------- FRESH START ---------------- ");
		_this.gameRound = 0;
		_this.small_0.open();
		_this.small_1.open();
		_this.small_2.open();

		_this.setCC(false);

		var firstCreature = _this.spawnCreature(false);
		_this.small_0.addCreature(firstCreature);
		
		var secondCreature = _this.spawnCreature(false);
		_this.small_1.addCreature(secondCreature);

		for(var i=0; i<_this.pens.length; i++){
			_this.pens[i].updatePreview();
			_this.pens[i].showHighlight(false);
		}	
	};

	// Set up the initial game state
	this.gameInit = function (freshStart){

		_log("GAME INIT, with freshStart? "+freshStart);	
		
		_this.loggedIn = ss.oddsquad.UserLogin.hasPbsLogin();
		_log("Logged In? "+_this.loggedIn);
		if(_this.loggedIn){
			var agentdata = ss.oddsquad.UserLogin.getAgentData();
			_log("got some agentdata");
		}


		CreatureDutyAchievementManager.init(gameContainer);
		


		_log(" ~B~ ");

		var debugShape = new createjs.Shape();
		_this.debugBtn = new createjs.Container();
		
		debugShape.graphics.beginFill("greenyellow").drawRoundRect(0, 0, 30, 30, 10);
		var debugHA = new createjs.Shape();
		debugHA.graphics.beginFill("green").drawRoundRect(0, 0, 30, 30, 10);
		_this.debugBtn.x = 980;
		_this.debugBtn.y = 720;
		_this.debugBtn.addChild(debugShape);
		_this.debugBtn.hitArea = debugHA;
			
		_this.debugBtn.addEventListener("pressup", _this.gameData.clearHistory);
		

		/*
		if(!_this.loggedIn || !_this.gameIsOnline || _this.gameRound < 0) {
			_this.doFreshStart();
		} else if (_this.loggedIn){
			//_log(" ------- running off of loaded data. --------- ");	
			_this.gameData.loadGame();
		}*/

		if(freshStart){
			_this.doFreshStart();
		} else {

		}
		
		gameContainer.addEventListener("FALLING", _this.creatureTumble);
	
		//gameContainer.addEventListener("DROP_CREATURE", function (e){_this.dropCreature(e, false);});
		gameContainer.addEventListener("CREATURE_HOUSED", _this.onCreatureHoused)		
		gameContainer.addEventListener("CLOSE_INTERCOM", _this.unlockDecoration);	
		gameContainer.addEventListener("DECORATION_PLACED", _this.onDecorationPlaced);	
		gameContainer.addEventListener("PRESS_HAND", _this.onPressHand);	
		gameContainer.addEventListener("CUTTING_FOOD", _this.onFoodCut);	
		gameContainer.addEventListener("SOUND_COMPLETE", _this.onSoundComplete);	
		gameContainer.addEventListener("REQUEST_RAY", function (e){_this.showRayAt(e.data.pen, e.data.x, e.data.y, e.data.spinTime);});	
		gameContainer.addEventListener("TUBE_DROP", function (e){e.data.contents.creatureObj.inTube = false; _this.highlightCreature(e.data.contents.creatureObj);});
		
		gameContainer.addEventListener("LIFTED_CREATURE", function (e){releaseComplete(e.data.contents);});
		gameContainer.addEventListener("AUDIO_LOADED", _this.onAudioLoaded);	
		gameContainer.addChild(_this.voManager, _this.soundManager);
		
		focusMonitor.addEventListener(ss.PageFocus.FOCUS_LOST,function(){_this.hasFocus = false;});
		focusMonitor.addEventListener(ss.PageFocus.FOCUS_GAIN,function(){_this.hasFocus = true;});

		playButton.name = "playButton";
		_log("ADDING PLAY BUTTON "+playButton+" TO THE STAGE "+stage+" !");
		

		playButton.on("click", pressPlay);
		stage.addChild(playButton);

		///*
			for(var i=0; i<audioManagers.length; i++ ){
				if( !_this.browserDetect.isMobile() && !audioManagers[i].initialized){
					audioManagers[i].sndInit();
				}
			}
		//*/


/*
		_this.debugUtil = new DebugUtil();
		_this.debugUtil.setDisplayContainer(gameContainer);
		gameContainer.addChild(_this.debugUtil);
		gameContainer.addEventListener("DEBUG",function(e){_log("??  debug??"); _this.debugUtil.displayDebug(e.data.msg, Math.random())});
*/
		_this.gameInitialized = true;
	}
	

	KeyValueStorage.addEventListener("CacheUpdateComplete", function (){ 
		_log(" * * * CacheUpdateComplete * * * , _this.storageUpToDate ? "+_this.storageUpToDate);
		if(!_this.storageUpToDate){ 
			_this.storageUpToDate = true; 
			_this.loggedIn = ss.oddsquad.UserLogin.hasPbsLogin();+
			_log(" ===> Logged In? "+_this.loggedIn);
			if(_this.loggedIn){
				var agentdata = ss.oddsquad.UserLogin.getAgentData();
				_log("got some agentdata, proceeding to build game");
				_this.gameData.buildLoadedGame();
				
			} else {
				_log("NOT logged in, proceeding to build game");
				_this.gameData.buildLoadedGame();
			}
		}
	});

	initScreens();
}