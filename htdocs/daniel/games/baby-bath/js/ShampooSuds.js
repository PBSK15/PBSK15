(function(window){
    function ShampooSuds(x, y) {
        this.initialize();

        //var shape = new createjs.Shape();
        //shape.graphics.beginFill("#ffffff").drawCircle(0, 0, 50);
        //shape.alpha = 0.05;
        //shape.setBounds(-5, -5, 10, 10);
        //this.addChild(shape);

        this.asset = new createjs.Bitmap(_gameQueue.getResult("shampoo_blob").src);
        this.asset.x = -34;
        this.asset.y = -16;
        this.addChild(this.asset);

        this.x = x;
        this.y = y;
        this.sudsArray = [];
       
        this.downHanlder = this.on("mousedown", this.onDown);
    }

    ShampooSuds.prototype = new createjs.Container();
    ShampooSuds.prototype.Container_initialize = ShampooSuds.prototype.initialize;
    ShampooSuds.prototype.initialize = function(){
        this.Container_initialize();
    };
    ShampooSuds.prototype.onDown = function(evt){
        this.dragHanlder = evt.on("mousemove", this.onMove);
        this.downEvent = evt;
        evt.originalTarget = this;
    }
    ShampooSuds.prototype.onMove = function(evt){
        //console.log(evt);
        var shampooSuds = this;
        if (this.originalTarget) {
            shampooSuds = this.originalTarget;
        } else if (this.downHanlder) {
            this.off("mousedown", this.downHanlder);
            this.downHanlder = null;
        }
        var x = evt.stageX - _suds.x; 
        var y = evt.stageY - _suds.y; 
        var suds = new SudsBubble(x, y);
        var pSuds = shampooSuds.sudsArray[shampooSuds.sudsArray.length - 1];
        if (-200 <= x && x <= 150 && y <= 40) {
            if (!pSuds || Math.abs(pSuds.x - suds.x) > 15 || Math.abs(pSuds.y - suds.y) > 15) {
                if ((shampooSuds.sudsArray.length % 2) == 0) {
                    createjs.Sound.play("audio_suds_" + (Math.floor(Math.random() * 4) + 1));
                }
                shampooSuds.sudsArray.push(suds);
                shampooSuds.addChild(suds);
            }
        } else {
            shampooSuds.downEvent.removeAllEventListeners();
            suds.x += shampooSuds.x;
            suds.y += shampooSuds.y;
            shampooSuds.parent.addChild(suds);
            suds.drop();
        }
    };
    ShampooSuds.prototype.clearSuds = function(x){
        var d;
        if (x) {
            x = x - this.x;
            for (var i = this.sudsArray.length - 1; i >= 0; i--) {
                var suds = this.sudsArray[i];
                d = Math.abs(suds.x - x);
                if (d < 15 || suds.x < -90 || suds.x > 90) {
                    suds.x += this.x;
                    suds.y += this.y;
                    this.parent.addChild(suds);
                    suds.drop();
                    this.sudsArray.splice(i, 1);
                }
            }
        } else {
            while (this.sudsArray.length > 0) {
                var suds = this.sudsArray.pop();
                suds.x += this.x;
                suds.y += this.y;
                this.parent.addChild(suds);
                suds.drop();   
            }
        }
        if (this.sudsArray.length == 0 && this.parent && (!x || Math.abs(x) < 32) ) {
            this.parent.removeChild(this);
        }
    }
    window.ShampooSuds = ShampooSuds;
})(window)