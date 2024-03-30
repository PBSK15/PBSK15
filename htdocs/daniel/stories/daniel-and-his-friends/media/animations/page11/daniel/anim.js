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



(lib.Bitmap12 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.danielfur = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.zz_Danunisweatertexturesmall = function() {
	this.spriteSheet = sbe.loader.get('pg11-anim-daniel');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.daniel_fr_sweater_01_stretch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shdw grdnt around neck
	this.instance = new lib.Bitmap17();
	this.instance.setTransform(-109,-176.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109,-176.7,218,279);


(lib.daniel_fr_hoodunderlay_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AAFIXIgHAAIgXgBIgLgCQgngKgvgZQhIgtgNgFIgJgGIgcgWQg7gogOgKQg/gygggVQgZgQgOgDQgZgSgYgPIhLgwQgKgCgLgMIgHgHQgEAAgDgDQgYgTgmgUIg9gaIgwgVQgpgBgYgEIgTgEIgBAAIABABIgFABQgPAAglgmQgjgkgNgZQgbg5AAgsQAAhTAnhAQAagsAsgdQAEgJAYgLQAVgKAcgHQAJgHAcgCQAcgFASAAIgBAAIBVgkQBEgaA9gSQAdgKAvgIQApgJAggEQAPgEAZgDQAKgDANgBIAKgCQBOgQA0gCQBDgDA6ABIACAAQBZgBBDAGQBAAFBmATQAqACA5AMQAtAIAeAKQA8ARBDAaIAlAOQAhAFA/AXQARgFAqAIQAbACAJAHQAbAHAVAKQAYALADAJQArAdAbAsQAmBAAABTQAAAsgbA5QgNAZgiAkQgkAmgQAAIgFgBIACgBIgCgDQgNADgQAAIgbgDIgCAAQgMAHgKAEIgyAWIg8AaQgmAUgXATIgBAAQgCADgDAAIgHAHQgMAMgIACIhMAwIgwAhQgNADgZAQQggAVg+AyQgNAKg8AoIgbAWIgJAGQgMAFhIAtQg0AcgrAJIgXABIgLAAgAh6kDQiVATg/AaQgpAQgRAXQgNARABAcQAAAlApBQQAnBHAcAfIACABQAPAWAgAoIAWAUIATAVQAYAZAdAXQBAAyA1AOQASAFARAAQAVAAAcgKIAkgLQAYgNAdgTQAyghAXgXIAzg4QAegnAPgPQAbgfAlhHQAphPAAglQAAgUgHgPIgCgDIgKgPQgSgSghgOIgSgHIglgLQghgIgpgHQgNgDgMgBQhdgIg3gHIgyAAIgZAAQgqAAgsAFgALGlwIABgCIgBAAIAAACg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-53.6,199.7,107.2);


(lib.daniel_fr_hood_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hood string hole
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-99.4,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.4,-59.5,198,109);


(lib.daniel_fr_pullstringright = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8BD96").s().p("AgWALIABAAQAEAAAHgDIACABIAAAAIgCABIgFACIgCAAIgCACIgCABIgBgEgAAfAAIAAAAQAAgGgJgDIADgCIAHAGQAAAAABAAQAAAAAAAAQABAAgBgBQAAAAAAAAIABgCIgFgFIAAgBIAEABIABADQADAHACABIACgCIAAACQAAAAAAABQAAAAAAABQgBAAAAAAQAAAAAAAAIgDAAIgDAAIgCAAIgBAAgAgogJIABACIACAAIABACIgBADIABABQgDgDgBgFgAgogKIABAAIgBABgAgngKIABAAIAAABIgBgBgAANgLIACAAIAAAAIgCAAg");
	this.shape.setTransform(2.4,37.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDA483").s().p("AgLAvIgEgFQgDgEAAgDIAAgDIABgBIACAAIAFAGQAGAHAIAAIAMgBIAAAAIACgBQAHgDAFgFQAHgHACgFQAEgDABAFIAAACIgBADQgCAFgIAJQgJAJgIADIgFABQgMAAgKgJgAgiAGIgDgDIgBgBIAAgBIABgBIAAgEIACAAIACADQAEACAFAAIAAAAIACAAQAHAAAIgFIACgBQAMgIAFAAIAKABIAEABQADABACACIgDgBIAAABIAEAFIAAACQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAIgHgGIgCACIgBAAQgDgCgDAAIgBAAIgCAAIgBAAQgDABgEADIgKAFQgLAGgIAAQgDAAgFgDgAgngFIgCAAIAAAAIgCgDIAAgCIAAgBIABAAIABgCIAFgGIABgDQAGgEAPAAQAHAAAHADIAGABIgGABIAAAAIgSAAQgHAAgGAIIgDAEQgBAAAAABQAAAAAAAAQgBAAAAABQAAAAAAABIAAAAIgDABgAghgdIACgBIADAAIgFABgAAMggIgBgBIACACIgBgBgAAXgpIgDgCIgFgCIgDgBIgGABIgHAAIgNAAQgGAAgBgEIAAgBQAOgFATAAQAEAAALAFIAKAFQACADAAADIgCADIgBACQgDgEgKgDgAApgqIABgBIAAADIAAABIgBgDg");
	this.shape_1.setTransform(2.5,37.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6B893").s().p("AgKAvIgFgGIAAgCIAAgCIACgCQAEACAEAFQADADAGAAQAMAAALgJIAMgKIAAABIAAADIAAACQgCAFgGAHQgGAFgHADIgCABIgLABQgIAAgHgHgAgXAbQgIgBgFgFQgEgFABgDIAAAAIACAAIADAEQAFADADAAQAIAAALgHIAKgHQAEgDADAAIACAAIACAAQAEAAADABIAAAAQAJADAAAGIAAABIgBAEIgCACIgDgEIgCgCQgEgFgCABQgJAAgKAIIgIAFQgHAEgEAAgAAhADIgBgCQgDgBgDgBIgEgBIgJgBQgGABgMAFIgCABQgMAHgFAAIAAAAQgEAAgFgEIgCgDIgBgBIAAgBQAAgBAAAAQABAAAAgBQAAAAAAAAQABAAAAAAIAGACIAFABQAJAAAPgMIABgBIgCgBIAAAAIAGgBQAGACAEAAIADAAIgDgCQAPABAFADQAHADAAAIIAAAAQgBADgCAEIgCABQgCAAgDgIgAgpAEIABgBIABABIABABIAAABIgCAAgAAVgSIgIgDIgBgBIAAAAIgGAAIAAgDIAAgBIAAgFQAKAAAIADIAMAGIAAgCIABgBIACgEQAAgCgCgDIgKgGQgLgEgEAAQgSAAgOAEIAAABIgLAGIgBAAIgBgBIgCACIgBgCIAAABQgFAAgDADIABgCQADgBADgCIADgFIAAAAIADAAIAAgBQADgJAPgDIgBADIABACIAFgBQAfgHAQAQIACABQAAABAAABQAAAAAAABQABAAAAAAQABABAAAAIAAABIAAABIAAABIgCAAIACADIAAAEIACAEQgBAMgDAEQgFgHgPgGgAATggIgIgCIAEgBIAGADIACABIgEgBg");
	this.shape_2.setTransform(2.5,36.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E7D6BC").s().p("AghAlIAAgBIABABIABAAIAAABIgCgBgAggARIAEgEIAAADIACADIgCADIgEAGgAgLARIgCgBIACgCIABAAIgBADgAAPALIACAAIAAABIgCgBgAgXAAIABgCIACAAIAAABIgCABgAAZglQAFAAAEABIgBABIgIgCg");
	this.shape_3.setTransform(1.3,32.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7E5CA").s().p("AAAAyQgCgDgCAAIgGgBIgBAAIgBgBIAIgGQAKgIAJAAQACAAAEAFIACABQgBAQgPABQgHAAAAgEgAAjALQgGgDgOAAQgSgKgUACIAAgCIAAAAIgDACIgDAAIgDAAIgCABIAAAAQgLAFAAAKIAAACIgBABIgBAAQgCgBAAgGIAAgHIAAgJQABgDADgBQADgDAFgBIAAgBIABACIACgCIABABIABAAIAKgFQABAEAGAAIANAAIgCABIAAABQABACAEAAIAEAAIAAAEIgCAAIACABIAAADIAGABIABAAIAHACQAQAGAFAGQADgDABgLIgCgEIgBgDIAAgBIAAgDIABgBIAAgBIAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIgDgBQgPgQgfAHIgGABIAAgCIAAgEQgOADgEAJIgBAAIgBACIgEAEQgCADgDABIgBAAQgDAAgBgDIgBgDQAAgFAKgKIAEgEQAEgFAJgEIAQgFIAHgBIAPgCQAKAAAFABQAJADAAAHIAAABQAKAHAAAIIAAAGQgBAEgCABQAAABABAAQAAABAAABQAAAAABABQAAAAAAABQACACAAAGIAAABIABAFQAAAGgCAEQgCAHgEABIgCABQAAgKgGgDgAgsAAIAAAKIADgGIADgDIgCgBIgBgEIgDAEgAgmAKIACgCIgBADIgFAGIAEgHgAAFgOIAGgBIADABIgEABIgFgBg");
	this.shape_4.setTransform(2.6,34);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E1CCAD").s().p("AAiA8QAIgIACgFQgCAHgEAEIgHAIQgGAFgIABQAIgCAJgKgAARA8IACgBIgCABgAgSA4QgCgDAAgEIAAgMIADgDIACAAIAEgBIADgCIAFABQADABAAADQABADAIAAQAOAAABgQIAEAEIACgCIAAgDIABAAIADgBIADgBIACABQAAAAABAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIAAgBQADgEAAgDIAAAAIACgBQgCAGgDAFIAEAIIABALIAAADQgBgFgFACIAAgCIAAgDIAAgBIgLAKQgLAJgNAAQgGAAgDgDQgEgFgEgCIgBACIAAADIAAABIgCABIgBAAIAAADQAAADADAEIgEgDgAgXASQAFAAAMgGQgIAHgIAAIgBgBgAgmANIAAgBIgBgBIAAAAIABAAIADgBIABABIgDABIAAAEIgBgDgAgcAJIgFgCIACgEQAHgGAHAAIARAAIADABIgBAAQgPAMgKAAIgFgBgAgqAFIgBgBIAAAAIAAgCQAAgJALgEIAEgCIAEgBIACAAIAAAAQAVgCASAMIADABIgDABQgFAAgGgCIgFgBQgHgEgIAAQgOAAgGAFIgDACIgEAEIAAADgAAYgUQgIgDgJAAIgEgBQgFAAAAgBIAAgBIACgBIAGgBIAFABIAJACIADABQALAEADADIAAACIgNgFgAgOhAQAMgJAGACIAGABIAEABIAIABIABAAQAFgCADAEIABABQgGgCgJAAIgQADIgGABIgRAEIAIgFg");
	this.shape_5.setTransform(2.4,35.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F7E5CA").s().p("AgECWQgFgDAAgFQAAgFAFgDQAEgEAIAAQAIAAAFAEQAHADAAAFQAAAFgHADQgFAEgIAAQgIAAgEgEgAgLBuQgCgDAAgEQAAgQAOAAQAOgBACAKQgPgOgLAMQABAGAKACQAJADAFAAQgCALgOAAQgJAAgCgGgAAIBOQgTgCgCgUQgBgOAHgMQAIAFAHAJIALAMQACAOgKAHIgCABIgBAAgAADAZQAMAAADARgAgEgEIgGgKQgIgOALgLIAWAPQABALgFAJIgBADIgGABQgEAAgEgEgAgVhRQgDgMAIgIIAUAPQACANgHAHIgDAAQgOAAgDgPgAgTiKIgFgDIgBgDIgBgDQgBgNAXATQAAAAAAAAQAAABAAAAQgBAAAAABQAAAAgBABQgDACgDAAQgEAAgDgCg");
	this.shape_6.setTransform(1.7,14.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6B893").s().p("AAHCCQgKgDgCgFQAMgMAOAOIAEADIgFAFQgFAAgIgCgAAMBIQgGgJgIgFQgEgEgCgDQAEgKAMAMIAOAQIADAKQABAEgCABIgMgMgAATACIgWgNIgHgFIAKgHQARAEADATQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIAAAAgAgLhKQgKgJgDgFQADgPAQANQAOAMAEAOIgBAEQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgPhvQADADAFAAQADAAADgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQgWgSAAAMIABADQgCgDgBgCIAAgBIgBAAIABgHQAIgDAGAFIAJAHIAAABQABADAAAGIAAADIAAABQAAAAAAAAQAAAAAAAAQAAAAgBABQgBAAgBAAQgHAAgFgFg");
	this.shape_7.setTransform(1.3,11.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1CCAD").s().p("AAADAIgFgGIgFADIgDgcQgJg6AAg6IgBg8QgCgsgIgsIgFgmIgBgCIAAgBIAAgBIAAgCIAAAAIAAgCIAAgBIAAgBIAAAAIgBgBIAAgCIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIAAAAIAAgBIAAgBIAAgBIAAgCIABAAIAAAAIAAgBIAAgBIABAAIAAgBIAAAAIAAgBIABgBIAAAAIABgBIAAgBIAFgEQADgDAEgBIADAAIAGABIABAAIACABQAEAAADACIADACIAAABIABACIAAAAIACAKQAJAkAFAkQAGAoACApQAGBfAKBfIgPAFIgQASgAgCBrQgGADAAAFQAAAEAGAEQAEADAIAAQAIAAAFgDQAGgEAAgEQAAgFgGgDQgFgEgIAAQgIAAgEAEgAADA7QgOABAAAPQAAAFACACQACAHAHAAQAPAAADgMIAEgFIgEgDQgCgKgLAAIgCAAgAgLgCQACACAEADQgHAMABAOQACAUASACQABAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAQAKgIgCgNQADgBgCgEIgDgKQgDgOgLAAQgGgHgEAAQgEAAgCAFgAgNhHIAIAFQgMALAIAOIAHAJQAFAIAIgEIACgDQAEgKgBgKQABAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBQgDgTgQgEgAgbiPQADAFAKAJQgIAJADAMQADAQAQgBQAIgIgCgNQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIABgEQgEgOgNgMQgIgGgFAAQgFAAgCAIgAgbi5IAAAHIABAAIAAABQAAACACADIACADIAEADQAFAFAHAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAAAAAIABgBIAAgDQAAgGgDgDIAAgBIgJgHQgDgDgEAAIgHABg");
	this.shape_8.setTransform(1.5,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.6,-2.5,10.4,45.3);


(lib.daniel_fr_pullstringleft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6B893").s().p("AgaApQgGgIgDgLIAGABIAFAMIAMAEQAGAAAFgBQAHgBAKgCIADADQgIAMgNABQgOAAgKgKgAAZAPQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAIAAgBIgsgKIgBAAQgBgHAFAAIABAFIA4ALIgEAEQgDACgFAAIgDAAgAgKgTIgCgBQgWAAgEgUIAFgEQAVgKAVAHQAGACAAAFIgLgDIglACIABAIQAHAHAJAAIAQgDIAEABIAAACQgEAHgIAAIgCAAg");
	this.shape.setTransform(-2.9,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDA483").s().p("AgbAtQgNgTAHgTIABAAQADALAGAIQAKAKANAAQAOgBAIgMIADACIABAGQgFANgLAHQgKAFgIAAQgMgCgHgJgAAJAFQgJgEgJAAIAAAAIgSgBIgEAAQgHgJADgLIAAgBIgGgHIgCgDIACgTIAGgFQAEAUAWAAIACABQAIABAGgIIAAgCIAYACIADADIAAABIABAAIAJAFIgBAEIgdgCIgcAIQgFAAABAHIABABIAsALIAAABQgBAAAAABQAAABAAAAQAAAAABAAQAAAAABAAQAGABAFgBIgFALIgJACg");
	this.shape_1.setTransform(-3.2,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7E5CA").s().p("AgJA2QgGgCgFgGIAAgBQgBgFAGgCIAAAAQALAAAIAEQAGAEAAAGQgFAFgFAAQgEAAgFgDgAAeAUIgQgCQgJgCAAgHIAEgEIAdACQAEACAAAFIgGAGIgCABIgEgBgAAeAAIgCgBIgCgDIgYgCIgDgBIgEgBQgCgCAAgDQAAgGAJgCIAKADQABgFgGgCQgWgHgUAKQgGgBgCgEIAAgBQAAgMAHgIQAGgIAKAAIAOACQAfAGAGASQAIAHABAKQACACABADIABACIgBAIIgFABg");
	this.shape_2.setTransform(-2.7,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1CCAD").s().p("AASA7IgDgCQgKACgHAAQgGACgFgBIgMgDIgGgMIgFgCIgBAAIACgJIAEACIARACQgGABABAGIAAAAQAFAHAGABQAKAGAJgHQAAgHgGgDIAQAIIgBALgAAjAjIADgEIg3gNIgBgFIAcgIIgEAEQAAAHAJABIAQADQADABADgBIAGgGQAAgFgEgCIAAgEIAFgBIABgIQAEAbgQAaIgDABgAAdgBIAAAAIACAAIgCAAgAghgLIgBgJIAlgBQgJABAAAHQAAACACACIAEABIgRAEQgKgBgGgGgAApgNQgBgKgIgHQgGgSgfgHIgOgBIANgFIABACIAFAAIAEABIgEACQATAFAPARQAHAHABALIACAHQgBgCgCgCgAgqgdIAAACQACAEAGABIgGADIgFAGQAAgIADgIg");
	this.shape_3.setTransform(-2.8,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7E5CA").s().p("AgTBfQgIgJAEgKIAKAIQAIAFAFAIIgBAHQgLgDgHgGgAgDA8QgHgCgGgIQgEgGAAgHIADgFIAVAVIAAAEQgCAEgDAAIgCgBgAgPgLIAEgCIATAUIgCAHIgFADQgSgIACgUgAAEgZQgLgFgDgPQgCgLAIgHIAUAXIAAAOQgEACgDAAIgFgBgAARhHQgEgCgCgEQgGgHgBgJQgCgJAHgBIARAaIgDAGIgEABIgCgBg");
	this.shape_4.setTransform(-1.2,9.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D6B893").s().p("AAABoQgEgJgIgFIgLgHIgJgOQALACALAJIAIAHQADAFABAJQABABAAABQgBABAAAAQAAABAAAAQgBAAAAAAIgBgBgAAFA8IgWgVQgHgEgBgJQAQAFAJALIAEAGIAEAJIgBADIgBAAIgBAAgAgKgHIgFgLIAKAIQAIAGAFAIQADAGgDAEgAgDg4IgEgJQAIACAIAHQAJAIABALQAAABAAABQAAAAAAAAQAAABgBAAQAAAAgBAAgAAahHIgRgaIgDgHQALABAHALIAEAKIAAACIAAACIAAABIAAACIABAAIABABIABAAIAAACIACAIIgBAEg");
	this.shape_5.setTransform(-1.2,8.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1CCAD").s().p("AglCTIABgMIAAgCIABgRIgBgdQAAgiACgZQACgXAFgnIAEgeQADgSADgNIADgOQADgKADgHIAFgMIAEgFQAEgDAFgBIADAAIAFABIAAAAIADABIABAAIAAABIAEABIADACIACADIACADIABACIABAEIABADIAAABIABABIAAABIAAABIAAABIAAACIAAACIAAACIABABIAAACIAAAAIAAACIgBAGIAAADIgBADIgBAGIgCANIgEAUIgCANIgEAdIgGAfIAAACIgBAHQgCARAAAoIAAARIACAVIAAAJIAAALIgFgGQgQgCgSAKIgBABQgBADgDAAIgCAAIgHAEgAgXAvQgDAKAIAJQAHAGALADIAAgHQADACgBgFQgBgJgDgFIgIgHQgLgJgLgCgAgRADIgCAEQgBAIAFAGQAFAHAIADQAEABADgEIAAgEIACAAIABgDIgEgJIgEgGQgJgJgQgFQABAIAHADgAgKgrIgFADQgCAVATAJIAFgEIABgGQADgEgDgGQgFgKgIgGIgKgIgAgDhcQgJAHADALQACAOAMAGQAGACAFgDIABgPQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAgBQgBgLgJgIQgIgHgIgCgAAghgIABgEIgCgIIAAgCIgBAAIgBgBIgBAAIAAgCIAAgBIAAgCIAAgCIgEgKQgHgLgLgBIADAHQgGACACAIQABAJAFAIQADAEADACQACACAFgCIACgHg");
	this.shape_6.setTransform(-1.2,12.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-2.5,10.3,38.3);


(lib.daniel_fr_headcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// New headstates
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-146.8,-206.4);

	this.instance_1 = new lib.Bitmap6();
	this.instance_1.setTransform(-146.8,-206.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[]},1).wait(373));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,-206.4,294,246);


(lib.daniel_34fr_handclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Front Palm Down":0,"Front Palm Up":16});

	// fade
	this.instance = new lib.Bitmap14();
	this.instance.setTransform(-30.2,-16.2);

	this.instance_1 = new lib.Bitmap15();
	this.instance_1.setTransform(-30.3,-15.4);

	this.instance_2 = new lib.Bitmap16();
	this.instance_2.setTransform(-30.6,-15.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},13).to({state:[]},1).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-16.2,65,58);


(lib.daniel_fr_bodygut_overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.576)","rgba(207,146,45,0.086)","rgba(92,0,0,0)"],[0.427,0.839,1],-1.1,88.4,0,-1.9,88.4,228.1).s().p("AAARFIgUAAQgQAAgJgCQhsgFhRgXQgkgKghgNIgDAAIhIgSQgXgHgQgGIhcggQgtgSgXgQQgVgIgcgQIgrgXIAAAAIgBAAIAAgBQgZgPgOgKQgEANgIAAQg0AAhBhkQgZgmgUgoQgIgKgIgOQgLgSgZgxQgagzgKg+IABAAQgNgfgDgPQgGgcAAhhIgBAAIABgaIABgLIAAgDIABgoIAAgPQABhdAPhcIAKg4IAPhRIACgCQAAgEACgEIACgFIALgbIAHgfQADgCACgDIACgEIAAgBIACgFIADgDIACgFQADgQAIgPQAFgJACgKQAGgXAJgXIAKgaIAAgCIAAgCIAAgBIABgEIACgGIAFgJIAKgbIAAgBIABgEIACgFIABgBIACgGIAAgBIAAgBIABgCQAohmA1hhIAAgBQBoi8CGh+QBFhBBTgxQBXg0BogUIAAAAQBvgTBvAFQBGAEBIAJQB5AOBkA6QBXA1BHBDIABAAQCBB8BlC6QBqDBAxDUIABAGIACAOIARBqIgBAxQgBAnAFAmIABAcIABBOQAAAcAFAbIADALIAAAEIABARIAAACIgBAVIgDAFIAAABIgBADIAAAFIABADIABACIABADIAAAbIAAAVIAAABIAAAEQgBA+gGAVQgCAPgMAfIAAAAQgJA+gaAzQgaAxgKASQgJAOgIAKQgUAogZAmQhCBkgzAAQgIAAgEgNQgOAKgaAPIAAAAIAAABIgrAXQgcAQgVAIQgXAQgtASIhdAgQgPAGgXAHIhIASIgDAAQghANgkAKQhSAXhrAFQgJACgQAAIgUAAgAh/QPIACAAIgFgDIADADgAibQJIAAgBIAAgBIgDAAIAAAAIADACgABPQFIABAAIAAgBIgBABgAj9PzIAJABIgJgFIAAAEgAB7PtIgBABIABAAIABgCIgBABgAlAOoIABABIgBgBIgBgBIABABgADAOgIgBAFIAAgBIABgBIAAgCIABgBIAAAAIAAgBIgBABgALgNLIABgCIgBAAIAAACg");
	this.shape.setTransform(-0.5,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AAAAAIAAAAIABAAIAAAAIgBAAg");
	this.shape_1.setTransform(-16.3,102.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-109.7,198.9,218.7);


(lib.daniel_fr_bodygradient_overlay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(0,0,0,0.576)","rgba(207,146,45,0.086)","rgba(92,0,0,0)"],[0.427,0.839,1],-0.6,103.7,0,-0.9,103.7,99.7).s().p("AgnQ1IgSgGQgBAHgDAEQgGAHgQAAQgSAAgbgSIgGAGQgCACgDAAQgFAAgNgHQgMgIgMAAQgOAAgQgMIgCAAQgFAAgTgNQgDAAgDADQgCACgDAAQgzgRgTgZQAAAFgJAAQgLAAgPgPIgOgQQgEAIgKAAQgZAAgWggQgLgPgGgQIgEAFQgBABgHAAQgPAAgPgYQgGgLgKgXIgGAGQgDACgFAAQgVAAgRglQgIgIgGgLQgIgOgMgdIgJADIgNACQgNAAgNgjIgKgiIABgKIgDADQgEAFgKAAQgPAAgFgcIgCgbIAAgHIgCgFIgMgLQgUgSgFgMIgHgYIAAAAQgJgKgQgiQgSglgBgJQgEgCgFAAQgMAAgLgYIgBgCIAAAAQgTAAgdgjQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgPAAgVgYQgLgMgNgRQgCAFgGAAQgdAAgRgfQgIgNgDgMIgHgGIABgMIAAgLIABgCIAAgpIABgOIAAgSIAOibIAAgFIACgHIAKg5IAFgeIABgEIAJguIACgDQAAgEABgDIACgGIAMgbIAHgfQADgCACgDIACgEIAAAAIABgGIAEgDIACgEQADgQAIgQQAFgIACgKQAGgXAJgXIAKgaIAAgCIAAgCIAAgCIABgEIACgFIAFgJIAKgcIAAgBIABgDIACgGIABgBIACgGIAAAAIAAgCIABgBQAnhnA2hhIAAAAQBoi8CFh/QBFhBBTgxQBYgzBogVIAAAAQBvgSBuAEQBHAEBHAJQB6APBkA6QBXA1BHBCIAAAAQCCB9BlC6QBqDBAwDTIACAHIABAOIARBqIgBAwQgBAnAGAmIABAJIAAATIABA9IAAARQAAAdAFAaIADALIAAAFIABAQIAAACIgBAVIgDAFIAAABIgCADIAAAFIABADIACADIABADIAAAbIAAAAIAAAVIAAABIAAAEIAAAIIgBAEIgEACIAAgCIAAgBIgGAGQgQAOgKAAIgCAAIgCAAQgEAAgDgCQgGAIgLAIQgWASgKAAQgGAAgCgFIgBgCQgHAEgGABQgEALgKAMQgPATgTAEIgBADQgHAQgJAAIgCAAIgCADQgVAkgNAGQAAALgDAJQgFARgOAAQgIAAgHgHQgGAhgUAfQgUAfgQAAQAAASgCAFQgGATgbAFQACAKgGALQgIAOgRgCQABASgDAOQgFAVgPAEQgMAEgQAYQgNAUgTAAQgIAAgCgFIgBgEIgdAoQgpA6gEAAQgLAAgGgHIgGgKQgEADgPAZQgNAWgNAAQgDAAgCgCQgDgDgDAAQgCAAgOARQgPAQgPAAQgJAAgCgFIAAgFIgOALQgPALgMAAQgJAAgCgDIAAABQAAAGgXAUQgaAVgSAAQgOAAgBgHIABgKQgqAigMAAQgJAAgFgHIgEgHQgVALgLADIgUAAIgHgGQgFAFgFADQgOAGgiAAQgOAAgHgMgAiAQSIADABIgFgDIACACgAibQNIAAgCIAAAAIgDAAIAAAAIADACgABPQJIABAAIgBgBIAAABgAj+P2IAJACIgIgGIgBAEgAB6PwIAAABIAAAAIABgBIgBAAgAlAOsIABABIgBgCIgBgBIABACgADAOjIgBAGIAAgBIABgCIAAgCIABgBIAAAAIAAAAIgBAAg");
	this.shape.setTransform(-0.5,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("AAAAAIAAAAIABAAIAAAAIgBAAg");
	this.shape_1.setTransform(-16.3,102.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AGXA3IABABIgBABIAAgCgAmKgnIgEgCIgBgBIgBgBIgCgCIgDgFIgCgGIAPAQIAEACIgCABIgEgCg");
	this.shape_2.setTransform(-9.9,92.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(0,0,0,0.706)","rgba(207,146,45,0.137)","rgba(92,0,0,0)"],[0.133,0.51,0.714],-6,29.1,0,-6,29.1,46.3).s().p("AnwBRIgBgBIAAgHIACAAIABABIAAAFIABACIAAABIgDgBgAGaBGIgCgBIgDABQAMgZANgZIABgCIAphHIAWAJIAEADIAAAKIgNAGIgDAEIgIAfIgCAIIgDANQgFgBgBgDIgBgFIgKAPIgCABIgBAAIgEAEIgBADIgBACIgCADIgCACIgBAAIgBAAIAAAAIgDABIgFAAIAAAAIgBABIAAAAIgBABIAAAAIAAACIgBADIgDADQgEADgEABIgBAAIAAAAIgEABIAAABIAAABgAGzg2QADgNgCgNIAMALIgBABIgEAHIgEAJQgCAEgDACIABgIg");
	this.shape_3.setTransform(4.7,81.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#000000","rgba(207,146,45,0.086)","rgba(92,0,0,0)"],[0.176,0.69,0.894],0.7,-92.8,0,0.7,-92.8,192.5).s().p("AggQ9IAAAAIAAAAIgGgFIgFgFIgFgCIgNgEQgBAGgCAEIgBAAIgBACQgGAGgPAAQgSAAgbgTIgGAGQgCADgDAAQgFAAgNgIIgGgDQgJgEgJAAIAAAAQgOAAgQgNIgCAAQgFAAgTgMIgDAAIgDACQgCADgDAAIgWgJQgigPgOgTQAAAEgGABIgDAAQgLAAgPgPIgHgIIgHgIIgCAEQgDADgDABIgGABQgZAAgWghIgCgDIAAAAQgJgOgGgNIgEAEQgBABgHAAQgPAAgPgYIgEgIIgMgZIgGAFIgBABQgDABgEAAQgVAAgRglQgIgHgGgLIgJgSIgCgGIgJgUIgGADIgDABIgHABIgGAAQgNAAgNgjIgIgeIgCgDIABgLIgDAEIgDACQgEACgHAAQgLAAgFgNIAFgIIgBgCIgCgCIAAgDIAAgEIAAgCIgHgJIgBgMIAAgGIgCgFIAAgBIgMgKIgKgKQgMgMgDgIIgDgKIgEgOIAAgBQgFgFgGgLIgOgbQgSglgBgJIAAgBIAAAAQgFgCgEAAQgMAAgLgXIgBgCIAAAAQgGAAgGgDQABgTAHgHQgGgHgIgEIgFgBQgHgCgFgEIgLgGIgJgCQgJgBgJACIgCABQgCgDgDgCIgUgSIgLgIIgCgDIAAABIgHgDIgFgCIgCAAIgEgCIgDgCIgFgBIgCgCIgGgGQgGgGgJgFIgJgFQgFgJgCgJIgGgFIAAgIIAAAAIABgLIAAgBIAAgCIABgoIAAAAIAAgJIAAgDQAChfAOhdIAKg4IAFgCQAAgJABgJQACgMAEgKQAAgNADgLIAGgTQgBgDABgCIAFgLIAAgEQABgFADgDIACgBIAAgCIAAgCQAIgNADgPIAFgTQACgFAEgEQAEgFAGgBIABgBIABAAQAxjKBli6QBpi8CFh+QBFhBBTgxQBYg0BogUIAAAAQBugTBvAEIAAAAQBHAEBHAJQB6APBjA6IABAAQBXA1BHBCIAAAAQCCB9BlC6QBqDBAwDUQAcB9ALCHIgRgGIAAAUIABA8IAAASQAAAOABAOIACANIADASIACAIIAAADIABARIAAACIgBAVIgDAFIAAABIgCADIAAAFIABABIAAADIABACIABADIABACIAAAYIAAABIABAAIAAAZIgBAAIAAAFIgEgBIgEgBIAAAAIgDABIgEAAIgBABIgDABIgCACIgCACIgCACIAAACIgCACIAAABIAAABIAAACIAAABIAAADIAAABIAAABIgBABIAAABIAAABQgFACgEAAIgCAAIgCABQgEAAgDgDIgHAIIgKAJQgWARgKAAQgGAAgCgEIgBgCQgHADgGABQgEALgKANQgPASgTAEIgBAEQgHAPgJAAIgCAAIgCAEQgVAkgNAGQAAALgDAJQgFARgOAAQgHAAgGgGIgCgBQgFAcgQAaIgDgBIgCgCIABgCIAAgDIAAgCIABgCIABgCIgCACIgCACIgBACIgCACIgBACIgDAGIAAADIgBADIgBADIgCACIgDADQgDAKgFAIIgBADQgGAEgGAAIgBAQIgBACIgFAJIgDAEIgBABIgEABIgEgBIgCADIgEAGIAAACIAAABIgKADQACAJgGALQgIAPgRgCIAAAJIAAAAIgDAAIgFgBIAAAAIgBAAIgDAIQgEAKgHAJIgBADIgCAAIgJADIgIAHIgFAIIAAABIAAABIgBADIgDAEIgDAHIgBADIgLAIIAAABIgBADQgCAGgFAFIAAAAIACAFIgIABIgBAAIgFAAIAEgOIACgHIAIghIADgFIAMgFIAAgKIgEgEIgVgJIgpBKIgBACQgOAYgMAZIAEgBIACABIAAAAIAAgBIAAAAIADgBIABAAIABAAQAEgBADgDIAEgEIABgCIAAgCIAAAAIABgBIAAgBIABAAIAAgBIAEAAIAEAAIAAAAIABgBIABAAIACgBIABgDIACgDIABgDIADgDIABAAIACgBIAAAAIgSAaQgpA5gEAAQgLAAgGgHIgDgFIgDgEQgDACgOAWIgCAEQgNAWgNAAQgDAAgCgDQgDgCgDAAQgCAAgOAQQgNAOgOACIgDAAQgJAAgCgFIAAgFIgOAMQgPALgMAAQgJAAgCgEIAAABIAAACQgDAHgUARIgEAEIgzAQQgEgCAAgEIABgKQgWASgOAJIgZAGQgEgCgDgDIgDgGIgBgCIgPAIIAAAAIgRAGIgUAAIgHgFQgEAEgFADIgBAAIAAAAQgIAEgOABIgQABIgBAAIgJABQgFAAgFgCgAE1PWIACAAIgCgBIAAABgAnBOGIABABIADABIgBAAIAAgDIAAgEIgBgBIgCAAIAAAGgAn2NpIADAFIABACIACACIAAAAIAEACIAFACIABAAIgDgDIgQgPIADAFgAHjL+IgBAJQADgDACgDIADgJIAFgHIABgBIgMgMQACANgDANg");
	this.shape_4.setTransform(-0.1,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.9,-109.7,199.6,218);


(lib.daniel_fr_bodygradient_multiply = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(204,159,102,0)","rgba(189,116,51,0.71)"],[0.239,0.863],82.8,39.5,82.8,-188.8).s().p("ABhDAQhWgzg4hQQgog2gbhCQgGgRgEgRIAAABQgQg6gJg/IAAgCIABgBIAAgBIANgBQAKAFALAEIAAAAIABAFIACADIABAEIACAEIABABIABACIACACIAAABIAAACIAAACIABACIAAACIAAABIABACIABACIAAACIABABIAAACIACACIAAADIABAEIABADIABAEIABACIAAACIAAABIAAACIAAACIAAACIAAABIABAEIABADIABAEIAAACQAEAHADAHIAEAOIADALIABADIAAACIAAACIAAABIAAACIACADIABAGIACAFIABAGIAAABIABACIABACIAAABIABACIAAACIABACIABACIAAABIABACIABACIAAACIAAABIABACIABACIABACIACABIgFAGIgDAJIAAADIAAAEIAAAEIABADIABABIACACIACACIADAEIAAABIABACIAHAHIAGAHIAEAFIABACIABACIABACIABABIABACIAFAIIAIAKQACAEAEADQAOAZAXAVQAdAaAgAXIAAACIAAACIgBABIAAACIAAACIAAADIABACIAAACIABACIABACIABACIAIAGIA0AgQgbgMgYgPg");
	this.shape.setTransform(-82.8,79.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(204,159,102,0)","rgba(189,116,51,0.71)"],[0.267,0.863],-4.3,39.5,0,-4.3,39.5,265.8).s().p("AAAOGQgXgFgXAAQheAAhbgSQgggGgegMQhugdhugVQgZgFgXgHQgMgEgLgGQg9gOg2gdQgPgIgNgKQgFgEgGgDIgCgCIgCgCIgGgDIgJgEIgDgCIgLgFIgPgJIgHgEIgGgDIgFgCIgQgMQgRgNgSgLQgIgJgKgHQgUgMgWgLQgPgJgOgMQgLgKgIgLIgFgCIgHABIgFAAIgEgBQgCg3ADg6QAMjtAujUQAxjRBqjBIAAgBQBoi8CFh+QBFhBBTgxQBYg0BogUIAAAAQBvgTBuAFQBHAEBHAJQB6AOBkA6QBXA1BHBDIAAAAQCCB8BlC6QBqDBAwDSQAvDTgBDuIAAAZQgJgHgMgCIAAACIAAACIgBACIgBACIgCAFIgCAFIAAACIAAACIAAACIgBADIgCAGIgFAJIgDAHQgOANgPAKQgYAQgeAHIgDABIgFACIgEACIgCABIgEABIgFABIgGABIgDADIgCACIgDACIgEACQgmAkgfAqQgkAwgyAkQgeAWglAOIgEABIgHABQgxAdgyAaQhUAshkAJQgKABgKADQhPAUhQAAQhAAAhAgNg");
	this.shape_1.setTransform(0,-9.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-98.6,-101,197.2,202.1);


(lib.daneil_tigers_arm_compcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"WITHOUT WATCH":0,"WITH WATCH":29,other:61});

	// watch
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(13.6,59.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({_off:false},0).to({_off:true},12).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daneil_tigers_arm_comp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shade
	this.instance = new lib.Bitmap13();
	this.instance.setTransform(0.1,0);

	this.instance_1 = new lib.Bitmap38();
	this.instance_1.setTransform(13.6,0);

	this.instance_2 = new lib.Bitmap7();
	this.instance_2.setTransform(-60.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2).to({state:[]},1).to({state:[{t:this.instance_1}]},46).to({state:[]},1).to({state:[{t:this.instance_2}]},7).to({state:[]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daniel_fr_bodyunderlay_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel_fr_body gradient_overlay
	this.instance = new lib.daniel_fr_bodygut_overlay();
	this.instance.setTransform(0,-45.3);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// texture
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAAAAIAAAAIAAAAIABAAIAAABIgBgBg");
	this.shape.setTransform(-16.4,57.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(cjs.SpriteSheetUtils.extractFrame(sbe.loader.get('pg11-anim-daniel'),12), null, new cjs.Matrix2D(0.387,0,0,0.387,-53.4,57.1)).s().p("AAARFIgUAAQgQAAgJgCQhsgFhRgXQgkgKghgNIgDAAIhIgSQgXgHgQgGIhcggQgtgSgYgQQgTgIgdgQIgrgXIAAAAIgBAAIAAgBQgZgOgOgLQgEANgIAAQg0AAhBhkQgZgmgVgoIgPgYQgLgSgZgxQgagzgKg+IABAAQgMgfgEgPQgGgcAAhhIgBAAIABgaIABgLIAAgDIABgoIAAgPQABhdAPhcIAKg4IAPhRIACgCQAAgEACgEIACgFIALgbIAHgfQADgCACgDIACgEIAAgBIACgFIADgDIACgFQADgQAIgPQAFgJACgKQAGgXAJgXIAKgaIAAgCIAAgCIAAgBIABgEIACgGIAFgJIAKgbIAAgBIABgEIACgFIABgBIACgGIAAgBIAAgBIABgCQAohmA1hhIAAgBQBoi8CGh+QBFhBBTgxQBXg0BogUIAAAAQBvgTBvAFQBGAEBIAJQB5AOBkA6QBXA1BHBDIABAAQCBB8BlC6QBqDBAxDUIABAGIACAOIARBqIgBAxQgBAnAFAmIABAcIABBOQAAAcAFAbIADALIAAAEIABARIAAACIgBAVIgDAFIAAABIgBADIAAAFIABADIABACIABADIAAAbIAAAVIAAABIAAAEIAAAAQgCA+gFAVQgCAPgMAfIAAAAQgJA+gaAzQgaAxgKASQgJAOgIAKQgUAogZAmQhCBkgzAAQgIAAgEgNQgOAKgaAPIAAAAIAAABIgrAXQgcAQgVAIQgXAQgtASIhdAgQgPAGgXAHIhIASIgDAAQghANgkAKQhRAXhsAFQgJACgQAAIgUAAgAiAQPIADAAIgFgDIACADgAieQHIADACIAAgBIAAgBIgDAAIAAAAgABPQFIABAAIAAgBIgBABgAj9PzIAIABIgIgFIAAAEgAB7PtIgBABIABAAIABgCIgBABgAlAOoIABABIgBgBIgBgBIABABgADAOgIgBAFIAAgBIABgBIAAgCIABgBIAAAAIAAgBIgBABgALgNLIABgCIgBAAIAAACg");
	this.shape_1.setTransform(-0.5,-45.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-155.1,199,219.1);


(lib.daniel_fr_body_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel_fr_body gradient_multiply
	this.instance = new lib.daniel_fr_bodygradient_multiply();
	this.instance.setTransform(1.5,-53.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// daniel_fr_body gradient_overlay
	this.instance_1 = new lib.daniel_fr_bodygradient_overlay();
	this.instance_1.setTransform(0,-45.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// texture
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(sbe.loader.get('pg11-anim-daniel'),12), null, new cjs.Matrix2D(0.387,0,0,0.387,-53.7,57.4)).s().p("AgpQ1IgSgGQgBAHgDAEQgGAHgRAAQgRAAgcgSIgFAGQgCACgDAAQgGAAgMgHQgMgIgMAAQgOAAgQgMIgCAAQgGAAgSgNQgDAAgDADQgCACgDAAQg0gRgSgZQAAAFgJAAQgLAAgPgPIgOgQQgEAIgKAAQgZAAgWggQgLgPgGgQIgEAFQgBABgHAAQgPAAgPgYQgHgLgKgXIgFAGQgDACgFAAQgVAAgRglQgJgIgGgLQgHgOgMgdIgJADIgNACQgNAAgNgjIgKgiIAAgKIgCADQgEAFgKAAQgQAAgEgcIgCgbIAAgHIgDgFIgLgLQgVgSgEgMIgIgYIAAAAQgIgKgRgiQgRglgBgJQgEgCgGAAQgMAAgKgYIgBgCIgBAAQgSAAgegjQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgPAAgVgYQgMgMgMgRQgDAFgGAAQgcAAgRgfQgIgMgDgNIgHgGIAAgMIABgLIAAgCIABgpIAAgOQACheAOhbIAKg5IAQhQIABgDQABgEABgDIACgGIAMgbIAHgfQADgCABgDIACgEIAAAAIACgGIAEgDIABgEQAEgQAHgQQAGgIABgKQAHgXAJgXIAKgaIAAgCIAAgCIAAgCIABgEIABgFIAGgJIAKgcIAAgBIABgDIABgGIABgBIACgGIAAAAIABgCIABgBQAnhnA2hhIAAAAQBoi8CFh/QBFhBBTgxQBYgzBngVIABAAQBugSBvAEQBHAEBHAJQB6APBkA6QBXA1BGBCIABAAQCCB9BlC6QBpDBAxDTIABAHIACAOIARBqIgBAwQgBAnAGAmIABAcIABBOQAAAdAFAaIADALIAAAFIABAQIAAACIgBAVIgDAFIgBABIgBADIAAAFIABADIACADIABADIAAAbIAAAAQAGADAAAQQAAAFgEAFIgDAEIAAAFIgEACIAAgCIAAgBIgHAGQgQAOgJAAIgCAAIgDAAQgEAAgCgCQgGAIgLAIQgWASgKAAQgGAAgDgFIAAgCQgHAEgHABQgDALgKAMQgPATgTAEIgBADQgHAQgKAAIgCAAIgBADQgVAkgNAGQAAALgDAJQgFARgOAAQgJAAgGgHQgHAhgUAfQgTAfgQAAQAAASgCAFQgGATgbAFQACAKgGALQgIAOgRgCQABASgDAOQgGAVgOAEQgMAEgQAYQgOAUgSAAQgJAAgBgFIgBgEIgdAoQgpA6gFAAQgKAAgGgHIgGgKQgEADgPAZQgNAWgNAAQgDAAgDgCQgCgDgDAAQgDAAgNARQgPAQgQAAQgIAAgCgFIgBgFIgNALQgPALgMAAQgJAAgCgDIAAABQAAAGgXAUQgaAVgSAAQgPAAgBgHIACgKQgqAigMAAQgJAAgFgHIgFgHQgUALgLADIgUAAIgHgGQgFAFgFADQgOAGgjAAQgNAAgHgMgAC8QXIABgBIgBAAgAiCQSIACABIgEgDIACACgABMQJIABAAIAAgBIgBABgAB4PwIgBABIABAAIABgBIgBAAgAlCOsIABABIgBgCIgBgBIABACgAC+OjIgBAGIAAgBIABgCIAAgCIABgBIAAAAIAAAAIgBAAgAoJNNIAAgBIgBAAIABABgAqqJmIABAAIgBgBIAAABgALNJEIABAAIAAgBIgBABgArOI5IABAAIgCgCIABACgAL2IoIAAAIIABgKIgBgGIAAAIgAriIjIAAgCIgCgCIACAEgAMmHJIAAACIACgDIgCABg");
	this.shape.setTransform(-0.3,-45.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100,-155.1,200.1,218.4);


(lib.daniel_34fr_armclose_01copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel arm
	this.instance = new lib.daneil_tigers_arm_compcopy("synched",2,false);
	this.instance.setTransform(-72.3,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daniel_34fr_armclose_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel arm
	this.instance = new lib.daneil_tigers_arm_comp("single",2);
	this.instance.setTransform(-72.3,-22.3);

	this.instance_1 = new lib.Bitmap12();
	this.instance_1.setTransform(-95.6,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"single",startPosition:2,loop:undefined}}]}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:49,loop:false}}]},47).to({state:[{t:this.instance_1}]},15).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.2,-22.3,103,138);


(lib.DTtaillikeme = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// *daniel_fr_head comp
	this.instance = new lib.daniel_fr_headcomp("single",0);
	this.instance.setTransform(-27.5,-68.5,1.932,1.932,-13.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-4.4,skewY:-3.7,x:-33.7,y:-20.9},6,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-28.2,y:-78.9,startPosition:1},8,cjs.Ease.get(1)).to({x:-25.4,y:-94.2},11,cjs.Ease.get(1)).to({startPosition:1},2,cjs.Ease.get(-0.98)).to({x:-28.2,y:-78.9,startPosition:0},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-4.4,skewY:-3.7,x:-33.7,y:-20.9},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-13.9,skewX:0,skewY:0,x:-27.5,y:-68.5},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_3-4fr_leg close_01
	this.instance_1 = new lib.daniel_34fr_armclose_01copy("single",49);
	this.instance_1.setTransform(-181.3,24.6,1.807,1.89,0,14.5,16.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({scaleX:1.86,scaleY:1.85,skewX:5.8,skewY:5.6,x:-165.7,y:14.3},4,cjs.Ease.get(1)).to({scaleX:1.87,scaleY:1.83,skewX:12.3,skewY:12,x:-168.6,y:9.6},11,cjs.Ease.get(1)).to({startPosition:49},2,cjs.Ease.get(-0.98)).to({scaleX:1.86,scaleY:1.85,skewX:5.8,skewY:5.6,x:-165.7,y:14.3},11,cjs.Ease.get(-1)).to({scaleX:1.81,scaleY:1.89,skewX:14.5,skewY:16.3,x:-181.3,y:24.6},4,cjs.Ease.get(-1)).to({_off:true},1).wait(13));

	// daniel_fr_hand left_01 copy
	this.instance_2 = new lib.daniel_34fr_handclose_01("single",16);
	this.instance_2.setTransform(-347,111.8,1.998,1.834,0,126.6,127.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.93,scaleY:1.93,rotation:124.1,skewX:0,skewY:0,x:-352.5,y:96.5},3,cjs.Ease.get(-1)).to({scaleX:1.94,scaleY:1.88,rotation:0,skewX:158.4,skewY:156.6,x:-379.4,y:25.5},6,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.88,skewX:123.4,skewY:121.6,x:-352.3,y:89.4},2,cjs.Ease.get(-1)).wait(1).to({scaleX:1.94,scaleY:1.88,skewX:120.1,skewY:118.3,x:-294.2,y:146.7},0).wait(1).to({scaleX:1.93,scaleY:1.93,rotation:-79.7,skewX:0,skewY:0,x:-194,y:163.3,startPosition:2},0).to({scaleX:1.95,scaleY:1.92,rotation:0,skewX:-96.4,skewY:-96.3,x:-155.4,y:150.3},4,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-89.9,skewX:0,skewY:0,x:-173.6,y:144.9},11,cjs.Ease.get(1)).to({startPosition:2},2,cjs.Ease.get(-0.98)).to({scaleX:1.95,scaleY:1.92,rotation:0,skewX:-96.4,skewY:-96.3,x:-155.4,y:150.3},11,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-79.7,skewX:0,skewY:0,x:-194,y:163.3},4,cjs.Ease.get(-1)).wait(1).to({scaleX:1.94,scaleY:1.88,rotation:0,skewX:120.1,skewY:118.3,x:-294.2,y:146.7,startPosition:16},0).wait(1).to({scaleX:1.93,scaleY:1.88,skewX:123.4,skewY:121.6,x:-352.3,y:89.4},0).to({scaleX:1.94,scaleY:1.88,skewX:158.4,skewY:156.6,x:-379.4,y:25.5},2,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:124.1,skewX:0,skewY:0,x:-352.5,y:96.5},6,cjs.Ease.get(1)).to({scaleX:2,scaleY:1.83,rotation:0,skewX:126.6,skewY:127.6,x:-347,y:111.8},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_string left
	this.instance_3 = new lib.daniel_fr_pullstringleft("single",0);
	this.instance_3.setTransform(-21.9,56,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:-34.9,y:83.7},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:-29.7,y:53.1},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-31.6,y:48.4},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:-29.7,y:53.1},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:-34.9,y:83.7},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:-21.9,y:56},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_string right
	this.instance_4 = new lib.daniel_fr_pullstringright("single",0);
	this.instance_4.setTransform(11,50.1,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:-1.3,y:79.8},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:3.4,y:50.3},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:1.8,y:45.7},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:3.4,y:50.3},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:-1.3,y:79.8},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:11,y:50.1},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_hood
	this.instance_5 = new lib.daniel_fr_hood_01("single",0);
	this.instance_5.setTransform(-17.9,-19,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:-26.8,y:11.6},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:-18.7,y:-21.6},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-20.5,y:-25.7},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:-18.7,y:-21.6},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:-26.8,y:11.6},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:-17.9,y:-19},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_sweater_01_stretch
	this.instance_6 = new lib.daniel_fr_sweater_01_stretch("single",0);
	this.instance_6.setTransform(21.2,215.3,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:0,y:239.9},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:-2.1,y:217},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-3.8,y:211.1},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:-2.1,y:217},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:0,y:239.9},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:21.2,y:215.3},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_arm left_01
	this.instance_7 = new lib.daniel_34fr_armclose_01("single",55);
	this.instance_7.setTransform(-154.3,2.7,1.955,1.881,0,-18.1,-22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.93,scaleY:1.93,rotation:-17.9,skewX:0,skewY:0,x:-156.3,y:4.1},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:7.5,skewY:7.7,x:-159,y:25},6,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-14.3,skewY:-14.1,x:-153,y:5.7},2,cjs.Ease.get(-1)).wait(1).to({scaleX:1.97,scaleY:2.01,skewX:-7.9,skewY:-10.7,x:-151.5,y:2,startPosition:62},0).wait(1).to({scaleX:1.88,scaleY:1.99,skewX:17.6,skewY:20.2,x:-167.5,y:12,startPosition:47},0).to({scaleX:1.92,scaleY:1.95,skewX:9,skewY:9.3,x:-153.5,y:-0.1},4,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:15.6,skewX:0,skewY:0,x:-154.8,y:-3.2},11,cjs.Ease.get(1)).to({startPosition:47},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:9,skewY:9.3,x:-153.5,y:-0.1},11,cjs.Ease.get(-1)).to({scaleX:1.88,scaleY:1.99,skewX:17.6,skewY:20.2,x:-167.5,y:12},4,cjs.Ease.get(-1)).wait(1).to({scaleX:1.97,scaleY:2.01,skewX:-7.9,skewY:-10.7,x:-151.5,y:2,startPosition:62},0).wait(1).to({scaleX:1.95,scaleY:1.87,skewX:-14.3,skewY:-14.1,x:-153,y:5.7,startPosition:55},0).to({scaleX:1.95,scaleY:1.87,skewX:7.5,skewY:7.7,x:-159,y:25},2,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-17.9,skewX:0,skewY:0,x:-156.3,y:4.1},6,cjs.Ease.get(1)).to({scaleX:1.96,scaleY:1.88,rotation:0,skewX:-18.1,skewY:-22.6,x:-154.3,y:2.7},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_arm right_01
	this.instance_8 = new lib.daniel_34fr_armclose_01("single",0);
	this.instance_8.setTransform(117.6,-47.6,1.932,1.932,0,-10,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:173.5,x:111.6,y:-8.9},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:175.4,x:118.1,y:-37.4},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,skewY:175.5,x:117.1,y:-41.4},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,skewY:175.4,x:118.1,y:-37.4},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:173.5,x:111.6,y:-8.9},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,skewX:-10,skewY:170,x:117.6,y:-47.6},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_hand right_01
	this.instance_9 = new lib.daniel_34fr_handclose_01("single",0);
	this.instance_9.setTransform(248.1,159.4,1.932,1.932,0,-10,170);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:173.5,x:231.6,y:198},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:175.4,x:227.7,y:182.6},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,skewY:175.5,x:227.4,y:177},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,skewY:175.4,x:227.7,y:182.6},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:173.5,x:231.6,y:198},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,skewX:-10,skewY:170,x:248.1,y:159.4},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_hood underlay
	this.instance_10 = new lib.daniel_fr_hoodunderlay_01("single",0);
	this.instance_10.setTransform(-18.9,-21.3,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:-27.5,y:9.2},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:-19.4,y:-24.2},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-21.3,y:-28.3},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:-19.4,y:-24.2},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:-27.5,y:9.2},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:-18.9,y:-21.3},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_body_01
	this.instance_11 = new lib.daniel_fr_body_01("single",0);
	this.instance_11.setTransform(19.3,213.5,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:-1.8,y:238.1},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:-3.8,y:214.9},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-5.5,y:209.2},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:-3.8,y:214.9},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:-1.8,y:238.1},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:19.3,y:213.5},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

	// daniel_fr_body underlay_01
	this.instance_12 = new lib.daniel_fr_bodyunderlay_01("single",0);
	this.instance_12.setTransform(19.3,213.5,1.932,1.932,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({startPosition:0},3,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,rotation:0,skewX:-7.1,skewY:-6.5,x:-1.8,y:238.1},6,cjs.Ease.get(-1)).to({scaleX:1.92,scaleY:1.95,skewX:-4.5,skewY:-4.6,x:-3.8,y:214.9},8,cjs.Ease.get(1)).to({scaleX:1.93,scaleY:1.93,rotation:-4.5,skewX:0,skewY:0,x:-5.5,y:209.2},11,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(-0.98)).to({scaleX:1.92,scaleY:1.95,rotation:0,skewX:-4.5,skewY:-4.6,x:-3.8,y:214.9},11,cjs.Ease.get(-1)).to({scaleX:1.95,scaleY:1.87,skewX:-7.1,skewY:-6.5,x:-1.8,y:238.1},8,cjs.Ease.get(-1)).to({scaleX:1.93,scaleY:1.93,rotation:-10,skewX:0,skewY:0,x:19.3,y:213.5},6,cjs.Ease.get(1)).to({startPosition:0},3,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450.9,-524,770.4,970.4);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DTtaillikeme("synched",0);
	this.instance.setTransform(837.1,663.8,1,1,0,0,0,-75.7,69.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1037.9,453.9,770.4,970.4);

})(window.animPG11Daniel = window.animPG11Daniel||{});