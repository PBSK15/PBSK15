(function(window){
    function DTMargaret(momSprite){
        this.initialize();
        this.sprite = momSprite;
        this.sprite.on("animationend", this.animationEnd);
        this.sprite.character = this;
        this.addChild(this.sprite);
        this.randomLook();
        this.blinkTime = 30 + 60 * Math.random();
        this.dialogLog = {}
    }

    DTMargaret.prototype = new createjs.Container();
    DTMargaret.prototype.Container_initialize = DTMargaret.prototype.initialize;
    DTMargaret.prototype.initialize = function(){
        this.Container_initialize();
    };
    DTMargaret.prototype.update = function(){
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
    DTMargaret.prototype.setState = function(state){
        /*
        if (_suds && _suds.parent) {
            _suds.clearSuds();
        }
        */
        if (state == "idle") {
            this.randomLook();
        } else {
            this.sprite.gotoAndPlay(state);
            this.nextAnim = null;
            switch (state) {
                case "react_fish":
                    createjs.Sound.play("audio_BT_BM_8");
                    break;
                case "push_boat":
                    createjs.Sound.play("audio_BT_BM_3");
                    break;
                case "react_foot":
                    createjs.Sound.play("audio_BT_BM_1");
                    break;
                 case "giggle1":
                    createjs.Sound.play("audio_BT_BM_2");
                    break;
                 case "show_foot": 
                    createjs.Sound.play("audio_BT_BM_7");
                    break;
                 case "splash": 
                    createjs.Sound.play("audio_BT_BM_10");
                    break;
            }
        }
    };
    DTMargaret.prototype.animationEnd = function(evt) {
        switch(evt.name) {
            case "idle_mom_open": 
            case "idle_octo_open": 
            case "idle_dan_open": 
            case "idle_boat_open": 
                evt.target.stop();
                break;
            case "show_foot": 
                evt.target.gotoAndPlay("show foot cycle");
                break;
            case "show foot cycle": 
            case "shampoo_cycle": 
                break;
            case "shampoo": 
                evt.target.gotoAndPlay("shampoo_cycle");
                break;
            case "rinse":
                evt.target.stop();
                break;
            case "push_boat": 
                evt.target.gotoAndPlay("boat_end");
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
    DTMargaret.prototype.randomLook = function() {
        var rand = Math.random();
        if (rand < 0.25) {
            this.sprite.gotoAndPlay("idle_octo_open");
            this.nextAnim = "idle_octo_close";
        } else if (rand < 0.5) {
            this.sprite.gotoAndPlay("idle_dan_open");
            this.nextAnim = "idle_dan_close";
        } else if (rand < 0.75) {
            this.sprite.gotoAndPlay("idle_mom_open");
            this.nextAnim = "idle_mom_close";
        } else {
            this.sprite.gotoAndPlay("idle_boat_open");
            this.nextAnim = "idle_boat_close";
        }
    };
    window.DTMargaret = DTMargaret;
})(window)