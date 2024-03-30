(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.Background_feeding01 = function() {
	return creatureDutyAssets.getSprite("Background_feeding01.jpg");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Background_feeding02 = function() {
	return creatureDutyAssets.getSprite("Background_feeding02.jpg");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.creature_shadow = function() {
	return creatureDutyAssets.getSprite("creature_shadow.png");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,167,75);


(lib.CreatureDuty_Map = function() {
	return creatureDutyAssets.getSprite("CreatureDuty_Map.jpg");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.Map_no_towers = function() {
	return creatureDutyAssets.getSprite("Map_no_towers.jpg");
	_log(" ___ Map_no_towers ___");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.tower = function() {
	return creatureDutyAssets.getSprite("tower.png");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,69,178);


(lib.tube_back = function() {
	return creatureDutyAssets.getSprite("tube_back.png");
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,745);


(lib.tube_front = function() {
	var sprite = creatureDutyAssets.getSprite("tube_front.png");
	sprite.nominalBounds = new cjs.Rectangle(0,0,160,745);
	return sprite;
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,160,745);


(lib.watercloud = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],0,0,0,0,0,53.3).s().p("AgsDGQgJgIgHgJQgTANgaAAQgjAAgYgZQgZgZAAgkQAAgSAHgQQglAAgagWQgagXAAgeQAAghAagXQAWgSAcgEQgIgSgBgVQABgkAXgZQAYgaAgAAQAiAAAXAaQAGAGAFAJQAFgVAPgPQAWgXAdAAQAfAAAWAXQAKAJAFAMQAUgKAXABQAjAAAYATQAXAVAAAcQAAAJgCAIQAZADATARQAWAUAAAdQAAAegWASQgIAGgHAFQAEANAAAPQAAAngbAcQgbAdgmAAQgJAAgJgCQgEAdgaAWQgdAagrAAQgpAAgegag");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.3,-22.4,54.6,44.9);


(lib.water_ripple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.1){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5FABC2").s().p("AADBNQiIgBgniNQA8AtBJANQB9ATBXhZIgeBTQgaBIhnAAIgLgBg");
	this.shape.setTransform(0.3,-18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5FABC2").s().p("AgaBpQgagCgZgHQgkgJgcgYQgcgXgUgeIgkgxQgRgagNgbIAIAIQAKAIAKAHQAVAPAXAJQAzAWA2AIQAwAIAugDIBJgIQAdgEAcgHIAcgLQARgFAPgLIATgOQATgRAMgWQgLAegRAcQgQAegUAZIggApQgTAYgdAPQgKAGgMAEQglANgoADQgSAAgVgFg");
	this.shape_1.setTransform(0.3,-8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5FABC2").s().p("AkcAMQg8g/gdhBQAmAvBoAkQBoAiCEAAQCGAABhgkQBggnAphDQgXBHg6BGQh0COipAAQinAAh8iCg");
	this.shape_2.setTransform(0.3,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.water_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.1){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(4));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54767C").s().p("AApgnQA1gcA0gWQAzgXAZgKQhdA1iVBWQiWBYgzASQDUiGAygcg");
	this.shape.setTransform(14.8,-29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54767C").s().p("AivAYQAAgJACgJQAYidCThLICyhYQhRA0hwBDQhxBCgUCVQgTCXgFCQg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54767C").s().p("AgHhcQADhoAFhIQADCHADBPQADBOgBBhQgCBggDA0QgQicAFjNg");
	this.shape_2.setTransform(-16.8,28.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.water_drop = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABD8DD").s().p("AADAVQgCgJgFgEQgEgBgCgEQgGgDAAgHQAAgHAGgFQAEgGAGABQAHgBAEAGQAGAFAAAHIAAADIAAABIgCADIgKAZIgCgEg");
	this.shape.setTransform(0,0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,-2.5,3.5,5.2);


(lib.watchtower = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tower();
	this.instance.setTransform(-34.5,-89);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.5,-89,69,178);


(lib.tube_front_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tube_front();
	this.instance.setTransform(-80,-372.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-372.5,160,745);


(lib.streak6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyCXQgkgKgYgfQgPgTAFgXQACgNAEgMQAqgCAngMIAigLIA1gSQBugoBXhxQgSAsguB4QgmA/g5AmQgqAgg1AKIgOAAQgRAAgQgDg");
	this.shape.setTransform(19,10.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,-5.2,37.5,30.9);


(lib.streak4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjVHzQC9j8BIkwQA1jbgCjiIAFABQB5DKgMDuQgKDDhQC0QhaDLjTgPIgNABQgLAAgLgEg");
	this.shape.setTransform(21.6,45.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-5.1,42.9,100.8);


(lib.streak3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB7NCQgVgTAAgbQAAghAWgxQAeg+ARgpIAVg8QAviogMjAQgMi+hXi7QhYi8iDieQiGidikh/IgjgcQBIAJBBAdQFICQC/E1QBdCXA1CqQBIDngnDwQgRBogmBhQAAAUglBHQgkBHgXAUIgQAQQgOAKgXAHQgUAGgNAAQgfAAgUgTg");
	this.shape.setTransform(56.1,87);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.6,1.7,85,170.7);


(lib.streak2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACHDhQgLgZgOgaQhwi6g1hOQhbh+iNhBIghgOIgMgHIAZgHIBpgFQBTAKBXA2QCaBiB2CXQBiB8gGBMIABAGQAAAegdAkIgIAKIgLAJQgeAZgmAAQgpAAgphag");
	this.shape.setTransform(33.7,33.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,1.6,66.7,63.1);


(lib.streak1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhrAcQAAhhBbgYQAfgKAdAKQAYAEATAPQAcAWAAAnQAAApglAXQgbAQgbAAQgNAAgLgCQgSgUg/AlIghARQAHgUAAgzg");
	this.shape.setTransform(11.5,9.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.1,19.9);


(lib.spin_swoosh = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(106,194,194,0.302)").s().p("AlmJ8IgQgOQg9g+AAhXQAAhWA9g+IgBAAIANgOIAOgJQARgKATgIQAOgHAOgFQAagLAcgKIABAAIANgDIAFgDQA9giA1g0QCIiLAAjCQAAjEiIiKQhOhNhegjQgYgIgXgFQCbgHBFAmIhThCQBZAYBOAhIAYAMQAzAZAvAdQg/hWhqgzQBHAMBEAcQBLAtBDBDQDSDSAAEpQAAEmjSDSQh9B+icAzQgfAKgfAHIhDAHIAAgDQgUAEgVAAQhNAAg4gvg");
	this.shape.setTransform(43.7,68.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,87.3,136.7);


(lib.shadow_layer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(234,255,255,0.702)").s().p("AhLD0QhqgIg0hMQg1hMAghjQAghmBghCQBihDBnAHQBqAHA1BMQA0BMgfBkQggBlhhBDQhYA8heAAIgTAAg");
	this.shape.setTransform(27.2,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,140,140,0.251)").s().p("AhBLHQlDAAjkjkQg0g1gqg7QDACGD3AAQFAAADjjkQDkjkAAk/QABj3iGjBQA6AqA2A1QDkDkgBFCQAAFAjkDkQjjDkk/AAIgBAAg");
	this.shape_1.setTransform(71.1,76.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.2,147.7);


(lib.land_sunbeam4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		this.direction = Math.random()<0.5 ? 1 : -1;
		this.speed = 0.01;
		*/
	}
	this.frame_1 = function() {
		/*
		this.alpha += this.direction*this.speed;
		*/
	}
	this.frame_2 = function() {
		/*
		if(Math.random() < 0.1 || this.alpha > 0.6 || this.alpha < 0.1){
			this.direction*=-1;
		}
		this.gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEDA28","rgba(254,219,49,0.957)","rgba(255,228,119,0.671)","rgba(255,236,166,0.431)","rgba(255,243,202,0.243)","rgba(255,248,229,0.11)","rgba(255,253,246,0.027)","rgba(255,255,255,0)"],[0,0.031,0.243,0.443,0.624,0.784,0.914,1],145.4,-392.4,-54.1,95.1).s().p("EgrcAuDMA0choYMAidAAtMg3wBz+g");
	this.shape.setTransform(278.1,373.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,556.3,747);


(lib.land_sunbeam3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});


	// timeline functions:
	this.frame_0 = function() {
		/*
		this.direction = Math.random()<0.5 ? 1 : -1;
		this.speed = 0.01;
		*/
	}
	this.frame_1 = function() {
		/*
		this.alpha += this.direction*this.speed;
		*/
	}
	this.frame_2 = function() {
		/*
		if(Math.random() < 0.1 || this.alpha > 0.6 || this.alpha < 0.1){
			this.direction*=-1;
		}
		this.gotoAndPlay(1);
		*/
	}
	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEDA28","rgba(254,219,49,0.957)","rgba(255,228,119,0.671)","rgba(255,236,166,0.431)","rgba(255,243,202,0.243)","rgba(255,248,229,0.11)","rgba(255,253,246,0.027)","rgba(255,255,255,0)"],[0,0.031,0.243,0.443,0.624,0.784,0.914,1],145.5,-392.4,-54,95.1).s().p("EgrcAuDMA0choYMAidAAtMg3wBz+g");
	this.shape.setTransform(278.2,373.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,556.3,747);


(lib.land_sunbeam2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		this.direction = Math.random()<0.5 ? 1 : -1;
		this.speed = 0.01;
		*/
	}
	this.frame_1 = function() {
		/*
		this.alpha += this.direction*this.speed;
		*/
	}
	this.frame_2 = function() {
		/*
		if(Math.random() < 0.1 || this.alpha > 0.6 || this.alpha < 0.1){
			this.direction*=-1;
		}
		this.gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEDA28","rgba(254,219,49,0.957)","rgba(255,228,119,0.671)","rgba(255,236,166,0.431)","rgba(255,243,202,0.243)","rgba(255,248,229,0.11)","rgba(255,253,246,0.027)","rgba(255,255,255,0)"],[0,0.031,0.243,0.443,0.624,0.784,0.914,1],116.3,-289.8,-83.2,197.7).s().p("EghIA4PMA0choYIN1p2Mg3vBz/g");
	this.shape.setTransform(212.1,371.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,424.3,742.4);


(lib.land_sunbeam1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		this.direction = Math.random()<0.5 ? 1 : -1;
		this.speed = 0.01;
		*/
	}
	this.frame_1 = function() {
		/*
		this.alpha += this.direction*this.speed;
		*/
	}
	this.frame_2 = function() {
		/*
		if(Math.random() < 0.1 || this.alpha > 0.6 || this.alpha < 0.1){
			this.direction*=-1;
		}
		this.gotoAndPlay(1);
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEDA28","rgba(254,219,49,0.957)","rgba(255,228,119,0.671)","rgba(255,236,166,0.431)","rgba(255,243,202,0.243)","rgba(255,248,229,0.11)","rgba(255,253,246,0.027)","rgba(255,255,255,0)"],[0,0.031,0.243,0.443,0.624,0.784,0.914,1],116.3,-289.7,-83.2,197.7).s().p("EghIA4PMA0choYIN1p2Mg3wBz/g");
	this.shape.setTransform(212.2,371.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,424.3,742.5);


(lib.land_sunbeam0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/*
		this.direction = Math.random()<0.5 ? 1 : -1;
		this.speed = 0.01;
		*/
	}
	this.frame_1 = function() {
		/*
		this.alpha += this.direction*this.speed;
		*/
	}
	this.frame_2 = function() {
		/*
		if(Math.random() < 0.1 || this.alpha > 0.6 || this.alpha < 0.1){
			this.direction*=-1;
		}
		this.gotoAndPlay(1);
		*/
	}
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEDA28","rgba(254,219,49,0.957)","rgba(255,228,119,0.671)","rgba(255,236,166,0.431)","rgba(255,243,202,0.243)","rgba(255,248,229,0.11)","rgba(255,253,246,0.027)","rgba(255,255,255,0)"],[0,0.031,0.243,0.443,0.624,0.784,0.914,1],116.3,-289.7,-83.2,197.7).s().p("EghIA4PMA0choYIN1p2Mg3wBz/g");
	this.shape.setTransform(212.2,371.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,424.3,742.5);


(lib.land_dec_waterpool = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.land_dec_swing = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.land_dec_shrooms = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.land_dec_picture = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.hexagon = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsOG6IAJuCIMNm6IMHHJIgJOCIsNG6g");
	this.shape.setTransform(87.7,101.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.4,11.2,156.7,179.9);


(lib.Path_12 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgB/gwFIDrgBMAAUBgJIjqAEg");
	this.shape.setTransform(12.8,308);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,615.9);


(lib.small_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2uKWQg+AAgsgsQgsgsAAg+IAAv/QAAg+AsgsQAsgsA+AAMAtdAAAQA+AAAsAsQAsAsAAA+IAAP/QAAA+gsAsQgsAsg+AAgA4CpTQgkAjAAAxIAAP/QAAAxAkAkQAiAjAyAAMAtdAAAQAyAAAjgjQAjgkAAgxIAAv/QAAgxgjgjQgjgkgyAAMgtdAAAQgyAAgiAkg");
	this.shape.setTransform(160.6,66.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321.1,132.5);


(lib.med_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2uNxQg+AAgsgsQgsgrAAg/IAA21QAAg/AsgrQAsgsA+gBMAtdAAAQA/ABArAsQAsArAAA/IAAW1QAAA/gsArQgrAsg/AAgA4CsvQgkAjAAAyIAAW1QAAAyAkAkQAiAiAyABMAtdAAAQAygBAjgiQAjgkAAgyIAA21QAAgygjgjQgjgkgyAAMgtdAAAQgyAAgiAkg");
	this.shape.setTransform(160.6,88.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321.1,176.4);


(lib.large_2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A2uToQg+ABgsgtQgsgrAAg+MAAAgikQAAg/AsgrQAsgsA+gBMAtdAAAQA/ABArAsQAsArAAA/MAAAAikQAAA+gsArQgrAtg/gBgA4CynQgkAkAAAyMAAAAikQAAAxAkAjQAiAkAygBMAtdAAAQAyABAjgkQAjgjAAgxMAAAgikQAAgygjgkQgjgigygBMgtdAAAQgyABgiAig");
	this.shape.setTransform(160.6,125.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,321.1,251.4);


(lib.creatureGlow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#91A165","rgba(72,138,66,0)"],[0.192,1],0,0,0,0,0,72.6).s().p("An8H9QjSjTgBkqQABkoDSjUQDUjSEogBQEqABDTDSQDTDUAAEoQAAEqjTDTQjTDTkqAAQkoAAjUjTg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72,-72,144,144);


(lib.butterfly_wing_right = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9EF2").s().p("AgLBtQgbgigMgsQgZhXBMg2IA4BoIgLBBQgPA0geAAQgEAAgIgCg");
	this.shape.setTransform(9.6,22.9,1,1,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D663C7").s().p("AgWC2Qgqg5gQhLQgiiUB7hXIBPC1IgCAgQgFApgJAhQgZBUgvAAQgKAAgMgEg");
	this.shape_1.setTransform(10.3,22.3,1,1,30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9EF2").s().p("ABEB2Qg1gBgagOQhtg2gcgxQgXgpAjghQAcgbA2gLQAzgLAWAOQArAYApA6QAVAbAMAZQAUAZACAhQACAQgDALQgoAIgsAAIgFAAg");
	this.shape_2.setTransform(3.3,-14.2,1,1,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D663C7").s().p("AgfCjQiphUgrhNQgjg+A1gzQAtgqBSgRQBPgQAjAVQBCAlBDBaQAiAqAVAmQAeAnAPApQAIAUABAMQhRARhHAFQgZACgWAAQg8AAgegPg");
	this.shape_3.setTransform(4.5,-14.9,1,1,30);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.7,-36.4,37.3,75.5);


(lib.butterfly_wing_left = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9EF2").s().p("AAOBGIhQglIg6huQCEgVBIBOQAkAlAJArQgOAXgjAAQgaAAgkgNg");
	this.shape.setTransform(-1.4,24.7,1,1,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D663C7").s().p("AAZBtQgqgPgxgYIgogWIhiipQDXgiB3B5QA7A7AQBDQgWAlg4AAQgqAAg8gUg");
	this.shape_1.setTransform(-1.8,25.1,1,1,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9EF2").s().p("AhGCaQghgYgIggQgOgZgLgjQgWhEAQgwQAJgaA9gfQBBghA4gCQBFgEAWAtQAbA2gxB0QgNAegzAoQgtAjgwAZQgPgFgQgMg");
	this.shape_2.setTransform(0.7,-11.8,1,1,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D663C7").s().p("AhsDtQgzgkgMgxQgWgngRg2QgihqAYhKQAOgpBfgvQBjgyBYgEQBqgGAjBGQApBThMC0QgTAuhPA9QhFA2hMAnQgWgIgZgTg");
	this.shape_3.setTransform(0.6,-11.8,1,1,15);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-36.3,48.4,77.8);


(lib.butterfly_body = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAAIgggbQAYAUAqAOQAVAIARAEIgKAJIgBAAQgbAAgigcg");
	this.shape.setTransform(-6.7,-8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBAQQgHgBgEgFQgEgFABgFQABgGAFgFQAGgEAEAAQAHAAAEAFQAFAFgBAFQgBAHgFAFQgFAEgFAAIgBAAg");
	this.shape_1.setTransform(-12.8,-9.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgWA0IAVgiQATgnAFgeIgFAqQgJAsgSARg");
	this.shape_2.setTransform(2.6,-13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAiBoQgSgJgHgRQgIgRgfhTIgghRIAOgGIBnCqIAHAVQAEAWgQAGQgHgBgJgFg");
	this.shape_3.setTransform(8.2,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgEAFAAQAGAAAFAEQAEAFABAFQgBAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_4.setTransform(6.2,-18.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AggAhQgOgNAAgUQAAgSAOgOQAOgOASAAQATAAAOAOQAOAOAAASQAAAUgOANQgOAOgTAAQgSAAgOgOg");
	this.shape_5.setTransform(0.8,-5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-20,29,40.2);


(lib.waterfall_drop_animate_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.05){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(6));

	// Layer 1
	this.instance = new lib.water_drop();
	this.instance.setTransform(-0.1,0.3,1,1,-13.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({rotation:-64.4,guide:{path:[-0.2,0.2,-5.6,-15.8,-24.2,-21.6]}},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.waterfall_cloud = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.watercloud();
	this.instance.setTransform(0,0,0.956,0.956);
	this.instance.alpha = 0.539;

	this.instance_1 = new lib.watercloud();
	this.instance_1.alpha = 0.379;

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.3,-22.4,54.6,44.9);


(lib.ripples = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.water_ripple();
	this.instance.setTransform(-409.1,303.1,0.275,0.273,4);
	this.instance.alpha = 0.262;

	this.instance_1 = new lib.water_ripple();
	this.instance_1.setTransform(-376.7,355.3,0.275,0.273,-17.7);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.water_ripple();
	this.instance_2.setTransform(-392.8,340.9,0.275,0.273,-15);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.water_ripple();
	this.instance_3.setTransform(-382.1,280.7,0.275,0.273,4);
	this.instance_3.alpha = 0.398;

	this.instance_4 = new lib.water_ripple();
	this.instance_4.setTransform(-390.2,287.4,0.275,0.273,4);
	this.instance_4.alpha = 0.262;

	this.instance_5 = new lib.water_ripple();
	this.instance_5.setTransform(-409.1,313.1,0.275,0.273,4);
	this.instance_5.alpha = 0.262;

	this.instance_6 = new lib.water_ripple();
	this.instance_6.setTransform(-399.6,333.4,0.275,0.273,4);
	this.instance_6.alpha = 0.262;

	this.instance_7 = new lib.water_ripple();
	this.instance_7.setTransform(-382.7,349.7,0.275,0.273,-17.7);
	this.instance_7.alpha = 0.262;

	this.instance_8 = new lib.water_ripple();
	this.instance_8.setTransform(-370.1,359.8,0.275,0.273,-38.5);
	this.instance_8.alpha = 0.262;

	this.instance_9 = new lib.water_ripple();
	this.instance_9.setTransform(391.9,-216.3,0.305,0.305,-20,0,0,0.3,4.6);
	this.instance_9.alpha = 0.5;

	this.instance_10 = new lib.water_ripple();
	this.instance_10.setTransform(285.8,-308.8,0.385,0.385,136.2,0,0,0.2,4.5);
	this.instance_10.alpha = 0.5;

	this.instance_11 = new lib.water_ripple();
	this.instance_11.setTransform(328,-242.1,0.702,0.702,39.4,0,0,0.4,4.5);
	this.instance_11.alpha = 0.5;

	this.instance_12 = new lib.water_ripple();
	this.instance_12.setTransform(263,-200.6,0.315,0.315,39.4,0,0,0.1,4.4);

	this.instance_13 = new lib.water_ripple();
	this.instance_13.setTransform(295.3,-300,0.385,0.385,136.2,0,0,0.2,4.5);
	this.instance_13.alpha = 0.5;

	this.instance_14 = new lib.water_ripple();
	this.instance_14.setTransform(-107.5,143.2,0.319,0.318,-15.8);

	this.instance_15 = new lib.water_ripple();
	this.instance_15.setTransform(-129.2,128.5,0.275,0.273,-11.5);

	this.instance_16 = new lib.water_ripple();
	this.instance_16.setTransform(-133.3,114.9,0.275,0.273,24.2);

	this.instance_17 = new lib.water_ripple();
	this.instance_17.setTransform(-116.5,105,0.275,0.273,24.2);

	this.instance_18 = new lib.water_ripple();
	this.instance_18.setTransform(-76.8,80.5,0.275,0.273,-14.8);

	this.instance_19 = new lib.water_ripple();
	this.instance_19.setTransform(-94.2,62.6,0.275,0.273,-0.3);

	this.instance_20 = new lib.water_ripple();
	this.instance_20.setTransform(-22.7,-50,0.275,0.273,29.6);

	this.instance_21 = new lib.water_ripple();
	this.instance_21.setTransform(-5.3,-55.4,0.275,0.273,54.8);

	this.instance_22 = new lib.water_ripple();
	this.instance_22.setTransform(12.8,-60,0.275,0.273,62.6);

	this.instance_23 = new lib.water_ripple();
	this.instance_23.setTransform(273,-117.4,0.249,0.249,-21.5,0,0,0.2,4.4);

	this.instance_24 = new lib.water_ripple();
	this.instance_24.setTransform(35.9,-61,0.275,0.273,29.6,0,0,-0.1,4.7);

	this.instance_25 = new lib.water_ripple();
	this.instance_25.setTransform(175.5,-40.5,0.19,0.189,72.3,0,0,0.1,4.8);

	this.instance_26 = new lib.water_ripple();
	this.instance_26.setTransform(270.6,-31.1,0.275,0.273,36.6,0,0,0.2,4.9);

	this.instance_27 = new lib.water_ripple();
	this.instance_27.setTransform(274.1,-46.7,0.275,0.273,5.9,0,0,0.3,4.8);

	this.instance_28 = new lib.water_ripple();
	this.instance_28.setTransform(282.5,-58.5,0.198,0.273,47.4,0,0,0.3,4.7);

	this.instance_29 = new lib.water_ripple();
	this.instance_29.setTransform(296,-64.2,0.198,0.273,47.4,0,0,0.3,4.7);

	this.instance_30 = new lib.water_ripple();
	this.instance_30.setTransform(300.9,-104.2,0.187,0.117,-21.5,0,0,0.3,4.8);

	this.instance_31 = new lib.water_ripple();
	this.instance_31.setTransform(261.5,-119.2,0.235,0.147,-21.5,0,0,0.3,4.5);

	this.instance_32 = new lib.water_ripple();
	this.instance_32.setTransform(226.7,-136.9,0.249,0.249,-21.5,0,0,0.2,4.4);

	this.instance_33 = new lib.water_ripple();
	this.instance_33.setTransform(221.1,-145.3,0.273,0.273,11.7,0,0,0.2,4.5);

	this.instance_34 = new lib.water_ripple();
	this.instance_34.setTransform(262,-160.3,0.273,0.273,28.4,0,0,0.3,4.4);

	this.instance_35 = new lib.water_ripple();
	this.instance_35.setTransform(267.2,-167.7,0.273,0.273,11.7,0,0,0.4,4.4);

	this.instance_36 = new lib.water_ripple();
	this.instance_36.setTransform(268.7,-208.8,0.385,0.385,39.4,0,0,0.1,4.5);

	this.instance_37 = new lib.water_ripple();
	this.instance_37.setTransform(317.8,-231.4,0.965,0.965,39.4,0,0,0.3,4.4);
	this.instance_37.alpha = 0.5;

	this.instance_38 = new lib.water_line();
	this.instance_38.setTransform(409.2,-346.8);
	this.instance_38.alpha = 0.301;

	this.instance_39 = new lib.water_line();
	this.instance_39.setTransform(403.3,-348.1);
	this.instance_39.alpha = 0.301;

	this.instance_40 = new lib.water_line();
	this.instance_40.setTransform(400.1,-349.8);
	this.instance_40.alpha = 0.301;

	this.instance_41 = new lib.water_line();
	this.instance_41.setTransform(390.7,-352.8);
	this.instance_41.alpha = 0.301;

	this.instance_42 = new lib.water_line();
	this.instance_42.setTransform(374.4,-356.7);
	this.instance_42.alpha = 0.301;

	this.instance_43 = new lib.water_line();
	this.instance_43.setTransform(388,-353.5);
	this.instance_43.alpha = 0.301;

	this.instance_44 = new lib.water_line();
	this.instance_44.setTransform(400.3,-347.4);
	this.instance_44.alpha = 0.5;

	this.instance_45 = new lib.water_line();
	this.instance_45.setTransform(378.3,-357);
	this.instance_45.alpha = 0.5;

	this.instance_46 = new lib.water_line();
	this.instance_46.setTransform(381.8,-355.5);
	this.instance_46.alpha = 0.5;

	this.instance_47 = new lib.water_line();
	this.instance_47.setTransform(393.1,-352.5);
	this.instance_47.alpha = 0.5;

	this.instance_48 = new lib.water_line();
	this.instance_48.setTransform(404.9,-345.4);

	this.instance_49 = new lib.water_line();
	this.instance_49.setTransform(365.8,-359.7);

	this.instance_50 = new lib.water_line();
	this.instance_50.setTransform(370.9,-357.7);

	this.instance_51 = new lib.water_line();
	this.instance_51.setTransform(397.3,-350.3);

	this.addChild(this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.land_bg_sunlight = function() {
	this.initialize();

	// land_sunbeam0
	this.sunbeam0 = new lib.land_sunbeam0();
	this.sunbeam0.setTransform(325.3,-21.8,1,1,0,0,0,212.2,371.2);
	this.sunbeam0.alpha = 0.309;

	// land_sunbeam1
	this.sunbeam1 = new lib.land_sunbeam1();
	this.sunbeam1.setTransform(60.3,-21.8,1,1,0,0,0,212.2,371.2);
	this.sunbeam1.alpha = 0.309;

	// land_sunbeam2
	this.sunbeam2 = new lib.land_sunbeam2();
	this.sunbeam2.setTransform(-325.1,-78.7,1,1,0,0,0,212.2,371.2);
	this.sunbeam2.alpha = 0.309;

	// land_sunbeam3
	this.sunbeam3 = new lib.land_sunbeam3();
	this.sunbeam3.setTransform(100.3,76.4,1,1,0,0,0,278.2,373.4);
	this.sunbeam3.alpha = 0.309;

	// land_sunbeam4
	this.sunbeam4 = new lib.land_sunbeam4();
	this.sunbeam4.setTransform(-164.7,76.4,1,1,0,0,0,278.1,373.4);
	this.sunbeam4.alpha = 0.309;

	this.addChild(this.sunbeam4,this.sunbeam3,this.sunbeam2,this.sunbeam1,this.sunbeam0);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-537.3,-449.9,1074.8,899.9);


(lib.icon_open = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 1
	this.instance = new lib.hexagon();
	this.instance.setTransform(0,0.1,1,1,0,0,0,87.9,101.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:101.1,scaleX:4.45,scaleY:4.45,x:-0.1,y:0,alpha:0},9).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.5,-89.9,156.7,179.9);


(lib.habitat_border_small = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.small_2();
	this.instance.setTransform(-0.5,-2,1,1,0,0,0,160.6,66.2);
	this.instance.alpha = 0.641;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-161.1,-68.2,321.1,132.5);


(lib.habitat_border_medium = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.med_2();
	this.instance.setTransform(0.6,-1,1,1,0,0,0,160.6,88.2);
	this.instance.alpha = 0.641;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-89.2,321.1,176.4);


(lib.habitat_border_large = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.large_2();
	this.instance.setTransform(1.6,2,1,1,0,0,0,160.6,125.7);
	this.instance.alpha = 0.641;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-159,-123.7,321.1,251.4);


(lib.butterfly = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// body
	this.instance = new lib.butterfly_body();
	this.instance.setTransform(-3.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10));

	// wing_right
	this.instance_1 = new lib.butterfly_wing_right();
	this.instance_1.setTransform(0.1,-1,1,1,-27.4,0,0,21.6,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:21.5,regY:7,scaleX:0.55,scaleY:0.96,rotation:0,skewX:-27.4,skewY:6,x:4.2,y:4.2},3).to({regX:21.6,regY:6.8,scaleX:1,scaleY:1,rotation:-27.4,skewX:0,skewY:0,x:5.1,y:6},5).wait(2));

	// wing_left
	this.instance_2 = new lib.butterfly_wing_left();
	this.instance_2.setTransform(0.1,-1,1,1,-15,0,0,-17.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:9.7,scaleX:0.46,rotation:0,skewX:-15,skewY:-45.5,x:5.1,y:6.1},3).to({regY:9.6,scaleX:1,rotation:-15,skewX:0,skewY:0,y:6},5).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.8,-56.9,98.1,95.1);


(lib.border_small_glimmer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() < 0.8){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(30));

	// Layer 1
	this.instance = new lib.habitat_border_small();
	this.instance.setTransform(160,73.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:1.13},14).to({scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,5.1,321.1,132.5);


(lib.border_medium_glimmer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() < 0.8){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(29));

	// Layer 1
	this.instance = new lib.habitat_border_medium();
	this.instance.setTransform(159.8,93);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({scaleY:1.08},13).to({scaleY:1},14).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,3.8,321.1,176.4);


(lib.border_large_glimmer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() < 0.8){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(32));

	// Layer 1
	this.border = new lib.habitat_border_large();
	this.border.setTransform(159.8,126);

	this.timeline.addTween(cjs.Tween.get(this.border).wait(2).to({scaleY:1.06},15).to({scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,2.3,321.1,251.4);


(lib.bigtube_front = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3D69").s().p("Agh9bIA7AAMAAIA5KIg7Btg");
	this.shape.setTransform(171.8,-35.1,2.22,2.22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F3D69").s().p("AgUcGMgASg5tIA7gBMAASA7Rg");
	this.shape_1.setTransform(-171.7,-38.9,2.22,2.22);

	this.instance = new lib.Path_12();
	this.instance.setTransform(4.8,-13.3,2.22,1.46,0,0,0,12.8,307.7);
	this.instance.alpha = 0.102;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A4C82").s().p("ABDLWQnkgImdhJQp0hxlaj5QkcjMhXkHQgbhSgDhPIABg+IAIAAQgIgogBgmIABg+IANAAQAkCBB5CGQCiC0ESCMQKNFUPAgFQPUgGJzlUQERiRCWi9QCLiuAJiyIAIAmQAKBJgIBOQAIBJgKBPQgiEQjtDeQkiESqDCeQnoB4mKAAIgwAAgAbfqLIAAgoQAHAfABAbIgIgSgA7/qwQACgRAGgUIAAA1IgHAMg");
	this.shape_2.setTransform(3.9,423.1,0.924,1.034);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5974C7").s().p("A42H8QkSiOiji0Qh5iGgjh/QgKgkgDgiQgbkHDNjeQAwgzA4gsIAAgCQA4g8BSg2IAAJLQgFAUgCASIABAcIAGgNIAAAtIgFAPIA1B+QBTCUCaB7QHrGKPtgVQRWgXG4mEQCKh5A3iMIAah3QgBgagHggIAApoQAYAOAWAPIAAgCQDwCDBjD6QAwB7ACBjIAAAQQgJCyiLCsQiWC9kRCUQpzFUvVAFIgdAAQutAAqClOg");
	this.shape_3.setTransform(3.2,374.4,0.924,1.034);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3300").s().p("AhtBvIAAjdIDbAAIAADdg");
	this.shape_4.setTransform(-13.8,-480.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-200.2,-491.3,408.1,989.6);


(lib.bigtube_back = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3D69").s().p("Agh9bIA7AAMAAIA5KIg7Btg");
	this.shape.setTransform(169.3,-35.2,2.22,2.22);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2F3D69").s().p("AgUcGMgASg5tIA7gBMAASA7Rg");
	this.shape_1.setTransform(-174.2,-39,2.22,2.22);

	this.instance = new lib.Path_12();
	this.instance.setTransform(2.3,-13.4,2.22,1.46,0,0,0,12.8,307.7);
	this.instance.alpha = 0.102;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.502)","rgba(255,255,255,0)","rgba(255,255,255,0.502)"],[0,0.478,1],-173.1,1.7,173.2,1.7).s().p("EgB3BF+IjTgdQlhg3jQg6Qj2hEiqhnQmgj8gIkVMAAAh+xMA2HAAAMAAAB+xQgIFol5DUQiDBLj9A3QifAil4A6QiiAZjRAXQhWh6haB6g");
	this.shape_2.setTransform(-5,-14.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5974C7").s().p("ArLFiQh8hnhJiBQhFh6gHh0QgMi+BcigQAegyAkgpIAegfIALHbIAYBbQAlBqBFBZQDeEcHDgQQH0gRDGkXQA+hXAZhlIAMhVIARnSQBsBeAsC0QAWBZABBHQgBCGhCCCQhDCIh7BqQkbD1m5AEIgMAAQmoAAkhjxg");
	this.shape_3.setTransform(-0.7,372.9,2.053,1.388);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3A4C82").s().p("AAeHKQjZgFi6g2QkbhRicizQiAiRgni/QgMg7gBg5IAAgtIBSgIIAAAcQACAkAJApQAfCDBjCBQBvCQDcBNQDBBED7AHQDXAGDShmQCthUCciTQBxhtAaiQQAIgtgBgsIgDgiIBSgyIAGAtQAFA5gFA9QgPDEhrCfQiDDGkhByQjeBXiyAAIgTgBg");
	this.shape_4.setTransform(0,427.6,2.053,1.388);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3A4C82").s().p("AAeHKQjZgFi6g2QkbhRicizQiAiRgni/QgMg7gBg5IAAgtIBSgIIAAAcQACAkAJApQAfCDBjCBQBvCQDcBNQDBBED7AHQDXAGDShmQCthUCciTQBxhtAaiQQAIgtgBgsIgDgiIBSgyIAGAtQAFA5gFA9QgPDEhrCfQiDDGkhByQjeBXiyAAIgTgBg");
	this.shape_5.setTransform(0,413.4,2.053,1.388);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3A4C82").s().p("AKIA3QjokUmOAFQmKAFj9EJQh9CFgvCFQABgoAOg8QAch4BBhkQDNlCHogKQHpgKDNFSQBABnAcCAQAPBAABAqQgliLh1iLg");
	this.shape_6.setTransform(-1.4,308.6,2.053,1.388);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5974C7").s().p("AtzhbQBLh/CwhhQD0iHFmgRQFPgQEjCzQCRBZBNBdIBCGOIhrAmQgFgjgTg1QgmhphEhYQjYkYmzgDQm1gDjrEiQhJBbgtBuQgWA3gHAkIgkCNg");
	this.shape_7.setTransform(3.8,311.3,2.053,1.388);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3A4C82").s().p("AKIA3QjokUmOAFQmKAFj9EJQh9CFgvCFQABgoAOg8QAch4BBhkQDNlCHogKQHpgKDNFSQBABnAcCAQAPBAABAqQgliLh1iLg");
	this.shape_8.setTransform(-1.3,320.4,2.11,1.388);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF3300").s().p("AhuBvIAAjdIDdAAIAADdg");
	this.shape_9.setTransform(3.9,-480.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-204.2,-491.4,408.1,982.8);


(lib.ballspin_flash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.streak1();
	this.instance.setTransform(62,2,1,1,0,0,0,11.5,10);
	this.instance.shadow = new cjs.Shadow("rgba(102,255,255,1)",0,0,10);

	this.instance_1 = new lib.streak2();
	this.instance_1.setTransform(90.8,24,1,1,0,0,0,32,32.2);
	this.instance_1.shadow = new cjs.Shadow("rgba(102,255,255,1)",0,0,10);

	this.instance_2 = new lib.streak3();
	this.instance_2.setTransform(104.9,94.8,1,1,0,0,0,48.6,101.5);
	this.instance_2.shadow = new cjs.Shadow("rgba(102,255,255,1)",0,0,10);

	this.instance_3 = new lib.streak4();
	this.instance_3.setTransform(126.5,147.1,1,1,0,0,0,21.3,48.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(102,255,255,1)",0,0,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3300").s().p("AAAABIAAgBIABABIgBAAg");
	this.shape.setTransform(132.8,96.4);

	this.instance_4 = new lib.streak6();
	this.instance_4.setTransform(121,184.6,1,1,0,0,0,18.7,12.9);
	this.instance_4.shadow = new cjs.Shadow("rgba(102,255,255,1)",0,0,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(44.5,-14,39,35);


(lib.ball_spin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#78DBDB").ss(3,2,1).p("AOjhGQkbBPkjApQk+Apk8gcQkbgbkUhHQgvgMgvgN");
	this.shape.setTransform(97.3,104);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CEFFFF").ss(3,2,1).p("AOBhBQkKBHkQAnQk+Apk9gcQkagbkUhHQgfgIgfgI");
	this.shape_1.setTransform(97.2,107.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

	// Layer 5
	this.instance = new lib.spin_swoosh();
	this.instance.setTransform(122.5,98.1,1.24,1.24,0,0,0,43.6,68.4);

	this.instance_1 = new lib.spin_swoosh();
	this.instance_1.setTransform(63.4,98,1.24,1.24,180,0,0,43.6,68.4);
	this.instance_1.filters = [new cjs.ColorFilter(0, 0, 0, 1, 255, 255, 255, 0)];
	this.instance_1.cache(-2,-2,91,141);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(130,238,238,0.702)").s().p("AleKsQghgFghgHQgZgMgYgWIgEgFQA2AKA7ABIASAAIAFAAICdgRQAggHAegJQCcgzB+h+QDRjSAAkmQAAkpjRjSQhDhDhMguQCBA1BrBqQDRDTAAEoQAAEnjRDSQjSDSkoAAQg2AAgzgHg");
	this.shape_2.setTransform(110.8,107);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_1},{t:this.instance}]}).wait(5));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(119,217,217,0.702)").s().p("An6H6QjRjSAAkoQAAknDRjTQDSjREoAAQEoAADSDRQDSDTAAEnQAAEojSDSQjSDSkoAAQkoAAjSjSg");
	this.shape_3.setTransform(86.3,104.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(5));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8CFFFF").s().p("ApgJhQj8j9AAlkQAAljD8j9QD8j8FkAAQFkAAD9D8QD8D9AAFjQAAFkj8D9Qj9D8lkAAQlkAAj8j8g");
	this.shape_4.setTransform(96.6,96.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CEFFFF").s().p("AqOKPQkPkQAAl/QAAl+EPkQQEPkPF/AAQF/AAEQEPQEPEQAAF+QAAF/kPEQQkQEPl/AAQl/AAkPkPgApgpgQj8D9AAFjQAAFkD8D9QD8D8FkAAQFlAAD8j8QD9j9AAlkQAAljj9j9Qj8j8llAAQlkAAj8D8g");
	this.shape_5.setTransform(96.6,96.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#33CCCC").s().p("AqpKqQkbkbAAmPQAAmPEbkaQEakbGPAAQGPAAEbEbQEbEaAAGPQAAGPkbEbQkbEbmPAAQmPAAkakbgAqOqOQkPEQAAF+QAAF/EPEQQEQEPF+ABQF/gBEQkPQEPkQABl/QgBl+kPkQQkQkPl/AAQl+AAkQEPg");
	this.shape_6.setTransform(96.6,96.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,193.1,193.1);


(lib.ball_ex_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.ballspin_flash("synched",1);
	this.instance.setTransform(140.5,8.9,1,1,45,0,0,64.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// Layer 6
	this.instance_1 = new lib.ballspin_flash("synched",3);
	this.instance_1.setTransform(189.7,66.2,1,1,90,0,0,64.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20));

	// Layer 5
	this.instance_2 = new lib.ballspin_flash("synched",0);
	this.instance_2.setTransform(193,130.5,1,1,135,0,0,64.5,0.1);

	this.instance_3 = new lib.ballspin_flash("synched",7);
	this.instance_3.setTransform(64.5,0.1,1,1,0,0,0,64.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(20));

	// Layer 2
	this.instance_4 = new lib.shadow_layer();
	this.instance_4.setTransform(92.7,101.9,1,1,0,0,180,71.1,73.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20));

	// Layer 1
	this.instance_5 = new lib.ball_spin();
	this.instance_5.setTransform(96.5,96.5,1,1,0,0,0,96.5,96.5);
	this.instance_5.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:360},19).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.8,-8,230.3,217);


(lib.waterfall_cloud_animate_in = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.05){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(21));

	// Layer 1
	this.instance = new lib.waterfall_cloud();
	this.instance.setTransform(0,0,0.43,0.43);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,alpha:0.578},8).to({scaleX:1.31,scaleY:1.31,alpha:0},11).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.main_map = function() {
	this.initialize();

	// waterfall accents: lines
	this.ripples = new lib.ripples();
	this.ripples.setTransform(578.3,399.3);

	// waterfall accents: drops
	this.instance = new lib.waterfall_drop_animate_in();
	this.instance.setTransform(928.1,106.2,1,1,-9);

	this.instance_1 = new lib.waterfall_drop_animate_in();
	this.instance_1.setTransform(947.1,126.3,1,1,0,96.4,-83.6);

	this.instance_2 = new lib.waterfall_drop_animate_in();
	this.instance_2.setTransform(949,123.3,1,1,0,70.5,-109.5);

	this.instance_3 = new lib.waterfall_drop_animate_in();
	this.instance_3.setTransform(959,121.9,1,1,0,60,-120);

	this.instance_4 = new lib.waterfall_drop_animate_in();
	this.instance_4.setTransform(920.6,108.6,1,1,-29.9);

	this.instance_5 = new lib.waterfall_drop_animate_in();
	this.instance_5.setTransform(915.9,112.1,1,1,-46.7);

	// waterfall accents: clouds
	this.instance_6 = new lib.waterfall_cloud_animate_in();
	this.instance_6.setTransform(922.2,128.5,1.461,1.461);

	this.instance_7 = new lib.waterfall_cloud_animate_in();
	this.instance_7.setTransform(956.6,138.6,1.611,1.611);

	this.instance_8 = new lib.waterfall_cloud_animate_in();
	this.instance_8.setTransform(940.9,137.4,1.611,1.611);

	this.instance_9 = new lib.waterfall_cloud_animate_in();
	this.instance_9.setTransform(927.9,139.1,1.611,1.611);

	this.instance_10 = new lib.waterfall_cloud_animate_in();
	this.instance_10.setTransform(914,127.6,1.611,1.611);

	this.instance_11 = new lib.waterfall_cloud_animate_in();
	this.instance_11.setTransform(958.6,122.2);

	this.instance_12 = new lib.waterfall_cloud_animate_in();
	this.instance_12.setTransform(937.1,112.3);

	this.instance_13 = new lib.waterfall_cloud_animate_in();
	this.instance_13.setTransform(963.3,138.5);

	this.instance_14 = new lib.waterfall_cloud_animate_in();
	this.instance_14.setTransform(941.6,137.7,1.461,1.461);

	this.instance_15 = new lib.waterfall_cloud_animate_in();
	this.instance_15.setTransform(946,117.5);

	this.instance_16 = new lib.waterfall_cloud_animate_in();
	this.instance_16.setTransform(928.2,111.3);

	this.instance_17 = new lib.waterfall_cloud_animate_in();
	this.instance_17.setTransform(973.6,140);

	this.instance_18 = new lib.waterfall_cloud_animate_in();
	this.instance_18.setTransform(955.7,127.1);

	this.instance_19 = new lib.waterfall_cloud_animate_in();
	this.instance_19.setTransform(919.4,104.6);

	this.instance_20 = new lib.waterfall_cloud_animate_in();
	this.instance_20.setTransform(917.2,116.4,1.611,1.611);

	// duplicate towers
	this.tower_small_medium = new lib.watchtower();
	this.tower_small_medium.setTransform(337.6,471.4,1,1,0,0,180);

	this.tower_medium_large = new lib.watchtower();
	this.tower_medium_large.setTransform(701.6,240.9,1,1,0,0,0);

	// bg no towers
	this.instance_21 = new lib.Map_no_towers();

	this.addChild(this.instance_21,this.tower_medium_large,this.tower_small_medium,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.ripples);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1024,768);


(lib.launch_iconcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ball_ex_100("synched",0);
	this.instance.setTransform(-0.2,-0.2,0.146,0.146,0,0,180,96.5,96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-20.2,45.8,40.8);


(lib.butterfly_orbit2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butterfly
	this.instance = new lib.butterfly();
	this.instance.setTransform(93.1,44.6,0.999,0.999,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:39,guide:{path:[93.2,44.8,178.3,68.1,233.9,103.5,290.4,139.6,283.5,167.5,283.5,167.8,283.5,168,279.7,182.1,260.8,189.9]}},25).to({scaleX:1,scaleY:1,rotation:9,guide:{path:[260.8,189.8,242,197.5,208.4,199.1,140.8,202.3,53,178.7,37.1,174.4,22.2,169.7]}},25).to({guide:{path:[22,169.7,21.7,169.6,21.5,169.5], orient:'auto'}},1).to({scaleX:1,scaleY:1,rotation:45,guide:{path:[21.5,168.9,1.9,160,-12.2,135.6,-32.3,100.6,-28.8,54.5,-25.4,8.2,-0.5,-22.3,24.2,-52.6,55.8,-49.7,56,-49.7,56.3,-49.7,58.2,-49.5,60,-49.2], orient:'auto'}},48).to({scaleX:1,scaleY:1,rotation:39.6,guide:{path:[60,-49.2,60.3,-49.1,60.5,-49.1], orient:'auto'}},1).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[60.7,-49.1,89.5,-44.2,108.2,-11.5,128.4,23.5,125,69.6,121.5,115.9,96.5,146.4,71.5,176.9,39.8,173.7,39.5,173.7,39.3,173.7,30.2,172.7,22.1,169.1], orient:'auto'}},49).to({scaleX:1,scaleY:1,guide:{path:[21.9,169.1,22,169.2,22.1,169.2], orient:'auto'}},1).to({rotation:68.2,guide:{path:[21.2,171.7,0.7,163.9,-3,147.5,-3,147.3,-3,147.2,-3.1,146.9,-3.2,146.7,-8.7,118.8,36.7,82.9,82.6,46.4,153.4,22.9,224.1,-0.7,278.4,2.4,297.8,3.5,311,7.8], orient:'auto'}},49).wait(1).to({rotation:60,x:311.4,y:7.8},0).to({rotation:0,guide:{path:[311.4,7.9,329.7,13.9,336.2,26,337.9,29.3,338.8,33.1,338.8,33.3,338.9,33.5,344.9,61.5,299,97.8,253.2,134.3,182.4,157.9,111.7,181.5,57.4,178.3,35.6,177.1,21.6,171.8]}},49).to({rotation:1.5,x:21.6,y:169.6},1).to({scaleX:1,scaleY:1,rotation:69,x:93,y:44.6},49).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(55.7,-13.4,101.9,103.6);


(lib.butterfly_orbit1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// butterfly
	this.instance = new lib.butterfly();
	this.instance.setTransform(21.1,171.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:68.2,guide:{path:[21.2,171.7,0.7,163.9,-3,147.5,-3,147.3,-3,147.2,-3.1,146.9,-3.2,146.7,-8.7,118.8,36.7,82.9,82.6,46.4,153.4,22.9,224.1,-0.7,278.4,2.4,297.8,3.5,311,7.8], orient:'auto'}},59).wait(1).to({rotation:60,x:311.4,y:7.8},0).to({rotation:0,guide:{path:[311.4,7.9,329.7,13.9,336.2,26,337.9,29.3,338.8,33.1,338.8,33.3,338.9,33.5,344.9,61.5,299,97.8,253.2,134.3,182.4,157.9,111.7,181.5,57.4,178.3,35.6,177.1,21.6,171.8]}},59).to({rotation:1.5,x:21.6,y:169.6},1).to({scaleX:1,scaleY:1,rotation:69,x:93,y:44.6},59).to({x:93.1},1).to({rotation:39,guide:{path:[93.2,44.8,178.3,68.1,233.9,103.5,290.4,139.6,283.5,167.5,283.5,167.8,283.5,168,279.7,182.1,260.8,189.9]}},30).to({scaleX:1,scaleY:1,rotation:9,guide:{path:[260.8,189.8,242,197.5,208.4,199.1,140.8,202.3,53,178.7,37.1,174.4,22.2,169.7]}},30).to({guide:{path:[22,169.7,21.7,169.6,21.5,169.5], orient:'auto'}},1).to({scaleX:1,scaleY:1,rotation:45,guide:{path:[21.5,168.9,1.9,160,-12.2,135.6,-32.3,100.6,-28.8,54.5,-25.4,8.2,-0.5,-22.3,24.2,-52.6,55.8,-49.7,56,-49.7,56.3,-49.7,58.2,-49.5,60,-49.2], orient:'auto'}},58).to({scaleX:1,scaleY:1,rotation:39.6,guide:{path:[60,-49.2,60.3,-49.1,60.5,-49.1], orient:'auto'}},1).to({scaleX:1,scaleY:1,rotation:0,guide:{path:[60.7,-49.1,89.5,-44.2,108.2,-11.5,128.4,23.5,125,69.6,121.5,115.9,96.5,146.4,71.5,176.9,39.8,173.7,39.5,173.7,39.3,173.7,30.2,172.7,22.1,169.1], orient:'auto'}},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,114.8,98.1,95.1);


(lib.tube_ball_anim7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(15));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(0.7,-2.1,0.395,0.395,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({guide:{path:[0,-2.2,0,-100.6,0,-199,0,-222.4,-14.1,-239.8,-28.2,-257.2,-82,-269.5]}},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tube_ball_anim6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(-0.1,0.6,0.325,0.325,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({guide:{path:[0,0.7,5.3,25.9,30.1,33.7,46.5,39,64.1,37.6,92,35.6,103.6,48,115.5,60.5,117.2,75.4,117.7,79.9,119.1,91.1,120.6,102.7,121.5,111.4,124.5,138.5,151,145.8,153.5,146.5,198.8,148.3]}},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tube_ball_anim5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(15));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(-117.3,-152.1,0.395,0.395,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({guide:{path:[-117.2,-152,-84.6,-152,-52,-152,-20.7,-152,-8.6,-135.2,0,-123.4,0,-99.9,0,-50.3,0,-0.6]}},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tube_ball_anim4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(15));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(0.1,-0.5,0.395,0.395,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({guide:{path:[0,-0.6,0,-50.2,0,-99.9,0,-123.4,-8.6,-135.2,-20.7,-152,-52,-152,-84.6,-152,-117.2,-152]}},13).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tube_ball_anim3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(-0.2,0.6,0.395,0.395,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({guide:{path:[-0.3,0.7,-0.4,7.6,-2.2,15.5,-6.2,32.3,-15.9,39.1,-25.6,45.9,-31.4,47.6,-37.2,49.2,-40.2,49.4,-43.2,49.6,-84.6,49.6,-148.6,49.6,-212.7,49.6]}},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-11,27.6,25);


(lib.tube_ball_anim2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(10));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(-0.6,-19.2,0.395,0.395,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({guide:{path:[-0.6,-19.3,-0.6,-29.7,-0.6,-40.1,-1.6,-51.2,3.8,-58.8,9.3,-66.4,22.5,-66.7,35.5,-67,40.8,-64.6,46.1,-62.1,49.1,-56.4,52,-50.6,51.9,-43,51.7,-35.5,51.7,-18.9]}},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.tube_ball_anim1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		if(Math.random() > 0.02){
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19));

	// Layer 1
	this.instance = new lib.launch_iconcopy();
	this.instance.setTransform(-0.2,0.6,0.395,0.395,0,0,0,-0.5,-0.1);
	this.instance.alpha = 0.602;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({guide:{path:[0,0.7,-0.1,5.6,2.6,11.8,7.9,24.1,22.1,29.8,35.9,35.4,53.3,36.5,56.5,36.7,67.8,37.1,76.6,37.4,82.2,38,86.9,38.5,97.7,39.6,107.1,41,113.2,44.2,129.9,52.8,131.3,79.3,132.7,106,132.8,106.9,133.9,120.5,136.8,128.5,140.3,138.3,147.6,144.3,155.4,150.9,169.1,154.4]}},17).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.overview_small_zone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{closed:0,justopened:1,open:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/LOIAA2bMAx/AAAIAAWbg");
	mask.setTransform(0,0.2);

	// icon
	this.icon = new lib.icon_open();
	this.icon.setTransform(0,-1,0.474,0.474);
	this.icon.shadow = new cjs.Shadow("#4630C5",0,0,5);
	this.icon._off = true;

	this.icon.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decorations
	this.dec_shrooms = new lib.land_dec_shrooms();
	this.dec_shrooms.setTransform(114.3,34,0.217,0.217);
	this.dec_shrooms.alpha = 0;

	this.dec_picture = new lib.land_dec_picture();
	this.dec_picture.setTransform(-114.3,-39.7,0.306,0.306);
	this.dec_picture.alpha = 0;

	this.dec_swing = new lib.land_dec_swing();
	this.dec_swing.setTransform(78.7,-11.7,0.287,0.287,0,0,180);
	this.dec_swing.alpha = 0;

	this.dec_pool = new lib.land_dec_waterpool();
	this.dec_pool.setTransform(-109,35.1,0.106,0.106);
	this.dec_pool.alpha = 0;

	this.butterfly2 = new lib.butterfly_orbit2();
	this.butterfly2.setTransform(124.2,-6.9,0.189,0.189,0,0,180,20.1,165.8);
	this.butterfly2.alpha = 0;

	this.butterfly1 = new lib.butterfly_orbit1();
	this.butterfly1.setTransform(118.1,-4.3,0.282,0.282,0,0,0,20.1,165.9);
	this.butterfly1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butterfly1},{t:this.butterfly2},{t:this.dec_pool},{t:this.dec_swing},{t:this.dec_picture},{t:this.dec_shrooms}]}).wait(3));

	// border
	this.border = new lib.border_small_glimmer();
	this.border.setTransform(0.3,-1.4,1,1,0,0,0,160.3,71.8);

	this.timeline.addTween(cjs.Tween.get(this.border).wait(3));

	// click_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(103,171,206,0.008)").s().p("A4/LOIAA2bMAx/AAAIAAWbg");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.1,-71.6,321.1,143.7);


(lib.overview_medium_zone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"closed":0,"justopened":1,"open":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4/OMIAA8YMAx/AAAIAAcYg");
	mask.setTransform(0,-1.8);

	// icon
	this.icon = new lib.icon_open();
	this.icon.setTransform(0,-1,0.644,0.644);
	this.icon.shadow = new cjs.Shadow("#663300",0,0,5);
	this.icon._off = true;

	this.icon.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.icon).wait(1).to({_off:false},0).to({_off:true},1).wait(1));

	// decorations
	this.dec_shrooms = new lib.land_dec_shrooms();
	this.dec_shrooms.setTransform(116.4,57.1,0.217,0.217);
	this.dec_shrooms.alpha = 0;

	this.dec_picture = new lib.land_dec_picture();
	this.dec_picture.setTransform(-120.1,-49.6,0.306,0.306);
	this.dec_picture.alpha = 0;

	this.dec_swing = new lib.land_dec_swing();
	this.dec_swing.setTransform(118.9,-32.6,0.287,0.287,0,0,180);
	this.dec_swing.alpha = 0;

	this.dec_pool = new lib.land_dec_waterpool();
	this.dec_pool.setTransform(-104.8,51.2,0.154,0.154);
	this.dec_pool.alpha = 0;

	this.butterfly2 = new lib.butterfly_orbit2();
	this.butterfly2.setTransform(-62.6,-26.8,0.189,0.189,0,0,180,20.1,165.8);
	this.butterfly2.alpha = 0;
	this.butterfly2.cache(54,-15,106,108);

	this.butterfly1 = new lib.butterfly_orbit1();
	this.butterfly1.setTransform(-58.7,-59.2,0.282,0.282,0,0,0,20.1,165.9);
	this.butterfly1.alpha = 0;
	this.butterfly1.cache(-35,113,102,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butterfly1},{t:this.butterfly2},{t:this.dec_pool},{t:this.dec_swing},{t:this.dec_picture},{t:this.dec_shrooms}]}).wait(3));

	// border
	this.border = new lib.border_medium_glimmer();
	this.border.setTransform(0.5,-1.2,1,1,0,0,0,160.3,91.8);

	this.timeline.addTween(cjs.Tween.get(this.border).wait(3));

	// click_area
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(103,171,206,0.008)").s().p("A4/OgIAA8/MAx/AAAIAAc/g");
	this.shape.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-160,-92.6,321.1,185.7);


(lib.overview_large_zone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"closed":0,"justopened":1,"open":2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A32UIMAAAgoQMAvtAAAMAAAAoQg");
	mask.setTransform(0,0.2);

	// icon
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AAAgCIAAAF");
	this.shape.setTransform(-0.3,131.4);

	this.icon = new lib.icon_open();
	this.icon.setTransform(0.4,-1,0.941,0.941);
	this.icon.shadow = new cjs.Shadow("#003333",0,0,5);

	this.shape.mask = this.icon.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape},{t:this.icon}]},1).to({state:[]},1).wait(1));

	// decorations
	this.dec_shrooms = new lib.land_dec_shrooms();
	this.dec_shrooms.setTransform(121.4,95.1,0.217,0.217);
	this.dec_shrooms.alpha = 0;

	this.dec_picture = new lib.land_dec_picture();
	this.dec_picture.setTransform(-120.1,-26.6,0.306,0.306);
	this.dec_picture.alpha = 0;

	this.dec_swing = new lib.land_dec_swing();
	this.dec_swing.setTransform(122.9,-75.6,0.287,0.287,0,0,180);
	this.dec_swing.alpha = 0;

	this.dec_pool = new lib.land_dec_waterpool();
	this.dec_pool.setTransform(-99.8,89.2,0.154,0.154);
	this.dec_pool.alpha = 0;

	this.butterfly2 = new lib.butterfly_orbit2();
	this.butterfly2.setTransform(-82.6,-39.8,0.189,0.189,0,0,180,20.1,165.8);
	this.butterfly2.alpha = 0;
	this.butterfly2.cache(54,-15,106,108);

	this.butterfly1 = new lib.butterfly_orbit1();
	this.butterfly1.setTransform(-109.7,-88.2,0.282,0.282,0,0,0,20.1,165.9);
	this.butterfly1.alpha = 0;
	this.butterfly1.cache(-35,113,102,99);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butterfly1},{t:this.butterfly2},{t:this.dec_pool},{t:this.dec_swing},{t:this.dec_picture},{t:this.dec_shrooms}]}).wait(3));

	// border
	this.border = new lib.border_large_glimmer();
	this.border.setTransform(1,2.8,1,1,0,0,0,160.3,128.8);

	this.timeline.addTween(cjs.Tween.get(this.border).wait(3));

	// click_area
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(103,171,206,0.008)").s().p("A32UIMAAAgoQMAvtAAAMAAAAoQg");
	this.shape_1.setTransform(0,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.5,-128.7,321.1,257.8);


(lib.habitatbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// picture
	this.dec_picture = new lib.land_dec_picture();
	this.dec_picture.setTransform(69.6,209.9);
	this.dec_picture.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.dec_picture).wait(2));

	// shrooms
	this.dec_shrooms = new lib.land_dec_shrooms();
	this.dec_shrooms.setTransform(879.6,539.9);
	this.dec_shrooms.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.dec_shrooms).wait(2));

	// swing
	this.dec_swing = new lib.land_dec_swing();
	this.dec_swing.setTransform(545,161.4);
	this.dec_swing.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.dec_swing).wait(2));

	// pool
	this.dec_pool = new lib.land_dec_waterpool();
	this.dec_pool.setTransform(278,446.4);
	this.dec_pool.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.dec_pool).wait(2));

	// butterflies
	this.butterfly2 = new lib.butterfly_orbit2();
	this.butterfly2.setTransform(179.6,269.9,0.189,0.189,0,0,180,20.1,165.8);
	this.butterfly2.alpha = 0;

	this.butterfly1 = new lib.butterfly_orbit1();
	this.butterfly1.setTransform(789.6,269.9,0.378,0.378,0,0,0,20.1,166);
	this.butterfly1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.butterfly1},{t:this.butterfly2}]}).wait(2));

	// SUNLIGHT
	this.instance = new lib.land_bg_sunlight();
	this.instance.setTransform(606.2,271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// BG BMP
	this.instance_1 = new lib.Background_feeding01();
	this.instance_1.setTransform(0,-0.1);

	this.instance_2 = new lib.Background_feeding02();
	this.instance_2.setTransform(0,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-178.4,1143.6,946.4);


(lib.tubeBalls = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tube_ball_anim7();
	this.instance.setTransform(974.9,808.9,1,1,0,0,180);

	this.instance_1 = new lib.tube_ball_anim6();
	this.instance_1.setTransform(1046.1,603,1,1,90);

	this.instance_2 = new lib.tube_ball_anim2();
	this.instance_2.setTransform(371.6,761.4,1,1,0,0,180,-0.7,-1.7);

	this.instance_3 = new lib.tube_ball_anim6();
	this.instance_3.setTransform(135.9,769,1,1,180);

	this.instance_4 = new lib.tube_ball_anim4();
	this.instance_4.setTransform(55.9,789.2,1,1,0,0,0,-0.4,0.5);

	this.instance_5 = new lib.tube_ball_anim5();
	this.instance_5.setTransform(977.9,482.9,1,1,0,0,180);

	this.instance_6 = new lib.tube_ball_anim4();
	this.instance_6.setTransform(100.9,260.2,1,1,0,0,0,-0.4,0.5);

	this.instance_7 = new lib.tube_ball_anim3();
	this.instance_7.setTransform(196.9,-19.1,1,1,0,0,0,-0.4,0.5);

	this.instance_8 = new lib.tube_ball_anim2();
	this.instance_8.setTransform(806.6,175.5,1,1,0,0,0,-0.7,-1.7);

	this.instance_9 = new lib.tube_ball_anim1();
	this.instance_9.setTransform(875,-10.3);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.tube_ball_anim5();
	this.instance_10.setTransform(83.7,242.3);

	this.instance_11 = new lib.tube_ball_anim4();
	this.instance_11.setTransform(959.9,464.9,1,1,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AiaAKICaAAIAACWAAAifIAACpICbAA");
	this.shape.setTransform(-0.6,-1.8);

	this.addChild(this.shape,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.1,-30.6,229.3,45.8);


// stage content:
(lib.habitat_assets = function() {
	this.initialize();

	// zoom
	this.instance = new lib.habitatbg();
	this.instance.setTransform(620.5,1277.3,1,1,0,0,0,572,294);

	// glow
	this.instance_1 = new lib.creatureGlow();
	this.instance_1.setTransform(-156.5,543);

	// PENS
	this.instance_2 = new lib.overview_small_zone();
	this.instance_2.setTransform(842.7,580.6);

	this.instance_3 = new lib.overview_small_zone();
	this.instance_3.setTransform(514.7,580.6);

	this.instance_4 = new lib.overview_medium_zone();
	this.instance_4.setTransform(843,410);

	this.instance_5 = new lib.overview_medium_zone();
	this.instance_5.setTransform(516,410);

	this.instance_6 = new lib.overview_large_zone();
	this.instance_6.setTransform(839.2,178.5);

	this.instance_7 = new lib.overview_large_zone();
	this.instance_7.setTransform(515.2,178.5);

	this.instance_8 = new lib.overview_medium_zone();
	this.instance_8.setTransform(187,410);

	this.instance_9 = new lib.overview_large_zone();
	this.instance_9.setTransform(188.2,178.5);

	this.instance_10 = new lib.overview_small_zone();
	this.instance_10.setTransform(186.7,580.6);

	// balls
	this.instance_11 = new lib.tubeBalls();
	this.instance_11.setTransform(-0.3,0,1,1,0,0,0,-0.3,0);

	// tubes
	this.instance_12 = new lib.bigtube_front();
	this.instance_12.setTransform(664.4,-127.1,0.644,0.644);

	this.instance_13 = new lib.bigtube_back();
	this.instance_13.setTransform(664.4,-124.4,0.644,0.644);

	this.instance_14 = new lib.tube_front_1();
	this.instance_14.setTransform(998.3,-93.8);

	// bg
	this.instance_15 = new lib.main_map();
	this.instance_15.setTransform(512,384,1,1,0,0,0,512,384);

	this.addChild(this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(283.5,-82.3,1420.5,2217.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;