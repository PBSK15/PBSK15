(function (lib) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap10 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = sbe.loader.get('pg06-anim-chrissie');
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.SkirtCover = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bottom pipping gradient
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-91.2,-6.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-6.4,186,123);


(lib.Neck = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Chrissie_34fr_neck
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-21.5,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-43.3,72,58);


(lib.FarHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crutch handle
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-11.3,-12.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-12.6,51,46);


(lib.FarCrutch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// high light
	this.instance = new lib.Bitmap20();
	this.instance.setTransform(-23.9,-35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-35.3,43,241);


(lib.FarArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_arm brace_cl
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-14.1,-7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.1,-7.2,59,120);


(lib.CloseHand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-24.5,-5.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.CloseCrutch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// high lights
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-26.3,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-48.3,64,256);


(lib.CloseArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_arm brace_cl
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-66,-11.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.ChrissieShadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-137,-38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-38.8,278,80);


(lib.chrissie_34fr_skirt_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bottom pipping gradient
	this.instance = new lib.Bitmap23();
	this.instance.setTransform(-113.9,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-24,202,150);


(lib.FrontShoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_leg frame_lower_cl
	this.instance = new lib.Bitmap24();
	this.instance.setTransform(-42.4,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-9.5,96,71);


(lib.FrontLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_lower leg_cl
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(-38.9,-24.7);

	this.instance_1 = new lib.Bitmap27();
	this.instance_1.setTransform(-28.9,-57.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-24.7,85,173);


(lib.chrissie_34fr_skirt_01_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bottom pipping gradient
	this.instance_1 = new lib.Bitmap28();
	this.instance_1.setTransform(-75.1,63.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.1,63.5,124,44);


(lib.ChHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_cowboy_3-4fr_SL_cowboy hat_01
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-195.6,-274.3);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-195.6,-274.3);

	this.instance_2 = new lib.Bitmap4();
	this.instance_2.setTransform(-195.6,-274.3);

	this.instance_3 = new lib.Bitmap8();
	this.instance_3.setTransform(-195.6,-274.3);

	this.instance_4 = new lib.Bitmap7();
	this.instance_4.setTransform(-195.6,-274.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.6,-274.3,383,302);


(lib.ChCollar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line_gradient
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-48.6,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-30.1,97,61);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4_fr_button
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(-86.6,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-123.5,146,190);


(lib.Belt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-58.5,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-22.4,117,45);


(lib.BackLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap17();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,99,193);


(lib.Chrissie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_cowboy_3-4fr_SL_head comp_01 
	this.instance = new lib.ChHead("synched",0,false);
	this.instance.setTransform(-75.9,-59.6,0.825,0.825,0,0.2,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:-9.3,skewY:170.5,x:-72.6,y:-44.1,mode:"single",startPosition:6},6).to({skewX:-11.1,skewY:168.8,x:-72.5,y:-41.7,mode:"synched",startPosition:7,loop:false},1).wait(1).to({regX:-4.2,regY:-123.3,skewX:-12.2,skewY:167.9,x:-91.8,y:-140.8,startPosition:8},0).wait(1).to({scaleX:0.82,scaleY:0.82,skewX:-13.2,skewY:167.2,x:-94.7,y:-139.4,startPosition:9},0).wait(1).to({scaleX:0.82,scaleY:0.82,skewX:-14,skewY:166.5,x:-97.2,y:-138.2,startPosition:10},0).wait(1).to({skewX:-14.7,skewY:166,x:-99.2,y:-137.3,startPosition:11},0).wait(1).to({scaleX:0.82,scaleY:0.82,skewX:-15.2,skewY:165.7,x:-100.4,y:-136.7,startPosition:12},0).wait(1).to({regX:0,regY:0,skewX:-15.4,skewY:165.6,x:-77.5,y:-37.8,mode:"single",startPosition:14},0).wait(1).to({regX:-4.2,regY:-123.3,skewX:-15.3,x:-100.7,y:-136.5},0).wait(1).to({skewX:-15,skewY:165.8,x:-100,y:-136.8},0).wait(1).to({skewX:-14.6,skewY:166.1,x:-98.8,y:-137.2},0).wait(1).to({skewX:-14.1,skewY:166.5,x:-97.2,y:-137.7},0).wait(1).to({skewX:-13.4,skewY:167,x:-95.2,y:-138.4},0).wait(1).to({skewX:-12.7,skewY:167.6,x:-93,y:-139.2},0).wait(1).to({skewX:-11.9,skewY:168.2,x:-90.6,y:-140},0).wait(1).to({skewX:-11.1,skewY:168.8,x:-88.4,y:-140.7},0).wait(1).to({skewX:-10.5,skewY:169.3,x:-86.4,y:-141.3},0).wait(1).to({skewX:-9.9,skewY:169.7,x:-84.9,y:-141.8},0).wait(1).to({skewX:-9.6,skewY:169.9,x:-83.9,y:-142.1},0).wait(1).to({regX:0,regY:0,skewX:-9.5,skewY:170,x:-70.3,y:-41.7},0).wait(1).to({regX:-4.2,regY:-123.3,x:-83.7,y:-142.2},0).wait(1).to({skewX:-9.6,skewY:169.9},0).wait(1).to({skewX:-9.7,x:-84},0).wait(1).to({skewX:-9.8,skewY:169.8,x:-84.2,y:-142.1},0).wait(1).to({skewX:-9.9,skewY:169.7,x:-84.5},0).wait(1).to({scaleX:0.82,skewX:-10.1,skewY:169.5,x:-85},0).wait(1).to({skewX:-10.3,skewY:169.3,x:-85.5,y:-142},0).wait(1).to({skewX:-10.5,skewY:169.1,x:-86,y:-141.9},0).wait(1).to({skewX:-10.8,skewY:168.9,x:-86.7},0).wait(1).to({skewX:-11,skewY:168.7,x:-87.4,y:-141.8},0).wait(1).to({skewX:-11.4,skewY:168.4,x:-88.2,y:-141.7},0).wait(1).to({skewX:-11.7,skewY:168.1,x:-89.1,y:-141.6},0).wait(1).to({scaleY:0.82,skewX:-12.1,skewY:167.8,x:-90.1,y:-141.5},0).wait(1).to({regX:0,regY:0,skewX:-12.5,skewY:167.4,x:-72.5,y:-41.7,mode:"synched",loop:false},0).to({scaleX:0.82,scaleY:0.82,skewX:-16.3,skewY:164.2,x:-74.6,y:-36.7,mode:"single",startPosition:19},5).to({scaleX:0.83,scaleY:0.83,skewX:-9.5,skewY:170.3,x:-69.2,y:-44.6,startPosition:20},3).to({skewX:-6,skewY:173.8,x:-72.8,y:-50.5,startPosition:0},1).to({skewX:0.2,skewY:180,x:-75.9,y:-59.6,mode:"synched",loop:false},4).wait(1));

	// chrissie_3-4fr_neck_01
	this.instance_1 = new lib.Neck("single",0);
	this.instance_1.setTransform(-61.4,-42.9,0.825,0.825,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleY:0.81,skewX:-0.5,x:-60.2,y:-36.5},6).to({scaleY:0.83,skewX:0,x:-57.9,y:-28.9},1).wait(1).to({regX:14.5,regY:-14.4,scaleY:0.82,skewX:-0.3,x:-71.1,y:-40.2},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-72.2,y:-39.7},0).wait(1).to({scaleY:0.82,skewX:-0.7,x:-73.2,y:-39.2},0).wait(1).to({scaleY:0.82,skewX:-0.9,x:-74,y:-38.9},0).wait(1).to({scaleY:0.82,skewX:-1,x:-74.5,y:-38.6},0).wait(1).to({regX:0,regY:0,x:-62.6,y:-26.8},0).wait(1).to({regX:14.5,regY:-14.4,x:-74.6,y:-38.6},0).wait(1).to({skewX:-0.9,x:-74.3,y:-38.7},0).wait(1).to({scaleY:0.82,skewX:-0.8,x:-73.8,y:-38.8},0).wait(1).to({skewX:-0.7,x:-73.1,y:-39},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-72.3,y:-39.3},0).wait(1).to({scaleY:0.82,skewX:-0.3,x:-71.3,y:-39.6},0).wait(1).to({scaleY:0.82,skewX:-0.1,x:-70.4,y:-39.9},0).wait(1).to({scaleY:0.82,skewX:0.1,x:-69.5,y:-40.1},0).wait(1).to({skewX:0.2,x:-68.7,y:-40.4},0).wait(1).to({scaleY:0.83,skewX:0.3,x:-68.1,y:-40.6},0).wait(1).to({skewX:0.4,x:-67.6,y:-40.7},0).wait(1).to({regX:0,regY:0,skewX:0.5,x:-55.7,y:-28.9},0).wait(1).to({regX:14.5,regY:-14.4,x:-67.5,y:-40.8},0).wait(1).to({skewX:0.4,x:-67.6},0).wait(1).to({x:-67.7},0).wait(1).to({x:-67.9},0).wait(1).to({skewX:0.3,x:-68.1},0).wait(1).to({x:-68.3},0).wait(1).to({skewX:0.2,x:-68.6},0).wait(1).to({x:-68.8},0).wait(1).to({skewX:0.1,x:-69.1},0).wait(1).to({x:-69.3},0).wait(1).to({x:-69.5},0).wait(1).to({skewX:0,x:-69.7},0).wait(1).to({x:-69.8},0).wait(1).to({regX:0,regY:0,x:-57.9,y:-28.9},0).to({scaleY:0.82,skewX:-0.5,x:-59.9,y:-25.7},5).to({scaleY:0.83,skewX:1.5,skewY:181.5,x:-55.4,y:-31.5},3).to({skewX:-2,skewY:178,x:-57.8,y:-38.1},1).to({skewX:0,skewY:180,x:-61.4,y:-42.9},4).wait(1));

	// chrissie_3-4fr_collar_01
	this.instance_2 = new lib.ChCollar("single",0);
	this.instance_2.setTransform(-64.9,-36.4,0.825,0.825,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.81,skewX:1.2,skewY:181.7,x:-63.4,y:-24.3},6).to({scaleY:0.83,skewX:0,skewY:180,x:-61.2,y:-22.3},1).wait(1).to({regX:-0.1,regY:0.4,scaleY:0.82,skewX:-0.3,x:-62.3,y:-21.4},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-63.4,y:-20.9},0).wait(1).to({scaleY:0.82,skewX:-0.7,x:-64.3,y:-20.5},0).wait(1).to({scaleY:0.82,skewX:-0.9,x:-65,y:-20.2},0).wait(1).to({scaleY:0.82,skewX:-1,x:-65.5,y:-20},0).wait(1).to({regX:0,regY:0,x:-65.8,y:-20.3},0).wait(1).to({regX:-0.1,regY:0.4,x:-65.6,y:-19.9},0).wait(1).to({skewX:-0.9,x:-65.3,y:-20},0).wait(1).to({scaleY:0.82,skewX:-0.8,x:-64.9,y:-20.2},0).wait(1).to({skewX:-0.7,x:-64.2,y:-20.4},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-63.5,y:-20.6},0).wait(1).to({scaleY:0.82,skewX:-0.3,x:-62.6,y:-20.9},0).wait(1).to({scaleY:0.82,skewX:-0.1,x:-61.7,y:-21.1},0).wait(1).to({scaleY:0.82,skewX:0.1,x:-60.8,y:-21.4},0).wait(1).to({skewX:0.2,x:-60.1,y:-21.6},0).wait(1).to({scaleY:0.83,skewX:0.3,x:-59.5,y:-21.8},0).wait(1).to({skewX:0.4,x:-59.1,y:-21.9},0).wait(1).to({regX:0,regY:0,skewX:0.5,y:-22.3},0).wait(1).to({regX:-0.1,regY:0.4,x:-59,y:-22},0).wait(1).to({skewX:0.4,x:-59.1},0).wait(1).to({x:-59.2},0).wait(1).to({x:-59.3},0).wait(1).to({skewX:0.3,x:-59.5},0).wait(1).to({x:-59.7},0).wait(1).to({skewX:0.2,x:-60},0).wait(1).to({x:-60.2},0).wait(1).to({skewX:0.1,x:-60.5},0).wait(1).to({x:-60.7},0).wait(1).to({x:-60.8},0).wait(1).to({skewX:0,x:-61},0).wait(1).to({x:-61.1},0).wait(1).to({regX:0,regY:0,x:-61.2,y:-22.3},0).to({scaleY:0.82,skewX:-0.5,x:-63.3,y:-19.3},5).to({scaleY:0.83,skewX:-2,skewY:178,x:-61,y:-31.5},4).to({skewX:0,skewY:180,x:-64.9,y:-36.4},4).wait(1));

	// chrissie_3-4fr_arm cls_01
	this.instance_3 = new lib.CloseArm("single",4);
	this.instance_3.setTransform(-34.4,-37.6,0.825,0.825,0,-7.6,172.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:0.83,scaleY:0.81,skewX:9.8,skewY:177.2,x:-28.2,y:-30.3,startPosition:3},4).to({scaleX:0.77,scaleY:0.82,skewX:-2.1,skewY:169.5,x:-30.2,y:-25},3).to({scaleX:0.73,scaleY:0.85,skewX:-2.7,skewY:166.9,x:-32.9,y:-26},6).wait(1).to({regX:-26,regY:50.6,skewY:167,x:-12.2,y:12.4},0).wait(1).to({scaleX:0.74,skewX:-2.5,skewY:167.1,x:-11.9,y:12.3},0).wait(1).to({scaleX:0.74,scaleY:0.85,skewX:-2.3,skewY:167.2,x:-11.5,y:12.2},0).wait(1).to({scaleX:0.74,skewX:-2,skewY:167.4,x:-11,y:12.1},0).wait(1).to({scaleX:0.75,skewX:-1.6,skewY:167.7,x:-10.4,y:11.9},0).wait(1).to({scaleX:0.75,skewX:-1.2,skewY:168,x:-9.7,y:11.8},0).wait(1).to({scaleX:0.76,scaleY:0.85,skewX:-0.8,skewY:168.3,x:-8.9,y:11.6},0).wait(1).to({scaleX:0.76,skewX:-0.4,skewY:168.6,x:-8.2,y:11.4},0).wait(1).to({scaleX:0.77,skewX:0,skewY:168.8,x:-7.6,y:11.3},0).wait(1).to({scaleX:0.77,scaleY:0.85,skewX:0.3,skewY:169,x:-7.1,y:11.2},0).wait(1).to({scaleX:0.77,skewX:0.4,skewY:169.2,x:-6.7,y:11.1},0).wait(1).to({regX:0,regY:0,scaleX:0.77,skewX:0.5,x:-26,y:-28.1},0).wait(1).to({regX:-26,regY:50.6,scaleX:0.77,x:-6.7,y:11},0).wait(1).to({skewX:0.4},0).wait(1).to({scaleX:0.77,x:-6.9},0).wait(1).to({scaleX:0.77,skewX:0.3,x:-7},0).wait(1).to({scaleX:0.77,skewX:0.2,x:-7.1,y:11.1},0).wait(1).to({scaleX:0.76,scaleY:0.85,skewX:0.1,x:-7.4},0).wait(1).to({scaleX:0.76,skewX:0,x:-7.6},0).wait(1).to({scaleX:0.76,skewX:-0.1,x:-7.9},0).wait(1).to({scaleX:0.76,skewX:-0.2,x:-8},0).wait(1).to({scaleX:0.75,scaleY:0.85,skewX:-0.3,x:-8.2,y:11.2},0).wait(1).to({scaleX:0.75,skewX:-0.4,x:-8.4},0).wait(1).to({scaleX:0.75,skewX:-0.5,x:-8.5},0).wait(1).to({scaleX:0.75,x:-8.6},0).wait(1).to({regX:0,regY:0,x:-28.2,y:-28.1},0).to({scaleX:0.77,scaleY:0.82,skewX:-2.1,skewY:169.5,x:-30.2,y:-25},5).to({scaleX:0.76,scaleY:0.94,skewX:-16.3,skewY:158.6,x:-33.6,y:-35.8,startPosition:4},4).to({scaleX:0.83,scaleY:0.83,skewX:-7.6,skewY:172.4,x:-34.4,y:-37.6},4).wait(1));

	// *chrissie_3-4fr_hand close comp
	this.instance_4 = new lib.CloseHand("single",19);
	this.instance_4.setTransform(-4.7,41.6,0.825,0.825,0,25.4,-154.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.8,scaleY:0.85,skewX:36.3,skewY:-144.8,x:-19.2,y:46.4},4).to({scaleX:0.83,scaleY:0.82,skewX:37.9,skewY:-142.7,x:-5.6,y:55.3},3).wait(37).to({startPosition:19},0).to({scaleX:0.82,scaleY:0.82,skewX:28.5,skewY:-151.7,x:10,y:50.8},4).to({scaleX:0.83,scaleY:0.83,skewX:25.4,skewY:-154.6,x:-4.7,y:41.6},4).wait(1));

	// chrissie_3-4fr_crutch cl_01
	this.instance_5 = new lib.CloseCrutch("single",0);
	this.instance_5.setTransform(13.3,47,0.825,0.825,0,-0.9,179.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:0.83,skewX:0,skewY:176,x:-4.7,y:52.7},4).to({scaleX:0.83,scaleY:0.82,skewX:-0.5,skewY:180,x:8.9,y:62.6},3).wait(37).to({startPosition:0},0).to({scaleY:0.82,skewX:-0.8,skewY:179.5,x:25.2,y:56.3},4).to({scaleY:0.83,skewX:-0.9,skewY:179.1,x:13.3,y:47},4).wait(1));

	// chrissie_3-4fr_belt_01
	this.instance_6 = new lib.Belt("single",0);
	this.instance_6.setTransform(-53.1,26.3,0.825,0.825,0,0,180);

	this.instance_7 = new lib.SkirtCover("single",3);
	this.instance_7.setTransform(-58.1,48.5,0.825,0.825,0,-17,163);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleY:0.81,skewX:-0.5,x:-52.4,y:38.1},6).to({_off:true,scaleY:0.83,skewX:-17,skewY:163,x:-58.1,y:48.5,startPosition:3},1).wait(40).to({_off:false,skewX:-2,skewY:178,x:-47.1,y:30.8,startPosition:0},1).to({skewX:0,skewY:180,x:-53.1,y:26.3},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},1).wait(1).to({regX:1.8,regY:55.1,scaleY:0.82,skewX:-11.2,skewY:169.1,x:-48.1,y:93.6},0).wait(1).to({scaleY:0.82,skewX:-6,skewY:174.5,x:-49.8,y:94.1},0).wait(1).to({scaleY:0.82,skewX:-1.5,skewY:179.2,x:-51.3,y:94.3},0).wait(1).to({scaleY:0.82,skewX:2.1,skewY:183,x:-52.4,y:94.2},0).wait(1).to({scaleY:0.82,skewX:4.5,skewY:185.5,x:-53.2,y:94.1},0).wait(1).to({regX:0,regY:0,skewX:5.4,skewY:186.5,x:-47.7,y:49.3},0).wait(1).to({regX:1.8,regY:55.1,skewX:5.3,skewY:186.3,x:-53.3,y:94.1},0).wait(1).to({skewX:5,skewY:186,x:-52.9},0).wait(1).to({scaleY:0.82,skewX:4.5,skewY:185.3,x:-52.2},0).wait(1).to({skewX:3.8,skewY:184.5,x:-51.3,y:94.2},0).wait(1).to({scaleY:0.82,skewX:2.9,skewY:183.5,x:-50.1,y:94.3},0).wait(1).to({scaleY:0.82,skewX:2,skewY:182.3,x:-48.9},0).wait(1).to({scaleY:0.82,skewX:1,skewY:181.1,x:-47.5,y:94.4},0).wait(1).to({scaleY:0.82,skewX:0,skewY:180,x:-46.3},0).wait(1).to({skewX:-0.8,skewY:178.9,x:-45.2},0).wait(1).to({scaleY:0.83,skewX:-1.5,skewY:178.2,x:-44.2},0).wait(1).to({skewX:-1.9,skewY:177.7,x:-43.7},0).wait(1).to({regX:0,regY:0,skewX:-2,skewY:177.5,y:48.9},0).wait(1).to({regX:1.8,regY:55.1,x:-43.6,y:94.4},0).wait(1).to({skewX:-1.9,skewY:177.6,x:-43.7},0).wait(1).to({skewX:-1.8,skewY:177.7,x:-43.8},0).wait(1).to({skewX:-1.7,skewY:177.9,x:-44},0).wait(1).to({skewX:-1.5,skewY:178.1,x:-44.3,y:94.3},0).wait(1).to({skewX:-1.3,skewY:178.4,x:-44.6},0).wait(1).to({skewX:-1.1,skewY:178.7,x:-44.9},0).wait(1).to({skewX:-0.8,skewY:179,x:-45.3},0).wait(1).to({skewX:-0.6,skewY:179.2,x:-45.6,y:94.2},0).wait(1).to({skewX:-0.4,skewY:179.5,x:-45.8},0).wait(1).to({skewX:-0.2,skewY:179.7,x:-46.1},0).wait(1).to({skewX:-0.1,skewY:179.9,x:-46.3},0).wait(1).to({skewX:0,skewY:180,x:-46.4},0).wait(1).to({regX:0,regY:0,x:-45,y:48.7},0).to({scaleY:0.82,skewX:2.3,skewY:182.7,x:-46,y:50.3},5).to({scaleY:0.83,skewX:-24.2,skewY:155.8,x:-48.5,y:49.9},3).to({_off:true,skewX:-2,skewY:178,x:-47.1,y:30.8,startPosition:0},1).wait(5));

	// chrissie_3-4fr_skirt_01
	this.instance_8 = new lib.chrissie_34fr_skirt_01("single",0);
	this.instance_8.setTransform(-48.1,34.6,0.825,0.825,0,0,180);

	this.instance_9 = new lib.Belt("single",0);
	this.instance_9.setTransform(-49.5,40.4,0.825,0.825,0,0,180);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleY:0.81,skewX:1.2,skewY:181.7,x:-48.2,y:46.2},6).to({_off:true,scaleY:0.83,skewX:0,skewY:180,x:-49.5,y:40.4},1).wait(40).to({_off:false,skewX:-2,skewY:178,x:-41.8,y:39},1).to({skewX:0,skewY:180,x:-48.1,y:34.6},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({_off:false},1).wait(1).to({scaleY:0.82,skewX:-0.3,x:-50.4,y:40.8},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-51.2,y:41.1},0).wait(1).to({scaleY:0.82,skewX:-0.7,x:-51.9,y:41.4},0).wait(1).to({scaleY:0.82,skewX:-0.9,x:-52.5,y:41.7},0).wait(1).to({scaleY:0.82,skewX:-1,x:-52.9,y:41.8},0).wait(1).to({x:-53,y:41.9},0).wait(1).to({x:-52.9},0).wait(1).to({skewX:-0.9,x:-52.7,y:41.8},0).wait(1).to({scaleY:0.82,skewX:-0.8,x:-52.4,y:41.7},0).wait(1).to({skewX:-0.7,x:-51.9,y:41.6},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-51.3,y:41.4},0).wait(1).to({scaleY:0.82,skewX:-0.3,x:-50.7,y:41.2},0).wait(1).to({scaleY:0.82,skewX:-0.1,x:-50,y:41},0).wait(1).to({scaleY:0.82,skewX:0.1,x:-49.4,y:40.8},0).wait(1).to({skewX:0.2,x:-48.8,y:40.6},0).wait(1).to({scaleY:0.83,skewX:0.3,x:-48.4,y:40.5},0).wait(1).to({skewX:0.4,x:-48.1,y:40.4},0).wait(1).to({skewX:0.5,x:-48},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:0.4,x:-48.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:-48.3},0).wait(1).to({skewX:0.3,x:-48.4},0).wait(1).to({x:-48.6},0).wait(1).to({skewX:0.2,x:-48.7},0).wait(1).to({x:-48.9},0).wait(1).to({skewX:0.1,x:-49.1},0).wait(1).to({x:-49.2},0).wait(1).to({x:-49.4},0).wait(1).to({skewX:0,x:-49.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({scaleY:0.82,skewX:-0.5,x:-51.1,y:42.7},5).to({scaleY:0.83,skewX:1.5,skewY:181.5,x:-46.4,y:38},3).to({_off:true,skewX:-2,skewY:178,x:-41.8,y:39},1).wait(5));

	// chrissie_3-4fr_body_01
	this.instance_10 = new lib.Body("single",0);
	this.instance_10.setTransform(-56.5,44.2,0.825,0.825,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleY:0.81,skewX:1.2,skewY:181.7,x:-56.8,y:55.3},6).wait(1).to({startPosition:0},0).to({scaleY:0.82,skewX:-1,skewY:180,x:-56.1,y:59.7},6).wait(1).to({regX:-13.6,regY:-28.5,skewX:-1,x:-45.1,y:36.3},0).wait(1).to({skewX:-0.9,x:-44.9,y:36.2},0).wait(1).to({scaleY:0.82,skewX:-0.8,x:-44.6,y:36.1},0).wait(1).to({skewX:-0.7,x:-44.1,y:35.9},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-43.5,y:35.8},0).wait(1).to({scaleY:0.82,skewX:-0.3,x:-42.8,y:35.5},0).wait(1).to({scaleY:0.82,skewX:-0.1,x:-42.1,y:35.4},0).wait(1).to({scaleY:0.82,skewX:0.1,x:-41.5,y:35.1},0).wait(1).to({skewX:0.2,x:-40.8,y:35},0).wait(1).to({scaleY:0.83,skewX:0.3,x:-40.4,y:34.9},0).wait(1).to({skewX:0.4,x:-40.1,y:34.8},0).wait(1).to({regX:0,regY:0,skewX:0.5,x:-51.5,y:58.3},0).wait(1).to({regX:-13.6,regY:-28.5,x:-40,y:34.8},0).wait(1).to({skewX:0.4,x:-40.1},0).wait(1).to({x:-40.2},0).wait(1).to({x:-40.3},0).wait(1).to({skewX:0.3,x:-40.4},0).wait(1).to({x:-40.6},0).wait(1).to({skewX:0.2,x:-40.8},0).wait(1).to({x:-40.9},0).wait(1).to({skewX:0.1,x:-41.2},0).wait(1).to({x:-41.3},0).wait(1).to({x:-41.5},0).wait(1).to({skewX:0,x:-41.6},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-52.9,y:58.3},0).to({scaleY:0.82,skewX:-0.5,x:-54.3,y:60.4},5).to({scaleY:0.83,skewX:-2,skewY:178,x:-49.9,y:48.9},3).to({startPosition:0},1).to({skewX:0,skewY:180,x:-56.5,y:44.2},4).wait(1));

	// chrissie_3-4fr_shoe_cl
	this.instance_11 = new lib.FrontShoe("single",0);
	this.instance_11.setTransform(-31.3,188.4,0.825,0.825,0,0.4,-179.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({skewX:20.4,skewY:-159.6,x:-58.3,y:181.1},6).to({skewX:31.2,skewY:-148.8,x:-101.2,y:140.2},1).wait(1).to({regX:5.6,regY:26,scaleX:0.83,scaleY:0.82,skewX:37.9,skewY:-142.2,x:-124.7,y:144.5},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:44,skewY:-136.3,x:-132.2,y:133.9},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:49.2,skewY:-131.3,x:-138.4,y:124.6},0).wait(1).to({scaleY:0.82,skewX:53.3,skewY:-127.2,x:-143.2,y:117.2},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:56.1,skewY:-124.5,x:-146.5,y:112.1},0).wait(1).to({regX:0,regY:0,skewX:57.2,skewY:-123.4,x:-127.3,y:102.6},0).wait(1).to({regX:5.6,regY:26,skewX:57.1,skewY:-123.5,x:-147.5,y:110.4},0).wait(1).to({scaleX:0.83,skewX:56.7,skewY:-123.9,x:-147,y:111.1},0).wait(1).to({scaleY:0.82,skewX:56.1,skewY:-124.4,x:-146.1,y:112.1},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:55.3,skewY:-125.2,x:-144.9,y:113.5},0).wait(1).to({scaleY:0.82,skewX:54.3,skewY:-126.1,x:-143.4,y:115.3},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:53.2,skewY:-127.1,x:-141.7,y:117.2},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:52.1,skewY:-128.1,x:-140,y:119.2},0).wait(1).to({scaleX:0.82,scaleY:0.83,skewX:51,skewY:-129.1,x:-138.3,y:121.1},0).wait(1).to({scaleX:0.82,scaleY:0.83,skewX:50,skewY:-130,x:-136.8,y:122.8},0).wait(1).to({scaleY:0.83,skewX:49.2,skewY:-130.7,x:-135.7,y:124.1},0).wait(1).to({scaleX:0.82,skewX:48.8,skewY:-131.1,x:-135,y:125},0).wait(1).to({regX:0,regY:0,scaleY:0.83,skewX:48.6,skewY:-131.3,x:-115.6,y:114.5},0).wait(1).to({regX:5.6,regY:26,x:-134.8,y:125.2},0).wait(1).to({scaleY:0.83,skewX:48.7,skewY:-131.2,x:-134.9,y:125.1},0).wait(1).to({skewX:48.8,skewY:-131.1,x:-135.1,y:124.9},0).wait(1).to({scaleX:0.82,skewX:49,skewY:-130.9,x:-135.4,y:124.5},0).wait(1).to({skewX:49.2,skewY:-130.7,x:-135.8,y:124.2},0).wait(1).to({scaleY:0.83,skewX:49.4,skewY:-130.5,x:-136.2,y:123.8},0).wait(1).to({scaleX:0.82,skewX:49.7,skewY:-130.2,x:-136.6,y:123.3},0).wait(1).to({skewX:50,skewY:-130,x:-137,y:122.8},0).wait(1).to({scaleY:0.83,skewX:50.2,skewY:-129.7,x:-137.5,y:122.4},0).wait(1).to({scaleX:0.83,skewX:50.5,skewY:-129.5,x:-137.9,y:121.9},0).wait(1).to({skewX:50.7,skewY:-129.3,x:-138.2,y:121.6},0).wait(1).to({skewX:50.8,skewY:-129.2,x:-138.5,y:121.3},0).wait(1).to({scaleY:0.83,skewX:50.9,skewY:-129.1,x:-138.6,y:121.1},0).wait(1).to({regX:0,regY:0,x:-119.1,y:111.2},0).to({scaleX:0.82,scaleY:0.82,skewX:53.8,skewY:-127,x:-122.5,y:108.4},5).to({scaleX:0.83,scaleY:0.83,skewX:26.8,skewY:-153.2,x:-87.2,y:142.2},3).to({skewX:11.9,skewY:-168.1,x:-46.3,y:168.6},1).to({skewX:0.4,skewY:-179.6,x:-31.3,y:188.4},4).wait(1));

	// *chrissie_3-4fr_leg comp_cl
	this.instance_12 = new lib.FrontLeg("single",0);
	this.instance_12.setTransform(-18.6,78.4,0.825,0.825,0,0.4,-179.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleY:0.81,skewX:19.9,skewY:-159.6,x:-10.9,y:84.4},6).to({scaleY:0.83,skewX:-16.5,skewY:-196.5,x:-4.2,y:86.7,startPosition:2},1).wait(1).to({regX:53.6,regY:45.5,scaleY:0.82,skewX:-10.8,skewY:-190.5,x:-45.3,y:133.9},0).wait(1).to({scaleY:0.82,skewX:-5.6,skewY:-185.1,x:-53.4,y:132.4},0).wait(1).to({scaleY:0.82,skewX:-1.2,skewY:-180.4,x:-60,y:130.8},0).wait(1).to({scaleY:0.82,skewX:2.4,skewY:-176.7,x:-65.1,y:129.2},0).wait(1).to({regX:0,regY:0,scaleY:0.82,skewX:4.8,skewY:-174.2,x:-21.4,y:95.6},0).to({scaleX:0.83,skewX:5.9,skewY:-173.1,x:-22.2,y:96},1).wait(1).to({regX:53.6,regY:45.5,skewX:5.8,skewY:-173.2,x:-69.7,y:127.7},0).wait(1).to({skewX:5.5,skewY:-173.6,x:-69.1,y:127.8},0).wait(1).to({scaleY:0.82,skewX:5,skewY:-174.2,x:-68.1,y:128.1},0).wait(1).to({skewX:4.2,skewY:-175.1,x:-66.8,y:128.3},0).wait(1).to({scaleX:0.83,scaleY:0.82,skewX:3.4,skewY:-176.1,x:-65.2,y:128.7},0).wait(1).to({scaleY:0.82,skewX:2.4,skewY:-177.2,x:-63.4,y:129.1},0).wait(1).to({scaleY:0.82,skewX:1.4,skewY:-178.4,x:-61.4,y:129.4},0).wait(1).to({scaleY:0.82,skewX:0.5,skewY:-179.6,x:-59.5,y:129.8},0).wait(1).to({skewX:-0.4,skewY:-180.6,x:-57.8,y:130},0).wait(1).to({scaleY:0.83,skewX:-1,skewY:-181.4,x:-56.5,y:130.3},0).wait(1).to({skewX:-1.4,skewY:-181.9,x:-55.7,y:130.4},0).wait(1).to({regX:0,regY:0,skewX:-1.6,skewY:-182,x:-12.3,y:91.4},0).wait(1).to({regX:53.6,regY:45.5,x:-55.4,y:130.5},0).wait(1).to({scaleY:0.83,skewX:-1.5,skewY:-181.9,x:-55.6,y:130.4},0).wait(1).to({skewX:-1.4,skewY:-181.8,x:-55.8},0).wait(1).to({scaleY:0.83,skewX:-1.2,skewY:-181.6,x:-56.1,y:130.3},0).wait(1).to({skewX:-1.1,skewY:-181.4,x:-56.5},0).wait(1).to({skewX:-0.9,skewY:-181.2,x:-56.9,y:130.2},0).wait(1).to({skewX:-0.6,skewY:-180.9,x:-57.4,y:130.1},0).wait(1).to({skewX:-0.4,skewY:-180.6,x:-57.9,y:130},0).wait(1).to({skewX:-0.2,skewY:-180.3,x:-58.3,y:129.9},0).wait(1).to({skewX:0,skewY:-180.1,x:-58.7},0).wait(1).to({skewX:0.2,skewY:-179.8,x:-59.1,y:129.8},0).wait(1).to({skewX:0.3,skewY:-179.7,x:-59.3,y:129.7},0).wait(1).to({skewX:0.4,skewY:-179.6,x:-59.5},0).wait(1).to({regX:0,regY:0,x:-15,y:92.5},0).to({scaleY:0.82,skewX:2.7,skewY:-176.9,x:-17.8,y:94.9},5).to({scaleY:0.83,skewX:-23.7,skewY:-203.7,x:0.2,y:82.6},3).to({skewX:11.9,skewY:-168.1,x:-12,y:63.4,startPosition:0},1).to({skewX:0.4,skewY:-179.6,x:-18.6,y:78.4},4).wait(1));

	// BackLeg
	this.instance_13 = new lib.BackLeg("synched",0);
	this.instance_13.setTransform(-77.4,139.1,0.85,0.85,0,0,0,50.4,96.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(53));

	// chrissie_3-4fr_arm fr_01
	this.instance_14 = new lib.FarArm("single",0);
	this.instance_14.setTransform(-84.4,-40.4,0.825,0.825,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({scaleX:0.84,scaleY:0.74,skewX:-4.6,skewY:185.3,x:-80.8,y:-28.1},7).wait(1).to({regX:15.4,regY:52.8,scaleX:0.84,scaleY:0.73,skewX:-4.9,x:-91.5,y:9.8},0).wait(1).to({scaleY:0.73,skewX:-5.2,x:-92.4,y:10.3},0).wait(1).to({scaleY:0.73,skewX:-5.4,x:-93.2,y:10.6},0).wait(1).to({scaleY:0.73,skewX:-5.5,x:-93.9,y:10.9},0).wait(1).to({scaleX:0.84,skewX:-5.6,x:-94.3,y:11.1},0).wait(1).to({regX:0,regY:0,scaleY:0.73,skewX:-5.7,x:-85.5,y:-26},0).wait(1).to({regX:15.4,regY:52.8,x:-94.4,y:11.2},0).wait(1).to({scaleY:0.73,skewX:-5.6,x:-94.2,y:11.1},0).wait(1).to({scaleX:0.84,skewX:-5.5,x:-93.7,y:10.9},0).wait(1).to({skewX:-5.4,x:-93.1,y:10.8},0).wait(1).to({scaleY:0.73,skewX:-5.2,x:-92.5,y:10.6},0).wait(1).to({skewX:-5,x:-91.7,y:10.3},0).wait(1).to({scaleX:0.84,scaleY:0.73,skewX:-4.8,x:-90.9,y:10.1},0).wait(1).to({skewX:-4.6,x:-90.2,y:9.9},0).wait(1).to({scaleY:0.73,skewX:-4.4,x:-89.5,y:9.7},0).wait(1).to({skewX:-4.3,x:-89,y:9.5},0).wait(1).to({skewX:-4.2,x:-88.7,y:9.4},0).wait(1).to({regX:0,regY:0,x:-78.6,y:-28.1},0).wait(1).to({regX:15.4,regY:52.8,scaleY:0.74,x:-88.6,y:9.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:-88.8},0).wait(1).to({skewX:-4.3,x:-88.9},0).wait(1).to({x:-89},0).wait(1).to({x:-89.2},0).wait(1).to({skewX:-4.4,x:-89.5},0).wait(1).to({x:-89.7},0).wait(1).to({skewX:-4.5,x:-89.8},0).wait(1).to({x:-90},0).wait(1).to({skewX:-4.6,x:-90.2},0).wait(1).to({x:-90.3},0).wait(1).to({x:-90.4},0).wait(1).to({regX:0,regY:0,x:-80.8,y:-28.1},0).to({scaleX:0.84,scaleY:0.73,skewX:-5.1,x:-82.8,y:-25},5).to({scaleX:0.83,scaleY:0.83,skewX:-3,skewY:177,x:-85.6,y:-40.9},4).to({skewX:0,skewY:180,x:-84.4,y:-40.4},4).wait(1));

	// *chrissie_3-4fr_hand far comp
	this.instance_15 = new lib.FarHand("single",6);
	this.instance_15.setTransform(-103.8,46.9,0.825,0.825,0,-1.2,178.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({x:-100.1,y:48.3},7).wait(1).to({regX:14.1,regY:10.4,scaleY:0.82,skewX:-1.5,x:-112.4,y:57.4},0).wait(1).to({scaleY:0.82,skewX:-1.7,x:-113.2,y:57.8},0).wait(1).to({scaleY:0.82,skewX:-1.9,x:-113.8,y:58.1},0).wait(1).to({scaleY:0.82,skewX:-2.1,x:-114.3,y:58.3},0).wait(1).to({skewX:-2.2,x:-114.7,y:58.4},0).wait(1).to({regX:0,regY:0,scaleY:0.82,skewX:-2.3,x:-103.5,y:49.8},0).wait(1).to({regX:14.1,regY:10.4,skewX:-2.2,x:-114.7,y:58.5},0).wait(1).to({scaleY:0.82,x:-114.6,y:58.4},0).wait(1).to({skewX:-2.1,x:-114.2,y:58.3},0).wait(1).to({scaleY:0.82,skewX:-1.9,x:-113.8,y:58.2},0).wait(1).to({skewX:-1.8,x:-113.3,y:58},0).wait(1).to({scaleY:0.82,skewX:-1.6,x:-112.6,y:57.9},0).wait(1).to({scaleY:0.82,skewX:-1.4,x:-112,y:57.7},0).wait(1).to({scaleY:0.82,skewX:-1.2,x:-111.4,y:57.5},0).wait(1).to({skewX:-1,x:-110.9,y:57.3},0).wait(1).to({scaleX:0.83,scaleY:0.83,skewX:-0.9,x:-110.5,y:57.2},0).wait(1).to({skewX:-0.8,x:-110.2,y:57.1},0).wait(1).to({regX:0,regY:0,x:-98.6,y:48.3},0).wait(1).to({regX:14.1,regY:10.4,x:-110.2,y:57.1},0).wait(1).to({startPosition:6},0).wait(1).to({x:-110.3},0).wait(1).to({startPosition:6},0).wait(1).to({skewX:-0.9,x:-110.5},0).wait(1).to({x:-110.6},0).wait(1).to({skewX:-1,x:-110.8},0).wait(1).to({scaleX:0.83,x:-111},0).wait(1).to({skewX:-1.1,x:-111.1},0).wait(1).to({x:-111.3},0).wait(1).to({skewX:-1.2,x:-111.4},0).wait(1).to({x:-111.5},0).wait(1).to({startPosition:6},0).wait(1).to({regX:0,regY:0,x:-100.1,y:48.3},0).to({scaleY:0.82,skewX:-1.7,x:-101.7,y:50.5},5).to({scaleY:0.83,skewX:-1.2,x:-100.4,y:47.8},4).to({x:-103.8,y:46.9},4).wait(1));

	// chrissie_3-4fr_crutch far_01
	this.instance_16 = new lib.FarCrutch("single",0);
	this.instance_16.setTransform(-122.8,41.8,0.825,0.825,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({x:-119.3,y:43.2},7).wait(1).to({regX:-2.4,regY:85.2,scaleY:0.82,skewX:-0.3,x:-117.8,y:113.7},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-118.3,y:114},0).wait(1).to({scaleY:0.82,skewX:-0.7,x:-118.7,y:114.2},0).wait(1).to({scaleY:0.82,skewX:-0.9,x:-119.1,y:114.3},0).wait(1).to({scaleY:0.82,skewX:-1,x:-119.3,y:114.4},0).wait(1).to({regX:0,regY:0,x:-122.7,y:44.7},0).wait(1).to({regX:-2.4,regY:85.2,x:-119.4,y:114.5},0).wait(1).to({skewX:-0.9,x:-119.2,y:114.4},0).wait(1).to({scaleY:0.82,skewX:-0.8,x:-119},0).wait(1).to({skewX:-0.7,x:-118.7,y:114.3},0).wait(1).to({scaleY:0.82,skewX:-0.5,x:-118.3,y:114.1},0).wait(1).to({scaleY:0.82,skewX:-0.3,x:-117.9,y:114},0).wait(1).to({scaleY:0.82,skewX:-0.1,x:-117.5,y:113.9},0).wait(1).to({scaleY:0.82,skewX:0.1,x:-117.1,y:113.8},0).wait(1).to({skewX:0.2,x:-116.7,y:113.6},0).wait(1).to({scaleY:0.83,skewX:0.3,x:-116.5},0).wait(1).to({skewX:0.4,x:-116.3,y:113.5},0).wait(1).to({regX:0,regY:0,skewX:0.5,x:-117.7,y:43.2},0).wait(1).to({regX:-2.4,regY:85.2,x:-116.2,y:113.5},0).wait(1).to({skewX:0.4,x:-116.3},0).wait(1).to({startPosition:0},0).wait(1).to({x:-116.4},0).wait(1).to({skewX:0.3,x:-116.5},0).wait(1).to({x:-116.6},0).wait(1).to({skewX:0.2,x:-116.7},0).wait(1).to({x:-116.8},0).wait(1).to({skewX:0.1,x:-116.9},0).wait(1).to({x:-117},0).wait(1).to({x:-117.1},0).wait(1).to({skewX:0,x:-117.2},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-119.3,y:43.2},0).to({scaleY:0.82,skewX:-0.5,x:-120.8,y:45.5},5).to({scaleY:0.83,skewX:0,x:-119.4,y:42.8},4).to({x:-122.8,y:41.8},4).wait(1));

	// chrissie_shadow
	this.instance_17 = new lib.ChrissieShadow();
	this.instance_17.setTransform(-46.1,221.7,0.825,0.825,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({x:-42.5,y:223},7).wait(1).to({regX:2,regY:1.1,x:-44.2,y:223.9},0).wait(5).to({regX:0,regY:0,x:-42.5,y:223},0).wait(1).to({regX:2,regY:1.1,x:-44.2,y:223.9},0).wait(11).to({regX:0,regY:0,x:-42.5,y:223},0).wait(1).to({regX:2,regY:1.1,x:-44.2,y:223.9},0).wait(13).to({regX:0,regY:0,x:-42.5,y:223},0).wait(5).to({x:-42.7,y:222.6},4).to({x:-46.1,y:221.7},4).wait(1));

	// chrissie_3-4fr_skirt_Underlay
	this.instance_18 = new lib.chrissie_34fr_skirt_01_1("single",4);
	this.instance_18.setTransform(-45,48.7,0.825,0.825,0,0,180);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({_off:false},0).wait(1).to({regX:-13.2,regY:85.5,x:-37.6,y:118.5},0).wait(1).to({x:-40.7,y:117.9},0).wait(1).to({x:-43.4,y:117.3},0).wait(1).to({x:-45.6,y:116.9},0).wait(1).to({x:-47.1,y:116.6},0).wait(1).to({regX:0,regY:0,x:-58.6,y:46},0).wait(1).to({regX:-13.2,regY:85.5,x:-47.4,y:116.5},0).wait(1).to({x:-46.9,y:116.7},0).wait(1).to({skewX:0.1,x:-45.8,y:116.8},0).wait(1).to({x:-44.4,y:117.1},0).wait(1).to({skewX:0.2,x:-42.8,y:117.4},0).wait(1).to({x:-40.9,y:117.8},0).wait(1).to({skewX:0.3,x:-38.9,y:118.1},0).wait(1).to({x:-37,y:118.5},0).wait(1).to({skewX:0.4,x:-35.4,y:118.8},0).wait(1).to({x:-34.1,y:119},0).wait(1).to({skewX:0.5,x:-33.3,y:119.1},0).wait(1).to({regX:0,regY:0,x:-43.4,y:48.7},0).wait(1).to({regX:-13.2,regY:85.5,x:-33.1,y:119.2},0).wait(1).to({skewX:0.4},0).wait(1).to({startPosition:4},0).wait(1).to({x:-33.2},0).wait(1).to({skewX:0.3,x:-33.3},0).wait(1).to({x:-33.4},0).wait(1).to({skewX:0.2,x:-33.5},0).wait(1).to({x:-33.7},0).wait(1).to({skewX:0.1},0).wait(1).to({x:-33.8},0).wait(1).to({x:-33.9},0).wait(1).to({skewX:0,x:-34},0).wait(1).to({startPosition:4},0).wait(1).to({regX:0,regY:0,x:-45,y:48.7},0).to({scaleY:0.82,skewX:-0.5,x:-53.2,y:50.9},5).to({scaleY:0.83,skewX:0,x:-45,y:44.6},3).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-230.7,-286,317,541.7);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Chrissie("synched",0);
	this.instance.setTransform(275.5,259.8,1,1,0,0,0,-86.4,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(406.2,279.2,317,541.7);

})(window.animPG06Chrissie = window.animPG06Chrissie||{});