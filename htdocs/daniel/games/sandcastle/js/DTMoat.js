/**
 * Created by Matt Kucic on 6/19/2014.
 */
(function(window){
    function DTMoat(){
        this.initialize();
        this.x = 30;
        this.y = 125;
        this.images = new Array();
        this.images.push(new createjs.Bitmap());
        this.currentFrame = 0;
        this.state = DTMoat.IDLE;
        this.idleFrames = 0;
        this.counter = 0;
        this.fillLevel = 0;
        this.emptyTick = 0;
        this.waterImage = undefined;
        for(var i=0;i<_gameConfig.moatIds.length;i++){
            this.images.push(new createjs.Bitmap(_gameQueue.getResult(_gameConfig.moatIds[i]).src));
        }
        this.bg = new createjs.Bitmap(_gameQueue.getResult("moat").src);
        this.bg.x = -18;
        this.bg.y = -12;
        this.addChild(this.bg);
    }
    DTMoat.prototype = new createjs.Container();
    DTMoat.FILLING = "filling";
    DTMoat.EMPTYING = "emptying";
    DTMoat.IDLE = "idle";
    DTMoat.IDLE_TIME = 600;
    DTMoat.EMPTY_SPEED = 20;
    DTMoat.FILL_SPEED = 1;
    DTMoat.prototype.Container_initialize = DTMoat.prototype.initialize;
    DTMoat.prototype.initialize = function(){
        this.Container_initialize();
    }

    DTMoat.prototype.fillMoat = function(){
        if(this.fillLevel == 0 || this.state == DTMoat.EMPTYING){
            this.goalFrame = this.images.length-1;
            this.state = DTMoat.FILLING;
            this.fillLevel = this.currentFrame;
            this.idleFrames = 0;
        }
    }
    DTMoat.prototype.emptyMoat = function(){
        this.goalFrame = 0;
        this.state = DTMoat.EMPTYING;
        this.emptyTick = DTMoat.EMPTY_SPEED;
        this.idleFrames = 0;
    }
    DTMoat.prototype.fullFill = function(){
        this.currentFrame = this.images.length-1;
        this.gotoFrame(this.currentFrame);
        this.fillLevel = this.images.length*DTMoat.EMPTY_SPEED;
        this.emptyMoat();
        this.idleFrames = 0;
    }
    DTMoat.prototype.update = function(){
        if(this.currentFrame != this.goalFrame){
            switch(this.state){
                case DTMoat.EMPTYING:
                        this.emptyTick --;
                        if(this.currentFrame > this.goalFrame){
                            if(this.emptyTick == 0){
                                this.currentFrame --;
                                this.fillLevel = this.currentFrame;
                                this.emptyTick = DTMoat.EMPTY_SPEED;
                                this.gotoFrame(this.currentFrame);
                            }
                        }
                    break;
                case DTMoat.FILLING:
                    this.fillLevel ++;
                    if(this.currentFrame < this.goalFrame){
                        if(this.fillLevel%DTMoat.FILL_SPEED == 0){
                            this.currentFrame ++;
                            this.gotoFrame(this.currentFrame);
                        }
                    }
                    if(this.currentFrame == this.goalFrame){
                        this.state = DTMoat.IDLE;
                        this.goalFrame = 0;
                    }
                    break;
                case DTMoat.IDLE:
                    this.idleFrames ++;
                    if(this.idleFrames > DTMoat.IDLE_TIME  && this.fillLevel > 0){
                        this.emptyMoat();
                    }
                    break;
                default:
            }
        }
    }

    DTMoat.prototype.gotoFrame = function(frameNumber){
        if(this.waterImage != undefined){
            this.removeChild(this.waterImage);
        }
        this.waterImage = this.images[frameNumber];

        this.waterImage.scaleX =  2;
        this.waterImage.scaleY = 2;
        this.addChild(this.waterImage);
    }

    window.DTMoat = DTMoat;
})(window);