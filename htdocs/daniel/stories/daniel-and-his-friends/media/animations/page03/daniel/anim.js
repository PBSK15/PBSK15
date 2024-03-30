(function (lib) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap15 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap24 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap32 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap44 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap53 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap56 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap61 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap62 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap63 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap70 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap80 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap88 = function() {
	this.spriteSheet = sbe.loader.get('pg03-anim-daniel');
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap48();
	this.instance.parent = this;
	this.instance.setTransform(-97.2,-58,0.91,0.91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({_off:true},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.2,-33.9,112.9,156.5);


(lib.daniel_34fr_legclose_01walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap70();
	this.instance.parent = this;
	this.instance.setTransform(-44.9,-15.4,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.9,-15.4,115.6,162.9);


(lib.daniel_34fr_hoodoverlay_01walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(-90.4,-19.1,0.989,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.4,-19.1,182.9,77.4);


(lib.daniel_fr_footright_01walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap63();
	this.instance.parent = this;
	this.instance.setTransform(-31.2,-46.4,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.2,-46.4,102.9,81.9);


(lib.daniel_34fr_headcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-91.8,-143.3,0.865,0.865,-8.2);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-91.8,-143.3,0.865,0.865,-8.2);

	this.instance_2 = new lib.Bitmap4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-91.8,-143.3,0.865,0.865,-8.2);

	this.instance_3 = new lib.Bitmap5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-91.8,-143.3,0.865,0.865,-8.2);

	this.instance_4 = new lib.Bitmap6();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-91.8,-143.3,0.865,0.865,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},791).to({state:[]},2).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.8,-177.1,268.5,269.2);


(lib.daniel_34fr_handclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.Bitmap15();
	this.instance.parent = this;
	this.instance.setTransform(-38.6,-0.3,0.864,0.864);

	this.instance_1 = new lib.Bitmap25();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-26.3,-17.6,0.91,0.91);

	this.instance_2 = new lib.Bitmap24();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-23.7,-17.6,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},34).to({state:[{t:this.instance_2}]},1).to({state:[]},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,4.2,56.2,51);


(lib.dan_watch_34frnt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap32();
	this.instance.parent = this;
	this.instance.setTransform(-27.1,-16.6,0.91,0.91);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).to({_off:true},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,5.3,79.2,41.9);


(lib.daneil_tigers_arm_comp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap41();
	this.instance.parent = this;
	this.instance.setTransform(27.4,27.6,0.91,0.91);

	this.instance_1 = new lib.Bitmap42();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.3,26.3,0.91,0.91);

	this.instance_2 = new lib.Bitmap44();
	this.instance_2.parent = this;
	this.instance_2.setTransform(35,72,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},5).to({state:[]},1).to({state:[{t:this.instance_1}]},7).to({state:[]},1).to({state:[{t:this.instance_2}]},9).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,27.6,116.5,127.4);


(lib.danielshadowwalk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-121.6,-25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.danielshadowwalk_11, new cjs.Rectangle(-121.6,-25.6,246,56), null);


