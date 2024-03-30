/**
 * Created by Matt Kucic on 5/14/2014.
 */
(function(window){
    function DTBucket(id, placeHandler){
        this.initialize();
        this.id = id;
        this.placeHandler = placeHandler;
        this.defaultPosition = new createjs.Point(0, 0);

        this.bucket = new createjs.Bitmap(_gameQueue.getResult(id+"_bucket").src);
        this.bucket.on("mousedown", createjs.proxy(this.onBucketDown, this));
        this.bucketFlip = new createjs.Bitmap(_gameQueue.getResult(id+"_bucket_flip").src);
        this.bucketFlip.visible = false;
        this.addChild(this.bucket);
        this.addChild(this.bucketFlip);
        //this.touchSnd = _safeSound("item_pickup", false, true);
    }

    DTBucket.prototype = new createjs.Container();
    DTBucket.prototype.Container_initialize = DTBucket.prototype.initialize;
    DTBucket.prototype.initialize = function(){
        this.Container_initialize();
    }

    DTBucket.prototype.onBucketDown = function(evt){
        if(isTouchAllowed()){
            this.eventHolder = evt;
            this.touchedAt = new Date();
            this.clickAttach = false;
            this.bucket.visible = false;
            this.bucketFlip.visible = true;
            //this.touchSnd.play();
            _safeSound("item_pickup");
            this.x = evt.stageX - (this.bucketFlip.image.width * .5);
            this.y = evt.stageY - (this.bucketFlip.image.height * .8);
            evt.on("mousemove", createjs.proxy(this.onBucketMove, this));
            evt.on("mouseup", createjs.proxy(this.onBucketUp, this));
        }
    }
    DTBucket.prototype.onBucketMove = function(evt){
        if(!this.clickAttach){
            this.x = evt.stageX - (this.bucketFlip.image.width * .5);
            this.y = evt.stageY - (this.bucketFlip.image.height * .8);
        }
        else{
            this.x = evt.stageX - (this.bucketFlip.image.width * .5);
            this.y = evt.stageY - (this.bucketFlip.image.height * .8);
        }

    }
    DTBucket.prototype.onBucketUp = function(evt){
        var currentTime = new Date();
        this.eventHolder.removeAllEventListeners("mousemove");
        this.eventHolder.removeAllEventListeners("mouseup");
        _stage.removeAllEventListeners("stagemousemove");
        _stage.removeAllEventListeners("stagemousedown");
        if(currentTime.getTime()-this.touchedAt.getTime() <= _gameConfig.waitTime){
            _stage.on("stagemousemove", createjs.proxy(this.onBucketMove, this));
            _stage.on("stagemousedown", createjs.proxy(this.onBucketUp, this));
            this.x = evt.stageX - (this.bucketFlip.image.width * .5);
            this.y = evt.stageY - (this.bucketFlip.image.height * .8);
            _stage.pieceAttachedToMouse = true;
            this.clickAttach = true;
        }
        else{
            this.eventHolder = null;
            if(this.placeHandler != null){
                _stage.pieceAttachedToMouse = false;
                this.placeHandler(this.id, evt.stageX, evt.stageY);
                this.x = this.defaultPosition.x;
                this.y = this.defaultPosition.y;
                this.bucket.visible = true;
                this.bucketFlip.visible = false;
            }
        }
    }

    DTBucket.prototype.setDefaultPosition = function(xPos, yPos, placeNow){
        this.defaultPosition = new createjs.Point(xPos, yPos);
        if(placeNow){
            this.x = this.defaultPosition.x;
            this.y = this.defaultPosition.y;
        }
    }

    DTBucket.prototype.setSaleFactors = function(minY,minScale,maxY,maxScale){
        this.minY = minY;
        this.minScale = minScale;
        this.maxY = maxY;
        this.maxScale = maxScale;
    }

    window.DTBucket = DTBucket;
})(window)