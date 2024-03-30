(function(window){
    function DTSquirt(momSprite){
        this.initialize();
        this.sprite = momSprite;
        this.sprite.on("animationend", this.animationEnd);
        this.sprite.character = this;
        this.addChild(this.sprite);
    }

    DTSquirt.prototype = new createjs.Container();
    DTSquirt.prototype.Container_initialize = DTSquirt.prototype.initialize;
    DTSquirt.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTSquirt.prototype.squirt = function(){
        this.sprite.gotoAndPlay("squirt_fish");
        this.nextAnim = null;
    };
    DTSquirt.prototype.animationEnd = function(evt) {
        evt.target.stop();
        evt.target.character.parent.removeChild(evt.target.character);
    };
    window.DTSquirt = DTSquirt;
})(window)