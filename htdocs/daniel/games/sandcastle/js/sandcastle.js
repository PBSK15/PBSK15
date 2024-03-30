/**
 * Created by Matt Kucic on 5/14/2014.
 */
var _gameId = "sandcastle";
var _lastMouseDown;
var _minMouseWait = 500;



function gameInit(callback){
    this.loadedCallback = callback;
    this.minWaitForPiece = _gameConfig.minWait*1000;
    this.maxWaitForPiece = _gameConfig.maxWait*1000;
    this.timeWaiting = 0;
    this.pieceOut = false;

    //this.character = new DBCharacterCJS("dandan", "assets/character/", "Dan_Sandcastle", createjs.proxy(onCharacterReady, this));

    if(_ua.indexOf("android") > -1) {
        this.character = new DBCharacterCJS("dandan", "assets/character_simple/", "Dan_Sandcastle", createjs.proxy(onCharacterReady, this));
    }
    else{
        this.character = new DBCharacterCJS("dandan", "assets/character/", "Dan_Sandcastle", createjs.proxy(onCharacterReady, this));
    }

    this.holdingDanielsPiece = false;
    this.numberOfWaves = 0;
    this.dadAudioIndex = 0;
    this.storedTime = 0;
    this.danielPieceAudioIndex = 0;
    this.danielClickAudioIndex = 0;
    this.danielOfferAudioIndex = 0;
    this.danielOfferPieceIndex = 0;
    this.waveTimer = 4000;
    this.eraseWaveTimer = -2000;
    this.eraseWaves = 0;
    this.danielWaveResponse = true;
    this.totalPiecesPlaced = 0;
    _stage.pieceAttachedToMouse = false;
}

function onCharacterReady(){
    dragonBones.animation.WorldClock.clock.add(this.character.armature);
    playAnimation("idle", "idle", true);
    this.loadedCallback();
}



function onBGTouch(evt){
    if(isTouchAllowed()){
        if(isInside(evt.stageX, evt.stageY,_gameConfig.hitboxes.dad)){
            if(this.danielAudio != undefined ){
                if(this.danielAudio.playState == createjs.Sound.PLAY_FINISHED){
                    if(this.dadAudio != undefined ){
                        if(this.dadAudio.playState == createjs.Sound.PLAY_FINISHED){
                            this.dadAudio = _safeSound(_gameConfig.dadAudio[this.dadAudioIndex]);
                            this.dadAudioIndex ++;
                        }
                    }
                    else {
                        this.dadAudio = _safeSound(_gameConfig.dadAudio[this.dadAudioIndex]);
                        this.dadAudioIndex++;
                    }
                    if(this.dadAudioIndex >= _gameConfig.dadAudio.length){
                        this.dadAudioIndex = 0;
                    }
                }
            }
            else{
                if(this.dadAudio != undefined ){
                    if(this.dadAudio.playState == createjs.Sound.PLAY_FINISHED){
                        this.dadAudio = _safeSound(_gameConfig.dadAudio[this.dadAudioIndex]);
                        this.dadAudioIndex ++;
                    }
                }
                else {
                    this.dadAudio = _safeSound(_gameConfig.dadAudio[this.dadAudioIndex]);
                    this.dadAudioIndex++;
                }
                if(this.dadAudioIndex >= _gameConfig.dadAudio.length){
                    this.dadAudioIndex = 0;
                }
            }
        }
    }

}

function onTouchStart(evt) {
    _stage.addChild(new createjs.Text(evt));
    this.touchShape.graphics.f("#fff").dc(50, 50, 50);
}

function onDanPlaySucceed(evt){
    this.debugData = evt.target.playState.concat(" ").concat(evt.target.src);
}

function onDanPlayComplete(evt){
    this.debugData = evt.target.playState.concat(" ").concat(evt.target.src);
}

