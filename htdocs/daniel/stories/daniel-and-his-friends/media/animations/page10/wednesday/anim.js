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



(lib.Bitmap10 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap22 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap23 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap33 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap34 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap35 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = sbe.loader.get('pg10-anim-wednesday');
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.princewed_shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap35();
	this.instance.setTransform(-137,-38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-137,-38.8,278,80);


(lib.princewed_34fr_neck_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-42,-54.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42,-54.2,84,35);


(lib.princewed_34fr_lowerlegclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap27();
	this.instance.setTransform(-38.5,11.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,11.3,76,75);


(lib.princewed_34fr_legfar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap32();
	this.instance.setTransform(-37.8,-14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-14.5,84,115);


(lib.princewed_34fr_legclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap28();
	this.instance.setTransform(-41.8,-19.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.8,-19.9,86,123);


(lib.princewed_34fr_headcomp_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prince wed_3-4fr_crown
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-129.1,-258);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-129.1,-258);

	this.instance_2 = new lib.Bitmap5();
	this.instance_2.setTransform(-129.1,-258);

	this.instance_3 = new lib.Bitmap6();
	this.instance_3.setTransform(-129.1,-258);

	this.instance_4 = new lib.Bitmap7();
	this.instance_4.setTransform(-129.1,-258);

	this.instance_5 = new lib.Bitmap8();
	this.instance_5.setTransform(-129.1,-258);

	this.instance_6 = new lib.Bitmap9();
	this.instance_6.setTransform(-129.1,-258);

	this.instance_7 = new lib.Bitmap10();
	this.instance_7.setTransform(-129.1,-258);

	this.instance_8 = new lib.Bitmap11();
	this.instance_8.setTransform(-129.1,-258);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},216).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-129.1,-258,272,286);


(lib.PWHAnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-29.8,-3.2);

	this.instance_1 = new lib.Bitmap19();
	this.instance_1.setTransform(-37.1,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-3.2,62,55);


