/**
 * Created by Matt Kucic on 4/14/2014.
 */
var _stage;
var _titlescreen;
var _loading;
var _gameQueue;
var _introAudio;
var _gameConfig;
var hidden, visibilityChange;
var _last_mousedown_time;
var _last_click_time;
var _last_mouseup_time;
var _ua = navigator.userAgent.toLowerCase();
var _isAndroid = _ua.indexOf("android") > -1;
var _isChrome = _ua.indexOf("chrome") > -1;
var _debugData = "";
var _safeSoundSingleton;

(function(window){
    function SafeSound() {
        this.safeSoundInstance = null;
        createjs.Sound.initializeDefaultPlugins();
    }
    SafeSound.prototype.play = function(id, protect, createOnly) {
        var soundInstance = createjs.Sound.createInstance(id);
        if (!createOnly) {
            soundInstance.play();
        }
        return soundInstance;
    };
    SafeSound.prototype.stop = function(soundInstance) {
        soundInstance.stop();
    };
    if (_isAndroid) {
        SafeSound.prototype.play = function(id, protect, createOnly) {
            var now = new Date().getTime();
            if (this.safeSoundInstance && (!this.safeSoundInstance.protect || (now - this.safeSoundInstance.startTime) > 6000)) {
                this.safeSoundInstance.stop();
                this.safeSoundInstance.removeAllEventListeners();
                this.safeSoundInstance = null;
            }
            if (!this.safeSoundInstance) {
                this.safeSoundInstance = createjs.Sound.createInstance(id);
                this.safeSoundInstance.protect = protect;
                this.safeSoundInstance.on("succeeded", this.safeSoundSucceeded); 
                this.safeSoundInstance.on("failed",  this.safeSoundCompleted);
                this.safeSoundInstance.on("complete", this.safeSoundCompleted);
                if (!createOnly) {
                    this.safeSoundInstance.play();
                }
                return this.safeSoundInstance;
            }
            return null;
        };
        SafeSound.prototype.stop = function(soundInstance) {
            if (!soundInstance) {
                soundInstance = this.safeSoundInstance;
            }
            soundInstance.stop();
            if ( soundInstance == this.safeSoundInstance) {
                this.safeSoundInstance.removeAllEventListeners();
                this.safeSoundInstance = null;
            }
        };

        SafeSound.prototype.safeSoundSucceeded = function(e) { 
            if (!e.target.playState) {
                _safeSoundSingleton.safeSoundInstance.removeAllEventListeners();
                _safeSoundSingleton.safeSoundInstance = null;
            }
            _safeSoundSingleton.safeSoundInstance.startTime = new Date().getTime();
        };

        SafeSound.prototype.safeSoundCompleted = function(e) { 
            _safeSoundSingleton.safeSoundInstance.removeAllEventListeners();
            _safeSoundSingleton.safeSoundInstance = null 
        };
    }
    window.SafeSound = SafeSound;
})(window)


//android mousetouch check
var _lastMouseDown;
var _minMouseWait = 500;
function isTouchAllowed(){
    var now = new Date().getTime();
    if(_lastMouseDown != undefined){
        if(now - _lastMouseDown < _minMouseWait){
            _lastMouseDown = now;
            return false;
        }
    }
    _lastMouseDown = now;
    return true;
}

function loadGame(){

    fpsDiv = document.getElementById("fps");
    fpsDiv.style.pixelWidth = 800+"px";
    fpsDiv.style.pixelHeight = 50+"px";
    infoDiv = document.getElementById("info");
    infoDiv.style.pixelWidth = 800+"px";
    infoDiv.style.pixelHeight = 50+"px";

    _stage = new createjs.Stage("gameCanvas");
    _stage.enableMouseOver(60);
    createjs.Touch.enable(_stage, true);

    createjs.Ticker.setFPS(30);
    createjs.Ticker.addEventListener("tick", update);

    _gameQueue = new createjs.LoadQueue();
    _gameQueue.on("complete", continueLoad);
    _gameQueue.loadFile({id:"trolley_load", src:"../../assets/img/sitewide/trolley_load.png"});
    _gameQueue.loadFile({id:"loadData", src:"../../assets/img/sitewide/trolley_load.json"});

    window.addEventListener('pageshow', pageShowHandler, false);
    window.addEventListener('pagehide', pageHideHandler, false);
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.mozHidden !== "undefined") {
        hidden = "mozHidden";
        visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }
    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" ||
        typeof hidden === "undefined") {
        //alert("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
        // Handle page visibility change
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
    }
}

