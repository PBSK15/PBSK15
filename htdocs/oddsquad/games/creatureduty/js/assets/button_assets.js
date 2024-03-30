(function (lib, img, createjs) {

var p; // shortcut to reference prototypes

// symbols:



(lib.captionbg = function () {
	  var cbsprite = creatureDutyAssets.getSprite("captionbg.png");
	  _log(">> creating lib.captionbg from "+cbsprite);
	  return cbsprite;
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 850, 113);


(lib.CreatureDutyLogo = function () {
	  return creatureDutyAssets.getSprite("CreatureDutyLogo.png");
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 1024, 768);


(lib.Loading_Bar = function () {
	  return creatureDutyAssets.getSprite("Loading_Bar.png");
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 739, 30);


(lib.MenuAudio = function () {
	  this.initialize(images["MenuAudio"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 48, 48);


(lib.MenuAudioOff = function () {
	  this.initialize(images["MenuAudioOff"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 41, 41);


(lib.MenuBar = function () {
	  this.initialize(images["MenuBar"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 336, 70);


(lib.MenuCC = function () {
	  this.initialize(images["MenuCC"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 47, 48);


(lib.MenuCCOff = function () {
	  this.initialize(images["MenuCCOff"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 41, 41);


(lib.MenuFullscreen = function () {
	  this.initialize(images["MenuFullscreen"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 48, 48);


(lib.MenuFullscreenOff = function () {
	 this.initialize(images["MenuFullscreenOff"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 41, 41);


(lib.MenuHome = function () {
	  this.initialize(images["MenuHome"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 47, 48);


(lib.MenuHomeOff = function () {
	  this.initialize(images["MenuHomeOff"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 41, 41);


(lib.MenuLevel = function () {
	 this.initialize(images["MenuLevel"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 48, 48);


(lib.MenuReplay = function () {
	  this.initialize(images["MenuReplay"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 48, 48);


(lib.MenuReplayOff = function () {
	  this.initialize(images["MenuReplayOff"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 41, 41);


(lib.MenuStart = function () {
	 this.initialize(images["Menu_Start"]);
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 77, 77);


(lib.Play_Button = function () {
	  //return creatureDutyAssets.getSprite("Play_Button.png");
	 return creatureDutyAssets.getSprite("Play_Button.png");
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,112,85);

(lib.start_button = function() {
	  var sbsprite = creatureDutyAssets.getSprite("start_button.png");
	  sbsprite.mouseEnabled = true;
	  _log(">> creating lib.start_button from "+sbsprite);
	  return sbsprite;
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,201,178);


(lib.Skip_Button = function () {
	  return creatureDutyAssets.getSprite("Skip_Button.png");
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 112, 85);


(lib.Video_background = function () {
	  return creatureDutyAssets.getSprite("Video_background.jpg");
}).prototype = p = new createjs.Container();
 p.nominalBounds = new createjs.Rectangle(0, 0, 1024, 768);


(lib.unpause_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#009999").ss(2,1,1).p("AgRA1IAShpIARBpg");
	this.shape.setTransform(11.9,2);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f().s("#009999").ss(1.5,1,1).p("AE9iZIgdBsIgchsIhHAAIBCC8IAAB3IBCAAIAAh3IBDi8gAB3iZIhOAAIhAEzIBDAAIAGghIA8AAIAGAhIBFAAgAghBYIhYAAIAAjxIhCAAIAAEzICaAAgAjThtQAAgSgMgNQgNgMgTgBIiEAAIAAEzIBCAAIAAhwIBCAAQATgBANgMQAMgNAAgQgAlBgWIAAhBIAsAAIAABBg");
	this.shape_1.setTransform(3.9,1.1);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AD/CZIAAh3IhCi7IBHAAIAcBsIAdhsIBGAAIhCC7IAAB3gAB0CZIgGggIg8AAIgGAgIhCAAIA/kyIBOAAIBCEygAA9A9IAlAAIgRhogAi7CZIAAkyIBCAAIAADwIBYAAIAABCgAmDCZIAAkyICFAAQASABANANQAMAMABASIAABsQgBARgMAMQgNANgSABIhCAAIAABvgAlAgWIArAAIAAhBIgrAAg");
	this.shape_2.setTransform(3.9,1.1);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#009999").s().p("AC5ChIhFAAQgDAAgCgCQgCgCgBgCIgEgbIgvAAIgGAbQAAACgCACQgCACgDAAIhDAAIgEgBIgBgBQgCACgDAAIiaAAQgDAAgCgCQgCgCgBgEIAAkxQABgEACgCQACgCADAAIBCAAQADAAACACQACACAAAEIAADoIBRAAQADAAACACQACACAAAEIAAAsIA8keQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAIBOAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIBCEyIAAAEIgDAEIgEABIAAAAgABWAzIgGgmIgHAmIANAAgAD/ChQgDAAgCgCQgCgCgBgEIAAh1IhBi6QAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIBHAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABIAVBQIAWhQQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIBGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABIhCC6IAAB1QAAAEgCACQgCACgDAAgAmDChQgDAAgCgCQgCgCAAgEIAAkxQAAgEACgCQACgCADAAICFAAQAWABAOAOIAAAAQAOAPABAVIAABtQgBATgOAPIAAAAQgOAOgWABIg7AAIAABoQAAAEgCACQgCACgEAAgAk5geIAdAAIAAgxIgdAAg");
	this.shape_3.setTransform(4.6,1.8);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// highlights
	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.302)").s().p("AgkCAQgPgPAAgWQAAgVAPgQQAQgPAUAAQAVAAAPAPQAPAQAAAVQAAAWgPAPQgPAPgVAAQgUAAgQgPgAg3gFQgXgYgBghQABghAXgYQAYgXAfAAQAhAAAYAXQAWAYAAAhQAAAhgWAYQgYAVghAAQgfAAgYgVg");
	this.shape_4.setTransform(-140.4,-20.6,1,1,0,0,0,3.8,2.3);

	this.timeline.addTween(createjs.Tween.get(this.shape_4).wait(2));

	// Layer 1
	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#00CCCC","#00E9E9"],[0,1],0,-27.5,0,27.6).s().p("AE4ETIrYAAIq8AAIgJAAIkFAAQgnAAABgnIAAnYQgBgmAnAAMArVAAAQAnAAAAAmIAAHYQAAAngnAAg");
	this.shape_5.setTransform(1.1,0.4);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("A2VFJQgtAAgBgvIAAozQABgvAtAAMAsrAAAQAuAAgBAvIAAIzQABAvguAAgA2ij+IAAH2QgBApAqAAMArzAAAQApAAAAgpIAAn2QAAgpgpAAMgrzAAAQgqAAABApg");
	this.shape_6.setTransform(1.1,0.7);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.f("#00F5F5").s().p("A14ElQgqAAAAgpIAAn2QAAgqAqAAMAryAAAQApAAAAAqIAAH2QAAApgpAAgA2QjrIAAHXQAAAoAnAAIEFAAIAIAAIK8AAILYAAIQzAAQAnAAAAgoIAAnXQAAgngnAAMgrUAAAQgnAAAAAng");
	this.shape_7.setTransform(1.1,0.4);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],908.5,-7.7,908.5,32.7).s().p("AE4ETIq6AAIAAolIK6AAIBLAAIAAIlg");
	this.shape_8.setTransform(91,0.4);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],-51,-7.7,-51,32.7).s().p("AhEETIAAolIBjAAQAmAAAAAmIAAHYQAAAngmAAg");
	this.shape_9.setTransform(136.7,0.4);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],1201.6,-7.7,1201.6,32.7).s().p("AntETIAAolIPbAAIAAIlg");
	this.shape_10.setTransform(-62.1,0.4);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],209,-7.7,209,32.7).s().p("AhuETQgnAAABgnIAAnYQgBgmAnAAIEDAAIAAIlg");
	this.shape_11.setTransform(-126.5,0.4);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],1049.7,-7.7,1049.7,32.7).s().p("AlDETIAAolIKHAAIAAIlg");
	this.shape_12.setTransform(19.8,0.4);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.f("#00E5E5").s().p("AS8FJIq9AAI+UAAQgtAAgBgvIAAozQABgvAtAAIeUAAIK9AAIDaAAQAuAAgBAvIAAIzQABAvguAAgA2ij+IAAH2QgBApAqAAId4AAIK9AAIC+AAQApAAAAgpIAAn2QAAgpgpAAIi+AAIq9AAI94AAQgqAAABApg");
	this.shape_13.setTransform(1.1,0.7);

	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.f("#00F0F0").s().p("AS8ElIq8AAI94AAQgqAAAAgpIAAn2QAAgqAqAAId4AAIK8AAIC+AAQApAAAAAqIAAH2QAAApgpAAgA2QjrIAAHXQAAAoAnAAIEFAAIPcAAIKIAAIK8AAIBKAAIBlAAQAnAAAAgoIAAnXQAAgngnAAIhlAAIhKAAIq8AAIqIAAIvcAAIkFAAQgnAAAAAng");
	this.shape_14.setTransform(1.1,0.4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 6
	this.shape_15 = new createjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("A2VFJQgtAAgBgvIAAozQABgvAtAAMAsrAAAQAuAAgBAvIAAIzQABAvguAAg");
	this.shape_15.setTransform(1.1,0.7);

	this.timeline.addTween(createjs.Tween.get(this.shape_15).wait(2));

	// Layer 5
	this.shape_16 = new createjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.102)").s().p("A3sGxQhMAAgBhNIAArHQABhNBMAAIEzAAIAyAAIAoAAIK8AAILYAAIK8AAIH8AAIAMABQBBAFAABHIAALHQgBBNhMAAg");
	this.shape_16.setTransform(1.4,1.3);

	this.timeline.addTween(createjs.Tween.get(this.shape_16).wait(2));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-158,-42,318.8,86.7);


(lib.tap_fx = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjzD0QhkhmgBiOQABiOBkhkQBmhmCNAAQCOAABmBmQBkBkABCOQgBCOhkBmQhmBkiOAAQiNAAhmhkgAiciYQhCBBAABbQAABdBCBCQBBBBBbAAQBcAABChBQBChCAAhdQAAhbhChBQhChChcAAQhbAAhBBCg");

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-34.5,-34.5,69,69);


(lib.hand_shadow = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#B1C2DD").s().p("AA7NAQhjgEiDgwQiDgwhxh4Qhyh3hAi8QhBi8gUkAQgUkCgJhcQgJhdhFhVQhFhVAVgpQB6BKArCfQATBCAkEsQAcDjBnC6QBRCXBaBBQBaBACHAoQCEAnBigCQBhgBBcgfQCDgsB9h1QCEh9BHkAQAWhNAOhUIAJhCQAKDsgvDeQgPBHgYBLQgYBKhDBtQhLB4hjA6QhPAvhDAUQgtAOguAIQgfAFgiABIgVABQgmAAhMgEgAI7qLIAkABQATABAHAoQAGAogTAhQgRAcgYASQAIhRgQhQgAEZpyQgBhdgXhMQAPgbAkgMQAHgCAEAFQAfAYgQBaQgNBFgmAog");

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-83.9,-83.6,167.9,167.3);


(lib.hand_outline = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#221F1F").ss(3).p("ABmm8QhEgKg+AlQgfAVgVAgQgKAPgPgNQgNgLgNgZQgPgjgQh0IhfqzQgQhHgvgWQgvgXgtAIQguAHggAmQggAlABBQQAABQAqN1Qg1g5hjhFQhihFhKA6QgYAVgLAbQgVA7AfAqQA3BKAKARQAaApAOAvQAKAgATEWQASEaA1C3QCrJeJfAAQDOAECvh+QFwkhhDtLQgDg/gjg+QhDh/iZAAQgFgggUgnQgphNhPgeQhDgag+AVQghANgMARIgDgHQgMglgmgpQgmgqhDgJg");

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-86.2,-136.6,172.6,273.3);


(lib.hand_filled = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACaVEQpfAAirpdQg0i3gTkaQgSkWgKghQgOgugagpQgKgSg3hJQgfgqAZg7IAfgxQBDg5CIBcQBDAtA2A5Qgqt0ABhHQAChaArgtQAcgfAngEQAqgGArARQA9AZAHBEIBcK2QARB0APAiQAUArAfgJIA0g0QA+gnBEALQBDAKAmAqQAlApANAlIACAGIAugbQA9gYBEAaQBOAeApBNQAUAnAFAgQCZAABECAQAjA9ACBAQBDNKlvEhQieB+ioAAQgcAAgcgEg");

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-84.7,-135.2,169.4,270.5);


(lib.skip_button_base = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Skip_Button();
	this.instance.setTransform(-56,-36.3);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-56,-36.3,112,85);


(lib.scanlines_100 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape.setTransform(0,44.6);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_1.setTransform(0,34.7);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_2.setTransform(0,24.8);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_3.setTransform(0,14.9);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_4.setTransform(0,5);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_5.setTransform(0,-4.9);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_6.setTransform(0,-14.8);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_7.setTransform(0,-24.7);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_8.setTransform(0,-34.6);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AnFAdIAAg5IOLAAIAAA5g");
	this.shape_9.setTransform(0,-44.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-45.4,-47.5,90.9,95.1);


(lib.nav_button_icons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEaICQgyABAAgyIAAh9QAAgzAyAAIB9AAQAyAAAAAzIAAB9QAAAygygBgAg9ICQgyABAAgyIAAh9QAAgzAyAAIB7AAQAyAAAAAzIAAB9QAAAygygBgAmWICQgyABAAgyIAAh9QAAgzAyAAIB9AAQAyAAAAAzIAAB9QAAAygygBgAEaBwQgyAAAAgyIAAh7QAAgyAyAAIB9AAQAyAAAAAyIAAB7QAAAygyAAgAg9BwQgyAAAAgyIAAh7QAAgyAyAAIB7AAQAyAAAAAyIAAB7QAAAygyAAgAmWBwQgyAAAAgyIAAh7QAAgyAyAAIB9AAQAyAAAAAyIAAB7QAAAygyAAgAEakhQgyABAAgzIAAh8QAAgzAyAAIB9AAQAyAAAAAzIAAB8QAAAzgygBgAg9khQgyABAAgzIAAh8QAAgzAyAAIB7AAQAyAAAAAzIAAB8QAAAzgygBgAmWkhQgyABAAgzIAAh8QAAgzAyAAIB9AAQAyAAAAAzIAAB8QAAAzgygBg");
	this.shape.setTransform(45.8,51.5);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#009999").s().p("Am3GBQifigAAjhQAAjgCfigIAAAAQCgigDiABQDggBCfCgQCgCgAADgIgBAWIBhAlQAIADADAHQAEAIgDAIIgCAFQgCAFgFADIkVDXQgGAEgHAAQgHAAgGgFQgFgEgBgHIhDldQgCgIAEgGQADgGAIgDQAGgCAHACIBYAiQgNiHhihiIAAgBQhwhwidAAQifAAhxBxQhxBwAACeQAACfBxBwIAAAAQBxBwCfABQBWAABJgjQAGgDAGACQAHABAEAFIBWBcQAEAEABAGQABAHgDAFQgDAGgFADQh3BDiQABQjiAAigigg");
	this.shape_1.setTransform(51,51.5);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(4,2,1).p("AmJhvIDmAAIAAkFIADAAIJcF8IpfFtIAAjnIjmAAQgyAAAAgyIAAiZQAAgyAyAAg");
	this.shape_2.setTransform(46.4,52.2);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AijCPIjmAAQgyAAAAgzIAAiZQAAgyAyABIDmAAIAAkFIADAAIJcF7IpfFsg");
	this.shape_3.setTransform(46.4,52.2);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,91.5,103);


(lib.buttonart_whitecircle = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(3.8,3.8);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,7.6,7.6);


(lib.buttonart_whitecirc4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAsQgTgTAAgZQAAgZATgSQASgSAYAAQAZAAASASQATASAAAZQAAAZgTATQgSASgZAAQgYAAgSgSg");
	this.shape.setTransform(6.3,6.3);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,12.5,12.6);


(lib.buttonart_whitecirc3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqAsQgTgSAAgaQAAgYATgSQASgTAYAAQAZAAASATQATASAAAYQAAAagTASQgSASgZAAQgYAAgSgSg");
	this.shape.setTransform(6.3,6.2);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,12.5,12.5);


(lib.buttonart_whitecirc2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAaQgLgLAAgPQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgMgLg");
	this.shape.setTransform(3.8,3.8);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,7.6,7.6);


(lib.buttonart_gradientcirc1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.rf(["rgba(253,253,254,0)","rgba(253,253,254,0.796)","#FDFDFE"],[0,0.91,1],0,0,0,0,0,32.5).s().p("AjkDlQhfhfAAiGQAAiFBfhfQBfhfCFAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiFAAhfhfg");
	this.shape.setTransform(36.3,35.3,1.116,1.116);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0.1,-0.9,72.4,72.4);


(lib.buttonart_gradientcirc = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.rf(["rgba(253,253,254,0)","rgba(253,253,254,0.796)","#FDFDFE"],[0,0.91,1],0,0,0,0,0,32.3).s().p("AjjDkQheheAAiGQAAiEBeheQBfhfCEgBQCFABBfBfQBeBeAACEQAACGheBeQhfBfiFAAQiEAAhfhfg");
	this.shape.setTransform(36.1,35.1);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(3.9,2.8,64.6,64.6);


(lib.buttonart_blueringgroup = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#00BBD8").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIgAiRiRQg8A9AABUQAABVA8A9QA9A9BUAAQBVAAA9g9QA9g9AAhVQAAhUg9g9Qg9g8hVAAQhUAAg9A8g");
	this.shape.setTransform(28.5,27.5);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(3.9,2.8,49.4,49.4);


(lib.buttonart_bluering = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#00BBD8").s().p("AisCtQhIhIAAhlQAAhkBIhIQBIhIBkAAQBlAABIBIQBIBIAABkQAABlhIBIQhIBIhlAAQhkAAhIhIgAiQiQQg8A9AABTQAABVA8A8QA8A9BUAAQBVAAA8g9QA8g8AAhVQAAhTg8g9Qg8g8hVAAQhUAAg8A8g");
	this.shape.setTransform(28.4,27.4);

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(3.8,2.8,49.2,49.1);


(lib.howtoplay_title = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFDPQg8hUAAh6QgBh9BAhTQA9hTBnAAQBnAABABRQA/BSAAB7QgBB2g8BYQg9BahtgBQhsAAg6hUgAAwioQgpBCAABnQAABoApBAQArBCBHgBQBJABArhDQAnhEAAhoQAAhsgqg9Qgpg8hIAAQhIAAgqBBgA8qDPQg9hUAAh6QAAh9A/hTQA/hTBoAAQBnAAA/BRQA+BSAAB7QAAB2g7BYQg+BahsgBQhtAAg7hUgA70ioQgqBCAABnQAABoAqBAQAsBCBHgBQBJABAqhDQAohEAAhoQABhsgsg9Qgqg8hGAAQhJAAgqBBgEAhgAEXIAAjrIi8lCIBTAAICUEBICXkBIA+AAIi6FCIAADrgAdjEXIg4ijIjPAAIgzCjIg7AAIC2otIBPAAIC2ItgAZuA/ICtAAIhVkLgASXEXIAAotIBIAAIAAHvIEBAAIAAA+gALCEXIAAotIDFAAQBdAAAuAzQAsAxAABCQAABIgxAtQgwAvhOAAIiHAAIAADjgAMIgFICBAAQAxAAAdgdQAfgeAAgwQAAgpgagiQgbghg0AAIiFAAgAlSEXIAAnwIihAAIAAg9IGIAAIAAA9IihAAIAAHwgAupEXIh5mwIhyGwIhIAAIiNotIBIAAIBvHDIB4nDIA5AAICAHDIBonDIA9AAIiIItgEggVAEXIAAkLIkEAAIAAELIhGAAIAAotIBGAAIAADnIEEAAIAAjnIBGAAIAAItg");

	this.addChild(this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-240,-29.2,480.1,58.4);


(lib.howtoplay_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// text
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#009999").ss(2,1,1).p("AgRA1IAShpIARBpg");
	this.shape.setTransform(75.1,2);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f().s("#009999").ss(1.5,1,1).p("AFFgWIAAhBIAsAAIAABBgACJhtQgBgSgMgNQgMgMgTgBIhYAAQgRABgMAMQgNANAAASIAADbQAAASANANQAMAMARABIBYAAQATgBAMgMQAMgNABgSgAAbBYIAAivIAsAAIAACvgAL/iZIhNAAIhCEzIBEAAIAHghIA7AAIAGAhIBFAAgAJlBYIhYAAIAAjxIhCAAIAAEzICaAAgAGzhtQAAgSgMgNQgNgMgTgBIiEAAIAAEzIBCAAIAAhwIBCAAQATgBANgMQAMgNAAgQgAPFiZIgdBsIgchsIhHAAIBCC8IAAB3IBCAAIAAh3IBDi8gAtbiZIhCAAIAABxIgsAAIAAhxIhCAAIAAEzIBCAAIAAiCIAsAAIAACCIBCAAgAmQiZIgZDAIgYjAIg/AAIgYDAIgZjAIhFAAIA1EzIBKAAIAWigIAXCgIBKAAIA1kzgAqIhtQgBgSgMgNQgMgMgTgBIhYAAQgTABgMAMQgNANAAASIAADbQAAASANANQAMAMATABIBYAAQATgBAMgMQAMgNABgSgAr2BYIAAivIAsAAIAACvgAg9iZIiwAAIAABCIA3AAIAADxIBCAAIAAjxIA3AAg");
	this.shape_1.setTransform(2.3,1.1);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AOHCZIAAh3IhBi7IBGAAIAdBsIAchsIBHAAIhDC7IAAB3gAL8CZIgGggIg8AAIgGAgIhEAAIBBkyIBOAAIBCEygALFA9IAlAAIgRhogAHLCZIAAkyIBCAAIAADwIBYAAIAABCgAEDCZIAAkyICEAAQAUABAMANQAMAMAAASIAABsQAAARgMAMQgMANgUABIhBAAIAABvgAFGgWIAsAAIAAhBIgsAAgAAFCZQgRAAgMgMQgNgNAAgTIAAjaQAAgSANgMQAMgNARgBIBYAAQATABAMANQAMAMABASIAADaQgBATgMANQgMAMgTAAgAAbBXIAsAAIAAiuIgsAAgAi2CZIAAjwIg3AAIAAhCICxAAIAABCIg3AAIAADwgAnKCZIgXigIgWCgIhKAAIg1kyIBFAAIAZDAIAZjAIA/AAIAXDAIAZjAIBFAAIg0EygAsMCZQgSAAgNgMQgNgNAAgTIAAjaQAAgSANgMQANgNASgBIBYAAQATABAMANQANAMAAASIAADaQAAATgNANQgMAMgTAAgAr2BXIAsAAIAAiuIgsAAgAucCZIAAiBIgsAAIAACBIhDAAIAAkyIBDAAIAABxIAsAAIAAhxIBBAAIAAEyg");
	this.shape_2.setTransform(2.3,1.1);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#009999").s().p("AnPCfQgCgCgBgDIgPhsIgPBsQAAADgCACQgCACgDAAIhKAAQgDAAgCgCQgCgCgBgCIg1kyIABgEIADgEIAEgBIBFAAQADAAACACQADACAAADIARCGIARiGQAAgDACgCQADgCACAAIA/AAQADAAACACQADACAAADIAQCFIARiFQABgDACgCQACgCADAAIBFAAIAEABIADAEIAAAEIg0EyQgBACgCACQgCACgDAAIhKAAIAAAAQgDAAgCgCgANBChIhFAAQgDAAgCgCQgCgCgBgCIgEgbIgvAAIgGAbQAAACgCACQgCACgDAAIhFAAIgEgBIgBgBQgCACgDAAIiaAAQgDAAgCgCQgCgCgBgEIAAkxQABgEACgCQACgCADAAIBCAAQADAAACACQACACAAAEIAADoIBRAAQADAAACACQACACAAAEIAAAsIA+keQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCACAAIBOAAQADAAACACQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABIBCEyIAAAEIgDAEIgEABIAAAAgALeAzIgGgmIgHAmIANAAgAOHChQgDAAgCgCQgCgCgBgEIAAh1IhBi6QAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAAAQABAAAAAAIBHAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQABABAAAAQABABAAAAQAAABAAABIAVBQIAWhQQAAgBAAgBQAAAAABgBQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABgBQAAAAABAAQAAAAABAAIBGAAQABAAABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABIhCC6IAAB1QAAAEgCACQgCACgDAAgAEDChQgDAAgCgCQgCgCAAgEIAAkxQAAgEACgCQACgCADAAICFAAQAWABAOAOIAAAAQAOAPABAVIAABtQgBATgOAPIAAAAQgOAOgWABIg7AAIAABoQAAAEgCACQgCACgEAAgAFNgeIAdAAIAAgxIgdAAgAAFChQgUgBgOgOQgPgPgBgVIAAjbQABgVAPgPQAOgOAUgBIBYAAQAWABAPAOIAAAAQAOAPAAAVIAADbQAAAVgOAPIAAAAQgPAOgWABgAAiBQIAdAAIAAifIgdAAgAi2ChQgDAAgCgCQgCgCAAgEIAAjoIgwAAQgDAAgCgCQgCgCAAgEIAAhBQAAgEACgCQACgCADAAICwAAQAEAAACACQACACAAAEIAABBQAAAEgCACQgCACgEAAIgvAAIAADoQAAAEgCACQgCACgEAAgAsMChQgWgBgOgOQgPgPgBgVIAAjbQABgVAPgPQAOgOAWgBIBYAAQAWABAPAOIAAAAQAOAPAAAVIAADbQAAAVgOAPIAAAAQgPAOgWABgArvBQIAdAAIAAifIgdAAgAudChQgDAAgCgCQgCgCAAgEIAAh6IgdAAIAAB6QAAAEgCACQgCACgEAAIhCAAQgDAAgCgCQgCgCAAgEIAAkxQAAgEACgCQACgCADAAIBCAAQAEAAACACQACACAAAEIAABoIAdAAIAAhoQAAgEACgCQACgCADAAIBCAAQAEAAACACQACACAAAEIAAExQAAAEgCACQgCACgEAAg");
	this.shape_3.setTransform(3,1.8);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// highlights
	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.302)").s().p("AgkCAQgPgPAAgWQAAgVAPgQQAQgPAUAAQAVAAAPAPQAPAQAAAVQAAAWgPAPQgPAPgVAAQgUAAgQgPgAg3gFQgXgYgBghQABghAXgYQAYgXAfAAQAhAAAYAXQAWAYAAAhQAAAhgWAYQgYAVghAAQgfAAgYgVg");
	this.shape_4.setTransform(-140.4,-20.6,1,1,0,0,0,3.8,2.3);

	this.timeline.addTween(createjs.Tween.get(this.shape_4).wait(2));

	// Layer 1
	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#00CCCC","#00E9E9"],[0,1],0,-27.5,0,27.6).s().p("AE4ETIrYAAIq8AAIgJAAIkFAAQgnAAABgnIAAnYQgBgmAnAAMArVAAAQAnAAAAAmIAAHYQAAAngnAAg");
	this.shape_5.setTransform(1.1,0.4);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#00FFFF").s().p("A2VFJQgtAAgBgvIAAozQABgvAtAAMAsrAAAQAuAAgBAvIAAIzQABAvguAAgA2ij+IAAH2QgBApAqAAMArzAAAQApAAAAgpIAAn2QAAgpgpAAMgrzAAAQgqAAABApg");
	this.shape_6.setTransform(1.1,0.7);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.f("#00F5F5").s().p("A14ElQgqAAAAgpIAAn2QAAgqAqAAMAryAAAQApAAAAAqIAAH2QAAApgpAAgA2QjrIAAHXQAAAoAnAAIEFAAIAIAAIK8AAILYAAIQzAAQAnAAAAgoIAAnXQAAgngnAAMgrUAAAQgnAAAAAng");
	this.shape_7.setTransform(1.1,0.4);

	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],908.5,-7.7,908.5,32.7).s().p("AE4ETIq6AAIAAolIK6AAIBLAAIAAIlg");
	this.shape_8.setTransform(91,0.4);

	this.shape_9 = new createjs.Shape();
	this.shape_9.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],-51,-7.7,-51,32.7).s().p("AhEETIAAolIBjAAQAmAAAAAmIAAHYQAAAngmAAg");
	this.shape_9.setTransform(136.7,0.4);

	this.shape_10 = new createjs.Shape();
	this.shape_10.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],1201.6,-7.7,1201.6,32.7).s().p("AntETIAAolIPbAAIAAIlg");
	this.shape_10.setTransform(-62.1,0.4);

	this.shape_11 = new createjs.Shape();
	this.shape_11.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],209,-7.7,209,32.7).s().p("AhuETQgnAAABgnIAAnYQgBgmAnAAIEDAAIAAIlg");
	this.shape_11.setTransform(-126.5,0.4);

	this.shape_12 = new createjs.Shape();
	this.shape_12.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],1049.7,-7.7,1049.7,32.7).s().p("AlDETIAAolIKHAAIAAIlg");
	this.shape_12.setTransform(19.8,0.4);

	this.shape_13 = new createjs.Shape();
	this.shape_13.graphics.f("#00E5E5").s().p("AS8FJIq9AAI+UAAQgtAAgBgvIAAozQABgvAtAAIeUAAIK9AAIDaAAQAuAAgBAvIAAIzQABAvguAAgA2ij+IAAH2QgBApAqAAId4AAIK9AAIC+AAQApAAAAgpIAAn2QAAgpgpAAIi+AAIq9AAI94AAQgqAAABApg");
	this.shape_13.setTransform(1.1,0.7);

	this.shape_14 = new createjs.Shape();
	this.shape_14.graphics.f("#00F0F0").s().p("AS8ElIq8AAI94AAQgqAAAAgpIAAn2QAAgqAqAAId4AAIK8AAIC+AAQApAAAAAqIAAH2QAAApgpAAgA2QjrIAAHXQAAAoAnAAIEFAAIPcAAIKIAAIK8AAIBKAAIBlAAQAnAAAAgoIAAnXQAAgngnAAIhlAAIhKAAIq8AAIqIAAIvcAAIkFAAQgnAAAAAng");
	this.shape_14.setTransform(1.1,0.4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).wait(1));

	// Layer 6
	this.shape_15 = new createjs.Shape();
	this.shape_15.graphics.f("#00FFFF").s().p("A2VFJQgtAAgBgvIAAozQABgvAtAAMAsrAAAQAuAAgBAvIAAIzQABAvguAAg");
	this.shape_15.setTransform(1.1,0.7);

	this.timeline.addTween(createjs.Tween.get(this.shape_15).wait(2));

	// Layer 5
	this.shape_16 = new createjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.102)").s().p("A3sGxQhMAAgBhNIAArHQABhNBMAAIEzAAIAyAAIAoAAIK8AAILYAAIK8AAIH8AAIAMABQBBAFAABHIAALHQgBBNhMAAg");
	this.shape_16.setTransform(1.4,1.3);

	this.timeline.addTween(createjs.Tween.get(this.shape_16).wait(2));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-158,-42,318.8,86.7);


(lib.home_icon_graphic = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#009999").ss(1.5,0,1).p("ACpgIIg/g/IAAhYIgpAAIAAAvIg2g2QgFgFgGAAQgGAAgFAFIidCeQgFAFAAAFQAAAHAFAEIAkAAIAACLQAAAIAGAGQAGAGAJAAIDhAAQAJAAAGgGQAGgGAAgIIAAiLIAiAAQAFgEAAgHQAAgFgFgFg");
	this.shape.setTransform(17.5,17.3);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhvCsQgJAAgGgGQgGgGAAgIIAAiLIgkAAQgFgEAAgHQAAgFAFgFICdieQAFgFAGAAQAGAAAFAFIA2A2IAAgvIApAAIAABYIA/A/QAFAFAAAFQAAAHgFAEIgiAAIAACLQAAAIgGAGQgGAGgJAAg");
	this.shape_1.setTransform(17.5,17.3);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#009999").s().p("AlIH6QgZgBgSgRQgRgRAAgZIAAmVIhsAAQgOgPgCg4QgBg7AOgOIHSmDQAOgPATAAQAUAAAPAPICeCeIAAiKIB4AAIAAECIC6ByQAPAPgBA3QgBA2gPAPIhlAAIAAGVQAAAZgRARQgSARgZABg");
	this.shape_2.setTransform(17.5,20,0.342,0.342);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-0.9,-1,37,38.3);


(lib.continue_button_base = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.start_button();
	this.instance.setTransform(-51.7,-47.6,0.575,0.575);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-51.7,-47.6,115.5,102.3);


(lib.caption_bg_bmp = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.captionbg();
	this.instance.setTransform(1008,113,1.186,1,180);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,1008,113);


(lib.button_square_100_long = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 2
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AgkCAQgOgPAAgWQAAgVAOgQQAQgPAUAAQAVAAAPAPQAPAQAAAVQAAAWgPAPQgPAPgVAAQgUAAgQgPgAg3gFQgYgYAAghQAAghAYgYQAXgXAgAAQAhAAAYAXQAWAYAAAhQAAAhgWAYQgYAVghAAQggAAgXgVg");
	this.shape.setTransform(15.8,22.1,1,1,0,0,0,3.8,2.3);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#00CCCC","#00E9E9"],[0,1],-101.6,-5.5,-101.6,32.3).s().p("Au3ETQgnAAAAgnIAAnYQAAgmAnAAIdwAAQAmAAAAAmIAAHYQAAAngmAAg");
	this.shape_1.setTransform(115,43.2);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#00F5F5").s().p("AvGElQgqAAAAgqIAAn2QAAgpAqAAIeOAAQApAAAAApIAAH2QAAAqgpAAg");
	this.shape_2.setTransform(115,43.2);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AvjFJQgtAAAAguIAAozQAAgwAtAAIfIAAQAtAAAAAwIAAIzQAAAugtAAg");
	this.shape_3.setTransform(115,43.5);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],1070.6,-7.7,1070.6,32.7).s().p("Au3ETQgnAAAAgnIAAnYQAAgmAnAAIdwAAQAmAAAAAmIAAHYQAAAngmAAg");
	this.shape_4.setTransform(115,43.2);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.f("#00F0F0").s().p("AvGElQgqAAAAgqIAAn2QAAgpAqAAIeOAAQApAAAAApIAAH2QAAAqgpAAg");
	this.shape_5.setTransform(115,43.2);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#00E5E5").s().p("AvjFJQgtAAAAguIAAozQAAgwAtAAIfIAAQAtAAAAAwIAAIzQAAAugtAAg");
	this.shape_6.setTransform(115,43.5);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	// Layer 4
	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.102)").s().p("AwvGxQhNAAAAhNIAArHQAAhNBNAAMAhfAAAQBNAAAABNIAALHQAABNhNAAg");
	this.shape_7.setTransform(115,44.1);

	this.timeline.addTween(createjs.Tween.get(this.shape_7).wait(2));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0.8,229.9,86.7);


(lib.button_round_100_interior = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],90.7,-7.8,90.7,32.6).s().p("AjODPQhWhWAAh5QAAhtBHhSQAigkAugaQAhgTAhgKIABgBQAkgJAmAAQB5AABWBWQBWBWAAB4QAAB5hWBWIgFAEQgaAYgiATQghATgiALQgkAJgnAAQh4AAhWhWg");
	this.shape.setTransform(0,-0.4);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#00F0F0").s().p("AivECQgXgRgVgUIAAAAIAAAAQgVgVgPgWQg4hOAAhkQAAiBBchbQBbhbCAAAQBlAABPA4QAVAPAUAUIABABIgBAAQAUAUAQAWIAOAVIABACIAGAMQAiBBAABNQAACBhbBcQhbBbiCAAQhiAAhNg2g");
	this.shape_1.setTransform(0,-0.4);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#00E5E5").s().p("AjwD0QhIhJgVhfQgHglAAgnIAAgIQADiJBhhjQBkhkCMgBQCNABBkBkQBkBmAACOQAACOhkBmQhkBliNAAQiMAAhkhlgAEPieIAHAMIgIgNIABABg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-34.1,-34.6,68.4,69.2);


(lib.button_poly_100 = function() {
	this.initialize();

	// Layer 2
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AhEBvQgQgKgFgSQgFgSAJgQQAKgRASgFQASgFARAKQAQAJAFASQADATgIAQQgJARgSAEQgGACgGAAQgMAAgLgGgAgMAOQgZgOgIgaQgIgdAPgZQAOgZAbgIQAcgIAZAPQAZAOAIAdQAHAcgOAZQgPAXgcAIQgJACgIAAQgTAAgPgJg");
	this.shape.setTransform(22,19.8,1,1,0,0,0,1.2,3.6);

	// Layer 3
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#00CCCC","#00E9E9"],[0,1],-85.9,-6.1,-85.9,29.8).s().p("Ai2E0Iivk0ICvkzIFtAAICvEzIivE0g");
	this.shape_1.setTransform(43.8,44.1);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#00F5F5").s().p("Ai/FEIi5lEIC5lDIF/AAIC5FDIi5FEg");
	this.shape_2.setTransform(43.8,44.1);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#00FFFF").s().p("AjTFlIjLllIDLlkIGnAAIDLFkIjLFlgAl4AAIC5FEIGAAAIC4lEIi4lDImAAAg");
	this.shape_3.setTransform(43.8,44.1);

	// Layer 4
	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AjTFlIjLllIDLlkIGnAAIDLFkIjLFlg");
	this.shape_4.setTransform(43.8,44.1);

	// Layer 5
	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.102)").s().p("AkJHAIj+nAID+m/IISAAID/G/Ij/HAg");
	this.shape_5.setTransform(43.8,44.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-8.2,-0.7,104.1,89.7);


(lib.arrow_triangle = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AisDIIAAmPIFZDHg");

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AisjHIFZDHIlZDIg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-18.3,-21,36.8,42.2);


(lib.answer_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// highlights
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AgkCAQgOgPAAgWQAAgVAOgQQAQgPAUAAQAVAAAPAPQAPAQAAAVQAAAWgPAPQgPAPgVAAQgUAAgQgPgAg3gFQgXgYAAghQAAghAXgYQAXgXAgAAQAhAAAYAXQAWAYAAAhQAAAhgWAYQgYAVghAAQggAAgXgVg");
	this.shape.setTransform(-210.4,-20.6,1,1,0,0,0,3.8,2.3);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#00CCCC","#00E9E9"],[0,1],0,-27.5,0,27.6).s().p("AfCETMg7jAAAIkFAAQgnAAAAgnIAAnYQAAgmAnAAIEFAAMA7jAAAIBlAAQAnAAgBAmIAAHYQABAngnAAg");
	this.shape_1.setTransform(1.1,0.4);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("EghQAFJQgvAAAAgvIAAozQAAgvAvAAMBCiAAAQAtAAAAAvIAAIzQAAAvgtAAg");
	this.shape_2.setTransform(1.1,0.7);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],1060.4,-7.7,1060.4,32.7).s().p("A9xETIAAolMA7jAAAIAAIlg");
	this.shape_3.setTransform(9.1,0.4);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],-51,-7.7,-51,32.7).s().p("AhEETIAAolIBjAAQAmAAAAAmIAAHYQAAAngmAAg");
	this.shape_4.setTransform(206.7,0.4);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#00FFFF","#91FFFF"],[0.004,1],209,-7.7,209,32.7).s().p("AhuETQgnAAAAgnIAAnYQAAgmAnAAIEDAAIAAIlg");
	this.shape_5.setTransform(-196.5,0.4);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#00E5E5").s().p("EghQAFJQgvAAAAgvIAAozQAAgvAvAAMBCiAAAQAtAAAAAvIAAIzQAAAvgtAAgEghfgD+IAAH2QABApAqAAMBBqAAAQApAAAAgpIAAn2QAAgpgpAAMhBqAAAQgqAAgBApg");
	this.shape_6.setTransform(1.1,0.7);

	this.shape_7 = new createjs.Shape();
	this.shape_7.graphics.f("#00F0F0").s().p("Egg0AElQgqAAAAgpIAAn2QAAgqAqAAMBBqAAAQApAAAAAqIAAH2QAAApgpAAgEghMgDrIAAHXQAAAoAnAAIEFAAMA7iAAAIBlAAQAnAAAAgoIAAnXQAAgngnAAIhlAAMg7iAAAIkFAAQgnAAAAAng");
	this.shape_7.setTransform(1.1,0.4);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Layer 6
	this.shape_8 = new createjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.102)").s().p("EgioAGxQhMAAAAhNIAArHQAAhNBMAAMBFRAAAQBMAAAABNIAALHQAABNhMAAg");
	this.shape_8.setTransform(1.4,1.3);

	this.timeline.addTween(createjs.Tween.get(this.shape_8).wait(2));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-228,-42,458.8,86.7);


(lib.skip_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.skip_button_base();

	this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},5).wait(2).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-56,-36.3,112,85);


(lib.scanlines_effect = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new createjs.Shape();
	mask._off = true;
	mask.graphics.p("EgrRAVHQjEABAAjFMAAAgkGQAAjDDEAAMBWjAAAQDEAAAADDMAAAAkGQAADFjEgBg");
	mask.setTransform(299.7,138);

	// Layer 2
	this.instance = new lib.scanlines_100("synched",0);
	this.instance.setTransform(410,284.7,9.021,1.058);
	this.instance.alpha = 0.398;

	this.instance_1 = new lib.scanlines_100("synched",0);
	this.instance_1.setTransform(410,179,9.021,1.058);
	this.instance_1.alpha = 0.398;

	this.instance_2 = new lib.scanlines_100("synched",0);
	this.instance_2.setTransform(410,73.6,9.021,1.058);
	this.instance_2.alpha = 0.398;

	this.instance_3 = new lib.scanlines_100("synched",0);
	this.instance_3.setTransform(410,-31.6,9.021,1.058);
	this.instance_3.alpha = 0.398;

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = mask;

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.lf(["rgba(0,204,204,0.4)","rgba(0,233,233,0.4)"],[0,1],-600.9,-20,-600.9,15.9).s().p("EgrmAVjQjIAAAAjIMAAAgk1QAAjIDIAAMBXMAAAQDJAAAADIMAAAAk1QAADIjJAAg");
	this.shape.setTransform(299.1,138);

	this.addChild(this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,598.2,275.9);


(lib.pause_button = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfCYIAAkvIBHAAIAAEvgAhlCYIAAkvIBHAAIAAEvg");
	this.shape.setTransform(0.2,0.9);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#315D70").s().p("AAfCYIAAkvIBHAAIAAEvgAhlCYIAAkvIBHAAIAAEvg");
	this.shape_1.setTransform(-0.8,2.6);

	this.instance = new lib.buttonart_whitecirc2();
	this.instance.setTransform(-21.3,-7.3,1,1,0,0,0,3.8,3.8);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.buttonart_whitecirc4();
	this.instance_1.setTransform(-13.8,-19.4,1,1,0,0,0,6.3,6.3);
	this.instance_1.alpha = 0.102;

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#00B0CC").s().p("AiaCbQhAhAAAhbQAAhZBAhBQBBhABZAAQBbAABABAQBABBAABZQAABbhABAQhABAhbAAQhZAAhBhAgAiRiRQg8A9AABUQAABVA8A9QA9A9BUAAQBVAAA9g9QA9g9AAhVQAAhUg9g9Qg9g8hVAAQhUAAg9A8g");
	this.shape_2.setTransform(-0.3,0.6);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.lf(["#008499","#00A5BF"],[0,1],0,-19.8,0,20.7).s().p("AiRCSQg8g9gBhVQABhUA8g9QA9g8BUgBQBVABA9A8QA8A9AABUQAABVg8A9Qg9A8hVAAQhUAAg9g8g");
	this.shape_3.setTransform(-0.2,0.7);

	this.instance_2 = new lib.buttonart_blueringgroup();
	this.instance_2.setTransform(-0.3,0.6,1,1,0,0,0,28.5,27.4);
	this.instance_2.shadow = new createjs.Shadow("rgba(0,0,0,0.2)",0,0,4);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("#418C42").s().p("AitCuQhIhIAAhmQAAhlBIhIQBIhIBlAAQBmAABIBIQBIBIAABlQAABmhIBIQhIBIhmAAQhlAAhIhIg");
	this.shape_4.setTransform(-0.3,0.6);

	this.instance_3 = new lib.buttonart_gradientcirc1();
	this.instance_3.setTransform(-0.2,0.6,1,1,0,0,0,36.3,35.2);
	this.instance_3.alpha = 0.051;
	this.instance_3.shadow = new createjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.instance_3,this.shape_4,this.instance_2,this.shape_3,this.shape_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-38.4,-37.5,79,79);


(lib.interface_menu_excopy = function() {
	this.initialize();

	// scanlines_effect
	this.instance = new lib.scanlines_effect();
	this.instance.setTransform(177,91.1,0.66,0.66,0,0,0,268.1,138);
	this.instance.filters = [new createjs.ColorFilter(0, 0, 0, 1, 0, 233, 233, 0)];
	this.instance.cache(-2,-2,602,280);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,-54,541.2,275.1);


(lib.instruction_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{release:0,press:1,tap:2});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_11 = function() {
		this.dispatchEvent(new createjs.Event("tapComplete",true));
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(11).call(this.frame_11).wait(1));

	// Layer 3
	this.instance = new lib.hand_outline("synched",0);
	this.instance.setTransform(39.4,121.9,1.081,1.081);

	this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:1,scaleY:1},1).to({startPosition:0},1).to({scaleX:1.08,scaleY:1.08},9).wait(1));

	// Layer 4
	this.instance_1 = new lib.hand_shadow("synched",0);
	this.instance_1.setTransform(39.4,176.6,1.081,1.081);

	this.timeline.addTween(createjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:39.3,y:172.4},1).to({startPosition:0},1).to({scaleX:1.08,scaleY:1.08,x:39.4,y:176.6},9).wait(1));

	// Layer 5
	this.instance_2 = new lib.hand_filled("synched",0);
	this.instance_2.setTransform(38.9,121.3,1.081,1.081);

	this.timeline.addTween(createjs.Tween.get(this.instance_2).to({scaleX:1,scaleY:1},1).to({startPosition:0},1).to({scaleX:1.08,scaleY:1.08},9).wait(1));

	// Layer 2
	this.instance_3 = new lib.tap_fx("synched",0);
	this.instance_3.setTransform(1,-4,1.796,1.796);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(createjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleX:0.71,scaleY:0.71,x:0,y:-1,alpha:0.602},1).to({scaleX:1.33,scaleY:1.33,x:-3,y:-8},9).wait(1));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-61.1,-25.8,193.8,295.5);


(lib.instruction_box_large = function() {
	this.initialize();

	// interface_menu_ex copy
	this.instance = new lib.interface_menu_excopy();
	this.instance.setTransform(183.4,93.5,1,1,0,0,0,183.4,93.5);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,-54,541.2,275.1);


(lib.help_button = function() {
	this.initialize();

	// Layer 2
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#315D70").s().p("AgpCWQgOgOAAgTQAAgQAKgNQAKgMAQgDIgXgXQgPgNAAgWQAAgVAQgQIA3g5IAAgCIgbAAIAAAZQAAAEgCACQgCACgDAAIhCAAQgIAAAAgIIAAg3QAAgVAPgPQAPgPAWAAIBWAAQAVAAAPAPQAPAPAAAVIAAAgQAAAYgYAYIgtArIAHAIQAEAGgFAFIgnApQARABAMANQANANAAASQAAATgOAOQgNANgRAAQgTAAgNgNgAgkBaQgLALAAAQQAAAQALALQALAMAQAAQAOAAALgMQALgLAAgQQAAgPgLgMQgLgLgOAAQgQAAgLALgAAWhZIAAANIg5A7QgOANAAATQAAASAMALIAYAXIAogqIgMgNIAzgwQAVgWAAgVIAAggQAAgSgMgMQgNgNgSAAIhWAAQgTAAgMANQgNAMAAASIAAA3IBCAAIAAghg");
	this.shape.setTransform(1,-0.2);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkCQQgLgLAAgQQAAgQALgLQALgLAQAAQAOAAALALQALAMAAAPQAAAQgLALQgLAMgOAAQgQAAgLgMgAglAsQgMgLAAgSQAAgTAOgNIA5g7IAAgNIgqAAIAAAhIhCAAIAAg3QAAgSANgNQAMgNATAAIBWAAQASAAANANQAMANAAASIAAAfQAAAWgVAVIgzAxIAMANIgoAqg");
	this.shape_1.setTransform(1,-0.1);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#315D70").s().p("AgpCWQgOgOAAgTQAAgQAKgNQAKgMAQgEIgXgWQgPgOAAgVQAAgVAQgQIA3g5IAAgCIgbAAIAAAZQAAAEgCACQgCACgDAAIhCAAQgIAAAAgIIAAg3QAAgVAPgPQAPgPAWAAIBWAAQAVAAAPAPQAPAPAAAVIAAAgQAAAYgYAYIgtArIAHAIQAEAGgFAEIgnApQARABAMAOQANANAAASQAAATgOAOQgNANgRAAQgTAAgNgNgAgkBaQgLALAAAQQAAAQALALQALAMAQAAQAOAAALgMQALgLAAgQQAAgPgLgMQgLgLgOAAQgQAAgLALgAAWhZIAAANIg5A7QgOANAAATQAAASAMALIAYAXIAogqIgMgNIAzgwQAVgWAAgVIAAggQAAgSgMgNQgNgNgSAAIhWAAQgTAAgMANQgNANAAASIAAA3IBCAAIAAghg");
	this.shape_2.setTransform(1,1.5);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#315D70").s().p("AgkCQQgLgLAAgQQAAgQALgLQALgLAQAAQAOAAALALQALAMAAAPQAAAQgLALQgLAMgOAAQgQAAgLgMgAglAsQgMgLAAgSQAAgTAOgNIA5g7IAAgNIgqAAIAAAhIhCAAIAAg3QAAgSANgNQAMgNATAAIBWAAQASAAANANQAMANAAASIAAAgQAAAVgVAWIgzAwIAMANIgoAqg");
	this.shape_3.setTransform(1,1.5);

	this.instance = new lib.buttonart_whitecircle();
	this.instance.setTransform(-20.8,-8.3,1,1,0,0,0,3.8,3.8);
	this.instance.alpha = 0.102;

	this.instance_1 = new lib.buttonart_whitecirc3();
	this.instance_1.setTransform(-13.4,-20.3,1,1,0,0,0,6.3,6.2);
	this.instance_1.alpha = 0.102;

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("#00B0CC").s().p("AiZCaQhAhAAAhaQAAhZBAhAQBAhABZAAQBaAABABAQBABAAABZQAABahABAQhABAhaAAQhZAAhAhAgAiQiQQg8A8AABUQAABVA8A8QA8A8BUAAQBVAAA8g8QA8g8AAhVQAAhUg8g8Qg8g9hVAAQhUAAg8A9g");
	this.shape_4.setTransform(0.1,-0.3);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.lf(["#008499","#00A5BF"],[0,1],0,-19.7,0,20.6).s().p("AiQCSQg8g9AAhVQAAhUA8g8QA8g8BUAAQBVAAA8A8QA8A8AABUQAABVg8A9Qg8A7hVABQhUgBg8g7g");
	this.shape_5.setTransform(0.1,-0.4);

	this.instance_2 = new lib.buttonart_bluering();
	this.instance_2.setTransform(0.1,-0.3,1,1,0,0,0,28.4,27.3);
	this.instance_2.shadow = new createjs.Shadow("rgba(0,0,0,0.2)",0,0,4);

	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("#418C42").s().p("AisCtQhIhIAAhlQAAhkBIhIQBIhIBkAAQBlAABIBIQBIBIAABkQAABlhIBIQhIBIhlAAQhkAAhIhIg");
	this.shape_6.setTransform(0.1,-0.4);

	this.instance_3 = new lib.buttonart_gradientcirc();
	this.instance_3.setTransform(0.1,-0.3,1.121,1.121,0,0,0,36.1,35.1);
	this.instance_3.alpha = 0.051;
	this.instance_3.shadow = new createjs.Shadow("rgba(0,0,0,1)",0,0,4);

	this.addChild(this.instance_3,this.shape_6,this.instance_2,this.shape_5,this.shape_4,this.instance_1,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-38.1,-38.5,80,79);


(lib.continue_button_base_hex = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#009999").ss(2,2,1).p("AingvIBiAAIAAhvIACAAIEBChIkDCcIAAhiIhiAAQgWAAAAgWIAAhAQAAgWAWAAg");
	this.shape.setTransform(2,-0.7);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhFA9IhiAAQgWAAAAgWIAAhAQAAgWAWAAIBiAAIAAhvIACAAIEBChIkDCcg");
	this.shape_1.setTransform(2,-0.7);

	this.instance = new lib.nav_button_icons("single",2);
	this.instance.setTransform(4,1,0.428,0.428,0,0,0,51,51.5);
	this.instance.filters = [new createjs.ColorFilter(0, 0, 0, 1, 0, 153, 153, 0)];
	this.instance.cache(-2,-2,96,107);

	this.instance_1 = new lib.button_poly_100();
	this.instance_1.setTransform(-10.2,-10.1,1,1,0,0,0,34.1,34.6);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhEA/IiDAAIAAh1ICDAAIAAhkIEMCaIkMCbg");
	this.shape_2.setTransform(2.9,0);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#00463E").s().p("Ai6FFIi8lFIC8lEIF2AAIC7FEIi7FFg");

	this.addChild(this.shape_3,this.shape_2,this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-52.6,-45.4,104.1,89.7);


(lib.continue_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.continue_button_base();

	this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},5).wait(2).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-51.7,-47.6,115.5,102.3);


(lib.caption_bg = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.caption_bg_bmp();
	this.instance.setTransform(513.1,-116.6,1.016,1.015,0,0,0,505.1,-114.8);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,1024,114.8);


(lib.button_round_100 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new createjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.302)").s().p("AhoCAQgPgPAAgWQAAgVAPgQQAQgPAVAAQAWAAAPAPQAPAQAAAVQAAAWgPAPQgPAPgWAAQgVAAgQgPgAgPgFQgXgYAAghQAAghAXgYQAWgXAhAAQAhAAAYAXQAXAYAAAhQAAAhgXAYQgYAVghAAQghAAgWgVg");
	this.shape.setTransform(22.8,24.2);

	this.timeline.addTween(createjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.lf(["#00CCCC","#00E9E9"],[0,1],91.6,-5.3,91.6,35).s().p("AjODPQhWhWAAh5QAAhuBJhSQAhgjAtgaQAhgTAigLQAkgJAmAAQB5AABWBWQBWBWAAB4QAAB5hWBWIgFAFQgbAXghATQghATgiALQgkAJgnAAQh4AAhWhWg");
	this.shape_1.setTransform(45.6,45.2);

	this.shape_2 = new createjs.Shape();
	this.shape_2.graphics.f("#00F5F5").s().p("AivECQgXgRgVgUIAAAAIAAAAQgVgVgPgWQg4hOAAhkQAAiBBchbQBbhbCAAAQBlAABPA4QAVAPAUAUIABABIgBAAQAUAUAQAWIAOAVIAHAOQAiBBAABNQAACBhbBcQhbBbiCAAQhiAAhNg2gAhJkbQhLASg6A6IgNAOQhIBSAABvQAAB5BVBVQBWBWB4AAQAnAAAkgJQAigLAigTQAhgSAagYIAFgFQBWhVAAh5QAAh5hWhWQhVhVh6AAQgmAAgjAJg");
	this.shape_2.setTransform(45.6,45.2);

	this.shape_3 = new createjs.Shape();
	this.shape_3.graphics.f("#00DEDE").s().p("Ag6AfQA6g4BIgTQgiALghATQgrAYghAjIANgOg");
	this.shape_3.setTransform(30.8,21.3);

	this.shape_4 = new createjs.Shape();
	this.shape_4.graphics.f("#00FFFF").s().p("AjwD0QhIhJgVhfQgHglAAgnIAAgIQADiJBhhjQBkhkCMgBQCNABBkBkQBkBmAACOQAACOhkBmQhkBliNAAQiMAAhkhlgAiwD+QBOA2BiAAQCBAABchbQBbhbgBiAQABhPgihBIgIgNIgOgWQgPgWgUgUIAAAAIAAAAQgUgVgWgPQhOg4hlABQiBgBhbBcQhbBaAACCQAABkA3BNQAQAXAUAUIABABIAAgBQAUAVAXAQg");
	this.shape_4.setTransform(45.6,45.6);

	this.instance = new lib.button_round_100_interior();
	this.instance.setTransform(45.6,45.6);

	this.shape_5 = new createjs.Shape();
	this.shape_5.graphics.f("#00F5F5").s().p("AgBgDIgBgCIAFALIgEgJg");
	this.shape_5.setTransform(73.1,30.2);

	this.timeline.addTween(createjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.instance}]},1).wait(1));

	// Layer 3
	this.shape_6 = new createjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.102)").s().p("AlBFCQiGiGAAi8QAAi8CGiFQCGiGC7AAQC9AACFCGQCGCFAAC8QAAC8iGCGQiFCGi9AAQi7AAiGiGg");
	this.shape_6.setTransform(45.6,45.6);

	this.timeline.addTween(createjs.Tween.get(this.shape_6).wait(2));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(0,0,91.3,91.3);


(lib.audioOverlay = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#008080").s().p("AXaCsQgMgNgBgUQABgSAMgNQANgNAUgBQATABANANQAMANABASQgBAUgMANQgNAMgTABQgUgBgNgMgAVhCsQgNgNAAgUQAAgSANgNQANgNATgBQATABANANQANANAAASQAAAUgNANQgNAMgTABQgTgBgNgMgATnCsQgMgNgBgUQABgSAMgNQANgNAUgBQATABANANQAMANABASQgBAUgMANQgNAMgTABQgUgBgNgMgAQaC0QgXgBgPgPQgOgOgBgXIAAkDQABgWAOgPQAPgOAXgBIBoAAQAWABAPAOQAPAPAAAWIAAEDQAAAXgPAOQgPAPgWABgAQ0BlIA0AAIAAjOIg0AAgANuC0IAAlsIBPAAIAAFsgAJ0C0IAAlsICcAAQAXABAOAOQAPAPABAWIAAEDQgBAXgPAOQgOAPgXABgALCBlIA0AAIAAjOIg0AAgAGuC0QgWgBgPgPQgPgOAAgXIAAk3IBOAAIAAEdIA0AAIAAkdIBPAAIAAE3QgBAXgPAOQgOAPgXABgAEOC0IgIgoIhHAAIgHAoIhSAAIBPlsIBcAAIBOFsgAD4BGIgUh8IgXB8IArAAgAi2C0QgXgBgPgPQgOgOgBgXIAAkDQABgWAOgPQAPgOAXgBIBoAAQAWABAPAOQAPAPAAAWIAABBIhOAAIAAgmIg0AAIAADOIA0AAIAAgxIghAAIAAhMIBvAAIAACXQAAAXgPAOQgPAPgWABgAlcC0Ig7i5IAAC5IhOAAIAAlsIBSAAIAwCjIAAijIBPAAIAAFsgApcC0IAAlsIBPAAIAAFsgAtXC0IAAlsICdAAQAWABAPAOQAPAPAAAWIAAEDQAAAXgPAOQgPAPgWABgAsIBlIA0AAIAAjOIg0AAgAvCC0IgIgoIhHAAIgHAoIhSAAIBPlsIBcAAIBOFsgAvYBGIgUh8IgXB8IArAAgA0gC0QgXgBgPgPQgOgOgBgXIAAkDQABgWAOgPQAPgOAXgBIBoAAQAWABAPAOQAPAPAAAWIAAEDQAAAXgPAOQgPAPgWABgA0GBlIA0AAIAAjOIg0AAgA4nC0IAAlsIBPAAIAAEdIBoAAIAABPg");
	this.shape.setTransform(512.2,382.9);

	this.instance = new lib.button_square_100_long();
	this.instance.setTransform(329.7,362.6,2.252,2.252,0,0,0,34,34.6);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.502)").s().p("EhP/A7/MAAAh3+MCf/AAAMAAAB3+gAXcBgQgMAOgBASQABAUAMANQANAMATABQAUgBANgMQAMgNAAgUQAAgSgMgOQgNgNgUAAQgTAAgNANgAViBgQgMAOAAASQAAAUAMANQAOAMATABQATgBANgMQANgNAAgUQAAgSgNgOQgNgNgTAAQgTAAgOANgATpBgQgMAOgBASQABAUAMANQANAMATABQAUgBANgMQAMgNAAgUQAAgSgMgOQgNgNgUAAQgTAAgNANgAP2i0QgPAPAAAXIAAEDQAAAWAPAPQAPAPAXAAIBnAAQAXAAAOgPQAQgPAAgWIAAkDQAAgXgQgPQgOgPgXAAIhnAAQgXAAgPAPgANwCpIBOAAIAAlsIhOAAgAJ2CpICcAAQAWAAAPgPQAPgPAAgWIAAkDQAAgXgPgPQgPgPgWAAIicAAgAF7B1QABAWAPAPQAPAPAWAAIBoAAQAXAAAOgPQAPgPAAgWIAAk4IhOAAIAAEeIg0AAIAAkeIhPAAgAEICBIAHAoIBSAAIhPlsIhcAAIhOFsIBSAAIAHgogAjai0QgPAPAAAXIAAEDQAAAWAPAPQAPAPAXAAIBnAAQAXAAAOgPQAPgPABgWIAAiYIhvAAIAABMIAgAAIAAAyIgzAAIAAjPIAzAAIAAAnIBPAAIAAhBQgBgXgPgPQgOgPgXAAIhnAAQgXAAgPAPgAlbCpIBIAAIAAlsIhOAAIAACjIgwijIhTAAIAAFsIBPAAIAAi5gApaCpIBPAAIAAlsIhPAAgAtVCpICcAAQAXAAAOgPQAQgPAAgWIAAkDQAAgXgQgPQgOgPgXAAIicAAgAvICBIAHAoIBSAAIhPlsIhcAAIhOFsIBSAAIAHgogA1Ei0QgPAPAAAXIAAEDQAAAWAPAPQAPAPAWAAIBpAAQAWAAAPgPQAPgPAAgWIAAkDQAAgXgPgPQgPgPgWAAIhpAAQgWAAgPAPgA4lCpIC3AAIAAhOIhoAAIAAkeIhPAAgAQ2BbIAAjPIAzAAIAADPgALEBbIAAjPIA0AAIAADPgAsGBbIAAjPIAzAAIAADPgA0FBbIAAjPIA1AAIAADPgADPA7IAWh8IAVB8gAwBA7IAWh8IAVB8g");
	this.shape_1.setTransform(512,384);

	this.addChild(this.shape_1,this.instance,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,1024,768);


(lib.splash_skip = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.skip_button();
	this.instance.setTransform(0,30,1.571,1.571);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-88,-27.1,176,133.6);


(lib.splash_play = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.continue_button();
	this.instance.setTransform(0,30,1.571,1.571);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-81.3,-44.9,181.5,160.8);


(lib.instructionbox_large = function() {
	this.initialize();

	// Layer 3
	this.shape = new createjs.Shape();
	this.shape.graphics.f("#CCFFFF").s().p("EgvCAXQQjlAAAAjlMAAAgnVQAAjkDlgBMBeDAAAQCOAAA2BaIAAABQAkA+gBBMIAAAAQgCC6AADpMAAAAgyQAADljlAAgEgyJgTqMAAAAnVQAADGDHAAMBeDAAAQDHAAAAjGMAAAggyQAAjpACi6QABhEgfg3IgBAAQgvhMh7AAMheDAAAQjHAAAADHg");
	this.shape.setTransform(0.3,148.8);

	// Layer 2
	this.instance = new lib.instruction_box_large();
	this.instance.setTransform(-22.4,140.4,1.64,1.64,0,0,0,183.7,86);
	this.instance.filters = [new createjs.ColorFilter(0, 0, 0, 1, 0, 233, 233, 0)];
	this.instance.cache(-2,-56,545,279);

	this.addChild(this.instance,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-323.7,-89.3,887.7,451.2);


(lib.continue_button_hex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.continue_button_base_hex();

	this.timeline.addTween(createjs.Tween.get(this.instance).to({scaleX:1.37,scaleY:1.37},5).wait(2).to({scaleX:1,scaleY:1},5).wait(3));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-52.6,-45.4,104.1,89.7);


(lib.button_round_200 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.button_round_100("single",1);
	this.instance.setTransform(34.1,34.6,1,1,0,0,0,34.1,34.6);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(0,0,91.3,91.3);


(lib.splash_play_hexagon = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.continue_button_hex();
	this.instance.setTransform(0,30,1.571,1.571);

	this.addChild(this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-82.6,-41.4,163.6,140.9);


(lib.replay_button = function() {
	this.initialize();

	// Layer 1
	this.shape = new createjs.Shape();
	this.shape.graphics.f().s("#009999").ss(1.5,1,1).p("AgSiFQg4AAgnAnQgnAoAAA2QAAA3AnAnQAnAnA4AAQAcAAAagLQADgCADABQADABACACIAfAgQACACAAADQABADgCADQgBADgDACQgrAYgyAAQhRAAg6g6Qg6g6AAhQQAAhQA6g6QA6g5BRAAQBPAAA6A5QA5A6AABQQAAACAAAEIAhAMQADABACAEQACADgBADIAAACQgBAEgDACIhjBMQgDACgDAAQgEAAgDgDQgCgCgBgDIgXh7QgBgEACgCQABgDAEgCQADgBAEACIAbAKQgGgtghghQgmgng2AAg");
	this.shape.setTransform(-0.6,0);

	this.shape_1 = new createjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AidCKQg6g6AAhQQAAhQA6g6QA6g5BRAAQBPAAA6A5QA5A6AABQIAAAGIAhAMQADABACAEQACADgBADIAAACQgBAEgDACIhjBMQgDACgDAAQgEAAgDgDQgCgCgBgDIgXh7QgBgEACgCQABgDAEgCQADgBAEACIAbAKQgGgtghghQgmgng2AAQg4AAgnAnQgnAoAAA2QAAA3AnAnQAnAnA4AAQAcAAAagLQADgCADABQADABACACIAfAgQACACAAADQABADgCADIgEAFQgrAYgyAAQhRAAg6g6g");
	this.shape_1.setTransform(-0.6,0);

	this.instance = new lib.nav_button_icons("synched",1,false);
	this.instance.setTransform(0.6,2,0.355,0.355,0,0,0,50.8,51.6);
	this.instance.alpha = 0.2;

	this.instance_1 = new lib.button_round_200();
	this.instance_1.setTransform(-2,0.5,0.87,0.87,0,0,0,45.6,45.6);
	this.instance_1.alpha = 0.3;

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(-41.7,-39.2,79.4,79.4);


(lib.overview_button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_20 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(createjs.Tween.get(this).call(this.frame_0).wait(20).call(this.frame_20).wait(1));

	// Layer 4
	this.instance = new lib.home_icon_graphic();
	this.instance.setTransform(-1.7,-1.5,1,1,0,0,0,17.5,18.3);

	this.timeline.addTween(createjs.Tween.get(this.instance).wait(1).to({scaleX:1.18,scaleY:1.18},10).to({scaleX:1,scaleY:1},9).wait(1));

	// button_round_200
	this.instance_1 = new lib.button_round_200();
	this.instance_1.setTransform(-1,0.5,0.87,0.87,0,0,0,45.6,45.6);

	this.timeline.addTween(createjs.Tween.get(this.instance_1).wait(21));

}).prototype = p = new createjs.MovieClip();
p.nominalBounds = new createjs.Rectangle(-40.7,-39.2,82,83);


// stage content:
(lib.button_assets = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.audioOverlay();
	this.instance.setTransform(966.7,-1.5);

	this.instance_1 = new lib.splash_skip();
	this.instance_1.setTransform(470,455,1,1,0,0,0,0,39.7);

	this.instance_2 = new lib.splash_play_hexagon();
	this.instance_2.setTransform(335.1,189,1,1,0,0,0,-0.8,28.9);

	this.instance_3 = new lib.MenuStart();
	this.instance_3.setTransform(701,2.5,1.039,1.039);

	this.instance_4 = new lib.MenuReplayOff();
	this.instance_4.setTransform(682,9.5);

	this.instance_5 = new lib.MenuReplay();
	this.instance_5.setTransform(750.5,30);

	this.instance_6 = new lib.MenuLevel();
	this.instance_6.setTransform(677.5,36);

	this.instance_7 = new lib.MenuHomeOff();
	this.instance_7.setTransform(759,-1.5);

	this.instance_8 = new lib.MenuHome();
	this.instance_8.setTransform(650,35);

	this.instance_9 = new lib.MenuFullscreenOff();
	this.instance_9.setTransform(721,60.5);

	this.instance_10 = new lib.MenuFullscreen();
	this.instance_10.setTransform(788.5,19);

	this.instance_11 = new lib.MenuCCOff();
	this.instance_11.setTransform(785,43.5);

	this.instance_12 = new lib.MenuCC();
	this.instance_12.setTransform(627,22);

	this.instance_13 = new lib.MenuBar();
	this.instance_13.setTransform(556.5,15);

	this.instance_14 = new lib.MenuAudioOff();
	this.instance_14.setTransform(792,65.5);

	this.instance_15 = new lib.MenuAudio();
	this.instance_15.setTransform(806.5,-7);

	this.instance_16 = new lib.instructionbox_large();
	this.instance_16.setTransform(697.8,248.6,0.91,0.79,0,0,0,-0.7,149.8);
	this.instance_16.shadow = new createjs.Shadow("rgba(0,0,0,1)",0,0,5);
	this.instance_16.filters = [new createjs.ColorFilter(0.3, 0.3, 0.3, 1, 0, 163.1, 163.1, 0)];
	this.instance_16.cache(-326,-91,892,455);

	this.instance_17 = new lib.answer_button();
	this.instance_17.setTransform(770,459.1);

	this.instance_18 = new lib.replay_button();
	this.instance_18.setTransform(418.1,44.5,1,1,0,0,0,1.6,4.7);

	this.instance_19 = new lib.caption_bg();
	this.instance_19.setTransform(505.1,524.6,1,1,0,0,0,505.1,-114.8);

	this.instance_20 = new lib.howtoplay_title();
	this.instance_20.setTransform(263.5,558);

	this.instance_21 = new lib.unpause_button();
	this.instance_21.setTransform(205.7,325);

	this.instance_22 = new lib.howtoplay_button();
	this.instance_22.setTransform(207.3,446.9);

	this.instance_23 = new lib.instruction_hand();
	this.instance_23.setTransform(188.1,99.1,0.439,0.439,0,0,0,-0.6,-1.2);

	this.instance_24 = new lib.splash_play();
	this.instance_24.setTransform(79.5,137.6);

	this.instance_25 = new lib.help_button();
	this.instance_25.setTransform(212.7,36.5);

	this.instance_26 = new lib.pause_button();
	this.instance_26.setTransform(41.7,35.5);

	this.instance_27 = new lib.arrow_triangle();
	this.instance_27.setTransform(273.4,35.5,1,1,0,0,180);

	this.instance_28 = new lib.arrow_triangle();
	this.instance_28.setTransform(331.4,36.5);

	this.instance_29 = new lib.overview_button();
	this.instance_29.setTransform(120.7,40.1);

	this.addChild(this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new createjs.Container();
p.nominalBounds = new createjs.Rectangle(510.2,377,1992.5,773.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;