function startGame(){
    this.danielAudio = _safeSound("playButtonAudio", true, true);
    //this.danielAudio = createjs.Sound.play("playButtonAudio");
    this.danielAudio.on("succeeded", createjs.proxy(onDanPlaySucceed));
    this.danielAudio.on("complete", createjs.proxy(onDanPlayComplete));
    this.danielAudio.play();
    playAnimation("intro", "idle", true);

    this.ready = true;
    var bg = new createjs.Bitmap(_gameQueue.getResult("bg").src);
    _stage.addChild(bg);
    bg.on("mousedown", createjs.proxy(onBGTouch, this));
    bg.on("touchstart", createjs.proxy(onTouchStart, this));

    this.moat = new DTMoat();
    _stage.addChild(this.moat);

    this.waves = {};

    this.danielLayer = new createjs.Container();
    _stage.addChild(this.danielLayer);
    this.character.x = 700;
    this.character.y = 220;
    this.danielLayer.addChild(this.character);
    var danHitData = _gameConfig.hitboxes.daniel;
    //this.danHitbox = new createjs.Bitmap(_gameQueue.getResult("danHitbox").src);
    //this.danHitbox = new createjs.Shape();
    //this.danHitbox.graphics.f("#ffffff").dr(0,0,danHitData.width,danHitData.height);
    //this.danHitbox.alpha = .01;
    //this.danHitbox.x = danHitData.x;
    //this.danHitbox.y = danHitData.y;
    //_stage.addChild(this.danHitbox);
    //this.danHitbox.on("mousedown", createjs.proxy(onCharacterTouch, this));
    this.character.on("mousedown", createjs.proxy(onCharacterTouch, this));

    this.pieces = new Array();
    this.piecesLayer = new createjs.Container();
    _stage.addChild(this.piecesLayer);
	
    this.bucketLayer = new createjs.Container();
    _stage.addChild(this.bucketLayer);

    for(var i=0;i<_gameConfig.castlePieces.length;i++){
        var pieceData = _gameConfig.castlePieces[i];
        switch(pieceData.type){
            case "bucket":
                var newBucket = new DTBucket(pieceData.link, createjs.proxy(placeBucket, this));
                newBucket.setDefaultPosition(pieceData.x, pieceData.y, true);
                this.bucketLayer.addChild(newBucket);
                break;
            case "accoutrement":
                var newAccoutrement = new DTAccoutrement(pieceData.link, createjs.proxy(placeAccoutrement, this));
                newAccoutrement.setDefaultPosition(pieceData.x, pieceData.y, true);
                this.bucketLayer.addChild(newAccoutrement);
                break;
            case "interactive":
                if(pieceData.link == "crab"){
                    this.crab = new DTCrab();
                    this.crab.setStartPoint(pieceData.x,pieceData.y);
                    this.crab.setEndPoint(pieceData.goalX,pieceData.goalY, true);
                    this.crab.setTime(pieceData.time);
                    this.crab.x = this.crab.startPoint.x;
                    this.crab.y = this.crab.startPoint.y;
                    this.bucketLayer.addChild(this.crab);
                }
        }
    }

    this.uiLayer = new createjs.Container();
    _stage.addChild(this.uiLayer);



    this.currentTouches = new Array();
    this.touchShape = new createjs.Shape();
    _stage.addChild(this.touchShape);

    this.waveButton = new createjs.Bitmap(_gameQueue.getResult("waveButton").src);
    this.waveButtonDown = new createjs.Bitmap(_gameQueue.getResult("waveButtonDown").src);
    this.waveButton.x = 10;
    this.waveButton.y = 10;
    this.waveButtonDown.x = 10;
    this.waveButtonDown.y = 10;
    this.waveButtonDown.alpha = .01;
    this.waveButtonDown.addEventListener("mousedown", createjs.proxy(sendEraseWave, this));
    this.waveButtonDown.addEventListener("mouseup", createjs.proxy(resetWaveButton, this));
    this.uiLayer.addChild(this.waveButton);
    this.uiLayer.addChild(this.waveButtonDown);
    //makeWave();

    //initial castle

    var newPiece = new DTSandcastlePiece("purple_sand");
    newPiece.x = 218;
    newPiece.y = 170;
    this.piecesLayer.addChild(newPiece);
    this.pieces.push(newPiece);

    newPiece = new DTSandcastlePiece("yellow_sand");
    newPiece.x = 120;
    newPiece.y = 80;
    this.piecesLayer.addChild(newPiece);
    this.pieces.push(newPiece);

    newPiece = new DTSandcastlePiece("yellow_sand");
    newPiece.x = 370;
    newPiece.y = 110;
    this.piecesLayer.addChild(newPiece);
    this.pieces.push(newPiece);

    newPiece = new DTSandcastlePiece("green_sand");
    newPiece.x = 400;
    newPiece.y = 330;
    this.piecesLayer.addChild(newPiece);
    this.pieces.push(newPiece);


}

