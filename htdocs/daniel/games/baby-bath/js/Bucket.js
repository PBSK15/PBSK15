(function(window){
    function Bucket(x, y, altX, altY, waterline) {
        this.initialize();

        this.asset = new createjs.Bitmap(_gameQueue.getResult("bucket").src);
        this.asset.scaleX = this.asset.scaleY = 0.6;
        this.addChild(this.asset);

        this._x = x;
        this._y = y;

        this._altX = altX;
        this._altY = altY;

        this.offsetX = 50;
        this.offsetY = 50;

        this.waterline = waterline;

        this.x = x;
        this.y = y;

        var shape = new createjs.Shape();
        shape.graphics.beginFill("#ff0000").drawRect(0, 0, 1000, waterline);
        this.mask = shape;

        this.fill = 0;

        this.attached = false;

        this.soundInstance = createjs.Sound.createInstance("audio_bucket_stream");
        this.pouring = false;
    }

    Bucket.prototype = new createjs.Container();
    Bucket.prototype.Container_initialize = Bucket.prototype.initialize;
    Bucket.prototype.initialize = function(){
        this.Container_initialize();
    };
    Bucket.prototype.update = function(evt) {
        this.bucket.x = Math.max(400, evt.stageX - this.bucket.offsetX);
        this.bucket.y = evt.stageY - this.bucket.offsetY;
        if (this.bucket.y > 380 && this.bucket.fill < 200) {
            this.bucket.fill += 10;
            if (this.bucket.pouring) {
                this.bucket.soundInstance.stop();
                this.bucket.pouring = false;
            }
        } else if (this.bucket.y < 380 && this.bucket.fill > 0){
            this.bucket.fill--;
            if (!this.bucket.pouring) {
                this.bucket.soundInstance.play({loop:Infinity});
                this.bucket.pouring = true;
            }
        } else if (this.bucket.fill == 0 && this.bucket.pouring) {
                this.bucket.soundInstance.stop();
                this.bucket.pouring = false;            
        }
    };
    Bucket.prototype.resetPosition = function() {
        if (this.y > (this.waterline-100)) {
            this.x = this._altX;
            this.y = this._altY;
            this.fill = 380;
        } else {
            this.x = this._x;
            this.y = this._y;
            this.fill = 0;
        }
        this.soundInstance.stop();
        this.pouring = false;
    };
    window.Bucket = Bucket;
})(window)