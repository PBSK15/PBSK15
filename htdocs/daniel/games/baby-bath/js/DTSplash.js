(function(window){
    function DTSplash(momSprite){
        this.initialize();
        this.sprite = momSprite;
        this.sprite.on("animationend", this.animationEnd);
        this.sprite.character = this;
        this.addChild(this.sprite);
    }

    DTSplash.prototype = new createjs.Container();
    DTSplash.prototype.Container_initialize = DTSplash.prototype.initialize;
    DTSplash.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTSplash.prototype.splash = function(color){
        this.sprite.gotoAndPlay("splash_" + color);
        this.nextAnim = null;
    };
    DTSplash.prototype.animationEnd = function(evt) {
        evt.target.stop();
        evt.target.character.parent.removeChild(evt.target.character);
    };
    window.DTSplash = DTSplash;
})(window)