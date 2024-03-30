(function (lib) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1152,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap85 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap86 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap87 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap89 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap90 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap91 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap92 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Elainadresstexture = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.purplecrosshatch_pixpant = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-elaina');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Elainaeyes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elaina_fr_eye left
	this.instance = new lib.Bitmap89();
	this.instance.parent = this;
	this.instance.setTransform(-70,-78);

	this.instance_1 = new lib.Bitmap88();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-70,-78);

	this.instance_2 = new lib.Bitmap87();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-70,-78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70,-78,137,40);


(lib.Ebod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap85();
	this.instance.parent = this;
	this.instance.setTransform(-404.5,-240.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404.5,-240.5,809,481);


(lib.elaina_fr_handleft_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap90();
	this.instance.parent = this;
	this.instance.setTransform(-26,-6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,-10.1,43.2,60.3);


(lib.elaina_fr_armleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cuff
	this.instance = new lib.Bitmap92();
	this.instance.parent = this;
	this.instance.setTransform(-124,-1);

	this.instance_1 = new lib.Bitmap91();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-124,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance_1}]},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.8,-4.3,94.1,158.8);


(lib.elaina_cowboy_fr_headcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// eyebrow left
	this.instance = new lib.Bitmap86();
	this.instance.parent = this;
	this.instance.setTransform(-182,-255);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.7,-258.6,391.5,288.7);


