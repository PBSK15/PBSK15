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



(lib.Bitmap1 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.elaina = function() {
	this.spriteSheet = sbe.loader.get('pg07-anim-anim');
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.XtraFingers = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-22.6,-31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-31,45,62);


(lib.chrissie_cowboy_34fr_SL_cowboyhat_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-177.6,-170.9,0.821,0.821,0,-72.2,107.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-254,-170.9,430.3,351.7);


(lib.chrissie_34fr_skirt_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bottom pipping gradient
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-113.9,-24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.9,-24,202,150);


(lib.chrissie_34fr_shoe_fr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap24();
	this.instance.setTransform(-36.9,-12.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-12.4,91,58);


(lib.chrissie_34fr_shoe_cl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_leg frame_lower_cl
	this.instance = new lib.Bitmap23();
	this.instance.setTransform(-42.4,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.4,-9.5,96,71);


(lib.chrissie_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AusD2QmEhmgBiQQABiQGEhmQGGhlImAAQImAAGFBlQGGBmABCQQgBCQmGBmQmFBmomAAQomAAmGhmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-34.8,266,69.8);


(lib.chrissie_34fr_neck_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Chrissie_34fr_neck
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-21.5,-43.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-43.3,72,58);


(lib.chrissie_34fr_legcomp_fr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_lower leg_fr
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(-38.7,-23.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.7,-23.6,82,164);


(lib.chrissie_34fr_legcomp_cl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_lower leg_cl
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(-38.9,-24.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-24.7,85,173);


(lib.chrissie_cowboy_34fr_SL_headcomp_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_cowboy_3-4fr_SL_cowboy hat_01
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-195.6,-274.3);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-195.6,-274.3);

	this.instance_2 = new lib.Bitmap3();
	this.instance_2.setTransform(-195.6,-274.3);

	this.instance_3 = new lib.Bitmap8();
	this.instance_3.setTransform(-128.9,-234.3);

	this.instance_4 = new lib.Bitmap9();
	this.instance_4.setTransform(-128.9,-234.3);

	this.instance_5 = new lib.Bitmap7();
	this.instance_5.setTransform(-128.9,-234.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},22).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.instance}]},38).to({state:[]},1).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195.6,-274.3,383,302);


(lib.chrissie_34fr_hand_fr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-18.9,-3.9);

	this.instance_1 = new lib.Bitmap12();
	this.instance_1.setTransform(-5.4,-24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},24).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.9,-3.9,51,44);


(lib.chrissie_34fr_hand_cl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-24.5,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-5.5,49,52);


