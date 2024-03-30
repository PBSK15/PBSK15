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



(lib.Bitmap64 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap65 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap66 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap68 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap72 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap73 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap74 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap75 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap76 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap77 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap78 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap79 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap80 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.PrinceWednesdayclothestexture = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-wednesday');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.princewed_fr_lowerlegright_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Bitmap80();
	this.instance.setTransform(-35.1,9.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.1,9.1,72,73);


(lib.princewed_fr_lowerlegleft_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap79();
	this.instance.setTransform(-36.4,8.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.4,8.8,72,73);


(lib.princewed_fr_legright_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap76();
	this.instance.setTransform(-38.8,-28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-28.3,77,127);


(lib.princewed_fr_legleft_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// base color
	this.instance = new lib.Bitmap77();
	this.instance.setTransform(-38.3,-28.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.3,-28.3,77,129);


(lib.princewed_fr_headcomp_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// crown
	this.instance = new lib.Bitmap66();
	this.instance.setTransform(-133.5,-260.2);

	this.instance_1 = new lib.Bitmap65();
	this.instance_1.setTransform(-133.5,-260.2);

	this.instance_2 = new lib.Bitmap64();
	this.instance_2.setTransform(-133.5,-260.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},65).to({state:[]},1).to({state:[{t:this.instance_2}]},2).to({state:[]},1).wait(53));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.5,-260.2,267,284);


(lib.princewed_fr_handright01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19D59").s().p("AAUEwIgOgBIgQgEIgFgCQgWgGgRgSQgZgaAAgmQAAgKADgTIABgCQgRAGgXAAQgQAAgNgFIgDgBQgUgDgYgbQgFgGgGgLIgBgBIgEgGQgFgJgDgJQgFgNAAg2QAAhJAGgrIADgVIABgEIACgOIAGgXIAEgPIAAgBIAAgBIAAAAIAAgBIACgFIACgJIAGgMQAIgSAIgKIAdghQAHgDAJgLQAZgQAhgKQAKgFATgFQAUgGAKAAQAJgDADAAIAFABQA/gJA3AzQAOANALAOIAOASIAQAWQAXAkAKA5IAAACIACAAQAGArAAA+QAAAVgMAvQgKArgHAPIgCAFQgBAJgPAhQgFAMgEAHIgDAFIgBAEQgbA1gaAAQgJAAgCgBIgDgCQgbAvgqAAIgFgBgAgcgiIACAGIABALIgCAcIgBAHQgCANAAAJIAAAGIAAADIAAALIABAcIAAAWQgCAbgLAJQgFALgIAHIgCAWQgBAbAFATQAOAzBAACIABAAQAYgDAVghQAQgZADgQQACgEACgHIAAgBQAFgNADgOQAFgWADgpQADgrADgTIALAAQAEAwAAAqQAAAigUA2IgFANIgDAGIADAAIAEAAIABgBIABAAIAAAAQAIgFAKgSIAAgBIAHgPQAIgOANglQAnhZAAhlQAAgXgDgYIgCAAQgEgZgIgaIgBgFQgDgCgDgJIgIgTIgJgQIgCgCIgGgJQgPgXgGgFQgsgjgMgDIgBgBQgFgCgJgCIgOgEQgQgDgVAAQgHAAgLACIgBABQgKAAgLAEIgLADQg/ALgpBCQgMATgJATIAAAAIABAAQgEADAAAFIgBACIgDAJIAAABIgEARIAAABIgDANIgBAGIgDARIgCATIgDAQIgBAOIgBANIABBTQAAAfAYAhIALARIACABIAMAIQA3ALAVgYIAHgEIAEgGQAHgKABgLIAAgFIAAgaIgBgVIAAgIQgBg8AQgag");
	this.shape.setTransform(0,17);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD7B53").s().p("AAUEwIgOgBIgQgEIgFgCQgWgGgRgSQgZgaAAgmQAAgKADgTIABgCQgRAGgXAAQgQAAgNgFIgDgBQgUgDgYgbQgFgGgGgLIgBgBIgEgGQgFgJgDgJQgFgNAAg2QAAhJAGgrIADgVIABgEIACgOIAGgXIAEgPIAAgBIAAgBIAAAAIAAgBIACgFIACgJIAGgMQAIgSAIgKIAdghQAHgDAJgLQAZgQAhgKQAKgFATgFQAUgGAKAAQAJgDADAAIAFABQA/gJA3AzQAOANALAOIAOASIAQAWQAXAkAKA5IAAACIACAAQAGArAAA+QAAAVgMAvQgKArgHAPIgCAFQgBAJgPAhQgFAMgEAHIgDAFIgBAEQgbA1gaAAQgJAAgCgBIgDgCQgbAvgqAAIgFgBgAgcgiIACAGIABALIgCAcIgBAHQgCANAAAJIAAAGIAAADIAAALIABAcIAAAWQgCAbgLAJQgFALgIAHIgCAWQgBAbAFATQAOAzBAACIABAAQAYgDAVghQAQgZADgQQACgEACgHIAAgBQAFgNADgOQAFgWADgpQADgrADgTIALAAQAEAwAAAqQAAAigUA2IgFANIgDAGIADAAIAEAAIABgBIABAAIAAAAQAIgFAKgSIAAgBIAHgPQAIgOANglQAnhZAAhlQAAgXgDgYIgCAAQgEgZgIgaIgBgFQgDgCgDgJIgIgTIgJgQIgCgCIgGgJQgPgXgGgFQgsgjgMgDIgBgBQgFgCgJgCIgOgEQgQgDgVAAQgHAAgLACIgBABQgKAAgLAEIgLADQg/ALgpBCQgMATgJATIAAAAIABAAQgEADAAAFIgBACIgDAJIAAABIgEARIAAABIgDANIgBAGIgDARIgCATIgDAQIgBAOIgBANIABBTQAAAfAYAhIALARIACABIAMAIQA3ALAVgYIAHgEIAEgGQAHgKABgLIAAgFIAAgaIgBgVIAAgIQgBg8AQgag");
	this.shape_1.setTransform(0,17);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#EFCFA0","#E7A96D"],[0.255,1],1.9,4,0,1.9,4,18.2).s().p("Ag1DlQgFgTABgcIACgVQAIgHAFgLQALgJACgbIAAgWIgBgdIAAgKIAAgDIAAgGQAAgJACgNIABgHIACgcIgBgLIgCgGIgJAAQgQAZABA9IAAAIIABAUIAAAbIAAAFQgBAKgHALIgEAGIgHADQgVAZg3gLIgMgIIgCgBIgLgRQgYghAAgfIgBhTIABgNIABgPIADgPIACgUIADgQIABgGIADgNIAAgCIAEgRIAAAAIADgKIABgBQAAgFAEgDIgBgBQAJgTAMgTQAphBA/gMIALgDQALgDAKAAIABgBQALgCAHAAQAVAAAQADIAOADQAJACAFADIABABQAMADAsAjQAGAFAPAWIAGAJIACADIAJAQIAIATQADAJADACIABAFQAIAaAEAZIACAAQADAYAAAXQAABlgnBYQgNAmgIAOIgHAPIAAABQgKASgIAEIgBABIgBAAIgEAAIgDAAIADgFIAFgOQAUg1AAgjQAAgpgEgxIgLAAQgDAUgDArQgDAogFAXQgDAOgFANIAAABQgCAGgCAFQgDAQgQAZQgVAggYADIgBABQhAgCgOgzg");
	this.shape_2.setTransform(0,17.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#EFCFA0","#E7A96D"],[0.145,1],0,-0.8,0,0,-0.8,24.7).s().p("AAUEwIgOgBIgQgEIgFgCQgWgGgRgSQgZgaAAgmQAAgKADgTIABgCQgRAGgXAAQgQAAgNgFIgDgBQgUgDgYgbQgFgGgGgLIgBgBIgEgGQgFgJgDgJQgFgNAAg2QAAhJAGgrIADgVIABgEIACgOIAGgXIAEgPIAAgBIAAgBIAAAAIAAgBIACgFIACgJIAGgMQAIgSAIgKIAdghQAHgDAJgLQAZgQAhgKQAKgFATgFQAUgGAKAAQAJgDADAAIAFABQA/gJA3AzQAOANALAOIAOASIAQAWQAXAkAKA5IAAACIACAAQAGArAAA+QAAAVgMAvQgKArgHAPIgCAFQgBAJgPAhQgFAMgEAHIgDAFIgBAEQgbA1gaAAQgJAAgCgBIgDgCQgbAvgqAAIgFgBgAgcgiIACAGIABALIgCAcIgBAHQgCANAAAJIAAAGIAAADIAAALIABAcIAAAWQgCAbgLAJQgFALgIAHIgCAWQgBAbAFATQAOAzBAACIABAAQAYgDAVghQAQgZADgQQACgEACgHIAAgBQAFgNADgOQAFgWADgpQADgrADgTIALAAQAEAwAAAqQAAAigUA2IgFANIgDAGIADAAIAEAAIABgBIABAAIAAAAQAIgFAKgSIAAgBIAHgPQAIgOANglQAnhZAAhlQAAgXgDgYIgCAAQgEgZgIgaIgBgFQgDgCgDgJIgIgTIgJgQIgCgCIgGgJQgPgXgGgFQgsgjgMgDIgBgBQgFgCgJgCIgOgEQgQgDgVAAQgHAAgLACIgBABQgKAAgLAEIgLADQg/ALgpBCQgMATgJATIAAAAIABAAQgEADAAAFIgBACIgDAJIAAABIgEARIAAABIgDANIgBAGIgDARIgCATIgDAQIgBAOIgBANIABBTQAAAfAYAhIALARIACABIAMAIQA3ALAVgYIAHgEIAEgGQAHgKABgLIAAgFIAAgaIgBgVIAAgIQgBg8AQgag");
	this.shape_3.setTransform(0,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-13.5,44.3,61.1);


(lib.princewed_fr_handleft01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E19D59").s().p("AhdECIgDACQgCABgJAAQgaAAgbg1IgBgEIgDgFQgEgHgFgMQgPghgBgJIgCgFQgHgPgKgrQgMgvAAgVQAAg+AGgrIACAAIAAgCQAKg5AXgkIAQgWIAOgSQALgOAOgNQA3gzA/AJIAFgBQADAAAJADQAKAAAUAGQATAFAKAFQAhAKAZAQQAJALAHADIAdAhQAIAKAIASIAGAMIACAJIACAFIAAABIAAAAIAAABIAAABIAEAPIAGAXIACAOIABAEIADAVQAGArAABJQAAA2gFANQgDAJgFAJIgEAGIgBABQgGALgFAGQgYAbgUADIgDABQgNAFgQAAQgXAAgRgGIABACQADATAAAKQAAAmgZAaQgRASgWAGIgFACIgQAEIgOABIgFABQgqAAgbgvgAhzAsQADATADArQADApAFAWQADAOAFANIAAABQACAHACAEQADAQAQAZQAVAhAYADIABAAQBAgCAOgzQAFgTgBgbIgCgWQgIgHgFgLQgLgJgCgbIAAgWIABgcIAAgLIAAgDIAAgGQAAgJgCgNIgBgHIgCgcIABgLIACgGIAJAAQAQAagBA8IAAAIIgBAVIAAAaIAAAFQABALAHAKIAEAGIAHAEQAVAYA3gLIAMgIIACgBIALgRQAYghAAgfIABhTIgBgNIgBgOIgDgQIgCgTIgDgRIgBgGIgDgNIAAgBIgEgRIAAgBIgDgJIgBgCQAAgFgEgDIABAAIAAAAQgJgTgMgTQgphCg/gLIgLgDQgLgEgKAAIgBgBQgLgCgHAAQgVAAgQADIgOAEQgJACgFACIgBABQgMADgsAjQgGAFgPAXIgGAJIgCACIgJAQIgIATQgDAJgDACIgBAFQgIAagEAZIgCAAQgDAYAAAXQAABlAnBZQANAlAIAOIAHAPIAAABQAKASAIAFIAAAAIABAAIABABIAEAAIADAAIgDgGIgFgNQgUg2AAgiQAAgqAEgwg");
	this.shape.setTransform(0,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BD7B53").s().p("AhdECIgDACQgCABgJAAQgaAAgbg1IgBgEIgDgFQgEgHgFgMQgPghgBgJIgCgFQgHgPgKgrQgMgvAAgVQAAg+AGgrIACAAIAAgCQAKg5AXgkIAQgWIAOgSQALgOAOgNQA3gzA/AJIAFgBQADAAAJADQAKAAAUAGQATAFAKAFQAhAKAZAQQAJALAHADIAdAhQAIAKAIASIAGAMIACAJIACAFIAAABIAAAAIAAABIAAABIAEAPIAGAXIACAOIABAEIADAVQAGArAABJQAAA2gFANQgDAJgFAJIgEAGIgBABQgGALgFAGQgYAbgUADIgDABQgNAFgQAAQgXAAgRgGIABACQADATAAAKQAAAmgZAaQgRASgWAGIgFACIgQAEIgOABIgFABQgqAAgbgvgAhzAsQADATADArQADApAFAWQADAOAFANIAAABQACAHACAEQADAQAQAZQAVAhAYADIABAAQBAgCAOgzQAFgTgBgbIgCgWQgIgHgFgLQgLgJgCgbIAAgWIABgcIAAgLIAAgDIAAgGQAAgJgCgNIgBgHIgCgcIABgLIACgGIAJAAQAQAagBA8IAAAIIgBAVIAAAaIAAAFQABALAHAKIAEAGIAHAEQAVAYA3gLIAMgIIACgBIALgRQAYghAAgfIABhTIgBgNIgBgOIgDgQIgCgTIgDgRIgBgGIgDgNIAAgBIgEgRIAAgBIgDgJIgBgCQAAgFgEgDIABAAIAAAAQgJgTgMgTQgphCg/gLIgLgDQgLgEgKAAIgBgBQgLgCgHAAQgVAAgQADIgOAEQgJACgFACIgBABQgMADgsAjQgGAFgPAXIgGAJIgCACIgJAQIgIATQgDAJgDACIgBAFQgIAagEAZIgCAAQgDAYAAAXQAABlAnBZQANAlAIAOIAHAPIAAABQAKASAIAFIAAAAIABAAIABABIAEAAIADAAIgDgGIgFgNQgUg2AAgiQAAgqAEgwg");
	this.shape_1.setTransform(0,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#EFCFA0","#E7A96D"],[0.145,1],-0.2,4.2,0,-0.2,4.2,23).s().p("AgZEZQgYgDgVggQgQgagDgPQgCgEgCgHIAAgBQgFgOgDgNQgFgXgDgoQgDgsgDgSIgLAAQgEAvAAArQAAAiAUA1IAFAOIADAGIgDAAIgEAAIgBgBIgBgBQgIgEgKgSIAAgBIgHgQQgIgNgNgmQgnhZAAhkQAAgXADgYIACAAQAEgaAIgaIABgEQADgCADgJIAIgTIAJgQIACgDIAGgJQAPgWAGgFQAsgjAMgEIABAAQAFgCAJgDIAOgDQAQgDAVAAQAHAAALACIABAAQAKABALADIALAEQA/ALApBBQAMAUAJATIgBAAQAEADAAAFIABACIADAJIAAABIAEARIAAABIADANIABAGIADARIACATIADAQIABAOIABANIgBBTQAAAfgYAhIgLARIgCABIgMAHQg3AMgVgYIgHgFIgEgFQgHgKgBgLIAAgFIAAgaIABgVIAAgIQABg9gQgZIgJAAIgCAGIgBALIACAcIABAHQACANAAAJIAAAGIAAADIAAAKIgBAdIAAAWQACAbALAJQAFAKAIAIIACAVQABAcgFATQgOAzhAACIgBgBg");
	this.shape_2.setTransform(0,24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-6,44.3,61.1);


(lib.princewed_fr_gutOL_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap78();
	this.instance.setTransform(-22.3,-26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.3,-26.4,45,53);


(lib.princewed_fr_cape_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap73();
	this.instance.setTransform(-108.8,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.8,-9,218,221);


(lib.princewed_fr_capOL_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// bow
	this.instance = new lib.Bitmap72();
	this.instance.setTransform(-73,-33.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-33.2,146,67);


(lib.princewed_fr_bodyOL_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(172,150,224,0)","rgba(105,66,198,0.6)"],[0.302,1],-0.8,3,0,-0.8,3,77.2).s().p("ABiEXQgDgDgBgDQgYg8gjh4IgHgUIgchdIghBxIgBABIAAACIgBABQgiB1gXA7QgCADgDADQgDACgFAAQivgEitgeQjhgnh9hDIgEgCQgDgBgCgDQgDgEAAgFQAKhzANhSQAOhcAZhsQABgEAFgDQAEgDAFABQBDAQCFAOQBGAICtANQA0AEBnAGQBxAHAlAAQC1AAB9gJQB/gJEpgxQAFgBAEACQAEADABAFQAZBqAOBdQANBSAKBzQAAAFgDAEQgCADgDABIgDACQh+BDjhAnQitAeivAEQgFAAgDgCg");
	this.shape.setTransform(0,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// gradient 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(22,35,156,0.086)","rgba(35,22,156,0.706)"],[0.173,1],40,9.5,36.3,34.1).s().p("AgyD3Qjggnh+hDIgDgCQgEgBgCgDQgDgEAAgFQAKhzANhSQAOhcAZhsQABgEAFgDQAEgDAFABQBDAQCGAOQBGAICrANQA0AEBmAGQBxAHAnAAQgBAkgDAlQgFA+gBA6IAAgBIgjBxIAAABIgBACIAAABQgjB1gXA7QgCADgDADQgDACgEAAQiwgEirgeg");
	this.shape_1.setTransform(-40.3,20.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(22,35,156,0.086)","rgba(35,22,156,0.706)"],[0.173,1],-41.2,9.3,-37.5,33.9).s().p("Ak0EXQgDgDgCgDQgXg8gkh4IgGgUIgchdQABg6AEg9QADglABgkIABAAQC0AAB+gJQB8gJEqgxQAEgBAFACQADADABAFQAaBqAOBdQAMBSAKBzQAAAFgCAEQgCACgEABIgDACQh+BEjgAnQisAeivAEQgEAAgDgCg");
	this.shape_2.setTransform(40.9,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// texture
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(cjs.SpriteSheetUtils.extractFrame(sbe.loader.get('pg09-anim-wednesday'),13), null, new cjs.Matrix2D(0.386,0,0,0.386,-111,-169.2)).s().p("ABiEXQgDgDgBgDQgYg8gjh4IgHgUIgchdIghBxIgBABIAAACIgBABQgiB1gXA7QgCADgDADQgDACgFAAQivgEitgeQjhgnh9hDIgEgCQgDgBgCgDQgDgEAAgFQAKhzANhSQAOhcAZhsQABgEAFgDQAEgDAFABQBDAQCFAOQBGAICtANQA0AEBnAGQBxAHAlAAQC1AAB9gJQB/gJEpgxQAFgBAEACQAEADABAFQAZBqAOBdQANBSAKBzQAAAFgDAEQgCADgDABIgDACQh+BDjhAnQitAeivAEQgFAAgDgCg");
	this.shape_3.setTransform(0,20.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// shadow
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(55,43,111,0.706)").s().p("ABZDPQgFgDgBgEIAAAAQgYg8gjh5IAAABIgGgUIgYhTIgfBmIgBACIAAAAIgBACIAAABQgjB1gXA7IAAAAQgCAFgEACIAAAAQgEADgFAAQiwgEitgeQizgfh1gyIgCgBIAAgBIgHgtIAAgBIAKhHIAMhdQAEgYAUhBIABgCIACgBIA1ADQBKADAnAFQA0AIAWACQCLAKJfAAQDpAAA+gOIAOgFIABAAIBlgDIA9gCIADABIABACIAFAaIAAABQAAArAHA0IAKBBIAAABIgIBBIgEAjIgBABIgBABQh3A1i7AgQitAeiwAEQgFAAgEgDg");
	this.shape_4.setTransform(0.8,28.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(55,43,111,0.51)").s().p("ABXDSIAAAAQgFgDgCgGQgYg8gjh5IAAABIgGgVIgVhIIgcBcIgBACIAAACIgBABQgjB1gWA7IgBABQgCAFgFADQgFADgGAAQiwgEitgeQi0gfh1gyIgDgCIgBgDIgHgtIAAgBIALhIQAHhBAEgcQAEgXAUhCQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQAAAAABAAIA0ADQBLADAmAFQA0AIAXABQCKALJfAAQDpAAA9gPIAOgEIACgBIBlgDIAAAAIA+gBQAAAAABAAQAAAAABAAQAAAAABABQABAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAABABAAIAEAaIAAABIAAABQAAArAIAzIAJBBIAAACIgIBCIgDAiIgCADIgDACQh3A1i8AgQitAeiwAEQgGAAgFgDgABZDPQAEADAFAAQCwgECtgeQC7ggB3g1IABgBIABgBIAEgjIAIhBIAAgBIgKhBQgHg0AAgrIAAgBIgFgaIgBgCIgCgBIg+ACIhkADIgCAAIgOAFQg9AOjqAAQpeAAiMgKQgWgCg0gIQgngFhKgDIg0gDIgDABIgBACQgUBBgDAYIgNBdIgKBHIAAABIAHAtIABABIABABQB1AyCzAfQCtAeCwAEQAFAAAEgDIABAAQADgCACgFIAAAAQAXg7Akh1IAAgBIAAgCIAAAAIABgCIAfhmIAYBTIAGAUIAAgBQAjB5AZA8IAAAAQAAAEAFADg");
	this.shape_5.setTransform(0.8,28.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(55,43,111,0.322)").s().p("ABVDVQgGgEgCgHIAAAAQgYg7gjh5IgBgBIgGgUIABAAIgSg9IgZBRIgBACIAAAAIAAABIAAACQgkB1gXA7IAAACQgDAFgFAEQgGADgHAAQixgDitgeQi0ggh2gyIgEgDIgCgEIgGgtIAAgDIAKhHQAHhCAFgbQADgYAUhCQABgEADgCQADgCAEABIA0ADQBLACAnAGQA0AHAWACQCLAKJeAAQDoAAA9gOIANgEIAEgBIBlgDIAAAAIA9gCQAEAAADADQADACABAEIAEAaIAAABIAAABQAAArAIAzIAJBBIAAACIgIBCIgDAiIgCAFIgEADQh4A1i8AhQiuAeiwADQgHAAgGgDgABiDVQCwgECtgeQC8ggB3g1IADgCIABgDIAEgiIAIhCIAAgCIgKhBQgHgzAAgrIAAgBIAAgBIgFgaQAAAAAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAQAAAAgBAAIg9ABIAAAAIhlADIgCABIgOAEQg9APjpAAQpfAAiKgLQgXgBg0gIQgngFhKgDIg0gDQgBAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQgUBCgEAXQgEAcgIBBIgKBIIAAABIAHAtIABADIACACQB1AyC0AfQCtAeCxAEQAGAAAFgDQAEgDADgFIAAgBQAXg7Ajh1IABgBIAAgCIABgCIAchcIAVBIIAGAVIAAgBQAjB5AYA8QACAGAFADIAAAAQAFADAGAAg");
	this.shape_6.setTransform(0.8,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(55,43,111,0.133)").s().p("ABUDYIgBAAQgIgFgCgIQgYg9gjh4IgGgTIAAgBIgOgzIgWBHIAAACIgBAAIAAABIAAACQgjB2gYA7IAAABQgDAHgGAEIgBAAQgGAEgIAAQixgEiugeQi1ggh1gxQgDgCgCgDQgDgCAAgEQgEgXgCgWIAAgDIAKhHQAHhCAFgcQADgYAUhCQABgFAEgCQAEgDAFAAIA0ADIABAAQBKADAnAGQA0AHAWABQCLALJeAAQDnAAA9gPIANgDIAFgBIBlgDIA9gCQAFAAAEADQAEADABAFIAFAaIAAACIAAABQAAAqAHAzIAJBBIAAAEIgHBCIgEAiIgDAGIgFAEQh4A1i9AhQitAeixAEQgIAAgGgEgABVDVQAGADAHAAQCwgDCugeQC8ghB4g1IAEgDIACgFIADgiIAIhCIAAgCIgJhBQgIgzAAgrIAAgBIAAgBIgEgaQgBgEgDgCQgDgDgEAAIg9ACIAAAAIhlADIgEABIgNAEQg9AOjoAAQpeAAiLgKQgWgCg0gHQgngGhLgCIg0gDQgEgBgDACQgDACgBAEQgUBCgDAYQgFAbgHBCIgKBHIAAADIAGAtIACAEIAEADQB2AyC0AgQCtAeCxADQAHAAAGgDQAFgEADgFIAAgCQAXg7Akh1IAAgCIAAgBIAAAAIABgCIAZhRIASA9IgBAAIAGAUIABABQAjB5AYA7IAAAAQACAHAGAEg");
	this.shape_7.setTransform(0.8,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.6,-7.2,163.3,58);


(lib.princewed_fr_body_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// collar line
	this.instance = new lib.Bitmap68();
	this.instance.setTransform(-74.6,-124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.6,-124.9,149,205);


(lib.princewed_fr_belt_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tag
	this.instance = new lib.Bitmap74();
	this.instance.setTransform(-77.2,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.2,-18.5,154,37);


(lib.princewed_fr_armright_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap75();
	this.instance.setTransform(-29.3,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.3,-8.9,96,143);


(lib.princewed_fr_armleft_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#E3E8E7","#C2C9CD"],[0.271,1],48.5,5.5,0,48.5,5.5,12.4).s().p("AjcLCQhGgJgngLQg3gQgmgeIgZgVIgLgLIgGgHIgBgBIAAAAIgCgDIgCgCIgCgBIAAAAIgCgMIAAgCQgEglAAgyIABgBQAKiWADgUQAYiZBBinIABAAQAchIAkhNIAEgIIgBgBQBhjaB4iRIAEgFIAEgGIAEgFIAFgFIAAAAIADgFIACAAIAAgCIAVgVIACgBIABgCIABAAIAAgBIACgBIAAgBQAsgtAsgbQAcgSAcgLQAtgSAagIQAMgEALgDIABACIAMgEQAegGASAEQAJgBAJABIASAAIAOADIAXAHIAaALIABABQAGAFAEABQAZAQAYAZIAAABQAeAiANAqIAAABIABACIAAAAQAPBBABA7IAAATQgEBHgRA6QgSA5guBKQguBJgZAaIgBABIAAAAIgFAFQgNAZgcAvIgmBDIgBACIgGAOIgCAFIgLAZIAAAAIgHAVIgEAMIgQAvQgaBFgIAdQgoCQgsDJIABAAIAAAAIgDANIgBAIQAAAEgFADIgIAGQgSAJgZAGQgvANhCAAQg2AAhCgJgAAspnQgyAkg3A9IgDADIAAABIgDAEIgCABIAAAAIgBABIgCAEIgGAHIgCACIAAABIgHALIgIAJIgHANQgTAUgaAvQgmA1gkA/IgIAQIgKAQIgLAUIgIATIgEAIIgVAwIgCAFIgBACIgRApIgUAwQgPAggRAyIgSA4IgKAaQgXBDgEAbQgTBDgIAyQgIAxgDBVIgCADIABBEIABA7IAAAEIAMAJIADACQAQAQAOAJQA/AoB7ARQBbAMA/gHQAygFA6gSIADgBIABgFIAAgBIAAgDIABgDIACgHIAAgBIAEgaIACgFIAAgBIAAgFIACgHIAAgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABgFQAVifBJjRQAuh/AthWIAAAAIAFgGIABgBQABgGALgNIAAgBIAFgIIACgCIACgEIAFgHIABAAIADgEIACgDIACgEIACgCIABgBIABgCIAEgFIAAgBIACgBIADgFIADgFIADgDIAAgBIACgBIAFgHIAIgJIAAAAQAVgaAggzQAshHASg2QAQg4ADhDIAAAAIAAgVQgBg3gOg9IAAgBIAAgCIAAACQgMgmgbgeIAAAAQgZgcgZgNQgCgCgFgDIgOgGIgBAAIgBgBIgKgDIgFgCIgBAAIgDgBIgFgBIgNgBIgFAAQgNgDgRABIgOABIgPACIgBgCQgPAEgJAAIgTAGQgZAHgsATIgBAAQghANgjAZgAl1ACIABAAIAAAAg");
	this.shape.setTransform(-18.5,62.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(11));

	// base color
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#EDEFEE","#C2C9CD"],[0.271,1],-18.6,-0.5,0,-17.6,0,29.1).s().p("AjaKqQh8gQg+gpQgQgKgRgRIgMgJIgCg+IAAhFIABgCQAEhWAHgxQAIgxAThDQAFgcAXhCIAJgaIASg4QASgzAPggIAUgwIARgpIABgBIACgFIAGgNQgOgDABgJQACgLAageQAJgLAFgCIAIgRIALgPIAIgQQAkhAAlg0QAbgwATgUIAHgMIAHgJIAHgMIABgBIABgBIAGgHIADgEIABgBIAAgBIABAAIADgFIABAAIACgDQBchnBSghIAAAAQAtgSAYgIIAUgFQAIgBAQgDIABACIAOgDIAPgBQAQgBANADIAFABIANAAIAFABIADACIABAAIAFACIAKADIACAAIAAAAIAOAHQAGACABADQAaANAYAcIABAAQAbAeALAlIABABIAAABQAQBIgCBAIAAABQgCBDgRA3QgRA2gsBIQggAygVAbIgBAAIgIAJIgFAGIgBACIAAAAIgEADIgDAGIgDAEIgBACIgBAAIgDAGIgBABIgBABIgCADIgCADIgDADIgDAFIAAAAIgFAHIgCADIgCACIgFAJIAAABQgLANgCAFIgBAAIgEAHIgBAAQgtBWgtCAQhJDQgVCfIgBAFQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABIAAACIgBAHIgBAGIAAAAIgBAGIgEAZIgBACIgCAJIAAAEIgBABIAAAEQg8ATg0AGQgWACgZAAQgvAAg7gIg");
	this.shape_1.setTransform(-18.4,62.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.3,-8.9,95.7,143.1);


(lib.princewed_fr_handrightcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.princewed_fr_handright01("synched",0);
	this.instance.setTransform(0,4.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-9,44.3,61.1);


(lib.princewed_fr_handleftcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.princewed_fr_handleft01("synched",0);
	this.instance.setTransform(0,-4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.2,-10,44.3,61.1);


(lib.PW2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// prince wed_fr_head comp_01
	this.instance = new lib.princewed_fr_headcomp_01("single",0);
	this.instance.setTransform(-28.8,-47.1,1.36,1.36,5.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:-118.2,x:-14.3,y:-206.9},0).wait(1).to({rotation:5.3,x:-14.5,y:-206.1},0).wait(1).to({rotation:5.4,x:-14.8,y:-204.8},0).wait(1).to({rotation:5.5,x:-15.1,y:-203.3},0).wait(1).to({rotation:5.6,x:-15.5,y:-201.7},0).wait(1).to({rotation:5.7,x:-15.8,y:-200.4},0).wait(1).to({regY:0,rotation:5.8,x:-32.2,y:-39.8,startPosition:69},0).wait(1).to({regY:-118.2,rotation:5.9,x:-16,y:-200.8},0).wait(1).to({rotation:6.1,x:-16.2,y:-202.9},0).wait(1).to({rotation:6.3,x:-16.4,y:-205.5},0).wait(1).to({rotation:6.5,x:-16.7,y:-207.9},0).wait(1).to({rotation:6.6,x:-16.8,y:-209.6},0).wait(1).to({rotation:6.7,x:-16.9,y:-210.5},0).wait(1).to({regY:0,x:-35.6,y:-51.2,startPosition:66},0).wait(11).to({startPosition:66},0).to({rotation:5.8,x:-32.2,y:-39.8,startPosition:69},7).to({rotation:5.2,x:-28.8,y:-47.1,startPosition:0},7).wait(1));

	// prince wed_fr_cap OL_01
	this.instance_1 = new lib.princewed_fr_capOL_01("single",0);
	this.instance_1.setTransform(-32.4,12,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:0.3,scaleX:1.36,x:-32.5,y:12.5},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-32.7,y:12.8},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-33,y:13.2},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-33.3,y:13.8},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-33.7,y:14.4},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-33.9,y:14.9},0).wait(1).to({regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-34.1,y:14.8},0).wait(1).to({regY:0.3,scaleX:1.4,skewX:4.3,skewY:4,x:-34.3,y:14.5},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-34.8,y:13.2},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-35.3,y:11.6},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-35.8,y:10.2},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-36.1,y:9.1},0).wait(1).to({scaleX:1.36,rotation:3,x:-36.3,y:8.6},0).wait(1).to({regY:0,scaleX:1.36,x:-36.4,y:8},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-34.1,y:14.8},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-32.4,y:12},7).wait(1));

	// prince wed_fr_belt_01
	this.instance_2 = new lib.princewed_fr_belt_01("single",0);
	this.instance_2.setTransform(-44.7,128.3,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-0.2,scaleX:1.36,x:-44.9},0).wait(1).to({scaleX:1.37,rotation:5.5,y:128.6},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-44.7,y:129.2},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,y:129.8},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-44.5,y:130.4},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-44.4,y:130.9},0).wait(1).to({regX:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-44.1,y:131.2},0).wait(1).to({regX:-0.2,scaleX:1.4,skewX:4.3,skewY:4,x:-44.3,y:130.6},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-44.1,y:129.3},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-44,y:127.8},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-43.7,y:126.4},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-43.6,y:125.4},0).wait(1).to({scaleX:1.36,rotation:3,y:124.9},0).wait(1).to({regX:0,scaleX:1.36,x:-43.3,y:124.7},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-44.1,y:131.2},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-44.7,y:128.3},7).wait(1));

	// prince wed_fr_body OL_01
	this.instance_3 = new lib.princewed_fr_bodyOL_01("single",0);
	this.instance_3.setTransform(-45,133.9,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:21.7,scaleX:1.36,x:-47.9,y:163.3},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-47.7,y:163.6},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-47.4,y:164.2},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-47.1,y:164.8},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-46.8,y:165.4},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-46.5,y:165.9},0).wait(1).to({regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-44.1,y:136.8},0).wait(1).to({regY:21.7,scaleX:1.4,skewX:4.3,skewY:4,x:-46.2,y:165.6},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-45.9,y:164.4},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-45.6,y:162.8},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-45.2,y:161.5},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-45,y:160.5},0).wait(1).to({scaleX:1.36,rotation:3,x:-44.9,y:160},0).wait(1).to({regY:0,scaleX:1.36,x:-43.3,y:130.4},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-44.1,y:136.8},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-45,y:133.9},7).wait(1));

	// prince wed_fr_gut OL_01
	this.instance_4 = new lib.princewed_fr_gutOL_01("single",0);
	this.instance_4.setTransform(-51.9,195.4,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:0.1,regY:0.1,scaleX:1.36,x:-51.6,y:195.6},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-51.4,y:195.9},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-51,y:196.4},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-50.6,y:197.1},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-50.1,y:197.7},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-49.8,y:198.2},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-49.7,y:198.4},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.4,skewX:4.3,skewY:4,x:-49.3,y:197.9},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-48.8,y:196.7},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-48.3,y:195.2},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-47.7,y:193.9},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-47.4,y:192.9},0).wait(1).to({scaleX:1.36,rotation:3,x:-47.2,y:192.4},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:-47.3,y:192.1},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-49.7,y:198.4},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-51.9,y:195.4},7).wait(1));

	// prince wed_fr_lower leg left_01
	this.instance_5 = new lib.princewed_fr_lowerlegleft_01("single",0);
	this.instance_5.setTransform(-112.2,255.3,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:-0.4,regY:45.3,scaleX:1.36,x:-118.7,y:316.7},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-118.3,y:317.1},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-117.8,y:317.9},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-117.2,y:318.8},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-116.5,y:319.8},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-115.9,y:320.5},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-110.4,y:259.6},0).wait(1).to({regX:-0.4,regY:45.3,scaleX:1.4,skewX:4.3,skewY:4,x:-114.9,y:320.5},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-113.5,y:319.6},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-111.8,y:318.5},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-110.3,y:317.5},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-109.2,y:316.8},0).wait(1).to({scaleX:1.36,rotation:3,x:-108.6,y:316.4},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:-104.6,y:254.8},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-110.4,y:259.6},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-112.2,y:255.3},7).wait(1));

	// prince wed_fr_leg left_01 
	this.instance_6 = new lib.princewed_fr_legleft_01("single",0);
	this.instance_6.setTransform(-102.1,162,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:0.2,regY:36.2,scaleX:1.36,x:-106.7,y:211.2},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-106.6,y:211.6},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-106.4,y:212.3},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-106.1,y:213.3},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-105.9,y:214.2},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-105.7,y:214.9},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-102.2,y:166.3},0).wait(1).to({regX:0.2,regY:36.2,scaleX:1.4,skewX:4.3,skewY:4,x:-105.2,y:214.9},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-104.3,y:213.9},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-103.3,y:212.7},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-102.4,y:211.6},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-101.7,y:210.8},0).wait(1).to({scaleX:1.36,rotation:3,x:-101.3,y:210.3},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:-98.9,y:161.1},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-102.2,y:166.3},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-102.1,y:162},7).wait(1));

	// prince wed_fr_lower leg right_01
	this.instance_7 = new lib.princewed_fr_lowerlegright_01("single",0);
	this.instance_7.setTransform(-2.7,265.6,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:0.9,regY:45.5,scaleX:1.36,x:-7.4,y:327.4},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-6.7,y:327.6},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-5.4,y:327.9},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-4,y:328.3},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-2.6,y:328.7},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-1.4,y:329.1},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:2.8,y:267.5},0).wait(1).to({regX:0.9,regY:45.5,scaleX:1.4,skewX:4.3,skewY:4,x:-0.4,y:328.6},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:0.4,y:327.1},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:1.3,y:325.4},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:2.1,y:323.7},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:2.7,y:322.6},0).wait(1).to({scaleX:1.36,rotation:3,x:3,y:322},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:5.2,y:260},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:2.8,y:267.5},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-2.7,y:265.6},7).wait(1));

	// prince wed_fr_leg right_01
	this.instance_8 = new lib.princewed_fr_legright_01("single",0);
	this.instance_8.setTransform(5.9,172.8,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:-0.4,regY:35.2,scaleX:1.36,x:0.7,y:220.4},0).wait(1).to({scaleX:1.37,rotation:5.5,x:1.2,y:220.6},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:2,y:220.9},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:2.9,y:221.3},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:3.9,y:221.7},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:4.7,y:222},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:9.4,y:174.6},0).wait(1).to({regX:-0.4,regY:35.2,scaleX:1.4,skewX:4.3,skewY:4,x:5.2,y:221.5},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:5.4,y:220},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:5.7,y:218.2},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:6,y:216.6},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:6.1,y:215.4},0).wait(1).to({scaleX:1.36,rotation:3,x:6.2,y:214.8},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:9.3,y:166.8},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:9.4,y:174.6},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:5.9,y:172.8},7).wait(1));

	// prince wed_fr_body_01
	this.instance_9 = new lib.princewed_fr_body_01("single",0);
	this.instance_9.setTransform(-43.4,121.5,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:-0.2,regY:-22.5,scaleX:1.36,x:-40.6,y:91.1},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-40.5,y:91.4},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-40.6,y:92},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,y:92.6},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,y:93.2},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,y:93.7},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-42.7,y:124.5},0).wait(1).to({regX:-0.2,regY:-22.5,scaleX:1.4,skewX:4.3,skewY:4,x:-40.6,y:93.3},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-40.7,y:92.1},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-40.8,y:90.5},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,y:89.1},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,y:88.1},0).wait(1).to({scaleX:1.36,rotation:3,x:-40.9,y:87.5},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:-42.2,y:117.9},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-42.7,y:124.5},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-43.4,y:121.5},7).wait(1));

	// prince wed_fr_arm left_01
	this.instance_10 = new lib.princewed_fr_armleft_01("single",0);
	this.instance_10.setTransform(-87.6,-11.2,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({regX:-18.5,regY:62.6,scaleX:1.36,x:-121.2,y:71.1},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-121.5,y:71.7},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-122,y:72.5},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-122.5,y:73.5},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-123.1,y:74.5},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-123.7,y:75.3},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-91.5,y:-7.2},0).wait(1).to({regX:-18.5,regY:62.6,scaleX:1.4,skewX:4.3,skewY:4,x:-123.8,y:75.4},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-123.4,y:74.4},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-123.1,y:73.4},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-122.6,y:72.4},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-122.4,y:71.7},0).wait(1).to({scaleX:1.36,rotation:3,x:-122.3,y:71.2},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:-92.7,y:-12.6},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-91.5,y:-7.2},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-87.6,y:-11.2},7).wait(1));

	// prince wed_fr_arm right_01
	this.instance_11 = new lib.princewed_fr_armright_01("single",0);
	this.instance_11.setTransform(28.1,0.3,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({regX:18.7,regY:62.6,scaleX:1.36,x:45,y:87.5},0).wait(1).to({scaleX:1.37,rotation:5.5,x:45.3,y:87.7},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:45.8,y:87.8},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:46.4,y:88},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:47,y:88.1},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:47.4,y:88.3},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:28.1,y:1.6},0).wait(1).to({regX:18.7,regY:62.6,scaleX:1.4,skewX:4.3,skewY:4,x:47.3,y:87.6},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:46.7,y:85.9},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:45.9,y:83.9},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:45.3,y:82.1},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:44.8,y:80.8},0).wait(1).to({scaleX:1.36,rotation:3,x:44.5,y:80.1},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:23.5,y:-6.5},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:28.1,y:1.6},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,y:0.3},7).wait(1));

	// prince wed_fr_hand left comp
	this.instance_12 = new lib.princewed_fr_handleftcomp("single",0);
	this.instance_12.setTransform(-163.5,136,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regY:20.5,scaleX:1.36,x:-166.3,y:164},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-166.6,y:164.6},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:-166.9,y:165.5},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-167.3,y:166.7},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:-167.7,y:168},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-168.1,y:169},0).wait(1).to({regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-166.1,y:141.7},0).wait(1).to({regY:20.5,scaleX:1.4,skewX:4.3,skewY:4,x:-167.8,y:169.1},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-166.7,y:168.4},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:-165.5,y:167.6},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-164.4,y:166.9},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:-163.6,y:166.3},0).wait(1).to({scaleX:1.36,rotation:3,x:-163.1,y:166},0).wait(1).to({regY:0,scaleX:1.36,x:-161.6,y:138.1},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-166.1,y:141.7},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-163.5,y:136},7).wait(1));

	// prince wed_fr_hand right comp
	this.instance_13 = new lib.princewed_fr_handrightcomp("single",0);
	this.instance_13.setTransform(71.5,158.2,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({regY:21.5,scaleX:1.36,x:68.7,y:187.3},0).wait(1).to({scaleX:1.37,rotation:5.5,x:69.4},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,x:70.4},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:71.6,y:187.4},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,x:72.9},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:73.9,y:187.5},0).wait(1).to({regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:76.7,y:158.4},0).wait(1).to({regY:21.5,scaleX:1.4,skewX:4.3,skewY:4,x:74.2,y:186.6},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:73.9,y:184.8},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,x:73.5,y:182.7},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:73.1,y:180.8},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,x:72.8,y:179.4},0).wait(1).to({scaleX:1.36,rotation:3,x:72.7,y:178.6},0).wait(1).to({regY:0,scaleX:1.36,x:74.2,y:149.2},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:76.7,y:158.4},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:71.5,y:158.2},7).wait(1));

	// prince wed_fr_cape_01
	this.instance_14 = new lib.princewed_fr_cape_01("single",0);
	this.instance_14.setTransform(-29.1,-32.8,1.36,1.36,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:0.1,regY:101.5,scaleX:1.36,x:-42.6,y:104.7},0).wait(1).to({scaleX:1.37,rotation:5.5,x:-42.5,y:105},0).wait(1).to({scaleX:1.37,rotation:0,skewX:5.3,skewY:5.2,y:105.5},0).wait(1).to({scaleX:1.38,skewX:5,skewY:4.9,x:-42.4,y:106.1},0).wait(1).to({scaleX:1.39,skewX:4.8,skewY:4.6,y:106.7},0).wait(1).to({scaleX:1.4,skewX:4.5,skewY:4.3,x:-42.3,y:107.2},0).wait(1).to({regX:0,regY:0,scaleX:1.4,skewX:4.4,skewY:4.1,x:-31.8,y:-30.1},0).wait(1).to({regX:0.1,regY:101.5,scaleX:1.4,skewX:4.3,skewY:4,x:-42.3,y:106.9},0).wait(1).to({scaleX:1.39,skewX:4,skewY:3.8,x:-42.2,y:105.6},0).wait(1).to({scaleX:1.38,skewX:3.7,skewY:3.5,y:104.1},0).wait(1).to({scaleX:1.37,skewX:3.4,skewY:3.3,x:-42.3,y:102.8},0).wait(1).to({scaleX:1.37,rotation:3.2,skewX:0,skewY:0,y:101.8},0).wait(1).to({scaleX:1.36,rotation:3,y:101.2},0).wait(1).to({regX:0,regY:0,scaleX:1.36,x:-35.2,y:-36.8},0).wait(11).to({startPosition:0},0).to({scaleX:1.4,rotation:0,skewX:4.4,skewY:4.1,x:-31.8,y:-30.1},7).to({scaleX:1.36,rotation:5.7,skewX:0,skewY:0,x:-29.1,y:-32.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.5,-416,396.6,797.6);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.PW2("synched",0,false);
	this.instance.setTransform(246,472.5,1,1,0,0,0,-17.1,-3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(626.6,444.1,396.6,797.6);

})(window.animPG09Wednesday = window.animPG09Wednesday||{});