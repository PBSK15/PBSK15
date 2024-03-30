/**
 * Created by Matt Kucic on 5/21/2014.
 */
(function(window){
    function DTAccoutrement(id, placeHandler){
        this.initialize();
        this.id = id;
        this.placeHandler = placeHandler;
        this.defaultPosition = new createjs.Point(0, 0);
        this.piece = new createjs.Bitmap(_gameQueue.getResult(id).src);
        //this.piece.x = this.piece.image.width * -.5;
        //this.piece.y = this.piece.image.height * -.5;
        this.on("mousedown", createjs.proxy(this.onPieceDown, this));

        this.grabHelper = new createjs.Shape();
        this.grabHelper.graphics.beginFill("#fff").drawRect(this.piece.x, this.piece.y, this.piece.image.width, this.piece.image.height);
        this.grabHelper.alpha = .01;
        this.clickAttach = false;
        //this.touchSound = _safeSound("sand_place", false, true);
        this.addChild(this.grabHelper);
        this.addChild(this.piece);
    }

    DTAccoutrement.prototype = new createjs.Container();
    DTAccoutrement.prototype.Container_initialize = DTAccoutrement.prototype.initialize;
    DTAccoutrement.prototype.initialize = function(){
        this.Container_initialize();
    }

    DTAccoutrement.prototype.playPickup = function(){
        //this.touchSound.play();
        _safeSound("sand_place");
    }

    DTAccoutrement.prototype.setDefaultPosition = function(xPos, yPos, placeNow){
        this.defaultPosition = new createjs.Point(xPos, yPos);
        if(placeNow){
            this.x = this.defaultPosition.x;
            this.y = this.defaultPosition.y;
        }
    }

    DTAccoutrement.prototype.onPieceDown = function(evt){
        if(isTouchAllowed()){
            this.eventHolder = evt;
            this.touchedAt = new Date();
            //this.touchSound.play();
            _safeSound("sand_place");
            this.clickAttach = false;
            this.x = evt.stageX - (this.piece.image.width * .5);
            this.y = evt.stageY - (this.piece.image.height);
            this.originalPos = {"x":this.x,"y":this.y};
            evt.on("mousemove", createjs.proxy(this.onPieceMove, this));
            evt.on("mouseup", createjs.proxy(this.onPieceUp, this));
        }
    }

    DTAccoutrement.prototype.onPieceMove = function(evt){
        if(!this.clickAttach){
            this.x = evt.stageX - (this.piece.image.width * .5);
            this.y = evt.stageY - (this.piece.image.height);
        }
        else{
            this.x = evt.stageX - (this.piece.image.width * .5);
            this.y = evt.stageY - (this.piece.image.height * .5);
        }
    }

    DTAccoutrement.prototype.onPieceUp = function(evt){
        var currentTime = new Date();
        this.eventHolder.removeAllEventListeners("mousemove");
        this.eventHolder.removeAllEventListeners("mouseup");
        _stage.removeAllEventListeners("stagemousemove");
        _stage.removeAllEventListeners("stagemousedown");
        if(currentTime.getTime()-this.touchedAt.getTime() <= _gameConfig.waitTime){

            _stage.on("stagemousemove", createjs.proxy(this.onPieceMove, this));
            _stage.on("stagemousedown", createjs.proxy(this.onPieceUp, this));
            this.x = evt.stageX - (this.piece.image.width * .5);
            this.y = evt.stageY - (this.piece.image.height * .5);
            _stage.pieceAttachedToMouse = true;
            this.clickAttach = true;

        }
        else{
            this.eventHolder = null;
            if(this.placeHandler != null){
                _stage.pieceAttachedToMouse = false;
                this.distanceMoved = ptToPtDistance(this.originalPos.x, this.originalPos.y, evt.stageX, evt.stageY);
                this.placeHandler(this.id, this.x, this.y);
                this.x = this.defaultPosition.x;
                this.y = this.defaultPosition.y;
            }
        }
    }

    DTAccoutrement.prototype.forceMovement = function(evt){
        this.eventHolder = evt;
        this.x = evt.stageX;
        this.y = evt.stageY;
        this.touchedAt = new Date();
        evt.on("mousemove", createjs.proxy(this.onPieceMove, this));
        evt.on("mouseup", createjs.proxy(this.onPieceUp, this));
    }

    window.DTAccoutrement = DTAccoutrement;
})(window)