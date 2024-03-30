/**
 * Created by Matt Kucic on 4/4/2014.
 */
var _gameId = "baby-margaret";
var _dan;
var _mom;
var _marge;
var _ready = false;
var _danTap = 0;
var _momTap = 0;
var _bubblePopped = 0;

function gameInit(callback){    
    this.loadedCallback = callback;
    this.loadedCallback();
}

function startGame(){
    //console.log("Start bath game");

    _stage.addChild(new createjs.Bitmap(_gameQueue.getResult("bg").src));
    _tub = new Tub(0, 0);
    _stage.addChild(_tub);


    //*
    var momData = _gameQueue.getResult("mom");
    for (var i = 0; i < momData.images.length; i++) {
        momData.images[i] = "assets/characters/mom/" + momData.images[i];
    };
    var momSheet = new createjs.SpriteSheet(momData);
    var momSprite = new createjs.Sprite(momSheet, "idle");
    //_mom = momSprite;
    _mom = new DTMom(momSprite);
    _mom.x = 309;
    _mom.y = 0;
    
    _stage.addChild(_mom);
    _mom.on("mousedown", momReact);
    _mom.on("animationEnd", momAnimationEnd);
    //*/


    var danData = _gameQueue.getResult("dan");
    for (var i = 0; i < danData.images.length; i++) {
        danData.images[i] = "assets/characters/daniel_zoe/" + danData.images[i];
    };
    var danSheet = new createjs.SpriteSheet(danData);
    var danSprite = new createjs.Sprite(danSheet, "idle");
    //_dan = momSprite;
    _dan = new DTDan(danSprite);
    _dan.x = -3
    _dan.y = 110
    _dan.on("animationEnd", danAnimationEnd);
    _dan.on("mousedown", danTapHandler);

    _puffer = new DTPufferToy(475, 320);
    _puffer.on("mousedown", pufferClick);
    _stage.addChild(_puffer);


    //*
    var margData = _gameQueue.getResult("margaret");
    for (var i = 0; i < margData.images.length; i++) {
        margData.images[i] = "assets/characters/margaret/" + margData.images[i];
    };
    var margSheet = new createjs.SpriteSheet(margData);
    var margSprite = new createjs.Sprite(margSheet, "idle");
    //_marge = margSprite;
    _marge = new DTMargaret(margSprite);
    _marge.x = 564;
    _marge.y = 185;
    
    _stage.addChild(_marge);
    _marge.on("mousedown", margeReact);
    _marge.on("animationEnd", margeAnimationEnd);


    //*/

    var splashData = _gameQueue.getResult("splash");
    for (var i = 0; i < splashData.images.length; i++) {
        splashData.images[i] = "assets/characters/margaret_splash/" + splashData.images[i];
    };
    var splashSheet = new createjs.SpriteSheet(splashData);
    var splasSprite = new createjs.Sprite(splashSheet, "splash_blue");
    _splash = new DTSplash(splasSprite);
    _splash.x = 586;
    _splash.y = 334;
    
    //squirt_fish
    var squirtData = _gameQueue.getResult("squirt");
    for (var i = 0; i < squirtData.images.length; i++) {
        squirtData.images[i] = "assets/characters/water_squirt/" + squirtData.images[i];
    };
    var squirtSheet = new createjs.SpriteSheet(squirtData);
    var squirtSprite = new createjs.Sprite(squirtSheet, "squirt_fish");
    _squirt = new DTSquirt(squirtSprite);
    _squirt.x = 435;
    _squirt.y = 335;

    _boat = new DTBoatToy(350, 420, 340, 420, 640, 370);
    _boat.on("mousedown", boatReact);
    _boat.on("at-marge", margeGiggle);
    //_boat.on("leave-marge", margePush);
    _boat.on("leave-dan", danPush);
    _stage.addChild(_boat);

    _octopus = new DTOctopusToy(860, 380,  _gameQueue.getResult("octopus"));
    _octopus.on("mousedown", octopusReact);
    _octopus.on("at-marge", margeOctopus);
    _stage.addChild(_octopus);

//*
    _bucket = new Bucket(810, 120, 740, 400, 462);
    _bucket.on("mousedown", bucketDown);
    _stage.addChild(_bucket);
//*/

//*
    _hose = new Hose(650, 0, 462);
    _hose.on("mousedown", hoseDown);
    _stage.addChild(_hose);
//*/

    _greenbubbles = new createjs.Bitmap(_gameQueue.getResult("greenbubbles").src);
    _greenbubbles.x = 905;
    _greenbubbles.y = 74;
    _greenbubbles.scaleX = 0.25;
    _greenbubbles.scaleY = 0.25;
    _greenbubbles.on("mousedown", greenBubbleClick);
    _stage.addChild(_greenbubbles);

    _pinkbubbles = new createjs.Bitmap(_gameQueue.getResult("pinkbubbles").src);
    _pinkbubbles.x = 854;
    _pinkbubbles.y = -5;
    _pinkbubbles.scaleX = 0.25;
    _pinkbubbles.scaleY = 0.25;
    _pinkbubbles.on("mousedown", pinkBubbleClick);
    _stage.addChild(_pinkbubbles);

    _suds = new ShampooSuds(698, 215);

    _stage.addChild(_dan);
    _stage.addChild(_boat);
    _ready=true;

    _dan.dialog("audio_BT_Dan_2B");
}

