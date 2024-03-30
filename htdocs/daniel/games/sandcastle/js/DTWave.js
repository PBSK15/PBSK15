/**
 * Created by Matt Kucic on 5/22/2014.
 */
(function(window){
    function DTWave(inDist){
        this.initialize();
        this.id = "wave"+(Math.floor(Math.random()*1000000));
        this.waveDimensions = _gameConfig.dimensions.wave;
        this.dryout = false;
        this.wave = new createjs.Bitmap(_gameQueue.getResult("wave").src);
        //this.heightDif = 500-this.wave.image.height;
        this.heightDif = 500-this.waveDimensions.height;
        this.collisionOffset = {"xOffset":this.waveDimensions.width *.2,"yOffset":this.waveDimensions.height*1.4}
        var rand = (Math.random()*.4)-.2;
        var xOffset = 0;
        var yOffset = 0;
        this.startX = -this.waveDimensions.width+xOffset;
        this.startY = this.waveDimensions.height+yOffset+this.heightDif;
        this.distance = inDist;
        if(this.distance == undefined){
            this.distance = (Math.random()*.05)+.45;
        }
        this.endX = (this.waveDimensions.width*this.distance)+this.startX;
        this.endY = (-this.waveDimensions.height*this.distance)+this.startY+this.heightDif;
        this.wave.x = this.startX;
        this.wave.y = this.startY;
        this.collisionDef = {"x":this.startX+this.collisionOffset.xOffset,"y":this.startY+this.collisionOffset.yOffset,"radius":this.waveDimensions.width};
        this.addChild(this.wave);
    }

    DTWave.prototype = new createjs.Container();
    DTWave.COMPLETE = "complete";
    DTWave.ERASE_ALL = "eraseAll";
    DTWave.prototype.Container_initialize = DTWave.prototype.initialize;
    DTWave.prototype.initialize = function(){
        this.Container_initialize();
    }

    DTWave.prototype.animate = function(){
        var sndIndex = Math.floor(_gameConfig.sfx.tide.regular.length*Math.random());
        var sound = _safeSound(_gameConfig.sfx.tide.regular[sndIndex]);
        if(sound != undefined){
            sound.setVolume(.5);
            sound.play();
        }
        createjs.Tween.get(this.wave).to({x:this.endX,y:this.endY},1500,createjs.Ease.quadOut).call(createjs.proxy(waveIn,this));
        createjs.Tween.get(this.collisionDef).to({x:this.endX+this.collisionOffset.xOffset,y:this.endY+this.collisionOffset.yOffset},1500,createjs.Ease.quadOut);
        function waveIn(){
            this.dryout = true;
            if(this.distance == 1){
                this.dispatchEvent(new createjs.Event(DTWave.ERASE_ALL));
            }
            createjs.Tween.get(this.wave).wait(400).to({x:this.startX,y:this.startY},1500,createjs.Ease.quadIn).call(createjs.proxy(waveOut,this));
            createjs.Tween.get(this.collisionDef).wait(400).to({x:this.startX+this.collisionOffset.xOffset,y:this.startY+this.collisionOffset.yOffset},1500,createjs.Ease.quadIn);

        }
        function waveOut(){
            this.dispatchEvent(DTWave.COMPLETE);
        }
    }

    DTWave.prototype.update = function(){

    }

    DTWave.prototype.destroy = function(){

    }

    window.DTWave = DTWave;
})(window)
