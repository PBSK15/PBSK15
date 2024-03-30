(function(window){
    function Water(color, x, y, speed, suds, tub) {
        this.initialize();
        this._size = 2 + 3 * Math.random();
        this._rise = speed;
        this._drift = 0.02;
        this.asset = new createjs.Bitmap(_gameQueue.getResult("waterdrop_" + color).src);
        this.asset.x = -3;
        this.asset.y = -8;
        this.addChild(this.asset);
        //this._x = x;
        this.x = x + 2*Math.random();
        this.y = y + Math.random();
        //this.alpha = 0.3;
        if (this.y < 250) {
            this.suds = suds;
            this.tub = tub;
        }
        this._onHandler = this.on("tick", this.waterTick);
    }

    Water.prototype = new createjs.Container();
    Water.prototype.Container_initialize = Water.prototype.initialize;
    Water.prototype.initialize = function(){
        this.Container_initialize();
    };
    Water.prototype.waterTick = function() {
        //this.x = this._x + Math.sin(new Date().getTime() * this._drift);
        this.y -= Math.min(this._rise, -4);
        this._rise -= 0.6;
        if (this.suds && this.suds.parent && this.y > 250) {
            this.suds.clearSuds(this.x);
            this.suds = null;
        }
        if (this.y > 450) {
            this.off("tick", this._onHandler);
            this.parent.removeChild(this);
            if (this.tub) {
                this.tub.setColor("blue");
                this.tub = null;
            }
        }
    };

    window.Water = Water;
})(window)