/**
 * Created by Matt Kucic on 6/23/2014.
 */
(function(window){
    function DTCrab(){
        this.initialize();
        this.crab = new createjs.Sprite(new createjs.SpriteSheet(this.crabData), "hide");
        this.addChild(this.crab);
        this.state = "leaving";
        this.tickCount = 0;
        this.crab.on("mousedown", createjs.proxy(this.revealCrabby, this));
        /*
        this.crabpopout = _safeSound("crab_popup", false, true);
        this.crabpopout.setVolume(.5);
        this.crabpopin = _safeSound("crab_popin", false, true);
        this.crabpopin.setVolume(.5);
        this.crabwalk = _safeSound("crab_walk_loop", false, true);
        this.crabwalk.setVolume(.5);
        */
    }

    DTCrab.prototype = new createjs.Container();
    DTCrab.UNREVEAL = "unreveal";
    DTCrab.REVEAL = "reveal";
    DTCrab.HIDE = "hide";
    DTCrab.WALK = "walk";
    DTCrab.IDLE = "idle";

    DTCrab.prototype.Container_initialize = DTCrab.prototype.initialize;
    DTCrab.prototype.initialize = function(){
        this.Container_initialize();
        this.crabData = {
            "images": [_gameQueue.getResult("crabSheet")],
            "frames": [
                [2, 2, 124, 124, 0, -6, -2],
                [130, 2, 124, 124, 0, -6, -2],
                [258, 2, 124, 124, 0, -6, -2],
                [386, 2, 124, 124, 0, -6, -2],
                [514, 2, 124, 124, 0, -6, -2],
                [642, 2, 124, 124, 0, -6, -2],
                [770, 2, 124, 124, 0, -6, -2],
                [898, 2, 124, 124, 0, -6, -2],
                [2, 130, 124, 124, 0, -6, -2],
                [130, 130, 124, 124, 0, -6, -2],
                [258, 130, 124, 124, 0, -6, -2],
                [386, 130, 124, 124, 0, -6, -2],
                [514, 130, 124, 124, 0, -6, -2],
                [642, 130, 124, 124, 0, -6, -2],
                [770, 130, 124, 124, 0, -6, -2],
                [898, 130, 124, 124, 0, -6, -2],
                [2, 258, 124, 124, 0, -6, -2],
                [130, 258, 124, 124, 0, -6, -2],
                [258, 258, 124, 124, 0, -6, -2],
                [386, 258, 124, 124, 0, -6, -2],
                [514, 258, 124, 124, 0, -6, -2],
                [642, 258, 124, 124, 0, -6, -2],
                [770, 258, 124, 124, 0, -6, -2],
                [898, 258, 124, 124, 0, -6, -2],
                [2, 386, 124, 124, 0, -6, -2],
                [130, 386, 124, 124, 0, -6, -2],
                [258, 386, 124, 124, 0, -6, -2],
                [386, 386, 124, 124, 0, -6, -2],
                [514, 386, 124, 124, 0, -6, -2],
                [642, 386, 124, 124, 0, -6, -2],
                [770, 386, 124, 124, 0, -6, -2]
            ],
            "animations": {"unreveal": {"frames": [12, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], next:"hide"}, "reveal": {"frames": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12], next:"idle"}, "walk": {"frames": [13, 25, 26, 27, 13, 28, 29, 30]}, "idle": {"frames": [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 11, 12, 13, 13, 13]}, "hide": {"frames": [0]}, "all": {"frames": [0]}}
        }
    }
    DTCrab.prototype.revealCrabby = function(){
        if(isTouchAllowed()){
            this.crab.removeAllEventListeners();
            this.crab.gotoAndPlay(DTCrab.REVEAL);
            //this.crabpopout.play();
            var crabpopout = _safeSound("crab_popup", false, true);
            if(crabpopout != undefined){
                crabpopout.setVolume(.5);
                crabpopout.play();
            }
            this.crab.on("mousedown", createjs.proxy(this.crabbyLeave, this));
            this.tickCount = 0;
            this.crab.on("tick", createjs.proxy(this.onTick, this));
        }
    }
    DTCrab.prototype.hideCrabby = function(){
        if(isTouchAllowed()){
            this.crab.removeAllEventListeners();
            createjs.Tween.removeTweens(this);
            this.crab.gotoAndPlay(DTCrab.UNREVEAL);
            //this.crabwalk.stop();
            if(this.crabwalk != undefined){
                _safeSoundStop(this.crabwalk);
            }
            //this.crabpopin.play();
            var crabpopin = _safeSound("crab_popin", false, true);
            if(crabpopin != undefined){
                crabpopin.setVolume(.5);
                crabpopin.play();
            }
            this.crab.on("mousedown", createjs.proxy(this.revealCrabby, this));
            this.tickCount = 0;
            this.crab.on("tick", createjs.proxy(this.checkForPopUp, this));
        }

    }
    DTCrab.prototype.crabbyLeave = function(){
        if(isTouchAllowed()){
            this.crab.removeAllEventListeners();
            this.crab.gotoAndPlay(DTCrab.WALK);
            //this.crabwalk.play({loop:Infinity});
            this.crabwalk = _safeSound("crab_walk_loop", false, true);
            if(this.crabwalk != undefined){
                this.crabwalk.setVolume(.5);
                this.crabwalk.play({loop:Infinity});
            }
            this.crab.on("mousedown", createjs.proxy(this.hideCrabby, this));
            createjs.Tween.get(this).to({"x":this.goalPosition.x,"y":this.goalPosition.y}, this.getTime()).call(createjs.proxy(this.reachedGoal, this));
        }
    }

    DTCrab.prototype.reachedGoal = function(evt){
        this.crab.removeAllEventListeners();
        if(this.crabwalk != undefined){
            _safeSoundStop(this.crabwalk);
        }
        //this.crabwalk.stop();
        if(this.state == "leaving"){
            this.tickCount = 0;
            this.goalPosition = this.startPoint;
            this.state = "returning";
            this.crab.on("tick", createjs.proxy(this.checkForReturn, this));
        }
        else if(this.state == "returning"){
            this.crab.gotoAndPlay(DTCrab.UNREVEAL);
            //this.crabpopin.play();
            var crabpopin = _safeSound("crab_popin", false, true);
            if(crabpopin != undefined){
                crabpopin.setVolume(.5);
                crabpopin.play();
            }
            this.goalPosition = this.endPoint;
            this.state = "leaving";
            this.crab.on("mousedown", createjs.proxy(this.revealCrabby, this));
        }
    }

    DTCrab.prototype.crabbyGone = function(evt){
        this.crab.removeAllEventListeners();
        this.tickCount = 0;
        this.crab.on("tick", createjs.proxy(this.checkForReturn, this));

    }
    DTCrab.prototype.crabbyReturned = function(evt){
        this.crab.removeAllEventListeners();
        createjs.Tween.removeTweens(this);
        this.crab.hideCrabby();

    }
    DTCrab.prototype.setStartPoint = function(inX, inY){
       this.startPoint = {"x":inX,"y":inY};
    }
    DTCrab.prototype.setEndPoint = function(inX, inY, setAsGoal){
       this.endPoint = {"x":inX,"y":inY};
        if(setAsGoal){
            this.goalPosition = this.endPoint;
        }
    }
    DTCrab.prototype.setTime = function(time){
       this.moveTime = time;
    }

    DTCrab.prototype.onTick = function(evt){
        this.tickCount ++;
        if(this.tickCount >= 150){
            this.crab.removeAllEventListeners();
            this.crab.gotoAndPlay(DTCrab.UNREVEAL);
            //this.crabpopin.play();
            var crabpopin = _safeSound("crab_popin", false, true);
            if(crabpopin != undefined){
                crabpopin.setVolume(.5);
                crabpopin.play();
            }
            this.crab.on("mousedown", createjs.proxy(this.revealCrabby, this));
            this.tickCount = 0;
            this.crab.on("tick", createjs.proxy(this.checkForPopUp, this));
        }
    }
    DTCrab.prototype.checkForReturn = function(evt){
        this.tickCount ++;
        if(this.tickCount >= 600){
            this.crab.removeAllEventListeners();
            this.crab.gotoAndPlay(DTCrab.WALK);
            //this.crabwalk.play({loop:Infinity});
            this.crabwalk = _safeSound("crab_walk_loop", false, true);
            if(this.crabwalk != undefined){
                this.crabwalk.setVolume(.5);
                this.crabwalk.play({loop:Infinity});
            }
            this.crab.on("mousedown", createjs.proxy(this.hideCrabby, this));
            createjs.Tween.get(this).to({"x":this.goalPosition.x,"y":this.goalPosition.y}, this.getTime()).call(createjs.proxy(this.reachedGoal, this));
        }
    }
    DTCrab.prototype.checkForPopUp = function(evt){
        this.tickCount ++;
        if(this.tickCount >= 900){
            this.crab.removeAllEventListeners();
            this.crab.gotoAndPlay(DTCrab.REVEAL);
            //this.crabpopout.play();
            var crabpopout = _safeSound("crab_popup", false, true);
            if(crabpopout != undefined){
                crabpopout.setVolume(.5);
                crabpopout.play();
            }
            this.crab.on("mousedown", createjs.proxy(this.crabbyLeave, this));
            this.tickCount = 0;
            this.crab.on("tick", createjs.proxy(this.onTick, this));
        }
    }
    DTCrab.prototype.getTime = function(){
        var totalDistance = ptToPtDistance(this.startPoint.x, this.startPoint.x, this.endPoint.x, this.endPoint.y);
        var distanceLeft = ptToPtDistance(this.x, this.y, this.goalPosition.x, this.goalPosition.y);
        return this.moveTime*(distanceLeft/totalDistance);
    }

    window.DTCrab = DTCrab;
})(window);