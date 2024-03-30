(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.avril = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"idle":0,idle_loop:299,TheFamilyTable:308,TheFamilyTable_stop:410,Yum:411,Yum_stop:496,ToTheLunchLab:497,ToTheLunchLab_stop:557});

	// anim
	this.instance = new lib.Avril_Idle("synched",0);
	this.instance.setTransform(238.1,284,1.246,1.246,0,-8.7,171.2);

	this.instance_1 = new lib.Avril_FamilyTable("synched",0);
	this.instance_1.setTransform(238.1,284,1.246,1.246,0,-8.7,171.2);

	this.instance_2 = new lib.Avril_Yum("synched",0);
	this.instance_2.setTransform(238.1,284,1.246,1.246,0,-8.7,171.2);

	this.instance_3 = new lib.Avril_ToTheLL("synched",0);
	this.instance_3.setTransform(238.1,284,1.246,1.246,0,-8.7,171.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},308).to({state:[{t:this.instance_2}]},103).to({state:[{t:this.instance_3}]},86).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.8,1.9,437.5,499.4);


// symbols:
(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqlBIIgBgDQAAgSA5goQA8gnAlgBQA4ABAUALQAHADAMAQIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgYgIQgYgHgkgBQgeAAg7ApQgeAVgaAWQgHAAgBgEgAKgASQgDAAghgfQgggggagDQgmgDgiASQgcARgDAAQgFAAgCgFIgBgEQABgPAvgWQAzgXAgATQAbAFAcAdQAaAcAAAMIgCAGQgCAEgDAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.8,-7.5,135.9,15.3);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqlBIIgBgDQAAgSA5goQA8gnAlgBQA4ABAUALQAHADAMAQIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgYgIQgYgHgkgBQgeAAg7ApQgeAVgaAWQgHAAgBgEgAKgASQgDAAghgfQgggggagDQgmgDgiASQgcARgDAAQgFAAgCgFIgBgEQABgPAvgWQAzgXAgATQAbAFAcAdQAaAcAAAMIgCAGQgCAEgDAAIAAAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67.8,-7.5,135.9,15.3);


(lib.girl1pupil2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOATQgIgIABgLQgBgKAIgIQAGgIAIAAQAJAAAHAIQAGAIABAKQgBALgGAIQgHAIgJAAQgIAAgGgIg");
	this.shape.setTransform(0.4,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.8,-2.5,4.6,5.5);


(lib.girl1pupil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAVQgIgJAAgMQAAgLAIgJQAHgJAJAAQAKAAAHAJQAIAJAAALQAAAMgIAJQgHAJgKAAQgJAAgHgJg");
	this.shape.setTransform(0.2,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-3,5,6);


(lib.girl134torso = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5763C0").s().p("AgqAIQAKgYgBgTIAhANQAfALAMADQgEAfgEANg");
	this.shape.setTransform(12.3,67.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81B74F").s().p("AgPD1QgegKAAgQQAAgKANhMIAVh1QANhfACgZQAEguAGgcQAFgXAEg6IAMB2QALB8AABpIgDBTQgEBNgBAMQglgJgQgGg");
	this.shape_1.setTransform(13.1,37.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6978F3").s().p("AhPDoQhFgLg3gNIhPgcQAKgbgBgSIAiAMQAgAMANACQAfAIBIAKQBVAMBFgCQBIgCAggJIBkgcQAHAhAJATIgBACQhAAVgdAHQgwANhPAAQg7AAhSgNgAAAg2QgjgcAAgvQAAg0AfggQAagcAqgDQAogCAdAXQAgAZAAAtQAAA/gZAeQgYAegxAAQgkAAgfgYgAACiAQALAXACACQATATAwAAQAYAAAQgPQAOgMAAgOQAAgHgBgBIgCAAQgXAggcAAQgTAAgXgLIgigTgAAUi/QgEAEAAAFQAAAGAEAEQAEAEAFAAQAGAAAEgEQADgEAAgGQAAgFgDgEQgEgEgGAAQgFAAgEAEgAB3jFQgEADAAAGQAAAFAEAEQADAEAFAAQAFAAAEgEQAEgEAAgFQAAgGgEgDQgEgEgFAAQgFAAgDAEg");
	this.shape_2.setTransform(36.3,50.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2E95A").s().p("Ai5EkQglgJgRgGQgegKAAgQQAAgKANhMIAVh0QAOhfADgaQAEguAGgcQAFgXAEg6QAGg1AWgoQAFAIgFgJQAvARAjAEQAcACA9AAQBoAAATgRQAWBBA5DuQA1DYAPBRQhwAegXADQgZAEhZAAQiUgQg6gOgAgJhSQglApAABBQAAA4AlAiQAhAgAyAAQAxAAAhgqQAegmADg1QADg1gcglQgggqg+AAQgvAAggAlg");
	this.shape_3.setTransform(35.6,34.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjTFiQhmgbAAgPQAAg1Aci7QAXihAIgkQAPheAMg4QAVhoAeAAQBuASA6AAQBAAAAegLIAcgKQAOgNAGAgQAFAhAdB4QAeB5AjCDQAlCNAsCNQguAdgyAOQhFAUhaAAQiRAAh9ghg");
	this.shape_4.setTransform(36.7,38.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.3,-0.3,62.9,77.5);


(lib.girl134skirt = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A03A7F").s().p("AhECEQANggAZhnQAch1ACgyIBFAZQg4ExgDAKQgdgLgxgbg");
	this.shape.setTransform(8.9,19.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC419B").s().p("AijCyQhTgSgfgOQgfgLgxgcQANggAZhnQAch1ACgxIBGAYQBeASA4AHQA3AHAxAAQBcAAAugJQAsgIAtgZIAtCYQAkB4APAoQgeAXhmAUQhvAUhyAAIgBAAQhRAAhSgRg");
	this.shape_1.setTransform(37.9,22.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Aj/C1Qh9goAAgmQAKghANg0QAahnARiFQDEA8BpAAQDBAABdgvQAJAkAlBxIAzCeIAJAfIACAKQAAAKgNAFIgvARQhJAchfAHQhfAIheABIgEAAQheAAh5gmg");
	this.shape_2.setTransform(38.1,22);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.3,44);


(lib.girl134poof2 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGEdIgBgEIABgDIACgBQABgCAEgBQAEgBAMADQAMABADgBQAOgCAbgdQAUgXADAOQACALgKASQgMAZgaAFQgRADgMAAQgZAAgCgNgAiYD6QgcgHgCgMQgDgSAUALQAeAQAQgDIAlgKIApgJIgLAPQgRAOgaAEQgNADgMAAQgQAAgQgEgAkIB+QgRAAgQgMQgPgMgCgJQgCgMAEgVQAEgdAOgDIAIAAIABgBQABABAAAEQABACgIAQQgJAQACANQABAKARAOQASAPAAAEIABAEIgDAAgAg6ARIgKgVQgDgMABgLQABgWARgEIABgBIACAFQAAABgEADQgEADAAAEQADATAJAQQAOAVAUAHQgDAKgGAAIgIABQgSAAgMgTgADyAVQgBgCAHgSQAHgQgCgMQgBgHgJgJQgKgJAAgDIAAgGIAAgDQAVgBAJALQAGAHADAPQADASgFAMQgGALgTASIgBAAQgBAAgBgGgAkWiuIgCgKQgDgRAagUQAegWAjAOQgHAHgVAKQgZAMgHAFQgEADgBANQgBAMgIABIgDAAQgGAAgDgIgAEYjIQgVgXABACQgEgWAcAQQAbAPAFAbQABAFgDADIgGAGQgFgEgXgZgAA5kOQgQgJgyAJIgLAAQgBgBgBgHQgEgVA4ACQA6ADAFAcQABAEgCACIAAAEQgMgBgXgNg");
	this.shape.setTransform(47.4,45.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241818").s().p("AgQFPIABg1IABgCQACgBgGAAIgaANQgZANgOAAQgYAAgQgyQgLglAAgXQAAgGAEgLIAFgQIgBgKQgJADgJAAQgNAAgYg0QgXgxAAgNQAAghApglQAnghAAgFQgLhTAAgLQAAghAngmQAogoAlAAIAIAIQAKAJAIAEIADgIIAFgQIABgFQAGg9AwgTQAPgGBSgLIAGABQAKAAAWAHQg2AUgeAkQgWAbAAAPQAAAKACALQACAPAGAQIAGAOIgEALIgHAPQgHgFgFgGIgEgEQgtAAgjAhQgaAaAAAPQAAAQAMAWIALATQAAAFgmAfQgnAcABAhQAAAeAjATQAjATAAAIIgUAjQgUAjgBADQAAAmAoAYQAkAYAAALQAAAIgGAMQgCAOAQASQAJALANANQAIAIACAFQgDACgPADQgPAEgHAAQgsAAgGgrg");
	this.shape_1.setTransform(23.1,40.9);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#302121").s().p("AACF/QgIgOgFAAQgGAAgVAIQgVAJgCAAQglAAgOgYQgLgbgKgJIgNAXQgDACgPADQgPAEgHAAQguAAgGgrIABg1IABgCQACgBgGAAIgaANQgZANgOAAQgYAAgQgyQgLglAAgXQAAgGAEgLIAFgQIgBgKQgJADgJAAQgNAAgYg0QgXgxAAgNQAAgfApgnQAnghAAgFQgLhTAAgLQAAghAngmQAogoAlAAIAIAIQAKAJAKAEIADgIIAFgQIABgFQAGg9AwgTQAPgGBSgKIAGAAQAKAAAWAHIAgASQAZAOAGAAQADAAAUgQQAVgQAZAAQAqAAAdAcQATASAsA5IAjgSQAYgNARAAQAhAAAdAdQAcAbAAAbQAAAKgfAzQAAACAUAdQAVAdgBAIQABAtgUAXIg7AzQAiASARAkQAJASACAQQAAANgNAUQgTAcgeAEIANAeQAHAOAAAIQAAAsg9AMQgfAGgKAFQgTAKAAAVQAAAMgbAPQgcARgbAAQgEAAgXgHQgWgHgFAAQgEAAgTAZQgaAZgpAAQgIAAgLgOg");
	this.shape_2.setTransform(45.3,42.9);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgDGbIgUgMQgDAAgUALQgVAKgDAAQgKAAgKgGIgLgGQgJgGgMgNIgLgLQgFAAgUAEQgTAEgFAAQgrAAgWgeQgKgPgMgoQgdASgNAAQgTAAgOgQQgQgPgDgXIgJgfQgHgwAAgLQAAgKgMgOIgYgdQglgwAAgpQAAgmALgUQALgTAHgJQAIgJAPgJQASgKALgDQgIgOgFgZQgFgUAAgGQAAg2Aqg8QArg9ApAAQAPAAAaARQAGgfAbghQAqgzBEAAQAtAAAkAUIAoAUQACAAATgPQAUgPAUAAQAQAAAaAHQAWAHAJAFQA1AgAMAYIAEAMQADADAKAAIAagIQAYgJAaAAQAqAAAiAhQAhAhAAAtQAAAXgMAUQgGAKgGAHIASAgQAQAjAAAOQAAAegPAbQgOAYgjAgIABABIgFAAQgEgBAjAgQAiAggCAVQgDAWgMAQQgMATggAOQAGAJAHArQAAAOgIASQgKAVgNAIQgEACgmAMQgkAMgFAFQgoAqgQALQgcASgqAAQgFAAgYgFQgYgFgFAAQgDAAgYASQgdASgUAAQgMAAgTgMg");
	this.shape_3.setTransform(45.5,42.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,90.8,84.8);


(lib.girl134poof1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231818").s().p("AAAABIABgBIgBABg");
	this.shape.setTransform(50,80.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgxEWIAAgEQAAAAAAgBQAAAAABAAQAAAAAAgBQAAAAAAAAIACgCQABgBAFAAQAEAAALAEQALADAEAAQAMAAAfgYQAYgTAAAOQAAALgMARQgQAWgbAAQgzAAAAgTgAjJDYQgagLAAgNQAAgRARANQAcAVAQAAIAmgDQAigCAIAAIgOAMQgSALgbAAQgeAAgagLgAkjBLQgQgCgOgQQgNgOAAgJQAAgMAHgUQAJgaAPAAIAIABIABgBIAAAFQAAACgLAPQgLAMAAANQAAAKAOARQAPASAAADIgBAFIgDgBgADiA6IAKgTQAKgRAAgLQAAgHgIgJQgHgKAAgEIABgFIAAgDQAVACAIANQAEAIAAANQAAASgHALQgIAMgWAPIAAAAQgCAAAAgHgAhFADIgGgXQgBgMADgLQAFgVASgBIABgBIAAAFQAAABgEACQgFADAAADQAAAUAGARQAJAYATAJQgEAJgGAAQgYAAgLgYgAEuiaQgRgaAAADQAAgXAZAUQAZAUAAAbQAAAFgDADIgIAFQgEgEgSgegAj9jfIAAgKQAAgSAdgPQAhgQAgATQgHAHgXAGQgbAHgHAEQgFACgDANQgDALgJAAQgIAAgCgKgABekEQgPgMg0AAIgLgCQgBgBAAgHQAAgWA5ANQA5AMAAAcQAAAFgCACIgBADQgMgCgUgRg");
	this.shape_1.setTransform(47.7,46.7);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241818").s().p("ABJGCQgKgRgIAAQgFAAgQAEQgSAEgFABQg4AAgLhIQgEACgDAHIgIAKQgHACgQAAQgMAAgKgCIgGgBIgEgCQgOgLgLgUQgJgRAAgKIAAAAIAIgXIADgMIAAgCIAAgFIgCgBIAAAAIgCgBIgKgBIgyARQgdAAgIg2QgBgIAAg4QABgFAEgHIAFgJQgIgEgKgQIgBgBQgHgMgIgRQgUgsAAgiIgCgUQAAgMAHAAIADgDQAEgKAWgSQAVgRAHgDIAJgCQARgLAEgPQABgFgBgRQgFg5AjgtIAHgIQAmgqA2gFIAQgBQAEAAAHAFQALAHADANQAKgeAOgVQAPgYAXgOQAdgQAmAAQAJAAAEAEIAAAAIgGAAQgsABgXA1QgRAmAAAtQhMgMgjAoQgWAYAAAhQAAAFAEASQAEASAAAEQAAAGgOAJQgTAMgFAGQgNAOgMApQAAAtAPABQAPACAAAaQAAAGgIAEQgJAEAAAPQAAAdAfAXQAeAZAAADIgIATQgJATABAFQAAAgAZALIAjAGQAfAFADADQAMALAMAmQAKAdAUAAQAKAAAbgKQAbgLAUAAQAPAAALAOQAWAcAGAGQAUAUAoAEQA3AGAHADQgMAGgiAIIhHgYQgBAAgTASQgTARgvAAQgKAAgLgRgAiCEZQABABABABQAAAAAAAAQgBgBAAgBQgBgCgCgCg");
	this.shape_2.setTransform(32.1,43.1);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#302121").s().p("AhEGCQgKgRgIAAQgFAAgQAEQgSAEgFABQg6AAgLhIQgEACgDAHIgIAKQgIACgRAAIgUgBIAAgBIgGgBIgEgCQgOgLgLgUQgJgRAAgKIAAAAIAIgXIADgMIAAgCIAAgFIgCgBIAAAAIgCgBIgKgBIgyARQgdAAgIg2QgBgIAAg4QABgFAEgHIAFgJQgIgEgKgQIgBgBQgHgMgIgRQgUgsAAgiIgCgUQAAgMAHAAIADgDQAEgKAWgSQAVgRAHgDIAJgCQARgLAEgPQABgFgBgRQgFg5AjgtIAHgIQAmgqA2gFIAQgBQAEAAAHAFQALAHADANQAKgeAOgVQARgYAXgOQAdgQAmAAQAJAAAEAEIAAAAIAFAAIAWACQAYAFAXAPIALAJIADACQAlAdAIAAIAAAAIARgMQATgMAIAAQAoAAAfAYQArAhAZBHQACAAAOgJQASgLAdABIANABIADAAIAAAAQAVAFAWAQQALAJAIAKIAAAAIAFAHIAHANQADALAAAMQABAHgWAfIgWAfIAPAcQAOAdAAAKQAAAogmAdQguAcgOAOQAvAxAAAnQAAASgVAXQgXAdgdgHQAMAcAAANQgBAxhEAHQgmAEgJADQgVAHAAATIgEAEIgEADIgPAKQgMAGgiAIIhHgYQgBAAgTASQgRARgvAAQgKAAgLgRg");
	this.shape_3.setTransform(46.4,43.1);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhKGbIgcgSQgnANgMgCIgMgDIgXgSQgJgQgDgEQgFgEgkgEQgvgFgWgcQgRgYgBgrIgVAIIgMADQgdAAgOgaQgOgYAAgtIADg7QABgQgMgOQgLgOgOgtQgNgoAAgRQAAgUANgaQAOgaAPgLQAPgLAGgGQASgGAUgBIgFgUQgDgRAAgHQAAg8Axg6QAvg5AsgBQAuAAAHAYIADgCQAHgBAXgtQAkgqBMAAQAlAAAxAgQAYAPAUAPQAJAAARgKQAQgLAHAAQApAAAqAhQASAOAYAmQAUAgAIAAIAugDQAggBAWAHQBCASAABYQAAAWgRAaIgSAXIAXA5QAAAqgTAbQgNARg1AqIAEAEIgCAAQgIABAiAmIANAfQAAAngVARQgeAOgQAKQAGA9gXAeQgZAehCAAQgRABgjAaQgiAcgnAAQgQgBgYgKQgZgLgTAAQgHAAgTAMQgWAMgGAAQgOAAgfgRgAkEFIIgBgBIgFgBIAGACgAGnjQIAFAHIgFgHgAFpj4IAAAAIgDAAIADAAg");
	this.shape_4.setTransform(46.5,42.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,93.1,85.7);


(lib.girl134nose = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B5252").s().p("Ag1AbQAAgNAlgIQAngHAIgNIAKgOIADACQAKAJAAAJQAAAJg2APIg1ANIAAgCg");
	this.shape.setTransform(6,6.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyA0QgLgCgEgDIgDgHIAEgCIABgCQAAgNAlgIQAngJAIgLIAJgOQgOgKgZAAQgfgBgFAGIgOABIgIACIgCgGQABgRAVgGQAVgGAaAEQAgAEARAMIACABQATAOAAAVQgBAMggAUQgkAXgcAAQgKAAgNgDg");
	this.shape_1.setTransform(7,5.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,14,11.1);


(lib.girl134legR = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().p("AgLBdIgEgkIgFgsQgCgNgDgKIgBgGIgCgOQgBgMgMgnQgBgDAEgDQAFgEAIAAQAWgCARANQANAJAEAHQADAGAFAcIABABIgBAAIgBADIgBAFIACAIIAAAGIAAABIACASIAAA6IABAXg");
	this.shape.setTransform(6.2,5.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AggBmIgDgiIgEgnIgCgMIAAgFQgEgDgBgGIgCgMQgDgWgFgPQgFgPgBgMQgDgSAdgIQAggIAeAWQAVAOAEALIgBAAQACACADAXIABAMIACAEIgBADIAAAEIABAMIgBAAIADARQABAOAAAZIgBADIABARIADAag");
	this.shape_1.setTransform(6.3,4.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,-5.5,12.9,20.6);


(lib.girl134legL = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#996666").s().p("AgOBvQgIgPgCgbQAChJgFgaIgIgjQgDgSAAgSQAAgHACAAIABgCQAtACAQARQAOAMAAAdIgCArQAABggEAWg");
	this.shape.setTransform(35.7,20.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgnB5IAAgWQAAhTgKgsQgKguAAgSQAAgNAPgIQANgHARAAQAmAAAWAgQAVAggLAnQAAA2ABBUg");
	this.shape_1.setTransform(35.7,19.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(29.7,7.2,12.1,24.4);


(lib.girl134head = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AE3784").s().p("AjdF0IgBgIIgEgnIAAgEQgBgoADgnQALAhAPAjQAUAwAaArIAAAGIgCAtIABASQgqg1gagtgAjbDUIgCAAQAGhCAQhBIAOg3IARgvQAmhzA1hKQBQh5B0hMIAHgFIAcgRQAigUAngUQhqA8gpAoQgsArgoA2QgoA1gaAvQgtBUgHAPQgdA6gKAnQgPBCgCAiQAAAIgCAQIgDAZQgDAigXAEIgEABIgGAAg");
	this.shape.setTransform(33,59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7B5252").s().p("AEtFYIgTgbIg1hKIgQgUIABAAIgGgGQgXgZgXgXQhMhLhWg9QhyhNhxhWIgkgcIgKgIIgMgKIgBgBIgDgCIgDgCIgKgIIgJgIQgfgagSgVIgcgYIgKgKQgSgHgIggIAAAAQgBgSABgkQA0BKBKA6QCCBoCTByQCRBwAkAeQAkAeA5BPIACADQAKAVAVAbQAwA+BDAKIAFACIAUAHQgUAKgXAAQgvAAgjgcg");
	this.shape_1.setTransform(62.3,140.1);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC419B").s().p("Ao5GmIgBgIIgEgoIAAgEQgBgnADgoIACgdQAHhDAQhAIAOg4IARgwQAmhxA1hKQBSh5B0hMIAHgFIAcgRQAigVAngTQA0gZA9gXIAZgKIAOgGIAUgFIAEgCQAfgKAYgCIAUgHIgBAAQBNgJCcAAQAPAAAYAEQgFABBCAKIABABQANgGAlATQAvAYALAOIADADQgDAFgIAAQgFAAgIgDIAAAAQgBACgFAAIgggLIgCABQgMAAgSgGQgVAGgyAGQhjAKgVADQh4AUgmALIiUAsIhlAeQhdBAhKBaQgzA+gmBGQgSAbgcBEQgdBFgaCCIgaDCIgBAHIAAAGIgCAtIABARQgqg0gagtg");
	this.shape_2.setTransform(67.8,54.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#302121").s().p("AiuEFIgIgTIgIgUIAFgDQAIAeAHAVIgEgJgAAABZQAfhrA6hzQAWgmAdgmQAWgeAdgeIAAAFQAAAQgEAgQgDAeAAAPQAAAugRBGQgRBEgUAkIgeA5QgSAhgTAXQgaAigrArIgcAaQALhYAXhYg");
	this.shape_3.setTransform(24.2,62.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996666").s().p("AgXNOIgTgbIg1hKIgQgUIAAgBIgGgGQgWgYgXgXQhMhMhXg8Qh0hQhwhVIglgdIgJgIIgMgJIgBgBIgDgCIgDgDIgKgIIgJgIQgfgagTgVIgbgXIgKgLQgTgGgHggIAAgBQgCgSACgjIAAgBQABglAEg3IADgdIADAAQCDhUBEiuQA1iKAAiPQAAgXgDgMQAzgwBCguQArgeArgXIhlAeQhcBAhKBaQg0A+glBGQgSAbgdBGQgcBFgaCCIgbDAIAAAHIAAAGIgCAtIAAARQgqg0gagtIgBgIIgEgoIAAgEQAAglADgoIACgdQAHhDAPhAIAPg4IAQgwQAnhzA0hKQBTh5BzhMIAIgFIAbgRQAigVAogTQA0gZA9gXIAagKIAPgGIAUgFIAEgCQAfgKAXgCIAUgHIAAAAQBNgJCZAAQAPAAAYAEQgEABBBAKIACABQANgGAlATQAuAYAMAOIAUAFIAfAIQBVAZA2AfQBDAnBHBbIgGgFQAbAiATAiQASAZAKAVIAtBEIAPAaIAPATIAIASIAAABIABABIABACIAGALIAGAKQAzBpABB1QAAB8g6BvQgOAbgTAZIgIAJIgZAeIgCADIAGgHIgDAEIgbAjQgOAPgtAoQgsAngYARQgYAQg9A3IiwCcQgtAsgeAqIgZAeQgIAHgIALQgOASgFAMQgBADAAAUIgOAfIgBACIgBABIAAABQgSAhgWASQgJAGgJAEQgTAKgYAAQgvAAgggbg");
	this.shape_4.setTransform(94.9,90);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#261A1A").s().p("AkRG3IgGgLIgEgKIAAgBQgIgUgIgfIgFADIgIgZIgEgNIgBgIIgDgQIAFgCQgGgKgDgMQgEgLAJgEIgBAAIgBgCIAAgBIAAgGIgDgfIgDgYQAAgdAEgYIADgbIgBgEIADgIQAGgqANgwQAWhQAeg9IALgXQAdgtAngoQAhgkAngdQA4glAxgbQBVgsAZAJQBHgXAvgKIAMgDQAigGAtgHQgUAGgOAGIgDABQgUAFgVAIQgzATg5AhQi2BqhTCGQhTCDgiCLQgdBlgFBoQgBAbABAbIABAiIAAgCg");
	this.shape_5.setTransform(35.6,47.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.192)").s().p("AgEACIAMgEIABgBIgFADQgEADgIABIAEgCg");
	this.shape_6.setTransform(106.8,179.4);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgINjIgLgPQgKgLgKgPQgkg5gHgKQgMgPgyg2IgGgHIgWgSQhshZhwhQQh4hUhuhfIg6g3QhdhYg2hUQg2hWgNhNIgEgMQgLguAAhLIgDghQAAhWAchfQAkh6BKheQCqjbFIgVIAEgBIAbgDIAJgBQAugBAzgKIA3gEIAkgDIAIgBIADAAQAlgDAmACIAWAAIAAgBIABABQA4gBAsAEQCBAZBBAaQAtARgCAGIA6AZQAxAUAQALQBEAuAhAZQBFA2AXApQAvBUBFBjIABAAIACAGIAFAHQAeAzAMA3QAuB0gRB7QgQB4hABpQgMAVgNASQgjAzgkAgQgaAYgrAgIhwBZQg3Avg/A8QgZASgtAsQg8A6gYAeIgFAGIgLATIgFALIgCgBIgCADIADAAIgBABIgGAJIgBADQgHAmgNAeQgZA3gqAYIgFAEQgGAEgIAAQgYAJgcAAQhEAAgggkg");
	this.shape_7.setTransform(91.4,90.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,182.8,180.7);


(lib.girl134hairfr = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Aj4CcQgWgOAAgNQAAgLANAIQAHAEAHAHQAMAFAHAGQAHADAhAAQAXAAAQgGQAOgGAIABQgDAMgOAJQgRALgbAAQgnAAgZgQgAAqCIIACgDQABgCAEAAIASAEIASADQAmAAARgUQAPgSAGABIABAAQABAAAAABQAAAAAAABQAAAAAAABQAAABAAABQAAASgQAPQgVASgiAAQgxAAgBgVgAo7B+IgRgRQAAgRAXAMQAiARAPAAIAXgEIAcgEIABABIABAFQAAAHgOAIQgRAJgYAAQgdAAgYgRgAFRCBQgHgBAAgGQAAgNASABIAYABQAHgEAFgIIAGgKQAEgEAUAJQAbANAxgFIADABQABAAAAAAQAAAAAAABQAAAAAAABQAAABAAABQAAAEgKADQgOAFgcAAQgFAAgNgFQgRgHgFgHQgEALgFAHQgJANgOAAQgZAAgIgCgAI+A3IAAgHQAAgggigSQgjgQAAgEQAAgbAqAfQAqAdAAAiQAAAGgDAMIgHADQgEgEgBgHgAnFgJIgDgCQgCgFAAgGQAAgpBDgUQAagIAUACQAVACAAAMQAAALgQgCQgUgEgJAAQgoAAgTAfIgLAVQgFAKgEAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgAA4gzIgCgKQAAgXAggZQAlgcAhAZQgFACgIAAQgnAAgSAcQgMAQAAAPQAAAGgBAAIgCACIgFABQgHAAgDgJgAFlhkQgGgKgEgEQgWgXgXAGIgNADQgEABAAgHQAAgPArACQAWAAAOAVQAMAQAAAMQAAAEgDAEIgGAFIgKgPgAh+h6QgMgRgTAAQgXAAgGAGQgFAGgEAAQgIAAAAgKQAAgIALgGQALgGALAAQATAAAQAHIAUANQAPgRATgJQAbgNAaAKQg2ATgJAIQgGAFAAASQAAALgKAAQgGAAgNgRg");
	this.shape.setTransform(79.4,28.9);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#241818").s().p("AADDpQg3gVALgoIgBgHQgDgBgKAAQgGAAgWAQIgjAYQgdAQgYAJIgiAIQgeAHgHAAQg4AAgjgVQgbgQAAgQQAPgWAAgCIgBgIQgHgCgKAAQgSAQgXAOQgtAdgvgDIgEAAQgeABgNgCIgFgCIgEgCQgTgLgNgWQgPgZAEgQIAKgZQgCACgFAAQADAAAGgGIACgEIgBADQAOgQAZguQAAgFgEgLQgFgLAAgFQAAhVB1gjQAggKA1gJQArgHAFgDQAtghAYgZQAWgQBlghIAAAAQhuA7gkBBQgIAQgIAUQgHANgNAAQgPAAgZAmQgZAjAAATQAAAPAlAIQAkAIAAAKQAAAKgFALQgrAHgKAAQgMAAgSgIQgZgKgMgDQgEADgCAHQAIAQAVAJQAUAJAVAAQAjgGAKgGIgEAMQgCAHAAAGIAAAKQACALAFAJQASAcA3AAQAVAABJgaQAVgIALgPQAHgLAPAAQAVAAAjAZQAgAZBAAAQBDAAA1gaQA0gaAyAAQAHAABCAdQBCAdAPAAQAwAAAVgFQASgFA2gbIAGgEQgUAegzATQg1AUhDAAQgwAAgigcQgYgdgEAAIgRABQAEAhgfAaQgtAmhuAAQg1AAgpgOg");
	this.shape_1.setTransform(62.1,32.1);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#241818").s().p("AACABIgEgCIADABQAAAAABAAQAAABABAAQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_2.setTransform(56.6,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#302121").s().p("Ah9ECQg5gVALgoIgBgHQgDgBgKAAQgGAAgWAQIgjAYQgdAQgYAJIgiAIQgeAHgHAAQg4AAgjgVQgbgQAAgQQAPgWAAgCIgBgIQgHgCgKAAQgSAQgXAOQgtAdgvgDIgEAAQgeABgNgCIgLgFIACABQgTgLgNgWQgPgZAEgQIAKgZQgCACgFAAQADAAAGgGIACgEIgBADQAOgQAZguQAAgFgEgLQgFgLAAgFQAAhVB1gjQAggKA1gJQArgHAFgDQAtghAYgZQAWgQBlghIAAAAIAKgBIATgBQAXAABzAZQAEAAAHgHQAZgiAmgDQAJABgOgGIAcgBIBGAGIAsAEIAlgQQAmgRAJAAIAeAIQAdAIADACIASAKQAEABASAAQAUAAAeANQAZALAHAGQALALARAWQACACAQAAQAFAAApAPQAuAPAQALQAJAGAMAWQAMAXgEAMQA+AZApAkQAjAdAAASQAAAKgNAIQgPAIgEAHQAAAagEAOQgFAWgPANQggAchLAAQgeAAgXgKQgKgFgNgJIgGgEIgPATQgUAegzATQg1AUhDAAQgwAAgigcQgYgdgEAAIgRABQAEAhgfAaQgtAmhsAAQg1AAgpgOgAi0CNQAAAAABAAQAAAAAAgBQgBAAAAAAQgBgBgBgBIgEgBIAGAEg");
	this.shape_3.setTransform(75.1,29.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhyEeQgsgPghgpQgoAWg6AVQg8AWgbAAQhOAAgcgjIgPgXQgHgLgJAAQgUAJgZAIQgyARgdAAQhuAAAAiAQAAgOAegiQARgPAAgFQgIgbABgXQADgsAygkQA0glAhgOQAqgQA4gBQASABALgKQAegbAZgRIAvgfQA8ggBIAAIAsADQAYAEAfAIQAZAGAEAAQAGAAAOgKQAIgGAIgFQBAggBMAQIAXAFQACAAAegSQAkgSAjAAQAFAAAUAEIAUAFIANACQALACAGAEQAGAEA3AOQA3ANAPAOIAVATQANAKARABQAUAAAbAKQAdAMASAQQAIAHAWAiQALAdArAUQArATAbApQAaAngGATQgGASgOASQgOASgIArQg1A+hXAAQgiAAgTgKQgSgJgEgBQgMABgNAMQgPAQgLAJQgsAmhXAAQhEAAgggTIgSgNQgJgGgIgBQgGAAgMANQgRATgMAJQg1AohggBQg5AAgigLgAjujfIAAAAIAKgBg");
	this.shape_4.setTransform(74.9,29.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,149.8,59.6);


(lib.girl134eyeR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AAmB2Qg0gBgVg1QgKgegBgnQABgyAdgfQAZgcAmgDIgLAMQgVAYgIAWIgGAgQgCAbgBAGQAAApAYAnIAVAgIgDAAIgCAAg");
	this.shape.setTransform(8.4,20.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C7C9").s().p("AAmBPQg0gBgUgwQgLgaAAgjQABgbAKgUIAFABQAQABAQACIgBAFQgDAdAAAGQAAAnAYAnIAXAjIgFAAg");
	this.shape_1.setTransform(8.3,24.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIB2Qg2gBgUg1QgLgeAAgnQABgyAdgfQAbgcAkgDIABAAQAOAAANADIACgBQATADALAMQAQAQAIAVIgBAAQAAADADADIABAAQAGASABAVIAAACIAAACIgBACIABACIgDAPIAAABQgBABAAAAQAAABAAAAQgBABAAAAQAAAAAAAAIABAGQgEARgIATIgBACIgHANIgMAVQgZAdgjACIgDAAIgDAAg");
	this.shape_2.setTransform(13.1,20.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHBPQg2gBgVgwQgKgagBgjQABgbAKgUIAFABQARABARACQA+AJBHAgIAEAAIgCAMIgBABQAAABgBABQAAAAAAABQAAAAgBAAQAAAAAAAAIACAFQgFAOgIARIgBABIgHAMIgMATQgVAXgeAEIgHABIgFAAg");
	this.shape_3.setTransform(13.1,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996666").s().p("AhSgBIAJgKQAbgZAmgCIAGAAQAKAAAJACIACgBQATADAMALQAPAOAJARIgBAAQAAADADACIAAABQAFAMACANQhXgnhOgBg");
	this.shape_4.setTransform(14.2,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgzCtQhJgBgXhHQgKgfABgzQABg/AkgmQAhgiAwgBQAMAAAMACIAIACQAHACAIAEIADADIAQALIAFgCQAUgFAHgLQAPgYACgHQAJgmAIAKQAGAJAAATQAAAOgPAZQgRAagUAFQAHALAHAPQAngbAGgLIATgmQAMgTAAAdQAAATgQAcQgVAkghAEQADAKABAMIABAIIAFgBQAfgEAQgMQAEgDAPgXQANgRAAAWQAAAUgQAQQgXAZgtABIAAAJQAAAZgPAeIgDAHIgDAEQgiBFhDAAIgCAAg");
	this.shape_5.setTransform(17.2,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA2AdQgQgagEgPQgMANgZAHQgRAEgSAAQgjAAgUgMQgTgNgOggIAHgEQAZAgArAAQAsAAAWgUIAOgOQAHgGAKAAIAhAMQAjANANAEIgFAEQgKAEgRAAIgTgFIANAKQAbASACAIIgBAAQACAAAAAAQABABgBAAQAAAAgCAAQgBAAgDAAQgOAAgPgFQgbgHgNgWQgEAEAUAkQAUAjADACQgBACgEABQgIgDgQgag");
	this.shape_6.setTransform(15.5,33.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAcApQgXgWgDgHIAEgDQgeAJgrAAQgogGgJAAQgRAAABgQQAygpBEgSIACAFQAAADgXATQgWASgHAEIgIAGQAIACAJAAQAcAAAVgCQAEABA6gTIAEgCQAPAGAcAAQAQAAAOgDQgTAZglAAQgXAAgOgEIgJAEQAgANAGAAQAKAAAugIIgNAPQgRANgZAAIg8gZIAAAAIAbAXQASAQAYAJQgCAIgNAAQgLAAgZgXg");
	this.shape_7.setTransform(12.8,35.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABHBAQgHgDgOgVQgNgVgCgHIgFgPQgDgKgLgMQgLgMgegGQgfgHgjARIgkAQIADgJQBXhMBOBCIAHAAQAeANAgAHIAQAEIACAEIgFADQgXAIgXgHIAYAPQAMAKAFALQgSACgPgIQgXgMgRgPIAjBFIgJgEg");
	this.shape_8.setTransform(15.4,31.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgzCbQhJAAgXhBQgKgbABguIAAgFQABgMACgLIAKgdQAJgTAPgOQAhgeAwgBQAMgBALACIABAAIAIACIAPAFIADADIAQAKIAFgCQAUgEAHgKQAPgVACgHQAJgiAIAJQAGAIAAARQAAANgPAWQgRAYgUAEQAHAKAHANQAngYAGgKIATgiQAMgRAAAaQAAARgQAZQgVAgghAEQADAJABALIABAHIAFgBQAfgEAQgKQAEgDAPgVQANgPAAAUQAAARgQAPQgXAWgtABIAAAIQAAAWgPAcIgDAGIgDAEQgiA9hDAAIgCAAg");
	this.shape_9.setTransform(17.2,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5}]}).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.4,31.6,34.7);


(lib.girl134eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("Ag7BRQgJgcgCguIAAgLQgBg9AggqQAfgsAiABQAjAAAKAGIgJAGQgvAjgUA6QgRArAAAjQAAAdAOAjQAMAhAUAVQg+gDgVhDg");
	this.shape.setTransform(18.2,28);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C7C9").s().p("AgnAQQgLgaACg2IAAgEIAAgFIAEgBQAagKAYgHIgBAFQgFAfAAATQAAApAZAuIAYApQhCgNgWg/g");
	this.shape_1.setTransform(16,34.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AgnAQQgLgaACg2IAAgEIAAgFIABAAIADgBQAagKAYgHIgBAFQgFAfAAATQAAApAZAuIAYApQhCgNgWg/g");
	this.shape_2.setTransform(16,34.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ah6BgQgVglAChJQAChSAsgjQAagUAjgBQARgBARAEQA4ALApArQAtAvAAA3QAABFgrAoQgoAlg9AAIAAAAQhZAAgfg5g");
	this.shape_3.setTransform(25.8,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBkIgDAAIgRgBIgOgCQhEgNgWg+QgLgaACg3IAAgEIAAgFIAEgBQAagKAagHIAEgBQBngaBjAcQADABAEgCIAAAAIAFAKQAOAbgBAfQAAALgCAIQgFAXgMATQgmA5hfAAIgCAAg");
	this.shape_4.setTransform(25.5,33.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKBkIgDAAIgRgBIgOgCQhEgNgWg+QgLgaACg3IAAgEIAAgFIABAAIADAAQAagLAagGQBogcBmAcIAEAAIADAAIAFAJQAOAbgBAfQAAALgCAIQgFAWgMATQgmA6hfAAIgCAAg");
	this.shape_5.setTransform(25.5,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhVCyQgvg8AUh0QgrABgdgYQgWgUgSgrIABgEQASANAiAgQAgAZAhgDIAIgYQhBgQgciPIAlBBQAiA4AhAQQAMgSAOgPQgcgVgMgmQgKgtgGgWIADgHQALAHAbA3QAZAzAIAAQAIgBAYgEQAVgFAPAAQAPgBAiAGQAhAFAPAKQAxATAdA5QAZAuAAAvQAABCgjAuQgtA8hdADIgIAAQhVAAgsg4g");
	this.shape_6.setTransform(20.2,23.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah7A2QATgGAKgcQAIgUAAgSQgEgDgHAIIgRAQQgMAMgyAYIgFgFIgIgGQAKgQAhgNQAjgOAKgRQADgDgRAGQgaAKgXAAQgIAAgMgCQgNgCAAgCIALgGQAGgFAlgKQAigKAEAAQABAAAwAeQAaAOA5ABQAtAAAxgMQAygMAQgRIAMAMQgKAOgrATQg8AYhFAAQgMAAgcgIQgggJgOgFQgGAughAQg");
	this.shape_7.setTransform(21.4,44.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAvA+QgbgKgSgKIAFgDQALABAmAHQAvAKAPAIQAAACgEAEQgLACgKAAQgPAAgfgLgAibAtQAWgMAVgSQAUgQAMgSIgIgFQgWAUgcANQgWAMgFAAQgEAAgMgEQgNgFgJgGIAJgCQAPgBAjgOQAcgOAMgJQgiAAgHgBQgPgCg9gUQACgBAHgJQAGgGALACQAJACASAJQAWAIAgAAQAIAABMAdQBKAbBaAAIAcgBQg8gvgFgMIACgIIACgBQABgBAGAAQAHAAA2AqQA1AnAAADQAAAfhwgMQhugLhAgiQgIAUgYAUQgYATgUAAQgJAAgGgGg");
	this.shape_8.setTransform(20.8,42.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiQBHQAhgRAMggIAKgYIgEgCIACgBIgBgBQgdAvg3AOIgNgLQACgFAEgEQAMgKAOgEQAhgMAVgWIgEgDQgoASgsgHIgGgEQAXgQAegFQAVgDAbgBIAmgRQBdgiBfAYQAnALAeAbIgJAMQhEgkhCADQhBACgeAMIgHACIgHADQgEADgDAEIgNADIANgDQgIAIgEAPQgGAYgSASQgSARgZAIg");
	this.shape_9.setTransform(21.4,42.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AArDNQhPgBgtg3QgmgtACg4QAAgYAFgVIgLABQgpAAgigkQgbgdAAgMIABgEQAQAIAbAcQAcAWAuACQAEgMAFgKQgogHgdg6QgZgvAAgcIADAAIAsBCQAXAkAiATQAMgRAPgMQgHgEgGgGQgSgLgNglIgNg2IADgFIAHAAQAIANASAmQARAdAUAQIAJADQAUgJAUgDIANAAIAXgBIAOABIAFABQBDALAxAxQA0A0gCBBQgBAugcAlQgvA9hmAAIgEAAgAgphOQgUAMgLASIgEAGQgIAOgDASIAAABIAAABQAbgLAbgGQBkgaBiAYIgKgKQgogog6gNQgUgEgSAAQghAAgbAQg");
	this.shape_10.setTransform(20.2,26);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AArDNQhPgBgtg3QgmgtACg4QAAgYAFgVIgLABQgpAAgigkQgbgdAAgMIABgEQAQAIAbAcQAcAWAuACQAEgMAFgKQgogHgdg6QgZgvAAgcIADAAIAsBCQAXAkAiATQAMgRAPgMQgHgEgGgGQgSgLgNglIgNg2IADgFIAHAAQAIANASAmQARAdAUAQIAJADQAUgJAUgDIANAAIAXgBIAOABIAFABQBDALAxAxQA0A0gCBBQgBAugcAlQgvA9hmAAIgEAAgAgphOQgUAMgLASIgEAGQgIAOgDASIAAABQCBgwB7AeIgKgKQgogog6gNQgUgEgSAAQghAAgbAQg");
	this.shape_11.setTransform(20.2,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.3,0,45.2,46.9);


(lib.girl134earL = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAXQAAgMAQgMQAIgJAMgGQgOgMgcgMQgZgLgEAAQgGAAgHADIgLAEQgFgcAaAAQAsAAAsAjQA1AlAAAwQAAAGgBABIgCAAQgEAAgTgbQgLgNgFgLQgDgEgFAAQgJAAgMAIQgMAJAAAIQAAARAIAJQAMALABAGIgEAEIgIABQgdAAAAgyg");
	this.shape.setTransform(14.3,22);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#624141").s().p("AgUBAQg+gsAAhaQAAgWAaAEQAXAEAhAVQBTA2AAArQAAAZgNAQQgMAPgPAAQgigEgdgWg");
	this.shape_1.setTransform(14.2,24.6);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#996666").s().p("AhkBTQggg+AAg0QAAg4AYgqQAZgrAiAAQAjAAAcAYQANALAnAtQARAXAeAaQAVAhgBA1QgCA2ghAmQgiAmgiAAQhTAAgvhag");
	this.shape_2.setTransform(15.9,21.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AArDMQhRAAg1hJQgxhEAAhcQAAhWAeguQAcgqAtAAQBpAAAtCAQAcBNAABjQAAAPgRAfQgRAfgOAHIgYANQgKAGgPAAIgBAAg");
	this.shape_3.setTransform(14.2,21.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1,29.3,40.9);


(lib.girl134collar = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5763C0").s().p("AgVAlQgigXAAgmQAAgOAMgXQARAVAKAIQAaAWApAKIgHAZQADAOAJAXQgxgDgcgWg");
	this.shape.setTransform(7.8,7.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6978F3").s().p("AiaApQgxgXAAguQAAgJAJgbIACgBQAiAtA1APQAsALBhAAQA5AAAbgGQAXgFAwgYIAJAZQAEANAAADQAAAUgoAPQg0AShmAAQhwAAg0gYg");
	this.shape_1.setTransform(22.7,8.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AijA4Qg+gdAAgkQAAhMAkAAQADAAAbAUQAcAVAGADQAgAMAiAFQAmAFA9AAQBEAAAtgXQAYgMASgRQATATALA5QAAAigeASQg1AdiOAAQhjAAhAgeg");
	this.shape_2.setTransform(22.6,8.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.2,17.4);


(lib.girl134armRgmcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AguA+QgjgmAAgYQAAgEACgEIAFgKQAug9gBgUQAVADAlAUQA1AbAAAVQgBAWggA2QggA4ABgRIAAABIgBAIIgBADQgBABgHAAQgTAAgjgmg");
	this.shape.setTransform(1,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2E95A").s().p("AAgDjQgigTgVAAQAEgQAEgdQAEgbAAgJQgNiEgFgUQgOgwgBgBQgDgCgJADIgFgJIAAgCIgBAAQgGgJgLgLIgHgaQgPg8AAg0QAAgOAFgJIAGgKQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQAEABAAAGIgBAFIA2A+IAAAAQAqA6AcAvQANAXAQApQAVAyAEAjIAAAAQADAAACAmIACAuQAABJgNBGQgQgdgpgWgAg3g/IAAgDIACAJIAAAFIgCgLg");
	this.shape_1.setTransform(0.9,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2E95A").s().p("AghBkIAAAAQhWgLhKgnIgdgRQBTgkAJhjQCUBSBrgIIAUgBQAagDAcgOIADADIATAEIAAACIACAtQgJA0hKAXQhAAUg/AAQgWAAgYgDg");
	this.shape_2.setTransform(-23.7,-18.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6978F3").s().p("AhGAtIgTgOQACAEAAACQABABAAABQABAAgBgBQgBgBgBgDIgBgDQgCgFAAgGIACgFIACgFQAAgEARgYQAQgbAAgFQAAgCAPgXQAOgXAAgBIAAgFIAAAAIACACIgCgCIAQAMIAGAEQA2AlApAYQgHBihVAiQglgaghgig");
	this.shape_3.setTransform(-47.8,-26.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag2E+QgjgmAAgXQAAgHACgEIAFgKIgFgBQgCgBAAgGQAAgGAHgMIAPgZQAJgVAGgUQANgwAAgxQgQi4gKgFIgBgBIgEgJIAAgCIgBAAQgGgJgLgLIgHgaQgPg9AAg0QAAgOAFgIIAGgLQAAgJAJgBQAGAAAAABIAAADIAfAhQBgBmAnBtQAdBVAABwQAAAugMA+QgOBAgSAgQgbAtgGAHQgMAOgNgHIgBADQgBACgHAAQgTAAgjgngAhAiGIAAgCIABAJIABAEIgCgLg");
	this.shape_4.setTransform(1.8,2.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AALCeIAAAAQhXgMhNgpQgXgMgVgPIgBgBQgxghgngrQgDgBABgEQAAgEADgCIADgCQgBgFAAgGIACgFIACgFQAAgEAQgaQARgbAAgFQAAgCAOgXQAOgXAAgBIABgFIgBAAIAAgBQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAEAAIAEgCQAEAAADACQA/ApA3AfIABAAQClBcBTgHIAKAAQAjgDAigHIAAAQIAXAAIAAACIAYAAIABApQgHBAhZAcQhEAVhBAAQgZAAgZgDg");
	this.shape_5.setTransform(-28.6,-22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl134armRgmcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AhRAAQAAgIAHgKIAHgIQAGgHADgBQASggALghQBBAJAmA3IAIAMIgFANIgSAmIAAAAIgNAWIgcAlIAAAAIAAABIAAADIgBAFQgDAEgGAAQgsAAgthkg");
	this.shape.setTransform(1,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2E95A").s().p("AgXDQQAMgsgBgxQgBhkgehUQgBgDgEgCQgDgBgEABIgDACQAGAYAAAMIAAABQAAAKgEAEIgEgDQAAgFgShDQgShBAAgMQAAgEgDgLIgCg2QAAgHAEgKIAHgQIABgDQAGAHAAADIgBADIAbAdIAAAAIAcAhIAAAAIAaAjIAWAiIAAAAIAVAlIABAAQAJARAJATQAIASAHATIAAABQAHASAFARQAFATAEAUIgBAAIAGAqQACAVAAAWIAAAAQAAAXgBAWQgBAXgDAWIAAAAIgGAoIgCANQgqg8hGgLg");
	this.shape_1.setTransform(0.9,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6978F3").s().p("AhLAeIgGgCQgEAAAAgHQAAgJAlgzQAmg1ALgFIAAABQgBAAAAAHQAAAEArAsIArArQAAAdgtAiQgXARgcAQQg8g/gFgFg");
	this.shape_2.setTransform(-53.8,-35.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2E95A").s().p("AhIBdQhegqhDhTQAlgMAfgjQAagdAEgTQBYBOA8AeQA1AYBDAHIBlAsQgWAbgsAWQgtAXggAAQhWAAhNgjg");
	this.shape_3.setTransform(-30.2,-21);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6978F3").s().p("Ag0AKQgfhIAAgYIABgGIAAAAIABACIAAABQgBACAgAAQAfAAAlAHQAmAHARAqQALAaAAAUQAAAwgbAXQg4AEgJADQgOgJgehKg");
	this.shape_4.setTransform(-25.7,-0.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2E95A").s().p("Ah5BfQAHgWAAgPQAAgMgJgiQgLgmgMgRQBMgBA7gNQAhgIAHgJQADgFAGgBIgoADQACAAAAgQIAAgQICBgHQASAYABAuQAAA1hIAwQhPA1h+AJQADgGAFgQg");
	this.shape_5.setTransform(-4.1,-3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A2E95A").s().p("AgiBkIAAAAQhVgLhKgnIgdgRQBSgkAKhjQC9BnBVgdIAAAPIBPgCIAAAMQAAA8hTAaQhBAUg+AAQgXAAgYgDg");
	this.shape_6.setTransform(-23.7,-18.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6978F3").s().p("AhGAtIgTgOQACAEAAACQABABAAABQABAAgBgBQgBgBgBgDIgBgDQgCgFAAgGIACgFIACgFQAAgEARgYQAQgbAAgFQAAgCAPgXQAOgXAAgBIAAgFIAAAAIACACIgCgCIAQAMIAGAEQA2AlApAYQgHBihVAiQglgaghgig");
	this.shape_7.setTransform(-47.8,-26.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6978F3").s().p("AALBfQgJAAgngZIgigWIgCgCIADABIAAAAQAziJAKgFIAEAIIAAABQAHgCAgAdIAkAiQAEAFAAAHQgCANAAAQQgCAXgaAeQgYAbgJAAIAAgBg");
	this.shape_8.setTransform(-20.4,-14.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2E95A").s().p("AgHCrQgOgCgTgGQglgNglgPQAhgRATgrQAPgjgEgWIAyAbIAhAPQAQAHAHAAQAGAAABgCIABgEIhwg9QAAAAAAAAQAAAAAAAAQgBgBAAAAQgBAAgBgBQgCgCAAgGQAAg7ASgzQALgfAPgWQACABABAEIAnBBQA0BZANAaQASAoAAAiQAAAngbAZQgaAYglAAQgUAAgMgDg");
	this.shape_9.setTransform(-5.9,-17.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAMFjQgCgCgBgCQgDAFgGAAQgsAAgthkQAAgKAHgKIgDgCQgDgCgBgDQgBgEACgDQAXgmANgpIABgDQANgugBgyQgBhQgVhIIAAABQAAALgEADIgEgCQAAgGgShCQgShCAAgLQAAgEgDgLIgCg2QAAgIAEgKIAHgPIAAgCQAAgDADgDQACgCAEAAQAEAAACACIAfAjIAAAAIAdAhIAAAAIAZAjIAYAkIABAAIAVAlIAAAAQAKATAJATQAJATAHAUIAAgBQAHATAGAUIAAAAQAFAVADAVIAAAAQAEAVACATQACAXAAAWIAAAAQAAAXgBAYQgBAXgDAXIgGAoQgCARgFAQIAAABIgBABIAAAAIgGASIgTAqIAAAAQgGAMgIALIgdAnQgCADgEAAIgBAAQgDAAgCgCgAAKFXIAAAAIAAAAgAgmkTIAAAAIAAAAg");
	this.shape_10.setTransform(1.8,2.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgfCjQh6g4iHibIgCgHQABgDADgCQAEgDAEAAIgGgCQgDgBgBgGQAAgJAlg1QAng2ANgEIAIgEIAFAEQB5CCA2AlQBEAwBuATIAAAUIBlAsIAXAAQg1A2goAUQggARgoAAQhXAAhGgig");
	this.shape_11.setTransform(-33.6,-26);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AieB+IgBgFIACgGQgOgJgehLQgfhIAAgXIABgHIAAABIAAgFQAAgIACgBQABgBAHAAICJAMIApgCQAlgCATgDQAVgDAIgMQAFgIABgRICUgIQAWgBAMArQADAJAAAKQAABDhGA1QhlBMjUAAQgGAAgCgDg");
	this.shape_12.setTransform(-10.8,-2.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AALCeIgBAAQhXgMhMgpQgXgMgWgPIAAgBQgxghgogrQgCgBAAgEQAAgEADgCIAEgCQgCgFAAgGIACgFIACgFQAAgEARgaQAQgbAAgFQAAgCAPgXQAOgXAAgBIAAgFIAAAAIAAgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIAFAAIAEgCQAEAAADACQA/ApA2AfIACAAQClBcBTgHQAPAAAOgCIABAcIBggDIABAMQACBLhjAfQhDAVhBAAQgaAAgYgDg");
	this.shape_13.setTransform(-28.5,-22);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhSCOQhfgrAAgUQAAgGACgBIADgBIgCgCIADABIAAAAQAziJAKgFIABgFQABgDAHAAQAFAAApAiQAtAkAFADQAAAAAAgBQAAAAAAAAQAAAAgBgBQgBAAAAAAQgDgCAAgGQAAg7AQg0QALgfAPgWIABgBQABgCAGAAQADAAAHAIQALALAPAXIAkA2QAUAhAKAXIAYA2QAMAeAAAVQAAAogVAeQgfAqhAAAQgyAAhegrg");
	this.shape_14.setTransform(-10.3,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl134armRcopygm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AhRAAQAAgIAHgKIAHgIQAGgHADgBQASggALghQBBAJAmA3IAIAMIgFANIgSAmIAAAAIgNAWIgcAlIAAAAIAAABIAAADIgBAFQgDAEgGAAQgsAAgthkg");
	this.shape.setTransform(1,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2E95A").s().p("Ag+AkQAMgqgBgxIAAgMIgBgUIBtgTIADAVIABAIQACAWAAAVIAAAAQAAAXgBAVQgBAWgDAWIAAABIgGAnIgCANQgqg7hGgMg");
	this.shape_1.setTransform(4.8,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6978F3").s().p("AAhA6QABgrgjgjQgcgcgfgLQAUgLAQAFQAIACALAGQAQAFAbAVQAXATAAAEQAAAGgLAZIgSAsg");
	this.shape_2.setTransform(5.6,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2E95A").s().p("AAABXQgsgWgNgBIAGg6QAAgZgLhYIBngQIALAqQAJAiACBKQAAAhgFBAQgIgNgygYg");
	this.shape_3.setTransform(6.2,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996666").s().p("AgaBaQgQgJgHgTQA5AIASgSQgugEgMgDQglgKAAgZIACAAQAPgEApAAQAgAAAFgFQhDgBgWgGQgTgHAAgUQAAgUAjAAIAMACIAAABIAiACQASABAMgDIgHgIIgEAAIgYgFQgQgDgFAAIgHAAIgBgGQACgLAFgGQAFgGAGAAIACAAIgCgBQgCgBASADQAQADAeAWIACgBQAMALALAWQAOAbgCAQIABAAQACAnggAcQgdAYgaAAQgMAAgMgHg");
	this.shape_4.setTransform(-1,30.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6978F3").s().p("AArAOQgNgFgaAAQgKAAgWAHQgaAJgLAKIgHgvQAMgIASgIQAagKAUABQAjAAAPARQAOAPADAhIACALQgNgUgRgFg");
	this.shape_5.setTransform(11.8,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996666").s().p("AgEBeQgFgHAAgLQAAgHAIgSQAFgRAAgTQAAgMgFgPQgJgTgOgLQABAlgJAOQgJAPgVAAQgHABgGgCQgLgEAAgNQAAgFALgRQAOgZAJgdQAEgOAQgJQARgJAmACQAegBASAdIACADQALAWADAoIgDgJIgHgOIgJgPQgCABgBAEQARArAAALQAAAFgQAUIACgLQAAgMgIgZQgJgcgHgEQgGABgBAHQACAKAHATQAFANAAARQAAAZgIAUQgNAegaAAQgEAAgEgHgAgaA5QgBAAAAgGQAAgEAPgTIAAAEIgLAaQAAAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAg");
	this.shape_6.setTransform(11.1,28);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2E95A").s().p("AhSgsICEgWIAWBMQAJAkACANQglgIgTAAQg8ALgNAFg");
	this.shape_7.setTransform(9.2,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACCzQgCgCAAgDQgCAFgGAAQguAAgthkQAAgKAHgKIgEgBQgDgCgBgEQAAgEABgDQAYglANgnIABgEQANgugBgyIAAgKIgBgPICSgYIACAPIABAKQACAWAAAWIAAABQAAAXgBAXQgBAXgDAXIgGAmQgCARgFAQIgBACIAAAAIAAABIgHASIgSApIAAAAQgHAMgHAMIgdAmQgCADgEABIgBAAQgDAAgCgCgAAACmIAAAAIAAAAg");
	this.shape_8.setTransform(2.8,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgjDdQgSgEgQgHQgRgHgFgQQgEgMgMgaQgJgUAAgJQAAgJgFgOQgFgPAAgJQAAgPANgMQAPgOATAGQADgOAFgKQAJgRAQAAQAFAAAHgOQAKgYAAgwIgCgrIgHhBICLgYQAEAOAIA8QAJA+AAAPQAAB1gYAvQgXAugsAuQgJAQgYAMQgPAIgOAAIgJgBg");
	this.shape_9.setTransform(1.7,19.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgiCMQAAgGACgEIAGgLQgKAGgXAGQgPAAgKgIQgLgJAAgSQAAgDAOgXQAOgXAAgLQgCgcgGgnQgMhRgWhGIClgaQA2DdAABCQAAAWgdAxQgjA7gnAAQgMAAgdhFgAgTBwIAOgJIgCgQQgFARgHAIg");
	this.shape_10.setTransform(10.3,19);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl134armRcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AhRAAQAAgIAHgKIAHgIQAGgHADgBQASggALghQBBAJAmA3IAIAMIgFANIgSAmIAAAAIgNAWIgcAlIAAAAIAAABIAAADIgBAFQgDAEgGAAQgsAAgthkg");
	this.shape.setTransform(1,28.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2E95A").s().p("Ag+BAQAMgtgBgvQgBgtgGgqIBogSIABACQAFAUADAUIAAAAIAGApQACAWAAAVIAAABQAAAUgBAXQgBAWgDAXIAAAAIgGAnIgCANQgqg7hGgLg");
	this.shape_1.setTransform(4.8,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6978F3").s().p("AAGAAQgIgTgqglIgIgLQATAFAjAUQAzAcAAAVQAAAGgJARIgVAmQgNg7gEgJg");
	this.shape_2.setTransform(3.9,25.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2E95A").s().p("AgBBsQgjgUgVAAQADgPADgkQAEghAAgHQAAgagIg4QgHgsgDgPIBjgOQAMAeAHAcQANA1AABRQAABYgLAlQgRgdgngWg");
	this.shape_3.setTransform(4.4,7.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996666").s().p("AhFCJQgGgDAAgFQABgEAEgEQAHgIAMAAQAUAAANgDQASgEANgNIAMgMQgPAFgPAEIgtADQgUAAgLgFQgIgEAAgDQAAgWA5gYQA9gaAFgIIAHgEQgSADgOAEQgPAEgwAAQgIAAgGgEQgGgEgFgOQAIgJAtgQQAsgRAJgIIAAgEIgHgGQgGAFAAAFQgCADgUAAQgMAAgPgXQgOgZAGgRIACgMQAEgCAKAAQANAAAPAYQAbAnAWAVQAYAXAKAeQAJAagEAfQgBAOgGAIQgKAPggAVQgXANgcAKQgYAHgTgCIgFABQgFAAgFgEg");
	this.shape_4.setTransform(-4.7,29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AACDRQgCgCAAgDQgCAFgGAAQguAAgthkQAAgKAHgKIgEgBQgDgCgBgEQAAgDABgEQAYglANgnIABgEQANgugBgyQAAgrgHgpICMgZIAAABQAFAUAEAVIAAAAQAEAWACAVQACAWAAAWIAAABQAAAXgBAXQgBAXgDAVIgGAoQgCARgFAQIgBACIAAAAIAAABIgHASIgSApIAAAAQgHAMgHAMIgdAmQgCADgEABIgBAAQgDAAgCgCgAAADEIAAAAIAAAAg");
	this.shape_5.setTransform(2.8,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah0EEQgJgIAAgNQAAgNAKgPQgbgMAAgTIANgYQAAgHAsgPQgVgEgNgPQgNgOAAgMQAAgRAbgKIAlgLQgNgVgFgMQgKgSAAgUQAAgNAMgKQANgLATAAQACAAAOAJQAPAKAFAGQAKgZABg6QAAgTgKhMQgDgqgGAAICHgTQAgA7AAB+QAAC/hVBdQg9BEhYAAQgQAAgJgJg");
	this.shape_6.setTransform(-1.4,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl134armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AgyBAQgbghAAguQAug9gBgVQAUAEAlAUQA1AbAAAWQAAAXgeAxQgeAygDgIIAAAAIgCAIIAAAAQgkAAgbgig");
	this.shape.setTransform(1.4,28.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2E95A").s().p("AAXDWQgigTgVgBQAEgPAEgeQADgbAAgJQgMiDgGgVIgOgwIgBgBIAAAAQgDgBgKADIgBgfQgOgrgKhZQAAgMACgDQAHABAGADIAAgCIAnAtIAAAAQBBBbAdBJQAeBGAAAVIgBAAQAEAAACAmIACAuQAABJgNBGQgQgdgpgWg");
	this.shape_1.setTransform(1.8,-2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6978F3").s().p("AADAcQgSglgsgnIAoglQAuAbARAZQAMATADAgIAAAYIgnAtQgDgfgOgcg");
	this.shape_2.setTransform(0.6,15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996666").s().p("AgmAlQgPgZAAgUQAAgNAFgOQAIgbAVgJQAkAlARAbQAUAfAAAjQAAAHgQADQgLADgMAAQgiAAgTgjg");
	this.shape_3.setTransform(-4.7,19.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2E95A").s().p("ABICnQgTgYgtgbQAdgrAHgPIAPgjQgFgFgXAZQg6g5gkgbQgKgIhCgqQgHAIAEAKIgQggQAvhOALgOQATgWAHgMQCbB4AvBKQAfAvAAA2QAAA3gXAvQgXAvgQATQgHgogSgZg");
	this.shape_4.setTransform(-1,-6.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6978F3").s().p("AAhA+QABgrgjgiQgcgdgfgKQgDgWAZAHQAaAHAOAKQAQAKArAnQAAAEgLAaIgSAtg");
	this.shape_5.setTransform(5.6,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#996666").s().p("AgaBbQgQgJgHgTQA5AIASgSQgugEgMgDQglgKAAgZIACAAQAJgBAnACQAaACATgMQhDgBgWgGQgTgHAAgUQAAgUAjAAIAMABIAAACIAiACQASABAMgDIgHgIIgEAAIgYgFQgQgDgFAAIgHAAIgBgGQACgLAFgGQAFgGAGAAIACAAIgCgCQgCgDAVAFQAXAGAUAUIACgBQAMALALAWQAOAbgCAQIABAAQACAnggAcQgdAYgaAAQgMAAgMgHg");
	this.shape_6.setTransform(-1,30.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A2E95A").s().p("AAkDhQgdgMgLgBQAFgygBgnQAAgmgPg9QgQg7gQgaQgRgZACADIgFACQgmg2gIgfQgDgOAAg7QABgPAEgHQAGgIAQgCIABABIAFANIA5A/IAAAAQAuBAAaAsQAgA8AFAPQAHAQAQA8IAAAAQAGAAAEBWIAAAXQAAAigFBAQghgdgqgSg");
	this.shape_7.setTransform(0.9,-5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6978F3").s().p("AAfALQg2gJgiAaIgIAHIgEgeIAAgBIAAAAIgDgQQAdgUAdgFQAkgFAnAVIABAFIABAHIAKAwQgTgZgXgDg");
	this.shape_8.setTransform(11.8,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996666").s().p("AgHBaIgCgMQAAgGAGgLQADgLAAgHIAEgcQAAgWgLgVQgIgPgDAHIgGgFQgCALgBAeQgHAZggAAQgOAAgGgRQAAgJARgbQARgcAAgNIgBgFIABgCQANgZAyAAQAtAAARAhIgCABIAIAPIADALIAEAGIABAHIAAAWIgDgJQgKgYgGgFIgCABQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABIAIAYQAJAWAAAJQAAAGgQATIACgMQAAgKgIgaQgKghgGAAQgFAAgBAEIgBAEQAAAGAEANIAEANIAGAbQAAATgFARIgGAGIACACIAAABQgMAegeAAQgDAAgEgMgAgbA1QAAgJAMgMIADgDQgBAGgGAQIgEAIQgEgEAAgCg");
	this.shape_9.setTransform(11.1,27.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A2E95A").s().p("AgYBzIgUgqQgvhggQgIIgCAAIAAABIADALIAAABIgBAEIgCABQgLgNgLgnQgKglAAgYIAEgbIAEgeIAEgNQACgIADgHQAEgHAJgGQAFgEACACIAAAAIAhAoIAYAeIASAWQBDBVAvBgQAPAfALAfQAMAhAJAhIAJAsQglgKgmADIgTADIgQAEIgVAIg");
	this.shape_10.setTransform(3.4,-11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2E95A").s().p("AhUBnQg5hFgpg+IgBgCQgCAOgKAAIgBAAQgFAAAAgIIAHgMQAGgMAAgFIACgQQACgKACgFIATgeQARgbAAgEIAAgIQACgDAHgBIAFAAIAAAJQBHBoA9AwQAFgDABAIIADACIgDAEIgLAVIgCAEQACACADAAQACABADgCQANgJANgQIABgBIABgBQAOgQAQgaIAAAAIACgFIADgEIAFAEQAyAlBFAIIABAAIALAAQgTAhgaAfIAAAAQg4BChEAOQgLACgKAAQg0AAgsg3g");
	this.shape_11.setTransform(4.8,-15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6978F3").s().p("AAjA4QgwgGgogXIgbgTIAghAQATAbAcANQAkAQAuAAIgLAZIgLAWIAAAAIgFAKIgTgBg");
	this.shape_12.setTransform(20.5,-21.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996666").s().p("AhPBmQgLgNgEgQIAAgBIAAAAIAAgBQgCgYAJgXQAfgYAYAEIACAAIAIAEIAAAAQAYAPAAANIAAACIAAAQQgXAYgigZQgHgFgHgCIgBAAIgDAEQAAAQAaAKIAUAIQARACAOgKIAGgFIAIgHQADgDgBgEIAAgMIADgBIAKgCQAHASAQALIAEACIgfBAQgQAEgNAAQgvAAgggngAAxAhIALgNIAAAAQAKgMABgWQANACAGAHQAIAHgDARQgGAigWAEQgNgJgFgPgAAAACIAAgBQAAgBAAgFQAAgFAEgIIgDgCQgBgBgEABQgDABgCAEIgFAJIgDgCQAJgVAIgJQAhgLAMAQIAAAAIAIAMQAAAVgHAJIAAAAIgMAOIgOADIgBAAQgEgMgPgMgAg0hbQAjgqARgFIAAAAQAPgFARAIQAKATgHAMIAAAAQgJAPgIAGQgJAGgVAZIAAAAQgKALgMAcQgXgDgcAQQACg3Afgkg");
	this.shape_13.setTransform(26.1,-36.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#A2E95A").s().p("AhpBWQhjg7gagkQgCgCgCgBQgFAFgCAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAIAAgBIgBAAIgBgDQAuhdAVgTIACgBIAAADQBXBgB1AaQgMANgMAMIgBADQAQgFAJgGQAJgIAIgDIAGgGIABgCQAcgmAdg2QAwA/BcgBQgSAggVAcQgwBBhUAZQgaAIgaAAQg8AAhFgog");
	this.shape_14.setTransform(7.1,-17.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6978F3").s().p("AhTgBIAbg5IAFAPIAAAAQANApBGAIIAAAAQAeADAWgLQgNAfgPAdIgOABQhTAAgqg8g");
	this.shape_15.setTransform(27.3,-28.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996666").s().p("AgQCLQg7gIgMgfIAAAAQgEgKgBgKIAAgBQgBgMABgLIAAgCQABgLAEgLQAdgbAYADIACABQAEAAAEADIABAAQAYANABANIAAAAIAAABIAAABIACAQQgXAZgigWIgBgBIgNgGIgBABQgFABAAAEQAAAHAVAOIAEADQApASAbgjQACgDAAgEIgBgMIADgBIAKgDQAJAUATAKQgGAUgIAOQgVAigiAAIgJgBgAAxAgIAKgNQAJgNAAgWQANACAHAGQAHAIgCAQQgEAigVAFQgNgIgGgPgAgPgCIgEgCQAHgWAIgKQAhgNAMAPIAAABIAJALQABAWgHAJIgKAOIgOAEIgBABQgGgRgcgNgAg8hVIAAAAQAhgsASgHIAAAAQAOgGARAIQALASgGAMQgIAPgHAHQgJAGgTAaIgBABQgKAMgKAdQgXgCgbASQgBg3Acgmg");
	this.shape_16.setTransform(32.5,-44);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A2E95A").s().p("Ah3BOQhIghgzgnQgDgCgEAAIAAAAQgDAKgBAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQAAgRAGgUQAIgXALgOQAXgVARgWIAAAAQADgCABAIQBgBQCBALIgGAHIADABIACgCQAFAKAbgdQAZgjAagwQAwBABdgCQghBCg7ArQg/AvhMABIgCAAQhLAAhGghg");
	this.shape_17.setTransform(8.1,-19.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6978F3").s().p("AhTgBIAcg5IAEAPIAAAAQANApBGAIIABAAQAdADAWgLQgNAfgPAdIgOABQhTAAgqg8g");
	this.shape_18.setTransform(29.4,-32.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#996666").s().p("AgQCLQg7gIgMgfIAAAAQgEgKgBgKIAAgBQgBgMABgLIAAgCQABgLAEgLQAdgbAYADIACABQAEAAAEADIABAAQAYANABANIAAABIAAABIACAQQgXAZgigWIgBgBQgHgEgGgCIgCAAQgBAGADADIAfAZQAhAJAXgeQACgDAAgEIgBgMIADgBIAKgDQAJAUAUAKQgHAUgIAOQgVAhgiABIgJgBgAAxAhIAKgOQAJgNAAgWQANACAHAGQAHAIgCAQQgEAigVAFQgNgIgGgOgAgPgCIgEgCQAHgWAIgKQAhgNAMAPIAAABIAJALQABAWgHAJIgKAOIgOAEIgBABQgGgRgcgNgAg8hVIAAAAQAhgsASgHIAAAAQAOgGARAIQALASgGAMQgIAPgHAHQgJAGgTAaIgBABQgKAMgKAdQgXgCgbASQgBg3Acgmg");
	this.shape_19.setTransform(34.6,-47.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A2E95A").s().p("AhgAaQg2gvgegnQgFAAgCACQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIADANIABARIgHAAIgHgmIgFgdQAAgVAKgZQALgcAQgMIAHAHQBJBSCABIQBrA7A5AKIAAAAQgdAjgEAHQgOAXAAAjIACAbQiVg1hrhkg");
	this.shape_20.setTransform(8.7,-11.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6978F3").s().p("AgrA0QgJgJAAgXQAAgPAOgbQARgfATgRIA3AMQgdASgLAXQgHARgBAeQAAAJAFAOIAGATQgtgFgOgPg");
	this.shape_21.setTransform(31.7,1.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#996666").s().p("AhdBLQgZgZAAgkQAAgjAbgXQAOgLARgHQASgNAEgSQACgLAOAAQAJAAAFAJQADAHAAAIQAAAMgKAOIgXgJIgGACIAGAEQAUAVASAHQAKAFAeADQAPACAugCQAMABACASQAAAFgDAGIhjAAQAIgVgFgFIAAADQgDAKgcAcQgbAagIAGIABAAQASAGApgEQAngEAaANIABgBIAAAFQAAAihMAAQg/AAgegegABeBDQgGgFgCgGQAAgFgDgCQgJgEhTgCIANgRIBuABQAHAMgDAPQgDAOgOAAIgHgBg");
	this.shape_22.setTransform(46,2.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6978F3").s().p("AghAoQgXgRgDgJQgCgFgGgJQgFgIgBgFIgCgIIAIgJIAWggQAIAXAQARQAJAKALAIQALAJAQAIIAUAJQAOAEAQABIgfAhIgOADQggAAgggXg");
	this.shape_23.setTransform(27.3,-10);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A2E95A").s().p("Ag1CIQgXgUgSgeIgrg+QgXgggHACQAEAGAAACQAAAEgEACIgBgBQgYgXgHgeQgEgQAAgpIADgjIgCgDQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIAGgOIAIgNIABgBQAEACAAAFIAAABIABgBQCUCpBLAgIgIAFQgYAMAAABQAAAJAIAAQAhAAAngqQAGAQAPAWQAhAxA3gBIAHAAIAAAAQhFBFg/AAQhSAAgrgng");
	this.shape_24.setTransform(9.5,-12.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#996666").s().p("AgiBnQgRgBgQgFQgagLgRgWQgHgJgFgKQgNgZAMgWIAUgnQALgUADgVQAFgIAHgGQAHgHAJgEQAIAEAGAGQAHAGgBAHQgFAVgNAUIAGAGIAeADQAZgDAbgGQANAAANgDQAVgGAVAHIAHAIIgDAPIhPARIgJgNQgDAVgJAXQgGATgMAQIAPAFQATAFAXgFIA/gNIAGAIIAAAEIgBAHIgCAKIgUAIQgTAGgUAEQgUAFgUADQgUgBgVgEgAATAgIAHgTIADgEQAlgBAjgMIAIAEQAQAJAFARIgPAQIgHgFQgIgBgHABQgpAJgqAGIAJgUg");
	this.shape_25.setTransform(37.5,-19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#A2E95A").s().p("AAMCXIgagHQg+gfgvg2QgTgWgRgXQAAAFgFAEIgBgBIgCgBIgYg2QgEgNAAgmIABgUIADgUQAFgOAHgJIAAgDQAAgIAHAAIABAAQAHAAAAAIIAAAAQB6B3BOAuIgGAIIgLAUIAAAAQAEgCABAEQABADAUgRQAUgSAEgOQAGAMATATQAjAhAsAAIAXgBQgXAigVAVQgdAdgeAJQgNAEgQAAQgXAAgdgIg");
	this.shape_26.setTransform(7.4,-14.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6978F3").s().p("AAKA5QgjgCgXgXQgWgTAAgRIAAgBIgCgEIACgIQAIgVAGgVIAIAQQAHAKAKAKQALANAOAKIARALQASAJAWAEIAWADIgNAVIgGAJIgBAAQgGADgYAAQgFAAgIgDg");
	this.shape_27.setTransform(22.7,-15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#996666").s().p("AguBlQgRgEgPgJQgYgOgNgZIgJgUQgDgLAAgKQABgNAJgOIAbgjQAOgRAHgUQAGgHAIgFQAIgFAKgEIAMANQAGAHgDAHQgIAUgQAQIAFAIIAcAJQAaABAbgBQANACANgBQAWgCAUAKIAFAJIgFAOIhRACIgGgNQgIAVgMAUQgJASgOAOIgBAAIAMAGIACABQASAJAXgBIBAgDIAFAKIgBAEIgCAHIgEAJIgUAEQgUADgUAAIgZACIgPAAQgVgFgTgHgABoA8QgHgDgIAAQgpADgrgDIANgSIAKgRIADgCQAlADAlgHIAHAGQAOANACARIgSAOIgGgGg");
	this.shape_28.setTransform(31,-26);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6978F3").s().p("AARAIQgWgag4gOQAFgUAGgHQAEgEAIAAQAhAAAdAVQAfAVAGAXIgQA+QgRgsgLgMg");
	this.shape_29.setTransform(8.9,20.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#996666").s().p("AgGBRQAzggAFgHQg3AYgKAAIgXgBQAAgCgRgDQAOgFAOgMIAkgdQgNAIgmAOIgaAKQgHACgGABQgJAAgOgHQAGgUApgbQApgeADgKQgFgDgkATIgagOQACgGAIgDIAPgFQAKgDAWgOQATgMAEAAQA2AAAeAmQAVAaAAAWQAAAjgcAaQgaAagiAAQgKABgNgHg");
	this.shape_30.setTransform(1.8,27.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A2E95A").s().p("ABGDNQgPgGglgHQgFAAgBgKIgChFQgBgRgGgVIgJgmQgNgmghgpQgegmgcgRIgCAJQgCAMgFAEQgEgIgDgPQgDgOAAgIQAAgjAJgoQAJgmALgTIABABIABAJQCRCYAvBwQAuBygMBvQggghgagMg");
	this.shape_31.setTransform(2.5,-6.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6978F3").s().p("AgLgJIAXAAIgMATg");
	this.shape_32.setTransform(21.9,-5.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A2E95A").s().p("AggCpQgRgJgWgZQgRgTgRg0QgRgwgVgRIgGATIgIAHIgEgJQAGgTAGgeQALg8AAhEQAAgRAGgEQACgCAEAAIABAAQAVA4AcA3QA2BpA1AqQgYALgHAHQA9AKA6g5IAaAjQARAXAAADIgEAbIgEAbQAAANhsAMQgxAAgdgQg");
	this.shape_33.setTransform(4.5,-13.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#996666").s().p("Ag9BYQAAgXATgfQAWgiAHgyIggAlQgFAGgNAAQgYAAgIgPQgJgOAVgLQAngNAVgUQAOgNAZAAQAkAAAYAZQAWAWAAAZQAAAPgHAOIgGAJIgJAHIAEgQQAEgPAAgGIgBgKIgDgIIgFgIQADAmgRAZQgNAWgOAAIgIgBIgFgCQAOghACgZIgFgYQgNAzgKAZQgOArgpANIgIABQgHAAAAgGg");
	this.shape_34.setTransform(27.8,-7.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6978F3").s().p("AgUAmQgUgKgdgiIAcgnQApAxAXAEQAPACAggJIgbApQgPAEgOAAQgTAAgPgIg");
	this.shape_35.setTransform(24.7,-17);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A2E95A").s().p("AhhBvQgJgIhihiIgCAJIgIgCQgFgEAAgLQAAgaAWg4QAPgoAQgfQAFADgDAMIAAAAQALAfAmArQAyA4BQA0IgdAUQAlgEAKgHQASgLAzg4QAjAYAKAGQAtAZAcgGQgnA5g6AkQg0AggnABQhFgBg8gug");
	this.shape_36.setTransform(6.1,-14.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#996666").s().p("AhMAsQgTgcABgQIAEgPQAKgOAUAAQAOAAARAPQASAOAAAJQAAAMgJAHQgHAEgIAAQgCAAgLgGQgNgHgKgJQgIgEgBAFQADAMANALQANAJAFAAQAGAAANgEQANgEAFAAQAWAAABAKQADAQAHAEQgiAPgKAAQghAAgXgkgAAjA0IgHgIQAOgFAFgDQAGgGATgcQAJAFAAAKQAAARgOAKQgLAIgTAAIgCAAgAAPAgIgNgCQAAgJgDgRQgEgQgDgEIALgCIAcAKQAYAIADACIgXAaQgEAFgDAAIgNgBgAAlgZQgdgJgEAAQgNADgJAAQgRABgUgNIAogYQATgMAbAAQAbAAASALQAUAMgBAXQAAAHgIAFQgIAFgJAAQgFAAgcgJg");
	this.shape_37.setTransform(30.6,-26);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A2E95A").s().p("AAPBoQgcgCgdgHQgUgDgTgGQgTgGgTgIQgTgHgSgJIgigSIgegSIgagOQgFAIgDAAQgFAAgCgGIgBgGIAIgUQAAgHAjguQATgZAJgEQAHgDAAANQAAADgEAGQA0AlA9ARQAgAKAhADIASABIAZACIgEARQAegSAMgOIAEgFIAhgvIASgaQAtBCBcAEQgmA/g9AoIgPAIIgDACIgBAAQgZAJgYAHQgWAGgXAEIgMAAIgYgBg");
	this.shape_38.setTransform(9,-21.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6978F3").s().p("AhTgGIAfg3IAEAPIAAAAQAKApBGAMQAKACAKAAQARAAAPgIIgHAPIgZAuQhdgBgqhDg");
	this.shape_39.setTransform(31.1,-33.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996666").s().p("AgWCKQgVgFgQgHQgZgMgGgTQgEgLAAgKIAAgBQgBgHABgHIABgIIAAgCQACgMAEgKQAggaAXAFIACABQAEAAAEADIABABQAXAOABAOIgBABIABAQQgYAYghgZIgBAAIgNgHIgCgBQgBAHADADIAdAbQAhALAYgdQADgCgBgFIAAgMIADAAIAKgDQADAJAGAHQAHAJALAHIgJAVIgIANQgVAdgeAAIgOgBgAAxAkIALgOQAKgMABgVQANACAHAHQAGAHgDARQgGAhgVAEQgNgJgFgOgAATAdQgFgRgagPIgEgCQAJgVAHgKQATgGAMADQAJABAGAHIAIAMQAAAUgIAKIgKAMIgCACIgOAEIgBAAgAhIg5QAIgRAMgPIAAAAQATgXAPgLQALgLAHgCQAQgFAQAIQAKATgHAMIgDAGQgHAKgGAFQgJAGgUAZIgBAAQgLALgLAdQgYgDgcAQQACghALgbg");
	this.shape_40.setTransform(37,-48.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6978F3").s().p("AgvAcQgagVAAgOIAWgpQAUAfANALQAVASAigBQARAAATgKIABAAQgTAlgJAGQgHAFgdAAQgcAAgdgVg");
	this.shape_41.setTransform(27.4,-18.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A2E95A").s().p("AiCAtQgTgZgagpQgVgjgFgDIAAABIgCAMQgBAHgDACIgGABQgCgBAAgGQAAgeAPgTQAZgeACgFQACgFAFgDQAKgGAPAEIAAACQgCABAAAGQAAAPBKBCQA/A2AOAKIgRALQAXADAUgJQAfgPAogvQAIAYAhAQQAkAUAigHQgnAtg2AoQg2AohAABIgCAAQg+AAhHheg");
	this.shape_42.setTransform(8.3,-13.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#996666").s().p("AhOA6QAAgWAHgLQAJgMATABQAJgBAIAIQAMAIAFASQgPAMgLAAQgHAAgJgDQgJgFgDgIIgCABQADALAKAKQALAJANABQAMgBAKgGQAGgDABgEQADgDAHgBQAIAAgBADQAEAXAFAJQAFAJANACQgGAFgPAHQgQAGgHAAQhOAAgBg/gAAqBVIgEgCIgBgDQgCgFAAgGQAAgIACgGQAHgOATgSQAQAGAAASQgBAWgMALQgHAGgGAAQgGAAgFgBgAACAiQgCgHAAgGQAAgGAAgCQAFgGADgHIAGgFQAIgKAPgDQALARAAAJQAAAQgLAIQgIAEgXAEIgEgGgAgsAAIAJhQQADgoANAAQAJAAAJAKQAJAMAAAYQAAAPgGAdQgFAegGAKg");
	this.shape_43.setTransform(31.5,-31.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6978F3").s().p("AhCgUIAAAAIgDgHQAYgJAVgVIAFAVQABAIAFAIQALATAcAKIAAAAQAYAJAUgEIgQAOQgYASgcAMQgxgZgTg1g");
	this.shape_44.setTransform(37.8,-5.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A2E95A").s().p("ABeCXQhTgIhFgqQhKgrhTh2QgCgDgEgBQgDgBgDACIgBgBIgBABIgBADIgBAEIgEAIQgHAAAAgHQAAgWAXgmQARgfASgFQAOAYAIACQCiDTCvgsIADAIIAAAAQATA2AuAcQg5AUg8AAIgggBg");
	this.shape_45.setTransform(11.5,-12.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#996666").s().p("AgGBkIAAABQgegNgFgWIgEgPIABgBQADgCAAgEQAAgEgDgCIgIgJIgDgEIgBgBIgIgIIABAAQgKgKABgGQACgGALgFQAVADAFATQABADACACQACACADAAQADAAACgBQADgBABgDIAEgGIABgEQAAgigRgiQgKgRADgLQADgIAMgDIAHAEQgNATARAiQAKAbAAAPQAGABAKAHIABgCQAFgSgSgmQgMgbAMgMIABAAQATgCALASQgKAGgEAJQgHANAIAVQAIAXgCAVQAJALAEALIADgJIAAgBQAHgegMggQgFgMADgIQADgGAJgDQAbAZgEA2IAAAAQgFA8gWATQgOALgQAAQgLAAgLgFg");
	this.shape_46.setTransform(41.8,-16.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A2E95A").s().p("AgiBWQhrhOgphNIgDgBQgFACgCAQIgGABIAAAAIAAgBQAFgdAchGIAKgZIAmAgIAYARQAXAQADgBQAgAfBOAsQBbAxBBAMIAAAAQgUARgQArQgTA0AKApQhUgOhohNg");
	this.shape_47.setTransform(9.2,-13.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6978F3").s().p("AgpBMQgLgEAAgqQAAgRAPgjQASgqARgSIA3AJQgcAXgMAdQgHAVgBAkQAAAJAFAQIAGAWQgwgEgJgDg");
	this.shape_48.setTransform(31.7,-1.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#996666").s().p("AhfBgQgYgXAAguQAAgqAcgcQAOgOAPgHQACgCAMgbQAOgcALAAQAGAAADACIAEACIAEAWQgCARgJAPIgXgJIgFADQAeAaAOAGQANAHAbAAIAlgDQAfgCAFACIACAOQAAAKgEAJIhiAHQAHgZgEgEIAAACQgDALgcAlQgcAigIAHIASAGQACgCAngEIAxgDQAHAAAGACIAFACIAAgBIAAAFQAAAVgYANQgXAOgdAAQhBAAgcgagABTAxQgPgHhOAJIALgUQABgBAAAAQAAAAABAAQAAAAABAAQABAAAAAAIBsgLQACACADAHIACAEQABAVgMAIQgKAGgHACQgBgPgIgFgAB3AcIABABIAAABIgBgCg");
	this.shape_49.setTransform(46.2,-2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A2E95A").s().p("Ag5BqQhPg2g8haQgCABgBARQAAgaAMgkIAbhJQAZAaBNA1QBGAyAoAVQgDAFgHAcQgHAcgIANIAthFQAJABANANQANANAeAGQAeAFAigEQgVA/gtAhQgiAaghAAQg4AAhFgyg");
	this.shape_50.setTransform(9.2,-9.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6978F3").s().p("Ag3AbQgYgSAIgRIASgnQgBATAZAPQAVAMANAAQAhAAAbgXIAJgHQAAAygSAQQgOANgnAAQgngHgTgOg");
	this.shape_51.setTransform(24.8,-12.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#996666").s().p("AhCBeQgSgPAAgUQAAgPASgQQAYgWAHgKQADgFAEgkQAHgmARgOQAOANACAcIgLBJQAagRAAguQAAgJgHgvIAEgCQAGgCAHAAQAJAAAHALQAKAPAAAeIgBAXQgEAUgJAdQAUgOAGgbQADgPgBgNQABgKgGglIAGAHIAFAIQABAFAAAJQgBA1gFANQgCAIgZAmQgZAlgCgBIgWAMQgWANgNAAQgRAAgQgOg");
	this.shape_52.setTransform(29,-25.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6978F3").s().p("AgrA7QAggSAeg2IAQgxQAFgVAEACQgJARADAfQADAagTARQgSATgGAOQgJATAEATIgBABg");
	this.shape_53.setTransform(15.1,10);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#996666").s().p("AhHBnQgJgLAAgOQAAgKAKgPQAOgYARgPQALgLAAgEQgDgqAAgNQAAgUATAAQAGAAADACIADACQgCA2ACADQAAAEAJgBQAEgDgEAPIABAAQgEAbgQAVQgLAMgIAFQAbAEAJgOQAHgJAEgZQAEgZAEgJQAIgRAVgBIABAAQAKATAAALQAAAYgEAOQgKAfghAYIAAAAQgTARgGADQgGADgkABQgNAAgKgNgABMggQgBgJgJgFQgGgDgFAAIgJABIgIADIgCgOQACgJAHgEQAGgFAIAAQAJAAAHARQAIASgEARgABEhdQAAgBgKAAIgQACQgGgQAGgEQADgCAFgBQAEACAJAKIAMAOg");
	this.shape_54.setTransform(24.1,9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A2E95A").s().p("Ag2BJQghg7geg6IgHgBQgBgBAAAGQAAAGACAIIACAIIgDADQgQgQAAgdQAAgKAIgzQADgXASgiIAWglIAEAGIAAABQgCAAAAAKQAzBlAuBAQAYAhA4AmQAcAVAXAPQAAAogaApQgVAigiAbQgxgahBh1g");
	this.shape_55.setTransform(3.1,-6.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6978F3").s().p("AgpgIQAWgNATgNQgDAIgUAZQgQASgBATQgLgjAKgJgAArgSIAAAAQAAAFAEAEIgGAFg");
	this.shape_56.setTransform(13.4,17.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#996666").s().p("Ag0BLQgOgSAAgkQAAglAPgPQAPgHABgCQAIgHAFgWQAFgUABgBIADACQADACACAGQAEAIAAAGQAAARgGAHQgGAIAAADQAAAHAFADIAHADQAIgFASgaQASgYANgGQAFACAGAKQgaAZgLAMQgUAWgFAXQATgHAUgVIASgVQAGAAABACIABABIAAAQQAAAKgGALIgHgGQgEgCgGAAQgIAAgRARIgfAoIAIABIAbgVIAZgRQAGAAAAADIACAIQgDAagcATQgZARgUAAQgUAAgMgQg");
	this.shape_57.setTransform(17,21.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A2E95A").s().p("AgkgCQgrhPgegXIgFABQAEASgDABQgRgLgGgiQgDgSgBghQAAgIAJgNQAFgHAQgUIAFgDIABAGQAAAEgCADIAiAZQA1AxAgAuQA3BLAlBbQAgBTAEA5QgJgMgHgFQgFgEgCAAIgNAMQgIgCgKACQgVAGgUAbQgZiAg5hqg");
	this.shape_58.setTransform(3.3,-8.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6978F3").s().p("AAGAAQgIgTgqglIgIgLQATAFAjAUQAzAcAAAVQAAAGgJARIgVAmQgNg7gEgJg");
	this.shape_59.setTransform(3.9,25.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A2E95A").s().p("AAgDjQgigUgVAAQADgPAEgkQADghAAgJQAAg7gLg5QgNhDgSgGQgDACAGAkIgCANQgUgQgPhVQgMhFAAgxQAAgIALgZQACgCAEAFQgDgWA6BbIAAAAQBIBoAdBDQAeBAgBBpQAABpgMAlQgQgdgpgWg");
	this.shape_60.setTransform(0.9,-4.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#996666").s().p("AhMCFIAFgQQACgHAUAAQAIAAAXgFQAYgHAIgIIANgMQgQAFgOAEIgtADQgVAAgLgFQgIgEAAgDQAAgWA6gaQA+gbADgDIAHgGQgRAEgPADQgOAEgxAAQgIAAgFgEQgGgEgFgOQAIgJAtgQQAsgRAIgIIAAgEIgHgGQgFAFgBAFQgCADgUAAQgNAAgLgaQgHgSgEgUIACgNQAEgCAKAAQAOAAAPAYQAcAoAVAUQAMAMAOAvQAOAvgEAPIAAAAQgGATgsAbQgrAcgfABIAAAAIgjAHQgCgNgDACg");
	this.shape_61.setTransform(-4.8,29.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A2E95A").s().p("AgYBqQgTgCgTgGQgUgGgSgJQg9gcg5giIgIACIgCALQgHAKABgMQAAgLAHgJQAQgUAVgTQAKgIAGgMIAEgIIAHgJQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIABAFIABACIAAgBIArAUQAVAJAXAHQAWAHAYAEIAuAJIACACIADAAIAEAAIAEgDQAmghAagsIAXgfQAMAMAMAKQApAiAzAKIgqA0IgdAmIgZAUIgYAQIgPAJIgjAOQgcAJgbAAQgRgCgSgFg");
	this.shape_62.setTransform(7.9,-26.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#6978F3").s().p("AgIAyIgdgRQgWgPgQgSIAhg/QAGASASAMQATAPAYANQAMAFANAEQAMACANAAIgjA6QgagCgWgMg");
	this.shape_63.setTransform(28.6,-39);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#996666").s().p("AgWChQgRgJgRgLQgOgKgNgMQgPgOgCgWIAAgIQAEgZAOgTQASgbAkAAQAbABAMAUQALAOABANIgEAQIAAAAIgJAMQgNADgLgIQgYgQgSgVIgDAIIALAUQARAaAeAHQAMACAMgJIABAAQAAAJAEAJQAGAPAQAFQgMARgRAJIgNAIQgGACgFAAQgKAAgJgFgAA6ByQgKgDgFgJIAAgOIAGgEQANgJAJgMIAIgPIAGgJIAJAHQAJALgBAPQgBAHgDAGIgIAOQgLAPgPAAIgGAAgAAnA5QACgegWgWIAGgFIAQgaIABAAQARAFAFAPQAJANgEASQgHAdgZARIACgOgAg5gIQATgoANgqQAMgjAQggQANgJARABIAFAFQAIAHADAJQAEAQgFAPIgTA8QgHAbgQAXQgdgQgiALg");
	this.shape_64.setTransform(35.5,-56.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#A2E95A").s().p("AjKDwQgNgPgGgRQgFgNgLgIIgLgNQgFgIACgJIADACQAAAFADADIADACIABABIAAgBIAIgCIF+maIAIARIAJAPQAgAuA2AOImjFzIgUAXIgFABQgGAAgEgEg");
	this.shape_65.setTransform(12.1,-41.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#6978F3").s().p("AgcAxQgmgagPgrIAtgxQAEAQAJANQAGAKAJAJQAMAOATAJQAVAMAZACIANAAIg8A2QgZgGgZgPg");
	this.shape_66.setTransform(36.7,-65.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#996666").s().p("AgcCOQgcgKgVgVQgVgWgFgcQgBgMAEgNQAEgNAHgMQAGgIAJgDQAbgQAZAQIAAAAQAMAKAHAMQAGANgDAOQgCAGgEAEQgFAGgGAFQgWgEgTgRQgJgIgHgFIgDAEIADAGQAFAKAIAJQAPAUAZADQATABALgUIAQACQABANACAMIADAHQAGALANABQgKAPgSAIQgPAIgNAAQgLAAgLgEgAAsBbIAAgYIAJgFQASgMAMgMIANAEIAIAYQgDAPgKAJQgJAIgMABIgHABQgLAAgIgJgAARA0IABgHQABgKgEgLIgCgEIAygvQADACACACQAFALADAMQAHASgSAMIgWASQgHAGgJAAQgFAAgFgCgAgSgRQgNgHgNgCIAaghIAAAAIASgVIAPgVIAUgTQAPgMAQgKQANgHAOAJQADACADAEIAAAIQgDAYgPAUQgPAVgSATQgVAZgXAUQgIgMgOgIg");
	this.shape_67.setTransform(45,-79.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6978F3").s().p("AAgAJQgTgSghAAQgRAAgbAJQgBgXAUgMQARgLAcACQAYABAUAMQAVANAAASQAAAIgHAlQgPgYgLgMg");
	this.shape_68.setTransform(8,20.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#996666").s().p("AA+AxQAGgJADgTQAAgHgCgBQgDAOgZAVQgaAXgUAEQgHgBgHgFQAVgQAQgeQARgbgEgPQgsA6gMALQgVAYgSAAQgGgBgPgCIgBgGIACgQQAmguATgbIAFgIIAEgIIglAZQgLAAgIgIQgFgHgDgGQAGgBApgWQAjgUAaAAQAUAAASASQAXAWAAAnQAAAWgLAXQgOAcAFgNIgnAUQAdgXAFgIg");
	this.shape_69.setTransform(4,29.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A2E95A").s().p("ABVDTQgQgGgNAAQgWAAgcAJQARhegvhvQgphcglgSQgBACgBAPQABAHgDAHIgBABQgDgJgOhHIARg6QATgvgBASQgEANANANIATALQAHAFAjAlQAgAmAfA4QAfA4AVA/QAWBKAIBwQgNgWgcgJg");
	this.shape_70.setTransform(2.2,-6.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#6978F3").s().p("AgmAzIgIgSQAEAHAPAHQAQAHAOgBQAJAAADABQADABAAAHQAAAFgCAIQgCAHAAAEgAgggmQASgiAagNIAlAUQgQgDgRAYQgQAXAEAMIABAHQgigHgTAcQAAgaAQgfg");
	this.shape_71.setTransform(26.6,10);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#996666").s().p("AASBiQgIgFAAgPQAAgCAWggQAWghAAgKQAAgDgCgHQgEgLgGgHQgBAEgEABQgDAAAAAFQAAADgHAEQgKAFgRAAQgFAAgBgBIAAgBIAGgGQAHgGAGgMQgBgBAAAAQAAgBgBAAQAAAAgBAAQgBAAgBABIgDACQgFAGgXAIQgUAHgEAAQgGAAgLgDQgPgEgKgJQAJgNAmgBQAhgBAAgUQAAgGgCgBIgCAAQgDAAgJAFIgJAHIgBgBQgFgsA0AAQAgAAAWAjQAYAlAAA7QgBATgJARQgRAigkAAIgBAAQgEAAgEgDgAgGBCQgRgTgDgJQgHgQAWgOQgBAhADAEQACAEAKAJIgDAJgAACAoIgCgQQAAgMAGgIQAGgGAJAAQAGAAAEACIAHAFIgEAOQgBgGgHgDIgHgCIgCAEIALASIgQARQgHgHgDAAg");
	this.shape_72.setTransform(32.1,15.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#A2E95A").s().p("AhCAxQgtgzgigxQgTgdgLgFIgBAQIABAJQgBAFgDACIgIAAIgBAAQgBgBAAgHQAAg7AOgxQAOg1AWgGQAMAdAGAKQAbArA+BCQBMBQBAAtQAjAYAvAbQgnAigMAdQgCAFgJAtIAFAUQhMgwh7iEg");
	this.shape_73.setTransform(7.5,-8.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6978F3").s().p("AgvAKQgXglAAgRIAtgRIAAABQAAAqAcAXQAUAQAvAQIgHAFIgZANQgMAHgFgBQgnABgdg0g");
	this.shape_74.setTransform(36.8,-16.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996666").s().p("AhEA0QgkgbAAgeQAAgVAVgNQATgLAaAAQAOAAATAOQATAPAAATQAAAEgIAIQgHAHgNABQgFgBgKgHQgOgLgPgGIgDACIgBABQAKAeAhAGQAbAFAAAOQAAAHgHAHQgHAJgRAAQgQABgdgXgAAhA4IgDgGQAFgBAGgDQAEgDAFgBQAGABADAEIADAEIAAAAQgJAIgMAAQgGAAgCgDgAAzATIgWgjQghg1gkAFIAegGQATgEAIAAQAgABAaAXQAeAaAAAnQAAAGgGAGQgLAIgXABQgEAAgKgRgAAJAaIARgSIANAVIgBAFIgEACQgIgBgRgJg");
	this.shape_75.setTransform(46.3,-21.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A2E95A").s().p("AAVB1QgvgGgngVQgogVhDgmIgmgWIAAAEIgCAJIgDAEQgDgFgOgFQgJgEAAgNQAAgcAPglQAVg1AlgDQACAEAAAGIgKgBQAoA7BSAeQA2AUAoAAQALAAApgFQAvgFAUgEQABAhARAcQAVAkAsAOQgiAPgyAIQgmAHgZAAQgZAAgxgGg");
	this.shape_76.setTransform(11.9,-18.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6978F3").s().p("AghAiQgNgLgLgNQgLgOgJgQIAeguQAJAcAUARIAfAYQAUARAbAAIASADIgsAsQglgGgegbg");
	this.shape_77.setTransform(35.5,-31.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A2E95A").s().p("AgTBWQhEgMhAgcIgNgGIgBgBIgNgHIg6ggIgGgBIgNgGQAEgHA9hDIADgEIADACIAeAOQAsARAsAOQAoAMArAEIAaABIADAJQAEAEAGgCQASgGAQgOQASgPAPgSIAYgdQAMAYATAUQATAUAYAKIAjAMQgZAVgcATQgZARgcANQgbANgcAHQgdAHgfABIg2gGg");
	this.shape_78.setTransform(11.7,-23.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#996666").s().p("AgpB4QgJgCgHgGQgUgOgTgQQgXgVABggQABgZAQgOQAJgJALgEQAUgJAWgEQALACAKAGQAPAJADARQAEAPgEATIgLAKQgFAAgEgCQgLgFgJgIQgSgRgOgRIgEAHQAGASALARQAOAVAXAFQANADAJgIIABAOQABAGADAFQAHAJAIAHQgTAVgZAFQgJgBgIgCgAARBFIACgOQAegOATgdIAHAJQADAGABAHIAAANQgGAVgRAKQgGAEgGAAIgHABQgNAAgHgOgAARAAQAAgJgFgKIgFgJIAFgEIgIgMQAIgIAMgCQAGgDAHAAQANAHADAPIACARQgBAdgaATIgMAHQACgTgBgSgAgzg0QgMAAgMAFQALgPAMgNQAKgJALgIQAhgYAogFQAbgDAbAEQAiAHgQAiQgGAHgKACIgBABQgZAIgWgNIgIgDIgCAEQghACgVAYQgTgFgSAAg");
	this.shape_79.setTransform(44.5,-44);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A2E95A").s().p("AkdCQIAah5IAEAGQBcAVBXgfQBSgbBGg1IASgNIAMgIQAkgZAcglQADANAGAMQAJASANAMQAfAfAsAAIAKAAQhGA+hTAwQhTAwhUAXQhXAYhYgMQghgDgggLIgGAXg");
	this.shape_80.setTransform(14.1,-34.5);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#6978F3").s().p("AgCBCIgegPQgVgMgLgWIgPgaIAog+IAOAqQAGAQANAMQAKAIAOAEIAUADQAWABAUgKIgmA+QgLAFgLAAQgMAAgKgGg");
	this.shape_81.setTransform(39.9,-48.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#996666").s().p("AgfCRQgOgCgJgKQgRgTgIgcQgFgRAEgQQACgJAFgIQAEgHAHgGQAMgJAQABQAOAAAHAMQAHAMABALQABAGgCAFQgEAQgPgDIgWgcIgDAAIgEAAIgCACQgEAGAFAGIAUAYQADADAEABQAJAEAHgEQAKgGACADQAIALAOgDIAEAQQABAIALAFIgKAJQgTAQgWAAQgJAAgJgCgAArBqIgGgOIAAgFQALgHAGgNQAKgVADgUIAIABQAKASgEAVQgDAQgJANQgJALgQAAIgBAAgAAMBLIgFgHQAFgRgHgRIAYgtIAIgCQAIADAEAKQAGAQgFARIgHAWQgFAMgJAGQgEADgGAAIgHgBgAgiAAQAHgMADgOIAIgnIAJgpIAFgXQACgQAPgBIADACQAMAKABASQACAMAAALQABATgFARQgMApgSAjQgMgQgVgDg");
	this.shape_82.setTransform(45.6,-63.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6978F3").s().p("AgeAZQgagaAAgdQAAgGAWgKIAVgJQADAgARATQANAJAlATIgtAgQgWgIgUgXg");
	this.shape_83.setTransform(35.5,-12.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#996666").s().p("AgqB2QgTgXAAggQAAgOALgKQAKgJAMAAQAMAAAJALQAHAKAAALQAAACgFAHQgGAHgJAAIgagLQAFAKAMAIQAJAHAFAAQAbAAgFg3IADAHQABABAGAEQAEAEAAAGQAAAFgEABQgFAAABAGQAAAGAKASIAJARQAAAHgHAJQgJAOgQAAQgWAAgUgYgAAhBbQgFgGAAgJQAAgIAFgGQAEgGAGAAQAGAAAEAGQAFAGAAAIQAAAJgFAGQgEAGgGAAQgGAAgEgGgAAYAhQgHgJAAgOQAAgNAHgJQAGgKAKAAQAJAAAGAKQAHAJAAANQAAAOgHAJQgGAKgJAAQgKAAgGgKgAglASQAKghAJguQABgsAKgSQAGgKAFgIQAPAGAEAGQAEAFAAAMQAAAPgMA9QgMA4gDAKQgKgHgbgFg");
	this.shape_84.setTransform(41.5,-25.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A2E95A").s().p("AhRBlQhPg5hDiIIgJAFIgCgBIgEgFQAmgqAVgOQAKgHAMAAQADAEAAAFIgDAHQgBADAAAGQAAA1BZBBQBYA/BGAAIApgGQAsgHAJgDQgFASAdAkQAZAfAOAIQgQAIgwALQgvALgOAAQh4AAhOg4g");
	this.shape_85.setTransform(10.2,-18.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6978F3").s().p("AgDA7IgCgBQgCgBgNgSQgNgSgBgdQgCgeAMgXIADgEIALAFQAKAFALACQgGAQAAAZQAAAaALAZQAIARAMAKIgIABQgRgDgOgFg");
	this.shape_86.setTransform(24.3,10.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#996666").s().p("AAUBSQgJgKgGAAQgFAAgBACIgCADIABADQgGADgVABIgEgBIgCgBIgBAAIgLgBQgTgBgKgiQgGgWAAgTQAAgKAIgVIADgIIACgBIACgBIACgGIgBgCIABgBQABgIAJgEQAFgBACABIADAAQAQAAAAAYQAAAEgKAKIgKATIAAAJQAMAAANgUIABgBIAAgBQAAgKAGgCIABgDIADABIABAAIAFAEIAGAEQAUATAAApIACAAQAGAAABgGIACACIAEADIgCABQADAEAKADQAJACACAFQAEAKAAAJQAAAGgEAGQgGAGgKABQgLgBgJgKgAApAaQgJgJgGgDIgEgOIgFgIIAAgDIAAgDIACgBIABABIAPgDQAwAAAAApQAAANgVABQgHgBgOgLgAgXg+IASgMQAagSARAAQALAAAFAIQAEAFAAAFQAAAPgJAFQgKAFggAAQgMAAgHAGIgDADQgBgOgHgIg");
	this.shape_87.setTransform(34.6,8.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A2E95A").s().p("ABBCtQhCg5g6hUQg6hRgTg+IgRg2IgBABIgDAHIgHALIAGgOIABgEIACgEQANgTAmgsQAPAiApA9QA6BaAxA/QApA3A/AlQgOASAAALIgDAjQAAAQAIAXQAFAMAGAIQg2gUgugng");
	this.shape_88.setTransform(4.7,-7.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6978F3").s().p("AgXArIgFgTIAIAHQgCAGAAAHgAAAgcQgHgEgHgDIADgBQAOgHAaABIgHADIgCABIgEABQgOAEAAAHIAAAAIgCgCg");
	this.shape_89.setTransform(11.6,22.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#996666").s().p("AAfBIQADgFACgHQACgHgGgFIgCAAQAAAJgPAAIgFgBQgQgFgPgLQgJgHgFgJQgHgOAFgNIAFgHIgHgKQgJgJgLgEQgUgIgIgPIAEgHIAPgDQATgBALAMQAHAIAFAKQACAGAGAAIgBgIQgDgNABgCQAAgNAGAGIABgBIgBgDQABgGAIgCQAGgEALgCQASgDAFAEIAEABQAiAIgHAhIgCAEIgIAJQgGAGgGACIgEABQgEADgFAAQgHAAgDgFQgBAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAIgEgOQgDgQgMgEQgBAEgFAAQAIAPAAAKIAAADIAEANQAFAIAKACQAAASAIARIACADQAFAJAKAEQAOAFAPgFIABAIQgEAIgKAHQgIAFgGAAQgJAAgGgJgAAxAnIgLgTIgCgTQAWgBANgSQAGAHAEAHQAFAFABAIQAEAPgNALQgIAHgJAAQgGAAgGgDg");
	this.shape_90.setTransform(14.7,26.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A2E95A").s().p("AAkD2QgKhUgbhNQgdhLgphDQgjg8grg2IAig0IANgXIAZAdQA6BFAvBIQAtBCAjBEQApBRgBBbIACAGQgNgCgMADQgJgFgeAFQgjAEgGAGIgJgBg");
	this.shape_91.setTransform(3.8,-6.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#A2E95A").s().p("ABACAQhPAAhJglQhPgog9g9IgVgWQBKghAYg+QDBCyCfgxQAEgBABgBQACgDgBgCQgMAEgSAAQgNAAgRgDIgBAAQgWgFAAgFQAAgHAJAAQAEAAAJADIANADQgEgFAAgFQAAgKAOgNIAagVQACgCAXgbQAMgOACAIIAAADQAAADgEAGIAAAAQAuBTg9BFQg6BEhaAAIgDAAg");
	this.shape_92.setTransform(-28.6,-21);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6978F3").s().p("AhGAiIgFgEIgKgIIACgEIABgEQAAgNANgMQAWgaAEgFQANgaARgSQANgNABACQABAAAAABQAAAAAAABQABAAAAABQAAABAAABIgDADIACADQAqAyAqAnQgWA/hKAgIg8hAg");
	this.shape_93.setTransform(-53.8,-35.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6978F3").s().p("AgoAtIgiggIgGgFIgCACQgEAAgBgCIAAgCIgBgHQBHhAAcgRIgBgDIACACIAEgCQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAAAIgBACIADACIADADQAJAJAAADIAAABQAbAbAgAUQgQBDhCAiQgagUgWgVg");
	this.shape_94.setTransform(-19.1,-8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#A2E95A").s().p("AgeC3QhBgYgggXIAAAAQA/gkAShEQAyAmA+AUQADABADgCIAEgDIgYgPIgSgMQgpgTgmgeIgCgCQglgUgggiIgEABQgEAAgBgFIAAAAIARgUQASgZAJgbIAMgkQAHgTAKgNIACgCQACADAAAGIgBAEIgBACIABgBQAxAzAqA3IAAAAQApAzAdA4QAYAxgLA0QgHAdgbAMIAAAAQghAQgjAAQgZAAgcgKg");
	this.shape_95.setTransform(-3.8,-11.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A2E95A").s().p("AgtBaQhSgag6ghQgDgCgEABIgEACIAGADIgBAEIgGAAIgCAAQgSgBgHgVQgDgLAAgSQAAgNACgIIAHgaQAHgXAHgMIAEgFQAEgDAAAGIgCAHIADACIDSBTIgIATIAEABQAEABADgCQA0glAuhFQAfAuBRAGIgnAxIAAABQgkAug9AdIAAAAQggAPgmAAQgfAAgkgLg");
	this.shape_96.setTransform(11.3,-19.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6978F3").s().p("AhGAAIAdgxQAeAxBSAEQgNAVgRAZQhTgDgcgvg");
	this.shape_97.setTransform(31.3,-30.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#996666").s().p("AhVAyIgBgCIAAgBIgBgGIgDgEIgDgCQgqgOgEgOQgBgLAUgIIAAAAQARgFAVASIALAHIARALQACgCABgDQAAgEgCgDIgOgOIACgGQAFgHgBgDQABgFAOgUIATgbQAIgIAUgKQAagMAVgBIAOADIACAAQAGACAFAKQAFAMAAAMQgBAIgKAEQgKADgMAAIgEgBIgBgBQgHgDgJgBQgJAAgQAHQgOAGgFAGQgCADAAAEQAAABAAAAQAAABAAAAQABABAAABQAAAAABABQAIAAAMAEQAXAGAKAFQABgCAAgEIgBgDQAKgBgBgIQACAFAOgBIAEABIAHADIAGAHIAAABIABABIACAEIABABIAAAAQAFAIAAALQAAAIgGAHIgEAEQgGAGgFACIAAAAIgCAAQgKgBgJgMQgIgLgCgLQAAgDgCAAIgGgDIAAABIgDARIACAMIACAEIACAEQAQAWASgBIADAAIgDAEIgBADIgDAEIAAABQgRAcgSAGQgDABgCADIgBABQhPgFgYg0gABqApIgJgIQAHgKAAgMQAAgKgEgIIABAAIAAgBIACAAIAAAAIAHgBQAKAAAKALQAKAMAAAHQAAAIgHAIIgBAAQgIAIgJAAQgEAAgFgEg");
	this.shape_98.setTransform(36.7,-42.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A2E95A").s().p("AgtBaQhSgag6ghQgDgCgEABIgEACIAGADIgBAEIgGAAIgCAAQgSgBgHgVQgDgLAAgSQAAgNACgIIAHgaQAHgXAHgMIAEgFIABAAQADgDAAAGIgCAHIADACIDSBTIgIATIAEABQAEABADgCQA0glAuhFQAfAuBRAGIgnAxIAAABQgkAug9AdIAAAAQggAPgmAAQgfAAgkgLg");
	this.shape_99.setTransform(11.3,-19.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6978F3").s().p("AhGAAQAPgWAPgcQAdAyBSAFQgNAVgRAZQhTgDgcgwg");
	this.shape_100.setTransform(31.3,-30.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#996666").s().p("AhjAsQACgCgBgCQAAgEgDgDIgGgFIgDgCIAAAAIAAAAIgBgBIgBAAIAAgBIAAAAIgEgFIgBAAQgIgJgEgJIgDgCIAAgEQgCgHAAgIQAAgFAFgLIABgEQABgCADgDQAGgEAGAAQAEADAEgBQADACAEAHIAAAAIADAFIADAHIABABIABADIAEAJIAEALQADAFAFADIABgCQgBgEACgHIACgGIAAgBQgCgJgDgIQACgDABgDQACgSAcgPIAAAAIAEgCIADgCIAEgBIACgBIAMgFIAkgGIAMADIADAAQAEABADAEIABABIAAAAIAEAGIgBAAQAGALAAANQgBAIgLAHIAAAAQgLAIgJAAIgVgGIgYgFIgIAAIgDABIAEADQAGACAHAHIAJAJIAEABIAAAAQAWAGAEAAQAOAAARgLIgBAAIABgBQAJAIAGACQAAADACADIAEAEIgKAVIAAAAQgJARgTAXIAAAAQgRATgRADQgBABgCACIgBABQhEgEgbgogABlACIgBAAQgIgDgFgIQAMgCALgJIAAAAQAIgHAFgIQAEADADAIIAAAAQAFALAAAMQgBADgIADIAAAAQgHACgHAAQgEAAgHgFgABAgfQAGgIAAgJQAAgQgHgPIABAAIAAAAIAOgCQAMAAAJAJIAAAAQAKAJAAALIAAACIgBAAIAAAFQAAAFgCADQgEAIgIgBIgDABQgIAEgKAAIgJgGg");
	this.shape_101.setTransform(38.9,-40.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6978F3").s().p("AADAtQgYgEgVgPIAAAAQgSgLgKgPIAdgwQALAPARAMQAXATAeACIAAAAIAfADIgeAvIgmgFg");
	this.shape_102.setTransform(31.2,-30.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#A2E95A").s().p("AAGBlIgIgBIgFgBQgTgDgUgGIgfgKIgPgFQg1gUgpgYIgCgBIgFAAIgEACIAGADIgBAEIgGAAIgCAAQgSgBgHgVQgDgLAAgSQAAgNACgIIAHgaQAHgXAHgMIAEgFIABAAQADgDAAAGIgCAHIADACIDSBTIAAABIgIASIAEABIAFAAIABgBIABAAQAXgQAWgXIAAAAQAcgdAZgmQAHAJAIAIIgBgDIAPAMIAAAAQAPALARAGQALADALACIABAAIAeADQgKAQgNAPIAAAAIgSAUQgLAPgPANIgDADIgBABQgZAWghARIgJAEIAAAAQgfAOgjABg");
	this.shape_103.setTransform(11.4,-19.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#996666").s().p("AgnBeQgagEgVgPQgLgIgIgJQgJgEgDgMQgBgGAAgPQAAgHACgDQABgJACgHQADgLAHgJIAAAAQAHgHAJgDIAAAAQAQgGANAIQADAHgDAFIAAAAQgJASgOANQgDAFAAACQAAAGAEAIIAEgBQAWgUAMgXIAAAAIABgBIABABQABADAEACIASAIIADABQAOAJADgBQANAAALgEIAAAAIAJgEIACgBIABAAQgCACAAACIABAFIAEgBQAKgBACAHIABAAIgBACIAAACQAAADgCACQAAAPgQAXQgRAZgWAGIgIAEIgcgCgABaAGIgBAAIgJgDIgGgDIgBAAQgDgCgYAAIgCAAQAKgJAAgLIAAAAIAAgBIAAAAQADgGAAgDIAAgCIAPACQAEAAABgBQARgBAPAGIABAAIADABQAIAOgCAJQgFAHgQAFIgBAAIgHgCgAADgHIgIgGIgCAAIAAgBIgBAAIgPgIIgEAAIgJAAIgCAAIgBABIAAgCQAAgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIABgDQAAgGgEgHIgDgDIgIgFIAJgGIAAAAQAVgKAOAAIAHABIACABQAIABASAGIACAAIABAAIACABIAAAAIAFAIIACAGIACALQgCADgBADIAAAEQgBAEgEAEIgBAAQgDABgCACIgEABIAAAAQgIADgJAAIgBAAgAAzg4QgDgJgFgEIgDgDQgFgEgGAAIgLgDIAKgJIAAAAQAMgHAPAAQAKAAAHAHIABABQAGAGABAHQgBAFgJAFQgJAHgJABg");
	this.shape_104.setTransform(39.6,-41.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6978F3").s().p("AgMBdQgCAAgEgHQgEgGAAgCQAAgJgehFQgfhFAAgRQAAgHACABIAEADIACABQBAAKA7ABIAQAbQAUAnAAAaQAAAggPAWIgMARIg1ADIgDABIgBAAQgBADgHAAIgEAAgAhFhBIABgBIgBAAg");
	this.shape_105.setTransform(-25.7,-0.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A2E95A").s().p("Ah4C1QAGgTAAgWQAAgygcgqIgEgGQBEgBBBgMIACgBIAAAAIAWgFIAOgGIAUgNIABAAIAAAAIgBAAQgoACgGACQAHgwgZg0QgBgDgEgBQgDgBgEACQAMAmAAAEIgCAEIgDAEQgEAHgCAAQgGAAgEgeIgIguIgLgmQgHgZAAgOQAHgMADAAQACAAAAAGIAAACIACACQAzAgA6AtIABAAQA6AsAZBHQAXBDg/A5QhBA8hXAMQgnAGgnADQAFgJAEgOg");
	this.shape_106.setTransform(-4.1,-12.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#A2E95A").s().p("AgiCBIAAAAQhVgMhKgnIgdgRQBSgmAKhhQDbB4BOg7QAEgCAAgEIAAAAIgBAAQgYAHggAAQgPAAgKgGQgLgGAAgJQAAgTArgyQAcghAJAFQAFADAAANIAAABIAjAqQAYAgABA+QAAA+hTAbQhBAUg+AAQgXAAgYgDg");
	this.shape_107.setTransform(-23.7,-20.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#6978F3").s().p("AhGAtIgTgOQACAEAAACQABABAAABQABAAgBgBQgBgBgBgDIgBgDQgCgFAAgGIACgFIACgFQAAgEARgYQAQgbAAgFQAAgCAPgXQAOgXAAgBIAAgFIAQAMIAGAEQA2AlApAYQgHBihVAiQglgaghgigAgZhoIAAAAIACACIgCgCg");
	this.shape_108.setTransform(-47.8,-26.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#6978F3").s().p("AgyCCQgMgYgJgtQgKguAAgfIgDgYIACgEIAAgBIAFABIADgCQA0gmAXgvQBDAdARBKIAAABQgNAagQAWQgqA+g7AqIABADQAAABgFADIgBgCg");
	this.shape_109.setTransform(0,24);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A2E95A").s().p("AgDCmQAphohXiNQgCgDgDgBQgIgKgIgCQgCgDgDgBIgBgBIgRgyQgNguAAgGQAAgGgDgJQgCgJAAgLQAAgEACgGIAGgMIAEgBQADAAABAEQBEAuAxBBQA3BGAWBSQAWBWgPBVQgHArgQAoQgXhCg/gdg");
	this.shape_110.setTransform(1.3,-7.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#6978F3").s().p("AhCAXQAPgTAWgHIAAAAQAbgMAXgQIAAAAQAIgFAGgHIgBABQAFgFADgGIAOAYIALAVQgtA9g/ABIgZgfg");
	this.shape_111.setTransform(3.3,-20.1);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#A2E95A").s().p("AAGBiQgTgMgQgOIAAAAQgSgPgPgRIAAgBIgjgqQgCgDgEAAQgEgBgDADIAAAAIADAQIAAACQAAACgFAEQgLgPgFgyIACABIASAAIABgDIAAgBIAAAAQAMgEAKgJQALgJAJgKIAXAcIAAAAIACAEIABAAQALAQALARIAAAAQALAPAHAUIABABQAQATAOAWIADgDQABgDgBgEIgRgnQgKgTgKgSIABAAIgOgVQA9gGAsg6IAIANIAAAAIADAFQAKAaAIAcIAAAAQAFAVAEAUQADAagJAZQgJAXgTAQQgTAPgXABQgYAAgWgMg");
	this.shape_112.setTransform(2,-8.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#996666").s().p("Ag/BYIABAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBAAQgEgGgCgHIgCgNIAAgBQADgVASgOIAcgTIAMgPIAJgMIgDgBQgEgBgDACQgaAQgXAQIgBAAQgUAPgGAXQgFgCgDgFIAAAAQgHgNAHgNIABAAIAAgBQARgTAXgOIAAAAIABAAQAJgLASgSIAEgDIgBAAQgDgCgDABIgJADIgCAAIgYAPIABAAQgUAMgQAQIABgIIAAAAQAFgYAVgPQARgMAXgHIAAAAQASgGASgFIgBAAIAXgDIAGAAQAXgBATAOIAAgBQAUAPALAXIABAAIgCAHIAAABQgCAFgEAEIgBABQgEAFgFADIAAAAQgYAOgZALIAAAAQgdAMgSAaIAAAAIAAABIgGAGIgBABQgJAJgJAIQgIAHgJADIgBAAIgGABIgDAAg");
	this.shape_113.setTransform(-3.9,-23.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#A2E95A").s().p("AhFBqQhHgmgthBQgFgCgFgHQgFgHgFgMQAAgQAhgzQASgcAIgFQAHgEAAAMIgBAEQA9BbBPAgIgBABIABgBIAGADQADAEAAAIQAAAEgCAFIgDAGIAEgCQADgDAPgSIAAAAQARgSAFgKIAAAAIALgYQBAAnBTgkQgFARgHAPQgiBQhSAgIAAAAQgjAPghAAQgnAAgogVg");
	this.shape_114.setTransform(5.5,-19.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#6978F3").s().p("AhGAcIAAgBQAgABAiguIAFgBQAdAAAYgOIABAAQAJgFAGgGQADAjgFAgIgDABQgpAVgiAAQggAAgcgRg");
	this.shape_115.setTransform(19.7,-27.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#996666").s().p("AgoBQIgBgCIAAAAQgCgDgBgIIABgCQACgEgBgDIgCgCQADgMAMgPIAAAAIAHgIQAUgfAJgLQgDgBgDABQgaARgTAWIABAAQgQAVgDAQIAAAAQgWgBAAgaQAAgOAQgPQAIgQAVgXIAIgIIAAAAQgEgBgDACQgTAMgOANIAAAAQgRAOgHAMQgCgEAAgFQABgVApgaQApgcAbAAQAkAAAbAeQAWAZAAAZQgBAMgSAKIAAAAQgUALgYAAQgJAAgHADQgEABgBADIgBABQgZAngYABIgEgBg");
	this.shape_116.setTransform(16.4,-34.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#A2E95A").s().p("AA0D8QgLhUgdhNQgahLgphDQglg/gtg5IgHALQgJAMgEAAQgHAAAAgIIALgTQAMgTACgKIARgbQALgOAPgFIAEgBIgCACIAgAmQA7BFAvBIQAtBCAiBEQApBRgBBaIACAHQgNgCgMADQgJgFgeAFQgiAEgHAFIgIAAg");
	this.shape_117.setTransform(2.3,-6.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#6978F3").s().p("AgpA0IgWgWIgIgIQAJgWALgRQAdgsAjgBQAPAAAIgDIALAKIARAJIAIADIgJAIIgTAQIgEgIQgOgXgaADQgaATAHAcIAEAVQAAAGgCAHIgLAaIAAABIADgCIgBAIIgPgPg");
	this.shape_118.setTransform(14.1,18.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#996666").s().p("AgxBeQgPgBgOgIQgIgFgEgGIgGgKIgDgIQgGgQAIgPIACgGQABgRgGgQQgHgUANgQQAQACAJAHQAFAFADAGQAHAPgGAPQgBAEAAAGIACABQAEAAADgFQAJgMAAgTIABgDIAJgCQAPgGAZgZQAlggAIAAQAHgBAAAKQAAAggwAjIgGAFQgIgMgDAGQAGAEAAAMIACARIABAHIAAABIAAABIAAAFIAAACQgBALgCANQgCALgEAHQACAEAEABQAJgBAFgQQACACAEAAQAKABA8g7QAEgBAFgEIACAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAQAAAUgpAhQgwApgzAAIgMgBgAARAyIAEgbQAAgJgEgJQAOgKAOgSQAMgPAHgMIAAAAQADgBAMgMQALgMACAAQAGAAADASQAAAjgsAkQgeAagJALg");
	this.shape_119.setTransform(23.6,20.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A2E95A").s().p("AgBDEQg1g4gzhyIgHgRQgWgxgCgbIgDACIAAAAQgHAAAAgKQAAgYAIgXQgLASgIATIAAgDQAAgtAfgpIAjguQAcgiAJAAIADAAIABAAIABAAIABAEIAAABQAAADgHAJQABBHAgBBQAVArAWApQAXAlAZAmQAnA6AyAuQgvADggAsQgUAbgEATIg4g7g");
	this.shape_120.setTransform(0.4,-5.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_121.setTransform(-4.7,-31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_110},{t:this.shape_109}]},1).to({state:[]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_117},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).wait(1));

	// Layer 1
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAAFcQglAAgbghQgbgiAAgwIgFgBQgDgBAAgHQAAgGAIgMIAPgZQAJgUAGgVQANgwAAgwQAAgpgNhLIgPhKIAAgBIgBgfQgOgqgKhVIAAgFQAAgMACgDQAHABAGADIAAgCIgBgbIAZAcQBqCOAdBFQAdBDAAB7IAAACQAAB/gmBRQgcA+gaAAQgFAAgFgDg");
	this.shape_122.setTransform(2.8,3.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A2E95A").s().p("AgMATQgJg0AAgjQAAgNADgHIAAgBQAIAGAJAQQAHBTAOAqIABAfIABABIgGAAQgQAAgMhHg");
	this.shape_123.setTransform(-7.1,-20.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhZEJQgfgdAAgjQAAgMAEgKQAGgTAVgYIBlh8Qg/hEhlhDIgPggQAvhPALgNQATgWAHgMIAJgLQAqAPBMBNQBOBOAQAiQARAiAGAfQAHAcAAASQAABShGBgQhEBcgzAAQglAAgfgcg");
	this.shape_124.setTransform(0,-1.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag6FwQgWgIgFgLQgOgjgJgRQgGgJAAgPIACgTQAAgBgGgLQgHgJAAgJQAAgUAVgIQAVgFACgDQABAAACgIQACgLAEgGQAGgJAKgDQAOgFACgCQARgMAAhIQAAg1gIgnQgKgvghhjQgmg2gIgeQgDgOAAg7QAAgQAFgGQAGgIAPgCQABAAAAgBQAAAAAAgBQABAAAAgBQAAgBAAAAQABgDAGAAQAGAAAAABIAAADIAgAjQBoBzArB5QAfBVgCBUQgCBXgDAaQgCAbgLAbQgLAcgOAZQgOAZgiAYIgBgCIgQAQQgXAVgcABQgJgBgQgGgAhalhQAAgGgCgDQgBgDgDgBIAGANg");
	this.shape_125.setTransform(1.6,4.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AAiFfQgEgLgBgLQgHgBgEgKQgDgIAAgFQAAgLAIgKQgOALgSAAQgVAAgJgPQgFgJAAgLQAAgQAZgoIACgEIgBgDIAAgLQAAgbgDgbIAAgBIgFgXIgJgsQgLgpgNgnIgBgDIAAgCIgOghQgZg6gagwIAAACIgBAEIgCAAQgMgMgKgoQgKglAAgYIADgaIAFgeIADgNQACgIAEgHQAEgIAIgGQAGgDACACIgDgDQAAgQApAtIAPASQBLBWA6BkQAdAzATA2QALAfAIAgIAOBJIABAHQAKA8AAALIgBAGQAGANAAAKQABAGgDACQADAMAAALQgCAagHACIgKAcQgKASgNAGIgBAFQgRAugsAAQgQAAgHgXgAAlEIQgDAHgFAGIAFgEQAFgEAFgCIgDgQIgEANgACBC5IACAAIAAgBg");
	this.shape_126.setTransform(5.3,2.5);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AihDYQg4hFgohAIgBAAQgFAAAAgHIAGgNQAGgLABgGIACgQQACgJACgFIATgdQARgaAAgEIAAgIQACgEAHAAIABgDQAAgEADgCQAEgCADABQAEABACADQBNBvBCAxQAMgPAMgVIAAAAIAKgRIABgDIABgCIAmhTIABgDQgCgbALgbQgChLAngvQAogvAXgGQAYgHAZAOQACABABACQARAggNAUIAAAAQgMASgJAHIgBABIgJAHQAdgCAMAUIgBAAIAIALQAZACALANQANAOgEAcIAAAAQgHAkgUALIgIAEIgCAGIgqBjIgOAfIAAAAIgMAXIAAAAQgUAlgdAjIAAAAQg9BHhIAOQgNADgNAAQg9AAgyg9gABfCyIAAgBIAAAAgADEhrIAAAAIAAAAgAC6jdIAAgBIAAAAg");
	this.shape_127.setTransform(11,-25.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AitDvQhog+gbgoQgCgDAAgDIABgDIAAgBIgBgCQAuhdAVgTIgBgBQgCgDAAgDQAAgEADgCQADgBAEAAQADAAADABQBWBgB4AZQAcgqAfg7QAVgnAXgzQABgOAEgNQgGhMAkgwQAmgyAWgGIAAAAQAYgJAZAMIAEADQATAfgMAUQgLAUgJAHIAAABIgJAIQAdgEAMATIAIALQAZAAAMANQAOANgDAcQgFArgaAJQABADgBADQgHAXgKAQIgKAMIABACQACADgCAEQgRAsgUAnIAAABQgXArgaAjQgzBGhaAcQgbAIgdAAQhCAAhJgrgACFjSIAAAAIAAAAg");
	this.shape_128.setTransform(13,-31.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ai5D3QhLgig0goQgDgCgBgEIAAgCQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgSAGgVQAIgXALgNQAXgVARgWIAAgBIAAgBQAAgDADgDQACgDAEAAQADgBADADQBfBPCBAJIAEABQAcgpAfg8QAWgnAWgzQABgOAFgNQgGhLAkgxQAlgyAWgGIAAAAQAYgJAZAMIAEADQATAfgMAUQgLAUgJAHIAAABIgIAIQAcgEANATIAHALQAaAAALANQAOANgDAcQgFArgaAJQABADgBADQgHAXgKAQIgKAMIABACQACADgCAEQgRAtgUAnQgkBRhEAyQhEAyhQABIgDAAQhQAAhJgigACQjRIAAAAIAAAAg");
	this.shape_129.setTransform(14,-34.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("ACSDRQg6gZg0gMQhcgUhohCQhzhJg9hZIAAARIgHAAIgHgmIgFgeQAAgUAKgZQALgcAQgMQgBgCgCgFIADgIIAGgBQBiBVAYASIBdA8QAhAWBaAhQBeAfAlACIAIgXQAJgPAWAAQAWgBAJAMQAIAIAAAUQAAAGgCAGIgKAUQASALAXAAIA4gCQAeAAAEAUQACAMgEAYQAHAkgFAJIgNASQgZAMgEAEQgLALgkAKQgeAIgOAAQgeAAgtgUg");
	this.shape_130.setTransform(23.7,-7.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AirCVQgYgVgOgZQgOgPgbgoQgVgdgFgLQgYgXgHgeQgEgQAAgpIADgkIgCgCQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBIAHgOIAIgOIgCgCQAAgaAwA1IA5BEQArAnA8AnIAsAZIAJgHIARgRQAAgIAFACQAJgKAEgIQAQgfACgIIALgWQADgGAEgBIABgBIAGgEIAHgIIAKgQQAIgbAOgYQAGgLANgFQAIgEAKABQANABAGAKQAMAXgFAYIgEANIArgCQAmgHAmgIIASAJQAVAMgDAaQAHAHAFAIQAFAKABAMQACANAAAOIgIAIIgMACIAFAOQAEAHgFAHQgJANgOAIQgRAMgVABIgpAIIgiABQgLAUgwA1QgcAYgZAOQgtAahDAAQg8AAgwgrgABgBrIAAAAIAAAAgAkkikIABgBIgBgBIAAACg");
	this.shape_131.setTransform(20.3,-12.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AiiCgQg3gsglg+IgCgBIgYg2QgFgNAAgnIACgTIADgUQAFgOAHgKIgBgDQAAgHAHgBIgCgCQAAgUArAnQAzAyAQAOQAcAXA5AjIAeAUIAFgEQAHgNAFgOIAAgDIADgJIAHgYIAFgPIAHgPIAAgEIATg3IAHgDIAIgHIAMgNQANgaARgWQAJgJAOgDQAIgCAJACQANADAFALQAHAZgJAXIgGAMIAqAFQAnAAAngCIAQAMQATAPgHAaQAGAIADAIQADALgBAMIgDAcIgIAGIgNgBIADAOQACAJgGAGQgMALgOAGQgTAJgVgCIgqAAIgCAAQgXAsgdApQgwBEhQAIQhLgCg5gvg");
	this.shape_132.setTransform(16.3,-17.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgaFYQgIgEgHgIQgqgQgBgEQgXACgMgJQgMgIAAgNQAAgRAIgOQAKgUAWgCQgJgDgFgLQgEgJAAgGQAAgSAPgGQAWgFAMgEQAxgUADhQQADhPgihHQgjhIgugjQgCANgFADQgEgIgDgPQgDgOAAgIQAAgiAJgoQAJgmALgTIABABIABAIQBqBJBBBzQBJCAAACXQAABxgyA9QgnAvgtAAQgSAAgMgFg");
	this.shape_133.setTransform(3.3,3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AikCXQgegfgxhuIAAAAIAAAAIgIAHIgEgJQAGgTAGgeQALg8AAhEQAAgRAGgEQACgCAEABQAFgDAHADQAdBNAvBGQAsA/AvAqQAPgIBGg4QBJg3AgAAQAyAAAfAhQAaAZAAAeQAAAOgEAOQgFAWgOAJIgjARIgcANQgFAAgHgCIgFgDQgHAZgWAPQgUALgUAAIgwAPQgsAOgcAAQhWAAgqgrg");
	this.shape_134.setTransform(14,-12.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgtDCQg3gChOg5QhNg4gRg8IgCAKIgIgDQgFgDAAgNQAAgYAWg4QAPgoAQggQAFAEgDAMIAAAAIADgHQAZAgAeAjQA9BGBNAqQASgXAhgjQAeggAVgdIgCgUQAAgoAvgeQAugeA8AAQAkAAASATQARAQAAAaQAAAIgIAMQgJAOgKgBIAJAJQAEAFAAAHQAAAIgLAPQgLAQgNAIQgOAIgQAYQgRAZgqAwQgqAwgsAhQg1AngyAAIgGAAg");
	this.shape_135.setTransform(12.9,-16);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AhaEMQgUgFgUgGQgVgFgUgGIgngPIgbgOIg6ghQgTgLgPgPIAEgBIABAAIgBgHIAHgVQAAgHAkgvQATgZAIgDIACgDIAXAOQAYAPAaALQA8AbBAAFIAtAAIAPgXIAigyIAVgfQAWgjAXgsQACgOAFgNQgChMAoguQAogwAXgFIgBAAQAGgCAFAAQANgCANAFIAMAGQADABABACQARAfgOAUQgLARgIAIIgCABIAAABIgJAHQAGgBAFABQAUACAJAQIAHALQAZACALANQANAOgEAbQgIAsgbAHIAAAGQgJAXgLAOIAAgBIgLANIACACQABADgCAEIgLAYQgPAegQAcQgpBOhGAuIgOAIIgJAEIgSAIQgdANgiAFIgiACIgKAAQgbAAgagEg");
	this.shape_136.setTransform(15.4,-36.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AiiCyQhDg7gdhbQgBAHgDADIgGAAQgCAAAAgHQAAgeAPgQQAZgeACgGQACgEAFgDQAKgGAPAEIAAgBQAFAABIBGQBGBGAQAAQAaAAA5hOQANgPANgeQAMgcAEgDQAWgVAFhLQAEg9AhAAQAWAAAMAUQAKAQAAAZQAAAKgHAiQAJAAAPAFQAQAGADAEQACADADAVIAOAKQAGAGAFAMQAFALAAAFQgOAigQAKQgEAEgLAUQgMAYgPATQgtA2guAnQhUBJg9AAQg/AAg+g3g");
	this.shape_137.setTransform(13.8,-21.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AARCnQhVgJhLgsQhNgshWh6QgBgDAAgEIgEAJQgHAAAAgHQAAgWAXgmQASgfARgFIgBgDQAAgEABgDQAGgDAGADIADAAQAEABACADQCmDkCwgxIAAAAQAbgHAWgXIgDgEIAAAAIgCgCQgQgSAEgOQACgPAYgKIAFAAQARACALAJQgDgUgKgTQgOgaAGgQQAFgSAagGIAEAAIADABIAQAKIADAAQAhgFARAhIABAAIAEACQAmAegFBGIAAAAQgEA7gWAYIABAFQABAEgDACIgLANQglAmgvAUIgBAAIgKAEIAAAAQhCAZhEAAQgRAAgRgBgAkwhBIgBACIACgCIgBgBIAAABg");
	this.shape_138.setTransform(19.1,-12.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("ACqDbQgfgFgbgMQgCgFgEgCQgGgChKgPQhHgPgqgUQgJgEhZg0Qgtgbg8hBQg3g9gCgOIgGACIAAAAIAAgCQAGgdAchGIAKgZIAIgUQBbBTB+BBQCOBKBagFQAIgJAFgYQAIgTAfAAQALAAAHAMQAIANAAAVQAAAKgMAbQAbAHAOAAQAnAAAkgEQARACAAAhQAAAaACAIQAFAUAAALQgDAOgJALQgFAGgMAFQgOAEgFAGIgRAVQgPASgSAFIgcAHIgIABQgPAAgjgGg");
	this.shape_139.setTransform(24.7,-10.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhfC9Qhbg1g/htQABgZAMgjIAahIIAMgeQA5BAAoAfQAgAYBRAtQAZhJAKgPQAJgNAlgxIAKgpQAJgmALgJQADgCALgBQANgBAGgCIAJgFQAIgEAGAAQAjAAATAYQARAWAAAhQAAAXgXA2QgEAJgFAHQgTAVAAAKQAABVhABTQg+BOg3AAQgyAAg/gkg");
	this.shape_140.setTransform(14.2,-14.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AApDxQgFABgHgHQgGgGgFAAQgVAAg4g7QgdgegcgiQgIgHgkhDQghg+gNgbIgEADQgPgPAAgeQAAgKAIgzQADgWASgiIAVglIAFAFIAHAAQAGAAAJASQAaA1AlA+QAWAlBDA5QBEA1ASAAQAEAAAEgEQAEgDAFAAQAcgBAAAMQAAAGADALQAEALAAAGQABgCAAgHQABgWABgZQgBgNAKgGQAJgHAMAAQAQAAARASQASAWAAAgQAAA+gbA1QgoBPhWAAQgXgMgJgBg");
	this.shape_141.setTransform(11.6,-3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAaEhQgOgagCgVQgSiNg0h3Qgrhjgwg4QgSgKgGgiQgDgTAAggQAAgIAJgNQAEgHAQgUIABgFQABgCAHAAQAVAAApAsQAqArAoBDQBoCmAPCMQAGgOAJgIQAHgHAHAAQASAAAGAgQADAQAAAnQAAAFgFASQgFARAAAFQAAAngkAZQgdAUggAAQgbAAgTgjg");
	this.shape_142.setTransform(7.1,0.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhyGBQgLgJAAgRQAAgNAJgPQgVgJgFgMIAAgFQAAgRAJgJIACgCIAHgDIAngUQgVgEgOgPQgMgOAAgMQAAgRBAgVIgUgnQgIgTAAgLQAAgWATgKQAMgGANAAQABAAAPAJQAPAKAFAGQAKgZABg6QgSiDgFgTIgCAOQgUgRgPhUQgMhGAAgwQAAgJAKgZQADgIAKAAQAQAAAbAmQAaAlA4BhQA5BhAHA2QAIA1AAAyQAAC/hWBfQg+BHhYAAQgMAAgJgHg");
	this.shape_143.setTransform(-1.3,6.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AhrEzQgqgIgogTIglgTQgZgNgZgOIgggUQgHAJAAgMQABgLAHgJQAQgWAVgSQAJgJAHgMIAEgHIAGgKIAEgJQAFgDAFADQAqAZAwALQAWAGAWAEIArAAIAFABQAggdAWglIAXgiIAFgFIACgGQAVgoARgqIACgHIAEgVQADgIAEgIIAVgiQALgUAJgWQANgeAKgdQANgmAUgiIAEgEQAQgKAQgBQATgCALARQAGAJADAKQADAMgBAMQgBAOgEAOIgPAxIAPALQAJAIAGAKQAGAIADAKQADAFABAHIAAALQAQALAJAQQAFAHABAIQABAJgCAJQgDAKgFAJQgJAQgQAIQgIAFgJADQgMARgOAPQgLANgJAPIgaApIgOAWIgMARQgRAagVAZIgdAiQgRATgWAPQghAVgjAMIgTAFQgWAFgWAAQgSAAgSgDgAjwB4IABgBIgBgBIAAACgADaggIABAAIAAAAIgBAAgADWg3IABgBIgBAAg");
	this.shape_144.setTransform(16,-44.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AkRGOIgCgBIgEgCIgCgEIgEADQgKACgFgFQgNgPgGgRQgFgNgLgIIgLgNQgFgIACgJIADACIACgFIHEnlIACgTIAFgSQAIgWAWgLQAHgEAIgDIABAAIADgEIAzg/QASgWAVgTQAOgOAPgLQAQgMAUAIQAIADAHAFQAFAEAFAFQAEAGgBAKQAAAJgDAJQgEANgHAMQgOAWgPAVIAHAGIADAEQAHANACAOQACANAAANIACACIABABQAGADAFAFQAJAKACAPQABAHgBAGQgCALgGAKQgEAIgHAGQgGAGgHADQgIADgIACIgNAPIgLAMIhjBXInAGOIgEAAgAlTFBIAAgBIgBAAIABABg");
	this.shape_145.setTransform(21.9,-56.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgWFOQgFAAgIAFQgKAFgFAAQgoAAAAgeQgBgTAHgMQAJgOAWgQQgPgEgHgEQgMgIAAgUQAAgLAGgKIAugSQAEgOAHgmQAIgtAAgaQAAg2gSg6QgahQg0g3QABAHgDAGIgBACQgDgKgOhGIARg6QATgvgBASQBIARBLCSQBUCcAACVQAACTgsAzQgZAcgsAAQghgQgKAAg");
	this.shape_146.setTransform(3,4.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("ACuEaQgPgRgGgGQgSgPgNgJQgjgTgbgRQgyggg6g5QhkhdgMgOIhfh9QgBAFgEADIgHAAIgBAAQgBgCgBgGQABg7AOgyQAOg1AWgFIABgDQAAgBAHAAQAtA1A0A8QBqB1AqAdQB6BOAzAdQAJAFAHAGIgDgHQAyBBAABGQAAArgaAVQgVASgfAAQgJAAgJgMg");
	this.shape_147.setTransform(15.5,-2.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhACCIhBgKQgegGhCgmQhCgmgggaIgDAEQgDgFgOgFQgIgEgBgNQAAgcAPglQAVg1AlgDQA8AtAiAUQA9AjBMAAQBfAABPgwIA0ghQAdgPAaAAQA6AAAiAlQAcAfAAAsQgBAHgPAKIgaASQgTAPgQgBQgOgFgHAAQgGAAgGAJQgGAIAAACQgbAWguAVQhdApgzACIgXAAQgjAAgagDg");
	this.shape_148.setTransform(23,-17.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AiPDfQg3gKgygVQgqgSgngZIgcgQIgEgUIABgBQADgGA9hEIADgDIANgOIAbAMQAfAMAgAKQAdAKAeAIQAqALAsgDIAHADIAagWQAVgVAUgaQAZgeATghIADgGIATglQAIgPALgMIgCgFIAHgKQAMgQANgOQAQgRATgPQAUgOAVgIQAWgLAZgCQAagDAZAFIARAGQAKADAHAJQARAVgMAWIgGAIQgEAGgGAEQgFAFgHADIgJAEIgggCQAEAMADAMQACAMABANIAIAIQAMAOACASQABAHgBAGQgGAegbALIgMAGIgMAHQgSARgQATIgBABIgMASQgDAEgDADQgTAPgRAUIgNAOQgSASgTANQgkAagkASQgwAWgzAGIgXABIhJgJg");
	this.shape_149.setTransform(22.2,-35.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AlSEXIgEASIgGAAIAbh5QBaAJBWgeQBPgcBDguQAXgQAVgSQA4gvAlg9QAOgZALgZQAGgNAOgGQAGgEAHgDQAMgXAJgaIACgIQABgNAEgNQAHgYABgVQAAgQAJgMQAKgMAPAEQAYAJAHAaQAGAYgCAaQgCAZgLAYQAZANAGAcQAPABAIANQAFAIABAKQABAQgCAQIgEAQQgFANgMAJQgKAHgNACIgDAIIgFAHIgHATIgNAZQgFAJgiAqQgiAphQAyQhRAzg0AYQg2AYhgAOQgbAEgaAAQhCAAg6gYg");
	this.shape_150.setTransform(20.3,-49.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AiiCRQhdg+g2iLIgCgCIgDgEQAmgrAUgNQALgHAMgBQACAFAAAEQAVBDBIA2QBNA9BPAAQCMAAAniDQAKghAKg7QALgpAXAAQANAAAHAUQAHARAAAWQAAARgCAWQgDAdgEACIAEgBQAGgBAGAAQASAAAHANQAFAIAAAKQAAAfgGAHIgGAHQAAAFAEAFQADAGAAAFQAAAVgRATQgXAYgIAVIgLAPQgOANglAWQhHAohPAAQiBAAhTg3g");
	this.shape_151.setTransform(17.5,-21.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ADCDzIgHgFQgJAJgYAAIgHgBQgHADgMABIgUgDQhegShJg7Qg6gsgsg6Qgmg0ghg3Qgjg/gFhEIgHALIAGgOIABgEIACgEQANgTAmgsIAGgHIADgEQA0BUA1BNQA6BTArAuQAcAiAiARIADABQANAHAOAEIAKAAIABAAQAKgPASgFQALgEAJAEQAGgIAQgKQAYgOAXgFQARgDALAJQAMAKAAAUQAAALgJALQgOASgbgCQgKgCgLABIgFABQAIACAEADIADAAQAKgCAEADQAHgCAMABQAbACAKAKQAHAGAEAOQAEAMAAAKQABAHgEAHQgHAMgTACQAHALAAALQAAAHgGAKQgKAPgTAAQgMAAgRgNg");
	this.shape_152.setTransform(16.2,-6.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("ABuFQQgJgFgDgKIgCgGQgNAAgKgDIgBABIgMgHQgVgIgLgGQgEgHgDgHIgHgTIABgCIgDgOQgDgSAAgHIgCAAQgGgBgEgDQgUgJAAgVQAAgQAPgFIgDgUQgJhJgZhEQgahFgqhAIhHhyIACgEIAGgIIAhg0IANgWIAEgHQA7AvAqA7QAjAyAgA0QAsBHAaBLQAUA8AHBBIAAAOQAMAFAGALQADAHABAJQABALgBALQAZAUgCAfIgBALQgEALgKAHQAJAUgTAOIgJAHQgNAJgMAAQgHAAgIgDgAAaD6IgBgGIAAgBIABAHg");
	this.shape_153.setTransform(6.6,2.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("ABlDFQhWgBhLgnQhSgpg/hBIhghjQgCgDAAgEQAAgDADgDQACgDAEABIADAAIgKgIIACgEIABgFQAAgMANgPQAWgZAEgFQANgaARgSQAMgNAEACIABgBQADgDAEABQAEAAACADQAsAzArApIAAABQCfCXCHgIQgVgEAAgGQAAgHAJAAQADAAAKADIAMADQgDgFAAgEQAAgKAOgNIAZgUQADgBAWgbQAMgPACAIIAAAAQAEgCADACQAEABACADQAzBchFBQQhABLhiAAIgCAAg");
	this.shape_154.setTransform(-32.2,-26.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AAVDAQhCgZgigYIgMgJIgBgBQgdgVgnghIgrgoIgBgBIAWgCIgBgIQBHg/AegRIgBgCIADABIADgCQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAABIAAABIACACIAAAAQAAgEADgDQACgCADAAIAAgBIAQgUQATgYAIgbIAMgkQAHgUAJgNIACgCQACgDAEAAQAEABACACQAyA1AtA4IAAAAQArA1AeA6QAbA2gNA6QgJAmgjAQIAAgBQgkATgnAAQgeAAgfgMgAAHi5IABgBIgBAAIAAABg");
	this.shape_155.setTransform(-9.6,-11);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AiPDgQhUgag7giQgDgCgBgDIgBgCQgSgBgHgWQgDgKAAgUQAAgNACgJIAHgaQAHgWAHgMIAEgGQACgDADgBQADgBAEABIDbBYIAAAAIAAAAIAFgFQAfgaAlg5IAEgIIABgBIAAgBQATgcATgiQgygSgCgWIAAAAQgEgbAigOIAAABQAVgKAYASIACgCIAAgBIABAAQgBgIASgbQAOgUAHgIQAJgLAbgNQAegOAZAAQAEAAAMADQARAAAKAXQAHAPgBAQIAAAFIAAABIgMARIgIAEQAJAFAGALIACgBIABAAQAGgDAIAAQASAAAQAUQAQATgBAMQAAAPgOAOIAAABQgOANgQgBQgIABgMgKIgBAAIgFgFIgCAEQgCAHgKASQgQAagRAIIAAAAQAAADgBADQgRAdgXAjIgBABIgxBCIgBAAQgmAyhBAfQgiARgpAAQgkAAgogNgABhCAIAAAAIAAAAgAEmhIIAAgBIAAAAgACpiTIgDACIABAAIAFgDIgDABgADAiXIgFgBIgBAAIAFABIgBAAIACAAIAAAAIAAAAg");
	this.shape_156.setTransform(20.5,-31.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AiYDOQhUgbg7ghQgDgCgBgEIAAgCQgTgBgHgVQgDgLAAgUQAAgNACgIIAHgaQAHgXAIgMIAEgDIAAAAQABgDADgBQAEgCADABIDWBSQAEACABADQAqgmAkg4IAAgCIABAAQASgdASgiIgCgDQgKgLgFgMIgBgEQgCgCgBgDQgDgKAAgKQAAgIAGgOQABgKALgIQAMgIALAAQAFAAAEADQAJAAAIALIACgDIAEgGQAIgJANgJIABAAIABgBIABgBIABAAIABgBIABAAIABgBIABAAIABgBIgBAAIAEgCIAFgCIAGgDQALgFAKgCIAQgDIACgBIABAAIABAAIACAAIAOgBQAFAAALADQAJAAAHAHIAKgCIgBAAIASgCQASAAAPAOIAAAAQAPAOAAASQANADAHASIAAAAQAHAPAAAQQABASgXAHIAAAAQgKADgKAAQgIABgNgJIgEgDIgIAQIgBAAQgKATgUAYIAAAAQgOARgPAHIgBAFQgQAbgYAiIgBACIgxBBIAAAAQgnAzhAAfQgjAQgpAAQgkAAgogMgABZBuIAAgBIgBAAgADRgwIAAAAIAAAAg");
	this.shape_157.setTransform(21.4,-29.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AhpDgIgBAAIgogLIAAAAQgVgFgTgHIgBAAIgkgQIgBAAIgigOIAAAAIgggRQgDgBgBgEIgBgCQgTgBgGgWQgDgKAAgUQAAgNACgJIAHgaQAHgWAHgMIAEgGIABAAQABgCADgCQADgBAEABIDWBUQADABACADIAFgFIANgMIAAAAIAZgdIAAAAQANgQAKgSIAAAAIAMgPIAAgBIAohCIgCgUIAAAAQgBgQAEgOQAEgQALgMIAAAAQAJgLAOgEIAAAAQAHgDAHgBIACgDQABgBAIgEIAPgIIAAgBQAZgMASAAIAHABQATgQAFgDIAAAAQAPgKAUAAQASAAANANIgBgBQAOAMgBAPQABAMgOALQAQAAAPAGIABAAIAIAEIADADQAPAYgHARQgFARgcAIIgBAAQgIABgJgDIgLgEQgEAUgPAbQgQAbgaAOIgBADIgpA/IgBABQgOAXgRAVIAAgBQgSAYgUAVIgBABQgQASgVANIAAAAQgVAPgYALIAAAAQgYAMgaAEIgBAAIgXABQgRAAgSgDgAi1C4IABABIAIACIgPgFIAGACgAkgCKIgEACIAEgCIAFAAIgDgBIgCABgAhTB8IAFgBQgDABgCAAIgEgCIAEACgAhPBmIAAAAIAAAAIgFgCgADQh6IAAgBIAAAAgACQh/IABABIgBgDIAAACgABSiKIAAAAIAAAAg");
	this.shape_158.setTransform(20.9,-30.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AicDZQgDgCAAgEQAAgDACgDIgEAAQgCAAgEgHQgEgGAAgCQAAgJgehGQgfhGAAgRQAAgHADABQgCgDAAgEQABgDADgCQADgDADABQCNAXB8gYQAIgdgIggIgDAEQgEAHgCAAQgGAAgEgeIgIguIgLgmQgGgZAAgOQAGgMADAAIABgCQACgEADAAQAEgBADACQA1AgA8AuIAAAAQA/AvAbBMQAcBOhJBCQhFA/hfANQhSAMhUAEIAAAAQgDAAgDgDgAjaAtIABAAIgBgBg");
	this.shape_159.setTransform(-10.8,-11.6);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AALCeIgBAAQhXgMhMgpQgXgMgWgPIAAgBQgxghgogrQgCgBAAgEQAAgEADgCIAEgCQgCgFAAgGIACgFIACgFQAAgEARgaQAQgbAAgFQAAgCAPgXQAOgXAAgBIAAgFIAAAAIAAgBQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIAFAAIAEgCQAEAAADACQA/ApA2AfIACAAQClBcBTgHQgPAAgLgGQgKgGAAgJQAAgTAqgyQAcghAKAFIABgBQACgCAEAAQAEAAACADQANAOAbAiQAdAjABBGQACBLhjAfQhDAVhBAAQgaAAgYgDg");
	this.shape_160.setTransform(-28.5,-22);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AhDFvQgEAAgCgEQgCgDABgDIACgEQgMgYgJgtQgKguAAghIgDgXIABgFIgEgEQgCgDABgDQAAgEADgCQA0gmAWgvIABgBIAAAAIAAgBQAnhZhDh9IgBgDIAAgBIgFgKIgNgaIABgDIgBgFQgCgCgDgBIgBgBIgQgzQgOgtAAgGQAAgGgCgKQgDgJAAgKQAAgFADgGIAFgMIAEAAIgBgEQgBgDACgEQACgDAEAAQADgBAEACQBHAwAzBFQA5BIAXBYQAXBYgPBZQgPBZgzBMQgtBEhAAsIgFABIgCAAg");
	this.shape_161.setTransform(2.2,1.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("ABFDCQgdAAgagPQgVgMgRgPIAAAAQgTgRgQgRIAAgBIgfgnIAAACQAAACgFAEQgLgPgFg0QgFgCgBgCQgEgDgDgFIAAABQgGgIgDgKIgCgKQgOgDgIgOIAAAAQgLgVAJgTQgGgPADgOIAAgBQAHgeAagTQAUgOAZgHIAAAAQATgHAUgFIABAAIAYgEIABAAIAHAAQAagBAYARIAAAAQAYASANAaIABABIAAABQAOASAMAXIAOAaIABABIANAYIAAAAIAEAIQALAbAIAbIAAAAQAGAVAEAYIAAAAQAEAfgLAdQgLAbgXATQgXAUgeAAgAgMCLIAAgBIgBAAgAA7h9IABABIgBgCgAAbiiIABAAIgBAAg");
	this.shape_162.setTransform(0.3,-14.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AhaCuQhOgqgxhJQgCgDABgEQAAgEADgCQADgCAEABIABAAQgFgHgFgNQAAgQAhgwQASgcAIgFIAAgBQABgEADgCQADgCAEABQADABACADQBBBgBTAfQAKgNADgGIAAAAQAGgLAMgfQgDgFgBgJIgBAAQgkABgCgqIgBgCQgMgTAAgSQgBgcAxgiQAvgfAhAAQAtAAAgAkQAbAgAAAeIAAADQACACABADQANBQgfBGQglBYhZAjIAAAAQgmAQgjAAQgtAAgsgYgAgNA/IACAAIgCgBgAA6ABIAAAAIgBAAIABAAg");
	this.shape_163.setTransform(6.7,-25);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AB6FVQgJgEgDgKIgCgHQgNABgKgEIgBABIgMgGQgVgJgLgGQgEgHgDgHIgHgSIABgCIgDgPQgDgSAAgGIgCgBQgGgBgGgCQgSgKAAgUQAAgRANgFIgCgUQgIhIgZhEQgahGgqhAIhLh4QgIAMgEAAQgHAAAAgIIAKgTQAMgTADgKIARgbQALgOAPgGIgFgFIAEgCQBDAzAwBCQAjAyAgA1QAsBGAaBLQAUA9AHBBIAAANQAMAFAGALQADAIABAIQABALgBAMQAZATgCAgIgBAKQgEALgKAIQAJATgTAOIgJAHQgNAKgMAAQgHAAgIgEgAAmD/IgBgFIAAgBIABAGIAAAAg");
	this.shape_164.setTransform(5.4,1.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("ABRE5QgSgEgRgFQgFgBgEgDQgRgJgPgNIgpgqQhEhGg7hMQgxhBgRhLIgFgcQgEgXACgWIAAAAQgHAAAAgKQAAgYAIgXQgLARgIAUIAAgEQAAgtAfgoIAjguQAcgiAJAAIADAAIABAAIAAAAIABAAIABAEQAZBGAcBFIAXA2QAbA6AhA3QAvBRBWAoIAGADQAoghAQAAQANAAAHAKQAFAIAAAGIAAAGQAKgKAHABQAMgBAHANQAFAJAAAJQAAAOgHAUIgFAKQAPgCAAASQAAAYgmAnQgyAzhDAAIgTgBgACYD8IAAAAIAAgBIAAABg");
	this.shape_165.setTransform(10.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_165}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl134armLgmcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AgrBAQgXgWAAgHQAAgeAWgnQAbg1ApgOIArAwQgoAYgRAcQgPAcAAAwQAAAKAEARIgqgmg");
	this.shape.setTransform(53.9,63.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("Ah6BfQgVgdAAgmQAAgqAXgaQAcgfBCgNQAjgIAEgEQABgCAQgBQAHABAFADQAIAEgBAGQABAOgvANQgtANAAAWQAAAuAsAAIBLgEIACAMQAAAIgHADQgNAJgPABIgXAAQgOAAg8gcQADAGgJAlQAAAYAaAKQAZAJAogEQAHgBgCABIgJACQgGABACAGQADAGgWgCIgagBQgFAAgFgDIgJgEQgIgEgKgLQgJgJgFAAQgGAAgLgKIgMgMIgDAEQAHAZAUAQQALAJAdATIgMAEQgxgKgYglgAAECJQAfAAAKgUQAOgbASgIIgEAAQgvAHgLAAQg1AAAAgXQAAgFABgDIAEgGQAJAHAjANIAtgGQAsgLAAgZQAAgLgEgVQhXAFgJABQgWAAAAgZQAAgNAPgEQAHgCAQAAQAIgCAegNQAagMAGABIgEgGQgGgBgKADQANgSgPgQQgPgPgRAAIgLAAQgDgBgBgGQABgIACgDQADgEAGAAQAKAAAMANQAMANAVAjQAKARAcAZQAWAbAAAtQAAArgWASQgZAWhSAVg");
	this.shape_1.setTransform(69.7,67.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2E95A").s().p("AghDuQgthWgNgmQgNglgOhBQgPg/AEglQADgkALg0IAQhEQAIgfAXgjQAXgjgCgCQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIADAAQAGAIAEAPQAEAMAAADQAAAzgNAQQgOAQAAAOIACATQABANgBAGIgDAHIAAAHQAAAyBDCKQBHCPA0AzQg1AsgMAPQgSAXgOAyQgeglglhMg");
	this.shape_2.setTransform(42,29.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6978F3").s().p("AhCAVIAFg6QACAaAkANQASAHAQADQAIAAATgDQAVgDAIgDIgFAjg");
	this.shape_3.setTransform(10.4,-6.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#996666").s().p("AhTBiQgfgUgCgVQAjgDApATQAkARAJAQQgLAFAAABIgnACQgMAAgagQgAAUBbIgfgYQgughg8AFIgBgVQAAgKADgJIAUgCIATgCQASAAATAFIAfAJIAEgGIACgDQACgHAAgGQAAgKABgFIAKgRQAIgNAAgGQAAgKgFgGQA5AFAaAiQAWAcAAAtQAAAlgPARQgPARgfAAQgTAAgTgMgAhKgXIggADQAHgUAHgIQAHgJAIAAQARAAASAIQAbANgIAYQgegLgVAAgAgnhCIgWgIIAIgIIAKgFQAEgBAHAAQARAAAKAKQAFAHAAAIQAAAJgDAGIgIAHQgSgUgKgFgAAMhjQAIAAglgGIASgHIAOgBQAGAAAKAHQAJAHAIAIg");
	this.shape_4.setTransform(16.5,-18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2E95A").s().p("AhIBJIgDiFIAgABIAHACQAhgHAggIIAAAJIAAACIACAQQAHA6AmAsQgvAKgvAEQgTACgRAAIgSAAg");
	this.shape_5.setTransform(31.3,24.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6978F3").s().p("Ag5gYIgCgQIABgOQAUgHAkgOQgCANADANIAIAoQAGATALASIAMAPQAFAFAGADIANAGIgiAJIgjAKQgogrgIg5g");
	this.shape_6.setTransform(42.1,22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996666").s().p("AAFB6QgEgBgCgDIAWgZQAMgMAGgOQAIgSANgMIAwgBIgDAQQgEAWgRASIgBAAQgIAMgNAIQgUAMgVAAQgIAAgIgCgAhBBsQgLABgHgJIAAAAIgHgKQgOgWgGgaIgHgcQgEgOAHgRIABgCIAAAAQAMgZAUgRIADgCIATgSQASgRAVgKQAKgFAMABIgNAIQgbARgBAgIABADIAEADIABABIAGAEIADAAIADgCIARgJQgKAMABAQQACAWATAAIAZgSQAngPAlASQAIAJACAKQACAHgGAGQgDAEgFABQgVAIgWgFQgIgDgFAFQgIAHgGAIQgJANgIAPIAAAAQgPAWgSARIgFAAIgDACIgCAEQgHACgIABIgbgFgAANgxQALgHAKgCQAggHAWAUIgVgFQgXACgYAMIgCAEIgNAHQgDgPALgJgAAJheQAcgHAWAWIAAAAQgSABgSAFIgIgGIgiALQAJgVATgFgAhBhxIAWgJIALgBQgbAPgVAWQgBgSAQgJg");
	this.shape_7.setTransform(55.4,15.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2E95A").s().p("AhHAkIAAgLIABgdIADgfIACgQIAZAQIAAAAQASALAUAGIABAAQARADAUgEQASABASgEIgIAdIgIAeIADAPg");
	this.shape_8.setTransform(15.2,12.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6978F3").s().p("AgJArIAAgBQgRgFgQgJIAAAAQgQgJgPgMIAMgyIAJAHIAAABIAFADIAAAAQAAAEADACQAXAWAbAIIACAAIAJABIAPAGIADABIAJABQAPADAPgDIgIAZIgEAAQgSAEgTAAIgCAAQgKACgJAAIgNgBg");
	this.shape_9.setTransform(16.3,4.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#996666").s().p("AAjCAIhGgwIgEgCIgEAAIgtANIgLgGQgHgFgEgGIAAAAIgDgEQAEgVASgNQAKgHALgFQAHgDAHgCQAHgBANACQAOABAPAFQABgDAAgCQgBgEgCgBIAAgBQAFgQgFgPIACgCQADgBABgDQAGgOgBgQQgCgUgMgPIAAAAQgZgXgeALQAEgGAHgEIABgBIAFgEIARACIgBAAQAUAEARAJQAGADAGAEIAAAAIAIAKQACADADABQACABADgBQADgBACgCIABgCQANAIAKALQALAMAIAQIAAgBQALAUAKATQAJAUACAWQADAbgGAaIgBADIgIANQgHAMgJAEIgOAGIgkgHgAgICEIgBAAIgIgBIgRgGIgCgBIgIgBQgRgGgPgKIAigKIA0AkIgGAAQgFAAgHgBgAhUggIANgDQATgFAPANIAAAAQAPAPgEASQgagJgaALQgNAGgKAHIgBAAIgCACQgBgeAVgZgAgZgoIAAAAQgWgUgdAHIgOAFIAAgGIAAAAQABgIAFgIQAIgGAJgEIABAAQAXgMASASIABAAQAJAKABANIAAAAQAAAKgEAJIgHgIgAgfiCIAAAAIAGgEQAUABANANIADAEIgBAAQgTgKgWgEg");
	this.shape_10.setTransform(22,-8.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2E95A").s().p("AhZBSIADh6QA3gRA1gaQACBRBBAmQgvAWgrAPQgjALgdAAQgMAAgMgCg");
	this.shape_11.setTransform(26.9,20.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6978F3").s().p("AgDBGQhBglAChNQAbgOAagQQACAiAQAgIABAAQADAHATAQQAWAVAIgBIAJACIAAABQgiAUghARQAAgDgDgCg");
	this.shape_12.setTransform(37.6,15.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#996666").s().p("AgxBqQgKgDgFAAQgDgBgPgOQgQgPgDgFIAAAAQgSgfAAgiIABgGIAAgBIAAAAIACgLQAAgFAIgKQAJgMACgIIAEgCIABgBIACgCIAUgSIAAAAIAVgVIAGgGIAFgEQgBADABADQgBADgGALIgBAEQAAAWAEAJIAAABQAGANAPADIAEAHIAAAAIADAEIgBgBQAEAFAFADIABABQAFgGAKgHIAGgEQAKgLAHgFQAQgJAYAAQASAAAPAKIAAAAQAOAKAAANIgDACIgCABIgBAAIAAABIgGACIAAAAIgQAGIgBAAQgTAKgIAFIgBAAQgHAIgJANQgLAQgEAMIAAAAQgGAVgTAOIgBAAIgFAEIgBABIAAABQgVAOgWAAIgGgDgAAyA8IgBAAQAEgKAJgOQAHgLAGgHQAHgFAQgIIAOgFIABAQIAAAAQAAArgiAVIAAAAQgWAOgfACQASgQAGgUgAgFgpQAAgQAPgLQAQgLASgBIAXAGIACAAIAAABQgbABgSALQgLAHgPATIgDgGgAgZg3QgDgHAAgPQAIgQAAgFQABgCAIgCIADgBIABgBQAHgDAHAAQAGAAAKAFIAAAAIAKAFQgRADgQALQgSANgEASIgDgDgAhShdQAIgLALgEIABABIgVAVIAAAAIgFAFQACgGAEgGg");
	this.shape_13.setTransform(50,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AggF0QhKhEgXgjQhTh6gqh8QgnhwAAhiQAAhHAjhfQAihdAXAAQAGAAABABIACADQAGAIAEAPQAEAMAAADQAAAzgNAQQgOAQAAAOIABATQACANgCAGQAKAEAQAyQAbBPApBRQAeA5A5BQQAzBHAeAdIBGgMQgEgVAIgOQAKgQAXAAQAVAAAMAPQALAMAVArQAHAPAeAaQAbAgAAA5QAAAugqAlQgsAohCAAQgGAAgLgFQgLgFgFAAQgFAAgNAIQgMAHgGAAQgaAAhPhLg");
	this.shape_14.setTransform(56.7,38.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah+B/QgMAJABg8QABg8AIgdQAIghAEgOQAFgNAPgJIARgKQAGgGAmgcQADgBAKgKQANgJAUAAQAZAAARATQAdAhAHAFQAUAPAOAeQAPAgAAAfQAAA1ggAWQgdAUgzgLQgEAdgBAPg");
	this.shape_15.setTransform(16.4,-17.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjgCiIgDiiQA4gHA5gPIAAAAIAggKIABAAQAEAAACgDIAjgNQAGgOAIgMIATgTQgHgXANgRQANgXAcgFQASgDARAIQAFACAFADIATADQANABAHANQAgAIAPAcIADAGIAGAGIAbAXIACADIAAAFQAPAMADASQADATgOALQAAAbgMAZQgMAagXARQgZASgdACQgMABgLgCQgMgEgLgJQgqAQgqALIgmAJIgBAAIgBABIgCAAIAAAAQg3ANg4AEQgVACgSAAIgRAAg");
	this.shape_16.setTransform(46.5,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AiQDBIAAgJIABggIAAgBIADgfIAAAAIAEggIAAgBIAShLIAAAAQADgSALgOIgBgBQgDgCAAgEQgDgmAWgfIgDgCQgDgDAAgDIAAgJIAAAAQABgNAIgMIAAgBIAMgWIAAAAQAJgOANgIIAKgGIABgBIAAAAQABgEADgCIARgNQADgCADAAQAaABAVATQAPAMAEARIAAAAQAWALAPARQAMANAJARIAAABQALAUAKAVQALAWACAZIABAOIAAATIAAAAIAAABQgBAMgDALQgCAHgFANQgGANgPAIIgVAKQgGADgDgBIghgHIgLAiIAAAAIAAAAIgNAwIAAAAIgLAqgAg1B5IAAAAIAAAAIAAAAgAgYhVIABAAIgBAAgAgMiEIABAAIgBgBgAAciWIAAAAIAAAAgAAXiuIAEACIgCgDg");
	this.shape_17.setTransform(20.7,-3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjlC2IAEihQA4gSA5gaIACgBIAIgEIA7giIAAgFQAAgJAMgRQAIgKAAgEQAAgDADgDIADgCIAAgEQAAgPAJgQIAAACIAEgFIAAgDQAPgYAdAAQAGAAAEADQAMgGAJAAQAIAAADAEIACAEQAIgCAGAAQAKAAAPAHIAAAAQAQAHAFAJQACADAAADIAQAEQAIAAAKALIABABIAIAJIABADQAKADAIAGIAAAAQAWAPAAAWQAAAGgEAFIAAAAIgFAFIABAYIAAAAQAAAzgpAaQggAUgtAAQgDABgFgDQgNAIgOADIgDADQhoBBhiAgQgmAMggAAQgMAAgLgCgAAjBJIABgBIgCAAgACNAIIAAAAIAAAAgADIhEIAAAAIAAAAgAChh9IACAAIgCgBgAAbigIAAABIABAAIABgBIgCAAIAAAAIAAAAg");
	this.shape_18.setTransform(40.9,12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).to({state:[{t:this.shape_18}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl134armL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,FamTab:19,toLL:39,yum:59});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AgrBAQgXgWAAgHQAAgeAWgnQAbg1ApgOIArAwQgoAYgRAcQgPAcAAAwQAAAKAEARIgqgmg");
	this.shape.setTransform(54,64.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("Ah6BfQgUgdAAgmQAAgqAXgaQAcgfBCgNQAigIAEgEQACgDAQAAQAQAAADARQAAAEgFAFQgKAJghAHQgPACgQAQQgMAMAAAEQAAAuArAAIBMgEIACAMQAAAIgHADQgNAKgPAAIgXAAQgOAAg8gcQACAGgIAlQAAAYAaAKQAYAJArgEQgFAEgCAFQgDAFgFACQgGACgHgBQgGAAgLgCIgPgDIgGgDIgJgEQgHgEgLgLQgJgJgEAAQgHAAgKgKIgMgMIgEAEQADAKAgAcQAgAdABACIgMAEQgxgKgZglgAAFCJQAfgBAKgTQAOgbASgIIgEAAQgwAHgKAAQg1AAAAgWQAAgGABgDIADgGQAKAHAiANIAtgGQAsgLAAgYQAAgMgDgVQhXAFgKABQgVAAAAgZQAAgSBsgbIgFgGQgFgBgKACQANgRgQgQQgOgPgRAAIgLAAQgEgBAAgGQABgIABgDQADgEAHAAQAKAAALAMQAMANATAgQADAFAaAYQAYAbAEAXQAOBIgdAbQgRAPhbAdg");
	this.shape_1.setTransform(69.8,67.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2E95A").s().p("AgRERQguhZgYg7QgYg8gJhHQgKhKACgXQABgXALgzQAIglAMgiQALgiAXgnIAQgdIABAAIAGAAQACAAgDA0QgCA0gEAjQgEAkgDgCQgCgBgBgDQAAgBAAAAQAAAAAAAAQgBABAAABQAAAAgBACIgCAHIgBAHQAAAxBECLQBGCPA0AyQg1AsgMAQQgSAXgOAxQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQgJAAgnhOg");
	this.shape_2.setTransform(42.3,30.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#996666").s().p("AgHBRQgHgHAAgHQAAgNAagFQAhgFARgdIAIgNQgGgBgcAZQgaAWgdgIQAAgCgNgFQAggZADgFIAEgGIgIgDQgOAYgkABQgbAAgLgQQgGgHAAgNQAAgbAYgEIAHAXIADABQAFABAEAEIgEgVQgEgYgCgTIABAAIADACQAHAHAaAFQAUAEAMAAQALAAAfgIQAigIALgIIACAXQAABPgZAqQgVAjgiAAQgQAAgHgJg");
	this.shape_3.setTransform(14.7,82);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6978F3").s().p("AhLAuIgDgCIACABIAFADgAhMATIAFhCICUAAIACA7QgTAMhDAPQgdAAgogUg");
	this.shape_4.setTransform(16.4,69.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2E95A").s().p("Ah4FAQgZgFgQgFQAMhvAPhKQAZh+AohKQAvhXApg2QAwg+BCguQAFASAOAUQAOAUgFAeQgEAegHAGQgOAZgOgDIADgSQhCB2gWBLQgRA4gXCkQgHAygBAkQgBAMgQACQgtAIgRAAQgIAAgWgFg");
	this.shape_5.setTransform(25.8,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6978F3").s().p("AhGAGQAHgpAcgaQAegbApACIAjAoQgwALgQAPQgjAfAOBNg");
	this.shape_6.setTransform(51,63.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#996666").s().p("AhhBCQgQgaAAgxQAAgpAVgPQATgOA/gLQBWgsAAAwQAAAJgQANQgTAPgSAAQgGAAgUgGIgUgGQASAgArAFQA1AGAXAWQgIAQgQAJQgLAGgJAAQgQAAgSgIIgogTQgKgEgEADQASAYAmANQAZAJgBAfQABAKgdAEQhAgggXgVIAAAJIABAIIAYAXQAUATAEACIgFADIgRADQg0gPgTgfg");
	this.shape_7.setTransform(62.2,69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2E95A").s().p("AhZCDQgihaAAhkQAAhBAHgpQAHgiARgtQAGgSAhgoQAdgjAAgMQAEAEAHAEQAHADABAnQABAmgKAuQgLAugRAFIgDAMQgEA1A6CQQA+CVA1A7QgvALgcAbQgbAZgDAiQhSiVgahGg");
	this.shape_8.setTransform(40.9,27.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#996666").s().p("AgHBUQgOgdgNhLIgDACQgEAFgBAGIAEAWIAJA2QgXgMgRghQgPgcACgTIgHAHIgCAKQACASAGAVIgHgGIgHgIQgCgGgDgMQgCgLgBgIQAAhXBpAAQAgAAAZAaQARARAgA1IgIAGQgKAFgRAAQgEAAgJgEQgJgEgFAAQgDAAgFgVIgDgVQgIAHgCABIgBAVQAAAqAOAiQANAhAAAEQAAALgDgCQgRADgLAAQgQAAgJgWg");
	this.shape_9.setTransform(27.9,70.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6978F3").s().p("Ag5gZQAUgYAjAAQAYAAAhAKQALADAFAJQAGANAAAfQgQgJgVgDIgTgCQgSADgSAGQgnANgPAQIgHAJQgEgxAXgag");
	this.shape_10.setTransform(24.5,57.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2E95A").s().p("AhHETQgCAAgSAGQgVAIgIAHQgBhEAti4QApinAXgzQAPgmAsgmIAtgmIADgIQANARANBSQABAdgEAoQgEAogEADIgUANQgOAOgCAEQgLAQgHAdQgQA+gSD0QgVgWhIAAg");
	this.shape_11.setTransform(30,23.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#996666").s().p("Ah6BfQgUgdAAgmQAAgqAXgaQAcgfBCgNQAigIAEgEQACgCAQgBQAQAAADARQAAAEgFAFQgKAJghAHQgPACgQAQQgMAMAAAEQAAAuArAAIBMgEIACAMQAAAIgUAGQAAAHgPAAIgXAAQgOAAg8gcQACAGgIAlQAAAYAaAKQAYAJAogEQgCAEgEACIgFgBQgDgCAAAGQAAAGgQgBIgWgCQgGAAgFgDIgJgEQgHgEgLgLQgJgJgEAAQgHAAgKgKIgMgMIgEAEQADAKAgAcQAgAdABACIgMAEQgxgKgZglgAAFCJQAfAAAKgUQAOgbASgIIgEAAQgwAHgKAAQg1AAAAgXQAAgFABgDIADgGQAKAHAiANIAtgGQAsgLAAgZQAAgLgDgVQhXAFgKABQgVAAAAgZQAAgRBsgcIgFgGQgFgBgKADQANgSgQgQQgOgPgRAAIgLAAQgEgBAAgGQABgIABgDQADgEAHAAQAKAAALAMQAMANATAgQADAFAaAYQAYAbAEAXQAOBIgdAbQgRAPhbAdg");
	this.shape_12.setTransform(69.6,67.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2E95A").s().p("AgTEDQgwhigWgvQgVgvgKhIQgKhKACgXQABgWALg0QAIglAFgPIAcg1QAYgtAAgRQAAgGACgBIADAAQAFAIAFAPQAEAMAAADIAABAQABANgEAJQgEAJgBAUQgBAUgHACQgHADgDACQgDACAAAFQAAAyBECKQBGCPA0AzQg1AsgMAPQgSAXgOAyIAAAAQgIAAgrhcg");
	this.shape_13.setTransform(42.1,29.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6978F3").s().p("AgdAOQgugTgSACQARgSAMgZQAMgZAPgBQAPgCAxAcQAuAZAVAWQgUAkgSAkQgjgjgygYg");
	this.shape_14.setTransform(-2.9,44.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#996666").s().p("Ag8CHQgLgNAAgXQABgGACgJIACgIIArhkQgeAYgGAGQgPASAAAZQgFgHgHgYIgGgTQAMg1ALgMQgCgCgGAAQgWAMAAACQAEALgJAUQgFgTAAgKQAHgYAKgXQAUgvANAAQASAAAvAXQAwAWAZASQATAQgBAOIAAAaQANA6AAANQAAAOgCAFQgEAKgQAAQgLABgMgMQgRgSAAgjQAAgHADgMQADgNADgHIgFACQgiAvgaBNQgSAzgRAAQgJAAgIgMg");
	this.shape_15.setTransform(-7.9,60.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A2E95A").s().p("Ai1CjQgugVgSACQBWiIB9haIB1hIIBCgdIAwgTQAXgLADgIIAAAAQARAQAEAOQACAEAAALQAAAXgDAGQgCAFgHAIIgPAgQgLAVgBAAQAKAAAGgDIgMAhQADALgFAFIgMAGQgqgBhqBcQhlBbgpBFQgkgig0gZg");
	this.shape_16.setTransform(16.9,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6978F3").s().p("AhdgqIA0gyQAkgIAyAuQA1AvgEAmIg5A/QAIiDiKgFg");
	this.shape_17.setTransform(2,52.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#996666").s().p("AgsB9QAFgYAwgaQA0gXAHgFIAAgBQhGgLgugpQAEAJANAOIgoAbIghAUQgMAAgJgIQgJgIAAgKQAAgMARgLIAmgUQA3ghADgoQAAgFgCgBQgDABgHAGIgGAFQgaAAgGgSIgDgcIAAgWIAVgBIARAMQAVAOATAHQAMAEAggBQAvAHAWAhQASAaAAAoQAAA+g+AsQgxAjghAAQgbAAgIgRgAhZBrQgGgEAAgHQAAgTAOgIQAYgJATgOQAKgHAKgKQAWAPAPAEQgxAZgKAJQgOALgIAaQgUgGgHgGg");
	this.shape_18.setTransform(-9.4,60.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A2E95A").s().p("Ah+DjQgYgVhCgYQDXjfBTh2QAvhBAWhAIANgQQA1A5AABAQAAAPgHAeQgGAigFAAIgGAWQgHAZgMALQgRAOhDBrQhPB/hbBnQgVg4gZgWg");
	this.shape_19.setTransform(21.3,23);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6978F3").s().p("AgSA/QADgSAAgHQAAhHgnghIBBgWIAVAdQAHAKAFALIAIAUQADAMAAATQAAAKgKApQgMAHgWAJQgVAIgOAAQADgJADgQg");
	this.shape_20.setTransform(8.4,46);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#996666").s().p("AgUB2IgDgdIBNhGIAMgSIgFgEQgRABghAEQgfAHgTABQACAGAIAEQgDADguAbQgfASABAUIgZgJQgCgKAAgKQAAgHAmgUQArgWAFgFQAkgiAIgWQgBgBAAgBQAAAAgBgBQAAAAgBAAQgBAAgBABIgDACQgOAIgJAAQgLAAgRgKQgSgKAAgJQAAgLAFgKQAFgLALAAQAFAAAPAEQAOADAFAAIAWgCIAzgOQAUgGAGAAQARAAAUAbQAWAfAAAmQAAAigqA0QgvA5guAAQgIAAgNgCgAg7BzIgegMQAFgZAxgfQAsgcAQACQgiAngaAYQgHAHAAAMQAAAKAEABIgBABIgJABQgKAAgBgBg");
	this.shape_21.setTransform(-8.4,51.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A2E95A").s().p("AhzDCQgNgqgagTQB/hCA8ioQAghVAFhIQAAgGgDgCIgHgFQgDgOAFgCQA1AKAZBCQANAhACAgIgDAaQgEAZAAAPIgEBSQAAADgIALQgHAPgWA3QgOAjgeAjQgqA0giAaQgdAUhIAiQAPgtgQgxg");
	this.shape_22.setTransform(26.5,23);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6978F3").s().p("AgeBSIgYgJQAhgVAPgfQAJgVAAgXQgBgygDgSQAZARAXAKQAIAIAAAmQAAAmgWAmQgUAigNAAQgFAAgZgKg");
	this.shape_23.setTransform(11.6,34.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#996666").s().p("AgkBpIgDgPIAAgLQABgCAIgDQAkgPA0gfQAGgDAGgGIAMgMIh1gFIAKALIAAAAQgGAIglAFQghAGgSAbQgXgLAAgEQAAgcAkgIQA1gKAKgHQAxgjAFgLIgEgKQgHALgJAAQgRAAgRgMQgQgLAAgJQAAgRAJgJQAGgGAKAAQAFAAAQAIQAPAJAFABQANACAogDQAvAAAQAOQAUARAAA4QAAAugwAqQgyAtg7AAQgQAAgGgOgAhYBeQgQgHAAgOQAAgQA1gSQAygQAbABQhQArgEAKQgBACAEAGQADAHgFAIQgSAAgNgGg");
	this.shape_24.setTransform(-4.1,33);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A2E95A").s().p("AhPD2Qg0gFgrgGIAfgqQAWgfAAgzIgEgkQAMAEBoAYIANgGIASgJIgwgGQAXg4AJgwQAEgPAPiVIgCgmIgCgXQAbgHAOAVQAOAVAWArQAVArADgCQADgDAJANIAVAeQALARACAFIACAHIgBADQAHAPgBANQgCAMgIgEIgXAPQgIAIgSBKQgRBGgDAAIgWAkQgWAlgHAFIAAABQgLAJgbAIQgXAHgOAAIgxgEg");
	this.shape_25.setTransform(31.2,21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#996666").s().p("AhUBIQgigcAAg3QAAgfAZgaQAWgWARAAQBWARARgEQAJgDAQAEIACAEQABAEAAAGQAAAXhQAEQANAOArAIQAuAIAUAMQgCALgOAJQgNAJgJAAQgNAAgdgJIgrgRQgcgKgCABQANARAeASQApAXAhgHQgLAfgoAAQgmAAhIgqIgLABIBBAwIgJABQgbAAgYgTg");
	this.shape_26.setTransform(54.1,65.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6978F3").s().p("Ag2AaIgCgmQAAgaAkggQAfgdAQAAQAKAAAUAlQgXASgTAcQgRAaAAARQAAAbAUAug");
	this.shape_27.setTransform(40.3,62);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#A2E95A").s().p("AhEDAQgZhYAAhVQAAgaAOhJQAQhgAYgpIAsg9QAmgyABgJQAQALAGAUQAGAVABAyQACAzgbAbQgQATgMAqQgKAhAAASQAABNARAwQAHAUA8B+QgtAYgRASQgUAUgIAlIgEANQgpg2gbhcg");
	this.shape_28.setTransform(32.9,28.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#996666").s().p("AguBwQgEgIgBgKQAAgKACgCQACgCALgCQAlgIA0gXIANgFQAGgDAIgKIhygdIAJANIAAABQgGAFgmgBQgigCgVAZQgHgCgHgJQgHgHABgCQAAgGACgKIACgGQBPgCAVgHQAJgDAygmIgCgLIgGAEQgHAEgEAAQgRAAgPgUQgMgRAAgIQAAgSAMgHIANgDQAdAXAZAKQARAHASgCQARgBAWALQAMAFAMAOQANAQAAAPQAACdigAAQgXAAgJgQgAheBaQgSgJgBgNQABgYA9gIQAzgHAWAHQhHAXgJAGQgCACgJAfQgSgFgHgDg");
	this.shape_29.setTransform(-6.9,28);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6978F3").s().p("AgXBIIgLgCQAUgnAGgfQAHglgNgkQAhARAIAKQAIAKAAAhQAAATgOAdQgPAdgKAAIgTgCg");
	this.shape_30.setTransform(10.4,29.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A2E95A").s().p("AiZDXQAWgNAMguQANgugNgcQBZANABgHIgmgMQCVjRgOg6IgIgjIAJgBQAZAbAaBTQAdBHAEAbQAEAagTAKQgTAKgaAzQgbA0gKALIgcAlQgOATgFAEQgSASg5AJQgagBg9gMg");
	this.shape_31.setTransform(27.1,16.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#996666").s().p("AgPBhQgagRgXgYQgdgggQgkQgHgQABgSQAMArAbAhQAKANAPAEQgigugNgzQgFgXAMgTQAFgHAHgGIAGgDQgCAlAPAiIAQAkQAHAOAOAMQAGAEAHAEQgcgwgSg3QgGgTALgPQADgEAFgCQADgCADgBQAhAqAgAmQANAOARALIARAIQAnALACAoIgBAFQAAALgJAKQgKANgNAIQgKAGgLADIgiAHQgYgEgTgNg");
	this.shape_32.setTransform(0,31.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAAgHIAAADIAAAMg");
	this.shape_33.setTransform(14.3,35);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6978F3").s().p("AgDBBQgkgGgggUQAYACARgNIAWgRQAZgUAGg4IgBARIACgOIgBgDQAUAAAUACQAEAKABAJIACAPQAGAfgQAcQgGALgIAGQgVATgZAAIgDgBg");
	this.shape_34.setTransform(11.9,40.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#A2E95A").s().p("AiaDyQASgIAKgQIAJgQQARgegFghIgFgdQA3ADA0gPQAOgEAagKIgyAAQAEgUAGgSIAEgWQAUhEAIhIQAGg5gKg4IgBgBIgLgNQAHgPAYAYQAYAZAiA1QARAVAUAlQATAlgEANIgHAVIgDAGQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgCQAAgGgHAoQgHArgKAiQgLAhgVAdQgKAOgLANQgWAZgcARQgJAGgMAGQgPAGguALQgUAFgUAAQgYAAgZgIg");
	this.shape_35.setTransform(31.4,24);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6978F3").s().p("AhHgXIAWgcQALgOAFAAQAfAAAiAZQAoAcAAAhQAAAMgdAhQghhfhRAGg");
	this.shape_36.setTransform(32.9,52.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#996666").s().p("AgBBCQg3gZAAg4QAAgMAHgJQAFgHAEAAQACAAAJAHQAKAJAHAIIAAAAQAFAGAaAUQAcAVAFACIAdgHIgCgCQgwgLgdgkQgYgjgSAAQgGAAAAgCIADgEIAKgCQAPANBIAhQBCAgAAAfQAAASgCABQgIACgGAIIAAAAQgHAEgRAEQgOAEgEAAQghAAgegPgAhDAQQgGgHgHgMQgJgQAAgFQAAgPAGgJIAJgJIALAKQgHAHgDAIQgBAGAAALQAAAHAFALIAMAagAhvgoIgFgHQgCgDgBgFIAEgNQAFgMAJAAQAOAAAEAGQgKAGgHANQgHAMAAAKg");
	this.shape_37.setTransform(23.3,55.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A2E95A").s().p("AgODVQgSgQg3gNQAZgkALhWQAIg8AAhGQAAg/gJg6QgGgpgHgVQgCgHACgNQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABgCAUABQAUACA/BdQBCBegZAbQgMAMgCAYIAAACQAHA5gLBgQgMBogZAkQgeg0gKgJg");
	this.shape_38.setTransform(38.9,25.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6978F3").s().p("AAcASQgUABgOgPQgTgRgNgJIAGAAQAUAJAMAAQAKADAcAhg");
	this.shape_39.setTransform(42.6,58.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#996666").s().p("AAsBYIAAAAQgWgGgVgPQgngeAAgxQAAgJAIgOQAIgMAIgIQAIAEAIAUIAIATQACAAAQAbQASAdAOAAQAHAAACgCIABgGQgBgFgRgQQgTgRgGgPIAAgCIAZAKQAVAJAEACIABAAQAWAKACAQQABAQgEARQgEAQgRAIQgKAEgMAAIgMgBgAg+gBQgLgaAAgMQABgMAEgLQAIgVAPAAQAKAAAGAJIADAFQgWAMgHAcQgGAXAGAOgAhigxIgDgUQAHgVAZACQgLAJgHAPQgGANABAIQABAFgBAAQgCAAgEgLg");
	this.shape_40.setTransform(39.2,63.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A2E95A").s().p("AAoETIgigJQgVgHgFAAQgGAAgGgEQgGgEgHAAIgUABIgIhpQgGhQAAhAQAAh1AUgvQAohpAMAEIgCgOIABgGIACgFQAGACAQArQARArABAWQAAAWgMAVIgQAcQgEAAgCAKQgBALAAAGQAAAfAGAmIBLEqg");
	this.shape_41.setTransform(36.7,26.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6978F3").s().p("AgtBAQgWgWAAgHQAAgdAYgoQAdg1AqgOIAoAwQgoAagRAaQgTAeAAAuQAAAKADARIgogmg");
	this.shape_42.setTransform(51.5,63.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#996666").s().p("AhPBZQgggmAAglQAAgqATgbQAZgkA5gMQA4gNAFgEIAQgBQAKAAAGADIADALQAKADgKAAQgBAEgEAEQgIAJgUAEQgUAEgSAGQgEABgJAKQgJAMAAAKQAAApApAAIArgBQAVAAAJACQAEACABACQABALgHAEIgKAGQgEACgQABIgXAAQgOAAg7gcQADAMgEAKQgGANAAANQAAAVAdAKQAdAKAhgJQgCABAAABQgBABgBABQAAAAAAAAQAAAAAAgBQgEAGABACQACAFgYgBIgcgCQgHAAgCgCIgJgFQgHgEgLgKQgIgJgEAAQgHAAgKgJIgMgOIgDAFQgEASAgAWQAjAYACAEIgNAFIgIACQgXAAgbghg");
	this.shape_43.setTransform(63.8,69.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#A2E95A").s().p("AhlBQQgVhTAAhPQAAhzBaiZQAQAPABAcQABAcgIAdQgHAdgGAFQgFAGgCANQgCANACALIgLAKQAAAqAuBxQA3CHBLBcQg1ArgOAQQgSAXgRAyQhXiAgjiPg");
	this.shape_44.setTransform(40.7,29.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#996666").s().p("AgOBhIgBgBQgGgKgCgYQgCgdABgKIgCADQgLAYAAAQIABAMIgEABIgFACIgIgCIAAAAIgGgBIgCAAQgKgMgDgKQgEgQAEgyQgDAAgCADQgCACgBAEIgDANQgFAPAAAJQgWgRAJgkQALg0AmgaIABgBIACgBIABgBIAEgBQAigUAjAOQAqAQAWAfQAWAegDAcQgCAdgLANQgKAKgSAAIAAAAIgLgGQAMgKAPgJQADgCABgDQgIgCgVAOQgWANgHAOQgHAOgBAKQAKgSAMgIIAKAGQgQAugjABQgJgBgFgOg");
	this.shape_45.setTransform(-27.3,15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6978F3").s().p("AAVAfQgXgigvgSQgUgHgUAAQAggXAggSQAuABAiAiIAAAAQAhAhABArIgwAcQgGgTgOgUg");
	this.shape_46.setTransform(-19.3,4.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A2E95A").s().p("AEVB7IgEgEQgBAHgFAAIgDAAIAAgBIgDgFIgRgWQhIgihNgXIABAAQhYgbhYALQg8AGg3AXQgFgvgighIAAAAQgegdgmgIQEZiTE6DHIACABQAIgGAAAFIAAAAQAAAFgLASQgLAVgCAKQgDAKADAIIAGAUIAHAZIACANQAAAHgMAAQgCAAgDgDg");
	this.shape_47.setTransform(11.1,2.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#996666").s().p("AhUBIQgigcAAg3QAAgfAZgaQAWgWARAAIBcAJQAUABAQAEIACAEQABAEAAAGQAAAXhQAEQANAOArAIQAuAIAUAMQgCALgOAJQgNAJgJAAQgNAAgdgJIgrgRQgcgKgCABQANARAeASQApAXAhgHQgLAfgoAAQgmAAhIgqIgLABIBBAwIgJABQgbAAgYgTg");
	this.shape_48.setTransform(54.1,65.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#6978F3").s().p("Ag2AaIgCgmQAAgSAdghQAdgjAZgBIAeAlQgXASgTAcQgRAaAAARQAAAbAUAug");
	this.shape_49.setTransform(40.3,62);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A2E95A").s().p("AhEDEQgZhZAAhVQAAiBAphQQAQgeAdgmIAyhFIAMgQIAFgBQADAIADAVQADAQAAALQAAAmgFAsQgFAmgBAAQgFAAABADQAAAGgFAGIgEAIQgJAPgDgHQgWAtgBAvQAABOARAvQAHAUA8B/QgtAYgRASQgUAUgIAkIgEAOQgpg2gbhcg");
	this.shape_50.setTransform(32.9,27.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6978F3").s().p("Ag8AhQgDgZAJgXQARgxBHgXIAbAhQgcAJgbAhQgcAjAAAlQAAALADARg");
	this.shape_51.setTransform(49.8,63.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#996666").s().p("AhbA/QgPgRAAgjQAAgqAdgfQAWgZAXgDIAoARQAtAAARgBIAJAHQAEADAAACQAAAOgQAHQgTAHgtABQALAQAmAJQAoAIAPAPQgGALgFAFQgLALgRAAQgDAAgngSQgngTgRgEQAIASAYATQAhAZAggFQgFALgLAIQgOAJgRAAQgUAAgYgNQgOgHgngbIgKABIAyAzQgogMgOgQg");
	this.shape_52.setTransform(60.1,68.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A2E95A").s().p("AhOCeQgsiCAAhdQAAgVAOhMQAPhPAIgRQAOgbAegYQAcgWAEgMQAEgFACABQACAEAAAIQAAAOgIAyQgIAsgGAcQgHAegBAjIABAFQALBcA3B7QAxBsAmAqQgzAPgeAoQgZAiAEAXQg1g2guiIg");
	this.shape_53.setTransform(39.8,29.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#996666").s().p("AgjASIgCAEQgBAFAAAGQgBAIAFASQAEATAGAKQgPgGgMgVQgGgMgWg0IgDABQgEACAAAEQAAAOAHAbIADANIgOgNQgLgKAAgaQgBgIAJgXQAJgaAJgRIAZgOQAbgPAGAAQArAAAoAeQAkAcAAAXQAAAqgZAAQgGAAgHgCIgEgDIgIAEQAWgUAFgFQgBgDgjAOIgKAJQgMANgGATIAngJQAHALAAAIQAAAJgOALQgOAKgIAAQgjAAgZhNg");
	this.shape_54.setTransform(1.4,63.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6978F3").s().p("AAFARQgvgRgmAKIAUg5QAkgKAvAVQAjAQAXAUIgQAzQgVgUgngOg");
	this.shape_55.setTransform(4.2,51.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A2E95A").s().p("AiKDcIg/gEQAPgtArhKQAvhSAtg1QAEgGAuguQAyg2AfgcQAQgOArgeQAjgaAAgSIABgEIADACIAFAFQAEAPADA5QAEApAIAbQAAAFgCACIgMAEQgVACgwA0QgVAWgcAhQgbAhgkBFQgoBQgaBQQgxgmgegHg");
	this.shape_56.setTransform(19,23.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AAAAAIAAAAIABABIgBgBg");
	this.shape_57.setTransform(56.3,76.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#996666").s().p("AgtBhQgMgEgIgGIgBgBQgegRAAgRIgBgIIgDgIQgEgOAAgLIAAAAQAAgMAFgSIABgGQABgKAEgFQAEgLAGgJQATgoAWAAIAAAAQAOABATAAIACAAQAtgBAPAEIAEABIABACIAAABQACAEAAAEIAAAAQADANgPANQgNALgLAAIgNgBIgEAAQgHAAgIgJIgBgBIgBAAIAAAAQgCADgBACIAAAEIAAADQAFAOAMALQAPALAaAIIAZAIQAeALADAJIAAABIACAEIgCAHIgCAFIgEAFQgKALgTAAIgHAAIgLgCQgOgDgOgIQgSgGgfgfIgIgIIgBAAIgDAFQAGANAIAKQAOAQAVANQAMAHAQAGIAJACIAAABQgFAHgJADIgHABIgCAAIAAAAQgcAAgZgNQgXgPgKgDQAAADAFAIIAAAAQAFAJAUALQAMAGAQAGIAEACIAAAAIAAAAQgJACgJAAQgOAAgNgEgAhYA/IACACIgCgDg");
	this.shape_58.setTransform(65.2,70.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6978F3").s().p("AgVBRIgbgaQgLgKAAgGQAAgfAWgmQAbgzApgQIAdAsIgLATQgIAKgPAPQgYAWgCAqQgCAVACAVIAAABQgDAAgSgRg");
	this.shape_59.setTransform(53.2,63);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A2E95A").s().p("AgWEIQg0hdgYhSQgFgUgNhHQgMhLAAgQQAAg6AUg9QATg7AigzIABgCQgBgPABgNIAAAAQAHAEAHAdQAIAdAAAUQAAAMgWBWIgHAUQAOBKA3BtQA5BwBABOQgSAGgmAtQgrAyACAfQgbgkgbg1g");
	this.shape_60.setTransform(42.2,29.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#A2E95A").s().p("AiWBSQgqhSALhcQAAADAUADIAbABQAZAAALgBQASgDAbgJQgNA0ALApQAJAhAWAOIgGgZIDBiUIgDgRIADgKQAOAHAEAZQADAPAAAgIgFAoQgFAnAAATQAAAMgHAFIgWAKQgPAHgXAUIgsAmQg/AwhJAAQgnAAgmhNg");
	this.shape_61.setTransform(21.9,10.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#6978F3").s().p("AhCAtQABg3AEgmQADAaAjAPQASAHAQABQAIAAAUgBQAUgDAIgDIgEAdQgBAMgHAFQgNAJhbAAQgLAAgGgEg");
	this.shape_62.setTransform(10.4,-5.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#996666").s().p("AhTBiQgfgUgCgVQAjgDApATQAkARAJAQQgLAFAAABIgnACQgMAAgagQgAAUBbIgfgYQgughg8AFIgBgVQAAgKADgJIAUgCIATgCQASAAATAFIAfAJIAEgGIACgDQACgHAAgGQAAgKABgFIAKgRQAIgNAAgGQAAgKgFgGQA5AFAaAiQAWAcAAAtQAAAlgPARQgPARgfAAQgTAAgTgMgAhKgXIggADQAHgUAHgIQAHgJAIAAQARAAASAIQAbANgIAYQgegLgVAAgAgnhCIgWgIIAIgIQAWgKARAIQAOAHAAAOQAAAJgDAGIgIAHQgSgUgKgFgAAMhjQAIAAglgGIASgHIAOgBQAGAAAKAHQAJAHAIAIg");
	this.shape_63.setTransform(16.5,-18.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#6978F3").s().p("AgpAdQgSgrAAgaQAAgOAYgKIAhgLQgBAYAPAtQAVAyAbANIgtANQgSAFgGABQgNAAgTgvg");
	this.shape_64.setTransform(42.1,22);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#996666").s().p("AAHB6IgJgEQAcgeAJgOQATgfAJgGQAQgLAcAKQgGAlgYAZQgZAageAAQgHAAgIgCgAhbBaQgcgdAAg7QAAgWAWgdQAegmA5gYIAKgBQgaARgEAFQgCADgJAgIAFAHQAEAEAFAAQAFAAADgCIANgJQgIARAAALQAAALAHAGQAGAFAHAAQAFAAAbgMQAbgNAFAAQAXAAAQANQARAOgKAMQgKAOgRAAQgVgEgMAAQgCAAghAvQgfAvgdAAQgfAAgVgXgAASgyQAMgJASAAQAXAAAPAOQgYgFgHABQgMABgbAQIgNAHQADgQAMgJgAAWhfIANAFQAOAGAJAFQgIADgigDQgZgCgMANQAIgbAjAAgAhPhlQAHgNAcgIIALgBQgYAQgNALIgMAKIADgPg");
	this.shape_65.setTransform(55.6,15.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A2E95A").s().p("AhnCpQgxgbAAgzQAAgkAmgoQAng1B3hQQBLgyAYgNIACgIIACAFQAIgEgEAEIgCADIAEAHIgOBhQgHA1gIAgQhcAghQAMQAwAFAKAAQAKAAA6gPQAABLAvA5QggAHgoAFQgmAEgYAAQg3AAgngVg");
	this.shape_66.setTransform(26.5,12.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#6978F3").s().p("Ag9AcIgLgRIgKgPIABAAQAhgEAigMQA0gTAFgYIAQAXIAKAOIAOASQAAAPg3AdQgtAZgUADIgYgkg");
	this.shape_67.setTransform(-7.9,-2.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#A2E95A").s().p("AgNB8Qg0AAhFguQhEgtg0g+QAngHAhgVQAfgVATgcQBCBAAdAgQAFAFAJABIAcABIgBgCIgCgCIgNgLQA8gMBCgTQBEgVA0gXQADgCADgIQACgIgCgCQAHgFAFgFQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABQgCAGgBAoQgDAwgDAhQgDAegDAGQgDAIgPAKIACgBIgCABQhIAQhEAcQgsASgvAAIgEAAg");
	this.shape_68.setTransform(14.8,8.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#996666").s().p("AgYB2QgPgMgIgIIAAAAIgJgUIgJgVQAXgFAIgKQADgDAFgQQAJgXA7gIQgNgXghgmQgfgfAAgIQAAgTAhAAQASAAAnAwQAoAxAAAgQAAAGgJAIIgJAKIABADQALgGATgOQATgKAbAAQAHAAADABIAFAEIAAAAQAJAigVAIIAAAAIhaA3QguAbgdAAQgCAAgOgKgAhMAjQgFgFgFAAQgGAAAAgHIABgPQAAgSAPgLQALgIARAAQAoAKAJAHIgBABQgDACgHAGQgFADgGAAQgGAAAAgCQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAQgNAsgYAAQgFAAgFgEgAijAFQgIgDAAgUQAAgQAxAAQAHAAAKACIAKADQgJATgFAWIg2gHg");
	this.shape_69.setTransform(-15.3,-17.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#6978F3").s().p("Ag9AcIgVggQAkAEArgXQAigVANgTQACAHAZAeIgCAAIAIAKIAGAIQAAAPg3AdQghATgUAGIgMADIgYgkg");
	this.shape_70.setTransform(-7.9,-2.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#996666").s().p("AgvAqQgKgbgIgkQAHAAACAKQADALAEAGQAIAMAaAAQAoAAAQg6IgCgGIgJADQgGAGgQAYQgIANgRAAQgPAAgFgMQgFgNAHgSQARgsA1AAQAUAAAaAWQAAAFgDALIgDAMQACAdANAhIAFgCIAEgFQABgBAAgHIgDgZIgEgbQAAgKABgEQAKgEAJAAQABAAAQAQQAHAAAAAMIAAAUQAAApgrAiQgqAhg0AAQgaAAgVg2gAiDgdQgFgGAAgIQAAgFAFgHQAHgLAOgGQACAPADAIQAFAKALAJQgXAGgLAAQgDAAgFgFgAhBgnIgQgJQgLgKAAgQQAAgKAPgGQAPgGASABIAZAFIgDAEQgEAEgGAAQgDAAgLARQgLASgCAIg");
	this.shape_71.setTransform(-16.3,-14.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6978F3").s().p("AgrA4IgJgPIgJgNIAAAAIgVggQAkAEAsgXQAigVALgTIAaAlIAAAAIAGAIIAIAKQAAAPg3AdQgtAZgUADIgGgIg");
	this.shape_72.setTransform(-7.9,-2.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#996666").s().p("Ag1BCQgKgZAAgeQAAgGAEgCQAFgDAEgIQgYAGgKAHQgIAIgEAAIgXgBIgCgSQABgGAHgOQAHgPAFgGQANAMAiAEIAgABQAfAAALAKQAIANAFAGQAoAVAIACQAAgDgSgOQgSgMAAgJQAAgOAGgEQAEgEAOAAQAhAAAMASQAIAMAAAaQAAANgFAFIgUASQgQASgpAPQgkANgQAAQgbAAgOgigAgTgyQgRgKAAgLQAAgGAGgHQAGgIAGAAQATAAAHADQAWANAmATQgGACgdASQghAAgTgNgAhRg1QgIgEAAgQQABgIAFgHQAJgPATAFIAKABQgIASAAAIQAAAJAKAPQgfgCgHgEg");
	this.shape_73.setTransform(-15.1,-14.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#6978F3").s().p("AgMBBIgagkQgUgaAAg+IABgJIABgJIAYgDQAFgBAHgFQAAAIABARQAAAjARAcQARAiAsAhIgRAMQgHAFgKABQgTAAgSgWg");
	this.shape_74.setTransform(33.8,35.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#996666").s().p("AAaBpQgcAEgHAAQgMAAAAgPIABgKQACgFAMgJIAKgIQA7gaAAgDQAAgHgRgSIgQgPQAAgGACgCIACgDQgEgQgIgIQgIgIAAgEQgCAAgDgDQgGgHgDgVQgFgTgTgKQgMgGgIAAQgRAAgRAIIAAgBQAFgKAJgEQAHgEANAAQAoAAAzA8QBABHAABaQAAALgNAOQgQARgTAAQgCAAgjgbgAhPBGQgfgnAAgmIACgWIACgSIABAJQACAGANAJIAMALQAIARAJAKQAFAFADABQAAATAGALQAJAPACAJQgCANACAJIAEAPQgWgIgZgigAgaA7QgKgNAAgQQAAgGAJgHQAMgLATAAQAPAAAIAEQAIAEAHALIAAABIglAPIgfASgAg8gTIAEgHQAWgYAYAHQAUAHAIAaQgQgGgUAKIgaANQgJgGgHgUgAhSglIgFgDIgCgKQgBgHAOgiQAMgLAUAAQAZAAAFAjIgZABQgOACAAAHQgRAWgBAAQgGAAgFgCg");
	this.shape_75.setTransform(44.5,29.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#A2E95A").s().p("AgvD3IAAAAQhggKAAheQAAgkAVg0QAQgoASgZQAshGAxgxQATgTA5gsIA0gqIgBgOIAGACIADAKQADAZAAAKQAAAxgTAtQgLAcAHAAIACAAQgBABAAAEIgLALQgUATgzAkQg4AogrAlQANAGAZAEIABAAIAbgIIABACQAABGASAdQAKARAyAnQg5AVgvAAg");
	this.shape_76.setTransform(25.5,21.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#6978F3").s().p("AgJArIAAgBQgRgFgQgJIAAAAQgQgJgPgMIAMgyIAJAHIAAABIAFADIAAAAQAAAEADACQAXAWAbAIIACAAIAJABIAPAGIADABIAJABQAPADAPgDIgIAZIgEAAQgSAEgTAAIgCAAQgKACgJAAIgNgBg");
	this.shape_77.setTransform(16.3,4.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A2E95A").s().p("AhcCrIgBAAQgRgBgOgNIAAAAQgUgUgOgYIABAAQgIgNAAgRIAAgBIAAg4IABgdIADgfIACgQIAZAQIgBAAQASALAUAFIABAAQAUAEAUgEQASABARgEIgHAdIgIAeIAFAaIAEgBQADgCABgEIAMgtIAAAAIALguIAAAAIALgiIAhAHQADABAGgDIAVgKQAPgIAGgNQAFgNACgHQADgMABgLIAAgBIAQgJIABAAIAEAAIgGgRIABgCIAAgEQAMgBAJAcQAFAPAGAdQAMA5AAARQAAACgLAIIgeATIgFAEIgGAGIgbAfIgdAeIAAAAIgfAdQgSAQgSAOQgTAOgVAMIAAAAQgSALgUAAIgFAAg");
	this.shape_78.setTransform(24.6,12.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#996666").s().p("AAjCAIhGgwIgEgCIgEAAIgtANIgLgGQgHgFgEgGIAAAAIgDgEQAEgVASgNQAKgHALgFQAHgDAHgCQAHgBANACQAOABAPAFQABgDAAgCQgBgEgCgBIAAgBQAFgQgFgPIACgCQADgBABgDQAGgOgBgQQgCgUgMgPIAAAAQgZgXgeALQAEgGAHgEIABgBIAFgEIARACIgBAAQAUAEARAJQAGADAGAEIAAAAIAIAKQACADADABQACABADgBQADgBACgCIABgCQANAIAKALQALAMAIAQIAAgBQALAUAKATQAJAUACAWQADAbgGAaIgBADIgIANQgHAMgJAEIgOAGIgkgHgAgICEIgBAAIgIgBIgRgGIgCgBIgIgBQgRgGgPgKIAigKIA0AkIgGAAQgFAAgHgBgAhUggIANgDQATgFAPANIAAAAQAPAPgEASQgagJgaALQgNAGgKAHIgBAAIgCACQgBgeAVgZgAgZgoIAAAAQgWgUgdAHIgOAFIAAgGIAAAAQABgIAFgIQAIgGAJgEIABAAQAXgMASASIABAAQAJAKABANIAAAAQAAAKgEAJIgHgIgAgfiCIAAAAIAGgEQAUABANANIADAEIgBAAQgTgKgWgEg");
	this.shape_79.setTransform(22,-8.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#6978F3").s().p("AgwA7QgEgLAAgRQAAg0AOgcQAPghAogXIAkAmQgtAcgOAwQgNAsALArIABAKQgggVgJgag");
	this.shape_80.setTransform(52.6,60.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#996666").s().p("AhoBwQgnglAAgwQAAgnAWgcQAZghAxgIQA5gKAEgGQABgCAPAAQAHAAAFAEQAHAEAAAGIABADIgBAAQAAAEgFAFQgKAJghAHQgPACgQAQQgMAMAAAEQAAAuArAAIBMgEIACANQAAAEgEADIgQAGIAAAAQgoAKgRgFQgXgOgggMQACAGgIAmQAAAOAMALQARAPAlAAQAMAAAMgCQgFAGgJADIAAgBQgmAGgYgQQgZgRgCAAQgHAAgKgJIgMgNIgEAEQAAAOAhAbIAjAcIgMAEQgYgCgfgcgAAECJQAkgDAKgUQAMgaAPgHIgEABQgwAHgKAAQg1AAAAgWQAAgGABgDIADgGQALAIAhAMIAtgGQAsgLAAgYQAAgMgDgVQhXAGgJAAQgWAAAAgYQAAgOAPgDQAHgDAQAAQAIgBAegOQAagMAGABIgFgGQgFgBgKACQANgRgQgQQgOgOgRgBIgLAAQgEgBAAgGQABgIABgDQADgEAHgBQAKAAAMAOQALAMAWAkQAKARAbAZQAkAwgTA9IAAABQAGAFgYAUQgcAZhNAQg");
	this.shape_81.setTransform(66.8,62.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#A2E95A").s().p("AhOCYQg3iDAEhcQAEheAqhVIAcg1QANgZgCgOQAAgFACgDIAFABQANAcgEA1QgFA4AJAaIgGASIgGAkIACAEQAHAzAuBiQA3ByA5A+QguAZgRAmQgOAfgBA8QhMhFg3iCg");
	this.shape_82.setTransform(40.1,28.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#6978F3").s().p("AgiArQgjgpADgvIA1gdQAEA5AkAfQATARAUAGIABABQg6AkgJABQgRgLgRgVg");
	this.shape_83.setTransform(37.6,15.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#996666").s().p("AhOBYQglggAAg1QgBgVAUgUIA/hCIgBAGIgFAHQgDAFAAAGQAAALAEAVQAGAKALAJQAKAIABAAQAGAAABADIACAFIAlgdQAQgNAZAAQARAAAPANQAKAKgHAQIAAAAQgEAAgPAHQgeANgNAWQgaAsgHAJQgYAeggAAQgUgFgTgQgAA1A8IAAAAQAIgRAFgIQASgaAggJIABAQQAAAdgOAQQgTAZg2AKgAgCgpQgCgYAggHQAbgGASAEIAAABQgSgBgTAKQgWAKgOATgAgWg7IgBgFQgBgDAAgKQAAgXAWgGQAVgGASAPQgfAIgKANQgHAHgIARQgBgBgCgGgAhOhdQAJgJAKgGIAAABQgVAXgFADg");
	this.shape_84.setTransform(49.7,7.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#A2E95A").s().p("Ah+CZQgggcAAgmQAAgbAjgvQArg4A/gfQASgKBDgpQBGgsAAgEIABgJIAAAAIAIgBIAFAVIAFAXIACAFQAAACgGAAQgFAAgBAKQgBAQgEALIgGAMQgQAegCAJQguAahTAlQhIAigJAHQAEACAMAAIB5gvQgEAYASAlQAVAsAhAPQh3AxgeAAQg4AAgigfg");
	this.shape_85.setTransform(24.6,10.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#A2E95A").s().p("AhRCVQgXgBgagVQgegXAAgoQAAgnArgpQAsgsCAhYQgGAzATAcQAPAYAtAWQhtAwglAfQgFADgdAhIAFABIC2hkQAKA6AGALQAIANACAKQgCAGgCABIgPABIgEACIg0AQQg3AQgrALQgqALgXAAIgEAAg");
	this.shape_86.setTransform(24.8,12.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#996666").s().p("AALBrQgohDhAgrQgbgTgHgHQgNgOAAgUQAAgSAfgNQAdgMAiAAQAVAAAxATQA6AVAXAUIABAAQAZAWAHAeQAEAQgBAMQgYABgEADQADgQgXggQgXgkgWgIIAGAJQATAWALAYQAMAcAAAXQAAARgUAAQgRAAgBgKQgCgVgIgLQgHgKgUgVQgVgbgGgFQAUAiAIAMQAUAmAAAWQAAAbgeAKg");
	this.shape_87.setTransform(53.8,1.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6978F3").s().p("Ag6AlQgTgeAAgRQAAgMACgRQACgIARgJIAlgSQAIAtAIAIQAIALBJA1Ig0AWQgYAKgDAAQggAAgZgmg");
	this.shape_88.setTransform(39.9,1.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#A2E95A").s().p("Ai8BiQhAgtAAhSQAAgVAJgnQAGggAFgNQAgAeAgAOQAkAPApgCIgYBOIAPAiIgCgGQgBgIAGAAQAsAAAcgHQANgDBNgYQBWgmAEgDQAKgHAagMQAJgGAEgFQAEgFAOAUQAOAUAGAeIAJAtQACARgBAGQgBAGgFABIgQADIgTACIgpAWQgyAbg4ANQg3AMhEAAQhMAAg1glg");
	this.shape_89.setTransform(17.3,8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6978F3").s().p("AhTAAIAWg4QANASAeAMQAoAOAfAMIAfARQgHAbgLAHQgGAFgQABQhJAAg2g5g");
	this.shape_90.setTransform(3.2,-7.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#996666").s().p("AANBLIgFgGQgegUgsgTQgwgMgQgQQgJgJAAgPQAFgPASgOQAkgdBAAAQA4ABAzAfQAyAfgBAeIAAANQgSgBgGADIAAgDQgMgXgkgXQgggWgXgFIAMAIIAdATQARANAAAFQAfArAAAJQgBAGgHACIgRABQgPAAgMgUIgRgdQgWgXgYgIQgNgEgTAAIAOAIQAcASAYAcQAaAdAAALIgBAIIgLADQgFABgGAAQgGABgFgGg");
	this.shape_91.setTransform(12.5,-13.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6978F3").s().p("AgYBRIgbgaQgKgKAAgGQAAgfAVgmQAbgzAqgQIAhA2IgQAJQgHAKgPAPQgYAWgDAqQgBAVACAVIgBABQgDAAgSgRg");
	this.shape_92.setTransform(53.4,63);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#996666").s().p("AhYA/IAAAAQAyAngcgPQgegRAAgRQAAgFgEgQQgEgPAAgFQAAgjAFgLQAIgJAFgJQAPgaAdgVIAuABIA1AEIADALQADANgPANQgNALgLAAQgYAAgJgLIgDABQgBABAAAHQAAAbA6AUQA8ATAAAOQAAAJgIAIQgKALgTAAQgfAAgggZQgcgbgNgGIgDAFQANAbAXAQQARANAhAMQgQALgHAAQgcAAgZgNQgXgPgKgDQAAADAFAIQAHAOAyAUIAAAAQgLAAhNglg");
	this.shape_93.setTransform(65.2,70.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A2E95A").s().p("AgiDiQgphRgQgrQgPgqgNhHQgMhJACgqQADgrATg/QAUg/AcglQAKAjAGAUQACAHAAAcQAAASgLAgIgHAVQAOBJA2BtQA5BwBABOQg1AsgMAQQgSAXgOAyQgbgcgohQg");
	this.shape_94.setTransform(42,31.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6978F3").s().p("AgnA8IgWggIgLgRIAAABIgKgQIABAAIAUgBQAegBAhgWQAfgSAKgRIAQAXIAAAAIADAEIAHAKIAOASQAAAPg3AdQgtAZgUADIgCgEg");
	this.shape_95.setTransform(-7.9,-2.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#A2E95A").s().p("AgSB8QgzgBhFgtQhFgugzg9QAmgHAhgWQAggUATgcQBBA/AdAhQAGAFAIAAIAdACIgBgCIAAgCIgPgLQA8gMBCgUQBDgUA1gYQADgBACgJQADgIgDgCIAQgJQgCACAGAEQAGAFgEArQgEArAAAgQABAigJAGQgJAGgJAFIgIAEIgDABQhHAQhEAcQgtASgvAAIgEAAg");
	this.shape_96.setTransform(15.3,8.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#996666").s().p("AgbBpQgPgMgIgIIAAAAIgQgcIgMggQAeAMAVgYQAegiAEgCIgDgFIgEgEIAAAAQAFABAaANIAAAAQAMALADAAQAGABABgDQABgCAAgGQgcgYgzgRQgggLgBgRIgBgVQABgEAEgCQAEgBAHAAIAPABQAhAAAVARIA+A+QgPALAAAcQAAAHADABIAGABIAIgCIABgMIAAAAQAMgcAggKQAGAAAKAIQAIAIAAAFQAAATgzAzQg9A+g6AAQgCAAgOgKgAhCAJIgKgJQgKgGAAgIQAAgKAFgNQAIgTAMAAQARgBAEAGQAFAKAjAIIAAABIgRgCQgJABgDAMIgMAVQgFAJgOAAQgFABgBADIgBAAIABgEgAiOgnQgNgCgDgHQAIgLAKgGQAJgEAGgBQAMAAAdAJQgSAegBAEQgTgKgUgCg");
	this.shape_97.setTransform(-15,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:54,y:64.2}}]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape,p:{x:53.9,y:63.4}}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_68},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_68},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).wait(1));

	// Layer 1
	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AggF0QhKhEgXgjQhTh6gqh8QgnhwAAhiQAAhHAjhfQAihdAXAAQAGAAABABIAAABIADgCIAAAEIAAABIAAAAIABATIgGA5IgEAoQgFAJAAAJIABATQACANgCAGQAKAEAQAyQAbBPApBRQAeA5A5BQQAzBHAeAdIBGgMQgEgVAIgOQAKgQAXAAQAVAAAMAPQALAMAVArQAHAPAeAaQAbAgAAA5QAAAugqAlQgsAohCAAQgGAAgLgFQgLgFgFAAQgFAAgNAIQgMAHgGAAQgaAAhPhLg");
	this.shape_98.setTransform(56.7,38.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhlG0IABgJQAAADgKgKQgTgSgKAAQgHAEAAgBQgJgEgKgGQgUgNAAgVQAAgaAGgOQAIgQAQgCIAIABQgNjMA2i7QBNkLC7h3IADAKQAMAPAHAYQAGAUAAALQAAAhgJAOQgMANgIANQgoBhgnCXQg2DTAHCAQAMBagiA+QgdA3gtAAQglgIABgeg");
	this.shape_99.setTransform(22.4,45.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgCGHQg4g6g0haQiEjhAAjXQAAhnAqhNQAmhFAnAAIAKAIQAEAFAAAMQAAA9gKAtQgJArgNAKQBWDfAWAsQA8CGBOBJQAKgBAUgMQASgKATAAQAHAAAJAHQAPALAAAVQgJAkgVANQAsAJAQAPQAKAJAAAOQAAASgLAMQgPARgggCIAEAHQAFAIAAAGQAAAKgJAMQgKAOgMADQgFADgXACQgUACgOAGQgKAFgJAAQggAAg0g4g");
	this.shape_100.setTransform(50.8,37.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgIG5QgGgEgJgNQgLgOgKgEQgQgGgHgFQgvgkgIgOQgLgTAAg+QAAgrAIhaQANiAAWhpQBDlECAgLIADgIQANASANBRIgHAyQgHA0AAAMQAAABgRAKQgdCBgMCaQgGBPgBA8QAAAeADAFIAQANQATAOALARQALAQAAALQAAALgHAHQgOAQglAAQgDAAgTgOIACAIIAYBQQAAAegwAAQgNAAgIgEg");
	this.shape_101.setTransform(28.7,38.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AggF0QhKhEgXgjQhTh6gqh8QgnhwAAhiQAAhHAjhfQAihdAXAAQAGAAABABIACADQAGAIAEAPQAEAMAAADQAAAzgNAQQgOAQAAAOIABATQACANgCAGQAKAEAQAyQAbBPApBRQAeA5A5BQQAzBHAeAdIBGgMQgEgVAIgOQAKgQAXAAQAVAAAMAPQALAMAVArQAHAPAeAaQAbAgAAA5QAAAugqAlQgsAohCAAQgGAAgLgFQgLgFgFAAQgFAAgNAIQgMAHgGAAQgaAAhPhLg");
	this.shape_102.setTransform(56.7,38.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AkKEpIABAAIAAgDQguhpAAgOQAZhPAogmQAMgLAgg3QAohGAhgtQBRhsCmhbQA9ghA1gVQAxgSAIAEQARAQAEAOQACAEAAALQAAAXgDAGQgCAFgHAIIgPAgQgLAVgBAAQAKAAAGgDIgMAhQADALgFAFIgMAGQgCAFgpAcQg7AmhDBCQhoBmg5CLQAAAVAHAeQAHAeAAAIQAAAbgKAMQgKAKgUAAQgcAAgGgHQgFgGgPgqQgSBLgVAdQgRAYgYAAQg6AAATheg");
	this.shape_103.setTransform(10.3,37.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AjsGaIgigSQgbgJgDgJIABggIgUgPQgTgRAAgIQAAgfAxgaQA0gbACgOQgUgKgKgMQgMgQAAgZQAAgTANgMQAJgJALABQAUAAAMANQALAPAPAAQAGAAACgDIABgDQBDhCASgQQAmgiA6g/QA0g6AjgsQAqg1gEAHIBIhjQAUgcAfgvQAPgXAHgCIANgQQA0A5AABAQAAAPgGAeQgHAigFAAIgGAWQgHAZgLALIABAHQhFB0gSAsQgRAeilDCIhxCKQgwAygzAAQgiAAgTgJg");
	this.shape_104.setTransform(9.1,34.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AjCFhQgOgEgFAAQgQABgPgBQgOgCgHgDQgNgGgFgGQgFgHgGgDQgOgJgKgMQgIgJAAgEQAAgUAcgRQAxgfAhgjQgcAIgTgZQgOgUAAgNQAAgLAGgKQALgTAhgBIA2AAQAvgEBEgSQAwgMAfgUQAWgMAagYQBIg9AghOQATguAlidIAEgEQgEgNAGgDQA0AKAZBCQANAhACAgIgDAbQgDAYgBAPIgDBUQgBADgIAMIAIAAQgFBKhABNQg4BDhUAuQhAAjgfAGQggAJgMAFQgXAJgPAVQgRAYgtAVQgkARgIAAQgEAAgOgGg");
	this.shape_105.setTransform(9.2,30.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgZDrQg+gYgIAAQg6AcgMADIgQADIgLABQgJAAgQgJQgQgKgJAAQgfAAhBhIQAAglAkgLQBJgXAPgJIAJgIQgVgGgPgPQgPgPAAgQQAAgXAQgLQAKgHARAAQAMAAAOAHQAPAJAIABQAKABA6gCQAhAAAxAaQA6AjBUARQAVgtAMg6QALgxAHhHIgEgwQgDgiAOgPIAAgEQABgBAGAAQAVAAASAbQALAQATAqIASAoQAGALARAVIAQASQAOAPABADIADAbQAAAFACACIgXAQIAEgBQgQCcgxBBQgoA0hHAAQhdAAhMgXg");
	this.shape_106.setTransform(13.8,22.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgHGEQg1gcgsgyQh8iNAAjzQAAhmAjhOQAkhRBVhLQAOALAFAbQACAQAAAjQAABCgRAZIgJA3QgIA3AAAbQAABNAuBlQAxByA7ADQBKAEAZAMQASAJAAAVQAAANgaAOQAsALALAHQAOAIAAASQAAAGgCAFIgEAHQgHABgXAQQgDADgGAOIgHAQQgJAJgkAIQgkAHgkAAQgaAAgpgXg");
	this.shape_107.setTransform(44.7,35.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AjWDuQgXgVgXgMQgMgHgZghQgZgjAAgMQAAgYAMgKQAJgGAXgBQBFgEAegSQgWgMgLgTQgJgPAAgPQAAgOAKgNQALgPARAAQANAAAXAQQAZASANACQAQAEAYAAQAVACAXANIBwAqQAKAAAlgzQAPgWAVgmIBOiUIgIgjIAJgBQALAhAiBSQAdBMAAAuQAAAJgGACQgDARgsBKQgpBIgNANQgRATgeANQgiAOglAAQgIAAg1gNQg0gNgSAAQgdAMggAMQg/AZgUAAQgcAAgJgJg");
	this.shape_108.setTransform(9.1,18.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAIEAQgtgDgSgJQgRgIgrgQQgsgQgxghIAFAGIgCAAIgEgCIgHgHQghghgYgnQgRgagGgfQgEgVAKgSQAJgTALgPQARgXAZABQAGgEAHAAQAHgCAIAAIALAGQASAOAMASQAMATAPAQQAbAgAnAOQAfAKAiAEQA3AIA7ABIADgFIAAgFIARhIQALgvAJgwQAOhFAFhJIgLgNQAHgPAcAnIAuBDQAOASASAgQAYAqAAAUQAAAEgDAJIgCAFIACAUQAGA8gYA9QgDAIgNASIgZAiQgMAQgOAMQgOALgbASQgbASgrAHQgeAFgfAAIgegBg");
	this.shape_109.setTransform(16.6,24.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AiHEJQgYgZgRgcQgOgYAAgHQAAgTAMgNQALgMANAAQAOAAAEABQALACAAAGQAAACALAPQAGgGAMgFQAIgDADAAIAPAHIAaAQQArgZAUhSQAVhMAAh2QgOhrAAhDQAAgGADgCIAHgCQgCgHACgNQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAAAQABgCAGAAQAZAABBBdQBEBfgSAdQABADADApIADAwQAACYgzBpQgzBrhKAAQhQAAhGhIg");
	this.shape_110.setTransform(28.6,31.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgxE1QhDhFAAgnQAAgGAIgNQAIgNAAgCQAAgvgJhGQgJhEAAhEQAAiCAbhFQANggAqgzIAGABIABgGIACgFQAEAGAOAvQALAtAAAFQAAAfgCALQgIAPgIAVQAfChA5C7QAvCdAAAKQAAAZgPARQgSATghAAQglAAhBhGg");
	this.shape_111.setTransform(38.9,36);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgOF1QhHhGghg4QhQiJgdhiQgZhRABhoQgBgyASg9QAThGAhgyQAZglAGgEQAFgCAEAFQANAWAAAQQAAAqgPAWQgPAWgBALIACATQABAMgCAHIAHAEQACADAQA3QBQC+AGAJQAwBPAZAlQAMARAyA5IAogJQAfgIAhAAQAVAAAKAMQAGAIAAAKQAAAagwAQQgwAPAAAJQgBAUAUAEQAJACAggDQA8gGAAApQAAAMgHAGQgJAHgcAFIgtAGQgjgNgKgGIgEAHQgCADAAAGQAAALAUAFQATAGAZgDIALgCIAMgBIADAOQgGAbgXAEQgKABgSAJIgRAJQgFAAgFAEIgKAIQgFADgLAAQgfAAhLhKg");
	this.shape_112.setTransform(51.7,38.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("Ak6CrIAAAAIgCgHQgHADgFAAQgEAAgNgDQgNABgJgZIAAAAIgDgNQgvgUANg+QANg5AsgeIADgCIgBABIAFgDQA0grA1geIAAAAIABgBQEritFTDVQADACABAEQAAAEgCADIgBACIAAAAQAAAFgRATQgRAUAAANQAAAIACAIIAEAUQACANAJALQAIALAAACQAAAHgMAAQgCAAgDgDIgEgEQgCAHgFAAIgDAAIAAgBIgCgFIgEACQgDABgEgCQhOgmhSgYIAAgBQhUgXhXAKIAAAAQg9AGg5AZIg4AgIgEABIAAAPQgDAlgPAPQgNAPgYABQgVA9gxgBIgBABQgWAAgJgcgAiRhDIAAAAIAAAAg");
	this.shape_113.setTransform(0.9,8.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AiUD4QhQiYAAimQAAggAEgkQAGgyAMgiQAZhBAUgeQAaglA/g0IgBAJIAMgQIAEgBQAEAHADAVQACARAAAKQAAAngEArQgFAmgBAAQgFAAAAAEQABAFgFAHIgEAIQgRAlADBZQAAAOAHAlQAKAyARAmQASApAcAvQAbAuARARQBjAIAVAHQAbAIAAAbQAAANgaAPQAsALALAGQAOAJAAASQAAALgGAHQgEAFgaAMQAAAKgDAJQgIAMgUAJQgQAHgGAAQhGAKgKAAQh4AAhYing");
	this.shape_114.setTransform(44.7,35.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAbGcQgUgLgGgHIgBgEQgJAAgkgwQgpg1gmhGQhsjFAAiiQAAhsAmhVQAnhYA2ACQAFgFABABQACAEAAAIQAAAOgIAyQgIAsgGAcIADASQAFAhAOBHIAiBuQAjBSAkA8QAVAgA1BFQAEAFgEAIQABAFAkAAQBUABAAAlQAAANgFAFIgZATQAcAEAOALQAOAKAAAOQAAALgJAPIgfAPIgBAHQgBAHgDAFQgKAOgPAHQgaAMg5AAQgsgJgJgEg");
	this.shape_115.setTransform(49,37.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("Ah4GFIgSgGQgDgBgRABQgQAAgDgCQglgXgNgNQgVgVAAgXQAAgXANglQALgcAMgUQAOgYAkhaIAnhgQAfhLBvh9QBzh/BTgvIgBAAIAGgBQAGAAACAEIAAAGQAEAPADA5QAEApAIAbQAAAFgCABIgMAFQACAEAAAFQAAAEgCACQhVBFg9BmQg/BrgtCkQAFAHAEANQADAMAAAIQAAAggMAQQgMAQgVgDQACAIAAAKQgBALgCADQgDAGgQANQgTAPgLAAQgGAAgMgEg");
	this.shape_116.setTransform(14.3,35.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AAtGkIhghlQhshyg0ijQgnh1AAhqQAAhIAihaQAghYAcgJIAAgBQAHAFAHAcQAIAdAAAUQAAAMgWBWQBkEDBgB/QAwBBAdANIAZgEQATgEAFAAQAPAAALAHQAPAKAAAYQAAAWgQAQQgRARgYgBIAGAEQAHADAtAHQArANAAAkQAAAdgcAIIgRADQgLABgHADQgCABgDAHQgEAHgDACQgOAJgMAHQgYAMgeAAQgaAAgZgWg");
	this.shape_117.setTransform(52.4,38.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AieDYQghhNAAhrQAAiwAchEQAEgKAxgkQA2gpAWAAQAgAAAsA6QAxA8AAAyQAAA0ggAWQgdAUgxgLIgHA9IgCApQAAAhADAhQA+gtBHg/QAtgmAPAAIADgKQAOAIAEAYQADANAAAgIgFApQgFAnAAAUQAAAMgHAFIgWAKQAAABAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQABAAAAAGQAAAIhiBMQgQAMgbAMQgpASgoAAQg4AAgkhUg");
	this.shape_118.setTransform(21.1,-2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Aj7CrQgxggAAg3QAAhECIhmQBohQBLghIAEAHQAIgEgEAFIgCACIAEAHIgOBhQgHA1gGAhQAVgEAaghQALgOAEgIQACgFAAgIQAAgcAagPQATgKAPAAQA2ABBAA4QA9A2AAAhQAAAEgFAKQgGANgCAJIgSA0QgMATgbAQQgdAQgaAAQgOAAgUgPQinA4hyAAQhDABgtgeg");
	this.shape_119.setTransform(39.3,13.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AhaCrQgngpg1hGIgIgMIgigvQgQgRgWgnQgVgkgGgGQgEgDghgDQghgEgEgEQgEgFgDgMQgCgLAAgJQAAgiBEAAIARACQANACAqAAQAHAAASAFQAVAEAEAFIAGADIgtgoQgQgOAAgQQAAgcATgKQALgHAVAAQAeAAAhAnQAiAnARA8QAIgDAlgIQASAAAJAOQAJAMAAASQAAARgNAOQgNALggAOIASAZIANARQASAVARAXQA0A+ARAAQAzAABugoIBwgpQAIgFAFgFQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgBAHgCAnQgCAwgEAjQgDAegDAHQgDAHgPAKIADAAIgDAAQgIATgcAMIgsAOQgXAIg0AOQg4AOgOAAQhtAAhghpg");
	this.shape_120.setTransform(3,-4.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AhmCLQgbgdghgqIgGAFIgDgFQgQgag6hOQgxhKAFgiQgZAHgSAAQgKAAgJgMQgJgMAAgNQAAgTAQgMQAIgGAXgKQAJgHAKgFQAUgKAYAAIAwALQAQgCAQAAQAfAAALANQAIAIAPAEQASADAIADQAeALAAA2QAAAYgGAJQgHAJAAANQAAAGAfAlIABAAQASAYARAVQA0A+ARAAQAzAABugoIBwgnQAIgFAFgFQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABQgBAGgCAmQgCAwgEAjQgDAegDAGQgDAIgPAKIADAAIgDAAQgIATgcAMIgsAOQgXAIg0AOQg4AOgOAAQhrAAhihpg");
	this.shape_121.setTransform(4.2,-1.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("Ah0CPQgfgigog0IgEAEQgshFglgrQgOgPgEgmQgKAHgNAAQghgBgBgrQAAgPAVgZQAHgJAFgOIAGgWQAFgFAIgGQAQgKAVAAQBAAABAAsQBBAtgBAtQABAFgFAMQgFANAAAEQAAAGAfAlIAAAAQASAYAUAVQAxA+ARAAQA0gBBtgoIBxgmQAHgFAFgFQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAAAQgBAHgCAlQgCAxgEAiQgDAfgCAGQgEAIgOAJIACAAIgCABQgJATgcAMIgsANQgWAJg1AOQg3AOgOAAQhsAAhihpg");
	this.shape_122.setTransform(5.6,-1.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("Ai1DvQgpgTAAgUQAAgGgFgHQgGgKgDgLQgDgQAAgRQAAhCArhQQBLiNCvhnIAGACIADAKQADAZAAAKQAAAxgTAtQgLAcAHAAIACAAQgBABAAAEIgLALQARgHAPAAQBJAAA3BXQAvBMAABCQAAAWgPAWQgRAagcAAQgMgBgNgGQgKgTgKAAQgdAAhJAgQhGAfg7ABQgsAAgpgTgAgkAEQgbATglAdIAcgIQAPgFAYgNQAfgPALgdIABgJIguAfg");
	this.shape_123.setTransform(33.3,22.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhVEXQgYgBgSgRIAAgBQgWgVgPgaIAAgBQgKgRAAgWIAAg4IABghIAAAAIADggIAAAAIAEgfIAAgCIAShJIAAAAQADgTALgPIgBgBQgDgCAAgEQgDgmAWgeIgDgDQgDgCAAgEIAAgIIAAgBQABgNAIgMIAAgBIAMgWIAAAAQAJgOANgIIAKgGIABAAIAAgBQABgDADgDIARgNQADgBADAAQAcAAATATQAPANAEARIAAAAQAWAKAPARQAMAOAJARIAAAAQALAUAKAWQALAWACAZIABAOIAKgHQADgBADAAIAAgDQAMgBAJAbQAFAPAGAeQAMA2AAARQAAACgLAIIACAEQAAAEgCADIgbAgIgcAgIgeAfIAAgBIgfAeQgTAQgUAPQgSAOgWANIABAAQgXANgZAAIgHAAgAhzD4IAAAAIAAAAgAAJA2IAAAAIAAAAgAhTA2IAAgBIAAAAIAAABgAg2iZIABAAIgBAAgAgqjIIABAAIgBAAgAAAjaIAAAAIAAAAgAgFjyIAEACIgCgCg");
	this.shape_124.setTransform(23.7,3.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AATGWIgrggQg7g6gPgRQgNgQg5hTQh2iugBirQABhmAcg/QANgdA6hSQgBgFACgDIAGABQANAcgFA1QgFA5AJAZIgGATQAIAGAfBdQAgBmAaAoIAZAnQAXAjAlAuQAqAyAEAAIBEgMQgFgVAIgOQAKgQAYAAQASAAAMAQQAFAFAdAxQAJAOAdAaQAbAhAAA5QgBAvgtAmQgvAmg8AAQgFAAgLgFQgLgFgGAAQgEAAgNAIQgNAHgFAAQgMAAgkgYg");
	this.shape_125.setTransform(54.5,36.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("Aj2CdQgmgiAAgtQAAhHBzhMQAfgVBIgqQBCgnAcgVIADABIAAAAIAIgBIAFAUIAGAYQALgLAcgJQAXgGAPgBQBAAVAJAIQAIAIALAEQALAEABABQAFAEAGAMQAHALAPgBQAVAKAAAbQAAAGgEAEQgFAEAAACQgBANABAQQAAAPgBAFQgGAcgRAQQgUASgoAIQgiAFgOAEQgVAHg2AdQhBAlguASQg+AYgvAAQg3AAgogkg");
	this.shape_126.setTransform(35.3,11.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AkdCpQgcgeAAgsQAAhWDpiPQAUgGA+gfQBAgdAoAAQBPAABAAuQBBAtAAA5QAAAXgMAFQgJAFgYgFIgGAYQgGAFgrADQAAAVgSALQgOAJgQAAQgJAAgEgFIgbgqQgMgQgHAAQgGAAgfANIhGAcQAKA7AGALQAIAOACAKQgCAGgCABIgPABQgMARhSAbQhTAcgoAAQgtAAgeggg");
	this.shape_127.setTransform(38.3,9.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("Ai8DBQhGgxABhDQABhCAHgaIAGgbIAUgxIAWg4QAKgUAGgJQAJgPAZgPQAZgPANgEQANgFAQgCQAQgBAQABQBiAAAwA6QAYAcAEAdQAAAOgKAKQgMANgRgJIAAAHQAAAHgHAGIgIAGQAAAFgSACQgWACgCABIgUAMQgKAHgFAAQgHAAgDgCIgJgGQgSAegNAOQgIAOgSBEIAcAAQAbAAAwgNQAtgMB3g+QARgLAKgJIAHAMIACADQAZAnAFAaQAHAfACAaIABAWIgBAAQgEACgLACQgCAWhEAfQhbApiBAAQhSAAg6gpgACXANIAZgNQhJAnAwgag");
	this.shape_128.setTransform(16.1,0);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AAtGfIhghmQhshyg0ijQgnh1AAhqQAAg/AVg+QAUg5AohCIAGAcQAKAkAHATQABAIAAAcQAAARgLAhQBkECBgB/QAwBBAdANIAZgDQATgEAFAAQAPAAALAHQAPAKAAAXQAAAXgQAQQgRAQgYAAIAGAEQAHADAtAGQArANAAAlQAAAcgcAIIgRADQgLACgHACQgCACgDAHQgEAHgDABQgOAKgMAGQgYAMgeAAQgaAAgZgVg");
	this.shape_129.setTransform(52.4,38.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AhiCeQgdgfglgvIgDAGQhDhbgmg9QgBgDgLguQgGgegdgFIgfgFQgOgGgBgSQABgSAPgLQAOgKAWAAQAHAAAoAJIADABIABAAIgCgTQAAgSAQgJQAMgIATAAQAaAAA4ArIAzArIAggLQAVAAAOATQAKAOAAAHQAAANgPAZQgRAagUARQAJAHALATIADAEIgBAAIALAPQASAWASAXQAzA9ARAAQA0AABtgoIBxgpQAHgEAFgEQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQgBAFgCAnQgCAwgEAjQgDAegCAHQgEAHgOAKIACAAIgCAAQgJAUgcALIgsAOQgWAIg1AOQg3APgOAAQhsAAhihpgAi8ijIAAAAIAAAAg");
	this.shape_130.setTransform(3.8,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_98}]},1).to({state:[]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.girl1_34R_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// color
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40152B").s().p("AhfhEQAmAgAgAPQA5AYBAAFQgIAXgHAkIAAACQiZgZgXhwg");
	this.shape.setTransform(-1.8,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("AgyAbIANgqIAHgRQAiADAvACIgEAFQgYAZAAATIACALQgogBgjgFg");
	this.shape_1.setTransform(12.4,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABpAyIgSgBQgygBglgDIgQgCIAAAAQgzgEgvgQQgugQgmgbIgQgNIAAgRQAcATAgAOQAzASA3ALQAZAGAcAFQA7AJA8AAQAvAAAsgJIgLAaIgPAAIgBAAIAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBIgfACIgzgBg");
	this.shape_2.setTransform(10,-3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40152B").s().p("ABKBbIgCgBQg6gPgsgaIgMgHQgigVgPglIgFgQQgCgMAAgMQAAgNAEgWIALALQArAmAlARQAwAWA2AFIgFAJQgRAiAAAeIAAARIgDgBg");
	this.shape_3.setTransform(-4,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#862D59").s().p("AgRAvIghgFIgDgBQgDgPAAgGQAAgdAXgoIALABQAgADAvACIgJAOQgaAjAAAfQAAAIACAFIgpgDg");
	this.shape_4.setTransform(10.6,7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABhBAIgSAAQg0gCglgEIgDgBIgMgBQgrgEgngOQgvgQglgbIgjgdIAHgfQANAMAnAUQA2AbAYAFQAwAOAeAIQA1AOBdAAQAgAAA8gKIgQAmIgPABIgBAAIAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAgBAAAAIgfACIhCgCg");
	this.shape_5.setTransform(9.3,-5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#862D59").s().p("AgyAzIACgOQADglANghIAMghQAVAFAXABIAbACIgIANQgYArAAAgQAAAYADANQgkgFgkgLg");
	this.shape_6.setTransform(5.8,8.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#40152B").s().p("AA3BrIgCAAQg2gSgigdQg1gwAAhBIAAgBIAEgzIABgCIAXAVQArAmAjARQAiAPAlAIIgKAXQgUA4AAAiIAAADIgEgBg");
	this.shape_7.setTransform(-6.3,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAsBDIgPgBIghgDQgVgBgUgEIgLgCQgXgFgXgIQgugQgmgbIgwgnIADgfQAbAWBnAnQBkAlByAAQBKAAAwgFIgTAuIgPABIgBgBIAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgfABQhGgBg2gDg");
	this.shape_8.setTransform(8.8,-5.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40152B").s().p("AgTA5QgQgYAAgaQAAgpAWgtIAFgJIAOADQgJAfAAAqQAAAfAGAVQAPAlASAMQgkgBgTgfg");
	this.shape_9.setTransform(5.3,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#862D59").s().p("AhFAkQgJgbAAgXQAAgoANgfIAIABQA2AFBSABQgJA0gjAxIgCADIgCAEIgBABIgBACIgDADIgDADIgBACIgDAEIgCACIgBABIgMAOIgBAAIgCACQgJAKgLAGIgNAGQgagPgLgjg");
	this.shape_10.setTransform(14,10.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag2AbIgCAAIgOgCIgOgBQAog5BLAAQA2AAAAAxIgBASQhTgBg3gGg");
	this.shape_11.setTransform(13.7,-2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#862D59").s().p("AhIgCQAFgbAHgVIAMAAQAwAFBJACIgBABIgKAfIgDAFQgbA4g2ABIgBAAQguAAgDg1g");
	this.shape_12.setTransform(13.1,7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag6AaIgGgBQAbg4A4gBQARAAAWAaQAHANAAAOIAAAMQhIgCgzgFg");
	this.shape_13.setTransform(14.1,-2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#862D59").s().p("AgUAEQgEgDAAgJIAxACIgCAEIgCACIgCACIgDADIgCABIgFACIgDABIgEAAQgQAAgGgFg");
	this.shape_14.setTransform(15.8,3.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAUQAIgxAfAJQAQgBAAAaIgCARIg1gCg");
	this.shape_15.setTransform(16.2,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACnAsIgGAAQgggPgVACIgcgBQhIACgYAHIgVgCIgDAAQg1gghAAAIgCAAIgMgRIgZgfQAiALAzANQCUAkBkAAQAVAAAkgEIADgBIgNAfIgPABIgBgBIAAABIgBAAIAAAAg");
	this.shape_16.setTransform(12,-3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#40152B").s().p("AgbAIQgigcgKggIgCgHQAmAhAhAPQAiAOAnAIIAAAIIAAAHQAAASADAHIgNAJQgvgPgpglg");
	this.shape_17.setTransform(-4.1,0.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#862D59").s().p("AA0AhIgMgBIAPgEIADAFIgGAAgAg5gcIAAgEIAGABIABADQADAHAJAOIgPAHQgEgRAAgLg");
	this.shape_18.setTransform(9.7,4.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D580AA").s().p("AhFARIgBAAIALgIIARgJIAGAGQAEgCAAgBIgSghIAcADQAkAEA2ABIADAMQAAAOgVALIgFACIgQAFIgdAIQgbgEgqgJg");
	this.shape_19.setTransform(10.5,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABQA1IgNgBQgugCghgDQgSgCgRgCIgSgEQgXgFgWgHQgugQgmgcIgVgRIgFgTQAPAIAhAMIAeALQAfAOAfAIIALABQA4APA2AHQAhAEAjABIAoAAQAagBAfgEIAPgBIgNAeIgPABIgBAAIAAAAQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAIgfABIhQgBgACEAPIAbgBIACAAIgMABIgJAAIgIAAg");
	this.shape_20.setTransform(9.6,-4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("ACIBQQhggCgZgCQgegCgvgKQhLgRgoggQglgcgHgaIgCgGIAAgIIAIAHQAqAnAlAPQA9AbBDAEQA5AGBfAAIABAAIAUAAIgIANIgOAWIAAAAIgHAAgAgIAZQgzgEgvgQQgugOgmgeIgigbIAAgOQAQAKAnAPQA2ATAfAHQAuANAiAGQAjAHApADIBgADQAZAAAbgDIAGAAIgOAeIgPABIgBAAIAAAAQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAgBAAIgfABQhrgBhBgGg");
	this.shape_21.setTransform(9.2,-1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#862D59").s().p("AAOBBQgWACgZgGIgVgGIgEgCIACgWQACgrABgHQAFgVALgZQAgAIAfACIAgADIgQAgQgKAZAAAtQAAAKABAGIgTgBg");
	this.shape_22.setTransform(5.5,7.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#40152B").s().p("AAZA+QgmgTgegdIgCgCQAUgoAkgdIAIgFIAbAJIgJAaQgLAdAAAhIABAcIgCgBg");
	this.shape_23.setTransform(-4.3,6.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAzANIgPgBIgmgEQgegCgdgGIgNgCIgPgEQAVgHAZAAQBLAAA3AaIADABIgngBg");
	this.shape_24.setTransform(8.5,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

	// black
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAcArQhLgLg5geQgxgXACgPQABgIAGgBQAMAOAjATQA5AaBHALQApAGAngEQAhgFAGABIACgBQgHAJgeAIQgZAHgbAAQgRAAgSgDg");
	this.shape_25.setTransform(7.6,-2.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AjNAgQgXgWgLgVQgLgXABgYIADgsIABABIACAAIABAAIADABQA6AYAvAQQAfAKAiAIQApALAqAFQA3AKA4gCQA8gEA7gJIAGAEIghAKIgBAAIgEABIgLAgIgFAIIhQADIgBAAIgrgBQghAlAAARIABAIQAkAAAYgHQAGAAAAAEQAAAGgTAGQgVAGgaAAQiqAAhLhHg");
	this.shape_26.setTransform(12,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiCDQglgEglgIQgtgLgpgVIgMgIQgRgJgNgNQgegggKgrIgBgQQAGhZAPgIQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIACABIACACQAmAYA9AYQCDAyCJAAQBOAABLgcQAGAAAAAEQAAADgDADIg4AUIgGABIgOAsIgFAHIhQADIgBAAIg5gBIgKAQQgaApAAAYQAAAHAEAJIAsADQAAAKgnAAQghAAgegDg");
	this.shape_27.setTransform(12.3,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag5CeQglgDgkgOQgagJgagOQhqg6AAhiQAAgfAEgcIADgjQADgUAHgDQAAgBABAAQAAAAABAAQABgBAAAAQABAAABAAIALAIQAgATAdAOIASAIIAxAUQAvASAnAGQAeAFBaAJQBvAAA2gOQAbgHANgHQAEAAABAGQAAAWhIAJIgQAyIgFAHIhQADIgBAAQhBAAgvgDIgGAOQgYAzAAAYIAEAmQAXABAJALIgFACIgoABIgVAAg");
	this.shape_28.setTransform(12.1,0.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhmBfQgOgcAAgZQAAgyAdgxQAphHBQgLQAhACAaALQAYALAAAKIAAADIgGAAQAEAUAAAIQAAAQgDARQgGAlgVAmQgZAugKAOQgkAugpAAQgzAAgYgtg");
	this.shape_29.setTransform(11.9,7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AhWAgQAAgdAVglQALgWAOgOQAKgLAMgHIAFgCIAMgDIATgHIABAAQBEgBAABLQAAAIgCAJIABABIgBAAQgEATgNAbQggA+g5ABIgCAAQg6AAgFhFg");
	this.shape_30.setTransform(13,3.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgoAMQACg+AtAAQAbAAAGAUIABANIAAACIAAAAIAAALQABA4gvgBQgjAAAAgng");
	this.shape_31.setTransform(15.9,0.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgoAtQgygagygGIgSgDQASAhAAAKIABAIIgDADQgQgYgbgxQgWgfgYgVQghgOAAgMQACgIAGAAQAyAZAUAHQAjAPAwAMQB9AiB0ABQASAAAjgEQAZgBAQgEQAEAAAAAFIgBACQgFADgWAEIgGASIAFgCQANAAAXAKQAWAJAAAEQAAAEgEAAIgegNQgJgEgOgBIgCAAIgGAAIgDANIgGAHIgMABQAjATAAAMQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQgXgRgUgLQglgVhCAAQhAAAgYALQAjAbAKAXIgBAAQgggkgdgPg");
	this.shape_32.setTransform(12.5,-2.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AiwAoQhGgyAAg6IgBgOIABgMQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgIAHAAIBBAcIARAGQAkAPAlAKQAgAJAiAHQA2AMA6AAIAQABIAGAAIABAAIAbgBIAJgBIBcgKQAGAAAAAGQAAAGgcAEIgMAkIgFAHIhQAEIgBAAIgygBIACADIABAHIAAACIgBAHIAAABIgBADIgBABIAAAAIAAABIgVAUIgDACIAHAJIAEABIAAAAQA0ABAAAFQAAAKg4AAQiRAAhXhCg");
	this.shape_33.setTransform(11.2,-0.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AjNAoQhEgnAAgvQAAgeAEgLIAAgCQAAgIAHABIBFAdQAWAJA3ARQAYAHA3ALQApAIAjADQAeADAdgBQAtAHAsgHIATgDQARAAAwgKQAAAAABAAQAAAAABAAQAAAAAAABQAAAAABAAIAAADQAAAJg1AJIgNABIgLAmIgFAHIgzACIgFALIgMAXIgBABIAAAAIgBABIAAABQAmACAAAGQABAEgGAAIhBABQjFAAhig5g");
	this.shape_34.setTransform(12.5,-2.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAKBgQglAAglgMQgngPghgXIgKgIIgJgIQgIgKAAgIIAAgBQAAgPAKgOQAdgnArgXQAegQAhABQBQAAAoAVQA+AbAAASQABAGgHAAIgCgBIgHgGIgIgFIhIgDQgOAZgFATQgCAGgEAsIgDAXIAUgCQAIAAAAAHIgEAIIgLACIgCABQgCABgiAAIgGAAg");
	this.shape_35.setTransform(5.9,6.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25}]}).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-7.4,30.6,9.2);


(lib.girl_34_collar_behind = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5159BA").s().p("Ah+AkQg0gPAAgVQAAgUA0gPQA1gPBJAAQBKAAA1APQA0APABAUQgBAVg0APQg1APhKAAQhJAAg1gPg");
	this.shape.setTransform(20.6,7.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC5A9QAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIABgiQAAgOgIgJIgEAJQgXAPgWALQgrAVg5AAQg/AAhJgSQhAgRgBgIQAAgFAFgDQADgDAAgEIgEgCQgGgFgFgKQgDgBgGACIgJAEIgGgCQgCgHAAgGQAEgJAZgJQAwgRBoAAQB2AAA3AWQA7AXAAA1QAAAKgFAJQgFAIgEAAQgGAAgCgCg");
	this.shape_1.setTransform(20.8,6.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,12.8);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girl134eyeR("single",0);
	this.instance.setTransform(60,-0.7,1.102,1.102,0.3,0,0,15.5,17.2);

	this.instance_1 = new lib.girl134eyeL("single",0);
	this.instance_1.setTransform(-53.1,0.1,1.102,1.102,0.3,0,0,21.2,23.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.2,-25.7,158.6,52);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girl134eyeR("single",0);
	this.instance.setTransform(60,-0.7,1.102,1.102,0.3,0,0,15.5,17.2);

	this.instance_1 = new lib.girl134eyeL("single",0);
	this.instance_1.setTransform(-53.1,0.1,1.102,1.102,0.3,0,0,21.2,23.3);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.2,-25.7,158.6,52);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girl1pupil("synched",0);
	this.instance.setTransform(-51,2.3,1.05,1.05,0.3);

	this.instance_1 = new lib.girl1pupil2("synched",0);
	this.instance_1.setTransform(53.1,0.2,1.05,1.05,0.3,0,0,2.3,2.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.4,-5.2,107.1,10.6);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.girl1pupil("synched",0);
	this.instance.setTransform(-51,2.3,1.05,1.05,0.3);

	this.instance_1 = new lib.girl1pupil2("synched",0);
	this.instance_1.setTransform(53.1,0.2,1.05,1.05,0.3,0,0,2.3,2.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.4,-5.2,107.1,10.6);


(lib.GIRL_HEAD_yum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18
	this.instance = new lib.girl1pupil("synched",0);
	this.instance.setTransform(128.4,143.8,1.05,1.05,0.3);

	this.instance_1 = new lib.girl1pupil2("synched",0);
	this.instance_1.setTransform(235.7,144,1.05,1.05,0.3,0,0,2.3,2.6);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(189.6,146.6);

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(189.9,148.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]}).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]},2).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:243.4,y:151}},{t:this.instance,p:{x:139.2,y:153.1}}]},4).to({state:[{t:this.instance_1,p:{x:243,y:148.6}},{t:this.instance,p:{x:138.8,y:150.7}}]},1).to({state:[{t:this.instance_1,p:{x:243.3,y:147.1}},{t:this.instance,p:{x:139.1,y:149.2}}]},2).to({state:[{t:this.instance_1,p:{x:243.4,y:146.5}},{t:this.instance,p:{x:139.2,y:148.6}}]},2).to({state:[{t:this.instance_1,p:{x:243.3,y:147.1}},{t:this.instance,p:{x:139.1,y:149.2}}]},7).to({state:[{t:this.instance_1,p:{x:243,y:148.6}},{t:this.instance,p:{x:138.8,y:150.7}}]},5).to({state:[{t:this.instance_1,p:{x:243.4,y:151}},{t:this.instance,p:{x:139.2,y:153.1}}]},16).to({state:[]},2).to({state:[{t:this.instance_1,p:{x:243,y:148.6}},{t:this.instance,p:{x:138.8,y:150.7}}]},6).to({state:[{t:this.instance_2,p:{x:189.6,y:146.6}}]},2).to({state:[{t:this.instance_2,p:{x:189.7,y:147.3}}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_1,p:{x:240.1,y:146.9}},{t:this.instance,p:{x:133.6,y:148.9}}]},25).to({state:[{t:this.instance_1,p:{x:237.1,y:145.7}},{t:this.instance,p:{x:130.2,y:146}}]},3).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]},1).wait(4));

	// Layer 16
	this.instance_4 = new lib.girl134eyeR("single",0);
	this.instance_4.setTransform(238.7,138.6,1.102,1.102,0.3,0,0,15.5,17.2);

	this.instance_5 = new lib.girl134eyeL("single",0);
	this.instance_5.setTransform(125.5,139.5,1.102,1.102,0.3,0,0,21.2,23.3);

	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(178.4,137.6);

	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(178.7,139.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:0,x:238.7,y:138.6}}]}).to({state:[{t:this.instance_5,p:{startPosition:12,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:5,x:238.7,y:138.6}}]},2).to({state:[{t:this.instance_5,p:{startPosition:1,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:1,x:238.7,y:138.6}}]},1).to({state:[{t:this.instance_5,p:{startPosition:1,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:1,x:238.7,y:138.6}}]},1).to({state:[{t:this.instance_5,p:{startPosition:12,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:5,x:238.7,y:138.6}}]},3).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:0,x:238.7,y:138.6}}]},1).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.8,y:138}},{t:this.instance_4,p:{startPosition:0,x:239,y:137.1}}]},2).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.9,y:137.4}},{t:this.instance_4,p:{startPosition:0,x:239.1,y:136.5}}]},2).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.8,y:138}},{t:this.instance_4,p:{startPosition:0,x:239,y:137.1}}]},7).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:0,x:238.7,y:138.6}}]},5).to({state:[{t:this.instance_5,p:{startPosition:12,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:5,x:238.7,y:138.6}}]},16).to({state:[{t:this.instance_5,p:{startPosition:3,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:3,x:238.7,y:138.6}}]},2).to({state:[{t:this.instance_5,p:{startPosition:3,x:124.7,y:142.5}},{t:this.instance_4,p:{startPosition:3,x:237.9,y:141.6}}]},1).to({state:[{t:this.instance_5,p:{startPosition:3,x:124.5,y:143.2}},{t:this.instance_4,p:{startPosition:3,x:237.7,y:142.3}}]},1).to({state:[{t:this.instance_5,p:{startPosition:3,x:124.9,y:141.8}},{t:this.instance_4,p:{startPosition:3,x:238.1,y:140.9}}]},3).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:0,x:238.7,y:138.6}}]},1).to({state:[{t:this.instance_6,p:{regY:0,scaleY:1,x:178.4,y:137.6}}]},2).to({state:[{t:this.instance_6,p:{regY:25.8,scaleY:1.041,x:178.5,y:164.1}}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},25).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:0,x:238.7,y:138.6}}]},3).to({state:[{t:this.instance_5,p:{startPosition:0,x:125.5,y:139.5}},{t:this.instance_4,p:{startPosition:0,x:238.7,y:138.6}}]},1).wait(4));

	// Layer 17
	this.instance_8 = new lib.girl1_34R_mouth("single",0);
	this.instance_8.setTransform(157.8,183,1.299,1.299,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({startPosition:0},0).wait(1).to({scaleY:1.05,startPosition:14},0).wait(1).to({scaleY:1.3},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(1).to({rotation:-1.6,x:159.6,y:181.4},0).wait(1).to({x:160.1,y:181},0).wait(2).to({x:160.9,y:180.4},0).wait(2).to({rotation:-1.8,x:161.3,y:180},0).wait(7).to({rotation:-1.6,x:161.2,y:180.2},0).wait(1).to({x:161.1,y:180.3},0).wait(1).to({x:160.9,y:180.9},0).wait(1).to({x:160.3,y:181.7},0).wait(16).to({startPosition:5},0).wait(2).to({rotation:-1.8,x:157.8,y:183,startPosition:1},0).wait(2).to({startPosition:10},0).wait(1).to({x:156.9,y:186.1},0).wait(1).to({x:156.7,y:186.7},0).wait(2).to({startPosition:1},0).wait(1).to({x:157.1,y:185.3,startPosition:2},0).wait(1).to({x:157.8,y:183},0).wait(1).to({startPosition:1},0).wait(1).to({x:157.6,y:182.1,startPosition:0},0).wait(2).to({rotation:-1.6},0).wait(2).to({rotation:-1.8,x:157.8,y:183},0).wait(25).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4));

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABiAvQgDAAggghQgggegagDQgkgDgiASQgdAPgCAAQgGAAgBgFIgBgEQABgNAugWQAzgXAfATQAbAFAcAdQAaAagBAOIgCAGQgBAEgDAAIgBAAg");
	this.shape.setTransform(234.8,117.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA7gpAkgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgaAWQgHAAgCgEg");
	this.shape_1.setTransform(120.9,119);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA8gpAjgBQA3ABAUALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgaAWQgHAAgBgEg");
	this.shape_2.setTransform(121.6,121.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA7gpAkgBQA3ABAVALQAGADANASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgCgEg");
	this.shape_3.setTransform(123.2,126.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA7gpAkgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgaAWQgHAAgBgEg");
	this.shape_4.setTransform(120.6,117.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA8gpAjgBQA3ABAVALQAGADANASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgCgEg");
	this.shape_5.setTransform(120.8,116.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA8gpAjgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgBgEg");
	this.shape_6.setTransform(120.9,115.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA8gpAjgBQA4ABAUALQAHADAMASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgBgEg");
	this.shape_7.setTransform(120,120.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA8gpAjgBQA3ABAVALQAHADAMASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgCgEg");
	this.shape_8.setTransform(119.8,121.3);

	this.instance_9 = new lib.Tween5("synched",0);
	this.instance_9.setTransform(175.8,114.1);

	this.instance_10 = new lib.Tween6("synched",0);
	this.instance_10.setTransform(176,115.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]}).to({state:[{t:this.shape_2,p:{x:121.6,y:121.3}},{t:this.shape,p:{x:235.5,y:120}}]},2).to({state:[{t:this.shape_3},{t:this.shape,p:{x:236.1,y:122}}]},1).to({state:[{t:this.shape_2,p:{x:123.4,y:127.7}},{t:this.shape,p:{x:236.2,y:122.5}}]},1).to({state:[{t:this.shape_2,p:{x:121.6,y:121.3}},{t:this.shape,p:{x:235.5,y:120}}]},3).to({state:[{t:this.shape_4,p:{y:117.6}},{t:this.shape,p:{x:233.4,y:112.4}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:233.6,y:110.9}}]},2).to({state:[{t:this.shape_6},{t:this.shape,p:{x:233.7,y:110.3}}]},2).to({state:[{t:this.shape_5},{t:this.shape,p:{x:233.6,y:110.9}}]},7).to({state:[{t:this.shape_4,p:{y:117.6}},{t:this.shape,p:{x:233.4,y:112.4}}]},5).to({state:[{t:this.shape_2,p:{x:121.6,y:121.3}},{t:this.shape,p:{x:235.5,y:120}}]},16).to({state:[{t:this.shape_4,p:{y:117.6}},{t:this.shape,p:{x:233.4,y:112.4}}]},2).to({state:[{t:this.shape_7},{t:this.shape,p:{x:232.8,y:115.4}}]},1).to({state:[{t:this.shape_8,p:{x:119.8,y:121.3}},{t:this.shape,p:{x:232.6,y:116.1}}]},1).to({state:[{t:this.shape_8,p:{x:120.3,y:120.2}},{t:this.shape,p:{x:233.1,y:115}}]},3).to({state:[{t:this.shape_4,p:{y:117.6}},{t:this.shape,p:{x:233.4,y:112.4}}]},1).to({state:[{t:this.instance_9,p:{x:175.8,y:114.1}}]},2).to({state:[{t:this.instance_9,p:{x:175.6,y:112.9}}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.shape_4,p:{y:118.3}},{t:this.shape,p:{x:233.7,y:114.6}}]},25).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},3).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},1).wait(4));

	// Layer 1
	this.instance_11 = new lib.girl134earL("synched",0);
	this.instance_11.setTransform(74.6,144.4,1,1,0.3,0,0,15,20.9);

	this.instance_12 = new lib.girl134hairfr("synched",0);
	this.instance_12.setTransform(173,81.9,1,1,3.1,0,0,75.2,29.8);

	this.instance_13 = new lib.girl134nose("synched",0);
	this.instance_13.setTransform(195.1,159.6,1,1,0.3,0,0,7,5.5);

	this.instance_14 = new lib.girl134head("synched",0);
	this.instance_14.setTransform(153.8,140.4,1,1,0.3,0,0,91.4,90.4);

	this.instance_15 = new lib.girl134poof2("synched",0);
	this.instance_15.setTransform(156.4,42.7,1,1,0.3,0,0,45.4,42.4);

	this.instance_16 = new lib.girl134poof1("synched",0);
	this.instance_16.setTransform(46.8,63.4,1,1,0.3,0,0,46.5,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]}).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},3).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.3,y:158.1}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.4,y:157.5}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.3,y:158.1}},{t:this.instance_12},{t:this.instance_11}]},7).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},5).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},16).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:194.2,y:162.7}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.6,rotation:0,skewX:-0.9,skewY:-1.3,x:47.1,y:64.6,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.5,rotation:0,skewX:-0.6,skewY:-0.6,x:156.5,y:43.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:194,y:163.3}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.6,rotation:0,skewX:-0.9,skewY:-1.3,x:47.1,y:64.6,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.5,rotation:0,skewX:-0.6,skewY:-0.6,x:156.5,y:43.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:194,y:163.3}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:80.2,rotation:0,skewX:-1.2,skewY:-1.9,x:81.4,y:103.9,regY:83,scaleX:1.001}},{t:this.instance_15,p:{regY:59.8,rotation:0,skewX:-1.2,skewY:-1.4,x:185.3,y:60.5,regX:74}},{t:this.instance_14},{t:this.instance_13,p:{x:194,y:163.3}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:194.4,y:161.9}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},1).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:194.8,y:157.8}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:194.9,y:158.4}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},2).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},25).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},3).to({state:[{t:this.instance_16,p:{regX:46.5,rotation:0.3,skewX:0,skewY:0,x:46.8,y:63.4,regY:42.8,scaleX:1}},{t:this.instance_15,p:{regY:42.4,rotation:0.3,skewX:0,skewY:0,x:156.4,y:42.7,regX:45.4}},{t:this.instance_14},{t:this.instance_13,p:{x:195.1,y:159.6}},{t:this.instance_12},{t:this.instance_11}]},1).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,258,231.1);


(lib.GIRL_HEAD_ToLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18
	this.instance = new lib.girl1pupil("synched",0);
	this.instance.setTransform(128.4,143.8,1.05,1.05,0.3);

	this.instance_1 = new lib.girl1pupil2("synched",0);
	this.instance_1.setTransform(235.7,144,1.05,1.05,0.3,0,0,2.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]}).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]},2).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]},1).to({state:[]},2).to({state:[{t:this.instance_1,p:{x:239.5,y:145.9}},{t:this.instance,p:{x:133.5,y:144.8}}]},20).to({state:[{t:this.instance_1,p:{x:238.9,y:137.6}},{t:this.instance,p:{x:132.9,y:136.5}}]},1).to({state:[{t:this.instance_1,p:{x:238.9,y:137.6}},{t:this.instance,p:{x:132.9,y:136.5}}]},2).to({state:[{t:this.instance_1,p:{x:238.9,y:137.6}},{t:this.instance,p:{x:132.9,y:136.5}}]},2).to({state:[{t:this.instance_1,p:{x:238,y:140.3}},{t:this.instance,p:{x:130.6,y:139.8}}]},20).to({state:[{t:this.instance_1,p:{x:236.7,y:142.7}},{t:this.instance,p:{x:129.7,y:142.3}}]},2).to({state:[{t:this.instance_1,p:{x:235.7,y:144}},{t:this.instance,p:{x:128.4,y:143.8}}]},1).wait(8));

	// Layer 16
	this.instance_2 = new lib.girl134eyeR("single",0);
	this.instance_2.setTransform(238.7,138.6,1.102,1.102,0.3,0,0,15.5,17.2);

	this.instance_3 = new lib.girl134eyeL("single",0);
	this.instance_3.setTransform(125.5,139.5,1.102,1.102,0.3,0,0,21.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,regY:17.2}}]}).to({state:[{t:this.instance_3,p:{scaleY:1.071,y:140.2,startPosition:0}},{t:this.instance_2,p:{scaleY:1.071,y:139.4,startPosition:0,regY:17.2}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:13}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:5,regY:17.2}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:11}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:4,regY:17.2}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:13}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:5,regY:17.2}}]},20).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,regY:17.2}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.145,y:138.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.145,y:137.5,startPosition:0,regY:17.1}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,regY:17.2}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,regY:17.2}}]},20).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,regY:17.2}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,regY:17.2}}]},1).wait(8));

	// Layer 17
	this.instance_4 = new lib.girl1_34R_mouth("single",0);
	this.instance_4.setTransform(157.8,183,1.299,1.299,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({scaleX:1.22,scaleY:1.07,startPosition:10},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(10).to({startPosition:5},0).wait(1).to({scaleX:1.22,scaleY:1.07,startPosition:10},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:8},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(10).to({scaleX:1.3,scaleY:1.3},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AqrA1IgBgEQAAgSA5gmQA8gpAlAAQA4ABAUAKQAHAEAMARIgBAFQAAAAAAAAQAAABAAAAQgBAAgBAAQgBAAgBAAQgGAAgYgIQgYgJgkAAQgeAAg7AoQgeAWgaAVQgHAAgBgDgAKlAlQgDAAggggQgggfgagCQgmgDgiARQgdAPgCAAQgGAAgBgCIgBgFQABgPAugVQAzgYAhATQAbAGAcAdQAaAagBAOIgCAGQgBADgDAAIgBAAg");
	this.shape.setTransform(176.9,118.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AqrA1IgBgEQAAgSA5gmQA8gpAlAAQA4ABAUAKQAHAEAMARIgBAFQAAAAAAAAQAAABAAAAQgBAAgBAAQgBAAgBAAQgGAAgYgIQgYgJgkAAQgeAAg7AoQgeAWgaAVQgHAAgBgDgAKlAlQgDAAggggQgggfgagCQgmgDgiARQgcAPgDAAQgGAAgBgCIgBgFQABgPAugVQAzgYAhATQAbAGAcAdQAaAagBAOIgCAGQgBADgDAAIgBAAg");
	this.shape_1.setTransform(177.2,119.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABiAvQgDAAggghQgggegagDQgkgDgiASQgdAPgCAAQgGAAgBgFIgBgEQABgNAugWQAzgXAfATQAbAFAcAdQAaAagBAOIgCAGQgBAEgDAAIgBAAg");
	this.shape_2.setTransform(237.6,127.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA7gpAkgBQA3ABAVALQAGADANASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgCgEg");
	this.shape_3.setTransform(123.7,129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AqrA1IgBgEQAAgSA5gmQA8gpAlAAQA4ABAUAKQAHAEAMARIgBAFQAAAAAAAAQAAABAAAAQgBAAgBAAQgBAAgBAAQgGAAgYgIQgXgJglAAQgeAAg7AoQgeAWgaAVQgHAAgBgDgAKlAlQgDAAggggQgggfgagCQgmgDgiARQgdAPgCAAQgFAAgCgCIgBgFQABgPAugVQAzgYAhATQAbAGAcAdQAaAagBAOIgCAGQgBADgDAAIgBAAg");
	this.shape_4.setTransform(176.6,117.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:176.9,y:118.6}}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape,p:{x:177.7,y:122.8}}]},1).to({state:[{t:this.shape,p:{x:179.7,y:128.7}}]},2).to({state:[{t:this.shape_3},{t:this.shape_2}]},20).to({state:[{t:this.shape,p:{x:176.3,y:115.1}}]},1).to({state:[{t:this.shape,p:{x:176.3,y:113.8}}]},2).to({state:[{t:this.shape,p:{x:176.3,y:115.1}}]},2).to({state:[{t:this.shape_4}]},20).to({state:[{t:this.shape,p:{x:176.9,y:118.6}}]},2).to({state:[{t:this.shape,p:{x:176.9,y:118.6}}]},1).wait(8));

	// Layer 1
	this.instance_5 = new lib.girl134earL("synched",0);
	this.instance_5.setTransform(74.6,144.4,1,1,0.3,0,0,15,20.9);

	this.instance_6 = new lib.girl134hairfr("synched",0);
	this.instance_6.setTransform(173,81.9,1,1,3.1,0,0,75.2,29.8);

	this.instance_7 = new lib.girl134nose("synched",0);
	this.instance_7.setTransform(195.1,159.6,1,1,0.3,0,0,7,5.5);

	this.instance_8 = new lib.girl134head("synched",0);
	this.instance_8.setTransform(153.8,140.4,1,1,0.3,0,0,91.4,90.4);

	this.instance_9 = new lib.girl134poof2("synched",0);
	this.instance_9.setTransform(156.4,42.7,1,1,0.3,0,0,45.4,42.4);

	this.instance_10 = new lib.girl134poof1("synched",0);
	this.instance_10.setTransform(46.8,63.4,1,1,0.3,0,0,46.5,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},14).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},6).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},20).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,258,231.1);


(lib.GIRL_HEAD_FamTab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 18
	this.instance = new lib.girl1pupil("synched",0);
	this.instance.setTransform(128.4,143.8,1.05,1.05,0.3);

	this.instance_1 = new lib.girl1pupil2("synched",0);
	this.instance_1.setTransform(235.7,144,1.05,1.05,0.3,0,0,2.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},3).to({state:[{t:this.instance_1},{t:this.instance}]},7).to({state:[]},2).to({state:[{t:this.instance_1},{t:this.instance}]},3).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_1},{t:this.instance}]},15).to({state:[]},2).to({state:[{t:this.instance_1},{t:this.instance}]},10).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_1},{t:this.instance}]},50).wait(10));

	// Layer 16
	this.instance_2 = new lib.girl134eyeR("single",0);
	this.instance_2.setTransform(238.7,138.6,1.102,1.102,0.3,0,0,15.5,17.2);

	this.instance_3 = new lib.girl134eyeL("single",0);
	this.instance_3.setTransform(125.5,139.5,1.102,1.102,0.3,0,0,21.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,x:238.7}}]}).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,x:238.7}}]},3).to({state:[{t:this.instance_3,p:{scaleY:1.027,y:141.2,startPosition:13,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.027,y:140.4,startPosition:5,x:238.7}}]},7).to({state:[{t:this.instance_3,p:{scaleY:1.027,y:141.2,startPosition:1,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.027,y:140.4,startPosition:1,x:238.7}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.027,y:141.2,startPosition:13,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.027,y:140.4,startPosition:5,x:238.7}}]},3).to({state:[{t:this.instance_3,p:{scaleY:1.051,y:140.7,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.051,y:139.9,startPosition:0,x:238.7}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.131,y:138.9,startPosition:0,regY:23.2,x:124.5}},{t:this.instance_2,p:{scaleY:1.131,y:137.9,startPosition:0,x:238.7}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.7,startPosition:0,regY:23.3,x:124.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,x:238.7}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.7,startPosition:13,regY:23.3,x:124.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:5,x:238.7}}]},15).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:14,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:4,x:238.7}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:140.5,startPosition:14,regY:23.3,x:125.7}},{t:this.instance_2,p:{scaleY:1.102,y:139.6,startPosition:4,x:238.9}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:141,startPosition:14,regY:23.3,x:125.8}},{t:this.instance_2,p:{scaleY:1.102,y:140.1,startPosition:4,x:239}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:140.5,startPosition:14,regY:23.3,x:125.7}},{t:this.instance_2,p:{scaleY:1.102,y:139.6,startPosition:4,x:238.9}}]},6).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.7,startPosition:13,regY:23.3,x:124.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:5,x:238.7}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.02,y:141.4,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.02,y:140.6,startPosition:0,x:238.7}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,x:238.7}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,x:238.7}}]},2).to({state:[{t:this.instance_3,p:{scaleY:1.102,y:139.5,startPosition:0,regY:23.3,x:125.5}},{t:this.instance_2,p:{scaleY:1.102,y:138.6,startPosition:0,x:238.7}}]},50).wait(10));

	// Layer 17
	this.instance_4 = new lib.girl1_34R_mouth("single",0);
	this.instance_4.setTransform(157.8,183,1.299,1.299,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({scaleX:1.06,scaleY:0.97,startPosition:8},0).wait(1).to({scaleX:1.3,scaleY:1.3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:7},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({x:158,y:184,startPosition:1},0).wait(1).to({x:158.1,y:184.5,startPosition:10},0).wait(2).to({startPosition:1},0).wait(2).to({scaleX:1.17,scaleY:0.92,y:184},0).wait(1).to({scaleX:1.3,scaleY:1.3,x:158,startPosition:0},0).wait(2).to({x:157.8,y:183},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(1).to({startPosition:6},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:7},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({scaleY:0.92},0).wait(2).to({scaleY:1.3,startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:6},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:10},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:10},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:8},0).wait(2).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(10));

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABiAvQgDAAggghQgggegagDQgkgDgiASQgdAPgCAAQgGAAgBgFIgBgEQABgNAugWQAzgXAfATQAbAFAcAdQAaAagBAOIgCAGQgBAEgDAAIgBAAg");
	this.shape.setTransform(234.8,117.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA7gpAkgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgaAWQgHAAgCgEg");
	this.shape_1.setTransform(120.9,119);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABXA9QgDgBgWgoQgXgmgYgJQgigNglAIQghAJgCAAQgFgCgBgFIABgEQAEgOAzgJQA1gJAbAaQAYANAUAhQASAigEANIgEAFQgCADgCAAIgCAAg");
	this.shape_2.setTransform(233.5,114.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhsBJIgCgEQgEgRAsg0QAvg2AigKQA2gOAWAFQAIACAQAOIAAAEQAAABAAAAQAAAAAAABQgBAAAAAAQgBABgBAAQgGABgZgCQgagCgjAJQgbAIgtA2QgXAcgVAcIgEABQgDAAgBgCg");
	this.shape_3.setTransform(120.6,116.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AibBCIgDgIIBbgbQBqgnBlg2QAGgEALAAIACADQh1CCi3AAIgOgBg");
	this.shape_4.setTransform(127.2,127.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAWQg9gtgEgXQgCgFgDgGIAFgJIAxAhIAQAMIABABQA2A2AyAKIgBALIgBAMIgGAAQgnAAg6gtg");
	this.shape_5.setTransform(235.6,126.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AicBCIgCgIIBbgbQBrgnBjg2QAIgEAKAAIACADQh1CCi3AAIgPgBg");
	this.shape_6.setTransform(127.9,130.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgRAWQg+gtgEgXQgBgFgDgGIAEgJIAyAhIAQAMIABABQA2A2AyAKIgCALIAAAMIgGAAQgnAAg6gtg");
	this.shape_7.setTransform(236.2,130);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AibBCIgDgIIBagbQBrgnBlg2QAHgEAJAAIADADQh1CCi3AAIgOgBg");
	this.shape_8.setTransform(128.3,132.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRAWQg+gtgDgXQgBgFgEgGIAFgJIAxAhIAQAMIABABQA2A2AyAKIgBALIgBAMIgGAAQgnAAg6gtg");
	this.shape_9.setTransform(236.7,132.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAXAKQgwgqhAgbIAEgMQAdgBAbAMQApAVAmAhQAbAWALAjQAFAOgIAHg");
	this.shape_10.setTransform(237.3,123.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah6AcQAHgJAJgGQA1gfA4gTQA9gTA/AHQADABgDAFQgDAHgEAGQg3AHg1AOQgfAHgeANQgeAQgeASIgLAHQgOgKAMgOg");
	this.shape_11.setTransform(128.6,125.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3,p:{x:120.6,y:116.7}},{t:this.shape_2,p:{x:233.5,y:114.9}}]},3).to({state:[{t:this.shape_3,p:{x:121.2,y:119.1}},{t:this.shape_2,p:{x:234.1,y:117.3}}]},7).to({state:[{t:this.shape_3,p:{x:122.3,y:123.9}},{t:this.shape_2,p:{x:235.2,y:122.1}}]},2).to({state:[{t:this.shape_3,p:{x:121.5,y:120.3}},{t:this.shape_2,p:{x:234.4,y:118.4}}]},3).to({state:[{t:this.shape_3,p:{x:121,y:118.5}},{t:this.shape_2,p:{x:233.9,y:116.6}}]},1).to({state:[{t:this.shape_3,p:{x:120.6,y:116.7}},{t:this.shape_2,p:{x:233.5,y:114.9}}]},1).to({state:[{t:this.shape_3,p:{x:120.8,y:117.7}},{t:this.shape_2,p:{x:233.7,y:115.9}}]},2).to({state:[{t:this.shape_3,p:{x:121.3,y:120.2}},{t:this.shape_2,p:{x:234.2,y:118.3}}]},15).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},6).to({state:[{t:this.shape_11,p:{x:128.6,y:125.8}},{t:this.shape_10,p:{x:237.3,y:123.5}}]},2).to({state:[{t:this.shape_11,p:{x:127.5,y:121}},{t:this.shape_10,p:{x:236.2,y:118.7}}]},1).to({state:[{t:this.shape_11,p:{x:126.4,y:116.2}},{t:this.shape_10,p:{x:235.1,y:113.9}}]},1).to({state:[{t:this.shape_11,p:{x:126.4,y:116.2}},{t:this.shape_10,p:{x:235.1,y:113.9}}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},50).wait(10));

	// Layer 1
	this.instance_5 = new lib.girl134earL("synched",0);
	this.instance_5.setTransform(74.6,144.4,1,1,0.3,0,0,15,20.9);

	this.instance_6 = new lib.girl134hairfr("synched",0);
	this.instance_6.setTransform(173,81.9,1,1,3.1,0,0,75.2,29.8);

	this.instance_7 = new lib.girl134nose("synched",0);
	this.instance_7.setTransform(195.1,159.6,1,1,0.3,0,0,7,5.5);

	this.instance_8 = new lib.girl134head("synched",0);
	this.instance_8.setTransform(153.8,140.4,1,1,0.3,0,0,91.4,90.4);

	this.instance_9 = new lib.girl134poof2("synched",0);
	this.instance_9.setTransform(156.4,42.7,1,1,0.3,0,0,45.4,42.4);

	this.instance_10 = new lib.girl134poof1("synched",0);
	this.instance_10.setTransform(46.8,63.4,1,1,0.3,0,0,46.5,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},3).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},7).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},3).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},15).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.3,y:160.6}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.4,y:161.1}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.3,y:160.6}},{t:this.instance_6},{t:this.instance_5}]},6).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},2).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7,p:{x:195.1,y:159.6}},{t:this.instance_6},{t:this.instance_5}]},50).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,258,231.1);


(lib.GIRL_HEAD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 20
	this.instance = new lib.girl1pupil2("synched",0);
	this.instance.setTransform(243.3,151.5,1.05,1.05,0.3,0,0,2.3,2.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(153).to({startPosition:0,_off:false},0).wait(37).to({startPosition:0},0).wait(1).to({x:240,y:148.2},0).wait(1).to({x:237.6,y:145.9},0).wait(1).to({x:236.2,y:144.4},0).wait(1).to({x:235.7,y:144},0).to({_off:true},6).wait(100));

	// Layer 18
	this.instance_1 = new lib.girl1pupil("synched",0);
	this.instance_1.setTransform(128.4,143.8,1.05,1.05,0.3);

	this.instance_2 = new lib.girl1pupil2("synched",0);
	this.instance_2.setTransform(235.7,144,1.05,1.05,0.3,0,0,2.3,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:235.7,y:144,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.4,y:143.8,scaleY:1.05}}]}).to({state:[{t:this.instance_2,p:{x:235.8,y:145.3,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.5,y:145.1,scaleY:1.05}}]},30).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:235.8,y:145.3,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.5,y:145.1,scaleY:1.05}}]},5).to({state:[{t:this.instance_2,p:{x:235.7,y:144,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.4,y:143.8,scaleY:1.05}}]},1).to({state:[{t:this.instance_2,p:{x:235.7,y:143.6,regY:2.7,scaleY:1.075}},{t:this.instance_1,p:{x:128.4,y:143.4,scaleY:1.075}}]},1).to({state:[{t:this.instance_2,p:{x:235.7,y:144,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.4,y:143.8,scaleY:1.05}}]},2).to({state:[{t:this.instance_2,p:{x:235.8,y:145.3,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.5,y:145.1,scaleY:1.05}}]},53).to({state:[]},2).to({state:[{t:this.instance_2,p:{x:241.5,y:153.2,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:139,y:153.8,scaleY:1.05}}]},4).to({state:[{t:this.instance_2,p:{x:242.9,y:153.1,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:142.4,y:150.5,scaleY:1.05}}]},1).to({state:[{t:this.instance_2,p:{x:243.3,y:151.5,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:142.8,y:148.9,scaleY:1.05}}]},1).to({state:[{t:this.instance_2,p:{x:243.5,y:152.4,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:143,y:149.8,scaleY:1.05}}]},40).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:243.3,y:151.5,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:142.8,y:148.9,scaleY:1.05}}]},3).to({state:[{t:this.instance_2,p:{x:243.5,y:152.4,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:143,y:149.8,scaleY:1.05}}]},4).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:142.8,y:148.9,scaleY:1.05}}]},3).to({state:[{t:this.instance_1,p:{x:142.8,y:148.9,scaleY:1.05}}]},37).to({state:[{t:this.instance_1,p:{x:136.5,y:146.7,scaleY:1.05}}]},1).to({state:[{t:this.instance_1,p:{x:132,y:145.1,scaleY:1.05}}]},1).to({state:[{t:this.instance_1,p:{x:129.3,y:144.1,scaleY:1.05}}]},1).to({state:[{t:this.instance_1,p:{x:128.4,y:143.8,scaleY:1.05}}]},1).to({state:[{t:this.instance_2,p:{x:235.8,y:145.3,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.5,y:145.1,scaleY:1.05}}]},6).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:235.8,y:145.3,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.5,y:145.1,scaleY:1.05}}]},5).to({state:[{t:this.instance_2,p:{x:235.7,y:144,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.4,y:143.8,scaleY:1.05}}]},1).to({state:[{t:this.instance_2,p:{x:235.7,y:143.6,regY:2.7,scaleY:1.075}},{t:this.instance_1,p:{x:128.4,y:143.4,scaleY:1.075}}]},1).to({state:[{t:this.instance_2,p:{x:235.7,y:144,regY:2.6,scaleY:1.05}},{t:this.instance_1,p:{x:128.4,y:143.8,scaleY:1.05}}]},2).wait(90));

	// Layer 16
	this.instance_3 = new lib.girl134eyeR("single",0);
	this.instance_3.setTransform(238.7,138.6,1.102,1.102,0.3,0,0,15.5,17.2);

	this.instance_4 = new lib.girl134eyeL("single",0);
	this.instance_4.setTransform(125.5,139.5,1.102,1.102,0.3,0,0,21.2,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]}).to({state:[{t:this.instance_4,p:{startPosition:11,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:4,scaleY:1.102,y:138.6}}]},30).to({state:[{t:this.instance_4,p:{startPosition:1,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:1,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:11,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:4,scaleY:1.102,y:138.6}}]},5).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.129,y:138.9}},{t:this.instance_3,p:{startPosition:0,scaleY:1.129,y:137.9}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},2).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},53).to({state:[{t:this.instance_4,p:{startPosition:1,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:1,scaleY:1.102,y:138.6}}]},2).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},4).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.129,y:138.9}},{t:this.instance_3,p:{startPosition:0,scaleY:1.129,y:137.9}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},2).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},38).to({state:[{t:this.instance_4,p:{startPosition:1,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:1,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},3).to({state:[{t:this.instance_4,p:{startPosition:1,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:1,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:11,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:4,scaleY:1.102,y:138.6}}]},3).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.129,y:138.9}},{t:this.instance_3,p:{startPosition:0,scaleY:1.129,y:137.9}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},2).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},36).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},7).to({state:[{t:this.instance_4,p:{startPosition:1,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:1,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:12,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:5,scaleY:1.102,y:138.6}}]},5).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.129,y:138.9}},{t:this.instance_3,p:{startPosition:0,scaleY:1.129,y:137.9}}]},1).to({state:[{t:this.instance_4,p:{startPosition:0,scaleY:1.102,y:139.5}},{t:this.instance_3,p:{startPosition:0,scaleY:1.102,y:138.6}}]},2).wait(90));

	// Layer 17
	this.instance_5 = new lib.girl1_34R_mouth("single",0);
	this.instance_5.setTransform(157.8,183,1.299,1.299,-1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(36).to({startPosition:0},0).wait(57).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(39).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(94));

	// Layer 19
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABiAvQgDAAggghQgggegagDQgkgDgiASQgdAPgCAAQgGAAgBgFIgBgEQABgNAugWQAzgXAfATQAbAFAcAdQAaAagBAOIgCAGQgBAEgDAAIgBAAg");
	this.shape.setTransform(234.8,117.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA7gpAkgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgaAWQgHAAgCgEg");
	this.shape_1.setTransform(120.9,119);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA8gpAjgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgBgEg");
	this.shape_2.setTransform(121.4,120.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA8gpAjgBQA4ABAUALQAHADAMASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgBgEg");
	this.shape_3.setTransform(122.3,123.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah6AxIgBgDQAAgSA5gmQA8gpAjgBQA4ABATALQAIADAMASIgCAEQABABAAAAQAAAAgBAAQAAABgBAAQgBAAgBAAQgGAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgaAWQgHAAgBgEg");
	this.shape_4.setTransform(122.6,124.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA8gpAjgBQA3ABAVALQAGADANASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgZgJQgXgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgCgEg");
	this.shape_5.setTransform(122.2,122.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah7AxIAAgDQAAgSA5gmQA8gpAjgBQA3ABAVALQAHADAMASIgBAEQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgCAAQgFAAgYgJQgYgIgkgBQgdAAg6ApQgeAVgbAWQgGAAgCgEg");
	this.shape_6.setTransform(121.2,119.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{x:235.3,y:119.2}}]},30).to({state:[{t:this.shape_3},{t:this.shape,p:{x:236.2,y:122.3}}]},1).to({state:[{t:this.shape_4,p:{x:122.6,y:124.5}},{t:this.shape,p:{x:236.5,y:123.2}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},4).to({state:[{t:this.shape_6},{t:this.shape,p:{x:235.1,y:118.6}}]},1).to({state:[{t:this.shape_4,p:{x:120.8,y:118.2}},{t:this.shape,p:{x:234.7,y:116.9}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},2).to({state:[{t:this.shape_2},{t:this.shape,p:{x:235.3,y:119.2}}]},53).to({state:[{t:this.shape_3},{t:this.shape,p:{x:236.2,y:122.3}}]},2).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},4).to({state:[{t:this.shape_6},{t:this.shape,p:{x:235.1,y:118.6}}]},1).to({state:[{t:this.shape_4,p:{x:120.8,y:118.2}},{t:this.shape,p:{x:234.7,y:116.9}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},2).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},38).to({state:[{t:this.shape_3},{t:this.shape,p:{x:236.2,y:122.3}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},3).to({state:[{t:this.shape_6},{t:this.shape,p:{x:235.1,y:118.6}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},3).to({state:[{t:this.shape_3},{t:this.shape,p:{x:236.2,y:122.3}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},3).to({state:[{t:this.shape_6},{t:this.shape,p:{x:235.1,y:118.6}}]},1).to({state:[{t:this.shape_4,p:{x:120.8,y:118.2}},{t:this.shape,p:{x:234.7,y:116.9}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},2).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},36).to({state:[{t:this.shape_2},{t:this.shape,p:{x:235.3,y:119.2}}]},7).to({state:[{t:this.shape_3},{t:this.shape,p:{x:236.2,y:122.3}}]},1).to({state:[{t:this.shape_4,p:{x:122.6,y:124.5}},{t:this.shape,p:{x:236.5,y:123.2}}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{x:236.1,y:121.6}}]},4).to({state:[{t:this.shape_6},{t:this.shape,p:{x:235.1,y:118.6}}]},1).to({state:[{t:this.shape_4,p:{x:120.8,y:118.2}},{t:this.shape,p:{x:234.7,y:116.9}}]},1).to({state:[{t:this.shape_1},{t:this.shape,p:{x:234.8,y:117.7}}]},2).wait(90));

	// Layer 1
	this.instance_6 = new lib.girl134earL("synched",0);
	this.instance_6.setTransform(74.6,144.4,1,1,0.3,0,0,15,20.9);

	this.instance_7 = new lib.girl134hairfr("synched",0);
	this.instance_7.setTransform(173,81.9,1,1,3.1,0,0,75.2,29.8);

	this.instance_8 = new lib.girl134nose("synched",0);
	this.instance_8.setTransform(195.1,159.6,1,1,0.3,0,0,7,5.5);

	this.instance_9 = new lib.girl134head("synched",0);
	this.instance_9.setTransform(153.8,140.4,1,1,0.3,0,0,91.4,90.4);

	this.instance_10 = new lib.girl134poof2("synched",0);
	this.instance_10.setTransform(156.4,42.7,1,1,0.3,0,0,45.4,42.4);

	this.instance_11 = new lib.girl134poof1("synched",0);
	this.instance_11.setTransform(46.8,63.4,1,1,0.3,0,0,46.5,42.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},193).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,258,231.1);


(lib.Avril_Yum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl1-34-arm-L
	this.instance = new lib.girl134armLgmcopy("single",9);
	this.instance.setTransform(-0.2,27,0.965,0.965,-15.4,0,0,37.6,2.2);

	this.instance_1 = new lib.girl134armL("single",72);
	this.instance_1.setTransform(24.3,51,0.964,0.964,-4.2,0,0,37.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regX:37.6,rotation:-15.4,x:-0.2,y:27,startPosition:9,scaleX:0.965,scaleY:0.965,regY:2.2,skewX:0,skewY:0}}]},10).to({state:[{t:this.instance,p:{regX:37.7,rotation:-16.2,x:-1.1,y:25.2,startPosition:3,scaleX:0.965,scaleY:0.965,regY:2.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:37.6,rotation:-13.1,x:-2,y:23.2,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:37.6,rotation:-13.1,x:-1.3,y:24.1,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.2,skewX:0,skewY:0}}]},3).to({state:[{t:this.instance,p:{regX:37.6,rotation:-13.9,x:-1.6,y:24.9,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:37.6,rotation:-14,x:-1.4,y:25.5,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.3,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.6,rotation:-14.4,x:-1.1,y:26.2,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.4,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.6,rotation:-14.9,x:-0.7,y:27.2,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.4,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.6,rotation:-15.4,x:-0.3,y:28.4,startPosition:3,scaleX:0.964,scaleY:0.964,regY:2.4,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.7,rotation:-16.2,x:0.2,y:29.7,startPosition:3,scaleX:0.965,scaleY:0.965,regY:2.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.7,rotation:-16.2,x:-0.3,y:28,startPosition:3,scaleX:0.965,scaleY:0.965,regY:2.2,skewX:0,skewY:0}}]},11).to({state:[{t:this.instance,p:{regX:37.7,rotation:-16.2,x:-0.4,y:27.4,startPosition:3,scaleX:0.965,scaleY:0.965,regY:2.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.7,rotation:-14.9,x:0.1,y:30.5,startPosition:3,scaleX:0.965,scaleY:0.965,regY:2.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:37.7,rotation:-13.2,x:3.3,y:42.7,startPosition:9,scaleX:0.964,scaleY:0.964,regY:2.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:37.6,rotation:-10.1,x:7.7,y:54.3,startPosition:11,scaleX:0.964,scaleY:0.964,regY:2.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:37.6,rotation:-7.6,x:12,y:56.6,startPosition:4,scaleX:0.964,scaleY:0.964,regY:2.3,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:37.6,rotation:0,x:14.6,y:56.3,startPosition:4,scaleX:0.964,scaleY:0.963,regY:2.2,skewX:-11.3,skewY:-11.6}}]},1).to({state:[{t:this.instance,p:{regX:37.6,rotation:-13.1,x:22.7,y:57.7,startPosition:4,scaleX:0.964,scaleY:0.964,regY:2.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(39));

	// girl1-34-hand-L
	this.instance_2 = new lib.girl134armRgmcopy2("single",9);
	this.instance_2.setTransform(28.2,20.2,1.083,1.083,-9.1,0,0,-15.1,-27.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AhGAxIgHgEQgMgGAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQgCgNALgQQATggACgGQAKgeAPgWQALgQAEABQAAAAAAABQABAAAAABQAAAAAAABQABABAAABIgDADQABACACACQA1AtA0AkQgLBFhLAxIhKg5g");
	this.shape.setTransform(-15.6,16.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A2E95A").s().p("Ag+BnQhcgbhNg4IgagUQBIgvAOhHQCnBrB+gGIAHAtICBgUIgCAFQgzBUhiARQggAFgfAAQg1AAg1gQg");
	this.shape_1.setTransform(12.3,28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYCmQhfgbhQg6Ih5hYQgDgDgBgDQgBgFADgDQACgDAEgBIADAAIAHAEIBMA2QBLguALhIQg0gkg3gsQgCgCgBgCIADgEQgBgBAAgBQAAAAAAgBQAAAAgBgBQAAAAAAAAIABgCQACgDAEAAQAEgBAEADQA4AuA1AlIABAAQCkBsB/gEIADATQiBAHikhqQgOBHhIAvIAaAUQBNA4BcAbQBSAaBXgPQBigRAzhUIACgFIAYgDIgKASQg3BchqASQgiAFghAAQg5AAg3gRg");
	this.shape_2.setTransform(7.9,23.6);

	this.instance_3 = new lib.girl134armRgmcopy("single",3);
	this.instance_3.setTransform(26.6,16.4,1.083,1.083,-7.1,0,0,-15.1,-27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2E95A").s().p("AgrBFIAAAAQgqgSgmgVQBDgoABhNQA0AkA7AcQADABAEgBIADgBIADAVIA2gIQAFAvgcAcQgZAYgnAAQgjAAgsgTg");
	this.shape_3.setTransform(46.3,70.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6978F3").s().p("AhFAtIgBACIgEgCQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgBIAOgaQANgZABgMQABgIAOgbQANgaAAgDIAAgLQABgJAKACIACAAIABAJIAAABIABgBQAmAsAvAkIAAABIABAHIAAADIgBAEIAAABIAAAGIAAABIAAACQgHA9g2AeIgHAEQgpgbgmghg");
	this.shape_4.setTransform(30.8,61.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBCFQgugTgpgXIAAgBIgKgFIgCgCQgvgdgogkQgDgDgBgEQAAgEACgDQACgCADAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABIAEABIACgCQAlAiArAbIAIgFQA1geAHg6IAAgCIAAgBIAAgHIAAgBIABgFIAAgDIgBgIIAAgBQgvgkgogrIAAAAIgCgJIgCgBQAAgEACgCQADgDAEABQAEAAADADQAqAvAzAlIAFADQApAgAyAZIAGAGIAUAOIABAGIgDACQgEABgDgCQg9gZgyglQgBBLhDArQAmAVAoARIAAAAQBhApAwgtQAcgcgFgyIATgDQAIA+gkAiQgdAcgtAAQgnAAgygVg");
	this.shape_5.setTransform(41.5,65.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A2E95A").s().p("AgfBMQhHgYgjgYIAAAAQBEgnARhKQA0AmBAAUIAGAlIBEgKIgCAVQgHAfgcAOIgBAAQglAUgoAAQgZAAgdgKg");
	this.shape_6.setTransform(53.8,82.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6978F3").s().p("AgqAzIgmgjIgGgFIgCACQgEAAgCgBIAAgDIgBgJQBKhGAegTIgBgCIADABIAEgCQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBACIADADIAEADQAKAJAAADIAAABQAfAdAhAUQgOBKhHAnQgdgWgYgVg");
	this.shape_7.setTransform(37.1,74.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAaCBQhIgZglgaQgHgDgHgGIAAgBQghgWgrgjIgwgoIgBgBIAZgCIAAACQABABAFAAIABgCIAHAGIAmAgQAYAVAfAWQBHgnAOhKQgigUgegdIAAAAQAAgEgKgJIgEgDIAAgBQgBgEAEgDQACgCADgBQABAFAEAAIAEgBQAjAjAoAYIACACQAqAfAvATQAHAGANAHIAGAFIACALQhAgSg1glQgQBHhEApIABABQAjAXBFAZQBGAXA/ghIAAAAQAcgOAHggIADgVIAUgDQgBAOgDAPQgIAoglASIAAAAQgqAWgsAAQgfAAgfgLg");
	this.shape_8.setTransform(47.4,78.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2E95A").s().p("AgbBNQhJgUgkgVIAAgBQBBgrAOhLQA0AgA4ARIAHAsIBPgKIgBANQgFAfgcAQIgBAAQgnAYgsAAQgWAAgYgHg");
	this.shape_9.setTransform(57.9,80.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhCAQhJgVgmgXQgIgDgHgGIAAAAQgigVgtggIgyglIgBgBIAZgEIAAACIAGABIABgBIAHAEIAnAeQAaAUAgAUQBEgrALhKQgjgTgggbIAAAAQAAgEgLgJIgEgCIAAgBQAAgEADgDQACgDADgBQABAFAEAAIAEgBQAlAhApAVIADACQAqAcAwASIASAKIACAQQg6gRg0ggQgLBJhCAtIABABQAkAVBGAUQBHATA9gkIAAAAQAcgQAFgfIABgPIAUgDIgCAUQgGApgkAVIAAgBQgtAbgyAAQgZAAgbgHg");
	this.shape_10.setTransform(51.1,77.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6978F3").s().p("AgnA2IgnghIgHgEIgBACIgGgBIAAgDIgDgJQBHhKAdgVIgBgCIADABIAEgCQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIACACIAEADQALAJAAADIAAABQAgAbAjASQgLBLhEAqQgegTgagUg");
	this.shape_11.setTransform(40.5,74);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6978F3").s().p("AgiA5IgqgeIgHgEIgCACQgEAAgBgBIgBgCIgDgJQBChOAcgXIAAgCIACABIADgDQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABIAAACQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAEADQALAIABAEIAAAAQAiAZAjAQQgFBLhCAvQgegSgbgSg");
	this.shape_12.setTransform(50.2,74.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2E95A").s().p("AgXBNQhKgQglgTIgBAAQA+gvAKhLQA5AfBAANIADAXIBKgLQABAOgBANQgDAggaARIgBAAQgrAdgxAAQgQAAgUgEg");
	this.shape_13.setTransform(68.1,81);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAoB9QhLgQgngVIgPgIIAAgBQgjgSgvgdIg0gjIgBAAIAXgGIABADQABABAFgBIABgBIAIAEIApAbQAbATAhARQBBguAGhLQgkgQgigZIAAgBQAAgDgLgIIgFgDIAAgBQAAgEADgDQABgDAEgBQABAFAEAAIAEgCQAnAfArATQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAsAZAxAOIAWALIAIAEIACANQhBgNg6gfQgHBJg+AxIAAAAQAmATBHAQQBIAPA6goIABAAQAagRAEggQABgPgBgOIATgDQACAQgCARQgDAqgjAWIAAAAQgxAhg3AAQgVAAgVgFg");
	this.shape_14.setTransform(61.2,78.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6978F3").s().p("AgvA4IgagiQASgUAYgHIABAAQAcgMAagRIAAABQAIgEAHgIIAAAAQAFgFADgGQAIAMAHAPIAMAWQgzBAhDAAIgDgBg");
	this.shape_15.setTransform(73.1,57.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#996666").s().p("AhHBeIAAAAIgDgDIgBgBQgEgHgCgHIgCgPIAAAAQAFgXAUgOQAPgLAPgJIAOgQIALgMIgEgCQgEgBgDACQgdARgaAQIAAAAQgXAQgIAYQgFgCgCgFQgIgPAIgOIABAAIAAAAQAUgVAZgNIAAgBIABgBQAKgLAUgSIAEgEIAAAAQgDgCgEABQgFABgFACIgCABIgaAOIAAAAQgVAMgSASQAAgFACgEIAAgBQAFgZAYgPQASgNAZgHQAUgGAUgEIgBAAIAZgDIAHAAQAYAAAUAQQAVAQALAYIABABIAAABIgBAHIgBABQgCAFgEAFIgBABQgFAEgGAEQgbAOgbALIAAAAQgfAMgVAcIAAAAIgHAIIgBAAIgUASQgJAHgJACIgCABIgGABIgDAAg");
	this.shape_16.setTransform(65.3,53.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A2E95A").s().p("Ag7AlIABAAIgOgYQBEgDAwg8IAHAPIAAAAIAEAFQAKAdAHAdIABADIh8ATIgIgNg");
	this.shape_17.setTransform(77,64.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAACAIgUglIgBAAIgCgEIgYgfQgLALgLAJQgMAIgNAEIAAAAIAAABIgBAEIgUgBIgBAAQgFgDgCgDQgFgDgCgFIAAABQgHgLgBgLQgCgGAAgFQgQgFgIgOIABAAQgMgXALgSQgHgRAFgQQAIggAdgTQAVgPAcgIIgBAAQAWgGAWgFIAAAAIAagDIABAAIAIAAQAdAAAZATIAAABQAZATAOAdIAAACIABAAQAOAVAMAaIAPAaIAAABIANAaIABAAIAEAIQALAeAHAgIAAAAIACAFIgUADIgBgEQgHgegKgdIgEgFIAAgBIgHgOQgyA+hEADIAOAXIgBAAIAJAOIgVAEIgFgIgAgiApIAaAjQBFABA0hCIgMgVQgHgOgIgMQgDAFgFAFIAAABQgHAHgIAFIAAgBQgcAPgcAMIgBAAQgWAJgSATgAhlBGIACAAQAJgDAJgHIAUgSIABAAIAHgHIAAgBQAXgcAegJIAAAAQAagLAbgRQAGgDAFgFIABAAQAEgFACgGIABAAIABgHIAAgBIgBgBQgLgYgVgRQgUgPgWAAIgHAAIgZACIABAAQgWAFgUAGQgZAHgSAMQgYAPgFAaIAAAAQgCAEAAAFQASgRAVgMIAAAAIAagPIACgBQAFgCAFAAQAEgBADACIAAAAIgEADQgUASgKAMIgBABIAAAAQgZAOgUAWIAAABIgBAAQgIALAIAPQACAGAFACQAIgZAXgNIAAAAQAagTAdgQQADgCAEABIAEACIgLALIgOATQgPAJgPAJQgUAOgFAWIAAABIACAOQACAIAEAHIABAAIADADIAAAAQAFABAEgCg");
	this.shape_18.setTransform(69.2,56);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_3,p:{x:26.6,y:16.4,rotation:-7.1,regY:-27.1,startPosition:3}}]},2).to({state:[{t:this.instance_3,p:{x:27.3,y:17.3,rotation:-7.1,regY:-27.1,startPosition:3}}]},3).to({state:[{t:this.instance_3,p:{x:26.9,y:18.8,rotation:-7.6,regY:-27.1,startPosition:3}}]},2).to({state:[{t:this.instance_3,p:{x:27.1,y:19.2,rotation:-7.7,regY:-27.1,startPosition:3}}]},1).to({state:[{t:this.instance_3,p:{x:27.3,y:19.9,rotation:-8.2,regY:-27.1,startPosition:3}}]},1).to({state:[{t:this.instance_3,p:{x:27.6,y:20.6,rotation:-8.7,regY:-27.1,startPosition:3}}]},1).to({state:[{t:this.instance_3,p:{x:28,y:21.5,rotation:-9.2,regY:-27.1,startPosition:3}}]},1).to({state:[{t:this.instance_3,p:{x:28.5,y:22.6,rotation:-9.9,regY:-27.1,startPosition:3}}]},1).to({state:[{t:this.instance_3,p:{x:27.9,y:20.9,rotation:-9.9,regY:-27.1,startPosition:3}}]},11).to({state:[{t:this.instance_3,p:{x:27.8,y:20.3,rotation:-9.9,regY:-27.1,startPosition:3}}]},1).to({state:[{t:this.instance_3,p:{x:28.6,y:23.9,rotation:-8.7,regY:-27.2,startPosition:3}}]},2).to({state:[{t:this.instance_3,p:{x:31.9,y:37,rotation:-6.9,regY:-27.1,startPosition:9}}]},2).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[]},1).wait(39));

	// girl1-34-collar
	this.instance_4 = new lib.girl134collar("synched",0);
	this.instance_4.setTransform(31,32.5,1,1,0.3,0,0,22.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({rotation:0.5,x:31.3,y:37.8},0).wait(1).to({x:31.9,y:39.8},0).wait(2).to({rotation:-0.5,x:30.1,y:40.4},0).wait(2).to({rotation:0.4,x:22.4,y:33.6},0).wait(1).to({rotation:-5.5,x:17.2,y:23.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9,x:16.9,y:18.5},0).wait(2).to({regX:22.5,rotation:-9.8,x:15.7,y:16.5},0).wait(2).to({x:15.5,y:15.3},0).wait(3).to({x:15.9,y:15.8},0).wait(2).to({x:15.8,y:16.8},0).wait(1).to({regX:22.6,x:16,y:17.2},0).wait(1).to({x:16.2,y:17.9},0).wait(1).to({x:16.5,y:18.7},0).wait(1).to({x:16.8,y:19.7},0).wait(1).to({regX:22.5,x:17.1,y:20.9},0).wait(11).to({x:16.5,y:19.2},0).wait(1).to({x:16.4,y:18.6},0).wait(2).to({regX:22.6,rotation:-8.6,x:17.3,y:22},0).wait(2).to({rotation:-6.8,x:20.7,y:34.8},0).wait(2).to({regY:8.4,scaleX:1,scaleY:1,rotation:-3.7,x:25.5,y:47.1},0).wait(1).to({regY:8.5,scaleX:1,scaleY:1,rotation:-1.2,x:30.1,y:50.4},0).wait(1).to({rotation:0,skewX:-0.9,skewY:-1.2,x:30.7},0).wait(2).to({regX:22.5,rotation:0.9,skewX:0,skewY:0,x:38.9,y:50.5},0).wait(1).to({regX:22.6,rotation:2,x:42.7,y:45.7},0).wait(1).to({regX:22.5,regY:8.3,scaleX:1,scaleY:1,rotation:2.7,x:57.5,y:30.1},0).wait(1).to({x:56.9,y:24.8},0).wait(1).to({x:57,y:23.5},0).wait(2).to({x:57.2,y:24.4},0).wait(2).to({x:57.3,y:25},0).wait(20).to({regY:8.5,rotation:2.4,x:58.2,y:29.9},0).wait(2).to({rotation:0.9,x:60.3,y:37.7},0).wait(1).to({regY:8.6,rotation:-1,y:42.5},0).wait(2).to({x:55.7,y:47.6},0).wait(1).to({regX:22.6,scaleX:1,scaleY:1,rotation:0.3,x:38.9,y:42.5},0).wait(2).to({rotation:0.3,x:32.4,y:35.5},0).wait(1).to({x:30.8,y:31.6},0).wait(2).to({x:31,y:32.5},0).wait(2));

	// girl1-34-arm-R
	this.instance_5 = new lib.girl134armRgmcopy2("single",9);
	this.instance_5.setTransform(28.2,20.2,1.083,1.083,-9.1,0,0,-15.1,-27.1);

	this.instance_6 = new lib.girl134armRgmcopy("single",3);
	this.instance_6.setTransform(27.2,18.1,1.083,1.083,-9.9,0,0,-15.1,-27.1);

	this.instance_7 = new lib.girl134armR("single",62);
	this.instance_7.setTransform(26.6,16.4,1.083,1.083,-7.1,0,0,-15.1,-27.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A2E95A").s().p("AgrBFIAAAAQgqgSgmgVQBDgoABhNQA0AkA7AcQADABAEgBIADgBIADAVIA2gIQAFAvgcAcQgZAYgnAAQgjAAgsgTg");
	this.shape_19.setTransform(46.3,70.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6978F3").s().p("AhFAtIgBACIgEgCQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBIgBgBIAOgaQANgZABgMQABgIAOgbQANgaAAgDIAAgLQABgJAKACIACAAIABAJIAAABIABgBQAmAsAvAkIAAABIABAHIAAADIgBAEIAAABIAAAGIAAABIAAACQgHA9g2AeIgHAEQgpgbgmghg");
	this.shape_20.setTransform(30.8,61.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgBCFQgugTgpgXIAAgBIgKgFIgCgCQgvgdgogkQgDgDgBgEQAAgEACgDQACgCADAAQAAAAABAAQAAABAAAAQABABAAAAQABAAAAABIAEABIACgCQAlAiArAbIAIgFQA1geAHg6IAAgCIAAgBIAAgHIAAgBIABgFIAAgDIgBgIIAAgBQgvgkgogrIAAAAIgCgJIgCgBQAAgEACgCQADgDAEABQAEAAADADQAqAvAzAlIAFADQApAgAyAZIAGAGIAUAOIABAGIgDACQgEABgDgCQg9gZgyglQgBBLhDArQAmAVAoARIAAAAQBhApAwgtQAcgcgFgyIATgDQAIA+gkAiQgdAcgtAAQgnAAgygVg");
	this.shape_21.setTransform(41.5,65.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A2E95A").s().p("AgfBMQhHgYgjgYIAAAAQBEgnARhKQA0AmBAAUIAGAlIBEgKIgCAVQgHAfgcAOIgBAAQglAUgoAAQgZAAgdgKg");
	this.shape_22.setTransform(53.8,82.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6978F3").s().p("AgqAzIgmgjIgGgFIgCACQgEAAgCgBIAAgDIgBgJQBKhGAegTIgBgCIADABIAEgCQAAAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIgBACIADADIAEADQAKAJAAADIAAABQAfAdAhAUQgOBKhHAnQgdgWgYgVg");
	this.shape_23.setTransform(37.1,74.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAaCBQhIgZglgaQgHgDgHgGIAAgBQghgWgrgjIgwgoIgBgBIAZgCIAAACQABABAFAAIABgCIAHAGIAmAgQAYAVAfAWQBHgnAOhKQgigUgegdIAAAAQAAgEgKgJIgEgDIAAgBQgBgEAEgDQACgCADgBQABAFAEAAIAEgBQAjAjAoAYIACACQAqAfAvATQAHAGANAHIAGAFIACALQhAgSg1glQgQBHhEApIABABQAjAXBFAZQBGAXA/ghIAAAAQAcgOAHggIADgVIAUgDQgBAOgDAPQgIAoglASIAAAAQgqAWgsAAQgfAAgfgLg");
	this.shape_24.setTransform(47.4,78.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A2E95A").s().p("AgbBNQhJgUgkgVIAAgBQBBgrAOhLQA0AgA4ARIAHAsIBPgKIgBANQgFAfgcAQIgBAAQgnAYgsAAQgWAAgYgHg");
	this.shape_25.setTransform(57.9,80.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAhCAQhJgVgmgXQgIgDgHgGIAAAAQgigVgtggIgyglIgBgBIAZgEIAAACIAGABIABgBIAHAEIAnAeQAaAUAgAUQBEgrALhKQgjgTgggbIAAAAQAAgEgLgJIgEgCIAAgBQAAgEADgDQACgDADgBQABAFAEAAIAEgBQAlAhApAVIADACQAqAcAwASIASAKIACAQQg6gRg0ggQgLBJhCAtIABABQAkAVBGAUQBHATA9gkIAAAAQAcgQAFgfIABgPIAUgDIgCAUQgGApgkAVIAAgBQgtAbgyAAQgZAAgbgHg");
	this.shape_26.setTransform(51.1,77.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6978F3").s().p("AgnA2IgnghIgHgEIgBACIgGgBIAAgDIgDgJQBHhKAdgVIgBgCIADABIAEgCQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABIAAACIACACIAEADQALAJAAADIAAABQAgAbAjASQgLBLhEAqQgegTgagUg");
	this.shape_27.setTransform(40.5,74);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6978F3").s().p("AgiA5IgqgeIgHgEIgCACQgEAAgBgBIgBgCIgDgJQBChOAcgXIAAgCIACABIADgDQABAAAAAAQAAAAAAABQABAAAAABQAAABAAABIAAACQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIAEADQALAIABAEIAAAAQAiAZAjAQQgFBLhCAvQgegSgbgSg");
	this.shape_28.setTransform(50.2,74.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A2E95A").s().p("AgXBNQhKgQglgTIgBAAQA+gvAKhLQA5AfBAANIADAXIBKgLQABAOgBANQgDAggaARIgBAAQgrAdgxAAQgQAAgUgEg");
	this.shape_29.setTransform(68.1,81);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAoB9QhLgQgngVIgPgIIAAgBQgjgSgvgdIg0gjIgBAAIAXgGIABADQABABAFgBIABgBIAIAEIApAbQAbATAhARQBBguAGhLQgkgQgigZIAAgBQAAgDgLgIIgFgDIAAgBQAAgEADgDQABgDAEgBQABAFAEAAIAEgCQAnAfArATQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAsAZAxAOIAWALIAIAEIACANQhBgNg6gfQgHBJg+AxIAAAAQAmATBHAQQBIAPA6goIABAAQAagRAEggQABgPgBgOIATgDQACAQgCARQgDAqgjAWIAAAAQgxAhg3AAQgVAAgVgFg");
	this.shape_30.setTransform(61.2,78.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},10).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7,p:{x:26.6,y:16.4,rotation:-7.1,regY:-27.1,startPosition:62}}]},2).to({state:[{t:this.instance_7,p:{x:27.3,y:17.3,rotation:-7.1,regY:-27.1,startPosition:62}}]},3).to({state:[{t:this.instance_7,p:{x:26.9,y:18.8,rotation:-7.6,regY:-27.1,startPosition:62}}]},2).to({state:[{t:this.instance_7,p:{x:27.1,y:19.2,rotation:-7.7,regY:-27.1,startPosition:62}}]},1).to({state:[{t:this.instance_7,p:{x:27.3,y:19.9,rotation:-8.2,regY:-27.1,startPosition:62}}]},1).to({state:[{t:this.instance_7,p:{x:27.6,y:20.6,rotation:-8.7,regY:-27.1,startPosition:62}}]},1).to({state:[{t:this.instance_7,p:{x:28,y:21.5,rotation:-9.2,regY:-27.1,startPosition:62}}]},1).to({state:[{t:this.instance_7,p:{x:28.5,y:22.6,rotation:-9.9,regY:-27.1,startPosition:62}}]},1).to({state:[{t:this.instance_7,p:{x:27.9,y:20.9,rotation:-9.9,regY:-27.1,startPosition:62}}]},11).to({state:[{t:this.instance_7,p:{x:27.8,y:20.3,rotation:-9.9,regY:-27.1,startPosition:62}}]},1).to({state:[{t:this.instance_7,p:{x:28.6,y:23.9,rotation:-8.7,regY:-27.2,startPosition:62}}]},2).to({state:[{t:this.instance_7,p:{x:31.9,y:37,rotation:-6.9,regY:-27.1,startPosition:68}}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[]},1).wait(40));

	// girl1-34-arm-L
	this.instance_8 = new lib.girl134armL("single",1);
	this.instance_8.setTransform(12.7,38,0.965,0.965,-5.9,0,0,37.7,2.1);

	this.instance_9 = new lib.girl134armR("single",75);
	this.instance_9.setTransform(44.8,49.2,1.081,1.081,0,-0.8,179.1,-15,-27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-5.9,x:12.7,y:38,scaleY:0.965,skewX:0,skewY:0,startPosition:1,regY:2.1,scaleX:0.965}}]}).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-8.6,x:13.1,y:43.3,scaleY:0.965,skewX:0,skewY:0,startPosition:1,regY:2.1,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:0,x:13.5,y:45.3,scaleY:0.966,skewX:-9.5,skewY:-7.7,startPosition:1,regY:2.1,scaleX:0.965}}]},1).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-6.9,x:11.9,y:46.2,scaleY:0.965,skewX:0,skewY:0,startPosition:1,regY:2.1,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:0,x:4.8,y:36.4,scaleY:0.916,skewX:1.8,skewY:-2.8,startPosition:70,regY:2.1,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-11.9,x:-0.3,y:31.3,scaleY:0.965,skewX:0,skewY:0,startPosition:68,regY:2.2,scaleX:0.965}}]},1).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-15.4,x:-0.2,y:27,scaleY:0.965,skewX:0,skewY:0,startPosition:69,regY:2.2,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-16.2,x:-1.1,y:25.2,scaleY:0.965,skewX:0,skewY:0,startPosition:63,regY:2.2,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-13.1,x:-2,y:23.2,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.2,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-13.1,x:-1.3,y:24.1,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.2,scaleX:0.964}}]},3).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-13.9,x:-1.6,y:24.9,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.3,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-14,x:-1.4,y:25.5,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.3,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-14.4,x:-1.1,y:26.2,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.4,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-14.9,x:-0.7,y:27.2,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.4,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-15.4,x:-0.3,y:28.4,scaleY:0.964,skewX:0,skewY:0,startPosition:63,regY:2.4,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-16.2,x:0.2,y:29.7,scaleY:0.965,skewX:0,skewY:0,startPosition:63,regY:2.2,scaleX:0.965}}]},1).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-16.2,x:-0.3,y:28,scaleY:0.965,skewX:0,skewY:0,startPosition:63,regY:2.2,scaleX:0.965}}]},11).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-16.2,x:-0.4,y:27.4,scaleY:0.965,skewX:0,skewY:0,startPosition:63,regY:2.2,scaleX:0.965}}]},1).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-14.9,x:0.1,y:30.5,scaleY:0.965,skewX:0,skewY:0,startPosition:63,regY:2.3,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-13.2,x:3.3,y:42.7,scaleY:0.964,skewX:0,skewY:0,startPosition:69,regY:2.3,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-10.1,x:7.7,y:54.3,scaleY:0.964,skewX:0,skewY:0,startPosition:71,regY:2.3,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-7.6,x:12,y:56.6,scaleY:0.964,skewX:0,skewY:0,startPosition:64,regY:2.3,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:0,x:14.6,y:56.3,scaleY:0.963,skewX:-11.3,skewY:-11.6,startPosition:64,regY:2.2,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.6,rotation:-13.1,x:22.7,y:57.7,scaleY:0.964,skewX:0,skewY:0,startPosition:64,regY:2.3,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-4.2,x:24.3,y:51,scaleY:0.964,skewX:0,skewY:0,startPosition:72,regY:2.4,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:39.2,y:35.3,scaleY:0.964,skewX:0,skewY:0,startPosition:73,regY:2.4,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:0,x:38.6,y:30,scaleY:1.015,skewX:-1.2,skewY:-3.5,startPosition:65,regY:2.4,scaleX:0.889}}]},1).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.7,y:28.7,scaleY:0.964,skewX:0,skewY:0,startPosition:65,regY:2.4,scaleX:0.964}}]},1).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.6,y:29.5,scaleY:0.964,skewX:0,skewY:0,startPosition:75,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:66,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:67,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:75,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:65,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:66,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:67,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:66,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:75,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:-3.5,x:38.9,y:29.6,scaleY:0.964,skewX:0,skewY:0,startPosition:65,regY:2.4,scaleX:0.964}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:1.7,x:39.9,y:35,scaleY:0.963,skewX:0,skewY:0,startPosition:65,regY:2.4,scaleX:0.963}}]},4).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:0,x:42.3,y:43.3,scaleY:0.963,skewX:-0.2,skewY:-4,startPosition:65,regY:2.4,scaleX:0.965}}]},2).to({state:[{t:this.instance_8,p:{regX:37.8,rotation:0,x:42.2,y:48.7,scaleY:1.125,skewX:-15.2,skewY:-27.7,startPosition:65,regY:2.3,scaleX:1.009}}]},1).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-0.6,x:20.8,y:46.6,scaleY:0.965,skewX:0,skewY:0,startPosition:74,regY:2.2,scaleX:0.965}}]},1).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:0,x:14.1,y:41.1,scaleY:0.966,skewX:-4.7,skewY:-5.9,startPosition:1,regY:2.1,scaleX:1.036}}]},2).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-5.9,x:12.6,y:37.1,scaleY:0.965,skewX:0,skewY:0,startPosition:1,regY:2.1,scaleX:0.965}}]},1).to({state:[{t:this.instance_8,p:{regX:37.7,rotation:-5.9,x:12.7,y:38,scaleY:0.965,skewX:0,skewY:0,startPosition:1,regY:2.1,scaleX:0.965}}]},2).wait(2));

	// girl1-34-arm-R
	this.instance_10 = new lib.girl134armRgmcopy("single",8);
	this.instance_10.setTransform(28.3,26.3,1.084,1.084,-5.6,0,0,-15.1,-27.1);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(8).to({startPosition:8,_off:false},0).to({_off:true},2).wait(77));

	// girl1-34-torso
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6978F3").s().p("AhYAAQAAgJAIgLIAHgJQAGgIAEAAQAUgjAMgkQBGALApA8IAJANIgFANIgUAqIgPAXIgeAoIAAAEIgBAGQgEAFgGAAQgwAAgwhtg");
	this.shape_31.setTransform(59,96.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#A2E95A").s().p("AhEAxQAOgxgBgyQAAgdgDgbIB2gTIABAGIgBAAQAEAWACAXQACAXAAAYIAAAAQABAYgCAXIgFAxIgGArIgCAOQguhBhMgMg");
	this.shape_32.setTransform(63.2,78.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AABDOQgBgCAAgCIAAgGIAAgEIAdgoIAPgXIAUgsIAFgNIgJgNQgpg7hGgKQgMAigUAjQgEAAgGAIIgHAJIgEgBQgEgDAAgEQgBgDACgEQAagpANgqIABgEQAPgxgBg2QAAgcgCgaIATgDQACAcABAcQABA0gOAxQBMANAuA+IACgOIAGgpIAFgxQACgYgBgYIAAgBQAAgXgCgYQgCgWgEgXIABAAIgBgFIATgDIABAFQAEAXABAYQADAYAAAYQAAAagCAYIgEAzIgGApQgDASgGARIAAACIAAABIAAABIgHATIgWAtIAAAAQgGANgJAMQgOAWgRATQgCAEgEAAIgBAAQgDAAgDgCg");
	this.shape_33.setTransform(61,86.5);

	this.instance_11 = new lib.girl134torso("synched",0);
	this.instance_11.setTransform(34.9,81.9,1.037,1,0.3,0,0,38.1,52.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#A2E95A").s().p("AhBAUQAJgrgEgwIB5gTIADAcIAAABQADAYgBAYIAAAvIgDArIgCAOQgyg+hMgJg");
	this.shape_34.setTransform(65.6,86);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6978F3").s().p("AhWADQgBgIAHgMIAGgJQAGgIAEgBQARgjAKglQBGAHAuA6IAJAMIgEAOQgIAVgJAWQgFAMgHAMIgbApIAAABIAAADIgBAGQgDAFgGAAIgDABQguAAg3hpg");
	this.shape_35.setTransform(62.4,100.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAQCtQgCgCgBgCIABgFIAAgDIAAgBIAbgqQAHgLAFgNQAJgVAIgXIAEgOIgJgNQgug3hGgHQgKAkgRAiQgEAAgGAJIgGAJIgEgBQgEgDgBgDQgBgEACgDQAWgoALguIAAgEQALgugDgxIATgDQAEAxgJAtQBMAJAyA8IACgMIADgrIAAgxQABgYgDgYIAAgBIgDgdIATgDIADAfQADAaAAAZQABAYgCAaIgDArQgBAQgFASIAAACIAAABIAAABIgGASIgRAuIAAABQgGANgHAMQgNAXgPAUQgDAEgEABIgBAAQgCAAgEgDg");
	this.shape_36.setTransform(63.8,94.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6978F3").s().p("AhWABQgBgJAHgLIAGgJQAGgHAEgBQARgjAJgkQBHAJAuA7IAJANIgEANIgRArIgMAXIgbApIAAAEIgBAFQgDAFgGAAIgBAAQgvAAg4hrg");
	this.shape_37.setTransform(63.4,103.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A2E95A").s().p("AhBAgQAJgvgFg0IgCgVIB3gSIACANQAEAYACAXIAAABQACAYAAAWIAAAxIgDAsIgCANQgyhAhMgLg");
	this.shape_38.setTransform(66.5,87.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AARC9IgDgFIABgFIAAgEIAagpIANgXIARgtIADgNIgJgNQgug5hGgJQgKAigRAjQgEABgFAHIgHAJIgDgBQgFgCAAgEQgCgEACgDQAXgqAKgqIABgEQALgygFg2IgCgTIATgDIACAVQAFA0gJAxQBMALAyA+IACgNIADgqIAAgxQAAgYgCgYIAAgBQgCgXgEgYIgCgOIATgDIADAPQADAYACAZIADAyQABAZgCAZIgCAqQgCASgEARIAAACIgBABIAAABIgFATIgRAtIAAABQgGAMgHANQgNAVgPAVQgDADgEABIgBAAQgDAAgDgCg");
	this.shape_39.setTransform(64.7,95.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6978F3").s().p("AhXABQgBgJAIgLIAHgJQAGgIAEAAQATgjAMgkQBGAJAqA7IAJANIgFANQgJAVgLAVQgGAMgIAMIgdApIAAAEIgBAFQgEAFgGAAIgBAAQgvAAgxhrg");
	this.shape_40.setTransform(59.2,103.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A2E95A").s().p("AhDAqQAMgvgBg0IgCgoIB2gTIAFAhQACAYAAAXIAAABQABAYgBAWIgDAxIgGArIgCAOQgvhAhMgLg");
	this.shape_41.setTransform(63.2,86.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAEDGQgCgCgBgCIACgGIAAgEIAdgpQAIgLAGgMQAKgWAJgWIAFgOIgIgNQgrg5hGgJQgLAigTAjQgEABgHAIIgHAJIgDgBQgEgDgBgEQgBgEACgDQAZgpANgrIABgEQAOgygCg1IgCgnIATgDIADApQABA0gMAxQBMAKAvA+IACgNIAFgpIAEgxQABgZgBgYIAAAAQAAgYgDgXIgEghIATgDIAFAiQADAYAAAZQABAZgBAZIgEAyIgGAqQgCASgFARIAAABIgBACIAAAAIgHATIgUAuIAAAAQgGANgJAMQgOAWgQAUQgDAEgEAAIgBAAQgDAAgDgCg");
	this.shape_42.setTransform(61.1,94.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A2E95A").s().p("AhDAlQAqhDgYhhIBqgRQAFATACAUQAMBYgcBTQgOApgWAmQgNhGhCgmg");
	this.shape_43.setTransform(52.2,72.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("Ah1DrQgEgBgCgEQgCgDACgDQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBIABACIAHgEIgBgCQBHghAzg5QAVgVARgYIAAgBQgIhMhCgmQggAqg+AfIgDAAQgCgBgEAAIAAAAIgDgDQgDgEABgDQABgEAEgCQA9gcAegsIAAgBIABAAIAAAAQAqhCgWhfIATgDQAXBhgoBFQBAAmAPBEQAWgmAOgnQAchUgMhZQgCgUgFgTIATgDQAFAUACAVQAMBbgdBYQgdBWhABDQg4A+hNAjIgEABIgDgBg");
	this.shape_44.setTransform(47.2,81);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6978F3").s().p("AhLB+QgKgZgDgvQgEgwAEgfIABgYIACgEIAAgBQADAAACACIAEgBQA9gfAfgrQBEAnAHBMIAAABQgRAWgUAWQg2A4hEAiIAAACIgHADIAAgCg");
	this.shape_45.setTransform(42.6,90.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#6978F3").s().p("AghAqIgCgVIAHAKQgEAGgBAGgAABgeQgFgGgIgEIAFgBQAQgDAbAEIgIACIgCABIgEABQgQACgBAGIAAABIgEgDg");
	this.shape_46.setTransform(70.4,103.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#996666").s().p("AATBNQADgEADgIQAEgHgGgHIgCAAQgCAKgQgCIgDgCQgTgJgNgOQgJgJgEgLQgFgOAIgPIAGgGIgGgMQgIgLgMgHQgTgMgHgQIAGgHIARgCQAUACAJAPQAHAKADAMQACAGAHABIgBgIQAAgPABgCQACgOAFAHIACAAIAAgEQABgGAHgBQAIgDAOgBQATAAAFAGIAFABQAiAOgNAjIgDAEQgEAFgGADQgHAFgHACIgEAAQgFACgFAAQgIgCgCgFQgBAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAQgDgIAAgIQAAgRgOgHQgCAEgEAAQAFARgBALIAAADQAAAIACAHQAEAKAKADQgCATAGAUQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAABQAEAKAKAGQAOAIASgDIgBAJQgFAHgMAGQgIAEgGAAQgLAAgFgNgAAqAtIgHgXIAAgVQAYABAQgPQAGAIAEAHQADAHABAJQABASgPAJQgIAFgIAAQgIAAgJgFg");
	this.shape_47.setTransform(73.3,109);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A2E95A").s().p("AAzCXQgIgGghAAQgkgBgIAFIgJgCQADhcgThWIgQhKIgGgeIBkgTIAOAgQAQAoANApQAfBbgQBhIABAIQgOgEgNAAg");
	this.shape_48.setTransform(71,83.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAZD7QgJgGgCgLIgBgIQgNgBgJgFIgCABIgLgJQgWgNgKgIQgEgIgBgIIgEgVIABgCIgCgQIABgbIgBAAQgHgDgGgDQgUgOAEgWQACgSARgCIAAgWQAChOgQhMQgHglgMgkIgJgdIAMgZIAFgBIAAAXIAHgBIAGAeIAQBKQATBYgDBaIAJACQAIgFAlABQAgAAAIAGQANAAAOAEIgBgIQAQhfgfhdQgNgpgQgoIgOggIATgBIANAeQAaBDAMBFQAMBEgDBFIgCAOQAMAHAEANQADAJAAAJQgBAMgEAMQAYAZgHAiQAAAFgDAFQgGAMgLAGQAGAXgXAMQgGACgFAEQgMAGgKAAQgMAAgJgHgAAkDLQAGAHgEAHQgDAIgEAEQAJATAVgKQAMgGAGgHIAAgJQgRADgOgIQgKgGgEgKQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgFgUACgTQgLgFgDgKQgDgHgCgIIABgDQACgLgGgRQAFAAACgEQAOAHAAARQABAIACAIQAAAAAAABQAAAAABABQAAAAAAABQABABAAAAQADAFAHACQAGAAAEgCIAEAAQAIgCAHgFQAFgDAFgFIACgEQAOgjgjgOIgEgBQgGgGgTAAQgOABgIADQgIABgCAGIABAEIgCAAQgDgHgDAOQgBACABAPIAAAIQgGgBgCgGQgEgMgGgKQgKgPgUgCIgQACIgGAHQAGAQAUAMQAMAHAHALIAHAMIgGAGQgIAQAFAPQAEALAIAJQAOAOARAJIAFACQAQACACgKIACAAgAAvCuIAIAXQAQAKAQgKQAQgJgCgSQAAgJgEgHQgEgJgFgIQgRARgXgBgAgyCKIAAAEIAAgCQACgHAEgFIgIgLIACAVgAgXA2IgFABQAIAEAGAFIAEADIABAAQABgHAOgCIADgBIADgBIAIgCQgPgCgKAAQgKAAgIACg");
	this.shape_49.setTransform(72.1,93.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6978F3").s().p("AhXAAQAAgJAHgLQACgEAEgFQAGgIAEAAQASgjAKgkQBHALAsA8IAJANIgEANIgSAqIgNAXIgcApIAAAAIAAADIgBAGQgDAFgGAAQgwAAg2htg");
	this.shape_50.setTransform(63.4,99.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A2E95A").s().p("Ag9BPQAKgxgDgyQgEg9gNg4IBugSIAIAXQAHAVAFAWIgBAAQAFAWADAXQADAXABAWIAAAAQACAYAAAZIgDAxIgDArIgCAOQgxhBhMgMg");
	this.shape_51.setTransform(66.4,78.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAMDsIgEgEIACgGIAAgDIgBAAIAdgpIANgXIARgsIAFgNIgJgNQgtg8hGgLQgKAkgSAjQgEAAgGAIQgFAFgCAEIgEgBQgEgDAAgEQgBgDABgEQAYgpALgsIABgEQAMgvgDg2QgEg8gNg3IATgDQAOA4ADA9QAEA0gLAwQBNAMAxBAIABgNIAEgsIACgvQABgYgCgYIAAgBQgBgXgEgYQgDgWgFgXIABAAQgFgVgGgVIgJgXIAUgDIAHAUIAAABIAMAsQAFAXADAYQADAYABAYQACAaAAAYIgCAxIgEArQgCASgFASIAAABIAAABIAAABIgGATIgTAtIAAAAQgGANgIAMQgNAWgQATQgCAEgEAAIgCAAQgCAAgDgCg");
	this.shape_52.setTransform(65,86.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A2E95A").s().p("AhEBGQAOgxgBgyQgBgzgHgwIBygSIABAFQAFAVAEAWIgBAAQAEAWACAXQACAXAAAYIAAAAQABAWgCAZIgFAxIgGArIgCAOQguhBhMgMg");
	this.shape_53.setTransform(63.1,75.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AABDjQgBgCAAgCIAAgGIAAgEIAdgoIAPgXIAUgsIAFgNIgJgNQgpg8hGgLQgMAkgUAjQgEAAgGAIIgHAJIgEgBQgEgDAAgEQgBgDACgEQAagpANgqIABgEQAPgxgBg2QAAgygHguIATgDQAHAvABAzQABA0gOAxQBMALAuBAIACgOIAGgrIAFgvQACgYgBgYIAAgBQAAgXgCgYQgCgWgEgXIABAAQgEgVgFgVIgCgFIAUgDIABACIAAABQAFAVAEAXQAEAXABAYQADAYAAAYQAAAagCAYIgEAxIgGArQgDASgGARIAAACIAAABIAAABIgHATIgWAtIAAAAQgGANgJAMQgOAWgRATQgCAEgEAAIgBAAQgDAAgDgCg");
	this.shape_54.setTransform(60.9,83.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A2E95A").s().p("AhEAwQAOgwgBgzQAAgcgDgbIB3gSIAAAEIgBAAQAEAXACAWQACAYAAAXIAAABQABAYgCAWIgFAxIgGArIgCAOQguhAhMgNg");
	this.shape_55.setTransform(63.2,78.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AABDNQgBgCAAgCIAAgFIAAgEIAdgoIAPgYIAUgrIAFgOIgJgNQgpg6hGgKQgMAigUAiQgEABgGAHIgHAJIgEgBQgEgCAAgEQgBgEACgDQAagpANgqIABgEQAPgygBg2QAAgbgCgZIATgDQACAbABAcQABA0gOAxQBMAMAuA/IACgOIAGgpIAFgxQACgZgBgYIAAAAQAAgYgCgXQgCgXgEgWIABAAIgBgFIATgDIABAFQAEAXABAXQADAYAAAZQAAAZgCAZIgEAyIgGAqQgDASgGARIAAACIAAABIAAAAIgHATIgWAtIAAABQgGAMgJANQgOAVgRAUQgCADgEABIgBAAQgDAAgDgDg");
	this.shape_56.setTransform(61,86.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{scaleX:1.037,rotation:0.3,x:34.9,y:81.9,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31,p:{x:59,y:96.3}}]}).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:0.5,x:35,y:87.3,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:0.5,x:35.5,y:89.3,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-0.6,x:34.8,y:89.7,regY:52.7,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:0.4,x:26.1,y:83,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-5.6,x:26.1,y:72.6,regY:52.9,scaleY:1,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.1,x:28.8,y:66.6,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:28.4,y:64.4,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:28.2,y:63.2,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:28.6,y:63.8,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},3).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:28.5,y:64.7,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:-9.9,x:28.6,y:65.2,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:-9.9,x:28.8,y:65.9,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:-9.9,x:29.1,y:66.7,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:-9.9,x:29.4,y:67.7,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:29.8,y:68.9,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:29.2,y:67.2,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},11).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-9.9,x:29.1,y:66.6,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-8.7,x:28.8,y:70.3,regY:52.9,scaleY:0.999,regX:38.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.036,rotation:-6.9,x:30.8,y:83.3,regY:52.9,scaleY:0.999,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:-3.8,x:33.1,y:96.3,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:-1.3,x:35.5,y:99.8,regY:52.9,scaleY:0.999,regX:38.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:0,x:35.8,y:99.8,regY:52.9,scaleY:0.999,regX:38.1,skewX:-1,skewY:-1.3}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:0.9,x:42.3,y:100.1,regY:52.9,scaleY:0.999,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2,x:45.1,y:95.4,regY:52.9,scaleY:0.999,regX:38.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2.7,x:59.4,y:79.9,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2.7,x:58.9,y:74.6,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2.7,x:59,y:73.3,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2.7,x:59.1,y:74.2,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2.7,x:59.2,y:74.8,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.035,rotation:2.4,x:60.3,y:79.5,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},20).to({state:[{t:this.instance_11,p:{scaleX:1.034,rotation:0.9,x:63.8,y:87.2,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.034,rotation:-1.1,x:65.4,y:91.8,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.034,rotation:-1.1,x:60.8,y:96.8,regY:52.9,scaleY:0.998,regX:38.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.037,rotation:0.3,x:42.8,y:91.9,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.037,rotation:0.3,x:36.3,y:84.9,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},2).to({state:[{t:this.instance_11,p:{scaleX:1.037,rotation:0.3,x:34.7,y:81,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_31,p:{x:58.9,y:95.4}}]},1).to({state:[{t:this.instance_11,p:{scaleX:1.037,rotation:0.3,x:34.9,y:81.9,regY:52.8,scaleY:1,regX:38.1,skewX:0,skewY:0}},{t:this.shape_56},{t:this.shape_55},{t:this.shape_31,p:{x:59,y:96.3}}]},2).wait(2));

	// girl1-34-skirt
	this.instance_12 = new lib.girl134skirt("synched",0);
	this.instance_12.setTransform(34.5,111.4,1,1,0.3,0,0,38.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({rotation:0.5,y:116.7},0).wait(1).to({x:35.1,y:118.7},0).wait(2).to({rotation:-0.5,x:34.9,y:119.2},0).wait(2).to({regY:22.2,rotation:0.4,x:25.8,y:112.4},0).wait(1).to({regY:22.3,rotation:-5.5,x:28.8,y:101.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9,x:33.3,y:95.6},0).wait(2).to({regY:22.4,rotation:-9.8,y:93.5},0).wait(2).to({x:33.1,y:92.3},0).wait(3).to({x:33.5,y:92.8},0).wait(2).to({x:33.4,y:93.8},0).wait(1).to({x:33.5,y:94.2},0).wait(1).to({x:33.7,y:94.9},0).wait(1).to({x:33.9,y:95.7},0).wait(1).to({x:34.3,y:96.7},0).wait(1).to({x:34.7,y:97.9},0).wait(11).to({x:34.1,y:96.2},0).wait(1).to({x:34,y:95.6},0).wait(2).to({rotation:-8.6,x:33.1,y:99.3},0).wait(2).to({rotation:-6.8,x:34.2,y:112.5},0).wait(2).to({regX:38.2,regY:22.3,scaleX:1,scaleY:1,rotation:-3.7,x:34.8,y:125.6},0).wait(1).to({regX:38.1,regY:22.2,scaleX:1,scaleY:1,rotation:-1.2,x:35.9,y:128.9},0).wait(1).to({rotation:0,skewX:-0.9,skewY:-1.2,x:36.2},0).wait(2).to({regY:22.3,rotation:0.9,skewX:0,skewY:0,x:41.6,y:129.4},0).wait(1).to({regY:22.2,rotation:2,x:43.9,y:124.5},0).wait(1).to({regY:22.3,scaleX:1,scaleY:1,rotation:2.7,x:57.8,y:109.2},0).wait(1).to({x:57.2,y:103.9},0).wait(1).to({x:57.3,y:102.6},0).wait(2).to({x:57.5,y:103.5},0).wait(2).to({x:57.6,y:104.1},0).wait(20).to({regY:22.2,rotation:2.4,x:58.8,y:108.7},0).wait(2).to({regX:38,rotation:0.9,x:63,y:116.4},0).wait(1).to({regX:38.1,rotation:-1,x:65.8,y:121},0).wait(2).to({x:61.2,y:126},0).wait(1).to({regY:22.3,scaleX:1,scaleY:1,rotation:0.3,x:42.4,y:121.3},0).wait(2).to({rotation:0.3,x:35.9,y:114.4},0).wait(1).to({x:34.4,y:110.5},0).wait(2).to({x:34.5,y:111.4},0).wait(2));

	// girl1-34-leg-L
	this.instance_13 = new lib.girl134legL("single",0);
	this.instance_13.setTransform(9.8,151.9,1,1,1.3,0,0,23.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({regY:33.2,rotation:2.3,x:8.2,y:156.9},0).wait(1).to({regX:23,rotation:1.6,x:10.1,y:159.2},0).wait(2).to({regX:23.1,rotation:0.3,x:11,y:160.2},0).wait(2).to({rotation:0,x:2.5,y:150.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:8.5,y:144.7},0).wait(2).to({rotation:-8,x:15.7,y:139.6},0).wait(2).to({regY:33.3,rotation:-8.8,x:16.3,y:137.7},0).wait(2).to({x:16.1,y:136.5},0).wait(3).to({x:16.5,y:137.1},0).wait(2).to({x:16.4,y:138},0).wait(1).to({x:16.6,y:138.5},0).wait(1).to({x:16.8,y:139.2},0).wait(1).to({x:17,y:140},0).wait(1).to({x:17.4,y:141},0).wait(1).to({x:17.7,y:142.2},0).wait(11).to({x:17.1,y:140.5},0).wait(1).to({x:17,y:139.9},0).wait(2).to({rotation:-7.6,x:15.1,y:143.2},0).wait(2).to({regY:33,rotation:-5.8,x:14.8,y:155.6},0).wait(2).to({regX:23.2,regY:33.2,scaleX:1,scaleY:1,rotation:-2.7,x:13.3,y:167.7},0).wait(1).to({regX:23.1,scaleX:1,scaleY:1,rotation:-0.2,x:12.4,y:170.2},0).wait(1).to({rotation:0,skewY:-0.2,x:12.6},0).wait(2).to({regY:33.3,rotation:1.9,skewY:0,x:16.5,y:169.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:3,x:18.1,y:164.4},0).wait(1).to({regY:33.4,rotation:3.7,x:31.2,y:145.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:31.3,y:143.9},0).wait(2).to({x:31.4,y:144.8},0).wait(2).to({x:31.5,y:145.4},0).wait(20).to({rotation:3.4,x:33,y:150.2},0).wait(2).to({rotation:1.9,x:38.4,y:158.6},0).wait(1).to({rotation:0.8,x:39.2,y:159.7},0).wait(2).to({x:35.5,y:160.3},0).wait(1).to({regY:33.1,scaleX:1,scaleY:1,rotation:1.3,x:15.1,y:159.4},0).wait(2).to({x:11.2,y:154.9},0).wait(1).to({x:9.6,y:151},0).wait(2).to({x:9.8,y:151.9},0).wait(2));

	// girl1-34-leg-R
	this.instance_14 = new lib.girl134legR("single",0);
	this.instance_14.setTransform(57,157.9,1,1,0.3,0,0,23.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({rotation:1.3,x:55.3,y:163.7},0).wait(1).to({rotation:0.5,x:57.4,y:165.3},0).wait(2).to({rotation:-0.5,x:58.3},0).wait(2).to({rotation:-1,x:49.9,y:155},0).wait(1).to({rotation:-5.5,x:56,y:145.8},0).wait(2).to({regX:23.3,scaleX:1,scaleY:1,rotation:-9,x:63.3,y:137.7},0).wait(2).to({rotation:-9.8,x:63.9,y:135.1},0).wait(2).to({x:63.7,y:133.9},0).wait(3).to({x:64.1,y:134.5},0).wait(2).to({x:64,y:135.4},0).wait(1).to({regX:23.2,x:64.1,y:135.8},0).wait(1).to({x:64.3,y:136.5},0).wait(1).to({x:64.5,y:137.3},0).wait(1).to({x:64.9,y:138.3},0).wait(1).to({regX:23.3,x:65.3,y:139.6},0).wait(11).to({x:64.7,y:137.9},0).wait(1).to({x:64.6,y:137.3},0).wait(2).to({rotation:-8.6,x:62.7,y:141.7},0).wait(2).to({regX:23.2,rotation:-6.8,x:62.4,y:155.8},0).wait(2).to({regX:23.4,scaleX:1,scaleY:1,rotation:-3.7,x:60.8,y:170.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.2,x:59.9,y:174.8},0).wait(1).to({rotation:0,skewX:-0.9,skewY:-1.2,x:60},0).wait(2).to({rotation:0.9,skewX:0,skewY:0,x:63.7,y:176},0).wait(1).to({rotation:2,x:65.2,y:171.7},0).wait(1).to({regY:29.6,scaleX:1,scaleY:1,rotation:2.7,x:78.1,y:153.1},0).wait(1).to({startPosition:0},0).wait(1).to({x:78.2,y:151.9},0).wait(2).to({x:78.4,y:152.8},0).wait(2).to({x:78.5,y:153.4},0).wait(20).to({rotation:2.4,x:79.9,y:158},0).wait(2).to({rotation:0.9,x:85.5,y:165.1},0).wait(1).to({regY:29.5,rotation:0,x:86.5,y:165.3},0).wait(2).to({x:82.7,y:165.9},0).wait(1).to({regX:23.2,regY:29.4,scaleX:1,scaleY:1,rotation:0.3,x:62.4,y:165.4},0).wait(2).to({x:58.4,y:160.9},0).wait(1).to({x:56.9,y:157},0).wait(2).to({x:57,y:157.9},0).wait(2));

	// girl1-34-arm-R
	this.instance_15 = new lib.girl134armR("single",1);
	this.instance_15.setTransform(41.9,36.1,1.084,1.084,0.3,0,0,-15.1,-27.1);

	this.instance_16 = new lib.girl134armRgmcopy("single",11);
	this.instance_16.setTransform(36.5,48.6,1.086,1.085,0,0.1,6.2,-15.1,-27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{rotation:0.3,skewX:0,skewY:0,x:41.9,y:36.1,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:1}}]}).to({state:[{t:this.instance_15,p:{rotation:0,skewX:-3.9,skewY:-2.4,x:40.9,y:41.6,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:1}}]},2).to({state:[{t:this.instance_15,p:{rotation:0,skewX:-4.1,skewY:-0.7,x:41.7,y:43.7,regY:-27.2,scaleX:1.083,scaleY:1.087,regX:-15.1,startPosition:1}}]},1).to({state:[{t:this.instance_15,p:{rotation:-0.6,skewX:0,skewY:0,x:41.1,y:43.9,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:1}}]},2).to({state:[{t:this.instance_15,p:{rotation:7.9,skewX:0,skewY:0,x:32.9,y:37.2,regY:-27.1,scaleX:1.081,scaleY:1.012,regX:-15.4,startPosition:69}}]},2).to({state:[{t:this.instance_15,p:{rotation:-5.6,skewX:0,skewY:0,x:28.3,y:26.3,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:67}}]},1).to({state:[{t:this.instance_15,p:{rotation:-9.1,skewX:0,skewY:0,x:28.2,y:20.2,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:68}}]},2).to({state:[{t:this.instance_15,p:{rotation:-9.9,skewX:0,skewY:0,x:27.2,y:18.1,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{rotation:-7.1,skewX:0,skewY:0,x:26.6,y:16.4,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{rotation:-7.1,skewX:0,skewY:0,x:27.3,y:17.3,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},3).to({state:[{t:this.instance_15,p:{rotation:-7.6,skewX:0,skewY:0,x:26.9,y:18.8,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{rotation:-7.7,skewX:0,skewY:0,x:27.1,y:19.2,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{rotation:-8.2,skewX:0,skewY:0,x:27.3,y:19.9,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{rotation:-8.7,skewX:0,skewY:0,x:27.6,y:20.6,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{rotation:-9.2,skewX:0,skewY:0,x:28,y:21.5,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{rotation:-9.9,skewX:0,skewY:0,x:28.5,y:22.6,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{rotation:-9.9,skewX:0,skewY:0,x:27.9,y:20.9,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},11).to({state:[{t:this.instance_15,p:{rotation:-9.9,skewX:0,skewY:0,x:27.8,y:20.3,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{rotation:-8.7,skewX:0,skewY:0,x:28.6,y:23.9,regY:-27.2,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{rotation:-6.9,skewX:0,skewY:0,x:31.9,y:37,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:68}}]},2).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_15,p:{rotation:-1.3,skewX:0,skewY:0,x:41,y:53.8,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15.1,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{rotation:0,skewX:-4.3,skewY:-4.6,x:43.4,y:53.1,regY:-27.2,scaleX:1.083,scaleY:1.082,regX:-15.1,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{rotation:-8,skewX:0,skewY:0,x:51.9,y:54,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:63}}]},2).to({state:[{t:this.instance_15,p:{rotation:2,skewX:0,skewY:0,x:53.5,y:49.8,regY:-27.1,scaleX:1.083,scaleY:1.083,regX:-15,startPosition:71}}]},1).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68.2,y:34.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:72}}]},1).to({state:[{t:this.instance_15,p:{rotation:0,skewX:-2.4,skewY:2.7,x:67.7,y:29.1,regY:-27.1,scaleX:1.025,scaleY:1.139,regX:-15.1,startPosition:64}}]},1).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:67.8,y:27.9,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:64}}]},1).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:67.9,y:28.8,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:66}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:64}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:66}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:64}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{rotation:2.7,skewX:0,skewY:0,x:68,y:29.4,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15.1,startPosition:64}}]},2).to({state:[{t:this.instance_15,p:{rotation:-2.8,skewX:0,skewY:0,x:69,y:34,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15,startPosition:64}}]},4).to({state:[{t:this.instance_15,p:{rotation:0,skewX:-2.3,skewY:0,x:71.2,y:41.5,regY:-27.1,scaleX:1.083,scaleY:1.082,regX:-15.1,startPosition:64}}]},2).to({state:[{t:this.instance_15,p:{rotation:0,skewX:13,skewY:19.6,x:71.2,y:45.7,regY:-27.2,scaleX:1.095,scaleY:1.348,regX:-15.1,startPosition:64}}]},1).to({state:[{t:this.instance_15,p:{rotation:-16.1,skewX:0,skewY:0,x:66.6,y:50.9,regY:-27.1,scaleX:1.082,scaleY:1.082,regX:-15,startPosition:74}}]},2).to({state:[{t:this.instance_15,p:{rotation:8.6,skewX:0,skewY:0,x:49.7,y:46.1,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:73}}]},1).to({state:[{t:this.instance_15,p:{rotation:0,skewX:-2.6,skewY:0.3,x:43.3,y:39.1,regY:-27.1,scaleX:1.084,scaleY:1.086,regX:-15.1,startPosition:1}}]},2).to({state:[{t:this.instance_15,p:{rotation:0.3,skewX:0,skewY:0,x:41.7,y:35.2,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:1}}]},1).to({state:[{t:this.instance_15,p:{rotation:0.3,skewX:0,skewY:0,x:41.9,y:36.1,regY:-27.1,scaleX:1.084,scaleY:1.084,regX:-15.1,startPosition:1}}]},2).wait(2));

	// GIRL_HEAD
	this.instance_17 = new lib.GIRL_HEAD_yum("synched",0);
	this.instance_17.setTransform(29.1,34.2,1,1,7.1,0,0,160,219.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({regX:160.2,scaleX:1,scaleY:1,rotation:9.4,x:28.1,y:41,startPosition:2},0).wait(1).to({regX:160.1,rotation:9.6,x:28.6,y:43.5,startPosition:3},0).wait(2).to({regX:160.2,rotation:0,skewX:7.8,skewY:8.4,x:26.8,y:43.6,startPosition:5},0).wait(2).to({skewX:-0.3,skewY:1.6,x:22.5,y:37.1,startPosition:7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.8,skewX:0,skewY:0,x:17.8,y:24.1,startPosition:8},0).wait(2).to({regY:219.1,rotation:-15.7,y:18.2,startPosition:10},0).wait(2).to({regY:219.2,rotation:-16.5,x:16.8,y:16.3,startPosition:12},0).wait(2).to({rotation:0,skewX:-16.8,skewY:-16.9,x:16.5,y:14.2,startPosition:14},0).wait(3).to({x:16.9,y:14.7,startPosition:17},0).wait(2).to({x:16.7,y:15.7,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1,rotation:-16.6,skewX:0,skewY:0,x:16.8,y:16.3,startPosition:20},0).wait(1).to({rotation:-16.3,x:16.9,y:17.2,startPosition:21},0).wait(1).to({rotation:0,skewX:-15.9,skewY:-16.1,x:17.1,y:18.2,startPosition:22},0).wait(1).to({rotation:-15.6,skewX:0,skewY:0,x:17.3,y:19.5,startPosition:23},0).wait(1).to({regX:160.3,regY:219.1,scaleX:1,scaleY:1,rotation:-15.1,x:17.6,y:21,startPosition:24},0).wait(11).to({regX:160.2,regY:219.2,rotation:-16.5,y:19,startPosition:35},0).wait(1).to({rotation:-17.2,x:17.4,y:17.8,startPosition:36},0).wait(2).to({rotation:-15.2,x:18.3,y:21.8,startPosition:38},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.7,x:22.2,y:37.5,startPosition:40},0).wait(2).to({regX:160.3,scaleX:1,scaleY:1,rotation:-1.8,x:25.1,y:49.3,startPosition:42},0).wait(1).to({regX:160.2,scaleX:1,scaleY:1,rotation:0.5,x:30.1,y:53.4,startPosition:43},0).wait(1).to({rotation:1.8,x:30.8,y:53.9,startPosition:44},0).wait(2).to({rotation:4.4,x:38.5,y:53.6,startPosition:46},0).wait(1).to({regX:160.3,scaleX:1,scaleY:1,rotation:0,skewX:5.9,skewY:6.5,x:42,y:49.2,startPosition:47},0).wait(1).to({regX:160.2,scaleX:1,rotation:1.4,skewX:0,skewY:0,x:58.6,y:33,startPosition:48},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:58.2,y:25.1,startPosition:49},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.2,x:58.1,y:23.2,startPosition:50},0).wait(2).to({x:58.4,y:24.7,startPosition:52},0).wait(2).to({x:58.5,y:25.6,startPosition:54},0).wait(20).to({rotation:0.4,x:59.2,y:31,startPosition:74},0).wait(2).to({regX:160.3,rotation:1.9,x:60.7,y:40.8,startPosition:76},0).wait(1).to({regX:160.5,rotation:1.1,x:60.4,y:46.5,startPosition:77},0).wait(2).to({regY:219.1,rotation:3.2,x:55.3,y:50.7,startPosition:79},0).wait(1).to({regX:160.1,regY:219.2,scaleX:1,scaleY:1,rotation:8.1,x:37,y:45.8,startPosition:80},0).wait(2).to({regX:160,scaleX:1,scaleY:1,rotation:8.4,x:30,y:37.8,startPosition:82},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.1,x:28.8,y:32.7,startPosition:83},0).wait(2).to({x:29.1,y:34.2,startPosition:85},0).wait(2));

	// girl_34_collar_behind
	this.instance_18 = new lib.girl_34_collar_behind("synched",0);
	this.instance_18.setTransform(31.7,27.6,1,1,0,0,0,20.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({rotation:0.3,x:32,y:33},0).wait(1).to({x:32.6,y:35},0).wait(2).to({rotation:-0.8,x:30.6,y:35.6},0).wait(2).to({regX:20.7,rotation:0.1,x:23,y:28.7},0).wait(1).to({regX:20.8,rotation:-5.8,x:17.4,y:18.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-9.3,x:16.7,y:13.5},0).wait(2).to({rotation:-10.1,x:15.6,y:11.5},0).wait(2).to({x:15.4,y:10.3},0).wait(3).to({x:15.8,y:10.9},0).wait(2).to({x:15.7,y:11.8},0).wait(1).to({x:15.8,y:12.3},0).wait(1).to({x:16,y:12.9},0).wait(1).to({x:16.3,y:13.8},0).wait(1).to({x:16.6,y:14.8},0).wait(1).to({x:17,y:16},0).wait(11).to({x:16.4,y:14.3},0).wait(1).to({x:16.3,y:13.7},0).wait(2).to({rotation:-8.8,x:17.2,y:17.1},0).wait(2).to({regX:20.9,rotation:-7.1,x:20.8,y:29.8},0).wait(2).to({regX:20.8,regY:6.2,scaleX:1,scaleY:1,rotation:-4,x:25.9,y:42.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.5,x:30.6,y:45.4},0).wait(1).to({regX:20.9,rotation:0,skewX:-1.2,skewY:-1.5,x:31.4},0).wait(2).to({regX:20.8,regY:6.3,rotation:0.6,skewX:0,skewY:0,x:39.7,y:45.6},0).wait(1).to({regY:6.2,rotation:1.7,x:43.5,y:40.8},0).wait(1).to({regX:20.7,regY:6.3,scaleX:1,scaleY:1,rotation:2.4,x:58.4,y:25.4},0).wait(1).to({x:57.9,y:20.1},0).wait(1).to({x:58,y:18.8},0).wait(2).to({x:58.1,y:19.7},0).wait(2).to({x:58.2,y:20.3},0).wait(20).to({rotation:2.1,x:59.1,y:25},0).wait(2).to({regX:20.6,rotation:0.6,x:61.1,y:32.8},0).wait(1).to({regY:6.4,rotation:-1.3,x:60.8,y:37.5},0).wait(2).to({x:56.2,y:42.6},0).wait(1).to({regX:20.8,scaleX:1,scaleY:1,rotation:0,x:39.6,y:37.6},0).wait(2).to({x:33.1,y:30.6},0).wait(1).to({x:31.5,y:26.7},0).wait(2).to({x:31.7,y:27.6},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.8,-203,285.5,353.9);


(lib.Avril_ToTheLL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl1-34-hand-L
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AA2AkQgHgQgNgLQgMgJgPgEQgogNgkAUIAKgmQAfgRAgADQAJACAHADQAMAFAKAIQAQAOAMARIgHAyg");
	this.shape.setTransform(66,88);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("AAvBKIANgNQAPgPACgXIgBgHIgCgCQgHASgPAMIgHAFQgQARgWALQgNAIgOgJQAUgVAQgXQAQgXABgdIgFgDQgJANgHAMQgTAmgiAbIgBACQgKANgTgCQgNABgIgGIgBgEIABgRIAAAAIAigqIAMgNIAQgYQAFgJADgJIgIABIgQAUIgLAHIgJAAQgNgEgJgMIgBgDIgBgDIAAgCQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAegIAbgQQAGgEAGgDQAPgIAOgDQAigGAYAXIAAABQAQAQAHAXQACAKABAKQABAZgLAZQgFAMgGAJQgTAQgYAGIARgMg");
	this.shape_1.setTransform(61.8,97.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2E95A").s().p("AAmA5QgOgKgQgEQgjgIgjAQIABgWQACgWgBgTQgBgWgDgWIgBgGIBqgRQAWBPADBQQgNgNgPgKg");
	this.shape_2.setTransform(66.5,76.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAADGIgFgGQgYAFgQgPQgXAOgbgGQgJgDgIgGQgHgFgBgIQgBgPAEgPQABgGAFgFIAJgKIAWgXQgZgEgKgXQgCgGAAgFQgBgKAEgIIACgEIAygVQARgyACg2QAAgagCgZIgEggIAVgEIABAHQADAVABAWQABAWgCAWIgBAVQAhgPAlAHQAQAFAOAJQAPAKANANQgDhSgWhOIATgDIADAMQAKAnAHApIADAlQACAYgCAYQAAAWgDAZIgBAFQgIA4gTA2QgEAOgJAMQgFAGgHAFQgFAEgHADQgPAHgQADQgJACgKAAIgCAAgABCBsIABAIQgCAWgPAPIgOANIgQANQAXgGATgQQAHgKAFgLQAKgagBgaQAAgKgDgLQgGgWgQgRIAAAAQgZgYghAHQgPADgOAHQgHADgGAFQgbAQgeAIQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAIABADIABACIAAAEQAJAMAOADIAJAAIAKgGIAQgUIAJgBQgDAJgGAJIgQAXIgLAQIgiApIAAABIgCAQIABAEQAIAGAOgBQASACALgMIABgCQAigcATglQAHgPAJgNIAEAEQAAAfgRAXQgOAXgWAUQAOAKAQgIQAUgLAQgSIAGgEQAPgMAIgSgAAmgJQAPAGAMAHQANALAHAQIAJAOIAHgwQgLgTgRgOQgJgIgNgFQgHgDgIgCQgjgDgdARIgKAoQAXgNAXAAQAPAAAPAEg");
	this.shape_3.setTransform(62.8,88.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A2E95A").s().p("AAvArQgRgHgRgCQgngDgjAVIgCgWQgEgVgFgTQgEgQgFgQIB3gTQAcA9AQA+QgRgLgSgIg");
	this.shape_4.setTransform(73.9,74.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#996666").s().p("AhRBWIgCgDIgCgRIAAAAIAcgtIAJgSIAMgXQAEgJACgKIgIACIgOAWIgKAIIgJACQgPgCgNgLIgBgDIgBgCIgBgDQAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAegMAZgUIAMgKQAOgJAQgFQAigLAeAUIAAAAQAVAOALAVQAFAKACAKQAGAXgGAbQgDAMgFALQgRASgXAJIAOgOIAMgPQANgRgCgWIgDgIIgCgBQgFATgNAOQgEACgCADQgOATgVAPQgOAKgQgIQARgXANgZQANgZgFgcIgGgDQgHAOgFANQgOAogdAgIgBACQgIANgUABIgLABQgHAAgGgDg");
	this.shape_5.setTransform(72.3,94.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6978F3").s().p("AA+AgQgKgPgQgIQgPgIgRgBQgsgHgjAZIADgnQAegVAmgCIAPADQANADAMAGQAVAMAQAQIADAxg");
	this.shape_6.setTransform(75.2,84.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhHC8QgLgBgIgFQgJgFgCgHQgFgPABgOQABgHAEgFIAHgLIATgaQgbAAgPgVQgEgGgBgFQgCgKACgJQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIAxgcQAIgzgKg3QgDgYgIgZIgFgRIAWgEQAFAQAEAQQAFAVADAWIACAVQAjgUAnACQASACARAHQARAJARAKQgPhAgdg8IAVgEQANAbAKAdQAGASAFATQAGAWAEAZQAEAXACAZIgBADQADA4gJA4QgCAOgHANQgEAGgGAGIgMAKQgPAIgQAGQgKADgKABIgEAAIgGgEQgYAIgTgNQgTAQgaAAIgHgBgAgmA6IgMAaIgJARIgcAtIAAABIACAQIACAEQAJAFAPgDQAUgBAIgOIABgCQAeggANgnQAFgQAHgOIAGADQAFAegNAaQgNAZgRAXQAQAHAOgKQAVgOAOgTQACgDAEgDQANgNAFgTIACABIADAHQACAWgNARIgMAPIgOAPQAXgKARgSQAFgKADgMQAGgbgGgaQgCgKgFgJQgLgVgVgOIAAgBQgegRgiAKQgQAEgOAJIgMAJQgZAUgeAMQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAAAIABADIABADIABADQANAKAPACIAJgBIAKgIIAOgWIAIgDQgCAKgEAJgAAfgZQARACAPAIQAQAIAKANIAOANIgDgxQgQgQgVgMQgMgGgNgDIgRgDQgkACgeAVIgDApQAbgVAgAAQAKAAAKACg");
	this.shape_7.setTransform(72.5,86.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).wait(58));

	// girl1-34-collar
	this.instance = new lib.girl134collar("synched",0);
	this.instance.setTransform(31,32.5,1,1,0.3,0,0,22.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleY:0.99,rotation:0,skewX:-0.7,skewY:-0.3,x:29.1,y:34},0).wait(1).to({regX:22.7,skewX:-1.7,skewY:-1.3,x:27.9,y:35.2},0).wait(1).to({regX:22.6,scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:24.8,y:30.7},0).wait(2).to({rotation:-5.3,x:21.3,y:26.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-7.6,x:18.2,y:23.4},0).wait(2).to({rotation:-8.4,x:16.5,y:22.1},0).wait(2).to({startPosition:0},0).wait(9).to({scaleX:1,scaleY:1,rotation:0,skewX:-9.4,skewY:-8.8,x:15.9,y:28.1},0).wait(1).to({regY:8.4,skewX:-10.4,skewY:-9.9,x:15.8,y:30.7},0).wait(1).to({regY:8.6,skewX:-11.2,skewY:-10.6,x:16.1,y:32.6},0).wait(2).to({scaleY:1,skewX:-10.5,skewY:-10.1,x:17.7,y:31},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.1,skewX:0,skewY:0,x:26.6,y:21.8},0).wait(1).to({regX:22.5,rotation:-3,x:29.5,y:16.2},0).wait(2).to({x:30.2,y:14.9},0).wait(2).to({x:30.4,y:16.1},0).wait(16).to({regX:22.6,rotation:-3.8,x:30.5,y:14.3},0).wait(2).to({regX:22.5,regY:8.5,rotation:-2.8,x:31,y:16.9},0).wait(2).to({rotation:-0.9,x:30.7,y:22.4},0).wait(2).to({regX:22.6,regY:8.6,scaleX:1,scaleY:1,rotation:-1.3,x:31.2,y:27},0).wait(1).to({rotation:-0.5,x:31.1,y:30.6},0).wait(1).to({rotation:0.3,y:33.1},0).wait(1).to({rotation:0.3,x:31.3,y:34.6},0).wait(2).to({x:31.2,y:33.7},0).wait(1).to({x:31,y:32.5},0).wait(3));

	// girl1-34-arm-L
	this.instance_1 = new lib.girl134armL("single",1);
	this.instance_1.setTransform(12.7,38,0.965,0.965,-5.9,0,0,37.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:0,skewX:-7,skewY:-6.5,x:11,y:39.7,startPosition:44},0).wait(1).to({skewX:0,skewY:0.5,x:9.8,y:41.2,startPosition:43},0).wait(1).to({regX:37.8,scaleX:1.04,scaleY:0.94,skewX:31.3,skewY:27.5,x:12,y:37.5},0).wait(2).to({scaleX:0.96,scaleY:0.97,skewX:-33,skewY:-31.1,x:3.7,y:33.6,startPosition:42},0).wait(2).to({regY:2.2,scaleX:0.96,scaleY:0.97,skewX:-23.3,skewY:-19,x:1,y:31.4},0).wait(2).to({regY:2.1,scaleX:0.97,scaleY:0.97,rotation:-14.6,skewX:0,skewY:0,x:-0.5,y:30.3},0).wait(2).to({rotation:-12.9,y:30.2},0).wait(9).to({regY:2.2,scaleX:0.96,scaleY:0.97,rotation:0,skewX:-10.1,skewY:-9.6,x:-0.8,y:36.5},0).wait(1).to({regY:2.1,scaleX:0.96,scaleY:0.97,skewX:-8.8,skewY:-6.8,y:39.5},0).wait(1).to({regX:37.9,regY:2,scaleX:0.96,scaleY:0.97,skewX:-6.7,skewY:-6.2,x:-0.3,y:41.2},0).wait(2).to({regX:37.8,regY:2.2,scaleX:0.96,skewX:-10.5,skewY:-10.1,x:0.9,y:39.8},0).wait(1).to({regX:37.9,regY:2,scaleY:0.96,rotation:-25.4,skewX:0,skewY:0,x:8.9,y:28.7},0).wait(1).to({regY:2.1,rotation:-30.9,x:11.7,y:22.8},0).wait(2).to({x:12.4,y:21.4},0).wait(2).to({rotation:-29.4,x:12.6,y:22.6},0).wait(16).to({regY:2,rotation:-28.9,x:12.8,y:21.2},0).wait(2).to({regX:38,regY:2.1,rotation:-30.6,x:13.3,y:23.5},0).wait(2).to({regY:1.9,scaleX:0.98,rotation:0,skewX:-33.6,skewY:-43.1,x:12.7,y:28.2},0).wait(2).to({regX:37.7,regY:2.2,scaleX:0.97,scaleY:0.97,rotation:-7.6,skewX:0,skewY:0,x:13.1,y:33.1,startPosition:45},0).wait(1).to({regX:37.6,scaleX:0.96,rotation:0,skewX:-30.9,skewY:-28.8,x:13.5,y:33.7},0).wait(1).to({regY:2.1,scaleX:0.97,rotation:0.1,skewX:0,skewY:0,x:13.7,y:37.4,startPosition:46},0).wait(1).to({regX:37.7,rotation:-5.8,x:13.1,y:40.1,startPosition:1},0).wait(2).to({x:12.9,y:39.2},0).wait(1).to({x:12.7,y:38},0).wait(3));

	// girl1-34-torso
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6978F3").s().p("AhYAAQAAgJAIgLIAHgJQAGgIAEAAQAUgjAMgkQBGALApA8IAJANIgFANIgUAqIgPAXIgeAoIAAAEIgBAGQgEAFgGAAQgwAAgwhtg");
	this.shape_8.setTransform(59,96.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A2E95A").s().p("AhEBMQAOgxgBgyQgBg6gJg1IBwgSIAFARQAFAVAEAWIgBAAQAEAWACAXQACAXAAAYIAAAAQABAWgCAZIgFAxIgGArIgCAOQguhBhMgMg");
	this.shape_9.setTransform(63.2,75.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AABDpQgBgCAAgCIAAgGIAAgEIAdgoIAPgXIAUgsIAFgNIgJgNQgpg8hGgLQgMAkgUAjQgEAAgGAIIgHAJIgEgBQgEgDAAgEQgBgDACgEQAagpANgsIABgDQAPgwgBg2QAAg5gJg0IATgDQAJA2ABA5QABA0gOAxQBMALAuBAIACgOIAGgrIAFgvQACgYgBgYIAAgBQAAgXgCgYQgCgWgEgXIABAAQgEgVgFgVIgFgRIATgDIAFAOIAAABQAFAVAEAXQAEAXABAYQADAYAAAYQAAAagCAYIgEAxIgGArQgDASgGARIAAACIAAABIAAABIgHATIgWAtIAAAAQgGANgJAMQgOAWgRATQgCAEgEAAIgBAAQgDAAgDgCg");
	this.shape_10.setTransform(61,83.8);

	this.instance_2 = new lib.girl134torso("synched",0);
	this.instance_2.setTransform(34.9,81.9,1.037,1,0.3,0,0,38.1,52.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2E95A").s().p("AhEBFQAOgxgBgyQgBgygHgvIBygSIABAEQAFAVAEAVIgBAAQAEAXACAWQACAYAAAXIAAABQABAWgCAYIgFAxIgGArIgCAOQguhAhMgNg");
	this.shape_11.setTransform(63.6,78.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AABDiQgBgCAAgCIAAgFIAAgEIAdgoIAPgYIAUgrIAFgOIgJgNQgpg8hGgKQgMAkgUAiQgEABgGAHIgHAJIgEgBQgEgCAAgEQgBgEACgDQAagpANgqIABgEQAPgygBg2QAAgxgHguIATgDQAHAvABAzQABA0gOAxQBMAKAuBBIACgOIAGgrIAFgvQACgZgBgYIAAAAQAAgYgCgXQgCgXgEgWIABAAQgEgWgFgVIgBgEIATgDIABACIAAAAQAFAWAEAXQAEAXABAXQADAYAAAZQAAAZgCAZIgEAwIgGAsQgDASgGARIAAACIAAABIAAAAIgHATIgWAtIAAABQgGAMgJANQgOAVgRAUQgCADgEABIgBAAQgDAAgDgDg");
	this.shape_12.setTransform(61.4,86.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2E95A").s().p("AhEA5QAOgxgBgyQAAglgEgjIB0gTIAEAWIgBAAQAEAWACAXQACAXAAAYIAAAAQABAWgCAZIgFAxIgGArIgCAOQguhBhMgMg");
	this.shape_13.setTransform(63.2,79);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABDWQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgGIAAgEIAdgoIAPgXIAUgsIAFgNIgJgNQgpg8hGgJQgMAigUAjQgEAAgGAIIgHAJIgEgBQgEgDAAgEQgBgDACgEQAagpANgqIABgEQAPgxgBg2QAAgkgEgiIATgDQAEAjABAlQABA0gOAxQBMANAuA+IACgOIAGgpIAFgxQACgYgBgYIAAgBQAAgXgCgYQgCgWgEgXIABAAIgEgVIATgDIAEAVQAEAXABAYQADAYAAAYQAAAagCAYIgEAxIgGArQgDASgGARIAAACIAAABIAAABIgHATIgWAtIAAAAQgGANgJAMQgOAWgRATQgCAEgEAAIgBAAQgDAAgDgCg");
	this.shape_14.setTransform(61,87);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A2E95A").s().p("AhEBAQAOgygBgxQAAgtgGgqIBzgRIAHAjIgBAAQAEAWACAXQACAXAAAXIAAABQABAWgCAZIgFAxIgGArIgCANQguhAhMgMg");
	this.shape_15.setTransform(63.2,77.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AABDcQgBgCAAgCIAAgFIAAgEIAdgoIAPgYIAUgrIAFgOIgJgNQgpg8hGgKQgMAkgUAiQgEABgGAHIgHAJIgEgBQgEgCAAgEQgBgEACgDQAagpANgqIABgEQAPgygBg2QAAgrgFgoIATgDQAFAqABAsQABA0gOAxQBMAMAuA/IACgOIAGgrIAFgvQACgZgBgYIAAAAQAAgYgCgXQgCgXgEgWIABAAIgHgjIATgDIAHAjQAEAXABAXQADAYAAAZQAAAZgCAZIgEAwIgGAsQgDASgGARIAAACIAAABIAAAAIgHATIgWAtIAAABQgGAMgJANQgOAVgRAUQgCADgEABIgBAAQgDAAgDgDg");
	this.shape_16.setTransform(61,85.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:34.9,y:81.9,scaleX:1.037}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8,p:{x:59,y:96.3}}]}).to({state:[{t:this.instance_2,p:{regY:52.7,scaleY:0.991,rotation:0,skewX:-0.8,skewY:-0.4,x:34,y:82.8,scaleX:1.037}}]},1).to({state:[{t:this.instance_2,p:{regY:52.7,scaleY:0.991,rotation:0,skewX:-1.8,skewY:-1.4,x:33.5,y:83.9,scaleX:1.036}}]},1).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:1,rotation:-1.9,skewX:0,skewY:0,x:30.6,y:79.9,scaleX:1.036}}]},1).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:1,rotation:-5.4,skewX:0,skewY:0,x:30.1,y:75.2,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-7.7,skewX:0,skewY:0,x:28.9,y:71.7,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-8.5,skewX:0,skewY:0,x:27.9,y:70.3,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-8.5,skewX:0,skewY:0,x:27.9,y:70.3,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:1.001,rotation:0,skewX:-9.5,skewY:-8.9,x:28.2,y:76.2,scaleX:1.034}}]},9).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:1.001,rotation:0,skewX:-10.5,skewY:-10,x:29,y:78.8,scaleX:1.034}}]},1).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:1.001,rotation:0,skewX:-11.3,skewY:-10.7,x:29.8,y:80.3,scaleX:1.034}}]},1).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:1,rotation:0,skewX:-10.6,skewY:-10.2,x:31,y:78.8,scaleX:1.035}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-4.2,skewX:0,skewY:0,x:34.4,y:70.8,scaleX:1.036}}]},1).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-3.1,skewX:0,skewY:0,x:36.5,y:65.2,scaleX:1.036}}]},1).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-3.1,skewX:0,skewY:0,x:37.2,y:63.9,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-3.1,skewX:0,skewY:0,x:37.4,y:65.1,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-3.9,skewX:0,skewY:0,x:38.1,y:63.3,scaleX:1.036}}]},16).to({state:[{t:this.instance_2,p:{regY:53,scaleY:0.999,rotation:-2.9,skewX:0,skewY:0,x:37.7,y:66.1,scaleX:1.035}}]},2).to({state:[{t:this.instance_2,p:{regY:52.9,scaleY:0.999,rotation:-1,skewX:0,skewY:0,x:35.9,y:71.7,scaleX:1.035}}]},2).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:-1.4,skewX:0,skewY:0,x:36.5,y:76.2,scaleX:1.036}}]},2).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:-0.6,skewX:0,skewY:0,x:35.9,y:79.9,scaleX:1.036}}]},1).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:35,y:82.5,scaleX:1.037}}]},1).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:35.2,y:84,scaleX:1.037}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_8,p:{x:59.4,y:98.4}}]},1).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:35.1,y:83.1,scaleX:1.037}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_8,p:{x:59,y:97.6}}]},2).to({state:[{t:this.instance_2,p:{regY:52.8,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:34.9,y:81.9,scaleX:1.037}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_8,p:{x:59,y:96.3}}]},1).wait(3));

	// girl1-34-skirt
	this.instance_3 = new lib.girl134skirt("synched",0);
	this.instance_3.setTransform(34.5,111.4,1,1,0.3,0,0,38.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:22.4,scaleY:0.99,rotation:0,skewX:-0.7,skewY:-0.3,x:34.3,y:112.1},0).wait(1).to({skewX:-1.7,skewY:-1.3,x:34.4,y:113.2},0).wait(1).to({regY:22.3,scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:31.4,y:109.3},0).wait(2).to({regY:22.4,rotation:-5.3,x:32.7,y:104.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-7.6,x:32.8,y:100.9},0).wait(2).to({rotation:-8.4,x:32,y:99.4},0).wait(2).to({startPosition:0},0).wait(9).to({scaleX:1,scaleY:1,rotation:0,skewX:-9.4,skewY:-8.8,x:32.9,y:105.3},0).wait(1).to({regX:38.2,skewX:-10.4,skewY:-9.9,x:34.3,y:107.8},0).wait(1).to({skewX:-11.2,skewY:-10.6,x:35.6,y:109.2},0).wait(2).to({scaleY:1,skewX:-10.5,skewY:-10.1,x:36.3,y:107.7},0).wait(1).to({regX:38.1,scaleX:1,scaleY:1,rotation:-4.1,skewX:0,skewY:0,x:36.4,y:100.1},0).wait(1).to({rotation:-3,x:37.9,y:94.6},0).wait(2).to({x:38.6,y:93.3},0).wait(2).to({x:38.8,y:94.5},0).wait(16).to({rotation:-3.8,x:40,y:92.6},0).wait(2).to({rotation:-2.8,x:39,y:95.4},0).wait(2).to({rotation:-0.9,x:36.3,y:101.1},0).wait(2).to({regY:22.3,scaleX:1,scaleY:1,rotation:-1.3,x:37.1,y:105.7},0).wait(1).to({regY:22.4,rotation:-0.5,x:36.1,y:109.4},0).wait(1).to({regY:22.3,rotation:0.3,x:34.6,y:112},0).wait(1).to({rotation:0.3,x:34.9,y:113.5},0).wait(2).to({x:34.7,y:112.6},0).wait(1).to({x:34.5,y:111.4},0).wait(3));

	// girl1-34-leg-L
	this.instance_4 = new lib.girl134legL("single",0);
	this.instance_4.setTransform(9.8,151.9,1,1,1.3,0,0,23.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:0.99,rotation:0,skewX:0.9,skewY:1.3,x:7.7,y:152.6},0).wait(1).to({skewX:0,skewY:0.3,x:8.5,y:154.1},0).wait(1).to({scaleY:1,rotation:1.3,skewY:0,x:9.8,y:151.9},0).wait(2).to({startPosition:0},0).wait(2).to({rotation:-0.8,x:10.9,y:143.6},0).wait(2).to({rotation:-1.6,x:10.8,y:142},0).wait(2).to({startPosition:0},0).wait(9).to({rotation:-2.1,x:13.2,y:154.1},0).wait(1).to({rotation:-3.1,x:15.4,y:156.9},0).wait(1).to({rotation:-3.9,x:17.4,y:158.5},0).wait(2).to({scaleY:1,rotation:0,skewX:-3.2,skewY:-3.4,x:17.7,y:157.8},0).wait(1).to({regX:23.2,regY:33,scaleX:1,rotation:2.5,skewX:0,skewY:0,x:11.5,y:141.3},0).wait(1).to({rotation:3.5,x:12.3,y:135.3},0).wait(2).to({x:13,y:134},0).wait(2).to({x:13.2,y:135.2},0).wait(16).to({x:13.1,y:134.6},0).wait(2).to({regX:22.9,rotation:4.6,x:10.9,y:137.1},0).wait(2).to({regX:23.2,rotation:5.6,x:9.2,y:140.8},0).wait(2).to({regX:23.1,regY:33.2,scaleX:1,scaleY:1,rotation:-0.3,x:13.7,y:147},0).wait(1).to({rotation:0.3,x:12.1,y:150.4},0).wait(1).to({regY:33.1,rotation:1.3,x:9.8,y:151.9},0).wait(1).to({x:10,y:153.4},0).wait(2).to({x:9.9,y:152.5},0).wait(1).to({x:9.8,y:151.9},0).wait(3));

	// girl1-34-leg-R
	this.instance_5 = new lib.girl134legR("single",0);
	this.instance_5.setTransform(57,157.9,1,1,0.3,0,0,23.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleY:0.99,rotation:0,skewY:0.3,x:55,y:158.5},0).wait(1).to({regY:29.3,skewX:-0.9,skewY:-0.5,x:55.9,y:159.1},0).wait(1).to({regY:29.4,scaleY:1,rotation:0.3,skewX:0,skewY:0,x:57,y:157.9},0).wait(2).to({startPosition:0},0).wait(2).to({regX:23.3,rotation:-1.8,x:58.4,y:147.7},0).wait(2).to({regX:23.2,rotation:-2.6,x:58.3,y:145.8},0).wait(2).to({startPosition:0},0).wait(9).to({rotation:-3.1,x:60.8,y:157.2},0).wait(1).to({rotation:-4.1,x:63.1,y:159.1},0).wait(1).to({rotation:-4.9,x:65,y:160.2},0).wait(2).to({scaleY:1,rotation:0,skewX:-4.2,skewY:-4.4,x:65.4,y:159.9},0).wait(1).to({regX:23.3,scaleX:1,rotation:1.5,skewX:0,skewY:0,x:59.3,y:151.1},0).wait(1).to({rotation:2.5,x:59.8,y:146.1},0).wait(2).to({x:60.5,y:144.8},0).wait(2).to({x:60.7,y:146},0).wait(16).to({x:60.6,y:145.4},0).wait(2).to({regY:29.5,rotation:3.6,x:58.5,y:148.8},0).wait(2).to({regX:23.2,regY:29.4,rotation:4.6,x:56.2,y:153.3},0).wait(2).to({regX:23.3,scaleX:1,scaleY:1,rotation:-1.3,x:61.2,y:151.5},0).wait(1).to({rotation:-0.5,x:59.5,y:155.5},0).wait(1).to({regX:23.2,rotation:0.3,x:57,y:157.9},0).wait(1).to({rotation:0.3,x:57.3,y:159.4},0).wait(2).to({x:57.1,y:158.5},0).wait(1).to({x:57,y:157.9},0).wait(3));

	// girl1-34-arm-R
	this.instance_6 = new lib.girl134armR("single",1);
	this.instance_6.setTransform(41.9,36.1,1.084,1.084,0.3,0,0,-15.1,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({scaleY:1.07,rotation:0,skewX:-0.7,skewY:-0.3,x:40.1,y:37.4,startPosition:44},0).wait(1).to({scaleX:1.16,scaleY:1.08,skewX:-12,skewY:-7.9,x:37.6,y:38.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-1.8,skewX:0,skewY:0,x:35.8,y:33.8,startPosition:45},0).wait(2).to({regX:-15.1,rotation:-5.3,x:32.4,y:28.8,startPosition:46},0).wait(2).to({regX:-15,regY:-27.1,rotation:-7.6,x:29.5,y:25.3,startPosition:47},0).wait(2).to({regY:-27,rotation:-8.4,x:27.7,y:24,startPosition:41},0).wait(2).to({scaleX:1.08,scaleY:1.08,rotation:-10.2,y:23.9},0).wait(9).to({regX:-15.1,regY:-27.1,scaleX:1.08,scaleY:1.09,rotation:0,skewX:-9.4,skewY:-7.5,x:27.1,y:29.8},0).wait(1).to({scaleX:1.09,skewX:-10.4,skewY:-5.8,y:32.4},0).wait(1).to({regY:-27.2,skewX:-11.2,skewY:-6.9,x:27.4,y:33.8},0).wait(2).to({scaleX:1.08,skewX:-10.5,skewY:-7.2,x:29,y:32.3},0).wait(1).to({regY:-27.1,scaleX:1.08,scaleY:1.08,rotation:-4.1,skewX:0,skewY:0,x:37.7,y:24.5},0).wait(1).to({rotation:-3,x:40.6,y:19.1,startPosition:43},0).wait(2).to({regY:-27,scaleX:1.08,scaleY:1.08,rotation:0,skewX:-1,skewY:-4.5,x:41.3,y:17.8},0).wait(2).to({regX:-15.3,regY:-27.1,scaleX:1.08,scaleY:1.08,skewX:-2.5,skewY:-3.5,y:18.9},0).wait(16).to({regX:-15.1,rotation:-4.9,skewX:0,skewY:0,x:41.6,y:17.1},0).wait(2).to({regY:-27.2,rotation:-2.8,x:42,y:19.8},0).wait(2).to({regY:-27.1,rotation:-0.9,x:41.7,y:25.7,startPosition:48},0).wait(2).to({regX:-15,regY:-27,scaleX:1.08,scaleY:1.08,rotation:-1.3,x:42.2,y:30.3,startPosition:49},0).wait(1).to({rotation:-0.5,x:42.1,y:34.1,startPosition:50},0).wait(1).to({rotation:0.3,x:42,y:36.7,startPosition:51},0).wait(1).to({rotation:0.3,x:42.2,y:38.2,startPosition:1},0).wait(2).to({x:42.1,y:37.3},0).wait(1).to({x:41.9,y:36.1},0).wait(3));

	// GIRL_HEAD
	this.instance_7 = new lib.GIRL_HEAD_ToLL("synched",0);
	this.instance_7.setTransform(29.1,34.2,1,1,7.1,0,0,160,219.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:160.1,scaleX:1,scaleY:1,rotation:7.3,x:27,y:35.7,startPosition:1},0).wait(1).to({regX:160.2,rotation:5.8,x:25.7,y:36.5,startPosition:2},0).wait(1).to({regX:160,rotation:0.3,x:24.6,y:31.7,startPosition:3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.2,x:21.1,y:27.4,startPosition:5},0).wait(2).to({regX:160.1,regY:219.1,rotation:-8.5,x:18,y:23.9,startPosition:7},0).wait(2).to({regY:219.2,rotation:-9.8,x:16.1,y:22.2,startPosition:9},0).wait(2).to({startPosition:11},0).wait(9).to({regX:160,regY:219.3,rotation:-9.2,x:15.9,y:29.5,startPosition:20},0).wait(1).to({rotation:-8.5,x:15.3,y:32.7,startPosition:21},0).wait(1).to({regY:219.5,rotation:0,skewX:-8.3,skewY:-8.2,x:15.5,y:35.5,startPosition:22},0).wait(2).to({scaleX:1,scaleY:1,skewX:-6.3,skewY:-6.2,x:17.2,y:34,startPosition:24},0).wait(1).to({regY:219.3,rotation:-5,skewX:0,skewY:0,x:27.4,y:25.2,startPosition:25},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6,x:30.3,y:17.3,startPosition:26},0).wait(2).to({rotation:-6.8,x:31.3,y:14.6,startPosition:28},0).wait(2).to({x:31.6,y:16.4,startPosition:30},0).wait(16).to({regY:219.2,rotation:-7.6,y:14.1,startPosition:46},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.2,x:31.3,y:16.9,startPosition:48},0).wait(2).to({rotation:-1.1,x:30.2,y:23.4,startPosition:50},0).wait(2).to({regX:160.1,regY:219.3,scaleX:1,scaleY:1,rotation:3,x:29.4,y:27.7,startPosition:53},0).wait(1).to({regY:219.2,rotation:5.1,x:29.5,y:31.2},0).wait(1).to({regX:160,scaleX:1,scaleY:1,rotation:7.1,x:29.2,y:34.8},0).wait(1).to({x:29.5,y:36.9,startPosition:54},0).wait(2).to({x:29.2,y:35.1,startPosition:55},0).wait(1).to({x:29.1,y:34.2,startPosition:56},0).wait(3));

	// girl_34_collar_behind
	this.instance_8 = new lib.girl_34_collar_behind("synched",0);
	this.instance_8.setTransform(31.7,27.6,1,1,0,0,0,20.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({scaleY:0.99,skewX:-1,skewY:-0.6,x:29.7,y:29.1},0).wait(1).to({regY:6.3,skewX:-2,skewY:-1.6,x:28.3,y:30.2},0).wait(1).to({regX:20.7,scaleY:1,rotation:-2.1,skewX:0,skewY:0,x:25.2,y:25.6},0).wait(2).to({rotation:-5.6,x:21.4,y:21.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-7.9,x:18.2,y:18.3},0).wait(2).to({rotation:-8.7,x:16.3,y:17},0).wait(2).to({startPosition:0},0).wait(9).to({regY:6.4,scaleX:1,scaleY:1,rotation:0,skewX:-9.7,skewY:-9.1,x:15.7,y:23.1},0).wait(1).to({regY:6.3,skewX:-10.7,skewY:-10.2,x:15.5,y:25.8},0).wait(1).to({skewX:-11.5,skewY:-10.9,x:15.7,y:27.5},0).wait(2).to({scaleY:1,skewX:-10.8,skewY:-10.4,x:17.4,y:25.9},0).wait(1).to({regY:6.5,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,skewY:0,x:26.8,y:16.9},0).wait(1).to({regY:6.4,rotation:-3.3,x:29.9,y:11.2},0).wait(2).to({x:30.6,y:9.9},0).wait(2).to({x:30.8,y:11.1},0).wait(16).to({regX:20.8,rotation:-4.1,x:30.9,y:9.4},0).wait(2).to({rotation:-3.1,x:31.5,y:12},0).wait(2).to({regX:20.7,rotation:-1.2,x:31.3,y:17.5},0).wait(2).to({regX:20.8,scaleX:1,scaleY:1,rotation:-1.6,x:31.7,y:22},0).wait(1).to({rotation:-0.8,y:25.7},0).wait(1).to({rotation:0,x:31.8,y:28.2},0).wait(1).to({x:32,y:29.7},0).wait(2).to({x:31.9,y:28.8},0).wait(1).to({x:31.7,y:27.6},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-202.9,284.5,353.8);


(lib.Avril_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl1-34-collar
	this.instance = new lib.girl134collar("synched",0);
	this.instance.setTransform(31,32.5,1,1,0.3,0,0,22.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(88).to({startPosition:0},0).wait(1).to({rotation:0.6,x:31.1,y:32.3},0).wait(1).to({rotation:1,x:31.2,y:32.1},0).wait(1).to({rotation:1.3,x:31.4,y:31.9},0).wait(2).to({rotation:1,x:31.2,y:32.1},0).wait(2).to({rotation:0.3,x:30.6,y:33},0).wait(2).to({regY:8.5,rotation:0,x:29.5,y:32.1},0).wait(1).to({regY:8.6,rotation:-0.6,x:28.4,y:31.4},0).wait(1).to({rotation:-1.6,y:29},0).wait(1).to({regX:22.7,rotation:-3.2,x:26.3,y:27.1},0).wait(1).to({rotation:-4.2,x:26,y:25.8},0).wait(1).to({x:25.5,y:25},0).wait(3).to({x:25.6,y:25.4},0).wait(2).to({y:25.8},0).wait(82).to({x:25.9,y:25.1},0).wait(2).to({rotation:-3.2,x:26.3,y:27.1},0).wait(1).to({regX:22.6,rotation:-0.6,x:28.1,y:29.3},0).wait(1).to({rotation:0.3,x:30,y:30.9},0).wait(1).to({rotation:1,x:31.2,y:32.1},0).wait(2).to({rotation:0.3,y:33.9},0).wait(2).to({rotation:0.3,x:31,y:32.5},0).wait(1).to({startPosition:0},0).wait(101));

	// girl1-34-arm-L
	this.instance_1 = new lib.girl134armL("single",1);
	this.instance_1.setTransform(12.7,38,0.965,0.965,-5.9,0,0,37.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(88).to({startPosition:1},0).wait(1).to({rotation:-5.3,x:12.8,y:37.7},0).wait(1).to({regX:37.8,rotation:-4.9,x:13,y:37.4},0).wait(1).to({regX:37.6,rotation:-4.8,x:12.9,y:37.1},0).wait(2).to({regX:37.8,rotation:-4.9,x:13,y:37.4,startPosition:4},0).wait(2).to({regX:37.6,scaleY:0.97,rotation:0,skewX:3.8,skewY:-1.7,y:35.9},0).wait(2).to({regX:37.8,scaleX:0.97,scaleY:0.97,skewX:-6.3,skewY:-12.9,x:11.4,y:37.8,startPosition:5},0).wait(1).to({regX:37.7,regY:2,scaleX:0.97,scaleY:1,skewX:6.2,skewY:7.7,x:12.6,y:37},0).wait(1).to({regX:37.6,scaleY:0.98,skewX:5.1,skewY:5.9,y:36.9},0).wait(1).to({regX:37.7,regY:2.1,scaleY:0.97,rotation:-6.1,skewX:0,skewY:0,x:9.2,y:31.2,startPosition:3},0).wait(1).to({regY:2,rotation:-8.9,y:31.8},0).wait(1).to({regY:2.1,rotation:-10.5,x:7.7,y:32.1},0).wait(3).to({x:7.8,y:32.5},0).wait(2).to({y:32.9},0).wait(82).to({regY:2,rotation:-8.9,x:9.1,y:31.1},0).wait(2).to({regY:2.1,rotation:-6.1,x:9.2,y:31.2},0).wait(1).to({regY:2,scaleY:1,rotation:0,skewX:6.2,skewY:7.7,x:12.3,y:34.9,startPosition:5},0).wait(1).to({regX:37.6,regY:2.1,scaleY:0.97,skewX:3.8,skewY:-1.7,x:12.4,y:33.9,startPosition:4},0).wait(1).to({regX:37.8,scaleY:0.97,rotation:-4.9,skewX:0,skewY:0,x:13,y:37.4},0).wait(2).to({regX:37.7,rotation:-5.8,x:12.9,y:39.4,startPosition:1},0).wait(2).to({x:12.8,y:38.7},0).wait(1).to({x:12.7,y:38},0).wait(101));

	// girl1-34-hand-L
	this.instance_2 = new lib.girl134armRcopygm1("single",1);
	this.instance_2.setTransform(41.9,36.1,1.084,1.084,0.3,0,0,-15.1,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(88).to({startPosition:1},0).wait(1).to({rotation:0.6,x:42,y:36},0).wait(1).to({rotation:1,x:42.1,y:35.9},0).wait(1).to({rotation:1.3,x:42.2,y:35.8},0).wait(2).to({rotation:1,x:42.1,y:35.9,startPosition:4},0).wait(2).to({rotation:0.3,x:41.5,y:36.6,startPosition:5},0).to({_off:true},2).wait(96).to({rotation:0.3,x:40.9,y:34.5,_off:false},0).wait(1).to({rotation:1,x:42.1,y:35.9,startPosition:4},0).wait(2).to({rotation:0.3,y:37.5,startPosition:1},0).wait(2).to({rotation:0.3,x:42,y:36.8},0).wait(1).to({x:41.9,y:36.1},0).wait(101));

	// girl1-34-torso
	this.instance_3 = new lib.girl134torso("synched",0);
	this.instance_3.setTransform(34.9,81.9,1.037,1,0.3,0,0,38.1,52.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(88).to({startPosition:0},0).wait(1).to({scaleX:1.04,rotation:0.6,x:34.7,y:81.8},0).wait(1).to({rotation:1,x:34.5,y:81.6},0).wait(1).to({rotation:1.3,x:34.4,y:81.4},0).wait(2).to({rotation:1,x:34.5,y:81.6},0).wait(2).to({scaleX:1.04,rotation:0.3,y:82.4},0).wait(2).to({scaleX:1.04,rotation:0,x:33.8,y:81.6},0).wait(1).to({rotation:-0.6,x:33.2,y:80.7},0).wait(1).to({rotation:-1.6,x:34,y:78.2},0).wait(1).to({regY:52.7,rotation:-3.2,x:33.2,y:76.1},0).wait(1).to({regX:38.2,regY:52.8,rotation:-4.2,x:33.9,y:74.7},0).wait(1).to({x:33.4,y:74},0).wait(3).to({y:74.4},0).wait(2).to({x:33.5,y:74.8},0).wait(82).to({x:33.8,y:74},0).wait(2).to({regX:38.1,regY:52.7,rotation:-3.2,x:33.2,y:76.1},0).wait(1).to({regY:52.8,rotation:-0.6,x:32.9,y:78.6},0).wait(1).to({scaleX:1.04,rotation:0.3,x:33.9,y:80.3},0).wait(1).to({scaleX:1.04,rotation:1,x:34.5,y:81.6},0).wait(2).to({scaleX:1.04,rotation:0.3,x:35.1,y:83.3},0).wait(2).to({rotation:0.3,x:35,y:82.6},0).wait(1).to({x:34.9,y:81.9},0).wait(101));

	// girl1-34-skirt
	this.instance_4 = new lib.girl134skirt("synched",0);
	this.instance_4.setTransform(34.5,111.4,1,1,0.3,0,0,38.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(88).to({startPosition:0},0).wait(1).to({rotation:0.6,x:34.1,y:111.1},0).wait(1).to({regY:22.4,rotation:1,x:33.8,y:111},0).wait(1).to({regY:22.2,rotation:1.3,x:33.5,y:110.7},0).wait(2).to({regY:22.4,rotation:1,x:33.8,y:111},0).wait(2).to({regY:22.3,rotation:0.3,x:34.2,y:111.8},0).wait(2).to({regY:22.4,rotation:0,x:33.8,y:111},0).wait(1).to({regY:22.2,rotation:-0.6,x:33.4,y:110},0).wait(1).to({rotation:-1.6,x:34.8,y:107.5},0).wait(1).to({rotation:-3.2,y:105.4},0).wait(1).to({rotation:-4.2,x:35.9,y:104},0).wait(1).to({x:35.4,y:103.3},0).wait(3).to({x:35.5,y:103.7},0).wait(2).to({y:104.1},0).wait(82).to({x:35.8,y:103.3},0).wait(2).to({rotation:-3.2,x:34.8,y:105.4},0).wait(1).to({rotation:-0.6,x:33.1,y:107.9},0).wait(1).to({regY:22.3,rotation:0.3,x:33.5,y:109.8},0).wait(1).to({regY:22.4,rotation:1,x:33.8,y:111},0).wait(2).to({regY:22.3,rotation:0.3,x:34.7,y:112.8},0).wait(2).to({rotation:0.3,x:34.6,y:112.1},0).wait(1).to({x:34.5,y:111.4},0).wait(101));

	// girl1-34-leg-L
	this.instance_5 = new lib.girl134legL("single",0);
	this.instance_5.setTransform(9.8,151.9,1,1,1.3,0,0,23.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(88).to({startPosition:0},0).wait(1).to({rotation:1.6,x:9,y:151.6},0).wait(1).to({rotation:2,x:8.4,y:151.1},0).wait(1).to({rotation:2.3,x:8,y:150.9},0).wait(2).to({rotation:2,x:8.4,y:151.1},0).wait(2).to({rotation:1.3,x:9.8,y:151.9},0).wait(2).to({rotation:0.8,x:9.7,y:151.5},0).wait(1).to({rotation:0.2,x:9.8,y:151.1},0).wait(1).to({rotation:-0.6,x:12,y:148.9},0).wait(1).to({regY:33.2,rotation:-2.2,x:11.5,y:147.7},0).wait(1).to({rotation:-3.2,x:13.4,y:146.7},0).wait(1).to({x:12.9,y:146},0).wait(3).to({x:13,y:146.8},0).wait(2).to({y:147.2},0).wait(82).to({x:13.3,y:146},0).wait(2).to({rotation:-2.2,x:11.5,y:147.7},0).wait(1).to({regY:33.1,rotation:0.2,x:9.5,y:149},0).wait(1).to({rotation:1.3,x:9.1,y:149.9},0).wait(1).to({rotation:2,x:8.4,y:151.1},0).wait(2).to({rotation:1.3,x:10,y:153.3},0).wait(2).to({x:9.9,y:152.6},0).wait(1).to({x:9.8,y:151.9},0).wait(101));

	// girl1-34-leg-R
	this.instance_6 = new lib.girl134legR("single",0);
	this.instance_6.setTransform(57,157.9,1,1,0.3,0,0,23.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(88).to({startPosition:0},0).wait(1).to({regX:23.3,rotation:0.6,x:56.3,y:157.8},0).wait(1).to({regX:23.2,regY:29.3,rotation:1,x:55.7},0).wait(1).to({regX:23.3,regY:29.4,rotation:1.3,x:55.3},0).wait(2).to({regX:23.2,regY:29.3,rotation:1,x:55.7},0).wait(2).to({regY:29.4,rotation:0.3,x:57,y:157.9},0).wait(2).to({rotation:0,x:57.1,y:157.1},0).wait(1).to({rotation:-0.6,y:156.2},0).wait(1).to({regX:23.3,rotation:-1.6,x:59.5,y:153.2},0).wait(1).to({regX:23.2,rotation:-3.2,x:59,y:150.6},0).wait(1).to({regY:29.5,rotation:-4.2,x:60.9,y:148.8},0).wait(1).to({x:60.4,y:148},0).wait(3).to({x:60.5,y:148.8},0).wait(2).to({y:149.2},0).wait(82).to({x:60.8,y:148.1},0).wait(2).to({regY:29.4,rotation:-3.2,x:59,y:150.6},0).wait(1).to({rotation:-0.6,x:56.8,y:154.1},0).wait(1).to({rotation:0.3,x:56.4,y:155.9},0).wait(1).to({regY:29.3,rotation:1,x:55.7,y:157.8},0).wait(2).to({regY:29.4,rotation:0.3,x:57.2,y:159.3},0).wait(2).to({rotation:0.3,x:57.1,y:158.6},0).wait(1).to({x:57,y:157.9},0).wait(101));

	// girl1-34-arm-R
	this.instance_7 = new lib.girl134armR("single",1);
	this.instance_7.setTransform(41.9,36.1,1.084,1.084,0.3,0,0,-15.1,-27.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AAfALQgygVgnAOIgKAFIAEgcIAAgCIACgRQAhgMAdADQAkAFAgAdIABAEIgBACIAAAHIgDAxQgNgdgVgJg");
	this.shape.setTransform(68.2,84.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("AgbBjQgFgBgBgNIABgNQABgFAKgJQAHgJACgHIAMgaQADgVgEgYQgFgQgEAGQgCgEgDgCQgFAJgJAdQgNAWgfgIQgOgEgCgRQADgJAYgWQAYgXADgMIABgGIAAgBQAUgVAxANQArAMAHAlIgBABIAEARIAAAKIABAHIAAAHIgGAUIgBgKQgDgYgFgGIgCAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAABgBABIACAYQACAZgCAHQgCAHgTANIAEgKQADgJgBgeQAAgggHgCQgEgBgDADIgBAEQgCAGABAOIgBAOIAAAbQgGATgJAOIgHAEIABADIABABQgQAUgSAAQgHAAgGgCgAgrAsQADgJAOgIIACAAIgLARIgFAIQgDgFAAgDg");
	this.shape_1.setTransform(64.9,96.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A2E95A").s().p("ACkDwQgXgKgXgEQgKgCgKAAIgQAAIgWACIgDg7QABgCAAgFQgFhegKgXQgEgIgEAAQgIAAgBAGIACAJIgOgMIgDgCIgPgRIgRgQIgRgOIgkgdIglgbIgngaIgHAIIAEAMIANAnQgHgKgGgJQgNgXgLgXIgNgaQAag2AtgtIAZgYIAgAbIAeAYIAeAZIAvApIAmAlQARATAQAUIAHALIANAXQAKATAJASIAVA5QAZBPgQBQIgDARg");
	this.shape_2.setTransform(56.5,55.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVGFQgPgEgBgYQgBgMACgKQgGgDAAgLQgBgJABgFQABgLALgHQgOAHgUgFQgUgFgFgRQgDgKADgKQAEgQAjggIADgDIAAgEIACgKQAFgbAEgbIABAAIACgYQACgXAAgWIgBg8IgCgSQAAgRgOgVIgLgPIgKgLIghgfQgcgagfgZIg+guIgEgMIAHgIIAnAaIAlAbIAkAdIARAQIARAQIARARIADACIAMAMIAAgJQAAgGAHAAQAEAAAEAIQAKAXAFBcQAAAFgBACIADA7IAWgCIAQAAQAKAAAKACQAYAEAWAKIASAJIADgRQAQhQgZhNIgVg5QgJgUgKgTIgNgXIgHgLQgQgUgRgTIgmglIgvgpIgegZIgegYIgggbIAFgKQAmARAjAbIAwApQATAPASATQASARAQAUQARATAOAVIALAPQAWAdAPAgQAJAXAGAYQAdBugXBzIgBAEQgGA9gDALIgCAFQACAOgDAKQAAAFgDACIgEAYQgIAYgIAAIgQAYQgOAPgPADIgCAFQgWAegeAAQgJAAgKgCgAA1DxQAHAZgGAWIgMAbQgCAHgHAJQgJAJgCAFIAAANQAAAMAFACQAdAHAUgZIAAgCIgBgCIAGgEQAKgPAFgTIAAgbIABgPQAAgOABgGIACgEQACgDAEABQAHACAAAiQABAegCAJIgFAKQAUgNABgHQACgIgCgZIgBgaQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAIADAAQAEAGAEAaIAAAJIAGgVIABgHIgCgHIAAgLIgEgRIACABIAAgBQgHglgsgMQgzgNgTAVIgBABIgBAGQgDAMgWAWQgXAWgDAKQACATANAEQAdAIANgYQAJgdAFgKQADADACADIACgBQAEAAADALgAAdEsQgPAIgCAIQgBADADAFIAGgHIALgRIABgDgAAfEWIgLAKIAFgCIALgEIACgQIgHAMgAB4CpQAWAJAMAdIADgzIABgHIAAgCIAAgEQgggdgmgFQgegDghAMIgBARIgBACIgDAeIAKgFQAQgGATAAQAZAAAeANg");
	this.shape_3.setTransform(59.3,69.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{rotation:0.3,x:41.9,y:36.1,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]}).to({state:[{t:this.instance_7,p:{rotation:0.3,x:41.9,y:36.1,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},88).to({state:[{t:this.instance_7,p:{rotation:0.6,x:42,y:36,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:1,x:42.1,y:35.9,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:1.3,x:42.2,y:35.8,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:1,x:42.1,y:35.9,startPosition:4,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},2).to({state:[{t:this.instance_7,p:{rotation:0.3,x:41.5,y:36.6,startPosition:5,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},2).to({state:[{t:this.instance_7,p:{rotation:-3.5,x:40.3,y:37.6,startPosition:5,regX:-15.2,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:38.4,y:36.4,startPosition:5,regX:-15.2,regY:-27.2,skewX:-2.6,skewY:-3.5,scaleY:1.084}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:37.3,y:30.1,startPosition:3,regX:-15.1,regY:-27.1,skewX:-5.6,skewY:-3.3,scaleY:1.152}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:37.2,y:28.5,startPosition:3,regX:-15,regY:-27.1,skewX:-5.4,skewY:-4.3,scaleY:1.105}}]},1).to({state:[{t:this.instance_7,p:{rotation:-4.3,x:36.6,y:27.8,startPosition:3,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:-4.3,x:36.6,y:28.2,startPosition:3,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},3).to({state:[{t:this.instance_7,p:{rotation:-4.3,x:36.7,y:28.6,startPosition:3,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:37.1,y:27.8,startPosition:3,regX:-15,regY:-27.1,skewX:-5.4,skewY:-4.3,scaleY:1.105}}]},82).to({state:[{t:this.instance_7,p:{rotation:0,x:37.3,y:30.1,startPosition:3,regX:-15.1,regY:-27.1,skewX:-5.6,skewY:-3.3,scaleY:1.152}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:38.1,y:34.3,startPosition:5,regX:-15.2,regY:-27.2,skewX:-2.6,skewY:-3.5,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:0.3,x:40.9,y:34.5,startPosition:5,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:1,x:42.1,y:35.9,startPosition:4,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).to({state:[{t:this.instance_7,p:{rotation:0.3,x:42.1,y:37.5,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},2).to({state:[{t:this.instance_7,p:{rotation:0.3,x:42,y:36.8,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},2).to({state:[{t:this.instance_7,p:{rotation:0.3,x:41.9,y:36.1,startPosition:1,regX:-15.1,regY:-27.1,skewX:0,skewY:0,scaleY:1.084}}]},1).wait(101));

	// GIRL_HEAD
	this.instance_8 = new lib.GIRL_HEAD("synched",0);
	this.instance_8.setTransform(29.1,34.2,1,1,7.1,0,0,160,219.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(88).to({startPosition:88},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.5,x:29.3,y:33.4,startPosition:89},0).wait(1).to({regX:160.1,rotation:7.8,x:29.6,y:32.8,startPosition:90},0).wait(1).to({scaleX:1,scaleY:1,rotation:8.1,x:29.7,y:32.3,startPosition:91},0).wait(2).to({scaleX:1,scaleY:1,rotation:7.8,x:29.6,y:32.8,startPosition:93},0).wait(2).to({regX:160,scaleX:1,scaleY:1,rotation:6.1,x:27.9,y:35.1,startPosition:95},0).wait(2).to({scaleX:1,scaleY:1,rotation:5,x:27.5,y:34.3,startPosition:97},0).wait(1).to({regX:160.1,rotation:4,x:27,y:33.4,startPosition:98},0).wait(1).to({rotation:1.6,x:26.9,y:30.3,startPosition:99},0).wait(1).to({rotation:-0.3,x:25.9,y:27.5,startPosition:100},0).wait(1).to({regY:219.3,rotation:-1.3,x:24.3,y:25.3,startPosition:101},0).wait(1).to({x:23.3,y:24.2,startPosition:102},0).wait(3).to({x:23.5,y:25.4,startPosition:105},0).wait(2).to({y:25.8,startPosition:107},0).wait(82).to({x:24.2,y:24.6,startPosition:189},0).wait(2).to({regY:219.2,rotation:-0.3,x:25.5,y:26.9,startPosition:191},0).wait(1).to({regY:219.1,rotation:1.6,x:28.3,y:29.2,startPosition:192},0).wait(1).to({regX:159.9,regY:219.2,rotation:3.3,x:29.5,y:31.3,startPosition:193},0).wait(1).to({regX:160.2,rotation:5.8,x:29.6,y:33.1,startPosition:194},0).wait(2).to({regX:160,scaleX:1,scaleY:1,rotation:7.1,x:29.3,y:35.6,startPosition:196},0).wait(2).to({x:29.2,y:34.9,startPosition:198},0).wait(1).to({x:29.1,y:34.2,startPosition:199},0).wait(101));

	// girl_34_collar_behind
	this.instance_9 = new lib.girl_34_collar_behind("synched",0);
	this.instance_9.setTransform(31.7,27.6,1,1,0,0,0,20.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(88).to({startPosition:0},0).wait(1).to({rotation:0.3,x:31.9,y:27.4},0).wait(1).to({rotation:0.8,x:32,y:27.2},0).wait(1).to({rotation:1,x:32.1,y:27},0).wait(2).to({rotation:0.8,x:32,y:27.2},0).wait(2).to({rotation:0,x:31.3,y:28.1},0).wait(2).to({rotation:-0.3,x:30.2,y:27.3},0).wait(1).to({rotation:-0.9,x:29,y:26.4},0).wait(1).to({regY:6.3,rotation:-1.9,x:28.9,y:24},0).wait(1).to({rotation:-3.5,x:26.6,y:22.1},0).wait(1).to({regY:6.2,rotation:-4.5,x:26.2,y:20.7},0).wait(1).to({x:25.7,y:20},0).wait(3).to({y:20.4},0).wait(2).to({x:25.8,y:20.8},0).wait(82).to({x:26.1,y:20},0).wait(2).to({regY:6.3,rotation:-3.5,x:26.6,y:22.1},0).wait(1).to({regY:6.4,rotation:-0.9,x:28.7,y:24.3},0).wait(1).to({rotation:0,x:30.7,y:26},0).wait(1).to({rotation:0.8,x:32,y:27.2},0).wait(2).to({rotation:0,x:31.9,y:29},0).wait(2).to({x:31.8,y:28.3},0).wait(1).to({x:31.7,y:27.6},0).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-202.9,284.5,353.8);


(lib.Avril_FamilyTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl1-34-hand-L
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6978F3").s().p("AAVAOQgTgagegLQgSgIgTgFIAJggQAhgHAdARQAQAIAMANQALANAKAOIALAOIgTBDQgHgfgTgag");
	this.shape.setTransform(68.8,91);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#996666").s().p("AgIBYQAOgIARgJQAPgIAOgMIABgEIgHACQgeAIgbAMQgHADgHgDQgSAAgSgFIAWgLQALgHAJgIQALgIAIgJQAFgEAGgCIgEAAIgMAHIgpAQIgdAJQgTAHgTgLIAGgTQAEgIAHgEQANgLAQgGQAQgHAPgKQASgLAGgRIgFgDIgoAUIgcgQIAEgLQAZgCAUgKQAVgJARgNIAgAGQAUAEAQAMQAbATALAdQAGAPAAARQAAAKgFALIgGAMQgKAUgTAOQgaATgfABIgZgHg");
	this.shape_1.setTransform(60.9,98.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgQDpQgWAAgNgRIgugSIgBgFQgVAEgRgNQgEgCgCgFQgEgHgCgIQgBgQAJgNQANgTAYgJQgLgIgGgOQgHgPAMgLQAEgEAFgBIAqgPQANgGAHgJQASgWAHgcQAEgTACgTQADgTgBgUQgCgUgFgTQgHgfgLgcIgDgJIAagDIACAHQAFANADAOQADAOABANQADAOAAAOQABAcgBAcIgBAeIAIAAIAZAEIANAFIANAFQAMAGALAHQAKAFAJAIQANAKAMAOIABgvQABgYgCgXQgCgXgEgVIgHgrQgBgIgCgHIgLgnIgHgVIAQgDIAHAXQAhBpgCBrQAAAMgDAMIgLAyIgMAsQgGASgIARQgHAOgIAMQgKARgPAHQgUAKgOAPQgLAEgMACIgMACQgIAAgIgDgAAfCwQgOAMgQAIQgOAKgQAHIAaAHQAegBAZgSQATgOAKgVIAGgLQAGgLAAgLQAAgTgGgPQgMgdgbgTQgQgMgTgEIgegGQgUAOgUAIQgVAKgYACIgFALIAdAQIAogUIAFAEQgHAQgSAMQgPAJgPAIQgQAHgOALQgHAEgEAJIgGASQATALATgHIAdgJIAqgQIANgGIAEgBQgGACgFAFQgJAIgLAIQgJAIgMAHIgVALQARAFATAAQAGADAHgDQAegLAcgJIAHgBIgBADgAAAgUIgHAeQARAFASAIQAgAMATAbQATAbAHAeIAThDIgLgQQgKgOgLgMQgMgMgQgIQgXgMgXAAQgJAAgJACg");
	this.shape_2.setTransform(63,86.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A2E95A").s().p("AAuBmQgJgHgKgGQgLgHgMgFIgLgFIgNgFIgZgEIgIAAIABgfQABgcgBgaQAAgOgDgNQgCgOgEgNQgDgOgFgOIgCgGIBsgRIAHAVIALAnQACAHABAHIAHArQAEAUACAWQACAYgBAXIgBAxQgMgOgNgMg");
	this.shape_3.setTransform(68.8,75.7);

	this.instance = new lib.girl134armRcopy("single",18);
	this.instance.setTransform(41.7,42.4,1.082,1.082,0,0.3,-1.1,-15.3,-27.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[]},1).to({state:[{t:this.instance}]},96).to({state:[]},1).wait(11));

	// girl1-34-collar
	this.instance_1 = new lib.girl134collar("synched",0);
	this.instance_1.setTransform(31,32.5,1,1,0.3,0,0,22.6,8.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:22.7,rotation:1.6,x:33.5,y:34.9},0).wait(1).to({regX:22.6,rotation:2.8,x:36.7,y:39.2},0).wait(1).to({rotation:3.6,x:38.5,y:40.9},0).wait(2).to({rotation:4.4,x:39.8,y:41.8},0).wait(4).to({rotation:3.4,x:39.5},0).wait(2).to({regX:22.3,rotation:2.6,x:38.2,y:40.4},0).wait(2).to({regX:22.6,rotation:1.6,x:37.7,y:36.3},0).wait(1).to({rotation:0.6,x:35.2,y:33.5},0).wait(1).to({rotation:-0.3,x:34.5,y:31.5},0).wait(1).to({rotation:-1.3,x:34.3,y:30.4},0).wait(2).to({x:34.4,y:31.1},0).wait(15).to({scaleX:1,scaleY:1,rotation:-0.2,x:34.1,y:33.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:0.6,x:35.9,y:36.3},0).wait(1).to({rotation:1.4,x:36.4,y:38.7},0).wait(1).to({x:36.5,y:39.4},0).wait(6).to({rotation:0.4,x:36.4,y:41.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.7,x:35.5,y:40.6},0).wait(1).to({rotation:-0.7,x:35.4,y:39.9},0).wait(1).to({rotation:-0.8,x:36.8,y:34.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.8,x:36.7,y:28.8},0).wait(1).to({x:36.5,y:27.4},0).wait(2).to({x:36.4,y:26.7},0).wait(2).to({x:36.5,y:27.4},0).wait(12).to({regX:22.5,scaleX:1,scaleY:1,rotation:-0.7,x:37.3,y:31.2},0).wait(1).to({rotation:0.1,x:37.6,y:33.4},0).wait(2).to({regX:22.6,rotation:0,x:36.9,y:36.6},0).wait(2).to({rotation:-1.1,x:35.5,y:34.3},0).wait(1).to({rotation:-2.5,x:32.8,y:30.9},0).wait(1).to({regY:8.7,rotation:-4,x:32.2,y:26.6},0).wait(1).to({rotation:-7.6,x:31.2,y:20.5},0).wait(2).to({regY:8.6,rotation:-8.8,x:30.8,y:16.6},0).wait(1).to({y:16.3},0).wait(2).to({x:30.9,y:17.3},0).wait(1).to({x:31,y:17.7},0).wait(14).to({regY:8.7,rotation:-7.6,x:30.6,y:22.1},0).wait(2).to({rotation:-5.1,x:29.8,y:30.8},0).wait(1).to({rotation:-3.5,x:30.1,y:36.1},0).wait(1).to({rotation:-2.5,x:30.3,y:39.2},0).wait(1).to({x:30.4,y:39.9},0).wait(1).to({rotation:-0.8,x:30.7,y:36},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:30.9,y:33.5},0).wait(1).to({regY:8.6,rotation:0.3,x:31,y:32.5},0).wait(2).to({startPosition:0},0).wait(7));

	// girl1-34-arm-L
	this.instance_2 = new lib.girl134armL("single",21);
	this.instance_2.setTransform(12.7,38,0.965,0.965,-5.9,0,0,37.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({rotation:-4.5,x:15,y:39.9,startPosition:26},0).wait(1).to({regX:37.6,regY:2,scaleX:0.96,scaleY:0.97,rotation:0,skewX:24.1,skewY:26.2,x:22,y:44.4},0).wait(1).to({regY:2.1,scaleX:0.97,scaleY:0.97,rotation:-6.9,skewX:0,skewY:0,x:19.9,y:45.3,startPosition:22},0).wait(2).to({rotation:-1.6,x:21.1,y:46.1},0).wait(1).to({rotation:-1.6},0).wait(3).to({regX:37.7,x:21,y:46.3},0).wait(2).to({regX:37.6,regY:2.2,rotation:-3.5,x:20,y:45.2},0).wait(2).to({regX:37.7,regY:2.1,rotation:-6.5,x:19.3,y:41.5},0).wait(1).to({regX:37.8,rotation:-9.8,x:16.9,y:39},0).wait(1).to({regX:37.7,regY:2,rotation:-11.1,x:16.3,y:37.3},0).wait(1).to({regY:2.1,rotation:-12.9,x:16.2,y:36.5},0).wait(2).to({regY:2,rotation:-11.8,x:16.3,y:37.2},0).wait(15).to({regX:37.8,regY:2.2,scaleX:0.96,scaleY:0.96,rotation:-10.3,x:15.9,y:39.3},0).wait(2).to({regX:37.7,regY:2.1,scaleX:0.97,scaleY:0.97,rotation:-5.5,x:17.6,y:41.8},0).wait(1).to({regX:37.6,regY:2,rotation:-3.4,x:17.9,y:43.8},0).wait(1).to({regX:37.7,regY:2.1,rotation:-2.9,x:18,y:44.6},0).wait(6).to({regY:2.2,rotation:-2.2,x:18.2,y:46.8},0).wait(2).to({regX:37.8,regY:2.1,rotation:-3,x:17.3,y:46.4},0).wait(1).to({regX:37.7,rotation:-4.9,x:17.2,y:45.8},0).wait(1).to({regX:37.8,regY:2.2,scaleX:0.96,scaleY:0.96,rotation:-1.5,x:19.8,y:40.3,startPosition:23},0).wait(1).to({regX:37.9,regY:2.1,rotation:0.8,y:34.5},0).wait(1).to({regX:37.8,rotation:3.5,x:19.5,y:33.1},0).wait(2).to({rotation:4.9,x:19.4,y:32.4},0).wait(2).to({rotation:4.2,x:19.6,y:33},0).wait(12).to({rotation:3.1,x:20.4,y:36.5},0).wait(1).to({regX:37.9,x:20.7,y:38.5},0).wait(2).to({regX:37.8,rotation:4.3,x:19.8,y:41.8},0).wait(2).to({regX:38.1,regY:2.4,scaleX:1,scaleY:0.99,rotation:0,skewX:6.6,skewY:10.9,x:18.7,y:40.2},0).wait(1).to({regX:37.8,regY:1.9,scaleX:0.98,scaleY:0.96,skewX:11.2,skewY:19.7,x:16.1,y:36.7,startPosition:24},0).wait(1).to({regX:37.7,regY:2,scaleX:0.96,scaleY:0.96,rotation:6.6,skewX:0,skewY:0,x:15.5,y:32.8,startPosition:27},0).wait(1).to({regX:37.6,scaleX:0.96,scaleY:0.99,rotation:0,skewX:13.7,skewY:14.6,x:14.5,y:25.2,startPosition:25},0).wait(2).to({regX:37.7,scaleY:0.96,rotation:14.6,skewX:0,skewY:0,x:14.3,y:21.9},0).wait(1).to({x:14.2,y:21.5},0).wait(2).to({x:14.4,y:22.6},0).wait(1).to({y:22.9},0).wait(14).to({rotation:18.6,x:13.9,y:27},0).wait(2).to({rotation:18.4,x:13,y:34.9,startPosition:28},0).wait(1).to({rotation:19.9,x:13.3,y:39.7,startPosition:29},0).wait(1).to({regX:37.6,regY:1.9,scaleX:0.96,scaleY:0.96,rotation:-1.2,y:42.5,startPosition:30},0).wait(1).to({rotation:-1.2,x:13.5,y:42.6,startPosition:31},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-3.6,x:13,y:39.9,startPosition:1},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-5.1,x:12.7,y:38.3},0).wait(1).to({regX:37.7,regY:2.1,scaleX:0.97,scaleY:0.97,rotation:-5.8,x:12.6,y:37.6},0).wait(2).to({x:12.7,y:38},0).wait(7));

	// girl1-34-arm-R
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6978F3").s().p("AhYAAQABgKAHgKIAHgKQAHgHAEgBQAUgiANgkQBGAMAoA8IAIANIgFANIgVAqIgPAXIgeAoIAAAEIgBAFQgEAFgGAAQgwgBgvhsg");
	this.shape_4.setTransform(58.2,99.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A2E95A").s().p("AhDBCQANgwAAgyQAAgxgGguIBxgRIABACQAFAVAEAWIgBAAQAEAWABAXQACAXgBAXIAAABQABAWgCAZQgCAXgDAZIgHAsIgDANQgthBhKgOg");
	this.shape_5.setTransform(62.6,79.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAADhQgBgBAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAIACgGIAAgEIAcgoIAPgWIAVgsIAEgNIgHgOQgpg8hGgMQgMAlgUAiQgEAAgHAIIgHAJIgEgBQgEgDAAgEQgBgEACgDQAagpAOgqIACgDQAPgyAAg2QAAgvgGgtIAUgDQAGAugBAxQABA0gOAwQBLAMAtBBIACgNIAHgsQAEgXABgXQADgZgBgYIAAgBQAAgXgBgXQgCgXgDgWIAAAAQgDgWgFgVIgBgCIAUgEIAAABQAFAWADAXQAEAXABAYQACAYgBAYQABAZgCAZQgCAZgDAYIgHArQgDARgGASIAAABIgBABIAAABQgDAKgEAJQgKAWgLAWIAAABIgQAZQgPAVgRAUQgCADgEAAIgBABQgDAAgBgDg");
	this.shape_6.setTransform(60.4,87.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6978F3").s().p("AhYAAQAAgJAIgLIAHgJQAGgIAEAAQAVgjAMgjQBGAKAoA8IAIANIgEANIgVAqQgGAMgIAMIgeAoIAAAEIgCAFQgDAFgGAAQgwgBgwhsg");
	this.shape_7.setTransform(58.8,96.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A2E95A").s().p("AhEBEQAOgxgBgyQAAgxgHguIBygSIABACQAFAVADAWIAAAAIAFAtQADAXgBAXIAAABQABAWgDAZQgBAYgDAZIgGArIgCANQguhBhMgMg");
	this.shape_8.setTransform(63.1,77.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAADiQgBgCAAgCIABgGIAAgEIAcgoQAIgMAHgMIAUgrIAFgOIgIgNQgpg8hGgKQgMAjgUAjQgEABgHAHIgHAJIgDgBQgEgCgBgEQgBgEACgDQAagpAOgrIABgEQAPgxAAg2QgBgvgGgtIATgDQAHAtAAAyQABA0gOAxQBMAKAuBBIACgOIAGgrQADgXABgYQADgYgBgYIAAgBQABgXgDgYIgFgtIAAAAQgDgVgFgVIgBgDIAUgDIAAABQAFAVADAXQAEAXACAYQACAYAAAYQAAAZgCAZQgBAZgEAYIgGArQgDASgFARIAAACIgBABIAAABIgHATIgVAtIAAAAQgHANgJALQgOAWgRAUQgCADgEABIgBAAQgDAAgDgCg");
	this.shape_9.setTransform(60.9,85.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6978F3").s().p("AhYAAQAAgJAIgLIAHgJQAGgIAEAAQAUgjAMgkQBGALApA8IAJANIgFANIgUAqIgPAXIgeAoIAAAEIgBAGQgEAFgGAAQgwAAgwhtg");
	this.shape_10.setTransform(58.9,95.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A2E95A").s().p("AhEBEQAOgwgBgzQAAgxgHgtIBxgUIABADQAFAVAEAVIgBAAQAEAXACAWQACAYAAAYIAAAAQABAWgCAYIgFAyIgGAqIgCAPQguhBhMgNg");
	this.shape_11.setTransform(63.1,76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AABDiQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIAAgGIAAgEIAdgoIAPgXIAUgsIAFgNIgJgNQgpg8hGgLQgMAkgUAjQgEAAgGAIIgHAJIgEgBQgEgDAAgEQgBgDACgEQAagpANgqIABgEQAPgxgBg2QAAgwgHgsIAUgEQAHAuAAAxQABA0gOAxQBMALAuBAIACgOIAGgrIAFgvQACgYgBgYIAAgBQAAgXgCgYQgCgWgEgXIABAAQgEgVgFgVIgBgDIAUgDIAAABQAFAVAEAXQAEAXABAYQADAYAAAYQAAAagCAYIgEAxIgGArQgDASgGARIAAACIAAABIAAABIgHATIgWAtIAAAAQgGANgJAMQgOAWgRATQgCAEgEAAIgBAAQgDAAgDgCg");
	this.shape_12.setTransform(60.9,84.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A2E95A").s().p("AhEBFQAOgygBgxQAAgygHgtIBxgTIABACQAFAVAEAWIgBAAQAEAWACAXQACAXAAAXIAAABQABAWgCAZIgFAxIgGArIgCANQguhAhMgMg");
	this.shape_13.setTransform(63.2,76.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AABDiQgBgCAAgCIAAgGIAAgEIAdgoIAPgXIAUgsIAFgNIgJgNQgpg8hGgLQgMAkgUAjQgEAAgGAIIgHAJIgEgBQgEgDAAgEQgBgDACgEQAagpANgqIABgEQAPgxgBg2QAAgwgHgsIAUgEQAHAuAAAxQABA0gOAxQBMALAuBAIACgOIAGgrIAFgvQACgYgBgYIAAgBQAAgXgCgYQgCgWgEgXIABAAQgEgVgFgVIgBgDIAUgDIAAABQAFAVAEAXQAEAXABAYQADAYAAAYQAAAagCAYIgEAxIgGArQgDASgGARIAAACIAAABIAAABIgHATIgWAtIAAAAQgGANgJAMQgOAWgRATQgCAEgEAAIgBAAQgDAAgDgCg");
	this.shape_14.setTransform(61,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},100).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{x:58.9,y:95.9}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_10,p:{x:59,y:96.3}}]},2).wait(7));

	// girl1-34-torso
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6978F3").s().p("AhYAAQAAgJAIgLIAHgJQAGgIAEAAQAUgjAMgkQBGALApA8IAJANIgFANIgUAqIgPAXIgeAoIAAAEIgBAGQgEAFgGAAQgwAAgwhtg");
	this.shape_15.setTransform(59,96.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A2E95A").s().p("Ag8BxQAOgxgBg0QgBhigbhXIBlgQIAFALIAQAoIAAAAQAHAUAGAVQAFAVAEAVIgBAAQAEAXACAWQACAWAAAXIAAABQABAYgCAYIgFAxIgGArIgCAOQguhAhMgNg");
	this.shape_16.setTransform(62.4,72.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AABEOQgBgCAAgCIAAgFIAAgEIAdgoIAPgYIAUgrIAFgOIgJgNQgpg8hGgKQgMAkgUAiQgEABgGAHIgHAJIgEgBQgEgCAAgEQgBgEACgDQAagpANgsIABgEQAPgwgBg2QAAhQgShHIACgBIgFgiIAMgCQAcBXABBlQABA0gOAvQBMAMAuBBIACgOIAGgrIAFgxQACgXgBgYIAAAAQAAgYgCgXQgCgXgEgWIABAAQgEgWgFgVQgGgUgHgUIAAgBIgQgoIgFgLIATgDIADAGQAKAUAHAWQAIAUAGAWIAAAAQAFAWAEAXQAEAXABAXQADAYAAAZQAAAZgCAXIgEAyIgGAsQgDASgGARIAAACIAAABIAAAAIgHATIgWAtIAAABQgGAMgJANQgOAVgRAUQgCADgEABIgBAAQgDAAgDgDg");
	this.shape_17.setTransform(61,80.1);

	this.instance_3 = new lib.girl134torso("synched",0);
	this.instance_3.setTransform(34.9,81.9,1.037,1,0.3,0,0,38.1,52.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.037,rotation:0.3,x:34.9,y:81.9,regX:38.1,scaleY:1}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:1.6,x:36.2,y:84.3,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.036,rotation:2.8,x:38.4,y:88.7,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.036,rotation:3.6,x:39.4,y:90.4,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.036,rotation:4.4,x:40,y:91.4,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.9,scaleX:1.036,rotation:3.4,x:40.7,y:91.4,regX:38.2,scaleY:1}}]},4).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.036,rotation:2.6,x:40.4,y:89.8,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:1.6,x:40.4,y:85.7,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:0.6,x:38.8,y:82.9,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-0.4,x:39,y:80.8,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.4,x:39.8,y:79.6,regX:38.2,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.4,x:39.9,y:80.3,regX:38.2,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-0.3,x:38.6,y:82.7,regX:38.1,scaleY:0.999}}]},15).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:0.6,x:39.6,y:85.7,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:1.4,x:39.3,y:88,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:1.4,x:39.4,y:88.7,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:0.4,x:40.1,y:90.6,regX:38.1,scaleY:1}}]},6).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-0.8,x:40.4,y:89.7,regX:38.2,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-0.8,x:40.3,y:89,regX:38.2,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-0.9,x:41.7,y:84,regX:38.1,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.9,x:42.5,y:78,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.9,x:42.3,y:76.6,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.9,x:42.2,y:75.9,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.9,x:42.3,y:76.6,regX:38.1,scaleY:1}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-0.8,x:42.2,y:80.4,regX:38.1,scaleY:0.999}}]},12).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:0.1,x:41.7,y:82.7,regX:38.1,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-0.1,x:41.1,y:85.9,regX:38.1,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-1.2,x:40.7,y:83.6,regX:38.2,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-2.6,x:39.3,y:79.9,regX:38.2,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-4.1,x:39.9,y:75.3,regX:38.1,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.036,rotation:-7.7,x:42,y:68.6,regX:38.1,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.035,rotation:-8.9,x:42.7,y:64.8,regX:38.1,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.035,rotation:-8.9,x:42.6,y:64.4,regX:38.1,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.035,rotation:-8.9,x:42.8,y:65.5,regX:38.1,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.035,rotation:-8.9,x:42.8,y:65.8,regX:38.1,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.035,rotation:-7.7,x:41.5,y:70.3,regX:38.2,scaleY:0.999}}]},14).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.035,rotation:-5.2,x:38.5,y:79.4,regX:38.2,scaleY:0.999}}]},2).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.035,rotation:-3.6,x:37.6,y:84.8,regX:38.2,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.035,rotation:-2.6,x:36.9,y:88,regX:38.2,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.6,scaleX:1.035,rotation:-2.6,x:37,y:88.7,regX:38.2,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:-0.9,x:35.8,y:84.9,regX:38.2,scaleY:0.999}}]},1).to({state:[{t:this.instance_3,p:{regY:52.7,scaleX:1.036,rotation:0,x:35.1,y:82.5,regX:38.2,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.037,rotation:0.3,x:34.8,y:81.5,regX:38.1,scaleY:1}}]},1).to({state:[{t:this.instance_3,p:{regY:52.8,scaleX:1.037,rotation:0.3,x:34.9,y:81.9,regX:38.1,scaleY:1}}]},2).wait(7));

	// girl1-34-skirt
	this.instance_4 = new lib.girl134skirt("synched",0);
	this.instance_4.setTransform(34.5,111.4,1,1,0.3,0,0,38.1,22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({rotation:1.6,x:35.3,y:113.7},0).wait(1).to({rotation:2.8,x:36.7,y:118.1},0).wait(1).to({rotation:3.6,x:37.4,y:119.8},0).wait(2).to({rotation:4.4,x:37.6,y:120.8},0).wait(4).to({regY:22.2,rotation:3.4,x:38.7,y:120.6},0).wait(2).to({rotation:2.6,x:38.9,y:119.2},0).wait(2).to({regY:22.3,rotation:1.6,x:39.5,y:115.2},0).wait(1).to({rotation:0.6,x:38.4,y:112.4},0).wait(1).to({regY:22.2,rotation:-0.3,x:39.1,y:110.2},0).wait(1).to({regY:22.3,rotation:-1.3,x:40.2,y:109.2},0).wait(2).to({x:40.3,y:109.9},0).wait(15).to({regY:22.2,scaleX:1,scaleY:1,rotation:-0.2,x:38.6,y:112.2},0).wait(2).to({regY:22.3,scaleX:1,scaleY:1,rotation:0.6,x:39.1,y:115.1},0).wait(1).to({rotation:1.4,x:38.4,y:117.5},0).wait(1).to({x:38.5,y:118.2},0).wait(6).to({regY:22.2,rotation:0.4,x:39.9,y:120},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.7,x:40.7,y:119.2},0).wait(1).to({rotation:-0.7,x:40.6,y:118.5},0).wait(1).to({rotation:-0.8,x:42,y:113.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.8,x:43.3,y:107.4},0).wait(1).to({x:43.1,y:106},0).wait(2).to({x:43,y:105.3},0).wait(2).to({x:43.1,y:106},0).wait(12).to({scaleX:1,scaleY:1,rotation:-0.7,x:42.5,y:109.8},0).wait(1).to({rotation:0.1,x:41.5,y:112.2},0).wait(2).to({rotation:0,x:41.1,y:115.4},0).wait(2).to({rotation:-1.1,y:113},0).wait(1).to({regY:22.3,rotation:-2.5,x:40.5,y:109.4},0).wait(1).to({rotation:-4,x:41.9,y:104.7},0).wait(1).to({regX:38,rotation:-7.6,x:45.7,y:97.9},0).wait(2).to({rotation:-8.8,x:47.1,y:93.7},0).wait(1).to({x:47,y:93.4},0).wait(2).to({x:47.2,y:94.4},0).wait(1).to({y:94.8},0).wait(14).to({regY:22.5,rotation:-7.6,x:45.1,y:99.6},0).wait(2).to({regY:22.4,rotation:-5.1,x:40.9,y:108.8},0).wait(1).to({regX:38.1,rotation:-3.5,x:39.3,y:114.3},0).wait(1).to({regY:22.3,rotation:-2.5,x:38,y:117.5},0).wait(1).to({x:38.1,y:118.2},0).wait(1).to({rotation:-0.8,x:36.2,y:114.4},0).wait(1).to({regY:22.4,scaleX:1,scaleY:1,rotation:0,x:35,y:112.1},0).wait(1).to({regY:22.3,rotation:0.3,x:34.4,y:111},0).wait(2).to({x:34.5,y:111.4},0).wait(7));

	// girl1-34-leg-L
	this.instance_5 = new lib.girl134legL("single",0);
	this.instance_5.setTransform(9.8,151.9,1,1,1.3,0,0,23.1,33.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({startPosition:0},0).wait(1).to({regY:33.2,rotation:3.8,x:10.2,y:157.6},0).wait(1).to({rotation:4.6,x:10.3,y:158.9},0).wait(2).to({rotation:5.4,x:10,y:159.5},0).wait(4).to({regX:23.2,rotation:4.4,x:13,y:160.1},0).wait(2).to({rotation:3.6,x:13.7,y:159},0).wait(2).to({regX:23.1,rotation:2.6,x:13.8,y:155.7},0).wait(1).to({regX:23.2,rotation:1.6,x:13.5,y:152.9},0).wait(1).to({rotation:0.5,x:15.6,y:151.1},0).wait(1).to({regY:33.1,rotation:-0.3,x:16.8,y:150.4},0).wait(2).to({x:16.9,y:151.1},0).wait(15).to({scaleX:1,scaleY:1,rotation:0.6,x:14.5,y:153.1},0).wait(2).to({regY:33.2,scaleX:1,scaleY:1,rotation:1.6,x:14.2,y:155.7},0).wait(1).to({rotation:2.4,x:12.9,y:157.7},0).wait(1).to({x:13,y:158.4},0).wait(6).to({rotation:1.4,x:15.1,y:160.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0.1,x:16.8,y:160.4},0).wait(1).to({rotation:0.1},0).wait(1).to({rotation:0,x:24.4,y:150.6},0).wait(1).to({regY:33.1,rotation:-0.8,x:26.7,y:147.9},0).wait(1).to({x:26.5,y:146.5},0).wait(2).to({x:26.4,y:145.8},0).wait(2).to({x:26.5,y:146.5},0).wait(12).to({regY:33.2,rotation:0.1,x:25.3,y:150.1},0).wait(1).to({regY:33.1,rotation:1.1,x:23.6,y:152.1},0).wait(2).to({rotation:0.8,x:23.2,y:154.3},0).wait(2).to({rotation:-0.1,x:24,y:152.1},0).wait(1).to({regY:33.2,rotation:-3,x:34.5,y:144.4},0).wait(1).to({rotation:-3,x:33.5,y:144.9},0).wait(1).to({rotation:-6.6,y:140},0).wait(2).to({rotation:-7.8,x:35.8,y:136},0).wait(1).to({x:35.7,y:135.7},0).wait(2).to({x:35.9,y:136.7},0).wait(1).to({y:137.1},0).wait(14).to({rotation:-6.6,x:32.9,y:141.5},0).wait(2).to({rotation:-4,x:26.9,y:150.1},0).wait(1).to({regX:23.1,rotation:-2.5,x:24,y:154.9},0).wait(1).to({regX:23.2,scaleX:1,scaleY:1,rotation:-1.5,x:22.1,y:157.9},0).wait(1).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:15.5,y:154.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.8,x:11.4,y:152.4},0).wait(1).to({regX:23.1,regY:33.1,rotation:1.3,x:9.7,y:151.5},0).wait(2).to({x:9.8,y:151.9},0).wait(7));

	// girl1-34-leg-R
	this.instance_6 = new lib.girl134legR("single",0);
	this.instance_6.setTransform(57,157.9,1,1,0.3,0,0,23.2,29.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({startPosition:0},0).wait(1).to({rotation:2.8,x:57.1,y:165.6},0).wait(1).to({rotation:3.6,x:57.2,y:167.6},0).wait(2).to({regY:29.3,rotation:4.4,x:56.7,y:168.7},0).wait(4).to({regY:29.4,rotation:3.4,x:59.8,y:168.6},0).wait(2).to({regY:29.3,rotation:2.6,x:60.5,y:166.8},0).wait(2).to({regY:29.4,rotation:1.6,x:61,y:162.7},0).wait(1).to({rotation:0.6,x:60.6,y:159.1},0).wait(1).to({rotation:-0.3,x:62.9,y:156.4},0).wait(1).to({rotation:-1.3,x:64.2,y:154.9},0).wait(2).to({x:64.3,y:155.6},0).wait(15).to({scaleX:1,scaleY:1,rotation:-0.2,x:61.8,y:158.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:0.6,x:61.4,y:161.8},0).wait(1).to({rotation:1.4,x:60.1,y:164.5},0).wait(1).to({x:60.2,y:165.2},0).wait(6).to({rotation:0.4,x:62.3,y:166.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.7,x:64.1,y:165.4},0).wait(1).to({rotation:-0.7},0).wait(1).to({regX:23.3,rotation:-0.8,x:71.8,y:155.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.8,x:74.2,y:152},0).wait(1).to({x:74,y:150.6},0).wait(2).to({x:73.9,y:149.9},0).wait(2).to({x:74,y:150.6},0).wait(12).to({scaleX:1,scaleY:1,rotation:-0.7,x:72.7,y:155},0).wait(1).to({regX:23.2,rotation:0.1,x:70.8,y:157.9},0).wait(2).to({rotation:0,x:70.4,y:159.8},0).wait(2).to({rotation:-1.1,x:71.3,y:156.8},0).wait(1).to({regX:23.3,regY:29.3,rotation:-4,x:78.8,y:147.1},0).wait(1).to({x:77.8,y:147.6},0).wait(1).to({regY:29.4,rotation:-7.6,x:81.1,y:139.2},0).wait(2).to({rotation:-8.8,x:83.3,y:134.2},0).wait(1).to({y:133.9},0).wait(2).to({x:83.4,y:134.9},0).wait(1).to({x:83.5,y:135.3},0).wait(14).to({regX:23.2,rotation:-7.6,x:80.4,y:140.8},0).wait(2).to({rotation:-5.1,x:74.3,y:151.5},0).wait(1).to({rotation:-3.5,x:71.5,y:157.6},0).wait(1).to({regY:29.6,rotation:-2.5,x:69.5,y:161.5},0).wait(1).to({x:69.6,y:162.2},0).wait(1).to({regY:29.4,rotation:-0.8,x:62.9,y:159.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:58.7,y:158.2},0).wait(1).to({rotation:0.3,x:56.9,y:157.5},0).wait(2).to({x:57,y:157.9},0).wait(7));

	// girl1-34-arm-R
	this.instance_7 = new lib.girl134armR("single",1);
	this.instance_7.setTransform(41.9,36.1,1.084,1.084,0.3,0,0,-15.1,-27.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({rotation:1.6,x:44.3,y:38.8,startPosition:28},0).wait(1).to({rotation:2.8,x:47.4,y:43.3,startPosition:29},0).wait(1).to({rotation:3.6,x:50.1,y:43.7,startPosition:30},0).wait(2).to({regY:-27.1,scaleX:1.11,rotation:0,skewX:4.4,skewY:5.5,x:50.4,y:46.2,startPosition:22},0).wait(1).to({regY:-27,scaleX:1.08,rotation:4.4,skewX:0,skewY:0,y:46.3},0).wait(3).to({regX:-15.1,regY:-27.1,scaleX:1.08,scaleY:1.08,rotation:3.4,x:50.1,y:46},0).wait(2).to({regX:-15,regY:-27,rotation:8.2,x:49.2,y:44.5},0).wait(2).to({regY:-27.1,scaleX:1.14,scaleY:1.08,rotation:0,skewX:5.5,skewY:5.4,x:48.6,y:40.3},0).wait(1).to({scaleX:1.05,scaleY:1.08,skewX:3.9,skewY:8.3,x:46,y:37.2,startPosition:24},0).wait(1).to({regX:-15.1,scaleX:1.08,scaleY:1.08,rotation:1.9,skewX:0,skewY:0,x:45.4,y:35},0).wait(1).to({regY:-27,rotation:-1.3,x:45.3,y:33.9,startPosition:31},0).wait(2).to({regX:-15,rotation:0.1,x:45.4,y:34.5},0).wait(15).to({regX:-15.1,rotation:-0.2,x:45,y:37.1,startPosition:24},0).wait(2).to({regX:-15,rotation:0.6,x:46.8,y:40.1,startPosition:23},0).wait(1).to({regY:-27.1,rotation:1.4,x:47.2,y:42.5,startPosition:22},0).wait(1).to({x:47.3,y:43.2},0).wait(6).to({rotation:0.4,y:44.9},0).wait(2).to({scaleX:1.13,scaleY:1.17,rotation:0,skewX:-0.7,skewY:-2.9,x:46.5,y:44,startPosition:32},0).wait(1).to({regY:-27.2,scaleX:1.08,scaleY:1.08,rotation:-0.7,skewX:0,skewY:0,x:46.4,y:43.1,startPosition:33},0).wait(1).to({regX:-15.1,regY:-27,rotation:-0.8,x:47.7,y:38.3,startPosition:25},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:1,x:47.6,y:32.1},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-1.8,x:47.4,y:30.6},0).wait(2).to({rotation:-2.8,x:47.3,y:29.9},0).wait(2).to({rotation:-2.3,x:47.4,y:30.7},0).wait(12).to({regX:-15,scaleX:1.08,scaleY:1.08,rotation:0.1,x:48.3,y:34.7},0).wait(1).to({regX:-15.1,rotation:2.4,x:48.6,y:37.1},0).wait(2).to({regX:-15,regY:-27.2,rotation:0.8,x:47.9,y:40.2},0).wait(2).to({regX:-15.1,regY:-27.1,rotation:-1.1,x:46.5,y:37.7,startPosition:34},0).wait(1).to({regY:-27,scaleX:1.15,scaleY:1.12,rotation:0,skewX:3.4,skewY:2.4,x:43.5,y:31.6,startPosition:26},0).wait(1).to({scaleX:1.11,scaleY:1.16,skewX:0.5,skewY:0.9,x:42.9,y:26.9,startPosition:27},0).wait(1).to({regY:-27.1,scaleX:1.08,scaleY:1.08,skewX:-6.3,skewY:-4,x:42,y:20.1},0).wait(2).to({regY:-27.2,scaleX:1.08,scaleY:1.08,rotation:-7.6,skewX:0,skewY:0,x:41.5,y:15.9},0).wait(1).to({y:15.6},0).wait(2).to({x:41.6,y:16.6},0).wait(1).to({x:41.7,y:17},0).wait(14).to({regY:-27.1,scaleX:1.08,rotation:0,skewX:-9.6,skewY:-11.7,x:41.5,y:22.1},0).wait(2).to({regY:-27.2,scaleX:1.16,rotation:-3.8,skewX:0,skewY:0,x:40.7,y:30.8,startPosition:35},0).wait(1).to({scaleX:1.08,rotation:-2.3,x:41,y:36.3,startPosition:36},0).wait(1).to({regY:-27.1,rotation:1.9,x:41.5,y:42.1,startPosition:37},0).wait(1).to({regX:-15.2,regY:-27,rotation:0,skewX:0.3,skewY:-1,x:41.7,y:42.4,startPosition:38},0).wait(1).to({regX:-15.1,regY:-27.1,scaleX:1.08,scaleY:1.08,rotation:1,skewX:0,skewY:0,y:38.8,startPosition:1},0).wait(1).to({regX:-15.2,scaleX:1.08,scaleY:1.08,rotation:0.5,x:41.6,y:36.6},0).wait(1).to({regX:-15,regY:-27,rotation:0.3,x:41.8,y:35.7},0).wait(2).to({x:41.9,y:36.1},0).wait(7));

	// GIRL_HEAD
	this.instance_8 = new lib.GIRL_HEAD_FamTab("synched",0);
	this.instance_8.setTransform(29.1,34.2,1,1,7.1,0,0,160,219.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({regX:160.1,regY:219.3,scaleX:1,scaleY:1,rotation:8.3,x:31.6,y:36.5,startPosition:2},0).wait(1).to({regX:160,regY:219.2,rotation:9.6,x:34.7,y:40.8,startPosition:3},0).wait(1).to({regX:160.1,rotation:11.4,x:35.8,y:42.6,startPosition:4},0).wait(2).to({rotation:12.2,x:36.9,y:44.2,startPosition:6},0).wait(4).to({rotation:11.2,x:36.3,y:44.6,startPosition:10},0).wait(2).to({rotation:9.6,x:35,y:43.7,startPosition:12},0).wait(2).to({rotation:6.6,x:35.1,y:38.5,startPosition:14},0).wait(1).to({regX:160.2,rotation:3.8,x:34,y:35.2,startPosition:15},0).wait(1).to({rotation:2,y:32.4,startPosition:16},0).wait(1).to({rotation:0.2,y:30.6,startPosition:17},0).wait(2).to({rotation:0.2,x:34.2,y:32,startPosition:19},0).wait(1).to({x:34.3,y:32.3,startPosition:20},0).wait(14).to({regY:219.1,rotation:1.7,x:33.8,y:36,startPosition:34},0).wait(2).to({regY:219.2,rotation:4.8,x:34.5,y:38.7,startPosition:36},0).wait(1).to({rotation:7.1,x:34.2,y:41.1,startPosition:37},0).wait(1).to({x:34.7,y:42.4,startPosition:38},0).wait(6).to({regY:219.3,scaleX:1,scaleY:1,rotation:5.9,x:34.6,y:44,startPosition:44},0).wait(2).to({regX:160.3,rotation:3.8,x:33.3,y:42.7,startPosition:46},0).wait(1).to({x:33.4,y:41.3,startPosition:47},0).wait(1).to({regX:160.2,regY:219.2,rotation:-0.3,x:37.2,y:37,startPosition:48},0).wait(1).to({rotation:-2.8,x:37.6,y:29.8,startPosition:49},0).wait(1).to({regX:160,rotation:-3.6,x:36.7,y:27.4,startPosition:50},0).wait(2).to({x:36.5,y:26.3,startPosition:52},0).wait(2).to({x:36.7,y:27.4,startPosition:54},0).wait(12).to({regX:160.2,rotation:-1.5,x:37.6,y:31.9,startPosition:66},0).wait(1).to({rotation:0.3,x:37.3,y:35,startPosition:67},0).wait(2).to({regY:219.1,scaleX:1,scaleY:1,rotation:2.9,x:35.5,y:38.7,startPosition:69},0).wait(2).to({rotation:0.8,x:34.5,y:36,startPosition:71},0).wait(1).to({regX:160.3,regY:219.3,rotation:-1.6,x:33.6,y:32,startPosition:72},0).wait(1).to({regY:219.2,scaleX:1,scaleY:1,rotation:-5.6,x:33.2,y:26.4,startPosition:73},0).wait(1).to({regX:160.2,regY:219.3,scaleX:1,scaleY:1,rotation:-9.2,x:31.7,y:21.2,startPosition:74},0).wait(2).to({rotation:-10.4,x:30.5,y:16.7,startPosition:76},0).wait(1).to({rotation:-11.2,x:30.4,y:15.6,startPosition:77},0).wait(2).to({x:30.6,y:17.4,startPosition:79},0).wait(1).to({x:31,y:17.3,startPosition:80},0).wait(14).to({rotation:0,skewX:-10.3,skewY:-10,x:30.7,y:22.1,startPosition:94},0).wait(2).to({regX:160.1,skewX:-6.3,skewY:-6.2,x:30.3,y:34,startPosition:96},0).wait(1).to({skewX:-3.7,skewY:-3.6,x:30,y:39.7,startPosition:97},0).wait(1).to({skewX:-0.7,skewY:-0.6,x:29.7,y:43.2,startPosition:98},0).wait(1).to({regY:219.4,scaleX:1,skewX:0.4,skewY:0.5,x:29.1,y:43.7,startPosition:99},0).wait(1).to({regX:160.2,regY:219.5,scaleX:1,scaleY:1,rotation:3.8,skewX:0,skewY:0,x:29,y:38.2,startPosition:100},0).wait(1).to({scaleX:1,scaleY:1,rotation:6,y:34.7,startPosition:101},0).wait(1).to({regX:160,regY:219.2,scaleX:1,scaleY:1,rotation:7.1,x:28.9,y:33.2,startPosition:102},0).wait(2).to({x:29.1,y:34.2,startPosition:104},0).wait(7));

	// girl_34_collar_behind
	this.instance_9 = new lib.girl_34_collar_behind("synched",0);
	this.instance_9.setTransform(31.7,27.6,1,1,0,0,0,20.8,6.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({rotation:1.3,x:34.3,y:30},0).wait(1).to({regX:20.7,regY:6.3,rotation:2.6,x:37.5,y:34.3},0).wait(1).to({regY:6.2,rotation:3.3,x:39.4,y:35.9},0).wait(2).to({rotation:4.1,x:40.7,y:36.9},0).wait(4).to({regY:6.3,rotation:3.1,x:40.4},0).wait(2).to({rotation:2.3,x:39.3,y:35.5},0).wait(2).to({rotation:1.3,x:38.4,y:31.4},0).wait(1).to({rotation:0.3,x:35.8,y:28.6},0).wait(1).to({regY:6.2,rotation:-0.5,x:35.1,y:26.5},0).wait(1).to({rotation:-1.6,x:34.8,y:25.4},0).wait(2).to({rotation:-1.6,x:34.9,y:26.1},0).wait(15).to({rotation:-0.5,x:34.7,y:28.5},0).wait(2).to({regY:6.3,rotation:0.3,x:36.5,y:31.4},0).wait(1).to({rotation:1.1,x:37.1,y:33.7},0).wait(1).to({x:37.2,y:34.4},0).wait(6).to({regY:6.4,rotation:0.1,x:37,y:36.3},0).wait(2).to({rotation:-1,x:36,y:35.7},0).wait(1).to({x:35.9,y:35},0).wait(1).to({regY:6.3,scaleX:1,scaleY:1,rotation:-1.1,x:37.3,y:29.9},0).wait(1).to({regY:6.4,scaleX:1,scaleY:1,rotation:-2.1,x:37,y:24},0).wait(1).to({x:36.8,y:22.6},0).wait(2).to({x:36.7,y:21.9},0).wait(2).to({x:36.8,y:22.6},0).wait(12).to({regY:6.3,scaleX:1,scaleY:1,rotation:-1,x:37.9,y:26.2},0).wait(1).to({rotation:0,x:38.3,y:28.5},0).wait(2).to({regY:6.4,rotation:-0.3,x:37.5,y:31.8},0).wait(2).to({regX:20.8,regY:6.3,rotation:-1.3,x:36.1,y:29.4},0).wait(1).to({regX:20.7,regY:6.4,rotation:-2.8,x:33.2,y:26.1},0).wait(1).to({rotation:-4.3,x:32.4,y:21.6},0).wait(1).to({rotation:-7.9,x:31.2,y:15.6},0).wait(2).to({regX:20.6,rotation:-9.1,x:30.6,y:11.7},0).wait(1).to({x:30.5,y:11.4},0).wait(2).to({x:30.7,y:12.4},0).wait(1).to({y:12.8},0).wait(14).to({rotation:-7.9,x:30.4,y:17.2},0).wait(2).to({rotation:-5.3,x:29.9,y:25.8},0).wait(1).to({rotation:-3.8,x:30.4,y:31.2},0).wait(1).to({regX:20.5,rotation:-2.8,x:30.6,y:34.2},0).wait(1).to({x:30.7,y:34.9},0).wait(1).to({regX:20.6,rotation:-1.1,x:31.3,y:31.1},0).wait(1).to({regX:20.5,scaleX:1,scaleY:1,rotation:-0.1,x:31.5,y:28.6},0).wait(1).to({regX:20.8,rotation:0,x:31.7,y:27.6},0).wait(2).to({startPosition:0},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.1,-202.9,284.5,353.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;