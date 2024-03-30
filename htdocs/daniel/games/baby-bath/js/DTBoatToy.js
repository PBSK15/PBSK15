(function(window){
    function DTBoatToy(x, y, dan_x, dan_y, marge_x, marge_y){
        this.initialize();
        this.asset = new createjs.Bitmap(_gameQueue.getResult("boat").src);
        this.addChild(this.asset);
        this._x = x;
        this._y = y;
        this.dan_x = dan_x;
        this.dan_y = dan_y;
        this.marge_x = marge_x;
        this.marge_y = marge_y;
        this.state = "idle";
        this.x = x;
        this.y = y;
    }

    DTBoatToy.prototype = new createjs.Container();
    DTBoatToy.prototype.Container_initialize = DTBoatToy.prototype.initialize;
    DTBoatToy.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTBoatToy.prototype.update = function() {
        if (this.state == "idle") {
            this.x = this._x + 2 * Math.sin(new Date().getTime() * 0.0018);
            this.y = this._y + 2 * Math.sin(new Date().getTime() * 0.0022);
        } else if (this.state == "marge-idle") {
            this.x = this.marge_x + 2 * Math.sin(new Date().getTime() * 0.0018);
            this.y = this.marge_y + 2 * Math.sin(new Date().getTime() * 0.0022);
        } else if (this.state == "to-marge") {
            this.x -= (this.dan_x - this.marge_x) / 40;
            this.y -= (this.dan_y - this.marge_y) / 40;
            this.ticks++;
            if (this.ticks == 40) {
                this.x = this.marge_x;
                this.y = this.marge_y;
                this.state = "marge-idle";
                this.dispatchEvent(new createjs.Event("at-marge"));
            }
        } else if (this.state == "to-idle") {
            this.x += (this._x - this.marge_x) / 40;
            this.y += (this._y - this.marge_y) / 40;
            this.ticks++;
            if (this.ticks == 40) {
                this.x = this._x;
                this.y = this._y;
                this.state = "idle";
            }
        }
    };
    DTBoatToy.prototype.startAction = function() {
        if (this.state == "idle") {
            this.dispatchEvent(new createjs.Event("leave-dan"));
            this.state = "to-marge";
            this.x = this.dan_x;
            this.y = this.dan_y;
            this.ticks = 0;
            createjs.Sound.play("audio_boat_Dan");
        } else if (this.state == "marge-idle") {
            this.dispatchEvent(new createjs.Event("leave-marge"));
            this.state = "to-idle";
            this.ticks = 0;
            createjs.Sound.play("audio_boat_Dan");
        }
    };

    window.DTBoatToy = DTBoatToy;
})(window)