(lib.chrissie_34fr_crutchfar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// high light
	this.instance = new lib.Bitmap27();
	this.instance.setTransform(-23.9,-35.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-35.3,43,241);


(lib.chrissie_34fr_crutchcl_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// high lights
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-26.3,-48.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-48.3,64,256);


(lib.chrissie_34fr_collar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line_gradient
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-48.6,-30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.6,-30.1,97,61);


(lib.chrissie_34fr_body_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4_fr_button
	this.instance = new lib.Bitmap22();
	this.instance.setTransform(-86.6,-123.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.6,-123.5,146,190);


(lib.chrissie_34fr_belt_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient
	this.instance = new lib.Bitmap20();
	this.instance.setTransform(-58.5,-22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.5,-22.4,117,45);


(lib.chrissie_34fr_armfr_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_arm brace_cl
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-11,-7.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(31));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-7.4,106,98);


(lib.chrissie_34fr_armcls_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chrissie_3-4fr_arm brace_cl
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-66,-11.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-11.9,80,125);


(lib.BKofhat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(196,-69.9,1,1,0,3.4,-176.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196,-92.8,392,185.6);


(lib.Chrissie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Xtra hand
	this.instance = new lib.XtraFingers("synched",0);
	this.instance.setTransform(-160.9,-398.5,1.293,0.994,-0.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:0.99,rotation:3.2,x:-165.1,y:-385.7},2).to({regY:-0.1,x:-142.6,y:-408.2},9).to({startPosition:0},12).to({regY:0,x:-165.1,y:-385.7},5).to({regX:-0.1,scaleX:1.11,scaleY:1.11,rotation:0,skewX:4.7,skewY:9.8,x:-156.5,y:-403.6},5).to({_off:true},1).wait(9));

	// HAt
	this.instance_1 = new lib.chrissie_cowboy_34fr_SL_cowboyhat_01("single",0);
	this.instance_1.setTransform(-152.1,-554.4,0.994,0.994,0,-71.8,108.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({skewX:-89.5,skewY:90.5,x:-182.1,y:-540.6},2).to({skewX:-82.3,skewY:97.7,x:-138,y:-567},9).to({startPosition:0},12).to({skewX:-89.5,skewY:90.5,x:-182.1,y:-540.6},5).to({skewX:-71.8,skewY:108.2,x:-152.1,y:-554.4},5).wait(1).to({skewX:-50.3,skewY:129.7,x:-111.5,y:-564.5},0).to({_off:true},1).wait(8));

	// *chrissie_3-4fr_hand far comp
	this.instance_2 = new lib.chrissie_34fr_hand_fr("single",24);
	this.instance_2.setTransform(-133.4,-266.7,1.123,1.127,0,97.5,-87.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.12,scaleY:1.12,skewX:120.8,skewY:-64.2,x:-161.7,y:-316.9},1).to({scaleX:1.13,skewX:144.3,skewY:-40.7,x:-158.1,y:-383.1},1).to({scaleX:1.14,scaleY:1.12,skewX:140.8,skewY:-44.3,x:-151.7,y:-398.6,startPosition:27},3).wait(1).to({regX:11.8,regY:7.6,x:-152.6,y:-405.2},0).wait(1).to({x:-156.6,y:-397.8},0).wait(1).to({regX:0,regY:0,x:-162.5,y:-378.8},0).to({scaleX:1.12,scaleY:1.13,skewX:102,skewY:-82.2,x:-136.9,y:-381.6,startPosition:1},1).to({x:-144.1,y:-371},2).to({scaleX:1.12,scaleY:1.12,skewX:109.2,skewY:-75.1,x:-121.7,y:-394.1},9).to({startPosition:1},12).to({scaleX:1.12,scaleY:1.13,skewX:102,skewY:-82.2,x:-144.1,y:-371},5).to({skewX:103.5,skewY:-80.7,x:-133.9,y:-385.1},5).to({scaleX:1.14,scaleY:1.12,skewX:140.8,skewY:-44.3,x:-162.5,y:-378.8,startPosition:27},1).to({x:-159.7,y:-398.6},3).to({scaleX:1.14,skewX:145,skewY:-40.1,x:-152.7,y:-394.4,startPosition:24},1).to({scaleX:1.14,skewX:140.7,skewY:-44.3,x:-161.1,y:-382.7},2).to({scaleX:1.13,scaleY:1.12,skewX:119.1,skewY:-65.9,x:-163.2,y:-320.9},1).to({scaleX:1.12,scaleY:1.13,skewX:97.5,skewY:-87.4,x:-133.4,y:-266.7},1).wait(1));

	// chrissie_cowboy_3-4fr_SL_head comp_01 
	this.instance_3 = new lib.chrissie_cowboy_34fr_SL_headcomp_01("synched",22,false);
	this.instance_3.setTransform(3.6,-389.9,1.123,1.123,0,6.3,-173.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:-4.2,regY:-123.3,scaleX:1.12,skewX:2.3,skewY:-178.1,x:18.4,y:-524.7,startPosition:23},0).wait(1).to({scaleX:1.13,scaleY:1.12,skewX:-1.7,skewY:-182.4,x:13.2,y:-521.8,startPosition:24},0).wait(1).to({scaleX:1.13,scaleY:1.12,skewX:-5.6,skewY:-186.4,x:8.3,y:-518.3,startPosition:25},0).wait(1).to({scaleY:1.12,skewX:-9.2,skewY:-190.2,x:3.9,y:-514.5,startPosition:26},0).wait(1).to({scaleX:1.13,skewX:-12.3,skewY:-193.5,x:0,y:-510.7,startPosition:27},0).wait(1).to({scaleY:1.12,skewX:-15,skewY:-196.4,x:-3.3,y:-507.2,startPosition:28},0).wait(1).to({scaleX:1.13,skewX:-17.1,skewY:-198.5,x:-5.7,y:-504.2,startPosition:29},0).wait(1).to({scaleY:1.12,skewX:-18.4,skewY:-200,x:-7.4,y:-502.2,startPosition:30},0).wait(1).to({regX:0,regY:0,skewX:-18.9,skewY:-200.5,x:32.3,y:-369.4,startPosition:80},0).to({scaleX:1.13,scaleY:1.12,skewX:4.1,skewY:-176.1,x:30.8,y:-380.9,mode:"single",startPosition:82},11).to({skewX:4.1,startPosition:83},12).to({scaleX:1.13,scaleY:1.12,skewX:-9.8,skewY:-190,x:8.7,y:-377.3,mode:"synched",startPosition:75,loop:false},5).to({scaleY:1.12,skewX:-18.9,skewY:-200.5,x:32.3,y:-369.4,mode:"single",startPosition:83},5).to({scaleX:1.13,skewX:-16,skewY:-197.5,x:29.2,y:-371.7,startPosition:69},2).to({scaleX:1.12,scaleY:1.12,skewX:6.3,skewY:-173.9,x:3.6,y:-389.9,startPosition:26},7).wait(1));

	// Bk hat
	this.instance_4 = new lib.BKofhat("synched",0);
	this.instance_4.setTransform(-97.4,-574.2,0.972,0.994,-74.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({regX:-0.1,regY:-0.1,rotation:-92.3,x:-139.2,y:-573.6},2).to({regX:0.1,rotation:-85.1,x:-91.5,y:-594.4},9).to({startPosition:0},12).to({regX:-0.1,rotation:-92.3,x:-139.2,y:-573.6},5).to({regX:0,regY:0,rotation:-74.7,x:-97.4,y:-574.2},5).wait(1).to({regX:-0.1,regY:-0.1,rotation:-53.2,x:-53.4,y:-563},0).to({_off:true},1).wait(8));

	// chrissie_3-4fr_neck_01
	this.instance_5 = new lib.chrissie_34fr_neck_01("single",0);
	this.instance_5.setTransform(21.8,-366,1.123,1.123,0,3.6,-176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:14.5,regY:-14.4,scaleY:1.12,skewX:4.2,skewY:-176.2,x:9.8,y:-381.6},0).wait(1).to({scaleX:1.12,skewX:4.7,skewY:-176,x:13,y:-380.1},0).wait(1).to({scaleY:1.13,skewX:5.3,skewY:-175.8,x:16.1,y:-378.7},0).wait(1).to({scaleX:1.12,skewX:5.7,skewY:-175.6,x:18.9,y:-377.3},0).wait(1).to({scaleY:1.13,skewX:6.2,skewY:-175.5,x:21.5,y:-376.1},0).wait(1).to({skewX:6.5,skewY:-175.3,x:23.6,y:-375.1},0).wait(1).to({scaleX:1.12,skewX:6.8,skewY:-175.2,x:25.2,y:-374.4},0).wait(1).to({skewX:7,x:26.3,y:-373.8},0).wait(1).to({regX:0,regY:0,skewX:7.1,skewY:-175.1,x:40.9,y:-356.2},0).to({scaleX:1.12,scaleY:1.13,skewX:10.7,skewY:-170.1,x:41.3,y:-363.2},11).to({startPosition:0},12).to({skewX:3.5,skewY:-177.2,x:21.4,y:-360.9},5).to({scaleX:1.12,scaleY:1.13,skewX:7.1,skewY:-175.1,x:40.9,y:-356.2},5).to({scaleX:1.12,scaleY:1.12,skewX:3.6,skewY:-176.4,x:21.8,y:-366},9).wait(1));

	// chrissie_3-4fr_collar_01
	this.instance_6 = new lib.chrissie_34fr_collar_01("single",0);
	this.instance_6.setTransform(16.6,-357.4,1.123,1.123,0,3.6,-176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-0.1,regY:0.4,scaleY:1.12,skewX:4.2,skewY:-176.2,x:19.6,y:-355.4},0).wait(1).to({scaleX:1.12,skewX:4.7,skewY:-176,x:22.6,y:-353.8},0).wait(1).to({scaleY:1.13,skewX:5.3,skewY:-175.8,x:25.4,y:-352.4},0).wait(1).to({scaleX:1.12,skewX:5.7,skewY:-175.6,x:28,y:-351},0).wait(1).to({scaleY:1.13,skewX:6.2,skewY:-175.5,x:30.4,y:-349.8},0).wait(1).to({skewX:6.5,skewY:-175.3,x:32.4,y:-348.8},0).wait(1).to({scaleX:1.12,skewX:6.8,skewY:-175.2,x:33.9,y:-348},0).wait(1).to({skewX:7,x:34.9,y:-347.5},0).wait(1).to({regX:0,regY:0,skewX:7.1,skewY:-175.1,x:35.2,y:-347.8},0).to({scaleX:1.12,scaleY:1.13,skewX:10.7,skewY:-170.1,x:35,y:-355.3},11).to({startPosition:0},12).to({skewX:3.5,skewY:-177.2,x:16.2,y:-352.3},5).to({scaleX:1.12,scaleY:1.13,skewX:7.1,skewY:-175.1,x:35.2,y:-347.8},5).to({scaleX:1.12,scaleY:1.12,skewX:3.6,skewY:-176.4,x:16.6,y:-357.4},9).wait(1));

	// chrissie_3-4fr_arm cls_01
	this.instance_7 = new lib.chrissie_34fr_armcls_01("single",4);
	this.instance_7.setTransform(53.1,-357.5,1.123,1.123,0,-5.4,174.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:-26,regY:50.6,scaleX:1.12,skewX:-4.9,skewY:174.8,x:90,y:-301.8},0).wait(1).to({scaleX:1.13,scaleY:1.12,skewX:-4.3,skewY:175,x:92.4,y:-300.1},0).wait(1).to({skewX:-3.8,skewY:175.1,x:94.8,y:-298.5},0).wait(1).to({scaleX:1.13,scaleY:1.12,skewX:-3.3,skewY:175.3,x:96.9,y:-296.9},0).wait(1).to({scaleY:1.12,skewX:-2.9,skewY:175.5,x:98.9,y:-295.5},0).wait(1).to({skewX:-2.6,skewY:175.6,x:100.5,y:-294.4},0).wait(1).to({scaleX:1.13,skewX:-2.3,skewY:175.7,x:101.7,y:-293.5},0).wait(1).to({skewX:-2.1,skewY:175.8,x:102.5,y:-292.9},0).wait(1).to({regX:0,regY:0,scaleY:1.12,skewX:-2,x:71.7,y:-347.2},0).to({scaleX:1.12,scaleY:1.13,skewX:-9.8,skewY:169.5,x:75.7,y:-356.4},11).to({startPosition:4},12).to({skewX:-6.3,skewY:173,x:52.6,y:-352.6},5).to({scaleX:1.13,scaleY:1.12,skewX:-2,skewY:175.8,x:71.7,y:-347.2},5).to({scaleX:1.12,scaleY:1.12,skewX:-5.4,skewY:174.6,x:53.1,y:-357.5},9).wait(1));

	// *chrissie_3-4fr_hand close comp
	this.instance_8 = new lib.chrissie_34fr_hand_cl("single",19);
	this.instance_8.setTransform(89.5,-248.2,1.123,1.123,0,27.6,-152.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:20.5,scaleX:1.12,scaleY:1.13,skewX:28,skewY:-152.2,x:80.5,y:-226},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:28.5,skewY:-151.9,x:82.3,y:-224.3},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:29,skewY:-151.6,x:83.9,y:-222.6},0).wait(1).to({scaleX:1.11,scaleY:1.13,skewX:29.4,skewY:-151.4,x:85.5,y:-221.1},0).wait(1).to({scaleX:1.11,scaleY:1.14,skewX:29.7,skewY:-151.2,x:86.8,y:-219.7},0).wait(1).to({scaleX:1.11,scaleY:1.14,skewX:30.1,skewY:-151,x:88,y:-218.6},0).wait(1).to({scaleX:1.11,scaleY:1.14,skewX:30.3,skewY:-150.9,x:88.9,y:-217.8},0).wait(1).to({scaleX:1.11,scaleY:1.14,skewX:30.4,skewY:-150.8,x:89.5,y:-217.2},0).wait(1).to({regY:0,skewX:30.5,skewY:-150.7,x:101.6,y:-237.1},0).to({scaleX:1.11,scaleY:1.13,skewX:15.6,skewY:-164.4,x:114.4,y:-255},11).to({startPosition:19},12).to({scaleX:1.12,scaleY:1.13,skewX:26.3,skewY:-153.7,x:90.5,y:-244.3},5).to({scaleX:1.11,scaleY:1.14,skewX:30.5,skewY:-150.7,x:101.6,y:-237.1},5).to({scaleX:1.12,scaleY:1.12,skewX:27.6,skewY:-152.4,x:89.5,y:-248.2},9).wait(1));

	// chrissie_3-4fr_crutch cl_01
	this.instance_9 = new lib.chrissie_34fr_crutchcl_01("single",0);
	this.instance_9.setTransform(120.3,-240.1,1.123,1.123,0,2.2,-177.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:5.7,regY:79.7,scaleY:1.12,skewX:2.8,skewY:-177.6,x:111.3,y:-149},0).wait(1).to({skewX:3.3,skewY:-177.4,x:112.3,y:-147.2},0).wait(1).to({scaleX:1.12,skewX:3.9,skewY:-177.2,x:113.2,y:-145.5},0).wait(1).to({scaleY:1.13,skewX:4.3,skewY:-177,x:114.1,y:-144},0).wait(1).to({skewX:4.8,skewY:-176.9,x:114.9,y:-142.5},0).wait(1).to({skewX:5.1,skewY:-176.7,x:115.6,y:-141.4},0).wait(1).to({scaleX:1.12,skewX:5.4,skewY:-176.6,x:116.1,y:-140.5},0).wait(1).to({skewX:5.6,x:116.4,y:-139.9},0).wait(1).to({regX:0,regY:0,skewX:5.7,skewY:-176.5,x:131.8,y:-228.6},0).to({scaleX:1.12,scaleY:1.13,skewX:-0.8,skewY:-181.5,x:151.1,y:-245.5},11).to({skewX:-0.8},12).to({skewX:2.8,skewY:-178,x:121.3,y:-237.2},5).to({scaleX:1.12,scaleY:1.13,skewX:5.7,skewY:-176.5,x:131.8,y:-228.6},5).to({scaleX:1.12,scaleY:1.12,skewX:2.2,skewY:-177.8,x:120.3,y:-240.1},9).wait(1));

	// chrissie_3-4fr_belt_01
	this.instance_10 = new lib.chrissie_34fr_belt_01("single",0);
	this.instance_10.setTransform(27.1,-271.2,1.123,1.123,0,3.6,-176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({scaleY:1.12,skewX:4.2,skewY:-176.2,x:29.3,y:-269.7},0).wait(1).to({scaleX:1.12,skewX:4.7,skewY:-176,x:31.4,y:-268.2},0).wait(1).to({scaleY:1.13,skewX:5.3,skewY:-175.8,x:33.5,y:-266.7},0).wait(1).to({scaleX:1.12,skewX:5.7,skewY:-175.6,x:35.4,y:-265.3},0).wait(1).to({scaleY:1.13,skewX:6.2,skewY:-175.5,x:37,y:-264.1},0).wait(1).to({skewX:6.5,skewY:-175.3,x:38.5,y:-263.1},0).wait(1).to({scaleX:1.12,skewX:6.8,skewY:-175.2,x:39.6,y:-262.3},0).wait(1).to({skewX:7,x:40.3,y:-261.8},0).wait(1).to({skewX:7.1,skewY:-175.1,x:40.6,y:-261.6},0).to({scaleX:1.12,scaleY:1.13,skewX:10.7,skewY:-170.1,x:34.8,y:-268.6},11).to({startPosition:0},12).to({skewX:3.5,skewY:-177.2,x:26.8,y:-266.2},5).to({scaleX:1.12,scaleY:1.13,skewX:7.1,skewY:-175.1,x:40.6,y:-261.6},5).to({scaleX:1.12,scaleY:1.12,skewX:3.6,skewY:-176.4,x:27.1,y:-271.2},9).wait(1));

	// chrissie_3-4fr_skirt_01
	this.instance_11 = new lib.chrissie_34fr_skirt_01("single",0);
	this.instance_11.setTransform(33.3,-259.4,1.123,1.123,0,3.6,-176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-13,regY:51,scaleY:1.12,skewX:4.2,skewY:-176.2,x:45.6,y:-199.7},0).wait(1).to({scaleX:1.12,skewX:4.7,skewY:-176,x:47.1,y:-198.1},0).wait(1).to({scaleY:1.13,skewX:5.3,skewY:-175.8,x:48.6,y:-196.6},0).wait(1).to({scaleX:1.12,skewX:5.7,skewY:-175.6,x:49.8,y:-195.2},0).wait(1).to({scaleY:1.13,skewX:6.2,skewY:-175.5,x:51,y:-194},0).wait(1).to({skewX:6.5,skewY:-175.3,x:51.9,y:-192.9},0).wait(1).to({scaleX:1.12,skewX:6.8,skewY:-175.2,x:52.7,y:-192.1},0).wait(1).to({skewX:7,x:53.2,y:-191.5},0).wait(1).to({regX:0,regY:0,skewX:7.1,skewY:-175.1,x:46,y:-249.6},0).to({scaleX:1.12,scaleY:1.13,skewX:10.7,skewY:-170.1,x:39.4,y:-256},11).to({startPosition:0},12).to({skewX:3.5,skewY:-177.2,x:33,y:-254.4},5).to({scaleX:1.12,scaleY:1.13,skewX:7.1,skewY:-175.1,x:46,y:-249.6},5).to({scaleX:1.12,scaleY:1.12,skewX:3.6,skewY:-176.4,x:33.3,y:-259.4},9).wait(1));

	// chrissie_3-4fr_body_01
	this.instance_12 = new lib.chrissie_34fr_body_01("single",0);
	this.instance_12.setTransform(21.1,-247.2,1.123,1.123,0,3.6,-176.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:-13.6,regY:-28.5,scaleY:1.12,skewX:4.2,skewY:-176.2,x:40.6,y:-276.6},0).wait(1).to({scaleX:1.12,skewX:4.7,skewY:-176,x:42.8,y:-275},0).wait(1).to({scaleY:1.13,skewX:5.3,skewY:-175.8,x:44.8,y:-273.4},0).wait(1).to({scaleX:1.12,skewX:5.7,skewY:-175.6,x:46.8,y:-272},0).wait(1).to({scaleY:1.13,skewX:6.2,skewY:-175.5,x:48.5,y:-270.8},0).wait(1).to({skewX:6.5,skewY:-175.3,x:50,y:-269.7},0).wait(1).to({scaleX:1.12,skewX:6.8,skewY:-175.2,x:51.1,y:-268.8},0).wait(1).to({skewX:7,x:51.8,y:-268.3},0).wait(1).to({regX:0,regY:0,skewX:7.1,skewY:-175.1,x:33,y:-237.6},0).to({scaleX:1.12,scaleY:1.13,skewX:10.7,skewY:-170.1,x:25.6,y:-245.1},11).to({startPosition:0},12).to({skewX:3.5,skewY:-177.2,x:20.7,y:-241.8},5).to({scaleX:1.12,scaleY:1.13,skewX:7.1,skewY:-175.1,x:33,y:-237.6},5).to({scaleX:1.12,scaleY:1.12,skewX:3.6,skewY:-176.4,x:21.1,y:-247.2},9).wait(1));

	// chrissie_3-4fr_shoe_cl
	this.instance_13 = new lib.chrissie_34fr_shoe_cl("single",0);
	this.instance_13.setTransform(50.5,-50.3,1.123,1.123,0,0.4,-179.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:5.6,regY:26,x:44,y:-21.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:50.5,y:-50.3},0).to({skewX:0.3,skewY:-179.7},11).to({startPosition:0},12).to({x:50.7},5).to({skewX:0.4,skewY:-179.6,x:50.5},5).to({startPosition:0},9).wait(1));

	// *chrissie_3-4fr_leg comp_cl
	this.instance_14 = new lib.chrissie_34fr_legcomp_cl("single",0);
	this.instance_14.setTransform(68.5,-198.8,1.123,1.123,0,2.6,-177.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:3.6,regY:61.8,scaleY:1.12,skewX:3,x:62.1,y:-129.6},0).wait(1).to({skewX:3.3,x:62.8,y:-129.5},0).wait(1).to({scaleX:1.12,skewX:3.7,x:63.6},0).wait(1).to({skewX:4,x:64.3},0).wait(1).to({scaleY:1.13,skewX:4.3,x:64.9,y:-129.4},0).wait(1).to({skewX:4.5,x:65.4},0).wait(1).to({skewX:4.7,x:65.8},0).wait(1).to({scaleX:1.12,skewX:4.8,x:66.1},0).wait(1).to({regX:0,regY:0,x:76.1,y:-198.5},0).to({scaleX:1.12,scaleY:1.13,skewX:3.3,skewY:-177.5,x:71,y:-199.4},11).to({startPosition:0},12).to({scaleX:1.12},5).to({scaleX:1.12,scaleY:1.13,skewX:4.8,skewY:-177.4,x:76.1,y:-198.5},5).to({scaleX:1.12,scaleY:1.12,skewX:2.6,x:68.5,y:-198.8},9).wait(1));

	// chrissie_3-4fr_shoe_fr
	this.instance_15 = new lib.chrissie_34fr_shoe_fr("single",0);
	this.instance_15.setTransform(-10.3,-57.2,1.123,1.123,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:8.6,regY:16.5,x:-19.9,y:-38.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-10.3,y:-57.2},0).to({startPosition:0},11).to({startPosition:0},12).to({startPosition:0},5).to({startPosition:0},5).to({startPosition:0},9).wait(1));

	// *chrissie_3-4fr_leg comp_fr
	this.instance_16 = new lib.chrissie_34fr_legcomp_fr("single",0);
	this.instance_16.setTransform(0.6,-202.4,1.123,1.123,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:2.2,regY:58.3,skewX:0.4,x:-1,y:-136.8},0).wait(1).to({skewX:0.7,x:-0.2},0).wait(1).to({skewX:1,x:0.6,y:-136.7},0).wait(1).to({skewX:1.3,x:1.3},0).wait(1).to({skewX:1.6,x:2},0).wait(1).to({skewX:1.9,x:2.6},0).wait(1).to({skewX:2,x:3,y:-136.6},0).wait(1).to({skewX:2.1,x:3.3},0).wait(1).to({regX:0,regY:0,skewX:2.2,x:8.4,y:-202.1},0).to({scaleY:1.13,skewX:0.5,x:3.2,y:-202.9},11).to({startPosition:0},12).to({startPosition:0},5).to({scaleY:1.12,skewX:2.2,x:8.4,y:-202.1},5).to({skewX:0,x:0.6,y:-202.4},9).wait(1));

	// chrissie_3-4fr_arm fr_01
	this.instance_17 = new lib.chrissie_34fr_armfr_01("single",10);
	this.instance_17.setTransform(-9.5,-364.5,1.126,1.123,0,3.6,179.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:42,regY:41.5,scaleX:1.13,scaleY:1.12,skewX:32.9,skewY:209,x:-78.4,y:-334.7},0).wait(1).to({regX:0,regY:0,scaleX:1.13,scaleY:1.12,skewX:61.1,skewY:237.1,x:-13.9,y:-337.8},0).wait(1).to({regX:42,regY:41.5,scaleX:1.13,skewX:63.3,skewY:239.3,x:-77.2,y:-358.1},0).wait(1).to({regX:0,regY:0,skewX:65.3,skewY:241.3,x:-9.3,y:-338.7},0).to({scaleY:1.12,skewX:69.9,skewY:245.9,x:-14.9,y:-332.4},1).wait(1).to({regX:42,regY:41.5,scaleX:1.13,skewX:68.3,skewY:244.3,x:-79.3,y:-353.3},0).wait(1).to({scaleX:1.13,scaleY:1.12,skewX:67.1,skewY:243,x:-80.5,y:-348.3},0).wait(1).to({scaleX:1.13,skewX:66.3,skewY:242.2,x:-81.3,y:-345.1},0).wait(1).to({regX:0,regY:0,skewX:66,skewY:241.9,x:-16.8,y:-320.9},0).to({scaleX:1.13,scaleY:1.12,skewX:59.4,skewY:235.6,x:-20.1,y:-325.9},2).to({scaleX:1.13,scaleY:1.11,skewX:66.6,skewY:242.9,x:-4.4,y:-333.6},9).to({startPosition:10},12).to({scaleX:1.13,scaleY:1.12,skewX:59.4,skewY:235.6,x:-20.1,y:-325.9},5).to({scaleX:1.13,scaleY:1.12,skewX:67.5,skewY:243.3,x:-15.5,y:-321.4},5).to({scaleX:1.13,scaleY:1.12,skewX:69.9,skewY:245.9,x:-14.9,y:-332.4},4).to({scaleY:1.12,skewX:65.3,skewY:241.3,x:-9.3,y:-338.7},1).to({scaleX:1.13,skewX:61.1,skewY:237.1,x:-13.9,y:-337.8},2).to({scaleX:1.13,scaleY:1.12,skewX:3.6,skewY:179.8,x:-9.5,y:-364.5},2).wait(1));

	// chrissie_3-4fr_crutch far_01
	this.instance_18 = new lib.chrissie_34fr_crutchfar_01("single",0);
	this.instance_18.setTransform(-85.9,-323,1.123,1.123,0,-0.3,179.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:-2.4,regY:85.2,scaleX:1.12,scaleY:1.13,skewX:17.3,skewY:196.9,x:-114.4,y:-232.8},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:34.7,skewY:214,x:-143.6,y:-246.9},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:51.4,skewY:230.4,x:-167.2,y:-267.4},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:66.9,skewY:245.5,x:-183.5,y:-291},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:80.6,skewY:259,x:-192.8,y:-314.5},0).wait(1).to({scaleX:1.12,scaleY:1.13,skewX:92.2,skewY:270.3,x:-196.3,y:-335.3},0).wait(1).to({scaleX:1.12,skewX:101.2,skewY:279.1,x:-196.4,y:-351.5},0).wait(1).to({scaleY:1.13,skewX:107.1,skewY:284.9,x:-195.2,y:-361.8},0).wait(1).to({regX:0,regY:0,skewX:109.2,skewY:286.9,x:-102.7,y:-336.4},0).to({skewX:79.6,skewY:258.9,x:-92.3,y:-355.4},11).to({startPosition:0},12).to({scaleX:1.12,scaleY:1.13,skewX:72.4,skewY:251.7,x:-110.2,y:-336.5},5).to({scaleX:1.12,scaleY:1.13,skewX:110.7,skewY:288.4,x:-100.9,y:-339},5).to({scaleX:1.12,scaleY:1.12,skewX:-0.3,skewY:179.7,x:-85.9,y:-323},9).wait(1));

	// chrissie_shadow
	this.instance_19 = new lib.chrissie_shadow();
	this.instance_19.setTransform(30.3,-4.9,1.123,1.123,0,0,180);
	this.instance_19.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance_19.cache(-135,-37,270,74);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-209.1,-718.6,465.2,767.6);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.elaina();
	this.instance.setTransform(39.5,290);
	this.instance.mouseEnabled = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52));

	// Layer 1
	this.instance_1 = new lib.Chrissie("synched",0);
	this.instance_1.setTransform(546,541,1,1,0,0,0,-47.5,-416.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(615.5,623.1,810,761.6);

})(window.animPG07Anim = window.animPG07Anim||{});