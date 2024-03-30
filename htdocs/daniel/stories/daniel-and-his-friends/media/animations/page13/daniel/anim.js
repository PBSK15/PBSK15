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
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = sbe.loader.get('pg13-anim-daniel');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-369.5,-291);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.5,-291,739,582);


(lib.daniel_frontcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Bitmap 11
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-292.9,-119.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({_off:true},1).wait(90));

	// Bitmap 10
	this.instance_1 = new lib.Bitmap10();
	this.instance_1.setTransform(246.7,-145.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({_off:true},1).wait(90));

	// Bitmap 9
	this.instance_2 = new lib.Bitmap9();
	this.instance_2.setTransform(281.8,-71);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({_off:true},1).wait(90));

	// Layer 2 copy
	this.instance_3 = new lib.Bitmap1();
	this.instance_3.setTransform(-175.3,-295.5);

	this.instance_4 = new lib.Bitmap2();
	this.instance_4.setTransform(-210.7,-288.9);

	this.instance_5 = new lib.Bitmap3();
	this.instance_5.setTransform(-224.8,-285.6);

	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(7,-64.9,0.927,0.927);

	this.instance_7 = new lib.Bitmap6();
	this.instance_7.setTransform(-377.3,-393.1);

	this.instance_8 = new lib.Bitmap7();
	this.instance_8.setTransform(-377.3,-393.1);

	this.instance_9 = new lib.Bitmap8();
	this.instance_9.setTransform(-377.3,-393.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},1).to({state:[{t:this.instance_5}]},2).to({state:[]},1).to({state:[{t:this.instance_6,p:{scaleX:0.927,scaleY:0.927}}]},2).to({state:[]},1).to({state:[{t:this.instance_6,p:{scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.instance_7}]},10).to({state:[{t:this.instance_8}]},1).to({state:[]},1).to({state:[{t:this.instance_9}]},3).to({state:[]},1).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-175.3,-295.5,333,422);


(lib.PAGE10DT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.daniel_frontcomp("single",0);
	this.instance.setTransform(11.4,131.4,1.449,1.449);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({startPosition:3},0).wait(2).to({startPosition:6},0).wait(2).to({scaleX:1.28,scaleY:1.28,rotation:3.5,y:128.1,startPosition:9},0).wait(2).to({scaleX:1.45,scaleY:1.45},0).wait(2).to({rotation:3.2,x:16.4,y:106.7,startPosition:11},0).wait(2).to({rotation:0,x:11.4,y:131.4,startPosition:22},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:27},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:22},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:27},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:22},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:27},0).wait(2).to({rotation:3.2,x:16.4,y:106.7,startPosition:11},0).wait(2).to({rotation:3.5,x:11.4,y:128.1,startPosition:9},0).wait(2).to({scaleX:1.28,scaleY:1.28},0).wait(2).to({scaleX:1.45,scaleY:1.45,rotation:0,y:131.4,startPosition:6},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.7,-296.9,482.7,611.7);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PAGE10DT("synched",0);
	this.instance.setTransform(555.7,505.8,1,1,0,0,0,8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(881,578.1,482.7,611.7);

})(window.animPG13Daniel = window.animPG13Daniel||{});