(lib.daniel_34fr_sweater_01walk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pockets and trim
	this.instance = new lib.Bitmap56();
	this.instance.parent = this;
	this.instance.setTransform(-96.9,-135.3,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-135.3,200.2,208.4);


(lib.daniel_34fr_legfar_01walk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap88();
	this.instance.parent = this;
	this.instance.setTransform(-61.4,1.4,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.4,1.4,98.3,124.7);


(lib.daniel_34fr_hoodunderlay_01walk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hood
	this.instance = new lib.Bitmap62();
	this.instance.parent = this;
	this.instance.setTransform(-79.6,-23.3,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-23.3,176.6,85.6);


(lib.daniel_34fr_hood_01walk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel_3-4fr_pull-string far walk_11
	this.instance = new lib.Bitmap53();
	this.instance.parent = this;
	this.instance.setTransform(-78.6,-23.6,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.6,-23.6,177.5,112.9);


(lib.daniel_34fr_footfar_01walk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap80();
	this.instance.parent = this;
	this.instance.setTransform(-44.6,-44.1,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.6,-44.1,113.8,80.1);


(lib.daniel_34fr_body_01walk_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap61();
	this.instance.parent = this;
	this.instance.setTransform(-79.8,-139.2,0.91,0.91);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-139.2,182,209.3);


(lib.comp1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// RHandFront
	this.instance = new lib.daniel_34fr_handclose_01("single",37);
	this.instance.parent = this;
	this.instance.setTransform(-163.7,58.6,1.002,1.068,0,9.3,-173.7,-17.9,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:93.7},0).wait(1).to({y:95},0).wait(1).to({y:96.5},0).wait(1).to({regX:-17.9,regY:-15.4,x:-163.7,y:62.6},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:96.9},0).wait(1).to({x:-184.5,y:95.9},0).wait(1).to({scaleY:1.07,y:94.2},0).wait(1).to({y:91.9},0).wait(1).to({y:89.2},0).wait(1).to({y:86.3},0).wait(1).to({y:83.6},0).wait(1).to({regX:-17.9,regY:-15.5,x:-163.7,y:46.7},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:80.5},0).wait(1).to({y:79.8},0).wait(1).to({y:79.1},0).wait(1).to({y:78.6},0).wait(1).to({y:78.1},0).wait(1).to({y:77.7},0).wait(1).to({scaleY:1.07,y:77.5},0).wait(1).to({y:77.3},0).wait(1).to({regX:-17.9,regY:-15.4,x:-163.7,y:42.6},0).wait(2).to({startPosition:37},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:77.6},0).wait(1).to({y:78.7},0).wait(1).to({y:80.6},0).wait(1).to({y:83.1},0).wait(1).to({y:86.2},0).wait(1).to({y:89.5},0).wait(1).to({y:92.6},0).wait(1).to({y:95.1},0).wait(1).to({y:96.7},0).wait(1).to({regX:-17.9,regY:-15.4,x:-163.7,y:62.6},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:96.9},0).wait(1).to({y:96},0).wait(1).to({y:94.7},0).wait(1).to({y:93.6},0).wait(1).to({regX:-17.9,regY:-15.4,x:-163.7,y:58.6},0).wait(1));

	// LeftHandFront
	this.instance_1 = new lib.daniel_34fr_handclose_01("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-276,59.9,1.119,0.977,0,-53.2,-50.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:-2.9,regY:19.1,x:-263.1,y:74},0).wait(1).to({y:75.4},0).wait(1).to({y:76.9},0).wait(1).to({regX:0,regY:0,x:-276,y:63.9},0).wait(1).to({regX:-2.9,regY:19.1,x:-263.1,y:77.2},0).wait(1).to({y:76.2},0).wait(1).to({y:74.6},0).wait(1).to({scaleX:1.12,scaleY:0.98,y:72.3},0).wait(1).to({y:69.6},0).wait(1).to({y:66.7},0).wait(1).to({scaleX:1.12,y:63.9},0).wait(1).to({regX:0,regY:0,scaleY:0.98,x:-276,y:48.1},0).wait(1).to({regX:-2.9,regY:19.1,scaleY:0.98,x:-263.1,y:60.9},0).wait(1).to({scaleX:1.12,y:60.1},0).wait(1).to({y:59.4},0).wait(1).to({y:58.9},0).wait(1).to({scaleX:1.12,scaleY:0.98,y:58.4},0).wait(1).to({y:58},0).wait(1).to({y:57.8},0).wait(1).to({y:57.6},0).wait(1).to({regX:0,regY:0,x:-276,y:43.9},0).wait(2).to({startPosition:1},0).wait(1).to({regX:-2.9,regY:19.1,x:-263.1,y:57.9},0).wait(1).to({y:59},0).wait(1).to({y:60.9},0).wait(1).to({y:63.5},0).wait(1).to({y:66.6},0).wait(1).to({y:69.8},0).wait(1).to({y:72.9},0).wait(1).to({y:75.4},0).wait(1).to({y:77},0).wait(1).to({regX:0,regY:0,x:-276,y:63.9},0).wait(1).to({regX:-2.9,regY:19.1,x:-263.1,y:77.3},0).wait(1).to({y:76.4},0).wait(1).to({y:75.1},0).wait(1).to({y:74},0).wait(1).to({regX:0,regY:0,x:-276,y:59.9},0).wait(1));

	// WatchFront
	this.instance_2 = new lib.dan_watch_34frnt("single",5);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-290.9,66.7,0.837,0.703,0,-55.4,129.8,2.3,-3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:8.3,regY:12.9,x:-284.7,y:77.5},0).wait(1).to({y:78.8},0).wait(1).to({y:80.3},0).wait(1).to({regX:2.3,regY:-3.4,x:-290.9,y:70.7},0).wait(1).to({regX:8.3,regY:12.9,x:-284.7,y:80.7},0).wait(1).to({y:79.7},0).wait(1).to({y:78},0).wait(1).to({y:75.8},0).wait(1).to({scaleX:0.84,scaleY:0.7,y:73},0).wait(1).to({y:70.1},0).wait(1).to({y:67.4},0).wait(1).to({regX:2.3,regY:-3.4,x:-290.9,y:54.9},0).wait(1).to({regX:8.3,regY:12.9,x:-284.7,y:64.3},0).wait(1).to({y:63.6},0).wait(1).to({scaleY:0.7,y:62.9},0).wait(1).to({scaleX:0.84,y:62.3},0).wait(1).to({y:61.8},0).wait(1).to({y:61.5},0).wait(1).to({y:61.2},0).wait(1).to({y:61.1},0).wait(1).to({regX:2.3,regY:-3.4,x:-290.9,y:50.7},0).wait(2).to({startPosition:5},0).wait(1).to({regX:8.3,regY:12.9,x:-284.7,y:61.4},0).wait(1).to({y:62.5},0).wait(1).to({y:64.4},0).wait(1).to({y:66.9},0).wait(1).to({y:70},0).wait(1).to({y:73.3},0).wait(1).to({y:76.4},0).wait(1).to({y:78.9},0).wait(1).to({y:80.5},0).wait(1).to({regX:2.3,regY:-3.4,x:-290.9,y:70.7},0).wait(1).to({regX:8.3,regY:12.9,x:-284.7,y:80.7},0).wait(1).to({y:79.8},0).wait(1).to({y:78.5},0).wait(1).to({y:77.4},0).wait(1).to({regX:2.3,regY:-3.4,x:-290.9,y:66.7},0).wait(1));

	// HoodFrontCover
	this.instance_3 = new lib.daniel_34fr_hoodoverlay_01walk("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-252.9,-17.5,1.045,1.082,0,6.6,4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:1,regY:19.5,skewX:6.8,skewY:5.2,x:-254.2,y:4.3},0).wait(1).to({skewX:7.5,skewY:5.8,x:-254.1,y:6.3},0).wait(1).to({skewX:8.2,skewY:6.6,x:-253.9,y:8.6},0).wait(1).to({regX:0,regY:0,skewX:8.5,skewY:6.9,x:-251.8,y:-11.4},0).wait(1).to({regX:1,regY:19.5,skewX:8.6,x:-253.9,y:9.4},0).wait(1).to({skewY:7,x:-253.8,y:8.6},0).wait(1).to({x:-253.7,y:7.2},0).wait(1).to({skewX:8.7,x:-253.6,y:5.3},0).wait(1).to({skewX:8.8,skewY:7.1,x:-253.4,y:3},0).wait(1).to({scaleX:1.04,skewX:8.9,skewY:7.2,x:-253.2,y:0.6},0).wait(1).to({x:-253.1,y:-1.7},0).wait(1).to({regX:0,regY:0,skewX:9,skewY:7.3,x:-250.7,y:-24.6},0).wait(1).to({regX:1,regY:19.5,x:-252.9,y:-3.9},0).wait(1).to({scaleX:1.05,skewY:7.4,y:-4.2},0).wait(1).to({x:-252.8,y:-4.5},0).wait(1).to({y:-4.7},0).wait(1).to({skewX:9.1,y:-4.9},0).wait(1).to({x:-252.7,y:-5.1},0).wait(1).to({y:-5.2},0).wait(1).to({x:-252.8},0).wait(1).to({regX:0,regY:0,x:-250.5,y:-26.3},0).wait(2).to({startPosition:0},0).wait(1).to({regX:1,regY:19.5,x:-252.7,y:-5},0).wait(1).to({skewX:9,x:-252.8,y:-4.1},0).wait(1).to({x:-252.9,y:-2.7},0).wait(1).to({skewX:8.9,skewY:7.3,x:-253.1,y:-0.8},0).wait(1).to({skewX:8.8,skewY:7.2,x:-253.3,y:1.5},0).wait(1).to({skewX:8.7,skewY:7.1,x:-253.4,y:3.9},0).wait(1).to({skewY:7,x:-253.6,y:6.2},0).wait(1).to({skewX:8.6,x:-253.8,y:8.1},0).wait(1).to({skewY:6.9,x:-253.9,y:9.2},0).wait(1).to({regX:0,regY:0,skewX:8.5,x:-251.8,y:-11.4},0).wait(1).to({regX:1,regY:19.5,skewX:8.4,skewY:6.8,x:-253.9,y:9.3},0).wait(1).to({skewX:8.1,skewY:6.5,x:-254,y:8.3},0).wait(1).to({skewX:7.6,skewY:6,x:-254.1,y:6.8},0).wait(1).to({skewX:7,skewY:5.4,x:-254.2,y:5},0).wait(1).to({regX:0,regY:0,skewX:6.6,skewY:4.9,x:-252.9,y:-17.5},0).wait(1));

	// LSleeveFront
	this.instance_4 = new lib.daneil_tigers_arm_comp("single",5);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-295.7,-28.3,1.059,1.092,0,0.4,-5.8,80,13.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:66.2,regY:81,x:-310.7,y:47.6},0).wait(1).to({y:49},0).wait(1).to({y:50.5},0).wait(1).to({regX:80,regY:13.3,x:-295.7,y:-24.3},0).wait(1).to({regX:66.2,regY:81,x:-310.7,y:50.9},0).wait(1).to({y:49.9},0).wait(1).to({skewX:0.3,y:48.2},0).wait(1).to({x:-310.6,y:45.9},0).wait(1).to({y:43.2},0).wait(1).to({y:40.3},0).wait(1).to({scaleX:1.06,y:37.5},0).wait(1).to({regX:80,regY:13.2,x:-295.6,y:-40.2},0).wait(1).to({regX:66.2,regY:81,x:-310.6,y:34.5},0).wait(1).to({scaleX:1.06,y:33.7},0).wait(1).to({y:33.1},0).wait(1).to({y:32.5},0).wait(1).to({x:-310.7,y:32.1},0).wait(1).to({skewX:0.4,y:31.7},0).wait(1).to({y:31.5},0).wait(1).to({y:31.3},0).wait(1).to({regX:80,regY:13.3,x:-295.7,y:-44.3},0).wait(2).to({startPosition:5},0).wait(1).to({regX:66.2,regY:81,x:-310.7,y:31.5},0).wait(1).to({y:32.6},0).wait(1).to({y:34.5},0).wait(1).to({y:37.1},0).wait(1).to({y:40.2},0).wait(1).to({y:43.4},0).wait(1).to({y:46.5},0).wait(1).to({y:49},0).wait(1).to({y:50.6},0).wait(1).to({regX:80,regY:13.3,x:-295.7,y:-24.3},0).wait(1).to({regX:66.2,regY:81,x:-310.7,y:50.9},0).wait(1).to({y:50},0).wait(1).to({y:48.7},0).wait(1).to({y:47.6},0).wait(1).to({regX:80,regY:13.3,x:-295.7,y:-28.3},0).wait(1));

	// TailFront
	this.instance_5 = new lib.Tail("single",2);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-325.2,126.5,1.222,1.027,0,-137.1,-163.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-50.8,regY:22,x:-250.2,y:127.7},0).wait(1).to({y:129.1},0).wait(1).to({y:130.6},0).wait(1).to({regX:0,regY:0,x:-325.2,y:130.5},0).wait(1).to({regX:-50.8,regY:22,skewX:-137.2,skewY:-163.9,x:-250.2,y:130.9},0).wait(1).to({skewX:-137.6,skewY:-164.3,y:129.8},0).wait(1).to({skewX:-138.2,skewY:-164.9,y:128.1},0).wait(1).to({skewX:-139,skewY:-165.8,y:125.7},0).wait(1).to({scaleY:1.03,skewX:-140,skewY:-166.8,x:-250.3,y:122.8},0).wait(1).to({skewX:-141.1,skewY:-167.9,y:119.8},0).wait(1).to({skewX:-142.1,skewY:-168.9,x:-250.5,y:116.9},0).wait(1).to({regX:0,regY:0,skewX:-142.9,skewY:-169.7,x:-325.2,y:121.5},0).wait(1).to({regX:-50.8,regY:22,skewX:-143,skewY:-169.8,x:-250.5,y:114.2},0).wait(1).to({skewX:-143.1,skewY:-169.9,x:-250.6,y:113.9},0).wait(1).to({scaleY:1.03,skewX:-143.3,skewY:-170,y:113.6},0).wait(1).to({skewY:-170.1,y:113.4},0).wait(1).to({skewX:-143.4,skewY:-170.2,y:113.1},0).wait(1).to({skewX:-143.5,y:113},0).wait(1).to({y:112.9},0).wait(1).to({skewY:-170.3,y:112.8},0).wait(1).to({regX:0,regY:0,x:-325.2,y:120.5},0).wait(2).to({startPosition:2},0).wait(1).to({regX:-50.8,regY:22,skewX:-143.4,skewY:-170.2,x:-250.6,y:113.1},0).wait(1).to({skewX:-143.1,skewY:-169.8,x:-250.5,y:114.2},0).wait(1).to({skewX:-142.5,skewY:-169.2,y:115.9},0).wait(1).to({skewX:-141.6,skewY:-168.4,x:-250.4,y:118.3},0).wait(1).to({skewX:-140.6,skewY:-167.4,x:-250.3,y:121.2},0).wait(1).to({skewX:-139.6,skewY:-166.3,x:-250.2,y:124.1},0).wait(1).to({skewX:-138.6,skewY:-165.3,y:127},0).wait(1).to({skewX:-137.8,skewY:-164.5,y:129.3},0).wait(1).to({skewX:-137.3,skewY:-164,y:130.7},0).wait(1).to({regX:0,regY:0,skewX:-137.1,skewY:-163.8,x:-325.2,y:130.5},0).wait(1).to({regX:-50.8,regY:22,x:-250.2,y:131},0).wait(1).to({y:130.1},0).wait(1).to({y:128.8},0).wait(1).to({y:127.7},0).wait(1).to({regX:0,regY:0,x:-325.2,y:126.5},0).wait(1));

	// RHandFrontMain
	this.instance_6 = new lib.daniel_34fr_handclose_01("single",36);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-184.2,72.8,1.002,1.068,0,9.3,-173.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:93.7},0).wait(1).to({y:95},0).wait(1).to({y:96.5},0).wait(1).to({regX:0,regY:0,x:-184.2,y:76.8},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:96.9},0).wait(1).to({y:95.9},0).wait(1).to({scaleY:1.07,y:94.2},0).wait(1).to({y:92},0).wait(1).to({y:89.3},0).wait(1).to({y:86.4},0).wait(1).to({y:83.6},0).wait(1).to({regX:0,regY:0,x:-184.2,y:61.1},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:80.6},0).wait(1).to({y:79.8},0).wait(1).to({y:79.1},0).wait(1).to({y:78.5},0).wait(1).to({y:78.1},0).wait(1).to({y:77.7},0).wait(1).to({scaleY:1.07,y:77.4},0).wait(1).to({y:77.3},0).wait(1).to({regX:0,regY:0,x:-184.2,y:56.8},0).wait(2).to({startPosition:36},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:77.7},0).wait(1).to({y:79.1},0).wait(1).to({y:81.4},0).wait(1).to({y:84.6},0).wait(1).to({y:88.5},0).wait(1).to({y:92.5},0).wait(1).to({y:96.4},0).wait(1).to({y:99.5},0).wait(1).to({y:101.5},0).wait(1).to({regX:0,regY:0,x:-184.2,y:81.8},0).wait(1).to({regX:-2.9,regY:19.1,x:-184.6,y:101.5},0).wait(1).to({y:99.5},0).wait(1).to({y:96.7},0).wait(1).to({y:94.2},0).wait(1).to({regX:0,regY:0,x:-184.2,y:72.8},0).wait(1));

	// HeadBehind
	this.instance_7 = new lib.daniel_34fr_headcomp("synched",796,false);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-267.6,-58.8,1.06,1.058,8.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:42.4,regY:-42.6,x:-216.6,y:-96,startPosition:797},0).wait(1).to({y:-93.3,startPosition:798},0).wait(1).to({y:-90.2,startPosition:799},0).wait(1).to({regX:0,regY:0,x:-267.6,y:-50.8,mode:"single",startPosition:792},0).wait(1).to({regX:42.4,regY:-42.6,rotation:8.2,x:-216.7,y:-89.2},0).wait(1).to({rotation:7.7,x:-217,y:-90.1},0).wait(1).to({rotation:7,x:-217.6,y:-91.7},0).wait(1).to({rotation:6,x:-218.4,y:-93.9},0).wait(1).to({rotation:4.8,x:-219.4,y:-96.5},0).wait(1).to({rotation:3.4,x:-220.5,y:-99.5},0).wait(1).to({rotation:2,x:-221.7,y:-102.5},0).wait(1).to({regX:0,regY:0,rotation:0.7,x:-268.4,y:-60.8,startPosition:796},0).wait(1).to({regX:42.4,regY:-42.6,rotation:0.4,x:-223.1,y:-106},0).wait(1).to({rotation:0.1,x:-223.3,y:-106.7},0).wait(1).to({rotation:-0.2,x:-223.5,y:-107.3},0).wait(1).to({rotation:-0.4,x:-223.7,y:-107.8},0).wait(1).to({rotation:-0.6,x:-223.8,y:-108.2},0).wait(1).to({rotation:-0.8,x:-223.9,y:-108.5},0).wait(1).to({rotation:-0.9,x:-224,y:-108.7},0).wait(1).to({y:-108.9},0).wait(1).to({regX:0,regY:0,x:-268.3,y:-63.2},0).wait(2).to({mode:"synched",startPosition:799,loop:false},0).wait(1).to({regX:42.4,regY:-42.6,rotation:-0.8,x:-223.9,y:-108.6,startPosition:800},0).wait(1).to({rotation:-0.3,x:-223.4,y:-107.5,startPosition:801},0).wait(1).to({rotation:0.6,x:-222.7,y:-105.6,startPosition:802},0).wait(1).to({rotation:1.8,x:-221.7,y:-103.1,startPosition:803},0).wait(1).to({rotation:3.2,x:-220.5,y:-100,startPosition:804},0).wait(1).to({rotation:4.7,x:-219.3,y:-96.8,startPosition:805},0).wait(1).to({rotation:6.2,x:-218.2,y:-93.6,startPosition:806},0).wait(1).to({rotation:7.3,x:-217.3,y:-91.1,startPosition:807},0).wait(1).to({rotation:8.1,x:-216.8,y:-89.5,startPosition:808},0).wait(1).to({regX:0,regY:0,rotation:8.3,x:-267.6,y:-50.8,mode:"single",startPosition:791},0).wait(1).to({regX:42.4,regY:-42.6,x:-216.6,y:-89.5},0).wait(1).to({y:-91.3},0).wait(1).to({y:-93.8},0).wait(1).to({y:-96},0).wait(1).to({regX:0,regY:0,x:-267.6,y:-58.8,mode:"synched",startPosition:796,loop:false},0).wait(1));

	// RSleeveFrontPart
	this.instance_8 = new lib.daneil_tigers_arm_comp("single",23);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-115.7,48.5,0.985,1.06,0,-9.8,168.2,25.6,72.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:66.2,regY:81,x:-153.3,y:65.8},0).wait(1).to({y:67.1},0).wait(1).to({y:68.6},0).wait(1).to({regX:25.6,regY:72.8,x:-115.7,y:52.5},0).wait(1).to({regX:66.2,regY:81,x:-153.3,y:69},0).wait(1).to({scaleX:0.98,y:68},0).wait(1).to({x:-153.4,y:66.3},0).wait(1).to({y:64.1},0).wait(1).to({y:61.3},0).wait(1).to({x:-153.3,y:58.4},0).wait(1).to({y:55.7},0).wait(1).to({regX:25.6,regY:72.8,x:-115.7,y:36.7},0).wait(1).to({regX:66.2,regY:81,x:-153.4,y:52.6},0).wait(1).to({y:51.8},0).wait(1).to({y:51.1},0).wait(1).to({y:50.6},0).wait(1).to({y:50.1},0).wait(1).to({y:49.7},0).wait(1).to({scaleX:0.99,y:49.5},0).wait(1).to({y:49.3},0).wait(1).to({regX:25.6,regY:72.8,x:-115.7,y:32.5},0).wait(2).to({startPosition:23},0).wait(1).to({regX:66.2,regY:81,x:-153.3,y:49.7},0).wait(1).to({y:50.8},0).wait(1).to({y:52.7},0).wait(1).to({y:55.2},0).wait(1).to({y:58.3},0).wait(1).to({y:61.6},0).wait(1).to({y:64.7},0).wait(1).to({y:67.2},0).wait(1).to({y:68.8},0).wait(1).to({regX:25.6,regY:72.8,x:-115.7,y:52.5},0).wait(1).to({regX:66.2,regY:81,x:-153.3,y:69},0).wait(1).to({y:68.1},0).wait(1).to({y:66.8},0).wait(1).to({y:65.7},0).wait(1).to({regX:25.6,regY:72.8,x:-115.7,y:48.5},0).wait(1));

	// Tassels
	this.instance_9 = new lib.daniel_34fr_hood_01walk_11("single",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-251.9,-18.6,1.05,1.062,0,9,5.2,-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:10.1,regY:32.8,x:-246.6,y:17.2},0).wait(1).to({y:18.6},0).wait(1).to({y:20.1},0).wait(1).to({regX:-0.2,regY:0,x:-251.9,y:-14.6},0).wait(1).to({regX:10.1,regY:32.8,x:-246.6,y:20.6},0).wait(1).to({y:20},0).wait(1).to({y:19},0).wait(1).to({y:17.7},0).wait(1).to({skewY:5.1,y:16.2},0).wait(1).to({y:14.5},0).wait(1).to({y:13},0).wait(1).to({regX:-0.2,regY:0,x:-251.9,y:-23.7},0).wait(1).to({regX:10.1,regY:32.8,x:-246.6,y:11.5},0).wait(1).to({y:11.3},0).wait(1).to({y:11.2},0).wait(1).to({skewY:5.2,y:11},0).wait(1).to({y:10.9},0).wait(1).to({startPosition:0},0).wait(1).to({y:10.8},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-0.2,regY:0,x:-251.9,y:-24.6},0).wait(2).to({startPosition:0},0).wait(1).to({regX:10.1,regY:32.8,x:-246.6,y:10.9},0).wait(1).to({y:11.5},0).wait(1).to({y:12.4},0).wait(1).to({y:13.7},0).wait(1).to({y:15.3},0).wait(1).to({y:16.9},0).wait(1).to({y:18.4},0).wait(1).to({y:19.7},0).wait(1).to({y:20.5},0).wait(1).to({regX:-0.2,regY:0,x:-251.9,y:-14.6},0).wait(1).to({regX:10.1,regY:32.8,x:-246.6,y:20.5},0).wait(1).to({y:19.6},0).wait(1).to({y:18.3},0).wait(1).to({y:17.2},0).wait(1).to({regX:-0.2,regY:0,x:-251.9,y:-18.6},0).wait(1));

	// BodyMain
	this.instance_10 = new lib.daniel_34fr_sweater_01walk_11("single",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-254,100.6,1.087,1.034,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:3.1,regY:-31.2,x:-248.8,y:69.1},0).wait(1).to({y:70.4},0).wait(1).to({y:71.9},0).wait(1).to({regX:0,regY:0,x:-254,y:104.6},0).wait(1).to({regX:3.1,regY:-31.2,x:-248.8,y:72.4},0).wait(1).to({y:71.9},0).wait(1).to({y:70.9},0).wait(1).to({rotation:0,skewX:3.3,skewY:3.2,y:69.6},0).wait(1).to({skewY:3.1,y:68.1},0).wait(1).to({y:66.4},0).wait(1).to({y:64.9},0).wait(1).to({regX:0,regY:0,x:-254,y:95.7},0).wait(1).to({regX:3.1,regY:-31.2,x:-248.8,y:63.4},0).wait(1).to({y:63.2},0).wait(1).to({skewY:3.2,y:63.1},0).wait(1).to({y:62.9},0).wait(1).to({y:62.8},0).wait(1).to({rotation:3.3,skewX:0,skewY:0,y:62.7},0).wait(1).to({startPosition:0},0).wait(1).to({y:62.6},0).wait(1).to({regX:0,regY:0,x:-254,y:94.6},0).wait(2).to({startPosition:0},0).wait(1).to({regX:3.1,regY:-31.2,x:-248.8,y:62.8},0).wait(1).to({y:63.3},0).wait(1).to({y:64.3},0).wait(1).to({y:65.6},0).wait(1).to({y:67.1},0).wait(1).to({y:68.7},0).wait(1).to({y:70.3},0).wait(1).to({y:71.5},0).wait(1).to({y:72.3},0).wait(1).to({regX:0,regY:0,x:-254,y:104.6},0).wait(1).to({regX:3.1,regY:-31.2,x:-248.8,y:72.3},0).wait(1).to({y:71.4},0).wait(1).to({y:70.1},0).wait(1).to({y:69},0).wait(1).to({regX:0,regY:0,x:-254,y:100.6},0).wait(1));

	// RSleeveBack
	this.instance_11 = new lib.daneil_tigers_arm_comp("single",13);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-174.3,-1.3,0.97,1.014,0,-9.3,176.6,63,20.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:66.2,regY:81,x:-167.3,y:60.3},0).wait(1).to({y:61.6},0).wait(1).to({y:63.2},0).wait(1).to({regX:63,regY:20.1,x:-174.3,y:2.7},0).wait(1).to({regX:66.2,regY:81,x:-167.3,y:63.5},0).wait(1).to({x:-167.4,y:62.5},0).wait(1).to({skewY:176.7,y:60.9},0).wait(1).to({y:58.6},0).wait(1).to({y:55.9},0).wait(1).to({y:53},0).wait(1).to({y:50.3},0).wait(1).to({regX:63,regY:20.1,x:-174.2,y:-13.1},0).wait(1).to({regX:66.2,regY:81,x:-167.4,y:47.2},0).wait(1).to({y:46.4},0).wait(1).to({y:45.8},0).wait(1).to({y:45.2},0).wait(1).to({y:44.7},0).wait(1).to({skewY:176.6,y:44.3},0).wait(1).to({y:44.1},0).wait(1).to({x:-167.3,y:43.9},0).wait(1).to({regX:63,regY:20.1,x:-174.3,y:-17.3},0).wait(2).to({startPosition:13},0).wait(1).to({regX:66.2,regY:81,x:-167.3,y:44.2},0).wait(1).to({y:45.3},0).wait(1).to({y:47.2},0).wait(1).to({y:49.8},0).wait(1).to({y:52.9},0).wait(1).to({y:56.1},0).wait(1).to({y:59.2},0).wait(1).to({y:61.7},0).wait(1).to({y:63.3},0).wait(1).to({regX:63,regY:20.1,x:-174.3,y:2.7},0).wait(1).to({regX:66.2,regY:81,x:-167.3,y:63.6},0).wait(1).to({y:62.7},0).wait(1).to({y:61.4},0).wait(1).to({y:60.3},0).wait(1).to({regX:63,regY:20.1,x:-174.3,y:-1.3},0).wait(1));

	// BodyFur
	this.instance_12 = new lib.daniel_34fr_body_01walk_11("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-261.4,93.4,1.064,1.067,0,7,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regX:11.1,regY:-34.6,x:-245.2,y:58.5},0).wait(1).to({y:59.9},0).wait(1).to({y:61.4},0).wait(1).to({regX:0,regY:0,x:-261.4,y:97.4},0).wait(1).to({regX:11.1,regY:-34.6,x:-245.2,y:61.9},0).wait(1).to({y:61.3},0).wait(1).to({y:60.4},0).wait(1).to({skewX:6.9,skewY:6.3,y:59.1},0).wait(1).to({y:57.6},0).wait(1).to({x:-245.3,y:55.9},0).wait(1).to({skewX:6.8,y:54.4},0).wait(1).to({regX:0,regY:0,x:-261.5,y:88.5},0).wait(1).to({regX:11.1,regY:-34.6,x:-245.3,y:52.9},0).wait(1).to({skewX:6.9,y:52.7},0).wait(1).to({x:-245.2,y:52.5},0).wait(1).to({y:52.4},0).wait(1).to({skewX:7,skewY:6.4,y:52.3},0).wait(1).to({y:52.2},0).wait(1).to({y:52.1},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-261.4,y:87.4},0).wait(2).to({startPosition:0},0).wait(1).to({regX:11.1,regY:-34.6,x:-245.2,y:52.2},0).wait(1).to({y:52.8},0).wait(1).to({y:53.7},0).wait(1).to({y:55},0).wait(1).to({y:56.6},0).wait(1).to({y:58.2},0).wait(1).to({y:59.7},0).wait(1).to({y:61},0).wait(1).to({y:61.8},0).wait(1).to({regX:0,regY:0,x:-261.4,y:97.4},0).wait(1).to({regX:11.1,regY:-34.6,x:-245.2,y:61.8},0).wait(1).to({y:60.9},0).wait(1).to({y:59.6},0).wait(1).to({y:58.5},0).wait(1).to({regX:0,regY:0,x:-261.4,y:93.4},0).wait(1));

	// HoodBack
	this.instance_13 = new lib.daniel_34fr_hoodunderlay_01walk_11("single",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(-251.4,-17.5,1.05,1.062,0,9,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:8.6,regY:19.5,x:-245.7,y:4.3},0).wait(1).to({y:5.6},0).wait(1).to({y:7.1},0).wait(1).to({regX:0,regY:0,x:-251.4,y:-13.5},0).wait(1).to({regX:8.6,regY:19.5,x:-245.7,y:7.5},0).wait(1).to({y:6.6},0).wait(1).to({x:-245.8,y:5.2},0).wait(1).to({x:-246,y:3.2},0).wait(1).to({skewY:5.1,x:-246.2,y:0.7},0).wait(1).to({x:-246.4,y:-1.8},0).wait(1).to({x:-246.6,y:-4.2},0).wait(1).to({regX:0,regY:0,x:-252.5,y:-27.5},0).wait(1).to({regX:8.6,regY:19.5,x:-246.7,y:-6.4},0).wait(1).to({y:-6.6},0).wait(1).to({y:-6.7},0).wait(1).to({skewY:5.2,y:-6.9},0).wait(1).to({y:-7},0).wait(1).to({y:-7.1},0).wait(1).to({startPosition:0},0).wait(1).to({y:-7.2},0).wait(1).to({regX:0,regY:0,x:-252.4,y:-28.5},0).wait(2).to({startPosition:0},0).wait(1).to({regX:8.6,regY:19.5,x:-246.6,y:-6.9},0).wait(1).to({y:-6.1},0).wait(1).to({x:-246.5,y:-4.7},0).wait(1).to({x:-246.4,y:-2.8},0).wait(1).to({x:-246.2,y:-0.4},0).wait(1).to({x:-246,y:2},0).wait(1).to({x:-245.9,y:4.3},0).wait(1).to({x:-245.8,y:6.2},0).wait(1).to({x:-245.7,y:7.4},0).wait(1).to({regX:0,regY:0,x:-251.4,y:-13.5},0).wait(1).to({regX:8.6,regY:19.5,x:-245.7,y:7.5},0).wait(1).to({y:6.6},0).wait(1).to({y:5.3},0).wait(1).to({y:4.2},0).wait(1).to({regX:0,regY:0,x:-251.4,y:-17.5},0).wait(1));

	// ShoeFront
	this.instance_14 = new lib.daniel_fr_footright_01walk("single",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(-293.5,268.1,1.052,1.067,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(39));

	// LegFront
	this.instance_15 = new lib.daniel_34fr_legclose_01walk("single",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(-303.6,114.1,1.072,1.023,0,-3.8,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(39));

	// ShoeBack
	this.instance_16 = new lib.daniel_34fr_footfar_01walk_11("single",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-198,250.7,1.06,1.057,0,-3.6,-4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(39));

	// LegBack
	this.instance_17 = new lib.daniel_34fr_legfar_01walk_11("single",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(-209.8,120.1,1.119,0.985,0,-6.8,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(39));

	// Dan`s shadow
	this.instance_18 = new lib.danielshadowwalk_11();
	this.instance_18.parent = this;
	this.instance_18.setTransform(-225.8,292.5,1.076,1.203,0,26.7,-179.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-376,-222.9,295,548.7);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.comp1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,295.7,1,1,0,0,0,-221.8,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(395.8,354.5,295,548.7);

})(window.animPG03Daniel = window.animPG03Daniel||{});