function onCharacterTouch(evt){
    if(isTouchAllowed()){
        // this.waveButton.x += 10;
        if(this.pieceOut){
            //attachPiece();
        }
        else{
            if(canPlayAudio()){
                var data = _gameConfig.danielAudio.touched[this.danielClickAudioIndex];
                this.danielClickAudioIndex ++;
                if(this.danielClickAudioIndex>=_gameConfig.danielAudio.touched.length){
                    this.danielClickAudioIndex = 0;
                }
                this.danielAudio = _safeSound(data.audio, true);
                playAnimation(data.animation, "idle", true);
            }
        }
    }
}

function canPlayAudio(){
    //this.debugData = this.danielAudio.playState;
    if(this.danielAudio == undefined){
        return true;
    }
    else if(this.danielAudio.playState == createjs.Sound.PLAY_FINISHED){
        return true;
    }
    return false;
}

function placeBucket(id, posx, posy){
    if(ptInHitbox(posx,posy)){
        var newPiece = new DTSandcastlePiece(id+"_sand");
        newPiece.setPosition(posx,posy);
        newPiece.setDimensions(_gameConfig.dimensions[id+"_sand"])
        newPiece.offsetImage(.5,.8);
        this.piecesLayer.addChild(newPiece);
        this.pieces.push(newPiece);
        this.totalPiecesPlaced++;
        //this.sandPlaceSnd.play();
        _safeSound("item_place");
        if((this.totalPiecesPlaced)%8 == 0){
            if(canPlayAudio()){
                if(this.danielAudio != undefined){
                    //this.danielAudio.stop();
                    _safeSoundStop(this.danielAudio);
                }
                var data = _gameConfig.danielAudio.smalltalk[this.danielPieceAudioIndex];
                this.danielPieceAudioIndex ++;
                if(this.danielPieceAudioIndex >= _gameConfig.danielAudio.smalltalk.length){
                    this.danielPieceAudioIndex = 0;
                }
                this.danielAudio = _safeSound(data.audio, true);
                playAnimation(data.animation, "idle", true);
            }
        }
    }
    else{
        //this.itemReturnSnd.play();
        _safeSound("item_place");
    }
}

function placeDansPiece(id, posx, posy){
    this.bucketLayer.removeChild(this.dansAccoutrement);
    if(this.dansAccoutrement.distanceMoved > 20){
        if(ptInHitbox(posx,posy)) {
            placeAccoutrement(id, posx, posy);
            this.pieceOut = false;
        }
        else{
            this.pieceOut = true;
            this.timeWaiting = 0;
            offerPiece(id, false);
        }
    }
    else{
        this.pieceOut = true;
        this.timeWaiting = 0;
        offerPiece(id, false);
    }
    this.dansAccoutrement = null;
}

function setupPieceListeners(evt){
    var piece = evt.target;
    piece.on(DTSandcastlePiece.PLACED, createjs.proxy(pieceMoved, this));
    piece.setMovable(true);
}

function placeAccoutrement(id, posx, posy){
    if(ptInHitbox(posx,posy)) {
        var newPiece = new DTSandcastlePiece(id);
        newPiece.setDimensions(_gameConfig.dimensions[id]);
        createjs.Tween.get(newPiece).to({timerProxy:1}, 500).call(createjs.proxy(setupPieceListeners, this))
        newPiece.x = posx;
        newPiece.y = posy;
        this.holdingDanielsPiece = false;
        //this.itemPlaceSnd.play();
        _safeSound("sand_place_alt");
        this.piecesLayer.addChild(newPiece);
        this.pieces.push(newPiece);
        this.totalPiecesPlaced++;
        if(this.totalPiecesPlaced%8 == 0){
            if(canPlayAudio()){
                if(this.danielAudio != undefined){
                    //this.danielAudio.stop();
                    _safeSoundStop(this.danielAudio);
                }
                var data = _gameConfig.danielAudio.smalltalk[this.danielPieceAudioIndex];
                this.danielPieceAudioIndex ++;
                if(this.danielPieceAudioIndex >= _gameConfig.danielAudio.smalltalk.length){
                    this.danielPieceAudioIndex = 0;
                }
                this.danielAudio = _safeSound(data.audio, true);
                playAnimation(data.animation, "idle", true);
            }
        }
    }
    else{
        //this.itemReturnSnd.play();
        _safeSound("item_place");
    }
}