(lib.Elaine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// elaina_fr_arm left
	this.instance = new lib.elaina_fr_armleft("single",22);
	this.instance.parent = this;
	this.instance.setTransform(-228.6,-0.5,1.425,1.425,1.2,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-56,regY:46,rotation:0,skewX:2.3,skewY:2.4,x:-310.1,y:61.7},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:5.3,skewY:5.9,x:-311.3,y:57.5},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:9.7,skewY:10.8,x:-312.6,y:51.2},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:14,skewY:15.7,x:-313.2,y:44.6},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:17,skewY:19.2,y:39.9},0).wait(1).to({regX:0,regY:0,skewX:18.1,skewY:20.4,x:-217.9,y:4.1},0).wait(48).to({startPosition:22},0).to({regX:-0.1,regY:0.1,scaleX:1.43,scaleY:1.43,rotation:1.2,skewX:0,skewY:0,x:-228.6,y:-0.5},6).wait(1));

	// elaina_fr_hand left_01
	this.instance_1 = new lib.elaina_fr_handleft_01("single",19);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-363.7,26,1.425,1.425,163.2,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-2,regY:32.5,scaleX:1.42,scaleY:1.43,rotation:0,skewX:164.2,skewY:164.4,x:-372.7,y:-22},0).wait(1).to({scaleX:1.42,scaleY:1.43,skewX:167.3,skewY:167.8,x:-368.4,y:-29.8},0).wait(1).to({scaleX:1.42,scaleY:1.43,skewX:171.7,skewY:172.7,x:-362.4,y:-40.8},0).wait(1).to({scaleX:1.42,scaleY:1.44,skewX:176,skewY:177.6,x:-356.2,y:-51.5},0).wait(1).to({scaleX:1.41,scaleY:1.44,skewX:179.1,skewY:181,x:-351.9,y:-58.9},0).wait(1).to({regX:0,regY:0,scaleY:1.44,skewX:180.1,skewY:182.2,x:-353.4,y:-14.8},0).wait(48).to({startPosition:19},0).wait(1).to({scaleX:1.41,scaleY:1.44,skewX:177.5,skewY:179.2,x:-355.3,y:-8},0).wait(1).to({scaleX:1.42,scaleY:1.43,skewX:174.7,skewY:176,x:-356.9,y:-1.2},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:1.42,scaleY:1.43,skewX:171.7,skewY:172.7,x:-358.7,y:5.7},0).wait(1).to({scaleX:1.42,scaleY:1.43,skewX:169,skewY:169.7,x:-360.4,y:12.5},0).wait(1).to({scaleX:1.42,scaleY:1.43,skewX:166.2,skewY:166.5,x:-362.1,y:19.2},0).wait(1).to({regY:0,scaleX:1.43,scaleY:1.43,rotation:163.2,skewX:0,skewY:0,x:-363.7,y:26},0).wait(1));

	// elaina_cowboy_fr_head comp
	this.instance_2 = new lib.Elainaeyes("synched",0,false);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-184.7,-49.5,1.425,1.425,-9.5,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-1.5,regY:-58,x:-200,y:-130.4,startPosition:1},0).wait(1).to({scaleX:1.43,scaleY:1.42,rotation:0,skewX:-9.7,skewY:-9.9,x:-199.3,y:-130.3,startPosition:2},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:-10,skewY:-10.4,x:-198.4,y:-130.1,startPosition:3},0).wait(1).to({scaleY:1.42,skewX:-10.3,skewY:-10.8,x:-197.4,y:-130,startPosition:4},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:-10.5,skewY:-11.1,x:-196.8,y:-129.9,startPosition:5},0).wait(1).to({regX:-0.1,regY:-0.1,skewY:-11.3,x:-179.5,y:-49.4,startPosition:6},0).wait(48).to({startPosition:6},0).to({scaleX:1.43,scaleY:1.42,skewX:-9.8,skewY:-10,x:-183,y:-49.5,startPosition:1},4).to({scaleX:1.42,skewX:-9.5,skewY:-9.8,x:-183.8,y:-49.4,startPosition:0},1).to({scaleX:1.43,scaleY:1.43,rotation:-9.5,skewX:0,skewY:0,x:-184.7,y:-49.5},1).wait(1));

	// elaina_cowboy_fr_head comp
	this.instance_3 = new lib.elaina_cowboy_fr_headcomp("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-184.7,-49.5,1.425,1.425,-9.5,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-2.5,regY:-112.5,x:-214.2,y:-206.7,startPosition:1},0).wait(1).to({scaleX:1.43,scaleY:1.42,rotation:0,skewX:-9.7,skewY:-9.9,x:-213.9,y:-206.6},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:-10,skewY:-10.4,x:-213.2,y:-206.3},0).wait(1).to({scaleY:1.42,skewX:-10.3,skewY:-10.8,x:-212.7,y:-206},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:-10.5,skewY:-11.1,x:-212.2,y:-205.8},0).wait(1).to({regX:-0.1,regY:-0.1,skewY:-11.3,x:-179.5,y:-49.4,mode:"single",startPosition:0},0).wait(48).to({startPosition:0},0).to({scaleX:1.43,scaleY:1.43,rotation:-9.5,skewX:0,skewY:0,x:-184.7,y:-49.5,mode:"synched",loop:false},6).wait(1));

	// elaina_fr_collar
	this.instance_4 = new lib.Ebod("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(82.5,204.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:0.8,x:85.7},6).wait(48).to({startPosition:0},0).to({skewX:0,x:82.5},6).wait(1));

	// elaina_fr_arm left
	this.instance_5 = new lib.elaina_fr_armleft("single",11);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-228.6,-0.5,1.425,1.425,1.2,0,0,-0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-56,regY:46,rotation:0,skewX:2.3,skewY:2.4,x:-310.1,y:61.7},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:5.3,skewY:5.9,x:-311.3,y:57.5},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:9.7,skewY:10.8,x:-312.6,y:51.2},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:14,skewY:15.7,x:-313.2,y:44.6},0).wait(1).to({scaleX:1.43,scaleY:1.42,skewX:17,skewY:19.2,y:39.9},0).wait(1).to({regX:0,regY:0,skewX:18.1,skewY:20.4,x:-217.9,y:4.1},0).wait(48).to({startPosition:11},0).to({regX:-0.1,regY:0.1,scaleX:1.43,scaleY:1.43,rotation:1.2,skewX:0,skewY:0,x:-228.6,y:-0.5},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-500.1,-449.2,987.1,894.2);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Elaine("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(802.1,449.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(878,384.1,987.1,894.3);

})(window.animPG09Elaina = window.animPG09Elaina||{});