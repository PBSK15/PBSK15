/**
 * Created by Matt Kucic on 5/15/2014.
 */
(function(window){
    function DTSandcastlePiece(fileID, xPos, yPos){
        this.initialize();
        this.fileID = fileID;
        this.id = fileID+Math.floor(new Date().getTime());
        this.image = new createjs.Bitmap(_gameQueue.getResult(fileID).src);
        this.x = xPos;
        this.y = yPos;
        this.active = true;
        this.clickAttach = false;
        //this.touchSound = _safeSound("sand_place", false, true);
        this.timerProxy = 0;

        this.addChild(this.grabHelper);
        this.addChild(this.image);
    }

    DTSandcastlePiece.prototype = new createjs.Container();

    DTSandcastlePiece.PLACED = "piecePlaced";

    DTSandcastlePiece.prototype.Container_initialize = DTSandcastlePiece.prototype.initialize;
    DTSandcastlePiece.prototype.initialize = function(){
        this.Container_initialize();
    };

    DTSandcastlePiece.prototype.reposition = function (xPos,yPos){
        this.image.x = xPos;
        this.image.y = yPos;
    };

    DTSandcastlePiece.prototype.checkCollision = function(xPos,yPos){
        var rect = new createjs.Rectangle(this.x+this.image.x,this.y+this.image.y,this.artWidth, this.artHeight);
        if(isInside(xPos,yPos,rect)){
            return true;
        }
        return false;
    };

    DTSandcastlePiece.prototype.erase = function(){
        if(this.storedHandler != undefined){
            this.storedHandler.removeAllEventListeners("mousemove");
            this.storedHandler.removeAllEventListeners("mouseup");
        }
        //_stage.removeAllEventListeners("stagemousemove");
        //_stage.removeAllEventListeners("stagemousedown");
        createjs.Tween.get(this).to({alpha:0}, 500).call(createjs.proxy(eraseComplete,this));
        function eraseComplete(){
            this.removeChild(this.image);
            this.image = null;
            this.id = null;
        }
    };

    DTSandcastlePiece.prototype.setPosition = function(inX, inY){
        this.x = inX;
        this.y = inY;
    };

    DTSandcastlePiece.prototype.setDimensions = function(dimensions){
        this.artWidth = dimensions.width;
        this.artHeight = dimensions.height;
        this.grabHelper = new createjs.Shape();
        this.grabHelper.graphics.beginFill("#fff").drawRect(this.image.x, this.image.y, this.artWidth, this.artHeight);
        this.grabHelper.alpha = .01;
        this.addChild(this.grabHelper);
    };

    DTSandcastlePiece.prototype.offsetImage = function(xOffset, yOffset){
        this.x -= this.artWidth*xOffset;
        this.y -= this.artHeight*yOffset;
    };

    DTSandcastlePiece.prototype.setMovable = function(flag){
        this.on("mousedown", createjs.proxy(this.onClick, this));

    };

    DTSandcastlePiece.prototype.onClick = function(evt){
        if(isTouchAllowed()){
            this.storedHandler = evt;
            this.originalPosition = {"x":this.x, "y":this.y};
            this.touchedAt = new Date();
            //this.touchSound.play();
            _safeSound("sand_place");
            this.clickAttach = false;
            this.parent.addChild(this);
            evt.on("mousemove", createjs.proxy(this.movePiece, this));
            evt.on("mouseup", createjs.proxy(this.releasePiece, this));
        }
    };

    DTSandcastlePiece.prototype.movePiece = function(evt){
        if(!this.clickAttach){
            this.x = evt.stageX - (this.artWidth * .5);
            this.y = evt.stageY - (this.artHeight);
        }
        else{
            this.x = evt.stageX - (this.artWidth * .5);
            this.y = evt.stageY - (this.artHeight * .5);
        }
    };

    DTSandcastlePiece.prototype.releasePiece = function(evt){
        var currentTime = new Date();
        this.storedHandler.removeAllEventListeners();
        _stage.removeAllEventListeners();
        if(currentTime.getTime()-this.touchedAt.getTime() <= _gameConfig.waitTime){
            if(this.clickAttach){
                _stage.pieceAttachedToMouse = false;
                this.clickAttach = false;
                this.eventHolder = null;
                this.dispatchEvent(new createjs.Event(DTSandcastlePiece.PLACED));
            }
            else{
                if(!_stage.pieceAttachedToMouse){
                    _stage.on("stagemousemove", createjs.proxy(this.movePiece, this));
                    _stage.on("stagemousedown", createjs.proxy(this.dropPiece, this));
                    this.clickAttach = true;
                    _stage.pieceAttachedToMouse = true;
                }
            }
        }
        else{
            _stage.pieceAttachedToMouse = false;
            this.dropPiece();
        }
    };

    DTSandcastlePiece.prototype.dropPiece = function(evt){
        this.removeAllEventListeners("mousedown");
        _stage.removeAllEventListeners();
        if(this.clickAttach){
            this.clickAttach = false;
            this.eventHolder = null;
            this.timerProxy = 0;
        }
        this.dispatchEvent(new createjs.Event(DTSandcastlePiece.PLACED));
        createjs.Tween.get(this).to({timerProxy:1}, 500).call(createjs.proxy(this.setMovable, this))
    };

    window.DTSandcastlePiece = DTSandcastlePiece;
})(window);