(function(window){
    function DTPufferToy(x, y) {
        this.initialize();
        this.asset = new createjs.Bitmap(_gameQueue.getResult("puffer").src);
        this.addChild(this.asset);
        this._x = x;
        this._y = y;
        this.state = "idle";
        this.x = x;
        this.y = y;
    }

    DTPufferToy.prototype = new createjs.Container();
    DTPufferToy.prototype.Container_initialize = DTPufferToy.prototype.initialize;
    DTPufferToy.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTPufferToy.prototype.update = function() {
        if (this.state == "idle") {
            this.x = this._x + 2 * Math.sin(new Date().getTime() * 0.0019);
            this.y = this._y + 1 * Math.sin(new Date().getTime() * 0.0017);
        }
    };
    DTPufferToy.prototype.startAction = function() {
        if (this.state == "idle") {

        }
    };

    window.DTPufferToy = DTPufferToy;
})(window)