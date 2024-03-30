(function(window){
    function DTMom(momSprite){
        this.initialize();
        this.sprite = momSprite;
        this.sprite.on("animationend", this.animationEnd);
        this.sprite.character = this;
        this.addChild(this.sprite);
        this.randomLook();
        this.blinkTime = 30 + 60 * Math.random();
        this.dialogLog = {};
        this.dialogLimit = 8;
    }

    DTMom.prototype = new createjs.Container();
    DTMom.prototype.Container_initialize = DTMom.prototype.initialize;
    DTMom.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTMom.prototype.dialog = DTDan.prototype.dialog;
    DTMom.prototype.dialogStarted = DTDan.prototype.dialogStarted;
    DTMom.prototype.dialogComplete = DTDan.prototype.dialogComplete;
    DTMom.prototype.update = function(){
        if (this.sprite.currentAnimation.substr(0,4) == "idle") {
            this.blinkTime--;
            if (this.blinkTime <= 0) {
                this.blinkTime = 30 + 60 * Math.random();
                if (this.nextAnim) {
                    this.sprite.gotoAndPlay(this.nextAnim);
                    this.nextAnim = null;
                }
            }
        }
    };
    DTMom.prototype.setState = function(state){
        if (state == "idle") {
            this.randomLook();
        } else {
            this.sprite.gotoAndPlay(state);
            this.nextAnim = null;
        }
    };
    DTMom.prototype.animationEnd = function(evt) {
        switch(evt.name) {
            case "idle_marge_open": 
            case "idle_dan_open": 
            case "idle_bottles_open": 
                evt.target.stop();
                break;
            case "shampoo" :
                evt.target.gotoAndPlay("shampoo_end");
                break;
            case "talk_dan_in": 
                evt.target.gotoAndPlay("talk_dan_cycle");
                break;
            case "talk_marge_in": 
                evt.target.gotoAndPlay("talk_marge_cycle");
                break;
            case "talk_dan_cycle": 
            case "talk_marge_cycle": 
                break;
            default:
                this.character.randomLook();
        }
        if (evt.name.substr(0,4) != "idle") {
            //console.log(evt.name)
            var newEvent = new createjs.Event("animationEnd");
            newEvent.name = evt.name;
            this.character.dispatchEvent(newEvent);
        }
    };
    DTMom.prototype.randomLook = function() {
        var rand = Math.random();
        if (rand < 0.34) {
            this.sprite.gotoAndPlay("idle_marge_open");
            this.nextAnim = "idle_marge_close";
        } else if (rand < 0.67) {
            this.sprite.gotoAndPlay("idle_dan_open");
            this.nextAnim = "idle_dan_close";
        } else {
            this.sprite.gotoAndPlay("idle_bottles_open");
            this.nextAnim = "idle_bottles_close";
        }
    };
    window.DTMom = DTMom;
})(window)