(function (lib) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 800,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = sbe.loader.get('pg04-anim-anim');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = sbe.loader.get('pg04-anim-anim');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Teacher = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Teacher
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-278,-766.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-278,-766.1,550,735);


(lib.DT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel_3-4fr_hand close_01
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-158.3,-182.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.3,-182.7,376,475);


// stage content:
(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DT("synched",0);
	this.instance.name = 'daniel';
	this.instance.setTransform(584.9,530.8,1,1,0,0,0,24.1,58.5);
	this.instance.mouseChildren = false;

	this.instance_1 = new lib.Teacher("synched",0);
	this.instance_1.name = 'teacher';
	this.instance_1.setTransform(306.8,395.2,1,1,0,0,180,-1.2,-411.4);
	this.instance_1.mouseChildren = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(433.6,440.5,744.9,735);

})(window.animPG04Anim = window.animPG04Anim||{});