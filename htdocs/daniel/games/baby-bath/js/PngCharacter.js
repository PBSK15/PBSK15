(function(window){
    function PngCharacter(){
        this.initialize();
    }

    PngCharacter.prototype = new createjs.Container();
    PngCharacter.prototype.Container_initialize = PngCharacter.prototype.initialize;
    PngCharacter.prototype.initialize = function(){
        this.Container_initialize();
    };
    PngCharacter.prototype.setup = function(){
        this.blinkFrame = 0;
        this.skip = 0;
        this.eyesOn = false;
        if (this.eyeMask) {
            this.addChild( this.eyeMask );
            this.addChild( this.pupils[0] );
            this.addChild( this.pupils[1] );
            this.addChild( this.sprite );                
            this.eyeMask.visible = false;
        } else {
            this.addChild( this.sprite );                
            this.addChild( this.pupils[0] );
            this.addChild( this.pupils[1] );
        }
        this.pupils[0].visible = false;
        this.pupils[1].visible = false;
        for (var i = 0; i < this.eyes.length; i++) {
            this.addChild( this.eyes[i] );
            this.eyes[i].visible = false;
        };
    };
    PngCharacter.prototype.update = function(){
        if (this.sprite.currentAnimation == "idle") {
            if (!this.eyesOn) {
                if (this.eyeMask) {
                    this.eyeMask.visible = true;
                }
                this.pupils[0].visible = true;
                this.pupils[1].visible = true;
                this.eyes[this.blinkFrame].visible = true;
                this.eyesOn = true
            }
            if (this.blinkFrame > 0 || Math.random() < 0.1) {
                if (this.skip == 0) {
                    this.eyes[this.blinkFrame].visible = false;
                    this.blinkFrame = (this.blinkFrame + 1) % this.eyes.length;
                    this.skip = 3;
                    if (this.blinkFrame == 0) {
                        this.pupils[0].x = (Math.random() * 10) - 6;  // valid between -6 & 4
                        this.pupils[1].x = this.pupils[0].x + 2;      // valid between -4 & 6
                    }
                    this.eyes[this.blinkFrame].visible = true;
                } else {
                    this.skip--;
                }
            } 
        } else {
            if (this.eyesOn) {
                if (this.eyeMask) {
                    this.eyeMask.visible = false;
                }
                this.eyes[this.blinkFrame].visible = false;
                this.pupils[0].visible = false;
                this.pupils[1].visible = false;
                this.eyesOn = false
            }
        }
    };
    PngCharacter.prototype.setState = function(state){
        //console.log(state);
        if (this.sprite.currentAnimation == "idle") {
            this.eyes[this.blinkFrame].visible = false;
            this.pupils[0].visible = false;
            this.pupils[1].visible = false;
            if (this.eyeMask) {
                this.eyeMask.visible = false;
            }
            this.eyesOn = false
        }
        if (state == "idle") {
            if (this.eyeMask) {
                this.eyeMask.visible = true;
            }
            this.pupils[0].visible = true;
            this.pupils[1].visible = true;
            this.eyes[0].visible = true;
            this.eyesOn = true;
        }
        this.sprite.gotoAndPlay(state);
        this.blinkFrame = 0;
    };

    window.PngCharacter = PngCharacter;
})(window)