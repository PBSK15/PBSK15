(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.henry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle_loop:240,Yeah:250,Yeah_stop:313,ThanksFizzy:314,ThanksFizzy_stop:381,ProblemIs:382,ProblemIs_stop:477});

	// anim
	this.instance = new lib.Henry_Idle("synched",0);
	this.instance.setTransform(174.6,310.1,1.378,1.378,-4.7);

	this.instance_1 = new lib.Henry_Yeah("synched",0);
	this.instance_1.setTransform(174.6,310.1,1.378,1.378,-4.7);

	this.instance_2 = new lib.Henry_ThanksProf("synched",0);
	this.instance_2.setTransform(174.6,310.1,1.378,1.378,-4.7);

	this.instance_3 = new lib.Henry_ProblemIs("synched",0);
	this.instance_3.setTransform(174.6,310.1,1.378,1.378,-4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},250).to({state:[{t:this.instance_2}]},64).to({state:[{t:this.instance_3}]},68).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,39,520.7,516.2);


// symbols:
(lib.Symbol2copy = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B29A42").s().p("AgCBJQgngggIgLQgEgEgNgMIAPhjIAdAdIBKBEQAZAxgQAyIgEABQgPAAgsgngAgShPIgdgeIgBACIABgEIAgAjIgDgDg");
	this.shape.setTransform(34.1,32);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD652").s().p("AgLCJQgcgNgggSIAKh4IAHAFIALiEIAhAjIgDgDIgegeIgCAbIAcAaIBKBGQAZAugRAzIgGAQIgMAUIAAAAQgQAZgWAAQgJAAgLgFg");
	this.shape_1.setTransform(33.6,35);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggCRIAAAAQgYgLgWgNIAMiMIAAAAIALiEIAgAjIBSBMIACADQAiBAgeBEIAAABIgNAWQgWAigeAAQgPAAgRgHg");
	this.shape_2.setTransform(34.9,36);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(26.5,20.8,16.4,30.5);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B29A42").s().p("AAXBLQgkghgIgLQgVgag0g5IAEgGIAjg2IA7A5IBMBEQAZAxgQAyIgFABQgPAAgugmg");
	this.shape.setTransform(31.3,31.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E9395").s().p("AgVAnQgrg4AAgZQAAgdAHgTQADgJAEgFIABABIABAAQAGgLAWAYIABgCQABgFgDgDIgDgEIAGAFIATAiIgBgBIgBAAIAAABQAYAjgCALQgCAFgDACIAQARIAhAmIAAACIgBABIgBACIAAABIgBABIAAACIgGAPIgBACIgBADIgTAeIgEAFQgfgkgVggg");
	this.shape_1.setTransform(17.4,14.4);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FAD652").s().p("AA2CKQg7gcgxgrIgighIAHAGIg5g6QA3gRAhgvIAEgGIAjg2IA7A5IBMBGQAZAvgRAyIgGAQIgMAUIAAAAQgQAZgWAAQgLAAgLgFg");
	this.shape_2.setTransform(26.9,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CCCC").s().p("AgKCQQgaghgXgiQgUgjgSglQgPgfAFgmQALhOBHgCIAGAGIABABIAIAHIAEAFIABABIABAAQAEgLAWAYIABgCQABgFgDgDIgDgEIAGAFIAVAiIgCgBIgCAAIAAABQAaAjgCALQgBAFgDACIAPATIAhAkIAAACIgBABIAAACIgBABIAAABIgBACIgGAPIgBACIgBADIgTAeIgEAFIgIAIIgQAOIgCACIgCABIgNAJIgDACQgUAMgUAKIgBABIAAgBg");
	this.shape_3.setTransform(13,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,29,36,0.322)").s().p("AAoAoIhShSQAiAdAzA4IgDgDg");
	this.shape_4.setTransform(28.1,19.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABlD5IgBAAQhOgkg7g7IgTgWQgxg4grg9QgdgrgWgwIAAAAQgSgmAGgsQANhiBbABQADAAADACIALAJIABAAQAPAMAKAPIAGAFIAUAiIAFAEQAaAmAcAjIABAAIAAABQAiAdA2A7IBTBKIACADQAjBCgfBEIAAABIgNAWQgWAigfAAQgPAAgRgHg");
	this.shape_5.setTransform(21.4,25.6);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.9,51.3);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374656").s().p("AgngMIABgBIABAAQAQgGAbgNQAPgFAPgEQAFAZgBAZIgoAUIgUANQAAgYgTgeg");
	this.shape.setTransform(32.7,18.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E9395").s().p("AhOBBIgDgRIADgPQAQgbAWgWQAXgZAZgTIA0gcIABADIAIAUIABAEIAMAdQgiAXgeAYIgYAZQgRARgDASIABAAQAJAHgKABQgLABgHADIgUACg");
	this.shape_1.setTransform(20.3,26.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCCC").s().p("AhKCGQglgJgLgcIgKgcIAdhHQAdg0ApgqIAAgBQAYgYAYgTQAsAdAnA1IABACIAJAQIADAHIACADIAIAUIABAEIALAcQghAWgfAbIgZAYQgSARgDASIABAAIgYACIgBAAIgUADIAFADIgQADIgDAAQgKAAgdgHg");
	this.shape_2.setTransform(15.2,21.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#445A6F").s().p("AAIAsIAAAAIABAAIABAAQAQgGAdgOIAdgOIACAGQAFAZgCAaIgoAVIgWAMQABgXgUghgAgjgPIgLgMQAOgEAggQIAngVIADADQAZAcAMAhQgbAIgyAeQgNgYgYgZgAhZg+QAugbAzgKIATASQgbAIg5AjQgSgPgOgJg");
	this.shape_3.setTransform(27.8,12.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AAOArIAAgBIgCgJIgDgLIgCgBQgKgjgdggIgBAAIgZgbIAKgCQAUgGAdAAQAWAAAQATQANAQAAAOQAAADAEARQADAOAAAFQAAASgbAlIgOAUQAAgUgEgTg");
	this.shape_4.setTransform(36.9,9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(28,29,36,0.322)").s().p("AAWgPIAjgSQgZARgdAPQgeAQgdATQAfgYAvgZg");
	this.shape_5.setTransform(31.5,24.5);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah+C1Qg2gLgUgzIgEgMIgGAIIgIABIgGgGIAchGQAdg4AugvQBQhTBngSIAEAAIABAAQBNgnAtAuQAjAlABA2QgwBrgSAAQgDAAgDgBIgGADQgaASgdAPQgfARgdAUQgPALgKAKQgZAcgSAQIgHAAIgEAAIgYABIgDAAIgUAEIgBgBIgMABIgTgCg");
	this.shape_6.setTransform(22.5,16.6);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.6,45,37.6);


(lib.boy13Qtorso = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374656").s().p("AgyAQQgKgHAAgEIAAgfQABgaAGAAQAGAAAAgCIgCgMIAFADIAuAWQAvAWAEAGIAIBQQhWgigZgRg");
	this.shape.setTransform(8.9,74.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E9395").s().p("Ag1CsIgBgBQgGgHgBgHIABgGQAAgMAMh+IgBAAIACgEIABgNIABACQADgZAFg8IAKiIIAGABIBDAQQAEAUAGBCQAGA/AAAKIgJEPQhSgagYgag");
	this.shape_1.setTransform(10,48.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B29A42").s().p("AgeBuIgCgBIgBgTIADgYIACgXQAHiBgBgeIAPAAIApDpQgogGgYgBg");
	this.shape_2.setTransform(11,14.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAD652").s().p("AkjBmQgqgFgYgCIgCAAIgBgUIADgXIACgYQAHiAgBgfIAPAAQARAACTAOQCMANA+gCQAQABgBgCIA9gCQACAOAbBfQAeBpAFAWQg6AFhAAAQiQAAjFgegACiAWIgliEIA8gEQA6gGAkgLQBACRASBRQgaAIgeAHQg5ANg6ADQgDgOgZhag");
	this.shape_3.setTransform(43.7,16);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#445A6F").s().p("AgoBWQgBgugEgoIBqAAQAaACgBgCIBYAAIAJBUIhfAFIiAgDgAhbBSQghAAhPgOQg+gMgSgFQAFgbgFg1QAXAHA+AKQBKALA6gBQAEBAAHAWgAC9AAIBagJQApgGAZgHQAAANAFAUQAFAXAIATIhTAQQhKANgIAAgAFqgcQAdgFANgGIATBFQAAAIgEABQgQAAgYAKQgBgdgQgwgAmdgEQgJgHAAgEIAAghQABgaAGAAQAGABAAgCIgCgNIAFADIAwAWQAvAWAEAGIAIBQQhZghgZgQg");
	this.shape_4.setTransform(45.1,76.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CCCC").s().p("AiXDoQgfgHhvgTQhVgbgXgZIgBgBQgHgIgBgGIABgGQAAgMANh8IgBAAIABgFIACgOIAAACQAEgZAFg8IAKiIIAGABIBFAPQCZAgCtABICIgIQApDdghC9IAAAfIhtABIjUgKgAC9DoQADgQAGg4QAHhBAAgdIgEhMQgEhNgEgkQgFhOgHAAQBVgKApgIQAdgGARgJQAMAxASBqQAcCjAABuQAAgGgEABIgDAEQghAOgkAKQg3AQg8AAIgfgBg");
	this.shape_5.setTransform(44.9,50.5);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhLGxQhkgFhoggQhrgggZgTIgBgBQgMgSgXgNQAhkcATlRQADhIAGgYIABgFQAIgYAWAAIAIABIBkAMQB3AMB2AAQBBAAAqgGQAfALBMgOQAngHAhgJQAGAAAEADIAHAGIgPAIQAIARAlBoQAhBgANARQAXBnATCHQAVCZAABTQAIAFAIA5QAAApimAXQhxAQhTAAQiTAAgOgBg");
	this.shape_6.setTransform(44.8,43.7);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.3,89.7,87);


(lib.boy13Qpupil2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAPIgDgJQAAgbAUgCQAVgBAAAYQAAALgCAEQgEAJgPAAQgLAAgGgJg");
	this.shape.setTransform(1.8,2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.3,-0.4,4.4,4.9);


(lib.boy13Qpupil1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVATIgEgLQAAgiAZgCQAagCAAAeQAAAOgCAEQgGALgSAAQgOAAgHgKg");
	this.shape.setTransform(2.7,2.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.3,5.9);


(lib.boy13Qnose = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B69372").s().p("Ag6AXQgBgNATgKQASgIA6gZIABAAIAXAMQgGAJgxAQQgwASgGALIgDABIgBAAQgFAAAAgLg");
	this.shape.setTransform(7.1,10.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("Ag/AkQgGgYACgZQABgaAQgaIAmAcQAaATAZAMIAGAEIABAAIAXAJQgGAKgxASQgyASgFAGIgBAHQgPgGgGgYg");
	this.shape_1.setTransform(6.2,7.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BFQgFgHgHgXQgGgUAAgDQAAgyAQgbIAIgGIAIgFQAHAJATAOQASAQAeAMIAvASQAKADAAAMQAAAmiQAXgAAYAAIABAAIgFgCg");
	this.shape_2.setTransform(8.3,7.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,-0.2,17.3,14.8);


(lib.boy13Qmouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAKAoIgXgSQgFAAgHAFIgOAIQgRADgKAAQgYAAgNgKQgIgHAAgEQAAgJgDABQgDAAgBgQIgYgBIglgCIAAgIQgBgLgCgJIABgUQAjAgBwAaQB1AaBkgFQgDAJgPAMQgQANgNADIghgKIgSAGQgRAFgLAAQgXAAgYgTg");
	this.shape.setTransform(6.9,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("AgoAPIALgiQAGACAaACQAaACAEgBIAIgDQgNAWADAPQgsgBgbgEg");
	this.shape_1.setTransform(11.6,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40152B").s().p("AgMATQg6gbgOglIAhgBIAMASQALASAGADQAEADAOADQALABAIAAQAKAAAUgFIAVgHQAHAAAIAPQAKAWgSAWQgmgDgvgZg");
	this.shape_2.setTransform(-1.2,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAQA3QgQgSgDAAQgGAAgHAFIgOAIQgRADgKAAQgYAAgMgKQgJgHAAgEQAAgJgDABQgDAAgBgSQgXAAgWgCQgrgDAAgKIAMhAQBlA6A8APQBVAbCIgDIAAABQgMAXgGAHQgNARgVABIghgKIgUAHQgPAEgFAAQgoAAgQgTg");
	this.shape_3.setTransform(6,-4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#40152B").s().p("AgaAdQg0gcgQg3IgBgLIAZAHQAWAGADAAQAOgCAHAIIAMAQQAHAJAMAHQARAIASAAQAMAAARgEQAOgFAIgFIADAEQgIANgIAZQgIAeADAOQhagfgLgGg");
	this.shape_4.setTransform(-3.9,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AgrAnQgEgMABgKQALgvAGgMQAIAHAUAHQAZAKAMgEIALgCQgEADgJAZQgLAdAFAKg");
	this.shape_5.setTransform(9.9,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBEQgJgFgUgRQgDgDgTAHQgaAJgKgBQgYAAgNgKQgIgGAAgFQAAgJgDABQgDABgBgTQgrAAgLgBQgtgGAAgTQAAgKAHg2QAvAjBoAhQCNAtBugRIgDATQgBAIgGAAIgMARQgNARgVABIghgKIgUAGQgPAEgFABQgWAAgUgMg");
	this.shape_6.setTransform(5.6,-4.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#862D59").s().p("AgoA7QgDg7ATgkQAOgbAMAAIAoAeQgIATgFAkQgGAlADAFg");
	this.shape_7.setTransform(5.1,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#40152B").s().p("AgnAbQgngmgEhBIAAgGQANAPAhADQAhADAJANQAmAqAngHQgJAWgGAbQgIAeABARQhBgVgjgjg");
	this.shape_8.setTransform(-6.7,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgeAkQgYgHgKgIQAVgqA0gQQA4gRAAA/QAAAKgFAUIgdgIIgTAGQgNAFgFAAQgGAAgSgGg");
	this.shape_9.setTransform(14,-0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#862D59").s().p("Ag6AZQgIgPAAgRQAAgGADgJIAFgVQALAIAXAHQAUAGAGgBIAhgCQAUgCAMACQgSArgbAQQgSAKgbAAQgXAAgMgTg");
	this.shape_10.setTransform(12.7,7.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#862D59").s().p("AgVAfQgFgEABgOIAAgBQADgaAKgNQAKgLAOAEIAAAAQAHAAAEAGQADAHABANQgDAsgYAAQgQAAgFgFg");
	this.shape_11.setTransform(16.1,0.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag+AMQgfgIglgCIgbgiIgGgIQA4AVB9ATQBtARAlABIgFAMIgGgBQAAAAgBAAQAAAAABgBQAAAAABAAQABAAABgBQAGgCglABQgmABgtAHIgrAHIg9gdg");
	this.shape_12.setTransform(9.3,-3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDApIgQgRQgBgDgFAAIgCAAQgZAQgbAAQgeAAgPgVIAAAAIgDgEQgEgMgagiIgRgXIAWAJIAIADIAAAAQAoAQApALQAmALAmAEQBQAJBSABIgGAQIAAgBQgRAigdABQgegKgDAAIgFAAIgBAAIAAABQgUAKgOAAIAAAAQgnAAgOgRg");
	this.shape_13.setTransform(8.2,-2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D580AA").s().p("AhTgKIABAAIgGgGIAPgFQAIgDAFgDQAFAHAKAJQAYARAeAAIAHAAIACABIAAABIAEgCIAAgBQAMgBAKgEIAJgEIAHAEQANAFAQAAIAAAAQgnAXgZAAQhAAAgsgmg");
	this.shape_14.setTransform(11.5,4.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTA+Qh9gagPgjIAMAAIALAAIAKgBIgCAIQgBANAfASQARAJAWAAQAKAAAUgHIAWgHIAZASQAaARAXAAQAJAAAegMIANAFQAOAFAIABIgBAIQgNADgSAAQgvAAhRgRgAAcAnQgKgFgSgRQgDgDgVAHQgZAJgLAAQgXAAgNgKQgJgHAAgEQAAgJgCAAQgDABgCgRQgtACgPgHQgagNAFgsIBvAtQA6ARDaATQAEAMgKAAIgLARQgOARgUABIgigKIgTAGQgQAFgEAAQgWAAgUgMg");
	this.shape_15.setTransform(6.2,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AABANQgPgRgEAAQgFAAgHAEIgOAHQgRADgKAAQghgFgNgOIgDgFQB4gvB5BYIgXgHIgUAHQgPAEgFAAQgoAAgRgSg");
	this.shape_16.setTransform(7.4,0.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#862D59").s().p("AgEAWQgkgHgGgTQgNgHAagFQAigIACgBQAYAaAZAFQgBAUABABQgwgDgIgCg");
	this.shape_17.setTransform(5,4.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#40152B").s().p("AgkgJIAagPQABAHAMAOQASANAQAAIgBAQQglgRgjgSg");
	this.shape_18.setTransform(-4.9,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AADANQgIgFgUgPQgDgDgVAHQgaAHgKgBQgMABgNgEIgHgDQAKgGASgGQAZgJASAAQArAAAqALQA4ANAXAYIgigKIgUAGQgPAEgFABQgVAAgUgMg");
	this.shape_19.setTransform(8.8,0.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#862D59").s().p("AgGA8QgbgCgQgIQACg2ADgRQADgYAUgEQAHgBAIgGQAGgEAEAAQArAfADABQgRAgAEA5QgiAAgJgBg");
	this.shape_20.setTransform(4.9,7.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#40152B").s().p("AgmAEIAog3IAlAOQgLAvABAqQgJgFg6grg");
	this.shape_21.setTransform(-4.7,6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGARIgegUQgHgFgTAJQgXAMgTgGQAGgLAWgLQAWgNAXAAQAcAAAZAKQAlAOAuAfQgWgJgKAAQggALgIAAQgVAAgSgMg");
	this.shape_22.setTransform(9.9,0.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#862D59").s().p("AgOBVIgggLQgBgtAGgnQALhRAhABIAOAMQARAOANAFQgHARgNAyQgOA9AAAWIgbgGg");
	this.shape_23.setTransform(5,10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#40152B").s().p("AgUA6QgDgDAAgNQAAgPAPhBQAIgfAIgCQAMAEAEgDQgOBKgFBEIgZgOg");
	this.shape_24.setTransform(-2.2,10.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag4AIQAFgKAVgLQAXgNATAAQAJAAAPAMQAPANAEAKIACAMIgTgFIgUAGQgPAFgDAAQgsAAgMgTg");
	this.shape_25.setTransform(13.4,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#862D59").s().p("Ag+AoQgJgOAAgTQARg6AEgIQAMAIAWAIQATAFAIAAQAJAAAWgFQAOgFAPAHQgGA3ggAaQgZAUgkAAQgXAAgLgUg");
	this.shape_26.setTransform(11.8,9.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAEASQgHgGgUgOQgDgDgVAFQgaAIgKAAQgOAAgPgGIgHgDQANgHATgIQAggMAYAAQAfAAAkAKQA3AQAdAeIgigKIgUAHQgPAEgFAAQgWAAgUgLg");
	this.shape_27.setTransform(8.6,0.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D580AA").s().p("AgxAbQAPgEAIgVQAGgQgBgPIAAgGQAIAHASAGQARAJgBAZIAGABQACgJAAgNQAVAAAAACIgDAZQgGASgVAAQgSAAgzgJg");
	this.shape_28.setTransform(8.3,6.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#862D59").s().p("AgWAVQACgXARgUQAQgVAJAaQADAOgOAOQgLAOgPAHQgGgDgBgIg");
	this.shape_29.setTransform(2.4,5.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#40152B").s().p("AAAAVQgNgFgTgVQAQgQALgKIASALIAUAHQgHAhABAMQgNgGgOgFg");
	this.shape_30.setTransform(-4.1,4.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgQAHQgSgQgDAAQgGAAgGAFIgOAFQgPAEgKAAQgKAAgRgXIgFgGIAZgBQBSAAAyAPQAdAJAlAQIASAJQgFAAgQgEQgRgFgFAAQggALgHAAQgnAAgQgTg");
	this.shape_31.setTransform(9.3,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D580AA").s().p("AgGATQgdgKgVgWQAXgGAIgFQAHAMATAMQAYAMATgDIANAAQgHAHgMAFQgJAFgFAAQgOAAgQgHg");
	this.shape_32.setTransform(8,4.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhBAdIgTgJQANADAHAAQAKAAAVgHIAVgHIAoAfQASAFAQAAQAGAAAPgFQALgEAIgDIAMAGQgvAIgKAAQhLAAgvgSgAAIAIQgPgRgEAAQgFAAgHAFIgPAGQgQADgLAAQgXAAgNgIQgJgGAAgFQABgKgKgEQAcgaBhAKQBtALA0AuIgPAHIgOAFIgigKIgTAHQgPAEgFAAQgoAAgRgSgAimgJIAUgJIAPgFIALASQAIAKAFAFQgegKgdgJg");
	this.shape_33.setTransform(6.7,0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_11,p:{x:16.1,y:0.5}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_11,p:{x:15.1,y:2.7}}]},1).to({state:[]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_33}]},1).wait(1));

	// Layer 3
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhLASQhOgcAAgbQAAgKAKAAQATAcBMAYQBLAbAggDIBdgIQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAAAQgHAIgaAIQgeAJgdAAQg+AAhLgeg");
	this.shape_34.setTransform(7.6,-2.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AiuA6QhNgsABhIIAAgaQACgTACAAQACgBAtAWQAtAVBXAVQBUAUBRAAIA2gEQA1gEAngGIAEADIAEAEIgzALQgsAJgNAQQgPAWgGAFQgPAPgTAAQgZgDgJADQgNADgCAaQAFASAZgIQAegKAIAFQgKAIgQAGQgQAFgUAAQiMAAhQgug");
	this.shape_35.setTransform(12.1,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AjDBaQhUgvgBhOQAAgmAJgdQAIgXAKgLQAxAiBVAdQB0AmB5AAQAsAAAsgHQAygJAPgMIAHACQACACAAAHQAAAHgYAIQgdAKgzAHQgZADgKARQgHASgDAFQgJAQgUAGQgLAEgLAAQgGAAgMgEIgNgEIgQAgQgHARgDAQIACAOQArACACADQgFAGgGADQgJADgQAAQiQAAhVgvg");
	this.shape_36.setTransform(12.4,0.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AjbBhQhHg+AAhJQAAg/AHgfQAHgbAKAAQAEAAAhAVQAiAVAHADIBAAaQAgAMA0AKIBPAKQBMAIAngFQAygHBQgUQAGAAABACIAAAGQgHAMgZAKQgXAKgTABQgRABgOACIgLABQgKABgIAMIgMAWQgJAUgSANQgQALgMAAIgVgCQgHgCgFgEQgEgDgFAAQgeAMgKAAQgWAAgCAEQgDAFgGAzIAEAkQAfAJACABQABABAAAAQAAABAAAAQgBABAAAAQAAABgBABIgGADIg+ABQhZAAhJg/g");
	this.shape_37.setTransform(12.1,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhEBUQgUgUAAgiQAAgyAcgkQAZghAjgJQAkgJAZASQAcATAAArQAAA3glAmQgjAkgtAAQgWAAgSgSg");
	this.shape_38.setTransform(13,3.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgqAMQAChBAvABQAdAAAGAWIABAaQAAAcgMAPQgMAPgYAAIAAAAQglAAAAgqg");
	this.shape_39.setTransform(15.9,0.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgtAqQgugXgxgGIAOAhQAEALAAAEQAAAHgCAAIgEgCQgDgDgOgXQgQgagEgLQgJgYgogfQgmgdAAgGQAAgHAEgCIAHgBQA7AdBEAWQCBAqCOABQAKAABPgJQAKAAgEACIAAAIQgCABgpAGQgnAHgQARQAWANAgAQQAWALAAALQAAAKgBgFIgEABQgogdglgLQgegJgnAAIgoAEQgjADgJACIAHAHQAJAIALAOQAMANAEAIIgBABIgBABQgrglgmgTg");
	this.shape_40.setTransform(11.1,-2.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhSBEQgRgNgKgMIgBAAQglAAgSgYQgJgMgCgJIAAAAIAAgCIg7hPIgIgEIAAgBIAAAAQgEgDABgCIAAgBIAAgFQABgEAFAAIABAAIABAAIABAAIBAAaIANAFIgBAAQArARAqALQAsAMAuADQA4AGBQADIBcgDQAGgBAAAIQAAANhVABQgQAqgZAPQgGAKgMALQggAcg7AAQgwAAgvgkg");
	this.shape_41.setTransform(11.2,-1.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AizA6QhggpAAg9QAAg1ADgDQACgCA1AXQA0AXAnALQAnAKByAQQBkANAPgBIgEAAQArABA7gHIAkgFIAAADQgKAIgNAEQgVAEhSAIIgMAWIgMAVQgHAHgLAIQgKAHgHAIIALAAIAaAAQAYACAKAMQgDADgFAAIhAACQipAAhkgrg");
	this.shape_42.setTransform(12.5,-2.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AB9AeQgQgTg7gUQg5gWgpAJQgqAIgUAIQgUAGgIAAQgHAAgDgBQgCgBgBgFQASgMARgJQAhgQAtAAQBiAAA3AnQAcARAJAVQAAAGgBAAIgCAAQAGAAgHAFIgDABQgHAAgNgPg");
	this.shape_43.setTransform(6.5,-0.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AhbAlQhNgeAAgQQAAgXAvgTQArgRAmAAQBKAAApAUQAYAMAvAfQAXAJAAATQAAAHgIAAIgQgBQgFAAgMgFQgOgFgEAAQgGAAgIAEQgIAGgEAAIgSgBQgOABAIAKIACAKQAogDAHADIABAIQgHAFgJACQgTAFgkAAQgyAAhQggg");
	this.shape_44.setTransform(5.9,2.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhgBOQhRgaAAgoQAAgbArgnQAxgrA3gBQBOABA1AWQA5AYAUAwIgBABIgBABIgHgHQgIgGgGAAQgGAAgJACIgHACQgIgBgMgFQgLgEgFgBIgUAHQgWAFgPAAQgBAWgHBAIAZgBQACABAAAHQgHALgGABQgGACgcAAQguAAg+gUg");
	this.shape_45.setTransform(7.1,6.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhgBzQg9gUAAgMQAAguAMgwQARhNAjgUQAjgkBLATQBTAUA6BOIgBACIgBAAIgHgGIgLgLQgCgDgXAGQgXAFgDgGQgEgGgEAAQgbAKgIABQgVAFgFAJQgDAGgBAOQgPA4gDAPQgCANAAAiQAAAGAGgCQAFgCAAAFQAAAKgCgGQgFAFgPAAQgWAAg5gSg");
	this.shape_46.setTransform(9,8.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhEBVQgUgUAAgiQAAglAfgtQAjgzApAAQBGAAAABMQAAA3glAmQgiAkguAAQgXAAgRgSg");
	this.shape_47.setTransform(11.6,6.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgqAMQAChBAvABQAdAAAGAWIABAaQAAAcgMAOQgMAQgYAAIAAAAQglAAAAgqg");
	this.shape_48.setTransform(14.9,2.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ah1AwQgugaAAgTQAAgUAugfQAzghAyAAQBHAAArAZIAoAiQARAPAFAHQAEACAAAFQAAAKgBgEIgYABQgFAAgNgFQgNgGgFAAQgGAAgHADIgHACQgCAwgKAGQASABAIACIAAAGQgFAGgIACQgMADgbAAQhjAAg/gig");
	this.shape_49.setTransform(6.5,3.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgLAxQgbgNgWgPQgSgNgUgaQgPgWgJABQgFgBgRAEQgRADgCAAQgEAAgCgJQAKgIAhgGQAegGAUgBQA/AABEAQQBeAVAVAkQgJAKgQADIgOACQgFAAgMgFQgNgFgFgBQgEAAgNAZQgMAYgkAAQgOAAgcgOg");
	this.shape_50.setTransform(7.3,2.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhsAjQhVgaAAgOQAAgfBFgRQAvgKAuAAQBeAABKArQAmAUATAVQAAAVhGANQgkAGgkADQhGAAhagdg");
	this.shape_51.setTransform(6.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34}]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-7.6,30.9,9.6);


(lib.boy13Qleg2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6E7F92").s().p("AgugiIBAgjQANgHAPgFIgGAGQgHAIAAAFQgBA+AIAYIAHAVQAAAKgEACIgTADQgZAFgOAOIAAABIgEABIgHABg");
	this.shape.setTransform(7.1,56.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#536A86").s().p("AAADSIAAg6QgCgngSh4QgRh1AAgeQAAgLACgJIAAgCIABgCIAeggQAFgDAJgBIAAAAQgHAIgDAHQgFANAAAaQAAAfAVB+QAWB9AAAvIgBAaIgCALQgTAEgQAGg");
	this.shape_1.setTransform(9.2,25.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#95AFC8").s().p("AiLgdIBCgjQANgHAPgFQAfgKAlAAQAZAAAbAFQAlAHAcANIgFBRQgxAZggAKIgEABIgBAAIgCABIiRAbIgKABIgDABIgIABg");
	this.shape_2.setTransform(16.4,55.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E90B5").s().p("AgZDTIgBg7QgCgngSh4QgRh0gBgfQABgLACgIIAAgCIABgDIAdgfQAIgEAJgBIAAAAIAIgBIAGAAIABAAQAyAAAABpIgIByQAAAdALBNQALBNAAALQAAAKgBgIIgMABIgNABIgeAEQgSAEgRAGg");
	this.shape_3.setTransform(11.9,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,29,36,0.322)").s().p("AANBfIgBgiQACAXAAASIAAAMIgBgTgAgNhvIACgCIADAVIgFgTg");
	this.shape_4.setTransform(5.7,27.4);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiIFAIgaiBQADgNAQgMIASgLQAbgRACgEQACgDABgaIACg4IgBgTIgBghQgEgwgMhJIgGghIgFgTIACgDQgKhBAAgfQAAgaASgPQASgQAkAAQBDAAAIBHIACgJIgDC2QAAAtAKA/IALBBQABAOABABQACAFAJADQAOAFBgAbQAHB0gaALQgZALggAKQgkALgNAHQgUAKiIARQgKAAgHgNgAg7kvIAAABIAIgBIgIAAg");
	this.shape_5.setTransform(16.4,33.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.6,32.8,66.8);


(lib.boy13Qleg1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#536A86").s().p("AgYECQAXg0AAheQAAgTgRhyQgRhzAAgJQAAg7AfggQAVgZATACIgDAEQgTAUgGAMQgQAnANA9QASBIAGBLQAFA7AABUQAABegpAAQgIAAgJgDg");
	this.shape.setTransform(17.7,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6E7F92").s().p("AhBBDQgBgCAAgQQAAhGAggbQAggcBFAAIgSAxQgTAxAAAOQgBARgdAGQgUAEgGAIQgFAGgLABQgTAAgEgLg");
	this.shape_1.setTransform(11.4,65);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#95AFC8").s().p("AhCBTQglgJgSgDQghgFgIgGQgFgEAAgUQAAhIAugeQAkgYBOAAQAnAAAxAKQArAIAcAMIAQAYQgBAGAABJQAAASgtANQg2ARhagBQgPABgdgIg");
	this.shape_2.setTransform(21.5,66.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6E90B5").s().p("AgsBxQAAgTgRhxQgRh0AAgJQAAg7AdggQAVgXAYAAQAeAAAbAiQAbAigBBHQgBBHgKAQQgJARgHBbQgIBdATBZIhYgEQgDADgmACQAWgzAAhfg");
	this.shape_3.setTransform(21.9,29.3);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiCF1QgsgDgKgPQgIgMAAg0QAAgmAGgNIAbgiQAMgQATgHIAigMQAFgJAKg5QALg9AAgbQAAgbgRhzIgShxQAAhOAigoQAdgjArAEQAqAFAfAkQAiAoAAA5QAAARglECIgCAjQAABsAkAOQALAEAXADQAWAFAOASQARAVgBAaIgBA+QgBASgJAKQgIAHgSAHQgXAIgvAIQg1AIgtAAQhmgOgQgBg");
	this.shape_4.setTransform(21.8,38.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.4,-0.1,38.8,77.7);


(lib.boy13Qheadfr = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E2C1B").s().p("AA2BZQgNgdAAgKQAAgFATgMIAXBLQgBAHgBABIgCABIgKABQgDgDgMgagAgvBIQgDgMAAgFQgBgSAMgUIAFADQALAbgBAVQgCAQgKAJQgGgHgFgOgAhCgEQgHgKgJgXQgIgUAAgDQAAgOAJgOQAJgOgBAMQgDAZADARQADANANAcQgEAEgDAAIgCgBgAARgjIgDgHIgBgJQABgMAFgIQADgFADgCQAFANgKAkgABJhSIgGgYQABgGABgFQAJAHAHAVQAGARAAAMQAAAGgDABIgGACQgFgHgEgYg");
	this.shape.setTransform(21.2,94.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B69372").s().p("AE7FZQhZgtg3hNIgggyQgdgsgBAAIjMkYQgEgIg9hLQgogxASgXIgBgLIgKAAIABgCQABgCAGAAQAOAABGBWQBTBkCGC9QBVB4BMBTQBgBpAvAIIAJAEQgIACgIAAQglAAg9gfgAmJknQgbgXgIgqQACABAFAAIAJgIQALgIAOAAQAHAAAGACIARAIQgIADgGAOQgHANAAAMQAAAVALAMQAMAMATgBIACgBQgJgJgFgHQgLgOAAgNQAAgJADgIQAGgLALAAQAGAAAPAPIAYAdQAEgBADgDQADgEAAgFIAAgFIABADQACAFAAAGQAAAUgQALQgNAJgRAAQgnAAgbgYg");
	this.shape_1.setTransform(56.9,157);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9F5336").s().p("ABqCdQgUgPgbgPQg2gfgsAAQgHAAgGACIgPAHQgRgngBgzQACgtgDgJQgEgOgPgGQgMgFAAgUQAEgpAAgUQARAAA5gHQA+gHAtgDQAAADgLAbQgLAhAAAgQAAAMAEADIAEAAQACAAAJAjQAKAjAAAMQAAAFAEAOQAEATAHANQAIAPAKAfQAKAeAAAGQgJgGgDAAg");
	this.shape_2.setTransform(17.9,95.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#374656").s().p("AjEFWQgCgRgFgSQgIgdgDhHIgChCQAAiBA2iAQAxh2AygcQBTgxA1gPQAmgLBpgOQiaBKgeCoQgLA9gHBrQgHBkAABRIAFAsIAEAsIAAALQiRAMgkAAQgbAAgEgJg");
	this.shape_3.setTransform(24.9,42.1);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DE6D40").s().p("AnOFxQgKgfgLAAQgTgPgbgPQg3gfgtAAQgHAAgGACIgPAHQgRgngBgzQACgvgDgJQgEgOgPgGQgMgFAAgUQAEgpAAgUQAHABAqgHQAtgIAkAAQAwgEBCgBQAaAAASgKIAJBRQAIBHAEATIADACIgEAAQgCAAgLgLQgNgNgGgEIgIABIgCASQAAAdAPBDIgFA8QgEA5AAAMIABAFQgWAAgKgegABUkHQgWhQgSgUQAdgDBRgRQBfgPB8AAQB6AAA+AGQBJAHAuATQAYAJABAaIAHCKIhmgCQhngDhqACQjSAChJAVQgGgIgYhSg");
	this.shape_4.setTransform(77,77.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#445A6F").s().p("AstFrQgCgRgFgSQgIgegDhGIgChDQAAhsAfhSQAnhVASgrQATgwA7goQAugeAqgMQC3gxCagSQCVgRD2AAQAVAABdAHQBqAIArAGQAzAJA4AHQAmAHA0AeIAbASQAWAOAQAKQARAJALATQAIANAQAjQAjBEAXBDQARAxACAXQAHBDAMBJQAIAzAAAbQAAAXgIAeQgJACgYABIgeABQhYAEgpAAQADgMAEhAIADg+QAAhEgNhCQABgMAAgHQgBgMgOgIQg0gmhCgJQgfgEhggBQjDABiFAUQh7AUAAAXIANAeQATAoAUBIQAfB2ATA5IgBAFIgBgBQhJADlyAUIloAUQgbAAgEgJg");
	this.shape_5.setTransform(86.6,40);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AiNHHIgggyQgdgsgBAAIhah8QhgiGgeglQhIhXgDgJQgEgHABgKIACgbIgBgJQAHgCgLAAQgKAAgJAOIgTAfQgeAsg/AAQhDAAgqgxQgpgxgBhFQAAg9AOgUQAKgOAcAAQAXAAAvAXQA3AbAOAhQAGAOAIAKQANAPAPgEQALgCAEAGQAJgRAKhcIAJhhIAMAGQAFACAGAAQADAAABAAQACAAAAAAQABAAgBAAQAAAAgBAAQAEgFAAgJQAAgfgOhXQgLhBgFgZIAAgBQABgBANADIAUADIEvgTQE8gTB5gDQCQgEC7ACQAngBBEgEQA9gEAMABIABgCIAAAFQABALgIAfIgLAyQgCAPgYBXQgIAdhgETQAAAZhhC3QhhC5gaArQgaArAig1IgyBbQgMAUACAAIg0BDQg2BDg7AYQgiANgwAAQiFAAh7iXgAqwiNIARAIQgIADgGAOQgGANgBAMQABAVAKAMQAMAMAUgBIABgBQgJgJgFgHQgLgOAAgNQAAgJAEgIQAFgLALAAQAHAAAOAPIAYAdQALAEAAgRQAAgOghgeQgogjgsAAQggAAADAgIAAAFQACADAGAAIAJgIQALgIAOAAQAHAAAGACg");
	this.shape_6.setTransform(88.3,133.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#28BD72").s().p("ArQGqIACAAIgBAFgACREoQgLgqgBAAQgGABAAgIIABgIQAEgCASgNQAdgKA6AEQABAAAAABQAAAAABAAQAAAAAAABQABAAAAABQgPARgGALQgLARAAAPQAAAUAVAQQADABACADIAJALIgoADIgvADIgLgqgAD1E0QgTgUAAgIQAAgCAJgMQAKgPAMgKQAXgVADgBQARgGA0AEIC+gBIBVABQBRABAJgBIAEBMIgBAeQgaABmYAIQgUAAgVgYgAGPEAIgCAFIgBAJQAAALADAEQAGAIATgGQAEgPgHgJQgHgIgOAAIgBABgAH6EGQgDAEgCAEIAWAQQAGgHADgLQgLgIgMAAIgDACgAE4EQIAAAIQABAEAGAAQAKAAAKgDQADgGAAgJQgUgKgHgBIgDARgAAjmAIAAgvIC0AAIAAAvg");
	this.shape_7.setTransform(76.1,38.8);

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhbOUQhRhLglhKQgQghiBirQiDitgNgTIgHAEQgDABAAAGQAAARg3AMQgnAHgXAAQg6AAgvgyQg9g9ABhvIASg+IgIgSQgKgRgCgUIgEglQgBgcABgOQACgWgKgMQgNgQAAgDQgFgMAAgZIAAgfIABgDIgBAAQgDAAgJgcQgMgkgHgoQgEgcgDgiIgDgnQAAhlAiiFQAiiCAng5QAbgnAmgcQAegQAagSQAggNCDgcICqgkQA7gBCdgIQgDgLgDgWQgEgUABgIQAAgEA4gIQA+gJBCABIA7ACIACAHIgMBCQFAAEBfAdQAfAJAeAVQAjAYAZALQAlAPAhA4QATAgAmBZQAXBGADANIARBlQAUBoAAAxQAAAagFAdQgFAogLAJQgHAHgHAbIgOBCQgEAUgZBSQgWBIgBAIQAAAIh6EyQACADgRAbQgWAkg9B7QiMEWg7BHQhSBhiAAAQhxAAhwhng");
	this.shape_8.setTransform(86.5,94.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.4,172.9,204);


(lib.boy13Qhatbrim = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#248958").s().p("AhdBDQgcgsgIgHQgGgFgfgNIgygYIgPgFQAegGCQglQCFghAeAAQBNAAAcAXQAVATAAAtQAAAhgJASQgIAUgcAWQgpAVhKAAIg0AHQgwAHgmAAg");
	this.shape.setTransform(72.1,11.7);

	// shade
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#28BD72").s().p("AmVCAIgDgBQgOgHAAgHQAAgaA1geQAvgbBYgeQBlgiBdgXIAUgEQA/gPDPg0IATgEQA7gCAeAFQAdAFAPAPQAFAGAQA0QAAAzgOATQgeAshdAFIgXAAIgSAAIh6AOIgFABIgBAAQgHgFACAEIAAACQnFAygpAAQgLAAgMgGg");
	this.shape_1.setTransform(52.9,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(28,29,36,0.322)").s().p("AgBAAQgCgDAFAEIgCAAIgBgBg");
	this.shape_2.setTransform(64.4,22.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmaCjQgVgGgLgQIAAABIgCgDIAAgBQgIgMAAgOQAAgMAHgMIAAAAQAVgoBegpQAdgKAjgNIA/gUQBIgVCDgkQA5gPBGgYIARgHQBGgVBmgDIAAAAQAsAFAeAMQAiAMAJARIALAhQAJAdAAAEQAAANgJAnQgKAogEAHQgHAMgWAMQgXAOgdAGIgBAAQgsACkYAdIldAkQgwAFgVAAQgLAAgFgBg");
	this.shape_3.setTransform(53.1,14);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.8,-2.4,90.7,32.9);


(lib.boy13Qhairfr = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99492C").s().p("AgMAjQgBgUAJgXQAFgWAHgHIADAIQADAOgBAOQAAANgEAHQgEAKgFADIgKAGIgCgDg");
	this.shape.setTransform(38.1,24.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#733721").s().p("AghCLQAAgEAJgVQAKgYAGgGIAGAJQAEAgggAZQgDgCAAgJgAivB0IAAgBQAAgLALghQANgoAKAAQADAAABAAQACAAAAAAQABABgBAAQAAAAgBABQgBARgNAhQgMAhgFAAgACWA/QAJgaAOgLIADADQAEANgQAdQgPAbgMAGgAhXA3QAJghAJgTQAFgIAAgMIgCgRQgBgKACgBQAWAJAAAYQAAAKgPAZQgQAdgMAHgAikhQQADgQAAgHQAAgHgKghIABgGQAMAIAHAQQAFANAAAOQAAAKgCAFQgDAIgNABg");
	this.shape_1.setTransform(28.4,26.1);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DE6D40").s().p("AjzC1IAFgKQBCh0gEggQAQhYAAgoQAAgpAGg3IA4A4QA3A2AIAAQAUAAAFggQAEgrAFgVIABgBQAEACAgA1QAfA1AQAHQAKgJAIgtQAIgtAJgLQAIAPASAsQASAmASgCQARgCABgcQABgdAEgEQABgRACAFIAEAMQAMAQAIAkQAOA5AABVQAAA9gHAjQgIAmgUAZg");
	this.shape_2.setTransform(24.9,23.4);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DE6D40").s().p("AgBgCIABgBIACAHIgDgGg");
	this.shape_3.setTransform(45.1,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADeDaQgPAAgGgIQhTACl3gUIAUgvQAbhTAJgrQAEgXAFhJQAGhSAAg1IATgBQAcAOAfAbQAfAcAaAhIABgBIAHgjQAHgmAVggQAZAeAaAwQATAkALAEQAFgoASgqQARgqAKAHQAJAHAKAbIAcBIIACABIAEAAIANgxQAHgcAEgDQAfAiAaCAIAIA1QABBZgLA0QgLAzgPAAIAAAAgAC+iQIAEAIIgCgJg");
	this.shape_4.setTransform(25.8,21.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,51.7,43.8);


(lib.boy13QeyeR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6B6B8").s().p("AgmBUIgJgOQgFgOgDgPIAAAAIgBgGQgCgpAQghIABgCIACgEIABgCIAGgKQAZgmAogOQANgEALgCQgmAVgTAeQgXAjADAmQADAgAXApIAUAiIgFAAQglAAgWggg");
	this.shape.setTransform(8.7,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6B6B8").s().p("AgmBUIgIgOQgFgOgEgPIAAAAIAAgGQgHghAVgpIABgCIACgEIABgCIAGgKQAYgmApgOQAMgEAMgCQgnAVgTAeQgXAjAEAmQACAgAXApIAVAiIgGAAQgkAAgXggg");
	this.shape_1.setTransform(8.7,26.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6B6B8").s().p("AgqBfIgEgHQgFgOgDgOIgBgGQgKgaAbg1IACgCIAFgKQAZgmAogOQANgFALgBQgmAUgUAfQgWAjADAmQACAbARAgIgFABQgWACgOAFIgBgBg");
	this.shape_2.setTransform(8.6,24.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6B6B8").s().p("AgmBUIgIgOQgFgOgEgPIAAAAIAAgGQgHgpAVghIABgCIACgEIABgCIAGgKQAYgmApgOQAMgEAMgCQgnAVgTAeQgXAjAEAmQACAgAXApIAVAiIgGAAQgkAAgXggg");
	this.shape_3.setTransform(8.7,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B6B6B8").s().p("AgmBUIgIgOQgFgOgEgPIAAAAIAAgGQgIgkAWgmIABgCIACgEIABgCIAGgKQAYgmApgOQAMgEAMgCQgmAVgUAeQgXAjAEAmQACAgAXApIAVAiIgGAAQgkAAgXggg");
	this.shape_4.setTransform(8.7,26.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6B6B8").s().p("AgTApIgBgCIgDgDIgBgBIgCgEIgGgIIgFgNIgBgBIAAgBIAAgBIgBgDIAAgBIgBgBIAAgCIAAAAIAAgBIAAgBIgBgCIAAgFIAAgCIABgGIAFgdIABgCIAAgCIAFgOIAYAHIAAAPQADAhAXAnIAVAjIgFAAIgCAAQgcAAgagYg");
	this.shape_5.setTransform(7.2,32.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhRBUIgIgOQgFgOgEgPIAAAAIAAgGQgDgoARgiIABgCIACgDIABgDIAGgJQAYgnArgOQAKgEAMgCQAZgCAWALQAhATAEAwQADAlgQAoQgcBIhGAGIgDAAIgFAAQgmAAgXggg");
	this.shape_6.setTransform(13,26.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhQBUIgIgOQgGgOgDgPIAAAAIgBgGQgHghAWgpIABgCIABgDIACgDIAFgJQAZgnAqgOQALgEALgCQAagCAVALQAhATAFAwQACAlgQAoQgbBIhHAGIgCAAIgFAAQgmAAgXggg");
	this.shape_7.setTransform(12.9,26.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBeIhGgMIgFAAIgGAAQgVACgPAGIAAgBIgFgIQgEgNgEgOIAAgGQgKgbAbg0IABgDIAGgJQAYgnArgOQAKgEAMgBQAZgDAWALQAhATAEAwQADAjgQAqQgNAhgVATQgJgFgLgEg");
	this.shape_8.setTransform(12.9,25.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhQBUIgIgOQgGgOgDgPIAAAAIgBgGQgHgoAWgiIABgCIABgDIACgDIAFgJQAZgnAqgOQALgEALgCQAagCAVALQAhATAFAwQACAlgQAoQgbBIhHAGIgCAAIgFAAQgmAAgXggg");
	this.shape_9.setTransform(12.9,26.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhQBUIgIgOQgFgOgEgPIAAAAIAAgGQgIgkAWgmIABgCIACgDIABgDIAGgJQAYgnArgOQAKgEAMgCQAZgCAWALQAhATAEAwQADAlgQAoQgcBIhGAGIgDAAIgFAAQgmAAgXggg");
	this.shape_10.setTransform(12.9,26.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhKApIgBgCIgDgDIgBgBIgCgEIgGgIIgFgNIgBgBIAAgBIAAgBIgBgDIAAgBIgBgBIAAgCIAAAAIAAgBIAAgBIgBgCIAAgFIAAgCIABgGIAFgdIABgCIAAgCIAFgOIAYAHIAmAIIB3AUIgJAYQgbBAhHAGIAAAAIgBAAIgFAAIgCAAQgcAAgcgYg");
	this.shape_11.setTransform(12.7,32.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AA3AoQhEgOgIgCQgRgCgygLIADgGQAZghAqgNQAmgNAfAQQAhARAFAqQABAOgCANQgLgEgWgEgAgzgWIACABIADgEIgFADg");
	this.shape_12.setTransform(14,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgDgMIAAgBQADANAEAOQgGgOgBgMg");
	this.shape_13.setTransform(3.5,32.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhoCfQgKgQgFgTQgDgLgBgHQgGhGAkgyQARgZAXgQQARgOAVgFIAFgCQAwgPAmAXQAqAaAGA7QADAtgSAwQggBUhWAHIgNABQg3AAgbgrgAhiBnQABANAIAPQgGgPgDgOgABUhxIgbgdQgsgpg1AFQgLABgEgEQAAAAgBAAQAAABAAgBQgBAAAAgCQAAgBAAgBQgCgXA3AMQAxALALANQAUAMAPASQAJALALAVIAAAGQgBADgHABQgGAAgNgNg");
	this.shape_14.setTransform(13,20.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhoCfQgKgQgFgTQgDgLgBgHQgGhGAkgyQARgZAXgQQARgOAVgFIAFgCQAwgPAmAXQAqAaAGA7QADAtgSAwQggBUhWAHIgNABQg3AAgbgrgAhiBnQABANAIAPQgGgOgDgPgAghjAQAAgJAIAAQADgBABAGQAAADAUAYIAVAbIAbAYQAVANAigIIACAGQAAAFgIAHQgHAFgHABIgHAAQhBAAgrhng");
	this.shape_15.setTransform(13,20.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhFBCQgkgKgBgNQAAgHAcgQQAWgMALgEQAHACAAADQgEALgZASIgGADQAIAEAbADQAYAEAIgBQA1gEASgKIATgKIAGABIACACQgMASgEADQgWAQg2AFIgQABQgaAAgbgHgAgigdQgzgTACgTQABgEAEgBQAPgBgDAMQABARCqAFIACAFQABAPg9AFIgKAAQggAAgngPg");
	this.shape_16.setTransform(11.5,33.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AACAKIgEgTIAAgBIAAgBIAAAAIAAgBQACAMAEANIgCgDg");
	this.shape_17.setTransform(3.4,32.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA0C7QgIgGgMgFIgKgFQgjgNgyABIgHADIgaAMIgQAHIgIgBQgCACAAgIQgBgGARgJQgJgOgEgRQgDgLgBgHQgGhGAkgyQARgZAXgQQARgOAVgFIAFgCQAwgPAmAXQAqAaAGA7QADAtgSAwQgOAkgXAWQADAGABAHQAAAHgBACQAAAEgHABQgGgHgKgFgAhiBqIAAABIAAABIAAAAIAGAVIACAEQgFgOgDgOIAAABgAghi8QAAgJAIAAQADgBABAGQAAADAUAYIAVAbIAbAYQAVANAigIIACAGQAAAFgIAHQgHAFgHABIgHAAQhBAAgrhng");
	this.shape_18.setTransform(13,20.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhoCfQgKgQgFgTQgDgLgBgHQgGhGAkgyQARgZAXgQQARgOAVgFIAFgCQAwgPAmAXQAqAaAGA7QADAtgSAwQggBUhWAHIgNABQg3AAgbgrgAghjAQAAgJAIAAQADgBABAGQAAADAUAYIAVAbIAbAYQAVANAigIIACAGQAAAFgIAHQgHAFgHABIgHAAQhBAAgrhng");
	this.shape_19.setTransform(13,20.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(28,29,36,0.322)").s().p("AgBABIADgBIgCABIgBAAg");
	this.shape_20.setTransform(9,19.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhoCaQgKgPgFgRQgDgKgBgHQgEgpAOghIACgFQALgQABgIIAGgHQAfgqA0gPQAwgOAmAVQAqAYAGA2QADAqgSAsQggBNhWAHIgNAAQg3AAgbgngAgpgRIACAAIADgEIgFAEgAghi2QAAgJAIgBQADAAABAFQAAADAUAYIAVAbIAbAYQAVANAigIIACAGQAAAGgIAGQgHAGgHAAIgHAAQhBAAgrhmg");
	this.shape_21.setTransform(13,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhICTIggALIgGgDIAQgYIAbgMQBGgYBEAsIANAKIACAZQhJgyhVAXgAgaijQgBgJAIAAQAEgBAAAGQAAADATAYIAWAbIAbAYQAWANAigIIABAGQABAFgIAHQgIAFgHABIgHAAQhBAAgqhng");
	this.shape_22.setTransform(12.4,17.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13}]}).to({state:[{t:this.shape_15},{t:this.shape_13}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_15},{t:this.shape_13}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_22}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,0.6,25,40.4);


(lib.boy13QeyL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6B6B8").s().p("AgzBPQgVgiABgwQAChNAtgmQAlgjA4AIIACAAQguAIgZA1QgPAkgBAgQgBA5AuA7QAJALAZAaIAJAKQhZgIgig8g");
	this.shape.setTransform(9.7,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6B6B8").s().p("AgzBgQgUgjABgyQABhLAtgmQAmgiA4AIIABAAQguAHgYA1QgPAlgBAfQgCA5AuA7QgcAEgWALQgSgPgMgUg");
	this.shape_1.setTransform(9.7,25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6B6B8").s().p("Ag1gDQgOgWgEgeIAHAAIADAAIADAAQASAAAdgEQALAkAcAiQAJALAYAaIALAMQhagHgjg4g");
	this.shape_2.setTransform(9.9,36.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6B6B8").s().p("Ag0AFQgQgZgDgkIAUgFIAEgBIAfgKQAGAyAnAwQAJALAYAZIAKALQhZgIgjg8g");
	this.shape_3.setTransform(9.8,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAdCUIgWgBQhZgJgjg8QgUgiABgwQABhNAtgmQAogjA2AIIABABQA3AIAlAtQApAzgBBKQABAegMAdQgYA4hEAAIgFAAg");
	this.shape_4.setTransform(16.3,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAAIADAAIgCAAg");
	this.shape_5.setTransform(1.8,8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(28,29,36,0.322)").s().p("AALgLIgJAJIgMAOQAKgSALgFg");
	this.shape_6.setTransform(5.5,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABGB8QgugPgRAAIgHAAQgRgBgSADQgcAEgYALQgSgOgMgVQgUgiABgyQABhLAtgmQAogjA2AIIABAAQA3AIAlAuQApAzgBBKQABAegMAdQgIASgMANQgPgGgVgGg");
	this.shape_7.setTransform(16.3,26.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcBOIgVgBQhagHgig6QgOgVgEgdIAHAAIADAAIACAAQATAAAdgEIAkgFIAngHIAAgBQBegRAmgFQAFAWgBAZQABAdgMAaQgYA1hEAAIgFAAg");
	this.shape_8.setTransform(16.3,34.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdBwIgWgBQhZgIgjg8QgQgbgDgiIAUgFIAEgBIAfgKQAsgNARgIQA6gXAqgUIAcgNQAeAugBBAQABAcgMAeQgZA3hEAAIgEAAg");
	this.shape_9.setTransform(16.3,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAjDfQh2gDguhOQgYgoABgsQAChQAngxQAKgUANgFQArglA6AGQBAAFAsA2QAxA7gCBaQgCAtgPAiQgfA/hPAAIgGAAgAiLiPIAEgBIgDACgAhuiPQgbgBgdgLIgBgEQAHgHAHADIAMADQA8ACA9gdIBCgjIAAAGQgBAYg4AZQg3AYgpAAIgDAAg");
	this.shape_10.setTransform(15.6,22.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsBYQgrgLg2gsIABgFIAFgBQAMADA7AVQA8AUARAAIBcgEQgHgEgYgYIgagbQAIACAPALQATANAHADQAOAGAgAKQAKAEAAAJQAAAOgeAGQgcAGg8gBQg1ABgagIgAhkgxQgsgLgIgJIACgDIA3ALQAYADAZAAQArAAAcgJQAXgIAcgTQAFADACADQABAXguAPQgmAMgqAAQgRAAgpgLg");
	this.shape_11.setTransform(16.6,34.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(28,29,36,0.322)").s().p("AAxCAIACADQgPAAgOACQANgDAOgCgAgbiEIgKAJIgNAQQAKgUANgFg");
	this.shape_12.setTransform(9.5,26.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiGDPQANgNAQgKQgOgOgKgSQgYgoABgsQAChQAngyIAOgPIAJgJQArglA6AGQBAAFAsA2QAxA6gCBaQgCAugPAhQgGAMgIALIAEACQgIAOgGAAIgFgBQgMgCgZgJIgPgFQgtgSgIAAQgPAAgMABQgNABgOADIgVAGIgZAJIgHADQgUAIgQAJQgIAAAAgGgAiLiFIAEgCIgDACgAhuiGQgbAAgdgLIgBgEQAHgHAHACIAMAEQA8ACA9geIBCgiIAAAGQgBAYg4AZQg3AYgpAAIgDgBg");
	this.shape_13.setTransform(15.6,21.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(28,29,36,0.322)").s().p("AALgLIgJAJIgMAOQAKgSALgFg");
	this.shape_14.setTransform(5.5,14.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdDpQh3gDgthOQgZgpABgrQAChQAngyIAOgPIAKgJQArglA5AGQBAAEAtA2QAwA7gCBaQgBAugQAhQgfBAhOAAIgGAAgAigh2QAMgcATgUQAdgeA5gXQA6gXARAQIAFAFQgmALghAMQhAAXgpAsIgGAKQgDAHgKAAQAAgCgCgCg");
	this.shape_15.setTransform(16.2,21.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAjDPQh2gCguhLQgYgmABgqIAAgGIAAgCQAFhTAygvQAtgsBBAGQBAAFAsAzQAxA4gCBWQgCArgPAgQgfA9hOAAIgHgBgAhThLQgtAlgBBHIAAAHQASgBBvgTQBigPAkgEQgKgagUgYQgmgsg3gHQgLgBgJAAQgqAAggAagAhuiAQgbAAgdgLIgBgFQAHgGAHACIAMAEQA8ACA9geIBCgjIAAAHQgBAXg4AaQg3AXgpAAIgDAAgAiLifIAEgBIgDACg");
	this.shape_16.setTransform(15.6,24.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AiNCtQBChEBUgEQBWgDA9AXIAFAVIg6gHQh6gRhxA8gAidg5IgCgEQAEgIAIABIAMAAQA6gOA1gtQAYgWAdgcIACAFQAFAYgwAnQgwAmgpALQgSAEgTAAIgTgBgAiLhjIAFgCIgEACg");
	this.shape_17.setTransform(15.6,18.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAcC+Qh3gDgthOQgWgkgCgmIAEgcIAfgJIBhgmICeg9IAJACIACABIABAGIAAABIgBAKIgJAGQAeA0gCBHQgBAtgQAiQgeA/hPAAIgGAAgAichTQAAgBAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAQAGgIAIABIAMACQA7gKA3goIA6gvIABAGQAEAXgzAkQgzAjgqAHQgMACgNAAQgPAAgRgDgAiSiwIAEgBIgDACg");
	this.shape_18.setTransform(16.3,26.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0.5,33.7,44.8);


(lib.boy13QearR = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdAwQAXgXAAgZQAAgEgHgKQgIgKgGgCIgVAOIACgHQAMgOAIgIQAOgNAYAAQAPAAAGADQAQAGAAATQAAAMgEAGIgMAKIACgHQgBgWgDgFQgGgIgWAEIgCAEQAJAXAAAHQAAAcgIALQgHANgeAFg");
	this.shape.setTransform(11.2,15.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B69372").s().p("Ag2AoIgEgVQAAhIA6gGQAXgCASAMQASANAAAVQAAAQgPAYQgWAjgmAAQgbAAgLgUg");
	this.shape_1.setTransform(10.8,15.9);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ag3BrQgogIAAgPIAAgFIABgBIgBAAQgHgMgDgIQAThXAMgRQAGgHANgJQAUgMAMgJQAYgGAogNQAfgKAFAAQAIAAAIAOQANAZAAA4QAAA9gxAoQgjAdgYAAQgZAAgcgGg");
	this.shape_2.setTransform(10.7,14.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUCAQgigPALghIABgBIgBAAQgHgLgDgJQAThXAMgQQAGgIANgIQAUgMAMgJIAcglIAMgHQAugMANAAQAbAAAPAnQAMAhAAAtQAAA9gmAuQgsAzhFAAQgdAAgWgKg");
	this.shape_3.setTransform(11.9,13.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,23.7,27.8);


(lib.boy13Qcollarcopy = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3E4D").s().p("ABEA8IgVgCIgCgBQgKgfgbg3IAGABIAXAEIACAAIAGAPQAFAKAOAcQALAXAAACIgCAHIgFgBgAgYAqIgYgLQgIgNgHgSQgNggACgcQARAQA2AMIAKAqQAGASAFAKQAGAKAJAIQghgGgYgIg");
	this.shape.setTransform(9.4,8.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445A6F").s().p("Ah+A/QgIgSgNgfIgNggQAoADAnAAQAWAAA2gDQADAKAJAbQAMAhAJANIgcABQhFAAg5gDgAAjA9QABgKgQgqIgMgcIASgBQA3gEAXgEQAQBJAIAKIAAADQg0AFgpACIAAgEgAiVA/IhCgGIgIgBIgFAAIgVgCIgCgBQgKgfgbg3IAFABIAYAEIACAAIAHABQAmAFAlADIAKApQAKAfALAKIgFAAgACkA7IgNgBQAJgRANgUQAZgkAEgKQA4gGAkgHIgBAEIgOAiQgHAKgOAVIgSAQIgCAAIAAABIACgBIgKAJIgXABIAWgBQgoAEgQAAIgJgBgAESAfQAdglAEggIAAgDQAZgFANgGIAbgNIAAACIAAABQACAFgBAEQgDAcgfAgQgKAPgGAGQgGAGgDACIgDABQgKAHgfAHIgQADQAJgJALgOgAlCAmIgZgLQgHgNgIgQQgNgiADgcQARAQA2AMIAMAqQAFASAGAKQAGAKAIAIQgjgGgXgIg");
	this.shape_1.setTransform(39.2,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(6,6,8,0.322)").s().p("AgKgCIAHABIAOAEIgVgFg");
	this.shape_2.setTransform(4.6,2.2);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AlxAiQgLgNgGgWQgIghACgVQACgRAEgHIAEgGIABAAIAaAMIAGABIARAHIATADIADABIAJAAQCCAYBOAAQBMAAB4gIIACAAIABABIAAgBIABgBIACAAIABAAIAAABIACACIABAAIABABIALAZQAPAkACAQIAHgMQAHgMAYgeIARgWIAigGQA4gGAVgHQAxgOAFgFQADgDAQgEIgBABQABAEAFAEQAIALgBAMQgDAZgcAmQgUAegOAIIgGAHIgFABQg3AUhAAAQgkAAgJgBQgIgBAAABIgOACIg6AGQgxAFgaAAQluAAgBg1g");
	this.shape_3.setTransform(39.2,9.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0.5,78.7,17.6);


(lib.boy13Qcollar = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F3E4D").s().p("AA1A6IgBgBQgOgfghg3IAfAFIAIAPIAXAmQAOAXAAACIgBAHIgbgDgAgTAqQgKgDgQgIQgJgNgJgSQgRggAAgcQASAQA4AMIAPAqQAHASAHAKQAHAJAJAJQgkgGgWgIg");
	this.shape.setTransform(8.3,8.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445A6F").s().p("AhwA/QgLgSgQgfIgRggQApADAnAAQAWAAA2gDQABAKAOAbQARAhAKANIgeABQhDAAg5gDgAAxA9QAAgKgVgqIgQgcIASgBQA3gEAWgEQAZBJAJAKIAAADQgzAFgqACIABgEgAjSA5IgcgDIgBgBQgNgfghg3IAfAFIAHABQAnAFAmADIAOApQANAfANAKQgsgDgkgDgACxA7IgNgBQAHgRALgUQAVgkACgKQA4gGAjgHIAAAEIgKAiQgGAKgMAVIgQAQIgCAAIAAAAIACAAIgJAJIgXAAIAWAAQgnAEgQAAIgKgBgAEcAfQAZglAAggIAAgDQAZgFALgGIAagNIABACIAAABQACAFAAAEQAAAcgbAgQgJAPgFAGQgFAGgEACIgDABIAAAAQgIAHgeAHIgQADQAIgJAJgOgAk3AmQgKgDgQgIQgJgNgJgQQgRgigBgcQATAQA3AMIARAqQAIASAGAKQAHAJAKAJQgkgGgYgIg");
	this.shape_1.setTransform(37.6,9.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlnAnQgMgNgJgZQgMgeAAgWQAAgQADgHQAFgMARgFQACABAAAGIgCAFIAKAHIAJAGIAOAFQAIADAKABIAGABIAIAAQCFAXBOAAQBMAAB3gHIACAAIABAAIAAAAIABgBIACAAIAAAAIABAAIADADIAAAAIABABIAOAZQATAjAEARIAGgMQAGgMAUgfIAOgWQALgCAXgDQA3gHAUgGQAwgPAFgEIAHgGIADgCIACgBIALALQAKALAAAMQAAAZgXAmQgSAegNAIIgFAHIgEABQg1AUhBgBQgkABgIgCQgJgBAAABQAAABgOABIg4AHQgxAFgcAAQlsAAgHg1g");
	this.shape_2.setTransform(37.6,8.8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,-0.4,78.7,18.5);


(lib.boy13QarmRcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E9395").s().p("AhBAoIATgQIASgRIAHgHIAHgGQAQgVARgYIADgGIgCgFIgeAUIgWgiIAQgEIAPgGIANgIQAOgGANgJIANAdQAOAdAAAHQAAAphJBCQgjAggXAPg");
	this.shape.setTransform(13.9,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29A42").s().p("AgBB7IgRgcIgQgdIgPgeQgLgXgJgXQgJgXACgZQACgaALgWQAFgIAHgHIAAACQAAAEAgApQAjAuAOAZQAIAMAUAnIATApIgDAEIgEADQgNAMgRAGIgWAHIgNACIgGAAg");
	this.shape_1.setTransform(9.4,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCCC").s().p("AhiDVIAAgMQAFgGgCgFIgCgFIgBAAIAAjQIATgPIASgRIAIgIIAGgHQATgWAQgXIADgHIgCgEIggAUIgWgiIAQgEIAPgGIAPgIQAOgHALgJIANgKQAQgNANgPIANAbIAMAbIAKAbIAJAdIAFAPQAEAXgEAWQgEAWgMAUIgJALIgsA5IgYAbIgWAbQggAjgoAYIABACIgCAQIAAADQgCALgEAAIgBAAg");
	this.shape_2.setTransform(17.2,44.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAD652").s().p("AgTB/IgSgcIgQgdIgPgdQgLgYgJgWQgIgXACgaQACgZALgWQAFgJAHgHIAEgEQAGgFAHAAQAMAEAMAGQAUALAOARQARARAMAVIAZApIAPAZIARAfIADAHIgIAMQgHAIgJAIIgJAJIgDADIgEADIgEAEQgNAMgQAGIgWAHIgLABIgIAAg");
	this.shape_3.setTransform(11.3,15.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AhEAoQgHgNgJgMQgOgPgMgRQgJgMgBgRIADgGQAGgKAJgGQAGACAGADQAQAJAOALQAKAHAHAJQAaAeAUAkQAAgOgDgOQgEgXgQgVQgbgjgpgQQAPgMATgEQARgCAPAKQAWAPAOAWQAXAgATAgIAFAFIAGAAQABgQgHgQQgbg6gyglIATAAQAPABAPAJQAdAUARAgIAQAeQAWAlAEAsQABAPgGAPIgFAJIiWAPQgLgngSgjg");
	this.shape_4.setTransform(25.8,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhEFGIAAkIIASgRIAHgGIAGgGIAKgMQgdgpgbgsIgRgeIgQgfIgOgfQgHgTgEgTQgHgbAGgdQAGgcAQgZQAIgLALgHIAGgDIAIgBIAIAAQAJADAIAFQAXAMAUARQAYAWASAeIAoBEQALASAMAXIAQAhQAIAPAHARIANAhQAIAaAGAZQADARgBARQgBAQgDAQQgHAcgRAVIgWAdIgYAdIgXAbIgaAaQgUAUgTARQgVATgZALQgCALgDAAIgBAAg");
	this.shape_5.setTransform(14.2,33.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhCB+IABgMIABgGQgLgigVgfIgVgcQgOgPgHgVQgGgQAJgQQAJgRARgIQAFgOAOgHQAPgGAPgFQAHgDAHAAQAJgKAPgBIAdgBQAgAEAXAZQAzA4ATBEIAHAeQAEAQgCAPIgCARIjNAUg");
	this.shape_6.setTransform(25.8,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.boy13QarmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374656").s().p("AgJAjIgDgCIgFgEIACgMQACgWgBgdQAMAEAUAEIAAAEQgGA5gSAAIgDAAg");
	this.shape.setTransform(17.5,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E9395").s().p("AAKCoQgBgwgGg9IgIhMIgJg+QgDgPgYhBIgDgEIgBgCIADAAQASAAAWgFIABAEQAuCSABCVIgBAqQgXgEgMABg");
	this.shape_1.setTransform(14.9,46.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B29A42").s().p("AgFA5Qg6iRADgXQABgLAEgGIAIAOQAPAbAfBRQADAJAgA+QASAiAKAYIgCABIgCAAIAAAAIgbAEIgKABIgahIg");
	this.shape_2.setTransform(7.8,15.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E9395").s().p("AhFAqIACAAQAOgKALgKIASgRIAHgGIAHgIQAQgVAQgXIADgHIgBgEIgeATIgWghIAQgFIANgGIAOgHQAOgHANgJIAOAeQAOAdAAAGQAAAqhJBBQgqAmgYAPg");
	this.shape_3.setTransform(13.5,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B29A42").s().p("AgBB7IgRgcIgQgdIgPgeQgLgXgJgXQgJgXACgZQACgaALgWQAFgIAHgHIAAACQAAAEAgApQAjAuAOAZQAIAMAUAnIATApIgDAEIgEADQgNAMgRAGIgWAHIgNACIgGAAg");
	this.shape_4.setTransform(9.4,16);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#374656").s().p("AgmAGIAageIAKATQAFAQAOAOIggAaIgXgtgAAdAIQgOgVgOgZIAJgHIABgBIAGgEQALARAEALQAKAWgEALIgEACIgFgFg");
	this.shape_5.setTransform(31,52.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E9395").s().p("AAdBtIgSgeIgRgbQgcgrgfgmIgmg0IAdgkIAOgPIACADQA7A+A6BNQAcAmARAaIgDACIgFAEIgRAMIgCACIgHAHIgLAOIgOASIgQgYg");
	this.shape_6.setTransform(21.3,38.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B29A42").s().p("AgDA6QgVgagWgXQgSgPgJgYQgIgXACgXIABgGIAAAAIABgDIAAgBIABgDIABgEIADgHIADgGQADAMAUAUQAWAWAcAhQAaAbAyA0QgZAUgTAbIgngxg");
	this.shape_7.setTransform(5.8,17.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B29A42").s().p("AhWBRIgTgtQAggnAmgjQAbgZAwgzQAdAWAlAKIiDCCQgWAWgVAYIgDAEIAGALIABAAIgBABIgGAFIgPgig");
	this.shape_8.setTransform(14.2,15.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#374656").s().p("AgYARIgbgIIAoggIAPAFQAXAGAZgEIgxAoIgbgHg");
	this.shape_9.setTransform(45.2,-14.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4E9395").s().p("AhkBKIgTgLIA1g5QA0gmAuguIAPgOIAPALQAOAJAPAEIAdAHIirCaQgZgGgYgNg");
	this.shape_10.setTransform(31.6,-3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B29A42").s().p("AhdgBIAAg0IACgTIASADIAkAJIAlAMIAlAPIA5AXQgNAnAFAsg");
	this.shape_11.setTransform(9.2,19.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4E9395").s().p("AA2BKIhCgkQgqgWgsgRIABgrQABgYAFgXIAXAKQAaALAaAPIBHAnIAjARIAJAEIAAACIgBABQgNApACArIghgSg");
	this.shape_12.setTransform(29.7,28.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#374656").s().p("AgcAcIgCglIAxAVIABAHQACAWAJAUgAgdgeIABgCIADgOIAEgOIABAAIAnAXIgGAYg");
	this.shape_13.setTransform(43.5,35.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#374656").s().p("AgWARQgNgNgJgQIAggEIAQgGQAOAZAcARIg8ADIgIgGg");
	this.shape_14.setTransform(16.5,46.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#4E9395").s().p("AArB6QgggDgbgLQgRgIgOgJIgTgPQgMgLgIgPQgTgjgGglQgDgbgBgaIABgaIANgFIAJgEQAVgJAWgDQABAdAFAyQAAAJAWA6QAIATAPARQARARAegCIAmgDQAHATANARIAJALQgdAEgcAAIgQgBg");
	this.shape_15.setTransform(0.7,36.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B29A42").s().p("AgyBHIAFgfIAHgfQAEgNAFgPIALgeQAHgQAJgLQAGgNALgHQATgOAUgGIgBAEIAAABIAAAAIgTA7QgXBKgCBLIgIACIg3ASIAEgug");
	this.shape_16.setTransform(-5.2,12.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4E9395").s().p("Ag3hKIgDgHIAegSQARgLAOgFIACAIIAkB+QALAsAHAiQgcADgWAHQgJAFgIAEQgIhWgnhog");
	this.shape_17.setTransform(16.5,37);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#374656").s().p("AgiACIAAgMIAKgGQARgLAHgCIAAAAIAAAAIACAdIgCARIAAABIgMAGIgIAJQgEACgNACQACgMABgXgAgiAUIABAAIgBgBgAAVgPQAAgKgDgIIAJgCIABAAIAGgBQAEAbAAAQIgBADIAAAAIgMABIgEAAIgBABIABgbg");
	this.shape_18.setTransform(19.3,52.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B29A42").s().p("AATBVIgng9QgigzgZgdQgJgLgHgGIgBABQgGgKgBgGIAAgCQAAgXAagFQANgDALAFQAOAFANAQQApAaAeAtQApA8ASAwIgYAKIgDACQgaAOgMAKQgIgQgMgTg");
	this.shape_19.setTransform(5.7,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#374656").s().p("AgrAUIAWgrIAfAcQgMAUgDAWIgCAPgAgJgoQAJgMAKgJQAdAcAFAMIgUAMg");
	this.shape_20.setTransform(28.1,36);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E9395").s().p("AgJA6IhBg2IgNgHQAAgUAHgVQAIgdAVgXIAgAZQBEA3AnAhQgOALgLAOQgTAZgMAeQgWgVgTgSg");
	this.shape_21.setTransform(18.7,26.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B29A42").s().p("AgqAbQgggbgQgjQgCgGgBgHIgBgUQAGgTAOgKQBAAbBoBNIgGAIIgSAcIgBACQgFAMgEANIgFAcQgzgggugng");
	this.shape_22.setTransform(2.3,14.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B29A42").s().p("AAIA8QgagUgVgZQgagdgMgmQgCgHAAgGIAAgCIADgaQAXAeAmAdQAcAXAjAOIACAUIAAADQADAUAHATQAGAQAOANQgogMgggWg");
	this.shape_23.setTransform(7.8,14.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#4E9395").s().p("Ag5AvIgpgGIgBgBIABAAQAAgEgCgDIgPgQQgIgIgGgJQgNgWgDgbQBIAcBaAAIAcgBQANALAPAIQAjARAmAAQgPAMgRAIQgLAFgNADQgfAHgfABIgUAAQggAAghgDg");
	this.shape_24.setTransform(29.2,20.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#374656").s().p("AgvAgIgXgGIAfgXIAbgdQAqAGApgOQgTAhgdAXIgBgBIgBABQgSAMgPAAIgNAAIgGABQgIAAgIgDgAgeAKIABAAIAAAAg");
	this.shape_25.setTransform(46.9,16.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B29A42").s().p("AAAByIAAAAIgEgHQgdgvgMgtIAAAAIgDgIIgGg4QAAgKAFgOIADgJIAFgPIAAgFIAEgTQABgGADgDQADgDAFABQAJABAAANIgCAJQgDAGAAADQAAAGAhA/QAbAuAQAZQgWASgQAbIgMASQANAVAAADQAAAEgEADIgOgUg");
	this.shape_26.setTransform(13.9,18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4E9395").s().p("AA9BeIgFAAIgEgCQgegJgZgOIgEgBQgCgCgCgCQhDgmgthIIAKgTQAPgWATgQQA/BWBAAbQAZALAXAFQACAlAWAjIAAAAIAEAGQghgCgegIg");
	this.shape_27.setTransform(28.8,34.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#374656").s().p("AAtAnIg6gDQAAgEgCgDIgJgMIAAAAQgHgLgEgKIArADQAHALALAJIAGAHIADADIADADIAEADIADADIAAABIAAAAgAgpgYIgBAAIgCgOIAPABQAPABAOAHIAAAHg");
	this.shape_28.setTransform(45,41.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B29A42").s().p("AhSAIIgBAAIAEAVIAAABIBQAkIgqgQIgrgPIAAAAIgCgBQgJgEgDgLQgJglgDgmQAGgOAKgMQAEgEAFAAIAAABQACAMgJAKIAAABIAIACIAcAFIAlAJIAjAMIAmAOIA5AWQgNApAGAsg");
	this.shape_29.setTransform(7.4,18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#374656").s().p("AgUAMIgFgJQgIgOgCgVIAgAIIARACQACAcAUAag");
	this.shape_30.setTransform(16.7,55.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#4E9395").s().p("AAxB+IgKgFIgDgCQgPgIgOgKQgKgIgLgKQgLgMgIgLIgDgEIgMgVQgIgPgCgRQgBgQAAgSIgCADIAAgBQAKgJALgHIAQgKQAVgOAXgIQgCAEAAAPIAAABIAAAKIgBAXIAAAYQAAArAGANQAEAGAKAGQAIAFANAFIAkALIABAJQAAAQAFAQIAEANQgcgGgbgLgAhVgHQgHgSgDgSIgBgFIgFgXIgCgQIACAAIAAAAIAGAAIAAgDIgBgcIAMgGIAIgFQAVgJAWgEQADAaAGAqIgRABQgIAJgHAKIgGAKQgLARgHATIgDAHIgCgGg");
	this.shape_31.setTransform(1.5,41.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#B29A42").s().p("AgrBOQAAgRABgRIAFgiQACgPAEgQQAEgRAFgQQAFgRAIgNQAIgOAHgHQASgPAUgIIgBAGIAAAAIgOBBQgQBRAFBTQgaAHgaALIgCABIgCABIgCABIgDABQgBgZABgag");
	this.shape_32.setTransform(-3.9,14);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B29A42").s().p("AAwCMIgZgmIgXgnQgJgUgJgUIgUglIgPgcIgIgVIgCgLIAAgBQgCgeAQgbQAEgHAIgCQAHAEACAJIABAEIADAQIAQA1QAIAkASAeIAuBWIAAABIgDAFIgEAJIgBABIAAACIgDAJIgBABIAAABIAAABIAAABIgBABIAAACIAAABIgBADIgBAFIAAACIgBgCg");
	this.shape_33.setTransform(3.5,16.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#4E9395").s().p("AgVBbQgRgCgPgHQgSgIgPgMQgPgLgPgTIgGgKQgEgHgFgFQAAgKALgUIABgBIABgCQANAXAQATQAKANANAJQAPAJARAGQALADAKAAQANgBAMgEQAVgJANgVQAJgPAGgNIAWg3IAFgOQAYgFAUgPQgEAngMAlQgQAzgrAhQgcAVgiAGQgIAAgIgDg");
	this.shape_34.setTransform(23.3,31.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#374656").s().p("AgMAqIABgjQAAgMgGgMQATgHAQgSQAAAkgJAgIgVARIAAAAIAAgBg");
	this.shape_35.setTransform(35.7,16.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#374656").s().p("AgZAEIAZgWIARAEIAJADQgCAJgEAHIgCAGIgGAIg");
	this.shape_36.setTransform(35.1,27.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#4E9395").s().p("Ag2BDQgVgMgRgTIgCgCIgWgaIgHgIQgCgCgCgCIgBAAIgJgOIgMgQIAEgIIACgFIANgcIACgEIACAEIARAiIAJATIAJAQQAJAMAMAMQAGAGAIAEQARAJATACIATgFQAZgFAUgRQARgMAQgPQAPgNALgQIAFACIACABQAaALAOADQgIAMgMANIgDACQgVAegdAWQgTAPgZAGIghAHIgCAAQgbAAgZgNg");
	this.shape_37.setTransform(20.4,33.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B29A42").s().p("AgbAJIgCAAQgDAAgCgCIgDgHIgRgnQgBgFABgEQACgKAHgJQAGgIgEgJQgDgGACgIIABgDIADADIARAaQAMAUALAWQAKAYANATIAhAxIgHAJQgJAPgIAQIg7hdg");
	this.shape_38.setTransform(0.8,17.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#374656").s().p("AgqARIAKgMIALgKQARASAIAKIAAADIgUARIgagagAABgGIgFgFIABgHIgBgFQAKgKAMgJQAZAiAAADIAAAAIgEACIgUAKIgBAAIgBABQgGgHgKgHg");
	this.shape_39.setTransform(22.7,57.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4E9395").s().p("AgNBaIghgzQgTgfgIgSQgNgigLglQAPgRATgRQATgRAVgLIAQAvQANApATAjQARAcAwBBIAIAKIgHAFIgLAIIgCACQgiAcgMASQghgigMgUg");
	this.shape_40.setTransform(13.7,43.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B29A42").s().p("AgFB7QgEgPgGglQgCgXgIgMIgEAAQgHAAgDgGIAAAFQAAAOADAWIgCgIQgIgfAAgdQgDgKAAgFIgIggQgLAAgBgNQAAgNANgBIACAAQADgLAHgLQANgWARgKQAQgKAMAJIAEAFQAJAMAAAcQAVBeATA2IADALQg0AZgTAaIAAABIgCABIgCgIg");
	this.shape_41.setTransform(3.5,19.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#374656").s().p("AgEAaQgDgEABgKIAAAAIADgBQALgCADgHQAJAJAQADIAAAAQAAADAFAGQgOAHgXAGgAgdAAIgDgDIgGgLIgCgDIAFgDQATgPALAAIAEABQABASABAHQgFAAgMAEQgJADgDACIgBAAg");
	this.shape_42.setTransform(35.4,40.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4E9395").s().p("AhFAvQgQgPgcgqQgJgOgIgSIAOgRIAHgHIABgCIAPgQIADgDQANAYAHAQQAKAVAUAXIALALQAGAHAMACIAdAHQAYAEAXAAQARAAAOgEIABADIAAACQAPAiATAQQgsAJg1AAQg8AAgrgpg");
	this.shape_43.setTransform(20,36.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B29A42").s().p("AATBgQgMgdgHgOIgCABQgIAAgEgIIAAAGIAAACIgXg4QgahHAAgHQAAgTAWgEQAVgEAGAKQAHAHAGAMIABADIAGAWQAWA1ARAgIATAiQgeAWgLARIgEgJg");
	this.shape_44.setTransform(3.5,19.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4E9395").s().p("Ag2BJQgVgMgRgSQgZgagUgdIgMgPIAEgIIAWgvIACgDIAtBGQAoAxAvAAQA6AAAkhEIABgCIAEABQAaALAOADQgIANgMAKIgDAFQgVAegdAWQgTAOgZAHIghAGIgCAAQgbAAgZgNg");
	this.shape_45.setTransform(20.4,33.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B29A42").s().p("AgXASQgDAIgFAAIgCAAIABACIAFAMQgkgxAAgVQAAggAIgWQAMgiAaAYIAGAOIAMAhQANAfAOASIAkA1IgOAUQgJAOgIAQIg4hXg");
	this.shape_46.setTransform(0.7,17.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#374656").s().p("AggAPIACgCIgCgBQAHgMANgcQAUAHAZAAIAAAAIgEAHQgOASgNAZg");
	this.shape_47.setTransform(35.8,26.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#374656").s().p("AgBAvIgMgNQgPgSgIgTQAIADAKAAQAFAAAGgEQAGAJAIAJQAMAJAPAHIANAGIgBAFQgPAGgOAAIgSAAgAguguQAQAJAOABIABAGIABAGIACAGIgMAAQgKACgGACQgEgOgCgSg");
	this.shape_48.setTransform(31.4,60.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4E9395").s().p("ABICVQg3glhAhrQgpg/gMghIgOgfIASgWQAKgMARgLQAiBZA7BOQAhApAcAXIABARIABAGIAAADIADANIAAACIAAABIABACIAAACIAAABIABACIABADIAAACIABACIAAACQAIAeANAQQgXgGgUgNg");
	this.shape_49.setTransform(15.6,47.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B29A42").s().p("AgeA/QgkhkAAgNQAAgFAEgIQADgIAAgDQAAg+ARgEQAHgBAIALQAMASAPAvQAFAUAZAyQAXAxAKAdIAEAMIgFAEQgfAWgMAQIgLgUIgEgIQgBABAAAAQgBABAAAAQgBAAgBAAQAAAAAAAAQgDAAgEgJIAAAEQAAAOAGAVQgNghgQgtg");
	this.shape_50.setTransform(1.1,19.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#374656").s().p("AgJAjIgIgGIAAgCIACgXQACgQgBgWQAMAEAUAEIAAAEQgGA5gSAAIgDAAg");
	this.shape_51.setTransform(17.5,68.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B29A42").s().p("AgFA5Qg6iRADgXIAAAAIAAgBIACgKIADgGIAIAOQAPAbAfBRQADAJAgA+QASAiAKAYIgDABIgBAAIAAAAIgbAEIgKABIgahIg");
	this.shape_52.setTransform(7.8,15.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#374656").s().p("AAJAbQgTgGgTgIIAigWIAKAEIABAAQAWAGAWABIgtAeQgCgDgEgCgAgxACIgJgFIgBgBIAVgTQAHgFAFgDIANALIgjAWIgBAAg");
	this.shape_53.setTransform(44.7,-21);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#4E9395").s().p("AhJBYIgHgDQgPgGgMgHIgTgPIgGgGIA9guQA9gvBEgyQAKAIAMAHIAAAAQAXANAeAJQhoBHhhBNQgCgDgDgCg");
	this.shape_54.setTransform(31.2,-10.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B29A42").s().p("AhhBcQgKgFgGgGQgFgGgGgKIgGgLIACgKQAEgLAJgBIgBADIABADIAIgGQAqggBLg6IA5gsQAYAbAoAQQhYBEhTBLIACABQAAAHgIAAIAAABIAAADQgNAHgKAAg");
	this.shape_55.setTransform(9.4,5.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B29A42").s().p("AgLAkIgGABIgHgBIgCACIgWgIQhBgZAGg+IAKgDIAbAKIAIADQBKAbBOARQADAZALAdIAFAKQg7gHg9gSg");
	this.shape_56.setTransform(6.9,17.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#4E9395").s().p("AhoAgIgBgEQgOgdgEgdIAiAGQBYAMBOgWIADAEIAkAhIABAAIAHAFQhNAbhXAAQgfAAghgDg");
	this.shape_57.setTransform(30.5,20.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#374656").s().p("Ag0gFIApgRIABgBQAHgDADgBIADAAQAUAPAeAKQgeARgfANQgagQgSgRg");
	this.shape_58.setTransform(46.2,17.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#374656").s().p("AgdAMIAHgMIAEgKQAXgFAZADQgBAHgGAOIAAAFQgXgEgdACg");
	this.shape_59.setTransform(25.9,31.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#B29A42").s().p("AARAuIgVgIQgxgPgSgHIgBAAIABAAQg0gbgIgYQgFgUAigSIABAAIALgGIABAAQCHAnBXAoQgMAQgHATQgFAMgEANIgCAJIAAAAIgCALQgqgTgqgPg");
	this.shape_60.setTransform(3.4,11.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4E9395").s().p("AA8BOIgEgBIAEABQgugBgIABQAAgFAcgJQgBgEgEgCIgfgSIgBgBQgngWgngRIADgPQAJglAUgbQCCBEAABJIgDASIgSgCg");
	this.shape_61.setTransform(23.6,20.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#4E9395").s().p("AAvBAIg5gGQgrgBgmgUIgzgaQAFgQADgTQACgKADgMQAEgKAFgJQBiBBB/AAQACAJADAIQAKAdAXAQIgyAEIgHAAQgTAAgUgCg");
	this.shape_62.setTransform(29.3,26.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B29A42").s().p("AAiBqQgZgVgUgZQgPgQgNgSQgMgRgIgSIgHgXIABgDIgFgNIgBAAIgBgGIgBgGIgCgOQAAgPABgPQAGgJAGgHIAQAaQAfAzAjAnQAbAaAdAWIgFAHQgKASgCAVIgCAfQgMgHgLgIg");
	this.shape_63.setTransform(7.5,14.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#374656").s().p("AgjAJIAbgHIAPgFQAWANAcAFIg5ASgAgwgFIAAgBIgHgOIgBgEQAMgCAPgDIAMgDIAFAJIAFAFIACADQgWAEgUAHIgBgBg");
	this.shape_64.setTransform(47.8,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_52},{t:this.shape_1},{t:this.shape_51}]},1).to({state:[]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).wait(1));

	// Layer 5
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#445A6F").s().p("AgLAsIgXgEIACgVIABgGIACgNIAEgiQAfAFAagBIAAABIgCANIgDAbIgCAOIgBAVIgJAAQgNAAgNgCgAAqAhIABgGIABgJIABgXQACgRgBgJIAPgCQAPgBAHgDQACAVAAAWIgCAVIgOAHIgFACIgLAEIgNADIACgKgAhNAYIgCgCIgGgEIACgMQACgWAAgdQAMAEAVAEIAMACIgFAZIgCAKIgDAOIgBALIgCALQgRgFgLgHg");
	this.shape_65.setTransform(24.2,69.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#66CCCC").s().p("AgRC3IgBAAQgXgEgMABQgBgwgGg9IgKhMIgJg9QgDgQgYhBIgDgEIgBgCIADAAQASAAAWgFQAVgEAZgJQAdgMAMgJQALAVAIAWIAIARQAOAiAKAiQAFAMACALQANAtAHAsQAIAyADAxIABAlQgcAHgPACIgGAAQgaAAg0gKg");
	this.shape_66.setTransform(21.4,44.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FAD652").s().p("AgxA9Qg6iRADgXQABgLAEgGIAFgFQAIgFAMADQAOAQAaAXQAlAkAMAOQAhAnASAZIAAgBIAIAPIAAABQASAbANAdIgDgBIACADIgKAHQgFADgMAFIgSAHIgWAGIgQAEIgDABIgCAAIgBAAIAAAAIgZAEIgLABIgchIg");
	this.shape_67.setTransform(12.1,14.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFCC99").s().p("AAhBlQgTgDAQhCIADgeQAAgKgBgIIAFgTQAAgCgEgGQgJAQgYA5QgYAzgXgDQgSgCAGgRQAPg6ADgSQAFgLACgOIABgCIAAgCIABgEIgBgBQABgKgHgBQgFgBgGAJIgDADQgdAXgWgDQgJgCgGgEIAog7IADgCIADgCIAFADIABAAIADADIABABIAKAGQAMAFAPAFIAAABIABAAIAJACIAAAAIABgBIAYAFQAlAFAfgIIACgBIAMgFIABACQAJASAHAVQAQApgFAkQgEAfgPgCQgGgBgIgOQgDgHgDgDIACgMQAEgygEgWIgIgQIgCgBQgHgBgBAFIAEBUQgMBHgVAAIgCAAg");
	this.shape_68.setTransform(21.8,82.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#66CCCC").s().p("AhmDSIAAgPIACAFIAEAEIABgBIgCgBIgCgDIgCgIIgBABIAAjSIACAAQAOgKALgKIASgRIAHgIIAHgHQASgWAQgXIADgHIgBgEIggAUIgWgiIAQgEIAPgGIAOgIQAOgHALgJIAOgKQAQgNANgPIANAbIALAbIALAbIAJAdIAEAPQAFAXgEAWQgEAWgNAUIgJALIgsA5IgXAbIgWAbQggAjgoAYIAAACIAAADIgBANIgBADQgCALgDAAQgFAAgEgDg");
	this.shape_69.setTransform(16.8,44.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FAD652").s().p("AgTB/IgSgcIgQgdIgPgdQgLgYgJgWQgIgXACgaQACgZALgWQAFgJAHgHIAEgEQAGgFAHAAQAMAEAMAGQAUALAOARQARARAMAVIAZApIAPAZIARAfIADAHIgIAMQgHAIgJAIIgJAJIgDADIgEADIgEAEQgNAMgQAGIgWAHIgLABIgIAAg");
	this.shape_70.setTransform(11.3,15.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC99").s().p("ABABKQgTgHgQgNQgKgHgLADQgbgFgdgPQAQgQABgPIgEgEIgBAAQgKAFgIAHIgdAeQgLALgPgCQgIgCgGgFQgJgFgCgGQgEgTAQgIIAGAAIANgJIAfgYQAZgUAegLIALgFIAXgGQAUgGAWAAQAjADAaAXQACACACAHQADAJgCAJIgGADQgNAFgPgDQgXgGgUgHQgOAFgOgDIgKADIACAEIAeALIAbAJQAXAGATAAIACACIAHAHQAGAFADAHQAEALACALQACAKgKAEQgKgCgJgEQgKgFgIgIQgbgbgjgLQgEgBgGACIAAABIAPAPQAeAcAiAaIgMAKIgVgHg");
	this.shape_71.setTransform(41.2,60.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#445A6F").s().p("AhhAUIAageIAKARQAHATAOAOIgiAZIgXgtgAgcAWQgOgWgOgXIAJgHIABgBIAGgEIATgLIACgBIABgBIACgBIACgBIAGgCIAGgBIABABIALAYIAQAfQgYAIgVAOIgEADIgFgGgAAQg9IA5gDIAZA2IgMAAIgCAAQgRAHgSABg");
	this.shape_72.setTransform(36.9,51.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#66CCCC").s().p("AgaCBIgSgeIgTgbQgcgqgegnIgng0IAegkIANgOIAAgBIARgNQARgMAVgFIAngKIANAOQAPAQATAUIAoArIAVAYIAVAaIAhAnIAWAgIgZAAQgSACgPAEIgcAMIgVALIgGAEIgDACIgFADIgSANIgCABIgGAHIgLAOIgNASIgQgYg");
	this.shape_73.setTransform(27,36.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FAD652").s().p("AgvA/QgVgZgWgXQgRgQgJgYQgJgWADgXIAAgGIABgBIAAgCIAAgBIABgEIABgDIADgHIADgHIACgDIADgEQAQgFAQABQAOACAPADQAWAFAUANQAVAOAVAUIBXBMQgNAEgNAFQgWAIgTANIgVAOQgZAUgQAcIgqgyg");
	this.shape_74.setTransform(10.1,17.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(28,29,36,0.322)").s().p("ABFgFIgKAHIgLAJIAVgQgAhEgDIAKgHIgIAIIgCgBg");
	this.shape_75.setTransform(44.9,-13.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCC99").s().p("AgfBzIgBAAIgBAAIgIgCQgUgFgSgNQgVgNgNgTQgLgTgDgXQgCgbAJgbQALgfAhgBQAJABAIAEQAIABAIAFQAOAHAJALQAKAMAIAPQACAHABAHQAAAEgBADQgKAPgRACIgTgEQgIgEgFgGIgNgPIgGgGIgGgEIgBAEQABANAFALQAEALAIAHQAGAGAGADQAVAKAXgLIAPgHQAPgIADgPIASANQgKAlAdAXIgPAKQgPAIgQAGIgBAAIgEABIgEABIgDABQgJACgKAAIgNgBgABaBLQgJgBgIgFQgHgEgEgGQgGgOAEgOIAKAAQAigDANgdIAGADQAKAVgJAVQgJAVgTAJIgDACIgDgBgAAfgEIACgRIgBgBIARgMQATgMAEgWIATAEQAMADACANQAEAQgHAOQgDANgIAFQgMAKgPABIgBAAQgUAAgMgPgAAAgtIgMgNQgTgRgYgHIANgKIASgNQAPgKAMAAQAOAAANACIAEACIAGAEQAJAGABAMIABAGIAAABQABAEAAAFIgCAEIgFANQgNAPgVAAg");
	this.shape_76.setTransform(49.9,-29.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#445A6F").s().p("AATBLIgZgIIAmghIARAFQAXAGAZgFIgxAqIgdgHgAhHALIAjgaQATAYAbAPIgaAaIgKAGQgcgRgRgcgAhgguIAogjQACAMADANQAEAOgBAMIghAZg");
	this.shape_77.setTransform(40.7,-19.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#66CCCC").s().p("AhGB9IgTgMIgKgHQgJgHgHgIQgLgNgGgPQgKgWgGgWIAmgpQAngpAogoIAlgnIAIATQAKAaARAVQALANANAMIAJAIIADACIAPAKQAOAJAPAEIAcAHIiqCaQgZgFgYgNg");
	this.shape_78.setTransform(28.7,-8.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FAD652").s().p("AgwCfIgPgiIgTgtQgXg0gKgSIgNgYIADgDIAEAKIADgBIB3iYQADALAFALQAKATANASQAOASARANQAdAWAlAJIiDCDQgWAWgVAXIgDAFIAGALIABAAIgBABIABADIgBACIAAACIgDABIgDgDg");
	this.shape_79.setTransform(11.9,11.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC99").s().p("AASB/QgJgEgGgGQgTgQAGgaIAJgHIAJAIQAKAHAMAFQAfAMAdgMIgGAOQgEAMgLAHQgOALgQAAQgKAAgLgFgAgvBtQgSgIgQgLQgOgJgKgNQgTgZACggIACgaQACgbANgYQAOgdAWgaIAMgFQATgFASAAQAOADALAEIAtAMQAjAJAVAcQANAQADAUQADARgJARQgRAGgTAAQgXAAgWgKIgCghQgBgNADgMIAZACIAAgMQgFgGgJgCQgLgCgKgFQgSgJgOgMIgFAAIgEAKIACAEQALANAHAOQAHAMAEAPQAJAmgTAgQgFAKgJAEIgCAFQgQgCgQgJQgEgCgCgDQgMgMABgQIADgiIAFgYIgHABQgRAWgCAaQgDAdAWAWQAQAOASAHQgCASgBATQAAAIACAIIgVgHgAAuBKQgLgEgIgGQgKgGgHgIIAGgKQAKgOAGgQQAoAUAsgOQADAcgVARQgFAEgFACQgQAIgSAAIgIgBg");
	this.shape_80.setTransform(59.6,34.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#445A6F").s().p("AgyBUIgDgoIAzAYIABAHQABAWAIAUgAgzAYIAAgCIAEgPIADgLIACgHIABgCIAOgmQANAHANAJQAEAEAGAGIgRBCgAgShFIAigvIAmAWIgiAwg");
	this.shape_81.setTransform(45.8,30.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#66CCCC").s().p("AAZB1IhCgkQgqgWgtgTIACgpQABgYAFgXIACgIQAGgZAQgSQASgVAcgOICzBJIgDAEIg2BkIgCAFIgBACIAAABQgOApADArIghgSg");
	this.shape_82.setTransform(32.6,24);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FAD652").s().p("Ah8A2IAAg0IACgSIANhvIADgCIgCANIDpBKQglAbgSAoIgHAUQgNApAFAsg");
	this.shape_83.setTransform(12.3,13.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(28,29,36,0.322)").s().p("AAKALIgKgKIAAAAIgOgPIAcAcIABAAIgFgDg");
	this.shape_84.setTransform(20.9,45.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC99").s().p("AgKB6QgMgBgLgDQgNgDgMgEIgEgCIgFgCIgegeIgHgJIgCgKIgDgCIgFgRQgGgYgEgXQgCgOADgRIAGghIAEgDIAEgEIAEgGIABgBIABAAIAfgNQAPgGAQgFQAbgJAYgDIArACQAWAHALAVQAIAPgCATQgBAJgIAGIgMAKQgHAFgJAAIgbACQgHgUgOgRIgJgMIAOgEIAGgHIAFgDIAFgDIgEgHIgHgBIgGABIgLADIgNAEIgEACIgEABIgQgGIgQgDIgEAAIgIAJQAcAKAWATQASASAHAbIACANQACATgCAVQgBAFgDAFQgMAHgPgGQgLgFgJgIQgIgHgEgLQgIgRgNgMIgHgHIgBADIAEAdQACANAJAMQAJAMAKAHQAGAFAIADQAMAGAMAAIASgDQABALAFALIACAGIAEAGIADAEIAJAGQgUAKgUAAIgEgBgAAxBiQgKgCgDgKQgDgJgFgHIAFgKIgCgEQAZAOAagJQAagLAPgVQADAKgBAMIAAAJQgBAfgeAGQgLAEgMAAQgLAAgLgDgAAjAkIgCgpIAagDQAXgDAPgRQAHgHAFgIQAFAIACAJQACAJAAAJQgBAPgMAMQgKAJgKAGQgKAGgKABIgJABQgLAAgKgGg");
	this.shape_85.setTransform(29.2,35.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#445A6F").s().p("AgNBhQgOgNgJgSIAggEIAQgGQAOAbAcARIg8ADIgHgGgAgtAtIgFgPIgDgTIAAgRIAMAAQASgCAQgGIALA0QgRAIgTAAIgNgBgAgchjIAagDIgHBFIgOAEIgJACIgUABg");
	this.shape_86.setTransform(15.6,38.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#66CCCC").s().p("AArB7QgggDgbgLQgRgHgOgJIgTgPQgMgLgIgPQgTgjgGgmQgDgagBgaIABgaIANgGIAJgEQAVgIAWgEQAjgGAiAGQAbACAbAHIABAAIgBAKIhqAJIgEACIANAHIB4AAQgJAZgIAbIgGAZIgBAEQgBAhAKAgIAFALQAHAUANAQIAJAMQgdAEgcAAIgQgCg");
	this.shape_87.setTransform(0.7,36.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FAD652").s().p("AhlBKIAFgfIAHgfQAEgOAFgPIALgeQAHgPAJgMQAJgMAKgHQATgOATgHIAGgBQAcgIAaALIAKAHIAJAIQADAFACAFQAKAZAEAaQAFAcgDAaQgEAvgLAtIgcgIQgpgKgpAEIgRADIgCABIgIACIg4ASIADgug");
	this.shape_88.setTransform(-0.1,12.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FAD652").s().p("AgLBcIgpg9QgigzgZgdQgJgKgHgGIgBABIgHAEQgJAAABgHIAAgBQABgFAHgHIAAgDQAAgWAagFQANgDALAFIABgBQAggOAOgCIABgCIAHADIABAAQAEABAAAFQAAABgMAGQA5AZAoAxQAwA4AkBBIgLAAIgBAAQgbgFghANIgYAKIgDACQgaAOgMAKQgHgQgLgUg");
	this.shape_89.setTransform(8.9,14.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#66CCCC").s().p("AhqhHIgDgGIAegTQARgKAQgGQATgHARAAQAjAAAEAEIADADQANAYALAaQAlBTARBaIgEgBQgdgMgtABIgYABQgaADgWAIQgLAEgIAFQgHhXgohog");
	this.shape_90.setTransform(21.6,36.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#445A6F").s().p("AA2AbIACgCQACgEAAgDQAAgRgDgRIgEgXQAPAFALAKIAIAHIAFArIABAVQgPgKgWgKgAhXgCIAAgPIALgGQARgLAHgCIABAAIAAAAIACAeIgCAQIgBABIgNAGIgIAJQgEACgNADQADgNAAgUgAAmASIgCgBIglgNIgNgBIAAAAIgMABIgEABIgBAAIACgaQAAgLgEgIIAKgCIAAAAIAGgBIAUgDIABAAQAQAAANACIAAAHQAEApAFARIgEgDg");
	this.shape_91.setTransform(24.6,53.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCC99").s().p("AhrBFQAAgkA0gVQAzgTAAggQAAgSgJAIQgJAIgEALQgDAJgRAJIgkAPIgDACQgLgFgSgDQgPgEAAgIQAAglA6gJQAdgEAKgEQALgFAEgJQADACAFgBQADAAACgIIA1AKQA4APARAXQAGAIACAIIAAAFQAAAZgpAXQACgGAAgFQAAgZgOAPIgXAkIgEAHIgHAEIABAEQgFAFgIAFQgHAFgWADQAQgWAOghIgBgNQgCgHgGgDIgXA2QgWAogoAAQgtAAAAgWg");
	this.shape_92.setTransform(21.7,64.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#445A6F").s().p("AhqAlIAWgrIAhAcQgOAUgDAWIgCAPgAhIgXQAJgMAMgJQAOgKATgGIAhAjIg0AfgAADhDIA/gLIApAtQgcgDgaACIgQACg");
	this.shape_93.setTransform(34.4,34.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FAD652").s().p("AhZAiQghgbgPgjQgDgGAAgHIgBgUQAGgTAOgKQALgIARgDQAdgFAdADQAjAEAfAMQAnANAkASQATAIARAKQgrAKgiAbIgCABIgNALIgDADIgHAIIgRAcIgBACQgGAMgDANIgGAcQgwgggwgng");
	this.shape_94.setTransform(7,14.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#66CCCC").s().p("AhEBTIhBg2IgNgJQgBgUAHgUQAJgdAVgWIAGgHIAIgHIADgDQAWgSAZgHQAVgHAWAAIBjBKIA0AyQglAFgjAJQgbAIgUAQQgPAKgKAPQgRAZgMAeQgWgWgVgRg");
	this.shape_95.setTransform(24.7,24.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFCC99").s().p("AgLCYIgRgGQgBgTAEgWQADgbgDgcQgDgUgHgTQgHgNgJgPIAJAuIgBAEIgBAMIABAZQAAAmgIAlIgMAFQgOAFgJgKQgFgFgCgGQgHgZgFgaQgDgTgFgTIgRhKQgMg0AoglIAAAAQAggZApgGQAigFAjAGQAjAoAXAuQADAIgDAKQgFAKgHAHQgEAEgEACIgQAFQgWgogYgmIgKgMIgGgEIAAAYIAwBXIALACQAPgCAMgDQAUgJAJgUQAZArgIAxQgFAggZAWQgHAGgKADIgNAFIgHgBQgUhDgWhAQgGgPgHgPIgDgDIAEARQAFAUACAVQACAXAGAWIATBDQgOANgSAEIgRABIgHAAg");
	this.shape_96.setTransform(42.9,47.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#374656").s().p("AgJAAIATgEIAAAAIgEAEIgEADIgCACIgJgFg");
	this.shape_97.setTransform(38.1,17.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FAD652").s().p("AAGBnQgagUgVgYQgagfgMgkQgCgHAAgHIAAgCIADgaIADgXIABgHQAEgZAOgXQAFgIAJAAQAMAGALAJQAOALAOALQAjAUAmAIQgXAbgJAkQgHAXACAaIABAFIACAVIAAADQADAUAHASQAGAQAOANQgogMgggWg");
	this.shape_98.setTransform(8,9.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#66CCCC").s().p("Ag4ByIgpgGIgBgBIABAAQAAgEgCgDIgPgQQgJgIgGgKQgNgWgDgcIAAgDQgCgRADgUQADgaAMgWQAGgLAIgJIAKgLQAfgCAhgGQATgBATgEQgIAQABATIABAZQAJAnATAdQALASAQANQAMALAQAIQAiATAnAAQgQAMgQAIQgMAFgNADQgfAHgfABIgTAAQggAAghgDg");
	this.shape_99.setTransform(29.2,13.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#445A6F").s().p("AAABmIgWgGIAdgXIAbgfQAsAGApgOQgTAhgdAZIgBgBIgCABQgRAMgSAAIgMAAIgGABQgIAAgHgDgAhtAQIA5gkQAdAmArAUIgnAgIgJAIIgVAFQgngXgVgsgAhqhUIAfgUQgBAOgCAPQgCAKAFAKIAMAVIg0AmQgJgsASgsg");
	this.shape_100.setTransform(42.1,9.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC99").s().p("AgdClQgZgEgVgNQghgXgTgeIgGgJIAAAAQgNgdAJghIAAgIQAFgkAcgYQAIgIANgCQApgFAWAhQARAZgDAcQgBAHgGAFQgHAHgJAAQgZABgMgUIgIgOIgGgMQgEAAgCACQgEADgCAFQgEAPAKALQAIAIAKAHQAKAHANADQANACANgCQAJgDAKgFIAIgHIAJgBQAAAIACAIQADAKAEAJQAFAJALACQATAEASgJQAMgGAHgMIAJgRQAFgNAAgPQgBgJgGgGIgCgBIgJADIgDAXQgDARgKAMQgMANgRgEQgLgFAAgMQgBgsAPgoQAGgRAJgQQAJgPARgBQAVAAAPAQQAKAKACAPQAFAsgSAqQgIATgKASQgPAegaAUQgNALgNAFIgCABIgTAHIgMADQgKADgMAAIgCAAIgPgBgAAMARQACgdgQgaQgHgLgLgKQAJgPAIgRQADgKAHgIQARgWAegCQAUACALANIAKALIgBALQguAQgRAtQgLAfgCAegAhdhIIAMglQAQgfAfgQQAQgIASgBQAWgCAQAOIgNAHQgpAWgQAsIgDAKg");
	this.shape_101.setTransform(50.3,-4.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FAD652").s().p("AggCNIAAAAIgFgIQgdgugNguIAAABIgCgJIgHg4QAAgJAGgPIADgJIAFgSIAAgBIAEgUQABgGADgCIABgFQAGgSAegPQAQgIAbgKQAEAEAAAEIAAAAQAAAIgIADIgDAEIgCACQAMBlBIBCQgmAKgdAYQgWASgPAbIgLASQANAVAAADQAAAEgEACIgPgTg");
	this.shape_102.setTransform(17.3,15.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#66CCCC").s().p("AA9BvIgFAAIgEgCQgegJgZgOIgEgBQgCgCgCgCQhDgmgthIIAKgTQAPgWATgQQAegaAqgIIABAAIACABIAJAJQACABADABIAEADQAQALASAIIAFABQACACACABQAOAFAOAEQASAEATACIgRA0IgBABIAAABIgDAMQgBABABACQgCADgBADQgDASABARQACAlAWAjIAAAAIAEAGQghgCgegIg");
	this.shape_103.setTransform(28.8,32.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#445A6F").s().p("AAtBnIg6gEQABgDgDgDIgIgMIAAAAQgHgLgFgMIArADQAHANALAJIAGAGIAEADIADAEIADADIADADIABABIgBAAgAgoAlIgCAAIgCgNQgCgSAEgQIgBgFQACgBABgDIACgFIAmgFIgBAOQgDAPAAARIAAADIAEANIAAAHgAgRhbIAxgLQgQAXgKAcIgBACIgEAAIghAEg");
	this.shape_104.setTransform(45,34.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC99").s().p("AAiCBQgLAAgKgGQgagPAFggIAIgHQAaAYAlADQAOAAAPgGQgEAVgRALQgGAEgGADQgGABgHAAIgMgBgAg1BqIgFgCIgEgDQgLgCgJgHQgIgIgGgIQgRgUgGgbIgBgEIgBgFIAAgCIgBgFIAAgJIADgOQADgMAEgLIABgDIACgJQADgSAMgPIABgBIAcgkIAngOIAGAAQAPAAAMAFIAtAOQAaAIATARQAeAagFAnQgBAIgDAJQgRAGgTgBQgTAAgOgFIgMgFIAAg6IAZACIAAgMQgGgGgIgBQgUgFgSgMIgPgLIgFAAIgEAKQAPAUALAYQALAYgGAaQgEAQgHARQgEALgJADIgCAFQgUgBgOgMIgIgJQgEgHgBgHQAAgUACgVIAEgYIgHABQgQAUgDAbQgCAVANATQAIALAMAJQAKAIAMAFIgBA1QgPgFgOgHgAAwBJQgKgCgJgGIgRgNIAWgoQAoAUAsgPQADARgIAOQgFAKgIAEQgOALgRACQgLAAgKgCg");
	this.shape_105.setTransform(59.4,34.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FAD652").s().p("AjMBzIAAAAIADAWIAAAAIBSAkIgsgQIgqgOIgBAAIgBgBQgKgFgDgLQgJgmgDgmQAGgPAKgLQAEgFAFAAIABACQABAMgJAJIAAABIAIACIACgIIAGgkQABgXACgNQACgLAEgIQAEgHAGgEIgDANIDqBJQgmAbgPApIgHAUQgNApAFAsgAB8AZQgygSgzgPIgEAFQgFAAgDgEIgBgFQAAgSBThKIA6gxQAmggAAgEQAAgGAIACQAHACAAAFIgBABIgLALIARATQAYAZAAARQAAAkg1A2IgzAyIgFgCg");
	this.shape_106.setTransform(19.6,7.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AABgBIABAAIgDADIACgDg");
	this.shape_107.setTransform(53.4,-13.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(28,29,36,0.322)").s().p("AAAAAIgHgSIAPAlQgHgJgBgKg");
	this.shape_108.setTransform(21.3,55.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#445A6F").s().p("AggBYIgEgJQgIgQgCgVIAfAIIARACQADAeAUAagAgvAUIACgQIAEgQQADgKAFgIIAKAEQASAFAPAAIgJA1IgBAAQgZAAgWgMgAABgoIgHgDIgTgFIAvg8IAZAIIgfA9IgPgBg");
	this.shape_109.setTransform(17.8,47.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCC99").s().p("AA1B7QgXgDgTgNQgJgGABgKQABgKgCgIIAIgIIAAgEQASAXAbAAQAcABAWgPQgBAKgFAMIgDAIQgKAYgYAAIgJgBgAg1BqQgLgGgIgHQgMgHgJgIIgHgIIgQgmIgEgMIADgJIgDgEIAAgEIABgLQAFgZAGgYQADgOAJgPIASgcIAFgBQACgBACgCIAHgDIABgBIABAAQAQgBASABIAeACQAdACAZAGIAnASQASAPACAXQABASgIAQQgEAIgKADIgPAFQgIACgJgEIgagIQACgVgGgVIgGgPIAQACIAIgEIAFgBIAHgBIgBgIIgHgEIgGgBIgMgCIgPgBIgDAAIgGgBIgLgLIgMgJIgEgBIgLAFQAXATALAbQAMAYgEAcIgCAMIgBAAQgGASgJATIgGAIQgQABgLgLQgJgIgFgLQgDgIgBgHIgBgFQgBgSgHgSIgDgJIgDACIgHAeQgCAKABAIIACAHQADAPAHAKQAEAHAGAFQAIALALAEIAUAFQgDALABAMIAAAGIABAHIABAFIAHAJIgHAAQgVAAgTgJgAAuA7QgPgDgKgMIAPgpIAZAHQAWAGAUgKQAKgEAHgDQABAHgBAJQgBAJgEAJQgHAPgQAGQgMAFgNACIgGAAQgHAAgIgCg");
	this.shape_110.setTransform(32.2,50.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#66CCCC").s().p("AAPCAIgKgGIgEgCQgNgIgNgJQgMgJgLgKQgLgLgIgMIgDgEIgMgUQgIgQgCgRQgCgPABgSIgCACIgEAEQgIAGgFAHIgBgBIgCAFIgCAGIgCgGQgHgRgEgSIgBgFIgEgXIgCgQIAAAAIAIAAIAAgDIgCgdIANgGIAIgEQAVgJAWgFQAigGAiAGIAXADIAAABQAIAGAbAIIAGAeIgGAAIABABIgWADIAbALIABABQAcAKARAHIAUAIQAQAIgSgDIgCgBIgQASIgCADIgOARIgQATIgCADQgOAggCAiIgBAMIABAJQAAAQAEAQIAFAOQgdgHgagKg");
	this.shape_111.setTransform(4.9,41.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FAD652").s().p("AhjBRQAAgRABgRIAFgiQACgPAEgRQAEgRAFgQQAFgRAIgMQAIgOAJgIQARgPAVgHIAGgCQAZgIAbALIALAIIAKAJIAGALQAMAcAHAcQAHAfAAAdQgBAcgCAbQgGAWgBAVIgBAAIgEAAIgVgGQgqgLgpAFIgSAEQgcAHgaALIgCAAIgCABIgDABIgCABQgBgZABgZg");
	this.shape_112.setTransform(1.6,13.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("rgba(28,29,36,0.322)").s().p("AhYBFQAAgGAAgDQAAgDAAAAQAAABAAAEQAAAEAAAHIAAgEgABZhCIgDgGIABAAIABACIABAEg");
	this.shape_113.setTransform(23.3,23);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#66CCCC").s().p("AgVBeQgRgCgPgHQgSgIgPgMQgPgLgPgTIgGgKQgEgHgFgFQAAgKALgUIABgBIABgCIADgGIAug5IADgCIACgBIAEgEIgRBDQAWgZANgfIAJgRIALAHIAUAJIAZAJQAYAGAagBQAHgBAHgCIABgBQAYgFAUgPQgEAngMAlQgQAzgrAhQgcAVgiAGQgIAAgIgDgAhYgIIAAADIAAgQIAAANg");
	this.shape_114.setTransform(23.3,31);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#445A6F").s().p("AAAAxIgegHIAHgyIA1gHIADAGIABAHIAAACIAAACIAAABQABATgCASIgCAGQgKAEgMAAIgJgBgAhVASIAJg0IAgAUIABAFIgGAtgAA2AiIABgiQAAgNgGgLQAWgIAPgRQAAAkgJAfIgWARIAAAAIgBgBg");
	this.shape_115.setTransform(28.9,17.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FAD652").s().p("AAKCqIgXgnIgXgnQgKgTgJgUIgUgnIgQgaIgGgLIgHgSIADgEQgCgeAQgbQAFgIAIgBQAHADABAJIABAEIA2hLIAJADIgGAMIgJANIAAABIAAAAIAAAAIAjBCQASAhAUAhQASAcAXAXIAIAJQggATgXAdIgNAPIgFAHIgFAHIgDAFIgFAJIAAABIgBABIgDAJIAAABIgBABIAAABIAAABIAAACIgBABIAAABIAAADIgBAFIgBACIgBgBg");
	this.shape_116.setTransform(7.3,13.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC99").s().p("AgGB+QgTgGgNgQQgKgqgUglQgHgNgJgMQgOgPgMgSQgJgMgBgQIADgHQAGgKAJgGQAGACAGAEQAQAIAOALQAKAHAHAKQAaAgAUAiQAAgOgDgMQgEgZgQgVQgbgjgpgRQAPgMATgDQARgCAPAKQAWAPAOAWQAXAgATAhIAFAFIAGAAQABgRgHgQQgJgTgLgRIAAAAIgDgEIgxg0IgFgEIATAAQAPACAPAJQAdAUARAfIAQAeQAWAlAEAsQABAQgGAOQgJAYgZAMQgSALgTAFQgNAEgNAAQgNAAgMgEg");
	this.shape_117.setTransform(25.8,1.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("rgba(28,29,36,0.322)").s().p("AABAAIAAAAIgBABIABgBg");
	this.shape_118.setTransform(33.5,24.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#66CCCC").s().p("Ag2BrQgVgMgRgSIgCgCIgWgaIgHgJIgCgCIgCgCIgBgCIgJgOIgMgPIAEgGIACgFIANgcIACgEIABgDIAEgHQAIgQAPgLQAXgQAXgKIATANIhABFIAEADQAJACAHgEQAPgKAMgNQAfgfAYgjIAKgNQAIAiATAeQAKAQARAOIABABIADADIABABIABABIABAAIAJAHIAOAHIAGADIAFACIACABQAaAIAOADQgIANgMAMIgDAFQgVAegdAWQgTAOgZAHIghAGIgCABQgbAAgZgOg");
	this.shape_119.setTransform(20.4,29.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#445A6F").s().p("AAPBDIAYgZIATAFIAJACIAIADIgWAdgAgdAkIgaghIAVgOIAIgKIAzAyIgCADIgZAbQgQgIgLgPgAhKg6IARgXIAJAXIANAXIgbAag");
	this.shape_120.setTransform(31,21.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FAD652").s().p("AhAA4IgCAAQgDAAgCgCIgBAAQgBgDgBgEIgRgpQgBgFABgCQACgKAHgJQAGgIgEgJQgDgGACgIIABgDIADADIARAaIAKgmIARhEQAJgEAPgNIgCAKIAHAPIA4BrIAZApIAPAXQgUAGgPANIgFAEIgBABQgSAQgOAUIgHAKQgJAPgGAQIg9hdg");
	this.shape_121.setTransform(4.5,13.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFCC99").s().p("AgtBwIgSgLIgjgpQgegjgCgUQgBgRAGgOQAGgPASgPIAogiIALgJQARgVAXgMQATACAHAVQABAEAAAFQgBALgLAIQgFAEgDAIIgNACQACAOAKAJQASAPArALQArALATALQATANgKANIgLANQgOgQgRgHIhLgdIgGgDIgFAOQAWAMAZAIQAgALAYAXIAAAAIAEAEQACAEABADIACABQgBARgOALQgJAHgOgDQgFgRgOgJQgNgHgOgFQgYgMgTgPIgDgDQgGAGgGADQAUAUAXANIAEABIABABIACAAIABAAIAJAEQAZALABATIACAKIgCAFIgJADQgHAGgMAAQgoAAghgWg");
	this.shape_122.setTransform(39.8,11.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FAD652").s().p("AgxCcQgEgQgGgkQgCgXgIgNIgEABQgHAAgCgGIgBAEQAAAOADAXIgCgJQgIgfAAgcQgDgMAAgFIgIgfQgLAAgBgNQAAgNANAAIACAAQADgMAHgLQANgVARgKQASgKAMAJIAEAFIAKgRQAvhUAAAmIgDAHIgGAPQAGAnAuBhIAmBPIgLAAQgcACgnASIgGACIgEACQgyAagUAaIgBAAIgBACIgDgIg");
	this.shape_123.setTransform(7.9,16.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFCC99").s().p("AgpBkQgGgGAAgFQAAgJAXgiQAXgkAAgKQABgjgNABIgEABIgBAAIABgGQgEgHgDgBQgHAKgLAiQgQAdgrAAQgGAAgJgHQgJgHAAgEQAAgPAkgZQAagRAHgRIABgBIABgDIAbgPQAtgWAsABQAsgBAOAbQAGAMAAAbQAAATgfAcIgBgBQAIgTAAgKQAAgcgJARQgIANgEAQQgEAMgKAOIgJAKIABgMIgBgbQgDgcgLgHQgDANAAAIQAAAwgCAUIgEACIACAFIABACIAAABQgNA1g0AAQgHAAgHgIg");
	this.shape_124.setTransform(30.9,67.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#445A6F").s().p("AhhAgIAKgMIALgMQARAUAKAKIAAADIgWAQIgagZgAg1AHIgGgFIABgFIgBgFQAMgKAMgJIAKgGQAPgJAOgGQATAdAMANQgQAEgSAFIgFADIgGACIgEACIgUAMIgBAAIgBABQgGgIgLgIgAAdgsIgHgJQARgDARAAIAIACIALANIAXAbIgGAAQgTAAgUAEQgMgTgMgPg");
	this.shape_125.setTransform(28.2,55.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#66CCCC").s().p("Ag9BkIghgzQgTgggIgSQgMgigMglQAPgRATgQQATgSAVgLQAjgSAnAAIAHACIAIACIADgBIAMAYQAYA5A4BPIAhAvQgxADgvAfIgHAFIgLAJIgCABQggAcgMASQgigigNgTg");
	this.shape_126.setTransform(18.5,42.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(28,29,36,0.322)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_127.setTransform(34.7,41.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FAD652").s().p("AgUCCQgMgdgIgOIgDABQgIAAgEgIIAAAGIAAACIgXg6QgahFAAgHQAAgTAWgEQAVgEAGAKQAHAHAGAMQAHgwADgXIAAgJIABgIQAAgJAIAEQAEADACAEIABAGIgBASQALAIALALQAtAoAfA5QAHAOARAmQghACgvAjIgCABQgcAWgLARIgEgJg");
	this.shape_128.setTransform(7.6,16.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCC99").s().p("AAHB+QAxgCAYgzQAOggAAgbQAAgOgLACQgKADAAAZQgFATgLATQgXAmgfgBQgfAAgFgZIgCgMQAxgEAYg8QAOgeACghQgCgLgKAAQgEAAgBAEIgCAFQAAAcgPAhQgUAxgoAAQgaAAgGgIQgCgCgBgLQAAgLAlgiQAkgmAAgfQAAgigNAaQgRAlgEAHQgJAMgeAeQgMAKgFALIgCAAQgQgDgBgKQABgCANgUQAOgYAGgRIAHgfQAEgSARgJQARgKAYAAQBAAAAiA+QAVAoAAAmIAAAUQgDAXgGATQgVA9g7AAQgHAAgIgGg");
	this.shape_129.setTransform(40.7,29.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#445A6F").s().p("AAFAuQgEgDACgLIAAAAIADgBQAMgCAEgHQAJAJAQADIAAAAQAAAEAFAFQgOAHgXAGgAgSASIgDgDIgGgLIgCgDIgBgBIAAAAIgJgUIAUgJQAKAHARACIAAAGQABAQADAHQgHAAgKAEQgJADgDAEIgBgCgAgtgmIgGgRQAJADAMAAIACAMIgFADIgJAGIgDgHg");
	this.shape_130.setTransform(34.3,38.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#66CCCC").s().p("AhFBDQgQgPgcgsQgJgMgIgSIAOgRIAHgIIABgBIAPgRIADgDIABgBIAAAAQAHgEAtgVIAagNIAFAPQAMAfAKANIgbAPIALABQAiAAAigYQAAASAIAKIAAAEIAAAGIAPA0IAFAKIABACIAAACQAPAiATARQgsAJg1AAQg8AAgrgpg");
	this.shape_131.setTransform(20,34.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAAADIAAgGIAAAHg");
	this.shape_132.setTransform(4.3,4.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FAD652").s().p("Ag4A4QgEAIgEAAIgCAAIABACIAEAMQgjgyAAgWQAAgeAIgWQAMgiAZAYIAHAOIAQgiQASglAKgRQAEgIAEgDQAGgFAAANIAAACIgHASIAyBcIAZApIAPAXQgUAGgPAMQgSAPgOASIgNATQgJAOgIAQIg4hXg");
	this.shape_133.setTransform(4.1,13.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#66CCCC").s().p("Ag2BrQgVgMgRgSQgZgagUgfIgMgPIAEgGIAWgvIACgDIABgCIALgOIADgDIAGgFQAXgQAXgKIATANIhABFIAEADQAJACAHgEQAPgKAMgNQAfgfAYgjIAKgNQAIAiATAeQAKAQARAOQAPAOAYAKIAEACQAaAIAOADQgIANgMAMIgDAFQgVAegdAWQgTAOgZAHIghAGIgCABQgbAAgZgOg");
	this.shape_134.setTransform(20.4,29.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#445A6F").s().p("AALBCIACgCIgCgCQAHgNANgcQAWAHAZAAIAAAAIgFAHQgNAUgNAZgAghAkIgagiIAVgOIAJgKIAhAgIAAAAIADAAIADACIABABIAHADIgKAOQgKARgEAKQgQgHgLgOgAhNg7IAPgUIALATIAAABIANAYIgbAZg");
	this.shape_135.setTransform(31.3,21.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFCC99").s().p("AgMBgIgLgDIgQgHQgQgNgWgZQgkgqAAgSQAAgJAPgNQAPgOARgGQARgGAxgoQABAAAEAFQAFAEAAAEIACANIACAHIAAABQgRADgJAQQgHALABAJQgBAPAGARQAIAeAOABQAAAAABgBQAAAAABAAQAAAAABgBQAAAAABgBQgEgHgDgMQgFgSAAgSQgBgVAOACIAFAAQASAAANAdQALAWAAAOQAAAbgIATQgOAegiABQgHAAgKgFgABVAaQAAgVgMgbQgNgggVgJQAIgFAIAAQAbgBAKBaQAAAFgHAIIAAgIgABlg4QgBgIgJgKQgIgLgJgFQgJgCgJAAQAJgEAMAAQATAAAKAZQAIASgBAMIgCATIgBAAIgJgig");
	this.shape_136.setTransform(37.6,12.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FAD652").s().p("AhNBNQgkhkAAgNQAAgFAEgIQADgIAAgCQAAg/ARgDQAHgCAIALQACgPADgJQAFgMAGgCIADALIABgBQAKgCANAAQAoAAAdA5QATAjAqBiIAPAhQgsABgxAgIgGAEQgdAVgLARIgLgVIgFgHQAAAAgBABQAAAAgBAAQgBAAAAABQgBAAAAAAQgFAAgEgKIAAAEQAAAOAGAVQgNghgQgtg");
	this.shape_137.setTransform(5.8,18);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#445A6F").s().p("AgDBfIgLgNQgPgSgJgVQAIADAKAAQAFAAAHgEQAGALAHAJQANAJAOAHIAOAGIAFACIgHADQgOAGgPAAIgSAAgAgwAAQgCgQAAgWIAAgEIAUABIAEAAQAEAUACAVIABAFIABAFIABAGIACAGIABAGIgLAAQgLACgGACQgEgOgCgSgAgoheIAAAAIAKAjIgJAAIgKACQACgSAHgTg");
	this.shape_138.setTransform(31.6,55.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFCC99").s().p("AgUCbQgMgMgHgPQgFgKgBgLIgGgtQgEgXgHgWIgXhDQgFgQAHgPIAEgCQAPgLAeAbQAeAcAJApQALAqAEAJQADgRgRg5QgQg7gfgVQgfgUgGALQABgTAHgQQAEgHAHgDQAHgDAIAAIAJAEQAbASANAfIAOAcQAYAtALAuQgCg2gYgwQgNgagPgXQgJgPgMgOQAVgHASANQAQALAJASQAOAaAIAcIARA6QAEAZACAcQABAKgBALIgEAeQgEAngfAZIgJAHQgVAKgVADQgKgGgIgIg");
	this.shape_139.setTransform(36.8,46.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#66CCCC").s().p("ABICmQg3glhAhrQgpg/gMghIgOggIASgVQAKgNARgLIAFgDIAAgBQAVgMAhgJQAggJACABIAgBFQAgA/ARALIAAACIABACQgJAMgGAeQgHAjAAAUIAAACIAAABIAAABIABAQIABARIABAHIAAACIADAOIAAACIAAABIABACIAAABIAAACIABABIABAEIAAACIABACIAAACQAIAeANAQQgXgHgUgMg");
	this.shape_140.setTransform(15.6,46.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCC99").s().p("AAhBdQgTgDAQhCIADgcQAAgMgBgIIAFgTQAAgCgEgGQgJAQgYA5QgYAzgXgDQgSgCAGgRQAPg4ADgUQAFgLACgOIABgCIAAgCIABgEIgBgBIAAgGIAEABIAAAAIABgBIAaAEQAjAGAfgJIABAAIgBACIAEBUQgMBHgVAAIgCAAgABkA8QgGgBgIgOQgDgHgDgDIACgMQAEgygEgWIgIgQIgCgBIgCAAIAPgGIALgDIAMAdQAQArgFAiQgEAdgNAAIgCAAgAhognQgJgCgGgEIAggvIAGAEIABABIADADIABAAIAKAGIAXAJQgEACgDAFIgDADQgZAUgVAAIgFAAg");
	this.shape_141.setTransform(23.1,81.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#445A6F").s().p("AgLAsIgXgEIACgVIAEgVIABgQIABgCIABgOQAfAFAagBIAAABIgCANIgBAIIgBAHIgBAKIgDAeIAAABIAAAGIgJAAQgNAAgNgCgAArAbIACgRIAAgMIAAgDQACgRgBgJIAPgCQAPgBAHgDQACAVAAAWIgBANIgBAIIgIAEIgLAFQgMAFgMACQACgGABgKgAgyAjIgPgFIgMgGIgIgGIABgCIACgUQABgTAAgWQAMAEAVAEIAMACIgEASIgBAGIAAABIgCAJQgDALgBAPIgCALIgBgBg");
	this.shape_142.setTransform(24.2,69.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAD652").s().p("AgxA9Qg6iRADgXIAAAAIAAgBIADgKIACgGIAFgFQAIgFAMADQAOAQAaAXQAlAkAMAOQAhAnASAZIAAgBIAIAPIAAABQASAbANAdIgDgBIACADIgKAHQgFADgMAFIgSAHIgWAGIgQAEIgDABIgCAAIgBAAIAAAAIgZAEIgLABIgchIg");
	this.shape_143.setTransform(12.1,14.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#445A6F").s().p("AAjBOQgVgGgQgIIAhgYIALAEIAAAAQAXAIAWABIgtAeQgDgDgEgCgAgXA1IgJgHIgBgBQgUgQgNgVIgCgEIAogcQAKAYASASIAMALIgiAYIgBAAgAhWg8IAegWIAEAFIgBAAQAKARAHAQIgpAgQgHgWgCgag");
	this.shape_144.setTransform(42.1,-26.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#66CCCC").s().p("Ag5CNIgHgDQgPgGgMgIIgTgPIgFgGIgEgEIgbg8IAAgBIAAgBIAAgCIAAgCIAAgCIgBgZQBahYBMg/QADAcALAYIABABIAAAAQAOAeAaAWQAKAIAMAHIABABQAWANAeAJQhoBGhhBOQgCgEgDgBg");
	this.shape_145.setTransform(29.5,-16.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FAD652").s().p("AhZCJQgKgFgGgGQgFgFgGgLIgGgKIACgLQAEgLAJgBIgBADIABAEIAIgHQgbgsgCgLIAAAAIAAgCIgCABIgBAAQgHgBgBgGQAAgJAKgCIAAAAQAJgCAAALIAAADIADAFIAAAAQBUhcBJhLQAEA3AgAjQAXAbApAQQhZBEhTBLIACABQAAAHgIAAIAAABIAAADQgNAHgKAAg");
	this.shape_146.setTransform(8.6,1.3);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFCC99").s().p("AhACdIAAAAIgOgGIgCgBQghgSgNgmQgIgYgQgbIAAAAIgGgJIAAgBIgMgRQgLgPgOgOQgTgWAXgWIAAAAQARgPAdATIALAIIAOAMIAFANQAOAUAJAPIACgCQADgDgBgEQgBgSgLgZQBhh6AbgEQAZgCALANQAGAOgZAfQgdAlgVALIgDADQAOAOAaAbQAjAiATAXIAAgBQABgEgBgEIgGgKQAQgGAYgNQAegOAZACQAUACAEAEQASAjgqAXQhEAmg+AuQghAYgiAAQgUAAgUgHgAAagjQBjhmAhAWQACABADABIAHAMQAEAQghAbIABAAQglAegtAZg");
	this.shape_147.setTransform(53.6,-39.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIAAAAIAAABIgBgBg");
	this.shape_148.setTransform(-4.4,3.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#445A6F").s().p("AgjA/IAmgRIABgBQAHgDAFgBIADAAQAUAPAeAKQgeATggANQgZgQgRgTgAhEgTIAJgEIAlgNQAEAkAUAYIgFADIgtATQgUgeAAgjgAg4hRIAogQIgDAHIgBADQgDAQAAAPIgDAAIgoAOQADgTAHgUg");
	this.shape_149.setTransform(44.5,10.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#66CCCC").s().p("AhnBlIgBgEQgOgggEgdQgJg7AngzQBKgDBOgaQgIAZgBAXIAAABIAAABIAAADIAXBOIAEAEIADAFIAkAiIABABIAHAFQhNAbhYAAQgeAAghgDg");
	this.shape_150.setTransform(30.4,13.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FAD652").s().p("AgPBdIgGABIgHgBIgCACIgVgHQhCgZAGg/IAKgDIAbAIIgIgoQgKguAAgNQgBgHABgGIACgFQADgGAHAAQABAGgCAMQBbAtBmABQggAyAGA4QADAcALAdIAFAKQg7gIg9gSg");
	this.shape_151.setTransform(7.3,11.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFCC99").s().p("Ag7CRIABABQhkgdAPhpQAohPgSg6IAAAAQgCgIAHgFQAagTAUAXIAAAAQAZAfgMAmIgBACIgDADQgCADAAAEQABAFADACQADADAFgBQBVgLA+gyQAggOAMATIAAAAQAKARgGANIgOgLQgDgDgEAAQglACggAbIgBABQgdAXgzAPQgDABgDAEIgBAEQAHAAAIABIAPAEQArgPAbgWIAAAAQAagWAcgDIARAQQARAognASIgBgCQgrgrg0AkIAAAAQguAqgiAMQgEACgCADIAjAEQAdgQAigfQAkgYAeAaIAAADIAAABQgCAxgmAgIAAABQgyAog1ADIgNgDg");
	this.shape_152.setTransform(58.8,0.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("rgba(28,29,36,0.322)").s().p("AAAABIABgIIABgBIABAAIgFARIACgIg");
	this.shape_153.setTransform(30.7,31.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFCC99").s().p("AArBrIABAAQAWgSACgbQABgDgCgCQgOAZgSAGIgDADQgKAGgNADIAAAAIgBABIgBAAQgPAGgNgJQgKgHgEgKQAVgJAPgYQACgEAAgEIgCgEQgOASgYAGQgUALgZgHQgRgEgLgNIAAAAQgQgRACgYQABgWAQgPIAQAJQgCAFAAARQAEAAACgBQAIgFAFgFIAGgGIABgCQATgWgBgiQAAgEgDgCIgDgDQgBANgWAhIgWgMQgCgwAhgIQAJgCAKABIACAAQBRgGAzAsIAAAAIABABQAYAWAQAhIgBABQgDADABAEIABALIAAABQABAUgEATIAAAAQgFAUgQAQIAAABQgPAQgVAHQgLADgLAAIACgCg");
	this.shape_154.setTransform(27.9,45.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#445A6F").s().p("AAyAMIAMgXIADgIQAUAQAQAVIACABQgGAVgKAWQgPgdgWgVgAgegeIABgBIACgGIABgDIAGgSIAEABIA1ATIADACIACABIAEADIACABIgFAMIgIATQgdgVgkgJgAhmgjIAHgLIAEgMQAZgFAZACQgBAIgGAPIAAAFQgZgDgdABg");
	this.shape_155.setTransform(33.1,36.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#66CCCC").s().p("AAPBGIgQgCIgEgBIAEABQgugBgIABQAAgFAcgJQgBgEgEgCIghgSIgCgBQgngWgmgQIADgQQAJglAUgcQAYghAqgUQA3AWAdAVQAwAhAeAoQAdAlAABPQAAAcgFAbQgxg8hMgOg");
	this.shape_156.setTransform(29.9,21.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FAD652").s().p("AgLA8IgXgIQgxgPgSgHIgBAAIABAAQg0gdgIgWQgFgUAigSIABgBIAKgFIACgBIAIgEIBagXIACAAIABAAIABABIABAAIABAAIABAAQAgAHAhAJIA4ASIA4ATQgmAVgWAfQgMARgIATQgFAMgDANIgCAJIAAAAIgCALQgqgTgogPg");
	this.shape_157.setTransform(6.4,10.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FAD652").s().p("AABB0QgXgVgWgYQgQgRgMgRQgNgSgHgTIgIgWIgBgCIgCgHIgBgGIAAgBIgCgGIgBgGIgBgOQgBgPACgPQAFgJAHgHQAJgKANgIIAGgDQAGACAHAGIAaAUIApAiIAUAOIARANIAfASIAdARIgmAaQgRAPgNAUIgEAHQgKASgCAVIgDAfQgMgGgKgJg");
	this.shape_158.setTransform(10.9,13.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#66CCCC").s().p("AAvBhIg5gGQgrgBgmgUIgzgaQAFgSADgTQACgIADgMQAEgKAFgJIADgHQASgeAdgSIAUgMQAqAVArALQAgAHAgACIAVAAIgGASQgJAWgBAWQgBAPACANQACAKADAIQAKAdAXAQIgyAEIgHABQgTAAgUgDg");
	this.shape_159.setTransform(29.3,23.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#445A6F").s().p("AghA3IAbgHIAOgHQAXAPAcAFIg7ASgAguAnIgBgBIgGgOIgCgEIgCgIIgBgMIABgKIAAAAIABgEIACgIIACgGIAigDQgIAZAKASIAGAJIAEAGIACACQgWAEgUAHIAAgBgAgnhFIAlgIIAGgBIgPAdIgmAFg");
	this.shape_160.setTransform(47.7,24.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFCC99").s().p("AgOCJIgVABQgJAAgIgBQgLgDgLgGQgIgFgGgIIgEgIQgDgHgBgGQgBgIABgHIAGgFQADgOAHgLQALgWAVgOIACgDIAHgUIADgGIgCABIACgMIgDgRIgCgRQAAgHACgGQAFgNANAAIAJABIgBACQgFAOAAAOIAAABIADAQIACAEIACATIAEAQIAAAAIAAABIABAPQAEAogVATIgBADQAUACAKgRQAFgLACgNQAEgUgFgTIgLg1QgBgOAFgLIACgDIAEgFIAAAAQAMABAGAHQAgAiAGAsIAEAaQAAAcgKAaQgEANgJANQgQAageAGIgEABIgMgCgABSgfIgIgRQgJgVgMgRQgIgKgNgHIAMgIIAEgBQAcAGAIAdIAIAaQAKAdgJAcIgCAGQgDgWgGgVgAA5iEIgHgBQAHgGAJABQAKABAHALQAKANAFAOQgOgagbgHg");
	this.shape_161.setTransform(57.4,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]}).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_143},{t:this.shape_66},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).to({state:[]},1).to({state:[{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158}]},1).wait(1));

	// Layer 1
	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("ABJHXQgmgFAPg4IABgGQgZAxgkgFQgegEAFggIAPhGIAHgXQgdAWgWgDQgjgEADgTQAJgUALgTQAHgMAHgIIAKgKIAAgBIACAAIABACIAHgIIABgfIAAAAIAAgCQAFhIgGgyQgGhOgOhaQgGghgUg1IgihYQgEgNgchGQgYhEADgYQACgVAKgJQAJgJARACQAFAAADACIAAAAQAUAGA8A8QAtAqAXAlQAXASAkBSQArBbAUBGQAKArAHAoQAIAxAEAvQAEA3gCA4QgDAPgEAJIgEAGIgDAEIgFAEIAAABIAAABIgBABIgFABIAEAJIANAnQAPA0gDAaQgFAvgfgEQgOgCgIgOQgLAwgdAAIgFAAg");
	this.shape_162.setTransform(17.7,47.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AhMFDIAAgPIACAFIAEAEIAAgBIgBgBIgCgDIgCgIIgBABIAAjsIAagYIAHgGIAGgGIAKgMQgdgpgbgsIgRgeIgQgfIgOgfQgHgTgEgTQgHgbAGgdQAGgcAQgZQAIgLALgHIAGgDIAIgBIAIAAQAJADAIAFQAXAMAUARQAYAWASAeIAoBEQALASAMAXIAQAhQAIAPAHARIANAhQAIAaAGAZQADARgBARQgBAQgDAQQgHAcgRAVIgWAdIgYAdIgXAbIgaAaQgUAUgTARQgVATgZALQgCALgDAAQgGAAgDgDg");
	this.shape_163.setTransform(14.2,33.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("ADbFLQgNgFgMgHQgOgHgNgJIgPgLIgLACQgggDgZgOQgLAMgQAFIgOAEIgIAAQgTgBgOgPQgHgLgBgPQgCgYATgQQgVgqgagpIgUgdIAAgBQgbgqgdgoQgdgngfgnQgjgsgjgoQgTgWgRgWQgLgQgHgRQgGgRAAgRQgBgTACgTQACgSALgMQAGgGAGAAQAagGAcACQAtAFAjAeIAfAaQBUBGBHBMQAfAgAeAkIAWAaIARAUIAQATQASAZAOAZIAFAJIALAYIAOAgIACAEIArAWQAMAGAIAMQAKATgFATIgDAGIgBAEIgJAGQAOAMAHARQAEAKgBAMQgBAPgKAKQgDAFgFACQgJAEgLgCQgGALgLAGQgHAEgIABIgJABIgEAAg");
	this.shape_164.setTransform(26.4,37.3);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("Aj1FdIgPgjIgUgsQgWg0gKgSIgNgaIgEgHIABgBQAyhFA4hDQBLhYBVhSIAwgtIAvgsIAJgdQAJgeAdgKQAJgDAKAAQAKgKAKgJQAOgKAOgGQAygeArAhQANALABARIAQADQAMADALAJQAHAHAFAKQADAEAAAGIgBAaQALADAEAJQAIASAAASQgCAsgnAVQgJAEgJADIgJgCQgQASgWAJIgBAIIgVASIgKAJIgLAJIggAcQg+A1g9A5Ih1BwIguAtIhFBGIgbAZIgDABIgDAAIAAABIABADIgBABIgBACIgDABIgCgCg");
	this.shape_165.setTransform(31.6,-7.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AEED2IgSgFIgZgMQgZAFgVgHQgWgHgSgQIgGACQgzgWgugfQglgagpgVIhagtIgFgDQg1gYg1gXIgIgEIgCgBIgZgIIgGgCIgsgQIgigMIAAhPIACgUIAMhvIABgFQAtAGAqAPQA4AUA7ARQA1ARA1AUQBSAeBRAnIA9AfQAogFAlAPIARAGQAdAHAaANQAaAOALAXQAFANACANQAFAbgPAaQAEAMAAANQgBARgKAPQgGAIgJAGQACAWgNASIgOARQgHAHgIAGQgLAHgNAAQgHAAgHgCg");
	this.shape_166.setTransform(36.9,25.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AhqEHQgZgCgWgGQgOgEgNgGQgNgHgNgJQgGgFgHgEIgHgHIgIgIQgUgYgKgbQgHgUgFgUQgFgWgBgVQgBgeABgeQAAgcAEggQAFgiAHgfQALgzAdgsQASgbAegMQAXgKAZgEQAZgBAWAKQAcAMAKAeIAIAcQAFAaABAaQABAZgEAZIgHAvIgLAxIBrgVIARgGQAZgJAagFIAtgGQANACAOAFQAIABAGAFQANAIAKALQAFAEAEAHIAGAQIAEARQAXAQADAfQACAMgFAMIgDAHIAEADQANAggIAiQgCAJgGAJIgHAHQgOAKgOADIgcADIgNABQgLAPgTACIgaAFQgaACgZgIIgBABIgHADQhKABhFAGQgTADgUAAIgFAAgABFDbIAEACIgFgCg");
	this.shape_167.setTransform(15.5,24.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("Ag2FkQgLgKAAgIQAAgbAFgLQAFgMAMgKIgBAAQgSAAgNgLQgMgKAAgOQAAgWAEgIQAIgQAegLQAFgCAUgEIAEgyQAAgqgKgjQgJgfgBgLIgUg8QgNgpgLgaQgTghgkgzQglg2gmgxQAAgGABgDQABgFAIgHIgBgDQAAgWAagFQANgDALAEIABAAQAggPAOgBIABgCIAHACIABABQBKAaBABhQAfAvAZAtIABABQAGAFAAAGIAAAAQAbAyAVAwQAfBHAKBUQAFAIAAAKQAAADgCAEIAAAAIACAkQADAcAAANQAIAMAAAMQAAASgUAdQgbAlgpADQggAegoAAIgFAAQgVARgZAAQgjAAgTgQgABYCWIgNgBIAAAAIABAAIAMABg");
	this.shape_168.setTransform(15.5,38.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("ACvFAQgPgEgOgGIgKAEIgUAEIgLgBQgHgCgFgCQgKgGgIgJQgHgIgCgLIgLguQgHglgPgiQgXgygbguIgIgDIgEgKQgZgZgbgWIgrgiIhCgtQgMgJgQgNIgegUQgYgRgVgWQgNgOgLgRQgXgfAEgoIAKgWQALgRARgKQAKgMACAHIACgBIAYgGIARgEIAkACQAmAFAkAPQBQAhBIAoQAEABACADIACAGQBIAvA7A+QAVAWAWAZIAkAoIABACQAnArAaAxIANAbQAKAWAGAXQAGAXAAAXQAAAegMAZQgJATgQAMQgYASgggCQgLAMgRAJQgNAGgPAAIgOgBg");
	this.shape_169.setTransform(24.4,33.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AhcD7QgmgFgmgQQgagKgYgMQgagNgXgQQgVgOgPgTQgOgRgKgTQgJgRgDgSQgGgeAFghQACgMAEgLQAIgXANgWQALgTAYgCIADgBIABAAIAHACIACAHQA3AzBKAJIABAAIARABIAEAAIAAAAQAbAAAbgIQAhgJAbgQIAHgHIAEgFQAHgLAGgNQAPghAcgUIABgPQACgZANgVQATggAkgOQAQgHARgFQAZgGAZALQASAHAEASQAQACAPANQALAIAHAMQAGALgCAKIANAFQAOAGAJAMQANAVgCAaQgCAcgGAcQgIAogYAnQgUAgghAUQgBARgLAPQgUAcgbAVQgZATgdAQQgTAKgTAIQgTAHgUAFQgVAGgVAEQgbACgeAAQgaAAgbgBgABFCYIAAAAIAJgIIgJAIgAC/BgIABAAIAMgDIgNADgAAvAVIAAgBIgBAAIABABg");
	this.shape_170.setTransform(32.2,2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("ACtDrIgXACQgNgCgOgEIgGgCIgJgEIhhgFQgpgCglgKIgFgCIgFgBQgggJgcgOQgCgCgCgCQgCAAgDgCQhGgngvhMQgDAAgDgCQgDgCgBgDQgBgEACgDIgFgIQgjgugGgYIgBgTIAAAAIgCgJIgHg6QAAgJAGgPIADgJIAFgSIAAgBIAEgUQABgGADgCIABgFQAGgSAegPQAQgIAdgKQAEAEAAAEIACABQADADABAEQAKBvBXBFIALAIIADAEIAFACQAPAJAQAHIAEADIAEABIAYAIQAXAFAWABIBCgOQAEgBAEACIACACQAXgUAbgHIALgCQAGABAEADIAFAAIAMAAQAcAFAaAKQAbAKAaANQANAFAJAIQAMAMAHAQQAEAJABAKQAFAcgPAZQAEAQgCASQgDASgNANIgIAGIgBALQgCAKgFAJQgIAOgKANQgMAQgVAEQghgBgegSg");
	this.shape_171.setTransform(41.3,24.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AEVE/IgRgFIgagLQgYAEgVgHQgXgGgRgQIgHABQgygWgugfQgogZgngVIhZguIgGgCQg0gZg2gXIgIgDIgCgBIgZgKIgGgDIgsgQIgqgOIgBAAIgBgBQgKgFgCgLQgKgkgDgmQAGgPAKgLQAEgFAFAAIABACQABAMgJAJIAAABIAIACIACgIIAGgkQACgZACgNQABgLAEgIIAAAAIgCgJIAFgFQAvAGAsAQQA1ASA2AQQAAgSBThKIA6gxQAkggAAgEQAAgGAIACQAHACAAAFIAAABQAOAJAcAcQAIAiAAAIQAAAng1A5QgiAlgOAKQBEAbBEAhIA9AdQAogFAlAPIASAFQAdAHAaANQAZAOALAaQAFAMADAOQAFAbgPAZQAEANgBANQgBAQgKAQQgFAHgJAHQACAWgOASIgNARQgHAHgJAGQgLAHgMAAQgHAAgIgDgAC3lAIABgBIgEAGIADgFg");
	this.shape_172.setTransform(35.2,18);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("ADCFMIgagIIgIgCIgFgCIgDACQgOAHgRgFIgFgBIgUgEQgagHgUgRIgBABIgIAAQhCgchFgVQgOgDgNgEIgOgGQgXgMgSgNIgKgJIgJgIIgCgDQgKgLgIgNIgJgNIgEgKQgDgFgBgGQgIgYAAgXIgBAAIgCAEIgDAHIgBAFIgCADQgDAKgCAJIgFgLQgKgWgGgWIgDgNQgFgSgCgRIgBgJIAJAAIgDgnQgCghABgjQABgmAEgiQAHg3AZgxQAQgdAcgOQAXgKAYgFQAZgBAXAKQAdAOANAhQAGAQAEAPQAIAcADAdQADAbgBAcIgBAIIABALIgCAGIgBAbIgBAFIgBABQAAAhAEAVQABAHAEAMIACABIABAAIANASQAdAKAaABIANACIAqAIIAaAFIASABQAZABAbAFIAUAFIAIACIAPAEQAMAHALAKQAHADAEAIQAJAMAFAPQADAGAAAIIAAASIgDAQQAFAIADAJQAFARgGAUQgDAMgJAJIgFAGIACAEQABAigVAdIgEAFIgKAIIgKAEQgKACgKAAIgLAAg");
	this.shape_173.setTransform(17.8,31.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AgPEOQgXgKgTgSQgtgsgig2Qghg0gYg3QgMgdgJgcIAGgJIgHgSIADgFQgBgeAPgbQAFgHAIgCQAHAEABAJIABAEIA2hMIAJADIgFAMIAGADIA2BgIAdAzQAIAMAMANIAGAGIADACIADgMQADgSAAgUIABgLIABgHQgJgigVgfIgVgcQgOgRgHgUQgGgQAJgQQAJgSARgIQAFgOAOgGQAPgHANgFQAHgCAHgBQAJgKAPAAIAfgCQAgAFAXAYQAzA4ATBHIAHAdQAEAQgCAPIgCAYQgCA8gKA+QgEAbgGAcQgGAWgJATQgJASgLAQQgLAQgOANQgOAMgQAKQghAWghAAQgaAAgYgNgACLAYIgBgGIAAAAIABAGgABzjJIAAAAIgDgEIADAEg");
	this.shape_174.setTransform(18.4,14.4);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhSDlQgKgEgIgGQgwgagigsQgbghgXgkQgagmgRgqQgEgIADgIQgCgCgBgEIgQgqQgCgEABgFQACgKAHgJQAGgIgDgIQgDgGABgIIACgDIADADIAQAZIALglIAQhEQAKgFAOgMIACgBIADgDIADAFQATAeAQAgQAOAaAOAWQAMAVAPAUQAXAfAUAjQAUgXAPgYIAgg1IARggQAMgVATgLQAKgGAHgHQAagaAfgYQAQgLARAFQARAGAKAOQAVAdgVAeQgGAJgJADIAEACQAMAHAMAIQAWAPAaADQAeAEASAYQAGAIAFAKQACAGgBAGQgEASgOAOIAAAGQACAXgTAPQgQAMgVgBIgBALQgGAJgJAEQgbAMgdgFIgFAKQgNAVgRAXQgUAZgVAYQgdAhgpAUQgXAMgcABQgUAAgSgIg");
	this.shape_175.setTransform(25,20.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AAkF8QgDgIAAgPQAAgFAWghQAXgiAAglQgEAPgLATQgZAnguAAQgXAAgLgVQgFgMAAgLQAAgYAbgTIABgBQgNgJgXgXQgjgkgRgZQgpg9gTgoQgRgjgQhJQgIgkgDgZIgDgJQgIgfAAgcQgCgMAAgFIgIghQgMAAgBgNQAAgNANAAIACAAQADgMAHgLQANgVARgKQASgKAMAJIAEAEIAKgQQAxhUAAAmIgCAHIADAFIAaA0QADAOAHAWIAOAlQAJAcAXAqIAkBGQAkBGAsBFQASAaAdAiIADACQAEAEABADIAUAVIAkAlQAPAKAJARQAJASAAAeQAAALgVAjQgZArgaAAIgDgBQgJAKgKADQgDAKgEAKQgXAwg1AAQgZAAgIgUgAC/EcIACgCIgBgBIgBADg");
	this.shape_176.setTransform(21.1,39.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("Ai5B+QgwhKgBg0IgXg6QgahGAAgIQAAgTAWgEQAVgEAGALQAHAHAGALQAHgvACgXIAAgBIABgIIABgIQAAgKAIAFQAEADACAEQAKADAQAMQAtAhAsBNQAQAfAYAyIAXAyIAVgOIAagXIAEgBQANgaADgLQAGgfAJgMQAaghBBAAQBKAAAiBPQAVAtAAAvQAAAKgCAOQgEAagIAVQgbBChEAAQgJAAgJgFQgJAQgzALQg3AMg6AAQhmAAhDhmg");
	this.shape_177.setTransform(25.5,25.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Ag7DfQgKgFgJgFQgvgbgjgsQgaghgYgjQgWghgPgjQgkgxAAgVQAAggAIgWQAMgjAaAYIAGAPIAQgiQASgmAKgQIgHgOIADgKIABgBIADgCIADAFIAHAKQAGgFAAANIAAACIAXAqQANAaAOAWQANAUAPAVQAWAfAVAiQATgWAPgZIAdgzQACgMAIgMQANgRAZgKQAbgLAcgYQAVgUAMAAQAbAAAGAdIAJgIQAPgLAUAAQAfAAAQAhQALAWAAATQgGA0gMAEIAAAGQgDAMgGANQgMAYgRAAIgCAAIgCAIQgIAPgKAMIACADQgIAGgKADQgDALgOAaQgKATgJAKIgOATQgTAZgVAYQgeAigpATQgZANgaAAQgUAAgRgHgAEDhtIAAACIABgCg");
	this.shape_178.setTransform(22.7,20.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("ABEFNQg9AAhAhPQgUgXgxhPQgWgigag2QgUgrgJgbQgNghgQgtQgkhmAAgNQAAgFAEgIQADgIAAgCQAAg/ARgEQAHgBAIALQACgPADgJQgIgBgDAAQgDgCAAgEQAAgZA2AAQArAAAiAsQATAXAJAbQAQArAaA8QANAdAvBbIAWAoQAEgKAJgIQgBgIABgJQACgOAHgOQAPgbAfAJQAFgGAFgDQANgHAOABQASADARAMQAIAEAFAIQASAWAOAZQANAUAGAXIAHAYIAIA2IADAXQADAOgBAOIgBAaQgBARgHASQgNAegZAVQgKAIgLAFQgGAHgOALQgcAVgVAAgAA8B3IABAAIAAgCIgBACg");
	this.shape_179.setTransform(21.3,34.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("ABPHOQglgFAPg4IABgFQgaAxgkgFQgdgFAEgfIAQhGIAGgXQgcAWgXgDQgigFACgTQAKgUALgSIANgVIAIgHIABgXIAAAAIAAgCQAEhIgFgyQgGhOgPhaQgFghgVg1IgihYQgEgNgbhGQgZhEAEgYQACgVAJgJQAKgJARACQAFAAADACIgBAAQAVAGA8A8QAsAqAXAlQAXASAlBSQAqBbAUBGQALArAHAoQAIAxADAvQAEA3gCA4QgDAPgDAJIgDAFIABAFIANAmQAQA0gEAbQgEAugggEQgOgCgIgNQgLAwgdAAIgFgBg");
	this.shape_180.setTransform(18.3,46.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AkoFyQgEAAgDgEIgCgEQgNAHgKAAIgcgLQgKgFgGgGQgFgGgGgKIgGgLIACgKQAEgLAJgBIgBADIABADIAIgGQgbgsgCgLIgDgCQgHAAgBgHQAAgIAKgCIAAAAQBchmBShQIAAgBQBmhjBVhEIABAAIAigbQgKgQgPgQQghgkAlgkIAAAAQAfgjA8A1QBmiAAigCQAogDAPAXQARAXglAuIgBACQBIg+AjATQAHAAAHAIQAEAGAGANIAAAAQAMAbguAnIAAAAIghAYQAdgMAZACQAjAEAFANQAcA2g9AhQhDAlg8AtQgYASgZAGIAAACQgBACgDACQj6CnjgDGQgDADgDAAIgBAAgAB0gaIAAAAIAAgBg");
	this.shape_181.setTransform(35.3,-20.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AhrDRQhfgChsgfQgEgBgCgEQgCgDACgEIABgEIgVgHQhBgZAGhBIAKgDIAbAKIgJgqQgJgsAAgNQgBgHABgGIABgFIABgDQACgEAEgBQAEgBAEACQBiAwBugDIABAAIABAAQBRgDBWgeIAEgCQAcgLAdgMIADgBQATg1gLgnIgBAAQgGgVATgOQAogfAhAmIAAAAQAeAkgMAsQBHgNA0gqIACgBQA1gYASAlIAAAAQASAggTAZQAWA5g5AbIgBABIgEABQgFAzgpAkIgBAAQg3Asg8ADQgpAdguATIAAAAIAAAAQg0AVg3AJQgSADgTACIghABIgcgBgAEgBAIAAgBIAAAAgACeivIABAAIgBAAg");
	this.shape_182.setTransform(35.7,4.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AB1EkQgYAHgUgNIAAAAQgRgLgGgRQgQABgRgEIABAAQgXgGgOgSIAAABQgUgXACghQACggAVgVIAAgCQgChDAugKQAHgHAGgPIAAABIAEgLIAAAAIABgEIAAgBQADgKgCgKIgCgLQgpgWglgSIgBgBQgvgWgvgRIgXgIQgygQgTgIIgBAAQg0gdgOgaIgEgJQgLgiAygbIAIgEQBTgrApALQAjAHAiAKIA2ASQAsAOAiAOIACABQA8AYAgAVQAyAjAgArQAhArAABVQABBUgsBNQABAWgEAVQgGAZgUAVQgUAVgZAHQgMAEgMAAQgSAAgQgIg");
	this.shape_183.setTransform(17.2,28.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("Ag3C0QgYgEgZgHIgUgHIgUgHQgvgSgngeQgZgVgWgXQgOgOgMgPQgJgLgGgMQgJgOgHgRIgNggIgIgbQgIgcAJgcIABgFQAIgTAQgNIAIgFQALgIAPgCQAGABAFAEIAQAMIA/AvQAlAcAoAXQApAYAtAQQBAAZBIgGIADgCIAMgBIAAABQAbgEAYgIIAHgDIAFgIQAGgIAAgFQAAgIgDgKQgDgIAAgOQAAgNAHgMQANgWAcAAQAEAAAMAHQAFgCAFgBQAHgRAQgIIgBgCQAGgaAYgBQAHABAIADQAHADAFAEQAYAVAIAfQAGAXgHAVIgEALQAIApgSAlQgFANgMADIgCAMQgCAOgGAMQgFALgGAKIgTAfQgCAEgEADQgPAOgSAHQgJAGgKAFQgQAIgQAHQgdAKgdAEIgKAAIgJABQgZAEgIAAIgUAAIgRABQgzABg0gJgAlLhBIgCgHIAAAAIACAHg");
	this.shape_184.setTransform(33.8,16.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_162}]}).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_162}]},1).to({state:[]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_180}]},1).to({state:[]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.4,94.4);


(lib.boy13QarmLcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E9395").s().p("AhUgXQAPhtBDhOIABAAIAEAAIAmAGIAMAEIAAAAQgcAqgYAtQghBEASBIQAMAyAkAkQAdAbAXAcIAAABQgBAWAAAQIAAAEQi4h7APhvg");
	this.shape.setTransform(9.2,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29A42").s().p("AhEBMQgNgDgNgCIgEAAIACgDQBYhYAzg7IABgCQAcgCAbACQhCA5gyBDIgdAoIgWgHg");
	this.shape_1.setTransform(20.5,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#374656").s().p("AgiAEIgCgKIAOgCIABAXIgBAAIgCABIgGAAIAAAAIgCABgAgDgKIAmgGIACALIgIAEIABAAIgBAAQgQAGgOAFg");
	this.shape_2.setTransform(-5.3,-7.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E9395").s().p("AhCAjQgggqgBhAIAAgBIAQgCIAwgQIAGgEIABAAIABAAIADAUQAHAoAMAkIAAAAIAAABIABACIAKAdQABAEAEACQAEABAEgBIAAgBIAAgaQAcAFAcACQAYAiABAnQgTACgSAAQhVAAgsg8g");
	this.shape_3.setTransform(1.6,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B29A42").s().p("AhMgOIgEgHQAfgCAggHQAkgKAVgHIABAAIABAAIABABIABAAIAeAXIAHAJIAAAAQgLAYgWAKQgXAKgmAKQgXAFgWADg");
	this.shape_4.setTransform(19.6,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4E9395").s().p("Ag2AoIABAAQARg8Ajg2QAigCAcAOQgxA+gBAaIgEASIgEARIg/AOQACgRAEgSg");
	this.shape_5.setTransform(2.4,25.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B29A42").s().p("AhDBrIgUgIQgQgEgSgBIgDAAQA0hGBDg3QAkggAmgeIADgCIgOgDIAMgEQASgGAMgBIATAFQAGAFAAAKIh9CBQgjAngaAfIgGgDg");
	this.shape_6.setTransform(16.1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(28,29,36,0.322)").s().p("AAAABIAAgBIABABg");
	this.shape_7.setTransform(19.9,55.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCCC").s().p("AhygXQAPhtBDhOIABAAIAGAAIAkAGIAMAEIAAAAIAMAFIBPBBIACAEQgbAogaAsIgBACQgdAxgCAcQgBAHABAGIAEgEIAcguIANAGQgIAwgIBHIAAACIgBAJIgDAgIAAABQgBAWAAAQIAAAEQi4h7APhvg");
	this.shape_8.setTransform(12.2,35.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAD652").s().p("AhiAuIgVgHQgNgDgOgCIgDAAIACgDQBXhYA2g7IABgCQAZgCAcACQAzAFAzAWQhNBbhNB4Qgqg2g0gUg");
	this.shape_9.setTransform(25.6,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#445A6F").s().p("AgaAfIgGgBIACgSIA1gHIABAZIgBAAIgBAAIgHABIAAAAIgCAAIgKABgAhNARIgGgwIANALIAFAkIAPgCIgCALIgZgIgAArACIAngDIACAJIgHAEIAAgBIgBABQgQAIgQAFg");
	this.shape_10.setTransform(-10,-9.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CCCC").s().p("ABKCDQhhgMg+hOIAAgBQg2hDgGhaIAAAAIgBgHIAdAJIABAAIABABIAAAAIAIABIApADIANgBIAAAAIAQgCIAugQIAHgEIABgBIAAAAIADAVQAHAoAMAmIABAAIAAAAIABADIALAdQACADAEAAQADACAEgCIAAAAIAAgYQAcAFAcACQAYAgACAnQAAASgEASIAAAAIgDAOIgBAFIgMAaQgagBgbgDg");
	this.shape_11.setTransform(-3,7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAD652").s().p("AhGBJQABgDAAgCIABgCIAEgRIABgHQADgSAAgRIgSg+IgEgHQAfgCAggIQAkgJAVgHIABgBIABABIABAAIABABIAeAXIAHAJIAAAAIAEAHIAAA7IgBADIgCAEQgRAngsAPIABAAQgwAPgyADg");
	this.shape_12.setTransform(19.8,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(28,29,36,0.322)").s().p("AAAAEIAAgBIgBgPIABgBIABALIABAPIgCgJg");
	this.shape_13.setTransform(0.4,-8.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(2,1,1).p("AAAgDIAAAG");
	this.shape_14.setTransform(-15.7,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("Ah1BjIgHgMIANhEQAPg3AfgzIAAAAQARgeAVgYQAwASAyArQAMAKAYAjIASAaQgcAcgXAhIgTAeQgRAZAGAVQgNgDgGADIgDABQgcALgYACIgFAAQg0AAgegrg");
	this.shape_15.setTransform(-2.4,-21.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#445A6F").s().p("AASAtQAWgOAsgjQANAXAFAeIghAdIgTASQgFgYgbgbgAgmgCIgNgJQAMgHAcgYIAhgdIADACQAfAVATAdQgXARgqAmQgSgTgegTgAhlgjQAmglAxgWIAVANQgWAOgyAwQgUgMgQgEg");
	this.shape_16.setTransform(6.6,-33.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AhRAoIAAAAQARg8Ajg2QAjgCAbAOQAeAQAUAjIAAAAIAGAKIgLAPIgIAIQgCAIgFALIiXAiQACgRAFgSg");
	this.shape_17.setTransform(5.1,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FAD652").s().p("Ag2CLIgHgMIgqgqIgFgDIgGgDIgUgIQgQgEgSgBIgDAAQA0hEBDg5QAmggAkgeIADgCIgOgDIgCgBIgCAAQAAgIAPgCIARgBIAOABIATAFQATAFAaALQAvAUAHAMIABAEQAAADgEADQgDACgCAAQgCAAgIgDQgyAmgtArQg9A+gzBHg");
	this.shape_18.setTransform(20.8,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).wait(1));

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgYFBQjZiKAUiBQAQhtBDhRIAAgBIAAgBQABgEADgDIABgBIARgRIAAAAQBYhaA0g7IAAAAIACgEQADgEAEAAQBegJBbAqQADACACAEQABAEgCAEIgDADQAAAEgCADQhRBghSB/IAAACQgBAEgEACIgBABQgfAsgcAzIAOAJIABAAQADABACADQACAEAAAEQgJAwgGBNQgFAngBAaIADADIgDAAQAAAVABAMQABAEgCAEQgDADgEABIgCAAQgDAAgCgCgAg+h1IANAFIgNgGg");
	this.shape_19.setTransform(20.9,27.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgJCyQhrgNhDhVIAAAAQg5hKgHheIgCgWIAAgBIgIhCIAggEIAIA+ICrgWIACALIAAARIAEAYIAAAAQAGAkALAiQAfAHAiACIACAAIABAAIABAAQAlAAAmgJQAkgJAVgHIAGgCIACgBIABAAIAFABQBdAtgnBZQgUAvg1ASIAAAAQg8ATg9ABIgBAAIAAAAIAAAAQgfAAgdgEgADiAPIAEAHIgEgHgAiUhSIANgBIAAgBIgNACg");
	this.shape_20.setTransform(5.1,4.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(2,1,1).p("AAAgDIAAAG");
	this.shape_21.setTransform(-15.7,-10.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AiYCUIgHgMIgEAKIgEABIgEACIgGgFIAJhLQAQg/Aig2QA7hjBfgqIAFgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQAYAOAXAPIAAAAQAjAZAWAhIABgBIAFAMIAFAIIAAABQANAcAFAhIAAAFIgDAFIglAeQg9A2gZApQgZApgOAVIgBACIgEgBQgKgDgGADIgEABQgdALgZACIgFAAQg0AAgdgrg");
	this.shape_22.setTransform(1.1,-26);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AjVCSIAAAAQAThDAmg5IAAgBIABgBQA5hPBNhCQAkghAngeQAEgCAEAAIAEACIARgBIAOABIATAFQATAFAaALQAvAUAHAMQADABACADQACADAAAEQgBAEgDADQg2AogwAwQhDBBg0BOIAAAAIgUAhIjGAsQABgWAHgXgAgKBZIAAgBIAAAAIgBAAIABABgAA3ixIAAAAIgCAAg");
	this.shape_23.setTransform(16.4,14.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.boy13QarmLcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E9395").s().p("AhUgXQAPhtBDhOIABAAIAEAAIAmAGIAMAEIAAAAQgcAqgYAtQghBEASBIQAMAyAkAkQAdAbAXAcIAAABQgBAWAAAQIAAAEQi4h7APhvg");
	this.shape.setTransform(9.2,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29A42").s().p("AhEBMQgNgDgNgCIgEAAIACgDQBYhYAzg7IABgCQAcgCAbACQhCA5gyBDIgdAoIgWgHg");
	this.shape_1.setTransform(20.5,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B29A42").s().p("ABhBRIgEAAQhcAAhwhQIADgEIAHgSIAVg9IBJAqIBYAxQAcAhADApQgJgBgGgBg");
	this.shape_2.setTransform(18.7,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E9395").s().p("Ag9hBIA/AFQgGAVADAOIACABIABgCIAPgXIAEADIApAdQgCAugZAmQhbhIgFg8g");
	this.shape_3.setTransform(2.2,-5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,29,36,0.322)").s().p("AAAABIAAgBIABABg");
	this.shape_4.setTransform(19.9,55.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CCCC").s().p("AhygXQAPhtBDhOIABAAIAGAAIAkAGIAMAEIAAAAIAMAFIBPBBIACAEQgbAogaAsIgBACQgdAxgCAcQgBAHABAGIAEgEIAcguIANAGQgIAwgIBHIAAACIgBAJIgDAgIAAABQgBAWAAAQIAAAEQi4h7APhvg");
	this.shape_5.setTransform(12.2,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAD652").s().p("AhiAuIgVgHQgNgDgOgCIgDAAIACgDQBXhYA2g7IABgCQAZgCAcACQAzAFAzAWQhNBbhNB4Qgqg2g0gUg");
	this.shape_6.setTransform(25.6,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FAD652").s().p("ABQCBQhBgNg5geIgogZIAIAFIhFguIACgCIADgCQAmgWAUgmIADgGIAHgSIAVg9IBHArIBaAyQAdAhACAnQACASgEATQgCALgFALIAAABQgLAigfAAIgMgBg");
	this.shape_7.setTransform(15.5,6.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCCC").s().p("AAZBgQgegbgfgcQgcgdgZgeIAAAAQgWgcgDgrQBggIASADIgBAAIA9ABIgFABQgJASAEARIAEABIABgDIAPgXIAEADIApAeQgCAvgZAkQgKANgMAMIgEAEQgRARgSAPIgCABIAAAAg");
	this.shape_8.setTransform(-3,-2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgYFBQjZiKAUiBQAQhtBDhRIAAgBIAAgBQABgEADgDIABgBIARgRIAAAAQBYhaA0g7IAAAAIACgEQADgEAEAAQBegJBbAqQADACACAEQABAEgCAEIgDADQAAAEgCADQhRBghSB/IAAACQgBAEgEACIgBABQgfAsgcAzIAOAJIABAAQADABACADQACAEAAAEQgJAwgGBNQgFAngBAaIADADIgDAAQAAAVABAMQABAEgCAEQgDADgEABIgCAAQgDAAgCgCgAg+h1IANAFIgNgGg");
	this.shape_9.setTransform(20.9,27.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ACaCmIAAAAQhUgRhHgrIgYgRQg9grg5gwQgmglghgpIAAgBQgZgggCgvIB0gCIAAgBIBcgDIABAAICDBJIBmA6IADACQAxA2gPBJIAAABQgCAMgFANIAAAAQgQAvgsAAQgIAAgJgBg");
	this.shape_10.setTransform(7.7,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.boy13QarmLcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E9395").s().p("AhUgXQAPhtBDhOIABAAIAEAAIAmAGIAMAEIAAAAQgcAqgYAtQghBEASBIQAMAyAkAkQAdAbAXAcIAAABQgBAWAAAQIAAAEQi4h7APhvg");
	this.shape.setTransform(9.2,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29A42").s().p("AhEBMQgNgDgNgCIgEAAIACgDQBYhYAzg7IABgCQAcgCAbACQhCA5gyBDIgdAoIgWgHg");
	this.shape_1.setTransform(20.5,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4E9395").s().p("Ag7ATQALgcAPgdQALgXANgXIAKgRQASABAQAFQAYAGAVAKIAAABQgcAngSAqQgIAWgUAsIgFANIgaANIgKAFIgsACQAGgqAOgpg");
	this.shape_2.setTransform(3.2,26.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B29A42").s().p("AiDA5IgDgBIA1g8QAWgYARgLQATgOApgRIACAAQAMAAAWgHQAWgIAOAAIAFAAIABAAIABAAIAcAFIAJADIABAIQAAANgfARQgSAKgxAVQgYAIgSAUIgfAiQgQAQgNAQQgggRgigMg");
	this.shape_3.setTransform(19,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(6));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(28,29,36,0.322)").s().p("AAAABIAAgBIABABg");
	this.shape_4.setTransform(19.9,55.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CCCC").s().p("AhygXQAPhtBDhOIABAAIAGAAIAkAGIAMAEIAAAAIAMAFIBPBBIACAEQgbAogaAsIgBACQgdAxgCAcQgBAHABAGIAEgEIAcguIANAGQgIAwgIBHIAAACIgBAJIgDAgIAAABQgBAWAAAQIAAAEQi4h7APhvg");
	this.shape_5.setTransform(12.2,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAD652").s().p("AhiAuIgVgHQgNgDgOgCIgDAAIACgDQBXhYA2g7IABgCQAZgCAcACQAzAFAzAWQhNBbhNB4Qgqg2g0gUg");
	this.shape_6.setTransform(25.6,9.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#445A6F").s().p("AgWgEQAKABAHgCIACALIg6ACQATgIAUgEgAANAAIAAgHQAYAAAVAHIAEACIAAABIgwACIgBgFg");
	this.shape_7.setTransform(9.7,35.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCCC").s().p("AhoATQALgcAOgdQAMgXANgXIAMgRQARABARAFQAVAGAVAKIAAABIAHADIApAcIADADQAXAVASAZIgjBEQgOgJgRAAQgegBgeAJQgVAFgWAIIgcANIgKAFIgsACQAGgqAPgpg");
	this.shape_8.setTransform(7.8,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FAD652").s().p("AADBzQgbgcghgWIgagQQgggSgigMIgDAAIA1g9QAWgXARgMQATgOApgRIACABQAMAAAWgIQAWgIAOAAIAFAAIABAAIABAAIAcAFIAJADIAIAEIAIAFIAAAAQAVAOAAAPQAAAWgTAeIh8CVIgHgJg");
	this.shape_9.setTransform(20.8,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(6));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgYFBQjZiKAUiBQAQhtBDhRIAAgBIAAgBQABgEADgDIABgBIARgRIAAAAQBYhaA0g7IAAAAIACgEQADgEAEAAQBegJBbAqQADACACAEQABAEgCAEIgDADQAAAEgCADQhRBghSB/IAAACQgBAEgEACIgBABQgfAsgcAzIAOAJIABAAQADABACADQACAEAAAEQgJAwgGBNQgFAngBAaIADADIgDAAQAAAVABAMQABAEgCAEQgDADgEABIgCAAQgDAAgCgCgAg+h1IANAFIgNgGg");
	this.shape_10.setTransform(20.9,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjdC3QAGglALgkQAIgcANgaIAagzQARgZAVgaIAogwIANgMQA5g0A1gWQAxgUAGAJQARgCASABQBZADAAA8QAAAhggArIgJAMQgcAfgbAfIgPAUIgeApQgQAVgNAWQgMAVgJAWIgGASIj4AJIABgMg");
	this.shape_11.setTransform(15.8,17.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.boy13QarmL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E9395").s().p("AhVgJQAAgMAFgaQAGgiAIgTQANgaAXgpQAZgrADAAQAFAAAUADIAdAGIAAABQgwBRgMAjQgMAdAAAmQAAAvAVAkQASAfBDBHIgCArQiphtAAhvg");
	this.shape.setTransform(9.3,36);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B29A42").s().p("AhhBIQAFgKAlgnIBShXIAOgQQAQgFAqAFQgnAfg1A9QgtA3gJAQQgbgIgXgDg");
	this.shape_1.setTransform(20.5,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#374656").s().p("AgiAaIAjg5IAjAGQgGAJgUAXQgSAZgBAAQgKgBgPgFg");
	this.shape_2.setTransform(-12.9,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4E9395").s().p("AhoBgQBYh8BFhNQAJAAArAMQgZAXgbAdQgzA3hBBcQgUgGgVgEg");
	this.shape_3.setTransform(-1,26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B29A42").s().p("Ah2BDQBkhOA/g2QAPgMAKgCIAZgBQAKAAAOACQggAgg1AtIhkBSQgfgKgVgEg");
	this.shape_4.setTransform(17.9,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#374656").s().p("AgbgFQADgSgDgPIA3AkIgJApQglgigJgKg");
	this.shape_5.setTransform(-12.8,-19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4E9395").s().p("AglACQgwgjgXgWIAMgoQABgEgCgCIBnBJQAzAjAUASQAgAbAAAKQgBAUgGAUQhFgshGg4g");
	this.shape_6.setTransform(1.6,-7.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B29A42").s().p("AhMgYIAFgbIAEgZQBbBIAIAEQANAHAMAJIAEgFIACAGIALAfIADAcIAAABQhFgphUg8g");
	this.shape_7.setTransform(21.4,6.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FAD652").s().p("AgEgNIAAgBIAEANQAFALAAAFg");
	this.shape_8.setTransform(28.3,9.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4E9395").s().p("AgqB+Qg4gpAAg3QAAgLAPgmQAQgsAMgRQBPhZAXAAQADAAAUAKQAWALAHABQglAOgtAoQgjAhgLASQgFAAgEAEQgEADgBADIAJAAQgHAVAAAJQAAAaAZAaQAXAaAnAOQACAZAEAOQAHAVAQAUQhEgIgxgkg");
	this.shape_9.setTransform(-8.1,25.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#374656").s().p("AgRAdQgGgNgGAAQgJAAAEgHIAKABIAmgCQANAAABAGQACAMAXAPIgLAAQgtAAgOgMgAgygRIgCgXQAYAHAYAFIAGATIgDABIgWAAIgMABQgMAAgDgKg");
	this.shape_10.setTransform(3.8,39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B29A42").s().p("Ah+AmQBVguAcgNQAogUBGgUIgBgBQAAgBAHAAQAGAAAFACIANAGQgYAeguAZQgnAXhbApg");
	this.shape_11.setTransform(11.4,3.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#374656").s().p("AgUAAQgCgPgJgRIAJAFIASAIQAJAKAbAqQgtgXgHgKg");
	this.shape_12.setTransform(75.5,48.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#4E9395").s().p("AAaAvQg7gagCgDQgCgCgkgQQglgRgPgKQgQgKAGg1IByBDQBaAxA7AVQADAYAGAUQhXgigYgKg");
	this.shape_13.setTransform(57.2,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B29A42").s().p("AghAPQhIg6AFhEIABAAQAHAXA8A4QBCA+BDAiQgCAXAAAZQhdg+gngjg");
	this.shape_14.setTransform(31.5,22.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#374656").s().p("AgnAAQAAgFAUgWQAUgYgFALQATAggUAbQgcAkABAPQgHg9AAgJgAAHgvIAhgWQgDAOgCAkIgNAHgAAohFIAAAAIAAAAg");
	this.shape_15.setTransform(-1.1,44.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4E9395").s().p("Ag7ABQAhhqAbgIQAdgIAfAPQAeAPgJgCQgdAmgSAsIggBKQgSAHgXAOQgYAPgSASQgLgIAghsg");
	this.shape_16.setTransform(3,28.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B29A42").s().p("AiGA4QAkhGBigrQBAgcAeAAQAHAAAOADIATAFIAAAAQAGAEgVANQgVAPgoAWQgoAWgeAeQgSASgjAnQgtgWgYgIg");
	this.shape_17.setTransform(19,8.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#374656").s().p("AABAUQgWgCgZAEIAlgrIA4AKIgfAhIgPgCg");
	this.shape_18.setTransform(-13,30.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#4E9395").s().p("Ag6BDIgogJIgCgBIgGgBIgCAAIAHgJIAAAAIAAAAIApgqIAAAAIBbhJQAUABATAGIAIADIABABIABAAQAPAHAOALIgBABIg0AlIhoBGIgBAAIgJgCg");
	this.shape_19.setTransform(-1.6,20.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B29A42").s().p("AhyAPQAQgKARgGQAigSAjgNQAdgMAggEQAagDAbAFIANAEIAAABQAAATgtAUQg5ATgTAKQgSAKgVANQgfgagmgJgABSggIACgBIgBgBg");
	this.shape_20.setTransform(15.7,10.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FAD652").s().p("AAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(24,7.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4E9395").s().p("AAtCnQhEgUg2gxQgMgLgHgMIAAAAIAAAAQgQgfAIgpQAOhGAygvIAAgBQAbgaAkgbIAOAFIAAAAIACAAIAEACIACAAIABABIACAAIACABIABAAIACABIABAAIAvAaIAHAFIhbA7QgOAKgKAKIAAAAIgggDQgEAAgDADQgEACAAAEQACAAAdAEQgZAZgHAXQgKAoAhASQAbAPAeAPQAAAUAHATIAAADIAAAAQAFANAKAOIABACIgHgCg");
	this.shape_22.setTransform(-4.1,26.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#374656").s().p("AABAgIgKgCQgLgHgKgQIAAABIgFgHIAKABIAAAAIAZABIAAAAIAOAAQAHALAKAKIAAgBQAIAJAKAHQgYgDgYgEgAgXgQIAAAAIgVgCIAAgBIgBgBIgBgFIgCgIIAAgFIAtAXIgUgBg");
	this.shape_23.setTransform(5.7,40.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B29A42").s().p("AiLAhIAMgJIAEgDIAEgCIABgBIAdgRIAHgCQBSgzBLgWIAAAAIAFgBIABAAIABAAQAMgBATALIAKAHQAHAGAFAIIAAABIADAFIACAEQgDAJgdAKQgtAOhfA9IgaAQQghgdgwgOg");
	this.shape_24.setTransform(14.2,4.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#374656").s().p("AgaANIgIgZIAZAHQANADALALIAKANQAGAAADAGQAFAJACADQg0gGgPgVgAgPgaQgFgBgUgMIArAHIACALIgUgFg");
	this.shape_25.setTransform(16.9,40.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4E9395").s().p("AAXCBQgsgQgYgMQg/gjAAhAQAAgGAEgWQAHgeAIgSQAKgTAagfQAcghAJABQAQAAATAGIAqAPQgdAPgaAsQgYAqAAAgQAAAdAZASQAMAIBFAeIgBAVQAAAKAWAsIhWgdg");
	this.shape_26.setTransform(2.6,27.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B29A42").s().p("AhqAvIgNgCQAhgVAagTQAdgQBkg8IAZAHIAaAHQgiArgVAOQguAZhAAvQgngUgWgFg");
	this.shape_27.setTransform(15,5.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#4E9395").s().p("ABXCJQgigKAAgHIgwgaQgygegWgZQgVgZgYgoQgXgqgDg4QAkgcAlADQgQBuAuAlQAsAkAiAOQAjAPA0ASIgBAhIABAKQADAMAGAOIg0gNg");
	this.shape_28.setTransform(20.8,33.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#374656").s().p("AgNAuQgvgMAEgrIBHAFIABALQADALAGAAQACAAAMAMQAOAQAHAGIgNABQglAAgXgHgAg7geIABgVQA1ANANAHIABAHg");
	this.shape_29.setTransform(41.7,47.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B29A42").s().p("AhdBbQAHhABCg/QA7g6AmAAQACAAAPANQgCALg6BAQg1A7gCAaIhIAQg");
	this.shape_30.setTransform(16.2,9.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#445A6F").s().p("AgOgCIANAAIAQAFg");
	this.shape_31.setTransform(48.1,53.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#374656").s().p("AgWASQAFgYgGgfQALABAZABIALBGIgBADQgsgIgBgMg");
	this.shape_32.setTransform(5.1,71.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#4E9395").s().p("AgrDAIgCgnQAAg9ALhVQAKhFAIghQAKglAUg+IAgABQgHAdgbBeQgWBiAABrIACAdIAEAfg");
	this.shape_33.setTransform(7,46.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B29A42").s().p("AhGBGQANgcABAAQABAAASgdQAXgiAOgTIA9hGIgHgEQAlATgBABQghArghAfQgbAfg1BmQgRAAgQACIATgtg");
	this.shape_34.setTransform(18.1,14);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#374656").s().p("AAKArIAFgyIABABIAMAEIAEA0gAgSAVQgDAAgFACQgFgBAAg2IAAgRQAGAHAOAMQAKAHAAAGIgGAxQgFgKgGgBg");
	this.shape_35.setTransform(-9.3,14.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#4E9395").s().p("Ag1BKQgyg2gViBQA3AaAHABQAAA8ArBDQAVAjAaAgQgwgDghgjgABAhhIAFgGQAHgIAGAAIArARIgTAUQgSASgFACg");
	this.shape_36.setTransform(0.5,29.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(28,29,36,0.322)").s().p("AgGgCIAAAAQAIACAFAEg");
	this.shape_37.setTransform(-7.4,11.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B29A42").s().p("AhABOIgNgFQAMgGA/hVQACgHARgmQAMgZANgBIAUAGIgCAGQAEgCAGAAIAAAAIAIAHQgBASguA+QgnA2gcAdIgcgNg");
	this.shape_38.setTransform(18.2,9.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FAD652").s().p("AgBgBIAGABQgFAAgEACg");
	this.shape_39.setTransform(24.7,1.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#374656").s().p("AgQAKQgGABgDgDQAMgHANgHIAJgIQAJANAIAFQgHADgTACQgKAAAAAGQAAgFgGAAg");
	this.shape_40.setTransform(-9.6,25.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4E9395").s().p("Ag5BEQgzgigOgiQAigGARgIIAqArQAuAoA1AAQAcAAAZgIQgdAcgZAIQgOAFgZAAQgkAAgzgigAAwhWIANgPQAUAJATAMIgOANIgRAMg");
	this.shape_41.setTransform(1.9,29);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B29A42").s().p("AgxBpQgGgEgSgIQAkgoAmhHQAjg+AKgiQAOAQAOAUIAAAAQADAfgvBIQgiA6geAgIgPgKg");
	this.shape_42.setTransform(16.8,7.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B29A42").s().p("AhUgSQAwgEAjgMQAcgKAKAAQAGAAABgGQADAAAmAdIgIAKQgTAggiALIhWATQgSg+gEgHg");
	this.shape_43.setTransform(20,7.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#4E9395").s().p("AgzAyQg1g0AFhHIAAAAQAHgBAWgGQAbgIAQgHQATBdAJAYQACAGAMAMIAEgCIAAgaQAAABAeAGQAgAHAFALQAMAVACAiQgVAEgUAAQhAAAgugug");
	this.shape_44.setTransform(1.6,3.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#374656").s().p("AglgBIAPgDIACAmIgLABgAgDgMQAAgKAjgMQAGAjAAAKQAAACgPAHQgPAHgIACg");
	this.shape_45.setTransform(-5.4,-9.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#374656").s().p("AgIAMQgOgPgPgPQAUgCAKAAQADAAANAIQATALAKALQgdALgJAAQAAAAgIgJg");
	this.shape_46.setTransform(-10.8,25);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#4E9395").s().p("AgzBEQgwgigNgiIA6gUQAhApBsBGQgbALgZAAQglAAgxgigAA0hWIAOgPQAXAMAYAPQgUAXgLAIg");
	this.shape_47.setTransform(1.4,29);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(28,29,36,0.322)").s().p("AgMgPQAFAEAJAMIALAPIgZgfg");
	this.shape_48.setTransform(24,-3.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B29A42").s().p("AhOBbQAkgoAohHQAgg+ALgjQAUAYASAgQgFAVguBFQgkA5gZAgQgggVgNgGg");
	this.shape_49.setTransform(17.4,8.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#374656").s().p("AgGAPIAFgdIAAABIAIAbIgJABg");
	this.shape_50.setTransform(6.3,54.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#4E9395").s().p("AhABpIgKgTQAJgNAMgYQAXguANhGQASg7AEgQIAWADQAZAFAXAGQgJAngqBiQgvBzgaATQgFgQgKgWg");
	this.shape_51.setTransform(14.2,40.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B29A42").s().p("AhDBsQAdhjASgsQAhhTA2gCQAAALgfBrIgkB7Qg+gNgFAAg");
	this.shape_52.setTransform(22.2,13.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#445A6F").s().p("AgIAEIABgHIAFABIAJgBIACAHg");
	this.shape_53.setTransform(6.4,56.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#374656").s().p("AgyATIADgTQAHAFBFAWIAKACIgHADgAgIgGQgtgQAIAAQAKAAgIgJIAtATQAjANAOALQgQgEgrgOg");
	this.shape_54.setTransform(24.5,56.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4E9395").s().p("AgiB1QhLhHAAhPQAAgGAEgVIADgUQAFAAAXg6QAXg6ALAAQAGAAARADQASAEAMAFQgQAYgVA0QgVAxAAANQAAA+AsA0QAoAyBGAZIABAAQgEARgEAlQhJgSg/g+g");
	this.shape_55.setTransform(7.2,38.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B29A42").s().p("AhiBjQgSgFgIAAQAZglBShOQBJhJAOgBIgMgDQAWgJAUgCIATAFQAGAGAAAJQiBCGgSAUIgnAtQgQgGgVgFg");
	this.shape_56.setTransform(16.1,6.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#445A6F").s().p("AgGAAIAGAAIAHAAQgBABgFAAIgHgBg");
	this.shape_57.setTransform(28.5,59.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B29A42").s().p("AhPA0QgUgigGgGQBQgYAogrIAWgaQAKgKALAAQAOAAAQAMQAOALAEAMQgfA+guAkQgdAYg6AaQgBgGgUgig");
	this.shape_58.setTransform(19.3,11.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#4E9395").s().p("AgYA5IgEgCIgpgxIABgBQAWABAOgQQARgTgLgbQAngEAXAfQANASAVAnQgSAJggALQgcAKgGAAIgKgBg");
	this.shape_59.setTransform(4.8,18.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#66CCCC").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(-2.1,19);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#4E9395").s().p("AhwgOQAEgfgIgmQAkAMA7AZQBEAdA4AZQATA3gGAVQhNgmiXg8g");
	this.shape_61.setTransform(-8.6,-14.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#B29A42").s().p("AgLAiIhsgsQABgMgCgXQgDgWgEgPQBkAxA+AhIAzAaQAIAEAAgCQAJAJAKAQQALARAEANQhkgggngRg");
	this.shape_62.setTransform(17.1,-4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#374656").s().p("AgIASIgDgKQAcAAARgDIAMAYIAAAAQgiALgQAAQgBgKgDgMgAgrgeQgMgJA4AAIASAXQgOAAgeAEQgKAAgIgSg");
	this.shape_63.setTransform(-12.6,21.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4E9395").s().p("AhmgOQBAgHAmgQIAhgPQAVAAAXAXQAGAGATAXQgHAEhLAXIhTAaQgVgxgSgSg");
	this.shape_64.setTransform(0.4,18.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B29A42").s().p("Ah1AhQA4gbBBgyQA2grAMAAQAIAAARAGQASAGAFAFQgoAygqAnQg4A3gjAOQgTgXgrggg");
	this.shape_65.setTransform(18,8.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#374656").s().p("AgZgaQAUgEAAgKIAGArQgBACgQAfIgSAiQgKhOATgSgAAGgvIAggWQgCAOgCAkIgNAHgAAmhFIAAAAIAAAAg");
	this.shape_66.setTransform(-1,44.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#4E9395").s().p("Ag2gEQAihtAXgFQAZgEAZAMQAZALAEgBQgbAwgSAsIggBKQgSAHgXAOQgYAPgSASQgKgRAihrg");
	this.shape_67.setTransform(2.8,28.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B29A42").s().p("AiGA4QAlhGBhgrQBAgcAeAAQAHAAAOADIAUAFQgDATgWAQQgXAQgxASQgUAHgdAeQgSASgkAnQgtgWgYgIg");
	this.shape_68.setTransform(18.9,8.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#374656").s().p("AgcAdQgGgLAAgGQAAgGAKgKQAOgQAIgKIARAeIgcA0IgPgXgAALgtIAIgGIAQAeIgGAGg");
	this.shape_69.setTransform(-8.6,39.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#4E9395").s().p("AhwBBQAAgWAHgcQAIghAPgVQAiguAkggQAmglAYAAQAIAAA3AjQhnBFgiAqQgdAeAAAiIAEARIAHAWIg4A8QgOg5AAghg");
	this.shape_70.setTransform(-3.1,22.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B29A42").s().p("Ah9AUQBSgvA8gTQAigLAXAAQAHAAATADIAbAFQgLARhZAsQgrAXgzAXQgOgSgsgUg");
	this.shape_71.setTransform(16.8,4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#374656").s().p("AgmAhQAHgjAUgOIADAJQADAIAAAHQAAAFgKAOQgNASgEAJQgGgMAAgJgAgBgbQANgOARgLIAKAcQgLAGgUANQgFgPgEgHg");
	this.shape_72.setTransform(-10,31);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#4E9395").s().p("AhCgJQAtg7BSg6IAHACQACAAAkARQhHA6gFALQgGALhHBYQAEgFgYAXQgcAcgKAUQgFhQAsg4g");
	this.shape_73.setTransform(-3.7,18.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#B29A42").s().p("AhpAWIARgJQAcgNAqgVQAhgSAhAAQAMAAAHgCIAKgBIAJAFQALAGAJAEQgiAIgdAJQg1AQg2Alg");
	this.shape_74.setTransform(15.4,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B29A42").s().p("AhRBMQAEgIAJgbQAIgaACgMQAsgMAngcQAWgPAmgeQARA4g6AxQgzAvhRANg");
	this.shape_75.setTransform(19.6,14.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#4E9395").s().p("AAyBqQhRgZgVgNIgRgOIAAABQg1gigchDQgSgugBgbIABgDQARAXAiATIAhAPQABAuAuAmQAzAvBPAAQA/gLAOgFQgGAVgIAOIgUAgQABAGgMAAQgUAAg3gRg");
	this.shape_76.setTransform(-5.1,10.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#374656").s().p("AALAxIATgrIAKAEIgGAzgAgkgCIAAAAQgBgTAUgnQAIAWAJARQALARgEAYQgCAJgFAAQgKAAgagfgAgngCIABgEIAAAEIgBAAg");
	this.shape_77.setTransform(-17.6,-4.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#445A6F").s().p("AAAAAIAAAAIAAABg");
	this.shape_78.setTransform(-21.6,-4.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#66CCCC").s().p("AgHgEIAAgCIAPAMg");
	this.shape_79.setTransform(-11.3,16.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#374656").s().p("AgRAnQgUgQgTgTIgKgIQAWgCAcgSIAGAFIAFADQABAEADACIAiAZQgQANgSAJIgNAFIgDgDgAAcgMIABgCQAAgDgRgQIgIgHIABAAIABgBIAAABQAKADAzAWIgBABIgJAJIAAAAIAAAAIgJAGg");
	this.shape_80.setTransform(-18.6,7.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#4E9395").s().p("AgIA3IAAAAQgbgEgagJIgBAAQgWgHgUgKIAAAAQgSgJgRgLIgBgBIACgBQAcgLAWgUIAAAAIACgCIANgNIAAAAIAQgQIADACQA3AZA2AAQAtAAApgIIgCAXQgFAfgTAbQgIAMgPAFIgzACIAAAAQgaAAgXgFg");
	this.shape_81.setTransform(-4,12.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B29A42").s().p("Ag/APIAEgdQAogKAigSQAUgKAdgSQAOgIALgDIAAAEIgBAHIgBAEQgFAQgHAQIAAABQgNAfgZAVQgZAYgeAOQgCACgCACIgFABQgbAMgeAHIAAAAIgEABQAVgfAEgkg");
	this.shape_82.setTransform(18.2,9.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#374656").s().p("AAWArIgDgBIgJgIQgFgFgFgCQgQgIgEgWIgDgnQAWALAMAbQALAUACAXQAAABAAABQAAAAAAABQgBAAAAABQAAAAgBAAIAAAAg");
	this.shape_83.setTransform(-23.7,-10.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#4E9395").s().p("AgiAiQg+gTgpgPQAIgbABgQIgFgNIgHgUQBOAkAtARQAPAFAvAKQAqAIAVALQAQAIAEAOIAEATQAHAPACALQhEgJhrgjg");
	this.shape_84.setTransform(-6,-3.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B29A42").s().p("AgyAjIgxgEQgBgDgMgcQgMgbgFgFQA3AEAcABIBFgDQAygEABgCQAXADAQAPQARAQAAAWQgOAFgkAGQgsAFg0AAIgigBg");
	this.shape_85.setTransform(20.6,1.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#374656").s().p("AgFAUIgDgIIAFAAQAAABAQAAIAYgCIALAVQgZADgYABQgBgIgDgIgAgvgjQAhAAAVANQALAGAEAGQgGAAgbAGQgcAAgIgfg");
	this.shape_86.setTransform(-12.9,18.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#4E9395").s().p("AhJAVQgOgZgLgNQBAgFAkgNIAigMQAVAAAPAOQAJAJASAYQiUAvgMABQgBgFgLgWg");
	this.shape_87.setTransform(0,16.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B29A42").s().p("AhxAeQAMgFBUgzQBMgyAPgDIAoANIAAAAQADAsg9AoQgZARhYAtQgQgSgoggg");
	this.shape_88.setTransform(17.6,7.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#374656").s().p("AgvAXQAPgQAIgPQAIgOgBgFQApAFAZgCQgHATgUAgg");
	this.shape_89.setTransform(-12.8,30.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#4E9395").s().p("AhbAgIAGggQAVgBA4gWIBigpQAHAWALAqQg2AZg2ASQg+AUgtADQAKgKAGgYg");
	this.shape_90.setTransform(2.8,26.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B29A42").s().p("AhXA+QA6gdA1g2QAygyAAgVQAAgGgGgFQgHgHgDgLQAJAHAMAHQAJAKAAAjQAAAlgnAzQgwA/hJAhQgEgjgLgZg");
	this.shape_91.setTransform(22.7,12.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#374656").s().p("AhFgRIAagBIAagCQABAAAQAUQASAVAIAGQgNAEgSAAgAAbAAQgVgRgGgFIAUgIIAyAeIgGAGIgQAMIgVgSg");
	this.shape_92.setTransform(-32.5,0.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4E9395").s().p("AgkAmQh+gfgegjQAPgBAUgJQAZgLALgQQB1BABGAGQBJABA2ANIgOAdQgKARgIABQhUAAhxgcg");
	this.shape_93.setTransform(-11.1,9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#B29A42").s().p("AhvAjQAHgFAHgTQAFgLABgKQAaADAUAAQAZAAAtgHQA8gJAbgNQgcAshHASQgnALgtAAQgUAAgUgCg");
	this.shape_94.setTransform(19.7,12.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#374656").s().p("AAHANIgHgEQAPgUACAAQAHAAAKAFIAKAFIgZATIgMgFgAgrAFQAGAAACgFQAEgJACgCQgFgGAKAAIAYACIgXAVg");
	this.shape_95.setTransform(-11.9,31.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#4E9395").s().p("AhfBHIgSAAIgKAAQAdgjAxgyQBEhKARAAQAVAAAaARIAlAYQgcASgmAeQhIA+giAaQgbgPgUgDg");
	this.shape_96.setTransform(-0.8,20.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B29A42").s().p("AhxAkIgKgEQCmhuAXAAQAKAAAQALIAgAZQgKAWg4AjIhlBAQgkgfgigMg");
	this.shape_97.setTransform(17.9,6.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#4E9395").s().p("AgxAAQAih2ASAAQAVACATADQAnAHAAAKQgdArgSAsIggBKQgTAHgWAOQgZAPgSASQADgXAdhgg");
	this.shape_98.setTransform(3,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_68},{t:this.shape_98},{t:this.shape_66}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

	// Layer 2
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FAD652").s().p("Ag3BHQgdgWgOgDQgbgIgYgEQAGgJAlglIBUhZIAOgQQAOgFApAFQAGAABhAaQhRBehJB1QgTgZgggYg");
	this.shape_99.setTransform(25.6,9.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#66CCCC").s().p("AhzgJQAAgMAFgaQAGgiAIgTQANgaAXgpQAZgrADAAQAHAAAUADIAbAGIAAABIANAFQBOBCADADQgwBCgXA0QgOAgAAAQIAAAKQAEgFAcgtIAHAAQAGAAAAAGQAAAvgIAsQgLA5gBAOIgCArQiphtAAhvg");
	this.shape_100.setTransform(12.3,36);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC99").s().p("Ah+BcQAAgBgBAAQAAgBAAAAQAAgBABAAQAAAAABAAIgBgBQgOgEABgIQgCgFAAgIQAAgQAMgVIATgQIASgOQAAgLAfgGIA9gHIgEgGIgRgDIgVgBQgTAAgXAIQgiAMgVAZIAAgUQAGgMAegUQAegUAagGIgDgEQgGgCgIAAQgKAAgVAJQgTAIgIAGIALgMQAfgaANAAQAwAAARAGQANALANAGQAZAMAiAOQAXAMAGAVQAIAXANAVQAJAOAAAMQAAANgUAAQgcAAgTgVQgSgVAEgXIgFABQgOAIgdAJIgSALQgUAKheAsIgEgCQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAIgCgBg");
	this.shape_101.setTransform(-11.6,55.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#445A6F").s().p("AATAhIAogyIAtAnIgiAxQgfgZgUgNgAg6gCIAvg3QAIgBATASQATAPAHgEQgPAXgaAdgAhngMIAmg7IAiAGQgFAJgUAZQgUAZgBAAQgKgBgQgFg");
	this.shape_102.setTransform(-6.1,45.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#66CCCC").s().p("Ah0A/QgVgGgUgEQBXh8BGhNQAJAAArAMQAmAOAYAUQAdAXAPAiQg2A+gsA9IgxBHQhahOglgIg");
	this.shape_103.setTransform(4.3,31);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FAD652").s().p("AgaBCQgggZgWgFQgggKgUgEQBkhOA+g2QAQgMAJgCIAZgBQALAAAOADQAcAQAAAdQAAAdgsBIQgiA6giAsQgLgegkgeg");
	this.shape_104.setTransform(19.4,12);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC99").s().p("AADBxQglgCAAgMQAAgKAIgkQAAgEADgDQAHgFAJgNQAHAOAUAKQAPAGAGAAQAOAAAQgOQAWgTAAgeQAAgKgFAAIgBACIgRAcQgNAXgQAAQgMAAgLgIQgKgIAAgGQAAggAHgKQAEgGAKgIIABAAQAQgLAcgIQANAAAQAOQAVASAAAcIgBARIgCAKIgIAaQgFAQgCgBQgBgBgJAPQgKAPglANIgBAAQgJACgRAAIgTAAgAhXBYIgCABQgSgJgGgIQgIgIgBgGIAAAAIgBgaIABgBIAEgHQAHAGAVALIATALQAVAAAHAFQACABAAAFQAAAhgRAAQgNAAgQgIgAhZAXQgZgQAAgWQAAgNAMgQQAPgSARALQAEADAFAGIAEAFQAKAGAMAFIAJAEIAGAJQAEAHAAAGQAAASgSAKQgMAHgIAAQgQAAgTgMgAADgoQgcAAgTgNQgRgMAAgQQAAgoA0ALQAwALAKAYQgVAFgIALQgJALgCAEQgCAEgEAAIAAAAg");
	this.shape_105.setTransform(-30,-22.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#445A6F").s().p("AhgAxQAggBAPAEQAZAHAaAaIgVAJgAgcAlIABAAQAEACAVgUQAUgTADgMIAVAOQAJAHAGAAQAGAAADADIAIAHQgGAJgWAYQgWAWgCAAQgCAAgwglgAA0gNQgVgLAAgHQAAgFADgIQAFgKABgGQADgSgDgPIA5AkIgJArIgGAPIgegOg");
	this.shape_106.setTransform(-19.7,-13.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#66CCCC").s().p("AifAIQAdgEAlgtQAcgkAIgUIAMgoQABgEgCgCIBnBJQAzAmAUARQAgAZAAALQgBATgGAUQgMAhgUATQgPAOgkASg");
	this.shape_107.setTransform(-3.4,-3.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FAD652").s().p("ABdCDIgYgJQgbgWhBgmQhYgygRgLQAZgGASgQQAdgXAHglIAFgbIAFgZQBaBIAJAFQAMAIAMAJIAEgFIACAHIAAgBIAGANQAFANAAAFIADAaIAAABQADAbALAfQAMAdAAAOIgBAHIgDAEQgGACgKAAQgHAAgKgDg");
	this.shape_108.setTransform(18.7,11.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC99").s().p("AADB2QgwACghgZQgngeAAg2QAAgmAXgmQAVgiAQAAQAKAAALADQgDAAAAAIIgBAMIAAAAQgOgCgNAKIADAJQARADAMAAIAbgDQAZgHAJgWIgBgFQgoANgFAAQACgJATgOQAWgOANAAQAVAAAMAKQANALAAAVQAAANgGAYIgKAfIAIgBIAOgZIALgVIAFAJQAGANAAAMQAAARgLAUQgGANgLASQAJABAIgFQAGgFAJgKIABACIACAJQAFAfglAZQghAWgqAAIgHAAg");
	this.shape_109.setTransform(16.4,31.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#445A6F").s().p("AgRBdQgGgOgGAAQgJAAAEgGIAKAAIAmgCQANAAABAGQACAMAXAPIgLAAQgtAAgOgLgAgyAtIgCgYIACgrQAMABAcgEQgBAhAHAZIAGATIgDABIgWAAIgMACQgMAAgDgKgAgihWQAOgbAiAPQgDAIgHAZQgKAWgoACIAMgtg");
	this.shape_110.setTransform(3.8,33.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FAD652").s().p("AgWBuQgEgVgSgbQgVgegagQIg0gYQBVgxAbgNQAogTBGgUIgBgBQAAgBAHAAQAHAAAEACIANAFQASAIAKASQAHAPABASQgBAxg9A5Qg4AzggAAg");
	this.shape_111.setTransform(13.2,8.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#66CCCC").s().p("AhOB+Qg4gpAAg3QAAgLAPgmQAQgsAMgRQBRhZAVAAQADAAAUAKQAWALAHABQAaAMAXAgQATAZAEASQgFADgHAJQgGAGgGAAQg2gBh5ABQgGAAgEAEQgEADgBADIAJAAIBrAKQgOAbgEAPQgHAZgCAtQACAZAEAOQAHAVAQAUQhCgIgzgkg");
	this.shape_112.setTransform(-4.5,25.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC99").s().p("AgIB1QgrgIgUgTIgEgCQgCgCgSgYQgSgYgEglIADgcIAAAAQATgtAkgbQAbgVARAAIALABQAEABAKAIQgFgCAIAGQgJAJAAAFIgCADQgKAAgPgJQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQgCABAAAGQAAAJATAKQAQAKAMAAIAYgBIASgDIAEgFQgJACgTgGIgTgHIAHgLIAAAAIAHgFQAigBAXAKQAaALAAAWQAAAZgOAPQgUAPgMALIgGAGIABACQACACAGAAQADAAAMgFQAPgIAGgHIAEgDQADgBABAEQAAAXgSAVQgSAUgdAJQAIAEAJABQANACAHgGIACgBQgFAXgQANQgQAMgYAAQgTAAgUgEg");
	this.shape_113.setTransform(90.4,44.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#445A6F").s().p("AgsBCQgCgPgJgSIAJAFIASAIQALAKAZAtQgtgYgHgLgAgvAVQgJgDAAgIQAAgKAOgbIARgfQAIAFAaAKIgKAmQgLAfAAAFIgjgKgAgLhJIAGgEQAOgKAOgLQAKgFAYAMIgFAFQgUAagJAAIgigNg");
	this.shape_114.setTransform(77.9,41.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FAD652").s().p("AhHAtQhIg6AFhEIABAAIABgMQADgKALgOQAMgQAPgIIDqBxQggATgYAqQgUAlAAAYQgCAXAAAZQhbg+gpgjg");
	this.shape_115.setTransform(35.3,19.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#66CCCC").s().p("AgIBuQg8gagCgDQgCgCglgSQgkgRgQgKQgPgKAFgzQADguAUgdQAQgWAogdIEJCAIgCACQgYAUgVAdQgVAggGAWIgGAeQACAXAHAUQhXghgXgKg");
	this.shape_116.setTransform(60.7,32.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#445A6F").s().p("AhoALQgBgHAVgUQAWgYgHALQAVAfgXAcQgcAkABAQQgHg9ABgKgAg5gkIAhgWQAngTAPgCQAHgBACADQAHApgTAHIgYAFQgRAFgPALIgMAHgABTghQgQgFgHAAQgDghAAgIQAogGAIARQABAKgEAiQgDgDgQgGg");
	this.shape_117.setTransform(5.4,43);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCC99").s().p("AAQBOQgPgegXhYIgEAKQgEAJgCAAIAAATQAAAIAJAfIAHAQQAEAHAAAGQAAAKgEABQgggCgJgIQgGgGgagwIgBALQgGAPAXAcQAUAXAOAHQgMAIgUgHQgSgGgkgjIgGgTQgFgRABgYQACgbAogvQAngvArgCQAbgDAJADQAIADAPAKQAEAEAJAiIAsANQAfAIAAALQAAALgMANQgTATgggCQgFgOgGgGIgFgDIACANQALA1ASANIAdAVQAKAIgDAMQgEAMgJALQgJAKgUAAQgoAAgagyg");
	this.shape_118.setTransform(10.7,54.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#66CCCC").s().p("AhnABQAghqAdgIQAegIAcAPQAeAPgJgCQA3AgABACQAGAFAeAnIgjBBQgSgJgNAAQhQAOgWAIQgVAHgXAOQgYAPgSASQgLgIAhhsg");
	this.shape_119.setTransform(7.5,28.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FAD652").s().p("AgoBLIgrgaQgtgXgYgHQAkhHBigrQBAgcAeAAQAHAAAOADIATAFIAAABQAPAIAKAKQAMAMAAAHQAAAOgKAYQgJAOh8CVQgXgegbgTg");
	this.shape_120.setTransform(20.8,12.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(28,29,36,0.322)").s().p("AgRAAIACAAIAYAAIAJAAQgFABgFAAQgOAAgLgBg");
	this.shape_121.setTransform(-15.2,34.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFCC99").s().p("AgKCXQgQgEgNgNIARhDQAFgWACgXQABgVAFgUIADgRIgDADQgGAPgFAPQgUBAgSBDIgHABIgMgFQgJgDgHgGQgXgWgFggQgHgxAWgrQAJAUASAJQAMADANACIAKgCIAshXIAAgYIgFAEIgJAMQgWAmgVAoIgOgFQgFgCgDgEQgHgHgEgKQgDgKADgIQAVguAfgoIAYgDQALADAPAAQAEAAAGgCIACAAIACABQAnAGAeAZIAAAAQAlAlgLA0IgPBKIgHAmQgFAagGAZQgCAGgEAFQgJAKgNgFIgLgFQgIglAAgmIAAgZIAAgMIgBgEQADgXAEgXQgHAPgGANQgHATgCAUQgDAcADAbQADAWAAATIgQAGIgGAAIgQgBg");
	this.shape_122.setTransform(-15.5,49.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#445A6F").s().p("ABABAQgDgWgNgUIAfgcIAUArIghAqIgCgPgAgNgZIAegjQAgALATAaIghAdgAgwgiQgYgCgaADIAlgtIA7ALIggAjIgOgCg");
	this.shape_123.setTransform(-7.8,36.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#66CCCC").s().p("AgBBDQgagjgqgNIgCgBIgFgCIgJgCIgpgJIgBAAIgHgBIgBAAIAHgHIAAAAIAAAAIAogqIAAgBIBchKQATAAAUAHIAIACIABABIAAAAQAQAHAOALIABABIAEAEQAgAcAMAnQAFAUAAAUIgLAJQgfAagdAcQgUASgUAVQgLgegPgZg");
	this.shape_124.setTransform(1,26.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FAD652").s().p("AgKBNQgDgNgGgMQgOgggagVIgCgCQgfgagmgJQAQgKARgIQAigSAjgNQAdgMAggEQAagDAbAFIANADQAZAJAHAcIgBAUQAAAHgCAGQgOAjgeAbQgsAngtAgIgFgcg");
	this.shape_125.setTransform(17.3,16.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFCC99").s().p("AgWC5QgngRgBgIQg3gzgHgJQgKgPgNghQgRgsAAgaQAAg3AbgjQAVgbAggKQgZAQgIAIQgGAGgEANQArgaAfgLIA4gRQgCgDAAgHQgDgEghAJIgLAAQAbgiAoAAQBIAAAABVQAAAGgMA9IALgSQAJgTAIgzQAUAQAJAUQAJAUAAAdQgSBUgLAZQAFgHAIgEQALgNAUg6QADASAAASQAAAxgxBEQgXAggEAHIgUARQgEAAgNADQgMADgMAAQgZAAgZgLg");
	this.shape_126.setTransform(7.6,4.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#445A6F").s().p("AAUCNQgegGgggiIAygmQANAOAhANQAoARAdgCIAAABIg8AnQgagBgRgDgAhkAMIArgbQASAaAiAoIgxAmQgWgcgYgxgAh0g4QgFgsgBgCIAdgqQgBAaAMAnQAIAfAIAPIgpAfQgFgKgEgsg");
	this.shape_127.setTransform(-1.4,15.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#66CCCC").s().p("Ag+BtQgngdAAg6QAAgZAKgjQAKghAag9QgKAoA0BdQA3BpA8ABQg2ATgRAEQgKADgLAAQgpAAgfgYg");
	this.shape_128.setTransform(-9.6,20.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FAD652").s().p("AANAQQBIhUgWgtQAHAMAMAQQAJANAAANQAAA5glAiQgnAnhpArQAyggA1hCg");
	this.shape_129.setTransform(19.8,17.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#374656").s().p("AABAgIgKgCQgLgHgKgQIAAABIgFgHIAKABIAAAAIAZABIAAAAIAOAAQAHALAKAKIAAgBQAIAJAKAHQgYgDgYgEgAgXgQIAAAAIgVgCIAAgBIgBgBIgBgFIgCgIIAAgFIAtAXIgUgBg");
	this.shape_130.setTransform(5.7,40.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#445A6F").s().p("AAKBMIgEAAIgrgXIAAgDIAAgLIAAgDQABgQADgOIACgIIAGABIAggBQgFAUADAUQACAUAIASIgFAAgAgXgVIgDAAIAEgLIAAAAQAKgeAQgNIAiACIgJAPQgKASgGASIgBgBIghACIgCAAg");
	this.shape_131.setTransform(4.5,31.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#66CCCC").s().p("AARCnQhEgUg2gxQgMgLgHgMIAAAAIgBAAQgQgfAJgpQAOhGAygvIAAgBQAbgaAmgbIAMAFIAAAAIACAAIAEACIABAAIACABIABAAIACABIACAAIABABIACAAIAvAaIAHAFIAEAEIAhAoIABACIAGALIAFABIAHAQQgMAEgMAMIgCgBIgogCQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQgEgBgEACIgBABIhcgHIgBAAIgfgDQgEAAgDADQgEACAAAEQABAAAeAEIBUAPQgMAPgJAWIgGAUIAAABIgBACQgDAJgBALIgEAgIgBAJQAAAUAIATIAAADIAAAAQAFANAKAOIABACIgHgCg");
	this.shape_132.setTransform(-1.3,26.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FAD652").s().p("AgBB1IAAgEIgDAAIgKgQQgRgmgegaQghgdgwgNIAMgIIAEgDIADgCIACgBIAcgRIAHgEQBTg0BLgVIgBAAIAFgBIACgBIAAAAQANAAASALIAKAHQAHAGAFAIIABABIADAFIACAEIACAHIACAGIABAFIAAADIAAABIABAFQACAdgPAYIAAABQgFAJgcAcIg6A2IgRANIAAABIgKAEQgCAEAAACIAAABIgLgDg");
	this.shape_133.setTransform(14.6,8.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFCC99").s().p("AgKB1QgtgEgcgbQgJgKgHgKIAAgBIgBgBQgMgUgCgYQgFgmAbgvQAUglATgDIAUADIAAgBIAHACIgFANIAAACIAAADIAAACIgBAAIgLgCIgBgBIgMABQAAABgBAAQAAAAAAABQgBAAAAABQAAAAgBABQgBADABAEQACAEAEABQAKAFAKAAQAXACAKgFIAAAAIAfgPQADgCABgEQABgEgBgEIgJADQgXAGgEAAIgFACIgBABIAAAAIgEAAIAAgCIAEgKIAAgDIACAAIABgDIABAAIAAAAIAAgBIAOgFIAKgEQAhgQAcAXQAKAMgCAUQgBALgGAMQgHAbgHAQIAEAAQAEAAADgDQASgWAIgUQASAjgXAhIgHAPQgGAMgIAHIAGABQAQgDAKgNIAAAAIACgCIABACIAAAAQABAFAAAEQgDAnglARQgiAPgmAAIgOAAg");
	this.shape_134.setTransform(18.6,33.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#374656").s().p("AABADQgDgBgUgJIArAGIACAJIgWgFg");
	this.shape_135.setTransform(15.1,37.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(28,29,36,0.322)").s().p("AgDgEIgEgLIAPAfQgHgJgEgLg");
	this.shape_136.setTransform(20.6,40.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FAD652").s().p("AgcBFQgZgagGgEQgngVgWgEIgNgDQAhgTAagSQAdgSBkg8IAZAGIAZAIQAdAaAAASQAAAugpAsQgnAsg2ARQgCgIgagcg");
	this.shape_137.setTransform(16.4,9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#66CCCC").s().p("AAOCBQgsgQgYgMQg/gjAAhAQAAgGAEgWQAHgeAIgSQAKgTAagfQAcghAJABQARAAASAGIAqAPQANAJAPAQQAVAXAAAOQgPgCg5ABIgBAIIBaAbQgXAjgJAVQgMAgAFAiIgBAVQAAAKAWAsIhWgdg");
	this.shape_138.setTransform(3.5,27.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#445A6F").s().p("AgaAwIgIgbIAZAHQANADALANIAKANQAGAAADAGQAFAJACADQg0gGgPgVgAgogEQABgUADgMQADgQAJgWQAJAEAcAEQgKAfAAAQIAAAUIgrgFg");
	this.shape_139.setTransform(16.9,36.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFCC99").s().p("Ag8BjQgPgJgTgVIgRggQgFgWAAgOQAAg5AqgkQAVgSAXgGQAFAAAHADIAMAFQgIAOAAAFIAAgDQgBgBAAAAQAAAAAAAAQAAABAAABQAAABAAABQAAgGgHAAQgIACgDgBQgIgBgDALQAIAPAWAEQAKABAJgBQAmgEAJgPQgegDgSACIgBgJQABgGAGAAIAbgEIAbgEQAKAAAMAHQASALAAAUQAAAKgOAdQgOAbgHAHIAIABQAIgBAcgiIADAJIABAOQAAANgKAVQgNAcgZAJIAGACQAIACALgFQAFgDAGgGIABAHQgEAdgTANQgWAPgxAAQgpAAgfgSg");
	this.shape_140.setTransform(31,34.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FAD652").s().p("AARBUQgpgOgLAAIhJAQIABgDQAGhBBDg/QA6g6AnAAQABAAAQANIAYAVQAFAGAAARQAAAYgMAkIgeBaQgJgHgpgNg");
	this.shape_141.setTransform(17.7,10);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#66CCCC").s().p("ABDCJQgjgKAAgHIgtgaQg0gegWgZQgWgZgYgoQgXgqgDg4QAlgcAkADQAMAFAUABQALABAnAPQAYAeAfATQAGADAQALQASAHAZAHQAdAJAPACQgNAAgNAkQgOAigLAyIgBAhIABAKQADAMAGAOIgzgNg");
	this.shape_142.setTransform(22.8,33.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFCC99").s().p("AhCBdQgwghAAg6QAFgeAOgfQAbg+AtAAQAKAAARAMIgKASIgYgJIgEAJQAJAOAWAHQAOAHAJAAQARAAALgFQAJgDADgDQgBgEgEgEIgEgFIgnAAIAJgMIAKgCQAMgDAGAAQAdAAARASQANAPAAARQAAAIgEAKQgKAXgZAZIAIgCQAIgEANgJQALgKAFgFQABAcgLAUQgOAZggAPIAIACIAHAAIAWgIIgCALQgCAuhMABQgqAAgngdg");
	this.shape_143.setTransform(55.7,41.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#445A6F").s().p("AAmBuQglAAgYgHQgugMADgtIBIAGIABAMQACALAHAAQACAAALANQAPAQAHAFIATAIgAhFAaIACgWIAHgpQACgDAEgPIA+AEQgCAFgDAVQgDAZAAAZIAAAGgAguhLQAWgjgGALIAAAAIBUgRIgSAaQgNATgGAAg");
	this.shape_144.setTransform(42.7,41.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCC99").s().p("Ag5AxQgMgxACg1IgDgCIgDgBIgKABIAAAeIAEAiIAEAlQAAAIgRARQgLgGgEgFQgJgPAAgdQAAgPAFgdQAHgmAJgIQAeALAbAAQA0AAAggNQARgIAPgPIAnAvQgLAJgMAAQgKAAgVgMQgYgOgEgBQgGAEAAAJIATA1QASA0ACAMIgDAIQgFADgKAAQgeAAg0huIgDgFIgDAIQAEANAKA0QAKA5AAAIIgEADQgEADgGAAQgQAAgNgzg");
	this.shape_145.setTransform(12.8,83.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#445A6F").s().p("AgYATQgGgcgEgPQAcgDAdgGIAPBJQgWAFgjAFIgFgfgAhVAcQAFgagGgdQALABAbABIALBGIgBADQgtgIgCgMgAAsAAIgKgkQACABATgGIAXgIIAFAjIAEAcQAAAGgMAGIgWAIIgJgig");
	this.shape_146.setTransform(11.3,70.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#66CCCC").s().p("Ag2DDIgngDIgCgnQAAg9ALhVQAKhFAIghQAKglAWg+IAgABQAWABATAGQAXAIAiATQgRAsgHBWQgHBVAFB0QhvAXgNAAIAAAAg");
	this.shape_147.setTransform(12,46.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FAD652").s().p("AgNBxQgrgRgHgBQgQAAgQACIASgtQANgcABAAQACAAASgbQAWgjAQgUIA8hGIgIgDQAlASgBABIANAIQgBALgbBfIgkCCIgtgTg");
	this.shape_148.setTransform(18.8,15.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#4E9395").s().p("AgEBJQgzg2gViBQA4AaAGABQABA8ApBDQAWAkAbAfQgzgDgegjg");
	this.shape_149.setTransform(-4.3,30);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("rgba(28,29,36,0.322)").s().p("ABHBCQgCgEAAgGIAHAOIgBAAQgCAAgCgEgAhLhFIABAAQAJAEAGAEg");
	this.shape_150.setTransform(-0.6,18);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFCC99").s().p("AgxBrIgPgFQgFgEgJgEIgHgFQgJgJgOgSQgNgRAAgCQAAg9ArgyQAqgxAlAMIgGAFQgMAFgYAgQgUAbgFALIABAFQAugiAggfQARgOAdAAQAIAAADABQAEACAAAHQAAAKgfAYIgdAeQgOAPAAAHIABAEIABABIAmgdQAPgMAWgOQAZgQAHAAQAGAAAEAJQADAGAAAEQAAACgKAMQgWAcgpBCQgbAsgPAGIgsABQgGAAgGgCg");
	this.shape_151.setTransform(-0.2,1.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#445A6F").s().p("AgSAwIgWgHIAFgyIABABIAMAFIAqADQgBAogCAMQgRAAgSgEgAAlAyQAAgdADgOQAGgWADABQAPACAPgGQAAAAAAABQAAABAAAAQAAABABAAQAAAAABAAIADAzIgOAAQgKABAAAGQAAAIgMAAIgLgBgAhGATQgEAAgEACQgGgBAAg2IABgRQAGAHAOAMQAKAHAAAGIgGAyQgGgLgFgBg");
	this.shape_152.setTransform(-4.1,14.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FAD652").s().p("AgMBOQgUgZgPgFIgcgNIgNgFQAMgGA/hVQAEgHAPgmQAMgZANgBIAUAGIAIAEIAAAAIAIAHQANAPAJAlQAAAjgKAYQgHAUg6B1QgFgbgVgcg");
	this.shape_153.setTransform(19.3,14);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#66CCCC").s().p("AhSAtQgrhDgBg8QAVAHAqgJQAWgGASgHIgBAGQAAADAGAAQAGAAACAJIAGASQAAAGACADQACAFAAgBQAQAagBANQgBADAZAMIgTg8IgTgrIAFgGQAGgIAGAAIAsARQAVANAVAkIASAiQAGAAgBADIgDAIQAAAKgeAgQgCADgoAiQgoAbguAGQgagggWgjg");
	this.shape_154.setTransform(6.8,29.9);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FAD652").s().p("AgGBxQgXgWgTgNIgQgKQgGgEgSgIQAkgoAohHQAhg+AKgjQAOARAOAUIAAAAIAEAHQAIAOAJAlQAJAiAAAQQAABBhBBeQgEgNgagag");
	this.shape_155.setTransform(18.3,11.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#66CCCC").s().p("AhTBHQg0gjgOgiQAjgGAQgHQAegKAaghQAWgcAFgWQAFAJAdAhQAiAlAKAGIAEAAIguhBIAOgPQAUAJATAMQAYAZAlAiQAPAMAAAHQgBAOgTAUQgLALgWASQgeAcgYAIQgOAFgZABQgkgBgzghg");
	this.shape_156.setTransform(4.5,28.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#445A6F").s().p("Ag7BCQgGABgDgEQAMgGANgKIALgIQAJANAIAIQgHACgTACQgMABAAAFQAAgFgGABgAgGAmIgJgLQAqgpAEgGIANAMQAGAGABAEQgBACgTAUQgVAWgJAFQgBgDgGgKgAAqgmIAIgWIACgJIAJAMQAIAOAAAGQAAAKgJAMg");
	this.shape_157.setTransform(-5.3,20);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFCC99").s().p("AgpCJQgKgHAAgQQAAgUAWgHQAmgOAlgiQgKgCgKgFQgWARgSAOIgBAAQgnAVgOAUQgIAKgQABQgHgBgCgBIgKgFIAAAAIgGgEQgEgEAAgGQAAgSAfgOQA6gaAhgZIgKgNQggAThWAtQgKAAAFgDIgDgSQAJgXBCgjQBBgmADgHQgTgRgIgKQgMgQAAgUQAAgSAfAAQAKAAAMAWQAOAdASALQAgAEARAJQAhASAAA9QAAAYgtAyQg1A7g4AAQgOABgJgIg");
	this.shape_158.setTransform(-15.7,11.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("rgba(28,29,36,0.322)").s().p("AgEABQAFgDAEACIgJACg");
	this.shape_159.setTransform(-8.4,-12.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#445A6F").s().p("AgKAjIgWgCQABAAABgPIABgTIAkAAIAPgDIACAmIgLABIgJAAIgOAAgAhPAFQgCgJgCgYQAiAVABAHQgEAKAAATQgYgEgDgUgAApgMQAAgKAlgMQAGAjAAAKQAAACgPAGQgPAIgKABg");
	this.shape_160.setTransform(-10,-9.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFCC99").s().p("AhVCCQgngLAAgXQAQhhAGgRQAMgeAdgdQAYgYAGAAQAFAAAGAEQAHAGAAAKQAAAKgNAbQgRAjgJAdIAMgIQANgIAJgYIAQgjQAHgSAAgGQAAgXgFgGIgLgHIAGgEIAAgBIAogRQALAFAAAQQAAAGgNAbQgYAvgLAcIAGgDQASgKAWgrIAUgoQAGAAgBgGIgCgKQgBgEAMAEQALgGAAAWQAAALgaA3QgaA2AAATQAAAHACAAIABABQADABAcgGQAcgJAFABQAKAAgEABIAKAHQAEADAAAHIABAEIgCAAQgFABgEAFQgGAIgJADIAAAAQg2AYgJAKQgKALgoASQgEgCgHAGIgLACQgdgCgUgGg");
	this.shape_161.setTransform(-6.3,-25.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FAD652").s().p("AhQBdQAJgVADgNQAFgTABgeQgSg+gEgHQAwgEAjgMQAcgKAKAAQAGAAABgHQADABAmAdIgIAKIAEAHQAFA8gJASIgWAVQgJAJgyAPQgwAPgWAAIgGAAg");
	this.shape_162.setTransform(20,11.2);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#66CCCC").s().p("AhDA/QhLhFgEh2QAcAKAJABIArADIANgBIAAAAQAIgBAWgHQAYgIAQgHQATBeALAaQADAGAMAKIAEgCIAAgZQAAACAeAGQAfAHAGAKQALAUADAiQAAAogDAQQgEAYgNAAQh5ABhJhIg");
	this.shape_163.setTransform(-3,7.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#66CCCC").s().p("Ah1BjIgHgMIANhEQAPg3AfgzIAAAAQARgeAVgYQAwASAyArQAMAKAYAjIASAaQgcAcgXAhIgTAeQgRAZAGAVQgNgDgGADIgDABQgcALgYACIgFAAQg0AAgegrg");
	this.shape_164.setTransform(-2.4,-21.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#445A6F").s().p("AASAtQAWgOAsgjQANAXAFAeIghAdIgTASQgFgYgbgbgAgmgCIgNgJQAMgHAcgYIAhgdIADACQAfAVATAdQgXARgqAmQgSgTgegTgAhlgjQAmglAxgWIAVANQgWAOgyAwQgUgMgQgEg");
	this.shape_165.setTransform(6.6,-33.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#66CCCC").s().p("AhVBHQgwgjgNgjIA6gTQAZgKAWgfQASgZAFgUQAGAJAcAhQAiAlAKAGIAEAAIgthBIANgPQAYAMAXAPIA2A1QAOAMAAAHQAAAbgnAgQgYATgfAPQgbAMgZAAQglgBgxghg");
	this.shape_166.setTransform(4.8,28.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FAD652").s().p("AgQBoQgSgOgJgHQgggVgNgGQAkgoAohHQAgg+ALgjQAUAYASAgQAUAbAAA5QAAArgXAvQgNAcgdAuQgYgggQgQg");
	this.shape_167.setTransform(18.4,11.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#445A6F").s().p("AgzA8QgOgRgPgOQAUgDAKAAQADAAAPAIQATALAKAOQgdAKgJAAQgCAAgIgJgAgOAQQAIgCATgOQATgLALgKIALAKQAGAGADAGQgDAEgVAVQgWAWgEACQgEgOgXgUgAA2gnIAHgSIAEgLIAQAeQgCAEgHASg");
	this.shape_168.setTransform(-6.5,20.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFCC99").s().p("AgcBCQgiggAAgtQAAgKAKgIQAIgHAKAAQAPAAAIAUQAMAeASAUIAEgDQAAgIgPgjIAGAEIAAADQACABAGAAIAHgBIABgCIgUgYQgPgUAAgUQAAgIAFgGQAHgGAJAAQALAAATARQATAQAFAAQAqAAAMARQAIAMAAAfQAAASgaAeQglAqg4AAQgQAAgZgagAg4BLQgSgMgLgYQgLgVAAgQQAAgOAMgPIAOgOIABACQgNAXAAAEQAAARALAgQANAkANAHgAh8AaQgHgQAAgQQAAgMARgPIAYgRIgIALQgSAbAAAJQABAQAFAYIADAMQgKgIgHgPg");
	this.shape_169.setTransform(-14.7,11.9);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#374656").s().p("AgGAPIAFgdIAAABIAIAbIgJABg");
	this.shape_170.setTransform(6.3,54.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#445A6F").s().p("AgrBRQAPgIAYgZQAOgRAegCQgLAsgDAEQgIALghAAQgJAAgTgHgAAQAPIAAhLIAcAAIAABLgAAUhOIABgJIAFABIALgBIACAJg");
	this.shape_171.setTransform(3.4,65.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFCC99").s().p("AhEBrQgOglAAhGQAAiBAngjQANgMAQgBIASABQgMAWgWBDQgUA/AAARIAAAbQAfhvAGgRQATg+AWAAQAOAAAJAIQAQALgBAdIgEgDQgggHgXA8QgTA0AAA5IABAUIABgUQACgWAOg0QAJgeAUgQQAPgNANAAQAJAAADAEQAIAGAAASQgBAGgCALIgOBAIgCAPQgDASgBAPQgCA8gCALQgIAXgDAIQgIAPgOAAQhDAAgYhHg");
	this.shape_172.setTransform(-3.4,53.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FAD652").s().p("AgSBiQg/gNgEAAQAchhATguQAihTA1gCIACAAIABgFQALAKALAaQAMAeAAAdQAAAKgRCIIgCAOQgCASgGAYQgbgdgygWg");
	this.shape_173.setTransform(24.1,15.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#66CCCC").s().p("AhTDGQAHgaAAgfQAAglgFgRQgGgVgBgMQgFgQgKgWIgJgRQAJgNALgYQAYguANhIQAUg7AEgQIAWADQAXAFAWAGQAfAIAZAXIAVAaIAAACQgIA0gjBhQgjBgggAvQgIAfgpAiQgeAYgTAJQAIgUAEgOg");
	this.shape_174.setTransform(18.1,49.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#445A6F").s().p("AAYBeIhRgNIACgTQAHAFBFAWIASAEQgBACgFAAIgJgBgAArBKQgQgEgqgQQgugQAJAAQAJAAgIgJIANg4QAGACAfATQAKAGAxAAIgEAfQgFAjgCAIgAgfguIAbgwQAQAJAlAJQAGAcADAcQhKgUgPgGg");
	this.shape_175.setTransform(25.3,50.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FAD652").s().p("Ag2CKQgFgIgWgXQgWgXgFgCQgPgHgVgFQgTgEgHAAQAYglBShOQBJhJAOgCIgOgDQABgEAEgDQADgDAEgBIABAAQATgBAMACIATAEQAeAKAiARQAcAPAHAHQgEAJgDACQgEACgHgFQhRBCguAxQgVAXg6BNg");
	this.shape_176.setTransform(20.8,9.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#66CCCC").s().p("Ag5B1QhLhHAAhPQAAgGADgVIAEgUQAEAAAYg6QAXg6AKAAQAGAAARADQAUAEAMAFQASAMAkAwQAAAMgTAcQgXAigIAhIADABQACgBAEgFIAWgpQATAYAnAbQAbARAWAMQgdA6gEAAIgOBEIAAAAQgDARgFAlQhIgSg/g+g");
	this.shape_177.setTransform(9.5,38.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFCC99").s().p("AgpBVIgeg9QgTgjgWgUIgBAKQAAATAQAmQAWA5AnAjQg+gtgagoQgYgoAAgwQAAgxAggdQAggeA1AAQAUAAAaAPQAWALAFAGQAtA5AmANQAMAEADAFQADAGAAAZQAAALgIABQgGACgcADIg9hIIgBgBIgJADQAWAwA3A8QAqAvAAAiIAAAIIgCAEQgBABgKAAQguAAgog5QgyhRgkg2IgHgMIgBAMQAAAbAWAhIArBGQAQAdADADIAuAnQgJAHgUAAQg9AAglhFg");
	this.shape_178.setTransform(-14.1,16.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FAD652").s().p("Ag0CEQgQhYgEgLQgBgFgUggQgUgjgGgFQBQgbAogrIAWgZQAKgKALAAQAOAAAQALQAOALAEAMIATAwQAJAWAAAOQAAAegWAjQgtBLhuApQAFgIAAgKg");
	this.shape_179.setTransform(20.7,17.2);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#66CCCC").s().p("AiRBPQAFgDAKAAQA0AQAFAAQAQAAAUgHQATgHASAAQAZAAALgQQAGgIAAgKQgEgngHgJIgngwIAAgBIAAAAIABAAQAUAAAOgRQARgUgLgaQApgFAXAfQANASAVAqQAKANAEAXQABAMAAAZQAAAfgMAMQghAgh1AAQhGAAg7gng");
	this.shape_180.setTransform(-1.2,24.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#445A6F").s().p("AhABRQAMABASgQIARgQQAHgBAQAHIARAFQgDAFgNALIgSASgAgDAhQAOgaACgLQACgIgBgSIAwARQgBAHgKAXQgKAbgEAAQgKAAgegLgAAOgyQAEgnABgFQANAAAQANQAWATgHAbg");
	this.shape_181.setTransform(-28.2,-15.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFCC99").s().p("AgWCFQhUgUgjgKQgTgFgJgPQgHgLAAgPQAAgGAWgHQATgGANAAIBEAFIgCANIADAIQAvhvAGgNQgNgGgxgRQgqgTAAgaQAAgEAKgJQAKgIAKAAQAOAAAKAEIBBAfQAuAXAJAGQAbAXgIAmIAIAGIACACQAPhqAnAAQANAAALAKQAKAKAAAKQAAAFgMAxQgNAwAAAJIgBAKQACArgNAaQgOAagJAAIgXANQgaANgPAAQgHAAhOgRgAg/AJQg6ACgogZQgTgOgGgPQAAgcAiABQAQAAATAGIBZAkIgGAVQgGAQgTAAIgEAAg");
	this.shape_182.setTransform(-44.9,-23.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#66CCCC").s().p("AgSBZIg2gRIhPgXQAnghAFgHQANgPAQg0QAEgegIgnQAkAMA5AZQBGAdA4AcQATA0gGAVQgCAPgZAjIgaAmIhzgng");
	this.shape_183.setTransform(-12,-10.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FAD652").s().p("AAXBkIiuhCQAPgJARgYQAVgaABgYQABgMgCgXQgDgWgEgPQBkAxA+AiIAzAbQAIAEAAgCQAJAJAKAOQALARAEANQAHAVgQAcQgSAdgZAAQgOAAg9gWg");
	this.shape_184.setTransform(14.9,-0.1);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("rgba(28,29,36,0.322)").s().p("AAAgFIAAAAQABAGAAAFQgBgGAAgFg");
	this.shape_185.setTransform(-15.3,24.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FAD652").s().p("AgpBaQgJgegNgOQgTgXgsgeQA5gbBDg0QA0grAMAAQAHAAASAGQASAGAFAFQAQAZABAYQAAAmgoA0QgvBBhJAmQABgOgJgag");
	this.shape_186.setTransform(18.9,13.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#66CCCC").s().p("AhKAPQAAgGgCgIIgCgFQgVgwgSgVQBAgHAmgQIAhgOQAVAAAXAWQAGAGATAaQAGAMAMAjQANAjgBAHQhDAjgoAQQg5AXgzAEQAYgsAAg0g");
	this.shape_187.setTransform(1.9,24.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#445A6F").s().p("AgzBdQAjgsgEgKQAmACAegDQgHATgUAkgAgDgLQgBgKgDgMIgDgKQAcAAARgDIAMAYIAAAAIAEAMQABALgBAPQggAFgdACQAGgWABgMgAgqhTQgMgJA4AAIASAXQgOAAgeAEQgKAAgIgSg");
	this.shape_188.setTransform(-12.7,26.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFCC99").s().p("AggB9QgTgMgBgPQABgGADgHIAEgHQBggXAWgQQAGgGACgGQACgHAEgCQgUALgkAIIgqAIQgiAJgRAHQgQAGABAUQACATgSAEQgSADgLgJQgNgLAAgOQAAgPAJgHQAKgGAfgGQBUgOATgUQgcACg7ANQhKARgMAQIgHgFIAIgaQBtgoAXgNQAFgDATgTQgCgKgJgGIgLgFQgPgSAAgXQABgHAEgGQAIgNAVAAIAdAXQAiAWAVAEQAeAFAYAZQAMAMAHAOIABACQAAAGAEAGQgEA1glAsQgvA3hKAAQgOAAgSgLg");
	this.shape_189.setTransform(-31.4,26.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#445A6F").s().p("AhbgOQAVgFgBgKIAJArQgDADgQAeIgSAjQgKhQASgQgAg6gkIAggWQAogTAOgCQAIgBACADQAHApgTAHIgZAFQgQAFgPALIgNAHgABRghQgPgFgHAAQgEghAAgIQAogGAJARQAAAKgDAiQgEgDgQgGg");
	this.shape_190.setTransform(5.5,43);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFCC99").s().p("AAPBOQgPgegXhYIgEAKQgEAJgCAAIAAATQAAAIAJAfIAHAQQAEAHAAAGQAAAKgEABQgggCgJgIQgGgGgagwIgBALQgGAPAXAcQAUAXAOAHQgYgCgcgMQgigPAAgSQAAgFgEgKQgEgKAAgFQAAgxAogwQAngvArgCQAbgDAJADQAIADAPAKQAEAEAJAiIAsANQAfAIAAALQAAALgMANQgTATgggCQgFgOgGgGIgFgDIACANQAKA1AbAQIARAIQAHAFAAAJQAAAcgJALQgJAKgUAAQgoAAgagyg");
	this.shape_191.setTransform(10.8,54.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#66CCCC").s().p("AhlgEQAihtAZgFQAZgEAXAMQAZALAEgBIA6AsQAGAFAeAnIgjBBQgSgJgNAAQhQAOgXAIQgUAHgXAOQgYAPgSASQgKgRAihrg");
	this.shape_192.setTransform(7.5,28.4);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FAD652").s().p("AgoBLIgrgaQgtgXgYgHQAkhHBigrQBAgcAeAAQAHAAAOADIATAFQAPAJAKAKQAMAMAAAHQAAAOgKAYQgJAOh8CVQgXgegbgTg");
	this.shape_193.setTransform(20.8,12.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#374656").s().p("AgLgKIAIgHIAPAdIgHAGg");
	this.shape_194.setTransform(-6.3,36.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("rgba(28,29,36,0.322)").s().p("AAIgOQABABAFgHIgbApIAVgjg");
	this.shape_195.setTransform(-6.2,42);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FAD652").s().p("AhnAQQgPgQgsgUQBTgxA9gTQAggLAYAAQAHAAASADIAbAFQA0AVAKAHQALAHAAAMQAAAjg/AfQhdArg8AjQgUhBgegTg");
	this.shape_196.setTransform(20.4,8.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#66CCCC").s().p("AiKBBQAAgWAHgcQAIghAQgVQAhguAkggQAmglAYAAQAIAAA4AjQAJAKAqBMQhmBEgGAJQAaAGAEAEQgLABAAABQghAFgKAAQgQAAgPAHIgsAbIg3A8QgPg5AAghg");
	this.shape_197.setTransform(-0.6,22.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#445A6F").s().p("AhbAwQgHgLAAgGQABgGAJgMQAPgOAIgKIATAdIgeA2IgPgYgAgqggQAxgcAFgBQgBABAAAAQgBAAABAAQAAAAABAAQABgBACgBIAMAaIAAACIgbAQIgaAQgAAsgsQgJgFgBgGQABgHAJgEQAJgFAOAAQANAAAJAFQAJAEAAAHQAAAGgJAFQgJAEgNAAQgOAAgJgEg");
	this.shape_198.setTransform(-2.3,37.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFCC99").s().p("AhoBAIgVg/QAAgEADgFIAFgJIAcgrIACgCQAhgcAvgOQAhgKAdAAQAPAAAMAPQAMAQAAAVQAAAKgVAFQgQgTgJgQIgDgIQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBACAAAGQAAApAVARQALAJAVADQgCgRgDgGIAPgLQAXAZAAAVQAAAWgPAQQgRATgaAAQgmgCgSgNIgFgDQgFgDgBADQAGALANALQAPAOALAAQgNAagUAAQgqgEgVgXIgJgKQAEAVABADQAGALAWANIgLABQgoAAgbgzg");
	this.shape_199.setTransform(4.1,46);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#445A6F").s().p("AheApQAHgkAUgMIADAHQADAKAAAGQAAAGgKAOQgNASgEAIQgGgLAAgKgAg5gTQAPgNARgMIArgNQAFANAFALQgcAJgPAJQgLAFgUAMQgFgNgGgIgAAmgpIgJgQIABgBQAjgFAQACQAOACAAAJIgBALIgWABIgfACIgDgFg");
	this.shape_200.setTransform(-4.4,30.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFCC99").s().p("AhaBPQgbghAAgcQAAgFgCgNIgEgUIA/hFQAnghA0AAQAeAAASAQQASARAAAbQAAAKgWAEIgbguIgBASQAAAVAKATQAOAYAWADQgDgPAHgLIAIgJQAJAMAKAkQAAAQgHAPQgNAdgfAAQgXAAgtgWIgCAEQAEAKAQAOQASAPAOgCQgEAUgOAHQgIAEgHAAQgKgBgNgHQgcgNgWgcIgBAFQAHAdAaAYQgogHgfglg");
	this.shape_201.setTransform(-0.1,40.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FAD652").s().p("AgzAmQgNgdgWgOIgpgWIARgJQAcgMApgYQAkgRAfgBQAMABAGgCIALgBIAJAEQALAHAJAEQAQAPAOATQAOAWAAAKQABAFgHAJQgHAMgHAEQgZARg2AZIhDAhQAAgdgNgbg");
	this.shape_202.setTransform(17.7,7.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#66CCCC").s().p("AhZgJQAsg7BSg6IAHACQACAAAlARQAbAcAJAOQALAUAAAcQAAARgaANQgNAHgVAFQgVAFgwAGQguAHgaASQAEgFgYAXQgcAcgKAUQgEhQAsg4g");
	this.shape_203.setTransform(-1.3,18.3);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#374656").s().p("AAAABIAAgBIAAABIAAAAg");
	this.shape_204.setTransform(-21.6,-4.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFCC99").s().p("AASBeQgigQg9gLQgagEgQgRQgQgRAAgaQAAgfAngkQAtgqA9AAQArAAAoATQArAVAAAdQAAAHgBABIgEAEQgLgWgogNQgogOggAIQA4AEAjAdQAbAWAAAQQgDAfgQAKQgLgfgmgRQgmgSgxAAQgKAAgOACQBOANAlAZQAeAVAAAbQAAAngfAAQgPAAgcgNg");
	this.shape_205.setTransform(-4,-11.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#445A6F").s().p("AAUBJQgSgGgrgVIgWgMIATgpIAJAEQAZAFAcABQAYABADADQgHAmgBARQAKAOgLAAQgFAAgLgDgAA1BDIAFg2IAxAQIAKARQgUAVgoAAIgEAAgAhxgRIAAAAQAAgTATgnQAIAWAMARQALARgFAYQgBAJgGAAQgLAAgbgfgAh0gSIABgDIAAAEg");
	this.shape_206.setTransform(-9.9,-2.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#66CCCC").s().p("AAwBqQhRgZgUgNIgSgNQg1gigchDQgSgugBgbIABgDQARAXAiATIAhAPQA4ASAkAAQAQAAAPgEQAHgCARgKQAPgJAGAAQAGAAASAIIAnATQAVAIAEAcQAEAUgGAnQgGAVgIAOIgUAgQACAGgNAAQgTAAg4gRg");
	this.shape_207.setTransform(-4.9,10.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FAD652").s().p("AhRBhQAEgIAJgbQAIgaACgMQABgKgIgjIgJgnQAZACAXgFQASgDAegTIAdgSQAMAAAMAUQAGALAEALQARA4g6AxQgzAvhRANg");
	this.shape_208.setTransform(19.6,12.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FAD652").s().p("Ag/ArIAEgeIABgRQADgmgPggIAAAAIgEgJIANAAIABAAQAWgCAVgGIgBAAIAMgBQADAAACgCIAEAAIApgIIAAAAIAagHIADACIAAgBQAIALADAMIAAAAQAFAOAAAPIAAAAIAAADIAAAFIgBAGIgBAEQgFARgHAQIAAAAQgNAdgZAYQgZAXgeAPQgCABgCACIgFABQgbAMgeAIIAAAAIgEAAQAVgfAEgkg");
	this.shape_209.setTransform(18.2,6.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#66CCCC").s().p("AgJBxIAAAAQgcgEgZgJIgBgBQgWgGgUgLIgBAAQgSgIgRgLIgBgBIACgBQAdgNAWgUIAAAAIACgCIAMgNIABAAIAPgOQATgUAQgXIABgCIAGgLIAAgBQANgbAEgfQAVANAZAHIAAAAQAhALAkACIABAAIAHAAIAJAQIAAAAQANAcgDAgIgCAXIgDAXQgEAhgTAbQgJAMgOAFIgzABIAAAAQgaAAgXgEg");
	this.shape_210.setTransform(-3.9,7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#445A6F").s().p("AgvBiQgUgQgSgTIgKgLQAVgCAcgRIAGAEIAFAEQABADADACIAiAbQgOANgUAJIgMAFIgEgCgAAAAtIAAgDQAAgDgQgQIgHgGIAAAAIABgCIAGgEIAQgNIAAgBQASgRAOgRIACAEIADAEQAPATASALIgBACIgXAdIgJAJIgBABIgJAJIAAAAIAAAAIgJAJgAA0gpIgBgBIgBgCQgCgCgCgBIgCgBIgEAAQASgZAIgaIAWARIAAAAIAIAGQgDAhgNAdQgPgMgNgPg");
	this.shape_211.setTransform(-15.6,1.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFCC99").s().p("Ag5CiIgBAAIgEgBIgBABQgKgLgIgNQgVggADgkQABgfALgcIABAAIAAgBIABgFIAEgEQALgVAUgPQAWgRAagCIAEALIAAAIIAAABIgCASIAAAEIAAADQgEAGgHAEIAAAAIgkAdQgDADAAAEQgBAEADADQADADAEABQAEAAADgDIAigcIAAAAQAKgIAGgJQABgEgBgDQADgCAAgDQADgLAAgKIAAgGIAIgEQgBALAHAMIAAAAIAIALQADADAEABQAEAAADgDQAEgCAAgEQABgFgDgDIgHgJQgDgGAAgFQACgQAJgNIABgDIAAAAIAAAAIADgGIAHgCQADACADAAIAGARIAAAAQAHAWACAVIAEgEIABAOIgBAYQAAALADAEQgQAmgpAoQg5A4gfAAIgMgBgAALhFIgEgEIgFgBQgYAAgWAMIAFgIQAVgcAbgRQAMgHAOgGIAOAJIAAAcIgEAIIgBABIAAAAIgFAGIgBAAQgKALgMAGgABFh8IgCgFIgDgDIgWgPIgEgCIgDAAIAFgDQAYgSAZAOQAGAFAGAGIgDAMIAAAAIgGAKIgHAJIgBABQgHAHgIAEg");
	this.shape_212.setTransform(-20.4,-10.9);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFCC99").s().p("AhdBYQg0hYAThAIADAAIACAAQAHA7AHAQQADAIAOANIAEABIgEg7IgCg1QAAhOACgHQAFgTAfAAQAHAAAEABIANAFQgKANgGAPQgLAbAAAnQAAAZAJAiQANAsAVANQgCgKgHgoQgHgtAAgLQAAg6ALgUQAJgPATAAQAUAAAIAXQAJAXANBXQACAOAIANQAMAVAkArQAFAGAEAMQAGASAAAWQAAAfglAVQgdAQgTAAQhUAAg4hgg");
	this.shape_213.setTransform(-41.3,-21.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#445A6F").s().p("AhaAqIAJACQAGAAAPgCIAWgCQABAAARAUQATAXAGAGQgLAEgUAAgAAGA+QgTgTgIgFQAhgGATgXQANgVADgCIALAJQABABAMAGIAPAJIgSAdQgUAdgVALIgVgSgABZgFIgDgBIgJgIQgFgFgFgDQgSgHgEgYIgDgnQAWALAOAaQALAWACAYQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIAAAAg");
	this.shape_214.setTransform(-30.4,-5.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#66CCCC").s().p("AglBpQh+gfgeglQAYAFAmgiQAmggAFgfQAJgbAAgQIgEgOIgIgUQBPAlArAQQAOAGAyAKQApAIAWAMQAPAJAFAOIADATQAHANACAKQAFAfAAAQQgRBAgTAAQhTAAhxgcg");
	this.shape_215.setTransform(-11,2.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FAD652").s().p("Ah4BWQALgMAFgOQAHgUAAghIgCgbQgBgEgMgbQgMgdgFgGQA3AFAcABIBFgEQAygDABgCQAXACAQAPQARAQAAAYQgRBAhPAjQgzAXg6AAQgWAAgXgEg");
	this.shape_216.setTransform(20.6,7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FAD652").s().p("AgrBOIAAgBIAAABQgDABgYgvQgQgRgogeQANgFBTg2QBNgxAPgDIAoAMIAAAAQAAAEAMALQANAKAAAgQAAAmgoAyQgvA/hJAhIgKgxg");
	this.shape_217.setTransform(18.9,12.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#66CCCC").s().p("AhKANQAAgGgCgHIgDgJQgBgGgMgVQgOgbgLgOQBAgFAngNIAggMQAVAAAPAPQAJAIASAZIAQAeIAVBHQg2Aag3ASQg+ATgtADQAYgqAAg1g");
	this.shape_218.setTransform(1.9,22.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#445A6F").s().p("AgxBZQAPgPAJgRQAIgOgBgFQApAEAYgCQgGATgVAjgAgKAUQADAAACgRQACgOgBgJQgBgHgDgJIgDgIIAFAAQAAABAQAAIAYgCIALAWQAGAYAAASIgzAEgAgyhdQAhABAVAMQALAGAEAGQgGAAgbAGQgcAAgIgfg");
	this.shape_219.setTransform(-12.6,24.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFCC99").s().p("AgiBeQg1gqAAg+QAAgZAMgQQALgSAWAAQAHAAAFAQIAJAlQAPA5AjASIAOACQgPgRgPgbQgQgdAAgNIAUAHIAPADQgBgOgUgRIgUgQIgBgBIAGgDQAEgDAFgBQAWAEAXALQAvAWAOAlQABAKAEAHIACATQAAAUgOAgQgRAogVAAQg2AAgugmgAh2grQAAgYAJgQQAOgZAdADIAGARQgNAAgSAZQgSAXgDAOIgCANQgEgTAAgLgAguhtIgLgRIASgFQAHAHAEAIQAEAGgBACQAAALgBAAIgCADQgEACgFABQgBgEgIgOg");
	this.shape_220.setTransform(-27.2,19);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FAD652").s().p("AgwBDQgNgZgPgRQgQgSgigWQANgFBTg2QBNgxAPgDIAiALQAJAGANAHQAJAKAAAjQAAAmgoAyQgvA/hJAhQgFgigKgag");
	this.shape_221.setTransform(18.9,12.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#66CCCC").s().p("AhSBKIAGghQAFg/gug3QBAgFAngNIAggMQAZAAAaAiQAVAaAJAZQAIAWALAqQg2Aag3ASQg+ATgtADQALgKAFgYg");
	this.shape_222.setTransform(1.9,22.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#445A6F").s().p("AgxBZQAPgPAJgRQAIgOgBgFQApAEAYgCQgGATgVAjgAgKAUQADgIgBgZQgBgZgCgGQAbgBAKACQAZADAAApIAAASIgzAEgAgyhdQAhABAVAMQALAGAEAGQgCgBgZADIgGAAQgdAAgHgbg");
	this.shape_223.setTransform(-12.6,24.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFCC99").s().p("AgYBlQg+gqAAhFQAAgZALgQQAMgSAWAAQAKAAAIAmQAFAVACASQAVA2AnAAIgMgOQgSgUgLgaQgFgQgBgLQAXAJAMABIgEgOIglghIAFgEQAEgDAFAAQAUADAVAJQAqASAOAdQAFAIAGAbQAFAdgBAGQgDAQgHAMQgHALgLAOQgQATgGAAQgvAAgsgfgAh1gqQAAgYAJgRQAOgYAdACIAGARQgNAAgTAZQgSAXgDAPIgBAMQgEgTAAgKgAguhtIgKgQQATgNAJAOIAEARQAAAKgBABIgDACQgDADgFAAQgBgDgJgPg");
	this.shape_224.setTransform(-27.2,19);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#445A6F").s().p("AhaAqIAagBIAagBQABAAARAUQATAXAGAGQgLAEgUAAgAAGA+QgTgTgIgFIAVgJQAWgKAIgIQAPgLgDgTQAlAbAHADQgLAYgaAbIgGAGIgQAMIgVgSgABZgFIgDgBIgJgIQgFgFgFgDQgSgHgEgYIgDgnQAWALAOAaQALAWACAYQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIAAAAg");
	this.shape_225.setTransform(-30.4,-5.2);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#66CCCC").s().p("AglBpQh+gfgeglQAPgBAUgIQAZgLALgQQARgJANgjQANggAAgYQAAgFgLgcQCFBABIAQQAqAKASAWQAOARADAgQAEAigEAXIgOAdQgLASgHAAQhUAAhxgcg");
	this.shape_226.setTransform(-11,2.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FAD652").s().p("Ah5BXQAHgFAHgSQAFgOABgKQgCgnAFgOQgBgJgeg/QA2AFAcABIBFgEQAygDABgCQA5AKABAhQgBAggbAcQgdAthHATQgnAKgsAAQgUAAgVgCg");
	this.shape_227.setTransform(20.7,6.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FAD652").s().p("AgnBOQgPgZgEgFQgkgfgigMIgKgEQCmhuAXAAQAKAAAQALIAgAZQATAUAJAXIACAPQAAAMgbAXQgrAnhbAzQgCgGgPgag");
	this.shape_228.setTransform(19.4,9.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#66CCCC").s().p("AghBVQgJgOgXgLQgbgPgUgDIgSAAIgKAAQAdgkAxgxQBEhLARABQAVgBAaASIAmAXQAFAIALASQAMAXAFAOQgtAhgTAIQgOAKhMBRIgUghg");
	this.shape_229.setTransform(0.8,23.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#445A6F").s().p("AAgAgIgHgPQAQgXAJgDQAJAKAMAUIgfAhIgIgWgAgGgQIgMgGIgJgDQARgXACAAQAHAAAIAGIAJAFQAQAKAEAEIgXAXIgTgQgAhGgeQAGAAACgFQAEgKACgDQgFgFAKAAIAZABIgYAYg");
	this.shape_230.setTransform(-9.2,34.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFCC99").s().p("Ag7BVQgdgTgTgvIgEgQQAvBBAIAFIAJAAQgUglgZgaQgZgYAAg3QAAgKAHgKQAHgNAOgGIAJACIAHACIgKATQgHAPAAACQAAAvAnAyQAkAxAWAAIAHAAIADgCQAAAFAAgKQhKhUgCgHQgMgcAAgTQAAgOALgHQAGgEAHAAQAFAAAgA8QAgA9AlAMIAKgCIgVgVIgZgYQBfAMAAA1QAAAyhLAAQhDAAgjgYg");
	this.shape_231.setTransform(-19,34.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFCC99").s().p("AiNBEQAAgQAMgUIATgQIASgQQAAgKAfgFIA9gHIgEgGIgRgDIgVgCQgTAAgXAIQgiANgVAZIAAgUQAGgNAegTQAegUAagHIgDgEQgGgCgIAAQgKAAgVAJQgTAJgIAFIALgMQAfgaANAAQAwAAARAHQAMAKAOAHQATAJAUAMIAUAIQAVAMAIARIAYArQAGANAAAPQAAANgUAAQgcAAgTgWQgSgUAEgXIgFABQgOAIgdAIIhUAqIABgDQghARghABQgFgHAAgNg");
	this.shape_232.setTransform(-11.6,54.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FAD652").s().p("AgaBCQgggZgWgFQgggKgUgEQBkhOA+g2QAQgMAJgCIAZgBQALAAAOADQAcAQAAAdQgGAlgFAOQgDAKgoA8QgqBBgQARQgLgegkgeg");
	this.shape_233.setTransform(19.4,12);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#66CCCC").s().p("AhfAAQAih2AVAAQAUACATADQAlAHAAAKIA4AnQAGAGAeAmIgjBCQgSgKgNAAQhQAOgXAIQgUAHgXAOQgYAPgTASQADgXAdhgg");
	this.shape_234.setTransform(7.6,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[]},1).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]},1).to({state:[{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).to({state:[{t:this.shape_165},{t:this.shape_164}]},1).to({state:[]},1).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166}]},1).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170}]},1).to({state:[{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181}]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200}]},1).to({state:[]},1).to({state:[{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209}]},1).to({state:[{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217}]},1).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_213}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_233},{t:this.shape_103},{t:this.shape_102},{t:this.shape_232}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_193},{t:this.shape_234},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).wait(1));

	// Layer 1
	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AivDCQgvg9AAg2QAAhBAshTQAihCAcgcQBGhHAyg+QAZgaAnABQAbgBA2AKQBKAOAAAVIheCDQhnCSgmBAIASALQAEADAAAFIgQCSIgEAuIAAADQABAtgCgCIgIACQhng8g1hFgAg+h2IAJAEIgJgEg");
	this.shape_235.setTransform(20.9,27.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("Ak4EuQAAgFAFgQQAGgQAAgFIgFgFQgEgGAAgUQAAgbASgbQAXgjAwgSQBdiSBFhWQA3hDA1guQBghRAegTQAfgUAhAAQAmAAATASQARARAAAeQgGAkgsBNQgrBNg8BKQg8BIhIBqIgrBCQAAADAPAZQAMAWAAAUQAAAMgMAJQgKAIgRAAQgTAAgUgMQgagQgIgdQgwAOg9AgQgyAagKAAQgrAAAAgqg");
	this.shape_236.setTransform(3.4,31.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("ACeDWQhJglhbg1Qhpg9gpgfQhzhBgCgDQgKgPgCgBIgKACQgmAAgYgbQgUgWAAgTQAAgIAIgOQAHgNgBgHIgDgMQgCgGAAgFQAJgmATgKIARgHQAIgEAAgGQADgfAPgKIAMgFQAJgEAMABQAMABAUAGQAVAGAhATQAgAUAFAEQAJAFALAIIAQAMQAKAABQBAQA5AnA3AoIBPA6ICjCBIABABIAAAAQAAAIADARQAAAKAEANQAAAGAFAYIACAIQAAAHAHAdQAAAFAHATIACAKQAAALgDAEQgGALgVAAIgLgBIgGgCIACACIgDAAIgDACIilhUg");
	this.shape_237.setTransform(-7,-5.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AiKDaQhwgvAAhXQAAgxArg9QAqg8A3gjQBQgzBkgsQBUgkAOAAQAjAAAXAdQAVAbAAAiQAAAugnAsQgUAWgXAQIgLAGQALgEAXASQAVAOAGAOIAOAZQAMAVACALQACAKAAAOQAAAQABAJIADAOQACAKAAAGQAABEhQAXQgrAMhaAAQhdAAhTgjg");
	this.shape_238.setTransform(4.9,20.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AExEVQgugCgUgPQgUgPgGADQgFADgngVQgmgVgYgJQgfgLhKggQhfgqgtgaQishdhDhQQgug3AAg3QAAgZAMgSQAPgWAjgRQAEABCAA8ICAA9IFSCgIAfgJQAJAAAcAJQAgANAjAEQAgAHANAuQAHAZAAAgQAAAWgIAXQgMAfgCAKQgDAPgUATQgaAYgpAAIgHAAgAmTjEIAAAAIACgMg");
	this.shape_239.setTransform(61.8,30.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AgUFJQgLgKgSgUQgGAMgOAIQgNAHgMAAQg6AAgigzQgng6AAhwQAAjdCViLQAzgvA4gdQAugXARAAQA7AAAXAGQAyAOAAAsQAAAZgRAfQgTAhghAfQgzAxgnBCQgsBHAAAwQAAA2ArAIQAYAEAFADQAOAIAAAXQAAAdgYASQgWAQgfgCIAHAIIAgAZQAXATAAAXQAAAXgNAPQgPARgmAAQgUAAgcgag");
	this.shape_240.setTransform(15.5,33.6);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AjFE7QgQgIgKgNQgeACgWgSQgPgNgIgSQgMgZAAgeQAAgXAFgXQAGgXAJgWIAMgbQAXgxAkgrIABgCIAhgoQAUgZAUgXQA2g9BCgvIABgGQADgDAEgBQBCgoBJghQAigPAigEIAigDIAPAEIAXAGQAZAJAOAYQAFAKAEAMQAFAogVAfQgLARgMAOQgSAWgXAQIgwAkIgvAkQgeAZgdAZQgYAWgXAYIgDALIgIADQgZAugUAxQgOAjgHAkIgJAvQgCALgHAIQgHAJgJAGIgLAEIgKABIgTgEIgJgEQgNAHgOADIgOACQgNAAgMgHgAhJAaIABAAIgBAAg");
	this.shape_241.setTransform(1.3,35.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AjOD0Qg4gjAAhLQAAhQAyhTQA8haAWgtQARgjAlgNQApgOABgBQANgRAVgLQAVgKAVAAQA7AAAVAQQAZAUAsBXIAPAvQAKAeAQAPIAYAWQAHANAAAuQAABdiTBLQiBBDh2AAQgoAAgjgWg");
	this.shape_242.setTransform(4.4,9.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("ABKEFIgqgDIgNAAQgTAAgagIIgFgBIgCAAQgWgFgVgGIAAAAQhFgTg2guIAAADQg7gwAQhNQAPhOA3gzQAdgcAqgcIAAgBQAhgYApgXQBUg1BOgWIABAAIAEgCIAGgBQAMgBANAGQAPABACAHIABABQAoAYAEAyQACAjgRAgQgIANgNAPQgGANgNAIIgKAIIAGgCIgYAbIAMAGIABACIAAABQAkAEARAeQAFAKAAAPQADABABADQAfArgSAqIADADQADADgBAEIAAAEQgBACACADIAAAAQADAJgBAJQgDAygxAWQguAVgzgEIgPgCIgBAAQgCADgEAAIgBAAgABLATIAAgBIAAAAIAAABg");
	this.shape_243.setTransform(7.6,20.9);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AB1D/QgbgGgFgBIgDAAIABAAQgnACgRgFIgDAAQgVgGgkgHQhHgNgngNQiMguAJhfQAJheA1g0QA1g0BHgyQAzgfAtgZQAmgVACAAQAgAAAeAXQAjAZAAAmQAAAxgaAgQgaAhhSAzQAeAIAfAAIAQgEQAPgEASAJQARAHArgDQAsgDASAQQASAPABAIQABAPAHASQAFAPAAAWQAAAGgFATQgGATAAAFIAAAQQgDAlgSAUQgcAdhCAAQgFAAgbgGg");
	this.shape_244.setTransform(17.2,22.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AhvDXQjPheAAifQAAg9AjhEQAwhcBWgaQARgFATALQAuAjgDAsQgDAsgFAOIgXA6QgMAfAAAGQAAAGAHAEQAJAIAiARQBAAWgBgEQA2AKA5gCQA5gDA1ALQA2AKAWAYQAWAYAAA6QAAAUgJAVIgJAWQABAhglAcQggAZggAAQicAAichIg");
	this.shape_245.setTransform(37.4,26.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AhHHIQgRgNgBgYIgKALQgJAIgJAAQgRAAgKgVQgGgQAAgcIAEgpIAShFQAAgFgCAAQgFgBgCgFQgKgTAAhtQAAjqBfi4QAkhGAogwQAlgqAagJQAlATgBABIAcAQQgEAmgSBBIgYBNIgdBkQgPBIAACUQABBOAFAfIAIAvQACAUATASQAUAQAAAPQAAAJgPAIQgNAFgLABQgWAAgOgMIgIgEQATA1AKAmIACABIAAAJQAAAQgLAHQgJAGgMgBQggABgQgdIgIgLQAJAgAAAIQAAAOgJAIQgKAHgOAAQgLAAgMgIg");
	this.shape_246.setTransform(14.8,49);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AiMDiQgvg6gJgyQgJgzgSh0QAAgzACgOQADgNASg2QANgmAmgcQAFgHARgJQAQgIAOAAQANAAAXADQAXADAWAAQAFAAAKAHQANAJABAQQAXgDANANQAMAKgBAQQAAAJgFAMQgIANgSAYQgyBDAAAKQAAAOAIBDQANgMAkgkIACgDIAuhAQAHgMAcg5QACgDAIgCQAJgDAHAAQAfAAAAAKQAAABAYATQAYAZAAAjQAAAmgLAaQgFAPhICSQAFABgoAsQgoArgHAEQhHAngigBQgJAAABgCQgGACgHAAQgeAAgmgugAifgxIAAAAIgHgGgACuiOIAAAAIgDgCg");
	this.shape_247.setTransform(7.8,16);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("AgkDJQghgbg9hMQgNANgggLQgggLgKgUQgFACgXAAQgYAAgKgSQgKgSgKgaQgDgIAAgSQAAgdAggUIBog3IgBgCIgSgIQgNgOAAgoQAAgmA0AAQATAAATAdQAVAhABAAQAbAIATAJQAlAPABASIAAgDIgEgLIARAuQAVAxAhAsQBAhJAYguQAJgSATgwQASgsAUgUIACgFIAHAGIABABQAEACgBACQAcAgAUApQAXAxAAAsQAABFhKBuQhTB9hXAAQgxAAgugogAD8irIAEAFIgEgGg");
	this.shape_248.setTransform(-0.9,17.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AjDDIQg/hiAAijQAAh3BIhNQA6g+A0AAQAPAAADACQAHAHAYAJQAJADAHAHQAJALAAAPQAAAagTArQgWAqgEALQAfgIAIABQALgBANAMQAOAMAAAOQAAAggqAMQgqAMAEAWIAHA6QAIAtANAxQAzAKAQAAQAHAAAugIQAtgHAMgDIARgHQAKgEAGAAQAjABAWAqQALAVADAXQAABAgxAiQg1AlhoAAQipAAhPh4gADjCZIADAFIAEgPgAiTA2IANgBIAAgBgAiWgWIALgCIAAAAg");
	this.shape_249.setTransform(5,-9.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(2,1,1).p("AAAgDIAAAG");
	this.shape_250.setTransform(-15.7,-10.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AiYCUIgHgMIgEAKIgEABIgEACIgGgFIAJhLQAQg/Aig2QA7hjBfgqIAFgBQAAAAABAAQAAAAABAAQABABAAAAQABAAAAAAQAYAOAXAPIAAAAQAjAZAWAhIABgBIAFAMIAFAIIAAABQANAcAFAhIAAAFIgDAFIglAeQg9A2gZApQgZApgOAVIgBACIgEgBQgKgDgGADIgEABQgdALgZACIgFAAQg0AAgdgrg");
	this.shape_251.setTransform(1.1,-26);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AADDhQglgPgTgPQgegZgbgfQgggeAAgRQAAgGgOgRIgPgSQgcAAgmgVQg5geAAg8QABgQAPgVQASgaAbAAQARAAASAFIAeAIQgEgKABgKQAAgJAMgNQAPgOASAAQAKAAASAJIAXAOQAJAGASAAQASABAHAGQAVAQACAIQACAEABAMQACAgAyBGQAYgaAmg2QAng3AEgMQAWhCARgZQAIgMAGAAQAFAAACADIAHAIQAFAEALAOIALAPQALARAMAbQASAqAAAZQgBCJhoBnQgmAlgrAYQgmAVgTAAQgMAAglgOg");
	this.shape_252.setTransform(0,17.4);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("Ah4GCIgogaQgzgigSgnQgPgfgBg0QAAhbAVhBQAbhSAzAAIAgAMQAKgCAIAAQAOAAAMAMQAGAIAKAYQALAdAFAJIAlhxIA1isQAOhJAgguQAegqAjgFQAigGAXAhQAaAlAABHQAAApgPBNQgOBNACgFQgIBEgYA6QggBVgZBFQgMAigFAJIgbAvQgQAcgSARQgwAwhiAAQgLAAgPgJg");
	this.shape_253.setTransform(10.4,37.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("Ah8DrQhjhXAAhbQAAhvCAiRQAwg3AwgnQAsgjASgCIABAAQATgBAMACIATAEQAeAKAiARQAcAPAHAHQACADAFACQABAAABABQABAAAAABQABAAAAABQAAAAgBAAQgCAEg5AwQg2Asg7BIQgeAkgZAnQgBAAgMAQQgMAPAAAGQAAANBAApQA+AnASAFQAZAGAHAGQATAUAAA7QAAAxgMAoQgLApgPAAQiPAAhthggAAPDrIABAAIACgMg");
	this.shape_254.setTransform(16.6,28.9);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AjiB4QhohSAAhxQAAg6AlghQAjgfA1AAQBJAAA6A9QAeAfAPAKQAdATAlAAQBJAAAzg2IAiglQASgRATAAQAgAAAhAvQAiAvAAAxQAABAiCBoIABgJQgFAZhRAcQhPAbgvAAQh3AAhhhOg");
	this.shape_255.setTransform(1.8,18.6);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AGTESIgKgEQg0gJg+gcQhSgkgQgFQjThJhWgYIhegZQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAgBAAQAAgBAAAAQgBAAgBAAQgBAAgBAAIg2gNQg/gPgwgHQg8gKgWgTQgSgNAAgcQAAgTATgOQAYgRAqAGIgUgGQgogMgSgPQgRgNAAgSQAAgvA1AAQA9AOALADIgLgHQgggXAAgVQAAgPAOgOQAQgPAVAAQAngBCABPQAdg0AeAAQAXAAARASQAQAQAAASQAAAJgFAPQgFATgIAQQBnAdDZBqQDOBiAdAfQAKAAAGAMQAHALAAAQIACAMIAAADQgMA8gWATQgOANgdABIgJgBg");
	this.shape_256.setTransform(-16.6,-13.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AkLDSQgWgGgJgLIgpAJQgegLgZgjQgTgdAAgMQAAgRAMgPIANgLQAVgOAtgMQApgLAWgRQgQgQgGgGQgLgQAAgRQAAgSALgNQAPgRAcAAQAIAAAkAbQAjAbAegEIAGgFIAHAAQA+AFBPgUQA8gPArgTQAHgDAvgdQAwgeADgEQAkguAvgLQAYgFATAEIAJAEQAfAYAKAcQAFAOAAAVQAABjijBoQifBniKAAIhJgBQgLAMgPAIQgTALgUAAIAIgDQgeAFgTAAQgXAAgTgGgAABA8IgBgMIAAAAgAhMAnIAAgBIgBgCg");
	this.shape_257.setTransform(-7.8,19.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("AgUFGQgLgKgSgTQgGALgOAIQgNAIgMAAQg5AAglhDQglhAAAhaQAAjdCViMQAzguArgUQAugUAsgFQArgGAmAJQAlAJAAAtQAAAYgRAgQgTAgghAfQgzAxgnBCQgsBIAAAvQAAA3ArAHQAYAFAFADQAOAIAAAWQAAAegYARQgWARgfgDIAHAIIAlAjQASAQAAADQAAAlgNAPQgPARgmAAQgUAAgcgbg");
	this.shape_258.setTransform(15.5,33.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AjCD9QgVgjg2iYQgHgfAAgRIACgUQALiHCwhgQB0hCB5gMIAZgCQAWALAlANQAlANAGAoQAGAohzA9Qh0A+gsAZQgqAZAAAMQAAAUALAOQADAAAaAYQAfAaADAMQADAKAUAoQAPAgAAASQAAAWgYAXIgYAVIgNAFQgQAHgHAMIgJAMQgGAGgHADQgSAIgYAFQgVAFgNAAQg4AAgig9g");
	this.shape_259.setTransform(10.9,28.1);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AiiEMQgggcgXgrQgBgEgDgaQgDgbgDgJQgRguAAgoQAAgwATgrQAYgzA7g+QBRhBBOgiQBQgjA6ABIAPAGQAXAMATAUQAhAhAAAiQAAASgPAOIgcASQgpAchaAlIg0AaQggAQAAAGQAAAXAJALQAEAIAOANIAHATQAGAYAGAOIAPAaQALAXAAAUIAAAYQAAARgJAKQgaAQgBABQAAACgPAFQgOAFgDAHQgRAdgFADQgEACghAHQggAIgGAAQgZAAgfgZg");
	this.shape_260.setTransform(8.2,25.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("Ai7CbQhShLAAhUQAAhhA2hAQAvg2BJgSQBEgQAyAWQA3AWAAAyIgEAaIgDAZQAAAUgQASQgRAPgBAEQgDAYgDAHIgNAUQgHAJAAAIQATAXBFADIAAAAQAgABAkgOQAogQANgUQAJABAAAIQAAABALAHQANALAIAQQADAIADAPQADAPAAAIQAAA9hDAzQhBAwhIAAQibAAhihZgAj4gwIABgCIAAAAg");
	this.shape_261.setTransform(3.2,0.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AgjD1IAAABQgdgFgbgKQgYgHgWgLIAAAAQghgQgdgYQgdgWgYgcIgBgBQgSgRgOgWQgZgmADgrQACgfAMgfIACgEIADgEIABgFQAKgUAQgPIgDgEQAAgEACgEIAUgcQAMgRAOgNQAPgMAQgKQgCgDAAgDQAAgEADgDQANgMAOgKQAjgaAkAVIAAABQAJAGAHAIIABABQAFAFgBAJIAAABQgBAHgDAJIAAAAIAAACQgGAOgMALIAAAAIgFAFIABABIAJAYIAAABQAGATACASQACAEAAAFIABABQABAIAEAIIgBALIAVARIAIAGIABABIAAAAIACABIAAAAIALAFIADACIAAADIAAAAQAXAQAbAIIABAAQAeAIAhACIABAAIApgBQAUgDAUgEIABAAIANAAIAEAAQACgCADAAIAogIIAdgIIAEAAQAKACAGAHIABAAQAKALAFARIAAAAQAEAQABASIAAAAQABAMgEAMQgFASgHARIAAAAQgPAjgcAaQgbAagjAQIgFABQgCADgCABQgeANggAHIAAAAIgrAIIgDABIAAAAIgBAAQgaABgaAAQgaAAgbgFg");
	this.shape_262.setTransform(-1.6,-4.2);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AiHDwQiMgzg5hQQgNgTg+g8Qg2hBAAhUQAAhQAdgyQAdgxAwAAQAGAAAKAEIAPAGQAUAKAOgDQALgCAOAMQAOAMABAZQADAuASAzQAaBRCuBFQCyBJBZgCIBagCIAjgFQAjgEAfAQQAhATAAAWQAAA5gqAuQg7BDh4AAQjagBieg7gAmzidIACAAIAAgJg");
	this.shape_263.setTransform(-10.1,-11.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AkmCIQhPg0AAhiQAAglAhgjQAiglAlAAQANAAAKAMQAKAMAAAQQAAAKgDADQA5ABAQAQQAPAPA+AAQAgAAAygJQBAgMArgVQAVgLBWg4QA/gpAYAAQAXAAAOAIQAaAZALAcQAGAOAAAVQAABjijBfQiWBXh4AAQibAAhQg1g");
	this.shape_264.setTransform(-3.7,16.6);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AkmCIQhPg0AAhiQAAglAhgjQAiglAlAAQANAAAKAMQAKAMAAAQQAAAKgDADQA5ABAQAQQAPAPA+AAQAgAAAygJQBAgMArgVQAVgLBWg4QA/gpAYAAQApAAAUAbQATAYAAAtQAABjijBfQiWBXh4AAQibAAhQg1g");
	this.shape_265.setTransform(-3.7,16.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AiHDwQiMgzg5hQQgNgTg+g8Qg2hBAAhUQAAhQAdgyQAdgxAwAAQAGAAAKAEIAPAGQAUAKAOgDQALgCAOAMQAOAMABAZQADAuASAzQAaBRCuBFQCyBJDCAAIAGgHQAIgGAGgBQAiAAAgARQAhATAAAWQAAA5gqAuQg7BDh4AAQjagBieg7gAmzidIACAAIAAgJg");
	this.shape_266.setTransform(-10.1,-11.9);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AkdDXQg5g2AAhgQAAgjAVgTQAQgMAQAAQAIAAAPAHIASAKQALAEAQASQAVAXAHAYQAdgnAgglQA+hGBBgyQBKg7BUgxQBBgmAGAAQAcAAAqAkQAxAqAAAuQAAAZgqAcQg+AmgoAcQgaARhgA9QhiBpgCAAIggAkQghAlgTAHQgUAIg5ABIgBAAQg4AAgsgrg");
	this.shape_267.setTransform(1.1,22);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("Ak4EuQAAgFAFgQQAGgQAAgFIgFgFQgEgGAAgUQAAgbASgbQAXgjAwgSQBdiSBFhWQA3hDA1guQBghRAegTQAfgUAhAAQAmAAATASQARARAAAeQgUBXgUAdQg2BOg+BLQg5BDhIBqIgrBCQAAADAPAZQAMAWAAAUQAAAMgMAJQgKAIgRAAQgTAAgUgMQgagQgIgdQgwAOg9AgQgyAagKAAQgrAAAAgqg");
	this.shape_268.setTransform(3.4,31.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AgUFJQgLgKgSgUQgGAMgOAIQgNAHgMAAQg5AAglhCQglhAAAhbQAAjdCViLQAzgvA4gdQAugXARAAQA7AAAXAGQAyAOAAAsQAAAZgRAfQgTAhghAfQgzAxgnBCQgsBHAAAwQAAA2ArAIQAYAEAFADQAOAIAAAXQAAAdgYASQgWAQgfgCIAHAIIAlAjQASAQAAADQAAAkgNAPQgPARgmAAQgUAAgcgag");
	this.shape_269.setTransform(15.5,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_246}]},1).to({state:[]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_251},{t:this.shape_250}]},1).to({state:[]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_268}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_241}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.boy1_front_pupil_R_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVARQgEgHAAgKQAAgfAZACQAQAAAFAQQAFAKAAAGQAAAGgGAHQgEAPgOAAQgPAAgIgOg");
	this.shape.setTransform(0.2,-0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.7,5.3,6.2);


(lib.boy1_front_nose_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhJBEQgDgGABgFQADgHAbgBQAyAAAqgcQgcgmgHgVQgHgVABgHIAIgDQAfA9AeAaQAFAVgcALQgdANgqAEQgdADgOAAQgLAAAAgCg");

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B69372").s().p("Ag7ABQAOgIAPgFQAPgFAjgBQAlgCAIAIQgGAMgfAHQgjAKgiACIgHAAQgaAAAPgSg");
	this.shape_1.setTransform(-1,4.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-6.9,15.3,14.1);


(lib.boy1_front_mout_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// inside mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAeIgYgNQgFAAgRAGQgSAHgEAAQghAAgbg5IgKgOQAeAYA2ANQA1ALBCAAQAQAAA/gHQA+gEANgDIgHAUQgJgJgKAAQgcAWgIAFIgEAEQgCACgHAAIgugSQgOAAgSALQgSALgMABIgBAAQgMAAgXgMg");
	this.shape.setTransform(3.4,2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("AiBACIAPgCIANgFQAHgBAHAFIgWATgABrgFQASgOAFADIgNATg");
	this.shape_1.setTransform(6.5,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40152B").s().p("AgrAaQgogHgSgPIABgCQAOgUAHABQAPAHAWAAQATAAAPgFIAIgHQALgIAGAAIARAIQAQAHADAAQAMAAAWgIIAPAKQgRAagiAKQgWAIgiAAQgQAAgWgFg");
	this.shape_2.setTransform(7.5,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgsApQgUgNgGAAQgFAAgRAHQgSAGgFABQgHgBgIgEIgSgMIgDADQgDAEgHAAQgGAAgKgaQgIgRgEgRIgFgZQBTAlAXAHQA8AQBRAAQBbAAAzgRQAAALgHAbQgFAAgSgGIgSgGQgJAAgUARIgVAQIgtgSQgIAAgWAMQgWALgOgBQgLAAgTgMg");
	this.shape_3.setTransform(4,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#40152B").s().p("AgyAmQgwgLgagbQAggjAKAAQAFAAARAGQARAFAFAAQAOAAAYgKIAXgKIAKAFQAKAGAKACQAMAEAQgCQARACAbAYQgQAXggANQgeAMgnAAQgdAAgdgHg");
	this.shape_4.setTransform(6.8,11.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AiigPIgCgCQAJAHAPAGQAMAEADAAQAQAAAGgBIgIAHIgNARQgZgXgNgPgACJAIIgSgQIAEgHQAHgHAGAAQAZAPAEgBQgGAOACADQgCgBgNAOQgCgGgHgIg");
	this.shape_5.setTransform(5.5,8.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgvAnQgZgNgDAAQgFAAgSAGQgRAHgGAAQgEAAgMgIQgMgJgEAAQgGAAgJAGQgKAGgRADQgQgrgEgWQgDgLAAgLQA0AfBsAKQAsADBdAAIA/gCQA6gDATgDIAAACQgDAMgKAMQgLAOgHAAIgugNQgPAAgQARQgQAQgDAAIgtgSQgOAAgVAMQgRALgRAAQgCAAgXgMg");
	this.shape_6.setTransform(4.5,1.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#40152B").s().p("AiTATIAZgjQAGgIAMgMQAQgQAHAAQAFAAARAGQARAGAFAAQAEAAAWgKQATgKAQAAIAlAOQAZgGAYANQAOAHAYAXQiMBGgIAAQgVAAh+gqg");
	this.shape_7.setTransform(6.7,13.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#862D59").s().p("AikAYQgKgNgUggIAdgNQACAAAPANQAOALAZgGIgUAWQgTAXgFAJIgLgOgAB3gYIAFgGQAGgHAGAAQAFAAAMAGQALAEAFAAQAKABAQgJQgXAtgGAIQgJgSgmgYg");
	this.shape_8.setTransform(5.4,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiAUQgSgOgPAAQgFAAgOAGQgPAGgNABIgJgCQASgdAagJQAZgKA8AAQA/AAAYAKQAYAKAHAZQgWANgHAAQgJAAgMgJQgNgJgFAAQgHAAgXAMQgXALgQAAQgEAAgRgMg");
	this.shape_9.setTransform(3.7,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#40152B").s().p("AgmA3QgxgOgYgrQAEgHAUgYQATgXADAAIA6AQIARgKQAWgKAQAAIAWAGQAWAHAOABIAEALQADAMAAAGQgBAigrAYQgjATgcAAIgIABQgQAAgUgGg");
	this.shape_10.setTransform(4.4,13.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#862D59").s().p("Ah8gOQARAEAMgDIgVAdQgFgQgDgOgAB1gLIAJgEIgCAPg");
	this.shape_11.setTransform(3.9,9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag4APIAJgNQANgIAdgKQAoAAAWAbQgIgCgPgIIgPgFQgJAAgUAMQgOAJgRAAQgHAAgIgCg");
	this.shape_12.setTransform(7.3,5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40152B").s().p("AgTAiQgfgNgLgpQAjAFAPgLQAQgLAMAAIARAHQARAHADAAIAIAAQACAbgUATQgRAPgTAAIgGAAQgKAAgLgEg");
	this.shape_13.setTransform(7.4,11.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40152B").s().p("AgPAkIgDgFQgIgMAAgWQAJgmARAAQAWAAAFApQAAAbgMAKIgEACQgFADgGAAIAAAAQgIAAgHgGg");
	this.shape_14.setTransform(9.4,9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag/AUQgQgJgHgBQg+AFgQgeIgMgMIBTAOQAoAGAYAAQCOgCA3gHIAJgCQgMAYgFABQgQgDgYAAIg+AVIgMgGQgPgGgSAAIg8APIgQgIg");
	this.shape_15.setTransform(7.2,3.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrAgQgNgIgHgBQgKgDgNAFQgMAFgPAAQgFAAgLgIQgMgJgFAAQgLAAgJgSQgKgagQgKIAJAFQAVAUA8ANQA7AKBGAAQARAABFgHQBCgEAOgDIgKAXIghgMQgHAAgWARIgVAQIgtgSQgLAAgcAMQgaALgCAAQgLAAgUgKg");
	this.shape_16.setTransform(3.7,2.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D580AA").s().p("AgDAZIhEgEQAAgNgGgaQAcANARAAQAQAAAWgKIAYgKIAVAHQAVAHAGAAQgDALgJAIQgKAOgKABQgZADgMAAIgMgBg");
	this.shape_17.setTransform(6.1,9.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#862D59").s().p("AiOAHIAFABQAFACgBAFgABxgCIAOgMIAQAIIgRAUQgFgJgIgHg");
	this.shape_18.setTransform(6.3,7.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#40152B").s().p("ABhgLIARAPQgIAHgWAJgAhuAKQgDgFAAgGQAAgHADgGQACgFAEAAQADAAADAFQADAGAAAHQAAAGgDAFQgDAFgDAAQgEAAgCgFg");
	this.shape_19.setTransform(6.4,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAcQgPgGgHgEQgLgFgPACQgYAFgJAAQgIAAgEgEQgDgDgHgMIgRghIAMAHQAbAQBWAJQA5AEAnAAIAngCQAhgCAEgBIgHAFQgKAHgPAJIgPAIIgTgDQgGgCgIgIQgHgFgFAAQgPAAgTAMQgTALgQAAIgQgFg");
	this.shape_20.setTransform(3.5,3.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D580AA").s().p("AhCAUQgQgRgBgUQABgOACgEQACgDAIABQAuAPAQAAIgDAKQABAIACACIAEAAIALgXQAqgJAJAAIAaALQgFAjgcAPQgVAMgmAAQglAAgVgTg");
	this.shape_21.setTransform(5,11.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#862D59").s().p("AgGgDIANgDIgCANg");
	this.shape_22.setTransform(-6.1,8.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AiWANQAgAZATgGQAQgMAMAAQAFAAAYAMQAXAMAEAAQAEgBBAgTIARAHQARAIADgBQAogJAWgTIAOAHQgWAYgXAIQggANg/AAQiYAAgYgxgAgnAJQgYgMgGAAQgEAAgSAFQgSAGgFABQgHgBgIgEIgSgKIgOAGIgUgzIAAgKQAXAIBGANQBHAOASABQAkgBBQgDQAzgCAOAEQgBALgEAMIgdgLQgHAAgVAPQgTAQgCAAIgtgQQgLAAgcAKQgaALgEAAIgYgMg");
	this.shape_23.setTransform(3.9,4.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgiAVQgYgNgGAAQgEAAgQAHQgPAGgGAAQgJAAgIgDQASgbAggNQAYgLAbAAQBBAABPAzIgFAFIgBACIgNADQgMgBgRgIIgQgIQgLAAgcALQgaAMgDAAIgZgNg");
	this.shape_24.setTransform(3.4,3.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#40152B").s().p("AhjASQgPgCgggIIAIgaQAOAKALAAIAPgGQARgHAJAAQAFAAAXAMQAXAJAFAAQAEAABAgRIARAHQAQAHADAAQAfABAPgQIAHAMQAFAGABADQgVANgZADQgWADhEAAQhLAAgjgEg");
	this.shape_25.setTransform(4,9.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAXQgYgNgGAAQgFAAgSAGQgRAHgGAAQgKAAgJgHQAHgVAggPQAdgOAjAAQAbAAAmANQAzASAYAcQgBAFgKAAIgtgSQgLAAgbAMQgcALgCAAIgYgMg");
	this.shape_26.setTransform(2.6,3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#40152B").s().p("AgtAtIhmgLIgIgHQgEgEAAgDQAMguALgUQAHAFANAGIAMAEIAPgGQARgHAIAAQAGAAAXAMQAXALAFAAQAEAAA/gTIARAHQARAHADAAQAFAAANgFQAOgFAFAAQAMAAAOAoQAAArigAAQgiAAgLgCg");
	this.shape_27.setTransform(3.1,11.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgbAWQgXgOgGAAQgFAAgSAHQgSAGgFABQgJAAgOgKQAJgSAigOQAhgNAjAAQAdAAApANQA0ARASAZIgFAEQgDACgGABIgugSQgLAAgcAMQgbALgCAAIgZgMg");
	this.shape_28.setTransform(2.6,3.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#40152B").s().p("AiIA9QgngQAAgKQAAgdAMgjQAKgcANgWQAaATALAAIAPgHQAQgGAJAAQAFAAAYAMQAXALAFAAQAJAAAVgKQAVgKAQAAIARAIQARAHADAAIARgEIAWgHQAFAJAQAmQASAnAAAJQAAASgzAQQg7ARhbABQg/AAgwgUg");
	this.shape_29.setTransform(3,14.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgdAQQgYgNgGAAQgFAAgNAFQgPAHgEAAIAHgHQAJgLASgKQAYgOAdAAQAnAAAiAXQARALAQAPIgIgCIgIgDIgRgMIgqAPQgWAIgEAAIgZgMg");
	this.shape_30.setTransform(2.9,4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#40152B").s().p("AhXAsQgagZAAglQAAgVAFgSQARAAAcgMQAGAAAXAMQAXAMAFAAQATAAAYgKIAYgKIAUAHQAUAGALABIACAbQAABeh8AAQgxAAgcgag");
	this.shape_31.setTransform(3,13.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgzAPQARgfAZAAQAjAAAZAYIABABIAAAAQgNgFgMgIQgIABgGADIgCAAIgJAEQgNALgYACIgDAAQgGAAgHgCg");
	this.shape_32.setTransform(6.5,5.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#40152B").s().p("AgzAhQgPgOAAgPQAAgVAGgVIAIACQAQADARgBQALgBAMgGQALgFAMgHIAFADIADABIAGADIACABQAOAGAJAAIABAHQAAAVgHAVQgPAsglAAQglAAgWgVg");
	this.shape_33.setTransform(6.5,12.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#40152B").s().p("AgbAEQAEgnAXAAQAcAAAAAjQgGAkgWAAQgaAAgBggg");
	this.shape_34.setTransform(8.4,8.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAHAGQgKgBgRAIQgRAGgMAAIgagGQgXgGgRAAIgOABQAZgMARgHQAegKAiAAQBfAAA7AcQgIABgYAIQgWAGgHABQgvgRgQAAg");
	this.shape_35.setTransform(3.4,4.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AglAdQgQgNgRAAQgHAAgPAHQgNAHgQgCQAJgcAegUQAegUAmAAQAgAAAlAOQAuASAVAfQgVANgEAAIgtgSQgKAAgcAMQgaALgEAAQgFAAgQgMg");
	this.shape_36.setTransform(4,2.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D580AA").s().p("AhRgWIAFgKQAYAKARAAQAEAAAVgKQAUgKAQAAIAVAHQAUAGAPgCQgCAvgdAOQgbANhaAAQgRgcACglg");
	this.shape_37.setTransform(6.5,11.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#40152B").s().p("Ah8AmQgVgIAAgaQAAgPAIgZQAHADAZgDQAXgDAGgDQgFAQAIBHIgzgHgAB6gnIAHgFIAKAWQAHAPAAAEQAAAEgKAGQgJAIgOAGIgLADQAUg3AAgIg");
	this.shape_38.setTransform(4.8,11.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AghANIgYgMQgFAAgQAHQgPAGgFAAQgNAAgLgHIgJgGQAtgaBNAAQAxAAAiAKQAaAHAgASQgjAUgEgJQgIgSgUAAQgPAAgUAMQgVALgKAAQgKAAgWgNg");
	this.shape_39.setTransform(2.7,4.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D580AA").s().p("AgzADQgMgIgJgQQANAJASAIQASAFAHAAQATAAAYgIIAZgKIAVALQgKAMgRAIQgQAIgSAAQgqAAgVgTg");
	this.shape_40.setTransform(4,9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#40152B").s().p("AgHAAIAHgDIAIAHg");
	this.shape_41.setTransform(-11,6.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AiKA0QgsgGgRgRIgCgDIAOgEIgIADIABAAQApgJAHAFQAQAKAHAAIAPgGQARgHAIAAQAGAAAXAMQAXALAFAAQAEAAA/gTIARAHQARAHADAAQANAAAUgIIALgKQANgKAFAAQAGAAALAFQALAFAFAAQAUAAAAgFIAIgEQgOAWgmALQg2APh1AAQhRAAgjgFgAgyAGQgYgLgGAAQgFAAgSAFQgRAGgGAAQgEAAgMgGQgMgIgEAAQgHAAgHAFQgJAEgJACIgHABQAZgeAwgPQAxgPBOAAQBYAAAvAKQAxAKAMAWQgUANgWgHIgUgJQgHAAgVAQQgUAOgCAAIgtgPQgLAAgbAJQgbAMgDAAIgYgNg");
	this.shape_42.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42}]},1).wait(1));

	// inside mouth
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AhNAOQg+gWgHggQAfAVAyARQBgAiBygMIACAHQgOAOgrAAQhiAAhFgbg");
	this.shape_43.setTransform(0,0.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AiEAVQgfgcgUgjQgRgeAAgSQAAgHACgCQABgCAEAAIAHAFQA7AhA+ANQAxAKAsABQAuABBEgLQAtgHAMgDIACAKQgbBWghAiQggAfg0AAQhpAAhUhRg");
	this.shape_44.setTransform(3.2,5.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AiVAoQhBhKAAhQQAAgHACgCQABgDAFgBQBZBBB7ADQB9AEApgRQAqgRAAANQAFBBglA7QgxBQhiAAQhtAAhLhYg");
	this.shape_45.setTransform(4.2,6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AjAAfQguhKAAhRQAAgHADgGQACgEACgBQBfAoClAHQB4AEBQgLIAHABIADAGIAAAHQAABBgqBCQg+BkhzAAQiPAAhFhwg");
	this.shape_46.setTransform(4.5,7.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhoBJQgpgsAAhDQAAglAigVQAkgWBEAAQBWAAAcANQAnATAABAQAABSg9AlQglAWguAAQhBAAgpgug");
	this.shape_47.setTransform(3.9,9.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgrBCQgkgXAAg3QAAgGACgGIADgEQAWgwAxgCQAuAHAVAYQAQATAAAeQAAAogWAUQgTARggAAQgcAAgWgNg");
	this.shape_48.setTransform(7.3,8.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgtAOIAAgOIACgOQAKgvAjgBIABAAQAeAGANAqIABAOIgCAfQgXAegXACIAAAAIgHAAQgaAAgLgxg");
	this.shape_49.setTransform(9.4,9.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag+A+IgBgGIAFgKQgagLgXAAQgNAAgRAJQgQAKgGAAQgHAAgCgEQgCgBgBgFQANgQAJgGQgMgIgXgWQgcgeAAgNIABgIQADgBABgCQAdAQBFAIQBLAKBnAAIB3gIQAQAAAHAGIgYAoQARACAGAIQADAEgBAEQAAAKgDgBQAAgDgfgDIgngCQghAAgXANIgRANIgSgLQgWgMgUAAQgOAAgVAJQgTAKgLAMg");
	this.shape_50.setTransform(6.6,3.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgsBbQgugJgkgiQg8g3gUgnQgLgUAAgSQABgGABgCIADgCQADgBAOAMQANAMBDARQBEARAeABIBFADQApABA5gKQA5gLADgBQABgBABAAQAAAAABAAQAAAAABABQABAAAAABIADALQghBZggAXQgiAZhoAAQgnAAgUgEg");
	this.shape_51.setTransform(3.5,4.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgiBfQgKgEgYgYIgXgXQgNAAgigxQglg2AAgjQAAgKADAHQA1AWA0AJQA2AKBMAAIBxgJQgXBGglArQguA0g7AAQgeAAgPgFg");
	this.shape_52.setTransform(3.8,7.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhxBCQhYggAAhUQAAglAHABQAZALAfAGQCIAbAtAAICXgKQAHAAABADIAAALQAAAmgVAfQglA4hfAAQhqAAg4gVg");
	this.shape_53.setTransform(4.1,4.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("ABiARQhBgYgoAAQglAAgtAHQgtAIgIAAQgKAAgCgFQAJgJAegKQAjgMAjAAQA8AAAlAHQA7ANAsAhQgDAEgIAAQgOAAgggMg");
	this.shape_54.setTransform(4.5,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AiBBJQgpgJAAgRQAAg1A0gnQAvgjA0AAQBQAAA9A0QAxAoAAAbQAAASgiALQgoANhOAAQhoAAgsgIg");
	this.shape_55.setTransform(3.9,5.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AiLBhQgogLgFgcQAMhjBGgqQAkgVAlgBIAVAAQBeAUAiAjQAiAkAQAaQAPAcAAALQgRA3ioAAQhlAAgmgJg");
	this.shape_56.setTransform(3,8.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AiGB5QhBgSAAgXQAAhgA8hBQA1g4A/AAQCCAAA7BkQAiA3AAAzQAAAnhbASQg7AMg3AAQhCAAg/gRg");
	this.shape_57.setTransform(2.7,11.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ah0BNQgTgdAAgpQAAg7AkgkQAlgkBBAAQA3AAAoAkQAmAkAAAtQAAA8gjAjQglAlhFAAQhOAAghgwg");
	this.shape_58.setTransform(3,11.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhBBHIgHgIQgOgTAAgUQAAgfALgfQADgHASgYQASgZAqgBQAgADAVAVIAKAKIADAFIADAGIADAGQAJARAAAPIAAAAQAAANgDAPIgDAOIgEAOQgEAKgEAIQgTAagmAIIgBAAIgPABQgsAAgRgagAgQhgIAEAAIAJABIAFAAIgDAAIgPgBg");
	this.shape_59.setTransform(6.6,10.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgIA7QgfAAgHgqQgFgYAMgYQANgbAYAAQAyAAAAA5QAAAPgKASQgQAbgcAAIgCAAg");
	this.shape_60.setTransform(8.4,8.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AApAvIABgGIAEgMQgGgDgPgCQgPgDgHAAQgOAAgXALQgWALgQAAQgKAAADAAIgBgLIABgKIgZgCQgqAAgYALQgHAAgCgDIgBgGQAJgYASgNQAoghBYAAQArAAAuAMQBKASArApQgGAEgcgBQgcgCgcAJIgsAQQgFAAgBgCg");
	this.shape_61.setTransform(4.4,5.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AiSBdQgVgOAAgiQAAhGAugsQApgnA7AAQAwAAA6AiQA6AjATAnQAVAugwAdQg5AiiQAAQg5AAgXgQg");
	this.shape_62.setTransform(4.9,7.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAABHQgWgDgHgDQgIgCgVgOQgSgLgOgBQg0gCgWgGQgUgGAAgKQAAgaAmgaQAxghBWAAQBPAAA8AfQA0AcAFAhQgKAEghABQgcABgMAKQgXATgLAGQgUAMgVAAQgJAAgSgCg");
	this.shape_63.setTransform(3,6.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AjhAaQAAguA2gcQA/gfB6AAQBXAAA3ASQBGAXAAAvQAAAgg/ATQhHAUiIABQi1AAAAg3g");
	this.shape_64.setTransform(4.9,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-4,29.6,8.3);


(lib.boy1_front_hat_v01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#374656").s().p("AimCpQgBhXALg9QAMg4AkhhQAYhBAJgQQAZgrAxgaQATgLAagLIBqgfIARgFIAAABIgKAHIAAAAIgBABQhJA0geBHQgTArgOBpQgLBQAHDNQABAfAZBCIghABIgLABIgEAAIgJABQhTAGgfAKQgkh5gBgzg");
	this.shape.setTransform(-65.5,5.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(59.6,-31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#445A6F").s().p("As3C8QgBhWALg9QAMg4AkhhQAYhBAJgQQAZgrAxgaQAVgLAagLIBqggIARgEIAAABIARgEIEqggIAKgBIAOAAIADgBIAEAAIASAAIAXgBIAMAAQABAAAAABQABAAAAAAQABAAABAAQAAAAABAAIAEgCQA7gBA+ABQDBACDmAYQgXgCAfADIAAgBIBGAIIAwAMIARAEIAPADIAUAKQAyAaAbAsQAGAJAMAcIARArQAoBgAOA5QAMAzADBEIABAcQAAAcgKA9IgMBDQgHAJgDAJIggACIj2AHIh0gBQACgOgBgUIgGhXQABgBgNhTQgMhTgRgWQgPgWgPgEIgzgRQglgKhEgMQkXgJhJAbQhJAbgWAVQgLAPgEAKQgHAtgCAbQgEAiABBVQAEA8ALAWQjZAKhmAGIgiACIgMABIgFAAIgJABQhTAGgfAJQgkh4gBg0gAJzkFIAAgBIgCgBIACACg");
	this.shape_2.setTransform(0.1,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#28BD72").s().p("AiiFvQgfAAAAACIgKAAIgMgKQgagXACgQQgBgWAhgdIAXgUIB3AAIELAKIB7AHQAFApAAAoIgBAmQjXgFkUgNgAgKE9IABAIIAKADQAQABAAgPQAAgQgOAAIgBAAQgNAAABATgAiVE4QgBAPATAAQAPAAgBgNIgCgJQgDgIgHABIgCAAQgTAAABAOgABvEzIgBAJIADAIIAJACQAKABABgFIABgJQAAgNgOAAQgGAAgDAHgAk8F0QgBgPgMhbQAagGAZgCIAqgHIAcgCQgbAVgJAMQgSAVABAiQAKAVAKANIhLADIAAgCgAiBlzQAkgNBSAAQALAAAZAIQAaAHAJgDQgCAVAAAOIg9gBQhfgBAAACIgXACQgCgPgGgVg");
	this.shape_3.setTransform(4.8,-1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABnEnIgBACQADgKgCAIgAhnkoIADAAIgBABIgCgBg");
	this.shape_4.setTransform(73.1,6.8);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AseGkQgkgDgRi9QgBh3AFgaQAGglA0iKQAchLAEgIQAZgsA6gdQAagMAlgMQCfgyFigXQgDgRgCgbQgBgPAigKQAogMA/AEIAXABQBQALABAKIgJA0QDsAFBxAVIABAAQBdAKAWAHIABABIAAgCIABAAQAlALAaANQA7AdAbAsQAEAIAfBLQA5CKAHAlQAGAZADB4QgDA4gFAoQABAKgSBMIgFAGIgGAJIgVABIjMAEQlXAHlogRQi4gBj8AUIh+AKIhrAIIgDABQgKAAgEgEgAgmAaQhsAJg3AXQg5AYgPAPQgOB0AAANIABAFQAqgNCVgGQAAgCBNABQEDACBPAHQAdADATAFQgGgpgKgpIgWhTQgggQhHgLQhHgLhagBIgWAAQgkAAguACgAnnkaIgBABIARgEIgQADgANBFvIgBACQADgKgCAIg");
	this.shape_5.setTransform(0.1,-0.3);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-85.1,-42.7,170.5,84.8);


(lib.boy1_front_hairtuft_v01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99492C").s().p("AAWBqQgDgIAAgLQAAgMADgIQADgIAEAAQAFAAADAIQADAIAAAMQAAALgDAIQgDAIgFAAQgEAAgDgIgAh4BMQgEgJAAgGQAAgGACgEIAGgEQAHAOAGAZQgBAFgIACQgFgHgDgKgACSASIAEgfQAFgfAFgKQAHALgDAeQgCAYgHAPQgGgHgDgBgAhGgbQgEgaAHgKIAIAMQADAFADAQQAEARAAAHQAAAIgCgCIgIAAQgIgBgDgagAiUgZQgGgFgFgQQgFgPAAgNQAAgHABgCIAGgFQAHAKAFATQAGASAAAIQAAAHgEABIgDAAIgCAAgAAthIQgDgHAAgKQAAgKADgHQACgHADAAQAEAAACAHQACAHAAAKQAAAKgCAHQgCAIgEAAQgDAAgCgIg");
	this.shape.setTransform(-2.1,7.2);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DE6D40").s().p("Ai2C6QACAAABgJQAAgGgEgFIgDgEIgPgPQgWgbAAhLIAZjiQASA8ADAJQAKAWAOAAQASAAA7htQAIAdAKAZQAVAzAVAAQAOABAUghQAOgTAig3IAjA/QATAgAKAAQANAAAXgiIAZgmQAHASANBpQANBiAAAaQAAAugPArIgBAHIgNAjQldgJgcgGg");
	this.shape_1.setTransform(0.3,1.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADFDXQldgJgcgGIgBgBQgTAGgQgSIgFgHQgWgjAAhUQAAh7APhJQAPhGAWAAQAKAAAJATQAOAbAHA3QAPgeAQgbQAegyARgJQAHAGAOAiQANAhAaAoIAthGQAbgoAJAAQANAAAXAqQANAXAPAiIAEgHQAUgaAQgYQAJgLALAAQAQAAAQBGQAUBWAACCQAAAygNAeIgBAAQgIAUgXAVg");
	this.shape_2.setTransform(0.1,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-22,48.9,44.2);


(lib.boy1_front_face_v01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7D3B24").s().p("AAQBKQgMgYAAgGQAAgTAFgFIACABQANASAEAHQAIARAAAcQABAKgHABQgDgDgLgZgAgegaIgEgGQgCgCABgGQAHguANgPQADALgEAeQgDAegFAFQgEAAgCgBg");
	this.shape.setTransform(-73.3,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99492C").s().p("AgRBlQgDgLAAgPQAAgPADgKQADgLAEAAQAEAAADALQADAKAAAPQAAAPgDALQgDAKgEAAQgEAAgDgKgAATgsQgMgHgHgXQgFgQAAgHQAAgGADgHIACAAQACAFAKAZQAJAZAAADQAAAGgBACg");
	this.shape_1.setTransform(73.8,-9.3);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B69372").s().p("ADzIYQgjgHgYgbQgPgRgshHQg5heg1hLQgbgsg7hbIhDhpQgzhFgahWQgNgrgMhMQALACAJgIQAHgGAAgCIgWhUQgVhRAAg1QAAgTARgQIAAAVQAAD/DZFyQBwDDCnDlIgGADIgIgBg");
	this.shape_2.setTransform(-40,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F5336").s().p("AggGCQgqgtgZhYQgUhFgGhUIACAAQALAEgEg4IABgLIABgIIgBAAQADgnAahcQAbheAbg5QAfhBBFg+IAEgDIAogfIAOgJIAAAAQgTAkgRAnQgyBtgGA9QgQCogEBIQgOALgDAAQgFAAAFgFQADgGgDAAQgIAAgHAeQgGAbAAAaQAAAFAQBLQAOBMAFAQQgDABgJgCQgMgBAAgDIgBAYQAAATAGBFQgQgdgIgJg");
	this.shape_3.setTransform(-65.4,-29.3);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AiiJEIgIgCQgigGgYgbQgQgSgrhGQg5heg1hMQgegrg6hcIhEhpQgyhEgbhWQgNgrgMhMQALACAJgIQAHgGAAgDIgVhTQgWhRAAg1QAAgTARgQQA6g3D/gVQCigOFJAAQBPAABbAFQBuAGA2AKQAeAFAhAJIA4APQAVAFAZAVIAXAUQACAAgLAnIgNA1QgBAKgmBxQAAAKABAEQATAAAOABIgnB5QgHAXAAAGQAAAIACAHQAFALAKgFQhzDhhRCEQgxBPhnCgQgtBKkdAAQhHAAgdgEg");
	this.shape_4.setTransform(1.4,28.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DE6D40").s().p("AKfHMIAAgIIgNAhQAHgWALgsQAKgqAAgGQAAgDgKgPIgLgPQAAgWAUhJQAUhIAAgWQAAghgGgEIgIABQgLgZhGgZQiNgykwAAQifAFj4AMQg3ACjaAiQhYAagHADQgIAEgSAPIgCACQgNAKgFAAQgFAAAFgEQAFgGgFAAQgJAAgHAeQgGAbAAAZQAAAGAQBLQARBLAEARQgDABgLgCQgLgBAAgDIgBAYQAAASAFBGIAAAAIACAWIABAGQgggcgIgKQgSgUgbgvQgEgIgKgkQgIgcgKgIIgNgKQgGgLAAgiQAAgYAFgtIAAAAQABgrALAAIACAAQAKADgDg3IABgMIAAgHIAAAAQADgqAahZQAbheAbg6QAfhBBHg9IAEgDIAoggIANgJIAAAAIANgIIA1gaIAEgCIADgBQAGgFCPgyIAMgEIgGADIAFgCIAogLQA6gPAzgKIB8gMQEHAADUBnQBQAnA6AvQAyApASAgQAnBDAQAeQAbA0ALA2IAUBoIANBLQAGAAAAAjQABBXACAjIgBACQgCgDgKAAQgKAAgDAJQgBAFAAARQAAAHgGAlIgMA7QgGAcgNAPQgRATgwAaIgIAFQABgNALgpg");
	this.shape_5.setTransform(0,-34.7);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AigN6QgegIgNgKQgMgJgUgeIh4iuQhxikhFhzIhViPQgWglgIgEQgFgCgHAAQgdgQgHgIQgbgYgZg0Qgdg/gfgcQgHgFAAhNQAAgRAMhsQAMhpAEgSQANg4ATg7QAkh3AbghQB7iXBlgvQAmgSBKgWQBSgZAvgPQBGgTBLgGQAogDAZAAQGJAADJClQD3DKAAHbQAAAVgSANIgHgCQgSBvgLAYQgOAjg3AiIggARQgLAHgDAMQgHAUgGAKQghA8g1BsQgsBbgaAoQg1BUhDBxQgwBOgjAdQgoAihBALQg3AJiEAAQhlAAgugLgAoOrOIAAABIAMgIIgMAHg");

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.1,-90.1,164.2,180.3);


(lib.boy1_front_eyeR_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6B6B8").s().p("AgqBOQgMgVgFgTQgEgPgCgQQgBgHABgJQACgtAdgqQAKgPAMgLQAMgLAOgGIACgBIAFgCIAjgEIgFAFQgRAPgGAMIgBABQggAwAABBQAAAcAFAZQAIAaAfAlQARAVAKAKQhJgHgjg+g");
	this.shape.setTransform(-5.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6B6B8").s().p("AglBgQgMgVgFgTQgEgPgCgQQgBgJABgJQACgrAdgqQAKgPANgLIATgOQAWgLAaACIgFAEQgRAPgGANIgBAAQggAwAAA/QAAAeAGAaQAGAUAVAcQgbADgSAFQgPgNgKgTg");
	this.shape_1.setTransform(-6.2,-1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AALCTIgBAAIgIgBQhKgGgjg/QgLgUgFgUQgFgPgBgQQgBgHAAgJQACgsAdgqQALgQAMgKQANgMAPgGIACAAIAFgCIAjgEIAMACQBHAMAfAzQAZAmgCArIgCAbQgDARgFAQIgHASQgdBFhEAAIgGAAg");
	this.shape_2.setTransform(0.7,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABWCCQgdgPg2AAQgUAAgSABQgbADgUAGQgOgOgLgTQgLgUgFgUQgFgPgBgQQgBgJAAgJQACgqAdgqQALgQAMgLIAWgOQAVgLAbACIAMACQBHAMAfAzQAZAmgCArIgCAbQgDARgFAQIgHASQgKAYgOAPIgEgCg");
	this.shape_3.setTransform(0.7,-1.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAKCsQhagEguhGIgDgFQgcgtACgnQABgeAHgbQANg3AighQAtgqA+AIQA+AGArAvQAvAygDBDQgEBRgoAwQgmArg5AAIgHAAg");
	this.shape_4.setTransform(0.7,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhcAMIgqgNQgIgDgFgFQgGgGALgHQA9APA9ABQBHACAngHIAvgIQALACABAHQACAIgEACQg1AWhJABIgHAAQhJAAghgLg");
	this.shape_5.setTransform(1.4,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABfCeQgsgWg9AAQgaAAg3AMIgYAHIgCAAQgIgBAAgIQAAgFARgJQgKgKgIgNIgDgFQgcgtACgnQABgeAHgbQANg3AighQAtgqA+AIQA+AGArAvQAvAygDBDQgEBRgoAwIgCACQAEAEAAADQACAMgQAAg");
	this.shape_6.setTransform(0.7,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-16.9,31.3,34.6);


(lib.boy1_front_eyeL_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B6B6B8").s().p("Ag6BXIgIgQIgKghIgFgbQgGgrAVgmQAbg2BDgTQAegIAZAHIgVAMIgiASQgQAMgOAcQgMAXgFATQgDAQAAAWQAAA1AjAyQAQAWAQARIgNAAQg6AAggg9gAgBhwIAAAAIABAAIgBAAg");
	this.shape.setTransform(-3.9,0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6B6B8").s().p("Ag6BoIgIgRIgKghIgFgbQgGgqAVgnQAbg2BDgSQAegJAZAHIgVANIgiASQgQALgOAcQgMAYgFATQgDAPAAAXQAAAxAfAvQgUACgTAIIgGACIgCABQgLgMgJgQgAgBhgIAAABIABgBIgBAAg");
	this.shape_1.setTransform(-3.9,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// shadow
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpBXIgJgQIgKghIgEgbQgGgrAUgmQAcg2BFgTQAbgIAaAHQAeAIAZAfQAgAnAGAtIABASQAAANgDAQQgDAUgKAUQgfBGhSALIgCABIgMAAQg8AAggg9g");
	this.shape_2.setTransform(0.8,0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhpBoIgJgRIgKghIgEgbQgGgqAUgnQAcg2BFgSQAbgJAaAHQAeAJAZAfQAgAnAGAsIABAQQAAAQgDAQQgDAUgKATQgLAagSASQgjgKgyAAQgOAAAAABIgCAAIgVACQgVACgUAIIgGACIgCABQgKgMgJgQg");
	this.shape_3.setTransform(0.8,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// eyes
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhiCJQgugrgKhRQgJhCAqg2QAngyA8gMQA+gNAwAmQAlAdASA2QAJAaAEAgQAFAlgXAuIgDAGQgnBKhbAMIgRACQgyAAgkglg");
	this.shape_4.setTransform(0.8,0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUAXQhJgBg1gWQgEgCACgIQABgHALgCIAuAIQAoAHBGgCQA9gBA9gPQALAIgFAFQgGAFgHADIgqANQghALhIAAIgIAAg");
	this.shape_5.setTransform(0.2,11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhwCVQAAgEAFgFQgmgrgJhIQgJhCAqg2QAngyA8gMQA+gNAwAmQAlAdASA2QAJAaAEAeQAFAngXAuIgDAGQgKATgNAOQAPAIAAAHQAAAIgIABIgCAAIgVgIIgBABIgjgJQgUgDgcAAQgqAAgwAQIgOAHIgGADQgQAAACgNg");
	this.shape_6.setTransform(0.8,-0.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.9,-17,31.5,34.9);


(lib.boy1_front_earR_v01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAuQgFgGAAgMQAAgOAJgMQAIgJAJgCQgNgLgqgLQgJAAgDAJIgCAOQgFgBgCgEQgBgCAAgKQgBgXAWgCQAUgCAbAOQBGAhgBAoQABAHgCABIgJABQgGAAgKgOQgPgVgGgIQgOAHgGAJQgDAGAAADQAAADANAQQgCADgDACQAFABgKAAQgJAAgFgFg");
	this.shape.setTransform(-0.4,1.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B69372").s().p("AgeAtQghgbAAgyQAAgUAUgIQATgGAYAGQBAASAAA0QAAA2gyAAQgWAAgWgTg");
	this.shape_1.setTransform(-0.7,3.3);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhkBGQgagxAAg8QAAg1AOgVQAPgXAmAAQAdAAAyArQAxAnAeAtQAFgBABgUQAXAmgBAgQAAAHgEADQgIAHgJANQgZAogHAHQgXAUgvAAQhEAAgkhDg");
	this.shape_2.setTransform(0.9,0.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhvBdQghg2AAhLQAAg5AbgmQAZgjAhgBQApAABEBFQA4A3AIASQAaAtgFAfIAFALQAFALAAAFIgHAJQgIAJgFALQgQAdgZAQQgaAQggAAQhcgBgthKg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-16.7,29.1,33.6);


(lib.boy1_front_earL = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAtQAMgMAAgHQAAgGgPgOIgHgFIgEAEIgTAbQgJALgFAAIgJgEQgCABAAgHQAAgLAbgfQAkgpAoAAQAjAAAAAUQACAWgKgBIgEgCQADgUgNAAQggAAgXAVQAaAKAAAcQAAAXgSAAQgHAAgEgGg");
	this.shape.setTransform(0.4,1.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B69372").s().p("Ag9AfQAAgRAZgfQAegqAkAAQAbAAAGAgQgNBXhFAAQgqAAAAgdg");
	this.shape_1.setTransform(0.7,3.3);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhaBeQgMgWgLgcQgKACgIAOIAAgMIAThJIACAGIABADQAAABA8g8QA7g8A9gCQA9gBAABfQAAA9ghA1QgpBDhIAAQgzAAgZgsg");
	this.shape_2.setTransform(-1,0.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhkCMQghgdgJgtIAAgMIAThJQAVguA3gwQA7g2AvAAQAiABAZAjQAZAmAAA5QAABtg5A1QgtAqhEAAQgpAAgggcg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.3,-16.7,28.8,33.6);


(lib.boy1_front_browL_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABSAsQgGgCgUgQQgWgSgKgDQghgKg2gJQgcgEAAgOQgBgQAtAHQA/AKAsAfQAgAXAAAMIAAAGQgDADgFAAIgCAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-4.4,18.6,8.9);


(lib.boy1_34_footR_v01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiYAWQgvgIAAgOQAAgKAEgUQAjAOA4AFQArADBSAAQBVAAAagEQAUgDAsgOQAEACAAAKQAAAagTAIQghAOh/AAQh3AAg2gJg");
	this.shape.setTransform(0.1,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD652").s().p("AilAeIgMgDQBohGBXAHQA2AEBmAvIAJAGQgfAKgVADQgiAEhQAAQiBgDgxgFg");
	this.shape_1.setTransform(-0.1,-2.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiZBVQhFgLAAgsQAAgnBKgpQBLgpBJAAQAyAABUAkQBZAmAAAeQAAAzgkAOQgjAOiBAAQiKAAgmgHg");
	this.shape_2.setTransform(0,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-9.1,44.7,18.5);


(lib.boy1_34_footL_v01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjhAGQAAgHACgMQAvAABVAMQAcAABhgGQB4gIBHgEIABAcIiRAJQg4ABj5ABQgBgDAAgLg");
	this.shape.setTransform(0.2,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD652").s().p("AjUAkQAqgpBIgVQA4gQA6AAQA1AAA9AUQBDAWAQAbQiBAQimAAQgtAAhVgHg");
	this.shape_1.setTransform(0,-1.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiqBaQg1ADgTgSQgKgJAAgTQAAgjBFguQBVg5BrAAQB5AABHBAQA0AuAAAoQAAAcjiAFQiHgFg+ADg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-9.2,50.8,18.6);


(lib.boy_front_pupil_R_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVARQgEgHAAgKQAAgfAZACQAQAAAFAQQAFAKAAAGQAAAGgGAHQgEAPgOAAQgPAAgIgOg");
	this.shape.setTransform(0.2,-0.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.7,5.3,6.2);


(lib.boy_front_browR_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhuAKQgBgDACgEIAKgDQAFAAAKAFQAPAFAgABQAwgBBVguQAPAAAAANQABANg8AYQg5AXgbAAQhNAAgBgbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-3.7,22.4,7.5);


(lib.boy1_3Q_headThanks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.instance = new lib.boy13Qmouth("single",0);
	this.instance.setTransform(137.4,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({startPosition:9},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:10},0).wait(5).to({x:136.3,startPosition:0},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:7},0).wait(3).to({x:137.4,startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:10},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(9));

	// Layer 4
	this.instance_1 = new lib.boy13Qpupil2("synched",0);
	this.instance_1.setTransform(207.8,116,1,1,0,0,0,2.6,3);

	this.instance_2 = new lib.boy13Qpupil1("synched",0);
	this.instance_2.setTransform(124.4,115.5,1,1,0,0,0,2.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:115.5}},{t:this.instance_1,p:{y:116}}]}).to({state:[{t:this.instance_2,p:{y:118.3}},{t:this.instance_1,p:{y:116.9}}]},12).to({state:[]},2).to({state:[{t:this.instance_2,p:{y:118.3}},{t:this.instance_1,p:{y:116.9}}]},24).to({state:[{t:this.instance_2,p:{y:115.5}},{t:this.instance_1,p:{y:116}}]},1).to({state:[{t:this.instance_2,p:{y:115.5}},{t:this.instance_1,p:{y:116}}]},1).to({state:[{t:this.instance_2,p:{y:115.5}},{t:this.instance_1,p:{y:116}}]},2).to({state:[{t:this.instance_2,p:{y:115.5}},{t:this.instance_1,p:{y:116}}]},22).wait(9));

	// Layer 3
	this.instance_3 = new lib.boy13QeyL("single",0);
	this.instance_3.setTransform(124.1,110.6,1,1,0,0,0,16.1,22.1);

	this.instance_4 = new lib.boy13QeyeR("single",0);
	this.instance_4.setTransform(208.8,108.1,1,1,-4.4,0,0,12.8,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,startPosition:0}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]}).to({state:[{t:this.instance_4,p:{scaleY:1.045,rotation:0,skewX:-4.2,skewY:-4.6,y:107,startPosition:0}},{t:this.instance_3,p:{scaleY:1.046,y:109.5,startPosition:0}}]},7).to({state:[{t:this.instance_4,p:{scaleY:1.074,rotation:0,skewX:-4.1,skewY:-4.7,y:106.2,startPosition:0}},{t:this.instance_3,p:{scaleY:1.075,y:108.8,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.031,rotation:0,skewX:-4.3,skewY:-4.5,y:107.3,startPosition:0}},{t:this.instance_3,p:{scaleY:1.032,y:109.8,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:1.031,rotation:0,skewX:-4.3,skewY:-4.5,y:107.3,startPosition:13}},{t:this.instance_3,p:{scaleY:1.032,y:109.8,startPosition:5}}]},2).to({state:[{t:this.instance_4,p:{scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,startPosition:14}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:6}}]},2).to({state:[{t:this.instance_4,p:{scaleY:1.031,rotation:0,skewX:-4.3,skewY:-4.5,y:107.3,startPosition:13}},{t:this.instance_3,p:{scaleY:1.032,y:109.8,startPosition:5}}]},24).to({state:[{t:this.instance_4,p:{scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,startPosition:1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1.033,rotation:0,skewX:-4.3,skewY:-4.6,y:107.2,startPosition:1}},{t:this.instance_3,p:{scaleY:1.034,y:109.8,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,startPosition:1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,startPosition:0}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},22).wait(9));

	// Layer 1
	this.instance_5 = new lib.boy13Qnose("synched",0);
	this.instance_5.setTransform(183,132,1,1,0,0,0,8.2,7.2);

	this.instance_6 = new lib.boy13Qhairfr("synched",0);
	this.instance_6.setTransform(174.7,44.2,1,1,0,0,0,26,21.9);

	this.instance_7 = new lib.boy13Qheadfr("synched",0);
	this.instance_7.setTransform(145.4,105.8,1,1,0,0,0,86.5,98.2);

	this.instance_8 = new lib.boy13QearR("synched",0);
	this.instance_8.setTransform(220.1,124.2,1,1,0,0,0,11.8,13.8);

	this.instance_9 = new lib.boy13Qhatbrim("synched",0);
	this.instance_9.setTransform(41.4,98,1,1,2.3,0,0,41.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},14).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},25).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},25).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,0.1,224.7,204);


(lib.boy1_3Q_headProblemIs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.instance = new lib.boy13Qmouth("single",0);
	this.instance.setTransform(137.4,152.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcAtQhMgMg5gdQgzgZADgQQABgJAIgBIABAAIABABQALANAjATQA4AaBHALQAoAGAogEQAhgGAGABIACAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABABIAAABQgIAJgfAJQgYAHgcAAQgRAAgSgDg");
	this.shape.setTransform(145,149.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACOAjIgWgCQgggHgTgDIgfgHQgngJgtgHIgzgGIgUgCIgZgCIgBAAQgJgEAAgHIAAgBQABgIAJgDIABgBIAAABIAXADIAbADQAXADAZAEQAnAHApAJIAtAHIAgAHQAdADAGAGIACABIABACIABABIAAACIgCADQgCAGgGABIgBAAg");
	this.shape_1.setTransform(144.4,150.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACQAqIhDgnQgqgVhHAAQgvgBgdAMIgaAKIgBAAQgMAAAAgHQAAgKAkgNQAlgOAoAAQA6AABDAbQBCAZgBAXQAAAIgHAAIgBAAg");
	this.shape_2.setTransform(143.9,151.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{startPosition:0,x:137.4,y:152.5}}]}).to({state:[{t:this.shape}]},2).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance,p:{startPosition:21,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:14,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:17,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:15,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:14,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:20,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:14,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:14,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:15,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:14,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:22,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},5).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},10).to({state:[{t:this.instance,p:{startPosition:18,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:17,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:14,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:18,x:137.4,y:152.5}}]},3).to({state:[{t:this.instance,p:{startPosition:18,x:140.6,y:152.3}}]},1).to({state:[{t:this.instance,p:{startPosition:18,x:137.4,y:152.5}}]},4).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:22,x:137.4,y:152.5}}]},1).to({state:[{t:this.instance,p:{startPosition:13,x:137.4,y:152.5}}]},5).to({state:[{t:this.instance,p:{startPosition:12,x:137.4,y:152.5}}]},2).to({state:[{t:this.shape_1}]},13).to({state:[{t:this.instance,p:{startPosition:0,x:137.4,y:152.5}}]},2).to({state:[{t:this.instance,p:{startPosition:0,x:137.4,y:152.5}}]},8).wait(3));

	// Layer 4
	this.instance_1 = new lib.boy13Qpupil2("synched",0);
	this.instance_1.setTransform(207.8,116,1,1,0,0,0,2.6,3);

	this.instance_2 = new lib.boy13Qpupil1("synched",0);
	this.instance_2.setTransform(124.4,115.5,1,1,0,0,0,2.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:207.8,y:116,scaleY:1,skewX:0}}]}).to({state:[{t:this.instance_2,p:{x:127.7,y:112.5,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:211.1,y:113,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:128.6,y:112,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:213.2,y:111.9,scaleY:1,skewX:0}}]},2).to({state:[{t:this.instance_2,p:{x:129.5,y:111.4,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.1,y:111.3,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:130.4,y:111.1,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.7,y:111,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:128.6,y:115.3,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.5,y:113.9,scaleY:1,skewX:0}}]},8).to({state:[{t:this.instance_2,p:{x:126.7,y:126.1,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:209,y:123.9,scaleY:1,skewX:0}}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:120.6,y:128.2,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:207.1,y:126.1,scaleY:1,skewX:0}}]},4).to({state:[{t:this.instance_2,p:{x:116.5,y:126.6,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:204.5,y:124.2,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:115.1,y:126.4,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:203.1,y:123.7,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:115.1,y:126.4,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:203.1,y:123.7,scaleY:1,skewX:0}}]},2).to({state:[{t:this.instance_2,p:{x:116.2,y:126.7,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:204.2,y:124,scaleY:1,skewX:0}}]},20).to({state:[{t:this.instance_2,p:{x:119.8,y:125.2,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:205.8,y:123.2,scaleY:1,skewX:0}}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:129.1,y:120,scaleY:1.835,skewX:13.2}},{t:this.instance_1,p:{x:212.2,y:120.9,scaleY:1.835,skewX:13.2}}]},3).to({state:[{t:this.instance_2,p:{x:129.9,y:112.2,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.2,y:111.4,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:130.9,y:108.7,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.7,y:108.9,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:130.9,y:108.7,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.7,y:108.9,scaleY:1,skewX:0}}]},9).to({state:[{t:this.instance_2,p:{x:130.9,y:108.7,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:214.7,y:108.9,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:131.7,y:114.2,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:215.5,y:114.4,scaleY:1,skewX:0}}]},26).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:126.7,y:126.1,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:209,y:123.9,scaleY:1,skewX:0}}]},3).to({state:[{t:this.instance_2,p:{x:124.6,y:118.7,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:208,y:119.1,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:207.8,y:116,scaleY:1,skewX:0}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5,scaleY:1,skewX:0}},{t:this.instance_1,p:{x:207.8,y:116,scaleY:1,skewX:0}}]},4).wait(3));

	// Layer 3
	this.instance_3 = new lib.boy13QeyL("single",0);
	this.instance_3.setTransform(124.1,110.6,1,1,0,0,0,16.1,22.1);

	this.instance_4 = new lib.boy13QeyeR("single",0);
	this.instance_4.setTransform(208.8,108.1,1,1,-4.4,0,0,12.8,20.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(28,29,36,0.322)").s().p("AgcArQgPgmgDgjQgDgjAWgoIAJAJQALALAMAFQgLAcACAeQADAeAXApIAZApQABAOgPABIgEABQgjAAgWg/g");
	this.shape_3.setTransform(202.2,118.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AheArQgJgXABgUQgBgxAWgjIAWAKQAgAPArASQARAHA3ARIAPAEQgCAZgMAUQgdAzhQABIgEABQgzAAgTgqg");
	this.shape_4.setTransform(209.6,118.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhrBgQgMgagBgiQgBg1AWgnIgGgFQAAgEgCgEIABAAIABgEIABgCIAHAAIB3AtIBJAdIAYAHIACAVQgBAdgRAbQgiA7hZACIgFAAQg7AAgXgwgAhmAjQgBAWAJAXQATArA3gCQBQgBAdgzQAMgUACgbIgPgEQg3gRgRgFQgrgSgggPIgWgKQgWAjABAvgABLg+QgfgFgngaQgmgbADgSIABgFIArAkQAqAfAsAHIAKgBQAGgBAEAGIgCADQgMACgLAAQgKAAgKgCgABuiEIgCgCIADACg");
	this.shape_5.setTransform(209.6,114.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(28,29,36,0.322)").s().p("AgxBvQgBgDALgNIAagbQAigtAAgqIgBgJIAIAEQAWALASAIQAAAggMAcQgaA/hGACIgBAAQgIAAAAgJgAhAh2IgDgBIAJABIgGAAg");
	this.shape_6.setTransform(213.8,116.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]}).to({state:[{t:this.instance_4,p:{startPosition:11,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:0.999,scaleY:0.935,rotation:0,skewX:-4.7,skewY:-4.1,y:109.7}},{t:this.instance_3,p:{scaleY:0.935,y:112,startPosition:0}}]},10).to({state:[{t:this.shape_6},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:1}}]},1).to({state:[{t:this.shape_6},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:0.999,scaleY:0.902,rotation:0,skewX:-4.9,skewY:-4,y:110.6}},{t:this.instance_3,p:{scaleY:0.902,y:112.9,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:0.999,scaleY:0.977,rotation:0,skewX:-4.5,skewY:-4.3,y:108.7}},{t:this.instance_3,p:{scaleY:0.977,y:111.1,startPosition:0}}]},2).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:0.999,scaleY:0.935,rotation:0,skewX:-4.7,skewY:-4.1,y:109.7}},{t:this.instance_3,p:{scaleY:0.935,y:112,startPosition:0}}]},20).to({state:[{t:this.shape_6},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:1}}]},1).to({state:[{t:this.shape_6},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.instance_4,p:{startPosition:1,scaleX:0.999,scaleY:0.935,rotation:0,skewX:-4.7,skewY:-4.1,y:109.7}},{t:this.instance_3,p:{scaleY:0.935,y:112,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:4,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:2}}]},9).to({state:[{t:this.instance_4,p:{startPosition:3,scaleX:0.999,scaleY:0.966,rotation:0,skewX:-4.6,skewY:-4.3,y:108.9}},{t:this.instance_3,p:{scaleY:0.966,y:111.3,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{startPosition:3,scaleX:0.999,scaleY:0.833,rotation:0,skewX:-5.3,skewY:-3.7,y:112.1}},{t:this.instance_3,p:{scaleY:0.832,y:114.1,startPosition:2}}]},26).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:1}}]},1).to({state:[{t:this.shape_6},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:7}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:0.999,scaleY:0.919,rotation:0,skewX:-4.8,skewY:-4,y:110.2}},{t:this.instance_3,p:{scaleY:0.919,y:112.4,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1}},{t:this.instance_3,p:{scaleY:1,y:110.6,startPosition:0}}]},4).wait(3));

	// Layer 1
	this.instance_5 = new lib.boy13Qnose("synched",0);
	this.instance_5.setTransform(183,132,1,1,0,0,0,8.2,7.2);

	this.instance_6 = new lib.boy13Qhairfr("synched",0);
	this.instance_6.setTransform(174.7,44.2,1,1,0,0,0,26,21.9);

	this.instance_7 = new lib.boy13Qheadfr("synched",0);
	this.instance_7.setTransform(145.4,105.8,1,1,0,0,0,86.5,98.2);

	this.instance_8 = new lib.boy13QearR("synched",0);
	this.instance_8.setTransform(220.1,124.2,1,1,0,0,0,11.8,13.8);

	this.instance_9 = new lib.boy13Qhatbrim("synched",0);
	this.instance_9.setTransform(41.4,98,1,1,2.3,0,0,41.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},11).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},4).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},27).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},9).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},26).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},10).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,0.1,224.7,204);


(lib.boy1_3Q_headIDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.instance = new lib.boy13Qmouth("single",0);
	this.instance.setTransform(137.4,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(98).to({x:135.8,y:152.3},0).wait(2).to({startPosition:0},0).wait(2).to({x:141.6},0).wait(2).to({x:139.2,y:152.8},0).wait(2).to({x:137.4,y:152.5},0).wait(45).to({x:136.5},0).wait(2).to({x:137.4},0).wait(87));

	// Layer 4
	this.instance_1 = new lib.boy13Qpupil2("synched",0);
	this.instance_1.setTransform(207.8,116,1,1,0,0,0,2.6,3);

	this.instance_2 = new lib.boy13Qpupil1("synched",0);
	this.instance_2.setTransform(124.4,115.5,1,1,0,0,0,2.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]}).to({state:[{t:this.instance_2,p:{x:124.2,y:118.5}},{t:this.instance_1,p:{y:117.6,x:207.8}}]},31).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:124.2,y:118.5}},{t:this.instance_1,p:{y:117.6,x:207.8}}]},3).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},2).to({state:[{t:this.instance_2,p:{x:117.8,y:113.9}},{t:this.instance_1,p:{y:114.3,x:202.6}}]},59).to({state:[{t:this.instance_2,p:{x:123.6,y:118}},{t:this.instance_1,p:{y:115.9,x:208.8}}]},2).to({state:[{t:this.instance_2,p:{x:126.7,y:113.3}},{t:this.instance_1,p:{y:113,x:212.2}}]},2).to({state:[{t:this.instance_2,p:{x:129.5,y:109.6}},{t:this.instance_1,p:{y:111.1,x:215}}]},2).to({state:[{t:this.instance_2,p:{x:133.1,y:109.6}},{t:this.instance_1,p:{y:110.5,x:217.7}}]},2).to({state:[{t:this.instance_2,p:{x:131.8,y:116.7}},{t:this.instance_1,p:{y:117.6,x:216.3}}]},9).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:131.8,y:116.7}},{t:this.instance_1,p:{y:117.6,x:216.3}}]},3).to({state:[{t:this.instance_2,p:{x:133.1,y:109.6}},{t:this.instance_1,p:{y:110.5,x:217.7}}]},1).to({state:[{t:this.instance_2,p:{x:131.8,y:116.7}},{t:this.instance_1,p:{y:117.6,x:216.3}}]},4).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:131.8,y:116.7}},{t:this.instance_1,p:{y:117.6,x:216.3}}]},3).to({state:[{t:this.instance_2,p:{x:133.1,y:109.6}},{t:this.instance_1,p:{y:110.5,x:217.7}}]},1).to({state:[{t:this.instance_2,p:{x:131.2,y:109.5}},{t:this.instance_1,p:{y:110.4,x:215.7}}]},22).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},2).to({state:[{t:this.instance_2,p:{x:124.2,y:118.5}},{t:this.instance_1,p:{y:117.6,x:207.8}}]},41).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:124.2,y:118.5}},{t:this.instance_1,p:{y:117.6,x:207.8}}]},3).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5}},{t:this.instance_1,p:{y:116,x:207.8}}]},2).wait(38));

	// Layer 3
	this.instance_3 = new lib.boy13QeyL("single",0);
	this.instance_3.setTransform(124.1,110.6,1,1,0,0,0,16.1,22.1);

	this.instance_4 = new lib.boy13QeyeR("single",0);
	this.instance_4.setTransform(208.8,108.1,1,1,-4.4,0,0,12.8,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]}).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},31).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:1,scaleY:1,y:110.6,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:0.999,scaleY:0.964,rotation:0,skewX:-4.6,skewY:-4.2,y:109,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:0.964,y:111.4,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1.023,rotation:0,skewX:-4.3,skewY:-4.5,y:107.4,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1.024,y:110,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]},2).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108,x:205.4}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.4,x:120.7}}]},59).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108,x:205.4}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.4,x:120.7}}]},2).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:205.7}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.5,x:121}}]},2).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:107.9,x:207.3}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.3,x:122.6}}]},2).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]},2).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},9).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:1,scaleY:1,y:110.6,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},4).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:1,scaleY:1,y:110.6,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108,x:206.9}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.4,x:122.2}}]},22).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]},2).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},41).to({state:[{t:this.instance_4,p:{startPosition:2,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:1,scaleY:1,y:110.6,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,x:124.1}}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:0.999,scaleY:0.964,rotation:0,skewX:-4.6,skewY:-4.2,y:109,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:0.964,y:111.4,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1.023,rotation:0,skewX:-4.3,skewY:-4.5,y:107.4,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1.024,y:110,x:124.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,x:208.8}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,x:124.1}}]},2).wait(38));

	// Layer 1
	this.instance_5 = new lib.boy13Qnose("synched",0);
	this.instance_5.setTransform(183,132,1,1,0,0,0,8.2,7.2);

	this.instance_6 = new lib.boy13Qhairfr("synched",0);
	this.instance_6.setTransform(174.7,44.2,1,1,0,0,0,26,21.9);

	this.instance_7 = new lib.boy13Qheadfr("synched",0);
	this.instance_7.setTransform(145.4,105.8,1,1,0,0,0,86.5,98.2);

	this.instance_8 = new lib.boy13QearR("synched",0);
	this.instance_8.setTransform(220.1,124.2,1,1,0,0,0,11.8,13.8);

	this.instance_9 = new lib.boy13Qhatbrim("synched",0);
	this.instance_9.setTransform(41.4,98,1,1,2.3,0,0,41.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{x:41.4,y:98}},{t:this.instance_8,p:{x:220.1}},{t:this.instance_7},{t:this.instance_6,p:{x:174.7}},{t:this.instance_5,p:{x:183,y:132}}]}).to({state:[{t:this.instance_9,p:{x:49.2,y:95}},{t:this.instance_8,p:{x:220.4}},{t:this.instance_7},{t:this.instance_6,p:{x:171.2}},{t:this.instance_5,p:{x:179.5,y:131.9}}]},98).to({state:[{t:this.instance_9,p:{x:49.2,y:95}},{t:this.instance_8,p:{x:220.4}},{t:this.instance_7},{t:this.instance_6,p:{x:171.2}},{t:this.instance_5,p:{x:179.5,y:131.9}}]},2).to({state:[{t:this.instance_9,p:{x:47.8,y:95}},{t:this.instance_8,p:{x:220.1}},{t:this.instance_7},{t:this.instance_6,p:{x:173.9}},{t:this.instance_5,p:{x:179.8,y:132}}]},2).to({state:[{t:this.instance_9,p:{x:45.3,y:97.8}},{t:this.instance_8,p:{x:220.1}},{t:this.instance_7},{t:this.instance_6,p:{x:174.7}},{t:this.instance_5,p:{x:182.1,y:131.9}}]},2).to({state:[{t:this.instance_9,p:{x:41.4,y:98}},{t:this.instance_8,p:{x:220.1}},{t:this.instance_7},{t:this.instance_6,p:{x:174.7}},{t:this.instance_5,p:{x:183,y:132}}]},2).to({state:[{t:this.instance_9,p:{x:43.5,y:98}},{t:this.instance_8,p:{x:220.1}},{t:this.instance_7},{t:this.instance_6,p:{x:173.2}},{t:this.instance_5,p:{x:181.5,y:132}}]},45).to({state:[{t:this.instance_9,p:{x:41.4,y:98}},{t:this.instance_8,p:{x:220.1}},{t:this.instance_7},{t:this.instance_6,p:{x:174.7}},{t:this.instance_5,p:{x:183,y:132}}]},2).wait(87));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,0.1,224.7,204);


(lib.boy1_3Q_head_yeah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mouth
	this.instance = new lib.boy13Qmouth("single",0);
	this.instance.setTransform(137.4,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({scaleX:1.22,y:152},0).wait(1).to({scaleX:1.35,x:137.3,y:151.1},0).wait(7).to({scaleX:1,scaleY:0.77,x:137.4,y:152.5,startPosition:1},0).wait(1).to({scaleY:1,x:137.6,startPosition:10},0).wait(8).to({x:137.4,startPosition:1},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:3},0).wait(7).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(17));

	// Layer 4
	this.instance_1 = new lib.boy13Qpupil2("synched",0);
	this.instance_1.setTransform(207.8,116,1,1,0,0,0,2.6,3);

	this.instance_2 = new lib.boy13Qpupil1("synched",0);
	this.instance_2.setTransform(124.4,115.5,1,1,0,0,0,2.6,3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5,scaleY:1}},{t:this.instance_1,p:{y:116,scaleY:1,x:207.8}}]}).to({state:[{t:this.instance_2,p:{x:124.9,y:119,scaleY:1}},{t:this.instance_1,p:{y:117.4,scaleY:1,x:207.8}}]},4).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:124.9,y:119,scaleY:1}},{t:this.instance_1,p:{y:117.4,scaleY:1,x:207.8}}]},7).to({state:[{t:this.instance_2,p:{x:126.2,y:112.9,scaleY:1.881}},{t:this.instance_1,p:{y:115.2,scaleY:1.881,x:209.7}}]},1).to({state:[{t:this.instance_2,p:{x:125,y:105.7,scaleY:1}},{t:this.instance_1,p:{y:108.9,scaleY:1,x:208.3}}]},1).to({state:[{t:this.instance_2,p:{x:125,y:106.7,scaleY:1}},{t:this.instance_1,p:{y:109.7,scaleY:1,x:208.3}}]},2).to({state:[{t:this.instance_2,p:{x:124.9,y:119,scaleY:1}},{t:this.instance_1,p:{y:117.4,scaleY:1,x:207.8}}]},5).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:124.9,y:120.2,scaleY:1}},{t:this.instance_1,p:{y:118.6,scaleY:1,x:207.8}}]},37).to({state:[{t:this.instance_2,p:{x:124.4,y:117.3,scaleY:1}},{t:this.instance_1,p:{y:117.8,scaleY:1,x:207.8}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5,scaleY:1}},{t:this.instance_1,p:{y:116,scaleY:1,x:207.8}}]},1).to({state:[{t:this.instance_2,p:{x:124.4,y:115.5,scaleY:1}},{t:this.instance_1,p:{y:116,scaleY:1,x:207.8}}]},2).wait(17));

	// Layer 3
	this.instance_3 = new lib.boy13QeyL("single",0);
	this.instance_3.setTransform(124.1,110.6,1,1,0,0,0,16.1,22.1);

	this.instance_4 = new lib.boy13QeyeR("single",0);
	this.instance_4.setTransform(208.8,108.1,1,1,-4.4,0,0,12.8,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,regY:22.1}}]}).to({state:[{t:this.instance_4,p:{startPosition:13,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,regY:22.1}}]},4).to({state:[{t:this.instance_4,p:{startPosition:2,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:1,scaleY:1,y:110.6,regY:22.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,regY:22.1}}]},7).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:4,scaleY:1,y:110.6,regY:22.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.058,rotation:0,skewX:-4.2,skewY:-4.7,y:106.6,scaleX:1}},{t:this.instance_3,p:{startPosition:4,scaleY:1.059,y:109.2,regY:22.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:4,scaleY:1,y:110.6,regY:22.1}}]},2).to({state:[{t:this.instance_4,p:{startPosition:13,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,regY:22.1}}]},5).to({state:[{t:this.instance_4,p:{startPosition:2,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:1,scaleY:1,y:110.6,regY:22.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:13,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:5,scaleY:1,y:110.6,regY:22.1}}]},37).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:0.932,rotation:0,skewX:-4.7,skewY:-4.1,y:109.9,scaleX:0.999}},{t:this.instance_3,p:{startPosition:0,scaleY:0.932,y:112.2,regY:22.1}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.017,rotation:0,skewX:-4.3,skewY:-4.5,y:107.7,scaleX:1}},{t:this.instance_3,p:{startPosition:0,scaleY:1.017,y:110.1,regY:22}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1,rotation:-4.4,skewX:0,skewY:0,y:108.1,scaleX:1}},{t:this.instance_3,p:{startPosition:0,scaleY:1,y:110.6,regY:22.1}}]},2).wait(17));

	// Layer 1
	this.instance_5 = new lib.boy13Qnose("synched",0);
	this.instance_5.setTransform(183,132,1,1,0,0,0,8.2,7.2);

	this.instance_6 = new lib.boy13Qhairfr("synched",0);
	this.instance_6.setTransform(174.7,44.2,1,1,0,0,0,26,21.9);

	this.instance_7 = new lib.boy13Qheadfr("synched",0);
	this.instance_7.setTransform(145.4,105.8,1,1,0,0,0,86.5,98.2);

	this.instance_8 = new lib.boy13QearR("synched",0);
	this.instance_8.setTransform(220.1,124.2,1,1,0,0,0,11.8,13.8);

	this.instance_9 = new lib.boy13Qhatbrim("synched",0);
	this.instance_9.setTransform(41.4,98,1,1,2.3,0,0,41.4,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},5).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},7).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},5).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},37).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.3,0.1,224.7,204);


(lib.Henry_Yeah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// collar
	this.instance = new lib.boy13Qcollar("synched",0);
	this.instance.setTransform(36.9,17.8,1.038,1.098,0,0,0,37.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({rotation:1.5,x:36.1,y:22.3},0).wait(1).to({regX:37.7,rotation:3.2,x:36,y:26.3},0).wait(1).to({rotation:4.5,x:36.7,y:29},0).wait(2).to({regY:12.1,rotation:5.6,x:36,y:30.7},0).wait(3).to({x:36.2,y:29.7},0).wait(2).to({regY:12.2,rotation:3.2,x:37.3,y:24.1},0).wait(1).to({rotation:-1.6,x:38.1,y:-1.6},0).wait(1).to({rotation:-3.1,x:39.7,y:-13.3},0).wait(1).to({rotation:-4.4,x:39,y:-18.4},0).wait(1).to({x:38.5,y:-19.5},0).wait(2).to({scaleY:1.1,rotation:-3.3,x:36.5,y:-18},0).wait(2).to({regX:37.8,rotation:-2,x:35.9,y:-12.2},0).wait(1).to({regY:12.1,scaleX:1.04,rotation:0.8,x:33.9,y:0},0).wait(1).to({regX:37.6,regY:12.2,rotation:2.2,x:29.1,y:28.1},0).wait(1).to({regX:37.8,regY:12,scaleX:1.06,x:29.2,y:28.4},0).wait(1).to({startPosition:0},0).wait(2).to({x:29.3,y:27.3},0).wait(1).to({regX:37.6,regY:12.2,scaleX:1.04,y:25.3},0).wait(3).to({y:24.1},0).wait(2).to({y:24.4},0).wait(20).to({rotation:3.4,x:28.5,y:28.2},0).wait(1).to({regX:37.8,rotation:4.2,x:31.6,y:29.6},0).wait(1).to({rotation:5.5,x:32.7,y:30.7},0).wait(2).to({rotation:7,x:35,y:31.6},0).wait(2).to({rotation:6,x:35.8,y:30},0).wait(1).to({regX:37.6,scaleX:1.04,scaleY:1.1,rotation:1.5,x:36.2,y:23},0).wait(1).to({rotation:1,x:35.7,y:19.1},0).wait(2).to({rotation:0,x:36.9,y:16.9},0).wait(2).to({y:17.8},0).wait(16));

	// armR
	this.instance_1 = new lib.boy13QarmL("single",1);
	this.instance_1.setTransform(-4.1,55.2,1,1,0,0,0,15.1,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regY:38.8,scaleY:1.11,rotation:1.5,x:-6.1,y:61.9,startPosition:66},0).wait(1).to({regY:38.7,scaleY:1,rotation:3.2,x:-7.1,y:61.2,startPosition:62},0).wait(1).to({regX:28.6,regY:8.7,rotation:7.3,x:8.5,y:34.1,startPosition:2},0).wait(2).to({regX:33.2,regY:1.9,scaleX:1,scaleY:1,rotation:10.4,x:13,y:29.1},0).wait(3).to({regX:30.8,regY:8.2,rotation:11.9,x:10.1,y:34.1},0).wait(2).to({regX:15.1,regY:38.7,scaleX:1,scaleY:1,rotation:3.2,x:-5.8,y:59.1},0).wait(1).to({regY:38.8,scaleX:1,scaleY:1,rotation:-1.6,x:-1.7,y:37.1,startPosition:67},0).wait(1).to({scaleX:1,scaleY:1,rotation:54.6,x:-21.4,y:9.1,startPosition:7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.4,x:0.9,y:22,startPosition:3},0).wait(1).to({regX:15,scaleX:1,scaleY:1,rotation:0,skewX:-5,skewY:0,x:0.2,y:20.8},0).wait(2).to({regX:27.4,regY:15.1,scaleX:1.06,scaleY:1,skewX:0.7,skewY:5.2,x:9.2,y:-1.6},0).wait(2).to({regX:23.7,regY:16.4,scaleX:1,rotation:3.1,skewX:0,skewY:0,x:3.7,y:3.8},0).wait(1).to({regX:26.2,regY:19.9,scaleX:1,scaleY:1,rotation:10.1,x:3.4,y:18},0).wait(1).to({regX:15,regY:38.7,scaleX:1,scaleY:1,rotation:2.2,x:-13.3,y:63.8,startPosition:8},0).wait(1).to({regX:20.1,regY:2.8,scaleX:1.01,scaleY:0.96,rotation:0,skewX:2.6,skewY:-1.4,x:-6.7,y:25.6,startPosition:4},0).wait(1).to({regX:15,regY:38.7,scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:-13.4,y:64.4},0).wait(2).to({regX:21.2,regY:4.4,scaleY:1.06,rotation:0,skewX:-0.9,skewY:2.2,x:-5.8,y:29.3},0).wait(1).to({regX:15,regY:38.7,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:-10.5,y:62.1,startPosition:9},0).wait(1).to({x:-10,y:61.9,startPosition:10},0).wait(1).to({x:-13.2,y:61.6,startPosition:11},0).wait(1).to({regX:15.1,regY:38.8,scaleX:1.03,rotation:0,skewX:2.2,skewY:3.2,x:-12.7,y:60.6,startPosition:5},0).wait(2).to({regX:15,regY:38.7,scaleX:1,rotation:2.2,skewX:0,skewY:0,x:-13.2,y:60.7},0).wait(20).to({regX:27.7,regY:8.7,rotation:-1.4,x:-0.3,y:34.4},0).wait(1).to({regX:25.2,regY:16.6,rotation:1.7,x:-0.5,y:43.1},0).wait(1).to({regX:27.4,regY:4.2,scaleX:1,scaleY:1,rotation:13.3,x:3.5,y:31.5},0).wait(2).to({regX:14.9,regY:38.6,scaleX:1,scaleY:1,rotation:22,x:-12.1,y:62.4,startPosition:11},0).wait(2).to({regX:32.8,regY:4.2,scaleX:1,scaleY:1,rotation:10.2,x:11.7,y:32.7,startPosition:6},0).wait(1).to({regX:34.2,regY:3.1,scaleX:1,scaleY:1.11,rotation:0,skewX:2.6,skewY:1.5,x:14,y:24.2,startPosition:1},0).wait(1).to({regX:15.1,regY:38.7,scaleY:1,rotation:1,skewX:0,skewY:0,x:-5.9,y:55.7},0).wait(2).to({rotation:0,x:-4,y:54.3},0).wait(2).to({y:55.2},0).wait(16));

	// torso
	this.instance_2 = new lib.boy13Qtorso("synched",0);
	this.instance_2.setTransform(41.4,59.8,1.012,1,0,0,0,44.8,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({regX:44.9,rotation:1.5,x:39.6,y:64.5},0).wait(1).to({regX:44.8,rotation:3.2,x:37.9,y:68.4},0).wait(1).to({rotation:4.5,x:37.7,y:71.2},0).wait(2).to({regX:44.9,rotation:5.6,x:36.3,y:73.1},0).wait(3).to({x:36.5,y:72},0).wait(2).to({regX:44.8,rotation:3.2,x:39.3,y:66.3},0).wait(1).to({scaleX:1.01,scaleY:1,rotation:-1.6,x:43.8,y:39.9},0).wait(1).to({scaleX:1.01,rotation:-3.1,x:46.4,y:28.2},0).wait(1).to({scaleX:1.01,rotation:-4.4,x:46.6,y:22.9},0).wait(1).to({x:46.1,y:21.8},0).wait(2).to({regX:44.9,rotation:-3.3,x:43.4,y:23.4},0).wait(2).to({rotation:-2,x:41.8,y:29.3},0).wait(1).to({regY:43.7,rotation:0.8,x:37.6,y:42},0).wait(1).to({regX:44.8,regY:43.5,rotation:2.2,x:31.9,y:70.1},0).wait(1).to({x:31.8,y:70.7},0).wait(1).to({startPosition:0},0).wait(2).to({x:31.9,y:69.6},0).wait(1).to({x:32,y:67.9},0).wait(3).to({y:66.7},0).wait(2).to({y:67},0).wait(20).to({regX:45,rotation:3.4,x:30.4,y:70.9},0).wait(1).to({regX:44.8,rotation:4.2,x:32.6,y:72.4},0).wait(1).to({regX:44.9,rotation:5.5,x:32.9,y:73.6},0).wait(2).to({rotation:7,x:34.1,y:74.4},0).wait(2).to({rotation:6,x:35.6,y:72.8},0).wait(1).to({regY:43.6,scaleX:1.01,scaleY:1,rotation:1.5,x:39.6,y:65.2},0).wait(1).to({rotation:1,x:39.5,y:61.2},0).wait(2).to({regX:44.8,rotation:0,x:41.4,y:58.9},0).wait(2).to({y:59.8},0).wait(16));

	// footR
	this.instance_3 = new lib.boy1_34_footR_v01("single",0);
	this.instance_3.setTransform(29.8,149.5,1,1,0,0,0,-0.7,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({rotation:1.5,x:25.5,y:153.8},0).wait(1).to({regY:-5.6,rotation:3.3,x:21.3,y:157.4},0).wait(1).to({rotation:4.6,x:18.4,y:159.7},0).wait(2).to({rotation:5.6,x:15.3,y:161.6},0).wait(3).to({x:15.5,y:160.5},0).wait(2).to({rotation:3.3,x:21.9,y:156.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.8,x:22.3,y:121},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:10.7,x:24.6,y:112.6},0).wait(1).to({regY:-5.5,rotation:14.5,x:20,y:110.7},0).wait(2).to({regX:-0.5,regY:-5.6,rotation:16.5,x:18.6,y:110.9},0).wait(2).to({regX:-0.6,rotation:13.1,x:16,y:118},0).wait(1).to({rotation:16.1,x:7.3,y:129.2},0).wait(1).to({regY:-5.7,scaleX:1,scaleY:1,rotation:0,x:29.8,y:149.5},0).wait(1).to({x:29.7,y:150.1},0).wait(1).to({startPosition:0},0).wait(2).to({x:29.8,y:149.1},0).wait(1).to({x:29.9,y:147.4},0).wait(3).to({y:146.5},0).wait(2).to({y:146.8},0).wait(20).to({rotation:1.3,x:26.4,y:150.5},0).wait(1).to({rotation:0,x:29.9,y:146.8},0).wait(1).to({rotation:1.3,x:28.5,y:147.9},0).wait(2).to({regX:-0.5,rotation:2.8,x:27.7,y:148.5},0).wait(2).to({regY:-5.8,rotation:1.7,x:30.6,y:147},0).wait(1).to({regX:-0.6,regY:-5.7,rotation:1.5,x:25.6,y:154.5},0).wait(1).to({rotation:0,x:29.8,y:148.6},0).wait(2).to({startPosition:0},0).wait(2).to({y:149.5},0).wait(16));

	// legR
	this.instance_4 = new lib.boy13Qleg1("single",0);
	this.instance_4.setTransform(32,91.5,1,1,0,0,0,23.9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({rotation:1.5,x:29.3,y:95.8},0).wait(1).to({regY:12.1,rotation:3.3,x:26.8,y:99.6},0).wait(1).to({rotation:4.6,x:25.9,y:102.1},0).wait(2).to({regY:12,rotation:5.6,x:23.9,y:103.7},0).wait(3).to({x:24.1,y:102.6},0).wait(2).to({rotation:3.3,x:28.2,y:97.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.3,x:33.8,y:72.6},0).wait(1).to({regY:12.1,rotation:11.8,x:37.3,y:61.2},0).wait(1).to({regY:12,rotation:10.7,x:38.2,y:56.2},0).wait(1).to({regX:23.8,rotation:14.5,x:37.3,y:55.2},0).wait(2).to({regX:23.9,regY:11.9,scaleX:1,scaleY:1,rotation:17.5,x:34.4,y:57.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:13.1,x:32,y:62.1},0).wait(1).to({regX:23.8,rotation:16.1,x:26,y:74.2},0).wait(1).to({regX:23.9,regY:12,rotation:2.2,x:21.4,y:101.4},0).wait(1).to({rotation:2.2,x:21.3,y:102},0).wait(1).to({startPosition:0},0).wait(2).to({x:21.4,y:100.9},0).wait(1).to({x:21.5,y:99.2},0).wait(3).to({y:98},0).wait(2).to({y:98.3},0).wait(20).to({rotation:3.5,x:19.1,y:101.9},0).wait(1).to({regX:24,rotation:4.3,x:21.1,y:103.3},0).wait(1).to({rotation:5.5,x:20.6,y:104.1},0).wait(2).to({rotation:7.1,x:21,y:104.6},0).wait(2).to({regY:11.8,rotation:6,x:23,y:103},0).wait(1).to({regX:23.9,regY:12.1,scaleX:1,scaleY:1,rotation:1.5,x:29.4,y:96.6},0).wait(1).to({regY:12,rotation:0,x:32,y:90.6},0).wait(2).to({startPosition:0},0).wait(2).to({y:91.5},0).wait(16));

	// footL
	this.instance_5 = new lib.boy1_34_footL_v01("single",0);
	this.instance_5.setTransform(60.3,149.8,1,1,0,0,0,-9.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({rotation:1.5,x:55.9,y:154.9},0).wait(1).to({regX:-9.4,rotation:3.3,x:51.7,y:159.4},0).wait(1).to({regX:-9.5,rotation:4.6,x:48.8,y:162.3},0).wait(2).to({rotation:5.6,x:45.6,y:164.6},0).wait(3).to({x:45.8,y:163.6},0).wait(2).to({regX:-9.4,rotation:3.3,x:52.3,y:158.2},0).wait(1).to({regX:-9.5,scaleX:1,scaleY:1,rotation:-20.6,x:82.9,y:118.6},0).wait(1).to({x:87.1,y:111.8},0).wait(1).to({rotation:-26.6,x:93.7,y:103.5},0).wait(1).to({rotation:-30.9,x:96.9,y:100.5},0).wait(2).to({rotation:-29.1,x:92,y:103.4},0).wait(2).to({rotation:-24.3,x:85.5,y:111.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.8,x:73,y:127.7},0).wait(1).to({regY:-2.5,scaleX:1,scaleY:1,rotation:-2.1,x:66,y:146.8},0).wait(1).to({rotation:-2.1,x:65.9,y:147.4},0).wait(1).to({startPosition:0},0).wait(2).to({x:66,y:146.4},0).wait(1).to({x:66.1,y:144.7},0).wait(3).to({y:143.5},0).wait(2).to({y:143.8},0).wait(20).to({regY:-2.4,rotation:-0.8,x:62.7,y:148.4},0).wait(1).to({regX:-9.6,regY:-2.5,rotation:0,x:63.9,y:150.2},0).wait(1).to({rotation:1.1,x:62.3,y:152},0).wait(2).to({regY:-2.6,rotation:2.6,x:61.3,y:153.5},0).wait(2).to({rotation:1.5,x:64.3,y:151.4},0).wait(1).to({regX:-9.5,regY:-2.4,x:56,y:155.6},0).wait(1).to({rotation:0,x:60.3,y:148.9},0).wait(2).to({startPosition:0},0).wait(2).to({y:149.8},0).wait(16));

	// legL
	this.instance_6 = new lib.boy13Qleg2("single",0);
	this.instance_6.setTransform(55.4,90.6,1,1,0,0,0,11.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({rotation:1.5,x:52.7,y:95.6},0).wait(1).to({rotation:3.3,x:50.3,y:100.1},0).wait(1).to({rotation:4.6,x:49.3,y:103.1},0).wait(2).to({rotation:5.6,x:47.3,y:105.2},0).wait(3).to({x:47.4,y:104.1},0).wait(2).to({rotation:3.3,x:51.6,y:97.9},0).wait(1).to({regY:4,scaleX:1,scaleY:1,rotation:-19,x:58.7,y:70.3},0).wait(1).to({rotation:-20.6,x:62.2,y:58.2},0).wait(1).to({rotation:-26.6,x:63.3,y:52.8},0).wait(1).to({regX:11.3,rotation:-30.9,x:62.9,y:52.2},0).wait(2).to({regX:11.2,rotation:-29.1,x:59.4,y:54.1},0).wait(2).to({regY:4.1,rotation:-24.3,x:57.2,y:60},0).wait(1).to({regX:11.3,regY:4,scaleX:1,scaleY:1,rotation:-16.8,x:51.9,y:72.5},0).wait(1).to({regX:11.2,regY:3.9,scaleX:1,scaleY:1,rotation:2.2,x:44.8,y:101.4},0).wait(1).to({rotation:2.2,x:44.7,y:102},0).wait(1).to({startPosition:0},0).wait(2).to({x:44.8,y:101},0).wait(1).to({x:44.9,y:99.3},0).wait(3).to({y:98.1},0).wait(2).to({y:98.4},0).wait(20).to({regY:4,rotation:3.5,x:42.4,y:102.6},0).wait(1).to({regX:11.3,regY:3.9,rotation:4.3,x:44.4,y:104.1},0).wait(1).to({rotation:5.5,x:43.9,y:105.5},0).wait(2).to({rotation:7.1,x:44.2,y:106.6},0).wait(2).to({rotation:6,x:46.4,y:104.8},0).wait(1).to({regX:11.2,scaleX:1,scaleY:1,rotation:1.5,x:52.8,y:96.3},0).wait(1).to({rotation:0,x:55.4,y:89.7},0).wait(2).to({startPosition:0},0).wait(2).to({y:90.6},0).wait(16));

	// armL
	this.instance_7 = new lib.boy13QarmR("single",1);
	this.instance_7.setTransform(83,51.4,1,1,0,0,0,17.4,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({regX:17.5,rotation:1.5,x:81.4,y:57.2,startPosition:6},0).wait(1).to({regX:17.4,rotation:3.2,x:80,y:62.5,startPosition:2},0).wait(1).to({regX:3.2,regY:7.9,rotation:1.5,x:68.1,y:35.2},0).wait(2).to({regX:5.5,regY:7.2,scaleX:1,scaleY:1,rotation:0,x:69.7,y:37.2},0).wait(3).to({regX:5.8,regY:2.6,rotation:-1.3,x:70.5,y:31.6},0).wait(2).to({regX:17.4,regY:37.8,scaleX:1,scaleY:1,rotation:3.2,x:81.3,y:60.4},0).wait(1).to({regY:37.9,scaleX:1,scaleY:1,rotation:-1.6,x:85.1,y:30.4,startPosition:7},0).wait(1).to({regY:38,rotation:-76.6,x:107.4,y:-13.8},0).wait(1).to({regY:37.9,rotation:-4.4,x:87.5,y:11.4,startPosition:3},0).wait(1).to({regY:37.8,scaleX:1,scaleY:1,rotation:0,skewX:-2.5,skewY:-8.6,x:87,y:10.2},0).wait(2).to({regX:17.3,regY:37.9,scaleX:1.01,scaleY:1,skewX:-3.3,skewY:-11.4,x:84,y:11.2},0).wait(2).to({regX:0.8,regY:22.1,scaleX:1,rotation:-6.8,skewX:0,skewY:0,x:65.8,y:4.3},0).wait(1).to({regX:1.6,regY:22.2,scaleX:1,scaleY:1,rotation:-5,x:63.7,y:18.4},0).wait(1).to({regX:17.5,regY:37.9,scaleX:1,scaleY:1,rotation:2.2,x:73.9,y:63.4,startPosition:8},0).wait(1).to({regX:3.4,regY:2.9,rotation:-2.4,x:61.1,y:28.6,startPosition:4},0).wait(1).to({regX:17.5,regY:37.9,rotation:2.2,x:73.8,y:64},0).wait(2).to({regX:17.6,scaleX:1.04,rotation:0,skewX:2.2,skewY:4.6,x:74.1,y:63},0).wait(1).to({regX:17.5,scaleX:1,rotation:2.2,skewX:0,skewY:0,x:72.4,y:61.1},0).wait(1).to({regY:37.8,rotation:-2.9,x:65.8,y:63.7,startPosition:9},0).wait(1).to({regY:37.9,rotation:-27.6,x:61.8,y:75.3,startPosition:10},0).wait(1).to({regX:3.6,regY:-1.7,scaleX:1.02,scaleY:1,rotation:0,skewX:4.4,skewY:2.2,x:60.8,y:19.8,startPosition:5},0).wait(2).to({regX:17.5,regY:37.9,scaleX:1,scaleY:1,rotation:2.2,skewX:0,skewY:0,x:74,y:60.4},0).wait(20).to({regX:0,regY:0,scaleX:1,scaleY:1,rotation:5.4,x:57.2,y:26.3},0).wait(1).to({regX:9.7,regY:1.2,rotation:10.5,x:69.7,y:30.1},0).wait(1).to({regX:17.5,regY:37.8,scaleX:1,scaleY:1,rotation:5.5,x:75.2,y:69.2},0).wait(2).to({rotation:7,x:76.4,y:71.2,startPosition:11},0).wait(2).to({rotation:6,x:77.9,y:68.8,startPosition:0},0).wait(1).to({regX:12.5,regY:-0.8,scaleX:1,scaleY:1.08,rotation:0,skewX:1.3,skewY:1.5,x:77.4,y:19,startPosition:1},0).wait(1).to({regX:17.5,regY:37.9,scaleY:1,rotation:1,skewX:0,skewY:0,x:81.3,y:53.6},0).wait(2).to({regX:17.4,regY:37.8,rotation:0,x:83,y:50.5},0).wait(2).to({y:51.4},0).wait(16));

	// head
	this.instance_8 = new lib.boy1_3Q_head_yeah("synched",0);
	this.instance_8.setTransform(42.7,17.7,1,1,0,0,0,162.2,182.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({rotation:3,x:41,y:23.7,startPosition:3},0).wait(1).to({rotation:5.3,x:41.4,y:30.2,startPosition:4},0).wait(1).to({regX:162.1,rotation:8.1,x:40.9,y:34.2,startPosition:5},0).wait(2).to({scaleX:1,scaleY:1,rotation:9.2,x:40,y:36.5,startPosition:7},0).wait(3).to({regY:182.3,x:39.9,y:34.4,startPosition:10},0).wait(2).to({rotation:8.8,x:38.5,y:26.8,startPosition:12},0).wait(1).to({regX:162.2,scaleX:1,scaleY:1,rotation:0,x:42.5,y:-0.9,startPosition:13},0).wait(1).to({regX:162.1,rotation:-5,x:46.5,y:-12.5,startPosition:14},0).wait(1).to({rotation:-7.8,x:46.3,y:-19.8,startPosition:15},0).wait(1).to({x:45.8,y:-20.9,startPosition:16},0).wait(2).to({regY:182.2,rotation:-6.8,x:43.8,y:-19.4,startPosition:18},0).wait(2).to({regY:182.3,rotation:-5.5,x:43.1,y:-13.4,startPosition:20},0).wait(1).to({regX:162.2,regY:182.2,rotation:0.3,x:40.4,y:0.1,startPosition:21},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.3,x:31,y:33.5,startPosition:22},0).wait(1).to({x:30.9,y:35.1,startPosition:23},0).wait(1).to({x:30.8,y:35.3,startPosition:24},0).wait(2).to({x:30.9,y:33.8,startPosition:26},0).wait(1).to({x:31.1,y:30.4,startPosition:27},0).wait(3).to({y:28.3,startPosition:30},0).wait(2).to({y:28.9,startPosition:32},0).wait(20).to({regY:182.3,scaleX:1,scaleY:1,rotation:9.5,x:30.1,y:32.8,startPosition:52},0).wait(1).to({rotation:11.6,x:33.1,y:35.5,startPosition:53},0).wait(1).to({rotation:12.1,x:34.1,y:36.6,startPosition:54},0).wait(2).to({rotation:11.6,x:36.9,y:35.9,startPosition:56},0).wait(2).to({rotation:9,x:39,y:33.6,startPosition:58},0).wait(1).to({regX:162.3,scaleX:1,scaleY:1,rotation:4.5,x:41.1,y:26.1,startPosition:59},0).wait(1).to({regX:162.2,regY:182.2,rotation:2.8,x:40.6,y:20.8,startPosition:60},0).wait(2).to({rotation:0,x:42.7,y:16.8,startPosition:62},0).wait(2).to({y:17.7,startPosition:64},0).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.3,-164.4,224.9,329.1);


(lib.Henry_ThanksProf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// collar
	this.instance = new lib.boy13Qcollar("synched",0);
	this.instance.setTransform(36.9,17.8,1.038,1.098,0,0,0,37.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({regX:37.7,rotation:1.7,x:36.4,y:21},0).wait(1).to({regX:37.6,rotation:2.7,y:23.1},0).wait(1).to({regX:37.7,rotation:4.5,x:34.8,y:25},0).wait(2).to({y:26},0).wait(2).to({rotation:3.2,x:34.3,y:20.4},0).wait(2).to({regX:37.5,regY:12.1,scaleX:0.94,scaleY:1.11,rotation:0,skewX:-7,skewY:0,x:34.4,y:10.4},0).wait(1).to({regX:37.6,regY:12.2,skewX:-7.5,skewY:-0.6,x:31.8,y:3.2},0).wait(1).to({skewX:-8.6,skewY:-1.6,x:31.2,y:-0.1},0).wait(1).to({y:-1.1},0).wait(2).to({y:-0.1},0).wait(1).to({y:0.7},0).wait(11).to({regX:37.7,skewX:-6.8,skewY:0,x:30.7,y:11.8},0).wait(2).to({skewX:-3.5,skewY:3.3,x:29.5,y:23.5},0).wait(1).to({regX:37.8,scaleY:1.11,skewX:-0.7,skewY:6.1,x:28.8,y:34.6},0).wait(1).to({scaleX:0.94,skewX:0.9,skewY:7.9,x:28.3,y:38.2},0).wait(2).to({skewX:2.2,skewY:9.1,x:30.8,y:39.5},0).wait(2).to({regX:37.6,regY:12.1,scaleX:0.96,scaleY:1.11,skewX:4.8,skewY:15,x:35.7,y:40.5},0).wait(1).to({skewX:6.3,skewY:16.5,x:36.7,y:34.8},0).wait(1).to({regX:37.7,skewX:7.3,skewY:17.5,x:37.2,y:32},0).wait(2).to({y:31},0).wait(2).to({y:32},0).wait(14).to({regY:12.2,skewX:5.5,skewY:15.7,x:38.3,y:35.9},0).wait(2).to({regY:12.1,skewX:2.5,skewY:12.7,x:37.9,y:33.8},0).wait(2).to({regX:37.6,regY:12.2,scaleX:1.04,scaleY:1.1,rotation:3.8,skewX:0,skewY:0,x:37.3,y:23.1},0).wait(1).to({rotation:1.2,x:37.4,y:19.6},0).wait(2).to({rotation:0,x:36.9,y:16.8},0).wait(2).to({y:17.8},0).wait(5));

	// armR
	this.instance_1 = new lib.boy13QarmL("single",1);
	this.instance_1.setTransform(-4.1,55.2,1,1,0,0,0,15.1,38.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({regY:38.6,rotation:1.7,x:-5.7,y:56.9,startPosition:44},0).wait(1).to({regY:38.8,rotation:2.7,x:-6.2,y:58.5,startPosition:45},0).wait(1).to({regX:22.6,regY:1.5,scaleX:1,scaleY:1,rotation:10.1,x:1.3,y:21.9},0).wait(2).to({regX:21.7,regY:1.6,rotation:11.3,x:0.2,y:23.6},0).wait(2).to({regX:15.1,regY:38.8,scaleX:1,scaleY:1,rotation:3.2,x:-8.8,y:55.5,startPosition:46},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:-6.4,y:48.1,startPosition:48},0).wait(1).to({regX:26.8,regY:7.5,scaleX:1.28,rotation:0,skewX:-0.6,skewY:8.9,x:2.4,y:10.8,startPosition:49},0).wait(1).to({regX:15,regY:38.8,scaleX:1,rotation:-1.6,skewX:0,skewY:0,x:-8.7,y:38.4,startPosition:42},0).wait(1).to({regX:14.9,regY:38.7,scaleX:1.03,rotation:0,skewX:-1.6,skewY:-0.8,x:-8.8,y:37.3},0).wait(2).to({regX:15,regY:38.8,scaleX:1,rotation:-1.6,skewX:0,skewY:0,x:-8.7,y:38.4},0).wait(1).to({y:39.4},0).wait(11).to({regX:23.4,regY:2.2,rotation:4.6,x:-2.2,y:12.6},0).wait(2).to({regX:15.1,regY:38.8,rotation:3.3,x:-13.7,y:58.5,startPosition:50},0).wait(1).to({regX:15,regY:38.7,scaleX:0.77,rotation:0,skewX:3.3,skewY:-9.7,x:-16.3,y:74.6},0).wait(1).to({regY:38.9,scaleX:1.05,skewX:7.9,skewY:10.5,x:-18.9,y:66.2,startPosition:51},0).wait(2).to({regY:38.8,scaleX:1,rotation:9.1,skewX:0,skewY:0,x:-15.8,y:69.9,startPosition:43},0).wait(2).to({regX:26,regY:3.8,scaleX:1,scaleY:1,rotation:7.4,x:5.7,y:35.2},0).wait(1).to({regY:3.7,rotation:8.9,x:7,y:28.6},0).wait(1).to({rotation:10,x:7.5,y:25.3},0).wait(2).to({y:24.3},0).wait(2).to({y:25.3},0).wait(14).to({regX:26.1,regY:3.6,scaleX:1.1,rotation:0,skewX:6.4,skewY:8.2,x:8.5,y:30.9,startPosition:54},0).wait(2).to({regX:26,regY:3.8,scaleX:1,scaleY:1,rotation:-16.2,skewX:0,skewY:0,x:6.4,y:30.8},0).wait(2).to({regX:15.1,regY:38.6,scaleX:1,scaleY:1.13,rotation:3.8,x:-6.5,y:63.6,startPosition:1},0).wait(1).to({regY:38.8,scaleY:1.06,rotation:1.2,x:-4.6,y:58.5},0).wait(2).to({regY:38.7,scaleY:1,rotation:0,x:-4,y:54.2},0).wait(2).to({y:55.2},0).wait(5));

	// torso
	this.instance_2 = new lib.boy13Qtorso("synched",0);
	this.instance_2.setTransform(41.4,59.8,1.012,1,0,0,0,44.8,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({regX:44.9,rotation:1.7,x:39.6,y:63.1},0).wait(1).to({rotation:2.7,x:39,y:65.3},0).wait(1).to({regX:44.8,rotation:4.5,x:35.8,y:67.3},0).wait(2).to({y:68.3},0).wait(2).to({regX:44.9,regY:43.5,rotation:3.2,x:36.3,y:62.6},0).wait(2).to({regY:43.6,scaleY:1,rotation:0,x:39,y:52.5},0).wait(1).to({rotation:-0.6,x:36.7,y:45.2},0).wait(1).to({regX:45,rotation:-1.6,x:37,y:41.6},0).wait(1).to({y:40.6},0).wait(2).to({y:41.6},0).wait(1).to({y:42.6},0).wait(11).to({regY:43.5,scaleX:1.01,rotation:0,x:35.1,y:53.7},0).wait(2).to({rotation:3.3,x:31.5,y:65.7},0).wait(1).to({regX:45.1,rotation:6.1,x:28.8,y:76.8},0).wait(1).to({regX:45,rotation:7.9,x:26.8,y:80.3},0).wait(2).to({regX:45.1,rotation:9.1,x:28.5,y:81.7},0).wait(2).to({regX:44.8,scaleY:1,rotation:15,x:28.9,y:82.2},0).wait(1).to({regY:43.6,rotation:16.5,x:28.8,y:76.4},0).wait(1).to({regX:44.9,rotation:17.5,x:28.5,y:73.5},0).wait(2).to({y:72.5},0).wait(2).to({y:73.5},0).wait(14).to({regY:43.5,scaleX:1.01,rotation:15.7,x:30.9,y:77.4},0).wait(2).to({regY:43.6,rotation:12.7,x:32.8,y:75.9},0).wait(2).to({scaleX:1.01,scaleY:1,rotation:3.8,x:39.1,y:65.4},0).wait(1).to({rotation:1.2,x:41,y:61.8},0).wait(2).to({regX:44.8,rotation:0,x:41.4,y:58.8},0).wait(2).to({y:59.8},0).wait(5));

	// footR
	this.instance_3 = new lib.boy1_34_footR_v01("single",0);
	this.instance_3.setTransform(29.8,149.5,1,1,0,0,0,-0.7,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({rotation:1.8,x:26.2,y:153.4},0).wait(1).to({regY:-5.6,rotation:2.8,x:22.3,y:159.4},0).wait(1).to({regX:-0.5,rotation:4.5,x:17.6,y:169.8},0).wait(2).to({y:170.8},0).wait(2).to({rotation:3.3,x:21.1,y:165.5},0).wait(2).to({regY:-5.7,rotation:-2.3,x:27.7,y:145.1},0).wait(1).to({rotation:-2.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:29.5,y:141.5},0).wait(1).to({x:28.5,y:140.5},0).wait(2).to({y:141.5},0).wait(1).to({y:142.5},0).wait(11).to({rotation:-1.5,x:23.4,y:153.5},0).wait(2).to({rotation:1.6,x:14.1,y:164.6},0).wait(1).to({regY:-5.6,rotation:4.3,x:6.6,y:174.7},0).wait(1).to({rotation:6.1,x:1.7,y:177.6},0).wait(2).to({rotation:7.4,x:1.2,y:178.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:16.5,x:-9,y:160.9},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:17.5,x:-11.8,y:158.2},0).wait(2).to({y:157.2},0).wait(2).to({y:158.2},0).wait(14).to({regX:-0.6,rotation:15.8,x:-6.9,y:163.3},0).wait(2).to({regX:-0.5,regY:-5.5,rotation:12.7,x:-0.4,y:163.8},0).wait(2).to({regX:-0.6,regY:-5.7,scaleX:1,scaleY:1,rotation:0,x:29.8,y:149.5},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(5));

	// legR
	this.instance_4 = new lib.boy13Qleg1("single",0);
	this.instance_4.setTransform(32,91.5,1,1,0,0,0,23.9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({rotation:1.8,x:29.2,y:94.4},0).wait(1).to({rotation:2.8,x:28,y:96.5},0).wait(1).to({rotation:4.5,x:24,y:98.1},0).wait(2).to({y:99.1},0).wait(2).to({rotation:3.3,x:25.1,y:103.7},0).wait(2).to({rotation:-2.3,x:25.9,y:72},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.5,x:27.8,y:76.9},0).wait(1).to({rotation:-1.5,x:28.5,y:73.4},0).wait(1).to({y:72.4},0).wait(2).to({y:73.4},0).wait(1).to({y:74.4},0).wait(11).to({regX:24,rotation:0.1,x:25.7,y:85.5},0).wait(2).to({regX:23.9,rotation:3.3,x:20.2,y:96.8},0).wait(1).to({regY:11.9,rotation:6.1,x:16,y:107.1},0).wait(1).to({regY:12,rotation:7.9,x:13.2,y:110.4},0).wait(2).to({regX:24,rotation:9.2,x:14.2,y:111.5},0).wait(2).to({regX:23.9,scaleX:1,scaleY:1,rotation:15,x:11.7,y:110.3},0).wait(1).to({regY:11.9,rotation:16.5,x:11,y:103.9},0).wait(1).to({regY:12,rotation:17.5,x:10.2,y:100.8},0).wait(2).to({y:99.8},0).wait(2).to({y:100.8},0).wait(14).to({rotation:15.8,x:13.4,y:105.3},0).wait(2).to({regX:24,rotation:12.7,x:16.8,y:104.7},0).wait(2).to({regX:23.9,scaleX:1,scaleY:1,rotation:1.8,x:31.1,y:93.4},0).wait(1).to({rotation:1.3,x:29.9,y:93.2},0).wait(2).to({rotation:0,x:32,y:90.5},0).wait(2).to({y:91.5},0).wait(5));

	// footL
	this.instance_5 = new lib.boy1_34_footL_v01("single",0);
	this.instance_5.setTransform(60.3,149.8,1,1,0,0,0,-9.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({regX:-9.6,rotation:1.8,x:56.5,y:154.6},0).wait(1).to({regX:-9.5,rotation:2.8,x:52.8,y:161.1},0).wait(1).to({rotation:4.5,x:47.9,y:172.4},0).wait(2).to({y:173.4},0).wait(2).to({rotation:3.3,x:51.5,y:167.5},0).wait(2).to({rotation:-2.3,x:58.1,y:144},0).wait(1).to({rotation:-2.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.3,x:59.9,y:139.9},0).wait(1).to({x:58.9,y:138.9},0).wait(2).to({y:139.9},0).wait(1).to({y:140.9},0).wait(11).to({rotation:-1.5,x:53.8,y:152.8},0).wait(2).to({rotation:1.6,x:44.5,y:165.7},0).wait(1).to({rotation:4.3,x:36.9,y:177.2},0).wait(1).to({rotation:6.1,x:31.9,y:180.9},0).wait(2).to({regX:-9.4,rotation:7.4,x:31.4,y:182.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:16.5,x:19.9,y:169.7},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:17.5,x:16.9,y:167.6},0).wait(2).to({y:166.6},0).wait(2).to({y:167.6},0).wait(14).to({rotation:15.8,x:22.2,y:171.8},0).wait(2).to({rotation:12.7,x:29.1,y:170.6},0).wait(2).to({regX:-9.5,scaleX:1,scaleY:1,rotation:0,x:60.3,y:149.8},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(5));

	// legL
	this.instance_6 = new lib.boy13Qleg2("single",0);
	this.instance_6.setTransform(55.4,90.6,1,1,0,0,0,11.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({regX:11.3,rotation:1.8,x:52.7,y:94.3},0).wait(1).to({regY:3.8,rotation:2.8,x:51.5,y:96.7},0).wait(1).to({regX:11.2,rotation:4.5,x:47.4,y:109},0).wait(2).to({y:100},0).wait(2).to({rotation:3.3,x:48.6,y:104.1},0).wait(2).to({regX:11.3,rotation:-2.3,x:49.4,y:70},0).wait(1).to({regX:11.2,scaleX:1,scaleY:1,rotation:-0.5,x:51.2,y:75.7},0).wait(1).to({rotation:-1.5,x:52,y:71.8},0).wait(1).to({y:70.8},0).wait(2).to({y:71.8},0).wait(1).to({y:72.8},0).wait(11).to({rotation:0.1,x:49.1,y:84.5},0).wait(2).to({rotation:3.3,x:43.7,y:97.2},0).wait(1).to({rotation:6.1,x:39.4,y:108.8},0).wait(1).to({rotation:7.9,x:36.6,y:112.7},0).wait(2).to({regY:3.7,rotation:9.2,x:37.5,y:114.2},0).wait(2).to({regX:11.3,regY:3.8,scaleX:1,scaleY:1,rotation:15,x:34.7,y:115.5},0).wait(1).to({regX:11.2,rotation:16.5,x:32.7,y:111.8},0).wait(1).to({regX:11.3,rotation:17.5,x:31.9,y:109.9},0).wait(2).to({y:108.9},0).wait(2).to({y:109.9},0).wait(14).to({regX:11.2,rotation:15.8,x:35.3,y:113.7},0).wait(2).to({regX:11.3,rotation:12.7,x:39.1,y:111.9},0).wait(2).to({regY:3.9,scaleX:1,scaleY:1,rotation:1.8,x:54.6,y:93.2},0).wait(1).to({regX:11.2,rotation:0,x:54.4,y:89.6},0).wait(2).to({x:55.4},0).wait(2).to({y:90.6},0).wait(5));

	// armL
	this.instance_7 = new lib.boy13QarmR("single",1);
	this.instance_7.setTransform(83,51.4,1,1,0,0,0,17.4,37.8);

	this.instance_8 = new lib.boy13QarmL("single",46);
	this.instance_8.setTransform(77.6,59.3,1,1,0,-3.1,176.8,15.1,38.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:17.4,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:83,y:51.4,rotation:0,startPosition:1}}]}).to({state:[{t:this.instance_7,p:{regX:6.3,regY:4.5,scaleX:1.012,scaleY:0.955,skewX:-9.5,skewY:-15.3,x:71.2,y:22.4,rotation:0,startPosition:1}}]},6).to({state:[{t:this.instance_7,p:{regX:17.4,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:80.9,y:58.9,rotation:2.7,startPosition:35}}]},1).to({state:[{t:this.instance_7,p:{regX:1.2,regY:6.4,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:64.3,y:29.5,rotation:-1,startPosition:35}}]},1).to({state:[{t:this.instance_7,p:{regX:2.3,regY:3,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:65.6,y:27.4,rotation:-1.9,startPosition:35}}]},2).to({state:[{t:this.instance_8,p:{scaleX:1,scaleY:1,skewX:-3.1,skewY:176.8,x:77.6,y:59.3,startPosition:46,regX:15.1,regY:38.8}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.998,scaleY:0.998,skewX:-19.2,skewY:160.7,x:88.7,y:42.7,startPosition:48,regX:15.1,regY:38.8}}]},2).to({state:[{t:this.instance_8,p:{scaleX:1.208,scaleY:0.888,skewX:-29.6,skewY:139.9,x:60.1,y:11.5,startPosition:49,regX:26.7,regY:7.5}}]},1).to({state:[{t:this.instance_7,p:{regX:17.6,regY:37.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:78.4,y:31.9,rotation:-1.7,startPosition:32}}]},1).to({state:[{t:this.instance_7,p:{regX:17.6,regY:38,scaleX:1.04,scaleY:0.999,skewX:-1.7,skewY:-3.5,x:78.4,y:31,rotation:0,startPosition:32}}]},1).to({state:[{t:this.instance_7,p:{regX:17.6,regY:37.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:78.4,y:31.9,rotation:-1.7,startPosition:32}}]},2).to({state:[{t:this.instance_7,p:{regX:17.6,regY:37.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:78.4,y:32.9,rotation:-1.7,startPosition:32}}]},1).to({state:[{t:this.instance_7,p:{regX:0,regY:0,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:59.1,y:7.6,rotation:-4.4,startPosition:32}}]},11).to({state:[{t:this.instance_8,p:{scaleX:0.998,scaleY:0.998,skewX:-14.5,skewY:165.4,x:75,y:57.3,startPosition:53,regX:15,regY:38.8}}]},2).to({state:[{t:this.instance_8,p:{scaleX:0.758,scaleY:0.998,skewX:-13,skewY:173.6,x:77.4,y:76.2,startPosition:53,regX:15,regY:38.6}}]},1).to({state:[{t:this.instance_8,p:{scaleX:1.047,scaleY:0.998,skewX:-16,skewY:161.2,x:80,y:77.1,startPosition:52,regX:14.9,regY:38.9}}]},1).to({state:[{t:this.instance_7,p:{regX:4.3,regY:5.2,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:62.9,y:45.8,rotation:24.1,startPosition:33}}]},2).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:64,y:50,rotation:24.8,startPosition:33}}]},2).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:65.8,y:45.6,rotation:26.5,startPosition:33}}]},1).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:66,y:43.3,rotation:27.6,startPosition:33}}]},1).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:66,y:42.3,rotation:27.6,startPosition:33}}]},2).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:66,y:43.3,rotation:27.6,startPosition:33}}]},2).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:67.4,y:46.1,rotation:25.8,startPosition:36}}]},14).to({state:[{t:this.instance_7,p:{regX:2.4,regY:6.2,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:64.1,y:41.2,rotation:0.2,startPosition:30}}]},2).to({state:[{t:this.instance_7,p:{regX:17.5,regY:37.8,scaleX:1,scaleY:1.118,skewX:0.3,skewY:3.8,x:82.1,y:63.5,rotation:0,startPosition:1}}]},2).to({state:[{t:this.instance_7,p:{regX:17.4,regY:37.7,scaleX:1,scaleY:1.045,skewX:-0.6,skewY:1.2,x:82.7,y:55.3,rotation:0,startPosition:1}}]},1).to({state:[{t:this.instance_7,p:{regX:17.4,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:83,y:50.4,rotation:0,startPosition:1}}]},2).to({state:[{t:this.instance_7,p:{regX:17.4,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:83,y:51.4,rotation:0,startPosition:1}}]},2).wait(5));

	// head
	this.instance_9 = new lib.boy1_3Q_headThanks("synched",0);
	this.instance_9.setTransform(42.7,17.7,1,1,0,0,0,162.2,182.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({rotation:3,x:42.1,y:22,startPosition:6},0).wait(1).to({regY:182.3,rotation:5.8,x:40.7,y:27.6,startPosition:7},0).wait(1).to({regY:182.4,scaleX:1,scaleY:1,rotation:8.8,x:37.8,y:30.7,startPosition:8},0).wait(2).to({y:32.7,startPosition:10},0).wait(2).to({rotation:7.8,x:37.4,y:24,startPosition:12},0).wait(2).to({regY:182.5,scaleX:1,scaleY:1,rotation:-2.8,x:40.3,y:9.8,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.8,x:37.5,y:-1.4,startPosition:15},0).wait(1).to({regX:162.3,rotation:-8.9,x:36.9,y:-7,startPosition:16},0).wait(1).to({x:35.9,y:-9,startPosition:17},0).wait(2).to({y:-7,startPosition:19},0).wait(1).to({y:-6,startPosition:20},0).wait(11).to({regX:162.4,scaleX:1,scaleY:1,rotation:-5.8,x:35.6,y:5.1,startPosition:31},0).wait(2).to({rotation:-0.4,x:35.8,y:20.1,startPosition:33},0).wait(1).to({regX:162.5,regY:182.6,rotation:3.7,x:35.3,y:34.5,startPosition:34},0).wait(1).to({regX:162.6,rotation:7.2,x:34.8,y:39.3,startPosition:35},0).wait(2).to({scaleX:1,scaleY:1,rotation:9.7,x:36.3,y:40.8,startPosition:37},0).wait(2).to({regX:162.3,regY:182.5,rotation:14,x:41.4,y:40.2,startPosition:39},0).wait(1).to({rotation:18.3,x:39.5,y:33.6,startPosition:40},0).wait(1).to({rotation:20.3,x:38.9,y:29.9,startPosition:41},0).wait(2).to({y:27.9,startPosition:43},0).wait(2).to({y:29.9,startPosition:45},0).wait(14).to({rotation:16.5,x:40.9,y:35.6,startPosition:59},0).wait(2).to({regY:182.4,rotation:11.2,x:41.6,y:33.4,startPosition:61},0).wait(2).to({regX:162.2,regY:182.3,scaleX:1,scaleY:1,rotation:7.3,x:41.1,y:25.5,startPosition:63},0).wait(1).to({regY:182.2,rotation:2.5,x:42.2,y:20.7,startPosition:64},0).wait(2).to({rotation:0,x:42.7,y:16.7,startPosition:66},0).wait(2).to({y:17.7,startPosition:68},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.3,-164.4,224.9,329.1);


(lib.Henry_ProblemIs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// handr
	this.instance = new lib.boy13QarmRcopy("single",2);
	this.instance.setTransform(66.1,46.2,0.999,0.999,10.3,0,0,2.6,6.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({startPosition:2,_off:false},0).wait(2).to({scaleX:1,scaleY:1,rotation:6.6,x:66.2},0).wait(2).to({regY:6.2,rotation:6.1,x:66,y:45.4},0).to({_off:true},1).wait(43));

	// collar
	this.instance_1 = new lib.boy13Qcollar("synched",0);
	this.instance_1.setTransform(36.9,17.8,1.038,1.098,0,0,0,37.6,12.2);

	this.instance_2 = new lib.boy13Qcollarcopy("synched",0);
	this.instance_2.setTransform(40.8,33.3,1.058,1.098,13.4,0,0,37.8,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:36.9,y:17.8,regX:37.6,regY:12.2,scaleX:1.038,scaleY:1.098}}]}).to({state:[{t:this.instance_1,p:{rotation:1.5,x:36.5,y:20,regX:37.6,regY:12.2,scaleX:1.038,scaleY:1.098}}]},1).to({state:[{t:this.instance_1,p:{rotation:8.1,x:39.9,y:26.6,regX:37.8,regY:12.1,scaleX:1.037,scaleY:1.097}}]},2).to({state:[{t:this.instance_1,p:{rotation:12.1,x:41.5,y:30.3,regX:37.8,regY:12.2,scaleX:1.038,scaleY:1.098}}]},1).to({state:[{t:this.instance_2,p:{x:40.8,y:33.3,regX:37.8,scaleX:1.058,scaleY:1.098,rotation:13.4,skewX:0,skewY:0,regY:12.1}}]},2).to({state:[{t:this.instance_2,p:{x:40.7,y:33.9,regX:37.8,scaleX:1.058,scaleY:1.098,rotation:13.4,skewX:0,skewY:0,regY:12.1}}]},2).to({state:[{t:this.instance_2,p:{x:40.7,y:33.9,regX:37.8,scaleX:1.058,scaleY:1.098,rotation:13.4,skewX:0,skewY:0,regY:12.1}}]},39).to({state:[{t:this.instance_2,p:{x:39.5,y:34.7,regX:37.7,scaleX:1.057,scaleY:1.097,rotation:13.3,skewX:0,skewY:0,regY:12.1}}]},1).to({state:[{t:this.instance_2,p:{x:38.6,y:35.5,regX:37.8,scaleX:1.057,scaleY:1.097,rotation:13.3,skewX:0,skewY:0,regY:12.1}}]},1).to({state:[{t:this.instance_2,p:{x:37.4,y:36.2,regX:37.8,scaleX:1.057,scaleY:1.097,rotation:13.1,skewX:0,skewY:0,regY:12.1}}]},1).to({state:[{t:this.instance_2,p:{x:36.4,y:37,regX:37.9,scaleX:1.057,scaleY:1.097,rotation:13.1,skewX:0,skewY:0,regY:12.1}}]},1).to({state:[{t:this.instance_2,p:{x:40.9,y:37,regX:37.9,scaleX:1.057,scaleY:1.097,rotation:14.6,skewX:0,skewY:0,regY:12.1}}]},5).to({state:[{t:this.instance_2,p:{x:43.4,y:34.5,regX:37.9,scaleX:1.057,scaleY:1.097,rotation:16.4,skewX:0,skewY:0,regY:12.1}}]},2).to({state:[{t:this.instance_1,p:{rotation:13.7,x:46.3,y:21.2,regX:37.7,regY:12.2,scaleX:1.038,scaleY:1.098}}]},1).to({state:[{t:this.instance_1,p:{rotation:13.7,x:46.7,y:18.5,regX:37.7,regY:12.2,scaleX:1.038,scaleY:1.098}}]},1).to({state:[{t:this.instance_1,p:{rotation:13.7,x:47,y:17,regX:37.7,regY:12.2,scaleX:1.038,scaleY:1.098}}]},1).to({state:[{t:this.instance_1,p:{rotation:13.7,x:47,y:16.7,regX:37.7,regY:12.2,scaleX:1.038,scaleY:1.098}}]},1).to({state:[{t:this.instance_1,p:{rotation:13.7,x:47,y:17,regX:37.7,regY:12.2,scaleX:1.038,scaleY:1.098}}]},2).to({state:[{t:this.instance_1,p:{rotation:13.7,x:46.8,y:17.9,regX:37.7,regY:12.2,scaleX:1.038,scaleY:1.098}}]},2).to({state:[{t:this.instance_1,p:{rotation:13.3,x:46.2,y:19.3,regX:37.7,regY:12.2,scaleX:1.037,scaleY:1.097}}]},18).to({state:[{t:this.instance_1,p:{rotation:12.8,x:44.4,y:24.3,regX:37.6,regY:12.2,scaleX:1.037,scaleY:1.097}}]},2).to({state:[{t:this.instance_1,p:{rotation:12.1,x:41.5,y:32.8,regX:37.8,regY:12.2,scaleX:1.038,scaleY:1.097}}]},1).to({state:[{t:this.instance_2,p:{x:39.2,y:34.8,regX:37.9,scaleX:1.052,scaleY:1.101,rotation:0,skewX:5.6,skewY:10.3,regY:12.1}}]},1).to({state:[{t:this.instance_2,p:{x:38.8,y:34.7,regX:37.9,scaleX:1.052,scaleY:1.101,rotation:0,skewX:4.4,skewY:9.1,regY:12.1}}]},1).to({state:[{t:this.instance_2,p:{x:39.8,y:31,regX:37.8,scaleX:1.037,scaleY:1.109,rotation:0,skewX:0.3,skewY:8.6,regY:12.2}}]},1).to({state:[{t:this.instance_1,p:{rotation:6.3,x:38.6,y:25.8,regX:37.8,regY:12.2,scaleX:1.037,scaleY:1.097}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:37,y:17.2,regX:37.6,regY:12.2,scaleX:1.038,scaleY:1.098}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:36.9,y:17.8,regX:37.6,regY:12.2,scaleX:1.038,scaleY:1.098}}]},2).wait(4));

	// armR
	this.instance_3 = new lib.boy13QarmL("single",1);
	this.instance_3.setTransform(-4.1,55.2,1,1,0,0,0,15.1,38.7);

	this.instance_4 = new lib.boy13QarmLcopy2("single",5);
	this.instance_4.setTransform(12.3,40.7,0.999,0.999,8.4,0,0,31.1,12.7);

	this.instance_5 = new lib.Symbol2copy("synched",0);
	this.instance_5.setTransform(11.5,42.4,1.01,0.993,0,-5,-9.4,40.6,44.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(28,29,36,0.322)").s().p("AjMCTIgOg0QAAgsAPgiIAqhUQAEgKATgcQASgbAGgPQAHgSAGgMQgBgDAAgFQAAgOAOABQAEAAADACIADAAQAMADAAAXQAAAQgNAgQgIAUgWAvQgqBjAABVIADAXQADATAAAOQAAAEgHAFQgHAFgHAAQgUAAgSg0gAgfCPQgMgHAAgKQgBgHAEgMIADgOIgFgJQgBgDAJgEQAHgEAEAAQAVAFADAAQAnAAAggLQA8gTAHgCIAfgRQAPgIALAPQAXAgAAAFQgBAYhfAcQgvAOgvAMIADABIgPAAQggAAgQgJg");
	this.shape.setTransform(-12.8,24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD652").s().p("AhJgDIgVgsIgDgFIACgCIAegDQAzgHAqgWIABABIAngXIAKAIQAHALAGAMIABABQAFAKAAAMQABANgCANQgDAVgLAOQgPAXgVARIAAAAIgRAOQgdARgfANIAAABIgnARQAQg6gTg2g");
	this.shape_1.setTransform(-0.5,37.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#66CCCC").s().p("AgMCfQhsg4AGh2IAAgBIgCgFIgBgBQAEggALgeQAHgUAIgUIAagzQATBbBCAmIARAJIgBABQgDAEACAFIgBAEIAAAFQAAAOgGAeQgDAQgDALIgBAHQADACABAEIAVg+IAmgEIAHAAIABAAIAAAAIAAABQAhBLgSBPIgEAOIhLAHQgYgFgUgMg");
	this.shape_2.setTransform(-20.8,32.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#445A6F").s().p("AAfBfIgRgIIABAAIgRgLIAQgWIARgVQAOAKASAHIACABIgCACQgPAWgMAZQgCgEgDgBgAgyAHIAcgfIAFgFIAIATIAAABQAJAPANAMIAAAAIABACIgNASIgSAYQgVgXgMgggAg9ggQgBgEgCgCIAAgEQANgXAQgVQAFgIAGgGQgBANAAAMIAAABIABAWQgGAFgFAIIgWAaIgEgTg");
	this.shape_3.setTransform(-19.2,16.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AhFBZIgBgBIgKgJQgMgKgIgOQgHgPgDgOQgDgLAAgMQAAgRABgSIABgDIABgMQAIgLAKgJQABgEAPgKQAQgLAMgFQAMgEAGAAQAZgIAXAHIABAAQAYAEARAZQgIgEgJgBQgngFggATQgEABgBAFIAAABQAlgEAlAFIABAAQAcAEAXAZIADADIAEAUIgFAEQgSgBgRAAIAAAAIgFAAQgaABgZADQgEABAAAEQgBACAAADQANABAZADIAXACIAjACQAAABABAAQAAAAABABQAAAAABAAQAAAAABABIANANIACAIQAAAHgCAFIgBAAQgBAFgEACQgUAHgVAFIgBABIgRAEIgjAKIgCAAIgNAEIgjAMQgRgHgOgLg");
	this.shape_4.setTransform(-8.7,8.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah6D+Qhsg8ACiBIABgBQAFgnANgiIAQgrQAPgfAQgeIAGgMQAPgbASgWIAXgdIAGgJIABgBQASgZAbgPQASgLASgHIADgBQAdgLAgAHIgBABQAhAGAWAhIAKAQQADADgBAFIAAACQAMAIALANIABADIABADIAGAeIAAAFIgBACIgBADIgFAFIANAKQADADAAADQADAIABAJIAAAAQABANgFALIAAgBQgEANgLAFQgVAIgXAGQgVADgUAHIgJACIgFACIgNAEIgNAEQAAADgCACIgOAVIAAABQgKAOgKAVIgBAAIgBADIgDAGIABAAIgDALIgCAFIAKgCQAUgEAKADIAdgCIgBgBQArgFAngSIAIgEIAsgYIAFgBIAFACIAPAMIABADQALANAHAQIAAAAQAJAPABASQAAAUgDATQgFAUgLASQgQAZgXATIgUAPQgeARggAOQgeAMgcANIAAAAIgGACQgZAGgXAAQgzAAgwgagAiygoQgIAUgHAUQgLAcgEAgIABABIACAFIAAABQgGB4BsA4QAWAMAYAFIBJgHIAEgOQAShPghhLIAAgBIAAAAIAJgEIADAFIAUAtQATA4gPA5IAngRIAAAAQAggOAegQIAQgOIABAAQAUgRAQgYQALgQADgVQACgMgBgOQgBgMgFgJIAAgBQgGgNgIgLIgJgHIgoAWIAAAAQgsAVgzAHIgeADIgCACIgKACIgFACIgmAEIgVA+QgBgEgDgCIABgHQADgLADgQQAGggAAgOIAAgFIABgEQgCgFADgEIABgBIgRgJQhEgkgThbIgaAzgAgqAXQADACACAEQAMgaAPgUIACgCIgCgBQgSgHgOgKIgRAWIgSATIATAMIgBgBIARAIgAhhhgIgcAhQAMAgAVAXIAUgYIANgSIgBgCIAAAAQgNgMgLgRIAAAAIgIgUIgFAFgAAAj8QgFAAgMAEQgMAFgQALQgPAKgCAEQgJAJgIALIgBAMIgBADQgCASAAATQABAMACALQADAOAHAPQAJAOALAKIALAJIAAABQAPALAQAHIAigMIAOgEIACAAIAjgKIASgEIAAgBQAWgFAUgHQADgCACgFIAAAAQADgFgBgHIgBgIIgOgNQAAgBgBAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgjgCIgWgCQgZgDgPgBQAAgDABgCQACgEADgBQAagFAagBIAEAAIAAAAQASAAARACIAGgFIgFgUIgCgDQgXgZgdgEIAAAAQglgFgmAEIAAgBQABgFACgBQAjgTAmAFQAJABAJAEQgRgZgZgEIAAAAQgMgDgMAAQgNAAgMAEgAhuieQgQAVgNAXIAAAEQACACABAEIAEATIAWgaQAFgIAGgEIgBgXIAAgBQAAgMABgMQgGAGgFAHg");
	this.shape_5.setTransform(-11.7,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regY:38.7,scaleX:1,scaleY:1,rotation:0,x:-4.1,y:55.2,startPosition:1,skewX:0,skewY:0,regX:15.1}}]}).to({state:[]},1).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:8.1,x:-6.2,y:57.8,startPosition:30,skewX:0,skewY:0,regX:15.1}}]},2).to({state:[]},1).to({state:[{t:this.instance_4}]},2).to({state:[]},2).to({state:[{t:this.instance_5,p:{scaleX:1.01,scaleY:0.993,skewX:-5,skewY:-9.4,x:11.5,y:42.4}}]},39).to({state:[{t:this.instance_5,p:{scaleX:1.013,scaleY:1,skewX:-17.9,skewY:-27.3,x:11.1,y:41.7}}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:1.003,scaleY:0.999,rotation:0,x:-10.7,y:59.5,startPosition:22,skewX:16.7,skewY:21.9,regX:15.1}}]},1).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:14.6,x:-12,y:61.9,startPosition:22,skewX:0,skewY:0,regX:15.1}}]},1).to({state:[{t:this.instance_3,p:{regY:2.8,scaleX:0.999,scaleY:0.999,rotation:12.1,x:7.1,y:30.6,startPosition:22,skewX:0,skewY:0,regX:25.9}}]},2).to({state:[{t:this.instance_3,p:{regY:2.8,scaleX:0.998,scaleY:0.998,rotation:8.6,x:7,y:30.7,startPosition:22,skewX:0,skewY:0,regX:25.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-2.1,scaleX:1.003,scaleY:0.998,rotation:0,x:10.4,y:27,startPosition:22,skewX:7.4,skewY:2.2,regX:25.1}}]},1).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:1.001,scaleY:0.998,rotation:0,x:-4.8,y:61.3,startPosition:27,skewX:12.4,skewY:16.7,regX:15.1}}]},2).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:13.7,x:-2.5,y:47.6,startPosition:23,skewX:0,skewY:0,regX:15.1}}]},1).to({state:[{t:this.instance_3,p:{regY:-0.7,scaleX:0.999,scaleY:0.999,rotation:16.7,x:17.3,y:9.3,startPosition:23,skewX:0,skewY:0,regX:25.6}}]},1).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:13.7,x:-1.8,y:43.4,startPosition:23,skewX:0,skewY:0,regX:15.1}}]},1).to({state:[{t:this.instance_3,p:{regY:4.3,scaleX:0.999,scaleY:0.999,rotation:10.4,x:14.9,y:11.9,startPosition:23,skewX:0,skewY:0,regX:24}}]},1).to({state:[{t:this.instance_3,p:{regY:2.6,scaleX:0.999,scaleY:0.999,rotation:11.1,x:15.2,y:10.6,startPosition:23,skewX:0,skewY:0,regX:24}}]},2).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:13.7,x:-2,y:44.3,startPosition:23,skewX:0,skewY:0,regX:15.1}}]},2).to({state:[{t:this.instance_3,p:{regY:4.4,scaleX:0.998,scaleY:0.998,rotation:16.9,x:16.8,y:15.7,startPosition:23,skewX:0,skewY:0,regX:27.1}}]},18).to({state:[{t:this.instance_3,p:{regY:1.2,scaleX:1.216,scaleY:1.039,rotation:0,x:13.5,y:17.6,startPosition:22,skewX:6.7,skewY:-5.2,regX:24}}]},2).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:12.1,x:-7.8,y:62.7,startPosition:28,skewX:0,skewY:0,regX:15.1}}]},1).to({state:[{t:this.instance_3,p:{regY:9.2,scaleX:0.999,scaleY:0.999,rotation:13.5,x:5,y:34,startPosition:20,skewX:0,skewY:0,regX:22.2}}]},1).to({state:[{t:this.instance_3,p:{regY:1.4,scaleX:0.999,scaleY:0.999,rotation:14.6,x:8.5,y:28.3,startPosition:20,skewX:0,skewY:0,regX:24.9}}]},1).to({state:[{t:this.instance_3,p:{regY:38.6,scaleX:0.999,scaleY:0.999,rotation:8.6,x:-4.1,y:61,startPosition:20,skewX:0,skewY:0,regX:15.1}}]},1).to({state:[{t:this.instance_3,p:{regY:4,scaleX:0.999,scaleY:1.106,rotation:0,x:5.3,y:30.6,startPosition:1,skewX:5,skewY:6.3,regX:26.2}}]},1).to({state:[{t:this.instance_3,p:{regY:38.7,scaleX:1,scaleY:1,rotation:0,x:-4,y:54.6,startPosition:1,skewX:0,skewY:0,regX:15.1}}]},2).to({state:[{t:this.instance_3,p:{regY:38.7,scaleX:1,scaleY:1,rotation:0,x:-4.1,y:55.2,startPosition:1,skewX:0,skewY:0,regX:15.1}}]},2).wait(4));

	// handr
	this.instance_6 = new lib.boy13QarmLcopy3("single",29);
	this.instance_6.setTransform(13,19.4,1.006,0.999,0,10.6,17.3,29.5,-0.7);

	this.instance_7 = new lib.Symbol2copy("synched",0);
	this.instance_7.setTransform(11.5,41.6,1,1,0,0,0,40.6,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{regX:29.5,regY:-0.7,scaleX:1.006,rotation:0,skewX:10.6,skewY:17.3,x:13,y:19.4,startPosition:29}}]},1).to({state:[]},2).to({state:[{t:this.instance_6,p:{regX:15.1,regY:38.7,scaleX:0.999,rotation:12.1,skewX:0,skewY:0,x:-6.8,y:58.1,startPosition:24}}]},1).to({state:[]},2).to({state:[{t:this.instance_7,p:{regY:44,rotation:0,x:11.5,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-1.2,x:11.8,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-2.4,x:12,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-3.7,x:12.2,y:41.8,regX:40.5,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-4.4,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-5.2,x:12.4,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-5.7,x:12.5,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-6.2,x:12.6,y:42,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-4.7,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-3.4,x:12.1,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-2.4,x:11.9,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-1.4,x:11.8,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-0.7,x:11.7,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-0.2,x:11.6,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:0,x:11.5,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-1.2,x:11.8,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-2.4,x:12,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-3.7,x:12.2,y:41.8,regX:40.5,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-4.4,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-5.2,x:12.4,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-5.7,x:12.5,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-6.2,x:12.6,y:42,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-4.7,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-3.4,x:12.1,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44.1,rotation:-2.4,x:11.9,y:41.8,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-1.4,x:11.8,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-0.7,x:11.7,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:-0.2,x:11.6,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regY:44,rotation:0,x:11.5,y:41.6,regX:40.6,scaleX:1,scaleY:1}}]},1).to({state:[]},11).wait(52));

	// torso
	this.instance_8 = new lib.boy13Qtorso("synched",0);
	this.instance_8.setTransform(41.4,59.8,1.012,1,0,0,0,44.8,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:44.9,rotation:1.5,x:39.9,y:62.2},0).wait(2).to({scaleX:1.01,scaleY:1,rotation:8.1,x:38.3,y:68.9},0).wait(1).to({scaleX:1.01,rotation:12.1,x:36.9,y:72.3},0).wait(2).to({scaleX:1.01,rotation:13.4,x:35.4,y:75.4},0).wait(2).to({x:35.3,y:76},0).wait(39).to({startPosition:0},0).wait(1).to({regX:44.8,scaleY:1,rotation:13.3,x:34,y:76.7},0).wait(1).to({regX:44.9,x:33.1,y:77.4},0).wait(1).to({regX:44.8,scaleX:1.01,rotation:13.1,x:32,y:78.3},0).wait(1).to({regX:45,regY:43.5,scaleX:1.01,scaleY:1,x:31.1,y:79},0).wait(5).to({regX:44.9,rotation:14.6,x:34.4,y:78.9},0).wait(2).to({regX:45,rotation:16.4,x:35.7,y:76.1},0).wait(1).to({regX:44.8,regY:43.6,rotation:13.7,x:40.6,y:63.1},0).wait(1).to({x:41.1,y:60.4},0).wait(1).to({x:41.3,y:58.9},0).wait(1).to({x:41.4,y:58.6},0).wait(2).to({x:41.3,y:58.9},0).wait(2).to({x:41.2,y:59.8},0).wait(18).to({scaleY:1,rotation:13.3,x:40.7,y:61.2},0).wait(2).to({rotation:12.8,x:39.4,y:66.3},0).wait(1).to({regX:44.9,scaleY:1,rotation:12.1,x:37,y:74.8},0).wait(1).to({rotation:10.3,x:35.8,y:77},0).wait(1).to({rotation:9.1,x:36.4},0).wait(1).to({regY:43.5,rotation:8.6,x:37.9,y:73.2},0).wait(1).to({rotation:6.3,x:38.3,y:68.1},0).wait(2).to({regX:44.8,regY:43.6,scaleX:1.01,scaleY:1,rotation:0,x:41.5,y:59.2},0).wait(2).to({x:41.4,y:59.8},0).wait(4));

	// footR
	this.instance_9 = new lib.boy1_34_footR_v01("single",0);
	this.instance_9.setTransform(29.8,149.5,1,1,0,0,0,-0.7,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({rotation:1.5,x:25.9,y:151.5},0).wait(2).to({regY:-5.5,scaleX:1,scaleY:1,rotation:10.9,x:6.3,y:159.9},0).wait(1).to({startPosition:0},0).wait(2).to({regX:-0.5,regY:-5.6,rotation:12.2,x:2.9,y:162.1},0).wait(2).to({startPosition:0},0).wait(39).to({startPosition:0},0).wait(1).to({regY:-5.5,rotation:12,x:2.7},0).wait(1).to({regY:-5.6,scaleX:1,scaleY:1,x:2.6,y:162},0).wait(1).to({regX:-0.6,rotation:11.8,x:2.2,y:161.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.9,x:2.1,y:161.8},0).wait(5).to({rotation:13.4,x:0.7,y:164.5},0).wait(2).to({rotation:15.2,x:-0.5,y:160.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:5.8,x:17.3,y:150.4},0).wait(1).to({rotation:5.8},0).wait(1).to({x:17.5,y:149.5},0).wait(1).to({y:149.2},0).wait(2).to({y:149.5},0).wait(2).to({x:17.3,y:150.4},0).wait(18).to({scaleX:1,scaleY:1,rotation:6.3,x:16.2,y:151.5},0).wait(2).to({rotation:8,x:12.5,y:156},0).wait(1).to({regX:-0.5,rotation:10.9,x:6.5,y:163.5},0).wait(1).to({regY:-5.5,rotation:9.1,x:7.8,y:169.9},0).wait(1).to({x:7.1,y:170.7},0).wait(1).to({rotation:7.4,x:12.6,y:166.8},0).wait(1).to({rotation:5.1,x:16.7,y:162.6},0).wait(2).to({regX:-0.6,regY:-5.7,scaleX:1,scaleY:1,rotation:0,x:29.9,y:148.9},0).wait(2).to({x:29.8,y:149.5},0).wait(4));

	// legR
	this.instance_10 = new lib.boy13Qleg1("single",0);
	this.instance_10.setTransform(32,91.5,1,1,0,0,0,23.9,12);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:1.5,x:29.7,y:93.5},0).wait(2).to({regY:12.1,scaleX:1,scaleY:1,rotation:9.9,x:22.7,y:100.3},0).wait(1).to({regY:12,rotation:12.2,x:20.5,y:101.1},0).wait(2).to({rotation:13.4,x:18.3,y:103.7},0).wait(2).to({startPosition:0},0).wait(39).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:13.3,x:17.3,y:104.6},0).wait(1).to({x:16.2,y:105.3},0).wait(1).to({regY:12.1,rotation:13.1,x:15.1,y:106.1},0).wait(1).to({regY:12,scaleX:1,scaleY:1,x:14.2,y:106.9},0).wait(5).to({rotation:14.7,x:16.8,y:106.3},0).wait(2).to({rotation:16.5,x:17.1,y:103},0).wait(1).to({rotation:13.7,x:24.1,y:91.5},0).wait(1).to({x:24.5,y:88.8},0).wait(1).to({x:24.8,y:87.3},0).wait(1).to({y:87},0).wait(2).to({y:87.3},0).wait(2).to({x:24.6,y:88.2},0).wait(18).to({scaleX:1,scaleY:1,rotation:13.5,x:24.3,y:89.8},0).wait(2).to({rotation:13,x:22.9,y:95.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.2,x:20.5,y:104.8},0).wait(1).to({rotation:10.4,x:20.4,y:107.5},0).wait(1).to({x:19.6,y:108.3},0).wait(1).to({rotation:8.6,x:23.3,y:104.2},0).wait(1).to({regY:12.1,rotation:6.4,x:25,y:99.6},0).wait(2).to({regY:12,scaleX:1,scaleY:1,rotation:0,x:32.1,y:90.9},0).wait(2).to({x:32,y:91.5},0).wait(4));

	// footL
	this.instance_11 = new lib.boy1_34_footL_v01("single",0);
	this.instance_11.setTransform(60.3,149.8,1,1,0,0,0,-9.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:1.5,x:56.3,y:152.6},0).wait(2).to({regX:-9.6,scaleX:1,scaleY:1,rotation:10.9,x:36.1,y:165.7},0).wait(1).to({startPosition:0},0).wait(2).to({rotation:12.2,x:32.5,y:168.7},0).wait(2).to({startPosition:0},0).wait(39).to({startPosition:0},0).wait(1).to({regX:-9.5,regY:-2.5,rotation:12,x:32.4,y:168.5},0).wait(1).to({regX:-9.6,scaleX:1,scaleY:1,x:32.1,y:168.3},0).wait(1).to({regY:-2.4,rotation:11.8,x:31.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.9,x:31.8,y:168.1},0).wait(5).to({rotation:13.4,x:30.3,y:171.6},0).wait(2).to({rotation:15.2,x:28.5,y:168.7},0).wait(1).to({regX:-9.5,scaleX:1,scaleY:1,rotation:5.8,x:47.6,y:153.6},0).wait(1).to({rotation:5.8},0).wait(1).to({x:47.7,y:152.7},0).wait(1).to({x:47.8,y:152.4},0).wait(2).to({x:47.7,y:152.7},0).wait(2).to({x:47.6,y:153.6},0).wait(18).to({scaleX:1,scaleY:1,rotation:6.3,x:46.3,y:155.1},0).wait(2).to({regX:-9.6,rotation:8,x:42.5,y:160.5},0).wait(1).to({rotation:10.9,x:36.2,y:169.4},0).wait(1).to({rotation:9.1,x:37.7,y:174.8},0).wait(1).to({x:37,y:175.6},0).wait(1).to({regX:-9.5,rotation:7.4,x:42.7,y:170.8},0).wait(1).to({rotation:5.1,x:46.9,y:165.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:60.4,y:149.2},0).wait(2).to({x:60.3,y:149.8},0).wait(4));

	// legL
	this.instance_12 = new lib.boy13Qleg2("single",0);
	this.instance_12.setTransform(55.4,90.6,1,1,0,0,0,11.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({rotation:1.5,x:53.1,y:93.3},0).wait(2).to({regX:11.3,scaleX:1,scaleY:1,rotation:12.2,x:43.6,y:105.3},0).wait(1).to({startPosition:0},0).wait(2).to({regY:3.8,rotation:13.4,x:41.3,y:108.3},0).wait(2).to({startPosition:0},0).wait(39).to({startPosition:0},0).wait(1).to({regX:11.4,regY:3.9,scaleX:1,scaleY:1,rotation:13.3,x:40.5,y:109.1},0).wait(1).to({x:39.7,y:109.7},0).wait(1).to({regX:11.3,rotation:13.1,x:38.8,y:110.3},0).wait(1).to({regY:3.8,scaleX:1,scaleY:1,x:38,y:110.9},0).wait(5).to({rotation:14.7,x:40.5},0).wait(2).to({rotation:16.5,x:40.6,y:108.4},0).wait(1).to({regY:3.9,rotation:13.7,x:47,y:96.3},0).wait(1).to({x:47.5,y:93.6},0).wait(1).to({x:47.7,y:92.1},0).wait(1).to({x:47.8,y:91.8},0).wait(2).to({x:47.7,y:92.1},0).wait(2).to({x:47.6,y:93},0).wait(18).to({regX:11.4,scaleX:1,scaleY:1,rotation:13.5,x:47.2,y:94.5},0).wait(2).to({rotation:13,x:45.9,y:99.9},0).wait(1).to({regX:11.3,scaleX:1,scaleY:1,rotation:12.2,x:43.7,y:108.9},0).wait(1).to({rotation:10.4,x:43.6,y:110.9},0).wait(1).to({x:42.8,y:111.7},0).wait(1).to({rotation:8.6,x:46.6,y:106.9},0).wait(1).to({rotation:6.4,x:48.4,y:101.3},0).wait(2).to({regX:11.2,scaleX:1,scaleY:1,rotation:0,x:55.5,y:90},0).wait(2).to({x:55.4,y:90.6},0).wait(4));

	// armL
	this.instance_13 = new lib.boy13QarmR("single",1);
	this.instance_13.setTransform(83,51.4,1,1,0,0,0,17.4,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regX:6.8,regY:4.9,scaleY:1.13,skewX:-0.2,skewY:1.5,x:72,y:21.8},0).wait(2).to({regX:2.7,regY:6.2,scaleX:1,scaleY:1,rotation:13.4,skewX:0,skewY:0,x:70.4,y:33.1,startPosition:20},0).wait(1).to({regX:2.6,regY:6.3,rotation:14.7,x:71.4,y:38.9},0).wait(2).to({regY:6.4,rotation:13.4,x:70.6,y:42.7},0).wait(2).to({x:70.5,y:43.3},0).wait(39).to({regY:6.3,rotation:11.4,x:70,y:42.8},0).wait(1).to({regY:6.4,scaleX:1,scaleY:1,rotation:8.5,x:67.7,y:43.9,startPosition:24},0).wait(1).to({regY:6.3,rotation:13.3,x:68.4,y:44.7,startPosition:25},0).wait(1).to({regY:6.4,scaleX:1.12,scaleY:1,rotation:0,skewX:18.6,skewY:19.6,x:66.8,y:47.9,startPosition:22},0).wait(1).to({regY:6.3,scaleX:1,scaleY:1,rotation:10.3,skewX:0,skewY:0,x:66.1,y:46.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:6.6,x:66.2},0).wait(2).to({regY:6.2,rotation:6.1,x:66,y:45.4},0).wait(1).to({scaleX:1.12,scaleY:1,rotation:0,skewX:14.6,skewY:19.6,x:70.4,y:46.9},0).wait(2).to({regX:2.7,regY:6.3,scaleX:0.97,scaleY:0.99,skewX:12.8,skewY:17.1,x:72.8,y:43.8,startPosition:26},0).wait(1).to({regX:17.4,regY:37.9,scaleX:1,scaleY:1,rotation:13.7,skewX:0,skewY:0,x:83,y:64.8,startPosition:23},0).wait(1).to({regX:3.6,regY:6,rotation:11.3,x:77.6,y:27.9},0).wait(1).to({regX:17.4,regY:37.9,rotation:13.7,x:83.7,y:60.6},0).wait(1).to({regX:2.6,regY:4.8,rotation:15.4,x:77.2,y:24.7},0).wait(2).to({regX:-0.3,regY:6.1,rotation:15.5,x:73.9,y:25.5},0).wait(2).to({regX:17.4,regY:37.9,rotation:13.7,x:83.5,y:61.5},0).wait(18).to({regX:2.4,regY:3.1,scaleX:1,scaleY:1,rotation:11.3,x:76.9,y:24.8},0).wait(2).to({regX:6.3,regY:5,scaleX:1.23,scaleY:1.06,rotation:0,skewX:14.8,skewY:31.9,x:78.6,y:37.4,startPosition:22},0).wait(1).to({regX:2.6,regY:6.4,scaleX:1,scaleY:1,rotation:12.1,skewX:0,skewY:0,x:73.1,y:41.6,startPosition:27},0).wait(1).to({rotation:8.8,x:69.2,y:42.6,startPosition:20},0).wait(1).to({rotation:5.8,x:69.1,y:41.8,startPosition:0},0).wait(1).to({regY:6.3,rotation:7.3,x:70.3,y:37.8},0).wait(1).to({regX:2.5,regY:6.2,scaleY:1.1,rotation:0,skewX:4.7,skewY:6.3,x:68.9,y:34.4,startPosition:1},0).wait(2).to({regX:17.4,regY:37.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:83.1,y:50.8},0).wait(2).to({x:83,y:51.4},0).wait(4));

	// head
	this.instance_14 = new lib.boy1_3Q_headProblemIs("synched",0);
	this.instance_14.setTransform(42.7,17.7,1,1,0,0,0,162.2,182.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:182.3,rotation:2.5,x:41.5,y:21,startPosition:1},0).wait(2).to({scaleX:1,scaleY:1,rotation:10.1,x:43.1,y:29.3,startPosition:3},0).wait(1).to({regY:182.2,rotation:15.4,x:44,y:35,startPosition:4},0).wait(2).to({rotation:18.7,x:42.1,y:40.3,startPosition:6},0).wait(2).to({rotation:20,x:41.5,y:41.8,startPosition:8},0).wait(39).to({startPosition:47},0).wait(1).to({scaleX:1,scaleY:1,rotation:20.3,x:40.5,y:42.5,startPosition:48},0).wait(1).to({rotation:20.6,x:39.5,y:43.2,startPosition:49},0).wait(1).to({rotation:21,x:38.6,y:43.8,startPosition:50},0).wait(1).to({rotation:21.3,x:37.6,y:44.6,startPosition:51},0).wait(1).to({regX:162.3,scaleX:1,scaleY:1,rotation:21.8,x:36.6,y:45.3,startPosition:52},0).wait(4).to({regX:162.5,scaleX:1,scaleY:1,rotation:19.7,x:43.5,y:43,startPosition:56},0).wait(2).to({regX:162.4,rotation:19,x:47.2,y:39.2,startPosition:58},0).wait(1).to({regX:162.3,regY:182.4,scaleX:1,scaleY:1,rotation:15.7,x:50.3,y:26,startPosition:59},0).wait(1).to({regY:182.5,rotation:14.2,x:51.9,y:21.4,startPosition:60},0).wait(1).to({regX:162.2,regY:182.4,rotation:13.4,x:52,y:18.8,startPosition:61},0).wait(1).to({x:52.1,y:17.9,startPosition:62},0).wait(2).to({x:52,y:18.8,startPosition:64},0).wait(2).to({x:51.7,y:20.3,startPosition:66},0).wait(18).to({regY:182.5,scaleX:1,scaleY:1,rotation:13.8,x:50.9,y:22,startPosition:84},0).wait(2).to({regX:162.3,regY:182.4,rotation:13.1,x:48.9,y:27.4,startPosition:86},0).wait(1).to({regX:162.2,regY:182.2,rotation:14.9,x:44,y:36.8,startPosition:87},0).wait(1).to({rotation:14.1,x:41.5,y:42.2,startPosition:88},0).wait(1).to({rotation:11.3,x:41.2,y:42,startPosition:89},0).wait(1).to({rotation:8.8,x:43.3,y:35.5,startPosition:90},0).wait(1).to({regY:182.1,scaleX:1,scaleY:1,rotation:4.5,x:44.2,y:26.7,startPosition:91},0).wait(2).to({regY:182.2,scaleX:1,scaleY:1,rotation:0,x:42.8,y:17.1,startPosition:93},0).wait(2).to({x:42.7,y:17.7,startPosition:95},0).wait(4));

	// armR
	this.instance_15 = new lib.Symbol1("synched",0);
	this.instance_15.setTransform(-25.4,14.5,1,1,-14.9,0,0,5.5,30.8);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({startPosition:0,_off:false},0).wait(2).to({rotation:0,x:-23,y:9.7},0).wait(1).to({rotation:2.3,x:-23.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.5,x:-23.9,y:10},0).wait(1).to({rotation:6.3,x:-24.2,y:9.9},0).wait(1).to({rotation:7.8,x:-24.5,y:10},0).wait(1).to({regX:5.4,rotation:9.1,x:-24.7,y:10.1},0).wait(1).to({regX:5.5,rotation:10,x:-24.8},0).wait(1).to({rotation:10.8,x:-25,y:10.2},0).wait(1).to({rotation:8.3,x:-24.6,y:10},0).wait(1).to({rotation:6.1,x:-24.2,y:9.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.3,x:-23.8},0).wait(1).to({rotation:2.8,x:-23.6,y:9.7},0).wait(1).to({rotation:1.5,x:-23.3},0).wait(1).to({rotation:0.5,x:-23.1},0).wait(1).to({rotation:0,x:-23},0).wait(1).to({rotation:2.3,x:-23.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.5,x:-23.9,y:10},0).wait(1).to({rotation:6.3,x:-24.2,y:9.9},0).wait(1).to({rotation:7.8,x:-24.5,y:10},0).wait(1).to({regX:5.4,rotation:9.1,x:-24.7,y:10.1},0).wait(1).to({regX:5.5,rotation:10,x:-24.8},0).wait(1).to({rotation:10.8,x:-25,y:10.2},0).wait(1).to({rotation:8.3,x:-24.6,y:10},0).wait(1).to({rotation:6.1,x:-24.2,y:9.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.3,x:-23.8},0).wait(1).to({rotation:2.8,x:-23.6,y:9.7},0).wait(1).to({rotation:1.5,x:-23.3},0).wait(1).to({rotation:0.5,x:-23.1},0).wait(1).to({rotation:0,x:-23},0).to({_off:true},11).wait(52));

	// armR
	this.instance_16 = new lib.boy13QarmL("single",29);
	this.instance_16.setTransform(13,19.4,1.006,0.999,0,10.6,17.3,29.5,-0.7);

	this.instance_17 = new lib.boy13QarmL("single",5);
	this.instance_17.setTransform(12.3,40.7,0.999,0.999,8.4,0,0,31.1,12.7);

	this.instance_18 = new lib.Symbol2("synched",0);
	this.instance_18.setTransform(11.5,41.6,1,1,0,0,0,40.6,44);

	this.instance_19 = new lib.Symbol1("synched",0);
	this.instance_19.setTransform(-25.8,14.2,0.991,1.011,0,8.2,3.8,5.5,30.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16,p:{regX:29.5,regY:-0.7,scaleX:1.006,rotation:0,skewX:10.6,skewY:17.3,x:13,y:19.4,startPosition:29,scaleY:0.999}}]},1).to({state:[]},2).to({state:[{t:this.instance_16,p:{regX:15.1,regY:38.7,scaleX:0.999,rotation:12.1,skewX:0,skewY:0,x:-6.8,y:58.1,startPosition:24,scaleY:0.999}}]},1).to({state:[{t:this.instance_17},{t:this.instance_16,p:{regX:15.1,regY:38.7,scaleX:1,rotation:0,skewX:0,skewY:0,x:64.4,y:52.3,startPosition:1,scaleY:1}}]},2).to({state:[{t:this.instance_18,p:{regY:44,rotation:0,x:11.5,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-1.2,x:11.8,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-2.4,x:12,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-3.7,x:12.2,y:41.8,regX:40.5,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-4.4,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-5.2,x:12.4,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-5.7,x:12.5,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-6.2,x:12.6,y:42,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-4.7,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-3.4,x:12.1,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-2.4,x:11.9,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-1.4,x:11.8,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-0.7,x:11.7,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-0.2,x:11.6,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:0,x:11.5,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-1.2,x:11.8,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-2.4,x:12,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-3.7,x:12.2,y:41.8,regX:40.5,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-4.4,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-5.2,x:12.4,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-5.7,x:12.5,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-6.2,x:12.6,y:42,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-4.7,x:12.3,y:41.9,regX:40.6,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-3.4,x:12.1,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:-2.4,x:11.9,y:41.8,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-1.4,x:11.8,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-0.7,x:11.7,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:-0.2,x:11.6,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44,rotation:0,x:11.5,y:41.6,regX:40.6,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:0,x:11.5,y:42.4,regX:40.6,scaleX:1.01,scaleY:0.993,skewX:-5,skewY:-9.4}},{t:this.instance_19,p:{regX:5.5,scaleX:0.991,scaleY:1.011,skewX:8.2,skewY:3.8,x:-25.8,y:14.2}}]},11).to({state:[{t:this.instance_18,p:{regY:44.1,rotation:0,x:11.1,y:41.7,regX:40.6,scaleX:1.013,scaleY:1,skewX:-17.9,skewY:-27.3}},{t:this.instance_19,p:{regX:5.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-30.2,y:23.8}}]},1).to({state:[]},1).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.3,-164.4,224.9,329.1);


(lib.Henry_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// collar
	this.instance = new lib.boy13Qcollar("synched",0);
	this.instance.setTransform(36.9,17.8,1.038,1.098,0,0,0,37.6,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({regX:37.7,rotation:1,x:36.4,y:21.6},0).wait(2).to({rotation:1.8,x:36.7,y:24},0).wait(2).to({rotation:6.8,x:38.7,y:28.5},0).wait(2).to({regX:37.6,x:42.6,y:25.1},0).wait(1).to({rotation:8.5,x:45.8,y:21.1},0).wait(1).to({rotation:10.6,x:46.1,y:17.4},0).wait(2).to({rotation:11.1,x:46.6,y:16.4},0).wait(2).to({x:47,y:15.9},0).wait(2).to({x:46.9,y:16.5},0).wait(1).to({y:16.8},0).wait(36).to({rotation:10.3,x:47,y:18.6},0).wait(2).to({rotation:9.1,x:46.8,y:21.7},0).wait(2).to({scaleY:1.1,rotation:7,y:25.2},0).wait(1).to({regX:37.7,scaleY:1.1,rotation:6.8,x:45,y:29},0).wait(1).to({regX:37.6,rotation:2.8,x:39.4,y:27.7},0).wait(2).to({regX:37.7,rotation:1.8,x:36.7,y:24},0).wait(1).to({rotation:1,x:36.2,y:21},0).wait(2).to({regX:37.6,rotation:0,x:36.9,y:17.8},0).wait(2).to({startPosition:0},0).wait(81));

	// armR
	this.instance_1 = new lib.boy13QarmL("single",1);
	this.instance_1.setTransform(-4.1,55.2,1,1,0,0,0,15.1,38.7);

	this.instance_2 = new lib.boy13QarmLcopy("single",6);
	this.instance_2.setTransform(-2.6,57.3,1,1,6.8,0,0,15.1,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:-4.1,y:55.2,regX:15.1,regY:38.7,scaleY:1,skewX:0,skewY:0,scaleX:1,startPosition:1}}]}).to({state:[{t:this.instance_1,p:{rotation:1,x:-5.4,y:58.2,regX:15.1,regY:38.7,scaleY:1,skewX:0,skewY:0,scaleX:1,startPosition:1}}]},96).to({state:[{t:this.instance_1,p:{rotation:0,x:7.2,y:17.6,regX:26.6,regY:-4.1,scaleY:1.034,skewX:2.5,skewY:1.8,scaleX:1,startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:12.9,y:27.6,regX:30.6,regY:3.5,scaleY:1.146,skewX:9.2,skewY:6.8,scaleX:1,startPosition:1}}]},2).to({state:[{t:this.instance_2,p:{regX:15.1,regY:38.7,scaleX:1,scaleY:1,rotation:6.8,x:-2.6,y:57.3}}]},2).to({state:[{t:this.instance_1,p:{rotation:2.7,x:17.3,y:13.4,regX:27,regY:-1.9,scaleY:0.998,skewX:0,skewY:0,scaleX:0.998,startPosition:2}}]},1).to({state:[{t:this.instance_1,p:{rotation:10.6,x:-1,y:46.7,regX:15.2,regY:38.9,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},1).to({state:[{t:this.instance_1,p:{rotation:13.4,x:15.5,y:13.4,regX:25.2,regY:4.5,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{rotation:14.2,x:18.4,y:10.5,regX:27.2,regY:1.7,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{rotation:13.6,x:16.9,y:15.3,regX:26.7,regY:6,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{rotation:12.6,x:18.1,y:10.5,regX:26.8,regY:0.8,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},1).to({state:[{t:this.instance_1,p:{rotation:10.3,x:-0.1,y:48.1,regX:15.2,regY:38.9,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},36).to({state:[{t:this.instance_1,p:{rotation:3.6,x:16.8,y:17.8,regX:26.1,regY:2.2,scaleY:0.999,skewX:0,skewY:0,scaleX:0.999,startPosition:2}}]},2).to({state:[{t:this.instance_2,p:{regX:23.9,regY:3.8,scaleX:0.999,scaleY:0.999,rotation:5,x:12.6,y:25.4}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:16.6,y:27.5,regX:27.9,regY:3.2,scaleY:1.072,skewX:8.4,skewY:6.8,scaleX:1,startPosition:1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:5.5,y:30,regX:22.6,regY:5.4,scaleY:1.016,skewX:4.1,skewY:2.8,scaleX:1,startPosition:1}}]},1).to({state:[{t:this.instance_1,p:{rotation:1.8,x:-5.6,y:60,regX:15.1,regY:38.7,scaleY:1,skewX:0,skewY:0,scaleX:1,startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{rotation:1,x:-5.6,y:57.6,regX:15.1,regY:38.7,scaleY:1,skewX:0,skewY:0,scaleX:1,startPosition:1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:-4.1,y:55.2,regX:15.1,regY:38.7,scaleY:1,skewX:0,skewY:0,scaleX:1,startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:-4.1,y:55.2,regX:15.1,regY:38.7,scaleY:1,skewX:0,skewY:0,scaleX:1,startPosition:1}}]},2).wait(81));

	// torso
	this.instance_3 = new lib.boy13Qtorso("synched",0);
	this.instance_3.setTransform(41.4,59.8,1.012,1,0,0,0,44.8,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({regX:44.9,rotation:1,x:40.1,y:63.8},0).wait(2).to({rotation:1.8,x:39.8,y:66.2},0).wait(2).to({rotation:6.8,x:38.2,y:70.8},0).wait(2).to({regX:44.8,x:42,y:67.4},0).wait(1).to({regX:44.9,scaleY:1,rotation:8.5,x:44,y:63.3},0).wait(1).to({regX:44.8,regY:43.5,rotation:10.6,x:42.8,y:59.4},0).wait(2).to({regX:44.9,rotation:11.1,x:42.9,y:58.4},0).wait(2).to({x:43.3,y:57.9},0).wait(2).to({x:43.2,y:58.5},0).wait(1).to({y:58.8},0).wait(36).to({rotation:10.3,x:43.9,y:60.6},0).wait(2).to({scaleX:1.01,rotation:9.1,x:44.6,y:63.8},0).wait(2).to({rotation:7,x:46.2,y:67.3},0).wait(1).to({regY:43.6,scaleX:1.01,scaleY:1,rotation:6.8,x:44.5,y:71.3},0).wait(1).to({rotation:2.8,x:41.9,y:70},0).wait(2).to({rotation:1.8,x:39.8,y:66.2},0).wait(1).to({rotation:1,x:39.9,y:63.1},0).wait(2).to({regX:44.8,rotation:0,x:41.4,y:59.8},0).wait(2).to({startPosition:0},0).wait(81));

	// footR
	this.instance_4 = new lib.boy1_34_footR_v01("single",0);
	this.instance_4.setTransform(29.8,149.5,1,1,0,0,0,-0.7,-5.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96).to({regX:-0.5,rotation:1,x:26.9,y:153.2},0).wait(2).to({startPosition:0},0).wait(2).to({regX:-0.6,rotation:1.8,x:25.1,y:152.4},0).wait(2).to({x:29.1,y:148.3},0).wait(1).to({regY:-5.6,rotation:5.3,x:20.9,y:139.5},0).wait(1).to({regX:-0.5,rotation:7.1,x:22.6,y:133.7},0).wait(2).to({regX:-0.6,rotation:7.6,x:21.9,y:132.5},0).wait(2).to({x:22.3,y:131.9},0).wait(2).to({x:22.2,y:132.5},0).wait(1).to({x:22.1,y:132.8},0).wait(36).to({regX:-0.5,scaleX:1,scaleY:1,rotation:6.9,x:23.9,y:134.7},0).wait(2).to({rotation:5.6,x:26.3,y:138.3},0).wait(2).to({rotation:3.5,x:30.4,y:143.5},0).wait(1).to({regX:-0.6,regY:-5.7,scaleX:1,scaleY:1,rotation:1.8,x:25.1,y:152.4},0).wait(1).to({regX:-0.5,rotation:1,x:26.9,y:153.2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({regX:-0.6,rotation:0,x:29.8,y:149.5},0).wait(2).to({startPosition:0},0).wait(81));

	// legR
	this.instance_5 = new lib.boy13Qleg1("single",0);
	this.instance_5.setTransform(32,91.5,1,1,0,0,0,23.9,12);

	this.instance_6 = new lib.boy13QarmL("single",6);
	this.instance_6.setTransform(12.6,25.4,0.999,0.999,5,0,0,23.9,3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{rotation:0,x:32,y:91.5,regY:12,scaleX:1,scaleY:1,regX:23.9}}]}).to({state:[{t:this.instance_5,p:{rotation:1,x:30.2,y:95.2,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},96).to({state:[{t:this.instance_5,p:{rotation:1.8,x:29.4,y:97.5,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:6.8,x:25.1,y:101,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:6.9,x:28.9,y:97.6,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:8.6,x:30,y:93,regY:11.8,scaleX:0.999,scaleY:0.999,regX:23.9}}]},1).to({state:[{t:this.instance_5,p:{rotation:10.6,x:27.8,y:88.9,regY:12,scaleX:0.999,scaleY:0.999,regX:23.9}}]},1).to({state:[{t:this.instance_5,p:{rotation:11.2,x:27.7,y:87.7,regY:12,scaleX:0.999,scaleY:0.999,regX:24}}]},2).to({state:[{t:this.instance_5,p:{rotation:11.2,x:28.1,y:87.2,regY:12,scaleX:0.999,scaleY:0.999,regX:24}}]},2).to({state:[{t:this.instance_5,p:{rotation:11.2,x:28,y:87.8,regY:12,scaleX:0.999,scaleY:0.999,regX:24}}]},2).to({state:[{t:this.instance_5,p:{rotation:11.2,x:28,y:88.1,regY:12,scaleX:0.999,scaleY:0.999,regX:24}}]},1).to({state:[{t:this.instance_5,p:{rotation:10.4,x:29,y:90.1,regY:12,scaleX:0.999,scaleY:0.999,regX:24}}]},36).to({state:[{t:this.instance_5,p:{rotation:9.1,x:30.4,y:93.6,regY:11.9,scaleX:0.999,scaleY:0.999,regX:24}}]},2).to({state:[{t:this.instance_5,p:{rotation:7,x:33.1,y:97.6,regY:11.9,scaleX:0.999,scaleY:0.999,regX:24}},{t:this.instance_6}]},2).to({state:[{t:this.instance_5,p:{rotation:6.8,x:31.4,y:101.5,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},1).to({state:[{t:this.instance_5,p:{rotation:2.9,x:30.9,y:101.1,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},1).to({state:[{t:this.instance_5,p:{rotation:1.8,x:29.4,y:97.5,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:1,x:30,y:94.6,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},1).to({state:[{t:this.instance_5,p:{rotation:0,x:32,y:91.5,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},2).to({state:[{t:this.instance_5,p:{rotation:0,x:32,y:91.5,regY:12,scaleX:1,scaleY:1,regX:23.9}}]},2).wait(81));

	// footL
	this.instance_7 = new lib.boy1_34_footL_v01("single",0);
	this.instance_7.setTransform(60.3,149.8,1,1,0,0,0,-9.6,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(96).to({rotation:1,x:57.3,y:154},0).wait(2).to({startPosition:0},0).wait(2).to({regX:-9.6,rotation:1.8,x:57.2,y:153.9},0).wait(2).to({regX:-9.5,x:59.5,y:149.5},0).wait(1).to({regX:-9.6,rotation:5.3,x:51.2,y:142.4},0).wait(1).to({rotation:7.1,x:52.4,y:141.6},0).wait(2).to({regY:-2.5,rotation:7.6,x:51.7,y:140.6},0).wait(2).to({x:52.1,y:140},0).wait(2).to({x:52,y:140.6},0).wait(1).to({x:51.9,y:140.9},0).wait(36).to({scaleX:1,scaleY:1,rotation:6.9,x:53.7,y:142.4},0).wait(2).to({regX:-9.5,rotation:5.6,x:56.4,y:145.4},0).wait(2).to({regX:-9.6,rotation:3.5,x:60.6,y:149.6},0).wait(1).to({regY:-2.4,scaleX:1,scaleY:1,rotation:1.8,x:57.2,y:153.9},0).wait(1).to({regX:-9.5,rotation:1,x:57.3,y:154},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({rotation:0,x:60.3,y:149.8},0).wait(2).to({startPosition:0},0).wait(81));

	// legL
	this.instance_8 = new lib.boy13Qleg2("single",0);
	this.instance_8.setTransform(55.4,90.6,1,1,0,0,0,11.2,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96).to({rotation:1,x:53.6,y:94.8},0).wait(2).to({regX:11.3,rotation:1.8,x:53,y:97.4},0).wait(2).to({regX:11.2,rotation:6.8,x:48.5,y:102.9},0).wait(2).to({rotation:6.9,x:52.3,y:99.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.6,x:53.3,y:95.7},0).wait(1).to({rotation:10.6,x:51,y:92.3},0).wait(2).to({rotation:11.2,x:50.8,y:91.3},0).wait(2).to({x:51.2,y:90.8},0).wait(2).to({x:51.1,y:91.4},0).wait(1).to({x:51,y:91.7},0).wait(36).to({rotation:10.4,x:52.1,y:93.5},0).wait(2).to({rotation:9.1,x:53.6,y:96.4},0).wait(2).to({regX:11.3,regY:4,rotation:7,x:56.4,y:99.7},0).wait(1).to({regX:11.2,regY:3.9,scaleX:1,scaleY:1,rotation:6.8,x:54.8,y:103.4},0).wait(1).to({regX:11.3,rotation:2.9,x:54.4,y:101.4},0).wait(2).to({rotation:1.8,x:53,y:97.4},0).wait(1).to({regX:11.2,rotation:1,x:53.4,y:94.1},0).wait(2).to({rotation:0,x:55.4,y:90.6},0).wait(2).to({startPosition:0},0).wait(81));

	// armL
	this.instance_9 = new lib.boy13QarmR("single",1);
	this.instance_9.setTransform(83,51.4,1,1,0,0,0,17.4,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96).to({regX:17.5,regY:37.9,rotation:1,x:81.9,y:56.1},0).wait(2).to({regX:5.5,regY:2.4,scaleY:1.03,rotation:0,skewX:0.3,skewY:1.8,x:70.9,y:23.3},0).wait(2).to({regX:7.2,regY:7.2,scaleY:1.16,skewX:1.5,skewY:6.8,x:74,y:35.8},0).wait(2).to({regX:17.5,regY:37.8,scaleY:1,rotation:6.8,skewX:0,skewY:0,x:84.4,y:64,startPosition:6},0).wait(1).to({regX:2.1,regY:5.5,scaleX:1,scaleY:1,rotation:13.6,x:76.1,y:26.9,startPosition:2},0).wait(1).to({regX:17.4,regY:37.8,rotation:10.6,x:85.2,y:58.9},0).wait(2).to({regX:1.2,regY:6.2,rotation:8.1,x:75.6,y:24.2},0).wait(2).to({regX:2.8,regY:4.5,rotation:6.3,x:77.8,y:22.3},0).wait(2).to({regX:1.2,regY:9.1,rotation:6.5,x:75.3,y:27.1},0).wait(1).to({regX:-1.8,regY:0.3,rotation:7.8,x:73.8,y:18.1},0).wait(36).to({regX:17.5,regY:37.8,rotation:10.3,x:86.3,y:60},0).wait(2).to({regX:6.2,regY:9.3,rotation:13.3,x:80.3,y:32.4},0).wait(2).to({regX:17.5,regY:37.8,rotation:7,x:88.5,y:64.2,startPosition:6},0).wait(1).to({regX:6.5,regY:0,scaleX:1,scaleY:1.11,rotation:0,skewX:5,skewY:6.8,x:80.4,y:29,startPosition:1},0).wait(1).to({regX:4.6,regY:1.1,scaleY:1.05,skewX:1.4,skewY:2.8,x:72.8,y:26.3},0).wait(2).to({regX:17.5,regY:37.9,scaleY:1,rotation:1.8,skewX:0,skewY:0,x:81.7,y:59.2},0).wait(1).to({rotation:1,y:55.5},0).wait(2).to({regX:17.4,regY:37.8,rotation:0,x:83,y:51.4},0).wait(2).to({startPosition:1},0).wait(81));

	// head
	this.instance_10 = new lib.boy1_3Q_headIDLE("synched",0);
	this.instance_10.setTransform(42.7,17.7,1,1,0,0,0,162.2,182.2);

	this.instance_11 = new lib.boy1_front_hairtuft_v01("synched",0);
	this.instance_11.setTransform(54.8,-86.1,0.999,0.999,7.1,0,0,2.1,19.6);

	this.instance_12 = new lib.boy1_front_hat_v01("synched",0);
	this.instance_12.setTransform(50.4,-105,0.999,0.999,7.1);

	this.instance_13 = new lib.boy1_front_pupil_R_v01("synched",0);
	this.instance_13.setTransform(81.9,-30.7,0.999,0.999,6.1);

	this.instance_14 = new lib.boy_front_pupil_R_v01("synched",0);
	this.instance_14.setTransform(1.2,-39.2,0.999,0.999,6.1);

	this.instance_15 = new lib.boy1_front_eyeL_v01("single",0);
	this.instance_15.setTransform(85.3,-28.6,0.999,0.999,6.1);

	this.instance_16 = new lib.boy1_front_eyeR_v01("single",0);
	this.instance_16.setTransform(3.8,-37.9,0.999,0.999,6.1);

	this.instance_17 = new lib.boy_front_browR_v01("synched",0);
	this.instance_17.setTransform(-0.3,-60.3,0.999,0.999,6.1);

	this.instance_18 = new lib.boy1_front_browL_v01("synched",0);
	this.instance_18.setTransform(92.6,-52.3,0.999,0.999,6.1);

	this.instance_19 = new lib.boy1_front_nose_v01("synched",0);
	this.instance_19.setTransform(46.9,-20.2,0.999,0.999,6.1);

	this.instance_20 = new lib.boy1_front_mout_v01("single",0);
	this.instance_20.setTransform(39,2.7,0.999,0.999,6.1,0,0,8.2,2.6);

	this.instance_21 = new lib.boy1_front_earL("synched",0);
	this.instance_21.setTransform(114.6,-18.3,0.999,0.999,6.1);

	this.instance_22 = new lib.boy1_front_earR_v01("synched",0);
	this.instance_22.setTransform(-28.7,-33.1,0.999,0.999,6.1);

	this.instance_23 = new lib.boy1_front_face_v01("synched",0);
	this.instance_23.setTransform(44.1,-47.2,0.999,0.999,6.1);

	this.instance_24 = new lib.boy13QarmL("single",6);
	this.instance_24.setTransform(-2.6,57.3,1,1,6.8,0,0,15.1,38.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.2,skewX:0,skewY:0,x:42.7,y:17.7,startPosition:0,scaleX:1,scaleY:1,rotation:0}}]}).to({state:[{t:this.instance_10,p:{regX:162.1,regY:182.3,skewX:1.8,skewY:2.3,x:42,y:23.9,startPosition:96,scaleX:1,scaleY:1,rotation:0}}]},96).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.3,skewX:4.4,skewY:4.9,x:41.2,y:29.1,startPosition:98,scaleX:1,scaleY:1,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{rotation:6.1,x:44.1,y:-47.2}},{t:this.instance_22,p:{rotation:6.1,x:-28.7,y:-33.1}},{t:this.instance_21,p:{rotation:6.1,x:114.6,y:-18.3}},{t:this.instance_20,p:{rotation:6.1,x:39,y:2.7,mode:"single"}},{t:this.instance_19,p:{rotation:6.1,x:46.9,y:-20.2}},{t:this.instance_18,p:{rotation:6.1,x:92.6,y:-52.3}},{t:this.instance_17,p:{rotation:6.1,x:-0.3,y:-60.3}},{t:this.instance_16,p:{rotation:6.1,x:3.8,y:-37.9,mode:"single"}},{t:this.instance_15,p:{rotation:6.1,x:85.3,y:-28.6,mode:"single"}},{t:this.instance_14,p:{rotation:6.1,x:1.2,y:-39.2}},{t:this.instance_13,p:{rotation:6.1,x:81.9,y:-30.7}},{t:this.instance_12,p:{rotation:7.1,x:50.4}},{t:this.instance_11,p:{regX:2.1,rotation:7.1,x:54.8,y:-86.1}}]},2).to({state:[{t:this.instance_10,p:{regX:162.1,regY:182.2,skewX:5.5,skewY:-174.4,x:38,y:29.2,startPosition:102,scaleX:0.999,scaleY:0.999,rotation:0}},{t:this.instance_24}]},2).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.2,skewX:10.6,skewY:-169.3,x:37.5,y:23.8,startPosition:103,scaleX:0.999,scaleY:0.999,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:162.1,regY:182.2,skewX:14.2,skewY:-165.7,x:37.9,y:19.6,startPosition:104,scaleX:0.999,scaleY:0.999,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:162,regY:182.2,skewX:15.2,skewY:-164.7,x:37.9,y:17.3,startPosition:106,scaleX:0.999,scaleY:0.999,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:162,regY:182.2,skewX:15.2,skewY:-164.7,x:38.4,y:16.2,startPosition:108,scaleX:0.999,scaleY:0.999,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:162,regY:182.2,skewX:15.2,skewY:-164.7,x:38.2,y:17.4,startPosition:110,scaleX:0.999,scaleY:0.999,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:162,regY:182.2,skewX:15.2,skewY:-164.7,x:38.1,y:18,startPosition:111,scaleX:0.999,scaleY:0.999,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:162,regY:182.2,skewX:14.5,skewY:-165.4,x:38.1,y:20.5,startPosition:147,scaleX:0.999,scaleY:0.999,rotation:0}}]},36).to({state:[{t:this.instance_10,p:{regX:161.9,regY:182.2,skewX:11.6,skewY:-168.3,x:39.1,y:24.7,startPosition:149,scaleX:0.999,scaleY:0.999,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:161.8,regY:182.3,skewX:7.8,skewY:-172.1,x:40.2,y:28.8,startPosition:151,scaleX:0.998,scaleY:0.998,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{rotation:7.6,x:53.1,y:-47.4}},{t:this.instance_22,p:{rotation:7.6,x:-20.1,y:-35.3}},{t:this.instance_21,p:{rotation:7.6,x:122.8,y:-16.7}},{t:this.instance_20,p:{rotation:7.6,x:46.6,y:2.2,mode:"synched"}},{t:this.instance_19,p:{rotation:7.6,x:55.1,y:-20.4}},{t:this.instance_18,p:{rotation:7.6,x:101.6,y:-51.2}},{t:this.instance_17,p:{rotation:7.6,x:8.9,y:-61.7}},{t:this.instance_16,p:{rotation:7.6,x:12.6,y:-39.3,mode:"synched"}},{t:this.instance_15,p:{rotation:7.6,x:93.7,y:-27.8,mode:"synched"}},{t:this.instance_14,p:{rotation:7.6,x:8.6,y:-44.3}},{t:this.instance_13,p:{rotation:7.6,x:90.2,y:-31}},{t:this.instance_12,p:{rotation:8.6,x:60.9}},{t:this.instance_11,p:{regX:2.2,rotation:8.6,x:64.9,y:-86}}]},1).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.3,skewX:6.9,skewY:7.4,x:43.9,y:32.8,startPosition:153,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.3,skewX:4.4,skewY:4.9,x:41.2,y:29.1,startPosition:155,scaleX:1,scaleY:1,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:162.1,regY:182.3,skewX:1.8,skewY:2.3,x:41.8,y:23.3,startPosition:156,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.3,skewX:0,skewY:0,x:42.7,y:18.8,startPosition:0,scaleX:1,scaleY:1,rotation:0.5}}]},2).to({state:[{t:this.instance_10,p:{regX:162.2,regY:182.2,skewX:0,skewY:0,x:42.7,y:17.7,startPosition:2,scaleX:1,scaleY:1,rotation:0}}]},2).wait(81));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.3,-164.4,225.2,329.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;