(function (lib) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1copy = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg01-anim-daniel');
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.daniel_34fr_headcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel ear front
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-86.5,-175.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-86.5,-175.4,235.2,196.8);


(lib.danielshadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-103.3,-19.6,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.3,-19.6,206.4,39.2);


(lib.daniel_fr_daniel_tail_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-87.9,-32.3,0.833,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-32.3,116.7,125.6);


(lib.daniel_fr_sweater_01_stretch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shdw grdnt around neck
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-87.2,-153,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.2,-153,174.4,189.6);


(lib.daniel_fr_legright_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap16();
	this.instance.setTransform(-37.5,-10.2,0.845,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.5,-10.2,77.8,129.6);


(lib.daniel_fr_legleft_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-41.2,-10.2,0.836,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-10.2,76.9,129.6);


(lib.daniel_fr_hoodunderlay_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-79.8,-42.9,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-42.9,160,85.6);


(lib.daniel_fr_hood_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hood string hole
	this.instance = new lib.Bitmap15();
	this.instance.setTransform(-79.6,-45.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.6,-45.4,158.4,112.8);


(lib.daniel_34fr_handclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-23.5,-10.1,0.8,0.8);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-42.1,30,0.799,0.799,0,-156.2,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.5,-10.1,50.4,48.8);


(lib.daniel_fr_footright_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-32.1,-44.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-44.4,90.4,72);


(lib.daniel_fr_footleft_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-58.1,-44.4,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.1,-44.4,90.4,72);


(lib.daniel_fr_body_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(-77.3,-140.9,0.828,0.8,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-140.9,165.5,185.9);


(lib.daniel_34fr_armclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel arm
	this.instance = new lib.Bitmap1copy();
	this.instance.setTransform(-77.6,-7.9,0.8,0.8);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-83,-11.1,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.6,-7.9,98.4,115.2);


(lib.daniel_34frontcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel watch_3-4 front
	this.instance = new lib.daniel_34fr_headcomp("synched",0,false);
	this.instance.setTransform(-12.1,24.9,1,1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-0.9,x:-11.8,y:53.2},9,cjs.Ease.get(1)).to({rotation:-2.6,x:-12.1,y:24.9},12,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.daniel_34fr_handclose_01("single",15);
	this.instance_1.setTransform(146.8,2.8,0.959,1.052,0,-154.9,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1.04,skewX:-146.5,skewY:37.7,x:169.9,y:64.8},9,cjs.Ease.get(1)).to({scaleX:0.96,scaleY:1.05,skewX:-154.9,skewY:26.5,x:146.8,y:2.8},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_hood overlay_01
	this.instance_2 = new lib.daniel_fr_footleft_01("single",0);
	this.instance_2.setTransform(-13.6,269.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},12,cjs.Ease.get(1)).wait(1));

	// *daniel_3-4fr_head comp
	this.instance_3 = new lib.daniel_fr_footright_01("single",0);
	this.instance_3.setTransform(60.6,270.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},9,cjs.Ease.get(1)).to({startPosition:0},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_pull-string far
	this.instance_4 = new lib.daniel_fr_hood_01("single",0);
	this.instance_4.setTransform(17.6,33.1,0.97,1.039,0,-1.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1.04,scaleY:0.96,skewX:-2.1,skewY:-1.8,x:18.2,y:65.7},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,skewX:-1.8,skewY:-2.1,x:17.6,y:33.1},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_hood_01
	this.instance_5 = new lib.daniel_fr_sweater_01_stretch("single",0);
	this.instance_5.setTransform(23.2,148.7,0.97,1.039,0,-1.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.04,scaleY:0.96,skewX:-2.1,skewY:-1.8,x:21.5,y:173.9},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,skewX:-1.8,skewY:-2.1,x:23.2,y:148.7},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_hand close_01
	this.instance_6 = new lib.daniel_34fr_armclose_01("single",0);
	this.instance_6.setTransform(-34.2,28.8,0.974,1.038,0,-2.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({scaleX:1.04,scaleY:0.96,skewX:7,skewY:6.4,x:-41.9,y:56.9},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,skewX:-2.5,skewY:-6.7,x:-34.2,y:28.8},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_sweater_01
	this.instance_7 = new lib.daniel_34fr_armclose_01("single",8);
	this.instance_7.setTransform(62.6,45.4,1.049,0.962,0,-57.4,120.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:0.99,scaleY:1.06,skewX:-40.9,skewY:139.4,x:65.9,y:71.3},9,cjs.Ease.get(1)).to({scaleX:1.05,scaleY:0.96,skewX:-57.4,skewY:120.2,x:62.6,y:45.4},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_foot close_01
	this.instance_8 = new lib.daniel_34fr_handclose_01("single",0);
	this.instance_8.setTransform(-79.4,128.9,0.974,1.038,0,-2.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({scaleX:1.04,scaleY:0.96,skewX:25,skewY:24.4,x:-105.9,y:136.1},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,skewX:-2.5,skewY:-6.7,x:-79.4,y:128.9},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_leg close_01
	this.instance_9 = new lib.daniel_fr_hoodunderlay_01("single",0);
	this.instance_9.setTransform(17.3,31.7,0.97,1.039,0,-1.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.04,scaleY:0.96,skewX:-2.1,skewY:-1.8,x:17.8,y:64.4},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,skewX:-1.8,skewY:-2.1,x:17.3,y:31.7},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_foot far_01
	this.instance_10 = new lib.daniel_fr_body_01("single",0);
	this.instance_10.setTransform(22.9,145.2,0.97,1.039,0,-1.8,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.04,scaleY:0.96,skewX:-2.1,skewY:-1.8,x:20.6,y:173},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,skewX:-1.8,skewY:-2.1,x:22.9,y:145.2},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_leg far_01
	this.instance_11 = new lib.daniel_fr_legleft_01("single",0);
	this.instance_11.setTransform(-12.9,140.4,0.97,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({scaleX:1.04,scaleY:0.96,x:-12.7,y:150.6},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,x:-12.9,y:140.4},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_body underlay_01 
	this.instance_12 = new lib.daniel_fr_legright_01("single",0);
	this.instance_12.setTransform(61.6,140.4,0.97,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({scaleX:1.04,scaleY:0.96,x:62,y:150.6},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,x:61.6,y:140.4},12,cjs.Ease.get(1)).wait(1));

	// tail comp
	this.instance_13 = new lib.daniel_fr_daniel_tail_01("single",0);
	this.instance_13.setTransform(-14.5,141.4,0.97,1.04);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({scaleX:1.04,scaleY:0.96,rotation:6.5,x:-6.9,y:151.8},9,cjs.Ease.get(1)).to({scaleX:0.97,scaleY:1.04,rotation:0,x:-14.5,y:141.4},12,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_arm far_01
	this.instance_14 = new lib.danielshadow();
	this.instance_14.setTransform(26.9,290.4);
	this.instance_14.filters = [new cjs.BlurFilter(8, 8, 1)];
	this.instance_14.cache(-105,-22,210,43);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-157,293,474.8);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.daniel_34frontcomp("synched",0,false);
	this.instance.setTransform(230.4,173.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(395.8,266.5,293.1,474.8);

})(window.animPG01Daniel = window.animPG01Daniel||{});