(lib.princewed_34fr_handfarcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand
	this.instance = new lib.Bitmap20();
	this.instance.setTransform(-19,-14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,-14.4,52,57);


(lib.princewed_34fr_gutOL_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap29();
	this.instance.setTransform(-59.9,-36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-36.6,83,54);


(lib.princewed_34fr_capeOLfar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-40.2,-25.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.2,-25.1,81,50);


(lib.princewed_34fr_capeOLclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bow
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-66,-30.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-30.4,132,61);


(lib.princewed_34fr_cape_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap34();
	this.instance.setTransform(-93.6,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.6,-10,167,219);


(lib.princewed_34fr_bootclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap26();
	this.instance.setTransform(-11.5,-12.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-12.3,105,67);


(lib.princewed_34_lowerlegfar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap31();
	this.instance.setTransform(-35.8,8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,8.1,69,70);


(lib.princewed_34_bootfar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap30();
	this.instance.setTransform(-9.4,-15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-15.8,98,62);


(lib.princewed_34fr_bodyOL_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient
	this.instance = new lib.Bitmap25();
	this.instance.setTransform(-80.5,-10.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.5,-10.4,161,64);


(lib.princewed_34fr_body_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// collar
	this.instance = new lib.Bitmap33();
	this.instance.setTransform(-74.5,-123.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-123.4,146,197);


(lib.princewed_34fr_belt_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tag
	this.instance = new lib.Bitmap24();
	this.instance.setTransform(-74.5,-16.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-16.7,149,34);


(lib.PWArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-54,-12);

	this.instance_1 = new lib.Bitmap16();
	this.instance_1.setTransform(-58.1,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54,-12,84,148);


(lib.princewed_34fr_armfar_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap21();
	this.instance.setTransform(-11.3,-14);

	this.instance_1 = new lib.Bitmap22();
	this.instance_1.setTransform(-39.2,-21.6);

	this.instance_2 = new lib.Bitmap23();
	this.instance_2.setTransform(-39.2,-21.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-14,65,135);


(lib.PW = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prince wed_3-4fr_arm close_01
	this.instance = new lib.PWArm("single",0);
	this.instance.setTransform(-25.9,-14.1,0.931,0.909,0,39.9,37.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({scaleY:0.91,skewX:57.4,skewY:54.7,x:-26,y:-14.4},1).to({scaleX:0.93,scaleY:0.91,skewX:96.6,skewY:94,x:-28.5,y:-10.7,startPosition:7},1).to({scaleX:0.93,scaleY:0.92,skewX:114,skewY:111.5,x:-29.8},1).wait(1).to({regX:-14.1,regY:62,skewX:114.2,skewY:111.7,x:-76.6,y:-46.1},0).wait(1).to({skewX:114.6,skewY:112.1,x:-76.3,y:-46.4},0).wait(1).to({skewX:115.4,skewY:112.9,x:-75.9,y:-47},0).wait(1).to({skewX:116.6,skewY:114.1,x:-75.1,y:-47.9},0).wait(1).to({skewX:118,skewY:115.5,x:-74.1,y:-48.9},0).wait(1).to({skewX:119.8,skewY:117.3,x:-72.8,y:-50.2},0).wait(1).to({skewX:121.9,skewY:119.3,x:-71.3,y:-51.5},0).wait(1).to({skewX:124.3,skewY:121.8,x:-69.5,y:-53.2},0).wait(1).to({regX:0,regY:0,skewX:127,skewY:124.5,x:-29.4,y:-9.9},0).wait(3).to({startPosition:7},0).to({skewX:114,skewY:111.5,x:-29.8,y:-10.7},9).to({scaleX:0.93,scaleY:0.91,skewX:96.6,skewY:94,x:-28.5},1).to({scaleX:0.93,scaleY:0.91,skewX:57.4,skewY:54.7,x:-26,y:-14.4,startPosition:0},1).to({scaleY:0.91,skewX:39.9,skewY:37.1,x:-25.9,y:-14.1},1).to({_off:true},1).wait(11));

	// prince wed_3-4fr_hand close comp
	this.instance_1 = new lib.PWHAnd("single",0);
	this.instance_1.setTransform(-108.8,54.4,0.919,0.918,0,51.2,48.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,skewX:74,skewY:71.8,x:-134.8,y:36.4},1).to({scaleX:0.92,scaleY:0.92,skewX:118.3,skewY:116.1,x:-131.6,y:-42.2,startPosition:9},1).to({scaleX:0.92,scaleY:0.92,skewX:143.1,skewY:140.9,x:-122,y:-76.2},1).wait(1).to({regX:0.9,regY:26.5,skewX:143.3,skewY:141,x:-137,y:-95.4},0).wait(1).to({skewX:143.8,skewY:141.5,x:-136.1,y:-96.2},0).wait(1).to({skewX:144.6,skewY:142.3,x:-134.8,y:-97.5},0).wait(1).to({skewX:145.7,skewY:143.4,x:-132.9,y:-99.4},0).wait(1).to({skewX:147.1,skewY:144.9,x:-130.5,y:-101.8},0).wait(1).to({skewX:148.9,skewY:146.6,x:-127.5,y:-104.7},0).wait(1).to({skewX:151,skewY:148.7,x:-123.9,y:-108.1},0).wait(1).to({skewX:153.4,skewY:151.1,x:-119.8,y:-112},0).wait(1).to({regX:0,regY:0,skewX:156.1,skewY:153.8,x:-104.5,y:-94.4},0).wait(3).to({startPosition:9},0).to({skewX:143.1,skewY:140.9,x:-122,y:-76.2},9).to({scaleX:0.92,scaleY:0.92,skewX:118.3,skewY:116.1,x:-131.6,y:-42.2},1).to({scaleX:0.92,scaleY:0.92,skewX:74,skewY:71.8,x:-134.8,y:36.4,startPosition:0},1).to({scaleX:0.92,scaleY:0.92,skewX:51.2,skewY:48.9,x:-108.8,y:54.4},1).to({_off:true},1).wait(11));

	// prince wed_3-4fr_head comp_01
	this.instance_2 = new lib.princewed_34fr_headcomp_01("synched",217,false);
	this.instance_2.setTransform(9.4,-50,0.92,0.92,-6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:6.8,regY:-115.1,rotation:-6.1,x:4.3,y:-155.8,startPosition:218},0).wait(1).to({rotation:-5,x:6.5,y:-155.4,startPosition:219},0).wait(1).to({rotation:-3.3,x:9.7,y:-154.9,startPosition:220},0).wait(1).to({rotation:-1.3,x:13.4,y:-154.1,startPosition:221},0).wait(1).to({rotation:0.6,x:16.9,y:-153.3,startPosition:222},0).wait(1).to({rotation:1.9,x:19.5,y:-152.6,startPosition:223},0).wait(1).to({regX:0,regY:0,rotation:2.5,x:9.7,y:-46.8,startPosition:224},0).wait(1).to({regX:6.8,regY:-115.1,rotation:2.4,x:20.5,y:-152.4,startPosition:225},0).wait(1).to({rotation:2.2,startPosition:226},0).wait(1).to({regX:0,regY:0,rotation:1.8,x:10.9,y:-46.8,mode:"single",startPosition:227},0).wait(1).to({regX:6.8,regY:-115.1,rotation:1.5,x:20.8,y:-152.5},0).wait(1).to({rotation:1.1,x:21.1},0).wait(1).to({rotation:0.6,x:21.6,y:-152.6},0).wait(1).to({regX:0,regY:0,rotation:-0.1,x:16.1,y:-46.7},0).wait(1).to({regX:6.8,regY:-115.1,rotation:-1.1,x:20,y:-153.4},0).wait(1).to({rotation:-2.1,x:18.1,y:-154.1},0).wait(1).to({rotation:-2.9,x:16.4,y:-154.6},0).wait(1).to({rotation:-3.6,x:15,y:-155.1},0).wait(1).to({rotation:-4.2,x:13.8,y:-155.4},0).wait(1).to({rotation:-4.7,x:12.9,y:-155.7},0).wait(1).to({rotation:-5,x:12.3,y:-155.9},0).wait(1).to({rotation:-5.2,x:11.9,y:-156},0).wait(1).to({regX:0,regY:0,x:15.2,y:-50},0).wait(3).to({startPosition:227},0).to({rotation:-0.1,x:16.1,y:-46.7,mode:"synched",startPosition:216,loop:false},9).to({rotation:2.5,x:9.7,y:-46.8,startPosition:224},7).to({rotation:-6.5,x:9.4,y:-50,startPosition:217},7).wait(1));

	// prince wed_3-4fr_cape OL close_01
	this.instance_3 = new lib.princewed_34fr_capeOLclose_01("single",0);
	this.instance_3.setTransform(1.6,-8,0.922,0.92,0,5.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({scaleX:0.92,scaleY:0.92,y:-7.9},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:-7.6},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,x:1.5,y:-7.1},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,y:-6.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,x:1.4,y:-6.1},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,y:-5.7},0).wait(1).to({scaleX:0.94,scaleY:0.91,y:-5.6},0).wait(1).to({x:1.5},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:1.8},0).wait(1).to({skewX:5.4,skewY:2.9,x:2.3,y:-5.5},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:3.1},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:4,y:-5.4},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:5.2,y:-5.3},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:6.6,y:-5.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:6.3,y:-5.8},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:6.1,y:-6.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:5.9,y:-6.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:5.7,y:-7.2},0).wait(1).to({scaleX:0.92,x:5.5,y:-7.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:5.4,y:-7.7},0).wait(1).to({skewY:3.4,y:-7.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:5.3,y:-8},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:6.6,y:-5.2},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:1.4,y:-5.6},7).to({scaleX:0.92,scaleY:0.92,skewY:3.4,x:1.6,y:-8},7).wait(1));

	// prince wed_3-4fr_neck_01
	this.instance_4 = new lib.princewed_34fr_neck_01("single",0);
	this.instance_4.setTransform(9.4,-30.5,0.922,0.92,0,5.2,3.4,-0.1,-27.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0,regY:-36.7,scaleX:0.92,scaleY:0.92,x:10.2,y:-39.1},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:-38.7},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,y:-38.2},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,y:-37.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,x:10.1,y:-37.1},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,y:-36.7},0).wait(1).to({regY:-27.2,scaleX:0.94,scaleY:0.91,x:9.3,y:-27.9},0).wait(1).to({regY:-36.7,x:10.2,y:-36.4},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:10.5,y:-36.5},0).wait(1).to({skewX:5.4,skewY:2.9,x:11.1,y:-36.4},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:11.9},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:13,y:-36.3},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:14.2,y:-36.2},0).wait(1).to({regY:-27.2,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:14.8,y:-27.6},0).wait(1).to({regY:-36.7,scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:15.4,y:-36.8},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:15.1,y:-37.4},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:14.9,y:-37.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:14.7,y:-38.3},0).wait(1).to({scaleX:0.92,x:14.6,y:-38.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:14.5,y:-38.9},0).wait(1).to({skewY:3.4,x:14.3,y:-39.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:-39.2},0).wait(1).to({regX:-0.1,regY:-27.2,x:13.3,y:-30.5},0).wait(3).to({startPosition:0},0).to({regX:0,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:14.8,y:-27.6},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:9.3,y:-27.9},7).to({regX:-0.1,scaleX:0.92,scaleY:0.92,skewY:3.4,x:9.4,y:-30.5},7).wait(1));

	// prince wed_3-4fr_cape OL far_01
	this.instance_5 = new lib.princewed_34fr_capeOLfar_01("single",0);
	this.instance_5.setTransform(27.9,-14.9,0.922,0.92,0,5.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:0.2,regY:-0.1,scaleX:0.92,scaleY:0.92,x:28.1,y:-14.8},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:-14.6},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,x:28.2,y:-14.1},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,y:-13.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,x:28.3,y:-13.1},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,y:-12.8},0).wait(1).to({regX:0,regY:0,scaleX:0.94,scaleY:0.91,x:28.1,y:-12.6},0).wait(1).to({regX:0.2,regY:-0.1,x:28.4},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:28.7},0).wait(1).to({skewX:5.4,skewY:2.9,x:29.2,y:-12.5},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:30,y:-12.4},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:30.9,y:-12.3},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:32.1,y:-12.1},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:33.3,y:-11.9},0).wait(1).to({regX:0.2,regY:-0.1,scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:33.1,y:-12.6},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:32.8,y:-13.1},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:32.6,y:-13.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:32.4,y:-14},0).wait(1).to({scaleX:0.92,x:32.2,y:-14.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:32.1,y:-14.6},0).wait(1).to({skewY:3.4,x:32,y:-14.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:31.9,y:-14.9},0).wait(1).to({regX:0,regY:0,x:31.7},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:33.3,y:-11.9},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:28.1,y:-12.6},7).to({scaleX:0.92,scaleY:0.92,skewY:3.4,x:27.9,y:-14.9},7).wait(1));

	// prince wed_3-4fr_arm close_01
	this.instance_6 = new lib.PWArm("single",0);
	this.instance_6.setTransform(-31.3,-18.1,0.922,0.919,0,8.7,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-14.1,regY:62,scaleX:0.92,skewX:8.4,skewY:6.6,x:-52.5,y:36.9},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:7.5,skewY:5.6,x:-51.7,y:37.6},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:6.2,skewY:4.1,x:-50.7,y:38.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:4.7,skewY:2.4,x:-49.4,y:39.7},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:3.3,skewY:0.8,x:-48.2,y:40.7},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:2.2,skewY:-0.4,x:-47.3,y:41.4},0).wait(1).to({regX:0,regY:0,scaleX:0.94,skewX:1.8,skewY:-0.8,x:-32,y:-15},0).wait(1).to({regX:-14.1,regY:62,skewX:4.1,skewY:1.5,x:-48.5,y:41.1},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:11,skewY:8.4,x:-53,y:39.1},0).wait(1).to({regX:0,regY:0,scaleX:0.93,skewX:22.6,skewY:19.8,x:-25.7,y:-13.7},0).to({_off:true},1).wait(28).to({_off:false},0).to({scaleX:0.94,scaleY:0.91,skewX:1.8,skewY:-0.8,x:-32,y:-15},3).to({scaleX:0.92,scaleY:0.92,skewX:8.7,skewY:6.9,x:-31.3,y:-18.1},7).wait(1));

	// prince wed_3-4fr_hand close comp
	this.instance_7 = new lib.PWHAnd("single",0);
	this.instance_7.setTransform(-70.5,86.4,0.922,0.919,0,8.7,6.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0.9,regY:26.5,skewX:8.4,skewY:6.6,x:-72.6,y:110.8},0).wait(1).to({scaleY:0.92,skewX:7.4,skewY:5.6,x:-70.6,y:111.5},0).wait(1).to({skewX:6.1,skewY:4.2,x:-67.6,y:112.5},0).wait(1).to({scaleX:0.92,skewX:4.5,skewY:2.5,x:-64.2,y:113.7},0).wait(1).to({skewX:3.1,skewY:1,x:-60.9,y:114.8},0).wait(1).to({skewX:2,skewY:-0.2,x:-58.6,y:115.6},0).wait(1).to({regX:0,regY:0,skewX:1.6,skewY:-0.6,x:-57.9,y:91.6},0).wait(1).to({regX:0.9,regY:26.5,skewX:4.6,skewY:2.3,x:-61.7,y:113.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:13.5,skewY:11.3,x:-73.9,y:106.9},0).wait(1).to({regX:0,regY:0,skewX:28.3,skewY:26.1,x:-83,y:72.4},0).to({_off:true},1).wait(28).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,skewX:1.6,skewY:-0.6,x:-57.9,y:91.6},3).to({scaleX:0.92,scaleY:0.92,skewX:8.7,skewY:6.9,x:-70.5,y:86.4},7).wait(1));

	// prince wed_3-4fr_belt_01
	this.instance_8 = new lib.princewed_34fr_belt_01("single",0);
	this.instance_8.setTransform(6.1,71,0.922,0.92,0,5.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regY:0.2,scaleX:0.92,scaleY:0.92,x:6,y:71.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:71.4},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,y:71.7},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,y:72},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,y:72.3},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,y:72.6},0).wait(1).to({regY:0,scaleX:0.94,scaleY:0.91,y:72.5},0).wait(1).to({regY:0.2,x:6.1,y:72.7},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:6.3},0).wait(1).to({skewX:5.4,skewY:2.9,x:6.7,y:72.8},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:7.2,y:72.9},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:7.9,y:73.1},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:8.7,y:73.3},0).wait(1).to({regY:0,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:9.7},0).wait(1).to({regY:0.2,scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:9.5,y:73},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:9.3,y:72.6},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:9.2,y:72.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:9,y:71.9},0).wait(1).to({scaleX:0.92,x:8.9,y:71.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:71.4},0).wait(1).to({skewY:3.4,x:8.8,y:71.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:71.2},0).wait(1).to({regY:0,y:71},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:9.7,y:73.3},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:6,y:72.5},7).to({scaleX:0.92,scaleY:0.92,skewY:3.4,x:6.1,y:71},7).wait(1));

	// prince wed_3-4fr_body OL_01
	this.instance_9 = new lib.princewed_34fr_bodyOL_01("single",0);
	this.instance_9.setTransform(4.3,74.4,0.922,0.92,0,5.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regY:21.5,scaleX:0.92,scaleY:0.92,x:2.5,y:94.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:94.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,y:94.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,x:2.4,y:94.9},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,y:95.2},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,y:95.4},0).wait(1).to({regY:0,scaleX:0.94,scaleY:0.91,x:4.2,y:76},0).wait(1).to({regY:21.5,x:2.5,y:95.5},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:2.7},0).wait(1).to({skewX:5.4,skewY:2.9,x:3,y:95.6},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:3.5,y:95.7},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:4.1,y:95.8},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:4.9,y:96.1},0).wait(1).to({regY:0,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:7.9,y:76.7},0).wait(1).to({regY:21.5,scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:5.6,y:95.8},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:5.4,y:95.4},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:5.3,y:95.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:5.2,y:94.8},0).wait(1).to({scaleX:0.92,x:5.1,y:94.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:5,y:94.3},0).wait(1).to({skewY:3.4,x:4.9,y:94.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:94.1},0).wait(1).to({regY:0,x:7,y:74.4},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:7.9,y:76.7},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:4.2,y:76},7).to({scaleX:0.92,scaleY:0.92,skewY:3.4,x:4.3,y:74.4},7).wait(1));

	// prince wed_3-4fr_boot close_01
	this.instance_10 = new lib.princewed_34fr_bootclose_01("single",0);
	this.instance_10.setTransform(-48.2,213.6,0.922,0.92,0,1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:41,regY:21.1,x:-11,y:233},0).wait(1).to({skewY:-0.1},0).wait(1).to({skewX:1.6,skewY:-0.2,y:233.1},0).wait(1).to({skewY:-0.3,x:-11.1,y:233.2},0).wait(1).to({skewY:-0.4,y:233.3},0).wait(1).to({y:233.4},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:-48.4,y:214.3},0).wait(1).to({regX:41,regY:21.1,skewY:-0.4,x:-11.1,y:233.4},0).wait(1).to({x:-11,y:233.5},0).wait(1).to({skewX:1.7,skewY:-0.3,y:233.6},0).wait(1).to({skewX:1.9,skewY:-0.2,x:-10.8,y:233.7},0).wait(1).to({skewX:2.1,skewY:-0.1,x:-10.7,y:233.9},0).wait(1).to({skewX:2.3,skewY:0.1,x:-10.4,y:234},0).wait(1).to({regX:0,regY:0,skewX:2.5,skewY:0.3,x:-47.2,y:214.7},0).wait(1).to({regX:41,regY:21.1,skewY:0.2,x:-10.3,y:234},0).wait(1).to({y:233.7},0).wait(1).to({skewY:0.1,y:233.6},0).wait(1).to({x:-10.4,y:233.4},0).wait(1).to({y:233.2},0).wait(1).to({skewY:0,y:233.1},0).wait(1).to({skewX:2.4,y:233},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-47.4,y:213.6},0).wait(3).to({startPosition:0},0).to({skewX:2.5,skewY:0.3,x:-47.2,y:214.7},9).to({skewX:1.6,skewY:-0.5,x:-48.4,y:214.3},7).to({skewX:1.7,skewY:0,x:-48.2,y:213.6},7).wait(1));

	// prince wed_3-4fr_lower leg close_01
	this.instance_11 = new lib.princewed_34fr_lowerlegclose_01("single",0);
	this.instance_11.setTransform(-20.3,164,0.922,0.92,0,1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:-0.6,regY:48.8,x:-22.2,y:208.8},0).wait(1).to({skewY:-0.1,y:208.9},0).wait(1).to({skewX:1.6,skewY:-0.2,y:209},0).wait(1).to({skewY:-0.3,y:209.1},0).wait(1).to({skewY:-0.4,x:-22.3,y:209.2},0).wait(1).to({y:209.3},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:-20.6,y:164.5},0).wait(1).to({regX:-0.6,regY:48.8,skewY:-0.4,x:-22.3,y:209.4},0).wait(1).to({x:-22.2},0).wait(1).to({skewX:1.7,skewY:-0.3,x:-22.1,y:209.5},0).wait(1).to({skewX:1.9,skewY:-0.2,x:-21.8,y:209.6},0).wait(1).to({skewX:2.1,skewY:-0.1,x:-21.6,y:209.8},0).wait(1).to({skewX:2.3,skewY:0.1,x:-21.3,y:210},0).wait(1).to({regX:0,regY:0,skewX:2.5,skewY:0.3,x:-18.4,y:165.4},0).wait(1).to({regX:-0.6,regY:48.8,skewY:0.2,x:-21,y:209.9},0).wait(1).to({x:-21.1,y:209.7},0).wait(1).to({skewY:0.1,y:209.4},0).wait(1).to({x:-21.2,y:209.2},0).wait(1).to({y:209.1},0).wait(1).to({skewY:0,y:209},0).wait(1).to({skewX:2.4,y:208.9},0).wait(1).to({y:208.8},0).wait(1).to({regX:0,regY:0,x:-18.8,y:164},0).wait(3).to({startPosition:0},0).to({skewX:2.5,skewY:0.3,x:-18.4,y:165.4},9).to({skewX:1.6,skewY:-0.5,x:-20.6,y:164.5},7).to({skewX:1.7,skewY:0,x:-20.3,y:164},7).wait(1));

	// prince wed_3-4fr_leg close_01
	this.instance_12 = new lib.princewed_34fr_legclose_01("single",0);
	this.instance_12.setTransform(-23.7,97.8,0.922,0.919,0,-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:1.2,regY:41.5,x:-21.7,y:135.9},0).wait(1).to({skewY:-0.1,x:-21.8,y:136},0).wait(1).to({skewY:-0.2,y:136.1},0).wait(1).to({skewY:-0.3,x:-21.9,y:136.2},0).wait(1).to({skewY:-0.4,y:136.3},0).wait(1).to({x:-22},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:-24,y:98.2},0).wait(1).to({regX:1.2,regY:41.5,skewX:-1.2,skewY:-0.4,x:-22,y:136.4},0).wait(1).to({x:-21.8},0).wait(1).to({skewX:-1.1,skewY:-0.3,x:-21.5,y:136.5},0).wait(1).to({skewX:-0.9,skewY:-0.2,x:-21.2,y:136.6},0).wait(1).to({skewX:-0.7,skewY:-0.1,x:-20.6,y:136.8},0).wait(1).to({skewX:-0.5,skewY:0.1,x:-20,y:137},0).wait(1).to({regX:0,regY:0,skewX:-0.3,skewY:0.3,x:-20.6,y:99.1},0).wait(1).to({regX:1.2,regY:41.5,skewY:0.2,x:-19.5,y:137},0).wait(1).to({skewX:-0.4,y:136.7},0).wait(1).to({skewY:0.1,x:-19.6,y:136.5},0).wait(1).to({skewX:-0.5,x:-19.7,y:136.3},0).wait(1).to({x:-19.8,y:136.2},0).wait(1).to({skewY:0,y:136.1},0).wait(1).to({skewX:-0.6,x:-19.9,y:136},0).wait(1).to({x:-19.8,y:135.9},0).wait(1).to({regX:0,regY:0,x:-21.4,y:97.8},0).wait(3).to({startPosition:0},0).to({skewX:-0.3,skewY:0.3,x:-20.6,y:99.1},9).to({skewX:-1.3,skewY:-0.5,x:-24,y:98.2},7).to({skewY:0,x:-23.7,y:97.8},7).wait(1));

	// prince wed_3-4fr_gut OL_01
	this.instance_13 = new lib.princewed_34fr_gutOL_01("single",0);
	this.instance_13.setTransform(17.8,126.8,0.922,0.919,0,-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:-18.4,regY:-9.6,x:0.6,y:118},0).wait(1).to({skewY:-0.1},0).wait(1).to({skewY:-0.2,x:0.5,y:118.1},0).wait(1).to({skewY:-0.3,y:118.2},0).wait(1).to({skewY:-0.4,x:0.4},0).wait(1).to({y:118.3},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:17.6,y:127},0).wait(1).to({regX:-18.4,regY:-9.6,skewX:-1.2,skewY:-0.4,x:0.5,y:118.4},0).wait(1).to({x:0.6},0).wait(1).to({skewX:-1.1,skewY:-0.3,x:1,y:118.6},0).wait(1).to({skewX:-0.9,skewY:-0.2,x:1.3,y:118.7},0).wait(1).to({skewX:-0.7,skewY:-0.1,x:1.9,y:118.9},0).wait(1).to({skewX:-0.5,skewY:0.1,x:2.5,y:119.2},0).wait(1).to({regX:0,regY:0,skewX:-0.3,skewY:0.3,x:20.3,y:128.5},0).wait(1).to({regX:-18.4,regY:-9.6,skewY:0.2,x:3.2,y:119.2},0).wait(1).to({skewX:-0.4,x:3.1,y:118.9},0).wait(1).to({skewY:0.1,x:3,y:118.7},0).wait(1).to({skewX:-0.5,x:2.9,y:118.4},0).wait(1).to({x:2.8,y:118.3},0).wait(1).to({skewY:0,y:118.1},0).wait(1).to({skewX:-0.6,x:2.7,y:118},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:19.8,y:126.8},0).wait(3).to({startPosition:0},0).to({skewX:-0.3,skewY:0.3,x:20.3,y:128.5},9).to({skewX:-1.3,skewY:-0.5,x:17.6,y:127},7).to({skewY:0,x:17.8,y:126.8},7).wait(1));

	// prince wed_3-4_boot far_01
	this.instance_14 = new lib.princewed_34_bootfar_01("single",0);
	this.instance_14.setTransform(6.7,206,0.922,0.92,0,1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:39.6,regY:15.2,x:42.8,y:219.9},0).wait(1).to({skewY:-0.1},0).wait(1).to({skewX:1.6,skewY:-0.2,x:42.7},0).wait(1).to({skewY:-0.3},0).wait(1).to({skewY:-0.4,x:42.6},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:6.5,y:206.3},0).wait(1).to({regX:39.6,regY:15.2,skewY:-0.4,x:42.6,y:219.9},0).wait(1).to({x:42.7,y:220.1},0).wait(1).to({skewX:1.7,skewY:-0.3,x:42.8,y:220.2},0).wait(1).to({skewX:1.9,skewY:-0.2,x:43,y:220.5},0).wait(1).to({skewX:2.1,skewY:-0.1,x:43.2,y:220.8},0).wait(1).to({skewX:2.3,skewY:0.1,x:43.4,y:221.2},0).wait(1).to({regX:0,regY:0,skewX:2.5,skewY:0.3,x:7.8,y:207.5},0).wait(1).to({regX:39.6,regY:15.2,skewY:0.2,x:43.7,y:221.3},0).wait(1).to({x:43.6,y:220.9},0).wait(1).to({skewY:0.1,y:220.7},0).wait(1).to({y:220.4},0).wait(1).to({x:43.5,y:220.3},0).wait(1).to({skewY:0,y:220.1},0).wait(1).to({skewX:2.4,y:220},0).wait(1).to({y:219.9},0).wait(1).to({regX:0,regY:0,x:7.6,y:206},0).wait(3).to({startPosition:0},0).to({skewX:2.5,skewY:0.3,x:7.8,y:207.5},9).to({skewX:1.6,skewY:-0.5,x:6.5,y:206.3},7).to({skewX:1.7,skewY:0,x:6.7,y:206},7).wait(1));

	// prince wed_3-4_lower leg far_01
	this.instance_15 = new lib.princewed_34_lowerlegfar_01("single",0);
	this.instance_15.setTransform(33.5,158.7,0.922,0.92,0,1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({regX:-1.3,regY:43,x:31.1,y:198.3},0).wait(1).to({skewY:-0.1},0).wait(1).to({skewX:1.6,skewY:-0.2,x:31},0).wait(1).to({skewY:-0.3,x:31.1},0).wait(1).to({skewY:-0.4,x:31,y:198.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:33.3,y:158.9},0).wait(1).to({regX:-1.3,regY:43,skewY:-0.4,x:31,y:198.4},0).wait(1).to({x:31.1,y:198.5},0).wait(1).to({skewX:1.7,skewY:-0.3,x:31.3,y:198.7},0).wait(1).to({skewX:1.9,skewY:-0.2,x:31.5,y:199},0).wait(1).to({skewX:2.1,skewY:-0.1,x:31.8,y:199.2},0).wait(1).to({skewX:2.3,skewY:0.1,x:32.2,y:199.6},0).wait(1).to({regX:0,regY:0,skewX:2.5,skewY:0.3,x:35.5,y:160.6},0).wait(1).to({regX:-1.3,regY:43,skewY:0.2,x:32.5,y:199.7},0).wait(1).to({x:32.4,y:199.3},0).wait(1).to({skewY:0.1,y:199},0).wait(1).to({x:32.3,y:198.8},0).wait(1).to({x:32.2,y:198.6},0).wait(1).to({skewY:0,y:198.4},0).wait(1).to({skewX:2.4,y:198.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:35.1,y:158.7},0).wait(3).to({startPosition:0},0).to({skewX:2.5,skewY:0.3,x:35.5,y:160.6},9).to({skewX:1.6,skewY:-0.5,x:33.3,y:158.9},7).to({skewX:1.7,skewY:0,x:33.5,y:158.7},7).wait(1));

	// prince wed_3-4fr_leg far_01
	this.instance_16 = new lib.princewed_34fr_legfar_01("single",0);
	this.instance_16.setTransform(22.8,91.6,0.922,0.919,0,-1.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({regX:4.1,regY:43,scaleX:0.92,x:27.5,y:131.1},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:-0.1,y:131.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:-0.2,x:27.6,y:131.3},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:-0.3,y:131.5},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:-0.4,x:27.7,y:131.6},0).wait(1).to({scaleX:0.94,scaleY:0.91},0).wait(1).to({regX:0,regY:0,skewY:-0.5,x:23.1,y:92.7},0).wait(1).to({regX:4.1,regY:43,skewY:-0.4,x:27.8,y:131.7},0).wait(1).to({skewX:-1.2,x:28,y:131.8},0).wait(1).to({scaleX:0.94,skewX:-1.1,skewY:-0.3,x:28.2,y:132},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:-0.9,skewY:-0.2,x:28.6,y:132.2},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:-0.8,skewY:-0.1,x:29.1,y:132.5},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:-0.5,skewY:0.1,x:29.6,y:132.8},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.91,skewX:-0.3,skewY:0.3,x:26.3,y:93.9},0).wait(1).to({regX:4.1,regY:43,scaleX:0.93,scaleY:0.92,skewY:0.2,x:30.1,y:132.7},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-0.4,x:30,y:132.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:0.1,x:29.8,y:132},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-0.5,y:131.7},0).wait(1).to({scaleX:0.92,x:29.6,y:131.5},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewY:0,y:131.3},0).wait(1).to({scaleX:0.92,skewX:-0.6,x:29.5,y:131.2},0).wait(1).to({y:131.1},0).wait(1).to({regX:0,regY:0,x:25.3,y:91.6},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:-0.3,skewY:0.3,x:26.3,y:93.9},9).to({scaleX:0.94,scaleY:0.91,skewX:-1.3,skewY:-0.5,x:23.1,y:92.7},7).to({scaleX:0.92,scaleY:0.92,skewY:0,x:22.8,y:91.6},7).wait(1));

	// prince wed_3-4fr_body_01
	this.instance_17 = new lib.princewed_34fr_body_01("single",0);
	this.instance_17.setTransform(7,73.2,0.922,0.92,0,5.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:-1.5,regY:-24.9,scaleX:0.92,scaleY:0.92,x:7.6,y:50.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:50.6},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,y:50.9},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,y:51.4},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,y:51.7},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,y:52},0).wait(1).to({regX:0,regY:0,scaleX:0.94,scaleY:0.91,x:7,y:74.7},0).wait(1).to({regX:-1.5,regY:-24.9,x:7.7,y:52.1},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:7.9},0).wait(1).to({skewX:5.4,skewY:2.9,x:8.3,y:52.2},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:8.9,y:52.3},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:9.7,y:52.4},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:10.5,y:52.6},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:10.6,y:75.5},0).wait(1).to({regX:-1.5,regY:-24.9,scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:11.4,y:52.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:11.2,y:51.7},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:11.1,y:51.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:10.9,y:51},0).wait(1).to({scaleX:0.92,x:10.8,y:50.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:10.7,y:50.5},0).wait(1).to({skewY:3.4,x:10.6,y:50.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:50.3},0).wait(1).to({regX:0,regY:0,x:9.7,y:73.2},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:10.6,y:75.5},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:7,y:74.7},7).to({scaleX:0.92,scaleY:0.92,skewY:3.4,y:73.2},7).wait(1));

	// prince wed_3-4fr_arm far_01
	this.instance_18 = new lib.princewed_34fr_armfar_01("single",0);
	this.instance_18.setTransform(46.6,-9.5,0.922,0.92,0,0,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:17.3,regY:50.8,scaleX:0.92,scaleY:0.92,x:62.6,y:36.8},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-0.1,skewY:-1.8,x:62.7,y:37},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:62.9,y:37.3},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:-1.9,x:63.1,y:37.7},0).wait(1).to({scaleX:0.93,scaleY:0.91,x:63.2,y:37.9},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:-0.2,skewY:-2,x:63.4,y:38.1},0).wait(1).to({regX:0,regY:0,x:47.1,y:-7.5},0).wait(1).to({regX:17.3,regY:50.8,skewX:-2.2,skewY:-4,x:64.9,y:37.6},0).wait(1).to({skewX:-8.4,skewY:-10.2,x:69.3,y:35.4},0).wait(1).to({scaleX:0.94,skewX:-18.6,skewY:-20.4,x:76,y:30.6},0).wait(1).to({scaleX:0.93,skewX:-33,skewY:-34.7,x:83.7,y:22},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.91,skewX:-51.4,skewY:-53.2,x:44.3,y:-7.7},0).to({scaleX:0.8,scaleY:0.91,skewX:-82.9,skewY:-84.7,x:44.8,y:-8.5,startPosition:6},1).to({scaleX:0.93,scaleY:0.91,skewX:-86.3,skewY:-88.1,x:49.1,y:-12.6,startPosition:7},1).wait(1).to({regX:17.3,regY:50.8,scaleX:0.93,scaleY:0.92,skewX:-90.8,skewY:-92.8,x:96.1,y:-27.9},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-94.8,skewY:-96.9,x:96,y:-29.8},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-98.3,skewY:-100.5,x:95.8,y:-31.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-101.2,skewY:-103.5,x:95.4,y:-32.6},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:-103.6,skewY:-105.9,x:95.1,y:-33.6},0).wait(1).to({scaleX:0.92,skewX:-105.5,skewY:-107.9,x:94.8,y:-34.3},0).wait(1).to({skewX:-106.8,skewY:-109.2,x:94.5,y:-34.8},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:-107.6,skewY:-110,x:94.4,y:-35.2},0).wait(1).to({regX:0,regY:0,skewX:-107.9,skewY:-110.3,x:55.4,y:-6},0).wait(3).to({startPosition:7},0).to({scaleX:0.93,scaleY:0.91,skewX:-86.3,skewY:-88.1,x:49.1,y:-12.6},9).to({scaleX:0.8,scaleY:0.91,skewX:-82.9,skewY:-84.7,x:44.8,y:-8.5,startPosition:6},1).to({scaleX:0.93,scaleY:0.91,skewX:-51.4,skewY:-53.2,x:44.3,y:-7.7,startPosition:0},1).to({scaleX:0.94,scaleY:0.91,skewX:-0.2,skewY:-2,x:47.1,y:-7.5},5).to({scaleX:0.92,scaleY:0.92,skewX:0,skewY:-1.7,x:46.6,y:-9.5},7).wait(1));

	// prince wed_3-4fr_hand far comp
	this.instance_19 = new lib.princewed_34fr_handfarcomp("single",0);
	this.instance_19.setTransform(66.4,88.6,0.922,0.92,0,0,-1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({regX:7,regY:14.1,scaleX:0.92,scaleY:0.92,x:72.9,y:101.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-0.1,skewY:-1.8,x:73,y:101.4},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:73.2,y:101.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:-1.9,x:73.5,y:101.7},0).wait(1).to({scaleX:0.93,scaleY:0.91,x:73.8,y:101.9},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:-0.2,skewY:-2,x:73.9,y:102},0).wait(1).to({regX:0,regY:0,x:67.4,y:89.4},0).wait(1).to({regX:7,regY:14.1,skewX:-1.8,skewY:-3.6,x:77.3,y:99.6},0).wait(1).to({skewX:-6.5,skewY:-8.3,x:87.2,y:92.6},0).wait(1).to({scaleX:0.94,skewX:-14.5,skewY:-16.3,x:103.5,y:80.6},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:-25.6,skewY:-27.4,x:126.2,y:63.6},0).wait(1).to({regX:0,regY:0,scaleX:0.93,skewX:-40,skewY:-41.7,x:141.5,y:35.6},0).to({scaleX:0.93,scaleY:0.91,skewX:-81,skewY:-82.6,x:153.3,y:-16},1).to({scaleX:0.93,scaleY:0.91,skewX:-116.5,skewY:-118.3,x:136.1,y:-58.5},1).wait(1).to({regX:7,regY:14.1,scaleX:0.93,scaleY:0.92,skewX:-122.2,skewY:-124.1,x:142,y:-74.4},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-127.2,skewY:-129.3,x:139.7,y:-78.2},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-131.5,skewY:-133.7,x:137.7,y:-81.5},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewX:-135.2,skewY:-137.4,x:135.9,y:-84.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:-138.2,skewY:-140.5,x:134.5,y:-86.3},0).wait(1).to({scaleX:0.92,skewX:-140.5,skewY:-142.9,x:133.4,y:-88},0).wait(1).to({skewX:-142.2,skewY:-144.6,x:132.6,y:-89.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:-143.2,skewY:-145.6,x:132,y:-89.8},0).wait(1).to({regX:0,regY:0,skewX:-143.5,skewY:-146,x:129.6,y:-76},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:-116.5,skewY:-118.3,x:136.1,y:-58.5},9).to({scaleX:0.93,scaleY:0.91,skewX:-81,skewY:-82.6,x:153.3,y:-16},1).to({scaleX:0.93,scaleY:0.91,skewX:-40,skewY:-41.7,x:141.5,y:35.6},1).to({scaleX:0.94,scaleY:0.91,skewX:-0.2,skewY:-2,x:67.4,y:89.4},5).to({scaleX:0.92,scaleY:0.92,skewX:0,skewY:-1.7,x:66.4,y:88.6},7).wait(1));

	// prince wed_3-4fr_cape_01
	this.instance_20 = new lib.princewed_34fr_cape_01("single",0);
	this.instance_20.setTransform(-7.7,-37.6,0.922,0.92,0,5.2,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({regX:-10.2,regY:99.5,scaleX:0.92,scaleY:0.92,x:-25.3,y:53.1},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.3,y:53.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,skewY:3.2,x:-25.5,y:53.7},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:3,x:-25.6,y:54.1},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewY:2.9,x:-25.7,y:54.5},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewY:2.8,x:-25.8,y:54.8},0).wait(1).to({regX:0,regY:0,scaleX:0.94,scaleY:0.91,x:-8.1,y:-34.9},0).wait(1).to({regX:-10.2,regY:99.5,x:-25.8,y:54.9},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.3,x:-25.5},0).wait(1).to({skewX:5.4,skewY:2.9,x:-25},0).wait(1).to({scaleX:0.94,scaleY:0.91,skewX:5.5,skewY:3,x:-24.4,y:55},0).wait(1).to({scaleX:0.93,skewX:5.6,skewY:3.2,x:-23.6},0).wait(1).to({scaleX:0.93,scaleY:0.91,skewX:5.8,skewY:3.3,x:-22.6,y:55.1},0).wait(1).to({regX:0,regY:0,scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:-2.4,y:-34.8},0).wait(1).to({regX:-10.2,regY:99.5,scaleX:0.93,scaleY:0.92,skewX:6,skewY:3.5,x:-21.6,y:54.7},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:-21.7,y:54.3},0).wait(1).to({scaleX:0.93,scaleY:0.92,x:-21.9,y:53.9},0).wait(1).to({scaleX:0.92,scaleY:0.92,skewX:5.9,x:-22,y:53.6},0).wait(1).to({scaleX:0.92,x:-22.1,y:53.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,x:-22.2,y:53.2},0).wait(1).to({skewY:3.4,y:53.1},0).wait(1).to({scaleX:0.92,scaleY:0.92,y:53},0).wait(1).to({regX:0,regY:0,x:-3.5,y:-37.6},0).wait(3).to({startPosition:0},0).to({scaleX:0.93,scaleY:0.91,skewX:6.1,skewY:3.6,x:-2.4,y:-34.8},9).to({scaleX:0.94,scaleY:0.91,skewX:5.2,skewY:2.8,x:-8.1,y:-34.9},7).to({scaleX:0.92,scaleY:0.92,skewY:3.4,x:-7.7,y:-37.6},7).wait(1));

	// prince wed_shadow
	this.instance_21 = new lib.princewed_shadow();
	this.instance_21.setTransform(15.1,243.5,0.922,0.92,0,1.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({skewX:1.6,skewY:-0.5,x:15,y:243.7},7).wait(1).to({regX:2,regY:1.1,skewY:-0.4,x:16.8,y:244.7},0).wait(1).to({x:16.9,y:244.8},0).wait(1).to({skewX:1.7,skewY:-0.3,y:245},0).wait(1).to({skewX:1.9,skewY:-0.2,x:17,y:245.2},0).wait(1).to({skewX:2.1,skewY:-0.1,x:17.1,y:245.4},0).wait(1).to({skewX:2.3,skewY:0.1,x:17.3,y:245.8},0).wait(1).to({regX:0,regY:0,skewX:2.5,skewY:0.3,x:15.7,y:245.2},0).wait(1).to({regX:2,regY:1.1,skewY:0.2,x:17.4,y:245.8},0).wait(1).to({y:245.5},0).wait(1).to({skewY:0.1,y:245.2},0).wait(1).to({x:17.3,y:245},0).wait(1).to({y:244.8},0).wait(1).to({skewY:0,y:244.6},0).wait(1).to({skewX:2.4,y:244.5},0).wait(2).to({regX:0,regY:0,x:15.5,y:243.5},0).wait(3).to({skewX:2.5,skewY:0.3,x:15.7,y:245.2},9).to({skewX:1.6,skewY:-0.5,x:15,y:243.7},7).to({skewX:1.7,skewY:0,x:15.1,y:243.5},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-300.7,281.8,582);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PW("synched",0);
	this.instance.setTransform(211.1,359.1,1,1,0,0,0,1.7,-9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(649.7,451.6,281.8,582.1);

})(window.animPG10Wednesday = window.animPG10Wednesday||{});