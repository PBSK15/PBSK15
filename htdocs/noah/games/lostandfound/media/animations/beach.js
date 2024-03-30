var NoahAnims = NoahAnims || {};
NoahAnims.beach = {};

(function (lib, cjs) {

var p; // shortcut to reference prototypes

(lib.AngryBirdA = function() {
	this.initialize(ig.Sheets.lib.location, "AngryBirdA");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,86,69);


(lib.AngryBirdB = function() {
	this.initialize(ig.Sheets.lib.location, "AngryBirdB");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,86,69);


(lib.SharkA = function() {
	this.initialize(ig.Sheets.lib.location, "SharkA");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,154,68);


(lib.SharkB = function() {
	this.initialize(ig.Sheets.lib.location, "SharkB");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,149,59);


(lib.SharkC = function() {
	this.initialize(ig.Sheets.lib.location, "SharkC");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,140,52);


(lib.TurtleA = function() {
	this.initialize(ig.Sheets.lib.location, "TurtleA");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,120,60);


(lib.TurtleB = function() {
	this.initialize(ig.Sheets.lib.location, "TurtleB");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,120,55);


(lib.TurtleC = function() {
	this.initialize(ig.Sheets.lib.location, "TurtleC");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,119,48);


(lib.TurtleD = function() {
	this.initialize(ig.Sheets.lib.location, "TurtleD");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,120,53);


(lib.WhaleA = function() {
	this.initialize(ig.Sheets.lib.location, "WhaleA");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,445,180);


(lib.WhaleB = function() {
	this.initialize(ig.Sheets.lib.location, "WhaleB");
}).prototype = p = new cjs.Sprite();
p.nominalBounds = new cjs.Rectangle(0,0,445,221);


(lib.WhaleInner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19));

	// Layer 1
	this.instance = new lib.WhaleA();

	this.instance_1 = new lib.WhaleB();
	this.instance_1.setTransform(-0.5,-42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445,180);


(lib.Turtle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shell
	this.instance = new lib.TurtleA();
	this.instance.setTransform(-66,-31.4);

	this.instance_1 = new lib.TurtleB();
	this.instance_1.setTransform(-66,-26);

	this.instance_2 = new lib.TurtleC();
	this.instance_2.setTransform(-66,-19.8);

	this.instance_3 = new lib.TurtleD();
	this.instance_3.setTransform(-66,-24.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance}]},2).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66,-31.4,120,60);


(lib.Shark = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shark butt
	this.instance = new lib.SharkA();
	this.instance.setTransform(-75.8,-33);

	this.instance_1 = new lib.SharkB();
	this.instance_1.setTransform(-71.1,-34.2);

	this.instance_2 = new lib.SharkC();
	this.instance_2.setTransform(-63.9,-35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_1}]},6).to({state:[{t:this.instance}]},2).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-33,154,68);


(lib.BirdAngry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.AngryBirdA();
	this.instance.setTransform(-27,30);

	this.instance_1 = new lib.AngryBirdB();
	this.instance_1.setTransform(-27,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27,30,86,69);


(lib.Whale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0});

	// timeline functions:
	this.frame_30 = function() {
		this.gotoAndPlay("idle");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(30).call(this.frame_30).wait(1));

	// Layer 1
	this.instance = new lib.WhaleInner();
	this.instance.setTransform(222.5,90,1,1,0,0,0,222.5,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:222.2,regY:68.8,x:222.2,y:68.9},0).wait(1).to({y:69.2},0).wait(1).to({y:69.5},0).wait(1).to({y:70},0).wait(1).to({y:70.6},0).wait(1).to({y:71.3},0).wait(1).to({y:72.1},0).wait(1).to({y:72.8},0).wait(1).to({regX:222.5,regY:90,x:222.5,y:94.7},0).wait(1).to({regX:222.2,regY:68.8,x:222.2,y:74},0).wait(1).to({y:74.4},0).wait(1).to({y:74.7},0).wait(1).to({regX:222.5,regY:90,x:222.5,y:96},0).wait(5).to({regX:222.2,regY:68.8,x:222.2,y:74.7},0).wait(1).to({y:74.5},0).wait(1).to({y:74.2},0).wait(1).to({y:73.8},0).wait(1).to({y:73.2},0).wait(1).to({y:72.6},0).wait(1).to({y:71.9},0).wait(1).to({y:71.2},0).wait(1).to({y:70.5},0).wait(1).to({y:69.9},0).wait(1).to({y:69.4},0).wait(1).to({y:69.1},0).wait(1).to({regX:222.5,regY:90,x:222.5,y:90},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,445,180);


(lib.BirdDistractorLoop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.instance = new lib.BirdAngry("synched",3);
	this.instance.setTransform(-141.9,-131.3,1,1,-17.2,0,0,-1.1,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-141.9,-131.3,-148.8,-133.5,-152.5,-134.7,-153.8,-135.1,-161.2,-142.4,-172.9,-154,-179.1,-159.7,-208.5,-187,-235.4,-200.7,-274.2,-220.4,-307.7,-212.8,-349.5,-203.3,-381.7,-151.4,-401.3,-119.9,-402.1,-101]},startPosition:0},8).to({rotation:0,skewX:17.2,skewY:-162.8,guide:{path:[-402.1,-100.8,-402.1,-100.8,-402.1,-100.8]},startPosition:1},1).to({guide:{path:[-402.1,-100.8,-402.9,-85,-390.7,-77.6,-369.2,-64.7,-308.7,-78.6,-264.7,-88.9,-205.8,-111.9,-186.4,-119.6,-168.7,-127.3,-164.2,-129.3,-160.8,-130.7]}},7).to({guide:{path:[-160.6,-130.7,-153.7,-133.8,-152.3,-134.7,-152,-134.9,-151.6,-135.1,-151.4,-135.2,-143.6,-142.4,-134.2,-151.1,-125.2,-158.4,-94.8,-183.2,-65.7,-196.5,-25,-215.1,9.8,-209.4,53.2,-202.2,85,-157.4,108.5,-124.5,110.4,-105.2]}},7).to({rotation:-17.2,skewX:0,skewY:0,guide:{path:[110.4,-105,110.4,-105,110.4,-105]},startPosition:2},1).to({scaleX:1,scaleY:1,rotation:-17.1,guide:{path:[110.4,-104.9,112.3,-85.8,93.7,-79.5,75,-73.2,35.7,-79.7,-3.6,-86.2,-67.8,-106.7,-71.3,-107.8,-75.2,-109]},startPosition:1},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.4,-190.2,102.6,91.4);


(lib.BeachDistractorAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{loop:97});

	// timeline functions:
	this.frame_42 = function() {
		cjs.Sound.play("sfx_birdfly");
	}
	this.frame_128 = function() {
		this.gotoAndPlay("loop");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(42).call(this.frame_42).wait(86).call(this.frame_128).wait(1));

	// Bird Distractor 
	this.instance = new lib.BirdAngry("synched",3);
	this.instance.setTransform(1193.9,-17.8,1,1,-33.2,0,0,16,64.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(43).to({_off:false},0).to({rotation:3.5,x:910.2,y:250.7},8,cjs.Ease.get(1)).wait(1).to({regY:64.5,x:910.4,y:252.9,startPosition:0},0).wait(1).to({x:910.8,y:257.5,startPosition:1},0).wait(1).to({x:911.2,y:264,startPosition:2},0).wait(1).to({x:911.8,y:271.5,startPosition:3},0).wait(1).to({x:912.3,y:279.4,startPosition:0},0).wait(1).to({x:912.9,y:286.5,startPosition:1},0).wait(1).to({x:913.3,y:292.2,startPosition:2},0).wait(1).to({regY:64.8,x:913.5,y:296.3,startPosition:3},0).wait(1).to({regY:64.5,x:913.3,y:292.2,startPosition:0},0).wait(1).to({x:912.8,y:286.1,startPosition:1},0).wait(1).to({x:912.3,y:278.1,startPosition:2},0).wait(1).to({x:911.6,y:269.4,startPosition:3},0).wait(1).to({x:911,y:261.2,startPosition:0},0).wait(1).to({x:910.6,y:254.6,startPosition:1},0).wait(1).to({regY:64.8,x:910.2,y:250.7,startPosition:3},0).wait(1).to({regY:64.5,x:910.4,y:252.9,startPosition:0},0).wait(1).to({x:910.7,y:257.5,startPosition:1},0).wait(1).to({x:911.2,y:264,startPosition:2},0).wait(1).to({x:911.7,y:271.5,startPosition:3},0).wait(1).to({x:912.3,y:279.4,startPosition:0},0).wait(1).to({x:912.8,y:286.5,startPosition:1},0).wait(1).to({x:913.2,y:292.2,startPosition:2},0).wait(1).to({regY:64.8,x:913.5,y:296.3,startPosition:3},0).wait(1).to({regY:64.5,x:913.3,y:292.8,startPosition:0},0).wait(1).to({x:912.9,y:287.8,startPosition:1},0).wait(1).to({x:912.4,y:281.3,startPosition:2},0).wait(1).to({x:911.9,y:273.8,startPosition:3},0).wait(1).to({x:911.4,y:266.2,startPosition:0},0).wait(1).to({x:910.9,y:259.4,startPosition:1},0).wait(1).to({x:910.5,y:254,startPosition:2},0).wait(1).to({regY:64.8,x:910.2,y:250.7,startPosition:3},0).wait(1).to({regY:64.5,x:910.4,y:252.9,startPosition:0},0).wait(1).to({x:910.7,y:257.5,startPosition:1},0).wait(1).to({x:911.2,y:264,startPosition:2},0).wait(1).to({x:911.7,y:271.5,startPosition:3},0).wait(1).to({x:912.3,y:279.4,startPosition:0},0).wait(1).to({x:912.8,y:286.5,startPosition:1},0).wait(1).to({x:913.2,y:292.2,startPosition:2},0).wait(1).to({regY:64.8,x:913.5,y:296.3,startPosition:3},0).wait(1).to({regY:64.5,x:913.2,y:292.2,startPosition:0},0).wait(1).to({x:912.8,y:286.1,startPosition:1},0).wait(1).to({x:912.2,y:278.1,startPosition:2},0).wait(1).to({x:911.6,y:269.4,startPosition:3},0).wait(1).to({x:911,y:261.2,startPosition:0},0).wait(1).to({x:910.5,y:254.6,startPosition:1},0).wait(1).to({regY:64.8,x:910.2,y:250.7,startPosition:3},0).wait(1).to({regY:64.5,rotation:2.8,x:910.7,y:252.9,startPosition:0},0).wait(1).to({rotation:1.7,x:911.4,y:257.4,startPosition:1},0).wait(1).to({rotation:0.1,x:912.5,y:263.7,startPosition:2},0).wait(1).to({rotation:-1.8,x:913.8,y:271.2,startPosition:3},0).wait(1).to({rotation:-3.8,x:915,y:278.9,startPosition:0},0).wait(1).to({rotation:-5.6,x:916.2,y:285.9,startPosition:1},0).wait(1).to({rotation:-7,x:917.2,y:291.5,startPosition:2},0).wait(1).to({regX:15.8,regY:64.9,rotation:-8,x:917.9,y:295.6,startPosition:3},0).wait(1).to({regX:16,regY:64.5,x:917.1,y:292.2,startPosition:0},0).wait(1).to({x:915.8,y:287.3,startPosition:1},0).wait(1).to({x:914.1,y:281,startPosition:2},0).wait(1).to({x:912.1,y:273.8,startPosition:3},0).wait(1).to({x:910.1,y:266.4,startPosition:0},0).wait(1).to({x:908.3,y:259.8,startPosition:1},0).wait(1).to({x:906.8,y:254.6,startPosition:2},0).wait(1).to({regY:64.8,x:905.7,y:251.4,startPosition:3},0).wait(1).to({regY:64.5,x:906.3,y:253.6,startPosition:0},0).wait(1).to({x:907.6,y:258.1,startPosition:1},0).wait(1).to({x:909.3,y:264.3,startPosition:2},0).wait(1).to({x:911.3,y:271.6,startPosition:3},0).wait(1).to({x:913.3,y:279.2,startPosition:0},0).wait(1).to({x:915.2,y:286.1,startPosition:1},0).wait(1).to({x:916.8,y:291.6,startPosition:2},0).wait(1).to({regX:15.8,regY:64.9,x:917.9,y:295.6,startPosition:3},0).wait(1).to({regX:16,regY:64.5,x:917,y:291.6,startPosition:0},0).wait(1).to({x:915.3,y:285.7,startPosition:1},0).wait(1).to({x:913.2,y:278,startPosition:2},0).wait(1).to({x:910.9,y:269.5,startPosition:3},0).wait(1).to({x:908.7,y:261.6,startPosition:0},0).wait(1).to({x:907,y:255.2,startPosition:1},0).wait(1).to({regY:64.8,x:905.7,y:251.4,startPosition:3},0).wait(1));

	// Bird Distractor 
	this.instance_1 = new lib.BirdAngry("synched",3);
	this.instance_1.setTransform(923.3,-41.8,1,1,-33.2,0,0,16,64.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48).to({_off:false},0).to({rotation:4.7,x:730.3,y:133},8,cjs.Ease.get(1)).wait(1).to({regY:64.5,rotation:4.7,x:730.4,y:135.3,startPosition:0},0).wait(1).to({x:730.7,y:139.9,startPosition:1},0).wait(1).to({x:731,y:146.3,startPosition:2},0).wait(1).to({x:731.4,y:153.9,startPosition:3},0).wait(1).to({x:731.8,y:161.7,startPosition:0},0).wait(1).to({x:732.1,y:168.8,startPosition:1},0).wait(1).to({x:732.4,y:174.5,startPosition:2},0).wait(1).to({regY:64.8,x:732.6,y:178.7,startPosition:3},0).wait(1).to({regY:64.5,x:732.4,y:174.6,startPosition:0},0).wait(1).to({x:732.1,y:168.5,startPosition:1},0).wait(1).to({x:731.7,y:160.5,startPosition:2},0).wait(1).to({x:731.3,y:151.8,startPosition:3},0).wait(1).to({x:730.9,y:143.6,startPosition:0},0).wait(1).to({x:730.5,y:137,startPosition:1},0).wait(1).to({regY:64.8,x:730.3,y:133,startPosition:3},0).wait(1).to({regY:64.5,x:730.4,y:135.3,startPosition:0},0).wait(1).to({x:730.7,y:139.9,startPosition:1},0).wait(1).to({x:731,y:146.3,startPosition:2},0).wait(1).to({x:731.4,y:153.9,startPosition:3},0).wait(1).to({x:731.8,y:161.7,startPosition:0},0).wait(1).to({x:732.1,y:168.8,startPosition:1},0).wait(1).to({x:732.4,y:174.5,startPosition:2},0).wait(1).to({regY:64.8,x:732.6,y:178.7,startPosition:3},0).wait(1).to({regY:64.5,x:732.4,y:175.2,startPosition:0},0).wait(1).to({x:732.2,y:170.2,startPosition:1},0).wait(1).to({x:731.9,y:163.7,startPosition:2},0).wait(1).to({x:731.5,y:156.2,startPosition:3},0).wait(1).to({x:731.1,y:148.6,startPosition:0},0).wait(1).to({x:730.8,y:141.8,startPosition:1},0).wait(1).to({x:730.5,y:136.4,startPosition:2},0).wait(1).to({regY:64.8,x:730.3,y:133,startPosition:3},0).wait(1).to({regY:64.5,x:730.4,y:135.3,startPosition:0},0).wait(1).to({x:730.7,y:139.9,startPosition:1},0).wait(1).to({x:731,y:146.3,startPosition:2},0).wait(1).to({x:731.4,y:153.9,startPosition:3},0).wait(1).to({x:731.8,y:161.7,startPosition:0},0).wait(1).to({x:732.1,y:168.8,startPosition:1},0).wait(1).to({x:732.4,y:174.5,startPosition:2},0).wait(1).to({regY:64.8,x:732.6,y:178.7,startPosition:3},0).wait(1).to({regY:64.5,x:732.4,y:174.6,startPosition:0},0).wait(1).to({x:732.1,y:168.5,startPosition:1},0).wait(1).to({x:731.7,y:160.5,startPosition:2},0).wait(1).to({x:731.3,y:151.8,startPosition:3},0).wait(1).to({x:730.9,y:143.6,startPosition:0},0).wait(1).to({x:730.5,y:137,startPosition:1},0).wait(1).to({regY:64.8,x:730.3,y:133,startPosition:3},0).wait(1).to({regY:64.5,x:730.4,y:135.3,startPosition:0},0).wait(1).to({x:730.7,y:139.9,startPosition:1},0).wait(1).to({x:731,y:146.3,startPosition:2},0).wait(1).to({x:731.4,y:153.9,startPosition:3},0).wait(1).to({x:731.8,y:161.7,startPosition:0},0).wait(1).to({x:732.1,y:168.8,startPosition:1},0).wait(1).to({x:732.4,y:174.5,startPosition:2},0).wait(1).to({regY:64.8,x:732.6,y:178.7,startPosition:3},0).wait(1).to({regY:64.5,x:732.4,y:175.2,startPosition:0},0).wait(1).to({x:732.2,y:170.2,startPosition:1},0).wait(1).to({x:731.9,y:163.7,startPosition:2},0).wait(1).to({x:731.5,y:156.2,startPosition:3},0).wait(1).to({x:731.1,y:148.6,startPosition:0},0).wait(1).to({x:730.8,y:141.8,startPosition:1},0).wait(1).to({x:730.5,y:136.4,startPosition:2},0).wait(1).to({regY:64.8,x:730.3,y:133,startPosition:3},0).wait(1).to({regY:64.5,x:730.4,y:135.3,startPosition:0},0).wait(1).to({x:730.7,y:139.9,startPosition:1},0).wait(1).to({x:731,y:146.3,startPosition:2},0).wait(1).to({x:731.4,y:153.9,startPosition:3},0).wait(1).to({x:731.8,y:161.7,startPosition:0},0).wait(1).to({x:732.1,y:168.8,startPosition:1},0).wait(1).to({x:732.4,y:174.5,startPosition:2},0).wait(1).to({regY:64.8,x:732.6,y:178.7,startPosition:3},0).wait(3));

	// Bird Distractor 
	this.instance_2 = new lib.BirdAngry("synched",0);
	this.instance_2.setTransform(61.9,152.7,1,1,0,0,180,-1,73);
	this.instance_2._off = true;

	this.instance_3 = new lib.BirdDistractorLoop("synched",0);
	this.instance_3.setTransform(266,456.7,1,1,0,0,180,-1,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},56).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_3}]},1).wait(66));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).to({regX:-1.1,x:362.1,y:238.4,startPosition:2},6).to({_off:true,regX:-1,x:266,y:456.7,startPosition:0},1).wait(66));

	// Bird Distractor 
	this.instance_4 = new lib.BirdAngry("synched",0);
	this.instance_4.setTransform(39.1,216.6,1,1,0,0,180,-1,73);
	this.instance_4._off = true;

	this.instance_5 = new lib.BirdDistractorLoop("synched",0);
	this.instance_5.setTransform(243.1,520.7,1,1,0,0,180,-1,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},43).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},1).wait(79));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(43).to({_off:false},0).to({x:339.2,y:302.3,startPosition:2},6).to({_off:true,x:243.1,y:520.7,startPosition:0},1).wait(79));

	// Bird Distractor 
	this.instance_6 = new lib.BirdAngry("synched",0);
	this.instance_6.setTransform(819.5,277.2,1,1,0,0,0,-1,73);

	this.instance_7 = new lib.BirdDistractorLoop("synched",0);
	this.instance_7.setTransform(607.3,584.8,1,1,0,0,0,-1,73);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},34).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_6}]},6).to({state:[{t:this.instance_6}]},4).to({state:[{t:this.instance_7}]},1).wait(76));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(34).to({startPosition:0},0).to({startPosition:0},4).to({y:186.1},4).to({startPosition:2},6).to({regY:72.9,scaleX:1,scaleY:1,rotation:-14.3,x:560.1,y:350},4).to({_off:true,regY:73,scaleX:1,scaleY:1,rotation:0,x:607.3,y:584.8,startPosition:0},1).wait(76));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(793.5,234.2,86,69);


// stage content:



(lib.Beach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Whale
	this.Whale = new lib.Symbol();
	this.Whale.setTransform(349.6,67.3,1,1,0,0,0,10.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.Whale).wait(200));

	// BeachDistractorAnim
	this.instance = new lib.BeachDistractorAnim();
	this.instance.setTransform(510.2,362.9,1,1,0,0,0,510.2,362.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	// Shark
	this.instance_1 = new lib.Shark("synched",0);
	this.instance_1.setTransform(142.2,101.9,1,1,0,0,0,2,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(200));

	// Turtle
	this.instance_2 = new lib.Turtle("synched",0);
	this.instance_2.setTransform(1232.5,154.3,1,1,0,0,0,4.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(776.8,436.8,1217.9,250.5);

})(NoahAnims.beach, cjs);