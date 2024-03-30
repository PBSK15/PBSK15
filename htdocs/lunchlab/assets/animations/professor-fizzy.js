(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.professorfizzy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle_loop:299,FoolingFreddy:309,FoolingFreddy_stop:420,OhHelloThere:429,OhHelloThere_stop:569,ToYourCookingStations:579,ToYourCookingStations_stop:685});

	// anim
	this.instance = new lib.FIZ_FRONT_COMPIDLE("synched",0);
	this.instance.setTransform(91.4,26.7,1.026,1.026,1.3);

	this.instance_1 = new lib.FIZ_FRONT_COMPFoolingFred("synched",0);
	this.instance_1.setTransform(91.4,26.7,1.026,1.026,1.3);

	this.instance_2 = new lib.FIZ_FRONT_COMPHelloThere("synched",0);
	this.instance_2.setTransform(91.4,26.7,1.026,1.026,1.3);

	this.instance_3 = new lib.FIZ_FRONT_COMPCookingStations("synched",0);
	this.instance_3.setTransform(91.4,26.7,1.026,1.026,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},309).to({state:[{t:this.instance_2}]},120).to({state:[{t:this.instance_3}]},150).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(71.8,24.6,275.6,538.3);


// symbols:
(lib.FIZ_FRONT_part_030 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AAxLYQgDgKgPhPQgQhPgFgmQgFgmgFhTIgWkHQgPixACgLQADgKgulUIgKhIIAAgGIgCgfIAAgCIAAgEIAAgCQgYjfgQgxQADgCANgCIABAAIAEgCIAIAlQAGAbAJAdQAIAcAuE0QApEuAUDBQAUDBAEA6IAGBjQACAqAKBEQAKBEAyB9QgYAIgZAGQgSgTgPgxg");
	this.shape.setTransform(65.2,81.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AhXCOIgBgeQAiALBPAAQAwAAAOgCIACAUIgCAAQggAHhAAAQg9gFgRgBgAgih5QAAgaAWAAIAKABIAAAAIABABIAAAAIABAAIAAAAQALAFAAANQgCAegWAAQgVAAAAgYg");
	this.shape_1.setTransform(39.3,83.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AgrECIgXgCQACgNALgVIAOgdIAAAAIAYAAIAxgBQASApAKAUIgQADQgKADgkAAIgrgBgACYDgQgggjgRgKIAAgHQAAgegJhPQAnAyAMAdQAMAdAEAkIAFAnIgOgWgAilDZQAAg2Agg+IAAAAIAVgmIAAANIgBBbQgCAEgEAEQgJAGgQAYQgOATgFAJgAg2B7IgpgFQgChEADgcQADgbABgYQALg/ABgFQgBgZAkhKIABgDQALADAWAAQARAAAJgDQAhBKANBVIAQBwQABAOABAmIgBAAIgfADQhEAAgjgEgAg6hkIAAAAIAGAVQAKAVAdAAQARAAANgUQAHgPAAgLQAAgUgIgKQgJgKgPAAQgxAAgBAsgAgPjaIgSABIAUgpQAMAUAJAVIgXgBg");
	this.shape_2.setTransform(40,81.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjOMeIiCgQIgfgEIAiiRIAOhpQAGiPgGg8QgJhSAXjZIAWjUQAAg2AgjEQALhHAFg4IAFglQABgRAGggIALhHQAGgnAMgmQARAAAFACIAFADQgKAjgJBHQgRB0AABKQgBAPADAMIAAABQgDAbBBAPQA/AOBbgFQBbgGASgMIAAAAQAPgOAKgLIAAgBIAAgDIAAAAIgCgOIAAgGIAAgFIgCggIAAgBIAAgFIAAgBQgYjfgQgyQADgBANgDIABAAIAEgBIAIAlQAGAaAJAdQAIAdAuEzQArEuAUDBQAUDBAEA6IAGBkQACApAKBFQAKBDAyB9QgYAIgZAGIgOADQgkAGgWABQgXABieAJQg8ADgzAAQhZAAhIgJgACYEFIAAABIAGAHIACAAQAHgJABgnQABgngRgzQgOgogOgTQgfgpgQgPIgLhUQgFgbgYhUIAAAAIgZg4QgZg4gOAAQgEAAgDADIAAABIAAAAIABADQgPAQgSAjQgBAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIAAACIgGALQgcA6gHArQgNBIgDA/QhHBUABBeQAAAbAHAoIAAABIAAAAIABAAIAAAAIAKgRIAAAAIASggIAng1QAMAIAsADQgIAHgLATQgMAWgCAOIAAABIgCAJQAAADACACIABABIAFACQAQAGAzAAQBDAAAUgIQAEgDACgCIACgEIAAgBIgIgWQgIgWgSgaQAbgDALgFIAvAxIAAgBQAKANAVAkg");
	this.shape_3.setTransform(41.5,83);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiJM+IhpgJIhggKQg4gGgOgJIAAAAIAAgBQAahBAShFQAPhGAEiqQAAh0ABgHIAQlGIAVjBQANh2AQhQQAkkeAPgzIARg4QABgHAHgCIAAAAQAGgDAOABQAOACAhALIAAAAIABABQgOA9gUBwIgHBbQgEAogBAgQAHgBAMAHQAqAWBgAAQBdAAAagPQAYgPAJgDQgFgQgDgrIgIhlQgCgUgXicIAAgBQACgGAMgEIAOgDIABAAIAEAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAABIAHgBQAGgCAEAAQAEAAADACIABABQAYBgAOBYQAOBcAZCIQAfCeAbD5IAjFKQAJBVAIBcQAHBbAVBLQAWBJAOAhIAAAAQAEAKAFAKIAAABIAAAAIAAAAQgkAFgUAGQg/ARi2AIQhbADg7ABIgmABQgjAAgWgCg");
	this.shape_4.setTransform(41,83.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,82,166.5);


(lib.FIZ_FRONT_part_029 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6870B0").s().p("AgaEVQgQj0gEgvQgPiYgcjBIgQh0QAsgHAQgEQBCFUAqEXQAfDOAMCDIgOADIhPANIgIABQgQgngPirg");
	this.shape.setTransform(50.8,60.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EB8BA").s().p("AgegJIACAAQAsgGAJgFIAGAaQgPAGgSAEIgYAFIgEgeg");
	this.shape_1.setTransform(42.5,8.4);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363636").s().p("AjbBzQhIhngEjhIABgCQBDA0EKAAQBpAABAgIQA1gGAigNIAAAdQAACIhCBrQhRCGiNAAQiaAAhIhlg");
	this.shape_2.setTransform(32.2,129.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AgBINIgGr+QAigCAaABQAJgCAAgqQAAgUgJgEQgMgGgxABIgBgcQAhgDAZACQAJgCAAgpQAAgTgJgEQgMgGgvABIgBgbQAbACA8gJIAEAAQAtgHAQgEQBDFUArEXQAfDOAMCDIgPACIhOAOIgJABIgEABIgFAAQhGALhOAAgAjVH+QhQgOAAgKQAAjYAylnQAcjPAfitQAGAJApAJQAzALA7gCIAAAbQg0gKgRAXQgGAKAAAWQAAASAIAEQALAEA3AAIAAAdQgqAAgfADIgEAwQAAAFADANIAWACIAzADQgBEsAGGxIAAAgIgZABQhUAAhQgPgAiwoMIABAAIgCACg");
	this.shape_3.setTransform(32,57.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0FF7A").s().p("AhBBIIAAgsICDAAIAAAsgAg/gdIAAgpIB9AAIAAApg");
	this.shape_4.setTransform(29.9,24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AAfAdIgXAAIgBgSQgBgLgBAAIAQAAIBCgDIAKgBIABAAQAugGAJgFIAGAaQgPAGgUAEIgXAFQgYADgcAAIgSAAgAhtAUIgxgMIAEgiIACgCQAZARAiAGQAhAFA5AAIgBAdIgXAAIgDAAQgkAAgrgJg");
	this.shape_5.setTransform(29.7,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(40,42,51,0.263)").s().p("AAAAAIAAABIAAAAIAAgBg");
	this.shape_6.setTransform(39.7,5.4);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjYKgQhphuAAj6QAAivAsmCQAwmcAnheQARACAxAPQApAOBSAAQAxAAAYgDIABgDIABADIAIgBQAcgFAUgRQAxBoARBpQALA9AVCQQBeHMAAC7QAACXgtBrQhPC7jGAAQiIAAhQhUg");
	this.shape_7.setTransform(32.3,78.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,2.7,64.5,151.3);


(lib.FIZ_FRONT_part_028 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAnIgIgQQgEgMAAgQQABgdAWgJQAagLAPApQAFANgEARQgFAUgPAGQgJADgGAAQgLAAgHgHg");
	this.shape.setTransform(3.4,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.4);


(lib.FIZ_FRONT_part_027 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAnIgIgQQgEgMAAgQQABgdAWgJQAbgLAOApQAGANgFARQgFAUgOAGQgKADgGAAQgLAAgHgHg");
	this.shape.setTransform(3.4,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.4);


(lib.FIZ_FRONT_part_026x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAC7C9").s().p("AhGECQANgLAPgPQAqgpAWhJQAPgyAFgcQAFgcAAgnQAAhTgqhRIgihCQAfAQAZAyQAoBOAEBmQAEBkgsBUQgoBSg0ADIgJAAg");
	this.shape.setTransform(26.6,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAC7C9").s().p("AgFAuQAEgbAAgnQAAgrgLgpIAVAGQAKAsACAyIAAAEIAAAbIgHA8IgCAKIggAIQALgkAEgXg");
	this.shape_1.setTransform(31.5,29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55A1A3").s().p("Ag9ECQANgLAPgPQAmgmAWhBIAAgBIALgCIAYgFQgIAbgNAZQgpBSg0ADIgJAAgAAkiOQgJgZgNgYIghhCQAWAMAUAfIABABIAMAWIACAEIABABQAMAYAIAaIgXgGg");
	this.shape_2.setTransform(25.7,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AAcDpIgOgPIgOgSQgQgXgIgaQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIALgTQAJgOAKgMQAIgHAIgGIgKAQQgMATgMAbIgCAEIgCADQgXA8gEBdQgDBaAMArIAMAvIAIAXQAKAbALATIAKAOIgNgKg");
	this.shape_3.setTransform(7,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9FFFF").s().p("AgMEFQgugHgihDQgnhLADhtQADhrAlhPQAkhPAzABQAOAAAPAIQAgAQAZAyQAoBOAEBmQAEBkgrBUQgrBSgyADIgJgBg");
	this.shape_4.setTransform(20.7,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D9FFFF").s().p("ABNCAIAAAAIgRACIARgCgAh7BYQgGgpABgvQACg/ANg2QBYgbB3AgIAXAHQAKAsACAxIAAAEIAAAbIgHA9IgCAJIgiAJQgsAJgqAAQg+AAg9gTg");
	this.shape_5.setTransform(20.7,29.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AAcDpIgOgPIgOgSQgQgXgIgaQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIALgTQAJgOAKgMQAIgHAIgGIgKAQQgMATgMAbIgCAEIgCADQgXA8gEBdQgDBQAJArIAAAAIACAGIABAEIAMAvIAIAXQAKAbALATIAKAOIgNgKg");
	this.shape_6.setTransform(7,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CCCC").s().p("AA5EJIABgBIAAABgAgJEDQgugIgihDQgPgdgJgjQAYAHAZAEIAJACIAEAAIACAAIBwgBIARgCIAAgBIALgCIAXgFQgIAbgNAZQgrBTgyACIgJAAgABYiNQhqgahTAUQAHgUAJgTQAkhPAxABQAQABAPAHQAYAMAUAfIABACIAMAVIACAEIABACQAMAXAIAaIgXgGg");
	this.shape_7.setTransform(20.4,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTQAggmAugSIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAg");
	this.shape_8.setTransform(18.1,29.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTQAggmAugSIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAUAoALAsIABACQACAEgBAEQALA0AAA5QAAA1gLAvIAAABQACAFgDAFIgDAEQgMArgVAlQgcAwgYAYIAAABIAAAAQgSARgPAEIgOAEIgBAAIAAAAg");
	this.shape_9.setTransform(18.1,29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTQAggmAugSIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAgAg+i3QglBPgDBrQgDBuAnBKQAmBKAyABQAzgCArhTQArhUgEhkQgDhmgohOQglhIgzgCIgCAAQgwAAgkBOgAhPjkQgRATgNAZQgYAvgLA2QgFAXgBAXIAAABQgIA0ACATIAFAxQAEAeAMAlQALAlAcAeIAPAPIANAKIgKgOQgLgSgKgcQgLgbgMgrQgLgrADhaQAEhdAZg8QAOgfAOgWIAKgQQgIAGgIAIg");
	this.shape_10.setTransform(18.1,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.4,58.8);


(lib.FIZ_FRONT_part_026 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAC7C9").s().p("AApEBIg0gwIgCgDIgDgFIgBgCIgDgGIgBgBIgDgGQgnhLADhtQADhrAlhPQAdhCAogKIghAxQghA0gIAcQgDAPgGAsQgGAxAAAVQAABLAUBGQAaBcA3AaIAAAAQgKAAgKgEg");
	this.shape.setTransform(13.9,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AAC7C9").s().p("AgJBmQgHgpABgxQACg9ANg2IAQgFIgHAuQgGAyAAASQAAA1AKAyIgWgHg");
	this.shape_1.setTransform(9.4,28.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#55A1A3").s().p("AgeC6QgPgdgJgjIARAFIAIABIADAPQAaBdA3AZQgygDgjhIgAgai4QAdhCAogKIghAxQgXAmgLAZIgSADQAHgUAJgTg");
	this.shape_2.setTransform(14.5,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 8
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6870B0").s().p("AAcDpIgOgPIgDgDIgDgEIgGgHIgEgIQgLgQgHgRIgBgCIgCgGIgBgEQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIABgCIAFgJIAGgJIALgQIABgBIAFgGIABgCQAIgHAIgGIgKAQQgJANgIAQIgLAYQgXA8gEBdQgDBaAMArQAKArAKAbIAAABIAIASIALAYIACADIAKAOIgNgKg");
	this.shape_3.setTransform(7,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9FFFF").s().p("AgDEGIgDAAIABAAQgLgBgKgDIg1gwIgCgEIgDgEIgBgCIgEgGIAAgBIgDgGQgnhLADhtQADhrAlhPQAehCApgKQAIgCAIAAQAxABAlBJQAoBOAEBmQAEBkgrBUQgrBSgyADg");
	this.shape_4.setTransform(20.7,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6870B0").s().p("AAcDpIgOgPQgKgKgGgMQgPgVgHgYQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIAIgNQAKgSAMgOQAIgHAIgGIgKAQQgJANgIAQIgLAYQgXA8gEBdQgDBQAJArIAAAAIACAGIABAEQAKArAKAbIAAABIADAGIABADQAIAVAJAPIAKAOIgNgKg");
	this.shape_5.setTransform(7,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AhjCUIgYgHQgGgpABgwQACg+ANg2IASgFQBagUB6AlQAKAsACAwIAAAJIAAAIIAAAEQAAAqgJAnQg+ATg6AAQgyAAgxgNgABJigIADAFIAIAPIABABIACAFIgOgag");
	this.shape_6.setTransform(20.7,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CCCC").s().p("AA5EJIABgBIAAABgAgCEDQgygDgmhIQgPgdgJgjIASAFIAHACIADAAIBpAJIAFAAIAEAAIAGAAIADgBIAEAAIAEAAIAGgBIAGgBIADAAIADgBIAEAAIADgBIAFgBIADAAIAHgCIAEAAIAEgBIAFgBIAHgCIAEgBIAGgBQgJAbgNAZQgrBTgyACIgCAAgAhUiWIgRADQAHgUAJgTQAehCApgKQAIgCAGAAQArABAhA0IAOAZIABACQAMAXAIAaQhvgehUAPg");
	this.shape_7.setTransform(20.5,29.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTIAQgRIAIgHIAGgFIAqgZIAGgCIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAg");
	this.shape_8.setTransform(18.1,29.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTIAQgRIAIgHQAYgUAegMIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAUAoALAsIABACQACAEgBAEQALA0AAA5QAAA1gLAvIAAABQACAFgDAFIgDAEQgMArgVAlQgcAwgYAYIAAABIAAAAQgSARgPAEIgOAEIgBAAIAAAAg");
	this.shape_9.setTransform(18.1,29.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTQAggmAugSIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAgAg+i3QglBPgDBrQgDBuAnBKQAmBKAyABQAzgCArhTQArhUgEhkQgDhmgohOQglhIgzgCIgCAAQgwAAgkBOgAhPjkQgRATgNAZQgYAvgLA2QgFAXgBAXIAAABQgIA0ACATIAFAxQAEAeAMAlQALAlAcAeIAPAPIANAKIgKgOQgLgSgKgcQgLgbgMgrQgLgrADhaQAEhdAZg8QAOgfAOgWIAKgQQgIAGgIAIg");
	this.shape_10.setTransform(18.1,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.4,58.8);


(lib.FIZ_FRONT_part_024 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhWgbICtAJIgbAsIiSACg");
	this.shape.setTransform(9.9,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhuAwIgCgDIAAhNQAFgKAGgEIDWARQAAACgNAeQgOAfgEAGIgGAIg");
	this.shape_1.setTransform(10.3,3.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,22.7,9.6);


(lib.FIZ_FRONT_part_023 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AAfEjIgBgJQgBgOAVgpQAVgpARgQIAAgBIABABIAAAAIAAABQgEASgHArQgJAngVAXIgOAAIgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBgAh5DDQglgXgOgmQgFgOgHgyIAAgBIAAAAIABgBIAJgBQACAAAXAyQAaA1AMAOIAAABQgFAIgFACgAC0ChQgDgBAAgIQAAgJAQgoQAQgrAKgJIAAgBIABAAIAAABQADAEAAANQAAARgLAiQgMAogNACIgHAAgAhhghIAAgBIAAAAIABgBIAIAAIAAABIABAAQAGANAMAfQAMAdAOAQIABAAIAAABQgDAIgQAAQgRAAgThhgABIA7QgOgFAAgKQAAgEARghQAQgeAAgUIAAAAIABgBIAHAAIABABIAAAAIAKAiQAAAJgMAYQgOAcgLAHgAkAAaQgQgLgLgvIgJgyIADgRIAAgBIABAAIADAAIABAAIAAABIAhB4IAAAAIgEAFIAAAAIgBAAgACOhyIgHgBIABAAQgDAAAAgJQAAgOAOgYIAAAAQAOgZAMgEIAAAAIABAAIAAABIAAAAQgJAQAAAJQAAAagWAZgAhHiBQgLgIAAgqQAAgIAGgdQADgZAJgCIABAAIAAABQAIAQAAANQAAANgGBAIAAAAQgDAEgGADgAkIixQgNgeAAgHIADgYIAAgBIAAgBIABAAIAEAAIAAAAIABAAIApBZIABABIAAAAIgCAFIABAAIABACIgBABIgJAAIAAAAQgNAAgPgjgAEPjGIgFgDIgBAAIAAgBIAShaIAAgBIABAAIAEAAIABAAIAAABIAEAWQAAASgJAvIAAABIgMAGIgBAAg");
	this.shape.setTransform(40.3,59.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AhbF1Qg6g1g5hcQg6hdgYhYQgYhWgDgRIgMhNIgMhLQgKhLAeiMQANAmAYCIQAVB2AMAvIAbBkQAOA3ATAoQATApB0CJQA5BGA+A7IAEAFIgRABIgGAAQhRAAg4gzgAB+GMQB8igArmPQAOiEgDgIQgIgUAAg0QASglACgGQAbBrAAA4QAADSg5DHQhADgheAfg");
	this.shape_1.setTransform(37.7,56.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AhlGaQg5g8hni3QgmhEgYiKQgThwAAhIQAAgKAYiOQAKBOAfA6QAeA4AdABQAJAAAShRIAnivIABgKIApCOQATBCASA1QAggQAzhnQA0hnAKhDQAnCDAfB4QASA8AYAVQAUgGAshOQAnhCAag+IADgKQAbBrAAA5QAACMgZCFQgeCbg9CFQgZA3gqAeQguAhg+gBQhXABhChDg");
	this.shape_2.setTransform(37.7,51.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Aj9D7Qg4hvghiCQghh+AAhtQABgpAUhNQAUhHAKgOIADABQAYAZAVBIQAVBIAcAaQAWhfAOg2QAahjASgPQALAUAiBqQAkBtAFALQAKgQAxhkIBFiUQAkATAkB9QAJAeAjCRQAjgnAkhLQAVgqAjhkQAgAcAPBFQASA8ABCLQAABVgHAxQgLBOglCBQg5DHg4BBQg0A/hngBQisAAiGkGg");
	this.shape_3.setTransform(37.6,51.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,102.8);


(lib.FIZ_FRONT_part_022 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AEmAsQgFgbhlgPQhmgOhYAAQhaAAhiAPQhWAPgNALIgFACIAAg+IAFgCQAEAKAMAAQANAAAmgJQA+gLBnAAQBkgBBhAJQBhAJA1AXIAFAAIAAAvIgBAAg");
	this.shape.setTransform(36.6,6.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AEbA3Ig+gNQg0gMghgDIhhgEIg/gCQhcAAhRANIhKANQgNAAgFgIIgFACIAAg+IAFgCQAZggDkAAQA6AABtAMQCEANAgASIAABCIgBAAQgBACgFAAIgFgBg");
	this.shape_1.setTransform(36.6,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,0,59.2,11.3);


(lib.FIZ_FRONT_part_021 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhMBLQgQgBgVgsQBjhUA2gRQA5gQARBHQifBLgIAIQgHAIgNAAIgDAAg");
	this.shape.setTransform(13.2,9.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhqBSQgbgTAAggQAAgXBGgvQBMg3BAAAQARAAAVAcQATAbAAAMQAAAWgXAIQgbAJgJAEQhSAmghAcQgQANgTAAQgNAAgSgNg");
	this.shape_1.setTransform(13.4,9.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,26.9,19.2);


(lib.FIZ_FRONT_part_020 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhwgVIAFgMQADgFAAgGQAAgGAHgHIALgKIgCgCQAAgCAGAAQAgAAArAQQA+AXA7AxIgRAkQgLATgNAAQiMhJgtgUg");
	this.shape.setTransform(13.7,9.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAaBHQgigYhMgdQgygSAAgUQAAgZAZgYQAVgVAJAAQAkAAAeAMQAQAHBMAnQAkASANAOQAHAJAAANQAAAdgVAXQgPARgVAAQgXAAgdgUg");
	this.shape_1.setTransform(13.6,9.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,18.3);


(lib.FIZ_FRONT_part_019 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABlD3QgPgBgjgHQhDgPggggQghghgTgaQgTgbAFgOIABgBIAAAAIAGAAQACgBAbAlQAaAkAUAQQATAQAcAIQAdAIARgBIAKgBIgSg/QgOgvgJhCQgKhAAAhUQAAhUAXgvIAAAAIABAAIADAAIABAAIAAAAIAAABIgGBKQAABAASB9QAKBGAOA2QAOA0ARAwIAAAAIAAADIgCACIgHAAIgFAAg");
	this.shape.setTransform(11.6,24.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C09B79").s().p("AhYASQgMgUgHgaIgFgVQAAgKAEgLQADgLAGgGIAKARIAMAQIAAACQAHAdAZAPIALAGIAHAIQAMAOAJAAIAIgBQAvAdAzAAIAJAAQAEAEAAAEQAAANgTAJQgWAKgrAAQhNAAgohGg");
	this.shape_1.setTransform(11.2,42.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,51.8);


(lib.FIZ_FRONT_part_018 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAWBUIgCAAQgyguAEgnQADguAcgEQgOgKgOgCQgMgCgEAGIgCACIgBgBQgHgCAAgIIAAgBQAEgQAWACQAbADAZAYQAVATAAAJIgGAFQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgBgBIgSgOIgMAFQgQAHgBAZQgCAYAMAZIATAgIABACIgCABIgBAAIAAAAg");
	this.shape.setTransform(12.5,24.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AgsAhQgLghAAgZQAAglASgNQAPgMAWAKQAWAKAQAXQASAZAAAaIgKAmQgQAmgeAAQgcAAgQgyg");
	this.shape_1.setTransform(12.9,25.4);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhpCIQgLgWgRhCIgFg8QgFg6AAgLQAIhgAUABQAdADA6BpQAlBFApAjQAHACADAAIAFAAIAFgBQASAZA4BoIgNgSQgYgfgUgJQgUgIgeAjQgeAjgqAGIgLABQglAAgWgpg");
	this.shape_2.setTransform(17,20.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiPBBQgJgugDgzIgBgXQgBgRABgLQgBgfAHgeQANg+AlAEQA4AEA3CGQANAdAmBJQAHACADgBIAFAAIAFgBQASAaA3BoIADAJIgEAAQgGgDgNAIIAAAFQgEgDgagcQgbgcgBAGQgBAGgZAfQgZAghGAAIAAAAQhIAAgbiKg");
	this.shape_3.setTransform(15.8,20.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AgBgCIABAAIACAFQgBgDgCgCg");
	this.shape_4.setTransform(31.5,38.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.8,40.7);


(lib.FIZ_FRONT_part_016 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ABcEfIgBAAQgqgkgBgRQgBgJACgEQACgEAFAAIABABIAAAAIAkBEIAAABIgBAAgAgSDoQgRgbAAgFQAFgOAGABIAAABIAAAAQASAiAbAlIAAABQAAABAAAAQAAAAgBABQAAAAAAABQgBAAAAABIgGAAQgNAAgSgggAAgCNIgHgCIgDgBIAAAAIgLgHQgIgGgKgUQgNgXAAgQQAAgJAIgEIABgBIABABQAFAIALAfQAMAaAPAWIAAABIAAAAgAg/BuQgKgFgRgfQgPgdAAgJQgBgKAJgCIABAAIAAAAQAPAdATA4IAAABIAAAAIgBAAgABcBjQgOgEgIgWQgFgPAAgIQAAgFAFgDIAEgBIAAABIABAAIASA4IAAAAIgBABgAA6gkIAAAAIgOggQgCgGAAgTQABgUAJgGIABgBIAAABQAGADgBAXQABAHAFAtQAAADgFACIgBAAgAgahVIAAAAQgLgYAAgfQAAgbAMgEIABAAQADADADAIIAABIQgCADgFAAgABnjFIgDgCQgOgQAAgcQAAgiAMgJIABgBIABAAQAGADAAAEIgDAnQgDAYAEATIAAAAIAAABIgBAAg");
	this.shape.setTransform(19.3,51.2);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("ABdG1Qg0gZgegRQARAIANgBIABAAIgagQQghgUgpg0QgmgvgagrIgbgvIADgEIABgBIAcAOQAaAMAEAAQAGAAAEgBIAEgCIABgLQgdgrgWg0IgYhGIAAgBIAAAAQgNgrAAgjIABhDIAHgJQAcA7AQAaIABABIABACIAAABIABACIACACQATAfASAAQAKAAADgEQgGgngFg5QgFg3AAgUQAAgNAFggIAPhRIAAAAIADgDQAMAfAZAdQAUAbAHAAQAGAAADgCIACgEQADiIAIgZQAThLAJAHIADAHIAXAaQgCAHgJAtQgJAsgMBTQgMBTgSgEQgRgEgUgTIgRgTIgBAIIgFBAQAAAZAIAwQAHAxAAAUQAAAcgZAAQgOAAgbgYIgmgkIBWDCQAaA6AAAQQAAAogxgQIADADIBpBdQAoAmAAANIABANQAAAEAxAeIALAHQAHAGgCAAQgGAAg9gdg");
	this.shape_1.setTransform(20.4,53);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AAJG1QgzgZgegRQARAIANgBIABAAIgagQQgjgUgpg0QglgvgagrIgcgvIgGgKIABABIAJAEIAdAOQAaAMAEAAQAGAAADgBIAEgCIABgLQgdgrgWg0IgMgiIgDgHIgHgWIgCgHIAAgBIAAAAQgMgrAAgjIABhbIAGANIABACQAcA7APAaIABABIABACIABABIAAACIACACQAUAfASAAQAJAAAEgEQgGgngFg5QgGg3AAgUQAAgNAGggIAOhRIAAAAIACgHIABAEQANAfAYAdQAXAbAGAAQAHAAACgCIACgEQAEiIAIgZQAThLAIAHIAEAHIAVAaQAgA3AsAgQAQALAVAHIAZAHQAYAFAdABIAFAAIAGAAIATgCQAMgBACgCQgFATgRAVQgWAcgWAtQgZAzg+B6QgxByAABxQAAAKAOB9IAOB9IgBAFQAIAGgDAAQgFAAg9gdg");
	this.shape_2.setTransform(28.9,53);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAcHUQgygZgegRQgQgHgTgQQgkgcgug3Qhih2gBhEIACgNIACgGIAcAeQAbAbARAHQgkg6gNhKQgLg4AAhaQAAgpAEgiQAFgmAJgOIACABQAHANAeBNQAaBEAQAWQgVhYAVhtQARhaAXgcIAXA6IAHASQAGAIAGANIAAAAIAKAMIAAgNQgKgmAVhSQAJgrAzhFQAEAGAEAUQAMAbAqAyQAqAxAqATQAqASAoAHQAYAEAHAGIgEAEQgFATgRAUQgWAcgXAuQgYAzg+B5QgyBzABBwQAAAKAOB9IAOB+IgBAFQAHAFgCAAQgGAAg9gdgAjSA6IgCgHIAAgCIACAJg");
	this.shape_3.setTransform(26.9,49.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,53.8,99.5);


(lib.FIZ_FRONT_part_015 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AgiEgQAEgIAVgYQARgXACAAQAGAAAAABIABADQABAMgUAVQgUASgHABgAgPCZQgBgCAAgFQACgOADgNQAIgcALgHQAIAOgMAbQgFAQgKAOIgEgCgAgjgEQAAgXALgZQANghATAQQgEAMgiBCQgFgFAAgIgABAgkQABgKAHgTQAJgXAKAAQAGAAAAACIAAACQAAAIgMAUQgKARgHAHgAgZigIgCgEIATggQAMgWAAgIIAGADIACABIABAFQAAAKgNAVQgMAXgKAEgAhgjwQANgpAOgHQAJAQgNASQgFAHgQANg");
	this.shape.setTransform(15,50.1);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AhhGQQADgQACgdIACgiQAAgHAggbQAnggATgjIAAgDQgogHgEgLQACgSAAgRQAAgFgEgFQgFgGAAgFQAAgGAkhIQAphSASgxIAAgFQgGATgbAJQgPAHgLAAQgcAAgDgiIACiLQgIADgKAAQgVAAgJgIQgJgHAAgTQAAgEAFgYQAFgYgBgHQgGgiAAgKQANgwABgHQAGAIAJAnQAKAnAAAQQAAAFgEAPQgEAQAAAFQAAAJABABQABACAHAAQAMAAAcgbQAngoAXhBIAEgMIABAZQAABSgdBYQgPArgMAkQAAAGABABIACABQAEAEAHAAQARgEATgPQAngfAQg0IAEAwQACA+gHAgQgGAggOAsQgNAtgkBHQgYAwgEADIACAFQACACAoglQAngmAGABQgOA1gWAzQgpBjgoAnQgYAVgsAWg");
	this.shape_1.setTransform(20.6,46);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AgqGQQgCgRADhBIADhFQAAhWglihQgkifgthpQAaALAvgnQA1gtABg/QAFAIAKAnQAKAngBAQQAAAFgDAPQgEAQAAAFQAAAJABABQABACAHAAQAKAAAcgbQAogoAYhBIADgMIABAZQAABSgdBYQgOArgOAkQAAAGAAABIACABQAHAEAHAAQARgEATgPQAmgfARg0IADAwQAABAgJAeQgRA0gFAeQgGAngaApQgUAigFAAQgIAAgIAQQgIANgBAJQAMAMADAAQALAAAZgYIAzgxIgQAwQgLAmgKAVQgpBjgqAnQgZAVgpAWg");
	this.shape_2.setTransform(15.1,46);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1G3IgCgGQABgGAEgKQAsgWAWgVQAqgmAphkQAKgUAMgnIAPgwIgyAyQgZAXgLAAQgEAAgMgLQABgKAIgNQAIgPAJAAQAEAAAVgiQAZgqAGgnQAGggARgxQAJgeAAhBIgEgvQgQA0gnAeQgTAPgRAEQgHABgGgEIgCgBQgBgCAAgFQAOglAPgrQAdhXAAhTIgBgZIgEANQgXBBgpAnQgaAbgLAAQgIAAAAgCQgBgBAAgJQAAgFADgPQAEgQAAgEQAAgRgKgnQgJgmgFgJQgCA9g0AqQgnAfgiACQgFAAgCgCIABgCQA1gbAaggQAWgZAIgyQAJg0AEgGQAJAGARAbQARAeAFAZQAIAgABAyIACAAQAZgXAVgzQAZg/ALgRQANAJAFAWQAGAXAAAtQAAA5gMA4QgFAYgRA0QASgYAig0QALgRAOgBIADADQAEAMACAjIADAqQAABLgMAyQgPA+gsBSQAlgiAWgVIADABQAIAKAAASQAAAngsBdQgsBegOARQgNASgwAqIg2Ajg");
	this.shape_3.setTransform(16,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#825454").s().p("AgqGQQgCgRADhBIADhFQAAhWglihQgkifgthpQAjgDAngfQA0gpABg9QAGAIAJAnQAKAnAAAQQAAAFgEAPQgEAQAAAFQAAAJABABQABACAHAAQAKAAAcgbQApgoAXhBIAEgMIABAZQAABSgdBYQgPArgOAkQAAAGABABIACABQAGAEAHAAQARgEATgPQAngfAQg0IAEAwQAABAgKAeQgQA0gGAeQgGAngZApQgVAigFAAQgIAAgIAQQgIANgBAJQAMAMADAAQAMAAAZgYIAygxIgPAwQgMAmgKAVQgpBjgqAnQgYAVgqAWg");
	this.shape_4.setTransform(15.1,46);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,0,34.5,88.5);


(lib.FIZ_FRONT_part_014 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AhHJuIgag4IAFgCQACgBABgGQAAgGgCgJIgDgIIiOloQgbg7g5hsQgzhfgUggIiVjrQhSiBg0hqQAWANAhAAQALAAgFgBIABgDIgPgpIB0DTQAdAyBYCEQA2BRAPAeIAdBFICsGNQBFCtABA/QAAAjgEADQgBABgEAAIgIgBgAB3JjQgHgJgBgMQAAhcA5i6QA9jHBfjMQAPggALgTIC+k3IAig3QAig3AFgCQAMgEATgCIARgEQAKgDADAAQhZCzg6BgQhVCJgXArQhAB1gxBwIhBCgQgeBFgfBZQgnBuAAAeQAAAHADACIAJAEQgHARgSAcIgJgLg");
	this.shape.setTransform(80.1,175.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("ALYG0IAHgFQgNAnggBIIg1AIQATghBIhRgAqXIWIgXgMQgFgFgSgvQgZhDAAgJQAAgGAEgBIADAAQAtAiANAkIAeBXQgDAAgVgKgAJ8jSQgHgHgkgxQhRhrh/hIQiGhCg1glQDRA8CAB4QBIBEBIB8QghgXgKgLg");
	this.shape_1.setTransform(79.9,61);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AKWHSQAhhuAAigQAAi7g5hvQgUgngfgmQghglgMgRIgjgrQiEiCh4gvQhugriuAAQikAAiLA+QibBGhaCFQgqArgiBFQhCCHABDFQAABZAPBHQADAOASBAQAPAxAFAJQAGANAKAgQgQgFgNgIQgUgKgFgNQgag7gPg3QgBgGgYjwIAOhsQgEgOARg+QASg/AWgiQBrjdDah2QC0hiC/AAQDYAACqBcQCWBRBaCLQBeCSAdBsQAVBPAACJQAABIgVBXQgXBjgoBIIg+AJQAjhOAGgRg");
	this.shape_2.setTransform(80.6,60);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AghRfQgWgTgBABQgBAHgIgDIgZg5IAEgBQADgCAAgGQAAgGgCgIIgDgIIiOloQgbg7g5htQgzhggTggIiWjrQhSh/gzhqQAVAMAiABQAKgBgFAAIABgDQgtiNgNg7QgShNAAhMQAAlVDZi/QBbhPB0gpQBrgmBtAAQArAABqAJQBHAHBWAeQArAPBBAoQBFAsAPAaQCLCBA0ChQAhBoAACPQAABFgaBiQgPA5glB4IgEAJQAqgGANgCIAVgHIAJgDIjUF3QhpC2hBCaQgiBRgcBNQgqBogUA3QgeBUAAAgQAAALABACQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAABQABABAGAAIAGgEQAHgEAGgIIABgBIADgJQAEgHAAAEQACAogYAcQgjAqhTAAQgxAAgbgYg");
	this.shape_3.setTransform(79.5,127.5);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFSvQgRgDgJgEQgFgBgTgPIgUgPQgFAAgCACQgCACgDAAIgZg5QgKgGgQgqIg4iOQgihTgvhlIgphYQgYg8hxivQiejzgagsQg/hpgnhVQgag4gJggQgQg2gNhiQgLhPAAgRQAAlpD7jhQB0hnCYg3QCZg3CnAAQCWAACGA9QBnAwB7BmQB1BlBMCtQBDCaAAB2QAACxg9CdQgpBphyC8QiNDrhDCGQh+D+hbErIAEgJQADgIABAFQgDA0gfAbQgiAehJAAQgIAAgSgDg");
	this.shape_4.setTransform(80.6,121.5);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,1.3,161.2,240.6);


(lib.FIZ_FRONT_part_011b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#72EBEB").s().p("AiGgRQAJgXAGgOQAQgiALAAQCxA4AyAsQgGADgbAcQgdAfgJAPQgLgHi7hjg");
	this.shape.setTransform(43.7,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("ADqDNQAKgRArgIQAlgHAgABIADACIhLBMQgogpgKgGgAhJgjQAMgXAXgXQAdgdAPAAQAKAAATAQQgMAEgXAZQgZAbgOAcgAlni4QAYhDATAAQAKgBAYAMQgEAGgQAfIgRAig");
	this.shape_1.setTransform(59.7,35.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AFGETQgpgzgXgXQgigkhbhOQANghAWgVQAOgMAggSQAwAbBRBCQBgBOAqA6Qg9AGgeAUIgdAUQgZgEgOABgAm1ikIgJAAIgBACQgBACAAAGQAAAKAEAFQACASgBAGIgHAAQgHgOgNg+QgOg+AAgRQAAgKACAEIAJACIgBACIgBAFQgBAEAGAAQAGAAAAAFIAAAGIESBKQgDAEgRAfIgRAiIjSg3g");
	this.shape_2.setTransform(44,26.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AB1CiQgogSgMgYIgEgLQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIg5ADQhBAAgZgOQgPgIgYgiQg2hMgugQIgXgGQgHgCAAgKQAAgLAXgKQAVgIAQAAQAgAAAoAjIAnAjQAEAAANgTQAVgeA/g1QBBg1A7gEQA7gEACAQQACAegeAMQgfANgzAYQgzAZgLABQgMABgDAEIgCAFQAGAJARALQARAMAMAOQAMAMAUA0IAEATIACABIAGABIAAAAIADAAIAhALQAeAMAEADQALAIAKASQAIARAAAKQAAAHgPAEQgMAEgLAAQgTAAgggPgABsAZIgXgpIBCgDQBGAAAYAOQANAFAAAQQAAALgPAIQgPAJgXAAQhNgIgUgLg");
	this.shape_3.setTransform(96.8,65.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AoqHCQAPgSAhgiQBYhdBKhIQAFAaAeAUQAZARATABIkhEhgAAHg1QgogYgGgbIGxnhQAUAwA6AdQAxAZAigEInjHJQgegDgjgUg");
	this.shape_4.setTransform(54.3,-38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AhbBuQgdgTgJgjICfiwQADAOAcAYQAgAbAkALIiPCLQgYAagYAAQgPAAgOgLg");
	this.shape_5.setTransform(40,-29);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("AnJHWQgjgUAAgeQAAgKAegYQADARAYAWQAcAZAeACIghAhIgGAAQgQAAgZgPgAjbDWQgmgagFgXIAigmQAEAQAeAYQAjAbApAHIgrAqQgbgIgfgVgAFYk3QgigKgLgIQgQgMgXgdQgaggAAgNQAAgCAPgcQASgeAHgJQgEA6BKAsQA7AkAuAAQAHAAAOgDQAPgDAIgDIgDAJQgGAUgeANQgdAMgjAAQgMAAgigKg");
	this.shape_6.setTransform(71.3,-59.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("Ah9DSQgzgmAAgjQAAgfAYgvQAgg9AwAAQAoAAAjAkQAfAfAAATQAAARgSAMQgQALgOAAQgYgGgPgJQghgSgXgQQgHAAgBAEIAAAGQAOAPAtAWQAoAUAIAAQAaAAAQgMIgDAJQgDASANAVQAOAXATADQgUAYgfAMQgVAJgPAAQg4AAg2gngAAzCvQgHgLAAgGQAAgTAGgHQADgFANgDQAigLAbglQAQANAFAfQAAAUgWAVQgaAZgjAAQgGAAgIgLgAArBuQAEgDADgJQADgHAAgGQAAgJgJgSIgKgTQAAgLA2g4QArAAAAAhQgEAagKAYQgUAxgcAAQgMAAgMAHgAgXgFQgOgIgUgGQCZj+BOAbQABgKACAaQADAZgqBPQgpBPhPBGQgXgUgSgIg");
	this.shape_7.setTransform(118.4,-121.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72EBEB").s().p("AiGgRQAJgXAGgOQAQgiALAAQCtA4A2AsQgGADgbAcQgdAfgJAPQgLgHi7hjg");
	this.shape_8.setTransform(43.7,21);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0FF7A").s().p("AERDCQAwgFAQAAQAOABAWAJIhWAnQgFgWgJgWgAhXgVQANgWAXgYQAcgcASgBQAIABASAQQgMAEgVAYQgbAbgOAagAl0ipQAYhEASAAQAKAAAYAMQgEAFgQAgIgRAig");
	this.shape_9.setTransform(61.1,33.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8089DD").s().p("AGHDuQgogUgTAAQgdAAgKAIQgGAMgFAFIiRiJQANghAWgUQAOgMAggSQAwAbBRBBQBgBPAqA6IgfAEIgaADIglgVgAm1iRIgJAAIgBACQgBADAAAGQAAAKAEAFQACASgBAGIgHAAQgHgOgNg+QgOg+AAgRQAAgKACAEIAJABIgBADIgBAFQgBADAGAAQAGAAAAAFIAAAGIESBKQgDAFgRAfIgRAhIjSg3g");
	this.shape_10.setTransform(44,24.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AAVCMIgVg0QgbgEg0gRQg1gSgKgcQgLgagEgkQgEglgIgbQgIgbgcgTIgVgPQgGgEAAgOQAAgGADgDQAGgFAUAAQBAAAAbA5QAHAOAJAaQAHASAIAAQAGgBAOgIIAdgTIAQgHIAfgOQAOgEBQgKQAdgBAfAIQAfAIAcAfQAcAeiRAAIgsgEQgkgDgJgCIgFABIgCgBQgBgBAAAGQAAAFAKAIQALAJAHAaQAHAZABAIQABAJgHA+QAmAcAMAMQASAVAEAaIAAAfIgYADQgngHggg0gACeBWQgJgCgUgOQgTgOgTgIIgOgFIgCgMQgEgRgEgfQBdAbAgAVQAaARAAAWQAAANgHAFQgHAFgRAAQgXAAgGgHg");
	this.shape_11.setTransform(97.6,68.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AiGgRQAJgXAGgOQAQgiALAAQDPBMAUAYQgGADgbAcQgdAfgJAPQgLgHi7hjg");
	this.shape_12.setTransform(43.7,21);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0FF7A").s().p("ADCEBQgDgPAAgbQgBgHADgIIAFgNQgBBIAHAgQgHgUgDgOgAEtCIIAVAAQANAAAYAMQAUALAGAGQgkAKgkANIgMg0gAhihKQAMgWAXgYQAcgcASgBQAKABARAQQgKAEgYAYQgbAbgOAcgAmAjeQAYhEATAAQAKAAAXAMQgEAFgQAgIgRAig");
	this.shape_13.setTransform(62.3,39);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8089DD").s().p("AD6CvIhxhnQAAgJAjgjQAhgfANgHQAwAZBRBCQBgBOAqA6QgMACgggYQgigZgtAAQgKAAgKAGQgTAKABAYIAmA5IgKAagAm1izIgJAAIgBACQgBACAAAGQAAAKAEAFQACASgBAGIgHAAQgHgOgNg+QgOg+AAgRQAAgKACAEIAJACIgBACIgBAFQgBAEAGAAQAGAAAAAFIAAAGQD1AzAdAXQgDAEgRAfIgRAiIjSg3g");
	this.shape_14.setTransform(44,28.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AAzDYQgXgEgZgfQgdgmgGgxQgwgZgpgcQgqgdgDgjQgDg2gIgcQgNgwgjgzIAAgIQABgDAHAAQBJAAAaBCIANAsQAHAVAIgBIAZgKQAdgLAUgGIAigIQAXgFAwADQAwAEA1AXQA0AYgWANQgWAOgHACQgHACgfgBQgegBg8gOQgxgNgDAAIgJADIAAAGIACAFQAEAIADAKIACAHQAOAlgCAOQAAAFgGAeQgHAdAAAFQAAABAMAJQAQANARAZQAKANAFAcQAAAKgDAbgABjBcQg0ghAAgLIACgwQBXAmAdAbQAUASAAAWQAAAIgGAGQgFAGgIAAQgQAAgzghg");
	this.shape_15.setTransform(101.7,69.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8089DD").s().p("Ao5G8IAAhbIAXABQAeAABogaQBpgZATgDQAOAvAGAPIARAhQiSAhg/AKQguAHgmAAIgZgBgACVBTQgNgWgOgoQC1jBBZkQQAmAgBGAJQAyAGAUgGQgQBVh7C/QiGDQhkA7QgfgcgRgdg");
	this.shape_16.setTransform(58,-32.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#72EBEB").s().p("AiQAaQBXgtAmgaIBehJIBGBrQgcATgtAdQhLAvhVAkQgWgSgihMg");
	this.shape_17.setTransform(53.1,-9.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0FF7A").s().p("Am2G5QgRgogBgLIAvgUQABAIAPAaQARAiAUAZIg/AWQgEgIgPgkgAiRDDIA4g2QADAJAcArQAeAvALANIg6A0Qgog6geg0gAELlVQhSgWAAgyQAAgRAIgXQAGgSAIgOQAMA3AxAaQAnAWA2AAQAcAAAVgNQALgGAZgXIALgQQAAAzggAfQgfAdgrABQgqgCgqgLg");
	this.shape_18.setTransform(77.4,-42.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AhtEyQgpgfAAg8QAAhRAggyQAagoAbAAQAlAAAfAXQAiAYAAAdIACAKQABACgGAAQgBAAgKAXQgJAXgbAAQgHAAgkgMIgngMQgGAAgCADIAAAIQAIAMAeAMQAeAMAVAAQAOAAATgQQAWgSAEgCIgBANQgGAaARAVQAPARAQAAQAHAAADgCQgiA1gOAOQgZAaghAAQg+AAglgbgABDDNQgGgMAAgOQAAgLAagnQAdgpAFgWQAJADALARQAKARAAANQAAAcgVAlQgWAngVAAQgNAAgHgPgAAyCKQAMghgRgaIgTgdQAAgKAcg7QAKgaAXAAQAXAAAAAtQAAAwgOAjQgOAhgdAXgAgjAZQgRgFgSACQA0i2AZhHQAphsAvAHIAAABQALgIAABQQAAAggaBQQgVA/gyCBQgbgPgRgFg");
	this.shape_19.setTransform(114.8,-116.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).wait(1));

	// Layer 4
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AH0GmQgbgNgVgNQglgZgWgEQglgCgogEQgrgEgcgWQgjgcgchDIhdguQgBgBgDgJQgDgJACgPQABgPATgOIAGgEQgIAGAJgCIAXgGQiii6i8hkQichUjqgxQACASgCAGIgHAAQgGgOgOg+QgNg+AAgRQAAgKACAEIAJABQAFgEAIABQEkBIBsAnQBaAhCPBRQCWBVB4BzIBDBCQAZAaAHAAQAGAAARgLQAXgOAZgLQAZgMAxAAQAxAAAIAMQAJAMAAAYQAAAagyAXQhJAggdAaQB0gQA1AWQAnAQAAAfQAAAVgNAOQgTAVgsAAQgQAAgUgFQghgJgWgEIACAKIAOABQAqAFAcAdQAdAcAAAnQAAAMgPANQgRAPgcAAQgJAAgagMg");
	this.shape_20.setTransform(60.3,42.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Aq3KSQAaglA9g/QDQjXCPifIHyooIgEgJIgBgJQAAgPAmgtQAngwADgJQAMgpAsgiQAfgYASgFQBKh3A0g8QA/hJAtAAQAUAAALAPQAKAOAAATQAAAxgZAlQgnA0gfAsQAXADANAOQAMANAAASQAAAHgHAUQgIAVAAAJIAQAQQAQATAAATQAAAOgGAQQgMAfgeAQQhEAmAAAZQAAATgIANQgJANgYASQgKACgLAEQgWAFgLAKQhsBkkUEEIh8B3Qg3A3g7A4Qg/A6hsBsIldFaQgDADgFABg");
	this.shape_21.setTransform(68.4,-62.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AGaGnQgxhGgOgNQgFgFgbgHQgggIgRgJQhDgfAAhSQAAgtiCiCQhwhwgsgaQi5htgogRQgqgRjxg/QABASgBAGIgHAAQgGgOgOg+QgNg+AAgRQAAgKACAEIAJABQAFgEAIABQFCBOCpBIQA7AZBuBFQBvBGAsAoQAsApBAA9QA/A7AHAEQAFADAIgCQANAEASAOQAKAAA+gJQBMAAAlAcQAZARAAARQAAAfgNAJQgaARhhAAIgbgCIgbgBIgBAJQBxAbApAlQAYAXAAAgQAAApgzAAQgKAAgTgFQgGgCgSgKQgTgKAAgCQgmgbgJgFIgCANQAbADAXAlQAVAiAAAbQAAAYgHAMQgKASgdAAQgnAAgbgmg");
	this.shape_22.setTransform(59.2,45);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AGCGkIgVguQgNgbgRgOQgdgZgdgFQgegFgKgIQgUgQgSgmQgQgigBgRQAAguiFiEQhxhxgsgaQirhpgwgTQgkgOj5hAQACASgCAGIgHAAQgGgOgOg+QgNg+AAgRQAAgKACAEIAJACQAFgFAIABQDeAlEQB5QFmCgB/DBQAXAHAeAWIAZAUIBKgBQAcAAAVAGQA7ASAHADQAjAQAAAfQAAAbgLAJQgQANg6AAQgNAAgugGIg9gJIADAIQBoAwAkAfQAbAXAAAeQgBAbgPALQgMAJgZAAQgeAAgjgeQgjgkgQgLIgDALIAMAIQAYAPAMAdQAKAZAAAaQAAAQgHAQQgKAYgUAAQg2AAgbg2g");
	this.shape_23.setTransform(60.9,46.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AqMNBIAAiJQFagdDtjOQDfjDCGlnQgKgEgGgTQgEgQAAgUQAAgrASgYQAKgNAPgPQAFgKAFgcIAJg8QAEgXAbglQAVgdALgKQBfmFBPAAQApAAAABkQAAAyg1CRQAfgFANASQAQAVgDAzQgCAcAHAGIATAOQARAUgBAcQABAigZAnQgZApABAEQgBAGgHANQgJANAAAFIAEAXQAIAWgKAaQgLAfgKANIglAiQgGADgHALIgKAhQgaBRhzCqQhzCrg7A3QhMBJh0BPQiEBahxAuQgUAIhlAaQhkAZgZADQhkANgoAAIgWgBg");
	this.shape_24.setTransform(66.3,-69.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_FRONT_part_007 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363636").s().p("AgRFIQAGjdgLhQQgMhOgNgvIgDgJIgBgEQgrhzgUg8IgKgjQAGgGAOAAQAdAAA1AaQAnAUARANQAZAVAZA1QApBXAAA8IAAAGIgDgCQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBABAAAAQABgGgIAKIgHAMQgGAMgIAWQgNAkgUChQgIBFgFA3g");
	this.shape.setTransform(15.8,32.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguFIIABhPQABixgMhGIgHgpIgdhfQgoiGAAg1IABgFIADgBIACAGQAHgGANAAQAdAAA1AaQAoAUAQANQAaAVAYA1QAqBXAAA8IAAAGIAKAHIgIAPQgVAlgLBKIgSCzIgFA5g");
	this.shape_1.setTransform(16,32.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,0,26.8,65.8);


(lib.FIZ_FRONT_part_006 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363636").s().p("AgmFgQgBhRgNiBQgOiOgPgxIgMgiQgHgTgFgFQgEgFgDgBQAEgOAdgvQAegyAJgKQAhgnAagZIBUg1QAHAAADAFQgHANgGAPQgWAwgTA+IgKAjQgSAxgGAxQgKBAAAAPIgBAoQgEBhANC3IACAcg");
	this.shape.setTransform(13.7,36.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag+FlQAAhbgLhlIgSiSQgeh3ABgGQAAgBAAgBQABgBAAAAQAAAAAAAAQABAAAAAAQAAABAAABQABAAAAAAQAAAAAAABQABAAAAgBQABgCAEABQAEgOAcgvQAfgyAJgKQAggnAbgYIBUg1QAGAAADAEIAIgPQgIBdgkBcQgOAjgKA1IgDAVQgRCRAJCOQAEBDAGBBg");
	this.shape_1.setTransform(13.7,35.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,0,24.4,71.5);


(lib.FIZ_FRONT_part_004 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai7ClIgCAAQgGgEgGgIQgOgTAAgmQAAhgBehSIAAAAQBdhSBiAAIAwAKQAyAKAMAEIAAABIABABIAjB5IAAACIgBABIgBABQgNgBgQACQgMACgHgFQgGgFAAgLQgBgRgCgBIAAgBQgCgBgEAAQgLAQgRAYQgTAXghAAQgiAAgKgJQgJgGgGAAIgFAAIgEADIgBATQAAAkgRANQgNAKgLADQgKACgNgCQgMgCgMgFQgNgFgGgFIgHgEIgCAAIAAArQgGAZgeASIglATIAAAAg");
	this.shape.setTransform(19.3,5.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AjBCmQAAgEgCgDIAEgCQgGgDgFgHQgOgUAAglQAAhdBehSQBbhRBiAAIAvAJQAxAKAMAEIAjB6IAHABIgGAHIgJAGQgNAHgPgFQgYgJgWASQgXAUgdAGQgngGgNgHQgKAogVAVQgUASgdAAQgSAAgWgIQgDArgTATQgSASgiAAQgWAAgBgCg");
	this.shape_1.setTransform(19.7,6.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEgCIgBACQgDACgDABIAHgFg");
	this.shape_2.setTransform(40.3,4.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-11.1,43.8,34);


(lib.FIZ_FRONT_part_003 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgFBMQgWgogYgkIAGgIQAQgbAUgVQAJgMAKgJQAPAWAJARIASAhIgHAGQgXAZgQAcQgHAQgDAIIgBgCg");
	this.shape.setTransform(28.1,44.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AAEBXIAVgiQAQgaAPgOIAIgIIAaAwQgwAogJAwIgdg2gAhZg/QAFgMAMgRQATgdAOgLIAAAAIALgIIAFAGIAXAeIgPANQglAjgNAbIgYgig");
	this.shape_1.setTransform(28.1,45.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("ACaFJQgQhNg5hzQAHgNAKgVQAOgdAPgPIAMgLIAVAnQA8BxAOApQAEANABAGQgBAFhTBIIgBgIgAhKh3QgMgPg4g/IgDgEQhAhLgUAAQgEAAgEAEQABgMALgHIAigRQAGgDAMgUQAFgJARAGIAGADIAwArQAdAaAMAQIAxA8IgNAMQgkAjgOAaIgEgGg");
	this.shape_2.setTransform(24.5,48.1);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6066A6").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_3.setTransform(33.6,24.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAfGRQgQhNg3h0QAHgMALgWQANgcANgPIAMgMQAXgVAXgMQAVgLATgJQApgRAYAAQASAAAIgEQAYAVAZATQBPA7AnABIABABIgNAFQgoAQgeASQgUAMgPANQhQA5g0AuQAFANAAAGQAAAFhTBIIgCgIgAjFgvQgMgQg4g+IgDgEQg/hLgVAAQgEAAgEADQABgLAMgIIAhgRQAGgDAMgTQAGgKARAHIACgVQAKhJBPgtQAsgPA7ASIAEACIABACIgBAAIAAAAIgBgBQgGAAAAAKQAAA9BdCYQgUAAgUAFIAAgBIgCABQg0AMgvApIgNAMQgkAigOAaIgEgFg");
	this.shape_4.setTransform(36.8,40.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8089DD").s().p("AhMBxIAVgiQAPgaAPgOIAJgIQAQgQAYgPQAtgfAaABQADgBAgAFQAFAAACgCIAdAcIAGAEIgBAAQg1AAhMAyQgTAMgPANQguAogJAwIgdg2gAirglQAFgMAMgRQATgdAOgLIgBAAIAMgIQAhgZAYgIQAbgJArgIIANgCIAVAgIACADQhJABg+A0IgPANQglAjgNAbIgYgig");
	this.shape_5.setTransform(36.4,42.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("AhNBjQgWgngYglIAHgKQAQgZATgVQALgMAKgJQA1gvA+AAQAHAAASAGIAEAAQASAYAWAYIgEAAQhMAAg9A/IgIAIQgXAZgQAcQgJAQgDAJIgBgDg");
	this.shape_6.setTransform(35.2,41.9);

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAgGhIgBAAIAAAAQgdgxguhqQgvhpgeg0Qghg3gog0QgHgBgBgHIgBgEQhHhfhchdIAAgBIAAAAIAGgGQABgMAMgHIAhgRQAGgDAMgUQAFgJASAGIACgVQAKhIBPgtQAsgQA7ATIAEABIAAADQBCCSAxBSIADAFIAWAiQBsCUC/B2IABAAIABACIABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgGABIgBAAIABAAIgNAGQgoAPgfATQgTALgQANQhPA5g0AuQAFANAAAGQAAAFhUBIIADAOIAAABIgCACg");
	this.shape_7.setTransform(36.8,41.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,73.6,83.6);


(lib.FIZ_FRONT_part_002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("Ah0DUQgDgFgRgjQgCAGgHAAQgYAAgUgNQgfgTAAgpQAAgMAPgUQARgYAQABIAIgBIADgDIABgBQgZgWgPgQQgegdAAgRQAAggAQgSQARgUAdAAQAGAAAIAFIAHAEQAHgHAEgCIABAAQgBgFgFgHIgOgRIAAgBQgIgRAAgKQAAgSADgKQADgMAMgTIABgBIACgBIABABIABACQgBAGgFANQgEAMAAAFQAAAoAUAcQAKAOAKAHIABABIAAABQAAAEghAUIAAAAQgeAUgBATQAAAOASAZQAIANAJALIABACQAAACgRAWQgQAYAAATQAAAOAOAJQAOAJAPAAQAuAAATgdIAAABIAMgVIAAgBQAIgKAJAAIABAAQA9AXAEAAQANAAAKgLIAdglIABgBIACABIArAbQAhARAkAAQAKAAAIgCIALgDIACgBQgDACgKARQgLARgeADQgfAEgVgKIAAgBIgSgLIAAACIgEAXQgFAigWAIQgVAJgVgBIgjgDQgDAAgDADQgCACAAAEIgBABQgLAZgOAJQgNAIgaAAQgdAAgNgQg");
	this.shape.setTransform(23.1,38.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ai3EHQgEgGgTgpIgBAFQgBAGgGAAQgXAAgUgMQgdgTAAgnQAAgLAOgUQAQgWAPAAQAHAAACgCIAEgCIACgEQgagXgPgQQgdgeAAgQQAAgdAPgSQAQgSAcgBQAGABAGAEIAKAEQAHgHAEgCQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAgGgHgIIgOgSQgIgQAAgKQAAgSADgJQADgMAMgUIAXgIIAPgEIA1ANQAJABAAgKQAAgaAGgbIABAAQAIgWAZgLQASgJAPAAQAqAAAMATQAMATAKAAQAHAAALgSQATgTAtAAQAhAAAOAcQAIAPAAARQAAAEgEASQgEARAAAGQAAAJAEgGQAcgFApAXQAuAcAAApQAAAHgCAEIgGALQgIAPgKAIIgHAFQAAACAXAUQAWAQAAANQAAAWgdAOQgYAMgYAAIgigCQgLgBgDADIgJBEQgZAmgwAAQgNAAgUgKQgSgLgCgCQgBgDgFAgQgEAfgVAJQgTAIgUgBIglgCQgHAEgCACIgCAFQgLAYgOAJQgMAHgZAAQgcAAgMgOg");
	this.shape_1.setTransform(29.8,33.5);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjBEiQgVgTgBgWQgiATggglQgegfAAgkQAOgtAUgUIACgEQgUgSgKgMQgSgWAAgZQAAgpATgYQATgZAjAAQABAKgBgKQAAgFgEgRQgEgRgBgFQAAgjASgZQAWggAoAAQAMAAAVAGQABgnAfggQAhgiAlAAQAgAAAVAJQAYAJAFAQIAbgPQAagNAQABQAmAAAaAVQAcAXAAAmQAAAKgEAbQA2gHAjArQAbAjAAAoQAAAKgFAOQgGARgJAIQAUAIAJAQQAEAKAAAJQAAAmgkAYQgcATgbAAQgQAAgSgEQAEA0gbAcQgbAdg4AAQgGAAgPgEIgUgEQgEAagbANQgVAKgeAAQgVAAgFgDQgKAdgYAQQgYARgdAAQgcAAgWgSg");
	this.shape_2.setTransform(30.2,32.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,2.1,64.9,61.7);


(lib.FIZ_FRONT_part_001 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AieDRIAQj0QALiigBgLQAEgCBMAPQBKAPBCApQBCApAFALIgDACQh7BXg7BUQgxBFgBA2g");
	this.shape.setTransform(67.9,23.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AgyDRQgSgMgMgdQgUgxh9hoQh9hlghgKQgOAGAogUIBrg3QBEgiCpgIQCogIBfAtQBfAuAqAlIgDACQh7BXg8BUQgxBFgBA2g");
	this.shape_1.setTransform(45.1,23.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAFDfQg3gRgbgpIAFAMIABABIAZAtIgDAAIg2g9QhZhjh2hBQh1hCgNgNQB5hGApgRQCCg2CQAAQCsAACDA5QBYAmA1A4QiaBgheCbIgWArg");
	this.shape_2.setTransform(44.1,22.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,88.2,44.7);


(lib.FIZ_FRONT_MOUTH_COMP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// teeth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiSArIgMgXQgFgLgDACIgWAKQgTAIgPgBQgQgBgSgPQgYgSgCgtQBZAfCOAAQBsAABZgPQBdgOAsgbQgFAhgMAOQgMANgZgBQgGABgOgIIgOgGQgKAAgDAMIgEAbQgLAphEAAQghAAgTgPQgMgKAAgHIAAgFQgFACgDAAQgPAPgTAQQgsAfgkAAQgnAAgUgig");
	this.shape.setTransform(30.3,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#40152B").s().p("AhPBBQgggFgQgFIAAgDIAAgIQALgmAEgHQAEgIAOgFIAbgJQAegLARgNQAKgHAKgOIAJAJQALAIAQAHQALAFAegBQAeAKAVA7IAAABQguAnh7AAQgJAAgdgEg");
	this.shape_1.setTransform(33.6,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("Ah4BMIABAIIgCACgAjDApQgpglgQgiQALACAWgGQAUgEAEgDQAQAcAPANQAVARAdAAIgPBCQgbgFgnglgACJAVQgOgZgIgJIAAgBQARgBAZgWQAagYgBgWQAKADAUABQAVAAANgCIAHgEQgMAhgiAuQgiAtgXANQgBgFgMgag");
	this.shape_2.setTransform(32.8,18.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiRA/QgQgigMADQgMACgOAGQgNAHgHAAQgGAAgHgFQgQgIgPgcQgNgVgDgQIgIgiQAoAOBPAKQBEAJAoAAQBnAAA9gHQBqgLBYgjIAAAFIgDACQgHAvgQASQgNAOgdAAQgGAAgOgFIgOgHQgJAAgDALIgEAdQgKAphAAAQgeAAgXgPQgRgMAAgFIAAgFQgEACgEAAQgOAPgTAQQgqAfgpAAQgkAAgVgigAkZhRQAAgGgFgBQgGACgFgBQAAgEABgFIAXARQgEADgCAAQgCAAAAgFg");
	this.shape_3.setTransform(30.2,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#40152B").s().p("Ag/BXQhNgPgfgZQAWglAMgOQAVgcAcgJQASgFAfgQQAmgTABgKQACABAIAJQAKAJARAEQANADAggHQAgACAbAnIAPAaQALASACAOIADgBIgBACIgBAAIAAACQACAPg+AfQg+AQgzAAQgfAAgdgFg");
	this.shape_4.setTransform(33.5,24.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AjhA/Qgbgggfg9QAKAOAUgBQAMAAARgEQATgCAHgGQAFALARASQAWAaAPACQgIAHgNAfQgNAdgBAGIgBAJQgjgcgPgTgACkAZQgTgagJgKQAVgOAJgOQAJgNAEgSQAMAFATAAQAfAAAPgKQAMgIAPgbQgOBIgZAqQgIAPgsA5QgFgRgXgig");
	this.shape_5.setTransform(33.1,17.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiZA+QgUgigCAAQgKAAgTAJQgTAJgOgCIgBAAQAKgMAOgfQAAgegcAQQgWANgEATQgLgQgIgEIgPgwIAAgZQAAAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIBeAXQBPATBbAAQBAAABggSQBGgOBugdQgFBfhMAAQgHAAgOgFIgNgHQgHAAgEAOIgMAoQgEANgUAHQgSAHgZAAQgmAAgVgPQgMgKAAgHIAAgFQgEACgEAAQgNAPgTAQQgqAfguAAQgfAAgVgig");
	this.shape_6.setTransform(31.1,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#40152B").s().p("AiKBMQhDgZAAgSQAAgHAGgKIANgUQALgUASgNQAHgGALAAIASABQAgAAAjgOQAogRAOgZQAFANAUAIQAQAHASAAQAKAAA8gOQAIAAAWAZIAvA6QgzA5g+AYQgzAUhKgBQgqABhAgYg");
	this.shape_7.setTransform(33.6,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#862D59").s().p("AjLCUQhNhVgfhFQgXg3gChEIANgIQgJBIAfA2QAbAuAgAAQAJAAATgEQATgDAHgEQADAHANAQQANARAHAFQgOAIgRAgQgSAhAEANgADTBFQgVgYgZgRQALgFANgnQA9AWAhgzQAbgsgFhBIAIACQAYAGAAAmQAAAnhmCxQgFgRgTgWg");
	this.shape_8.setTransform(32.1,11.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiRBNQgPgUAAgHQABgGgGgFQgEgDgDAAQgHAAgVAJIgTAJQgoAAgUgwQgMgdAAgeIACgnIBgAYQBLARAmAAQBOAAA/gJQA2gICygjQgJA6gEANQgPAogpAAQgQAAgJgHQgHgFgCAAQgLAAgCALIgCAdQgIAphJAAQgTAAgXgMQgWgLAAgJIAAgFQgFACgDAAQgOAPgSAQQgpAfgxAAQgYAAgVgbg");
	this.shape_9.setTransform(30.8,7.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#40152B").s().p("AhqA7QglgoAJhHQAJAEANAEQANAEAGAAQAgAAAjgOQAngRAQgZQALAMAXAJQAlAPAlgOQABBggsAqQgjAig+AAQhEAAgjgng");
	this.shape_10.setTransform(30.7,24.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah1BOQgRgFAAgIQgBhOAqglQAigfA6AAQAzAAAfAfQAhAfAVBFQgPAFgUAAQglAAgUgPQgMgKAAgHIAAgFQgFACgDAAQgPAPgTAQQgsAfgkAAQgMAAgOgEg");
	this.shape_11.setTransform(30.7,9.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D580AA").s().p("AglBaIgagCIgJgdQgIgoAEgcIAOgpQANgFAMgIQAVgNAJgMIADgBIgBANQAAAKAFAgQAHAhADABIAEAAQAGgXAAgPIgMgoQARANAbABQAQAiAHBIIAEAnQgrAJhHAAIgCAAg");
	this.shape_12.setTransform(34.1,24.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40152B").s().p("Ai0AlIACgFIAGgMQAMgWALgSQAGgLANgNQAUAAATgEQgGAZgBAjQgBAkATAeQg3gJgtgggABlAbQAAgigRgpQgFgNgGgLQAPgBAOgEQAOAKAOAMQgEgGAFAGIARATQANAQALARIAJAMQgkArgoAOIgFACIABgpg");
	this.shape_13.setTransform(34,24.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#862D59").s().p("AjGBjQgwgrglhOQAQAMASAAQAggBARgJIABgBQADALATATQASATATAHQgcAggNAbQgEAIgBAGIgBABIgLgKgADCBIIgBgDIgCgCQgXglgngeIAAAAQARgJAMgNQAQgTAEgWQAKAFAbAAQApAAAUghQAFgIADgJIgFAVQgNA3gOAgQgOAfgnAyIgFgJg");
	this.shape_14.setTransform(33.2,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_15.setTransform(0.8,-1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhmBiIgCAAQgQgBgRgPIgKgLIAAAAIgQgVIABgGQAAgJgMgFIgBAAIgvASIgBAAQgEACgFAAIgBAAQgLAAgMgJQgNgKgOgWIgBgCQgNgkgMgrIAHgCQAHgBAMADIBTAWQBHASBpAAQBcAABagXICWgqQAEAagEAfIgBACIgLANQgYAagUAEIgFAAIgCAAQgJAAgIgDIgGAAIgCgBQgOgFgKgBQgDgDgFgCIgBAAQgKAEgDANIgCAPIgDAOQgCAGgEAFQgLAPgbAGQgOADgTAAIgGgBIgCAAQgZgBgOgOIgIgIIgKgIIAAAAIgDgCIAAAAIgDgBIgBAAIAAAAIAAAAIgDAAIAAAAIgBAAIgIAMQgGAKgJAJQgSAQgZAIIgQAEQgOACgPABIgHAAg");
	this.shape_16.setTransform(31,7.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#40152B").s().p("AklBSIAAgBIAAAAIgBgBIgEgIQgLgVgSgxIgLgZIgBgFQgBgGAAgEIAJgKIAXAIIACAOIACARIAAACQAFAZASAdQAGAKAGAHIACACQgWAPgDABIgBAAgAEkATIAFgGIAEgGQAMgRABgVIABgGIgBgEIgHgdQAZgKAJgBQgFAbgNAmQgFAQgMAUIgFABQgFAAgEgCgAEmhBIABAAIAAAAIgBAAg");
	this.shape_17.setTransform(30.6,6.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AjQBhQgvgWgdglIAEgFIAFgEIARgNQAQAMARgBQAgAAARgKIABgBQAEAMASAUQAbAdAbAAQAzAAAtgbQAWgQAJgOIADAEIAAgBQAUAaApAAQA9AAAdgiQAQgQAEgXQAKAGAcAAQAUAAAPgJIAMASIgZAjQgvBBiZAZQg+AIhPABQhMgEg1gYgAiPAZIgBgBIAAAAIgQgVIABgFQAAgJgMgEIgBAAIgvAPQgoAAgSgrIgMgzQB8AjB9AAQBEAABGgOIAEgBQBVgOASgIIAqgMIAYgIIAAAAIATgIIgBADIgBABIgKAkQgMApgpAAQgQgIgKgBQgDgEgFgBIgBAAQgKAEgDAPIgBAJIgEATQgLAhhCAAQgfAAgQgPQgMgKgGgEIAAAAIgBgBIgCgBIAAAAIgDgCIgBAAIAAABIAAAAIgDgBIAAABIgBAAIgFAJQgIAJgKALQgjAeg8AAQgWAAgWgZg");
	this.shape_18.setTransform(30.7,12.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiLBUQgZgSgOgZQgHAFgUADQgQADgLAAQgQAAgYgWQglggAAg/QAAgHACgBQAAgBAJABQAZAHAkAHQBIAOA0AAQCJAACSgcQBKgOAugOQAHABAGAEQAHAGAAAOQAABQhPABQgUgBgMgEQgIAmgcASQgbASg0AAQgRAAgRgHQgTgIgFgOQgQAZgnARQgjAPggAAQgTAAgYgSg");
	this.shape_19.setTransform(31.1,10.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AjIBcQhHhKgvijIADgBIATgCQgBgEACgFIAXARIAiAHQANAAADADQAeAHAnAFIAnAGIAIAAQAcADBTgEIADAAQA7AAA3gJQAUgEA9gPIA9gRQAogNAFAAQAGAAACAEIABAHQADAKgCAHQACBthFBZQhYB1ikAAQh7AAhNhQgAhcCEIgBgDIgCACIADABg");
	this.shape_20.setTransform(30.1,14.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiRCkIgIgEQhFgng9h6QgwhkAAgiQAAgNADgOQAFgPAGAAQAMAAAhAHQBFAQA1ALQAUADA1AEIA4ADQAYAAAlgHQCOgcBHgVIAugMQAWAAAHAOQAEAHABASQAAB+hNByQhRB9hpAAQibAAg8gng");
	this.shape_21.setTransform(31.6,16);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah/DDQhGgegogzQhFhbgeg+Qgeg+AAg2QAAgIACgKQACgLABgDIAGgKQAFgEATAAQAlAAAhAJQB0AdAlADQBrACBvgXQBygXAjgLQASgFAlAAQAYAAAIAEQAVALAAArQAAA+h3C7QgVAhg9AqQhVA7hRAAQg/AAhAgag");
	this.shape_22.setTransform(32.6,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhoCaQg7gzAAh1QABhMAcgnQAcgmBAgQQBNgcA/A2QBCA5AABoQAABHgjA3QgoBAhCAAQhSAAgtgog");
	this.shape_23.setTransform(30.5,18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AA1DKQiDgBhIgnQhIgogphRQhEiPAAgmQAAgnAYADIADAAIgDAAIADAAIAAAAIAAACIAKgBIBZAVQBXAVBaAAQA/AACBgiQCCgiAFAAQAUAAAHAIIAAAAIAAABQACADACALIABgDQABAAAAALQABAQgDAqQgDBEhHB6QhFB8iEAAIgCAAgAirB0IABAAIAAgBIgBABgADQBLIACAEIgBgDIgCgCIABABgACQAFIACABIgBgBIgBAAg");
	this.shape_24.setTransform(31.5,15.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhnCiQgTgCgSgDQgSgEgigMQghgNgbgRQgogagVgcQgPgVgOgiQgKgYgDgTIAAAFQgJgygDgGQAAgVAKgIIADgDQAGgDAHAAIAVAJQAEAAAWAJIADABIA0ARIACABQAfAGAuAGIAbABIBPACIALABQB7AAB+grIBQgeQAcgKAOgDQALgFATAFQAUAEgXBPQgWBNguAuQgvAwgQAKIgEACIAAAAIgBABIgBAAQhdAuiPAJIg3ABIgDAAIgbgBgAkfAtIABABIAEgFIgFAEgAkoAdIgBABIABAAIAAgBIAAAAgAlkgzIAAgDIAAgDIAAgBIAAAHg");
	this.shape_25.setTransform(30.9,11.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ai8ARQgggMgXgJQgCAAgNgLQgNgMgGgHQAEgEAEgBIAcAMIA3AaQAiAPCAAAQB+ABAqgPQAqgNAagKQAWgIAUAAQAMAAAMAIQgZAUg0AOQhdAdiKAAQhcAAhCgXg");
	this.shape_26.setTransform(31.5,15.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[]},1).to({state:[{t:this.shape_23}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,62.1,20.4);


(lib.FIZ_23_tophat = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB0COIAAgBIAAAAQgLgKAAgVIAAgBIADgNIgHAAIgBAAQgfAAgOgQQgPgQABgeIACgIQgLADgPAAQgoAAgTgbQgKgMgBgNQgOAGgaAAQgjAAgLgJIgQgQQgGgGgCgRQgCgLAAgQQACgqAXgLIAAAAIABAAQAJALgCAPIgEAYQgBAXALALQAKAMAXAAQALAAAtgIIAAAAIABABQAHALABAVQAHAYApAAQAKAAAjgNIAEgDIAAAAIAKABIABAAQADABAAAJQgBAJgMAeQAAASANAIQANAIAbgCQAEgDAFAAQAFAAADAGQACAGgBAMIAAABIgHARQgFALAUANQAHAEAKAEIAAABIAAAAIAAABIgDACIgNAEIgDABIgGAAQgKAAgPgEg");
	this.shape.setTransform(35.3,38.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C7C9").s().p("ABgDpQgOgRgMAAQgFAAgMAEQgMAEgFAAQgpAAgTgiQgMgVgBgaQAAgYgRgIQgJgFgdgCQgbgDgLgHQgSgKAAgbQAAgfgLgHQgJgGgkABQgUABgXgKQgUgHgJgKIgDgEQgCgBAAgKIAPgcIAAABQAJAPAMAKQAMAIAIAAIAygCQAsgBAJADQAHACAMAcQAMAgAJAIQAMAKAmABQAjACAFAEQAGAHAHAiQAFAaAVAAQAUAAAMgHQANgIAAgNQAAgFgEgLQgEgMAAgFQAAgHBCgJQBDgRAAgvQgBgfgjgWQgtgVgPgMQAVgVAHgQQANgYAAgjQAAgYgLgQQgMgNAAgGQARAMARARQARASAAAOQAAASgOAfQgHAQgGANIAAAJQApgCAfAOQAvAWAAA2QAAAdgjAVQgiAUAAAJQAAAMAMAFQAHADARADQAhAIgMArQgFAJgIAHQgGADgPADQgQADgIAAQgFAAgFgEQgEgEgFAAQgRAAgDAPQgCAGgBAaQAAAugoAAQgTAAgPgRg");
	this.shape_1.setTransform(39.6,39.1);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABcDbQgGghgHgGQgEgEgkgBQgngBgKgLQgKgJgMggQgLgcgGgDQgJgDgsACIgxACQgJAAgNgJQgNgKgJgQIAAgCIABgCIABAAIAAgDQAAgMgOgDIAAAAQgEgCgcgCQg0gDAAgoQAAgeAmgcQAkgaAAgHQAAgFgDgLQgEgOgBgFQABgsAdgVQAXgRAhAAQAZAAAOAKQAHAEAEAFQAEgBAKgHQAQgMAHgEIAMgGQAPgHAMgDQATgFAcAAQA3AAATA5QAEAOAFAYQAEAPAFABQADAAASgGQASgGAVAEIAZAFQABAAAAABQABAAABAAQAAABAAAAQAAAAAAABQABACAMANIAAABQALAQAAAZQAAAjgNAZIAAAAQgIAPgTATQAQAMApATIAAAAQAlAXAAAgQAAAzhEARQhAAJgBAFQAAAFAFALQADAMAAAFQAAAOgNAJIAAAAQgNAHgVAAQgXAAgFgcg");
	this.shape_2.setTransform(32.4,28);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AB8E/IgYgRQgFAAgKAEQgJAEgFAAQg8AAgbgzQgOgZgEgWQgEgSgBgBQgKgJgTgEQgWgEgKgDQglgJACgtQABgVgEgJIgDABQhDABgegPQgfgOAAgiIACgZQgygEgTgPQgSgQAAghQAAguAdgXQAegZABgTQAGg/AeghQAggiA2AAQAIAAAjAOIAvgUQAugVAgAAQAegBAfASQAeARARAeQACAAAFAXQAEATAAAIQALgEAQgCQAQgDAIAAQAxAAAfApQAWAdAAAPQAAAWgIAXQgIAUgJAJQA3gNAhA1QAYAkAAAgQAAAQgLAVQgPAcgdAMQAcAJAJAWQAEAKAAANQAAAjgWAUQgXAWgqAAIgLAAQgBAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQAHAqgXAZQgUAWgkAAQgRAAgagRg");
	this.shape_3.setTransform(35.6,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(40,42,51,0.263)").s().p("AgBgNIABgBQADAKgBATg");
	this.shape_4.setTransform(21.7,44.1);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,71.2,67.4);


(lib.FIZ_23_part_040 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("Ag4A2IADgmQAAgRgFgXQgHghgOgVIBEgPQA8gSAfgZQgEAMg6BmQg6BoghA3QAOgvADgkg");
	this.shape.setTransform(63.8,28.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhkCpQABgBAFgjQAJhEAAgWQAAgWgCgUQgCgUgFgRIgLgjQgEgJgMgTIAFgDIAlgJQAugMAogOQAVgHAWgKQASgJAPgGIAngPQgLAwhIB6QhUCPg3A4gAhJB/IAFgIIgCgBg");
	this.shape_1.setTransform(64.5,28.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(52.3,9.8,24.5,37.2);


(lib.FIZ_23_part_039 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AgMLbQgGgigKhoQgJg0ABALIgTjqQgCAIABgbQgFg5AAgsIgBjfQgBhcAFhwIAHi5IADhpQAChAADgrIAMhpIACgLQgBgHADgLIAFgYQABgJADgHIAUAEQgZCQgFDuQgCBgABBZIAAAEIAAAwQABBlAEBXQAJC8ABCrQAACsBND+Ig6AFQgJgXgIgvg");
	this.shape.setTransform(65,82.9);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AhSCTIgCAAIgCgaQAVAEAhAEQA9AHA3gBIAAAAIADgBIgBASIgEAAIhpACQg1gHgGAAgAgQhiQgHgFgBgJQABgLADgKQAFgUARAAQASgBAHALQAFAKgCATQgDASgaACIgBAAQgLAAgFgEg");
	this.shape_1.setTransform(34,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AgZEIQgSgBgUgGIgFgBIAJgYIAAAAIAVglQAYADAhACIAVgBIAAADQAIAsAHAUIhQgCgACND1QgBgJgHgQQgDgKgKgPQgIgOgIgFIAChUIgBgRIAFAAQAZAfAGAXQAPA2ABAhQAAAPgLAgQgEgFgBgNgAicDNQgBgWAQgxQAPguAXgWQgBAVABAWIABAQQgCABABAGIAAABIABAAIAAAAIABAMIABAFQgTACgUAsIgPAjIgCgagABSCCIAAAAIg9gDQhWgGgWgBIgBgMQgEimBGiXIAHACQAHACARABQARAAAHgCIALAaQAWBFACAUIAVC3IgBAmgAgBiXQgTAAgLAZQgHARAAAMQABAOAEAGQAJARAggBQAUAAALgUQAJgPAAgLQgBgsgvAAIgBAAgAgNjiQAKgSADgHIAIgOQAPAYACAPIgDAAIgjAAg");
	this.shape_2.setTransform(34,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACHMkIgHAAQj2gDjzgvQAwh6AMiBIAWjbIAil6IAAgBIAAAAIAAgBIABABQAAgXADgWQASiFAXiFQAgjFBDi8IATABIARAFQgMAYgIAaQguCQgPCWQgBANAHAJQAmAzBBANQCGAbBzg5QABgXgBhaQgBhaAnjTIAGgEIAXABIAVADQgaCQgFDvQgCBgABBYIAAAEIAAAxQABBkAEBXQAJC8AACsQABCrBPD+Ig6AFQhOAGhOAAIgNAAgABZC1IACAAQANASAJAUQAHATAIAgIABABIAAAAIABAAQAQgOAIgSQAHgSABgZQABgYgLgpQgLgpgSgYQgTgZgMgLQgMjOhQiBIAAgBIAAAAIAAAAIAAABQg8BQgeByQgTBJgEA/QgNALgVAeQgWAdgIAfQgJAfABAoIAEAbIAAAAQAEAbANgBIABAAIACgCIAAAAIADgNQAFgkAfgmIAAAAQAIgEAFgBIACAOIAAABIAAAAIArAHQgPATgTAoIAAAAIAAAAIAAABIgBADIgCAEIAAAAIABAEIAAACIABAAIAFACQAGADAJAEQAgAMA7gBQAhgBAKgEIAAgBIACAAQAFAAADgDQADgCAAgFQgBgHgKgeQgIgXgFgMQAVgCALgCIAKgCIADAEgABHByIAGAAIAAABIgGgBgABeA7IgBgHIAGAHgAAKjyIAEAAIAAAAIgEAAg");
	this.shape_3.setTransform(35.1,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(31.4,2.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABBM+QibgHiagXQhPgNhNgQQAnhVAUhcQAThUAGhYIALieIALixQAFhNAIhQQAIhTASh2QASh3AdiKQAdiLAthvIAPgmIAIgCIABgFQAYADAZAJIAbAKQguBygaB2QgMA8gIA8IgBATQAzAkBAALQBcAOBRgjIAcgKQgEhXALhcQAKhcAIg1QAHg0AOgiIAZgGIAMgBIANAAIAtAEQgaCbgDBwQgDBxAABtIACDlQACBtAFBvQAHB0AFB1QAEBwALBrQAMBoAiBhIAUA0Qh/AQh/AAQgpAAgogCgAgksjIACABIAAAAIgCgBg");
	this.shape_5.setTransform(35,83.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,0,80.2,166.5);


(lib.FIZ_23_part_038 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363636").s().p("AjCDlQgggQgHghQgPg/gLhBQgYh9AAhFIAAhnICUAPQBUAHBGAAIBRgFICKgHIAAgIQAUAAAOgFQAMBGAAAkQAAAhgHApQgFAWgKAtQgWBXgPAtQgLAcAAAEQAAAIhGAiQhFAggRADIAIgGQgCgFgGgBIgNgBIhzgIIgIACQAIALATAFQALAEAcAEIAAAAIASACQgZACgiAAQhiAAgrgUg");
	this.shape.setTransform(30.5,27.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiREBQgcAAgegSIgZgSIgPABQgEABgCgEQgHgegPg4Qggh2AAjYIAAg3IAZgBQAAAFBnAIQArADBNADIBMACQB1gBCAgQQAAgCAEgBIAbgGIAAAGQAIATgBA/QAABFgLBHQgbC+hEAhQhvA3gcAIQghAKhPAAQhEgFgYAAg");
	this.shape_1.setTransform(30.5,26.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,61,52.6);


(lib.FIZ_23_part_037 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363636").s().p("Ag1BAQgJg0gQhBQgWhagihzIACgBIgCAAIgGgRQALgOA2AAQA3AABRA+QBMA4AEAfIAAABQgHAKgGANIgCAAIACABQgSAlgPA9IggCHQgIAbgLBgIgFAxIhGACQgFh9gRhmg");
	this.shape.setTransform(16.8,28.2);

	// Symbol 24
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhOAXIgEgRQgoiigZh4IAAgCIAAgBIAAAAIACgBIAEAAIACABIABAAIAAABIAAAAIABACQAKgOA2AAQA3AABSA+QBLA4AEAfIACgCIAAAAIACAAIAAAAIACACIAAAAIAAACQg9D0gFAXQgRBTgHBNIhrADQgCiGgciGgACCh0IAAgBIgCAAgAiEkCIADgBIgDAAIAAABg");
	this.shape_1.setTransform(16.6,28.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.7,-0.9,29.9,58.3);


(lib.FIZ_23_part_035 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#363636").s().p("AggCTQgYiOgohnIACgBIgCAAIgEgLIgBgBIAAAAIgBAAIgEAAIgBAAIgBAAIAAgEQAAgWA0hCQA4hJAqAAQATAAAdASQAMAIAHAGIgBABIgBABIgDAZQgkDzgED6IhPABQgGg/gLhDg");
	this.shape.setTransform(12.4,25);

	// Symbol 23
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2CqQggiTgciEIAAgBIAAgBIAAAAIAAgEQAAgWA1hCQA5hKAoAAQATAAAdATQAMAIAHAGQAEgFAEAAIABAAIAAABIACAAQABAEAAAHQAAASgTC1QgTDFAABtIAAAHIh1ADQgFg7gJgxgAhmhjIACAAIgCAAg");
	this.shape_1.setTransform(13,25);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,-2.7,23.1,55.7);


(lib.FIZ_23_part_033 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AiqAeQgugIhSgZQAFgWgBgQQCBAbCNAJQB0AGBegEQAcgBBPgJIAFAJQABAEAAAFQAAAPg/ALQg+ALhLAAQi2AAhXgMg");
	this.shape.setTransform(32.1,6.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIBCQh1gCg7gNQhSgTg3gJQgMgEgCgLIgBgkQAAgdAEgHIALgBQD+AuDcAAICEgTQAOAAAFAiQAFAigbAKQg6AVgWADQgGABhLAAIhXABIgqAAg");
	this.shape_1.setTransform(32.1,6.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.3,13.4);


(lib.FIZ_23_part_032 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5EB8BA").s().p("AgbAAIAXgLQAWgMAFgDQAFASAAAJQAAABgQAIQgRAJgVAIg");
	this.shape.setTransform(45.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AgdHuQAUhKAAicQAAhigDgaQgEgZAAiIQAAg3gDg7IgMirIgBgCIgDAOIgCh6QgEiHgBhBIA0gZQAiCnAOEnQAGCYAECmQADApAKBSQAHA7AABOQABA7gmA5QguBFhdA5QAthiAOgxg");
	this.shape_1.setTransform(47.5,72.7);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AhDBHIABgSQADgRAEgLQAuAFBPAAQADASgBAagAgzgfIAAgqIByAAIAAAqg");
	this.shape_2.setTransform(26.5,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AiZJ+QgxgXgTg4QgahJgNhsIgIhiQAAlTAmjXQAljWAyiYIB2AbQgCAAgCATIgCATIg/ACQgEAgABALQAAAUAJADQAHADAqAAIgDAeQgvgBgLADQgNAGABAsQAAAOAHADQAKAFAuAAQgJBHgGB7QgEBiAAA1IAFF0QAKgVADgxQABgbAAhEIAAjVQAAggAJiDIALivQAmgDAjAHQAOgBgBgtQAAgDgCgKQgDgLgFgGIhFgCIAEgeQAngBAbgCQACgNAAgcQAAgIgCgKIgDgJQgFgBgzAAQACgBABgjQBKACAngKQARgFBFgfQAhCiAPEsQAHCZABCJIALB+QALB4AAAqQAABghVBRQhgBeiSAAQg6AAglgSg");
	this.shape_3.setTransform(29.4,74.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AgJAkIgVAAIABgbQBCgDApgHQAygLAggYQAFATAAAKQAAAJhLAUQg7APgcAAIgMgBgAikAPIALggQALAGAlAKQAsAKATgBIgCAbg");
	this.shape_4.setTransform(31.7,7.6);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Aj1JKQgwiAAAiLQAAl8A9kwQAvjsAxg/IApALQAtANAXAAQBXAAA/gcQAHgDBAgnQAMAnAVCPQAVCTACBCQAOGLARCnIANB8QAACMhVBhQhUBiigAFIgLAAQiZAAguh9g");
	this.shape_5.setTransform(29.5,71.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,59,142.3);


(lib.FIZ_23_part_029 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AgQB6QgQgNgQgMIgcgUIgBgMQAHAGATAJQAkARAfACQAhABgBgZQABgMgMgKQgMgJgcgOIgPgFQAXgIAsAeQAqAdAAAQQAAAQgOANQgQAPgYAAQglAAgQgOgAhRAcIAKACIgJACIgBgEgAhTAGIABABQAIADA6gjQA4gmABgXQAAgLgXAAQgTAAgqAdIguAjIgBgOQArgsAegUQAigYAbAAQAMAAAHAHQAGAFAAADQAAA9hFAmQgiASgxAQIAAgHg");
	this.shape.setTransform(13.5,15.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAABQAIgMABgEIAFABIgOAPQgJANgDACQADgDAJgMg");
	this.shape_1.setTransform(14.5,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMCQQgEgCgggYIghgaIgEgoIABAAQAJAAATAPQATAOAjAAQAGAAAJgCQAJgDABgCQgFgIgSgLQgRgLgMgDQgOgDgmgEIgGgBIgCgOIgDgWIABgBQAMgHBGgmQADgCAJgOIAOgRIgFAAQgKAAgtAdQgjAUgQALIgHgvQAOgQAagUQA7guAnAAQArAAAAAiQAAArglAhIg/AtQA9APAgAYQAdAXgBAaQAAAXgSASQgTATgdAAQgWAAgZgIgAgWB4QgBgCgFgCIgFgCg");
	this.shape_2.setTransform(14.2,15.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,0,20.4,30.5);


(lib.FIZ_23_part_028copy2b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgXBVIAQgDQA7gVAbgfIhSAfQgcAJgkAAQgMAAgLgMQgLgKAAgHQAsAEAZgKQAUgHAmgdQhLAbgYAAQgsAAgTgVQADgbBGgSQBTgWAagaIARAOQAHAEAQAAQAUgFAJgGIAPALQAIAKgBAhQABAogoAmQgpAmgxAAg");
	this.shape.setTransform(11.2,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AhEB2QAAgDgIgIQAqgSATgUQANgPAZgwQg4A9gPAJQgNAIglAHIgWAAIAAgRQAFgRA8g+QA+hCAGgNQgjAXgNABQgZgCgJgKQgHgIAAgRIACgMIABgGQAIgEAKAAQA2AKA/AAQAeAAAQAaQANAWAAAhQAAAfgXAmQgcAwgvASIgPAFQAKgEAcgnQAegpAGgPQgaAtgwAiQglAcgSAAIgVgCg");
	this.shape_1.setTransform(8.7,67.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AAdBQIgEgDQAFAAADgWQACgRAAgMQAAgsgegbQgegcgwAIIAHgEIAJgEQAXgHAPAAQAnAAAfAsQAXAiAAARQAAAPgJAWQgMAdgUAAIgEgBg");
	this.shape_2.setTransform(19.1,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AhCBYIgQgbQgHgNgXgQQgYgQgLgEQAsgVA3gwQAtgoAQgYICHgEQgXBEghAqQgoAzhqBaQgFgYgHgOg");
	this.shape_3.setTransform(33.9,49.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AhgB5IgIgFIABAAQgFgEgBgEQABgTANgQIAAAAQAWgaA2gUQAfgKAVgFIgCgFQgCgDgDAAQgVgDgdAJIgBAAQg2AUgZAaQgHgDgBgEQAAgpAhgVQAHgFAKgFIAigPQAegPAYgCIABAAIgCgDQgCgDgEAAIgPAAIgBAAQgqAHgcANQgLAAgTAFQgRAEgJABQgTgCgJgGQgFgFABgHQAFgWAcgOQAfgPArgCQAqgBATAGIAjAIQATAFAYACIAFABIACACIgBgCIgBgCIAAABIgrgYIgBAAIgcgHQA5gTAsAoIAAAAIAPAPIAEAKIAJAXIAAAAQAFARgEAlQgDAmgSAWIgBAAQgSAUgogEQgwgFgQAFIABAAIgVAFQgJACgdARQgZANgOABIgHAAIgCgBg");
	this.shape_4.setTransform(5.7,27.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("Ag1CVIgJgCIABgBQgGgCgBgDQgFgSAIgVIAAAAQAOghAtgnQAbgWATgLQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgDgDgEABQgUAFgZASIAAAAQgvAogQAiQgHAAgCgEQgKgnAYgiQAFgIAJgGIAcgcQAagaATgLIACAAIgCgDQgEgCgEACIgLAFIgCABQgmAXgXAXQgLAEgQAMIgXAMQgTAFgKgDQgGgCAAgHQgCgVAXgYQAZgaAogSQAngRAVgCIAigFQASgCAXgGIAGgCIABACIgBgCIgBgCIAAACIgvgIIAAAAIgbAEQAvgoA0AXIAAABQAIADAJAFIAHAIIAOATQAKAPAGAnQAGAmgLAZIAAABQgMAagnAKQguAOgOAKIABAAIgUAOQgIAEgVAcQgUAWgNAGIgGADIgCgBg");
	this.shape_5.setTransform(4.2,44.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag4BdQgrgOgLgMIgFgNQgGgNgNgKQgGgGgHgJQgIgIAAgBQAAgpBEgQIArgJQAagGArgYQAugYgOAMQgOAMADACIAQAOQAHAFAQAAQAUgGAJgFIALgNQANAEAJAVQAJAVAAAVQgBAsgnApQgrAug9AAQgaAAgqgNg");
	this.shape_6.setTransform(11.2,79.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjADeQgQAAgRgOQgUgQgNgDQgMgDgEgFQgEgGAAgNQAAgVATgSQA3g2AbgfQgfAQgQgbIgKgdQAAgaAKgLQAWgZBAAPIAAABIAHAAIAIgKQAKgKAKgDIAVgEQAWgGAOgMIBZhAQA/guATgSIAAAHICagFQgLBqjcCyQgHAagJALQgSAZgigKQgkBFhHAZQghALgcAAIgEAAg");
	this.shape_7.setTransform(22.7,59.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhgCNQgMAAgCgHIgFgEIAAAAQgMgKAAgMQAAgUALgSQgPgIABgNQABgpAZgYQgMADgIAAIgBAAQgagDgLgJQgOgLAEgTQAFgeAlgSQAigRAvgCQAbgBATACQACgDABgCIANgFIAAAAQBHgaA1AxIABABIAAAAQAQANABAFIABABIAAACIAEAIIABABIAJAZIAAAAQAHAUgFApQgEAtgWAZIAAABQgXAbgzgFQgrgFgOAEIAAAAIgVAFQgIACgZAPQgeARgSAAIgHABIgBAAIgBAAg");
	this.shape_8.setTransform(5.7,27.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag/CmIgFgCQgPgFgCgMQgGgTAGgVQgQgCgDgOQgKgnASgjIgTAKIgBABQgYAGgNgEQgRgFAAgUQgEgdAfgfQAageAtgSQAZgLASgGQAAgDAEgDIAKgKQA6gzA+AdIABgBIAAAAQASAHADAFIABAAIABACIAFAHIABgBIAPAWIAAABQALAQAIArQAHAsgNAgQgPAigxAOQgqAMgLAJIgBAAIgUAOQgHAFgSAXQgYAcgQAGIgGADIgCAAQgEACgEAAQgEAAgDgDg");
	this.shape_9.setTransform(4.2,44.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_028copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAOCDIgbg1QgphOgtAAQgOAAgYAhQgZAhgkAAQgKAAgFgFQgCgEAAgEQAAgHAbgdQAbgbAAgZQgBgGgCAAQgEgBgBgCIgLgVQgFgMAAgKQAAgEAggXQAjgZAagKIAcgFQAdgEAKANQAPAMAHAIIADAFQABAAAHAEIAAABIAMALICNA7IAOAEIgNgEIAOAGIgSgGIAJAFQAOAIAQAOQAOAOAFAGIgCAPIgBACQgCABgGAAQgRAAg2ghQgmgYgUgJIgJADIBCA5QAvAwgHAYIgBAIQgBACgHAAQgOAAhJg4QhLg3gCAAIgDAAIACAAIgBABQARAQAWAwQAYAzAAAfQAAAGgCAOIgFACQgDACgGAAQgPAAgQgZg");
	this.shape.setTransform(93.7,100.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("ADVEbQgPggg/hdIg6hYQAEgNAMgPQAWgeAmgKQA4AwBnCAQBWBrAmA5QhCAGgkARQgQAHg5ApQgZhUgXgugAkgkMQgxgfgFgCIgegPQgNgGgGAAQgGAAgDACIAAAAQgjgmAAgTQAAgaAcgJIBwBCQA0AeAqAbIAOAKQgLAFgMAPQgPASAAAPQgJgJg2ghg");
	this.shape_1.setTransform(43.4,41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72EBEB").s().p("AhmgpQACgJAJgOQAOgVAWgKICdCCQgZAHgOAPQgPAPgIAYQhXhgg3gpg");
	this.shape_2.setTransform(39.2,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("ABfGAQgPgbAAggQAAgYA8gpQBEgtA/AAQAwAAAcAgQAbAdgEAlIgTAAIgEgNQgOgggqAAQgxAAg4AhQg4AhAAAcIADASQAEAUAGAIQgGACgKAAQgRAAgPgagAiUiZQALgSAWgSQAUgQAPgGIA2A0QgfACgYAZQgXAXAFAQgAlylmQAMgdAKgKQAEgEARgIIAuAhQggAKgOAlIgCAEg");
	this.shape_3.setTransform(59.8,55.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AAIB6QgOgBgRgDQA1gLAkgfIANgNIhSAfQgcAJgkAAQgMAAgLgMQgLgKAAgHQAKADAKAAQA9gOAegUIAQgNQgaAOgfAIQgbAHgPAAQgsAAgTgVQAFgbAQgGQAWgCAOgDQArgOAfgNIAogTIAMgKQgvAKgVgTQgPgNAAgOQAAgHAEgKQAFgMAHAAQAOAAAVAPQANAJARAOQARAOAUAKIAeANQAaAOgBAkQABAvgnAlQgmAigtAAIgIAAg");
	this.shape_4.setTransform(11.2,76.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AhhgJQAAgKAZgdQAcghAXAAQAFAAAsAeQA1AjASAXQg9AZgaAyQg3gxg2gqg");
	this.shape_5.setTransform(31,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("AgqErQAAgbgMgRQgWgeg9geIApgnQBgBRAAAzQAAAQgGAKQgGAHgeAYIgJABQAJgaAAgVgAAZiMQAGgUAggbQAggcARACIAgAgQgSADgcATQghAXgKAbgAiPkWQALgYAdgZQAngiAWAeQgOABgYAXQgbAYgHAag");
	this.shape_6.setTransform(31.1,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AAgE0IhDhGQA8gtBAhfQA9hcgGgaIgQARIgHAFIgJgHQAHgSAYgVQAcgaAegEIAZA5QALAZAAASQAAAogsBhQg4B7hPBGQgTgngHgJgAjekKQgEgBgDACIgFACIgCgBQAAgLASgcQARgeAAgHQAAgGgEAFQgEAEAAgEIARgOIAFgBQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAADgDAFQBNAmBDAnQgzAagSAsQg0glg4ggg");
	this.shape_7.setTransform(26.8,38);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AhFBqIgCgQQAEgXAQgPQARgRAZAAQAGAFADgBQAAgBAAgIQAAgHAAgFIgFgPQARgCgBADIBBgbIAPgHIAGgDIgLgDIgNACQgZAEgUAKQgXAKgFAAQgXgHAAgNQAAggAegTQAWgMAegEIAVgBIAGAAQAaAAARAWQAWAaAAAwQAAAfgMAKQgEAEgKAFQgNAFgUAFIgdAIQgqAKglARQgfAOgIAAIgOgBgAiWgHQAAgMAFgGQADgDAVgQQAHAQAIAJQAKAJASAGQgRAIAAAIIgJACIgRABQgdAAAAgWgAhlgwQAAgWAagSQAcgSAqAAIATABQgeAcgXAkQgLATgYAAQgbAAAAgag");
	this.shape_8.setTransform(-1,59.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0FF7A").s().p("AgPBaQAKgGAFgJQASgUAAgdQAAhHgygWQgHgDgQgDIAEgDQAagQAcAAQAFAAAYA3QAYA2AAARQAAATgJAOQgJAOgNABQgFgBgNAGQgKAFgFAAQgDAAgEgCg");
	this.shape_9.setTransform(14,56.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8089DD").s().p("AiDBcQgCgFgphSQBpgiA0ggQAkgXA/g7IBbABQALBFhKBFQhDA7ilBZQgGgqgDgKg");
	this.shape_10.setTransform(33.8,46.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#72EBEB").s().p("AgugWIBdAAQgWAVgSAYg");
	this.shape_11.setTransform(28.6,28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AhcBOQgMgMAAgGQAAgYA/gTQA7gRA1AFQgrgHgXAAQgyAAgWAIQgHADg2AmQgigMABgjQAAgHABgDQACgEAGAAQAPgOAfgMQA9gZBcAJQgcgMg6AAQgJAAgbAFQgdAGgPAFQgWAKgCgGQA5gvBBAAQBTAAAzAmQAyAkAAA0QgBAcgaAPQgWAMgFgDQgFgDgngDQgngDgfALQgiALgNAAQgYAAgQgSg");
	this.shape_12.setTransform(-8.7,28.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0FF7A").s().p("AjSAyIABgBQAHABAKAAQAhAAAWgVQAbgbgPgtIAAAAQgDgSgIgOQAZACAQAPQAVATABAkQgBAiggAYQgcAVgfAAQgGgBgngZgABcgNQACgFAZgYQAYgZAEgEIAwABIAQASQgVADgdAWQgPAMgMAMg");
	this.shape_13.setTransform(21.6,33.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8089DD").s().p("AgHBUQgUgDgIgDQgHgEgvgJIgvgJIg7gSQAjgHAWgZQAZgZAAgjQAAgRgHgQQB+AsCJAPIgugSQAEgDAfgSIAjgTQA0A8gpA5QgnA5hIAAQg4AAgSgEg");
	this.shape_14.setTransform(27.2,38.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8089DD").s().p("AgYBSIhNhJQAigEAkgbQAfgZAYgjQAxBiAdBDg");
	this.shape_15.setTransform(36.8,16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F0FF7A").s().p("Ag/BaQgMgMgaglIAJACQAmAUA2g9QA1g7gMguQAiARAOAbQANAYAAAkQAAARglAlQgwAxg5AAQgKAAgNgOg");
	this.shape_16.setTransform(27.8,5.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AASBgQgjgUgLAAQgLAAgkAIIgkAIQgUAAgPgPQgLgKAAgJQAAgfBTgMQA3gHAqADIAFAAQgGgGgdgFQgdgDgdAAQgRAAghAGQAQgnArgTQAcgMAcAAQAKgBAfAJIAAgCQg5gNgIAAQg/AAgSAcIgCACIgFgFQgCgCAAgGQAAghA2gPQAkgLAnAAQA5AAAtAwQApAtAAAsQAAAWgdAkQggAmgbAAQgOAAgmgVg");
	this.shape_17.setTransform(13.4,-3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#72EBEB").s().p("AgMgZIAbAfQgPAJgOAMg");
	this.shape_18.setTransform(25.3,23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8089DD").s().p("AhsCBQgWgGAAgGQAAgNALggQAMggAMgPIALgMIgDAEQgCAGAAAGQAAAHABABIACABIADACQAJAEAIgPQAOgbAdiIQAXAZAvARQAqANAqACQgfA6gmAyQhJBoguAAQgcAAgXgGg");
	this.shape_19.setTransform(36.9,26.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F0FF7A").s().p("AioBuIAnglIAPANQgMAIgRATQgZAagBAQgAgFgbQg9gZAAgfQAJgoAOgfQADAIAMARQANASAGADQAHADAoAMQApALAPgCQAQgCAUgGQAXgGAOgKIADASQgDAhgbAcQgZAZgVAAQguAAg1gXg");
	this.shape_20.setTransform(40.5,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCC99").s().p("AgzBeQgOgXAAg5QAAgTgngcQgngcAAgUQAAgdAWAAQApAAAyA7QATAVAbArIABABQACAAABgFQgCgQgSgcQgVgggmgjIAUgBQA/AAAiApQASAWAPAhQgJgmgdgiQghglgfgDIAEgJQAGgHASAAQAyAAApA6QAkAzAAAoQAAA1ghAmQgbAfgYAAQhVAAgagqg");
	this.shape_21.setTransform(43.8,-6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AgXB3IAQgEIANgFIAPgGQAhgOAZgbIgqASQgmAQgqAGIgYABIgLgEQgGgCgEgEQgKgIgDgLIAUACIAUgCIAVgFQAmgNAcgbIgUAIQgSAIgUAGQgQAFgRADIgPAAIgPgCQgXgFgSgPQAGgeAggGQASgCAUgFIAkgMIASgHIAQgJQASgHANgLIAGgEIgqAEQgKgFgNgIQgHgFgFgGQgDgDgBgEIgCgJQAAgUAQgKIAPADIALAKIAPAKIABABIAKAHIAKAGIACABIABABIAEACIAYAMIAdANQAUAJAJATQANAfgMAiIgHAPQgGAKgIAJQgGAHgHAFIgdATQgHAEgHADIgPAGQgTAGgTAAQgLAAgOgDg");
	this.shape_22.setTransform(11.1,76.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#72EBEB").s().p("AAIBPQgzgwg2goQAJgbAUgUQAVgTAagGIANAIIAqAfQAhAWAgAbIgPAFQgvAWgZAwIgEgDg");
	this.shape_23.setTransform(31,23.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8089DD").s().p("AAlE+QgHgLgIgJQgbgfgegcIAjggQASgSARgUQAQgSAOgTQAPgUANgUQANgUAOgZQALgUAHgVIAFgTIABgHIgXAWIgJgHQAcg4A9gNQAMASAJAVQAGARAEARQAEANABAOIgEAYQgEATgHASIgKAcIgKAYQgLAXgMAWQgzBdhGBQIgVgngAiUjcQglgZglgVIgGgCIgDAGIgFgBIAAgHQAEgNAMgWIATgjIgFABIgDgCQABgDAJgGIAHgFQADgBACABIABABIABACIgEAIIAYANQAkARAkATIAHAEQAVALAUANQgXALgTATIgOARQgJAKgEANIgigXg");
	this.shape_24.setTransform(26.8,37.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F0FF7A").s().p("AgrE6QADgdgLgbIgIgLQgJgLgKgHQgGgFgGgDQgYgLgXgOQAPgWAagRIAWAUIAYAYIAgAkIAAAAQAMAQAGAVQAGAdgUAUIgBAAIgOANIgKAHIgDADIgJABQAHgQABgRgAAZiLQAJgQAMgPQAMgNAOgLQARgOAXgEIACABIAAAAIAeAfIgcALQgpATgUAqgAiPkVIAMgZIACgDQAXgfAmgKIAaAQQgaAJgSATQgTAUgJAag");
	this.shape_25.setTransform(31.1,47);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#72EBEB").s().p("AgSgKIAlACIgMATg");
	this.shape_26.setTransform(35,27.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F0FF7A").s().p("AiHCpQgqgJgDgGQApAZAtgtQAqgqAAgsQAAgUgKgXQgJgSgLgMIAAAAQAQgFAUAKQAIAFAMAJIAEA+QAAAkgWAiQgbAsgwAAgAB5iKQAAgGAIgNIAIgMIAsADQgYAWgVAZQgPgJAAgKg");
	this.shape_27.setTransform(25.1,43.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AAfBvIgrgPQgsgOgIABQglAEgegLQgXgKAAgHQgBgIALgMQASgSAjAAQAIAAARAHQARAHADAIQARgQAFgXQATAJgCADQAFACBnAMQgXgQg8gLQgkgFAAgkQAcgcAVAAQBOAAAiAmQAWAXgBAYQABAVgWAnQgXArgTAAQgLAAg7gLgAiag4IgJgRQgBgRALgKQAQgNAhAEIgDAAIgBAWQAAACAGAOQAGARAGAJIgTABQgfAAgOgMgAhGg7QgSgJAAgLQAAgVAQgLQAPgKAcAAQAaAAAgAPQAcAMANALQhUANgPATIgCACQgVAAgSgKg");
	this.shape_28.setTransform(1.5,45.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8089DD").s().p("AiMBjIAEgkIgCg0QBdgaAqgXQATgLAPgNIgBAAIABAAIALgNIgCAGQAJgIANgUQgYAMgNADIgIAAQANgSATgTQATgSAJgFIAzADQALASALAzQAABPhRA1QhFAviVAiQADgKAGgig");
	this.shape_29.setTransform(38.2,41.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC99").s().p("AABB/IgIgBIgIAAQhKgGg2guQg0gsAAgeQACgZAPgYIAMgRIAGgHIAMgKQATgPAYgDIADAAQAOgHAlACIAAAAQAoACALgDIAjgMQAVgIAJAAQAQAAAHADQAIAFAAARQAAATgPAKIAAAAQg6AVgZADIAAAAIABABQAAADABADQAAACACACQAhAPASAGIAGACIADABQAZAGAqACQAmABAQAFQALAEABANQACANgLAJQgLAIgOADQgGgag+gMIgBgBIgqgDIAAgDQAAgDgCgCIgCADQgBACgfAOIgOAHIgGADIgmAQQgZAJgPACIABADQACADAEAAIAOABQAIAAAKgDIABAAIADgBIAEABIAXAGIAPADIASADIAMACQAPAAANAEQATAHABAPQAAAHgCAHIgBACQgDAEgIAFQgFADgWAAIglgBgABgBbIgBgBQgFgTgZgJQgQgFgSAAIgLgBIgSgEIgMgDIgKgCIAFgCQAGAAAKgFIARgIIADgBIAMgIQAWADAkACQA1ALAAATQgGAXgQAHQgJAEgIAAQgFAAgEgBg");
	this.shape_30.setTransform(75.2,-0.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#72EBEB").s().p("AgGBZQgpgxgrg1QApg8BEgMIAOgCIA6BNQhEAZgbBFIAAAAIgCAFg");
	this.shape_31.setTransform(20.8,25.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8089DD").s().p("AgSC9IgBAAQgfgDgegUIACgHQAEgNAFgMIADgHIAEgFIABgDIACgEIAEgIIAigrIAQgNIAAABIADgCQBJg+A8hPIgBAAQAZggAWghQAIAfAcAgQAmArAgAJIAXAGQhoBshzBOIgZAQIACACIgbAPIAAAAQgWAGgTAAIgOgBgAkjhSIgBgBIgFABQgDAAgCgDQgEgFABgQIADgzQgDgMAIgOIABgBQAIgLABAOQBHgMAaAQIATANIABABIABACIArA5QhLANgqBBIAAAAIgDAFIgtg9g");
	this.shape_32.setTransform(33.3,22.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F0FF7A").s().p("AjDCtIACgDIAAAAIAEgLIAAABQAag/A/gYIAAAAIACgBIAEAEIgHAGIAAACIgBABQgzAqgTBBIgBABQgLgJgLgLgAk3AeIAHgKIgBgBQAng6BIgKIAEgBIALAPIgFABIAAAAQhLAMgtA9IgHgJgAD2gLQgJgBgbgIQgagIgignQgigngBgjIAAgBQADgdALgVIAAAFQgCAnA8A0QA1AsBIAKQgaAcgnADg");
	this.shape_33.setTransform(41,18.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AgxCNIgZgEQgigIgfgSQg/gmgFgiQgFgjAYglQAOgZAVgNQAKgHAMgDIABAAIACgBQAOgJAngFIAAAAQArgGAMgEIABAAIAhgUQAUgMAKgCQAQgDAIACQAKAEADASQAEAUgPAOIABAAQg6AggZAIIABABQAAADACADQACACADABQAkAKATADIAHABIADABQAcACAsgGQApgGARAEQANADAEAOQADAKgJAMQgKALgPAFQgLgahDgBIgCgBIgsAEIAAgDQgBgCgDgBIgBABQgBADgyAjIgfAUIgTALQgQAJgLADQAAABAAAAQAAAAABABQAAAAAAAAQABABAAAAQADACAEAAIAPgCIABgBQAIgBAJgEIABAAIACgBIACAAQAHgBAWACQAgACARgCQAPgDAQADQAVADADAQQABAIgBAHIAAADQgCAEgHAHQgLAJhMAHIgXABQgPAAgPgCgAB1BVIgCgBQgIgTgcgFQgSgDgTADQgQADgdgDIgLgBQADgCACAAQAKgBAZgWIAAAAIAMgJQAXgBAmgEQA7ABADAUQgCAZgPALQgNAIgKAAIgEAAg");
	this.shape_34.setTransform(87.6,18.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#72EBEB").s().p("AgMBNIAAgBIgFgFIAAgBQgmgrgngwIAHgIIATgWQAjgfAugIIARgDIA/BTIACACQg7AZgaA/IAAAAIgEAJIgCAFIgQgRg");
	this.shape_35.setTransform(22.3,27.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0FF7A").s().p("Ai/B9IAAgBIgDgCIgDgCIAAgBIAIgTIAAABQAag+A9gYIAUASIgNAIQg0AggcA5IAAAAIgDAHIgNgMgAD3A8IAAAAQgogXgahDIAAgBIgDgQQAAgHACgLQARgwAsgXQgGAIgGAKQgbAtAHAqQAEAmBJArQAZAPAbAJQgPAIgHAAQgKgBgOAEIgtgZgAlHgbIAAAAIgFgHIgFgGIAGgMIAAAAQAng9BIgJIACAAIAUAaIgIACQhJAMgsA8IgEgFg");
	this.shape_36.setTransform(44.1,26.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8089DD").s().p("AhbCyIAEgJIAAAAQAXgvAngcIAcgSIABAGQAAANgHAIIA9gaQBegsBPgyIABABQAAAGAEANIAAAAQAcBOAuAZIAAAAIAhASQjJBRh5AAQhEAAgsgbgAlHhcQgCgCgDgBIgBAEIgDACIgEgEIgCgEIABgIQAAgTAMhCIACgOIABAOIAAAAQBJgNAbAQIATAOIABAAIABADIAvA+QhLAMgpBBIAAAAIgDAFIgyhCg");
	this.shape_37.setTransform(36.9,23.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC99").s().p("AgVByIgLAAQhhgBglgWQgYgPAAgZQAAguAxgQIAFgBQANgFARgCIBMgVIAlgPIgKAOIhVAUIBFgEIgTARQgfAagRAGIgIABQgOgEgJAIQAHAMASAAQAIAAAJgEQAdgKAqgrIAggjIAAAAQAGgGAIgGIgBgCQAJgJACAAIAMACIAJACQAJAEAGAIQAIAKAAAMQAAAvgaAcQgUAVglARIgOAGQgTAHgWAHIgaAGIAHAEIAHADIATgBIAQgCIAMgCIAHgCIARgGQApgQAaglQAdgqAAgoQAAgfgdgQIgEgCIADgDQAOgLAUAAQAsAAAAA7QAAAqgyApQgkAXgKAJQgaATgWALIgRAIIgDABQgJACgIAAIgBAAgAC0g0QAAgwgogMIAIgBQAaAAALAPQAGAKAAAMQAAATgMAYIABgTg");
	this.shape_38.setTransform(73.7,-5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8089DD").s().p("AgnC6IgDAAIgBgDQgSgGgRgLIACgHQALgoAZgeIAFgRIAAAAIAAAAIACAAQAEAAADgCIAOgNQBNhDA6hYIAAAAQAVgfASggQALAdAgAfQAsApAgAJIAXAGQh3CLiVBaIAAAAQgWAGgUAAQgRAAgQgEgAkhhTIgBgBIgFACQgDAAgDgDQgDgGABgPIADgzQgEgNAJgNIABgBQAHgMACAOQBHgLAaAQIATANIABABIABACIArA5QhLAMgqBCIAAAAIgDAEIgtg9g");
	this.shape_39.setTransform(33.1,22.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F0FF7A").s().p("AjIDCIABgDIAAgBIAEgKIAAAAQAZg8A7gYIgDAPQguAogSA+IAAAAQgMgIgKgLgAhpBgIgCAAIgBgBIACgBIAAAAIADgBIABACIgCACgAk8AzIAGgKIAAgBQAng6BIgKIADgBIALAPIgFAAIAAABQhLAMgsA9IgHgJgADsgBQgKgBgbgHQgcgIgmgkQgnglgFgjIAAgBQAAgeALgVIADgIIAVgUIAKgHQgIAMgEASQgMA0AZATQAuAhB2AAQAIAAAKgEQAAANgEALIgDACIgBAFIgCADIgCADIgCAEIgBADIAEgBIgBADIgDgCQgOAUgVAKQgOAGgQABg");
	this.shape_40.setTransform(41.5,16.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgDAHQgBgBAAgGQAAgFAEgBIAEgBQgCABgCAEQAAADgBAHIgCgBg");
	this.shape_41.setTransform(-0.2,11.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#72EBEB").s().p("AhngUQAYgjAfgZQAdgXAQAAIAqArQAxAyAQAMQgSgBgmAnQgmAngFAZQgHgIhlh0g");
	this.shape_42.setTransform(21.3,26.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F0FF7A").s().p("ADyB4QgegdAAgeQAAgzAagcQAQgTApgVQgWAhgEAKQgLAYAAAuQAAAdALAcQAOAlAZADIgIACQgegIgcgagAidBbQAfhDAngXQAmgVAQAfQgiAHggAvQgRAYgKAXgAkzhNQALgaArgeQAugfAQASQgNAFgpAfQgtAigFAPg");
	this.shape_43.setTransform(39.2,29.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8089DD").s().p("AAyDIQg1gNgogUQAPguAmgbQATgOAWgJIAWAOIgIACQgCACAAAHQAAAGACABIABAAIBGgJQAsgIBVgcIACAAQgGArAAAGQgBAMASAdQAWAmAeASQgmAEg5ADIg8ACQhAAAg9gNgAk6iHQgHAKgIAAIAAAAQAAgHACgEQACgFADgBIASgdQAQgcAHgJIAOgEIABAHIgBACIACgFQAEgEAGAAQAMAAAeAWQAXARAVAXIAVAYQhHAZgiA2g");
	this.shape_44.setTransform(32.6,24.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCC99").s().p("AiOCdQgggWAAg5QAAgpAPgeQAXgtBAgrQATgNAYgrQAVgkAKgBQAMAAALAPQALAPgIAMIgaAsQgUAmgLAKQAAAAAAABQABAAAAAAQABABAAAAQAAABABABQAAAAAAAAQABABAAAAQAAAAAAAAQAAABAAAAIAGAAQAhAAALgFIAegTQAbgMBGgyQAHAAAGAEQAKAHAAAOQAAAIgEAKQgEAOgIAGQgKgIgJAAQgVAAgYAOIgyAeQgCgEgEgCQAAAXgZAqQgWAqggAkIACACIAFABIA/gyQAxgiAVAAQAKAAAIAJQAHAIAAAJQAAAghIAqQhDAogrAAQg7AAgagSgAAKA6QAFgEAYgyQATgWAkgQQAagLANAAQAYAAgEAkQgFAigWAAQgFAAgDgFQgEgEgFAAQgbAAgcARQgeAVgRAJg");
	this.shape_45.setTransform(84.2,26.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#72EBEB").s().p("AhWACQAFgYAHgKIAAAAQAKgSAQgRIACABIABAAQBFAdA/AhQgKAHgMAOQgVAYgLAbQg3gkhAgeg");
	this.shape_46.setTransform(34.4,18.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8089DD").s().p("AAgANIACgCQAIgOAMgRIAAgBQAOgWALgKIAAAAQAEgGAEgDIABAAIADgCIAJAFQCPBPBpB2IAKAKIAOARQgPAFgWASQgXATgPATQgMAQgJAWQhoiViMhmgAlgimQgEgCgDACIAAAEIABAMQADAKgBADIgBAEQgCAEgDAAQgJAAAAgcIAHhDQgCgLACgKQACgRAKgBIADAAIAAADIgCAOIAAAAQBdAZBUAfIgIAMQgOAWgJAcIgCAJQhFgdhMgSg");
	this.shape_47.setTransform(40.8,28.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F0FF7A").s().p("AC+DkQAIgYAMgQQAOgRAWgSQAZgUAOgBIABAAIADABIAAAAIADABQgTAOgRARQgQASgNAVQgJAOgIAPIgUgFgAhyhEQAKgaAUgXQANgQAMgJIAiATIgIAIIAAAAQgMALgPAZIgVAhIghgWgAkjiiIACgKQAJgZANgUIAAAAIAJgPIAbAKQgOAQgKAQQgHAMgGAaIgXgKg");
	this.shape_48.setTransform(50.9,33.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC99").s().p("AgiB+QgPgEgNgIQgQgLgMgLQgDgEgGgCQgZgKgbgEIgWgFIAAABQgXgEgNgRIgCgDQgBgXASgKQALgFAMgCIAIABIARAFIAAAAIApASIATAKIAFgCIgWgdQAHgWAQgWIARgTQAVgVAZgOIASgLIAOgGQAWgJAZgGIAXgEQAPACAKAJIAAAAIACAaQABAJgJAFIgcASQgWAMgWAOQgRAMgRAJIAAAAIgOAHIAJADIAOAFQAdANAdAXIAgAaIgBgFIgIgUQAkgKAkAGIAMADIAVALQAGADAEAEIAGAGQAIANgLANQgDADgFAAQgIADgHABIg9gEQgZADgZAFQgMABgMAFIgXAKQgWALgUAAQgJAAgIgCgAAaABIgIgCQAKgIAOgJQAhgVAlgQQAXgLAbABIAQACQAKADAGAJQAGAKgDAJIgEAJIgBAAIgLAGIgLAGIAAAAIglAKQgYAFgUANIgQAMQgYgRgXgLg");
	this.shape_49.setTransform(84.1,56.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFCC99").s().p("ABPB6QgTgmgrgnIADAFQAEAGAAAGQAAAKgDgFIgCABQgmgHgkghQgggaAAgDIAAAAQAEgPAIgIQAQgRAGgUQgeAbgoALQgPAAgWgHQgbgJAAgOQABgPARgKQAQgJApgJQADAAAkgbQAYgRA7AAQBVAAAzAeQAmAXAAATQAAAZgrAAQgKAAg7gTIhIgZQAbAQAYAjQAcAogQAhQANgGACgNIAAgCIAPAfQANAaAGAGQAMALALADQAIACAAAEQgBAqggAAQgWAAgJgTgAB7BBQgHgHgGgUQgCgHgMgSQgLgOgDgCQgFgFgIgRIgLgYQA3AUAVABIAXADQAFACAMAQQAOARAAAQQgBARgKAOQgMAQgTAAQgQAAgHgIg");
	this.shape_50.setTransform(49,72.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8089DD").s().p("AEFD7QgZgHgeAAQgOAAg/AHIADgGQAahIAAgcIgCgjQAAgGgNgbIgMgaQAJgRAPgRQAfgeAiAAQANAAAUAtQAEAJgBAAQAcAzADAjQAEAoAAAqQAAAKgGAqQgHgFgRgFgAkSiqIgBAAQgGAHgEAAQgEAAgBgEQAgg1ANgRIASgUIAGgBQAAgBAAgBQABAAAAABQAAAAAAACQAAABAAADQAAAGgBABIgBABIBKAaQA2ATA+AcQgZAYgJAKQgPAQgEAVQhagvhjgWg");
	this.shape_51.setTransform(29.7,28.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F0FF7A").s().p("ABaC5QBKABANAUIAAAEQgsgFgKAAQhhAAguAkQgEg4ByAAgAgOhAIgCgDQAAgFAGAAIAageQAdgfAXgBQAGABAGAHIAQATIAAAAQgbAHgYASQgXATgOAYIgWgZgAiviqIgBAAQgDgTAbgbQAUgTALgFIAfAOIgBACQgoAYgNAug");
	this.shape_52.setTransform(40.7,36);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#72EBEB").s().p("AhYAAQgCgOAbgcQAagaAJAAQADAAAxAeIBBAmQgYAGgZAXQgWAVgIATIhihFg");
	this.shape_53.setTransform(36.7,21.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCC99").s().p("AhjCFQgCgFAAgTQAAgaBKgsIBQgoIgGgCQgvAKgnAUQgEACglAbQgiAbgFAAQgPAAgKgNQgGgKAAgIQAAgYAogiQA0gwBQgMQgtgHg7AeQg0AagVAeQgRgGAAgHQAAgfA6gmQA8gpBDgMIACgBQAAgFgJgDIgqAIQAkgPAQgDIBkASQAgAUAPAlQAJAbABAdQAAAngSARQgKAHggALQg3AShCAiQg2AagJAAQgWAAgGgJg");
	this.shape_54.setTransform(-5.8,58.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#72EBEB").s().p("AhlAPQALgjARgVQAPgTAfgRICBBEQgcAPgKAKQgJALghAzg");
	this.shape_55.setTransform(30.3,21.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F0FF7A").s().p("AiBDsQAJgRAAgoQAAgnghgpQgfgngYgBQBCgOAJAAQAkAAAZBBQATAyAAAlQAAAKgIAgQgJAEhJARIAOgYgABZhJIAYgtQAVgcANgGQAZgLAlAXQglAXgTAUQgPAQgQAegAhkilQACgjAmglQAogoAUAeQgfAQgVAnQgKASgHAWg");
	this.shape_56.setTransform(25.3,37.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8089DD").s().p("AhPCNQA+gHBlgvQBbgpAJgNQgBgEgsANIgKgGQAYglAUgSQANgLAggUQAoAoAJAKQAYAeAAAcQAAA1hGA2QhXBDiyA4QAAhEgjhPgAjbiDQgQgHgjAAQgIgYgGg7IgGg7QAAgJAEACIAFAMIDhBUQgSAIgWAbQgZAggEAfQgbgKhDgcg");
	this.shape_57.setTransform(26.1,30.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFCC99").s().p("AhUCqQgogIgdgbQgRgPgJgUQgDgHAAgGIgGhCQgBgNgGgKQgJgTgMgTQgKgPgIgQQgEgGgCgGQAKgXAZgDQAEgBAFABQAcAJAQAaIAMAYQAEAKADAMQADASALALIgDgzICPhfIAAAAQAngaAtAAQAPACAMAJQALAIgIAMQgIANgNAIIgdAVQgKAHgLAFQgmAUgnATIgagKQAvA9AfBLQABAEACACIAGgZQAggWAmgIIAugKQAtgIAeAhIAAAAQAGASgRANQgMAKgPACQgaAEgZAGQgwAMguARIg4AUIAAAAIgdAOIAAABQgSAKgUAAQgIAAgJgCgAATABIgWgjIBhgxQAlgTAqgHQAKAAAKACQAKACAKAHQALAGgEANQgCAJgEAHQgFAJgJAHQgiAcgpAPQglALgmAMIgQAGIgPgYg");
	this.shape_58.setTransform(108.5,-71.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8089DD").s().p("AmUGLIgEACIgFgGQggg+AAgSQAAgGAEgRIDFi/IABAAQAMAgAUAaIAiAjIjTC/IgMALIgHAHIADgEgAAAhmIgGgRIFGkXQAMA1AoAmQAfAeArAOIloD7Qg8gdgag9g");
	this.shape_59.setTransform(47.9,-19.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F0FF7A").s().p("AlqE2QgdgcgGgtIAcgaQAUA/A5AgIgiAdgAjEBiIgRgeIAWgTIAAAAIAFgFQAVA9A4AjIAQAKIgZATQgwgYgegvgAEyh0IgKgEQg0gOgmgoQgeghgIgpQgFgXAQgRIAWgUIAigaQABAhAHAjQABAHADAHQAWAqAtAUQAhAQAjgEIAQgEIghAoIgBAAQgUAVgcAJIgCAAQgEAAgEgEg");
	this.shape_60.setTransform(64.6,-34.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#72EBEB").s().p("AhqAaIgFgPICBh2QAZA5A1AhIAQALIiRByQg0gcgVg2g");
	this.shape_61.setTransform(40.1,-15.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#72EBEB").s().p("AgFApIg0gFIgQAAIgJgQQgNgWAAgNQgBgJAHgUIAEgNIAiACIBPAHIBEAMQgLANgCARIgGAaQgDAUAGASQgsgNgpgEg");
	this.shape_62.setTransform(37.3,7.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F0FF7A").s().p("ABiEjIAEgRIAEgbIABgLIAKAcIAIgDQgDgsgWgnIgOgXQgXghghgWIgFgEIgQgKIgNgHIAEAEQgRgEgPAJIAAgBIACgCQATgYAggCQAFgBAIACQASgBAIAGQAiANAcApQAhAuAAAUIAAACIABAMIAAAFIAAACQAAAtggAlQgTAXgbANQAJgNALgUgABvjIQgOg6AXgdIAHgJIAYAHQgUAhAAAnIABAJIAFAQgAiTj1QgIgSAAgDQAAgKAFgQQAEgQAAgJIgBgDIATgDIAfAAQgHAOABAcIAHAhQAEAMAFAIQgZAAgXADQgEgGgIgOg");
	this.shape_63.setTransform(36.5,33.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8089DD").s().p("ADQDzQAAgdgrg3QgjgtgkgMQAYgbAOgZQAYgrAMgkQAKglAHglQAEgRgHgRQgGgPACgRQAFgcANgZQA8AWAnA0QAHAKAFALQANAcgCAfIgDA1QgFAegJAnQgRBIgWArQgYAvgfArIABgQgAkshmIgBgGIgEhEQgEgVAAgGQAAgHgDgLIAAAAIgCgFIgDgRIADAAIAFAPIABAHQA9gUAPgCIBjgPIACAAIgFATQgFAZAAANIAGAXQAEAKAEAGQh7ARgqAeIABAKIABADIgBAJQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAABAAAAQgFgEgCgGg");
	this.shape_64.setTransform(33.7,27.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC99").s().p("AgvCAQAcgCATgNQghAKgigLQgQgEgLgLQgJgHgCgMQAhAHAYgTQgvAHgggcQgIgHgCgJQgFgPACgOQAAgHACgIQAIgTAVgNQAUgMAXgEIATARIggAmQAggKAUgYQAQgUADgXIgFgGQgGASgQALIgTgOQgCgYAQgSQAKgMASgFQANgEAQgBQAXAAAWAGIAHADQAXAKAKAKIAIAKIASAaQAUAsgKAtQgCAWgMATQgGALgJAIQgnAng5AUQgPAIgSAAQgRgBgKgMg");
	this.shape_65.setTransform(30.9,58.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAAABIAAgBIAAgBIABADIgBgBg");
	this.shape_66.setTransform(2.2,5.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFCC99").s().p("AAnB+QAIgFAHgIQAHgHAGgJQARgdAGgjIADgVQADgQgNgIQgEAmgQAkQgIAWgNAQQgOAPgUAFQgTAEgWgBQgUgCgLgOIAOgCIAZgKQALgGAJgJQAfgiANgsQACgFABgJQACgHgFgGQgDAFgCAFIgLAVIgJASIgKASQgTAogtAIQgTAEgRgGQgNgDgGgNQgEgKAFgKQANgUATgSQAdgYATggQAJgPgFgPIgIATIgHAJQgCAJgUAIQgTAJgXgBIgEAAIgSgGIgLgfIAZgSIAEgBIAIgCQAOgGAOgDQASgFAOgKIAfgXQAYgGAdAEQAiAGAaAYQANALAMAQQAaAigJAmQgEARgIASQgTApgjAeQgQAOgUAGg");
	this.shape_67.setTransform(40.9,74.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F0FF7A").s().p("ACeEOIgEgGIgBgDIgPgTIgOgOQgQgMgRgKQgWgOgYAAQgZgDgWAGIgOAGIAEgMIgBgKIAJgMIAEgGQAVgFAVgCQAIgCAOAAQBEAAAZAvIADAGQALAXAAAfQAAAJgFADIgDAJIgFgKgAgKhjIAEgIIAAAAQAagxA1gLQAOAMAOAQIAAAAQgzALggAtIgGAJQgLgOgLgLgAiPjEIgagNIAAgBQgDgSAQgOIAAAAQAhgkAKgBIACABIAeAPIgBABQgrAYgNAtIgFgDg");
	this.shape_68.setTransform(39.6,40.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8089DD").s().p("AENEXQgOgQgkgRQgfgMgRAAQgKAAgFADIgCAAIgfADIADgGQA3h9gzhFIABgCIAHgKIAAgBQAfgpA0gHQAPAUALAVQARAhALAlIAAAAQAJAjACAmIAAAAQABAfgJA8IgBAJIAAAAQgCARgEAAIgCgBgAjEipQg7gUgOgDIAAAAIAAAAQgHAHgDAAIAAAAIgFgBQAAAAAAAAQAAAAgBAAQAAgBAAgBQAAAAAAgCQATgeASgZQATgbAJgFQAIgFgBAKIgDAGIABAAIA1AVIAxAVIBIAeIAOAHQgOALgWAXIAAAAQgSAQgBATQhFgjgtgQg");
	this.shape_69.setTransform(29,30.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#72EBEB").s().p("AhYAAQAKgpAmgVIAKgFIADgCQAYAMAUAOIA/ApIAJAEQgzAPgcAxIgCAEQgpgog3geg");
	this.shape_70.setTransform(36.2,22.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC99").s().p("AheBjQgZgNACgPIAMAGQASAHASACIgQgGQgWgKgQgUQgQgUADgQQACgGAEAAIADACQAJAFAQAEQAOAEAIABIgKgFIgIgFQgLgJgLgSQgKgSAAgIQAAgfAdgOQAUgJAYAAQANAAAQAHQAVAJgCAQIgwANQAUAFALAAQARAAAUgJQAYgKAIgPIgHAFQgNAGgPAAQgGgLAAgKQAAgKATgIQAPgGAQgBQANAAAUAJIAVAKQAQAGAJAjQAHAaAAAZIAAApQAAAbgVAUQgWAUhPAFIgcABQg3AAgbgOg");
	this.shape_71.setTransform(3.9,34.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8089DD").s().p("AgtCWQAAgJgFgpIgIgzQAggFA8gCQBHgKBzgtIgtAFQALgXAjgoQAyAWAWAXQAVAXAFAsQgYA1hCAiQhbAvi8AYQAFgnAAgKgAkIg5QgFAAgCAEQgCAFgCABIgBgBQgpiEgBgLIAAgHIABAAQALAIAHAIQBbAKCEAWQgYAUgNAmQgKAagCAZIiLgQg");
	this.shape_72.setTransform(33.4,22);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#72EBEB").s().p("AhjAjIAAAAQACgjANgZQALgUAagZICTAlQgsApgGAKQgCAEgOAwg");
	this.shape_73.setTransform(38.1,15.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F0FF7A").s().p("AimCOQAFgcAAgSQAAgMgFgsIgHgxQA3ACAMAJQAWAXAABlQAAAHgDAPQgEAOgDAHIhWAPQAIgKAGgggABthjQAkgoAkAXQgSARgJALQgPASgRAiIgpALQgGgkAigmgAh+hLQAIggAIgaQAQgyASAAQAKAAAVAHQggAjgIAYQgDAHgFApg");
	this.shape_74.setTransform(35.6,25.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#72EBEB").s().p("AhJA6QgOgEgDgIQgBgDABgPQABgPALgbQAMgdACgCQACgBAxgDQAugCAlgKQgKAlAAAMQAAASAIAPIAYAiQhNAHgqAAQggAAgOgEg");
	this.shape_75.setTransform(33.7,12.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8089DD").s().p("AleDOIgDABIAAgGQAAgGAMgdIAMgcIAUg0QAIAEASADQBBANAwAEQgHALgJAoQgHAiAAAIQAAAKAEACIgBADgACBCeIgKgaIADgoIAegFIAnAoIAAgYQgIgZgcgYQgXgSgSgGQArgYAfgsQAng3AAhBQAAgIgEgTQgDgVgEgLQArAlA0BYQA0BYgKAmQAABBgsArQgzAyhnAPQgNgTgNgegAkoBDIAFAAIgIACg");
	this.shape_76.setTransform(36.3,-4.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#F0FF7A").s().p("Ai5D4QgFgHAAgSQAAgRARg8IAuADIgKAUQgJAUgFAcQgEAcADAPQgZgDgIgJgAA3DrQgPgVgDgSQAAgnAEgJQAJgYAlAGQgMAjAOAmQAMAdARAPQgfAHgKAAQgHAAgPgTgAh/CVIAAAAgABAAxQAHgOANg/QAAgFgEgRIgDgSQADgQAOgsQALghgBgqQABgagKgeQAyAXAXAfQAXAfAAAqQAABOgvAtQgOALgbATQgdATgJAJg");
	this.shape_77.setTransform(38.1,-7.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCC99").s().p("AAYCdQgVgbAAgmQAAgQAJgYIAEgLQgNAAgFAFQgLAKAAAsQAAAKAHAXQAGAaAEAKIAHAIQgWAFgLAAQg1AAgcgjQgYgdAAglQAAgJAFgXQAEgZAFgSQgaAVgFAkIgCBBQgFgLgRgPQgOgRAAgkQAAhMBChMQBJhVBcAAQBKAAAiAoQAaAeAAAsQAAAzgNAoQgSA6gvA+QAKgDAPgKQAVgNAEgMIAFgKQAFAxgUAbQgTAYghAAQgsAAgZggg");
	this.shape_78.setTransform(28,-20.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgFAHQgDgCAAgDQgBgCACgDIAEgFIANAIIgEAFQgDADgDABIAAAAQgDAAgCgCg");
	this.shape_79.setTransform(16.7,15.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC99").s().p("AgyC1IAAAAQgZgFgTgRIAAAAQgVgUgEgeIgCgEIABgEIAAgIIAQgmQAKgVAOgnIAAgBIACgEIAAAAIAAgBIABgCIAAgBIABgCIAAAAIABgBIABgEIABgDIAAgBIABAAIAAgBIADgJIABgBQAFgIAGgFIAAAAQAHgGAHAAQAOAAAMAMQAIAIAEAJIABABIAAAAIAAABIAAAAIABAFIAAACIABAAIAAAAIAAACIAAAGQAAAfgVAjIAAgBQgJAQgJAHQgFAKgPAMQAbAJAbgsIAAAAQAUgmABgiIARAHIABAAQAJAGAGAGQAPAIAIAGIACgDQABgDgBgEIAAAAIgCgEIgHgJIgDgEIABAAIABgBIAAgBIACgEIACgFIABgBIAFgKIADgHIAHgQIAAAAQAJgZACgaQAKAEAIALQALAPAAAVIgCARIgHAVIgHARIgTAoQgXApgWAfIgEAFIAAABIgCADIgBABIgDADIgBACQgJAKgSAPIgNAKQgIABgLAFIgPAEIgHgBgAApgMIAAAAIgKgFIgSgJIAJgQIAMgcQAFgTAAgxIgBgTQAKACALAKQANAMACARIgCADIADALIAAAAIAAADIAAAAIAAAEQgCAWgIAVIAAAAIgPAhIgBACIgEAIIgEgDgAgEg4QgTgSgUABQgJAAgIAEIAAAAIACgKIgBAAIAJg3QAHguAigBQAOAAAHAHQAFAFACAJQACAJAAANQAAAugEARQgEANgKARIgHgLg");
	this.shape_80.setTransform(120.7,-38.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#72EBEB").s().p("AhRA7IAAAAQgMgkgEgiQBRg3BcgjIAAAZQAAAlARAxIAFANQgaAKgZALIAAAAQg9AcgxAeQgKgTgIgYg");
	this.shape_81.setTransform(44.6,-17.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8089DD").s().p("Al3EKIgPgKIgZgRQglgbgTgSIgJgJIAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAABAAQAFAAAIAEQBTh+BihRQAJAgAWAjIAAAAIAUAdQgSAOgPAQIAAAAQg/A/g2BKIAOALIAKAHQgHAIgBAAQgDAAgHgEgABXhKIgBgBIgDgKIgMgiIAAAAIAAgCIgBgBIgDgSIgDgOIgEguIARgGIABAAIABAAIADgBIAFgCIAAAAQBRgYBHgOIAlgGIAMgCIADAAIACgBIAEAAIAAAAIAHgBIATgDQBKgIBUgBQgVAqgEAnIAAALQAAANABAMQAEAdAFAQQh8gIh6AQIgBAAQg8AIg6AOIgBABIgNADIAAgBg");
	this.shape_82.setTransform(55.3,-10.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F0FF7A").s().p("AmLCVIAAAAQgXgmgHgjIAGgFIAAAAIAogeQAEAhALAiIAAgBQAJAbALAUQgRALgPALIgTgbgAiaAvQgQgvAAghIAAggIA3gTIABACQABAhAGAcIABAFIAAAAIADAKIAAACIABABIADAIIAKAdIACAGIgFABIgwAPIgJAEIgFgNgAGFAbIAAAAQgSAAgSgEIAAAAQgRgEgCgDQABgCgDgGQgBgDgCgBIgDgCQgEgDgFgrIAAAAQgCgPABgQIAAAAQADgqAagtIAAgCIABgEIAAgBIAAgBIgBgDIAAAAQACADATgDIAAgBIANgBQAJgBAGACIAAgBQgMAkgJATQgTAqABADIAAAKIACAEQgBACAAADQAFAkAaAWIAAAAQARAQAXAHIghACIgEAAIgBAAg");
	this.shape_83.setTransform(71.2,-21.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCC99").s().p("AArBuQgTgtgYggIACAEQABAGAAAFQAAAKgDgFQgagEgcgeQgZgbgDgYQAHgDAHgFQAQgMAIgQQgKAHgOAGQgVAKgNAAQgRAAgUgNQgUgMABgLQAOgVAbgBQAaABAbgNQAagOASAAQAzABA7AWQBFAaAAAlQAAAGgNAIQgMAIgIgBQgIAAgrgUQgugVgMgNQgHgFgHgBQARAJAOAaQAPAbAAAWQAAARgJAOQAPgGAAgIIABgBQADAEAFAVQAFAVACAEQACAEANAMIAMALQAAALgJAMQgJALgHAAQgWAAgIgTgABHAZQgSgsgDgVQAnAVAoATQATALAAAaQAAAUgOAKQgMAJgSAAQgMAAgVgzg");
	this.shape_84.setTransform(34.4,94.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#72EBEB").s().p("AgyAgIg5gxQALgKAOgTQASgTAjgYIAdAWQAWARAfAbQAoAgAPATQgPACglAUQgsAXgKARQgSgagiggg");
	this.shape_85.setTransform(34.1,27.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8089DD").s().p("ABzFtQg5gUgeAAQBojMgqiHQAGADgCgJIAEgDIALgLQAVgUBMgWQAVAeAKA2QAGAkAAAcQAABpg7DJQgPgOg2gTgAjckZQgGAAgCADIgCAEIgHAAIgFgIQgFgRAWgoIAagtQAAgBAAAAQAAAAgBAAQAAAAAAAAQgBAAgBAAIgDACQgMAMgIAFIATgYQAEgFAIgCIACAGIAAAAIABABQABAHAAAIQBjA5A5AoQgFADggAcQggAfgFAGQgogfhIgog");
	this.shape_86.setTransform(28.4,42);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F0FF7A").s().p("AALE8QgwgFgfAVQAYgkANAAQAWAAA2AQQA0APAJAHQhCgPgdgDgAARhpIAdgWQAfgWANgGQAKgEAQgNQAPgEAPAmQgvAJgmAZQgTANgMALQgNgPAAgKgAiRkIQAIgMAXgTQAfgZAOgNIAdAUQgfAXgSATIgbAeg");
	this.shape_87.setTransform(33.6,48.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFCC99").s().p("AgGBwQgPAAgMgGQgPgHADgQQADgNAIgJIAPALQAVAJAYABQgDANgJAJQgJAIgKAAIgBAAgAg+BJIgXgFIgIgCIgZgIQgbgHgJgZQgJgYADgaQADgWAOgPQATgVAXgOIADgCQALgGANgEIALgCQAhgFAbATIADAJQALAVgBAbQgBATgHARQgDAIgIAIQgFAEgGACIgKACIgEABQgIAAgGgCQgJgDgGgGIgBgDQgCgWACgZIABgDIACgcIAAgGIAAgCIgBABIgCAEIgHAQQgEANgDAOQgEAVABAUQABAQARAGIAJAEIACABIAGAFIAAAEIgKAPIgFAKIAAABgAgFA7QgOgFgJgLIAHgDQAGgBAFgDQAWgLAIgZQAYANAUAaIgBAHIgOANQgHAFgIAAQgVgBgSgEgAB7A+QgagEgOgVIgDgEQgMgPgOgNIgbgWIgCgDQAHgjgNghIAcALQAbAMAbANQAWAKAQAQQAUAVACAaQABALgBAKQgBAHgFAFQgKAJgMAAIgKgBg");
	this.shape_88.setTransform(102.7,39.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8089DD").s().p("AEcDlIgggBIAAAAIgfgBIghgEIAAAAIgkgEIABABIglgHIAAAAQgbgGgZgIIgBAAIgJgCIgCgCIAAgBQABg+AsgtIAAAAIAJgJIAYAEIABAAIAjAEIAAAAIAkACIAAAAIA2AAIABAAIAlgBIABAAIA4gFIAAAAIAVgDIgFAOQgQAwANAyIABACIAOAjIgSAAIgBAAIgsABgAkFAEIAAAAIgWgXIAAAAIgUgZIAAAAIgVgcIgSgbIgBgBIgSgbIgBAAQgBAFgHAAQgEAAgCgDIgBgBIgBgDQAAgGAGgBQADgPAQghQATgmAGgGIACABIABAEIgEAJIASAdIAAAAIATAcIATAbIABAAIAVAaIAXAYIAYAYIABAAIARAOQgsAWgQApIgPgRg");
	this.shape_89.setTransform(41.7,23.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#72EBEB").s().p("AAaBGIAAAAIgfgQIgBAAIgbgPIABAAIgbgRIAAAAIgagTIAAAAIgUgMQADgCABgDQAOgpAmgUIAAgBIAKgFIABAAIAXAOIABAAIAbANIABABIAdANIAAAAIAgALIABAAIAeAIQg1AngDBAIgYgMg");
	this.shape_90.setTransform(33.7,32.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#F0FF7A").s().p("AE/CJIAAAAIgogMIgJgCQgEgCgCgDQgFgFgCgGQgHgSgFgWQgJgyAXgwIAGgDIAAAAQAtgfAgAFIAAAAIALACQgWAOgSAVQgMAPgDASQgFAcAGAaIAFASIAEAIIAEAGQAGAHAHAGQAQAMASAGIAHACQgQAJgSAAIgNgBgAh5BOIgEgBIgPgGIgFgCIAAgCIAAgBQACg7AygjIAAAAIAKgIIAMADIAAAAIAXADQgwAvgCBEIgXgHgAldg3IgBgBIgPgNQAMgsAqgVIAAAAIAGgDIADADIAAAAIARAMIAAAAIANAJIAAABIgBABQgrAXgQAxIgRgQg");
	this.shape_91.setTransform(55.1,34.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCC99").s().p("Ag5CrQgegyglg2QgdgqgLgbQgGgSgBgVQABgKAIgUQAJgUAFgGQAHgHAhgWIAggHQAAgGAjgCQAogDAFgFIAsgbQANgIATAAQAHABAGAFQAJAIAAALQgBATgbAPQgFACgnAKQgdAJgKAPIAhgFQAGAGAwAiQAtAgAOAOQAaAaAJAdQgBAQgJAJQgIAIgFAAQgGgBgDgBIgFgEQgNgEgmgpQgmglAAgHQAAgGACgCIACgEQgmAWhoAwQABABAAABQAAAAAAABQAAAAABABQAAAAAAAAQACACAGAAQALABAMgHQAlBJANAmQAAALgGAJQgJALgQgBQgJAAgIgNgAA7CUIgCgBQgKgHhIhwIArgYIALAMQABAGAjAnQAdAhAAAgQABAHgKAJQgJAHgHAAIgKgBg");
	this.shape_92.setTransform(86.5,86.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8089DD").s().p("ACqEZQg/hMhOhYQAcgoA2gUQALAAAQADQBZBXBkBkIAcAbQgRAEglAVQg1AfgOAfIhAhQgAkOjTQgyg2gfgSIgDgDQAegeAKgYQAIgTACgBIAFADQAEAGgFAHICyCfQgRgCggAWQgaATgGAJIhDhKg");
	this.shape_93.setTransform(37.5,40);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#72EBEB").s().p("AhsgrQAggfAUgIQANgEAagDIB4ByIABAAIAFAFQgcgEgiAeQgTARgNARQgngxhUhUg");
	this.shape_94.setTransform(33.3,36.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#F0FF7A").s().p("ACDEgQgSgZAAghQAAgLArgiQAsglAfgHQAqgJAEAAQANAAALAHQAKAHAMAOIgJAAQhQAIgoArQgnArATA/QgZgFgSgYgAiOhQQAJgaAagPQAYgOASgGQASgGAfAkQgRAEgeASQgmAWgLAWgAlBkRQAUgYAXgMQAqgVAcAmQgQABgZANQgeAQgOATg");
	this.shape_95.setTransform(50.6,55);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8089DD").s().p("ACsAbQgYgHgEgHQgEgGAAgaQAAgeAKgZIAVgrQA7AGBrAlQBdAhBEAhQggAQgaAdQggAjgPAuQhzg7hqgggAnoBEQgDgHgDggIgDglIACgYQACgRACgGIADgEQAEAFgBADQACgGBTgVQBTgVBAgMQgJAjAAAMQAAAIAEAWQAFAWAEAMQg+AFhRAUQhQATgLAEQADAQgBACIgDACIgDAAIgBAAg");
	this.shape_96.setTransform(50.6,11.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#F0FF7A").s().p("ADkCQQgQgQgBgbQABgSAUggQAYgjAfgVQBVhBBEBLQgxAQggAcQgcAZgaAuQgOAcgFAFQgFAGgSAAQgVAAgOgPgAhngaQgQgEgBgHQAAgtAPgmQAJgXAMgPIArAGQgPAegGAPQgKAaAAAgIACAfIghgIgAm3hkQAAgVALgQQAQgYAlAGQgFARgDAZQgEAXAAAJQAAAKAFAgIgsAFQgNgQAAgyg");
	this.shape_97.setTransform(70.2,14.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#72EBEB").s().p("AhRA3IgvADIgCgtQAAgnABgIQADgRALgHQAOgIBvAAQA6AAA+AGQgJATgLAkQgLAlABAVIAAAOQAAgGi1gGg");
	this.shape_98.setTransform(46.3,4.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFCC99").s().p("AgbBpQgZgSAAgPQAAgGAGgIIAGgGIAsARQgOgTgQgKQgVgMgcAAQgGgBgGAEIgFADIAKABQAMADAMAIQgNAXgUAAQgMAAgRgJQgZgMAAgTQAAgDARgZIAVgeQATgdAqggQAqgfASAAQAeAAAyAnQA0ApAAAgQAAAHgDADIgFAIIgZglIAHAPQAHAUAAAGQAAAwgcAJQAAgFgKgSQgJgSgFgFIAEAKIAEAUQgBAjgZATQgUAPgbgBQgNAAgYgRg");
	this.shape_99.setTransform(114,29.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8089DD").s().p("AEHD6QgvgQg6gWQhUgggrgXQAJgYAOgSQASgXAVgLQAWgLBZAbQBaAaAVAEQgTAUgTAqQgTAtAIARgAkchtIgSgYIgMgPIAghgIACgGQAEASApA3QA2BIA5ApQgRAFgVAQQgVAQgSAWQg4hFgbgjg");
	this.shape_100.setTransform(36.2,28.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#72EBEB").s().p("AgsAjQg2gjAAAAQAAgWAbgZQAcgZALgCQALgDA0AeQA1AeAPAHQgYAEgfAmQgVAdgGAPIg9gpg");
	this.shape_101.setTransform(32.1,34);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F0FF7A").s().p("ACfB0QAAhKA4gnQAxggAxAMIgBABQgjAQgeAxQgcAtAAAbQAAALAMAwIAAABQhIgVAAgsgAiBAIQACgVAhghQAngmAlATQgaAAghAlQgdAfgBARgAk4h5QAMgYAdgRIAFgDIAagPQAYAEALANQgOAGgdAbQgeAcAAALg");
	this.shape_102.setTransform(48.6,41.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC99").s().p("AhRCDQgNgLAAgNQAAgdAXgUQAAAZAdATQAPAKATAGIgeAUQgGADgOAAQgKAAgNgKgAAOBaQAAgaAmg3QAkgygGg7QAQAVARAoQAPAkAAAEQAAAygXAgQgWAfgfgBQgoAAAAgXgAgrBOQgIgMAAgWQAAgIAHgMQAIgNAJAAQADAAAMAGQALAHATgBQgDAFgJAjQgHAiAAAGQgfgGgLgTgAh3AnQgKgUAAgTQAAgsAagoQAlg4BJAAQAcAAARAUQAQAUAAAZQAAAlgUAYQgSATgVAAQgOAAgNgJQgMgKAAgNQAAgKAFgOQAJgYAQgRQgRAHgNAOQgSAVAAAfQAAAFAEADQAEADAAAEQAAACgJAHQgLAMgHAOQgIAPgJAFQgNAJgEAFQgKgKgIgQg");
	this.shape_103.setTransform(85.2,55.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#72EBEB").s().p("AhggTQAPguAvgdICDBoQg7AigTAzg");
	this.shape_104.setTransform(33.7,33.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#8089DD").s().p("ACADyQgngYh1hZQAQgpAggXQASgMAUgGQA9AlBSArQB4A/BOAZQgxAqgJAPQgMATgKAxQiWhJgpgZgAk4iuQgsg2gYguQACARgFAGQgHgCgDgGQgFgIAAgHQAAgWAJgPQANgXAfgFQABAGgDAEQAMAgCXCVIg4BFQgMgPg8hQg");
	this.shape_105.setTransform(43.7,34.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F0FF7A").s().p("ADND4QgHgIAAgSQAAgpAhgrQAigrAiAAQARAAAXAFQASAEAMAFQhEABglAeQgiAaAAAoQAAAnARANIgJABQgXAAgKgLgAjMgTQAOgjAfgcQAZgXAJAAQAKAAARASQgrAQgTAXQgHAJgRAlgAlwi9QAyhAAGgFIAWAUQgSAJgYAfQgMAQgJAPg");
	this.shape_106.setTransform(57.8,46.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFCC99").s().p("AiQBrQgdgTAAghIACgNQAEgOALgMQAjgkBdAAIAhADIggBPQALgEAQgWQAPgWACgJIAQhRQAGgXAMAAQAgAAAHAjQAIAhgRArQgSAvgiAfQgmAjgwAAQg5AAgegSgABkALQALglAAgVQAAgYgPgXQgQgXgQgBIALgFIAJgBQAWAAALATQALATAAAgQAAATgIAfQgNAvgZAQQAIgOAKgigACHANQAEgNADgVQADgXAAgHQAAgKgPg9QATgEAMARQAMARABAaQACBAgvAgg");
	this.shape_107.setTransform(100.1,61.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFCC99").s().p("Ag9CsQgbgEgagIQgKgkAVgmIATgmQAJgUAEgVQAHgZAEgaQAGgqAQgmIAYgGQAUAbgCAmQgBAWgDAYIgHA8IAKAAIAPhGQANg7gbguIgEgHQAQgZAagDQAGgCAHABQAPAggBAiQgDA4gKA1IgFAgIAFgBQANgmAIgmQAGgfABggQABgYgEgXQgCgMgDgLIAFgCQAPAFAIAOQALAVACAVQADAcgEAgQgHAwgSAtIgJAaQgIAfgTAcQgHAKgIAKQgMAMgRAJQgXAKgaABQgMgBgLgDg");
	this.shape_108.setTransform(61.3,47.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AhLC/QgTgEgTgGQgMgMgEgMQgFgRACgLQAEgNABgMQADgTAOgUQAOgUABgFIABgGQAIgUADgTIAHgnQAEgdAIgdQAFgQANgMQANgMARgGQAPgUATgNQAKgHANgCIAqgDQAMAFAJAJQAJAIAGAMQANAdABAhQABAfgFAgQgFAigMAdIgQAoIgdBIIgEAEQgTARgrAXIgBACQgWAHgXAAQgPAAgPgDgAgnh7QgQAlgGAqQgEAbgHAYQgEAVgJAVIgTAlQgVAmAKAkQAaAIAbAFQALADAMAAQAagBAXgKQARgIAMgNQAIgKAHgKQATgcAIgeIAJgaQASguAHgwQAEgggDgcQgCgVgLgVQgIgOgPgEIgFABQADAMACAMQAEAXgBAXQgBAggGAfQgIAmgNAmIgFABIAFggQAKg1ADg3QABgjgPggQgHgBgGADQgaADgPAYIADAHQAbAvgNA6IgPBGIgKAAIAIg8QACgYABgWQACgmgUgbg");
	this.shape_109.setTransform(61.4,47.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#8089DD").s().p("ABADHQg8gKgLgKQAGgiARgjQATghAKAAQAxAAA7ACQAsgEA7gqQACApAwAiQAtAhAagNIAAACQg7AihFATQg9ARggAEIgVABQgdAAgqgGgAk5gPQgTgbgcgjQgNgTgDgPQgBgKADgOQANgsAMgQQAGgJAEAAQAKAAgHACIgBAQQBWBuAjAfQASAQAGgBIgeAhQgbAhgCAFQgvgogPgQg");
	this.shape_110.setTransform(41,21.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#72EBEB").s().p("AhVADQAAgPAQgdQASghASAAIA3AbQA5AbAHADQgWAOgOAZQgNAaAAAbQgKgEhwhEg");
	this.shape_111.setTransform(30.1,29.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F0FF7A").s().p("AiuBfQAAgmANgXQAUgiAqAEQgXAYgLATQgOAagBAfIgCAAQgYAAAAgJgACyAOQgagZAAgiQAAgCAHgPQAGgSAGgJIAMgOQgGAcAAASQAAAgAYAPQAZAOA3AAQARAAAQgEIArgWIABACQgGAVgTAQQgfAag6AAQgmAAgcgdgAllgMQANgcAEgGQALgQAegZIARANQghAbgUAxg");
	this.shape_112.setTransform(53.2,28.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFCC99").s().p("AgnCnQgQgEgPgBQgjgBABgpQgBgaAXgvQAHgQAEgxQADg6ABgHQAJg2AQACQAMACAMAbQAKAYACAIQABAKAAAWIAABRIAQAAIAAhSQAAgZgLggQgKgagLgNQAGgQATgIQAMgDALgBQAQAAAIBDQAHBBgHBGQAGgBAHgkQAFgwgBgUQAAgngJghQgEgQgFgMQATAFAPATQAVAbAAAyQAACAgnA9QggAzg2AAIgTgEg");
	this.shape_113.setTransform(83.4,9.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#8089DD").s().p("AgnAdQg8gmgNgGIgFAPIgJgCIAAgNQAAgIAKgfQALggAHgJIAEgFIAGgBQgBAAAAAKQAAABArARIAuASQALAFAyAiQAvAfATAPQgOAKgYAYQgYAYgHAOQgegahDgvg");
	this.shape_114.setTransform(19.4,11.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F0FF7A").s().p("ACqCtQAagVAAg6QAAgigQgdQgTgjgogQIAIACQAfgBAbAcQAgAiAAA2QAAAsggAiQgeAgghgDIgRABgAjaiHQAPgQAGgPQAJgOAqgYIAoAhQgxAOgZAzg");
	this.shape_115.setTransform(48.2,36.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#72EBEB").s().p("AgcAjIgngjIAcgjIAZgOQATgMAGAAIAXASQAaAUAHAFQgJAMgLARQgKASgCAHQgDAMgLAHQgJAHgIAAQgEAAgcgbg");
	this.shape_116.setTransform(37.9,26.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC99").s().p("AhOCCQhEg0AAhOQAAgUAOgNQAOgLARAAQAMAAAEALQADAJAHAdQAKApAUAeQAMARAMAKIgJgPQgQgcgFgOQgIgWgGgmQgCgSgKgOQgJgMgJgDQALgqAVgVQARgRARAAQAQAAAJAOQAIAOAAAYIgEAfIgDAgQAAArAEANQADAGANAGIgGgUQgDgJAAgHIAIhsQAAgWgXgZQAOgOAHgEQANgHAYAAQAGAAAFAIQAJANAAAgQAAAJgGAoQgGAnAAAGQAAADAGAKQAHAMAJAFIgLghIANAHQBCAkgCA5QgCA6geAYQgdAXgtAAQg9AAg6gtg");
	this.shape_117.setTransform(51.6,38.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCC99").s().p("Ag+BqQgqgyAAg+QAAgXAQgOQAPgMASAAQAOAAAEA1QAFA+ANAUQAHAJACgLQgRh2gLgSQgEgIgKgBIgVgDQgEgSATgTQAQgRAPAAIARABQAEABAAAJIgFBlQAAAIACAKQABAMADADIAEADIgDgcQAAgUAEgoIAEgsQAAgMgEgFQgEgIgQgFQA8giAAA0IAAAKIgFAOIgIA+QAAAOAEAYIADABQAEACAFAFIAJAFQgIgPgEgQIgBgNQACAEAhAhQAfAqAAAkQAAAmgfAQQgVALgjAAQgoAAgogvg");
	this.shape_118.setTransform(24.6,63.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#F0FF7A").s().p("ABMEqQAIgNAAgQQAAgXgSgjQgUgpgighQA+AJAQBIQAGAbgDAaQgEAZgLAIIgGAFIgHAEIALgPgAAaiHQAegrAUgMQAZgOARAcQgPABgbAaQgaAagBAKgAh1j6QAYglALgNQAXgXAPAYQgWASggAsg");
	this.shape_119.setTransform(28.3,46.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgFADQAAgFADgCIAIgCIAAANIgLgEg");
	this.shape_120.setTransform(0.3,13.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#72EBEB").s().p("AAFA9IAAAAIhWhEQACgEAZgbQAZgcAEgDIBsBPQgQAEgUARQgXATgKAUg");
	this.shape_121.setTransform(28.2,24.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8089DD").s().p("ABtD7QgcgegiAGQBfiJAAhYQAAgFgCgJQgCgIgCgBIgQAvQgWgSAAgIQAAgTAagVQAUgRANgDQAQgDAjAoQARAXAMBDQAAAvgWBLQgbBfgsA1QgGg2gdgggAjijnIgGAOIgEAAIAAgBIAAgPQANgwAVgwIAIgHIgBAMICZBjIgcAfIgaAgIiChFg");
	this.shape_122.setTransform(24.7,36.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC99").s().p("AAHBvQgZgHAAgJIADgYIAugEQgHgDgYgFIgXgEQgVAAgaAXIAJgDQAAgBANgBIAOAAQAAAcgUAJQgJAEgSAAQgugMAAgNQAohiAIgXQASg2AQgRQAMgMAWAAQBAAAAoAaQAfAVABAYQgjgWgEgCIANAKQAMANARAnQAAAGgEALQgDAMgDADQgDgFgRgLQgQgKgGgCIAIAFQAUAUAAAfQAAASgTAVQgUAXgZAAQgLAAgWgFg");
	this.shape_123.setTransform(121,22.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#72EBEB").s().p("AhfAhIAFgxQAEgfAMgUICqATQgSAkgEARQgEAQgBAvQhIgMhcgXg");
	this.shape_124.setTransform(38.9,18.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F0FF7A").s().p("AE3BiQgJgIAAgHQAAguAXg1QAOglAOgTQAYgjAagDQAPgCAsANQgNAKgQAfQgTAjgeBNQgEALgFAaQgGAUgOAAQgdAAgPgNgAjbA6QAAgwAIgcQAGgVAPgbIA1ACQgKANgLAkQgOApABAggAnKAFQgDgUAAgKQALg6AFgOIAsAHQgLAegJBGg");
	this.shape_125.setTransform(69.7,20.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8089DD").s().p("ADoBxQh/gEhegEQAGgaAJg8QAFgdAJgIQAKgJAhAAIBnABQApAABGgEQB1gGBbgMQgYAcgOAsQgQA1AAAjQg3AEgtAAIh3gDgAnJAQIgLgcQgGgMgKggIgLgWQgJgQAAgFQAAgLAKgFQAUAMAsANQA5APBMAKQgHARgFAaQgHAkAHAVIiGgsIAAADIAEANIASAlQgCAFgGAEQgQgJgMgcg");
	this.shape_126.setTransform(53,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_31},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).wait(1));

	// Layer 4
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AE7IAIgbg8QgPgagPAAQgKAAgKANQgGAHgLAUQgbAogpAAQgMAAgOgJQgRgJAAgPQAAgPAOgPQAbgfAKgPIgWAAQgYABgUgVQgbgcAAg0QAAgGANgUQAMgSAAgDQAAgwhNiEQhHh7hJhVQhxiEg5gsQhshKiHhhQgNgIAAgCIABgCQgigmAAgTQAAgaAcgJQgHgEAAgBIABgBIACAAQDKBOC8CWQDHChDID8QAGAHAgA3QAhA1AVAHIAQAGIAQANIAIAGQAOAJAJANIALARIABADIAHAcIABAIIABAOIgSALIALADQBaAWA5ArQAuAkAAAXQAAAKgGAKQgHANgPAAQgIgBgYgHQAMAWAIAoQAAAVgkAAQgwAAg+hLIAHAQQAQAdAGAZQADANAAASQAAAngkAAQgrAAgohUg");
	this.shape_127.setTransform(58.6,59.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AivGuQgogKgMgKQgLgIgFgOIgEgPQgGgLgPgKQgNgKAAgCQAAgbAegQQAWgLBYgbQgOgGgOgRQgNgRAAgKQAAgOAHgOQAKgUASgBQAHAAAOAIIAtAZQAKgQAPgJQAcgQAVgRQAigdA3hEQA9hKAAgaQAAgYidh3Qg8gsiDheIAAgDIgCgBQAAgLASgdQARgeAAgHQAAgFgEAEQgEAFAAgFIARgNIAGgBQAAAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQG2DCAACyQAAAngUAyQgUAzgrBNQgYArhFBTQgOAQgEANIgEANQgTAcgFAEQgNALgoALIgMAOQgUASgeASQgOAHgsAIQgWAAgogKg");
	this.shape_128.setTransform(23.8,46.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AkPC7QgFgJAAgQQAAgSASgSQAVgVAigHIgWgcQgGABgZASQgcARgZAAQgVAAgMgMQgLgLAAgTQAAgTATgNQAcgVAFgHQALgNAdgSQAngZAdAIIA8AIIALAAIAKgBQAUgMANgFQAGgBAggGIAhgFQAQgHAFAAIBigwQAOgHATgOIA0glIgYgUIC0ABIACAYQAAAtgnArQgYAahlBRQgzArhWAiQgUAJgEAHIgGAJQgRAMgHAFQgZANgVgBQgcAAgJgEIgCgBQg4ASgzAWQgiANgPAAQgVAAgIgNg");
	this.shape_129.setTransform(17.8,52);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgBBwQiJgsgIgVQgdAMhYAIQghAAgUgXQgPgYgIgGQgTgLgEgDQgOgOAAgZQAAgLAGgTIAHgWQADgKAQgPQAQgPATgIQAQgHAbgGQAZgFAJAAQA3AAA4AZIBSAjIBEAeQBCAbA6ARIg3gwIDIABQAsACAVAvQAOAeAAAlQAAAyg4AhQgzAdhHAAQg/AAiJgug");
	this.shape_130.setTransform(11.3,33.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("ABFC5QgbgngYgHQgWgHgTgRQgLgLgRgcQgig5gsAAQgJAAggAIIghAHQgaAAgRgNQgUgQAAgZQAAgIARgOQATgQACgDQAHgLAGgQQAFgOAAgDIgNgfQAAgTAggZQAlgeAsAAQBEAAA0AiIApAdQAYARAUAHQASAHAtA1QARAmACALIAAAbQAAAEAoBOQAqBUAIAZIiWgBQgHAIgIAAQgPAAgSgag");
	this.shape_131.setTransform(22.4,4.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("Ah5E9QgOgCABAAIACgCIgzgQIAJjkIA5BBQAKgpAGgTIATg2QAAgCgMgRQAAgVAJgXQAOgmAIACQACAAAAgWQAAgzgpghQgqghAAgmQAAgOAMgMQAOgNAUAAQAFAAAOAGQAOAHAFAAQAFAAALgDQALgEAEAAQALAAAGgFIACgCQAGgCAGgGQAMgJAIgEIAGABQBSAAArBQQAfA4AAA4QAAAFgFAWQgEAXAAAFQAAAFAFAIQAEAHAAAFQAAAXgNAiQgOAkgOAMIghAVIgSAiQhOBsgbAiQgxA7gXAAIgMABIgYgBg");
	this.shape_132.setTransform(41.6,9.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AiMG2QgYgCgYgGIgCgBIgDgEQgbgBgQgWQgIgMgDgQIgNgIQgJgGgGgIQgEgEgCgGIABgIQADgSAPgNQAGgGAJgDIATgHQAsgIArgTQgbgHgLgdQgFgOADgOQAEgPALgKQAJgHAKgCQAMACALAGIArAYIACgEQAHgPAigSQAhgTAVgaIADgDQAhghAcgmQARgXAOgVIAVgjIALgUIgCgCIgJgKIgmglQgkghgggbQgpgkgtgiIgMgJIgOgKQgigYgggVIgwgfIgFgFIAAgDIABgCIgDgBIAAgGQAEgOAMgVIATgkIgFACIgDgDQACgDAIgGIAHgEIACgDQAFgBAEACQAYAJAXALIAyAaIAHAEIAoAXQAoAYAnAbIAdATIA0AmIAGAGIALAIIAeAdQAUAUASAVQALANAJAPQAMATAHAZQAIAagDAbQgDAWgFAWIgGATQgIAZgLAZIgYAuQgLAXgOAVIgbApIgOAUIgSAYIgiApIgPASQAAAEgBAGQgCAIgEAHQgEAIgGAHQgGAIgIAGQgXAVgeADQgJAPgOAKIgnAZQgPAJgQADQgNADgOAAQgOAAgNgDg");
	this.shape_133.setTransform(23.8,46.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AhYC4QgUgCgHgCQgSgHgPgZQgagKgpgLQgsgEgggFQg9gKAAgWQAAghAbgRQAXgQAlAAIAoADIgBgcIhTgMQgxgIAAgkQAAgPAOgPQAPgQAUAAQAVAAAggHQAggHARAAQArAAAkAaIBCAuIAYADQAbADASAFQAFABASAKQAQAAA6gWQA1gVAmgTQhCg/gcgXIDWANIABAAIADgYQANAPAMAYQAPAcAAAPQAABOg6AyQgpAmhmArQhaAdgSAAQgSgBgRARQgPARgUAKQgXAKgRAAQgIAAgUgDg");
	this.shape_134.setTransform(19.5,43.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Ai2EgIAAgJIgBAJQgjgEghgVQgCABgDgBQgDgBgCgDIgBgEQgRgNgQgRIgDgDIgFgGQgtg0gwg+IgBgBIgPgUIAAAAIgCgCQgbgjgbglQgCgDABgEQABgCACgCIABAAQgDgGABgPIADg0QgEgMAJgNQgDgCgBgEQAAgDACgDQACgDAEgBQBTgOAeAUIAUAPIAFAFIADAEIBIBdIABABIABACIBEBaIAAAAIAAABIAAAAIAGAIIAFgEIAAAAQBAg5A1hDQAfgoAZgqQAEgiAOgYQAOgYATgSIADgDIALgOQAdgkApgEQASgIAoACQAlABALgCIAAAAQAKgCAXgJQAZgKAMAAQAUAAAJAFQASAHAAAfQAAAcgWAPIAAAAQgQAKgnAHQAUAIAKADQAYAGAoABQArABARAJQATAJAEAWQADAVgTAQQgPAMgWACQgJAcgVAJIgBAAQgTAIgOgDIgDALIAAAAIgBACQgCAHgOALIgBAAQgMAHhIgFIgBACQgfApgzAEQhqByh2BSIABAAQgkAZgVANIgCABQgaAHgYAAIgPgBgAkCDrIAAAAIAAgBgAknDNIgCAEIACgDIAAgBIACgFIAAAAIgCAFgAi6BzIABAAIAAAAIgBAAgAmGA+IAAAAIAAAAg");
	this.shape_135.setTransform(49.5,14.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AlCCpIgDAAQgDgBgCgDIgBgFQgSgNgRgSIAAAAIgGgHQgngugpg0IgBgBIgGgHIAAAAIgGgIIABAAIgBAAIgJgLIgEgEIgBgBIgDgFIgBAAQgbgjgbgmQgCgDABgDQAAgDACgCIgBgEIABgIQAAgTALhDIgDgBQgDgCgBgEQAAgDACgEQACgDAEAAQBSgOAfAUIAUAOIAFAFIADAFICWDFIAEABIADACIAFAFIABAAIAAABIABAAIABAAIAAABIABABIABABIAwApIAigQQBgguBPg0QAUg7A4gZIABAAIAOgGIACAAIASgDQAKgFALgDQARgLArgGQAngFAMgEIgBAAQAKgEAYgOQAYgPAMgBQAVgEALADQAUAEAGAgQAFAegVAUIAAABQgPAMgoAPQAWAFAMABQAbACAqgGQAtgGAUAGQAWAGAHAWQAHAVgRAVQgNAQgXAGQgEAdgVANIAAABQgUAMgPgBQAAAGgBAGIAAAAIAAACQgCAIgNAOIAAAAQgMANhWAHQgoAEglgIIgLAHQgbAPgLgCQgIgBgLAEIgBAAQjWBaiDAAQhiAAgygygAAkgVIABABIAAgCIgBABgAnGgaIAAAAIAAAAg");
	this.shape_136.setTransform(56.4,23.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AjBEuIAAgBQgZgGgXgPQgCABgDgBQgEgBgCgDIgBgEQgRgNgQgRIgDgDIgEgGQgug0gvg+IgBgBIgQgUIAAAAIgBgCQgbgjgbglQgCgDAAgEQABgEADgCIABAAQgEgGACgNIADg0QgEgMAIgNQgDgCAAgEQgBgDACgDQADgDADgBQBTgOAeAUIAVAPIAFAFIACAEIBIBdIABABIABACIBEBaIAAAAIABABIAAAAIAEAFQBAg8AxhIQAagnAUgpQAAghAMgXIAEgHIAAAAIAJgKQATgXAigEQALgIAOgCQApgGAIgFIAAgBIAPAAQADAAA/gYQAYgHAPgBQAVgTATgCQADgMAPgHQAJgFALgBQAFgEAJgEQARgGAWAAQA5ABAAAuQAAAcgIATQgJAXgXAQQgEAIgFAGQgIALgNAMIg0AlQgqAfgdAPQgCAigSAaQgaAogyAEQh9CXiaBeIgCABQgZAIgYAAQgRAAgSgEgAj5D8IABAAIAAgBgAkeDeIgBAEIABgDIAAgBIADgFIgBAAIgCAFgAiwCEIAAAAIAAAAIAAAAgAl8BPIAAAAIAAAAIAAAAgADogDIAAADIADgGIgDADgAEYjiIgBgBIAAABIABAAIAAAAg");
	this.shape_137.setTransform(48.5,12.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AlhBgQgngpgyhLQg1hRgWgYIAAAAIgCgBQgBgBAAgGQAAgHAEgBIAGgBIASgdQARgdAHgIQAIgPADgDQAFgEAOAAQAYAAAzAzQAUATBeBpQANAQA9A0QBKBDASAAQCSgaAZgTIAUgYIAUgVIA7gfQAkgSAUgSQAQgOAggyQAVghAZAAQAIAAAMAMQARAPAAAYQAAAYgKARIgeAoQArgSA1gjQAngaARAAQASABAKATQAHAMAAAJIgCASQgEAQgGAGQgGAKgIAIIACAIIACAOQAAAGgGAPQgFAOgEAIIgJAHQgGAGgBAQIABAAIABAIQAAAegaAbQgpArhhAcQgaAIgpAAQgxAAgbAFQhBAKhtAAQjWAAiAiHg");
	this.shape_138.setTransform(51.3,24.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("ADNFDIgUgOQgKgHgMgEQgfgIghgGQgVgGgNgPIgFgIQgCgIAAgIQgBgHACgGQADgKAFgIQAFgHAGgFQAGgEAIgBQAJgDALgBQhniSiIhjIgBgBIgFgDIgBgBIgHgEIgGgFIgagRIgCgBIAAgBQg/gohGggIgBAAIAAAAIgBgBQgSgJgTgHIgDgBQhIgehQgUIgBgBQADAKgBADIgBAEQgCAEgDAAQgJAAAAgcIAHhDQgCgLACgKQACgRAKgBQADgBADABQBkAbBYAhIABAAIAtASIABAAIABABIAHADQBKAdBBAjIAIAFIABAAQAbAOAZAQIABAAIAAAAQCyBpB4COQAGABAKAEQAOgIAPgFQAXgLAagHQAVgEAXAFQAIADAHAEQAFAFAEAGIAEAJIACATQAAAIgCAGQAbgHAbAIQARAFAIAOQAHALAAANQAAAIgDAGQgEAHgGAFQgMAJgPAHIgSAGQgOADgMAFQAwgCAjAdQAIAGAEAMQAHAPgHAQQgCAEgDACQgHAHgJADQgKAEgLACQgOABgMgCQgqgHgpAJQgVAHgVAKQgRAJgTADIgNABQgmAAgdgYgABxENIAAgBIAAABIAAAAgAHKC8IAAAAIAAAAg");
	this.shape_139.setTransform(55.3,36.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("ADrGvQgLgDgHgEQgGgEgHgKQgKgOgRgkQgxgCgsgcQgYgQgKgMIgQgZQgJgNgcgCQghgDgNgLQgQgOAAgLQAAgPANgRQANgRAMgDQAVgFAFgCQAOgHAFgPQAHgQAHgMIATgcQANgUAJgcQANglAAgoQgBgzg9g6Qg+g7hugwQhGgfhMgZQgogNgEgJQgFAAAAgEQAfg1ANgRIASgUQAFgFAEgBQBxApA7AYIBLAjQAhAQAiASIBYA2QAjAXAUAkIAYAlQAVAmAEAQQANAnADARQAFAcAAAzIgEAfIgDAfQAAAcAZAMQANAGAYAIQASAOAFAMQAEAJABAWQAAAJgEAEQgFAGgOAIQAKAMALAZQAJAWgBAFQAAAQgPARIggAfIgBAKQAAALgDALQgDAIgPANQgQANgGAAQgHAAgLgDg");
	this.shape_140.setTransform(35.1,45.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AlIFjQgMgNAAgQIABgSQgfgBgMgUQgHgLAAgPQAAgJgCgKQgDgMgEgEQgJgKAAgOQAEgRAMgUQAYgmAmgTQAXgMAzggQAegUAUAAQAJAAAWAGQAXAGANAAQAGAAAEgFIAIgIQAIgDAegFQAfgFAPAAQALAAATAKIAQAKQAwAABNggQAOgGBIgiQifhih7gtIhIgYQgdgJgLgJIADgHQgHgYgGg6IgHg7QABgKADACQABgDAKAAQALgBA1AUICBAzIBrAwIAzAZQAwAWBaA1QBaA0AEA5QAEA2gVAbQgJAMgrApQgsArhtAwQgIAEhEAUQgvANgUAVQgZAbgcACQg5AEgiAKQhDAUg/AiQgwAbgRAAQgTAAgNgNg");
	this.shape_141.setTransform(16.1,37.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("ApmIpIATgTIgVAPIADgEIgEACIgEgGQghg+AAgRQAAgGAFgSIABgFIAFgWIExkmIAIgGQAVgTAVgVIAWgUQANgJALgJIArgkQAhgbAhgeIBXhLIBXhIIArglQAOgNAMgQIABgBQAJgbAWgRIAxglQgOgigXgfQgFgHgDgIQgEgJAAgIQABgPAMgOQALgNARgCQATAAARAJQAgASAPAjIAkgYIAegVQAwgjA0gbQAdgOAhgDQAZABAUAQQASANgHAVQgDALgKAIIAUgGQAbgEAbANQAJAFAGAHQAFAGAAAIQABAPgEAOQgFASgPAJQgSAMgTAKIgsAVIgPAHIAtgJQAcgFAaAHQAQAHAOALQAUARgKAYQgIAQgPAJQgGAEgGACQhqAVhiAnIgGACQgPAEgOAKIgDAIQgWApgjAbQgVAQgbACQgLgFgHACIg5AoIhkBBIheBDIhhBGIhgBIQgxAmgqAiIgmAgIhSBIIh3BmQgpAjgsAjIgGgGgAnDD4IgBgBIgBAAIACABIAAAAgAjpAtIABAAIAAgBgAHMlQQgLACgJAFIgCAGIAhgSg");
	this.shape_142.setTransform(68.8,-34.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhUFuQgLgFgJgKIgIgLIgJgDQgQgEgKgLQgSgRgCgWQgIgFgGgHQgHgGgDgIQgGgPgDgQQgDgQAHgQIAMgSIARgRQAWgUAfgGQgCgQAHgOQAEgLAKgKQAJgHAJgEQAKgGAMgCIAWgEIABgCIAGgJIADgDQAPgUAEgDIAhgSIAVABIAKgBQAcgfASgcQAVghAMgjQAOgkACglIgJgFQgpgSgtgHQgwgHgugDIg3gBQgyAAhOASIhUAVIAAADIAAAJQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAQgFgEgBgGIgBgGIgFhEQgEgVAAgGQAAgHgDgLIAAAAIgBgBIgCgCIACgCIgEgRIADAAIAFAPQArgbA9gKQBAgMBuABIARAAQAuACAuAIQAvAJAkAJQAlAJAXAJQAXAIAgAdQAlAfASArQAJAVgBAaIgCA7QgMBigxBkQggBBgpAzQgFAUgIARQgdA+hLAJIgEACIgCgCIgEAAIgcASQgUAMgTAKQgaAMgfACIgHABQgJAAgJgFgAgPA4IABgBIgBAAIAAABgAiNlfIAAAAIgCAAg");
	this.shape_143.setTransform(34.8,37);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("ABvG0QgIgEgHgBQgRgFgRgCQgYgFgKgYQgVACgQgNQgHgGgCgHIgEgPQgDgJAEgJQAOghAcgXQgNAAgKgDQgWgCgPgRQgGgGgDgIQgFgNALgKQAQgQASgMIAIgEIA4gaIAAgLIgCgDIgBAAIAHgSQAKgYATgTQAFgGAEgHQA4h4g0hAQgQgTgSgRIAAgBQgvgsg8gkIgBgBIgOgHIAAAAIgZgOIgCgBQhQgpgygSQg6gTgNgDQgEgBgCgDQgBgDABgEIAAAAIgFgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAgBAAgCQATgeASgZQATgbAJgFQACgEADgBQADgCAEABIA1AVIAxAVIBIAfIABAAIAhAQIAAAAIADABIAeAQIgBAAQAjAQAgAVIABAAIA+AoIABAAIAVAPIABAAIAkAjIgBAAQAaAdARAjQASAjALAmQAKAmACAlQABAigEAhQAAADgKBiIgCgEIABABQADARAAAbQgHAZgIAEIABACQAEAIgBAIQgEA5gdAwQgPAbgaARQgLAIgNAGQgVAJgZACIgFAAQgHAAgGgCgACNGiIAJgCIgBgCIgIAEgAEBCYIAGAAIgDgBIgDABgAEMBtIAAAAIABgJIgBAJgADGi/IABAAIgBgBgAANk6IAAgBIACAAIgBgBgAkWlaIAAAAIAAAAg");
	this.shape_144.setTransform(29.9,45.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AlGDZQgygRAAghQAAgJgIgTQgJgUAAgHQAAgFAFgJQAEgJAAgFQgDgWAAgKQAAgQAQgTQAKgLAQgGQAXgKAeAAQAFAAAQAEQAQAEAFAAQAKAAANgUQAVgJANAAQAXAAAQAFIAgALQAGADAOAAQAOAAAKgDQAUgFAeALQAPAFAMAEIA7gCQAegDAegFQhvgdgdgGQgdgGiXgUIgJgCQgGgDgCgDQgqiEAAgLIAAgHIAAAAQBzAEB4AYQA6ALAnAMQCLAbBHAfQBRAjAXBGIgEgPQADAGAFAQIAFAOQAAAuhIArQhkA6jYAhQABAEiBARIg1ANQgpAKgNAAQg5AAgogNg");
	this.shape_145.setTransform(27.8,25.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AAGE0QifgBhKgGIiSgZQADgFAJgBIAFgBIgBgGQAAgGANgdIAMgcIATgzIAGgPIABgBIACgCQACgCADAAIAEABQBuAbCfAAIBMgLQBNgMAJAAQgRgVgWgHQgMgDgZAAQgFAAgNAEQgOAEgFAAQgUAAgigNIgggMQgGAAgKAIIgJAHQgMADgJAAQg7gFgQgOQgUgQgYgHQhEgYAAhlQABhQBEhLQBQhZB7AAQAKAAAlAHQADgCAmAXIAfAQIAAgDIACAEIAJADIgFABQAGAFAPAIIAaAMIAeAVQBPBMADAFQBGBiALATQAhA7AABCQAABNhoA9QhlA7icAAIgHAAgABQBNIgBgBIAAAAQAAABAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAg");
	this.shape_146.setTransform(36.7,-10.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AojF4QgDgCgBgEQAAgEACgDIADgEIgZgSQglgbgUgSQgCAAgDgBQgDgDAAgDQgBgEACgDQBZiIBshYIABgBIAKgIIgBABQAagVAagSIABgBIAGgEQBnhBBWgdIACAAIAFgCIgBABQAigNAigLIAAAAIABAAIAYgIIADgBIAFgBIABAAIAFgCQBNgYBGgNIAygIIAAAAIAHgBIACgBIAOgCICygLQAFgJAegFIAAAAQAXgEANAEIACgFIACgFIABgBIADgJIAEgOIAEgQIABgLIABAAIAHg3IAAAAQALg+AwABQAZAAAMAMQAEAEADAHIAAAAQAUgBATASQATASACAZQAUAFANASQAOAUAAAcQABAQgJAZIAAABIAAABIgDAGIAAACIgLAZIgPAdQgRAggSAaIgGAJIgGAIIgGAJIgBABIAAABIgBAAIgBACIgBACIgBABQgKAKgUAQIgCAAIgMAJIgEADIgBAAIAAAAIgBABIgCAAQgGADgKAEIgGABIgBAAIAAABIAAAAQgBAHgOADQgQAEgsACIgBAAQgTAAgUgFQgfgHgCgOIgPgBIjbAGIgEABIgEAAIgDABIgEAAIgEABIhSAOIgMADIgbAGIgCABIgDAAIgKADIAAAAQgnALgmAOIgBAAIgCABQgdAKgcANIAAAAQhCAdgyAfIgBABIgBABQgXAOgUAPIgBABQgVAQgRASIAAAAQg+A+g2BJIAJAIQgGAIgCAAQgCAAgHgFIgEAGQgCADgEAAIgBAAQgDAAgCgBgAmICOIAAgBIAAAAgAHKAFIABgBIgEAAIADABgAhTgRIAAAAIAAAAgAhwhcIABACIAAgCIgBAAgAIRiuIAAAAIAAAAgAFci1IAAABIAAgBIAAAAIAAgBgAHsjIIAAgBIAAAAIAAABg");
	this.shape_147.setTransform(70.9,-21.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("ABBHMQgTACgpghQgmgggHgTQACgLgCgEQgEgGgkgIQgTgEgMgOQgKgLAAgIQACgKAGgKQALgTAWgEIAXgCQAPgEAHgLIASgbQAlglAYhKQAihkAAhHQAAgVgGgaQgFgWgBAAQgDAAgCgGQgEgPgOgZQgFgJgHgJQgNgOgigjQgugtgkgdQgbgWgDAAQgGAAgNgKIgVgSIgkgXIgXgPIgKgKIgHAAIgFgJQgFgRAWgoIAagtQAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgDACQgMAMgIAFIATgXQAEgGAIgBIACAFIAGAAQAHAAB3BOIB9BVQAPAKAuApQAqAlAVAXQAVAWAYA+QAXA+ABA9QABA7gdCCQgcCBgOAQQAbASAKANQAHALAAANQAAAKgFALQgHANgNAEQAJAKAEARQAEAMAAAJQAAAYgVAOIgcATIgKAbQgNAYgaAAQgfAAgXhLg");
	this.shape_148.setTransform(29.1,55.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AGDEBIgJgBQgOgDgMgLQgHgGgEgJQgDgEAAgFIgSgDIgQAJIgBAAQgcAPgfgGIgBAAQgTgEgTgHQgZgHgaAEIgCAAIgqABIAAAAIggAAIAAAAIghgBIAAAAIgggCIgBAAIgegDIAAAAIglgEIAAgBIglgGIAAAAQgbgGgagIQgbgGgbgIIAAgBIgdgKIgBgBIgBAAIgCgBIAAAAIgCgBIgggQIgBAAIghgQIgBAAIgbgQIAAAAIgcgRIABAAIgcgTIABAAIgbgUIAAAAIgYgVIgBgBIgQgOIgEgDIgCgDIgCgBIgBgBIgWgWIAAAAIgWgaIAAAAIgVgaIAAAAIgUgcIgTgcIgUgcQgCgDABgEIABgCIgBgDQAAgGAFgBQAEgOAQghQATgnAGgGIABABQAEgCADABQAEABACAEIARAcIABAAIASAcIATAaIABAAIAUAZIAXAYIAXAXIAAAAIAZAUIABABIABAAIAAABIACABIAGAFIAAAAIAQAMIASAMIAAAAIAJAGIAFACIAWANIABAAIAcANIABABIAcAKIAAAAIAfALIAgAIIgBAAIARAEIABAAIABABIAOACIAAAAIAhAFIAGABIABAAIABAAIABABIAbAEIAiADIAjACIAAAAIAzAAIAmgBIA3gFIAcgDIAHgBIAGgEIAAAAQA1ghAlAFIAAAAIAhAGQAPgGAQgBQAXgEAUAHIAeALIAhAOQARAFARAIIAgAPQAaANAVAUQAUATAGAcQAEASgBARQgBAMgHAKQgKAOgSACQgaADgVgLIgUgNIgMAJIgFAFIgQAHQgEARgLAPQgGAIgJADIgLAGIgMAAIgJAAgAhYC5IgBAAIAAAAIABAAIAAAAgAk/BiIAAAAIAAAAgAlGgWIABABIgBgBgAlYggIABgBIgBgBg");
	this.shape_149.setTransform(62.3,26.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("ADYGyQg0hWgGgHQglgYgSgPQghgZgDg0IjKjxIhFhPIhzh9QgMgSgkggQgmgjgMgQIhlhmIgCAAQgBAAAAgGQAAgLALACIgDgDQAegdAKgYQAIgTACgCIAFAEQAGgDAGADIDfDJIBfBdIBRBPIBcBXQBMBEA8A+IAkAkQAvgMAcAXQAOAMAIAOIBQgrQAbAAANAKQAQALAAAbQAAAUgYARQgWAQgaADQBWAyAiAqQAYAeAAAfQAAAOgMAOQgMARgQAAQgHAAgDgCIgGgDQgNgGgognIAHALQAFAJAHATQAJAXAAAIQAAAxguAAQgRAAgPgUQghgzgtg7IAFAIQAjBAAGAPQAEALAAATQAAAUgLAOQgNAPgWAAQgVAAg0hSg");
	this.shape_150.setTransform(53.4,55.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AG6DSQgZgTgEgJIgNAAQgYAAgOgGQgPgGgKgPQgDgJgFgGQgJgKgXgEQgcgEgQgUQgRgUADgbQhrhAh6ggQh+giieAAQhcAAhyAcQiHAhgRABIgCACIgFAAQgCgHgDggIgDgnIACgYQACgRABgGQgBAFAAgKQAAgGACgBQAAAAABAAQABAAAAgBQABAAAAAAQAAAAABgBQEHhAAAgBQAAgIBdgGQBFgEAfAAQAgAABEAFQA6AFAdAEQAkAABcAaQBaAaAdASIB3A0IAngDQAtAAAuAyQAEAFAKADIAbAJQAMAFAVARQAdAVAWAcQAHAJAOAlQAAAKgSAkQgRAjgFAFQgoAjgOAKQgcATgWAAQgugMgQgMg");
	this.shape_151.setTransform(65.6,19.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ADkFEQgMgPgBgPQgCgjgMgGQgZgGgbgKQgUgHgFgIIgDgOQgGgRhTgVQgrgLgwgVQgggPg0gcIg0gdQgXgOhAgqQgMgIgfgbQgegcgMgHQghgggegqQgegrgIgZIAFgFIgMgPIAghgIACgGIAHgVQANANARAfQAaAxAZAcQAzA6ApAdQATANA2AaQCNBEAvAUQBzAwA6AAIAggLQAhgKAMAAQBLAAA+AjQBZAyAABoQAAA5glAfQgdAZgkAAQgIAAgLgDQgLgEgIgEQgUAdgqAJQgdAAgRgWg");
	this.shape_152.setTransform(52.3,36.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AEnF2QgpgFgXgHQgEgBgRABIgXADQgVgBgKgRQgLgVgFgDQhegtgpgVQgTgMgngZQgpgagUgLQhYgxiNiOQiciehAh6QgGgCgEgGQgEgIAAgHQAAgWAJgPQANgXAegFQACAGgEAEIAIgHQAMANBkBlQBlBlAMAMQAUARBLA5QBOA8AZANQEECjBhAAQAvAAAYAQQAZASAfAAQgOglAoglQAiggATAAQBBAAAXASQAXASAAAzQAAAigPAXQgHAKgpApQgVAVgqAZIgqAZQgGAIgIAEQgMAHguAAQgOAAgdgDg");
	this.shape_153.setTransform(61.7,38.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("ABEExQgDgFgCgIQgXgGgwgxIhRhTQgSgSgRgXQgogxgdg6QgYgvgthmQgzh2AAgPQAAgSAMARIACABQAJAZAVAyIAtBnQAVA4AqBCQAVAjAPASIAMATIAFAGIAVAhQALAPAdAbIABABQAdAcAHAAQACAAgIgGQAtAjAeAZIAAgLQAAglAogoQAHgHAggKIADgBQg6gMhBgzQhKg7AAgXQAAgPAbAVIgQgiIgIgTIAAgDQgFgagNgIQgVgvgMgSQgVghgzhDQgHgJgygtQg1gwAAAHQAAgfA6AwQBBA1BJBtQAUAfAnBVQAjBQAAAIIAAACIAbAcQA1AoA6ARIAeAJIAEgCIAUgTQAYgRAiAAQAqAAANArQAFARAAAgQAABEgmAqQgkAog2AAQhcAAgagrgADCCVQgGAJgMADIghAFQgOACgLAJQgDACgLAOQgKALgJARQgIARAAALQAAAkAIAMQAWAgBQAAQAbAAAmgcQAggYAFgMQAEgMABgVIABghQAAglgOgWQgMgSgSAAQgXAAgiAbg");
	this.shape_154.setTransform(38,35.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AkJCfQiLhagwhhIAHgDQgNgTgCgPQgCgLAEgNQAMgsAMgQQAGgJAFAAQAKAAgHACQALAFBEBLQBFBMAoAVQBgA0ASAIQBDAcA/ABQA/gBAtgSQAWgLAcgVIAMgaQAPgaARgHQAOgGATgmQAFgZAIhHQAGgzAGgJQAFgGAugkQALgJAIgDQATgIAiAAQAdABAUAwQASAuAAA+IgBArQgcBXgVBLQgFARgEAIQgGAKgKAFQh2BEgwAWQhKAghkABQiZAAifhog");
	this.shape_155.setTransform(49.4,16.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AAkDqQhLg1AAhYQAAgjAQgMQhShSgqgfQhLg0hbhCIgCAGIgJgDIAAgNQAAgIALgfQAKggAIgJIADgGIAHAAQANACAnANQA2ATAcATIBfBGQB5BjABAAIAVgCQAPgEAGAAIAGgKQAIgLAFgCQAUgMAMAAQAcAAAKAOQAKAOAAApQAAAGgEAOQgEAUgEAXQAMgDALAAQAvgBAdAlQAfAmAABBQAABBgxAeQgfATggAAQhrAAhGgwg");
	this.shape_156.setTransform(39.2,29.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AhQFQQgrg5AAg7QAAgMAFgNQAFgQAMgLQAGgEAFgQIAGgSQANgUAngaQAkgaAQABQAXgBAJApQAAARgKAoQBHhkABg0QAAgFgcggQgXgagTgTQg6gzgzgnQhSg9g4gYIgggNIgCAAIgBgBIgNgEQABgGACgCIAKgDQAOgwAUgwQgBgHAGgIQBOAvB7BXQB1BSA0ArQAsAlAVAuQAQAjAAAdQAABggvBiQgZA0gkA1QgDAIgEAVQgGATgRAIQgNAHgrAJQgqAJgLAAQgqAAgrg5g");
	this.shape_157.setTransform(24.9,41.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AGcCTQgUgXgKAAQgFAAgFAEQgGAEgFAAQgQAAgWgMQgTgKgLgMQgUABhAACIhEABQiCAAhbgIQh/gMh4geQgTgFhUgNQgkgFiFg0IASAjQgCAFgGAEQgQgJgMgaIgLgeQgGgMgKggIgLgWQgJgQAAgFQAAgLAKgFQADgEAFgCQCTAhCuAVQDCAXCpAAQBHAAAmgCQBGgDA/gKIA7gKQAbgGADgHIASgFQATgFAGAAQASAAAZAFQAbAGAAAGQAAgGANAAIAVACQBKAAArAjQAgAaAAAWQAAAwgPAsQgcBZhDAAQgNAAgagJIgYgKQgpAUgDAAQgPAAgVgHg");
	this.shape_158.setTransform(69,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_127}]}).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.6,117.8,119.4);


(lib.FIZ_23_part_028copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgXBaIAQgDIANgFIAPgHQAhgOAZgaIgqARQgmARgqAGIgYAAIgLgEQgGgCgEgDQgKgJgDgLIAUADIAUgCIAVgFQAmgOAcgaIgUAHQgSAJgUAGQgQAEgRADIgPAAIgPgBQgXgGgSgOQAGgcAggHQASgCAUgGIAkgNIASgHIAQgIQAUgJAPgMQAEAHAMAAQAQAAADgNIABgEIAVAJQAUAIAJATQANAhgMAhQgLAcgXASIgdATQgHAEgHACIgPAGQgTAGgTAAQgLAAgOgDg");
	this.shape.setTransform(11.1,79.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgOBsQgYgCgXgGIgDgBIgDgEQgbgBgQgWQgIgMgDgQIgMgIQgJgGgHgIQgEgEgBgGIAAgIQAEgQAOgNQAHgGAIgDIATgHQAcgFBLghIADABIApgEIAAABQAEAIALAAQAQAAADgOIABgEIAEgRIACgCIAWALQAGADAFAFQALAHAJALIAIALQALAbgDAdQgDAYgPAXQgMASgRAMIgnAZQgOAJgQADQgOADgOAAQgLAAgOgDg");
	this.shape_1.setTransform(11.2,79.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_028 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgXB3IAQgEIANgFIAPgGQAhgOAZgbIgqASQgmAQgqAGIgYABIgLgEQgGgCgEgEQgKgIgDgLIAUACIAUgCIAVgFQAmgNAcgbIgUAIQgSAIgUAGQgQAFgRADIgPAAIgPgCQgXgFgSgPQAGgeAggGQASgCAUgFIAkgMIASgHIAQgJQAQgHAOgJIAHgGIgqAEQgKgFgNgIQgHgFgFgGQgDgDgBgEIgCgJQAAgUAQgKIAPADIALAKIANAJIAFADIAGAFIAPAJIAGADIAWALIAdANQAUAJAJATQANAfgMAiIgGANQgHAMgJAKIgMALIgdATQgHAEgHADIgPAGQgTAGgTAAQgLAAgOgDg");
	this.shape.setTransform(11.1,76.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AAJBOQgxgvg2goQAIgaAVgTIgBAAQAUgSAZgHIAMAIIAAAAIAqAfIAAAAQAgAVAeAZIgLAFQgvAVgZAvIgDgBg");
	this.shape_1.setTransform(30.9,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AAoE+QgHgMgIgJIAAAAQgbgegcgbIAfgfQATgRARgVQARgSAOgTQAOgUANgUQAOgUAOgZQALgUAHgVIAFgUIABgHIAAgBIgBgBIgCAAIgBABIgVAUIgGgEQAbg2A5gNQAMASAJAUQAGAQAEARQADANACAOIgEAYQgDASgHASIAAAAIgLAcIgKAYQgLAXgMAWQgyBchEBOIgUgkgAiSjdQgkgZglgVIgIgCIgBAAIgBABIgBAFIgDgBIgBAAIAAABIgBABIAAAAIAAgHQAEgNAMgWIATgjIgFABIgDgCQABgDAJgGIAFgEIABABIACAAIADgBIABABIAAABIgEAHIAAABIAAABIABABIAYAMIAAAAQAlASAjASIAHAFQATAKAUALQgXALgRASIgOARQgJAKgEAMIgggWg");
	this.shape_2.setTransform(26.7,37.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("AgqE6QADgdgLgbIgIgLQgJgLgLgHQgFgFgGgDQgYgLgWgNQAPgVAYgRIAVAUIAAAAIAYAXIAgAkIABABQALAQAFAUQAGAbgTATIgBABIgOAMIAAAAIgKAHIAAAAIgDADIgHAAQAGgOACgQgAAciMQAJgPALgNQAMgOANgLQARgNAWgEIABABIABAAIAbAcIgZALQgoASgVAogAiMkVIALgYIAAABIADgEQAWgeAkgJIAVANQgXAJgRASIAAgBQgTAUgJAZg");
	this.shape_3.setTransform(31.1,47);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AhEBoQgHgOAGgMQAFgOAKgKQAJgJAMgEQALgDANgCIAJAHQABgNgBgNQgCgHgDgHQAOAEANgHIAygVIAVgKIAEgBIgFgCQgIgEgJAEIgGABIgZAJQgQALgVADQgNABgKgLQgEgFgDgFQADgUAKgPIAIgJQATgOAagHIANgCQAPgCAQABIACAAQAPABANAJQAcAWAFAlQADAcgFAZQgBAIgGAEIgcANIgZAJIgDABQgYAIgZAFQgQADgPAGIgZARQgOAJgPAAQgKAAgJgDgAiBAPQgUgDgBgSQgBgQAKgHIANgMIAIgDQAFAUAQALQAKAIALACQgRAIgRAIQgGADgGAAIgFgBgAhVgYQgGgBgDgEQgFgGgBgIQgCgJADgIQABgFADgFQAngpA4AFQAIAAAHACQgTAQgTATQgGAIgEAJQgDAJgCAKQgNAGgQAEIgIABQgFAAgFgCg");
	this.shape_4.setTransform(-1,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AAMBMIAAAAQgzgqg4giQAIgaATgWQATgTAZgKIALAHIAsAaQAhASAgAXIgMAEQguAagXAzIgDgCg");
	this.shape_5.setTransform(31.8,20.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AhCEAQgDgLgFgLIgkhIIArgPIAAAAQAZgIAYgMQAVgKAUgMQAWgMATgOIAAAAIAZgQIAAAAIAlgeIAAAAIANgOIANgQIAEgFIAAgBIgBgCIgCABIgVAGQAZgjAtgPQANARAJASIAAAAIACAGIAAAAIAGARQAIAkgSAjQgFAJgHAKIgKAKIAAAAIgIAJIAAAAIgUAUIgSARQgTARgTAPQhSBAhdAtIgHgpgAiXigQgmgVgmgRIABAAQgEgBgDgBQABggAagpIAOgXIABAEIgBAAIgBAAIAAABIAAABIgEAFIAAABIgDAGIgBABIAAABIABABIAAAAIAZAKIAAAAIBJAbIAAAAIAIAEIAAABQAUAHATAJQgVAOgQAUIgPASIABAAQgIALgEAMIghgSg");
	this.shape_6.setTransform(27.7,30.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0FF7A").s().p("AiZETQAQgKAIgSQAFgLACgMQADgYgHgbQgIgcgWgUQgLgKgNgGIgCAAQAUgKAZgFIAOAZQAHANAIAPIATArIgBAAQAHAUgCATQgCAbgaAJIgCAAIgSAHIAAAAIgMACIAAAAIgEACgABHhSQAJgQALgPIAAAAQAKgPAOgMQAQgPAWgGIABAAIAdAaIgZAMQgoAYgTApgAhmjJIAKgYIADgEQAUghAlgNIAVALQgXALgQAUQgSAWgIAYg");
	this.shape_7.setTransform(28,37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AhcBOQgMgMAAgGQAAgYA/gTQA7gRA1AFQgrgHgXAAQgyAAgWAIQgHADg2AmQgigMABgjQAAgHABgDQACgEAGAAQAPgOAfgMQA9gZBcAJQgcgMg6AAQgJAAgbAFQgdAGgPAFQgWAKgCgGQA5gvBBAAQBTAAAzAmQAyAkAAA0QgBAcgaAPQgWAMgIgEQgJgEgXgDQgWgEgrAMQgqAMgVABIgBAAQgVAAgQgSg");
	this.shape_8.setTransform(-8.7,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#72EBEB").s().p("AhhgLQAHgUAPgRQAQgSARgHQAMgFAHgBQAKgBAIAFQBDAyAkAeQgIgBgfAWQgkAbgOAbg");
	this.shape_9.setTransform(28.4,22.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FF7A").s().p("AjSB5QAmADAXgOQAcgRAAgnIgBgkIgOgWQAZACAQANQAVATABAkQgBAkggAYQgcAUgfAAQgGAAgngZgABcA3QAOgbAfgWQAcgRASgCIAcAeQgVADgdAWQgPAMgMAMgAhHhOQAMgYAegaQAngiAUAfQgOABgYAWQgbAZgIAZg");
	this.shape_10.setTransform(21.6,26.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8089DD").s().p("AAZDkIgwgNQgggIgYgIIgZgHIg7gSQAigIAXgZQAYgaAAgkQAAgQgGgRQB+AsCIAPIgtgSQADgDAggRIAjgTQAzA7gpA8QgmA4g/AFQgfADgUAAQgWAAgKgDgAjTiMIgJARIgHgJIACgHQAEgMARgiQAUgpANgEQAFAIAAAJICABFQgzAZgVAuQgvgig2ghg");
	this.shape_11.setTransform(24.1,24.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AgcAmQgsgfAAgGQAAgWAQgcQAUgiAUAHQARAIAGAIQAGAIAdAgIAfAmQgQAIgLASQgGAKgMAYIg4gog");
	this.shape_12.setTransform(25.5,25.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8089DD").s().p("ABrCWQgagQAAgIQAAgCAKgUQALgWAEgCQACAEAJAGQAJAHAEAAIACAAQABgBAAgGQAAgYg4g7QgvgugXgQQAhgFAlgcQAggZAZgjIA1BrQAxBrAAAtQAAAegUAOQgTAMgmAAQgXAAgdgRgAjThaIgCADIgOgFIgIgDQAAACAAAAQAAAAAAAAQAAgBAAgBQAAgCAAgCQAAgOAHgVQAHgTACAAIAxgNQAFAAAIADQAIADAFAAQAYAAAUAZQAKAOAMAXQgVALgOARQgUAWAAAag");
	this.shape_13.setTransform(25.8,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FF7A").s().p("AAoC8QAHgQALgTQALgTAIgIIAQAQIABACQgHAGgLARQgOAXAAANgAh3BDQAJgXASgbQANgRAIgIQAKAKAOAMQgJAJgQAdQgPAcgCALgAgtgHQgMgMgaglIAJACQA3AGApgyQAmgsAAgsIgBgQQAiARAOAbQANAYAAAmQAAARgmAlQgvAvg5AAQgKAAgNgMg");
	this.shape_14.setTransform(26,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("AASBgQgjgUgLAAQgbAAgeAIIgaAIQgUAAgPgPQgLgKAAgJQAAgfBTgMQA2gHAwADIgGgGQgMgFhLgDQgRAAghAGQAKgdAkgSQAkgTAaADQAYADAYgCIAAgCIhBgNQgTAAgbAKQgYAKgNAKQgGgJgBgEQAOgkAngNQAcgKAwAAQA5AAAtAwQApAtAAAsQAAARgEAKQgEAJgNAOQgMANgQANQgYAUgPAAQgPAAglgVg");
	this.shape_15.setTransform(13.4,-3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72EBEB").s().p("AgsAiIgMgRIgOgRIgKgKQAqg8AlgRIANgGQAsA3AZAcQgjANgUAhQgSAdgBAdQgagcgZggg");
	this.shape_16.setTransform(18.8,24.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8089DD").s().p("AAKCzQgKgBgHgFIgMgIQAAgfALgZQAKgZAWgXIgFANQgBAHADADQADAFACgCIAGgBQAKgSAEgOIACgBQAFgDgCgFIAjiDQAlAjA+AOQAjAIAWABIgTAbIgxBFIgqA6QgSAXgRAOQgTARgbADIgGAAQgRAAgSgEgAi/gWQgTgVgUgVIgBAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAgBQgDgIgFgbQAAgLAFgeIAEgbIADgGIADABQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABIAAADQAFAAADgDIABgCIANgDQAYgGAFAAQAQAABIBYIgCACQgSADgWAOQgxAcgJAgIgFgHg");
	this.shape_17.setTransform(25.9,21.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0FF7A").s().p("Ah5CiIgBgCQAFgJAEgRQAFgXAEgIQAEgGAbgaIAVgVIAOAOIgCAFQgfAPgSAnQgMAbgCAbIgSgPgAj2AQIAHgNQAJgPAKgJQAOgNAjgQIAZgLIAMARIABABQgVAGgfAZQgoAegEASIgRgUgAB1ghQhHgQgigvQgKgOAVgvIAIgTQADAJAFAGQAMARAKAMIADgBQAbAPAkAGQA0AHAUgIQAYgFALgGIAKgGIADASQgDAyg5AgQgGADgNAAQgTAAgggGg");
	this.shape_18.setTransform(32.9,19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AAFCAQgfgKgXgPIgFgTQgKgfAAgHQADgOgHgNQABgDACgCQgCgGgEgGQgTgXgUgOQgUgOgEgGQgMgQAEgTQADgPAHgEQALgFAbAMQAlARAeAqQAlAsAIAQQAGgQgOgSIgggxQgOgTgXgRIAEAAIAQgBIAaAFQA2AMAfArQADAEAFAOQAFAOAEAFIACgBIgCgEQgZhGgfgRQgggSgJgCIgDgBIAAgBQAEgJAEgCQAQgKAiAQQAuAWAfAxQAfAwgRBJQgZAtgfARQgMAHgRAAQgUAAgcgIg");
	this.shape_19.setTransform(43.8,-7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("Ag5B3QgLgDgHgJIATgHIARgLIARgOQAbgfATgmIgPAQQgOARgQAPIgbAWIgOAHIgNAFQgXAGgVgGQgFgeAbgVQAQgLAPgOIAcgbIAPgPIAMgQQAPgTAJgTIgiAXIgbAAQgHgCgHgEQgEgBgDgDIgEgIQgHgSALgSIAOgEQAHADAJABIAnAGIACAAQAMABANAAIAFAAIAegBQAWgBAOANQAWAaABAmQAAAUgGARQgEAKgFAKIAAAAIgTAfIgLAMIgLANQgZAYggAIIANgKIAMgMIALgNQAZgcAOgkIghAjQgeAigiAZIgVAMIgLABIgEAAIgHgBg");
	this.shape_20.setTransform(8.7,67.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#72EBEB").s().p("AAXBKIgBAAIhqhDIgLgGIAAgBQAAgBgCgCIAAgBQAAgdAZgbQARgRAOgFQBMAgA/A0QgRAKgSAXIgCADIAAABIgYAoIgBABIgBADIgMgJg");
	this.shape_21.setTransform(29.3,18.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8089DD").s().p("AAjEvQABgYgkgvIAAgBQgXgggfgHQBzhIBMhoQACgDAAgEIAAAAQAAgEgDgCIgGgFQAUhAAmgIIAEgCQA/BMgXBEQgcBQhNBHQgrApgxArgAjbjHIAAAAIgCAAIAAABIgFAPIgCAAIgBAAIAAABIAAAAIgBAAIgGgBIgBgEQAAgGAVgtQAWgwANgQIABABIgBAAIABABQACACAAADIgFALIAAABIAAABIABAAIABAAQAiAMBDAZQgMAJgMAPIAAAAQgYAcgFAaQgpgRgtgPg");
	this.shape_22.setTransform(25,31.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0FF7A").s().p("AgzEvIgDgCQAEgLADgMQAFgcgGgaQgIgdgSgUIgLgGQgMgGgMgCQgGgCgGAAIgggBQAMgJAcgEIABAAQAsgGAeAnIAAAAQAfAoAAATIAAAAIAAAHIAAAEIgBAIQgDADgEAIIAAABIgGAOIgBADQgGAOgWAFIgBgBgABIhiQAKgaASgYIABgBIABgBIACgDIAAAAIAZgWIgBAAIAHgCIACABIAAAAIAAABIABAAIAQAQQgpALgXBBIgSgPgAiJjgQAEgYAWgaIAAAAQATgWANgHIAgANQgJAHgLALQgdAfgCAjIgngSg");
	this.shape_23.setTransform(27.3,38.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AhgB5IgIgFIABAAQgFgEgBgEQABgTANgQIAAAAQAWgaA2gUQAfgKAVgFIgCgFQgCgDgDAAQgVgDgdAJIgBAAQg2AUgZAaQgHgDgBgEQAAgpAhgVQAHgFAKgFIAigPQAegPAYgCIABAAIgCgDQgCgDgEAAIgPAAIgBAAQgqAHgcANQgLAAgTAFQgRAEgJABQgTgCgJgGQgFgFABgHQAFgWAcgOQAfgPArgCQAqgBATAGIAjAIQATAFAYACIAFABIACACIgBgCIgBgCIAAABIgrgYIgBAAIgcgHQAXgIAVACIAhAKQANAGALALIAAAAIAPAPIABADIADAHIAGAOIADAJIAAAAQAFASgEAkQgDAmgSAWIgBAAQgGAHgKAEQgIAEgKABQgKABgOgBQgwgFgQAFIABAAIgVAFQgJACgdARQgZANgOABIgHAAIgCgBg");
	this.shape_24.setTransform(5.7,27.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8089DD").s().p("AAFApIgCgGIAWACQAYACAWAAIAAAAIAFAAIAeAAIAaAAIALAAQAGgDAKgDQAPgFAJAAIgCgDQgCgDgEAAIgdgBQAWgaAIgDIAEgBQAXAPATASIAAABIAQASIABAAIAAAAIAJALIAAABIAAAAQALAOACAOQACAYgaAVIAAAAIgEACIgBACIAAABIgEABIAAAAIAAAAQgQAJgVAHIgFABQgjAKgvAIQg7AIg7ABQAihFgPhEgAjxhMIgBAAIgBAAIgBABIAAAAIACAHQAAAFgEACIgCgLIgBgBIgBAAIgEgYQgGgkAAgKIABgQIABgEIAEgNIAAAAIABAAIAAgBIACAFIAAABIABAAQBTATBjAgIgQAUQgVAegJAYQg+gWhBgIg");
	this.shape_25.setTransform(29.5,19.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0FF7A").s().p("AiHCNQAMgFAJgKIAAgBQAWgZAEgtQAEgrgHgSIAAAAIgEgNQAdAAAbAQIAEANIAAABQAPBCgnBDQgTAFgRAAQgWAAgSgIgABXgkQAZgYAMgCIADgBIAJAGQgMAJgTAXIAAABIgKAMIgeAAQAKgMAMgMgAhohDIgPgGQAIgWAUgbIAUgaIAaAJQgmAtgJAgIgMgFg");
	this.shape_26.setTransform(31.9,23.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72EBEB").s().p("AAAA7QgrgWgsgUQAHgdApgvIADABIABABQBDAYA1AcIADACQgNAGgSARQgUAUgOAUIgXgBg");
	this.shape_27.setTransform(33.5,15.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("Ag+CTQgIgLAAgKQAAgYAXgcQAZgeA+gvIgGgFQgUgBgkAfQgnAggRAjQgEgBgEgHQgDgIAAgHQAAgpAigiQASgTA1gnIgGgEQgZAPhBAtQgmAYgXABQgEAAgDgFIgFgGQAYhIBagbQAtgOBFgJIgCgDQglgGgKAAIgOABIgNACIAKgIQAKgEASgGQATgFAGAAQAlAAAZAcQAeAhAAA/QAAAjgKANIgUAOQgQAKgmANIgiALQg/BEgYAJg");
	this.shape_28.setTransform(4.2,44.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8089DD").s().p("AADDIQAAgXgIgjQgOgvgWgNQAggFAjgMQAXgHArgRIAJgHQAIgHAHgEIAFgCQgCgBAAgFQAAgEAVgRQAWgUAPgGQAjAjAMARQAPAXAAAVQAAATgzAsQhHA9hyAdgAjlh0QgGAAAAAFQAAAHgCADQgBgCAAgKQAAghAEgXIALgvIACAAIABAFICsA6QgNALgTAXQgWAZgGANIh5gjg");
	this.shape_29.setTransform(27.7,22.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#72EBEB").s().p("AhZAKIAWggIApgqQAFAAA2AdIA5AfQgPAGgKAHQgOALguAtIheg3g");
	this.shape_30.setTransform(31.9,16.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0FF7A").s().p("AhlC8QAKgbAAgTQAAgrgSgmIgRgeQAegOAaAsQAaArAAA1QAAAXgeALIgeAFgAAhgjQAdghAdgTQAVgNAKgCIAHAGQgHAGgjAjQggAfgEACgAh1h1QgRgHAJgBQAIAAgDgCQAxhEAMAAQAKAAAOAKQg2A4gHASIgCABQgEAAgPgHg");
	this.shape_31.setTransform(30.8,28);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC99").s().p("ABiB5IAAAAQgigDgggIQgggHgbgLQgSgHgTgDIAAAAIgnAAQgeAAgTgXQADgQANgHQAOgJAQgEQAOgCAPADIAaAJIAEALIAAABIABAAIABAAQAMgKAHgPIAEgNQAMAMAPACIBgALIABAAIABgBIAAgBQgGgMgPgDIABAAQgTgGgTgDIAAAAQgYABgVgJQgNgHgCgQIgBgMQAQgQASgHIAOgEQAeAAAeAJQAWAIAWAOQAPALAHAQQANAigUAkQgQAdgXAXQgFAFgIAAIgBAAgAiHgyQgLgBgHgHIAAgBQgPgNALgSQAJgPAOgBIAUgCIAIABQgHAWAIATQAEALAJAJQgXgBgUgDgAhAg7IAAAAQgLgCgHgJIAAAAQgEgEAAgFQgBgJAEgHQAEgJAIgFIAAAAQAEgEAGgCQBAgQA1AoIAAAAIALAHQgfADgeAGIAAAAQgJADgKAHIgRAPQgRgDgRgGg");
	this.shape_32.setTransform(1.4,45.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#72EBEB").s().p("Ag+AOIAAAAIgZgPIAAAAIgFgDQAHgPAKgOIAAAAQAJgNAMgKIAegXIB1BPQghAPgUAeIgUAjQgngkgrgeg");
	this.shape_33.setTransform(33.7,20.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8089DD").s().p("AgqD3QAGgxgFgzQAdgIAZgJQAvgRAtgYQAFgDAPgOIABAAIABAAIAEgEIAZgaIAAAAIAEgGIAAgBIAAAAIgBgBIgBAAIgnATIgEgDQATgZAXgUQAXgRAZgNQAWAXAMAdQAGARAAATQABAQgFARQgFAPgHAPQgSAigdAZQgMAJgNAIQggATgiAMQgbALgcAHIAAAAIhLAWIgMACQAHgOACgOgAjciqIgBAAIgJADIgBAAIAAABIgEgCIgDgPIgCgKQgHgRAFgSIALguIAFABIAAABIADAOIABAAIAAABICfA8IAYAKIgaAQIAAAAIgEAEIABAAQgSARgIAZIgEAMg");
	this.shape_34.setTransform(28.6,27.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0FF7A").s().p("AidD5QgVgEgUgFIgCgCQAiAJAggSQAMgIALgKQAUgUALgeQAMgggJgfIAAgBQgEgPgKgOQgEgHgGgFQAZgDATAQIAHAFIADA0QADAsgXAlQgIALgJAKQgPAOgRAEQgNAEgNAAIgPgBgABkg5QAMgbAUgZQANgOATgKIgBAAIAMgEIAaAVQghASgaAbQgPAPgOAQgAhDiyIAOgnQAQgWAbgGIABAAIAJgEIAQAHQgcAPgSAaQgLAPgHATg");
	this.shape_35.setTransform(27.4,35.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#72EBEB").s().p("AhYgMQAXggAggUQAhgTAggCIA5BLQggAKggAiQgZAegFAUIgBACg");
	this.shape_36.setTransform(20.8,25.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8089DD").s().p("AgfC6QgggGgOgOQAOgpAJgNQAMgOAKgPQAKgNALgJQARgNAdgdQBBg+AUgcQAOgTArg+QAOArAvApQAsAmAWgEQgOAShPBEQhKBAgVAPQgcAUgbAQIABACIgfAOQgKAGgYAAQgNAAgPgDgAkphYIgFACQgCAAAAgOQABhGAEgJQAHACADgLQABACgCAEQgCACAGAAQAqAAAjgHQASgBAWAcIAqA3QhHAMguBFQgjhCgSACg");
	this.shape_37.setTransform(33.2,22.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F0FF7A").s().p("AjBCrQAAgLAMgSQAXgiA8gkIABACQgRAMgOAPQgbAdgSA7QgTgIgBgKgAk0AdQAJgSAmgdQAtgnAZAIIAJALQgkAIghASIgdAYQgUASgGAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQAAAAAAAAgACog0Qg0grAAgwIAMgtQgCALAOAYQARAdAeAaQAaAVApARQAlAQASAAQgKAQgVAIQgQAGgRAAQgfAAgugmg");
	this.shape_38.setTransform(41,18.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AhjBnQgygZgaglQgUgaAAgPQAAhBBFgbQAlgOAmAAQAqACAZgLQAcgNAVAAQARAAAGAEQAIAFAAARQAAACgPAbQAAADgjAKQgjALgNgBIABACQAnAjBYAGQAmADAMAEQAUAEAAATQAAAGgKAJQgMALgNAAIgHgKQgJgMgNgEQgXgKgIgBQgHgCgsgCQAAgDgCgFQgEAHgeANQgkARg+ATIAEAGIARABIAZABIAmAFQAvAHAIADQAYAGAAAPQAAATgOAGQgIADgZAAQhegFglgUgABfBTQgIgKgKgGQgTgIgdgEIgxgIQAFgCAEABQAIgDAkgUQAxAAAhAMQAdAKAAANQAAAQgOAKQgMAIgNAAQgFAAgFgJg");
	this.shape_39.setTransform(75.2,-0.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#72EBEB").s().p("AgXA+IhFhTQAvg6BLgMIA/BTQghAMgWAdQgQAUgTAnIgageg");
	this.shape_40.setTransform(22.3,27.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8089DD").s().p("AgiDCQgjgIgSgNQAOggAdgcQAXgXAZgQIAAAAIAAAHQAAAGgCAFIgFAHIACACQAhgNBIgjQBSgqAugeQAMBfBhArIjAA/Qg/AShGAAQgXgBgbgFgAlLhlIgDAGIgGgHQAAgWABgRQADghAKgVQACACA9gGQARAAAOAHQAGACANAIQAMAJAJANIAhAvQhHAMguBFQg1hGgCABg");
	this.shape_41.setTransform(36.7,23.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0FF7A").s().p("AjDB3QANguArgjQAsgjALAeQgRADglAsQggAmgJAQgAERBJIgagPQgagNgQgVQgRgUgFgQQgGgSAAgFIACgMQABgNASgcQATgdAWgQIgKAPQgNAfgEAPQgEANAAAMQAAAgAVAXQAeAkBOAdQgJAEgOADQgNADgJAAQgCAAgRgKgAlQgpQBAhQA1AAQAJAAAKAYQgcABgjATQgnAWgVAeg");
	this.shape_42.setTransform(44.1,26.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC99").s().p("AiaBlQg2glAAgiQAAgzAoglQAjggAogDQBAgFAkgXQAigVATAAQAJAAAEAEQAJAHAAAYIgMAVQAAAHgkAQQgeANgRAEIACAFQALAIAdAHQAcAGATAAQAKAABSgIQAjAAAGARQAGAQgmAYQgJgLgagJQgZgIgUAAIgtAEQAAgFgDgCQgJATgxAfQgvAcgZAFIAGAEQAsgJArAAQA5AAAGABQAZAFAAAWQAAASgTAIQgcANhKAAQhIAAg9gqgABmBIQgTgOgXAAQgyADgZgCIAGgCQAJgDAZgTQAUgQA2AAQAbAAASAHQARAGAAAJQAAARgLANQgLAOgQAAQgDAAgSgNg");
	this.shape_43.setTransform(87.6,18.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgDAHQgBgBAAgGQAAgFAEgBIAEgBQgCABgCAEQAAADgBAHIgCgBg");
	this.shape_44.setTransform(-0.2,11.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#72EBEB").s().p("AhngUQAYgjAfgZQAdgXAQAAIAqArQAxAyAQAMQgSgBgmAnQgmAngFAZQgHgIhlh0g");
	this.shape_45.setTransform(21.3,26.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8089DD").s().p("AAyDIQg1gNgogUQAPgyAlgZQATgOAXgHIAWAOQgKAAAAALIAEAGQAKAEAZgHQBTgQBQgZQACAAgGAxQgBATAJATQARAmAsAVQgTADhBADIhHADQhAAAg9gNgAk6iHQgJALgGgBQAAgHACgEQACgFADgBIAZgmQAQgaAOgGIABAHIgBACIACgFQAEgEAGAAQAMAAAeAWQAXARAVAXIAVAYQhHAZgiA2g");
	this.shape_46.setTransform(32.6,24.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F0FF7A").s().p("ADyB4QgegdAAgeQAAgzAagcQAQgTApgVQgWAhgEAKQgLAYAAAuQAAAdALAcQAOAlAZADIgIACQgegIgcgagAidBbQAfhDAngXQAmgVAQAfQgiAHggAvQgRAYgKAXgAkzhNQALgaArgeQAugfAQASQgNAFgpAfQgtAigFAPg");
	this.shape_47.setTransform(39.2,29.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC99").s().p("AiOCdQgggWAAg4QAAgqAPgeQAXgtBAgrQATgNAYgrQAVgkAKgBQAMgBALAUQAKATgMAPQgMAPgOAcQgPAdgLAKQAAAAAAAAQABAAAAABQABAAAAABQAAAAABABQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAGABQAhAAALgGIAegSQAbgNBGgxQAHAAAGAEQAKAGAAAOQAAAIgEALQgEANgIAGQgKgHgJAAQgVAAgYAOIgyAeQgCgFgEgCQAAAYgZAqQgWApggAlIACABIAFABIA/gxQAxgiAVAAQAKAAAIAIQAHAJAAAJQAAAfhIAqQhDAogrAAQg7AAgagSgAAKA7QAFgFAYgyQATgWAkgPQAagLANAAQAYAAgEAkQgFAhgWAAQgFAAgDgEQgEgFgFAAQgbAAgcARQgeAWgRAJg");
	this.shape_48.setTransform(84.2,26.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#72EBEB").s().p("AhUACIALghIABAAIAJgRQAKgRAGAAQAFAAAEACQAMAHAPAHQAgAOBAAgQgJAGgUAdQgTAbgEAHQgqgbhLglg");
	this.shape_49.setTransform(34.4,18.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8089DD").s().p("AC1CRQhQhXhBgsQAAgDASgaQASgbAEgCQAFgEAEgJQADgFANAGQCnBfBnB/QgUAKgTAOQgmAfgRApQgagqhGhLgAkZiWQgugQgfgBQgBAEABANQABANgEAJQgDgBgDgKQgDgJAAgIQAAhKAHgTQADgKAIgCIADABIgCAQQAEAABTAbIBZAdQgYAggIAkIhKgeg");
	this.shape_50.setTransform(40.7,28.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0FF7A").s().p("AC/DjQAJgVAfgjQAkgmATAAIAFABQgXANgcAlQgZAfgFARgAhwhGQAQgfAlgoQAKAAAVASQgWAWggA1gAkiijQAHgZALgUIAOgXIAYAIQgXAfgEAJQgDAHgFAVg");
	this.shape_51.setTransform(50.9,33.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC99").s().p("AhKBsQgggVgagHIgugMQgigHAAgSQAAgPAKgMQALgNAUAAQADAAApAPQAqARAEAAIgXgdQACgvBNguQBBgpAtAAQAOAAAGAIQAHAIAAAXQAAAHgEADIghAUQg2AkgSAJQgJADgLAHIAGACQAuAQAgAYQAKAHAUAUIgKgYQAcgHASAAQAiABAZAPQAVAOAAAKQAAALgLAHQgJAEgLAAQhBAAgVABQgVACgpAOQgoAPgSABIAAAAQgTgBgfgUgAAsAOIgbgQQARgLAhgTQAigUAKgEIAagHQARgDAIAAQAWAAAKAPQAKAOgMANIgWANQggAHgjARIgfAPQgGAAgWgOg");
	this.shape_52.setTransform(84.1,57);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCC99").s().p("ABPB6QgTgmgrgnIADAFQAEAGAAAGQAAAKgDgFIgCABQgmgHgkghQgggagCgOQAGgEAIgIQAQgRAGgUQgXAog5gEQg1gEgBgYQABgPARgKQAQgJApgJQADAAAkgbQAYgRA7AAQBVAAAzAeQAmAXAAATQAAAZgrAAQgKAAg7gTIhIgZQAbAQAYAjQAcAogQAhQANgGACgNIAAgCIAPAfQANAaAGAGQAMALALADQAIACAAAEQgBAqggAAQgWAAgJgTgAB7BBQgHgHgGgUQgCgHgMgSQgLgOgDgCQgFgFgIgRIgLgYQA3AUAVABIAXADQAFACAMAQQAOARAAAQQgBARgKAOQgMAQgTAAQgQAAgHgIg");
	this.shape_53.setTransform(49,72.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F0FF7A").s().p("ABZC5QBKAAAOAVIgBADQgsgFgKAAQhhAAguAlQgEg4ByAAgAgNhBQAAgKAZgbQAegeAYAAQAGAAAGAHIAPARQgaAGgZAUQgUARgPAWQgUgMAAgKgAitilQgCgEAAgHQAAgOAXgYQASgTAMgHIAeAOQgrAdgLAoIgHAAQgPAAgFgIg");
	this.shape_54.setTransform(40.8,36);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8089DD").s().p("ADQDyIhOAJQAMgXAHgSQAMgjAAgeQAAgjgHgWQgDgLgJgMQgIgKAAgFQAAgHASgSQAbgZAqgMQAgAtALAZQAbA/AABYQAAAKgGAnQgggQgtAAgAjnifQglgNgFAAQgFAAAAAEQgBAEgFAAIgGAAIACgEQAmg/ARgSQAGgIAFAAIABAAQABACgDAKQA2AaA/AVQA+AVALAFQgTAVgKAHQgFAFgSAjQhbglg3gSg");
	this.shape_55.setTransform(29.6,28.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#72EBEB").s().p("AhWAAQABgVAbgXQAQgOAPgIIAqAYQAqAYAeASQgYAFgYAYQgWAVgGAQIgBABIhghDg");
	this.shape_56.setTransform(36.7,21.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFCC99").s().p("AhhCDIgCgHQgCgOAEgRIAKgIQAegXAegTQAlgaArgRIABAAIABAAIAAgBIgBgBQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQgDgCgEACQhaARhBBCQgOAFgLgKIAAAAQgGgFgEgGQgFgMAGgLQAGgMAIgLQAXgdAjgSQAugWAygNIABAAIAAgBIgBgBIgDgCIgZABQgvAEgpAYQgiAVgbAeIgPgMIADgJQAEgLAIgLQAiguA3gQQATgFARgHIAmgOQAIAAABgDQACgDgFgEIgBgBIgHgCIAAAAIgdAGQAQgGAOgFQAJgDAIADIABAAIBaARQASAQAPATQAOAUAFAVQAIAigKAhQgFARgPALQgQAKgQACIgeAJQg6AUgxAiQgWANgZACQgPAAgLgJg");
	this.shape_57.setTransform(-5.8,58.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#72EBEB").s().p("AhmAOQADgOAHgMIAAAAQAGgNAIgLQAOgTATgMIAPgIICFBCQgaAKgVASQgQANgKAVIgLAXg");
	this.shape_58.setTransform(30.6,21.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8089DD").s().p("AgqEWQgDgzgQgvIgGgOIAAABIgJgXQA5gNA1gTQA5gUA1gdQATgKARgMQAEgCACgDIAAgBIgBgFIAAgBIgBAAIgBAAIgrANIgIgFIAFgJQAcgeAggdQAKgJALgHIAYAVQALALAJAMQAJAKAIANQAHAMADAOQADAOgDANQgLApggAbIgwAlQgnAeguAWQgeAPgfAMIAAAAQgPAHgRAEIg+AUIAAgKgAi6h0QgcgKgcgIIABAAQgIgFgKgBQgHgBgEADQgFgOgCgZQgHhBAAgOQAAgDgCgJIgDgKQAAgLACACIAAABIAAABIAAAAIAEAHIABAFIABABIAAAAQBwAkBuAvQg1AigNA+QgfgMgegLg");
	this.shape_59.setTransform(26,29.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F0FF7A").s().p("Ah9DhIAAAAQAGgWgBgXQgBgVgIgTQgPgkgbgaQgLgMgOgFIgBAAIgHgCIAegGQAUgCATgEQAIgBAJACQAGACAFAEIAAAAQAGAEAFAGIAAAAQAFAGAEALQANAeAHAdQAGAXADAWQAEAXgJATQgDAGABAGQgQAIgSAEQgVAFgWADQAMgPAFgTgABZhJQAIgZAQgTIABAAIAtggIgBABIATgIIAcARQgWANgSAPQgdAZgRAigAhkilQADgOAGgNQASgtAsgVIAZAMIgXARQgjAdgKAvg");
	this.shape_60.setTransform(25.5,37.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC99").s().p("Ah3CXQgsgWgMgeQgEgHgBgdQgCghgFgWQgFgVgXgbQgVgYAAgTQAAgHANgIQAMgHAKAAQAbAAAXAuIAfBAQACAAACgEIgDgxIB/hUQAXgPAMgGQAOgGAVgEQASgFAJAAQASAAAIAKQAEAFAAAGQAAAKgQAMIgjAYQgnAXg6AbQgagJgDgBIgBAEIAoA6QAUAhALAcIAIAVIAEAFIACAAIABAEQABABAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgCQAAgdA5gVQAugPAmAAQASAAARALQARALAAAKQAAAPgcAIQhHAThTAbQgfAJgnAWQgZAOgeAAQgQgBghgRgAAAggQB2hDA7gDQApgDAAAVQAAAcgvAYQgUAKhzArg");
	this.shape_61.setTransform(108.5,-71.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F0FF7A").s().p("AllEyQgIgJgNgeQgMgbAAgDQAAgKAWgLQAFATATAaQAYAhAZALIgcAYgAiaCJQgmghgOglIATgQIACgCQAbBDA9AhQgJAPgKAAQgJAAgdgbgADyiXQhEguAAg/QAAgXAFgEQAGgGAxgjQgIAlAaAlQAaAkAWAMIArAXQAXALAZgFIgiApQgUATgVAAQgXAAgzgig");
	this.shape_62.setTransform(64.4,-34.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8089DD").s().p("AmuFZQgLgbAAgIQAAgHADgIQACgFACgBQAwgwAxgtQBjhaAEAKIANAaQAQAYAcAWQgbAZhNBEQhQBHgsAqQgNgUgMgdgAAjhBQgbglgIgSIFCkRQgBAbAqAwQAtAyAiAFIlgD1QgUAAgjgvg");
	this.shape_63.setTransform(47.5,-19.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#72EBEB").s().p("AhNA8QgZgjgEgOIB8hxQASAnAfAcQAJAHAfAWIiLBtQgQAAgdgrg");
	this.shape_64.setTransform(40,-15.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC99").s().p("AgiCKIgIgFIgGgFQAUgCATgHIAJgGQgXAFgKAAQgjAAgTgPQgNgQgEgDIgCgGQAHADAUgDQARgDAHgEIAGgFQgGACgKAAQgsAAgTgXQgMgPAAgYQAAgXAVgXQAXgXAeAAQAKAAAJARIggAmQANACAbgdQAYgaAEgMIACgMIgFgGIgKAQIgLANQgUgEAAgKQAAgjAbgRQATgMAZAAQA0AAAhAeQAoAkAABFQAAA8g3ApQgrAfg/AOQgKgBgEgCg");
	this.shape_65.setTransform(30.9,58.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#72EBEB").s().p("AgIAqQg9gFgBgBQgHgGgIgUQgHgQAAgIIAEgTIAGgVQBXgIBYAWIgCAOQgDAEgIAeQgJAlAJAMQgZgJg/gGg");
	this.shape_66.setTransform(37.1,7.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F0FF7A").s().p("ABfEvQAIgNAFguIAIAWIAKAAQAAACAAAAQAAABAAgBQAAAAAAgBQABgCAAgCQAAgxgdgsQgRgYgjgjQgdgcgOgGQgIgEABAJIgMAAIgLADQA/g4BABCQAXAYARAiQAPAeAAARQAAAdgIAUQgNAkgoAeIgLAHIAMgTgABsjuQAAgTAGgQQAMgbAXANQgNAVgFAhQgEAgAIAIQgbgDAAgqgAiRj0QgJgTAAgCQAAgFAFgSIAEgeIANgBQAQgCAQABQgFAWAAASIAPA0IgsADQgDAAgIgTg");
	this.shape_67.setTransform(36.5,33.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8089DD").s().p("ACyCvQgng3gsgQQAbgcAdg9QAkhIAAg3QAAgFgEgSQgEgSAAgFQAAgHAGgWIALgeQA7APAiAzQAbAnAAAgQAABigkBjQgbBKgtBCQAHgeglg0gAk1iiQgIhBACAEQAEgfgBAkQgHABAKAAQAHAAA0gRIA4gPQAigJAaAEQgJAlAAATIAEAQIAIAVQiEAggXALQgJAEABAFIADAJIgBAJIgCACQgHgIgIhBg");
	this.shape_68.setTransform(33.8,27.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC99").s().p("ABTBJQAQgqABgaQgFgKgCgCIgGgFQgXBSgOAVQgVAggvAAIgTAAQgOgDgGgKQAwAAAfg2QAagrAAgeQAAgHgCgBIgCAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAAAABQgDADAAAGQAAAOgUAgQgRAdgJAIQgQAMgIADQgRAIgYAAQgSAAgKgJQgJgHAAgMQAAgJARgUQAPgSACAAQAQAAASgbQATgcACgZIgDgIIgBgBQgSAigHAGQgPANgmAAQgvAAAHgWQAGgWAlgLIAsgQQAfgNAQgSIAZgEQAugJAsAqQApAnAAAoQAAAigeAvQgfAygfAHIgJADQAUgIASgvg");
	this.shape_69.setTransform(40.5,74.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F0FF7A").s().p("AB2DdQgqgegrAAQgJAAgPADQgPACgIADIAEgIIgCgKQAJgCgBgKQAAgEAZgFQAagGARAAQA7AAAbAkQATAbAAArQAAAHgCACIgDACIgBAGQgFgcgogcgAgIhiQAYgxA4gRIAbAZQgcAFgXATQgLAJgaAeIgTgWgAimjKQgCgEAAgHQAAgOAZgZQAWgUAIgEIAeAOQgXAPgMAOQgQARgFAWIgFAAQgQAAgGgIg");
	this.shape_70.setTransform(39.6,40.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8089DD").s().p("AEQETQAAgHgmgSQgigQgHgBQgNgCgQABIglAEQAJgQALgrQALgtAAgXQAAgYgMgUQgNgTAAgIQAAgHATgSQAcgYAqgLQAtA/AOBFQAFAcAAAtQAAAsgGAaIgHAXIgBAFIAAgGgAkLjEQgFAAgBAEQgBAEgFAAQgGAAAAgBIACgDQAmg+ATgSQAEgFAHgCIABgBQABACgCALQAhAQA+AYQA+AXAeAPIgiAfQgPAQgFAUQiqhKgPAAg");
	this.shape_71.setTransform(28.8,30.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#72EBEB").s().p("AhWAAQACgeAcgWQAPgKAPgEQACAAAtAdIBBAmQgXAGgZAYQgWATgHASg");
	this.shape_72.setTransform(36.2,22.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFCC99").s().p("AhKBmQgZgJgMgJIgEgLQArANADAAIABgBQg+gogFgfIACgJQAMATAhAAIAJgBIAAAAQgygfAAghQAAgWAXgPQAXgPAZAAQAYAAALALQAGAEAHAPIgxANIAAABQABABAMACQANADAHAAQASAAATgJQAZgLAJgPIgBgCIgQAJQgJAFgKgDQgFgJgBgKQAagbAXADQAPABAmASQARAIAIAmQAGAYAAAUQAABMgLAOQgVAbhgAAQgsAAgmgMg");
	this.shape_73.setTransform(4,35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#72EBEB").s().p("AhhAiQACgdAEgLQAHgTAmgqICPAjQgpAngGAKQgEAIgMAsg");
	this.shape_74.setTransform(38,15.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#F0FF7A").s().p("AimCQQAFggAAgRIgEgpIgGgqIABgIQABgDgDgIIAkABQASACAJAIQAWAWAABkQAAAHgEAPIgGATIhPAPQAFgFAFghgABRgbQgHgfAjgnQAkgoAgAWQgMAIgbAvQgUAighAAIgEgBgAh+hMQgGgyA3g3QAKAAASAGQgeAggJAYQgDAKgGAng");
	this.shape_75.setTransform(35.8,25.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8089DD").s().p("AgqCWQAAgJgGgpIgHgyQAhgFA3gCQBBgJB5gmIABgBQACgBAAgHIAAgEIgBADIgrAEQAGgLATgYIATgYIBFAuQAVAUAGAsQgVAyhEAjQhbAvi5AYQAFglAAgKgAkHg7QgGAAgBACIgEAIIgBAAQgGgIgRgzQgRg2gCgXIAAgMQAEACAGAFIAIAJIDfAaIgCAGQgPALgPAfQgRAkACAeQhygSgaAAg");
	this.shape_76.setTransform(33.4,22);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgCACQAAgBAAAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAgBADAAIgFADg");
	this.shape_77.setTransform(6.2,2.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#72EBEB").s().p("AhIA6QgOgEgDgIIgCgNQgBgLAIgdQAIgfAIgGQAHgFA/gGIBFgGQgKAlAAAMQAAASAIAPIAYAiQhNAHgqAAQggAAgOgEg");
	this.shape_78.setTransform(33.6,12.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8089DD").s().p("AldDOQgEAFAAgKQAAgHANgeIAQgkQAHgVAMgUIACgFQAGAFATAEQAvAJA9AJQgLAUgEAWQgEAWAAAtgACBCeIgKgaIADgoIAegFIAoAoIAAgYQgJgZgcgYQgWgTgTgFQArgYAggsQAmg3AAhBQAAgIgDgUQgEgUgDgLQAqAlA0BYQAcA7APBDQAABAgtAsQgzAyhmAPQgOgUgNgdg");
	this.shape_79.setTransform(36.3,-4.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F0FF7A").s().p("AizD9QgJgLgBgSQgBgTAQg8IAvADQgFACgKAXQgKAXgCAYQgBAYADAPIgLACQgKAAgGgIgAA3DqQgPgVgDgSQAAgnAKgPQALgOAdACQgNAjAPAmQALAdASAPQgfAHgKAAQgIAAgOgTgABHAqQAAgLAIgoQAFgZgEgRIgDgSQADgQAOgsQAKghAAgqQAAgagKgeQAzAXAXAfQAXAfAAAqQgBBOgfAjQggAhgbARQgTAMgHAAIgDAAg");
	this.shape_80.setTransform(38.1,-7.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC99").s().p("AAYCdQgVgbAAgmQAAgQAJgYIAEgLQgNAAgFAFQgLAKAAAsQAAAKAHAXQAGAaAEAKIAHAIQgWAFgLAAQg1AAgcgjQgYgdAAglQAAgJAFgXQAEgZAFgSQgaAVgFAkIgCBBQgFgLgRgPQgOgRAAgkQAAhMBChMQBJhVBcAAQBKAAAiAoQAaAeAAAsQAAAzgNAoQgSA6gvA+QAKgDAPgKQAVgNAEgMIAFgKQAFAxgUAbQgTAYghAAQgsAAgZggg");
	this.shape_81.setTransform(28,-20.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgGAIIgBgDQgBAFAAgKQAAgEABgBIADgDIANAIIgDAGQgBADgFAAQgGAAAAgBg");
	this.shape_82.setTransform(16.7,15.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFCC99").s().p("AghC3IgKgBQgLAAgTgJQgTgIAAgFIgIgJQgJgLgFgOQgEgRAAgIIAQgtQARguAOgcQgCAHAIgPQAMgaAKABQAVAAALATQAHANAAAMQAAAjgWAgQgbAegKANIAAABIABACQABABAHAAQAXAAASgZQATgdAKg2QAXALAfAVIADAAQACgBAAgHQAAgGgNgPQABgCALgTQAOgcAHgsQAZAOgBAiQABAKgFARQgFARgFAKQgpBWgGAKQgMASgTAUQgTAUgIAGQgJAHgJADQgIACgEAAIgDAAgAAQgZQAIgOAMgdQAGgVgBg/QAYAHAIAxQAAAogKASQgMAPgHANQgPgKgNgFgAgUhGQgSgHgTAHQAKhrAjgFQAMgBAJAQQAKARAAAZQAAAmgEARQgDAMgJALQgHgQgQgHg");
	this.shape_83.setTransform(120.7,-39);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#72EBEB").s().p("AhQAoQgNgpgBgJQCYhdAQAFIAAAWQAMBLAJAYQgcAJgyAZQgtAXgiAUQgFgNgNgvg");
	this.shape_84.setTransform(44.6,-17.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8089DD").s().p("Al3EJIgPgKQgrgbgsgrIADACQAFACgCgFQgCgFBXhhQBXheAQgFQADATASAfQANAXAPAUQhpBmgsBBIAQANQABgBAIAGIgGAIIgBAAQgCAAgIgEgABIhxIgEgcQgNgoAGgJQAHgIATgKIDLgwQAIgBC0gLQgFAMgJAgQgKAkAAAKQAAAIADAXIAGAlIg9gCQhHAAhvAOQhgAMgjAKQgLgLgGgag");
	this.shape_85.setTransform(55.3,-10.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#F0FF7A").s().p("AmSB0IgSgkIAtgjIAKAwQAHAZARAkIgdAUQgJgNgXgtgAibAOQgIggAAgPIABgeIAAAAIA0gSIAJBKQAEAGANAoIg6ATQgGgQgHgcgAFSAFQgPgQAAg4QAAgWAQgjQAPgjAAgLIAlgDIAGABQgTAygMAdIgIATQAAATAPAdQARAfAZAQIAIAEIgUAAQgxABgQgVg");
	this.shape_86.setTransform(70.6,-21.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFCC99").s().p("AAtBtQgQgogdgmQAAABAAAIQAAAJAAABQgggKgaggQgVgZAAgOQATgHAGgGQAEgFAIgTIgCgBQgpAWgMAAQgPgBgPgFQgegIAAgPQAAgZAnAAQAbAAAbgNQAbgMARAAQAugBA5AVQBLAaAAApQAAAKgEAFIgcAAIgagKIgwgVQgqgbgHgCIgCADIAcAoQASAaAAARQAAAPgJAQIAAADQABABAGAAQAGABAEgLIACgFIAJAlQAEAPAbATQACAPgKALQgIAJgMgBQgQABgIgTgABqBKQgGAAgHgFQgGgFgCgGQgEgQgMgeQgKgWgEgWIgCgEQAmAVAlAPQASAMAAAaQAAAFgTAbQAAAFgHAAIgOgBg");
	this.shape_87.setTransform(34.4,94.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8089DD").s().p("ACGFnQgygUg0gEQBKiFAAiEQgBgPgGgkQgIgPAAgIQAAgHAagTQAlgZA0gHQAUAeAJA0QAHAkAAAbQAAA7gSBZQgQBQgYBKQgNgLglgPgAi4kPQgfgUgFAAQgGAAgGAKIgJAAIAAgJQAAgaAOgYQAKgSAZgaIBPAwQAmAWAnAbIgjAfQggAcgFAHIhMgyg");
	this.shape_88.setTransform(28.4,42.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#F0FF7A").s().p("AAnE/QgkgHgSAAQgQAAgSAHIgLAFQARgbANAAQATAAAuAMQAvALANAHIAGAFQgdgIghgFgAAThqQAAgCASgOQAUgQAUgLQA7gfAHAnQhCAPguAqQgMgMAAgKgAiOkKIAzg5QAYgTAXAcQgcAVgSATIgaAeg");
	this.shape_89.setTransform(33.5,48.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#72EBEB").s().p("AgwAeIg4guQBDhGAIAAQAHAAA2AwQA4AuARATQgKAAgnAVQgsAXgKAQQgQgYgighg");
	this.shape_90.setTransform(34,27.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#72EBEB").s().p("AAbBFIAAAAIAAAAIgfgQIgBAAIABAAIgagOIgBgBIgbgRIAAgBIgagSIAAAAIgSgKIADgFQAOgpAlgUIAAAAIAJgFIAAAAIAYANIABABIAbANIAAAAIABAAIAdAOIAAAAIAgALIABAAIAAAAIAbAHQgyAngEA9IgWgLg");
	this.shape_91.setTransform(33.6,32.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8089DD").s().p("AEdDlIgggCIAAAAIgfgBIgggDIgBAAIgkgFIAAAAIgkgGIgBAAQgZgGgZgIIgBAAIAAAAIgJgBIgBgCQABg+ArgsIABgBIAHgHIAYAEIABAAIAjADIAAAAIAkACIAAAAIA2AAIABAAIAlgBIABAAIABAAIA3gFIAAAAIATgCIgEAMQgQAwANAzIABACIANAgIgQAAIgBAAIgsACgAkDAEIAAAAIgVgXIgBAAIAAAAIAAAAIgUgaIgBAAIgTgbIAAAAIgTgbIAAAAIgTgcIAAAAIgBgBIgBAAIgBABQgBAFgGgBQgDABgCgDIgBgBIAAgBIgBAAIgBgBQAAgGAGgBQADgPAQghQATgnAGgFIABAAIAAAAIgBABIABABIAAACIgDAJIgBAAIABABIARAcIAAABIATAdIAAAAIAUAbIABAAIAAAAIAAAAIAVAaIAYAYIAXAYIABAAIAAAAIAPAMQgpAWgQAnIgOgPg");
	this.shape_92.setTransform(41.6,23.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F0FF7A").s().p("AFACHIAAAAIgogMIAAAAIgJgCIgGgEIAAAAQgEgFgDgFIABAAQgHgSgFgWQgJgyAXgvIAFgDIAAAAQAsgeAfAEIABABIAJABQgUAOgSAUQgMAPgDASQgEAcAFAaIAFASIAEAIIAEAGQAGAHAHAGQARAMARAGIAGABQgQAIgRAAIgMgBgAh5BNIgDgCIAAAAIgPgGIgFgBIAAgBIAAAAIAAgBQADg7AxgiIABgBIAJgGIAKACIABAAIAUADQguAugCBCIgWgGgAlcg4IgBgBIAAAAIgOgNQAMgqAogUIABgBIAFgCIACACIgBgBIABAAIAAABIAAAAIARAMIAAAAIAMAIQgqAYgRAvIgPgOg");
	this.shape_93.setTransform(55.1,34.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFCC99").s().p("AgGBwQgPAAgMgGQgPgHADgQQADgNAIgJIAPALQAVAJAYABQgDANgJAJQgJAIgKAAIgBAAgAhXBDIgGgBIgZgIQgbgHgJgZQgJgYADgaQADgWAOgPQATgVAXgOIACgCQAMgHAOgDIAKgCQAhgFAbATIADAJQALAVgBAbQgBATgHARQgDAIgIAIQgFAEgGACIgIACIgGABQgIAAgIgDQgHgCgGgGIgBgDQgCgWACgZIAAAAIADgfIAAgIIgDAFIgHASQgFAMgCANQgEAVABAUQABAQARAGIAJAEIABAAIAHAGIAAAEIgKAPIgFALIgagGgAgFA7QgOgFgJgLIAHgDQAGgBAFgDQAWgLAIgZQAYANAUAaIgBAHIgOANQgHAFgIAAQgVgBgSgEgAB7A+QgagEgOgVIgDgEQgMgPgOgNIgbgWIgCgDQAHgjgNghIAcALQAbAMAbANQAWAKAQAQQAUAVACAaQABALgBAKQgBAHgFAFQgKAJgMAAIgKgBg");
	this.shape_94.setTransform(102.7,39.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#72EBEB").s().p("Ag+gBIgogpQATgVAQgJQAVgLAhgCIAAAEIB0BtQgPADgeATQghAUgIAQIAAAAQgBAAhOhXg");
	this.shape_95.setTransform(33.2,36.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8089DD").s().p("ADHE4Qgmgvh4iMIgGgGQAagkA0gVQAKAAAQAEIDVDRQgVAGgPAHQgbANg0A6IgmgvgAkRjYQgrgygegRIgFgBIAggoQAOgWgCgLIAIgBQgBAFAAAMQAAAKABgIICtCbQgqAPgFAFQgJAJgTAQQgTgQg1g9g");
	this.shape_96.setTransform(37.2,39.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC99").s().p("Ag4CqQgXgpgtg+Qgug/gBgtQABgKAIgUQAJgUAFgGQAHgHAhgPIAFgCQAbgTAPAAIAWACQAOAAAvgWQAxgYAJAAQAHABAGAFQAJAIAAALQAAAUgaAJQg0ATghAWIAhgFQAGAGAwAiQAtAgAOAOQAaAaAJAdQgBAQgJAJQgIAIgFAAQgGgBgDgBIgFgEQgNgEgmgpQgmglAAgHQAAgGACgCIACgEQgmAWhoAwQABABAAABQAAAAAAABQAAAAABABQAAAAAAAAQACACAGAAQALABAMgHQAlBJANAmQAAALgGAJQgJALgQgBQgIAAgIgOgAA7CUIgCgBQgKgHhIhwIArgYIALAMIgBAAQACAGAjAnQAdAhAAAgQABAHgKAJQgJAHgHAAIgKgBg");
	this.shape_97.setTransform(86.5,86.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F0FF7A").s().p("ACqE6QgUgDgQgXQgSgZAAgfQAAgHAWgWQATgTAHgFQAHgFgJAJQgJAKAVgUQAWgVAagGQAagIABACQAAACALgDQALgCAFAAQAaAAAQAZQhCgBgwAtQg0AwAVA9gAiLhPQAPgSAYgRQAagRAQAAQALAAADgCIAWAWQgPACgdASQgiAVgMAVIgbgegAk+kQIAfgaQAOgKAkgGIAWAUIACACQgKgBgaAOQggAPgMASg");
	this.shape_98.setTransform(50.6,54.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8089DD").s().p("AClAVQgRgFgCgHIAAgbQAAgeAJgXQADgKARggQA2AEBuAmQBfAiA9AeQghAOgfAqQgaAjgLAeQh5g5hsgkgAnhBEIgDABQgKgVAAg4QAAgVAEgXIAFgBIABAEIACABQBCgVAkgKQAugLBPgRQgHAkAAAKQAAAUAMAnQgRABhiASQhFAOgsANQgFADACASIAAAGIAAgDg");
	this.shape_99.setTransform(50.3,11.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFCC99").s().p("AgWBnQgYgRAAgOQAAgFAFgGIAFgFIAsARIACgDQgKgSgbgOQgagNgSAAIgPACIgGAIQAXAGAKAGQgGAMgGADQgFAEgIAAQgaAAgQgQQgUgUAAgmQAAgsApggQAsgjA/AAQAzAAA1AwQAyAtgLAVIgDAHQgWgegEgDIgCABIgBACIAIATQAGANAAAKQAAAKgDAfQgGAAgFAHIgIAEQABgNgKgOQgJgNgJgEIgCgDQgBgBAAAHQAAAEAEAPQADAOAAAEQAAAagRAQQgSAQgiAAQgNAAgWgRg");
	this.shape_100.setTransform(113.7,29.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#F0FF7A").s().p("ADnCMQgNgNAAgYQAAgWAnguQAcghANgJQAPgKAHgDQARgIAZAAQApAAAeAcQhdAOguAuQguAuAXAzQgcgEgMgNgAhbgaQgVgFgBgEQABgmAFgYQAIglAHgKQAPgVAiARQgRAagIAsQgGAmAEATIgVgFgAmwhiQAAgUAKgPQAPgXAfAGQgIAegEAbQgKA1AQAAIgmAEQgMgMAAgyg");
	this.shape_101.setTransform(69.8,14.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#72EBEB").s().p("AgMA1Qg1gDg4AEQgFgfABgJQgBgQAHgfIAHgMQAMgNATgCQAagCBEAAQBMAAAmADQgdA4AABCQg/gJgvgBg");
	this.shape_102.setTransform(46.2,5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#72EBEB").s().p("AhfgDQALgaAbgWQAZgVAQABQAGgBAKAJIAaARIBGAjQgjARgOARQgLANgTAkg");
	this.shape_103.setTransform(32,34.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8089DD").s().p("AAlCmQACgRAZgbQAZgdAUgCIAZgIIAvASIAoAOQAsANAzAKQgZATgOApQgNAkAEAYIjnhcgAj/hJQghgtgJgGQgJgGgFgJQgEgGABgDQAAgFACgLQAEgOACgIQACgXAOgYQAIgNAHgLIgDAOQAFAaA1BEQA6BMAmASQgiAMgnArQgTgTgng2g");
	this.shape_104.setTransform(35.8,27.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F0FF7A").s().p("AC7CeQgZgSAAgaQAAg7ApgrQArgpAxALIAPAAQgkACgdA3QgaAwAAAfQAAALADATQADAYAFAGQgcgKgPgKgAh+AGQAFgPAVgaQAegmAhgCIARAHQgoAOgWAcQgMAPgNAbgAk0h7QASgRALgPQAKgJAsgNIARAMQgMAFgbAbQgdAbgCAKg");
	this.shape_105.setTransform(48.5,41.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCC99").s().p("AhQCCQgNgKAAgNQAAgIADgJQAFgRANgMQAAAZAaARQAUAPAPAAIgcATQgGADgNAAQgKAAgMgKgAARBnQgBgCAAgMQAAgSAmhCQAkg9gHgnQAQAUAPAlQAOAiAAAFQAAA6gaAeQgUAXgcAAQgeAAgHgJgAgqBNQgHgMAAgVQAAgIAGgKQAIgNAIAAQADAAAMAHQALAHAQgCQgCAFgJAhQgHAhAAAFQgcgFgLgTgAh2AmQgJgUAAgSQAAgzAhgpQAmgvA/AAQATAAARAMQAXASAAAiQAAAlgTAYQgRARgVAAQgIAAgMgFQgSgLAAgOQAAgRAMgUIARgcIAAgBIgTAKIgOAIQgDAAgHAaQgGAWgBAIIAIAPQgEAEgPAWIgPAZQgBACgZAOQgJgIgHgRg");
	this.shape_106.setTransform(85.2,55.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8089DD").s().p("AEUE/QhigvhWg3QhEgtgwgqQAXg7A9gVQCFBMAgARQAuAWB+A0QgtAogKAPQgOAWgIAtgAlAi0Qg8hIADgWIgCABQACAQgHAHQgEgCgEgGQgEgIAAgHQAAgWAJgPQANgXAegFQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAAAQgCACAAAFQAAAJAlAnQBZBdAkAoIg2BDIhRhkg");
	this.shape_107.setTransform(43.6,34.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#72EBEB").s().p("AhdgTQAHgWARgUQAPgTAUgMICABmQg1AegWA1g");
	this.shape_108.setTransform(33.6,33.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F0FF7A").s().p("ADTD7QgKgIAAgVQgBgpAigqQAhgrAiAAIAcAEQAeAEAGAEQhCADgjAbQgiAbgBAwQABAQAQAbIgNABQgOAAgIgGgAjJgUQAOgiAegcQAYgWAKAAQAJAAAOAQIgeANQgLAKgQARQgZAcgCAPgAlsi9QAwg/AFgEIAUASQgIAFgUAUQgaAagHARg");
	this.shape_109.setTransform(57.7,46.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFCC99").s().p("AiQBpQgcgRAAghQAAgXAWgTQAlgfBVAAQAKAAAVADIgfBOIABABQAHgIALgEQAJgFAMgtQALgrAGgcQAFgdARABQAMAAALAKQAQAPAAAjQAABOg5AuQgrAkgvAAQg6AAgdgSgABmAKQAKgkABgVQAAgZgPgVIgUgVIgKgEIAFgCQAHgDAHABQAXAAAKAeQAGASAAAUQAAALgIAqQgJAogQAOIgIADQAIgOAJgggACNgJQAGgcAAgOQAAgHgDgKIgMg1QASABALAPQADAEAEATQAFATgBAHQABARgJAXQgKAWgLAEIgKAMIAIgfg");
	this.shape_110.setTransform(100.1,61.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#72EBEB").s().p("AhTACQAAgNARgdQASggAQAAIA1AaQA3AbAIACQgWAPgNAYQgMAYgBAbIh3hHg");
	this.shape_111.setTransform(30,29.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8089DD").s().p("ABQDHQg4gIgZgMQAAgHAIgdQALgfAGgIQARgXADAAQAHgBAyADQApAAAkgKQAmgLArgZQAAAkAwAgQApAbAdgBQhLAqhNARQgrAKgXADIgQABQgXAAgogFgAkwgMIgkguIgQgTQgUgRAAgKQAAgQAUgwIAUgjIADABIgBASQBXBpAPAPQAMALAXATIAHAFIgdAhIgdAjQgdgVgbgeg");
	this.shape_112.setTransform(40.6,21.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F0FF7A").s().p("AiuBbQAAgbAIgVQANglAjgGIAPADQgOAHgRAnQgPAjgCAQIgFAAQgSAAAAgJgACyALQgZgZAAghIgCgPIAAgCIAcgjQgFAVAAASQAAAfASAPQAWARA3AAIAWgCIAXgCQAEgBAYgQQAVgMgHAOQABAagyARQglAMgbAAQgmAAgbgcgAlkgPIARghQALgQAbgXIAPALQgMALgHAIQgRAWgPAig");
	this.shape_113.setTransform(53.3,28.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC99").s().p("AhGChQgSgDgIgQQgHgLAAgLQAAgTAPgjQAPglABgWIADgvQAEgtAGgRQAGgQAQAEQAQADAJAWQAEAUABAXQAAAcAAA5IABACIAMgBQAHhIAAgKQAAgYgFgXQgIglgTgNQAFgPATgHQALgDAKgBQAQAAAIBBQAHA/gHBJIABABQAKgCAFgaQAEgYAAg3QAAgIgHgoQgHgpgEgJQAXAGAQAlQANAeAAAbQAABZgaBHQgZBDgaAAIgvALQgNAAglgJg");
	this.shape_114.setTransform(83.4,9.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8089DD").s().p("AgkAeQg9gngNgGQgCAAgBAHQgDAFACABIgCADQgJgEAAgKQAYhKAFgHIADgFQABAAABgBQABAAAAAAQAAAAAAABQAAAAAAAAQgCADACADQAHAKA2ASQAeALB9BWQgxAcgTApQgcgZhCgug");
	this.shape_115.setTransform(19.3,11.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F0FF7A").s().p("AB6DLQATgOAhgRQAXgVAAg4QAAgjgPgeQgSgigkgMQAZgFAcAZQAkAiAAA8QAAArggAhQgcAdggAAIgDAAgAjYiHQAOgPAGgPQAJgNApgYIAkAeQgYAHgSATQgLALgSAbg");
	this.shape_116.setTransform(48.3,36);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#72EBEB").s().p("AgRAoIgvgoQAIgJASgYQAFgFATgKQASgLAHAAQAGAAATARQAWAUAHAFQgJAOgVAtQgIASgXAAQgCAAgTgUg");
	this.shape_117.setTransform(37.9,26.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFCC99").s().p("AhWB4Qg6g4AAhBQAAgqAsAAQAKAAADAOQAIAjANAiQACAEATAcQAUAcAFAEIABAAIAAgBQgQgcgGgOQgKgVgLg2QgEgRgNgRQgNgNAAgBQAAgGANgdQAMgdAAAHQAAgJALgGQALgFAOABQAjAEAAAsIgEAgIgDAfQAAAsAEANQADAHAOAGIABAAQgJgbAAgKIAIhrQAAgXgVgZQAMgOAHgDQANgGAXgBQAGAAAFAKQAHAPAAAbQAAAGgGATQgGAbAAAqQAAAFAGAKQAIAMALAFQABAIAAgKQAAgEgFgNIgFgNQAZAJAXAiQAXAlAAAjQAAAwgnAVQgeARgxAAQg6AAg3g2g");
	this.shape_118.setTransform(51.5,38.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC99").s().p("Ag9BoQgpgxAAg+QAAgVAPgOQAOgNASAAQAMAAAEA1QAEA+AYAeIAAAAIACgMQgKgYgDguQgEgsgIgTQgEgLgOgFQgLgDgJACQADgaAOgMIASgLIAKgCQAMABAFAFQACADgEBlQAAAJACAJQAEANAFAGIABAAQgDgVAAgIQAAgfAGgvQACgQAAgKQAAgMgBgEQgEgNgQgCIAYgHQARgEAFAEQAEADACAJQADAJAAAFQAAANgHAUQgGAUgBAhQAAAzAbACIABgCQgHgPgEgLIgBgKIAgAhQAeAnABAjQgBA/hUAAQgpAAgngug");
	this.shape_119.setTransform(24.6,63.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#72EBEB").s().p("AhPgHQADgFAzg3IBpBNQgMADgUARQgXATgKASg");
	this.shape_120.setTransform(28.1,24.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F0FF7A").s().p("ABVEDQgCgLgagrIgagrQABgGgIgIIgHgFQBMASAABhQAAAHgEAPQgEAPgDAGIgHAHQANgfgDgSgAAdiFQAUgdAOgKIASgNQAQgFATAQQgZALgLALQgOAMgSAbgAhzj4QAdgtAZgOIAQALIgNAKQgVAXgTAbg");
	this.shape_121.setTransform(28.3,45.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8089DD").s().p("ABuD8QgdgggeAGQApg4AYg4QAbg/ABgvQAAgFgCgKIgDgJIgDgCQgMAZgFAVQgSgPgBgJQABgRAYgUQAUgRAMgDQAPgEAjAoQAaAZADBBQgOBagMAoQgMAngXArQgXAsgHAJQgEgwgfgigAjhjnIgGALIgBACQABAPgEgYQAAgXAUguIAQglQABgBACALIABABICXBiIgaAeIgaAfIiBhEg");
	this.shape_122.setTransform(24.7,36.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC99").s().p("AAHBvQgZgHAAgJIADgYIAugEQgHgDgYgFIgXgEQgVAAgaAXIAJgDQAAgBANgBIAOAAQAAAcgUAJQgJAEgSAAQgGAAgSgIQgVgJAAgHQAAgFAGgMIAMggQAYg8AYgyIAKgTIACgLQACgGAOgGQAMgEAJAAQA/AAApAZQAeATAEAUQgBAHgJgIQgOgKgRgGIANAKQAZAUABAfQABAUgIANQgDgFgRgLQgQgKgGgCIAIAFQAUAUAAAfQAAASgTAVQgUAXgZAAQgLAAgWgFg");
	this.shape_123.setTransform(121,22.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#72EBEB").s().p("AhdAgIAEgvQAEgeAMgVICnATQgIARgJAeQgOAuAEAVQhDgMhdgXg");
	this.shape_124.setTransform(38.9,18.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#F0FF7A").s().p("AFABkQgOgJAAgHQAAguAWg0QAMgdAPgbQARgmAfgBQARAAApALIgMASIguBVQgFAKgSA4QgMAngMAAQgTAAgRgKgAjYAyQAMhyARAAIAxACQgFALgPAzQgNAwgBAJgAnLABIACgaQAJg4AFgOIApAHQgEANgGAbQgIAmACATg");
	this.shape_125.setTransform(69.6,20.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8089DD").s().p("AgFBfQAAgyALgcQANgbgBgEIAMgSQANgDAUABIBmABQBlAABAgGQAmgDB2gQIgTAaQgYAtABAFQgMAvgDAlQg0AEg7AAQh7AAjIgLgAnAgOQgKgdgag+QA3AMBtAVQgHARgEAaQgHAhAHAUg");
	this.shape_126.setTransform(55.1,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).wait(1));

	// Layer 4
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AiNG3QgYgCgYgGIgCgBIgDgEQgbgBgQgWQgIgMgDgQIgNgIQgJgGgGgIQgEgEgCgGIABgIQADgSAPgNQAGgGAJgDIATgHQAsgIArgTQgbgHgLgdQgFgOADgOQAEgPALgKQAJgHAKgCQAMACALAGIApAXIACgEQAHgPAjgTQAhgTAVgZIAAAAIADgDQAggiAcglQASgXAOgVIAVgjIAJgSIAAgBIgKgLIAAAAIgmgkQgjgigggbQgpgjgtgjIAAABIgMgKIAAABIgOgKIAAAAQgigZgggUIgwgfQgEgCgCgEIAAgBIAAgDIAAAAIABgDIgBAAIAAgGQAEgOAMgVIATgkIgFACIgDgDQACgDAIgGIAGgDIgBgCQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIABgBQAFgBAFADIAAgBQAYAJAXAMIAyAZIAHAFIAoAWQAoAZAoAbIgBAAIAdATIAAAAIA0AmIAGAFIAAAAIALAJIAeAdQAUATASAWQAMANAJAPQAMAUAHAZQAIAagDAbQgDAWgFAWIgGAUIAAAAQgIAZgLAZIAAAAIgYAuQgLAXgOAVIgbAqIgOATIgTAYIgiAqIgOARQAAAEgBAFQgCAJgEAHQgEAIgGAHQgHAIgHAHQgZAWgfACQgJANgNAKIgnAZQgPAJgQADQgNADgOAAQgOAAgNgDg");
	this.shape_127.setTransform(23.9,46.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("Aj+FhIgMgDIgFgJQgEgJgBgIQgCgIACgIQACgIAFgHQAGgLAJgGQAHgIAJgHIAKgDIAZgGIgWgcQgMAAgIAJQgYASgeAIQgLACgKgBQgJgCgHgFQgHgFgEgHQgFgJgBgJQgBgJACgIQADgIAGgGQAGgHAJgGIAJgGIAJgDQAQgZAXgRQAdgUAiAAQAOAAAOADQASAEAQABIAMABIAAAAIADAAIADAAIABAAIAAABIAJAAQAJgFAJgHQANgLAogFQAogEAcgOIAAgBIAFgBIAAAAQArgSApgXQAZgOAVgPIAAAAIAhgWIADgCIgagWQglgcghgYQgrgfgvgeIgLgHIgOgIQgjgVghgRIgsgXQgDgIAAgKQAAgiAbgsIAOgWIABADIABAAQAYAGAYAJIAwAUIABAAIAHAEIAAAAIAoASQAsAUAoAXIAeAQIA1AgIAHAFIALAHIAAAAIAfAaQAWARATAUQALAMAKAOIADAFIAAAAQArBLgvBGIgHAHIAAABIgDAEIAAAAIgOAQQgQAUgVASIgnAhQgTAPgVAOIAAAAIgpAbIgVAMIgaAPIgBAAIgwAYIgUAKQgBAEgDAEQgGAHgGAEQgHAGgIAFQgHAFgJADIAAAAQgiALgggKIgBAAIgFgDIgfAKIggAIQgMADgLAEIgWANQgOAHgNAEQgLAEgKAAIgMgBg");
	this.shape_128.setTransform(17.8,36.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgBDCQiJgtgIgVQgdAMhYAIQghAAgUgWQgPgZgIgFQgTgMgEgEQgOgPAAgZQAAgLAGgTIACgUQAAgOAZgQQAPgKATgIQAQgHAbgFQAZgFAJgBQA3AAA4AZIBSAjIBEAcQBCAcA6AQQhxhgghgXIhjhBIgGgDQgCgBAAgHQAAgEgBgBIAEABQACgBAxhZQAAgBgBgBQAAAAAAgBQgBAAAAAAQgBgBgBAAIgDABIgCgBQAAgBAGgBQAcABBsBEQBhA7BFA2QA2AqAiAyQAkA0AAAoQAAAyg4AhQgzAehHAAQg/gBiJgtgAhsCEIACgDIgDAAg");
	this.shape_129.setTransform(11.3,25.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AhmB0QhOhHgWgYQgLgLAAgGQABgEAGgWIAHgZQgkACgWgPQgUgOgBgcQAAgIARgOQAUgRABgCQAIgMAGgPQAFgNgBgEIgMgfQAAgTAfgZQAmgeAsAAQArAAAsAPQAtAQAaAbQATAVAMACQANAEAeAYQAfAZAFANQAQAnACAKQABAIAAAVQAAACAQAcQAUAiAMAZQAlBXAOAoQAOApgBAaQABAggWAUQgZAZgwAAQhdAAjBixgAjPjKIABgCIgCAAg");
	this.shape_130.setTransform(23.5,12.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgbE5IALADQgZgEgXgLQgYgNgTgTQg3g7g0g7QgcgggcgjQgNgRgMgUQgCgEABgGIAGABQAGAEAFAFIABABQgDgIgFgbQAAgLAEgcIAFgbIgBgBIgCAAIgBgBIAAgEQAAgSAogFQArgGAYAiQAmAnAaAdQBOBXAbAhIAFgZIAAgFQALgiAEgTQAHgRAGgOIAAgDIAAgCIgIgJIgDgFIAAgZQARgqADgOIANgVIgCgKIgGggQgDgFgFgDIACgEIgHgJQAAAAAAAAQAAgBAAAAQABgBAAAAQABgBABAAQgMgPgMgHIgOgLIAAgCIgCAAIgIgIQgYgiAMgaQAHgOAPgIQAOgJAhAOIAKAFIAAAAQAMgHATAAQAIgBAJABQAAgHAHgIQAGgFAIgDIAAAAIgBgBIABgCQANgCAHABQBOAEAmA8QAmA9ABAmQACAlgDASQgCATgFAKQALAEgBAbQgCAigOAgQgLAUgPANQgKAJgWAMIgBAAQgLAZgoA6Qg7BVgrAnQgPAPgRAKQgFADgHAAIgKAAQgUAAgWgEgAhsAzIAAAAIgBgBgAiFAXIADgBIgBgBg");
	this.shape_131.setTransform(30.4,9.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AjZGIQgKgHgJgOIgOgCQgKgCgIgFQgFgBgEgGIgCgHQgDgTAJgSQAEgJAGgHIAPgPQAlgbAggmQgaAFgTgWQgKgLgCgOQgBgRAGgOQAGgLAIgGQAMgEALACIAzADQAEgCAEAAIABABQALgXAygHQB/hIBShqIgEgEIgCgCQhghXiNg9IgCgCIAAABQgtgUgygRIgDgBIgBgBIAAgBIgBAAIgGgBIgBgEQAAgGAVgtQAWgwANgQIABABIAAgBIABAAIAEAAQAnANBTAfIADABIAnAPIAAABIAPAGIABAAIABAAIAAABQBbAlBHBCIAAgBIACACIgBAAIABABIAFAFIABABIARARQBaBfgfBYQgeBShQBLQg1Ayg9A2IgCABIgBADIAAAAIgGAQIAAABQgJAcgvAGQgEAAgDgCIgXAlQgKAPgNAKQgXASgaAHQgXAIgWAGIgDAAIgEgCQgMAFgKAAQgNAAgMgHg");
	this.shape_132.setTransform(22.9,41.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AkNDPQgMAAgCgHIgFgEIAAAAQgMgKAAgMQAAgTALgSQgPgIABgOQAAgoAagaQgNACgHAAIgBAAQgagCgLgJQgOgLAEgTQAFgcAlgSQAigSAvgBQAbgBATACQACgEADgBIANgFIAAAAIAEgBIgZgEQgEgBgCgDQgDgEAAgEIACgFIABgBIgEgYQgGgkAAgKIABgQIABgEIAEgNIgBAAIAAAAIAAgBIABgOIAAAAIABgBIAAAAIABAAQBbATBtAlIAAAAIABAAIAyARIAAAAIABAAIgBAAIACABIAAgBIAIADIAAAAQBIAZA2AdQA/AjAnAnIAAABIASAQIAAAAIAAABIALANIAAAAQAOATACATQAFAigmAeIgBABQgNAHgQAHIgCABIAAAAIAAAAIgBABIgTAGQgDABgDgBQgjALgxAIQhEAKhFgBQg5APgqgYQgDgBgBgEQgOACgRgCQgrgEgOAEIAAAAIgXAFQgIACgZAPQgeARgSgBIgHABIgBAAIgBAAgAABgQIgBgCIgRgHIABADIABABIAAABIACAEIAIgBIAGABg");
	this.shape_133.setTransform(23,21.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AjsEvQgOgLAAgWIAAgOQAAgGgEgCQgIgEgBgDQgGgKAAgaQAAgTAKgbIgKAGQgRAJgSAAQgcAAgBgbQAAgjAhghQAhgjA4gRIArgbQAogaAcAAQAEAAASAFQASAFAFAAQAKAAA9AHQAegCBCgYQBCgXgyARIgOgJQhhg4gXgQQgLgDhGgdQgzgUgYgDQgIgBAAgFQAAgSAHgrQAJgwAIgSQDrBCCFBYQBvBLAAA7QAABllmBzQg2ARgWAKQgYAKgKANQgaAigdATQgUAOgHAAQgLAAgIgIg");
	this.shape_134.setTransform(20.5,30.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AhgE0QgKAAgJgDIgSgHIgBAAIgOgZIgagIIgpgNQgOgEgOgDIgfgBQgSgCgRgEQgMgDgLgGIAAAAIgLgJIAAAAIgKgKIAAgBIABgLQACgLAFgIQAEgIAHgHIAAAAQAIgHAKgEIAAAAQAMgGAOAAQAMgEAOgBIAAAAIANADIAAAAIAaAJIgCglQgLgFgNADIAAAAQglACgjgKQgNgFgJgHQgIgHgEgKQgEgIACgKQABgLAFgKQAFgJAJgGQAIgGAKgDQAMgDANAAIAMAAIAMADQAggOAigBQAqgBAiATQAOAJAMALQAQAPARANIgBAAQAKAHANABQANACANAAIAAAAQAQACAPAEQAIACAHADIAFADIADADIAUAAQALgDAKgEIAAgBIBDgbIAAABIAXgLIAfgQIgpglQgagZgbgWIAAAAQgMgLgMgJIAAAAIgigXIi2hfIgBAAIAAgBIACgJIAAgBIgEgCIgCgPIgDgJQgGgRAFgTIAKguIAFACIABgBIAGgDIABgBIABAAQBuAmBoAvIAAAAQAtAUAmAbQAeAUAeAVIAAAAQAnAcAjAgQAaAXARAeQARAagFAhQgHApgTAnQgQAfgcAUIgBAAQgVAPgXANQgQAJgRAIIAAAAQgaAMgbAJQgYAJgZAGIgBAAIg2ANIgNAEIgOACQgIAJgIAHIAAAAQgJAJgIAGIgLAHQgIAEgJACIABAAQgOAEgOAAIgEABQgQAAgQgFg");
	this.shape_135.setTransform(19.4,31.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AjzENQgjgSgYgeQirjGARgCQgLh5AAgKQAAgIANgDQARgFAsABQAjAAAUALQAIAFAKANQAoAyBqCPIAGAGQA6gwA5hKQA1hIAOgsQAXhHBFgrQARgKA4gFIBAgDQAEABAggLQAggLAJAAQAbgBAKALQAKAJAAAXQAAAbgRAOQgOAKgkAIIgKABQAfAMBdAMQA2AHAAAhQAAAagYAMQgLAGgTACQgHATgFAFIgPANQgHABgPAFIgLACQgFABgCAHIgBACQgIAPgIAGQgOAGglgFQgfgBgHAIQgLARgKAEIgVAKQgWAKgOgCQgvA2hMBAQg9A2gnAZQgnAcgOAHQgUAKgkABQgkAAgmgVg");
	this.shape_136.setTransform(49.8,14.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("Aj2DNQg2gRgWgSQgigcgQgTQhWhmgKgPQgRgWg1hFIgBgGIAJglQAFgcABglQAAgGgFAAQgDAAAAgFQgBgKACAEQAFgCAggEQAegEALABQAhAAATAOQAHAEANASIB2CbQAJAMAnApIAvApQCYhEA4gtQAag0AkgYQARgMANgCQCRghAHgDIAmgWQAegPAUAAQAUAAAKAMQAKANABAXQAAAWgMAOQgSATgrAMQAeAHATAAQAKAABUgIQAdAAAPANQANALAAAUQAAAEgJANQgMATgQAMQgPAJgFAMQgIAPgJAKQgIAIgJABQgJABgBABQgIAGAAACQABAEgCADQgCADgJALQgLAMgEACQgDACgqAGQgrAHgSAAIgdgDQgagBgNAHQgSAKgFABIgSAJQgNAGheAaQhmAfgiAJQg1APg+AAQgbAAgygQg");
	this.shape_137.setTransform(56.4,23.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AlhBgQgngpgyhLQg1hRgWgYIgCgBQgBgBAAgGIAPgSQASgYATghQAHgPAEgDQAFgEAOAAQAYAAAzAzQAUATBeBpQANAQA9A0QBKBDASAAQCSgaAZgTIAUgYIAUgVIA7gfQAkgSAUgSQAQgOAggyQAVghAZAAQAIAAAMAMQARAPAAAYQAAAYgKARIgeAoQArgSA1gjQAngaARAAQANAAALAPQALAOAAAMIgCASQgEAQgGAGQgGAKgIAIIACAIIACAOQAAAGgGAPQgFAOgEAIIgJAHQgGAGgBAQIABAAIABAIQAAAegaAbQgpArhhAcQgaAIgpAAQgxAAgbAFQhBAKhtAAQjWAAiAiHg");
	this.shape_138.setTransform(51.3,24.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AD8FbQgUgDgggWQgfgWgmgHQgngHgSgMQgRgMAAgVQAAgTANgOQAOgSAaAAQgigwhKhOQhThagwgdQgMgHgHgGQhTg2g9gdQhZgrh6ghIACAJIgDAJIgEABQgCgBgDgKQgDgKgBgHQAAhTAMgVQAGgKAGAGIDtBOQA/AXBVAuQBRAqBWA+QCTBjAtBOIASAFIAigQQAjgPAdAAQAjAAALAUQAHANgEAeIAKgCIASgCQAYAAAQALQASANABAYQgBARgQAMQgQAMgnAKIgMAEQA2AIAYAQQAUAOABAXQAAAagZAFQgMADhNAAQgLAAg8ARQg2APgWAAIgFAAg");
	this.shape_139.setTransform(55.4,36.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("ADXGlQgRgOgVgvQglAEg0giQgugegEgNQgIgWgWgCQghgDgFgCQgXgLgHgIQgGgGABgJQAAgLANgRQARgXAWgEQAOgCAKgQQAIgLAIgWQADgGAOgTQAPgSACgBQACgBALghQALgigBgxQAAgyg+g5Qg2g0iHg8QhWgnhAgQQgTgFgDgCQgFgDABgJQgBgFAhgtQAhguAFgBQBWAeA/AZQA4AWAKAGIAZALQAbAMAnAVQAoAVAeASQAeATA+BLQA+BKAACMIgEAeIgEAgIACAMQAAAFgBAFQA6AYASAWQAMAPAAAcQgBAKgWARQALAMAKAZQAJAWgBAFQABARgSAWIgPALQgNAHgCAHQgFAXgJARQgNAZgRAAQgZAAgNgNg");
	this.shape_140.setTransform(35.1,45.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AlKFjQgGgGgDgGIAAgBQgHgPAEgSQgXgCgRgSQgLgMABgRIAFgXQgQgJgGgQQgDgHACgHQAEgRAKgPQAZgmAogWQAVgKAVgIQASgbAegMQAcgLAbAFIAuALQAJgNARgCIAngGQAPgCANgDIAAAAQAJgBAJABQAZAAANAUQBugXBigvQhVg4hegpIAAAAIgSgIIAAAAIgqgUQhEgbhGgXIAAAAIgDgBIAAgBIgBAAIAAgBIgFAAIgBAAIAAgBIgDgDIgCgCIgBAAIAAgBQAAgGAEgDIAAAAIAAAAQgEgNgDgZQgHhCAAgOQAAgDgCgIIgDgLQAAgKACACIABgBIABgBQAFgCAEABIAAAAQAmAKAlAMQBSAdBNAkIAKAFIAAAAIBHAgIAAgBQBCAcBDAlQAbAQAbASQAfAUAWAdQAXAfAKAmQADAMgCANQgDANgGAOIAAgBQgFALgHAJQgVAcgfAYQgbAWggATQgeATggAPQgfARgiANQgiAMgiAKIgjAKQgGAMgHAMIgBAAIgCACIAAAAQgSANgUABIgbAGIgsAGIgBAAQgMgBgNAEIgOAFIAAAAQgYAFgXALIgiARIgmAWIgOAHIABAAQgIAEgIABIgWAHIAAAAIgKABQgUAAgOgNg");
	this.shape_141.setTransform(16.2,37.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AqQHOQAAgUAIgiIEyklQA6g4AjgcQA4gsA4gyIB2hhQByhiALgRQAPgcAFgGQAMgNAwgjQgYgugTgXQgGgIAAgSQAAgQAOgQQAPgPAPAAQASAAASAHQAgAPARAlICVheQAugbAfAAQAdAAASARQAPANAAAOQAAALgHAKIAtABQAoAJAAAjQAAAegOALQgkATgpAcIAOgDIABAAQAlgGAhARQAeAQAAAVQABANgKAOQgHALgMAIQgCABg0AOQhJAThZAfQgQAHgLAJQgLAKgKARQgTAfgjAVQgPAIgLAEQgSgCgFABIgKABQgIAIhhBAQhqBFgoAfIjYCgQgiAagcAYIgsAlIhSBIQikCLgoAgQACAAABAAQABAAgBAAQAAAAgCAAQgBABgDAAQgsg9gBgogAEKhgIAMgCIgKACIgCAAg");
	this.shape_142.setTransform(69,-34.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AheFmIgwgeQgIgFgJgTIgIgUQgQgVgGgLQgMgTAAgOQAAgcAigcQAbgWAagIQAAgGAHgUQAIgVAJgKQAJgKAXgIQAXgIAHgFQAIgGALgMQAVgYARAAQAcAAAGgDQAOgIAbgvQAUgiAPguQAOgqAAgSQAAgPhdgOQhQgLhFAAQg8AAiYAnIgBAGIgCAGIgRh0IgHgkIADAAIAEAOQBEglBWgHQAxgEBdAAQC7ALBeBDQBJA0AABFQAABGgDAWQgEAcgYBFQgZBOghAzQgPAYghAmQgEA5gzAgQgkAWgfAAQgEAAg3AZQg1AagYAAQgHAAgVgNg");
	this.shape_143.setTransform(34.8,37);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AAoGgQgPgPgNgEIgNgGQgNgHgHgSQgFgMAAgGQAAgJALgOIAfgpIgLgBQgbACgRgUQgMgOAAgOQAAgJARgNQAZgTA/ggQgGgKAEgLQAEgSAXgaQAZgdANgzQAIgfAAgbQAAgtg6g6QhBhChogvQhWglhSgcQgSgGgEgDQgDgEAAgKQAAgEAigtQAigsAGgDQAVAKCbA/QBpAsA8AnQCwByAADUIgHA6QgHA8AAARQAAAdgDAYIgFAZQgMBhgtAuQgmAog3ABQhOgTgGgFg");
	this.shape_144.setTransform(30,45.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AlRDYQgmgSAAgcQAAgEgJgaIgIgaQAAgEAEgPQADgNgBgEQgCgHABgLQABgMAFgJQAQgdATgKQATgJAlAAQAFAAAQAEQAQAEAFAAQAKAAAMgUQAUgJAPAAQAHAAAuAKQAWAFASABIAWAAQAVAAAeAJQAPAEAKACQBBAAAwgJQjJguhigMIgfgDQgCAAAAgHQAAgIgWhBQgWhBAAgKIABgGIAIABQAtAABLAMICJAZIBNAQQCEAaBHAfQBJAgAhBCIgBAAIACAEQACACABAKIAAAZIAAAEQgGAXgXAWIgMALQg9AngPAFQgkASgcAKQgyARiWAUIABACIg3AKIgiAGQgOACghAJQggAIhHAEIgYABQg2AAghgPg");
	this.shape_145.setTransform(27.6,24.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AjhEqIiSgbQACgEAKABQAIACAAgGQAAgQAZg+QAYg+AFAAIAVADQgMgCAqALQBDAQA5ADQA5ACAVgCIBfgOQBOgMAJAAQgRgVgWgHQgNgDgYAAQgFAAgOAEQgNAEgFAAQgVAAghgNIgggMQgGAAgKAIIgJAHQgNADgJAAQg6gFgRgOQgTgQgYgHQhEgYAAhlQAAhQBEhLQBRhZB7AAQAiAAAaAJIAsAbIAPAJIAAgEQAAABAAAAQAAABAAAAQABABAAAAQAAABABABQAGACACAAIgEABQAGAFAOAIIAbAMIAeAVQBPBHAjAxQAkAyATAsQATArAEBIQAEBHhcA5Qh4BJjtAAQhUAAhEgPg");
	this.shape_146.setTransform(36.5,-10);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AolF5QAAgBAAAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQADgMgHgIIgvglIgdgWIgHgIIABgGQAuhOBohjQA/g8AvgjQBkhEBEgWICCgrIBygdQAtgMCAgKQB/gLAQgFQAQgGANAAQAOgBAGgDQAFgCAHgcQACgHAHg0QALhZA2ABQAhgBA8AzQAHALAFAMQAFAIAVANQAWAOgCAlQgCAmgDAHIgYA3QgVAvgOAZIgZAiIgZAVQgfAZgRAIQgcAMgyAAQghAAgbgNQgbgMgGAAQjSAAhfAQQgyAJhgAiQACgIhEAjQhDAkg2AhQg2AgiFCeIAHAGIgBAFQgBACgGAAQgGAAgGADIgIACQgGAAgCgBg");
	this.shape_147.setTransform(70.8,-21.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("ABWIKQgZgVgBgpQgRADgrgjQgkgfgGgNIgGgRQgBgGgMgEIgXgIQgfgNgFgEQgGgFAAgSQAAgQARgOQAQgOAQAAIAaAAIAWgkQAIgLALgKQAWgVAdhWQAfhcAAhEQAAg9gkg4QgshHhxhQIhphHQgagSAAgGQAAgbAYgjIAkgyQAiAXA0AdQArAYAZATQCJBaA8BDQBeBpAACBQAAA/gfCEQgcB5gMAQIAiAgQAIAIAAAOQAAAngYABQAPAdAAARQAAARgIAMQgJAOgXANQgKAGgDAHQgBADAAAFQgEARgSAKQgNAHgLAAQgNAAgQgNg");
	this.shape_148.setTransform(29.5,56);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AGEECIgJgCQgOgCgMgLQgHgHgEgJQgDgEAAgEIgQgDIgSAKIAAAAQgdAPgfgFIgBAAQgUgFgTgGQgYgIgaAEIAAAAIgCAAIgqABIAAAAIggAAIgBAAIgggBIAAAAIgggCIgBAAIAAAAIgegDIgBAAIgkgEIAAAAIgBAAIgkgHIgBAAQgbgGgagIQgbgGgbgIIAAAAIAAgBIAAABIgdgLIgBAAIAAgBIAAAAIgDgBIAAAAIgCAAIAAgBIgggQIAAAAIgBAAIAAAAIghgQIgBAAIgagPIgBAAIAAgBIgcgRIAAgBIgbgSIAAgBIgagTIAAAAIgBAAIAAAAIgYgWIAAABIAAgBIAAAAIgQgOIgEgDIgDgDIgBgBIAAAAIgBgBIAAAAIgWgXIgBAAIgVgZIAAAAIAAAAIgBAAIgVgaIAAgBIgUgbIAAAAIgTgcIgTgdQgDgDABgEIABgCIABgBIAAAAIAAgCQAAgGAFgBQADgPARghQATgmAGgGIAAAAIAAAAQAEgDAEACQAEABADAEIARAcIABAAIASAcIATAaIAAAAIAAAAIABAAIAUAZIAWAYIAXAWIABABIAAAAIAZATIAAABIABAAIAAABIABAAIACACIAFAEIABAAIAPAMIASAMIABAAIAJAGIAEADIAXANIAAAAIAdANIAAAAIAAAAIAcALIAAAAIAfAKIAgAJIABAAIAPADIABABIABAAIAAAAIANACIABAAIAhAFIAGABIABAAIABABIABAAIAbAEIAiADIAjACIAAAAIAzAAIAlgBIA4gFIAbgDIAHgBIAGgEIABAAQA0ghAlAGIAAAAIABAAIAjAGIAAAAIAAAAQAOgGAPAAQAXgEAUAGIAeAMIAhANQARAFARAIIAgAPQAaANAVAUQAUAUAGAbQAEASgBASQgBAMgHAJQgKAPgSACQgaACgVgLIgUgNIgMAKIgFAEIgQAIQgEAQgLAQQgGAHgJAEIgLAFIgMABIgJAAg");
	this.shape_149.setTransform(62.2,26.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("ADzHZQhFhwgTgbQgQAAgNgGQgIgEgNgKQglgcgDg6IkTlGQgQgXgyg2Qg/hCizizIgDgCQgBAAAAgGQAAgIAGgDQAMgFAPgXQAOgUADgIQADgHACgMQAEABADgBQAEgCAFAAQAKAAgCAEIEuESIFGE8IAiAiQAWgQAkARQAjAQAHAXQASgIA6giQAbAAAOAKQAQALAAAbQAAAUgYARQgWAQgaADQBWAyAhAqQAYAeAAAfQAAAOgLAOQgNARgQAAQgGAAgDgCIgHgDQgMgGgognIAHALQAFAJAHATQAIAXAAAIQAAAxgtAAQgSAAgPgUQghgzgsg7IAFAIQAiBAAGAPQAFALAAATQAAAUgMAOQgMAPgXAAQgTAAgcgsg");
	this.shape_150.setTransform(53.2,55.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AG7DSQgbgcgEAAQgdAFgRgEQgdgIgSgtIgYgDQgWgDgIgHQgJgIgLgXQgKgVgBgIQiXhMhEgVQgTgHgbAAIg5gMQgPAAhBgGQg/gHgtAAQgUAAg+AHIg9AHQg7AKg7ANIhOAWQgLADgFAAQgJAAgCgFQgHgPAAg7QAAglAJgbIEEhAQBdgTBoAAQB9AABhAWQCBAcDLBWQBGgNAkAiQAYAYAMAGIAeAOQAuAcAfAjQAeAiAAAWQAAANgIANQgLAPgFAKIgJAVQgGAMgDAEQgEAEgKAFQgKAFgEADQgGAFgHAMQgFAIgEACIgaAPQgNAGgRAAQgbAAgggbg");
	this.shape_151.setTransform(65.8,19.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ADnFJQgDgEgKgVQgEgbgDgJQgFgMgpgIQgKgBgKgEQgSgIgHgOQgJgVgNgEQhfgfgegPQh7g3gegQQgjgUhhhDIg2gxQgSgPgggpQgigtgRgiQACgPgGgIQgHgIAAgHIABgIQADgPAKgkQAEgQAdgrIADACQAXBBBIBLQBPBTBbAmICIBAQCNA7A8AAIAggKQAhgLANAAQBOAABAAoQBVA2AABlQAAArgdAgQgfAkgxAAQgMAAgUgLQgHARgTAKQgSAKgTAAQgcAAgQgUg");
	this.shape_152.setTransform(52.1,36.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AEMF1QgigNgKAAIgcAGQgKADgPgKQgQgJgSgSQgTgShJgjQhNgohohGQhcg+gfggIg/g7QgLgKg5g+Qg7hCgWgcQhriCAAggQAAgRAHgQQANggAgAAQAGAAACACIAEAEQCfCoAuApQAeAaCfB5QA3AoCRBIQCMBEATAAQBKAAAVALQAiARASADQABguAegeQAdgeAUAAQA9AAAQAHQAkARAABAQAAAdgSAgQgSAhgcAQQgKAGhYA7QgkAZgsAAg");
	this.shape_153.setTransform(61.7,38.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AkkCRQhDgugtgzQgrgwgFgcIAIgEQgTgRAAgKQAAgHADgMIADgLQAOgiARggIADgDQACgBAHAAQAKAAgJABQAGAFAzA8IAsAyIAYAWQBCA5BXAkQBUAkBAAAQBBAAAggNQATgIATgOQAPgJALgOIAQgXQAGgJAQgNQARgLAGgJQAHgLAJhMQAJhLALgSQAKgSAagTIAZgSQAAgEALgDQARgGAkAAQAWAAAUAiQAaAtAABPQAAAYgFAYIgPA2QgfB0gHANQgGAKgLAFQh2BFgwAVQhKAhhlAAQipAAirh3g");
	this.shape_154.setTransform(49.3,16.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("ACUEaQgrgHgmgUQg2gbgcgzQgagrAAgoQAAgQAGgQQAFgNAEgCQhqhmgQgLQgdgWhFgwQhDgvgBAAQgEACgDAAQgEgBAAgMQAAgUARgkQAQghAFAAQAVAABGAhQBQAmAxAoIAcAXIAGADQAgAXAkAjIAfAdIATgBQAIgBAKgMQALgMAMgHQAMgIAUAAQAdAAAKAOQALAOAAAqQAAAZgMAkIAFgBQAlgQApAkQAvApAABOQAABBgxAeQggAUghAAQgqAAgWgCg");
	this.shape_155.setTransform(39.3,29.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AhIFdQg0g2AAhKQAAgPAOgWQAQgbAFgRQALgoAugYQAggTAVAAIAQAKQARAOAAASQAAAPgIAiQAWgiAWgtQAWgwAAgRQAAgEg2g+QgogohUhAQhjhRg5gMQgNgCgMAAQgFAAAAgKQAAgFACgEIACgCIALgBQAEgQAQgoQANghAAgFIAAgJQAAgDAFgFIAIADQCRBYB/BfQB2BZATAdQAiAcABBQQABBUgkBRQgjBPgVAjQgOAXgDAMQgIAagsATQgrASgtAAQgiAAgrgug");
	this.shape_156.setTransform(24.8,41.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AGNCSQgTgWgKAAQgFAAgFAFQgGAEgFAAQgSAAgWgMQgTgKgLgMQhOAEhJAAQjFAAjXgkQjOgkhmguQgnhmgQgkQCCAfCyAVQDGAXCmAAQBhAAAggEIBxgLQAhgCAagHQAZgGAEgHIASgFQAUgGAGAAQAqAAALACQARADADANQA+gCA1ATQBBAWAAApIgDARQgCALABACQAEANAAAJQAAADgJAPQgKARgCAKQgKAqgMAQQgVAaguAAQgNAAgagKIgYgKQgpAVgDAAQgPAAgVgIg");
	this.shape_157.setTransform(70.5,20.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[]},1).to({state:[{t:this.shape_138}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_027 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ_23_part_026 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAABPQABgDgBgCQAcgZAJgOQAKgPAAgQQAAgJgHgMQgLgVgXAAQhEAygCAAQgGAAgCgCIgBgFQAXgfAogbQAlgcAZAAQADAAAHAFQAHAEAFAGQgZAIgVAKQAkAOgBAkQABAagWAbQgTAbgRAAQgGAAAAgDg");
	this.shape.setTransform(13.3,25.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AgyAuQgWgagEgVQADgBAtgoQAnglAaAAQAQAAAKALQAOASAAAvQAAAfgPAYQgRAcgcAAQglAAgegig");
	this.shape_1.setTransform(13.1,26.7);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhWB9QgZgrgZgCQgDgDgEgLQgDgLAAgHQAAgJAHgIQAsgNAggcQAGgHA4hEIAqg5QAegiAjAAQAXAAALApQAIAcgBAjQABB6g9BGQgwA5g5AAQgkAAggg0g");
	this.shape_2.setTransform(13.1,21.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhjC2QgRgQgrhTIABACIAHgBQgDgCgDgLQgEgLAAgHQAAgJAIgIQgDgDAggfQAhgcAlg6QAWgjAZgeQAxg5AtAAQAsgBARAnQAOAfAABAQAABoguBTQg0BehOAAQg8gBgZgZg");
	this.shape_3.setTransform(14.5,20.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,0.1,32.5,41.6);


(lib.FIZ_23_part_025 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ACZD/QgOgkAAgvIABgMIADgBQACAFAKARQARAgAGAPQAJAUAAAOQAAANgCADQgCAFgLAAQgHAAgMgcgAhVB7QgGgYgQgWIAAgCQAMgDACACQAEAEAXAeQAfAkAjApQAAAJgGADQhCgygNgYgADsB4QgMgeAAgqQAAgOAEgBQASAQAQBPQAAAKgDADQgCACgHABQgFAAgJgYgAgoAlIgqhCIAAgCIAAAAIAJgBQACAAAbAgQAdAiAPAXQgDAJgNgBQgGAAgSgcgABcAXQgJgxgLgTIACgCIAGgDQAUAHAMAbQAKAVAAAcQAAAHgCAEIgDAEIgGABQgPAAgEgagAi5ApQgcgbgZgqQgXgoAAgNQAAgFABAAIAFADIBJB0IAAgDIAAAEQAAAHgBAAIgCAAgABoh7QgPgOAAglQAAgHAEgKQADgKABgBIAKAbQAIAZAAALQAAAOgJACgAhpigQgZgiABgeQAAgFACgDIABgBQAMAKAWAjQAYAnAAANQAAAKgGAAQgNgHgSgbgADCi8QAEhcABgCQAJACADAMQACANAAAhQAAAdABAIQgDgEgJAFgAgBjqQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBIABgBIAEABQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgEABIgBgBg");
	this.shape.setTransform(39,65.3);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AB2HSQAMgCAIgHIASgWIAZgjQAGgPgBhAQABhYgdiVQgdiVAAhTQAAg8AkhaQAPgoALgWIAHgIIgJBxIgDA9IgBAVIAAAbIABADQACBUAYCTQAOBVAQBYQAIAyAAANQAAA+gZAnQgcArgxAAIgegCgAi2iHQhDhMAAivQAIgQAMgRQAVCXAbA/QAiBQBLAdQAEgGABgBIAAAAIAAgDIABAAQgCAJgEAIIgOACQg2gCgqgugAAijGQgdg6AAh7QAAgQAEgRQARgeAWgZIgDBVIAAACIABALQABBQAGAvQALBKAWAOQgegBgWgrg");
	this.shape_1.setTransform(45.9,51.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("ADSHSQhagIhog+Qh1hGhhhyQg7hEgohoQgthwAAhrIADgUIAHgnQAeBXApBDQA6BeAugNIACgCQABgCAAgGQAAgGgLggQgNgmgEgPQgHggAAgFIgBgMQgBgMgBgWIgCgmIADAQIAAABQAChJAFgfQAEgiAXgoQAJgQALgRQAVCXAbA/QAjBQBIAdQAFgGAAgBIAAAAIAAgDIAAgEIAKhiIADgMQAJgUADgWQAEgfAOgpQAOgrAVgjQARgeAWgZIgCBVIAAANQABBQAHAvQAKBKAWAOQAFAEAGgBQAIAAAGgTIAMgyQAWhTAvg5IAGgIIgJBxIgDA9IAAAfIAAACIAAACIAAAGIAAAHIAAADQACBUAYCTQAOBVARBYQAIAyAAANQAAA+gaAnQgcArgxAAIgegCg");
	this.shape_2.setTransform(36.6,51.1);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAzHNQgrgTgmgXQhlg9hMhfQhhh9gjheQgchNAAhyQAAgxAMgqQAJggALgQIABABQACABAcBDQAhBJAXAhIArA/IAMANIgEgJIgNg5QgKgtAAhQQAAhrAthDQAggxAUAAQAFAAAIAsIAVBkQAkCZA3AkQgIg2AbhiQAYhTAohRQASgiAUgSQATgSAPABIAKCUQAJCFAHAXQAEg3A9hTQA0hHAUgJIACABIgFATIgOCNQAACFAOBuQAKBQAAALIAFAeIARBRQADAOAAAFIAQB6QAABUgeAoIgIAJQgjAlhNAAQhCAAhlgpg");
	this.shape_3.setTransform(36.7,50.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,73.8,100.5);


(lib.FIZ_23_part_024 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhbA1QgJgUgGgJQAVgUAbgTQA7gyBDgKQAEgCAGADIATAZQAHAMADALQgOAHhPAqQgRAKg4AsIgEAAQgSAAgKgYg");
	this.shape.setTransform(12.5,9.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah8AfQgBgEACgEIAAgEQgBgPBCgrQBEgwArgFQAJgBALABIABgBQASAGAQAWQARAUABASQAAAKgOAMQAAgBAAAAQABgBgBABQAAAAgBAAQAAABgBABQgEAEgQAGIgqASQgZAKgiAdQgkAdgNACIgHAAQgqAAgPg/g");
	this.shape_1.setTransform(12.6,9.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,19);


(lib.FIZ_23_part_023 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("ABGBJQhBgpgSgJIhogrQADgLAGgNIAVgbQAFgCAEACQBKAGBDAuQAeATAZARQgHAKgIAUQgKAagVAAIgCAAg");
	this.shape.setTransform(14,9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABIBaQgPgBgogZQgsgdgGgCIhAgWQgRgHgJgEQgBgBAAABQgNgKAAgKQAAgSARgVQAQgXARgGQACAAAAAAQABAAAAAAQAAAAgBgBQgCAAgBAAQAOAAAMABQAwACBNAsQBJApAAANIAAAEQACADAAAFQgOBCgxAAIgDAAg");
	this.shape_1.setTransform(13.9,9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.7,18.1);


(lib.FIZ_23_part_022 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ah7DRIAAgBQgCgGAFgKIAAABQADgJADgFIgBABQABgGAGgMIAlhYQAxiNgCiTIAAgBIAAAAIACgBIABABIABAAQAJAigBBBQgDBCgaBjQgbBjgSAfQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAAACIACABIBAgDIABAAIAAAAQAggJAxgkIA3gsIABAAIAGAAIAAABIAAABIAAAFQgCAVgtApQgrAkglAMIgBAAIgMABQgnAFgUABIgBAAIAAAAQgvgBAAgHg");
	this.shape.setTransform(12.5,21.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C09B79").s().p("AhrA1QgNgKgFgKIAHgZIADAAQAFAAAPAHIAIgBQA4gDAngHIAAgBIAPgGIAwgoQAPgMALgFQAOgNAJgCQACADADAAQABACAAAHQAAAJgHALIAAABQAAAkgXAdQgmA1hVAAQgyAAgegXg");
	this.shape_1.setTransform(12.6,39.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.4,47.1);


(lib.FIZ_23_part_021 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ_23_part_020 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4C0C3").s().p("Ag6EHIgBAAIgHgBQAVgmAVgqQASglAJghIANg2IAAgCQADgUAAgSQAAhOgghjIgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAjBKgCBvQgIBqgjBQQgiBPgwAAIAAAAg");
	this.shape.setTransform(21.4,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#529B9E").s().p("Ag0EHIgHgBQAVgmAVgqIAPgiQAYgBAYgEQgHAVgJAUIgHAOIgBACIgCAFIgFAJQgcAxgmAAIgBAAgAgBiOIgFgRIgYhAQgKgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAMAZAHAdQgfgHgegCg");
	this.shape_1.setTransform(20.7,29.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A4C0C3").s().p("AgdBuIANg3IABgBQADgUAAgSQAAg8gUhIQAeADAcAHQAJAugCA3QgEA/gOA1QgVAFgZABIACgHg");
	this.shape_2.setTransform(24.7,29.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4C0C3").s().p("AgXAjIABgCQADgTAAgRQAAgUgDgWQAXAEAZAGIAAAKIAAADIAAAEIgBAGQgCAZgEAaQgVAFgXACIACgLg");
	this.shape_3.setTransform(25.4,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#529B9E").s().p("Ag6EHIgIgBQAVgmAVgqQASglAJghIADgPQAZgBAWgFQgLAzgSAqIgKAUIgGAKQgWAogeAHIgHACIgFAAIgCAAgABCgpQgagGgbgDQgIg0gSg5IgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAdA9AEBVg");
	this.shape_4.setTransform(21.4,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#529B9E").s().p("Ag6EHIgIgBQAVgmAVgqQASglAJghIAIghQAYgCAWgEQgLA9gWAyIgKAUIgGAKQgWAogeAHIgHACIgFAAIgCAAgAATASQAAhOgghjIgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAjBKgCBvQgCAWgDAXQgWAFgXADQACgRAAgQg");
	this.shape_5.setTransform(21.4,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#529B9E").s().p("Ag6EHIgBAAIgHgBQAVgmAVgqQASglAJghIANg2IAAgCIACgPIAtgJQgKBWgdBCIgBABIgDAGIAAABIgDAFIgJARIgCADIgaAgQgMAKgOADIgBAAIgHABIAAAAIgCAAIgCAAgAgNifIgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAjBKgCBvIgBAFIAAAEIgBADIguAIQAAhPgghig");
	this.shape_6.setTransform(21.4,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#529B9E").s().p("Ag6EHIgIgBQAVgmAVgqQASglAJghIALgwIAlAIIAGABQgLA9gWAyIgKAUIgGAKQgWAogeAHIgHACIgFAAIgCAAgAASAkIABgSQAAhOgghjIgXhAQgLgSgNgSQAIgDAIAAQAwgBAeBMIAAAAQAjBKgCBvQgCAYgEAYIgrgKg");
	this.shape_7.setTransform(21.4,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},1).wait(2));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9FFFF").s().p("AAAEHIAAAAIgFgBQgugHgghCQgqhPgBhlQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgHBqgkBQQgjBPgxAAIAAAAg");
	this.shape_8.setTransform(15.3,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#656BAA").s().p("AgqDqIAAgBIATgjQAohbAIhzQAChzgnhYIAAABQgKgbgOgNIAKAEIAAAAIACAFIADgCQAOAHAJALIAAAAQAGAIAUAyQAXAwAEBXQAABTgQA0QgPA0gKAWIgQAmQgIAQgCACQgDADgnAPQAEgIAIgJg");
	this.shape_9.setTransform(28.2,29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8089DD").s().p("AgBAAIAAgBIADABIgCACIgBgCg");
	this.shape_10.setTransform(25.7,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9FFFF").s().p("Ah1BfIAAgBIgJhNIAAgDIAAgDIAAgCIAAgCIAAgJIAAgFIALhWIADgJQBYgWBUAJQAeADAeAHQAJAugCA3QgEA/gOA1QgXAFgZABIgXABQhFAAhWgYg");
	this.shape_11.setTransform(15.3,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AAAEHIgHgBQgJgBgJgEQgPgHgOgOIgJgKIgWglIgLgVIgDgHQgGgRgGgRQBYAWBHgBQAagBAYgEQgHAVgJAUIgHAOIgBACIgCAFIgFAJQgeAxglAAIAAAAgAhUiwIAAAAQAnhHArgMQAGgDAIAAQAygBAeBMIAAAAQAMAZAIAdQgfgHgggCQhLgHhPARQAJgXAMgVg");
	this.shape_12.setTransform(15.6,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9FFFF").s().p("Ah9AYIgBgjIAAgSQBogdBjAPQAaADAYAHIAAAJIAAAEIAAADIgBAHQgCAZgEAaQgXAEgXADQgSABgSAAQhJAAhagZg");
	this.shape_13.setTransform(15.3,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CCCC").s().p("AAAEHIgGgBQgugHgghCQgcg0gKg+IAhAIICYAPIADgBQAYgBAXgFQgLAzgTAqIgJAUIgGAKQgYAogeAHIgHACIgFAAIgCAAgAhSiwIAAAAQAmhHAsgMQAGgDAIAAQAygBAeBMIAAAAQAdA9ADBVIAAAAQgagGgbgDQgagEgbAAQgkgBgoAFIgCABIgDAAIgoAHIgDABIgEAAIgDABIgEABIgDABIgEABIgDABQAHhNAkg/g");
	this.shape_14.setTransform(15.4,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("AAAEHIgFgBQgugHgghCQggg8gIhJQBtAdBVgGQAYgCAXgEQgMA9gWAyIgJAUIgGAKQgZAogeAHIgGACIgFAAIgDAAgAh+AbIAAgSQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgCAWgDAXQgVAFgYADQgTABgUAAQhJAAhbgZg");
	this.shape_15.setTransform(15.3,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9FFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_16.setTransform(15.5,35);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AAAEHIAAAAIgFgBQgugHgghCQgZgugKg2IAHACIBDANQAUADAFgDQAGgEABgFIgBgCIgJgCQgKgBg3gTIBYgRIAAABIABgBIB6gWQgKBWgeBCIAAABIgDAGIgBABIgCAFIgKARIgBADIgcAgQgNAKgOADIgBAAIgGABIgBAAIgBAAIgDAAgAgLgHQgDgDgFgBQgGgBgFAEQgVALhKAiIgBgcQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvIAAAFIgBAEIAAADIjXAlIBOg2g");
	this.shape_17.setTransform(15.3,29.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CCCC").s().p("AAAEHIgFgBQgugHgghCQgeg4gJhFQBVgXBwAXIAlAIIAFABQgLA9gWAyIgJAUIgGAKQgZAogeAHIgGACIgFAAIgDAAgABPAkQhxgWhZAWIgCAAIgBgJIAAgSQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgCAYgDAYIgrgKg");
	this.shape_18.setTransform(15.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_12},{t:this.shape_10},{t:this.shape_9},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_10},{t:this.shape_9},{t:this.shape_13}]},1).to({state:[{t:this.shape_15},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_10},{t:this.shape_9},{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.shape_18},{t:this.shape_10},{t:this.shape_9}]},1).wait(2));

	// Layer 2
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AiJDNQgvhbADhzQADh2AvhVIAAAAQAxhYBCgBIADAAIAEAAIAWAGIAIACIAcAJQASAFAhAVIAAAAIAFADQADABADAEIAQAOIAAAAQAcArARBGQALBHAAApQgBAngKA1QgTBGgvBeIgBABIghARQgcAMgTAEIAAAAQgKABgIADIAAAAIgXADIAAAAQgHgBgFABIAAAAIgCAAQhBAAgqhZg");
	this.shape_19.setTransform(18.3,29.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AiJDNQgvhbADhzQADh2AvhVIAAAAQAYgrAcgWIADgFIAFgCIACgBQAZgQAcAAIADAAIAEAAIAWAGIAIACIAcAJQASAFAhAVIAAAAIAFADQADABADAEIAQAOIAAAAQAcArARBGQALBHAAApQgBAngKA1QgTBGgvBeIgBABIghARQgcAMgTAEIAAAAQgKABgIADIAAAAIgXADIAAAAQgHgBgFABIAAAAIgCAAQhBAAgqhZg");
	this.shape_20.setTransform(18.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19}]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[]},1).to({state:[{t:this.shape_19}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,59);


(lib.FIZ_23_part_019 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhfgbIC/AJIgsAsIiTACg");
	this.shape.setTransform(10.7,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah8A1QgBgCAAgzQAAgyACgDQAEAFAFgEIDYASQACACAWABIhFBPIirADQgFADgDAAIgCgBg");
	this.shape_1.setTransform(11.6,3.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.5,25.3,10.9);


(lib.FIZ_23_part_018 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A4C0C3").s().p("AguD+IgJgBIgBgGQAUgvAUg0QAmhmAAhhQAAhVguhEQgTgbgUgSIAOgEIAHAAIABAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAVQgHBTgaA/QgcBLgsAAIgCAAg");
	this.shape.setTransform(20.1,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A4C0C3").s().p("AgEg9QAAgZgFgYQASADAVAGQAGAoAAAxIgBAOIgCAAIAAAWQgEAngHAjQgcAIgdAFQAfhYAAhUg");
	this.shape_1.setTransform(22.9,29.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#529B9E").s().p("AgoD+IgKgBIAAgGIAmhgQAcgEAggIQgGAVgIATQgdBLgsAAIgBAAgAAhh+IgQgDQgMgogXgjQgTgbgUgSQALgEALAAQArAAAfBJQAMAbAHAgIgZgFg");
	this.shape_2.setTransform(19.5,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4C0C3").s().p("AgOgnQAUAEAWAGIgBAOIgCAAIAAAUIgCAWQgZAIgZAFQAKgoADgng");
	this.shape_3.setTransform(23.7,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#529B9E").s().p("AgtD+IgKgBIgBgGQAUgvAUg0QAKgYAGgZIAAAAIANgDIAqgKQgKAzgRAqQgcBLgsAAIgBAAgAAWglIAAgOQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAcA+ADBaQgVgGgVgDg");
	this.shape_4.setTransform(20.1,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#529B9E").s().p("AguD+IgJgBIgBgGQAUgvAUg0QANgiAHgiQAagFAbgHQgJA9gUAyQgcBLgsAAIgCAAgAAWgzQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAWIAAAEIAAAAQgaAHgYAFQALgyAAgzg");
	this.shape_5.setTransform(20.1,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#529B9E").s().p("AguD+IgJgBIgBgGQAUgvAUg0IANgkIAAAAIAIgCIAqgJIADAAIACAAQgJAqgPAkQgcBLgsAAIgCAAgAAGBLIAZAFIgEACIgCAAIgSAHIgGACIAFgQgAALA0IAAAAIACgKIAUAOgAA2AoIgmgTQAGgjAAglQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAWIAAAJIgHgDg");
	this.shape_6.setTransform(20.1,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#529B9E").s().p("AguD+IgJgBIgBgGQAUgvAUg0QAQgqAIgqIAAgBIAPACIAPADIATAEIAAAAQgJA7gUAwQgcBLgsAAIgCAAgAAOAkQAIgrAAgsQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAWIgBAKQgWgFgYgDg");
	this.shape_7.setTransform(20.1,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A4C0C3").s().p("AguD+IgJgBIgBgGQAUgvAUg0QAmhmAAhhQAAhVguhEQgTgbgUgSIAOgEIAHAAIABAAQAsAAAeBJQAdBBACBhIAAAQIgBAOIgCAAIAAAWIgCAUQgIBGgXA3QgcBLgsAAIgCAAg");
	this.shape_8.setTransform(20.1,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#529B9E").s().p("AguD+IgJgBIgBgGQAUgvAUg0QAQgqAIgqIAAgBIAPACIAPADIATAEIAAAAQgJA7gUAwQgcBLgsAAIgCAAgAAOAkQAIgrAAgsQAAhVguhEQgTgbgUgSQALgEALAAQAsAAAeBJQAfBHAABrIgBAOIgCAAIAAAWIgBAKQgWgGgYgCg");
	this.shape_9.setTransform(20.1,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

	// Layer 5
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9FFFF").s().p("AAJD+IgJgBQgrgIggg+QgqhNgChiQgFhiArhRQAjg/AogPIALgEIAHAAIABAAQAuAAAeBJQAgBHgBBrIgBAOIgBAAIAAAVQgIBTgZA/QgdBLguAAIgBAAg");
	this.shape_10.setTransform(14.4,28.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#656BAA").s().p("AgRDEQAjhaAFhtQgBhwgihVQgLgZgKgQQATAMAOAPIAAAAQAEAHAEAKQAeBOAEBiQABAxgRBZQgHAcgLAfIAAAAQgKAbgNAWQgHADgJAHIABAAIgLAHQAMgTAMgbg");
	this.shape_11.setTransform(26.6,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AAFD+IgIgBQgrgIghg+QgIgPgGgPQA7AJBDgLQAegEAggIQgGAVgIATQgdBLguAAIgBAAgABQh+IgQgDQhUgNhUARQAIgYAMgWQAig/AogPQAKgEAKAAQAuAAAeBJQAMAbAHAgIgZgFg");
	this.shape_12.setTransform(14.8,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9FFFF").s().p("AhlBwQgRg1gBg8IAAgCQgBgWACgWIACgZIAAgCIABgBIAAgEIAFgXIAAgDQBcgWBcAQQAUAEAUAFQAGApAAAwIgBAOIgBAAIAAAXQgEAngIAjQgeAIgcAFQgsAIglAAQgkAAgggHg");
	this.shape_13.setTransform(14.4,29.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9FFFF").s().p("AA3A5IAAAAIgWADIAWgDgAhxAcIgCgOIgEgpIAAgCIAAgDIAAgNQBhgZBiASQAWAEAWAGIgBAOIgBAWIgDAVQgaAHgZAFQg1ALgrAAQgrAAgmgKg");
	this.shape_14.setTransform(14.4,32.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgVgngLgsICMACIAWgDIAAAAIAOgDIAqgKQgJAzgRAqQgdBLguAAIgBAAgABOglQhjgShiAYQAEhMAihAQAjg/AngPQAJgEALAAQAuAAAeBJQAcA+ADBaQgVgGgVgDg");
	this.shape_15.setTransform(14.4,28.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgZgvgLg2QBNAQBfgSQAagFAbgHQgJA9gUAyQgdBLguAAIgBAAgAh0A0QgCgWgBgWQgFhiArhRQAjg/AogPQAIgEALAAQAuAAAeBJQAgBHgBBrIgBAOIgBAWIAAAEIgBAAQgZAHgZAFQg2AMguAAQgsAAgngKg");
	this.shape_16.setTransform(14.4,28.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9FFFF").s().p("AARAeIAAAAIgEABIAEgBgAgggQIABAAIgBAAIAAAAgAAVgeIAMACIAAAAg");
	this.shape_17.setTransform(17.9,36.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgjhAgHhOIB1AXIABAAIAAAAIBXAQIgFACIgBAAIgTAHIgFACIgGACIgaAIIgBAAIgJABIAAACQABAGAEADQAFADAUgDIABAAIAEgBIAAAAIAKgCIArgJIADAAIABAAQgJAqgOAkQgdBLguAAIgBAAgABDA0IAAAAIgLgCIiugfIgBgLQgFhiArhRQAjg/AogPQAIgEALAAQAuAAAeBJQAgBHgBBrIgBAOIgBAWIgBAJIgHgDIglgTQgdgOgLgHQgFgDgGABQgFABgDABIA3AqIAUAOg");
	this.shape_18.setTransform(14.4,28.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9FFFF").s().p("AgIAAIASAAIAAAAIgSAAg");
	this.shape_19.setTransform(20,34.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgZgugLg2ICcgVIAUACIAAgBIAPACIAOADIATAEIAAAAQgJA7gTAwQgdBLguAAIgBAAgAh3AIQgFhiArhRQAjg/AogPQAIgEALAAQAuAAAeBJQAgBHgBBrIgBAOIgBAWIgBAKQgXgFgYgDIgFAAIihAPIgIACIgFABIgDABIgDABQgDgXgBgZg");
	this.shape_20.setTransform(14.4,28.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9FFFF").s().p("AAJD+IgJgBQgrgIggg+QgqhNgChiQgFhiArhRQAjg/AngPIAMgEIAHAAIABAAQAuAAAeBJQAdBBACBhIAAAQIgBAOIgBAAIAAAWIgDAUQgIBGgWA3QgdBLguAAIgBAAg");
	this.shape_21.setTransform(14.4,28.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgFAkIACgUIAAgVIACAAIAAgQIAAgPQAFAJACALIAAASIAAAUQgBAPgHAAIgDgBg");
	this.shape_22.setTransform(26.7,30.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgZgugLg2ICcgVIAUACIAAgBIAPACIAOADIATAEIAAAAQgJA7gTAwQgdBLguAAIgBAAgAh3AIQgFhiArhRQAjg/AogPQAIgEALAAQAuAAAeBJQAgBHgBBrIgBAOIgBAWIgBAKQgXgGgYgCQhRgIhoAcQgDgXgBgZg");
	this.shape_23.setTransform(14.4,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10}]}).to({state:[{t:this.shape_11},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_11},{t:this.shape_14}]},1).to({state:[{t:this.shape_11},{t:this.shape_16}]},1).to({state:[{t:this.shape_11},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_11},{t:this.shape_21}]},1).to({state:[{t:this.shape_11},{t:this.shape_23},{t:this.shape_19}]},1).wait(1));

	// Layer 2
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ah7DGQgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAQhDAAgshXg");
	this.shape_24.setTransform(16.7,28.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgYEcQgRgCgPgIQgngTgcg5QgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAIgMgBg");
	this.shape_25.setTransform(16.7,28.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ah7DGQgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAQhDAAgshXgABfAiIACgWIgCAAg");
	this.shape_26.setTransform(16.7,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,57.2);


(lib.FIZ_23_part_017 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AgvERIgBAAIAAgBIAAAAQADgJAWgRQATgRAEABQAGAAAAAGQgBAKgSAMQgJAGgFAEIAAABQgKAEgHAAIgDAAgAgTCjIgBAAQgFgFABgDQAAgHAJgTIAAAAQALgaAHABQAFAAABAHIAAAAQgSArgKAJgAgkAfIAAgBQgEgGAAgIQgBgJAQgZQAOgeAKAEQAFABADADIAAAAIABADQAAAHgWAdIgKAQQgJAPgCABIgBAAgABJAFIgBAAQgGgFABgCQAAgHAKgPQALgVAMACQAFAAABAHQgCAMgeAdIgBAAgAgUiBIgEgCQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAAAQANgVAGgIQARgdABABQAIABABAJQAAAKgPAUQgOATgMAEgAhmjaIAAgBIgDgGQAAgFAPgUQAOgWAEAAIABAAIAAABQAGAHAAAEQAAAFgNASIAAABQgQARgHABg");
	this.shape.setTransform(25.9,51);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AjJHBIAGgBIAGgMIACgGIAEgMIABgDQATgXBAhAQBohpAcgkIADgDQgeABgDgVQgDgDgDgFQgBgDAAgKIAEgKIAAgEQAAgQA0hXQAbgtANgjQgWAKgNAAQgZAAgKgRQgFgJAAgLQAAgLAVg8IAahKIAEgOQgrAYgNAAQgbAAgHgXIgCgYQAAgPAKgZQAJgaAAgOQAAgJgJgpIAAgBQANgZADgfQAMARAIArQAGAmgBAcQAAALgJAdIAAAAIAAAGQADAGAGACIAAAAIACAAIAAAAIAAAAIABAAIABAAIACgBIADgBIAAAAQA6gcAjgyIAgg6IAAAZQgDAmgaBeQgLAlgrBWIAAABIABAFQAAABAEADQADACAIADQAGgBAfgRQAdgTAMgMIAdgnIAAAAIAAAxQgHBEgeBJQgUAogiAvIAAAAQgNAOgJAOQgcAQAAAOIAAAAIAAACQABAHANADIAAAAQANABATgLQAXgMAjgdIAAADIAAAAIgCAFIgFAJIgCAEIgJAUIgWAqQgKAPgPATQgWAagiAjQghAWhHBFIhZBUIgNAAIgRAAIgOABQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIgJgCg");
	this.shape_1.setTransform(23.8,52.5);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AiqG3IAAgBIACgHIAEgMIABgDIADgJIAGgSIACgIQARgyAHgeIACgQQA1ggAChPQAChPgbiVQgbiXhhh0IA1gHIAEAEQAEADASAGQATAEASgEIApgKQAVgEAegjQAKgNAGgQQAMgZAGgfQALAQAIArQAHAngBAcQgBAKgJAdIAAABIABAGQACAGAGACIABAAIABAAIABAAIAAAAIABAAIAAAAIACgBIADgCIABAAQA5gcAkgxIAfg6IAAAYQgDAngaBeQgLAlgrBWIAAABIABAEQAAACAEADQADACAIACQAGAAAfgSQAdgSAMgMIAdgoIABABIAAAxQgIBEgeBIQgTApgiAuIgBAAQgNAPgJANQgcARAAAOIAAAAIAAACQABAHANADIABAAQAMAAATgKQAYgMAigdIADgDIgBACIgBADIAAABIgDAEIgEAKIgCAEIgKAUIgWAqQgJAPgQASQgWAbgiAiQghAXhGBEIhZBVIgOAAIgRAAIgGAAIgCABIAAAAIgFAAg");
	this.shape_2.setTransform(21.8,52.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(40,42,51,0.263)").s().p("AiCE9IAnglIAXgVQgnApgeAYIgBABIAIgIgABWkKIAXgbQATgYALgHIgTAZQgQASgSAQIAAgBg");
	this.shape_3.setTransform(28.2,62.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjoH7IAniBQAhhxAKAAQAKAAABAJQACAJgGAfIAAAEIAAgDQBKgxgEhwQgDhFgThbQgojEhWhlIAogGIgCgCIAAgBIgBAAIABAAIAAAAIAAAAIAygKQAYgGAagOIgFADIAKgFQAugdAIhBQAEgjAFgRQAGgSAIACQAQADAbBOQAYBIgEAeQgDANAAAHQAAAGACAAIAAAAIAGgDQAognAGgNQAthlAKACQAGAAAEAEIgBAAQAPAJgEBmQgcCGgZA5IAWgbQATgYAMgHIALgNQAPgQAMAFQAFABABATQACASgCAkIgCAWQgHBWggBBIgIAPIgDAGIgfAvIgDAGIAGAAIAMgHQAcgSAGgFIABgBIAAAAQALAEgDAeIAAAAQgCASgWAnQgNAXgUAgIAAAAQgIAVgzAwQgoAkgPAHIgQARIgoAqQgnApgeAXIgEAEIgCACQguArgMADIgQAEQgiADgLADIgMABIgGAAgAi9HTIAAAAIAEgMIgBgBIgDANg");
	this.shape_4.setTransform(23.3,50.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,46.9,101.6);


(lib.FIZ_23_part_016 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhWgbICtAJIgbAsIiSACg");
	this.shape.setTransform(9.9,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhwA0QgBgCAAgyQAAgIAFgnIAGgFIDWARQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQgTA0gSATQgHAIADADQhrgJhEAJQgFADgDAAIgCgBg");
	this.shape_1.setTransform(10.4,3.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,22.9,10.8);


(lib.FIZ_23_part_015 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AEwAlIgdgIIh9gWQhhgPhCAAQhhAAhRAPQhQASghAAQgIAAgGgGQgGgHAAgLQAAgVAbgCQAOgBATADIBNgJQBUgIBgAAQAuAAB9ATQBAAJA2AJQAGAAACgCQACgCAAgFIARAJQAQALAAANQAAAOgOAAIgHgBg");
	this.shape.setTransform(32.6,6.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC4AnQhegThvAAQhfAAhXANQgsAHggAGQgNAAgBgEQgCgBAFgMQgTAGgJgKQgGgHAAgMQAAgFAMgDQAOgHAEgJIgCAAQgCgBAAgGQAAgIA0gKQBKgNCAAAQBsABBqAQQCbAXAAAtQAAAPgLABQgQgCgKgBIAAADQAAAHgEACQgDADgHAAIhagSgAEgAqQAIAAgFgBIgBgBQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAg");
	this.shape_1.setTransform(32.6,5.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,65.1,11.4);


(lib.FIZ_23_part_014 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AkPJyIAAgZQAAiuBgjoQAyh5B4jcQBYilA9iEQA7iDAihKIgYBEQgTA2AAANIAAABQAmgBAogMQgtBai0FGQh0DUgvCFQgUA4g8CeQgyCIAAAdQAAAKADADQADADAIgDQgMAUgFAAQgSABgEgXg");
	this.shape.setTransform(116.9,170.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AgkAjIAQgrQAIgTAEgSIAxAQQgQBCgXABIgUgCQgNAAgJAKg");
	this.shape_1.setTransform(144.3,111.5);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgfRGQgQgLgKgNQgHgJAAgCQAAgqhAijQhSjRiAjnQgXgoh+jBQhyitguhdQAUAEARACIADgBQgtiLgNg8QgRhNAAhNQAAifA4iQQA2iKBXhIQCKhzB7goQBMgZBiAAQA9gBA0AJQAuAGAhgBIBEARQAyAOAwAXQAIADBgA8QAQAOAQARIAPAOQB/B3AyCAQAwB0AACuQAABFgpCSQgcBogOAhIABABQAlgBAogMQgsBYi1FGQh2DWguCFQgVA4g8CeQgyCIAAAdQAAAKADADQADADAIgDQgIAMgUAQQgaAUgUABQhTgBgvghg");
	this.shape_2.setTransform(76.2,125.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#825454").s().p("AKUG+QAehpAAiPQAAi2g7h1QgTgmgbgkIglgqQhchyhhg9QhOgzhngcIhogKQhhgKgOAAQjJAAigBfQhxBEhIBlIgdAjQgbAjgVArQhACCAADIQABCAAhBwQARA5AVArIABACIgFABQgGAAgFgCIgLgFQgrhGgThjQgNhDgBhGQAAllDgjmQBlhoCEg5QCDg5CPgCIAAACQFxgHDaD/QBdBuAyCRQAwCIAACTQAAA3gSBQQgSBUgdBFQgRAngOAAIgMgCQgIAAgIAGIgNADQAbg6APg5g");
	this.shape_3.setTransform(78.3,59.9);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgfSVQgzgTgMgaQgEADgEAAQgEABgCgEIgGgHIAAgCQgXhBgfhNIgZhAQgDgVg4h8Qg6iAgTgbQgJgMgkhDQgshPhtilQAAACgDACIhBhvQgohFgIgOQhPh8gmiCQgbhaAAg9QAAjVAviJQAVg+BSiPQAnhFBohTQA9gxAugcQBBgmBkgeQBxgiBeAAQB1AABsAbQBzAdBFAzQByBWAZAZQAxAxBWCBQB4DWAACgQAADbhnDTQg+CAiqEXQiDDqggBcQgHASgRA/QgQA4gWA8QgHgBgdBcIgeBiIgBABIgUAYQgKALgDAAQg2AcgDAAQg2AAgwgTgAgeyBIAzAAIgYgBQgbAAAAABg");
	this.shape_4.setTransform(79,119.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.1,157.7,238.5);


(lib.FIZ_23_part_013 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASBUQgtguAEgmQABgvAbgEQgOgKgMgCQgLgCgEAHIgBABIgBgBQgHgCABgIIAAgBQADgQAUACQAYADAXAYQATAUAAAIIgFAGQAAAAgBAAQAAgBAAABQAAAAAAAAQAAAAAAAAIgBAAIgQgOIgLAFQgPAGgBAZQgBAYALAZIAQAgIABACIgBABIgBAAIgCAAg");
	this.shape.setTransform(11.4,24.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AgrAsIgKgrQAAhzA1AhQAUANASAcQAQAcABATQAAAggGAPQgLAjgiAAQgfAAgQgtg");
	this.shape_1.setTransform(12.3,25.3);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgOC1IgEgBQghgFgWgsIgBgDQgLgXgOg+IgFg7QgEg7ABgKQAGhhATACQAaACA1BpQBLCZAJANQAJgDABgJIgJgUQAbAuAAAGQAAAQgHAJQgMgNgLAFQgKACgNANIgDgBIAAAEIgKAKQgWAXggAAIgDAAg");
	this.shape_2.setTransform(13.2,20.9);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgSDQQhIgMgYiKQgJgugCgzIgBgXIgBgbQAAgfAGgfQAMg9AiAEQAzADAyCGQAOAjAuBhQAbAtAAAGQAAARgHAJIAFAGIgGgCQAHAEAHAKQAJAOAAAHIgFADQgCgBgJgKQgMgMgIAAQgDgBgIACQgfA0gyAAIgSgCg");
	this.shape_3.setTransform(12.8,21);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,42);


(lib.FIZ_23_part_012 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AA+D9QgKgNAAgMQAAgGACgCIACgBIAGAAIAiBAQgYgSgKgMgAgLDmQgKgSAAgRIAFAAQAHANALASIAaAjQgCAEgIAAQgTgOgKgVgAAGB/QgVgXgBgZQAAgJAJgFQANAPAQAhIAPAkQgMgDgTgTgAg2B7Qgrg4gBgNQAAgHAFgDQACgCACAAQAGAGAPAjQAQAjgBAEIgBABgABIBQQgHgPgBgGQAAgHAEgBIAFgBIAAABIATA1IgBABQgJgHgKgSgAA4gYIgMgdQgEgIAAgVQAAgGAEgLQAEgJACAAQACAKAKBKgAgahFIgLg4QAAgGAEgNQAFgMABAAQAGAHADBMQAAACgHACgABhi9QgTgJAAglQAAgoAMgHQAFADADAEQgEApAAAMQAAAKADAXg");
	this.shape.setTransform(17.7,52.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AiOFxQgogngdgsQgZgrgLgOIgHgKIAYARQASAKASAAIAPgBIACgEQABgDAAgGQgJgIgOgWQgcgrgWhHQgOgsgBgFQgFgegDhjQAkBLAWAdQAVAcAOAAIALABQAEAAgBgGQABgdgMg+QgLhBABgKQAAgjANhZIADgPQAJAWAUAcQAZAkARAEIAHgBQgBhmAGgvQAGguATguIADgJQAFAhAuA2QAxA7AlAAQAnAAAbgVQASgOADgLIgIABIAFgBQALgDAHAAQAoAAAaAoQAbAoAAA+QAABMg5CGQhHCqgHAXQgNA1hSBVQhKBPgTAAQgxgQgrgtg");
	this.shape_1.setTransform(30.3,49.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjNFcQhLhngGg2IACgOIAAgBQANAHA0AxIAEACQgIgEABgKQAAgGgNgXQgPgdgDgIQgMgigJg3IgLh+QAAgYADgiQAEggAEgLIACgCQAQAaAZBDQAWA7AXAaIgHg1QgEgzgBgRQAAhmASg6QAJgcALgOIACAAIAUAvQAUAuAFAGQAJAMAAgOQAFhMACg9QAHgiA0hQQAIAPAAARQAAALAVAkQAYArAfAcQApAlAjgHIAhgJQAUgGATAAQAoAAAbAoQAbAoAAA+QAAA4hBCnQghBZgzB8QgQAxhJBEQhFBDgjAAQhCAAhVh0g");
	this.shape_2.setTransform(28.9,46.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,57.6,93);


(lib.FIZ_23_part_010copy2v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAZBeIgSgGQgXgJgVgRQgLgJgZgfQgZgbAAgDQAAgQAtgkQArgjANAAQAZAAAjA1QAkAwgBAaQABARgPAVQgTAagcAAQgHAAgFgCg");
	this.shape.setTransform(70.4,85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("Ag0AsQgVgUgXgRIBwhpQAcAOAPANQATASATAiIhtB2QgLgagdgdg");
	this.shape_1.setTransform(63.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AhpFDIARgfQgBAFAggYQAigXAWgMIAygVQAaAMATAtIgsAJQgWAJggAhQgdAbgLAVQgEAIgLAAQgKAAgkg6gAiLi4IAcgeQAbAQASAUQARASAWAmIgYAcQgbg4g9gigABClDIglgbIAkgeQAvAXAcA5IggAeQgWgkgUgRg");
	this.shape_2.setTransform(63.8,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AjYC2QgVg8AAgvQAAgiAMgbQAGgNAmhAQAmAVAQARQANANAWAjQgeAlgdAnIAYgFQATAxA2BTQAbArAbAoQggALgQAIQgZAMg1AoQhDiHgXg/gABjj4QgYgcgZgMQAegeBdg9QAKAIAQAUQAYAdAPAcIgMgBIhmBWQgEgPgVgYg");
	this.shape_3.setTransform(66.7,35.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAtHwQgXgIgQgNQgjghgVgaQgTgXgKABQgPgBgaghQgZghAAgRQAAgFAGgJQAGgLAAgFQg1hlgag4QgFgOgPhHQgPhFAAgJQAAgnALgZQANgiAvg7QA9hOB2hpQB7hpAugPQAIAGABAGQAJAIARAUQAXAcAPAdIACAKQhtBggpAnQg/A7iNCqQBlDLA1AiQAJAFAQAVQATAWAAAJQAAAGgCAGQgHAMgRAAQA8A1APAUQAUAaAAAdQAAAngXAXQgWAWgmAAQgPAAgRgFg");
	this.shape_4.setTransform(66,46.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AgKBgQgKgHgLgLQgLgJgKghIABgzQAMgFANADQAhAIASAeQAOAYADAdQABAKgGAJQgIAIgMACQgRgBgKgGgAAAgbQgZgOgbAHQgTAFgMAMIAAAAQAQgkAfgUQAaAAAXALIABABIAJAGQAMAIAHANQAJAOACATQABAGgBAJQgBAHgCAIQgPglgjgTgABBgiIgDgGQgRgbgfgNQgPgIgUgCQASgMASAAQAeADAYARQALAIADAOQADAPgJAMIgEAFIgEAHIgEgNg");
	this.shape_5.setTransform(74.5,15.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOBxQgRgHgOgUQgLgRgBgdIACAAIAAgEQALAgAKAKQAMALAKAGQAKAGARABQALgCAJgIQAFgJgBgJQgDgegOgYQgSgdgggIQgOgEgMAGIAAgCIgfgBQAMgMATgFQAbgGAZANQAjAUAOAlQADgIAAgIQABgIgBgGQgCgTgJgPQgHgNgMgHIgIgGIgCgBQgWgMgbAAQgeAVgQAjIgMAAIAPgaQAWglAbgYQAcgYAiALIAJACQASAEAOALIAKALIAIAKQARAVgMAaIgBADIgFAJQgGANgMAIQACANgCAOQgCANgLAFIABAcQABAOgHAMQgIAMgPAHIAAAEQghgGgJgDgAgXhbQATADAQAIQAeAMARAcIADAGIAEAMIAFgGIAEgGQAJgLgDgPQgDgPgLgHQgYgSgfgCIAAAAQgRAAgSALg");
	this.shape_6.setTransform(74.8,15.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AhdgQQgfg0AHgsIB2gBQAIANAlApQAqAtAfAWQgdAIgiAuQgaAkgEAQQhVhLgig3g");
	this.shape_7.setTransform(50.2,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AgjCFQgLgXgBgvQAAgZgcgxQgbgzAAgVQAAgOAPgWQAVgfAfAAQAKAAAUAGQAVAHAUALIABAAIASASIAAAAQAZApANAxQAKAmAAAhQgHAvgTASIABgIQACgsgDgoQgFhNgXAAIgHABQAAAAAAAAQABAAAAABQAAAAgBAAQAAAAAAAAQAEAQALAaQAHAZABAhQgBBCgHAQQgFAIgKgBQgCADgYACQAGgHAEgWQAEgVAAgVQAAglgJghQgJgZgIgJIgEACIAIAqQAFASAAAjQgBAugLAWQgHAQgIAAQgMAAgJgSg");
	this.shape_8.setTransform(72.4,67.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0FF7A").s().p("AgRBYQgUABgXgcQgWgaAAgQQAAggAkgoQAignAXAAQAEAAAaAMQAeAOAMAMIgMgBQgwgHgbAmQgVAaAAAYQAAAjAYAgg");
	this.shape_9.setTransform(62.9,56.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA+DeQgLgcABgqQAAgSgKgcQgEgLgQgHIgcgLQg5gWgNg3QhmhngagiQgjgwAAgyQAAgJACgCQAEgFANgBQgIAsAfA0QAiA5BXBLQAEgQAbgkQAhguAcgIQgdgYgrgtQglgpgIgNQAWAAgEADQBIBOAkAZQAOAKAhAJQAYAHAWAWQAeAhARALQAiAYAWBBQATA6AAAwQAAA2gvAgQgoAdg1AAQgagBgMgggAAdgiQgPAXAAAMQAAAVAcAyQAcAzAAAaQAAAuAMAYQAIASAMAAQAJgBAIgPQAMgWAAgvQAAgigEgTIgKgsIAFgBQAJAJAIAaQAJAiAAAkQABAWgEAVQgEAWgGAHQAXgCADgDQAJABAFgIQAIgQAAhCQAAghgIgbQgLgagDgQQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAGAAQAXAAAGBPQADAogCArIgBAJQATgSAGgvQABghgLgoQgNgxgZgnIAAAAIgSgSIgBAAQgUgLgXgHQgUgGgJAAQggAAgVAegAAUBDQgWggAAgjQABgWATgcQAdgmAvAHIANABQgNgMgegOQgagMgDAAQgZAAghAnQgkAoAAAiQAAAOAXAaQAWAcASgBIAQAFIAAAAg");
	this.shape_10.setTransform(60.6,58.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8089DD").s().p("AhfAjQglgkAAgsQAAgUASgSQALgMArgfIA5gBQAGAIASAZQAWAfAGAUIhCgOIACAJQAsAZBoAPQgUAGgQAbQgQAcAAAhQAAAKAHAgQh/glg4g4g");
	this.shape_11.setTransform(40.9,30.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AgzgYIBngBIhTAzQgHgagNgYg");
	this.shape_12.setTransform(54.6,20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0FF7A").s().p("AACB6QgQgVAAgYQAAgjAWgkQAWgeAUAAIAsABQgsAdgRAbQgPAYAAAhQAAAFAGATIAIAXIAAAAIAHAKQgUgGgRgTgAhdiSIAqAAQAIAOARAxQAAALgVAFQgJgbglg0g");
	this.shape_13.setTransform(52.5,32.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("Ah1A1QgGgXAfgmQAkgwA0AAQBDAAAABOQAAAkgTAVQgNAPgLAAQgWAAgBgWQADgeAAgPQAAgIgCgRQgDgPgCgEQgJApAAAkQgBATACAQQAAAHgXAEIgSADQgvAAgOg4gABQAKQABgigbgbQgbgbgiAEIgNABQAcgHAZAAQAdAAASAPQATAQgNgKQAOAtgEAMQgEAKgEAIQgBABAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgBAAQgDAAAAgJgABdhOQgHgGgogOIgNgCQAmgTAaAZQAXAVgBAfIgCAMQgLgmgNgKg");
	this.shape_14.setTransform(68.1,36.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AA1CbQgWgFgwgXIiShAQhDgigdgmQgUgbAAgbQAAgnAXgaQAZgcAqgBQgrAggMALQgSATAAAUQAAAsAmAkQA3A4CBAlQgGghAAgKQAAggAQgbQAQgcASgGQhmgPgugZIgDgJIBFAOQgHgUgWgfQgRgZgJgIIAaAAQAmA0AIAbQAVgFAAgLQgQgxgIgOIAUAAQANAYAIAcIBTg1IAlAAIhGAnQgvAcgcAZIAmAIQAlAGBNABQAMgHAqgRQAqgQAFgBQAaAAAXAVQAaAXAAAjQAAANgJANQgMAUgDAGQgBADgRASQgPARgBAFQgEARgFAOQgDAIgQAMQgTAMgOgBIgkAHQghAIgGgBQgUAAgNgDgAAwAXQgeAoAFAXQAOA4AvAAIATgDQAWgEAAgHQgBgQAAgTQABgjAIgsQACAEADASQADAQAAAJQAAAPgEAdQACAXAYgBQALAAANgPQASgUAAglQAAhOhFAAQg0AAgkAugAgEgDQgYAiAAAjQAAAYATAVQAOATAUAGIgHgKIAAAAIgHgXQgGgTAAgFQAAghAPgYQARgZAsgfIgtgBQgTAAgVAggADEgRQAcAYgBAlQgBAJAEgBQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAgBQAFgHAEgNQADgMgNgqQANAJgTgQQgTgPgdAAQgZAAgdAHIANgBIAIAAQAeAAAYAYgACwhDIANACQAoAOAHAHQAMAJAMAkIACgKQAAgfgWgVQgPgOgTAAQgOAAgQAIg");
	this.shape_15.setTransform(53.9,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_010copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAZBeIgSgGQgXgJgVgRQgLgJgZgfQgZgbAAgDQAAgQAtgkQArgjANAAQAZAAAjA1QAkAwgBAaQABARgPAVQgTAagcAAQgHAAgFgCg");
	this.shape.setTransform(70.4,85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("Ag0AsQgVgUgXgRIBwhpQAcAOAPANQATASATAiIhtB2QgLgagdgdg");
	this.shape_1.setTransform(63.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AhpFDIARgfQgBAFAggYQAigXAWgMIAygVQAaAMATAtIgsAJQgWAJggAhQgdAbgLAVQgEAIgLAAQgKAAgkg6gAiLi4IAcgeQAbAQASAUQARASAWAmIgYAcQgbg4g9gigABClDIglgbIAkgeQAvAXAcA5IggAeQgWgkgUgRg");
	this.shape_2.setTransform(63.8,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AjYC2QgVg8AAgvQAAgiAMgbQAGgNAmhAQAmAVAQARQANANAWAjQgeAlgdAnIAYgFQATAxA2BTQAbArAbAoQggALgQAIQgZAMg1AoQhDiHgXg/gABjj4QgYgcgZgMQAegeBdg9QAKAIAQAUQAYAdAPAcIgMgBIhmBWQgEgPgVgYg");
	this.shape_3.setTransform(66.7,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AAHARQhJhKgogVIAggKQAkgLAZgKQAZgLAPACQAJABAKAIIAkAfQAZAWAAAHIgHAmQgGAigBAQQgCAmADArQgNgehKhJg");
	this.shape_4.setTransform(62,19.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AgvBxQhohqhmimIAAAJIgdg3IgZguIAxgMQAKAAAMAEQA4BcBgCoQBTCIBIA1QAbATBxBCQBVAzAMASQjAg7ijisgAAAi8Qg4g2hAgaQBUgFBhByQAkArAbAuQAYAqABARQhbh5g6g4gAB5knQgdgegEgCIgJgFIAIgGQAJgFAGAAQAKAAAvA+IgGAUQgDgEgdgeg");
	this.shape_5.setTransform(57.7,39.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("ABqEJQg/gjgrgqQhghfiSkvIBJgDQATAABDA0QBAAyAdAkQAZAdAiAuQAeAlAMAMQANAOA7CFIA8CKQhigwgngVgABukRQgWgUgEgDIBFglIgCA3IgOAhQgDgGgYgWg");
	this.shape_6.setTransform(60.5,34.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC99").s().p("AAKF0Qgsgjg1gzIhIhIQhEhNhAhvQh/jaAAi6QAAgsAHgbQAGgYAIAAQAaAAAmA7QAiA2AAAVQAAAJA8BcQA3BUAbAlQAbAlAnAmIAlAjQA2BCA8AuQAdAXAYAMIABAAQgVgUgOgMQgEgDBCAsIBPAyQAQAJAsAMQAoALAIAHQAPAOAjArQApAxAAALQAAA9gnAfQgjAbhAAAQiFAAiKhmg");
	this.shape_7.setTransform(57.4,52.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72EBEB").s().p("Ag5g0QAZgWApAAIAgACQAAAmAFAcQADAOAEASIABAPQgBAOgKgDQgWgEAoAIIgCABQg8gJgPADQgdAHgPARg");
	this.shape_8.setTransform(69.5,31.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8089DD").s().p("AiMEVQgGgCgtgWQgUgJgVgaQgagfAAgeQAAgIAfgOQAegOATAAQAWAAAjALIAAACIguAQQAEAFAFABQCngMCog3QgDAdAcA0QAdA1AcAGQgmAeheAPQhOANhdAAQhAAAgggKgAjDjvQAZglANgKIACAmQgKBpgCADQgkgLgqARQAPg2Ajgzg");
	this.shape_9.setTransform(90.4,31.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FF7A").s().p("ADDCKQgaglAAg7QAAgQAKgHQAGgFAjgNIABAAQgGALgDAPIgDANQAAADAJAfQAKAiAEAIQAFAJALAEQAaAJAcAPQgXAUgXAAQgkAAgZgjgAkfAqQAWgWAoAAQAOAAAmAOQAKAAAFAgQgdgIgRAAQg8AAgeAhQgQgaAXgXgAjhirIAYAEIACAgQAAgDgmAEQgoAEgRAHQABg0BEAEgAjHiHIAAAAg");
	this.shape_10.setTransform(93.6,35.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AAJBgQAmgFARgIQAJgEADgEQhbAKgaAGIgRAEQgcAAgXgWQgcgbAAgvQAAgzBGghQA1gZAkAAQAvAAAYAgQAPAVAAAQQgTgIgagQQgPgJgLAAQgFAAgFACQgGADADAEIABADIAAgBQAdgIAXASQAZATAHAHQASATAAAUIAAAGIgCABQgIgHgVgIQgZgHgLADQABAEACADQAGADAaAJQAWAIAAADQAAAFADAHQAEAJACALQgBAGANAAQgJABgWAUQgYAWgjAAQgLAAgcgPg");
	this.shape_11.setTransform(130.4,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 10
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAtHwQgXgIgQgNQgjghgVgaQgTgXgKABQgPgBgaghQgZghAAgRQAAgFAGgJQAGgLAAgFQg1hlgag4QgFgOgPhHQgPhFAAgJQAAgnALgZQANgiAvg7QA9hOB2hpQB7hpAugPQAIAGABAGQAJAIARAUQAXAcAPAdIACAKQhtBggpAnQg/A7iNCqQBlDLA1AiQAJAFAQAVQATAWAAAJQAAAGgCAGQgHAMgRAAQA8A1APAUQAUAaAAAdQAAAngXAXQgWAWgmAAQgPAAgRgFg");
	this.shape_12.setTransform(66,46.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ACVHrQg1gUhqhCIgwglIgbgaIgaggQgSgVgKAAIgog2Qgtg+gQgSQg9hKhBiVQhFiiAAhaQAAhbAQgjQALgWATAAQAVAAAWAhIAhA7QAOgEAzgHQBqAABxgmQAQgGDDhQIgCBJIgPCdQgDAaAAAeQAAC8CJDYQAkA5A6BNQArA5AAAGQAAA0gKAVQgfBAhoAAQhTgBg7gVg");
	this.shape_13.setTransform(57.6,50.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AlgD8Qg+g2AAhkQAAiLAHgwIAIgZQAXhCAVgmQAeg5AoggIADA+IAEAAIACBZQAAAzAEAgQAAA/ADAXQAKBCAiA3QBPgJA8gOQBCgPBWgcIARgPQARgOALgEQAdgJBCglQAygdAjAAQAzAAAiAlQAgAigRAaQAFAFAJARQAKARAAAFQAAAFgEAGQgEAHAAAFIACAQQADAMgBAGQgIAYgUAPQgYARggAAQgZAAgLgFQgOgGgEgQQgMAFgiAVQgeATgTAEQgLACg2ATQg9AXgaAIIgsALQg3AJhjAAQh1AAg/g4gAkTA7IABAAQABAAAAABQAAAAAAgBQAAAAAAAAQAAAAAAgBgAB9AxIAAABIAEgGg");
	this.shape_14.setTransform(103.1,30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_010copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAZBeIgSgGQgXgJgVgRQgLgJgZgfQgZgbAAgDQAAgQAtgkQArgjANAAQAZAAAjA1QAkAwgBAaQABARgPAVQgTAagcAAQgHAAgFgCg");
	this.shape.setTransform(70.4,85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("Ag0AsQgVgUgXgRIBwhpQAcAOAPANQATASATAiIhtB2QgLgagdgdg");
	this.shape_1.setTransform(63.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AhpFDIARgfQgBAFAggYQAigXAWgMIAygVQAaAMATAtIgsAJQgWAJggAhQgdAbgLAVQgEAIgLAAQgKAAgkg6gAiLi4IAcgeQAbAQASAUQARASAWAmIgYAcQgbg4g9gigABClDIglgbIAkgeQAvAXAcA5IggAeQgWgkgUgRg");
	this.shape_2.setTransform(63.8,45.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AjYC2QgVg8AAgvQAAgiAMgbQAGgNAmhAQAmAVAQARQANANAWAjQgeAlgdAnIAYgFQATAxA2BTQAbArAbAoQggALgQAIQgZAMg1AoQhDiHgXg/gABjj4QgYgcgZgMQAegeBdg9QAKAIAQAUQAYAdAPAcIgMgBIhmBWQgEgPgVgYg");
	this.shape_3.setTransform(66.7,35.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AgeDLIgLgCQgthRgniNQgjh9gEg+IABAAIACgBQAKAHApALQA0AOAoAAQAIAAARgEQAUgDAHgDQASBjAuCCQAnBvAcA5g");
	this.shape_4.setTransform(22.8,-70.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AhjAjQgYgWgDgUQAAgSAEgzIATAhQAQAYAqATQgSgIANAIQAfAOAiAAQAZAAAagLQAngOAOglQADAJADAEIABABIABATQAAA8gRASQgNAOgqAAQhrAAgvgqg");
	this.shape_5.setTransform(15.8,-98.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("Ag9DGQgCgHgigaQghgagJgQIgJgRQgKgbAAgxQAAgHAHgWQAIgVAFgIIgDAUQgBABABAdQAAAfACAEQAChFAvheQAwhiApAAQAIAAAHAIQAGAIAAAKIABATQgBAMgGAAIgLAUQgKAYgEAHQgRAWgQAYQggAyACAXIBKhiQAvg5AegBQATABAMAIQALAJAAANQAAAGgxAwQg0AxgOAzIAGgIQBThtAhABQAPAAAKALQAIAJAAAJQgBAOgFANQgIAYgNAAQgKAAgKAdQgMAqgJAXQgkBfhFAAQgtAAgCgHg");
	this.shape_6.setTransform(19,-119.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72EBEB").s().p("AgWAPQgYgagbgtQAPAAAvgOQAzgQAhgTIABACIgPDRQg7g/gWgcg");
	this.shape_7.setTransform(35.3,-18.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8089DD").s().p("Ah6gXQgPhNgJjNIAEAAQBAAeAjAMQAlAMAaAAQAJAAARgFQAPCgALA5QASBjA5C5QggAgglAPQglAPgsAAQhcjEgbiGg");
	this.shape_8.setTransform(23.5,-63.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F0FF7A").s().p("AAAFqQAygBAqgSQAkgRAVgZIAZA/QgdAVggALQgWAHg8ANgAh4kNQg1gkAAg1QAAgOAGgPQAGgRAJgLQAiBLAcAVQAZATA7AAQA1AAAagvQAEASAAAIQAAA2gTAVQgNAPgbAAQhSAAg4gmg");
	this.shape_9.setTransform(24,-67.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("Ah4CVQgvgwAAg9IAKgyQAPg0AegPIgFAIQgQAfgMAkQAHgDALgSQARgdANgRQA+hNAvgbQAbgQAcAAQAGAAAEABIAJABQAEAMgBALQgFAjgNABIgOANQgRAPgNAJQgXAOgWAQQguAhgIAYIAJgGIASgNQAMgJAFABQBYg1ABAAQAFAAATgEQATgFAEABQAWgBANAOQALAMAAAMQAAAQgIAEIgSAIQgQAIgdAJIgfAJQgfAQgdAlIAIgFQAWgMAngbQAigTAiABIAUABQATAHAAAUQgNAzghAAQgJgBg7A+Qg5A8gmAAQgmAAgpgpg");
	this.shape_10.setTransform(26.9,-118.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 10
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAtHwQgXgIgQgNQgjghgVgaQgTgXgKABQgPgBgaghQgZghAAgRQAAgFAGgJQAGgLAAgFQg1hlgag4QgFgOgPhHQgPhFAAgJQAAgnALgZQANgiAvg7QA9hOB2hpQB7hpAugPQAIAGABAGQAJAIARAUQAXAcAPAdIACAKQhtBggpAnQg/A7iNCqQBlDLA1AiQAJAFAQAVQATAWAAAJQAAAGgCAGQgHAMgRAAQA8A1APAUQAUAaAAAdQAAAngXAXQgWAWgmAAQgPAAgRgFg");
	this.shape_11.setTransform(66,46.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhpEWQg1icgLhxQgMgJgKgRQgIgQAAgJQAAgYAMhLQAAgFgGgbQgGgbAAgFQAAgoAQgTQAdgjAUgxQAWg0AjgjQAegfASAAQAXAAALAPQAKAMAAAQQAAARgHAVIgHAOQAlgYAQAAQAhAAARAUQARAVgNAcQAIACALAHQAKAGADAAQAHAAACAGIAEAOQABABAAAKQAAASgHAPQgGAMgEAAQgSAAgsB/IAIAWQAHAZAAAVQAAARgFAXQgHAhgLAJQAKA9AlB3QAsCLAqBPIjggVIgDAwQghg3gtiGgAiUAaQABABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAIACgBIgDgEIAAACg");
	this.shape_12.setTransform(21.2,-94.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhbEYQhdjwAAkeIgIgFQgGgGAAgXQAAgsAXhfQAYhiAPgQQAHgHAXgMQAjgWA6g4QATgTAbgLQAZgJAXAAQARAAAMANQAMANAAAQQAAASgZAeIgKALIAOgFQAGgBAGAAQAlAAAUAUQAQAQAAAVQAAARgQAOQAJAGAKAPQAKAQAAAHQAAAUgRARQgRAOAAABQAAAHgMAGQgWALgYAUQgZAVgCAHIABAnQABAMgKAiQgNAqgPAMQAUDmAsCaQAaBaArBOIgWEpQieikhYjigAimjfIAAAAIAEAAIgDgCQAAAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAABg");
	this.shape_13.setTransform(25.5,-71.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_010 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AABBSQgrgTgegpQgbgiAEgIQAQgLAQgQQAVgVAHgGQAXgTAPAAQAYAAAkA0QAiAvAAAZQAAAWgUAVQgSAUgRAAQgSgCgXgKg");
	this.shape.setTransform(70.3,85.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AgjA+QgagighgUIBvhnQAPAHAZAZQAZAYANAVIhrByQgGgOgRgUg");
	this.shape_1.setTransform(63.5,21.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AhnFCQACgTAYgTQAWgSA2gaQA4gdAQAWQAEAFAFAQQAFAOAGAEQgZgKg+A4QgdAcgiAgQgLgMghgsgAhXiTQgWgWgbgPIAZgcIAYAQQAOAKAGAKQAPAWAVAVQAIAOgcAVQgLgagZgXgABIlCIgogcIAhgcQAOAHAPANQAaAWARAjIgdAcQgHgYgdgZg");
	this.shape_2.setTransform(63.8,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AARgQIAAACIghAfIAhghg");
	this.shape_3.setTransform(89.2,8.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AjBDlQgqhtAAgsQgBghAMgcQAIgPAkg7QAqAPArBDIgoA0IgSAZQABACAYgFQAFAMAsBPQA1BdAZAcQgUAEgmAUQgqAXgZAWQgfg6gkhbgABlj4QgZgdgXgLQAcgbBeg9QASAQATAbQAQAXAIAPIgLgCIgBABIhjBVQgDgMgVgZg");
	this.shape_4.setTransform(66.7,35.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AAABzIAAAAIgGgDQgNgPgFgSIgKgjQgIghAFgdIAAgBIgFgnIgBgBIgBAAIgDABQgFADAAAEIgCAIIAAAAQgMAsALAuIAAABQADASAHATQAFAPAJAOIgKgBQgbgFgUgSQgZgkgCgqQAAgMADgNIAAAAIgCgLQgBgSADgVIAAgBIgBgBIAAAAIgDABQgEACgDAEIAAAAQgGARgEATQgEASAAAQQADAtAXAnIgHAKQgPgCgPgEIAAAAIgBAAQgDgCgDgGQgFgLgCgNQgCgNABgbQAAgcALggIAPgsIAFgMIAFgDIAAABIAmgQQAtgSAvAGQAkADAiAOIABADIAAAAQAJASAMAQQAQATAVARQANAKAMAMIgBAAIAIAJIAAABIAAAEIAAABIAAAAIgJAQIAAABQgFAGgGADQgsgGgggbIgIgFIgBgHIgCgRIgBgBIgQgiIgBgBIgBAAIAAABIgBABIAAABIgBAIIAAABQgDAWAEAWIABAHIAAAAIABAAIAAABQAFAiAAAlQgCAigBAHIAAABIgBAAQgIABgPAGIgRgGg");
	this.shape_5.setTransform(47.6,75.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAACQAAgCABgCIgCAFIABgBg");
	this.shape_6.setTransform(47.4,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72EBEB").s().p("AgRA8QgggYgWAAQgIAAgUgDIgBAAIASgTIABAAIABAAIABAAIAEgFQAQgQALgHIABAAIBCg8QAWADAfATQAQAKANAKIgHAGIgQAQQgYAWgVAYIAAABIAAAAQAAADgUAVIgMAOIgSgPg");
	this.shape_7.setTransform(61,22);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F0FF7A").s().p("AjEDsQBYgxBsAnQANARgGARQgfgNgngEQg1gGgzATIgBAAQgRAHgSAIQgFgQAMgTgAgBgzQgkgVgnAFIAWgcIAAAAIABgBIAIgKQAAAAAAABQABAAAAAAQAAAAABAAQAAAAAAgBIAAAAIAAAAQALAGAaAHIAfAKIAAgBQAKAGAUAPIgIAKIgHAKIgBADIAAABIgLANQgMgOgRgLgAChjRQgJgLgLgGQgHgFgbgEIgKgCIAFgEIABAAIABAAIABAAIALgKIACgDIABgCIAAAAIAQgOQA2AQAQAfIgfAeIgNgQg");
	this.shape_8.setTransform(54.6,37.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8089DD").s().p("AjwD6QAMgtAOgtQAKghAQggQASgiAXgfIAdAGQAlAHAIAHIAcAaIAAADIgEAAIgBAAIgDACIgBABQgCACAAADIAAAAIgDAPIAAABIAAABIAAABIgKBWQgFAvAFAyIAAADQhkgfhTAmIAMgwgABajEIBlhPIgBAAIADgDIABgBIAAAAIgCgGIgBgFIAAgBIgBgBIAAgFQARABAaAvQAOAZAGASIgIAIIAAgCIgBgDIAAgBIgCgCIAAAAQgDgDgEgBIAAAAQgGAAgCADIAAAAIhAA2QgBAAAAAAQgBABAAAAQgBAAAAAAQAAABAAAAIgDADQgSgfgxgRgADPkKIABAAIgBgBg");
	this.shape_9.setTransform(61,28.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("AiDB7IgPgMQgPgNgCgDIgJgVQgCgHAAgHQAUhDAHgPIgEAfQgJAYATApQANAdAMANIAGAFIgBACQgCACgHAAQgEAAgFADIgBAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQAAgBAAgBgAhpBhQgcgZAAgrQAAgwAbgwQAkg/A9AEQgGAMgaApQgYAxAABGQAAAIAKASQAKASAAAGQAAAIgEAGQgFAGgHAAQgXAAgVgTgAgcBNQgNgUAAgRQAAg3Abg7QAYgwAAgFQAxADAWAaQANAOATAcQAOAMAKAhQAIAYATACQALAAAAATQAAAHgEADQgHAEgYAAQgSAAgPgQQgHgJgPgXQgCgFgDggIgDgjIgBgBQgdAYgHBPQgDAkgGANQgIAUgVAAQgQAAgOgWg");
	this.shape_10.setTransform(3.3,27);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0FF7A").s().p("AlPBBIAAgNIAIALQALAMAXAQIgWASQgWARgJAGQAJghACgigACOAyQgegbgBgDQABgGgLgGIgMgEQAOgdAUALQAMAGATASQANAKAPAXQATAeAAAZQAAAKgYAHQgEgggfghgAkOghIgGgJQAmAUAAALQAAAKgDALQgKgjgTgIgAEyhKQgbgigugNQAfgaAtAlQAKAJAMARQAQAYAAASQAAAKgRAJQgLghgNgSg");
	this.shape_11.setTransform(43.7,23.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AghAYQgigngXgJQBOhSAfATQAiATATAfQATAeAAAKQAAACgkAjQgkAigTARQAAgZghgqg");
	this.shape_12.setTransform(66,22.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8089DD").s().p("Aj/DBQhpgQgWgFIAugqIAHACIAPABQAaAAALgJQAHgHAAgPQAAgFgIgPQgJgPAAgFQAAgGAFgPIAEgOQA9AVBVANQBJALAzAAQAHAAAGgFQAHgDABgCIACgIQAqAeAPAQQAWAZAAAgQAAANhHASQhNAUhQAAQgPAAhqgPgADQh9QBPhAATgJQAPgHAjgBIADgBIASA0IAGAbIhRBgQgXhGhHgXg");
	this.shape_13.setTransform(50,20.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#72EBEB").s().p("AgcAjQgXgggmgZIBVhGQAiAJALAIQAcAVAVA7QAAAGghAdIg8A1QgDgcgWgeg");
	this.shape_14.setTransform(66.7,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0FF7A").s().p("ADABEQgWgeg2gbIANgLQAOgIAGAAQAmAAAcA3QAOAdAHAfQAAAKgYAHQgDghgRgXgAlLgFQgbgCgQgTIgNgXIABgLQAAAEAVADQASACALAAQAYAAARgKQAdgSBhgWIgBAEQgPAjg5AeQgzAbggAAIgGAAgAFThHQgjgogcAAQAegcAuAmIASAXQASAbAAASQAAAKgSAJQABgTgggmg");
	this.shape_15.setTransform(40.5,21.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8089DD").s().p("AirCtQiDgnh3hXQA6gWAogaQAkgbAMgaQBCAuBNAnQBXAvAdAAQAGAAACgEQABgDgCgEQAuAPATAqQAKAWAAAbQAAAGgTAGIgiAJQgdAFgKAAQg9AAhUgagAD9hGQgcghgjgHQBShQBNgCIAAgGQAGAFABgCIAqAjQAYAWAAAMIgGACQgFgBgEgDQABAAAAAAQAAAAAAgBQAAAAgBgBQgBgBgBgCIgMgKQgSAJgvA4IgwA9QgDgZgYgcg");
	this.shape_16.setTransform(53.1,18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("AgXCmQgcgMgUgbQgWgOhIgXQgrgOAAgdQAAggAfAAQAKAAAlAOQAmAPAQALIgBADQgHAFgFAJIACAAQAEAAAogSQA5gaBBgaQgZAAgOgMQgFgFgKgQIgWgfQgrg8AAgXQAAgLAKgJQAKgIALAAQAiAAAkApQAtA0ALBcIAEAaQAGAPgTADQgUACgMAZIAGAEQARgIANgJQAPgIAsABQALAAALAEQAQAJAAAPQAAAMgMAJQgMALgSAAQg8AAgjAZQgiAagdAAQgOAAgSgIgAhvgTQgxgbAAgSQAAgVAJgLQAJgLARAAQAbAAAjAWQAyAfAhA6IgaANIgkAQQgNgYg4gcg");
	this.shape_17.setTransform(5.6,-2.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0FF7A").s().p("ADABRQgWgfg2gbIANgLQAOgKAGAAQAmAAAcA6QAOAdAHAeQAAAKgYAHQgDghgRgWgAlFAGIgGgBIACgBQgugRgMgZIACgOIAdAGIAaACQAagBAPgEQALgDASgKIAVgTQATgRACAAQAGAAAAgJIAAgSIgBgKIAuArIgCAHIgBAAIgDAFQgQAhg1AcQgyAYggABIgBAAgAFTg7QgjgogcAAQAegcAuAmIASAYQASAaAAATQAAAJgSAKQABgUgggmg");
	this.shape_18.setTransform(40.5,20.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AgbB3QgUgUgXgiQAYgUAJgKQgDgBgNAAQgSAAgaAaQgbAagDAAQgQAAgPgTQgOgRAAgKQAAgEAGgKIAMgUQAGAEAIADQAPAFAUAAQAZAAAMgQQAHgIAGgQIAFgLQgYACgRARQgRAOgOAAIgbgKQgNAAAAguQAQgiAVAAQAFAbAfANQAZAKAiAAQAJAAAWgGQAVgGAQABIARAEQgrABgNATQgIAKAAASQAAA/BbAAIAWgBIAGgEQg6gIgWgUQgPgNAAgWQAAgFAPgHQAQgJANAAQAyAAAgAeQAgAeAAAvQAAANgFAIQgEAGgEAAQgmAmgFACQgGADgOADQgOADgIAAQhDAAgjgngABfgqQgPgDgFgHQgNgNgMgFQgOgGgWAAIg0ANQgcAAgUgSQgUgRAAgXQAAgQAMgLQAKgJAFAAQA8AAAxAWQBDAdAPA6IAFAJIgWgDg");
	this.shape_19.setTransform(0,-1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#72EBEB").s().p("AgxAYIgMgZQAAgGgIgHQgMgJgHgHQCPgjAIAHIALAPQANAUABAPIABAjIh8AhQgBgIgNgcg");
	this.shape_20.setTransform(55.4,9.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0FF7A").s().p("AAsCTQgGgFgGghQgGgbAAgGQAAgTAHgjQAEgQANgGQAKgEAWAAQAKAAgDABIgEAAIgEBCQAAAQARBEQABAFAFABQAJACAEADIgeAFQgfgFgMgLgAhQgQQgHgTgEgJQgKgRgKgMQgKgKgRgPQApgLATATQAPAQATA6QgNAGgJAAQgJAAgFgGgABfiaQAUgUAOAiQAHARADAbIgQAZQgDgxgZgig");
	this.shape_21.setTransform(54.1,17.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AhJB4QgXgZAAgqQAAg1AYgeQAUgaAgACQAcABAWAZQAYAcAAAoQAAALgJAHQgHAGgJAAQgYAAgRgQQgXgUgIglIABAQQgFAfAfAZQAaAXAPgFQgEAigOAOQgMANgaAAQgXAAgTgWgAAcg4QgagTgcAAQgLAAgcANIgGAGQAeg4AQAAQArAAAZAaQASATADAbIAAARIgDAPQgHgdgagTgAA2hlQgcgZgjgDQAFgDAOgEIARgFQACAAAwAQQAnAYgkApQgDgVgXgUg");
	this.shape_22.setTransform(73.4,19);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8089DD").s().p("AicCBQhNgbgdgOQgVgJgKgMQgMgPAAgVQAAgfAhgTQAVgNBGgfQAnAeATAiIgqgIQgegHgQgBIgEAAQAiAaAlAGQAcAGB2AJQgCAHgFAiIgCAWQAAAjAMAmQg2gDhrgkgAEjguQAEgEAAgMQAAgIgagXQgggdgjAAQgJgBgMAEQgXAIgUAVQgHgZgLgYIBXgQIBRgIIgCgCQgCgCAGAAIADAAIgBAAQAGAPAEAdQAEAZAAALQAAAVgGANQgCAHgEAEg");
	this.shape_23.setTransform(55.8,15.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AglB2QghgSgFgBQg0gMg/gFQgZgDAAgOQAAgNAVgMQAVgMAXAAQAJAAAUADQAWADAMADIgLAZIAxghQArgcAXgBIAEgBQgXgMhdhFQgHgEAAgLQAAgWAKgIQAGgFANAAQAtAABBAxQBHA1AAAuQAAAKgYARQAOgCAXgNQASgLAlAAQAUAAAMAQQAGAJACAIQAAAQgUAKQgOAGgKAAQhBADggAZQgeAXgcAAQgbAAgbgPgAhlAGIgFgGQgQgHgqgNIAEADIgGgDQgbgOAAgPQAAgHAFgGQAJgNAYAAQANAAAwAYQA1AaAcAZIgJAAQgJAFgUAMQgCACgEAAQgNAAgfgNg");
	this.shape_24.setTransform(4.9,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F0FF7A").s().p("ADABHQgWgeg2gbQArgnAqAwQAjArAAAsQAAAKgYAHQgDghgRgXgAlpgSQgagRAAgLIABgLQAKADAnAIQAaAAAegRQAngVBJgOQgNAmg8AfQgzAbggAAQgLAAgZgQgAFThEQgjgogcAAQALgbAgAPQAQAHARAPIASAXQASAbAAASQAAAKgSAJQABgTgggmg");
	this.shape_25.setTransform(40.5,21.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8089DD").s().p("AirCtQiDgnh3hXQA6gWAogaQAkgbAMgaQBdBAAZANQAWAMBKAdIAtAOQADgBADgEQACgEgBgCQAuAPATAqQAKAWAAAbQAAAGgTAGIgiAJQgdAFgKAAQg9AAhUgagAD9hGQgcghgjgHIBBg1QAZgUAXgGQASgFARADQAJABACgIIAGAEIABgBIApAjQAYAWABAMQgBABgFAAQgFgBgEgCIAAgBIgFgGIgJgIQgaAXghAnIg2BAQgDgZgYgcg");
	this.shape_26.setTransform(53.1,18);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72EBEB").s().p("Ag1APQgMhBAAgiQAAgFAlgIQAjgHASADQAAAwAFAWQAHAhAdA5QgQgBgeAMQggANgRAUQgMgOgMhKg");
	this.shape_27.setTransform(68.5,33.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AhTBeQgwgfAAg/QAAgTAIgbQAHgbAFAAQABAAADgGQAGgHAPgIQAFgDAOgEIAPgFQAMAAAUAHIgKAMIgPAHIgSAJQADABAAADIAhABQAYAAAUgIQAPgFAIgFQgxAEgGAAIAAgBIATgSQATgQAgAAQAgAAAPAWQAMASgDAWIgjAmQAEgBASgLIATgMQAIAKAFAAIACAWQAAAYgRAPQgZASgSAOIAGADQANgFAXgLIgFANQgHAOgeARQgjAVgfAAQg1AAgkgWg");
	this.shape_28.setTransform(134.2,64.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F0FF7A").s().p("ADGECQgbgsAAhHQAAgnAMgLQALgJAoAAIARABQgHAQgFAaQgFAWAAAJQAAAwAcAoQAeApArgBQgIAHgPAHQgSAIgRAAQgyAAgdgygAkZgKIgIgRQAOgVAhgMQAagKASABQAHAAACADIAPASQgbAAgdAWQgJAGggAbIgKgRgAk6kpQAOgKALAAIAaADIAUADIgBAbQgQgDgKAAQguAAgSAMQACgTASgNg");
	this.shape_29.setTransform(95.8,49);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8089DD").s().p("AgYEmQiChOgphNIApgjQAKgHAzgSQAXAeBPAqQBYAvA8AGIA8AAIgEAyQAABAATAjIAbAwQiUgaiHhRgAkCjXQAwhuATgWQANgOBOgmQgrBlgMAYQABABgVA6g");
	this.shape_30.setTransform(89.4,38.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#72EBEB").s().p("AgtAdQgUgRgZgMIA2hCQAfgkAIADQASAHAVAOQAUANAdAtQAAAKgnAuIguBAQgMgngnggg");
	this.shape_31.setTransform(64.4,20.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#F0FF7A").s().p("ABzBcQgfgcgVgGIgEgCQAKghAYAPQAOAJAZAWIAcAkQASAYAAAHQAAAKgQAKQgMgggjgggAkaASIgbgaQA3gHAtghQA2gnAahEQARAXAAAJQgEAngTAkQgnBGhQAAQgYAAgEgEgAD8hGQgggcgggJIAVgeQAiALAZAUQAYAUASAeIgTAgQgMgXgbgXg");
	this.shape_32.setTransform(45.7,19.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8089DD").s().p("AieDBQg3gmhihvQAlAAAugoQAuglAHgnQAoA/A1A/QAbAhAaAdQABABAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAAAFABIABAAQACAAACgBQABAAABAAQAAAAgBAAQAAAAgCAAIAAgqQAaAGAeAmQAhApAAAOQgfAhgRAIQgIADgdAFIgIABIgWADQg9AAg2glgADFh/QgegVgTgGQAWgdATgQQAfgaAjAAQAFAAAQAFQAPADAFAAQAFAAADgEIAFgIIACAAQABAAAAAGQAAAKgUBlIgEgHQgDgDgGgFIgGAGIgaAuQgNgaglgag");
	this.shape_33.setTransform(53.2,18.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("Ag7B1QgIgHAAgNQAAgPA/gRQAzgPAMgBQAKABAOgDIADgGQgagCgmgJQg2gNgOgRQgCADAAAIQgiAAgmAWQgSAMgNAMQgTAAgKgNQgGgIAAgHQAAgVBWgNQBZgQAJgeIACgCQgRAAghgGQgigFAAgEQAAgCgSgZQAAgMADgGQAGgJATAAQAEAAAfAHQAfAHAHAAQAXgBAwgFQAxgBAjAfQAhAeAAAoQAAAXggAjQgjAlgyAWQgYAKgmAGQgbAEgVAAQgLAAgIgGgAh1BXQgRgJAAgPQAAgKAcgPQAigSArAAIA0ASQgHADgbAGQgdAGgRAHQgSAHgIAPQgGALgHAAQgJAAgMgGg");
	this.shape_34.setTransform(12.2,5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC99").s().p("AhLBsQAAgaA+gNQBMgLAfgJQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQgggBgzgQQg0gQgMgNIgBAIQguAHgIACIgfAPQgMAFgJAOIgIAMQgPAAgMgJQgNgJAAgNQAAgXBggPQBkgTAJggIABgCQgUAAgkgGQglgGAAgEQgTgbAAgDQAAgSAHgHQAGgFARAAQAEAAAhAIIAkAHQAigBA4gFIAVABQAXACAVAIQA+AbABBIQgBAXgTAaQgXAdg1AjQgoAbgxAJQgXADgvAAQgcAAAAgcgAiCBhQgSgKAAgQQgBgYA/gQQBCgSAlAdIAIAAQgIAEgdAHQgiAGgSAIQgTAIgKAQQgHAMgGAAQgLAAgNgGg");
	this.shape_35.setTransform(2.7,29.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0FF7A").s().p("AknCyQAAgCgOgDQAwgqAWgVQAkgkAAghQgOgzgXgdQAKALASAOQARAQAAAgQAABZglAlQgSASgUABgAB0A0QgfgdgVgGIgFgCIABgDQAKgbAYAPQAOAGAYAWIAdAkQASAYAAAHQAAAKgQAKQgMgfgjgggAD8hvQgfgbgggKIAVgeQAiAMAYATQAYAUASAfIgTAfQgLgWgcgYg");
	this.shape_36.setTransform(45.7,23.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8089DD").s().p("AjCDmQgTgChYgOQAZgkAJgfQAMgogGg5QBPAaAUAFQAqAKBJAFIANAAIABgEIgBgMIAAgCIgIgEIAJABQABgFADgCQAHAAAGAKQAVAKAYAeQAhApAAAOQgfAhgRAIQgHADgdAFIgBAAIgHABIAAADIg5AJQhDgBgogEgAC7iDQgdgVgUgGQAWgdATgQQAfgaAjAAQAFAAAQAFQAPADAFAAQAFAAADgEIAGgIIACAAQABAAAAAGQAAAKgVBlIgEgHQgDgDgGgFIgGAGIgaAuQgNgaglgag");
	this.shape_37.setTransform(54.2,19.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#72EBEB").s().p("AgrBAQAEgKgPglQgOgggIgMIAUgHQAVgIBFgiQAdARAKAbQAHAXgFAhQhdAvgKAAQgGAAgDACIgCAEIgBAAQgEAAABgNg");
	this.shape_38.setTransform(62.6,14.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8089DD").s().p("AjbCWQhKhFgmiUQgRg6gPhKQA5AeA0AAQAbAAAbgHQAfgJAWgSQAAA+AQBXQARBXAUAtIAPAkQADAFAGACQABgCAAglQAOAHAQAYQAUAdAAAaIgCAfQgNAAgbACIgfADQhGAAg5g2gADsAbQgPgigWgTQArgfAVgHQAegKAhgIIADgEIAEgFQAAANAPAxQAQAuAAAlQAAAKgFgCIgLgXIABAAIABgCIgDgUIgCgBIhjA6QACgQgMgfg");
	this.shape_39.setTransform(52.8,5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F0FF7A").s().p("ABTDpQAAgNgNgeQgOghgOgPIASgFQANgEAFAAQAUAAAJAuQAEAYABAYQAAAIgEAFQgGAGgTAHgAEXCYQAAgQgNgaQgMgdgTgQIAbgQQAZARAMAjQAHAXABAWQAAAGgFADIgZANIACgQgAkfimQgSgXgBgjIACgcQAPALAYAaQAbAVAtAAQBOAAA8g0QAEAKAAAKQAAA4gtAaQghASgvAAQhQAAgfgog");
	this.shape_40.setTransform(44.6,-1.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC99").s().p("AhlCGQglgrAAhLQAAhSAegdQAPgOARACQATAAALAJQAbAVAAA9QAAAYgIAaQgLAogZAAQglAAgCgtIABghQAAgRgFgFQgOArAAAJQAABCA1AAQAwAAAEgnQAHAIATAKQAWAJAKAAQAaAAAKgIIALgQQhfAYAAg9QAAgYAmgNQAUgIAWgBQAhAAAQATQAPASAAApQAAA5gtAiQgqAehCAAQg1ABgigngAgVhaQgRgZgRgJQAXgWATgDIASgCQANgBAAAGQAUARAAADIAHAxQAAAagHAHIgnAcQABgogVgigAA8gtIACgNIABgUQAAgggOgZQgLgUgPgIIAAgBQAWgIALABQAFgBALAGQARAIANAOIAAAAIAKAVQAFANAAANQAAAagHAQQgFANgGAAQgUgDgTAAg");
	this.shape_41.setTransform(26.7,-40);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#72EBEB").s().p("AAHARQhJhKgogVIAggKQAkgLAZgKQAZgLAPACQAJABAKAIIAkAfQAZAWAAAHQAAAegIA1QgHAyACAkQgNgehKhJg");
	this.shape_42.setTransform(62,19.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8089DD").s().p("ABqEcQg/gjgrgqQhghfiSkvIBJgDQATAABDA0QBAAyAdAkQAZAdAiAsQAeAnAMAMQANAOA7CFIA8CKQhigwgngVgABuj+QgWgVgEgCICBhLIhMB+QgDgGgYgWg");
	this.shape_43.setTransform(60.5,32.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC99").s().p("AAKF0Qgsgjg1gzIhIhIQhEhNhAhvQh/jaAAi6QAAgsAHgbQAGgYAIAAQAaAAAmA7QAiA2AAAVQAAAJA8BcQA3BUAbAlQAbAlAnAmIAlAjQA2BCA8AuQAdAXAYAMIABAAQgVgUgOgMQgEgDBCAsIBPAyQAFADAtAMQAtANANALQAPAOAjArQApAxAAALQAAA9gnAfQgjAbhAAAQiFAAiKhmg");
	this.shape_44.setTransform(57.4,52.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F0FF7A").s().p("ACxEgQhCgghVhHIhnhqQgpgohEhfIhDheIgdg3IgZguIAxgMQAKAAAMAEQAVAhCADdQBEB0AwArQA9A2BtBAQBjA5AGAJIAEAGQhbglgogTgAAAi8Qg4g2hAgaQBUgFBhByQAkArAbAuQAYAqABARQhbh5g6g4gAB5knQgdgegEgCIgJgFIAIgGQAJgFAGAAQAKAAAvA+IgGAUQgDgEgdgeg");
	this.shape_45.setTransform(57.7,39.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFCC99").s().p("AhZBfQg0gvAAg/QAAhQAugdQAXgPAeAAQAdAAASAXIgKAKIgCACIgegCIgJADQA1AZANAEQAQAFAVABQAGgBABgBIACgEQgegIgggLIABgBQACABAEgDQACgCAAAFQABgHALgEQALgFARAAQAfABAbATQAeAWAAAeIABAHQgDACgJASIgvAaIARABIANgEIAUgIQAHARAAAIQAAAegbAOIg5AdIABABQAEAEADABIAPgBIAYgDQgHASgdAJQgWAIgcgBQg6AAgwgsg");
	this.shape_46.setTransform(140.6,89.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8089DD").s().p("AAbE/Qh5h1gZgzQALglAagcQATgUArgdQAWAlBbBNQBmBXBMAmQgzAjgNAwQgIAdADBHQgzgVh8h3gAkJjkQgCgngCAAQgFgkAPg5QAThEAjgeQgDAhAQBeIARBZQgGACgnAYQglAXgFAEIgDgng");
	this.shape_47.setTransform(97.4,45.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F0FF7A").s().p("ADMFVQgTgSACgaQAGgegCgRQALg3AIgNQALgRArgXIAYAIQg0A0AABLQAAAsAVAlIAIALQglgHgYgVgAi+g1QAIgfA2gnQA5goAIArQglALghAlQgdAggFAWgAkVk+QAJgNAUgQIAPgIIAggOIAIAYQgYAIgMAGQgSALgnAnQgDgSAMgTg");
	this.shape_48.setTransform(100.7,60.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#72EBEB").s().p("Ag9AfQgRglgMgzQALgHAjgeQAbgZATgFQABAHAdA5QAhA/AbAgQgUADghAZQglAdgPAhQghg7gPgjg");
	this.shape_49.setTransform(81.7,40.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#72EBEB").s().p("Ag2gyQAWgVApAAIAfACQAAAgAFAiIAOA7QgdgJgSAAQgvABgWAYg");
	this.shape_50.setTransform(69.5,31);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0FF7A").s().p("ADECJQgZglAAg6QAAgNAFgEQADgCAmgTQgKAVAAAPQAAAxAXAcQARATALAAQAKAAAeARQgJAHgTAGIgSAEQggAAgYghgAkNAdQAUgIAYABQAVAAAPAHQAXAKAEAXQgcgGgPAAQg7AAgdAfQgQgrAogPgAkQilQAKgEA7AAIACAgQgNgDgKAAQgJAAgUAEQgWAEgQAGQACggARgHg");
	this.shape_51.setTransform(93.6,35.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFCC99").s().p("AAdBnIgJgGQA6gIAFgOQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAAAAAIgnAAQgrACgoANQgDAFgJAAQgbAAgWgVQgcgbAAguIAAgMQABgIAGgEQAHgFAIgJQAHgIgDgBQgDAAAlgcQAkgdA+gDQAgAAAYAUQARAQAGARIACAJIgugYQgNgGgHAAIgNAAIgDALQAEAFAOgDQAPgEAWAQQAWARAJALQAKANAIAXIgCADQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgCAAAAgGQAAgGgbgEQgRAAgPAAIgBgCQAAgBAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAGAcALQAbAMAAADQAAAFAFAKQAFAKAAAFQAAAUgaAOQgWANgbAAQgKAAgPgGg");
	this.shape_52.setTransform(129.9,39.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8089DD").s().p("AiEE0QghgHgXgRQgXgQgRgTQgbgeAAgcQAAgHARgJIAdgNIANgDQAOgDAGAAQAXAAAdAJIABABIgtAQIAEAFQAFADACAAQBMgBEBg4QACAZAYAtQAeA4AYADQhpAhgoAJQg9AOhAAAQhLAAgrgKgAiRgtQgChtAAhNIAAgBIgCgBQAAACAAABQAAABgBAAQAAABAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQgBAEgLBxQAAABgQgCIgXgCQgIAAgcAIQAUg1AMgXQATgiAmglQAUgUAdgUQAPgLABgNIALAGQACAEAAAKQAAAMgSA4QgbBXgYBhg");
	this.shape_53.setTransform(90.3,28);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#72EBEB").s().p("AhFA+IA0h7IAngCQASAAAeAIQgDAMhDBqQgegFgnAEg");
	this.shape_54.setTransform(68,19);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F0FF7A").s().p("AixBvQgEgFAGgOIA8gBIgWAbIgKAAQgYAAgGgHgAAJAUQgKgMgHgNQgFgKAAgDQAAgUAGgNQAGgPARgPQAMAxAWAWQAaAZAzAAQASAAAfgIIAEgEQgSA5gqAAQhJAAgmgogAhqhMQAEgrAsACQAcABAdAOQgMATgIAOQgogJgtACg");
	this.shape_55.setTransform(78,18.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFCC99").s().p("AhZB7QgegbAAg2QAAg/ASgQQATgQADgJQAEgJAFgEQAFgEAUgGQAOgEAJAAQApAAARAQQAOANAAAcQAAANgRAiIgSAiQAAAGgCgBQgFgDgEAAQgdAAgMgHQgLgGAAgPQAAgMAjgqQADADAAgKQAAgGgBgBIgCgBIgGgCQgSAEgRAeQgOAXAAAOQAAAaAWAOQAQALAQAAIATABQAOgBAAgGIALgIIAQgLIAGAHQAFAEAKAFQAFAPgQAPQgPAOgFAHQgFAHgKAIIgMAKQgJAHgNAAQgxAAgbgZgABJAtQgQgEAAgNQAAgEAPgNQAPgMAPgKIABAAQAJALAAAKQAAARgHALQgGAJgJAAIgDAAQgIAAgGgCgABGgeQAAgmgLgOQgSgVg5gGIAJAAQAHAAAAgHQAAgJAbABQAbAAAXAJQAHAFAHAMQAJAPAAAMQAAAlgfAagABgh7QgagYgcAFIAKgCQANgDAGAAQAWAAAPAQQAOAPgCARQAAAHgDAGQADgOgYgXg");
	this.shape_56.setTransform(93.4,2.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8089DD").s().p("AiWDlQgLgWAAgcQAAgRAKgtIAHgLQAMgKAXgBQgeAegIAXQADAHALAAQAGAAALgOIAYggIA0hAQAYggAkg8QAKATAGAHQANAQAUAMQAQAKApAJQAUAFAQADQhiCHhgA5QgfARgcAIIgWAEQgXAAgOgagAgai2QAyg7ASgHQADgCAIABQAHAAAHgFIAUAAQgFAIgBAGQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAQgIAAgFAdQgFAZAAATQg4gZgdAIg");
	this.shape_57.setTransform(73.3,22.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#72EBEB").s().p("AgfA4QgigkgdgQIAdgaQAggfARgTQARgUAOgCQAKgCANAIQArAiAOAfIg8BRIgjAlQgCgIgdgfg");
	this.shape_58.setTransform(73.7,18.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8089DD").s().p("Ai0CcQgqhLgzjeQASARBAADQA6AEAcgJQABBIAKBBQAOBbAYAjIABgCQAAgsgIgcQAMgLAMAJQAFAEAhAkQAEAHAMARIARAYQhZBAglAAQg2AAggg5gACZicIABAAIALgMQANgNAfgbIAUAEQAVAEAGAAQAGAAAAgBQADgGAGgFIACAGIACAOQgBAIgFAbQgGAaAAAGQAAAFAEAFQAFAFAAAFQAAAGgDADIgHAHQgDgBgEgEIgFgFIgFADQgGADgGAOQgggogwglg");
	this.shape_59.setTransform(63.8,18.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F0FF7A").s().p("AAJBnIAHgKQAJgJAFAAQAMAAAqArIArAuIgiAbQg4hUgcgNgADTgeQgPgNgbgOIAPgSQARALAMAMQANANAnAoIgMARQgWgfgUgRgAjihlQgmgWAAgrIABghQAnBDBfACQBdADAhg6QgDA/ggAYQgaATg5ABQhEAAglgXg");
	this.shape_60.setTransform(59.3,11.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFCC99").s().p("AhgCKQgpggAAg8QAAh5AvggQAYgQAXAIQAAgKAQAWQAQAWAAAmQAAAWgKAiQgOAzgZAAQgoAAAAgoIADgiQACgcgCgDQgOAggEALQgDAKAAANQAAAZANAPQAOARAbAAQAJAAALgHQAPgJAMgRQAKAOAHAGQAPANAXAAQAaAAALgFQADgCAKgKQg9AJgUgUQgJgLAAgbQAAgPAcgLQAagLARAAQBFAAAAA+QAAA2geAiQgjAohAAAQhDAAgmgfgAgFheQgNgbgQgKQAagRARgDQAGABAOgBQAMABAAAGQARALABAKQACARAAAbQAAAVgJALQgMAPgkAOQAGgogPgkgABWgjIgQgEQADgJADgTQACgRAAgJQAAgggCgJQgGgSgVgIIAAgBQAlgRAbAcQAWAYAAAiQAAAPgGAUQgIAagMAAQgGAAgRgEg");
	this.shape_61.setTransform(46.2,-20.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#72EBEB").s().p("AgkAqQgtg2gUgJIAhgZQAogfAfgbQAFAEAaAcQAiAnAjAtIhhBdQgCgKgog1g");
	this.shape_62.setTransform(70.9,16.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F0FF7A").s().p("ACNBkQgdgig9gsIAtgcQAlAVAkAsIAsA7QgWATgVAQQgGgZgXgcgAEfhEQgkgrgLgIIAagZQAkAlAdArQApA+giAAQgWgfgdgjgAk1goQgcgSgLggIgFgMQARAWAiAJQAWAHAWAAQAsAAAhgQQAtgXAKgxQADAIANA1QAAAPhFAqQgUALgtAAQgmAAgbgRg");
	this.shape_63.setTransform(48.8,16.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8089DD").s().p("AixCYQhdhDhchvQAZAGAbAAQBDAAA/hEQASAvA9BAQA2A6AQAFIAEgCIAFgDIgrgvIATgTQA/AoAgAsQAWAeABAUQAAADglAXQgjAWgLAEQgcAJgPAAQgrAAhQg6gAFhg6IgLgNIgCgCIgCgCIABgBIgFgJIgIgIIgiAjIglg8QgYgkgcgZQAUgUAwgKQAZAUAgAzQAiA2ABAbIgDABQgFAAgCgCg");
	this.shape_64.setTransform(56.8,18.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC99").s().p("AhFCcQgVgQgOgQQgCAAgMghQgMggAAgGQAAhBARg3QASg2AagPIAKgHQgMAagKAgQgPAzAAAtQAAAGACACIAFACIAEAAQARhjAgg5QAeg0AfAAQAcAAAEASQggAogPAqQgOAuAAA8IADAbQABAAADAEQAIhXAcg/QAchCAiAAQATAAAHASIAEASQgeCKAAAhQABAZADAXIADAYQAAArgrAUQgbAMgbAAQgnAAgpggg");
	this.shape_65.setTransform(23,-11.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F0FF7A").s().p("AB8BiQgggdgUgGIgFgCQAKghAYAQQAOAIAZAWIAdAlQASAYAAAHQAAAKgQAJQgNgfgigggAkkAPQgWgTgDgeIAMAFIAfAFIAeADQAsAAAjgYQApgZAAgrIgFgwIAQAaIAJARQAAA9guArQguArhIAAQgHAAgRgOgAEEhAQgggcgfgJIAUgfQAjAMAYAUQAYAUASAeIgTAgQgMgXgbgXg");
	this.shape_66.setTransform(44.9,18.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8089DD").s().p("AifDBQg2gmhjhvQAmAAAugoQAugmAHgmQAoA/A0A/QAbAhAbAdQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAGAAQADAAABAAQACAAAAAAQABAAgBAAQgBAAgBgBIAAgpQAaAGAdAmQAhApAAAOQgeAhgSAHQgHAEgdAFIgfAEQg8AAg3glgADFh/QgegWgUgFQAWgeATgPQAggaAiAAQAFAAAQAEQAQAEAFAAQAEAAAEgFIAFgHQAIARgJArQgGAdgKAcIgFgHQgCgEgGgEIgHAFIgaAvQgNgagkgag");
	this.shape_67.setTransform(53.3,18.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFCC99").s().p("AhFClQg+goAAhAQAAhHARg6QAWhHAngFIgJAQQgIARgMA5QgLA2AAAQQAAAGACABIADABQAahgAQgnQAhhPAmAAQAPAAAJAGQAEADAHAKQgFAGgKARQgGAMgGAAQgKAAgOA9QgKA6AAAkQAAAKABANIAAgFQAAgQAOg1QAPg4ALgWQAVgnAKgJQAIgHAbgIIAAAAQAKAAAHAIQAHAHAAAKIAAAAQAGASgIAtQgPA7gHApIgCAVQAAANAEAfQAFAagCANQgGAphEAZIgBAAQgPAGgRAAQghAAgogag");
	this.shape_68.setTransform(19.3,-4.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFCC99").s().p("AhEB4QhHgqAAgdQAAgIAJgIQAHgHAJAAQAUAAAlAXIAsAbQAEACAIAKQAJALASALIAGgCQhJhwABgYQAAAAAAAAQAAgBgBABQAAAAgBAAQAAAAgBABQgDACgBACQgRgSgpgOQgrgOgSAGQgOgXAAgJQAAgLAGgHQAHgHAKAAQANAAA7AmQA/ApA0AJIACgDQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQgXgYgPgaQgQgZgBgLQAAgXARgLQAOgLALANQAFAEARAbQATAdAHAHQAeAeAwAnQAiAiAAA2QAAA5giAVQgbAQg8AAQg5AAhHgrgAguAoQgQgJgQgNQgUgPgVAEQgKACgKAFQgIAAgIgMQgHgKgBgOQAAgcAVAAQAPAAAdANQAlAPATAWQADADAKAWQAKAXAGAIIghgQg");
	this.shape_69.setTransform(1.9,39);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#72EBEB").s().p("AhQACQARgOAfgsQAYghAIABQAUAAAfAbQAeAZAAAOQhFBigLAOQgZg9g4gbg");
	this.shape_70.setTransform(66.4,24);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#F0FF7A").s().p("AklDqIgJgBIgKgEQAbABAYgcQAZggAAgtQAAgigHgSQgHgWgZgeQAegFATAPQAMAJABAJQAMApAAAQQAABCgUAeQgUAhgrAAIgJgBgACMgXQgZgZgggJIAYgTQAWAAAiAmQAfAkAAAOQAAAKgWAOQgHgigZgZgAEQivQgbgXgZgFIATgeIABgBQAZAJAQAQQATASANAgIgLATQgHgPgXgUg");
	this.shape_71.setTransform(45.6,33.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgBgOIADAHQABAFgEARIAAgdg");
	this.shape_72.setTransform(84.2,4.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8089DD").s().p("AkYDtQAFgUAAgoQAAgNgDgPIgIghQAWgEBAgRQA+gRAMgFQAxgUAfgUQAFgDAbAEQAXAMAMALQAOANAQAbQAJAQAAAKQAAAbivBgQg6AYgkAJQggAIg8AGIgFABQAVglAFgUgADLiaQgRgRgcgMQAig2AagVQAigcA3gHQAAAEgIAYIgKAgIgBAfIABAtQgBADgGACIgEgPIABgEQgEgbABgTIgBgBQgTAkgGAUQgGAUgIAPIAAABIgGAMQgNgagOgOg");
	this.shape_73.setTransform(55.1,26.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFCC99").s().p("AgaB1IgXgLQgMgFgMgCQgZgGgZgEQgeABgeAAQgIgBgHgDQgFgBgDgDQgLgNAJgNIAGgGQAFgEAGgCIAVgKIAMgDQAkgEAkAMIgJATIgCAFIAigZQAegWAdgLIAMgFIAMgCIgOgHIgDgCQgPgKgPgLIgqgcIgcgTQgIgGABgIIADgaIgBgBQAMgIAOgBIAXAFQAZAHAVAKIAKAGQAMAGALAIQAYAPATAVIAQATQAPAXAGAWIgXAcIAFACIATgJIAngPIADgBIATgEIAGgBQAMACALAGQASALgCAXIgDADQgOAQgYADIAAgBIgVAEIgYAEIgPAEIgNAEQgGACgEADQgMALgQAKQgOAHgPAEIgOABQgWAAgWgNgAhWAPQgTgPgYgGIglgLIAAAAIgLgHIgLgGIAAAAIgEgKQgCgIAGgKQAGgJALgDIAQgBQAbAAAXAMQAkASAgAXQANAJAKAJIgJABQgXAKgYAQIgQgMg");
	this.shape_74.setTransform(0.6,50.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#72EBEB").s().p("AhAANQgKgNgJgHQBAgeBEgZIAAAAIABAAIABAAQAOAQAJASIABAAQAFALAEAWQg/Aag4AgQgKgagTgYg");
	this.shape_75.setTransform(52.2,14.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F0FF7A").s().p("AjrDAQgMgWgQgSQgPgRgRgPIABAAIABAAIACAAIAAAAQAPABAXAVQAUASANASIAAAAQAMAQAHAXIgTAEQgHgPgIgOgABChQIAAAAQgPgYgLgMIAAgBIAAAAIAAAAIgGgGIAggQQAKAJAMAQQASAXAJAaIgfATQgHgQgLgSgAEJi0IAAgBQgIgQgNgPIAXgIIAIANIAAABQANAUAGAZIACAJIgUAIQgEgYgHgMg");
	this.shape_76.setTransform(35.1,28.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8089DD").s().p("AkyDTIAAAAQgOgUgWgTQgTgSgQgHIAOgNIAKgLQBvhwCRhJIAIgEIACABIABABIAAAAIAIAIIAAAAIAAAAIAAAAQAKALANAWIAAABQALASAIAOQiNBfhuCOQgIgUgLgQgAFqh1IgBgEIACgKIABgBIABAAIABgBIACgNIgBgEIAAgBIgBAAQgDgDgFABQhLAQhFAYIgCgHQgIgdgNgXIgBAAIgFgJQBUgbBcgVIABAAIAAAAIABgBIAAgBIgBgNIAAgBIABAAIABAAIABgBIAAgBQAIAEACAPQABAKgCALIAEBDQgCAbgIAAQgEAAgCgEg");
	this.shape_77.setTransform(45.4,24.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#72EBEB").s().p("AhDAdQAHgVAAgGQAAgEgFgSQgEgTgEgIIAfACIArgFIAtgFQAEAAAPAiQAQAjgGARQgDALgkAGQghAFhPADQAEgIAFgTg");
	this.shape_78.setTransform(55.3,18.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F0FF7A").s().p("AgWCgQAGgJAHgUQAJgZAAgPQAAgLgBgOQgDgRgDAAQAwACAAA5QAAAUgQAjQgTAAgcgDgADBArIAFgBQAegPAUAbQAQAVAAAbQAAAJgDAOIgnANQAHgggkg/gAgHAxIAAAAIAAAAgAj3icQAJgEAdgCQADAFAAALQAAAPgOAAQgjAagHADQgEgqATgMg");
	this.shape_79.setTransform(42.8,8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8089DD").s().p("AknBRQhCgqghgjQAbgSgEghQgJglACgSIARgHQAGgDAcgWQAbA/BOA4QAmAaAjAQQAGAAACAQIAAAYQAAANgHAaQgIAdgHAAQgwAAhUg2gACoBSQgCgNgLgdQgNgggLgEIgBgBQAtgPAfgQQAdgOAsgdIgBgEQgCgEAAgGQAAgGADgBIACgBIAJgBQAfAAAmAbQAqAfgHAjQABAIgCAEQgCAFgHAAQgKAAgHgSIACgCIgDgVIgCgBQgIAEg6AoIg7AqQgwAagMAGQgGACgDAAQgHAAAFgMg");
	this.shape_80.setTransform(54.7,10.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFCC99").s().p("AgCCNQgQgogaiXIgCAAQgBAAgDANQgDANAAAHIADA2QADAwADAAQgbACgOgPQgYgYgMhLIgCAAQgBAAgDAPQgDAOAAAGQAAANACARQADAVAEAAQgVABgKgOQgKgOAAggQAAhGA+gzQA0gsAwAAQAGAAAcAUQAwAiAQALQAUAKASABIAXAAQAEAOAAAKQAAAWgQAGQgMAFgoAAQgHAAgNgMQgNgNgLgTIgCACQABAqAFA+QAFA7AAAVQAAAjgKAMQgIAJgSAAQgTAAgHgZg");
	this.shape_81.setTransform(8.8,-7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#72EBEB").s().p("AhegEIgigqQAcgGAogUQAygYAPgYQA8BWBABKQgRAigZAUQgYASgmAJg");
	this.shape_82.setTransform(48.8,-20);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8089DD").s().p("AFZIeIACAAQABgBAAgHQAAgFgCgCIgEgCIjfikQASgHAdgXQAigbALgaQAEAJBOA/QBKA8gBAAIAAAAIAAAAQAEgBADgKQADgKgCgCIAHgLIAGAdIAAACQAGgRADgCIABgBQADABADAKQAEAKAAAHQAAAOgFANIgdBBQgFALgDAQQgEAMgOAAgAkVh6QhnjKgajdQBHAfA9AAQApABAVgLQALBLAxCOQA6CnA5BcQgfAfgUAPQgyAjgoAAQgvg3g0hkg");
	this.shape_83.setTransform(47.4,-36.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#F0FF7A").s().p("AC3HeQAXgEAggXQAlgbAJgcIAhAiQgXAyhIAhgAgnDgQAZgCApgXQAygaAUggIAgA1QgxA1hWAWgAjEl5Qg8gKgNgJQgOgKgIgIQgJgHgIgNQgIgMAAgIQAAgPAEgqQAPAaAlAaIAhAWQAAADAZAFIAaADQAZAAAcgLQApgPAKghQAGAWAAANQAAA2gZASQgOAIgfABQgdgEgfgEg");
	this.shape_84.setTransform(35,-53.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC99").s().p("Ah6COQghgxAAg/QAAgKAFgUIAAgBIAIgRIgEArIACATIADAPIACABQAEgGAJgrQALgvAWg6QAVg1AfgeQAYgYAQAAQAJAAAFALQAEAHABAGQgBAPgEAGQgMAOgNAlQgGASgXAgIgVAcQAAAGgPArQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQAGgCA3hVQAUggAhgUQAZgPANAAQARAAALAHQAKAIAAALQgFAQgSAOQgdAVgXAeQgaAggOAnQAAAEADABIAvg2QAtg1AKAAQAFAAAFgEQAFgEAFgBQARABAHAKQAGAIAAAKQAAAJgbAjQggAtgPA8QgIAhgZAZQgeAcggAAQhGAAgng8g");
	this.shape_85.setTransform(19,-119.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#72EBEB").s().p("AgmAoQhCg2AFgEIAYgPQAHgFAVgZIAZgfIB6BxIgIAVIgIAPQgDAAgOAPQgQAQgYAJQgggbghgcg");
	this.shape_86.setTransform(54.8,-12.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8089DD").s().p("AF1GuIANgTQgCgDikhuQAHgEAagdQAbgdAGgMQCgB+ADABIARgMIADAAQAHANguArIgxAqIgIgHgAj5huQiYidhEhZQAjgFAvgSQBBgYAdghQA5BeBXBzQBjCDBYBbQgQAegWAVQgRASgiATQhFg+iBiDg");
	this.shape_87.setTransform(42.3,-27.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F0FF7A").s().p("AFGGTQAcgKAQgTQALgNAPghQATAGAAAKQAAADADAHQABACgGAAQgBAAgNAUIgOAWQgGALgKAFQgGADgHAAQgNAAgRgOgACAD6IgJgMQA3gbAhg9IAbAbIgpAuQgjAmgNAAQgGAAgLgLgAltj7QgVgNgXgvIgIgSQAaAJAAAHQAAABAAABQAAAAABABQAAAAAAABQAAAAABAAQAGAAAhgJIAggJQA9gNAjgVQAhgUADgYIgJACIAHgNQAUAdAaAxQgkAwhCAbQgxAUgfAAQgdAAgMgIg");
	this.shape_88.setTransform(27.2,-41.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC99").s().p("AiQBpQhjhnAAgfQAAgPAKgHQAGgEAFAAQAKAAAAAEQAFADA0A0QA1A0AEAGIgIASQgGADAKAAQAGAAATgRIAxgqQAQgLAQgJIAWgGQAUgIARgMIgDgIQgDgBglAGQgqhcgLglIgCgWIACgdIACgCQABgDAGAAQAFAAAIAEQAJADACAFIB2DZQgbAfAAANIAAAHIACAFIACACQAWgSADgLQACgIAWgNQAQgKAcgHIAXgGQAOAAAKAIQAMAJgDAQQgCARgbATQggAWgOAMQgFAFgNAYQgMAYgJAIQgJAJgfAMQgZAKgOADQghAJgNAAQguAAhnhqgAhtgaIgigxQgbgpAAgpQAAgQAJgHQAIgHANAAQAGAAAJAJIAOARQAGAIANAZIA+B9IgqAgQgFgKgggtg");
	this.shape_89.setTransform(-9.8,-96.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#72EBEB").s().p("AhXAPQARgIAWgZQAagfAAgUIBtA6QABANgCAGQgCAGgfA4IiMg3g");
	this.shape_90.setTransform(50.4,-4.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8089DD").s().p("AGCFgIABgPQAIgIAAgKIAAgFIgCACIi3ggIAdhMICtAwQADAAAGgQIACACQACADAAAGQgCAhgFAfQgKBAgNAAQgJgPAAgMgAibBwQhBgyAGgBQgxgghLiTQhOidgIhoQAyAXA+gCQA+gBAHgKQAJBiAZBJQAOAnAeA5QACAFAlAyQAkAvAGAGQAJAJAiAbQAaAXAAAFQAAAJgTAiQgUAkgLAAQgGgBgIAJIgGAHQgLgGg7gug");
	this.shape_91.setTransform(42.4,-24);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F0FF7A").s().p("AEhGBIgJgDQAWgfAFgOQAEgLABgYIAYAKQgZBMgGABQgGgBgKgDgAA2EgQALgFASgVQAbgeAOgjQAcALAAAKQAAAPgIARQgQAggpAZgAjqkRQgYgEgOgEIgxgOQgEgGgFgSQgFgTAAgGIACgnQAWAZAhANQAcAHAJAEQAIAFAJAAIAdAAQAVgBAZgPQAQgKAnghIACBRQgEARgkAKQghAKgngBQgIAAgWgCg");
	this.shape_92.setTransform(30.4,-35.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFCC99").s().p("AiSCSQgmgpAAhfQAAgsATgQQANgLAdAAQA3AAAkA6QAaAoAAAXQAAAWgVAAQgRAAgSgJQgngUgngYIgCAEQA5A1AVAOQANAJAOAAQAcAAAMgMQAPgNAAgcIgGgXQgHgYgEgIIAyAFIgMAeQAAADADADQAEADAGAAQAKAAgGgBQAmhiBKAAQAOAAACAgQAAADgFAKQgGALgJAJQhXBIgCAJIACAHQABAGgMARQgdAmgMAJQgUARgeAAQhTAAgmgogAgrgyQgfghgngBIgGgBQAPgOAcgHQAYgGAZAAQA5AAAYAWQASASABAjQAAAHgTAHQgRAFgKAAQgnAAgfgggAgHiOQgYgJggAQQA0gfAYgJQAfgKAQAAQAvAAABAkQgBAOgUANQgQAKgGAAIhIgeg");
	this.shape_93.setTransform(14,-89.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#72EBEB").s().p("AguArQhAhAAIgEQAXgLARgNQAHgFAOgPQAWgWAHgQIBzCAQgaBCg7AVIhAhBg");
	this.shape_94.setTransform(55,-19.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8089DD").s().p("AE7GeIgBgFQACgBACgGQADgIAAgHIAAgEIgBACIiIiTQAwgfAcg2IBzCIIADABIAHgHIAIgJIAIgDIAEARQg3BHgJARQgGARgKAWgAmUklQBFgaAcgcQARgRAXgyIEsE7QghBIhDAZg");
	this.shape_95.setTransform(44.9,-26.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F0FF7A").s().p("AETFUQATgGAZgWQAfgcAKgdQAbAMgKAcQgBAEgWAjQgCACgXAQQgWAPgEABgABdCnIgFgHQAPgHAmgfQAwgmAAgUIAUAWQgOAYghAfQglAjgTgBQgGAAgHgIgAlNiwQgbgYgTgcQAPAFASAAQATgBALgEIAOgEIAbgKQAYgJANgSQAOgTAFgFQADgGAOhEQA4AjAAAqQAAA1hGAsQg5AjgkAAQgDAAgVgSg");
	this.shape_96.setTransform(31,-41.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC99").s().p("AALCkIg2gcQgdgOgPgKQgPgHg+gVIgggKQgOgFgGAAQgNAAgLgPQgKgMAAgJQAAgLAUgIQAQgIAQAAQALAAAxARQAyARAOAJQAPAKgDAKQgCAKAMAJIAGgGIAvhFIAxhBIgCgEIgeAIIhJgvQgtgegQgXQgIgLAAgGIAGgIQAJgJASAAQAJAAATAHQAVAHAOAIQALAHAVASIB7BkIgIAyQABADADABQAKgJAnhGQApg3AmA5IgoA6QgWAigCAJIgOBNIgQAUQgeArhJAAQgGAAglgTgAi7g9QgcgVAAgUQAAgIAEgFQAHgKARAAQAdAAAkATQAiARBZA6IgpAzQhug0glgdg");
	this.shape_97.setTransform(-9.9,-84.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#72EBEB").s().p("AhxAjQAfgkAOgfQAMgaAGgiIAvAXQAoATA5ARQALADAHAAQACACAAARQAAAJgKAmQgLAqgHAPg");
	this.shape_98.setTransform(51.8,3.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8089DD").s().p("AGsFYIgEgJIABAAQACAGAAgKQAAgHgCgHIgDgHIh6gSQAJgNAGgbQAKgogIglIBqAdQACgCgBgLQgBgMgCgBQAEgRASgCQgDAUAIBOQAAAugEAVQgDAQgIAMgAi1B4QgnglgXgcQgEgBgMgPQgXgegmhJIhMiWQgTg4gghOQAEACAOAKQAGAEAWABQADADANACQAYAGA9AAQAqAABOgfIANAzIA4C3QgBgFAJAXQAKAXACAEQAIAKAFANIAHARIAdAgQAUAXAAAGQAAAOgIASQgFAKgrA6QgKAJgOASQgFAIgKAAQgRAAgvgsg");
	this.shape_99.setTransform(41.7,-14.4);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#F0FF7A").s().p("AEyFcQAVgyAEgZIACgwIAyAPIADAQIACAXQABAUgJAbQgGAXgHALgAAAD5IAAAAQAkggAUgaQAaghAJgmQAbAMAAAKQAAATgNAmQgUA3ggAUgAkfkWIgwgRQgXgHgIgIQgHgJgOgnQAvAgAvgKIAsgMQAdgGAagBQAYAEAXAEQAuALAAAMQAAAFADACQADAEACAKIgEABQgJAEgaAFQgQAFAAAFQAAACgWAEQgbAFghgBQgkAAgVgFg");
	this.shape_100.setTransform(32.4,-21.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC99").s().p("ACaDVIgVgEQgXgIgUgLIgKgDQgKgEAMADIgVgNQgagQgPgGQgfgOgfAAQgaAAghAJQghAJgTAAQg5AAgXgnQgMgUAAgVQAAhtBuhcQBphYBuAAQAlAAAmAOQAyATAAAhQAAATgPANQgOANgSAAIglgFIglgFIgrADQgkAEgNACIgDAEIALASIgCABIADABQAKAABJgIQAKAAA1AKQAsAIAdAYQAaAWAAAVQAAAQgKATQgLAWgQAAQhSgOhNgVIgCgBQgBAAAAAGIgBAEIADAAQAGAAACAIIgMgBIAwASQAPAHAAACQABADAbARQAeATAIAKQAKANAGANQAEAJAAACIADATQAAAGgEAMQgEAMAAAFQAAAEgKAFQgIAEgFAAIgMgCg");
	this.shape_101.setTransform(17.4,-73.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#72EBEB").s().p("AhBAUQhDhLgVghQAOgBAsgOQA0gRAfgQQAUAfA0A5QA6A8AkAbQgVAtgXAWQgQAPglAQQgogThShig");
	this.shape_102.setTransform(43.9,-14.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8089DD").s().p("AFUIzIgBgCIACgGQgBgIgGgEIhJghIighYQARgKAXgXQAhghAMggIAxAjQAlAXAqAXQAkAVACAAQADgEABgJQACgJgCgDIAFgLQAIAYABAFQAFgSAEgEQAFAGADAKQAEAKAAAHQAAAWgRAxQgSA0gOAKgAkvhOQgdg6gciLQgiimAFh5QAiAaBKAPQBAANAQgFQAQCiAJA0QATBlA5C2Qg8A5hWAAg");
	this.shape_103.setTransform(48.1,-37.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#F0FF7A").s().p("ACgIUQAegKAhgpQAXgcAJgUIAiAbQgHAVgWAdQgbAigdANgAhvDaQAwgBApgTQAfgPAVgXIAWA3QgQAMgTAJQgkAShAALgAihmJQg2gLAAgFIgcgSQgdgSAAgJIgQgzQAAgPAJgXIAHgNQAiBHAeAWQAZATA0AAQAoAAAQgPIAegcQACALAAAKQAAA2gUATQgLALgZAAQgLAAgzgLg");
	this.shape_104.setTransform(35.8,-52.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC99").s().p("AiCCFQghgvgBgtQAAgHALgkQANgvAMgMIAGgFIgQAgQgKAWAAAKIABAGIABABIASgWQAdgmA1hBQBWhQArARIABAJQABAFABAFQAAAUgbAZQgXAUgOAKIgWAQQgKAHAHgGIgZAVQgkAfgLARIgCACQAAABAFAAIBIgsQBOgsAeAAQAXAAALAOQAJAJgBALQAAANgEACIgXAFQg1ANhRBKIACADQATgKAxgdQAtgXAdAAQAQAAAJAKQAHAJAAAGQAAAVgPAIQgnAXggAcQgvAzgRAPQgXAWghAAQgzAAgmg2g");
	this.shape_105.setTransform(26.9,-118.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#72EBEB").s().p("AhegFIghgpQAagFApgVQAwgYAQgXQA8BUBABKQgNAhgdAVQgYARglAKg");
	this.shape_106.setTransform(48.8,-19.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8089DD").s().p("AFrIcIgVgaIjPiZQATgGAcgXQAigbALgaQBIBFBIA4IAIgBIAIAAQgBATgQAoQgQAnAAAMQAAACAJAIIAJAKQAAAGgCABgAioAeIgBgHQg+hXgjhHQgthagbhXQgehcgSh1QAwAEAiAAQAdAAANgCQAfgEAggQIAfCHQAMA1AqBtQAwB7ArBHQgpAogIAGQgxAkgpAAQgGgBAAgDg");
	this.shape_107.setTransform(45.8,-36.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F0FF7A").s().p("ADTHsQgOgMgGgIIgCAAQAXgEAfgXQAlgbAKgbIAfAhQgMAUggAdQgiAhgPAAQgCAAgPgOgAgiDbQAagDAogWQAxgbAVgfIAfA0QgPARgvAbQgzAegVAAgAkrmYQgUgWgBgnIADgQQAkA1AtAAIA1gKQASgGAQgJIAMgHQALAAAKgMIAVgdQAEAOAIAkIAHAjQgBALgwARQgwAQgiAAQhBAAgbggg");
	this.shape_108.setTransform(34.5,-53.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFCC99").s().p("AgvDvQgLgBAAgHIgQgMQgSgRgLgXQgWg1gDgxQgBgOgHgNQgGgXAAhGQAAguAMgZQAMgaAVAAQAOAAAGAaIAEAfQgLA5ADARQAHAeAAAMQgSAeAAAFQAAAGABAAIAEAAQAhgkAXgQQAcgTAZgBIACAAIABgEQAAgSgXAGQAEhWAFgqQAEgfAAgQQAAgEgEgNQgFgSgGgJIASgFIABAAQAVAkAAAjQAAALgFA3IgGA2QAAAXAGAbQAIAjAAAIIAEABQADACAGAAQAHAAAHgYQAHgYACAAQACAAAPgUQASgWAOAAQAPAAAAAfQAAAOgHAWQgIAXgGAAQgDAAgLARQgMASgEANIgNBBQgGAdgkAYQgjAXgfAAIgOABIgEAAgAg0gWIAEgdIADgeQAAhMgsgMQAdgzAbgBQAYAAAAAjQgHBBgBAOIgDA2IgDArQAAAEgFADQgGADAAADQAAAGgHACIgHABg");
	this.shape_109.setTransform(15.1,-122.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgOgHIAGACIACACQApAJgjgHIgFgBIABADQAAAFgBABIgDABg");
	this.shape_110.setTransform(86.7,1.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#72EBEB").s().p("AhVAtQASgWAMgfQANgogFghQA3AaAqAOQAWAJAIALQAFAIABAKQAAAhgGAXQgHAdgQAAIiOglg");
	this.shape_111.setTransform(56.7,0.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#8089DD").s().p("AFJFiIgCgFQADgBAAgLQAAgJgBgCQgiAAgmgHIg7gNQAfhIgIgfQBKASAJAAQACgCAAgRIAAgBIAAgEIgCAAQABgJADgDQADgCADACQADADABAGQABAGgBACIAGARQALAjAJAnQAIAlAAALIAAAJQgDAGgMAAQgHAAgBgCgAjYCiQgNgKgPgQIgagcQgTgUgVgvQgSgpgHgdQgIgmgDhSIgFjOIAAAAIABADQABADBCAdQBCAcBggZQghCYAAB8IACAuQADArADAZQACAAAKAGQAEgBAGgUQATAHAFARQACAJAAAaQAAAVgQAjQgSAkgPAAQgNAAg4gvg");
	this.shape_112.setTransform(53.2,-20);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F0FF7A").s().p("ADgF8IgSgFQAUgdAMghQANgkgMgJIAoALQADAIAAAKQAAAsgOAYQgJASgJAAQgGAAgUgDgAgSE6IgUgLIgCAAQAegVAMgvQALgpgGgWQAXAMAJALQAFAGACAJQACgCAAALQAAAlgRAkQgOAggKAAQgHAAgSgKgAjskUQg5goAQg4QACAAAGgKQAPAmAzAbQAoAVAZABIA1gGQA6gMAfglIABAIQACAcgNAZQgdAyhRAAQhEAAg0glg");
	this.shape_113.setTransform(44.8,-28.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC99").s().p("AhxCDQgvgfAAgVQAAhSAyhAQArg4AlAAQAxAAAXAkQANAWAAAVQAAAFgEAOQgEAOAAAFQAAAPgTATQgSAUgSAAIgRgBQgQgCgDgDIgGgJQgEgIABgGIAGghQAHgfAFgOIgCgDQgTAPgNAcQgKAVAAANQABAXAQAQQATASAkAAQANAAAPgGIAFgGQAFgGAGAAIAQAJQAQAJAJAAQAJAAARgCQAAgEAFgEQgOgIgYgEQgPgDAAgJQAAgNAIgIQARgRAygGQACANAAAKQAAAogpAtQg1A7hSAAQgaAAgsgegABPgvQAAgkgbgdQgcgfgngEQCKgtAABtQgCANgFAOQgLAbgTALIgMAFQAFgUAAgOgACShfIgEgUQgFgUgDgGIgJgLQAQAJAIAFQAMAKAAAhQgHAngTAWIgEACQAKgJAFg2g");
	this.shape_114.setTransform(35.6,-76.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#72EBEB").s().p("Ag+AkQgagggFgEQA2goAggUIAcgUQAJgGAGgBQAMABAXAhQAXAhAAAOQAAACh0BcQgMgRgcgjg");
	this.shape_115.setTransform(60.1,16.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F0FF7A").s().p("AgREVQgggXAAgaQAAggAkgoQAggmAYAAIAbALQAeAMAJAKQgegKgmAdQgnAdAAAkQAAAHAFAUQAHAbAJAKQgQgCgYgUgAiFiRIAagXQALAJAdAmIAfAoIgWAWQgqhHghgPgABljtQgTgegVgQIAZgPQAUAOAcBEIgQALQgDgJgOgXg");
	this.shape_116.setTransform(59.8,35.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC99").s().p("AgkB6QgFgTgFg5QAAgGgbgzQgag1AAgSQAAgYAYgWQAXgUASAAQBdAAAfByQANAqgDAsQgEArgPATIACgeIACgiQAAgkgKgeQgMgigPgDIgFgBQgCgBAAAGQAAANALAeQALAbAAAfQAABCgGAMQgEAHgMACQgCACgTACQAIgWABgGQAEgQAAgZQAAglgKgiQgIgZgIgKIgHAAIgBAEIAHAmQAFAaAAAeQAAAtgLAWQgFAQgIAAQgQAAgHgbg");
	this.shape_117.setTransform(72.3,67.3);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8089DD").s().p("AjICqQgegoAAguQAAgdAWgmQAMgVAcgmQAhAWAUAZQALAOALAWQgIAIgFACIgKgBIgEACIgCACQAPAfANAQQAgAqA/AuQgbAHghAuQgYAigGAQQhYhXgXgjgABZjgIBng3IAFgMQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAdBbACAMIABAAIAAACIAAAEQAAAKgBgBIgJgRQgrAXgrAZQgahAgUgSg");
	this.shape_118.setTransform(61.7,26.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC99").s().p("AhiBZQgSgSAAgbQAAgbAjghQAmgmAnAAQBBAAgBBMQABAcgMAUQgNAWgUAAIgMgCIgEgCQAAgKAAgXIAAgcQAAgIgBgTQgEgRgCgDIgDACQgTBHACgBQAJgEAAAuQABAKgnACQgZAAgRgRgABCgnQgVggglgFIAZgCQAjAAARAUQAMAPAAAVIgBAYIgCABIgGAIIgGAIQACgfgSgbgABmhIQgOgSgjgJIgLgCQAigJAQAMQAKAIANAfIACAKIgBAJQgMgdgCgDg");
	this.shape_119.setTransform(68.2,36.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#72EBEB").s().p("AgoAWQgHgMghghIBrgxQAuAfAIAsQgBAHhkA/QgPgqgFgJg");
	this.shape_120.setTransform(53.7,15.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F0FF7A").s().p("AgHC7QgFgOgCAAQgGAAgCgNIgBgTQAAgXANghQASgtAfAAIAnAAQggAZgPARQgaAeAAAvIAHAUIAIAXIACAEQgZgCgEgRgAhehKQgKgNgbgUIAMgHQAOgHAFAAQAHAAARAWQANASAIAPQAHALAEAOQAFAPAAAHQAAAKgSADQgeg4gHgMgAAzi+IAkgQIARAcQASAgAKAYIgdAOQgFgngvgrg");
	this.shape_121.setTransform(53.6,26.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8089DD").s().p("Aj4CLQgtgjAAg0QALgbAWgZQAWgaAqgGQApgHAoBaIgfgJIgRgCQgRgBAAgCIgCADQAHAWAkAKQAZAIBSAKQgaAOgOAhQgQAoAMAuQiCg0gqgggAEZhOQgCgGgCgDIgCgBIgCggQACgCABgJQgCgBgGgBIgFgBQgzAQhgAoIgLgaQgIgTgYgmQAtgVBMgXQBNgXgUAIIAGgBIAOAdQAHASAGAYQAJAiABApg");
	this.shape_122.setTransform(57.2,20.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFCC99").s().p("Ag0B8QgRgQAAgfQAAgSAJghQgSAegHAkQgSgCgKgVQgJgRAAgUQAAgNAFgRQAGgTAJgJIAGgJQgSAMgLAOIgHAKQgGgOAAgKQAAgkA3goQAzgmAjABQAMBSAqA2QApA3ApgEQAAAYgaAMQgSAJgVAAQgFAAgHgFQgMgIgLgUIAkgWIgkAHQgIAFguAnIApgUQAGANABALQgBAUgXANQgPAJgLAAQgVAAgOgOg");
	this.shape_123.setTransform(-25.1,13);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8089DD").s().p("AGpBzQAAAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAABIgEgEIACgSQACAAAHgTIgBgBIiMgrQALgXACgUQADgUgFgZQBCATBuAoQAJgBAAgJIgBgDQAHgJAEAFQgCATgJAVQgQAmgnA2gAncAWQgRgkAAgeQAAgKADgJQCDgbA2gJQBrgRBQgBIAiAAQADAbACAbIAAA8IiqAVQgRAHgLAAQgEAAgLAEIg6ATQg4AZgLAAQgkAAgXgzg");
	this.shape_124.setTransform(37.3,1.8);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#72EBEB").s().p("AgbAvIhPgEQAGgbACgcQAAgMgBgSQgCgUgDAAQBKAJARABIBvAVQAJAeAAAKQAAAegTAYQgKAAhpgQg");
	this.shape_125.setTransform(48.2,-3.1);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F0FF7A").s().p("AlQCAQgtgKgehEQgbg7AAgeQAAgMALgOQAQgUAfAAQAMAAAEAKQAEAJAKA2QAHAmApAfQAnAeAAAFQAAAOgUAMQgUALgZAAIgIgBgAF7AFQAQgTACgaQACgTgHgcIAqAMQAHAYgEAcQgBAKgFAUIABgMQgCAKgFALgABihTQAAgtgDAAIAvACQADAjAAAKIgEBAIgsABQACgWgBgtg");
	this.shape_126.setTransform(21.3,3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCC99").s().p("AAkCuQgIgDgDgHQgFgMACgPQADgUALgVQAOgcANggIAWAFIAGgDIADgCIAAAAIABgCIgzgSQgmgOgigPQgMgGgNgFIAAAEIABADIACADIADABIgPARIgiArQgPAVgSAQQgHAIgLgDIgIgFQgHgHgDgIQgDgJACgJQADgNAHgMQARgbAagVQAqgiAnglIAhABIgMgGIgHgEIgVgHIgjgJQgLgCgJgFQgJgEgGgIQgHgJACgLQACgRAQgDQAagFAUAOIAXAOIAGADQAMAGAKACIAPACQAOgDAOABIAVACIAAAAQAzACAdAmQAXAeAAAgQAAAPgJAQQgNAYgHAUIgKATQgVAngTAoQgGANgGAJIgOAVQgGACgFAAQgIAAgIgFgAg/CXIgOgEIgHgPQACgSAFgRQAIgcARgWIAZgfIAAAAIAKgMIAsAUIg5BuQgEAGgFAFQgGAHgKAAIgIgBg");
	this.shape_127.setTransform(1.6,92.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#72EBEB").s().p("AgkAyQgfgYgdgCIBvhwQAPADAUAHIATANQAUAPAIAOIhjB9QgHgTgbgUg");
	this.shape_128.setTransform(55.9,31.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#F0FF7A").s().p("AiiFRQAAgsgmgfQgmgghAgDIgOAAQgKABgKgBQAOgXAUgTQAEgGADgCQAFgDAdAAQA1AAA2AvQA0AuAAAnQAAABgZAYQgaAYgKAHgAB0h/QgjgYgdAAIAHgLQAJgLAGAAIAaAGQAaAGAHAEIAgAXQAXAaggAUQgKgSgegVgAEXk1QgZgUgWgEQASglAlANQAhALARAgIgdAkQgGgNgXgSg");
	this.shape_129.setTransform(36.4,54);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8089DD").s().p("AkDFnQgmgeg4gPQCqi2BghjQBLgNAkBHIjtE/QgPgcgfgXgADRjPQgSgLgWgHICpikIAFgLQABgFgBgBIAFgDQAAAdAGBdQAAAHgDAHQgDAHgCAAIABgCIgBgRIgBgCQgCgCgGAAQgGAAgBABIgCAEIhbBtQgHgRgVgPg");
	this.shape_130.setTransform(48,38);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFCC99").s().p("AhUC0QgGgLgBgPQAAgLALgGQAGgEAUgHQAigNAhgQQAegOAFgEQgtgXgTgZQgTgUgDgBIgEABIAFANQgyABgxAOIgtAPQgIAAgJgLQgKgLAAgIQAAgVAagJQAggNBPgDQAfgDApgfQAlgbAHgRQAAgCgJAGQgLAHgFAAQgXAAgOgfQgIgPgCgQQAAgTAJgNQAGgKAFAAQAQABARAQQARAUAGAHQAMAKATAKQAUAKASAGQAZAGAbAYQAnAiAAArQAAAUgdAtQgkA4g0AYIg9AeQg1AZgigBQgTAAgJgNgAixB5QgMgMABgTQAAgPBPgTQBFgRAPAAQAFABARAPIAWAUQhCAagrAZQgTAKgZAAQgdAAgOgPg");
	this.shape_131.setTransform(-34.4,-28.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape_132.setTransform(108.4,17.1);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#72EBEB").s().p("AgOA7QhLgXAFgJQAIgPAFgNQAJghAAgvICSA0IABAdQAAARgIAYIgQApQgngKgkgNg");
	this.shape_133.setTransform(53.7,-4.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8089DD").s().p("AEDCWQAJgOAIgeQAJgkgFgaICxA+QACAAADgGQAhA1AJAZIANAngAoEgzQAgg+AGgeQAEgNADg8IGrCVQADAQAAAKQAAAhgKAYQgGARgTAdg");
	this.shape_134.setTransform(42.9,-9.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F0FF7A").s().p("AGBDGQAOgWAGgnQAHgfgDgSIAqAPIACAVQgLBCgLAVgACMCGQANgPALgmQAOgsgHggIAsAPIABAZQAAAfgJAaQgFAOgQAegAmjAYQgVgFgMgGQBNhDASguQAWg0gngwIgIgKQAaAFAYAKQATAIAAACQAOAZAAALQAABYghA0QgZAlgXAAQgRAAgWgEg");
	this.shape_135.setTransform(23.5,-16);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFCC99").s().p("AgiAlQgcgcgOgYIgCAAQgBABAAAHQAAASAQARIALAPQgMgFgMgLQgXgUgZgrQATAAAXgHIAwgPQAHgCAHAAIAjgFIAlgFQACAAAaAMQAbANAEAEQAIAIADAIIgGAHQgKAGgWAAIgmgnIgCAAIgCADQgCAEAAAGQAZAkAAACQAAAAANADQAQAHAQARQAHAIAEAJQAEAHAAACQAAAKgJADQgGgCgYgCQgSgBAAgHQAAgBgUgQQgYgRgJgOQgUgdgHgHIgDADQgCAeAiAdIAdAaQgQANgNAAQgSAAghgig");
	this.shape_136.setTransform(49.2,85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F0FF7A").s().p("AixFaQgHgIgWgoQBSghAxAAQAlAAARAXQAIAKAIAfQgiACg7ANIg3ANQgPAAgJgLgAgOivQgagZgLgBQAVgpAkAkQAUASARAeIggAbQABgRgagbgACkkyQgIgKgagZIAZgPQAiAcAKASQAIAOAAAUQAAAKgXADQgHgYgNgTg");
	this.shape_137.setTransform(53.5,43.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#72EBEB").s().p("AgvAtQgLgLgfgWIBZhFIAkgYQAnAkAIARQAEAKADARIgoAYIhJA7QgLgXgNgOg");
	this.shape_138.setTransform(61.5,18.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AABAAIgGAAQAHgBAEABIgFABIAAgBg");
	this.shape_139.setTransform(84.7,-2.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8089DD").s().p("AkHEBIAHg1QASh1AuhoQAMgWAPgXQAPgTANgHQAlgSAhBMIgPANIgDgaIgBgBQgCACgMAfIgOAqQgEAVgIBBQgHA9AAAMIAECQQgTAAgiAGQg0AKgkAMQADg6AEgvgACCjxQgVgagLgFICEhKIAAgGIgCAAIABgJIAGAAIAIAAIgBACIAAALQAAAQANAoIAOAvIACAIIAAAEQgCACgEgBQgDAAgCgDIABgBQAAgBAAAAQAAgBAAAAQABgBAAgBQAAAAABgBQAAgBgFAAQgHAAgNAHQgNAGAAABQgZALgvAZQABgRgYggg");
	this.shape_140.setTransform(60.5,34.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFCC99").s().p("AgSB1QhEg9AAhlQAAgjANgeQAMgaAJAAQAXAAAJAOQAHALAFAeQANBVAdAyIAKAIIABgBIABgBIgMg2QgLgwgEgIQAUAPAgANIA0AUQA3AWAAAqQAAAjgfAdQgiAhg2AAQggAAgtgqgAhsAkQgcgzAAhAQAAgWAKgYQALgcANAAIATACIAHAGQgRAJgJAiQgHAaAAAcQAABCAbAxIAKARQgTgPgRghgAiXiZIAKgEIALgBQgOAPgHAWQgHAVAAAVQAOBQADAMQhDhjA5hDg");
	this.shape_141.setTransform(-24.5,-29.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#72EBEB").s().p("AhWA1QAIgQAHgbQAJgqgLgbQCIATAGALQAPAhADA4g");
	this.shape_142.setTransform(47.5,2.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8089DD").s().p("AGuCAQAEgBAAgUIgBgEIAAADIhCAKIg1AEQg0AFAAACIABgRQAAgLgEgUQgFgcgIgQQCRAAA4gFQAKAMgDAoQgCAhgEAKIgGAPQgBACgEACQgGgBgBgPgAEGB/IAAAAIAAAAgAjhBOQgZgHgZgKQgQgGgFAAQgHAAgYgLIgogSQgfgPg3gcQAUgKAVgVQAogpAJg2QAhAVAkAUIAlAUQBDAoAzAIQA8ALAQAQQALAJAAAdQAAARgCAKQgGAagSAcQhXgQg8gSg");
	this.shape_143.setTransform(38.3,-4.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#F0FF7A").s().p("AF2CuQABgUgDgYQgFghgMgUQAkgNAOAjQAIATACAcIAAAcgACEClIgNgCQAMgNAIgjQAJgpgJgfQAaAHADAJQAGAfAAAKQgBARgDASQgGAggLAAIgVgCgAlxAGQgIgDglgYIAUADQBEgIAmghQAhgdAAgoIgCgWQgCgPgDgIQAkAJAMASQAGAJAAASQAAAqghAtQglAwgwAAQgZAAgSgKg");
	this.shape_144.setTransform(20.9,-9.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFCC99").s().p("AhMBkQgZgXAAgXQAGgdATgTQAXgUALgDQAGgBABACQAAgGAHABIAOACQASAAAWATQAWAUAAAWQAAAbgmAEIg4gDIgIgBQgHACgCADQAIAIARAKQAAAJAkAAQAmAAAUgYQAOgRAAgUQAAgFgEgNQgEgNAAgFQAAgEAHgHQAIgJACgFQAFgLAAgKIgBgKQgBgDgHAAQgBAAgFgGQgFgHgCgIQgKAAgCACQAGANAGAYQAAAFgLAQIghgqQgSgZAGgaQA9AHAnAjQAiAeAAAiQAAA/gpAjQglAgg9AAQgvAAgegbgAiBAGQAAgyA9gYQAZgKAVAGQAWAGAGAZQgEgCgIAAQgbAAgbANQgmAUgWArQgJgRAAgKgAiLgoQAAgvAigYQAWgPATAAQAKAAAMAIQAKAHADAEIAKAMQgPgFgKAAQgWAAgXALQglASgMAoIAAAAQgBAAAAgJg");
	this.shape_145.setTransform(5.6,77.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#72EBEB").s().p("AglArQgogWgPgEQASgUAngzQAaghAGAAQAegBBDA6QgmA7gpA7QgMgTgogag");
	this.shape_146.setTransform(65,33.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F0FF7A").s().p("AkEFFIAAgGIAchDQADgHgCgMQgDgogWgfQgXgggjgIQAKgGANgEQAPgFAJAAQAZAAAWArQAUApAAAnQAAAFgRAjQgUArgQAQIgNAIIAGgMgACIhfQgcgUgwgYIAagcIAEABQAdAMAcARQApAXALAUIgYAfIgngggADPk4IASgYIAwAdQAZAQARAMIgNAZQgwgvgvgLg");
	this.shape_147.setTransform(45.3,54.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#8089DD").s().p("AkXGDQAAghgTgvQgRgsgNgNQApgYBQg/QBehKA3g7QAVAGAlAaQAmAYAVAUQgoAxgoAuIgDACQgqArhGA8QhbBNg6AkQAGgRAAgPgACHjIICBjLIgCgKIAAgFIAHAEQAZAfATBMQAQA8AAAXQAAALgKACQgFgFgFgKQgGgPgCgPIACgEQgFgjgCAAIgTAnQgUAvgiBAQhJgvgPgIg");
	this.shape_148.setTransform(55.6,38.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFCC99").s().p("AipBIQADgNAXgsQA2g3BagcQAygPBIgRQAFA3AXAgQAUAbAAALQAAALgUAGQgOAEgNAAQgcAAgJgKQgQgbgZgfQAGgIAAgHIgOgCQgegHg0BHQg6BMghAAQgmAAAEgdgAgPATIAUAfQgGAbg8AJgAioAAQAGgJAdgZQAcgYAogQIgjAGQgBgBgdAFQAKgKAGgEIAGgCIACgIQAEgIAGAAQADAAAaAMQAYALAMgEQgSAGg7AlQg1AggJAGg");
	this.shape_149.setTransform(35.6,86.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#72EBEB").s().p("AhTAJIBnhTQA0AZAMAhIhnBbQgzg6gNgIg");
	this.shape_150.setTransform(62.9,18.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F0FF7A").s().p("AjfFOQgUgHAAgFQAAgPAJgXIBYAMIA8gIQA+gIARgFIAHAvQgCAEABABIgFAAIg4AJQg1AKgTgBQg7ABgegMgAAmiZQgVgXgSgKIAfgeQAbAMAEADQANALAXAoQARgPgxAxQgKgTgRgSgADFkpQgXgSgNgGIAcgYIAcAhIAbAhIgPAMQgHgMgZgSg");
	this.shape_151.setTransform(49.9,42.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#8089DD").s().p("AkfFfQAvjUA0hhQAYgqBMhXQAEAAAZAZQAdAcAKASIgrAnIgGgBQgKAAgGAjQgLBEgJDcQhUALgKAAIhYgFgACgjuQgVgWgLgGIB/hQQABgEAAgFQADAFALAwIANA1QAFAUAAAGQAAAKgCADQgEAAgGgNIgHgOQACgBADgGQACgHgBgFIgJgBIgGABIhLA1QgFgMgUgXg");
	this.shape_152.setTransform(57.3,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_16},{t:this.shape_18},{t:this.shape_14}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_14},{t:this.shape_24}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_31},{t:this.shape_35}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_31}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136}]},1).to({state:[{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149}]},1).wait(1));

	// Layer 10
	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AAuHwQgWgGgGgFQgMgIgkgrQgjgogBAAQgKAAgGgCQgLgEgPgOQgEgDgQgcQgRgbgCgFIAMgeQg5hWgehfQgahRAAg7QAAgnANgeQAXg0BFhNIAvgwQAxgvBVhNQAggaAggYQASgLAbgSQAUgNAGAAIAJABIABANIgBACQASAQAUAbQAQAXAIAPQACAAACAGIABAGQh1BmgHAFQgRANjVD1QBmDHA0AkQAsAcAAAhQAAAKgFADQgEAEgOAFQBcBNAAAyQgEA3gPgDQgHAKgOAIQgaAQgTAAQgIAAgXgHgAD5mJIAAABIgiAiIAigjg");
	this.shape_153.setTransform(65.9,46.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhRHIQgPgDgMgEIAAAAIgFgCQgOAEgOgCIAAAAIgCAAIAAAAIgBgBIgBAAIAAAAQgcgFgWgRIgJAMIgDAEIgBAAQgCABgEAAQgVgDgTgFQgMgCgIgRIAAAAQgIgPgCgPQgCgPAAgdQAAgeAMgmQAKgiAMgZIgCgEIABAAQgMgZATgfIARhGIAbhYQAKgjASghQATglAZgiIBGhRIAAAAIABgBIABgCIBxhoIACgBIAAAAIAlgcIACgCIByhZIAAAAQAEgDAEAAIAFADIAAgGQARABAaAvQAOAZAHASIgJAIIgOANIg2AtQgeAbgLAPIgqAoQggAhgbAiIgBAAQgTAYgSAaIgBACIgTAbIAAAAIgOAYIgLBSQgEAtAEAwIACAPQAYAggPAeIAAABIAAAAIAAAAQAFAQALAOQAOASATAOQAOALAMANIABABQAIAHADALIAAAAQAGALgFAKIAAABIgBAAIgJARIAAABQgKAPgQAEIgBAAIgDAAIAAAAQgiAIghgeIgLgHQACAXgBAYQgBAogEAJIAAAAIAAAAIgDAHIgBAAQgEAFgEABQgEABgDgDQgEADgPAFIgDABIgCgBgADwmpIABAAIgBgBgAhni0QAAgEAEgBIgEAHIAAgCg");
	this.shape_154.setTransform(57.7,44.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AiGDaQiOgegOAAQgFAAgIAEQgHADgFAAQgIAAgQgGQgOgFgJgFQgEAGgJAIQgJAJgBgDQAAAGgMgBIgZgFQgGAAgKAGQgMAHgHAAQgPAAgVgQQgggZAAgsQAAheBJg7QA/g0BKAAQAuAAAkAUQAVANArAhQBgBACtAAQAHAAAJgIIArglIA3grQAwgpALgMQBXhZBBgjQAJgFAogKIANABIABADIAHATIASA0IAGAbIADAJIAEASQiiDShvBAQg3AhhCALQg1AKhXAAIh+gLg");
	this.shape_155.setTransform(36.5,20.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AjFDZIhSgxIg3ggIgSgJQgMgGgNgMQgLgKAAgCQAAgGgEgJIgDgMQAFgLAAgKQAAgKgrgWQgqgVgUgCQgigEgRgQQgPgOAAgRQAAgdAIgKQAMgOAoAAQAXAAAoAUIAlATQAIAAAAgCIACgBQgCgEAAgCIgFgBQgkgagwgeQgdgUAAgVQAAgbANgRQANgQAUgBQAlABAaAQQANAIAiAiIAPAPQgOgagYgaQgOgQAAgVQAAgaAQgQQAOgPAPAAQB1AAAiDyIArgCIABABIANABIAOAIQAJAGAFARQAEANAAAIQAAAOgIAEQgLAIgCAEIAKAHIBRA2QBdA9AaAAQAXgBBGgyQBHgzA2g3QBihlBMAAQAUAAADAIQABAFgCAHIApAiQAZAXAAAMIgGACQgGgCgEgCQjXDogdAbQhjBZhgAAQiAAAiwhfg");
	this.shape_156.setTransform(39.1,8.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("Ai5DJIhSgxIgwgbIgCABQg7goAAgFQAAgFgDgEQgFgFAAgFQAAgGADgJIABgIQgcgNgWgUQgbgXgBgTQAAgGgBgCIAAAAQgnAkgDAAQhIAAAAhZQAAgCATgdQABgGgGgOQgFgOgBgGQABgKAEgNQAGgPAHgIQARgPAKgDQAFgBAEgJQANgbADgEQATgXApAAQArABA9AfQAyAZAMAPIAJAPIAIAMQAFAKADASQADAUAFALQApBOALADQAbAHA3A5IBNA0QBdA8AaAAQAXAABHgyQBGg0A3g2QBhhlBMgBQAUABADAHQABAFgCAIIApAiQAZAWAAAMIgGADQgFgCgFgDQjXDpgdAaQhjBahggBQiAAAiwhfg");
	this.shape_157.setTransform(37.9,10.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAqC/QghgMgVgFQgkgKgOgFQgPgGgYgDQgYgEhEgXQhEgXgOgGQgFACAAgEQgKgGgKgLQgUgWAAgeQAAgWAIgOQAMgXAhgVQAggUAqgOQAqgNA6gNQA6gMA9gRQAXgHBxgXIB6gQIAlgFIgMACQgJACABACIAAAMIgBACIgBAAQAGAPAEAdQAEAaAAAKQAAAWgGANQgCAGgEAEIgDgEQgVAjgGAGQgDAFgHAZQgHAeAAARQAAAMgNAPIgQASIgVA4QgHAPgUAGQgOAEgPAAIgiAFIgiAFQgUAAgSgHgAA6gIIgeAIQAKAAASAAQARAAASgRIghAJg");
	this.shape_158.setTransform(55.1,16.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AALEBQgygNhigrQhkgthSg3Qg+grAAgFQAAgFgEgFQgEgEAAgFQAAgGACgKIACgJQgXgJhFgLQgyAAgSgIQgXgIAAgZQAAgcAkgQQAggPAjAEQgtgHgUgVQgPgPAAgSQAAgcAcgMQAcgLAiAMQgBghAIgLQAKgQAmAAQA5AAA+A9QAuAuAbA0IA2gJQAggFAOAZQAIAOAAAWQAAASgJAIIgMAHQAtAgAtAdQAlAVAkASQAoATAHAAQAXAABGgzQBHgxA2g4QBihmBMAAQAZAAAAAMQAAAKgDgCIAoAjQAYAWACAMQgCABgEAAQgFgBgFgCQgwAwhPBWQhHBQghAgQhqBmhmAAQg7AAgsgLg");
	this.shape_159.setTransform(38.4,13.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("ABkGfQhSgUhLgdQjihWhAhyQgvhIgUgtQghhKAAh4QAAg5AqhbQAshfAogNQBigyAAAgQAAAfgsBRQgsBTAABDQAAAeAGAjQAIAzASAeIALAPQAPAXATAZQAcAzB3AoQBkAjA+AAQACAAAOgIQARgHASAAQAZAAAVgGIAJgBQAIgBAEgDQASgJAjgKIArALIBAgVQAjAAAWAVQATATAAAYIAAAMQAAAFAEAFQAEAGAFAKQAGALAAAGQAAAIgHAMQgGAMAAAMQAAAXgPAZQgVAkgtALQg0AMgbgBQgGAJgJAIQgKAIgYAIQgYAHgOAAQgVAAhDgRg");
	this.shape_160.setTransform(104.5,38.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgTDgQgygkh2iBQgUgCgMgHQgNgHgMgSQgKgQgBAAIghACQgaABgFgCQgPgJgCgFQgBgHgLgDIgbgJQgOgGgLgKQgHgGgjgVQgUgMAAgSQAAghA7gKQBRgOAYgPIgRgCQg+gMAAgmQAAgbAOgKQAKgIASAAQAJABAgAHQAgAIAEAAQA1AAAsgDQAYgHA+A5QAOAOAGAHIAcAqQAIAMADANQACAJAAAUQABAIAxBEIBABSQALgHARgTIAagdQA0g7BAhiQAegrAZgUQAmggAtAAQAHAAATAEIAWAFQADADABAFIACAAQABABAAAFQAAALgUBkQgFALgMAVQgMASgGAPIglA3QglA5AAAEQg8Bng2ArQgrAjgxADIgKAAQhQAAg5gpg");
	this.shape_161.setTransform(38.1,17.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgLDyIhcgMQgGAAgKAEQgMAEgFAAQg4gNgNAAQgMAAgbAJQgfAJgIACQgnAGgTAAQgOgBgIgEQgIgDgJgJQgIgKgBgGIgPAAQgRAAgQgQQgRgTgGgGQgUAEgSgNQgXgOAAgaQAAgmA+gMIA5gKQAjgFATgKIAJgFQhYAAAAg+QAAgqAyAAQAGAAAkAIIAlAIQAKgBBIgHIAxAFQAzAIAYANQAGAEAaAeQATAYAXgDQAyAQA5ALQAvAKALAAQAHAAAhgoIAAgCIAZgcQA0g8BBhiQAegrAZgUQAmggAtAAQAHAAATAEIAWAFQADADABAFIACAAQABABAAAFQAAALgUBkQgFALgNAVQgLASgHAPIglA3QglA5AAAEQg7Bng2ArQgoAggsAFIAAADQgcAGgjAAQg2AAhZgMg");
	this.shape_162.setTransform(32.3,19.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AjIF4Qg+g+gyiFQgMgggQhHQgPhDgNgfQgKgXAAgrIACg0QAAgHgHgQQgHgRAAgvQAAgrALgjQAMgnAXgOQAIgGASgIQAOgGAIgHQALgJAygVQAxgUAKgBQAmAAAXAlQATAfAAAnQgEAjgMAOQAPALAKAVQANAYAAAdQAAAGgJAfIgJAhQAAAEAEARQAFAQAAAFQAAAPgHAbQgIAbAAAEQAAA4ALBJQANBeAZA2QBfgPBLgjQAmgSAdgVQAJgEAPgMQAQgNAXgNQALgHAngOQAngOAIAAQAFgBAHANQAAANAQAxQAPAwAAAlQAAAKgFgCIgKgXQhpBHhuAzQiNBChVAAQhMgBg7g6g");
	this.shape_163.setTransform(50.1,-15.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("ACPHxQhkgig1gsIgwglQgEgCgLgMIgqgoQgegcgng4Qgog4gQgSQg9hKhBiVQhFiiAAhaQAAhbAQgjQALgWATAAQAVAAAWAhIAhA7QAOgFAzgGQCOAAC7hMQBfgmBQgoQheChAACaQAAC9CJDXQAkA6A6BNQArA4AAAHQAAAzgKAWQgfA/hoAAQg5AAhbgeg");
	this.shape_164.setTransform(57.6,48.7);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AEBIoQgigHgJgIQgbgVgZgHQgkgLgMgGQglgSgjgaQgigcgQgNQiuh3h5i0QiLjQAAjNQAAhHAchAQAYg3AmgkQAggZAIgCQAFgCAJAMQgCAFgFAFQgIAIgNAGQgIAEAAADQAAChAuB6QAoBsBZBsQATASAwA1QA5A4BYA8QBaA6AFACIArAQQARAAAjgJQAigBAbAmQAYgIAhAIQAXAFAIAGQAwAlAAAhQAAAFgGAPQgEAOAAAFIANAnQAAALgGASQgDAGgKAKQgJAKAAACQAAATgUAUQgfAgg9AAQgPAAgfgIg");
	this.shape_165.setTransform(112.5,49.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AlYEdQhIg2AAhtQAAiHAHgzIAIgbIAQgrQAUgwASggQAXgmAlglQAtgrAdAAQAGAAACAEIABAKIgBABQACAEAAAJQAAAMgRA4QgbBXgZBhQABAFgBAFIgBAKQAAA+AWA+QAEAKAYA1QBAgEBygdQBdgZARgIQASgKAbgWQAagKBFgoQAzgbAjAAQAyAAAhAiQAaAdAAAYQAAAOgCgCQgDgCAKARQAMAVAAAIQAAAFgEAHQgEAGAAAGQAAALAEASQABAQgNASQgJANgeAJQgWAHgNAAQgIAAgOgCQgOgDgFgDQgLgGgDgHQgBgFgBAAQgMgBgFAKQgGAKgNAAQg7AegwAPQhyAmgYAFQg4AMhpAAQhsAAhAgvg");
	this.shape_166.setTransform(103.1,28.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AjiE1QgjgYAAg9IADgdQAShPAXg+IAehNQAahDAUggQAYgnAmghQAkgfAXgHQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIgBACQAWgIAQAAQAOAAAHgHQAPgQAcgPIAzgdQAkgSAZAAQAgAAASAVQASATAAAgQAAAHgFAMIgVAuQALAPAEANQACAJABAOQgBAYgPAOQgMALgOAAQgEAGgPAnIgPAmQgGAAgFAUQgGAagKALQgVAYgfAaIgbAWQgBAShfBUQhpBcgzAAQgbAAgTgNg");
	this.shape_167.setTransform(81.1,18.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AioFQQgwhUg1jxQgVgKgIg5QgEgeAAgkQAAgFABAAIACABQACgBgFgqIABgjIADgWQAEgaAHgVQAMgoARgSQAPgPAagGQAQgDAPgMQAPgMAegHIAggKQARgGAYAAQAsAAATAsQAKAZAAAZQAAAKgGAWQgHAagJAKQAKAKAIAWQAIAUAAAMQAAANgFAzQgEA7gFAOQgIAXgVAZIgVAWIAPCvQAQgNBLhLQBVhUAMgSQAWghAfgYQAfgZAZAAQARAAAIADQAKAEAHAOIACAGIACAOQAAAIgFAZQgHAaAAAGQABAFAEAFQAEAFAAAFQAAAGgCADIgHAHIAAADQg8B4h7BpQhyBjg9AAQg/AAgmhDg");
	this.shape_168.setTransform(60.9,1.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AjgDmIhJhSQgagmgVgVQgSgQgEgGQgLgNgMgpIgKgnIgOghIgIgaQgEgMAAgGQAAiHA3g/QAIgIAtgcQAzggASAAQAVAAARAOQAIAHAFAHQAuAAAEABQAcAJAAArIgPBPQgPBRABAMQgBAVAPAdQAUAlADAKIADAdQAGAeAQAQIBDBeIBbg+QAQgMAwgjQAmgbAagXQAug2AjgOQAXgKAyAAQAKAAABALIgeAEQAZAUAgAzQAiA1ABAaIgDACQgFgBgCgBIgLgOIgCgBIgLAJIgJAIQgZAZgxA5Qg8BDhFAyQhcBBgfAPQgUALgeAAQhGAAiiiMg");
	this.shape_169.setTransform(50.4,4.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("Ag/FCQhKgkhGhfQgggsgagNQgggQgIgIQgVgVgEgLQgEgJAAgZQgggegIgPQgKgPgGgNQgKgWAAgWQAAgzAMg1QANg7AWgbQAQgUBfg7IARgEQAcACAMAMIALALQAFAAAIgEQAIgEAFAAQAdAAANAZQAIAOAAAPQAAAcgHAXQgLAogLBKQAKARAZAfQATAcgGAcIACACQABAHAzBEIA+BUQASgMAkgrQA0g+BAheQAegsAZgVQAmgfAtAAQAIAAAUAFQAUAFADACIABAFQAIARgJArQgGAegKAbIgMAeQgIAQgQARIglA5QgkA4AAAFQg8Bng2ArQgvAmg3AAQhCAAg0gZg");
	this.shape_170.setTransform(44.4,9.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AjXE4QgJgMgIgBQgJgCgpgBQgjgBgLgFQhjgughgfQgTgUgBgaQAAgGABgBIABABIABgGQAAgGgCgEQgCgEgOgNQgJgIAAgWIABgSQABgMgEgGQgEgHgGgRIgFgRQAAgSAMgKQAMgMARAAQAZAAAvAmQAwAoAjABIgMgPQgIgSgLgNQgFgHgBgJQABgUALgTQAOgVARAAQAOAAAUAQQAWASALAbQAHAQADACIAJAHQAJAJAXASQAWARACAAIAVgDQAVgCAJADQAMADAKALQAJAJAFAAQAyAABGgaQA+gWA/gjIBAgsQBJhMAMgQQAKgNAVglQBciMBBAAQAUAAAFADQAFACAAAGQAAAKgGAAQAAAEgIAYIgKAgIAFAHQABAFgGATIAAAtQAAADgHACIgEgPQgfBUhABcQhWCBhnBFQgkAZgtAWQhXAthJAKIiSASQgWAAgJgJg");
	this.shape_171.setTransform(34.2,27.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AkqFJQgTgDgQgKQgVgMgUgHQgpgLgqAFQgMABgOgBQgLgCgKgFQgJgEgHgGQgDgDgBgEQgHgQAHgPQAFgLAJgHQAkgbAwAEQgMgFgNgDIgSgHQgPgIgMgKQgGgFgDgHQgCgGAAgIQAAgNAHgLQAKgNAQgFQAcgHAbAJQgDgGABgIIADgTQACgFADgEQADgGAGgEQAHgEAIgDQAXgEAVAFQAZAIAXAMQAOAFAMAIIASgFQB+iIC2hhIAAAAIAAgBIABAAIAAAAQAagOAcgNIABgBIAIgDQBDggBKgbIAAAAIAIgCIAAAAIABgBIAAAAIABAAIAAAAIAugQIABAAQBageBlgWQAEgBADACIABABIAAABQAIADACAQQABAKgCALIAEBDQgCAbgIAAQgEAAgCgEIgBgEIACgLIAAAAQhQARhJAbIAAgBIgDACIAAAAIgnAOIABAAIgBAAIAAAAIAAAAIgBABIAAAAQhHAchBAmIAAABIgDABIAAAAIgaAQIgHAEIABAAIgHAEIgBABIAAAAIgFADIgBABIAAAAQiMBchtCNQAJABAJADQAHABAHAFQAGAFAEAHQAFAIACAKQACAHgBAGQAAAIgDAIQgCAEgDAEQgPAOgUAFQghAFggAHQgMADgKAGQgLAGgKAIQgcAUgjAAIgSgBgAh7EEIAAgBIAAAAgAnQCkIAAAAIAAAAg");
	this.shape_172.setTransform(30.3,32.1);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AhND2QgvgNgIgIIhdg2QgqgigRgRQgHgIgCAAQglAAgOgLQgUgPgLg2QgcAHgdgVQgNgJgKgBIgTgBQgZgGgKgSQgJgRAAggQAAhDA0g+QA4hCBMAAQAOAAAQAJQArAgAlAYQAGADAKACIAZAFQALACAIAHIAFADQAHAQAAAQQAAAMgIANQgGAIgCAFIgLAPQAAAUgDADQgEAEAAAKQAAAUAVAYQALALAUASQAKALAmAbQAlAZAJAEQAMAFAlAJQAwAMAYAAQBpAABtg4QAWgLAugbQAegSAHAAIAGAAIgBABIAIgBQAgAAAlAbQArAfgHAjQAAALgCAEQgCAEgHAAQgKAAgHgUQh/BghiAkQhlAkiOAAQgsAAg3gQg");
	this.shape_173.setTransform(42.3,0.3);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AF2MZQgCADgFABQgFABgEgBIh4hUIhPg5QgigagBgGIgVgVIghgcQgwgmgSgVIhxiIQhUhjhYi9QhsjjgQi0QgMgKgKgTQgHgRgBgIQABgbAFgVQAGgUgBggQABgFgGgeQgFgfgBgFQABgeARgaQAng/ATgmQASgjAhghQAfgfAOgBQAUAAAOAKQARAMAAAZQAAAGgFARIgFAUQAIgHANgGQAPgFAKgBIAfAHQAgANAAAgQAAAIgFAJQAMADAIAHQAIAIADAAQAEAAAEAJQAFAMAAAPQAAAMgKARIgTAgQgKAKgQAjQgUAqgDAPQABAFgBABQACAAAGAVQAGAYABAVQgBARgFAaQgHAigLAJQALBZBMDBQBIC2AWAXQALAcA+BXQBGBkA0AyIAeAeQAiAiAUASQAtApA7AtIAHgKIAGAcIAAACQAGgRADgCIABgBQADABADAKQADALABAGQAAAOgGANIgdBBQgEALgEAQQgDAMgOABg");
	this.shape_174.setTransform(44.5,-61.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AIVKjIgBgBQh+hDj9jWQj2jRhfh0QhuiEgagcQgUgWgPgEQgQgFgZghQgegpgLgyIiUiWQgpgtAAggQAAgNAPgSIAOgPQAAgGADAAIALABQASAAAMAKQAeAdArAkIgNgRQgZgWgSgwQgRgqAAgbQAAgeAbgOQAPgHAOAAQANAAAEADQAIAFAYAcQAFAFApBRQAnBLADgDQgphegLgiQgGgSAAgNQAAg7AhAAQAfAHAIAFQAUANAbAyIBSClQAQgNAagGQATgFAQAAQATAAAOAOQAUATAAAkQgdApgMAAQgGAAgDAFIgCAEIgUAPQAOATATAkQAXApAAAMQAAAHgEADIgEACQBjCvDMDeQDcDwDVCWIAFAHIAEABQAHAMguAsIgyAqIgIgHg");
	this.shape_175.setTransform(26.3,-52.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AGlJVIAAgPQkBgUjFh3Qi9hxheiwQgmhHgriLQgJhXgHgDQgDgBgFACQgHgBgIgPQgIgSAAgkQAAgSACgXQABgYgGgtQgLhCAAgLQAAgcAOgZQAMgUAZgYQBUhOBAgdQAngRAlAAQAbAAATARQAUASAAAaQAAAQgGAIQgIAIgEAGIgfATIAOAkIAJAAQAIgBASgHQAZgMAGgCQAGgBAFADQAJADAJAHQASAPAAAaQAAAWgTAWQgvAwg2BAQAJAwAAAXIgCAaIgDAUIgfAgQAMCQA2BpQAiBBA5A6QA1A3ANALQAgAeApAWQBRAsEGBRQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIACACQACADAAAGQgCAhgFAfQgJBAgNAAQgJgPAAgMg");
	this.shape_176.setTransform(39,-48.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AIMJWIgBgFQgBAAhHhLQhwh0iHiEQABAAi5inQi6ibg1gvQgZABgSgFQgYgGAAgNQAAgCg1hLQgOgTgFgCIhBgdQhBggg2gRQgpgNgHgFQgKgIgIgOQgFgMAAgJQAAgGAEgLQAFgPAIAAQAIAAARgIQARgJAOAAQAVAAAdAJIhKg6QgMgMAAgXQAAgxA5gBQAVAAAPAGQgNgdAMgLQAGgFAJgFQAAgCALgEQAPgGAYAAQAeAAAvAkQBKA+BEAzQAiglARgIQAOgIAcAAQARAAANATQALARAAARQAAAIgGAKQgKARgsA6QBCA5AJAWQAAAQAKAOQAcAsAxAuQAxArAIAIICQCVIAYAeQALAOAGAAQAGAAALAOIAZAeIBOBYIDMDvIAIgDIAEARQg3BHgJARQgGARgKAWg");
	this.shape_177.setTransform(24,-44.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AHNJIIgDgJIiWgWQgYAEhsgdQhvgdhJgfIgygTQgDgChIgzQhHg0gWgbQgWgbg8htQg7htgZhCQgdhNgbg5QgPgfgJgvQgJgrAAgeQABh6B6hiQBxhbB1AAQBLAAAqAgQAfAaABAjQAAANgNASQgKARgNAKQAxAcARAXQAKAOAAAUQAAAXgNAaQgSAjgeAAQgHAAgGgDQgJgEgYgFIAJAGIAAABQATAQAPAdQAOAfAAAUQAAAagLAUQgOAXgbAAQgIAAgcgFIgzgVQA/ERBPBiQAqAyA+AeQAzAZBdAYIAmAJQAZAGALAFIB2AiQAEgSASgCQgCAVAHBOQAAAugDAVQgDAPgJAMg");
	this.shape_178.setTransform(38.4,-38.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AFWMYQgsgQh1hCQhag0g+gnQifhoh5j1QgyhOgwi7Qg1jSAHieQgOgJAAgaQAAhEAOgrIAPgyQADgpAOgcQAIgPAJgKQADgHAUgLQAegRAkghIAVgRQAYgUAMgIQAOgKAagIQAXgHAMAAQANAAAMAHQAUALAAAbQAAAFgEAIQgEAHAAAFQAAAHgDAEIgEADQgFAFgBAGIgBACIAGgBQAjgBAWAQQAYARAAAeIgBAKIgEAIIgGAJIgDABQAIAFAJAPQAJAQAAAJQAAAdg8AvQg9AvAAAEIACANIABAGQACBCgKAAQgBAAgEAQQgEAUgTARQAZG6CwDfQBBBRBkBFQA4AoBuBCIAFgLQAIAYABAFQAFgSAEgDQAFAGADAJQAEAKAAAHQAAAXgRAxQgSA0gOAKIgCgBIgBgCQgHAGgFAAIgEAAg");
	this.shape_179.setTransform(46.2,-59.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AGFNEIAAgBQhDgtgxgjQh0hVhIhHQiTh3iMj7QiVkHgSjNQgNgBgQgYQgSgcgBgiQAAgSAIgUQAGgUABgQQAAgFgMg3QgLg9gCgQQgIg3AAgXQAAgyAZgmQAMgUATgSQAmg8ATgKQASgIAPABIAHgFQAOgJAQgDQAXgEALALQAHAGADALQANAxAAAUQAAAKgGA3IgFA7IADAVIADgIQAXgnAvAAQAQAAALAOQAPARAAAiQgBAngfAuQgeAvAAAUIAOBAQAPA/ABAVQgBAFgIAEQgJADAAAFQAAAGAJAZIAKAjQAHAaAKAjIATBEQAUBFA7B+QAcA/AaAzQAjBHBXBtQB9CcCKBiQABgHAAAKQAAAGgCAEQgBABAAABQgBAAAAAAQAAABgBAAQAAAAAAAAQgBASgQApQgQAmAAANQAAABAJAJIAJAKQAAAGgCABIgHAAQgBADgBACQgDADgGAAQgHAAAAgBg");
	this.shape_180.setTransform(41.5,-65.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AFbIoIgCgFQi+gcgTgEQhBgNiBgmQg8gYgmgYQhZg5g4hSQgdgrgZicIAAifQgBhxgGAAQgGAAgBgQIABgZIACgTQAEgTAFgGQAPgQAHgiIAIgqQAVhMBQg8QgCACAHgEQAKgGAVgRQAXgSArgDQBZAAAiAYQAbAVAAAvQAAAHgDAPQgDAPgDAHIgOAXQgFALABAPQABA6gUAeQgVATAAAKQAEAUABANQABAXgQAWQgcAmgSBxQgQBdAABKQAAAVAEAZQAHAoANAIQAZARAVAMQATALBMAiQBOAjCMAkIAqALQgFgCAOABQACgIADgDQADgDADADQACACACAGQABAGgBADIAGABIADADQAqALglgJIgFgBIABAEQAAAGgBABIgDAAQALAjAIAnQAJAmAAAKIgBAJQgCAHgNAAQgGAAgBgCg");
	this.shape_181.setTransform(51.5,-39.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("ABDGiQgLgVgGg0QABgZgEgPQgIgcgegIQghgJgXgVQgagXgGghQhMhIggglQg3hAAAg6QAAg4AngxQAogxASgRQASgRBvhNQBthLBlgyIAAgBIAHAAQAGAAACADIABAFIgBACQAcBbADAMIAAAAIAAACQADAKAAADIgEADQgeAQgkAVIgfASQgSAKgPAKQgbATg9AzQgkAggJAJIgGAFQACAAg1AzQBFBKAkAaQAQALATADQAYAEAcAZQApAoAMAHQAYARAaBCQAbBEAAAwQgJAzgGAKQgIAOgRAJIgPAFIgSAQIgBABIguAEIgLAEQgGADgFAAQgVAAgLgWg");
	this.shape_182.setTransform(60.7,40.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("Ag4DpIiChAQg+gegXgVQgggfAAgvQAAgnAQgVQAPgVAlgTQB5g+BJghQCqhMCMghIABAAQADAEAAAKQAAAFgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAABgBAAIANAdQAIATAGAYQAIAhABApIgMgDQgCgGgDgCIgCgCIgBggQgXAPiRA5Qh4Axg+A7QAyALBhADQAXgOAXgLQAqgQANAAQAVABAWAOQAiAVAAAtQAAAagIAKQgPARgBADQgBADgQASQgQAQgBAFQgGAcgDAEQgMAQgxAPQgtAPgWAAQgxgBhHggg");
	this.shape_183.setTransform(56.1,23.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AohC6IgfgfQgUgQgNgXQgMgUAAgNQAAgNgHgWIgIgXQAAgZAZgeQAegmAvgXQAJgEALgEIAKgCQATgEAKgJIAHgJQAGgMAXgMQAZgNAWAAQAQABAPANIAGgDQBtgcBFgLQBhgPB6AAQCAAACEAZQBrAUBdAhQB3AsADACIADAEQAGgJAEAFQgCAVgJAWQgQAkgnA1IgCgCQgBgBAAAAQAAABgBAAQAAAAgBAAQAAABgBABIgEgEIACgSQhYgjiJgXQh0gUhVAAIhDABQgJAAi1AcIgKACIgDABQhCAQgaAIQgjAMAAAFQAAAggFAJQgHAMgaAKQgaAJgOAcQgNAdgpAHIglgIQgGASgYAPQgZARgbAAQgOAAgUgSg");
	this.shape_184.setTransform(22.9,8.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AkFJEQgggDgKgYQgFgMAAgMQAAgMADgNQAEgQAHgQIAXgxIACgEIAAgBIgMAUQgVAkgTAlIgJAQQgIAOgMAHQgGAEgJACQgPAAgOgHQgFgBgDgEQgIgKgDgLQgDgNACgNQAEgSAGgSQAEgMAGgLQgTAZgYAVQgFAEgGADQgKAFgIgEIgIgEQgHgDgGgFQgNgLgBgQQgDgcAQgYQAVgfAbgXQAjgdAigeQgmgCgZgXQgGgFgDgHQgGgNACgNQABgIADgGQADgHAFgFIAKgGQAOgHAQAAQAUADASAKIAXAOIAGADQAVgjAggcIAAAAQACgCAEgBIAkgFQDcjrCyi2QB+iAC1iuIABgCQACgBAGAAQAHAAACACIACAFIAFgDQAAAdAGBdQAAAHgDAHQgDAHgCAAIiPCuIgBABIhzCRIgnAxIj5FNIAIAXIABAKQgIAegyAiQgaASgGAGQgLAKgJASIgQAbIgaAzIgTAmQgGAMgIALIgJAMQgFAFgIADQgFACgFAAIgBAAg");
	this.shape_185.setTransform(33.1,54.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AM5FOIABgBIACACIgDgBgAKqEtIgKgDIgIgCImohpIiXgnIm9h0QgMARgjAAQgQAAgdgFQgJgCgRgJQgOgHgFAAQgFAAgZAOQgcASgMAEQgJAEgqAKQgoAJgFAAQgZAAgQgXQgLgQgBgMQAJgMgaABQglAAgLgHQgLgGgJgOQgLgNAAgPQAAgNAJgPQgLgGgKgOQgIgLAAgFQAAgfARgNQANgJAigFQBugQA7ghQghgMgNgcQgHgPAAgQQAAgXAMgUQAMgVAOAAQAfAAAqAwQAJAKArAVQApAUANACQAxAHAYAHQApAMAQAkIObE/IAGAKIAIAMQAgA1AJAYIANAnIAFARIgDAAIgKgCg");
	this.shape_186.setTransform(25.6,-16.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AhPHhQgLgHgjgNIglgOQgLgFgOgMQgGgFgNgeQgOgfgMgKQgHgFgNgSIgMgSQgCAAgFgMIgNgdIAKgRQgDhBABgzQAIhlAmhgIASgqIgTAjIAdhFIAagtIAVgiQAWghAQgLQAQgLB/hhQClhfAzgQIAAgCIAGAAQAJgCAEABIgFACIgBAMQAAAPANAoIAPAwIACAIIgBAEQgCACgDgBQgEAAgBgDQgYAGiEBbQiBBbgMAPQgMAQglAhQgMBSgDAkQgCAdAAA6QAAASAEAmQAFAsAHAUIAKANQAIALAEAJIADAFQAFAKACAIQAEAQAVAOIASAOQAAABATANQASAQAAAIQAAAGgGAIQgIALgPAHQAPAGAKASQAIAPAAAMQAAAJgHAHQgLANgZAAIgNAAQgIgBAAgGQAAgHgCAAIgKAAQggAUgCAAIgMAAg");
	this.shape_187.setTransform(59.1,45.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AB9EWQg5gOgWgEIgOgCQgwgKhognQhjgkAAgFQAAgFgXgHQgYgIAAgFQAAgOgOABQgmABgHgBQgdgDgYgMQgOgHgUgXIgSgVQgFAAgCgEQgDgGgDgCQgDgCgVgXQgSgUgGAAQgiAAg3hAQg9hJAAhFQAAgvAcgaQATgSAOAAQA3AAAyAfQAqAZAEAQQAGAZAEAGQAFAGAcAVQAHAFAwAOQAqALAAAIIA7AYQA7AZAAAcIgBAQQBOA9CZA0QB/ArBTAIIBtANQAmAEBPAAQBOABA0gCQALAAACACIABAKIgEAFQAKAMgDAoQgCAhgEAKIgGAPQgBACgEACQgGgBgBgPQgtAHhqAJQhtAJgvAAQh0AAhGgNg");
	this.shape_188.setTransform(19.5,-18.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AnIGOIgVg5QgQgvAAgOQAAglAfghQAfgfAlAAQAKAAAGADIAmAWIAfADIAkAEQAFAAAGgJQAHgKADgCQAGgEAQgCQANgCAJAAIAWABQBcg0BahQQAqgnA/g/IAkglQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIBBhJQAbgeAOgXIAkg3QAWghALgNQAKgNAggyIBEhpQAGAAADADIADAHIgBAEQAZAfAUBMQAPA8AAAXQAAALgKACQgEgFgFgKQgHgPgCgPQhNCvhFBnQgkAzglAnQh8CdiTBvQgYATgvAhQgjAXgBADQgEAJgJAGQg6AngLAFQgfARghAAIgdADIgdAEQhaAAgfhXg");
	this.shape_189.setTransform(39,44.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AlVHjQgGgQAAhIQAAgOAshRQAwhWADgPIAFACQAJhdBCiTQBDiWA4gxICLh/QBqhaBpgzIAGgBQAHACACAFQADAFALAwIANA1QAFAUAAAGQAAAKgCADQgEAAgGgOIgHgNQhLA0gWARIgKAJQgWANgGAIQgRATg1AvIAIgKIgNAOIgMALIgCADIAFgDIgGAGQAAADgEABIgLAIIgtAuQgaAbgTAPQgDAdgMBJQgKBRACBuIAEgBQAbABgBA7QAAAFgGAQQgJAQAAAEIAqBtQAAAbgXANQgOAJgSAAQgeAAglggQgcgXgQgaIgYARQAaAQAAAUQAAAhgkAVQgVALgSAAIgegBIgQAJQgSAIgQABQgsAAgLgagABbi9QAAACAHgFIgBAAQgFAAgBADg");
	this.shape_190.setTransform(51.3,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_158}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_159}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_009 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AglAHQgIgdgGggIAAAAQBnANAAAkIhJA7IgDABQgGgRgHgfg");
	this.shape.setTransform(68.9,8.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AAKDrQgkgDgigiQgQgQgJgRIgBAAIAAAAQgGgMgcgqQgog4gVgUQgZgWhHgpQg1ghgNgCQA/gwAwgdQAwgeAigLQAhgMB/gbQAegGAcgEICmgEIAGABIAAAAQBoANAAAkIhKA9IgEABIgJADQhZAeg1AHIAAABIgBAAIABABIAOAPIAAgBQAVAhAGAdQAFAaAAAPQgBAOABALQABAKgIAkQgHAkgBAXIgYAaQgxAqg4AAIgHAAgACxCIIAEgqIAGgvQACgQgGglQgGgmgQgPQANgHA2gMQA3gMAogbIgTApQgSAlgcAuQgdAugUAiIgeAyg");
	this.shape_1.setTransform(39.6,26.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAUEFQgpgCgdgfQgLgPgMgIQgOgKgsg9Qgug/gmgeQgogfg+gdIhBggIgBAAIAAgBIAAgBIABAAQAKgKBMg4QBMg6AzgPIB1gmQBPgXBwgHIBcAAQBDAGAgAOQAnAQAOAbIAAABQACAIgBASIgDASQgIAcg4BiQg4BbgaApQgaAngIAUQgKAUg4AnQg2Alg3AAIgGAAg");
	this.shape_2.setTransform(38.5,26.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,52.4);


(lib.FIZ_23_part_006 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("ACpCfQh3AAh+iDQgwgvgfgxQgeguAEgQIAAgBQABgDADgDQADgFAIgGQAKgHAKgDIAIAAQAXAAAzAcQAzAeAyAsQCFBvAMBhIAAACQgEAFgJAAIAAAAg");
	this.shape.setTransform(21.3,19.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhcA5Qg6g4ghgzQgRgagHgUIAAAAIgBgBIAAAAIgEgPIAAgBIAAAAQgJgvAfgRQAfgSAZADQAaACA4AdIABAAQBDAkBnBkIABAAQAjAcAeA3QASAjAFAbIABABIAAAAIABAEQAHAegEARIgMANIgBAAQgFAHgVABIgPABQhwgBiLiIg");
	this.shape_1.setTransform(21.7,19.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.2,43.1,38.9);


(lib.FIZ_23_part_005 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACXCiIgBAAIgFgDIgJgFIgBAAQgLgHgEgGIAAABIgDgGIAAAAQgDgFACgHQABgHAFgJIAAgBQABgKgCgFQgBgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABIgDABQgeACgPgJQgRgJAAgWIABgBQAKgeAAgKIABgEIgIAAIgBABIgCABQgkAOgLAAQgvAAgJgbIAAgBQgCgRgFgKQgsAHgKAAQg1AAAAgzIAAgBIACgJIACgPIAAgEQAAgIgEgGIgGAFIgDACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQgLgIABgGQAAgIACgHQABgJA9gKQA4gKBFATQAxAOA9AwIgBAAQAUAQAUATQBUBNhICIIgCACIgDABIgDgBg");
	this.shape.setTransform(19.2,12.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB8CkQgKAAgQgNQgRgNAFgNIAFgQIgBAAQgLAAgJgCIgCAAQgpgKAAgxIACgJQgLADgRAAQgoAAgUgaQgLgPgCgMQgNAIgcAAQgUAAgPgGQgPgJgIgHQgIgIgEgJQgFgKAAgZQAAgeAMgOQgJgGAAgEQAAgHACgHQACgGA4gJQA4gKBDATQAxAOA7AvQATAQAUASQBRBLhGCFIAAAAIgCACIAAAAIgIAEIgJAFIgJABIgEAAgACABoIABgCIAAgBIgBADg");
	this.shape_1.setTransform(18.9,13.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4,38.6,33.7);


(lib.FIZ_23_part_004 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AALCsQAGgCgEgIIgFgKIgHgKQgogWggheQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAABgBQgXhcAMgnQALgmAMgNQAMgNAQAAQAaAAAQAjQASAjAFAzQAFAzANA1QAJApAGANIAAACQANAMAJAAQgGAKgYASQgfAYgOAAg");
	this.shape.setTransform(11.1,20.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCC9QgxgqgQgkQgQglgIghQgKgWgDgrQgDg3AIglQAGgaAUgVQAZgaAgAAQArAAAWBMQAKAmADAkQADAkATBEQALAqALATQgFAMgJAAQgGALgYASQgfAXgOAAIgCAAIgHAAIgKgBg");
	this.shape_1.setTransform(10.7,19.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,21.4,38.2);


(lib.FIZ_23_part_003 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgngBIAwhCQAVAfADATQAFATACAEIgoA+QgTg0gUgRg");
	this.shape.setTransform(51.8,36.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("Ag+BmQgFgHgYgbIAkg6QARAVAEAMIAPAuIgaAtQgNgZgEgHgAAYhiIAdgjQADACAkA2IgeArQgSglgUgbg");
	this.shape_1.setTransform(51.8,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("Ah6ErQgUgOgjgfQgkgfAGgFQAGgGAghAQAfg/Ahg0QAsA0AAAUQAAANgUAlQgXArgGAZQgDAXgHANQgCAFAFAkgABPjdQAZgYAagkQAOgSAOAAQAKAAARAPQAPAOAJAOIgCgBIgKgCQgDAAgEAFQgaAfgyA5Igjg3g");
	this.shape_2.setTransform(51.6,43.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("AAEAAQg2gihfgRIAhgqQAXgcAIAAQAfAABBAjQA8AeASARQAbAbAPAlQAIATADAQIgoA+QgihRhEgpg");
	this.shape_3.setTransform(41.2,30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AAoCQQgdgjglgfQhphUhKAMIAygxQATAAA9AZQBHAaAeAdQAoAlALAbIAQArIgaAtQgBgMgaghgABohNQhDg5hZgUIAfgiIAeAHIAgAKQAdAKAZAQQAeARArA2QAWAbAQAZIgeApQgQgwg4gwg");
	this.shape_4.setTransform(40.4,31.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgRGDQgUgOgagYQgfgdAAgHQAAgFAEgKQAFgKAAgFQAAgHh+hHQh9hHgfgXQBIg8APgKQAtgqADAAQAeAAAvAMQA4ASAhAbQAsAlAdAmQAjApAAAVQAAANgeA6QgcA6AAAeQAAAKAEAagAB0i+QhIgugwgJIAEgHQA8hLADgGIgBgEIgPACQCjhPBPAoQBQAogBBBQgBBAgLANQgLAMgOAHQAAgOgKATIgMgBQAAgBgBgBQAAgBAAAAQAAgBgBAAQAAAAAAgBQgFgChTBiQgQg4hXg4g");
	this.shape_5.setTransform(41.1,34.8);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCF/IgKgIIgUgTIgdgXQgQgMAAgMQAAgFAEgJQAFgKAAgFQAAgHhLgyQhSg3hSgtQglgUgOACQgIABgKgLQB/hpCJiOQBChEArgxIABABIAGgKIAQgYQAPgXAOgHIAYgMIBmglQB1gUAyA2QAjAlAABHQAAAfgJAPQgGAKgOAHIAAgPIgSARQALAOgZAdQg9BFgQAWQghAsg9BgQhOB9gOAnQgWBBgPAlQgCAHAAAHIAAAHQgMgBgEgDg");
	this.shape_6.setTransform(39.4,35.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.6,-4,76.3,77.9);


(lib.FIZ_23_MOUTH_COMP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AihBHQgHgYgIgEIgSATQgSARgTAAQgSAAgUgcQgSgagCgXQAQAJAdADQAVADAlAAQB3AAB9gcQCBgdBjg0QAEALAAALQAAAbgOAMQgLAJgWAAQgDAAgNgGIgPgGQgHAAgFAOQgJAWgEAHQgZAthNAAQgVAAgSgOIgOgPIgSAQQgTATgUAPQgYARgmABQg6AAgQgWg");
	this.shape.setTransform(33,12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("AgfAjIAAgCQgGgBAAgBQAFgHABgHQACgMgQAQQAfghAHgBQAZgFATgRQAHAnACAcQg7ADgRgCIAAADg");
	this.shape_1.setTransform(28.9,21.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#40152B").s().p("AiABTQgBgMgHgXQgGgVAAgOQAAgGAIgFQAMgGAEgEQAJAHAVADQAQAEAFAAQB4AAAQhTQANAFAUAAQAPAAARgHIAJgGQgEAWgiArQgjAogWAKQgwAdgeAJIg7APIgUADIgJAAQgLAAABgDg");
	this.shape_2.setTransform(48.4,15.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AirBQQgHgWgJgIIgSASQgRASgTAAQgUAAgQgcQgMgVgGgcIAzAJQAqAHAQgBQAvABAhgHIAigHQBSgLBIgUQBTgYCDg2IAAASQABBAg8AAQgGAAgOgFIgOgHQgFAAgHAOQgMAWgFAHQgeAthCAAQgYAAgQgMIgRgQQgNAagjAVQgjAUggAAQg+AAgPgTg");
	this.shape_3.setTransform(34.1,7.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#862D59").s().p("AgeA/IgPhAQgNg5BOgYQACAJAKBFIAJBJIADABQABAAABAAQAAAAABABQAAAAABAAQAAABAAAAQgqAHgpAEQAIgLgDgJg");
	this.shape_4.setTransform(32.7,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#40152B").s().p("AiJC1QAHg0gKgtQgMgpgGgZQAFAEARACQAOACAQAAQB4AAAQhTQAvARAngmQApgngOhAQAHAKAFAfQAEAZAAAQQAABuhLBKQhOBNiQAUg");
	this.shape_5.setTransform(52.3,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AilBSIgKgRQgGgJgHgCIgSASQgRASgTAAQgTAAgRgcQgOgXgBgQIAcACQCVAACjgkQCpgmBNg1IABAQQAAAtgMAPQgMAOghAAQgHAAgdgOQgLgHgFAhQgSAkgaAOQgYAOgrAAQgWAAgSgOIgOgOQgEgBgnAjQgoAhgnAAQguAAgRgVg");
	this.shape_6.setTransform(34.2,5.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#862D59").s().p("AArBnIADgBIgBABIgCAAgAgFBQQAAgSgPg7QgQg4gLgZIAJgIIAQgQQAJAGANAFQAUAIAKgDIgBAkQAAAbAEAFQAGAJAGAoIABAQIACAUQAAAXgSALQgjgEAAgRg");
	this.shape_7.setTransform(38.7,20.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AitBgQgGgYgJgEIgSATQgRARgTAAQgTAAgSgcQgRgbABgYIArADIAdADQCuAACeg6QAtgRCOhJIAAAhQAAA4gQARQgIAHgjAFIgkgKQgHACgFALQgJAWgMASQgMATgeAJQgXAHgaAAQgdAAgOgOQgJgPgFAAIgRAQQgSASgQAMQgMAIgYAHQgVAHgLAAQg6AAgQgWg");
	this.shape_8.setTransform(34.2,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40152B").s().p("AhwBrQgCgUgRhGQBogEAUhPQAGACAigFQAjgFAFgDQAEgCAKgTQALgTABgEQgBgRABgQQADgfAMgRIABAAIAPA1QAGAcgLB0IAAADQALCCj2BLQAChEgEgcg");
	this.shape_9.setTransform(56.2,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#40152B").s().p("AgaB+QgMgOgUhBQgOgsgogoIg/hEQAJgDAYgVQAPAdAPAGQAMAFAnAAQAmAAAkgTQAfgPAWgXQARANASACQAQACAZgCQAhAsABArQAABfg1A3QgoApgpAAQgzAAgRgVg");
	this.shape_10.setTransform(29.7,27.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AheAyQgFgXgMgFIgfAfIgLAGIgEgUQgBgdAKgVIAAgBQgCgQAkgXQAjgWApADQAmACAuAWQApATBBAzIAGAIQgpgJgLgLIgJgIIgUATQgYAWgXANQgIAEgTAFQgQAEgIAAQg7AAgOgVg");
	this.shape_11.setTransform(26.5,8.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBAwQgEgXgMgFIgSAOIgEgOQgCgIAAgGQAAgjAdgVQAYgSAeAAQAqAAAjAVQAoAYALAsQgjAwhBAAQg5AAgOgVg");
	this.shape_12.setTransform(23.5,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40152B").s().p("AgoBKQgJAAgGgfIgHguQgDgOgSgfIgXgoQAOAYAPAFQAPAHAsAAQAQAAAfgKQAugNAXgXQAJAmAAAPQAAA7gXAnQgaAtgvAAIgzgYg");
	this.shape_13.setTransform(25.4,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40152B").s().p("AgsBEQALgqAAgDQAAgOgPgTQgPgUAAgNQAAgDAKgWIAKgLQADgBAJgIQAKgIAXABQAaABASAgQASAgAAAOQAAAcgKAcIAAABQgSA3gsAAQgjAAgBgcg");
	this.shape_14.setTransform(21.4,12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#40152B").s().p("AgoAWQgIgOgLgDQAXgNAlgeIAEgBQALACAPAMIAFAFQAKALAOAFQgOAEgLAOQgXAaghAAQgJAAgKgSg");
	this.shape_15.setTransform(17.7,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag8BgQgXgIgTgEQgjgGgoAAQgMAAgSAFQgaAHgVANIgfAAQgKgkAAgIIACAIQAAgFgCgGIAAgSQACgDgBgKQCGAJCwgoQChgmB3g7QgOAWgoAuQgPASgRA2QhXgRhUAoQhCAsgJAAQgEAAgUgIg");
	this.shape_16.setTransform(33.6,3.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCC99").s().p("Ak1CcQgugdAAgiQAAgGADgGIAAgBIADgCIABgBIABgBQAjgTAdgFIACAAIABABIAAACIgBABIgIAGQgXASgIAZQgFALAAANQAAACAEADIAAAAIAGAGQARgoAPgTQAkgrA8AAQAdAAApAEQAtAEARAGIABABIAAABIgBACQgUAQgJAdQgGARgBAOQABAJAHAJIAQglQANgkAGgHQAlgoA1gVQAxgQA2AAQAKAAApAGIACABIAAAAQACAYgEAcIAAAAQAAAGADADQACADAGAAIAJgBQAFgCAAgJIgDgrQgCgbAHgYQAUhFBohYIABAAIABAAQAHACAAAMQAAAFgEAHQgDAEACADIAAAAQACAMAAAKQgBBmgIAuQgOBFgnAoQhXBYkmAAQiWgBhFgsg");
	this.shape_17.setTransform(34.7,10.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D580AA").s().p("Ag4AuQgIgaAAgLQAAgjAagZQAbgZAqAAQALAAAMARQAKAPABAKIgYAeQgWAeAAAKQAAAKADAaQgzAFgKAAQgJAAgIgfg");
	this.shape_18.setTransform(38.4,22.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#40152B").s().p("Ah9CnQgDgIAAgDQAAgDAYgiQAXgiAAgCQgJgngDgIQAYAEAnggQAkgfgGgVQA/AEAQgNQAfgXADhjQAHAKAFAfQAEAZAAAQQAAA1gQAoQgPAlgkAuQgTAXgzAgQhAAmgsAAQgFAAgEgJg");
	this.shape_19.setTransform(55.3,10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AirBWQgEgYgMgFIgSATQgRARgTAAQgUAAgQgcQgMgUgGgZIAeABQCVAAClgjQCpgnBNg1IABATQAAAjgDALQgDALgMANQgUARgYgGQgYgOgIAAQgEAAgHAOQgKATgIAKQghAthBAAQgPAAgUgOIgTgPIgRAQQgUAUgUAOQgYARgmABQg8AAgNgVg");
	this.shape_20.setTransform(34.1,5.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D580AA").s().p("AgWBJQgTgcgIgdQgJgvAOgcQARgHARgNQAKgIAJgJIAGgBQADAAAGAGIALANQAPAUADAJQABAEgLAfIgCADIgGARQgFAUADAMQAFASAIAQIABACQADAEACAFIACADQgdAHgaAFQgLgKgKgPg");
	this.shape_21.setTransform(34.9,23.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#40152B").s().p("Ah4C0QgQgPgCgHQgDgKAOgfQANgegFgVQgKgagJgRIASABQBOAAAkgmQASgXADgZQAMAGAtgFQAtgFAEhbIACglQAYBGgLBJQgTCHhwBAQgyAeg6ARQgIgGgJgJg");
	this.shape_22.setTransform(54.2,12.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AinBVIgHgSQgDgIgHAAQgEAAgDAEIAAAAIgNARQgMAQgWAAQgVAAgVgmQgGgKgHgdIAoACQCmgECNgkQB9ghBzg5QACA3gGATQgJAaguABIgCAAQgbgOgEABQgDABgCADIgDAEQgBACgCAGQgIASgFALIgHAJQgeAlhAAAQgZAAgLgMIgFgFIgFgGIgCgDIAAAAIgFgEIgBAAQgFACgBAEIgRARIgOAOQgUARgSAIQgSAIgRAAQhBAAgPgZgAA0g7IABAAIACADIgDgDg");
	this.shape_23.setTransform(34.3,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#862D59").s().p("AgSAJQgJgZgTgoIAJgIIAQgQQAJAGAMAFQAVAIAKgDQADA2ACAJQAHAoAEAfQgHgDgRACQgTADgIAIQgBgigNglg");
	this.shape_24.setTransform(38.6,18.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D580AA").s().p("AhkAGQARgbAgAAQAKAAAWACIABADQACAEAEABIgLAbIAGAHIARgXQAMgPAYgRQAdgWAWAAQAHAAALAGQAMAFAFAFQhGArgeANQgwAWhfAPQAMggAJgRg");
	this.shape_25.setTransform(47.1,29.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AiwBVQgHgYgIgEIgSATQgSARgTAAQgTAAgQgbQgLgcgCgBQBpAMC9gtQDGgsBfhCQAGAagPAoQgRAtgigNIgkgMQgHACgFANQgIAUgMASQgNATgeAJQgWAHgaAAQgeAAgOgOQgIgPgFAAIgRAQQgSASgRAMQgLAIgZAHQgWAHgJAAQg6AAgQgWg");
	this.shape_26.setTransform(34.5,2.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#40152B").s().p("AhwCyQABgsgGgaQgJgjgHglQBogEAUhPQAGACAigFQAjgFAFgDQADgCALgUQALgSABgEIACgpQABgZAMgQQABgJAAAKQAAABAAABQAAABAAABQAAAAAAAAQAAAAAAAAIAAgEQAIAZAHAuQAGApAAAKQAACEhcBaIgSgRQgMgJgQAAQgWAAggAWQgZAQgPARg");
	this.shape_27.setTransform(56.4,8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D580AA").s().p("AhPgGQAZgQArASQgIAPAAARQAAAHggAGIg/AJQANgtAWgLgAAPgPQAdgiAsAAQAGAAALAEIAKAFQgWASggASQgoAUgeAIQAEgEAUgjg");
	this.shape_28.setTransform(47.4,30.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#862D59").s().p("AgTADQgDgJgPgfQgMgaAAgFQAAgGAKgGQANgKAEgFQAKAGAMAFQATAJAIgEQAEAyAGAdQAHAlAGAxQgGgCgKAAIgQAFIgUAHQAAgHgRhWg");
	this.shape_29.setTransform(38.9,18.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#40152B").s().p("AhuDDQADgtgHgnQgMgzgHgnQBrgGAShSIAmgCQAngEALgOQAOgTADgUIAAghQACgfAMgPIABAAQAJAbAHAtQAGAnABAKQAABXgYA3QgQApg4BCIgBAAQgGgFgQgHQgQgFgCAAQgNAAgcARQghASgTAXQgMgLgDAAg");
	this.shape_30.setTransform(56.5,8.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiuBXQgEgZgMgFIgSAUQgSASgTABQgQgBgNgTQgGgJgLgYQBnAMC8guQDHgwBdhFQgBA1gIASQgMAagmAAQgIgBgIgFQgIgHgDgCQgKgEgSAmQgXAjgVAMQgWAOgmAAQgVAAgPgMQgOgOgGgFQgLAGgqAqQgZAYgpgBQg8ABgNgXg");
	this.shape_31.setTransform(34.7,1.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D580AA").s().p("AiLAjQADgHAVgSQATgOAGgCQAfgJA8gWQBVAAA2AlQgkALg7ANQhGAOg3AAQgXAAgkgDg");
	this.shape_32.setTransform(34.6,21.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#40152B").s().p("AhDAXQAuADAqgaQAqgbgCgdQANAGATAAIARgEQARgFAHgEQgNAggnApQgrAvgaAAQgFAAgBAEQgCADgFAAQg6gmgJgDgAh/AIIAJAHIgPAAg");
	this.shape_33.setTransform(49.2,14.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AijBJIgKgPQgGgJgIgCIgSARQgRAQgTAAQgQABgQgUQgSgVgEgfQAHAFArAFQAmAEAVAAQCEAAFeh0QAEAygVARQgOALggAAQgDAAgOgGIgOgGQgIAWgSATQgiArg9AAQgRAAgMgIIgegTQgSASgTAQQgpAegnAAQgyAAgSgVg");
	this.shape_34.setTransform(34.1,9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AigCQIhHgEIAAgCQAEghgBgDQgEgcANgGQATgFAHgJQAPAdAPAGQAMAGAnAAQAmgBAmgSQAfgQAUgWQAKAGAVAFQAQAEAEAAQA7AAAkgVQAkgWAIgoQANAGATgBIARgDQASgFAHgFIAbAfQgMAbgzAkIg4AiQgdARgfAGQg0AMgUAHIhPALQgiAFgsAAIg6gEgAiPA/QgXgFgHgJIgIgPQgIgLgFgGIgTATQgSARgPAAQgWAAgRgdQgQgYgEggQBqALC5gjQC7gjBzg4QABA7gJASQgMAXgnAAQgHAAgOgHIgOgGQgHAAgFAOQgJAZgDAGQgYArhKAAQgdAAgOgMQgLgNgFgDQgZAYgUAPQgoAcggAAQgVAAgSgEg");
	this.shape_35.setTransform(34.8,11.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#40152B").s().p("AgSAsQANgQACgpQABgnARgRIABABIADBBQgFAugJAaIgBABQgNgXgJgDg");
	this.shape_36.setTransform(65.8,1.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AjmChIgBAAQgBgBAAgGIAEgjQADgmAIgCQANgGAGgLQAPAgAPAHQALAFAoAAQAmAAAlgUQAggQAUgZIALAIQAQAIAYAAQA7AAAkgXQAkgYAIgrIAQAFIABAAQAIABASgEIAWgEQAHAAAQATIAXAaIgFAHQhGA5gIAFIg9AiIhCAUQgKABgRAEIgOAFQgTAEg5AHQg6AIgJAAQgxAAhigFgAiyA5IgPggIgGgCIgSAUQgSATgTAAQgQAAgPgXQgSgagHgrIAjACQDrAAFDiJQACBHgJAUQgLAbgtAAQgDAAgNgHIgPgHQgDAAgFAPQgHAWgIAMQgdAuhLAAQgXAAgOgNQgMgPgEgCQgjAngWAOQgdATghAAQgyAAgSgTg");
	this.shape_37.setTransform(35.3,10.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#40152B").s().p("AgIBTQgGgZgMgBQgKgBAAgJQAPgiAFgqIADgkQAAgJANgLIAfgUQAGBJAAARQAAAKgNAsQgPAzgKAQQgEgBgDgWg");
	this.shape_38.setTransform(67.5,0.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#862D59").s().p("AgRAnQAAgMgFgTQgGgTgFgIIAcgJIAZgKQABANAIASQAFANAAAOIgBATg");
	this.shape_39.setTransform(29.8,21.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#40152B").s().p("Ah2A1QgDgLgRgdQAQgHAXgYQAJAFAVAGQARAEAEAAQA5AAAkgVQAkgWAIgpIAyAPQgNA0hPAvQhKAvhYAOIgDgjg");
	this.shape_40.setTransform(46.4,15.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ah1AkQgMgXgMgFIgSASQgRASgTAAQgCAAgKgHQgNgIgLgNQA3gbAwgQQBVgeBxABQBFAABdAMQgbA+hOAAQgTAAgRgFQgSgIAAgJQAAgGgCABIgDABIg2AnQgoAbgaAAQgvAAgSgWg");
	this.shape_41.setTransform(29.5,11);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#862D59").s().p("AgKAmQAAgQgHgXQgJgbgMgSIAvgUQAFAJANASQALAcABBMIgyACg");
	this.shape_42.setTransform(31.2,25.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#40152B").s().p("AhcBcQABg+gLgXQgQgWgNgbIAggdQAJAGAVAFQARAEAEAAQAhAAAngSIAmgSQAeAAAoBSQAAAPgmAcQg+Ath7APg");
	this.shape_43.setTransform(46.4,22.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ah3AeQgMgXgMgGQgDACgXAXQgPAQgUgFQAngkBKgcQAOgFA4gJQA0gJAVAAQAuAAAtAMQApAKAVAQQgHALgaAHQgXAGgYAAQgdAAgQgMQgLgLgFgEQgtAjgTAMQgcATgaAAQgvAAgSgVg");
	this.shape_44.setTransform(29.7,13.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#40152B").s().p("AgYCFQgLgNgUhBQgPgsgmgmQg2g6gPgWQALgDALgIQANgJACgJIABgBQAPAdAPAHQALAFAoAAQAlAAAkgTQAggQAWgWQAFADAiAHQAbAEAJAQQAiArAAArQAABgg1A2QgoApgpAAQgyAAgSgVg");
	this.shape_45.setTransform(29.5,26.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhXAoQgHgXgLgFQgDABgLAPQgNAQgBgCIgDADIgNAIQgCgQAAgKQAAggAdgaQAjgeA9AAQAlAAArATQAwAWAtAmIAFAFQgbgJgMgLIgJgHQgGAAgFAFQgOAQgQANIgaASQgMAJgVAEIgTABQg5AAgPgWg");
	this.shape_46.setTransform(25.9,7.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag2AdQgIgXgOgFIgDAEIgCAEIgIAJIgBABIAAAAQgHADgBAGQABgiAWgVQAXgXAlAAQAqAAAcAUQAOAKAfAiQgOALgVALQgcAOgQAAQg8ABgPgWg");
	this.shape_47.setTransform(22.8,7.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#40152B").s().p("AgjBpQgJAAgGghQgFgngDgOQgFgVgWgkQgXgigDgHQAGgEAMgJQAIAWAUAGQAOAFAnAAQAlAAATgFQAigIAPgYQADAGAIAcQAIAgAAAQQAAA6gWAoQgaAtgwAAIgzgYgAhuh3IAHgJIABACQgBAEgIAEIABgBg");
	this.shape_48.setTransform(24.9,21.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#40152B").s().p("AgLABQAFgFAGgSIAFAFIAHALIAAAGQAAAIgDAPQgHgJgNgNg");
	this.shape_49.setTransform(65.2,6.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AjrBwQACgfADgKQADgMAQgNQAJgGAHgFQAPAdAPAGQAMAFAnAAQATAAAjgMQAxgRAYgcQAKAGAVAFQAQAFAEAAQA7gBAkgVQAkgUAIgqQALAGAbgEQAbgDALgJQAHANASAUQAAAihZAsQhbAuhYAEQhmAHhNAHIgcABQgdAAgjgEgAi0AaQgGgYgKgCQgFAAgRASQgPAQgRAAQgUAAgQgbQgLgTgGgVQBjgaBPgUQCTgkCQAAQAdAAAgACQArAEANAGQgOAkgpAAQgRAAgKgGIgIgGQgIAAgFAOIgMAeQgaArhNAAQgVAAgSgMIgOgOQgXAWgiAZQgZATglgBQg7AAgOgVg");
	this.shape_50.setTransform(35,13.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#862D59").s().p("AgGBkQAGABAAgNIgDgVQAAg1gWgvQgYgvAAgYQAAgGAJgGQANgJAFgGQAJAGANAGQATAIAIgEQgDAPAMBAQAOBDAAAYIgCAwQgBARgaAHQgNADgaACQAKgfACgBg");
	this.shape_51.setTransform(39,22.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#40152B").s().p("AhxDaIgCALQAHgmABgMQAAg2gHgmIgThXQBrgGAShUQAYABAOgCQAmgEAMgOQAPgTAFgnQAFguAGgOIABAAQAJAaAHAuQAGAmABAKQgBCBg7BQQg8BPiCAwg");
	this.shape_52.setTransform(56.5,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_52},{t:this.shape_31},{t:this.shape_51}]},1).wait(1));

	// Layer 5
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AiKBzQgPgHgPgdQgGAPgYAGQgMADgOAAQgyAAgQhIQgGgXgJgJQgKgJgHgJIAAAAIACgFQAAgBAGAAQAWAAAmAJQAmAKASAAQDNAACOg4IBVgnQAmgSAUAAQATAAAHAJQAFAHAAATQAAAugQAUQgPASgfAAQgTAAgNgFQgIAogkAWQgjAVg7AAQgFAAgQgEQgVgFgKgGQgVAWgeAQQgmATglAAQgoAAgLgFg");
	this.shape_53.setTransform(32.4,12);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AjvBDQg2gDAAgLQAAgBgUgKIgWgLQAEgFAFgCQA8ATA+AAQDPAACng2QAugPA0gYQAngRAGAAIANAAIAKAEQhJA0iMAkQiZAriaAAIgOAAIgpgBg");
	this.shape_54.setTransform(32.9,8.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AinCXQgHgDgCgEIABgEQAAgHACgBIAGAAIAZAEQAbADAVABQgEgOgGgiQgdAAgMgEQgTgFgMggQgFAPgYAHQgNADgNgBQgUAAgSgOQgSgPgFgVQgLg6gRgDIgJABQgEAAAAgKQAAgFACgCIACgBIAJgBIApALQArAJApABQAdAAAsgDQAPAAAagHQAZgGARAAQARAABOgVQAZgGAZgIIDRhMQAMAKADAHQAEAJAAAUQABBOg2BEQhjCBjuABQhVAAgagLg");
	this.shape_55.setTransform(33.1,11.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhMDOQgOgCgJgIQAAgFAvADIABgKQAAgrgCgGIgNgvIgIgXQgxABgLgCQgNgBgYgmQgZAYgfAAQgaAAgVgcIgOgnQgIgXgggGQgJgCgTAAQgRgDgIgWIAAgGQABgCAGAAIAXAGQAbAGAhADQApADAuABQDLgBCphIIBrgzQAwgXAWABQASgBAKAnQAJAiAAAwQAACViQBUQhxBCiLAAQgrAAgTgEg");
	this.shape_56.setTransform(32.6,11.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgTDyIgDgFIgFgIIALgJQAQgHAoAAQAAgLACgKQADgSgBgQQABgNgLgkQgNgsgTgmQgSARggAEQgKABgaAAQgoAAgLgFQgPgGgPgdQgaAYgeAAQgcAAgUgcQgDgRgGgOQgLgagfgFQgggDgRgFQgggJgCgVIAAgFQABgCAGAAIAJACQAMAEAmAGQAWADA4ADIA9ADQC7AADBhQQAygUBGgjQAzgZAHAAQAPAAAMAgQARAqAABRQAACjiNBbQhyBKiVAAIgTAAg");
	this.shape_57.setTransform(32.1,10.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgKDYQgigNgLgWQgMgagQgxQgNgqgCgDQg+g9gTgXQgdglAAg0QAAg4AugeQAogbA9AAQB0AABUBjQBGBRAABAQAABLguA9Qg1BHhVAAQgNAAgWgKg");
	this.shape_58.setTransform(29.3,21.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgvCUQgMgUgRhAQgHgegdg2QgagxAAgOQAAgyAqgbQAhgVApAAQBEAAAxBCQAsA9AABIQAABigiAlQgZAdg6AAQgvAAgWgig");
	this.shape_59.setTransform(24.7,18.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgyBpQgPgLADgWIAAgBQALgoAAgFQAAgEgOgWQgPgWAAgRQAAgSAPgXQAXgjAqAAQAfAAAgAyQASAfAAAWQAAAwgWAlQgZArgnAAIgBAAQgeAAgOgLg");
	this.shape_60.setTransform(21.6,11.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag9AqQgJgSgQABIAAAAIgCAAIgPgBIgBgCQgOgDAEgOQAAgGAMgBIADABQgCABAOgEQAOgGANgLQAMgKAMgQQANgLAUAAQAgAAAXAbIADAEIAPAEQAYAGATgBQAAADADAFQAAAHgGADIAAAAIgEAAIgBAAQgFAEgLABQgVABgIACQgLAIgNANQgdAeghAAQgaAAgJgRg");
	this.shape_61.setTransform(18.2,6.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AkPClQgtgcAAghQAAgGADgFIADgEQgEACgFgCQAngcAAgCQAAgOgEgdIgHgnIhFgKQgbgHgFgWIAAgFQABgCAGAAQAXAABGALQBFAKAkAAQC7AADBhQQAygUBGgjQAygZAIAAQAIAAAJACIABAEIAEAMIgHAEIgBAAQAFACAAAKQAAAFgDAGQgEAFACAEQACALAAAKQAABmgJAuQgNBEgnAnQhXBXkkAAQiVAAhFgsgAkNALIACAIQAAgFgCgHgAFYAJIgBADIACgCIAAgCIgBABgAkNgJQACgDgBgKIgCAAg");
	this.shape_62.setTransform(31,8.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhMDOQgOgCgJgIQAAgCALAAIASAAIA9gEIgKgjIgHgfQAKg5ANgPQgUAPggAFIgjABQgnAAgMgFQgPgGgPgdQgaAXgeAAQgnAAgUg0QgKgbgFgIQgKgQgRAAIgcAAQgRgFgIgWIAAgGQABgCAGAAIAXAGQAbAGAhADQApADAuABQDLgBCphIIBrgzQAwgXAWABQASgBAKAnQAJAiAAAwQAABmg+BBQg2A6iDA2IhMALQg5AJgQAAQgrAAgTgEg");
	this.shape_63.setTransform(32.6,11.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag9DlIgDAAQgdAAgBgLIABgFIAEAAQAPAAAJACQAdAAAcgDQgSgbgTgyQgLgqAHgkIgRACQg+AAgLgFQgRgIgLgdIgHAIQgTARgdAAQgmAAgYgyQgKgXgGgdIgNgCIgegHQgOAAgGgDQgQgJAAgMQgBgHAHAAQAIAAAGAFQCMAYCKgTQCbgYCShAIAwgVQAagNAUgLQAQgJAPABIABgCIAEABQASALAKBQQAJBRgZBKQgYBNhMA3QhNA3hfAWQg0ALgqAAQgeAAgbgFgABDiKIABAAIACADIgDgDg");
	this.shape_64.setTransform(32.8,12.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgTD/QgGgHgCgGQAHgGAPgEQAJgCAHgNIANgYIAMgbQAEgKABgMIACAOIABgLIgDgFIABgGQglh5gcALQgkAMgZAAQgoAAgLgFQgPgGgPgbQgaAWgeAAQgbAAgVgaIgMgiQgHgSgegFIgzgIQgggJgCgWIAAgFQACgDAFAAIAJACQAMAEAmAHQAWADA4AEIA9ADQC7AADBhVQAygVBGglQAzgbAHAAQAPAAAMAiQARAtAABWQAACeh7BhQhyBbirAAIgPgBg");
	this.shape_65.setTransform(32.1,11.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgPEOQgGgIgDgGQAKgJAOgDQAMgCAHgJQAQglAJgNIACgbQACgOgMgpQgOgwgWgqQgRAQgfAFQgJABgaAAQgnAAgMgFQgPgHgPgdQgaAYgeAAQgbAAgUgcIgNgfQgJgQgcgFQgjgEgSgFQgfgJgCgYIAAgGQABgDAGAAIAXAKQDBAYCDgaQCPgdBjgyIBug6QAwgZANAAQAOAAANAxQANA1AABIQAAC1iJBmQhwBSiYAAIgSAAg");
	this.shape_66.setTransform(32.2,11.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AinCPQgIgDAAgHQAAgHACgBIAGAAIAaAEQACgFANgRQAMgRAEgDQgcACgRgLQgNgIgIgVQgFAQgYAFQgKACgQAAQgUAAgSgOQgSgOgFgUQgLg2gRgDIgJAAQgEAAAAgJQAAgGACgBIACgBIAJAAQBWAMBKAEQBKADBigZQBigZDNhHQANAMACAFQAEAIAAATQABB5h2BIQhuBEijAAQhVAAgagKg");
	this.shape_67.setTransform(33.1,12.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjnCsQgEACgJgBQgTgBgZgXQADgBAEgEQAFgFAFgCIAlAFIAIg5QgMAEgUgPQgVgOgEgNQgUg2AAgEQgEgTgggGQgggGgDgKQANgCAKAAIB7AKQB6AACcgkQCkglB0g5QATgMAOAXQAMAXAAAqQAAArgKAfQgKAbgcAqQgFAJggAWIg7AlQg4AlhdAPQhNAMh8AAIg+ACQgyAAAAgHgACSB4Qg0AMgUAGQAzgJAagIQAdgJAagPQgdAQgfAHg");
	this.shape_68.setTransform(32.9,10.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AiKDQQgSgFgmACQglACgcgKQgcgKgFgEQADgEACgEIAAgDIANgDIAVABIAIACQgBgZAIgrQgTAGgVgRQgQgNgIgRQgOgfgKgwQgEgCgegFQgZgEgEgNQAPgDAKAAQAKAABVAIQCBAACMglQCYgpDKhfIAHgBQAfAagCBOQgCBFgWApQgWArgdAaIgyAoQhEA0huAXQhYATiEACIgFgCgABQCeIgPAFIApgKQgJABgRAEg");
	this.shape_69.setTransform(34.8,8.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ag7B9IgsgDQABgHAHgFQAMgIAkADQgBgTgJgQQgOgXgagCQgeAAgHgDQgHgEgTgiQgaAYgeAAQgOAAgNgGQgTgLgJgVIgVAMQgQANgGAAQgEAFAAgKQAAgZA8gkQBMgtB7gRQBCgJAvAAQAJAAAHgCIALgCQBMAABFAOQBdATAAAkQAAASgbAeQgcAeguAeQh0BMiBAAIgggCg");
	this.shape_70.setTransform(31.6,15);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag8CMQgXgFgFgKIgFgIQAKgEAJAAIARABIABgHQAAgXgKggQgOgtgXAAQgkAEgMgCQgRgEgVglQgJAVgoADQgUACgXgBQgFgBAAgKQAAgmBcgsQBfgtBZAAQCLAABRA6QA2AmASA0QAJAbgIAJQgMANhQAqQg3AdhKAOQgsAJgZAAQgfAAgWgGg");
	this.shape_71.setTransform(34.5,20.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgKDYQgigNgKgWQgNgagPgxQgOgqgCgDQg+g9gTgXQgcglAAg0QAAg4AtgeQAogbA9AAQA6AAAyAeQAhAUBFA7QAZAbATA3QASAugDATQgbDDicAAQgNAAgWgKg");
	this.shape_72.setTransform(29.3,21.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag7CGQgJgRgIg1QgDgXgfg1Qgcg0AAgTQAAgyAqgbQAhgVApAAQBCAAAtA5QAoAzAIBJQAIBJgdA0QgfA5g/AAQg6AAgXgwgAhlhkIABACIABgFg");
	this.shape_73.setTransform(24.7,18.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AkACLQADgIAHgIQAIgHABAAQAGAAAAgTQgCgeACgKQgSAFgXgZQgYgbgJgqQgjAAgPgHIACgCQDUg3CngbQFKg1gBBzQAABaiPA4QiOA4j3AAIhPgCg");
	this.shape_74.setTransform(33.1,13.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgPEOQgGgIgDgGQAJgIAFgCQANgHAfAAIAAgDQAAgGADgIQAEgKADgVQAAgPACgUQACgOgMgpQgOgwgWgqQgRAQgfAFQgJABgaAAQgnAAgMgFQgPgHgPgdQgaAYgeAAQghAAgSgjQgTgogbgFQgjgEgSgFQgfgJgCgYIAAgGQABgDAGAAQAMAAAAABQgBABAAAAQAAABgBAAQAAAAABABQAAAAAAAAQAKAHB2ALIAMABQA9AMCHgbQCPgdBjgyIBug6QAwgZANAAQAOAAANAxQANA1AABIQAAC1iJBmQhwBSiYAAIgSAAg");
	this.shape_75.setTransform(32.2,11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53}]}).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_75}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.8,24.1);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FIZ_23_part_020("single",0);
	this.instance.setTransform(42.5,0,1,1,0,0,0,18.3,29.5);

	this.instance_1 = new lib.FIZ_23_part_018("single",0);
	this.instance_1.setTransform(-43.9,0,1,1,0,0,0,16.7,28.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-29.4,121.5,59);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FIZ_23_part_020("single",0);
	this.instance.setTransform(42.5,0,1,1,0,0,0,18.3,29.5);

	this.instance_1 = new lib.FIZ_23_part_018("single",0);
	this.instance_1.setTransform(-43.9,0,1,1,0,0,0,16.7,28.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-29.4,121.5,59);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FIZ_23_part_020("single",0);
	this.instance.setTransform(42.5,0,1,1,0,0,0,18.3,29.5);

	this.instance_1 = new lib.FIZ_23_part_018("single",0);
	this.instance_1.setTransform(-43.9,0,1,1,0,0,0,16.7,28.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-60.6,-29.4,121.5,59);


(lib.FIZ_FRONT_part_017 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FIZ_FRONT_part_016("synched",0);
	this.instance.setTransform(25.7,55.2,1,1,0,0,0,25.7,50.9);

	this.instance_1 = new lib.FIZ_FRONT_part_015("synched",0);
	this.instance_1.setTransform(187,58.9,1,1,0,0,0,16.6,44.1);

	this.instance_2 = new lib.FIZ_FRONT_part_014("synched",0);
	this.instance_2.setTransform(108.3,120.9,1,1,0,0,0,80.5,120.9);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.3,203.6,240.6);


(lib.FIZ_FRONT_part_005 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("Ai0BjQgBhhCYhMQAzgeBAgPQAdgKAWACQAVACAHAFQAGAFAIASQAHASgZAnQgZAngjAYQgkAbhwA2Qg2AYggAAQgkAAgLgdg");
	this.shape.setTransform(73.9,84.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai0CUQgigUACgWIgBgHQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQgChiCehbQA5gnBCgRQAggIAZgBIgBgBIABAAIAAAAIABAAIARAAIABAAIAAABQA0ACANAhQAHARgBATQgBANgGAOQgNAfgeAdQgeAegsAfQgtAegrAXQgqAVgOAFIg2AQQgPAEgNAAQgXAAgVgMgABTh3QhBAPgzAeQiYBMACBhQAUA4BwgzQBxg2AjgbQAjgYAZgmQAagogIgSQgHgSgHgFQgHgFgVgCIgHAAQgTAAgYAIg");
	this.shape_1.setTransform(74.3,84.8);

	// Symbol 41
	this.instance = new lib.FIZ_FRONT_part_004("synched",0);
	this.instance.setTransform(34,35.6,1,1,-5.5,0,0,20.7,11.4);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AhQCvIAAgBIgBAAIAAAAIAAgBQghgRgGgFIgBgCIgBgCIAAgBIAAgBIACgDIABgBIAYgKIAAAAIAAgBIACgBIABgEQAHgOAEgRIAEgRIAGgdQAFgVADgWIAEgZIABgPIACgOQADgcAHgZQADgNAFgLIAFgOQAKgYASgPQAKgKAQgDQAMgBAMAAQATAAAPAOQAKAKAJAOQAPAUAHAbQADAOAAAPQAAASgDATQgEAZgHAUIgIAaIgBAEIgBACIgBAAQgLAbgLAWIgLARQgLASgOAQQgLAMgOAKIgLAHIgDABIAAABQgBABgCADIgCACIgDAEIgBABIgCAEIAAAAIAAABIgBABIACACIABADIAAAAIAAABIgCAEIgCAAIAAAAIgDABQgVAAgsgTg");
	this.shape_2.setTransform(86.4,59.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhbC/IAAAAIgBAAIAAgBIAAgBQghgQgGgGIgBgBIgBgCIAAgCIAAgBIACgCIABgBIAYgKIAAgBIAAgBIACgBIABgDIgCADIgWAMIgLgGIAKgWIALghQAGgTAEgRIAGgeQAEgSACgQIAEgfIACgVIAEgWIAGgXQACgLADgLQADgLAEgKQAHgRAMgPQAJgMAOgIQANgIANgDQAGgDAHAAIAYADQARADAQAJQARAJALAOQAJAJAHALQAHAKAFALQAHASADASQADASgCARQgBARgFAXIgHAhQgDAOgGAMIgKAaIgIASIgKAUIgQAcQgKAPgOAMIgWATQgNAKgOAIQgJAGABgEQgJgCgBgCIgCAEIAAABIAAABIgBABIACABIABADIAAABIAAAAIgCAEIgCAAIAAABIgDABQgVAAgsgUgAgIC2IAAAAQgDABgCADIADgCIAEgDIgCABgABXA0QgLAbgMAWIACgDIAGgLIAGgMIAFgMIAFgMIgBABg");
	this.shape_3.setTransform(87.5,57.6);

	// Symbol 43
	this.instance_1 = new lib.FIZ_FRONT_part_003("synched",0);
	this.instance_1.setTransform(51.5,55.8,1,1,0,0,0,36.8,41.8);

	// Symbol 42
	this.instance_2 = new lib.FIZ_FRONT_part_002("synched",0);
	this.instance_2.setTransform(33.4,27.6,1,1,0,0,0,31.1,31.9);

	this.addChild(this.instance_2,this.instance_1,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2.2,101.4,103.1);


(lib.FIZ_FRONT_H2_COMPIDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 39
	this.instance = new lib.FIZ_23_part_027("single",0);
	this.instance.setTransform(56.6,193.1,1,1.203,0,0,0,2.9,4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({startPosition:0,_off:false},0).wait(2).to({startPosition:0},0).wait(1).to({y:196.7},0).wait(1).to({x:56.7,y:201.3},0).wait(1).to({x:56.8,y:206.9},0).wait(1).to({x:56.9,y:213.5},0).wait(17).to({startPosition:0},0).wait(1).to({y:211.4},0).wait(1).to({y:209.2},0).to({_off:true},4).wait(171));

	// FIZ_FRONT_part_028
	this.instance_1 = new lib.FIZ_23_part_021("single",0);
	this.instance_1.setTransform(142,192.4,1,1,0,0,0,3.5,4.6);

	this.instance_2 = new lib.FIZ_23_part_027("single",0);
	this.instance_2.setTransform(56.6,193.1,1,1.203,0,0,0,2.9,4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AGJAcIgmgLIACgPQAGgbAXgFQAegGAHAoQADAPgGAPIgbgGgAmmAdQgCgNAEgQQAHgdATgEQAZgEAEArQABAHgBAHQguAMgKABIgBgEg");
	this.shape.setTransform(96.1,204.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{y:193.1,x:56.6}},{t:this.instance_1,p:{y:192.4,x:142}}]}).to({state:[{t:this.instance_2,p:{y:193.7,x:56.6}},{t:this.instance_1,p:{y:193,x:142}}]},30).to({state:[{t:this.instance_2,p:{y:195,x:56.6}},{t:this.instance_1,p:{y:194.3,x:142.1}}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{y:195,x:56.6}},{t:this.instance_1,p:{y:194.3,x:142.1}}]},4).to({state:[{t:this.instance_2,p:{y:193.7,x:56.6}},{t:this.instance_1,p:{y:193,x:142}}]},1).to({state:[{t:this.instance_2,p:{y:193.1,x:56.6}},{t:this.instance_1,p:{y:192.4,x:142}}]},1).to({state:[{t:this.instance_1,p:{y:192.4,x:142}}]},2).to({state:[{t:this.instance_1,p:{y:192.4,x:142}}]},2).to({state:[{t:this.instance_1,p:{y:196.2,x:140.8}}]},1).to({state:[{t:this.instance_1,p:{y:201.1,x:139.1}}]},1).to({state:[{t:this.instance_1,p:{y:207,x:137.2}}]},1).to({state:[{t:this.instance_1,p:{y:214,x:134.8}}]},1).to({state:[{t:this.instance_1,p:{y:214,x:134.8}}]},17).to({state:[{t:this.instance_1,p:{y:211.9,x:134.8}}]},1).to({state:[{t:this.instance_1,p:{y:209.7,x:134.8}}]},1).to({state:[{t:this.instance_2,p:{y:209.2,x:56.9}},{t:this.instance_1,p:{y:209.7,x:134.8}}]},4).to({state:[{t:this.instance_2,p:{y:209.2,x:56.9}},{t:this.instance_1,p:{y:209.7,x:134.8}}]},53).to({state:[{t:this.shape}]},3).to({state:[]},2).to({state:[{t:this.instance_2,p:{y:193.7,x:56.6}},{t:this.instance_1,p:{y:193,x:142}}]},3).to({state:[{t:this.instance_2,p:{y:193.1,x:56.6}},{t:this.instance_1,p:{y:192.4,x:142}}]},1).to({state:[{t:this.instance_2,p:{y:193.7,x:56.6}},{t:this.instance_1,p:{y:193,x:142}}]},74).to({state:[{t:this.instance_2,p:{y:195,x:56.6}},{t:this.instance_1,p:{y:194.3,x:142.1}}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{y:195,x:56.6}},{t:this.instance_1,p:{y:194.3,x:142.1}}]},4).to({state:[{t:this.instance_2,p:{y:193.7,x:56.6}},{t:this.instance_1,p:{y:193,x:142}}]},1).to({state:[{t:this.instance_2,p:{y:193.1,x:56.6}},{t:this.instance_1,p:{y:192.4,x:142}}]},1).to({state:[{t:this.instance_2,p:{y:193.1,x:56.6}},{t:this.instance_1,p:{y:192.4,x:142}}]},2).wait(25));

	// FIZ_FRONT_part_027
	this.instance_3 = new lib.FIZ_23_part_026("single",0);
	this.instance_3.setTransform(169.5,212.6,1,1,0,0,0,-1.3,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_023
	this.instance_4 = new lib.FIZ_23_part_025("single",0);
	this.instance_4.setTransform(99,95.2,1,1,0,0,0,55.8,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_021
	this.instance_5 = new lib.FIZ_23_part_024("single",0);
	this.instance_5.setTransform(53.7,141.8,1,1,0,0,0,12.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({x:53.8,y:144.3},0).wait(1).to({y:147},0).wait(1).to({y:147.9},0).wait(4).to({y:147},0).wait(1).to({y:144.3},0).wait(1).to({x:53.7,y:140.3},0).wait(2).to({y:141.8},0).wait(2).to({startPosition:0},0).wait(1).to({y:142.4},0).wait(1).to({y:143.2},0).wait(1).to({y:144.1},0).wait(1).to({y:145.1},0).wait(17).to({startPosition:0},0).wait(1).to({y:143.5},0).wait(1).to({y:141.8},0).wait(4).to({startPosition:0},0).wait(53).to({x:53.6,y:143.5},0).wait(1).to({x:53.4,y:145.1},0).wait(2).to({x:52.9,y:150.8},0).wait(2).to({x:52.2,y:154.8},0).wait(3).to({x:53.8,y:144.3},0).wait(1).to({x:53.7,y:141.8},0).wait(74).to({x:53.8,y:144.3},0).wait(1).to({y:147},0).wait(1).to({y:147.9},0).wait(4).to({y:147},0).wait(1).to({y:144.3},0).wait(1).to({x:53.7,y:140.3},0).wait(2).to({y:141.8},0).wait(25));

	// FIZ_FRONT_part_020
	this.instance_6 = new lib.FIZ_23_part_023("single",0);
	this.instance_6.setTransform(146.9,141.6,1,1,0,0,0,13.8,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({y:144.1},0).wait(1).to({y:146.8},0).wait(1).to({x:147,y:147.7},0).wait(4).to({x:146.9,y:146.8},0).wait(1).to({y:144.1},0).wait(1).to({y:140.1},0).wait(2).to({y:141.6},0).wait(2).to({startPosition:0},0).wait(1).to({y:142.2},0).wait(1).to({y:143},0).wait(1).to({y:143.9},0).wait(1).to({y:144.9},0).wait(17).to({startPosition:0},0).wait(1).to({y:143.3},0).wait(1).to({y:141.6},0).wait(4).to({startPosition:0},0).wait(53).to({x:146.7,y:143.3},0).wait(1).to({x:146.6,y:144.9},0).wait(2).to({x:146.1,y:150.6},0).wait(2).to({x:145.3,y:154.6},0).wait(3).to({x:146.9,y:144.1},0).wait(1).to({y:141.6},0).wait(74).to({y:144.1},0).wait(1).to({y:146.8},0).wait(1).to({x:147,y:147.7},0).wait(4).to({x:146.9,y:146.8},0).wait(1).to({y:144.1},0).wait(1).to({y:140.1},0).wait(2).to({y:141.6},0).wait(25));

	// FIZ_FRONT_part_026
	this.instance_7 = new lib.FIZ_23_MOUTH_COMP("single",0);
	this.instance_7.setTransform(104.7,250.5,0.999,0.999,5.3,0,0,32.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({y:250.8},0).wait(1).to({y:251.2},0).wait(1).to({y:251.6},0).wait(1).to({y:252.2},0).wait(17).to({startPosition:0},0).wait(1).to({y:251.3},0).wait(1).to({y:250.5},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_025
	this.instance_8 = new lib.FIZ_23_part_022("single",0);
	this.instance_8.setTransform(86,192.3,1,1,8.5,0,0,11.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,y:192.9},0).wait(1).to({y:193.7},0).wait(1).to({y:194.6},0).wait(1).to({scaleX:1,scaleY:1,y:195.6},0).wait(17).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,y:194},0).wait(1).to({scaleX:1,scaleY:1,y:192.3},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_013
	this.instance_9 = new lib.FIZ_23_part_019("single",0);
	this.instance_9.setTransform(157.2,196.3,1.112,1,0,0,7.8,-1.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({y:196.9},0).wait(1).to({y:197.6},0).wait(1).to({y:198.5},0).wait(1).to({y:199.6},0).wait(17).to({startPosition:0},0).wait(1).to({y:197.9},0).wait(1).to({y:196.3},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_018
	this.instance_10 = new lib.FIZ_23_part_020("single",0);
	this.instance_10.setTransform(142.2,193.8,1,1,0,0,0,18.3,29.5);

	this.instance_11 = new lib.FIZ_23_part_018("single",0);
	this.instance_11.setTransform(55.7,193.8,1,1,0,0,0,16.7,28.6);

	this.instance_12 = new lib.Tween1("synched",0);
	this.instance_12.setTransform(99.7,193.8);

	this.instance_13 = new lib.Tween2("synched",0);
	this.instance_13.setTransform(99.7,197.1);

	this.instance_14 = new lib.Tween14("synched",0);
	this.instance_14.setTransform(99.7,193.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}}]}).to({state:[{t:this.instance_11,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}}]},30).to({state:[{t:this.instance_11,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:3,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:3,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}}]},4).to({state:[{t:this.instance_11,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1.028,y:192.9}},{t:this.instance_10,p:{startPosition:0,scaleY:1.028,y:193}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_12,p:{y:193.8}}]},2).to({state:[{t:this.instance_12,p:{y:194.4}}]},1).to({state:[{t:this.instance_12,p:{y:195.2}}]},1).to({state:[{t:this.instance_12,p:{y:196.1}}]},1).to({state:[{t:this.instance_13,p:{y:197.1}}]},1).to({state:[{t:this.instance_13,p:{y:197.1}}]},17).to({state:[{t:this.instance_13,p:{y:195.5}}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}}]},4).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}}]},53).to({state:[{t:this.instance_11,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}}]},3).to({state:[{t:this.instance_11,p:{startPosition:3,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:3,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_11,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}}]},3).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}}]},74).to({state:[{t:this.instance_11,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:3,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:3,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}}]},4).to({state:[{t:this.instance_11,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1.028,y:192.9}},{t:this.instance_10,p:{startPosition:0,scaleY:1.028,y:193}}]},1).to({state:[{t:this.instance_11,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}}]},2).wait(25));

	// FIZ_FRONT_part_024
	this.instance_15 = new lib.FIZ_23_part_017("single",0);
	this.instance_15.setTransform(188.5,158.8,1,1,0,0,0,23.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_024
	this.instance_16 = new lib.FIZ_23_part_016("single",0);
	this.instance_16.setTransform(48,196.6,0.919,1,0,0,172.5,2.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({x:48.1,y:197.2},0).wait(1).to({y:198},0).wait(1).to({y:198.9},0).wait(1).to({x:48,y:199.9},0).wait(17).to({startPosition:0},0).wait(1).to({x:48.1,y:198.3},0).wait(1).to({x:48,y:196.6},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_022
	this.instance_17 = new lib.FIZ_23_part_015("single",0);
	this.instance_17.setTransform(99.9,188.9,1,1,0,0,0,32.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({y:189.5},0).wait(1).to({y:190.2},0).wait(1).to({y:191.1},0).wait(1).to({y:192.2},0).wait(17).to({startPosition:0},0).wait(1).to({y:190.5},0).wait(1).to({y:188.9},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_019
	this.instance_18 = new lib.FIZ_23_part_014("single",0);
	this.instance_18.setTransform(110.6,313.7,1,1,0,0,0,81.6,223.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_MOUTH_COMP
	this.instance_19 = new lib.FIZ_23_part_013("single",0);
	this.instance_19.setTransform(40.5,207.4,1,1,0,0,0,18.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// FIZ_FRONT_part_017
	this.instance_20 = new lib.FIZ_23_part_012("single",0);
	this.instance_20.setTransform(32.6,142.2,1,1,0,0,0,23.4,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(53).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(74).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,4.7,202.7,323.8);


(lib.FIZ_FRONT_H2_COMPFoolingFred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_FRONT_part_028
	this.instance = new lib.FIZ_23_part_021("single",0);
	this.instance.setTransform(142,192.4,1,1,0,0,0,3.5,4.6);

	this.instance_1 = new lib.FIZ_23_part_027("single",0);
	this.instance_1.setTransform(56.6,193.1,1,1.203,0,0,0,2.9,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]}).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},3).to({state:[{t:this.instance_1,p:{y:195.1,x:56.6}},{t:this.instance,p:{y:194.4,x:142}}]},2).to({state:[]},1).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},28).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},1).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},2).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},20).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},1).to({state:[{t:this.instance_1,p:{y:194.6,x:56.7}},{t:this.instance,p:{y:193.9,x:142.2}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},7).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},32).to({state:[{t:this.instance_1,p:{y:193.1,x:56.6}},{t:this.instance,p:{y:192.4,x:142}}]},1).wait(11));

	// FIZ_FRONT_part_027
	this.instance_2 = new lib.FIZ_23_part_026("single",0);
	this.instance_2.setTransform(169.5,212.6,1,1,0,0,0,-1.3,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(32).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_023
	this.instance_3 = new lib.FIZ_23_part_025("single",0);
	this.instance_3.setTransform(99,95.2,1,1,0,0,0,55.8,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(30).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_021
	this.instance_4 = new lib.FIZ_23_part_024("single",0);
	this.instance_4.setTransform(53.7,141.8,1,1,0,0,0,12.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({startPosition:0},0).wait(3).to({x:53.8,y:147.1},0).wait(28).to({x:53.7,y:141.8},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({x:54,y:144.3},0).wait(1).to({x:53.5,y:149.1},0).wait(1).to({regY:9.4,rotation:15,x:53.8,y:153.4},0).wait(1).to({x:54,y:155.4},0).wait(7).to({regY:9.5,rotation:180,x:53.6,y:158.4},0).wait(28).to({x:53.8,y:154.6},0).wait(2).to({x:54,y:152.6},0).wait(2).to({rotation:0,x:53.6,y:146.7},0).wait(1).to({x:53.7,y:141.8},0).wait(11));

	// FIZ_FRONT_part_020
	this.instance_5 = new lib.FIZ_23_part_023("single",0);
	this.instance_5.setTransform(146.9,141.6,1,1,0,0,0,13.8,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({startPosition:0},0).wait(3).to({x:147,y:146.9},0).wait(28).to({x:146.9,y:141.6},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({x:147.1,y:144.1},0).wait(1).to({x:146.7,y:148.9},0).wait(1).to({rotation:-14.8,x:147,y:154.2},0).wait(1).to({x:147.2,y:156.2},0).wait(7).to({regX:13.9,rotation:-179.9,x:147.4,y:160.2},0).wait(28).to({x:147.7,y:156.4},0).wait(2).to({x:147.9,y:154.4},0).wait(2).to({regX:13.8,rotation:0,x:146.8,y:146.5},0).wait(1).to({x:146.9,y:141.6},0).wait(11));

	// FIZ_FRONT_part_026
	this.instance_6 = new lib.FIZ_23_MOUTH_COMP("single",0);
	this.instance_6.setTransform(104.7,250.5,0.999,0.999,5.3,0,0,32.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:55},0).wait(2).to({startPosition:4},0).wait(3).to({startPosition:55},0).wait(3).to({startPosition:4},0).wait(3).to({startPosition:55},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:55},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:11},0).wait(2).to({startPosition:8},0).wait(1).to({startPosition:9},0).wait(2).to({startPosition:8},0).wait(2).to({startPosition:13},0).wait(2).to({startPosition:14},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:15},0).wait(1).to({startPosition:14},0).wait(1).to({startPosition:16},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:11},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:7},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:18},0).wait(8).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:11},0).wait(2).to({startPosition:6},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(2).to({startPosition:12},0).wait(1).to({startPosition:13},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:19},0).wait(2).to({startPosition:18},0).wait(3).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_025
	this.instance_7 = new lib.FIZ_23_part_022("single",0);
	this.instance_7.setTransform(86,192.3,1,1,8.5,0,0,11.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(32).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_013
	this.instance_8 = new lib.FIZ_23_part_019("single",0);
	this.instance_8.setTransform(157.2,196.3,1.112,1,0,0,7.8,-1.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(32).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_018
	this.instance_9 = new lib.FIZ_23_part_020("single",0);
	this.instance_9.setTransform(142.2,193.8,1,1,0,0,0,18.3,29.5);

	this.instance_10 = new lib.FIZ_23_part_018("single",0);
	this.instance_10.setTransform(55.7,193.8,1,1,0,0,0,16.7,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,scaleY:1,y:193.8}}]}).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,scaleY:1,y:193.8}}]},3).to({state:[{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:2,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_10,p:{startPosition:8,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:7,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,scaleY:1,y:193.8}}]},28).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1.036,y:192.7}},{t:this.instance_9,p:{startPosition:0,scaleY:1.036,y:192.7}}]},1).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,scaleY:1,y:193.8}}]},20).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:2,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:3,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:3,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,scaleY:1,y:193.8}}]},7).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,scaleY:1,y:193.8}}]},32).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,scaleY:1,y:193.8}}]},1).wait(11));

	// FIZ_FRONT_part_024
	this.instance_11 = new lib.FIZ_23_part_017("single",0);
	this.instance_11.setTransform(188.5,158.8,1,1,0,0,0,23.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(32).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_024
	this.instance_12 = new lib.FIZ_23_part_016("single",0);
	this.instance_12.setTransform(48,196.6,0.919,1,0,0,172.5,2.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(33).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_022
	this.instance_13 = new lib.FIZ_23_part_015("single",0);
	this.instance_13.setTransform(99.9,188.9,1,1,0,0,0,32.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(33).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_part_019
	this.instance_14 = new lib.FIZ_23_part_014("single",0);
	this.instance_14.setTransform(110.6,313.7,1,1,0,0,0,81.6,223.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(3).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(33).to({startPosition:0},0).wait(11));

	// FIZ_FRONT_MOUTH_COMP
	this.instance_15 = new lib.FIZ_23_part_013("single",0);
	this.instance_15.setTransform(40.5,207.4,1,1,0,0,0,18.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(6).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(8));

	// FIZ_FRONT_part_017
	this.instance_16 = new lib.FIZ_23_part_012("single",0);
	this.instance_16.setTransform(32.6,142.2,1,1,0,0,0,23.4,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(6).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,4.7,202.7,323.8);


(lib.FIZ_FRONT_H2_COMPCookingStations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_FRONT_part_028
	this.instance = new lib.FIZ_23_part_021("single",0);
	this.instance.setTransform(142,192.4,1,1,0,0,0,3.5,4.6);

	this.instance_1 = new lib.FIZ_23_part_027("single",0);
	this.instance_1.setTransform(56.6,193.1,1,1.203,0,0,0,2.9,4);

	this.instance_2 = new lib.FIZ_FRONT_part_028("single",0);
	this.instance_2.setTransform(144.7,182,1,1,0,0,0,3.4,4.7);

	this.instance_3 = new lib.FIZ_FRONT_part_027("single",0);
	this.instance_3.setTransform(55.1,194,1,1,0,0,0,3.4,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]}).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:144.7,y:182}}]},6).to({state:[{t:this.instance_2,p:{x:144.8,y:175.6}}]},1).to({state:[{t:this.instance_2,p:{x:144.8,y:172.5}}]},1).to({state:[{t:this.instance_2,p:{x:144.8,y:175.6}}]},2).to({state:[{t:this.instance_2,p:{x:144.7,y:182.5}}]},19).to({state:[{t:this.instance_3},{t:this.instance_2,p:{x:132.8,y:193.6}}]},2).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:46.5,y:197.1}},{t:this.instance,p:{x:132.7,y:195.4}}]},14).to({state:[{t:this.instance_1,p:{x:46.6,y:195.9}},{t:this.instance,p:{x:132.8,y:194.1}}]},1).to({state:[{t:this.instance_1,p:{x:46.6,y:194.1}},{t:this.instance,p:{x:132.8,y:192.3}}]},1).to({state:[{t:this.instance_1,p:{x:46.6,y:194.1}},{t:this.instance,p:{x:132.8,y:192.3}}]},2).to({state:[{t:this.instance_2,p:{x:150.6,y:184.7}}]},38).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]},2).wait(14));

	// FIZ_FRONT_part_027
	this.instance_4 = new lib.FIZ_23_part_026("single",0);
	this.instance_4.setTransform(169.5,212.6,1,1,0,0,0,-1.3,27.7);

	this.instance_5 = new lib.FIZ_FRONT_part_027("single",0);
	this.instance_5.setTransform(67.7,182.7,1,1,0,0,0,3.4,4.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5,p:{x:67.7,y:182.7}}]},6).to({state:[{t:this.instance_5,p:{x:67.8,y:177.8}}]},1).to({state:[{t:this.instance_5,p:{x:67.8,y:174.8}}]},1).to({state:[{t:this.instance_5,p:{x:67.8,y:177.8}}]},2).to({state:[{t:this.instance_5,p:{x:67.7,y:182.7}}]},19).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5,p:{x:68.8,y:187.4}}]},38).to({state:[{t:this.instance_4}]},2).wait(14));

	// FIZ_FRONT_part_023
	this.instance_6 = new lib.FIZ_23_part_025("single",0);
	this.instance_6.setTransform(99,95.2,1,1,0,0,0,55.8,90.5);

	this.instance_7 = new lib.FIZ_FRONT_part_023("single",0);
	this.instance_7.setTransform(110.2,95.1,1,1,0,0,0,43.3,95.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_7}]},19).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},14).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},38).to({state:[{t:this.instance_6}]},2).wait(14));

	// FIZ_FRONT_part_021
	this.instance_8 = new lib.FIZ_23_part_024("single",0);
	this.instance_8.setTransform(53.7,141.8,1,1,0,0,0,12.6,9.5);

	this.instance_9 = new lib.FIZ_FRONT_part_021("single",0);
	this.instance_9.setTransform(60.5,135.5,1,1,0,0,0,13.4,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{x:53.7,y:141.8,rotation:0}}]}).to({state:[{t:this.instance_8,p:{x:53.6,y:147.9,rotation:0}}]},1).to({state:[{t:this.instance_8,p:{x:54,y:156.5,rotation:15}}]},1).to({state:[{t:this.instance_9,p:{x:60.5,y:135.5}}]},6).to({state:[{t:this.instance_9,p:{x:60.5,y:135.5}}]},1).to({state:[{t:this.instance_9,p:{x:60.5,y:135.5}}]},1).to({state:[{t:this.instance_9,p:{x:60.5,y:135.5}}]},2).to({state:[{t:this.instance_9,p:{x:60.4,y:141.6}}]},19).to({state:[{t:this.instance_8,p:{x:54.1,y:148.7,rotation:180}}]},2).to({state:[{t:this.instance_8,p:{x:53.4,y:151.1,rotation:180}}]},1).to({state:[{t:this.instance_8,p:{x:53.9,y:149.6,rotation:180}}]},14).to({state:[{t:this.instance_8,p:{x:54.2,y:145.9,rotation:180}}]},1).to({state:[{t:this.instance_8,p:{x:54.4,y:142.6,rotation:180}}]},1).to({state:[{t:this.instance_8,p:{x:54.4,y:143.5,rotation:180}}]},2).to({state:[{t:this.instance_9,p:{x:60.5,y:135.5}}]},38).to({state:[{t:this.instance_8,p:{x:53.7,y:141.8,rotation:0}}]},2).wait(14));

	// FIZ_FRONT_part_020
	this.instance_10 = new lib.FIZ_23_part_023("single",0);
	this.instance_10.setTransform(146.9,141.6,1,1,0,0,0,13.8,9.1);

	this.instance_11 = new lib.FIZ_FRONT_part_020("single",0);
	this.instance_11.setTransform(150.4,135.3,1,1,0,0,0,13.6,9.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{x:146.9,y:141.6,rotation:0}}]}).to({state:[{t:this.instance_10,p:{x:146.8,y:147.7,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{x:145.3,y:157.4,rotation:-14.9}}]},1).to({state:[{t:this.instance_11,p:{x:150.4,y:135.3}}]},6).to({state:[{t:this.instance_11,p:{x:150.4,y:135.3}}]},1).to({state:[{t:this.instance_11,p:{x:150.4,y:135.3}}]},1).to({state:[{t:this.instance_11,p:{x:150.4,y:135.3}}]},2).to({state:[{t:this.instance_11,p:{x:150.3,y:141.4}}]},19).to({state:[{t:this.instance_10,p:{x:147.3,y:148.5,rotation:180}}]},2).to({state:[{t:this.instance_10,p:{x:146.7,y:150.9,rotation:180}}]},1).to({state:[{t:this.instance_10,p:{x:147.2,y:149.4,rotation:180}}]},14).to({state:[{t:this.instance_10,p:{x:147.5,y:145.7,rotation:180}}]},1).to({state:[{t:this.instance_10,p:{x:147.6,y:142.4,rotation:180}}]},1).to({state:[{t:this.instance_10,p:{x:147.6,y:143.3,rotation:180}}]},2).to({state:[{t:this.instance_11,p:{x:150.4,y:135.3}}]},38).to({state:[{t:this.instance_10,p:{x:146.9,y:141.6,rotation:0}}]},2).wait(14));

	// FIZ_FRONT_part_026
	this.instance_12 = new lib.FIZ_23_MOUTH_COMP("single",0);
	this.instance_12.setTransform(104.7,250.5,0.999,0.999,5.3,0,0,32.3,12.1);

	this.instance_13 = new lib.FIZ_FRONT_part_026x("single",1);
	this.instance_13.setTransform(62.6,191.4,1,1,0,180,0,18.1,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{startPosition:0,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]}).to({state:[{t:this.instance_12,p:{startPosition:0,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:16,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:13,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:4,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_13,p:{startPosition:1,regY:29.2,scaleY:1,y:191.4}}]},2).to({state:[{t:this.instance_13,p:{startPosition:0,regY:29.2,scaleY:1,y:191.4}}]},1).to({state:[{t:this.instance_13,p:{startPosition:0,regY:29.3,scaleY:1.031,y:190.3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:0,regY:29.2,scaleY:1,y:191.4}}]},2).to({state:[{t:this.instance_13,p:{startPosition:1,regY:29.2,scaleY:1,y:191.4}}]},19).to({state:[{t:this.instance_12,p:{startPosition:8,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},3).to({state:[{t:this.instance_12,p:{startPosition:2,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:18,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},5).to({state:[{t:this.instance_12,p:{startPosition:6,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:7,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:2,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},3).to({state:[{t:this.instance_12,p:{startPosition:4,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:3,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:4,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:3,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:2,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_12,p:{startPosition:18,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},1).to({state:[{t:this.instance_12,p:{startPosition:18,regX:32.4,scaleY:0.912,x:104.8,y:252.4}}]},5).to({state:[{t:this.instance_12,p:{startPosition:0,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).to({state:[{t:this.instance_13,p:{startPosition:0,regY:29.2,scaleY:1,y:191.4}}]},15).to({state:[{t:this.instance_12,p:{startPosition:0,regX:32.3,scaleY:0.999,x:104.7,y:250.5}}]},2).wait(14));

	// FIZ_FRONT_part_025
	this.instance_14 = new lib.FIZ_23_part_022("single",0);
	this.instance_14.setTransform(86,192.3,1,1,8.5,0,0,11.8,2.6);

	this.instance_15 = new lib.FIZ_FRONT_part_026("single",1);
	this.instance_15.setTransform(151,191.4,1,1,180,0,0,18.1,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15,p:{startPosition:1,regY:29.2,scaleY:1,y:191.4}}]},6).to({state:[{t:this.instance_15,p:{startPosition:0,regY:29.2,scaleY:1,y:191.4}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,regY:29.3,scaleY:1.031,y:190.3}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,regY:29.2,scaleY:1,y:191.4}}]},2).to({state:[{t:this.instance_15,p:{startPosition:1,regY:29.2,scaleY:1,y:191.4}}]},19).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},14).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15,p:{startPosition:0,regY:29.2,scaleY:1,y:191.4}}]},38).to({state:[{t:this.instance_14}]},2).wait(14));

	// FIZ_FRONT_part_013
	this.instance_16 = new lib.FIZ_23_part_019("single",0);
	this.instance_16.setTransform(157.2,196.3,1.112,1,0,0,7.8,-1.2,4.2);

	this.instance_17 = new lib.FIZ_FRONT_part_018("single",0);
	this.instance_17.setTransform(175.2,205.8,1,1,0,0,180,23.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},6).to({state:[{t:this.instance_17}]},23).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},14).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},2).to({state:[{t:this.instance_17}]},38).to({state:[{t:this.instance_16}]},2).wait(14));

	// FIZ_FRONT_part_018
	this.instance_18 = new lib.FIZ_23_part_020("single",0);
	this.instance_18.setTransform(142.2,193.8,1,1,0,0,0,18.3,29.5);

	this.instance_19 = new lib.FIZ_23_part_018("single",0);
	this.instance_19.setTransform(55.7,193.8,1,1,0,0,0,16.7,28.6);

	this.instance_20 = new lib.FIZ_FRONT_part_018("single",0);
	this.instance_20.setTransform(41.2,205.3,1,1,0,0,0,23.5,22.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:0,scaleY:1,y:193.8}}]}).to({state:[{t:this.instance_19,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:1,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_19,p:{startPosition:3,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:3,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_20}]},6).to({state:[{t:this.instance_20}]},23).to({state:[{t:this.instance_19,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:2,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_19,p:{startPosition:6,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:6,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_19,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:1,scaleY:1,y:193.8}}]},14).to({state:[{t:this.instance_19,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:0,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_19,p:{startPosition:0,scaleY:1.032,y:192.8}},{t:this.instance_18,p:{startPosition:0,scaleY:1.032,y:192.9}}]},1).to({state:[{t:this.instance_19,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:0,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_20}]},38).to({state:[{t:this.instance_19,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_18,p:{startPosition:0,scaleY:1,y:193.8}}]},2).wait(14));

	// FIZ_FRONT_part_024
	this.instance_21 = new lib.FIZ_23_part_017("single",0);
	this.instance_21.setTransform(188.5,158.8,1,1,0,0,0,23.3,50.8);

	this.instance_22 = new lib.FIZ_FRONT_part_024("single",0);
	this.instance_22.setTransform(163.8,194.5,1.011,1,0,0,8.5,-1.2,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},6).to({state:[{t:this.instance_22}]},23).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},14).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},38).to({state:[{t:this.instance_21}]},2).wait(14));

	// FIZ_FRONT_part_024
	this.instance_23 = new lib.FIZ_23_part_016("single",0);
	this.instance_23.setTransform(48,196.6,0.919,1,0,0,172.5,2.6,4.5);

	this.instance_24 = new lib.FIZ_FRONT_part_024("single",0);
	this.instance_24.setTransform(47.5,194.8,1.007,1,0,0,173.1,2.6,4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23}]}).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},6).to({state:[{t:this.instance_24}]},23).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},14).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.instance_24}]},38).to({state:[{t:this.instance_23}]},2).wait(14));

	// FIZ_FRONT_part_022
	this.instance_25 = new lib.FIZ_23_part_015("single",0);
	this.instance_25.setTransform(99.9,188.9,1,1,0,0,0,32.5,5.7);

	this.instance_26 = new lib.FIZ_FRONT_part_022("single",0);
	this.instance_26.setTransform(107.7,191,1,1,0,0,0,37.4,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25}]}).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},6).to({state:[{t:this.instance_26}]},23).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},14).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_25}]},2).to({state:[{t:this.instance_26}]},38).to({state:[{t:this.instance_25}]},2).wait(14));

	// FIZ_FRONT_part_019
	this.instance_27 = new lib.FIZ_23_part_014("single",0);
	this.instance_27.setTransform(110.6,313.7,1,1,0,0,0,81.6,223.8);

	this.instance_28 = new lib.FIZ_FRONT_part_019("single",0);
	this.instance_28.setTransform(111.9,182.7,1,1,0,0,0,15.8,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27}]}).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},6).to({state:[{t:this.instance_28}]},23).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},14).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_27}]},2).to({state:[{t:this.instance_28}]},38).to({state:[{t:this.instance_27}]},2).wait(14));

	// FIZ_FRONT_MOUTH_COMP
	this.instance_29 = new lib.FIZ_23_part_013("single",0);
	this.instance_29.setTransform(40.5,207.4,1,1,0,0,0,18.3,22.4);

	this.instance_30 = new lib.FIZ_FRONT_MOUTH_COMP("single",3);
	this.instance_30.setTransform(109.3,243.7,1,1,0,0,0,31.1,10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29}]}).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30,p:{startPosition:3,x:109.3,y:243.7}}]},6).to({state:[{t:this.instance_30,p:{startPosition:2,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:1,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:13,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:11,x:109.3,y:243.7}}]},4).to({state:[{t:this.instance_30,p:{startPosition:3,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:1,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:28,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:1,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:5,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_30,p:{startPosition:13,x:109.3,y:243.7}}]},2).to({state:[{t:this.instance_30,p:{startPosition:13,x:109.3,y:243.7}}]},9).to({state:[{t:this.instance_30,p:{startPosition:5,x:109.3,y:243.7}}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},14).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_29}]},2).to({state:[{t:this.instance_30,p:{startPosition:0,x:110,y:249.8}}]},38).to({state:[{t:this.instance_29}]},2).wait(14));

	// FIZ_FRONT_part_017
	this.instance_31 = new lib.FIZ_23_part_012("single",0);
	this.instance_31.setTransform(32.6,142.2,1,1,0,0,0,23.4,46.5);

	this.instance_32 = new lib.FIZ_FRONT_part_017("single",0);
	this.instance_32.setTransform(111.2,304.3,1,1,0,0,0,111.2,216.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31}]}).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},6).to({state:[{t:this.instance_32}]},23).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},14).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_32}]},38).to({state:[{t:this.instance_31}]},2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,4.7,202.7,323.8);


(lib.FIZ_FRONT_H2_CO0MPHelloThere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_FRONT_part_028
	this.instance = new lib.FIZ_23_part_021("single",0);
	this.instance.setTransform(142,192.4,1,1,0,0,0,3.5,4.6);

	this.instance_1 = new lib.FIZ_23_part_027("single",0);
	this.instance_1.setTransform(56.6,193.1,1,1.203,0,0,0,2.9,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]}).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:55.1,y:191.7}},{t:this.instance,p:{x:138.5,y:191.4}}]},2).to({state:[{t:this.instance_1,p:{x:55.4,y:189.1}},{t:this.instance,p:{x:138.7,y:188.9}}]},1).to({state:[{t:this.instance_1,p:{x:55.4,y:189.1}},{t:this.instance,p:{x:138.7,y:188.9}}]},2).to({state:[{t:this.instance_1,p:{x:54.3,y:193.1}},{t:this.instance,p:{x:139.6,y:193.2}}]},11).to({state:[]},3).to({state:[{t:this.instance_1,p:{x:55,y:194.8}},{t:this.instance,p:{x:140.1,y:194.1}}]},9).to({state:[{t:this.instance_1,p:{x:55,y:194.8}},{t:this.instance,p:{x:140.1,y:194.1}}]},2).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]},1).to({state:[{t:this.instance_1,p:{x:55,y:194.8}},{t:this.instance,p:{x:140.1,y:194.1}}]},34).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:55,y:194.8}},{t:this.instance,p:{x:140.1,y:194.1}}]},4).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]},1).to({state:[{t:this.instance_1,p:{x:55,y:194.8}},{t:this.instance,p:{x:140.1,y:194.1}}]},28).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:55,y:194.8}},{t:this.instance,p:{x:140.1,y:194.1}}]},25).to({state:[{t:this.instance_1,p:{x:56.6,y:193.1}},{t:this.instance,p:{x:142,y:192.4}}]},1).wait(12));

	// FIZ_FRONT_part_027
	this.instance_2 = new lib.FIZ_23_part_026("single",0);
	this.instance_2.setTransform(169.5,212.6,1,1,0,0,0,-1.3,27.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_023
	this.instance_3 = new lib.FIZ_23_part_025("single",0);
	this.instance_3.setTransform(99,95.2,1,1,0,0,0,55.8,90.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_021
	this.instance_4 = new lib.FIZ_23_part_024("single",0);
	this.instance_4.setTransform(53.7,141.8,1,1,0,0,0,12.6,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:9.4,rotation:30,x:53,y:151.4},0).wait(1).to({regY:9.5,scaleX:1.01,scaleY:0.99,rotation:0,skewX:-138.7,skewY:-142,x:54.1,y:157.5},0).wait(2).to({scaleX:1,scaleY:1,skewX:0,skewY:0,x:53.6,y:138.7},0).wait(1).to({x:53.5,y:137.2},0).wait(2).to({x:53.6,y:138.7},0).wait(11).to({x:53.7,y:144.2},0).wait(1).to({x:53.5,y:146.2},0).wait(1).to({rotation:180,x:53.9,y:150.8},0).wait(1).to({x:53.7,y:153.3},0).wait(9).to({rotation:0,x:53.9,y:152.2},0).wait(2).to({x:53.8,y:148.9},0).wait(1).to({x:53.7,y:144.3},0).wait(1).to({y:141.8},0).wait(33).to({x:53.4,y:144.9},0).wait(1).to({x:53.8,y:146.6},0).wait(4).to({x:53.4,y:144.9},0).wait(1).to({x:53.7,y:140.6},0).wait(28).to({x:53.4,y:144.9},0).wait(1).to({x:53.6,y:137.5},0).wait(25).to({x:53.4,y:144.9},0).wait(1).to({x:53.7,y:141.8},0).wait(12));

	// FIZ_FRONT_part_020
	this.instance_5 = new lib.FIZ_23_part_023("single",0);
	this.instance_5.setTransform(146.9,141.6,1,1,0,0,0,13.8,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-29.8,x:146.2,y:151.3},0).wait(1).to({scaleX:1.01,rotation:0,skewX:135,skewY:144.3,x:142.9,y:157},0).wait(2).to({scaleX:1,skewX:0,skewY:0,x:146.8,y:137.7},0).wait(1).to({x:146.6,y:136.2},0).wait(2).to({x:146.8,y:137.7},0).wait(11).to({x:146.9,y:143.2},0).wait(1).to({x:146.7,y:145.2},0).wait(1).to({rotation:180,x:147.1,y:149.8},0).wait(1).to({x:146.9,y:152.3},0).wait(9).to({rotation:0,x:147,y:151.2},0).wait(2).to({x:146.9,y:147.8},0).wait(1).to({y:144.1},0).wait(1).to({y:141.6},0).wait(33).to({x:146.5,y:143.8},0).wait(1).to({x:147,y:146.4},0).wait(4).to({x:146.5,y:143.8},0).wait(1).to({x:146.9,y:140.4},0).wait(28).to({x:146.5,y:143.8},0).wait(1).to({x:146.8,y:137.3},0).wait(25).to({x:146.5,y:143.8},0).wait(1).to({x:146.9,y:141.6},0).wait(12));

	// FIZ_FRONT_part_026
	this.instance_6 = new lib.FIZ_23_MOUTH_COMP("single",0);
	this.instance_6.setTransform(104.7,250.5,0.999,0.999,5.3,0,0,32.3,12.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:39},0).wait(3).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(4).to({startPosition:27},0).wait(2).to({startPosition:24},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(8).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:12},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:28},0).wait(7).to({startPosition:12},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:18},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:12},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(6).to({startPosition:18},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:12},0).wait(2).to({startPosition:13},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:18},0).wait(3).to({startPosition:12},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_025
	this.instance_7 = new lib.FIZ_23_part_022("single",0);
	this.instance_7.setTransform(86,192.3,1,1,8.5,0,0,11.8,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_013
	this.instance_8 = new lib.FIZ_23_part_019("single",0);
	this.instance_8.setTransform(157.2,196.3,1.112,1,0,0,7.8,-1.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_018
	this.instance_9 = new lib.FIZ_23_part_020("single",0);
	this.instance_9.setTransform(142.2,193.8,1,1,0,0,0,18.3,29.5);

	this.instance_10 = new lib.FIZ_23_part_018("single",0);
	this.instance_10.setTransform(55.7,193.8,1,1,0,0,0,16.7,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,regY:29.5,scaleY:1,y:193.8}}]}).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:4,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:4,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:7,scaleY:1.065,y:191.5}},{t:this.instance_9,p:{startPosition:0,regY:29.6,scaleY:1.065,y:191.7}}]},2).to({state:[{t:this.instance_10,p:{startPosition:7,scaleY:1.117,y:190}},{t:this.instance_9,p:{startPosition:0,regY:29.6,scaleY:1.117,y:190.2}}]},1).to({state:[{t:this.instance_10,p:{startPosition:7,scaleY:1.065,y:191.5}},{t:this.instance_9,p:{startPosition:0,regY:29.6,scaleY:1.065,y:191.7}}]},2).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,regY:29.5,scaleY:1,y:193.8}}]},11).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:2,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:8,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:7,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:2,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:2,regY:29.5,scaleY:1,y:193.8}}]},9).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},2).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},34).to({state:[{t:this.instance_10,p:{startPosition:3,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:3,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},4).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},28).to({state:[{t:this.instance_10,p:{startPosition:8,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:7,regY:29.5,scaleY:1,y:193.8}}]},1).to({state:[{t:this.instance_10,p:{startPosition:1,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:1,regY:29.5,scaleY:1,y:193.8}}]},25).to({state:[{t:this.instance_10,p:{startPosition:0,scaleY:1,y:193.8}},{t:this.instance_9,p:{startPosition:0,regY:29.5,scaleY:1,y:193.8}}]},1).wait(12));

	// FIZ_FRONT_part_024
	this.instance_11 = new lib.FIZ_23_part_017("single",0);
	this.instance_11.setTransform(188.5,158.8,1,1,0,0,0,23.3,50.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_024
	this.instance_12 = new lib.FIZ_23_part_016("single",0);
	this.instance_12.setTransform(48,196.6,0.919,1,0,0,172.5,2.6,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_022
	this.instance_13 = new lib.FIZ_23_part_015("single",0);
	this.instance_13.setTransform(99.9,188.9,1,1,0,0,0,32.5,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_019
	this.instance_14 = new lib.FIZ_23_part_014("single",0);
	this.instance_14.setTransform(110.6,313.7,1,1,0,0,0,81.6,223.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_MOUTH_COMP
	this.instance_15 = new lib.FIZ_23_part_013("single",0);
	this.instance_15.setTransform(40.5,207.4,1,1,0,0,0,18.3,22.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

	// FIZ_FRONT_part_017
	this.instance_16 = new lib.FIZ_23_part_012("single",0);
	this.instance_16.setTransform(32.6,142.2,1,1,0,0,0,23.4,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(34).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(28).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.2,4.7,202.7,323.8);


(lib.FIZ_23_part_007 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FIZ_23_part_006("synched",0);
	this.instance.setTransform(31.4,90.6,0.963,1,0,0,-5.5,21.7,19.6);

	this.instance_1 = new lib.FIZ_23_part_005("synched",0);
	this.instance_1.setTransform(70.5,40.3,1,1,0,0,0,17.3,14.6);

	this.instance_2 = new lib.FIZ_23_part_004("synched",0);
	this.instance_2.setTransform(16.4,74.6,1,1,4.5,0,0,13.6,33.1);

	this.instance_3 = new lib.FIZ_23_part_003("synched",0);
	this.instance_3.setTransform(47.4,71.4,1,1,0,0,0,36.4,39.2);

	this.instance_4 = new lib.FIZ_23_tophat("synched",0);
	this.instance_4.setTransform(71.8,33.6,1,1,0,0,0,35.6,33.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(55.2,109.6);

	this.addChild(this.shape,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.4,0,105,112.1);


(lib.FIZ_FRONT_COMPIDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_23_part_040
	this.instance = new lib.FIZ_23_part_010copy2v("single",53);
	this.instance.setTransform(112,332,1,1,-0.2,0,0,76.6,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgFBhQgLgGgMgLQgLgKgNglIABAAQADgEAAgEQAAgJgXgNIAAgBQAGgGAIgEQAPgLARAEQAhAHATAdQAOAXAEAeQACAJgGAJQgIAIgLADQgTgBgIgFgAAAgbQgZgMgbAHQgSAGgMAMQAPgkAegVQAagBAXAKIACABIAIAGQAMAHAIANQAJAOADATQABAGgBAJQAAAHgCAIQgQgkgkgTgABBgjIgDgGQgSgbgfgMQgQgIgTgBQASgNARAAQAeACAZARQALAHAEAOQADAPgJAMIgDAGIgFAGQgBgGgDgGg");
	this.shape.setTransform(109.4,350.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHB1QgTgGgOgUQgNgTgBgjIABgBQANAkALAKQAMALAKAGQAIAGATAAQAMgCAIgIQAFgKgBgJQgEgdgPgYQgTgdghgHQgRgEgPALQgIAFgGAGIAAAAIgWgKIgDgBIARggQAUglAbgZQAbgZAjAJIAJADQASADAOALIAKAKIAJAKQASAUgMAaIgBADIgEAKQgGANgMAHQACAOgBAPQgCAMgKAGIACAbQABAPgHAMQgEAHgHAFIABgBQgYAHgQAAQgHAAgGgCgAAAgYQAjASAPAlQADgIAAgIQABgIgCgHQgCgSgKgOQgHgNgMgHIgJgGIgCgBQgWgLgbABQgeAVgPAkQAMgMATgFQAKgDAKAAQARAAAQAIgAgYhWQAUABAQAIQAeALASAbIADAGQADAGACAHIAEgHIAEgGQAJgLgEgPQgDgPgMgHQgYgRgegBQgSAAgSANg");
	this.shape_1.setTransform(109.5,350.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgFBhQgLgGgMgLQgLgKgNgkIABgBQADgEAAgEQAAgJgXgNIAAgBQAGgGAIgEQAPgLARAEQAhAHATAdQAOAXAEAeQACAJgGAJQgIAIgLADQgTgBgIgFgAAAgbQgZgMgbAHQgSAGgMAMQAPgkAegVQAagBAXAKIACABIAIAGQAMAHAIANQAJAOADATQABAGgBAJQAAAHgCAIQgQgkgkgTgABBgjIgDgGQgSgbgfgMQgQgIgTgBQASgNARAAQAeACAZARQALAHAEAOQADAPgJAMIgDAGIgFAGQgBgGgDgGg");
	this.shape_2.setTransform(109.3,348.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgHB1QgTgGgOgUQgNgTgBgjIABgBQANAkALAKQAMALAKAGQAIAGATAAQAMgCAIgIQAFgKgBgJQgEgdgPgYQgTgdghgHQgRgEgPALQgIAFgGAGIAAAAQgJgFgNgFIgDgBQAIgQAJgQQAUglAbgZQAbgZAjAJIAJADQASADAOALIAKAKIAJAKQASAUgMAaIgBADIgEAKQgGANgMAHQACAOgBAPQgCAMgKAGIACAbQABAPgHAMQgEAHgHAFIABgBQgYAHgQAAQgHAAgGgCgAAAgYQAjASAPAlQADgIAAgIQABgIgCgHQgCgSgKgOQgHgNgMgHIgJgGIgCgBQgWgLgbABQgeAVgPAkQAMgMATgFQAKgDAKAAQARAAAQAIgAgYhWQAUABAQAIQAeALASAbIADAGQADAGACAHIAEgHIAEgGQAJgLgEgPQgDgPgMgHQgYgRgegBQgSAAgSANg");
	this.shape_3.setTransform(109.4,348);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgLQgKgIgMgdIAEgDQACgEAAgEQAAgKgegRIABgBQAGgGAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAJgFAJQgIAJgMADQgTAAgIgGgAAAgaQgZgMgbAIQgTAFgLANQAOgkAegXQAagBAXALIACAAIAJAHQAMAGAHANQAKAOADATQABAGAAAJQAAAHgDAIQgQgkgkgSgABAgjIgDgHQgSgagfgMQgQgHgUgBQASgNASAAQAeABAZARQALAGAEAOQADAPgIANQgBACgDADIgEAHIgFgMg");
	this.shape_4.setTransform(108.7,344.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFB1QgTgFgOgUQgMgQgCgdIADgBQAMAcAKAJQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAEgGAGIgBACIgZgLIARghQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAHQADAOgBAOQgCANgKAGIACAbQACAOgHAMIgGAJQgeAKgRAAQgFAAgFgCgAAAgXQAjASAQAkQADgIAAgIQAAgIgBgHQgDgSgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDALAAQAQAAAQAIgAgZhVQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_5.setTransform(108.8,344.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgKQgLgKgMgfQACgDAAgGQAAgLgdgJIAFgIQAGgFAHgFQAQgLARAEQAhAGATAdQAPAXAEAdQACAJgFAKQgIAIgMACQgTAAgIgFgAAAgaQgZgNgbAIQgTAGgLAMQAOgkAegVQAagCAXALIACABIAJAFQAMAIAHAMQAKAOADATQABAGAAAIQAAAIgDAIQgQgkgkgSgABAgkIgDgFQgSgbgfgLQgQgIgUgBQASgNASgBQAeACAZAQQALAIAEANQADAQgIALQgBADgDADIgEAHIgFgNg");
	this.shape_6.setTransform(108.7,343.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCBzQgTgGgOgTQgMgRgDgeIADgDQAMAgALAJQAMAKAKAGQAIAGATAAQAMgDAIgIQAFgJgCgKQgEgdgPgXQgTgdghgGQgRgEgQALQgHAFgGAGIgFAHIgagGIgBAAQALgVAMgWQAUgmAagZQAbgaAjAJIAJACQASADAOALIAKAKIAJAKQASAUgKAaIgCADIgEAKQgGANgMAIQADANgBAPQgCANgKAFIACAbQACAPgHAMQgFAJgJAGIgZAIQgJgBgPgFgAABgaQAlASAQAkQADgIAAgHQAAgJgBgGQgDgTgKgOQgHgMgMgHIgJgGIgCgBQgXgKgaABQgeAWgOAkQALgNATgFQAKgDALAAQAQAAAOAHgAgWhYQAUABAQAIQAfALASAbIADAGIAFAMIAEgHQADgCABgDQAIgMgDgPQgEgOgLgHQgZgRgegBQgSAAgSANg");
	this.shape_7.setTransform(108.5,343.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgLQgLgJgNghQADgEAAgEQAAgFgLgJQgIgFgJgCIAEgFQAGgGAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAJgFAJQgIAJgMADQgTAAgIgGgAAAgaQgZgMgbAIQgTAFgLANQAOgkAegXQAagBAXALIACAAIAJAHQAMAGAHANQAKAOADATQABAGAAAJQAAAHgDAIQgQgkgkgSgABAgkIgDgGQgSgagfgMQgQgHgUgBQASgNASAAQAeABAZARQALAGAEAPQADAOgIAMQgBADgDADIgEAHIgFgNg");
	this.shape_8.setTransform(108.8,345.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDB0QgTgFgOgUQgNgSgCggIABgBIABgBQANAhALAKQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAFgGAFIgEAFIgKgBQgDAAgNgHQAKgTALgUQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAIQADANgBAOQgCANgKAGIACAbQACAOgHAMQgHANgPAHIgPABQgQAAgKgEgAAAgYQAlASAQAkQADgIAAgIQAAgIgBgGQgDgTgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDALAAQAQAAAOAIgAgXhWQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_9.setTransform(108.7,345.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgLQgKgJgMgdQAGgDAAgIQAAgJgHgDIgZgKIADgFQAGgGAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAKgFAIQgIAJgMADQgTAAgIgGgAAAgaQgZgNgbAJQgTAFgLANQAOgkAegXQAagBAXALIACAAIAJAGQAMAIAHAMQAKAOADATQABAGAAAJQAAAHgDAIQgQgkgkgSgABAgkIgDgGQgSgagfgMQgQgHgUgBQASgNASAAQAeABAZARQALAGAEAOQADAPgIAMQgBADgDADIgEAHIgFgNg");
	this.shape_10.setTransform(108.8,346.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgEBzQgTgFgOgUQgMgRgDgeIAEgBQALAeALAJQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAFgGAFIgDAFIgLgEIgOgGIATglQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAIQADANgBAOQgCANgKAGIACAbQACAOgHAMQgFAJgIAGIgMAFQgIADgIAAQgJgBgNgFgAAAgZQAkASAQAkQADgIAAgIQAAgIgBgGQgDgTgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDALAAQAQAAAPAIgAgYhXQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_11.setTransform(108.8,346.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgKQgMgLgOgmQAEgFAAgEQAAgNgNgCIgLgDIABgCQAGgFAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAJgFAJQgIAJgMACQgTABgIgGgAAAgaQgZgMgbAHQgTAGgLAMQAOgjAegWQAagBAXAKIACAAIAJAHQAMAGAHANQAKAOADATQABAGAAAIQAAAIgDAIQgQgkgkgSgABAgjIgDgHQgSgagfgLQgQgIgUgBQASgNASgBQAeACAZAQQALAIAEAOQADAPgIAMQgBADgDACIgEAHIgFgMg");
	this.shape_12.setTransform(108.8,346.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgEB0QgTgFgOgUQgOgUgBglQAOAmAMAKQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAFgGAFIgBACQgRgFgIgCIgBgBIASgkQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAIQADANgBAOQgCANgKAGIACAbQACAOgHAMQgHANgPAHIgPABQgQAAgKgEgAAAgYQAkASAQAkQADgIAAgIQAAgIgBgGQgDgTgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDAKAAQARAAAPAIgAgYhWQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_13.setTransform(108.8,346.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgLQgKgJgMgdQAEgEAAgHQAAgIgXgPIgFgDIABgCQAGgFAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAKgFAIQgIAJgMACQgTABgIgGgAAAgaQgZgMgbAHQgTAGgLAMQAOgjAegWQAagBAXAKIACAAIAJAHQAMAHAHAMQAKAOADATQABAGAAAIQAAAIgDAIQgQgkgkgSgABAgjIgDgHQgSgagfgMQgQgHgUgBQASgNASAAQAeABAZARQALAGAEAPQADAOgIANQgBADgDACIgEAHIgFgMg");
	this.shape_14.setTransform(108.8,346.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFB0QgTgFgOgUQgMgRgDgdIADgCQAMAeALAJQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAFgGAFIgBACIgYgMIAQggQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAIQADANgBAOQgCANgKAGIACAbQACAOgHAMQgHANgPAHIgPABQgQAAgKgEgAAAgYQAjASAQAkQADgIAAgIQAAgIgBgGQgDgTgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDAKAAQARAAAQAIgAgZhWQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_15.setTransform(108.9,345.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgLQgKgIgMgdQADgEAAgEQAAgFgegVIAEgFQAGgGAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAJgFAJQgIAJgMADQgTAAgIgGgAAAgaQgZgMgbAIQgTAFgLANQAOgkAegXQAagBAXALIACAAIAJAHQAMAGAHANQAKAOADATQABAGAAAJQAAAHgDAIQgQgkgkgSgABAgkIgDgGQgSgagfgMQgQgHgUgBQASgNASAAQAeABAZARQALAGAEAPQADAOgIAMQgBADgDADIgEAHIgFgNg");
	this.shape_16.setTransform(108.8,345.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgFB0QgSgFgPgUQgLgQgDgbIACgBIACgCQALAcAKAJQAMALAKAGQAJAFATAAQALgCAIgJQAFgJgBgJQgEgdgPgXQgUgdghgHQgRgDgPALQgIAFgFAFIgFAGIgDgCIgTgLIARgjQAUgmAbgZQAagZAkAJIAIACQASADAOAKIALALIAJAKQASAUgLAaIgBADIgEAKQgGANgMAIQADANgCAOQgBANgKAGIACAbQACAOgHAMQgIANgOAHIgPABQgRAAgKgEgAAAgYQAkASAQAkQACgIAAgIQABgIgCgGQgCgTgKgOQgIgNgMgHIgJgGIgBAAQgXgLgbABQgdAWgPAkQAMgMASgGQALgDAKAAQARAAAPAIgAgYhWQAUABAQAHQAeAMATAaIADAGIAFANIAEgHQACgDABgDQAJgMgEgPQgDgOgMgHQgYgQgfgCQgRABgSANg");
	this.shape_17.setTransform(108.8,345.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgKQgLgKgMgeIABgCQADgEAAgEQAAgMgXgHIgHgCIAEgHQAGgFAHgFQAQgLARADQAhAHATAdQAPAXAEAdQACAKgFAIQgIAJgMACQgTABgIgGgAAAgaQgZgNgbAIQgTAGgLAMQAOgjAegXQAaAAAXAKIACAAIAJAHQAMAHAHAMQAKAOADATQABAGAAAIQAAAIgDAIQgQgkgkgSgABAgjIgDgHQgSgagfgMQgQgHgUgBQASgNASAAQAeABAZARQALAGAEAPQADAOgIANQgBADgDACIgEAHIgFgMg");
	this.shape_18.setTransform(108.7,344.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgDB0QgTgFgOgUQgMgRgDgdIADgDQAMAfALAJQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAFgGAFIgEAGIgagIQAKgUALgUQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAIQADANgBAOQgCANgKAGIACAbQACAOgHAMQgHANgPAHIgPABQgQAAgKgEgAAAgYQAlASAQAkQADgIAAgIQAAgIgBgGQgDgTgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDALAAQAQAAAOAIgAgXhWQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_19.setTransform(108.6,344.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCC99").s().p("AgEBhQgKgGgMgKQgIgHgIgSQAEgCACgEQADgEAAgEQAAgKgagOIgQgIIAEgHQAGgFAHgFQAQgLARAEQAhAGATAdQAPAXAEAdQACAJgFAKQgIAIgMACQgTAAgIgFgAAAgaQgZgNgbAIQgTAGgLAMQAOgkAegVQAagCAXALIACABIAJAFQAMAIAHAMQAKAOADATQABAGAAAIQAAAIgDAIQgQgkgkgSgABAgkIgDgFQgSgbgfgLQgQgIgUgBQASgNASgBQAeACAZAQQALAIAEANQADAQgIALQgBADgDADIgEAHIgFgNg");
	this.shape_20.setTransform(108.7,343.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgDB1QgTgFgOgUQgKgOgDgVIAEACIADgBQAJASAIAHQAMALAKAGQAIAFATAAQAMgCAIgJQAFgJgCgJQgEgdgPgXQgTgdghgHQgRgDgQALQgHAEgGAGIgFAHIgYgLIAUgmQAUgmAagZQAbgZAjAJIAJACQASADAOAKIAKALIAJAKQASAUgKAaIgCADIgEAKQgGANgMAHQADAOgBAOQgCANgKAGIACAbQACAOgHAMQgEAIgHAGIADgEQgcAJgRAAQgHAAgDgCgAAAgXQAlASAQAkQADgIAAgIQAAgIgBgHQgDgSgKgOQgHgNgMgHIgJgGIgCAAQgXgLgaABQgeAWgOAkQALgMATgGQAKgDAKAAQARAAAOAIgAgXhVQAUABAQAHQAfAMASAaIADAGIAFANIAEgHQADgDABgDQAIgMgDgPQgEgOgLgHQgZgQgegCQgSABgSANg");
	this.shape_21.setTransform(108.6,343.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("Ag5CEQgLgHgHgMQggg6Acg8QAIgQAKgOQAGgHAHgFQAQgLARADQAhAHATAfQAPAVAEAdQACAJgFAJQgIAJgMACQgTAAgKgFQgIgGgMgLQgMgKgOgkQABAjAOAUQAOAUARAFQARAGAJAAQgCAYgNAVQgFAJgLAFQgLAEgLAAQgSAAgQgLgAAJhCQgYgNgbAIQgTAGgLAMQAOgkAegWQAagBAXALIACAAIAJAGQAMAHAHANQAKAOADATQABAIAAAIQAAAIgDAIQgQgmglgSgABKhMIgDgGQgSgagfgMQgSgHgSgBQAQgNAUgBQAeACAZAQQALAHAEAOQADAPgIAMQgBADgDADIgEAHIgFgNg");
	this.shape_22.setTransform(107.7,347.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhOCQIgIgGIAAACIgBgCIgHgPQgOgkABgnQABgjAHggQABgGACgFQALgZANgYQAUgmAbgZQAZgZAlAJIAIACQASADAOAKIALALIAJAKQASAUgLAaIgBADIgEAKQgGANgMAIQADAPgCAOQgBANgKAEIACAbQACAOgHAMQgIANgOAHIgCAPQgDAPgGAOIgIAOQgNAUgVAFQgKACgKAAQgbAAgYgSgAgxgvQgIAFgFAHQgLAOgHAQQgdA8AhA6QAHAMALAHQAaASAegLQAKgFAGgJQANgVABgYQgIAAgSgGQgQgFgPgUQgOgUgBgjQAOAkAMAKQAMALAIAGQALAFATAAQALgCAIgJQAFgJgBgJQgEgdgPgVQgUgfghgHIgIgBQgMAAgMAJgAAHhCQAmASAQAmQACgIAAgIQABgIgCgIQgCgTgKgOQgIgNgMgHIgJgGIgBAAQgXgLgbABQgdAWgPAkQAMgMASgGQALgDAKAAQAQAAAOAIgAgPiAQASABASAHQAeAMATAaIADAGIAFANIAEgHQACgDABgDQAJgMgEgPQgDgOgMgHQgYgQgfgCQgTABgQANg");
	this.shape_23.setTransform(107.9,347.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("Ag4CEQgLgHgHgMQghg6Adg9QAHgPALgOQAFgHAIgFQAPgMARAEQAhAGAUAfQAPAVAEAdQACAKgFAJQgIAIgMADQgTAAgKgGQgIgGgNgKQgMgLgNgkQAAAkAPAUQAOATARAGQASAGAIAAQgCAXgMAVQgGAJgLAFQgMAFgLAAQgRAAgQgLgAAJhDQgYgMgbAIQgSAGgMAMQAOgkAegWQAagBAYAKIABABIAJAGQAMAHAIAMQAKAOADATQABAIgBAIQAAAIgCAIQgQgmgmgSgABLhMIgDgGQgTgbgegLQgTgIgRgBQAQgNATAAQAeABAZAQQALAHAEAPQADAPgIALIgDAGIgEAHIgFgMg");
	this.shape_24.setTransform(109,347.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhNCQIgIgGIAAACIgBgBIgHgQQgOgkAAgnQABgjAHggIADgLIAYgxQAVgmAagZQAZgaAlAJIAIACQATADAOALIAKAKIAJAKQASAUgLAaIgBADIgEAKQgGANgLAIQACAPgBAOQgBANgLAEIADAbQABAPgGAMQgIANgOAHIgCAPQgDAPgGAOIgHANQgNAUgWAGQgKACgJAAQgcAAgYgSgAgwgvQgIAFgGAHQgKAOgHAPQgeA9AiA6QAHAMALAHQAaASAegMQALgFAFgJQANgVACgXQgJAAgSgGQgQgGgPgTQgOgUgBgkQAOAkAMALQAMAKAIAGQALAGATAAQALgDAIgIQAFgJgBgKQgFgdgPgVQgTgfghgGIgJgBQgMAAgLAJgAAIhDQAlASARAmQACgIAAgIQAAgIgBgIQgDgTgKgOQgHgMgNgHIgIgGIgCgBQgXgKgbABQgdAWgOAkQALgMATgGQAKgDAKAAQARAAAOAHgAgPiBQASABASAIQAfALASAbIADAGIAFAMIAEgHIADgGQAJgLgEgPQgEgPgKgHQgZgQgegBQgUAAgQANg");
	this.shape_25.setTransform(109.2,347.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC99").s().p("Ag7CCQgLgHgGgMQghg6Aeg8QAIgPAKgOQAGgHAIgFQAPgLARAEQAhAHATAfQAPAVAEAeQABAJgFAJQgIAJgMACQgTAAgKgGQgIgGgMgLQgMgLgNgkQAAAkAOAUQAOATARAGQARAGAJABQgDAXgMAVQgGAIgLAFQgLAFgKAAQgTAAgQgNgAAKhDQgYgMgbAHQgTAGgMAMQAPgkAegVQAbgBAWALIACABIAJAFQAMAHAHANQAKAOACATQACAIgBAJQAAAHgDAIQgPgmglgTgABLhLIgDgGQgSgbgegMQgSgHgSgCQAQgMAUgBQAeACAYARQAMAHADAOQAEAPgJAMIgEAGIgEAGQgCgGgDgGg");
	this.shape_26.setTransform(107.7,359);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhQCPIgJgGIABACIgCgCIgGgPQgOgkACgnQABgjAHggIAEgLQAMgZANgXQAVgmAbgZQAYgZAmAJIAIADQASADAOALIALAKIAIAKQASAVgLAZIgCAEIgEAJQgGANgMAIQADAPgCAPQgBALgLAFIACAcQACAOgHAMQgIANgOAGIgCAQQgEAOgGAOIgIANQgNAUgWAFQgJABgJAAQgcAAgYgSgAgwgwQgIAFgGAIQgLANgHAQQgeA8AgA6QAHAMALAHQAZATAfgLQAKgFAGgJQANgVACgXQgIAAgSgGQgQgGgOgUQgOgUgBgkQAOAlALAKQAMALAIAGQALAGATAAQALgCAIgIQAGgJgCgKQgEgdgOgWQgTgfghgHIgJgBQgMAAgLAIgAAIhCQAlASAQAnQACgIAAgIQABgIgBgIQgDgTgJgOQgIgNgMgHIgIgGIgCgBQgXgLgaABQgeAWgPAkQAMgNASgFQAKgDAKAAQARAAAOAIgAgNiAQARABASAIQAfAMASAbIADAFQADAGABAHIAFgHIADgFQAJgMgDgPQgEgPgLgHQgZgQgegCQgTAAgQANg");
	this.shape_27.setTransform(107.8,358.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AhgBvQgJgKgDgNQgQhCAugxQAMgNANgLQAIgFAIgDQASgGAQAIQAdAQAKAjQAIAZgEAdQgBAJgIAIQgKAFgLAAQgRgGgIgIQgIgJgJgNQgIgOgDgmQgKAiAJAXQAIAXAQALQAQAKAFADQgGAWgSARQgIAGgOACIgEAAQgdAAgSgWgAAXg9QgVgTgbAAQgTAAgPAJQAYgfAjgMQAYAGAVARIABABIAHAIQAKAKADAOQAGARgDASQgBAJgDAHQgCAHgFAGQgEgngfgcgABYg0IgBgGQgKgfgagTQgQgNgSgGQAVgIASAGQAdAJATAXQAJAKAAAPQgBAPgLAJIgGAEIgGAGIgBgOg");
	this.shape_28.setTransform(106.1,376.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag3CYQgngDgYggIgHgIIAAACIgBgCIgBgRQgEgnALgkQALggAQgfIAHgKIAlgnQAegfAfgRQAggRAhATIAIAFQARAIAKAOIAHANIAGALQAMAZgSAWIgCACIgHAJQgJALgOAEQgBAPgGAMQgFALgLADQgDANgCAOQgDAOgKAKQgLAKgQADQgCAHgEAHQgHANgHAMIgMALQgQAOgWAAIgEAAgAgkg7QgJADgHAFQgOALgMANQgtAxAPBCQAEANAIAKQAUAYAggCQAOgCAHgGQASgRAHgWQgGgDgPgKQgQgLgJgXQgIgXAKgiQACAmAJAOQAIANAJAJQAIAIAQAGQAMAAAKgFQAIgIABgJQAEgdgIgZQgKgjgegQQgJgFgJAAQgHAAgIADgAAXg9QAfAcAFAnQAEgGADgHQADgHABgJQACgSgFgRQgEgOgKgKIgHgIIgBgBQgVgRgYgGQgiAMgYAfQAOgJAUAAQAaAAAVATgAARh/QATAGAPANQAaATAKAfIACAGIABAOIAGgGIAFgEQALgJABgPQAAgPgIgKQgUgXgcgJQgIgCgIAAQgMAAgMAEg");
	this.shape_29.setTransform(106,376.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{rotation:-0.2,x:112,y:332,startPosition:53,regX:76.6}}]},70).to({state:[{t:this.instance,p:{rotation:-0.9,x:111.7,y:334.7,startPosition:54,regX:76.6}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.instance,p:{rotation:-2.5,x:110.9,y:342.5,startPosition:9,regX:76.7}}]},1).to({state:[{t:this.instance,p:{rotation:-2.5,x:110.9,y:343.1,startPosition:9,regX:76.7}}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},3).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},20).to({state:[{t:this.shape_25,p:{x:109.2,y:347.4}},{t:this.shape_24,p:{x:109,y:347.4}}]},1).to({state:[{t:this.shape_25,p:{x:109.5,y:346.3}},{t:this.shape_24,p:{x:109.3,y:346.3}}]},1).to({state:[{t:this.instance,p:{rotation:-2.4,x:111.4,y:345.8,startPosition:9,regX:76.7}}]},2).to({state:[{t:this.instance,p:{rotation:-2.4,x:111.4,y:345.8,startPosition:9,regX:76.7}}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[]},1).wait(170));

	// FIZ_FRONT_part_006
	this.instance_1 = new lib.FIZ_23_part_028copy2b("single",6);
	this.instance_1.setTransform(161,326.1,1.012,1.073,0,-1.2,0.8,12.5,7.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC99").s().p("AhZCDIgIgGIAAAAQgFgEgBgEQgBgUANgRIABgBQAVgcA1gWQAfgLAVgFIgCgGQgCgDgEAAQgWgDgcAKIgBAAQg3AWgXAcQgGgDgCgFQgCgsAggWQAHgGAKgFIAhgRQAegQAYgDIABAAIgCgDQgDgDgDAAIgPAAIgCABQgpAIgcAOQgMAAgSAGQgRAEgKAAQgTgBgJgHQgFgEABgIQADgYAbgPQAfgRAsgCQAqgCAUAHIAkAIQATAEAYADIAGABIACACIgBgCIgBgCQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQgRgLgcgPIgBAAIgdgHQA5gVAuAqIABABIAPAPQABAEAEAHIAKAZQAGATgCAnQgBApgSAXIAAABQgRAVgpgEQgxgFgPAGIAAAAIgVAGQgJABgdATQgYAPgOABIgHAAIgCgBg");
	this.shape_30.setTransform(154.1,358.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhYCYQgMAAgCgIIgFgEQgOgLAAgMQgBgVALgTQgQgJAAgOQgCgsAZgaQgNADgIAAIgBAAQgagCgLgKQgQgLAEgVQADggAlgUQAhgTAwgCQAcgCATACQABgDADgCIAMgFQBFgdA5A0IABAAIAAABQAQANACAHIABAAIAAACIAFAJIAAAAIALAbIAAABQAHAVgCAtQgCAvgUAcQgWAdg0gFQgsgEgNAEIgBABIgWAGQgHACgZAQQgdASgSAAIgHABIgCAAgAhZCDIACABIAHAAQAOgBAYgPQAdgTAJgBIAVgGIAAAAQAPgGAxAFQApAEARgVIAAgBQASgXABgpQACgngGgTIgKgZQgEgHgBgEIgPgPIgBgBQgugqg5AVIAdAHIABAAQAcAPARALQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIABACIABACIgCgCIgGgBQgYgDgTgEIgkgIQgUgHgqACQgsACgfARQgbAPgDAYQgBAIAFAEQAJAHATABQAKAAARgEQASgGAMAAQAcgOApgIIACgBIAPAAQADAAADADIACADIgBAAQgYADgeAQIghARQgKAFgHAGQggAWACAsQACAFAGADQAXgcA3gWIABAAQAcgKAWADQAEAAACADIACAGQgVAFgfALQg1AWgVAcIgBABQgNARABAUQABAEAFAEIAAAAIAIAGg");
	this.shape_31.setTransform(154.1,358.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC99").s().p("AhXCEIgIgGIAAAAQgFgDgBgFQgBgUAMgRIABgBQAVgcA0gWQAggMAUgGQAAgDgCgCQgCgDgEgBQgVgCgdAKIAAAAQg3AXgXAdQgHgDgBgFQgDgsAggXQAHgGAJgFIAigRQAdgRAYgDIACAAIgCgDQgEgDgDAAIgPAAIgCABQgpAIgbAPQgMAAgSAGQgSAFgJAAQgTgBgJgGQgGgFABgIQADgXAbgQQAfgRArgDQArgDATAGIAkAIQAUAFAYACIAGAAIACACIgBgCIgBgCQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgRgLgcgOIAAAAIgegHQA5gWAvAqIAAAAIAQAPQABAEAEAHIAKAZQAHASgBAoQgCAogRAYIAAABQgRAVgpgDQgxgEgPAGIAAAAQgOADgHADQgJACgcATQgYAPgPABIgGAAIgCgBg");
	this.shape_32.setTransform(154.3,356.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhkCSIgFgFQgOgKAAgNQgBgVAKgTQgQgIAAgPQgCgrAYgbQgNADgIAAIgBAAQgZgCgMgJQgPgMACgTQADgiAlgTQAhgUAwgDQAbgCATACQACgEADgCIALgFQBGgeA5A0IAAAAIABABQARANACAGIAAABIABABIAEAJIABAAIAKAcIAAAAQAIAVgBAtQgBAvgUAcQgWAeg0gEQgsgDgNADIgBABIgXAGQgGACgYAQQgeAUgSAAIgHABIgBAAIgCAAQgLAAgCgHgAhXCEIACABIAHgBQAOgBAZgPQAcgTAJgCQAGgDAPgDIgBAAQAQgGAxAFQApADAQgWIABAAQARgYABgoQABgogGgSIgKgaQgEgGgBgEIgQgPIAAgBQgvgqg5AWIAdAHIABAAQAcAPARAKQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABACIABACIgCgCIgGgBQgYgCgTgEIgkgIQgUgGgqADQgsACgeARQgbAQgDAYQgCAHAGAFQAJAGATACQAKgBARgFQASgFAMAAQAbgPAqgJIABAAIAPgBQAEAAADADIACADIgBAAQgYADgeARIghARQgKAGgHAGQgfAXADAsQABAEAHADQAWgdA3gWIABgBQAcgKAWADQADAAACAEQACACABADQgVAFgfAMQg1AWgVAdIAAAAQgNASACAUQAAAEAGAEIgBAAIAIAGg");
	this.shape_33.setTransform(154.2,356.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AhZCDIgIgGIAAAAQgFgEgBgFQgBgTANgSIAAAAQAWgcA1gWQAfgLAVgFIgCgGQgDgDgDgBQgWgCgcAJIgBAAQg3AWgXAdQgHgDgBgFQgCgsAfgWQAIgGAJgFIAigRQAegQAYgDIABAAIgCgDQgDgDgEAAIgPAAIgBABQgqAIgbAOQgMAAgSAFQgSAFgJAAQgTgBgJgHQgGgFABgHQAEgYAbgPQAfgRArgCQArgCATAGIAkAJQAUAFAYACIAGABIABACIAAgCIgBgDQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgRgLgcgPIAAAAIgdgHQA5gVAuAqIAAABIAQAPIAFALIAKAZQAGATgCAnQgBAogSAYIAAABQgRAVgpgEQgxgFgPAGIAAAAQgPADgGADQgJABgdATQgYAOgPABIgGABIgCgBg");
	this.shape_34.setTransform(154.8,364.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhYCYQgMAAgCgIIgFgEQgOgLAAgNQgBgUALgTQgQgJAAgPQgCgrAZgaQgNADgIAAIgBAAQgZgDgMgJQgPgMADgUQADghAlgTQAhgTAwgCQAcgCATACQABgDAEgCIALgFQBFgdA5A0IAAAAIACABQAQANABAHIABAAIABACIAEAJIABABIAKAbIAAAAQAHAVgBAtQgDAvgUAcQgWAdg0gFQgsgEgNAEIgBAAIgWAGQgHADgYAQQgeASgSAAIgHABIgCAAgAhZCDIACABIAHgBQAOgBAZgOQAcgTAJgBQAHgDAPgDIgBAAQAPgGAyAFQAoAEARgVIABgBQARgYACgoQACgngHgTIgKgZIgFgLIgPgPIAAgBQgvgqg5AVIAdAHIABAAQAcAPARALQgBAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIABADIABACIgCgCIgGgBQgYgCgTgFIgkgJQgTgGgrACQgsACgeARQgcAPgDAYQgBAHAGAFQAIAHATABQAKAAARgFQASgFAMAAQAcgOApgIIACgBIAPAAQADAAAEADIACADIgCAAQgYADgdAQIgiARQgKAFgHAGQgfAWACAsQABAFAHADQAXgdA3gWIAAAAQAdgJAVACQAEABACADIACAGQgUAFggALQg1AWgVAcIgBAAQgMASABATQAAAFAGAEIgBAAIAIAGg");
	this.shape_35.setTransform(154.7,364.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC99").s().p("AgxCTIgKgDIABgBQgHgCgBgFQgGgSAIgUIABgBQANghAugiQAbgTATgKIgDgDQgDgDgEABQgVACgZAQIgBAAQgwAjgPAiQgHgCgDgEQgNgqAZggQAFgFAIgHQAAgBAdgYQAagYAVgJIABAAIgDgCQgEgDgDABIgMAEIgBABQgpASgXAVQgLADgRAKQgPAJgJADQgTACgLgDQgGgDgBgIQgDgYAXgVQAagYApgNQApgNAWABIAjgBQAUAAAYgEIAGgBIACABIgBgBIgCgCQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgSgGgggIIAAAAIgcAAQAwgiA4AdIAAABIATALIAHAJIAQAWQALAQAIApQAIAlgKAbIAAABQgMAZgoAGQgxAIgNAJIAAAAIgVAMQgIAEgVAYQgUAVgOAEIgGADIgCgBg");
	this.shape_36.setTransform(157.8,380.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag7CjIgGgDQgQgHgDgMQgGgUAFgVQgRgFgEgOQgMgqARghQgMAGgHACIgBAAQgaAEgOgGQgRgHgCgSQgFghAegcQAcgbAugOQAagIATgDQAAgEADgCIAMgJQA6gtBEAkIABAAIAAABQATAIAEAGIAAAAIABACIAHAIIABAAIAQAYIABAAQAMASAKAuQAKAtgNAgQgOAhgzAJQgsAHgMAHIAAAAIgVAMQgIAEgTAWQgXAZgRAEIgGADIgCAAIgHABQgGAAgDgEgAAngDIADADQgTAKgbAUQguAigNAhIgBAAQgIAUAGATQABAEAHADIgBAAIAKADIACABIAGgCQAOgFAUgUQAVgZAIgEIAVgMIAAAAQANgJAxgHQAogHAMgZIAAAAQAKgbgIgmQgIgpgLgPIgQgXIgHgJIgTgLIAAAAQg4gegwAjIAcgBIAAAAQAgAIASAHQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACACIABABIgCgBIgGABQgYAEgUgBIgjABQgWAAgpAMQgpANgaAYQgXAWADAXQABAIAGADQALAEATgDQAJgDAPgIQARgKALgDQAXgVApgTIABAAIAMgEQADgBAEACIADADIgBAAQgVAIgaAYQgdAYAAABQgIAHgFAGQgZAfANAqQADAFAHABQAPghAwgkIABAAQAZgPAVgDIACAAQACAAADACg");
	this.shape_37.setTransform(157.8,380.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},69).to({state:[{t:this.instance_1,p:{skewX:-1.2,skewY:0.8,x:161,y:326.1,startPosition:6,regY:7.7,regX:12.5,scaleX:1.012,scaleY:1.073}}]},1).to({state:[{t:this.instance_1,p:{skewX:-1.9,skewY:0,x:160.5,y:328.3,startPosition:10,regY:7.7,regX:12.5,scaleX:1.012,scaleY:1.073}}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33,p:{x:154.2,y:356.3}},{t:this.shape_32,p:{x:154.3,y:356.2}}]},1).to({state:[{t:this.instance_1,p:{skewX:-3.4,skewY:-1.3,x:159.5,y:334.8,startPosition:9,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073}}]},1).to({state:[{t:this.instance_1,p:{skewX:-3.4,skewY:-1.3,x:159.5,y:335.3,startPosition:9,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073}}]},2).to({state:[{t:this.shape_33,p:{x:153.7,y:358.2}},{t:this.shape_32,p:{x:153.7,y:358.1}}]},2).to({state:[{t:this.shape_33,p:{x:153.7,y:358.4}},{t:this.shape_32,p:{x:153.7,y:358.4}}]},2).to({state:[{t:this.shape_33,p:{x:153.6,y:356.2}},{t:this.shape_32,p:{x:153.7,y:356.2}}]},2).to({state:[{t:this.shape_33,p:{x:153.6,y:355.2}},{t:this.shape_32,p:{x:153.7,y:355.2}}]},2).to({state:[{t:this.shape_33,p:{x:153.6,y:354.6}},{t:this.shape_32,p:{x:153.7,y:354.6}}]},1).to({state:[{t:this.shape_33,p:{x:153.6,y:355.4}},{t:this.shape_32,p:{x:153.7,y:355.4}}]},2).to({state:[{t:this.shape_33,p:{x:153.6,y:356.4}},{t:this.shape_32,p:{x:153.7,y:356.4}}]},2).to({state:[{t:this.shape_33,p:{x:153.7,y:357.6}},{t:this.shape_32,p:{x:153.7,y:357.6}}]},1).to({state:[{t:this.shape_33,p:{x:153.7,y:358}},{t:this.shape_32,p:{x:153.7,y:358}}]},1).to({state:[{t:this.shape_33,p:{x:153.6,y:356.2}},{t:this.shape_32,p:{x:153.7,y:356.2}}]},3).to({state:[{t:this.shape_33,p:{x:153.6,y:355.2}},{t:this.shape_32,p:{x:153.7,y:355.2}}]},2).to({state:[{t:this.shape_33,p:{x:153.6,y:354.6}},{t:this.shape_32,p:{x:153.7,y:354.6}}]},1).to({state:[{t:this.shape_33,p:{x:153.6,y:355.4}},{t:this.shape_32,p:{x:153.7,y:355.4}}]},2).to({state:[{t:this.shape_33,p:{x:153.6,y:356.4}},{t:this.shape_32,p:{x:153.7,y:356.4}}]},2).to({state:[{t:this.shape_33,p:{x:153.7,y:357.6}},{t:this.shape_32,p:{x:153.7,y:357.6}}]},1).to({state:[{t:this.shape_33,p:{x:153.7,y:358}},{t:this.shape_32,p:{x:153.7,y:358}}]},1).to({state:[{t:this.shape_33,p:{x:153.7,y:358}},{t:this.shape_32,p:{x:153.7,y:358}}]},20).to({state:[{t:this.instance_1,p:{skewX:-3.7,skewY:-1.7,x:159.6,y:334.5,startPosition:9,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073}}]},1).to({state:[{t:this.instance_1,p:{skewX:-3.7,skewY:-1.7,x:159.5,y:333.5,startPosition:9,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073}}]},1).to({state:[{t:this.instance_1,p:{skewX:-3.4,skewY:-1.2,x:160,y:338.1,startPosition:9,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073}}]},2).to({state:[{t:this.instance_1,p:{skewX:-3.4,skewY:-1.2,x:160,y:338.1,startPosition:9,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.instance_1,p:{skewX:2.9,skewY:0.5,x:161.4,y:327.6,startPosition:1,regY:7.5,regX:12.7,scaleX:1.104,scaleY:0.901}}]},1).to({state:[]},1).wait(169));

	// FIZ_FRONT_part_030
	this.instance_2 = new lib.FIZ_23_part_040("single",0);
	this.instance_2.setTransform(149.2,318.5,0.977,1,0,0,0,56.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(63).to({startPosition:0},0).wait(1).to({rotation:0.3,x:149.3,y:317.9},0).wait(1).to({rotation:0.8,x:149.5,y:317.4},0).wait(1).to({rotation:1,y:317.1},0).wait(3).to({regY:42.5,rotation:0.2,x:149.4,y:319.3},0).wait(1).to({rotation:-0.1,x:148.8,y:321.5},0).wait(1).to({rotation:-0.8,x:148.2,y:323.7},0).wait(1).to({regY:42.4,rotation:-1.6,x:147.8,y:326},0).wait(1).to({regY:42.3,rotation:-2.4,y:328.9},0).wait(1).to({x:147.2,y:330.5},0).wait(2).to({y:331.1},0).wait(2).to({y:330},0).wait(2).to({y:329.4},0).wait(43).to({startPosition:0},0).wait(1).to({regY:42.4,scaleX:0.98,rotation:-2.6,x:147.1,y:330.4},0).wait(1).to({scaleX:0.98,rotation:-3.2,x:147.2,y:331.3},0).wait(2).to({scaleX:0.98,rotation:-2.3,x:147.8,y:333.9},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.6,x:148.5,y:333.2},0).wait(1).to({regX:56.2,rotation:-1.1,x:149.1,y:332.4},0).wait(1).to({scaleX:0.98,rotation:-0.3,x:149.2,y:323.2},0).wait(1).to({rotation:0,x:149.3,y:317.6},0).wait(1).to({regX:56.1,x:149.2,y:315.8},0).wait(4).to({y:316.9},0).wait(2).to({y:318.5},0).wait(162));

	// FIZ_FRONT_part_029
	this.instance_3 = new lib.FIZ_23_part_039("single",0);
	this.instance_3.setTransform(134.7,322.7,1,1,0,0,0,41.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({startPosition:0},0).wait(1).to({rotation:0.3,x:134.8,y:321.9},0).wait(1).to({rotation:0.8,x:134.9,y:321.3},0).wait(1).to({regX:41.5,rotation:1,y:321},0).wait(3).to({regX:41.6,rotation:0.2,x:135,y:323.3},0).wait(1).to({regX:41.5,regY:9,rotation:-0.1,x:134.4,y:325.7},0).wait(1).to({regX:41.6,rotation:-0.8,x:134,y:328},0).wait(1).to({rotation:-1.6,x:133.5,y:330.5},0).wait(1).to({rotation:-2.4,y:333.6},0).wait(1).to({regX:41.7,rotation:0,skewX:-2.4,skewY:-0.5,x:133.1,y:335.3},0).wait(2).to({scaleX:1,skewY:1.4,y:335.8},0).wait(2).to({regX:41.6,regY:9.1,scaleX:1,skewY:0.6,x:133,y:334.1},0).wait(2).to({skewY:-0.2,y:333.5},0).wait(2).to({regX:41.8,regY:9,scaleX:1,skewX:-2.9,skewY:-2.2,y:334},0).wait(2).to({skewX:-3.3,skewY:-2.9},0).wait(1).to({skewY:-3.9},0).wait(2).to({regX:41.9,regY:9.2,skewX:-3.1,skewY:-3.2,x:133.1,y:334.2},0).wait(2).to({regX:41.8,regY:9,skewX:-2.9,skewY:-2.2,x:133,y:334},0).wait(1).to({skewX:-2.6,skewY:-1.2,x:133.2,y:333.4},0).wait(1).to({regX:41.6,regY:9.1,scaleX:1,skewX:-2.4,skewY:-0.2,x:133,y:333.5},0).wait(3).to({regX:41.8,regY:9,scaleX:1,skewX:-2.9,skewY:-2.2,y:334},0).wait(2).to({skewX:-3.3,skewY:-2.9},0).wait(1).to({skewY:-3.9},0).wait(2).to({regX:41.9,regY:9.2,skewX:-3.1,skewY:-3.2,x:133.1,y:334.2},0).wait(2).to({regX:41.8,regY:9,skewX:-2.9,skewY:-2.2,x:133,y:334},0).wait(1).to({skewX:-2.6,skewY:-1.2,x:133.2,y:333.4},0).wait(1).to({regX:41.6,regY:9.1,scaleX:1,skewX:-2.4,skewY:-0.2,x:133,y:333.5},0).wait(20).to({regY:9,scaleX:1,rotation:-2.4,skewX:0,skewY:0,y:334.2},0).wait(1).to({rotation:-2.6,y:335.2},0).wait(1).to({rotation:-3.2,y:336.2},0).wait(2).to({rotation:-2.3,x:133.5,y:338.6},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.6,x:134.2,y:337.8},0).wait(1).to({rotation:-1.1,x:134.8,y:336.8},0).wait(1).to({regX:41.7,rotation:-0.3,y:327.4},0).wait(1).to({regX:41.6,rotation:0,x:134.7,y:321.8},0).wait(1).to({regY:9.1,y:319.9},0).wait(4).to({y:321},0).wait(2).to({y:322.7},0).wait(162));

	// FIZ_FRONT_part_011
	this.instance_4 = new lib.FIZ_23_part_038("single",0);
	this.instance_4.setTransform(133.5,418.8,1,1,0,0,0,28.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(63).to({startPosition:0},0).wait(1).to({rotation:0.3,x:132.8,y:417.9},0).wait(1).to({rotation:0.8,x:132.3,y:417.4},0).wait(1).to({rotation:1,x:132,y:417.1},0).wait(3).to({rotation:0.2,x:133.3,y:419.4},0).wait(1).to({rotation:-0.1,x:133.9,y:421.8},0).wait(1).to({rotation:-0.8,x:134.6,y:424.3},0).wait(1).to({rotation:-1.6,x:135.3,y:426.7},0).wait(1).to({rotation:-2.4,x:136.7,y:429.8},0).wait(1).to({x:136.1,y:431.5},0).wait(2).to({y:432},0).wait(2).to({y:430.9},0).wait(2).to({y:430.4},0).wait(43).to({startPosition:0},0).wait(1).to({rotation:-2.6,x:136.8,y:431.4},0).wait(1).to({rotation:-3.2,x:137.5,y:432.3},0).wait(2).to({rotation:-2.3,x:136.5,y:434.8},0).wait(1).to({startPosition:0},0).wait(1).to({regY:4,rotation:-1.6,x:136.2,y:433.9},0).wait(1).to({rotation:-1.1,x:135.7,y:433.1},0).wait(1).to({regY:3.9,rotation:-0.3,x:134.5,y:423.6},0).wait(1).to({rotation:0,x:133.7,y:417.9},0).wait(1).to({x:133.5,y:416.1},0).wait(4).to({y:417.2},0).wait(2).to({y:418.8},0).wait(162));

	// FIZ_FRONT_H2_COMP
	this.instance_5 = new lib.FIZ_23_part_037("single",0);
	this.instance_5.setTransform(120.3,447.8,0.935,1,0,0,0,16.3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({rotation:-0.6,x:122.1,y:450.4},0).wait(1).to({rotation:-0.8,x:122.4,y:452.3},0).wait(1).to({regX:16.2,rotation:-1.1,x:122.6,y:454.2},0).wait(1).to({regX:16.3,rotation:-1.6,x:123.1,y:456.1},0).wait(1).to({rotation:-2.4,x:124.8,y:459.4},0).wait(1).to({x:124.3,y:461},0).wait(2).to({y:461.6},0).wait(2).to({y:460.5},0).wait(2).to({y:459.9},0).wait(43).to({startPosition:0},0).wait(1).to({regX:16.4,rotation:-2.6,x:125.3,y:460.4},0).wait(1).to({regX:16.3,rotation:-3.2,x:126,y:460.9},0).wait(2).to({regY:4.1,rotation:-2.3,x:124.7,y:463.3},0).wait(1).to({startPosition:0},0).wait(1).to({regX:16.2,rotation:-1.6,x:123.9,y:462.4},0).wait(1).to({regX:16.4,rotation:-1.1,x:123.3,y:461.3},0).wait(1).to({rotation:-0.3,x:121.7,y:452.3},0).wait(1).to({rotation:0,x:120.7,y:446.9},0).wait(1).to({regX:16.3,regY:4,x:120.3,y:445.1},0).wait(4).to({y:446.2},0).wait(2).to({y:447.8},0).wait(162));

	// FIZ_FRONT_part_012
	this.instance_6 = new lib.FIZ_23_part_035("single",0);
	this.instance_6.setTransform(148.9,446.8,1,1,0,0,0,12.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({rotation:-0.6,x:150.6,y:448.9},0).wait(1).to({rotation:-0.8,x:150.9,y:450.6},0).wait(1).to({rotation:-1.1,x:151.3,y:452.4},0).wait(1).to({rotation:-1.6,x:151.6,y:454.2},0).wait(1).to({rotation:-2.4,x:153.3,y:457.1},0).wait(1).to({x:152.8,y:458.7},0).wait(2).to({y:459.3},0).wait(2).to({y:458.2},0).wait(2).to({y:457.6},0).wait(43).to({startPosition:0},0).wait(1).to({rotation:-2.6,x:153.6,y:457.9},0).wait(1).to({rotation:-3.2,x:154.5,y:458.3},0).wait(2).to({rotation:-2.3,x:153.2,y:461},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.6,x:152.5,y:460.4},0).wait(1).to({rotation:-1.1,x:151.8,y:459.6},0).wait(1).to({rotation:-0.3,x:150.1,y:451},0).wait(1).to({rotation:0,x:149.2,y:445.8},0).wait(1).to({x:148.9,y:444},0).wait(4).to({y:445.1},0).wait(2).to({y:446.8},0).wait(162));

	// FIZ_FRONT_part_011
	this.instance_7 = new lib.FIZ_23_part_033("single",0);
	this.instance_7.setTransform(134.1,413.4,1,1,0,0,0,32,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(63).to({startPosition:0},0).wait(1).to({rotation:0.3,x:133.4,y:412.5},0).wait(1).to({regY:6.5,rotation:0.8,x:132.9,y:412},0).wait(1).to({rotation:1,x:132.7,y:411.6},0).wait(3).to({rotation:0.2,x:133.9,y:414},0).wait(1).to({rotation:-0.1,x:134.6,y:416.4},0).wait(1).to({regY:6.6,rotation:-0.8,x:135.1,y:418.9},0).wait(1).to({rotation:-1.6,x:135.7,y:421.3},0).wait(1).to({rotation:-2.4,x:137,y:424.4},0).wait(1).to({x:136.4,y:426.1},0).wait(2).to({y:426.6},0).wait(2).to({y:425.5},0).wait(2).to({y:425},0).wait(43).to({startPosition:0},0).wait(1).to({regX:32.1,rotation:-2.6,x:137.1,y:426},0).wait(1).to({regX:32,regY:6.7,rotation:-3.2,x:137.7,y:427},0).wait(2).to({rotation:-2.3,x:136.9,y:429.5},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-1.6,x:136.5,y:428.6},0).wait(1).to({regY:6.6,rotation:-1.1,x:136.1,y:427.6},0).wait(1).to({regY:6.7,rotation:-0.3,x:134.9,y:418.3},0).wait(1).to({regY:6.6,rotation:0,x:134.3,y:412.5},0).wait(1).to({x:134.1,y:410.7},0).wait(4).to({y:411.8},0).wait(2).to({y:413.4},0).wait(162));

	// FIZ_FRONT_part_006
	this.instance_8 = new lib.FIZ_23_part_028copy2b("single",1);
	this.instance_8.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(63).to({startPosition:1,_off:false},0).wait(1).to({skewX:-0.1,skewY:1.6,x:161.3,y:322.7},0).wait(1).to({regY:7.7,skewX:0,skewY:2,y:322.4},0).wait(1).to({regY:7.6,skewX:0.1,skewY:2.3,x:161.4,y:322.1},0).wait(3).to({regX:12.4,regY:7.7,scaleX:1.06,scaleY:1.02,skewX:-0.6,skewY:-0.1,x:161.5,y:324},0).to({_off:true},1).wait(62).to({regX:12.6,regY:7.8,scaleX:1.05,scaleY:1.04,skewX:0.5,skewY:1,x:161.2,y:322.6,_off:false},0).wait(1).to({regX:12.5,regY:7.6,scaleX:1.01,scaleY:1.07,skewX:-0.7,skewY:1.2,y:320.5},0).wait(4).to({y:321.6},0).wait(2).to({y:323.2},0).wait(162));

	// FIZ_FRONT_part_010
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgMBkQgYgDgYgGIgDgCIgDgEQgbgCgRgYQgIgMgDgSIgNgJQgKgGgGgJQgEgFgCgEIAAgJQAEgTAOgNQAHgGAIgEIATgHQAYgEBTghIAogEIAAADQgPAMgUAIIgPAJIgSAIIglAMQgUAGgTACQgfAHgGAgQASAOAYAGIAPACIAPAAQARgCAQgFQAVgGASgHIATgHQgbAagmANIgVAFIgUACIgVgEQADANALAJQAEAEAGACIALAFIAZAAQAqgGAlgRIArgSQgYAcgiAPIgPAGIgNAFIgQAEQAgAIAfgLIAPgFIAPgHIAcgUQAYgSAKgeQAMgjgOgkIgEgIIAAgBQAGgIADgHIADAEIAIAMQAMAdgDAfQgCAagOAYQgMATgRANQgTAOgUAMQgPAKgQACQgMADgNAAQgPAAgNgEg");
	this.shape_38.setTransform(161.1,401.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AgVBaIAPgEIAOgEIAPgHQAhgOAZgcIgrARQgmASgqAFIgYAAIgMgFQgFgCgFgEQgKgJgDgMIAUADIAUgBIAWgFQAlgOAcgaIgTAGQgTAIgUAGQgRAFgQADIgQgBIgPgBQgXgHgTgQQAGgeAggGQATgCATgHIAlgMIASgHIAQgJQAUgJAOgMQACAJAGAKQANAVAcAAQAWAAANgTIAFAIQANAkgLAjQgLAegXATIgdAUIgOAGIgPAGQgSAGgTAAQgMAAgOgEg");
	this.shape_39.setTransform(161,400.8);

	this.instance_9 = new lib.FIZ_23_part_032("single",0);
	this.instance_9.setTransform(129.6,423.8,1,1,0,0,0,23.4,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{rotation:0,x:129.6,y:423.8,regX:23.4,regY:111.2}},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.instance_9,p:{rotation:0,x:129.6,y:423.8,regX:23.4,regY:111.2}},{t:this.shape_38},{t:this.shape_39}]},63).to({state:[{t:this.instance_9,p:{rotation:0.3,x:128.9,y:423,regX:23.4,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:0.8,x:128.2,y:422.4,regX:23.3,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:1,x:128,y:421.9,regX:23.3,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:0.2,x:129.4,y:424.4,regX:23.3,regY:111.2}}]},3).to({state:[{t:this.instance_9,p:{rotation:-0.2,x:130.1,y:426.9,regX:23.3,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:-0.9,x:130.9,y:429.3,regX:23.4,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:-1.7,x:131.5,y:431.8,regX:23.3,regY:111.3}}]},1).to({state:[{t:this.instance_9,p:{rotation:-2.5,x:132.9,y:435.1,regX:23.3,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:-2.5,x:132.3,y:436.7,regX:23.3,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:-2.5,x:132.3,y:437.3,regX:23.3,regY:111.4}}]},2).to({state:[{t:this.instance_9,p:{rotation:-2.5,x:132.3,y:436.2,regX:23.3,regY:111.4}}]},2).to({state:[{t:this.instance_9,p:{rotation:-2.5,x:132.3,y:435.6,regX:23.3,regY:111.4}}]},2).to({state:[{t:this.instance_9,p:{rotation:-2.5,x:132.3,y:435.6,regX:23.3,regY:111.4}}]},43).to({state:[{t:this.instance_9,p:{rotation:-2.7,x:133.1,y:436.6,regX:23.4,regY:111.3}}]},1).to({state:[{t:this.instance_9,p:{rotation:-3.3,x:133.8,y:437.4,regX:23.3,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:-2.4,x:132.8,y:440,regX:23.3,regY:111.4}}]},2).to({state:[{t:this.instance_9,p:{rotation:-2.4,x:132.8,y:440,regX:23.3,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:-1.7,x:132.3,y:439,regX:23.2,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:-1.2,x:131.8,y:438.2,regX:23.3,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:-0.4,x:130.5,y:428.6,regX:23.3,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:0,x:129.9,y:423,regX:23.4,regY:111.4}}]},1).to({state:[{t:this.instance_9,p:{rotation:0,x:129.6,y:421,regX:23.4,regY:111.2}}]},1).to({state:[{t:this.instance_9,p:{rotation:0,x:129.6,y:422.1,regX:23.4,regY:111.2}}]},4).to({state:[{t:this.instance_9,p:{rotation:0,x:129.6,y:423.8,regX:23.4,regY:111.2}}]},2).wait(162));

	// FIZ_FRONT_part_007
	this.instance_10 = new lib.FIZ_23_part_029("single",0);
	this.instance_10.setTransform(153.7,415.3,1,1,0,0,0,-1.9,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(63).to({startPosition:0},0).wait(1).to({regY:12.1,rotation:0.3,x:153,y:414.6},0).wait(1).to({regY:12.2,rotation:0.8,x:152.4,y:414.2},0).wait(1).to({rotation:1,x:152.2,y:413.9},0).wait(3).to({rotation:0.2,x:153.5,y:416},0).wait(1).to({regX:-1.7,rotation:-0.1,x:154.2,y:418.2},0).wait(1).to({rotation:-0.8,x:154.8,y:420.4},0).wait(1).to({regX:-1.8,rotation:-1.6,x:155.4,y:422.5},0).wait(1).to({rotation:-2.4,x:156.6,y:425.4},0).wait(1).to({x:156.1,y:427.1},0).wait(2).to({y:427.6},0).wait(2).to({y:426.5},0).wait(2).to({y:426},0).wait(43).to({startPosition:0},0).wait(1).to({rotation:-2.6,x:156.7,y:426.8},0).wait(1).to({regX:-1.7,rotation:-3.2,x:157.4,y:427.6},0).wait(2).to({rotation:-2.3,x:156.6,y:430.4},0).wait(1).to({startPosition:0},0).wait(1).to({regX:-1.8,rotation:-1.6,x:156.2,y:429.7},0).wait(1).to({rotation:-1.1,x:155.7,y:429},0).wait(1).to({rotation:-0.3,x:154.6,y:419.8},0).wait(1).to({rotation:0,x:153.9,y:414.3},0).wait(1).to({x:153.7,y:412.6},0).wait(4).to({y:413.7},0).wait(2).to({y:415.3},0).wait(162));

	// FIZ_FRONT_part_006
	this.instance_11 = new lib.FIZ_23_part_028("single",1);
	this.instance_11.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFCC99").s().p("AhZCDIgIgGIAAAAQgFgEgBgEQgBgUANgRIABgBQAVgcA1gWQAfgLAVgFIgCgGQgCgDgEAAQgWgDgcAKIgBAAQg3AWgXAcQgGgDgCgFQgCgsAggWQAHgGAKgFIAhgRQAegQAYgDIABAAIgCgDQgDgDgDAAIgPAAIgCABQgpAIgcAOQgMAAgSAGQgRAEgKAAQgTgBgJgHQgFgEABgIQADgYAbgPQAfgRAsgCQAqgCAUAHIAkAIQATAEAYADIAGABIACACIgBgCIgBgCQgBAAAAAAQAAAAAAAAQAAABAAAAQAAAAABAAQgRgLgcgPIgBAAIgdgHQA5gVAuAqIABABIAPAPQABAEAEAHIAKAZQAGATgCAnQgBApgSAXIAAABQgRAVgpgEQgxgFgPAGIAAAAIgVAGQgJABgdATQgYAPgOABIgHAAIgCgBg");
	this.shape_40.setTransform(154.1,358.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhYCYQgMAAgCgIIgFgEQgOgLAAgMQgBgVALgTQgQgJAAgOQgCgsAZgaQgNADgIAAIgBAAQgagCgLgKQgQgLAEgVQADggAlgUQAhgTAwgCQAcgCATACQABgDADgCIAMgFQBFgdA5A0IABAAIAAABQAQANACAHIABAAIAAACIAFAJIAAAAIALAbIAAABQAHAVgCAtQgCAvgUAcQgWAdg0gFQgsgEgNAEIgBABIgWAGQgHACgZAQQgdASgSAAIgHABIgCAAgAhZCDIACABIAHAAQAOgBAYgPQAdgTAJgBIAVgGIAAAAQAPgGAxAFQApAEARgVIAAgBQASgXABgpQACgngGgTIgKgZQgEgHgBgEIgPgPIgBgBQgugqg5AVIAdAHIABAAQAcAPARALQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIABACIABACIgCgCIgGgBQgYgDgTgEIgkgIQgUgHgqACQgsACgfARQgbAPgDAYQgBAIAFAEQAJAHATABQAKAAARgEQASgGAMAAQAcgOApgIIACgBIAPAAQADAAADADIACADIgBAAQgYADgeAQIghARQgKAFgHAGQggAWACAsQACAFAGADQAXgcA3gWIABAAQAcgKAWADQAEAAACADIACAGQgVAFgfALQg1AWgVAcIgBABQgNARABAUQABAEAFAEIAAAAIAIAGg");
	this.shape_41.setTransform(154.1,358.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0FF7A").s().p("AgkBWQglhNAjhTIABgCIAAgBIAEgJQAhgIAhAOIAHAPQAdBCgXBNQgcAMgYAAQgPAAgPgEg");
	this.shape_42.setTransform(171,358.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8089DD").s().p("Ah4gxIgDgHQAlgBAfgGIABAAIBFgMIAOgJQAPgIAIgBIAHgBQAMAAAHALIAKAUQAMAOAKAUQAEAJAKAXIAAACIAAACIgDABIgBAAIABABQgPALgTALQghASgyARQg2ATg9AKQAVhOgehCg");
	this.shape_43.setTransform(189,356.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AipBtQgEgBgCgEQgthWApheQADgWAJAAIABAAQAlgKAmAOQAEgCADABQADAAACAEQApAAAigHQBDgNAjgEQADAAADACIADAEQgJABgOAIIgOAJIhGAMIAAAAQggAGgkABIADAHQAdBCgUBOQA6gKA5gTQAxgRAigSQATgLAOgJIABgBIADgBIAAgCIABAAIAEgEQADgCAEAAQAEAAACADQADAEAAAEQAAADgDABQgSAQgcAQQgjATgyARQhCAWhDALQghAPgeAAQgUAAgTgHgAidhQIgEAJIAAABIgBACQgkBTAmBNQAmAMAtgUQAYhNgdhCIgIgPQgWgJgWAAQgMAAgLADg");
	this.shape_44.setTransform(183.5,357.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F0FF7A").s().p("AA/BcIgHgFIgDgCIAAAAIgNgIQAPgYAXgXQAZgaANgCQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIANAIQgNAJgVAbQgUAZgNAXIgCgBgAhzgCIgQgIQAIgYAVgdQALgRALgMIAdALQgqAygIAhIgOgEg");
	this.shape_45.setTransform(180.1,340.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#72EBEB").s().p("AhbANQAHggAsgzIAEACQBFAbA1AfIAGADQgOAHgUATQgZAagRAaQg0gfg3gbg");
	this.shape_46.setTransform(180.8,340.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8089DD").s().p("ADOCmQgygugrgdQANgVATgXIAAgBQAXgfAJgDIAEgBQAZATASAUIABAAIAQAUIABAAIAJAOIABAAQAKAQACAPQACAagbAXIgXAMIgKgKgAj0g/IgBAAIABAHQAAAJgGABIgDgNIgEgcQgGgnAAgKQAAgKACgIIABgDIAEgQIABgCIADAHQBUAVBmAlQgJALgIAOQgYAegIAbQg/gZhCgKg");
	this.shape_47.setTransform(176.8,341.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ACxDDQgDgBgBgEQgBgEABgEQACgDADgBIAGgCIgDgDIAAAAQgxgugrgdIgBABQgEAAgDgCQgDgCAAgEIgEgCIAAAAIgHgFIgCgBIgWgNIAAAAQg5gig+gdIgDgCIgWgIQhNgkhRgMQgEgBgCgDQgDgEABgDIACgFIACANQAGgBAAgIIgBgHIABAAQBCAKA/AZQAJgbAXgfQAJgOAIgKQhlglhUgWIgDgHIgCACIACgOQBcAWBwApIAAAAIAzATIAAAAIACABIAJAEIgBgBQBGAbA3AhQA/AmAnAoIASAVIAAABQAGAGAFAIQAOAVABAUQAFAjglAfIgBABIgeAPIgCABIAAAAIgUAHIgDAAIgEgBgAClAFQgJADgYAeIAAABQgSAXgNAVQAqAeAzAuIAJAJIAYgMQAbgXgDgaQgCgPgKgQIAAAAIgKgNIAAAAIgRgUIAAAAQgTgVgYgTIgEACgABMBEIAHAFIACABQANgXAUgZQAVgaANgIIgMgIQgBABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgMACgaAYQgWAXgPAYIANAIIgBAAIADACgAg/gHQA3AZA0AfQARgbAZgXQAUgVAOgHIgGgDQg1gfhFgcIgEgBQgsAzgHAigAhRhSQgVAegIAYIAQAHIAOAGQAIgjApgxIgdgLQgKAMgLAQg");
	this.shape_48.setTransform(178,342.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC99").s().p("AhXCEIgIgGIAAAAQgFgDgBgFQgBgUAMgRIABgBQAVgcA0gWQAggMAUgGQAAgDgCgCQgCgDgEgBQgVgCgdAKIAAAAQg3AXgXAdQgHgDgBgFQgDgsAggXQAHgGAJgFIAigRQAdgRAYgDIACAAIgCgDQgEgDgDAAIgPAAIgCABQgpAIgbAPQgMAAgSAGQgSAFgJAAQgTgBgJgGQgGgFABgIQADgXAbgQQAfgRArgDQArgDATAGIAkAIQAUAFAYACIAGAAIACACIgBgCIgBgCQgBAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABQgRgLgcgOIAAAAIgegHQA5gWAvAqIAAAAIAQAPQABAEAEAHIAKAZQAHASgBAoQgCAogRAYIAAABQgRAVgpgDQgxgEgPAGIAAAAQgOADgHADQgJACgcATQgYAPgPABIgGAAIgCgBg");
	this.shape_49.setTransform(154.3,356.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhkCSIgFgFQgOgKAAgNQgBgVAKgTQgQgIAAgPQgCgrAYgbQgNADgIAAIgBAAQgZgCgMgJQgPgMACgTQADgiAlgTQAhgUAwgDQAbgCATACQACgEADgCIALgFQBGgeA5A0IAAAAIABABQARANACAGIAAABIABABIAEAJIABAAIAKAcIAAAAQAIAVgBAtQgBAvgUAcQgWAeg0gEQgsgDgNADIgBABIgXAGQgGACgYAQQgeAUgSAAIgHABIgBAAIgCAAQgLAAgCgHgAhXCEIACABIAHgBQAOgBAZgPQAcgTAJgCQAGgDAPgDIgBAAQAQgGAxAFQApADAQgWIABAAQARgYABgoQABgogGgSIgKgaQgEgGgBgEIgQgPIAAgBQgvgqg5AWIAdAHIABAAQAcAPARAKQgBAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIABACIABACIgCgCIgGgBQgYgCgTgEIgkgIQgUgGgqADQgsACgeARQgbAQgDAYQgCAHAGAFQAJAGATACQAKgBARgFQASgFAMAAQAbgPAqgJIABAAIAPgBQAEAAADADIACADIgBAAQgYADgeARIghARQgKAGgHAGQgfAXADAsQABAEAHADQAWgdA3gWIABgBQAcgKAWADQADAAACAEQACACABADQgVAFgfAMQg1AWgVAdIAAAAQgNASACAUQAAAEAGAEIgBAAIAIAGg");
	this.shape_50.setTransform(154.2,356.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0FF7A").s().p("AgvBRQgahRAvhOIACgCIAAAAQACgFADgEQAggDAgASIAFARQAUBFgjBJQgVAFgRAAQgYAAgUgJg");
	this.shape_51.setTransform(172,357);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8089DD").s().p("Ahug+IgDgHQAlAEAggBIAAAAIBHgCQAGgEAJgDQAQgGAJAAIAHAAQALACAFANIAIAUQAKAQAHAVIAJAiIgBACIAAABQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgBAAIAAAAQgQAJgUAIQgkANgxAKQg7ALg+ABQAghKgThGg");
	this.shape_52.setTransform(190,357.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("Ai2BgQgEgCgBgEQgghaA2hYQAGgVAJABIABAAQAmgFAkATQAEgBADACQADABACADQAoAGAggCQBHgCAjAAQADAAADAEIACADQgJAAgQAGQgJADgFAEIhJACIgBAAQgeABgkgEIACAHQATBGgfBKQA9gBA5gLQAzgKAkgNQAVgIAQgJIAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAIAAgBIACAAIAEgDQADgCAEABQAEABACADQACADAAAFQgBAEgDACQgVANgdALQgmAOg0AKQhBAMhGABQgZAHgWAAQgeAAgagOgAiPhZQgDAEgCAFIAAAAIgCACQgvBOAaBRQAkARAwgNQAjhJgUhFIgFgRQgbgPgcAAIgLAAg");
	this.shape_53.setTransform(184.4,357);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#72EBEB").s().p("AhaAPQAFggAog0IAEABQBHAaA3AdIAGAEQgOAIgRASQgYAagPAbQg2gdg5gag");
	this.shape_54.setTransform(181.9,342.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F0FF7A").s().p("ABFBaIgHgFIgEgCIABAAIgOgHQAOgYAVgYQAYgaAMgCIAEAAIAMAGQgMAJgTAcQgSAZgMAXIgCgBgAhzAAIgQgGQAGgZATgdQAKgRAKgNIAeALQgmAzgGAhIgPgFg");
	this.shape_55.setTransform(181.1,342.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8089DD").s().p("ADZCiQg0gugtgcQALgWASgYIAAAAQAVgfAIgCIAEgDQAaATAUAUIABAAIARAUIABAAIAKAMIABAAQALAQADAQQAEAZgZAYIgXAMIgLgIgAj4g6IgBAAIACAIQAAAHgGACIgDgMIgGgdQgJglAAgLIAAgSIAAgDIADgQIACgCIADAHQBWATBoAkQgIAKgIANQgUAggIAbQhAgYhDgJg");
	this.shape_56.setTransform(177.9,344);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ADBC+QgEgCgBgEQgBgDABgEQABgEAEgBIAFgCIgDgCIAAgBQg1gtgsgbIgBAAQgEABgDgCQgDgCgBgEIgDgCIgBAAIgIgFIgCgBIgWgMIAAAAQg8ghg/gcIgDgBIgYgIQhPgihSgKQgEgBgCgDQgDgDABgEIABgFIAEANQAGgCgBgIIgBgHIABAAQBCAJBBAYQAHgbAVggQAHgNAJgLQhpgjhVgTIgEgHIgBACIABgPQBdAUBzAnIAAAAIA0ASIAAAAIACAAIAKAEIgBgBQBHAaA6AfQBBAkAqAoIAUAUIAAABQAGAGAFAIQAPAUAEAUQAGAkgiAfIgBABIgdAPIgCABIAAABIgTAHIgDABIgEgBgACnAAQgIADgWAfIAAAAQgRAYgMAWQAtAcA1AtIALAJIAWgMQAagYgEgaQgDgPgMgQIAAAAIgLgNIAAAAIgSgTIAAAAQgUgUgagRIgEAAgABTBBIAHAEIACABQAMgWASgZQATgaAMgJIgMgIIgEABQgMACgYAZQgVAXgOAZIAOAHIgBAAIAEACgAg+gHQA5AYA3AeQAPgbAXgYQASgVAOgIIgGgDQg4gehGgZIgEgCQgpA0gFAigAhVhRQgTAegGAZIAQAGIAPAGQAGgjAmgyIgegLQgKAMgKARg");
	this.shape_57.setTransform(179,344.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F0FF7A").s().p("AgsBSQgehQAthQIABgBIAAgBQACgFADgDQAggGAhASIAFARQAXBEggBKQgXAHgSAAQgWAAgTgIg");
	this.shape_58.setTransform(171.6,358.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8089DD").s().p("Ahzg7IgCgHQAkADAggDIABAAIBGgEIAPgIQAPgGAJAAQAEgBADAAQAMABAGANIAIAUQAKAQAHAUIALAiIAAACIgBACQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgBAAIABAAQgQAKgUAJQgjAOgwAMQg7ANg9AEQAchLgWhGg");
	this.shape_59.setTransform(189.8,358);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AizBiQgEgCgBgDQgkhaAyhaQAFgVAKABIABAAQAmgGAkARQAEgBADABQADABACAEQAoAEAhgDQBGgFAjgBQADAAADADIADAEQgJAAgPAGIgPAIIhJAEIAAAAQgfADgkgDIACAHQAXBGgdBLQA+gEA4gNQAzgMAjgOQAUgJAQgKIAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAIAAgCIACAAIAEgDQADgDAEABQADAAADAEQACADAAAFQgBADgDACQgUAPgdAMQgkAQg0AMQhCAOhFAEQgbAJgZAAQgbAAgYgMgAiUhYQgDAEgCAFIAAAAIgBACQgsBPAdBQQAlARAvgQQAghKgWhEIgGgQQgZgOgaAAIgQABg");
	this.shape_60.setTransform(184.1,358.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#72EBEB").s().p("AhaAQQAFggAog1IAFACQBFAYA4AdIAGADQgOAIgSATQgXAagPAcQg2gdg5gZg");
	this.shape_61.setTransform(181.3,343);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F0FF7A").s().p("ABFBZIgIgFIgCgCIgOgHQAOgYAVgZQAXgaANAAIADgCIANAGQgMAJgTAcQgTAZgLAYIgCgBgAhzAAIgQgEQAGgZATgeQAKgQAKgNIAdAKQgmAzgGAhIgOgGg");
	this.shape_62.setTransform(180.6,343.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8089DD").s().p("ADZCdQg1gsgtgbQAMgWARgYIAAAAQAWggAIgDIAEgCQAaASAUAUIAAAAQAKAJAIAKIAAAAIAKANIABAAQAMAPADAPQAEAagaAZQgKAGgMAGIgLgJgAj4g2IgBAAIACAHQAAAIgGACIgDgMIgGgcQgJgnAAgLIAAgRIAAgDIADgQIACgCIADAHQBWASBoAhQgIALgIANQgVAggHAcQhAgYhDgHg");
	this.shape_63.setTransform(177.3,344.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("ADBC6QgEgBgBgEQgBgEABgEQABgDAEgCIAFgCIgDgCIAAgBQg1grgsgbIgBAAQgEABgDgCQgDgCgBgEIgDgCIgBAAIgHgEIgCgCIgXgLIAAAAQg7ghhAgaIgDgCIgXgHQhPgghSgJQgEgBgCgDQgDgDAAgEIACgFIADANQAGgCAAgIIgCgHIABAAQBDAHBAAXQAHgbAVggQAIgOAIgKQhoghhWgSIgDgHIgCACIABgPQBeATByAkIABAAIAzARIABAAIABABIAKADIgBAAQBIAYA5AeQBBAjAqAoIAUATIAAABQAGAGAFAIQAPAUAEAUQAGAkgjAgIgBABIgcAPIgCABIAAABIgTAHIgEABIgDgBgACngBQgIABgWAfIAAABQgRAYgMAVQAtAcA1AsIALAJQAMgGAKgHQAagYgEgaQgDgPgMgPIgBgBIgKgMIAAAAQgIgKgKgJIAAAAQgUgUgagRIgEADgACJgWQgMACgYAZQgVAYgOAZIAOAHIADACIAHAEIACABQAMgXASgZQATgaANgJIgNgIIgEABgAg9gGQA5AXA2AcQAPgbAXgYQASgVAOgJIgGgDQg4gdhGgYIgEgBQgoA1gFAigAhVhQQgSAegHAZIARAGIAOAGQAGgjAmgzIgegLQgKANgKARg");
	this.shape_64.setTransform(178.4,345.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F0FF7A").s().p("AgsBSQgdhPArhQIABgCIAAAAIAFgJQAggFAhARIAGAQQAWBEgfBLQgXAHgSAAQgWAAgTgIg");
	this.shape_65.setTransform(171.7,358.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8089DD").s().p("Ah0g6IgCgHQAkACAggDIABAAIBGgFIAPgHQAPgHAJAAIAHgBQALABAHANIAIAUQALAPAHAVIALAiIAAACIgBABQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAIABABQgQAKgUAJQgjAOgwAMQg7AOg9AFQAchMgXhFg");
	this.shape_66.setTransform(189.9,357.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AiyBiQgEgBgBgEQglhaAyhaQAFgVAJABIACAAQAlgHAlASQADgCAEACQADABACADQAoAEAggDQBGgGAjgBQAEgBADADIACAEQgJABgPAGIgPAIIhIAFIgBAAQgeADgkgDIACAIQAXBEgcBMQA9gEA5gOQAygMAjgPQAUgJAQgKIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAAAIABgBIABgBQACgCACgBQADgDAEABQAEAAACAEQACADAAAFQgBADgCADQgUAOgdANQgkAPg1ANQhAAPhGAEQgbAKgZAAQgbAAgYgMgAiUhYIgFAJIAAAAIgBACQgrBQAdBPQAlAQAvgPQAfhLgWhEIgGgQQgagNgaAAIgPABg");
	this.shape_67.setTransform(184.1,358.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F0FF7A").s().p("ABFBZIgIgFIgCgCIgOgHQAOgYAVgYQAXgbANAAIADgCIANAGQgMAJgTAcQgTAZgLAYIgCgBgAhzAAIgQgEQAGgZATgeQAKgRAKgMIAdAKQgmAzgGAhIgOgGg");
	this.shape_68.setTransform(180.6,342.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8089DD").s().p("ADZCeQg1gtgtgbQAMgWARgYIAAAAQAWggAIgDIAEgCQAaASAUAUIAAAAQAKAJAIAKIAAAAIAKAMIABABQAMAPADAQQAEAZgaAYQgKAHgMAGIgLgIgAj4g2IgBAAIACAHQAAAIgGACIgDgMIgGgcQgJgnAAgLIAAgRIAAgDIADgQIACgCIADAHQBWASBoAhQgIALgIANQgVAggHAcQhAgYhDgHg");
	this.shape_69.setTransform(177.3,344.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F0FF7A").s().p("AgyBPQgXhQA0hOIABgCIAAAAQADgFADgEQAggCAfAUIAEAQQAQBGgmBIQgTAFgPAAQgaAAgVgMg");
	this.shape_70.setTransform(171.3,356.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8089DD").s().p("Ah8BPQAjhJgQhHIgBgHQAjAGAhgBIAAAAIBHABQAGgDAJgDQAQgGAJAAIAHAAQALACAFANIAHAWQAIAQAGAVIAIAiIgBACIAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAIgBAAIAAAAQgRAJgUAHQgkALgyAJQg4AIg6AAIgHAAg");
	this.shape_71.setTransform(189.1,356.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ai5BeQgDgCgBgEQgchaA6hXQAHgVAJABIACAAQAlgDAkAUQADgBADACQADABACADQAnAHAhAAQBHgBAiACQAEAAADADIACAEQgKAAgPAGQgKADgFADIhJgBIgBAAQgeABgkgGIACAHQAQBHgjBJQA9ABA6gJQAzgJAkgLQAVgHARgJIAAAAQABAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAIABgBIABAAIAFgDQADgCAEABQADABACADQACAEgBAEQgBAEgDACQgVANgeAKQgmANg1AIQhCAKhFgBQgXAFgUAAQghAAgbgQgAiIhZQgEADgCAFIAAABIgCABQgzBOAWBRQAjASAxgMQAmhIgQhFIgEgRQgdgSgeAAIgGABg");
	this.shape_72.setTransform(183.5,356.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#F0FF7A").s().p("AgyBOQgWhRAzhMIABgCIAAAAQADgFADgEQAggBAfAVIAEAQQAQBGgmBHQgRAEgOAAQgcAAgWgNg");
	this.shape_73.setTransform(171.3,355.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8089DD").s().p("Ah8BMQAjhIgQhHIgBgIQAkAHAgABIAAAAQApABAeACQAGgEAJgCQAQgFAJAAIAHAAQALADAFANIAHAVQAJAQAFAVIAIAjIgBACIAAABQAAAAgBABQAAAAAAAAQgBAAAAAAQgBABAAAAIgBAAIAAAAQgQAIgVAHQgkAKgyAHQguAFgwAAIgbAAg");
	this.shape_74.setTransform(189.1,356.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ai5BdQgDgCgBgEQgchbA6hWQAHgVAJACIACAAQAmgCAjAUQADAAAEACQADABABADQAoAIAgABQBHABAjADQADAAADADIACAEQgJAAgQAFQgKADgFADQgegCgrgBIgBAAQgeAAgkgHIACAIQAQBHgjBIQA9ACA6gHQAzgIAkgKQAVgHARgHIAAgBQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAAAIABgBIABgBIAFgCQADgCAEABQADABACADQACAEgBAEQgBAEgDACQgVAMgeAJQgmAMg1AHQhBAIhGgDQgVAEgSAAQgkAAgcgRgAiIhaQgEAEgCAFIAAAAIgCACQgzBMAWBRQAjAUAxgLQAmhHgQhGIgEgQQgegUggAAIgDAAg");
	this.shape_75.setTransform(183.6,355.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#F0FF7A").s().p("AgvBPQgahQAvhNIABgCIAAgBIAGgIQAggDAgAUIAFARQAUBFgjBIQgTAFgQAAQgZAAgWgMg");
	this.shape_76.setTransform(171.4,356);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8089DD").s().p("Ah7BPQAghJgUhGIgCgIQAlAGAggBIABAAQArAAAcABQAFgEAJgDQAQgFAJAAIAHAAQALACAFANIAIAVQAKAQAHAVIAJAiIgBACIAAABQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIgBAAIABABQgRAJgUAHQgkAMgxAIQg4AJg7AAIgGAAg");
	this.shape_77.setTransform(189.4,356.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Ai3BeQgDgCgBgEQgghaA2hXQAFgVAJACIACAAQAmgEAkAUQAEgBADABQADABACAEQAoAHAhgBQBGAAAjABQADAAADAEIADADQgKAAgPAGQgJADgGADQgegBgrABIAAAAQgfAAgkgFIACAHQATBHgfBJQA9AAA6gKQAzgIAkgLQAUgIAQgJIABAAQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAIABgBIABgBIAFgCQADgCAEABQADABACADQACADAAAFQgBAEgDACQgUAMgeALQglANg1AIQhBAKhGgBQgXAGgUAAQghAAgcgQgAiPhZIgGAIIAAABIgBACQgvBNAaBQQAkATAwgMQAjhIgUhFIgFgRQgcgSgeAAIgIABg");
	this.shape_78.setTransform(183.8,356);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F0FF7A").s().p("AgvBSQgahQAvhPIACgCIAAgBQACgFADgEQAggEAgASIAFAQQAUBEgjBLQgXAHgSAAQgWAAgTgJg");
	this.shape_79.setTransform(171.5,358.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8089DD").s().p("Ahug7IgCgIQAkAEAggDIABAAIBGgEQAGgEAJgDQAQgHAJAAIAHAAQALABAFANIAIAUQAKAQAGAUIAJAjIAAACIgBABQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAIAAAAQgQAKgUAJQgkAOgxALQg7ANg9AEQAfhMgThFg");
	this.shape_80.setTransform(189.5,357.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Ai2BiQgDgCgBgEQgghaA2hZQAFgVAJABIACAAQAmgHAjASQAEgBADABQADABACAEQAoAEAhgDQBGgFAjAAQADAAADADIACADQgJABgPAGQgKAEgFAEIhJAEIAAAAQgfACgkgDIACAHQAUBGggBLQA9gDA5gNQAzgMAkgOQAVgIAQgKIAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAIAAgBIACAAIAEgDQADgDAEABQAEABACADQACADgBAEQAAAFgDACQgVAOgdAMQglAPg1AMQhBAOhGADQgbAJgYAAQgcAAgYgMgAiOhZQgEAEgCAFIAAABIgBACQgvBPAaBQQAkAQAvgOQAjhLgThEIgFgQQgagPgbAAIgNABg");
	this.shape_81.setTransform(183.8,358.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F0FF7A").s().p("AgvBTQgahRAvhPIACgCIAAgBQACgFADgEQAfgFAhASIAFAQQATBEgjBLQgXAIgSAAQgVAAgTgIg");
	this.shape_82.setTransform(171.5,358.4);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8089DD").s().p("Ahvg6IgBgIQAkADAggDIABAAIBHgFIAOgHQAPgHAJAAIAIgBQALABAFANIAIAVQAJAPAHAVIAJAiIgBACIAAABQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgBAAIAAAAQgQALgUAJQgkAOgxAMQg7AOg9AEQAfhMgUhFg");
	this.shape_83.setTransform(189.5,357.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Ai1BjQgEgCgBgEQgghaA2haQAFgVAKABIABgBQAmgGAkARQADgBADABQAEABABAEQAoADAhgDQBGgFAjgBQADgBADAEIACADQgJABgPAGIgPAIIhJAFIAAAAQgeADglgDIACAHQAUBGgfBMQA9gFA5gOQAzgMAjgOQAVgJAQgKIAAgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAgBIAAgBIACAAIAEgDQADgDAEABQAEABACADQACADgBAEQAAAEgDADQgVAOgdANQglAPg1ANQhBAPhFAEQgcAJgZAAQgbAAgXgLgAiOhZQgDAEgCAFIAAABIgCACQgvBPAaBRQAkAPAvgPQAjhLgThEIgFgQQgagOgZAAIgPABg");
	this.shape_84.setTransform(183.8,358.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFCC99").s().p("AhZCDIgIgGIAAAAQgFgEgBgFQgBgTANgSIAAAAQAWgcA1gWQAfgLAVgFIgCgGQgDgDgDgBQgWgCgcAJIgBAAQg3AWgXAdQgHgDgBgFQgCgsAfgWQAIgGAJgFIAigRQAegQAYgDIABAAIgCgDQgDgDgEAAIgPAAIgBABQgqAIgbAOQgMAAgSAFQgSAFgJAAQgTgBgJgHQgGgFABgHQAEgYAbgPQAfgRArgCQArgCATAGIAkAJQAUAFAYACIAGABIABACIAAgCIgBgDQAAABgBAAQAAAAAAAAQAAAAAAABQAAAAAAAAQgRgLgcgPIAAAAIgdgHQA5gVAuAqIAAABIAQAPIAFALIAKAZQAGATgCAnQgBAogSAYIAAABQgRAVgpgEQgxgFgPAGIAAAAQgPADgGADQgJABgdATQgYAOgPABIgGABIgCgBg");
	this.shape_85.setTransform(154.8,364.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhYCYQgMAAgCgIIgFgEQgOgLAAgNQgBgUALgTQgQgJAAgPQgCgrAZgaQgNADgIAAIgBAAQgZgDgMgJQgPgMADgUQADghAlgTQAhgTAwgCQAcgCATACQABgDAEgCIALgFQBFgdA5A0IAAAAIACABQAQANABAHIABAAIABACIAEAJIABABIAKAbIAAAAQAHAVgBAtQgDAvgUAcQgWAdg0gFQgsgEgNAEIgBAAIgWAGQgHADgYAQQgeASgSAAIgHABIgCAAgAhZCDIACABIAHgBQAOgBAZgOQAcgTAJgBQAHgDAPgDIgBAAQAPgGAyAFQAoAEARgVIABgBQARgYACgoQACgngHgTIgKgZIgFgLIgPgPIAAgBQgvgqg5AVIAdAHIABAAQAcAPARALQgBAAAAgBQAAAAAAAAQABAAAAgBQAAAAAAAAIABADIABACIgCgCIgGgBQgYgCgTgFIgkgJQgTgGgrACQgsACgeARQgcAPgDAYQgBAHAGAFQAIAHATABQAKAAARgFQASgFAMAAQAcgOApgIIACgBIAPAAQADAAAEADIACADIgCAAQgYADgdAQIgiARQgKAFgHAGQgfAWACAsQABAFAHADQAXgdA3gWIAAAAQAdgJAVACQAEABACADIACAGQgUAFggALQg1AWgVAcIgBAAQgMASABATQAAAFAGAEIgBAAIAIAGg");
	this.shape_86.setTransform(154.7,364.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F0FF7A").s().p("AgnBUQgihOAnhSIABgBIAAgBQABgFAEgEQAfgHAiAQIAHAPQAaBDgbBMQgbAKgWAAQgRAAgQgGg");
	this.shape_87.setTransform(171.8,365.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8089DD").s().p("Ah3g1IgDgHQAlABAggEIAAAAIBGgJQAFgFAKgEQAOgHAJgBIAHgBQALABAHALIAKAUQALAPAJAUIANAhIAAADIAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAIgBABIABAAQgPAKgUALQgiAQgyAOQg4ARg8AHQAXhNgahDg");
	this.shape_88.setTransform(190,363.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AiuBlQgEgBgCgEQgohYAshcQAEgVAJAAIABAAQAmgJAlAQQAEgCADABQADABACAEQAoABAjgEQBDgLAjgCQAEAAADACQAAABABAAQAAABABAAQAAABAAAAQAAAAAAABQgJABgOAHQgJAEgFAFIhIAJIgBAAQgeAEglgBIADAHQAbBEgYBNQA8gIA5gRQAxgOAigQQAUgKAPgLIABgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIAAAAIABgBIAEgDQADgDAEABQAEAAACAEQACACABADQgBAEgCACQgTAPgdAPQgkARgzAPQhAAThFAIQgfANgbAAQgYAAgVgKgAiahWQgDADgCAGIAAAAIgBACQgnBRAiBPQAmANAugSQAbhLgahDIgGgQQgYgKgWAAQgLAAgLACg");
	this.shape_89.setTransform(184.4,365.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F0FF7A").s().p("ABBBdIgIgFIgDgDIAAAAIgNgHQAPgYAXgXQAYgZANgDIAEAAIAMAIQgNAJgUAbQgUAYgMAWIgCAAgAhygEIgRgHQAIgYAVgdIAUgdIAeAMQgpAwgHAiIgOgFg");
	this.shape_90.setTransform(181.1,347.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#72EBEB").s().p("AhbAMQAIggAqgyIAFABQBEAdA2AgIAGADQgOAFgTAUQgZAZgQAbQg0ghg5gbg");
	this.shape_91.setTransform(181.9,347.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8089DD").s().p("ADQCqQgygvgrgeQAMgVATgXIAAAAQAWgfAJgDIAEgBQAZATATAVIAAAAQAKAKAHALIABAAIAJAMIABABQAKAQACAPQADAagaAXQgLAGgNAFIgKgJgAj1hCIgBAAIABAHQAAAIgGACIgCgOIgFgcQgGgmAAgKIABgSIABgEIADgQIACgBIADAHQBVAWBlAnQgIAKgIANQgXAggIAaQhAgahCgLg");
	this.shape_92.setTransform(177.9,349);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AC1DGQgEgBgBgEQgBgEABgEQACgDADgBIAGgCIgDgDIAAAAQgygvgrgdIgBAAQgEABgDgCQgDgCgBgEIgDgCIgBgBIgHgEIgCgCIgWgNIAAAAQg6gjg+geIgCgCIgXgIQhNglhSgOQgEAAgCgDQgCgEAAgDIACgFIADANQAGgCAAgIIgBgHIABAAQBCALA/AaQAIgaAXgfQAJgOAIgKQhmgmhVgXIgDgHIgBACIABgOQBdAXBwArIAAAAIAzATIAAAAIACABIAJAEIAAAAQBGAcA3AhQBAAnAoApIASAVIAAABQAGAGAEAIQAPAVACAUQAFAkglAeIgBABQgNAHgQAHIgCABIgBAAIgSAHIgDAAIgEgBgACkAIQgIACgXAfIAAAAQgTAXgMAVQArAeAzAvIAKAJQAMgFALgGQAagXgCgaQgCgPgLgQIAAgBIgKgMIAAAAQgIgLgJgKIgBAAQgSgVgagTIgEACgABNBGIAIAEIACABQAMgWAUgZQAUgbANgGIgMgJIgEABQgNACgYAYQgXAXgPAYIANAHIAAAAIADADgAg/gHQA4AZA0AgQARgaAYgYQATgUAOgHIgFgDQg2gghFgdIgEgBQgrAygHAjgAhShSQgVAdgIAYIARAHIAOAHQAHgkApgwIgegMIgUAdg");
	this.shape_93.setTransform(179.1,349.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFCC99").s().p("AgxCTIgKgDIABgBQgHgCgBgFQgGgSAIgUIABgBQANghAugiQAbgTATgKIgDgDQgDgDgEABQgVACgZAQIgBAAQgwAjgPAiQgHgCgDgEQgNgqAZggQAFgFAIgHQAAgBAdgYQAagYAVgJIABAAIgDgCQgEgDgDABIgMAEIgBABQgpASgXAVQgLADgRAKQgPAJgJADQgTACgLgDQgGgDgBgIQgDgYAXgVQAagYApgNQApgNAWABIAjgBQAUAAAYgEIAGgBIACABIgBgBIgCgCQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQgSgGgggIIAAAAIgcAAQAwgiA4AdIAAABIATALIAHAJIAQAWQALAQAIApQAIAlgKAbIAAABQgMAZgoAGQgxAIgNAJIAAAAIgVAMQgIAEgVAYQgUAVgOAEIgGADIgCgBg");
	this.shape_94.setTransform(157.8,380.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Ag7CjIgGgDQgQgHgDgMQgGgUAFgVQgRgFgEgOQgMgqARghQgMAGgHACIgBAAQgaAEgOgGQgRgHgCgSQgFghAegcQAcgbAugOQAagIATgDQAAgEADgCIAMgJQA6gtBEAkIABAAIAAABQATAIAEAGIAAAAIABACIAHAIIABAAIAQAYIABAAQAMASAKAuQAKAtgNAgQgOAhgzAJQgsAHgMAHIAAAAIgVAMQgIAEgTAWQgXAZgRAEIgGADIgCAAIgHABQgGAAgDgEgAAngDIADADQgTAKgbAUQguAigNAhIgBAAQgIAUAGATQABAEAHADIgBAAIAKADIACABIAGgCQAOgFAUgUQAVgZAIgEIAVgMIAAAAQANgJAxgHQAogHAMgZIAAAAQAKgbgIgmQgIgpgLgPIgQgXIgHgJIgTgLIAAAAQg4gegwAjIAcgBIAAAAQAgAIASAHQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIACACIABABIgCgBIgGABQgYAEgUgBIgjABQgWAAgpAMQgpANgaAYQgXAWADAXQABAIAGADQALAEATgDQAJgDAPgIQARgKALgDQAXgVApgTIABAAIAMgEQADgBAEACIADADIgBAAQgVAIgaAYQgdAYAAABQgIAHgFAGQgZAfANAqQADAFAHABQAPghAwgkIABAAQAZgPAVgDIACAAQACAAADACg");
	this.shape_95.setTransform(157.8,380.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F0FF7A").s().p("AgOBaQg5hAALhZIABgCIgBgBIACgKQAegRAjAEIALAOQAuA5gCBOQgkAeglAAIgDAAg");
	this.shape_96.setTransform(173.7,375.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AiDCQQgEAAgCgDQhDhHANhlQgCgVAIgDIACAAQAggUApADQADgDADAAQADAAADADQAngLAfgQQA9gfAggNQAEgBADACQABAAABAAQAAAAABAAQAAABABAAQAAABAAAAQgIAEgMALQgHAHgDAGQgcAMgkATIgBAAQgdAOgjAKIAFAGQAvA4ABBQQA2gaAxghQArgcAbgaQAPgPALgPIAAAAIABAAQABgBAAAAQAAAAABgBQAAAAAAAAQAAgBAAAAIAAgBIABgBIADgEQACgEAEAAQAEgBADACQADACABAEQABAEgCADQgNAVgWAWQgdAZgsAfQg5Ang9AcQgqAkgsAAIgLgBgAirgoIgBAKIAAAAIAAACQgMBaA5BAQAoABAnggQAChQgug3IgMgNIgNgBQgdAAgZAOg");
	this.shape_97.setTransform(184.9,371.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8089DD").s().p("Ah6gVIgFgGQAjgLAdgOIABAAQAmgTAZgMQAEgFAHgHQAMgLAIgEQADgDADAAQALgEAKAKIAQAQQAPALAPAQIAWAdIABADIAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBABIAAAAQgLAPgPANQgcAagqAdQgwAig3AaQgChQgug4g");
	this.shape_98.setTransform(189.4,368.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#F0FF7A").s().p("AA2BhIgHgFIgDgCIABAAIgNgJQASgWAZgVQAbgYANAAIAEgBIALAJQgNAIgYAZQgWAXgQAVIgBgCgAhygMIgPgJQALgYAXgbQANgPALgLQAOAGAOAIQguAtgLAiIgOgHg");
	this.shape_99.setTransform(180.6,348.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#72EBEB").s().p("AhbAGQAJggAxguIAFACQBAAhAzAkIAFACQgPAGgVATQgbAWgUAZQgwgkg0gfg");
	this.shape_100.setTransform(181.4,348.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#8089DD").s().p("AC7C7QgsgzgoghQAPgUAVgVIAAgBQAagdAIgBIAFgCQAWAWARAWIABAAQAIALAGAKIABAAQAEAHADAHIABAAQAJARAAAQQAAAagdAVIgYAJIgKgKgAjuhUIgBAAIAAAHQAAAJgHAAIgBgMIgBgdQgCgnABgLIACgQIACgEIAFgQIACgBIACAIQBSAdBiAtQgKAKgKANQgZAdgMAaQg8gfhBgRg");
	this.shape_101.setTransform(177.3,349.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("ACfDXQgDgCgBgEQAAgEACgEQABgDAEgBIAGgBIgDgDIAAAAQgsgzgpggIAAAAQgEABgDgDQgDgCAAgEIgDgDIgBAAIgGgFIgCgCIgUgOIgBgBQg1gng7gjIgCgBIgWgLQhJgqhPgUQgEgBgCgEQgCgDABgEIACgEIABAMQAHAAAAgIIAAgIIABABQBBAQA8AfQAMgaAZgdQAKgNAKgJQhiguhSgdIgCgIIgCACIADgOQBaAeBrA0IABAAIAwAXIAAAAIAAABIAJAFIgBgBQBFAiA0AlQA6AqAkAuIAQAXIgBAAQAGAHAEAIQAMAWgBAUQABAkgnAbIgBABIgfAMIgDABIAAAAIgUAFIgBAAQgDAAgDgBgACkAYQgIACgaAcIAAABQgVAVgPAUQAoAhAsAzIAKAKIAYgJQAdgVAAgaQAAgPgJgRIgBgBQgDgHgEgGIgBAAQgGgLgIgLIgBAAQgRgWgWgVIgFABgABGBPIAHAFIACABQAQgVAWgXQAXgZANgIIgLgIIgDAAQgNABgbAXQgaAVgRAWIAMAJIAAAAIACADgAg8gJQA0AeAxAkQATgaAbgWQAWgQAPgHIgGgEQgygkhDghIgCgCQgxAugKAigAhHhVQgYAbgKAXIAPAJIANAIQAMgjAtgtQgOgIgNgGQgMALgMAQg");
	this.shape_102.setTransform(178.2,350.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{skewX:-0.8,skewY:1.2,x:161.2,y:323.2,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]}).to({state:[{t:this.instance_11,p:{skewX:-0.8,skewY:1.2,x:161.2,y:323.2,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},63).to({state:[{t:this.instance_11,p:{skewX:-0.2,skewY:1.6,x:161.3,y:322.7,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},1).to({state:[{t:this.instance_11,p:{skewX:0,skewY:2,x:161.3,y:322.4,regY:7.7,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},1).to({state:[{t:this.instance_11,p:{skewX:0.1,skewY:2.3,x:161.4,y:322.1,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},1).to({state:[{t:this.instance_11,p:{skewX:-0.7,skewY:-0.2,x:161.5,y:324,regY:7.7,regX:12.4,scaleX:1.063,scaleY:1.021,startPosition:1}}]},3).to({state:[{t:this.instance_11,p:{skewX:-1.2,skewY:0.8,x:161,y:326.1,regY:7.7,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:6}}]},1).to({state:[{t:this.instance_11,p:{skewX:-1.9,skewY:0,x:160.5,y:328.3,regY:7.7,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:10}}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:184.4,y:357}},{t:this.shape_52,p:{x:190,y:357.1}},{t:this.shape_51,p:{x:172,y:357}},{t:this.shape_50,p:{x:154.2,y:356.3}},{t:this.shape_49,p:{x:154.3,y:356.2}}]},1).to({state:[{t:this.instance_11,p:{skewX:-3.4,skewY:-1.3,x:159.5,y:334.8,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:9}}]},1).to({state:[{t:this.instance_11,p:{skewX:-3.4,skewY:-1.3,x:159.5,y:335.3,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:9}}]},2).to({state:[{t:this.shape_64,p:{y:345.5}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61,p:{y:343}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_50,p:{x:153.7,y:358.2}},{t:this.shape_49,p:{x:153.7,y:358.1}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_50,p:{x:153.7,y:358.4}},{t:this.shape_49,p:{x:153.7,y:358.4}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_53,p:{x:183.8,y:356.9}},{t:this.shape_52,p:{x:189.5,y:357}},{t:this.shape_51,p:{x:171.4,y:356.9}},{t:this.shape_50,p:{x:153.6,y:356.2}},{t:this.shape_49,p:{x:153.7,y:356.2}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_50,p:{x:153.6,y:355.2}},{t:this.shape_49,p:{x:153.7,y:355.2}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_50,p:{x:153.6,y:354.6}},{t:this.shape_49,p:{x:153.7,y:354.6}}]},1).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_50,p:{x:153.6,y:355.4}},{t:this.shape_49,p:{x:153.7,y:355.4}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_53,p:{x:183.8,y:356.9}},{t:this.shape_52,p:{x:189.5,y:357}},{t:this.shape_51,p:{x:171.4,y:356.9}},{t:this.shape_50,p:{x:153.6,y:356.4}},{t:this.shape_49,p:{x:153.7,y:356.4}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_50,p:{x:153.7,y:357.6}},{t:this.shape_49,p:{x:153.7,y:357.6}}]},1).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_50,p:{x:153.7,y:358}},{t:this.shape_49,p:{x:153.7,y:358}}]},1).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_53,p:{x:183.8,y:356.9}},{t:this.shape_52,p:{x:189.5,y:357}},{t:this.shape_51,p:{x:171.4,y:356.9}},{t:this.shape_50,p:{x:153.6,y:356.2}},{t:this.shape_49,p:{x:153.7,y:356.2}}]},3).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_50,p:{x:153.6,y:355.2}},{t:this.shape_49,p:{x:153.7,y:355.2}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_50,p:{x:153.6,y:354.6}},{t:this.shape_49,p:{x:153.7,y:354.6}}]},1).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_50,p:{x:153.6,y:355.4}},{t:this.shape_49,p:{x:153.7,y:355.4}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_53,p:{x:183.8,y:356.9}},{t:this.shape_52,p:{x:189.5,y:357}},{t:this.shape_51,p:{x:171.4,y:356.9}},{t:this.shape_50,p:{x:153.6,y:356.4}},{t:this.shape_49,p:{x:153.7,y:356.4}}]},2).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_50,p:{x:153.7,y:357.6}},{t:this.shape_49,p:{x:153.7,y:357.6}}]},1).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_50,p:{x:153.7,y:358}},{t:this.shape_49,p:{x:153.7,y:358}}]},1).to({state:[{t:this.shape_64,p:{y:344.9}},{t:this.shape_69},{t:this.shape_68},{t:this.shape_61,p:{y:342.5}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_50,p:{x:153.7,y:358}},{t:this.shape_49,p:{x:153.7,y:358}}]},20).to({state:[{t:this.instance_11,p:{skewX:-3.7,skewY:-1.7,x:159.6,y:334.5,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:9}}]},1).to({state:[{t:this.instance_11,p:{skewX:-3.7,skewY:-1.7,x:159.5,y:333.5,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:9}}]},1).to({state:[{t:this.instance_11,p:{skewX:-3.4,skewY:-1.2,x:160,y:338.1,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:9}}]},2).to({state:[{t:this.instance_11,p:{skewX:-3.4,skewY:-1.2,x:160,y:338.1,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.073,startPosition:9}}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.instance_11,p:{skewX:2.9,skewY:0.5,x:161.4,y:327.6,regY:7.5,regX:12.7,scaleX:1.104,scaleY:0.901,startPosition:1}}]},1).to({state:[{t:this.instance_11,p:{skewX:0.5,skewY:1,x:161.2,y:322.6,regY:7.8,regX:12.6,scaleX:1.048,scaleY:1.043,startPosition:1}}]},1).to({state:[{t:this.instance_11,p:{skewX:-0.8,skewY:1.2,x:161.2,y:320.5,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},1).to({state:[{t:this.instance_11,p:{skewX:-0.8,skewY:1.2,x:161.2,y:321.6,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},4).to({state:[{t:this.instance_11,p:{skewX:-0.8,skewY:1.2,x:161.2,y:323.2,regY:7.6,regX:12.5,scaleX:1.012,scaleY:1.074,startPosition:1}}]},2).wait(162));

	// FIZ_FRONT_part_005
	this.instance_12 = new lib.FIZ_FRONT_H2_COMPIDLE("synched",0,false);
	this.instance_12.setTransform(136.5,306,1,1,0,0,0,110.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(40).to({startPosition:40},0).wait(1).to({y:306.3,startPosition:41},0).wait(1).to({rotation:-0.1,x:136.7,y:306.5,startPosition:42},0).wait(1).to({rotation:-0.3,x:136.8,y:306.8,startPosition:43},0).wait(1).to({rotation:-0.6,x:137,y:307.3,startPosition:44},0).wait(1).to({rotation:-1.1,x:137.1,y:307.8,startPosition:45},0).wait(1).to({regY:306.2,rotation:-1.3,x:137.3,y:308.5,startPosition:46},0).wait(1).to({regY:306.1,rotation:-1.6,x:137.5,y:308.9,startPosition:47},0).wait(1).to({rotation:-1.8,x:137.6,y:309.2,startPosition:48},0).wait(1).to({rotation:-2.1,x:137.7,y:309.3,startPosition:49},0).wait(14).to({rotation:-1.3,x:136.5,y:307.6,startPosition:63},0).wait(1).to({rotation:0,x:136.8,y:305.4,startPosition:64},0).wait(1).to({rotation:1.1,x:137,y:303.8,startPosition:65},0).wait(1).to({regX:110.8,regY:306.2,rotation:1.9,y:302.8,startPosition:66},0).wait(3).to({regX:110.9,regY:306.1,rotation:2.3,x:136.7,y:305.6,startPosition:69},0).wait(1).to({rotation:0.5,x:136.3,y:310.4,startPosition:70},0).wait(1).to({rotation:-0.6,x:135.9,y:315.2,startPosition:71},0).wait(1).to({rotation:-2.3,x:135.5,y:320.1,startPosition:72},0).wait(1).to({rotation:-4.9,x:135.3,y:323.3,startPosition:73},0).wait(1).to({rotation:-6,x:134.8,y:326.5,startPosition:74},0).wait(2).to({y:327.6,startPosition:76},0).wait(2).to({x:135.3,y:325.4,startPosition:78},0).wait(2).to({y:324.3,startPosition:80},0).wait(43).to({startPosition:123},0).wait(1).to({regX:111,scaleX:1,scaleY:1,rotation:-6.6,x:135.5,y:325.8,startPosition:124},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.5,x:135.3,y:327.3,startPosition:125},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8,x:135.9,y:329.8,startPosition:127},0).wait(1).to({startPosition:128},0).wait(1).to({rotation:-7.3,x:136.6,y:329,startPosition:129},0).wait(1).to({regX:110.9,rotation:-6.8,x:137.2,y:328.1,startPosition:130},0).wait(1).to({regY:306.2,scaleX:1,scaleY:1,rotation:-2.8,y:314.1,startPosition:131},0).wait(1).to({regX:111,regY:306.1,rotation:-0.6,y:305.6,startPosition:132},0).wait(1).to({regX:110.9,rotation:0,x:137.1,y:302.7,startPosition:133},0).wait(4).to({y:304.4,startPosition:137},0).wait(2).to({x:136.5,y:306,startPosition:139},0).wait(162));

	// FIZ_23_part_040
	this.instance_13 = new lib.FIZ_23_part_010("single",1);
	this.instance_13.setTransform(112.3,328.8,1,1,0,0,0,76.7,10);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFCC99").s().p("Ag7CDQgKgHgHgMQghg7Aeg8QAIgPAKgOQAGgIAIgEQAPgLARAEQAhAHATAfQAPAVAEAeQABAJgFAJQgIAIgMADQgTgBgKgFQgIgGgMgLQgMgLgNgkQAAAkAOAUQAOATARAGQARAGAJAAQgCAYgNAVQgGAJgLAFQgLAEgKAAQgTAAgQgMgAAKhDQgYgMgbAHQgTAGgMAMQAPgkAegVQAbgBAWAKIACABIAJAGQAMAHAHANQAKAOACATQACAIgBAJQAAAHgDAIQgPgmglgTgABLhLIgDgGQgSgbgegMQgSgIgSgBQAQgNAUAAQAeACAYARQAMAHADAOQAEAPgJAMIgEAGIgEAGQgCgGgDgGg");
	this.shape_103.setTransform(108.3,354.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhQCPIgJgFIABACIgCgCIgGgQQgOgkACgnQABgjAHggIAEgLQAMgZANgYQAVglAbgZQAYgZAmAJIAIADQASADAOALIALAKIAIAKQASAUgLAaIgBADIgFAKQgGANgMAIQADAPgCAPQgBALgLAFIACAbQACAPgHAMQgIAMgOAHIgCAPQgEAPgGAOIgIAOQgNATgWAFQgIACgJAAQgdAAgYgTgAgwgwQgIAFgGAIQgLANgHAQQgeA8AgA6QAHAMALAHQAZATAfgLQAKgFAGgJQANgUACgYQgIAAgSgGQgQgGgOgUQgOgUgBgkQAOAlALAKQAMALAJAGQAKAGATAAQALgCAIgIQAGgKgCgJQgEgdgOgWQgTgfghgHIgJgBQgMAAgLAIgAAIhCQAlASAQAnQACgIAAgIQABgIgBgIQgDgTgJgOQgIgNgMgHIgIgGIgCgBQgXgLgaABQgeAVgPAkQAMgMASgFQAKgDAKAAQARAAAOAIgAgNiAQARABASAIQAfALASAbIADAGQADAGABAHIAFgHIADgGQAJgLgDgPQgEgPgLgHQgZgRgegBQgTAAgQANg");
	this.shape_104.setTransform(108.5,354.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(1.8,1,1).p("AgOhEQAJAdAHAgQALAlADAn");
	this.shape_105.setTransform(103.5,359);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F0FF7A").s().p("AguBCQgehHAhhHQAYgLAXAFQAHAEAGAFQAGAFAGADIASA9QAMAlACAnQgZAJgaADIgGAAQgcAAgWgSg");
	this.shape_106.setTransform(98.9,358.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("ACKB4QgTgFgNgKIgFgGQhKgOhEgaQhCgZg9gfQgYgLgXgRQgJgHgDgJQABgJAIAAIAfAXIAHAEIA0AaQAiARAmANIAmAPIBJAXIAkAIIgIghQgGgYAEgWIADgQIAIghIADgHIg2gIIg6gKIgRgEIghgJQgRgEgNgMIgWgSQAEAAAEACIAkAJQAUAHAUAGQAkAIAkAGQAjAFAigDQAOAEAQgDQAMgDAMAAQASACANANQAHAHABAIIgDAFIgDADIgEgBQgGgCgGgFQgGgGgHgDQgZgFgYAKQghBGAeBIQAYAVAigCQAagEAZgJQAGACABAIIAAADIgFAEQgeAOggAAQgLAAgMgCg");
	this.shape_107.setTransform(82.9,356.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8089DD").s().p("ABsBhIhKgXIglgPQglgNgjgRIg0gcIgGgCIgDgEIgFgIQgGgJAAgKQAMgNAPgHQATgJAPgOQAJgGABgKIgEgNIAPAJIAVASQANAMARAEIAfAJIASAEIA8AKIA1AIIgDAHIgIAfIgDAQQgDAYAFAYIAIAhIgkgIg");
	this.shape_108.setTransform(77.5,354.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#72EBEB").s().p("Ag9AFQgOgPgTgMICSgtQASALAIAVIAKAcIAFAUIAAAHQAAAEABADIh+ApQgHgkgWgbg");
	this.shape_109.setTransform(90.2,338);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F0FF7A").s().p("Ag+BTIgCgEIACAEQAFAHAEALIgJgSgAhbAdQgUgegggVIAmgMQAXALASAWQANANAFASQAFAMADANIggANQgQgegFgJgAB5ABIgBgEQABgJgCgJQgFgigVgcIgHgJIAZgIQAZAfAFApIADAcIgXADg");
	this.shape_110.setTransform(89,339.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#8089DD").s().p("AkqBuQgNgmAcgcQAYgYAfgOIAwgSQABADADABQAhARATAfIAAABIAQAcQABAEAEABIACABIgOADQgnANgjASQgEACgEABQgTAHgQALQgFAFgDAEIgCADIgIACIgDAFQgigHgLgggACNgcQgFgUgHgSQgHgVgKgRIAtgMIArgKIBPgMIACAAIACgJIADAFIAGAWIAHAfQAHAbgDAcQgBAIgEAGIgEAFIgEgGIACgPIAAgBIgBAAIgpAHIgxALIgUAFIgZAIIgMADIgDgZg");
	this.shape_111.setTransform(90.7,339.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("Aj3CdQgIgBgHgDIgNgHIgLgJQgPgQgDgXQgIgnAageQAagcAkgOQAggOAggNIAogNQBdgfBZgbIAAABIgCAAIAPgFQAPgGARgCIADgCIAygMIBGgPQAigKAjACIACAMIgDgGIgCAKIgCAAIhPAMIgrAKIgtALQAKASAHAUQAHATAFAUIAEAYIALgDIAZgHIAUgFIAxgMIApgGIABABIgCAOIhDAQIg8AOQgcAJgcAGQgOABgPAFIgyAQIgvASIgOAEIgLAFIgjANIgCgEIACAEIgeALIgJADIgHADIgaAJQgRAFgPAKIgLAGIgGACQgUAIgQAPIgDAJIgDACQgKgCgKgDgAjVAAQgfAOgYAYQgcAcANAlQALAhAiAGIAEgEIAHgCIACgEQADgDAGgFQAPgLATgHQAEgBAEgCQAjgTAngMIAOgEIgCAAQgEgBgBgEIgQgcIAAgBQgTgfghgRQgDgBgBgDIgwASgAiRgaQAgAVAUAeQAFAJAQAeIAggNQgDgNgFgMQgFgSgNgNQgSgWgXgLgAhUguQASAMAOARQAWAaAHAjIB/gpQgCgDAAgCIAAgHIgFgWIgJgcQgIgVgTgLgABUhgIAHAJQAVAcAFAiQACAJgBAJIABAGIAAABIAXgEIgDgcQgFgpgZgfg");
	this.shape_112.setTransform(89.2,340.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AhOCQIgIgGIAAACIgBgCIgHgPQgOgkABgnQABgjAHggQABgGACgFQALgZANgYQAUgmAbgZQAZgZAlAJIAIACQASADAOAKIALALIAJAKQASAUgLAaIgBADIgEAKQgGANgMAIQADAPgCAOQgBANgKAEIACAbQACAOgHAMQgIANgOAHIgCAPQgDAPgGAOIgIAOQgNAUgVAFQgKACgJAAQgcAAgYgSgAgxgvQgIAFgFAHQgLAOgHAQQgdA8AhA6QAHAMALAHQAaASAegLQAKgFAGgJQANgVABgYQgIAAgSgGQgQgFgPgUQgOgUgBgjQAOAkAMAKQAMALAIAGQALAFATAAQALgCAIgJQAFgJgBgJQgEgdgPgVQgUgfghgHIgIgBQgMAAgMAJgAAHhCQAmASAQAmQACgIAAgIQABgIgCgIQgCgTgKgOQgIgNgMgHIgJgGIgBAAQgXgLgbABQgdAWgPAkQAMgMASgGQALgDAKAAQAQAAAOAIgAgPiAQASABASAHQAeAMATAaIADAGIAFANIAEgHQACgDABgDQAJgMgEgPQgDgOgMgHQgYgQgfgCQgTABgQANg");
	this.shape_113.setTransform(108.5,352.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC99").s().p("Ag5CEQgLgHgHgMQggg6Acg8QAIgQAKgOQAGgHAHgFQAQgLARADQAhAHATAfQAPAVAEAdQACAJgFAJQgIAJgMACQgTAAgKgFQgIgGgMgLQgMgKgOgkQABAjAOAUQAOAUARAFQARAGAJAAQgCAYgNAVQgFAJgLAFQgLAEgLAAQgSAAgQgLgAAJhCQgYgNgbAIQgTAGgLAMQAOgkAegWQAagBAXALIACAAIAJAGQAMAHAHANQAKAOADATQABAIAAAIQAAAIgDAIQgQgmglgSgABKhMIgDgGQgSgagfgMQgSgHgSgBQAQgNAUgBQAeACAZAQQALAHAEAOQADAPgIAMQgBADgDADIgEAHIgFgNg");
	this.shape_114.setTransform(108.4,352.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(1.8,1,1).p("AgVhBQALAbAKAfQAQAjAGAm");
	this.shape_115.setTransform(103,357.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F0FF7A").s().p("AgrBGQgkhFAahIQAXgNAZACQAFADAHAEIANAHIAXA6QAQAjAGAmQgZANgZAGIgPABQgWAAgVgNg");
	this.shape_116.setTransform(98.7,358);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("ACSBpQgSgDgPgIIgGgFQhLgGhGgSQhEgShAgXQgZgLgYgNQgKgEgEgJQAAgIAIgBIAiATIAHADIA2ATQAkANAnAJIAoAKIBKAPIAkADIgLgfQgHgXABgXIABgQIAFghIACgIIg2gBQgegBgcgDIgSgCIgigFQgRgBgOgLIgYgPQAEgBAEABIAlAFQAUAFAVADQAmAFAkACQAiABAigIQAPACAPgEQAMgEAMgBQASgBANAMQAIAGACAIIgDAFIgCADIgEAAIgNgGQgGgFgHgDQgagCgXAOQgaBIAlBEQAbASAhgGQAZgGAYgMQAGABACAIIAAADIgFAFQgkAVgpAAIgGAAg");
	this.shape_117.setTransform(82.5,357.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#8089DD").s().p("AB0BXIhNgOIgngKQglgKgkgNIg2gVIgHgDIgDgEIgGgHQgHgGgBgKQAKgOAPgJQASgLANgPQAJgIgBgKIgEgMIAPAHIAYAQQAOAKAQACIAhAFIARACQAeACAfABIA2ACIgCAHIgGAhIAAAOQgBAZAHAXIALAgIgkgEg");
	this.shape_118.setTransform(76.9,355.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#72EBEB").s().p("Ag+AEQgNgPgSgLICSgtQASALAIAWQAFANAEAPIAFATIAAAIIABAHIiAAoQgFgkgXgcg");
	this.shape_119.setTransform(90,341.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F0FF7A").s().p("Ag/BTIgCgEIACADQAFAHAEAMIgJgSgAhcAcQgTgegggVIAmgMQAXALASAWQANAOAFARQAEANADANIggAMIgVgngAB5ACIgBgFQABgIgBgKQgGgigUgdIgHgIIAZgIQAZAfAEAqIADAbIgXADg");
	this.shape_120.setTransform(88.9,343.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8089DD").s().p("AkrBsQgMglAbgcQAZgYAfgNQAYgJAYgKQABADADABQAhARATAgIAAABIAQAdQABADADABIACAAIgOAEQgnANgjARQgEADgEAAQgUAHgPALQgFAFgDADIgDAEIgGACIgFAEQgigHgKgggACNgbQgEgVgHgSQgHgTgKgTIAtgLIArgKIBPgLIACAAIACgKIACAFIAGAXQAEAPADAPQAHAcgEAbQgBAIgEAHQgBADgCABIgEgGIACgOIAAgBIgCAAIgoAGIgxAMIgUAEIgZAHIgLAEIgEgZg");
	this.shape_121.setTransform(90.6,342.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("Aj4CcQgIgBgHgEIgNgGIgLgKQgOgQgEgWQgHgoAbgdQAZgcAlgOQAggPAggMIAogNQBdgeBZgbIAAABIgBAAIAPgEQAPgHAQgBIAEgCIAygMIBGgPQAigKAiACIACAMIgCgFIgDAJIgBAAIhPAMIgrAKIguALQAKASAHAUQAHASAEAVIAEAYIAMgDIAZgHIAUgFIAxgLIAogGIABABIgCAOIhDAQIg8ANQgcAJgcAGQgNABgQAFIgyAQIgwARIgOAFIgLAEIgiANIgDgEIACAEIgeALIgIADIgIADIgZAIQgSAFgPAKIgLAGIgGACQgTAIgRAPIgDAJIgDABQgKgBgKgDgAjVAAQgfAMgYAZQgcAcAMAlQALAgAiAHIAEgFIAHgCIACgDQADgEAGgEQAPgMAUgGQAEAAAEgDQAjgSAmgNIAPgDIgCAAQgEgBgBgEIgQgdIAAAAQgSggghgRQgDgBgBgDQgZAJgYAKgAiRgaQAhAUATAfIAVAmIAggMQgDgNgFgMQgFgSgNgOQgSgVgWgMgAhTguQASALANASQAWAaAGAjICAgoIgBgFIAAgHIgFgWQgEgPgGgNQgHgVgTgMgABWhfIAHAIQAUAcAFAjQABAJAAAJIAAAGIAAAAIAYgDIgEgcQgEgqgZgfg");
	this.shape_122.setTransform(89,343.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(1.8,1,1).p("AgahAQAOAbAMAeQASAiAJAm");
	this.shape_123.setTransform(102.7,355.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#F0FF7A").s().p("AgnBIQgqhBAVhLQAWgOAZAAQAIACAFAEIANAGIAcA5QASAiAJAlQgYAOgZAIQgLADgJAAQgUAAgSgLg");
	this.shape_124.setTransform(98.6,356);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AB1BdIgHgEQhLgBhHgMQhEgNhCgUQgagIgZgMQgKgFgFgIQAAgKAIAAIAjAQIAHADIA3ARQAlAKAnAHIApAHIBLAKIAkABIgNgfQgJgXgBgWQgBgJABgHIADgjIABgHIg1ACQgdACgegBIgSAAIgigDQgRgBgPgJIgYgOQAEgBADABIAmACQAUAEAVACQAnABAjAAQAjgCAggKQAQACAOgGQAMgEAMgDQARgBAPAKQAJAGADAHIgDAGIgDADQAAgBgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgOgFQgHgEgHgCQgZgBgXAPQgUBKApBCQAcAQAggJQAagIAXgNQAGAAACAIIAAADIgEAFQglAagtABQgSgBgPgIg");
	this.shape_125.setTransform(82.6,355.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#8089DD").s().p("AB3BSIhNgKIgpgHQglgHglgLIg3gRIgIgCIgCgEIgHgGQgIgJgBgJQAJgNAPgLQAQgMANgPQAHgJgBgKIgGgMIARAHIAYAOQAPAJAQABIAhACIASABQAeABAfgCIA1gCIgCAHIgCAiQgBAIABAGQAAAZAJAWIAOAgIgkgBg");
	this.shape_126.setTransform(76.8,354.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#72EBEB").s().p("Ag+AEQgNgQgSgLICSgsQASALAIAWQAFANAEAPIAFAUIAAAHIABAHIh/AoQgGgkgXgcg");
	this.shape_127.setTransform(89.4,342.1);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#F0FF7A").s().p("Ag/BSIgCgEIACADQAFAIAEALIgJgSgAhcAcQgTgfgggVIAmgMQAXAMASAVQANAOAFASQAEAMADANIggAMQgPgegGgIgAB5ACIgBgEQABgJgBgJQgGgigTgdIgHgIIAYgIQAZAfAEApIADAbIgXADg");
	this.shape_128.setTransform(88.3,344.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8089DD").s().p("AkrBqQgMglAbgcQAZgZAfgNIAwgSQABADADACQAhARATAgIAAAAIAQAeQABADADABIACAAIgOAEQgnAMgjASQgEADgEAAQgUAGgPALIgIAIIgDADIgGADIgFAEQgigHgKgggACNgaQgEgVgHgSQgHgUgKgSIAtgLIArgJIBPgLIACAAIADgKIACAFIAGAXIAGAeQAHAcgDAbQgBAIgEAHQgBADgDABIgEgGIACgOIAAgCIgBABIgpAGIgxAKIgUAFIgZAHIgLAEIgEgZg");
	this.shape_129.setTransform(90,343.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("Aj5CaQgIgBgHgEIgNgGIgKgKQgPgQgDgXQgHgnAagdQAagaAkgQQAggOAhgMIAogNQBdgdBZgaIAAAAIAOgEQAPgHAQgBIAEgCIAygLIBFgOQAigKAjACIACAMIgCgFIgDAJIgCAAIhPAMIgrAJIgtALQAKASAHAUQAHASAEAVIAEAYIALgDIAZgHIAUgFIAxgLIApgFIABABIgCAOIhEAPIg8ANQgcAJgbAGQgOAAgPAFIgyAQIgwARIgOAEIgLAEIgjANIgCgEIACAEIgeALIgJADIgHADIgaAIQgSAFgPAKIgKAGIgHACQgTAHgQAPIgDAJIgDABQgLgBgKgDgAjVgBQgfALgZAZQgbAbAMAmQAKAgAiAHIAFgFIAGgCIADgDIAIgIQAPgLAUgGQAEgBAEgCQAjgSAngMIAOgEIgCAAQgDgBgBgEIgQgdIAAAAQgTggghgRQgDgCgBgDIgwAUgAiRgcQAgAVATAfQAGAJAPAeIAggMQgDgNgEgNQgFgSgNgNQgSgWgXgMgAhUgvQATAMANARQAWAaAGAkICAgoIgBgFIAAgHIgFgWQgEgOgGgOQgHgVgTgLgABWhfIAHAIQATAdAGAiQABAJgBAJIABAGIAAAAIAXgCIgDgdQgEgpgZgfg");
	this.shape_130.setTransform(88.5,344.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AhOCQIgIgGIAAACIgBgCIgHgPQgOgkABgnQABgjAHggQABgGACgFQALgZANgYQAUgmAbgZQAZgZAlAJIAIACQASADAOAKIALALIAJAKQASAUgLAaIgBADIgEAKQgGANgMAIQADAPgCAOQgBANgKAEIACAbQACAOgHAMQgIANgOAHIgCAPQgDAPgGAOIgIAOQgNAUgVAFQgKACgKAAQgbAAgYgSgAgxgvQgIAFgFAHQgLAOgHAQQgdA8AhA6QAHAMALAHQAaASAegLQAKgFAGgJQANgVABgYQgIAAgSgGQgQgFgPgUQgOgUgBgjQAOAkAMAKQAMALAIAGQALAFATAAQALgCAIgJQAFgJgBgJQgEgdgPgVQgUgfghgHIgIgBQgMAAgMAJgAAHhCQAmASAQAmQACgIAAgIQABgIgCgIQgCgTgKgOQgIgNgMgHIgJgGIgBAAQgXgLgbABQgdAWgPAkQAMgMASgGQALgDAKAAQAQAAAOAIgAgPiAQASABASAHQAeAMATAaIADAGIAFANIAEgHQACgDABgDQAJgMgEgPQgDgOgMgHQgYgQgfgCQgTABgQANg");
	this.shape_131.setTransform(107.9,347.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(1.8,1,1).p("AgahAQANAbANAeQASAiAJAm");
	this.shape_132.setTransform(102.8,354.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#F0FF7A").s().p("AgnBJQgphCAThKQAXgPAZAAQAHACAGAEQAGAEAHACIAcA4QASAjAJAlQgYAOgZAIQgLADgIAAQgUAAgTgKg");
	this.shape_133.setTransform(98.7,355.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AB1BdIgGgEQhLAAhIgNQhEgNhCgTQgZgIgagMQgKgFgFgIQgBgJAJgCIAjARIAHACIA4ASQAkAKAoAHIAoAGIBLAJIAkABIgNgeQgJgXgBgXIAAgPIACgjIACgHIg1ACIg7ABIgSAAIgigDQgRAAgPgJIgYgOQAEgBADABIAlACQAVAEAVABQAnACAigBQAjgCAhgKQAPACAPgGQAMgFALgCQASgCAPAKQAIAGADAIIgDAGIgCACIgDABQgHgCgHgEQgHgEgIgCQgZAAgWAPQgUBKApBCQAdAQAggJQAZgIAXgOQAGABACAHIABAEIgFAFQgkAZgtACQgTgBgPgIg");
	this.shape_134.setTransform(82.6,355.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8089DD").s().p("AB3BRIhNgJIgpgHQglgGgkgLIg4gRIgHgDIgEgDIgFgHQgJgHgBgLQAKgNANgKQARgMAMgQQAIgIgBgKIgFgMIAPAGIAZAOQAOAKASAAIAgACIARABIA9gBIA2gCIgCAHIgCAiIAAAOQABAZAJAWIANAfIgkgBg");
	this.shape_135.setTransform(76.9,354.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8089DD").s().p("AkrBqQgMgmAbgbQAZgZAfgNIAwgSQABADADACQAhARATAgIAAAAIAQAeQABADADABIACAAIgOAEQgnAMgjASQgEACgEABQgUAGgPALIgIAJIgDACIgGADIgFAEQgigHgKgggACNgaQgEgVgHgSQgHgUgKgSIAtgLIArgJIBPgLIACAAIADgKIACAFIAGAXIAGAeQAHAcgDAbQgBAIgEAHQgBADgDABIgEgGIACgOIAAgCIgBABIgpAGIgxALIgUAEIgZAHIgLAEIgEgZg");
	this.shape_136.setTransform(90,343.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#8089DD").s().p("AB0BXIhNgOIgngKQglgKgkgNIg3gVIgGgDIgDgEIgGgHQgHgGgBgKQAKgOAPgJQARgLAOgPQAJgIAAgKIgGgMIAQAHIAYAQQAOAKAQACIAhAFIARACQAeACAfABIA2ACIgDAHIgEAhIgBAOQgCAZAIAXIALAgIgkgEg");
	this.shape_137.setTransform(76.3,355.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(1.8,1,1).p("AgThCQAKAcAKAfQAOAkAFAm");
	this.shape_138.setTransform(102.3,358.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F0FF7A").s().p("AgsBFQgjhFAdhJQAXgMAaADQAFADAGAFQAHAEAGADIAWA7QAOAkAFAmQgZALgaAGIgNABQgXAAgVgPg");
	this.shape_139.setTransform(97.9,358.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("ACPBuQgSgDgOgKIgGgFQhLgIhFgVQhDgThAgaQgYgMgYgMQgKgGgDgJQAAgJAIgBIAhAVIAHADIA1AVQAkAOAmALIAoAMIBJARIAlAFIgKggQgHgYACgWIACgQIAGgiIACgHIg1gDIg7gGIgSgDIgigGQgRgCgNgLIgXgQQAEgBAEACIAkAGQAUAGAVADQAmAGAjADQAjACAigGQAPADAPgEQAMgDAMgCQASABANAMQAIAGACAIIgDAGIgDACIgDAAQgHgCgGgFQgHgFgHgDQgZgCgYAMQgcBIAiBFQAaATAhgFQAagFAZgLQAGABABAIIAAADIgFAFQgjASgmAAIgLAAg");
	this.shape_140.setTransform(81.7,358.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#8089DD").s().p("ABxBaIhLgQIgmgMQglgLglgOIg1gXIgGgDIgDgFIgFgGQgIgHAAgLQALgNAPgJQASgKAOgPQAIgHAAgLIgDgLIAOAIIAXAQQANALARACIAgAGIASADIA9AFIA2AEIgDAHIgGAgIgCAPQgCAZAHAXIAKAgIglgFg");
	this.shape_141.setTransform(76.1,355.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(1.8,1,1).p("AgThDQAKAdAKAfQAOAkAFAn");
	this.shape_142.setTransform(102.3,359.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F0FF7A").s().p("AgsBEQgjhEAdhJQAXgMAaADQAFADAGAFQAHAFAGACIAWA8QAOAkAFAnQgZALgaAEIgLABQgZAAgVgQg");
	this.shape_143.setTransform(97.9,359.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#8089DD").s().p("ABxBcIhLgTIgmgMQglgLglgPIg1gYIgGgEIgDgEIgFgFQgIgJAAgLQALgNAPgIQASgKAOgOQAIgIAAgKIgDgMIAOAIIAXARQANALARADIAgAHIASACQAeAFAfACIA2AFIgDAHIgGAfIgCAQQgCAZAHAXIAKAhIglgGg");
	this.shape_144.setTransform(76.1,356.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("ACPBxQgSgEgOgKIgGgFQhLgKhFgWQhDgVhAgbQgYgMgYgNQgKgGgDgJQAAgJAIgBIAhAWIAHADIA1AWQAkAPAmALIAoANIBJATIAlAFIgKggQgHgYACgWIACgQIAGgiIACgHIg1gEQgfgDgcgEIgSgDIgigHQgRgCgNgMIgXgQQAEgBAEACIAkAHQAUAGAVAEQAmAHAjADQAjADAigFQAPADAPgEQAMgDAMgBQASABANAMQAIAHACAIIgDAFIgDACIgDAAQgHgCgGgFQgHgFgHgDQgZgDgYAMQgcBHAiBGQAaATAhgEQAagEAZgLQAGABABAIIAAADIgFAFQgiARglAAIgNAAg");
	this.shape_145.setTransform(81.7,358.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(1.8,1,1).p("AgVhCQAMAbAJAgQAQAjAGAn");
	this.shape_146.setTransform(102.5,358.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F0FF7A").s().p("AgrBFQgkhFAahIQAXgMAZACQAFADAHAFQAHAEAGADIAYA6QAPAkAGAmQgYAMgaAFIgPABQgWAAgVgOg");
	this.shape_147.setTransform(98.2,358.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("ACSBsQgSgDgPgJIgGgFQhLgIhGgTQhEgUhAgZQgZgLgYgMQgKgGgEgJQAAgIAIgBIAiAUIAHADIA2AUQAkAOAnAKIAoAMIBKAQIAkAEIgLggQgHgXABgXIABgQIAFghIACgHIg2gDIg6gFIgSgCIgigGQgRgCgOgLIgYgQQAEAAAEABIAlAGQAUAGAVADQAmAFAkADQAiACAigHQAPADAPgFQAMgDAMgBQASAAAOAMQAIAGACAIIgDAFIgDADIgDAAQgHgCgHgFQgGgEgHgDQgagDgXANQgaBHAlBGQAbASAhgFQAZgGAZgLQAFABACAIIAAADIgEAFQgjAUgoAAIgJgBg");
	this.shape_148.setTransform(82,358);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8089DD").s().p("AB0BZIhMgQIgogLQglgKgkgOIg2gWIgIgEIgCgEIgGgHQgIgGAAgKQALgOAOgJQASgKAOgPQAHgIABgKIgGgMIAQAIIAXAQQAPALARACIAgAGIASACIA8AFIA2ADIgDAHIgFAhIgBAOQgBAYAIAYIALAgIgkgFg");
	this.shape_149.setTransform(76.4,355.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F0FF7A").s().p("AgrBHQgkhEAahJQAXgNAZABQAFACAHAFIANAGIAYA6QAPAjAGAmQgYANgaAGQgJACgHAAQgXAAgTgMg");
	this.shape_150.setTransform(98.1,356.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8089DD").s().p("AB0BVIhNgMIgngJQglgJgkgLIg2gVIgHgCIgDgEIgFgHQgIgIAAgIQAKgPAPgJQARgLAOgQQAHgIABgKIgFgMIAPAHIAYAPQAOAKAQACIAhADIARACQAeACAfAAIA2AAIgDAHIgFAiQgBAGABAIQgBAZAGAXIAMAfIgkgDg");
	this.shape_151.setTransform(76.3,354.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ABxBcIgGgFQhLgEhGgQQhEgQg/gWQgZgKgZgNQgKgGgEgGQAAgJAJgBIAhAQIAHADIA2AUQAkAMAnAIIAoAKIBKAMIAkADIgLgfQgHgXABgXQgBgJABgHIAFgiIADgHIg2AAQgeAAgcgCIgSgCIgigEQgRgBgOgKIgYgPQAEgBAEABIAlAEQAUAFAVACQAmAEAkABQAiAAAhgJQAQACAOgFQAMgDANgCQARgBAOALQAIAGACAIIgDAGIgCACQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABIgNgHQgHgEgHgDQgZgBgXAOQgaBJAkBDQAbASAhgHQAagHAYgNQAGABACAIIAAADIgFAFQgmAYgtAAQgTgDgOgIg");
	this.shape_152.setTransform(82,356.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(1.8,1,1).p("AgVhAQAMAaAKAfQAPAjAGAm");
	this.shape_153.setTransform(102.4,355.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#F0FF7A").s().p("AgrBIQgkhDAahKQAXgOAZABQAFACAHAFIANAFIAYA6QAPAiAGAmQgYAOgaAHQgKACgIAAQgVAAgTgLg");
	this.shape_154.setTransform(98,356.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("ABwBdIgGgFQhKgChGgPQhEgPhAgVQgZgJgYgNQgKgFgEgIQAAgHAIgCIAiAQIAHADIA2ATQAkALAmAIIAoAIIBLALIAjACIgKgfQgIgXABgXIABgQIAFghIACgIIg1ABIg7gBIgRgBIgigDQgRgBgOgKIgYgPQAEgBAEACIAlADQATAEAWACQAmADAjAAQAjAAAhgKQAPACAPgFQAMgEAMgCQASgBAOAKQAIAGACAIIgDAGIgDADIgDAAIgOgGQgGgEgHgDQgagBgXAPQgZBJAkBDQAbARAhgIQAZgHAZgNQAFABACAHIAAAEIgEAFQgnAYgtABQgSgCgPgIg");
	this.shape_155.setTransform(82,356);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8089DD").s().p("AB0BUIhMgLIgogJQglgIgkgLIg2gTIgHgDIgCgDIgHgHQgHgIgBgIQALgPAOgKQASgLAOgQQAIgIAAgKIgFgMIAQAHIAXAOQAOAKARABIAgAEIARABIA9ABIA1gBIgCAHIgFAiIgBAOQAAAZAHAWIAKAgIgjgCg");
	this.shape_156.setTransform(76.3,354.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFCC99").s().p("Ag4CEQgLgHgHgMQghg6Adg9QAHgPALgOQAFgHAIgFQAPgMARAEQAhAGAUAfQAPAVAEAdQACAKgFAJQgIAIgMADQgTAAgKgGQgIgGgNgKQgMgLgNgkQAAAkAPAUQAOATARAGQASAGAIAAQgCAXgMAVQgGAJgLAFQgMAFgLAAQgRAAgQgLgAAJhDQgYgMgbAIQgSAGgMAMQAOgkAegWQAagBAYAKIABABIAJAGQAMAHAIAMQAKAOADATQABAIgBAIQAAAIgCAIQgQgmgmgSgABLhMIgDgGQgTgbgegLQgTgIgRgBQAQgNATAAQAeABAZAQQALAHAEAPQADAPgIALIgDAGIgEAHIgFgMg");
	this.shape_157.setTransform(109,347.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AhNCQIgIgGIAAACIgBgBIgHgQQgOgkAAgnQABgjAHggIADgLIAYgxQAVgmAagZQAZgaAlAJIAIACQATADAOALIAKAKIAJAKQASAUgLAaIgBADIgEAKQgGANgLAIQACAPgBAOQgBANgLAEIADAbQABAPgGAMQgIANgOAHIgCAPQgDAPgGAOIgHANQgNAUgWAGQgKACgJAAQgcAAgYgSgAgwgvQgIAFgGAHQgKAOgHAPQgeA9AiA6QAHAMALAHQAaASAegMQALgFAFgJQANgVACgXQgJAAgSgGQgQgGgPgTQgOgUgBgkQAOAkAMALQAMAKAIAGQALAGATAAQALgDAIgIQAFgJgBgKQgFgdgPgVQgTgfghgGIgJgBQgMAAgLAJgAAIhDQAlASARAmQACgIAAgIQAAgIgBgIQgDgTgKgOQgHgMgNgHIgIgGIgCgBQgXgKgbABQgdAWgOAkQALgMATgGQAKgDAKAAQARAAAOAHgAgPiBQASABASAIQAfALASAbIADAGIAFAMIAEgHIADgGQAJgLgEgPQgEgPgKgHQgZgQgegBQgUAAgQANg");
	this.shape_158.setTransform(109.2,347.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(1.8,1,1).p("Agcg/QAOAaAOAeQATAhAKAl");
	this.shape_159.setTransform(104.3,354.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#F0FF7A").s().p("AglBJQgshAAShLQAWgPAZgBQAIACAHAEQAFAEAHABIAdA4QATAhALAlQgYAPgZAJQgMAEgKAAQgTAAgRgKg");
	this.shape_160.setTransform(100.2,355.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AB3BeIgHgEQhLAChHgLQhGgKhBgRQgagIgagLQgLgEgFgJQAAgJAIgBIAjAPIAIADIA4APQAlAKAnAEIApAHIBLAGIAlgBIgPgeQgKgWgBgWIgBgQIACgjIABgHIg1AEQgdACgeABIgSAAIgigBQgSAAgPgJIgYgNQAEgBAEABIAlABQAUACAWABQAmABAjgCQAigDAhgLQAPABAPgHQALgEAMgDQASgCAPAKQAIAFADAIIgDAGIgCADIgDAAQgHgBgHgEQgHgEgHgCQgZABgXAPQgRBLArBAQAdAPAggJQAZgJAXgPQAFABADAHQAAABAAAAQAAABABAAQAAAAAAABQAAAAgBABIgDAFQgkAagtAEQgTgBgPgHg");
	this.shape_161.setTransform(84.3,355.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#8089DD").s().p("AAqBIIgpgHQglgFglgJIg4gPIgHgDIgEgDIgGgHQgIgIgBgKQAJgMANgLQAQgNAMgRQAHgIgBgKIgGgLIAQAGIAZAMQAPAKARgBIAhABIARAAQAfAAAegCIA2gEIgCAHIgBAiIAAAOQACAZAKAWIAOAeIgkABIhOgGg");
	this.shape_162.setTransform(78.5,355);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#72EBEB").s().p("Ag9AEQgOgPgTgMICRgsQATAMAIAVIAKAcIAFATIAAAHIACAHIh/ApQgHgkgWgcg");
	this.shape_163.setTransform(90,342.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F0FF7A").s().p("Ag8BSIgCgEIACAEQAFAHAEALIgJgSgAhaAcQgVgfgggUIAmgNQAXAMASAWQANANAHASIAGAZIgeAMIgWgmgAB5ABIAAgEIgCgSQgFghgWgdIgHgIIAZgIQAaAeAEAqIAFAbIgYADg");
	this.shape_164.setTransform(88.9,344.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#8089DD").s().p("AkpBqQgNglAbgcQAYgYAegNIAwgSQABADADABQAiARATAgIAAAAIARAdQABADAEACIACABIgOACQgnANgiATIgIACQgUAHgOAMQgGADgDAFIgCACIgHACIgEAFQgigHgMghgACMgbQgFgUgHgTQgIgUgLgRIAugMIArgJIBOgMIACAAIACgJIACAGIAHAVIAHAgQAIAagCAcQgBAHgEAHIgEAFIgEgHIACgNIAAgBIgCAAIgnAFIgxALIgUAFIgZAHIgLADIgFgYg");
	this.shape_165.setTransform(90.7,344.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Aj1CbQgIgBgHgEIgNgGIgLgKQgPgQgEgXQgIgnAZgeQAZgaAkgPQAggOAggNIAogMQBbgeBZgbIAAABIgBAAIAPgEQAPgHAQgBIAEgCIAygMIBFgOQAigKAiACIACAMIgCgFIgCAJIgCAAIhOAMIgrAJIguALQALASAIAUQAHATAFAUIAFAYIALgDIAZgHIAUgFIAxgLIAngFIACABIgCANIhDAQIg7ANQgcAJgcAGQgNAAgQAFIgyAQIguARIgPAFIgKAEIgjANIgCgEIACAEIgeALIgIADIgIACIgZAJQgSAFgOAKIgLAGIgGACQgTAIgQAPIgDAJIgDABQgLgBgKgDgAjWAAQgeALgYAYQgbAcANAlQAMAhAiAHIAEgFIAHgCIACgDQADgEAGgEQAOgMAUgGIAIgDQAigSAngNIAOgDIgCAAQgEgCgBgDIgRgdIAAAAQgTgggigRQgDgBgBgDIgwAUgAiSgbQAhAUAUAfIAWAmIAfgMIgHgZQgGgSgOgNQgSgWgXgMgAhWgvQATAMAOARQAXAaAHAkIB+gpIgBgFIAAgHIgGgVIgKgcQgIgVgTgMgABShfIAIAIQAVAdAGAhIABASIABAGIAAABIAXgDIgEgcQgFgqgageg");
	this.shape_166.setTransform(89.2,344.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(1.8,1,1).p("Agdg+QAOAaAPAdQAUAhAKAl");
	this.shape_167.setTransform(104.5,353.4);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#F0FF7A").s().p("AgkBKQgtg+AQhMQAVgQAagBQAHABAHAEQAFAEAHABIAfA3QAUAhALAlQgWAPgZAJQgNAEgLAAQgSAAgRgIg");
	this.shape_168.setTransform(100.5,354.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AB4BfIgGgEQhLAEhIgIQhFgJhDgPQgagHgagLQgLgEgFgIQgBgJAJgCIAjAPIAIACIA4AOQAlAIAoAFIApAEIBLAFIAlgBIgQgeQgKgXgCgWIgBgQIAAgiIACgHIg2AFQgcADgeABIgSABIgjAAQgRAAgPgJIgZgMQAEgBAEABQASgBASABQAVACAWAAQAmAAAjgDQAjgEAggMQAPABAOgHQALgFANgDQARgDAPAKQAJAFADAHIgCAGIgCADIgEABQgHgBgHgEQgHgEgHgBQgaABgVAQQgQBMAtA+QAdAPAggLQAZgJAWgPQAGAAADAHIAAAEIgEAFQgjAcgsAEQgTAAgQgHg");
	this.shape_169.setTransform(84.6,354.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#8089DD").s().p("AAsBHIgqgFQglgEglgJIg4gNIgIgDIgDgDIgHgHQgIgGgCgLQAIgNAOgMQAPgNAMgQQAHgJgBgKIgHgLIARAFIAZANQAPAIARAAIAiAAIAQAAQAfgCAegDIA2gFIgCAHIgBAiIACARQACAWAKAWIAQAeIglABIhNgEg");
	this.shape_170.setTransform(78.9,354.3);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#72EBEB").s().p("Ag9ADQgOgPgTgMICRgqQATALAIAVIAKAcIAGAUIAAAHIABAHIh+AnQgHgkgXgcg");
	this.shape_171.setTransform(90,342.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F0FF7A").s().p("Ag9BRIgBgEIACAEIAJASIgKgSgAhbAbQgUgfghgVIAmgLQAXALATAWQANANAGASIAIAaIggAMIgWgngAB6ACIgBgDIgBgSQgGgjgVgcIgIgIIAZgIQAaAeAFAqIAEAaIgXAEg");
	this.shape_172.setTransform(88.9,344.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#8089DD").s().p("AkpBoQgNgmAbgcQAXgYAfgMIAwgRQABACADABQAhASAUAgIAAAAIARAdQABADADACIADABIgPACQgmAMgjATIgIADQgTAFgPAMQgGAFgCADIgDADIgGACIgFAFQghgIgMgggACMgZQgFgVgHgTQgIgTgLgTIAugLIArgJIBOgKIACAAIADgJIACAEIAHAXIAHAfQAHAbgCAbQgBAIgDAHIgEADIgEgFIABgOIAAgCIgBABIgoAFIgxALIgUAEIgZAHIgLADIgFgXg");
	this.shape_173.setTransform(90.7,344.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("Aj1CYQgIgBgHgEQgHgCgGgEIgLgKQgPgQgEgXQgIgnAZgdQAZgbAkgPQAfgNAhgMIAngNQBcgdBZgZIAAAAIgBABIAPgFQAPgHAQgBIAEgBIAygMIBFgOQAigJAjADIACALIgCgFIgDAJIgCAAIhOALIgrAJIguALQALASAIAUQAHATAFAUIAFAYIALgDIAZgHIAUgEIAxgLIAogFIABABIgBAOIhEAOIg7ANQgcAJgcAGQgNAAgQAFIgyAPIguARIgPAEIgKAEIgjANIgDgEIACAEIgdALIgJADIgHACIgZAJQgSAEgPALIgLAFIgGACQgTAIgQAPIgDAIIgDACQgKgCgKgDgAjWgCQgfAKgXAYQgbAcANAmQAMAgAhAHIAFgEIAGgCIADgDQACgEAGgEQAPgMATgGIAIgDQAjgSAmgMIAPgDIgDAAQgDgCgBgDIgRgdIAAgBQgUgfghgSQgDgBgBgDIgwAUgAiTgdQAhAVAUAfIAWAnIAggMIgIgaQgGgSgNgNQgTgWgXgMgAhWgwQATAMAOARQAXAaAHAkIB+gnIgBgFIAAgHIgGgWIgKgcQgIgVgTgLgABShfIAIAJQAVAcAGAiIABASIABAGIAAAAIAXgCIgEgcQgFgqgagfg");
	this.shape_174.setTransform(89.2,344.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFCC99").s().p("Ag7CCQgLgHgGgMQghg6Aeg8QAIgPAKgOQAGgHAIgFQAPgLARAEQAhAHATAfQAPAVAEAeQABAJgFAJQgIAJgMACQgTAAgKgGQgIgGgMgLQgMgLgNgkQAAAkAOAUQAOATARAGQARAGAJABQgDAXgMAVQgGAIgLAFQgLAFgKAAQgTAAgQgNgAAKhDQgYgMgbAHQgTAGgMAMQAPgkAegVQAbgBAWALIACABIAJAFQAMAHAHANQAKAOACATQACAIgBAJQAAAHgDAIQgPgmglgTgABLhLIgDgGQgSgbgegMQgSgHgSgCQAQgMAUgBQAeACAYARQAMAHADAOQAEAPgJAMIgEAGIgEAGQgCgGgDgGg");
	this.shape_175.setTransform(107.7,359);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AhQCPIgJgGIABACIgCgCIgGgPQgOgkACgnQABgjAHggIAEgLQAMgZANgXQAVgmAbgZQAYgZAmAJIAIADQASADAOALIALAKIAIAKQASAVgLAZIgCAEIgEAJQgGANgMAIQADAPgCAPQgBALgLAFIACAcQACAOgHAMQgIANgOAGIgCAQQgEAOgGAOIgIANQgNAUgWAFQgJABgJAAQgcAAgYgSgAgwgwQgIAFgGAIQgLANgHAQQgeA8AgA6QAHAMALAHQAZATAfgLQAKgFAGgJQANgVACgXQgIAAgSgGQgQgGgOgUQgOgUgBgkQAOAlALAKQAMALAIAGQALAGATAAQALgCAIgIQAGgJgCgKQgEgdgOgWQgTgfghgHIgJgBQgMAAgLAIgAAIhCQAlASAQAnQACgIAAgIQABgIgBgIQgDgTgJgOQgIgNgMgHIgIgGIgCgBQgXgLgaABQgeAWgPAkQAMgNASgFQAKgDAKAAQARAAAOAIgAgNiAQARABASAIQAfAMASAbIADAFQADAGABAHIAFgHIADgFQAJgMgDgPQgEgPgLgHQgZgQgegCQgTAAgQANg");
	this.shape_176.setTransform(107.8,358.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(1.8,1,1).p("AgJhDQAGAcAFAgQAJAlgBAm");
	this.shape_177.setTransform(102.7,365.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F0FF7A").s().p("AgwBBQgZhHAmhGQAagKAXAFQAGADAGAGQAGAFAGADIANA9QAJAkgBAnQgaAJgaADIgFAAQgcAAgWgTg");
	this.shape_178.setTransform(97.8,365.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("ACEB4QgSgFgNgKIgFgFQhJgPhCgcQhAgag8gfQgXgMgVgQQgJgHgDgKQACgIAJAAIAdAXIAHAEIAxAaQAiASAlANIAlAQIBHAYIAjAIIgFghQgEgXAFgXIAEgQIALggIAEgHIg1gIQgegFgcgHIgRgEIgggJQgRgEgMgMIgVgSQAFAAADACIAjAJQAUAIAUAGQAjAIAkAHQAiAFAjgDQAPAEAPgDQAMgBANAAQASACALANQAHAHABAIIgFAFIgCACIgEAAQgGgDgFgFQgGgGgHgDQgZgFgZAKQgnBEAZBJQAYAVAhgCQAagDAbgJQAFACABAIIgBADIgFAEQgeANgeAAQgNAAgNgDg");
	this.shape_179.setTransform(82,363);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#8089DD").s().p("ABjBiIhJgZIgkgPQgkgNgigSIgygbIgGgDIgCgEIgFgIQgGgJACgKQAMgMARgIQASgIARgOQAJgGABgKIgCgNIAOAKIAUASQAMAMARAEIAfAJIARAEQAdAGAfAGIA0AIIgDAGIgLAfIgEAQQgFAZADAXIAGAhIgjgIg");
	this.shape_180.setTransform(77.3,360.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#72EBEB").s().p("Ag9AEQgOgQgSgLICSgsQASALAIAWIAJAcIAFATIAAAHIABAIIh/AnQgGgjgWgcg");
	this.shape_181.setTransform(90.7,345);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#F0FF7A").s().p("Ag/BSIgCgEIACAEQAFAHAEALIgJgSgAhcAcQgTgegggVIAngNQAWAMASAWQANANAFASQAEAMADANIgfAMIgWgmgAB4ACIAAgEQABgJgBgJQgFgigVgdIgHgIIAYgIQAaAfAEApIADAbIgXAEg");
	this.shape_182.setTransform(89.6,346.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#8089DD").s().p("AkrBqQgMglAbgbQAZgZAfgNIAwgSQABACADACQAhARATAhIAAAAIAQAcQABAEADABIACAAIgOAEQgnAMgjASIgIADQgTAGgPAMQgGAFgDADIgCADIgHACIgFAEQghgGgLghgACMgbQgDgUgHgSQgIgUgKgSIAugMIArgJIBPgLIACgBIACgIIACAFIAGAVQAEAQADAQQAHAbgDAcQgCAIgDAGQgCADgCACIgEgHIACgOIAAgBIgCAAIgoAGIgxALIgUAFIgZAHIgLADQgCgNgDgMg");
	this.shape_183.setTransform(91.3,346.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("Aj4CaQgIgBgIgDIgMgHIgLgKQgPgQgDgXQgHgnAagdQAagaAkgQQAggOAggMIAogNQBdgdBZgaIAAAAIAOgEQAPgHAQgBIAEgCIAygMIBGgOQAigKAiADIACAMIgCgGIgCAJIgCABIhPALIgrAJIguALQAKATAIATQAHATADAUQADAMACANIALgDIAZgIIAUgEIAxgLIAogGIACABIgCAOIhEAQIg8AMQgcAKgcAGQgNAAgPAFIgzAPIguARIgPAFIgLAEIgjANIgCgEIACAEIgeALIgIADIgIACIgaAJQgRAFgPAKIgLAGIgHACQgTAIgQAPIgDAIIgDACQgLgCgJgDgAjVAAQgfALgZAYQgbAbAMAmQALAgAhAHIAFgEIAHgCIACgDQADgEAGgEQAPgMATgGIAIgDQAjgSAngNIAOgDIgCAAQgDgCgBgDIgQgcIAAgBQgTggghgRQgDgCgBgCIgwAUgAiRgbQAgAVATAeIAVAmIAggMQgDgNgEgMQgFgSgNgNQgSgWgXgMgAhUgvQASAMAOARQAWAaAGAkIB/goIgBgFIAAgHIgFgWIgJgcQgIgVgSgLgABVhfIAHAIQAUAdAFAiQACAJgBAJIAAAGIABAAIAXgCIgDgdQgEgpgagfg");
	this.shape_184.setTransform(89.8,347.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFCC99").s().p("AhgBvQgJgKgDgNQgQhCAugxQAMgNANgLQAIgFAIgDQASgGAQAIQAdAQAKAjQAIAZgEAdQgBAJgIAIQgKAFgLAAQgRgGgIgIQgIgJgJgNQgIgOgDgmQgKAiAJAXQAIAXAQALQAQAKAFADQgGAWgSARQgIAGgOACIgEAAQgdAAgSgWgAAXg9QgVgTgbAAQgTAAgPAJQAYgfAjgMQAYAGAVARIABABIAHAIQAKAKADAOQAGARgDASQgBAJgDAHQgCAHgFAGQgEgngfgcgABYg0IgBgGQgKgfgagTQgQgNgSgGQAVgIASAGQAdAJATAXQAJAKAAAPQgBAPgLAJIgGAEIgGAGIgBgOg");
	this.shape_185.setTransform(106.1,376.4);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("Ag3CYQgngDgYggIgHgIIAAACIgBgCIgBgRQgEgnALgkQALggAQgfIAHgKIAlgnQAegfAfgRQAggRAhATIAIAFQARAIAKAOIAHANIAGALQAMAZgSAWIgCACIgHAJQgJALgOAEQgBAPgGAMQgFALgLADQgDANgCAOQgDAOgKAKQgLAKgQADQgCAHgEAHQgHANgHAMIgMALQgQAOgWAAIgEAAgAgkg7QgJADgHAFQgOALgMANQgtAxAPBCQAEANAIAKQAUAYAggCQAOgCAHgGQASgRAHgWQgGgDgPgKQgQgLgJgXQgIgXAKgiQACAmAJAOQAIANAJAJQAIAIAQAGQAMAAAKgFQAIgIABgJQAEgdgIgZQgKgjgegQQgJgFgJAAQgHAAgIADgAAXg9QAfAcAFAnQAEgGADgHQADgHABgJQACgSgFgRQgEgOgKgKIgHgIIgBgBQgVgRgYgGQgiAMgYAfQAOgJAUAAQAaAAAVATgAARh/QATAGAPANQAaATAKAfIACAGIABAOIAGgGIAFgEQALgJABgPQAAgPgIgKQgUgXgcgJQgIgCgIAAQgMAAgMAEg");
	this.shape_186.setTransform(106,376.4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(1.8,1,1).p("AAKhDQgCAdgEAgQgEAmgKAk");
	this.shape_187.setTransform(100.6,379.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F0FF7A").s().p("AgMBRQgggIgPgaQgBhKA5g4QAYgDAWAMQAFAFADAHIAJALIgGA8QgEAngMAlIgJAAQgWAAgTgEg");
	this.shape_188.setTransform(95.6,378.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#8089DD").s().p("AA1BwIg6grIgfgZQgdgYgagXIgmgoIgFgGIAAgFIgCgJQgDgKAFgKQAPgHARgDQAVgDATgHQAKgEAEgKIACgMIAKANIAOAXQAHAPAPAIIAZASIAPAJIA0AbIAuAVIgFAGIgUAcIgIANQgMAWgEAXIgFAhIgfgSg");
	this.shape_189.setTransform(79.3,368.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("ABOCOQgPgKgIgNIgEgHQg9gjg3gtQg0gpgtguQgSgTgPgWQgGgJABgKQAEgIAIADIAUAfIAFAFIAmApQAaAZAdAWIAfAZIA6ArIAfASIAFghQAEgXAMgWIAIgMIAUgcIAFgFIgugXIg0gbIgNgJIgbgSQgPgIgHgPIgOgXQAEABADACIAdATQAQANARALQAeATAgARQAeAOAhAHQANAIAPACQALABAMAEQAQAGAHAQQAEAJgBAHIgGACIgDACIgDgBIgJgJQgEgHgFgFQgVgMgbACQg4A2AABMQAQAbAfAHQAaAFAbgBQAEAEgBAHIgCADIgGACIgSABQgjAAgfgPg");
	this.shape_190.setTransform(82.7,372.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#72EBEB").s().p("Ag8ALQgRgPgTgJICLg5QAVAJAKAVIANAaIAIATIABAHIABAHIh4A0QgLgjgagZg");
	this.shape_191.setTransform(92.3,346.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#F0FF7A").s().p("AgyBbIgDgFIAEAEIAKARIgLgQgAhWAnQgYgegjgQIAlgPQAYAJAVASQAPAOAIAQIAKAaIgeAPQgTgcgHgJgAB6gEIgBgHQgBgJgCgIQgKgigYgaIgIgHIAYgLQAcAcALApIAHAbIgYAHg");
	this.shape_192.setTransform(91.3,348.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#8089DD").s().p("AkeCGQgSgjAYgfQAVgaAdgPIAtgZQACADADABQAjAPAXAfIABAAQAKANAJAOQACADAEABIACABIgOAEQglAQghAVQgDADgEABQgTAIgNANIgHAIIgCAEIgHACIgEAFQgigDgPgggACFgmQgGgUgJgSQgLgTgMgQIAsgQIAqgNIBMgTIACAAIACgJIADAFIAJAVIAKAeQALAaAAAcQAAAIgDAGIgDAFIgEgFIAAgPIgBgBIgBABIgoAJIgvAQIgTAGIgYAJIgLAEQgDgMgFgLg");
	this.shape_193.setTransform(93.4,348.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AjlCzQgIAAgIgDIgNgFIgMgJQgRgPgGgWQgNgmAXgfQAVgeAigUQAegOAfgPIAmgRQBYgmBWgiIAAABIgBAAIAOgGQAOgIAQgDIAEgCIAwgQIBEgVQAggNAjgBIAEAMIgDgFIgCAJIgCABIhMATIgqAMIgsAQQAMAQALATQAJASAGAUQAFAMADAMIALgFIAYgJIATgGIAvgQIAogJIACAAIAAAPIhCAVIg6AUQgaAKgbAIQgOADgOAFIgwAWIguAUIgNAHIgKAEIghAQIgDgDIADAEIgdANIgIAEIgHADIgYALQgRAHgOAKIgJAIIgHACQgSAKgOAQIgCAJIgDACIgVgDgAjXAVQgdAPgVAaQgYAfASAkQAPAfAiAEIAEgGIAHgCIACgEIAHgIQANgNATgIQAEgBADgCQAhgWAlgPIAOgFIgCAAQgEgCgCgDQgJgNgKgNIgBgBQgXgegjgQQgDAAgCgCIgtAXgAiXgKQAjAPAYAeQAHAJATAcIAegOIgKgaQgIgQgPgOQgVgTgYgJgAhdgkQAUAKAQAQQAaAYALAjIB5gyIgBgHIgBgHIgIgVIgNgbQgLgUgUgJgABGhjIAIAHQAYAbAKAiQACAIABAJIABAGIAAABIAXgGIgHgbQgKgpgdgdg");
	this.shape_194.setTransform(91.9,349.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:328.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]}).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:328.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},40).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:328.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},23).to({state:[{t:this.instance_13,p:{rotation:0.3,x:112.4,y:327.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:0.8,x:112.4,y:327.1,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:1,x:112.4,y:326.7,regX:76.6,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:329.4,regX:76.5,scaleX:1.065,scaleY:0.936,skewX:-0.6,skewY:0.2,startPosition:1,regY:10}}]},3).to({state:[{t:this.instance_13,p:{rotation:-0.2,x:112,y:332,regX:76.6,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:53,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:-0.9,x:111.7,y:334.7,regX:76.6,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:54,regY:10}}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:82.5,y:357.7}},{t:this.shape_116,p:{x:98.7,y:358}},{t:this.shape_115,p:{x:103,y:357.7}},{t:this.shape_114,p:{x:108.4,y:352.1}},{t:this.shape_113,p:{x:108.5,y:352.1}}]},1).to({state:[{t:this.instance_13,p:{rotation:-2.5,x:110.9,y:342.5,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:9,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:-2.5,x:110.9,y:343.1,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:9,regY:10}}]},2).to({state:[{t:this.shape_130,p:{y:344.4}},{t:this.shape_129},{t:this.shape_128,p:{y:344.1}},{t:this.shape_127,p:{y:342.1}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_113,p:{x:107.9,y:348.8}},{t:this.shape_114,p:{x:107.7,y:348.8}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131,p:{y:347.9}},{t:this.shape_114,p:{x:107.7,y:347.9}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_117,p:{x:82,y:357.4}},{t:this.shape_137},{t:this.shape_116,p:{x:98.1,y:357.8}},{t:this.shape_115,p:{x:102.4,y:357.5}},{t:this.shape_113,p:{x:107.9,y:349.3}},{t:this.shape_114,p:{x:107.8,y:349.3}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_114,p:{x:107.8,y:350.3}},{t:this.shape_131,p:{y:350.3}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_113,p:{x:107.9,y:350.9}},{t:this.shape_114,p:{x:107.8,y:350.9}}]},1).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_113,p:{x:107.9,y:350.1}},{t:this.shape_114,p:{x:107.8,y:350.1}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_117,p:{x:82,y:357.4}},{t:this.shape_137},{t:this.shape_116,p:{x:98.1,y:357.8}},{t:this.shape_115,p:{x:102.4,y:357.5}},{t:this.shape_113,p:{x:107.9,y:349.3}},{t:this.shape_114,p:{x:107.8,y:349.3}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_115,p:{x:102.4,y:356.4}},{t:this.shape_113,p:{x:107.9,y:348.3}},{t:this.shape_114,p:{x:107.7,y:348.3}}]},1).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_131,p:{y:347.9}},{t:this.shape_114,p:{x:107.7,y:347.9}}]},1).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_137},{t:this.shape_117,p:{x:82,y:357.4}},{t:this.shape_116,p:{x:98.1,y:357.8}},{t:this.shape_115,p:{x:102.4,y:357.5}},{t:this.shape_113,p:{x:107.9,y:349.3}},{t:this.shape_114,p:{x:107.8,y:349.3}}]},3).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_140},{t:this.shape_141},{t:this.shape_139},{t:this.shape_138},{t:this.shape_114,p:{x:107.8,y:350.3}},{t:this.shape_131,p:{y:350.3}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_113,p:{x:107.9,y:350.9}},{t:this.shape_114,p:{x:107.8,y:350.9}}]},1).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_148},{t:this.shape_149},{t:this.shape_147},{t:this.shape_146},{t:this.shape_114,p:{x:107.8,y:350.1}},{t:this.shape_113,p:{x:107.9,y:350.1}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_117,p:{x:82,y:357.4}},{t:this.shape_137},{t:this.shape_116,p:{x:98.1,y:357.8}},{t:this.shape_115,p:{x:102.4,y:357.5}},{t:this.shape_113,p:{x:107.9,y:349.3}},{t:this.shape_114,p:{x:107.8,y:349.3}}]},2).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_115,p:{x:102.4,y:356.4}},{t:this.shape_113,p:{x:107.9,y:348.3}},{t:this.shape_114,p:{x:107.7,y:348.3}}]},1).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_131,p:{y:347.9}},{t:this.shape_114,p:{x:107.7,y:347.9}}]},1).to({state:[{t:this.shape_130,p:{y:343.9}},{t:this.shape_136},{t:this.shape_128,p:{y:343.5}},{t:this.shape_127,p:{y:341.5}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_131,p:{y:347.9}},{t:this.shape_114,p:{x:107.7,y:347.9}}]},20).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158,p:{x:109.2,y:347.4}},{t:this.shape_157,p:{x:109,y:347.4}}]},1).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_158,p:{x:109.5,y:346.3}},{t:this.shape_157,p:{x:109.3,y:346.3}}]},1).to({state:[{t:this.instance_13,p:{rotation:-2.4,x:111.4,y:345.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:9,regY:10}}]},2).to({state:[{t:this.instance_13,p:{rotation:-2.4,x:111.4,y:345.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:9,regY:10}}]},1).to({state:[{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:333.7,regX:76.7,scaleX:1.187,scaleY:0.849,skewX:-0.8,skewY:-0.4,startPosition:1,regY:9.8}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:328,regX:76.7,scaleX:1.031,scaleY:0.984,skewX:0,skewY:0,startPosition:1,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:326,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:327.1,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},4).to({state:[{t:this.instance_13,p:{rotation:0,x:112.3,y:328.8,regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1,regY:10}}]},2).wait(162));

	// FIZ_23_part_039
	this.instance_14 = new lib.FIZ_23_part_009("single",0);
	this.instance_14.setTransform(135,319.6,0.977,1,0,0,0,41.6,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(40).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(1).to({rotation:0.3,x:135.1,y:318.8},0).wait(1).to({rotation:0.8,x:135.2,y:318.3},0).wait(1).to({rotation:1,x:135.3,y:318},0).wait(3).to({rotation:0.2,x:135.2,y:320.2},0).wait(1).to({rotation:-0.1,x:134.8,y:322.6},0).wait(1).to({rotation:-0.8,x:134.2,y:325},0).wait(1).to({regY:43.4,rotation:-1.6,x:133.7,y:327.4},0).wait(1).to({rotation:-2.4,y:330.6},0).wait(1).to({x:133.1,y:332.2},0).wait(2).to({y:332.8},0).wait(2).to({y:331.7},0).wait(2).to({y:331.1},0).wait(43).to({startPosition:0},0).wait(1).to({regX:41.7,scaleX:0.98,rotation:-2.6,x:133.2,y:332.2},0).wait(1).to({regX:41.6,scaleX:0.98,rotation:-3.2,x:133.1,y:333.1},0).wait(2).to({regX:41.7,scaleX:0.98,rotation:-2.3,x:133.7,y:335.5},0).wait(1).to({startPosition:0},0).wait(1).to({regX:41.6,rotation:-1.6,x:134.3,y:334.6},0).wait(1).to({regX:41.7,regY:43.5,rotation:-1.1,x:135,y:333.8},0).wait(1).to({scaleX:0.98,rotation:-0.3,x:134.9,y:324.4},0).wait(1).to({rotation:0,x:135,y:318.8},0).wait(1).to({regX:41.6,y:316.9},0).wait(4).to({y:318},0).wait(2).to({y:319.6},0).wait(162));

	// FIZ_23_part_037
	this.instance_15 = new lib.FIZ_23_part_007("single",0);
	this.instance_15.setTransform(162.1,96.5,1,1,0,0,0,34.5,82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(40).to({startPosition:0},0).wait(1).to({regY:82,x:161.7,y:96.6},0).wait(1).to({regY:82.1,rotation:-0.1,x:161,y:96.9},0).wait(1).to({regY:82,rotation:-0.3,x:160.2,y:97.1},0).wait(1).to({regX:34.6,regY:82.1,rotation:-0.6,x:159.2,y:97.5},0).wait(1).to({regX:34.5,rotation:-1.1,x:158,y:97.9},0).wait(1).to({regY:82,rotation:-1.3,x:156.9,y:98.3},0).wait(1).to({regX:34.6,regY:82.1,rotation:-1.6,x:155.9,y:98.7},0).wait(1).to({regX:34.5,regY:82,rotation:-1.8,x:155.1,y:98.8},0).wait(1).to({rotation:-2.1,x:154.8,y:98.9},0).wait(14).to({regY:82.1,rotation:-1.3,x:156.5,y:97.5},0).wait(1).to({regX:34.6,rotation:0,x:162.7,y:96},0).wait(1).to({rotation:1.1,x:167.1,y:94.9},0).wait(1).to({regX:34.4,regY:82.2,rotation:1.9,x:169.3,y:94.3},0).wait(3).to({regX:34.5,regY:82.1,rotation:2.3,x:170.5,y:97.4},0).wait(1).to({regY:82,rotation:0.5,x:164.2,y:101.5},0).wait(1).to({rotation:-0.6,x:158,y:105.5},0).wait(1).to({regX:34.6,regY:82.2,rotation:-2.3,x:151.8,y:109.8},0).wait(1).to({rotation:-4.9,x:142.1,y:112.4},0).wait(1).to({regY:82,rotation:-6,x:137.7,y:115.5},0).wait(2).to({y:116.6},0).wait(2).to({x:138.3,y:114.4},0).wait(2).to({y:113.3},0).wait(43).to({startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.6,x:135.4,y:114.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.5,x:132.4,y:116.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8,x:131.3,y:118.9},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-7.3,x:134.3,y:118},0).wait(1).to({rotation:-6.8,x:137.3,y:117.1},0).wait(1).to({regX:34.7,scaleX:1,scaleY:1,rotation:-2.8,x:151.5,y:103.8},0).wait(1).to({regX:34.5,rotation:-0.6,x:159.7,y:95.9},0).wait(1).to({regY:82.1,rotation:0,x:162.6,y:93.2},0).wait(4).to({y:94.9},0).wait(2).to({x:162.1,y:96.5},0).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.8,4.6,202.6,496.6);


(lib.FIZ_FRONT_COMPHelloThere = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_23_part_038
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#72EBEB").s().p("AhEA0QAogvAPg8IAAAAQADgNABgQIABAAQAUAKAXAJIAHADIAZAIIACCLg");
	this.shape.setTransform(88.2,326.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("ACEEDQgngUgigcQgggZgbgeIgDgGIAAAAIgBgBIgHgIQgJgKgIgMQgmg0ggg5IgwhWIgEgIIgEgJIgBgBIgDgFIAAgBIgDgGIgDgGIgDgFIgGgOIgLgWIgHgOIgihNIAQAFIAAAAIAcAIIAJADIACAAIABAAIADABIACABIACABIAWADIBGAAQARgCAQgDIAQgEIACAAIACgBIACAAIAHgDIABAAIAGgDIAFgCQAVgIAUgKIADgBIARA2QARA3AVA3IAbBCIAKAXIACABIAHAOIAAABIACAGIABABQATAmAbAhIAIAJIAUAUQgCAXgLAVIgoA9IgWAXIgBACIgDADIgCABIgIAHIgDACIgCgBg");
	this.shape_1.setTransform(57.7,301.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("ACbEiIgDgBIgFgDIgBAAIAFgEIAAgBIABAAIAPgQIA4hPQAJgTAEgWIAiAYIAAAJQgBANgDANQgPA9grAvgAiljjIgBAAIgGgBIgCgBIgJgCIgagIIAAgBIgTgFIgFgCIgIgEIgJgNIAAgBIgTguIAWANQAWAOA5gHIAbgDQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAgBABAAIAmgJQASgFASgBQAUABATAFIAGgBQABACADABQAWAGAYAMIAAAAIAEACIAHAZIgFAAIgCABQgZANgYAIIgBAAIgGACIgOAEIgmAHIgeACQgdAAgcgGg");
	this.shape_2.setTransform(58.3,299.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("ACvDYIgBAAIAAAAIgDAAIgHgBQgxgFgogbIgCgCIgDgBIgBgBIgCgBIgBAAQgZgNgagHIgFAAQgCgCgDgBQgTgFgWgBIgBAAQgUACgUAFQghAIgjAHIAAABQgmgBgVgHQgTgIgIgWIgDgEQgEgFgDgKQgEgJAAgHIAAgJIgBgBQgBgJABgJQAFgpASgkQAZg2ArgsIAAgBIAJgIIACgCIADgEIABgBIANgLIAqgfQANgJAOgHIAAAAIApgSIAOgFIAJgDIAHgCIAWgEIAAAAQBCgOA7AZQAPAHAPALQADADACAEIABABIADANQADASgIAPQgQAZgfACQhGgPhFARIAAAAIgCAAIgHACIgMADIALAQIACgBIABAAIAFgCIADAAIAEgBIAAAAQBBgPBCAOIAAAAQAyAMAnAfIAAAAQAMAJACAMQAFAhgWAbQgIAJgMADIgMgCQgtgPgtADIgzgPIgGACIABADIAGAOIACABIAsANIAEACIAFACIAJAEIAOAHIARALIAIAGIABAAQATANANAWIAGAKIABACIAAABIACAGIACAGQADANAAANQgBANgHAMIAAAAQgIAMgQADg");
	this.shape_3.setTransform(55.1,251.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ACtH4IAAAAIgBAAIAAgBIg7gZQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAIgEgBIgOgGIgBAAIgBAAIgBgBIgBAAIgagPIg4gmIgZgXIgZgZIgIgJIgQgTIgQgTQgng2ggg6IgwhZIgBgCIgEgFIgBgEIgGgMIgagzIgIgSIABAAIgkhMIgCgFIAAgBIgFgMIAAgBIgBgBIgDgFIgFgIIgBAAQgUghgFglIgBgSIAAgBIAAgOIAAgDIAAgFIgBgGQgFgSACgUIAAAAQABgLACgLQAGggAPgfQAag4AtgvIAFgFIAKgKIACgBIAVgTIBAgqIAAAAQAdgQAggJIAAAAIACAAQASgGATgDIABAAQBFgPBAAcIAAAAQARAIAQALIAAAAQAHAGAEAJQAEAJACAJQAEAZgMAUQgMATgSAJQAjANAeAYQARANADAUQAHAqgcAhQgNAPgSAEIgCAAIgRgCIgBgBIgigJIgLgBIAYAQQAXAQAPAZQAFAHADAIIACAEQAHATgBAWIAAABQgBARgJAQIAAAAQgMAUgaAEIgBAAIAAAAIgGAAIgGgBIgDAAIgUgDIg5gVIAYBMQARA1AUA2QAPAmARAlIAFANIADAHIABAAIACAFIACAFIAAAAQAaA7AxAsIACABIAtAgQACAAACADIABAAIAwAVIAOAGIARAGIABATIgYgJIgIgDQgXgJgWgKIAAAAIAAAAQgBAQgEAOIAAgBQgPA/goAvICMAhIAAATgAC8FnIg4BOIgPAQIgBABIgBAAIgEAEIABAAIAEADIAEABIA1AXQArgvAPg+QADgNAAgNIABgIIgigYQgEAVgJAUgAjoAUIAGAOIALAXIAGANIAEAGIACAFIADAGIABABIACAFIACACIAEAIIAEAJIAvBXQAgA5AnA1QAIALAJAKIAHAIIAAABIAAAAIAGAGQAbAeAdAaQAiAbAnAUIADABIADgCIAHgHIACgBIAEgDIABgBIAWgYIAog9QAKgVACgXIgTgUIgIgJQgcgggSgnIgBgBIgDgFIAAgBIgHgQIgCgCIgJgXIgbhCQgVg3gSg1IgQg2IgBgBIgCACIAAAAQgTAKgVAIIgGADIgHACIAAAAIgIADIgBAAIgDABIgCAAIgQAEQgQAEgQACIhGgBIgXgDIgCgBIgCgBIgDAAIgBgBIgBABIgKgDIgcgJIABAAIgQgFIAiBLgAkdhcIAAAAIAJAOIAIADIAFACIATAGIAAAAIAaAIIAJADIACAAIAGACIABAAQAqAIAsgEIAngHIAOgEIAGgCIABAAQAagJAZgNIACAAIADgBIgFgYIgEgCIgBAAQgYgMgXgHQgEgBgBgBIgFAAQgTgEgUgCQgTACgSAEIgmAKQAAAAAAAAQAAABAAAAQABAAAAAAQABAAABAAIgbADQg5AHgWgNIgWgNgAgziUQAaAHAZANIAAAAIACABIABABIACABIADACQAoAbAwAFIAIABIACAAIABAAIABAAIABAAQAQgDAHgMIABAAQAHgMAAgNQAAgNgDgNIgBgGIgDgGIAAgBIgBgCIgFgKQgOgWgTgNIAAgBIAAABIgIgGIgRgLIgPgHIgJgEIgEgCIgEgCIgqgNIgCgBIgGgOIgCgDIAGgCIAyAPQAtgDAsAPIANACQALgDAIgJQAWgbgFgjQgCgMgLgJIgBAAQgngfgxgMIgBAAQhCgOg/APIABAAIgEABIgEAAIgFACIgBAAIgEABIgLgQIANgDIAIgCIACAAIABAAQBDgRBGAPQAfgCAPgZQAJgPgDgSIgEgNIAAgBQgCgEgEgDQgOgLgQgHQg7gZg/AOIgBAAIgVAEIgHACIgMADIgNAFIgqASIAAAAQgOAHgMAJIgqAfIgNALIgCABIgDAEIgCACIgIAIIgBABQgqAsgaA2QgSAmgEApQgBAJABAJIAAABIAAAJQABAHADAJQADAKAFAFIACAEQAJAWATAIQAUAHAnABIAAgBQAjgHAggIQAUgFAUgCIACAAQAWABAVAFQADABABACIADAAIACAAg");
	this.shape_4.setTransform(61.8,282.5);

	this.instance = new lib.FIZ_23_part_010copy("single",50);
	this.instance.setTransform(114.8,343.5,0.965,0.964,0,-5.4,-8.1,76.5,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AgXgJIAugBIgJAVg");
	this.shape_5.setTransform(195,326.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("AhjCaQAFgXgBgYQgBgWgIgVQgQgmgbgaQgLgNgOgGIgOgDIAkgHIAogHQAIAAAKACQAGACAFAEQAHAFAFAHQAFAIAFAJQANAhAIAgQAFAYAEAYQAEAagJAUQgDAHACAFQgRAKgSADQgYAGgXACQANgQAFgXgABxifQAEgRAJgOIA9gBQgaAYgPAhg");
	this.shape_6.setTransform(186.9,344.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AiVCbQgDg2gSgyIgGgPIgJgaQA5gKA5gUQA4gUAzgeQATgKASgMQADgCACgDIgBgFIgsANIgKgGIAGgLQAZggAdgcIAygBIADADIAVAZQAJANAIAOQAIAOADAPQADAPgDAPQgKAsggAaIgwAnQgoAfguAXQgcAOgfANQgQAHgQAEQgiALghAJIAAgNg");
	this.shape_7.setTransform(200.7,341.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AhhCMIgDgJQgCgPAEgSIAKgJQAfgZAdgTQAmgbAsgRIAAgBQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgDgDgDADQhbAPhBBGQgPAFgMgMQgHgGgDgHQgGgNAGgNQAGgNAJgLQAWgfAjgSQAvgXAygMIgDgBIgZAAQguACgpAZQgjAWgbAgIgRgPIADgKQAEgMAIgNQAjgwA3gQQATgFAQgHIAogOQAMgBgIgHIgGgCIgqAHQAWgKAVgHQAIgCAKADIBcAVQASASAQAVQAOAVAGAYQAJAlgKAjQgGATgOALQgRALgQACIgfAJQg5ATgxAjQgXAPgZABQgQAAgMgLg");
	this.shape_8.setTransform(158,357.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AlJDoQgFgGgDgHQgIgRAFgUQgZgCgRgTQgLgOACgRQABgNADgMQgQgKgHgRQgCgIABgHQAEgRAKgQQAYgmAogWQAVgKAVgHQARgdAfgMQAbgLAcAGIAuANQAJgPASgBIAngFQAPgCANgDQAJgBAJABQAZABANAWQBwgWBkg0Qg/guhEglIAjAAIAmAVIAKgWIAVgBQgJAOgEASIAhAZQAPgiAagYIAjgBQgdAcgZAgIgGALIAJAGIAtgNIABAFQgCADgDACQgSAMgTAKQg1Aeg5AUQg4AUg6AMIAKAaIAGAPQARAwADA2IABANQAhgJAhgLQARgEAPgHQAfgNAfgOQAugXAngdIAwgnQAggcALgsQADgPgEgPQgDgPgIgOQgHgOgJgNIgVgZIgDgDIAagBIALAQQAYAhAKAoQADANgBAOQgDAPgGAOQgEALgHAKQgWAdgeAZQgbAXggARQgeATggAQQgfARgiANQgiAMgiAKIgkAKQgFANgIAMIgDADQgSANgTABIgcAFIgsAFQgNgBgNAEIgOAEQgYAGgXALIgjARIglAWQgHAFgHADQgIAEgIABIgVAHIgIABQgUAAgQgPgAimBLIAAACQgsARgoAbQgdATgfAZIgKAJQgEASACAPIADAJQAMALAQAAQAZgBAXgPQAzgjA5gTIAfgJQAQgCARgLQAOgLAGgTQAKglgJglQgGgYgOgTQgQgVgSgSIhcgVQgKgDgIACQgXAHgWAKIAsgHIAGACQAIAHgMABIgqAOQgQAHgTAFQg3AQgjAuQgIANgEAMIgDAKIARARQAbgiAjgWQApgZAugCIAbAAIADABQg0AMgvAXQgjASgWAhQgJALgGANQgGANAGANQADAHAHAGQAMAMAPgFQBBhGBdgRQADgDADADIABAAIACABgAgrhXIgoAGIgkAHIAOADQAOAGALANQAbAcAQAlQAIAUABAWQABAZgFAXQgFAWgNAQQAXgCAYgGQAQgDARgJQgCgGADgGQAJgVgEgZQgEgZgFgYQgIgegNggQgFgMgDgIQgFgGgHgFQgFgFgGgCQgIgCgHAAIgDABg");
	this.shape_9.setTransform(180.2,349.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FF7A").s().p("AiuCKQAFgVgBgQQgCgaACgyIABgOIAAgBIADgFQgBgFgCgEIAAgJIA/AIIAAABQAFAFADAIIAEAXQADAngCAlIgCAgQgBAegKAbIgFAJIhYAOQAQgIAJhKgABnhJIACgFIACgCIAqguIASgMIAhAQQgWATgRAXIgGAJIgYAqIgsALgAhOi/QALgPAPgMIAfAJIgYAbQgWAfgKAlg");
	this.shape_10.setTransform(197.7,329.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8089DD").s().p("Ai4CbQAFgmgCgmIgBgRIgDgfQA8AAA7gHIATgDICRgpIADgIIguAEIAVggIAMgSQAKgOAMgKQAOAJAMAMQAMAKALAMIABABIAKANQAbAXgCA9IgfAwIgKALQgLAJgNAIIg5AfQgvAZgxAMIg7APIhwALgAi7jUIAGABIgFAGg");
	this.shape_11.setTransform(208.4,328.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AhnAmIgBAAQACgTAGgTQAEgPAHgOQANgaATgSIAOgOICPA1QgZAWgVAYQgKANgHAPIgOAwg");
	this.shape_12.setTransform(201.8,318.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC99").s().p("AgVCIQgfgCgfgLQgSgEgNgNQgMgMABgSQAVARAZADQghgPgRgfQgJgPgBgQQgBgOAHgJQATAaAfgBQgngXgEgvQgBgLAFgJQAIgRALgMQAFgHAHgGQAUgKAZACQAXACAUAMIACAbIgyANQAfANAdgIQAZgIATgRIAAgJQgQAMgUgBIgEgaQAPgVAZgHQANgCAOAFQAPAIAXAQQAJAIAIALIAEAGIABAfQABAsgBAMIgGAgQgCAXgGAfQgFAegWAHQgXAGgfAFQgPACgRAAQgPAAgTgCg");
	this.shape_13.setTransform(165,340);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AkMD8IgFgBQgXgDgWgFQgdgHgYgTQgMgGgDgOQgFgMABgPIACgOIgFgJQgJgPABgRQgBgbANgTQgCgLgBgJQABgLADgJQAGgRAJgOQAJgQARgKIAVgIIAZgEQAegCAbAOQAKgOAPgIQALgHAOgCQALgBAKADQAMABAKAGIAGADIACABQABAAAAAAQAAgBAAAAQABABAAAAQAAAAAAAAQATADAQANQASgGAjADQAmAEATAVIAAAAQA+ABA9gJQg1gWg3gSIgTgGIgjgLIAngBIgBgtQAJgmAXgeIAYgbIgfgKQgPANgMAPIgBgcIAGgGIgGgCIAAgWIAVAGIAJAEIBMAXQBEAVBHAeQAeAOAcAPQAaAOAWAWIALANIAHAJIAgBCIgHgIIAFANQANAsggAoQgEAGgFAEIgEAEQgdAcgkATQghATgjANQgkANgjAKQgeAJgeAHIhtALIADAEQgSACgTAEIgeAHQgjAFgjgDQgQAEgNAAIgdAKQgVAHgVAAQgOAAgOgDgAlnDLQANANASAEQAfALAfACQAmAFAegFQAfgEAXgHQAWgGAFgeQAGgfACgXIAGggQABgPgBgsIgBgfIgEgGQgIgJgJgIQgXgPgPgJQgOgEgNACQgZAGgPAWIAEAYQAUABAQgMIAAAIQgTASgZAHQgfAIgfgMIAygOIgCgYQgUgNgXgCQgZgCgUALQgHAGgFAGQgLALgIAQQgFAKABALQAEAuAnAZQgfABgTgbQgHALABANQABARAJAPQARAeAhAQQgZgEgVgQQgBASAMALgAhYgJQADAGAAADIgCAFIgBABIgBAOQgCAyADAaQABAQgGAUQgJBLgPAHIBYgNIAEgJQALgbABgfIACgfQACglgDgnIgFgXQgCgHgFgGIgBgBIg/gJIAAAKgAAFArIABAQQACAmgFAmIgIA7IBugMIA7gOQAzgNAvgZIA5gfQANgHALgKIAKgKIAfgwQACg9gbgXIgKgOIgBgBQgLgLgMgLQgMgLgOgKQgMALgKAOIgMARIgVAgIAugDIgDAIIiTApIgTACQg7AIg8gBIADAggADmiDIgpAuIgCACIgDAFIgPA3IAsgLIAXgqIAGgJQARgXAWgUIgggQgACVgfIAPgvQAGgQALgNQAVgaAZgVIiSg1IgOANQgTASgMAaQgIAPgEARQgGATgBASIAAABIAAgBg");
	this.shape_14.setTransform(189.5,330.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F0FF7A").s().p("AidB8QADgSgEgOQgGgXgFgrIgBgNIAAgBIACgEQgCgFgDgDIgCgIIBAACIABABQAGAFAEAGQAEAIADAMQAKAiAEAgIACAcQAEAbgGAYIgEAIIhVATQAPgIgEhCgABXhRIACgEIACgCIAigsIARgNIAhAMQgSAUgNAUIgFAJIgRAmIgqANgAiDhQQgBgPABgRQAGg0AlghIAfAHQgKAMgJANQgaAoAEAzg");
	this.shape_15.setTransform(201,327.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72EBEB").s().p("AhhAoIAAAAQgBgQACgRQACgNAFgNQAJgYAPgRIANgNICWAjQgVAVgRAWQgJANgEANIgIArg");
	this.shape_16.setTransform(202.9,315.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8089DD").s().p("AiACLQgBgigHghIgEgPIgHgaQA7gFA6gLIASgDIADgCICHgtIACgIIgtAHIAPgdIAKgRQAIgNAJgKQARAHAOAJQANAIAMAKIABABIAMALQAeASAHA1IgWAsIgIAKQgKAKgMAIIg0AfQgrAZgxAPIg2ARIhuATgAjkhAIgCh+IAyAJQgtAwAGBGIgJgBg");
	this.shape_17.setTransform(207.9,325.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AgBB7QgfABghgHQgTgCgOgLQgOgJgCgQQAYANAZABQgjgLgVgZQgMgNgDgOQgEgMAGgKQAYAWAegDQgqgTgMgmQgDgJAEgJQAFgPAKgLQAEgHAGgGQASgLAZAAQAXABAWAJIAGAXIgwAPQAhAJAdgJQAWgJAQgRIgBgHQgOALgUABIgGgWQAKgUAXgIQANgDAPAEQAQAGAZALQALAHAJAJIAFAEIAFAcQAIAmABANQABAJgCASQACAUgBAbQgBAbgVAHQgWAHgdAHQgYAFgeAAIgMAAg");
	this.shape_18.setTransform(169.8,337.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AjuDrIgFAAQgXgBgXgDQgegDgZgPQgOgFgGgLQgGgKgCgOIAAgMIgGgIQgLgMgCgPQgFgYALgRQgEgJgCgJQgBgJABgIQAEgQAGgOQAHgPAQgJIATgIIAYgFQAegFAdALQAIgOAOgIQAJgHAOgCQAKgCAMACQAMAAAKAFIAGACIADAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABABAAQASABATALQAQgHAkAAQAmAAAYARIABAAQA7gEA7gMQg4gQg5gLIgRgEIgxgIIgSgDIgBgTIAJABQgGhGAtgxIgzgIIAAgTIA/ALIAKACIBNAPQBHANBLAVQAfAJAfAMQAcAKAYASIANALIAIAHIAqA3IgIgGIAHAKQAUAogaAjIgHAKIgDADQgZAbghATQgfAUggAOQghAOgiAMQgcAKgdAIIhtASIAEADIgjAIIgcAJQgiAHgjAAQgQAEgNABIgaAMQgZAJgaAAIgTgBgAiqDWQAdgHAWgHQAVgHABgbQABgbgCgVQACgSgBgLQgBgMgIgnIgFgbIgFgFQgJgGgLgHQgZgMgQgGQgPgDgNADQgXAHgMATIAIAVQAUAAAOgMIABAIQgQARgYAIQgdAJghgIIAwgQIgGgXQgWgHgXAAQgZAAgSAIQgGAHgEAGQgKALgFAPQgEAJADAKQAMAoAqATQgeADgYgXQgGALAEALQADAPAMAMQAVAaAjALQgZgBgYgOQACAQAOAKQAOAKATACQAhAHAfAAQAmABAegGgAhigHQADAFACADIgCAEIgBABIACANQAFArAGAXQAEAOgDASQADBCgOAIIBVgTIADgIQAFgYgCgbIgCgcQgEgggKgiQgDgMgEgHQgEgGgGgGIgBgBIhAgCIACAIgAEOg+IiJAwIgDABIgSAEQg6AJg6AEIAGAbIAEAOQAHAhABAiIgBA0IBugTIA4gQQAxgPAqgaIA1gfQALgIAKgJIAJgKIAWgqQgHg4gegSIgNgLIgBgBQgLgJgOgIQgOgJgQgIQgKALgHAMIgKARIgPAdIAtgGgADHiKIgiAsIgCACIgBAEIgHAxIAqgNIARgmIAFgJQANgUASgUIgigMgACFgsIAIgrQAEgNAJgNQARgYAVgVIiYgjIgNANQgPARgJAYQgDANgCAPQgCARABAQIAAABIAAgBgAg4h3QgBARABAPIAgAGQgDgzAagoQAHgNAKgMIgdgHQglAhgGA0g");
	this.shape_19.setTransform(193.5,327.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#72EBEB").s().p("AhRBFQgNgRABgVQABglATgjIAEgJQBDgBA/gRQgHAaABAbQAAAJADAHQAGARAJAMIAWAYQhQAPhNAAIgTAAg");
	this.shape_20.setTransform(195.3,310.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0FF7A").s().p("AicEcIgCh3IAbAAQgZAkAFAwIACAVQACAHADAIgAAvDfQgGgIgCgKQgBgJAAgJQAAgXAFgWIAogKQgIAlAMAmQAKAgAdAOIgpALQgUgVgSgUgAAzAuQANgogCgrQAAgRgJgQQgCgFABgFIAGgkQAOg9gJhAQgDgWgLgVQAoAXAnAeQAHAHAFAJQAVAmgCAsQgCApgLAnQgEANgJANQgaAgggAZIgVARIgDgBg");
	this.shape_21.setTransform(199.2,288.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8089DD").s().p("AhkCmQgFgKABgMQAAgSgBgSIAdgHIAtAoIgDgaQgdg2g5gTQA2goAag/QAFgMABgPIADgfQAMgugRguIgHgQQBkBZAzCAQARApgFAtQgCATgJASQgMAXgQASQgpAogyASIgxAQQgZgbgQgjg");
	this.shape_22.setTransform(219.8,290.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AigFQIgBgfIAMABQgDgHgCgIIgCgVQgFgwAZgkIgcAAIAAgWQAtAAAsgDQAwABAsgPIA5gQQASgEASgBQgRgQgXgHIgQgGIgYAAIgQAGQgKAEgJABQgoADglgRIgOgHIgEAJQgeARgjgDIAAgGIgbABQgegJgZgZQgkAGgaghQgZgggIglQgHggAEggQAHgvARgrQAWg0ArgkQATgRAVgMQBJgtBXAGIAWAHQAjARAkAUIgLgHIA5AgQAlAUAUAUQAVAWAYAUQBXBKAyBpQATAnAFAsQAFAjgLAhQgNApghAbQgYAWggAQQiEBBiRAPQgzAEgzAAIgTAAgAhwC5IgEAJQgTAkgCAnQgBAUAOARQBZACBWgRIgVgYQgKgMgFgRQgDgJgBgIQgBgcAHgZQg+ARhDAAgAAmCjQgFAWAAAXQAAAJABAJQACAKAGAIQASAVAUAUIApgKQgdgOgKghQgMgmAIglgABeCVQACASgBASQAAAMAEAKQARAjAYAbIAygQQA0gSAogoQARgSALgXQAJgSACgTQAFgtgRgrQgyh+hmhZIAGAQQARAugLAuIgDAfQgCAPgFAMQgaA/g1AoQA4ATAeA2IACAaIgsgogAhyAdQAHAOAKAMQAQATAaAIQAYAGAagHQASgHAJgTQAMgYAAgcQgBgNgCgNQgIAVgRASQgFAGgFADQgGADgHABIAghIQAJgSAFgUQANg3gFg5QgCgfgNgbQgPgfgdgPQgpgUgsADQg6AHgtAiQgrAigfAwQgLAQgIATQgXA0AIA6QADAXAJAWQAEAJAKAKIATARQgKgwALgyQADgMAHgKQAEgGAFgEQgNA1AMA0QAFAZAUARQAoAiAvgCIAigHQggghgBgtQgBgYAFgYQACgGAFgFQAGgEAHgDQgUAxAXAvgAAuBEQAAAEACgEIgCAAIADAAIAVgRQAggZAaggQAJgMAEgOQALgnACgpQACgrgVgnQgFgJgHgGQgngfgogWQALAUADAXQAJA/gOA+IgGAkQgBAFACAFQAJAPAAARQACArgNApIAAAAg");
	this.shape_23.setTransform(199.7,286.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("ABUDFQgagIgQgSQgKgMgHgPQgXgxAUgwQgHACgGAFQgFAEgCAHQgDAXABAYQAAAwAfAhIggAHQgvACgogjQgUgQgFgaQgMg1ANg1QgFADgEAGQgHAKgDAMQgLAyAKAyIgTgRQgKgJgEgMQgJgWgDgWQgIg6AXgzQAIgSALgRQAfgvArgiQAtgjA4gHQAsgCApATQAfAPAPAgQANAbACAeQAFA5gNA1QgFAUgJASIgiBKQAHAAAGgEQAHgDAFgFQARgUAIgWQACAOABAOQAAAcgMAYQgJATgUAHQgOAEgNAAQgMAAgLgDg");
	this.shape_24.setTransform(185.6,275.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[{t:this.instance,p:{scaleX:0.965,scaleY:0.964,skewX:-5.4,skewY:-8.1,x:114.8,y:343.5,startPosition:50,rotation:0}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:-4.2,skewY:-6.5,x:113.7,y:346.2,startPosition:44,rotation:0}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:113.1,y:347.4,startPosition:44,rotation:-5.4}}]},2).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:114.2,y:351.7,startPosition:44,rotation:-3.6}}]},5).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:114.7,y:354.2,startPosition:44,rotation:-5.1}}]},2).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:114.8,y:349.2,startPosition:44,rotation:-7.1}}]},2).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:112.6,y:336.9,startPosition:44,rotation:-8.5}}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},34).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).wait(67));

	// FIZ_FRONT_part_030
	this.instance_1 = new lib.FIZ_23_part_040("single",0);
	this.instance_1.setTransform(149.2,318.5,0.977,1,0,0,0,56.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-3.1,x:148.1,y:334.2},0).wait(1).to({x:147.6,y:336.4},0).wait(2).to({regY:42.5,scaleX:0.98,rotation:1.5,x:152.6,y:302.8},0).wait(1).to({x:153.7,y:300.1},0).wait(2).to({x:152.7,y:303.4},0).wait(9).to({scaleY:1,rotation:0.5,x:152.8,y:306.6},0).wait(2).to({regX:56.2,regY:42.6,rotation:-1.3,x:154.4,y:313.5},0).wait(1).to({rotation:-2.6,y:321},0).wait(1).to({scaleX:0.98,rotation:-5.3,x:150.5,y:329.8},0).wait(1).to({x:149.4,y:332.6},0).wait(2).to({x:148.8,y:333.7},0).wait(5).to({rotation:-3.5,x:150.3,y:339.1},0).wait(2).to({regX:56.1,regY:42.5,scaleY:1,rotation:-2.5,x:151,y:342.3},0).wait(2).to({regY:42.6,rotation:-1.2,x:151.3,y:338.1},0).wait(1).to({regX:56.2,scaleY:1,rotation:-2.6,x:149,y:325},0).wait(1).to({scaleY:1,rotation:-0.3,x:153.2,y:321.1},0).wait(1).to({regX:56.1,rotation:2.3,x:160.8,y:299},0).wait(2).to({rotation:3.8,x:162.2,y:291},0).wait(2).to({regX:56.2,rotation:5.1,x:164.8,y:287},0).wait(2).to({y:288.7},0).wait(2).to({y:289.8},0).wait(23).to({rotation:3.8,x:164.2,y:291.3},0).wait(2).to({rotation:0.3,x:163.9,y:299},0).wait(1).to({rotation:-0.6,x:164.7,y:303},0).wait(2).to({scaleX:0.97,rotation:-2.4,x:164.3,y:304.2},0).wait(1).to({scaleY:1,rotation:-4.5,x:160.2,y:303.4},0).wait(1).to({regX:56.1,rotation:-8.6,x:147.3,y:300.5},0).wait(1).to({x:145.1,y:295.5},0).wait(2).to({y:297.2},0).wait(1).to({y:298.8},0).wait(15).to({startPosition:0},0).wait(1).to({scaleX:0.97,x:144.5,y:296.5},0).wait(1).to({rotation:-8.8,x:144,y:294.8},0).wait(1).to({regX:56.2,regY:42.7,rotation:-8.9,x:143.8,y:293.5},0).wait(1).to({regX:56.1,regY:42.6,scaleX:0.97,rotation:-9.1,x:143.5,y:292.6},0).wait(3).to({rotation:-8.1,x:144,y:295.3},0).wait(2).to({regY:42.7,rotation:-4.8,x:148.1,y:305.9},0).wait(1).to({regY:42.6,scaleX:0.97,rotation:-2,x:153.7,y:308},0).wait(1).to({scaleX:0.97,rotation:6.2,x:170.6,y:290.7},0).wait(2).to({rotation:7.7,x:173.2,y:285.7},0).wait(2).to({rotation:8.5,x:174.6,y:283.2},0).wait(3).to({y:284.4},0).wait(13).to({y:282.6},0).wait(2).to({rotation:7,x:172.7,y:286},0).wait(2).to({regX:56,rotation:4.2,x:169,y:295},0).wait(1).to({regX:56.1,regY:42.4,scaleX:0.98,scaleY:1,rotation:2,x:159.7,y:308.1},0).wait(1).to({rotation:0,x:151.6,y:315.5},0).wait(1).to({x:149.2,y:322.1},0).wait(3).to({y:319.7},0).wait(2).to({y:318.5},0).wait(5));

	// FIZ_FRONT_part_029
	this.instance_2 = new lib.FIZ_23_part_039("single",0);
	this.instance_2.setTransform(134.7,322.7,1,1,0,0,0,41.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:-3.1,x:134,y:339.2},0).wait(1).to({x:133.4,y:341.4},0).wait(2).to({regY:9,rotation:1.5,x:138.1,y:306.4},0).wait(1).to({x:139.2,y:303.7},0).wait(2).to({x:138.2,y:307},0).wait(9).to({scaleX:1,scaleY:1,rotation:0.5,x:138.4,y:310.5},0).wait(2).to({regY:9.1,rotation:-1.3,x:140.1,y:317.9},0).wait(1).to({regY:9,rotation:-2.6,x:140.2,y:325.7},0).wait(1).to({rotation:-5.3,x:136.5,y:335.1},0).wait(1).to({x:135.4,y:337.9},0).wait(2).to({x:134.9,y:339},0).wait(5).to({regX:41.5,rotation:-3.5,x:136.1,y:344},0).wait(2).to({scaleX:1,scaleY:1,rotation:-2.5,x:136.8,y:347},0).wait(2).to({rotation:-1.2,x:136.9,y:342.4},0).wait(1).to({regX:41.6,scaleX:1,scaleY:1,rotation:-2.6,x:134.8,y:329.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:138.8,y:325},0).wait(1).to({regX:41.5,rotation:2.3,x:146.2,y:302.3},0).wait(2).to({rotation:3.8,x:147.5,y:293.9},0).wait(2).to({rotation:5.1,x:150,y:289.6},0).wait(2).to({y:291.3},0).wait(2).to({y:292.4},0).wait(23).to({rotation:3.8,x:149.4,y:294.3},0).wait(2).to({regX:41.6,rotation:0.3,y:302.9},0).wait(1).to({regX:41.5,regY:9.1,rotation:-0.6,x:150.2,y:307.2},0).wait(2).to({rotation:-2.4,x:150,y:308.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:146.2,y:308.6},0).wait(1).to({regY:9,rotation:-8.6,x:133.6,y:306.5},0).wait(1).to({x:131.4,y:301.6},0).wait(2).to({y:303.2},0).wait(1).to({y:304.9},0).wait(15).to({startPosition:0},0).wait(1).to({x:130.8,y:302.7},0).wait(1).to({rotation:-8.8,x:130.4,y:300.9},0).wait(1).to({rotation:-8.9,x:130.2,y:299.7},0).wait(1).to({regY:9.1,rotation:-9.1,x:129.9,y:298.9},0).wait(3).to({regX:41.4,regY:9,rotation:-8.1,x:130.2,y:301.3},0).wait(2).to({regX:41.5,regY:8.8,rotation:-4.8,x:133.9,y:310.9},0).wait(1).to({rotation:-2,x:139.4,y:312.5},0).wait(1).to({regY:9,rotation:6.2,x:155.8,y:293.1},0).wait(2).to({regY:8.9,rotation:7.7,x:158.3,y:287.6},0).wait(2).to({regY:9,rotation:8.5,x:159.6,y:285},0).wait(3).to({y:286.2},0).wait(13).to({y:284.4},0).wait(2).to({regY:8.9,rotation:7,x:157.8,y:288.1},0).wait(2).to({regY:8.8,rotation:4.2,x:154.4,y:297.7},0).wait(1).to({regX:41.6,regY:9.1,scaleX:1,scaleY:1,rotation:2,x:145.1,y:311.8},0).wait(1).to({rotation:0,x:137.1,y:319.7},0).wait(1).to({x:134.7,y:326.3},0).wait(3).to({y:323.9},0).wait(2).to({y:322.7},0).wait(5));

	// FIZ_FRONT_part_011
	this.instance_3 = new lib.FIZ_23_part_038("single",0);
	this.instance_3.setTransform(133.5,418.8,1,1,0,0,0,28.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-3.1,x:138.3,y:435.2},0).wait(1).to({x:137.7,y:437.4},0).wait(2).to({regX:28.6,rotation:1.5,x:134.6,y:402.5},0).wait(1).to({x:135.7,y:399.8},0).wait(2).to({x:134.7,y:403.1},0).wait(9).to({regX:28.4,regY:3.8,scaleX:1,scaleY:1,rotation:0.5,x:136.4,y:406.5},0).wait(2).to({regY:3.9,rotation:-1.3,x:141.4,y:413.8},0).wait(1).to({rotation:-2.6,x:143.6,y:421.7},0).wait(1).to({regX:28.3,rotation:-5.3,x:144.6,y:430.9},0).wait(1).to({x:143.5,y:433.6},0).wait(2).to({x:142.9,y:434.7},0).wait(5).to({regX:28.2,rotation:-3.5,x:141.1,y:439.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-2.5,x:140.1,y:443},0).wait(2).to({rotation:-1.2,x:140.8,y:438},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.6,x:138.1,y:425.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:138.3,y:421.1},0).wait(1).to({rotation:2.3,x:141.1,y:398.2},0).wait(2).to({regY:3.8,rotation:3.8,x:139,y:392.3},0).wait(2).to({rotation:5.1,x:139.3,y:387.9},0).wait(2).to({y:389.6},0).wait(2).to({y:390.7},0).wait(23).to({rotation:3.8,x:140.9,y:392.8},0).wait(2).to({rotation:0.3,x:146.9,y:401.7},0).wait(1).to({rotation:-0.6,x:149.6,y:405.9},0).wait(2).to({rotation:-2.4,x:152.5,y:407.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:152.2,y:407.1},0).wait(1).to({regY:3.7,rotation:-8.6,x:146.7,y:404.4},0).wait(1).to({x:144.5,y:399.4},0).wait(2).to({y:401.1},0).wait(1).to({y:402.7},0).wait(15).to({startPosition:0},0).wait(1).to({regX:28.1,regY:3.6,x:144.3,y:400.4},0).wait(1).to({regY:3.7,rotation:-8.8,x:144,y:398.6},0).wait(1).to({regX:28.2,regY:3.8,rotation:-8.9,y:397.3},0).wait(1).to({regX:28.1,regY:3.6,rotation:-9.1,x:143.8,y:396.4},0).wait(3).to({rotation:-8.1,x:142.4,y:399},0).wait(2).to({regX:28,rotation:-4.8,x:140.5,y:409.3},0).wait(1).to({regX:27.9,rotation:-2,x:141,y:411},0).wait(1).to({regX:28.2,rotation:6.2,x:143.2,y:390.9},0).wait(2).to({regY:3.7,rotation:7.7,x:143.1,y:385.2},0).wait(2).to({regY:3.6,rotation:8.5,y:382.2},0).wait(3).to({y:383.4},0).wait(13).to({y:381.6},0).wait(2).to({rotation:7,x:143.9,y:385.8},0).wait(2).to({rotation:4.2,x:145.2,y:396.1},0).wait(1).to({regX:28.4,regY:3.9,scaleX:1,scaleY:1,rotation:2,x:140.5,y:407.9},0).wait(1).to({rotation:0,x:135.9,y:415.8},0).wait(1).to({x:133.5,y:422.4},0).wait(3).to({y:420},0).wait(2).to({y:418.8},0).wait(5));

	// FIZ_FRONT_H2_COMP
	this.instance_4 = new lib.FIZ_23_part_037("single",0);
	this.instance_4.setTransform(120.3,447.8,0.935,1,0,0,0,16.3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:16.4,rotation:-3.1,x:126.4,y:467.1},0).wait(1).to({startPosition:0},0).wait(2).to({regY:4.1,scaleX:0.93,rotation:1.5,x:120.5,y:431.2},0).wait(1).to({x:121.6,y:428.5},0).wait(2).to({x:120.6,y:431.8},0).wait(9).to({scaleY:1,rotation:0.5,x:123,y:435.5},0).wait(2).to({regY:4,rotation:-1.3,x:129,y:445.4},0).wait(1).to({rotation:-2.6,x:131.9,y:451.3},0).wait(1).to({rotation:-5.3,x:133.8,y:463.2},0).wait(1).to({x:133.3,y:463.7},0).wait(2).to({x:132.7,y:464.8},0).wait(5).to({regX:16.3,rotation:-3.5,x:130,y:469.7},0).wait(2).to({regX:16.4,rotation:-4.3,x:129.6,y:465.5},0).wait(2).to({rotation:-3,x:129.9,y:460.2},0).wait(1).to({regX:16.3,rotation:-2.6,x:126.4,y:455.2},0).wait(1).to({scaleX:0.93,scaleY:1,rotation:-0.3,x:125.5,y:450.2},0).wait(1).to({rotation:2.3,x:126.9,y:426.6},0).wait(2).to({regX:16.4,rotation:3.8,x:124.1,y:420.4},0).wait(2).to({rotation:5.1,x:123.8,y:415.6},0).wait(2).to({y:417.3},0).wait(2).to({y:418.4},0).wait(23).to({rotation:3.8,x:126.1,y:420.9},0).wait(2).to({regX:16.5,rotation:0.3,x:133.8,y:430.6},0).wait(1).to({rotation:-0.6,x:137,y:435.1},0).wait(2).to({rotation:-2.4,x:140.9,y:437.1},0).wait(1).to({regX:16.6,scaleY:1,rotation:-4.5,x:141.8},0).wait(1).to({regX:16.4,scaleX:0.93,rotation:-8.6,x:138.3,y:435.1},0).wait(1).to({x:136.7,y:432.9},0).wait(2).to({x:136.1,y:431.8},0).wait(1).to({y:433.4},0).wait(15).to({startPosition:0},0).wait(1).to({x:136,y:431.1},0).wait(1).to({rotation:-8.8,x:135.9,y:429.3},0).wait(1).to({rotation:-8.9,y:428.1},0).wait(1).to({rotation:-9.1,x:135.8,y:427.3},0).wait(3).to({rotation:-8.1,x:133.9,y:429.8},0).wait(2).to({regY:4.1,rotation:-4.8,x:130.3,y:439.5},0).wait(1).to({regX:16.3,rotation:-2,x:129.3,y:440.7},0).wait(1).to({regX:16.5,regY:4,rotation:6.2,x:127.2,y:418.5},0).wait(2).to({rotation:7.7,x:126.4,y:412.2},0).wait(2).to({regX:16.6,rotation:8.5,x:126.1,y:409.1},0).wait(3).to({y:410.3},0).wait(13).to({y:408.5},0).wait(2).to({regX:16.5,rotation:7,x:127.5,y:413.1},0).wait(2).to({regX:16.6,rotation:4.2,x:130.3,y:421.7},0).wait(1).to({regX:16.3,scaleX:0.94,scaleY:1,rotation:2,x:120.3,y:440.9},0).wait(1).to({rotation:0,x:122.7,y:444.8},0).wait(1).to({x:120.3,y:450.2},0).wait(3).to({y:449},0).wait(2).to({y:447.8},0).wait(5));

	// FIZ_FRONT_part_012
	this.instance_5 = new lib.FIZ_23_part_035("single",0);
	this.instance_5.setTransform(148.9,446.8,1,1,0,0,0,12.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:-3.1,x:154.7,y:464.4},0).wait(1).to({startPosition:0},0).wait(2).to({rotation:1.5,x:149.1,y:430.9},0).wait(1).to({x:150.2,y:428.1},0).wait(2).to({x:149.1,y:431.5},0).wait(9).to({scaleX:1,scaleY:1,rotation:0.5,x:151.6,y:434.7},0).wait(2).to({rotation:-1.3,x:157.6,y:443.5},0).wait(1).to({rotation:-2.6,x:160.3,y:448.8},0).wait(1).to({regX:12.9,rotation:-5.3,x:162.1,y:459.3},0).wait(1).to({x:161.6,y:459.9},0).wait(2).to({x:161,y:461},0).wait(5).to({rotation:-3.5,x:158.5,y:466.7},0).wait(2).to({rotation:-4.3,x:158.1,y:462.2},0).wait(2).to({regY:0,rotation:-3,x:158.4,y:457.4},0).wait(1).to({regY:0,rotation:-2.6,x:155,y:452.7},0).wait(1).to({regX:12.8,scaleX:1,scaleY:1,rotation:-0.3,x:154.1,y:448.9},0).wait(1).to({regX:13,regY:0.1,rotation:2.3,x:155.6,y:426.8},0).wait(2).to({rotation:3.8,x:152.8,y:421.3},0).wait(2).to({rotation:5.1,x:152.4,y:417.1},0).wait(2).to({y:418.8},0).wait(2).to({y:419.9},0).wait(23).to({rotation:3.8,x:154.8,y:421.7},0).wait(2).to({regX:13.1,rotation:0.3,x:162.5,y:429.7},0).wait(1).to({rotation:-0.6,x:165.7,y:433.6},0).wait(2).to({regX:13,rotation:-2.4,x:169.4,y:434.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:170,y:433.7},0).wait(1).to({regX:13.1,rotation:-8.6,x:166.6,y:429.7},0).wait(1).to({x:164.9,y:427.5},0).wait(2).to({x:164.4,y:426.4},0).wait(1).to({y:428.1},0).wait(15).to({startPosition:0},0).wait(1).to({x:164.1,y:425.6},0).wait(1).to({rotation:-8.8,y:423.8},0).wait(1).to({rotation:-8.9,x:163.9,y:422.5},0).wait(1).to({regX:13,rotation:-9.1,y:421.7},0).wait(3).to({regX:12.9,regY:0,rotation:-8.1,x:162,y:424.6},0).wait(2).to({regX:13,regY:0.1,rotation:-4.8,x:158.7,y:436},0).wait(1).to({rotation:-2,x:157.9,y:438.6},0).wait(1).to({rotation:6.2,x:155.7,y:420.6},0).wait(2).to({rotation:7.7,x:154.9,y:415.1},0).wait(2).to({regX:13.1,rotation:8.5,x:154.5,y:412.4},0).wait(3).to({y:413.6},0).wait(13).to({y:411.8},0).wait(2).to({rotation:7,x:156.1,y:415.7},0).wait(2).to({rotation:4.2,x:158.8,y:422.8},0).wait(1).to({regX:12.8,regY:0,scaleX:1,scaleY:1,rotation:2,x:148.9,y:440.8},0).wait(1).to({rotation:0,x:151.3,y:443.8},0).wait(1).to({x:148.9,y:449.2},0).wait(3).to({y:448},0).wait(2).to({y:446.8},0).wait(5));

	// FIZ_FRONT_part_011
	this.instance_6 = new lib.FIZ_23_part_033("single",0);
	this.instance_6.setTransform(134.1,413.4,1,1,0,0,0,32,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:32.1,rotation:-3.1,x:138.7,y:429.8},0).wait(1).to({x:138.1,y:432},0).wait(2).to({rotation:1.5,x:135.2,y:397.2},0).wait(1).to({x:136.3,y:394.4},0).wait(2).to({x:135.2,y:397.8},0).wait(9).to({regX:32,scaleX:1,scaleY:1,rotation:0.5,x:137,y:401.2},0).wait(2).to({regX:32.1,regY:6.7,rotation:-1.3,x:141.9,y:408.5},0).wait(1).to({regY:6.6,rotation:-2.6,x:144,y:416.3},0).wait(1).to({regY:6.7,rotation:-5.3,x:144.7,y:425.5},0).wait(1).to({x:143.6,y:428.3},0).wait(2).to({x:143.1,y:429.4},0).wait(5).to({regY:6.6,rotation:-3.5,x:141.6,y:434.5},0).wait(2).to({regY:6.7,scaleX:1,scaleY:1,rotation:-2.5,x:140.5,y:437.7},0).wait(2).to({rotation:-1.2,x:141.4,y:432.6},0).wait(1).to({regY:6.5,scaleX:1,scaleY:1,rotation:-2.6,x:138.5,y:420.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:139,y:415.7},0).wait(1).to({regX:32,regY:6.6,rotation:2.3,x:142,y:392.9},0).wait(2).to({rotation:3.8,x:140,y:387.1},0).wait(2).to({regX:32.1,regY:6.5,rotation:5.1,x:141.9,y:382.6},0).wait(2).to({y:384.3},0).wait(2).to({y:385.4},0).wait(23).to({rotation:3.8,x:143.4,y:387.4},0).wait(2).to({rotation:0.3,x:149,y:396.2},0).wait(1).to({rotation:-0.6,x:151.6,y:400.4},0).wait(2).to({rotation:-2.4,x:154.4,y:402},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:153.8,y:401.5},0).wait(1).to({rotation:-8.6,x:148,y:398.8},0).wait(1).to({x:145.8,y:393.8},0).wait(2).to({y:395.5},0).wait(1).to({y:397.1},0).wait(15).to({startPosition:0},0).wait(1).to({x:145.5,y:394.9},0).wait(1).to({rotation:-8.8,x:145.4,y:393.1},0).wait(1).to({regX:32.2,rotation:-8.9,x:145.2,y:391.8},0).wait(1).to({regX:32.1,rotation:-9.1,x:145.1,y:391},0).wait(3).to({regX:32,rotation:-8.1,x:143.8,y:393.6},0).wait(2).to({regY:6.6,rotation:-4.8,x:142.2,y:404},0).wait(1).to({rotation:-2,x:143,y:405.8},0).wait(1).to({regX:32.2,regY:6.5,rotation:6.2,x:145.9,y:385.9},0).wait(2).to({rotation:7.7,x:146,y:380.1},0).wait(2).to({rotation:8.5,y:377.3},0).wait(3).to({y:378.5},0).wait(13).to({y:376.7},0).wait(2).to({rotation:7,x:146.7,y:380.9},0).wait(2).to({rotation:4.2,x:147.7,y:390.9},0).wait(1).to({regX:32,regY:6.6,scaleX:1,scaleY:1,rotation:2,x:141.3,y:402.5},0).wait(1).to({rotation:0,x:136.5,y:410.4},0).wait(1).to({x:134.1,y:417},0).wait(3).to({y:414.6},0).wait(2).to({y:413.4},0).wait(5));

	// FIZ_FRONT_part_006
	this.instance_7 = new lib.FIZ_23_part_028copy("single",1);
	this.instance_7.setTransform(163.1,333.3,1.011,1.072,0,-6.4,-4.2,12.6,7.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(20).to({startPosition:1,_off:false},0).wait(1).to({x:162,y:336},0).wait(2).to({x:161.4,y:337.1},0).wait(5).to({regY:7.8,scaleX:1.01,skewX:-4.5,skewY:-2.3,x:162.8,y:343.1},0).wait(2).to({regY:7.7,scaleY:1.07,skewX:-3.7,skewY:-1.6,x:163.4,y:346.5},0).wait(2).to({skewX:-2.7,skewY:-0.5,x:163.6,y:342.6},0).wait(1).to({skewX:-4,skewY:-1.8,x:161.3,y:329.1},0).wait(1).to({skewX:-1.7,skewY:0.2,x:165.4,y:325.5},0).wait(1).to({regY:7.8,skewX:1.3,skewY:3.5,x:172.8,y:304.1},0).wait(2).to({regX:12.5,scaleX:1.01,skewX:2.8,skewY:5,x:174,y:296.4},0).wait(2).to({skewX:4.1,skewY:6.2,x:176.4,y:292.7},0).wait(2).to({y:294.4},0).wait(2).to({y:295.5},0).wait(23).to({skewX:2.8,skewY:4.9,x:175.9,y:296.8},0).to({_off:true},2).wait(72));

	// FIZ_FRONT_part_010
	this.instance_8 = new lib.FIZ_23_part_028copy("single",1);
	this.instance_8.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.instance_9 = new lib.FIZ_23_part_032("single",0);
	this.instance_9.setTransform(129.6,423.8,1,1,0,0,0,23.4,111.2);

	this.instance_10 = new lib.FIZ_23_part_028("single",47);
	this.instance_10.setTransform(167.1,325.1,1.01,1.072,0,4.8,7,12.6,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.2,rotation:0,x:129.6,y:423.8,scaleX:1,scaleY:1}},{t:this.instance_8,p:{scaleY:1.074,skewX:-0.8,x:161.2,y:323.2}}]}).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.3,rotation:-3.2,x:134.6,y:440.4,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.3,rotation:-3.2,x:134.1,y:442.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.3,rotation:1.5,x:130.4,y:407.4,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.3,rotation:1.5,x:131.5,y:404.7,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.3,rotation:1.5,x:130.5,y:408,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.3,rotation:0.5,x:132.4,y:411.6,scaleX:0.999,scaleY:0.999}}]},9).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.4,rotation:-1.4,x:137.6,y:419.1,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.4,rotation:-2.7,x:139.9,y:427,scaleX:0.999,scaleY:0.999}},{t:this.instance_10}]},1).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:-5.4,x:141.1,y:436.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:-5.4,x:140,y:439.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:-5.4,x:139.5,y:440.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:-3.6,x:137.5,y:445.3,scaleX:0.999,scaleY:0.999}}]},5).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.5,rotation:-2.6,x:136.4,y:448.3,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.5,rotation:-1.3,x:134.3,y:443.8,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:-2.7,x:134.4,y:430.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.4,rotation:-0.4,x:134.5,y:426.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:2.3,x:136.9,y:403.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:3.8,x:135.6,y:394.5,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:5.1,x:135.8,y:389.9,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:5.1,x:135.8,y:391.5,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:5.1,x:135.8,y:392.6,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:3.8,x:137.6,y:394.8,scaleX:0.998,scaleY:0.998}}]},23).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:0.3,x:143.6,y:403.9,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:-0.7,x:146.4,y:408.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:-2.5,x:149.3,y:409.9,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.4,rotation:-4.6,x:149.1,y:409.6,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.7,x:143.9,y:407.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.7,x:141.7,y:402.2,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.7,x:141.7,y:403.8,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.7,x:141.7,y:405.5,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.7,x:141.7,y:405.5,scaleX:0.997,scaleY:0.997}}]},15).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.7,x:141.4,y:403.2,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.3,rotation:-8.9,x:141.3,y:401.3,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.2,rotation:-9,x:141.2,y:400,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.2,rotation:-9.2,x:141.1,y:399.2,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.2,rotation:-8.2,x:139.7,y:401.8,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.1,rotation:-4.9,x:137.7,y:411.9,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_9,p:{regX:23.2,regY:111.1,rotation:-2.1,x:138.1,y:413.5,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:6.2,x:139.8,y:393,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:7.7,x:139.7,y:387,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:8.5,x:139.7,y:384.2,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:8.5,x:139.7,y:385.4,scaleX:0.997,scaleY:0.997}}]},3).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:8.5,x:139.7,y:383.6,scaleX:0.997,scaleY:0.997}}]},13).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:7,x:140.5,y:387.8,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_9,p:{regX:23.3,regY:111.4,rotation:4.2,x:141.8,y:398.2,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.3,rotation:2,x:136.5,y:412.7,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.2,rotation:0,x:132,y:420.8,scaleX:1,scaleY:1}},{t:this.instance_8,p:{scaleY:1.148,skewX:-3.5,x:163.6,y:320.2}}]},1).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.2,rotation:0,x:129.6,y:427.4,scaleX:1,scaleY:1}},{t:this.instance_8,p:{scaleY:1.074,skewX:-0.8,x:161.2,y:326.8}}]},1).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.2,rotation:0,x:129.6,y:425,scaleX:1,scaleY:1}},{t:this.instance_8,p:{scaleY:1.074,skewX:-0.8,x:161.2,y:324.4}}]},3).to({state:[{t:this.instance_9,p:{regX:23.4,regY:111.2,rotation:0,x:129.6,y:423.8,scaleX:1,scaleY:1}},{t:this.instance_8,p:{scaleY:1.074,skewX:-0.8,x:161.2,y:323.2}}]},2).wait(5));

	// FIZ_FRONT_part_007
	this.instance_11 = new lib.FIZ_23_part_029("single",0);
	this.instance_11.setTransform(153.7,415.3,1,1,0,0,0,-1.9,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:-3.1,x:158.2,y:430.6},0).wait(1).to({x:157.7,y:432.8},0).wait(2).to({regX:-1.9,regY:12.1,rotation:1.5,x:154.6,y:399.5},0).wait(1).to({x:155.7,y:396.8},0).wait(2).to({x:154.6,y:400.1},0).wait(9).to({regX:-1.8,scaleX:1,scaleY:1,rotation:0.5,x:156.6,y:403.2},0).wait(2).to({rotation:-1.3,x:161.5,y:409.8},0).wait(1).to({regX:-1.9,rotation:-2.6,x:163.5,y:417.2},0).wait(1).to({rotation:-5.3,x:164.2,y:425.4},0).wait(1).to({x:163.1,y:428.2},0).wait(2).to({x:162.6,y:429.3},0).wait(5).to({regX:-1.8,rotation:-3.5,x:161.2,y:435},0).wait(2).to({regX:-1.7,scaleX:1,scaleY:1,rotation:-2.5,x:160.2,y:438.5},0).wait(2).to({regX:-1.8,rotation:-1.2,x:161,y:433.9},0).wait(1).to({regX:-1.9,scaleX:1,scaleY:1,rotation:-2.6,x:158.1,y:421.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:158.5,y:417.4},0).wait(1).to({regX:-1.8,rotation:2.3,x:161.6,y:395.4},0).wait(2).to({regX:-1.9,regY:12.2,rotation:3.8,x:159.5,y:390.3},0).wait(2).to({regY:12.1,rotation:5.1,x:159.8,y:386.2},0).wait(2).to({y:387.8},0).wait(2).to({y:388.9},0).wait(23).to({regY:12.2,rotation:3.8,x:161.4,y:390.7},0).wait(2).to({regX:-1.8,regY:12.1,rotation:0.3,x:167.3,y:398.2},0).wait(1).to({rotation:-0.6,x:169.9,y:402.1},0).wait(2).to({rotation:-2.4,x:172.7,y:403.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.5,x:172.2,y:402},0).wait(1).to({rotation:-8.6,x:166.4,y:397.9},0).wait(1).to({x:164.2,y:392.9},0).wait(2).to({y:394.6},0).wait(1).to({y:396.2},0).wait(15).to({startPosition:0},0).wait(1).to({regY:12,x:164,y:393.7},0).wait(1).to({regY:11.9,rotation:-8.8,x:163.7,y:391.8},0).wait(1).to({regX:-1.9,regY:12.1,rotation:-8.9,x:163.5,y:390.6},0).wait(1).to({regX:-1.8,regY:12,rotation:-9.1,y:389.8},0).wait(3).to({rotation:-8.1,x:162.2,y:392.8},0).wait(2).to({rotation:-4.8,x:160.6,y:404.1},0).wait(1).to({regY:12.1,rotation:-2,x:161.4,y:406.9},0).wait(1).to({rotation:6.2,x:163.8,y:389.8},0).wait(2).to({rotation:7.7,y:384.5},0).wait(2).to({regX:-1.7,rotation:8.5,x:163.9,y:382},0).wait(3).to({y:383.2},0).wait(13).to({y:381.4},0).wait(2).to({rotation:7,x:164.6,y:385},0).wait(2).to({rotation:4.2,x:165.8,y:394.2},0).wait(1).to({regX:-1.8,regY:12.2,scaleX:1,scaleY:1,rotation:2,x:160.8,y:405.1},0).wait(1).to({rotation:0,x:156.1,y:412.3},0).wait(1).to({x:153.7,y:418.9},0).wait(3).to({y:416.5},0).wait(2).to({y:415.3},0).wait(5));

	// FIZ_FRONT_part_006
	this.instance_12 = new lib.FIZ_23_part_028("single",1);
	this.instance_12.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.instance_13 = new lib.FIZ_23_part_010("single",46);
	this.instance_13.setTransform(153.5,314.8,0.953,1.064,0,4.3,173.4,76.8,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2,startPosition:1,regX:12.5,scaleX:1.012}}]}).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.049,skewX:-5,skewY:-6.9,x:160.4,y:338.3,startPosition:46,regX:12.5,scaleX:1.012}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.022,skewX:-8.6,skewY:-14.4,x:159.8,y:340.5,startPosition:46,regX:12.3,scaleX:1.014}}]},1).to({state:[{t:this.instance_12,p:{regY:7.5,scaleY:1.101,skewX:18.7,skewY:5.5,x:164.6,y:307.6,startPosition:42,regX:12.5,scaleX:1.103}}]},2).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.073,skewX:0.6,skewY:2.7,x:165.7,y:305,startPosition:42,regX:12.5,scaleX:1.011}}]},1).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.073,skewX:0.6,skewY:2.7,x:164.6,y:308.4,startPosition:42,regX:12.5,scaleX:1.011}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.073,skewX:4.8,skewY:6.9,x:164.8,y:311.4,startPosition:42,regX:12.5,scaleX:1.011}}]},9).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.072,skewX:-2.3,skewY:-0.2,x:166.7,y:317.9,startPosition:43,regX:12.6,scaleX:1.011}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.072,skewX:4.8,skewY:7,x:166.7,y:325.1,startPosition:47,regX:12.6,scaleX:1.01}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.072,skewX:-6.4,skewY:-4.2,x:163.1,y:333.3,startPosition:1,regX:12.6,scaleX:1.011}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.072,skewX:-6.4,skewY:-4.2,x:162,y:336,startPosition:1,regX:12.6,scaleX:1.011}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.072,skewX:-6.4,skewY:-4.2,x:161.4,y:337.1,startPosition:1,regX:12.6,scaleX:1.011}}]},2).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.072,skewX:-4.6,skewY:-2.4,x:162.8,y:343.1,startPosition:1,regX:12.6,scaleX:1.01}}]},5).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.071,skewX:-3.8,skewY:-1.7,x:163.4,y:346.5,startPosition:1,regX:12.6,scaleX:1.01}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.071,skewX:-2.8,skewY:-0.6,x:163.6,y:342.6,startPosition:1,regX:12.6,scaleX:1.01}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.071,skewX:-4.1,skewY:-1.9,x:161.3,y:329.1,startPosition:1,regX:12.6,scaleX:1.01}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.071,skewX:-1.8,skewY:0.2,x:165.4,y:325.5,startPosition:1,regX:12.6,scaleX:1.01}}]},1).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:1.3,skewY:3.5,x:172.8,y:304.1,startPosition:1,regX:12.6,scaleX:1.01}}]},1).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:2.8,skewY:5,x:174,y:296.4,startPosition:1,regX:12.5,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:4.1,skewY:6.2,x:176.4,y:292.7,startPosition:1,regX:12.5,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:4.1,skewY:6.2,x:176.4,y:294.4,startPosition:1,regX:12.5,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:4.1,skewY:6.2,x:176.4,y:295.5,startPosition:1,regX:12.5,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:2.8,skewY:4.9,x:175.9,y:296.8,startPosition:1,regX:12.5,scaleX:1.009}}]},23).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.071,skewX:-0.6,skewY:1.4,x:175.9,y:303.7,startPosition:44,regX:12.5,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.9,scaleY:1.216,skewX:5.5,skewY:3.3,x:176.7,y:307.5,startPosition:48,regX:12.3,scaleX:1.008}}]},1).to({state:[{t:this.instance_12,p:{regY:7.9,scaleY:1.07,skewX:-3.5,skewY:-1.4,x:176.5,y:308.4,startPosition:48,regX:12.4,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.07,skewX:-5.5,skewY:-3.4,x:172.5,y:307.1,startPosition:49,regX:12.3,scaleX:1.009}}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.071,skewX:-7.7,skewY:-10.1,x:157.9,y:298.2,startPosition:45,regX:12.6,scaleX:1.008}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.07,skewX:-9.7,skewY:-7.5,x:157.8,y:299.8,startPosition:45,regX:12.5,scaleX:1.009}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.07,skewX:-9.7,skewY:-7.5,x:157.8,y:301.5,startPosition:45,regX:12.5,scaleX:1.009}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.07,skewX:-9.7,skewY:-7.5,x:157.8,y:301.5,startPosition:45,regX:12.5,scaleX:1.009}}]},15).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:-11.5,skewY:-9.4,x:157.1,y:299.2,startPosition:45,regX:12.4,scaleX:1.008}}]},1).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.069,skewX:-13.2,skewY:-10.9,x:156.8,y:297.4,startPosition:45,regX:12.5,scaleX:1.008}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:-14.2,skewY:-12,x:156.4,y:296.1,startPosition:45,regX:12.5,scaleX:1.007}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.07,skewX:-14.9,skewY:-12.8,x:156.3,y:295.3,startPosition:45,regX:12.5,scaleX:1.008}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:-17.7,skewY:-15.6,x:156.6,y:298.2,startPosition:45,regX:12.5,scaleX:1.008}}]},3).to({state:[{t:this.instance_12,p:{regY:7.8,scaleY:1.069,skewX:-10.7,skewY:-8.5,x:160.5,y:309.6,startPosition:45,regX:12.5,scaleX:1.008}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:-1.3,skewY:0.7,x:165.9,y:312.3,startPosition:45,regX:12.6,scaleX:1.007}}]},1).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.069,skewX:73.3,skewY:75.4,x:178.6,y:296.7,startPosition:45,regX:12.4,scaleX:1.008}}]},1).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:78.3,skewY:80.4,x:181,y:291.8,startPosition:45,regX:12.4,scaleX:1.007}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:80.6,skewY:82.8,x:182.2,y:289.6,startPosition:45,regX:12.5,scaleX:1.007}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.069,skewX:80.6,skewY:82.8,x:182.2,y:290.8,startPosition:45,regX:12.5,scaleX:1.007}}]},3).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.068,skewX:78.9,skewY:81,x:182.2,y:289.1,startPosition:45,regX:12.5,scaleX:1.007}}]},13).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.068,skewX:79.1,skewY:81.2,x:180.4,y:292.1,startPosition:45,regX:12.5,scaleX:1.007}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.068,skewX:76.3,skewY:78.4,x:177.1,y:300.7,startPosition:50,regX:12.5,scaleX:1.007}}]},2).to({state:[{t:this.instance_12,p:{regY:7.7,scaleY:1.074,skewX:1.1,skewY:3.2,x:171.7,y:313.4,startPosition:51,regX:12.6,scaleX:1.012}}]},1).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.148,skewX:-3.5,skewY:1.2,x:163.6,y:320.2,startPosition:1,regX:12.5,scaleX:1.012}}]},1).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:326.8,startPosition:1,regX:12.5,scaleX:1.012}}]},1).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:324.4,startPosition:1,regX:12.5,scaleX:1.012}}]},3).to({state:[{t:this.instance_12,p:{regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2,startPosition:1,regX:12.5,scaleX:1.012}}]},2).wait(5));

	// FIZ_FRONT_part_005
	this.instance_14 = new lib.FIZ_FRONT_H2_CO0MPHelloThere("synched",0,false);
	this.instance_14.setTransform(136.5,306,1,1,0,0,0,110.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regY:306.2,scaleX:1,scaleY:1,rotation:-5.8,x:134.5,y:321.8,startPosition:1},0).wait(1).to({regX:110.8,scaleX:1,scaleY:1,rotation:-7.1,x:134.2,y:324.7,startPosition:2},0).wait(2).to({regX:110.9,scaleX:1,scaleY:1,rotation:7.1,x:140.4,y:289.9,startPosition:4},0).wait(1).to({rotation:7.1,x:142.6,y:285.5,startPosition:5},0).wait(2).to({x:141,y:289.4,startPosition:7},0).wait(9).to({regY:306.3,rotation:5,x:140.4,y:292.8,startPosition:16},0).wait(2).to({regY:306.2,scaleX:1,scaleY:1,rotation:-1.3,x:141.6,y:301.3,startPosition:18},0).wait(1).to({rotation:-3.3,x:140.7,y:310.2,startPosition:19},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.6,x:136.9,y:318.5,startPosition:20},0).wait(1).to({rotation:-8.3,x:136.3,y:322.3,startPosition:21},0).wait(2).to({x:135.2,y:324.5,startPosition:23},0).wait(5).to({rotation:-6.3,x:136.8,y:330.8,startPosition:28},0).wait(2).to({rotation:-5.5,x:138.4,y:332.8,startPosition:30},0).wait(2).to({regX:110.8,regY:306.3,rotation:-4,x:138.7,y:330.9,startPosition:32},0).wait(1).to({regX:110.9,regY:306.2,rotation:0,x:135.9,y:313.7,startPosition:33},0).wait(1).to({rotation:1.5,x:141.7,y:307.2,startPosition:34},0).wait(1).to({regX:110.8,scaleX:1,scaleY:1,rotation:7.4,x:148.7,y:286.6,startPosition:35},0).wait(2).to({rotation:10.6,x:150.9,y:277.4,startPosition:37},0).wait(2).to({rotation:11.9,x:153.7,y:273.1,startPosition:39},0).wait(2).to({x:153.2,y:275.9,startPosition:41},0).wait(2).to({x:152.6,y:277.5,startPosition:43},0).wait(23).to({regX:110.9,regY:306.3,rotation:10.6,x:151.8,y:278.4,startPosition:66},0).wait(2).to({regY:306.4,rotation:4.6,x:151.7,y:286.3,startPosition:68},0).wait(1).to({rotation:1.5,x:152.3,y:292.1,startPosition:69},0).wait(2).to({regX:110.8,scaleX:1,scaleY:1,rotation:-0.7,x:152.1,y:295.2,startPosition:71},0).wait(1).to({regX:110.9,rotation:-3,x:144.9,y:296.5,startPosition:72},0).wait(1).to({regX:110.8,rotation:-7.8,x:132.8,y:289.9,startPosition:73},0).wait(1).to({x:129.5,y:283.3,startPosition:74},0).wait(2).to({y:286.1,startPosition:76},0).wait(1).to({y:288.8,startPosition:77},0).wait(15).to({startPosition:92},0).wait(1).to({regX:111,scaleX:0.99,scaleY:0.99,rotation:-7.9,x:128.9,y:285.7,startPosition:93},0).wait(1).to({regX:110.8,rotation:-8.1,x:128,y:283.2,startPosition:94},0).wait(1).to({x:127.5,y:281.5,startPosition:95},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.3,x:127.3,y:280.4,startPosition:96},0).wait(3).to({rotation:-9.6,x:127.8,y:282.8,startPosition:99},0).wait(2).to({scaleX:0.99,rotation:0,skewX:-7.6,skewY:-7.4,x:132,y:299.8,startPosition:101},0).wait(1).to({scaleX:0.99,skewX:-5.6,skewY:-4.8,x:137.7,y:301.6,startPosition:102},0).wait(1).to({regX:110.9,regY:306.2,scaleX:1,rotation:15,skewX:0,skewY:0,x:159.5,y:276,startPosition:103},0).wait(2).to({scaleX:0.99,scaleY:0.99,rotation:16.5,x:162.5,y:270.6,startPosition:105},0).wait(2).to({rotation:17.3,x:164.1,y:268,startPosition:107},0).wait(3).to({y:270.4,startPosition:110},0).wait(13).to({x:164.7,y:267.4,startPosition:123},0).wait(2).to({regX:110.8,rotation:17.4,x:162.4,y:271.1,startPosition:125},0).wait(2).to({regX:110.9,regY:306.4,rotation:14.8,x:158.1,y:280.7,startPosition:127},0).wait(1).to({regY:306.1,scaleX:1,scaleY:1,rotation:6.5,x:147.6,y:295.3,startPosition:128},0).wait(1).to({rotation:0,x:138.9,y:303,startPosition:129},0).wait(1).to({regX:110.8,rotation:-1.6,x:136.5,y:311.4,startPosition:130},0).wait(3).to({regX:110.9,regY:306.4,rotation:-0.9,y:308.8,startPosition:133},0).wait(2).to({regY:306.1,rotation:0,y:306,startPosition:135},0).wait(5));

	// FIZ_23_part_040
	this.instance_15 = new lib.FIZ_23_part_010("single",1);
	this.instance_15.setTransform(112.3,328.8,1,1,0,0,0,76.7,10);

	this.instance_16 = new lib.FIZ_23_part_028("single",46);
	this.instance_16.setTransform(110.3,340.4,0.953,1.015,0,2.9,-178.6,12.2,7.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAJCNQgRgBgRgIQgWgJgVgEQgqgGgpAKQgMADgOABQgLgCgKgDQgKgDgHgFQgEgDgCgEQgIgOAFgQQADgMAIgIQAggfAwgCQgMgEgNgBIgTgFQgQgFgNgJQgGgCgEgGQgDgGgBgIQgBgNAFgMQAIgPAQgGQAbgKAbAGQgDgHAAgIIAAgTQABgFACgFQADgGAGgFQAGgEAHgEQAWgHAXADQAZAEAYAJQAYAGAXAPQAVANASAQQASAQAPAUQAKANAJAPQAZgKAagHQALgBALADQAHAAAHAEQAHAFAFAGQAHAHADAIQACAGAAAHQABAIgCAIIgEAIQgNAQgTAIQghAIgeALQgLAFgKAHIgTARQgeAdgsAAIgEAAgAhDBnQANAAAMAEQAMAEAMAFQAdAMAegJQAPgFANgJQAPgMAKgNQADgDAGgDQAYgLAagHIAVgGIAAAAIAAAAQAXgFAMgSIACgEQgBgXgTgGQgLgEgNgBQgMADgMAFIgnASIgSAMIgGgBIAUgdQgJgXgSgUQgIgKgJgIQgmgfgtgOQgXgIgZgEIgXgBQgOACgKAKIAAAAIAAAbQAAAIAJAFQAOAIAQAHQAXALAWAMQATAKATAIIANAFIgXALQgbAOgbAaIgeAcIABgFIAGgUQglgHgjAJIgMAEIgUAMQgFAEgEAEIgFAGQgIAOANAMQADACAFABQAHACAIAAIA8gJQAZABAZADgAitAAIAlAEQAZAFAVANIARAKQAWgTAWgNIAIgCQgLgIgOgIQgjgSglgNQgYgJgbADIgQADQgKAEgGAKQgFALAEAIIAFAJIABAAIALAEIAMAGIgBAAg");
	this.shape_25.setTransform(32.5,344.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC99").s().p("AgTB0QgMgFgMgEQgMgEgNAAQgZgDgZgBIg8AJQgIAAgHgCQgFgBgDgCQgNgMAIgOIAFgGQAEgEAFgEIAUgMIAMgEQAjgJAlAHIgGAUIgBAFIAegcQAbgaAbgOIAXgLIgNgFQgTgIgTgKQgWgMgXgLQgQgHgOgIQgJgFAAgIIAAgbIAAAAQAKgKAOgCIAXABQAZAEAXAIQAtAOAmAfQAJAIAIAKQASAUAJAXIgUAdIAGABIASgMIAngSQAMgFAMgDQANABALAEQATAGABAXIgCAEQgMASgXAFIAAAAIgVAGQgaAHgYALQgGADgDADQgKANgPAMQgNAJgPAFQgNAEgMAAQgQAAgSgHgAhbAWQgVgNgZgFIglgEIAAAAIgMgGIgLgEIgBAAIgFgJQgEgIAFgLQAGgKAKgEIAQgDQAbgDAYAJQAlANAjASQAOAIALAIIgIACQgWANgWATIgRgKg");
	this.shape_26.setTransform(32.6,344.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72EBEB").s().p("AhCABQgJgOgJgLQBFgTBIgOIAAAAIADAAQAMAUAIAUIAAAAQAFAMAAAYQhEAPg+AYQgGgdgPgcg");
	this.shape_27.setTransform(91.1,316.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F0FF7A").s().p("AkGDPQgPgFgVgnQgUgigDgQIgQg+QAJgHgBgEIASgEIAAAAQARgCAIAAIABAAIACAAIABAAQAPAEAUAZQASAVAKAVQAKASAEAaIAAABIABAHIAAAAIABABQACASgCAQQgCgCgVAOIgQACIAAABIgMAAIgIAAgABghjQgLgbgJgNIAAAAIgHgKIAlgLQAJALALASQAPAcAFAbIgkAPIgOgmgAEzilQgHgSgLgSIAcgFIAHAQIAAABQAJAWAEAaIABALIgZAFQgBgagFgOg");
	this.shape_28.setTransform(70.1,330.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8089DD").s().p("AlQCVQgLgWgTgWQgSgXgPgIIARgOQAGgEAGgDQB9hbCagxIAKgEIADADIABAAIAGALIAAAAQAJAMAKAZIAAABQAJATAFASIAAABQibBFiBB7QgEgYgKgSgAF4g4QgDgBgBgEIgBgEIAEgNQAEgIAAgDIAAgEQgCgCgEAAQhNAChKANIAAgJQgEgegKgYIgGgNQBYgNBggEIAAAAIAAgOIABgDIAEABQAJADgBARQAAAKgEALIgFBDQgFAZgIAAIgBAAg");
	this.shape_29.setTransform(83.4,325.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AlbDrQgWgDgcgzQgVglgDgRIAAAAIgRhEIgBgDIgBgEQgBgDACgEQACgCAEAAQADgCACACQAFgJAagFQAQgEAKAAQCPhwDEhAIAAgBIABAAQAbgJAcgIIABgBQAEgCAEAAQBHgUBNgNIAHgBIACgBIABAAIAvgIIABAAQBegNBmgGQADAAADADIgDgCIgBADIAAAOIgBAAQhgAFhYAMIAGAOQALAYADAeIABAIQBJgMBOgDQADAAADADIgBAEQAAADgDAIIgBAAQhRADhMANIgDABQgVADgUAFIgBAAIAAAAIgBABQhKAPhFAbIgBAAIgCABIgcALIgHADIgHAEIgBAAIgGACIgBABQigBGiFCDQABASgCAPQABAEggAWIgBAAQgGADgRACIAAAAIgOAAIgKAAgAmbAyQABAEgJAHIAPA+QAEAQATAiQAVAnAQAFIATAAIABgBIAPgCQAWgOABACQACgQgCgSIAAgBIAAAAIgBgHIAAgBQgEgagKgSQgLgVgRgVQgVgZgPgEIgBAAIgCAAIAAAAQgJAAgQACIgBAAIgRAEgAgoiCQibAxh9BbQgGADgFAFIgRANQAOAJATAWQASAXAMAWQAJARAFAZQCBh8CZhEIAAgCQgGgRgGgUIAAAAQgLgagIgMIgBAAIgGgKIAAAAIgDgDIgKADgAgMiLIAHAKIAAAAQAHANAMAbIANAmIAlgPQgFgbgPgcQgLgSgJgLIgkALgAAqicQAIALAKAQQAPAcAGAdQBAgYBDgPQAAgagEgMIgBAAQgHgUgNgTIgCAAIgBAAQhKANhEATgADOi/QAMASAGASQAFAOABAaIAZgFIgBgLQgDgagKgWIABgBIgHgQIgdAFg");
	this.shape_30.setTransform(78.4,329.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AgdAPIgFgQQAAgjAiAFQAjAFAAAeQgIAdgbAAQgUAAgJgSg");
	this.shape_31.setTransform(30.2,215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:112.3,y:328.8,startPosition:1,rotation:0,regY:10}}]}).to({state:[{t:this.instance_16,p:{regX:12.2,regY:7.7,scaleX:0.953,scaleY:1.015,skewX:2.9,skewY:-178.6,x:110.3,y:340.4,startPosition:46}}]},1).to({state:[{t:this.instance_16,p:{regX:12.4,regY:7.8,scaleX:0.964,scaleY:0.975,skewX:7.1,skewY:-173.1,x:107.8,y:342.5,startPosition:46}}]},1).to({state:[{t:this.instance_15,p:{regX:76.6,scaleX:1.086,scaleY:1.06,skewX:-21.9,skewY:-3.2,x:117.3,y:312.1,startPosition:42,rotation:0,regY:10}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:116.6,y:309.3,startPosition:42,rotation:1.5,regY:10}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:1,scaleY:1,skewX:0,skewY:0,x:115.6,y:312.6,startPosition:42,rotation:1.5,regY:10}}]},2).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},9).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:117.9,y:324.5,startPosition:43,rotation:-1.4,regY:10}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:118,y:332.9,startPosition:49,rotation:-2.7,regY:10}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.965,scaleY:0.964,skewX:-5.4,skewY:-8.1,x:114.8,y:343.5,startPosition:50,rotation:0,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.999,scaleY:0.999,skewX:-4.2,skewY:-6.5,x:113.7,y:346.2,startPosition:44,rotation:0,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:113.1,y:347.4,startPosition:44,rotation:-5.4,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:114.2,y:351.7,startPosition:44,rotation:-3.6,regY:10.1}}]},5).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:114.7,y:354.2,startPosition:44,rotation:-5.1,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:114.8,y:349.2,startPosition:44,rotation:-7.1,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:112.6,y:336.9,startPosition:44,rotation:-8.5,regY:10.1}}]},1).to({state:[{t:this.shape_31},{t:this.instance_15,p:{regX:76.6,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:116.4,y:331.5,startPosition:51,rotation:-10.7,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.6,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:123.6,y:307.5,startPosition:45,rotation:-3.4,regY:10}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:124.8,y:298.7,startPosition:45,rotation:-4.6,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:127.2,y:293.9,startPosition:45,rotation:-2.1,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:127.1,y:295.5,startPosition:45,rotation:0,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:127.2,y:296.6,startPosition:45,rotation:-0.6,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.999,skewX:1.9,skewY:0.7,x:126.7,y:299.1,startPosition:45,rotation:0,regY:10.1}}]},23).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:126.9,y:309,startPosition:46,rotation:-5.4,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:1.002,scaleY:1.004,skewX:-12.5,skewY:-3.8,x:128,y:313.5,startPosition:52,rotation:0,regY:10}}]},1).to({state:[{t:this.instance_15,p:{regX:76.4,scaleX:0.997,scaleY:0.998,skewX:-10.5,skewY:-8.3,x:127.8,y:316,startPosition:52,rotation:0,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.4,scaleX:0.997,scaleY:0.999,skewX:-14,skewY:-10.4,x:120.1,y:316.8,startPosition:52,rotation:0,regY:10.3}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.923,scaleY:0.928,skewX:-20.1,skewY:-14.5,x:112.4,y:313.5,startPosition:46,rotation:0,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.998,skewX:-18,skewY:-14.2,x:110.2,y:311.3,startPosition:47,rotation:0,regY:10.2}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:110.3,y:312.9,startPosition:47,rotation:-14.5,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:110.3,y:314.5,startPosition:47,rotation:-14.5,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:110.3,y:314.5,startPosition:47,rotation:-14.5,regY:10.1}}]},15).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:109.8,y:312.3,startPosition:47,rotation:-13.2,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:109.3,y:310.7,startPosition:47,rotation:-12.4,regY:10.2}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:109.1,y:309.3,startPosition:47,rotation:-11.7,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:108.9,y:308.6,startPosition:47,rotation:-11.4,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:109.1,y:310.7,startPosition:47,rotation:-8.7,regY:10.2}}]},3).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:112.3,y:319.2,startPosition:47,rotation:-10.2,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:1.014,scaleY:0.997,skewX:0,skewY:0,x:117.3,y:319.7,startPosition:47,rotation:-17.2,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.996,scaleY:0.996,skewX:0,skewY:0,x:145.2,y:295.3,startPosition:47,rotation:-71.7,regY:10.1}}]},1).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.995,scaleY:0.995,skewX:0,skewY:0,x:147.7,y:289.6,startPosition:47,rotation:-79,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.995,scaleY:0.995,skewX:0,skewY:0,x:149,y:286.8,startPosition:47,rotation:-80.2,regY:10.1}}]},2).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.995,scaleY:0.995,skewX:0,skewY:0,x:149,y:288,startPosition:47,rotation:-80.2,regY:10.1}}]},3).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.995,scaleY:0.995,skewX:0,skewY:0,x:149.1,y:286.2,startPosition:47,rotation:-77.9,regY:10.1}}]},13).to({state:[{t:this.instance_15,p:{regX:76.5,scaleX:0.995,scaleY:0.995,skewX:0,skewY:0,x:147.3,y:290.3,startPosition:47,rotation:-81.7,regY:10.1}}]},2).to({state:[{t:this.instance_16,p:{regX:12.5,regY:7.7,scaleX:1.007,scaleY:1.068,skewX:-76.2,skewY:101.6,x:137.3,y:298,startPosition:50}}]},2).to({state:[{t:this.instance_16,p:{regX:12.6,regY:7.7,scaleX:1.012,scaleY:1.074,skewX:-1,skewY:176.8,x:124,y:312.9,startPosition:51}}]},1).to({state:[{t:this.instance_15,p:{regX:76.7,scaleX:1,scaleY:1.06,skewX:3.8,skewY:0,x:114.7,y:325.8,startPosition:1,rotation:0,regY:10}}]},1).to({state:[{t:this.instance_15,p:{regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:112.3,y:332.4,startPosition:1,rotation:0,regY:10}}]},1).to({state:[{t:this.instance_15,p:{regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:112.3,y:330,startPosition:1,rotation:0,regY:10}}]},3).to({state:[{t:this.instance_15,p:{regX:76.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:112.3,y:328.8,startPosition:1,rotation:0,regY:10}}]},2).wait(5));

	// FIZ_23_part_039
	this.instance_17 = new lib.FIZ_23_part_009("single",0);
	this.instance_17.setTransform(135,319.6,0.977,1,0,0,0,41.6,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(1).to({regX:41.7,rotation:-3.1,x:134.1,y:336.1},0).wait(1).to({x:133.6,y:338.3},0).wait(2).to({scaleX:0.98,rotation:1.5,x:138.5,y:303.4},0).wait(1).to({x:139.6,y:300.7},0).wait(2).to({x:138.6,y:304},0).wait(9).to({regX:41.6,scaleY:1,rotation:0.5,x:138.7,y:307.5},0).wait(2).to({regX:41.8,regY:43.6,rotation:-1.3,x:140.4,y:314.9},0).wait(1).to({regY:43.5,rotation:-2.6,y:322.6},0).wait(1).to({scaleX:0.98,rotation:-5.3,x:136.6,y:332.1},0).wait(1).to({x:135.5,y:334.8},0).wait(2).to({x:135,y:335.9},0).wait(5).to({rotation:-3.5,x:136.4,y:340.9},0).wait(2).to({scaleY:1,rotation:-2.5,x:137.1,y:344},0).wait(2).to({regX:41.7,rotation:-1.2,x:137.3,y:339.4},0).wait(1).to({regX:41.8,scaleY:1,rotation:-2.6,x:135,y:326.6},0).wait(1).to({scaleY:1,rotation:-0.3,x:139.1,y:322.1},0).wait(1).to({regX:41.6,rotation:2.3,x:146.6,y:299.3},0).wait(2).to({rotation:3.8,x:148,y:290.9},0).wait(2).to({regX:41.7,rotation:5.1,x:150.7,y:286.7},0).wait(2).to({y:288.3},0).wait(2).to({y:289.4},0).wait(23).to({regY:43.6,rotation:3.8,x:150,y:291.4},0).wait(2).to({rotation:0.3,x:149.8,y:299.9},0).wait(1).to({regX:41.8,rotation:-0.6,x:150.7,y:304.2},0).wait(2).to({scaleX:0.97,rotation:-2.4,x:150.3,y:305.8},0).wait(1).to({scaleY:1,rotation:-4.5,x:146.4,y:305.6},0).wait(1).to({regX:41.7,rotation:-8.6,x:133.6,y:303.6},0).wait(1).to({x:131.4,y:298.6},0).wait(2).to({y:300.3},0).wait(1).to({y:301.9},0).wait(15).to({startPosition:0},0).wait(1).to({regX:41.8,scaleX:0.97,x:130.9,y:299.7},0).wait(1).to({regX:41.7,rotation:-8.8,x:130.4,y:297.9},0).wait(1).to({rotation:-8.9,x:130,y:296.6},0).wait(1).to({regX:41.6,scaleX:0.97,rotation:-9.1,x:129.8,y:295.9},0).wait(3).to({rotation:-8.1,x:130.2,y:298.3},0).wait(2).to({rotation:-4.8,x:134.1,y:308.1},0).wait(1).to({scaleX:0.97,rotation:-2,x:139.6,y:309.6},0).wait(1).to({regX:41.7,scaleX:0.97,rotation:6.2,x:156.6,y:290.2},0).wait(2).to({rotation:7.7,x:159.2,y:284.8},0).wait(2).to({regX:41.8,rotation:8.5,x:160.6,y:282.2},0).wait(3).to({y:283.4},0).wait(13).to({y:281.6},0).wait(2).to({rotation:7,x:158.7,y:285.3},0).wait(2).to({regY:43.5,rotation:4.2,x:155.1,y:294.9},0).wait(1).to({regX:41.6,scaleX:0.98,scaleY:1,rotation:2,x:145.6,y:308.7},0).wait(1).to({rotation:0,x:137.4,y:316.6},0).wait(1).to({x:135,y:323.2},0).wait(3).to({y:320.8},0).wait(2).to({y:319.6},0).wait(5));

	// FIZ_23_part_037
	this.instance_18 = new lib.FIZ_23_part_007("single",0);
	this.instance_18.setTransform(162.1,96.5,1,1,0,0,0,34.5,82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regY:82,scaleX:1,scaleY:1,rotation:-5.8,x:137.3,y:112.9},0).wait(1).to({regY:82.1,scaleX:1,scaleY:1,rotation:-7.1,x:133,y:113.6},0).wait(2).to({regY:82.2,scaleX:1,scaleY:1,rotation:7.1,x:191.5,y:85.4},0).wait(1).to({rotation:7.1,x:199.9,y:70.4},0).wait(2).to({x:199.5,y:74.6},0).wait(1).to({x:198.9,y:77.9},0).wait(1).to({regX:34.6,scaleX:1.06,scaleY:0.95,rotation:0,skewX:8.1,skewY:5.5,x:192.2,y:88.2},0).wait(1).to({regX:34.5,scaleX:1,scaleY:1,rotation:7.1,skewX:0,skewY:0,x:192.1,y:84.9},0).wait(6).to({rotation:5,x:184,y:86.6},0).wait(2).to({regY:82.1,scaleX:1,scaleY:1,rotation:-1.3,x:161.7,y:91.6},0).wait(1).to({regY:82.2,rotation:-3.3,x:153.2,y:100},0).wait(1).to({regY:82.1,scaleX:1,scaleY:1,rotation:-6.6,x:137.8,y:110.7},0).wait(1).to({regX:34.6,rotation:-8.3,x:131,y:114.6},0).wait(2).to({x:129.9,y:116.8},0).wait(5).to({rotation:-6.3,x:138.8,y:123},0).wait(2).to({regX:34.5,regY:82,rotation:-5.5,x:143.4,y:124.3},0).wait(2).to({rotation:-4,x:149.3,y:122.6},0).wait(1).to({regX:34.6,regY:82.1,rotation:0,x:161.6,y:106.9},0).wait(1).to({regY:82,rotation:1.5,x:173,y:101.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.4,x:200.7,y:84.7},0).wait(2).to({regY:82.1,rotation:10.6,x:214.4,y:78.9},0).wait(2).to({regY:82,rotation:11.9,x:221.5,y:76.1},0).wait(2).to({x:221,y:78.9},0).wait(2).to({x:220.4,y:80.5},0).wait(23).to({rotation:10.6,x:215,y:79.9},0).wait(2).to({rotation:4.6,x:193.8,y:82.1},0).wait(1).to({regY:82.2,rotation:1.5,x:183.3,y:86.2},0).wait(2).to({regX:34.5,regY:82.1,scaleX:1,scaleY:1,rotation:-0.7,x:174.6,y:88.1},0).wait(1).to({regX:34.4,regY:82,rotation:-3,x:158.9,y:88.6},0).wait(1).to({regX:34.6,regY:82.2,rotation:-7.8,x:129.6,y:81.7},0).wait(1).to({x:126.3,y:75.1},0).wait(2).to({y:77.9},0).wait(1).to({y:80.6},0).wait(15).to({startPosition:0},0).wait(1).to({regY:82.1,scaleX:0.99,scaleY:0.99,rotation:-7.9,x:124.8,y:77.5},0).wait(1).to({regY:82.2,rotation:-8.1,x:123.6,y:75.1},0).wait(1).to({regX:34.5,regY:82.1,x:122.6,y:73.3},0).wait(1).to({regY:82.2,scaleX:1,scaleY:1,rotation:-8.3,x:122.2,y:72.3},0).wait(3).to({regX:34.4,rotation:-9.6,x:117.9,y:74.8},0).wait(2).to({scaleX:0.99,rotation:0,skewX:-7.6,skewY:-7.4,x:129.5,y:91.6},0).wait(1).to({regX:34.3,scaleX:0.99,skewX:-5.6,skewY:-4.8,x:142.6,y:93.7},0).wait(1).to({regX:34.5,scaleX:1,rotation:15,skewX:0,skewY:0,x:237.7,y:83.2},0).wait(2).to({regX:34.6,scaleX:0.99,scaleY:0.99,rotation:16.5,x:245.8,y:80},0).wait(2).to({regX:34.5,rotation:17.3,x:249.9,y:78.7},0).wait(3).to({y:81.1},0).wait(13).to({x:250.5,y:78.1},0).wait(2).to({rotation:17.4,x:248.4,y:81.9},0).wait(2).to({regX:34.4,rotation:14.8,x:235.3,y:87.6},0).wait(1).to({regX:34.5,scaleX:1,scaleY:1,rotation:6.5,x:196.6,y:90.2},0).wait(1).to({regY:82.1,rotation:0,x:164.5,y:93.5},0).wait(1).to({regX:34.6,regY:82,rotation:-1.6,x:155.6,y:101.2},0).wait(3).to({regY:82.1,rotation:-0.9,x:158.3,y:98.5},0).wait(2).to({regX:34.5,rotation:0,x:162.1,y:96.5},0).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.8,4.6,202.6,496.6);


(lib.FIZ_FRONT_COMPFoolingFred = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_23_part_040
	this.instance = new lib.FIZ_23_part_010copy2("single",32);
	this.instance.setTransform(120.9,327.5,1.2,0.994,0,-2.8,-4.6,76.5,10);

	this.instance_1 = new lib.FIZ_23_part_010("single",33);
	this.instance_1.setTransform(127.8,315.1,1.006,1.008,0,2,-1.1,76.6,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regY:10,scaleX:1.2,scaleY:0.994,skewX:-2.8,skewY:-4.6,x:120.9,y:327.5,startPosition:32}}]},34).to({state:[{t:this.instance_1,p:{regX:76.6,regY:10.1,scaleX:1.006,scaleY:1.008,skewX:2,skewY:-1.1,x:127.8,y:315.1,startPosition:33}}]},1).to({state:[{t:this.instance_1,p:{regX:76.7,regY:10,scaleX:1.005,scaleY:1.007,skewX:0.9,skewY:0.7,x:127.9,y:317,startPosition:28}}]},2).to({state:[{t:this.instance_1,p:{regX:76.6,regY:10.1,scaleX:1.006,scaleY:1.008,skewX:2,skewY:-1.1,x:127.8,y:317.6,startPosition:28}}]},1).to({state:[{t:this.instance,p:{regY:10.1,scaleX:1.006,scaleY:1.007,skewX:0.8,skewY:-2.4,x:127.7,y:320.8,startPosition:34}}]},17).to({state:[{t:this.instance_1,p:{regX:76.5,regY:10.1,scaleX:1.006,scaleY:1.007,skewX:-0.2,skewY:-3.4,x:127.6,y:327,startPosition:35}}]},2).to({state:[]},1).wait(53));

	// Layer 61
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPCOQgYgDgYgFIgDgCIgDgEQgbgBgQgXQgIgMgDgRIgMgJQgJgGgHgIQgEgFgBgGQgBgEABgEQAEgTAPgNQAHgEAIgEQAJgEAKgDQAtgIAsgTQgbgJgLgeQgFgPADgOQAEgQAMgKQAJgHAKgCQAMACAJAGIA1AgQAbAQAcAOIALAIQALAIAJALQAFAFADAHQALAcgEAcQgCAbgQAYQgMATgRAMQgTAOgVAMQgPAKgQADQgOADgNAAQgMAAgOgDgAAUBuIgPAGIgNAGIgRADQAgAIAggLIAPgGQAIgDAHgEIAdgUQAXgSAMgdQAMgkgMghQgJgUgVgJQgPgGgOgIQgPgGgNgJQgUgNgTgOIgMgKIgOgDQgRAKABAUIABALQABADADADQAFAHAHAFQANAIAKAGIArgFQgQAOgWAKIgQAJIgSAHIglANQgUAEgTACQggAHgHAgQATAPAXAGIAPABIAQAAIAhgHQAUgHATgIIATgIQgcAbgmAOIgWAFIgUACIgUgCQADALAKAJQAEAEAGACIALAEIAZAAQAqgGAmgRIArgTQgZAcgiAPg");
	this.shape.setTransform(157.3,395.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC99").s().p("AgYB8IAQgDIAOgGIAPgGQAhgPAagcIgsATQgmARgqAGIgYAAIgMgEQgFgCgFgEQgKgJgDgLIAVACIAUgCIAVgFQAngOAcgbIgUAIQgSAIgVAHIghAHIgPAAIgPgBQgYgGgSgPQAHggAggHQATgBATgFIAlgNIASgHIARgJQAWgKAQgOIgrAFQgLgGgMgIQgHgFgGgHQgDgDgBgDIgBgLQAAgUAQgKIAPADIALAKQATAOAUANQAOAJAOAGQAPAIAPAGQAUAJAJAUQANAhgNAkQgLAdgYASIgdAUQgHAEgHADIgPAGQgTAGgTAAQgMAAgOgDg");
	this.shape_1.setTransform(157.3,395.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AhBCxQgGgMgIgJIg7g+IAkghQATgSASgVIAfglIAcgqQAMgUAPgaQALgVAGgWIAGgWIACgHIgZAYIgIgJQATglAfgTIAxgBQAGANAFAOQAIARADARIAFAfIgFAZQgDAUgIATIgLAdIgKAZQgLAVgNAXQg0BjhGBSIgVgpg");
	this.shape_2.setTransform(183.6,371.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhjEPIgFAAQgIgGgEgLQgLgagOgaIgphKIgOgcIACgNQgBAYAJgKQAKgKAHgPQAGgPAjgUQAigTAYgZIADgCQAhgkAcgmQARgZAOgYIAWglIAKgUIgBgCIgKgLIgmgnIgdgdIAmgBIgFAIIAfAgQAMgYATgRIAggBQgfATgTAlIAIAJIAZgYIgBAHIgHAWQgGAWgLAVQgPAagOAUIgcAqIgdAnQgRAVgUAQIgkAhIA7A+QAIAJAHAMIAVApQBFhSA1hhQAMgXALgXIALgZIALgdQAHgTAEgUIAEgZIgEgfQgEgRgHgRQgFgOgHgNIAUAAQALASAHAYQAHAcgDAbQgDAXgGAYIgGAWQgIAagMAaIgYAwQgMAVgOAXIgbArIgPAUIgTAZIgjArIgPATQABAEgCAGQAAAIgEAIQgFAIgFAHQgHAJgHAGQgaAYggABIgNAAgAibBcIgPAUQAPAcAQAbQAZAnASAtIAkgDIADgDIALgIIAOgMIAAAAQAXgWgIgeQgFgVgMgSIghglIgXgZIgWgWQgcASgPAYgAirBaIgHAHIAGALIAAgBQADgRgCAAIAAAAg");
	this.shape_3.setTransform(179.2,376.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0FF7A").s().p("AhWCwQgQgagPgcIAOgVQAQgYAbgSIAWAWIAYAZIAfAlQALASAGAVQAHAfgWAVIAAAAIgPANIgIAHIgDADIgkADQgTgtgYgngAh9BqIAHgHQADgBgFASIAAABIgFgLgABBj6IAFgIIA5gBQgTARgNAZg");
	this.shape_4.setTransform(174,375.5);

	this.instance_2 = new lib.FIZ_23_part_028copy2("single",2);
	this.instance_2.setTransform(159.3,328.2,1.012,1.073,0,-3.4,-1.3,12.5,7.7);

	this.instance_3 = new lib.FIZ_23_part_028("single",2);
	this.instance_3.setTransform(169,317.4,1.012,1.069,0,2.4,2.9,12.5,7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgiCMQgYgGgXgJIgDgBIgCgFQgbgEgNgZQgGgMAAgSIgMgJQgIgIgFgJQgEgEAAgHQAAgEACgEQAGgQARgLQAIgGAKgCIAUgGQAugCAvgPQgagLgGgeQgCgQAFgOQAHgPANgJQAKgGAJgBQALAEAKAHIAxAlQAZAUAaAQIAKAKQAKAIAHANIAGAMQAHAbgIAeQgHAbgTAVQgQARgTALQgWALgWAKQgRAJgRABIgNAAQgUAAgUgGgAAHBvIgPAFIgQADIgRACQAgAMAggIIARgEQAHgBAJgEIAggQQAbgQAPgcQATgigHghQgGgVgUgLIgbgRQgOgJgMgJQgSgQgRgQIgMgMIgOgEQgRAIgDAUQgBAFABAGQAAADADAEQAFAHAGAGQAJAJAMAHIAsABQgSAMgYAGIgTAHIgSAFIgoAJQgVAFgTAAQgiACgLAdQAQARAXAJIAOADIAQACIAigFQAXgDATgHIAWgFQghAXgpAKIgXADIgUAAIgUgFQABALAIAKQAEAEAFADQAGAEAGACIAYACQAsgCApgMIAvgNQgfAZgjAKg");
	this.shape_5.setTransform(163,378.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgpB5IARgCIAQgDIAPgFQAkgLAegYIguANQgqAMgrACIgZgDQgGgCgFgEQgFgCgEgEQgIgKgCgMIAUAFIAVAAIAWgDQApgJAhgYIgVAGQgUAGgWAEIgiAEIgQgCIgPgDQgXgJgQgRQAMgcAhgDQAUAAAVgEIAngJIASgFIATgHQAYgHASgMIgsAAQgLgHgKgKQgGgFgFgIQgCgDgBgEQAAgGABgEQACgUARgJIAOAEIAMAMQARARATAPQAMAKAOAIIAbARQATALAGAVQAHAigSAiQgQAcgbAPIggARQgIADgIACIgRAEQgNADgLAAQgUAAgUgHg");
	this.shape_6.setTransform(163,378.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72EBEB").s().p("AgEA2Qgtg2gxgyIACgEICWgDQAXAXAWAaIgPAEQg1AOggAwIgDgEg");
	this.shape_7.setTransform(192.8,329.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8089DD").s().p("AhfCsQgFgMgHgKQgZgjgZgiIApgdQAXgPAVgTQAUgSARgPQATgTAQgTQAQgTASgYQAPgUAKgUIAKgWIACgGIgcAVIgIgKQAmg3BBgGQAJAUAFAXQAEASABASIABAfIgJAYQgHATgKASIgQAcIgOAVQgPAXgQAVQhEBahUBLIgOgrg");
	this.shape_8.setTransform(193.9,357.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiKFDIgMgBIgFgBQgIgGgCgLQgHgcgKgbIgdhPIgLgcIAEgOQgEAYAKgJQALgJAKgNQAJgPAmgPQAmgQAbgXIAEgDQAngfAjgiQAUgVASgWIAcgiIAOgUIgBgCIgIgMIghgqQgegngbgfQgjgogmgnIAgAAIgCAEQAwAyAsA3IADAEQAigvA1gRIAPgEQgWgagXgXIAaAAIAHAHIAFAGIAKAKIAaAiQAQAWAPAZQAJAPAHAQQAJAVADAbQADAbgHAbQgHAXgJAWIgKAWQgMAWgQAZIggAtQgQAWgRAUIgiAoIgSASIgXAXIgoAnIgTARQAAAEgCAGQgEAHgFAHQgFAIgIAHQgHAHgJAGQgbASgfAAIgFAAgAi0CKIgRATQAKAdANAcQASAqAMAtIAkACIAFgDIALgGIARgLIAAAAQAagSgDgfQgCgWgKgTIgbgpQgJgPgLgMIgTgYQgeAPgUAWgABziRIgJAWQgLAUgOAUQgTAYgRATQgRATgSATQgPAPgUASQgWATgWAPIgpAdQAZAhAYAkQAIAKAEAMIAPArQBThLBEhaQARgWAOgWIAPgVIAQgcQAKgSAGgTIAJgYIAAgfQgBgSgEgSQgFgXgKgUQhAAGgmA3IAHAKIAcgWIgCAHgAjDCHQgCAAgGAFIAEALIAAAAQAGgRgCAAIAAABgABmjyQgQAKgOAMQgOAOgNAQIAaAjQAbgpAtgOIAegJIgYgkIgCgBQgZACgUAMg");
	this.shape_9.setTransform(189.3,355.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FF7A").s().p("AiBEWQgLgtgSgqQgNgcgKgdIARgTQAUgWAegPIATAYQAKAMAKAPIAbApQAJATACAWQAEAfgaASIgBAAIgRALIgLAGIgEADgAi8B1QAGgFADAAQACgCgGASIAAAAIgFgLgAA8jVQANgQAPgOQAOgMAQgKQAUgMAZgCIABABIAZAkIgeAJQgtAOgcApg");
	this.shape_10.setTransform(187.7,358.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[{t:this.instance_2,p:{scaleX:1.012,skewX:-3.4,skewY:-1.3,x:159.3,y:328.2,startPosition:2,regY:7.7,scaleY:1.073,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-7.2,skewY:-5,x:154.9,y:329.1,startPosition:22,regY:7.7,scaleY:1.073,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:332.8,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:331.4,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:331.9,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:333.8,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:332.8,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:331.4,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:331.9,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:333.8,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:332.8,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-8.2,skewY:-6,x:154.7,y:331.9,startPosition:22,regY:7.6,scaleY:1.073,regX:12.5}}]},3).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-7.9,skewY:-5.7,x:154.4,y:331.6,startPosition:22,regY:7.6,scaleY:1.072,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-7.4,skewY:-5.2,x:153.5,y:331.2,startPosition:22,regY:7.6,scaleY:1.072,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.01,skewX:-6.4,skewY:-4.2,x:152,y:330.3,startPosition:22,regY:7.6,scaleY:1.072,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.01,skewX:-5.2,skewY:-3.1,x:149.9,y:329.1,startPosition:22,regY:7.6,scaleY:1.072,regX:12.6}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-5.9,skewY:-4,x:145,y:326.1,startPosition:22,regY:7.5,scaleY:1.072,regX:12.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:1.011,skewX:-6.3,skewY:-4.9,x:143.1,y:324.2,startPosition:22,regY:7.5,scaleY:1.071,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.012,skewX:-2.9,skewY:-3.1,x:146.9,y:324.4,startPosition:22,regY:7.7,scaleY:1.117,regX:12.5}}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},2).to({state:[{t:this.instance_2,p:{scaleX:1.009,skewX:16.8,skewY:15.8,x:175.6,y:317.7,startPosition:2,regY:7.5,scaleY:1.086,regX:12.6}}]},20).to({state:[{t:this.instance_2,p:{scaleX:1.014,skewX:4,skewY:-1,x:173.9,y:325,startPosition:3,regY:7.5,scaleY:1.13,regX:12.5}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.015,skewX:7.5,skewY:6.7,x:167.2,y:323,startPosition:3,regY:7.5,scaleY:0.971,regX:12.7}}]},1).to({state:[{t:this.instance_2,p:{scaleX:1.171,skewX:7.9,skewY:-2.9,x:162.4,y:325.3,startPosition:4,regY:7.5,scaleY:1.092,regX:12.5}}]},1).to({state:[]},2).wait(49));

	// FIZ_FRONT_part_030
	this.instance_4 = new lib.FIZ_23_part_040("single",0);
	this.instance_4.setTransform(149.2,318.5,0.977,1,0,0,0,56.1,42.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({skewX:-0.2,skewY:-0.8,x:147.3,y:319.4},0).wait(2).to({rotation:-2.4,skewX:0,skewY:0,x:147.1,y:324},0).wait(1).to({regY:42.3,scaleX:0.98,scaleY:1,rotation:-6.1,x:142.4,y:325.6},0).wait(2).to({rotation:-7.2,x:142.2,y:329.6},0).wait(2).to({y:328.2},0).wait(1).to({y:328.7},0).wait(2).to({y:330.6},0).wait(1).to({y:329.6},0).wait(2).to({y:328.2},0).wait(1).to({y:328.7},0).wait(2).to({y:330.6},0).wait(1).to({y:329.6},0).wait(3).to({y:328.7},0).wait(1).to({rotation:-7.1,x:141.9,y:328.5},0).wait(1).to({rotation:-7.4,x:140.9,y:328.1},0).wait(1).to({regX:56,regY:42.2,rotation:-7.9,x:139.3,y:327.3},0).wait(1).to({regX:56.1,regY:42.4,rotation:-8.7,x:137.2,y:326.3},0).wait(2).to({scaleY:1,rotation:0,skewX:-9.3,skewY:-9.6,x:132.4,y:323.6},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:-9.8,skewY:-10.5,x:130.4,y:321.9},0).wait(2).to({scaleX:0.98,scaleY:1,skewX:-8.9,skewY:-10.4,x:134.3},0).wait(2).to({regX:56,regY:42.2,scaleX:0.98,skewX:-1,skewY:-2.5,x:156.9,y:313.3},0).wait(1).to({regY:42.3,scaleX:0.98,scaleY:1.01,skewX:4,skewY:0.8,x:164.9,y:303},0).wait(2).to({skewY:0.8,y:305},0).wait(1).to({y:305.5},0).wait(17).to({skewX:2.8,skewY:-0.3,x:164.6,y:307.8},0).wait(2).to({skewX:1.8,skewY:-1.3,x:163.6,y:313.4},0).wait(1).to({regX:56.1,skewX:0.5,skewY:-2.6,x:161.9,y:317.6},0).wait(1).to({regY:42.4,scaleX:0.98,scaleY:1,skewX:-1.6,skewY:-3.1,x:154.8,y:319.7},0).wait(1).to({scaleX:0.98,scaleY:1,rotation:-4,skewX:0,skewY:0,x:147.8,y:321.7},0).wait(2).to({rotation:-5.6,x:145,y:320.9},0).wait(2).to({rotation:-6.4,x:144,y:320},0).wait(2).to({regX:56,rotation:-6.8,x:141.4,y:298.8},0).wait(1).to({y:294.3},0).wait(1).to({y:292.3},0).wait(2).to({y:293.3},0).wait(2).to({y:294.3},0).wait(23).to({scaleX:0.98,rotation:-5.8,x:141.1,y:290.6},0).wait(2).to({x:141.6,y:289.1},0).wait(2).to({rotation:-3.9,x:141.9,y:292.9},0).wait(1).to({regX:55.9,scaleX:0.98,rotation:-2.6,x:144,y:301.1},0).wait(1).to({regY:42.5,rotation:-1.6,x:145.9,y:307.8},0).wait(1).to({regX:56,regY:42.4,scaleY:1,rotation:-0.8,x:147.4,y:312.9},0).wait(1).to({scaleX:0.98,rotation:-0.1,x:148.4,y:316.6},0).wait(1).to({rotation:0,x:149.1,y:318.8},0).wait(1).to({regX:56.1,x:149.2,y:319.5},0).wait(2).to({y:318.5},0).wait(4));

	// FIZ_FRONT_part_029
	this.instance_5 = new lib.FIZ_23_part_039("single",0);
	this.instance_5.setTransform(134.7,322.7,1,1,0,0,0,41.6,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({skewX:-0.2,skewY:-0.8,x:132.9,y:323.8},0).wait(2).to({regY:9,rotation:-2.4,skewX:0,skewY:0,y:328.7},0).wait(1).to({regY:9.1,scaleX:1,scaleY:1,rotation:-6.1,x:128.5,y:331.4},0).wait(2).to({regX:41.5,regY:9,rotation:-7.2,x:128.4,y:335.5},0).wait(2).to({y:334.1},0).wait(1).to({y:334.6},0).wait(2).to({y:336.5},0).wait(1).to({y:335.5},0).wait(2).to({y:334.1},0).wait(1).to({y:334.6},0).wait(2).to({y:336.5},0).wait(1).to({y:335.5},0).wait(3).to({y:334.6},0).wait(1).to({regX:41.6,rotation:-7.1,x:128.1,y:334.5},0).wait(1).to({rotation:-7.4,x:127.2,y:334.2},0).wait(1).to({regX:41.5,rotation:-7.9,x:125.6,y:333.5},0).wait(1).to({rotation:-8.7,x:123.6,y:332.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,skewX:-9.3,skewY:-9.6,x:118.8,y:330},0).wait(1).to({scaleX:1,scaleY:1,skewX:-9.8,skewY:-10.5,x:116.9,y:328.5},0).wait(2).to({regX:41.4,regY:8.9,scaleX:1,scaleY:1,skewX:-8.9,skewY:-10.4,x:120.6,y:328.4},0).wait(2).to({regY:9,scaleX:1,skewX:-1,skewY:-2.5,x:142.6,y:318.1},0).wait(1).to({regY:9.1,scaleX:1,scaleY:1.01,skewX:4,skewY:0.8,x:150,y:307},0).wait(2).to({skewY:0.8,y:309},0).wait(1).to({y:309.5},0).wait(17).to({skewX:2.8,skewY:-0.3,x:149.9,y:312.1},0).wait(2).to({skewX:1.8,skewY:-1.3,x:148.9,y:317.9},0).wait(1).to({skewX:0.5,skewY:-2.6,x:147.2,y:322.5},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.6,skewY:-3.1,x:140.6,y:324.6},0).wait(1).to({regX:41.7,regY:9,scaleX:1,scaleY:1,rotation:-4,skewX:0,skewY:0,x:133.7,y:326.7},0).wait(2).to({regX:41.6,rotation:-5.6,x:131.1,y:326.4},0).wait(2).to({rotation:-6.4,x:130.1,y:325.7},0).wait(2).to({rotation:-6.8,x:127.7,y:304.4},0).wait(1).to({y:299.9},0).wait(1).to({y:297.9},0).wait(2).to({y:298.9},0).wait(2).to({y:299.9},0).wait(23).to({rotation:-5.8,x:127.2,y:296.1},0).wait(2).to({x:127.7,y:294.6},0).wait(2).to({rotation:-3.9,x:127.9,y:298},0).wait(1).to({rotation:-2.6,x:130,y:305.9},0).wait(1).to({rotation:-1.6,x:131.7,y:312.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:133,y:317.2},0).wait(1).to({rotation:-0.1,x:134,y:320.8},0).wait(1).to({rotation:0,x:134.5,y:323},0).wait(1).to({regY:9.1,x:134.7,y:323.7},0).wait(2).to({y:322.7},0).wait(4));

	// FIZ_FRONT_part_011
	this.instance_6 = new lib.FIZ_23_part_038("single",0);
	this.instance_6.setTransform(133.5,418.8,1,1,0,0,0,28.4,3.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({skewX:-0.2,skewY:-0.8,x:132.4,y:420},0).wait(2).to({regY:4,rotation:-2.4,skewX:0,skewY:0,x:133.7,y:425.4},0).wait(1).to({regY:3.9,scaleX:1,scaleY:1,rotation:-6.1,x:134.3,y:425.7},0).wait(2).to({rotation:-7.2,x:135.9,y:429.8},0).wait(2).to({y:427.9},0).wait(1).to({y:428.4},0).wait(2).to({y:430.8},0).wait(1).to({y:429.8},0).wait(2).to({y:427.9},0).wait(1).to({y:428.4},0).wait(2).to({y:430.8},0).wait(1).to({y:429.8},0).wait(3).to({y:428.4},0).wait(1).to({regX:28.6,rotation:-7.1,x:136,y:428.8},0).wait(1).to({regX:28.4,rotation:-6.8,x:135.6,y:429.7},0).wait(1).to({regX:28.5,rotation:-6.3,x:135.3,y:431.2},0).wait(1).to({regX:28.4,rotation:-5.9,x:134.6,y:433.4},0).wait(2).to({scaleX:1,rotation:0,skewX:-6.5,skewY:-6.8,x:131,y:430.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-6.9,skewY:-7.7,x:129.9,y:428.9},0).wait(2).to({scaleX:1,scaleY:1,skewX:-6.1,skewY:-7.6,x:132},0).wait(2).to({regX:28.5,regY:4,scaleX:1,skewX:1.6,skewY:0.1,x:140.1,y:419.3},0).wait(1).to({regX:28.6,regY:3.9,scaleY:1.01,skewX:6.8,skewY:3.6,x:138.3,y:408.9},0).wait(2).to({y:409.9},0).wait(1).to({y:410.4},0).wait(17).to({regY:4,skewX:5.6,skewY:2.4,x:140.3,y:413.5},0).wait(2).to({scaleY:1.01,skewX:4.5,skewY:1.3,x:141.2,y:419.3},0).wait(1).to({skewX:3.3,skewY:0.1,x:141.8,y:424},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-1.1,skewY:-2.6,x:138.9,y:422.9},0).wait(1).to({regY:3.9,scaleX:1,scaleY:1,rotation:-5.6,skewX:0,skewY:0,x:136.2,y:421.7},0).wait(2).to({startPosition:0},0).wait(2).to({regX:28.5,rotation:-6.4,x:136.4,y:420.9},0).wait(2).to({rotation:-6.8,x:134.7,y:399.6},0).wait(1).to({y:395.1},0).wait(1).to({y:393.1},0).wait(2).to({y:394.1},0).wait(2).to({y:395.1},0).wait(23).to({x:136.7,y:394.1},0).wait(2).to({x:137.2,y:392.6},0).wait(2).to({regX:28.6,rotation:-6,x:137.4,y:396.2},0).wait(1).to({rotation:-4.1,x:136.3,y:403.5},0).wait(1).to({regX:28.5,regY:4,rotation:-2.6,x:135.2,y:409.5},0).wait(1).to({regY:3.9,scaleX:1,scaleY:1,rotation:-1.3,x:134.5,y:413.9},0).wait(1).to({regX:28.6,rotation:-0.3,x:134,y:417.2},0).wait(1).to({rotation:0,x:133.7,y:419.1},0).wait(1).to({regX:28.4,x:133.5,y:419.8},0).wait(2).to({y:418.8},0).wait(4));

	// FIZ_FRONT_H2_COMP
	this.instance_7 = new lib.FIZ_23_part_037("single",0);
	this.instance_7.setTransform(120.3,447.8,0.935,1,0,0,0,16.3,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({regX:16.4,skewX:-0.2,skewY:-0.8,x:119.6,y:449.3},0).wait(2).to({regX:16.3,rotation:-1.3,skewX:0,skewY:0,x:119.4,y:454.9},0).wait(1).to({regX:16.4,scaleX:0.93,rotation:-7.9,x:133.2,y:456.1},0).wait(2).to({regY:4.1,scaleY:1,rotation:-8.9,x:135.3,y:460.3},0).wait(2).to({y:458.5},0).wait(1).to({y:459},0).wait(2).to({y:460.3},0).wait(1).to({startPosition:0},0).wait(2).to({y:458.5},0).wait(1).to({y:459},0).wait(2).to({y:460.3},0).wait(1).to({startPosition:0},0).wait(3).to({y:459},0).wait(1).to({regY:4,rotation:-8.8,x:135.2,y:458.7},0).wait(1).to({regY:4.1,rotation:-8.6,x:134.8,y:458.2},0).wait(1).to({regX:16.3,regY:4,rotation:-8.1,x:134.1,y:457.3},0).wait(1).to({regX:16.4,rotation:-7.6,x:133.3,y:455.9},0).wait(2).to({scaleX:0.94,rotation:0,skewX:-8.3,skewY:-8.5,x:129.9,y:453.2},0).wait(1).to({scaleX:0.94,scaleY:1,skewX:-8.7,skewY:-9.4,x:129,y:451.6},0).wait(2).to({regX:16.2,scaleX:0.94,scaleY:1,skewX:-7.8,x:130.6},0).wait(2).to({skewX:0,skewY:-1.5,x:135.5,y:441.4},0).wait(1).to({skewX:0,skewY:-1.5,x:135.4,y:436.6},0).wait(2).to({y:437.6},0).wait(1).to({y:438.1},0).wait(17).to({regX:16.3,skewX:-1.2,skewY:-2.8,x:138.1,y:441.1},0).wait(2).to({regY:4.1,skewX:-2.2,skewY:-3.8,x:139.5,y:447.1},0).wait(1).to({scaleX:0.94,skewX:-3.5,skewY:-5.1,x:140.7,y:448.3},0).wait(1).to({regY:4,scaleX:0.94,scaleY:1,skewX:-5.3,skewY:-6.1,x:138.5,y:450.2},0).wait(1).to({regX:16.4,scaleX:0.93,scaleY:1,rotation:-7.3,skewX:0,skewY:0,x:136.3,y:452.1},0).wait(2).to({startPosition:0},0).wait(2).to({rotation:-8.2,x:137.1,y:451.3},0).wait(2).to({rotation:-5.3,x:134.2,y:441.1},0).wait(1).to({y:440.1},0).wait(1).to({y:438.1},0).wait(2).to({y:439.1},0).wait(2).to({y:440.1},0).wait(23).to({startPosition:0},0).wait(2).to({x:134.7,y:438.6},0).wait(2).to({rotation:-4.5,x:133.7,y:439.7},0).wait(1).to({regX:16.3,regY:4.2,rotation:-3.1,x:129.6,y:442.6},0).wait(1).to({regX:16.4,regY:4,rotation:-1.8,x:126.3,y:444.8},0).wait(1).to({regX:16.3,scaleX:0.94,scaleY:1,rotation:-0.8,x:123.6,y:446.5},0).wait(1).to({regX:16.4,rotation:-0.3,x:122,y:447.9},0).wait(1).to({rotation:0,x:120.7,y:448.6},0).wait(1).to({regX:16.3,x:120.3,y:448.8},0).wait(2).to({y:447.8},0).wait(4));

	// FIZ_FRONT_part_012
	this.instance_8 = new lib.FIZ_23_part_035("single",0);
	this.instance_8.setTransform(148.9,446.8,1,1,0,0,0,12.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({skewX:-0.2,skewY:-0.8,x:148,y:447.7},0).wait(2).to({rotation:-1.3,skewX:0,skewY:0,y:453},0).wait(1).to({rotation:-7.9,x:161.3,y:451},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.9,x:163.3,y:454.6},0).wait(2).to({y:452.8},0).wait(1).to({y:453.3},0).wait(2).to({y:454.6},0).wait(1).to({startPosition:0},0).wait(2).to({y:452.8},0).wait(1).to({y:453.3},0).wait(2).to({y:454.6},0).wait(1).to({startPosition:0},0).wait(3).to({y:453.3},0).wait(1).to({regX:13,rotation:-8.8,x:163.4,y:453.1},0).wait(1).to({regX:12.8,rotation:-8.6,x:162.9,y:452.7},0).wait(1).to({regX:12.9,rotation:-8.1,x:162.4,y:452},0).wait(1).to({rotation:-7.6,x:161.5,y:451},0).wait(2).to({scaleX:1,rotation:0,skewX:-8.3,skewY:-8.5,x:158,y:447.8},0).wait(1).to({scaleX:1,scaleY:1,skewX:-8.7,skewY:-9.4,x:157.1,y:445.7},0).wait(2).to({regX:13,scaleX:1,scaleY:1,skewX:-7.8,x:159,y:445.6},0).wait(2).to({regX:12.8,regY:0.1,scaleX:1,skewX:0,skewY:-1.5,x:164.3,y:439.5},0).wait(1).to({skewX:0,skewY:-1.5,x:164.2,y:434.7},0).wait(2).to({y:435.7},0).wait(1).to({y:436.2},0).wait(17).to({regX:12.9,skewX:-1.2,skewY:-2.8,x:166.9,y:438.5},0).wait(2).to({skewX:-2.2,skewY:-3.8,x:168.2,y:443.9},0).wait(1).to({regX:12.8,skewX:-3.5,skewY:-5.1,x:169.3,y:444.5},0).wait(1).to({regY:0,scaleX:1,scaleY:1,skewX:-5.3,skewY:-6.1,x:167,y:445.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.3,skewX:0,skewY:0,x:164.6,y:447.2},0).wait(2).to({startPosition:0},0).wait(2).to({rotation:-8.2,x:165.3,y:446},0).wait(2).to({rotation:-5.3,x:162.6,y:437.1},0).wait(1).to({y:436.1},0).wait(1).to({y:434.1},0).wait(2).to({y:435.1},0).wait(2).to({y:436.1},0).wait(23).to({startPosition:0},0).wait(2).to({x:163.1,y:434.6},0).wait(2).to({rotation:-4.5,x:162.2,y:436.2},0).wait(1).to({rotation:-3.1,x:158.1,y:439.7},0).wait(1).to({rotation:-1.8,x:154.9,y:442.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:152.3,y:444.9},0).wait(1).to({rotation:-0.3,x:150.4,y:446.6},0).wait(1).to({rotation:0,x:149.3,y:447.5},0).wait(1).to({x:148.9,y:447.8},0).wait(2).to({y:446.8},0).wait(4));

	// FIZ_FRONT_part_011
	this.instance_9 = new lib.FIZ_23_part_033("single",0);
	this.instance_9.setTransform(134.1,413.4,1,1,0,0,0,32,6.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({regY:6.5,skewX:-0.2,skewY:-0.8,x:133,y:414.5},0).wait(2).to({regY:6.6,rotation:-2.4,skewX:0,skewY:0,x:134.1,y:419.9},0).wait(1).to({regX:32.1,scaleX:1,scaleY:1,rotation:-6.1,x:134.5,y:420.2},0).wait(2).to({regX:32,regY:6.5,rotation:-7.2,x:135.8,y:424.3},0).wait(2).to({y:422.4},0).wait(1).to({y:422.9},0).wait(2).to({y:425.3},0).wait(1).to({y:424.3},0).wait(2).to({y:422.4},0).wait(1).to({y:422.9},0).wait(2).to({y:425.3},0).wait(1).to({y:424.3},0).wait(3).to({y:422.9},0).wait(1).to({rotation:-7.1,y:423.3},0).wait(1).to({regX:31.9,rotation:-6.8,x:135.5,y:424.2},0).wait(1).to({regX:32,rotation:-6.3,x:135.2,y:425.7},0).wait(1).to({rotation:-5.9,x:134.7,y:427.8},0).wait(2).to({regX:32.1,regY:6.6,scaleX:1,rotation:0,skewX:-6.5,skewY:-6.8,x:131.1,y:425.2},0).wait(1).to({regX:32,scaleX:1,scaleY:1,skewX:-6.9,skewY:-7.7,x:129.8,y:423.5},0).wait(2).to({regX:32.1,scaleX:1,scaleY:1,skewX:-6.1,skewY:-7.6,x:132.2},0).wait(2).to({regX:32,scaleX:1,skewX:1.6,skewY:0.1,x:140.8,y:413.8},0).wait(1).to({regY:6.5,scaleY:1.01,skewX:6.8,skewY:3.6,x:139.5,y:403.5},0).wait(2).to({y:404.5},0).wait(1).to({y:405},0).wait(17).to({skewX:5.6,skewY:2.4,x:141.5,y:407.8},0).wait(2).to({regX:32.1,scaleY:1.01,skewX:4.5,skewY:1.3,x:142.4,y:413.7},0).wait(1).to({skewX:3.3,skewY:0.1,x:142.8,y:418.3},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:-1.1,skewY:-2.6,x:139.4,y:417.3},0).wait(1).to({regY:6.6,scaleX:1,scaleY:1,rotation:-5.6,skewX:0,skewY:0,x:136.1,y:416.2},0).wait(2).to({startPosition:0},0).wait(2).to({rotation:-6.4,x:136.4,y:415.4},0).wait(2).to({regY:6.8,rotation:-6.8,x:134.6,y:394.4},0).wait(1).to({y:389.9},0).wait(1).to({y:387.9},0).wait(2).to({y:388.9},0).wait(2).to({y:389.9},0).wait(23).to({regY:6.6,rotation:-5.8,x:132.5,y:385.8},0).wait(2).to({x:133,y:384.3},0).wait(2).to({regX:32,regY:6.7,rotation:-3.9,x:130.2,y:388},0).wait(1).to({rotation:-2.6,x:131.4,y:396.1},0).wait(1).to({rotation:-1.6,x:132.3,y:402.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:133.1,y:407.8},0).wait(1).to({rotation:-0.1,x:133.6,y:411.5},0).wait(1).to({rotation:0,x:134,y:413.7},0).wait(1).to({regY:6.6,x:134.1,y:414.4},0).wait(2).to({y:413.4},0).wait(4));

	// FIZ_FRONT_part_006
	this.instance_10 = new lib.FIZ_23_part_028copy("single",1);
	this.instance_10.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.instance_11 = new lib.FIZ_23_part_028("single",1);
	this.instance_11.setTransform(159.4,317.4,1.012,1.106,0,-4.9,0,12.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2}}]}).to({state:[]},3).to({state:[{t:this.instance_10,p:{regX:12.6,regY:7.5,scaleX:1.013,scaleY:1.084,skewX:5.9,skewY:6.5,x:177.4,y:309.4}}]},34).to({state:[{t:this.instance_10,p:{regX:12.5,regY:7.5,scaleX:1.01,scaleY:1.087,skewX:3.2,skewY:2.2,x:176.6,y:309.9}}]},1).to({state:[{t:this.instance_10,p:{regX:12.6,regY:7.5,scaleX:1.01,scaleY:1.087,skewX:1.3,skewY:0.2,x:176.4,y:312.5}}]},17).to({state:[]},2).to({state:[{t:this.instance_11}]},45).to({state:[{t:this.instance_10,p:{regX:12.5,regY:7.7,scaleX:1.012,scaleY:1.073,skewX:-1.2,skewY:0.8,x:160.4,y:321.3}}]},1).to({state:[{t:this.instance_10,p:{regX:12.4,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.9,skewY:1,x:161,y:323.5}}]},1).to({state:[{t:this.instance_10,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:324.2}}]},1).to({state:[{t:this.instance_10,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2}}]},2).wait(4));

	// FIZ_FRONT_part_010
	this.instance_12 = new lib.FIZ_23_part_032("single",0);
	this.instance_12.setTransform(129.6,423.8,1,1,0,0,0,23.4,111.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3).to({skewX:-0.2,skewY:-0.8,x:128.6,y:425.1},0).wait(2).to({rotation:-2.4,skewX:0,skewY:0,x:132.3,y:430},0).wait(1).to({regY:111.3,scaleX:1,scaleY:1,rotation:-6.1,x:134.6,y:432.4},0).wait(2).to({regX:23.3,regY:111.2,rotation:-7.2,x:136.2,y:436.5},0).wait(2).to({y:435.1},0).wait(1).to({y:435.6},0).wait(2).to({y:437.5},0).wait(1).to({y:436.5},0).wait(2).to({y:435.1},0).wait(1).to({y:435.6},0).wait(2).to({y:437.5},0).wait(1).to({y:436.5},0).wait(3).to({y:435.6},0).wait(1).to({rotation:-7.1,x:136.1,y:435.4},0).wait(1).to({rotation:-7.4,x:135.6,y:435},0).wait(1).to({rotation:-7.9,x:135,y:434.3},0).wait(1).to({regX:23.4,rotation:-8.7,x:134.1,y:433.2},0).wait(2).to({regY:111.3,scaleX:1,scaleY:1,rotation:0,skewX:-9.3,skewY:-9.6,x:130.4,y:430.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:-9.8,skewY:-10.5,x:129.3,y:428.9},0).wait(2).to({regX:23.3,scaleX:1,scaleY:1,skewX:-8.9,skewY:-10.4,x:131.4},0).wait(2).to({regY:111.4,scaleX:1,skewX:-1,skewY:-2.5,x:139.4,y:419.2},0).wait(1).to({regY:111.3,scaleX:1,scaleY:1.01,skewX:4,skewY:0.8,x:137.6,y:408.7},0).wait(2).to({skewY:0.8,y:410.7},0).wait(1).to({y:411.2},0).wait(17).to({skewX:2.8,skewY:-0.3,x:139.6,y:414.2},0).wait(2).to({skewX:1.8,skewY:-1.3,x:140.5,y:420.1},0).wait(1).to({regX:23.4,regY:111.4,skewX:0.5,skewY:-2.6,x:141.2,y:424.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-1.6,skewY:-3.1,x:138.6,y:426.5},0).wait(1).to({regY:111.3,scaleX:1,scaleY:1,rotation:-4,skewX:0,skewY:0,x:136,y:428.1},0).wait(2).to({regY:111.2,rotation:-5.6,x:136.1,y:427.5},0).wait(2).to({regY:111.3,rotation:-6.4,x:136.6,y:426.7},0).wait(2).to({regY:111.1,rotation:-6.8,x:134.9,y:405.4},0).wait(1).to({y:400.9},0).wait(1).to({y:398.9},0).wait(2).to({y:399.9},0).wait(2).to({y:400.9},0).wait(23).to({regX:23.3,regY:111.2,rotation:-5.8,x:132.5,y:397.2},0).wait(2).to({x:133,y:395.7},0).wait(2).to({rotation:-3.9,x:129.9,y:399.3},0).wait(1).to({regX:23.2,regY:111.3,rotation:-2.6,x:129.7,y:407.2},0).wait(1).to({regX:23.3,rotation:-1.6,y:413.5},0).wait(1).to({regY:111.2,scaleX:1,scaleY:1,rotation:-0.8,x:129.6,y:418.4},0).wait(1).to({rotation:-0.1,y:421.9},0).wait(1).to({regX:23.4,regY:111.3,rotation:0,x:129.7,y:423.5},0).wait(1).to({regY:111.2,x:129.6,y:424.8},0).wait(2).to({y:423.8},0).wait(4));

	// FIZ_FRONT_part_007
	this.instance_13 = new lib.FIZ_23_part_029("single",0);
	this.instance_13.setTransform(153.7,415.3,1,1,0,0,0,-1.9,12.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(3).to({skewX:-0.2,skewY:-0.8,x:152.6,y:416.2},0).wait(2).to({regY:12.1,rotation:-2.4,skewX:0,skewY:0,x:153.7,y:420.9},0).wait(1).to({regY:12.2,scaleX:1,scaleY:1,rotation:-6.1,x:154.1,y:419.9},0).wait(2).to({rotation:-7.2,x:155.5,y:423.7},0).wait(2).to({y:421.8},0).wait(1).to({y:422.3},0).wait(2).to({y:424.7},0).wait(1).to({y:423.7},0).wait(2).to({y:421.8},0).wait(1).to({y:422.3},0).wait(2).to({y:424.7},0).wait(1).to({y:423.7},0).wait(3).to({y:422.3},0).wait(1).to({rotation:-7.1,x:155.4,y:422.2},0).wait(1).to({rotation:-7.4,x:154.9,y:421.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.9,x:154,y:420.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-8.7,x:153,y:419.9},0).wait(2).to({regY:12.3,scaleX:1,scaleY:1,rotation:0,skewX:-9.3,skewY:-9.6,x:149.2,y:416.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:-9.8,skewY:-10.5,x:148,y:415},0).wait(2).to({scaleX:1,scaleY:1,skewX:-8.9,skewY:-10.4,x:150.3},0).wait(2).to({scaleX:1,skewX:-1,skewY:-2.5,x:160,y:407.9},0).wait(1).to({regX:-1.7,scaleX:1,scaleY:1.01,skewX:4,skewY:0.8,x:159.3,y:398.7},0).wait(2).to({skewY:0.8,y:400.7},0).wait(1).to({y:401.2},0).wait(17).to({skewX:2.8,skewY:-0.3,x:161.1,y:403.7},0).wait(2).to({regY:12.2,skewX:1.8,skewY:-1.3,x:161.8,y:409.1},0).wait(1).to({skewX:0.5,skewY:-2.6,x:162.2,y:413.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:-2.3,skewY:-4.1,x:159,y:414.7},0).wait(1).to({regX:-1.8,scaleX:1,scaleY:1,rotation:-5.6,skewX:0,skewY:0,x:155.8,y:416.1},0).wait(2).to({startPosition:0},0).wait(2).to({rotation:-6.4,x:156.1,y:415},0).wait(2).to({rotation:-6.8,x:154.3,y:393.6},0).wait(1).to({y:389.1},0).wait(1).to({y:387.1},0).wait(2).to({y:388.1},0).wait(2).to({y:389.1},0).wait(23).to({rotation:-5.8,x:152.1,y:385.6},0).wait(2).to({x:152.6,y:384.1},0).wait(2).to({rotation:-3.9,x:149.9,y:388.3},0).wait(1).to({rotation:-2.6,x:151,y:396.9},0).wait(1).to({rotation:-1.6,x:152,y:403.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:152.7,y:409.3},0).wait(1).to({regY:12.3,rotation:-0.1,x:153.2,y:413.2},0).wait(1).to({rotation:0,x:153.4,y:414.8},0).wait(1).to({regY:12.2,x:153.7,y:416.3},0).wait(2).to({y:415.3},0).wait(4));

	// FIZ_FRONT_part_006
	this.instance_14 = new lib.FIZ_23_part_028("single",1);
	this.instance_14.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC99").s().p("AiBB/QhEgkgJgkQgIglATgqQASgpAkgNIADgBQANgLAngHIAAAAQArgJALgFIABAAIAfgXQAUgOAKgDQAQgEAIACQAKADAGATQAFAVgMAPIgBABQg3AmgZAJQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIADAGQACADAEABQAkAJAVABIAGABIADAAQAcACAtgJQAogJASAEQANACAGAOQAEANgIAMQgJAMgNAFQgPgYhEACIgBAAQgZADgTACIgBgDQgBgCgDgCIgBADQgBACgvAoQgxAogZAKIADADQADADAEgBIAPgDQAJgCAJgFIABAAIADgCIAcAAQAiAAASgEQAPgDAPACQAWACAGAQQACAJgBAIIAAADIgIANQgKAJhMAMQgTADgUAAQg5AAgzgcgAB+BUIgCAAQgKgUgdgEQgTgCgTAFQgPADgfgBIgKAAIAFgDQAKgCAXgYIABAAIAKgLQAYgCAmgHQA7gBAFAVQABAagOANQgNAJgKAAIgEAAg");
	this.shape_11.setTransform(227.5,305.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AiJCRQhOgrgJgrQgKgrAWgxQAUgvAqgPQAQgNAsgHQAngIAKgGIAAAAQAKgFAWgQQAVgRAMgDQAVgFALADQAVADAJAiQAIAggTAWIAAAAQgNAOgnASIAjAFQAaABArgJQAtgKAUAFQAWAGAKAXQAKAXgQAUQgMASgWAJQgBAhgUAQIAAAAQgSANgPAAIAAANIAAABIAAACQgBAIgMAQIAAAAQgLAOhVANQgVADgTAAQg+AAg4gdgAiLhPIgCABQglANgRApQgUAqAJAlQAIAkBEAkQBGAmBNgNQBMgMAKgJIAJgNIgBgDQABgIgCgJQgFgQgWgCQgQgCgPADQgRAEgjAAIgbAAIgEACIgBAAQgIAFgJACIgPADQgEABgDgDIgDgDQAZgKAxgoQAvgoAAgCIABgDQADACACACIAAADQATgCAZgDIACAAQBEgCAOAYQAOgFAIgMQAJgMgFgNQgFgOgNgCQgSgEgoAJQgtAJgcgCIgEAAIgGgBQgUgBglgJQgDgBgDgDIgCgGQAAAAAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQAZgJA3gmIABgBQANgPgGgVQgFgTgKgDQgIgCgRAEQgKADgTAOIggAXIAAAAQgMAFgqAJIgBAAQgnAHgNALgABUA8QAdAEALAUIACAAQALACAPgLQAOgNAAgaQgFgVg8ABQgmAHgYACIgKALIAAAAQgYAYgJACIgFADIAJAAQAgABAPgDQANgEANAAIALABg");
	this.shape_12.setTransform(227.5,305.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72EBEB").s().p("AAABVIgEgGIAAgBQgpgpgrguIADgKIARgYQAbgmArgOIAQgFIBFBRIACACQgzAhgQBFIAAABIgCAKIgCAFIgSgQg");
	this.shape_13.setTransform(164.9,321.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FF7A").s().p("AiyClIAAAAIgDgCIgEgDIAAgBIAFgUQAQhEA2ggIAWARIgMAKQgtAngSBAQgCADAAAFQgIgGgFgGgADfAwIAAAAQgpgTghhFIgBgBQgEgMAAgEQgBgIABgMQAJg6AtgdIgBAAIALgHIARgEIACgBQAcAIAfAbQAtAoAIA5IAABFIgGAIIgQAOIgDACQgRAOgHAAQgJAAgMAGIgugVgAlGARIgBAAIgFgGIgGgHIAFgKIAAgBQAdhEBBgSIACgBIAXAaIgIACQhCAVghBEIgFgGg");
	this.shape_14.setTransform(187,316.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8089DD").s().p("Ag/C1IADgJIAAgBQAPg0AigiIAXgXIACAGQACAPgIAKIA3gkQBTg5BEg+IABACQAAAFAGAQIAAAAQAlBOAtAVIAAAAIAhAPQjLB8h4AAQgrAAghgSgAk/hPQgCgCgDAAIgBAEIgCACQgEgBgBgDQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQABgFgBgDQgDgVAChHIABgPIACAPQBDgWAcAOIAUANIABAAIACACIAzA9QhFAWgdBJIgDAGQgbgfgcgig");
	this.shape_15.setTransform(178.3,317.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiWCzIgCAAQgEgBgCgDIgCgEQgSgMgTgSIAAAAIgGgGQgsgtgsgyIAAAAIgHgIIgHgIIgKgMIgFgFIAAgBIgEgEIg9hFQgCgDAAgEQAAgDABgDQACADADABIADgCIAAgEQADAAACACQAcAiAcAfIACgGQAehJBEgWIgzg9IgCgCIAAAAIgUgNQgcgOhDAWIgDgPIAAAPIgEgBQgCgCgBgEQgCgEACgDQACgDADgBQBMgZAfASIAVANIAFAFQABABAAAAQABABAAAAQAAABABAAQAAABAAAAICnDBIAEACIACABIAIAFIABABIABAAIABABIABABIAyAlIAbgTQBWg6BDhCQAMhBAxggIANgJIACgBIATgFIAEAAIAFABIgBAAQAeAIAjAeQA0AtAIBBIAAABIACAzQAEAAABAFQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgBADIgGAQIgCACIgBABIAAAAQgKALgTAQQgXATgLAAQgHgBgLAGIAAAAQjZCHh/AAQhFAAgrgmgAhBBUQghAigPA0IAAABIgEAJQB4BAEYiqIghgPIgBAAQgtgVgkhOIAAAAQgHgQAAgFIAAgCIAAAAQhEA/hTA4Ig2AkQAIgKgCgPIgCgGgAiTCFIgEAUIgBABIAEADIADACIAAAAQAGAGAIAGQAAgFABgDQAThAAtgnIAMgKIgXgRQg2AggQBEgAi3g1QgtAOgbAmIgRAWIgDAKQArAwApApIAAABIAFAGIATAQIACgFIACgKIAAgBQAQhFAzgjIgCgCIhFhPIgQAFgAEuA/QAMgGAKAAQAHAAARgOIACgCIAQgOIAHgIIgBhFQgHg5gtgoQgggbgcgIIgBABIgSAEIgKAHIAAAAQgsAdgJA6QgCAMACAIQgBAEAFAMIAAABQAiBFApATIgBAAIAuAVgAjOhjQhBASgdBEIAAABIAAAAIgFAMIAHAFIAFAGIAAAAIAFAGQAhhEBDgVIAHgCIgWgaIgDABg");
	this.shape_16.setTransform(183.6,317.2);

	this.instance_15 = new lib.FIZ_23_part_010("single",68);
	this.instance_15.setTransform(157.1,317,0.999,0.999,0,2.6,-177.3,76.6,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2,startPosition:1,scaleX:1.012}}]}).to({state:[{t:this.instance_14,p:{regX:12.4,regY:7.7,scaleY:1.045,skewX:0.5,skewY:0.2,x:159.3,y:324.1,startPosition:1,scaleX:1.012}}]},3).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.7,scaleY:1.073,skewX:-3.4,skewY:-1.3,x:159.3,y:328.2,startPosition:2,scaleX:1.012}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.7,scaleY:1.073,skewX:-7.2,skewY:-5,x:154.9,y:329.1,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:332.8,startPosition:22,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:331.4,startPosition:22,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:331.9,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:333.8,startPosition:22,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:332.8,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:331.4,startPosition:22,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:331.9,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:333.8,startPosition:22,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:332.8,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.073,skewX:-8.2,skewY:-6,x:154.7,y:331.9,startPosition:22,scaleX:1.011}}]},3).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-7.9,skewY:-5.7,x:154.4,y:331.6,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-7.4,skewY:-5.2,x:153.5,y:331.2,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-6.4,skewY:-4.2,x:152,y:330.3,startPosition:22,scaleX:1.01}}]},1).to({state:[{t:this.instance_14,p:{regX:12.6,regY:7.6,scaleY:1.072,skewX:-5.2,skewY:-3.1,x:149.9,y:329.1,startPosition:22,scaleX:1.01}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.072,skewX:-5.9,skewY:-4,x:145,y:326.1,startPosition:22,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.071,skewX:-6.3,skewY:-4.9,x:143.1,y:324.2,startPosition:22,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.7,scaleY:1.117,skewX:-2.9,skewY:-3.1,x:146.9,y:324.4,startPosition:22,scaleX:1.012}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.069,skewX:2.4,skewY:2.9,x:169,y:317.4,startPosition:2,scaleX:1.012}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.049,skewX:9.5,skewY:6.5,x:176.6,y:307.9,startPosition:1,scaleX:1.028}}]},1).to({state:[{t:this.instance_14,p:{regX:12.6,regY:7.5,scaleY:1.084,skewX:5.9,skewY:6.5,x:177.4,y:309.4,startPosition:1,scaleX:1.013}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.087,skewX:3.2,skewY:2.2,x:176.6,y:309.9,startPosition:1,scaleX:1.01}}]},1).to({state:[{t:this.instance_14,p:{regX:12.6,regY:7.5,scaleY:1.087,skewX:1.3,skewY:0.2,x:176.4,y:312.5,startPosition:1,scaleX:1.01}}]},17).to({state:[{t:this.instance_14,p:{regX:12.6,regY:7.5,scaleY:1.086,skewX:16.8,skewY:15.8,x:175.6,y:317.7,startPosition:2,scaleX:1.009}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.13,skewX:4,skewY:-1,x:173.9,y:325,startPosition:3,scaleX:1.014}}]},1).to({state:[{t:this.instance_14,p:{regX:12.7,regY:7.5,scaleY:0.971,skewX:7.5,skewY:6.7,x:167.2,y:323,startPosition:3,scaleX:1.015}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.092,skewX:7.9,skewY:-2.9,x:162.4,y:325.3,startPosition:4,scaleX:1.171}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.091,skewX:-8.4,skewY:2.3,x:159.5,y:324.2,startPosition:5,scaleX:1.133}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.072,skewX:-3.9,skewY:-1.7,x:156.5,y:323.2,startPosition:23,scaleX:1.011}}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-7.8,skewY:-5.7,x:154,y:297.4,startPosition:24,scaleX:1.011}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.7,scaleY:1.072,skewX:-8.1,skewY:-5.9,x:154,y:295.4,startPosition:24,scaleX:1.01}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.7,scaleY:1.072,skewX:-8.8,skewY:-6.7,x:154,y:296.5,startPosition:24,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-7.8,skewY:-5.7,x:154,y:297.4,startPosition:24,scaleX:1.011}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-8.1,skewY:-6,x:154,y:294.3,startPosition:24,scaleX:1.01}}]},23).to({state:[{t:this.instance_14,p:{regX:12.6,regY:7.7,scaleY:1.073,skewX:-8.9,skewY:-7.1,x:154.6,y:292,startPosition:24,scaleX:1.009}}]},2).to({state:[{t:this.instance_14,p:{regX:12.4,regY:7.6,scaleY:1.072,skewX:-10.7,skewY:-8.8,x:154.1,y:296.8,startPosition:24,scaleX:0.977}}]},2).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.072,skewX:-3.7,skewY:-1.4,x:156.4,y:305.3,startPosition:26,scaleX:1.011}}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.5,scaleY:1.106,skewX:-4.9,skewY:0,x:159.4,y:317.4,startPosition:1,scaleX:1.012}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.7,scaleY:1.073,skewX:-1.2,skewY:0.8,x:160.4,y:321.3,startPosition:1,scaleX:1.012}}]},1).to({state:[{t:this.instance_14,p:{regX:12.4,regY:7.6,scaleY:1.074,skewX:-0.9,skewY:1,x:161,y:323.5,startPosition:1,scaleX:1.012}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:324.2,startPosition:1,scaleX:1.012}}]},1).to({state:[{t:this.instance_14,p:{regX:12.5,regY:7.6,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2,startPosition:1,scaleX:1.012}}]},2).wait(4));

	// FIZ_FRONT_part_005
	this.instance_16 = new lib.FIZ_FRONT_H2_COMPFoolingFred("synched",0,false);
	this.instance_16.setTransform(136.5,306,1,1,0,0,0,110.9,306.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(3).to({rotation:-1.3,x:134.9,y:308,startPosition:3},0).wait(2).to({rotation:-4.7,x:134.5,y:316.5,startPosition:5},0).wait(1).to({regX:111,regY:306,scaleX:1,scaleY:1,rotation:-12.2,x:130.9,y:321.9,startPosition:6},0).wait(2).to({regY:305.9,rotation:-17.5,x:131,y:327.9,startPosition:8},0).wait(2).to({y:329.8,startPosition:10},0).wait(1).to({y:329.3,startPosition:11},0).wait(2).to({y:326.9,startPosition:13},0).wait(1).to({y:327.9,startPosition:14},0).wait(2).to({y:329.8,startPosition:16},0).wait(1).to({y:329.3,startPosition:17},0).wait(2).to({y:326.9,startPosition:19},0).wait(1).to({y:327.9,startPosition:20},0).wait(3).to({y:329.3,startPosition:23},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.6,x:130.7,y:329,startPosition:24},0).wait(1).to({regX:110.9,regY:306,rotation:-18.1,x:129.8,y:328.3,startPosition:25},0).wait(1).to({regX:111,regY:305.9,scaleX:1,scaleY:1,rotation:-18.9,x:128.4,y:327.1,startPosition:26},0).wait(1).to({scaleX:1,scaleY:1,rotation:-20.1,x:126.5,y:325.5,startPosition:27},0).wait(2).to({rotation:-21.1,x:121.1,y:322.5,startPosition:29},0).wait(1).to({regX:110.9,rotation:-22.4,x:119.2,y:321.4,startPosition:30},0).wait(2).to({rotation:-23.5,x:123.5,y:322.9,startPosition:32},0).wait(2).to({regY:305.8,scaleX:1,scaleY:1,rotation:-9.9,x:145.3,y:311.6,startPosition:34},0).wait(1).to({regX:111,regY:306.1,rotation:5.9,x:150.8,y:293.6,startPosition:35},0).wait(2).to({y:296.6,startPosition:37},0).wait(1).to({y:297.6,startPosition:38},0).wait(17).to({regY:305.9,rotation:6.2,x:150.3,y:299.6,startPosition:55},0).wait(2).to({rotation:5.7,x:149.8,y:305.4,startPosition:57},0).wait(1).to({regX:110.9,rotation:2.4,x:147.2,y:309.8,startPosition:58},0).wait(1).to({rotation:-1.8,x:141.1,y:313.3,startPosition:59},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.3,x:134.8,y:316.6,startPosition:60},0).wait(2).to({regX:111,rotation:-8.7,x:132.1,y:316.2,startPosition:62},0).wait(2).to({rotation:-9.5,x:130.9,y:315.4,startPosition:64},0).wait(2).to({scaleX:1,scaleY:1,rotation:-7.6,x:127.5,y:290.2,startPosition:66},0).wait(1).to({regX:110.9,scaleX:1,scaleY:1,rotation:-6.3,x:127.4,y:283.2,startPosition:67},0).wait(1).to({regX:111,rotation:-5.5,x:127.5,y:279.6,startPosition:68},0).wait(2).to({regX:110.9,rotation:-6.3,x:127.9,y:281.7,startPosition:70},0).wait(2).to({x:127.4,y:283.2,startPosition:72},0).wait(23).to({regX:111,regY:305.8,scaleX:1,scaleY:1,rotation:-5,x:127.3,y:277.8,startPosition:95},0).wait(2).to({regX:110.9,regY:305.9,rotation:-4.2,x:128.3,y:275.8,startPosition:97},0).wait(2).to({regX:111,rotation:-2.4,x:129.1,y:279.2,startPosition:99},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.6,x:131.4,y:288.2,startPosition:100},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.8,x:133.3,y:295.6,startPosition:101},0).wait(1).to({regX:110.9,rotation:-0.3,x:134.7,y:301.2,startPosition:102},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.1,x:135.7,y:305.3,startPosition:103},0).wait(1).to({regX:111,rotation:0,x:136.4,y:307.7,startPosition:104},0).wait(1).to({regX:110.9,regY:306.1,x:136.5,y:308.5,startPosition:105},0).wait(2).to({y:306,startPosition:107},0).wait(4));

	// FIZ_23_part_040
	this.instance_17 = new lib.FIZ_23_part_010("single",1);
	this.instance_17.setTransform(112.3,328.8,1,1,0,0,0,76.7,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(3).to({regY:10.1,scaleY:0.98,skewX:3,skewY:-0.8,x:110.6,y:330.5},0).wait(2).to({regY:10,scaleY:1,rotation:-2.4,skewX:0,skewY:0,x:110.7,y:335.9,startPosition:2},0).wait(1).to({regX:76.6,scaleX:1,scaleY:1,rotation:0,skewX:-6.1,skewY:-9,x:106.9,y:339.9,startPosition:3},0).wait(2).to({regX:76.7,scaleX:1,skewX:-9.2,skewY:-10.2,x:108.1,y:346.6,startPosition:24},0).wait(2).to({regX:76.6,rotation:-9.2,skewX:0,skewY:0,x:108,y:345.3,startPosition:4},0).wait(1).to({y:345.8},0).wait(2).to({y:347.7},0).wait(1).to({y:346.7},0).wait(2).to({y:345.3},0).wait(1).to({y:345.8},0).wait(2).to({y:347.7},0).wait(1).to({y:346.7},0).wait(3).to({y:345.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-10.1,x:107.8,y:345.7},0).wait(1).to({regX:76.7,scaleX:1,scaleY:1,rotation:0,skewX:-11.6,skewY:-13.9,x:107.1,y:345.5},0).wait(1).to({scaleX:1.07,scaleY:1,skewX:-12.9,skewY:-17.5,x:105.6,y:344.8,startPosition:24},0).wait(1).to({scaleX:1,scaleY:1.01,skewX:2.2,skewY:-6.9,x:103.7,y:343.3,startPosition:5},0).wait(2).to({regX:76.6,regY:10.1,scaleX:1,scaleY:1,skewX:-21.7,skewY:-16.1,x:99,y:342,startPosition:31},0).wait(1).to({regX:76.7,regY:10,scaleX:1,scaleY:1,skewX:-11.8,skewY:-12.5,x:97.2,y:340.8},0).wait(2).to({regX:76.5,regY:10.1,scaleX:1,scaleY:1,skewX:-17.5,skewY:-22.5,x:100.6},0).wait(2).to({regY:10,scaleX:1.2,scaleY:0.99,skewX:-2.7,skewY:-4.5,x:120.9,y:327.5,startPosition:32},0).wait(1).to({regX:76.6,regY:10.1,scaleX:1.01,scaleY:1.01,skewX:2,skewY:-1,x:127.8,y:315.1,startPosition:33},0).wait(2).to({regX:76.7,regY:10,scaleX:1,scaleY:1.01,skewX:0.9,skewY:0.7,x:127.9,y:317,startPosition:28},0).wait(1).to({regX:76.6,regY:10.1,scaleX:1.01,scaleY:1.01,skewX:2,skewY:-1,x:127.8,y:317.6},0).wait(17).to({regX:76.5,scaleY:1.01,skewX:0.8,skewY:-2.3,x:127.7,y:320.8,startPosition:34},0).wait(2).to({skewX:-0.1,skewY:-3.3,x:127.6,y:327,startPosition:35},0).wait(1).to({scaleY:1.01,skewX:2.2,skewY:-4.6,x:120.3,y:332.1,startPosition:36},0).wait(1).to({regY:10.2,scaleX:1.1,scaleY:1,skewX:-9.5,skewY:-5.3,x:113.9,y:334.6},0).wait(1).to({regY:10.1,scaleX:0.94,scaleY:1,skewX:-3.3,skewY:-4.2,x:109.6,y:337,startPosition:37},0).wait(2).to({regY:10,scaleX:1,scaleY:1,rotation:-3.8,skewX:0,skewY:0,x:112.2,y:336.9,startPosition:38},0).wait(2).to({regX:76.7,regY:9.8,scaleX:1.07,scaleY:0.92,rotation:0,skewX:-9.7,skewY:-7.7,x:109.6,y:336.3,startPosition:29},0).wait(2).to({regX:76.5,regY:10,scaleX:1,scaleY:1,rotation:-8.8,skewX:0,skewY:0,x:107.2,y:315.6,startPosition:30},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.1,y:311.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.5,x:107.1,y:309},0).wait(2).to({y:310.1},0).wait(2).to({scaleY:1,rotation:0,skewX:-5.3,skewY:-6.4,x:107.2,y:311.1},0).wait(23).to({regY:9.8,scaleX:1,skewX:-4.1,skewY:-3,x:105.7,y:308},0).wait(2).to({rotation:-2.3,skewX:0,skewY:0,x:106.8,y:305.4},0).wait(2).to({regX:76.8,scaleX:0.97,scaleY:1.1,rotation:0,skewX:6.4,skewY:5.4,x:107.5,y:310.5},0).wait(1).to({regX:76.4,regY:10,scaleX:1,scaleY:1,rotation:-4.1,skewX:0,skewY:0,x:108.3,y:314.8,startPosition:39},0).wait(1).to({regX:76.6,rotation:-2.4,x:109.9,y:320.1,startPosition:68},0).wait(1).to({regY:10.1,scaleX:1,scaleY:1.03,rotation:0,skewX:2.6,skewY:-1.3,x:111,y:323.5,startPosition:1},0).wait(1).to({regX:76.5,regY:10,scaleY:1,rotation:-0.3,skewX:0,skewY:0,x:111.6,y:327.4},0).wait(1).to({regX:76.7,rotation:0,x:112.2,y:329.2},0).wait(1).to({x:112.3,y:329.8},0).wait(2).to({y:328.8},0).wait(4));

	// FIZ_23_part_039
	this.instance_18 = new lib.FIZ_23_part_009("single",0);
	this.instance_18.setTransform(135,319.6,0.977,1,0,0,0,41.6,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(3).to({skewX:-0.2,skewY:-0.8,x:133.2,y:320.8},0).wait(2).to({regY:43.4,rotation:-2.4,skewX:0,skewY:0,x:133,y:325.6},0).wait(1).to({regY:43.5,scaleX:0.98,scaleY:1,rotation:-6.1,x:128.5,y:328.3},0).wait(2).to({regY:43.4,rotation:-7.2,x:128.3,y:332.5},0).wait(2).to({y:331.1},0).wait(1).to({y:331.6},0).wait(2).to({y:333.5},0).wait(1).to({y:332.5},0).wait(2).to({y:331.1},0).wait(1).to({y:331.6},0).wait(2).to({y:333.5},0).wait(1).to({y:332.5},0).wait(3).to({y:331.6},0).wait(1).to({rotation:-7.1,x:128,y:331.4},0).wait(1).to({regY:43.5,rotation:-7.4,x:127.1,y:331.1},0).wait(1).to({regY:43.4,rotation:-7.9,x:125.5,y:330.3},0).wait(1).to({regY:43.3,rotation:-8.7,x:123.4,y:329.4},0).wait(2).to({scaleY:1,rotation:0,skewX:-9.3,skewY:-9.6,x:118.6,y:326.9},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:-9.8,skewY:-10.5,x:116.7,y:325.4},0).wait(2).to({scaleX:0.98,scaleY:1,skewX:-8.9,skewY:-10.4,x:120.5},0).wait(2).to({regY:43.2,scaleX:0.98,skewX:-1,skewY:-2.5,x:142.8,y:315},0).wait(1).to({scaleX:0.98,scaleY:1.01,skewX:4,skewY:0.8,x:150.7,y:303.7},0).wait(2).to({skewY:0.8,y:305.7},0).wait(1).to({y:306.2},0).wait(17).to({skewX:2.8,skewY:-0.3,x:150.4,y:308.9},0).wait(2).to({skewX:1.8,skewY:-1.3,x:149.4,y:314.6},0).wait(1).to({skewX:0.5,skewY:-2.6,x:147.7,y:319.2},0).wait(1).to({regY:43.4,scaleX:0.98,scaleY:1,skewX:-1.6,skewY:-3.1,x:140.7,y:321.5},0).wait(1).to({regX:41.7,scaleX:0.98,scaleY:1,rotation:-4,skewX:0,skewY:0,x:133.9,y:323.7},0).wait(2).to({regX:41.6,rotation:-5.6,x:131.1,y:323.3},0).wait(2).to({rotation:-6.4,x:130,y:322.6},0).wait(2).to({rotation:-6.8,x:127.6,y:301.4},0).wait(1).to({y:296.9},0).wait(1).to({y:294.9},0).wait(2).to({y:295.9},0).wait(2).to({y:296.9},0).wait(23).to({scaleX:0.98,rotation:-5.8,x:127.2,y:293},0).wait(2).to({x:127.7,y:291.5},0).wait(2).to({regX:41.5,rotation:-3.9,x:127.8,y:295},0).wait(1).to({scaleX:0.98,rotation:-2.6,x:130.1,y:302.8},0).wait(1).to({rotation:-1.6,x:131.8,y:309.2},0).wait(1).to({regX:41.6,scaleY:1,rotation:-0.8,x:133.2,y:314.2},0).wait(1).to({scaleX:0.98,rotation:-0.1,x:134.3,y:317.8},0).wait(1).to({regX:41.5,rotation:0,x:134.8,y:319.9},0).wait(1).to({regX:41.6,regY:43.5,x:135,y:320.6},0).wait(2).to({y:319.6},0).wait(4));

	// FIZ_23_part_037
	this.instance_19 = new lib.FIZ_23_part_007("single",0);
	this.instance_19.setTransform(162.1,96.5,1,1,0,0,0,34.5,82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(3).to({regY:82,rotation:-1.3,x:154.9,y:97.9},0).wait(2).to({rotation:-3.6,x:147.4,y:105.9},0).wait(1).to({regX:34.4,scaleX:1,scaleY:1,rotation:-7.9,x:115.2,y:112.5},0).wait(2).to({regY:82.1,rotation:-13.2,x:95.4,y:120.9},0).wait(2).to({y:122.8},0).wait(1).to({y:122.3},0).wait(2).to({y:119.9},0).wait(1).to({y:120.9},0).wait(2).to({y:122.8},0).wait(1).to({y:122.3},0).wait(2).to({y:119.9},0).wait(1).to({y:120.9},0).wait(3).to({y:122.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.3,x:94.6,y:122.1},0).wait(1).to({regY:82.2,rotation:-13.8,x:92,y:121.9},0).wait(1).to({regY:82,rotation:-14.6,x:87.7,y:121.2},0).wait(1).to({regY:82.1,scaleX:1,scaleY:1,rotation:-15.8,x:81.8,y:120.4},0).wait(2).to({rotation:-16.8,x:72.7,y:118.2},0).wait(1).to({rotation:-18.2,x:66.1,y:118.3},0).wait(2).to({regX:34.5,rotation:-19.2,x:66.9,y:120.7},0).wait(2).to({regX:34.4,regY:82,scaleX:1,scaleY:1,rotation:-5.6,x:137.9,y:101.9},0).wait(1).to({rotation:10.2,x:201.4,y:89.8},0).wait(2).to({y:92.8},0).wait(1).to({y:93.8},0).wait(17).to({scaleX:1,scaleY:1,rotation:10.5,x:201.9,y:96.3},0).wait(2).to({rotation:10,x:199.1,y:101.7},0).wait(1).to({rotation:6.7,x:185.1,y:103.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.1,x:162.7,y:104.8},0).wait(1).to({regX:34.2,rotation:-2,x:140.2,y:106.2},0).wait(2).to({rotation:-4.4,x:128.7,y:105.7},0).wait(2).to({rotation:-5.2,x:124.6,y:105.1},0).wait(2).to({regX:34.1,regY:81.9,rotation:-3.3,x:128.1,y:79.8},0).wait(1).to({rotation:-2,x:132.7,y:72.8},0).wait(1).to({rotation:-1.2,x:135.6,y:69.4},0).wait(2).to({rotation:-2,x:133.2,y:71.3},0).wait(2).to({x:132.7,y:72.8},0).wait(23).to({regX:34,regY:82,rotation:-0.7,x:137.4,y:67.8},0).wait(2).to({rotation:0,x:141.2,y:65.8},0).wait(2).to({rotation:1.7,x:148.6,y:69.9},0).wait(1).to({rotation:1,x:152.8,y:78.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.8,x:156,y:85.5},0).wait(1).to({rotation:0.3,x:158.8,y:91.1},0).wait(1).to({regX:34.1,scaleX:1,scaleY:1,rotation:0,x:160.7,y:95.1},0).wait(1).to({regX:34,x:161.7,y:97.3},0).wait(1).to({regX:34.5,regY:82.1,x:162.1,y:98.2},0).wait(2).to({y:96.5},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.8,4.6,202.6,496.6);


(lib.FIZ_FRONT_COMPCookingStations = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_FRONT_part_030
	this.instance = new lib.FIZ_23_part_040("single",0);
	this.instance.setTransform(149.2,318.5,0.977,1,0,0,0,56.1,42.4);

	this.instance_1 = new lib.FIZ_FRONT_part_030("single",0);
	this.instance_1.setTransform(118.2,313.4,0.999,0.999,-9.5,0,0,38.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:318.5,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance,p:{rotation:-2.2,x:150.3,y:322.5,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:-4.4,x:148.6,y:339.1,regY:42.5,scaleX:0.976,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:-6.2,x:148.6,y:342.5,regY:42.4,scaleX:0.976,regX:56,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:-8,x:143.2,y:342.2,regY:42.6,scaleX:0.976,regX:56.1,scaleY:0.999,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{rotation:-8,x:141.9,y:337.7,regY:42.6,scaleX:0.976,regX:56.1,scaleY:0.999,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{x:118.2,y:313.4,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_1,p:{x:117.4,y:310.1,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_1,p:{x:117.4,y:311.4,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},2).to({state:[{t:this.instance_1,p:{x:117.4,y:311.4,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_1,p:{x:116.9,y:314.7,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},18).to({state:[{t:this.instance_1,p:{x:114.8,y:316,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:85.2,y:311.9,regY:42.4,scaleX:0.976,regX:56.1,scaleY:1,skewX:-13.6,skewY:166.3}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:80.1,y:303.6,regY:42.4,scaleX:0.976,regX:56.1,scaleY:1,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:78.2,y:301,regY:42.4,scaleX:0.976,regX:56.1,scaleY:1,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:77.5,y:299.7,regY:42.4,scaleX:0.976,regX:56.1,scaleY:1,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:77.5,y:301,regY:42.4,scaleX:0.976,regX:56.1,scaleY:1,skewX:-15.2,skewY:164.7}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:76,y:305.4,regY:42.4,scaleX:0.976,regX:56.1,scaleY:0.999,skewX:-13.1,skewY:166.8}}]},5).to({state:[{t:this.instance,p:{rotation:0,x:76.8,y:315,regY:42.4,scaleX:0.976,regX:56.1,scaleY:0.999,skewX:-10.9,skewY:169}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:77.9,y:317.7,regY:42.3,scaleX:0.976,regX:56.1,scaleY:0.999,skewX:-9.1,skewY:170.8}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:88.5,y:317.3,regY:42.3,scaleX:0.976,regX:56.1,scaleY:0.999,skewX:-6.1,skewY:173.8}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:113,y:301.6,regY:42.5,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:1.2,skewY:-178.7}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:118.3,y:294.3,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:119.6,y:292.3,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:120.2,y:291.7,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:120.2,y:292.3,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:121.5,y:290.4,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},31).to({state:[{t:this.instance,p:{rotation:0,x:122.2,y:289.7,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:121.5,y:291,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:119.6,y:293,regY:42.4,scaleX:0.975,regX:56.1,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_1,p:{x:135.9,y:309.2,scaleX:0.998,scaleY:0.998,rotation:0.7}}]},2).to({state:[{t:this.instance,p:{rotation:1.8,x:148.6,y:312.4,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:322.4,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:324.4,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:325.7,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:325.7,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:324.9,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:323.8,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:322.4,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:320.6,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{rotation:0,x:149.2,y:318.5,regY:42.4,scaleX:0.977,regX:56.1,scaleY:1,skewX:0,skewY:0}}]},1).wait(3));

	// FIZ_FRONT_part_029
	this.instance_2 = new lib.FIZ_23_part_039("single",0);
	this.instance_2.setTransform(134.7,322.7,1,1,0,0,0,41.6,9.1);

	this.instance_3 = new lib.FIZ_FRONT_part_029("single",0);
	this.instance_3.setTransform(139.5,423.3,0.999,0.999,-9.5,0,0,33.6,121.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:322.7,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_2,p:{regX:41.9,rotation:-2.2,x:136.3,y:327.2,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:-4.4,x:134.5,y:344.3,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:-6.2,x:134.8,y:348.2,scaleX:0.999,scaleY:0.999,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:-8,x:129.6,y:348.2,scaleX:0.999,scaleY:0.999,regY:9.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:-8,x:128.3,y:343.7,scaleX:0.999,scaleY:0.999,regY:9.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{x:139.5,y:423.3,regX:33.6,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_3,p:{x:138.7,y:420,regX:33.6,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_3,p:{x:138.7,y:421.3,regX:33.6,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},2).to({state:[{t:this.instance_3,p:{x:138.7,y:421.3,regX:33.6,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_3,p:{x:138.2,y:424.6,regX:33.6,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},18).to({state:[{t:this.instance_3,p:{x:136.1,y:425.9,regX:33.6,scaleX:0.999,scaleY:0.999,rotation:-9.5}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:100.2,y:312.5,scaleX:1,scaleY:1,regY:9,skewX:-13.6,skewY:166.3}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:95.1,y:303.7,scaleX:1,scaleY:1,regY:9,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:93.2,y:301.1,scaleX:1,scaleY:1,regY:9,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:92.5,y:299.8,scaleX:1,scaleY:1,regY:9,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:92.5,y:301.1,scaleX:1,scaleY:1,regY:9,skewX:-15.2,skewY:164.7}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:91,y:306,scaleX:0.999,scaleY:0.999,regY:9,skewX:-13.1,skewY:166.8}}]},5).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:91.7,y:316.3,scaleX:0.999,scaleY:0.999,regY:8.9,skewX:-10.9,skewY:169}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:92.8,y:319.4,scaleX:0.999,scaleY:0.999,regY:8.8,skewX:-9.1,skewY:170.8}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:103.3,y:319.9,scaleX:0.999,scaleY:0.999,regY:8.9,skewX:-6.1,skewY:173.8}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:127.3,y:305.9,scaleX:0.999,scaleY:0.999,regY:9,skewX:1.2,skewY:-178.7}}]},1).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:132.4,y:299.1,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:133.7,y:297.1,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:134.3,y:296.5,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:134.3,y:297.1,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:135.6,y:295.2,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},31).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:136.3,y:294.5,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:135.6,y:295.8,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance_2,p:{regX:41.7,rotation:0,x:133.7,y:297.8,scaleX:0.999,scaleY:0.999,regY:9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_3,p:{x:137.2,y:421,regX:33.7,scaleX:0.998,scaleY:0.998,rotation:0.7}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:1.8,x:134.1,y:316,scaleX:1,scaleY:1,regY:9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:326.6,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:328.5,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:329.8,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:329.8,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:329.1,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:328,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:326.5,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:324.8,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regX:41.6,rotation:0,x:134.7,y:322.7,scaleX:1,scaleY:1,regY:9.1,skewX:0,skewY:0}}]},1).wait(3));

	// FIZ_FRONT_part_011
	this.instance_4 = new lib.FIZ_23_part_038("single",0);
	this.instance_4.setTransform(133.5,418.8,1,1,0,0,0,28.4,3.9);

	this.instance_5 = new lib.FIZ_FRONT_part_011b("single",1);
	this.instance_5.setTransform(97,317.4,0.969,1.028,0,-4.8,173,7.4,6.2);

	this.instance_6 = new lib.FIZ_23_part_028("single",71);
	this.instance_6.setTransform(110.6,309.3,1.01,1.072,0,-23,154.8,12.8,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:418.8,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_4,p:{rotation:-2.2,x:138.6,y:423.3,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:-4.4,x:140.9,y:440.2,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:-6.2,x:144,y:443.8,regX:28.3,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:-9.5,x:146.7,y:443,regX:28.4,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:-9.5,x:145.4,y:438.5,regX:28.4,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_5,p:{regX:7.4,scaleX:0.969,scaleY:1.028,skewX:-4.8,skewY:173,x:97,y:317.4,regY:6.2,startPosition:1}}]},1).to({state:[{t:this.instance_5,p:{regX:7.3,scaleX:0.968,scaleY:1.027,skewX:-11.9,skewY:165.9,x:96.3,y:314,regY:6.2,startPosition:1}}]},1).to({state:[{t:this.instance_5,p:{regX:7.4,scaleX:0.968,scaleY:1.027,skewX:-10.8,skewY:167,x:96.2,y:315.3,regY:6.2,startPosition:1}}]},2).to({state:[{t:this.instance_5,p:{regX:7.4,scaleX:0.968,scaleY:1.027,skewX:-10.3,skewY:167.4,x:96.2,y:315.3,regY:6.2,startPosition:1}}]},1).to({state:[{t:this.instance_5,p:{regX:7.3,scaleX:0.968,scaleY:1.027,skewX:-0.8,skewY:177,x:95.7,y:318.6,regY:6,startPosition:3}}]},18).to({state:[{t:this.instance_5,p:{regX:7.3,scaleX:0.967,scaleY:1.027,skewX:2.2,skewY:-179.9,x:93.6,y:319.9,regY:6.2,startPosition:4}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:124.2,y:405.8,regX:28.4,scaleX:1,scaleY:1,regY:4,skewX:-13.6,skewY:166.3}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:121.7,y:396.3,regX:28.4,scaleX:1,scaleY:1,regY:4,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:119.7,y:393.7,regX:28.4,scaleX:1,scaleY:1,regY:4,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:119.1,y:392.4,regX:28.4,scaleX:1,scaleY:1,regY:4,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:119.1,y:393.7,regX:28.4,scaleX:1,scaleY:1,regY:4,skewX:-15.2,skewY:164.7}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:114.2,y:399.5,regX:28.4,scaleX:0.999,scaleY:0.999,regY:4,skewX:-13.1,skewY:166.8}}]},5).to({state:[{t:this.instance_4,p:{rotation:0,x:111.3,y:410.6,regX:28.4,scaleX:0.999,scaleY:0.999,regY:4,skewX:-10.9,skewY:169}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:109.4,y:414.3,regX:28.4,scaleX:0.999,scaleY:0.999,regY:4,skewX:-9.1,skewY:170.8}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:114.9,y:415.5,regX:28.4,scaleX:0.999,scaleY:0.999,regY:4.1,skewX:-6.1,skewY:173.8}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:126.5,y:402,regX:28.5,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:1.2,skewY:-178.7}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:129,y:395.1,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:130.3,y:393.1,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:131,y:392.5,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:131,y:393.1,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:132.3,y:391.2,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},31).to({state:[{t:this.instance_4,p:{rotation:0,x:132.9,y:390.5,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:132.3,y:391.8,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:130.3,y:393.8,regX:28.6,scaleX:0.999,scaleY:0.999,regY:3.9,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_4,p:{rotation:1.8,x:129.9,y:412.1,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:422.7,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:424.7,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:426,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:426,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:425.2,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:424.1,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:422.7,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:420.9,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:0,x:133.5,y:418.8,regX:28.4,scaleX:1,scaleY:1,regY:3.9,skewX:0,skewY:0}}]},1).wait(3));

	// FIZ_FRONT_H2_COMP
	this.instance_7 = new lib.FIZ_23_part_037("single",0);
	this.instance_7.setTransform(120.3,447.8,0.935,1,0,0,0,16.3,4);

	this.instance_8 = new lib.FIZ_FRONT_H2_COMPCookingStations("synched",8,false);
	this.instance_8.setTransform(115.5,298,0.999,0.999,-16.8,0,0,111,306.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:447.8,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]}).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:447.8,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:-4.4,x:130,y:470.3,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:-6.2,x:134.1,y:474.2,regX:16.2,scaleX:0.934,scaleY:0.999,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:-8.2,x:133.8,y:474.2,regX:16.2,scaleX:0.934,scaleY:0.999,skewX:0,skewY:0,regY:4}}]},2).to({state:[{t:this.instance_7,p:{rotation:-8.2,x:132.5,y:470.9,regX:16.2,scaleX:0.934,scaleY:0.999,skewX:0,skewY:0,regY:4}}]},2).to({state:[{t:this.instance_8,p:{x:115.5,y:298,startPosition:8,regY:306.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{x:114,y:292.8,startPosition:9,regY:306.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{x:114,y:295.4,startPosition:11,regY:306.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_8,p:{x:114,y:296,startPosition:12,regY:306.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{x:113.5,y:299.3,startPosition:30,regY:306.1,rotation:-16.8,scaleX:0.999,scaleY:0.999}}]},18).to({state:[{t:this.instance_8,p:{x:110.8,y:300,startPosition:31,regY:306.2,rotation:-15,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:143.9,y:430.8,regX:16.3,scaleX:0.935,scaleY:1,skewX:-13.6,skewY:166.3,regY:4}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:141.9,y:421,regX:16.4,scaleX:0.935,scaleY:1,skewX:-15.2,skewY:164.7,regY:4.2}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:140,y:418.4,regX:16.4,scaleX:0.935,scaleY:1,skewX:-15.2,skewY:164.7,regY:4.2}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:139.3,y:417.1,regX:16.4,scaleX:0.935,scaleY:1,skewX:-15.2,skewY:164.7,regY:4.2}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:139.3,y:418.4,regX:16.4,scaleX:0.935,scaleY:1,skewX:-15.2,skewY:164.7,regY:4.2}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:133,y:425.3,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:-13.1,skewY:166.8,regY:4}}]},5).to({state:[{t:this.instance_7,p:{rotation:0,x:129.8,y:436.6,regX:16.2,scaleX:0.934,scaleY:0.999,skewX:-10.9,skewY:169,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:127,y:440.8,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:-9.1,skewY:170.8,regY:4}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:131,y:442.9,regX:16.4,scaleX:0.934,scaleY:0.999,skewX:-6.1,skewY:173.8,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:139,y:431.3,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:1.2,skewY:-178.7,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:140.9,y:424.8,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:142.2,y:422.8,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:142.8,y:422.2,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:142.8,y:422.8,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:144.1,y:420.9,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},31).to({state:[{t:this.instance_7,p:{rotation:0,x:144.8,y:420.2,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:144.8,y:420.9,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:142.2,y:423.5,regX:16.3,scaleX:0.934,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:4.1}}]},1).to({state:[{t:this.instance_8,p:{x:135.4,y:300,startPosition:90,regY:306.1,rotation:5,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:447.8,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:451.7,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:453.7,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:455,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:455,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},2).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:454.2,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:453.1,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:451.7,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:449.9,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:120.3,y:447.8,regX:16.3,scaleX:0.935,scaleY:1,skewX:0,skewY:0,regY:4}}]},1).wait(3));

	// FIZ_FRONT_part_012
	this.instance_9 = new lib.FIZ_23_part_035("single",0);
	this.instance_9.setTransform(148.9,446.8,1,1,0,0,0,12.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({regX:12.9,rotation:-4.3,x:158.5,y:466.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-6.1,x:162.5,y:469.9},0).wait(2).to({rotation:-8.1,x:162,y:468.9},0).wait(2).to({x:160.7,y:465.7},0).to({_off:true},1).wait(25).to({regX:12.8,scaleX:1,scaleY:1,rotation:0,skewX:-13.5,skewY:166.3,x:115.9,y:436.5,_off:false},0).wait(1).to({skewX:-15.1,skewY:164.7,x:114.2,y:427.2},0).wait(1).to({x:112.3,y:423.3},0).wait(1).to({x:111.6,y:422},0).wait(2).to({y:423.3},0).wait(5).to({scaleX:1,scaleY:1,skewX:-13,skewY:166.8,x:105.1,y:428.3},0).wait(1).to({skewX:-10.8,skewY:169,x:101.6,y:439.7},0).wait(2).to({skewX:-9,skewY:170.8,x:98.9,y:443.1},0).wait(1).to({skewX:-6,skewY:173.8,x:102.8,y:443.6},0).wait(1).to({regX:12.9,skewX:1.2,skewY:181.3,x:110.5,y:429.6},0).wait(1).to({skewX:2.8,skewY:182.9,x:112.4,y:422.3},0).wait(1).to({x:113.7,y:420.3},0).wait(1).to({x:114.4,y:419.7},0).wait(2).to({y:420.3},0).wait(31).to({x:115.7,y:418.4},0).wait(1).to({x:116.3,y:417.7},0).wait(2).to({y:418.4},0).wait(1).to({x:113.7,y:421},0).to({_off:true},2).wait(2).to({regX:12.8,scaleX:1,scaleY:1,skewX:0,skewY:360,x:148.9,y:446.8,_off:false},0).wait(1).to({y:450.7},0).wait(1).to({y:452.6},0).wait(2).to({y:453.9},0).wait(2).to({startPosition:0},0).wait(1).to({y:453.2},0).wait(1).to({y:452.1},0).wait(1).to({y:450.6},0).wait(1).to({y:448.9},0).wait(1).to({y:446.8},0).wait(3));

	// FIZ_FRONT_part_011
	this.instance_10 = new lib.FIZ_23_part_033("single",0);
	this.instance_10.setTransform(134.1,413.4,1,1,0,0,0,32,6.6);

	this.instance_11 = new lib.FIZ_FRONT_part_011b("single",2);
	this.instance_11.setTransform(135.6,311.8,0.963,1.022,0,-13.4,-11.3,3.6,6.5);

	this.instance_12 = new lib.FIZ_23_part_010("single",66);
	this.instance_12.setTransform(156.2,316.1,0.998,0.998,0,0.2,-179.7,76.6,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:413.4,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]}).to({state:[{t:this.instance_10,p:{rotation:-2.2,x:139,y:417.9,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:-4.4,x:141,y:434.8,regY:6.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:-6.2,x:144.1,y:438.4,regY:6.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:-9.5,x:146.3,y:437.6,regY:6.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:-9.5,x:145,y:433,regY:6.5,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:32}}]},2).to({state:[{t:this.instance_11,p:{regY:6.5,scaleX:0.963,skewX:-13.4,skewY:-11.3,x:135.6,y:311.8,scaleY:1.022,startPosition:2}}]},1).to({state:[{t:this.instance_11,p:{regY:6.6,scaleX:0.964,skewX:-11.8,skewY:-15.2,x:134.8,y:308.6,scaleY:1.022,startPosition:2}}]},1).to({state:[{t:this.instance_11,p:{regY:6.4,scaleX:0.963,skewX:-12.8,skewY:-12.5,x:134.7,y:309.7,scaleY:1.022,startPosition:2}}]},2).to({state:[{t:this.instance_11,p:{regY:6.5,scaleX:0.963,skewX:-13.4,skewY:-11.3,x:134.8,y:309.8,scaleY:1.022,startPosition:2}}]},1).to({state:[{t:this.instance_11,p:{regY:6.5,scaleX:0.963,skewX:-11.4,skewY:-9.2,x:134.2,y:313.1,scaleY:1.022,startPosition:2}}]},18).to({state:[{t:this.instance_11,p:{regY:6.5,scaleX:0.955,skewX:-10.6,skewY:-5.8,x:132.2,y:314.4,scaleY:0.976,startPosition:5}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:122.4,y:400.5,regY:6.6,scaleX:1,scaleY:1,skewX:-13.6,skewY:166.3,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:119.7,y:391.1,regY:6.6,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:117.8,y:388.5,regY:6.6,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:117.1,y:387.2,regY:6.6,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:117.1,y:388.5,regY:6.6,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:112.5,y:394.3,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:-13.1,skewY:166.8,regX:32}}]},5).to({state:[{t:this.instance_10,p:{rotation:0,x:109.7,y:405.4,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:-10.9,skewY:169,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:108.1,y:409,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:-9.1,skewY:170.8,regX:31.9}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:113.8,y:410.1,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:-6.1,skewY:173.8,regX:31.9}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:126.1,y:396.6,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:1.2,skewY:-178.7,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:128.9,y:389.7,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:130.2,y:387.7,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:130.9,y:387.1,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:130.9,y:387.7,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:132.2,y:385.8,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},31).to({state:[{t:this.instance_10,p:{rotation:0,x:132.8,y:385.1,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:132.2,y:386.4,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:130.2,y:388.4,regY:6.7,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regX:32}}]},1).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_10,p:{rotation:1.8,x:130.6,y:406.7,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:417.3,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:419.3,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:420.6,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:420.6,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:419.8,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:418.7,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:417.3,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:415.5,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:134.1,y:413.4,regY:6.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:32}}]},1).wait(3));

	// FIZ_FRONT_part_006
	this.instance_13 = new lib.FIZ_23_part_028copy("single",1);
	this.instance_13.setTransform(161.2,330.4,1.012,1.074,0,-0.8,1.2,12.5,7.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(96).to({startPosition:1,_off:false},0).wait(2).to({startPosition:1},0).wait(1).to({skewX:-0.6,skewY:1.1,y:329.7},0).wait(1).to({y:328.6},0).wait(1).to({y:327.1},0).wait(1).to({y:325.4},0).wait(1).to({skewX:-0.7,skewY:1.2,y:323.2},0).wait(3));

	// FIZ_FRONT_part_010
	this.instance_14 = new lib.FIZ_23_part_028copy("single",1);
	this.instance_14.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.instance_15 = new lib.FIZ_23_part_032("single",0);
	this.instance_15.setTransform(129.6,423.8,1,1,0,0,0,23.4,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:423.8,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_14}]}).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:-2.2,x:135.1,y:428.5,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:-4.4,x:137.4,y:445.5,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:-6.2,x:140.7,y:449.2,regX:23.3,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:-8,x:138.7,y:449,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:-8,x:137.4,y:444.4,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},2).to({state:[]},1).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:129.3,y:409.7,regX:23.4,scaleX:1,scaleY:1,skewX:-13.6,skewY:166.3}}]},25).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:126.8,y:400,regX:23.4,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:124.9,y:397.4,regX:23.4,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:124.2,y:396.1,regX:23.4,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7}}]},1).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:124.2,y:397.4,regX:23.4,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7}}]},2).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:119.2,y:403.4,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:-13.1,skewY:166.8}}]},5).to({state:[{t:this.instance_15,p:{regY:111.3,rotation:0,x:116.1,y:414.7,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:-10.9,skewY:169}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:114.1,y:418.5,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:-9.1,skewY:170.8}}]},2).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:119.3,y:420.1,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:-6.1,skewY:173.8}}]},1).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:130.3,y:407.1,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:1.2,skewY:-178.7}}]},1).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:132.8,y:400.3,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:134.1,y:398.4,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:134.8,y:397.7,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:134.8,y:398.4,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:136.1,y:396.4,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},31).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:136.7,y:395.8,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:136.1,y:397.1,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},2).to({state:[{t:this.instance_15,p:{regY:111.4,rotation:0,x:134.1,y:399,regX:23.4,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1}}]},1).to({state:[]},2).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:1.8,x:125.8,y:416.9,regX:23.3,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:427.7,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:429.6,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:430.9,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:430.9,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:430.2,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:429.1,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:427.6,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:425.9,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_15,p:{regY:111.2,rotation:0,x:129.6,y:423.8,regX:23.4,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).wait(3));

	// FIZ_FRONT_part_007
	this.instance_16 = new lib.FIZ_23_part_029("single",0);
	this.instance_16.setTransform(153.7,415.3,1,1,0,0,0,-1.9,12.2);

	this.instance_17 = new lib.FIZ_FRONT_part_007("single",0);
	this.instance_17.setTransform(126.9,440,0.999,0.999,-9.5,0,0,18.6,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:415.3,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]}).to({state:[{t:this.instance_16,p:{rotation:-2.2,x:158.7,y:419.1,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:-4.4,x:160.7,y:435.1,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:-6.2,x:163.7,y:438.1,regX:-2,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:-8,x:161.2,y:437.2,regX:-2,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:12.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:-8,x:159.9,y:432.6,regX:-2,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:12.2}}]},2).to({state:[{t:this.instance_17,p:{x:126.9,y:440,rotation:-9.5}}]},1).to({state:[{t:this.instance_17,p:{x:126.1,y:436.7,rotation:-9.5}}]},1).to({state:[{t:this.instance_17,p:{x:126.1,y:439.3,rotation:-9.5}}]},2).to({state:[{t:this.instance_17,p:{x:126.1,y:439.3,rotation:-9.5}}]},1).to({state:[{t:this.instance_17,p:{x:124.3,y:444.6,rotation:-9.5}}]},18).to({state:[{t:this.instance_17,p:{x:123.5,y:443.9,rotation:-9.5}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:103.8,y:407,regX:-1.9,scaleX:1,scaleY:1,skewX:-13.6,skewY:166.3,regY:12.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:101.3,y:398.1,regX:-1.9,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:99.3,y:395.5,regX:-1.9,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:98.7,y:394.2,regX:-1.9,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:98.7,y:395.5,regX:-1.9,scaleX:1,scaleY:1,skewX:-15.2,skewY:164.7,regY:12.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:93.8,y:400.6,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:-13.1,skewY:166.8,regY:12.3}}]},5).to({state:[{t:this.instance_16,p:{rotation:0,x:90.8,y:410.9,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:-10.9,skewY:169,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:88.9,y:414,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:-9.1,skewY:170.8,regY:12.3}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:94.4,y:414.1,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:-6.1,skewY:173.8,regY:12.3}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:106.4,y:398.1,regX:-1.8,scaleX:0.999,scaleY:0.999,skewX:1.2,skewY:-178.7,regY:12.3}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:109.2,y:390.6,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:110.5,y:388.6,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:111.1,y:388,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:111.1,y:388.6,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:112.4,y:386.7,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},31).to({state:[{t:this.instance_16,p:{rotation:0,x:113.1,y:386,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:112.4,y:387.3,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:110.5,y:389.3,regX:-1.9,scaleX:0.999,scaleY:0.999,skewX:2.8,skewY:-177.1,regY:12.3}}]},1).to({state:[{t:this.instance_17,p:{x:119.2,y:441.2,rotation:-7.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:1.8,x:150.3,y:409.2,regX:-1.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:419.2,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:421.2,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:422.5,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:422.5,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:421.7,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:420.6,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:419.2,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:417.4,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:153.7,y:415.3,regX:-1.9,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:12.2}}]},1).wait(3));

	// FIZ_FRONT_part_006
	this.instance_18 = new lib.FIZ_23_part_028("single",1);
	this.instance_18.setTransform(161.2,323.2,1.012,1.074,0,-0.8,1.2,12.5,7.6);

	this.instance_19 = new lib.FIZ_FRONT_part_006("single",0);
	this.instance_19.setTransform(155.7,435.1,0.999,0.999,-9.5,0,0,11.1,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2,startPosition:1}}]}).to({state:[{t:this.instance_18,p:{regX:12.3,regY:7.5,scaleX:1.011,scaleY:1.106,skewX:-23.7,skewY:2.9,x:159,y:326.1,startPosition:1}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.7,scaleX:1.011,scaleY:1.079,skewX:6.8,skewY:0.4,x:160.2,y:337.6,startPosition:65}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.7,scaleX:0.998,scaleY:1.095,skewX:6.6,skewY:-0.4,x:161.2,y:347.7,startPosition:62}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.8,scaleX:1.01,scaleY:1.072,skewX:-14.1,skewY:-12,x:155.4,y:349.8,startPosition:62}}]},2).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.8,scaleX:1.015,scaleY:1.072,skewX:-24,skewY:-18.1,x:154.6,y:342.5,startPosition:62}}]},2).to({state:[{t:this.instance_19,p:{x:155.7,y:435.1,rotation:-9.5}}]},1).to({state:[{t:this.instance_19,p:{x:154.9,y:431.8,rotation:-9.5}}]},1).to({state:[{t:this.instance_19,p:{x:154.9,y:434.4,rotation:-9.5}}]},2).to({state:[{t:this.instance_19,p:{x:154.9,y:434.4,rotation:-9.5}}]},1).to({state:[{t:this.instance_19,p:{x:154.4,y:437.7,rotation:-9.5}}]},18).to({state:[{t:this.instance_19,p:{x:152.3,y:439,rotation:-9.5}}]},1).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.6,scaleX:1.012,scaleY:1.073,skewX:-12.7,skewY:165,x:74.6,y:319.4,startPosition:66}}]},2).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.6,scaleX:1.011,scaleY:1.073,skewX:-14.2,skewY:163.5,x:69.7,y:311.3,startPosition:63}}]},1).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.5,scaleX:1.011,scaleY:1.073,skewX:-17.3,skewY:160.5,x:67.8,y:308.6,startPosition:63}}]},1).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.5,scaleX:1.011,scaleY:1.073,skewX:-19.5,skewY:158.2,x:67.1,y:307.4,startPosition:63}}]},1).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.5,scaleX:1.011,scaleY:1.073,skewX:-18.3,skewY:159.5,x:67.1,y:308.6,startPosition:63}}]},2).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.5,scaleX:1.011,scaleY:1.073,skewX:-15.7,skewY:162,x:65.3,y:312.7,startPosition:63}}]},5).to({state:[{t:this.instance_18,p:{regX:12.6,regY:7.5,scaleX:1.011,scaleY:1.072,skewX:-19,skewY:158.8,x:65.9,y:321.9,startPosition:63}}]},1).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.6,scaleX:1.011,scaleY:1.072,skewX:-18.7,skewY:159,x:66.7,y:324.3,startPosition:63}}]},2).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.011,scaleY:1.072,skewX:-11.7,skewY:166.1,x:77,y:323.3,startPosition:63}}]},1).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.071,skewX:-38.8,skewY:139,x:100.8,y:305.8,startPosition:64}}]},1).to({state:[{t:this.instance_18,p:{regX:12.8,regY:7.6,scaleX:1.01,scaleY:1.072,skewX:-32,skewY:145.8,x:106,y:298.3,startPosition:64}}]},1).to({state:[{t:this.instance_18,p:{regX:12.8,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-27.8,skewY:150,x:107.3,y:296.3,startPosition:64}}]},1).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-26.2,skewY:151.6,x:108,y:295.6,startPosition:64}}]},1).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-26.2,skewY:151.6,x:108,y:296.3,startPosition:64}}]},2).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-26.2,skewY:151.6,x:109.3,y:294.3,startPosition:64}}]},31).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-26.2,skewY:151.6,x:109.9,y:293.7,startPosition:64}}]},1).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-26.2,skewY:151.6,x:109.3,y:295,startPosition:64}}]},2).to({state:[{t:this.instance_18,p:{regX:12.7,regY:7.5,scaleX:1.01,scaleY:1.072,skewX:-26.2,skewY:151.6,x:107.3,y:296.9,startPosition:64}}]},1).to({state:[{t:this.instance_19,p:{x:148.1,y:437.4,rotation:-7.2}}]},2).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.7,scaleX:1.012,scaleY:1.073,skewX:0.9,skewY:3,x:160.5,y:317.5,startPosition:68}}]},2).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:154.2,y:327.3,startPosition:69}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:162.9,y:327.3,startPosition:70}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:330.4,startPosition:1}}]},2).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:330.4,startPosition:1}}]},2).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.7,skewY:1.1,x:161.2,y:329.7,startPosition:1}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.7,skewY:1.1,x:161.2,y:328.6,startPosition:1}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.7,skewY:1.1,x:161.2,y:327.1,startPosition:1}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.7,skewY:1.1,x:161.2,y:325.4,startPosition:1}}]},1).to({state:[{t:this.instance_18,p:{regX:12.5,regY:7.6,scaleX:1.012,scaleY:1.074,skewX:-0.8,skewY:1.2,x:161.2,y:323.2,startPosition:1}}]},1).wait(3));

	// FIZ_FRONT_part_005
	this.instance_20 = new lib.FIZ_FRONT_H2_COMPCookingStations("synched",0,false);
	this.instance_20.setTransform(136.5,306,1,1,0,0,0,110.9,306.1);

	this.instance_21 = new lib.FIZ_FRONT_part_005("single",0);
	this.instance_21.setTransform(12.7,122.4,0.999,0.999,-16.8,0,0,69.2,80.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20,p:{rotation:0,x:136.5,y:306,startPosition:0,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_20,p:{rotation:-2.5,x:137.2,y:312.5,startPosition:1,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-6.2,x:134.8,y:327.2,startPosition:2,regY:306,scaleX:0.999,scaleY:0.999,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-8,x:134.5,y:333,startPosition:3,regY:305.9,scaleX:0.999,scaleY:0.999,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-9.7,x:128.8,y:334.3,startPosition:5,regY:305.9,scaleX:0.999,scaleY:0.999,regX:110.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_20,p:{rotation:-10,x:127.5,y:329.2,startPosition:7,regY:306,scaleX:0.999,scaleY:0.999,regX:111,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{x:12.7,y:122.4,rotation:-16.8,regY:80.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_21,p:{x:11.3,y:117.1,rotation:-16.8,regY:80.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_21,p:{x:11.3,y:119.7,rotation:-16.8,regY:80.8,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_21,p:{x:11.3,y:120.4,rotation:-16.8,regY:80.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_21,p:{x:10.8,y:123.7,rotation:-16.8,regY:80.8,scaleX:0.999,scaleY:0.999}}]},18).to({state:[{t:this.instance_21,p:{x:13.5,y:121.2,rotation:-15,regY:80.8,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:94.5,y:297,startPosition:33,regY:306.2,scaleX:1,scaleY:1,regX:110.9,skewX:-16.9,skewY:163}}]},2).to({state:[{t:this.instance_20,p:{rotation:0,x:88.3,y:288.2,startPosition:34,regY:306.2,scaleX:0.999,scaleY:0.999,regX:111,skewX:-20.4,skewY:159.5}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:85.1,y:284.3,startPosition:35,regY:306.2,scaleX:0.999,scaleY:0.999,regX:111,skewX:-20.9,skewY:159}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:83.9,y:282.4,startPosition:36,regY:306.2,scaleX:0.999,scaleY:0.999,regX:110.9,skewX:-21.1,skewY:158.8}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:83.9,y:284.4,startPosition:38,regY:306.2,scaleX:0.999,scaleY:0.999,regX:110.9,skewX:-21.7,skewY:158.2}}]},2).to({state:[{t:this.instance_20,p:{rotation:0,x:84.2,y:287.7,startPosition:43,regY:306.2,scaleX:0.999,scaleY:0.999,regX:111,skewX:-19.2,skewY:160.7}}]},5).to({state:[{t:this.instance_20,p:{rotation:0,x:84.4,y:301.6,startPosition:44,regY:306.2,scaleX:0.998,scaleY:0.998,regX:111,skewX:-12.9,skewY:167}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:86.6,y:306.5,startPosition:46,regY:306.2,scaleX:0.998,scaleY:0.998,regX:111,skewX:-11.1,skewY:168.8}}]},2).to({state:[{t:this.instance_20,p:{rotation:0,x:99.2,y:306.6,startPosition:47,regY:306.2,scaleX:1.004,scaleY:0.993,regX:111.2,skewX:-5.7,skewY:171.9}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:125.4,y:296.2,startPosition:48,regY:306.1,scaleX:0.999,scaleY:0.997,regX:110.8,skewX:1.2,skewY:-177.9}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:132.1,y:285.9,startPosition:49,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:134,y:282.6,startPosition:50,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:134.7,y:280,startPosition:51,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:134.7,y:281.3,startPosition:53,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},2).to({state:[{t:this.instance_20,p:{rotation:0,x:136.6,y:278.7,startPosition:84,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},31).to({state:[{t:this.instance_20,p:{rotation:0,x:137.3,y:276.8,startPosition:85,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:136.6,y:278.7,startPosition:87,regY:306.1,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:5.3,skewY:-174.6}}]},2).to({state:[{t:this.instance_20,p:{rotation:0,x:134.1,y:284,startPosition:88,regY:306.2,scaleX:0.998,scaleY:0.998,regX:110.9,skewX:3.5,skewY:-176.4}}]},1).to({state:[{t:this.instance_21,p:{x:105.6,y:99.1,rotation:5,regY:80.9,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_20,p:{rotation:3.3,x:136.4,y:301.4,startPosition:92,regY:306,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_20,p:{rotation:0,x:136.5,y:309.9,startPosition:93,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-1.4,x:136,y:314.4,startPosition:94,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-2.4,x:136,y:316.3,startPosition:96,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_20,p:{rotation:-2.4,x:136,y:316.3,startPosition:98,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_20,p:{rotation:-2.2,x:136.1,y:315.2,startPosition:99,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-1.7,x:136.1,y:313.7,startPosition:100,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-1.2,x:136.3,y:311.6,startPosition:101,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:-0.5,x:136.4,y:309.1,startPosition:102,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_20,p:{rotation:0,x:136.5,y:306,startPosition:103,regY:306.1,scaleX:1,scaleY:1,regX:110.9,skewX:0,skewY:0}}]},1).wait(3));

	// FIZ_FRONT_part_001
	this.instance_22 = new lib.FIZ_FRONT_part_001("single",0);
	this.instance_22.setTransform(118,306.1,0.999,0.999,-12.4,0,0,50.9,37.4);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(8).to({startPosition:0,_off:false},0).wait(1).to({x:116.7,y:302.9},0).wait(2).to({y:304.2},0).wait(1).to({startPosition:0},0).wait(18).to({x:116.2,y:307.5},0).wait(1).to({x:114.1,y:308.7},0).to({_off:true},2).wait(57).to({rotation:-2,x:136.4,y:301.8,_off:false},0).to({_off:true},2).wait(14));

	// FIZ_23_part_040
	this.instance_23 = new lib.FIZ_23_part_010("single",1);
	this.instance_23.setTransform(112.3,328.8,1,1,0,0,0,76.7,10);

	this.instance_24 = new lib.FIZ_23_part_028("single",66);
	this.instance_24.setTransform(120.3,306.8,1.02,1.072,0,-26.7,-35,12.7,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:328.8,startPosition:1,scaleX:1,regY:10,rotation:0}}]}).to({state:[{t:this.instance_23,p:{regX:76.8,scaleY:1.006,skewX:4.1,skewY:-2.2,x:114,y:334.2,startPosition:65,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.6,scaleY:1.027,skewX:-31.4,skewY:-18,x:112.6,y:352.3,startPosition:62,scaleX:0.836,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.6,scaleY:0.999,skewX:0,skewY:0,x:113.1,y:356.9,startPosition:62,scaleX:0.999,regY:10.1,rotation:-2.2}}]},1).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:0,skewY:0,x:108.1,y:357.5,startPosition:62,scaleX:0.999,regY:10,rotation:-1.2}}]},2).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:0,skewY:0,x:106.8,y:353,startPosition:62,scaleX:0.999,regY:10,rotation:-5.7}}]},2).to({state:[]},1).to({state:[{t:this.instance_24}]},25).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:1,skewX:-15.2,skewY:164.7,x:118.5,y:303.7,startPosition:63,scaleX:1,regY:9.9,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:-12.7,skewY:167.2,x:116.5,y:301.1,startPosition:63,scaleX:0.999,regY:9.9,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.6,scaleY:0.999,skewX:-11.4,skewY:168.5,x:115.9,y:299.8,startPosition:63,scaleX:0.999,regY:9.9,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.6,scaleY:0.999,skewX:-11.9,skewY:168,x:115.9,y:301.1,startPosition:63,scaleX:0.999,regY:9.9,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:-11.9,skewY:168,x:114.3,y:306.7,startPosition:63,scaleX:0.999,regY:9.8,rotation:0}}]},5).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:-14.7,skewY:165.2,x:115.1,y:318,startPosition:63,scaleX:0.999,regY:9.9,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.4,scaleY:0.999,skewX:-15.1,skewY:164.8,x:116.1,y:321.8,startPosition:63,scaleX:0.999,regY:9.8,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.998,skewX:-17.9,skewY:162,x:126.4,y:323.5,startPosition:63,scaleX:0.998,regY:9.8,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.6,scaleY:0.997,skewX:28.3,skewY:-151.6,x:149.6,y:312.5,startPosition:64,scaleX:0.997,regY:10.1,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.998,skewX:14.3,skewY:-165.6,x:154.8,y:306.3,startPosition:64,scaleX:0.998,regY:10.1,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:0.998,skewX:6.6,skewY:-173.3,x:155.9,y:304.3,startPosition:64,scaleX:0.998,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:2.8,skewY:-177.1,x:156.7,y:303.6,startPosition:64,scaleX:0.999,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.998,skewX:3.8,skewY:-176.1,x:156.8,y:304.4,startPosition:64,scaleX:0.998,regY:10.1,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.999,skewX:2.8,skewY:-177.1,x:158,y:302.3,startPosition:64,scaleX:0.999,regY:10,rotation:0}}]},31).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.998,skewX:1,skewY:-178.9,x:158.7,y:301.7,startPosition:64,scaleX:0.998,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.5,scaleY:0.998,skewX:-1.4,skewY:178.5,x:158,y:303.1,startPosition:64,scaleX:0.998,regY:10.1,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{regX:76.6,scaleY:0.998,skewX:0.2,skewY:-179.7,x:156,y:305,startPosition:64,scaleX:0.998,regY:10,rotation:0}}]},1).to({state:[]},2).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:0.999,skewX:0,skewY:0,x:111.5,y:321.4,startPosition:67,scaleX:0.999,regY:9.8,rotation:14.4}}]},2).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1.005,skewX:12.2,skewY:6.3,x:112.3,y:332.6,startPosition:68,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1.063,skewX:5.7,skewY:0,x:112.3,y:334.6,startPosition:1,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:335.9,startPosition:1,scaleX:1,regY:10,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:335.9,startPosition:1,scaleX:1,regY:10,rotation:0}}]},2).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:335.2,startPosition:1,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:334.1,startPosition:1,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:332.6,startPosition:1,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:330.9,startPosition:1,scaleX:1,regY:10,rotation:0}}]},1).to({state:[{t:this.instance_23,p:{regX:76.7,scaleY:1,skewX:0,skewY:0,x:112.3,y:328.8,startPosition:1,scaleX:1,regY:10,rotation:0}}]},1).wait(3));

	// FIZ_23_part_039
	this.instance_25 = new lib.FIZ_23_part_009("single",0);
	this.instance_25.setTransform(135,319.6,0.977,1,0,0,0,41.6,43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(1).to({rotation:-2.1,x:136.2,y:324.2},0).wait(1).to({scaleX:0.98,rotation:-4.3,x:134.6,y:341.3},0).wait(1).to({scaleY:1,rotation:-6.1,x:134.8,y:345.1},0).wait(2).to({regY:43.6,rotation:-7.9,x:129.4,y:345.2},0).wait(2).to({x:128.1,y:340.7},0).to({_off:true},1).wait(25).to({regY:43.5,scaleY:1,rotation:0,skewX:-13.5,skewY:166.3,x:99.2,y:309.7,_off:false},0).wait(1).to({regY:43.4,skewX:-15.1,skewY:164.7,x:94,y:300.8},0).wait(1).to({x:92.1,y:298.2},0).wait(1).to({x:91.4,y:296.9},0).wait(2).to({y:298.2},0).wait(5).to({regX:41.5,regY:43.5,scaleY:1,skewX:-13,skewY:166.8,x:90.1,y:303.2},0).wait(1).to({regX:41.6,skewX:-10.8,skewY:169,x:90.9,y:313.4},0).wait(2).to({regY:43.4,skewX:-9,skewY:170.8,x:92.1,y:316.5},0).wait(1).to({skewX:-6,skewY:173.8,x:102.7,y:316.9},0).wait(1).to({regX:41.5,regY:43.5,scaleX:0.98,skewX:1.2,skewY:181.3,x:127.2,y:302.9},0).wait(1).to({regY:43.4,skewX:2.8,skewY:182.9,x:132.4,y:296},0).wait(1).to({x:133.7,y:294},0).wait(1).to({x:134.4,y:293.4},0).wait(2).to({y:294},0).wait(31).to({x:135.7,y:292.1},0).wait(1).to({x:136.3,y:291.4},0).wait(2).to({x:135.7,y:292.7},0).wait(1).to({x:133.7,y:294.7},0).to({_off:true},2).wait(2).to({regX:41.6,regY:43.5,scaleX:0.98,scaleY:1,rotation:1.8,skewX:0,skewY:360,x:134.4,y:313,_off:false},0).wait(1).to({rotation:0,x:135,y:323.5},0).wait(1).to({y:325.5},0).wait(2).to({y:326.8},0).wait(2).to({startPosition:0},0).wait(1).to({y:326},0).wait(1).to({y:324.9},0).wait(1).to({y:323.5},0).wait(1).to({y:321.7},0).wait(1).to({y:319.6},0).wait(3));

	// FIZ_23_part_037
	this.instance_26 = new lib.FIZ_23_part_007("single",0);
	this.instance_26.setTransform(162.1,96.5,1,1,0,0,0,34.5,82.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(1).to({regY:82,rotation:-2.4,x:153.3,y:102.1},0).wait(1).to({regY:82.1,rotation:-4.3,x:142.9,y:116.8},0).wait(1).to({regX:34.6,scaleX:1,scaleY:1,rotation:-6.1,x:136.1,y:122.6},0).wait(2).to({rotation:-7.9,x:124,y:124.1},0).wait(2).to({regY:82.2,rotation:-8.1,x:121.7,y:119},0).to({_off:true},1).wait(25).to({regX:34.5,scaleX:1,scaleY:1,rotation:0,skewX:-16.8,skewY:163,x:8.8,y:104.1,_off:false},0).wait(1).to({regX:34.4,scaleX:1,scaleY:1,skewX:-20.3,skewY:159.5,x:-8.8,y:101.1},0).wait(1).to({regX:34.5,regY:82,skewX:-20.8,skewY:159,x:-13.4,y:98},0).wait(1).to({regY:82.1,skewX:-21,skewY:158.8,x:-15.5,y:96.5},0).wait(2).to({skewX:-21.6,skewY:158.2,x:-17.2,y:99.4},0).wait(5).to({regY:82,skewX:-19.1,skewY:160.7,x:-9.4,y:99.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-12.8,skewY:167,x:12.6,y:103.3},0).wait(2).to({skewX:-11,skewY:168.8,x:21.1,y:106.1},0).wait(1).to({regX:34.6,scaleX:1,scaleY:0.99,skewX:-5.6,skewY:171.9,x:53,y:103.1},0).wait(1).to({regX:34.5,regY:82.2,scaleX:1,scaleY:1,skewX:1.2,skewY:182.1,x:104.4,y:86.6},0).wait(1).to({scaleX:1,scaleY:1,skewX:5.3,skewY:185.4,x:126,y:75.4},0).wait(1).to({x:127.9,y:72.2},0).wait(1).to({x:128.6,y:69.6},0).wait(2).to({y:70.9},0).wait(31).to({x:130.5,y:68.3},0).wait(1).to({x:131.2,y:66.3},0).wait(2).to({x:130.5,y:68.3},0).wait(1).to({skewX:3.5,skewY:183.6,x:121.4,y:73.7},0).to({_off:true},2).wait(2).to({regY:82,scaleX:1,scaleY:1,rotation:3.3,skewX:0,skewY:360,x:174,y:93.7,_off:false},0).wait(1).to({regY:82.1,rotation:0,x:162.1,y:100.4},0).wait(1).to({rotation:-1.3,x:156.1,y:104.3},0).wait(2).to({rotation:-2.3,x:152.3,y:105.9},0).wait(2).to({startPosition:0},0).wait(1).to({regY:82.2,rotation:-2.1,x:153.4,y:105},0).wait(1).to({rotation:-1.6,x:154.8,y:103.6},0).wait(1).to({regX:34.6,rotation:-1.1,x:156.9,y:101.7},0).wait(1).to({regX:34.5,regY:82.1,rotation:-0.4,x:159.2,y:99.3},0).wait(1).to({rotation:0,x:162.1,y:96.5},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.6,0,211.9,501.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;