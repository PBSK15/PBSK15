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



(lib.Bitmap24 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap25 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap26 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap27 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap28 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap29 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap30 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap31 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap36 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap37 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap38 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap39 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap40 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap41 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap42 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap43 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap45 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap46 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap47 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap82 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap83 = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.danielfur = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.danielsweater = function() {
	this.spriteSheet = sbe.loader.get('pg09-anim-daniel');
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.daniel_34fr_daniel_tail_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap40();
	this.instance.setTransform(-102.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.5,-44,144,151);


(lib.daniel_34fr_sweater_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pockets and trim
	this.instance = new lib.Bitmap82();
	this.instance.setTransform(-109.4,-167.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.4,-167.1,220,229);


(lib.daniel_34fr_legfar_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// strips
	this.instance = new lib.Bitmap42();
	this.instance.setTransform(-52.7,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.7,-15.4,95,137);


(lib.daniel_34fr_legclose_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// strips
	this.instance = new lib.Bitmap41();
	this.instance.setTransform(-57.9,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.9,-35,127,179);


(lib.daniel_34fr_hoodunderlay_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// hood
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#990000").s().p("AONE/IAAAAIgBABIABgBgAuJk/IAAAAIAAABIgDABIADgCg");
	this.shape.setTransform(-4.3,-11);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgrCgIAAAAIgBABIABgBgAAsifIABgBIAAABg");
	this.shape_1.setTransform(91,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(sbe.loader.get('pg09-anim-daniel'),22), null, new cjs.Matrix2D(0.227,0,0,0.227,-58.6,-95.4)).s().p("AGSGbQgggJhSghIgKgFIgBAAIhHggIgFgCIgFgCIgNgGIAEgEQAAgBAAgBQAAgBgBAAQAAAAAAgBQAAAAAAAAIgCABIgOAAQgWACgSAHIgCAAIgIAEIhJAGQhBAGguAAQhLAAgpgFIghgGQgKAAgEADIh4gVQhtgTgegMIing+IhIgmIgigOIgKgDIgEgCQgogYgegZIgJgIIgNgMQgdgcgRgdQgdgzAAhPQAAgcAWg6IAAAAIAAgBIABgDIABgCIABgCIAEgJQARgsAOgNQAxgwA1gfQAUgLA1gQIADAAIAEAAIAwgNQA9gQA9gMIAqgHIAJgCQC/gdDmAAQCOAACLAfQClAlDiBcQBpArBUA6QBNA1AoA0IAMAjIgCABIAHAQQACAIAAAbQAABVg8B9IgSAjIAAABIgMATIAAADQgfAwgQATIgBABQgBAFgEADIgQASIgGAHIgEAEIgDACIgEAFQgDAEgFACIgFAFIgIAFIgGADIgEACIgCABIgKAFQgtAVhDAAQhqAAhmgeg");
	this.shape_2.setTransform(0.1,-4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A80000").s().p("AEyGRQg6gWhKgiIgUgJQgPAPgoAGQguAGh1AAQhxAAgbgHIgHgCIgTgBQg0AAhxgbQgqgKhOgWQgpgLgugQQgwgRgVgLIhCgiIgegRIgNgHIgLgIQgigLgsgmIgBgCIgCgCIgFgEIg4g/IgEgHIgBgCQgNgWgJgsQgGgogBggIAAgHQACgpAMgkIAAgBQAGgTAKgRQAXguAsgnIAJgHIAKgIIBagyIAEgCIACgBIADgBQAjgMAcgEQAMgEAQgDQAwgOBJgNIA3gKIAJgBIAJgCIAAABQCpgZC8gFQB5gRC8AoQCnAjCyBGQCoBCBwBHQBcA7ATAoIABADQAMARAGARIAAAAQAOAlAAAyQAAAVgUA+QgXBPglBEQgQAdgQAZQgIAWgdAeIgOARIgHAIIgFAFIgKAKIgEADIgLAKIgMALIgKAHQgPAHgQAFQgTAIgUAGQggAHgiAAQiEAAishCgAC8E/IgEAEIANAGIAFACIAFADIBHAfIABABIAKAEQBTAhAgAJQBlAeBrAAQBCAAAtgVIAKgEIACgBIAEgDIAGgDIAJgFIAEgFQAFgCADgDIAEgFIADgCIAEgFIAGgHIARgSQADgDABgEIACgBQAPgTAggwIAAgDIALgUIABgBIAAAAIgBAAIASgiQA9h+AAhVQgBgbgCgHIgGgQIABgCIgMgiQgng0hOg2QhUg6hpgrQjihcilglQiLgeiOAAQjmAAi/AdIgJABIgqAIQg9ALg9ARIgwAMIgEAAIgDAAQg1AQgTALQg1AfgyAwQgNAOgSArIgEAKIgBABIgBACIgBADIAAABIAAAAQgWA7AAAcQAABPAeAyQAQAdAdAcIANAMIAJAIQAfAZAnAYIAFADIAJACIAiAOIBIAnICnA+QAfALBsATIB4AWQAEgDAKAAIAhAFQApAFBLAAQAuAABBgGIBKgGIAHgDIADgBQARgGAWgCIAPgBIABgBQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAABg");
	this.shape_3.setTransform(0,-5.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.8,-51.8,193.6,93.5);


(lib.daniel_34fr_hoodoverlay_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.instance = new lib.Bitmap43();
	this.instance.setTransform(-97.7,-48.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97.7,-48.9,185,85);


(lib.daniel_34fr_hood_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// string wholes
	this.instance = new lib.Bitmap45();
	this.instance.setTransform(-96.3,-53.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.3,-53.4,194,104);


(lib.daniel_34fr_pullstringfar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap47();
	this.instance.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,16,44);


(lib.daniel_34fr_pullstringclose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap46();
	this.instance.setTransform(-1.5,-1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,13,39);


(lib.daniel_34fr_headcomp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel ear front
	this.instance = new lib.Bitmap83();
	this.instance.setTransform(-101.8,-199.3,0.699,0.699);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).to({_off:true},1).wait(469));

	// daniel ear front
	this.instance_1 = new lib.Bitmap26();
	this.instance_1.setTransform(-101.8,-199.4);

	this.instance_2 = new lib.Bitmap25();
	this.instance_2.setTransform(-101.8,-199.4);

	this.instance_3 = new lib.Bitmap24();
	this.instance_3.setTransform(-101.8,-199.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},40).to({state:[{t:this.instance_3}]},16).to({state:[]},200).wait(336));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-199.4,274,249);


(lib.daniel_34fr_handclose_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"Front Palm Down":0,"Front Palm Up":10,"Front Grip":20,"Profile Palm Down":30,"Profile Palm Up":50,"Profile Point":60,"Finger Tips":70,"Misc.":80});

	// fade
	this.instance = new lib.Bitmap31();
	this.instance.setTransform(-30.2,-16.2);

	this.instance_1 = new lib.Bitmap36();
	this.instance_1.setTransform(-31,-15.4);

	this.instance_2 = new lib.Bitmap39();
	this.instance_2.setTransform(-29.8,-14.6);

	this.instance_3 = new lib.Bitmap38();
	this.instance_3.setTransform(-29.1,-40.7);

	this.instance_4 = new lib.Bitmap37();
	this.instance_4.setTransform(-23.6,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},16).to({state:[]},1).to({state:[{t:this.instance_2}]},13).to({state:[]},1).to({state:[{t:this.instance_3}]},12).to({state:[]},1).to({state:[{t:this.instance_4}]},16).to({state:[]},1).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.2,-16.2,65,58);


(lib.daniel_34fr_bodyunderlaygradient_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(207,146,45,0.106)","rgba(92,0,0,0.251)"],[0.212,0.812,1],0,130.1,0,0,130.1,564.2).s().p("AgQG/QjegHj1g1QhGgPg5gRQgHAAgcgJIgCgBQgPgBgigMIgzgQQhBgVgRgOIgEgHQhyhugni3QgkinAdjGIAIgzIABgLIe2AAIAAAPQABAbAGAaIAAAFIABASIgBAaIgCAGIgBAAIgBAEIAAAGIABACIABADIACAEIAAAdIAAAXIAAABIgBABIAAADQABALAAAKIgFAPIACADIAEgWQAEARADAaIACAgQAAA9ggBQQgiBTg9BQQiKC3jOBGQgcANhaAJIieAPQhEAGgtACgArbEOIAAgCIgCAAIACACgALsBjIgBADQADgCABgEIgDADgAK0BIIAEgKIgBgNIgDAXg");
	this.shape.setTransform(0,70.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-73.4,97.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.7,26,201.5,89.6);


(lib.daniel_34fr_body_grdnt_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(178,139,89,0)","#AD6311"],[0.239,0.863],2.8,197.8,2.8,-179.5).s().p("AISapQhpgihugUQhpgThpgWIhngZQhMgThPAAQgLAAgJgEIhfgnQhUgkhYgTIgMgDQilg6ijhDQhvguhng1QgGgPgMgKQgRgOgRgMIgEgVIgBASIgegSQgGgSgNgNQgpgog1gBIgCgEIgCgHIgBAAIgIADIgFgBIgEgCQgLgIgDgNIgEgQQgGgGgCgJQgBgJAAgKIgBgBIAAAAIgEAAIgHgCIgFgDIgCgDIgDgGIgBgDIgGglIgCgNIgEABQgSgPAAgYIABgnIgFAEQgJgEgCgLIgBgIIgHgEIAAAAQgVgGgRgKIgHgEQgbgJgegCQgfARgjgEIgCgCIgEgDIgDgDQgHgOAEgRIAEgNIgFgRQAGhJAChJIABgFIAAgFIAAAAIABgcQgFgqAFgrIgDgjQgBgSAEgTQABgHAFgFIABgGIADgGQAAgcgCgcQAAgQAFgOQAIgrABgrQABgVAGgTQAAgIABgHQAAgFADgEIAAgQQABgFACgEQAFgZAGgaQAAgPACgQQADgTAGgRQAAgTAEgTQADgQAGgPQgBgFACgEIAHgSIAAgGQABgIAFgFIACgDIAAgDIAAgDQANgVAEgYIAHggQAEgIAGgHQAGgIAJgBIABgCIABgBQBKlOCYkyIAAgBQCck2DIjRQBohsB8hRQCEhVCcghIAAAAQCmgfCmAHIABAAQBqAHBrAPQC2AYCVBfIABAAQCDBYBqBuIAAAAIArAvIgBAFQAPAHARAOQBbBKAeBxQAKAtBGBSQBKBYAVA3QBgD9AJBKQAFAhgDA0QgEBSAAAtQAAAHAfCDQAfCDAAAuQAAARgBALQAfB7ANB9QAOCLAbCHQALAwABAyQABAVAIAMIgIAlQgHAMgDAMIgCABIgDAIIAEANQAEARgHAOIgDADIgEADIgCACQgjAEgfgRQg9AEgwAfIgBAIQgCALgJAEIgFgEIABAnQAAAYgSAPIgEgBIgCANIgGAlIgBADIgDAGIgCADIgFADIgHACIgEAAIAAAAIgBABQAAAKgBAJQgCAJgGAGIgEAQQgDANgLAIIgEACIgFABIgIgDIgBAAIgCAHIgEAKQAGAUgEAYQgDARgMAOIgFADIgDACIgFAAIgBgBQAHAWgCAZQgCAWgQASIgDABIgNAFIgGgDIgHgFIgCgDIgDAHIgCAEQgBAKgCAJIgBAEIAAABQAAAHgDAFIgBAEIAAADIAAADIAAADIgCADIgBADIgCADIgIAGIgHADIgDAAIgGgCIgCgDIgCAEQgDATgMAQQgJALgPACQgNAYgJAaIgKAEQgNAIgKALQgQAFgPAJQgcASgRAbIgRAOIgKACQgRAEgNAJQg/AuhDArQgPALgPAMQgCgIAEgHIgDgDIgPAaQgsAGgpAVIgEgFQgDgGAAgHIAAgBQgFAEgEAIIgNAVIgIAAIgDAAgARXTVIgBAGQAEgEADgGIgGAEgAQDSsIAHgPIgBgSQgCARgEAQg");
	this.shape.setTransform(-2.8,-9.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(96.4,148.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(96.6,148.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(207,146,45,0.106)","rgba(92,0,0,0.251)","#000000"],[0.239,0.475,0.929],-147.8,78,0,-147.8,78,200).s().p("AAAgBIAAAAIAAADIAAgDg");
	this.shape_3.setTransform(144.8,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.9,-179.8,300.4,341.2);


(lib.daneil_tigers_arm_comp2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"WITHOUT WATCH":0,"WITH WATCH":29,other:61});

	// watch
	this.instance = new lib.Bitmap28();
	this.instance.setTransform(-6.5,0);

	this.instance_1 = new lib.Bitmap29();
	this.instance_1.setTransform(-40.9,0);

	this.instance_2 = new lib.Bitmap30();
	this.instance_2.setTransform(-58.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},31).to({state:[]},1).to({state:[{t:this.instance_1}]},21).to({state:[]},1).to({state:[{t:this.instance_2}]},3).to({state:[]},1).wait(13));

	// shade
	this.instance_3 = new lib.Bitmap27();
	this.instance_3.setTransform(12.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},1).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daniel_34fr_bodyunderlay_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gradient
	this.instance = new lib.daniel_34fr_bodyunderlaygradient_01();
	this.instance.setTransform(-0.2,-54.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// texture
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(sbe.loader.get('pg09-anim-daniel'),21), null, new cjs.Matrix2D(0.407,0,0,0.407,-46.5,-130.8)).s().p("AgQG8QjegIj1g1QhGgPg5gRQgHAAgcgJIgCgBQgPgBgigMQgWgGgdgKQhBgVgRgOIgEgGQhyhvgni2QgkioAdjGIAIgyIAAgFIe3AAQAAAgAHAdIAAAFIABASIgBAaIgCAGIgBAAIgBAEIAAAGIABADIABADIACADIAAAdIAAAXIAAABIgBABIAAAEQABAKAAALIgFAPIACADIAEgXQAEARADAaIACAgQAAA9ggBQQgiBUg9BQQiKC2jOBGQgcANhaAJIieAPQhEAHgtACgArbEKIAAgCIgCAAIACACgALsBfIgBAEQADgDABgEIgDADgAK0BEIAEgKIgBgNIgDAXg");
	this.shape.setTransform(-0.2,17.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-73.6,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.9,-28.1,201.5,89.6);


(lib.daniel_34fr_body_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// line
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#BB5D06","#CF922D"],[0.302,0.663],5,-32,0,5,-32,50.4).s().p("ABrBbIgDgBQgeAHgcgPQgKgBgIgDIgBgBIgEgCIgEgCIgCABIgCABIgCACQgkgBgkgUQgeAFgdgRIgCgCIgBgBIgDgBIgGgBIgBAAIgCACIgBABIgBABQgfgHgcgOIgGgDIgCgDIgCgCIgEgBIAAACIgBACIgBACIgBADQgtABgqgYIgBgBQgvAAgogYIgEgCIgCgCIgCgCIAAAAIgFgCIAAgBIgCgBIgCgCIgCgCIgBgCIgFgBIgDgEQgEgEABgGIABgCIABgBIABgBIACAAIABAAQAaATAdANQARAHAFgCIgBgDIgBgEIABgEIACgCIADAAIADgBQAJAGAKAEIAFADQAiAQAlAIIAAgBIABgCIAAgCIABgCIABgCIAFgBIAJgBIAMAHIAHAFIABAAIAFABQAIAHAKAFQALAFADgEIAAgDIABgCIABgBIACgBQALAAAKAHIAMAJIACABIAFABIADADIABABIACABIALADQABABABAAQAAAAABAAQAAAAABAAQAAAAAAgBIAAgCIAAgDQABAAAAgBQAAAAABgBQAAAAABgBQAAAAAAAAIAEgDIAJAFIAIAGQAVAJAVAIIAEABIACAAIABgCIAAgCIACgCIADgBIACAAQAfAMAhALIAFACIABABIAGgBIAAgCIACgBIADgBIADgBIAuAPIAAgBQASgPAYAEIAEACIADACIACABIAAAAIACAAIAEAAIACgCIACgCIAPgEIAWgTIAGgGIADgBIACAAIAGAAIAEABIADADIABACQANgJAKgNIAJgIIAEgBIAHgBIAKgIIAEgEIACgCQADgFAFgDIALgQQADgEAEgCQAGgCAGADIACACIACAFQACADAAADQAXgRAOgcIAKgQIAAgBIABgBIAAgBIAAgCIABgDIACgCIAFgEQABgEACgDQADgDADAAQALAFgBAMIgBACQAAAEgDADQgGATgJASQgFALgJAHIAAACIgBACIgdAbIgGAHQgGACgEAEIgEAEQgKAEgIgGIgCgCIgBgDIgBgEIgBgBIgCACIgBACIgBACIgFAFIgEAEQgHADgFAFIgEAFIgHAAIgFAAQgNAQgRALIgIAHQgHACgEgFIgCgCIgBgCIAAgBIgCABIgJAJIgGAGIgFABIgIAAIgDACIgGADIgEABIgJADIgCgBIgGgBIgCgCIgCgCQgGgBgFABIAAAAQAGABACAFIABACIAAACIgBACIgBACIgBAAIgDABIgDABQgTgEgSgJg");
	this.shape.setTransform(22.6,49.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(3));

	// gradient
	this.instance = new lib.daniel_34fr_body_grdnt_02();
	this.instance.setTransform(2.3,-49.5,0.667,0.667);
	this.instance.filters = [new cjs.ColorFilter(1, 0.8203125, 1, 1, 0, 0, 0, 0)];
	this.instance.cache(-155,-182,304,345);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(207,146,45,0.09)","rgba(92,0,0,0.251)","#000000"],[0.239,0.475,0.929],0,0,0,0,0,0.2).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-75.6,46.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance}]}).to({state:[]},1).wait(3));

	// texture
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(cjs.SpriteSheetUtils.extractFrame(sbe.loader.get('pg09-anim-daniel'),21), null, new cjs.Matrix2D(0.407,0,0,0.407,-46.7,-57.6)).s().p("AEpRhIgDAAIgDABIgBACIgBACIgFAAIgCAAIgFgCQghgLgggNIgDABIgDABIgCABIAAACIgBACIgBAAIgFgBQgVgHgUgJIgIgGIgKgFIgDACQgBABAAAAQAAAAgBABQAAAAAAABQgBAAAAABIAAACIAAADIgMgFIgDABIgCgBIgCgBIgCgCIgFgCIgDAAIgLgKQgKgGgLgBIgCABIgCACIAAACIAAACQgEAEgKgFQgLgEgIgHIgEgCIgCgBIgGgFIgNgHIgIABIgDABIgBACIgBACIAAACIgBACIAAABQglgJgjgPIgEgDQgKgEgJgGIgDAAIgDABIgCABIgBAFIAAAEIABACQgEADgSgIQgdgMgZgTIgCAAIgCAAIgBAAIgBACIgBACQAAAFADAEIAEAEIAEACIACABIABACIACADIACABQgbgDgXgQQgmgNglgSIgHgEQgQAHgQgPQgIgCgFgFIgEgEIgOgKIgGgEQgbAOgUgYIgBgCIAAACIgDgCQgQAIgPgMIgGgEIgZgTIgWgKQgkAFgfgfQgIgJgMgEQgFgGgIgFIgIgEQgUACgNgQIgDgEQgRgQgNgTIgMgQIgEgJIgCgEIgBAAQgLAAgJAIIgFAHIgMgWQgVgtgpgPQgJABgIAFIgFADIgBgMIAAAAIgBAAIgCAAIgFgCIgDgCIgCgCIgCgEIAAgCIgEgYIgCgJIgDAAQgMgKABgPIAAgaIgDACQgGgCgBgIIgBgFIgFgDQgOgEgLgHIgFgCQgSgGgUgCQgVAMgXgDIgBgBIgDgCIgCgCQgEgKACgLIADgJIgDgLQADg0ACg0IABgMIABgvQABhwAPhsQALhNAOhLIACgCQAAgFACgEIACgGIALgdIAIgjQADgCABgDIACgFIACgGIADgDIACgFQADgSAIgRQAFgKACgKQAHgaAIgZIAKgdIAAgCIAAgCIAAgCIACgEIABgGIAFgLIAKgeIAAAAIABgEIACgGIABgCIADgGIAAgBIAAgCIABgBQAnhxA1hrQBojQCGiLQBFhIBTg2QBXg4BogXIABAAQBugUBvAEQBHAFBHAKQB6AQBjBAQBYA6BHBJQCCCJBlDOQBpDUAxDpIABAIIACAPIARByIgBA4QgBAsAGApQACA7AAA6QgBAmAIAjIAAAFIABASIgBAaIgCAFIgBABIgBADIAAAGIABADIABADIACADIAAAdIAAAYIAAAAIgBABIAAAEQABALAAAKIgFAPIADAJQACALgEAKIgCACIgDACIgBABQgXADgVgMQgpADggAVIgBAFQgBAIgGACIgDgCIAAAaQABAPgMAKIgDAAIgCAJIgDAYIgBACIgCAEIgCACIgDACIgFACIgCAAIgBAAIgBANQgBAGgEAEIgCAKQgDAJgHAFIgCACIgEAAIgFgBIgBgBIgBAFIgDAHQAEAOgDAPQgCAMgHAJIgEACIgCABIgDAAIgBAAQAFAOgCARQgBAPgKAMIgCABIgJADIgEgCIgFgEIgBgCIgCAFIgBADIgDANIAAACIAAABQAAAEgCAEIgBACIAAACIAAACIAAACIgBACIgBACIgBACIgFAEIgFADIgCgBIgEgBIgCgCIgBADQgCANgIAKQgGAIgKABQgMAXgIAZQgDAGgEAGQgDgMgKgCIAAgBQACgMgLgFQgDAAgDADQgDADgBADIgFAFIgBACIgBACIgBACIAAABIAAAAIAAACIgKARQgOAcgYARQABgDgCgEIgCgEIgDgCQgFgDgGACQgFACgDAEIgKAQQgFADgDAEIgDAEIAAgBIgEAFIgJAJIgIAAIgEABIgJAJQgKANgNAIIgBgCIgCgCIgFgCIgGAAIgBAAIAAABIgEABIgGAFIgWATIgOAEIgCACIgDACIgDAAIgBgBIgCgBIAAACIgCgBIgDgCIgDgBQgZgFgSAQIAAAAIgugOgALqM6IgBAEQADgCABgEIgDACgAKyMfIAEgKIgBgMIgDAWg");
	this.shape_2.setTransform(0,-56.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(-66.9,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AGeBNQgDgFgFgBIgBAAQAGgBAFABIACACIADACIgHACgAG5BJIAGgDIgFAGIgBgDgAK8gUIABABIgBAAgAq8hMIACAAIAAACIgCgCg");
	this.shape_4.setTransform(-3.5,51.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.7,-169.7,200.4,229.7);


(lib.daniel_34fr_armfar_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.daneil_tigers_arm_comp2("synched",0,false);
	this.instance.setTransform(70.7,-32,1,1,0,-1.7,178.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.daniel_34fr_armclose_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel arm
	this.instance = new lib.daneil_tigers_arm_comp2("synched",2,false);
	this.instance.setTransform(-72.3,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.DT = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// daniel_3-4fr_hood overlay_01
	this.instance = new lib.daniel_34fr_hoodoverlay_01("single",0);
	this.instance.setTransform(36.8,-352.6,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({skewX:1.5,skewY:-178.5,x:31.7,y:-352.8},7,cjs.Ease.get(1)).wait(1).to({regX:-5.2,regY:-6.5,skewX:1.4,x:39,y:-361.5},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:38.4,y:-360.8},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:37.4,y:-359.6},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:35.9,y:-358},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:34,y:-355.9},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:31.8,y:-353.4},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:21.7,y:-341.6},0).wait(1).to({regX:-5.2,regY:-6.5,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:26.2,y:-353.8},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:23.8,y:-356.7},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:21.7,y:-359.1},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:20.1,y:-361.1},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:18.7,y:-362.7},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:17.8,y:-363.8},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:17.2,y:-364.4},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:10.5,y:-355.1},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:21.7,y:-341.6},6).wait(1).to({regX:-5.2,regY:-6.5,scaleY:1.38,skewX:-1,skewY:-180.7,x:25.9,y:-354.2},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:23.2,y:-357.4},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:21,y:-360},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:19.3,y:-362.1},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:18,y:-363.5},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:17.3,y:-364.4},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:10.5,y:-355.1},0).wait(1).to({regX:-5.2,regY:-6.5,x:17.1,y:-364.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:10.5,y:-355.1},0).wait(1).to({regX:-5.2,regY:-6.5,skewX:-4.2,skewY:-184.2,x:18.3,y:-364.6},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:22,y:-364.1},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:21.2,y:-354},0).wait(1).to({regX:-5.2,regY:-6.5,skewX:0.2,skewY:-179.8,x:34.1,y:-362.6},0).wait(1).to({skewX:1.5,skewY:-178.5,x:38.7,y:-362},0).wait(1).to({skewX:2.5,skewY:-177.5,x:41.9,y:-361.6},0).wait(1).to({skewX:3,skewY:-177,x:43.9,y:-361.4},0).wait(1).to({regX:0,regY:0,skewX:3.2,skewY:-176.8,x:36.8,y:-352.6},0).wait(1));

	// *daniel_3-4fr_head comp
	this.instance_1 = new lib.daniel_34fr_headcomp("single",26);
	this.instance_1.setTransform(59.5,-405.1,1.4,1.4,0,9.1,-170.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({skewX:6.2,skewY:-173.8,x:52.9,y:-406,startPosition:33},7,cjs.Ease.get(1)).wait(1).to({regX:35.1,regY:-74.9,skewX:5.9,skewY:-174.1,x:14.5,y:-515.1},0).wait(1).to({skewX:5.3,skewY:-174.7,x:12.5,y:-513.7},0).wait(1).to({skewX:4.2,skewY:-175.8,x:9.2,y:-511.5},0).wait(1).to({skewX:2.7,skewY:-177.3,x:4.6,y:-508.2},0).wait(1).to({skewX:0.7,skewY:-179.3,x:-1.3,y:-503.9},0).wait(1).to({skewX:-1.7,skewY:-181.7,x:-8.4,y:-498.5},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:40.6,y:-391.3,startPosition:40},0).wait(1).to({regX:35.1,regY:-74.9,skewX:0,skewY:-180,x:-14.5,y:-500.5},0).wait(1).to({skewX:3.9,skewY:-176.1,x:-12.3,y:-507.5},0).wait(1).to({skewX:7.3,skewY:-172.7,x:-10.3,y:-513},0).wait(1).to({skewX:10,skewY:-170,x:-8.5,y:-517.2},0).wait(1).to({skewX:12.1,skewY:-167.9,x:-7.1,y:-520.3},0).wait(1).to({skewX:13.7,skewY:-166.3,x:-6.1,y:-522.4},0).wait(1).to({skewX:14.6,skewY:-165.4,x:-5.5,y:-523.6},0).wait(1).to({regX:0,regY:0,skewX:14.9,skewY:-165.1,x:15.4,y:-410.1,startPosition:56},0).to({startPosition:56},12).to({skewX:-4.5,skewY:-184.5,x:40.6,y:-391.3,startPosition:40},6).wait(1).to({regX:35.1,regY:-74.9,skewX:-4.1,skewY:-184.1,x:-17,y:-493.1},0).wait(1).to({skewX:-3.7,skewY:-183.7,x:-17.2,y:-494.2},0).wait(1).to({regX:0,regY:0,skewX:-3.3,skewY:-183.3,x:37.6,y:-393.5,startPosition:122},0).wait(1).to({regX:35.1,regY:-74.9,skewX:0.4,skewY:-179.6,x:-20.5,y:-505.9},0).wait(1).to({skewX:3,skewY:-177,x:-22.6,y:-513.2},0).wait(1).to({skewX:4.6,skewY:-175.4,x:-23.8,y:-517.5},0).wait(1).to({regX:0,regY:0,skewX:5.1,skewY:-174.9,x:15.4,y:-410.1},0).wait(1).to({regX:35.1,regY:-74.9,x:-24.2,y:-518.9},0).wait(1).to({x:-24.3},0).wait(1).to({regX:0,regY:0,skewX:5,skewY:-175,x:15.4,y:-410.1},0).wait(1).to({regX:35.1,regY:-74.9,x:-24.4,y:-518.8},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({startPosition:122},0).wait(1).to({regX:0,regY:0,scaleX:1.4,scaleY:1.4,x:15.4,y:-410.1},0).to({scaleX:1.4,scaleY:1.4,skewX:5.1,skewY:-174.9},1).wait(1).to({regX:35.1,regY:-74.9,skewX:5.2,skewY:-174.8,x:-22,y:-518.7},0).wait(1).to({skewX:5.3,skewY:-174.7,x:-15.6,y:-518.1},0).wait(1).to({regX:0,regY:0,scaleX:1.4,scaleY:1.4,skewX:5.5,skewY:-174.5,x:34,y:-408.1,startPosition:2},0).wait(1).to({regX:35.1,regY:-74.9,scaleX:1.4,scaleY:1.4,skewX:6.8,skewY:-173.2,x:6.8,y:-517},0).wait(1).to({skewX:7.8,skewY:-172.2,x:15.9,y:-516.7},0).wait(1).to({skewX:8.5,skewY:-171.5,x:22.4,y:-516.5},0).wait(1).to({skewX:9,skewY:-171,x:26.3,y:-516.4},0).wait(1).to({regX:0,regY:0,skewX:9.1,skewY:-170.9,x:59.5,y:-405.1},0).wait(1));

	// daniel_3-4fr_arm close_01
	this.instance_2 = new lib.daniel_34fr_armclose_02("single",2);
	this.instance_2.setTransform(92.6,-362.1,1.4,1.4,0,2.8,-177.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({skewX:5.3,skewY:-174.7,x:88.4,y:-362.6},7,cjs.Ease.get(1)).wait(1).to({regX:-50.1,regY:49.2,scaleY:1.4,skewX:5.2,x:151.7,y:-287.4},0).wait(1).to({scaleY:1.4,skewY:-174.8,x:151.2,y:-286.8},0).wait(1).to({scaleY:1.4,skewX:5.1,skewY:-174.9,x:150.3,y:-285.9},0).wait(1).to({scaleY:1.39,skewX:4.9,skewY:-175,x:149.1,y:-284.7},0).wait(1).to({scaleY:1.39,skewX:4.7,skewY:-175.2,x:147.5,y:-283.2},0).wait(1).to({scaleY:1.38,skewX:4.4,skewY:-175.4,x:145.6,y:-281.3},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:4.1,skewY:-175.6,x:78.1,y:-351.9},0).wait(1).to({regX:-50.1,regY:49.2,scaleY:1.38,skewX:4.6,skewY:-175.2,x:138.9,y:-285.1},0).wait(1).to({scaleY:1.39,skewX:5.1,skewY:-174.8,x:135.1,y:-290.5},0).wait(1).to({scaleY:1.39,skewX:5.4,skewY:-174.5,x:131.9,y:-295},0).wait(1).to({scaleY:1.39,skewX:5.7,skewY:-174.2,x:129.4,y:-298.7},0).wait(1).to({scaleY:1.4,skewX:6,skewY:-174,x:127.3,y:-301.6},0).wait(1).to({scaleY:1.4,skewX:6.2,skewY:-173.8,x:125.9,y:-303.7},0).wait(1).to({scaleY:1.4,skewX:6.3,skewY:-173.7,x:125,y:-304.9},0).wait(1).to({regX:0,regY:0,x:62.6,y:-381.5},0).to({startPosition:2},12).to({scaleY:1.38,skewX:4.1,skewY:-175.6,x:78.1,y:-351.9},6).wait(1).to({regX:-50.1,regY:49.2,scaleY:1.38,skewX:2.8,skewY:-177,x:141.6,y:-285.2},0).wait(1).to({scaleY:1.39,skewX:1.7,skewY:-178.1,x:140.1,y:-290.5},0).wait(1).to({scaleY:1.39,skewX:0.9,skewY:-179,x:139,y:-294.9},0).wait(1).to({scaleY:1.4,skewX:0.2,skewY:-179.8,x:138.1,y:-298.2},0).wait(1).to({scaleY:1.4,skewX:-0.3,skewY:-180.3,x:137.4,y:-300.7},0).wait(1).to({scaleY:1.4,skewX:-0.6,skewY:-180.6,x:137,y:-302.1},0).wait(1).to({regX:0,regY:0,skewX:-0.7,skewY:-180.7,x:65.9,y:-370.7},0).wait(1).to({regX:-50.1,regY:49.2,x:136.9,y:-302.7},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(1).to({regX:0,regY:0,x:65.9,y:-370.7},0).wait(1).to({regX:-50.1,regY:49.2,skewX:-0.4,skewY:-180.4,x:137.7,y:-301.8},0).wait(1).to({skewX:0.6,skewY:-179.4,x:140.3,y:-299.3},0).wait(1).to({regX:0,regY:0,skewX:2.3,skewY:-177.7,x:77.2,y:-366.6},0).wait(1).to({regX:-50.1,regY:49.2,skewX:2.4,skewY:-177.6,x:149.8,y:-293.2},0).wait(1).to({skewX:2.6,skewY:-177.4,x:154,y:-291.8},0).wait(1).to({skewX:2.7,skewY:-177.3,x:156.9,y:-290.7},0).wait(1).to({skewX:2.8,skewY:-177.2,x:158.7,y:-290.1},0).wait(1).to({regX:0,regY:0,x:92.6,y:-362.1},0).wait(1));

	// daniel_3-4fr_hand close_01
	this.instance_3 = new lib.daniel_34fr_handclose_02("single",31);
	this.instance_3.setTransform(81.4,-222.5,1.4,1.4,0,-19.2,160.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({skewX:-16.7,skewY:163.3,x:71.2,y:-223.6},7,cjs.Ease.get(1)).wait(1).to({regX:8.9,regY:7.4,x:62.1,y:-209.9},0).wait(1).to({scaleY:1.4,skewX:-16.8,x:61.7,y:-209.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,skewX:-17,skewY:163.2,x:61,y:-208.5},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-17.2,skewY:163.1,x:60,y:-207.4},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-17.4,skewY:163,x:58.7,y:-205.8},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-17.8,skewY:162.9,x:57.1,y:-203.9},0).wait(1).to({regX:0,regY:0,scaleX:1.4,scaleY:1.38,skewX:-18.2,skewY:162.7,x:63.9,y:-215.1},0).wait(1).to({regX:8.9,regY:7.4,scaleX:1.4,scaleY:1.39,skewX:-8.5,skewY:172.2,x:47.8,y:-210.3},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-0.1,skewY:180.4,x:41.5,y:-218.1},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:7,skewY:187.3,x:36.5,y:-224.8},0).wait(1).to({scaleX:1.4,scaleY:1.4,skewX:12.8,skewY:193,x:32.5,y:-230.5},0).wait(1).to({scaleY:1.4,skewX:17.3,skewY:197.4,x:29.5,y:-234.9},0).wait(1).to({scaleX:1.4,scaleY:1.4,skewX:20.5,skewY:200.6,x:27.4,y:-238.1},0).wait(1).to({scaleY:1.4,skewX:22.4,skewY:202.4,x:26.2,y:-240},0).wait(1).to({regX:0,regY:0,skewX:23.1,skewY:203.1,x:41.3,y:-245.3},0).to({startPosition:31},12).to({scaleX:1.4,scaleY:1.38,skewX:-18.2,skewY:162.7,x:63.9,y:-215.1},6).wait(1).to({regX:8.9,regY:7.4,scaleX:1.4,scaleY:1.39,skewX:-9.1,skewY:171.6,x:52.5,y:-207.8},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-1.4,skewY:179.1,x:50.4,y:-213.3},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:4.9,skewY:185.2,x:48.8,y:-217.9},0).wait(1).to({scaleX:1.4,scaleY:1.4,skewX:9.8,skewY:190,x:47.7,y:-221.6},0).wait(1).to({scaleX:1.4,scaleY:1.4,skewX:13.3,skewY:193.4,x:47,y:-224.3},0).wait(1).to({scaleY:1.4,skewX:15.4,skewY:195.4,x:46.6,y:-225.9},0).wait(1).to({regX:0,regY:0,skewX:16.1,skewY:196.1,x:61.3,y:-233},0).wait(1).to({regX:8.9,regY:7.4,x:46.5,y:-226.5},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({startPosition:31},0).wait(1).to({regX:0,regY:0,x:61.3,y:-233},0).wait(1).to({regX:8.9,regY:7.4,skewX:14.3,skewY:194.3,x:47.2,y:-225.4},0).wait(1).to({skewX:8.8,skewY:188.8,x:49.6,y:-222.5},0).wait(1).to({regX:0,regY:0,skewX:-0.3,skewY:179.7,x:66.2,y:-228.2},0).wait(1).to({regX:8.9,regY:7.4,skewX:-7.1,skewY:172.9,x:60.6,y:-214.3},0).wait(1).to({skewX:-12.4,skewY:167.6,x:65.9,y:-211.8},0).wait(1).to({skewX:-16.1,skewY:163.9,x:69.9,y:-210},0).wait(1).to({skewX:-18.4,skewY:161.6,x:72.2,y:-208.9},0).wait(1).to({regX:0,regY:0,skewX:-19.2,skewY:160.8,x:81.4,y:-222.5},0).wait(1));

	// daniel_3-4fr_pull-string close
	this.instance_4 = new lib.daniel_34fr_pullstringclose("single",0);
	this.instance_4.setTransform(-45.9,-317.9,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({skewX:1.5,skewY:-178.5,x:-49.9,y:-315.7},7,cjs.Ease.get(1)).wait(1).to({regX:5,regY:18,skewX:1.4,x:-57.7,y:-290.4},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:-58.2,y:-289.7},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:-59.1,y:-288.5},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:-60.3,y:-286.9},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:-61.9,y:-284.8},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:-63.9,y:-282.1},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:-59.1,y:-303.8},0).wait(1).to({regX:5,regY:18,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:-67.5,y:-280.3},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:-68.6,y:-281.2},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:-69.6,y:-282},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:-70.4,y:-282.7},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:-71,y:-283.2},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:-71.4,y:-283.6},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:-71.7,y:-283.9},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:-66.8,y:-309.6},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:-59.1,y:-303.8},6).wait(1).to({regX:5,regY:18,scaleY:1.38,skewX:-1,skewY:-180.7,x:-67.7,y:-280.3},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:-68.9,y:-281.4},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:-70,y:-282.3},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:-70.7,y:-283},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:-71.3,y:-283.5},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:-71.6,y:-283.8},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:-66.8,y:-309.6},0).wait(1).to({regX:5,regY:18,x:-71.8,y:-284},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-66.8,y:-309.6},0).wait(1).to({regX:5,regY:18,skewX:-4.2,skewY:-184.2,x:-71,y:-284.3},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:-68.6,y:-285.4},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:-58.2,y:-312.7},0).wait(1).to({regX:5,regY:18,skewX:0.2,skewY:-179.8,x:-60.9,y:-289.3},0).wait(1).to({skewX:1.5,skewY:-178.5,x:-57.9,y:-291},0).wait(1).to({skewX:2.5,skewY:-177.5,x:-55.9,y:-292.2},0).wait(1).to({skewX:3,skewY:-177,x:-54.7,y:-292.9},0).wait(1).to({regX:0,regY:0,skewX:3.2,skewY:-176.8,x:-45.9,y:-317.9},0).wait(1));

	// daniel_3-4fr_pull-string far
	this.instance_5 = new lib.daniel_34fr_pullstringfar("single",0);
	this.instance_5.setTransform(-68.9,-320,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({skewX:1.5,skewY:-178.5,x:-73,y:-317.1},7,cjs.Ease.get(1)).wait(1).to({regX:6.5,regY:20.5,skewX:1.4,x:-82.9,y:-288.4},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:-83.5,y:-287.6},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:-84.3,y:-286.4},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:-85.6,y:-284.7},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:-87.2,y:-282.5},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:-89.1,y:-279.9},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:-82.2,y:-304.8},0).wait(1).to({regX:6.5,regY:20.5,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:-92.7,y:-277.3},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:-93.8,y:-277.8},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:-94.7,y:-278.2},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:-95.4,y:-278.6},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:-96,y:-278.9},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:-96.4,y:-279.1},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:-96.6,y:-279.2},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:-89.9,y:-308.6},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:-82.2,y:-304.8},6).wait(1).to({regX:6.5,regY:20.5,scaleY:1.38,skewX:-1,skewY:-180.7,x:-92.8,y:-277.3},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:-94,y:-277.9},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:-95,y:-278.4},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:-95.8,y:-278.8},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:-96.3,y:-279},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:-96.6,y:-279.2},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:-89.9,y:-308.6},0).wait(1).to({regX:6.5,regY:20.5,x:-96.7,y:-279.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-89.9,y:-308.6},0).wait(1).to({regX:6.5,regY:20.5,skewX:-4.2,skewY:-184.2,x:-96,y:-279.8},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:-93.6,y:-281.3},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:-81.5,y:-312.9},0).wait(1).to({regX:6.5,regY:20.5,skewX:0.2,skewY:-179.8,x:-86.1,y:-286.8},0).wait(1).to({skewX:1.5,skewY:-178.5,x:-83.3,y:-289},0).wait(1).to({skewX:2.5,skewY:-177.5,x:-81.3,y:-290.6},0).wait(1).to({skewX:3,skewY:-177,x:-80,y:-291.6},0).wait(1).to({regX:0,regY:0,skewX:3.2,skewY:-176.8,x:-68.9,y:-320},0).wait(1));

	// daniel_3-4fr_hood_01
	this.instance_6 = new lib.daniel_34fr_hood_01("single",0);
	this.instance_6.setTransform(37.2,-353.4,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({skewX:1.5,skewY:-178.5,x:32.1,y:-353.6},7,cjs.Ease.get(1)).wait(1).to({regX:0.7,regY:-1.4,skewX:1.4,x:30.9,y:-355.3},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:30.3,y:-354.6},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:29.3,y:-353.5},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:27.8,y:-351.8},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:26,y:-349.8},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:23.7,y:-347.2},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:22,y:-342.3},0).wait(1).to({regX:0.7,regY:-1.4,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:18.3,y:-347.4},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:16,y:-350.1},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:14,y:-352.4},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:12.4,y:-354.3},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:11.1,y:-355.8},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:10.3,y:-356.9},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:9.7,y:-357.4},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:10.7,y:-355.8},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:22,y:-342.3},6).wait(1).to({regX:0.7,regY:-1.4,scaleY:1.38,skewX:-1,skewY:-180.7,x:18,y:-347.8},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:15.4,y:-350.8},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:13.3,y:-353.3},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:11.7,y:-355.2},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:10.5,y:-356.6},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:9.8,y:-357.4},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:10.7,y:-355.8},0).wait(1).to({regX:0.7,regY:-1.4,x:9.5,y:-357.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:10.7,y:-355.8},0).wait(1).to({regX:0.7,regY:-1.4,skewX:-4.2,skewY:-184.2,y:-357.6},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:14.3,y:-357.2},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:21.4,y:-354.7},0).wait(1).to({regX:0.7,regY:-1.4,skewX:0.2,skewY:-179.8,x:26,y:-356.2},0).wait(1).to({skewX:1.5,skewY:-178.5,x:30.5,y:-355.8},0).wait(1).to({skewX:2.5,skewY:-177.5,x:33.7,y:-355.6},0).wait(1).to({skewX:3,skewY:-177,x:35.6,y:-355.4},0).wait(1).to({regX:0,regY:0,skewX:3.2,skewY:-176.8,x:37.2,y:-353.4},0).wait(1));

	// daniel_3-4fr_sweater_01
	this.instance_7 = new lib.daniel_34fr_sweater_02("single",0);
	this.instance_7.setTransform(14.7,-191.6,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({skewX:1.5,skewY:-178.5,x:14.5,y:-191.3},7,cjs.Ease.get(1)).wait(1).to({regX:0.5,regY:-52.7,skewX:1.4,x:15.5,y:-264.8},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:15,y:-264.2},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:14.2,y:-263.2},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:13,y:-261.7},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:11.5,y:-259.9},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:9.7,y:-257.6},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:8,y:-182.5},0).wait(1).to({regX:0.5,regY:-52.7,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:6.7,y:-257.6},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:5.9,y:-259.9},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:5.2,y:-261.8},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:4.7,y:-263.4},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:4.2,y:-264.6},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:3.9,y:-265.4},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:3.7,y:-265.9},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:10.2,y:-192.6},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:8,y:-182.5},6).wait(1).to({regX:0.5,regY:-52.7,scaleY:1.38,skewX:-1,skewY:-180.7,x:6.6,y:-258},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:5.7,y:-260.5},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:4.9,y:-262.5},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:4.4,y:-264.1},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:4,y:-265.2},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:3.8,y:-265.9},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:10.2,y:-192.6},0).wait(1).to({regX:0.5,regY:-52.7,x:3.7,y:-266.1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:10.2,y:-192.6},0).wait(1).to({regX:0.5,regY:-52.7,skewX:-4.2,skewY:-184.2,x:4.3,y:-266.1},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:6.3,y:-265.8},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:12.3,y:-191.8},0).wait(1).to({regX:0.5,regY:-52.7,skewX:0.2,skewY:-179.8,x:12.7,y:-265.5},0).wait(1).to({skewX:1.5,skewY:-178.5,x:15.1,y:-265.4},0).wait(1).to({skewX:2.5,skewY:-177.5,x:16.8},0).wait(1).to({skewX:3,skewY:-177,x:17.8},0).wait(1).to({regX:0,regY:0,skewX:3.2,skewY:-176.8,x:14.7,y:-191.6},0).wait(1));

	// daniel_3-4fr_body_01
	this.instance_8 = new lib.daniel_34fr_body_02("single",0);
	this.instance_8.setTransform(16.3,-188.9,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({skewX:1.5,skewY:-178.5,x:16.2,y:-188.5},7,cjs.Ease.get(1)).wait(1).to({regX:0.4,regY:-54.8,skewX:1.4,x:17.4,y:-265},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:16.9,y:-264.4},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:16.1,y:-263.3},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:14.9,y:-261.9},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:13.4,y:-260.1},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:11.6,y:-257.8},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:9.8,y:-179.8},0).wait(1).to({regX:0.4,regY:-54.8,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:8.6,y:-257.9},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:7.8,y:-260.2},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:7.1,y:-262.2},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:6.6,y:-263.7},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:6.2,y:-264.9},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:5.9,y:-265.8},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:5.7,y:-266.3},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:12.2,y:-190.1},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:9.8,y:-179.8},6).wait(1).to({regX:0.4,regY:-54.8,scaleY:1.38,skewX:-1,skewY:-180.7,x:8.5,y:-258.2},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:7.7,y:-260.8},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:6.9,y:-262.8},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:6.4,y:-264.5},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:6,y:-265.6},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:5.7,y:-266.2},0).wait(1).to({regX:0,regY:0,skewX:-4.5,skewY:-184.5,x:12.2,y:-190.1},0).wait(1).to({regX:0.4,regY:-54.8,x:5.7,y:-266.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:12.2,y:-190.1},0).wait(1).to({regX:0.4,regY:-54.8,skewX:-4.2,skewY:-184.2,x:6.3,y:-266.4},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:8.3,y:-266.3},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:14.2,y:-189.3},0).wait(1).to({regX:0.4,regY:-54.8,skewX:0.2,skewY:-179.8,x:14.6,y:-265.8},0).wait(1).to({skewX:1.5,skewY:-178.5,x:17,y:-265.7},0).wait(1).to({skewX:2.5,skewY:-177.5,x:18.7,y:-265.6},0).wait(1).to({skewX:3,skewY:-177,x:19.7,y:-265.5},0).wait(1).to({regX:0,regY:0,skewX:3.2,skewY:-176.8,x:16.3,y:-188.9},0).wait(1));

	// daniel_3-4fr_leg close_01
	this.instance_9 = new lib.daniel_34fr_legclose_02("single",0);
	this.instance_9.setTransform(72.1,-167.8,1.43,1.345,0,-1.8,169.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({scaleX:1.43,scaleY:1.34,skewX:-1.3,skewY:169.9,x:73.4,y:-166.6},7,cjs.Ease.get(1)).wait(1).to({regX:5.5,regY:54.4,scaleY:1.34,x:67.3,y:-92.4},0).wait(1).to({scaleY:1.34,skewX:-1.4,skewY:170,x:67.1,y:-92.2},0).wait(1).to({scaleX:1.43,scaleY:1.34,skewY:170.1,x:66.8,y:-92},0).wait(1).to({scaleY:1.35,skewX:-1.5,skewY:170.3,x:66.5,y:-91.7},0).wait(1).to({scaleY:1.35,skewX:-1.6,skewY:170.5,x:65.9,y:-91.2},0).wait(1).to({scaleX:1.42,scaleY:1.36,skewX:-1.7,skewY:170.7,x:65.4,y:-90.7},0).wait(1).to({regX:0,regY:0,scaleX:1.42,scaleY:1.36,skewX:-1.9,skewY:171,x:70,y:-165.5},0).wait(1).to({regX:5.5,regY:54.4,scaleX:1.43,skewX:-2.6,skewY:169.4,x:63.9,y:-93},0).wait(1).to({scaleX:1.44,scaleY:1.37,skewX:-3.3,skewY:168.1,x:63.3,y:-95.5},0).wait(1).to({scaleX:1.45,skewX:-3.8,skewY:166.9,x:62.8,y:-97.7},0).wait(1).to({scaleX:1.45,skewX:-4.2,skewY:166,x:62.4,y:-99.4},0).wait(1).to({scaleX:1.46,skewX:-4.6,skewY:165.3,x:62,y:-100.8},0).wait(1).to({scaleX:1.46,skewX:-4.8,skewY:164.8,x:61.8,y:-101.8},0).wait(1).to({scaleX:1.46,skewX:-5,skewY:164.5,x:61.7,y:-102.4},0).wait(1).to({regX:0,regY:0,skewY:164.4,x:62.9,y:-178.7},0).wait(1).to({regX:5.5,regY:54.4,x:61.6,y:-102.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:62.9,y:-178.7},0).wait(1).to({regX:5.5,regY:54.4,scaleX:1.46,skewX:-4.9,skewY:164.5,x:61.7,y:-102.2},0).wait(1).to({scaleX:1.46,skewX:-4.7,skewY:165.1,x:61.9,y:-101.2},0).wait(1).to({scaleX:1.45,skewX:-4.2,skewY:166,x:62.4,y:-99.4},0).wait(1).to({scaleX:1.44,skewX:-3.6,skewY:167.3,x:63,y:-97},0).wait(1).to({scaleX:1.44,scaleY:1.36,skewX:-2.9,skewY:169,x:63.7,y:-93.9},0).wait(1).to({regX:0,regY:0,scaleX:1.42,skewX:-1.9,skewY:171,x:70,y:-165.5},0).wait(1).to({regX:5.5,regY:54.4,scaleX:1.43,skewX:-2.7,skewY:169.2,x:63.9,y:-93.4},0).wait(1).to({scaleX:1.44,scaleY:1.37,skewX:-3.4,skewY:167.7,x:63.2,y:-96.2},0).wait(1).to({scaleX:1.45,skewX:-4,skewY:166.5,x:62.6,y:-98.5},0).wait(1).to({scaleX:1.45,skewX:-4.5,skewY:165.6,x:62.2,y:-100.3},0).wait(1).to({scaleX:1.46,skewX:-4.8,skewY:164.9,x:61.9,y:-101.5},0).wait(1).to({scaleX:1.46,skewX:-5,skewY:164.5,x:61.6,y:-102.3},0).wait(1).to({regX:0,regY:0,scaleX:1.46,skewY:164.4,x:62.9,y:-178.7},0).wait(1).to({regX:5.5,regY:54.4,x:61.6,y:-102.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:62.9,y:-178.7},0).wait(1).to({regX:5.5,regY:54.4,scaleX:1.46,scaleY:1.37,skewX:-5.3,skewY:164.6,x:61.8,y:-102.3},0).wait(1).to({scaleX:1.45,scaleY:1.37,skewX:-6,skewY:165.5,x:62.5,y:-101.1},0).wait(1).to({regX:0,regY:0,scaleX:1.43,scaleY:1.38,skewX:-7.3,skewY:167,x:61.8,y:-175.6},0).wait(1).to({regX:5.5,regY:54.4,scaleX:1.43,scaleY:1.37,skewX:-5.3,skewY:168,x:64.6,y:-97},0).wait(1).to({scaleX:1.43,scaleY:1.36,skewX:-3.8,skewY:168.8,x:65.5,y:-95.3},0).wait(1).to({scaleX:1.43,scaleY:1.35,skewX:-2.7,skewY:169.3,x:66.1,y:-94.1},0).wait(1).to({scaleY:1.35,skewX:-2,skewY:169.7,x:66.5,y:-93.5},0).wait(1).to({regX:0,regY:0,scaleY:1.35,skewX:-1.8,skewY:169.8,x:72.1,y:-167.8},0).wait(1));

	// daniel_3-4fr_leg far_01
	this.instance_10 = new lib.daniel_34fr_legfar_02("single",0);
	this.instance_10.setTransform(-52.3,-169.8,1.406,1.426,0,4.8,178);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({scaleX:1.41,scaleY:1.4,skewX:4,x:-55.5,y:-166.5},7,cjs.Ease.get(1)).wait(1).to({regX:-5.2,regY:53,scaleY:1.4,x:-53.5,y:-92.4},0).wait(1).to({scaleY:1.4,skewX:3.9,skewY:177.9,x:-53.7,y:-92.1},0).wait(1).to({scaleY:1.4,skewX:3.8,skewY:177.8,x:-54.2,y:-91.5},0).wait(1).to({scaleY:1.4,skewX:3.6,skewY:177.7,x:-54.8,y:-90.7},0).wait(1).to({scaleY:1.39,skewX:3.4,skewY:177.6,x:-55.6,y:-89.6},0).wait(1).to({scaleY:1.39,skewX:3.2,skewY:177.4,x:-56.6,y:-88.3},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:2.8,skewY:177.2,x:-61.4,y:-159.4},0).wait(1).to({regX:-5.2,regY:53,scaleX:1.41,scaleY:1.39,skewX:3,skewY:176,x:-56.7,y:-86.9},0).wait(1).to({scaleX:1.41,scaleY:1.39,skewX:3.1,skewY:175,x:-55.7,y:-87},0).wait(1).to({scaleX:1.42,scaleY:1.39,skewX:3.2,skewY:174.1,x:-55,y:-87.1},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewX:3.3,skewY:173.4,x:-54.3,y:-87.2},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewY:172.8,x:-53.8,y:-87.3},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewX:3.4,skewY:172.4,x:-53.4},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewY:172.2,x:-53.2,y:-87.4},0).wait(1).to({regX:0,regY:0,skewY:172.1,x:-56.1,y:-160.7},0).wait(1).to({regX:-5.2,regY:53,x:-53.2,y:-87.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-56.1,y:-160.7},0).wait(1).to({regX:-5.2,regY:53,skewY:172.3,x:-53.3,y:-87.4},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewX:3.3,skewY:172.7,x:-53.7,y:-87.3},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewY:173.4,x:-54.3,y:-87.2},0).wait(1).to({scaleX:1.42,scaleY:1.39,skewX:3.2,skewY:174.4,x:-55.2,y:-87.1},0).wait(1).to({scaleX:1.41,scaleY:1.39,skewX:3,skewY:175.6,x:-56.3,y:-87},0).wait(1).to({regX:0,regY:0,scaleX:1.41,scaleY:1.38,skewX:2.8,skewY:177.2,x:-61.4,y:-159.4},0).wait(1).to({regX:-5.2,regY:53,scaleX:1.41,scaleY:1.39,skewX:3,skewY:175.8,x:-56.5,y:-87},0).wait(1).to({scaleX:1.41,scaleY:1.39,skewX:3.1,skewY:174.7,x:-55.5,y:-87.1},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewX:3.2,skewY:173.8,x:-54.6,y:-87.2},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewX:3.3,skewY:173.1,x:-54,y:-87.3},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewX:3.4,skewY:172.5,x:-53.5},0).wait(1).to({scaleX:1.42,scaleY:1.4,skewY:172.2,x:-53.3,y:-87.4},0).wait(1).to({regX:0,regY:0,skewY:172.1,x:-56.1,y:-160.7},0).wait(1).to({regX:-5.2,regY:53,x:-53.2,y:-87.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:-56.1,y:-160.7},0).wait(1).to({regX:-5.2,regY:53,scaleX:1.42,skewX:3.1,skewY:172.5,x:-52.8,y:-87.6},0).wait(1).to({scaleX:1.42,skewX:2.3,skewY:173.5,x:-51.9,y:-88.5},0).wait(1).to({regX:0,regY:0,scaleX:1.41,scaleY:1.4,skewX:1,skewY:175.2,x:-56.1,y:-163.6},0).wait(1).to({regX:-5.2,regY:53,scaleY:1.41,skewX:2.4,skewY:176.2,x:-50.5,y:-91.6},0).wait(1).to({scaleX:1.41,scaleY:1.42,skewX:3.5,skewY:177,x:-50.9,y:-92.9},0).wait(1).to({scaleY:1.42,skewX:4.2,skewY:177.5,x:-51.1,y:-93.9},0).wait(1).to({scaleY:1.43,skewX:4.7,skewY:177.8,x:-51.3,y:-94.5},0).wait(1).to({regX:0,regY:0,scaleY:1.43,skewX:4.8,skewY:178,x:-52.3,y:-169.8},0).wait(1));

	// daniel_3-4fr_body underlay_01 
	this.instance_11 = new lib.daniel_34fr_bodyunderlay_01("single",0);
	this.instance_11.setTransform(16.3,-188.8,1.4,1.4,0,6.2,-173.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({skewX:4.4,skewY:-175.6,x:16.2,y:-188.4},7,cjs.Ease.get(1)).wait(1).to({regX:-0.2,regY:16.7,x:14.5,y:-164.9},0).wait(1).to({scaleY:1.4,skewX:4.3,skewY:-175.7,x:14.2,y:-164.4},0).wait(1).to({scaleY:1.4,skewX:4.2,x:13.6,y:-163.5},0).wait(1).to({scaleY:1.39,skewX:4,skewY:-175.9,x:12.7,y:-162.3},0).wait(1).to({scaleY:1.39,skewX:3.8,skewY:-176,x:11.6,y:-160.8},0).wait(1).to({scaleY:1.38,skewX:3.5,skewY:-176.2,x:10.3,y:-158.9},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:3.2,skewY:-176.5,x:9.8,y:-179.7},0).wait(1).to({regX:-0.2,regY:16.7,scaleY:1.38,skewX:2.1,skewY:-177.7,y:-159},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.7,x:10.7,y:-161},0).wait(1).to({scaleY:1.39,skewX:0.3,skewY:-179.6,x:11.4,y:-162.7},0).wait(1).to({scaleY:1.39,skewX:-0.4,skewY:-180.3,x:12,y:-164},0).wait(1).to({scaleY:1.4,skewX:-0.9,skewY:-180.8,x:12.5,y:-165.2},0).wait(1).to({scaleY:1.4,skewX:-1.2,skewY:-181.2,x:12.8,y:-165.9},0).wait(1).to({scaleY:1.4,skewX:-1.5,skewY:-181.5,x:13.1,y:-166.4},0).wait(1).to({regX:0,regY:0,x:12.2,y:-189.9},0).to({startPosition:0},12).to({scaleY:1.38,skewX:3.2,skewY:-176.5,x:9.8,y:-179.7},6).wait(1).to({regX:-0.2,regY:16.7,scaleY:1.38,skewX:2,skewY:-177.8,x:9.9,y:-159.3},0).wait(1).to({scaleY:1.39,skewX:0.9,skewY:-179,x:10.9,y:-161.5},0).wait(1).to({scaleY:1.39,skewX:0,skewY:-179.9,x:11.7,y:-163.3},0).wait(1).to({scaleY:1.4,skewX:-0.7,skewY:-180.6,x:12.3,y:-164.7},0).wait(1).to({scaleY:1.4,skewX:-1.2,skewY:-181.1,x:12.8,y:-165.7},0).wait(1).to({scaleY:1.4,skewX:-1.4,skewY:-181.4,x:13.1,y:-166.3},0).wait(1).to({regX:0,regY:0,skewX:-1.5,skewY:-181.5,x:12.2,y:-189.9},0).wait(1).to({regX:-0.2,regY:16.7,x:13.2,y:-166.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:12.2,y:-189.9},0).wait(1).to({regX:-0.2,regY:16.7,skewX:-1.2,skewY:-181.2,x:13.2,y:-166.5},0).wait(1).to({skewX:-0.3,skewY:-180.3,x:13.5,y:-166.1},0).wait(1).to({regX:0,regY:0,skewX:1.3,skewY:-178.7,x:14.3,y:-189.1},0).wait(1).to({regX:-0.2,regY:16.7,skewX:3,skewY:-177,x:14.1,y:-165.6},0).wait(1).to({skewX:4.4,skewY:-175.6,x:14},0).wait(1).to({skewX:5.4,skewY:-174.6,y:-165.5},0).wait(1).to({skewX:6,skewY:-174},0).wait(1).to({regX:0,regY:0,skewX:6.2,skewY:-173.8,x:16.3,y:-188.8},0).wait(1));

	// daniel_3-4fr_hood underlay_01
	this.instance_12 = new lib.daniel_34fr_hoodunderlay_01("single",0);
	this.instance_12.setTransform(36.3,-351.9,1.4,1.4,0,3.2,-176.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({skewX:1.5,skewY:-178.5,x:31.2,y:-352.1},7,cjs.Ease.get(1)).wait(1).to({regY:-5.1,skewX:1.4,y:-359},0).wait(1).to({scaleY:1.4,skewY:-178.6,x:30.5,y:-358.3},0).wait(1).to({scaleY:1.4,skewX:1.2,skewY:-178.7,x:29.5,y:-357.1},0).wait(1).to({scaleY:1.39,skewX:1.1,skewY:-178.8,x:28.1,y:-355.4},0).wait(1).to({scaleY:1.39,skewX:0.8,skewY:-179,x:26.2,y:-353.4},0).wait(1).to({scaleY:1.38,skewX:0.6,skewY:-179.2,x:23.9,y:-350.8},0).wait(1).to({regY:0,scaleY:1.38,skewX:0.2,skewY:-179.4,x:21.2,y:-340.7},0).wait(1).to({regY:-5.1,scaleY:1.38,skewX:-0.9,skewY:-180.6,x:18.5,y:-350.9},0).wait(1).to({scaleY:1.39,skewX:-1.8,skewY:-181.6,x:16.1,y:-353.7},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:-182.5,x:14.1,y:-356},0).wait(1).to({scaleY:1.39,skewX:-3.3,skewY:-183.2,x:12.5,y:-357.9},0).wait(1).to({scaleY:1.4,skewX:-3.8,skewY:-183.8,x:11.2,y:-359.4},0).wait(1).to({scaleY:1.4,skewX:-4.2,skewY:-184.2,x:10.3,y:-360.5},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:9.7,y:-361.1},0).wait(1).to({regY:0,skewX:-4.5,skewY:-184.5,x:10.1,y:-354.2},0).to({startPosition:0},12).to({scaleY:1.38,skewX:0.2,skewY:-179.4,x:21.2,y:-340.7},6).wait(1).to({regY:-5.1,scaleY:1.38,skewX:-1,skewY:-180.7,x:18.1,y:-351.3},0).wait(1).to({scaleY:1.39,skewX:-2.1,skewY:-181.9,x:15.5,y:-354.4},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:-182.8,x:13.4,y:-356.9},0).wait(1).to({scaleY:1.4,skewX:-3.6,skewY:-183.6,x:11.7,y:-358.8},0).wait(1).to({scaleY:1.4,skewX:-4.1,skewY:-184.1,x:10.5,y:-360.2},0).wait(1).to({scaleY:1.4,skewX:-4.4,skewY:-184.4,x:9.8,y:-361},0).wait(1).to({regY:0,skewX:-4.5,skewY:-184.5,x:10.1,y:-354.2},0).wait(1).to({regY:-5.1,x:9.5,y:-361.3},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:0,x:10.1,y:-354.2},0).wait(1).to({regY:-5.1,skewX:-4.2,skewY:-184.2,x:10.8,y:-361.2},0).wait(1).to({skewX:-3.2,skewY:-183.2,x:14.4,y:-360.9},0).wait(1).to({regY:0,skewX:-1.5,skewY:-181.5,x:20.6,y:-353.1},0).wait(1).to({regY:-5.1,skewX:0.2,skewY:-179.8,x:26.2,y:-359.8},0).wait(1).to({skewX:1.5,skewY:-178.5,x:30.8,y:-359.4},0).wait(1).to({skewX:2.5,skewY:-177.5,x:34,y:-359.2},0).wait(1).to({skewX:3,skewY:-177,x:36,y:-359},0).wait(1).to({regY:0,skewX:3.2,skewY:-176.8,x:36.3,y:-351.9},0).wait(1));

	// tail comp
	this.instance_13 = new lib.daniel_34fr_daniel_tail_02("single",0);
	this.instance_13.setTransform(119.4,-142.7,1.4,1.4,0,-5.8,174.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({skewX:-2.3,skewY:177.7,x:120.6,y:-145.5},7,cjs.Ease.get(1)).wait(1).to({regX:-30.5,regY:31.5,x:164.9,y:-103},0).wait(1).to({scaleY:1.4,skewX:-2.4,skewY:177.6,x:164.7,y:-102.7},0).wait(1).to({scaleY:1.4,skewX:-2.6,skewY:177.5,x:164.2,y:-102.2},0).wait(1).to({scaleY:1.39,skewX:-2.7,skewY:177.4,x:163.6,y:-101.4},0).wait(1).to({scaleY:1.39,skewX:-3,skewY:177.3,x:162.7,y:-100.5},0).wait(1).to({scaleX:1.4,scaleY:1.38,skewX:-3.3,skewY:177.1,x:161.7,y:-99.3},0).wait(1).to({regX:0,regY:0,scaleY:1.38,skewX:-3.6,skewY:176.9,x:115.1,y:-139},0).wait(1).to({regX:-30.5,regY:31.5,scaleY:1.38,skewX:-4.7,skewY:175.7,x:162.5,y:-103.2},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-5.7,skewY:174.6,x:164.2,y:-107.8},0).wait(1).to({scaleY:1.39,skewX:-6.5,skewY:173.7,x:165.8,y:-111.7},0).wait(1).to({scaleY:1.39,skewX:-7.1,skewY:173,x:167,y:-114.9},0).wait(1).to({scaleY:1.4,skewX:-7.6,skewY:172.4,x:167.9,y:-117.4},0).wait(1).to({scaleY:1.4,skewX:-8,skewY:172,x:168.5,y:-119.1},0).wait(1).to({scaleY:1.4,skewX:-8.2,skewY:171.8,x:168.9,y:-120.2},0).wait(1).to({regX:0,regY:0,skewX:-8.3,skewY:171.7,x:120.5,y:-158.1},0).to({startPosition:0},12).to({scaleX:1.4,scaleY:1.38,skewX:-3.6,skewY:176.9,x:115.1,y:-139},6).wait(1).to({regX:-30.5,regY:31.5,scaleY:1.38,skewX:-4.9,skewY:175.5,x:162.8,y:-104},0).wait(1).to({scaleX:1.4,scaleY:1.39,skewX:-5.9,skewY:174.4,x:164.7,y:-109},0).wait(1).to({scaleY:1.39,skewX:-6.8,skewY:173.4,x:166.3,y:-113.2},0).wait(1).to({scaleY:1.4,skewX:-7.4,skewY:172.7,x:167.5,y:-116.4},0).wait(1).to({scaleY:1.4,skewX:-7.9,skewY:172.1,x:168.4,y:-118.7},0).wait(1).to({scaleY:1.4,skewX:-8.2,skewY:171.8,x:168.9,y:-120.1},0).wait(1).to({regX:0,regY:0,skewX:-8.3,skewY:171.7,x:120.5,y:-158.1},0).wait(1).to({regX:-30.5,regY:31.5,x:169.1,y:-120.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:0,regY:0,x:120.5,y:-158.1},0).wait(1).to({regX:-30.5,regY:31.5,skewX:-7.9,skewY:172.1,x:168.9,y:-119.6},0).wait(1).to({skewX:-6.9,skewY:173.1,x:168.2,y:-116.7},0).wait(1).to({regX:0,regY:0,skewX:-5.3,skewY:174.7,x:120.6,y:-151.9},0).wait(1).to({regX:-30.5,regY:31.5,skewX:-5.5,skewY:174.5,x:166.8,y:-108.7},0).wait(1).to({skewX:-5.6,skewY:174.4,x:166.6,y:-106.3},0).wait(1).to({skewX:-5.7,skewY:174.3,x:166.5,y:-104.5},0).wait(1).to({skewX:-5.8,skewY:174.2,x:166.4,y:-103.5},0).wait(1).to({regX:0,regY:0,x:119.4,y:-142.7},0).wait(1));

	// daniel_3-4fr_arm far_01
	this.instance_14 = new lib.daniel_34fr_armfar_02("single",31);
	this.instance_14.setTransform(-28.8,-342.6,1.353,1.348,0,12.5,-164.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({skewX:10.8,skewY:-166.1,x:-33.6,y:-340.9},7,cjs.Ease.get(1)).wait(1).to({regX:50.6,regY:40.1,scaleY:1.35,skewX:11.2,skewY:-165.7,x:-110.6,y:-304.1},0).wait(1).to({scaleY:1.35,skewX:12.4,skewY:-164.5,x:-112.1,y:-304},0).wait(1).to({scaleX:1.35,scaleY:1.34,skewX:14.4,skewY:-162.5,x:-114.6,y:-303.9},0).wait(1).to({scaleY:1.34,skewX:17.3,skewY:-159.6,x:-117.8,y:-303.8},0).wait(1).to({scaleY:1.33,skewX:20.9,skewY:-155.9,x:-121.6,y:-303.7},0).wait(1).to({regX:0,regY:0,scaleX:1.35,scaleY:1.33,skewX:25.3,skewY:-151.5,x:-43,y:-319.2},0).to({scaleX:1.35,scaleY:1.32,skewX:5.7,skewY:-171.2,x:-58.4,y:-323.3,startPosition:53},1).to({scaleX:1.35,scaleY:1.33,skewX:-20.1,skewY:-196.9,x:-58.8,y:-337.9,startPosition:57},1,cjs.Ease.get(1)).to({scaleX:1.35,scaleY:1.35,skewX:5.3,skewY:-171.7,x:-52.2,y:-340.9},7).to({skewX:5.3},12,cjs.Ease.get(-0.33)).to({scaleX:1.35,scaleY:1.34,skewX:-11.9,skewY:-188.9,x:-61.5,y:-339},3,cjs.Ease.get(-0.33)).to({skewX:-11.9},3).to({scaleX:1.35,scaleY:1.35,skewX:5.3,skewY:-171.6,x:-32.6,y:-343.7},7).to({skewX:5.3},14,cjs.Ease.get(-1)).to({scaleX:1.35,scaleY:1.35,skewX:-19.8,skewY:-196.8,x:-43.9,y:-338.6},2,cjs.Ease.get(-1)).to({scaleX:1.35,scaleY:1.35,skewX:-20.4,skewY:-197.4,x:-25.4,y:-346.6,startPosition:55},1).to({skewX:-4,skewY:-181,x:-40.6,y:-339.2,startPosition:31},1,cjs.Ease.get(0.5)).wait(1).to({regX:50.6,regY:40.1,skewX:3.2,skewY:-173.7,x:-106.5,y:-294.2},0).wait(1).to({skewX:8.4,skewY:-168.5,x:-106.7,y:-301.9},0).wait(1).to({scaleX:1.35,skewX:11.5,skewY:-165.4,x:-106.5,y:-306.6},0).wait(1).to({regX:0,regY:0,scaleY:1.35,skewX:12.5,skewY:-164.4,x:-28.8,y:-342.6},0).wait(1));

	// daniel_3-4fr_hand far_01
	this.instance_15 = new lib.daniel_34fr_handclose_02("single",0);
	this.instance_15.setTransform(-125.6,-222.8,1.4,1.4,18.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({rotation:16.9,x:-126.6,y:-218.2},7,cjs.Ease.get(1)).wait(1).to({regX:8.9,regY:7.4,scaleY:1.4,rotation:17.3,x:-118.8,y:-204.8},0).wait(1).to({scaleY:1.4,rotation:18.6,x:-122,y:-205.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,rotation:20.6,x:-127.4,y:-206.3},0).wait(1).to({scaleY:1.39,rotation:23.4,x:-134.8,y:-207.6},0).wait(1).to({scaleY:1.39,rotation:27.1,x:-144.5,y:-209.4},0).wait(1).to({regX:0,regY:0,scaleX:1.4,scaleY:1.38,rotation:31.6,x:-161.6,y:-226.8},0).to({scaleX:1.4,scaleY:1.38,rotation:0,skewX:67.6,skewY:67.5,x:-215.4,y:-248.5,startPosition:17},1).to({scaleX:1.4,scaleY:1.38,rotation:117,skewX:0,skewY:0,x:-181.2,y:-282.9,startPosition:61},1,cjs.Ease.get(1)).to({scaleX:1.41,scaleY:1.41,rotation:0,skewX:163.5,skewY:162.9,x:-192.7,y:-337.7},7).wait(1).to({regX:8.9,regY:7.4,x:-207.6,y:-344},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({startPosition:61},0).wait(1).to({regX:0,regY:0,x:-192.7,y:-337.7},0).wait(1).to({regX:8.9,regY:7.4,scaleX:1.4,scaleY:1.41,skewX:157.9,skewY:157.4,x:-208.1,y:-336.5},0).wait(1).to({scaleX:1.4,scaleY:1.4,skewX:143.3,skewY:142.9,x:-208.5,y:-316.4},0).wait(1).to({regX:0,regY:0,scaleX:1.4,scaleY:1.39,skewX:126.1,skewY:125.8,x:-192.1,y:-296.9},0).to({startPosition:61},3).to({scaleX:1.4,skewX:142.7,skewY:142.4,x:-174.5,y:-327.7},5).to({scaleX:1.4,scaleY:1.41,skewX:301.7,skewY:301,x:-175.7,y:-349.4,startPosition:44},1).to({scaleX:1.41,scaleY:1.41,skewX:299.8,skewY:299.3,x:-173,y:-358.1},1).wait(1).to({regX:8.9,regY:7.4,x:-157.8,y:-363.8},0).wait(1).to({scaleY:1.41},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:44},0).wait(1).to({scaleX:1.4},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:44},0).wait(1).to({scaleY:1.41},0).wait(1).to({scaleX:1.4,y:-363.9},0).wait(1).to({startPosition:44},0).wait(1).to({regX:0,regY:0,x:-173,y:-358.2},0).to({scaleX:1.41,scaleY:1.41,y:-358.1},1).to({scaleX:1.4,scaleY:1.4,skewX:137.1,skewY:136.9,x:-169.6,y:-324.7,startPosition:61},1).to({scaleX:1.4,scaleY:1.4,rotation:135.9,skewX:0,skewY:0,x:-180.2,y:-285.5,startPosition:17},1).to({scaleX:1.4,scaleY:1.4,rotation:64.2,x:-131.4,y:-201.8},1).to({scaleX:1.4,scaleY:1.4,rotation:12.8,x:-98.5,y:-178.7,startPosition:0},1,cjs.Ease.get(0.5)).wait(1).to({regX:8.9,regY:7.4,scaleX:1.4,scaleY:1.4,rotation:15.4,x:-101.1,y:-184.7},0).wait(1).to({rotation:17.2,x:-109.9,y:-198.1},0).wait(1).to({scaleX:1.4,scaleY:1.4,rotation:18.3,x:-115.3,y:-206.2},0).wait(1).to({regX:0,regY:0,rotation:18.7,x:-125.6,y:-222.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.4,-718.9,466.8,762);


// stage content:



(lib.Animation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.DT("synched",0,false);
	this.instance.setTransform(965.4,519.4,1,1,0,0,0,11.2,-319.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1340.7,504,466.8,762);

})(window.animPG09Daniel = window.animPG09Daniel||{});