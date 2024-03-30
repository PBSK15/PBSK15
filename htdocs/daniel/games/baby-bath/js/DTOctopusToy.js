(function(window){
    function DTOctopusToy(x, y, octoData) {
        this.initialize();

        //console.log(octoData);

        for (var i = 0; i < octoData.images.length; i++) {
            octoData.images[i] = "assets/characters/octopus/" + octoData.images[i];
        };
        this.asset = new createjs.Sprite(new createjs.SpriteSheet(octoData), "idle");
        this.asset.on("animationend", this.animationEnd);
        this.asset.octo = this;
        this.addChild(this.asset);
        

        this._x = x;
        this._y = y;
        this.state = "idle";
        this.x = x;
        this.y = y;
    }

    DTOctopusToy.prototype = new createjs.Container();
    DTOctopusToy.prototype.Container_initialize = DTOctopusToy.prototype.initialize;
    DTOctopusToy.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTOctopusToy.prototype.update = function() {
        this.x = this._x + 1 * Math.sin(new Date().getTime() * 0.0012);
        this.y = this._y + 2 * Math.sin(new Date().getTime() * 0.0018);
    };
    DTOctopusToy.prototype.startAction = function() {
        this.asset.gotoAndPlay("tap");
        createjs.Sound.play("audio_octopus");
    };

    DTOctopusToy.prototype.animationEnd = function(evt) {
        if (evt.name == "tap") {
            evt.target.gotoAndPlay("idle");
            evt.target.octo.dispatchEvent(new createjs.Event("at-marge"));
        }
    };

    window.DTOctopusToy = DTOctopusToy;
})(window)