var lastLoop = new Date;

function update(){
    var thisLoop = new Date;
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    while(fpsDiv.childNodes.length >= 1) {
        fpsDiv.removeChild(fpsDiv.firstChild);
    }
    fpsDiv.appendChild(fpsDiv.ownerDocument.createTextNode(fps));
    lastLoop = thisLoop;

    if (_ready) {
        _mom.update();
        _marge.update();
        _dan.update();
        _boat.update();
        _puffer.update();
        _octopus.update();
        _tub.update();
        ///*
        if (_bucket.fill > 0) {
             _stage.addChild(new Water(_tub.waterColor, _bucket.x + 20, _bucket.y + 99, 0, _suds));
             _stage.addChild(new Water(_tub.waterColor, _bucket.x + 34, _bucket.y + 103, 0));
             _stage.addChild(new Water(_tub.waterColor, _bucket.x + 52, _bucket.y + 103, 0));
             _stage.addChild(new Water(_tub.waterColor, _bucket.x + 68, _bucket.y + 101, 0, _suds));
        }
        if (_hose.waterOn) {
             for (var i=0; i<2; i++) {
                _stage.addChild(new Water("blue", _hose.x + 20 + 64 * Math.random(), _hose.y + 86, -2, _suds, _tub));
                _stage.addChild(new Water("blue", _hose.x + 20 + 64 * Math.random(), _hose.y + 86, -3));
                _stage.addChild(new Water("blue", _hose.x + 20 + 64 * Math.random(), _hose.y + 86, -2.5));
             }
        }
        //*/
    }

    _stage.update();
}

function margeReact(evt){
    if (!_suds || _suds.parent != _stage) {
        if (_boat.state == "marge-idle") {
            _marge.setState("push_boat");
        } else if (_marge.sprite.currentAnimation == "show_foot" || _marge.sprite.currentAnimation == "show foot cycle") {
            _marge.setState("react_foot");
        } else {
            var rnd = Math.random();
            if (rnd < 0.5) {
                _marge.setState("show_foot");
            } else {
                _marge.setState("splash");
                _stage.addChild(_splash);
                _splash.splash(_tub.waterColor);
                createjs.Sound.play("audio_BM_splash");
            }
        }
    }
}

function margeGiggle(evt){
    _marge.setState("giggle1");
}

function margeOctopus(evt){
    _marge.setState("giggle1");
    _mom.dialog("audio_BT_Mom_NS3", "dan")
}

function momReact(evt){
    if (100 < evt.localX && evt.localX < 180 && 250 < evt.localY && evt.localY < 350) {
        _mom.setState("shampoo");
    } else {
        var states = ["audio_BT_Mom_NS5"];
        if (_suds && _suds.parent == _stage) {
            states.push("audio_BT_Mom_NS7");
        } else if (_tub.waterColor == "blue") {
            states.push("audio_BT_Mom_NS11");   
        } else {
            states.push("audio_BT_Mom_NS10");   
        }
        states.push("audio_BT_Mom_NS9");
        if (_mom.dialog(states[_momTap], "dan", true)) {
            _momTap = (_momTap + 1) % 3;
        }
    }
}

function boatReact(evt){
    if (_boat.state == "idle") {
        _dan.setState("boat_windup");
    } else if (_boat.state == "marge-idle") {
        _marge.setState("push_boat");
    }
}

function octopusReact(evt){
    _octopus.startAction();
    //_dan.dialog("audio_BT_Dan_23", "us");
}

function danPush(evt){
    _dan.setState("push_boat");
}

function greenBubbleClick(evt){
    _pinkbubbles.visible = true;
    _greenbubbles.visible = false;
    _dan.setState("add_greenbubbles");
     createjs.Sound.play("audio_bubble_pour", {delay:500});
}

