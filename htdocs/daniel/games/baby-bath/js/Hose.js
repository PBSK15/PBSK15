(function(window){
    function Hose(x, y, waterline) {
        this.initialize();

        this.asset = new createjs.Bitmap(_gameQueue.getResult("showerhead").src);
        //this.asset.scaleX = this.asset.scaleY = 0.6;
        this.addChild(this.asset);

        this._x = x;
        this._y = y;

        this.offsetX = 50;
        this.offsetY = 50;

        this.x = x;
        this.y = y;

        this.waterOn = false;

        this.soundInstance = createjs.Sound.createInstance("audio_shower_stream");

    }

    Hose.prototype = new createjs.Container();
    Hose.prototype.Container_initialize = Hose.prototype.initialize;
    Hose.prototype.initialize = function(){
        this.Container_initialize();
    };
    Hose.prototype.turnOn = function(){
        if (!this.waterOn) {
            this.waterOn = true;
            this.soundInstance.play({loop:Infinity});
        }
    };
    Hose.prototype.update = function(evt) {
        this.hose.x = Math.max(400, evt.stageX - this.hose.offsetX);
    };
    Hose.prototype.resetPosition = function() {
        //console.log("resetPosition");
        this.x = this._x;
        this.y = this._y;
        this.waterOn = false;
        this.soundInstance.stop();
    };
    window.Hose = Hose;
})(window)