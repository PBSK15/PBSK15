(function(window){
    function DTDan(momSprite){
        this.initialize();
        this.sprite = momSprite;
        this.sprite.on("animationend", this.animationEnd);
        this.sprite.character = this;
        this.addChild(this.sprite);
        this.randomLook();
        this.blinkTime = 30 + 60 * Math.random();
        this.dialogLog = {};
        this.dialogLimit = 4;
    }

    DTDan.prototype = new createjs.Container();
    DTDan.prototype.Container_initialize = DTDan.prototype.initialize;
    DTDan.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTDan.prototype.update = function(){
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
    DTDan.prototype.dialog = function(state, lookAt, force){
        if ((this.soundInstance && this.soundInstance.playState == createjs.Sound.PLAY_INITED) || (this.soundInstance && this.soundInstance.playState == createjs.Sound.PLAY_SUCCEEDED)) {
            return true;
        }
        var playAudio = false;
        if (force || !this.dialogLog[state] || this.dialogLog[state] == 0) {
            if (!lookAt) {
                lookAt = "us";
            }
            this.soundInstance = createjs.Sound.createInstance(state);
            this.soundInstance.sprite = this.sprite;
            this.soundInstance.lookAt = lookAt;
            this.soundInstance.on("succeeded", this.dialogStarted);
            this.soundInstance.on("failed", this.dialogComplete);
            this.soundInstance.on("complete", this.dialogComplete);
            this.soundInstance.play();
            playAudio = true;
        }
        if (!this.dialogLog[state]) {
            this.dialogLog[state] = 1;
        } else {
            this.dialogLog[state] = (this.dialogLog[state] + 1) % this.dialogLimit;
        }
        return playAudio
    };
    DTDan.prototype.dialogStarted = function(evt) {
        if (evt.target.playState) {
            this.sprite.gotoAndPlay("talk_" + this.lookAt + "_in");
        }
    };
    DTDan.prototype.dialogComplete = function(evt) {
        this.sprite.gotoAndPlay("talk_" + this.lookAt + "_out");
    };
    DTDan.prototype.setState = function(state){
        if (this.soundInstance) {
            this.soundInstance.stop();
        }
        if (state == "idle") {
            this.randomLook();
        } else {
            this.sprite.gotoAndPlay(state);
            this.nextAnim = null;
        }
    };
    DTDan.prototype.animationEnd = function(evt) {
        switch(evt.name) {
            case "idle_marge_open": 
            case "idle_boat_open": 
            case "idle_us_open": 
            case "idle_mom_open": 
            case "fish_squirt": 
                evt.target.stop();
                break;
            case "boat_windup" :
                evt.target.gotoAndPlay("push_boat");
                break;
            case "talk_us_in": 
                evt.target.gotoAndPlay("talk_us_cycle");
                break;
            case "talk_marge_in": 
                evt.target.gotoAndPlay("talk_marge_cycle");
                break;
            case "talk_us_cycle": 
            case "talk_marge_cycle": 
                break;
            default:
                this.character.randomLook();
        }
        if (evt.name.substr(0,4) != "idle") {
            var newEvent = new createjs.Event("animationEnd");
            newEvent.name = evt.name;
            this.character.dispatchEvent(newEvent);
        }
    };
    DTDan.prototype.randomLook = function() {
        var rand = Math.random();
        if (rand < 0.25) {
            this.sprite.gotoAndPlay("idle_marge_open");
            this.nextAnim = "idle_marge_close";
        } else if (rand < 0.5) {
            this.sprite.gotoAndPlay("idle_boat_open");
            this.nextAnim = "idle_boat_close";
        } else if (rand < 0.75) {
            this.sprite.gotoAndPlay("idle_us_open");
            this.nextAnim = "idle_us_close";
        } else {
            this.sprite.gotoAndPlay("idle_mom_open");
            this.nextAnim = "idle_mom_close";
        }
    };
    window.DTDan = DTDan;
})(window)