function playAnimation(animationID, nextId, loopNext){
    this.character.armature.removeAllEventListeners();
    this.character.armature.animation.gotoAndPlay(animationID);
    if(nextId != undefined){
        if(loopNext){
            this.character.armature.addEventListener(dragonBones.events.AnimationEvent.COMPLETE, createjs.proxy(loopAnimation, this, nextId));
        }
        else{
            this.character.armature.addEventListener(dragonBones.events.AnimationEvent.COMPLETE, createjs.proxy(playNextAnimation, this, nextId));
        }
    }
}

function loopAnimation(evt, animId){
    this.character.armature.removeAllEventListeners();
    this.character.armature.animation.gotoAndPlay(animId);
    this.character.armature.addEventListener(dragonBones.events.AnimationEvent.COMPLETE, createjs.proxy(loopAnimation, this, animId));

}

function playNextAnimation(evt, animId){
    this.character.armature.removeAllEventListeners();
    this.character.armature.animation.gotoAndPlay(animationID);
}

function gotoNext(evt, animID, loop){
    playAniamtion(animID, undefined, true)
}

function pieceMoved(evt){
    if(!ptInHitbox(evt.target.x,evt.target.y)){
        evt.target.x = evt.target.originalPosition.x;
        evt.target.y = evt.target.originalPosition.y;
        //this.itemReturnSnd.play();
        _safeSound("item_place");
    }
    else{
        //this.itemPlaceSnd.play();
        _safeSound("sand_place_alt");
    }
}

function ptInHitbox(px,py){
    for(var i = 0;i<_gameConfig.hitboxes.sandboxes.length;i++){
        if(isInside(px,py,_gameConfig.hitboxes.sandboxes[i])){
            return true;
        }
    }
    return false;
}

function checkForErase(xPos,yPos){
    for(var i = this.pieces.length-1;i>=0;i--){
        if(this.pieces[i].checkCollision(xPos, yPos)){
            this.pieces[i].erase();
            this.pieces[i] = null;
            this.pieces.splice(i,1);
            break;
        }
    }
}

function sendEraseWave(evt){
    if(isTouchAllowed()){
        this.waveButtonDown.alpha = 1;
        this.danielWaveResponse = false;
        makeWave(1);
    }
}

function resetWaveButton(evt){
    this.waveButtonDown.alpha = .01;
}

function makeWave(distance){
    if(this.numberOfWaves < 5){
        var newWave = new DTWave(distance);
        newWave.on(DTWave.ERASE_ALL, createjs.proxy(eraseAll, this));
        this.waves[newWave.id] = newWave;
        newWave.on(DTWave.COMPLETE, createjs.proxy(onWaveComplete,this));
        this.piecesLayer.addChildAt(newWave, 0);
        newWave.animate();
        this.numberOfWaves ++;
    }
}

function eraseAll(evt){
    evt.target.removeAllEventListeners(DTWave.ERASE_ALL);
    if(this.danielWaveResponse){
        if(this.danielAudio != undefined){
            _safeSoundStop(this.danielAudio);
        }
        var data = _gameConfig.danielAudio.water[0];
        this.danielAudio = _safeSound(data.audio, true);
        playAnimation(data.animation, "idle", true);
        if(this.dansPiece != undefined){
            this.dansPiece.removeAllEventListeners();
            this.dansPiece = null;
            this.pieceOut = false;
            this.timeWaiting = 0;
        }
    }
    for(var i = this.pieces.length-1; i>=0;i--){
        this.pieces[i].active = false;
        this.pieces[i].erase();
        this.pieces.splice(i,1);
    }
    this.moat.fillMoat();
    this.danielWaveResponse = false;
}

function offerPiece(id, staySilent){

    var offerData = _gameConfig.danielAudio.offers[this.danielOfferAudioIndex];
    this.danielOfferAudioIndex ++;
    if(this.danielOfferAudioIndex >= _gameConfig.danielAudio.offers.length){
        this.danielOfferAudioIndex = 0;
    }
    if(id == undefined){
        id = _gameConfig.danielPieces[this.danielOfferPieceIndex].link;
        this.danielOfferPieceIndex ++;
        if(this.danielOfferPieceIndex >= _gameConfig.danielPieces.length){
            this.danielOfferPieceIndex = 0;
        }
    }

    this.dansPiece = new createjs.Container();
    var dansPieceBMP = new createjs.Bitmap(_gameQueue.getResult(id).src);
    this.dansPiece.addChild(dansPieceBMP);
    var grabber = new createjs.Shape();
    grabber.alpha = .01;
    grabber.graphics.beginFill("#fff").drawRect(0,0,dansPieceBMP.image.width, dansPieceBMP.image.height);
    this.dansPiece.addChild(grabber);
    this.dansPiece.id = id;
    this.dansPiece.on("mousedown", createjs.proxy(onDanielPieceDown, this));
    this.character.armature.getSlot("decoration").setDisplayList(new Array(this.dansPiece));

    if(staySilent == undefined){
        this.danielAudio = _safeSound(offerData.audio);
        playAnimation(offerData.animation, "present_deco_idle", true);
    }
    else{
        playAnimation("present_deco_idle");
    }
    this.pieceOut = true;
}