function continueLoad(){
    _gameQueue.removeAllEventListeners();

    var loadSheet = new createjs.SpriteSheet(_gameQueue.getResult("loadData"));
    _loading = new createjs.Sprite(loadSheet);
    _loading.play();
    _loading.x -= 30;
    _stage.addChild(_loading);

    var busted_json = "assets/package.json".concat("?").concat(Math.floor(Math.random()*10000000).toString());
    $.getJSON(busted_json, function(data){
        _gameConfig = data;
        //_gameQueue = new createjs.LoadQueue();
        createjs.Sound.alternateExtensions = ["ogg"];
        _gameQueue.installPlugin(createjs.Sound);
        _gameQueue.loadManifest(_gameConfig);
        _gameQueue.on("complete", preloadComplete, this);
        _gameQueue.load();
    });
}

function pageShowHandler(evt){
    createjs.Ticker.addEventListener("tick", update);
    focus();
}
function pageHideHandler(evt){
    createjs.Ticker.removeEventListener("tick");
    createjs.Sound.stop();
    blur();
}

function handleVisibilityChange(evt) {
    if (document[hidden]) {
        blur();

    } else {
        createjs.Ticker.addEventListener("tick", update);
        focus();
    }
}

function preloadComplete(evt){
    _gameQueue.removeAllEventListeners("complete");
    _titlescreen = new createjs.Bitmap(_gameQueue.getResult("titlescreen").src);
    _playButton = new createjs.Bitmap(_gameQueue.getResult("playButton").src);
    _playButton.x = _gameConfig.playButton.x;
    _playButton.y = _gameConfig.playButton.y;
    _playButton.alpha = .01;
    _playButton.addEventListener("mouseover", createjs.proxy(overPlayButton, this));
    _playButton.on("mousedown", createjs.proxy(onTitleClick, this));

    gameInit(showTitle);
}

function overPlayButton(evt){
    _playButton.removeAllEventListeners();
    _playButton.addEventListener("mouseout", createjs.proxy(offPlayButton, this));
    _playButton.addEventListener("mousedown", createjs.proxy(onTitleClick, this));
    _playButton.alpha = 1;
}

function offPlayButton(evt){
    _playButton.removeAllEventListeners();
    _playButton.addEventListener("mouseover", createjs.proxy(overPlayButton, this));
    _playButton.alpha = .01;
}

function showTitle(){
    _loading.stop();
    _stage.removeChild(_loading);
    _loading = null;
    _stage.addChild(_titlescreen);
    _stage.addChild(_playButton);
    _introAudio = createjs.Sound.play("intro");
    _titlescreen.addEventListener("mousedown", createjs.proxy(onTitleClick, this));
}

function onTitleClick(evt){
    _titlescreen.removeAllEventListeners();
    _playButton.removeAllEventListeners();
    createjs.Sound.stop("intro");
    _introAudio = null;
    _stage.removeChild(_playButton);
    _stage.removeChild(_titlescreen);
    _titlescreen = null;
    _safeSoundSingleton = new SafeSound();
    startGame();
}

//special sound handling for android
var _safeSound = function(id, protect, createOnly) {
    return _safeSoundSingleton.play(id, protect, createOnly);
};
var _safeSoundStop = function(soundInstance) {
    _safeSoundSingleton.stop(soundInstance);
};
var _safeSoundStopAll = function(){
    createjs.Sound.stop();
};
if (_isAndroid) {
    _safeSoundStopAll = function(){
        createjs.Sound.stop();
        if (_safeSoundSingleton.safeSoundInstance) {
            _safeSoundSingleton.safeSoundInstance.removeAllEventListeners();
            _safeSoundSingleton.safeSoundInstance = null;
        }
    };
}