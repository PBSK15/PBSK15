var canvas, stage, creatureDutyGame, creatureDutyAssets, pctDescription, numImgsLoaded = 0, loginLoaded = false;
var numScriptsLoaded = 0;
var numScriptsToLoad = 14;




var traceLoadProgress = function (){
	numScriptsLoaded++;
};

function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}


function Point(x, y){
	this.x = typeof x !== 'undefined' ? x : 0;
	this.y = typeof y !== 'undefined' ? y : 0;
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx, y: ly};
}
function getSize(el) {
    // yay readability
    for (var lw=0, lh=0;
         el != null;
         lw += el.offsetWidth, lh += el.offsetHeight, el = el.offsetParent);
    return {w: lw, h: lh};
}

function init(){

	KeyValueStorage.setGameSettingsURL("../../php/gameSettings.php");
	
	createjs.MotionGuidePlugin.install();

	canvas = document.getElementById('creaturedutycanvas');

	creatureDutyAssets = new AssetManager(["cd_bgs1","cd_bgs2","cd_bgs3","cd_creatureparts1","cd_creatureparts2","cd_foodparts1","cd_foodparts2","cd_foodparts3","cd_miscbits1","cd_miscbits2"]);
	
	images = images||{};
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver( 10 );
	stage.name = "Game Stage";
	pctDescription = new createjs.Text("", "64px RefrigeratorDeluxe-Heavy", "white");
	pctDescription.textAlign = "center";
	pctDescription.textBaseline = "middle";
	pctDescription.x = 950;
	pctDescription.y = 733;
	stage.addChild(pctDescription);

	stage.update();

	var loader = new createjs.LoadQueue(false, "", true);
	loader.addEventListener("fileload", function(e){handleFileLoad(e);});
	loader.addEventListener("complete", function(e){handleComplete(e);});
	loader.loadManifest(lib.properties.manifest);
	
	resizeVideo();

}


function handleFileLoad(evt) {

	numImgsLoaded++;
	pctDescription.text = Math.round((numImgsLoaded/lib.properties.manifest.length)*100) + "%";
	canvas.width = canvas.width;
	stage.update();
	if(evt != null){
		//_log("LOADING: " + evt.item.id);
		if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
	} else {
		_log("LOADING: (null event)");
	}
	resizeVideo();
}

function buildGame(){
	
	_log("BUILD GAME!");
	_log(".... UL: "+ss.oddsquad.UserLogin);
	
	creatureDutyGame = new GameManager(stage);

	
	ss.oddsquad.UserLogin.addEventListener(ss.oddsquad.USER_LOGIN_LOADED, userLoginLoaded);
	ss.oddsquad.UserLogin.addEventListener(ss.oddsquad.USER_LOGIN_FAILED, userLoginLoaded);
	ss.oddsquad.UserLogin.loadUserLogin();
	resizeVideo();
}

function handleComplete() {
	_log("COMPLETE");
	
	pctDescription.text = "";
	stage.removeChild(pctDescription);
	canvas.width = canvas.width;
	
	createjs.Ticker.setFPS(12);
	createjs.Ticker.addEventListener("tick", stage);
	createjs.Touch.enable(stage);
	stage.mouseMoveOutside = true;
	stage.snapToPixelsEnabled = true;		
	
	creatureDutyAssets.processSpriteSheets();
	resizeVideo();
	//setTimeout(function (){buildGame();}, 100);
}

function sendGAEvent(category, evt, value, info) {
 try {
        if(isEmpty(value)) {
           GA_obj.trackEvent(category, evt);
        } else if (isEmpty(info)) {
           GA_obj.trackEvent(category, evt, value);
        } else {
           GA_obj.trackEvent(category, evt, value, info);
        }
    } catch (e) {
        _log("error logging event " + evt + ": " + e);
    }
}

function userLoginLoaded(){
	_log(" -- -- LOGIN LOADED? -- -- ");
	var isLoaded = ss.oddsquad.UserLogin.loginLoaded();
	_log(" -- --> "+isLoaded);
	_log(" WOULD BE CALLING GAMEINIT FROM ULL");

	if(!ss.oddsquad.UserLogin.hasPbsLogin()) {
		_log(" ------- no login, starting anew. --------- ");	
		creatureDutyGame.gameInit(true);
	} else {
		_log(" ------- running off of loaded data. --------- ");	
		creatureDutyGame.gameData.loadGame();
	}

}