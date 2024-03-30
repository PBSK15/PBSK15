(function(window){
    function Bubble(color, x, y) {
        this.initialize();
        this._size = 0.5 + 0.5 * Math.random();
        this._rise = this._size * 2;
        this._drift = this._rise / 1000;
        this.asset = new createjs.Bitmap(_gameQueue.getResult("bubble_" + color).src);
        this.addChild(this.asset);
        this._x = x;
        this.x = x;
        this.y = y;
        this.asset.scaleX = this.asset.scaleY = this._size;
        this._onHandler = this.on("tick", this.bubbleTick);
        this._downHandler = this.on("mousedown", this.bubblePop);
        this._overHandler = this.on("mouseover", this.bubblePop);
    }

    Bubble.prototype = new createjs.Container();
    Bubble.prototype.Container_initialize = Bubble.prototype.initialize;
    Bubble.prototype.initialize = function(){
        this.Container_initialize();
    };
    Bubble.prototype.bubblePop = function() {
        this.y = -200;
        createjs.Sound.play("audio_bubble_pop_" + (Math.floor(Math.random() * 4) + 1));
        if (_bubblePopped++ == 15 || _bubblePopped == 30) {
            if (!_dan.dialog("audio_BT_Dan_11", "us")) {
                _mom.dialog("audio_BT_Mom_NS4", "dan");
            }
        }
    };
    Bubble.prototype.bubbleTick = function() {
        this.x = this._x + 5 * Math.sin(new Date().getTime() * this._drift);
        this.y -= this._rise;
        if (this.y < 10) {
            this.off("tick", this._onHandler);
            this.off("mousedown", this._downHandler);
            this.off("mouseover", this._overHandler);
            this.parent.removeChild(this);
        }
    };

    window.Bubble = Bubble;
})(window)