function onDanielPieceDown(evt){
    if(isTouchAllowed()){
        this.dansPiece.removeAllEventListeners("mousedown");
        this.character.armature.getSlot("decoration").setDisplayList(new Array());
        this.dansAccoutrement = new DTAccoutrement(this.dansPiece.id, createjs.proxy(placeDansPiece, this));
        this.dansAccoutrement.playPickup();
        this.dansAccoutrement.originalPos = {"x":evt.stageX,"y":evt.stageY};
        this.bucketLayer.addChild(this.dansAccoutrement);
        this.dansAccoutrement.forceMovement(evt);
        this.dansPiece = undefined;
        playAnimation("idle", "idle", true);

        this.holdingDanielsPiece = true;
    }
}

function onWaveComplete(evt){
    evt.target.removeAllEventListeners(DTWave.COMPLETE);
    this.piecesLayer.removeChild(evt.target);
    this.waves[evt.target.id].destroy();
    this.waves[evt.target.id] = null;
    delete this.waves[evt.target.id];
    this.numberOfWaves --;
}

function blur(){
    _safeSoundStopAll();
}

function focus(){
    if(this.dansPiece == undefined && this.ready){
        playAnimation("idle", "idle", true);
    }
}

var lastLoop = new Date;

function update(){
    _stage.canvas.width = _stage.canvas.width;
    var thisLoop = new Date;
    var timePassed = thisLoop-lastLoop;
    var fps = Math.round(1000 / (thisLoop - lastLoop));
    while(fpsDiv.childNodes.length >= 1) {
        fpsDiv.removeChild(fpsDiv.firstChild);
    }
    fpsDiv.appendChild(fpsDiv.ownerDocument.createTextNode(fps.toString()));
    lastLoop = thisLoop;
    if(fps < 10){
        this.storedTime += 1/fps;
    }
    else{
        dragonBones.animation.WorldClock.clock.advanceTime((1/fps)+this.storedTime);
        this.storedTime = 0;
    }
    _stage.update();

    if(!this.pieceOut && this.ready ){
        this.timeWaiting += timePassed;
    }
    if(this.timeWaiting > this.minWaitForPiece){
        if(canPlayAudio()){
            this.pieceOut = true;
            this.timeWaiting = 0;
            offerPiece();
        }
    }

    if(this.numberOfWaves > 0){
        for(var wave in this.waves){
            this.waves[wave].update();
            if(this.pieces.length > 0){
                for(var i = this.pieces.length-1; i>=0;i--){
                    if(this.waves[wave] != null && this.pieces[i].active){
                        if(ptInCircle({"x":this.pieces[i].x,"y":this.pieces[i].y},this.waves[wave].collisionDef)){
                            this.pieces[i].active = false;
                            this.pieces[i].erase();
                            this.pieces.splice(i,1);
                        }
                    }
                }
            }
        }
    }
    if(this.ready){

        this.waveTimer += timePassed;
        this.eraseWaveTimer += timePassed;
        if(this.numberOfWaves <= 1) {
            if(this.waveTimer >= _gameConfig.waveTime){
                makeWave(0.5);
                this.waveTimer = 0;
            }
            if(this.eraseWaveTimer >= _gameConfig.eraseWaveTime){
                this.eraseWaves ++;
                if(this.eraseWaves % 2 != 0 && this.eraseWaves <= 4){
                    this.danielWaveResponse = true;
                    makeWave(1);
                }
                /*
                else{
                    //makeWave(0.8 + ((Math.random() * 0.2) - .1));
                }
                */
                this.eraseWaveTimer = 0;
            }
        }

        this.moat.update();
    }
}