function pinkBubbleClick(evt){
    _greenbubbles.visible = true;
    _pinkbubbles.visible = false;
    _dan.setState("add_pinkbubbles");
     createjs.Sound.play("audio_bubble_pour", {delay:500});
}

function bucketDown(evt){
    //console.log("bucketDown");
    evt.bucket = _bucket;
    _bucketMotionHandler = evt.on("mousemove", _bucket.update);
    _bucketUpHandler = evt.on("mouseup", bucketUp);
}

function bucketUp(evt){
    //console.log("bucketUp");
    evt.off("mousemove", _bucketMotionHandler);
    evt.off("mouseup", _bucketUpHandler);
    _bucket.resetPosition();
}

function hoseDown(evt){
    evt.hose = _hose;
    _hose.turnOn();
    _hoseMotionHandler = evt.on("mousemove", _hose.update);
    _hoseUpHandler = evt.on("mouseup", hoseUp);
    if (_marge.sprite.currentAnimation == "shampoo" || _marge.sprite.currentAnimation == "shampoo_cycle") {
        _dan.dialog("audio_BT_Dan_17", "marge");
    }
    _marge.setState("rinse");
}

function hoseUp(evt){
    evt.off("mousemove", _hoseMotionHandler);
    evt.off("mouseup", _hoseUpHandler);
    _hose.resetPosition();
    if (!_suds.parent) {
        _marge.setState("idle");
        if (!_dan.dialog("audio_BT_Dan_19", "marge")) {
            _mom.dialog("audio_BT_Mom_NS6", "marge");
        }
    } else {
        _marge.setState("shampoo_cycle");
    }
}

function pufferClick(evt){
    _puffer.visible = false;
    _dan.setState("squirt_fish");
    _marge.setState("react_fish");
    _stage.addChild(_squirt);
    _squirt.squirt();
    createjs.Sound.play("audio_squirty_fish", {delay:500});
}

function danAnimationEnd(evt){
    _puffer.visible = true;
    _pinkbubbles.visible = true;
    _greenbubbles.visible = true;
    switch(evt.name) {
        case "push_boat" :
            if (!_dan.dialog("audio_BT_Dan_14A", "marge")) {
                _mom.dialog("audio_BT_Mom_NS3", "marge")
            }
            break;
        case "boat_windup" :
            _boat.startAction();
            break;
        case "add_greenbubbles" :
            _tub.setColor("green");
            for (var i = 0 ; i < 20; i++) {
                 _stage.addChild(new Bubble("green", Math.random() * 500 + 340, 450 + 250 * Math.random()));
            }
            _dan.dialog("audio_BT_Dan_21", "us");
            break;
        case "add_pinkbubbles" :
            _tub.setColor("pink");
            for (var i = 0 ; i < 20; i++) {
                 _stage.addChild(new Bubble("pink", Math.random() * 500 + 340, 450 + 250 * Math.random()));
            }
            _dan.dialog("audio_BT_Dan_20", "us");
            break;
        case "squirt_fish" :
            if (!_dan.dialog("audio_BT_Dan_22", "us")) {
                _mom.dialog("audio_BT_Mom_NS3", "dan")
            }
            break;
    }
}

function margeAnimationEnd(evt){
    switch(evt.name) {
        case "shampoo" :
            _stage.addChild(_suds);
            _stage.addChild(_hose);
            break;
        case "push_boat" :
            _boat.startAction();
            _dan.dialog("audio_BT_Dan_14B", "us");
            break;
        case "splash" :
            _mom.dialog("audio_BT_Mom_6", "marge")
            break;
    }
}

function momAnimationEnd(evt){
    switch(evt.name) {
        case "shampoo" :
            createjs.Sound.play("audio_Shampoo");
            _stage.addChild(_hose);
            _marge.setState("shampoo");
            break;
        case "shampoo_end" :
            _dan.dialog("audio_BT_Dan_5", "us");
            break;
    }
}

function danTapHandler(evt){
    var played = false;
    switch(_danTap) {
        case 0 :
            played = _dan.dialog("audio_BT_Dan_8", "us", true);
            break;
        case 1 :
            played = _dan.dialog("audio_BT_Dan_24", "us", true);
            break;
        case 2 :
            played = _dan.dialog("audio_BT_Dan_7", "us", true);
            break;
        case 3 :
            played = _dan.dialog("audio_BT_Dan_9", "us", true);
            break;
        case 4 :
            played = _dan.dialog("audio_BT_Dan_18", "us", true);
            break;
    }
    if (played) {
        _danTap = (_danTap + 1) % 5;
    }
}

function blur() {

}

function focus() {

}


