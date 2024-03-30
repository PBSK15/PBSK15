(function(window){
    function SudsBubble(x, y) {
        this.initialize();

        //var shape = new createjs.Shape();
        var size = Math.random() * 10 + 10;
        //shape.graphics.setStrokeStyle(1,"round").beginStroke("#FFFFFF");
        //shape.graphics.beginFill("#EEEEFF").drawCircle(0, 0, size);
        this.setBounds(size/-2, size/-2, size, size);
        //shape.alpha = Math.random();
        var asset = new createjs.Bitmap(_gameQueue.getResult("suds").src);
        asset.x = -30;
        asset.y = -30;
        this.addChild(asset);
        this.x = x;
        this.y = y;
        this.fall = false;
        this.scaleX = this.scaleY = size/20;
    }

    SudsBubble.prototype = new createjs.Container();
    SudsBubble.prototype.Container_initialize = SudsBubble.prototype.initialize;
    SudsBubble.prototype.initialize = function(){
        this.Container_initialize();
    };
    SudsBubble.prototype.drop = function(){
        this.fall = true;
        this._onHandler = this.on("tick", this.bubbleTick);
    };
    SudsBubble.prototype.bubbleTick = function() {
        this.y += 10;
        if (this.y > 450) {
            this.off("tick", this._onHandler);
            this.parent.removeChild(this);
        }
    };
    window.SudsBubble = SudsBubble;
})(window)