(function(window){
    function Tub(x, y) {
        this.assetBase = new createjs.Bitmap(_gameQueue.getResult("tub").src);
        this.assetGreen = [];
        this.assetGreen.push(new createjs.Bitmap(_gameQueue.getResult("tub_green1").src));
        this.assetGreen.push(new createjs.Bitmap(_gameQueue.getResult("tub_green2").src));
        this.assetGreen.push(new createjs.Bitmap(_gameQueue.getResult("tub_green3").src));
        this.assetGreen.push(new createjs.Bitmap(_gameQueue.getResult("tub_green4").src));

        this.assetPink = [];
        this.assetPink.push(new createjs.Bitmap(_gameQueue.getResult("tub_pink1").src));
        this.assetPink.push(new createjs.Bitmap(_gameQueue.getResult("tub_pink2").src));
        this.assetPink.push(new createjs.Bitmap(_gameQueue.getResult("tub_pink3").src));
        this.assetPink.push(new createjs.Bitmap(_gameQueue.getResult("tub_pink4").src));
        
        this.asset = this.assetBase;
        this.addChild(this.asset);
        this.x = x;
        this.y = y;

        this.waterColor = "blue";
        this.transition = 4;
        this.skip = 0;
    }

    Tub.prototype = new createjs.Container();
    Tub.prototype.Container_initialize = Tub.prototype.initialize;
    Tub.prototype.initialize = function(){
        this.Container_initialize();
    };

    Tub.prototype.setColor = function(color) {
        //console.log(color)
        if (color != this.waterColor) {
            this.previousColor = this.waterColor;
            if (color == "pink") {
                this.waterColor = color;
            } else if (color == "green") {
                this.waterColor = color;
            } else {
                this.waterColor = "blue";
            }
            this.transition = 0;
            this.skip = 0;
        }
    };

    Tub.prototype.update = function(){
        if (this.transition < 4) {
            if (this.skip == 0) {
                this.removeChild(this.asset);
                if (this.previousColor == "blue" && this.waterColor == "pink") {
                    this.asset = this.assetPink[this.transition];
                } else if (this.previousColor == "blue" && this.waterColor == "green") {
                    this.asset = this.assetGreen[this.transition];
                } else if (this.previousColor == "pink" && this.waterColor == "blue") {
                    var idx = 2 - this.transition;
                    if (idx < 0) {
                        this.asset = this.assetBase;
                    } else {
                        this.asset = this.assetPink[idx];
                    }            
                } else if (this.previousColor == "green" && this.waterColor == "blue") {
                    var idx = 2 - this.transition;
                    if (idx < 0) {
                        this.asset = this.assetBase;
                    } else {
                        this.asset = this.assetGreen[idx];
                    }            
                } else if (this.waterColor == "pink") {
                    this.asset = this.assetPink[3];
                    this.transition = 3;
                } else if (this.waterColor == "green") {
                    this.asset = this.assetGreen[3];
                    this.transition = 3;
                } else {
                    this.asset = this.assetBase;
                    this.transition = 3;
                }
                this.transition++;
                this.addChild(this.asset);
            }
            this.skip = (this.skip + 1) % 2;
        }
    };

    window.Tub = Tub;
})(window)