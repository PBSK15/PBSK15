(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.freezerburn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle_loop:239,CookinTime:248,CookinTime_stop:416,FreezerBurn:417,FreezerBurn_stop:553,Exercise:554,Exercise_stop:687});

	// anim
	this.instance = new lib.FreezerBurn_Idle("synched",0);
	this.instance.setTransform(26.3,66.9,0.943,0.943);

	this.instance_1 = new lib.FreezerBurn_CookingTime("synched",0);
	this.instance_1.setTransform(26.3,66.9,0.943,0.943);

	this.instance_2 = new lib.PopsDesign_Freezerburn("synched",0);
	this.instance_2.setTransform(26.3,64.3,0.854,0.854);

	this.instance_3 = new lib.FreezerBurn_Excercise("synched",0);
	this.instance_3.setTransform(26.3,66.9,0.943,0.943);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},248).to({state:[{t:this.instance_2}]},169).to({state:[{t:this.instance_3}]},137).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(45.7,62.3,330.2,485.4);


// symbols:
(lib.guitar2 = function() {
	this.initialize(img.guitar2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,500,230);


(lib.popsicleLeg = function() {
	this.initialize(img.popsicleLeg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,50,300);


(lib.PosicleBody = function() {
	this.initialize(img.PosicleBody);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,158,400);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PosicleBody();
	this.instance.setTransform(-36.4,-214,1.01,1.01,11.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-119.6,-214,239.4,428.3);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.PosicleBody();
	this.instance.setTransform(-45.7,-212.3,1.01,1.01,9.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-111.6,-212.3,223.4,424.8);


(lib.SUNGLASSES = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#527174").s().p("AJ0DBIgQgCIFwlsIgJB8IjmDtQglAHglAAQgTAAgUgCgArKDBIgQgCIFwlsIgJB8IjmDtQglAHglAAQgTAAgUgCgAHBByIFlkyIAkABIlsFHgAt9ByIFlkyIAkABIlsFHgAFrgWIDLirICfgBIkzESgAvTgWIDLirICfgBIkzESg");
	this.shape.setTransform(0.5,4.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#35494A").s().p("AKBDBIgPgCQhBgPg6ghIgMgHIgdgWIgfgiIg3hmIgaijIDmgIIETACICKAHIgJCHQgHBchGBCIgcAaQg1AwhIAFQglAHglAAQgTAAgUgCgAq9DBIgPgCQhBgPg6ghIgMgHIgdgWIgfgiIg2hmIgbijIDlgIICfgBID/AKIgJCHQgGBchHBCIglAhQgyArhBADQgmAHglAAQgTAAgUgCg");
	this.shape_1.setTransform(-0.7,4.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AsdE8QhGgWg8grQgogcgggnQgSgXgNgbQg1htgQh3QgDgTAAgSIgPACQgJgvgDgvQAAgIABgJIALhBQDngnDqAIQByAGByAJICaAMIApAEQARAXABAkIgBAjIC9gLIAHAAIAzAEIAAAAICyANQgCguAMguIABgFQAVgFAVgDQAvgJB2gJQB1gJDgAGQAyACAxAFIAvADICOALIA1AFQAJAKADAWIAFA5QAAAKgBAJQgEAdgFAcIgBAHIgkABQAKBmgZBfQgWBUg6BCQgUAWgZATQgPANgRAKQhKAthWAKQhuAPhmgmQh4grg2g6QgiglgIgIIgVgrQgcg4gCgKQgThLgLhPIgBgMQgMAGgOAAIi8gPIgtgDIjEALIgrADQAHB4gyByQglBWhOA3QhQA5hgAKQghAFggAAQhIAAhFgXg");
	this.shape_2.setTransform(0.1,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.8,-33.8,226.1,67.9);


(lib.NOSE = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#822646").s().p("AkKEtQhggyAAh/QAAgsAii4QAji6AAgKIAGguIA1AAQgZE8AAArQAACEB4A7QBpA1DOAAQA6AAA1gNQAcgGA0gTQgbBLhLAcQhEAZiYAAQjZAAhagug");
	this.shape.setTransform(-0.2,1.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A33057").s().p("AkNEtQhhgyAAh/QAAgsAji4QAii6ABgKIAGguIIRAAQAnA0AvDcQAZByARBsIgHBHQgcBLhKAcQhEAZiYAAQjZAAhagug");
	this.shape_1.setTransform(0,1.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-36.6,-32.9,73.4,69.5);


(lib.Leg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.popsicleLeg();
	this.instance.setTransform(0,0,0.64,0.64);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,32,192);


(lib.HandRcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A62E52").s().p("ABUAcIgVgVQgSgPgDgBIgxAoQADAEgFADQgQAHgPALQgUAQgmAYIgjAWIB5hcIhEg7QhUCAgGAGQAWglBAhjIgRgKIASAIIAJgOIhYg0IgFgEIBfA0IARgYIgqgbIAsAXIAcgqQACgIAAAKQAAAMgZAeIAwAnIAGAGIgRgOQglgagDgBIgQAZIA1AqQAGAHg+gtIgJAOQAnAcAJAHIAUAZIAygmIgWgQQATANAHAAQACAAAygoIAegWIhOBBIATARIAUAWQAEAAAhgXQAggSAHgHIAJgHIgIAIQgMAKgdAWIggAZQgPAAhJApQhNAsgoAHIDHhlg");
	this.shape.setTransform(35.9,17.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A62E52").s().p("AA6B6QgLgZgFgWQgEgOgJgQIgQgYQgZAGg6AkQhCAqgKAEIgDgCIAAgBQA5g1BlgmIgRgaIhBAkQgiAUgPAGIAugcIBAgmQgKgEABgKQAAgCAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAAADIADAGQAFAHAGAAQAIAAAQgNQgLgRgVggQgsAagXAbQgvA0gUAUIgCgCQA9hLA1gnQBNg5BRADIACACIgxAGQgjAGgZAPQAHAJAPAZQAJAQAGAAQAIAAAWgJIgcAMQAEAHAKAWQAFANAFAAIAdgDIAsgFIhHAJQARAkAPAlQAJAXAGAYIgDgDQgEgTgCgFIgKgUQgYhIgIAAQgQAAgEAGQgCAFgBAAQgQAAgSAGIAaA4QAHAQACAKIAGAagAgCgOQADAHAGARQAJAMAfgRIgagggAAYgdIAYAhIAagEIgZgpgAgNhRQAUAaAPAWIAZgLIgig0g");
	this.shape_1.setTransform(34.2,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F33C6D").s().p("AhCC7QgYgMgOgOQgTgSgNgUQgOgXgMgMIgYgWQgSgSAAgNQAAgaAWgLQALgFAMgBQAKAAAVALQAWANAIAMQAXhvAeg3QAhg5AsAAQAYAAALAPQAGAJAAAKQAAASgXAlQgeAvgBAEIgDALQAfgrAmgYQAggWAXABQAWAAAOAMQAJAJAAAHQAAAdgeAWQg6AsgXAYQANgJAhgOQAfgPAFABQAPAAAPAKQATAMAAAWQAAAYgsATQhAAdgMAJIhBA+QgfAggagBQgIAAgVgJg");
	this.shape_2.setTransform(25.6,17.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F33C6D").s().p("AiQCMQgsg0AAhUQAAgRALgRQAOgUAVAAQAGAAADACIAEAEQADgmASghQARgiAbgWQAjgWAYAGQATAEAAAUQAAAUgNAcIgVAoIAJgMQAQgaAjgVQAhgTAWAAQATAAALAKQALAJAAANQAAAOgLAJQgaAUgFAFIATgEQAygFAQANQAKAIAAAXQAAARgQAIQgfANgeAUQgwBsgrAmQgaAYgjAAQg+AAgqgyg");
	this.shape_3.setTransform(26.4,15.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F33C6D").s().p("AixCqQgUgWAAggQAIhFAAgKIgGgsQgCgVARgFIARgFQAMgCACAAIAEgaIAEgeQgFgFgUgLIgUgKIAtAWQACgRgCgVQAAgZAXgRQAXgSAiAAQAlAAATAYQANAUgFAQIAUgIQARgFAHAAQAXAAAXAdQAcAigHApIACAAIAegWIgbAWQAaAAATAKQATAKAAAOIAJgIIgJAIQAIAKAEAJQADAPAAANQAABRhpAvQhUAlhhAAQg9AAgcgdg");
	this.shape_4.setTransform(33.8,16.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F33C6D").s().p("Ah1CGQgogHgVgiQgFgHgCgJQgHgjgEglQgDgaAOgZQAmhFBOgMQASgFAPAKQAVAAAZgIQAQgFARgBQAigEAiALQAwAKAEAyIAAAIQAuAfgaAvIgJAOQAnAagaApQgcArg3gSQg6gTg4AWQgiAMgiAAQgTAAgUgEg");
	this.shape_5.setTransform(31.5,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F33C6D").s().p("Ai5CTQgXggAAgsQAAhuBRhJQBJhBBdAAQAWAAAeAMQAjAPATAXIABACQAYAXgDAcQADAGAUALQATARAAAmQAAAggTAVQgUAXgkgDQAJAXAGAYIgCgDQgFgTgCgFIgKgUIg+ABQAGAQACAKIAGAaIgBgEQgLgZgGgXQgvgDgzA2Qg3A3gtAAQgcAAgXgfg");
	this.shape_6.setTransform(31.9,16.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.1,-2.6,41.1,39.4);


(lib.HandR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A62E52").s().p("AAkBFIAGACQgbgEgcACQgTABgSgDQgLgBgIgIQgJgHgDgKQgEgNADgOQADgOAIgMQgKATAFAXQACAJAEAIQAHAMAPAEQAOADAPgFQALgEACgLQAFgPABgPQABgPgBgMQgEgWgHgVQANAbABAdQABASgDASIgCAWIAUADQAPgBAPgFQAGgDAEgEQAGgFADgGQAEgIABgIQABgOgBgMQAAgYgLgUIgPgXQAcAQAGAfQAHAhgJAiIgkAbg");
	this.shape.setTransform(25.8,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A62E52").s().p("AgwBGQgLgCgJgHQgIgHgEgKQgEgNACgNQADgPAHgMQgIAUAFAWQACAJAFAIQAHAMAOADQAPADAPgFQAKgFADgLQAEgPAAgPQABgPgBgMQgFgVgHgVQANAaACAdQABASgCASIgCAWIAUADQAQgCAPgGQAFgCAFgEIADgEIACgEIADgEQAEgIAAgIQABgOgBgMQgBgXgKgTIgBgBQgHgMgJgLQAHAEAGAFQARAOAFAXQAIAhgIAiIgHAFIAAADIgGAEIAAgCIgTAPIgBAAIAAABIgJABIgNgBIgDAAIABAAIgMAAIgWABIgQABIgVgBg");
	this.shape_1.setTransform(25.6,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F33C6D").s().p("AiaCKQgagVAAgnQAAgGAKgjQAKgkAAgFIgMgfQgNgjAAgdQAAgYALgOQAOgTAeAAQAfAAAOAgIAXBWQAKgEA/gtQA4gpAdAAQAVAAAJAaQAIAZgPAQQghAhg9AmQAmgNApgJQAdgGANAAQAoAAAAAXQAAAhhMAXIhSASIAUgBIBCgBQAJADAAAWQAAAig6AMQgsAJhxAAQgmAAgYgTg");
	this.shape_2.setTransform(22.4,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F33C6D").s().p("AAZB7IgXgLIgQgNIgNgGQgOgHgOgDQgcgHgbgNIgVgMIgEgCIgDgDIgDABIgJgLIgBgBQgLgRgBgTQAAgKADgKQAFgSALgPQALgRAOgNIAYgRQA/gcAqADQAZABANADQAPADALAIIARANQAgAaAWAjQAQAgACAhQABALgEAJQgEAIgFAHQgDAFgHACQgLAEgLAAQgMAAgLgFQgJgEgGgIQgLgNgHgiIAAABIAAgCIAAABIgkAbIADgDIADADQASALAMAPQAJALACAOQABAHgCAGQgCAIgFAFQgFAGgIAFQgFADgGAAQgIAAgJgFg");
	this.shape_3.setTransform(27.4,19.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F33C6D").s().p("AiLB3QgjgogegpQAAgbAWgLQALgFAMAAQAKAAAVAKQAWANAIANQA7jSA9gSQAUgGARASQAOAPAAAMQAAAMgRAbQgZAlgMAeIgDALQAfgrAmgZQAggVAXAAQAWAAAOANQAJAJAAAHQAAAcgeAXQg6ArgXAZQANgJAhgOQAfgPAFAAQAPAAAPALQATALAAAWQAAAZgsATQhAAdgMAJIhBA+QgfAfgaAAQgfAAhHhQg");
	this.shape_4.setTransform(25.6,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F33C6D").s().p("AArB7IgZgKIgSgNIgNgGQgQgGgOgEQgdgGgdgMIgIgEIgPgGQgQgHgIgPQgJgPgCgSQAAgIACgKQAFgSAKgQQALgQAOgOIAXgRQA/gfAqACIAYACIAAAAIANABQAPADALAIIARAOQAfAbAWAkQAPAhABAjQAAAMgEAKQgEAJgFAHQgEAFgGACQgLAFgLAAQgNAAgLgFQgJgEgFgIQgKgMgHgjIAAgCIAAABIAAgCIAAABIgGAEIAAgCIgTAPIAAAAIADACIABABIAAAAIAAAAIAAAAQAUAOAMANQALALAEAOQACAGgBAGQgBAIgEAGQgFAGgGAFQgFADgHAAQgHAAgJgFgAAiAkIABAAIgBAAg");
	this.shape_5.setTransform(26.9,20.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.8,-1.2,37.3,31.6);


(lib.handL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F33C6D").s().p("Ah3BXQgqhEAAhWQAAgOAJgRQAPgaAaAAIAUAIQAVAIAKAHQACgWALgMQAKgMAOAAQAPAAAMAKQAPALADAPQASgSAHAAQAbAAAPArQAOAqgBBIQAbgOAJAAQAVAAADAVQADAVgUAZQg2BDiJAAQgkAAglg9g");
	this.shape.setTransform(16.3,14.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,32.6,29.7);


(lib.GUITAR = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.guitar2();
	this.instance.setTransform(11.3,0,0.697,0.697,4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,359,184.4);


(lib.Frets = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A62E52").s().p("AgkALQgHgJgXgVIAQAIQANACAOAfQANAcABARQgPgmgMgSgAAchCQACgCAKANIAJANIASAiIAAABQgCAAglg7g");
	this.shape.setTransform(16.8,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A62E52").s().p("AAAAAIgWgmQAPAOANAXQAPAXACARIgCABQgBgGgUgig");
	this.shape_1.setTransform(22.9,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F33C6D").s().p("AAAgBQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAgBAAIAAACIAAgDg");
	this.shape_2.setTransform(32,16.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000099").s().p("AAAAGIABgLIAAABIgBAKg");
	this.shape_3.setTransform(31.6,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A62E52").s().p("AgTAAQgNgbgVgWIAIAFIAGAFQAPANAJAWQALAXADAfQgNgmgFgMgAAjgFQgNgMgCgGIACAAIASAQQALAIADAHQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAIgSgPg");
	this.shape_4.setTransform(17.9,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_4}]},2).wait(2));

	// Layer 2
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F33C6D").s().p("AgyCFQgEgFgbhDQgIgVgngPQgjgNAAgQQAAgUATgOQAUgOAcAAQAQAAATAFIARAHQgDgJgKgHQgHgFAAgWQAAgVAWgLQARgJAWAAQAEAAAHAFIARAJIAQAKIgJgRIgFgOQAAgRAMgKQAJgIAJAAQAtAAAcAuQAiA2AABqQAAA1guAmQgqAkg0AAQgzAAgXgigABCg/IAGAKQADAAgLgSg");
	this.shape_5.setTransform(15.2,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F33C6D").s().p("AgFCmQgPgCgOgFQgagKgMgZIgIgTIgDgJIgFgVIgCgLIgCgKQgHAJgJACQgNAEgQgEQgIgCgEgKQgFgLgBgLQgGgfAYgXQAQgRAaAAQAMACALAFQAYAIAMAYIAHgHIgjgrIgFgDIgDgJQgDgKACgMQACgQAMgJQARgMAUABQAYgEAQAVIANASQAGAIAFAJQAJAUADAVIAPgCQAAgSgCgSQgBgHgCgGIgFgMQgHgWADgZQABgHADgEQAQgVAZAAQAqAEAMApIADAvIABAlIgCApIgEAyQADgZgCAZQgEAsgeAeQgKAKgMAIQgOALgQAGQgTAIgVAEQgRgCgPgDg");
	this.shape_6.setTransform(16.2,16.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F33C6D").s().p("Ag5CAQgagagKhBIgLAJQgIAEgLAAQgPAAgHgGQgMgLAAghQAAgXATgRQASgRAYAAQAPAAATAPQAQALAJAOIAAAAQABAFADADQAEgBAGgEIANgHQgBgFgXgpQgVgmAAgOQAAgQAOgJQANgJATAAQAfAAAQAOQASAPAYADQATABATARQAPAOAGAMQAKAUACAYIABATIADAAIgEAwIACgNIAAABIgBAMQgDAYgfApQgpA3gzAAQg4AAgbgagACbgOQABAAABABQAAAAAAAAQABABAAAAQAAABgBAAIgBADIgBgGg");
	this.shape_7.setTransform(16.3,17.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F33C6D").s().p("AgeCmQgUgFgRgQQgXgXgEgfIgBgEIgBgCQADgLgBgOQgCgWgKgTQgOgXgJgaQgIgVgEgWQgFgdAagIQAJgDAKAAQAbgBAYAMQAIAEAEAHIAGAFIARAAQAZAEAVANIgFgMIgCgFQgVgeAAgSQAAghApgBQArgBAWAvQAQAZADAXQABAIAAAlIAAASIAFACQANAhgHAnQgHAlgcAbQgZAYghALQgXAHgYAAQgNAAgRgDg");
	this.shape_8.setTransform(17.3,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.2,32.9,33.5);


(lib.FBTEETH = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AMhBrIgGgBIgDgEQgIgKgRgCIgpgEIgJAAQACh1gDgTIgGgDQgFAOgCB8Ig4ABIj1ACIAAgBIgChkQgBgrgDgVIgIAAQgDAeABCFIgxABQj5AEhnAAIAAgZIgCg9IgDhKIgBgIIgOAAQACAMADCcInMgKIAAAAQABgSgEg8IgHhOIgBAAIgDACQgDAAgDgHIgEgLIgCgCQgBAHAAAPIACCXIAAABQh6gHhPgCIAAgDIgIhiQgDgZgJgIQAAAAAAAAQgBgBAAABQAAAAAAABQgBAAAAABQAEAnACBYIAAADQgOgIgXAEQgZAEgHgDQgfgKAAh7QAAgWASgHQAVgHBMgBQExADF6gEIEMgCQCnAACVAIQEbAOAAAkQAAAQgHAiQgIAngBANQAAANgEAPQgEASgHAHg");
	this.shape.setTransform(0.4,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C1CFCF").s().p("ALuBjIAAAAIANgDIAEADIgIABIgJgBgAg/hUIAOAAIAAAIIAEBMIACA7IAAAZIgPAAQgEibgBgNgAFmBPQgBiFADgdIAHAAQAEAVABAqIABBkIhAABgAJqBQIA5gCQABh8AGgOIAGAEQACATgBB0IAJABgAogBJIgBiXQgBgPACgGIABABIAFALQADAHACABIADgCIACgBIAGBQQAFA7gBASgAr4A9QgChZgEgnQAAAAAAgBQABgBAAAAQAAAAAAAAQABAAAAAAQAJAJADAZIAHBhg");
	this.shape_1.setTransform(3.2,0);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C1CFCF").s().p("AMhBrIgGgBQgIACgJgDIABAAIANgDQgIgKgRgCIgpgEIlEACIAAgBIhBAAQj5AEhnAAIgPAAInMgKIAAAAIgZgBIAAABQh6gHhPgCIAAgDIgQgCIAAADQgOgIgXAEQgZAEgHgDQgfgKAAh7QAAgWASgHQAVgHBMgBQExADF6gEIEMgCQCnAACVAIQEbAOAAAkQAAAQgHAiQgIAngBANQAAANgEAPQgEASgHAHg");
	this.shape_2.setTransform(0.4,-0.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-11.4,166.8,21.5);


(lib.EYEBROW = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#461622").s().p("AC0CRIgFgDIhGguQhTgqgsgPQgjgNhdgMQhVgKgWgJQgRgJAZhAQAYhCAcAAQBLAAB6AgQBtAfAgAVQAnAaA+AjQAXANAAALQAAA1hOBDIgHAAg");
	this.shape.setTransform(0.2,0.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.3,-14.4,53.1,29.1);


(lib.MOUTH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#662A44").s().p("AlTA+QiugVh6glQhrgfgkgSQgYgNAAgPQAAgHACgBIAKAAQATAABAAWIBNAdQBcAgCcAVQClAWC3AAQD4AACCgPID6goQCWgoAzgRQAHAAABABIAAAXQgCAFgOAGIiyAyQhVAZiiASQi6AVjAAAQifAAikgUg");
	this.shape.setTransform(4.9,-70.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(19.4,-67);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3D2235").s().p("AKEAYIAAgBIgJgGQgWgRgJgCQg4ghhvAAQhzAAhmA+IhiA/IgKgDQAWggAYgaQgzg2hGgKQgmgQg6AHQg8AGggAPIgaAPQAhApACA8IgDAEQgEgFgQgeQgQgigUgVQhGhGiiAAQhTAAg7AiIgEACQgiAPgZAPQgYAQgQARQgBgDAAgDQAAgNADgMIAAAAIAAgBIANgQIgHgHQgMgNgWAAQgWAAgTAHQAAAAgBABQAAAAAAgBQAAAAAAgBQgBAAAAgCQAAgYA0ACQAkACALAPIADgEIABgBIAAABIAAAAQATgPAcgOQBPgkBoABQBvABBKAtQASAMAOAOQAQgPAigOQAjgPApgFQApgGBIALQA1AFA0AlQAGADAKAHIgBABQARANAIAJIAIgFQBFg0CFgVQCQAABCAbQAXAJAXAZIAKAIIAAABQAHgJAKgJQAfgXAkAWIABAEQgugCgTAXIgEAKIAEAGQAfAmAJAqIgBAGQgagdg0gxg");
	this.shape_2.setTransform(3.1,-64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AldgyQhBgcg2glIgwgkQglgagoglQgwgtgMgOQgogxgNgXIBSgNQBzgSBXgDQHMgTGPAqQCnASBnATQh1ChhqBKQiUBnjZAJIg3ABQjlAAi4hPg");
	var mask_graphics_2 = new cjs.Graphics().p("AhWDJQh4gNhwgvQhlgrhWhFQhYhEhBhdQhChegthqIgQgmQEJgfE3gEIB6ABIAdAAQBugBBwADQBtACBsAFQB2AFB0AMQBSAIBRAKIAIADQgtDriDB7QjBC8kLAVQggADgcAAQhcAAhUgMg");
	var mask_graphics_3 = new cjs.Graphics().p("AiOEnQicgWiDhAQlHigg9lpQABgggCgSQArgJBUgMQBUgMEvgUQEwgTESAWQEVAVDoAhIAkAGQhDE3iLCIQibCZlRAwQg9AIg+AAQhEAAhIgJg");
	var mask_graphics_4 = new cjs.Graphics().p("AkgClQgkgxgRg8QgLgoAAgZQAAidBuhRQBhhGCRAHQCLAGBoBFQBuBJAABoQAAB1g6BqQhSCTifAAQjqAAhsiTg");
	var mask_graphics_5 = new cjs.Graphics().p("AighCQgjg1AAgxQAAhAArhJQA9hmBwAEQA8APA1A+QA+BIAABRQgCAygZAvQgwBdhzAAQhvAAg3hTg");
	var mask_graphics_6 = new cjs.Graphics().p("AhiBBQgWgoAAgaQAAg2AmgjQAjghAvgBQAygBAhAiQAmAmAABEQAABuh7AAQg/AAghg8g");
	var mask_graphics_7 = new cjs.Graphics().p("AJ9AjIgBgBIgIgGIAAAAQgXgRgJgEIAAAAQg3gfhvAAIAAAAQh0AAhmA+IAAAAIhhA/IgLgDQAXggAYgaIAAAAQg0g2hGgKIAAAAQgmgQg6AHIAAAAQg8AGggAPIAAAAIgaANIAAAAQAiArABA8IAAAAIgCAEQgFgFgPgeIAAAAQgRgigUgVIAAAAQhFhGiiAAIAAAAQhUAAg7AiIAAAAIgEACIAAAAQgiAPgYAPIAAAAQgYAQgQARIAAAAQgCgDAAgDIAAAAQAAgNAEgMIAAAAIAAAAIAAgBIARgWIAAAAIANgTIAAAAIABgBIAAAAIAAABIAAAAQATgPAdgOIAAAAIABgBIAAAAIgBABIAAAAQgdAOgTAPIAAAAIAAgBIAAAAIgBABIAAAAIgNATIAAAAQgjgrgNgWIAAAAIBSgNIAAAAQB0gSBXgDIAAAAQHLgTGQAqIAAAAQCnASBnATIAAAAQgVAdgUAYIAAAAIgDgFIAAAAIgBgBIAAAAIABABIAAAAIADAFIAAAAIAEADIAAAAIANARIAAAAQAeAmAJAqIAAAAIgBAGIAAAAQgZgdg0gxgAKOABIgIgFIAAAAIAIAFgACcgJQgKgIgHgDIAAAAQg0glg0gFIAAAAIgHgBIAAAAIAHABIAAAAQA0AFA0AlIAAAAQAHADAKAIIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAgACagJIABgBIAAAAIgBABgACbgKIAAAAIAAAAIAAAAgAmlhaQBuABBKAtIAAAAQASAMAPAOIAAAAQAPgPAjgOIAAAAQAigPApgFIAAAAIACgBIAAAAIgCABIAAAAQgpAFgiAPIAAAAQgjAOgPAPIAAAAQgPgOgSgMIAAAAQhKgthugBIAAAAIgDAAIAAAAIADAAIAAAAIAAAAgApTg7QBIgfBfAAIAAAAQhfAAhIAfgAAXhAIgFgBIAAAAIAFABgAhNhEQAOgCARAAIAAAAQgRAAgOACgAgthGIAAAAIAAAAIAAAAgAmrhaIAAAAIAAAAIAAAAg");
	var mask_graphics_10 = new cjs.Graphics().p("AldB/QhBgdg2gkIgwgkQglgagogjIhQhLIghg4IBSgOQBzgRBXgEQHMgSGPAqQCnARBnAUQh1CfhqBKQiUBojZAJIg3ABQjlAAi4hQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:3.1,y:-38.6}).wait(1).to({graphics:mask_graphics_2,x:3.7,y:-40.5}).wait(1).to({graphics:mask_graphics_3,x:5.4,y:-42.4}).wait(1).to({graphics:mask_graphics_4,x:6.7,y:-50.9}).wait(1).to({graphics:mask_graphics_5,x:7.4,y:-40.4}).wait(1).to({graphics:mask_graphics_6,x:8.5,y:-68.7}).wait(1).to({graphics:mask_graphics_7,x:3.9,y:-65.9}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_10,x:3.1,y:-56.4}).wait(1).to({graphics:null,x:0,y:0}).wait(1));

	// Layer 3
	this.instance = new lib.FBTEETH("synched",0);
	this.instance.setTransform(4.3,-74.8);

	this.instance_1 = new lib.FBTEETH("synched",0);
	this.instance_1.setTransform(4.3,-50.4,1,1.546,0,180,1.1);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{y:-74.8}}]},1).to({state:[]},7).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.instance,p:{y:-70.8}}]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3D2235").s().p("AjYDtQgwgMgsgSIg3gXQgngOgVgbQgQgUgBgYIgBgUIgEgLQgQhEA3hRQAwhMBSg4QBRg4BCgDQBHgDAPBFQAEAQgGAoIgBADQgHAeAAAHQAAATAHANQANAaAhAAQAeAAAUgXQAPgTAAgSQgFg0gIggQAHggAYgSQAqghBOAZQBMAYBBBDQBIBKAVBdQAJAqADAeQACAggEAVQACAFgBAFQAAAigCAIQgEARgTAZQgRAXgfAJQg+ASiiAAQjfAAiQgkg");
	this.shape_3.setTransform(2.9,-31.5);

	this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[]},7).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#81456B").s().p("AldB/QhBgdg2gkIgwgkQglgagogjQgwgugMgNQgogxgNgXIBSgOQBzgRBXgEQHMgSGPAqQCnARBnAUQh1CfhqBKQiUBojZAJIg3ABQjlAAi4hQg");
	this.shape_4.setTransform(3.1,-56.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#81456B").s().p("AhWEqQh4gOhwguQhlgshWhEQhYhHhBhaQhChfgthqIgQgmQEJgeE3gEIB6ABIAdAAQBugBBwACQBtACBsAGQB2AFB0AMQBSAIBRAKIAIACQgtDsiDB7QjBC7kLAVQggADgcAAQhcAAhUgLg");
	this.shape_5.setTransform(3.7,-50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#81456B").s().p("AiOFjQicgWiDhAQlHigg9lpQABgfgCgTQArgJBUgMQBUgMEvgTQEwgUESAWQEVAVDoAhIAkAGQhDE1iLCKQibCZlRAwQg9AIg+AAQhEAAhIgJg");
	this.shape_6.setTransform(5.4,-48.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81456B").s().p("AkgClQgkgxgRg8QgLgoAAgZQAAidBuhRQBhhGCRAHQCLAGBoBFQBuBJAABoQAAB1g6BqQhSCTifAAQjqAAhsiTg");
	this.shape_7.setTransform(6.7,-50.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#81456B").s().p("AigB9Qgjg1AAgxQAAg+ArhIQA9hmBwAEQA8AOA1A+QA+BIAABPQgCAzgZAvQgwBehzAAQhvAAg3hVg");
	this.shape_8.setTransform(7.4,-59.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#81456B").s().p("AhiBBQgWgoAAgaQAAg2AmgjQAjghAvgBQAygBAhAiQAmAmAABEQAABuh7AAQg/AAghg8g");
	this.shape_9.setTransform(8.5,-68.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#81456B").s().p("AldB/QhBgdg2gkIgwgkQglgagogjIhQhLIghg4IBSgOQBzgRBXgEQHMgSGPAqQCnARBnAUQh1CfhqBKQiUBojZAJIg3ABQjlAAi4hQg");
	this.shape_10.setTransform(3.1,-56.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.4,-78.9,160.7,16.6);


(lib.Excerciseface = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SUNGLASSES
	this.instance = new lib.SUNGLASSES("single",0);
	this.instance.setTransform(-80.2,-112.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(150));

	// EYEBROW
	this.instance_1 = new lib.EYEBROW("single",0);
	this.instance_1.setTransform(-155.6,-169.8,1,1,0,-4.2,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({skewX:25.7,skewY:205.8,x:-151.3,y:-158.3},0).wait(1).to({skewX:40.7,skewY:220.8,x:-151.7,y:-153.3},0).wait(4).to({skewX:25.7,skewY:205.8,x:-150.2,y:-169.4},0).wait(1).to({skewX:-4.1,skewY:175.7,x:-154.9,y:-185.9},0).wait(1).to({skewX:-19.1,skewY:160.7,x:-154,y:-195.6},0).wait(1).to({x:-153.4,y:-202},0).wait(2).to({x:-153.7,y:-198.8},0).wait(35).to({skewX:40.7,skewY:220.8,x:-153.3,y:-202},0).wait(1).to({scaleX:1,scaleY:1,skewX:41.1,skewY:221.2,x:-152.2,y:-198.8},0).wait(1).to({skewX:41.4,skewY:221.5,x:-151.2,y:-195.8},0).wait(1).to({skewX:41.8,skewY:221.9,x:-150.1,y:-192.8},0).wait(1).to({skewX:42.1,skewY:222.2,x:-149.1,y:-189.8},0).wait(1).to({skewX:42.4,skewY:222.5,x:-148,y:-187},0).wait(1).to({skewX:42.6,skewY:222.7,x:-147.2,y:-184.3},0).wait(1).to({skewX:42.9,skewY:223,x:-146.2,y:-181.7},0).wait(1).to({skewX:43.1,skewY:223.2,x:-145.3,y:-179.2},0).wait(1).to({skewX:43.4,skewY:223.5,x:-144.5,y:-176.8},0).wait(1).to({skewX:43.6,skewY:223.7,x:-143.6,y:-174.5},0).wait(1).to({skewX:43.9,skewY:224,x:-142.8,y:-172.3},0).wait(1).to({skewX:44.1,skewY:224.2,x:-142.1,y:-170.1},0).wait(1).to({skewX:44.4,skewY:224.5,x:-141.4,y:-168.1},0).wait(1).to({skewX:44.6,skewY:224.7,x:-140.7,y:-166.2},0).wait(1).to({skewX:44.9,skewY:225,x:-140.1,y:-164.4},0).wait(1).to({x:-139.5,y:-162.6},0).wait(1).to({skewX:45.1,skewY:225.2,x:-138.9,y:-161},0).wait(1).to({skewX:45.4,skewY:225.5,x:-138.3,y:-159.5},0).wait(1).to({x:-137.8,y:-158.1},0).wait(1).to({skewX:45.6,skewY:225.7,x:-137.3,y:-156.7},0).wait(1).to({skewX:45.9,skewY:226,x:-136.9,y:-155.5},0).wait(1).to({x:-136.5,y:-154.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:46,skewY:226.1,x:-136.2,y:-153.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:46.1,skewY:226.2,x:-135.8,y:-152.4},0).wait(1).to({x:-135.5,y:-151.5},0).wait(1).to({skewX:46.4,skewY:226.5,x:-135.3,y:-150.7},0).wait(1).to({x:-135.1,y:-150.1},0).wait(1).to({x:-134.9,y:-149.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:46.5,skewY:226.6,x:-134.7,y:-149.1},0).wait(10).to({skewX:31.5,skewY:211.6,x:-134.1,y:-161.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-4.1,skewY:175.7,x:-153.9,y:-189.8},0).wait(1).to({skewX:-19.1,skewY:160.7,x:-153.4,y:-202},0).wait(2).to({x:-153.6,y:-197.2},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({skewX:-4.1,skewY:175.7,x:-155.5,y:-169.7},3).wait(21));

	// EYEBROW
	this.instance_2 = new lib.EYEBROW("single",0);
	this.instance_2.setTransform(-7.6,-169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-14.8,x:-8.2,y:-157.1},0).wait(1).to({rotation:-29.8,x:-8.5,y:-153.5},0).wait(4).to({rotation:-14.8,x:-7,y:-169.6},0).wait(1).to({rotation:0,x:-6.9,y:-185.9},0).wait(1).to({rotation:15,x:-6,y:-195.6},0).wait(1).to({x:-5.4,y:-202},0).wait(2).to({x:-5.7,y:-198.8},0).wait(35).to({rotation:-29.8,x:-5.4,y:-202},0).wait(1).to({scaleX:1,scaleY:1,rotation:-30.6,x:-5.9,y:-199},0).wait(1).to({rotation:-31.6,x:-6.6,y:-196},0).wait(1).to({scaleX:1,scaleY:1,rotation:-32.4,x:-7,y:-193.2},0).wait(1).to({rotation:-33.2,x:-7.6,y:-190.5},0).wait(1).to({rotation:-34.1,x:-8.1,y:-187.7},0).wait(1).to({rotation:-34.9,x:-8.6,y:-185.2},0).wait(1).to({rotation:-35.6,x:-9,y:-182.7},0).wait(1).to({rotation:-36.2,x:-9.5,y:-180.3},0).wait(1).to({rotation:-36.9,x:-9.9,y:-178},0).wait(1).to({rotation:-37.6,x:-10.4,y:-175.8},0).wait(1).to({rotation:-38.2,x:-10.7,y:-173.7},0).wait(1).to({rotation:-38.9,x:-11.1,y:-171.7},0).wait(1).to({rotation:-39.4,x:-11.5,y:-169.8},0).wait(1).to({rotation:-39.9,x:-11.8,y:-168},0).wait(1).to({rotation:-40.4,x:-12.1,y:-166.2},0).wait(1).to({rotation:-40.9,x:-12.4,y:-164.5},0).wait(1).to({rotation:-41.4,x:-12.8,y:-163},0).wait(1).to({rotation:-41.9,x:-13,y:-161.6},0).wait(1).to({rotation:-42.2,x:-13.2,y:-160.2},0).wait(1).to({rotation:-42.7,x:-13.5,y:-158.9},0).wait(1).to({rotation:-42.9,x:-13.7,y:-157.8},0).wait(1).to({rotation:-43.4,x:-13.9,y:-156.6},0).wait(1).to({rotation:-43.7,x:-14.2,y:-155.6},0).wait(1).to({rotation:-43.9,y:-154.8},0).wait(1).to({rotation:-44.2,x:-14.4,y:-154},0).wait(1).to({rotation:-44.4,x:-14.5,y:-153.3},0).wait(1).to({x:-14.6,y:-152.7},0).wait(1).to({rotation:-44.7,x:-14.7,y:-152.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-44.8,x:-14.8,y:-151.7},0).wait(10).to({rotation:-29.8,x:-14.3,y:-163.9},0).wait(1).to({rotation:0,x:-5.9,y:-189.8},0).wait(1).to({rotation:15,x:-5.4,y:-202},0).wait(2).to({x:-5.6,y:-197.2},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({rotation:0,x:-7.5,y:-169.7},3).wait(21));

	// NOSE
	this.instance_3 = new lib.NOSE("synched",0);
	this.instance_3.setTransform(-78.9,-95.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(150));

	// MOUTH
	this.instance_4 = new lib.MOUTH("single",0);
	this.instance_4.setTransform(-85,-25.8,1.069,1.069,8,0,0,3,-75.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:10},0).wait(22).to({regY:-75.7,scaleX:0.98,scaleY:0.74,x:-94.8,y:-25.8},0).wait(2).to({regY:-75.8,scaleX:0.87,scaleY:1.2,x:-97.4,y:-25.7,startPosition:0},0).wait(2).to({scaleX:1.07,scaleY:1.07,x:-84.9},0).wait(38).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:10},0).wait(25).to({regY:-75.7,scaleX:0.98,scaleY:0.74,x:-94.8,y:-25.8},0).wait(2).to({regY:-75.8,scaleX:0.87,scaleY:1.2,x:-97.4,y:-25.7,startPosition:0},0).wait(2).to({scaleX:1.07,scaleY:1.07,x:-84.9},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-186.2,226.1,186.9);


(lib.FreezerBurn_Excercise = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand - L
	this.instance = new lib.handL("single",0);
	this.instance.setTransform(269.7,254.9,0.905,0.905,0,0,0,16.2,14.8);

	this.instance_1 = new lib.HandR("single",2);
	this.instance_1.setTransform(210.7,239.1,1.011,1.011,6.2,0,0,23.2,27.7);

	this.instance_2 = new lib.HandRcopy("synched",2);
	this.instance_2.setTransform(209.2,260.4,1.008,1.008,13.3,0,0,23.1,27.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A62E52").ss(7,1,1).p("Ap4m1QhZDTAJDXQAPE4CoBXQCoBWGAg/QGDg/Evlt");
	this.shape.setTransform(142.5,280.6);

	this.instance_3 = new lib.Frets("synched",0);
	this.instance_3.setTransform(365.9,224.6,1,1,0,0,0,17.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:269.7,y:254.9,regY:14.8,regX:16.2,scaleX:0.905,scaleY:0.905}}]}).to({state:[{t:this.instance,p:{rotation:-1.9,x:267,y:252.2,regY:14.8,regX:16.2,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance,p:{rotation:-2.6,x:272.7,y:267.8,regY:14.9,regX:16.2,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance,p:{rotation:-5.6,x:269.4,y:263.5,regY:15,regX:16.3,scaleX:0.904,scaleY:0.904}}]},1).to({state:[{t:this.instance,p:{rotation:-3.9,x:273,y:266.5,regY:14.9,regX:16.3,scaleX:0.905,scaleY:0.905}}]},2).to({state:[{t:this.instance,p:{rotation:-0.4,x:293.8,y:261.3,regY:14.8,regX:16.4,scaleX:0.994,scaleY:0.994}}]},1).to({state:[{t:this.instance,p:{rotation:-13.4,x:345.7,y:179.6,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance,p:{rotation:-21.7,x:365.1,y:154.5,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_1,p:{rotation:6.2,x:210.7,y:239.1,regY:27.7,scaleX:1.011,scaleY:1.011}},{t:this.instance,p:{rotation:-23.7,x:362.7,y:138.5,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_1,p:{rotation:8.5,x:209.6,y:249.2,regY:27.7,scaleX:1.011,scaleY:1.011}},{t:this.instance,p:{rotation:-21.4,x:365.4,y:154.7,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance,p:{rotation:-18.9,x:367.5,y:171.4,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}},{t:this.instance_2,p:{y:260.4,x:209.2,startPosition:2}}]},1).to({state:[{t:this.instance,p:{rotation:-18.9,x:367.5,y:173.5,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}},{t:this.instance_2,p:{y:262.6,x:209.2,startPosition:2}}]},1).to({state:[{t:this.instance,p:{rotation:-18.9,x:367.5,y:171.4,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}},{t:this.instance_2,p:{y:262.2,x:209.8,startPosition:4}}]},2).to({state:[{t:this.instance_1,p:{rotation:11,x:207.8,y:258.8,regY:27.7,scaleX:1.011,scaleY:1.011}},{t:this.instance,p:{rotation:-18.9,x:367.5,y:171.4,regY:14.8,regX:16.4,scaleX:1.011,scaleY:1.011}}]},3).to({state:[]},26).to({state:[{t:this.shape},{t:this.instance_1,p:{rotation:7.2,x:209.6,y:281.9,regY:27.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance,p:{rotation:-17.5,x:365.6,y:218.8,regY:14.8,regX:16.5,scaleX:1.008,scaleY:1.008}}]},1).to({state:[{t:this.instance_3,p:{rotation:0,x:365.9,y:224.6,startPosition:0,regY:15.1,scaleX:1,scaleY:1,regX:17.4,mode:"synched"}}]},2).to({state:[{t:this.instance_3,p:{rotation:-2,x:359.8,y:223.8,startPosition:1,regY:15.1,scaleX:1,scaleY:1,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-4.2,x:353.9,y:223.1,startPosition:2,regY:15.1,scaleX:1,scaleY:1,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-6.4,x:348,y:222.2,startPosition:3,regY:15,scaleX:1.001,scaleY:1.001,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-8.4,x:342.4,y:221.6,startPosition:4,regY:15.1,scaleX:1.001,scaleY:1.001,regX:17.5,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-10.5,x:336.7,y:220.9,startPosition:5,regY:15.1,scaleX:1.001,scaleY:1.001,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-12.5,x:331.3,y:220.2,startPosition:6,regY:15.1,scaleX:1.001,scaleY:1.001,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-14.5,x:325.9,y:219.5,startPosition:7,regY:15.1,scaleX:1.002,scaleY:1.002,regX:17.5,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-16.4,x:320.7,y:218.8,startPosition:0,regY:15,scaleX:1.002,scaleY:1.002,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-18.4,x:315.5,y:218.2,startPosition:1,regY:15.1,scaleX:1.002,scaleY:1.002,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-20.2,x:310.4,y:217.6,startPosition:2,regY:15.1,scaleX:1.002,scaleY:1.002,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-22,x:305.5,y:216.9,startPosition:3,regY:15.1,scaleX:1.003,scaleY:1.003,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-23.7,x:300.7,y:216.3,startPosition:4,regY:15,scaleX:1.003,scaleY:1.003,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-25.5,x:296.1,y:215.7,startPosition:5,regY:15.1,scaleX:1.003,scaleY:1.003,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-27.2,x:291.6,y:215.1,startPosition:6,regY:15.1,scaleX:1.003,scaleY:1.003,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-28.7,x:287.1,y:214.6,startPosition:7,regY:15.1,scaleX:1.003,scaleY:1.003,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-30.5,x:282.8,y:214,startPosition:0,regY:15.1,scaleX:1.004,scaleY:1.004,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-32,x:278.7,y:213.4,startPosition:1,regY:15.1,scaleX:1.004,scaleY:1.004,regX:17.5,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-33.5,x:274.6,y:212.9,startPosition:2,regY:15.1,scaleX:1.004,scaleY:1.004,regX:17.5,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-35,x:270.5,y:212.5,startPosition:3,regY:15.1,scaleX:1.004,scaleY:1.004,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-36.3,x:266.8,y:211.9,startPosition:4,regY:15.1,scaleX:1.004,scaleY:1.004,regX:17.5,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-37.7,x:263,y:211.6,startPosition:5,regY:15.1,scaleX:1.005,scaleY:1.005,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-39,x:259.3,y:211,startPosition:6,regY:15.1,scaleX:1.005,scaleY:1.005,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-40.3,x:255.8,y:210.5,startPosition:7,regY:15.1,scaleX:1.005,scaleY:1.005,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-41.5,x:252.5,y:210.2,startPosition:0,regY:15.1,scaleX:1.005,scaleY:1.005,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-42.8,x:249.2,y:209.8,startPosition:1,regY:15.1,scaleX:1.005,scaleY:1.005,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-44,x:246,y:209.3,startPosition:2,regY:15.1,scaleX:1.006,scaleY:1.006,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-45,x:242.9,y:208.9,startPosition:3,regY:15.1,scaleX:1.006,scaleY:1.006,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-46.1,x:240,y:208.5,startPosition:4,regY:15,scaleX:1.006,scaleY:1.006,regX:17.4,mode:"synched"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-47.2,x:237.2,y:208.1,startPosition:0,regY:14.9,scaleX:1.008,scaleY:1.008,regX:16.6,mode:"single"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-47.2,x:236.4,y:213.1,startPosition:0,regY:14.9,scaleX:1.008,scaleY:1.008,regX:16.6,mode:"single"}}]},2).to({state:[{t:this.instance_3,p:{rotation:-47.2,x:238.7,y:221.4,startPosition:0,regY:14.9,scaleX:1.008,scaleY:1.008,regX:16.6,mode:"single"}}]},1).to({state:[{t:this.instance_3,p:{rotation:-47.2,x:240.9,y:212.4,startPosition:0,regY:14.9,scaleX:1.008,scaleY:1.008,regX:16.6,mode:"single"}}]},2).to({state:[{t:this.instance,p:{rotation:-32.2,x:277.1,y:193.8,regY:14.9,regX:16.6,scaleX:1.008,scaleY:1.008}}]},2).to({state:[{t:this.instance,p:{rotation:-47.5,x:317.5,y:54.9,regY:14.8,regX:16.4,scaleX:1.145,scaleY:1.145}}]},1).to({state:[{t:this.instance,p:{rotation:-55.3,x:307.6,y:23.1,regY:14.8,regX:16.4,scaleX:1.162,scaleY:1.162}}]},1).to({state:[{t:this.instance,p:{rotation:-48.2,x:334.2,y:81.8,regY:15,regX:16.5,scaleX:1.138,scaleY:1.138}}]},2).to({state:[{t:this.instance,p:{rotation:-27.1,x:408,y:151.3,regY:15,regX:16.4,scaleX:1.137,scaleY:1.137}}]},1).to({state:[{t:this.instance,p:{rotation:-22.9,x:413.2,y:173.8,regY:15,regX:16.5,scaleX:1.139,scaleY:1.139}}]},1).to({state:[{t:this.instance,p:{rotation:-22.9,x:413.2,y:170.1,regY:15,regX:16.5,scaleX:1.139,scaleY:1.139}}]},1).to({state:[{t:this.instance,p:{rotation:-22.9,x:413.2,y:167.1,regY:15,regX:16.5,scaleX:1.139,scaleY:1.139}}]},1).to({state:[{t:this.instance,p:{rotation:-25.7,x:409.8,y:179.3,regY:15,regX:16.5,scaleX:1.139,scaleY:1.139}}]},31).to({state:[{t:this.instance,p:{rotation:-26.2,x:409.1,y:194.4,regY:14.9,regX:16.4,scaleX:1.138,scaleY:1.138}}]},1).to({state:[{t:this.instance,p:{rotation:-15.6,x:411,y:248.8,regY:15,regX:16.4,scaleX:1.107,scaleY:1.107}}]},2).to({state:[{t:this.instance,p:{rotation:-12.1,x:406.3,y:295.7,regY:15,regX:16.5,scaleX:1.084,scaleY:1.084}}]},1).to({state:[{t:this.instance,p:{rotation:-2.9,x:353.8,y:311,regY:15,regX:16.3,scaleX:0.944,scaleY:0.944}}]},1).to({state:[{t:this.instance,p:{rotation:-1.1,x:295.8,y:295.7,regY:14.9,regX:16.2,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:276.7,y:273.8,regY:14.8,regX:16.2,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:269.7,y:258.4,regY:14.8,regX:16.2,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:269.7,y:254.9,regY:14.8,regX:16.2,scaleX:0.905,scaleY:0.905}}]},2).wait(1));

	// Hand - R
	this.instance_4 = new lib.HandR("single",2);
	this.instance_4.setTransform(109.1,282.3,0.905,0.905,30,0,0,23.1,27.6);

	this.instance_5 = new lib.HandRcopy("synched",2);
	this.instance_5.setTransform(178.2,251.4,1.008,1.008,13.3,0,0,23.1,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A62E52").ss(7,1,1).p("AqZmzQgsC+AUDJQAiFJD7BjQD7BjDuhcQDvhbCch2QCdh2A7gZ");
	this.shape_1.setTransform(139.9,245.6);

	this.instance_6 = new lib.handL("single",0);
	this.instance_6.setTransform(363.3,184.1,1.01,1.01,-22.7,0,0,16.4,14.8);

	this.instance_7 = new lib.GUITAR("synched",0);
	this.instance_7.setTransform(307.3,251.6,1.01,1.01,-22.7,0,0,179.2,92.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{rotation:30,x:109.1,y:282.3,regY:27.6,scaleX:0.905,scaleY:0.905,regX:23.1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_4,p:{rotation:28,x:107.5,y:285.1,regY:27.6,scaleX:0.905,scaleY:0.905,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:27.3,x:113.6,y:302.8,regY:27.7,scaleX:0.905,scaleY:0.905,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:24.3,x:112.3,y:306.6,regY:27.6,scaleX:0.904,scaleY:0.904,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:26,x:114.7,y:305,regY:27.6,scaleX:0.904,scaleY:0.904,regX:23,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:29.5,x:117.4,y:293.1,regY:27.8,scaleX:0.994,scaleY:0.994,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:178.2,y:251.4,scaleX:1.008,scaleY:1.008,rotation:13.3,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_1},{t:this.instance_5,p:{x:206.7,y:250.7,scaleX:1.008,scaleY:1.008,rotation:13.3,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[]},2).to({state:[{t:this.instance_7},{t:this.instance_6}]},36).to({state:[{t:this.instance_4,p:{rotation:12.4,x:204,y:302.2,regY:27.6,scaleX:1.008,scaleY:1.008,regX:23,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:203.8,y:304.3,scaleX:1.008,scaleY:1.008,rotation:13.3,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_5,p:{x:201.5,y:302.9,scaleX:1.007,scaleY:1.007,rotation:12.5,startPosition:3,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:199.5,y:301.5,scaleX:1.007,scaleY:1.007,rotation:11.8,startPosition:4,regX:23.2,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:197.4,y:300.3,scaleX:1.007,scaleY:1.007,rotation:11,startPosition:0,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:195.3,y:299.2,scaleX:1.007,scaleY:1.007,rotation:10.3,startPosition:1,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:193.3,y:297.9,scaleX:1.007,scaleY:1.007,rotation:9.8,startPosition:2,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:191.3,y:296.7,scaleX:1.007,scaleY:1.007,rotation:9,startPosition:3,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:189.4,y:295.7,scaleX:1.008,scaleY:1.008,rotation:8.3,startPosition:4,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:187.6,y:294.5,scaleX:1.008,scaleY:1.008,rotation:7.8,startPosition:0,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:185.7,y:293.3,scaleX:1.008,scaleY:1.008,rotation:7.1,startPosition:1,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:183.9,y:292.2,scaleX:1.008,scaleY:1.008,rotation:6.5,startPosition:2,regX:23.2,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:182.1,y:291.1,scaleX:1.008,scaleY:1.008,rotation:6,startPosition:3,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:180.4,y:290,scaleX:1.008,scaleY:1.008,rotation:5.3,startPosition:4,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:178.6,y:289.1,scaleX:1.008,scaleY:1.008,rotation:4.8,startPosition:0,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:177,y:288.1,scaleX:1.008,scaleY:1.008,rotation:4.3,startPosition:1,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:175.4,y:287,scaleX:1.008,scaleY:1.008,rotation:3.8,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:173.9,y:286.1,scaleX:1.008,scaleY:1.008,rotation:3.3,startPosition:3,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:172.4,y:285.2,scaleX:1.008,scaleY:1.008,rotation:2.6,startPosition:4,regX:23.2,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:170.9,y:284.3,scaleX:1.008,scaleY:1.008,rotation:2.1,startPosition:0,regX:23.2,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:169.5,y:283.5,scaleX:1.008,scaleY:1.008,rotation:1.8,startPosition:1,regX:23.2,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:168.1,y:282.6,scaleX:1.008,scaleY:1.008,rotation:1.3,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:166.7,y:281.7,scaleX:1.008,scaleY:1.008,rotation:0.8,startPosition:3,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:165.3,y:280.9,scaleX:1.008,scaleY:1.008,rotation:0.3,startPosition:4,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:164.1,y:280.2,scaleX:1.008,scaleY:1.008,rotation:0,startPosition:0,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:162.9,y:279.5,scaleX:1.008,scaleY:1.008,rotation:-0.2,startPosition:1,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:161.7,y:278.7,scaleX:1.008,scaleY:1.008,rotation:-0.7,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:160.5,y:278,scaleX:1.008,scaleY:1.008,rotation:-1,startPosition:3,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:159.4,y:277.3,scaleX:1.008,scaleY:1.008,rotation:-1.4,startPosition:4,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:158.3,y:276.7,scaleX:1.008,scaleY:1.008,rotation:-1.7,startPosition:0,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:157.4,y:276.1,scaleX:1.008,scaleY:1.008,rotation:-2.2,startPosition:1,regX:23,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:155.4,y:281.5,scaleX:1.008,scaleY:1.008,rotation:-0.6,startPosition:3,regX:23,regY:27.6,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_5,p:{x:156.3,y:285.8,scaleX:1.008,scaleY:1.008,rotation:0.3,startPosition:4,regX:23,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:157.7,y:277,scaleX:1.008,scaleY:1.008,rotation:1,startPosition:1,regX:23,regY:27.6,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:2.1,x:171.3,y:267.5,regY:27.6,scaleX:1.027,scaleY:1.027,regX:23.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:-17.5,x:218,y:208.6,regY:27.6,scaleX:1.145,scaleY:1.145,regX:23.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:-25.3,x:223.4,y:205.2,regY:27.7,scaleX:1.162,scaleY:1.162,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:11.7,x:269.6,y:264.7,regY:27.7,scaleX:1.138,scaleY:1.138,regX:23.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:47.8,x:296.7,y:299.7,regY:27.7,scaleX:1.137,scaleY:1.137,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:266.1,y:284.7,regY:27.6,scaleX:2.374,scaleY:1.139,regX:23.2,skewX:7,skewY:22.2}}]},1).to({state:[{t:this.instance_5,p:{x:245.4,y:253.6,scaleX:1.008,scaleY:1.008,rotation:-1.6,startPosition:0,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:237.9,y:242.4,scaleX:1.008,scaleY:1.008,rotation:-16.6,startPosition:1,regX:23.1,regY:27.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:264.3,y:271.6,scaleX:1.338,scaleY:1.908,rotation:-16.6,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:272,y:294.3,scaleX:1.338,scaleY:1.418,rotation:0,startPosition:3,regX:23.2,regY:27.7,skewX:6,skewY:-1.6}}]},1).to({state:[{t:this.instance_5,p:{x:272.7,y:301.8,scaleX:1.338,scaleY:1.418,rotation:0,startPosition:3,regX:23.2,regY:27.7,skewX:21,skewY:13.3}}]},1).to({state:[{t:this.instance_5,p:{x:257,y:286.9,scaleX:1.338,scaleY:2.177,rotation:0,startPosition:4,regX:23.2,regY:27.7,skewX:6,skewY:13.8}}]},1).to({state:[{t:this.instance_4,p:{rotation:-11.2,x:243.1,y:254.9,regY:27.7,scaleX:1.138,scaleY:1.138,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:264.3,y:271.6,scaleX:1.338,scaleY:1.908,rotation:-16.6,startPosition:2,regX:23.1,regY:27.6,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_5,p:{x:272,y:294.3,scaleX:1.338,scaleY:1.418,rotation:0,startPosition:3,regX:23.2,regY:27.7,skewX:6,skewY:-1.6}}]},1).to({state:[{t:this.instance_5,p:{x:272.7,y:301.8,scaleX:1.338,scaleY:1.418,rotation:0,startPosition:3,regX:23.2,regY:27.7,skewX:21,skewY:13.3}}]},1).to({state:[{t:this.instance_5,p:{x:257,y:286.9,scaleX:1.338,scaleY:2.177,rotation:0,startPosition:4,regX:23.2,regY:27.7,skewX:6,skewY:13.8}}]},1).to({state:[{t:this.instance_4,p:{rotation:-11.2,x:243.1,y:254.9,regY:27.7,scaleX:1.138,scaleY:1.138,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:-20,x:236.3,y:245.9,regY:27.7,scaleX:1.138,scaleY:1.138,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:4.2,x:242.5,y:289.2,regY:27.7,scaleX:1.139,scaleY:1.139,regX:23.1,skewX:0,skewY:0}}]},20).to({state:[{t:this.instance_4,p:{rotation:3.7,x:243,y:314.9,regY:27.7,scaleX:1.138,scaleY:1.138,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:14.3,x:230.6,y:334.2,regY:27.6,scaleX:1.107,scaleY:1.107,regX:23.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:17.8,x:224.8,y:368.2,regY:27.6,scaleX:1.084,scaleY:1.084,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:27,x:187.9,y:348.1,regY:27.6,scaleX:0.944,scaleY:0.944,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:28.8,x:135.8,y:326.3,regY:27.5,scaleX:0.905,scaleY:0.905,regX:23,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:30,x:116.1,y:301.2,regY:27.6,scaleX:0.905,scaleY:0.905,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:30,x:109.1,y:285.8,regY:27.6,scaleX:0.905,scaleY:0.905,regX:23.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:30,x:109.1,y:282.3,regY:27.6,scaleX:0.905,scaleY:0.905,regX:23.1,skewX:0,skewY:0}}]},2).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A62E52").ss(7,1,1).p("AGbCUQjBDCiqBJQipBIiIg6QiIg6gOizQgPizBQiyQA/iOBPhgQAVgaAWgWQACgCABgB");
	this.shape_2.setTransform(65.9,268.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCNQjHC7isBDQirBDiGg+QiGg+gJizQgIifBDidQAJgTAJgUQADgFACgGQBCiEBNha");
	this.shape_3.setTransform(64.9,273.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAlQjNC1iuA+QisA9iFhCQiEhCgDi0QgDiqBTin");
	this.shape_4.setTransform(64.5,297.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A62E52").ss(7,1,1).p("AGaDBQjSCwiwA5QiuA4iChFQiDhGACi0QACixBfisQBeipBvhf");
	this.shape_5.setTransform(63.6,292.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A62E52").ss(7,1,1).p("AGaDQQjOC1iuA9QitA8iEhCQiEhDgCi0QgCi0BbisQBciuBwhjQAdgaAcgX");
	this.shape_6.setTransform(65.7,286.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A62E52").ss(7,1,1).p("AAQpOQhmBphgBuQhiBvhHCAQhAB1gYCCQgaCRAlCNQAVBOA+AzQA3AtBFAMQCQAcCEg+QCDg8BwhdQBQhEBJhM");
	this.shape_7.setTransform(70,269);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A62E52").ss(7,1,1).p("AJkBEQocFvkNARQkPAShgjAQhfjBBfkCQA6icBGh8");
	this.shape_8.setTransform(116.9,244.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A62E52").ss(7,1,1).p("Aqll7QghC0AqC4QBGE2DuA6QDtA5C8g/QC+g/CLhYQCLhZCfh8");
	this.shape_9.setTransform(141.4,240.9);

	this.instance_8 = new lib.GUITAR("synched",0);
	this.instance_8.setTransform(308,207.1,1.011,1.011,-23.7,0,0,179.3,92.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A62E52").ss(7,1,1).p("AqhmOQgnC8AsDEQBGE4DuBBQDtBCC8g4QC+g4CLhUQCLhUCfh5");
	this.shape_10.setTransform(141.4,246.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A62E52").ss(7,1,1).p("AqvknQgHBiARBlQAzEoDrA/QDrA+DBg1QDDg1CRhOQCRhQCohw");
	this.shape_11.setTransform(140.1,265.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A62E52").ss(7,1,1).p("AqCmSQhHDJAkDSQAzEqDrA/QDrA+DBg1QDDg1CRhOQCRhQCohy");
	this.shape_12.setTransform(140.1,257.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A62E52").ss(7,1,1).p("AqCmSQhHDJAkDSQAzEqDrA/QDrA+DBg1QDDg1CRhOQCRhQCohy");
	this.shape_13.setTransform(140.1,257.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A62E52").ss(7,1,1).p("Aqsk4QgNBzAUB2QAzEoDrA/QDrA+DBg1QDDg1CRhOQCRhQCohw");
	this.shape_14.setTransform(140.1,264);

	this.instance_9 = new lib.HandR("single",2);
	this.instance_9.setTransform(209.7,271.3,1.011,1.011,7,0,0,23.1,27.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A62E52").ss(7,1,1).p("AqgmCQgkCYAMClQAdF8FjA+QDhAnDdhFQE1hiDWj1QAWgXAVgb");
	this.shape_15.setTransform(139.6,276.3);

	this.instance_10 = new lib.handL("single",0);
	this.instance_10.setTransform(362.9,172.8,1.01,1.01,-22.9,0,0,16.4,14.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A62E52").ss(7,1,1).p("ALTDQQkFC0k7BKQk6BKk7iWQk7iWBilcQA8jVCQig");
	this.shape_16.setTransform(131.6,281.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A62E52").ss(7,1,1).p("ALTDJQkFC0k7BKQk6BKk7iWQk7iWBilcQA2jACEin");
	this.shape_17.setTransform(131.6,283.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A62E52").ss(7,1,1).p("An3nmQiRCvg3DNQhdFWE2CWQE2CWFBhJQFEhIEAi8");
	this.shape_18.setTransform(129.2,281.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A62E52").ss(7,1,1).p("AoFnfQiLCqgzDJQhYFRExCWQEwCVFKhGQFMhHD7jE");
	this.shape_19.setTransform(126.8,281.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A62E52").ss(7,1,1).p("AnznsQifC2g1DcQhSFMErCVQErCWFShGQFUhFD2jL");
	this.shape_20.setTransform(124.5,279.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A62E52").ss(7,1,1).p("AoRncQiLCrguDLQhOFHEmCVQEmCVFahDQFchEDxjT");
	this.shape_21.setTransform(122.2,280.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A62E52").ss(7,1,1).p("AoqnOQh7CggpC/QhJFCEhCVQEhCVFihCQFjhCDtjb");
	this.shape_22.setTransform(120,281.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A62E52").ss(7,1,1).p("AoenXQiKCogpDOQhEE9EcCVQEbCVFqhBQFrhBDojh");
	this.shape_23.setTransform(117.8,279.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A62E52").ss(7,1,1).p("ApsmjQhNB/gbCTQhAE4EXCVQEXCVFxhAQFyg/Dkjp");
	this.shape_24.setTransform(115.7,284.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A62E52").ss(7,1,1).p("Aq2laQgWBAgMBDQg6E0ESCVQESCUF4g+QF6g+Dfjv");
	this.shape_25.setTransform(113.6,291);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A62E52").ss(7,1,1).p("ArKk/QgKAogHApQg2EwEOCUQENCUF/g8QGBg9Dbj0");
	this.shape_26.setTransform(111.5,293.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A62E52").ss(7,1,1).p("ArFlNQgRA3gIA6QgyEsEJCUQEJCUGFg7QGIg7DYj9");
	this.shape_27.setTransform(109.6,291);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A62E52").ss(7,1,1).p("ArKlJQgPA1gIA4QgtEnEECUQEECUGNg6QGPg6DTkB");
	this.shape_28.setTransform(107.6,290.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A62E52").ss(7,1,1).p("ArRlBQgNAvgGAyQgpEjEACUQEACUGUg5QGVg5DPkH");
	this.shape_29.setTransform(105.6,291.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A62E52").ss(7,1,1).p("ArhkjQgEAUgCAVQglEfD8CUQD8CUGag4QGbg3DMkO");
	this.shape_30.setTransform(103.8,293.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A62E52").ss(7,1,1).p("ArlkfQgDASgCATQghEbD4CUQD4CTGgg2QGig2DHkU");
	this.shape_31.setTransform(102,293.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A62E52").ss(7,1,1).p("ArtkFQgXEODvCQQDzCTGmg1QGog1DEka");
	this.shape_32.setTransform(100.2,295.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A62E52").ss(7,1,1).p("ArokmQgEAcgCAdQgaETDwCUQDvCTGtg0QGug0DAkf");
	this.shape_33.setTransform(98.4,291.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A62E52").ss(7,1,1).p("ArrkjQgEAbgCAcQgWEQDsCTQDsCTGygzQG0gzC9kl");
	this.shape_34.setTransform(96.7,291.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A62E52").ss(7,1,1).p("ArwkbQgCAVgBAVQgSEMDoCUQDoCSG3gxQG6gyC5kq");
	this.shape_35.setTransform(95.1,291.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A62E52").ss(7,1,1).p("Ar0kSQgBANAAAOQgPEJDlCTQDkCTG9gxQG/gxC2kv");
	this.shape_36.setTransform(93.4,292.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A62E52").ss(7,1,1).p("Ar2kQQgBANAAANQgMEFDiCTQDgCSHDgvQHEgwCzk0");
	this.shape_37.setTransform(91.9,292);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A62E52").ss(7,1,1).p("ArykvQgHAsAAAuQgIECDeCTQDdCSHIguQHJgvCwk5");
	this.shape_38.setTransform(90.3,288.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A62E52").ss(7,1,1).p("ArzkxQgIAvAAAzQgFD/DaCTQDaCSHNgtQHPguCsk/");
	this.shape_39.setTransform(88.9,287.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A62E52").ss(7,1,1).p("Ar6kgQgDAhAAAiQgCD8DYCSQDXCSHRgsQHTgtCqlD");
	this.shape_40.setTransform(87.4,289);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A62E52").ss(7,1,1).p("Ar5ksQgGAtAAAxQACD5DUCSQDUCSHWgrQHYgsCnlI");
	this.shape_41.setTransform(86,287.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A62E52").ss(7,1,1).p("Ar9klQgEAoABApQAED2DRCTQDRCSHbgrQHcgrCklM");
	this.shape_42.setTransform(84.7,287.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A62E52").ss(7,1,1).p("Ar+krQgFAuABAyQAHDzDPCTQDNCRHfgpQHhgrCilQ");
	this.shape_43.setTransform(83.4,286.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A62E52").ss(7,1,1).p("Ar2lHQgRBJAEBRQAJDwDMCTQDLCRHjgpQHlgpCglU");
	this.shape_44.setTransform(82.1,283.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A62E52").ss(7,1,1).p("AqdmmQhyCPALDLQAMDuDJCSQDICSHngoQHqgpCcla");
	this.shape_45.setTransform(80.9,273.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A62E52").ss(7,1,1).p("AMIgMQibFbntAoQnrAojGiSQjGiSgPjrQgJiZA9h1");
	this.shape_46.setTransform(79.7,277.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A62E52").ss(7,1,1).p("AMIgcQibFdntAsQnrAtjGiQQjGiQgPjrQgJiTA4hz");
	this.shape_47.setTransform(79.5,276.7,1,1,0,0,0,0,-6.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A62E52").ss(7,1,1).p("AMIgdQibFdntAsQnrAtjGiQQjGiQgPjrQgIiRA3hz");
	this.shape_48.setTransform(81.4,287.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A62E52").ss(7,1,1).p("ALxgaQiWFdneAsQndAsjAiPQjBiRgOjrQgJiUA4h0");
	this.shape_49.setTransform(82.6,282.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A62E52").ss(7,1,1).p("AMAiFQjEEMk7B1QkwBvkzhJQlThRhBlXQgSheARha");
	this.shape_50.setTransform(97.8,281.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#A62E52").ss(7,1,1).p("Ar3nyQhMD5BIEsQBIEtEcBoQEcBoEXiRQEZiSCjjtQCijsAliE");
	this.shape_51.setTransform(138,242.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A62E52").ss(7,1,1).p("AtCnrQg4D7BtEpQBrErE9BiQE7BiEciWQEfiYCWjwQCWjvAZiE");
	this.shape_52.setTransform(145.9,236.2,1,1,0,0,0,3.3,-0.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#A62E52").ss(7,1,1).p("AwJpgQhPEEBTFXQBSFTE2CjQE1CjFmhKQFnhKEaiiQEaiiB3ix");
	this.shape_53.setTransform(162.3,263.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#A62E52").ss(7,1,1).p("AyhnLQgRDKAxCxQBZE+E6B6QEuB1EvgUQEsgUErg3QErg3G1iE");
	this.shape_54.setTransform(171,286.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#A62E52").ss(7,1,1).p("AwjniQgdDjA3DHQBZFCE7CGQEtCAE+hEQFXhEEIiRQEHiSDSi1");
	this.shape_55.setTransform(158.9,292.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#A62E52").ss(7,1,1).p("APEk1QjbF+nCDjQnADilkiNQlCh/hkl/QgGgZgFgaQgEgRgEgTQgUhxALhx");
	this.shape_56.setTransform(148.9,284.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A62E52").ss(7,1,1).p("AOemAQjZHJm0DjQmyDilOiNQlNiNhUnIQgVhxALhx");
	this.shape_57.setTransform(145.2,280.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#A62E52").ss(7,1,1).p("AQhhpQkjEKnVC0QnTC0lchuQldhthjk/QhklBALhy");
	this.shape_58.setTransform(158.5,282.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#A62E52").ss(7,1,1).p("ARHBsQjfB9oLCVQoICVlvh5Qlvh4hjk/QhklBALhx");
	this.shape_59.setTransform(162.3,283.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#A62E52").ss(7,1,1).p("ARGBuQAuBQqRCrQqQCsluh5Qlvh4hkk/QhklBAMhx");
	this.shape_60.setTransform(162.4,283.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#A62E52").ss(7,1,1).p("ARDh7QAQC9pvDxQpuDwl9iAQl+iAhkk/QhjlBALhx");
	this.shape_61.setTransform(161.9,283.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A62E52").ss(7,1,1).p("AO3kVQiaE3mUD9QmTD9l3h6Ql4h5hjk/QhklBALhy");
	this.shape_62.setTransform(147.9,282.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#A62E52").ss(7,1,1).p("AOVlvQh+GRmDD9QmED9lyh6Ql1h5hjk/QhklBALhy");
	this.shape_63.setTransform(144.5,282.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#A62E52").ss(7,1,1).p("AuxnZQgUDOAyC5QBZFFE7CRQEtCKEshSQEuhSDKiOQDKiOCcje");
	this.shape_64.setTransform(147.1,305.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#A62E52").ss(7,1,1).p("AuunGQgKCzAsCiQBZFFE7CRQEtCKE8g5QE4g2EFiqQCXhiBsiO");
	this.shape_65.setTransform(149.2,319.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#A62E52").ss(7,1,1).p("AOfB/QjHC2j7BeQj3BekEAXQkJAUj1hdQj7hfhYkBQhNjhAwjuQAQhOAVhM");
	this.shape_66.setTransform(142.4,319.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#A62E52").ss(7,1,1).p("AN1DcQjoDqlCBkQlBBilJhVQlShXh+kBQh/j/AhkcQATipAnh5");
	this.shape_67.setTransform(138.6,343.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#A62E52").ss(7,1,1).p("AoyopQhgDegRDzQgYFgE/CuQEdCcFBg1QDxgqDTh3");
	this.shape_68.setTransform(123.3,307.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#A62E52").ss(7,1,1).p("AHDGiIAPgBQkqDIlGiLQlHiKAVlgQARkdCejs");
	this.shape_69.setTransform(91.8,287.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#A62E52").ss(7,1,1).p("AgnowQhOBAg2BUQg4BVgyBYQgwBUgkBaQgmBbgPBkQgOBkAXBmQAYBnBZA7QA8AoBGAQQBkAYBlgNQBogRBcg2QBVgxBGhJQAPgPAPgQ");
	this.shape_70.setTransform(78.1,265.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#A62E52").ss(7,1,1).p("AGnDJQjHDLivBMQiuBLiMg8QiMg8gPi8QgPi7BTi7QBSi8BshvQAygzAvgs");
	this.shape_71.setTransform(67.2,263.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#A62E52").ss(7,1,1).p("AGbCUQjBDCiqBJQipBIiIg6QiIg6gOizQgPizBQiyQBQi0BphqQACgCABgB");
	this.shape_72.setTransform(65.9,268.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.instance_8,p:{rotation:-23.7,y:207.1,x:308,regY:92.2,scaleX:1.011,scaleY:1.011}},{t:this.shape_9}]},2).to({state:[{t:this.instance_8,p:{rotation:-21.4,y:221.1,x:308,regY:92.2,scaleX:1.011,scaleY:1.011}},{t:this.shape_10}]},2).to({state:[{t:this.instance_8,p:{rotation:-18.9,y:235,x:307.3,regY:92.2,scaleX:1.011,scaleY:1.011}},{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.instance_8,p:{rotation:-18.9,y:237.1,x:307.3,regY:92.2,scaleX:1.011,scaleY:1.011}},{t:this.shape_12}]},1).to({state:[{t:this.instance_8,p:{rotation:-18.9,y:235,x:307.3,regY:92.2,scaleX:1.011,scaleY:1.011}},{t:this.shape_14}]},2).to({state:[{t:this.instance_8,p:{rotation:-22.9,y:240.5,x:307.3,regY:92.1,scaleX:1.01,scaleY:1.01}},{t:this.instance_10},{t:this.shape_15},{t:this.instance_9}]},29).to({state:[]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},2).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},2).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},2).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},20).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},2).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},2).wait(1));

	// GUITAR
	this.instance_11 = new lib.GUITAR("synched",0);
	this.instance_11.setTransform(200.5,291.3,0.905,0.905,0,0,0,179.5,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:179.6,rotation:-1.8,x:199.2,y:291},0).wait(1).to({regY:92,rotation:-2.5,x:205.4,y:307.3},0).wait(1).to({regX:179.5,regY:92.1,scaleX:0.9,scaleY:0.9,rotation:-5.5,x:204.1,y:306.4},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-3.8,x:206.6,y:307.5},0).wait(1).to({regY:92,scaleX:0.99,scaleY:0.99,rotation:-0.3,x:217.9,y:301.9},0).wait(1).to({regX:179.4,regY:92.2,scaleX:1.01,scaleY:1.01,rotation:-13.3,x:279.7,y:237.3},0).wait(1).to({rotation:-21.6,x:308,y:221.1},0).to({_off:true},2).wait(37).to({regX:179.2,scaleX:1.01,scaleY:1.01,rotation:-17.4,x:303.9,y:280.9,_off:false},0).wait(2).to({regX:179.3,regY:92.3,rotation:-16.5,x:304,y:284.7},0).wait(1).to({regY:92.2,scaleX:1.01,scaleY:1.01,rotation:-17.1,x:301.4,y:282.1},0).wait(1).to({regY:92.3,rotation:-17.9,x:298.8,y:279.7},0).wait(1).to({regY:92.2,rotation:-18.6,x:296.3,y:277.2},0).wait(1).to({regY:92.3,rotation:-19.3,x:293.9,y:274.8},0).wait(1).to({rotation:-19.9,x:291.5,y:272.4},0).wait(1).to({regY:92.2,rotation:-20.6,x:289.1,y:270},0).wait(1).to({regY:92.4,rotation:-21.3,x:286.8,y:268},0).wait(1).to({regY:92.3,rotation:-21.9,x:284.5,y:265.6},0).wait(1).to({regY:92.2,rotation:-22.6,x:282.3,y:263.4},0).wait(1).to({regY:92.3,rotation:-23.1,x:280.2,y:261.4},0).wait(1).to({rotation:-23.6,x:278.1,y:259.3},0).wait(1).to({regY:92.2,rotation:-24.3,x:276,y:257.1},0).wait(1).to({rotation:-24.9,x:274,y:255.2},0).wait(1).to({regY:92.3,rotation:-25.4,x:272.1,y:253.4},0).wait(1).to({rotation:-25.9,x:270.2,y:251.5},0).wait(1).to({regY:92.2,rotation:-26.4,x:268.3,y:249.6},0).wait(1).to({regY:92.3,scaleX:1.01,scaleY:1.01,rotation:-27.1,x:266.6,y:247.9},0).wait(1).to({regY:92.2,scaleX:1.01,scaleY:1.01,rotation:-27.4,x:264.7,y:246.1},0).wait(1).to({regX:179.2,regY:92.3,rotation:-27.9,x:263,y:244.5},0).wait(1).to({regX:179.3,scaleX:1.01,scaleY:1.01,rotation:-28.4,x:261.4,y:242.9},0).wait(1).to({regY:92.2,rotation:-28.9,x:259.8,y:241.2},0).wait(1).to({regY:92.4,rotation:-29.4,x:258.3,y:239.8},0).wait(1).to({regY:92.3,rotation:-29.8,x:256.8,y:238.2},0).wait(1).to({rotation:-30.1,x:255.3,y:236.8},0).wait(1).to({regY:92.2,rotation:-30.6,x:253.8,y:235.3},0).wait(1).to({regY:92.3,rotation:-30.9,x:252.5,y:234.1},0).wait(1).to({regY:92.2,rotation:-31.4,x:251.1,y:232.7},0).wait(1).to({regY:92.3,rotation:-31.6,x:249.9,y:231.6},0).wait(1).to({regY:92.2,scaleX:1.01,scaleY:1.01,rotation:-32.1,x:248.7,y:230.3},0).wait(2).to({rotation:-30.5,x:247.9,y:238.1},0).wait(1).to({regX:179.2,rotation:-29.5,x:249.5,y:244.1},0).wait(2).to({rotation:-28.8,x:251.5,y:236.6},0).wait(2).to({regX:179.4,regY:92.3,scaleX:1.03,scaleY:1.03,rotation:-27.7,x:267.5,y:228},0).wait(1).to({regX:179.3,scaleX:1.15,scaleY:1.15,rotation:-47.4,x:304.3,y:131},0).wait(1).to({scaleX:1.16,scaleY:1.16,rotation:-55.2,x:299.4,y:115.3},0).wait(2).to({regX:179.2,regY:92.2,scaleX:1.14,scaleY:1.14,rotation:-48.1,x:310.1,y:177.5},0).wait(1).to({regX:179.3,scaleX:1.14,scaleY:1.14,rotation:-27,x:351.1,y:231.8},0).wait(1).to({scaleX:1.14,scaleY:1.14,rotation:-22.8,x:350.5,y:250.2},0).wait(1).to({y:246.4},0).wait(1).to({y:243.4},0).wait(5).to({y:242.7},0).wait(26).to({regX:179.2,rotation:-25.6,x:350.8,y:258.5},0).wait(1).to({regY:92.4,scaleX:1.14,scaleY:1.14,rotation:-26.1,x:351,y:274.3},0).wait(2).to({regY:92.3,scaleX:1.11,scaleY:1.11,rotation:-15.5,x:341.1,y:314.7},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-12,x:333.9,y:355.9},0).wait(1).to({regX:179.6,regY:92.2,scaleX:0.94,scaleY:0.94,rotation:-2.8,x:283.7,y:352.5},0).wait(1).to({regX:179.5,scaleX:0.91,scaleY:0.91,rotation:-1,x:227.4,y:333.4},0).wait(1).to({rotation:0,x:207.5,y:310.2},0).wait(1).to({x:200.5,y:294.8},0).wait(2).to({y:291.3},0).wait(1));

	// Excercise
	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A62E52").ss(7,1,1).p("AJkBEQocFvkNARQkPAShgjAQhfjBBfkCQA6icBGh8");
	this.shape_73.setTransform(116.9,244.6);

	this.instance_12 = new lib.GUITAR("synched",0);
	this.instance_12.setTransform(308,207.1,1.011,1.011,-23.7,0,0,179.3,92.2);

	this.instance_13 = new lib.HandR("single",2);
	this.instance_13.setTransform(209.7,271.3,1.011,1.011,7,0,0,23.1,27.7);

	this.instance_14 = new lib.handL("single",0);
	this.instance_14.setTransform(362.9,172.8,1.01,1.01,-22.9,0,0,16.4,14.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#A62E52").ss(7,1,1).p("ALTDQQkFC0k7BKQk6BKk7iWQk7iWBilcQA8jVCQig");
	this.shape_74.setTransform(131.6,281.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_73}]},7).to({state:[]},1).to({state:[{t:this.instance_12,p:{rotation:-23.7,y:207.1,x:308,regY:92.2,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_12,p:{rotation:-21.4,y:221.1,x:308,regY:92.2,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_12,p:{rotation:-18.9,y:235,x:307.3,regY:92.2,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_12,p:{rotation:-18.9,y:237.1,x:307.3,regY:92.2,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_12,p:{rotation:-18.9,y:235,x:307.3,regY:92.2,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_12,p:{rotation:-22.9,y:240.5,x:307.3,regY:92.1,scaleX:1.01,scaleY:1.01}},{t:this.instance_14},{t:this.instance_13}]},29).to({state:[]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},2).wait(86));

	// Excercise
	this.instance_15 = new lib.Excerciseface("synched",47);
	this.instance_15.setTransform(177.3,196.2,0.649,0.649,9.4,0,0,-71.9,-84.7);

	this.instance_16 = new lib.PosicleBody();
	this.instance_16.setTransform(122.8,-6.9,1.01,1.01,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16},{t:this.instance_15,p:{x:177.3,y:196.2,startPosition:47,regY:-84.7,scaleX:0.649,scaleY:0.649,rotation:9.4,regX:-71.9}}]},47).to({state:[{t:this.instance_15,p:{x:176.9,y:194.2,startPosition:49,regY:-84.7,scaleX:0.649,scaleY:0.649,rotation:9.4,regX:-71.9}}]},2).to({state:[{t:this.instance_15,p:{x:173.4,y:194.8,startPosition:50,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:9.6,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:170,y:195.3,startPosition:51,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:10,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:166.5,y:195.9,startPosition:52,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:10.3,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:163.3,y:196.4,startPosition:53,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:10.5,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:160,y:196.9,startPosition:54,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:10.8,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:156.9,y:197.5,startPosition:55,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:11.1,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:153.8,y:198,startPosition:56,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:11.3,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:150.7,y:198.4,startPosition:57,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:11.8,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:147.7,y:198.9,startPosition:58,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:12,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:144.9,y:199.3,startPosition:59,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:12.3,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:142.1,y:199.8,startPosition:60,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:12.5,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:139.4,y:200.3,startPosition:61,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:12.8,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:136.6,y:200.6,startPosition:62,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:13,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:134,y:201.1,startPosition:63,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:13.3,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:131.5,y:201.6,startPosition:64,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:13.5,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:128.9,y:202,startPosition:65,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:13.8,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:126.5,y:202.4,startPosition:66,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:13.8,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:124.2,y:202.7,startPosition:67,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:14.1,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:121.9,y:203,startPosition:68,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:14.3,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:119.7,y:203.5,startPosition:69,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:14.5,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:117.5,y:203.8,startPosition:70,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:14.8,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:115.4,y:204.2,startPosition:71,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:15,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:113.4,y:204.4,startPosition:72,regY:-84.6,scaleX:0.648,scaleY:0.648,rotation:15.1,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:111.4,y:204.8,startPosition:73,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:15.3,regX:-72}}]},1).to({state:[{t:this.instance_15,p:{x:109.6,y:205.1,startPosition:74,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:15.5,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:107.8,y:205.4,startPosition:75,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:15.6,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:106,y:205.7,startPosition:76,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:15.8,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:104.3,y:205.9,startPosition:77,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:16,regX:-71.9}}]},1).to({state:[{t:this.instance_15,p:{x:102.7,y:206.2,startPosition:78,regY:-84.7,scaleX:0.648,scaleY:0.648,rotation:16.2,regX:-71.9}}]},1).to({state:[]},2).wait(55));

	// Excercise
	this.instance_17 = new lib.Excerciseface("synched",0);
	this.instance_17.setTransform(141.5,168.9,0.581,0.581,0,0,0,-71.9,-84.8);

	this.instance_18 = new lib.PosicleBody();
	this.instance_18.setTransform(63.8,-2.5,0.905,0.905);

	this.instance_19 = new lib.Tween9("synched",0);
	this.instance_19.setTransform(168.6,202.2);

	this.instance_20 = new lib.Tween10("synched",0);
	this.instance_20.setTransform(94.9,211.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{rotation:0,x:63.8,y:-2.5,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:0,x:141.5,y:168.9,startPosition:0,regX:-71.9,scaleX:0.581,scaleY:0.581}}]}).to({state:[{t:this.instance_18,p:{rotation:1.8,x:71.7,y:0,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.7,rotation:1.8,x:144.1,y:173.8,startPosition:1,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},1).to({state:[{t:this.instance_18,p:{rotation:3.6,x:80.3,y:12.6,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.7,rotation:3.6,x:147.2,y:188.6,startPosition:2,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},1).to({state:[{t:this.instance_18,p:{rotation:5.1,x:87,y:22.7,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:5.1,x:149.2,y:200.3,startPosition:3,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},1).to({state:[{t:this.instance_18,p:{rotation:3.8,x:82.6,y:19.3,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:3.8,x:148.8,y:195.5,startPosition:5,regX:-72,scaleX:0.581,scaleY:0.581}}]},2).to({state:[{t:this.instance_18,p:{rotation:-0.4,x:65.2,y:-19.4,scaleX:0.994,scaleY:0.994}},{t:this.instance_17,p:{regY:-84.7,rotation:-0.4,x:152.1,y:168.2,startPosition:6,regX:-71.9,scaleX:0.638,scaleY:0.638}}]},1).to({state:[{t:this.instance_18,p:{rotation:-5.4,x:54.4,y:-46.9,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.7,rotation:-5.4,x:159.3,y:135.5,startPosition:7,regX:-71.9,scaleX:0.649,scaleY:0.649}}]},1).to({state:[{t:this.instance_18,p:{rotation:-6.7,x:47.8,y:-51.9,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.8,rotation:-6.7,x:156.7,y:128.1,startPosition:8,regX:-71.9,scaleX:0.649,scaleY:0.649}}]},1).to({state:[{t:this.instance_18,p:{rotation:-6.7,x:47.8,y:-53.9,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.8,rotation:-6.7,x:156.7,y:126.1,startPosition:10,regX:-71.9,scaleX:0.649,scaleY:0.649}}]},2).to({state:[{t:this.instance_18,p:{rotation:-5.4,x:54,y:-49,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.8,rotation:-5.4,x:158.8,y:133.4,startPosition:12,regX:-71.9,scaleX:0.649,scaleY:0.649}}]},2).to({state:[{t:this.instance_18,p:{rotation:-3.6,x:62.4,y:-30.9,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.9,rotation:-3.6,x:161.5,y:154.5,startPosition:13,regX:-72,scaleX:0.649,scaleY:0.649}}]},1).to({state:[{t:this.instance_18,p:{rotation:-3.6,x:62.4,y:-29,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.9,rotation:-3.6,x:161.5,y:156.5,startPosition:14,regX:-72,scaleX:0.649,scaleY:0.649}}]},1).to({state:[{t:this.instance_18,p:{rotation:-3.6,x:62.4,y:-32.9,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.9,rotation:-3.6,x:161.5,y:152.6,startPosition:16,regX:-72,scaleX:0.649,scaleY:0.649}}]},2).to({state:[{t:this.instance_18,p:{rotation:-1.6,x:72.3,y:-25.6,scaleX:1.011,scaleY:1.011}},{t:this.instance_17,p:{regY:-84.9,rotation:-1.6,x:164.7,y:163.2,startPosition:45,regX:-72,scaleX:0.649,scaleY:0.649}}]},29).to({state:[{t:this.instance_18,p:{rotation:7.8,x:115,y:-15.8,scaleX:1.01,scaleY:1.01}},{t:this.instance_17,p:{regY:-84.6,rotation:7.8,x:174.9,y:185.7,startPosition:46,regX:-71.9,scaleX:0.649,scaleY:0.649}}]},1).to({state:[{t:this.instance_18,p:{rotation:9.4,x:122.8,y:-6.9,scaleX:1.01,scaleY:1.01}},{t:this.instance_17,p:{regY:-84.7,rotation:9.4,x:177.3,y:196.2,startPosition:47,regX:-71.9,scaleX:0.649,scaleY:0.649}}]},1).to({state:[{t:this.instance_19,p:{x:168.6,y:202.2}}]},2).to({state:[{t:this.instance_19,p:{x:165.1,y:202.6}}]},1).to({state:[{t:this.instance_19,p:{x:161.7,y:203.1}}]},1).to({state:[{t:this.instance_19,p:{x:158.4,y:203.5}}]},1).to({state:[{t:this.instance_19,p:{x:155.1,y:204}}]},1).to({state:[{t:this.instance_19,p:{x:151.9,y:204.4}}]},1).to({state:[{t:this.instance_19,p:{x:148.7,y:204.8}}]},1).to({state:[{t:this.instance_19,p:{x:145.7,y:205.2}}]},1).to({state:[{t:this.instance_19,p:{x:142.7,y:205.6}}]},1).to({state:[{t:this.instance_19,p:{x:139.7,y:206}}]},1).to({state:[{t:this.instance_19,p:{x:136.9,y:206.4}}]},1).to({state:[{t:this.instance_19,p:{x:134.1,y:206.7}}]},1).to({state:[{t:this.instance_19,p:{x:131.3,y:207.1}}]},1).to({state:[{t:this.instance_19,p:{x:128.6,y:207.5}}]},1).to({state:[{t:this.instance_19,p:{x:126,y:207.8}}]},1).to({state:[{t:this.instance_19,p:{x:123.5,y:208.1}}]},1).to({state:[{t:this.instance_19,p:{x:121,y:208.5}}]},1).to({state:[{t:this.instance_19,p:{x:118.6,y:208.8}}]},1).to({state:[{t:this.instance_19,p:{x:116.3,y:209.1}}]},1).to({state:[{t:this.instance_19,p:{x:114,y:209.4}}]},1).to({state:[{t:this.instance_19,p:{x:111.8,y:209.7}}]},1).to({state:[{t:this.instance_19,p:{x:109.7,y:210}}]},1).to({state:[{t:this.instance_19,p:{x:107.6,y:210.3}}]},1).to({state:[{t:this.instance_19,p:{x:105.6,y:210.5}}]},1).to({state:[{t:this.instance_19,p:{x:103.6,y:210.8}}]},1).to({state:[{t:this.instance_19,p:{x:101.8,y:211}}]},1).to({state:[{t:this.instance_19,p:{x:99.9,y:211.3}}]},1).to({state:[{t:this.instance_19,p:{x:98.2,y:211.5}}]},1).to({state:[{t:this.instance_19,p:{x:96.5,y:211.7}}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_18,p:{rotation:13.4,x:63.8,y:4.9,scaleX:1.01,scaleY:1.01}},{t:this.instance_17,p:{regY:-84.6,rotation:18.2,x:103.9,y:211.3,startPosition:80,regX:-72,scaleX:0.648,scaleY:0.648}}]},2).to({state:[{t:this.instance_18,p:{rotation:14.5,x:70,y:10.3,scaleX:1.01,scaleY:1.01}},{t:this.instance_17,p:{regY:-84.7,rotation:18.8,x:106.1,y:217.3,startPosition:81,regX:-72.1,scaleX:0.648,scaleY:0.648}}]},1).to({state:[{t:this.instance_18,p:{rotation:13.4,x:67.6,y:6.1,scaleX:1.01,scaleY:1.01}},{t:this.instance_17,p:{regY:-84.6,rotation:17.9,x:107.6,y:212.4,startPosition:83,regX:-71.9,scaleX:0.648,scaleY:0.648}}]},2).to({state:[{t:this.instance_18,p:{rotation:5.4,x:43.4,y:-2.4,scaleX:1.029,scaleY:1.029}},{t:this.instance_17,p:{regY:-84.5,rotation:5.4,x:113.2,y:200.2,startPosition:85,regX:-71.9,scaleX:0.661,scaleY:0.661}}]},2).to({state:[{t:this.instance_18,p:{rotation:-2.1,x:41.5,y:-68.6,scaleX:1.148,scaleY:1.148}},{t:this.instance_17,p:{regY:-84.7,rotation:-2.1,x:148.6,y:144.9,startPosition:86,regX:-71.9,scaleX:0.737,scaleY:0.737}}]},1).to({state:[{t:this.instance_18,p:{rotation:-3.7,x:33,y:-80.9,scaleX:1.165,scaleY:1.165}},{t:this.instance_17,p:{regY:-84.6,rotation:-3.7,x:147.4,y:132.8,startPosition:87,regX:-71.9,scaleX:0.748,scaleY:0.748}}]},1).to({state:[{t:this.instance_18,p:{rotation:-4.1,x:30.1,y:-62.2,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.6,rotation:-4.1,x:143.9,y:146.5,startPosition:89,regX:-71.9,scaleX:0.733,scaleY:0.733}}]},2).to({state:[{t:this.instance_18,p:{rotation:-4.9,x:25.9,y:-46.9,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.6,rotation:-4.9,x:142.7,y:160.1,startPosition:90,regX:-71.8,scaleX:0.733,scaleY:0.733}}]},1).to({state:[{t:this.instance_18,p:{rotation:-4.9,x:25.9,y:-43.2,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.6,rotation:-4.9,x:142.7,y:163.9,startPosition:91,regX:-71.8,scaleX:0.733,scaleY:0.733}}]},1).to({state:[{t:this.instance_18,p:{rotation:-4.9,x:25.9,y:-46.9,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.6,rotation:-4.9,x:142.7,y:160.1,startPosition:92,regX:-71.8,scaleX:0.733,scaleY:0.733}}]},1).to({state:[{t:this.instance_18,p:{rotation:-4.9,x:25.9,y:-49.9,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.6,rotation:-4.9,x:142.7,y:157.1,startPosition:93,regX:-71.8,scaleX:0.733,scaleY:0.733}}]},1).to({state:[{t:this.instance_18,p:{rotation:-3.1,x:35.5,y:-37.7,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.7,rotation:-3.1,x:145.8,y:172.8,startPosition:124,regX:-71.8,scaleX:0.733,scaleY:0.733}}]},31).to({state:[{t:this.instance_18,p:{rotation:-0.1,x:52.3,y:-29.8,scaleX:1.142,scaleY:1.142}},{t:this.instance_17,p:{regY:-84.6,rotation:-0.1,x:151.2,y:186.3,startPosition:125,regX:-71.8,scaleX:0.733,scaleY:0.733}}]},1).to({state:[{t:this.instance_18,p:{rotation:2.3,x:64.6,y:-8.5,scaleX:1.11,scaleY:1.11}},{t:this.instance_17,p:{regY:-84.6,rotation:2.3,x:152.2,y:205.7,startPosition:127,regX:-71.8,scaleX:0.713,scaleY:0.713}}]},2).to({state:[{t:this.instance_18,p:{rotation:2.3,x:63.3,y:18.4,scaleX:1.087,scaleY:1.087}},{t:this.instance_17,p:{regY:-84.6,rotation:2.3,x:148.4,y:228.1,startPosition:128,regX:-71.8,scaleX:0.698,scaleY:0.698}}]},1).to({state:[{t:this.instance_18,p:{rotation:2,x:75,y:20,scaleX:0.945,scaleY:0.945}},{t:this.instance_17,p:{regY:-84.7,rotation:2,x:149.7,y:201.8,startPosition:129,regX:-71.9,scaleX:0.606,scaleY:0.606}}]},1).to({state:[{t:this.instance_18,p:{rotation:1.5,x:70.6,y:15,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:1.5,x:143.7,y:188.6,startPosition:130,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},1).to({state:[{t:this.instance_18,p:{rotation:0,x:63.8,y:2.3,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:0,x:141.5,y:173.8,startPosition:131,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},1).to({state:[{t:this.instance_18,p:{rotation:0,x:63.8,y:-6,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:0,x:141.5,y:165.4,startPosition:132,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},1).to({state:[{t:this.instance_18,p:{rotation:0,x:63.8,y:-2.5,scaleX:0.905,scaleY:0.905}},{t:this.instance_17,p:{regY:-84.8,rotation:0,x:141.5,y:168.9,startPosition:134,regX:-71.9,scaleX:0.581,scaleY:0.581}}]},2).wait(1));

	// Leg
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A62E52").s().p("Aj3AhQg8iTgriwQghiFAAgYQAAgTAKgPQALgOAOgCQAkgGAFBEQAMBIAQA1IArB6QAcBQALAxQAlCwBzCYQBzCbBmAAQBMAAAnigQANgxAHg8IAFgzQAAgagHhJIgQhbQAAgNAFgJQAJgRAWAAQAnAAAOByQAHA3gBA6QAAARgHAxQgJBKgRA+Qg2DChnAAQj/AAi6nRg");
	this.shape_75.setTransform(233.6,263);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A62E52").s().p("AkLAyQgviNgeitQgWiBACgZQABgTANgQQALgPAOgDQAlgKAABEQAFBHAMAzIAhB3QAWBNAHAxQAYCsBmCNQBnCPBmgKQBMgIA1ikQARgzALg9IAJg0QACgaAAhGQgJhZAAgEQABgMAGgKQAKgSAXgCQAngEAEBxQADA4gGA5QgBARgLAyQgQBLgWBAQhFDIhoALIgbACQjsAAiOmog");
	this.shape_76.setTransform(230.7,266,1,1,0,0,0,-1.6,-0.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#A62E52").s().p("AknBEQgtiJgaipQgTh/ADgZQADgTANgRQANgQAPgGQAogNgCBEQADBGAKAzIAfByQAVBKAFAxQASCqBpCBQBrCEBrgWQBSgQA+iqQAUg1APg+IAMg0QADgZABhIIgFhbQABgNAHgLQAMgSAYgFQAqgIAABwQABA4gIA5QgCARgOAzQgTBNgaBDQhSDQhvAWQgfAGgeAAQjlAAh/l/g");
	this.shape_77.setTransform(231.5,278.5,1,1,0,0,0,-2.3,-1.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A62E52").s().p("AkKBJQgziFghimQgZh9ACgZQABgSAMgSQAMgRAOgGQAlgOACBDQAGBFANAyIAkBwQAXBIAHAwQAbCnBrB8QBqB+BogZQBNgSAziqQAQg1AMg9IAIg1QACgYgDhHQgKhXABgDQABgNAFgLQAKgSAXgGQAogKAGBvQADA4gFA6QgBAPgKAzQgPBNgVBCQhEDQhpAZQgiAIghAAQjVAAiJltg");
	this.shape_78.setTransform(232.1,280.8,1,1,0,0,0,-1.1,-2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#A62E52").s().p("AkhA8QguiBgaigQgUh5ADgXQACgSANgPQANgQAPgEQAmgMgBBAQAEBCALAwQADAQAcBcQAVBHAGAtQASChBpB8QBoB/BsgSQBRgOA8ieQAUgyAOg7IALgwQADgZABhDIgGhWQACgMAGgKQAMgRAXgEQAqgHABBqQABA1gIA1QgCAQgNAxQgTBIgZA+QhPDChuASQgbAFgaAAQjoAAiBlxg");
	this.shape_79.setTransform(234.5,284,1,1,0,0,0,-2.2,-1.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#A62E52").ss(7,1,1).p("AHDD/QjSDWi6BSQi5BQiVg+QiXg+gRjFQgSjEBXjFQBWjGByh2QByh1BhhP");
	this.shape_80.setTransform(70,268.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A62E52").s().p("AkOAmQhCihgyjBQgmiRAAgbQAAgUAMgRQALgQAQgCQAngGAHBKQANBPASA6IAwCGQAgBXAMA2QArDBCACmQB/CpBwgBQBUgBApivQAOg3AHhCIAFg3QgBgdgIhQIgShkQAAgOAFgLQALgSAYAAQAqAAAQB8QAJA9gBBAQAAASgHA2QgKBSgSBEQg4DVhyABIgCAAQkXAAjQn7g");
	this.shape_81.setTransform(253.8,270.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#A62E52").ss(7,1,1).p("AphlTQBHDUCECxQCVDJDrBDQDpBCDGiKQDLiMgCjzQgBhmgxha");
	this.shape_82.setTransform(289,220.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#A62E52").ss(7,1,1).p("Aq3jvQBPDiCaC1QCYC2DoA1QDmA1DLh9QDNh8BSjdQBJjGgbjO");
	this.shape_83.setTransform(297.5,210.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#A62E52").ss(7,1,1).p("AquhQQBPDgCaC3QCYC2EBgCQD+gCCoiLQCoiLBTjJQBSjGgilO");
	this.shape_84.setTransform(296.6,195);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#A62E52").ss(7,1,1).p("AqyjQQBODgCXC8QCYC8DmAqQDlAqC5h1QC5h0BXjEQBWjBgCkq");
	this.shape_85.setTransform(297.1,207.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#A62E52").ss(7,1,1).p("AqYhRQBeDfC5CcQC3CcDvgPQDygFClizQChivAkjsQAViMADiP");
	this.shape_86.setTransform(300.2,227.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#A62E52").ss(7,1,1).p("AqahRQBODeCtCZQCtCZEMgIQD4gMCeioQCeioAsjAQAsjCgPiQ");
	this.shape_87.setTransform(300.4,227.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#A62E52").ss(7,1,1).p("AJmnYQAxDqhNDoQhMDijHCHQjGCHjpgTQjxgMjGiIQglgZgkgd");
	this.shape_88.setTransform(302,230.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#A62E52").ss(7,1,1).p("Ap3FMQAXAtB3AnQCEAsCfAAQDGAACuhXQCihQB0iMQBviJAtifQAsikgkiY");
	this.shape_89.setTransform(304.7,246);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#A62E52").ss(7,1,1).p("AKEmAQgdDtiiCvQiiCujZBeQjVBdjsgEQiNgKh/g/");
	this.shape_90.setTransform(305.2,261.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#A62E52").ss(7,1,1).p("ArZFcQGlBFGThsQGnhwCnmQQAihSAMhZ");
	this.shape_91.setTransform(296.6,260.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#A62E52").ss(7,1,1).p("ArLFdQGhBIGNhoQGghtClmJQAlhbgBhl");
	this.shape_92.setTransform(292.2,260.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#A62E52").ss(7,1,1).p("Aq/FeQGeBLGHhlQGahoCimEQAohkgNhx");
	this.shape_93.setTransform(288,260.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A62E52").ss(7,1,1).p("Aq0FeQGaBPGBhiQGUhlCel+QAshtgZh7");
	this.shape_94.setTransform(284.1,260.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#A62E52").ss(7,1,1).p("AqqFfQGWBSF8heQGOhiCbl4QAuh2gkiH");
	this.shape_95.setTransform(280.3,260.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A62E52").ss(7,1,1).p("AqhFgQGTBUF3hbQGIhdCYlzQAxh/gviR");
	this.shape_96.setTransform(276.6,260.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#A62E52").ss(7,1,1).p("AqYFgQGPBYFyhYQGChaCVluQA0iGg6id");
	this.shape_97.setTransform(273,260.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A62E52").ss(7,1,1).p("AqPFhQGLBaFthUQF8hXCTlpQA2iOhFin");
	this.shape_98.setTransform(269.5,260);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#A62E52").ss(7,1,1).p("AqGFhQGHBdFohRQF3hUCQljQA5iXhQix");
	this.shape_99.setTransform(266.1,260);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A62E52").ss(7,1,1).p("Ap+FhQGEBgFkhOQFwhRCOleQA8iehbi7");
	this.shape_100.setTransform(262.7,260);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#A62E52").ss(7,1,1).p("Ap2FiQGBBiFehLQFshOCKlZQA/imhkjF");
	this.shape_101.setTransform(259.5,259.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A62E52").ss(7,1,1).p("ApvFiQF+BlFahIQFmhLCIlUQBBithujP");
	this.shape_102.setTransform(256.3,259.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#A62E52").ss(7,1,1).p("ApnFiQF6BoFWhGQFhhHCGlQQBDi1h4jX");
	this.shape_103.setTransform(253.2,259.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A62E52").ss(7,1,1).p("ApgFiQF3BqFShCQFchFCDlLQBGi8iBjh");
	this.shape_104.setTransform(250.2,259.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#A62E52").ss(7,1,1).p("ApYFjQF0BsFNhAQFXhCCBlJQBIjAiKjq");
	this.shape_105.setTransform(247.2,259.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A62E52").ss(7,1,1).p("ApSFjQFxBuFJg9QFTg/B+lFQBLjHiUjy");
	this.shape_106.setTransform(244.4,259.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#A62E52").ss(7,1,1).p("ApLFjQFvBxFFg7QFNg8B9lBQBNjNidj7");
	this.shape_107.setTransform(241.6,259.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A62E52").ss(7,1,1).p("ApEFjQFrBzFBg4QFJg6B7k8QBPjUilkD");
	this.shape_108.setTransform(238.9,259.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#A62E52").ss(7,1,1).p("Ao+FjQFpB1E9g2QFFg3B4k4QBRjaitkL");
	this.shape_109.setTransform(236.2,259.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A62E52").ss(7,1,1).p("Ao4FjQFnB3E5gzQFBg1B1k0QBUjhi1kS");
	this.shape_110.setTransform(233.7,259.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#A62E52").ss(7,1,1).p("AoxFiQFjB6E2gxQE8gzB0kwQBVjmi8ka");
	this.shape_111.setTransform(231.2,259.9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A62E52").ss(7,1,1).p("AosFjQFhB7EzgvQE4gwByktQBXjrjEki");
	this.shape_112.setTransform(228.8,259.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#A62E52").ss(7,1,1).p("AomFiQFfB+EvgtQE0guBwkpQBZjxjLkp");
	this.shape_113.setTransform(226.4,259.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A62E52").ss(7,1,1).p("AohFiQFdB/EsgqQEwgsBukmQBbj2jSkw");
	this.shape_114.setTransform(224.2,259.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#A62E52").ss(7,1,1).p("AobFiQFaCBEpgoQEsgqBtkjQBcj7jZk2");
	this.shape_115.setTransform(222,259.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A62E52").ss(7,1,1).p("AoWFiQFYCCElgmQEqgoBqkfQBfkBjgk8");
	this.shape_116.setTransform(219.9,259.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#A62E52").ss(7,1,1).p("AoRFiQFWCEEiglQEmglBpkdQBgkFjmlC");
	this.shape_117.setTransform(217.8,259.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#A62E52").ss(7,1,1).p("AoNFiQFUCGEggjQEjgkBnkZQBikKjtlJ");
	this.shape_118.setTransform(215.9,259.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#A62E52").ss(7,1,1).p("AoIFhQFSCIEdghQEggiBlkXQBkkOjzlO");
	this.shape_119.setTransform(214,260);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A62E52").ss(7,1,1).p("AoEFhQFQCJEbggQEcgfBlkVQBkkSj4lT");
	this.shape_120.setTransform(212.2,260);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#A62E52").ss(7,1,1).p("AodBuQE5D6EdA+QEeA+CMj2QCNj2jEmp");
	this.shape_121.setTransform(207.5,260.7,1,1,0,0,0,2.1,-7.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A62E52").ss(7,1,1).p("AohAXQEpEXEaBcQEaBaCcjnQCcjniqm4");
	this.shape_122.setTransform(208.5,264.7,1,1,0,0,0,2.9,-10.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#A62E52").ss(7,1,1).p("AonCaQE+DrEiAwQEjAuCPj/QCQj+jGmh");
	this.shape_123.setTransform(209.3,255.8,1,1,0,0,0,2.1,-6.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A62E52").ss(7,1,1).p("AHOnaQDaGplPFDQlMFCmUjDQhWgqhGhD");
	this.shape_124.setTransform(235.3,249.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#A62E52").ss(7,1,1).p("AFHtWQDHGgACGBQACF/kdEVQkaEVmzggQgcgDgbgD");
	this.shape_125.setTransform(288.2,140.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A62E52").ss(7,1,1).p("AnBN7QDqg0BdgeQCvg6BxhXQEdjdAAoLQAAkUhqkRQhLi+g/hI");
	this.shape_126.setTransform(289.4,117);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#A62E52").ss(7,1,1).p("AFqs6QCSG+gbFLQgcFJjmEkQjlEkjhgrQjigrgbgM");
	this.shape_127.setTransform(301.6,170.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#A62E52").ss(7,1,1).p("AOomuQmfPMrWh+QrZh/gBjt");
	this.shape_128.setTransform(315.5,204);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#A62E52").ss(7,1,1).p("AvDiTQDPF8GfB3QGgB6F2jXQFtjRCGmMQAIgYAIgZ");
	this.shape_129.setTransform(318.2,227.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A62E52").ss(7,1,1).p("AvBh0QDPF8GfB3QGgB6FEjRQFFjRB/j5QAvhbA9iu");
	this.shape_130.setTransform(317.3,232.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#A62E52").ss(7,1,1).p("AvAh1QDOF8GfB3QGgB6F2jXQFrjPCTn7");
	this.shape_131.setTransform(318,248.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#A62E52").ss(7,1,1).p("AvTjLQA6B1BOBlQEAFTGfBIQGgBIFNkEQFLkBBImlIgHAA");
	this.shape_132.setTransform(318.5,295.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#A62E52").ss(7,1,1).p("AvCm8QAiBEBZC/QCxGGGLClQGHClF1jHQGFjQBEmvQAJg2AAg2");
	this.shape_133.setTransform(310.7,341.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#A62E52").ss(7,1,1).p("ArYnfQBAGgEVE0QErFQGsiSQEzhpBSk6");
	this.shape_134.setTransform(280.5,309.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#A62E52").ss(7,1,1).p("AH5BGQguCpjXCGQjXCGjridQjtieg6pyQAAALgDBb");
	this.shape_135.setTransform(249.8,292.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A62E52").s().p("ADSIkQkTgwjKn0QhAiegvi5QgkiKAAgZQAAgSAMgNQALgMAPAAQAnABAGBFQANBKARA4IAuCCQAfBVALA0QApC3B8CtQB8CxBuATQBSAOAqiYQAOgvAIg7IAFgxQAAgbgIhKIgRheQAAgNAGgIQAJgPAYAEQAqAHAPBzQAIA6gBA6QAAARgHAwQgLBIgSA6Qg0CnhgAAQgLAAgKgCg");
	this.shape_136.setTransform(236.6,275.1,1,1,0,0,0,0,1.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A62E52").s().p("ADCIOQj/gbi6nkQg8iZgri1QghiHAAgZQAAgSAKgOQALgNAOgBQAkgCAFBEQAMBKAQA2IArB/QAcBSALAzQAlCzBzCkQBzCmBmALQBMAIAnicQANgwAHg7IAFgyQAAgbgHhJIgQhdQAAgNAFgJQAJgPAWACQAnAEAOBxQAHA6gBA5QAAARgHAxQgJBJgRA8QgzCzhgAAIgKAAg");
	this.shape_137.setTransform(233.6,263.4,1,1,0,0,0,0,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75}]}).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},2).to({state:[{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},2).to({state:[{t:this.shape_85}]},2).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_87}]},2).to({state:[{t:this.shape_88}]},29).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},2).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},2).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},2).to({state:[{t:this.shape_124}]},2).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},2).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129,p:{y:227.8}}]},1).to({state:[{t:this.shape_129,p:{y:224.1}}]},1).to({state:[{t:this.shape_129,p:{y:221.1}}]},1).to({state:[{t:this.shape_130}]},31).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},2).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_75}]},2).wait(1));

	// Leg
	this.instance_21 = new lib.Leg("synched",0);
	this.instance_21.setTransform(105.2,341.3,0.905,0.905,4.3,0,0,18.1,16.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#A62E52").ss(7,1,1).p("AGaEIQjNC1iuA+QisA9iFhCQiEhCgDi0QgDi0BbitQBWilBohhQAGgGAGgFQBvhjBdhC");
	this.shape_138.setTransform(64.5,274.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#A62E52").ss(7,1,1).p("AGaETQjSCwiwA4QiuA5iChFQiDhGACi0QACizBfirQBgisByhgQBvhgBhg/");
	this.shape_139.setTransform(63.6,284);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#A62E52").ss(7,1,1).p("AGaEJQjOC1iuA9QitA8iEhCQiEhDgCi0QgCi0BbisQBciuBwhjQBvhjBdhA");
	this.shape_140.setTransform(65.7,281.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#A62E52").ss(7,1,1).p("AJkCPQocFvkNASQkPAShgjBQhfjABfkCQBgkECDir");
	this.shape_141.setTransform(116.9,237);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#A62E52").ss(7,1,1).p("ApFopQiOEpAiFJQAiFLD7BjQD7BjDuhcQDvhcCch2QCdh1A7ga");
	this.shape_142.setTransform(139.9,233.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#A62E52").ss(7,1,1).p("ApVn2QiNEqBGE2QBGE4DuA5QDtA5C8g+QC+g/CLhYQCLhZCfh/");
	this.shape_143.setTransform(141.4,228.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#A62E52").ss(7,1,1).p("ApVn+QiNElBGE5QBGE6DuBBQDtBCC8g4QC+g4CLhUQCLhUCfh5");
	this.shape_144.setTransform(141.4,236.6,1,1,0,0,0,0,1.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#A62E52").ss(7,1,1).p("Ao2njQiiEVAzEoQAzEqDrA/QDrA+DBg1QDDg1CRhOQCRhQCohy");
	this.shape_145.setTransform(140.1,248.1,1,1,0,0,0,0,1.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#A62E52").ss(7,1,1).p("AocodQi1EgAZFQQAdF+FjA/QDhAnDdhGQE1hhDWj1QAWgaAVga");
	this.shape_146.setTransform(139.6,260.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A62E52").ss(7,1,1).p("AoToUQjDEvAOE4QAPE5CoBXQCoBXGAg/QGDg/Evlv");
	this.shape_147.setTransform(142.5,271);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#A62E52").ss(7,1,1).p("ALTD9QkFC0k7BKQk6BJk7iVQk7iWBilcQBOkUDZi7");
	this.shape_148.setTransform(131.6,276.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21,p:{rotation:4.3,x:105.2,y:341.3,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}}]}).to({state:[{t:this.instance_21,p:{rotation:6.1,x:102.4,y:344.9,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}}]},1).to({state:[{t:this.shape_138},{t:this.instance_21,p:{rotation:7.9,x:100.1,y:358.2,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:9.4,x:97.7,y:368.7,regY:17,scaleX:0.905,scaleY:0.905,regX:18.1}},{t:this.shape_139}]},1).to({state:[{t:this.instance_21,p:{rotation:8.1,x:101.1,y:365,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}},{t:this.shape_140}]},2).to({state:[{t:this.instance_21,p:{rotation:3.8,x:113.8,y:357.8,regY:17,scaleX:0.994,scaleY:0.994,regX:18.1}}]},1).to({state:[{t:this.shape_141},{t:this.instance_21,p:{rotation:-1.1,x:137.2,y:331,regY:17,scaleX:1.011,scaleY:1.011,regX:18}}]},1).to({state:[{t:this.shape_142},{t:this.instance_21,p:{rotation:-2.4,x:139,y:324,regY:17,scaleX:1.011,scaleY:1.011,regX:18}}]},1).to({state:[{t:this.instance_21,p:{rotation:-2.4,x:139,y:322.1,regY:17,scaleX:1.011,scaleY:1.011,regX:18}},{t:this.shape_143}]},2).to({state:[{t:this.instance_21,p:{rotation:-1.1,x:136.5,y:329.1,regY:17.1,scaleX:1.011,scaleY:1.011,regX:17.9}},{t:this.shape_144}]},2).to({state:[{t:this.instance_21,p:{rotation:0.6,x:133.3,y:349.4,regY:17.1,scaleX:1.011,scaleY:1.011,regX:17.9}},{t:this.shape_145,p:{regY:1.2,y:248.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0.6,x:133.3,y:351.4,regY:17.1,scaleX:1.011,scaleY:1.011,regX:17.9}},{t:this.shape_145,p:{regY:-0.9,y:248.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:0.6,x:133.3,y:347.5,regY:17.1,scaleX:1.011,scaleY:1.011,regX:17.9}},{t:this.shape_145,p:{regY:-0.9,y:246}}]},2).to({state:[{t:this.instance_21,p:{rotation:2.6,x:129.5,y:356.9,regY:17.1,scaleX:1.011,scaleY:1.011,regX:17.9}},{t:this.shape_146}]},29).to({state:[{t:this.instance_21,p:{rotation:12.1,x:108.6,y:370.7,regY:16.9,scaleX:1.01,scaleY:1.01,regX:18.1}},{t:this.shape_147}]},1).to({state:[{t:this.shape_148},{t:this.instance_21,p:{rotation:13.7,x:105.9,y:379.3,regY:16.9,scaleX:1.01,scaleY:1.01,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:13.7,x:105.9,y:376.1,regY:16.9,scaleX:1.01,scaleY:1.01,regX:18.1}}]},2).to({state:[{t:this.instance_21,p:{rotation:13.8,x:102.1,y:376.4,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:13.8,x:98.4,y:376.7,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14,x:94.6,y:377.1,regY:17,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14,x:91.1,y:377.4,regY:17,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.1,x:87.5,y:377.7,regY:17,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.3,x:84.1,y:377.9,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.3,x:80.7,y:378.3,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.5,x:77.3,y:378.4,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.5,x:74.1,y:378.7,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.8,x:71,y:379,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.8,x:67.8,y:379.3,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:14.8,x:64.8,y:379.6,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15,x:61.9,y:379.8,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15,x:58.9,y:380,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.1,x:56.1,y:380.2,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.3,x:53.5,y:380.5,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.3,x:50.8,y:380.7,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.3,x:48.2,y:381,regY:17,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.5,x:45.7,y:381.3,regY:17,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.5,x:43.3,y:381.4,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.6,x:41,y:381.6,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.6,x:38.6,y:381.7,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.8,x:36.5,y:381.9,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.8,x:34.3,y:382.1,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:15.8,x:32.2,y:382.3,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:16,x:30.1,y:382.5,regY:17,scaleX:1.009,scaleY:1.009,regX:18}}]},1).to({state:[{t:this.instance_21,p:{rotation:16,x:28.3,y:382.7,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:16,x:26.5,y:382.8,regY:16.9,scaleX:1.009,scaleY:1.009,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:16.2,x:24.7,y:382.9,regY:16.9,scaleX:1.01,scaleY:1.01,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:17.7,x:19.9,y:389,regY:17,scaleX:1.01,scaleY:1.01,regX:18.1}}]},2).to({state:[{t:this.instance_21,p:{rotation:18.8,x:18.9,y:393.5,regY:17,scaleX:1.01,scaleY:1.01,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:17.7,x:23.5,y:390.2,regY:17.1,scaleX:1.01,scaleY:1.01,regX:18.1}}]},2).to({state:[{t:this.instance_21,p:{rotation:9.7,x:53.5,y:391.4,regY:16.9,scaleX:1.029,scaleY:1.029,regX:18.1}}]},2).to({state:[{t:this.instance_21,p:{rotation:2.1,x:111,y:365.1,regY:16.9,scaleX:1.148,scaleY:1.148,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0.5,x:115.2,y:357.2,regY:16.9,scaleX:1.165,scaleY:1.165,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0.1,x:114.2,y:366.7,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.1}}]},2).to({state:[{t:this.instance_21,p:{rotation:-0.6,x:115.9,y:380.7,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:-0.6,x:115.9,y:384.5,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:-0.6,x:115.9,y:380.7,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:-0.6,x:115.9,y:377.7,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:1,x:112.3,y:392.5,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.2}}]},31).to({state:[{t:this.instance_21,p:{rotation:4.1,x:106.2,y:403.8,regY:16.9,scaleX:1.142,scaleY:1.142,regX:18.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:6.6,x:98.3,y:415,regY:16.9,scaleX:1.11,scaleY:1.11,regX:18.2}}]},2).to({state:[{t:this.instance_21,p:{rotation:6.6,x:96.3,y:433.1,regY:16.9,scaleX:1.087,scaleY:1.087,regX:18.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:6.3,x:105.3,y:380.1,regY:16.9,scaleX:0.944,scaleY:0.944,regX:18}}]},1).to({state:[{t:this.instance_21,p:{rotation:5.8,x:102.8,y:359.9,regY:17,scaleX:0.905,scaleY:0.905,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:4.3,x:105.2,y:346.2,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:4.3,x:105.2,y:337.8,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:4.3,x:105.2,y:341.3,regY:16.9,scaleX:0.905,scaleY:0.905,regX:18.1}}]},2).wait(1));

	// Leg
	this.instance_22 = new lib.Leg("synched",0);
	this.instance_22.setTransform(172.9,339.1,0.905,0.905,-4.7,0,0,16.6,18.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#A62E52").ss(7,1,1).p("AIBFMQkyBvkxhJQlThRhBlXQgiizBdil");
	this.shape_149.setTransform(72.2,273.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#A62E52").ss(7,1,1).p("AHAJ3QkJAVj0heQj7hfhXkAQhNjhAwjuQAnjDBGi3");
	this.shape_150.setTransform(94.5,308.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#A62E52").ss(7,1,1).p("AkEp1QimEhgXFHQgZFgFACvQEaCbFEg1");
	this.shape_151.setTransform(100.8,299.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#A62E52").ss(7,1,1).p("AHSHWQkqDIlGiLQlHiJAVljQATk7DCkCQAUgaATgb");
	this.shape_152.setTransform(91.8,281.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-4.7,x:172.9,y:339.1,regX:16.6,scaleX:0.905,scaleY:0.905}}]}).to({state:[{t:this.instance_22,p:{regY:18.1,rotation:-2.9,x:170.1,y:344.8,regX:16.6,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-1.1,x:167.8,y:360.3,regX:16.6,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:0.3,x:165.4,y:372.6,regX:16.7,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance_22,p:{regY:18.1,rotation:-0.8,x:168.7,y:367.3,regX:16.6,scaleX:0.905,scaleY:0.905}}]},2).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-5.1,x:188.2,y:354.6,regX:16.8,scaleX:0.994,scaleY:0.994}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-10.1,x:212.3,y:321.2,regX:16.8,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-11.4,x:213.9,y:312.6,regX:16.8,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-11.4,x:213.9,y:310.6,regX:16.8,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-10.1,x:211.8,y:319.2,regX:16.8,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-8.4,x:208.8,y:341.9,regX:16.8,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-8.4,x:208.8,y:343.8,regX:16.8,scaleX:1.011,scaleY:1.011}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-8.4,x:208.8,y:339.9,regX:16.8,scaleX:1.011,scaleY:1.011}}]},2).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-6.3,x:205.3,y:352.1,regX:16.8,scaleX:1.01,scaleY:1.01}}]},29).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:3.1,x:183.9,y:378.5,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:4.6,x:180.8,y:389.1,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:4.6,x:180.8,y:385.8,regX:16.7,scaleX:1.01,scaleY:1.01}}]},2).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:4.6,x:177.1,y:386.3,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:4.8,x:173.3,y:386.9,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:4.8,x:169.6,y:387.3,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:5,x:166,y:387.7,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:5,x:162.5,y:388.2,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:5.3,x:158.8,y:388.7,regX:16.6,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:5.3,x:155.5,y:389.1,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:5.5,x:152.2,y:389.5,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:5.5,x:149,y:389.9,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:5.6,x:145.7,y:390.3,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:5.8,x:142.7,y:390.6,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:5.8,x:139.6,y:391,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:5.8,x:136.6,y:391.3,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:6,x:133.7,y:391.6,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6,x:130.9,y:392.1,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6.1,x:128.1,y:392.4,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6.3,x:125.5,y:392.7,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6.3,x:122.9,y:393,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6.3,x:120.3,y:393.4,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:6.5,x:117.9,y:393.8,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6.5,x:115.5,y:394,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:6.6,x:113.3,y:394.2,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:6.8,x:111.1,y:394.5,regX:16.8,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:6.8,x:108.8,y:394.8,regX:16.7,scaleX:1.009,scaleY:1.009}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:6.8,x:106.8,y:395,regX:16.7,scaleX:1.009,scaleY:1.009}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:6.8,x:104.7,y:395.3,regX:16.7,scaleX:1.009,scaleY:1.009}}]},1).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:7,x:102.9,y:395.6,regX:16.8,scaleX:1.009,scaleY:1.009}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:7,x:101,y:395.7,regX:16.8,scaleX:1.009,scaleY:1.009}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:7.1,x:99.1,y:396,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:8.6,x:94.8,y:402.4,regX:16.7,scaleX:1.01,scaleY:1.01}}]},2).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:9.7,x:92.7,y:407.4,regX:16.7,scaleX:1.01,scaleY:1.01}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:8.6,x:97.7,y:405.1,regX:16.7,scaleX:1.01,scaleY:1.01}}]},2).to({state:[{t:this.shape_149},{t:this.instance_22,p:{regY:18.1,rotation:0.6,x:130.5,y:395.9,regX:16.6,scaleX:1.029,scaleY:1.029}}]},2).to({state:[{t:this.instance_22,p:{regY:18.3,rotation:-6.9,x:196.8,y:358.9,regX:16.8,scaleX:1.148,scaleY:1.148}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-8.4,x:202.1,y:348.7,regX:16.8,scaleX:1.165,scaleY:1.165}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-8.9,x:199.4,y:357.6,regX:16.8,scaleX:1.142,scaleY:1.142}}]},2).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-9.7,x:200.9,y:370.4,regX:16.8,scaleX:1.142,scaleY:1.142}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-9.7,x:200.9,y:374.2,regX:16.8,scaleX:1.142,scaleY:1.142}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-9.7,x:200.9,y:370.4,regX:16.8,scaleX:1.142,scaleY:1.142}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-9.7,x:200.9,y:367.4,regX:16.8,scaleX:1.142,scaleY:1.142}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-7.9,x:197.5,y:384.8,regX:16.8,scaleX:1.142,scaleY:1.142}}]},31).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-4.9,x:191.7,y:400.5,regX:16.8,scaleX:1.142,scaleY:1.142}}]},1).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-2.3,x:181.5,y:415.6,regX:16.8,scaleX:1.11,scaleY:1.11}},{t:this.shape_150}]},2).to({state:[{t:this.instance_22,p:{regY:18.4,rotation:-2.3,x:177.8,y:433.7,regX:16.8,scaleX:1.087,scaleY:1.087}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-2.6,x:176.1,y:380.3,regX:16.6,scaleX:0.944,scaleY:0.944}},{t:this.shape_151}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-3.1,x:170.5,y:359.5,regX:16.6,scaleX:0.905,scaleY:0.905}},{t:this.shape_152}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-4.7,x:172.9,y:344,regX:16.6,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-4.7,x:172.9,y:335.6,regX:16.6,scaleX:0.905,scaleY:0.905}}]},1).to({state:[{t:this.instance_22,p:{regY:18.2,rotation:-4.7,x:172.9,y:339.1,regX:16.6,scaleX:0.905,scaleY:0.905}}]},2).wait(1));

	// Layer 14
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDrQjBDCiqBJQipBIiIg6QiIg6gOizQgPizBQiyQBQi0BphqQBphqBZhH");
	this.shape_153.setTransform(65.9,260);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#A62E52").ss(7,1,1).p("AGaD6QjHC8isBDQirBCiGg9QiGg/gJizQgJizBWiwQBWixBrhnQBshnBchE");
	this.shape_154.setTransform(64.9,262.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#A62E52").ss(7,1,1).p("ALTEQQkFC0k7BKQk6BKk7iWQk7iWBilbQBOkWDxjg");
	this.shape_155.setTransform(131.6,276);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#A62E52").ss(7,1,1).p("AmKogQg7A3gxA6QhfB0g4CBQgfBHgTBKQguCwA+B9QA6B2CaBHQDTBiDWgCQBlgBBmgYQE8hKD/i5");
	this.shape_156.setTransform(129.3,275.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A62E52").ss(7,1,1).p("AmYobQg6A3gwA7QheB0g1CCQgdBHgRBKQgpCuBBB8QA8B0CaBEQDRBfDZgDQBkgBBmgYQE9hLD4i9");
	this.shape_157.setTransform(127.1,275.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#A62E52").ss(7,1,1).p("AmloWQg7A3gvA7QhcB0gyCDQgbBIgPBJQglCsBFB7QA9ByCcBCQDPBbDagDQBlgCBlgXQE+hMDyjB");
	this.shape_158.setTransform(125,275.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#A62E52").ss(7,1,1).p("AmyoRQg6A3gvA8QhaB0gvCEQgaBIgNBJQggCqBJB6QA/BvCbBBQDOBXDcgEQBlgCBkgXQE/hMDrjG");
	this.shape_159.setTransform(122.8,275.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#A62E52").ss(7,1,1).p("Am+oNQg6A3guA9QhZB0grCFQgZBIgLBJQgcCpBMB4QBBBtCcA/QDMBUDegFQBlgCBkgYQE/hMDmjJ");
	this.shape_160.setTransform(120.7,274.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#A62E52").ss(7,1,1).p("AnKoIQg6A3guA9QhXB0gpCGQgWBIgJBJQgYCnBPB3QBDBrCcA9QDLBRDfgGQBlgCBjgYQFBhMDfjO");
	this.shape_161.setTransform(118.6,274.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#A62E52").ss(7,1,1).p("AnVoDQg6A3gtA8QhWB1gmCHQgVBJgHBIQgTClBSB2QBEBpCdA7QDJBODigGQBkgDBjgYQFBhMDajS");
	this.shape_162.setTransform(116.5,274.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#A62E52").ss(7,1,1).p("Angn/Qg6A3gsA9QhUB0gkCJQgTBJgGBFQgPCmBWB2QBFBmCeA5QDIBMDjgIQBkgDBigXQFChNDUjW");
	this.shape_163.setTransform(114.5,274.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#A62E52").ss(7,1,1).p("Anrn7Qg6A3grA+QhTB0ggCJQgTBKgDBFQgLClBYB0QBHBkCeA3QDHBJDigIQBngEBigXQFChNDPja");
	this.shape_164.setTransform(112.5,274.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#A62E52").ss(7,1,1).p("An1n2Qg6A3grA+QhRB0geCKQgRBKgCBFQgHCjBbBzQBJBiCfA2QDFBGDkgKQBngEBhgXQFDhNDJje");
	this.shape_165.setTransform(110.5,273.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#A62E52").ss(7,1,1).p("An/nyQg6A3gqA+QhQB0gbCLQgQBKAABFQgDChBeByQBLBhCfAzQDDBEDmgKQBngEBggYQFEhODEjh");
	this.shape_166.setTransform(108.6,273.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#A62E52").ss(7,1,1).p("AoInuQg6A3gpA+QhPB1gZCMQgOBKACBEQAACgBhBxQBMBfCfAyQDDBADngKQBngFBggXQFEhOC/jl");
	this.shape_167.setTransform(106.6,273.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#A62E52").ss(7,1,1).p("AoSnqQg5A3gpA+QhOB1gWCNQgNBKAEBEQAECfBkBwQBNBdCgAwQDAA+DpgMQBogEBfgXQFFhPC6jo");
	this.shape_168.setTransform(104.8,273.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#A62E52").ss(7,1,1).p("AoannQg5A3gpA/QhMB1gUCOQgLBKAFBEQAHCdBnBvQBPBbCgAvQC/A7DrgMQBngFBegXQFGhPC1jr");
	this.shape_169.setTransform(102.9,273.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#A62E52").ss(7,1,1).p("AojnjQg5A3goA/QhLB1gRCPQgKBKAGBEQALCcBpBuQBRBaCgAtQC+A4DsgMQBngGBfgWQFGhQCwjv");
	this.shape_170.setTransform(101.1,273);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#A62E52").ss(7,1,1).p("AoqnfQg6A3gnA/QhKB1gPCQQgJBKAIBEQAPCaBrBtQBSBYChAsQC9A2DtgNQBngGBegXQFHhPCrjy");
	this.shape_171.setTransform(99.3,272.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#A62E52").ss(7,1,1).p("AoyncQg5A3gnBAQhJB1gNCQQgHBLAJBDQASCaBuBsQBTBWChAqQC8A0DvgOQBngGBdgXQFIhPCnj2");
	this.shape_172.setTransform(97.5,272.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#A62E52").ss(7,1,1).p("Ao5nYQg5A3gmBAQhIB0gLCSQgGBLALBDQAVCYBwBrQBVBVChAoQC7AyDwgPQBngGBdgWQFIhQCij5");
	this.shape_173.setTransform(95.8,272.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#A62E52").ss(7,1,1).p("ApAnVQg5A3gmBAQhGB1gJCSQgFBLAMBDQAYCXBzBqQBVBTCiAnQC6AwDxgQQBngGBdgWQFIhRCej7");
	this.shape_174.setTransform(94.1,272.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#A62E52").ss(7,1,1).p("ApHnSQg5A3glBAQhFB1gHCTQgEBLAOBDQAbCWB1BpQBWBSCjAmQC4AtDzgQQBngHBcgWQFJhRCaj+");
	this.shape_175.setTransform(92.5,272.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#A62E52").ss(7,1,1).p("ApNnPQg5A3glBAQhEB1gFCUQgDBLAPBDQAeCUB3BpQBYBQCjAlQC3ArD0gRQBngGBcgXQFKhRCVkB");
	this.shape_176.setTransform(90.9,272.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#A62E52").ss(7,1,1).p("ApTnMQg5A3glBBQhDB1gDCUQgBBLAQBDQAhCTB5BoQBZBPCjAjQC2ApD1gRQBogHBbgWQFKhRCSkE");
	this.shape_177.setTransform(89.3,272.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#A62E52").ss(7,1,1).p("ApZnJQg5A3gkBAQhCB2gBCVQgBBJARBEQAkCTB7BnQBbBOCjAhQC1AoD2gSQBogHBagXQFLhRCOkG");
	this.shape_178.setTransform(87.8,272);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#A62E52").ss(7,1,1).p("ApfnHQg4A3gkBBQhBB1ABCWQAABKATBEQAmCRB9BnQBbBMCkAgQC0AmD3gSQBogIBagWQFLhSCLkJ");
	this.shape_179.setTransform(86.3,271.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#A62E52").ss(7,1,1).p("ApknEQg5A3gjBBQhAB1ACCWQABBKAUBEQApCRB/BlQBdBLCjAgQC0AjD4gSQBngIBagWQFMhSCHkM");
	this.shape_180.setTransform(84.9,271.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#A62E52").ss(7,1,1).p("ApqnCQg4A3gjBCQg/B1AECXQACBKAVBDQArCQCBBlQBdBKClAeQCyAiD5gTQBogIBZgWQFNhSCDkO");
	this.shape_181.setTransform(83.6,271.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#A62E52").ss(7,1,1).p("Apum/Qg5A3giBBQg/B2AGCXQADBKAWBEQAtCOCEBlQBeBICkAdQCyAhD6gUQBngIBagWQFMhSCBkR");
	this.shape_182.setTransform(82.2,271.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#A62E52").ss(7,1,1).p("Apzm9Qg4A3giBCQg+B1AHCYQAEBLAXBDQAwCOCFBjQBfBIClAcQCwAeD7gUQBogIBZgWQFNhSB9kT");
	this.shape_183.setTransform(80.9,271.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#A62E52").ss(7,1,1).p("AMIAuQibFentAnQnrAojGiSQjGiRgPjsQgJiYA9h2QAihCA4g3");
	this.shape_184.setTransform(79.7,271.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#A62E52").ss(7,1,1).p("AMIAjQibFfntAtQnrAsjGiPQjGiRgPjrQgOjtCcib");
	this.shape_185.setTransform(79.5,276.7,1,1,0,0,0,0,-0.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#A62E52").ss(7,1,1).p("ALxAkQiWFfneAsQndAsjAiPQjBiRgOjrQgOjtCYib");
	this.shape_186.setTransform(82.6,276.2,1,1,0,0,0,0,-0.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#A62E52").ss(7,1,1).p("AMAiFQjEEMk7B1QkwBvkzhJQlThRhBlXQgSheARha");
	this.shape_187.setTransform(97.8,281.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#A62E52").ss(7,1,1).p("Ar3nyQhMD5BIEsQBIEtEcBoQEcBoEXiRQEZiSCjjtQCijsAliE");
	this.shape_188.setTransform(138,242.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#A62E52").ss(7,1,1).p("AtCnrQg4D7BtEpQBrErE9BiQE7BiEciWQEfiYCWjwQCWjvAZiE");
	this.shape_189.setTransform(145.9,236.2,1,1,0,0,0,3.3,-0.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#A62E52").ss(7,1,1).p("As4pZQhPEEBTFVQBSFWE2CiQE1CjErhuQEuhvCsjoQCsjmAliK");
	this.shape_190.setTransform(142,270.3,1,1,0,0,0,0.6,7.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#A62E52").ss(7,1,1).p("AtlpjQh/GOBYE6QBZFBE7B6QEtB0E8hQQE4hNEFi8QCXhtBsiY");
	this.shape_191.setTransform(146.4,267.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#A62E52").ss(7,1,1).p("AtlpCQh/GbBYEyQBZE3E7BbQEtBXE8hwQE4hsEFjWQCXh8Bsih");
	this.shape_192.setTransform(146.4,258.3,1,1,0,0,0,0,-5.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#A62E52").ss(7,1,1).p("At8o/QhuGYBlExQBmE2FABbQEyBWE5hwQE0hsD9jVQCTh7Bmig");
	this.shape_193.setTransform(149,254.4,1,1,0,0,0,0.2,-5.1);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#A62E52").ss(7,1,1).p("Atlp/Qh/GFBYFAQBZFHE7CRQEtCKE8g5QE4g2EFiqQCXhiBsiQ");
	this.shape_194.setTransform(146.4,293.3,1,1,0,0,0,0,3.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#A62E52").ss(7,1,1).p("AOfB/QjHC2j7BeQj3BekEAXQkJAUj1hdQj7hfhYkBQhNjhAwjuQAQhOAVhM");
	this.shape_195.setTransform(142.4,319.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#A62E52").ss(7,1,1).p("AN1EjQjoDqlCBkQlBBilJhVQlShXh+kBQh/kBAhkaQAhkdBWiS");
	this.shape_196.setTransform(135.6,338.2,1,1,0,0,0,-3,1.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#A62E52").ss(7,1,1).p("AoyopQhgDegRDzQgYFgE/CuQEdCcFBg1QDxgqDTh3");
	this.shape_197.setTransform(123.3,307.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#A62E52").ss(7,1,1).p("AHDGiIAPgBQkqDIlGiLQlHiKAVlgQARkdCejs");
	this.shape_198.setTransform(91.8,287.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#A62E52").ss(7,1,1).p("AgnowQhOBAg2BUQg4BVgyBYQgwBUgkBaQgmBbgPBkQgOBkAXBmQAYBnBZA7QA8AoBGAQQBkAYBlgNQBogRBcg2QBVgxBGhJQAPgPAPgQ");
	this.shape_199.setTransform(78.1,265.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#A62E52").ss(7,1,1).p("AGnD2QjHDLivBMQiuBLiMg8QiMg8gPi8QgPi7BTi7QBSi8BshvQBshvBbhK");
	this.shape_200.setTransform(67.2,259.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_153}]}).to({state:[{t:this.shape_154}]},1).to({state:[]},1).to({state:[{t:this.shape_155}]},47).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185,p:{x:79.5,y:276.7}}]},2).to({state:[{t:this.shape_185,p:{x:81.4,y:280.8}}]},1).to({state:[{t:this.shape_186}]},2).to({state:[{t:this.shape_187}]},2).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},2).to({state:[{t:this.shape_191,p:{y:267.9}}]},1).to({state:[{t:this.shape_191,p:{y:271.7}}]},1).to({state:[{t:this.shape_192,p:{y:258.3}}]},1).to({state:[{t:this.shape_192,p:{y:254.5}}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194,p:{x:146.4,y:293.3}}]},30).to({state:[{t:this.shape_194,p:{x:149.2,y:304.3}}]},1).to({state:[{t:this.shape_195}]},2).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_153}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.8,-2.5,338.2,502.8);


(lib.POPSICLEFACE_idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SUNGLASSES
	this.instance = new lib.SUNGLASSES("single",0);
	this.instance.setTransform(-80.2,-112.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(49).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(37).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(77));

	// EYEBROW
	this.instance_1 = new lib.EYEBROW("single",0);
	this.instance_1.setTransform(-155.6,-169.8,1,1,0,-4.2,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54).to({y:-164},0).wait(1).to({y:-158.3},0).wait(1).to({x:-155.3,y:-152.7},0).wait(4).to({x:-154.8,y:-161.9},0).wait(2).to({x:-153,y:-189.9},0).wait(1).to({x:-152.5,y:-199.1},0).wait(1).to({x:-151.9,y:-208.5},0).wait(2).to({x:-152.2,y:-202.9},0).wait(49).to({y:-193.7},0).wait(2).to({skewX:10.7,skewY:190.8,x:-154.8,y:-178},0).wait(2).to({x:-155,y:-163.2},0).wait(2).to({y:-157.6},0).wait(37).to({x:-155.4,y:-165.2},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:4,skewY:184.1,y:-167.2},0).wait(1).to({skewX:-0.3,skewY:179.5,x:-155.5,y:-168.6},0).wait(1).to({skewX:-3.1,skewY:176.7,y:-169.5},0).wait(1).to({skewX:-4.1,skewY:175.7,y:-169.7},0).wait(77));

	// EYEBROW
	this.instance_2 = new lib.EYEBROW("single",0);
	this.instance_2.setTransform(-7.6,-169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54).to({y:-164},0).wait(1).to({y:-158.3},0).wait(1).to({x:-7.3,y:-152.7},0).wait(4).to({x:-6.8,y:-161.9},0).wait(2).to({x:-5.7,y:-180.5},0).wait(1).to({x:-5.4,y:-186.1},0).wait(1).to({x:-5,y:-189.9},0).wait(2).to({x:-5.2,y:-186.2},0).wait(49).to({y:-195.4},0).wait(2).to({x:-9.5,y:-204.6},0).wait(2).to({y:-215.7},0).wait(2).to({x:-9.3,y:-221.3},0).wait(37).to({x:-8.9,y:-213.7},0).wait(1).to({startPosition:0},0).wait(1).to({x:-8.3,y:-194.5},0).wait(1).to({x:-7.8,y:-180.7},0).wait(1).to({x:-7.6,y:-172.5},0).wait(1).to({x:-7.5,y:-169.7},0).wait(77));

	// NOSE
	this.instance_3 = new lib.NOSE("synched",0);
	this.instance_3.setTransform(-78.9,-95.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(49).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(37).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(77));

	// MOUTH
	this.instance_4 = new lib.MOUTH("single",0);
	this.instance_4.setTransform(-85,-25.8,1.069,1.069,8,0,0,3,-75.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(49).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(37).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-186.2,226.1,186.9);


(lib.POPSICLEFACE_freezerburn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SUNGLASSES
	this.instance = new lib.SUNGLASSES("single",0);
	this.instance.setTransform(-80.2,-112.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(34).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(25));

	// EYEBROW
	this.instance_1 = new lib.EYEBROW("single",0);
	this.instance_1.setTransform(-155.6,-169.8,1,1,0,-4.2,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({x:-156.8,y:-181.3},0).wait(1).to({x:-156.4,y:-197.9},0).wait(1).to({x:-157.4,y:-206},0).wait(2).to({x:-157.1,y:-203.7},0).wait(18).to({skewX:25.7,skewY:205.8,x:-155.8,y:-192.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:33.8,skewY:213.9,x:-152.4,y:-161.2},0).wait(1).to({x:-151.7,y:-154.2},0).wait(3).to({skewX:18.8,skewY:198.9,x:-151.2,y:-163.8},0).wait(1).to({x:-150.4,y:-187.5},0).wait(1).to({skewX:-11,skewY:168.8,x:-153,y:-210.7},0).wait(1).to({skewX:-11,x:-154.3,y:-222.3},0).wait(2).to({x:-154,y:-220},0).wait(63).to({startPosition:0},0).wait(1).to({skewX:-8.9,skewY:170.9,x:-154.5,y:-204.3},0).wait(1).to({skewX:-7.1,skewY:172.7,x:-154.9,y:-191.1},0).wait(1).to({skewX:-5.8,skewY:174,x:-155.2,y:-180.3},0).wait(1).to({skewX:-4.8,skewY:175,x:-155.5,y:-171.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:-4.1,skewY:175.7,x:-155.6,y:-165.8},0).wait(2).to({x:-155.5,y:-169.7},0).wait(23));

	// EYEBROW
	this.instance_2 = new lib.EYEBROW("single",0);
	this.instance_2.setTransform(-7.6,-169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33).to({x:-7.6,y:-170.9},0).wait(1).to({x:-7.9,y:-173.2},0).wait(1).to({x:-8,y:-174.4},0).wait(2).to({x:-7.7,y:-172.1},0).wait(18).to({rotation:-14.8},0).wait(1).to({rotation:-29.8,x:-8.5,y:-162.5},0).wait(1).to({x:-7.8,y:-155.5},0).wait(3).to({rotation:-14.8,x:-8.9,y:-164.9},0).wait(1).to({x:-11.5,y:-188.1},0).wait(1).to({rotation:0,x:-15.5,y:-223},0).wait(1).to({x:-16.8,y:-234.6},0).wait(2).to({x:-16.5,y:-232.3},0).wait(63).to({startPosition:0},0).wait(1).to({x:-13.9,y:-213},0).wait(1).to({x:-11.7,y:-196.8},0).wait(1).to({x:-10,y:-183.5},0).wait(1).to({x:-8.6,y:-173.2},0).wait(1).to({x:-7.6,y:-165.8},0).wait(2).to({x:-7.5,y:-169.7},0).wait(23));

	// NOSE
	this.instance_3 = new lib.NOSE("synched",0);
	this.instance_3.setTransform(-78.9,-95.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(25));

	// MOUTH
	this.instance_4 = new lib.MOUTH("single",0);
	this.instance_4.setTransform(-85,-25.8,1.069,1.069,8,0,0,3,-75.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({startPosition:7},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:10},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:4},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:5},0).wait(4).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:0},0).wait(83).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-186.2,226.1,186.9);


(lib.POPSICLEFACE_CookinTime2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SUNGLASSES
	this.instance = new lib.SUNGLASSES("single",0);
	this.instance.setTransform(-80.2,-112.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).wait(54).to({startPosition:0},0).wait(61).to({startPosition:0},0).wait(43).to({startPosition:0},0).wait(77));

	// EYEBROW
	this.instance_1 = new lib.EYEBROW("single",0);
	this.instance_1.setTransform(-155.6,-169.8,1,1,0,-4.2,175.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,skewX:15.3,skewY:195.4,x:-152.5,y:-169},0).wait(1).to({scaleX:1,scaleY:1,skewX:29.4,skewY:209.5,x:-150.4,y:-168.5},0).wait(1).to({skewX:37.9,skewY:218,x:-149.1,y:-168.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:40.7,skewY:220.8,x:-148.7,y:-168},0).wait(51).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,skewX:40.6,skewY:220.7,x:-150.9,y:-160.7},0).wait(1).to({x:-152.5,y:-155.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:40.7,skewY:220.8,x:-153.4,y:-152.6},0).wait(58).to({x:-152.4,y:-159},0).wait(1).to({scaleX:1,scaleY:1,skewX:26.6,skewY:206.7,y:-174.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:14.3,skewY:194.4,y:-188.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:4,skewY:184.1,x:-152.3,y:-199.7},0).wait(1).to({skewX:-4.1,skewY:175.7,y:-209.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-10.6,skewY:169.2,y:-216.5},0).wait(1).to({skewX:-15.3,skewY:164.5,x:-152.4,y:-221.7},0).wait(1).to({skewX:-18.1,skewY:161.7,x:-152.3,y:-224.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-19.1,skewY:160.7,y:-225.9},0).wait(2).to({x:-152.8,y:-222.7},0).wait(35).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,skewX:-13.8,skewY:166,x:-153.9,y:-203.2},0).wait(1).to({skewX:-9.6,skewY:170.2,x:-154.8,y:-187.3},0).wait(1).to({skewX:-6.3,skewY:173.5,x:-155.5,y:-175.1},0).wait(1).to({scaleX:1,scaleY:1,skewX:-4.1,skewY:175.7,x:-156,y:-166.5},0).wait(2).to({x:-155.5,y:-169.7},0).wait(72));

	// EYEBROW
	this.instance_2 = new lib.EYEBROW("single",0);
	this.instance_2.setTransform(-7.6,-169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.8,x:-9,y:-169},0).wait(1).to({rotation:-22.1,x:-10,y:-168.4},0).wait(1).to({rotation:-27.9,x:-10.7,y:-168.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-29.8,x:-10.9,y:-168},0).wait(51).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-29.7,x:-8.3,y:-160.7},0).wait(1).to({x:-6.5,y:-155.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-29.8,x:-5.4,y:-152.6},0).wait(58).to({x:-4.4,y:-159},0).wait(1).to({scaleX:1,scaleY:1,rotation:-19.1,x:-3.6,y:-172.1},0).wait(1).to({rotation:-10.1,x:-2.8,y:-183.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-2.2,y:-192.8},0).wait(1).to({rotation:3.6,x:-1.7,y:-200.7},0).wait(1).to({rotation:8.5,x:-1.3,y:-206.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.1,x:-1,y:-211.1},0).wait(1).to({rotation:14.3,x:-0.8,y:-213.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:15,y:-214.5},0).wait(2).to({x:-1.3,y:-211.3},0).wait(35).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.8,x:-3.7,y:-195.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.5,x:-5.6,y:-183.1},0).wait(1).to({rotation:2.3,x:-7,y:-173.3},0).wait(1).to({rotation:0,x:-8,y:-166.5},0).wait(2).to({x:-7.5,y:-169.7},0).wait(72));

	// NOSE
	this.instance_3 = new lib.NOSE("synched",0);
	this.instance_3.setTransform(-78.9,-95.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({startPosition:0},0).wait(54).to({startPosition:0},0).wait(61).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(77));

	// MOUTH
	this.instance_4 = new lib.MOUTH("single",0);
	this.instance_4.setTransform(-85,-25.8,1.069,1.069,8,0,0,3,-75.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({startPosition:10},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(3).to({startPosition:10},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(4).to({startPosition:10},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(5).to({startPosition:10},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(7).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(10).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(24).to({startPosition:10},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(33).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(78));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.1,-186.2,226.1,186.9);


(lib.PopsDesign_Freezerburn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.instance = new lib.HandR("single",2);
	this.instance.setTransform(120.1,314.4,0.992,1.01,30.9,0,0,23.1,27.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A62E52").ss(7,1,1).p("AHECRQjZDWi9BPQi8BOiUhBQiVhBgLjHQgLjGBdjHQBMiiBchs");
	this.shape.setTransform(72.4,301.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).to({state:[]},1).wait(136));

	// Layer 12
	this.instance_1 = new lib.HandR("single",0);
	this.instance_1.setTransform(111.7,315.7,1,1.007,-1.7,0,0,18.3,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A62E52").s().p("AACBwQgKgFgKgIQgMgJgIgLIgCAAQgnANgigYQgSgMgGgUQgDgmAPgkQAJgnAcgbQAIgHAKgEQAOgEAPABQASAAARAFQAYAIANAYQAHgJANgBQAbgCAWARQAYASAKAbQAIAXgGAWQgGAkgVAeQgRARgTALQgUALgUAAQgQAAgPgHgAAthKIgJAGQAFAfgMAgQgIAdgUAXQgLAPgQALQALAOAPALQAOALASgCQAQgDAOgLQAKgHAIgIQAkgkAGguQADgVgNgQQgRgVgXgLQgHgEgIAAQgGAAgGADgAg2BCQAVgGAPgOIAOgSQATgeAFgmQADglgegSQgVgKgVACQgIAAgHACQgaANgMAaIgcBYQAUAqAvgBQAFAAAEgBg");
	this.shape_1.setTransform(59.5,243.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F33C6D").s().p("AjCEbQg7gOgKgzQgMgyAphEQAphDBbg0QAfgUATgLIgEAAQgMgCgxgxQgwgxgFglQgGgmAigjQAhgkArANQAqANAaAyQAbAyANAKQAMALA4AdQA4AdAgAdQAgAcAPAUQAQARAFAmQADAWgGAYQgSBDgqAdQAVgeAHgkQAFgYgHgXQgKgbgYgSQgXgRgbACQgNABgHAJQgNgWgZgIQgSgFgSAAQgPgBgNAEQgLAEgIAHQgaAZgIAnQgPAkACAoQgYA4gPAXQgOAXgVAcQgNASgeAAQgPAAgTgEgABdDJQgPgLgMgOQARgLAMgPQAUgXAJgfQALgggFgfIAKgGQAMgGAPAHQAXALAQAVQANAQgDAVQgGAwgjAkQgJAIgJAHQgPALgPADIgHAAQgOAAgNgJgAAeCqQgtABgVgqIAdhaQAJgaAagNQAIAAAIAAQAUgCAVAIQAhASgDAlQgFAmgVAgIgPASQgOAOgVAGIgGABIgDAAg");
	this.shape_2.setTransform(50,233.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A62E52").s().p("AAJCIQgngBgXghQgHgKgFgNQgGgNgBgOIgBgCQgpgJgSgnQgJgRAFgVQATglAggWQAcgeAmgJQALgCAJACQAOADANAJQAPAKANANQASAVgBAbQALgDAMAFQAYANALAaQAMAagGAdQgGAZgRARQgZAdghAOQgVAGgUAAIgGAAgAAgANQgYAXgcAKQgSAFgUABQACASAIATQAHARASAHQAPAGAQgCQAMAAAMgDQAxgNAfgnQANgRgCgVQgEgZgOgVQgJgOgOgBIgLAAQgMAegbAUgAg1hoIhIA/QgEAuAqAXIAIAEQAVAGAVgFIAWgIQAhgSAYgcQAXgfgUggQgNgUgTgJIgNgGIgFAAQgbAAgVAPg");
	this.shape_3.setTransform(41.5,183.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F33C6D").s().p("ADLD0QARgSAGgYQAGgdgMgcQgLgbgYgNQgMgFgLADQABgbgSgUQgNgOgPgKQgNgIgOgEQgLgCgLACQgmAJgcAeQgeAWgTAlQgyAlgZALIg6AbQggAOgrgrQgrgrAQgxQARgyBHgkQBHglBtAAIA6AAIgEgDQgKgIgQhEQgPhEANgkQAPgjAwgNQAwgOAeAiQAeAhgCA6QgCA6AGAQQAFAQAhA3QAiA1AMApQAOAqADAZQAEAZgQAkQgJAVgSARQgzAxgzAEQAhgPAZgcgABAEOQgSgHgHgSQgIgSgCgSQAUgBASgGQAegKAYgXQAbgVAMgeIALAAQAOABAJAOQAOAVAEAbQACAVgNARQgfAngxAMQgMADgMABIgJAAQgNAAgLgEgAAIC8IgIgDQgogYAEgwIBGg+QAYgSAeACIAOAGQATAKANAUQAUAggXAfQgYAegjARIgWAIQgJADgKAAQgLAAgMgEg");
	this.shape_4.setTransform(32.6,168.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A62E52").s().p("AgyB+QgWgMgQgRQgcgeAIgnQACgNAFgMQAGgLAIgLIAAgCQgWgkAPgnQAIgVARgLQAogNAkAHQApgBAiAVQAJAGAGAJQAIANADAOQADATAAASQgBAcgVAQQAKAFAFAMQAIAbgLAaQgLAcgZARQgWANgYAAIgNAAQgdAAgbgLgAhgAWQgHASAHARQAHAPAOALQAJAIALAGQArAbAvgGQAWgCANgRQARgWAEgZQAEgQgJgLIgIgIQgfANghgEQgggBgbgNQgRgKgPgLQgMAMgHATgAhRguIAEAIQAKATATALIAVAIQAjANAmgEQAmgGAJgjQAEgXgGgUIgFgPQgVgWgcgFIhegHQgkAgAMAug");
	this.shape_5.setTransform(36.6,158.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F33C6D").s().p("AAKD7QhGgBglgiQAhAOAmgDQAYAAAUgNQAYgRAMgcQALgagJgbQgEgMgKgFQAVgSABgcQAAgSgDgTQgDgOgIgLQgGgJgJgGQgigVgnABQgmgHgoANQg9gKgagJQgagJgigNQgggNAAg9QgBg9AwgXQAvgYBMAYQBNAYBLBNIAqAqIgBgEQgBgMAlg9QAkg8AkgNQAjgPAsAYQArAZgCAsQgDAtgqAoQgrAogHAPQgIAOgPA9QgPA+gUAnQgUAngQAUQgPAUgkAOQgUAIgXAAIgDAAgAhnC7QgKgGgJgIQgOgLgHgPQgHgRAHgSQAHgTAMgOQAOANASAKQAbANAhABQAgAEAfgNIAHAIQAKALgEAQQgEAZgRAWQgOARgTACIgQABQgpAAgkgWgAhKBaIgVgKQgTgLgKgTIgEgIQgNgsAlggIBgAHQAaAFAUAWIAGANQAGAUgEAXQgJAlglAGIgSABQgcAAgcgKg");
	this.shape_6.setTransform(41.3,149.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A62E52").s().p("AgyB+QgWgMgPgRQgdgeAHgnQADgNAFgMQAGgLAIgLIAAgCQgWgkAPgnQAHgVATgLQAngNAkAHQApgBAiAVQAJAGAGAJQAIANADAOQADATAAASQgBAcgUAQQAJAFAEAMQAKAbgMAaQgMAcgYARQgVANgZAAIgNAAQgdAAgbgLgAhgAWQgHASAHARQAHAPAOALQAJAIAKAGQAsAbAwgGQAUgCAOgRQARgWAEgZQAEgQgKgLIgHgIQgeANgjgEQgegBgcgNQgRgKgPgLQgMAMgHATgAhRguIAEAIQAKATATALIAVAIQAjANAmgEQAmgGAJgjQAFgXgHgUIgGgPQgTgWgdgFIhegHQgkAgAMAug");
	this.shape_7.setTransform(37.4,146.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A62E52").s().p("AgyB+QgWgMgPgRQgdgeAHgnQADgNAFgMQAGgLAIgLIAAgCQgWgkAPgnQAHgVATgLQAngNAkAHQApgBAiAVQAJAGAGAJQAIANADAOQADATAAASQgBAcgUAQQAJAFAEAMQAKAbgMAaQgMAcgYARQgVANgZAAIgOAAQgcAAgbgLgAhgAWQgHASAHARQAHAPAOALQAJAIAKAGQAsAbAwgGQAUgCAOgRQARgWAEgZQAEgQgKgLIgHgIQgeANgjgEQgegBgcgNQgRgKgPgLQgMAMgHATgAhRguIAEAIQAKATATALIAVAIQAjANAmgEQAmgGAJgjQAFgXgHgUIgGgPQgTgWgdgFIhegHQgkAgAMAug");
	this.shape_8.setTransform(37.4,161.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A62E52").s().p("Ag1B9QgVgNgPgRQgcgeAIgnQACgMAGgNQAGgLAJgLIAAgCQgWgkAQgnQAIgUASgMQAogLAkAHQApAAAhAVQAJAGAGAKQAIANACAOQAEATgCASQgBAbgVAQQAKAGAFAMQAIAbgMAaQgMAcgZAQQgWANgYgBIgIABQgfAAgfgNgAhgAUQgIARAHASQAHAPANAMIATAOQAsAbAwgFQAUgCAOgQQARgVAFgaQAFgPgKgLIgIgJQgeANgigFQgfgBgcgPQgQgJgPgLQgLAMgIASgAhQgwIADAJQALATASALIAVAJQAiANAngEQAmgFAJgjQAGgWgHgVQgCgHgDgHQgUgXgcgFIhegJQglAfAMAug");
	this.shape_9.setTransform(38.5,152.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F33C6D").s().p("AACD8QhFgCgmgjQAiAOAmgCQAYABAUgNQAZgQAMgcQAMgagIgbQgFgMgKgGQAVgSABgbQACgSgEgTQgCgOgIgLQgGgKgJgGQgggVgoAAQgmgHgoALQg9gKgagKIg7gXQghgOACg8QAAg9AwgXQAwgWBMAZQBMAZBJBOIAqArIgBgEQgBgMAmg8QAlg7AkgNQAkgPArAaQArAZgDAsQgEAtgrAnQgrAngIAPQgIAPgQA8QgQA+gVAnQgVAmgPAUQgQAUglANQgSAHgWAAIgGAAgAhuC6IgTgOQgNgMgHgPQgHgSAIgRQAIgSALgOQAPANAQAJQAcAPAhABQAiAFAcgNIAIAJQAKALgFAPQgFAagRAVQgOAQgSACIgQABQgpAAglgXgAhPBaIgVgLQgSgLgLgTIgDgJQgMgsAlgfIBgAJQAaAFAUAVQADAHACAHQAHAVgGAWQgJAlgkAFIgQABQgeAAgdgKg");
	this.shape_10.setTransform(43.7,143.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A62E52").s().p("AALCHQgjAAghgPQgUgNgOgRQgaggAJglQADgMAGgKQAHgNAJgKIAAgCQgTgkAQgmQAJgTASgLQAngKAkAKQAoABAgAWQAJAHAEAKQAHAMACAOQADASgCASQgDAbgUAPQAJAGADAMQAHAbgMAYQgNAbgZAPQgUALgVAAIgFgBgAhfAPQgIARAGASQAGAPANAMIASAPQApAcAvgCQAVgCAOgPQASgUAGgZQAEgPgIgLIgHgIQgeAKgigGQgegCgbgQQgPgIgOgOQgMAOgJAPgAhLgyIACAIQAJATASAMIAUALQAhANAmgCQAmgDALgiQAFgWgEgUIgFgPQgTgXgbgGIhbgNQgmAdAKAug");
	this.shape_11.setTransform(49.2,153.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F33C6D").s().p("AgND7QhGgFgkgkQAhAPAlAAQAYACAWgMQAXgPANgbQAMgYgHgbQgDgMgJgGQAUgRADgbQACgSgDgSQgCgOgHgKQgEgKgJgHQgegWgogBQgmgKgnAKQg7gNgZgKIg5gaQgfgOAEg7QADg8AwgUQAvgVBKAcQBJAcBFBQIAnAsIgBgFQgBgMAog4QAng5AlgLQAjgNApAbQApAbgFAsQgFArgsAlQgsAkgJAOQgIAMgSA8QgTA9gWAlQgWAkgQATQgQATgmALQgPAGgRAAIgKgBgAh6C2IgSgPQgNgMgGgPQgGgSAIgRQAJgRAMgOQAOAPAPAJQAbAQAgACQAiAGAcgKIAHAIQAIALgEAPQgGAZgSAUQgMAPgVACIgIAAQgsAAgmgagAhYBYIgUgLQgSgMgJgTIgCgIQgKgsAmgdIBdANQAZAGATAVIAFAPQAEAUgFAWQgLAkgkADIgJABQghAAgfgOg");
	this.shape_12.setTransform(55.4,144.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A62E52").s().p("AgFCIQglgEgegTQgTgQgLgTQgXgiAPglQAEgJAHgLQAIgMALgJIAAgBQgOgnAVgjQALgTATgIQApgEAiAOQAnAGAcAaQAIAHAFALQAFANAAAPQAAASgEARQgGAZgXAOQAJAHACAMQADAbgQAXQgQAagbALQgPAGgPAAIgOgCgAhhAEQgKAQAEASQAEAPALAOQAHAJAJAIQAlAhAvAEQAUABARgNQAUgSAJgXQAHgPgIgMIgGgJQgfAGgggKQgegGgYgTQgPgJgMgQQgNALgLAPgAhFg7IABAIQAHAVAQAOIASAOQAgARAlACQAmACAPggQAJgVgDgVIgDgPQgPgZgagKIhZgYQgpAXAEAvg");
	this.shape_13.setTransform(58.3,150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F33C6D").s().p("AhAEEQhEgPgfgnQAfATAkAEQAYAFAXgJQAbgLAQgaQAOgXgEgbQgCgMgHgHQAVgOAGgbQAFgRgBgSQAAgPgFgNQgEgLgIgFQgagagogGQgkgOgoAEQg5gUgYgOIg1ggQgdgSALg7QALg6AygOQAygOBFAlQBFAlA6BYQAVAdAMATIAAgEQABgNAvgyQAugzAlgIQAlgHAlAgQAlAfgKArQgLAqgwAfQgwAdgKANQgKAMgaA6QgaA5gbAiQgaAigTAQQgSARglAGQgKADgKAAQgMAAgNgDgAhNDWQgxgEglghQgIgIgIgJQgLgOgEgPQgEgSALgQQAKgRANgLQANAQAOALQAZATAfAGQAhAKAfgGIAGAJQAHAMgHAPQgJAXgUASQgPANgTAAIgDgBgAguBuQgmgCghgTIgTgOQgQgOgGgVIgCgIQgEgtAqgXIBaAYQAbAKANAXIADAPQADAVgJAVQgNAhgiAAIgEgBg");
	this.shape_14.setTransform(67.3,141.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A62E52").s().p("AAMCbQgpgTgkghQgYgZgQgZQgdgvALgiQADgMAHgJQAHgLALgGIAAgCQgWgxAUggQAJgRAVgBQAtAKApAdQAtAWAkAoQAKAMAGANQAHARADARQACASgCATQgDAbgYAHQALAMAEAOQAIAggPAVQgPAWgcADIgFAAQgXAAgYgNgAhsgcQgKAOAHAUQAHATAPAUQAJAOALAMQAuAzA2AXQAYAJAQgJQAUgNAHgXQAFgOgJgQIgIgNQgjgEglgYQgjgTgegcQgTgTgQgXQgMAJgKAOgAhXhaIAEAKQAKAaAUAVIAXAXQAmAgArARQAqAQANghQAHgUgGgXIgFgSQgVgigfgVIhog+QgrALAKA3g");
	this.shape_15.setTransform(76.2,191);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F33C6D").s().p("AAgFMQgYgDgZgPQhQgqgng4QAkAhArATQAbAOAZgCQAagCAPgWQAPgVgIggQgEgPgLgLQAYgHADgcQACgSgCgVQgDgRgHgQQgGgOgKgLQgigpgtgUQgrgdgtgKQhDgsgdgZIhAg4QgkggAFg+QAEg/A2AEQA3ADBTBEQBTBDBOB7IAtBEIgBgGQgBgNAtgoQAugpAoAGQApAFAuAzQAvAvgGAtQgGAsgyAQQgzARgJALQgKAKgVA3QgVA4gaAcQgZAcgSAMQgMAHgWAAQgMAAgPgCgAgmECQg4gXgug0QgLgMgJgNQgPgUgHgTQgHgWAKgOQAKgOAMgJQAQAXATATQAeAdAlAUQAlAYAhAEIAIAMQAJARgFAOQgHAXgUANQgGAEgKAAQgKAAgMgEgAgSCYQgrgRgogjIgXgWQgUgWgKgZIgEgLQgKg1ArgLIBqA8QAdAVAVAiIAFATQAGAYgHAVQgJAWgWAAQgIAAgOgFg");
	this.shape_16.setTransform(83.3,179.7);

	this.instance_2 = new lib.HandRcopy("synched",4);
	this.instance_2.setTransform(177.2,419.4,1.161,1.161,13.3,0,0,23.1,27.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A62E52").ss(7,1,1).p("AHECVQjhDLjABLQi+BLiSg+QiTg+gDi9QgEi9Bki9QBbirBthr");
	this.shape_17.setTransform(65.4,303.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A62E52").ss(7,1,1).p("AHECYQjZDWi9BPQi8BOiUhBQiVhBgLjHQgLjGBdjHQBQitBkhu");
	this.shape_18.setTransform(72.4,300.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1.007,rotation:-1.7,x:111.7,y:315.7,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},5).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.006,rotation:2.4,x:100.2,y:343.9,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1.006,rotation:4.7,x:98.2,y:356.6,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1.006,rotation:6,x:96.9,y:362.6,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1.458,rotation:6.5,x:98.9,y:323.1,scaleX:1.448,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},2).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_6,p:{x:41.3,y:149.1}},{t:this.shape_5}]},1).to({state:[{t:this.shape_6,p:{x:42.1,y:137.4}},{t:this.shape_7,p:{y:146.4}}]},2).to({state:[{t:this.shape_6,p:{x:42.1,y:144.8}},{t:this.shape_7,p:{y:153.8}}]},2).to({state:[{t:this.shape_6,p:{x:42.1,y:152.3}},{t:this.shape_8}]},9).to({state:[{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_12,p:{x:55.4,y:144.1}},{t:this.shape_11,p:{x:49.2,y:153.1}}]},2).to({state:[{t:this.shape_11,p:{x:57.5,y:144.8}},{t:this.shape_12,p:{x:63.7,y:135.8}}]},1).to({state:[{t:this.shape_12,p:{x:65.4,y:131.5}},{t:this.shape_11,p:{x:59.2,y:140.5}}]},1).to({state:[{t:this.shape_12,p:{x:64.6,y:134.9}},{t:this.shape_11,p:{x:58.4,y:143.9}}]},2).to({state:[{t:this.shape_12,p:{x:64.6,y:136.6}},{t:this.shape_11,p:{x:58.4,y:145.6}}]},2).to({state:[{t:this.shape_14},{t:this.shape_13}]},16).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.445,rotation:-91.7,x:136.2,y:289.8,scaleX:2.347,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.996,rotation:0,x:183.3,y:354.8,scaleX:1.684,skewX:-15.4,skewY:-19.1,regY:19.6,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.445,rotation:28.9,x:182.1,y:416.8,scaleX:1.435,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.445,rotation:45.5,x:180.1,y:447.9,scaleX:1.435,skewX:0,skewY:0,regY:19.5,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.444,rotation:50.2,x:180.1,y:453,scaleX:1.435,skewX:0,skewY:0,regY:19.5,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.444,rotation:46.5,x:180.2,y:441.4,scaleX:1.434,skewX:0,skewY:0,regY:19.5,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.444,rotation:42.2,x:180.1,y:424.8,scaleX:1.434,skewX:0,skewY:0,regY:19.5,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{regY:27.6,scaleX:1.161,scaleY:1.161,rotation:13.3,skewX:0,skewY:0,x:177.2,y:419.4,startPosition:4,mode:"synched",regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.444,rotation:32.2,x:177.8,y:429.2,scaleX:1.435,skewX:0,skewY:0,regY:19.5,startPosition:0}}]},9).to({state:[{t:this.instance_1,p:{regX:18.2,scaleY:1.444,rotation:32.7,x:177.1,y:436.8,scaleX:1.435,skewX:0,skewY:0,regY:19.5,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:21.9,scaleY:1.712,rotation:0,x:231.7,y:442.2,scaleX:1.957,skewX:35.5,skewY:66.5,regY:18.9,startPosition:0}}]},3).to({state:[{t:this.instance_1,p:{regX:14.1,scaleY:1.302,rotation:0,x:270.2,y:367.8,scaleX:1.457,skewX:28.2,skewY:40.1,regY:14.1,startPosition:0}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:2.713,scaleY:1.38,rotation:0,skewX:46,skewY:13.3,x:142.2,y:215,startPosition:3,mode:"synched",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.6,scaleX:1.773,scaleY:1.303,rotation:0,skewX:40.3,skewY:13.3,x:38.1,y:121.8,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.6,scaleX:1.161,scaleY:1.213,rotation:0,skewX:0.2,skewY:-16.6,x:-34.6,y:80.2,startPosition:0,mode:"single",regX:23.2}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.161,scaleY:1.161,rotation:-31.6,skewX:0,skewY:0,x:-80.1,y:45.4,startPosition:0,mode:"single",regX:23.1}}]},2).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.161,scaleY:1.161,rotation:-46.6,skewX:0,skewY:0,x:-96.7,y:53.7,startPosition:0,mode:"single",regX:23.1}}]},2).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.159,scaleY:1.159,rotation:-51.3,skewX:0,skewY:0,x:-104.3,y:69,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.159,scaleY:1.159,rotation:-55,skewX:0,skewY:0,x:-110.5,y:81.4,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.159,scaleY:1.159,rotation:-57.8,skewX:0,skewY:0,x:-115.4,y:91.1,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.159,scaleY:1.159,rotation:-60.1,skewX:0,skewY:0,x:-118.8,y:98,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.159,scaleY:1.159,rotation:-61.3,skewX:0,skewY:0,x:-120.9,y:102.2,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.161,scaleY:1.161,rotation:-61.6,skewX:0,skewY:0,x:-121.7,y:103.5,startPosition:0,mode:"single",regX:23.1}}]},1).to({state:[{t:this.instance_2,p:{regY:27.7,scaleX:1.161,scaleY:1.161,rotation:-46.6,skewX:0,skewY:0,x:-109.3,y:103.5,startPosition:0,mode:"single",regX:23.1}}]},31).to({state:[{t:this.instance_1,p:{regX:3.1,scaleY:0.999,rotation:-78.9,x:-64.1,y:119.1,scaleX:1.117,skewX:0,skewY:0,regY:32.5,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:3.1,scaleY:0.999,rotation:-46.7,x:-10.9,y:151.7,scaleX:0.999,skewX:0,skewY:0,regY:32.5,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1,rotation:-16.2,x:68.9,y:228.8,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1,rotation:-14.9,x:92.5,y:284.6,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},1).to({state:[{t:this.instance_1,p:{regX:18.3,scaleY:1,rotation:0,x:109.1,y:309.5,scaleX:1,skewX:0,skewY:0,regY:19.6,startPosition:0}}]},1).to({state:[{t:this.shape_17},{t:this.instance_1,p:{regX:23.1,scaleY:0.992,rotation:0,x:113.1,y:316.8,scaleX:0.963,skewX:33.8,skewY:30.2,regY:27.7,startPosition:2}}]},1).to({state:[]},2).to({state:[{t:this.shape_18},{t:this.instance_1,p:{regX:23.1,scaleY:1.01,rotation:30.9,x:120.1,y:314.4,scaleX:0.992,skewX:0,skewY:0,regY:27.7,startPosition:2}}]},2).wait(1));

	// Layer 13
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A62E52").ss(8,1,1).p("AHcBgQjbC6kgBNQkhBNhvibQhwibCtj0QBqiYCVhy");
	this.shape_19.setTransform(46.3,314.9);

	this.instance_3 = new lib.handL("single",0);
	this.instance_3.setTransform(339.2,297.8,1.174,1.174,-21.8,0,0,16.2,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A62E52").ss(8,1,1).p("ADQEOQhkDOhoA/Qh2BJg2hmQg2hmAUi4QATi5A2jPQA2jQBGjB");
	this.shape_20.setTransform(51.5,238.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A62E52").ss(8,1,1).p("ACyHKQhZCGhIADQhjAEgsgvQgsgvgGijQgFiiAlj4QAlj5A7kV");
	this.shape_21.setTransform(52.6,215);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A62E52").ss(8,1,1).p("ABLqeQjEJ7gqECQgpEEBQB1QBPB1CShMQApgVAkgh");
	this.shape_22.setTransform(52.4,190);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A62E52").ss(8,1,1).p("ABFqeQjFJ7gpECQgpEEBQB1QBPB1CShMQAvgZAqgo");
	this.shape_23.setTransform(53,194.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A62E52").ss(8,1,1).p("AARo6QiWI4gQDlQgQDnBCBNQBCBNCShUQAVgMAUgQ");
	this.shape_24.setTransform(49.5,208.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A62E52").ss(8,1,1).p("AAbIkQgzgfgUhMQgqidAkkMQAjkKBTkp");
	this.shape_25.setTransform(40.7,208.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A62E52").ss(8,1,1).p("AgBIwQhUgrgRh+QgXi1BHjiQBEjlBek6");
	this.shape_26.setTransform(46,211.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A62E52").ss(8,1,1).p("AgdJaQhshhAOigQAPi2AvixQAvi0CMmX");
	this.shape_27.setTransform(52.5,207.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A62E52").ss(8,1,1).p("ACBpuQhYC/hrF/QhuF8BUC1QAjBKA0Ak");
	this.shape_28.setTransform(56.3,205.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A62E52").ss(8,1,1).p("ACBpiQhYDAhrF+QhuF9BUC0QAZA0AhAi");
	this.shape_29.setTransform(56.3,206.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A62E52").ss(8,1,1).p("ACBp4QhYDAhrF+QhuF9BUC0QAuBiBKAg");
	this.shape_30.setTransform(56.3,206.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A62E52").ss(8,1,1).p("AB4ppQhBDWhsGDQhuGBBJCkQAYA2AkAf");
	this.shape_31.setTransform(57.2,208.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A62E52").ss(8,1,1).p("ABqE7QhpB1g7ASQh6AjgihWQghhWCNj9QCKj6C9kN");
	this.shape_32.setTransform(68.6,246.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A62E52").ss(8,1,1).p("AHthTQiJDXjqBtQjdBmjlg6Qi/gxAgjCQAShpA8haQA1hRA9hH");
	this.shape_33.setTransform(97.1,314.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A62E52").ss(8,1,1).p("AKfBuQjIEMlABYQlHBckGjPQkHjPAklJQASinBJiO");
	this.shape_34.setTransform(122.4,347.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A62E52").ss(8,1,1).p("AKWJVQkyAzkvhBQlAhFjZjzQjmkCBFlMQAiimBViF");
	this.shape_35.setTransform(117.7,358.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A62E52").ss(8,1,1).p("AKKKvQiKA6mNitQmLisjDjgQjDjfAXk8QAOjEBBiN");
	this.shape_36.setTransform(124.5,378.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A62E52").ss(8,1,1).p("AKKJkQgYCknGjiQnEjhjDjgQjDjeAXk9QAKiGAhhs");
	this.shape_37.setTransform(124.5,385.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A62E52").ss(8,1,1).p("AHZJsQhOgdhogkQnoirjRjoQjSjnAVkaQAMiuBBiEAJWKdQgCgBgCgB");
	this.shape_38.setTransform(119.5,373.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A62E52").ss(8,1,1).p("AJmJPQh5AdmFiZQmDiZi1i/Qi1i9AnkMQAWiUA5hx");
	this.shape_39.setTransform(118.7,365.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A62E52").ss(8,1,1).p("AJPH8QA6B5nLixQnJixi1i7Qi1i6AnkHQAQhrAkhY");
	this.shape_40.setTransform(117.1,367.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A62E52").ss(8,1,1).p("AJSJZQjjgLk8h0Qk7h0i0jFQi1jDAnkUQAXinBDh7");
	this.shape_41.setTransform(116.8,365.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A62E52").ss(8,1,1).p("AJSJOQjlAKlBhqQk/hpivjaQivjYAnkUQAViZA6h0");
	this.shape_42.setTransform(116.8,366.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A62E52").ss(8,1,1).p("AJSI4QjeAllChvQlBhvixjiQixjhAnkTQASiCAthn");
	this.shape_43.setTransform(116.8,368.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A62E52").ss(8,1,1).p("AJXHnQkmgDjaguQlqhNixjiQiyjhAokTQAJhAAPg5");
	this.shape_44.setTransform(117.2,370.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A62E52").ss(8,1,1).p("AJqMeQi9gMlahmQlYhnjCjvQjCjvAnkRQAnkUCbibQCbicBHgn");
	this.shape_45.setTransform(122.1,352.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A62E52").ss(8,1,1).p("AJHMxQgIgRl/hqQl8hqjYj2QjXj2AskTQAskUChijQChikBJgi");
	this.shape_46.setTransform(123.4,359.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A62E52").ss(8,1,1).p("Atdo6QgOBmAQBwQAtE/CoCfQCpCiD7BQQD5BPEeAzQEdAzETAa");
	this.shape_47.setTransform(133,375.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A62E52").ss(8,1,1).p("AxZkkQBPEmFsCZQFLCKHlAAQEwAADZgpQEGgxC5hz");
	this.shape_48.setTransform(156.1,358.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A62E52").ss(8,1,1).p("AIwoLQl2Ewi3FRQi2FUiuA3QiuA4gdjhQgFgqADgw");
	this.shape_49.setTransform(78.2,253.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A62E52").ss(8,1,1).p("AAoKuQhwAxhXhMQhhhVAKiHQATj/BOjxQBRj3CUjUQBKhmBehW");
	this.shape_50.setTransform(1.7,196);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#A62E52").ss(8,1,1).p("AFTmyQkIDCjhDpQjiDmAuCKQAuCJCih1QAsggA1g1");
	this.shape_51.setTransform(34.9,272.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A62E52").ss(8,1,1).p("AiEklQgvAvgsAwQiqC3gKCmQgKCoDGgeQDHgeCYiZQCaiYByiS");
	this.shape_52.setTransform(52,304);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},11).to({state:[{t:this.instance_3,p:{scaleX:1.174,scaleY:1.174,rotation:-21.8,x:339.2,y:297.8,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_20},{t:this.instance_3,p:{scaleX:1.198,scaleY:1.198,rotation:-33.2,x:378.6,y:280.9,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_21},{t:this.instance_3,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:391.7,y:260.3,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_22},{t:this.instance_3,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:392.5,y:256.9,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_23},{t:this.instance_3,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:392.5,y:259.4,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_24},{t:this.instance_3,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:392.5,y:255.2,regX:16.2,regY:15}}]},9).to({state:[{t:this.shape_25},{t:this.instance_3,p:{scaleX:1.198,scaleY:1.198,rotation:-36,x:391.7,y:277.3,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_26},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:315.7,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_27},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:332.3,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_28},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:340.6,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_29},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:340.4,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_30},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:332.9,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_31},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:330.4,regX:16.2,regY:15}}]},16).to({state:[{t:this.shape_32},{t:this.instance_3,p:{scaleX:1.175,scaleY:1.175,rotation:-29.2,x:379.2,y:335.3,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_33},{t:this.instance_3,p:{scaleX:1.173,scaleY:1.173,rotation:-22.4,x:384.4,y:336,regX:16.3,regY:15}}]},1).to({state:[{t:this.shape_34},{t:this.instance_3,p:{scaleX:1.164,scaleY:1.164,rotation:-15.4,x:381.6,y:335.5,regX:16.1,regY:14.8}}]},2).to({state:[{t:this.shape_35},{t:this.instance_3,p:{scaleX:1.165,scaleY:1.165,rotation:-14.1,x:375.2,y:329.1,regX:16.1,regY:14.9}}]},2).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},2).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},4).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47},{t:this.instance_3,p:{scaleX:1.76,scaleY:1.03,rotation:-9.4,x:353.8,y:362.9,regX:16.1,regY:14.8}}]},3).to({state:[{t:this.shape_48},{t:this.instance_3,p:{scaleX:1.819,scaleY:1.021,rotation:-16.7,x:392,y:282.6,regX:16.3,regY:14.9}}]},1).to({state:[{t:this.shape_49},{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:-18.8,x:380.8,y:211,regX:16.2,regY:14.9}}]},1).to({state:[{t:this.shape_50},{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:-21.6,x:383.6,y:176.8,regX:16.2,regY:14.8}}]},1).to({state:[]},1).to({state:[{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:-21.4,x:381.3,y:204.4,regX:16.2,regY:14.8}}]},41).to({state:[{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:-18.9,x:386.4,y:228.7,regX:16.2,regY:14.8}}]},2).to({state:[{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:-16.6,x:374.7,y:263.3,regX:16.2,regY:14.8}}]},2).to({state:[{t:this.shape_51},{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:-8.5,x:343.8,y:297.4,regX:16.3,regY:14.8}}]},1).to({state:[{t:this.shape_52},{t:this.instance_3,p:{scaleX:0.999,scaleY:0.999,rotation:-6.2,x:308.9,y:301.3,regX:16.3,regY:14.9}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:300.7,y:304.7,regX:16.2,regY:14.8}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:295.4,y:292.8,regX:16.2,regY:14.8}}]},1).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:298,y:281.1,regX:16.2,regY:14.8}}]},2).to({state:[{t:this.instance_3,p:{scaleX:1,scaleY:1,rotation:0,x:298,y:284.5,regX:16.2,regY:14.8}}]},2).wait(1));

	// ARM-R
	/* Layers with classic tweens must contain only a single symbol instance. */

	// GUITAR
	this.instance_4 = new lib.GUITAR("synched",0);
	this.instance_4.setTransform(221.5,324.6,1,1,0,0,0,179.5,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:1.01,skewX:-1.1,skewY:-0.8,x:221.4,y:317.5},0).wait(1).to({skewX:-1.9,skewY:-1.6,x:222.1,y:311.3},0).wait(1).to({x:221.3,y:309.6},0).wait(2).to({rotation:-1.6,skewX:0,skewY:0,x:222.3,y:313},0).wait(2).to({scaleY:1.01,rotation:2.4,x:218.8,y:339.1},0).wait(1).to({rotation:4.7,x:216.7,y:356.4},0).wait(1).to({regX:179.6,regY:92.3,rotation:6,x:215.5,y:365.2},0).wait(2).to({regY:92.2,scaleX:1.02,scaleY:1.03,rotation:-1.4,x:220.4,y:368.1},0).wait(1).to({regX:179.5,scaleX:1.17,scaleY:1.17,rotation:-21.7,x:273.3,y:374.8},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-33.1,x:328.4,y:371.2},0).wait(1).to({rotation:-36.9,x:347.5,y:353.8},0).wait(2).to({x:348.3,y:350.4},0).wait(2).to({y:352.9},0).wait(9).to({y:348.7},0).wait(2).to({regX:179.6,rotation:-35.9,x:345.9,y:369.9},0).wait(2).to({regX:179.5,scaleX:1.18,scaleY:1.18,rotation:-33.4,x:332.6,y:404.5},0).wait(1).to({y:421.1},0).wait(1).to({y:429.4},0).wait(2).to({y:426.9},0).wait(2).to({y:421.8},0).wait(16).to({y:419.2},0).wait(1).to({rotation:-29.1,x:323.8,y:420.2},0).wait(1).to({regX:179.4,regY:92.1,scaleX:1.17,scaleY:1.17,rotation:-22.3,x:319.3,y:413.6},0).wait(2).to({regX:179.6,regY:92.2,scaleX:1.16,scaleY:1.16,rotation:-15.3,x:308.4,y:404.2},0).wait(2).to({regX:179.5,scaleX:1.17,scaleY:1.17,rotation:-14,x:302.9,y:395.3},0).wait(2).to({regY:92.3,scaleX:1.16,scaleY:1.16,rotation:-12.5,x:302.2,y:388.2},0).wait(6).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(6).to({rotation:-10.7,x:305.4,y:406.2},0).wait(1).to({regY:92.2,rotation:-10.2,x:306.7,y:416.5},0).wait(3).to({regX:179.6,scaleX:1.03,scaleY:1.03,rotation:-9.3,x:340.1,y:393.1},0).wait(1).to({regX:179.7,scaleX:1.02,scaleY:1.02,rotation:-16.6,x:348.2,y:333},0).wait(1).to({regX:179.5,scaleX:1,scaleY:1,rotation:-18.7,x:330,y:268.7},0).wait(1).to({regX:179.6,regY:92.3,rotation:-21.5,x:327.6,y:242.4},0).wait(1).to({regY:92.2,rotation:-25.6,x:327.2,y:223.4},0).wait(2).to({rotation:-28.4,x:325.6,y:213.4},0).wait(2).to({rotation:-26.1,x:324.7,y:237.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6,y:254.9},0).wait(1).to({y:266.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-20.8,y:275.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:-22.6,y:267.5},0).wait(32).to({scaleX:1,scaleY:1,rotation:-21.3,x:325.1,y:269.6},0).wait(2).to({rotation:-18.8,x:327.4,y:291.4},0).wait(2).to({regY:92.3,rotation:-16.5,x:313.4,y:323.7},0).wait(1).to({regX:179.5,regY:92.2,scaleX:1,scaleY:1,rotation:-8.4,x:274.2,y:348.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.1,x:237.2,y:349.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:224.2,y:344.8},0).wait(1).to({x:219,y:332.9},0).wait(2).to({x:221.5,y:321.2},0).wait(2).to({y:324.6},0).wait(1));

	// Layer 11
	this.instance_5 = new lib.POPSICLEFACE_freezerburn("synched",0);
	this.instance_5.setTransform(156.4,189.5,0.642,0.642,0,0,0,-71.9,-84.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleY:0.65,skewX:-1.1,skewY:-0.8,x:153.3,y:182.7,startPosition:1},0).wait(1).to({skewX:-1.9,skewY:-1.6,x:152,y:177.4,startPosition:2},0).wait(1).to({x:151.2,y:175.7,startPosition:3},0).wait(2).to({rotation:-1.6,skewX:0,skewY:0,x:152.7,y:179.1,startPosition:5},0).wait(2).to({regY:-84.7,rotation:2.4,x:159.4,y:200.5,startPosition:7},0).wait(1).to({rotation:4.7,x:162.9,y:215.5,startPosition:8},0).wait(1).to({rotation:6,x:164.8,y:223.1,startPosition:9},0).wait(2).to({regY:-84.6,scaleX:0.66,scaleY:0.66,rotation:6.5,x:169.7,y:214,startPosition:11},0).wait(1).to({regX:-71.7,scaleX:0.75,scaleY:0.75,rotation:6.8,x:184.8,y:192.8,startPosition:12},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:7.9,x:190.5,y:174.6,startPosition:13},0).wait(1).to({x:193,y:165.4,startPosition:14},0).wait(2).to({x:193.9,y:162,startPosition:16},0).wait(2).to({y:164.6,startPosition:18},0).wait(9).to({y:160.3,startPosition:27},0).wait(2).to({rotation:8.9,x:194.9,y:178.8,startPosition:29},0).wait(2).to({regY:-84.7,scaleX:0.75,scaleY:0.75,rotation:11.4,x:192.7,y:210.7,startPosition:31},0).wait(1).to({y:227.3,startPosition:32},0).wait(1).to({y:235.6,startPosition:33},0).wait(2).to({y:233,startPosition:35},0).wait(2).to({y:227.9,startPosition:37},0).wait(16).to({startPosition:53},0).wait(1).to({rotation:12.2,x:194,y:231.1,startPosition:54},0).wait(1).to({rotation:13.2,x:195.8,y:238,startPosition:55},0).wait(2).to({scaleX:0.75,scaleY:0.75,rotation:14.2,y:242.3,startPosition:57},0).wait(2).to({rotation:15,x:197.1,y:246.5,startPosition:59},0).wait(2).to({regX:-71.8,rotation:16.5,x:199.6,y:253.4,startPosition:61},0).wait(14).to({regX:-71.7,rotation:18.3,x:202.5,y:260.2,startPosition:75},0).wait(1).to({regY:-84.8,rotation:18.8,x:203.3,y:268,startPosition:76},0).wait(3).to({regY:-84.6,scaleX:0.66,scaleY:0.66,rotation:5.5,x:149.5,y:249.2,startPosition:79},0).wait(1).to({regX:-71.8,regY:-84.5,scaleX:0.66,scaleY:0.66,rotation:-1.6,x:129.3,y:237.8,startPosition:80},0).wait(1).to({regY:-84.6,scaleX:0.64,scaleY:0.64,rotation:-3.7,x:112.8,y:188.7,startPosition:81},0).wait(1).to({regX:-71.7,rotation:-6.5,x:106.7,y:172.9,startPosition:82},0).wait(1).to({regX:-71.8,rotation:-7.6,x:105.1,y:166.5,startPosition:83},0).wait(2).to({x:103.4,y:164.8,startPosition:85},0).wait(2).to({x:102.5,y:172.2,startPosition:87},0).wait(1).to({y:189.7,startPosition:88},0).wait(1).to({y:201.4,startPosition:89},0).wait(1).to({y:205.6,startPosition:90},0).wait(2).to({y:202.2,startPosition:92},0).wait(32).to({rotation:-6.3,x:104.4,y:208.3,startPosition:124},0).wait(2).to({regX:-71.9,rotation:-3.8,x:110,y:220.5,startPosition:126},0).wait(2).to({regY:-84.7,scaleX:0.64,scaleY:0.64,rotation:-1.5,x:117,y:226.5,startPosition:128},0).wait(1).to({regX:-71.8,regY:-84.6,scaleX:0.64,scaleY:0.64,rotation:-1.1,x:135.2,y:223.7,startPosition:129},0).wait(1).to({rotation:0,x:145.5,y:214.4,startPosition:130},0).wait(1).to({x:153.8,y:206.1,startPosition:131},0).wait(1).to({y:197.8,startPosition:132},0).wait(2).to({x:156.4,y:186.1,startPosition:134},0).wait(2).to({y:189.5,startPosition:136},0).wait(1));

	// BODY
	this.instance_6 = new lib.PosicleBody();
	this.instance_6.setTransform(70.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:70.5,y:0,rotation:0,scaleX:1}}]}).to({state:[{t:this.instance_6,p:{scaleY:1.007,skewX:-1.2,skewY:-0.9,x:63.2,y:-6.4,rotation:0,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.007,skewX:-2,skewY:-1.7,x:59.4,y:-10.4,rotation:0,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.007,skewX:-2,skewY:-1.7,x:58.6,y:-12.1,rotation:0,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.007,skewX:0,skewY:0,x:60.9,y:-8.7,rotation:-1.7,scaleX:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.006,skewX:0,skewY:0,x:81.8,y:6.4,rotation:2.4,scaleX:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.006,skewX:0,skewY:0,x:93.1,y:18.6,rotation:4.7,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.006,skewX:0,skewY:0,x:99.4,y:24.7,rotation:6,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.03,skewX:0,skewY:0,x:104.4,y:10.2,rotation:6.5,scaleX:1.023}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:111,y:-40.1,rotation:6.8,scaleX:1.175}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.198,skewX:0,skewY:0,x:119.8,y:-64.2,rotation:7.9,scaleX:1.198}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.198,skewX:0,skewY:0,x:122.3,y:-73.4,rotation:7.9,scaleX:1.198}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.198,skewX:0,skewY:0,x:123.2,y:-76.8,rotation:7.9,scaleX:1.198}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.198,skewX:0,skewY:0,x:123.2,y:-74.2,rotation:7.9,scaleX:1.198}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.198,skewX:0,skewY:0,x:123.2,y:-78.5,rotation:7.9,scaleX:1.198}}]},9).to({state:[{t:this.instance_6,p:{scaleY:1.198,skewX:0,skewY:0,x:128.4,y:-61.2,rotation:8.9,scaleX:1.198}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:137.8,y:-27.3,rotation:11.4,scaleX:1.175}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:137.8,y:-10.7,rotation:11.4,scaleX:1.175}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:137.8,y:-2.4,rotation:11.4,scaleX:1.175}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:137.8,y:-5,rotation:11.4,scaleX:1.175}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:137.8,y:-10.1,rotation:11.4,scaleX:1.175}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:137.8,y:-10.1,rotation:11.4,scaleX:1.175}}]},16).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:142.4,y:-7.6,rotation:12.2,scaleX:1.175}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.175,skewX:0,skewY:0,x:148.5,y:-1.6,rotation:13.2,scaleX:1.175}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.166,skewX:0,skewY:0,x:153.1,y:3.7,rotation:14.2,scaleX:1.166}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.166,skewX:0,skewY:0,x:157.7,y:7.5,rotation:15,scaleX:1.166}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.165,skewX:0,skewY:0,x:166.5,y:13.4,rotation:16.5,scaleX:1.165}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1.165,skewX:0,skewY:0,x:176.7,y:19.3,rotation:18.3,scaleX:1.165}}]},14).to({state:[{t:this.instance_6,p:{scaleY:1.165,skewX:0,skewY:0,x:179.8,y:27,rotation:18.8,scaleX:1.165}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1.03,skewX:0,skewY:0,x:80.1,y:46.5,rotation:5.5,scaleX:1.03}}]},3).to({state:[{t:this.instance_6,p:{scaleY:1.021,skewX:0,skewY:0,x:35.3,y:47.2,rotation:-1.7,scaleX:1.021}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.999,skewX:0,skewY:0,x:14.1,y:5.6,rotation:-3.8,scaleX:0.999}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-0.8,y:-5,rotation:-6.6,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-5.7,y:-9.5,rotation:-7.7,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-7.4,y:-11.2,rotation:-7.7,scaleX:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-8.2,y:-3.7,rotation:-7.7,scaleX:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-8.2,y:13.7,rotation:-7.7,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-8.2,y:25.4,rotation:-7.7,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-8.2,y:29.6,rotation:-7.7,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:-8.2,y:26.2,rotation:-7.7,scaleX:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.999,skewX:0,skewY:0,x:-2.3,y:29.8,rotation:-6.4,scaleX:0.999}}]},32).to({state:[{t:this.instance_6,p:{scaleY:0.999,skewX:0,skewY:0,x:11.1,y:37.6,rotation:-3.9,scaleX:0.999}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.999,skewX:0,skewY:0,x:25.3,y:39.9,rotation:-1.6,scaleX:0.999}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:45.1,y:36.3,rotation:-1.2,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:59.5,y:25.1,rotation:0,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:68,y:16.6,rotation:0,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:68,y:8.3,rotation:0,scaleX:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:70.5,y:-3.3,rotation:0,scaleX:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,skewX:0,skewY:0,x:70.5,y:0,rotation:0,scaleX:1}}]},2).wait(1));

	// ARM -L
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A62E52").s().p("AkRAkQhCiigwjDQgliSAAgbQAAgVAMgQQAMgQAPgCQAogGAGBLQANBPARA7IAwCHQAfBXAMA3QApDDB/CoQB/CqBxAAQBUAAAriwQAOg3AIhCIAFg4QAAgdgHhQIgShlQAAgOAGgLQAKgSAYAAQArAAAPB+QAIA9gBBAQAAASgHA3QgLBSgTBEQg7DWhyAAQkZAAjOoCg");
	this.shape_53.setTransform(258,293.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A62E52").s().p("AkMAoQhFiig1jDQgoiTgBgbQAAgUAMgSQALgPAPgDQAogHAIBMQAOBPATA7IAyCHQAiBYANA2QAtDECDCmQCDCpBxgCQBUgBAniyQANg4AGhCIAEg4QAAgegKhPQgUhjAAgEQAAgOAFgLQAKgSAYAAQArgBASB+QAKA9AABBQABASgHA3QgIBTgSBFQg2DZhyACIgGAAQkWAAjXn9g");
	this.shape_54.setTransform(256.8,285.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A62E52").s().p("AkIArQhIiig4jCQgpiSgBgbQgBgVALgRQALgQAQgDQAngHAJBLQAQBQATA6QAHAVAuBxQAiBXAOA4QAwDCCGClQCFCnBwgEQBUgCAlizQAMg3AFhDIADg5QgBgdgKhOQgVhjAAgFQgBgOAFgKQAKgTAYgBQArgBAUB+QAKA9ABBAQABATgGA3QgHBTgRBFQgzDZhyAEIgKAAQkTAAjcn1g");
	this.shape_55.setTransform(256.8,279);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A62E52").s().p("AkJArQhHiig3jCQgpiSgBgbQgBgVAMgRQALgQAPgDQAogHAJBLQAPBQATA6IA0CGQAiBXANA4QAwDCCEClQCFCnBwgEQBUgCAmizQAMg3AGhDIADg5QgBgdgKhOIgVhoQAAgOAFgKQAKgTAYgBQArgBATB+QAKA9ABBAQABATgGA3QgIBTgRBFQg0DZhyAEIgKAAQkTAAjan1g");
	this.shape_56.setTransform(257.1,280.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A62E52").s().p("AC2I2QkagMi3oNQg7ingojFQgeiVABgbQABgVANgQQAMgPAPgCQAogEADBMQAKBQAPA8IApCKQAcBZAJA3QAhDGB4CuQB3CxBxAFQBTADAzivQARg3ALhBIAHg5QABgdgEhRQgNhiAAgEQABgOAGgKQAKgSAZABQArABAJB+QAGA/gEBAQgBATgKA3QgOBSgVBDQhDDQhuAAIgFAAg");
	this.shape_57.setTransform(257.5,309);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A62E52").s().p("ACWJBQkZgYiioUQg0ioggjHQgYiWACgbQABgVAOgQQANgOAPgCQAogCAABMQAGBQANA9IAkCLQAYBaAHA4QAZDGBxCzQBwC2BwAJQBUAHA6itQASg2AOhCIAJg3QADgdgBhRIgJhnQABgOAGgKQAMgRAYACQArADAFB9QADBAgGBAQgCASgMA3QgRBRgZBCQhJDKhrAAIgKAAg");
	this.shape_58.setTransform(257.5,327.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#A62E52").s().p("ACFJGQkYgeiXoXQgwiqgcjIQgViWADgbQACgVAOgPQANgOAQgBQAogCgCBMQAEBRALA8IAiCMQAWBbAFA4QAVDHBtC1QBsC4BwAMQBTAJA+isQAUg1AOhBIALg4QADgdABhRIgGhnQACgOAGgKQAMgRAYACQArAFACB9QABBAgIBAQgCATgNA1QgTBRgaBCQhNDFhpAAIgMAAg");
	this.shape_59.setTransform(257.3,336.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A62E52").s().p("AB+I4QkbgEiUoSQguingajIQgUiXADgcQADgUANgRQAOgQAQgCQAogFgCBMQADBSALA8QAEAVAcB2QAVBaAFA5QAUDHBsCuQBtCxBvACQBVABBAizQAVg4APhEIAMg5QADgeAChSQgGhkAAgEQACgOAHgLQAMgSAYAAQArABABCAQABA/gIBCQgDATgNA3QgVBUgbBFQhTDZhyAAIgBAAg");
	this.shape_60.setTransform(260.7,328,1,1,0,0,0,-2.4,0.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#A62E52").ss(8,1,1).p("AoMo0QBdEuBNEWQBNEYCGCDQCGCDCjAHQCmAHBjiPQBkiOAFifQAFidgNiZ");
	this.shape_61.setTransform(290,318.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A62E52").ss(8,1,1).p("AK2hVQg7H6kbBRQkbBQkUjSQkWjRhkkPQhjkQgJiP");
	this.shape_62.setTransform(313.8,296.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#A62E52").ss(8,1,1).p("ALSh5QgjHJldBCQlbBClOifQlPiggro6");
	this.shape_63.setTransform(324.9,279.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#A62E52").ss(8,1,1).p("ALSh4QgEGClkBwQjVBDjbgkQlxg8iklDQhsjRgKjt");
	this.shape_64.setTransform(324.9,277.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#A62E52").ss(8,1,1).p("ALIipQgBAfgCAeALfgXQh/F4i/BLQjABKkMg3QkNg4jekyQjdkwAXj6");
	this.shape_65.setTransform(326,289.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#A62E52").ss(8,1,1).p("ALBjHQiQJVldA4QlaA3kFkIQi3i6hKjxArAnOQAHATAoCE");
	this.shape_66.setTransform(315.6,343.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#A62E52").ss(8,1,1).p("AK1j9QiPJVldA4QlbA3kEkIQkEkHgblQ");
	this.shape_67.setTransform(318.2,356.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#A62E52").ss(8,1,1).p("AK1kIQjuKFk1AjQkzAkj9kMQj8kLgblQ");
	this.shape_68.setTransform(319.7,356.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#A62E52").ss(8,1,1).p("AKghKQluHxkxgeQkwgdivjxQiwjugRkX");
	this.shape_69.setTransform(317.6,353.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#A62E52").ss(8,1,1).p("AKPguQkxHUkqgdQkogdi6jxQi7jvglkW");
	this.shape_70.setTransform(313.2,353.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#A62E52").ss(8,1,1).p("AJ6hKQlDH3ksgdQkqgcibj4Qibj3gkkW");
	this.shape_71.setTransform(311.1,348.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#A62E52").ss(8,1,1).p("AJ9j4QjWIokfBOQkdBOjjkXQjjkVghku");
	this.shape_72.setTransform(311.3,348);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A62E52").ss(8,1,1).p("ApgmbQAhEuDcEfQDcEhEUhEQEXhEC8oo");
	this.shape_73.setTransform(308.5,349.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#A62E52").ss(8,1,1).p("ApDmoQAgEuDVEpQDVErEMg7QENg6Ckon");
	this.shape_74.setTransform(305.7,350.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#A62E52").ss(8,1,1).p("Aonm1QAhEuDOEzQDOE0ECgwQEEgxCMom");
	this.shape_75.setTransform(302.8,351.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#A62E52").ss(8,1,1).p("AoLnDQAhEvDIE8QDGE+D6gnQD6gmBzom");
	this.shape_76.setTransform(300,353.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#A62E52").ss(8,1,1).p("AnunQQAgEuDBFGQDAFIDwgdQDxgcBbol");
	this.shape_77.setTransform(297.2,354.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#A62E52").ss(8,1,1).p("AnSneQAgEuC6FQQC5FRDngSQDogTBDok");
	this.shape_78.setTransform(294.4,356);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#A62E52").ss(8,1,1).p("Am2ntQAhEvCyFZQCzFbDdgJQDfgIAqoj");
	this.shape_79.setTransform(291.5,357.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#A62E52").ss(8,1,1).p("AmZn7QAgEuCsFjQCrFlDVABQDWABARoi");
	this.shape_80.setTransform(288.7,358.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#A62E52").ss(8,1,1).p("Al9oKQAgEuClFtQCkFuDMAMQDNAKgHoh");
	this.shape_81.setTransform(285.9,360.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#A62E52").ss(8,1,1).p("AljoZQAhEvCeF2QCdF4DCAVQDEAVgfoi");
	this.shape_82.setTransform(283.2,361.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#A62E52").ss(8,1,1).p("AlLooQAhEuCXGAQCUGCC7AfQC7Afg4oi");
	this.shape_83.setTransform(280.8,363.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#A62E52").ss(8,1,1).p("Ak1o3QAhEuCQGKQCNGLCyApQCyAphRoh");
	this.shape_84.setTransform(278.6,364.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#A62E52").ss(8,1,1).p("AD5BWQBpIgipgzQipgziHmVQiImTghkv");
	this.shape_85.setTransform(276.5,366.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#A62E52").ss(8,1,1).p("AD5BWQBpIgipgzQipgziGmVQiJmTghkv");
	this.shape_86.setTransform(276.5,377.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#A62E52").ss(8,1,1).p("AsToFQgFGtEdE+QEsFPG9g3QGcg0CKmJ");
	this.shape_87.setTransform(283.6,358.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#A62E52").ss(8,1,1).p("AP6lMQgvHIm1COQmXCGmUiFQmJiBk1kTQgUgSgTgS");
	this.shape_88.setTransform(290.1,316);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#A62E52").ss(8,1,1).p("ARFkuQiUFTm4CdQm4CckZhDQm0gllDkHQg9gyg4g2");
	this.shape_89.setTransform(276.7,243.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#A62E52").ss(8,1,1).p("AR2kVQkBFnmNB0QmNB0mfg1Qmhg4mQiC");
	this.shape_90.setTransform(277.4,209.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#A62E52").ss(8,1,1).p("AK6k8QjRF0l+CNQl9CNmngY");
	this.shape_91.setTransform(314,190.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#A62E52").ss(8,1,1).p("AGkBBQmmgcmhhl");
	this.shape_92.setTransform(202.1,215.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#A62E52").ss(8,1,1).p("AwpEgQEmBVIhABQGwAuGdjVQGdjTAil5");
	this.shape_93.setTransform(266.7,180);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A62E52").ss(8,1,1).p("AwbCSQBZBOEsBYQErBXGagEQGcgFESjEQESjCAtmDQgEAAgHgDQgHgEgEAA");
	this.shape_94.setTransform(275.3,202.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#A62E52").ss(8,1,1).p("AwbgCQE3EhGgBWQGfBVF+i4QF/i5CfmGQAUgwARgy");
	this.shape_95.setTransform(277.4,237.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A62E52").ss(8,1,1).p("AwpAlQExEdGYBWQGbBZGIiYQGPibCfmBQAwh2AJh/");
	this.shape_96.setTransform(276.7,245.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#A62E52").ss(8,1,1).p("AwpA4QFpEtHUA0QHSAzEKiMQEKiMCTjsQCUjuAJh/");
	this.shape_97.setTransform(277.5,251.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A62E52").ss(8,1,1).p("AwlgLQD+FQH9A6QH7A7EQiDQEQiDCRjVQCQjYAUiX");
	this.shape_98.setTransform(282,271.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#A62E52").ss(8,1,1).p("AP4lXQiLGjmTCrQmPCqmdh/QmPh7jgldQgcgsgags");
	this.shape_99.setTransform(278.1,305.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A62E52").ss(8,1,1).p("ALnjKQggHLm/CIQmhB/kdlhQjVkHhblK");
	this.shape_100.setTransform(269.5,317.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#A62E52").s().p("AmIAlQhHijgtjCQgjiSADgbQACgVASgQQARgQAUgCQA2gHACBLQAIBQASA6IAyCHQAiBYAKA3QAkDCCZCoQCaCqCXAAQBwAABMiwQAYg3AShCIAMg4QADgdgChQQgOhhABgEQABgOAJgLQAOgSAhAAQA6AAAIB+QAEA9gIBAQgCASgPA3QgWBSggBEQhlDWiZAAIAAAAQl6AAjhoBg");
	this.shape_101.setTransform(204.2,270.6,1,1,0,0,0,-54,-47.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#A62E52").s().p("ADpI2QkygOjhoNQhHimg1jFQgniUAAgbQAAgVANgQQAMgOARgCQArgEAHBLQAOBQATA8QAHAVAtB0QAiBZAMA4QAuDECKCvQCKCxB7AGQBbAEAwiuQAPg2AJhCIAFg3QAAgdgIhRIgThmQAAgOAGgKQALgSAaABQAvADAQB8QAJA/gBBAQAAATgIA2QgLBRgVBDQg/DOh3AAIgHAAg");
	this.shape_102.setTransform(259.2,312.2,1,1,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53,p:{x:258,y:293.4}}]}).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55,p:{x:256.8,y:279}}]},1).to({state:[{t:this.shape_55,p:{x:255.9,y:277.3}}]},1).to({state:[{t:this.shape_56}]},2).to({state:[{t:this.shape_57}]},2).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},2).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64,p:{y:277.2}}]},2).to({state:[{t:this.shape_64,p:{y:277.2}}]},2).to({state:[{t:this.shape_64,p:{y:272.5}}]},9).to({state:[{t:this.shape_65}]},2).to({state:[{t:this.shape_66}]},2).to({state:[{t:this.shape_67,p:{x:318.2,y:356.8}}]},1).to({state:[{t:this.shape_67,p:{x:319.7,y:363.8}}]},1).to({state:[{t:this.shape_67,p:{x:319.7,y:363}}]},2).to({state:[{t:this.shape_67,p:{x:319.7,y:356}}]},2).to({state:[{t:this.shape_67,p:{x:319.7,y:353}}]},16).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},2).to({state:[{t:this.shape_71}]},2).to({state:[{t:this.shape_72}]},2).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86,p:{y:377.2}}]},1).to({state:[{t:this.shape_86,p:{y:389.7}}]},1).to({state:[{t:this.shape_87}]},3).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_93}]},2).to({state:[{t:this.shape_94}]},2).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96,p:{y:245.5}}]},1).to({state:[{t:this.shape_96,p:{y:252.5}}]},1).to({state:[{t:this.shape_96,p:{y:245.5}}]},2).to({state:[{t:this.shape_97}]},32).to({state:[{t:this.shape_98}]},2).to({state:[{t:this.shape_99}]},2).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_53,p:{x:255.5,y:301.7}}]},1).to({state:[{t:this.shape_53,p:{x:258,y:290}}]},2).to({state:[{t:this.shape_53,p:{x:258,y:293.4}}]},2).wait(1));

	// LEG - R
	this.instance_7 = new lib.Leg("synched",0);
	this.instance_7.setTransform(116.2,379.8,1,1,4.3,0,0,18.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:18,regY:17,scaleY:1.01,rotation:0,skewX:3,skewY:3.3,x:117.3,y:375.1},0).wait(1).to({skewX:2.2,skewY:2.5,x:118.8,y:370.3},0).wait(1).to({x:118,y:368.6},0).wait(2).to({regX:18.1,skewX:2.4,x:118.8,y:372},0).wait(2).to({skewX:6.7,skewY:6.8,x:111.2,y:390.3},0).wait(1).to({regX:18,regY:17.1,scaleX:1,skewX:9,skewY:9,x:107.1,y:403.3},0).wait(1).to({skewX:10.3,skewY:10.3,x:104.9,y:409.4},0).wait(2).to({scaleX:1.02,scaleY:1.03,skewX:10.7,skewY:10.8,x:106.7,y:404.3},0).wait(1).to({regX:18.1,regY:16.9,scaleX:1.18,scaleY:1.18,rotation:11.1,skewX:0,skewY:0,x:111.3,y:409.4},0).wait(1).to({regY:17,scaleX:1.2,scaleY:1.2,rotation:12.2,x:111.6,y:393.9},0).wait(1).to({x:114.2,y:384.8},0).wait(2).to({x:115,y:381.4},0).wait(2).to({y:383.9},0).wait(9).to({y:379.7},0).wait(2).to({rotation:13.2,x:112,y:396.7},0).wait(2).to({regX:18.2,regY:16.9,scaleX:1.18,scaleY:1.18,rotation:15.7,x:102.4,y:420.7},0).wait(1).to({y:437.3},0).wait(1).to({y:445.6},0).wait(2).to({y:443.1},0).wait(2).to({y:438},0).wait(16).to({startPosition:0},0).wait(1).to({rotation:16.5,x:100.8,y:439.9},0).wait(1).to({regY:17,rotation:17.5,x:98.8,y:445.1},0).wait(2).to({regY:16.9,scaleX:1.17,scaleY:1.17,rotation:18.5,x:95.9,y:445.9},0).wait(2).to({rotation:19.3,x:94.4,y:448.9},0).wait(2).to({rotation:20.8,x:91.6,y:452.9},0).wait(14).to({rotation:22.6,x:88.4,y:456.3},0).wait(1).to({rotation:23.1,x:87.4,y:463},0).wait(3).to({regX:18.1,regY:17.1,scaleX:1.03,scaleY:1.03,rotation:9.8,x:89.4,y:440.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:2.5,x:94.4,y:433.5},0).wait(1).to({regX:18,regY:17,scaleX:1,scaleY:1,rotation:0.3,x:85.8,y:376.3},0).wait(1).to({regY:17.1,rotation:-2.2,x:89,y:366.7},0).wait(1).to({rotation:-3.3,x:91,y:360.6},0).wait(2).to({x:89.3,y:358.9},0).wait(2).to({x:88.4,y:366.3},0).wait(1).to({y:383.8},0).wait(1).to({y:395.5},0).wait(1).to({y:399.7},0).wait(2).to({y:396.3},0).wait(32).to({regX:17.9,rotation:-2,x:85.9,y:401.9},0).wait(2).to({regY:17,rotation:0.3,x:83.1,y:413.1},0).wait(2).to({rotation:2.5,x:82.5,y:417.9},0).wait(1).to({regX:18.1,scaleX:1,scaleY:1,rotation:3,x:99.3,y:415},0).wait(1).to({rotation:4.3,x:105.4,y:404.8},0).wait(1).to({regY:16.9,x:113.7,y:396.4},0).wait(1).to({y:388.1},0).wait(2).to({x:116.2,y:376.4},0).wait(2).to({y:379.8},0).wait(1));

	// LEG - L
	this.instance_8 = new lib.HandR("single",2);
	this.instance_8.setTransform(120.1,314.4,0.992,1.01,30.9,0,0,23.1,27.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#A62E52").ss(7,1,1).p("AHEEJQjZDWi9BPQi8BPiUhBQiVhCgLjHQgLjHBdjFQBdjHB2h1QB1h1BlhO");
	this.shape_103.setTransform(72.4,289.1);

	this.instance_9 = new lib.Leg("synched",0);
	this.instance_9.setTransform(191,377.4,1,1,-4.7,0,0,16.6,18.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A62E52").ss(8,1,1).p("AKfEiQjIENlABYQlHBckGjPQkHjQAklJQAjlCDujhQBHhEBUg2");
	this.shape_104.setTransform(122.4,329.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#A62E52").ss(8,1,1).p("AKWLyQkyAykvhAQlAhFjZj0QjmkCBFlMQBDlGELjIQBAgxBHgl");
	this.shape_105.setTransform(117.7,343);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A62E52").ss(7,1,1).p("AHED8QjhDMjABLQi+BLiSg+QiTg/gDi9QgEi9Bki8QBli+B7hvQB6hvBnhK");
	this.shape_106.setTransform(65.4,292.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4.7,skewX:0,skewY:0,x:191,y:377.4,regY:18.2,regX:16.6}},{t:this.shape_103,p:{x:72.4,y:289.1}},{t:this.instance_8,p:{x:120.1,y:314.4,scaleX:0.992,scaleY:1.01,rotation:30.9,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:1.007,rotation:0,skewX:-5.9,skewY:-5.7,x:192.1,y:371.1,regY:18.2,regX:16.6}},{t:this.shape_103,p:{x:71,y:284.9}},{t:this.instance_8,p:{x:118.7,y:310.2,scaleX:0.992,scaleY:1.01,rotation:30.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:1.007,rotation:0,skewX:-6.7,skewY:-6.5,x:193.5,y:365.4,regY:18.2,regX:16.6}},{t:this.shape_103,p:{x:71,y:282.1}},{t:this.instance_8,p:{x:118.7,y:307.4,scaleX:0.992,scaleY:1.01,rotation:30.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:1.007,rotation:0,skewX:-6.7,skewY:-6.5,x:192.7,y:363.7,regY:18.2,regX:16.6}},{t:this.shape_103,p:{x:71,y:280.7}},{t:this.instance_8,p:{x:118.7,y:306,scaleX:0.992,scaleY:1.01,rotation:30.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1.006,rotation:0,skewX:-6.5,skewY:-6.5,x:193.4,y:367.1,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1.006,rotation:0,skewX:-2.2,skewY:-2.3,x:186,y:390.9,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:1.006,rotation:0,skewX:0,skewY:0,x:181.9,y:406.9,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:1.006,rotation:0,skewX:1.3,skewY:1.2,x:179.5,y:414.8,regY:18.3,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.023,scaleY:1.03,rotation:0,skewX:1.7,skewY:1.7,x:183.1,y:410.4,regY:18.3,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:2.1,skewX:0,skewY:0,x:199,y:417,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.197,scaleY:1.197,rotation:3.1,skewX:0,skewY:0,x:200.7,y:403.2,regY:18.1,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.197,scaleY:1.197,rotation:3.1,skewX:0,skewY:0,x:203.3,y:394,regY:18.1,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.197,scaleY:1.197,rotation:3.1,skewX:0,skewY:0,x:204.1,y:390.6,regY:18.1,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.197,scaleY:1.197,rotation:3.1,skewX:0,skewY:0,x:204.1,y:393.2,regY:18.1,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.197,scaleY:1.197,rotation:3.1,skewX:0,skewY:0,x:204.1,y:388.9,regY:18.1,regX:16.6}}]},9).to({state:[{t:this.instance_9,p:{scaleX:1.197,scaleY:1.197,rotation:4.2,skewX:0,skewY:0,x:201,y:407.7,regY:18.2,regX:16.7}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:6.6,skewX:0,skewY:0,x:189,y:435.3,regY:18.2,regX:16.7}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:6.6,skewX:0,skewY:0,x:189,y:451.9,regY:18.2,regX:16.7}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:6.6,skewX:0,skewY:0,x:189,y:460.2,regY:18.2,regX:16.7}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:6.6,skewX:0,skewY:0,x:189,y:457.6,regY:18.2,regX:16.7}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:6.6,skewX:0,skewY:0,x:189,y:452.5,regY:18.2,regX:16.7}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:6.6,skewX:0,skewY:0,x:189,y:452.5,regY:18.2,regX:16.7}}]},16).to({state:[{t:this.instance_9,p:{scaleX:1.175,scaleY:1.175,rotation:7.4,skewX:0,skewY:0,x:187.2,y:455.6,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.174,scaleY:1.174,rotation:8.5,skewX:0,skewY:0,x:184.8,y:462.3,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.shape_104},{t:this.instance_9,p:{scaleX:1.165,scaleY:1.165,rotation:9.5,skewX:0,skewY:0,x:181,y:464.6,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.shape_105},{t:this.instance_9,p:{scaleX:1.165,scaleY:1.165,rotation:10.3,skewX:0,skewY:0,x:179.2,y:468.7,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.165,scaleY:1.165,rotation:11.8,skewX:0,skewY:0,x:175.9,y:475,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1.165,scaleY:1.165,rotation:13.5,skewX:0,skewY:0,x:172,y:480.9,regY:18.2,regX:16.6}}]},14).to({state:[{t:this.instance_9,p:{scaleX:1.165,scaleY:1.165,rotation:14.1,skewX:0,skewY:0,x:170.7,y:488.6,regY:18.3,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1.029,scaleY:1.029,rotation:0.8,skewX:0,skewY:0,x:166.3,y:445.3,regY:18.2,regX:16.6}}]},3).to({state:[{t:this.instance_9,p:{scaleX:1.021,scaleY:1.021,rotation:-6.5,skewX:0,skewY:0,x:170.7,y:428.4,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-8.6,skewX:0,skewY:0,x:160.3,y:373.5,regY:18.2,regX:16.7}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-11.4,skewX:0,skewY:0,x:163,y:355.3,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:164.8,y:347.8,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:163.1,y:346.1,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:162.2,y:353.6,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:162.2,y:371,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:162.2,y:382.7,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:162.2,y:387,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-12.4,skewX:0,skewY:0,x:162.2,y:383.6,regY:18.2,regX:16.6}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-11.2,skewX:0,skewY:0,x:160.1,y:390.9,regY:18.2,regX:16.7}}]},32).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-8.7,skewX:0,skewY:0,x:157.7,y:405.3,regY:18.2,regX:16.7}}]},2).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-6.4,skewX:0,skewY:0,x:157.2,y:413.1,regY:18.2,regX:16.7}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-6,skewX:0,skewY:0,x:174.1,y:410.8,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4.7,skewX:0,skewY:0,x:180.3,y:402.3,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4.7,skewX:0,skewY:0,x:188.5,y:394,regY:18.2,regX:16.6}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4.7,skewX:0,skewY:0,x:188.5,y:385.7,regY:18.2,regX:16.6}},{t:this.shape_106},{t:this.instance_8,p:{x:113.1,y:316.8,scaleX:0.963,scaleY:0.992,rotation:0,skewX:33.8,skewY:30.2}}]},1).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4.7,skewX:0,skewY:0,x:191,y:374,regY:18.2,regX:16.6}},{t:this.shape_103,p:{x:72.4,y:284.7}},{t:this.instance_8,p:{x:120.1,y:310,scaleX:0.992,scaleY:1.01,rotation:30.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4.7,skewX:0,skewY:0,x:191,y:377.4,regY:18.2,regX:16.6}},{t:this.shape_103,p:{x:72.4,y:289.1}},{t:this.instance_8,p:{x:120.1,y:314.4,scaleX:0.992,scaleY:1.01,rotation:30.9,skewX:0,skewY:0}}]},2).wait(1));

	// ARM-R
	this.instance_10 = new lib.handL("single",0);
	this.instance_10.setTransform(297.4,324.8,1.023,1.03,-1.5,0,0,16.2,15);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#A62E52").ss(8,1,1).p("AHcClQjbC7kgBNQkhBNhvibQhwibCtj0QCsj3EZiRQANgHANgG");
	this.shape_107.setTransform(46.3,307.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A62E52").ss(8,1,1).p("AFwoUQg+EEh3EEQh3EDiPCaQiSCahYgaQhYgbAtifQAtieB2jWQB1jXBLhcQBNhdAYgh");
	this.shape_108.setTransform(52.7,283.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#A62E52").ss(8,1,1).p("AE5k7Qg9D7h1EIQh0EKh2BJQh4BJg2hmQg2hmAUi4QATi5A2jPQA2jQBGjB");
	this.shape_109.setTransform(62,238.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A62E52").ss(8,1,1).p("AE9jMQhFEKiGEJQiFEIhlAEQhlAEgtgvQgsgvgGijQgFiiAlj4QAlj5A8kV");
	this.shape_110.setTransform(66.5,215);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#A62E52").ss(8,1,1).p("Ag5qeQjGJ7gqECQgpEEBQB1QBQB1CThMQCShNBZjjQBZjkAThB");
	this.shape_111.setTransform(65.8,190);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A62E52").ss(8,1,1).p("Ag5qeQjGJ7gpECQgqEEBQB1QBQB1CThMQCShNBZjjQBZjkAThB");
	this.shape_112.setTransform(65.8,194.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#A62E52").ss(8,1,1).p("AiNo6QiZI4gQDlQgQDnBCBNQBDBNCThUQCShVBhkEQBikCAThB");
	this.shape_113.setTransform(65.5,208.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A62E52").ss(8,1,1).p("AE7AWQjLHxi0AiQi2AjgqieQgpidAjkMQAkkKBUkp");
	this.shape_114.setTransform(65.4,209.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#A62E52").ss(8,1,1).p("AEsDqQj3FaiggKQijgJgXi1QgYi0BHjjQBGjlBfk6");
	this.shape_115.setTransform(65.1,212.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A62E52").ss(8,1,1).p("AEUGcQkYEjiPhlQiOhlAPi2QAQi2AuixQAvi0COmX");
	this.shape_116.setTransform(67.6,209.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#A62E52").ss(8,1,1).p("AACqAQhWDAhtF+QhtF9BTC0QBUC0C5gqQB5gcBVhf");
	this.shape_117.setTransform(69,207.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#A62E52").ss(8,1,1).p("AACqAQhWDAhtF+QhuF9BUC0QBUC0C5gqQB5gcBVhf");
	this.shape_118.setTransform(69,209.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#A62E52").ss(8,1,1).p("AgVqAQhCDWhtGDQhuGBBJClQBJCkC5grQB5gcB1ih");
	this.shape_119.setTransform(71.5,211.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#A62E52").ss(8,1,1).p("AEigQQknGvh6AjQh6AjghhWQgihWCNj9QCMj6C7kN");
	this.shape_120.setTransform(75.5,246.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#A62E52").ss(8,1,1).p("AHtA6QiJDajqBsQjdBmjlg5Qi/gyAgjCQAShqA8hZQCajoDjidQAjgaAmgY");
	this.shape_121.setTransform(97.1,299.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A62E52").ss(8,1,1).p("AFTmyQkIDCjhDpQjiDmAuCKQAuCJCih1QCfh0EUmQ");
	this.shape_122.setTransform(34.9,272.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#A62E52").ss(8,1,1).p("ACfmjQjUCkiqC3QiqC2gKCoQgKCoDGgeQDHgeCYiaQCaiZByiQ");
	this.shape_123.setTransform(52,291.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_107},{t:this.instance_10,p:{scaleX:1.023,scaleY:1.03,rotation:-1.5,x:297.4,y:324.8,regX:16.2,regY:15}}]},11).to({state:[{t:this.shape_108},{t:this.instance_10,p:{scaleX:1.174,scaleY:1.174,rotation:-21.8,x:339.2,y:297.8,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_109},{t:this.instance_10,p:{scaleX:1.198,scaleY:1.198,rotation:-33.2,x:378.6,y:280.9,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_110},{t:this.instance_10,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:391.7,y:260.3,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_111},{t:this.instance_10,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:392.5,y:256.9,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_112},{t:this.instance_10,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:392.5,y:259.4,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_113},{t:this.instance_10,p:{scaleX:1.198,scaleY:1.198,rotation:-37,x:392.5,y:255.2,regX:16.2,regY:15}}]},9).to({state:[{t:this.shape_114},{t:this.instance_10,p:{scaleX:1.198,scaleY:1.198,rotation:-36,x:391.7,y:277.3,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_115},{t:this.instance_10,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:315.7,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_116},{t:this.instance_10,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:332.3,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_117},{t:this.instance_10,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:340.6,regX:16.2,regY:15}}]},1).to({state:[{t:this.shape_118},{t:this.instance_10,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:340.4,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_117},{t:this.instance_10,p:{scaleX:1.175,scaleY:1.175,rotation:-33.5,x:381.4,y:332.9,regX:16.2,regY:15}}]},2).to({state:[{t:this.shape_119}]},16).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[]},2).to({state:[{t:this.shape_122},{t:this.instance_10,p:{scaleX:1,scaleY:1,rotation:-8.5,x:343.8,y:297.4,regX:16.3,regY:14.8}}]},72).to({state:[{t:this.shape_123},{t:this.instance_10,p:{scaleX:0.999,scaleY:0.999,rotation:-6.2,x:308.9,y:301.3,regX:16.3,regY:14.9}}]},1).to({state:[]},1).wait(6));

	// Layer 16
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#A62E52").ss(8,1,1).p("AHcDvQjbC7kgBNQkhBNhvibQhwibCtj2QCsj0EZiSQEbiRBNgR");
	this.shape_124.setTransform(46.3,300.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#A62E52").ss(8,1,1).p("AKKNmQiKA7mNitQmLitjDjgQjDjgAXk6QAXk9CbivQCbiwBHgl");
	this.shape_125.setTransform(124.5,360);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A62E52").ss(8,1,1).p("AKKNLQgYCknGjhQnEjijDjgQjDjgAXk7QAXk8CbiwQCbivBHgl");
	this.shape_126.setTransform(124.5,362.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#A62E52").ss(8,1,1).p("AIXM1QhOgdhngkQnoirjSjoQjRjpAUkYQAVkaCbiqQCbirBHgl");
	this.shape_127.setTransform(113.3,353.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#A62E52").ss(8,1,1).p("AJmL8Qh5AemFiZQmDiZi1jAQi1i/AnkJQAnkMCbiXQCbiXBHgm");
	this.shape_128.setTransform(118.7,348.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#A62E52").ss(8,1,1).p("AJPLEQA6B6nLixQnJixi1i8Qi1i8AnkEQAnkHCbiUQCbiVBHgl");
	this.shape_129.setTransform(117.1,347.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#A62E52").ss(8,1,1).p("AJqMeQi9gMlahmQlYhnjCjvQjCjvAnkRQAnkUCbibQCbicBHgn");
	this.shape_130.setTransform(122.1,352.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#A62E52").ss(8,1,1).p("AJHMxQgIgRl/hqQl8hqjYj2QjXj2AskTQAskUChijQChikBJgi");
	this.shape_131.setTransform(123.4,359.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#A62E52").ss(8,1,1).p("Aqgr8QjtEAAyFaQAtE9CoChQCpCiD7BQQD6BPEdAzQEdAzETAa");
	this.shape_132.setTransform(133,355.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#A62E52").ss(8,1,1).p("AwFolQg8A/gTBMQgQA9AACKQAAGrHRDDQFLCLHlAAQEwAADZgpQEGgxC5hz");
	this.shape_133.setTransform(155,333);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#A62E52").ss(8,1,1).p("AIwoLQl2Ewi3FRQi2FUiuA3QiuA4gdjhQgdjiDamO");
	this.shape_134.setTransform(78.2,253.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#A62E52").ss(8,1,1).p("AEkDwQgMEskJCIQh8BChehTQhhhVAKiHQASj/BPjxQBQj3CVjUQBJhmBehW");
	this.shape_135.setTransform(6.1,196);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#A62E52").ss(8,1,1).p("AqJtBQA2FAB+EqQB9EnDPD3QDMD3EeCVQCOBKCbAl");
	this.shape_136.setTransform(-31.8,137.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#A62E52").ss(8,1,1).p("AqdsxQBDE6CIEjQCIEgDTDxQDRDwEeCUQCNBJCZAo");
	this.shape_137.setTransform(-33.9,156);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#A62E52").ss(8,1,1).p("AqyshQBRE1CTEcQCREZDZDqQDWDpEdCTQCMBJCYAq");
	this.shape_138.setTransform(-36,171.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#A62E52").ss(8,1,1).p("ArHsRQBgEwCdEVQCbESDeDjQDbDjEbCRQCLBICYAt");
	this.shape_139.setTransform(-38,178.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#A62E52").ss(8,1,1).p("ArcsBQBuEqCnEOQCmEMDjDcQDgDcEaCQQCKBHCXAv");
	this.shape_140.setTransform(-40.1,180.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#A62E52").ss(8,1,1).p("ArwrwQB7EkCyEHQCwEFDoDWQDkDUEZCPQCKBHCVAx");
	this.shape_141.setTransform(-42.2,178.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#A62E52").ss(8,1,1).p("AsFrgQCIEfC9EAQC7D9DtDQQDpDNEXCOQCKBHCUAz");
	this.shape_142.setTransform(-44.3,177.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#A62E52").ss(8,1,1).p("ArHrgQBEEZB+EGQCQEoDwDgQDrDdEyBuQCVA2CbAZ");
	this.shape_143.setTransform(-38.1,183.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#A62E52").ss(8,1,1).p("AojsKQgQK7BcDgQBdDhDBCbQC+CbDDAlQDDAlCbAZ");
	this.shape_144.setTransform(-15.8,186.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#A62E52").ss(8,1,1).p("AjarJQhZE3g6HCQg5HDCZCKQCaCJDYhqQDahqA/hv");
	this.shape_145.setTransform(7.6,216.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#A62E52").ss(8,1,1).p("AFTmyQkIDCjhDpQjiDmAuCKQAuCJCih1QCfh0EUmQ");
	this.shape_146.setTransform(34.9,272.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#A62E52").ss(8,1,1).p("ACfmjQjUCkiqC3QiqC2gKCoQgKCoDGgeQDHgeCYiaQCaiZByiQ");
	this.shape_147.setTransform(52,291.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_124}]},11).to({state:[]},1).to({state:[{t:this.shape_125}]},49).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},2).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},9).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},3).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[]},1).to({state:[{t:this.shape_136}]},4).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},31).to({state:[{t:this.shape_144}]},2).to({state:[{t:this.shape_145}]},2).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,0,373.8,555.4);


(lib.FreezerBurn_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand - L
	this.instance = new lib.handL("single",0);
	this.instance.setTransform(269.7,254.9,0.905,0.905,0,0,0,16.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({regY:14.9,scaleY:0.9,skewX:-0.3,x:267.4,y:253.5},0).wait(2).to({regX:16.3,skewX:-0.5,x:265.3,y:251.2},0).wait(3).to({skewX:-0.1,x:267.1,y:254.2},0).wait(2).to({regX:16.2,scaleX:0.91,scaleY:0.92,skewX:1.8,skewY:1.6,x:269.5,y:263},0).wait(2).to({scaleX:0.91,scaleY:0.91,skewX:3.3,skewY:2.8,x:274.4,y:271.2},0).wait(2).to({regY:15,skewX:4.1,skewY:3.6,x:274.3,y:274.8},0).wait(1).to({startPosition:0},0).wait(2).to({x:273.7,y:273.5},0).wait(32).to({scaleY:0.91,skewX:3.8,x:272.4,y:272.6},0).wait(2).to({skewX:2.6,skewY:2.6,x:272.1,y:268.8},0).wait(2).to({regY:14.8,scaleY:0.91,rotation:1.3,skewX:0,skewY:0,x:269.5,y:265.8},0).wait(1).to({rotation:0,x:269.7,y:259.5},0).wait(1).to({y:256.2},0).wait(2).to({y:253.6},0).wait(2).to({y:254.9},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(39));

	// Hand - R
	this.instance_1 = new lib.HandR("single",2);
	this.instance_1.setTransform(109.1,282.3,0.905,0.905,30,0,0,23.1,27.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(110).to({scaleX:0.91,scaleY:0.9,rotation:29.8,x:107.1,y:280.6},0).wait(2).to({scaleX:0.91,scaleY:0.9,rotation:0,skewX:29.6,skewY:29.7,x:104.9,y:278.4},0).wait(3).to({scaleX:0.91,scaleY:0.9,skewX:30,skewY:29.8,x:106.6,y:281.4},0).wait(2).to({regX:18.4,regY:19.4,scaleY:0.92,skewX:1.8,skewY:1.6,x:189.6,y:258.7,startPosition:0},0).wait(2).to({regY:19.5,scaleX:0.91,scaleY:0.91,skewX:3.3,skewY:2.8,x:258.5,y:242.2,startPosition:1},0).wait(2).to({regY:19.6,skewX:4.1,skewY:3.6,x:292,y:245.6},0).wait(1).to({x:303.7,y:242.4},0).wait(2).to({scaleY:0.91,skewX:9.3,x:303,y:241.1,startPosition:3},0).to({regX:18.3,regY:19.7,scaleY:0.91,skewX:2.4,skewY:1.7},3).to({skewX:2.4},1).to({regX:18.4,regY:19.6,scaleY:0.91,skewX:9.3,skewY:3.6},4).wait(2).to({startPosition:3},0).to({regX:18.3,regY:19.7,scaleY:0.91,skewX:2.4,skewY:1.7},3).to({skewX:2.4},1).to({regX:18.4,regY:19.6,scaleY:0.91,skewX:9.3,skewY:3.6},4).wait(14).to({scaleY:0.91,skewX:3.8,x:297.6,y:238,startPosition:1},0).wait(2).to({regX:18.3,regY:19.4,scaleX:1.12,scaleY:0.79,skewX:-15.9,skewY:2.6,x:280.5,y:233.9},0).wait(2).to({regX:23.1,regY:27.8,scaleX:0.91,scaleY:0.96,skewX:57.5,skewY:38.9,x:206.2,y:242.5,startPosition:2},0).wait(1).to({regY:27.7,scaleY:1.06,skewX:46.2,skewY:15,x:151.9,y:256.2},0).wait(1).to({scaleY:0.91,rotation:15,skewX:0,skewY:0,x:119.1,y:270.5},0).wait(2).to({scaleX:0.94,scaleY:0.91,rotation:0,skewX:15.5,skewY:14.5,x:111.2,y:273.9},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:15,skewX:0,skewY:0,x:105.1,y:278.7},0).wait(3).to({regY:27.6,rotation:30,x:109.1,y:282.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:28.1,x:108.6,y:281.9},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:26.1,x:108.1,y:281.5},0).wait(2).to({regY:27.7,rotation:20.5,x:106.6,y:280.2},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:16.8,x:105.6,y:279.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:15,x:105.1,y:278.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:16.8,x:105.5,y:279.2},0).wait(2).to({regY:27.8,rotation:20.5,x:106.6,y:280.1},0).wait(2).to({regY:27.7,scaleX:0.9,scaleY:0.9,rotation:24.3,x:107.6,y:281},0).wait(2).to({rotation:28.1,x:108.6,y:281.9},0).wait(1).to({regY:27.6,scaleX:0.91,scaleY:0.91,rotation:30,x:109.1,y:282.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:28.1,x:108.6,y:281.9},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:26.1,x:108.1,y:281.5},0).wait(3).to({regY:27.7,rotation:20.5,x:106.6,y:280.2},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:16.8,x:105.6,y:279.2},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:15,x:105.1,y:278.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:16.8,x:105.5,y:279.2},0).wait(2).to({regY:27.8,rotation:20.5,x:106.6,y:280.1},0).wait(2).to({regY:27.7,scaleX:0.9,scaleY:0.9,rotation:24.3,x:107.6,y:281},0).wait(2).to({rotation:28.1,x:108.6,y:281.9},0).wait(1).to({regY:27.6,scaleX:0.91,scaleY:0.91,rotation:30,x:109.1,y:282.3},0).wait(39));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A62E52").ss(7,1,1).p("AGbB8QjBDCiqBIQipBIiIg5QiIg6gOizQgPiyBQi0QBAiPBPhg");
	this.shape.setTransform(65.9,271.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A62E52").ss(7,1,1).p("AGbB7Qi/DBiqBIQioBHiIg5QiJg6gQixQgQixBPizQA+iOBOhg");
	this.shape_1.setTransform(63.9,269.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A62E52").ss(7,1,1).p("AGbB7Qi/DBipBIQioBHiIg5QiKg6gQixQgQixBOizQA9iOBPhg");
	this.shape_2.setTransform(61.7,267.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A62E52").ss(7,1,1).p("AGaB7Qi/DBiqBIQipBHiIg5QiJg6gOixQgPixBPizQA+iOBQhg");
	this.shape_3.setTransform(63.4,270.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A62E52").ss(7,1,1).p("AqlkxQgkBOgLBfQgdEHD4BtQDyBsEAhEQDeg8DQhnQCdhPCUhe");
	this.shape_4.setTransform(116.7,264.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A62E52").ss(7,1,1).p("At+lsQgJAagGAaQgQBEADBIQAEBUAeBZQBDDHCGBEQCGBDC8AZQC7AYEdhhQEehhISkG");
	this.shape_5.setTransform(166.1,249.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A62E52").ss(7,1,1).p("AwvlCQABACAAADQADDaB6CdQB7CfCRAuQCSAuDdAMQDcANEchQQEdhQCcgpQCcgpEbhfAwxlAIADAD");
	this.shape_6.setTransform(184.5,246);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A62E52").ss(7,1,1).p("AyEkkQAUDbC3CXQCwCTDiAqQC+AlC7gQQDCgPC/gmQC9glC5gtQC6gvCvhHQBvgrBkg6");
	this.shape_7.setTransform(194.2,245.6,1,1,0,0,0,1.2,2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A62E52").ss(7,1,1).p("AABABIgBgB");
	this.shape_8.setTransform(77.2,214);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A62E52").ss(7,1,1).p("AyEkkQAUDbC2CXQCxCTDiAqQC+AlC7gQQDCgPC/gmQC9glC5gtQC5gvCwhHQBvgrBkg6");
	this.shape_9.setTransform(193.5,244.3,1,1,0,0,0,1.2,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A62E52").ss(7,1,1).p("AxqkuQAVDkC0CcQCuCYDcArQC6AlC4gQQC8gRC7gnQC5gmC0gwQC1gxCqhKQBsgtBhg9");
	this.shape_10.setTransform(189.6,244.3,1,1,0,0,0,1.5,2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A62E52").ss(7,1,1).p("AwIkvQAAADAAACQAbDZB4CYQB5CZC9AsQC8ArDAgJQDAgIBlgUQBmgTCogtQCogtH0juAwLktIADAD");
	this.shape_11.setTransform(176.9,241.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A62E52").ss(7,1,1).p("ALZieQk2EEitBWQitBXiNAhQiPAijfhQQjehQgqiQQgriOARiJQAGgoAKgk");
	this.shape_12.setTransform(133.2,258.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A62E52").ss(7,1,1).p("AIkg1QnCFUh/AvQiBAviSgXQiSgWgyhcQgyhcADiCQADiABainQAbgyAbgq");
	this.shape_13.setTransform(97,261.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A62E52").ss(7,1,1).p("AG4A8QhqCljRBvQjPBvifgnQifgogeiqQgeisBKixQBCihBdhp");
	this.shape_14.setTransform(75.2,265.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A62E52").ss(7,1,1).p("AGdB3QhvCijMBiQjKBiiSg2QiRg1gPizQgPi0BTiyQBPiqBlho");
	this.shape_15.setTransform(66.6,266.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A62E52").ss(7,1,1).p("AGOBjQhrCijEBiQjDBiiMg2QiNg1gOizQgOiyBQi0QA+iLBNhf");
	this.shape_16.setTransform(64.6,270.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A62E52").ss(7,1,1).p("AGbCOQjBDCiqBIQipBIiIg5QiIg6gOizQgPi0BQiyQBMirBjhp");
	this.shape_17.setTransform(65.9,269.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A62E52").ss(7,1,1).p("Ailm/QgRASgPATQhQBgg/CPQhQCyAOC0QAOCzCJA5QCJA5CshLQCthMC2i+");
	this.shape_18.setTransform(65.7,269.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A62E52").ss(7,1,1).p("Aiym2QhaBlhHCfQhQCyAPC0QAOCzCJA5QCJA4CwhOQCwhPCsi6");
	this.shape_19.setTransform(65.6,270);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A62E52").ss(7,1,1).p("Ai7msQhSBhhBCTQhQC0AOCyQAOCzCLA3QCLA3C5hYQC6hYCMiv");
	this.shape_20.setTransform(65.1,270.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A62E52").ss(7,1,1).p("AjqmJQg0BNgtBkQhQC0APCxQAOCzCMA2QCMA2C/heQDBhfB2im");
	this.shape_21.setTransform(64.8,273.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A62E52").ss(7,1,1).p("AGOA5QhrCjjEBiQjDBhiMg1QiNg2gOizQgOixBQi0QAlhUAqhD");
	this.shape_22.setTransform(64.6,275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A62E52").ss(7,1,1).p("AjNmeQhFBbg5CAQhQC0APCxQAOCzCMA2QCMA2C/heQDBhfB2im");
	this.shape_23.setTransform(64.8,271.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A62E52").ss(7,1,1).p("Ah7nOQgNANgNANQhpBqhQC0QhQCyAOC0QAOCzCLA3QCLA3C5hYQC6hYCMiv");
	this.shape_24.setTransform(65.1,267.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A62E52").ss(7,1,1).p("AiTnFQgCADgDADQhpBqhQC0QhQCyAOCzQAOCzCKA4QCKA4CyhRQC0hSChi2");
	this.shape_25.setTransform(65.4,268.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A62E52").ss(7,1,1).p("Ailm/QhjBphMCrQhQCyAOC0QAOCzCJA5QCJA5CshLQCthMC2i+");
	this.shape_26.setTransform(65.7,269.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A62E52").ss(7,1,1).p("AGbClQjBDCiqBJQipBIiIg6QiIg6gOizQgPizBQiyQBQi0BphqQATgTASgS");
	this.shape_27.setTransform(65.9,267);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A62E52").ss(7,1,1).p("AjOmnQhKBdg8CIQhQC0AOCxQAOCzCJA6QCJA5CshLQCthMC2i+");
	this.shape_28.setTransform(65.7,271.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A62E52").ss(7,1,1).p("Aitm5QhdBnhJCjQhQCyAPCzQAOCzCJA5QCJA5CwhPQCwhPCsi6");
	this.shape_29.setTransform(65.6,269.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A62E52").ss(7,1,1).p("AiAnMQgLALgKAKQhpBqhQC0QhQCyAOC0QAOCzCLA3QCLA3C5hYQC6hYCMiv");
	this.shape_30.setTransform(65.1,267.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A62E52").ss(7,1,1).p("AjEmjQhLBdg8CIQhQC0APCxQAOCzCMA2QCMA2C/heQDBhfB2im");
	this.shape_31.setTransform(64.8,271.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A62E52").ss(7,1,1).p("AGOBeQhrCijEBiQjDBiiMg2QiNg1gOizQgOiyBQi0QA6iEBIhc");
	this.shape_32.setTransform(64.6,271.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A62E52").ss(7,1,1).p("AiHnFQgGAFgFAGQhpBqhQC0QhQCyAPCzQAOCzCMA2QCMA2C/heQDBhfB2im");
	this.shape_33.setTransform(64.8,267.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A62E52").ss(7,1,1).p("Aifm8QhjBohMCsQhQCyAOC0QAOCzCLA3QCLA3C5hYQC6hYCMiv");
	this.shape_34.setTransform(65.1,269);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A62E52").ss(7,1,1).p("AjPmjQhIBcg6CEQhQC0AOCxQAOCzCKA4QCKA4CyhRQC0hSChi2");
	this.shape_35.setTransform(65.4,271.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A62E52").ss(7,1,1).p("AjJmqQhNBfg+CLQhQC0AOCyQAOCzCJA5QCJA5CshLQCthMC2i+");
	this.shape_36.setTransform(65.7,271.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A62E52").ss(7,1,1).p("AGbCGQjBDCiqBJQipBIiIg6QiIg6gOizQgPiyBQizQBHifBahm");
	this.shape_37.setTransform(65.9,270.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},110).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},3).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_8,p:{x:77.2,y:214}},{t:this.shape_7}]},1).to({state:[{t:this.shape_8,p:{x:76.5,y:212.7}},{t:this.shape_9}]},2).to({state:[{t:this.shape_8,p:{x:75,y:211.5}},{t:this.shape_10}]},32).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},3).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},3).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},1).wait(39));

	// GUITAR
	this.instance_2 = new lib.GUITAR("synched",0);
	this.instance_2.setTransform(200.5,291.3,0.905,0.905,0,0,0,179.5,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(110).to({scaleY:0.9,skewX:-0.3,x:198.6,y:289.5},0).wait(2).to({skewX:-0.5,x:196.4,y:287.3},0).wait(3).to({skewX:-0.1,x:198,y:290.3},0).wait(2).to({regX:179.2,regY:92.3,scaleX:0.91,scaleY:0.92,skewX:1.8,skewY:1.6,x:198.8,y:298},0).wait(2).to({regX:179.6,regY:92.1,scaleX:0.91,scaleY:0.91,skewX:3.3,skewY:2.8,x:203.2,y:304},0).wait(2).to({regX:179.5,skewX:4.1,skewY:3.6,x:202.6,y:306.6},0).wait(1).to({startPosition:0},0).wait(2).to({x:202,y:305.3},0).wait(32).to({regY:92,scaleY:0.91,skewX:3.8,x:200.9,y:304.4},0).wait(2).to({regY:92.1,skewX:2.6,skewY:2.6,x:201.2,y:301.9},0).wait(2).to({regY:92.2,scaleY:0.91,rotation:1.3,skewX:0,skewY:0,x:199.6,y:300.6},0).wait(1).to({rotation:0,x:200.5,y:295.8},0).wait(1).to({y:292.6},0).wait(2).to({y:290},0).wait(2).to({y:291.3},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(39));

	// PopsBody_Idle
	this.instance_3 = new lib.POPSICLEFACE_idle("synched",0);
	this.instance_3.setTransform(141.5,168.9,0.581,0.581,0,0,0,-71.9,-84.8);

	this.instance_4 = new lib.PosicleBody();
	this.instance_4.setTransform(63.8,-2.5,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:0,skewY:0,regX:-71.9,rotation:0}}]}).to({state:[{t:this.instance_4,p:{scaleY:0.9,skewX:-0.4,x:59.2,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.578,skewX:-0.4,x:138.5,y:167.9,startPosition:110,skewY:0,regX:-71.9,rotation:0}}]},110).to({state:[{t:this.instance_4,p:{scaleY:0.9,skewX:-0.6,x:56.2,y:-4.8,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.578,skewX:-0.6,x:136,y:165.7,startPosition:112,skewY:0,regX:-71.9,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.9,skewX:-0.2,x:60,y:-1.8,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.578,skewX:-0.2,x:140.7,y:169.4,startPosition:115,skewY:0,regX:-71.9,rotation:0}}]},3).to({state:[{t:this.instance_4,p:{scaleY:0.921,skewX:1.8,x:71.8,y:1.8,scaleX:0.906,skewY:1.6,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.593,skewX:1.6,x:152.9,y:175.2,startPosition:117,skewY:1.6,regX:-71.9,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:3.3,x:83.6,y:10.5,scaleX:0.905,skewY:2.8,rotation:0}},{t:this.instance_3,p:{regY:-84.6,scaleY:0.581,skewX:3.3,x:161.6,y:186.5,startPosition:119,skewY:2.8,regX:-71.9,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:4.1,x:87,y:11.6,scaleX:0.905,skewY:3.6,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.581,skewX:4.1,x:162.8,y:188.5,startPosition:121,skewY:3.6,regX:-71.7,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:4.1,x:87,y:11.6,scaleX:0.905,skewY:3.6,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.581,skewX:4.1,x:162.8,y:188.5,startPosition:122,skewY:3.6,regX:-71.7,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:4.1,x:86.3,y:10.3,scaleX:0.905,skewY:3.6,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.581,skewX:4.1,x:162.1,y:187.2,startPosition:124,skewY:3.6,regX:-71.7,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.908,skewX:3.8,x:83.7,y:8.3,scaleX:0.905,skewY:3.6,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.583,skewX:3.8,x:160.4,y:186,startPosition:156,skewY:3.6,regX:-71.7,rotation:0}}]},32).to({state:[{t:this.instance_4,p:{scaleY:0.908,skewX:2.6,x:78,y:7.9,scaleX:0.905,skewY:2.6,rotation:0}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.583,skewX:2.6,x:156.3,y:182.9,startPosition:158,skewY:2.6,regX:-71.7,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:69.6,y:7.6,scaleX:0.905,skewY:0,rotation:1.3}},{t:this.instance_3,p:{regY:-84.7,scaleY:0.581,skewX:0,x:148.6,y:180.1,startPosition:160,skewY:0,regX:-71.9,rotation:1.3}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:2,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:143.5,y:174.7,startPosition:161,skewY:0,regX:-71.9,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-1.2,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:142.2,y:170.8,startPosition:162,skewY:0,regX:-71.9,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-3.8,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:167.6,startPosition:164,skewY:0,regX:-71.9,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:166,skewY:0,regX:-71.9,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:169,skewY:0,regX:-71.9,rotation:0}}]},3).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:177,skewY:0,regX:-71.9,rotation:0}}]},8).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:185,skewY:0,regX:-71.9,rotation:0}}]},8).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:193,skewY:0,regX:-71.9,rotation:0}}]},8).to({state:[{t:this.instance_4,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,scaleX:0.905,skewY:0,rotation:0}},{t:this.instance_3,p:{regY:-84.8,scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:201,skewY:0,regX:-71.9,rotation:0}}]},8).wait(39));

	// Layer 11
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDrQjBDCiqBJQipBIiIg6QiIg6gOizQgPizBQiyQBQi0BphqQBphqBZhH");
	this.shape_38.setTransform(65.9,260);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDqQi/DBiqBIQioBIiIg5QiJg6gQiyQgQiyBPixQBOizBohqQBohpBYhH");
	this.shape_39.setTransform(63.9,258.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDqQi/DBipBIQioBIiIg5QiJg6gRiyQgQiyBOixQBNizBohqQBnhpBZhH");
	this.shape_40.setTransform(61.7,256.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDqQjADBiqBIQioBIiIg5QiJg6gPiyQgPiyBPixQBPizBphqQBohpBYhH");
	this.shape_41.setTransform(63.3,259.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A62E52").ss(7,1,1).p("AnOmdIgEgEQjlCHgdEHQgdEGD4BtQDyBsEAhEQDeg8DQhnQCdhPCUhg");
	this.shape_42.setTransform(116.7,253.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A62E52").ss(7,1,1).p("At+lsQg8CoBCDFQBDDHCGBEQCGBDC8AZQC7AYEdhhQEfhhIRkG");
	this.shape_43.setTransform(166.1,249.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A62E52").ss(7,1,1).p("AwvlCQABACAAADQADDaB6CdQB7CfCRAuQCSAuDdAMQDcANEchQQEdhQCcgpQCcgpEbhfAwxlAIADAD");
	this.shape_44.setTransform(184.5,246);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A62E52").ss(7,1,1).p("AyEkkQAUDbC3CXQCwCTDiAqQC+AlC7gQQDCgPC/gmQC9glC5gtQC6gvCvhHQBvgrBkg6");
	this.shape_45.setTransform(194.2,245.6,1,1,0,0,0,1.2,2.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A62E52").ss(7,1,1).p("AABABIgBgB");
	this.shape_46.setTransform(77.2,214);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A62E52").ss(7,1,1).p("AyEkkQAUDbC2CXQCxCTDiAqQC+AlC7gQQDCgPC/gmQC9glC5gtQC5gvCwhHQBvgrBkg6");
	this.shape_47.setTransform(193.5,244.3,1,1,0,0,0,1.2,2.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A62E52").ss(7,1,1).p("AxqkuQAVDkC0CcQCuCYDcArQC6AlC4gQQC8gRC7gnQC5gmC0gwQC1gxCqhKQBsgtBhg9");
	this.shape_48.setTransform(189.6,244.3,1,1,0,0,0,1.5,2.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A62E52").ss(7,1,1).p("AwIkvQAAADAAACQAbDZB4CYQB5CZC9AsQC8ArDAgJQDAgIBlgUQBmgTCogtQCogtH0juAwLktIADAD");
	this.shape_49.setTransform(176.9,241.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A62E52").ss(7,1,1).p("ALZhWQk2EEitBXQitBWiNAiQiPAhjfhQQjehQgqiQQgriOARiJQASiIBShV");
	this.shape_50.setTransform(133.2,251.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#A62E52").ss(7,1,1).p("AIkASQnCFWh/AvQiBAviSgWQiSgXgyhcQgyhcADiCQADiABainQBbinBbhH");
	this.shape_51.setTransform(97,254.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A62E52").ss(7,1,1).p("AG4CmQhqCmjRBvQjPBvifgoQifgngeirQgeirBKiyQBLi0BrhvQBrhvBfhM");
	this.shape_52.setTransform(73.7,254.7,1,1,0,0,0,-1.5,-0.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#A62E52").ss(7,1,1).p("AGdDVQhvCjjMBiQjKBhiSg1QiRg2gPizQgPizBTiyQBTi0BthqQBthqBchH");
	this.shape_53.setTransform(66.6,256.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#A62E52").ss(7,1,1).p("AGODVQhrCjjEBiQjDBhiMg1QiNg2gOizQgOizBQiyQBQi0BphqQBohqBZhH");
	this.shape_54.setTransform(64.6,259.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#A62E52").ss(7,1,1).p("AAmocQhZBHhoBqQhpBqhQC0QhQCyAOCzQAOCzCJA6QCJA5CshLQCthMC2i+");
	this.shape_55.setTransform(65.7,259.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#A62E52").ss(7,1,1).p("AAoocQhZBHhpBqQhpBqhQC0QhQCyAPC0QAOCzCJA5QCJA4CwhOQCwhPCsi6");
	this.shape_56.setTransform(65.6,259.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A62E52").ss(7,1,1).p("AAsoaQhZBHhoBqQhpBqhQC0QhQCyAOC0QAOCzCLA3QCLA3C5hYQC6hYCMiv");
	this.shape_57.setTransform(65.1,259.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#A62E52").ss(7,1,1).p("AAwoYQhZBHhpBqQhpBqhQC0QhQCyAPCzQAOCzCMA2QCMA2C/heQDBhfB2im");
	this.shape_58.setTransform(64.8,259.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#A62E52").ss(7,1,1).p("AAsoZQhZBHhoBqQhpBqhQC0QhQCyAOCzQAOCzCLA3QCLA3C5hXQC6hZCMiu");
	this.shape_59.setTransform(65.1,259.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#A62E52").ss(7,1,1).p("AApobQhZBHhoBqQhpBqhQC0QhQCyAOC0QAOCzCKA4QCKA4CyhRQC0hSChi3");
	this.shape_60.setTransform(65.4,259.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_39}]},110).to({state:[{t:this.shape_40}]},2).to({state:[{t:this.shape_41}]},3).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},2).to({state:[{t:this.shape_46,p:{x:77.2,y:214}},{t:this.shape_45}]},1).to({state:[{t:this.shape_46,p:{x:76.5,y:212.7}},{t:this.shape_47}]},2).to({state:[{t:this.shape_46,p:{x:75,y:211.5}},{t:this.shape_48}]},32).to({state:[{t:this.shape_49}]},2).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},2).to({state:[{t:this.shape_54}]},2).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},2).to({state:[{t:this.shape_57}]},2).to({state:[{t:this.shape_58}]},2).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},2).to({state:[{t:this.shape_60}]},2).to({state:[{t:this.shape_55}]},2).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},3).to({state:[{t:this.shape_58}]},2).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},2).to({state:[{t:this.shape_60}]},2).to({state:[{t:this.shape_55}]},2).to({state:[{t:this.shape_38}]},1).wait(39));

	// Layer 7
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A62E52").s().p("Aj3AhQg8iTgriwQghiFAAgYQAAgTAKgPQALgOAOgCQAkgGAFBEQAMBIAQA1IArB6QAcBQALAxQAlCwBzCYQBzCbBmAAQBMAAAnigQANgxAHg8IAFgzQAAgagHhJIgQhbQAAgNAFgJQAJgRAWAAQAnAAAOByQAHA3gBA6QAAARgHAxQgJBKgRA+Qg2DChnAAQj/AAi6nRg");
	this.shape_61.setTransform(233.6,263);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A62E52").s().p("Aj1AhQg9iSgtivQgjiEAAgYQAAgTAKgPQALgOAOgCQAkgFAGBDQAMBIAQA0IAtB6QAdBPALAxQAnCvB0CXQB0CZBmAAQBMAAAmieQAMgxAHg8IAEgyQAAgagIhJIgQhaQgBgNAFgJQAJgRAXAAQAnAAAOBxQAIA3AAA6QAAAQgHAxQgJBKgQA9Qg0DBhnAAQj/AAi+nOg");
	this.shape_62.setTransform(231.2,261.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A62E52").s().p("Aj1AhQg9iSguivQgiiEgBgYQAAgTAKgPQALgOAOgCQAkgFAGBDQAMBIARA0IAsB6QAeBPALAxQAoCvB0CXQB1CZBmAAQBMAAAlieQAMgxAHg8IAEgyQAAgagIhJIgRhaQAAgNAEgJQAJgRAXAAQAnAAAPBxQAHA3AAA6QABAQgHAxQgIBKgRA9QgzDBhnAAQj/AAjAnOg");
	this.shape_63.setTransform(229,259.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#A62E52").s().p("Aj3AhQg7iSgtivQgiiEABgYQAAgTAKgPQAKgOAOgCQAkgFAGBDQAMBIAQA0IArB6QAdBPALAxQAnCvBzCXQBzCZBmAAQBNAAAmieQAMgxAIg8IAEgyQAAgagHhJIgRhaQAAgNAFgJQAJgRAXAAQAnAAAOBxQAGA3AAA6QAAAQgGAxQgJBKgRA9Qg1DBhoAAQj+AAi9nOg");
	this.shape_64.setTransform(230.9,262.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A62E52").s().p("ACsIDQj+gIisneQg2iXgni1QgdiIABgZQABgTALgOQALgOAOgCQAkgFAEBGQAIBJAPA2IAnB+QAaBRAJAzQAgC0BuCeQBtChBmACQBMADAtiiQAOgyAJg8IAHg0QAAgbgEhKIgNhdQAAgNAFgKQAKgQAWABQAnABAKByQAFA6gCA7QAAARgJAyQgMBLgTA+Qg7DChlAAIgDAAg");
	this.shape_65.setTransform(233.6,269.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A62E52").s().p("ACaH/Qj+gNignZQgyiWgiiyQgZiGABgYQACgSALgPQAMgNAOgCQAkgEACBEQAHBJAMA1IAkB8QAYBRAIAyQAbCxBqCeQBqCgBlAFQBMAEAxidQAPgyALg7IAHgyQACgbgDhJIgKhbQABgNAFgKQAKgPAWABQAnACAHBwQAEA5gEA6QgBARgKAwQgOBKgUA9QhAC6hjAAIgFAAg");
	this.shape_66.setTransform(238.9,277);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#A62E52").s().p("ACQIBQj+gQiYnbQgxiWgfizQgYiGACgZQABgSAMgOQAMgOAOgBQAkgDABBEQAGBIAMA2QAEATAeBqQAXBQAHAzQAZCxBnCgQBoCgBmAHQBLAEAzicQAQgxAMg7IAIgyQACgagChJQgJhYAAgEQABgNAFgJQALgQAWACQAmACAGBwQADA6gFA5QgBARgKAxQgPBJgWA8QhBC5hiAAIgHgBg");
	this.shape_67.setTransform(239,280.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A62E52").s().p("ACUIDQj+gQibndQgxiXghizQgYiHACgZQABgSAMgOQALgOAOgBQAkgDACBEQAGBJANA2IAiB9QAYBRAGAzQAaCyBpCgQBoChBmAHQBMAFAyidQAQgyALg7IAHgyQACgbgChJQgKhZABgDQABgNAFgKQAKgPAXABQAmADAGBwQAEA6gFA6QgBARgKAxQgPBJgVA9QhAC5hjAAIgGgBg");
	this.shape_68.setTransform(237.1,277.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A62E52").s().p("ACiH/Qj+gLilnbQg0iWgkiyQgbiHABgYQABgTALgOQAMgOAOgBQAjgEADBEQAIBJAOA1IAlB9QAZBQAIAyQAdCzBsCdQBsCgBlAFQBMADAvieQAPgxAKg8IAHgyQABgbgDhJIgMhcQABgNAFgJQAKgQAWABQAnACAIBwQAFA6gDA6QgBARgJAwQgNBKgUA+Qg9C7hkAAIgFAAg");
	this.shape_69.setTransform(236.5,274.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A62E52").s().p("ACzH4Qj/gGiwnVQg4iUgoixQgeiGABgYQAAgTAMgOQAKgOAOgCQAkgEAEBEQAKBIAPA1IAoB7QAbBQAJAyQAhCxBwCaQBvCdBmADQBMABArieQAOgyAJg7IAFgzQABgagGhJQgNhYAAgDQAAgNAGgKQAJgPAWAAQAnABALByQAGA3gCA6QgBAQgIAyQgLBKgSA9Qg6C+hlAAIgCAAg");
	this.shape_70.setTransform(233.6,272.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61,p:{y:263}}]}).to({state:[{t:this.shape_62}]},110).to({state:[{t:this.shape_63}]},2).to({state:[{t:this.shape_64}]},3).to({state:[{t:this.shape_65}]},2).to({state:[{t:this.shape_66}]},2).to({state:[{t:this.shape_67,p:{x:239,y:280.1}}]},2).to({state:[{t:this.shape_67,p:{x:239,y:280.1}}]},1).to({state:[{t:this.shape_67,p:{x:238.4,y:278.8}}]},2).to({state:[{t:this.shape_68}]},32).to({state:[{t:this.shape_69}]},2).to({state:[{t:this.shape_70}]},2).to({state:[{t:this.shape_61,p:{y:267.6}}]},1).to({state:[{t:this.shape_61,p:{y:264.3}}]},1).to({state:[{t:this.shape_61,p:{y:261.7}}]},2).to({state:[{t:this.shape_61,p:{y:263}}]},2).to({state:[{t:this.shape_61,p:{y:263}}]},3).to({state:[{t:this.shape_61,p:{y:263}}]},8).to({state:[{t:this.shape_61,p:{y:263}}]},8).to({state:[{t:this.shape_61,p:{y:263}}]},8).to({state:[{t:this.shape_61,p:{y:263}}]},8).wait(39));

	// Leg
	this.instance_5 = new lib.Leg("synched",0);
	this.instance_5.setTransform(105.2,341.3,0.905,0.905,4.3,0,0,18.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(110).to({scaleX:0.91,scaleY:0.9,rotation:0,skewX:3.8,skewY:4.3,x:103.7,y:339.2},0).wait(2).to({skewX:3.6,x:101.7,y:336.9},0).wait(3).to({scaleX:0.91,skewX:4.1,x:102.9,y:339.9},0).wait(2).to({regX:17.9,regY:16.8,scaleY:0.92,rotation:6,skewX:0,skewY:0,x:102.2,y:346.1},0).wait(2).to({regX:18.1,regY:16.9,scaleX:0.9,scaleY:0.91,rotation:0,skewX:7.6,skewY:7.1,x:105,y:349.2},0).wait(2).to({regX:18.2,scaleY:0.91,skewX:8.4,skewY:7.9,x:103.9,y:350.5},0).wait(1).to({startPosition:0},0).wait(2).to({x:103.3,y:349.2},0).wait(32).to({regX:18.1,scaleX:0.91,scaleY:0.91,skewX:8.1,x:102.4,y:348.6},0).wait(2).to({regX:18.2,rotation:6.9,skewX:0,skewY:0,x:103.7,y:347.7},0).wait(2).to({regX:18.1,scaleY:0.91,rotation:5.6,x:103.1,y:348.3},0).wait(1).to({rotation:4.3,x:105.2,y:345.8},0).wait(1).to({y:342.6},0).wait(2).to({y:340},0).wait(2).to({y:341.3},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(39));

	// Leg
	this.instance_6 = new lib.Leg("synched",0);
	this.instance_6.setTransform(172.9,339.1,0.905,0.905,-4.7,0,0,16.6,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(110).to({scaleX:0.9,scaleY:0.9,rotation:0,skewX:-5.1,skewY:-4.5,x:171.4,y:337},0).wait(2).to({scaleY:0.9,skewX:-5.3,x:169.4,y:334.8},0).wait(3).to({scaleX:0.91,scaleY:0.9,skewX:-4.8,x:170.6,y:337.8},0).wait(2).to({regY:18.1,scaleX:0.91,scaleY:0.92,skewX:-2.7,skewY:-3,x:170,y:345.7},0).wait(2).to({regY:18.2,scaleY:0.9,skewX:-1.2,skewY:-1.7,x:172.8,y:350.4},0).wait(2).to({regX:16.5,scaleX:0.91,skewX:-0.4,skewY:-1,x:171.7,y:352.5},0).wait(1).to({startPosition:0},0).wait(2).to({x:171,y:351.2},0).wait(32).to({scaleY:0.91,skewX:-0.7,x:170.2,y:350.6},0).wait(2).to({skewX:-1.9,skewY:-2,x:171.4,y:348.6},0).wait(2).to({regX:16.6,regY:18.1,scaleY:0.91,rotation:-3.3,skewX:0,skewY:0,x:170.9,y:347.6},0).wait(1).to({regY:18.2,rotation:-4.6,x:172.9,y:343.6},0).wait(1).to({y:340.4},0).wait(2).to({y:337.8},0).wait(2).to({y:339.1},0).wait(3).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(39));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.8,-2.5,338.2,502.8);


(lib.FreezerBurn_CookingTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hand - L
	this.instance = new lib.handL("single",0);
	this.instance.setTransform(269.7,254.9,0.905,0.905,0,0,0,16.2,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:14.9,scaleY:0.91,skewX:-0.4,x:267.2,y:251.7},0).wait(2).to({regX:16.3,regY:14.8,scaleY:0.9,skewX:-1.9,skewY:-2.1,x:269,y:249.5},0).wait(2).to({regX:16.2,regY:14.9,scaleX:0.9,rotation:-5.8,skewX:0,skewY:0,x:280.7,y:247},0).wait(1).to({regX:16.3,regY:14.8,rotation:-5.3,x:269.6,y:246.2},0).wait(2).to({regX:16.1,rotation:-4.8,x:257.9,y:252.1},0).wait(2).to({regX:16.2,scaleX:0.91,scaleY:0.91,rotation:-3.4,x:248.7,y:261.9},0).wait(2).to({rotation:-3.1,x:244.4,y:269.3},0).wait(1).to({rotation:-3.4,x:248.7,y:263.1},0).wait(2).to({regY:14.9,scaleX:0.9,scaleY:0.9,rotation:-5.3,x:257.6,y:249.2},0).wait(2).to({regY:14.8,rotation:-4.8,x:269.9,y:244.5},0).wait(2).to({regY:14.9,rotation:-5.8,x:280.7,y:247},0).wait(1).to({regX:16.3,regY:14.8,rotation:-5.3,x:269.6,y:246.2},0).wait(2).to({regX:16.1,rotation:-4.8,x:257.9,y:252.1},0).wait(2).to({regX:16.2,scaleX:0.91,scaleY:0.91,rotation:-3.4,x:248.7,y:261.9},0).wait(2).to({rotation:-3.1,x:244.4,y:269.3},0).wait(1).to({rotation:-3.4,x:248.7,y:263.1},0).wait(2).to({regY:14.9,scaleX:0.9,scaleY:0.9,rotation:-5.3,x:257.6,y:249.2},0).wait(2).to({regY:14.8,rotation:-4.8,x:269.9,y:244.5},0).wait(2).to({regY:14.9,rotation:-5.8,x:280.7,y:247},0).wait(1).to({regX:16.3,regY:14.8,rotation:-5.3,x:269.6,y:246.2},0).wait(2).to({regX:16.1,rotation:-4.8,x:257.9,y:252.1},0).wait(2).to({regX:16.2,scaleX:0.91,scaleY:0.91,rotation:-3.4,x:248.7,y:261.9},0).wait(2).to({rotation:-3.1,x:244.4,y:269.3},0).wait(1).to({rotation:-3.4,x:248.7,y:263.1},0).wait(2).to({regY:14.9,scaleX:0.9,scaleY:0.9,rotation:-5.3,x:257.6,y:249.2},0).wait(2).to({regY:14.8,rotation:-4.8,x:269.9,y:244.5},0).wait(2).to({regY:14.9,rotation:-5.8,x:280.7,y:247},0).wait(2).to({regX:16.1,regY:14.8,rotation:-7.3,x:280.3,y:265.1},0).wait(1).to({regX:16.2,rotation:-10.1,x:273,y:260},0).wait(2).to({regY:15,scaleX:0.91,scaleY:0.91,rotation:2.9,x:272.1,y:285.7},0).wait(1).to({regY:14.9,rotation:0,x:266.5,y:251.7},0).wait(1).to({regY:15,rotation:-3.1,x:266,y:235.7},0).wait(1).to({regX:16.1,rotation:-4.4,x:264,y:226.4},0).wait(2).to({regX:16.2,regY:14.9,rotation:-3.3,x:264.1,y:232.4},0).wait(2).to({regX:16.1,scaleX:0.9,scaleY:0.9,rotation:0.5,x:263.9,y:261.4},0).wait(1).to({regX:16.2,regY:14.8,rotation:3.3,x:269,y:280.8},0).wait(2).to({rotation:2.5,x:268.1,y:275.6},0).wait(1).to({regY:14.9,rotation:-1.7,x:270.3,y:253.8},0).wait(1).to({regX:16.1,rotation:-3.1,x:269.7,y:246.1},0).wait(2).to({regX:16.2,rotation:-4.6,y:232.8},0).wait(2).to({x:268.2,y:229.8},0).wait(4).to({regX:16.1,rotation:-2.8,x:268.1,y:238},0).wait(2).to({regX:16.2,regY:14.8,rotation:3.3,x:269,y:280.8},0).wait(1).to({rotation:4.8,x:268.6,y:294.8},0).wait(3).to({regX:16.3,rotation:3.8,x:267.8,y:288.7},0).wait(1).to({x:267.2,y:285.7},0).wait(33).to({regX:16.2,rotation:5.1,x:268.4,y:298.2},0).wait(1).to({rotation:6.3,x:267.9,y:311.8},0).wait(1).to({rotation:5.1,x:270.3,y:316.1},0).wait(2).to({rotation:4.3,x:267.3,y:314.4},0).wait(1).to({rotation:2.3,x:261.9,y:311.7},0).wait(1).to({regY:15,scaleX:0.9,scaleY:0.9,rotation:-2.5,x:245.9,y:290},0).wait(1).to({regY:14.9,rotation:-6.6,x:233.7,y:255.1},0).wait(1).to({regX:16.1,rotation:-8.4,x:233.2,y:235.1},0).wait(1).to({rotation:-9.4,x:230.8,y:223.3},0).wait(2).to({regY:15,rotation:-10.2,x:228.7,y:218.3},0).wait(1).to({rotation:-11,x:228.4,y:212.6},0).wait(2).to({y:215},0).wait(32).to({regY:15.1,rotation:-11.8,x:226.5,y:211.1},0).wait(2).to({rotation:-10.5,x:228.1,y:218.6},0).wait(2).to({rotation:-8.5,x:234,y:231.3},0).wait(1).to({regX:16.2,regY:14.9,scaleX:0.91,scaleY:0.91,rotation:-4.7,x:250.2,y:243.3},0).wait(1).to({regX:16.3,regY:15,rotation:-2.4,x:260.3,y:251.1},0).wait(1).to({regX:16.2,regY:14.8,rotation:0,skewX:-0.3,x:267.7,y:260.9},0).wait(2).to({skewX:0,x:269.7,y:257.3},0).wait(1).to({y:254.9},0).wait(1));

	// Hand - R
	this.instance_1 = new lib.HandR("single",2);
	this.instance_1.setTransform(109.1,282.3,0.905,0.905,30,0,0,23.1,27.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F33C6D").s().p("AAICQQgsgGgogNQgkgCgTgfQgMgUAAgQQAAgPACgNIAAAAIgBgFIAFgOQAFgKAAgFQAAgSgVgdIgKgNIgBgIQAAgNAIgKIACAAIAEAAQAHgEAJgDQAggIArAiQAIAIADAZIABAGIAAABIANACQAQgGALgNIAdgxQAmg7AbAdQAVAWAAAfQAAAfgoAkQgaAWgRAHIAGAKIA7gtQAsgjAUAYQALAPAAAVQAAAUgSAPQgNALhXAiQBWgMAQAQQAIAIgCALQAAAPgyANQgkAJgiAAIgbgBgAgMB2IAAAAIAAAAg");
	this.shape.setTransform(147,301.1);

	this.instance_2 = new lib.handL("single",0);
	this.instance_2.setTransform(31.5,290.9,0.944,0.905,0,93.6,-69.7,16.2,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F33C6D").s().p("AiDCJQgMgRAAgQQAAgPACgNIAAgBIgBgFIAFgOQAFgOAAgFQAAgSgVgVIgKgLIgBgHQAAgNAIgMIACgBIAEgBQAHgGAJgFQAggRArAWQAIAGADAXIABAHIAAAAQAGgBAHAAQAQgLALgQIAdg5QAmhGAbAVQAVAQAAAfQAAAfgoAwQgaAdgRAMIAGAIIA7g9QAsgwAUATQALALAAAXQAAAUgSASQgNAQhXA6QBWgkAQALQAIAGgCALQAAAPgyAbQgyAbgvAIQgsAIgogCQgIACgIAAQgYAAgPgUgAgMCCIAAgBIAAAAg");
	this.shape_1.setTransform(77,289.8,1,1,0,0,0,0,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F33C6D").s().p("AAdCjQgwgNgmgcQgmgcgcgfQgegVgBgjQgBgXAIgNQAIgNAIgJIAAgBIACgFQABgCAKgHQAKgIACgFQAJgPgDglIgCgQIADgHQAHgLAMgFIACACIAEACQAHgBAJADQAgAJAUAzQADALgKAWIgCAGIAAABIAKAIQAPADAQgGQAFgBAugZQA/ghAJAnQAHAdgQAbQgPAZg1AMQgiAHgTgDQABAHgBAFIBLgLQA4gIAFAfQACASgLAUQgKASgXADQgSADhcgNQBRAgAGAWQACALgGAIQgEAHgNAAQgPAAgZgIgAhABZIAAgBIAAAAg");
	this.shape_2.setTransform(148.5,322.5,1,1,0,0,0,0.5,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#A62E52").ss(7,1,1).p("Ah3llQhUB2g0CMQhdD4AxCEQAxCEBjg2QBjg2CDimQCGikBold");
	this.shape_3.setTransform(60.9,246.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A62E52").ss(8,1,1).p("AE5EJQhRDujwhmQjzhmgsjvQgtjtBLikQAVguAags");
	this.shape_4.setTransform(72.3,272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.905,rotation:30,skewX:0,skewY:0,x:109.1,y:282.3,scaleY:0.905,regX:23.1}}]}).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.911,rotation:0,skewX:29.4,skewY:30,x:106.8,y:279.3,scaleY:0.905,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:0,skewX:27.9,skewY:27.7,x:109.4,y:283.2,scaleY:0.905,regX:23.1}}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.904,rotation:104.5,skewX:0,skewY:0,x:154.4,y:336.1,scaleY:0.904,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.9,scaleX:1.049,rotation:0,skewX:96.3,skewY:65.6,x:102.4,y:313.5,scaleY:0.903,regX:23.1}}]},2).to({state:[{t:this.instance_2,p:{skewX:93.6,skewY:-69.7,x:31.5,y:290.9,scaleY:0.905}}]},2).to({state:[{t:this.instance_2,p:{skewX:108.6,skewY:-54.7,x:14,y:296.4,scaleY:0.905}}]},2).to({state:[{t:this.instance_2,p:{skewX:114.9,skewY:-48.4,x:21,y:296.4,scaleY:0.904}}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.902,rotation:80.5,skewX:0,skewY:0,x:171.5,y:339.2,scaleY:0.902,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.903,rotation:95.5,skewX:0,skewY:0,x:143.3,y:336.8,scaleY:0.903,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.9,scaleX:1.049,rotation:0,skewX:96.3,skewY:65.6,x:102.4,y:313.5,scaleY:0.903,regX:23.1}}]},2).to({state:[{t:this.instance_2,p:{skewX:93.6,skewY:-69.7,x:31.5,y:290.9,scaleY:0.905}}]},2).to({state:[{t:this.instance_2,p:{skewX:108.6,skewY:-54.7,x:14,y:296.4,scaleY:0.905}}]},2).to({state:[{t:this.instance_2,p:{skewX:114.9,skewY:-48.4,x:21,y:296.4,scaleY:0.904}}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.902,rotation:80.5,skewX:0,skewY:0,x:171.5,y:339.2,scaleY:0.902,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.903,rotation:95.5,skewX:0,skewY:0,x:143.3,y:336.8,scaleY:0.903,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.9,scaleX:1.049,rotation:0,skewX:96.3,skewY:65.6,x:102.4,y:313.5,scaleY:0.903,regX:23.1}}]},2).to({state:[{t:this.instance_2,p:{skewX:93.6,skewY:-69.7,x:31.5,y:290.9,scaleY:0.905}}]},2).to({state:[{t:this.instance_2,p:{skewX:108.6,skewY:-54.7,x:14,y:296.4,scaleY:0.905}}]},2).to({state:[{t:this.instance_2,p:{skewX:114.9,skewY:-48.4,x:21,y:296.4,scaleY:0.904}}]},1).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.902,rotation:80.5,skewX:0,skewY:0,x:171.5,y:339.2,scaleY:0.902,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.902,rotation:80.5,skewX:0,skewY:0,x:164.5,y:360.2,scaleY:0.902,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.902,rotation:80.5,skewX:0,skewY:0,x:148.2,y:347.2,scaleY:0.902,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.5,scaleX:0.905,rotation:47.9,skewX:0,skewY:0,x:121.2,y:328.1,scaleY:0.905,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.905,rotation:29.8,skewX:0,skewY:0,x:106,y:279.5,scaleY:0.905,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.5,scaleX:0.905,rotation:26.7,skewX:0,skewY:0,x:107.5,y:222.8,scaleY:0.905,regX:23.1}}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.instance_1,p:{regY:27.5,scaleX:0.905,rotation:0,skewX:0.1,skewY:11.7,x:91.4,y:213.8,scaleY:1.152,regX:23.2}}]},2).to({state:[{t:this.shape_4},{t:this.instance_1,p:{regY:27.5,scaleX:0.691,rotation:0,skewX:4.5,skewY:-17.1,x:103.2,y:296.1,scaleY:1.578,regX:23}}]},2).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:93.3,skewX:0,skewY:0,x:119.4,y:350,scaleY:0.904,regX:23}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:107.5,skewX:0,skewY:0,x:117.1,y:364.6,scaleY:0.904,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:1.448,rotation:0,skewX:101.5,skewY:77.5,x:112.6,y:319.6,scaleY:0.99,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:1.141,rotation:0,skewX:75.2,skewY:62,x:108.2,y:275,scaleY:1.119,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:2.5,skewX:0,skewY:0,x:108.3,y:247.5,scaleY:0.904,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:-2.2,skewX:0,skewY:0,x:103.8,y:238.5,scaleY:0.904,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.862,rotation:0,skewX:-8.5,skewY:-19.6,x:107.7,y:259.4,scaleY:0.965,regX:23.1}}]},4).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:0,skewX:17.9,skewY:33.3,x:107.1,y:330.4,scaleY:1.388,regX:23}}]},2).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:79.8,skewX:0,skewY:0,x:97.5,y:367,scaleY:0.904,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:93.8,skewX:0,skewY:0,x:97.9,y:350.4,scaleY:0.904,regX:23.1}}]},3).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:93.8,skewX:0,skewY:0,x:97.9,y:346.8,scaleY:0.904,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:85.8,skewX:0,skewY:0,x:98,y:342.2,scaleY:0.904,regX:23.1}}]},33).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.904,rotation:66.3,skewX:0,skewY:0,x:105.3,y:339.4,scaleY:0.904,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:50.1,skewX:0,skewY:0,x:108.1,y:338.3,scaleY:0.904,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:34.3,skewX:0,skewY:0,x:105.2,y:329.7,scaleY:0.904,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.904,rotation:32.3,skewX:0,skewY:0,x:100.4,y:332.8,scaleY:0.904,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:27.3,skewX:0,skewY:0,x:87.1,y:324.9,scaleY:0.903,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:23.2,skewX:0,skewY:0,x:77.6,y:301.2,scaleY:0.903,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:21.4,skewX:0,skewY:0,x:78.7,y:286,scaleY:0.903,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:20.4,skewX:0,skewY:0,x:77.3,y:277.1,scaleY:0.903,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:19.6,skewX:0,skewY:0,x:76,y:274.2,scaleY:0.903,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:18.8,skewX:0,skewY:0,x:76.6,y:270.4,scaleY:0.903,regX:23.2}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:18.8,skewX:0,skewY:0,x:76.6,y:272.8,scaleY:0.903,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.903,rotation:18,skewX:0,skewY:0,x:75.4,y:271,scaleY:0.903,regX:23.2}}]},32).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.903,rotation:19.3,skewX:0,skewY:0,x:75.7,y:275.2,scaleY:0.903,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.8,scaleX:0.903,rotation:21.3,skewX:0,skewY:0,x:79.7,y:282.4,scaleY:0.903,regX:23.2}}]},2).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.905,rotation:25.1,skewX:0,skewY:0,x:92.5,y:284.2,scaleY:0.905,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.7,scaleX:0.905,rotation:27.4,skewX:0,skewY:0,x:100.9,y:285.6,scaleY:0.905,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.908,rotation:0,skewX:29.6,skewY:29.9,x:107.3,y:288.3,scaleY:0.902,regX:23.1}}]},1).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.905,rotation:30,skewX:0,skewY:0,x:109.1,y:284.7,scaleY:0.905,regX:23.1}}]},2).to({state:[{t:this.instance_1,p:{regY:27.6,scaleX:0.905,rotation:30,skewX:0,skewY:0,x:109.1,y:282.3,scaleY:0.905,regX:23.1}}]},1).wait(1));

	// Layer 4
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#A62E52").ss(7,1,1).p("AGbB8QjBDCiqBIQipBIiIg5QiIg6gOizQgPiyBQi0QBAiPBPhg");
	this.shape_5.setTransform(65.9,271.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A62E52").ss(7,1,1).p("AGbB8QjCDCiqBIQioBIiJg5QiIg7gOiyQgOixBRi0QBAiPBQhh");
	this.shape_6.setTransform(66.4,271.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A62E52").ss(8,1,1).p("AGYGRQjNgNjMggQjOgghth8Qhuh9AXiOQAXiPCniiQACgCADgDQAMgMAMgL");
	this.shape_7.setTransform(96.3,266.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A62E52").ss(8,1,1).p("AHaIeQjWhEjWhsQjUhrh4h9Qh4h9gyi1Qgxi2BZi7");
	this.shape_8.setTransform(110.6,279.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A62E52").ss(8,1,1).p("AjmmyQhHBMghBWQhKC7BsCiQBrCkCyBNQCvBNDNAo");
	this.shape_9.setTransform(65.8,267.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A62E52").ss(8,1,1).p("AD0liQh1AYhhArQkWB5AADOQAAB1CeBTQBoA3DrA9");
	this.shape_10.setTransform(0.7,256.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A62E52").ss(8,1,1).p("AD0lUQgFABgEAAQiIAJikBOQimBOgLB/QgLB8CSBvQCRBuCAAr");
	this.shape_11.setTransform(-10.5,261.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A62E52").ss(8,1,1).p("ACkF2Qj1iWhhh2QhihzBIiUQBHiTFehBQAJgCAKgC");
	this.shape_12.setTransform(0.4,259.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A62E52").ss(8,1,1).p("AAQl4QhCAtg8A5QimCcAgCKQAgCNB+BNQB8BNDUA+");
	this.shape_13.setTransform(42,259.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#A62E52").ss(8,1,1).p("AFyHFQjYhFjMhmQjOhmhLieQhMibBNjIQAXg9Afg7");
	this.shape_14.setTransform(94.1,277.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#A62E52").ss(8,1,1).p("AGvI0QiPg5iFhGQiGhIh1hhQh2hhhXiAQhVh7geiWQgeiXAliVQAEgQAFgR");
	this.shape_15.setTransform(128.4,282.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A62E52").ss(8,1,1).p("AGaINQhbghidhQQidhRiJh3QiLh3hDh4QhEh7gDiKQgCh8Axhw");
	this.shape_16.setTransform(102.3,284.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A62E52").ss(8,1,1).p("AionQQh4BlguB4QhKC7BsCiQBrCkCyBNQCvBODNAo");
	this.shape_17.setTransform(65.8,264.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#A62E52").ss(8,1,1).p("AECllQgCAAgCABQiBAZhpAuQkVB5AADOQAAB1CeBTQBoA3DqA9");
	this.shape_18.setTransform(1.7,255.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#A62E52").ss(8,1,1).p("ADvlTQiIAJijBOQimBOgLB+QgMB9CTBuQCRBvCAAq");
	this.shape_19.setTransform(-11,261.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A62E52").ss(8,1,1).p("AC8FxQj1iWhhh1Qhhh0BHiUQBEiNFDhB");
	this.shape_20.setTransform(-1.9,260.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#A62E52").ss(8,1,1).p("AhHlXQgUARgTATQimCbAgCNQAgCLB+BNQB8BMDUA/");
	this.shape_21.setTransform(42,263.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#A62E52").ss(8,1,1).p("AFyGSQjYhGjMhlQjOhmhLicQhMieBNjHQADgIAEgJ");
	this.shape_22.setTransform(94.1,282.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#A62E52").ss(8,1,1).p("AGvIEQiPg5iFhGQiGhIh1hhQh2hhhXh+QhVh9geiWQgYh3ASh2");
	this.shape_23.setTransform(128.4,287.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A62E52").ss(8,1,1).p("AGaIRQhbggidhRQidhQiJh3QiLh3hDh5QhEh6gDiLQgCiBA1hz");
	this.shape_24.setTransform(102.3,283.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#A62E52").ss(8,1,1).p("AjJnBQhdBZgoBmQhKC8BsCiQBrCjCyBOQCvBNDNAo");
	this.shape_25.setTransform(65.8,266.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#A62E52").ss(8,1,1).p("ADilhQgQAEgQAEQhYAXhMAhQkWB4AADPQAAB1CeBTQBoA3DrA8");
	this.shape_26.setTransform(0.7,256.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#A62E52").ss(8,1,1).p("AD/lUQgPABgRABQiIAJijBOQimBOgLB+QgMB9CTBuQCRBvCAAq");
	this.shape_27.setTransform(-9.4,261.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A62E52").ss(8,1,1).p("AC3FyQj1iWhhh1Qhih0BIiUQBFiPFMhB");
	this.shape_28.setTransform(-1.4,260.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A62E52").ss(8,1,1).p("AhhlLQgHAGgGAGQimCcAgCNQAgCKB+BNQB8BNDUA+");
	this.shape_29.setTransform(42,264.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#A62E52").ss(8,1,1).p("AFyGlQjYhGjMhlQjOhmhLicQhMieBNjHQALgcAMgb");
	this.shape_30.setTransform(94.1,280.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A62E52").ss(8,1,1).p("AGvIUQiPg5iFhGQiGhIh1hhQh2hhhXiAQhVh7geiWQgWhuAOhtQABgLACgLQACgOADgO");
	this.shape_31.setTransform(128.4,285.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A62E52").ss(8,1,1).p("AGvIgQiPg5iFhGQiGhIh1hhQh2hhhXiAQhVh7geiWQgdiTAiiS");
	this.shape_32.setTransform(121.4,305.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A62E52").ss(8,1,1).p("AGKF5QkPA5jpiPQj1iTggkXQgQiFAch8");
	this.shape_33.setTransform(108.7,309.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A62E52").ss(7,1,1).p("AGtF6QjvA+i6gVQi3gVhVgrQhVgqg0iTQgziTAsiuQAsiwBUhc");
	this.shape_34.setTransform(78.2,290.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A62E52").ss(7,1,1).p("AGaB5QjADDiqBJQinBIiIg5QiJg5gPizQgPixBQi0QA/iPBPhh");
	this.shape_35.setTransform(62.9,268.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A62E52").ss(7,1,1).p("AijlaQhdBzhDCFQhxDhAuBqQAuBqBoAIQBpAIDUi3QDWi1ByjN");
	this.shape_36.setTransform(67,244.3);

	this.instance_3 = new lib.HandR("single",2);
	this.instance_3.setTransform(92.7,204.8,0.905,0.905,11.7,0,0,23.1,27.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A62E52").ss(7,1,1).p("AgZl8QiFCQhdCvQiGD5AuBqQAuBqBagYQBZgYCmjEQCojCCDkY");
	this.shape_37.setTransform(57.5,236.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#A62E52").ss(7,1,1).p("AFUIyQjpgqitihQiviihDjjQhEjnBQjiQAOgmARgk");
	this.shape_38.setTransform(85.3,293.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#A62E52").ss(7,1,1).p("AEgKLQjMhniCi9QiGjBhBjfQhAjjAijpQAKhFAWhA");
	this.shape_39.setTransform(88.3,299.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#A62E52").ss(7,1,1).p("AGEGRQjdBIjmhDQjphDhEi5QhEi2CKkAQAshSAvhH");
	this.shape_40.setTransform(71.6,275.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#A62E52").ss(7,1,1).p("AGDgGQh1ChiaCAQibCEjEgTQhWgMgkhRQg3h5AwiyQAwivBgiYQAZgoAYgi");
	this.shape_41.setTransform(64.4,269.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#A62E52").ss(7,1,1).p("AGsiVQjCEhicCGQibCFjIgEQhWgBgkhRQg2h5AwiyQAwiwBgiYQAhg0Aggs");
	this.shape_42.setTransform(65.4,262.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A62E52").ss(7,1,1).p("AGWi/QicFAiaCQQiYCRiOACQiOACgkhRQg3h5AwiyQAwiwBgiYQAwhLAtg6");
	this.shape_43.setTransform(63.1,257.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#A62E52").ss(7,1,1).p("AGbgzQhfCujPCjQjMCjiPgoQiQgpgXiyQgXixBGi2QA4iSBJhl");
	this.shape_44.setTransform(66.5,264.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#A62E52").ss(7,1,1).p("AGHGpQhkBDh5AMQjyAFiji5QiYirgDjlQgDjtCOi+");
	this.shape_45.setTransform(74.1,289.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#A62E52").ss(7,1,1).p("AD7JvQjHh5iJi6QiMi8gVjpQgVjrBvjQQAUgnAZgk");
	this.shape_46.setTransform(72.4,304.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#A62E52").ss(7,1,1).p("AEPH/QkbhliGi9QiGi+ALiiQAKikBkivQALgUANgU");
	this.shape_47.setTransform(69.2,296);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#A62E52").ss(7,1,1).p("AhAooQgwA+gtBGQh5C9AdDgQAdDeCrCEQCoCECJBK");
	this.shape_48.setTransform(67.9,290.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A62E52").ss(7,1,1).p("Ah5nTQjFDcABDLQACEvDKB2QDIB3Dngk");
	this.shape_49.setTransform(66.1,296.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#A62E52").ss(7,1,1).p("AGLGJQjKBqjogUQklgngrixQgqiwAziNQAziPCSiZQBChFBDg+");
	this.shape_50.setTransform(65.7,300);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#A62E52").ss(7,1,1).p("AGZCtQjSCwiwA5QhRAbhJgBQhQgChEgkQiDhGACi0QABixBgisQBJiFBUhYQADgDACgC");
	this.shape_51.setTransform(65,313);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCmQjPCziwA7QisA7iChDQiFhFAAizQgBiwBdiuQBJiKBXhb");
	this.shape_52.setTransform(62.2,314.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCTQjJC6itBBQiqBBiEg/QiIg/gGizQgIixBXixQBFiMBThe");
	this.shape_53.setTransform(57.3,319.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#A62E52").ss(7,1,1).p("AGaBgQi3DLinBPQikBRiIg0QiNgzgWiyQgXixBGi1QA5iSBLhl");
	this.shape_54.setTransform(44,316.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#A62E52").ss(7,1,1).p("AGaA2QioDXiiBbQidBciNgpQiPgpgjixQgjiuA5i6QAviWBDhq");
	this.shape_55.setTransform(34.7,297.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAjQihDcifBgQiaBhiOglQiRgkgoiwQgpitA0i8QApiXBAhs");
	this.shape_56.setTransform(35.9,284);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAYQidDfidBjQiZBjiOgiQiSghgrivQgsitAwi9QAniXA+ht");
	this.shape_57.setTransform(34.4,276.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAPQiaDiicBlQiXBliPggQiSgfgtivQgvisAui9QAkiYA8hu");
	this.shape_58.setTransform(33.2,274.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAHQiXDkibBoQiWBniPgfQiTgdgviuQgxirAri/QAiiYA7hv");
	this.shape_59.setTransform(33.8,271.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAAQiUDkiZBqQiVBpiQgcQiTgcgxitQg0iqApjAQAfiYA6hw");
	this.shape_60.setTransform(32.6,272.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAMQiZDiibBnQiXBmiQggQiSgfguiuQgvisAsi+QAjiYA8hu");
	this.shape_61.setTransform(32.9,275.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#A62E52").ss(7,1,1).p("AGaAiQihDdifBhQiaBgiOglQiSgkgniwQgpisAzi9QAoiXBAhs");
	this.shape_62.setTransform(36.9,280.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#A62E52").ss(7,1,1).p("AiIGoQgwgBgugPQiNgugdixQgeiyBBi4QAziUBHhnAhdGrQgWACgUgBAGbBHQiwDSijBXQhVAuhRAI");
	this.shape_63.setTransform(49.4,278.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#A62E52").ss(7,1,1).p("AGbBiQi5DKilBQQimBQiKgzQiLg0gWiyQgXizBIi2QA5iRBLhl");
	this.shape_64.setTransform(57.9,277.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{scaleY:1,skewX:0,x:65.9,y:271.2}}]}).to({state:[{t:this.shape_5,p:{scaleY:1.006,skewX:-0.5,x:63.5,y:268}}]},1).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},2).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37},{t:this.instance_3}]},1).to({state:[]},2).to({state:[{t:this.shape_38}]},3).to({state:[{t:this.shape_39}]},2).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},2).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_44}]},4).to({state:[{t:this.shape_45}]},2).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},3).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},33).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},2).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},2).to({state:[{t:this.shape_59,p:{y:271.2}}]},1).to({state:[{t:this.shape_59,p:{y:273.6}}]},2).to({state:[{t:this.shape_60}]},32).to({state:[{t:this.shape_61}]},2).to({state:[{t:this.shape_62}]},2).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_5,p:{scaleY:1,skewX:-0.4,x:64,y:277.2}}]},1).to({state:[{t:this.shape_5,p:{scaleY:1,skewX:0,x:65.9,y:273.6}}]},2).to({state:[{t:this.shape_5,p:{scaleY:1,skewX:0,x:65.9,y:271.2}}]},1).wait(1));

	// GUITAR
	this.instance_4 = new lib.GUITAR("synched",0);
	this.instance_4.setTransform(200.5,291.3,0.905,0.905,0,0,0,179.5,92.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:0.91,skewX:-0.4,x:198.4,y:288.2},0).wait(2).to({regY:92.3,scaleY:0.9,skewX:-1.9,skewY:-2.1,x:201,y:288.6},0).wait(2).to({regX:179.6,regY:92.2,scaleX:0.9,rotation:-5.8,skewX:0,skewY:0,x:215.8,y:290.3},0).wait(1).to({rotation:-5.3,x:204.3,y:289},0).wait(2).to({regX:179.5,rotation:-4.8,x:192.3,y:294.3},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-3.4,x:181.9,y:302.5},0).wait(2).to({rotation:-3.1,x:177.4,y:309.6},0).wait(1).to({rotation:-3.4,x:181.9,y:303.7},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:-5.3,x:192.3,y:291.9},0).wait(2).to({regX:179.6,rotation:-4.8,x:204.2,y:286.7},0).wait(2).to({rotation:-5.8,x:215.8,y:290.3},0).wait(1).to({rotation:-5.3,x:204.3,y:289},0).wait(2).to({regX:179.5,rotation:-4.8,x:192.3,y:294.3},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-3.4,x:181.9,y:302.5},0).wait(2).to({rotation:-3.1,x:177.4,y:309.6},0).wait(1).to({rotation:-3.4,x:181.9,y:303.7},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:-5.3,x:192.3,y:291.9},0).wait(2).to({regX:179.6,rotation:-4.8,x:204.2,y:286.7},0).wait(2).to({rotation:-5.8,x:215.8,y:290.3},0).wait(1).to({rotation:-5.3,x:204.3,y:289},0).wait(2).to({regX:179.5,rotation:-4.8,x:192.3,y:294.3},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-3.4,x:181.9,y:302.5},0).wait(2).to({rotation:-3.1,x:177.4,y:309.6},0).wait(1).to({rotation:-3.4,x:181.9,y:303.7},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:-5.3,x:192.3,y:291.9},0).wait(2).to({regX:179.6,rotation:-4.8,x:204.2,y:286.7},0).wait(2).to({rotation:-5.8,x:215.8,y:290.3},0).wait(2).to({regY:92,rotation:-7.3,x:216.7,y:314.2},0).wait(1).to({rotation:-10.1,x:211.5,y:308},0).wait(2).to({regY:92.2,scaleX:0.91,scaleY:0.91,rotation:2.9,x:201.3,y:318.4},0).wait(1).to({rotation:0,x:197.5,y:288.2},0).wait(1).to({regX:179.5,rotation:-3.1,x:198.9,y:275.9},0).wait(1).to({regY:92.1,rotation:-4.4,x:198,y:267.9},0).wait(2).to({rotation:-3.3,x:197.3,y:272.8},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:0.5,x:194.5,y:297},0).wait(1).to({regX:179.6,regY:92.2,rotation:3.3,x:197.9,y:315.7},0).wait(2).to({regX:179.5,rotation:2.5,x:197.3,y:308.9},0).wait(1).to({regX:179.6,rotation:-1.7,x:202.5,y:292.4},0).wait(1).to({rotation:-3.1,x:202.9,y:286.3},0).wait(2).to({rotation:-4.6,x:203.8,y:274.7},0).wait(2).to({x:202.3,y:271.7},0).wait(4).to({rotation:-2.8,x:201.1,y:277.8},0).wait(2).to({rotation:3.3,x:197.9,y:313.1},0).wait(1).to({rotation:4.8,x:196.7,y:325.2},0).wait(3).to({regX:179.5,rotation:3.8,x:196.3,y:320.3},0).wait(1).to({x:195.7,y:317.3},0).wait(33).to({regX:179.6,rotation:5.1,x:196.5,y:328.2},0).wait(1).to({rotation:6.3,x:195.3,y:340.3},0).wait(1).to({rotation:5.1,x:198.4,y:346.2},0).wait(2).to({rotation:4.3,x:195.8,y:345.4},0).wait(1).to({rotation:2.3,x:191.4,y:345.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-2.5,x:178.7,y:329.5},0).wait(1).to({regX:179.7,rotation:-6.6,x:169.4,y:299.3},0).wait(1).to({rotation:-8.4,x:170.5,y:281.2},0).wait(1).to({rotation:-9.4,x:168.8,y:270.6},0).wait(2).to({regX:179.6,rotation:-10.2,x:167.4,y:266.4},0).wait(1).to({regX:179.7,rotation:-11,x:167.9,y:261.4},0).wait(2).to({y:263.8},0).wait(32).to({regX:179.6,regY:92.3,rotation:-11.8,x:166.5,y:260.8},0).wait(2).to({regX:179.7,regY:92.2,rotation:-10.5,x:167.1,y:266.9},0).wait(2).to({regX:179.6,rotation:-8.5,x:171.2,y:277.4},0).wait(1).to({regX:179.5,scaleX:0.91,scaleY:0.91,rotation:-4.7,x:184.3,y:285.4},0).wait(1).to({regY:92.1,rotation:-2.4,x:192.8,y:290.4},0).wait(1).to({regY:92.2,rotation:0,skewX:-0.3,x:198.8,y:297.3},0).wait(2).to({skewX:0,x:200.5,y:293.7},0).wait(1).to({y:291.3},0).wait(1));

	// PopsBody_Idle
	this.instance_5 = new lib.POPSICLEFACE_CookinTime2("synched",0);
	this.instance_5.setTransform(141.5,168.9,0.581,0.581,0,0,0,-71.9,-84.8);

	this.instance_6 = new lib.PosicleBody();
	this.instance_6.setTransform(63.8,-2.5,0.905,0.905);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,rotation:0,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:0,regY:-84.8,rotation:0,regX:-71.9,scaleX:0.581}}]}).to({state:[{t:this.instance_6,p:{scaleY:0.911,skewX:-0.5,x:58.5,y:-7.3,rotation:0,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.585,skewX:-0.5,x:138.1,y:165.2,startPosition:1,regY:-84.8,rotation:0,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0.1,x:65,y:-1.9,rotation:0,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.58,skewX:0.1,x:142.3,y:169.3,startPosition:3,regY:-84.8,rotation:0,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:113.8,y:3.4,rotation:6.8,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:170.6,y:182.9,startPosition:5,regY:-84.7,rotation:6.8,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.5,y:2,rotation:4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:153.9,y:178.5,startPosition:6,regY:-84.8,rotation:4,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:57.1,y:3.7,rotation:0.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.8,y:175.4,startPosition:8,regY:-84.8,rotation:0.3,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:27.3,y:13.1,rotation:-3.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:115.3,y:179.3,startPosition:10,regY:-84.8,rotation:-3.5,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:6.8,y:22.3,rotation:-6.7,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:104.3,y:183.2,startPosition:12,regY:-84.8,rotation:-6.7,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:27.3,y:13.1,rotation:-3.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:115.3,y:179.3,startPosition:13,regY:-84.8,rotation:-3.5,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:57.1,y:3.7,rotation:0.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.8,y:175.4,startPosition:15,regY:-84.8,rotation:0.3,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.5,y:2,rotation:4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:153.9,y:178.5,startPosition:17,regY:-84.8,rotation:4,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:113.8,y:3.4,rotation:6.8,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:170.6,y:182.9,startPosition:19,regY:-84.7,rotation:6.8,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.5,y:2,rotation:4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:153.9,y:178.5,startPosition:20,regY:-84.8,rotation:4,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:57.1,y:3.7,rotation:0.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.8,y:175.4,startPosition:22,regY:-84.8,rotation:0.3,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:27.3,y:13.1,rotation:-3.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:115.3,y:179.3,startPosition:24,regY:-84.8,rotation:-3.5,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:6.8,y:22.3,rotation:-6.7,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:104.3,y:183.2,startPosition:26,regY:-84.8,rotation:-6.7,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:27.3,y:13.1,rotation:-3.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:115.3,y:179.3,startPosition:27,regY:-84.8,rotation:-3.5,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:57.1,y:3.7,rotation:0.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.8,y:175.4,startPosition:29,regY:-84.8,rotation:0.3,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.5,y:2,rotation:4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:153.9,y:178.5,startPosition:31,regY:-84.8,rotation:4,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:113.8,y:3.4,rotation:6.8,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:170.6,y:182.9,startPosition:33,regY:-84.7,rotation:6.8,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.5,y:2,rotation:4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:153.9,y:178.5,startPosition:34,regY:-84.8,rotation:4,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:57.1,y:3.7,rotation:0.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.8,y:175.4,startPosition:36,regY:-84.8,rotation:0.3,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:27.3,y:13.1,rotation:-3.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:115.3,y:179.3,startPosition:38,regY:-84.8,rotation:-3.5,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:6.8,y:22.3,rotation:-6.7,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:104.3,y:183.2,startPosition:40,regY:-84.8,rotation:-6.7,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:27.3,y:13.1,rotation:-3.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:115.3,y:179.3,startPosition:41,regY:-84.8,rotation:-3.5,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:57.1,y:3.7,rotation:0.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.8,y:175.4,startPosition:43,regY:-84.8,rotation:0.3,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.5,y:2,rotation:4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:153.9,y:178.5,startPosition:45,regY:-84.8,rotation:4,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:113.8,y:3.4,rotation:6.8,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:170.6,y:182.9,startPosition:47,regY:-84.7,rotation:6.8,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:107,y:18.1,rotation:5.3,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:168.5,y:196,startPosition:49,regY:-84.6,rotation:5.3,regX:-72,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:88.3,y:29.7,rotation:2.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:158.3,y:204.3,startPosition:50,regY:-84.6,rotation:2.5,regX:-72,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:79.5,y:18.3,rotation:2.9,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:148.5,y:193.4,startPosition:52,regY:-84.7,rotation:2.9,regX:-71.7,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:59.9,y:-5.1,rotation:-0.1,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:138.2,y:166.1,startPosition:53,regY:-84.8,rotation:-0.1,regX:-71.7,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:45.7,y:-9.5,rotation:-3.2,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:133.1,y:157.2,startPosition:54,regY:-84.8,rotation:-3.2,regX:-71.7,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:38.6,y:-13.9,rotation:-4.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:129.6,y:150.7,startPosition:55,regY:-84.9,rotation:-4.5,regX:-71.7,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:43.1,y:-12,rotation:-3.4,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:131,y:154.4,startPosition:57,regY:-84.9,rotation:-3.4,regX:-71.8,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:60.7,y:2.1,rotation:0.5,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:136.7,y:174.2,startPosition:59,regY:-84.9,rotation:0.5,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:78.4,y:12.2,rotation:3.3,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:146.1,y:187.7,startPosition:60,regY:-84.8,rotation:3.3,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:73.8,y:9.6,rotation:2.5,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:143.9,y:184.2,startPosition:62,regY:-84.8,rotation:2.5,regX:-71.8,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:56.1,y:3.7,rotation:-1.8,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:139.4,y:172.3,startPosition:63,regY:-84.8,rotation:-1.8,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:49.8,y:1,rotation:-3.2,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:137,y:167.6,startPosition:64,regY:-84.8,rotation:-3.2,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:43.2,y:-6.2,rotation:-4.7,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:134.9,y:157.9,startPosition:66,regY:-84.8,rotation:-4.7,regX:-71.8,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:41.7,y:-9.2,rotation:-4.7,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:133.4,y:154.9,startPosition:68,regY:-84.8,rotation:-4.7,regX:-71.8,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:49.4,y:-8,rotation:-2.9,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:135.7,y:158.9,startPosition:72,regY:-84.9,rotation:-2.9,regX:-71.9,scaleX:0.58}}]},4).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:78.4,y:12.2,rotation:3.3,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:146.1,y:187.7,startPosition:74,regY:-84.8,rotation:3.3,regX:-71.9,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:85.1,y:21.2,rotation:4.8,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:148.1,y:198.4,startPosition:75,regY:-84.8,rotation:4.8,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:79.5,y:18.4,rotation:3.8,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:145.6,y:194.4,startPosition:78,regY:-84.9,rotation:3.8,regX:-71.9,scaleX:0.58}}]},3).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:78.9,y:15.4,rotation:3.8,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:145,y:191.4,startPosition:79,regY:-84.9,rotation:3.8,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:86.2,y:23.7,rotation:5.1,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:148.5,y:201.2,startPosition:112,regY:-84.8,rotation:5.1,regX:-71.9,scaleX:0.58}}]},33).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:91.9,y:33.4,rotation:6.3,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:150.1,y:212.3,startPosition:113,regY:-84.7,rotation:6.3,regX:-72,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:88.1,y:41.9,rotation:5.1,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:150.3,y:219.3,startPosition:114,regY:-84.8,rotation:5.1,regX:-72.1,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:81.4,y:42.5,rotation:4.3,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:146,y:219.2,startPosition:116,regY:-84.7,rotation:4.3,regX:-72,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.904,skewX:0,x:66.5,y:46.6,rotation:2.3,scaleX:0.904}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:137.3,y:220.8,startPosition:117,regY:-84.8,rotation:2.3,regX:-72,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:28.3,y:43.1,rotation:-2.6,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:113.1,y:207.4,startPosition:118,regY:-84.9,rotation:-2.6,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-0.8,y:24.2,rotation:-6.7,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:96.9,y:169.9,startPosition:119,regY:-84.8,rotation:-6.7,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-8.3,y:11.5,rotation:-8.5,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:93.9,y:154.2,startPosition:120,regY:-84.8,rotation:-8.5,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-14.8,y:4.3,rotation:-9.5,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:90,y:145,startPosition:121,regY:-84.8,rotation:-9.5,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-19.8,y:2.6,rotation:-10.3,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:86.9,y:141.9,startPosition:123,regY:-84.8,rotation:-10.3,regX:-71.9,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-22.9,y:0.2,rotation:-11.1,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:85.7,y:138.1,startPosition:124,regY:-84.7,rotation:-11.1,regX:-71.9,scaleX:0.58}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-22.9,y:2.6,rotation:-11.1,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:85.7,y:140.5,startPosition:126,regY:-84.7,rotation:-11.1,regX:-71.9,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-27.9,y:2.2,rotation:-11.9,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:82.6,y:138.6,startPosition:158,regY:-84.6,rotation:-11.9,regX:-71.9,scaleX:0.58}}]},32).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-21.5,y:4.1,rotation:-10.6,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:84.8,y:143.6,startPosition:160,regY:-84.6,rotation:-10.6,regX:-71.9,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.903,skewX:0,x:-7.8,y:8.1,rotation:-8.6,scaleX:0.903}},{t:this.instance_5,p:{scaleY:0.58,skewX:0,x:93.5,y:155.4,startPosition:162,regY:-84.6,rotation:-8.6,regX:-71.9,scaleX:0.58}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:23.3,y:4.2,rotation:-4.8,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:114.6,y:166.1,startPosition:163,regY:-84.9,rotation:-4.8,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:43,y:3,rotation:-2.5,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:128.4,y:170.9,startPosition:164,regY:-84.8,rotation:-2.5,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:-0.4,x:59.7,y:3.4,rotation:0,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:-0.4,x:138.8,y:174.9,startPosition:165,regY:-84.8,rotation:0,regX:-71.9,scaleX:0.581}}]},1).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:63.8,y:-0.1,rotation:0,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:141.5,y:171.3,startPosition:167,regY:-84.8,rotation:0,regX:-71.9,scaleX:0.581}}]},2).to({state:[{t:this.instance_6,p:{scaleY:0.905,skewX:0,x:63.8,y:-2.5,rotation:0,scaleX:0.905}},{t:this.instance_5,p:{scaleY:0.581,skewX:0,x:141.5,y:168.9,startPosition:168,regY:-84.8,rotation:0,regX:-71.9,scaleX:0.581}}]},1).wait(1));

	// Layer 11
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDrQjBDCiqBJQipBIiIg6QiIg6gOizQgPizBQiyQBQi0BphqQBphqBZhH");
	this.shape_65.setTransform(65.9,260);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDtQi/DDipBJQioBIiJg5QiJg7gQi0QgQi0BOizQBOi2BohqQBnhrBZhH");
	this.shape_66.setTransform(63.6,256.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDrQjCDCiqBJQipBHiIg5QiIg6gOizQgOizBRiyQBQi0BphpQBphqBZhH");
	this.shape_67.setTransform(66.4,260.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#A62E52").ss(8,1,1).p("AGYHoQjNgOjMgfQjOgghth9Qhuh8AXiQQAXiNCniiQCniiBCgo");
	this.shape_68.setTransform(96.3,257.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#A62E52").ss(8,1,1).p("AHaJxQjWhFjWhrQjUhrh4h+Qh4h9gyi0Qgxi2BZi8QArhcBHhJ");
	this.shape_69.setTransform(110.6,271.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#A62E52").ss(8,1,1).p("AgIoGQj9CNhJC8QhKC8BsChQBrCkCyBNQCvBODNAo");
	this.shape_70.setTransform(65.8,259.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#A62E52").ss(8,1,1).p("AFulsQgDgDgYAAQhUAAhtAVQiBAahnAtQkXB5AADOQAAB1CeBTQBqA3DoA9");
	this.shape_71.setTransform(12.5,254.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#A62E52").ss(8,1,1).p("AF4lXQgEgEhCACQhDACiIAKQiGAJimBOQimBOgLB+QgLB9CTBuQCSBvB+Aq");
	this.shape_72.setTransform(2.6,261.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A62E52").ss(8,1,1).p("AA5GDQj1iWhhh2Qhih2BIiRQBHiUFehBQCIgdBhAB");
	this.shape_73.setTransform(11.1,258.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#A62E52").ss(8,1,1).p("ADrmuQjGBFiTCMQimCcAgCLQAgCNB+BNQB8BMDUA/");
	this.shape_74.setTransform(42,254.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#A62E52").ss(8,1,1).p("AFyI2QjYhFjMhmQjOhmhLieQhMibBNjIQBJi/CFib");
	this.shape_75.setTransform(94.1,266.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#A62E52").ss(8,1,1).p("AGvKuQiPg5iFhGQiGhIh1hgQh2hhhXiAQhVh9geiVQgeiWAliVQAmifBxh3");
	this.shape_76.setTransform(128.4,270.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#A62E52").ss(8,1,1).p("AGaKRQhbggidhRQidhRiJh2QiLh3hDh7QhEh4gDiLQgCiKA9h7QA9h6Bxh1");
	this.shape_77.setTransform(102.3,271.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#A62E52").ss(8,1,1).p("AGKIfQkPA5jqiPQj0iTghkYQggkSCbjoQAcgpAggp");
	this.shape_78.setTransform(108.7,292.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#A62E52").ss(7,1,1).p("AiIB4QAigpAlgiQBshiBehC");
	this.shape_79.setTransform(61.1,238.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#A62E52").ss(7,1,1).p("AGaDqQjADDiqBIQioBJiIg6QiJg5gOizQgPizBPiyQBQi0BohrQBohqBZhH");
	this.shape_80.setTransform(62.9,257.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#A62E52").ss(7,1,1).p("AgQmnQjBCwhyDjQhxDgAuBqQAuBqBoAIQBpAIDUi3QDWi3ByjL");
	this.shape_81.setTransform(67,236.6);

	this.instance_7 = new lib.HandR("single",2);
	this.instance_7.setTransform(92.7,204.8,0.905,0.905,11.7,0,0,23.1,27.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#A62E52").ss(7,1,1).p("AA/moQi/Cwh7DoQiGD5AuBqQAuBqBagYQBZgYCmjEQCojECDkW");
	this.shape_82.setTransform(57.5,232.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#A62E52").ss(7,1,1).p("AAdnCQi/CxhdD6QhdD4AxCEQAxCEBjg2QBjg2CDimQCGinBola");
	this.shape_83.setTransform(60.9,239.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#A62E52").ss(8,1,1).p("AE5F1QhRDujwhmQjzhngsjuQgtjtBLikQBMilCHiM");
	this.shape_84.setTransform(72.3,261.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#A62E52").ss(7,1,1).p("AFUKcQjpgqitihQiviihDjkQhEjmBQjiQA6ilCBh6");
	this.shape_85.setTransform(85.3,283.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#A62E52").ss(7,1,1).p("AEgLzQjMhoiCi9QiGjAhBjiQhAjhAijpQAbi7BziZ");
	this.shape_86.setTransform(88.3,289.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#A62E52").ss(7,1,1).p("AGEIQQjdBIjmhDQjphDhEi5QhEi4CKj9QCKkACliY");
	this.shape_87.setTransform(71.6,262.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#A62E52").ss(7,1,1).p("AhLIQQhWgLgkhRQg3h5AwiyQAwiwBgiYQBeiYBThQQBThPAbgZ");
	this.shape_88.setTransform(48.4,256.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#A62E52").ss(7,1,1).p("AGsgdQjCEhicCGQibCFjIgEQhWgBgkhRQg2h5AwiyQAwiwBgiYQBgiYBThPQBShQAagZ");
	this.shape_89.setTransform(65.4,250.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#A62E52").ss(7,1,1).p("AGWhZQicE/iaCRQiYCRiOABQiOACgkhRQg3h5AwixQAwiwBgiYQBgiYBThQQBRhQAbgZ");
	this.shape_90.setTransform(63.1,247.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#A62E52").ss(7,1,1).p("AGaDTQi2DLimBRQijBRiLgyQiLgzgYixQgYizBHi1QBGi4BjhvQBjhvBXhM");
	this.shape_91.setTransform(66.2,253.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#A62E52").ss(7,1,1).p("AEZJxQj1AFihi5QiXisgDjnQgEjyCXjCQBsiLCUhb");
	this.shape_92.setTransform(63,277.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#A62E52").ss(7,1,1).p("AD7LLQjHh6iJi5QiMi9gVjpQgVjrBvjPQBQiXCGhq");
	this.shape_93.setTransform(72.4,295.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A62E52").ss(7,1,1).p("AEPJ4QkbhliGi9QiGi+ALiiQAKikBkivQBjivCGhq");
	this.shape_94.setTransform(69.2,283.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#A62E52").ss(7,1,1).p("ABsqHQiQCFh5C9Qh5C9AdDeQAdDgCrCEQCoCECJBK");
	this.shape_95.setTransform(67.9,280.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#A62E52").ss(7,1,1).p("AB5pDQm4FXACEuQACEwDKB3QDIB3Dngl");
	this.shape_96.setTransform(66.1,285);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#A62E52").ss(7,1,1).p("AGLHQQjKBrjogVQklgngriwQgqixAziPQAziMCSiaQCTiZCWh4");
	this.shape_97.setTransform(65.7,292.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#A62E52").ss(7,1,1).p("AGZESQjRCwivA5QiuA4iChFQiDhFACi0QABizBfiqQBgisByhhQBvhgBhg+");
	this.shape_98.setTransform(65,302.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#A62E52").ss(7,1,1).p("AGaEMQjPCzivA8QitA6iDhDQiEhEAAizQgBi0BdirQBdiuBwhhQBvhiBfhA");
	this.shape_99.setTransform(62.1,303.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A62E52").ss(7,1,1).p("AGaD9QjIC6itBCQirBAiFg+QiGg/gHizQgHi0BXivQBWiwBuhlQBshmBchD");
	this.shape_100.setTransform(57.2,308.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#A62E52").ss(7,1,1).p("AGaDVQi3DKimBQQikBQiLgyQiKg0gXiyQgXiyBHi1QBHi3BkhvQBjhvBVhL");
	this.shape_101.setTransform(44.1,304.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCyQioDXigBcQifBciNgpQiOgqgkiwQgjiwA6i5QA6i8Bch2QBbh1BShR");
	this.shape_102.setTransform(34.7,284.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCiQiiDdidBhQibBgiPglQiPglgpiuQgpivA0i8QA1i9BXh5QBYh4BPhT");
	this.shape_103.setTransform(35.9,271.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCZQieDfibBjQiaBkiPgiQiQgigsiuQgsivAxi8QAwi+BWh6QBVh6BOhV");
	this.shape_104.setTransform(34.5,263.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCRQiaDiiaBlQiZBmiQggQiQggguiuQgvitAui9QAujABUh6QBUh7BMhW");
	this.shape_105.setTransform(33.2,261.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#A62E52").ss(7,1,1).p("AGaCLQiYDjiYBoQiXBoiQgfQiRgegxitQgwisAri+QArjABTh8QBSh8BLhX");
	this.shape_106.setTransform(33.8,258.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#A62E52").ss(7,1,1).p("AGZCEQiUDliXBqQiWBpiQgcQiSgcgyirQgzitAoi+QApjBBRh9QBQh9BKhY");
	this.shape_107.setTransform(32.6,259.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A62E52").ss(7,1,1).p("AGZCPQiZDiiZBnQiYBmiQgfQiQgggvitQgwitAti+QAui/BTh7QBSh7BNhX");
	this.shape_108.setTransform(32.9,262.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#A62E52").ss(7,1,1).p("AGaChQiiDdicBhQicBgiOgkQiQglgpiuQgoivAzi8QA0i9BYh4QBXh5BPhT");
	this.shape_109.setTransform(36.9,267.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDDQiwDRikBXQihBWiNgtQiNgvgdiwQgdiyBAi4QBBi6BfhzQBfhzBVhO");
	this.shape_110.setTransform(49.5,266.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDWQi4DLinBQQikBQiLg0QiLg0gWiyQgXiyBIi2QBIi3BkhvQBkhuBVhM");
	this.shape_111.setTransform(57.8,265.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A62E52").ss(7,1,1).p("AGbDrQjADCipBJQioBIiJg6QiIg6gQizQgQizBPiyQBOi0BohqQBohqBYhH");
	this.shape_112.setTransform(64.1,266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_65,p:{y:260}}]}).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},2).to({state:[{t:this.shape_68}]},2).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},2).to({state:[{t:this.shape_71}]},2).to({state:[{t:this.shape_72}]},2).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},2).to({state:[{t:this.shape_75}]},2).to({state:[{t:this.shape_76,p:{x:128.4,y:270.5}}]},2).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_70}]},2).to({state:[{t:this.shape_71}]},2).to({state:[{t:this.shape_72}]},2).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},2).to({state:[{t:this.shape_75}]},2).to({state:[{t:this.shape_76,p:{x:128.4,y:270.5}}]},2).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_70}]},2).to({state:[{t:this.shape_71}]},2).to({state:[{t:this.shape_72}]},2).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},2).to({state:[{t:this.shape_75}]},2).to({state:[{t:this.shape_76,p:{x:128.4,y:270.5}}]},2).to({state:[{t:this.shape_76,p:{x:121.4,y:291.5}}]},2).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},2).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82},{t:this.instance_7}]},1).to({state:[{t:this.shape_83}]},2).to({state:[{t:this.shape_84}]},2).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},2).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},2).to({state:[{t:this.shape_90}]},2).to({state:[{t:this.shape_91}]},4).to({state:[{t:this.shape_92}]},2).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},3).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},33).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},2).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},2).to({state:[{t:this.shape_106,p:{y:258.1}}]},1).to({state:[{t:this.shape_106,p:{y:260.5}}]},2).to({state:[{t:this.shape_107}]},32).to({state:[{t:this.shape_108}]},2).to({state:[{t:this.shape_109}]},2).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_65,p:{y:262.4}}]},2).to({state:[{t:this.shape_65,p:{y:260}}]},1).wait(1));

	// Layer 7
	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#A62E52").s().p("Aj3AhQg8iTgriwQghiFAAgYQAAgTAKgPQALgOAOgCQAkgGAFBEQAMBIAQA1IArB6QAcBQALAxQAlCwBzCYQBzCbBmAAQBMAAAnigQANgxAHg8IAFgzQAAgagHhJIgQhbQAAgNAFgJQAJgRAWAAQAnAAAOByQAHA3gBA6QAAARgHAxQgJBKgRA+Qg2DChnAAQj/AAi6nRg");
	this.shape_113.setTransform(233.6,263);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A62E52").s().p("Aj1AhQg9iUguixQgiiFAAgZQAAgSAKgQQAKgOAOgCQAkgFAGBEQANBIAQA2IAsB7QAeBPALAyQAnCxB1CZQB0CbBmAAQBMAAAmigQAMgyAHg8IAEgzQgBgagHhKIgRhcQgBgMAFgKQAJgQAXAAQAnAAAOByQAIA3AAA7QAAARgGAxQgJBLgQA+Qg0DDhnAAQj/AAi/nUg");
	this.shape_114.setTransform(230.9,259.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#A62E52").s().p("Aj4AhQg7iTgriwQghiEAAgYQAAgTALgPQAKgOAOgCQAkgGAGBEQALBIAQA1IAqB6QAdBPAKAyQAlCwBzCXQByCbBmAAQBMAAAoifQANgyAHg8IAFgzQAAgagHhJIgQhbQAAgMAFgKQAJgQAXAAQAnAAANBxQAHA3gBA6QAAARgHAxQgKBKgRA+Qg2DChnAAQj/AAi5nRg");
	this.shape_115.setTransform(234.2,263.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#A62E52").s().p("AjZBDQg5h7griaQggh0gBgXQAAgRAJgRQAJgPAMgFQAggOAHA/QAMBAAPAuIApBnQAcBEAKAsQAmCbBrBzQBpB1BcgYQBEgSAgidQAKgyAFg5IADgwQgBgXgIhCIgQhTQAAgMAFgKQAHgRAUgGQAjgJAOBnQAIA0ABA2QABANgGAwQgHBIgNA9QgsDBhcAYQgfAIgdAAQjAAAialTg");
	this.shape_116.setTransform(213.5,239.7,1,1,0,0,0,-34.8,-33.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A62E52").s().p("AjgBFQg7h6gtiYQghh1gBgWQAAgSAKgQQAIgPANgGQAigOAHA+QAMBAAQAuIAqBmQAdBEALArQAnCbBuBxQBtBzBfgZQBHgUAhidQAKgyAFg5IADgvQAAgZgJhCIgQhSQgBgNAFgJQAIgSAUgFQAlgKAPBmQAIA0ABA2QAAAPgFAuQgHBIgOA+QguDChfAZQgiAKghAAQjEAAidlOg");
	this.shape_117.setTransform(201.5,239.7,1,1,0,0,0,-36,-32.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#A62E52").s().p("Aj4A0Qg7iMgqirQghiBAAgZQAAgSALgQQALgPAOgEQAkgKAFBDQALBHAQAzQAFASAlBjQAcBNAKAwQAlCsByCKQByCOBmgMQBMgIAoijQANg0AHg8IAFg0QAAgagGhGIgPhbQAAgNAFgKQAJgRAWgDQAngEANBwQAHA4gBA4QAAARgIAyQgJBLgSA/Qg2DIhnAMQgQABgPAAQjrAAitmgg");
	this.shape_118.setTransform(225.4,265.4,1,1,0,0,0,0,-0.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#A62E52").s().p("AjqArQhEiPg3itQgpiCgCgYQgBgSAKgQQAJgPAOgDQAjgHALBDQAQBHASA0IAzB3QAhBNAOAxQAxCtB8CRQB8CTBlgHQBMgEAeiiQAJgzADg7IACgzQgCgagLhHIgWhcQAAgMAEgKQAIgRAWgBQAngDAVBxQALA2ACA6QABARgEAxQgFBLgNA+QgpDGhnAGIgQABQj1AAjQm2g");
	this.shape_119.setTransform(212,267.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A62E52").s().p("AEUH/QkEgQjynZQhOiWhCixQgxiGgDgYQgCgSAJgPQAJgNAOgBQAjgDAOBDQAUBJAXA1IA6B8QAmBRARAxQA7CyCFCdQCJChBnAGQBNAFAVibQAHgxAAg7IgBgyQgDgagQhJIgbhbQgCgNAEgJQAIgQAWACQAoACAbBwQAOA5AGA5QACARgBAwQgBBJgKA9QgdC2hkAAIgHAAg");
	this.shape_120.setTransform(207.7,272.7,1,1,0,0,0,2,0.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#A62E52").s().p("Aj4AzQg7iMgrisQggiBAAgYQAAgTALgQQALgPAOgDQAjgKAGBDQALBHAQAzQAFASAlBkQAcBMAKAwQAlCsByCMQByCOBmgLQBMgIAoikQANgzAHg8IAFg0QAAgagGhGIgPhbQAAgNAFgKQAJgRAWgDQAngEANBwQAHA4gBA5QAAAQgIAyQgJBLgSBAQg2DHhnALQgPACgPAAQjrAAiumjg");
	this.shape_121.setTransform(225.4,265.6,1,1,0,0,0,0,-0.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#A62E52").s().p("AkBBIQgwiDgeilQgXh8ACgZQABgSAMgRQALgRAOgGQAjgOABBCQAGBFAMAxIAhBvQAWBIAHAvQAYCmBmB7QBlB9BjgaQBKgTAyioQAQg1ALg9IAIg0QACgYgBhHIgJhZQABgNAFgLQAKgSAWgFQAmgKAFBuQADA3gFA6QgBAPgKAyQgOBNgWBBQhBDPhlAaQghAIggAAQjMAAiBlqg");
	this.shape_122.setTransform(238.4,266.7,1,1,0,0,0,-1.3,-2.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A62E52").s().p("AkIBKQgniDgUijQgQh7ADgYQACgTAMgSQAMgQANgGQAjgPgDBCQADBFAJAwQADARAXBdQASBIAEAuQAPClBbB5QBdB7BfgbQBJgUA4ioQASg1AOg9IAKgyQADgaAChGIgDhYQABgNAGgLQALgSAVgGQAlgKgBBtQAAA3gIA5QgCARgMAxQgSBMgXBCQhKDOhjAbQgiAJgfAAQjCAAhqljg");
	this.shape_123.setTransform(249.3,272.7,1,1,0,0,0,-2.3,-2.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A62E52").s().p("AkFA7QgwiJgfipQgYh+ACgZQABgSAMgQQALgQAOgFQAkgLABBDQAGBGAMAyIAiBzQAXBKAHAxQAYCpBoCFQBnCHBlgQQBLgMAyilQAQg0AMg9IAIgzQACgagChGIgJhaQABgNAFgKQALgSAWgDQAmgGAGBvQADA3gFA5QgBAQgLAyQgOBMgWBAQhCDKhmAQQgWAEgVAAQjfAAiLmNg");
	this.shape_124.setTransform(239,270.1,1,1,0,0,0,-1.3,-1.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A62E52").s().p("AC/HzQj/gBi3nSQg7iTgriwQghiFAAgZQAAgSALgPQALgOAOgCQAkgFAFBDQALBIAQA1IAqB7QAcBPAKAyQAlCwByCYQByCbBmABQBMAAAoifQANgyAHg7IAFgzQAAgagGhJIgPhbQAAgNAFgJQAJgRAWAAQAnABANBxQAHA3gBA6QAAARgIAxQgJBKgSA9Qg2DChnAAIAAAAg");
	this.shape_125.setTransform(225.4,269.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#A62E52").s().p("AEVH+QkEgPjznYQhOiVhBiyQgyiFgDgYQgCgTAJgOQAJgOAOgBQAkgDAOBEQAUBIAWA1IA7B8QAmBQAQAyQA8CxCECdQCJCgBnAGQBNAEAVicQAHgwAAg8IgBgyQgDgagQhIIgbhcQgCgNAEgIQAIgQAWABQAoACAbBwQAOA5AGA5QACARgBAwQgBBJgKA9QgeC4hjAAIgGAAg");
	this.shape_126.setTransform(207.6,272.4,1,1,0,0,0,2,0.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#A62E52").s().p("AkFBEQgsiGgbimQgTh8ACgYQACgTALgRQAMgQAOgGQAjgNAABCQAEBFAKAyIAfBwQAUBJAFAvQAVCnBhB+QBhCBBjgWQBKgRA1inQARg1ANg8IAIg0QADgYAAhHQgHhWAAgDQABgNAGgKQALgTAVgFQAmgIADBuQABA4gGA4QgCAQgLAzQgQBLgWBBQhGDNhkAWQgdAHgcAAQjOAAh6l1g");
	this.shape_127.setTransform(247.8,286.4,1,1,0,0,0,-1.8,-1.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#A62E52").s().p("AjzBSQgyh/ghiiQgZh6ABgYQAAgTALgSQALgRANgHQAigRADBCQAHBEAMAwQAFAQAfBcQAXBGAIAuQAcCkBmBzQBlB0BgggQBIgZAtirQAOg2AJg+IAHgyQABgbgEhGQgLhUABgEQAAgNAGgLQAJgTAVgHQAkgMAIBtQAFA2gEA6QgBARgIAxQgMBOgTBCQg8DUhhAhQgpAOgmAAQi8AAiBlRg");
	this.shape_128.setTransform(242.6,288.4,1,1,0,0,0,-0.7,-2.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#A62E52").s().p("ACfH/Qj+gNiinaQg1iWgiixQgbiGACgZQABgSALgPQALgNAOgCQAkgDACBDQAIBJAOA2QAEATAgBpQAZBQAIAyQAcCyBsCeQBqCfBmAFQBMAEAvidQAPgxAKg7IAHgzQACgagEhJQgLhYABgEQAAgMAGgJQAJgRAWACQAnACAIBwQAEA5gDA6QgBARgJAwQgNBKgVA8Qg9C7hkAAIgFAAg");
	this.shape_129.setTransform(236.5,291.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#A62E52").s().p("Aj2AhQg8iTgsivQgiiFAAgYQAAgTALgPQAKgOAOgCQAkgGAGBEQAMBIAQA1IArB6QAdBPAKAyQAmCvB0CYQBzCaBmgBQBMAAAnifQAMgyAHg7IAFgzQAAgbgHhIIgRhbQAAgNAFgJQAJgRAXAAQAmAAAOBxQAIA3gBA6QAAARgGAxQgKBLgRA9Qg0DDhoAAIgBAAQj+AAi7nQg");
	this.shape_130.setTransform(230.3,259.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#A62E52").s().p("AjqArQhFiQg1itQgpiCgBgZQgBgSAJgQQAKgOAOgDQAkgIAJBDQAQBIATAzQAGATArBlQAhBNAOAyQAvCtB8CRQB7CTBmgGQBLgEAfihQAJgyAFg8IABgzQgBgbgMhGQgUhYAAgEQgBgNAEgKQAIgQAWgBQAngDAUBxQALA2ACA6QABARgEAyQgFBKgOA/QgqDEhnAGIgPABQj1AAjOm3g");
	this.shape_131.setTransform(229.3,246.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A62E52").s().p("AjmAuQhHiNg6isQgriCgCgYQgBgTAJgPQAJgPAOgDQAjgJAMBDQARBHATA0IA1B2QAjBMAOAyQAzCsB/COQB/CRBlgIQBMgGAbijQAIgyACg8IABgzQgCgagMhGQgYhYAAgEQgBgNAEgKQAIgQAWgCQAngDAXBwQALA2AEA6QACARgDAxQgEBLgMA/QgmDFhnAIIgWABQjxAAjVmtg");
	this.shape_132.setTransform(227.4,237.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#A62E52").s().p("AjqArQhEiOg2itQgqiDgBgYQgBgTAKgPQAKgPANgDQAkgIAKBEQAQBHASA0QAHASAsBlQAhBNAOAxQAwCuB8CQQB8CTBlgGQBMgFAdihQAKgzAEg8IABgyQgBgbgMhGIgVhcQgBgMAFgKQAIgRAWgCQAngCAUBxQALA2ACA6QABARgDAxQgFBLgOA+QgpDFhnAGIgSABQj0AAjPm2g");
	this.shape_133.setTransform(227.4,243);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#A62E52").s().p("AC8H0Qj/gCi2nSQg6iUgqiwQgfiFAAgZQAAgSALgPQAKgOAOgCQAkgFAFBEQALBIAQA1QAFASAkBoQAcBQAKAxQAkCxBxCYQBxCcBmABQBMABApifQANgyAIg7IAFgzQAAgagGhJQgPhYAAgEQAAgMAFgJQAJgRAWAAQAnABANBxQAHA3gCA6QAAARgHAxQgLBKgRA+Qg3DAhmAAIgBAAg");
	this.shape_134.setTransform(227.9,269);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#A62E52").s().p("ACaIAQj+gPifnbQgyiWgiiyQgaiFACgZQABgSAMgPQALgNAOgBQAkgEACBEQAHBJANA1IAkB9QAYBQAHAyQAbCyBqCeQBpChBmAGQBMAEAxidQAPgxAKg7IAIgyQABgagChJIgLhcQABgNAGgJQAKgPAWABQAnACAHBwQAEA5gFA6QgBARgJAwQgOBKgVA8Qg+C5hjAAIgGAAg");
	this.shape_135.setTransform(233.5,286.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#A62E52").s().p("ACkH9Qj+gLimnZQg1iVgkiyQgbiFABgZQABgSALgPQALgNAOgCQAlgDACBDQAJBJANA1QAFATAgBpQAZBQAJAzQAdCxBsCcQBsCfBmAFQBLADAvidQAPgxAKg7IAHgzQAAgagDhJQgMhYAAgEQABgNAFgJQAKgQAWABQAnACAJBwQAEA5gDA6QgBARgJAxQgNBJgUA9Qg8C7hjAAIgFAAg");
	this.shape_136.setTransform(232.3,281.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#A62E52").s().p("AjvAnQhBiQgxivQgmiDAAgYQgBgTAKgPQAKgPAOgDQAkgGAHBEQAOBHASA0IAvB5QAfBOAMAxQAsCvB3CTQB4CWBmgDQBMgDAiigQAKgyAGg8IADgzQgBgagKhGIgThdQAAgNAEgJQAJgRAWAAQAngCARBxQAKA3ABA6QAAAQgFAyQgHBKgPA+QguDEhnADIgKAAQj4AAjGnBg");
	this.shape_137.setTransform(233.8,263.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#A62E52").s().p("AjqArQhEiPg2itQgoiDgCgYQgBgSAKgQQAKgPAOgDQAjgHAKBDQAPBHATA0QAHASArBmQAhBNANAxQAwCtB7CRQB7CTBlgFQBMgFAeigQAKgzAEg8IACgzQgCgagLhGIgVhcQgBgNAFgKQAIgQAWgCQAngCAUBwQAKA3ADA6QABARgFAxQgFBKgNA/QgqDEhnAGIgQABQj1AAjNm3g");
	this.shape_138.setTransform(233.1,256.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#A62E52").s().p("AjkAvQhIiNg6isQgsiCgCgYQgCgSAKgQQAKgPANgDQAjgIAMBDQARBGAUA0IA1B2QAjBMAOAwQA1CsB/COQB/CQBlgJQBMgGAaiiQAIgyACg8IABgzQgDgagNhGQgXhYAAgEQgBgMAEgKQAIgRAWgCQAmgDAXBwQANA2ADA6QACAQgDAyQgDBLgMA+QglDGhmAJIgYABQjwAAjWmrg");
	this.shape_139.setTransform(232.7,244.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#A62E52").s().p("AjrAqQhDiQg1itQgoiDgBgYQgBgSAKgQQAKgOANgDQAkgHAJBDQAPBHATA0QAGASArBmQAgBNANAxQAvCtB7CSQB6CUBmgGQBLgEAfigQAKgzAFg8IABgzQgBgagLhGIgUhcQgBgMAFgKQAIgRAWgBQAmgCAUBwQAKA3ACA6QABAQgEAyQgFBLgPA9QgqDFhnAFIgPABQj1AAjMm5g");
	this.shape_140.setTransform(231.5,248.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A62E52").s().p("ACHIGQj9gViTnfQguiXgeizQgViGACgZQACgSALgOQAMgNAOgCQAkgCAABEQAFBJAMA2IAgB9QAWBRAGAzQAXCyBlChQBmCjBlAJQBMAGA0ibQARgxAMg7IAJgyQACgagBhJQgIhYABgEQABgNAGgJQAKgPAWACQAnADADBwQADA5gGA6QgBARgLAwQgPBKgXA7QhCC1hhAAIgJgBg");
	this.shape_141.setTransform(233.5,299.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#A62E52").s().p("ACTICQj9gRibncQgxiWghiyQgXiHABgYQABgTAMgOQALgNAOgBQAkgDACBDQAGBJANA2IAiB9QAXBQAHAzQAaCxBpCfQBoCiBlAHQBMAFAyidQAQgwALg7IAIgzQACgagChIIgKhdQABgNAFgIQAKgQAXABQAmADAGBwQAEA5gFA6QgBARgKAwQgPBKgVA8Qg/C3hjAAIgHAAg");
	this.shape_142.setTransform(232.4,293.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#A62E52").s().p("ACEIHQj+gWiQnfQguiYgcizQgViHACgYQABgSANgOQALgOAOAAQAkgDAABEQAFBJALA2QAEATAcBrQAVBRAGAyQAWCyBlCiQBlCkBlAJQBMAHA1ibQARgxAMg7IAJgyQADgagBhJIgHhcQABgNAGgJQAKgPAWACQAnADADBxQADA5gGA5QgCARgLAwQgQBKgXA7QhCC0hhAAIgJgBg");
	this.shape_143.setTransform(233.4,302.3);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#A62E52").s().p("ABzIMQj8gciGnjQgqiYgZi0QgSiHADgYQACgTAMgNQAMgNAOgBQAkgBgBBEQADBJAKA2IAdB+QAUBSAEAyQASCzBhCjQBhCnBlALQBMAIA5iaQASgvAOg7IAKgyQADgaABhJIgGhcQACgNAGgJQALgPAWACQAmAFABBwQABA5gHA6QgCAQgMAxQgSBIgYA8QhGCwhfAAIgMgBg");
	this.shape_144.setTransform(233.3,315);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#A62E52").s().p("ACDIHQj9gWiQnfQguiXgci0QgViGACgZQACgSALgOQAMgNAOgBQAkgCAABEQAFBIALA3QAEATAcBqQAWBRAGAyQAVCzBlChQBkCkBmAJQBLAGA2iaQAQgxANg7IAJgyQACgaAAhJQgIhYABgEQABgNAGgJQAKgPAWACQAnADADBxQACA5gGA5QgBARgLAxQgRBIgWA8QhDC0hgAAIgKgBg");
	this.shape_145.setTransform(235.4,320.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A62E52").s().p("ACOIEQj+gTiXndQgviXgfizQgXiGABgZQACgSAMgOQALgNAPgBQAkgDAABEQAGBJAMA1QAEATAeBqQAWBRAHAyQAYCzBnCfQBnCjBlAIQBMAFAzibQAQgxAMg7IAIgyQACgbgBhJIgJhcQABgMAGgJQAKgQAWACQAnADAFBwQADA5gGA6QgBAQgKAxQgPBJgWA8QhBC2hhAAIgIAAg");
	this.shape_146.setTransform(232.1,319.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#A62E52").s().p("ACnH8Qj+gKionYQg2iVgkixQgciGABgYQABgTALgOQALgOAOgCQAkgDADBDQAJBJANA1QAFATAhBpQAaBQAIAyQAfCxBsCcQBtCfBlAEQBMADAuieQAOgxAKg7IAHgzQABgagEhIIgNhdQABgMAFgJQAKgQAWABQAnABAJBwQAFA5gDA6QgBARgJAxQgMBKgUA8Qg7C8hkAAIgEAAg");
	this.shape_147.setTransform(226.1,318.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#A62E52").s().p("AjsApQhCiQg1itQgniDgBgYQgBgTAKgPQAKgPAOgCQAjgHAJBDQAPBHASA0QAHASAqBmQAgBNANAyQAuCtB6CSQB6CUBlgFQBMgDAfihQALgyAEg8IACgzQgBgagKhGQgVhZAAgDQgBgNAFgKQAIgQAXgCQAmgBATBwQAKA3ACA6QABAQgFAxQgGBLgOA+QgrDEhnAFIgOABQj2AAjKm7g");
	this.shape_148.setTransform(209.4,300.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#A62E52").s().p("AjdA0QhMiLhAipQgxiAgDgYQgCgSAJgQQAJgPANgEQAjgJAOBCQAUBGAWAzIA5B0QAlBLARAwQA6CqCBCJQCHCLBlgMQBLgJAUiiQAHgzAAg8IgCgzQgDgagPhFIgbhbQgBgMAEgLQAHgRAWgCQAmgFAbBvQAOA4AGA3QACARgBAyQgBBKgKA/QgeDHhmAMQgQACgQAAQjuAAjembg");
	this.shape_149.setTransform(196.7,268.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#A62E52").s().p("AjWA5QhRiJhFinQg1h+gEgYQgCgSAIgQQAIgQAOgEQAjgLAPBCQAWBGAYAyIA8ByQAoBKASAvQBACoCGCGQCKCGBkgPQBLgLAQijQAFgzgCg8IgDgzQgEgagShFIgdhZQgCgNADgKQAHgSAWgDQAmgGAfBuQAPA4AIA3QACAQABAyQACBLgIA/QgYDIhmAPQgUADgVAAQjpAAjmmMg");
	this.shape_150.setTransform(196.3,249.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#A62E52").s().p("AjTA8QhTiGhIinQg3h9gEgYQgDgSAIgQQAIgQANgFQAjgLARBCQAXBFAYAxIA/BxQAqBKASAvQBCCnCJCCQCNCEBkgRQBLgMAMijQAEgzgDg9IgEgyQgEgagThFIgfhZQgCgMADgKQAGgSAWgEQAmgGAhBuQAQA2AJA3QADARABAyQADBKgGBAQgVDHhlASQgXAEgYAAQjmAAjrmEg");
	this.shape_151.setTransform(193.9,238.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#A62E52").s().p("AjQA9QhViFhLilQg4h8gFgYQgDgSAIgRQAIgPANgFQAigMASBCQAYBEAaAxQAIASA4BfQAqBIATAvQBFCmCKCAQCPCDBkgSQBKgOAKikQAEgzgEg8IgEgyQgFgagUhEIghhZQgCgNADgJQAGgSAWgEQAmgHAiBtQASA3AJA2QADARACAyQAEBKgFBAQgSDIhlATQgZAEgYAAQjlAAjvl+g");
	this.shape_152.setTransform(191.9,234.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#A62E52").s().p("AjOA/QhXiEhNikQg5h7gFgYQgEgSAIgRQAHgQAOgFQAigMASBBQAZBFAaAxIBCBvQArBIAUAuQBHCmCMB+QCQCBBkgUQBKgPAIijQADg0gEg8IgGgyQgFgZgVhFQghhVAAgDQgDgMADgKQAGgSAWgFQAmgHAjBsQASA3AKA3QAEAQADAyQAEBKgEBAQgPDIhlAUQgbAGgaAAQjjAAjyl4g");
	this.shape_153.setTransform(191.7,229.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A62E52").s().p("AjLBCQhYiDhQijQg8h7gFgYQgEgSAIgRQAHgPANgGQAigMAUBBQAaBEAbAwQAJARA6BeQAsBHAVAuQBJCkCNB9QCSB+BkgVQBKgQAGijQACgzgGg8IgGgzQgFgXgWhGIgjhYQgCgMADgLQAFgRAWgFQAmgIAkBsQATA2AMA3QADAQADAyQAHBLgEA/QgMDJhlAVQgcAGgdAAQjhAAj1lwg");
	this.shape_154.setTransform(189.7,228.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#A62E52").s().p("AjPA/QhWiFhLilQg5h8gFgYQgDgSAHgRQAIgPANgFQAjgMASBBQAYBFAaAxQAJARA4BfQAqBIAUAvQBGCmCKB/QCPCCBkgTQBLgOAJikQADgzgEg8IgFgyQgFgagUhEIghhYQgCgNADgKQAGgSAWgEQAmgHAiBtQASA2AKA3QADAQACAyQAFBLgGA/QgQDJhlATQgaAEgaAAQjjAAjwl6g");
	this.shape_155.setTransform(191.2,234.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A62E52").s().p("AjWA5QhRiIhGinQg0h+gEgYQgDgSAIgRQAJgPAOgEQAigLAQBCQAWBFAXAyIA9ByQAoBKASAwQBACnCGCFQCKCHBlgPQBLgMAPijQAFgzgCg8IgDgzQgEgagShEIgehaQgCgMAEgKQAGgSAWgDQAngGAeBuQAQA3AIA4QACAQABAyQACBKgIBAQgYDHhlAQQgVADgVAAQjoAAjnmMg");
	this.shape_156.setTransform(197.1,245.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A62E52").s().p("AjkAvQhIiNg7irQgsiCgCgYQgCgTAKgPQAJgPAOgEQAjgIAMBDQARBGAUA0IA1B2QAkBNAOAwQA1CtB/CNQCACQBlgJQBMgGAZiiQAJgzACg8IAAgzQgCgagNhGIgYhcQgBgMAFgKQAHgRAWgCQAngDAXBwQAMA2AEA6QABAQgCAyQgDBLgMA/QglDGhmAIIgYABQjxAAjWmrg");
	this.shape_157.setTransform(213.4,255);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#A62E52").s().p("AjuApQhBiRg0iuQgniDgBgYQgBgSAKgQQAJgOAPgDQAjgHAJBDQAOBIATA0IAwB4QAgBOANAxQAuCuB5CTQB6CVBlgFQBMgDAhihQAKgyAEg8IADgzQgCgagJhHIgVhcQAAgNAEgKQAJgRAWgBQAngBASBxQAKA2ACA6QABARgFAyQgGBKgOA+QgtDFhnAEIgNABQj2AAjLm9g");
	this.shape_158.setTransform(223.7,261);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A62E52").s().p("Aj2AhQg8iTgtiwQgiiFgBgYQAAgTALgPQAKgOAOgCQAkgGAGBEQAMBIARA1IAsB6QAdBQALAxQAnCwB0CYQB0CbBmAAQBMAAAmigQAMgxAHg8IAEgzQAAgagIhJIgRhbQAAgNAFgJQAJgRAXAAQAnAAAOByQAIA3AAA6QAAARgHAxQgJBKgQA+Qg0DChoAAQj+AAi/nRg");
	this.shape_159.setTransform(231.5,269);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113,p:{y:263}}]}).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},2).to({state:[{t:this.shape_116}]},2).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},2).to({state:[{t:this.shape_119,p:{x:212}}]},2).to({state:[{t:this.shape_120}]},2).to({state:[{t:this.shape_119,p:{x:212}}]},1).to({state:[{t:this.shape_121,p:{x:225.4}}]},2).to({state:[{t:this.shape_122,p:{x:238.4}}]},2).to({state:[{t:this.shape_123}]},2).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},2).to({state:[{t:this.shape_119,p:{x:212}}]},2).to({state:[{t:this.shape_120}]},2).to({state:[{t:this.shape_119,p:{x:212}}]},1).to({state:[{t:this.shape_121,p:{x:225.4}}]},2).to({state:[{t:this.shape_122,p:{x:238.4}}]},2).to({state:[{t:this.shape_123}]},2).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},2).to({state:[{t:this.shape_119,p:{x:212}}]},2).to({state:[{t:this.shape_126}]},2).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_119,p:{x:221.3}}]},2).to({state:[{t:this.shape_121,p:{x:235.9}}]},2).to({state:[{t:this.shape_122,p:{x:247.2}}]},2).to({state:[{t:this.shape_127}]},2).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},2).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},2).to({state:[{t:this.shape_134}]},2).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},2).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139,p:{x:232.7,y:244.5}}]},2).to({state:[{t:this.shape_139,p:{x:231.2,y:241.5}}]},2).to({state:[{t:this.shape_140}]},4).to({state:[{t:this.shape_135}]},2).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142,p:{x:232.4,y:293.9}}]},3).to({state:[{t:this.shape_142,p:{x:231.8,y:290.9}}]},1).to({state:[{t:this.shape_143}]},33).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},2).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},2).to({state:[{t:this.shape_153,p:{y:229.1}}]},1).to({state:[{t:this.shape_153,p:{y:231.5}}]},2).to({state:[{t:this.shape_154}]},32).to({state:[{t:this.shape_155}]},2).to({state:[{t:this.shape_156}]},2).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_113,p:{y:265.4}}]},2).to({state:[{t:this.shape_113,p:{y:263}}]},1).wait(1));

	// Leg
	this.instance_8 = new lib.Leg("synched",0);
	this.instance_8.setTransform(105.2,341.3,0.905,0.905,4.3,0,0,18.1,16.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:0,skewX:3.7,skewY:4.3,x:103.5,y:338.5},0).wait(2).to({scaleX:0.91,scaleY:0.9,skewX:4.4,x:105.6,y:341.5},0).wait(2).to({scaleY:0.91,rotation:11.1,skewX:0,skewY:0,x:114,y:349.5},0).wait(1).to({rotation:8.3,x:105.6,y:347.7},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:4.6,x:96.7,y:347.4},0).wait(2).to({regX:18.2,scaleX:0.91,scaleY:0.91,rotation:0.7,x:89.9,y:353.5},0).wait(2).to({regX:18.1,regY:17,rotation:-2.3,x:88.8,y:358.6},0).wait(1).to({regX:18.2,regY:16.9,rotation:0.7,x:89.9,y:353.5},0).wait(2).to({regX:18.1,scaleX:0.9,scaleY:0.9,rotation:4.6,x:96.7,y:347.4},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:8.3,x:105.6,y:347.7},0).wait(2).to({rotation:11.1,x:114,y:349.5},0).wait(1).to({rotation:8.3,x:105.6,y:347.7},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:4.6,x:96.7,y:347.4},0).wait(2).to({regX:18.2,scaleX:0.91,scaleY:0.91,rotation:0.7,x:89.9,y:353.5},0).wait(2).to({regX:18.1,regY:17,rotation:-2.3,x:88.8,y:358.6},0).wait(1).to({regX:18.2,regY:16.9,rotation:0.7,x:89.9,y:353.5},0).wait(2).to({regX:18.1,scaleX:0.9,scaleY:0.9,rotation:4.6,x:96.7,y:347.4},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:8.3,x:105.6,y:347.7},0).wait(2).to({rotation:11.1,x:114,y:349.5},0).wait(1).to({rotation:8.3,x:105.6,y:347.7},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:4.6,x:96.7,y:347.4},0).wait(2).to({regX:18.2,scaleX:0.91,scaleY:0.91,rotation:0.7,x:89.9,y:353.5},0).wait(2).to({regX:18.1,regY:17,rotation:-2.3,x:88.8,y:358.6},0).wait(1).to({regX:18.2,regY:16.9,rotation:0.7,x:89.9,y:353.5},0).wait(2).to({regX:18.1,scaleX:0.9,scaleY:0.9,rotation:4.6,x:96.7,y:347.4},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:8.3,x:105.6,y:347.7},0).wait(2).to({rotation:11.1,x:114,y:349.5},0).wait(2).to({rotation:9.6,x:116.5,y:364.1},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:6.8,x:114.5,y:374.8},0).wait(2).to({rotation:7.2,x:103.6,y:363.5},0).wait(1).to({regX:18,scaleX:0.91,scaleY:0.91,rotation:4.1,x:102.3,y:338.3},0).wait(1).to({regX:18.1,scaleX:0.9,scaleY:0.9,rotation:1,x:106.7,y:331.2},0).wait(1).to({rotation:-0.1,x:107,y:325.3},0).wait(2).to({rotation:0.8,x:105.3,y:328.5},0).wait(2).to({rotation:4.8,x:98.8,y:346.1},0).wait(1).to({rotation:7.6,x:100,y:357.4},0).wait(2).to({rotation:6.8,x:100.1,y:354.5},0).wait(1).to({rotation:2.4,x:109,y:345.4},0).wait(1).to({regX:18,rotation:1,x:110.5,y:341.4},0).wait(2).to({regX:18.1,scaleX:0.9,scaleY:0.9,rotation:-0.3,x:113.1,y:332.3},0).wait(2).to({rotation:-0.3,x:111.6,y:329.3},0).wait(4).to({rotation:1.3,x:108.6,y:332.6},0).wait(2).to({scaleX:0.9,scaleY:0.9,rotation:7.6,x:100,y:357.4},0).wait(1).to({regX:18,rotation:9.1,x:97.5,y:366.9},0).wait(3).to({rotation:8.1,x:98,y:363.8},0).wait(1).to({x:97.4,y:360.8},0).wait(33).to({regX:18.1,regY:17,rotation:9.4,x:97.1,y:369.5},0).wait(1).to({rotation:10.6,x:95.1,y:379.4},0).wait(1).to({regX:18,regY:16.9,rotation:9.4,x:99,y:387.5},0).wait(2).to({regY:17.1,rotation:8.6,x:97,y:388.1},0).wait(1).to({rotation:6.6,x:94.2,y:391.5},0).wait(1).to({regX:18.1,regY:16.9,scaleX:0.9,scaleY:0.9,rotation:1.5,x:86.1,y:383.8},0).wait(1).to({rotation:-2.3,x:80.8,y:360},0).wait(1).to({rotation:-4.1,x:83.8,y:344.7},0).wait(1).to({rotation:-5.1,x:83.4,y:335.7},0).wait(2).to({regX:18,rotation:-5.9,x:82.9,y:332.6},0).wait(1).to({regX:18.1,rotation:-6.7,x:84.3,y:328.8},0).wait(2).to({y:331.2},0).wait(32).to({regX:18,rotation:-7.5,x:83.8,y:329.3},0).wait(2).to({regX:17.9,rotation:-6.2,x:82.7,y:333.5},0).wait(2).to({regX:18,rotation:-4.2,x:84.7,y:340.9},0).wait(1).to({regX:18.1,scaleX:0.91,scaleY:0.91,rotation:0.7,x:93.2,y:345},0).wait(1).to({regX:18.2,rotation:1.7,x:99.8,y:344.6},0).wait(1).to({regX:18,scaleX:0.91,scaleY:0.9,rotation:0,skewX:3.8,skewY:4.3,x:103.8,y:347.2},0).wait(2).to({regX:18.1,scaleX:0.91,scaleY:0.91,rotation:4.3,skewX:0,skewY:0,x:105.2,y:343.7},0).wait(1).to({y:341.3},0).wait(1));

	// Leg
	this.instance_9 = new lib.Leg("synched",0);
	this.instance_9.setTransform(172.9,339.1,0.905,0.905,-4.7,0,0,16.6,18.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({scaleX:0.9,scaleY:0.91,rotation:0,skewX:-5.1,skewY:-4.6,x:171.2,y:336.3},0).wait(2).to({scaleX:0.91,scaleY:0.9,skewX:-4.4,skewY:-4.5,x:173.3,y:339.3},0).wait(2).to({regY:18.1,scaleY:0.91,rotation:2.1,skewX:0,skewY:0,x:181.5,y:355.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-0.5,x:173.3,y:350.2},0).wait(2).to({rotation:-4.3,x:164.3,y:345.5},0).wait(2).to({regX:16.7,regY:18.2,rotation:-8.1,x:157.3,y:347.1},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-11.4,x:155.8,y:348.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-8.1,x:157.3,y:347.1},0).wait(2).to({regX:16.6,regY:18.1,rotation:-4.3,x:164.3,y:345.5},0).wait(2).to({rotation:-0.5,x:173.3,y:350.2},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:2.1,x:181.5,y:355.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-0.5,x:173.3,y:350.2},0).wait(2).to({rotation:-4.3,x:164.3,y:345.5},0).wait(2).to({regX:16.7,regY:18.2,rotation:-8.1,x:157.3,y:347.1},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-11.4,x:155.8,y:348.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-8.1,x:157.3,y:347.1},0).wait(2).to({regX:16.6,regY:18.1,rotation:-4.3,x:164.3,y:345.5},0).wait(2).to({rotation:-0.5,x:173.3,y:350.2},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:2.1,x:181.5,y:355.3},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-0.5,x:173.3,y:350.2},0).wait(2).to({rotation:-4.3,x:164.3,y:345.5},0).wait(2).to({regX:16.7,regY:18.2,rotation:-8.1,x:157.3,y:347.1},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-11.4,x:155.8,y:348.4},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-8.1,x:157.3,y:347.1},0).wait(2).to({regX:16.6,regY:18.1,rotation:-4.3,x:164.3,y:345.5},0).wait(2).to({rotation:-0.5,x:173.3,y:350.2},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:2.1,x:181.5,y:355.3},0).wait(2).to({regY:18.2,rotation:0.5,x:184.1,y:368.2},0).wait(1).to({regY:18.1,scaleX:0.9,scaleY:0.9,rotation:-2,x:182.2,y:375.4},0).wait(2).to({rotation:-1.7,x:171.3,y:364.6},0).wait(1).to({regY:18.2,rotation:-4.7,x:170,y:336},0).wait(1).to({regY:18.1,rotation:-7.8,x:174.1,y:325},0).wait(1).to({rotation:-9.1,x:174.3,y:317.7},0).wait(2).to({rotation:-8.1,x:172.6,y:322.1},0).wait(2).to({regY:18.2,rotation:-4,x:166.4,y:344.5},0).wait(1).to({rotation:-1.3,x:167.6,y:359.2},0).wait(2).to({regX:16.5,regY:18.1,rotation:-2.1,x:167.7,y:355.3},0).wait(1).to({regX:16.6,scaleX:0.9,scaleY:0.9,rotation:-6.5,x:176.5,y:340.9},0).wait(1).to({regX:16.5,scaleX:0.9,scaleY:0.9,rotation:-7.8,x:177.9,y:335.4},0).wait(2).to({regX:16.4,scaleX:0.9,scaleY:0.9,rotation:-9.4,x:180.1,y:324.5},0).wait(2).to({x:178.6,y:321.5},0).wait(4).to({rotation:-7.6,x:175.9,y:326.8},0).wait(2).to({regX:16.6,regY:18.2,scaleX:0.9,scaleY:0.9,rotation:-1.3,x:167.6,y:359.2},0).wait(1).to({rotation:0.1,x:165.2,y:370.4},0).wait(3).to({regY:18.1,rotation:-0.8,x:165.6,y:366.1},0).wait(1).to({rotation:-0.8,x:165,y:363.1},0).wait(33).to({regY:18.2,rotation:0.3,x:164.6,y:373.3},0).wait(1).to({rotation:1.6,x:162.5,y:384.6},0).wait(1).to({regX:16.4,scaleX:0.9,scaleY:0.9,rotation:0.3,x:166.4,y:391.4},0).wait(2).to({regX:16.5,scaleX:0.9,scaleY:0.9,rotation:-0.3,x:164.6,y:390.9},0).wait(1).to({rotation:-2.3,x:161.8,y:391.9},0).wait(1).to({regX:16.6,scaleX:0.9,scaleY:0.9,rotation:-7.3,x:153.4,y:378.3},0).wait(1).to({rotation:-11.3,x:147.5,y:349.8},0).wait(1).to({rotation:-13.1,x:150.2,y:332.4},0).wait(1).to({rotation:-14.2,x:149.5,y:322.2},0).wait(2).to({rotation:-15,x:148.9,y:318.2},0).wait(1).to({rotation:-15.7,x:150,y:313.6},0).wait(2).to({y:316},0).wait(32).to({rotation:-16.5,x:149.4,y:313.1},0).wait(2).to({rotation:-15.3,x:148.8,y:318.9},0).wait(2).to({rotation:-13.2,x:151.2,y:328.7},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-8.1,x:160.6,y:338.5},0).wait(1).to({rotation:-7.1,x:167.3,y:339.5},0).wait(1).to({scaleX:0.9,scaleY:0.91,rotation:0,skewX:-5,skewY:-4.6,x:171.5,y:345.1},0).wait(2).to({scaleX:0.91,scaleY:0.91,rotation:-4.6,skewX:0,skewY:0,x:172.9,y:341.5},0).wait(1).to({y:339.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(24.8,-2.5,338.2,502.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;