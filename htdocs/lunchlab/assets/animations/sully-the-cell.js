(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.sullythecell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle_loop:295,TheNames:304,TheNames_stop:402,ShareTheVein:403,ShareTheVein_stop:489,TripToMuscleBeach:490,TripToMuscleBeach_stop:624});

	// anim
	this.instance = new lib.SullyNest_Idle("synched",0);
	this.instance.setTransform(221.9,274.2,0.491,0.491);

	this.instance_1 = new lib.SullyNest_TheNameis("synched",0);
	this.instance_1.setTransform(221.9,274.2,0.491,0.491);

	this.instance_2 = new lib.SullyNest_IdleShareVein("synched",0);
	this.instance_2.setTransform(221.9,274.2,0.491,0.491);

	this.instance_3 = new lib.SullyNest_MuscleBeach("synched",0);
	this.instance_3.setTransform(221.9,274.2,0.491,0.491);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},304).to({state:[{t:this.instance_2}]},99).to({state:[{t:this.instance_3}]},87).wait(135));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,105.6,366.3,381.7);


// symbols:
(lib.SullyArmR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF75D").s().p("AMWEAIgBAAQhigUhgAeIgNAEQAJhBgIhEQgMhvhfg4IAAAAQgxgeg3gJIAAAAQhagPhbABQhVAAhVAKQhdAMhfAVIABAAQhPARhNAUQhMAThLAXIgBAAQhKAahJAcIgBAAQhIAdhHAeQgJAEgGAIQAJAQAAAQIgBACQgCACgEACIgGgGQhehKgng8QgGgIgJgUIAFgDQDLhuDbhOQBlgkBngcQDSg9DXgPQCAgNCAARQAxAHAxAMQBcAXBXAjIgBAAQBRAhA9A/IAAAAQA9A9AgBQQAdBMAKBRIAAAAQAGArgFArIgEAoQhCgghHgQg");
	this.shape.setTransform(45.9,61.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D3033").s().p("ACwCAQhggphmgLIgBgBQgmgCgkAEIACgBQg3AEg1AHIA3izQAagMAbgIQBOgZBPARIAAAAQBLARBDAkQgNBggPBjg");
	this.shape_1.setTransform(117.2,106.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIEUQgugDgbgRQgcgQgigaQgigagVglQgWglgQgSQgEBhA6BGQgSAAgSgGIgJgJIgBgBQh1iCAwinQAHgVAMgVIAAAAQAshTA7hJIAAAAIAIgJQBHgKBJgGIABAAQAcgDAfACIgBAAQBdAKBXAlQAJAEAJgCIAAADQAoCXgnC1QAKAAAJgGQAMgJACgOQAmhLgMhJQAGAVAIAtIAAABQAOBKgkBYQgfBNgtAPQgvAMgbgLIgCAAQgSgIgSgIQhGgfgch3IAAgBQgGAJAAALQgBBHAUBBIAAgBQAFAPAIALQgPAHgPAAIgEAAg");
	this.shape_2.setTransform(110.5,148.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ECF75D").s().p("AmMKjQiChFgpgiIACgJQAVAGAKAAQAcAABHggQBKgjBRgzQDQiGBHh9QBGh8Ahg7QA5hkAihOQBWjMAAjoIgDgvQgEgrgDgZIAdAEIAlAEQA9AAAkgMQAqgMBSgxQAFAfADA3IAEA6QAACjg6C9Qg6C6hpC1QjnGPlXDXIA6AsQAKAXAAAPQAAAJgBADQhqgriChEg");
	this.shape_3.setTransform(16.5,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D3033").s().p("AhGCUQgZgEgRgEQgVhngPgmQgIgUgJgMQAjAABegeQB1gmApgxQAxDEgIgZQAOA1guAfQgPAKgUAHIgTAGQgXANgxAGIgsAEQgJAAgWgDg");
	this.shape_4.setTransform(53.8,-77.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbFRQgMABgUgBQgtgDgogOQh2gmAAhmQAAhDAsgbQAigUBEAAQAgAAARAcQAMASAAAQQAAAGgaAdQgiAmgpAUIALALQAJAIAGAAQAqAAAvgmQAxgmAAgeQALALApAAQApAAApgfQArghAAgoQAAgFgKgTIgYgsIgPgaIgegzIgYgqIgIgJQgJgIgIADQADArAjBBQAhA9AAAVQAAAYgYASQgUAQgVAAQhVAAg7inQgfhVgOhaQAAgPAUgeQAagmAhAAQBIAABBBbQAhAtA8B+QAgBDAPBlQALBGAAA0QAAAVhSAvQhgA2hdABIADgBgAkUgLQgSg1AAgxQAAhEAxgvIACADIgFBLQAAA2AQA8QAQA6AVAfIghAdQgegrgSgygAi2hHQgMgwAAgsQAAhKBCg0IAGgBQgHAdAaB1QAcB/AeAlQgagFgKgBQgJAAgTADQgVAEgOAEQgZgqgNg2g");
	this.shape_5.setTransform(34.8,-120.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECF75D").s().p("AmNGEIgcgkIBLA6QgEADgFAAQgOAAgYgZgAiJFeQiBgJjNgeIg7gHIArgBIAfACIhjiRQgVgZgzghQgpgaAAgOQAAgQAEgHQAGgIAFgLIAXANQAYANADADQAbAdATAMQAJAGAEABIgdAMQBFAJFkAXQEmAAB6hRQBgg9AAh8QAAgegHgZIgsiIQBIATBsgjQBpghAfgvQAYBQAKB4QAGBEAAAxQAAC1g4BKQgcAjgyAfQgjAVhTAmQg4APhJASQiVAkiNAAQhLAAg8gEgAmqFeIgRgZIAlAZg");
	this.shape_6.setTransform(23.4,37);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D3033").s().p("Ah8CWQgJgZgMgdQgag4gageQCjgtANgFQBggnA7hHIApBxQAXA8gBAYQAAAkhbAkQhUAgg7AAQhSgEgFADg");
	this.shape_7.setTransform(64.5,-16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiWEZQgsgxAAg6QgBghAXgdQAYgdAbAAIArgGIArgFQAGAAARASQAQAVABARQgBAegoAlQgYAVgYANQAEAFAGAFQAKAHAHAAQAMAAA1gfQBAglAAgZQAAgKgDgPQBBAYA1gsQAvgnAAgyQAAgUgFgOQgIgZgig1QgzhSgFgCIgDAEQgCAEgHgGQAFBCAbA7QAbA1AAAIQAAAPgOAVQgTAdgfAAQhAAAhLh5QhJh4gBhaQAAgXAYgbQAbgiAlABQAwAPANAHQBHAbBcCqQBgCxABB/QAAAzh5A2QhwAyhQgBQhdAAg2g6gAkhgEQgTg4AAgoQgBgiALgfQANghARgIQgEBOAQBAQARBCAtBGIgeAfQgpgjgYhIgAjTi4QAEgoAQgaQAQgYAVgCQgPAZAiBgQAjBfA1BUQgHgBgsAHQgqAGgGACQhKh4AJhmg");
	this.shape_8.setTransform(42.6,-56.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgJABIgKgDIAnAEg");
	this.shape_9.setTransform(-24.3,67.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ECF75D").s().p("AkeRPQACgGAGhZQAHhkAFheQAJi8AGhjQALipAWioQA6m8CzsUQAtg8BMAAQAxAAAoAUQAXALAjAXQiTGsg2DTQgiCHgwEXQgfDNgTCpQgoFnADFLQhpANgqABIAAgNIgMAAIgGAhg");
	this.shape_10.setTransform(20.9,-27.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2D3033").s().p("AAdA9Qg7gUgeAAQhCAFgUATIgMAIQgCg+A1gyQA4g3BLAAQAqAAArAbQASALAgAbIgzB8QgUgPg7gTg");
	this.shape_11.setTransform(40.7,-147.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAlEwQg6gjg8AAQgfAAgrAOQhAAUgYAmQAGgdgggQQgWgKg1gJQg6gLgTgHQgkgNAAgZQAAgTAwgfQA0ggAtAAQAbgBAsAVQAuAUAAAQQAAAGgEAUIgFASIAKAQQAJgWAwiAQAohrAeg/QBbjHBYANQg5BlgWAvQgfA+gCAhQgGAlgMACIgSAAQgPAAgOAGQgWAIgDACQgGADAAAIIABAHQACADAAAGIAUAAQCNABBbgYQAtgMASgOQgBgKgEAAIglgCQAWghBWiQQBUh+ArAAQAVAAANAKQAJAIAAAIQAAAoglA1QgOAUhPBhQigDBhRDKIgyglgAEJlUQAlAAALANQAIAIAAAVQAAAGgzBNQg3BYgQAiIgbA+QgNAhgDALQg7AAhDADQC+lkAtAAg");
	this.shape_12.setTransform(49.9,-188.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ECF75D").s().p("Ap2FsIgDgGIgWgmQgrhQgeg/Qh1jkAAgNIAEgKQACgCALAAQAFAAADAFQABAFAGAAQAIAAB2gjQCIgoBvgmQENheFRg3QDqgmBVAAQCpAABeBEQBhBGAAB/QABAFgIAiQgHAkgGARQgbg7highQhOgbhLAAQgxAAgnAGIglAHQANgsgjg/Qghg7gZAAQgFAAgDACQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCASIAUArQAVAtAAAWQAAAKgDALQjHAFkKB2QjnBjkxDFIAZA5QAAAKgCADQgDAGgKAAQgGAAgCgDg");
	this.shape_13.setTransform(52.8,51.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D3033").s().p("ABpAGQhLhRh+AAQgXAAgfAFIg+ANQAIgbAsgTQA2gZBaAAQBlAABHA/QA5AyAAAiIglBvQgnhYgggkg");
	this.shape_14.setTransform(111.6,56.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDAHQgGgJAAgPIATAjIAAAAQgIAAgFgLg");
	this.shape_15.setTransform(-11.6,85.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgzEaQhchWhUi4QAICNBIBWQAQAUAhAcQAVAUAAAIQAAAKAQAQQiMgChUiFQhFhtAAh7QAAgqAag6QAbg8Aug0QBziECWAAQBLAAA5AoQA2AmAcBBQA8CRhZChQARgCAbgVQAkgcAPglQAdAwAIASQAcA9gBA9QAAAugOAVQgbAlhRAAQg3AAhBg3IiHiGQAeBBBEBMQBYBiBPAWQgFAFgcAFQgbAFgVABQh4gBhchYg");
	this.shape_16.setTransform(100.2,92.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ECF75D").s().p("AlgMnQhwgvhUgtIgMgGQApANAzgkIBlhVQBohUCKifQCCiZAnhLIBYijQAQglAThfQANhDADgWQADgXAAgjQAAgQAJgtQAJgtAAgIQAAgXgFgfQADgMAXgUIAYgVQA7heAWg5QAXg6AAg9QAAglgRgjQBrBgA/CkQA3CPAACCQAAEYivEcQivEdloE3IABADIAWALQATAMAEAGQACACAAAIQAAAHgDADQgEAGgOAAQhCAAikhFg");
	this.shape_17.setTransform(30.7,11.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D3033").s().p("AgZDYIgFgcQgFglgFg0QgIhagKhZQgRiXgKgTQAnAaAuAmQAzApACAMQgEAKABAKQgBAXATAuQASAsAAARQAAA0gbA3QgaA2g7BKQgDgMAEgYg");
	this.shape_18.setTransform(51.7,-69.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgdG4QgsgKgcgiIgHgJQBJAOBFAkIgBAEIABADQgrABgUgFgAgvEYQg2hOgUhEQgehhgWhRQgeh2AAgjQAAgLAKg8IAEgPQgIAEgNAVQgRAcAAAcQAABZAJBIQAUCiA9CXQgugegjhTQgihRADhFQAAgHgJg/QgKhFAAhgQAAgRAtg7QAvg9AdgUQBgg8BbAAQCDAAA1FXIgEBKQgDgEgKAAQgIAAgSAMQA4CcANAtQAUBAAAArQgBAmgRAPQgSAQgvAAQhHAAhEkCQg5jXgMi2IABgRQgHAKgIAFIgLAGQgIAKAAA/QAABlAcCYQAlDTBFByQgLAFgLAAQgwAAg5hUg");
	this.shape_19.setTransform(18.5,-61.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECF75D").s().p("Aj9LVQgjguhOiDQBXhQBWiNQBaiRBDiuQCcmUgelfIBFAWQAbAIAZAAQA3AAAsgMQA4gQAbggQgwIbiVFIQhCCRhsCgQg/BhikDZQAEAEAWAKQAUAJAKAIIABAHQgDAfghAAQgcAAgpg1gAmHH5QgBAAAAgBQAAAAABAAQAAgBABAAQABABABAAIAFABIgBANg");
	this.shape_20.setTransform(16.7,13.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D3033").s().p("AgyCTQg/gNgegYIgLi/QAQAIArAMQAsAMAOAAQBFAAA4grQAvgkABgbIAOAAIAFCqQAABFg0AoQgpAggxAAQgVAAgqgJg");
	this.shape_21.setTransform(40.2,-78.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ACQGAQgQgJgegcQhMhFhXgkQhJgdg+gVQgagKAAgOQAAgaASgTQARgTAXAAQAnAABDAUQBRAZAtAlQgFgQgagYQghgegqgPQg0gSgGgKQgPgcgagWQh7hngugyQg2g7AAglQAAgRAIgLQAIgJAKAAQAiAABJA3IBuBaICWCIQgBgkgrguQgWgVhOg9QhFg2gegjQgtg2AAgoQAAgoAlgTQAmgTASAVIgDAXQABAaAkA4QAnA9AiAOQBAAaBZB6IBOB0IAEACQAEAAABgJQgDgYgthPQgvhTgegeQg1g2hQgvQgagWgLggQgLghAYgpQA6gKBPAyQBPAxBLBaQBNBdAvBqQAzB0AABqQAADAigAAQgjAAgagOg");
	this.shape_22.setTransform(13.7,-129.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ECF75D").s().p("ArbE1IEajUQBHg1C1h7QC6iCCVhYQEtivCCACQAmgWBEAtQA5AlAAAyQAAArgdBHQgoBehIBPQgEg+hFg7QhAg3gxAAIgfACQB5hZALgeQALgegOgFQgpAfhEA7QiVCBiTBcIh5BDICihfQjCBrg9AwQgvAogRAbIgxBbQgDAMigCHIijCIIiwipg");
	this.shape_23.setTransform(46.9,20.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2D3033").s().p("ABHBOQgNgkgRgVQgpg0h2AAIhQAHQCMh3BXAAQBwAAA7CzIhrBsIgWhCg");
	this.shape_24.setTransform(83.5,12.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgSDoQgegjABhbQgBhRAfgqIAXghQAQgVAGgaQg6APgkBYQgcBGAABAQAAAJADAaQADAdAFAZQgVAGgNAAQg2AAgigoQgdgjAAgwQAAgzATg9QAbhZAyguQg1AMgoA4QglA0gUBQIgCgiQAAgVAZgqQAdg0AtgtQB9iAChABQAIgBAYAEQAlAFAfAJQBhAbAAA2QgPBIgIAPQgCAKgOAUQgbAkh0BuIAFAKIBUgeQg4BwgKAPQgiAtg7ABQgoAAgSgag");
	this.shape_25.setTransform(59.2,37.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AkOFpQjZhGAAiLQAAhFBVhJIBOg/QAvgpAegqQA0hRAJh1QAEgsAGgNQAJgUAbgBQAiAAAfAkQAgAjAAAoQAAA2g5BNQg5BOAAAKQAAANAfAIQAgAJAyAAQByAACTgqQCTgqAqAAQAkAAAWAMQAWANAAAXQAAAJgHATQgJAbgRAOQgTASgyAGQg9AIgDACQiZA8hPAAIgygGQAHgdgGgbQgFgWgIgDQgPB5hXBjQgcAfgkAeIgoAgIABgBQAQgMBJgVIAmAEIAlAEQAsAABdgHQBcgGAWAAQAoAAAZAMQAZALAAAUQAAAjgwAfQhAAph9AAQjHABigg0gAggDWQAKgLAGgSQAGgVAEgKQALghA0AAQBbAAArgFQAIgBBogfQBhgfAgAAQAyAAAFAZQAFAUgeAhQgcAegsAWQguAYgoAAQgkAAhgAGQhgAGgZABIhTgGg");
	this.shape_26.setTransform(172.8,29.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#ECF75D").s().p("ADeEJQizgeilg5Qh1gjh6goQh6gpgdgNQgdgNgzgQIiagvQhmgiAAh6QAAg1AxgbQAngWA7AAQBWAAB1AoQArAOC/BOQFhCOEvAeQgZAzgJAVQgMAbADAGIgDABQgBABAGAAQAbAAAxheQAXgrAwhtQAMgdAKgmQAKglADgHQADgGADgDQBnAlBHAQQBoAXAggHQgyDYhZBvQhmCCiiAAQhaAAiGgVg");
	this.shape_27.setTransform(67.6,105.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2D3033").s().p("AgTB6QiPgVAAhHQAKhdgBgKIgCg4QA+BMBoAwQBUAkBEAEIgCAAIgBA6QgEAlgaAAIglAAQg7AAg1gIg");
	this.shape_28.setTransform(139.1,70.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Al2FQQhVg1AAhHQAAgxAZgqQAEgGA0hCQBShlAAieQAAgSgLg0QgMgzAAgUQAAgNAEgIQALgSAhAAQA6gBAfAvQAZAkAAAuQAAApgaBHQgaBHAAAJQAAAEAJAEQAMAGAXAAQB5AACph2QBihFAWgNQBAglAtAAQAZAAAOALQAQAMAAAVQgBAVgEAVQgJApgPAFQgvAPgYANQgTALg1AnQhXBAggANIhfAZQAAgcgPgZQgJgUgKgBQAZBfg1B+QgdBCgvBKQAsgkAHgEQAjgUBKgRQBFgRBggqQBMgjAnAAQAPABAMAFQAUAJAAAYQAAAggoAmQgpAmhGAhQimBMjRABQiCAAhag4gAAICOIAEgiQAGgiAogLQAngLA2gVQAqgRAJgFQASgJBUg9QBUg3AnAAQAMAAAJAHQAMAKAAARQAABfjPBTQhAAahcAcIhhAdQAFgPADgWg");
	this.shape_29.setTransform(127.6,2.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ECF75D").s().p("AAKEmQlthGlqiTQgog5AFgTQAEgRADgfQADgfAhghQAognBAAAQAKAAEOBNQEkBTCKAXICvAbQBEAJARgEIAGA6QAegrAHgaQAEgPAAgoQAAgugOhvQgNhlgJgmQAoAYAdAIQAeAHBQAGQA2ABAdgQQAdgPAFAAQAKAAA9g6IALDeQAAERh+BtQhZBNingBQh8AAjugug");
	this.shape_30.setTransform(54.4,90.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2D3033").s().p("AiPA8QgbgMgOgyQgNg+gJgaQAtAfBIARQBDARA/AAIBFgEQBGgGAXgMIAEA0QAAAFgyAcQgwAbgNAFQgLAEghAHQgpAKgVAAQhBAAhEgfg");
	this.shape_31.setTransform(107.5,50.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhTGUQhrgbhdguQjZhtAAiIQAAhZB2hEQAhgUA0gXQAtgTAFgFQBfhaAdh1QAOg4ACgGQAKgWAZAAQAYAAAcAbQAiAhAAAuQAABIhJBKQhMA9AAALQAAAVBCASQBLAVB9AAQAlAABfgMQBfgMAVAAQA9AAAiATQAbAQAAAWQAAA0gtAQQgZAKhBAAQhMAAgyAOQgyAOgMAAQhRAAhCgTQAMgqAAgOQABgIgKgSQgdBqhsBZQghAbgsAaIgqAbIABAAQAHgHAegHQAdgGARAAQAQAABgARQBwAUAnAFQBUALAaAJQApAPAAAfQAAAfgoAUQguAXhQAAQhaAAhngagAg9DPQAegXAUgjQANgbAHAAQASAABEANQBEAMAZAAQAHABBYgMQBZgMAHAAQAmAAATAEQAjAKAAAYQAAAxhiAcIhlASQkegngvgLg");
	this.shape_32.setTransform(206.2,60.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ECF75D").s().p("AAXDwQklg+kNh8QjBhXhAg2QgygqAAg1QAAg+ArgaQAcgQAuAAQBnAADUBBQH+CdDLA4IgiAaIACAFQABAFACAAQA9gRCChYQBxhNApgpQAJBpBXBdQBFBMBDAbQiSBhhKAiQhtAyhqAAQilAAjggvg");
	this.shape_33.setTransform(73.3,105.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#2D3033").s().p("AiABLQg6hQgQhVIBvh8QAdBmBkBbQBWBKBPAYIirCKQhegwhChcg");
	this.shape_34.setTransform(158.6,91.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ECF75D").s().p("AhFEeQkchvj1hYIAEAVQgvgEgagsQgJgOghhYQgVg3gThUQgQhIgBgUQALAOACgBQAqAyBwBAQBzBBCSA3QFeCFEAgPIgNA5QABAKAFAIQAOgbAthNQASgdAEgYQAJhzAdj2IAGAAQAdAeBRANQAzAIA9AAQAoAAAwgOQApgMAWgNIAIACQglDRgYBcQgjCHgvBPQg2BZhUApQhYAsiKAAQiOAAi7hCg");
	this.shape_35.setTransform(60,89);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2D3033").s().p("AhgBxQhGgLgggdQgWgUAAhDQAGhKgCgWQAhATA+ARQBOAVBIAAQBFAAAwgTQAdgNAughQgZC4gPAHQgmAXgWAJQglAOhCAAQhHAAgrgGg");
	this.shape_36.setTransform(119.3,40);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AmAEsQhigmAAhFQAAgrBVg4QgHgGAAgBQgGgCgKAAQgLAABbhVIgBAAQBAhEAAhXQABgGgFghQgFgiADgYQAGhPBGAAQAnABATAhQAWAngHBRQg7gBggAiQgdAfAAA5QAYA6AdA7QA4B1AVAAQAHAAAAgBIACgCIABgQQABgegnhUQgnhSAAgdQAAgWAagMQAXgKAiAAQA/AAAkBhQAZBGAABGQAABdg8A5Qg6A2haAAQhvAAhRgfgABMBiQAAg5gTg2QgahMg2goQgkgaAZgiQAXgiAlAAQBGAAAWBbQANAxAABqQAAANgPAoQgSAzgbAjQAFgaAAgmgAC+gbIADAAQgBgTgGg3QABgdBggdQBZgaBLAAQAXAAAIAPQAFAJAAASQAAAdgVAYQgSASgrAbQixBqgxAlQALgxAEhMg");
	this.shape_37.setTransform(142.4,-5.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECF75D").s().p("AKaCjQhwhDhlgHIB7jIIgBgpQgXAEgcAiQgmAxgGAEQgJAIh0ADIiGADQsGBwhVAfIArA6IAPAVQADAFAAAGQAAATgVAAQguAAg9hoQhNiSgyhaQgFgIgGgRIgGgSQAAgGADgFIACgEQACgDAJgCQAjA7AGAAQBLgQBpgSQDSgmCfgQQCUgQC8gRQDogVApgBQEXABBqBDQBjA+AACdQAABQgWBSQgRBCgaAxQgGg2hxhBg");
	this.shape_38.setTransform(50.2,67.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2D3033").s().p("AA1gRQhchpioARIBLhKIAzgEQBggBBkBWQBdBPAAA7Ig5CRQgriNg3g9g");
	this.shape_39.setTransform(104.4,99.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AiCErQgtg5AAhhIAIg6QAEgjgLgLQgUADgYAdQgdAlAAAuIADAVQAEAZAIAhQgjgkgUgcQgigygBhFQAAjABYh1QBPhpBxAAQCGAABMBlQBDBXAAB+QAAAlgSBNQgPBEgQAtIAOAHQAHADAGAAQAeAAAOgTQACgDAUgqIAjBLQAIAUAAAQQAAAzgUAgQgYAjgrAAQhkAAg2hEQgyhAgfidIgBAHQgDAFgJAgQgMAmAAANQAAA1AdAyQASAcAsBBQghAHgTAAQhfAAgxhAg");
	this.shape_40.setTransform(91.6,130.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ECF75D").s().p("AiWDAQhagWh6glQhqgggigGIALAlQgCAJgHAJQgHALgFADQgFgBgthBIgUgdIiHi7QhYh8ADgMIAPgNQAIABAnAaQAoAaAZAHICoAzQCFAoBwAcQCjApAnAAQDsgBCdBhQAnAYA4AsQArAeAeABQAVgBAHgCQgOglgRgSIhKhEQBEACBAhSQA8hQAAhKQAAgLgGgqQAxBDBVBmQA8BWAABcQAABeg8AvQg6AuhugBQmQABlGhNg");
	this.shape_41.setTransform(52.5,75.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2D3033").s().p("AiSCEIALgBQA3ALBIhyQBGhxgBhlQAMAMAoAgQAiAiAAAkQAABhg8BSQg7BQhFAAQgDAAhmg3g");
	this.shape_42.setTransform(95.2,56);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhyDgQg6gkgkg1IAVABQBAgBAagKQAZgKA2AAIBCABQgCAAgBAKQgBALgDAHQgEAJgqAXIgrAWQAAAKACAIIAmABQAtAAATgcQAOgTAQhEQAnAHAbAAQBLAAAdgsQAagngNg5QgNg4gngrQgpgsguAAIgeADIgCACQgCAFAAAFQAAAFA+A3QA9A3AAAKQAAAlgWAYQgTAVgYAAQg0AAhMgzQhTg8AAhAQAAg/A0grQAogiAjgBQB7AABXBZQBXBWAAB1QAABUhKBHQhcBZijABQhQAAhIgtgAlIAHQgmgkAAg7QAAgsAXgRQAOgLAzgMIgGAlQgDAZAAAHQAAAlARAvQAYA+AtAVQhVgQgqgpgAi1gFQgugxAAg0QAAhIAmgfQAfgZBIgFIgTA/QgHAXAAAGQAABTA2BAQAXAcAkAbIgWACQhkAAg8g+g");
	this.shape_43.setTransform(59,38.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ECF75D").s().p("AAGDhQmQiPiUgzQAKArgYAJQgTgUj5mMIAAgFQABgDAGAAQACAAAMAJQAPALATAQQDWBpDFA4QFmBaF6BgIgFAqQgFAsgFAPIAGgBQAcgeAdguQAcgrAAgKQAAgFgGABQgFAAAAgFQAIg+AAgLQAbAZAoAOQBDAYByAAQAqAAAjgNQAVgJAcgSQgSDHhOBeQhPBfiWAAQiLAAljh1g");
	this.shape_44.setTransform(62.7,100.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D3033").s().p("AicBsQhFguAJh3QBUAWAcAGQAjAHAeAAQBPAAA7gaQBCgdA1hDIAAAWQgLCKghA3QgrBKhrAAQh9AAg3glg");
	this.shape_45.setTransform(128.7,80.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AirGFQhEgfAAgxQAAg5AjhDQAYgvAXgYQAeBiAFAtQACATALAOQARgIAPgmQAPgqAAgyQAAhYh7h8Qg9g8gXgaQgngqAAgZQAAgNALgKQANgLAYAAQByAABMA9QBzBdBND8QAVAAAFgKQADgFAAgSQAAhAgehOQgfhVg0hFQiAitisAXIgBgSQAAgaAUgWQAbgeAyAAQCpAABgChQAoBCAmBuQAVA7AvCcQAIgKAHgfQAFgXAAgJQAAgGgNg9QgPhNgQhAQgXhYg/hMIgogtQgRgSAAgIQAAgJAAAEIACgCIAIgCQB4ANA5B7QAsBfAACRQAACqhlCBQhnCDiKgBQhOAAg8gbg");
	this.shape_46.setTransform(128.5,29.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AlTFnQiNg0AAhbQAAhMBWhXIBHhHQAogtASgrQAshcACh9QAAgsAGgNQAKgUAgAAQAlAAAdAiQAdAhAAAnQAAA8gwBSQgwBSAAACQAAADAPAHQASAIAPAAQCTAACkhUQBkg0APgGQA+gbAyAAQAUAAAPALQAQALAAAPQAAApgQAWQgNARgfANIhAAXQgsARgjAZQgxAihGAVQg3AQg3AEQAHgugZgiQgICAhOBxQgZAjgiAjIgiAkIABgBIBCgjQAagLA2gEQBNgHBngcQBggaARAAQAcAAAOAGQATAJAAAVQAAA+htAtQh8A0jPAAQh9AAhvgqgAgYDPQAQgWALgaIAQgjQAQgdApAAQAbAABpgfQAQgHBsg3QBFghAjAAQBVAAhNBLQhABAg8AcQjcBHhzAAIgJAAg");
	this.shape_47.setTransform(172.2,26);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#ECF75D").s().p("ADeEJQizgeilg5IjOg/Qirg1AAgKQAAgQg2gOQhNgSgrgMQivg1AAh6QAAg1AxgbQAngWA7AAQBWAAB1AoQArAOC/BOQFhCOEvAeQgZAzgJAVQgMAbADAGIgDABQgBABAGAAQAbAAAxheQAXgrAwhtQAMgdAKgmQAKglADgHQAHgPANACQAOACAeAXQAbALBZAVQBoAXAggHQgyDYhZBvQhmCCiiAAQhaAAiGgVg");
	this.shape_48.setTransform(67.6,105.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#2D3033").s().p("AASBzQgzgEgLgDQgigJgogcQgsgeAAgWQAJhfAAgKIgBggQAjAxBxApQBrAnA+gLQgCASgCA3QgFAugYAAQgyAAg+gEg");
	this.shape_49.setTransform(139.1,71.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AlUF8QhJgiAAhVQAAhAAohSQAnhTAAgtQAAiLgjhCIgXgnQgLgVAAgYQAAgMAOgMQASgPAcgBQBCABAfAwQAaAnAABEQAAA3gHApQgDAVgDALIAAATIAgACQA3ABBJg6QAygmBQhYQBehlAdgZQA/g5AnAAQAeAAAKAXQAGAOAAAdQAAAsgmAoQhuBxgIAKQgyA7gUAOQgPAKhKAjQgLgqgngYQAcBvAAAqQgBAcgGApQgMBQgdBMQAvg3CjhwQClhvAhAAQAUAAAKAPQAIANAAAUQAAAugkAxQgyBChmAqQjWBcguAQQhFAYg7AAQhkAAg1gZgAAWBpQAAhJA+goQAhgXA6gaIBkhwQBKhOAeAAQAOAAAJAIQAMAHAAAQQAABZhuBhQhdBRi6BhQgDggAAgLg");
	this.shape_50.setTransform(100.6,2.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ECF75D").s().p("AhEELQmVhai4hjQgZhCAAg4QAAg1A3geQApgWApAAQAXAABHAbQBnAnB/AfQC/AwCCAZIC7AjIAjBZQgGgZABgHIAPA4QAZgnAAgqQAAg9gPhJQgWhugwhaQASAFAhAKQAlAIA/AAQBPAAAjgVQAfgTA9hRQAPA2ATCGQAUCGAAAwQAAB2gyBXQhCByiFAAQiVAAlhhOg");
	this.shape_51.setTransform(48.4,90.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#2D3033").s().p("AiJBRQg3gigThfIA1AOQAXAFAuAAQBTAAA2gPQAogMBqguQAFAPAGAeQAHAfAAAHQAAAhhZAtQhZAshDAAQhFAAgjgWg");
	this.shape_52.setTransform(88.7,52.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AmjIHQgcgRAAghQAAgvAsgZIBLgpQA6ggArgfQArgfAKggQAJgggXgrQgagygMgHQgMgIgyhSQgxhRgohQQgnhQgDgJQgGgaAAg+QAAhqAqg2QAhgrAwgBQBYABAzB9QAdBHAqDMQAoDEAkBOQA3B9BiABQAVgBA3gSQBAgVAAgSQAAgFgFgEQAXAGAxAHQAHAAA2gMIAAACQgiB1hkAzQhTAriIAAQgbAAhHgHIAPhGQgQADgBgBQABgDgEgEQhYBzhIAvQg+AohFAAQgyAAgbgPgAAjCtQgTgVAAgUQAAgGAEgQQAEgQAAgEQAAgJgKgpIggiaIAwgaQAegOASAAQA9AAAmA6QArBCAAB4QAABKggAZQgVAQgwAAQg3AAgdgggAEfCEQgFgJgBgfQgbihgFglQgFgkAigbQAjgbAMAHIABAAIgMgJIAfAFQAiATAeA9QAnBRAABeQAABUh0gBQgmAAgHgNgAFYitIgBgBIgLgGgAFYiuQgHgNgLgCg");
	this.shape_53.setTransform(90.2,-34.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#ECF75D").s().p("AqMFUQgPgyg9jyIgBgEIAEgqIAfAuQAcArB4AdQCJAhDRgBQC/AAChgRQBVgJBagNIgJCcQAvh7AMg1QAMg3AAhXQAAg1gJheQgNh9gWhfQAKAFApAGQAqAIAQAAQBOAABJgXQA6gSAhgYQAHBNALC0QAQDnAABWQAABBgRAnQgYA6hIAyQhJA0jCAgQitAcA8gPIgmADQhVAEkBgYQgngBgMgCQgrgHjNgbQgogEgngHQgYgFgNAAIgdABIAPBEQABAUgHAMQgHALgOABQgSAAgjh8g");
	this.shape_54.setTransform(58.5,79.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#2D3033").s().p("AhUCOQgngFgigHIgkiAQgFgMAAgNIACgYQAOALAhABQARAAAPgBQBqAABkgyQA0gZAvghIAJCVIACAyQAAAcg/AcQhJAihhAAQgTAAgfgDg");
	this.shape_55.setTransform(107.7,18.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgDgBIAHABIAAACg");
	this.shape_56.setTransform(-14.9,83.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("Ag4GgQhMhiAAhkQAAgxAsgmQAogjA2gLQA6gLAnAVQArAXAAA5QAAA2ghAcQhBAthAAyIAHAGIAGAEQADACAEAAQBHAAA+grQAygiALggQAdARAugVQAsgTAdgnIASAIIAMAEIAUgEQAZgJAYgVQgLC/hIBWQhEBTiGAAQiCAAhWhzgADiDIQgMgLgDgRQgDgTgDgEQgdgsgKgKQgwgygXgiQgMgPgQgaIgWAWIgshkQgFgKASgeQAVgeBRAGQBRAHBEBYQBABRAABRQAAAogZAiQgdApgwAAIgBAAgAF1ADQgiiBiFhVQB6gxA/BiQA+BiAABOQAAArgcAlQgWAdgVAIQAIg9gRhDgAkEg0QgVgigig8IgvhRQgphDgahBQgXg7AAgdQAAgnAUgYQARgUAUAAQA1AAAtAnQAQAOArA0IDgHFQguAPg1AbQgsAWgFAAQgJAAhZiQg");
	this.shape_57.setTransform(32.5,-41.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#2D3033").s().p("AiZCgQgghSgVgmQAwgWAzgEQBAgEAGgCQAjgIAegoQAlguAyhrQAfBEASAxIAaBHIAPAdQAHAbgdAdQgDABgMANIgYAYIglAiQgSAQgUAHQguATiMgBQgWAAgOghg");
	this.shape_58.setTransform(70,13.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ECF75D").s().p("AnBHiIgYgzIi2mHQgCgFgJgPQgJgQgDgGQADgNADgEQAWAJAOAPQAcAiAOALQAXARAsAJQC7AnDBAAQCGAABYgLQA8gICagaQArBcAEABQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQACgBAHAOIAIAPQAFgPAAgPQAAgrgoiIQghhwhNjpQAwAIAPAAQBqAABEgiQBBggAzhIQA9CDAgCfQAYB6AABcQAADOheBgQhiBkjVAAQmGAAjAgOQhhgIgZgIIAFARQAFAUABAYQADATAAALQAAARgGAGQgFAFgMAAQgCAAgIgQg");
	this.shape_59.setTransform(37.7,76.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgIGmQhWg9gfgRIAxg1QAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQgCgDgFAAQgEAAhnAZQhnAZghAAQg6AAg6gdQg/ghAAgsQAAgoAkgUQAdgQArAAIA6APQA/AOAdAAQAjAAArgZQAugcADgdIgHAEQgOAGgMABIgLgCQACgBANgWIAOgZIgdAwQAOgcBIiWQA5h5AnhFQB9jUCBAAQAwAAAdAZQAkAhADA6QAEA7hKAzQhKAygtApIhXCMQheCVAAAxQAABjBoAnQA1AUA+AAQAPAAAFgGIgCgJQASAYAjAUQAkAVAbACIAAACQgcAihDAYQg7AUgvAAQhZAAhWgzgAFSE3QgsgUAAgWQAAgXAYgrIAvhMIASiDIBCAKQAcAEAKAIQAWAPAABSQAABqgSAyQgWA6g1AAQglAAgpgSgABNDXQgRguAghNQAbhAAvg3QAvg5AkAJQAjAJARAWQARAXAAAlQAABegrBSQgqBPgrAAQhcAAgVg4g");
	this.shape_60.setTransform(126.9,-14);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#ECF75D").s().p("AkZFFQlJhahfgUIgCBFQgEAQgNALQgKAKgLACQAAgYgEgFQgHgIgCgMQgNg8AHk7IAAgEIAPgqIASAyQAMAXA/AgQBLAnBwAeQExBYGjgEIgyCZQB8iwAjiMQAPg7AKhfQAMh5AJhNQBdAZAcAGQAiAIAdAAQAgAAA4gMQA1gLAhgMQgvEfgZBvQgmCjgzBTQg3BZheAlQhaAjijAAQipAAk9hQg");
	this.shape_61.setTransform(73.8,95.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2D3033").s().p("AjCBGIAAibIAHgUQAKAUBEAcQBZAjBhAAQA5AAAYgIIAfgMIAFARQABAFAAAGQAAA4hJAiQg/AehXAAQgnAAh/gkg");
	this.shape_62.setTransform(134.9,41.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAOgXIgOAXQgLAWgCACg");
	this.shape_63.setTransform(111.5,-5.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("Ak3FJQhMgsAAhbQAAgnAdhNQAdhOAAgNQAAh0gzhgIgjg8QgQgdAAgQQAAgKAMgKQAPgMAVAAQBJAAArAzQAhAmAAAjIgIBuQAAAjAOATQANASAYAAQA2AABGgxQAvghBMhMQBYhWAdgXQA9gyAoAAQAZAAAPAVQAQAVAAAnQAAAchrBrQhzBzhMAaQgEgKgZgbQgXgbgGgDIAdBcQAMAnAAApQAAAHgKBHQgIBNgHAkQAZgfCfhkQCqhqAsAAQAVAAAMARQALAOAAASQAAAogzAzQgwAvhQAsQi0BkibAAQiaAAhLgtgAA+BvQAAgZgFgXIgHgfQBggjBvhxQA2g3AQgOQAkgdAbAAQAoAAAAAxQAABWh4BXQhbBCicBBIgDABIACgdg");
	this.shape_64.setTransform(120.3,-0.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#ECF75D").s().p("ABFFBIjygoQgxgIi0gwIjOg4QhPgUgcgeQgggiAAhOQAAg8A2giQAogYArAAQAHAAEyBGIE1BFIB0AXQB9AWBbAAQAJAAAGgCIAGA6QAdgsAGgRQAGgUAAgyQAAglgIg/Igbi+QAJACA9AYQAmAPAzAAQAgAABEgWQBagfATgrIAJDeQAAEAhwB0QhjBljDAAQhbAAi2gbg");
	this.shape_65.setTransform(55.2,85.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2D3033").s().p("AieApQgagcgThgIBVAeQBBASBXAAQAyAAAzgMQAVgEAvgPIABAQQAAAygwAkQg+AwhxAAQhnAAgkgrg");
	this.shape_66.setTransform(107.9,46.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AigIFQhYhdAAjBQAAh2C9AAQAmAAAaAeQAeAgAAAvQAAAygpAgQgwAjhzAXIAfAQQAUAHAcAAQBCAAAhgdIAXgUQAOgJASAAQAWAAAQAJQAPAIAEAAQAwAAAVgSQAWgTALAAIAUAKQAUAKADAAQAHAAASgFQATgFAOgFQhQCkghAmQhCBPhvAAQh5AAhJhMgABdEVQATgdgcg9Qg1h1gRg3IgZAQQgKhNAAgSQAAgFAYgUQAggXAcAAQA3AAA8BNQBABRAABcQAABDgjAoQggAlgyAAQgQAAgQgFgAEdDFQALgrAAgXQAAhMgZg3QgMgag+hdQB7gZAeBeQAeBdAABWQAAAtgfAlQgiAogvABQAIgQAJgngAjvBCQgGgJgJghQhAjXgTg6QgTg7gMhNQgLhDAAgjQAAgtARgdQARgdAcgBQBFgDBLCVIBdHvQgxgCguANQgnAOgJAAQgLAAgFgJg");
	this.shape_67.setTransform(52.8,-46);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#2D3033").s().p("AiPCRIgYg8QgSgrgSgjIAxAFIArAFQBKAAA5gjQA7gnBGhdIA3CYQgbBHhfArQhOAjhGAAQgaAAgzgGg");
	this.shape_68.setTransform(70.6,18.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#ECF75D").s().p("AkLKhQiIg4hNhkIAZAFQBBAYBRhCQAegYAzg0QA+g/CBibQB/iaAzhAQA0hBAahiIBCAGQgNgphcg0QgqgYhJggQiOhAjNgeQAigMAkgzQAxhFAAhdQAAgcgFgeQFdB6CTB1QCYB5AAClQAACrjRDzQiUCrkhD3IA7AfIAkAXQgJARgHADQhNAAhngrg");
	this.shape_69.setTransform(29.9,22.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2D3033").s().p("AiMCKQA0gYAwhzQAuhzgOgzICHAtQAOAkAAAJQAAA7ggA+QgcA3g6BFg");
	this.shape_70.setTransform(-4.6,-38.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AlQFIQgfgcgQgvQgoh6BOiuQATAlAlAjQAxAxA1AUQgOBDAAAFQAAAJAGAmQAGAlAAAKQAAAogRAVQgWAcg1AAQgcAAgbgZgAgpCdQgigaAAggQAAgSARgmQATgrAdgkQBOhpBlAAQAMAAAIAUQAGAPAAAKQAAACgVAvQgZA4gNAlIAJAJQAygjAWghQAXgkAAgvQAAg4ghgeQgdgbhAgOQgngIg1gUIgugRQgCAAgKAHQgMAIgIAKQAZAYALAEIBkAbQgpAYgrAlQgiAdgGAAQguAAgqguQgtgyAAhBQAAguAogaQAggVApAAQDhAAB2AyQB3AyAABiQAAAmgaA3QgbA8guAxQh3CFigAAQgeAAgfgYgAizAUQgpgMgegoQgjgvgLhJQBZhtgdAyQgFAmBDA+QBBA9AggFQgEAugfAUQgTANgWAAQgNAAgNgEg");
	this.shape_71.setTransform(-53,-35.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AjmHCQgKgVgBgeQAAhoCAgvQAfgMA4gPQAmgMAAgOQAAgyhBg7QgsgmhqhAQhxhGgjgcQhEg1AAgpQAAgXAYgVQAfgZA1AAQAPAAEeDdQgKAKgTAcQgUAcAAAIQAYgfBHgbQBhgkCagOQhTgfh/iIQh5iCAAgoIAIgYQANgWAdAAQA8gBBMA9QBFA5BBBeQBBBeAmBmQApBpAABWQAACwi3AAIiCgIQhrAAhbBbIg7A+QgbAdgRgBQgWABgOgZgAiejyQgwgng4grQghgaAAgNQAAgoBCAAQA2AAAmAVQAeAQAmApQAuA2AfAjQA6A8BEA0IhmAmIi+icg");
	this.shape_72.setTransform(10.8,-139.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#2D3033").s().p("Ah0CEQgKgOgagwQgXgsgYgaQByAIANAAQBFAAA3gwQA8g0AJhPIgCgTQAIAVBJDpQAAA4gvAlQgsAig6AAQh6AAgtg7g");
	this.shape_73.setTransform(45.8,-103.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#ECF75D").s().p("AmqLUIgYgLQApgVBMhGQCZiNCIjkQCGjjAzikQA4izAAjRQAAgcgPhWIgli5QAIAEAtAIIAtAIQA6ABAfgQQAYgLBNgyQAFAnAHCYQAGCIAAAvQAAGojTGiQiXEsi/DDIAQAFQASAEAOAJQANAJAAAHQAAAKgEAIQi9hPjAhPg");
	this.shape_74.setTransform(24.4,2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#ECF75D").s().p("AlCSOQACgIAHhdQAIhtAGhgQAJjHAHhoQAMiyAaizQBAnTDKtCQA1hABUAAQA2AAAuAVQAZAMAoAYQjJGKiAMlQg0FCgYEnQgXEZALCNQh2ANgvABIAAgNIgNAAIgHAjg");
	this.shape_75.setTransform(14.4,-33.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#2D3033").s().p("ABBBHQhCgchCAAQgfAAggAKQggAKgPANQgQhWBbg0QBCglA2AAQA7AAAwAbIA3ApIg6CDQgXgPgigOg");
	this.shape_76.setTransform(36.6,-159.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AAqFBQhBglhFAAQgiABgxAPQhIAVgaAnQgEgdgngSQgYgLg6gKQg9gMgUgIQgkgOAAgZQAAgCAJgMQAMgQARgOQA0gqBKAAQAwgBAZASQAdAZAeAQIgKAvIALARIAmhxQAqh1AnhVQB+kSBkA3Qg4BZgqBhQghBPgBAXQhFAKgXANQgKAGAAAHQAAAGADAEQAGAKAQAAQByAABRgKQBmgNAigbIAAgNIgvgCQA2hhBChaQBhiGAwAAQAZAAANALQALAHAAAJQAAAqgrA5QgPAVhaBnQi1DMhaDVQgOgQgpgXgAEqloQApABANAOQAIAIAAAWQAAAVgsA6Qg9BPgPAaQg5B2gHAbQhOAAhAADQDWl5AyAAg");
	this.shape_77.setTransform(46.9,-203);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_59},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).wait(1));

	// Layer 1
	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AJIMWIgBAAQg0gEgwgXQhEAdhFgcQgGgDgFgEIgRgSIgBAAQiQifA7jQIAAgBQAKgcAOgbIAAABQAvhZBBhOIAAgBIALgNIBJjtIABgDIABgBQAWhUgKhYQgIhNhCgoIAAgBQgkgWgqgHIgBAAQhUgOhVABQhRAAhPAKIAAAAQhbALhcAUIAAAAQhNARhLAUQhLAUhJAXIgBAAQhIAZhHAbIgBAAQhHAdhGAeQgNAGgOgGQgNgFgGgOIgBgCQhdhKgog8QgFgIgKgUIAAhMQBhg1CAg2QCBg3Cwg1QCvg2DZgfQDXgfB1AHQB1AIA4AOQBhAYBbAlQBeAmBHBJIABABQBHBHAlBgQAgBTALBZQAIA0gHA0IAAAAQgWC0gcC2IABAEQADAMgEAKIAAAuQAWAOAMANIAAAAQAUARATBlIAAAAQARBegrBtQgwB2hNAQIAAAAQhMATgsgWIACABIgUgIQgoAig1AAIgKAAgANKCXIAAgBIgBAAg");
	this.shape_78.setTransform(50.6,104.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AmiSKQiChEgpgiIgRgVQBngLCkiHQCEhsBVhrQB0iSBJilQByj6AAj7QAAhHgYhoQgLgygbheQgCgIgBgZQgGgWgggFQhNgLg4hLQg0hEAAhAQAAgQgNgXIgdgxQgphNAAhlQAAgjAVgvQATgrAVgVQAQgQAfgFQAPgDAOABQAaggANgHQAOgJAlgIQASAAAFADQADgBAXgXQAfgdA3AAQA0AAA7AsQA6ArAyBLQB0CtAADQQAAAFAEAIQADAIAAAFIAWBEQAXBJAGAXQAOA0ANBoQAPB6AABcQAAFki+FwQjbGqmFDyQAKAXAAAQQAAAIgBADQhqgriChEg");
	this.shape_79.setTransform(18.7,-32.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AmwNOIgcgkIBLA7QgEADgFAAQgOAAgYgagAjwNTQhYgMiFgeIgRgaIgcgOIg7gHIArAAIgKgFIApAGIhjiRQgVgYgzghQgpgaAAgOQAAgRAEgGQAGgIAFgMIAXANQAYAOADADQA/AIBOAHQCaAPCIAAQEyAABnhMQAmgcAMgoQAHgVAAgpQAAhWhOijQgyhogvhIQgPgYgqgTQgugYgVgUQgigigOgoQgKgfAAgqIgngsQgpgygIggIgOg6QgHgiAAgaQAAgYAKgoQALgsAOgUQAOgUAhgPQAmgRANgNQAzg1AtAIQASgYAvgUQAogSAYAAQCUAAB7DyQArBVAeBgQAaBTAAAhQAuBTAtCBQBcD+AADjQAADRhCBVQgaAhgyAiQg+AngkAZQgpAdhDAOQhOAMgnAIQg5ALg5ADQgnADhVAAQiBAAhwgPg");
	this.shape_80.setTransform(26.9,-8.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AoZYRQgLgDgYAAIAQl1QAOk0AglAQAdkeBUl5QA8kTA6jnQAkiQAAgPQgBgugMgFQgTABgSgBQg/gGgygiQgtgfAAgbQAAgpAqgqQA4g2BeAAQAvAAAlAVQAiASAEATQBCkkBnh1QA8hFA/AAQAIAAALAKQAKAIAHALQAmg7AfgXQAZgSAdAAIAsAMQAtAUAMAlQAXgWAmAAQAgAAAgAaQAgAZABAbQAABAhZB4QhrCFglAzQhGBihQC8QhaDmgyB3QhyEWhWHJQhfIDgzLFIgUAAIgIgPQhoANgqABIAAgNIgNAAIgGAhIgmAAQgBAGgCABIgHgEg");
	this.shape_81.setTransform(45,-72.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AIKJ4QgsgMgLAAQjCAAiMi8Qg0hIghhTQgdhKAAgyQAAhnBBhYQAdgnAwgtQAcgSAAgKQAAgJAvgtQA4g5AKgNIAJgMQg0AZjaBIIjVBHQlOC3iBBEQAAALgCACQgDAGgKAAQgGAAgCgDIgDgGQgJAAgGgLQgHgLAAgQQgrhQgeg9Qh1jmAAgNIgIgGQgGgGAAgNQAAgEB7gzQCWg+Cjg2QH6ioFtAAQDcAAB2BOQCCBWAACxQAAAWgIAgIgQA4QgBAJg5CnQg2CdAAAKIAmAxQAoAzAGAOQAJASANA7QALA0AAALQAAA7gaAkQgUAdhDAvQgkAZgqAUQgwAXgYAAQgoAAgsgMg");
	this.shape_82.setTransform(55.7,72.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("Al2PdQhwgwhUgsQgJgEgGgEQgLgJAAgSQAAgDByhmQCQiBBphwQFlmAgRkCQgOAFgoACQAJAkgtAVQgqAVhSAAQh/AAgwhEQgLgPgSgpQgOgggOgMQiGhzAAmmQAAhmBphjQByhtCRAAQAfAAAzAYQA5AbAeAmQAOATBNAsQBfA3AWAQQAZASAtAvQA9BBAyBJQCUDZAADRQAAFjiuErQi8FEl/DwQATALAEAHQACACAAAHQAAAIgDADQgEAFgOAAQhCAAikhEg");
	this.shape_83.setTransform(32.9,-6.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Aj/UCQgjgvhOiDQgIAAgFgJQgFgJAAgMIgIgMIgKAAQDrk3BkktQBUkGABk5QAAhugMhUQgEg4gXhpQgOhDgqgdQgJgGhLgdQhgglgdgUQgegWAAggQAAguAzgYIAmgPQATgGAEgFQhPhPhkhSQg7g3gBg9QAAg3AkgWQAegUAoAMIAAgTQAAg1AugjQAkgaAeAAIAzALIAYgPQAYgRAQABQBJAABFAnQBXAvBQBmQBUBqA4CZIAoCDQAFAAgFgEQgFgEAFAAQAJAAAdC8QAeDIAABoQAAF1iaGgQihGwkaFbIACAGQgEAfggABQgcAAgpg1g");
	this.shape_84.setTransform(16.9,-42);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AozHjIixipIgfgeQA2g7CqiAQC3iHDQiFQIalaDEAAQBgAAA2A8QAsAwAAA4QAABiguBXQg9B1iTBsQhXBCgxBXQgaAuggBfQgbBNgZAbQgnAohOAAQgYAAgqgVQgmgXgCAAQgIAAgWAKQgUAKgMAAQiHAAhYjDQhSBHhjBTQhQBCgdAWIglgjg");
	this.shape_85.setTransform(47.8,19.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AmyK3QlrhhkIiNQgYgNhPglQgdgOgWgXQgOgPgKg2IgHgzQAAhVA5gsQAwgkBQAAQBcAACkA2QBPAbCNA6QCPA5CKArQDxBMCDAAQAKAAAaiBQAaiBAEhFQAHhnACh8QAAgfACAAQgHgJAWhAQAXhCBCgpQBCgpApgtQApgtATgeQAOgXAKgzQAOhEAFgQQAfhjBoAAQAuAAAlAzQAnA3AABLQAAAHhgCZIBxAHQAlAAAqgNIBPgbQBygqB3AAQA3AAAiAjQAiAjAAA9QAAAOgNAXQgOAYgUAMIgIAEQAbAAAOAdQALAWAAAYQAAAxgtApQg0AthcAQQAjApAAAfQAABYh7AmQhHAWhSAAQguAAgxgCQhKgEgygJQhCFZh6CgQh3Cdi8AAQjKAAlMhZg");
	this.shape_86.setTransform(102.5,62.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ApyLRQiagjhXgnQiihIAAiJQAAhOBCgxQA9gtBTAAQA8AAF4BaQGMBgCBAMQAIgpgujKQgoiygXg8QgQgtgehOQgJgXAAgVQAAg3AZg2QAOgcAthAQApg7ASgoQAag+AAhFQAAg8gHghIgHgeQAAgpAlgmQAlgoArAAIAZAGQAdAHAYAOQBMArAABTQgHBcgCBGQBggZCnhpQCThbA4AAQA2AAAiAoQAfAkAAAtQgBALgDAMQgHAYgQAKIgHAHQAkACAUAWQAUAXAAAqQAAAjgbAqQgmA7hLAfQA7AdAAA3QAABrilBIQhhAqh2ARQAXBnAGDPQAAE0h8CEQhmBsjIAAQkwAAnuiJg");
	this.shape_87.setTransform(76.1,44.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AiMKAQhKgEjNgnQjNgnmcicIhpgzQhtgghRhEQhGg7AAhWQAAhcAtgpQAsgrBeAAQAUAAARAGQBUAbC+AzIFSBmIGsCBQCBhNCailQBRhVBoiCQAdgkBFggQBUgoAfgYQA7gvAhg8QAPgcAYhDQARgxAUgSQAcgaA7AAQA/AAAfA5QAZAsAAA/QAAAWgRAjQgIAQhBB1IBmARQApAABPgLQBPgMBDAAQBpAAArATQA+AbAABPQAAAmgQAXQgQAYgmAMQAUAPAJANQAMAQAAAXQAAA7hDAmQg9AkhVgBQAGAIAHARQAKAWAAAPQAAAwhBAoQg9AmhHAAQgHAAg1gHQg4gGgTgEQgZgFhNgYQg9gUgfAAQhXBBhlBIQjKCQhHAgQhEAghjAXQhTAUhDAAIgTAAg");
	this.shape_88.setTransform(121.5,76.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhvNkQhAgMi6gpIABAAIAxAHQhGgMimhDQjPhSiMhaQgwgEgZgsQgJgOgihaQgUg3gThUQgRhIAAgUQAKAOACgBQAzAPCIA6QCrBIBUAgQFhCEDygJQAQg7ANjOQAIhnADhcQAAg+gVh/QgVh/AAgJQAAhGAegxQAPgYA3g1QAwgwAVgrQAghBAAhfQAAiaCHAAQBDAAApAqQArAsgFBNQAPgQAYgMQAZgLAQAAQAoAAAhAWQAqAdAjBEQAegUBigfQBnggAvAAQA2AAAZAnQARAcAAAoQAAA2gXAcQgTAXg9AiQhtA9gqAaQhzBJh8BkQgEAZghEAQgcDgglCQQh3HIkhAAQhGAAhpgSg");
	this.shape_89.setTransform(90.1,42.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AF+KtQgdgHgfgRQgTgLgpgfQgegZgTgDQgtgHgbgQQgigTgcgsQhEhqAAiAQAAiXBQhwQAagkAyg1QA8hAATgXIBXhaQBChDAPgfIh0gEQimAAlNA6QkuA2hfAhIAPAVQADAFAAAGQAAATgVAAQguAAg9hoQhNiUgyhaQgaAFgXgKQgWgLAAgNQAAgJAMgJQARgNAeACQACgDAJgCQDeg0FbgjQFagkFNAAQFLAABkBeQAqAoANBAQAJAoAABXQAACChdDuQgYA/gtBuQgjBZgIAlQA2BBAYArQAXAqAAAhQAABZgmAyQgsA7hdAAQggAAghgOQgcgMgCAAQgCAAgdATQgiATgSAAQgmAAgegIg");
	this.shape_90.setTransform(50.5,104.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhuG4QiNgjkDhZQgCAJgHAKQgHAKgEADQgFAAguhBIg4gfQAHgEAdAGIiHi9QhYh6ADgMIgWgNQAJgEAKAAQAzAADyA4IFeBOIAOADQglgRgJgfQgGgUAHgpQg7ACg4g9Qg2g9AAhEQAAhEApgpQApgpBOgLQACAAAqghQAyghApAAQAIAABAANQAMAAA2gcQA4gcAWAAQAdAABDAWQBMAaAuAfQAfAVAhA0IApBBQAJALA9AwQA+AvAOASQAtA4A+BDQA8A+ARAWQA9BPAAB3QAAChheBBQhYA9jQAAQkEAAkwhNg");
	this.shape_91.setTransform(54.4,56.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AjDKWQikg3iHg4QiFg2gdgYQgUgUj4mOIAAgFQAAgCAHAAQABAAAMAIQAQALATARIACgwQG2CpC8AqQA8ANCFAbQCNAfC9A1QACg0AAglIgKh/QgLiEAAg1QAAhkAYg5QAXg6A0gWIh4h6QhFhHgBgvQAAgnAZgpQAkg9AOgrQAVg/AtgbQAkgXA4AAQAUAABfAfQAJAAAQgNIAQgNQAzAAA8AaQBCAcA2AzQCGB+AADHQgBBcgVA7IgnBrQgGAUgIA9QgNBggPBbQg3FbhRCJQhgCkjDAAQirAAmkiPg");
	this.shape_92.setTransform(72.7,61.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AmqLHQlqhhkJiNQgYgNhOglQgdgOgXgXQgOgPgJg2IgHgzQAAhVA4gsQAxgkBPAAQBcAACkA2QBPAbCNA6QCQA5CJArQDyBMCCAAQAbAAAckdQAWjdAEh1IAIANQAjhVBShNQBQhLAhhSQAag+AYiAQAehgBMAAQAvAAAnAlQAyAuAABNQAAAEgXBPIgYBcQBTADCghQQBUgrAkgOQBBgaAyAAQAyAAAfAfQAeAeAAAyQAABHgwAQQAagDARAZQAOAUAAAYQABA4gsAwQgvA1hVAYQApAaAAAxQAAB3jcA4QiZAmh8gGQgwFpiKCxQh9Cfi8AAQjJAAlNhZg");
	this.shape_93.setTransform(101.7,60.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("An5LRQjKgvhYhHQhMg/AAheQAAhNBCgyQA9gtBTAAQAMAAFSBQQFrBXB0ATQhtlNhXiCIgog8QgMgZAAg0QAAhGAqhLQAohKAAhaQAAg7gXhMQgZhNAAgQQAAhAAqghQAhgcAwAAQAvAAAvApQBSBGgCCgQBahICgiWQCAhwAzAAQAkAAAiAYQAuAhAAA5QgDAhgQAPQAtgGAbAcQAXAZAAAmQAAAvgXAuQgaAxgyAnQApAIASAWQASAUAAAlQAABIg+BCQhOBTi8BcQA0CmARBFQAcB5AABnQAADIhEBtQhVCHjAAAQijAApoiRg");
	this.shape_94.setTransform(60.3,43.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AAXRcQiggFhOgJIhZgJQhWgLgvgMQhfgXhCgEIgTACQABAVgHALQgHAMgOAAQgSAAgjh8QgPgyg9jyIgKgFIAJABIAEgqIAfAuQEyAeBhAHQBYAHBDAAQBsAACIgKQBOgGCPgMIAAhXQgChYgkjwQgnkHgbgmQg+A4gbAQQg5AjhLAAQhSAAgzgZQhBgfAAhDQAAgvAegcQALgLA/gmIBLgrQArgdA9hDQiAi8g/iFQhAiIAAhZQAAh9A7hJQA3hCBTAAQBoAAA+BpQA/BpAWDbQAegTBRgSQBUAGANAGIAKAEQgEgCAmgVQAmgWAsgLQArgLBSBZQBSBZAFBeQAGBfgyBMQgzBLAAAvQAABjAcEMIAhFFQAKCZAAAPIgGBhQgCAbgKAnIgMApQgLAkgqAxQgnAsgtAhQhLA2i2AcQh7ATiCAAIg7gBgAKlk1IAAABIAPgFgAJoquIgBgBIgLgGgAJoquQgHgOgMgCg");
	this.shape_95.setTransform(63,16.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AnoRmIgYgzIi2mHQgBgFgJgPQgKgQgCgIQACgNAEgEQAVAJAOARQBMAQCCAKQCKAKCWAAQCCAABogIQAygEB/gOQgDg/hTjJQhHithNidQgMgYgRgIQgXgHgRgJQhIghhxipQgZglgLg1QgJgtAFgeQAIgsgNgLIgNgIQgJgGgFgJQilkUgUgkQhZikAAhKQAAhQAlgsQAignA3AAQBTAABaBiQBrB0BWDiQANgpA0gVQAlgPAfAAIAQAGQAVAFAZAAQAJAAAcgeQAdgfAVAAQBZAABZBsQBXBpAABlQAAAFgJAhQgKAhAAAFQAQBOAAAUQAAAIgLBcQAAATAwB3QA4CHBICTQAgBCAuDGQAqC3AAApQAAEijWBoQiEBAkYADIgcAAIAQgDQgZgDhGAAQiBAAgZgDQgfgCkAgiQADATAAALQAAARgHAGQgEAFgMAAQgDAAgIgQg");
	this.shape_96.setTransform(41.6,12);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AjkQLQiSgVjkg6QhQgVhggkQhZgigGgBQgEAQgMALQgKAKgMACQABgYgEgFQgHgIgCgMQgNg8AGk9IgIgGIAJACIAOgqIATAzQFgBcClAbQCFAWCZAAQAgAACtgHQBQj8AAlcQAAgfgIh2Qg8ATgXAFQgXAHgLAAQheAAhUg2Qhcg8AAhRQAAg4AjgbQAlgcBQAAIBnALQAkAAAPgFQAPgFAJgSQALgWAfhtQBcjxCBiGQB5h9B5ABQB3AAAqBJQAqBKgKAwQgKAvg+BSIiWCBQB5gFA2AQQA1AQAjAXQAnAYARAxQARAxAABaQAABiggA0QggA0heA3Qg3AfgTA0QgLAfghC5IgeDGQgXCfgKAmQg5DchtBoQh/B5jeABQipAAiQgWgALdh0IAQADIgPgFgANmnZIAAAAIgJgQg");
	this.shape_97.setTransform(90.3,37.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AjhMeQjvgwjLg1QjLg1g3g3Qg3g3ABhFQAAhMBDg1QA/gyBRAAQAfAAGLBUQGIBUB7AAQAKAAAIgCIAAgjQgDhJgThmQgShhgZhRQgPgug1h4QgehGAAhBQAAgKAehSQAfhTAAg4QAAgzgnhgQgmhgAAgTQAAgeAVggQAcgqAvAAQBKAABAA7QBTBNAJCPQBmg5CMiGQA2g0AegTQAqgcAoAAQAwAAAtAlQAuAmAAAvQABANgRAdIAJgCQAzAHAbAgQAXAcAAAmQAAAmgbAvQgcAvggAVQBYAdABBEQAABQhDA8QhTBMjUBLQAOAxAIB6QAHBZAAA4QAAB/gcBsQglCMhSBlQgrA1hhAVQhMARiIAAQiKAAjsgwg");
	this.shape_98.setTransform(71.4,41.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AnoSYIgYgzIi2mIQgBgEgJgQQgKgPgCgJQACgMAEgFQAVAJAOARQBMAQCCAKQCKALCWAAQCBAABpgIQAwgECBgOQgIg3gtiHQgyiSgphRQg9h2hAhiIhfiAQgqg7gRgtQgUg3AAhRQAAgcAPgyIAPgvIgbg/QgkhigsixQgYhigJgxQgHguAAgpQAAhjAtg3QAngvA3AAQBxAABKDDQArB0AkDXQAigsBPAAQAMAAAqARIAoAQQAEAAAfgSQAfgTAZAAQBYAAA9CNQAfBHANBHQAABBgWAvQgXAogEANQguCnAAALQAAAZA1BwQBACKAJAZQA4CfAZBzQAWBdAGAkQALA6AAAoQAAEsjeBjQhbApiNAOQhgAJitAAQhmAAh2gPIjngdQADASAAAMQAAARgHAGQgEAEgMAAQgDAAgIgPg");
	this.shape_99.setTransform(41.6,7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ABnMyQiGg5hMhjIAYAEQC/isDSj3QCtjMBBhoIhdguQhNgmgogJQg7gNnGhwQgNAAgyAnQhCAmhgAAQhPAAgtgiQgpgfgPhAIgDgRIgNACQAEAlADBJIADBLQAAA6geAkQgkArhHAAQhnAAg2hZQgthJAAhqQAAiYBXiYQAmhBAigaQAYgSAigKQAAg+A1gpQA0gqBPAAQB5AAAmAEQA0AFA/AWQDpBgFmCBQI5DNAAFWQAADzjhECQiYCskWDJIAkAYQgJAQgHAEQhNAAhngrg");
	this.shape_100.setTransform(-7.3,8.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("Al5TpIgXgMIgngSQExkjCUkpQCWkpAAk9QAAhCgIg5QgMhSgehRQgwiDgkhAQgeg3gSAAQg7AAhSBIQgvAqgLAJQgfAWgWAAQgrAAgegWQgngeAAg7QAAhHAzg4QApgtB9hSQg4hAhOg0QgXgPhng9QhDgngbgdQglgoAAg2QAAgmAcgsQAhg1AwAAQAGAAAGADIAKAFQgRg8AkgnQAhglA8AAQAXAAAlARQAtAVAZALQAOg7AJgPQAYgpA6ABQCPgBCXDJQAyBDArBOQAfA6AIAWQAWBCA2CPQA2CQAsDCQAsDBgLF5QgLF8ioFjQioFkj0CUQASADAOAJQALAJAAAHQAAALgEAHQi8hPjAhOg");
	this.shape_101.setTransform(19.4,-51.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("ApcZpQgMgDgbAAIARmLQAQlEAllTQAjlBBal7QBOlGA4jTQAchpAMgoQAAg3gJgKQgFgGgqgEQhHgIg4gkQgzggAAgbQAAgtAwgrQA/g5BqAAQAzAAArAVQAnATAEAVQBLk1Bzh8QBDhIBIAAQAJAAAMAKQALAIAJANQAqg/AjgYQAcgUAgAAQAeAAAnAVQAsAYACAdQAbgYApAAQAlAAAjAbQAkAbAAAcQAABEhmB9IhaBrQg2BBgdAuQk7HsitLDQieKCg5NvIgWAAIgJgPQh1ANgwABIAAgOIgNAAIgHAjIgrAAQgBAGgCACQgFgEgDgBg");
	this.shape_102.setTransform(41.5,-80.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Sully_34_arm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECF75D").s().p("AvVCOQgmgWAAgvQAAhEA7gxQBBg4BmAAQD0gvEugLQErgMClAIQCkAICTAOQC5AREzAzQgvAXgqA3QgeApgGAVQgmgZhjgQQhggQhoAAQkKAAoWBOIltA1QivAYhCAAQhcAAgpgYg");
	this.shape.setTransform(109.2,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkVFxQAAhLAViuQAUitAEgsQADgsAFgTQAFgSgFgPQgOgdggglQgagdAAgPQAAgoBAg+QBFhEA9AAQA8AABYBlQBdBnAvBqQAwBqAgByQAgB0gBAMIgFBBQgMA1gqAAQgPAAgVgEQAJgvAAgSQAAhmg8ibQg+ijhNhVQB/FhAACZQAAAigSAbQgXAhhVAvQgKghgRhNQgZhkAIATQh6myAAAOQAAAKA+EjIAdCqQAMBtAAAQQAAAzgeAfQgeAfgwAAQh3AAAAhpgAARGDIgBgBIABAAIADgBIgBAJIgCgHg");
	this.shape_1.setTransform(257.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2D3033").s().p("AheBfQhCg9g5gsQAQguBEgwQBKg1BGAAQAeAAAxAVQAbAMAnASQASAJASARQAVAXgBAWIAFAAQhDAahFAnQh2BJAKA3IhDg/g");
	this.shape_2.setTransform(225.2,32.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ak2FcQgJgJAFgiQAEgiATgsQAXgyARgUIAOAHIAJADQAFAAAOgHIATgKIAOAHQiQhrhGhhQg3hOgFgcQgGgcAGgtQAGgtANgWQANgWBBgVQBBgVBLAIQAagNBpAdQBxAgBwA7QE3CjAADWQAAAfgJANQgMARghAAQgqAAgyhBQg8hZgrgvQgRgTgbgTQgDgCgKgUQgNgbgIgNQgMgUgcAEQARAbAGAaQAGAZAAArQAACVggBCQghBEhTAVQAkgsAAhuQAAhCgKg/QgMhAgRgTIgBAIQgMB8gLBMQgTCOgZAAQg0AjgTAGQgyATgGAAQgNgCgeAFQgLADgIAAQgNAAgFgGg");
	this.shape_3.setTransform(225.8,-27.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECF75D").s().p("ApzGxQg+gkAAhGQAAhPBQhkQBWhuChhoQGJkFKTiFQgXAegIARQgOAdAAA8QAAAqAMAaQAYA1AEAOQiTAIicApQiYAojCBUQhCAahaA2QhKArghAYQgcAWibBmQg0AjgCAoIAJAGQCEgwA2gpQAOAjALAtQAJAlgBARQAAAcgbAQQg+AjjCABQg9gBgvgbg");
	this.shape_4.setTransform(81.3,-20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D3033").s().p("AgiCQQhCgKgUgiQgfg1AAgwQAAgSALggQAIgXAGgMQAcg0AEgDQAPgNA4AAICvALQg6AngVA/QgPApAABAQAOBNAFAOQhMgGgjgFg");
	this.shape_5.setTransform(168.3,-52.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#ECF75D").s().p("AjfMwQg1gQgsgaQiDhSAAiVQAAjHBgj/QAkhcCGj2QCkkrB3iYIBhh+QASBNBSBKQBSBJBLADQlrGSi5GlQhKCogjCTQgfCBAFBVIA0g4QAtBfADADQAIALALAUIgDABIgzAAQgTAAgmgLg");
	this.shape_6.setTransform(71,-68.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2D3033").s().p("Ah4CdQhUhLgMhWICyjeQABBbBOBjQBWBnBagHIisCmIgKABQhMAAhPhGg");
	this.shape_7.setTransform(117.5,-157.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlzGdQhIhNAAhtQAAgfAQg9QAShHAdg+QBQirBpAAQBEAAAaBBQASAsAABZQAABXgiArQgfAng5AAQghAAgWgOQgcgSAAgmQAAgIANhPQAPhUAJgpIgJgBQgXABgkBGQgnBKAABHQAAA6AkAlQAoApBIAAQAXAAAYgEQAmgIAVgRQAcgWAxgIQAUgDA4ghQBBgnAAgWQAAgDAXgkQAZgpAPgNQAsgkBIgIQBIgEAiAPQAbAMAAAWQAAAagYAUQgSAPgyAWQiUBEhOA7QhGA1hHBPIg9BBQgIAAg0AZQg0AZg0AAQg1gBg8g+gAgaCIQAFgVAEglQAEgeAAgRQAAh4geg8QgZg0g6gZIAggQIAUgGQAWgGAGAAQBNAAAjBMQAYA0AABTQAABIgqA4QglAzgjAAIgCAAgABVkPQgmgqgUAAQBChEBagsQBcgrBVgEQAdgHAbAPQAcAQAAAdQAAAcghAkQggAjgbAHIhDAdIhAAdQADgLhXBOQgLgmgpgtg");
	this.shape_8.setTransform(165,-206.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ECF75D").s().p("Am6MTQgxhWgOglQgSgvAAg6QAAiSCRkBQDcmEIAovIAEADQAWBCAsAyQAvA0A1AOQmbGzk4IEQieEFhRC6g");
	this.shape_9.setTransform(93.2,-68.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2D3033").s().p("AiqDWQgzgygUhaIEckZIBGgxIAKAjIB3DPQgQANiZCCIiSCAQg1AAgsgrg");
	this.shape_10.setTransform(158.6,-161.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECF75D").s().p("AnILaQgEgHgNgCQhBg2gWgyQgQgjAAg2QAAilERlXQEKlLHHmiQgLBXAzBZQA0BYBDAKQlbDWh6BwQhCA9hABQQgmAwhEBcQhEBbhGCYQhGCYg2BqQg6BNgHAAIgBAAg");
	this.shape_11.setTransform(78.1,-54.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2D3033").s().p("AigBvQgihEAAh1IDQh8QABCaAyBBQAgAsBiApIjTBdQhkAAgshYg");
	this.shape_12.setTransform(146.4,-124.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AlNEWQhIgChAgmQhSgxAAh4QAAgxAqg3QApg4BEgxQCehvCqAAQBHAAAtAgQA1AkAAA+QAAAvhMBEQhUBKhcAAQgeAAgdgTQgjgYAAglQAAgTA8g4QAfgcAlgeQgDgHgIgFQgJgHgKAAQg+AAgrA7QgrA7gIAaQgIAYAKAaQAKAZAZAmQgTgbATAdQAWAgAsAEQArAEAkgGQAkgFATAAIBqAUQA7AAAtgWQAtgWAZAAQARAAAVAmQAUAkAAAaQACAHAAAFQgBAKgMAGQgjAUiKgEQiIgEhBAQQhAAQgoAEQgZADgmAAIgxgBgACQgdQAegwAAguQAAgYgOgiQgVg4gvglIADgEQAWgDAeALQAWAJAHAFQALAJAXAnIAWAlQAGAAABARIAAAYQAAAwgeAsQgcAmhCA0IgDACQgGACglAJQgmAJgGAAQBQgrAng8gAG3ADQhIgjgYgQQgYgRgKhKQgDgggHgUQgDgJgPgWIAHAbIgKgfIgJgeIACgGIABADQANgDAkAMIAKACQAKADAKAGQBkA6AtAqQA4A0AAAiQgBAigKAUQgFALgbAAQgaAAgsgJg");
	this.shape_13.setTransform(209.8,-146.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECF75D").s().p("AoAK2QgJgXAAhnQAAhpAxhvQAyhxCbj2QCcj5AWgZQAVgZAggpQAhgqCRjHQADgCCkjFQAGAiBDBEQBHBJBFAiQguA5iuDIQidCzhkB+Qk+GRi8GTQgphIgKgWg");
	this.shape_14.setTransform(92.1,-71);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2D3033").s().p("Ah7BlQhGhKAAgjQABgNAhglQAygzAJgMIAkgsQAWgcAIgNQgBA7BTBgQBaBjA3gXQhvBrhCBLQhDgehIhMg");
	this.shape_15.setTransform(147.5,-155);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AmlFrQguhPgBhJQABgeATg/QAWhGAgg+QBXitBfAAQA/AAAeAoQAdAnAABOQAABqgdAyQgfA1hEABQgjgBgVgPQgdgSgCgpIAFgfQgKAKAfhSQAmheAAgXQg4ABgsBiQghBKAAArQAAAPAGAeQAIAiAHAKQAaAkAnAMQATAFAOACQAAAHASAAIAYgCQAWAAAhgLQAZgIAJgGQAbgQAWgDQAOgCAZgCQA0gIAqgnQAnglABAAQABABATgeQAXgiAagYQAogjBPAAQBFAAAhAQQAcAPAAAYQAAAwh4AtIhmAlQg8AWgdASQhEAqglAoQgxA0gSAOQgiAbgnAUIghAPQAAADgzAJQg0AJgZAAQhDABg1hagAjUiMQAAAAAAAAQAAABAAAAQAAAAABgBQAAAAAAAAIABgCgAgnB5QAFgpAJglQAFgWAAg4QAAhLgVgxQgXgygygaIAugRQASgFARgBQBQABAaBVQAMAoAABUQAAA6giA2QgmA+g5AGgABkkIQgmgugRgBQApglBfguQB0g5BEAAIA1AJQAzAQAAAjQAAAughAdQgYAVg5AUQhFAWgkAPQhAAagpAiQgHgkgmgyg");
	this.shape_16.setTransform(197.1,-204.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAAIABAAIgBAAIAAABIAAgBg");
	this.shape_17.setTransform(175.8,-219);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ECF75D").s().p("AouJCQgVgrAAg4QAAhyBMh9QBqiuErksIHWmoQgSBiBDBoQBCBoBdATIlyEgQjICahxBkQkxEKg9C4Qg9gZgcg4g");
	this.shape_18.setTransform(87.4,-63.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2D3033").s().p("Ah8B4Qg0g6AAhmQAAg7AQgfQAXgtBIgpQAMBlAtBcQBFCPB0AAIiRBhQhxgwgrgxg");
	this.shape_19.setTransform(149.4,-123.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ak+GrQhBhsAAizQAAilBNhQQAzg1A4AAQAiAAAzBIQA3BNAAA9QAABigkAqQgLAOgOAGIgMADQgsAAgbg1QgYgvgbh/QgTAJgGAGQgKANAABGQAABaAkAzQAqA6BUAAQAeAAAMgGQAHgDAGgHQARgMAZg0IAYgxIASADQALAAAAgGQAAgEAhgLQAogNAMgHQAQgJAQgTIAXgcQA6g4AegTQAmgbAeAAQARAAAUAIQAcALAAAVQAAAKlXFqIAIgHIARgPQgrA2gqApQhVBPhHAAQhUAAg7hhgAgahTQgvhQhAgmQAHgVAdgPQAYgMARAAQA4AAA4BoQA0BcAAA1QAAAagUATQgWAWg2ASQAShPg0hZgAAnkTQghgfgOgDQBsh/A4gvQAwgoAjAAQAiAAAXApQAQAeAAAPQAAAcgzA2IieCfQgZgrgngkg");
	this.shape_20.setTransform(187.3,-170.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Al4D5Qg1hjAAjaQAAgwAVggQASgbAbgIQAagIAQANQASAOgHAdQAECjARA3QALAiAQApQASArANAWQAnAvAAABQAAAzhPAAQhBgBgohIgAipDMQhQhhAAi1QAAiVAkg2QAZgjAdAOQA4gEALBdQAGAvgFA3QAABpA4B+QAdBAAaA1QAAARgUAMQgOAKgHAAQhVAAg/hMgABQDoIgWgYIAGAKQguhHgOgiQgthxAAiXIAChVIAFAAQACgjARgYQAPgaAWAAQAuAAAtBFIApBBQAbApAXAbIAGgQQBsgCAtAXQBDAiAABkQAAAngjAcQgfAYgjAAQgoAAgfgjQgXgkgBAAIgEABQADgCAAgFQAAgVApgfQAoghAAgOQAAgUgSAAQgUAAgVAMQgWANgbAfQgGgVgIgMQgJgNgQgMIgLgLIAQA7QADAOAAAjQAAAIAOBCQAPBDAAAdQAABKhDAAQggAAgZgWg");
	this.shape_21.setTransform(50.4,16.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D3033").s().p("ABmAAQgngvgQgOQAjAFAiAIIAdBuQgGgQglgugAiQgmIAxgOIgWAtQgNgRgOgOg");
	this.shape_22.setTransform(55.2,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#ECF75D").s().p("AG6IwIAEgSQgDgPgmgsQhlh1h9iHQh3iAgpglIitibIhRg7QhPg7gDgGQgMgfgFggIgiiHQgaANAAAXQAAEuAbDfQAQB+AwD1QhAgJgPAAQhDAAg2AKQhAALg3AcQgJhcgMiyQgLitAAgoQAAiUATijQAQiAAQg/QAbhlBBgkQAkgVA0AAQBjAABTAzQBOAwCxClQB0BrC+DUQCGCVDJDuIjJDDg");
	this.shape_23.setTransform(95.6,-75.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECF75D").s().p("AFwHWIADgFIABgHQgRg7hihdQhbhXj7jJQgvgkhqg/Qg/glgQgoQgohjgthCQgigzgPgFIgCgCIAAAFQAAAYBZDNQBzECAyB2QhWADg2AcQg2Acg8BKQgOgjgxhvQgwhrgahEQhXjdAAibQAAg0AqgsQAzg1BUAAQCQAAEQCzQE/DUG7GqQimBPiDBJQgLgGgCgJg");
	this.shape_24.setTransform(83.3,-67.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2D3033").s().p("AiJCxIACghQABgggDgJQgGgPgshSQglhDAAgRQAAgfBUgrQBOgoApgBQAmABAZAcQASATBNCBQApBEAOAaQAEgCAOAEQAAADAPABQgUAhhMAgQhnAtiIgBQgQAAgLgQg");
	this.shape_25.setTransform(62.8,-18.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2D3033").s().p("AhyBYQgngRAAgGQAAhfBJg1QA6gqBHAAQAYAAAEAGQAQAUA9AhQg6gThDBaQgxBIgLAxQgUgKg/gcg");
	this.shape_26.setTransform(-39.3,-164.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgDCjQhugqhkgMQiGgQhXggQhNgbAAgXQAAgZAVgJQARgIAtAAQBsAABVAeQBWAkAmAPIgcAaIACAKQACACAFAAQAMAAAPgJIBEgqQAZgQBLgsQBBgpAAgPQAAgKgDgKIABgBQgBgBgGAAIgiATQglASgRAAIgigZQgmgbgQgHQhagohbgdQgHhhETB8QBXAnBuA6IBlA3IgDgSIgkgcQgGg+A1gyQA4gzBTAAQAJgBAJADQARAGAAAVQAAAogxAqQgxAqAAArQAAAFAEASIAHAVQgRgHhIAYQhLAagVAYQhDBPAABIQg7gWh1gzgAjEgRQgGgFhmgkQhXgVgPgFQgfgLAAgTQAAgWAUgQQATgPAbAAQAeAAB8AqQBjAiB4AwIhfBNIhngzg");
	this.shape_27.setTransform(-76.3,-183.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ECF75D").s().p("AMOMZIgXhFQgGgTgDgEIAAADQABAHALAeQALAeAJAWQg8huiujCQi4jMmUlhQmXlkmpjCQAahaAlglQAsgvBQAAQAiAACeB2IEGDKQDnC0CLB2QEDDaCmC7QBOBYDnEJQggAdgfBVQgXA+gFAhIAAAAg");
	this.shape_28.setTransform(49.2,-87.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECF75D").s().p("AjVBNQjGg2h+g8QhEghgbgkQgSgYAAgeQAAgeAvgcQA4ghBTAAIB0AIIBcAMQCCAVFlBcIGkBvQg4AQgvBYQgpBPAAA5IABAUQpNiMiEgkg");
	this.shape_29.setTransform(64.9,13.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2D3033").s().p("AguCPQgTgDgggKIgXgIQgpACgNgeIgEgfQAAgYAHgVQAHgSATgdQAMgTAlguQAxg8AMAAQAGAABoAnIBoAoQhTA5giA8QgWAnAAAiIADAoQgpgCgwgKg");
	this.shape_30.setTransform(138.6,29.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AA7FZQgKgNgEgqQgNiCguhZIgZgZQgagagMgJQgXgSgzgWQgzgTgMgHQhtg5gJgEQgqgRgPghQgFgOgBgSQAAhFBWgvQBXgxCIABQDDAACZCCQA+A1AkA+QAjA7AAAuQAAAKgLAYQhdiAg0gpQhOg9ipgzIgEALQCaA+BpB9QBcBtAABXQAAAngVAaQgUAVgnAQQATglgdg/Qgbg+g6g9Qg8g/hFgnQhJgrhAADQASAlBBAbQBNAhAdAdQAaAWAkA7QA6BgAABSQAABrhdAAQgpAAgOgTg");
	this.shape_31.setTransform(188.4,61.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#ECF75D").s().p("AoVCEQhCjAAAhNQAAiWBKhcQBMhdB7AAQB7AAD3DDQEVDYEXFaIkAAAQhJhEh8hqQjPivhOg0QgigYgrgXQglgVgLgDIgLiUQgTAEgIAtQgHAgAAAsQAABvAsCbQAqCVA/CBQgigJhlA/QheA5gSAcQhkkGgbhPg");
	this.shape_32.setTransform(105.3,-77);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2D3033").s().p("AhwBOQguhLAAgqQAAg2BwgqQA4gWBTgWQAhA3AhA1QhNANg4AzQhNBFAHB2Qgqg+gagog");
	this.shape_33.setTransform(83.2,-19.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgmHSQgQgIgQgkQghhLhSlEQgsgtgtg8QhYh3AAhOQAAg3BLhGQBHhCAqAAQBQAABeA4QBcA3BSBcQBWBfAxBrQA2B0AABrQAAAtgUApQgOAdggAmQAshehbjVQgmhZgxhEQgyhIgpgSQgHAIAAAKQABANAoAvQAyA9AhBGQAdA8ARBPQAPA/AAAdQAAB4gnBKQgpBPhBgVQAQgxAGgbQAIgqAAg1QAAijhIiDQg0hggxgdQA3AyAeBYQAlBoAAClQAACAgaAtQgSAggtAAQgZAAgIgFg");
	this.shape_34.setTransform(120.1,25.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#ECF75D").s().p("AAoCGQhHhYg5guQgcgYh9iPQggg8gxhqQASCOALA4QAOA5ANA9IAyDSQAvDGAAASQAAAGgCAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAABAAAAQgsgVh7AnQhaAfg1AdQg3kBgWh2Qg2keAAiDQAAhWAohCQA5heB2AAQBSABBoBFQBqBGCUCbQBMA/D1EWQCvDKBMBgIiqCWQiHiHkNkRgAnrHwIABgDIAAAEIgBgBg");
	this.shape_35.setTransform(79.3,-71.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#2D3033").s().p("AjhCkIgDgHQAAgIAEgJQAFgKAGAAIADAAQgBgigJhFQgJg/gIghQAGgCAQgQQATgTAVgNQBKgsCWAAQAaAAANAQQALANALAoQAzC3AcBLgACkgRQASA9AUA8IABAEQAJAKAGAKQAFAHAGAGQAGABADgBIAAAKIgkALQgKg/gch0g");
	this.shape_36.setTransform(54.4,-6.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAAIAAAAQAAAAAAAAQABAAAAAAQAAAAgBAAQAAAAAAAAIAAAAIAAAAg");
	this.shape_37.setTransform(117.9,-11.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECF75D").s().p("AMNGVQgCgKAAgLIgBAAQh1gfjzgmQjlgkjKg4QjGg3kCh+QkBh6hShQQBQAFBVhSQBUhRAehrQD2EWITDGQELBkDjAtQAKAAAHgCQgDAAAAgKQAAgKAFgCIASgDQAPAOAFAsQACAPAIBvIAABAIgOAJQgKgLgEgKg");
	this.shape_38.setTransform(75.8,-39.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#2D3033").s().p("Ag7DrIiiicQBDAFAzgxQAWgUBKhkIAuiWQAlAxBNBSIBFBJQAABkhiBZQhXBOhOAAIgSgBg");
	this.shape_39.setTransform(-4,-83.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AkNE0QhCinAAisQAAh3BOhWQBGhOBPAAQAVAAAVAJQAgANAAAbQAAAjgaAeQgHAJgyArQhUBIAABkQALBLADALIgCgSQgBgsAQgoQAOgkAlgzQgIAcAKAnQAIAgAMANIAHgKQAFgJAOg3QATg8AgghQAXgYB1h1QBrhtAAgLQAAgYgNghQgJgWgLgRIAfgDQA0AAAHAeQAHAcghAtQgvBCh5CDQgcAfgKAWQgMAaAAApQAAAUgZA5QgXA9AAAkQAAAIACAMQACAOACAEQAIgMAshEQAkg4AdgfQBZhkB1gBQAHAAAGASQAGAPAAAJQAAAXgmAsIhVBbQh+CLgKBmQgQC5icAAQhkgBhKi7gAgBlmQgfgUgwgBIgdADQAogvBMgYQA5gRAsAAQAPAAAUALQAWANAAAOQAAAKgDAIQgKAXggAXQg4AoghAeQACgqgigYg");
	this.shape_40.setTransform(-16,-131.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ECF75D").s().p("AL3IWIgCgIIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBABQgBAAgHAAQlLAAn3kpQnmkdlQlzQAUAFAXAAQBRAAA1gzQAUgVAohCIABABQGMIPHrD5QDFBkC7AqQClAlB6gPIAUABQAGArgqA4QgqA5g1ASg");
	this.shape_41.setTransform(61.3,-91.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#2D3033").s().p("AgcCCQgUgGgSgRIgtg1QgqgxgugsQATAIAgAHQAqAKAfAAQBGAAAnghQAagWA2hBQAVAsAnAsQAZAdAAAcQAAABg7BZQgNANglALQgiAKgWAAQgrAAgTgFg");
	this.shape_42.setTransform(-28.5,-151.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAPGpQhDgaAAgeIgtg1Qg2hCgthAQiQjMAAh/QAAgjAMgjQAOgmAUgHQA3gVBBCyQgKAeAuBaIAvBcQAAAHgQAPIgQAOIAQATQA7g+BBgUIBogNIAEANIAKA2QAAgVAQghIAPgbQALgTAPgWQBBhdA7AAQAHAAAJACIAIABIABAUQAAAGgZA3QgeBDgGASIgmBwQgDAIAAANIABBHQgJBBguAtQgtAqg4AAIhFgVgAiYivQglhvg8gEQAohdADgGQAOgUAhgBQAsAAAUBKQATBJAAClQAAAXAHAhQAMA6AeAxIAAAIIglATQgshngsikgAgbiIQgGgigDgZQgBgJAAgVIABgjQgBgSgRhEQgRhDAAgFQAAgHATgKQASgKAMAAQASAAAIAYQADAJAHAVIAYDjQAMBqAdBiIg4ANg");
	this.shape_43.setTransform(-45.6,-202.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#ECF75D").s().p("ApLBiQhihQgthnQgqhhAKhnQBEAlATAIQAbALAeAAQAvAAAxgTQAngPAYgTIAAAAIADBLQABAoAHAZQASBFBZBNQgbgkgOgjIgFgMQAZAtDkAgQDaAdDhAAQCJAABsgUQBogRBrgqIAADvIkJAwQkmAzh4AAQm7AAjmi8gAmKhkIAEAEIgBAHIgDgLg");
	this.shape_44.setTransform(67,-39);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D3033").s().p("AiSBpQgtg2ATiEIAGAIQBABFBkAAQBKAAAvgyQASgUAqhLQgVAxgIBDIgMBeQgLAtgdAUQgkAYhLAAQhfAAgmgtg");
	this.shape_45.setTransform(7.2,-81.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AjdG/Qg2hZAAj3QAAiMBEhmQA+hdBCAAQAEAAAJAZQAIAZAAAPQAAAQgsBtQgsBsAAAXQAAAFgnAeQgoAfAAAJQAAAHADAAIACgBQBSgkAWgFIDQggQgjAWgQAvQgKAfAAAgIABAKIAEAIQAWghBGg7QBXhJAwAAQAFAAAEAJQAEAJAAAJQAAAVhOBMQhcBZggA8Qg0BhgGAHQgiAshHAAQhdAAgnhAgAgPhlQALgeAAgqQAAgvgTgfQgTgfgcgDQAEgeAxgqQAwgsAaAIQAEAAAEAdQACAXAAAMQAAAag2CVQg1CVAAAwQAAAUAEANIg5APQAthxAhhPgAAthsQAMgzAwhdIACABQgmB/gIA4QgFAggEBYQABAGgcAGIgaAFQAUhDAahugABxkRQAKglAAgYQAAgpgPgfQgQghgYgGQAQgjAlgSQAjgQAhAFQgKBCgQAuQgaBAgXA9g");
	this.shape_46.setTransform(13.8,-139.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#ECF75D").s().p("ApzFbQg6g2AAg4QAAilDjjlQB2h5CoiHQgDAXgEAmIgCAqQAABGAvAxQAtAwBFAKQiIBph9CGQhgBpgNAbIAEABQAugPAagjQBbg/AlgeQG8iLC+hFQC+hGAdACIAOAkQAFAQAAAQQAABJgxAuQgOAMgBAHQABARhmBBQiCBSioA2IgJACQhWARiLAwQiNAxiFAeQhqAYg1AAQhvAAhIhDg");
	this.shape_47.setTransform(74.2,-45.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#2D3033").s().p("AhhCbQhEgxAAgjQAAgVAJhbQAFg2BLg4QAlgcAogWIgQBlQAAAcAuBFQA9BXBKALQgeAQhHA0Qg3AngLAAQghAAg/gvg");
	this.shape_48.setTransform(77.5,-83.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AliDaQg1g4AAgyQAAhnBLhBQBNhEDihfQAggNBdgUQBagTAWAAQBHAAAkAgQAKAHAdAvQg7gbhUAAQhPAAhJAcQhSAfgtAXQguAagiASIAEAEQAFAFAGAAQALAAAagRQAcgSgrAeQBRg2BhgQQBYgPAtAAQBbAAA+ArQA3AmAAAoQAAAWgKAaQgnglhGgPQgtgKhFAAQiBAAg5AeQgRAKgaATQgZASgRAJQApgSAlgVQAcgOBJAAQCzAABNAqQAvAcAAAiQAAA0gwASQg5AWikgCQhagBhuA1Qg8AcgYAJQgvAQgsAAQgsAAg0g2g");
	this.shape_49.setTransform(122,-107.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AhuGtQgTgPAAgUQAAgcBFglICjhRQBUgtAggQQA0gYAaAKIAAAAQgJgDgzgMQg2gMgmgNQiAgthGhhQgBAKAHATQAKAbAVAWQgqAggZAKQgRAHgxAQQgZAKgRABIhEADQgiADgoAWQgkATgPAAQguAAghgkQgZgcAAgNQAAgpBWghQAtgRCRgfQCFggA4gZQBUgmAAg1QAAgKglgSIhPglQh2g9AAhLQAAgyAWgYQAQgTAaAAQAIAAAaAeIA8BGQBiBsBhAdQASAFBFAMQBBALAlAMQB4ApAABmQAACvjcCjQhVA/hdAoQhYAmgyAAQgoAAgXgVgAlhE9QghgOAAgaQAAg0C2gZQA+gJBOgsQBGgpAQAAQBVA1ARAGQkYCmhgAAQhCAAgjgOg");
	this.shape_50.setTransform(-106.4,74.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#2D3033").s().p("AiGCAQAFgHAegZQAbgXATgYQA5hQAXiqIABAAQATAVAnA1QAyBBAAAKQAABNgkA0QglA2hpBIg");
	this.shape_51.setTransform(-54.6,90.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ECF75D").s().p("Aj8ImQiThIiqi9QA1gHA9hcQA6hWAJhEQCUCnBvBIQBZA6AHgIIACgDIhMhaQAtgpAHgHQAVgXAagrQAXgrDSmOQBPiWBVhHQA/gzAwAAQAjAAAUAmQAPAeAAAhQAABxhJC/QhCCwhqC2QhsC6hlB0QhwB+hBAAQhhAAhegug");
	this.shape_52.setTransform(3.3,86.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AiuGvQgwgUAAgoQAAgcAwgSQAigNBLgLQAagEBigaQBegYALAAIAfABQAeADAXALIAAAAQgIgGgvgaQgygbgigXQhwhQglhrQgFASAAAFIADAaQAFAaAMAKQgXAFguANQgrAKgtAAQgTAAg1gKQg0gKgWAAIhVANQgUAAgegnQgdgjAAgNQAAgdAfgSQAigTBIAAIDBAPQCHAABOgiQA7gZABgUIhZhVQhYhdABgvQAAgqAVggQAWgeAZAAQAZAAAMAWIAWA+QAqB0B4BiQAFAEAwATQA4AVAjATQB9BDAABeQAAA6gtBBQgrBBhNA4QixCBjZAAQhEAAgogRgAlPEJQhngXAAg0QAAgsBdAAQAMAAA9AHQA8AIAdAAQAjgJAogJQBPgSAfAAIAlAnQAmAoAHAFQg0ARhzAaQh2AagfAAIhngNg");
	this.shape_53.setTransform(-91,29.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#2D3033").s().p("AhZCwIhHh0QBFgTBThSQBNhRALg4QAKAcArBYQAcA7AAAnQAAAVhhBbQgPALgpALQglAJgSAAQgVAAgVgDg");
	this.shape_54.setTransform(-45.8,63.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#ECF75D").s().p("AlHGTQhhheiMjzQAWAFAOAAQBBAAAmgfIBvhtQBPCPAvA0QAGAHBiBWIhAhyQAkgYBShkQBmiDA4hFQDbkKBfAAQAyAAAgAVQApAcAAA8QgBA4gqBRQg5BshoCQQhVB3goArQi4DGgqAmQhVBLhNAAQhZAAhWhTg");
	this.shape_55.setTransform(4.3,79.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AhAGyQgdgNAAgZQAAghBRguQB1hDAtgpQA4gvAlgPIBAgOIABAAQgPgFgzgHQg7gHgjgJQiDgfhLhWQAAAMAJARQAMAaAYATQgpAlgWAJIhUAnQgMAHgeADQgnAFgeAJQgYAIggAXQgcAUgMAAQg6AAggghQgQgPgFgSQAAgxBRgpQAugYCGgqQB/goAzgcQBPgsABg2QgBgGgKgEIghgJQhHgVhTg0QhHgrALhKQADgdARgUQARgUAVAAQAIAAAkAhIBQBHQB4BnBDgBQCIgCBGAVQB5AmAABsQAACtjCCzQhRBKhWAuQhXAug4AAQgSAAgVgLgAlOFRQgbgMAAgTQAAg1CtgqQBBgPBIg1QBAgwAPAAQBZArASAFQh1BDhyBWQhPA1hdAAQgpAAgZgMg");
	this.shape_56.setTransform(-130.7,123.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#2D3033").s().p("AiBCMQAOgRAWgrQAXgtAKgfQAEgKAGhWQAEhLAAgRQBtAiAXAKQAcAMAGAjIAPBLQAAA1grBOQgoBIgUAAQjDAAAigtg");
	this.shape_57.setTransform(-72.8,128.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#ECF75D").s().p("ApGJSQAug0ASg+QAOgxAAhFQAAgogKgnIAAgBQCcAZDPAdQAkAAAZgUQASgOAFgQQgBgEg5gBIg5AAQB2iABLh2IBBhtQDClFAtg8QBniLBhAAQAbAAAOANQAbAYAABDQAAB0h5D4Qh5D3iZDFQiOC3h3A2QhtAwjtAAg");
	this.shape_58.setTransform(-3.7,88.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#ECF75D").s().p("AhtHAQhZgJgVgFQhXgkgXgSQgjgZgdg9QgihLgeiIQgnipAAifQAAhRAkg8QAqhHBIAAQBHAAAyBMQAxBLAYCJQACAKAbBRQAiBoAcCBQiAASgRAHQAEARBAACQBAACElgXQDygTAkgHQgiA1gPAiQgPAjAFAOQAFANABAdQABAcAcBCQluAigoAAQhFAAhrgKg");
	this.shape_59.setTransform(73.3,47.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#2D3033").s().p("AhzByIgRglIgFgbQgFgVAAgHQAAh2B9gZQAZgFBGgFQAwgEAQgIQhDAogdAoQgeApAAA1QAAAYAHAbQAIAlASANIiTAMQgBAAgQgeg");
	this.shape_60.setTransform(136.6,75.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("ADXDQQiKg0iCgTIiOgSQhdgNg6gOQingpAAhMQAAhZCihDQCwhIEVAAQEyAABACUIADAOQgtgZg4gVQhsgliHgBQhTABg3AHQgrAGgNAHIAAASQEjAWCYA8QCGA1AABJQgFAdgKAPQgWhFiGgnQiLgnjiAAIhAABIhSAEQAAAGgIAHQBcAPChAVQCRAUA4AMQBaASAqAeQAvAjAAA7QAAA5hkAAQgSAAh8gug");
	this.shape_61.setTransform(195.8,80.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#2D3033").s().p("AhYCDQhDg4ABg/QgBgmAbgiQAwg+CFhGQgFAPgFAYQgEAVgBAJQAABeApAuQAbAgAxAPQhPBBhSBAQgvghgjgdg");
	this.shape_62.setTransform(67.6,89.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AFQDJQgzgQgjgJQiLglkOAAIiJANQhfAAg6gpQgtggAAgdQAAh/C9hMQCRg7CSAAQCHAABQAPQBPAPAkAhIhpgRQgzgHhAAAQikAAg/AYQgXAKgOAXQBjgJDDANQCyAMA2AOQAeAAAUAhQAVAiAAAtIgBADQimgqi8AAQhUAAgnANQgOAEgiAZQANABAAAAQEDgaC1BCQBAAYApAeQAiAaAAAOQAAAWgVAOQgTANgeAAQgvAAgqgMg");
	this.shape_63.setTransform(125.5,75.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#ECF75D").s().p("AkqKBQg3guAAhNQAAgmBHjdQBxlYAjh3QBSkSB/h9QBXhUBTAAQAUAAAeAsQAfAsAAAbQAAB4ivFPIh6DnQg2BxgDAlIiaBwQADAaAYAAQAOAABQg5QCBhdC6hxIAEAFQgCBeA/BNQAvA5AoANQmEEvikAAQhgAAg4gvgAmQHEIAAAAIAAgBQgDAUgCAFg");
	this.shape_64.setTransform(20.3,74.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgLC4QhJhfgdijIgBgOQAAgzASg6QAZhPAqAAQAuAAAQBVQAGAjAABLQAAAoATA5QAYBKAjARIAIAEQAAABAAABQAAAAAAAAQAAgBAAgBQAAgCAAgCQAAgNgPgaQgQgcgCgPQAyABApADQBgANAqAUQAtAXAAApQAAAXgVAZQgSAUg3AtQg7Amg9AAQhdAAhGhdgAjCB/Qg+hNAAinQAAhCAMgiQAIgZAVgUQARgPAgARQAcAPABALQgBgGgLA9QgMA+AAAMQAABIAgBTQAgBSA6BWIAHAJQh3gugrg2gAkjCxQhKg4AAhOQAAiCAQhEQAMg1ARABQAIAAAcAGQgJAXgGArQgEAiAAAaQAABgAYBAQAYA/A7A6IANANIgLABQgoAAg5grg");
	this.shape_65.setTransform(-59.7,50.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#2D3033").s().p("AhKB8QhNhsgVggQgTgbAGgFQAIgHAoATQALAFAiAIQAhAIANAAQBIAAA/giQAtgXAVgeIAMgVIAUA/QgEA5hRA9QhWBChYAAIgCAAg");
	this.shape_66.setTransform(-39.4,84.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#ECF75D").s().p("AjzI3Qg+gsgngsQgRgUgzhcQg7hsgzhvQBJgCA8gnQA5gmBHhVQAHAgAkBTIAkBMQAAALAaAfQAXAbAPANQAgAZAyAxIgjg+IACgBQgHgOgKgQQgKgRgDgCQARgpAUgrQAkhNCplCQBxjYBRhOQA2g1A7ABQApAAATAqQANAcAAAlQAABkhAC7QhAC8hjC1QhsDKhvB4Qh9CJhrAAQgaAAg+gtgAg1EEQAAABAAAAQAAAAABABQAAAAAAAAQABAAABgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAIgBAAIgCABg");
	this.shape_67.setTransform(8.5,88.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgBAAIABAAIAAAAQABAAAAAAQABAAAAAAQAAAAgBAAQAAAAgBABIAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAAAg");
	this.shape_68.setTransform(3.3,114.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AiEG1QgngWAAgoQAAgSAngTQApgTBAgLQAbgDBcgfQBXgdAKAAQAKgCAPAAQAeAAAdAOIAAAAQhRgohEgtQiBhYgphbIgCAPQAAAbAdAtQgWAMgxAKQgyALgnAAQgIAAg0gIQg1gHgWAAIhQAPQghABgggvQgcgmAAgRQAAgeA1gPQAogMA/ABICMAJQCfgBBKgsQAYgPAMgQIAHgPIhlhRQhohcAAg8QABg5AYgaQAPgQAVAAQAWAAARAeIBHBwQAtBHA8AxQA8AxBFAgQBEAeAeASQBpA9AABWQgBCmjaB3QhQArhcAbQhOAYgqAAQhHAAgmgWgAjkEiQgngDgigGQhqgWgBg9QAAgVAkgKQAbgHAkAAICTAJIBIgVQBMgWAbABQBPBJANAJQgWAMhBAQQg7AQgZADQgnAGgnAOQgiAOgPAAIgjAAg");
	this.shape_69.setTransform(-105.2,63.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#2D3033").s().p("AiRBoQBDgYBChiQBChlgDhKQB/BogrBxQgjBeiEBMg");
	this.shape_70.setTransform(-55.5,91.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("Aj5GHQgwgfgBgoQAAgUAXgNQAWgLAmgBQAYABBYAGQBXAGAsAAIAjgEIAkgEQACAAAgAMQAkANATAKQg2gogxg4QhdhugUh6QgGAKgDASQgEAcAHAeIgxAGQgOAAhGgSQhSgVg7gXQgPgGg1gDQgygHgVgeQgQgagKgnQAAgUAUgNQAUgNAiAAQA3AAAzANQAXAGBDAXQB5AsB+gBQAvAAAegLQAYgKABgKQgfgngfgxQg9hfAAguQAAhBAqggQAagTAUgBQAaABAJAVQAFALAGAzQARB+BEBmQAZAmAtApIBMA/QBWBJgBBEQABB5inBNQiaBHjQABQiBAAhBgqgAiaDgQhfgFgiAAQgYAAhGgkQhXgsAAgrQAAgmAzAAQAnAAA3AUQBUAfAmAKQAYAFAhAEQApADAegEQAngFATAaQAWAsAdAgIgxAEIgwACIhhgGg");
	this.shape_71.setTransform(-73.6,16.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#2D3033").s().p("AgiCwQgLAAgVgCQgcgDgVgFQgPgkgLgkQgYhJANgCIAigKQALgEAggNQAhgQAUgMQAggTAtguQAsguAPgeIArDwQAAAWgnAcQgIAGgyAeQghAUgFAIIgLABIgtgCg");
	this.shape_72.setTransform(-34.4,59.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#ECF75D").s().p("AljF4Qg4hThxkTQAQAFAXADQAUAEAIAAQAzAAAxgZQA4gbAxg6QA9ClAYAnQAFALBVBkIgVg8QgVg8ADAAQADgBgegkQANgRAkguQBNhgAtg1QAug1A0g4IA7hCQBMhZAbgYQA+g5A0AAQAzAAAfAVQApAcAAA8QAAA8g3BpQhYCmjWD/Qh1CMhEA4QhYBFhUAAQhfAAhHhpg");
	this.shape_73.setTransform(8.3,78.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#ECF75D").s().p("AiKHyQh9g3hthHQhqhLgvgeQBpARBChYQA9hOgBhyIgCgXIFPEWIAFgLIAAgKQgahCgrgbQCxmSBaiHQBYiEBZAAQAzAAAeAoQAaAiAAAqQAAAxhDCjQheDjiuEkQg5Bjg6AzQg5A0gyAAQglAAhGgbg");
	this.shape_74.setTransform(7.5,82.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#2D3033").s().p("AipChQATgQAqgRQAygUAKgHQAjgVAQgmQAPghACAAIgCAAIACgJIAFgmIADgoQAAgMgDgXQgBgSgCgGIADAFIgjhnICWCTQABALAQAuQANAnAAAbQAABGg8A0Qg+A1hzAag");
	this.shape_75.setTransform(-43.6,81.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("Ak6FpQgSgTAAgaQAAgFAFgDQAFgCgHgCQgBAAgBAAQgCgBAAAAQAAAAAAAAQABAAABgBQAEAAAAgFQAAgGAXgUIAlghQAxgsAqgUQCDhBBjAAQAJAAAAAFQABADgDAJQgBARAtAAIAFgIQACgEAAgHQAAgFgJgbIgRgzQgKgkgEghQgDgaABgvQABgsADgeIgOANQgOAXgFAvIgsAGQg4AJg/AUQhAAVg2ATQg2AShUA0QhVA1gTATQAfiNDPhvQCxhfC8gPIAogCQAAACAeBRQASApASATQAUAWA+ATQgegTgdhAIgIgSQgEgLgKgqIgIgpQAAiDBIAAQAVAAAzBYQA0BZAFAwQAOAgAfArQARAXAAAxQAABigZAkQgeAqhpAhQgwAPiNAfQiCAcgsARQgKADiBA+Ig+AZIgNABQgmAAgWgVgAnHDdQAAgpBlhHQBlhHEkhsIgBB9QhXgRimBjQhFApgpApQgrAsgGATIg5AKQgYgeAAgpg");
	this.shape_76.setTransform(-95.1,72.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#2D3033").s().p("AgsBYQgpgOgxgjQgIgGgfguQgcgvgBgDQABgGAMgRIALgRQB1AvAlASQAZAOA+AhIBDgHIBIgGQgdAcgVAeIgZAhQgPARg5AAQg3ABgsgRg");
	this.shape_77.setTransform(95.2,66.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ACXEXIhIguQgmgWgZgFQjmguhugxQhfgrAAgrQAAgeAmgRQAigQA1AAQB4AABhASQBdARAnAaQAFAEBGAkQACACAZArQAZApADADIALAHIgQhGQAAggALg/QALhJAThIQAdBGAgAtQAmAyAhAAQAIAAADgCQABgPgwhZQgxhaAAgTQAAhGAJgbQANgkAlAAQAcAAAcAsQAZApANA6QALAwA3CTQAuB9AAAoQAABag4AsQgvAmhNAAQhjAAhng+gAhVheQhAgShhAAQhMAAgyAOQgyAOglAhQgggYgXgsIgSgnQAAgpAigXQAkgZBFAAQDMAACgAyQArANA/AaQA5AXAVAFQgCAKgKAbQgJAigEA5QiShJhFgTgAgOj6QjQg8ilgCQB3gyDJAlQA3AKBfAZQBWAVAeAEQgBAcgXA2QgngXiWgsg");
	this.shape_78.setTransform(74.4,27.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#ECF75D").s().p("Aj4EXQg0grAAhEQAAiLBEiuQAjhaAshUICiAkQggAkgQAUIhcBtQg9BNAAAYIAAAPIABAAQAKAEAAABQBbhNBahTQARBNBiAyQBeAvBcgPQhuCUh3BXQhvBThTAAQhMAAgygpg");
	this.shape_79.setTransform(70.8,82.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#ECF75D").s().p("AGoDhQlJAAkYguQmihDAAiLQAAhmBHgvQBLgyB6AAQB7AAA0AYQAzAXDzAhQCoAXB/ACQA/ABAugDQgBAKgMAnQgKAtAAAsIAWBtQAdBiAmAFg");
	this.shape_80.setTransform(44.1,43.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#2D3033").s().p("AhlCPIgggvQgvhGAAhDQAAgtAHgTQAGgVATgJQAagNB6gSIBNgRQgDALgKBSQAABTAXA2QAcBEBCAuQgNAFgkAEQgqAEhaAFIhXAEQAAgQgOgYg");
	this.shape_81.setTransform(120.6,45.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AlYGKQgVgWgQgXQgTgcgVhMQgUhIAAghQAAgeAJgNQAIgKAigSQB7hFCNh2QAJgHCNiNIAegdQB/hzA1gMIAEAGQhHA4guAxIgPAQIhSBcIgIALQgWAhhVBGQhXBIgrAUIAVASQAXASAGAAQAQAAB/hrIA0gwIBLhFIBShuQBLhaAzAAQAfAAAUAdQATAZgBAaQgSADgTAHQhLAkgwAqQgRAQgpAuQhHBUg/AlIhNA1QhaA+AAAKQAAAGAHAkIAGAiQBOgnBMg+QBJg/CeihQAlgmAYgOQAcgRArgFQArgEAMBQQAAAbhIBZQgyA8g9BAQgiAlg8A0QhRBFg8AhIg0AhQhgA3hgAjQhEAYgQAAQgNAAgbgcg");
	this.shape_82.setTransform(178.6,15.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#2D3033").s().p("AiODIQgHgwgbhvQgYhgAAgNQAAgkCBg3IAngQIBBgWQAvgNAMAAQAKAAAjAEIBADhIgHACQhGgWiGBSQg2AigmAlQgmAlgCAWg");
	this.shape_83.setTransform(20.9,228.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#ECF75D").s().p("AlTGdQAAkfB2koQAphnA7h0IACgDIBfiwQBTigBBg4QA/g6BiAAQAUAAASAcQARAcAAAjQAAAxggBIQgLAZgTAlQh1DHgxB6QhtEPgBEcQAABPAJB4IALC9QgWgEgxAMQgtAKgZAMIgZALQhwAyguA4QglkiAAiMg");
	this.shape_84.setTransform(29.5,130);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AAUEnQhLiqhblHQgRADgSACQAFAtAMBLQASByAUBPIAaBnIAFAKIgCABQhGhdgCgEQgNgchKiuQgZg7ARAdIhFiKQAAA1AJBKQALBcATA3QgqgngfikQgXh9AAg7QAAgGAdgVIAwghQApgcArgYQANgGAtgNQAzgPAWAAQAXAAA3AWQAwAWCjBcQC4BoAOAaQACAFAAAFQAAAxggAWQgXARgmAAQgaAAhMhHIgcgbQg7hCgGgIQABAZgEAxQABDbBICxQASAtAgBJQAWA8AAAvQAAAsgHAXQgNAngkAAQhOAAhbjKgADrBlQgIgVgNhQQBCABAdAMQAcANAAAZQAAAagSATQgKALg3ArIgTgxg");
	this.shape_85.setTransform(50.1,286.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#2D3033").s().p("Ah+BeIgUgCQgCgCAAgOQgBgkAzhWQAphHAcgiQBkApAYAIIA2ALQg4BGgaBVQgTA7ACAdQhxg0g/gGg");
	this.shape_86.setTransform(92.2,165.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ECF75D").s().p("AkVGdQhTgsggg0Qggg0AAhYQAAhwBJiUQBCiIBsiJQBniBBkhUQBqhWA9gBQAjAAAVARQAYASAAAfQAAArgTAjQgMAXguBBQh2C1h/FhIi2g3QA0AjA0AsQAtAkAfASQBZA3GDCfQhFBWgMAdQgMAbgSBxQnhi4hug8g");
	this.shape_87.setTransform(40.6,107.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AkGE6QjChLgignIgIhBQAFg1BPh0IBOhsQAAgFgEAEQgFADAAgFQAlgRA2gbQBsg5BRg6QBmhLAkAAQAZAAAQAUQAQATAAAZQAAA0hrBEQg0Aig3AYIhiggIgOAMQAoAXBFAuQA3AkAgAQQBbArCqAAIAigHQAngHAaAAQCLAAAABGQAAAQhVAkQhiAqhaAAQhAAAhogdQhigbgQABIAgAsQARAYAWAMQBBAiDkAMQg7A5gLAHQg0AhhWAAQhrAAhEgXQieg2gcgHQAeAqAyAfQA8AkBkAcQgGACgKAAQg4AAiphCg");
	this.shape_88.setTransform(154.5,165.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#2D3033").s().p("AhBBwIgpgcQgqgdgBgHIgHgFQgIgFAAgDQABguCMh8QAMgKALgHIAMgHQBQBFAZARQAQAMAfARQhIAwgwBMQgjA1gEAbQgKgGg8gqg");
	this.shape_89.setTransform(96.5,201.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#ECF75D").s().p("Aj7GAQiSiqAAi3QAAmbDPj1QBJhVBXgyQBCgoAmAAQAgAAAVAQQAXASAAAgQAAAQghBJIhLCjQhqD8AACsQAAC9CnDGQB2CMCxB5QgmAMg3A8QhABGgQBFQljkTh5iOg");
	this.shape_90.setTransform(52.8,122);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag4EpQhng3h3hkQARAyAnAuQAvA4BWA6QgjgNi3iUQiziRAAgIQAAgSAYg7QAZg+APgTQAEgEBXhBIBWhAIAAgBIANgDQA6AACmgxQCkgxAXAAQAWAAAPAJQAbAQAAAnQAAAzhUAlQhPAjhZAAIgmgcIgtgjIgRAIQAsBwBnBJQBKAyB9AqQClA4AKAFQBLAiAAAyQAAAVghAJQgiAJhQAAQhmAAhigwQhSgohlhXQgHAOAAAHQAAA7B4BUQB1BRBKADQgYASgqAPQgmAMgWAAQhRAAhug7g");
	this.shape_91.setTransform(151.7,221.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_52},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89}]},1).wait(1));

	// Layer 1
	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AM8JyQg4hJAAieQAAhbAYhyQAYhzAAgkQAAhbgignQgQgTgqgjIhmhUQhCg4gggQQgKgFhPgcQgcgKh0gQQh9gRg+AAQjeAAnyBNIlVA1QilAXg9AAQhnABhRgjQhigoAAhJQAAgcACgSQAFgiAOgoQAJgZA7grQBAguA4gMQClglC0gOQD1gVG/ABQDXAAB8AMQAeADDBAbQAVADC9AjIC5AiQBnAACPBUIBnBTIB8CeQBwCOArBkQAqBjAZBdQAZBdAAA2QAABFgWAuQgbA4gyAAQgjAAgdgQQgRA0gnAaQgcARgcAAQgbAAgHgBQgYgDgGgMQgtBGgdAaQghAcgqAAQhhAAgxhAgARZmBIgBgBIgPgQQAUASgCAAIgCgBg");
	this.shape_92.setTransform(146.3,69.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AyCIZQg9gEgagLIgcgKQgZgKgZgbQgwg0gBhRQAAhxBsh5QCKibE/izQDXh4FrhmQE3hZBwAAIBuAFQBaAGC7AeIAAgBQBJAKBEAPIA4AKIgTgCQESBCCgCMQCsCWgBC2QABBHgpAiQghAbg0AAQhAAAg6g7Qgug8AAAAQgCAAgWgkIgbgoIAAAgQABCqiNBNQh4BBjqAAQgbAAgYgyQgWguAAgrQABhIBNhcQgVgPg1g1QgrgtgSgHQhTgchYgIQgagDg0AAIgFAAIgQAAIADAAQgtAChJAJQi1AXjZBHQhYAbiTBMQiTBLguApQAKAXASBEQAQBBABAKQAAA7giAlQgjAmg5AAQirAVhGAAIgVgBg");
	this.shape_93.setTransform(141.4,-21.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AtrU5QhxhSAAjGQAAlCDsnGQBUikBoiaQBTh+A6hDQCwjoDRj/QADgEAchJQAehWARglQAyhuBPgwQAWgNAfgMQAbgKAEgEQAVgVA8gaQAsgTAVgFQASgFA1gzQA7g6AggRQByg9A9gRQAugNBIAAQA1AAAqAmQAoAkAAAnQAAA2gtAzQggAlg7AmQhWAqgxAaQhbAwAAAqIADAmIAJgBQAIgCAAgHQAAgGAdgJQAXgHAbgFQAjgGAdAAQBhAAAtAkQAlAdgBA0QAAAvgYAfQgUAZguAYIhnAxQhJAjg6AoQgoAbhQBYQhNBSgkAUQh8BHibCmQhsBzhOBsQhBBPg8BMQh1CVhIB7QgyBXhLCiQhqDoAABPQAABlA4BgIAmA6QASAagBAIQAAAagJAJQgPANg1AAQjUAAhihHg");
	this.shape_94.setTransform(117.8,-119.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("ArYOXQgjg7AAhfQAAhfAuiHQAlhwAigzQCSklFrm4QFpm6EFjLQBFgpASgPIAaAIQBSBQApBeQArBhAAApQAAAbhUBOQiiCWhTBWQkMEXjgEsQlCGwjYHFQhnhegegyg");
	this.shape_95.setTransform(111,-87.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AzRPEQg8hIAAhyQAAioDQkdQC2j6FrltQCgiiBDg2QBchLC3hlQAqgZB/hfQB8heA6gfQClg8BQgNQATgDBDAAIAugOQAxgNAZAAQB7AABUAbIA2ASQAZAIAlATQAlAUAoAZQAoAZApAwQAXAXAPAyQALAkAAAQQgCAcgOAYQgaAugygCIgGgBIgBAAIAAAAIgBABQgNABgxgBQgygBgfgQQgggQhQgiIgfAoQA2AvARAYQAgAsgBA5QAABAhBAXQhaAij/gJIhJAOQhIAOgoAAIg1gBQgFgBgDAEQgNATh5AtQjfBSkLC6QkPC/hqCaQhhCMhTCXQgaAthXCqQgzBjgcAjQgmAugrAAQhNAAg4hDg");
	this.shape_96.setTransform(142.7,-78.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AvJVOgAwnSuQgVhRAAg6QAAhyAlhxQAihrBJh9QAbguBLhuIBeiJQB6izBOhfIAbggIC2jrQBpiJBriEIA8hJQA1g/ABgDQAwiaABAAQAJAAAqhqQA8h5BXg4QACgBAsgKQAsgJADgDQAIgIABgFQAFgEAvgWQAngTAwgIQAVgDBShEQAugnBSgkQBigrBKAAQAFAAAIAFQAIAEAFAAQAFAAAQgEQAQgGAFAAQA9AAAoAvQAiAnAAAnQAAAdgNAYQgJATABAAQACAAgZAgQgYAggrAQQgPAKgJAFQgMAFhIAWQhBATgpAfQgcAVgiArIAAAmQAQgIAugLQAxgNATAAQB5AAAxAxQAfAfAAAuQAAA1gmAkQgdAahFAdQhWAhgvAVQhUAmg7AvQiKBzgLAGQiKBDgFAAQgfAAjjEKQiXCxh/CfQlwHQg4BbQgrBLgtBKQhWCKigDsIDRlSQgZAlhEBuQhTCEghA7Qg/gggfiAg");
	this.shape_97.setTransform(142.7,-120.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AvrRTQgwhCAAhXQAAhEANgvQAPg5AyhoQATgoBoiDQBtiLA/g7QBMhPHMmhIDAiqIBdhTIAAgvQAAgWAUh7QAHgrAbgnIAUggIAfggQAfghAPgFQAPgGApgIQAngJACgCIAkgnQATgTApgYQAJgFAIgBQALgHAhguQBQhvBXg/QBJg2AwAAQApAAAzAvQA7A1AAA8QgBAegQAaQgLAQgxA4QgXAahCBDQgOAOgsAiQgbATAAASQAdBKAFAQQBJgxAOgHQAggRAeAAQAuAAAqAiQAtAlAAAtQAAAqgzA2QhgBfhdBlIgwA+QgnA0gqAqIhHBMQgyA1gNAGQjFBmmGE2Qh6BglREYQiYB+hdCOQgcAqghA9QgiA8gMAUQhlgfg1hJg");
	this.shape_98.setTransform(127.5,-109.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("ArUOdQgagggchFQgrhtAAh1QAAh5ArhBQApg8BFAAQAKAAAaALQALghAagnQAXgkgBgCIgQjSQgSjNAAhVQAAmvBWirQBCiCCFAAQBKAABCAXQBeAhByBYQEpDhH0JvIj8DzIgMgWQgSATgMAAQgKABgFgGQgPgWgugrIhfhpQhnhygkgnQhFhMiUiGQiViJgxgdQAdFbAMBPQAUCDBIElQB8AEA+BkQAlA/AAAzQAAA7gyAwQgzAyhBgBQgTABgLgDQgJgDgkgOIAAAhQABAygLAVQgYAthKAAQhBgNgZgSQgEAOgJAPQgMASgJAGQgRALgYAAQgsAAglgLQgRgGgSgKIgQgIQABAKgHAOQgGALgOANQggAfgyAAQhOAAg0g3g");
	this.shape_99.setTransform(83.9,-42.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AlOJdQgBAGgKAAQgfAAhMieQgohTg6iGQg5h1hDjfQhDjjAAhSIADghQAGgnASghQA8hmCigBQBVAACnBQQC0BWC1CKQA9AtERD1QEfD/AAARQAAAKg1ANIAfAhIgigfQimBPiCBJQgLgGgDgJQhVhNipiGQjLiiiGhSQAoBcB/DdQBqC9AAAUQAAAQgOAKQgNAKgRgCQAAADAOABQgTAhhKAgQhoAtiKgBQgQAAgLgQg");
	this.shape_100.setTransform(82.5,-61);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("ATdP9IgXhEQgHgTgCgEIAAACQABAIAKAeQALAeAKAVQgqglgvgzQhQhWghgiQjSjXndmkQiyidiyhvQhZg4ifhTQj8iEiihLQjlhohsgSQi+gggtgNQiDgnAAhDQAAgyAgggQAdgcAgAEQgIgOAAgMQAAgwAdgiQAcggAlAAQAdAABLAQIgCgTQAAgdA2gTQAngOAbAAQBFAABgAlQCKA1B8BvIgBgUQAAg6BAgzQBCg0BSAAQA6AAAVAjQALARAAAaQAAAiguBIIguBCQAAASCEBiQDECOCCBgQIjGPEpE1QBVBYCGCnQA8BKBxCSIgdAZIAIAJIAAABIgKgJQggAdgfBVQgWA+gFAgIAAAAg");
	this.shape_101.setTransform(2.9,-110);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AMhJTQgdgQgPgnQgJgYgPhLQgShWgSg+QgPgwivhGQiAgzjJg7Qizg2oQh6QlRhQiRhOQhng4gkgeQg5gvAAg3QABg3AvglQA/gwCDgJQDSgjKbC7QFVBgF/B+IgJgKQEhAACqCrQA7A9AjBHQAbA6AAAkQgjC/gZAwQgOAagyAbQg3AdgUgQQgSBNgeAnQgcAlgjAAQhBAAgfgSg");
	this.shape_102.setTransform(113.2,43.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AAVPkQgfgugNhkQgjj0hAhPQgPgRgqghQglgcgVgfQj0luhyldQhPjzAAiiQAAiWBVhbQBghkC4gBQCRAADhC5QDyDEF0GxImTAAQhPhAiShyQkJjPgsgWIgBgCIgBAFQAAAxA6COQArBsBFCNQB3DGAHAJQAIAKBbAlQBkArAiAXQBzBPBUCJQBkCiAACnQAABmgtAyQgPARgaAQQgcAQgLAIQgVAPhCBFQgpAqgpAAQgGAAgUgFQgVgGgEAAQgIAAgdAZQgeAYggAAQhBABgigxg");
	this.shape_103.setTransform(106.4,-25.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AnkLNIhdm9QgvkVgii6QgLhGAAiVQAAiOBdhYQBShNBqABQBCgBBdA+QAqAcDXCqQGzG2B4CXQA1BEAiA9IgoAkIiqCWIgjAgIgFgFIgEAJIgDAGIgDACIgngsQg0g5guguQhLhOiPiKQiOiShYhTQA0DPAmDNQAYBkAeCHQAdCHAAAOQAEABADgBIAAAKIgiALIAAABgAGQHzIABgBQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAIAAAAIgBAAg");
	this.shape_104.setTransform(77.7,-61.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AQMOhQgeAQg/AAQlqAAn7i2QjXhPiwhaQixhbhShNIjLi7Qhkhgg1hOQiDi+AAlGQAAiKBKhJQASgSA5grQA1goAhgiQA6g8A8gaQAsgSBhgSQAOgCAagPQAkgNBKAAQAzAAAaAsQAVAhAAAqQAAApgaAjQgRAXguAoQhsBdgjBXIBJguQBCgjAsAAQA5AAAeAkQAZAdAAApQAAAcgFAMQgFAMgVAWQhnBwhNBhQAuA2A8BAQB0B8DSCuQA4AwDmB3QDiB1BQAZQGbCBAAABQAAAFATAOQAYARAGAJIATgEQAPAOAFAsQACAPAIBwIAAA/IgOAJQgKgLgEgKg");
	this.shape_105.setTransform(50.4,-92.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AQHQYQgWADg4AEQgxADitgQQisgPk3i0Qk1i1j6i+QifiSjAjNQjAjLgdg7Qgcg7hEhlIhoiXQg0hRgXhHQgdhZAJhVQAKhVAvgiQAwgjADgTQACgTAhgnQAqgxAvAAQAFAAAUAFQAUAEAFAAQAUAAAcgSQAcgTAnAXQAmAWADAsQAPDUAtDPIgFAIIALgBIAshRQAWgcAcgUQA6gqBPAAQAPAAAQASQAVAWAAAkQAAAsgMAXIgdAnQgwA/gSCyQAsCCCgC6QBgBwENEVQDFDIE6CJQEQB3EzAzIATABQAHAsgqA4QgqA5g2ASg");
	this.shape_106.setTransform(34.1,-142.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AA8O4QmhgGjIiXQjdinAAlzQAAgYAHhPQAHhPAAgTIgIgQQgJgVgFgdQgcitAAhDQAAhTAShJQAQg/AwhLQAvhMAngbQAogbALgnQAMgmA8g0IA+g1QAWguAygZQAvgZA7AAQAKABAKANQATAYAAA4QgiBcgiBvQhFDdAABnQAAAHAIAFQAIAFAIAAQAFAAAegSQAggUAJgCQAMgEARgDQARgDAIAAQAjAAAWAYQAXAYAAAnQAAAjg+BGQggAtghAsIgXAeQgXAfACADQgFANgZB7QgYB6AAAHQAABWADAkQAFBGARAQQAgAeDnAsQDuAuCcAAQCOAACwgcQBqgRBRgWIAAATIgFACIAFACIAAE0Ql0BzllAAIgagBgAl3qHIACABIAHgVIgBAAg");
	this.shape_107.setTransform(62,-99.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("Ar1J1QhMhNAAhwQAAinEfkdQD0jzEujEQCNh0CfhIQCghIB2AAQDNAAAACBQAAAdAaAdQAZAeAAAyIgRAsQgRAsAAAEQAPAtAAAJQAAA8gvAqQgnAiggAAQhxgFghACQiPAJgNAFQgLAJgyAPIAMABQhQAqhJAjIgZAMIAUgRIgXATIgKAHIg9AxIhYA/IBHgxIijCJIAAgBIgiAXQgeAWgRARQCYg3DmhLQEMhXAhAAQBKAAAbATQAbATAAAxQAABAgyBHIhVBfQgnAogmAaQhNA0jnBUQiGAvioAvQkvBTg+AAQiFAAhRhTgABjATIAEgDIgHAGIADgDgACagbIgMAMIgVAQIgIAGIApgigADEgqIgCACIgvAhIAxgjg");
	this.shape_108.setTransform(84.1,-68.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AEoJ7Qg4gYhMg5Qgtgih9hrQiQh4hrhTQivB0gqAXQhHAng3AAQiwAAAAhvIADgaQgIAFgdAFQghAHgUAAQg6AAgtgTQhCgbAAg8IAHgUIAKgcQgcAAgmgZQg0giAAg3QAAg5A0glQAogcBZgYQBrgaA2gPQBhgbA5giQh+hwgUgZQgngvAAhEQAAgvAdgcQAdgcA1AAQAvAAAfAaQAJAGAtA4QBVBlCrAmQBGAIAxAOQBbAcA3BEIEGFCQAgAXB2BvQBehyBaiiQCYkaBYiPQAfg/BVgzQBHgrAeAAQA4AAAqA2QApA1AAA/QAABpg9C4QhdEVjDEkQhmCXhYBIQhYBGhUAAQhDAAg8gag");
	this.shape_109.setTransform(-47.4,86.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("ADILxQgpgSgyg4QhPhVk3m8QjQBShpAAQheAAg5gzQgugoABgpIAEgVIAJggQhNAChAgdQhVglAAhLQAAgSANgUQALgQAGgCQglABgZgqQgVgiAAglQABhMA6gbQAzgXCLAAQCbAMARAAQAfAAAcgGQAZgFAngNQhDhogVgoQgcg1AAgeQAAg4ARgiQAZgyA8AAQA1AAAeAVQAWARAWArQAlBKAKAOQAlA8A3AyQAIAHA3AWQBCAaAnAWQCMBPAABzQAAA6A9CFQAgBEB+DzQE+mIAxg2QCYimBZgBQA6AAA5AfQBCAkAAA2QAABagsByQhCCliUCpQgsAyhjB5QhNBegrArQh7B9iBAAQg1AAgegNg");
	this.shape_110.setTransform(-39.9,57.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AsyLSQgWgZgBg3IAAgEIguARQghALgmAAQg9AAgrgaQgtgbAAgsQAAgHAEgNQADgNAFgKIgYACQgkAAgigjQgkgmAAguQAAhfC4hGICag3QBYggAqgfIhJgxQgsgcgXgVQhEg6AAhQQAAgrAVgcQAcglA+AAQApAAAaARQAHAFApAoQBPBNCmAtQANAEBoALQBdALAaALIB2A7QBlAvAnAAIAeALQApAQA3ANQAoAMAnAKQBNASAtAAQAfAABeiUQB8jNBJh3QCEjYBehuQB+iUBYAAQAsAAAoAkQA1AyAABaQAACqhdDGQhqDfjwEnQhGBWgRARQgxA0g2AfQiEBLkRAAQg7AAhmgGIh/gHQgkgChEgSQhBgSgjAAQgDAAiQB6QihB5hbAAQhWAAghgkg");
	this.shape_111.setTransform(-61.5,97);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("ANKIwIiQg4Ig0gKIhGgMQhGgLi2glQiUgdgWAAQgTAAkWAgQkZAghlAAQgsAAhngFQh2gGgigFQhBgMgWgNIhVhDQgwgngTgdQgTgegQg+QgPg/gXh8QgeilAAhCQAAjXA2hEQAZgfAugUQAXgJBQgYQCZAoBCD6QAQA8AbCUQAXB7ASA0IJehHQAYAAGBgeIGAggQCjAABuBPQBgBGAABLQAAAFgFAPQgEAOAAAFQAAAGAVAsQAWArAAAbQAAAsgXAkQgcAugJApQgRBPiNAAQgkAAhHgZg");
	this.shape_112.setTransform(135.9,53.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AuZK0QhMg2AEjGQgDATgCAFIAFgXIAAgBIA5izQBckgAZhmQAPg8A+ioQA8iiASgkQAihCA9gyQBVhGBoAAQBZAAArAdQAvAgAABFQAACbhsDjQg/CFiaEaQD2jHE6iLQEQh3CDAAQBWAAB1AVQB7AVAmAZQAWAPAJAZQAEAMAEAQQACAFBKArQASAOAGAfQADAPgBAOQAAAggNAXQBGAfAABHQAAA6gbAZQggAfhYAAQgtAAglgJQgqgNgfgHQh7gekVAAIiEASQhBAHglAfIgmAkQgbAbggAXQg7ApiZBxQh2BXg/ApQi2B4h4AAQh5AAhHgyg");
	this.shape_113.setTransform(79.6,76);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgqJrQhDhChMiGQgRgeh1jhQhTifg9hWQgPgCgUgHQgRgFgEAAIgSAGQgYAHggAAQhNAAhEgwQhqhLAAiiQAAh0AyhTQAqhGAnAAQADAAAJAFQAMAGAIAIQAIgiAlgXQAegUAWAAQATAAAMAJQANAKAKAbQASgTAhgRQAcgOAIAAQAyAAAlBHQAjBGAABaQAAAIgEASQgCALAGAFQALAIBNARQBrAcAsAWQAtAXAKAnQAKAmABALIACAOIAcBhQAsCKAMAgQANAgAhBDQBOhhBIiKQCQkYA/hwQA0hDA1gwQBKhAAxAAQBFAAAqBFQAhA2AAA4QAACMhiD5QhdDriKDoQhjCmh7BaQhiBJhGAAQhYAAhQhQgACeDXQAAAGAGAKIgGgVIAAAFg");
	this.shape_114.setTransform(-17.9,87);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AEzKeQhSgdglgYQg6gpjZi1IjPitQgDAAh4AyQiGAzhAAAQhRgBg8guQg5gsAAgxQAAgLAHggQhbAChDghQhTgpAAhMIAIgTQAJgTAFgGQgkgIgbgeQglgpAAhBQAAg3A5gaQA4gYBzAAQBPAABKAHQAsADBaggQg/hdg6hFQgcgnAAg8QAAhxBUAAQA5AAAqAkQAaAXAsBAQAwBIAjAjQA5A7BPAhQA4AQAiARQA/AeA9BKQCsDYBYBuQAMANCUCFQAogwCmkfQCwkyAagmQArg+BAg1QBMhAAyABQBFAAAoBFQAdA0AAAwQAABqg8C4QhdEUjDEkQhmCYhZBIQhXBGhVAAQgcAAhQgcg");
	this.shape_115.setTransform(-46.6,82.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("ABRMXQgyghgvhRQgmhAhGiYIidlTQiLAUhfAAQhRAAhDgWQh+gpAAhlQAAgVAOgWQAOgTABgDQhCgKg3goQhDgxAAhEQAAgLAJgTQANgZAXgPQgbgKgPgZQgPgZAAgkQAAgzAdgiQAegkAvAAQB3AABwAqIBNAdQApANAkAAIBKgDIgkhbQgfhOAAgDQAAhRAfg3QAeg3AvAAQBKAAAeAlQAUAYAQBJQAUBVAXAvQApBSBTA+QAyAgAXATQApAiAUA8QAOAqAlDHQAiC1A1CKQDkkgBahiQCTiiBZAAQA7AAA4AeQBDAkAAA2QAABTguB3QhACqh/CLQg6BAhcBxQhUBngmAoQh6CBh7AAQhMAAgyghg");
	this.shape_116.setTransform(-30.3,50.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AC/HrQjzh+j+jKQihAbilBTIhpA1QgxAWgiAAQgnAAgqgYQg6ghAHg5IgKACQgKACgHAAQgvAAgbgrQgVgiAAgpQAAgFAIgbQAGgcAAgFQAAgFgEgHQgHgJgCgHQgDgNgBgKQAAiRCxhxQC2h2EcgRIAggCQAZhEAHgOQAgg4AxAAQAuAAAlAVQA1AfAYBIQAbAvAbAfQAXAcAhAYQAvAlBKA9QAgAbB2BtQBuBjAVAVQBIiTBki0QByjNAlgkQAhghA/giQBJgnAtAAQBfAAAlA3QAZAlABBFQgBB2iBELQhECHhVCjQhxDFhHBMQhFBKhEAAQhPAAjMhpg");
	this.shape_117.setTransform(-39.3,82.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AlJJ0QhKhBABigQAAhyBGi1QAjhbAmhHQhggahEg5Qg/g2AAgvQAAgIgRgTIgkgmQg1g9AAg4QAAgMAJgjQAHggAEgLQAKgWAhgWQAngZANgRQAWgfBIgZQBSgcBmAAQA2ABBNAKQBCAKAdAJQAiAKBFAdQBBAaAPADQAcgxAXgTQAWgSAgAAQBZAAA4BxQACAFAOBAQAOBBALAXQAPAjAjBrQAqCAAAAnQAAAagMAgQgIAYgGAIQgIAOgJAJQgoBQgNARQgRAegKANQgPAYhgBrQjDDXhoBSQhwBZhcgBQh+AAg7g0g");
	this.shape_118.setTransform(74.2,55.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ax2GcQhTgugcg/QgQglAAg3QAAh0BKhKQBdhbDAgBQBgAAA9ARQAOAEBVAgQCLA0CQAJQCAAJBaADIAxABQA4AABLgKQBsgNAtgYQBagcB1g4QC4hYBNhfQBPhSBfh5QBLhQBhAAQAsAABUBBQBaBGAAAwQAAAEAJAUQAxBiAAAfQABBCgpAyQhvCbhNA7QhOA7grApQhWBTgyAUIgIAGQgVARg/AjQitBgknAlIgtAEQgiAGhiAFQhtAHhcAAIhwABQqGAAjniCg");
	this.shape_119.setTransform(102.5,19.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("ADLXbQgzgagog6QgQgRgRgXQgjgtgQghQgOgfgOgBQgfgBgTgJQgkgQgbgfQgdghgGgDQgegQgfgaQg+gygQgzQg2iqgShZQgdiJgJgjIhIj1QgYhOgZh9QgiitAAhsQAAhkAYi1QAkkJBBiPQAuhlBTieIAxhcIAKgTQAfg5ATgfQBPiDBSg5QBHgyBYAAQAtAAAdAOQAiARAQAnIAaBMQAIAaAAAYQAAAfgMAbQgKAWgcAyQgnBPhTCVQhABzgbBCQhLC6AACnQgBCnAFBpQAFBpAMBRQANBTAKAdQAIAdAXBhIAGAfQAHATAPASQAcAiCfBfQDAByA4AqQBAA5AAAwQAABLhBA6QgYAVgbALQgRAIgLAAQASAFAUAaQAbAkAAAoQAAAhgiAxQgoA5gxAKQAeBQALBIQAGAkgBAVQAABXgoAlQgfAdg4AAQgfAAgkgSgAEcNuQAJAEANACIgfgSIgOgJQALAPAMAGg");
	this.shape_120.setTransform(42.6,192.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AC1MUQi7hsgugOQlphuiYg1QjXhLhug9Qh4hBgzhOQgxhMAAhxQAAh9ByjSQBni9COikQBChOB9hTQBshIATAAQBEAAA1AyQAyAxAAA2QAAARgcA4IhMCPQiKEGhmD4QErCLBMAiQDmBjBKAAQAtAABrg1QBggvAmggQAQgNBOhGQBUg+BFAAQBJAAAgA1QAcAugHBOQgCAZhXBGQgsAlguAgQAtAPBRASQBMAQAOAAQARAABOgJQBPgJAhAAQAtAAAjAZQA3AoAABcQAAAYg8AwQhGA2hLALQABAgg0A4Qg7BAhDAJQhbANgoAhQgRAOgMAFQgUAHgpAAQiBAAjGhjg");
	this.shape_121.setTransform(101.6,121.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("ACXP6Qg3guhKhIIhiheQg7g1jHiUQjKiWhshhQl1lMAAkwQAAitBSjaQBhkGCZh4QAqggCghNQBEAAA0AzQAzAwAAA2QAAAYgEALIgSAmQgvBkhJDaQhJDdAAA0QAADoEJDpQCrCYAbAVQCXB1BeAAQBvAAB+g7QBGggAXgIQA1gTAyAAQA6AAAvAkQAxAkAHAzQAGA5gzAyQg+A7iEAmIAIAGQBnBLBpAmQAtARBmAYQBDAQAWAWQAeAeAABKQgBA5gtAhQgyAlhgAAQgUAAgagCQAHAlg/AgQg8AfhJAAQgaAAgqgHIgmgIQgMAHgQAHQgeAOgSAAQhYAAiqiPg");
	this.shape_122.setTransform(106.6,149.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92}]}).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,292.6,138);


(lib.seat = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#514B48").s().p("ApUIBQC/gNC1gIQCkgHBjAAICgAGQFIAZBgAKIgCB1IjCgKQjVgGjNgDQi2AAjVAIQjgAIgMAJQAOhRAMg3gAiihwQggiqAAiYIAKjNQDJgKA3ABIgGB2IgEBXQAAFSBUFMIjaAGQg9i+gdibg");
	this.shape.setTransform(-39.5,82.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#713A24").s().p("AKOOEQgWlYAAh9IACiKIBIAQQAGFYAHBzQADBOAGA2gArHOEQgBg2gHhfQgIhiAAhCQAAhdAGhEQAGhcAThgIBRgFQgcC8gNAGIgCACIAAA7IABAUQgBApACBIQACA7ADAxIAGBYIgbACIAQAAIAFBRgAjbkQQgsjGAAjNIAMjdIAogCIgNDeQABEsB7F0IgwACQguiggZhugABKq0IALjPIA8AAIgEB6IgDBbQABFDBKFfIg3ABQhUlEAAllg");
	this.shape_1.setTransform(-38.6,106.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C1A1A").s().p("AheCdQgIg/gZhjIgpiWIBaAAIC3gCIANAuQAmCDANCJg");
	this.shape_2.setTransform(187,180.6);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595551").s().p("AgFAAIALAAIgLAAg");
	this.shape_3.setTransform(-33.9,108.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#514B48").s().p("AAFAAIAAAAIgJAAg");
	this.shape_4.setTransform(-35.1,108.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#834B2C").s().p("AKOQRQgWlYAAh9IACiKQAChLALhcQAJhNAGgcIABgCIA2ACQgEAAgCBEIgCBDIgDCZQAGFYAHBzQADBOAGA2gArHQRQgBg2gHhfQgIhiAAhCQAAhdAGhEQAGhcAThgQAIgRAJgpQAJgtAIgTQAdhJBbAAIhJC+QgcC8gNAGIgCACIAAA7IABAUQgBApACBIQACA7ADAxIAGBYIgbACIAQAAIAFBRgAjbiDQgsjGAAjNIAMjdQASh4ARhMQAKgyAJgJQAJgLAngEIg7D+IgEAdIgMDPQABEsB7FyIgwACQguiegZhugABKonIALjPQAGgyAUhbQAThYAHg1IAsAAIABAAIglEaIgEB6IgDBbQABFDBKFdIg3ABQhUlCAAllgAkNtKIACgPIgFAmQAAgGADgRg");
	this.shape_5.setTransform(-38.6,92.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666159").s().p("Ap8QRIgEhRIgRAAIAcgCQAAAXAEAJQACAFAFAAQAGAAADgBIACgCIgHh/QgIh2AAhDIADhpQHugUBcAAQCiAADMAGQDXAGBQAHQACCSAEBfQACAwALCWIACAcgApNGeQARhBAUg5IAXg4QAPghAcgOIAZgIQDfgLC9gHIBdgCIAMgBIAMAAQBtgCC5AAQC4AABwACQgLAugJBfQgIBRgBAtIgCB1IjBgKQjVgGjOgDQi2AAjVAIQjfAIgMAJQANhRANg3gAicjTQggiqAAiYIALjNQACgOA/kTQAngFBSgEQBHgDA0gBIg1ElIgHB2IgDBXQAAFSBUFMIjbAGQg8i8geidg");
	this.shape_6.setTransform(-40.1,92.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#302B29").s().p("ADZFEIgEgPQguiig8hfQgegsghgqQgPgZgygqQg5gvgogPIgHgFQCjAZBhAnQBiAmBEBCQARAPAeA2IBmDPIARgJIAZA4Ii4ABIhbAAgAB/AdQBuCWAwCDIgfABICrgBIhNi/QgqhPgzguQhjhejHgpQA9AXBtCTgAnKlDQgHAWgGALIgUAjQASghAPgjg");
	this.shape_7.setTransform(148.2,132.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1C1A1A").s().p("AHZQRQgIhWgGh9QgNjoAAiqQAEiwAGhZQAAAEC1AHIC1AFIIDAoIBLAdQAuARBGAvQAZAVBGBZQBOBjAGAgIAfBWQAiBoAYBUQAAgSASBNQASBMALBPgA8tQRQgCiiAChRQAEisADgRQAOhtBChhQBSh5D/g0QCrgiEtgIQgwBDgYBnQgkCTALEgQAFCVAFBjgAyGBNQhdjQAGjmQAHjaA7jPIACgEQAwhSAHgGQAEgEAzgTQBAggAlgIQCDgVE3g2QgSBQgQBOIgDAQQgDAQAAAHQgLBhgJDBQAABmAcC8QATB/AOBBIAPA0QAUBCAWBCIk7APQknAOgWAAQglgwgXgpgAwGAjQgHAGAAAJQAAAJAHAHQAGAGAKAAQAJAAAHgGQAGgHAAgJQAAgJgGgGQgHgHgJAAQgKAAgGAHgAwxiIQgGAHAAAJQAAAJAGAGQAHAHAJAAQAJAAAGgHQAHgGAAgJQAAgJgHgHQgGgGgJAAQgJAAgHAGgAw7laQgGAHAAAJQAAAJAGAGQAHAHAJAAQAKAAAGgHQAHgGAAgJQAAgJgHgHQgGgGgKAAQgJAAgHAGgAwmo6QgHAHAAAKQAAAKAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgKQAAgKgHgHQgHgHgKAAQgKAAgHAHgAv6r4QgGAGAAAKQAAAJAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgJQAAgKgHgGQgGgHgKAAQgJAAgHAHgAGXCCQg+ABmGgFQhMlvAAk1QAAhnAWi9QAWi+AAgIQDkAFDaAvQBcAUAuAPIAsATIAFAIQB3BJA6CDQBOCyAYDAIgDgKIAIDiQAACKgFAtQgFApgWA9QllgOgsgFgAIuAUQgHAGAAAJQAAAJAHAHQAGAGAKAAQAJAAAHgGQAGgHAAgJQAAgJgGgGQgHgHgJAAQgKAAgGAHgAJQiYQgHAGAAAJQAAAJAHAHQAGAGAJAAQAJAAAHgGQAGgHAAgJQAAgJgGgGQgHgHgJAAQgJAAgGAHgAJOlqQgGAGAAAJQAAAJAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgJQAAgJgHgGQgGgHgKAAQgJAAgHAHgAIspJQgHAHAAAKQAAAJAHAHQAHAHAKAAQAKAAAHgHQAHgHAAgJQAAgKgHgHQgHgHgKAAQgKAAgHAHgAH3sDQgGAGAAAJQAAAJAGAHQAHAGAJAAQAKAAAGgGQAHgHAAgJQAAgJgHgGQgGgHgKAAQgJAAgHAHg");
	this.shape_8.setTransform(-9.5,92.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#51473F","#342E2B"],[0,1],39.7,-69.5,40.4,9.8).s().p("AKDQLQgIhAgZhlIgpiVIBaAAIC5gCIANAuQAmCFANCJgAJ9LCQgxiDhuiWQhsiVhAgWQDKApBjBeQAyAwArBOIBNC/IirABgAmBCRQAVgxAEgxQAGgwAAiMIgBg7IgDgoQgLimgjihIgOg2IgOgvQhLjxjnhVIgUgHQhigWgzgLQBRADBiAVICsAvIA3ASQB1ApA/AdQA/AdBOBfQBMBfAZDjQAYDig/DgQgKAcgQAiQgRAkgOAcQAAAKAHACg");
	this.shape_9.setTransform(113.1,92.9);

	// color
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3A3A").s().p("A/PQiIAAhlIgBgUIAAADIAAjcQAChgAMg5QAah4B8h2QBRhNDDgmQCPgcCYgBQgNgJgNgPQhriygGjWQgGj7A2jyQAGgXAHgWIADgHQANggAcgeQAbgeAggVQAggVBMgVQBNgVgEgBQgDgBCZghQCZghCTgOQF4gXA2AAQEDAAC5AbQERAoDyBtIAMADQDQB1AbD1QARCLgECMQgFCQgjCJQgJAkgFAOQgIAXgGAKIgTAjQgKASgHAEQEkAWCQAZQCdAbCEA2QA8AZBIBfQALANA4B8QA4B8gEgGIAZA3IAOAuQAlCFAOCJg");
	this.shape_10.setTransform(3.7,90.5);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-196.4,-15.3,400.4,211.8);


(lib.MEL3QTIE_NECK = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#222427").s().p("AEIEFQh3gki2hUQinhMgSgYIABgBQAEgDgHAAIgBAAQgYAAgfhdQgfheAAhDQAAgIAKgkQAaARArAiQAkAcB3BKQBPA2BpA1QBgAuBOAcIgHASIgEAOQAAAYAVAqQAVAqAAAEQAAATgJAMQgKAOgVAAIgIgBg");
	this.shape.setTransform(40,140.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D3033").s().p("A16LBQiJgiiUg1QiUg3g/gVQh2gki5hUQinhNgSgXIACgBQADgEgHAAIAAAAQgYAAgghfQgfhdAAhEQAAgHAKglQAaARArAiQAkAdB4BKQBQA2BqA1QBfAwBOAcQCnBaFTBRQGwBnGgAAQD4AAEWghQGbgxGYhzQAlgKCdhAQCag+AqgWQC4hdCkhqQCxhxBzhrQAngkBNg9QA6gvAlgoQBqhyDPlnQAZAGAoAsQAnArAAAUQAABIiaDEQhzCTg2AyIAAgEIh8B6IgHAGIgxAsQgcAYgQAMIABABQnjGprrDeQpUCxorAAQojAAmUhjg");
	this.shape_1.setTransform(256.3,112);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AspNmIAMgDQhfgIjnggQklgogBgRQgagHh0glQiLgrg9gXQiUg7gtgNQg4gTgxgSIivhDQhfgpg6gxQiUh9AAkNQAAgMAYggQAZghALABQAFAAAHADQAHAEAGAAIAHAAIAAgCQB1B0DhB1QDXBwEQBcQEPBcEPA0QEaA2DiABQCpgBCkgQQC9gRGQg7QD8gkDJg/QBJgYCRg6QExh7D6ioQCPhhBYhWIBUhMQBBg5Azg3QCfitB8j2IAXguQAOgYAVgKQAPAFAhANQAZAKAmAiQAbAgAVApQARAkAAAOQAABwiTC5QiACij6DjQh9ByjbCSQjsCdiaA+QkzB8iBAuQjBBGifAnQkwBJpdAgQgEAEjFADIi6gBg");
	this.shape_2.setTransform(254.7,112.3);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.3,25.1,506.9,174.3);


(lib.MEL3QTIE = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#202225").s().p("ADPJ0IgJAAQAIgIgWgvQgEgLgThYQgThbgPhRQgQhWgyi7Qgzi4gPgkQCTgWAIgZQAAgBAPANIAWASQgFAHgmAfQgnAhgNAEQAdC0AUBMQAKAqAPAsIBDD/QAjCEAAAEQAAAIgFAQQgEAPgFAHQgfgOgQgEgAhWkNQhHgagfhIQg/iLgQg0QAAgMAQgWQAXgfAogWIAWB1QAVBPAwBBIgCAAIgDAAQgBABgBAHQABAVAWAhQAZAlAmAYIAPAJQgtgDgmgOg");
	this.shape.setTransform(32.8,76.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D3033").s().p("AFBLCQh+gdi5g8QgdgOgRgEIgJAAQAJgIgWgvQgEgLgUhYQgShbgPhRQgQhWgzi7Qgyi4gRgkQCVgWAHgZQABgBAPANIAVASQAWASAvA0IBXBeQAJAJB1BqQB6BxAVARQBhBPASARQATAQAFAOIACAOIADAVQgBBcggCWQgfCVgTAEIgCAAIAAAAQgKAAhhgWgAlKkqQhHgagghIQg/iLgPg0QAAgMAPgWQAXgfAogWQAvgdAwgOQAjgKAeAAQA8AAAlAwQAZAgAZBHQAZBJAOA8QALAxAAAWQAAAMgPAPIgaAYIgLAIQAOgcAAgXQAAgagPgfQgSgngbgGIgCADIAAAIQgBAFAPAoQAQAngBALQABAOgLAbQgMAggMAAQgUAAg8g5QhAg/gRgGIgCAAIgCAAQgCABAAAHQAAAVAWAhQAZAlAmAYIAQAJQgugDglgOg");
	this.shape_1.setTransform(57.2,79.7);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADwLxQjTg2iFg8QgShChBkYQg9kKgKgfQgWhFgXhTIgThGQgBgIgOgIIgNgFQgHgCgrghQgpgfgEgEQgngugohLQgyheAAg5QAAg9BthQQBuhRBbAAQBgAABIB2QBNB+AAC+QgJAjgNARQAOANBKBYQBTBeA9AvIFHEGQAfAYALAZQAPAfAAA9QAABhgdCLQgfCbgvBkIjkg6g");
	this.shape_2.setTransform(57.5,81.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115.1,162.4);


(lib.MEL3QSTACHE = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DAEB0").s().p("ACQCJQgWgWgZgnQgbgrgOgUIgEgCQgCgCgKAAQgRAAgNAcIgbA+Qg4BZidAAQg4AAgbgbQgYgaAAg0QAAgcAQgcQAMgUBjiRQgBgKgCgDQgDgEgdAAQgRAVgXAUQgsAqg9AAIgkgDIAAgQQAAgZAZgeQAbggAsgXQgCARADAOIAEABIAIABQAKAABrgKQAJAAAHAEQAJAGAAAJQAAAFgkA8QgkA8AAAzQAAAfANAPQAQATApAAQAYAAAigcQARgOAvguQBWhaAxAAQASAAAVAsIAvBfQBMCNCCAAIAagFQAXgGAGABQgMAHgqALQgqAKgQAAQhqAAhBhBg");
	this.shape.setTransform(48.4,60.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F2F2").s().p("AkEE4QgWgWgZgnQgbgrgOgUIgEgCQgCgCgKAAQgRAAgNAcIgdA+Qg4BZidAAQg4AAgbgbQgYgaAAg0QAAgcAQgcQAMgUBjiTQgBgKgCgDQgDgEgdAAQgRAVgXAUQgsAqg9AAIgkgDIAAgQQAAgZAZgeQAbgeAsgXQGki3GbhgQENg/BJgGQBKgGBMAJQBNAIgGAqIgnAbQgYARACAKQADALB2AYQB2AYgDA4QgDA4iVAVQgHABhfAJQgvAEAAAJQAAAZAYAYQAYAWAAAgQAABVg/AiQg0AdhwAAQhOAAg5gmIgjgaQgQgMgJAAQgKAAgIAWIgPA3QgeBehJA3QgNAHgoALQgqAKgQAAQhqAAhBhBg");
	this.shape_1.setTransform(89,43);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkCF8Qgxgig3hIQgdAagbAjQgZAhgLAJQglAgh1AAQhlAAgmgeQgvglgBhsQAAgTAOg+QgEgDgTgBQgYgBgMgDQgwgMAAg4QAAhxDqhhQB2gwChgvQgsAICZgwIDMg8IDmhCQBGgSBVgLQBUgMAxADQAxACA/ALQA/AMAIgBQAHAAAjAaQAjAbAGAUQASAvARAGIBAAXIAdALQAPAZAVAXQADAJAAAMQAACHkKAwIAHAaQAHAZAAANQAAC+knAAQhBAAgrgTQgmgVgPgEQgkB7hGA0Qg7AthgAAQhkAAhOg2g");
	this.shape_2.setTransform(89,43.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.5,177.9,86.9);


(lib.MEL3QPUPIL2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAhQgLgOAAgTQAAgSALgOQAMgOAOAAQAPAAALAOQAMAOgBASQABATgMAOQgLAOgPAAQgOAAgMgOg");
	this.shape.setTransform(3.8,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.6,9.5);


(lib.MEL3QPUPIL1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgiAsQgOgTAAgZQAAgYAOgSQAPgTATAAQAUAAAPATQAOASAAAYQAAAZgOATQgPARgUABQgTgBgPgRg");
	this.shape.setTransform(5,6.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,10,12.4);


(lib.MEL3QNOSE = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7150AD").s().p("AjJJYQg+gtgwhxIgDgJQgUhlgKg5QgQhkAAiWQAAiCAQiSQATiuAkiFQAUhHAhgPQAMgGASABIAdAAQhXF0AAEVQAADRBOCcQBWCsCKAAQB9AABZg4QAwgeA8g3QAMBphcBJQhjBMisAAQiKAAhIgyg");
	this.shape.setTransform(42.6,72);

	// SHADE
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9868ED").s().p("AjJJYQg+gtgwhxIgDgJQgUhlgKg5QgQhkAAiWQAAiCAQiSQATiuAkiFQAUhHAhgPQAMgGASABIAdAAQBZAIASAMQAXARAuBiQAZA6BGD7QATBHB8EFQB4D9ADAQQAMBphcBJQhjBMisAAQiKAAhIgyg");
	this.shape_1.setTransform(42.6,72);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlRIuQhYiHAAk8QAAh2AdkXQAik9AeggIARgWQAMgPANgJQAmgdBQAAQBKAAA7AhQA5AgBBC0QAUA9AtCdQAhB5AUAoQAoBSAUAiIAaAtQBEB6ApB9QAeBcAAAfQAACHhrBHQhmBEi8AAQkHAAhnidg");
	this.shape_2.setTransform(42.7,71.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,85.3,143.1);


(lib.MEL3QMOUTH = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AllB9QhQgOhvgmQANgTAjgRQAkgQAhAAQAcAAAvAzQAzA5AJADQAcgxAZgmQAvhGAzAAQBhABApA9QAIAQAPAcQAMAUARAAQANAAAOgYIAcg1QAshLA/AAQAsAAAVAsQALAWAHAHQAMANAVAAQAHAAA1hVQA0hXAXAAQAjgBAfAyQAQAaAJAaQj4Bgi9ArQibAkiDAAQhqAAhNgOg");
	this.shape.setTransform(30.5,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#479C94").s().p("AhRCrIgjADIgIg0QgFgYABgcQAAgeAFhZIAFhcIABgQID3g3IgJBHQgCAcAAAkIADBKIAIBcQAAAEgaAVQggAagQAYQgaAngNAKQgRgqhRAAg");
	this.shape_1.setTransform(60,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#283B4A").s().p("AlXCEQhGhBgagqIABgCIgIgIQgRgUgeg1QgkhBgTgxQD6APFfgVQFAgTCUgiIAcgHIAAAHQgBAVgEAnQgHA7gEA0IgDAOIADAAIALCSIgrApQgsAogBAFQgYgXhIgeQhFgdgZAAQg1AAgyAvQgWAWgmA3Qgegtg1gUQgdgLghAAQgqAAgxAcQgvAcgNAfQhDgehThNg");
	this.shape_2.setTransform(-11,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkhBeQATgfAOgSQAnguAlAAQBCAAAtAeQArAeANAzIiOAFQiOgIAIgNgABSAXQAsgyAtAAQAiAAAcAqQAcAsAbAAQAFAAA4hVQA3hYASAAQArAAAcAyQAPAaAOAoQh2AohsAXQhsAWiUASQAFglAlgtgAoJA6QA9gOAEABQAQATApAdIh6gjg");
	this.shape_3.setTransform(24,54.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#479C94").s().p("AgiFOQgWgMgMgEQgYgHgNg1QgKg5gEgOQgJgigKhWQgLhdAAhBQAAhDADiDIEohDQg9DVAABoQAAAOAKBkQALBuAGArQg8AdgfAuQgQAYgQAeQgBgIgagPg");
	this.shape_4.setTransform(52.5,14.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#283B4A").s().p("AAhE0QgqgWgoAAQgQAAgoAMQgqAegKAAQgqAAjSjbQg6hHgwh4Qg5iRAEh2QAeADGhAUQAWAAHUgkIioAQIE7gUIgCAkIgCAsQAACAAZC1QAPBvARBVQgWAAgrAjQgrAjgMAbQgYgXhIgeQhFgdgZAAQg2AAgxAwQgUAUgoA5QgPgggwgXg");
	this.shape_5.setTransform(-20.3,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgRAPQAagRAZAAQAgABAZAeQAMAfAeAVQgWACg8ACQhCADhBABQAZgyAmgYgAloBNIAAgLIgZgHQArgkAYAAQBrAAAbA9gADVgHQAxhRAXAAQAjAAAgA1QARAcARAlIjgAuQAagsAZgng");
	this.shape_6.setTransform(19.7,63.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#479C94").s().p("AAoGPQgRgPgNgEQgNABgIgCQgQgEgHgfIgfiEQgKgygPhpIgfifQgJgzAEhjQAEhiAGgFQAGgEgBgEQgCgEAHgBQAGgBAOgHIAQgGQBjgIBhgYQgBAhgHBCQgYDIgBCQQAACRAKA1QAGAhATA6QgJALgfArQgeApgCACQgBgDgPgNgAhxl7IAHAAIAHAAIgQADg");
	this.shape_7.setTransform(27.9,19.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283B4A").s().p("AEjGAQhGgdgZAAQgtgBglAgQgUARgeAgQjthGijjjQiok7gRj/IAAgDQA6AVDqAMQCcAHCHAAQDwgIB4gKIAPgCQgNAPgGAlQgHAhABAkQgBBBAYCOQAYCNgBAmQABAhAQBDQASBOAcBCQgZgDgzAoQgzAlgIAbQgYgYhHgdgAlPCNIAAAAIACADg");
	this.shape_8.setTransform(-32.1,23.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhpBpQAYhBAkgkQAjgiAjABQArAAAWApQAMAYAFAHQANANAWAAQAJAAAwhUQAvhYAeAAQASAAAdAaQAfAbAAAYQAAAshqA2QhzA6iBAAQguAAg/gMgAj4A5Qg/gcgqgcQASgEAJAAQA3AAAhASQAjATAfA1QgcgJgwgVg");
	this.shape_9.setTransform(35.3,85.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#283B4A").s().p("ACHHtQhFgcgaAAQgCAAgiALQgjANgMAGQkjijj4nQIg5h8Qg2h4g1hnIAmABIAAgDIBXAAIAAAMQEfAWDWAAQAkABCAgHQCAgGAYgDQB4gOCKgbQBEgNAegJQAigLABgKQAlFVAYCYQAmDuA9DGIAAAWQgggggUgKQgSgLgYAAQgzABgpAxQgWAbgmA3QgFgUgdgLQgcgMglAAQg0AAgwAgQgqAcgeAtQgYgXhHgeg");
	this.shape_10.setTransform(-1.8,32.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#283B4A").s().p("AhaKFQhIgahMg/Qg5gvgKgJQgqgpgjg7Qg6hhgIgPQgkhIAAg1QAAgrAbiMQAeicAYgqQA1hdBdhuQBWhoAqgcQB0hLBEgZQAlgNAfAAQCRAABNAkQCMBEABC/QgBBohHCdQglBRgyBZQgKAagEB7IgBCaQAAAKAJBhQAAA2hCA/QhUBQiBAAQhGAAg+gWg");
	this.shape_11.setTransform(56.8,27.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#283B4A").s().p("AjhEKQgnhSgXhhQgShLAAghQAAg6AMhCQAShgAnhQQAohPBrg7QBagwA9gBQBYABBLA+QBRBEAABgIgDA5IgFBGQgCAUgSBSQgPBAAAAwQAAAHAIApIAJAxIANDKQAOgBgxA/QhEBYhygBQi8AAhxjyg");
	this.shape_12.setTransform(66.4,14);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#283B4A").s().p("AhuC6QgSgTgOgUQgIgKgGgKQiAjZCqixQAlgTA0AAQAkAAA4AfQBKApAAA7QAAAPgLA3QgMA2AAAVQAAAiAvBHQAvBHAAARQAAAigbAdQgoAphUAAQhMAAhfhlg");
	this.shape_13.setTransform(73.6,-6.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#61FFDE").s().p("ArTDvQh6gtg9hVQgUgbg6hIQg5hIgqhBIgig4QgIgPgHgSQgEgLgCgQQgZgLgHgGQgGgFAAgIQAAgKADgDQBUAYBoAhQBgAfAiAJQA9AQBnBBQBmBAAAAWQAAAGgDAIQgBAFAJAAQAJAAAIASIAOArQAVA/AhAAQAYgBAPgGQAQgIAAgLQAAgIgQgaIg1hPQBjgpBygWQBygVB4AAQB+AAApADQBnAKBIAlQAuAXBAA2QA0AtANAAQAKAAAIgFQAJgGAAgHQAAgXghghQg2g7h2glQDKhNBPgXQCIgpBjgBQCCABBhA8QANAIAuAhQAZATAMAAQAJAAAIgFQAKgHAAgKQAAgZgygnQhCg0hlgIQAPgCAAgBIBVgDQAfgBBQAFIADAEQAXAKAMAWQAFALABAKQAADUq3CgQj6A6kaAkQjzAhh1gBQi4ABiBgwgAr4BrIAUAAIgngPgAtGA9IAIACIgQgLg");
	this.shape_14.setTransform(28.6,19.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ApHClQgigmgdgPQgcgNgJgDQgNgDgHgDIhegoQhkgog2gTIBJgCIE1AKQFVAAEsghQGmgwGOhyIARAXIASAjIAIAXIgEgPQALASAKBHQgrAIgFAIQgFAHg/AAQg+ABhUAEQhTAFjIBBIirBVIgfgJQgogKhAgIIhMgGIg4gEQhhAAhuANQhQAJgdAIQgcAHhYAdIhSAbQgJAAgdghg");
	this.shape_15.setTransform(28.4,-6.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AktBgQAmg6ASgXQAfgmAnAAQBQAAAtA2IAeAtQAQAZALAJIg9ACQjYgMgfgEgABXAWQApg3AxAAQArAAAWAsQALAZAGAHQANAPAVAAQARAAAhg8QAzhdAagMQAjgQAmA/QAUAhASAsQhNAYhZATQisAmicAKQAcg2AWgggAoSAXQA/gXAaARQATALAtA0QgIgCiRg3g");
	this.shape_16.setTransform(17.6,55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D580AA").s().p("ACBDTQgagJgZAAQgHAAgXADQgWADgMADQgFgngygzQgmgmg0gjQhLgwgPgVQgPgVgEhKQgEhJAGgFQAGgEALgQQAYgiBuAAQBhAABRBJQBGA/AvBsQAHAdAUBLQAIAdAAAiQAAAMgbAiQgZAegNAKQgMgZglgNg");
	this.shape_17.setTransform(27.9,25.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#479C94").s().p("AgKAlQgxgcAAgBIAEg1IBzgUQgIAggNBjg");
	this.shape_18.setTransform(32.9,-8.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#283B4A").s().p("AATEZQghgPgdAAIhvAnQhzhfgOgOQghghgyhLQgrhAgHgQIg8iUQgHgbgTiaQF0ANBKAAQCyAAFrgoIgDAfQiiAFgtAaQgwAcAABgQAADZCKBaQAiAWA9AgQArAdAAAoIgVAXQgWAZgFAHQgkgYg+gfQhHgkgVAAQhaAAhJB1Qgegug1gWg");
	this.shape_19.setTransform(-26.8,22.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhSBfQARgyAmghQAjgdAkAAQAjAAAeAsQAeAuAVAAQATAAAshTQAshVAdAAQAkAAAlA/QASAgANAgQhAAXi0AXQiQAShDAAIgbgBgAlBBYIAAgLQgogHgmgJQAKgYAdgVQAdgSAYAAQA0AAAkAWQAgAVAhA1QgpgDh+gDg");
	this.shape_20.setTransform(26.2,65.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D580AA").s().p("AAhE4QgYgMgMAAQgEh9gPgqQgGgOgIgLQgLgNgNgKQgMgKg9hdQg8hegGgjQgGgjACg6QADg6AbgJQAQggAvgDQAlgDAhAJQBUAZBLB+QBWCRAACyIgFBRIgdAMQgMAGgNAMQgNAMgGAJQgRAdgTAYQgQATgEACQgLgSgbgOg");
	this.shape_21.setTransform(34,27.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#479C94").s().p("AgVgHIArgIIgEAfIgngXg");
	this.shape_22.setTransform(36.4,-14.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#283B4A").s().p("AgPF7QgogjgwgFQgHAAgwgnQg5gtg3g1QhKhGhVivQhnjXAIiZQAwADCyANQCHALBWAAIDOgLIDlgNQgWAcgBCBQAADHBgB4QAXAfAqAsQAeAkAAAdQAAA3gMAYQgJASgXAKQgkAPgGAEQgbASgTAmQgZgXhHghQhGghgYAAQhJAAglA4QgJAOgOAYQgLARgNAAQgaAAgkghg");
	this.shape_23.setTransform(-25.3,28.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AiyB4QgugBgtgDQArhAAWgdQAkgyArAAQBRAAArA1QAJANARAdQAOAYAKAHQgxAIgiAFQhIAIgzAAIgVAAgAmtBeIhsgXQAPgZADgDIATgNQAHgGAogIQAkgHAFAAQAJAAAuAqQAvArAKATQgxgEhQgPgABfBSQAVg8AmggQAjgfAmAAQAeAAASAZIAiAwQhAATgyANQg+AQgoALgAG6hbQAUgcAQAAQASAAASAOQASAOAGASIiaBJQAnhDATgYg");
	this.shape_24.setTransform(33.8,38.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D580AA").s().p("AicAxQgsgagjgPQAygqB5gWQBlgTCJAAIA9ADQgNANgfAqQgdAmgDACQgLgYglgMQgZgIgaAAQg3AAgrAZQgsAagcAuIgugbg");
	this.shape_25.setTransform(51.1,30.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#479C94").s().p("Ah5hMIAAAHIAAgXIABAAIAAAAICHgdQALAAAQgEIBQgXQgGAzACBSQACBJAJBPQgsgEhaAFQhNAEguAHg");
	this.shape_26.setTransform(60.1,4.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#283B4A").s().p("Al+BKQh5h+gjh2QD2AJFWgZQFagaCQgRIgKACQgCCXAFAHIAAA6QhLALhAAeIg6AhQgdAQgeAHQgZAHgQAKQglAagOAUQgdApgJAKQgfgtg0gWQgigOgdAAQg1AAg2AmQg0AlgDAkQhkgbh5iBg");
	this.shape_27.setTransform(-10.1,21.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AgJAAIATAAIgTAAg");
	this.shape_28.setTransform(23.7,39.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#61FFDE").s().p("AEOEdIiMgrIggALQghAMgVAAQhGAAhxgtQhtgshphGQhvhJhChMQhKhWAAhGQAAgbATgZQAVgbAgAAQAIAAAcgUIApgcQAdAlAqAlQBQBICUBPQDiB2C4BtQA5AdAqAKQApAKBFAAIA5gDIAEAAIAAABQAKAEAlAAQAiAGAAAfQAAAmgjAgQgtAshZAAQgXAAiPgrg");
	this.shape_29.setTransform(-29.8,21.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AmSCcQgqgfgcggQgYAAgUAhQgUAggYAAQgTAAhbhAQhdhBgIgVQA6ADBtADIBqACQEZAAELgwQEDgxHOiIIABAaQAABDgcAoQggAvhBAAQgeAAgYgWQgXgWgYAAQgbAAgCAtQgCA1gGAIQgpAzhIAgQhFAehCAAQgpAAgrgNQhGgYhHgWQgLgJgKAAIgGAIQgEAHgBAAQgGAhggAiQhBBCiGAAQhVAAhUg+g");
	this.shape_30.setTransform(23.2,-8.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D580AA").s().p("AiqCdIh3hPQhDgqgxgPQgJgiAYgfQAZgfBGgrQASAHAwAMQBBAPAoAAQBDAABeglQAxgTAngUQAcgOAMgNQAUgXAGgtQBcAEAtAIQAfAGArAPQAEA1gBA5IAAADQAIAfgKAAQgGBSgkBUQhHCoikAAQiLAAidhjg");
	this.shape_31.setTransform(60.8,21.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#283B4A").s().p("Am6B6QgggQihhjIgFgFQALgDAQgPQAPAnA5AhQBCAlBTAAQBKAABlgpQBogqAWgnIAiAQQhGApgYAfQgZAfAJAkQgPADgNAHQgRAJgBALIBEA2QiBgDiohVgAI3iJQgugIhcgEQACgRgBgTQARARA4AEQAnAAAkgMQAogMAPgVIAIBcQgrgPgfgFg");
	this.shape_32.setTransform(37,10.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#283B4A").s().p("ABFDBQhFhTgnhcIhKjQIABgDQAcgFAbAkQARAXAgBAQBECOA2AdQgJAHgQAoQgQApABALg");
	this.shape_33.setTransform(-66.4,14.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Al5G/QgUgDhFgOQhJgQgggJQh2gfgagKQhqgkAAgiQAAgDAQgsQATgzAFgQIACgHQAhAKARAAQA1AAAugUQAlgRAlgeQAeA+BOAnQBKAlBTAAQBuAABpgsQBngrAmg+QAlAZBMAUQBLAUA4AAQAeAAA4gNQBEgPA6gZQCkhHAAhkIAAgXQAKAOAoAIQAVAEATAAQAlAABNCrQAAAclfCDQlmCHhzAEQhkAIhOARQg7AOhRAAQgiAAhagKgAnHBeQgXgTgjgiQgbgYgNAAQgKAAgMAOIgcAhQgwAvhaAAQhEAAgxhNQgggygihvQGJAgJChpQI8hoEiiYQAQBmAAAgQAABLgYAwQgkBGhTAAQghAAgrgcQgrgcgFAAQgKABgIAGQgLAJAAAVQAABHg0A/QhPBfinAAQgvAAgPgDIhZgZQg/gRgygXIgogRIgFAIQgFAJgEAAQgIAogkAnQhMBQiXAAQhoAAhdhOg");
	this.shape_34.setTransform(27.5,8.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#283B4A").s().p("AhAAyQhQiOgdibQgIgaACgEQADgJAcAFQA5AKBCAIQAOAHAQAwIASA1QAsBaA+BOQAeAoAVAXQAAAjgUAuQgUAtAAAGQAAAXAIALQAJALAAAHQAAATgMAEQh3hEhailg");
	this.shape_35.setTransform(-73.7,13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AkuHeIi8gZIAAAAQgzgLhugkQhegeg3gWIgRgNQAbg1AyiEQALACARABIAZgBQAngHAggOIAZgNIABgBIAqggQAmBEBJArQBOAtBeAAQBpAABjgnQBsgrAghEQB/BNCaAAQA7AABEgdIBzgyQAzgSAXgfQAZglAAhCIgBgYQAJAEAkAMQAiAMAJACQAUAEAWArQAQAcAEAVQADAIABABQADACALATQALAXALAcIAJAYQAAAaiLA6QgWAKjJBMQh+AvhyAdQhjAYibAaIg3AHQg0AHgLADQg+AJhLAEQgtADgZAAIgUgBgAnFBJQgVgVgegnQgYgZgUAAQgJAAgMANIgcAhQgvAwhVAAQhDAAgvhFQgpg7g0igQBaAHBeAEIB5ACQGPAAHBhSQHJhTD0h4QAIA+AHArQAEAVAAAXQAABbgfA0QggA0g7AAQg0AAgsgfQgrgggIAAQgYAAgBAmIACAyQAABAhlA9QhhA+hbAAQgSAAgugIQgsgHgRgGQhqgkgygZQgggQgFAAIgGAJQgGAKgBAAQgEAAABAHQAAAQgBAIQgIArg9AmQghAUg+APQg6AOguAAQh9AAhRhXg");
	this.shape_36.setTransform(25.6,8.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhvBsQiGgWhIgJQA/hjA2AAQBhAAAnBCQAKAQANAeQAMAUAQABQAVAAAFgNQANglANgUQAdgpAcgSQAagRAeAAQAmAAAeAzQAOAZAIAHQANAMARgHQAcgNAthPQAphKAUAAQAmAAAiA/QASAfAMAiQiBA7jDAaQhxAOhVAAQg5AAgogGgAnCApQgVgGgXgJIgNgIIATgFIAXALQAPAIAKAMg");
	this.shape_37.setTransform(23.4,36.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#479C94").s().p("AhZAYIgCigQgChPASgCIBqgTQA9gLABAIQgMBhAAAnQAAAnADBYIADB3QAAAKgOACQgagUg2AtQgxAngEAZQgciLgBhRg");
	this.shape_38.setTransform(58.5,3.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#283B4A").s().p("AjvDYQgigOgcAAIhFAOQgFAAgkgeIgmghQCgiGDthxQDkhvEMhNIgCAYIgDAAIgFDRQAAB1AQBxQgLgNgegHQgWgGgRAAQg4AAgtAaQgsAZgfAwQgXgYhGghQhFgggYAAQg1AAgyArQgcAZgjAyQgegtgzgWg");
	this.shape_39.setTransform(2.4,10.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgpAnQAlg2AogMQA0gOAkAvIAYAkQAOASAMAAQAHAAA2hTQA3hVAZAAQAfAAAgA2QAMATASArQjmBMhSANIitAMQAMghAYglgAmYBRQA/hiA1AAQBSAAArA1QALAOAPAcQANAYAHAGQgMAAkTgbg");
	this.shape_40.setTransform(27.8,61.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#479C94").s().p("AA7EKQgVgIgSAAQgzAOgRAMQglijgEgdQgQhgAAiZQAAgHAKg6QADgVAGgdQCZgcAhgDQgWBJAADVQAABpAFBFQAHBTAQBAQgRgagegMg");
	this.shape_41.setTransform(57.8,18);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#283B4A").s().p("AlhFmQgbgvAFgxQAFgxBChrQBBhqBqhmQBxhtB5hIQCKhQB7gQIgDAZIgEAAQgICBgIBiQgGA8AAAcQAAAXAWBmQAWBnAAAqQAAADgQARIgUAUQgKgZglgMQgYgIgbAAQg3AAgtAZQgtAageAvQgYgXhDghQhFghgZAAQg2AAgyArQgeAaghAyQgWAagSAAQgQAAgNgWg");
	this.shape_42.setTransform(10.3,29.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ACShCQAiAUAhBSQhxAmhiABQBNi1BDAogAjTAmQgCgUAogLQAVgGAWgBQAYAAAQAQQALALAcAuQibgbgFgIg");
	this.shape_43.setTransform(43.3,94.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#479C94").s().p("ABDHXQgmgCgLgDQgOgEgEgMQgEgzgUhCQgFgOgUjCQgWjKAAgyQAAgrAKhtQAMiFADgzIBBAAIACgJIACADQgpFhARC8QgKBoBTEpQhGjkBBDig");
	this.shape_44.setTransform(53.4,34.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#283B4A").s().p("AhmH4QgeghgbgjQgZgbgNgRQgXgfgIgrIgWhgQgMg/AAgyQAAkMAZhOQAKghAXgbQAdgfATgYQAkgtBkg0QBzg9CCgYQgCAagPBdQgJA8AABVQAAASAICSIANDnQAEA6AUBzIATBtQAAACggApQgkAtgUAQQgFgRgcgOQgegPgjAAQgrAAgiAQQgbAPgvAnIgcgfg");
	this.shape_45.setTransform(23.1,41.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AhhBXQgxgOhIglQANgYAegQQAegQAagBQAfABAcArQAcAvAagBQASAAAshSQAshVAhAAQAnAAAbAtQAUAiAAAVQgFAehCAgQhJAjhaAAQgrAAgngMg");
	this.shape_46.setTransform(61.4,84.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#283B4A").s().p("AkvIqQgtgrgig6IhChwQgkhHAAg1QgBgXAKhJQAJhGAIgmQAShWAOglQAJgaAqhOQB1jaC/hrQCJhPCDAAQBUAABQA3QB5BRAAClQAABvg4B7QgdBBgwBQQgdA6gGAlQgDAUABBVQAABAgEBZQAAAKAJBjQAAALgLAfQgvhGgigYQgWgOgXAAQgwAAgjArQgLANgVAdQgUAagTAQQgLgaghgMQgZgIgbAAQgpAAgqARQg5AWgVApQgzgpgZgYg");
	this.shape_47.setTransform(56.8,22.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGA+QAzhSAMgOQAVgdAQAAQASAAAUARQAUASAFAUQgaAig/AWQgqAQgXAAIgJgCgAiMAXIgQgKQAaAFAJAHQAGAEAKANIgjgTg");
	this.shape_48.setTransform(75.2,58.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#283B4A").s().p("AgPG3QgYgIgbAAIgfAEIgfAFQgYAAhDh/QhAh6gGgoIgOheQgEgYAAgXQAAg2ANhEQAShgAmhRQAqhPBrg6QBZgxA8AAQBYAABLA+QBRBEAABhQAAAfgVCCQgWCAAAAzQAAArAYA3QAXA3AABJQAAALgEAVIgEAcQgEARgGAAQgGAAgCAIIAAAHQgTgigjgQQgXgLgVAAQgwAAgkAsIgfApQgTAagUAQQgKgZgjgMg");
	this.shape_49.setTransform(66.6,10.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#283B4A").s().p("AhuC6QhlhsABhqQgBiJAyhAQAtg5BaAAQAkAAA5AfQBJApAAA7QAAAPgLA3QgMA2AAAVQAAAQAwBTQAuBTABALQgBAigbAdQgoAphUAAQhMAAhehlg");
	this.shape_50.setTransform(73.7,-6.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AlhCDQgsgNgEAAIi3AYQDEh1DzhJQEuheEoAAICEAFIgvAIQkkBCggA/QgKAThsAKQiBALg4AXQgsAShTAnQgvAXgRAAQgdAAgsgMg");
	this.shape_51.setTransform(47,-3.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AkYBtQhIgKg7gQQAkgyASgXQAignAmAAQBhAAAmBBQAKARAOAdQALAVARAAQAJAAASgXIAjgzQAyhIA1AAQAdAAAeAsQAdAuAaAAQALAAAmhEQArhNAhgRQAqgVAgA1QAIANAYBAQhrA+iSAhQiLAhiVAAQhEAAhTgNg");
	this.shape_52.setTransform(30,49.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D580AA").s().p("AgJCZIhhhAQh6hUAAgqQAAhfANgYQAbgxBuAAQBvAABHBHQBCBBA7CVQgpgBg7A5QgeAdgjApQgUgSg1gjg");
	this.shape_53.setTransform(40.8,23.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#479C94").s().p("AgfAUQgJgSAAgfIABgkIBQgLQgDCGABAUQg0gZgSghg");
	this.shape_54.setTransform(48.9,-5.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#283B4A").s().p("AlBEsQgVgugGgSQAPhVAohUQAohSATgUQAUgUAAgHQgBgEABgDQAEgGBghGQBGgzCFg0QCHg1B9gZIgCAOIgCAAIgBBAQgngOgvgFIgpgCQhzAAgvAsQgnAlAABTQAACJA5BHQAkArBpA3QgYAGgjAhQgfAdgIAQQgYgYhFghQhDgggZAAQg3AAgwArQgeAagiAxQgaANgTAAQgbAAgNgbg");
	this.shape_55.setTransform(8.2,20.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgIBYQgzgDglgDQAGgjAsgfQApgbAeAAQAkAAAZAsQAZAuAcAAQATAAAshTQAthUAgAAQAngBAgA7QAQAdAMAkIiRAlQhYARhnABIgygCgAkyArQgxgOgWgKQAhgSA/AKQBHALAQAuQgzgIg9gRg");
	this.shape_56.setTransform(30.2,64.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#D580AA").s().p("AAREwIgVgSQgGgJgDgrQgDgwgDgLQgGgUgXgrQgWgogNgQQhOhlgNgUQgWgiAAAHQAAAIgHhKQgHhJALggQALgfAWgSQAHgKA5AAQCGAABYCMQBXCJAADIIgCAqQgwgVg6BDQgeAigdAuIgXgTg");
	this.shape_57.setTransform(39.3,29.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#479C94").s().p("AgeAEQgVgTAAgmQAAgKADgPQAAgEAxgEIAzgDQgGA6gDB5QgYgigxg0g");
	this.shape_58.setTransform(48.6,-7.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#283B4A").s().p("AAAFmQhEghgYAAQgXAAgrAZQgsAagEAAQgWAAg3hAQg/hJAAg9QAAhGAhhNIBFiGQAfg8AjgfQBPhHC7hLQgMAtgEAdQgEAigBAuQABCFAQAyQAPAoBFBZQBZBlAAAtIgDAsQg2AEgkAXQgkAWgjAxQgZgXhEghgAEQmNIBKgQIABAvQgEgChHgdg");
	this.shape_59.setTransform(6.7,26);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAIBFQAHgUAYgjQAegqAcgWQBVhDAcCWQgFAFgKAAIgFABQACgCAAgFQAAAOglAFQhLAIhKAMgAjRAlQAPgWAggJQARgEAOgBQAeAAATAZQALAOAQAeQgKgBiQggg");
	this.shape_60.setTransform(43.6,94.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D580AA").s().p("Ai7BOQgrgygcgcQAQgGAZgEQAWgEAIgBQAoAAAmALQAtALAdAYQhIAGg2AzgAA7AsQgRgagcgOQAWgdAYgVQAxgpA1AAQARAAAXAHQAkALAVAZQgSgFgKAAQgxAAgjArQgLALgUAdQgUAagTAQQgIgSgKgOg");
	this.shape_61.setTransform(33.2,85.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#283B4A").s().p("Ag7IWIgPgUIAbAKQgKAKgCAAIAAAAgAAQGBQhFgZgVAAQhHAAgrAbQgcgggRhRQgQhMAAhdQAAjPAdhyQAbhqA3g0QA2gzBUgpQBTgpCMgaIgNCUQgEAtAAAZQAcHLAQCWQhEATgRAMQgcAWgiBKQgXgNhAgXg");
	this.shape_62.setTransform(21.8,42.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#40152B").s().p("AAAgWIABgLIAABDQgCgmABgSg");
	this.shape_63.setTransform(53.7,32.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#479C94").s().p("AgIFyIgQh+QgIg3gPi0QgPi1AAguQAAhpAMhlQBkgIABgGQgGAugNCqQgMCkgCAqIgCALQgCAQAEAoQAGA4ABBfQAFBhAhCMQg4gGgPg/g");
	this.shape_64.setTransform(52,30.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#283B4A").s().p("AgaAYQgNgYAAgMQAAgSADgLQAFgQANgPQA1A3AFAEQgNAIgLAaQgKAXgEAdQgTgggJgRg");
	this.shape_65.setTransform(-59,25.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("ApjGWQgygJhCgcQiHg6AAgdIAjh3QARAMArAAQA5AAA7ggQAhgSAUgSQAdA/BOAnQBKAlBTAAQBuAABpgsQBpgsAkg9QAmAZBLAUQBMAUA4AAQA6AABJgWQBKgWA9gkQCUhTgnhUQAcATAtAEQAmAEALAOIASAVQAFAGAEAKIAgA1QAaAwgDARQhSASidA5QjXBOhMAYQmPB/l/AAQhcAAg1gJgAn/BWQgSgQgkglQgWgYgJAAQgOAAgMAOIgaAhQgrAvhfAAQgcAAgfgWQgZgRgQgWQA1g3D3hjQDpheGFhTQGHhTDvgbQCxgTAjAFQAKB8gVA+QgeBZhZAAQgnAAgngbQgmgcgRAAQgKAAgHAHQgLAJAAAVQAABIg6BCQhSBaieAAQgwAAgPgDIhZgYQg/gRgxgXIgngRQgMARgCAAQADANgGATQgLAngwAdQgwAdg7AQQg2AOgzAAQh2AAhbhOgAN0mbQAFACgEADg");
	this.shape_66.setTransform(31.8,9.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},2).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).wait(1));

	// Layer 4
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AuIEAQgfgHhUgiQAhgbASgHQAhgOBEgBQB2AADbAFQEPgBEVg5QFHhDGOiZQAVgIBzhLQBuhHAFAAQAKAAAPAJIABACQgKAUgsAuQgnAsgEgBIg7AuQg+AvgTAFIh6AyQhUAjh+ArQkxBpnVAuQkPAbjEgBQhTAAgfgGg");
	this.shape_67.setTransform(34.4,-7.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AoUHOQiUg3h7hkQhShDhBh4Qg9hwAAhAIAEgSQADgRgBgbIIfgKQDrgBDpgfQAwgGAtgJQDhgfDYhMQBAgVBAgUIgsAMQB0gsBkhIQBFgxBLgvIAHABIAIAEIAGAGIADAFIADAJIABAJQh+B1iaBQQhmA2huAlIgWBcIAAABQgNA1AAAkQAABZAGAdQAFAYARAHQAeAOAMAJQAhAcAjBGQBeglAKgSQADgEgCgCQAAgBALAAQAJAAAHAHQAHAIAAALQAAAMjIB5QiEBRkbA1QjYAqhwAAQi5AAimg+gAtICTIABgCIgJgIgACBBKIADAAIAAgNg");
	this.shape_68.setTransform(29.1,4.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AqXJDQiJg8g7g8QikinhKjiQgsiFAAhfQAAgsALgQQAVggBGAAQA8AHBTAGQCnANCoAAQFxAAFLhCQEPg1EahpQC6hOC8hxQAxgeAMgBQAPAAAAAgQAAAogmAcQgFAEhFAmQgEgIh7BEQh7BElABoQgQBMgPB2QgQBxAAAmQAAAvADAkIAMCTQADAhAuA1QA0A6AMAoIAngTQAYgMAVgGIAFAIQACAEAAAHQAAATg0AaQhMAjgyAaQgxAai0AsQjpA6izAAQkDAAjZhgg");
	this.shape_69.setTransform(28.3,6.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("ApDK1QkChjiHi1QiJi3g8j0QgiiJABhaQAAg1ALgQQAVgfBLAAQAOAACtAVQCuAVEMAAQKHAAIqjsQCnhGCahcIB7hJQAJAAAGAHQAJAKAAAXQABBOjvBxQkRCBndB3QgjDqgHBJQgMBkAABnQAACDAVBTQA8gLAjAZQAtAgAzBzQA4gTAPAAQAMAAALAHQAOAIABAMQAAAMgNAVQhFAsjiAuQjgAuiPAAQi1AAjNhOg");
	this.shape_70.setTransform(27,5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AnOLDQjmikjTkzQg1hMhjjwQhgjsAAgpQAAgnAegSQAagRAwAAQAPAACqAUQCoAUC9AAQKyAAIOjuQCahGCQheQByhKAFAAQAJAAAGAHQAKALAAAWQAAAlgkAhQgPAPg6AnQhxBIglAPQgRAHghAQQgjARgSAHQhBAahPAdIhCAYQjGBAgLAAQgGAAgPAFIglALQgTAjAIBoQAFBJAPBHQADAOASB+QATCBANBCIAqC5QAgCJAAAMQAACRhuBWQh7BfjwAAQjUAAjjihg");
	this.shape_71.setTransform(33.5,18);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AmLILQhLhWguhhQgshZABg4QgBi4A/isQA7ioBriEQBsiFCHhKQCMhMCUAAQC2AABjCFQBQBrAACMQAAA8gbBKQgNAkguBjQhUC2AAB+QAAAhAKBVQAKBWAAArQAAB2hzBVQhvBSiQAAQjxAAjDjeg");
	this.shape_72.setTransform(56.5,27.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AkVE8QgthggchxQgXhgAAg2QAAksC4iPQB8hgCSAAQBmABBXA/QBlBMAAB2QAAAygSByQgTBzAAA1IAUCCQAUCIAAAhQAABfhSBSQhiBjigAAQi7gBh8kKg");
	this.shape_73.setTransform(65.8,15.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgjE9Qg7geg0gyQgrgpgcgrQh1jhCUjVIAMgPQAyguBSAAQB+AABBBgQAqA+AAA3QAAATgKA4QgLA4AAATIAyBUQAyBUAAAWQAAA0hJAuQhDAqhBAAQgsAAg4geg");
	this.shape_74.setTransform(73.5,-7.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ArUGcQh6gtg+hVQgUgbg5hIQg6hJgqhCIgig2QgHgOgHgTQgEgLgCgPQgagMgHgGQgGgFAAgIQAAgKAEgCQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIgbgBQgGgaAcgQQAdgQA5AAQAOAACtAOQCuANEMAAQEWAAEygjQE3gkDGg3QEWhOChhBIBxgtQAOAAAGALQAEAHAAAKQAAAhhVAjQhxAng1AZIAIAUQADAHAAgCQAEAHAWA/QAWBBABAIQAUgBAtAIQAxAIAhAOQgOAHgOgBIACAFQAYAJALAWQAGAMABAKQAADTq4CgQj5A6kbAlQjzAgh1AAQi4AAiAgwgAr6EZIAUgBIgngPgAtIDrIAJACIgRgMgAOkjHIgEgPIgEgHIAIAWgAN5kYIAQAYIgLgZg");
	this.shape_75.setTransform(28.7,2.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AqXJEQiJg8g7g8QikinhKjiQgsiFAAhfQAAgsALgRQAVgfBGAAQA8AGBTAHQCnAMCoAAQLVAAIjjfQCohFCIhUQBDgqAlgcQALAAAGALQAGAKAAAMQAAAmgmAdQgSANgtAWQgyAjg5AgQhtA9jQBBIk3BXIiaAiIgGAyQgHA9AAAeQgBAgAXArIA0BRQBQB9AJBxQAzgJArAnQAtAqApBjQAygRAugVIAvgVIAFAIQACAFAAAGQAAAagvAYIiDA4QhDAdijApQjqA6ixAAQkDAAjZhfg");
	this.shape_76.setTransform(28.3,6.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("ApuJuQiEhAhWhdQiui9hNj/QgsiTAAhsQAAgaAEgVQAGgiAPAAIAcgCQAegGAUAAQAJAACqAQQCqAQB4AAQLSAAIjjdQCohDCIhUQBEgpAlgbQAIAAAGAHQAHAJAAASQAAA1gxAeQg6AZgTAMQhcA/iFA2QjtBemMBVQgLAlAJAcQAHAVAbAgQBIBcAbBcQAlCCAKBNQAFArAABnQAAAPAwA3QA0A6AMA9QBvggArgVIAzgaIAFAKQADAFAAAGQAAAegvAXQhLAfg4AaQhEAeiNAkQjLA0ifAAQk0AAjhhvg");
	this.shape_77.setTransform(27.1,11);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AobHJQigg2hthZQhQhCg+hvQg6hoAAg8IAEgSQADgRgBgZIIdgUQEvgLDMggQDsgmDyhUQBmgiA8gdQBLgiBqhBIAwgmQAmgeAQgEIAEgCQADgBAGAAQANAAAHAJQAHAJAAAMQAAAKgmAgQgvAohLAuQgXARg/AiQhOAsg6AYIhEASQg4APgiAQQgBg2gDBaQgCBbADAUQAEATAFA1IAHBBQACAPASAJIAbAKQAuAPAVANQAbASAWAkQA3gXAMgOQAFgHAIAAQAJAAAHAHQAHAGAAAMQAAADgQAYQAAAIhwA6Qh0A7hMAdQhMAegdAJQg7AVgxAHQh8AVh2AbQhTAQhrAAQihAAihg1g");
	this.shape_78.setTransform(30.6,6.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("ADvINQhZgoiShsQgJASghAXIAEAAIAWgBIgWACQAKAEAkAAQAhAGAAAfQAAAmgiAgQgsAshYAAQgYAAiPgrIiLgrIghALQghAMgVAAQhIAAhwgtQhugshohGQhwhJhChOQhKhWAAhGQAAgbATgXQAVgbAgAAQAIAAAcgUIApgcQAHgcAdgQQAbgQAgAAQARAACkALQCkALByAAQCgAADxgbQFEgmDAhCQA7gUBmglIBmgmQAxgXAMgJQABACAEABQDOhmBdhBIAogeQAKgIAIABQAIAAAGAGQAJAKAAAPQAAArhMAuQhPAygsAeIgnAZQgiASg1AXIgsASQAABBgRBBIgRBCQA1BiAEAQQAWBSAAAyQAACMheCHQhrCaiZAAQiFAAhzg1g");
	this.shape_79.setTransform(26.1,-2.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("Ao5ITQjWgyhphTQhphThCiCQhCiBAAiaQAAgoAqgJQAegHCHAAQHAgBHwg9QCFgRDfg6QDzg+CFg7IC+hbQCShGAdgIQADAKAAAKQAAAZgpAaQgQAKhAAhQgxAZAAAGIAGAjQAHAnAEAcIADBMQAABpggA8QgfA5g/ATIAtBHQAoBDgBARQAYgNArgaQAigUANAAQAaAAAZARQglA3g3ArIguAgQi8Bcl3CEQl4CEi7AAIgCAAQi9AAjVgzgAlPH4QAjADAYAAQBAAABCgIQA+gICIgYQhjAIhOARQg8ANhQAAQgiAAhbgJQAMAFArADg");
	this.shape_80.setTransform(28.8,4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AmWJJIikgmQgxgJgygQQhCgVgxgbQjMhvhsjTQhcixAAi/QAAgUAYgSQATgPAHAAQAXAAD4AKQD5AJCLAAQD8AAEeggQFYgmDXhDQCOgsC0hPQC0hPBCgVQADAMAAAKQAAAagnAZQgNAIg8AeQguAWAAAGIAaDXQgBBYgdA6QglBGhMAQQAaAzAuBDQAaAngCAaIAGAAQADAAAkgUQAkgUALAAQAQAAAlAXQgWA5giAeIgMAIQgMAKgPAGIgGACQgtAVhbAoQi8BRixA4QnwCekEAAQhUAAh3gagAlrH4QA5AKA6gBIi8gZIBJAQgAAoHoQgyAHgLADQAUgCBigPIg5AHgAr+F+IAUAHIgRgNg");
	this.shape_81.setTransform(20.2,4.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AwEFnQAAgaBbhqQA+hIAngnQAdgeCIhRQB/hJBNglQD0h1EwhOQE+hSDsAAQDdAABiAcQBLAUAAAkQAAAQgYASQgYASgWAAIgIgBIgJgCIgOAAQgFAAgggIQgogLgcgGQgQgDhlgKIhigKQlEAAmgCPQl/CEi1CRQg0ArgyA3QgbAfgsA0QgjAogcARQgiAWgsAAQgCAAgQgYg");
	this.shape_82.setTransform(36.3,-1.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AlFGxQiGgJhugUQgYgEhngoQhngngSgMQhfg9gfgmQgRgVAAgbQAAg5CWhwQC3iMDUhDQBUghA3gUICVg6QBBgXDBgnQD7gyCaAAQCtAACFAzQB3AtAAArQAAAUgmAAQgMAAgkgLQgzgPgkgIQiYghjhAAIiTAPIAACRQAACGACBVQADBYAaAVQAbAWAeBQQAmgQAfAAQAZAAASAaQidBNhnAkQjJBGi2AAQhDAAhPgFg");
	this.shape_83.setTransform(44.5,11.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("Aq6HGQhsgngBhVQABigBmipQC0kmGziQQBlgmBzgPQBUgLDMAHQDLAGBdA2QBdA3AEA1QhNgdhkgbQjEg1iwADQAEA1gGE3QAACRApDCQAagUAOgHQAigVAdABQgCAtgsAvQguAyhUAnQjFBdkzAAQkoAAh7gsg");
	this.shape_84.setTransform(45,30.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AklKDQiqgUhbhkQhahkgeh2Qgeh2gDhNQgDhNAEizQAEi1C4ihQC4igGEAAQByAACrAtQCgAqBFAqQBGAqAoAnQAgAfAAAPQAAAHgKAIQgKAIgPAAQgPAAgVgPIhYhCQg8gqiDgnQiYgtiHAAIhMAAQAAAOgMCIQgLCCAABLQAADkAnCsQApCvBYCGQAKgKATgHQAVgGADAIQhIB4h7AjQhPAVhiAAQg3AAg9gGg");
	this.shape_85.setTransform(60.7,44.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AmLILQhLhWguhhQgshZABg4QAAiIAtiZQAxipBZiKQDflXFhAAQC2AABjCFQBQBrAACMQAAA8gbBKQgNAkguBjQhUC2AAB+QAAAhAKBVQAKBWAAArQAAB2hzBVQhvBSiQAAQjxAAjDjeg");
	this.shape_86.setTransform(56.5,27.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhOIrQhJgrg+hKQigi+AAkYQAAktC4iOQB8hgCSAAQBmAABXBAQBlBLAAB2QAAAzgSByQgTBzAAA1IAUCCQAUCIAAAhQAABVhEBOQg6AygcALQiGAehPAAQg5AAgcgRg");
	this.shape_87.setTransform(65.8,14.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ag9EzQhrhGhYi2IgNhIQAAimBEhXQA8hMBkAAQB9AABBBgQAqA+AAA3QAAATgKA4QgKA4AAATIAyBUQAxBUAAAWQAAA0hIAuQhEAqhAAAQhCAAg9gog");
	this.shape_88.setTransform(73.5,-7.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgmEcIhphNQihhxiEAAQijAAiNBGQhHAkgpAjQgKAAgJgMQgDgDgKgPIAAADQgFgJAAgIQAAgwBlhQQCoiEF7iGQF3h0DrAAQB2AAByAcQChAnAPACQA+AJAdAUQAWAPAAASIgBAMIgCAKIh0gNQgygFgfAAQhaAAheAVQhfAWicA4QFWBPAABdQAAAFgGAFQgFAFgHAAQgUAAgpgSIhYgoQiHg4h8AAQhUAAheAYQhCASiBAyQBaBAB1BHQBJAwAAAhQAAALgNAGQgMAHgTAAQgXAAgxgkgAILjrQAfgCAagGIgKgBg");
	this.shape_89.setTransform(48.5,7.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AqbGHQijhOAAhlQAAgpAahOQAbhNAzhTQA0hUBfhGQBfhGBugvQCuhLCXgeQBmgUBoAAQDHAADxBaQBoAnBAAoQBCAqAAAeQAAATgJAIQgGAFgIAAQgDAAg0geQhDgog9gcQjUhijdAAIhqACQAECkgGAmQAsAtAZAnQAnA8AKA/QALBJAXAlIAwBQQBLg3AYgEQAKAAAHAFQAHAHABAKQgBAVhEAuQhHAwhpAvQkQB8jvAAQimAAiZhJg");
	this.shape_90.setTransform(48.6,24.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AqKGjQi7h5AAikQAAgnAkhrQAtiGA2g7QCXilD+hbQDPhLCxAAQDkAAELBmQBxArBGAuQBJAwAAAiQAAAigUAAQgKAAgygkQhFgwg4gdQjVhxkWAAIg+AAIgGDIQAAAJAUAxQAeBMAVA8QARA0AQCjQACA4ACAJQAGAkAXAZQAPAPAQAkQAQAiABAOQBJgYBDglQA2gdAEAAQAIAAAGAEQALAGAAAPQAAATg6AkQg/AmheAkQj1Bej3AAQjxAAi4h2g");
	this.shape_91.setTransform(47.9,28.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AkZKEQiogChniKQhniKgXheQgXhfgGhFQgHhGANi6QAMi8CliOQCkiOEKgSQEHgTCrAtQCgArBFAqQBGAqAoAnQAgAfAAAOQAAAIgKAHQgKAJgPAAQgSAAgTgOIhXhDQgsgkikgvQjEg5iCANIgLDpQgIDnAAAbQAADaA7CuQAUA6AcA3IAlBEQAKgKATgGQAVgHADAIQhtB8hkAeQhdAbiVAAIgagBg");
	this.shape_92.setTransform(60.6,44.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AsoGxQjqhfAAi1QAAiaEMh8QCchKEchJQBRgWBjgVQBkgWBggQQBigRHrhDQDggdBkgVQBlgWgRAGQgSAGAQABQgBABAHAEQgHAMgyAdQg0AegaAEIAGA6IABAoQABDRh2AkQApBHAMAcQAKAZAKAuIAHgIIAAAPQARgEAeAIQAiAJAAARQABAYgUACQgagDgOAAQgCAAiQA1Qi2BDidAyQoXCqlIAAQi/AAiphEg");
	this.shape_93.setTransform(35,8.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[]},1).to({state:[{t:this.shape_82}]},1).to({state:[]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},2).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_93}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.MEL3QHATcopy = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB13D").s().p("AjnH8QgWgTAAhPQAAgiAUhIQAZheAuhqQCBkrDwkXIAvg2QgnA5gSAVQhMBbg6CSQg5COAABcQAABIBEA2QAiAaAyAeIglAqQhwCDAAA0QAAAHAPAWIAtBBQhiADhTAEQhgAAgXgVg");
	this.shape.setTransform(33.6,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282A2E").s().p("AktCtIgCgHQAghABaAPQCVAZApgpIAbgWIAZAAQGIAADLiMQAngbBIhHQASgQAOgLQARAVgBAPQABAigzA1Qg7A8hfAzQkACLlrAAQiNAAiYgOgAsvBqQAVgVAVgTIA7gzIAPgNIA/ARQgcAVgaAXQgLAJgBANQgjAJgcATIgygHg");
	this.shape_1.setTransform(149.7,134.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B9").s().p("Ag4BiQgmgjgKgXQgkhLCRh2IBrCrIgrAtQgjAmAAADQAAACgoAwQgKgSgogmg");
	this.shape_2.setTransform(53.9,136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#282A2E").s().p("Ah3AwQAVgWAVgTIA7gxIAPgMIA9AQQgcAVgaAWQgJAJgBANQgjAJgcATIgygHgAB4ACIAAAAIgBAAIABAAg");
	this.shape_3.setTransform(80.1,140.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D3033").s().p("AkEGVIgCgHQAghABaAPQCTAZAqgpIAbgWIAVgRIAEgHQApg7gvg5QgggqhegnQi3hOkYCtQgMAHgDANQgiAIgfAWIgBAAIgVAQIg/gRIAvgmIAdgXQCJhmAJAAQAFAAAPgIQAcgMAhgNQBlglBfgeIDChBQA0gRCigVQCZgVBLgCQAXgCArgBIA7gBQAWABCMCBQA4AwASAVIADAEQAQAUAAAQQAAAigzA1Qg7A8hfA0QkACLltABQiKgBiYgNgAsSClQgSgtgzhPQAlghAqgfQA3gpArgZIApBPQAhA9AQAXQgiAWgcAbQgXAXgTAIIACAEIhLBHQgLgmgKgagAlckAIB3goQBxgmANgEIAcBbQAWBLAEALIhoAgQAFgCgJAAQgFAAgGAFQgFAFgFgBQgMAAgXANQgkASgiAMQg6ifgHgSgAERlFQgIhDgKgXQCDAAAAgDIAeAAIABACIAeCvIiKALIgVADIgPhig");
	this.shape_4.setTransform(145.6,111.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ao8K0QhIgygfhJIAAgBQgWgzAAhBIAAgBIAAgBQABgeAEghQARhwAshtIACgDIAqg6IAHgGQAkgaA1gCIAAAAQAIAAAHADIAAAAQArAQAWAgIAEAIQAVAmAQBWIAAAAQAPBXgbAtIAAABQgjAyg9ADIAAAAQhAAFgOg8IAAgBQgDgMABgQIAAAAQgKhiAAhYQgOAFgGAMQgnBPgCBZQAAAYAFAVQAbB3B7gJIABAAQBcgGA2hKQBegRAyhIQANgSAJgXQAOggAGgiQAZgoAdgYIABAAIALgIIAJAAQCUALAjAAIANAAQgCAZgdAaQgvArhaA7IAAAAQhlBBgyBTIgCAEIgBAAQgsBLgiAqIAAAAQgfAmgNAMQgNALgVAMQgHAFgEAHQgIABgHADQghASgvAQIAAAAQgQAGgQAAQgpAAgtgggAktDyIAAAAQgLg9gOgoQgNglgOgVIgHgKQghgqg6gWIgCgEIAbgSIAAAAQAVgPAZgFQAWgFAYADIABAAQAKABAIAFIABAAIAKAHQA7AnASBKIABAEIABAEIABADIAHAbIAAABQAEANACAOIACA1IgBAGIAAAAIAAAFQgEAbgKAYQgYA1gwAXQAFgugKg8gAjDgKQgfgwg0gfIgFgKQDGhnCFA0QBKAeAbAfQAMAOgIAQIgoAhQgfAThngSQhWgOg1AgQgMAHgLAJIgMgTgAn9mvIDYhkQAkBaAQAiIATAmQiMA/AAgBIg4AjQhJiBgSgegAA7qoQA/gSAbgGQBQgQBPAAIAhDBQhBAFg+APIhjAYQgsitgMgYgAJIrSQAcgFAmAbQAwAjAABAIgCAYQgCARgDAHQgQgBggABQghABAAADQgUiUgGgZg");
	this.shape_5.setTransform(134.8,142.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EFF749").s().p("AwNKlQgWgUAAhOQAAgiAUhIQAZheAuhqQCBkrDykXIAvg2QCciuBqhKQCAhZCDAAQCCgBD5BXQCFAuC8BNQAOAGBVAbQBXAgBIAyQBHAyAgAwQAfAvgEAVQgEAVgbAvQgsBOgWAzIgCABIgBgDQgBACgBALIgBAGQAAghgCgGIgFgFQgQg/hIgkQhXgsijAAQimAAlHBtQlcByjFCIQh0BQhnBwIglAqQhwCDAAA0QAAAHAPAWIAtBAQhkAEhTAEQhggBgXgUg");
	this.shape_6.setTransform(114.2,79.1);

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AnGQmQhSg5gmhSIgHgOIAAAAIgFgNIgGgmQgShrACgCQACgcAEgfIAAAAIAGgkQAThmAphjQANggASgZIgtgHQgNAAggA1QgeA0gRAAQgOAAhLg0QgtAAgOADIgPAIQgVAMiQAAQhiAAgwgeQhHgsAAh2QgBieB1jvQBvjlCyjiQC2joC5iNQDLibCXAAQBUAADTBKQByAoC/BJQBIAYBfAnQBfAmCMBTQCNBSABCNQgBAxhHBwQhIBxAAAkQAAASAKAMQAGAGAEADQABAKAjAdIBPBAQByBcABAyQgBBKhPBLQhLBHiFA7Qj7BukhAOQABA2g4AzQg0AuhiA/IAAAAQhXA4grBIIAAAAQgiA9geApIgTAYIAAABQgmAugPANIgBABQgQANgZAPQgIAFgIAAQgFAJgJAEQgmAUgzASIAAAAQgcALgdAAQg8AAhCgugAOKlfIgEgEIABADIADABg");
	this.shape_7.setTransform(119,111);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,237.8,221.8);


(lib.MEL3QHAT = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ACB13D").s().p("AjnH8QgWgTAAhPQAAgiAUhIQAZheAuhqQCBkrDwkXIAvg2QgnA5gSAVQhMBbg6CSQg5COAABcQAABIBEA2QAiAaAyAeIglAqQhwCDAAA0QAAAHAPAWIAtBBQhiADhTAEQhgAAgXgVg");
	this.shape.setTransform(33.6,95.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#282A2E").s().p("Al5ClQhMgJlqgyQAVgVAVgTIA7gzIAPgNQA/ASBGANQD5AuF6AAQGIAADLiMQAngbBIhHQASgQAOgLQARAVgBAPQABAigzA1Qg7A8hfAzQkACLlrAAQiwAAjBgWg");
	this.shape_1.setTransform(149.7,134.8);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B9").s().p("Ag4BiQgmgjgKgXQgkhLCRh2IBrCrIgrAtQgjAmAAADQAAACgoAwQgKgSgogmg");
	this.shape_2.setTransform(53.9,136.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2D3033").s().p("AlRGNQhMgJlpgyQAUgVAVgUIA8gzIAOgMIAvgmIAdgXQCJhmAJAAQAFAAAPgIQAcgMAhgNQBlglBfgeIDChBQA0gRCigVQCZgVBLgCQAXgCArgBIA7gBQAWABCMCBQA4AwASAVIADAEQAQAUAAAQQAAAigzA1Qg7A8hfA0QkACLltABQitgBjCgVgAsSClQgSgtgzhPQAlghAqgfQA3gpArgZIApBPQAhA9AQAXQgiAWgcAbQgXAXgTAIIACAEIhLBHQgLgmgKgagAlckAIB3goQBxgmANgEIAcBbQAWBLAEALIhoAgQAFgCgJAAQgFAAgGAFQgFAFgFgBQgMAAgXANQgkASgiAMQg6ifgHgSgAERlFQgIhDgKgXQCDAAAAgDIAeAAIABACIAeCvIiKALIgVADIgPhig");
	this.shape_3.setTransform(145.6,111.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ApbBCIDYhiQAkBYAQAiIATAmQiMA/AAgBIg4AjQhJiBgSgegAghi1QA9gSAbgGQBQgQBPAAIAiDBQhCAFg+APIhjAWQgqirgMgYgAHqjfQAcgFAmAbQAwAjAABAIgCAYQgCARgDAHQgQgBggABQghABAAADQgUiUgGgZg");
	this.shape_4.setTransform(144.2,92.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EFF749").s().p("AwNKlQgWgUAAhOQAAgiAUhIQAZheAuhqQCBkrDykXIAvg2QCciuBqhKQCAhZCDAAQCCgBD5BXQCFAuC8BNQAOAGBVAbQBXAgBIAyQBHAyAgAwQAfAvgEAVQgEAVgbAvQgsBOgWAzIgCABIgBgDQgBACgBALIgBAGQAAghgCgGIgFgFQgQg/hIgkQhXgsijAAQimAAlHBtQlcByjFCIQh0BQhnBwIglAqQhwCDAAA0QAAAHAPAWIAtBAQhkAEhTAEQhggBgXgUg");
	this.shape_5.setTransform(114.2,79.1);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ArbLtQgtAAgOADIgPAIQgVAMiQAAQhiAAgwgeQhHgsAAh2QgBieB1jxQBvjjCyjiQC2joC5iNQDLibCXAAQBUAADTBKQByAoC/BJQBIAYBfAmQBfAnCMBTQCNBSABCNQgBAxhHBwQhIBvAAAkQAAASAKAMQAGAGAEADQABAKAjAdIBPBAQByBeABAyQgBBKhPBLQhLBHiFA7QkfB+lSAAQgjAAiWgLQiYgLhogKQhJgIiegeQiSgbgIAAQgNAAggA1QgeA0gRAAQgOAAhLg0gAOKgsIgEgEIABADIADABg");
	this.shape_6.setTransform(119,80.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,237.8,160.4);


(lib.MEL3QHAIRTOP = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D9F2F2").s().p("AkwFCQgcgEgPgPQgtgrgOgRQgQgTAAgRQABgQAtgaQAtgZAAgUQgOgWgPgaQgdg1AAgjQAAg3BmgLQA+gGAHgCQAggHABgSQAAgPgKglIgKgmQAAgzAigiQAighA5AAQAqAAAmAjQAjAiAVA0QAVgeA6gNQAegFAagBQAzAAAWAmQAQAbAAAoQAAAVAHAIIBaBFQAUAPAOAWQALAPAAAGIgpBiQgFASgUAeQgfAwgoAZQhKAwiSAYQiHAXi+AAQggAAgMgCg");
	this.shape.setTransform(47.1,38.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AlBF1QgmgJghgYQgogcgZg3IgSgyQAAgaARgZQATgdAfgMQgVgSgMg2QgIgmAAgSQAAg/AqgkQAqglBNAAIAeACQgIguAAgKQAAhPArgwQAtgyBQAAQBkAABHBpQAYgNBXgJQBFAAApAfQAiAbAAAiQAAAegOAaQBhA8AeAbQAjAiAAAlQAAAVgbAqQgxBMguBfQgHAPgtATIhdAkQhOAfh4ATQh2ASh/AAQg1AAgigIg");
	this.shape_1.setTransform(47.6,38.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,95.3,76.4);


(lib.MEL3QHAIRBACK2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92A3A3").s().p("AGyGdIAXgsQAXgrAAgQQAAgJgig+QAAgHADgGQADgEADgBQAXACATAhQASAeAAAbQAAApgNASIg2A3QgGgEgIgKgACnFmQADgigEgNQgNgogwgPIgfgMQgNgGAAgLQAAgGADgEIADgEQA+gEApAgQAnAgAAAvQAAAegHAPQgHAQgQAAQgNAAABgXgAFhAAQgCgEAAgKQAAgBAdgcQAdgfAAgTQAAgWgcgcQghgggsgCIgBgMQAgggA4AnQA3AnAAA0QAAAhgYAfQgYAcgcAAIgRgBgAoAiIIgCgNQAAgiAjggQAsgnBLAAQAnAAASAPQANAMAAARQAAAJgFAHQgFAIgIAAQgCAAg6gaQg8AAgcAsIgPAfQgHAOgHgBQgWAAgFgMgACjlMIgPgYQgYgjguAAQgfAAgdAMIgVAKQgOAAgDgDQgCgDAAgLQAAgLAUgMQAbgRA1AAQA5AAAfAUQAjAVAAArQAAAVgSAAQgMAAgIgLg");
	this.shape.setTransform(87.2,72.1);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F2F2").s().p("ADLMCQh6hcgggVIhshGQhCgniaiJQiLh/gDAAQhVhZhGhZQg/hSgkg8QgKgSgig3Qgjg3gBAAQgDAAgLgkQgMgjAAgLQAAgsAbhIQAYhCARgSQA4g+BDgPQAVgEBXAAQAUAAAHgFQAGgFAAgOQAAgDgIgQIgIgPQAAhRA+guQAvgiAxAAQBhAAAmAkQAJAJAOAQQANALARAAQAQAAASgcIApg+QBFhbCGAAQBMAAAqA0QAVAaAVA5QAJAbADAgQAFAUAWAAQANAAAggIQAhgIAKAAQBQAAA2AmQA4AnAABDQAAAqgrAvQgqAvAAAKQAAANAkAXIBPAzQB0BOAABQQAABfhiBbQgJAJg6AyQgfAaAAAKQAAAMBFBKQBFBKAAAkQgBAxhQAqQhFAlgwAAQgIAAgGAGQgGAFAAAIQAAABAtBFQArBLAAAiQAABShMAvQhLAuh+AAIhyhWg");
	this.shape_1.setTransform(83.6,91.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADjN4QhRhChphEQidhphHg2QhYhDh4hzQhfhbgtg0Qg1g+hliPQhviaghhpQgMgnAAg3QAAhoAig5QBGh0DPgiQgKhfBJg6QBHg5B8AAQAnAAAtANQApANAKAMQAkhDBbgqQBSgnBXAAQB/AAA7BIQAuA4gEBPIAAAAIAAAAQAAgDAbgCQAVgCANAAQBzAABDAzQBHA4AABmQAAAbgNAkQgRAsgbAeQDdBngQC3QgGBMgyBGQgwBFhKAtQBHBMAWAgQAXAgAAAdQAAA1goA5Qg3BPhkAKQAlAlARA8QAKAmAAAhQAABchiA9QheA6iAAAQg9AAgsggg");
	this.shape_2.setTransform(84.2,91.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,169.4,184.1);


(lib.MEL3QHAIRBACK1 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92A3A3").s().p("ABsHzQgigoAAgdQAAgkANgVQAMAHAUAnIAYAxQALAOAzAOQAyANAGAHQgFAKgJAGQgSALgoAAQgqAAgngsgAjjBkQgUgiAAgpQAAgrAKgNQAKgNAiABQAAAFgIAdQgIAbAAAJQAAAgAvAgQAwAgAAALQAAAKgBgBQgXADgKAAQg0AAgbgugAC0ifQAAgWAmgqQAtgyAzgBQAOAAAHAKQAFAHgBAKQhlAvgMAsQgDALAAANQgCAIgQAAQgZAAAAgjgAmrivQgVgUAAgvQAAgdAZgfQAZgfAYAAQAKAAABACQADANAAAGIgYAWQgYAaAAAVQAAAgAMAKQAQAOAFANIgDAOIgIABQgZAAgQgQgAh2lwIgCgUQgCgiA5gjQA4gjAsAAQAYAAAZANQAUAKAOAOIgCACIhHAIQgwAGgRAMIg1ArQgXASgIAAIgOgCgAFrn1Ig1ALQgYAGAAgbQAAggA3AAQAnAAAgAOQAlAOAAAXQAAANgPAAQg0gXgTABg");
	this.shape.setTransform(73.4,89.4);

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0B2B4").s().p("ABPMbQhEAAAGgIQgygHgRgbQgOgXgEgRIgCgFIgKgcIABAAQgKgFgTgEQg2gKgegHQh7geAAhMIAHggQAHgdABAAQAFAAANg8QAAgJgHgGQgGgFgDAAIgTALQhWAAg4g1QgqgpAAgiQAAgLAWgiQAWghAAgZQAAgOgjgNIAAgCIgCABIAAAAIgEgCIgBAAIgBAAQg8gSgigMQiKgxAAhWQAAgaAigsQAhgsAAgSQAAgKgnguQgsg0gFgJQgFgJgIgYQgJgeAAgSQAAhjBwgTQAmgHA7ACIBVADQAOAAAJgSIAFgSQAAgGgGgaQgGgaAAgIIAAgCIAAgFIAAgFIABgBQADgYAOgUIABgBIAFgHIAVgTQAtggBCAAQAOAAAkALQAkALAOAAQAOAAAJgWIAUgwQAmhGBxAAQAJAAAJACQhcBCgNAMQgUAUgFApQgEApgCACQgEAEhaAIQhRAIgLAgQgBAFgBAdQAAAYgJAPQgLATg8AZQgpAJg7ADIhcADQheAFAAArQAAA+BVAvIA6AgQAaARAAASQAAAagjAjQgjAjAAAYQAAAsA9AqQBCAwBUAAQAFAAAHgFQAGgFAFAAQASAAASAWQAIAJAYAmQArBFAsgBQgGARgPBKQAAAsAUAtQAdA+A5ASQAzAQBBAHQAJADAlAfQAjAeAKADQAIACAgADQAhAGANARQAUAYA8ArQBWAwBDATQBIAVBXAAQA+AAA6gVQA6gVAJAAQAJAAAJADIgXASQhuBPjBAAQgsAAghgHQgegLgXgMIgCADQgbgMgFAAQgfAQgoAQQhQAgguAAg");
	this.shape_1.setTransform(83.2,84.7);

	// Layer 6
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(41,44,51,0.322)").s().p("AL4LdIAcgSQgYAqhUAOQArgPAlgXgAqBoxIBzgKIACARIgigFIgkgDQhxAAhEAwIgMAJQAPgpCDgPgAkor8IgDAAQAVgGAUAAQAFAAAHADIgCAKQgSgEgegDg");
	this.shape_2.setTransform(84.3,88);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9F2F2").s().p("AhrMbQhFAAAGgIQg0gHgRgbQgOgXgEgRIgCgFIgJgcIAAAAQgJgFgUgEQg2gKgegHQh6geAAhMIAGggQAHgdABAAQAGAAAMg8QAAgJgHgGQgFgFgDAAIgUALQhWAAg3g1QgrgpAAgiQAAgLAXgiQAVghAAgZQAAgOgjgNIgBgBIgBAAIAAAAIgEgCIgBAAIgBAAQg8gSgigMQiKgxAAhWQAAgaAigsQAhgsABgSQAAgKgoguQgsg0gFgJQgFgJgHgYQgJgeAAgSQAAhjBvgTQAngHA6ACIBVADQAPAAAIgSIAFgSQAAgGgFgaQgHgaAAgIIAAgCIAAgFIAAgFIABgBQADgYAOgUIABgBIAGgHIAUgTQAtggBCAAQAOAAAkALQAlALAOAAQANAAAJgWIAUgwQAmhGBxAAQAKAAAKACQAqAHA3AlQAzAiAfAjQANARANAfQAGAMAZAAQAKAAAJgNIAVgaQAngoBcAAQBZAAAwA6QANAPASAZQAQASARAAQAJAAAQgNQAXgUA/gSQA2gQA9ASIAHACIA8AbIAAABQAFAHALAUIAPAhQASArgEAZQgCANgKAPIgNATIgQARQgkAnAAAFQAAAOAsASQBSAiAOAIQCLBIAACLQABBCgmBQQgtBfhKA6QgxAlhwAdQgtALgRAJQgYANAAAXQAAAQAOAWIAdAsQArBEABBLQAAA3g9A0IgXASQhuBPjBAAQgrAAgigHQgVgFgRgHIgRgIQgbgMgEAAQggAQgoAQQhOAgguAAg");
	this.shape_3.setTransform(102.1,84.7);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjsMwQgsgeglgwQgMgRgdgBQgogBgSgHIgWgJIgMgHQgrgbgjg2Qgig3gBgTQAPg9AGgQQhuAYg9hcQgUgdgLglIgJggQARhIANgWQhlAChPhCQhQhDAAhXQAAgaASgkQATglAWgPQgtgVgiheQgZhHAAghQABhTA7gyIAMgJQBEgwByAAIAjAEIAiAFIgCgRQgIhLArg3QA2hDBrAAQAJAAAXADIADAAQAdADASAEIACgKQANg4AwgdQAwgeBSAAQBUAABRAiQBVAlAqBBQASgMAvgNQA6gRAyAAQBPAAA5AfQAvAZAVAlIABAAQAVgKBBgRQA/gQATAAQB2AAA0BIQAtBAAACEIgMAYIgRAhQCTBNAyBFQAsA5gBBbQABCqhuCHQh0CPitAGQAlAkAVA2QAWAzAAAwQgBB1hmBLIgcASQglAWgrAPQhbAghzAAQgfAAgugFIgsgGQgZgFgfgPIgcgNQgJAAgYAWQgaAZgYAJQgSAHgsAGQgjAFgKAAQhHAAg/gqg");
	this.shape_4.setTransform(102.4,85.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.4,205.8,171.8);


(lib.MEL3QEYER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B9").s().p("ABsC/IgCAAQiCAAhAhYQgZgjgKgkQgGgVAAgTIAAgDQAAhYA+gyQAlgdAtgJQAMgCANgBQgOANgPAPQhFBMAABLQAABOBvBMQAVAOA4AhIgKABIgKAAIgCAAg");
	this.shape.setTransform(18,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B9").s().p("ABsBsIgCAAQiCAAhAhYQgZghgKgkQgGgVAAgVIAAgDIAAgMIBHgBIAAANQAABQBvBKQAVAOA4AhIgKABIgKAAIgCAAg");
	this.shape_1.setTransform(18,32.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B9").s().p("AgrCEQgZgjgKgkQgGgVAAgVIAAgDQAAhWA+gyQAjgdAvgJQAMgCANgBQgOANgPAPQhFBMAABJQAAA+BCA7QghAIgYAMIgMAFQgPgNgMgRg");
	this.shape_2.setTransform(13.5,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAnC/IgCAAQiCAAhAhYQgZgjgKgkQgGgVAAgTIAAgDQAAhYA+gxQAlgeAvgJQAMgCANgBQAOgBANABQBRAFA4A2QA+A+AABjQAAAqggAxIgNASIgCACIgHAIQgjAigxAHIAAAAIgKABIgKAAIgCAAg");
	this.shape_3.setTransform(24.9,24.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAnB6IgCAAQiCAAhAhYQgZgigKgjQgGgVAAgVIAAgDIAAgMIBHgBQBugEBagRQBFgMA3AIQACAXAAA6QAAAoggAxIgNASIgCACIgHAIQgjAigxAHIAAAAIgKABIgKAAIgCAAg");
	this.shape_4.setTransform(24.9,31.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AidCEQgZgjgKgkQgGgVAAgVIAAgDQAAhWA+gxQAlgeAvgJQAMgCANgBQAOgBANABQBRAFA4A2QA+A+AABjQAAAagNAdIgBAAQiYAAhcAXQghAJgaALIgMAFQgPgNgMgRg");
	this.shape_5.setTransform(24.9,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai1CfQgfgjgTgrQgQgjAAgXQAAiFBOhKQAcgbAhgPIALgFQAtgRA0ADQAcABAZAHQBCAQAzAzQBOBNAAB4QAABAgpA+QgYAmgkAWQgxAfhFACIAHAAIgXABQhzAAhPhYg");
	this.shape_6.setTransform(24.8,24.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A9985").s().p("Ah2AnQgLgHgFgIQgCgFAAgDQAAgLAHgFQAFgDAIAAQALAAAWAJQAXALA8AAQAtgBAngjQATgUAUgWQAFACAFALQAEALAAAFQAAAWgnAgQgtAoguAAQhZAAgkgXg");
	this.shape_7.setTransform(35.9,55.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiNByQhWgCgFgSQAAgDAfg8QAig/ARgcIAKAFQgIBAgRAoQAQAABagNQBbgMASgFQBGgSAwg4QAjg3AIgCQAMgDABAFIAHARQAJAhgpA4QgxBDhYAYQhlAbhdAAIgJAAg");
	this.shape_8.setTransform(28.9,40);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ai1CfQgfgjgTgrQgQgjAAgXQAAiFBOhKQAcgbAhgPIALgFQAtgRA0ADQAcABAZAHQBCAQAzAzQBOBNAAB4QAABAgpA+QgYAmgkAWQgxAfhFACIAHAAIgXABQhzAAhPhYgAgbi/QgNAAgMADQgvAIgkAeQgnAfgPAtQAYgIApgGIAQgCQBEgKBJAAQAYAAAhgHQAhgHANAAIASABQgIgKgJgJQg3g3hSgEIgNgBIgOABg");
	this.shape_9.setTransform(24.8,24.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjVBeQgGgDgDgFQgKgXAMgWIBNiIIAJAEIgYBmQBRgmB2gJQB5gIBBBGQgKgGhTgHQhlgIhSAfQhTAfgUALQgUAKgbAIIgCAAQgGAAgGgCg");
	this.shape_10.setTransform(28.2,43.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjaDnQAAgeAXgYIgFgFQgfgjgTgrQgQgjAAgXQAAiFBOhKQAcgbAhgPIALgFQAtgRA2ADQAaABAZAHQBCAQAzAzQBOBNAAB4QAAAggKAfQAYAHAMAOQAMAOAAATIgBADQgkgMhZgBQhZAAh1AgQh3AggiAXIAAgDg");
	this.shape_11.setTransform(26.7,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A9985").s().p("AinAWQAHgaBYgZQBVgaBHAFQBGAFAMAQQAHAJAAAKIAAAHIABABIAAAOIgKgBQgHAFgMgBQgXgHgNgBQiKgLhfA1IgBgGIgLAHIglACQgCgDAIgbg");
	this.shape_12.setTransform(32.6,50);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.7,62);


(lib.MEL3QEYEL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B9").s().p("AhhDRQgNgMgKgOQgVgWgMgdIABgBIgFgKQgihNgBhTQAcjnDYgIQhXAggnBSQgcA6AABMQAACGCmBfQAsAZBIAeIANAGQgyATgzAAQheAAhfhGg");
	this.shape.setTransform(26.1,33.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B7B7B9").s().p("AhjBPQgMgMgLgOQgUgWgMgdIAAgBIgEgIQgbg9gGhBIAFgBQAWgDA9gLQAHCACfBZQAsAZBIAeIANAGQgyATgzAAQheAAhghGg");
	this.shape_1.setTransform(26.2,46.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B9").s().p("AgaDsQglghgUguIgEgIQgihNgBhTQAdjnDYgHQhZAfgmBSQgbA7AABLQAAB4CGBaQgkALgmAQIgdAMIgHADIgTgOg");
	this.shape_2.setTransform(19,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai1DRQgMgMgLgOQgUgWgNgdIABgBIgFgKQgihNgBhTQAdjnDagIIAAAAIADAAQBGAFBAAjQAZAOAYARIAVAVQBXBeAHA+QAIA7gGAnQgGAngWAsQgPAggdAaIgKAIQgpAbgpAQQgzATgyAAQhfAAhfhGg");
	this.shape_3.setTransform(34.4,33.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai2ByQgMgLgLgOQgUgXgNgdIABAAIgFgLQgag6gHhCIAGAAQAWgDA9gLIAlgHIADgBQBzgWAegIQBDgSCIgHQAjgCAOgGQARAgADAaQAIA+gGAnQgGAkgWAsQgPAggdAaIgKAIQgpAcgpAPQgzATgyAAQhfAAhfhGg");
	this.shape_4.setTransform(34.5,43.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ai0DsQglghgUguIgEgIQgihNgBhTQAdjnDagHIAAAAIADAAQBGAEBAAjQAZAOAYASIAVAUQBXBeAHA+QAIA7gGAnQgEAYgJAaIgRAmQgfgBhpgDQhDgBhaAdQgjALgnAQIgeAMIgIADIgTgOg");
	this.shape_5.setTransform(34.4,31.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiRE0QhRgggzhFQg7hQgDhxQgBgbACgcQAbklEdgGQBIgBBBAgQA4AcAyAxQAvAvAeA6IADABIALAXIADAGIgCACQASAsAIAwQAVB9g+BVQh8CGibAAQhLAAhVghg");
	this.shape_6.setTransform(34.1,34.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A9985").s().p("AiiAfQg2gZAAgTQAAgIAGgGQAHgHAJAAQAEAAA7AXQA8AVBDAAQA9AABcguQApgVAIgDQATgGAAAOQAAAgg1AjQhFAwhoAAQhYAAhBggg");
	this.shape_7.setTransform(36.4,76.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AkGAtQhIgsAAggQgBgEAEgPQAAgEAQAAQALAABBArQBTApBhAAQAaAAB7gMQB7gLAUgEQgkgggig+IALgHQAhAWBCA2QA/AxgBACQABAThwAYQh+AbiVAAQh6AAhZg2g");
	this.shape_8.setTransform(36.9,58.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AiRE0QhRgggzhFQg7hQgDhxQgBgbACgcQAbklEdgGQBIgBBBAfQA4AdAyAxQAvAvAeA6IADABIALAXIADAFIgCADQASAsAIAwQAVB9g+BVQh8CGibAAQhLAAhVghgAkOg5QAggOA8gQQAjgJAugLQDJgwBfAAIAMAAIgeghIgUgVQgYgSgagOQg/gihGgFIgDAAQjTAHgiDYg");
	this.shape_9.setTransform(34.1,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlgBUQAYghBsgmQBsgkBqgFQBogFAyAMQAxAMAXAFIgphTIALgHQBIAzBEA6QAQAPAGAVQgNAKiAgTQh/gThwANQhzANhZAUIhxAag");
	this.shape_10.setTransform(35.3,57.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AjpE/QgJgGADgMQACgLAFgMIgPgMQg3gygZhIQgTg0gCg+QgBgeACgaQAbkkEdgGQBIgCBBAgQA4AcAyAyQAvAuAeA6IADACIALAXIADAFIgCACQASAsAIAvQALBBgLA2IgQAyIALAEQANAFAJAIQAEADACAFIgSARQjZAChyAYQg1ALg1APQg7ARgwAjQgLgBgJgGg");
	this.shape_11.setTransform(35,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A9985").s().p("AjdAhQACgNAMgHQAvgXAzgQQAzgQAzgNQBjgWBmAcQAiAIgIAfQgEADgVgBQgUgChQACQhQAChQAXQhSAZgkASQgLAGgHAAQgTAAgBghg");
	this.shape_12.setTransform(42.6,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_8}]},1).to({state:[{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_7},{t:this.shape_10}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.2,82.4);


(lib.MEL3QBROWR = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#523683").s().p("AlRBVQh8g8AAhOQAAgnAogdQA2gnBsgCQgiAXgeAgQgnAqAAAaQAABUFSAqQBuAOB3AEQBqAFAAgFQAAgFgFAEQgFAEAAgFQAAgCBBgLQBDgLAPAAQAKAAAEABQgGAIglAXQgmAWgMADQilAbgrAAQlNAAilhOg");
	this.shape.setTransform(50.9,22.7);

	// SHADE
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A42B0").s().p("ACYCFQh3gEhvgOQlRgqAAhVQAAgZAngqQAeggAhgXQF1AJDCBGQCiA3AABRQAAAHgCAJQgCAIgDADQgEgCgKAAQgPAAhDAMQhCALAAABQAAAFAFgDQAFgEAAAFQAAACgdAAIhMgCg");
	this.shape_1.setTransform(56.2,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#523683").s().p("AlRBVQh8g8AAhOQAAgnAogdQA2gnBsgCQgiAXgeAgQgnAqAAAaQAABUFSAqQBuAOB3AEQBqAFAAgFQAAgFgFAEQgFAEAAgFQAAgCBBgLQBDgLAPAAQAKAAAEABQgGAIglAXQgmAWgMADQilAbgrAAQlNAAilhOg");
	this.shape_2.setTransform(50.9,22.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AkSCoQjvhFAAiMQAAhRBUgzQBOgvBsAAQD5AADpBFQETBSAAB6QAABihuAoQhQAeiWAAQkJAAi3g1g");
	this.shape_3.setTransform(51.5,22.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,102.9,44.3);


(lib.MEL3QBROWL = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#523683").s().p("AlSDHQgkgFgWgNIgKgNQgGgHgDgIIAAAAIAAgBQgGghA3hQQATgcAigcIgEARQgHAXAAAGQAAAkAFAQQAOAnAsAAQBaAACrhIQBZglBlgwQA0gXA9goQA9gpAsgzIAJgJQgBAwg7A+QhDBEhrA4QhqA7hIAgIgxATQigA7hfAAQgVAAgSgDg");
	this.shape.setTransform(46.8,36.7);

	// shade
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6A42B0").s().p("AlSD7QgkgFgWgNIgGgEIgCACIgBAAIAAAAIgIgQIgCgKIAAAAIgBgBQgFghA3hQQATgcAigeQA/g2Bxg/IAcgUIAIgFQAigTBjgoQBggnAogYQAwgPAogGQA/gFAoAUQAzAZAGA0IABALQgBAwg8A+QhCBChrA6QhrA7hHAgIgxATQigA7hfAAQgVAAgSgDg");
	this.shape_1.setTransform(46.8,31.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(31,33,38,0.322)").s().p("AB0gmIAYgKQgKAKgKAFQgLAHhLAZQg0AWgeALQgkANg3AFQCKgoB1gwg");
	this.shape_2.setTransform(44.1,54.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Am6EPQgcgbAAgdIAAgCQgGgYAFgeQAHgrAoguIAJgKIAUgcQBPhdCfhfQBshAB2gxQBngqAegBIAuAAQBYgGA/AhQBYAvgPBfQgbCokbCCIg4AZQgKALgJAFQgMAGhLAZQgzAZgfALQgkANg3AEIgIACQhwAggSAAQhZAAgqgrg");
	this.shape_3.setTransform(47.5,31.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,62.9);


(lib.mel3Qbody = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F061FF").s().p("AAnGpQhihFg5hzQg3hwAAiAQAAhoAohcQAuhqBXg9IAFgDQA+g2BRgHIABAAIARCXQAEAxAAA5QAACvgsC+QgoCtgsA6g");
	this.shape.setTransform(542.3,441.7);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5D50B3").s().p("ACxKVQjYjDhnjPQhfi/AAjRQAAh3Aeh2QAmiVBViHQgoCVgbCEQggCWAAA5QAADfCtDyQAzBKBXBjQBfBrAPAUQgHASgJAPQgRAdgYAKQgEgBAAgBg");
	this.shape_1.setTransform(506.9,456.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7454B1").s().p("Ai8CZQhVh8AAiCQAAgtAeg7QAphPBFgNQgtBWgOAkQgQAqAAAeQAACUB3BkQBsBcCLAAIB0gMQhEAsgyAQQgrAOg1gBQiVABhjiSg");
	this.shape_2.setTransform(126.5,458);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#454DB9").s().p("AB1BlQgYgCgKABQgBgCgDgVQgEgYgBgWQA7AICOAHQgdAkgeAMQgZAKguAAIgcgDgAj2gLQgcgWAAg9IAGgJICcBUQgMAHgVAHQgcAGgUAAQgjAAgSgMg");
	this.shape_3.setTransform(284.3,569.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4489B8").s().p("AFNF+QgfADg8gSQg/gShGgiIgCgBQAHgHAogIQAogIAggjQA+ASAfAGQgDAtAKAdQAFAPAFAHIAAAGIgDAAgAkdgZQgyhUAAhhQgCgfAMglQAWhBBkgfIABgDIANgBIgBAAIACAAIAAgBIAugGQhbB7Abg6Ig1BrQgCAZgFAMQgEAJAAAXQAABHAzAnQAmAeAegDIBABAQA6A6AHAFIgDASIgDAZIADAhIAFAfIgEAGQi+iShHh0g");
	this.shape_4.setTransform(256.3,543.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#532159").s().p("AiXEFQgzhlABiFQgBimBciMQBZiJCOhAIAHgDQAPgGAOgFIAXBMIABAAIARCXQAFAxAAA5QAACvgsC/QgpCsgsA6IgEgCQgCAPgKAUIgSAbQiHh6g4hwg");
	this.shape_5.setTransform(539.2,440.9);

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5763FF").s().p("EAHFAoPQANg8BeiHQBVh9AHABQAPAAAUBmQADANACAcIACAiQAAAkgIAoQgMA1gVAcQiOgHg6gIgEABsAmHQBdiVBVhlQBQhfAGgNQgCgMAJgeIAEgCQBTAcBbBIIgLAPQhTBJhHCFQgiBAgTAaQggAugrAeIichVgEgBSAi4IgLgFQgegygPgkQAJg5ALgUQAKgVBTh4IADgBQAZAAAyAIQAuAHAXAGIBpAcQALAEABADQgSAShiBjQhNBPg3AtQgRAOgcAEQgMAAgQgFgAnu+qQAAgegngiQgnghg7gVQgTgGgQgOQgcgXABgTIAHgGQAWAGBnAvQBUAmA2AAQA4AAAYgnQAPgWAAgYQAAgkgwgjQgfgWhKghQhRglgYgPQgwgdAAgbQAAgdApABQBLgBBZAzQBYAyA0AAQAZAAAVgVQASgTAAgOQAAgYgPgPQgLgMgfgTQhcg3g4g4QAOgSA1gRQAxgPAfAAQAxAAAbBUQAUA/AABGQAACzhvB/QhaBnhzAeQAJgQAAgNg");
	this.shape_6.setTransform(246.5,314.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56BBFE").s().p("EAGTAoDQAkg0CFjbQA3hbAgAAQATAAAQACIABAfQAAAfgdAtQgQAZgxA+QhiB8gIBCQgfgGg9gSgEABYAlAIhAhCQBNgoBEg/IA+g/QBKg8AjgrQASgWAKAAQAJAAAXALQAXALAAAHQAAASgTArQgXAygcAdIh2B1QhLBRgIA1QgGgFg6g6gAqF+9Qg/hMARiDQAOhhAJgkQAShMAggyQBTiCDUgJQglAIgSAaQgMAQAAAPQAAAlBoA8QBnA8AAATQAAAEgIAHQgIAHgGAAQgkAAhigxQhjgxhMAAQgmAAgWAWQgUAVAAAeQAAAvCYBTIBpA5QAwAbAAAMQAAATgTAMQgSAMgbAAQg5AAhVgqQhVgqgZAAQgZAAgOAQQgNAOAAAXQAAAqBmA4IBGAnQAgAUAAAPQAAAGgJAMQgJAOgHAAQhrAAg8hHg");
	this.shape_7.setTransform(238.6,312.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7762F0").s().p("AAhNGQjXjChnjPQhgjAAAjSQAAh2Afh1QAmiVBViHQgoCVgcCDQgfCWAAA4QAADgCsDyQA2BLBXBjQBcBrAQAUQgIASgIAPQgRAcgYALQgEgBgBgCgABfMBQgQgUhchrQhXhjg2hLQisjyAAjgQAAg4AfiWQAciDAoiVQBiinCkhrQA8gnBogrQADAEgDADQAAAAABAAQAAAAAAgBQABAAAAAAQABgBAAAAQACAAAHANQAiBDAVAPQATAiA9DtIgKABIAYBNIAAgBIARCYQAFAwAAA5QAACvgsC/QgpCtgrA6IgFgCQgBAPgLATIgRAbIAIAFQgyCJhTBqIAAAAgAjjnkIAAAAg");
	this.shape_8.setTransform(521.3,438.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9868ED").s().p("A8uPzQh3hlAAiVQAAgfARgqQANgjAthXQAKgDA+gIIA7gHQCVAABhBLQBcBGAWBzIgCAEIACAFQAUA+gfBiQgdBggqARIhzANQiMAAhuhcgAU/rNQhFhpAAiMQAAgEAVg4QAZg+ALgSQAjAnAMALQDnDdCYBfQAnAZA5AfQAuAbAhAeIAWARQhAA9ijAAQkRAAhzisg");
	this.shape_9.setTransform(301.4,371.5);

	// Layer 3
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(41,44,51,0.322)").s().p("AAHgFIALgMQgDAPgPAKQgJAHgIADIAYgXg");
	this.shape_10.setTransform(159.1,484.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(31,33,38,0.322)").s().p("AgVAZIAqgxQABAVgNANQgLAPgSAAIgBAAg");
	this.shape_11.setTransform(314,580);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#61FFDE").s().p("AAEgCQAAACgDABQgBACgDAAg");
	this.shape_12.setTransform(302.2,529.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AK8F0IADAFIgJAHIgFAEgAq+l/IABgDIAAAJg");
	this.shape_13.setTransform(232.3,491.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#392759").s().p("AjnEMQiVh6ABjLIAQh9QAAgQATgdQAXgiAkgdQBkhQCMAAQCfgBBtBOQBdBDAgBqIABABQAKAcAVCcQAAAWgNAtQgQA7gdAqIgCgBIgQATIgMANIgaAYQhIAygpAQQgsARg7ABQibAAh+hogAE5guIABAGIAAgJg");
	this.shape_14.setTransform(130.6,457.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#232769").s().p("EgA0AmVQiDh/gzhnQgmhOAAhTQAAiNA9hCQAtgxBCAAQDvAAC8BLQBGAcBXAwQAyAcBlBbQBkBcAcA3QAcA3gCA1QgCA1gSBMQgWBZgWAkIgsAzQg9AlgXAJQgiANg8AAQk3AAj0jygEAI/Ag+IAGgDQADAAADgCQACgCAAgEIgDgEgArE/AQhQhFAAiSQAAh7ARgvQASgYAAgRQAgicBohGQBWg6CNgBQCaABBEA/QA/A9AACEQAABCgWBRQgZBegtBNQh1DGi/gBQiEAAhHg9g");
	this.shape_15.setTransform(243.7,318.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2B2357").s().p("AkBI6Qidj6AAkRQAAh0AdiHQAsjKBbh0IB1iTQAxg1BZhCQA3gpBIgdQA2gWAFgLIgFgJQARAMAUAXQAYAdgDARQAiBEAVAPQATAiA9DtIgKABIAYBMIABAAIARCXQAEAxAAA5QAACvgsC/QgoCsgsA6IgFgCQgBAPgLAUIgRAbIAIAFQgyCJhTBqQgHASgJAOQgRAdgYAKQgEAAgBgCQgDAKgOATQgRAYgNAGQi/jGhViFg");
	this.shape_16.setTransform(518,437.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4D3478").s().p("AkDDGQiRh8AAiuQAAgjASg6QAahSAuguIgEgFQAgAAAWAaQAXAagBAkQDoDdCWBdQAmAZA5AfQAuAbAhAeQATAFAYARQAhAWAPAbIghgaQgQAvhWAZQhHAVhWAAQjeAAiWiBg");
	this.shape_17.setTransform(463.5,290.1);

	// Layer 4
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#4EBBA6").s().p("EACfAlwQjligi5j0Qgvg+g5hTQhkiTg3hoQjemohpnBQhZl+AAl0QAAi5AfiiQAciUBmloQAKgkAviHQAihpArh3QBWjmBgjPQBhjVAshdQBKifBChnQCpkFFBjTQiuC8i/EaQkJGChiElQh1FjhRFWQiCIlAAF9QAAJTDOH1QBICuBnCwQA5BiBbCOQBHB1B6CSQCEChBxBhIERDtIBQBEQBLBBAGAGQAhAkB2AsQA7AWA5AQIABAAQnEhmlAjdg");
	this.shape_18.setTransform(119.9,324.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#489ABD").s().p("EAKUAtpQj3hDkMigQmBjnkIlZQhmiPgTgdIgqhDQguhJgcghQgWgWgIgKQgSgWhbjlQgCgGgKgQQgJgQgBAAQgOgTgXgwQgwhfgyiTIg1iyIgHgYQg5k6gUj8QgMihAAjXIATk7QADgRAJhCIAKhKQBOnZCbmKQA+ifAQg2QAPg3DNmWQBWiXAQggQAag4AbgqQBEhrC7i+QCeigDMh3QDviKDygrQgjAkiTCEQkvBxkJEWQhwB0hSB6QhNB0geBbQgFAOicFWQinF0g2CcQiaG+g/ErQg2EBAADZQAABaAHBLQAMBuAuFEIgIhCQBWHjCsGCQC9GlE9FuQDbD8F6C9QFEChDpAaQDoCVAtAgIAAAAg");
	this.shape_19.setTransform(125.6,320.6);

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#57CFFF").s().p("EgBOAwoQhFgJk6gyIgVgEIAAAAIoPiEQj3hDkMigQmDjnkIlZQgpgygPgUQgUgdg8hgIgcgsQgthJgcghQgWgWgIgKQgSgWhbjlQgCgGgKgQQgJgQgBAAQgOgTgXgwQgwhfgziTQgXg/gLgqIgThJIgGgYQg5k6gUj8QgMihAAjXIATk7QAJhLANhSQBOnZCbmKQA+ifAQg2QAPg3DNmWQBWiXAQggQAag4AbgqQBEhrC7i+QCeigDOh3QDviKDygrQBpgTDogWQEAgYCWAAQB1AAC4A8QB8ApBuAzQBuA0B5BeQBCAyCPCAQCcCKCLE/QAtBmApB3QAWA9AVBAIADALQgJgTgEgEQBcE+BfD0QBzEmBtCfQCRDUBzBaQAiAaBEAsQBIAtAsAhQBBAyBlBEQBaA9AnAeQD6DFAyBBQAJALAUAmQASAgAhAlQAQASAcA8QAjBLAdBcQBUEFAAERQAAG9ifF7QilGLlDEgQlVEwntChQoOCrqhAAQi/gGhBgEgEgl1AWtQC9GlE9FuQDbD8F8C9QFEChDpAaQFJA7DVAXQCfARCGAAICSgIQC0gLCqgUQIig+D5h1QC3hVBbgtQCRhIBpg/QA6gjBehJQBuhTAdgnIAAABIAbgdIgIAHIBZhcQBqhwBMhyQD5l3AAn5QAAk5hNjeQhokoj+jEIkujlIixiFQj7ixhtiOQgng0gag1IghhOIhNi9Qg1iDgHgWQh3l6g2iTQg2iWhBh9IiFkFQg5hyggg2QhIh5iCh5QhQhKg2gXQhegohUg2QhKgwjcgwQjlgyijAAQgTAAhKAHQhRAIhUALQj0AejQA+QkvBxkLEWQhwB0hSB6QhNB0geBbQgFAOicFWQinF0g2CcQiaG+g/ErQg2EBAADZQAABaAHBLQAMBuAuFEIgIhCQBWHjCsGCg");
	this.shape_20.setTransform(292.7,321);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EAMOAk3IATgVIAIgHIgbAdgEgMlgk3IABAAIgEADg");
	this.shape_21.setTransform(432.7,310.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#61FFDE").s().p("EgDaAtGQi/gWl4g/IgQgEIACABQnEhnlAjdQjnigi5jzQgvg/g6hTQhkiSg2hpQjemnhpnCQhal9ABl3QAAi3AeiiQAdiUBmlnQAJgkAwiHQAhhqAsh2QBVjnBhjPQBgjVAshdQBLieBChoQCokFFEjTQDHh+FCg8QDbgqCvAAQGRAAFACpQDrB9CCCqIgDACQBsC0A2BPQAXAoCVE8QAmBOAfBrIA7DVQAwCgAfBWQARAuARAmQBjEJAsBUQAaA0A2BTQAgAAAXAaQAWAaAAAkQDnDdCYBfQAnAYA4AgQAuAbAhAeQATAFAZARQAgAVAQAcQBaBIBPBMQBjBfA7BMIgDgFQASAMATAXQAYAdgCARQAiBEAVAPQATAiA9DtIgKABIAXBMIABAAIARCXQAFAxAAA5QAACxgsC/QgpCsgsA6IgEgCQgCAPgKAUIgSAbIAJAFQgyCJhTBqQgIASgIAOQgRAdgZAKQgEAAAAgCQgDAKgPATQgRAYgNAGIADACQhmCGl1DqQlWDXiDAmQkdBSk/A2QlbA8jwAAQicAAjBgXgEgIvAiIIALAFIgLgFgApzfyIAAAAIABgEg");
	this.shape_22.setTransform(293.1,319);

	// Layer 1
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("EgDYAxlQmRg4m6iHQh9gnjdhxQjih0hfhMQhYhHg6gyQhphZhbhfQiOiVhOhnQg2hGh1i1Qgmg6hFh7Qg3hmgIgPQhVjLgPgXQhJhwhAl0QhBl4AAlEQAAkoA8lwQATh1AXhrQAShVABAAQADAAAahpQAhiCAOgvQBLkCCalVQCAkdBoiyQB7jVBLhaQA2hCCDhxIBbhPQBBg5AqgfQCjh2ENhlQC2hDESguQAcgIAJgBIAigCIAVgDIgKACIEWgTQIJAAGGEaQDzCwCtDuQCcDXBADXIBAC7QAzCZChHFQA/C2B6DCQB8DHBmBPQBcBXD3CrQD8CsB7BzQDIC5BnDZQB9EKAAFXQAAB/gjEJIgaCiQgiCLhHDEQgjBhgdBFQh1DDhFBaQhwCSi7CnQk0ETowCzQosCzodAAQjXAAj9gjgEgHoAvqIALACIgLgDgEgMhArbIAHACIgIgDgEgIwAh1IAKAFIgKgFgAp1ffIAAAAIABgEgEAJIgmdIAhAkIgdgmg");
	this.shape_23.setTransform(293.3,320.9);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,586.5,641.7);


(lib.SullyHeadclip_ShareVein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MEL-3Q-PUPIL2
	this.instance = new lib.MEL3QPUPIL2("synched",0);
	this.instance.setTransform(371.9,112.3,1,1,1.3,0,0,3.8,4.7);

	this.instance_1 = new lib.MEL3QPUPIL1("synched",0);
	this.instance_1.setTransform(125.6,143.6,1,1,1.3,0,0,5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]}).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]},2).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:148.1,y:139.9}},{t:this.instance,p:{x:387.3,y:107}}]},5).to({state:[{t:this.instance_1,p:{x:147.6,y:132.6}},{t:this.instance,p:{x:387.3,y:101.3}}]},1).to({state:[{t:this.instance_1,p:{x:147.6,y:132.6}},{t:this.instance,p:{x:387.3,y:101.3}}]},2).to({state:[{t:this.instance_1,p:{x:148.1,y:139.9}},{t:this.instance,p:{x:387.3,y:107}}]},14).to({state:[{t:this.instance_1,p:{x:147.6,y:132.6}},{t:this.instance,p:{x:387.3,y:101.3}}]},15).to({state:[{t:this.instance_1,p:{x:147.6,y:132.6}},{t:this.instance,p:{x:387.3,y:101.3}}]},1).to({state:[{t:this.instance_1,p:{x:147.6,y:132.6}},{t:this.instance,p:{x:387.3,y:101.3}}]},2).to({state:[{t:this.instance_1,p:{x:140.6,y:137.6}},{t:this.instance,p:{x:382.1,y:102.9}}]},29).to({state:[{t:this.instance_1,p:{x:135,y:138.4}},{t:this.instance,p:{x:376.5,y:103.7}}]},2).to({state:[{t:this.instance_1,p:{x:128.4,y:143.2}},{t:this.instance,p:{x:374.3,y:109.2}}]},1).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]},1).wait(9));

	// MEL-3Q-PUPIL1
	this.instance_2 = new lib.MEL3QEYER("single",0);
	this.instance_2.setTransform(374.3,110.7,1,1,1.3,0,0,24.8,24.7);

	this.instance_3 = new lib.MEL3QEYEL("single",0);
	this.instance_3.setTransform(127.4,143.6,1,1,1.3,0,0,34.1,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]}).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},5).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},14).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},15).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.066,rotation:0,skewX:1.2,skewY:1.4,y:140.4}},{t:this.instance_2,p:{startPosition:0,scaleY:1.066,rotation:0,skewX:1.2,skewY:1.4,y:105.3}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:141.9}},{t:this.instance_2,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:107.9}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:141.9}},{t:this.instance_2,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:107.9}}]},29).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:141.9}},{t:this.instance_2,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:107.9}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).wait(9));

	// MEL-3Q-EYE-R
	this.instance_4 = new lib.MEL3QNOSE("synched",0);
	this.instance_4.setTransform(294.9,117.8,1,1,1.3,0,0,42.6,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9));

	// MEL-3Q-EYE-L
	this.instance_5 = new lib.MEL3QSTACHE("synched",0);
	this.instance_5.setTransform(296.3,180.6,1,1,1.3,0,0,89,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(15).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(9));

	// MEL-3Q-NOSE
	this.instance_6 = new lib.MEL3QMOUTH("single",1);
	this.instance_6.setTransform(280.8,285.2,1,1,1.3,0,0,41.5,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(2).to({startPosition:23},0).wait(1).to({startPosition:39},0).wait(2).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(2).to({startPosition:26},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:39},0).wait(2).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(2).to({startPosition:23},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:21},0).wait(4).to({startPosition:21},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(2).to({startPosition:33},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:23},0).wait(2).to({startPosition:21},0).wait(4).to({startPosition:39},0).wait(2).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(3).to({startPosition:23},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:33},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:32},0).wait(3).to({startPosition:23},0).wait(1).to({startPosition:24},0).wait(3).to({startPosition:23},0).wait(2).to({startPosition:21},0).wait(13).to({regX:41.6,regY:54,scaleX:1.07,scaleY:0.93,x:280.1,y:282.6},0).wait(2).to({regX:41.5,scaleX:1.11,scaleY:0.79,x:278.8,y:274.4,startPosition:1},0).wait(1).to({regY:53.9,scaleX:1,scaleY:1,x:280.8,y:285.2},0).wait(1).to({startPosition:1},0).wait(9));

	// MEL-3Q-STACHE
	this.instance_7 = new lib.MEL3QBROWR("synched",0);
	this.instance_7.setTransform(360.6,30.2,1,1,1.3,0,0,51.4,22.1);

	this.instance_8 = new lib.MEL3QBROWL("synched",0);
	this.instance_8.setTransform(100.9,60.7,1,1,1.3,0,0,47.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{rotation:1.3,x:100.9,y:60.7,regX:47.5}},{t:this.instance_7,p:{rotation:1.3,x:360.6,y:30.2}}]}).to({state:[{t:this.instance_8,p:{rotation:16.3,x:101,y:69.7,regX:47.5}},{t:this.instance_7,p:{rotation:-13.6,x:360.9,y:41}}]},2).to({state:[{t:this.instance_8,p:{rotation:24.2,x:109.7,y:102.6,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:360.6,y:52.3}}]},1).to({state:[{t:this.instance_8,p:{rotation:31.3,x:105.3,y:85,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:360.6,y:41.3}}]},5).to({state:[{t:this.instance_8,p:{rotation:31.3,x:105.4,y:79.3,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:360.6,y:35.6}}]},1).to({state:[{t:this.instance_8,p:{rotation:31.3,x:106.5,y:82.7,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:361.7,y:39}}]},2).to({state:[{t:this.instance_8,p:{rotation:31.3,x:108.1,y:88,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:363.3,y:44.3}}]},14).to({state:[{t:this.instance_8,p:{rotation:31.3,x:106.5,y:82.7,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:361.7,y:39}}]},15).to({state:[{t:this.instance_8,p:{rotation:31.3,x:106.5,y:73.2,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:361.7,y:29.5}}]},1).to({state:[{t:this.instance_8,p:{rotation:31.3,x:108.4,y:78.9,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:363.6,y:35.2}}]},2).to({state:[{t:this.instance_8,p:{rotation:31.3,x:107.6,y:76.3,regX:47.5}},{t:this.instance_7,p:{rotation:-28.6,x:362.8,y:32.6}}]},29).to({state:[{t:this.instance_8,p:{rotation:16.3,x:107.6,y:76.3,regX:47.6}},{t:this.instance_7,p:{rotation:-13.6,x:362.9,y:32.5}}]},2).to({state:[{t:this.instance_8,p:{rotation:1.3,x:101.3,y:63.5,regX:47.5}},{t:this.instance_7,p:{rotation:1.3,x:361,y:33}}]},1).to({state:[{t:this.instance_8,p:{rotation:1.3,x:100.9,y:60.7,regX:47.5}},{t:this.instance_7,p:{rotation:1.3,x:360.6,y:30.2}}]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.7,7,359.9,245.4);


(lib.SullyHeadclip_NameIs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MEL-3Q-PUPIL2
	this.instance = new lib.MEL3QPUPIL2("synched",0);
	this.instance.setTransform(371.9,112.3,1,1,1.3,0,0,3.8,4.7);

	this.instance_1 = new lib.MEL3QPUPIL1("synched",0);
	this.instance_1.setTransform(125.6,143.6,1,1,1.3,0,0,5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).to({state:[{t:this.instance_1},{t:this.instance}]},3).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},41).to({state:[{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).to({state:[]},38).to({state:[{t:this.instance_1},{t:this.instance}]},2).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},2).wait(2));

	// MEL-3Q-PUPIL1
	this.instance_2 = new lib.MEL3QEYER("single",0);
	this.instance_2.setTransform(374.3,110.7,1,1,1.3,0,0,24.8,24.7);

	this.instance_3 = new lib.MEL3QEYEL("single",0);
	this.instance_3.setTransform(127.4,143.6,1,1,1.3,0,0,34.1,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]}).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},3).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},41).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},38).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:142}},{t:this.instance_2,p:{startPosition:0,scaleY:1.034,rotation:0,skewX:1.2,skewY:1.3,y:107.9}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7}}]},2).wait(2));

	// MEL-3Q-EYE-R
	this.instance_4 = new lib.MEL3QNOSE("synched",0);
	this.instance_4.setTransform(294.9,117.8,1,1,1.3,0,0,42.6,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(38).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2));

	// MEL-3Q-EYE-L
	this.instance_5 = new lib.MEL3QSTACHE("synched",0);
	this.instance_5.setTransform(296.3,180.6,1,1,1.3,0,0,89,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(41).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(38).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2));

	// MEL-3Q-NOSE
	this.instance_6 = new lib.MEL3QMOUTH("single",1);
	this.instance_6.setTransform(280.8,285.2,1,1,1.3,0,0,41.5,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({startPosition:17},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:18},0).wait(2).to({startPosition:19},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:13},0).wait(1).to({startPosition:12},0).wait(2).to({startPosition:18},0).wait(3).to({startPosition:17},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:18},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:13},0).wait(2).to({startPosition:12},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:2},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:16},0).wait(2).to({startPosition:4},0).wait(2).to({startPosition:13},0).wait(1).to({startPosition:12},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:6},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:11},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:5},0).wait(2).to({startPosition:5},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(22));

	// MEL-3Q-STACHE
	this.instance_7 = new lib.MEL3QBROWR("synched",0);
	this.instance_7.setTransform(360.6,30.2,1,1,1.3,0,0,51.4,22.1);

	this.instance_8 = new lib.MEL3QBROWL("synched",0);
	this.instance_8.setTransform(100.9,60.7,1,1,1.3,0,0,47.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{x:100.9,y:60.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.6,y:30.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_8,p:{x:101,y:68.2,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.7,y:37.7,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:100.9,y:76.8,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.6,y:46.3,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:101,y:68.2,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.7,y:37.7,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.instance_8,p:{x:100.9,y:60.7,scaleX:0.999,scaleY:0.999,rotation:-8.2}},{t:this.instance_7,p:{x:360.7,y:30.3,regX:51.5,rotation:7.8,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:100.8,y:63.7,scaleX:0.999,scaleY:0.999,rotation:-8.2}},{t:this.instance_7,p:{x:360.6,y:33.3,regX:51.5,rotation:7.8,scaleX:1,scaleY:1}}]},41).to({state:[{t:this.instance_8,p:{x:100.6,y:69.7,scaleX:0.999,scaleY:0.999,rotation:0}},{t:this.instance_7,p:{x:360.3,y:39.3,regX:51.5,rotation:3.8,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_8,p:{x:101.1,y:77.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.8,y:47.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:100.9,y:83.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.6,y:53.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:100.9,y:82.2,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.7,y:51.7,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_8,p:{x:100.7,y:89.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.4,y:59.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},38).to({state:[{t:this.instance_8,p:{x:100.3,y:74.2,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.1,y:43.7,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_8,p:{x:100.9,y:60.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.6,y:30.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:101,y:57.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.7,y:27.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{x:100.9,y:60.7,scaleX:1,scaleY:1,rotation:1.3}},{t:this.instance_7,p:{x:360.6,y:30.2,regX:51.4,rotation:1.3,scaleX:1,scaleY:1}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.7,7,359.9,245.4);


(lib.SullyHeadclip_idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MEL3QPUPIL2("synched",0);
	this.instance.setTransform(371.9,112.3,1,1,1.3,0,0,3.8,4.7);

	this.instance_1 = new lib.MEL3QPUPIL1("synched",0);
	this.instance_1.setTransform(125.6,143.6,1,1,1.3,0,0,5,6.2);

	this.instance_2 = new lib.MEL3QEYER("single",0);
	this.instance_2.setTransform(374.3,110.7,1,1,1.3,0,0,24.8,24.7);

	this.instance_3 = new lib.MEL3QEYEL("single",0);
	this.instance_3.setTransform(127.4,143.6,1,1,1.3,0,0,34.1,34.2);

	this.instance_4 = new lib.MEL3QNOSE("synched",0);
	this.instance_4.setTransform(294.9,117.8,1,1,1.3,0,0,42.6,71.5);

	this.instance_5 = new lib.MEL3QSTACHE("synched",0);
	this.instance_5.setTransform(296.3,180.6,1,1,1.3,0,0,89,43.6);

	this.instance_6 = new lib.MEL3QMOUTH("single",1);
	this.instance_6.setTransform(280.8,285.2,1,1,1.3,0,0,41.5,53.9);

	this.instance_7 = new lib.MEL3QBROWR("synched",0);
	this.instance_7.setTransform(360.6,30.2,1,1,1.3,0,0,51.4,22.1);

	this.instance_8 = new lib.MEL3QBROWL("synched",0);
	this.instance_8.setTransform(100.9,60.7,1,1,1.3,0,0,47.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{y:60.7,x:100.9}},{t:this.instance_7,p:{y:30.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:0,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]}).to({state:[{t:this.instance_8,p:{y:70.7,x:100.9}},{t:this.instance_7,p:{y:40.2,x:360.6}},{t:this.instance_6,p:{y:287.2}},{t:this.instance_5,p:{y:184.6}},{t:this.instance_4,p:{y:121.8}},{t:this.instance_3,p:{y:147.6,startPosition:2,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:114.7,startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:147.6}},{t:this.instance,p:{y:116.3}}]},24).to({state:[{t:this.instance_8,p:{y:82.7,x:100.9}},{t:this.instance_7,p:{y:52.2,x:360.6}},{t:this.instance_6,p:{y:289.2}},{t:this.instance_5,p:{y:188.6}},{t:this.instance_4,p:{y:125.8}},{t:this.instance_3,p:{y:151.6,startPosition:1,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:118.7,startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{y:70.7,x:100.9}},{t:this.instance_7,p:{y:40.2,x:360.6}},{t:this.instance_6,p:{y:287.2}},{t:this.instance_5,p:{y:184.6}},{t:this.instance_4,p:{y:121.8}},{t:this.instance_3,p:{y:147.6,startPosition:2,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:114.7,startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:147.6}},{t:this.instance,p:{y:116.3}}]},3).to({state:[{t:this.instance_8,p:{y:56.7,x:100.9}},{t:this.instance_7,p:{y:26.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:142.2,startPosition:0,regY:34.1,scaleY:1.028,rotation:0,skewX:1.3,skewY:1.3}},{t:this.instance_2,p:{y:108.4,startPosition:0,scaleY:1.028,rotation:0,skewX:1.3,skewY:1.3}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},1).to({state:[{t:this.instance_8,p:{y:60.7,x:100.9}},{t:this.instance_7,p:{y:30.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:0,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},2).to({state:[{t:this.instance_8,p:{y:60.7,x:100.9}},{t:this.instance_7,p:{y:30.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:0,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},1).to({state:[{t:this.instance_8,p:{y:65,x:101.1}},{t:this.instance_7,p:{y:34.5,x:360.8}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:2,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},88).to({state:[{t:this.instance_8,p:{y:71.4,x:102.4}},{t:this.instance_7,p:{y:40.9,x:362.1}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:1,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{y:77.9,x:102.7}},{t:this.instance_7,p:{y:47.4,x:362.4}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:1,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{y:65,x:101.1}},{t:this.instance_7,p:{y:34.5,x:360.8}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:2,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},9).to({state:[{t:this.instance_8,p:{y:60.7,x:100.9}},{t:this.instance_7,p:{y:30.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:0,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},2).to({state:[{t:this.instance_8,p:{y:70.7,x:100.9}},{t:this.instance_7,p:{y:40.2,x:360.6}},{t:this.instance_6,p:{y:287.2}},{t:this.instance_5,p:{y:184.6}},{t:this.instance_4,p:{y:121.8}},{t:this.instance_3,p:{y:147.6,startPosition:2,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:114.7,startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:147.6}},{t:this.instance,p:{y:116.3}}]},59).to({state:[{t:this.instance_8,p:{y:82.7,x:100.9}},{t:this.instance_7,p:{y:52.2,x:360.6}},{t:this.instance_6,p:{y:289.2}},{t:this.instance_5,p:{y:188.6}},{t:this.instance_4,p:{y:125.8}},{t:this.instance_3,p:{y:151.6,startPosition:1,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:118.7,startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{y:70.7,x:100.9}},{t:this.instance_7,p:{y:40.2,x:360.6}},{t:this.instance_6,p:{y:287.2}},{t:this.instance_5,p:{y:184.6}},{t:this.instance_4,p:{y:121.8}},{t:this.instance_3,p:{y:147.6,startPosition:2,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:114.7,startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:147.6}},{t:this.instance,p:{y:116.3}}]},3).to({state:[{t:this.instance_8,p:{y:56.7,x:100.9}},{t:this.instance_7,p:{y:26.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:142.2,startPosition:0,regY:34.1,scaleY:1.028,rotation:0,skewX:1.3,skewY:1.3}},{t:this.instance_2,p:{y:108.4,startPosition:0,scaleY:1.028,rotation:0,skewX:1.3,skewY:1.3}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},1).to({state:[{t:this.instance_8,p:{y:60.7,x:100.9}},{t:this.instance_7,p:{y:30.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:0,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},2).to({state:[{t:this.instance_8,p:{y:60.7,x:100.9}},{t:this.instance_7,p:{y:30.2,x:360.6}},{t:this.instance_6,p:{y:285.2}},{t:this.instance_5,p:{y:180.6}},{t:this.instance_4,p:{y:117.8}},{t:this.instance_3,p:{y:143.6,startPosition:0,regY:34.2,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_2,p:{y:110.7,startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0}},{t:this.instance_1,p:{y:143.6}},{t:this.instance,p:{y:112.3}}]},1).wait(96));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.7,7,359.9,245.4);


(lib.Sully_34_body = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mel3Qbody("synched",0);
	this.instance.setTransform(300.3,327.4,1,1,1.3,0,0,293.2,320.9);

	this.instance_1 = new lib.MEL3QHAIRTOP("synched",0);
	this.instance_1.setTransform(190,11,1,1,1.3,0,0,47.6,38.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-28.1,600.7,682.8);


(lib.BODY = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MEL3QHAT("synched",0);
	this.instance.setTransform(240.7,82.8,1,1,1.3,0,0,118.9,80.2);

	this.instance_1 = new lib.MEL3QTIE("synched",0);
	this.instance_1.setTransform(446.5,477.5,0.999,0.999,13.5,0,0,23.3,21.9);

	this.instance_2 = new lib.MEL3QTIE_NECK("synched",0);
	this.instance_2.setTransform(325.8,427.3,1,1,1.3,0,0,255.2,95);

	this.instance_3 = new lib.Sully_34_body("synched",0);
	this.instance_3.setTransform(372.2,418.4,1,1,0,0,0,300.3,327.3);

	this.instance_4 = new lib.MEL3QHAIRBACK2("synched",0);
	this.instance_4.setTransform(451.1,140.3,1,1,1.3,0,0,84.3,91.5);

	this.instance_5 = new lib.MEL3QHAIRBACK1("synched",0);
	this.instance_5.setTransform(104.8,240.1,1,1,1.3,0,0,102.4,85.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283B4A").s().p("AtGDXIAJgDIgBADIgEAAIgCAAIgCAAgAJhBTIAEABIgCAAgAi6iYIAEAAIACAAIAAAEgANDjDIABgBQABAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAIgGACQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAgAmYjVIAAgBIABABg");
	this.shape.setTransform(271.9,424.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D9F2F2").s().p("AiEJMIACAAIgCAAgACFpLIABAAIgDADQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAg");
	this.shape_1.setTransform(58.8,223.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAADIAAgCg");
	this.shape_2.setTransform(295.5,166.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#56BBFE").s().p("AgmCGIAAABIgBABgAAoiHIAAABIgCABg");
	this.shape_3.setTransform(275.5,185);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5763FF").s().p("AB+DAIAEAAIgBAAIgDAAgAh2BLIACAAIgEABQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAABAAgAiBi7QAAgBAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIgBAIIgDgEg");
	this.shape_4.setTransform(254,193);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFVFBQhLhAgPhiQgUh8AGh5QAHgFADgGQAAgcAXgpQAKgSAOgRQBdAHBfANQBOANBLgGIAJAAIAdALIAgANIgBAEIAAABIAAAGQAFAEAEAHIAAABIAEAHIAAACIgDACQgkAhgugWIAAgCQiShCiYAfQgEAAgEAEQgUAKgMAVIgCAEQABAGADAFQA0B1CRAWQBfAOBbAlQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAADQgDAHgCAGQgBAFgBACIgDADQgNAIgNALIgBAAIgJAGIgBACQhkABhigcQhsghguBWIABAEIADAVIABAHQAbAcAjAYQBOA2BYAGIABAJIgNAHQglATgjAAQgxAAgrglgAJNEhQgJgFgJgCIgxgEQhRgLhJgoIgBgEIgDgCIgBAAQgOgNgIgNIgHgHIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgIIAFgCQAvgFAvAHIAzAHQAcAEAaAIQB8AiAvhxQAEgLgIgIQgngog6gNIABAAQijgfh2hhIABgIQB0guB9A8QB1A6BBhdQgBgJgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgIIgCgDQgPgTg0gLQgSgGgWgGIhKgUQghgJAAgJQAAgYA7gdQATgKBCgbIAKAAQBSACA4BvIARAiIgBAZIAAANIgBAEIACAAIAAABIACACQAzDJiYCbQg3A1hDAtgAGtj5QgFgGABgIQgBgGgCAAQggAAgkAHQBGg6BbgXIgIAHQglAcgBAlQAAAbAHAJIADAEQgmgFgMgNgAs0jvIgHgIIAUAQQgIgDgFgFgAqWlBQgUAAgRAKIgUAJQgFAAgTgXIAcgEQAugEAiAFQAkAFAAAOQAAAGgFAJQgXgagjgBg");
	this.shape_5.setTransform(207.8,183.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ADfSvQAAgEABgDIgBAIgARlQYIAEAAIgCABgAxoPgIABAAIgBABgAiXyuIAOgBIgLAEIgDgDg");
	this.shape_6.setTransform(326.9,283.5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,672.6,745.7);


(lib.SullyNest_TheNameis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sully_34_arm("single",0);
	this.instance.setTransform(-221.4,133.6,1,1,0,0,0,146.2,69);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({startPosition:0},0).wait(1).to({regX:18.6,regY:22.9,scaleY:1.01,skewX:-3,skewY:3.2,x:-353.1,y:93.8},0).wait(2).to({regX:146.2,regY:69,scaleY:1,skewX:0,skewY:0,x:-227.8,y:138.8,startPosition:24},0).wait(1).to({rotation:-0.9,x:-219.6,y:130.2,startPosition:25},0).wait(1).to({rotation:-3.6,x:-222.1,y:106.6,startPosition:26},0).wait(1).to({rotation:-4.6,x:-226.7,y:96.4,startPosition:27},0).wait(2).to({y:100.6,startPosition:21},0).wait(1).to({y:102.7},0).wait(5).to({regX:52.1,regY:35.4,scaleX:1,scaleY:1,rotation:-1.4,x:-322,y:78.1},0).wait(2).to({regX:146.2,regY:69,scaleX:1,scaleY:1,rotation:-1.8,x:-225.1,y:95.8,startPosition:22},0).wait(1).to({regX:52.6,regY:41.6,rotation:2.6,x:-316.4,y:77.5,startPosition:28},0).wait(1).to({regX:55.6,regY:38,scaleX:1,scaleY:1,rotation:8.4,x:-311.8,y:77.1},0).wait(2).to({rotation:0,skewX:8.4,skewY:9.6},0).wait(12).to({regX:63,regY:37.8,rotation:7.3,skewX:0,skewY:0,x:-306.8,y:85.9,startPosition:22},0).wait(2).to({regX:146.1,regY:69,rotation:-1.3,x:-225.6,y:105.2,startPosition:21},0).wait(1).to({regX:34.7,regY:28.6,scaleX:1,scaleY:1,rotation:0,skewX:0.2,skewY:4.6,x:-342.4,y:63.8,startPosition:23},0).wait(1).to({regX:53,regY:41.2,scaleX:1,rotation:-4.9,skewX:0,skewY:0,x:-326.1,y:68.8},0).wait(2).to({regX:49.3,regY:27.3,rotation:-2.6,x:-328.9,y:57.3},0).wait(1).to({regX:64.9,regY:41.2,scaleX:1,scaleY:1,rotation:-0.1,x:-310.1,y:71.9},0).wait(7).to({regX:64.8,scaleX:1,rotation:0,skewX:-0.1,skewY:3.3,x:-312.3,y:74},0).wait(2).to({regX:146.2,regY:69,scaleX:1,rotation:-1.5,skewX:0,skewY:0,x:-234.1,y:107.4,startPosition:29},0).wait(1).to({regX:146.3,scaleX:1,scaleY:1,rotation:-1.6,x:-261.9,y:131.3,startPosition:30},0).wait(1).to({regX:146.2,scaleX:1.1,scaleY:0.84,rotation:0,x:-169.5,y:119.6,startPosition:31},0).wait(1).to({regX:42.1,regY:22.2,scaleX:0.99,scaleY:1.02,skewX:-12.1,skewY:-2.2,x:-325.3,y:86.8,startPosition:0},0).wait(1).to({regX:36.6,regY:32.9,scaleX:1,scaleY:1,skewX:-3.9,skewY:-0.4,x:-330.8,y:97.5},0).wait(1).to({regX:146.2,regY:69,scaleY:1,skewX:0,skewY:0,x:-221.3,y:133.6},0).wait(36).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({y:132.7},0).wait(1).to({y:132},0).wait(1).to({y:131.6},0).wait(1).to({y:131.5},0).wait(2).to({y:133.6},0).wait(1));

	// Layer 5
	this.instance_1 = new lib.SullyHeadclip_NameIs("synched",0);
	this.instance_1.setTransform(-120.3,-47.3,1,1,0,0,0,206.2,142.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:0.5,x:-119.5,y:-39.3,startPosition:1},0).wait(1).to({regX:206.3,rotation:1.3,x:-118.1,y:-34.9,startPosition:2},0).wait(2).to({rotation:0,x:-120.1,y:-40,startPosition:4},0).wait(1).to({regY:142.5,rotation:-0.8,x:-121.7,y:-45.3,startPosition:5},0).wait(1).to({regX:206.2,regY:142.7,rotation:-2.3,x:-130.6,y:-70.3,startPosition:6},0).wait(1).to({regX:206.3,regY:142.6,rotation:-3.3,x:-138.3,y:-82.3,startPosition:7},0).wait(2).to({y:-78.1,startPosition:9},0).wait(1).to({y:-76,startPosition:10},0).wait(5).to({rotation:-2.5,x:-135.1,y:-72.4,startPosition:15},0).wait(2).to({rotation:-0.5,x:-129.9,y:-62.8,startPosition:17},0).wait(1).to({regX:206.2,rotation:0.6,x:-123.9,y:-52.8,startPosition:18},0).wait(1).to({rotation:1.4,x:-120.5,y:-46.7,startPosition:19},0).wait(2).to({regX:206.3,scaleX:1,scaleY:1,rotation:1.9,x:-119.6,y:-42.7,startPosition:21},0).wait(12).to({rotation:0.8,x:-123.4,y:-42.4,startPosition:33},0).wait(2).to({regX:206.4,rotation:0,x:-129,y:-52.6,startPosition:35},0).wait(1).to({regX:206.3,scaleX:1,scaleY:1,rotation:-2.5,x:-137.6,y:-81.2,startPosition:36},0).wait(1).to({regX:206.2,regY:142.5,rotation:-3.6,x:-143.3,y:-90.9,startPosition:37},0).wait(2).to({y:-86.7,startPosition:39},0).wait(1).to({y:-84.6,startPosition:40},0).wait(7).to({regX:206.3,rotation:-2,x:-141,y:-77.5,startPosition:47},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.2,x:-136.2,y:-66.3,startPosition:49},0).wait(1).to({regX:206.2,regY:142.4,scaleX:1,scaleY:1,rotation:5,x:-105.5,y:-48.5,startPosition:50},0).wait(1).to({regY:142.6,rotation:6.8,x:-81.7,y:-39.4,startPosition:51},0).wait(1).to({rotation:8.1,x:-73.3,y:-40.6,startPosition:52},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.1,x:-65.3,y:-43.5,startPosition:53},0).wait(1).to({y:-45.6,startPosition:54},0).wait(36).to({regY:142.5,rotation:8.1,x:-67,y:-36.5,startPosition:90},0).wait(2).to({x:-64.9,y:-34.4,startPosition:92},0).wait(1).to({regY:142.6,rotation:4.5,x:-89,y:-40.9,startPosition:93},0).wait(1).to({regY:142.5,scaleX:1,scaleY:1,rotation:2,x:-106.4,y:-45.6,startPosition:94},0).wait(1).to({regY:142.6,rotation:0.5,x:-116.7,y:-48.4,startPosition:95},0).wait(1).to({rotation:0,x:-120.2,y:-49.3,startPosition:96},0).wait(2).to({y:-47.2,startPosition:98},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.seat("synched",0);
	this.instance_2.setTransform(-224.6,93.7,1.127,1.245);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.BODY("synched",0);
	this.instance_3.setTransform(-69.1,39.9,1,1,0,0,0,336.2,372.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regY:372.8,rotation:0.5,y:48.1},0).wait(1).to({regY:372.9,rotation:1.3,y:53.3},0).wait(2).to({rotation:0,x:-68.9,y:47.1},0).wait(1).to({rotation:-0.8,x:-68.8,y:40.8},0).wait(1).to({rotation:-2.3,x:-75.7,y:14.3},0).wait(1).to({rotation:-3.3,x:-82,y:1.5},0).wait(2).to({y:5.7},0).wait(1).to({y:7.8},0).wait(5).to({rotation:-2.5,x:-79.8,y:12.1},0).wait(2).to({rotation:-0.5,x:-77.7,y:23.6},0).wait(1).to({regX:336.3,rotation:0.6,x:-73.4,y:34.8},0).wait(1).to({rotation:1.4,x:-71.3,y:41.4},0).wait(2).to({regX:336.2,scaleX:1,scaleY:1,rotation:1.9,x:-71.4,y:45.9},0).wait(12).to({rotation:0.8,x:-73.4,y:45.3},0).wait(2).to({rotation:0,x:-77.6,y:34.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.5,x:-82.3,y:3.2},0).wait(1).to({regY:372.8,rotation:-3.6,x:-86.5,y:-7.2},0).wait(2).to({y:-3},0).wait(1).to({y:-0.9},0).wait(7).to({regY:372.9,rotation:-2,y:7.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.2,x:-84.4,y:20.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:5,x:-62.1,y:42.8},0).wait(1).to({rotation:6.8,x:-41.1,y:53},0).wait(1).to({rotation:8.1,x:-34.9,y:52.8},0).wait(1).to({regX:336.3,scaleX:1,scaleY:1,rotation:9.1,x:-28.5,y:50.6},0).wait(1).to({y:48.5},0).wait(36).to({regX:336.4,rotation:8.1,x:-28.4,y:57},0).wait(2).to({x:-26.3,y:59.1},0).wait(1).to({rotation:4.5,x:-44.9,y:49.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:2,x:-58.2,y:43.1},0).wait(1).to({regX:336.3,rotation:0.5,x:-66.3,y:39},0).wait(1).to({regX:336.2,rotation:0,x:-69,y:37.8},0).wait(2).to({y:39.9},0).wait(1));

	// Layer 6
	this.instance_4 = new lib.SullyArmR("single",1);
	this.instance_4.setTransform(255.7,24.9,1,1,0,0,0,123.5,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:-28.2,regY:57.8,rotation:4.5,x:104.1,y:13.4},0).wait(1).to({regX:-9.5,regY:49.1,rotation:7.6,x:123.6,y:13},0).wait(2).to({regX:123.4,regY:78.9,rotation:0,x:255.6,y:32.3,startPosition:13},0).wait(1).to({regY:79,rotation:-0.8,x:255.3,y:20.2,startPosition:14},0).wait(1).to({regX:123.5,regY:78.9,rotation:-2.3,x:247.9,y:-14.7,startPosition:15},0).wait(1).to({regY:79,rotation:-3.3,x:241.1,y:-33.2,startPosition:16},0).wait(2).to({y:-29,startPosition:9},0).wait(1).to({y:-26.9},0).wait(5).to({regX:7.5,regY:82.4,scaleY:1,rotation:0,skewX:-6.1,skewY:-7.4,x:128,y:-9.1},0).wait(2).to({regX:-31,regY:79.3,scaleX:1,rotation:-4.5,skewX:0,skewY:0,x:89.7,y:-3.8,startPosition:10},0).wait(1).to({regX:-30.9,rotation:-2.3,x:94.5,y:11,startPosition:17},0).wait(1).to({regX:-31,rotation:-6.2,x:96.9,y:20.1},0).wait(2).to({rotation:0,skewX:-6.2,skewY:-7.6},0).wait(12).to({skewX:-2.6,skewY:-4.6,x:94.7,y:22.2,startPosition:10},0).wait(2).to({regX:-30.9,regY:79.4,rotation:-4.1,skewX:0,skewY:0,x:90,y:8.1,startPosition:9},0).wait(1).to({regX:-4.6,regY:85.2,scaleX:0.98,scaleY:1,rotation:0,skewX:-12.2,skewY:-9.1,x:113.5,y:-14.6,startPosition:11},0).wait(1).to({regX:9.8,regY:92.2,scaleX:1,scaleY:1,rotation:-3.6,skewX:0,skewY:0,x:123.8,y:-22.7},0).wait(2).to({regX:-4.4,regY:93.4,rotation:-4.6,x:107.6,y:-20.4},0).wait(1).to({regX:-22.9,regY:79.3,scaleX:1,scaleY:1,rotation:-6.3,x:86,y:-29.2},0).wait(7).to({regX:-22.8,regY:79.2,scaleX:1,scaleY:1,rotation:0,skewX:-13.2,skewY:-10.2,x:86.1,y:-14.6},0).wait(2).to({regX:20.4,regY:78,scaleX:1.03,scaleY:1.01,skewX:6,skewY:-0.2,x:136.9,y:2.8,startPosition:16},0).wait(1).to({regX:-16,regY:86,scaleX:1,scaleY:1,skewX:4.7,skewY:1.3,x:127.3,y:41.3,startPosition:10},0).wait(1).to({regX:-16.2,regY:85.9,scaleY:1,rotation:-2,skewX:0,skewY:0,x:143.3,y:67,startPosition:12},0).wait(1).to({regY:86,rotation:-4.9,x:144.9,y:70.8},0).wait(1).to({rotation:-5,x:155.1,y:72},0).wait(1).to({regY:85.9,rotation:-3,x:151.9,y:69.8},0).wait(36).to({scaleX:1,scaleY:1,rotation:-3.1,x:152.7,y:75},0).wait(2).to({regY:86,scaleX:1,scaleY:1,rotation:-5.8,x:157.6,y:77.1,startPosition:10},0).wait(1).to({rotation:-0.8,x:155.5,y:76.5,startPosition:14},0).wait(1).to({regX:3,regY:57.1,scaleX:1,scaleY:0.89,rotation:0,skewX:5.6,x:145.7,y:27.6,startPosition:13},0).wait(1).to({regX:-15.1,regY:61.2,scaleY:0.95,skewX:4.8,x:119.1,y:7.2,startPosition:1},0).wait(1).to({regX:123.5,regY:78.9,scaleY:1,skewX:0,x:255.7,y:22.8},0).wait(2).to({y:24.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446,-332.9,727,745.7);


(lib.SullyNest_IdleShareVein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 30
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmdCEQgShhAChnQAEgfAMgfQAXg8AlAAQAXAAAPARIAGAGIgBALQgBAhAEBLQAABpArBpQAcBEArArIgBACIgIAXQgLAahDAAQhhAAgkjAgAjXB1QgihfAAhhQgBg5AJg4QARhyAzAAQAwAAAbA3IAOAhQgHAuAAA9QAIBrAiBmQAdBZAnAzIgBACQgWAmgSAAQiGgBg7ikgABhD4Ig5g8QgdgxgUhVQgZhlgHhpQAAgrAIgrQAPhVApABQAyAAAxBNQAPAaAQAjQAZAsATAYQASAXgJgcIABgDIADgMIADAAQAYADBBABQCBAMgBCNQgFAYgOAWQgeAsg1AAQgmAAgRgTQgSgHgKgRQgHgNgBgQIgBAAIgCABIgCgHIAGgFIAAgBIAAgEQAAgDADgGQADgMAIgDIAIgKQAXgaAYgRQAHgLAAgCQAAgSgSgBQgQgBgXAMQgjASgOAYIAAABIgFgFIgFgPIgEgMIgBgDIAHAPIAIATIgUg8IgJgKIABAEIgCgFIgJgJIgFAAIgBADIgCAAQgFACgBAHQAAAJASAuIAFAPIABABIACAGIgEACQAAAOgCATQAAAIANA8QANA8AAASIACAQQABASgEAQQgLAwg1AAIAAAAQgdAAgKgHgADBhEIgBgCIABADg");
	this.shape.setTransform(-316.1,79.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnQC7QgchgAChfQAAhtAkhBQAdg2AygOQAogMAjASQAGgTAIgUQA2iDBhA6QAjAUAcAnIAAABQALgfAPgUQAog1A+AcQA4AZAwBGQAZAmAMAjIAHgCQAogIBiAPQAlAKAYAWQANAMAPAVQAWAYATAvQATAuAAAaQAAAggfAyQgxBMhYAAQgtAAgegTIAAAMQAAA/gFAPQgVA8hTAAQgyAAgngfIgCAEQgVA8gzAAQhLAAg5gjIAAADQAAAUgaAZQghAfgxAAQiRAAg3jAgAmhiIQgMAfgEAfQgBBnASBhQAjDABhAAQBEAAALgaIAHgWIACgDQgrgqgdhFQgrhoABhqQgEhLABghIAAgLIgFgFQgQgRgXAAQglAAgXA7gAj1jCQgIA4ABA6QAABgAiBfQA6ClCHAAQASAAAVgmIABgCQgngygdhaQghhmgIhrQAAg9AGguIgOghQgbg3gvAAQgzAAgSBygAglj0QgIArABArQAGBqAZBkQAUBVAdAxIA5A8QAKAIAdAAQA1AAAMgxQADgQgBgSIgBgPQAAgSgOg9QgNg8AAgIQADgSAAgPIADgCIgCgFIAAgCIgGgOQgRgvAAgIQAAgIAGgBIACAAIAAgEIAGAAIAIAJIADAFIAMAdIAAACIABABIABADIADAMIAGAQIADAHIACgDIAAgBQANgYAjgSQAXgMARACQASABAAARQAAADgHAKQgZASgWAZIgIAKQgIAGgEAJQgDAGAAADIABAEIAAABIgGAGIABAGIADAAIABAAQAAAPAIANQAJARATAHQARAUAmAAQA0AAAegtQAPgWAFgYQAAiMiBgNQhAgBgYgDIgDAAIgEAMIgBADQAJAcgSgXQgSgYgagsQgQgjgPgZQgwhOgzAAQgoAAgQBUg");
	this.shape_1.setTransform(-315.7,80.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AnQC7QgchgAChfQAAhtAkhBQAdg2AygOQAogMAjASQAGgTAIgUQA2iDBhA6QAjAUAcAnIAAABQALgfAPgUQAog1A+AcQA4AZAwBGQAZAmAMAjIAHgCQAogIBiAPQAlAKAYAWQANAMAPAVQAWAYATAvQATAuAAAaQAAAggfAyQgxBMhYAAQgtAAgegTIAAAMQAAA/gFAPQgVA8hTAAQgyAAgngfIgCAEQgVA8gzAAQhLAAg5gjIAAADQAAAUgaAZQghAfgxAAQiRAAg3jAgAmhiIQgMAfgEAfQgBBnASBhQAjDABhAAQBEAAALgaIAHgWIACgDQgrgqgdhFQgrhoABhqQgEhLABghIAAgLIgFgFQgQgRgXAAQglAAgXA7gAj1jCQgIA4ABA6QAABgAiBfQA6ClCHAAQASAAAVgmIABgCQgngygdhaQghhmgIhrQAAg9AGguIgOghQgbg3gvAAQgzAAgSBygAglj0QgIArABArQAGBqAZBkQAUBVAdAxIA5A8QAKAIAdAAQA1AAAMgxQADgQgBgSIgBgPQAAgSgOg9QgNg8AAgIQADgSAAgPIADgCIgCgFIAAgCIgGgOQgRgvAAgIQAAgIAGgBIACAAIAAgEIAGAAIAIAJIADAGQAFALAHASIAAABIABACIABADIADALIAGAQIADAHIACgDQANgZAjgSQAXgMARACQASABAAARQAAADgHAKQgZASgWAZIgIAKQgIAGgEAJQgDAGAAADIABAEIAAABIgGAGIABAGIADAAIABAAQAAAPAIANQAJARATAHQARAUAmAAQA0AAAegtQAPgWAFgYQAAiMiBgNQhAgBgYgDIgDAAIgEAMIgBADQAJAdgSgYQgSgYgagrQgQgkgPgZQgwhOgzAAQgoAAgQBUg");
	this.shape_2.setTransform(-318.4,72.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AmdCEQgShhAChnQAEgfAMgfQAXg8AlAAQAXAAAPARIAGAGIgBALQgBAhAEBLQAABpArBpQAcBEArArIgBACIgIAXQgLAahDAAQhhAAgkjAgAjXB1QgihfAAhhQgBg5AJg4QARhyAzAAQAwAAAbA3IAOAhQgHAuAAA9QAIBrAiBmQAdBZAnAzIgBACQgWAmgSAAQiGgBg7ikgABhD4Ig5g8QgdgygUhUQgZhlgHhpQAAgrAIgrQAPhVApABQAyAAAxBNQAPAaAQAjQAZAsATAYQARAYgIgdIABgDIADgMIADAAQAYADBBABQCBAMgBCMQgFAZgOAWQgeAsg1AAQgmAAgRgTQgSgHgKgRQgHgNgBgQIgBAAIgCABIgCgHIAGgFIAAgBIAAgEQAAgDADgGQADgMAIgDIAIgKQAXgaAYgRQAHgLAAgCQAAgSgSAAQgQgCgXAMQgjASgOAZIgUg9IgJgKIABAFIgCgGIgJgJIgFAAIgBADIgCAAQgFACgBAHQAAAJASAuIAFAPIABABIACAGIgEABQAAAPgCATQAAAIANA8QANA8AAASIACAQQABASgEAQQgLAwg1AAQgdAAgKgHgADLglIgFgPIgEgMIgBgDIAHAPIAIAUg");
	this.shape_3.setTransform(-318.8,71.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ECF75D").s().p("AheCrQgCgrgNgbQgQgjgphEIAAAAQBOAKBSg0QAngaAhg/IARglIANAXQBYCigVCcg");
	this.shape_4.setTransform(345,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2D3033").s().p("AgUChIgYgCIgKgQQgcguhAhBIg8g6QAeAMAZARQAkAbAwgEQBFgFA1gxQAugpAQg+IADgTIACgKQAWAoAjA6IAcA2IgDAIIgJAfQgSAxhDAtQg4Akg8AAIgOAAg");
	this.shape_5.setTransform(330.3,-17.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AECGFQgsgJglgbQgdgWgjgNQhsgmhsgaQgYgFgWgMQgegQAKgbQCIguBuAzIAcANQABgJgGgJQgphGhNgLQBEgwBOgUQAcgQA6gPQAtgMAWADIACgCQgCgEgDgCQgrgag1ASQgCgGgEgFQghgrgzgbQg0gcgqgpQgtgrACg6QA8gmBDAhQBoA1BLBcQAgAoAXAtQAjBFAkBFQAXAsAJAyQANBTg5A7QgnAmgzAMQgJADgIAAIgKgBgAgMAuQgrhGg7g9Qgxg0g2guIABgCQAlAbAnAXQAYAQATASQBCBGBIA+IgyAZIgDgKgAA8gKQgzhFhCgzQgugigwggQhKgwgYhXQANgKARgDQBJgKA9AsQgUASgBAdQgCAhAPAfQAUAsAjAiQAOAOASAMQBDAvBEAwIg4ASQgDgPgKgNgAk4kBQgmgageghIgogrIAHgFQBBgtA/AmQgXArASAvQATAyAmAhIgBABQgmgfgogdg");
	this.shape_6.setTransform(296.6,-60.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AI9JBIg3AAQAVichYikIgMgXIgSAlQggA/gpAaQhTA2hNgMIgBAAQApBGAQAjQANAbADArIhLAAQASgaADgNIgdhFQgWgtgXgoQgIgGgEgHQgGgIABgEIABgDIgVgYQgRgSgEgGQgYgogrghIgVgfQgUghgggPIABgFIhHgaQhlglhhgzQgHgDgEgKQgjhDA7gtQAggUAkgFQAigEAgABIALgbQg+hXhIhMQgjgkgogfIgggYQhJgzg+g6QgIgHgEgIQgYgkgBgrQgBgMAKgKQBXg8BhAlQAPAGAMANQB4gWBQBVQA6gNA8AVQBfAfBHBIQBnBnA6CJIA0B7QAKAYAIAZIADALIgEAKQAtAuBHB1QAYAoAUAqQB8D3g4C8gAA8DoQBABBAcAuIAKAQIAYACQBGAFA+gpQBDgsASgyIAJggIADgIIgcg3Qgjg5gWgoIgCAKIgDATQgQA9guApQg1AzhHAFQgwAFgkgcQgZgSgegMIA8A7gAkqgeQgKAbAeAOQAWAMAYAFQBuAaBsAmQAhANAdAWQAlAbAsAJQANACAOgEQAzgMAngmQA5g7gNhRQgJgygXgsQgkhFgjhHQgXgtgggoQhLhchmg1QhDghg+AmQgCA6AtArQAsApA0AcQAxAbAhArQAEAFACAGQA1gSArAaQADACACAGIgCACQgWgDgtAMQg6APgbAQQhNAUhGAwQBPALApBGQAGAJgBAJIgcgNQg7gbhBAAQg7AAhBAWgAoepOIgHAFIAoArQAeAhAmAaQAoAdAmAfIARAOQA2AuAxA0QA7A9ArBIIADAKIA0gZQhKhAhChGQgTgSgYgQQgngXglgbIgRgNQgmghgTgyQgSgvAXgrQgdgSgeAAQgiAAgjAZgAlco6QgRADgNAKQAYBXBKAwQAwAgAuAiQBEAzAzBFQAKAPADAPIA2gSQhCgyhFgvQgSgMgOgOQgjgigUgsQgPgfACghQABgdAUgSQgygkg5AAQgNAAgOACg");
	this.shape_7.setTransform(309.5,-37.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#ECF75D").s().p("AiQBrIhrgCQAqgjA1goQBAgsCeh+QgMA9AKA+QACARAMANQALAPANANIAGAFQA7A4BVAGIgRALIggAWQilgfi2gDg");
	this.shape_8.setTransform(-292.3,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2D3033").s().p("AgNCtIhGgYQhmgkgCgvQgDgiAHhDIADglQA/gqBVg1IAVgNQgSArADAwQAAAGAQAZQATAhAZAaQBIBMBTAGIg1AZQhAAfhFAqQgGgFgKgDg");
	this.shape_9.setTransform(-261.5,14.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AmWC8QgzgqgBgqQgBgrARglQAQgeABgJIAFgEQAUgRAbgRQCChVCjgvIAigKIAAgCQCYg2CaAGQAVABAUAGQA8ATAeAxQhpghh1AOQh0AOhnAwIAAABQhAAVg8AdIARAIQAtgZA4gMIALgCIAAgBQBxgiB1gKQCFgJBlA8QA6AigaBCQhNgshfgIQhxgJh2ARQgqAGglAUIgSAJIAAABQghANgbAUIA/gYIAAAAIAagLQAUgKAXgBQC1gNCnApQAZAHAYAOQAQAJADASQAEAWgOAWQgNAbgiAEQgzAIgyACQiOAGiLASQgVADgTALIgGAEIAAAAQhiAshvASIgbADQhKgQgygqg");
	this.shape_10.setTransform(-212.5,-7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AkYFyIAggVIARgLQhVgHg7g3IgGgGQgNgNgLgOQgMgPgCgRQgKg+AMg9QigB9hAAvQg1AogqAiQgsAAgrABQAqgrAjgfQBBg7BZhEQBjhMBvhCQBig8ChhWIAJAFIA6grQAtggAygcQBog2B1ggIgBgDIAogOQCUgwCTAMQA1AFAvATQAZAKAQATQAiAlgLA1QAdANASAXQALAQAGAUQANA2gsAwQAbAcgJAnQgJAhgbAbQgsAug+gDQiUgIibASQgSACgQAFIgwASIgIAAIANABQgrANgpARQgSAHgQAIQgjASgnAKQgYAUixB9IgCABIgFAEIgDACIg1AlQg2gOg5gKgAjSgtQhUAzhAAqIgCAlQgHBFACAiQACAvBmAkIBGAYQALADAIAFQBEgqBBgfIAzgZQhRgGhIhMQgagcgUghQgRgZAAgGQgCguASgrIgWANgAEJklIAAACIgiAJQijAwiABVQgbARgUAQIgFAFQgBAIgQAhQgRAlABAoQABArAzAqQAyApBIARIAbgEQBvgSBigrIAAgBIAGgEQATgLAVgDQCNgSCOgGQAygCAzgHQAigFANgbQAOgUgEgWQgDgRgQgKQgYgOgZgGQingsi1ANQgXACgWAKIgaAMIAAABIg/AXQAbgTAhgPIAAgBIASgKQAngTAqgGQB2gRBxAIQBfAIBNAsQAahCg6giQhlg7iFAJQh1AJhzAiIAAACIgLACQg4ALgtAZIgRgHQA8gdBAgVIAAgCQBpgvB0gOQB1gPBpAhQgegwg8gTQgUgHgVAAIghgBQiKAAiJAxg");
	this.shape_11.setTransform(-243.8,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},25).to({state:[{t:this.shape_3},{t:this.shape_2}]},13).to({state:[]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},34).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(10));

	// Layer 1
	this.instance = new lib.Sully_34_arm("single",0);
	this.instance.setTransform(-221.4,133.6,1,1,0,0,0,146.2,69);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAAHSQghgBgOgiQgUg1gQg2QgqiYg4iRQgIgVgSgNQhNg/gwhZQgOgbgKgcQgJgagFgbQAWhmBWg7QAigYAmgOIADAEQARgDAWAEQATADAXAJQAUAHASAJQAcAJAkATQB/BEBbByQB5CYAhC7QAFAYgDAYQgIBLgyA4QAMiCgth5QhCiviUh1IgGARQAnAaAaApQBKB0AoB+QAsCNgtCLQgaBQhWAEQAjhpgOhsQgRiAgyh1QgSgsgfggQgeghgpgSQAiAgAdAjQARATAIAYQA7C+gKDJQgCAggLAgQgIAWgVAMQgTALgWAAIgNgBg");
	this.shape_12.setTransform(-265.5,126.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2D3033").s().p("AiIAIIgVgoIASgaQAjgxAOgMQAMgKBtggQAjgLAWgJQAiA1AkAzQhMAPg3A2QgbAcgSAjQgVAqADAvIACAmQg3hVgvhZg");
	this.shape_13.setTransform(-304.1,83.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#ECF75D").s().p("AhHGNQgjhHgdhLQg5iQgriRQgahaAOhbQARhyBRhTQB4hHBPAQIArAQQBTAfBNAqIAAEdQh3hMgngNIgNgEIgRiUIgPANQgIAMgDASQgIBCAIBBQAHA/ARA9QASA/AWBBQATA8AYA6QAbA9AhA7QgpAGgyAXQhEAdgrApQgZAZgMAYIgmhNg");
	this.shape_14.setTransform(-319.4,26.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ACbQAQhAgagLhFQgcimg4ifQgHgTgLgQQgmg3gxgsIgZgUQghgZgVggIgDgEQhdiJhMiUQgfg+gig6QgOgbgOgdQgXgvgVgwQgZg6gYg8QgZg+gVhBQgNgngKgmIgFgXIgDgUIAAgGIgKgvQgWhcARheQAWhzBVhNQB3hJCIABQAiAHAhAJQA3APA1AXIAcANIAABQQhNgphTggIgrgPQhSgQh4BHQhRBSgRBzQgOBbAbBZQArCTA5CRQAdBKAjBIIAlBNQAMgZAbgZQAsgoBEgeQAygWApgHQgig6gag+QgYg5gUg9QgWhAgRhCQgRg9gIg+QgHhBAIhCQACgTAJgMIAOgNIARCUIAOAEQAmAOB4BLIAABMIhIg1QhihGAMAdQAaBrAtBmQBnDhCSDDIAMAEQBOAbBNAjQAwAWAsAfQBrBLBJBtQBeCJAWCmQAHA9gMA8QgGAggSAaQglA3hBAPQgIAlgXAdQgQAVgWAPQg9AohFgXQgbAqgwAJQgNADgNAAQgeAAgcgMgAgzBFQhWA7gXBmQAGAbAJAaQAJAcAPAbQAvBZBLA/QASAPAJAVQA3CRArCYQAPA2AVA1QANAiAkABQAdAFAZgPQAUgMAIgWQALggACggQALjJg8jAQgHgYgSgTQgfgjghggQAoASAgAhQAgAgASAsQAxB3ARCAQAOBsgiBpQBVgEAbhQQAtiLgsiNQgoiAhKh0QgagpgngaIAFgRQCUB1BCCxQAuB5gNCCQAzg4AIhLQACgYgEgYQgii9h5iYQhbhyiBhEQgjgTgdgJQgSgJgTgHQgXgJgTgDQgXgEgRADIgCgEQglAOghAYgAiOhiQhwAhgLAJQgOAMgkAwIgSAaIAWApQAuBaA3BVIgCgnQgCgvAVgpQASgkAcgdQA4g2BMgNQglgzghg2QgWAKgjAKg");
	this.shape_15.setTransform(-286.5,77);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AnJD3QgfhagChgQgDhqAhhHQAcg6AwgYQAogTAkALQAEgUAIgVQAyiMBjAoQAjANAdAiIABAAQAJggAPgXQAmg7A+APQA6APAyA8QAbAhANAgIAGgDQApgPBigEQAlADAZASQANAKAQASQAWATAVArQAVArABAbQABAggeA3QguBShXARQgtAIgfgOIABAMQACA+gFAQQgTA/hTAPQgxAKgpgYIgBAFQgTA/gzAKQhLAOg6gYIABACQAAAVgZAdQggAlgxAJQgTADgSAAQh0AAg2icgAlriXQglAHgVA/QgLAggDAgQADBmAVBdQAqC3BhgSQBDgNALgcIAGgWIABgDQgsgjgfg+QgvhfgDhoQgHhKAAghIAAgLIgFgEQgMgLgQAAIgLABgAi7koQgzAKgNBzQgHA6ADA4QADBgAmBXQBACZCHgZQAQgEAVgqIABgCQgogqgghTQglhegMhpQgCg8AFgvIgQgeQgYgqgnAAIgNABgABDCuIADAEIACACIAMAIQAaAQAfgGQA1gKAKgyQADgQgCgSIgCgPQgBgSgPg5QgQg3AAgIQACgUgBgPIAEgCIgCgGIgBgBIgGgNQgRgngCgKQAZARAOAIIAFAMIAGAPIADAHQAMgdAlgaQAXgQAQgCQASgCABARQAAADgHAMQgYAVgVAeIgIALQgIAHgDAMQgDAGAAAEIABADIAAABIgFAHIABAGIADgBIABAAQABAPAIAMQAKANATADQARARAmgHQA0gKAdgwQAOgZADgYQgEiNiBALQhBALgYACIgDABIgDAMIgCAEQgQgRgbgWIgJgHQgNgfgWgeQgzhFgzAJQgoAIgNBXQgGAsACAqQALBoAcBdQAZBaA1A9IgHgKIAHAIg");
	this.shape_16.setTransform(-318.3,102.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AmXC3QgVhdgChmQADggAKggQAWg/AlgHQAXgFAPAPIAGAEIAAALQAAAhAHBKQADBoAvBfQAfA+AsAjIgCADIgGAWQgKAchDANQgJACgIAAQhUAAgningAjSCDQglhXgDhgQgDg4AGg6QANhzAzgKQAwgIAdAxIAPAeQgEAvABA8QANBpAlBeQAgBTAoAqIgBACQgVAqgRAEQgSADgSAAQhrAAg4iDgABZDBIgMgIIgDgCIgCgEQgOgQAOASQg1g9gZhaQgchdgLhoQgCgqAGgsQANhXAogIQAzgJAyBFQAXAeANAfIAIAHQAcAWAQARIACgEIADgMIADgBQAYgCBBgLQCAgLAFCNQgDAYgOAZQgdAwg0AKQgmAHgRgRQgUgDgKgNQgHgMgCgPIgBAAIgCABIgBgGIAFgHIAAgBIgBgDQAAgEADgGQADgMAIgHIAIgLQAVgeAYgVQAHgMgBgDQAAgRgSACQgRACgWAQQglAagMAdIgEgHIgFgPIgGgMQgNgIgZgRQACAKARAnIAGANIABABIACAGIgEACQAAAPgCAUQABAIAPA3QAQA5ABASIACAPQACASgDAQQgLAyg0AKIgQACQgWAAgTgMg");
	this.shape_17.setTransform(-318.8,101.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2D3033").s().p("AiYCCIgCgCQgegcgbghQgWgcAAgFQgBgiBKAyQgOg8gPhcIAagSIABgBQCPhaCZALIAPA0IAsCJIAWgwIANAGQAGAEAAAGQAAAHgKAeIgNAfQgKAXgMAVQhEBvhwAVQgJABgJAAQhAAAhPhIg");
	this.shape_18.setTransform(-316.8,83.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ECF75D").s().p("Ai2HtQgkkOgBjbQAAjXAVhqQAShnAuhZQArhKCagIIAAAAQAtgBBvA1QgUBsgCBzQgBBAADBAQgugagrgVQgsiAgNg7QgKAEgHAJQgKANABAOIAOC1QAODCAdC6QAYChAnCZQiegBiWBfIgBABIgGAEIgOhjg");
	this.shape_19.setTransform(-320.1,7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AisMUQgMgFgEgOQgghrglkUQgmkTAAjdQAAjiAVhvQAVhyA0hkQA2h1DSgKIABAAQAtgFB4A1QgJAlgHAlQhvg1gtABIgBAAQiZAIgrBKQguBZgTBnQgUBqAADZQAADZAlEOIAOBjIAGgEIABgBQCWhfCeABQgniZgYihQgdi6gOjCIgOi1QgBgOAKgNQAGgJAKgEQAOA7AsCAQArAVAtAaQACAtAEAuQgtgcgrgWQAOCbAXCXQAhDcA/DRQAZBQAaBPQAEANgGAOQgHAOgOAHQgOAGgMgFIgHgDIANghQAKgeAAgIQAAgFgGgEIgOgHIgWAxIgriJIgPg1QibgKiOBaIgBABIgaASQAPBcAOA9QhKgxACAiQAAAEAWAcQAaAhAfAdIACABQgIAMgMAFQgIADgHAAQgGAAgGgCg");
	this.shape_20.setTransform(-319.4,19.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AmdCEQgShhAChnQAFggALgeQAYg8AlAAQAXAAAPARIAGAFIgBALQgBAhAEBMQgBBpAqBpQAcBFArArIgCADIgHAVQgLAbhEAAQhhAAgijBgAjXB2QgihgABhhQgBg6AJg4QAShyAzAAQAvAAAbA3IAOAhQgHAuAAA9QAHBsAhBmQAdBaAnAzIgBABQgWAngSAAQiHAAg5ilgABODsIgLgKIgCgDIgDgFQgMgTAMAVQgyhHgVhgQgZhkgGhqQAAgrAIgrQAQhVApAAQAyAAAwBOQAVAkAMAhIAIAIQAaAcAPAUIACgEIAEgLIADAAQAYACBAABQCBANgBCNQgFAXgOAXQgfAtg0AAQgmAAgRgUQgSgHgKgRQgHgNgBgQIgBAAIgCABIgCgGIAGgGIAAgBIAAgEQAAgDADgGQADgMAIgDIAIgKQAXgaAZgRQAHgLAAgCQAAgSgSgBQgQgBgYAMQglATgNAbIgDgIIgGgQIgEgNQgOgKgXgXQABAMAPApIAGAOIAAACIACAGIgEABQAAAPgCASQAAAJANA8QANA9gBASIACAPQABATgEAPQgLAxg1AAQgfAAgagUg");
	this.shape_21.setTransform(-313.5,75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AnRC8QgbhhAChfQABhuAkhBQAeg2AxgOQAogNAjATQAGgUAIgTQA3iEBhA6QAjAVAbAnIABAAQALgfAPgUQAog1A+AcQA4AZAvBGQAaAnALAiIAHgBQApgIBhAPQAlAKAYAWQANAMAPAVQAWAYATAvQASAvAAAaQAAAgggAyQgxBNhYAAQgtAAgegUIAAAMQAABAgFAPQgVA7hTAAQgyAAgogeIgBAEQgWA8gzAAQhLAAg4gjIAAACQAAAVgaAZQgiAfgxAAQiRAAg2jAgAmgiIQgMAegEAgQgCBnARBhQAjDBBhAAQBDAAAMgbIAHgVIABgDQgqgrgchFQgrhpABhpQgEhMACghIAAgLIgFgFQgQgRgXAAQglAAgXA8gAj0jDQgJA4ABA6QAABhAhBgQA6ClCGAAQASAAAWgnIABgBQgmgzgdhaQghhmgIhsQABg9AHguIgPghQgag3gwAAQgzAAgSBygAA7DUIACAFIADADIALAKQAaAUAeAAQA1AAAMgxQAEgPgBgTIgCgPQAAgSgNg9QgNg8AAgJQADgSAAgPIAEgBIgCgGIgBgCIgFgOQgPgpgCgMQAXAXAOAKIAFANIAFAQIADAIQANgbAmgTQAXgMARABQASABgBASQAAACgHALQgYARgXAaIgIAKQgIAFgEAKQgDAGAAADIABAEIAAABIgGAGIABAGIADgBIABAAQAAAQAIANQAJARASAHQARAUAmAAQA1AAAegtQAPgXAFgXQABiNiBgNQhBgBgYgCIgDAAIgDALIgCAEQgPgUgbgcIgIgIQgLghgWgkQgvhOgzAAQgoAAgRBVQgIArABArQAGBqAYBkQAWBgAxBHIgGgLIAHAJg");
	this.shape_22.setTransform(-313.2,75.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2D3033").s().p("AidBgIgBgBQgdgigagnQgUgeAAgFQAAgiBHA9QgLg+gLhgIAagNIABgBQCThACXAoIANA3IAlCQQANgUALgWIAOAJQAFAFAAAFQAAAGgLAcIgOAgQgMAUgNATQhIBjhwAAQhGAAhXhmg");
	this.shape_23.setTransform(-310.9,60.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#ECF75D").s().p("Ak4HbQgakXAJjaQAJjbAYhoQAXhkAxhRQAuhDCbAWIAAAAQAwAHB/BaQBMA2BoBnQgcAxgZA2QgrBagPBaQhwhkhmhGQgkiKgLg9QgKACgHAIQgKALAAAPIAHC5QAGDDAVDEQARCmAfCiQidgfiaBEIgBABIgGADIgJhng");
	this.shape_24.setTransform(-299.9,-19.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AksMFQgMgHgEgOQgbhygZkeQgakcAJjfQAJjjAZhsQAahwA3hbQA6hrDUAdIAAAAQA5AFCwB7QBPA3BMBEQgWAjgUAmQhphnhMg2Qh/hagvgHIgBAAQibgWgtBDQgyBRgXBkQgXBogJDbQgJDaAZEXIAKBnIAGgDIABgBQCZhECdAfQgfiigQimQgVjCgHjFIgGi5QgBgPAKgLQAHgIALgCQALA9AkCKQBmBGBvBkQgHAsgBAsQhqhhhghHQAICfAQCcQAXDkA3DfQAVBVAXBVQADAOgHAMQgHANgOAFQgOADgNgHIgGgEIAOggQAMgcAAgIQAAgFgGgFIgNgJQgLAWgNAWIgliSIgNg3QiXgoiTBAIgBABIgbANQALBgAMBAQhIg/AAAiQAAAFAVAgQAZAnAdAiIACABQgIALgMADIgIABQgKAAgJgGg");
	this.shape_25.setTransform(-301.3,-6.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AmdCEQgShhAChnQAEgfAMgfQAXg8AlAAQAXAAAQARIAFAGIAAALQgCAhAFBLQgBBqArBoQAcBEAqArIgBACIgHAXQgLAahEAAQhhAAgjjAgAjXB1QgihfABhhQgBg5AIg5QAShxAzAAQAwAAAaA3IAPAhQgHAugBA9QAIBrAiBmQAcBaAnAyIgBACQgWAlgSABQiGgBg6ikgABPDrIgLgKIgDgDIgCgEQgNgUAMAVQgxhGgWhfQgZhkgGhqQgBgrAIgrQAQhUApAAQAygBAwBOQAWAkALAhIAIAIQAbAbAPAVIACgEQADgGABgGIADAAQAYADBAABQCBAMgBCNQgFAYgOAWQgfAtg0AAQgmgBgRgTQgSgHgKgRQgHgNgBgQIgBAAIgCABIgCgHIAGgFIAAgBIAAgEQAAgEADgFQADgMAIgDIAIgKQAXgaAZgRQAHgKAAgDQAAgSgSAAQgRgCgXAMQglAUgOAaIgDgIIgFgPIgEgOQgOgKgYgWQACALAPApIAFAPIABABIACAGIgEACQAAAOgCATQAAAIANA8QANA8AAASIACAQQAAASgDAQQgMAwg1ABQgeAAgagVg");
	this.shape_26.setTransform(-314.5,78.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AnRC7QgbhgAChfQAAhtAkhBQAeg2AxgOQAogMAkASQAFgTAIgUQA3iDBhA6QAjAUAcAnIAAABQALgfAPgUQAog1A+AcQA4AZAvBGQAaAmAMAjIAGgCQApgIBiAPQAlAKAYAWQANAMAOAVQAWAYAUAvQASAuAAAaQAAAggfAyQgxBMhYAAQgtAAgfgTIABAMQgBA/gFAPQgVA8hTAAQgxAAgogfIgCAEQgVA8gzAAQhLAAg4gjIAAADQAAAUgbAZQghAfgxAAQiRAAg3jAgAmgiIQgMAfgEAfQgCBnARBhQAkDABhAAQBDAAALgaIAHgWIACgDQgrgqgchFQgrhoABhqQgEhLABghIABgLIgGgFQgPgRgXAAQglAAgXA7gAj0jCQgJA4ABA6QAABgAhBfQA6ClCHAAQASAAAWgmIABgCQgngygdhaQghhmgIhrQAAg9AHguIgOghQgbg3gvAAQgzAAgSBygAA7DUIADAEIACADIALAKQAaAVAfAAQA1AAALgxQAEgQgBgSIgCgPQAAgSgNg9QgNg8AAgIQADgSAAgPIADgCIgCgFIAAgCIgGgOQgPgqgBgLQAXAWAOALIAFANIAFAQIADAHQANgaAmgUQAXgMAQACQASABAAARQAAADgHAKQgZASgWAZIgIAKQgIAGgEAJQgDAGAAADIABAEIAAABIgGAGIABAGIADAAIABAAQAAAPAIANQAJARATAHQAQAUAmAAQA1AAAegtQAPgWAFgYQAAiMiAgNQhBgBgYgDIgDAAQgBAGgDAGIgCAEQgPgVgagbIgIgIQgMghgVgjQgwhOgzAAQgoAAgQBUQgIArAAArQAGBqAZBkQAWBfAyBHIgGgMIAGAKg");
	this.shape_27.setTransform(-314.2,79.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2D3033").s().p("AicBgIgCgCQgdgigagmQgUgeAAgFQAAgiBIA9QgMg+gLhfIAagOIABAAQCThACXAnIANA4QASBIAUBHQAMgUALgWIAOAJQAFAFAAAFQAAAGgLAcIgOAfQgLAVgOASQhHBkhwAAQhGAAhXhmg");
	this.shape_28.setTransform(-312,64.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECF75D").s().p("AkLHZQgakWAIjaQAJjZAXhnQAXhkAxhSQAthBCaAVIAAAAQAyAHB/BaQAqAeAzAsQgoC1ALCyQhthghjhEQgmiJgMg+QgIADgHAIQgKAKAAAPIAHC4QAIDDATDDQARClAhCiQidgfiZBEIgBABIgGADIgKhng");
	this.shape_29.setTransform(-305.6,-15.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AjyMDQgNgIgDgOQgbhygakcQgbkbAIjeQAJjjAZhsQAZhvA3haQA6hrDSAcIABAAQA6AGCxB7IAtAgIgNA1IgHAcQgzgtgqgeQh/hZgygIIAAAAQiagVgtBCQgxBRgXBkQgXBngJDaQgIDaAaEWIAKBmIAGgDIABAAQCZhECdAfQghiigRilQgVjBgIjFIgGi5QAAgOAJgLQAHgIAKgCQAMA9AmCJQBjBEBtBgQADA1AHA0QhwhohnhMQAICfARCcQAYDjA3DeQAVBVAXBUQAEAOgHANQgHAMgOAFQgOADgNgHIgGgEIAOgfQALgdAAgHQAAgGgFgFIgOgJQgLAXgMAVQgUhIgShJIgNg3QiXgoiTBAIgBABIgaANQALBgAMA/QhIg+AAAiQAAAEAUAgQAaAnAdAiIACABQgIALgNADIgJABQgJAAgIgFg");
	this.shape_30.setTransform(-308.1,-2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance,p:{regX:21.8,regY:16.1,x:-345.8,y:80.7,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:13,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[]},14).to({state:[{t:this.instance,p:{regX:146.1,regY:69.2,x:-209.7,y:103.5,startPosition:0,scaleX:0.897,scaleY:0.929,skewX:-14.2,skewY:-9.4}}]},51).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-213.3,y:128.2,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:-1.5}}]},2).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-218.7,y:130.9,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{regX:146.2,regY:69,x:-221.4,y:133.6,startPosition:0,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).wait(1));

	// Layer 5
	this.instance_1 = new lib.SullyHeadclip_ShareVein("synched",0);
	this.instance_1.setTransform(-120.3,-47.3,1,1,0,0,0,206.2,142.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({regX:206.3,rotation:1.3,x:-118.2,y:-37.5,startPosition:2},0).wait(1).to({regX:206.2,rotation:3.3,x:-115.2,y:-21.8,startPosition:3},0).wait(1).to({rotation:0,skewX:4.8,skewY:4.6,x:-111,y:-18.3,startPosition:4},0).wait(2).to({scaleX:1,scaleY:1,skewX:7.4,skewY:6.4,x:-96.9,y:-17.4,startPosition:6},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.1,skewX:0,skewY:0,x:-27.5,y:-29.2,startPosition:7},0).wait(1).to({rotation:17.4,x:-3.8,y:-56.7,startPosition:8},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:17.7,skewY:17.6,x:0.9,y:-64.3,startPosition:9},0).wait(2).to({regX:206.3,scaleX:1,scaleY:1.01,skewX:17.6,skewY:17.5,x:-0.2,y:-60,startPosition:11},0).wait(14).to({rotation:17.5,skewX:0,skewY:0,x:-3.8,y:-55.6,startPosition:25},0).wait(1).to({regX:206.2,regY:142.7,scaleX:1,scaleY:1,rotation:15.9,x:-17.4,y:-44.9,startPosition:26},0).wait(1).to({rotation:14.8,x:-28,y:-31.3,startPosition:27},0).wait(1).to({scaleY:0.99,rotation:14.7,x:-32.1,y:-25.7,startPosition:28},0).wait(2).to({x:-34.3,y:-23.5,startPosition:30},0).wait(8).to({scaleX:1,scaleY:1,rotation:0,skewX:15.4,skewY:14.8,x:-24.6,y:-21.3,startPosition:38},0).wait(2).to({scaleX:1,scaleY:1,rotation:18.3,skewX:0,skewY:0,x:21.9,y:-56.9,startPosition:40},0).wait(1).to({x:33,y:-72.3,startPosition:41},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:18.7,skewY:18.4,x:37.7,y:-76.6,startPosition:42},0).wait(2).to({regY:142.8,scaleX:1,scaleY:1,skewX:18.6,x:35.6,y:-70,startPosition:44},0).wait(1).to({y:-67.8,startPosition:45},0).wait(27).to({skewX:17.3,skewY:17.1,x:28.8,y:-58.8,startPosition:72},0).wait(2).to({skewX:15.3,skewY:15,x:18.4,y:-50.3,startPosition:74},0).wait(1).to({skewX:11.5,skewY:11.3,x:-8.6,y:-39.6,startPosition:75},0).wait(1).to({regX:206.1,scaleY:1,skewX:8.2,skewY:8,x:-37.2,y:-40.8,startPosition:76},0).wait(2).to({regX:206.3,regY:142.5,scaleX:1,scaleY:1,rotation:3.6,skewX:0,skewY:0,x:-84.7,y:-43.6,startPosition:78},0).wait(1).to({regX:206.2,regY:142.6,rotation:1,x:-109.5,y:-43.7,startPosition:79},0).wait(1).to({rotation:0,x:-120.2,y:-47.2,startPosition:80},0).wait(1).to({x:-122.5,y:-49.5,startPosition:81},0).wait(2).to({x:-121.4,y:-48.4,startPosition:83},0).wait(2).to({x:-120.2,y:-47.2,startPosition:0},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.seat("synched",0);
	this.instance_2.setTransform(-224.6,93.7,1.127,1.245);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.BODY("synched",0);
	this.instance_3.setTransform(-69.1,39.9,1,1,0,0,0,336.2,372.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:1.3,x:-68.9,y:50.7},0).wait(1).to({regX:336.3,rotation:3.3,x:-68.8,y:68},0).wait(1).to({regX:336.2,rotation:0,skewX:4.8,skewY:4.6,x:-67.2,y:72.4},0).wait(2).to({scaleX:1,scaleY:1,skewX:7.4,skewY:6.4,x:-57.3,y:74.6},0).wait(1).to({regX:336.3,scaleX:1,scaleY:1,rotation:15.1,skewX:0,skewY:0,x:-0.7,y:68.1},0).wait(1).to({rotation:17.4,x:18.9,y:41.7},0).wait(1).to({regX:336.2,scaleX:1,scaleY:1.01,rotation:0,skewX:17.7,skewY:17.6,x:22.8,y:35},0).wait(2).to({scaleX:1,scaleY:1.01,skewX:17.6,skewY:17.5,x:21.7,y:38.9},0).wait(14).to({rotation:17.5,skewX:0,skewY:0,x:18.4,y:43.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.9,x:7.9,y:52.7},0).wait(1).to({rotation:14.8,x:-0.7,y:65.9},0).wait(1).to({scaleY:0.99,rotation:14.7,x:-4.5,y:70.9},0).wait(2).to({x:-6.7,y:73.1},0).wait(8).to({scaleX:1,scaleY:1,rotation:0,skewX:15.4,skewY:14.8,x:1.4,y:75.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:18.3,skewX:0,skewY:0,x:43.1,y:41.6},0).wait(1).to({x:54.1,y:26.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:18.7,skewY:18.4,x:58,y:22.4},0).wait(2).to({scaleX:1,scaleY:1,skewX:18.6,x:56.3,y:28.5},0).wait(1).to({y:30.7},0).wait(27).to({skewX:17.3,skewY:17.1,x:51.7,y:39.2},0).wait(2).to({skewX:15.3,skewY:15,x:44.8,y:46.8},0).wait(1).to({skewX:11.5,skewY:11.3,x:23.9,y:55.5},0).wait(1).to({scaleY:1,skewX:8.2,skewY:8,x:0.8,y:52.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:3.6,skewX:0,skewY:0,x:-39,y:46.5},0).wait(1).to({rotation:1,x:-59.7,y:44.2},0).wait(1).to({rotation:0,x:-69,y:39.9},0).wait(1).to({x:-71.3,y:37.6},0).wait(2).to({x:-70.2,y:38.7},0).wait(2).to({x:-69,y:39.9},0).wait(1));

	// Layer 6
	this.instance_4 = new lib.SullyArmR("single",1);
	this.instance_4.setTransform(255.7,24.9,1,1,0,0,0,123.5,78.9);

	this.instance_5 = new lib.Sully_34_arm("single",17);
	this.instance_5.setTransform(261.7,203.2,0.996,1.002,0,-12.3,165.8,146.2,69.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:255.7,y:24.9,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]}).to({state:[{t:this.instance_4,p:{regX:123.4,rotation:1.3,x:255.8,y:42.8,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},2).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:3.3,x:256,y:71.6,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:257.5,y:83.3,skewX:4.8,skewY:4.6,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:9.7,rotation:0,x:156.4,y:63.5,skewX:7.4,skewY:-1.6,regY:59.2,scaleX:1.011,scaleY:1.001,startPosition:5}}]},2).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:15.1,x:316.3,y:138.2,skewX:0,skewY:0,regY:78.8,scaleX:0.999,scaleY:0.999,startPosition:6}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:17.4,x:333.1,y:124.3,skewX:0,skewY:0,regY:78.9,scaleX:0.999,scaleY:0.999,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-10.6,rotation:0,x:206.4,y:85.6,skewX:20,skewY:19.9,regY:86.8,scaleX:0.997,scaleY:1.01,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:335.4,y:122,skewX:17.6,skewY:17.5,regY:78.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},2).to({state:[{t:this.instance_4,p:{regX:-15.3,rotation:0,x:203.9,y:78.5,skewX:19.6,skewY:19.5,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:335.4,y:122,skewX:17.6,skewY:17.5,regY:78.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-15.3,rotation:0,x:203.9,y:78.5,skewX:19.6,skewY:19.5,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:335.4,y:122,skewX:17.6,skewY:17.5,regY:78.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-15.3,rotation:0,x:203.9,y:78.5,skewX:19.6,skewY:19.5,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:335.4,y:122,skewX:17.6,skewY:17.5,regY:78.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-15.3,rotation:0,x:203.9,y:78.5,skewX:19.6,skewY:19.5,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:335.4,y:122,skewX:17.6,skewY:17.5,regY:78.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-15.3,rotation:0,x:203.9,y:78.5,skewX:19.6,skewY:19.5,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:335.4,y:122,skewX:17.6,skewY:17.5,regY:78.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-15.3,rotation:0,x:203.9,y:78.5,skewX:19.6,skewY:19.5,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-15.2,rotation:0,x:204,y:78.6,skewX:17.9,skewY:17.8,regY:76.9,scaleX:0.998,scaleY:1.006,startPosition:2}}]},2).to({state:[{t:this.instance_4,p:{regX:-14.6,rotation:16,x:204.5,y:73.5,skewX:0,skewY:0,regY:66.8,scaleX:0.998,scaleY:1.006,startPosition:2}}]},1).to({state:[{t:this.instance_4,p:{regX:-16.1,rotation:0,x:195.1,y:70.8,skewX:20.1,skewY:8.8,regY:60.1,scaleX:1.016,scaleY:1.175,startPosition:3}}]},1).to({state:[{t:this.instance_4,p:{regX:-45.8,rotation:23.5,x:159.2,y:76.8,skewX:0,skewY:0,regY:54.8,scaleX:0.998,scaleY:0.998,startPosition:3}}]},1).to({state:[{t:this.instance_4,p:{regX:-45.8,rotation:0,x:151.2,y:81.7,skewX:27.3,skewY:27.2,regY:54.8,scaleX:0.998,scaleY:0.992,startPosition:3}}]},1).to({state:[{t:this.instance_4,p:{regX:-45.9,rotation:0,x:149,y:83.9,skewX:29.6,skewY:29.4,regY:54.8,scaleX:0.998,scaleY:0.992,startPosition:3}}]},2).to({state:[{t:this.instance_4,p:{regX:-45.8,rotation:0,x:161.4,y:86.1,skewX:26.1,skewY:27.1,regY:54.8,scaleX:0.992,scaleY:0.997,startPosition:3}}]},8).to({state:[{t:this.instance_4,p:{regX:-45.8,rotation:30.9,x:202.2,y:62.4,skewX:0,skewY:0,regY:54.9,scaleX:0.998,scaleY:0.998,startPosition:7}}]},2).to({state:[{t:this.instance_4,p:{regX:-45.8,rotation:30.9,x:213.2,y:47,skewX:0,skewY:0,regY:54.9,scaleX:0.998,scaleY:0.998,startPosition:4}}]},1).to({state:[{t:this.instance_4,p:{regX:-45.8,rotation:31.1,x:217,y:43.1,skewX:0,skewY:0,regY:54.8,scaleX:0.995,scaleY:1.035,startPosition:4}}]},1).to({state:[{t:this.instance_4,p:{regX:-45.7,rotation:0,x:215.5,y:49.1,skewX:31.1,skewY:30.9,regY:54.6,scaleX:0.996,scaleY:1.018,startPosition:4}}]},2).to({state:[{t:this.instance_4,p:{regX:-45.7,rotation:0,x:215.4,y:51.5,skewX:31.1,skewY:30.9,regY:54.8,scaleX:0.996,scaleY:1,startPosition:4}}]},1).to({state:[{t:this.instance_5,p:{regY:69.2,scaleX:0.996,scaleY:1.002,skewX:-12.3,skewY:165.8,x:261.7,y:203.2,startPosition:17}}]},27).to({state:[{t:this.instance_5,p:{regY:69.1,scaleX:0.997,scaleY:1.003,skewX:-31.2,skewY:146.9,x:294.7,y:187.5,startPosition:18}}]},2).to({state:[{t:this.instance_4,p:{regX:-45.7,rotation:0,x:184.3,y:56.5,skewX:24,skewY:23.9,regY:54.8,scaleX:0.995,scaleY:1,startPosition:8}}]},1).to({state:[{t:this.instance_4,p:{regX:-45.7,rotation:0,x:160.9,y:44.1,skewX:25.7,skewY:-1.5,regY:54.9,scaleX:0.92,scaleY:0.946,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:-18.3,rotation:0,x:147,y:1.3,skewX:7.4,skewY:1.1,regY:37.3,scaleX:1.004,scaleY:1.002,startPosition:1}}]},2).to({state:[{t:this.instance_4,p:{regX:123.4,rotation:1,x:265,y:34.8,skewX:0,skewY:0,regY:79,scaleX:1,scaleY:1,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:255.7,y:24.9,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:253.4,y:22.6,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},1).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:254.5,y:23.7,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},2).to({state:[{t:this.instance_4,p:{regX:123.5,rotation:0,x:255.7,y:24.9,skewX:0,skewY:0,regY:78.9,scaleX:1,scaleY:1,startPosition:1}}]},2).wait(1));

	// Layer 32
	this.instance_6 = new lib.Sully_34_arm("single",14);
	this.instance_6.setTransform(-237.4,169.4,1,1,-2.2,0,0,146.2,69);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AmdCEQgShhAChnQAFggALgeQAYg8AlAAQAXAAAPARIAGAFIgBALQgBAhAEBMQgBBpAqBpQAcBFArArIgCADIgHAVQgLAbhEAAQhhAAgijBgAjXB2QgihgABhhQgBg6AJg4QAShyAzAAQAvAAAbA3IAOAhQgHAuAAA9QAHBsAhBmQAdBaAnAzIgBABQgWAngSAAQiHAAg5ilgABODsIgLgKIgCgDIgDgFQgMgTAMAVQgyhHgVhgQgZhkgGhqQAAgrAIgrQAQhVApAAQAyAAAwBOQAVAkAMAhIAIAIQAaAcAPAUIACgEIAEgLIADAAQAYACBAABQCBANgBCNQgFAXgOAXQgfAtg0AAQgmAAgRgUQgSgHgKgRQgHgNgBgQIgBAAIgCABIgCgGIAGgGIAAgBIAAgEQAAgDADgGQADgMAIgDIAIgKQAXgaAZgRQAHgLAAgCQAAgSgSgBQgQgBgYAMQglATgNAbIgDgIIgGgQIgEgNQgOgKgXgXQABAMAPApIAGAOIAAACIACAGIgEABQAAAPgCASQAAAJANA8QANA9gBASIACAPQABATgEAPQgLAxg1AAQgfAAgagUg");
	this.shape_31.setTransform(-313.5,75);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AnRC8QgbhhAChfQABhuAkhBQAeg2AxgOQAogNAjATQAGgUAIgTQA3iEBhA6QAjAVAbAnIABAAQALgfAPgUQAog1A+AcQA4AZAvBGQAaAnALAiIAHgBQApgIBhAPQAlAKAYAWQANAMAPAVQAWAYATAvQASAvAAAaQAAAgggAyQgxBNhYAAQgtAAgegUIAAAMQAABAgFAPQgVA7hTAAQgyAAgogeIgBAEQgWA8gzAAQhLAAg4gjIAAACQAAAVgaAZQgiAfgxAAQiRAAg2jAgAmgiIQgMAegEAgQgCBnARBhQAjDBBhAAQBDAAAMgbIAHgVIABgDQgqgrgchFQgrhpABhpQgEhMACghIAAgLIgFgFQgQgRgXAAQglAAgXA8gAj0jDQgJA4ABA6QAABhAhBgQA6ClCGAAQASAAAWgnIABgBQgmgzgdhaQghhmgIhsQABg9AHguIgPghQgag3gwAAQgzAAgSBygAA7DUIACAFIADADIALAKQAaAUAeAAQA1AAAMgxQAEgPgBgTIgCgPQAAgSgNg9QgNg8AAgJQADgSAAgPIAEgBIgCgGIgBgCIgFgOQgPgpgCgMQAXAXAOAKIAFANIAFAQIADAIQANgbAmgTQAXgMARABQASABgBASQAAACgHALQgYARgXAaIgIAKQgIAFgEAKQgDAGAAADIABAEIAAABIgGAGIABAGIADgBIABAAQAAAQAIANQAJARASAHQARAUAmAAQA1AAAegtQAPgXAFgXQABiNiBgNQhBgBgYgCIgDAAIgDALIgCAEQgPgUgbgcIgIgIQgLghgWgkQgvhOgzAAQgoAAgRBVQgIArABArQAGBqAYBkQAWBgAxBHIgGgLIAHAJg");
	this.shape_32.setTransform(-313.2,75.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#2D3033").s().p("AidBgIgBgBQgdgigagnQgUgeAAgFQAAgiBHA9QgLg+gLhgIAagNIABgBQCThACXAoIANA3IAlCQQANgUALgWIAOAJQAFAFAAAFQAAAGgLAcIgOAgQgMAUgNATQhIBjhwAAQhGAAhXhmg");
	this.shape_33.setTransform(-310.9,60.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ECF75D").s().p("AGQIZQADgFABgHQABgOgJgMIgggoQmUnok4jXQgmiKgLg+QgKADgHAIQgKALAAAOIAHC5QAGDGAVDCQARClAhCjQifgfiaBEIgBAAIgGADIgJhmQgakXAJjbQAJjbAYhnQAXhkAxhSQAuhCCbAVIAAAAQAyAIB/BaQB+BaDKDfQDNDdCQCsQCRCsAkAoIg3A/QhnBxgrgJQALASAAANIgBAMQgCAEgKAAQgIAAgohRgAKiEuIATAeIAAAFIgBAEIgSgng");
	this.shape_34.setTransform(-263.8,-15.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AqkMFQgNgHgDgOQgbhygakeQgakcAJjfQAJjjAahsQAZhwA3hbQA7hrDUAdIAAAAQA6AFCxB7QCvB7CiC+QCjC9CYCzQCRCuAqA6QADAigDAOIgGAMIgagmQAQAbAIAQIgIAPQgMgMgVgXQgkgpiRisQiQiqjNjfQjKjfh+haQh/hagygHIAAAAQibgWguBDQgxBRgXBkQgYBogJDbQgJDaAaEXIAJBnIAGgDIABgBQCahECfAfQghiigRimQgVjCgGjFIgHi5QAAgPAKgLQAHgIAKgCQALA9AmCKQE4DYGUHoIAgAnQAJAMgBAPQgBAGgDAGQgDAGgGAFQgLAKgOgBQgPgCgJgLQmDnbkwjgQAICfARCcQAXDkA2DfQAVBVAXBVQAEAOgHAMQgHANgPAFQgOADgMgHIgGgEIAOggQALgcAAgIQAAgFgFgFIgOgJQgLAWgNAWIgliSIgNg3QiZgoiTBAIgBABIgaANQALBgALBAQhHg/AAAiQAAAFAUAgQAaAnAdAiIABABQgHALgNADIgIABQgKAAgIgGgAL2GgIAEgNQAGARgEAAQgCAAgEgEg");
	this.shape_35.setTransform(-263.6,-6.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AmdCEQgShhAChnQAEgfAMgfQAXg8AlAAQAXAAAQARIAFAGIAAALQgCAhAFBLQgBBqArBoQAcBEAqArIgBACIgHAXQgLAahEAAQhhAAgjjAgAjXB1QgihfABhhQgBg5AIg5QAShxAzAAQAwAAAaA3IAPAhQgHAugBA9QAIBrAiBmQAcBaAnAyIgBACQgWAlgSABQiGgBg6ikgABPDrIgLgKIgDgDIgCgEQgNgUAMAVQgxhGgWhfQgZhkgGhqQgBgrAIgrQAQhUApAAQAygBAwBOQAWAkALAhIAIAIQAbAbAPAVIACgEQADgGABgGIADAAQAYADBAABQCBAMgBCNQgFAYgOAWQgfAtg0AAQgmgBgRgTQgSgHgKgRQgHgNgBgQIgBAAIgCABIgCgHIAGgFIAAgBIAAgEQAAgEADgFQADgMAIgDIAIgKQAXgaAZgRQAHgKAAgDQAAgSgSAAQgRgCgXAMQglAUgOAaIgDgIIgFgPIgEgOQgOgKgYgWQACALAPApIAFAPIABABIACAGIgEACQAAAOgCATQAAAIANA8QANA8AAASIACAQQAAASgDAQQgMAwg1ABQgeAAgagVg");
	this.shape_36.setTransform(-314.5,78.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AnRC7QgbhgAChfQAAhtAkhBQAeg2AxgOQAogMAkASQAFgTAIgUQA3iDBhA6QAjAUAcAnIAAABQALgfAPgUQAog1A+AcQA4AZAvBGQAaAmAMAjIAGgCQApgIBiAPQAlAKAYAWQANAMAOAVQAWAYAUAvQASAuAAAaQAAAggfAyQgxBMhYAAQgtAAgfgTIABAMQgBA/gFAPQgVA8hTAAQgxAAgogfIgCAEQgVA8gzAAQhLAAg4gjIAAADQAAAUgbAZQghAfgxAAQiRAAg3jAgAmgiIQgMAfgEAfQgCBnARBhQAkDABhAAQBDAAALgaIAHgWIACgDQgrgqgchFQgrhoABhqQgEhLABghIABgLIgGgFQgPgRgXAAQglAAgXA7gAj0jCQgJA4ABA6QAABgAhBfQA6ClCHAAQASAAAWgmIABgCQgngygdhaQghhmgIhrQAAg9AHguIgOghQgbg3gvAAQgzAAgSBygAA7DUIADAEIACADIALAKQAaAVAfAAQA1AAALgxQAEgQgBgSIgCgPQAAgSgNg9QgNg8AAgIQADgSAAgPIADgCIgCgFIAAgCIgGgOQgPgqgBgLQAXAWAOALIAFANIAFAQIADAHQANgaAmgUQAXgMAQACQASABAAARQAAADgHAKQgZASgWAZIgIAKQgIAGgEAJQgDAGAAADIABAEIAAABIgGAGIABAGIADAAIABAAQAAAPAIANQAJARATAHQAQAUAmAAQA1AAAegtQAPgWAFgYQAAiMiAgNQhBgBgYgDIgDAAQgBAGgDAGIgCAEQgPgVgagbIgIgIQgMghgVgjQgwhOgzAAQgoAAgQBUQgIArAAArQAGBqAZBkQAWBfAyBHIgGgMIAGAKg");
	this.shape_37.setTransform(-314.2,79.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2D3033").s().p("AicBgIgCgCQgdgigagmQgUgeAAgFQAAgiBIA9QgMg+gLhfIAagOIABAAQCThACXAnIANA4QASBIAUBHQAMgUALgWIAOAJQAFAFAAAFQAAAGgLAcIgOAfQgLAVgOASQhHBkhwAAQhGAAhXhmg");
	this.shape_38.setTransform(-312,64.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#ECF75D").s().p("AGRIYQADgGABgHQABgOgJgMIghgnQmUnmk5jXQgmiJgLg+QgKADgHAIQgLAKABAPIAHC4QAHDFAVDBQARClAiCiQiggfiYBEIgBABIgHADIgJhnQgbkWAJjaQAIjZAYhnQAWhkAxhSQAuhBCbAVIABAAQAxAHB/BaQB/BZDLDfQDNDcCRCrQCRCsAjAoQgVAagiAkQhmBxgrgJQALASAAANIgBAMQgCAEgKAAQgIAAgohQgAKiEtIATAeIAAAFIAAAEIgTgng");
	this.shape_39.setTransform(-265,-11.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AqjMDQgNgIgDgOQgbhygakcQgbkbAIjeQAJjjAZhsQAZhvA3haQA6hrDUAcIABAAQA6AGCxB7QCvB6CjC9QCjC8CYCzQCRCtArA5QADAjgDAOIgFAMIgbgmIAYAqIgHAPQgNgLgVgYQgkgoiRirQiRiqjNjeQjLjeh+haQh/hZgygIIAAAAQicgVgtBCQgxBRgXBkQgXBngJDaQgIDaAaEWIAKBmIAGgDIABAAQCZhECfAfQghiigRilQgVjBgIjFIgHi5QAAgOAKgLQAHgIAKgCQAMA9AmCJQE5DXGUHmIAhAoQAJALgBAPQgBAHgDAFQgDAGgGAGQgMAJgOgBQgOgCgKgLQmEnZkwjgQAICfARCcQAYDjA3DeQAVBVAXBUQAEAOgHANQgHAMgOAFQgOADgNgHIgGgEIAOgfQALgdAAgHQAAgGgFgFIgOgJQgLAXgMAVQgUhIgShJIgNg3QiZgoiTBAIgBABIgaANQALBgAMA/QhIg+AAAiQAAAEAUAgQAaAnAdAiIACABQgIALgNADIgJABQgJAAgIgFgAL2GeIAEgNQAGARgEAAQgCAAgEgEg");
	this.shape_40.setTransform(-264.8,-2.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AggANQgEgKABgDQAAgjAjACQAkABAAAgQAAANgLALQgLAKgOAAQgYAAgIgVg");
	this.shape_41.setTransform(-312.5,-13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{scaleX:1,scaleY:1,rotation:-2.2,skewX:0,skewY:0,x:-237.4,y:169.4,startPosition:14,regY:69,regX:146.2}}]},7).to({state:[{t:this.instance_6,p:{scaleX:1.015,scaleY:0.996,rotation:0,skewX:-1.7,skewY:-10.4,x:-221.4,y:133.6,startPosition:9,regY:69,regX:146.2}}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.instance_6,p:{scaleX:1,scaleY:1.006,rotation:0,skewX:0.4,skewY:0,x:-219.1,y:131.4,startPosition:9,regY:69,regX:146.2}}]},13).to({state:[{t:this.instance_6,p:{scaleX:1,scaleY:1.006,rotation:0,skewX:0.2,skewY:0,x:-220.5,y:132.4,startPosition:9,regY:69,regX:146.2}}]},1).to({state:[{t:this.shape_41},{t:this.instance_6,p:{scaleX:0.998,scaleY:1.003,rotation:0,skewX:1.8,skewY:4,x:-223.2,y:140.3,startPosition:15,regY:69.1,regX:146.2}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.998,scaleY:1.003,rotation:0,skewX:0.8,skewY:2.9,x:-237.5,y:150.3,startPosition:11,regY:69.1,regX:146.2}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.996,scaleY:0.999,rotation:0,skewX:-1.3,skewY:1.2,x:-237.3,y:151.2,startPosition:11,regY:69.2,regX:146.3}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.996,scaleY:0.999,rotation:0,skewX:-1.3,skewY:0.4,x:-238.5,y:153.6,startPosition:11,regY:69.2,regX:146.3}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.997,scaleY:0.996,rotation:0,skewX:3.9,skewY:5.4,x:-238.3,y:154.2,startPosition:11,regY:69,regX:146.2}}]},8).to({state:[{t:this.instance_6,p:{scaleX:0.998,scaleY:1.002,rotation:0,skewX:4.3,skewY:6.4,x:-197.9,y:107.5,startPosition:16,regY:69.1,regX:146.2}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.998,scaleY:1.002,rotation:0,skewX:4.3,skewY:6.4,x:-186.8,y:123.7,startPosition:12,regY:69.1,regX:146.2}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.998,scaleY:1.007,rotation:0,skewX:4.6,skewY:8.5,x:-183.7,y:120.2,startPosition:12,regY:69.2,regX:146.1}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.997,scaleY:1.004,rotation:0,skewX:3.4,skewY:7,x:-184.9,y:125.9,startPosition:12,regY:69.1,regX:146.3}}]},2).to({state:[{t:this.instance_6,p:{scaleX:0.997,scaleY:1.003,rotation:0,skewX:4.6,skewY:6.4,x:-185,y:128.2,startPosition:12,regY:69.2,regX:146.2}}]},1).to({state:[{t:this.instance_6,p:{scaleX:0.997,scaleY:1.003,rotation:0,skewX:3.3,skewY:5.2,x:-187.8,y:141.9,startPosition:17,regY:69.1,regX:146.2}}]},27).to({state:[{t:this.instance_6,p:{scaleX:0.997,scaleY:1.003,rotation:0,skewX:1.3,skewY:3.1,x:-191.6,y:138.1,startPosition:18,regY:69.1,regX:146.2}}]},2).to({state:[{t:this.instance_6,p:{scaleX:1.135,scaleY:0.898,rotation:0,skewX:-3.1,skewY:-0.4,x:-176.3,y:150.5,startPosition:19,regY:69.2,regX:146.2}}]},1).to({state:[]},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446,-332.9,727,745.7);


(lib.SullyNest_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 31
	this.instance = new lib.seat("synched",0);
	this.instance.setTransform(-224.6,93.7,1.127,1.245);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(104).to({startPosition:0,_off:false},0).to({_off:true},35).wait(157));

	// Layer 30
	this.instance_1 = new lib.MEL3QHATcopy("synched",0);
	this.instance_1.setTransform(-144.2,-219.8,0.999,0.983,0,3.3,1.3,118.9,80.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(108).to({startPosition:0,_off:false},0).wait(2).to({scaleY:0.98,skewX:3.4,x:-143.3,y:-216.5},0).wait(2).to({y:-218.3},0).wait(9).to({regX:61.3,regY:157.9,scaleY:0.98,skewX:6.1,skewY:3.5,x:-202.5,y:-142.4},0).wait(2).to({regX:61.2,regY:157.8,scaleY:0.98,skewX:7.6,skewY:5,x:-200.8,y:-140.7},0).wait(1).to({regX:61.4,regY:157.7,scaleX:1,scaleY:0.97,skewX:9.9,skewY:7.2,x:-196.8,y:-138},0).wait(2).to({regX:61.2,regY:157.8,scaleX:1,scaleY:0.97,skewX:10.7,skewY:7.5,x:-195.5,y:-136.1},0).wait(5).to({regX:61.3,scaleX:1,scaleY:0.98,skewX:9,skewY:6.3,x:-198.2,y:-138.2},0).wait(2).to({regX:61.2,scaleX:1,scaleY:0.98,skewX:8.7,x:-205.8,y:-146.1},0).to({_off:true},2).wait(161));

	// Layer 1
	this.instance_2 = new lib.Sully_34_arm("single",0);
	this.instance_2.setTransform(-221.4,133.6,1,1,0,0,0,146.2,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({skewY:-0.9,y:129.4},0).wait(1).to({regX:11.2,regY:35.2,scaleX:1.01,scaleY:0.99,skewX:-6.3,skewY:-6.6,x:-356.2,y:87.8},0).wait(1).to({regX:146.2,regY:69,scaleX:1.04,scaleY:1,skewX:0,skewY:0,x:-210.1,y:153,startPosition:1},0).wait(2).to({regX:76.2,regY:29.9,scaleX:1,rotation:5.1,x:-288.4,y:114.8,startPosition:6},0).wait(1).to({regX:110,regY:-101.8,scaleX:1,scaleY:1,rotation:0,skewX:2,skewY:5.3,x:-247.9,y:-24.3,startPosition:7},0).wait(1).to({regX:146.2,regY:69,scaleX:1,scaleY:1,rotation:2.3,skewX:0,skewY:0,x:-220.1,y:137.2,startPosition:3},0).wait(2).to({regX:146.3,scaleY:1,rotation:0,skewX:2.4,skewY:2.3,x:-219.6,y:138.6},0).wait(2).to({y:136.8},0).wait(9).to({regX:49.3,regY:5.3,skewX:3.3,x:-313.9,y:71.8},0).wait(2).to({regX:168.7,regY:-182.4,scaleX:1,skewX:3.4,skewY:3.5,x:-181.7,y:-107.3},0).wait(1).to({regX:184.4,regY:-192.2,scaleX:1,scaleY:1,skewX:3.5,skewY:5.4,x:-163.4,y:-111.4},0).wait(2).to({regX:172.2,regY:-189,skewX:3.3,skewY:6.1,x:-174.6,y:-107.8},0).wait(5).to({regX:169.8,regY:-183.9,scaleX:1,skewX:3.2,skewY:5.1,x:-180.2,y:-105.3},0).wait(2).to({regX:42.6,regY:3,scaleX:1,scaleY:1,skewX:2.6,skewY:3.2,x:-322.3,y:66.3},0).wait(2).to({regX:146.2,regY:69,scaleX:1,scaleY:0.99,skewX:0.3,skewY:0,x:-214.6,y:150.6,startPosition:2},0).wait(1).to({regY:68.7,scaleX:1.03,scaleY:1,skewX:0.2,skewY:-4.8,x:-221.1,y:160.3,startPosition:8},0).wait(1).to({regY:69,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-221.3,y:147.1,startPosition:1},0).wait(2).to({regX:21.2,regY:19.6,scaleX:1,scaleY:1.01,skewX:-5.6,skewY:-2.2,x:-347.9,y:79.9,startPosition:0},0).wait(2).to({regX:146.2,regY:69,scaleX:1,scaleY:1,skewX:0,skewY:0,x:-221.6,y:132.9},0).wait(1).to({scaleY:1,x:-221.3,y:133.6},0).wait(154));

	// Layer 5
	this.instance_3 = new lib.SullyHeadclip_idle("synched",0);
	this.instance_3.setTransform(-120.3,-47.3,1,1,0,0,0,206.2,142.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({scaleY:1,skewX:-0.1,x:-122.5,y:-52.5,startPosition:99},0).wait(1).to({scaleY:1.01,skewX:-0.3,x:-124.1,y:-55.9,startPosition:100},0).wait(2).to({scaleY:1,skewX:0,x:-123.7,y:-53.7,startPosition:102},0).wait(1).to({scaleY:1,skewX:0.1,x:-121.4,y:-49,startPosition:103},0).wait(1).to({scaleY:0.99,skewX:0.8,x:-116.5,y:-38.3,startPosition:104},0).wait(2).to({scaleY:0.99,skewX:1.3,x:-112.6,y:-29.5,startPosition:106},0).wait(1).to({scaleY:0.99,skewX:1.7,x:-109,y:-24.1,startPosition:107},0).wait(1).to({scaleY:0.98,skewX:2,x:-106.8,y:-20.6,startPosition:108},0).wait(2).to({scaleY:0.98,skewX:2.1,x:-106.2,y:-18.4,startPosition:110},0).wait(2).to({y:-20.2,startPosition:112},0).wait(9).to({scaleY:0.98,skewX:2.5,x:-104.4,y:-18.1,startPosition:121},0).wait(2).to({scaleY:0.98,skewX:2.6,x:-102.6,y:-17.6,startPosition:123},0).wait(1).to({scaleY:0.97,skewX:2.8,x:-101,y:-13.6,startPosition:124},0).wait(2).to({skewX:2.9,x:-99.9,y:-11.8,startPosition:126},0).wait(5).to({scaleY:0.97,skewX:2.6,x:-102.1,y:-15.2,startPosition:131},0).wait(2).to({scaleY:0.98,skewX:2.4,x:-107.4,y:-20.3,startPosition:133},0).wait(2).to({scaleY:0.99,skewX:0.3,x:-117.4,y:-34.8,startPosition:135},0).wait(1).to({scaleY:1,skewX:0.2,x:-118.5,y:-41.4,startPosition:136},0).wait(1).to({scaleY:1,skewX:0,x:-120.2,y:-47.2,startPosition:137},0).wait(2).to({scaleY:1.01,skewX:-0.1,x:-122.4,y:-52.3,startPosition:139},0).wait(2).to({regX:206.3,scaleY:1,skewX:0,x:-120.7,y:-48.3,startPosition:141},0).wait(1).to({regX:206.2,scaleY:1,x:-120.2,y:-47.2,startPosition:142},0).wait(154));

	// Layer 2
	this.instance_4 = new lib.seat("synched",0);
	this.instance_4.setTransform(-224.6,93.7,1.127,1.245);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(99).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(154));

	// Layer 3
	this.instance_5 = new lib.MEL3QHAT("synched",0);
	this.instance_5.setTransform(-164.6,-250.1,1,1,1.3,0,0,118.9,80.2);

	this.instance_6 = new lib.MEL3QTIE("synched",0);
	this.instance_6.setTransform(41.1,144.4,0.999,0.999,13.5,0,0,23.3,21.9);

	this.instance_7 = new lib.MEL3QTIE_NECK("synched",0);
	this.instance_7.setTransform(-79.5,94.2,1,1,1.3,0,0,255.2,95);

	this.instance_8 = new lib.Sully_34_body("synched",0);
	this.instance_8.setTransform(-33.1,85.4,1,1,0,0,0,300.3,327.3);

	this.instance_9 = new lib.MEL3QHAIRBACK2("synched",0);
	this.instance_9.setTransform(45.7,-192.7,1,1,1.3,0,0,84.3,91.5);

	this.instance_10 = new lib.MEL3QHAIRBACK1("synched",0);
	this.instance_10.setTransform(-300.5,-92.8,1,1,1.3,0,0,102.4,85.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283B4A").s().p("AtGDXIAIgDIgBADIgDAAIgCAAIgCAAgAJgBTIAGABIgDAAgAi6iYIAEAAIABAAIABAEgANCjDIADgBQAAAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAIgHACQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAgAmZjVIABgBIABABg");
	this.shape.setTransform(-133.4,91.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56BBFE").s().p("AglCGIgBACIgBAAgAAoiHIAAABIgDACg");
	this.shape_1.setTransform(-129.9,-148);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAADIAAgCg");
	this.shape_2.setTransform(-109.8,-166.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADgSuQgBgDACgDIgBAIgARmQYIADAAIgCAAgAxoPgIABAAIgBAAgAiWyuIANgBIgLAEIgCgDg");
	this.shape_3.setTransform(-78.4,-49.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5763FF").s().p("AB+DAIAEAAIgBAAIgDAAgAh2BLIACAAIgEABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAgAiBi7QAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIgBAIIgDgEg");
	this.shape_4.setTransform(-151.3,-139.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFVFCQhLhBgPhiQgUh8AGh5QAHgFADgGQAAgcAXgqQAKgRAOgRQBdAHBfAOQBOAMBLgGIAJAAIAdALIAgANIgBAEIAAABIAAAFQAFAGAEAGIAAABIAEAHIAAACIgDACQgkAhgugWIAAgCQiShCiYAfQgEAAgEAEQgUAKgMAVIgCAEQABAHADAEQA0B1CRAWQBfAOBbAlQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAADQgDAHgCAGQgBAFgBACIgDADQgNAIgNALIgBAAIgJAGIgBACQhkABhigcQhsghguBWIABAEIADAVIABAHQAbAcAjAYQBOA2BYAGIABAJIgNAIQglASgjAAQgxAAgrgkgAJNEhQgJgFgJgCIgxgEQhRgLhJgoIgBgEIgDgCIgBAAQgOgNgIgNIgHgHIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgJIAFgBQAvgFAvAGIAzAIQAcAEAaAIQB8AiAvhxQAEgLgIgIQgngng6gNIABgBQijgfh2hhIABgIQB0guB9A8QB1A6BBhdQgBgJgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgCQgPgTg0gKQgSgHgWgGIhKgUQghgKAAgIQAAgYA7gdQATgKBCgbIAKAAQBSACA4BvIARAiIgBAZIAAANIgBAEIACAAIAAABIACACQAzDJiYCbQg3A1hDAtgAGtj5QgFgGABgIQgBgGgCAAQggAAgkAHQBGg6BbgWIgIAGQglAcgBAlQAAAbAHAKIADADQgmgFgMgNgAs0jvIgHgJIAUARQgIgDgFgFgAqWlBQgUAAgRAKIgUAJQgFAAgTgXIAcgEQAugEAiAFQAkAFAAAOQAAAGgFAJQgXgagjgBg");
	this.shape_5.setTransform(-197.5,-149.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9F2F2").s().p("AiFJLIADAAIgDABgACEpLIABABIgCABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAg");
	this.shape_6.setTransform(-346.6,-109.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#56BBFE").s().p("AglCHIAAABIgBABgAAniIIAAACIgCABg");
	this.shape_7.setTransform(-132.6,-153.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5763FF").s().p("AB/DAIAEAAIgBABIgDgBgAh2BLIADAAIgFABQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAgAiBi7QgBgBAAgBQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAIgBAIIgCgDg");
	this.shape_8.setTransform(-154,-145.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AFXFCQhLhBgQhiQgUh9AGh4QAHgFACgHQAAgcAXgpQAKgSAOgRQBdAHBfAOQBOAMBLgGIAJAAIAdALIAgANIgBAEIAAABIAAAGQAFAFAEAGIAAABIAEAHIAAACIgDACQgjAhgvgWIAAgCQiShCiYAfQgEAAgEAEQgUAKgMAVIgCAEQABAHADAEQA0B1CSAXQBfAOBbAlQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIABADQgEAHgBAGQgBAFgCACIgCADQgOAIgMALIgBAAIgJAGIgCACQhjABhjgcQhsghgtBWIABAEIADAVIABAHQAbAdAjAYQBOA2BYAGIACAJIgNAIQgmATgiAAQgxAAgsgmgAJPEiQgJgFgJgCIgxgEQhRgLhJgpIgBgDIgDgDIgBAAQgOgNgIgNIgHgHIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAFgIIAEgCQAwgFAvAHIAyAHQAdAEAaAIQB8AiAvhxQAEgLgJgIQgngng6gOIABAAQijggh2hgIAAgJQB0guB9A9QB1A5BBhdQgBgJgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgIIgCgDQgPgTg0gKQgSgHgWgGIhKgUQgigKAAgIQABgYA6geQATgKBCgbIAKABQBSABA5BvQAKATAHAQIgBAZIAAANIgBAEIACAAIAAABIACACQA0DKiXCbQg3A2hDAtgAGtj6QgFgGAAgIQAAgGgDAAQgggBgjAHQBFg5BbgXIgIAGQgkAcgBAmQgBAaAHAKIAEAEQgngGgLgMgAs1jxIgGgIIATAQQgHgDgGgFgAqXlCQgUAAgRAJIgTAKQgFAAgUgXIAcgEQAugFAiAGQAkAFAAAOQAAAGgEAIQgYgZgjgBg");
	this.shape_9.setTransform(-200.3,-155.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9F2F2").s().p("AiCJOIADAAIgDAAgACCpNIABAAIgCADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAg");
	this.shape_10.setTransform(-349.1,-114.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#283B4A").s().p("AtFDXIAIgDIgBADIgDABIgCAAIgCgBgAJhBTIAFABIgDAAgAi7iZIAEAAIACAAIABAEgANCjEIACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgGACQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAgAmZjWIAAgBIABABg");
	this.shape_11.setTransform(-134.6,86.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADgSzQAAgEABgDIgBAIgARlQcIAEAAIgCAAgAxoPkIABAAIgBAAgAilyyIANgBIgLAEIgCgDg");
	this.shape_12.setTransform(-79.7,-54.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#283B4A").s().p("AtGDXIAJgDIgBADIgDABIgCAAIgDgBgAJgBTIAGABIgDAAgAi7iZIAEAAIABAAIABAEgANCjDIACgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABABIgHACQAAgBAAAAQAAAAAAAAQABAAAAAAQABAAAAAAgAmZjVIABgCIABACg");
	this.shape_13.setTransform(-136,85.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#56BBFE").s().p("AglCHIAAABIgBABgAAniIIAAABIgCACg");
	this.shape_14.setTransform(-133.7,-154.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("ADgSxQAAgDABgDIgBAIgARlQaIAEAAIgCABgAxoPiIABAAIgBABgAijyxIAOgBIgMAEIgCgDg");
	this.shape_15.setTransform(-81.1,-56);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5763FF").s().p("AB/DAIADAAIAAABIgDgBgAh2BLIADAAIgFACQAAAAAAgBQABAAAAAAQAAAAAAAAQABgBAAAAgAiBi7QAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAIgBAJIgCgEg");
	this.shape_16.setTransform(-155.1,-146.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AFWFCQhLhBgPhiQgVh9AGh4QAHgFACgHQAAgcAYgpQAKgSANgRQBdAHBgAOQBOAMBLgFIAJgBIAdAMIAgANIgBAEIAAABIAAAFQAFAFAEAHIAAAAIADAHIAAACIgCACQgkAhgugWIgBgCQiRhBiYAeQgEABgEADQgUALgNAUIgCAEQABAHADAEQA1B1CSAXQBfAOBbAlQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABADQgDAHgCAGQgBAFgBACIgDADQgNAIgNALIgBAAIgJAGIgBACQhkABhigcQhtgigtBXIABAEIADAVIABAHQAcAdAjAYQBNA1BYAHIACAJIgNAHQglATgjAAQgxAAgsglgAJOEhQgIgEgKgCIgxgEQhQgLhKgpIgBgEIgDgCIgBAAQgOgNgIgNIgHgHIgBgCQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAFgIIAFgCQAvgFAvAHIAzAHQAcAEAaAIQB8AiAvhxQAEgLgJgJQgmgmg7gOIABAAQijggh2hgIABgJQB0guB9A9QB1A5BBhdQgCgJgEgEIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgDQgQgTgzgKQgSgHgWgGIhKgUQgigJAAgJQABgYA5geQATgKBDgaIAKAAQBSACA5BvIAQAiIAAAZIAAANIgBAEIACABIAAABIACACQAzDJiXCbQg3A2hDAsgAGtj6QgFgGAAgIQAAgGgDAAQggAAgjAHQBEg6BcgWIgIAGQgkAcgBAlQgBAbAHAKIAEADQgngFgLgNgAs1jwIgGgIIATAQQgHgDgGgFgAqYlCQgUAAgQAKIgTAJQgFAAgVgXIAcgEQAugFAiAGQAkAFABAOQAAAGgEAJQgYgagkgBg");
	this.shape_17.setTransform(-201.4,-156.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9F2F2").s().p("AiCJNIADAAIgDABgACCpMIABAAIgBACQgBAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAg");
	this.shape_18.setTransform(-350.2,-115.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#56BBFE").s().p("AglCHIgBABIgBAAgAAoiHIAAABIgDABg");
	this.shape_19.setTransform(-130.9,-149.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5763FF").s().p("AB+DAIADAAIAAAAIgDAAgAh2BLIACAAIgEACQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAgAiAi7QAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAIgBAIIgCgEg");
	this.shape_20.setTransform(-152.4,-141.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AFUFBQhLhBgOhhQgVh9AHh4QAHgFACgHQAAgcAYgpQAKgSAOgQQBcAGBgAOQBOAMBLgFIAJgBIAdAMIAgANIgBAEIAAABIAAAFQAFAFAEAHIAAAAIADAHIAAACIgCACQgkAhgugWIgBgCQiRhBiYAeQgEABgEADQgUALgNAUIgCAEQABAHADAEQA0B1CSAWQBfAPBbAkQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIABADQgDAHgCAGQgBAGgBABIgDADQgNAJgNAKIgBAAIgJAHIgBABQhkAChigcQhtgigtBWIAAAEIAEAVIABAHQAbAdAjAYQBNA1BYAHIACAJIgNAHQgmAUgjAAQgwAAgsgmgAJMEgQgIgEgKgCIgxgEQhQgLhKgpIgBgEIgDgCIgBAAQgNgNgJgNIgHgHIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBIAGgIIAEgBQAwgFAvAGIAyAHQAcAEAaAIQB8AiAwhxQAEgLgJgIQgmgng7gNIABgBQijgfh1hgIABgJQB0guB9A9QB0A5BChdQgCgJgEgEIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgDQgPgTg0gKQgSgGgWgGIhJgUQgigKAAgIQABgYA5geQATgKBDgbIAKABQBSABA4BvIARAiIgBAZIAAANIgBAEIACABIAAABIACACQAyDIiYCbQg3A2hDAsgAGuj5QgFgGAAgIQAAgGgDAAQgggBgjAHQBEg6BcgWIgIAGQgkAcgBAmQgBAaAHAKIADAEQgmgGgLgMgAs0jwIgGgIQAHAIAMAIQgIgDgFgFgAqXlCQgUAAgQAKIgTAKQgFAAgVgYIAcgEQAugEAiAFQAkAFABAPQAAAGgEAIQgYgagkgBg");
	this.shape_21.setTransform(-198.6,-151.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9F2F2").s().p("AiFJMIADAAIgDAAgACFpLIABAAIgCADQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAg");
	this.shape_22.setTransform(-347.7,-110.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#283B4A").s().p("AtGDXIAJgDIgBADIgEAAIgCAAIgCAAgAJgBTIAFAAIgDABgAi7iYIAFAAIABAAIABAEgANCjDIACgBQABAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAIgGACQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAgAmYjVIAAgBIABABg");
	this.shape_23.setTransform(-135.2,89.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ADfSvQAAgEABgDIgBAIgARlQYIAEAAIgCAAgAxoPgIABAAIgBABgAiQyuIAOgBIgMADIgCgCg");
	this.shape_24.setTransform(-80.2,-51.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#283B4A").s().p("AtJDVIAJgDIgBADIgEAAIgBABIgDgBgAJfBSIAFABIgCAAgAi4iXIAEAAIACAAQgBABAAAAQAAABAAAAQAAAAAAABQAAAAABABgANFjBIACgCQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAIgHACQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAgAmWjTIABgCIABACg");
	this.shape_25.setTransform(-131.6,99);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#56BBFE").s().p("AgnCFIgBABIgBABgAAqiGIAAABIgCABg");
	this.shape_26.setTransform(-124.8,-138.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ADdSkQAAgDABgDIgBAIgARlQQIADAAIgCAAgAxoPYIACAAIgCABgAh5ykIAOgBIgLAEIgDgDg");
	this.shape_27.setTransform(-76.1,-40.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5763FF").s().p("AB8C+IADAAIAAAAIgDAAgAh3BKIACAAIgEACQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAgAh+i6QAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIgBAIIgCgFg");
	this.shape_28.setTransform(-146.3,-130.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AFPE/QhLhBgOhhQgSh7AIh3QAHgFADgGQAAgcAYgpQAKgSAOgRQBdAHBfAOQBOAMBLgGIAJAAIAdALIAfANIgBAEIAAABIAAAFQAFAFAEAHIABABIADAHIAAABIgCADQglAggugWIAAgBQiRhCiYAfQgEAAgEADQgVALgMAUIgCAFQABAGADAFQAyBzCRAWQBfAOBbAkQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAIABADQgEAHgCAGQgBAGgBABIgDADQgNAJgNAKIgBAAIgJAHIgCABQhjAChigcQhrghgvBVIAAAEIADAVIABAHQAbAcAiAYQBNA1BYAGIABAJIgNAHQglAUgjAAQgxAAgqglgAJHEeQgJgFgJgCIgxgEQhRgKhIgpIgCgDIgCgDIgBAAQgOgMgIgNIgHgHIgBgCQAAgBAAAAQAAAAAAgBQABAAAAgBQABAAAAgBIAGgIIAEgCQAwgFAvAHIAyAHQAcAEAaAIQB8AhAwhwQAFgLgIgIQgngmg6gNIABgBQiigfh1hfIABgIQB1gvB8A8QB0A5BDhcQgCgIgFgFIgBgBQgMgNgHgQIACgCIgBgBQgGgOgGgIIgCgDQgPgTgzgKQgSgGgWgGIhKgUQghgKAAgIQABgYA7gdQATgKBCgbIALABQBRABA3BuIAQAiIgBAZIAAANIgBAEIACAAIAAABIACACQAwDHiaCaQg4A1hDAsgAGuj3QgFgGABgIQAAgGgDAAQggAAgkAHQBHg6BbgWIgIAGQglAcgBAlQgBAaAHAKIADAEQgmgGgMgMgAszjuIgHgIIAUAQQgIgDgFgFgAqUk/QgUAAgRAKIgUAJQgFAAgTgWIAcgEQAugFAiAGQAkAFAAANQAAAGgFAJQgXgagjgBg");
	this.shape_29.setTransform(-192.2,-139.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D9F2F2").s().p("AiMJHIADAAIgDAAgACMpGIABAAIgCACQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAg");
	this.shape_30.setTransform(-342,-99.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#283B4A").s().p("AtLDUIAJgDIgBADIgDAAIgCAAIgDAAgAJfBSIAFABIgDAAgAi2iWIAEAAIABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABgANHjAIACgBQAAAAABAAQAAgBAAABQABAAAAAAQAAAAAAAAIgGACQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAgAmUjSIABgBIABABg");
	this.shape_31.setTransform(-128.9,107.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5763FF").s().p("AB6C9IAEAAIgBABIgDgBgAh4BKIACAAIgEABQAAAAAAAAQAAgBAAAAQABAAAAAAQABAAAAAAgAh8i4QAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIgBAIIgCgDg");
	this.shape_32.setTransform(-141.6,-120.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ADcSeQgBgEACgDIgBAIgARlQKIADAAIgCAAgAxnPSIABAAIgBABgAhmydIAOgBIgLAEIgDgDg");
	this.shape_33.setTransform(-73,-31.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#56BBFE").s().p("AgpCFIAAABIgBAAgAAriFIAAABIgCABg");
	this.shape_34.setTransform(-120,-128.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AFLE9QhKhAgNhhQgRh6AJh3QAHgFADgGQAAgcAZgoQAKgSAOgRQBdAHBfAOQBNAMBMgGIAIAAIAeALIAfANIgBAEIAAABQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAABQAFAFAEAGIABABIADAHIAAACIgCACQglAhgugWIAAgCQiRhBiYAfQgEAAgEADQgVAKgMAVIgCAEQABAHADAEQAxBzCRAVQBfAPBaAkQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIABADQgEAHgCAGQgBAFgBACIgDACQgNAJgNAKIgBAAIgKAHIgBABQhkAChhgcQhrghgwBVIABAEIADAVIAAAHQAbAbAiAYQBNA1BYAGIAAAJIgNAHQgmAUgjAAQgwAAgqglgAJDEdQgIgFgKgCIgxgEQhQgLhIgoIgCgEIgCgCIgBAAQgNgMgJgNIgHgHIgBgCQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAABgBIAFgIIAFgCQAvgFAvAHIAyAHQAcAEAaAIQB8AhAxhvQAFgLgIgIQgmgng6gNIABAAQiigfh0hfIABgIQB1guB7A8QB0A4BEhbQgCgJgFgFIgBgBQgLgMgHgQIABgCIAAgBQgGgOgGgIIgCgDQgPgTgzgKQgSgGgWgGIhKgUQghgJABgIQAAgYA8gdQATgKBCgbIALABQBRABA2BuIAQAhIgBAZIgBANIgBAEIACAAIAAABIACACQAvDGicCZQg4A0hDAtgAGvj2QgFgGABgHQAAgGgCAAQgggBgkAHQBHg5BbgWIgIAGQglAbgCAmQgBAaAHAKIADADQgmgFgMgNgAsyjsIgHgIIAUAQQgIgDgFgFgAqSk9QgUAAgSAJIgTAKQgFAAgTgWIAcgEQAugFAiAGQAkAFgBANQAAAGgFAIQgWgZgjgBg");
	this.shape_35.setTransform(-187.3,-130.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D9F2F2").s().p("AiRJDIADAAIgDABgACRpDIABABIgCACQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBg");
	this.shape_36.setTransform(-337.6,-90.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#283B4A").s().p("AtMDTIAIgDIgBADIgDABIgCAAIgCgBgAJfBSIAFAAIgDABgAi0iWIAEAAIABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAgANJjAIACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgGACQAAAAAAAAQAAAAAAAAQAAAAABgBQAAAAABAAgAmSjSIABgBIABABg");
	this.shape_37.setTransform(-126.4,112.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#56BBFE").s().p("AgqCFIAAABIgBAAgAAsiFIAAABIgCABg");
	this.shape_38.setTransform(-115.7,-123.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5763FF").s().p("AB5C9IADAAIgBAAIgCAAgAh4BKIACAAIgEABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAgAh7i4QAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIgCAIIgCgEg");
	this.shape_39.setTransform(-137.3,-115.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ADaScQAAgDABgDIgBAIgARlQJIADAAIgCAAgAxnPRIABAAIgBABgAhVycIAOgBIgLAEIgDgDg");
	this.shape_40.setTransform(-70.2,-26.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AFHE9QhJhAgNhhQgQh6AKh3QAIgEACgGQABgcAYgoQALgSAOgRQBdAHBfAOQBNAMBMgGIAIAAIAeALIAfAMIgBAFIAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBAAQAFAFAEAHIAAABIAEAHIAAABIgDADQglAggtgWIgBgBQiQhBiYAeQgEAAgEADQgVALgNAUIgCAFQABAGADAFQAxBzCQAVQBfAOBaAkQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABIABADQgFAHgBAGQgBAGgCABIgCADQgOAIgNALIgBAAIgJAGIgCACQhjABhigcQhqgggwBUIAAAEIADAVIAAAHQAaAcAjAYQBMA0BYAGIAAAJIgNAIQgmASgiAAQgxAAgqgkgAJAEdQgJgFgJgCIgxgEQhQgKhIgpIgCgEIgCgCIgBAAQgNgMgJgNIgGgHIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBAAAAIAGgIIAEgBQAwgFAvAGIAyAHQAcAEAZAIQB8AhAyhvQAFgLgIgIQgmgmg6gNIABgBQiigehzhgIACgHQB1gvB6A8QB0A5BEhcQgBgIgFgFIgBgBQgLgMgHgQIABgCIAAgBQgGgOgGgIIgCgDQgPgTgzgKQgSgHgVgGIhKgTQghgKABgHQAAgYA8gdQATgKBDgbIAKAAQBSABA1BuIAQAiIgCAZIgBANIgBADIACABIAAABIACACQAtDFidCZQg4A1hEAsgAGwj1QgFgHABgHQAAgGgDAAQggAAgjAHQBHg5BcgWIgJAGQglAbgCAmQgCAZAHAKIAEAEQgngGgLgMgAsyjsIgGgIIATAQQgHgDgGgFgAqRk8QgUAAgSAJIgTAKQgFAAgTgWIAcgEQAugFAiAGQAkAFgBANQAAAFgFAJQgWgZgjgBg");
	this.shape_41.setTransform(-182.8,-125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9F2F2").s().p("AiWJDIADAAIgDAAgACWpCIABAAIgCACQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAg");
	this.shape_42.setTransform(-333.5,-85.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#283B4A").s().p("AtNDTIAIgDIgBADIgDAAIgCAAIgCAAgAJeBSIAFAAIgCABgAi0iVIAEAAIACAAQAAAAgBAAQAAABAAAAQAAABAAAAQABABAAAAgANKi/IACgBQAAAAAAAAQABgBAAABQAAAAABAAQAAAAAAAAIgGACQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAgAmRjRIABgBIABABg");
	this.shape_43.setTransform(-124.8,115.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#56BBFE").s().p("AgrCEIAAABIgBABgAAtiFIAAABIgDACg");
	this.shape_44.setTransform(-113,-119.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5763FF").s().p("AB4C8IADAAIAAABIgDgBgAh4BJIACAAIgFABQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBABAAgAh5i4QAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAABAAIgBAIIgCgFg");
	this.shape_45.setTransform(-134.7,-111.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ADaSYQgBgDACgDIgBAIgARkQFIAEAAIgCAAgAxnPOIABAAIgBAAgAhKyYIANgBIgLAEIgCgDg");
	this.shape_46.setTransform(-68.5,-22.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AFFE7QhJg/gMhgQgQh6ALh2QAIgFACgGQABgcAZgoQAKgSAPgRQBcAHBfAOQBOAMBLgGIAJAAIAdALIAfANIgBAEIAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAFAFAEAHIAAABIAEAHIAAABIgDADQglAggtgWIgBgBQiPhBiZAeQgEAAgEADQgVALgNAUIgCAFQABAGADAFQAwByCQAVQBfAPBaAjQAAAAABABQAAAAABAAQAAAAAAABQABAAAAAAIABADQgFAHgBAGQgBAGgCABIgCADQgOAIgNALIgBAAIgKAGIgBACQhkABhhgcQhqgggxBUIABAEIACAVIABAHQAaAbAiAYQBMA1BYAGIAAAJIgNAHQgmATgjAAQgwAAgqglgAI+EbQgJgFgJgBIgxgEQhQgLhIgoIgBgEIgDgCIgBAAQgNgMgIgNIgHgHIgBgCQAAgBAAAAQAAAAABgBQAAAAAAgBQABAAABgBIAFgIIAFgBQAvgFAvAGIAyAHQAcAEAaAIQB7AhAzhvQAFgLgIgIQgmgmg6gNIABAAQihgfhzheIACgIQB1gvB6A8QBzA4BFhbQgBgIgFgFIgBgBQgLgMgHgQIABgCIAAgBQgGgOgGgIIgCgDQgOgTgzgKQgSgGgWgGIhJgUQgigJABgIQABgYA8gdQATgJBDgbIAKAAQBSACA0BtIAQAhIgCAZIAAANIgBAEIABAAIAAABIACACQAsDFidCYQg5A0hEAsgAGxj1QgFgGABgHQAAgGgDAAQggAAgkAGQBIg4BcgWIgJAGQglAbgCAlQgCAaAHAKIADADQgmgFgLgNgAsxjrIgHgIIAUAQQgIgDgFgFgAqQk7QgUAAgSAJIgTAJQgFAAgTgWIAcgEQAugEAiAFQAkAFgBANQAAAGgFAJQgWgZgjgBg");
	this.shape_47.setTransform(-180.1,-121.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D9F2F2").s().p("AiZJBIADAAIgDAAgACZpAIABAAIgCADQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAg");
	this.shape_48.setTransform(-331,-81.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#283B4A").s().p("AtNDSIAIgDIgBADIgEAAIgBAAIgCAAgAJeBRIAFABIgDAAgAiziVIADAAIACAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABgANKi+IACgBQAAAAABAAQAAgBAAABQABAAAAAAQAAAAABAAIgHACQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAgAmRjQIABgBIABABg");
	this.shape_49.setTransform(-124.4,116.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#56BBFE").s().p("AgrCDIAAABIgBABgAAtiEIAAABIgCABg");
	this.shape_50.setTransform(-112.3,-116.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5763FF").s().p("AB4C7IADAAIAAAAIgDAAgAh4BJIACAAIgEABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABAAgAh5i2QAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIgBAIIgCgDg");
	this.shape_51.setTransform(-134,-109);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ADaSTQgBgEACgDIgBAIgARkP/IAEAAIgCABgAxnPJIABAAIgBAAgAhIySIAOgBIgLAEIgDgDg");
	this.shape_52.setTransform(-68,-20.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AFEE6QhJg/gMhgQgPh4ALh2QAHgFADgGQAAgcAZgoQALgSAOgQQBdAHBfANQBNAMBMgFIAIgBIAdALIAfANIgBAEIAAABQABAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAFAFADAHIABABIADAHIAAABIgCADQglAggugWIAAgBQiQhAiYAdQgEAAgFADQgVALgMAUIgCAFQABAGADAFQAwByCQAUQBfAPBZAjQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAAADQgEAHgCAGQgBAGgBABIgDADQgNAIgNALIgBAAIgKAGIgCABQhjAChhgcQhrgggwBTIAAAFIADAUIAAAHQAaAcAiAXQBMA1BYAGIAAAJIgNAHQgmASgjAAQgwAAgqgkgAI9EaQgJgFgJgBIgxgEQhQgLhIgoIgBgDIgDgDIgBAAQgNgMgIgNIgGgHIgBgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAGgJIAEgBQAwgFAvAGIAyAHQAcAEAZAIQB7AhAzhuQAFgLgIgIQglgmg6gMIABgBQiigehyheIABgIQB1gvB7A8QBzA4BFhbQgCgIgEgFIgCgBQgLgMgHgQIACgCIgBgBQgFgNgGgJIgCgCQgOgTgzgKQgSgHgWgGIhJgTQgigKABgHQABgYA8gdQATgJBDgbIAKAAQBSACA0BsIAQAiIgCAYIgBANIgBAEIACABIAAABIACACQAsDDieCXQg5A1hEArgAGxjzQgFgGABgIQAAgFgDAAQggAAgkAGQBIg4BcgWIgJAGQglAbgCAlQgCAZAHAKIADAEQgmgGgLgMgAsxjqIgHgIIAUAQQgIgDgFgFgAqQk5QgUAAgSAJIgTAJQgFAAgTgWIAcgEQAugEAiAFQAkAFgBANQAAAGgFAJQgWgZgjgBg");
	this.shape_53.setTransform(-179.3,-118.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D9F2F2").s().p("AiZI9IADAAIgDABgACZo9IABAAIgCADQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAg");
	this.shape_54.setTransform(-330.4,-78.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#283B4A").s().p("AtPDSIAIgDIgBADIgDABIgCAAIgCgBgAJeBRIAEABIgCABgAiyiVIAEAAIABAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAgANLi/IACgBQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgHACQAAAAABAAQAAAAAAAAQAAAAABgBQAAAAAAAAgAmPjRIABgBIAAABg");
	this.shape_55.setTransform(-123.7,119.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#56BBFE").s().p("AgsCEIAAABIgBAAgAAuiFIAAABIgCACg");
	this.shape_56.setTransform(-109.7,-115.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#61FFDE").s().p("AAAAAIAAgCIAAAEIAAgCg");
	this.shape_57.setTransform(-88.8,-133.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#5763FF").s().p("AB3C8IAEAAIgBABIgDgBgAh4BKIADAAIgFABQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAgAh2i4QAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIgBAIIgCgFg");
	this.shape_58.setTransform(-131.6,-107.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ADXSXQAAgDACgDIgCAIgARkQEIADAAIgCAAgAxmPNIABAAIgBAAgAg2yXIANgBIgLAEIgCgDg");
	this.shape_59.setTransform(-67,-18.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AFBE7QhJg/gLhgQgOh6AMh2QAHgFADgGQAAgcAagoQAKgSAPgQQBcAHBfANQBOAMBLgGIAJAAIAdAMIAeAMIgBAEIAAABQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAFAFADAGIABABIADAHIAAACIgCACQglAhgugXIAAgBQiPhBiZAfQgEAAgFADQgVAKgMAUIgCAFQABAGADAFQAvBzCQAUQBeAPBZAkQABAAAAAAQAAAAABAAQAAAAABABQAAAAABABIAAADQgEAGgCAGQgBAGgCABIgCADQgOAIgNALIgBAAIgKAGIgBACQhkABhhgcQhqgggxBUIABAEIACAVIAAAHQAaAbAiAYQBMA1BYAFIAAAKIgNAHQgnATgjAAQgwAAgpglgAI5EbQgIgFgKgBIgxgEQhPgLhIgoIgBgEIgCgCIgBAAQgNgMgIgNIgHgHIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAABgBIAFgIIAFgBQAvgFAvAGIAyAHQAcAEAaAIQB6AhA0hvQAFgKgIgIQgkgng6gNIABAAQiigehxhfIABgIQB1guB7A8QByA3BGhaQgCgJgEgFIgCgBQgLgMgHgPIACgCIAAgBQgGgPgGgIIgCgDQgOgSgygKQgSgHgWgGIhJgTQgigKABgHQABgYA8gdQAUgKBDgbIAKABQBSABAzBtQAJASAHAQIgDAYIAAANIgBAEIABAAIAAACIACACQArDEifCYQg6A0hEAsgAGyj0QgGgHABgHQAAgFgCAAQgggBgkAHQBIg5BcgWIgIAGQgmAbgDAmQgBAZAHAKIADAEQgmgGgLgMgAswjrIgHgIIAUAQQgIgDgFgFgAqPk7QgUAAgSAJIgTAKQgFAAgTgWIAdgEQAugFAhAGQAkAFgBANQAAAGgFAIQgWgZgjgBg");
	this.shape_60.setTransform(-176.6,-117.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#D9F2F2").s().p("AiVJAIADAAIgDAAgACVo/IABAAIgCACQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAg");
	this.shape_61.setTransform(-327.2,-77.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#283B4A").s().p("AtPDRIAIgDIgBADIgDABIgCAAIgCgBgAJeBRIAEABIgCAAgAiziUIAFAAIABAAQAAAAAAAAQgBABAAAAQAAABABAAQAAABAAAAgANLi9IACgCQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgHACQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAgAmPjPIABgCIAAACg");
	this.shape_62.setTransform(-121.9,119.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#56BBFE").s().p("AgsCDIAAABIgBABgAAuiEIAAABIgCACg");
	this.shape_63.setTransform(-107.9,-113.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#5763FF").s().p("AB3C7IAEAAIgBAAIgDAAgAh4BJIACAAIgEABQAAAAAAAAQAAAAAAAAQABgBAAAAQABAAAAAAgAh3i2QAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIgBAIIgDgEg");
	this.shape_64.setTransform(-129.8,-106);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("ADYSQQgBgEACgDIgBAJgARkP+IAEAAIgCAAgAxnPHIABAAIgBABgAg2yQIAOgBIgLAEIgDgDg");
	this.shape_65.setTransform(-65.2,-17.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AFBE5QhJg/gLhfQgPh5AMh2QAIgFACgGQABgbAagoQAKgSAPgQQBcAHBfANQBOAMBLgGIAJAAIAdALIAeANIgBAEIAAABQAAABABAAQAAABgBAAQAAABAAAAQAAABAAAAQAFAFADAHIABABIADAHIAAABIgCADQgmAggtgWIAAgCQiPhAiZAeQgEAAgFADQgVALgMAUIgDAEQABAHADAEQAvByCQAVQBfAOBZAkQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAADQgEAGgCAGQgBAGgCABIgCADQgOAIgNALIgBAAIgKAGIgBACQhkABhhgcQhqgggxBTIAAAFIADAUIAAAHQAaAcAiAXQBLA1BYAFIAAAJIgNAHQgmAUgjAAQgwAAgpglgAI5EZQgIgFgKgBIgxgEQhPgLhIgoIgBgDIgCgDIgBAAQgNgMgJgNIgGgHIgBgCQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAAAAIAGgIIAEgBQAwgFAvAGIAyAGQAcAEAZAIQB7AhA0huQAFgKgIgIQglgmg6gNIABgBQihgehyheIACgIQB1guB6A8QBzA3BGhaQgCgIgEgFIgCgBQgLgMgHgQIACgCIAAgBQgGgOgGgIIgCgDQgOgSgzgKQgSgHgVgGIhKgTQghgKABgHQABgYA8gdQAUgJBCgbIALABQBRABA0BsQAJASAGAQIgCAYIAAANIgBAEIABAAIAAABIACACQAqDDifCXQg5A1hEArgAGxjzQgFgGABgHQAAgGgCAAQggAAgkAGQBIg4BcgWIgIAGQgmAbgDAlQgCAZAHAKIAEAEQgngGgLgMgAsxjqIgGgIIATAQQgHgDgGgFgAqPk5QgUAAgSAJIgTAJQgFAAgTgWIAdgEQAugEAhAFQAkAFgBANQAAAGgFAJQgWgZgjgBg");
	this.shape_66.setTransform(-174.8,-115.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#D9F2F2").s().p("AieI9IADAAIgDAAgACeo8IABAAIgCACQAAAAAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAg");
	this.shape_67.setTransform(-326.3,-76.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#283B4A").s().p("AtQDQIAJgDIgBADIgEABIgBAAIgDgBgAJdBRIAFABIgCAAgAiyiTIAEAAIABAAQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAgANMi8IACgCQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABIgHACQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAgAmOjOIABgCIAAACg");
	this.shape_68.setTransform(-120.7,119);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#56BBFE").s().p("AgsCDIgBAAIgBABgAAviDIAAABIgDACg");
	this.shape_69.setTransform(-105.8,-113);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5763FF").s().p("AB4C6IADAAIgBABIgCgBgAh4BJIACAAIgEABQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABAAgAh2i1QAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAIgCAIIgCgDg");
	this.shape_70.setTransform(-127.9,-105.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("ADXSKQAAgDACgDIgCAIgARkP5IAEAAIgCAAgAxnPCIABAAIgBABgAguyKIAOgBIgLAEIgDgDg");
	this.shape_71.setTransform(-63.9,-17.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AE/E4QhIg/gLhfQgOh4AMh1QAIgFACgGQACgbAZgoQALgSAOgQQBdAHBfANQBNAMBMgGIAIAAIAdALIAfANIgBAEIAAABQAAAAAAABQAAAAAAABQAAABgBAAQAAABAAAAQAFAFAEAHIAAABIAEAHIAAABIgDADQgmAfgtgVIAAgCQiPhAiZAeQgEAAgEADQgVALgNAUIgDAEQABAHADAEQAvBxCQAVQBeAOBaAkQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIABADQgFAGgCAGQgBAFgBACIgDACQgNAJgNAKIgBAAIgKAHIgCABQhjAChhgcQhqgggyBTIAAAEIADAVIAAAHQAaAbAiAXQBLA1BYAFIAAAJIgNAHQgnATgjAAQgwAAgpgkgAI4EYQgIgFgKgBIgxgEQhPgLhIgoIgBgDIgCgDIgBAAQgNgLgJgNIgGgHIgBgCQgBgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBIAGgIIAEgBQAwgFAvAGIAyAHQAcAEAZAIQB7AgA0htQAGgKgIgIQglgmg6gNIABgBQihgehyhdIACgIQB2guB5A7QBzA4BGhaQgBgIgFgFIgBgBQgLgMgHgQIABgCIAAgBQgFgOgGgIIgCgDQgPgSgygKQgSgGgWgGIhJgUQghgJABgHQABgYA8gdQAUgJBCgbIALABQBRABAzBsQAJARAHAQIgCAYIgBANIgBAEIACAAIAAABIACACQApDCigCXQg5A0hEArgAGyjyQgFgGABgHQAAgFgCAAQgggBgkAHQBIg4BcgWIgIAGQgmAbgDAlQgCAZAHAKIADADQgmgFgLgNgAswjoIgHgIIAUAQQgIgDgFgFgAqOk3QgUAAgSAJIgTAJQgFAAgTgWIAdgEQAugEAhAFQAkAFgBANQAAAGgFAIQgWgYgjgBg");
	this.shape_72.setTransform(-172.7,-114.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D9F2F2").s().p("AigI6IADAAIgDAAgACgo5IABAAIgCACQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAg");
	this.shape_73.setTransform(-324.4,-75.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#283B4A").s().p("AtQDQIAIgDIgBADIgDABIgCAAIgCgBgAJdBRIAFABIgCAAgAiyiTIAEAAIACAAQAAAAgBAAQAAABAAAAQAAABAAAAQABABAAAAgANNi8IACgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIgGACQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAgAmOjOIABgCIABACg");
	this.shape_74.setTransform(-120,120.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#56BBFE").s().p("AgsCDIgBAAIgBABgAAviDIAAABIgCACg");
	this.shape_75.setTransform(-104.5,-111.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5763FF").s().p("AB3C6IAEAAIgBABIgDgBgAh4BJIADAAIgFABQAAAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAgAh1i1QAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAgBABAAIgCAIIgCgDg");
	this.shape_76.setTransform(-126.6,-103.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("ADXSKQgBgDACgDIgBAIgARkP5IAEAAIgCAAgAxnPCIABAAIgBABgAgoyKIANgBIgLAEIgCgDg");
	this.shape_77.setTransform(-63,-15.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AE+E4QhJg/gKhfQgOh4ANh1QAHgFADgGQABgbAagoQALgSAOgQQBdAHBfANQBNAMBMgGIAIAAIAdALIAeANIgBAEIAAABQAAAAAAABQABAAgBABQAAABAAAAQAAABAAAAQAFAFADAHIABABIADAHIAAABIgCADQgmAfgugVIAAgCQiOhAiZAeQgEAAgFADQgVALgNAUIgCAEQABAHADAEQAuBxCQAVQBeAOBaAkQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIABADQgFAGgCAGQgBAFgBACIgDACQgNAJgNAKIgBAAIgKAHIgCABQhjAChhgcQhqgggyBTIAAAEIADAVIAAAHQAaAbAiAXQBKA1BYAFIAAAJIgNAHQgmATgjAAQgwAAgpgkgAI3EYQgJgFgJgBIgxgEQhPgLhIgoIgBgDIgCgDIgBAAQgNgLgJgNIgGgHIgBgCQAAgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBIAGgIIAEgBQAwgFAvAGIAyAHQAcAEAZAIQB7AgA0htQAGgKgIgIQglgmg6gNIABgBQihgehxhdIABgIQB2guB6A7QByA4BHhaQgCgIgEgFIgCgBQgLgMgHgQIACgCIAAgBQgFgOgGgIIgCgDQgPgSgygKQgSgGgWgGIhJgUQghgJABgHQABgYA8gdQAUgJBCgbIALABQBRABAzBsQAJARAHAQIgCAYIgBANIgBAEIABAAIAAABIACACQApDCigCXQg5A0hFArgAGyjyQgFgGABgHQAAgFgCAAQgggBgkAHQBIg4BcgWIgIAGQgmAbgDAlQgCAZAHAKIADADQgmgFgLgNgAswjoIgHgIIAUAQQgIgDgFgFgAqOk3QgUAAgSAJIgTAJQgFAAgTgWIAdgEQAugEAhAFQAkAFgBANQAAAGgFAIQgWgYgjgBg");
	this.shape_78.setTransform(-171.3,-112.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D9F2F2").s().p("AiiI6IADAAIgDAAgACio5IABAAIgCACQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAg");
	this.shape_79.setTransform(-323.1,-73.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#283B4A").s().p("AtPDRIAIgDIgBADIgDAAIgCABIgCgBgAJdBRIAFABIgCAAgAiziUIAEAAIACAAQAAABgBAAQAAABAAAAQAAAAAAABQABAAAAABgANMi9IACgCQAAAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIgGACQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAgAmPjPIABgCIABACg");
	this.shape_80.setTransform(-121.5,117.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#56BBFE").s().p("AgsCDIgBABIgBABgAAviEIAAABIgDACg");
	this.shape_81.setTransform(-107.2,-115);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5763FF").s().p("AB4C7IADAAIAAAAIgDAAgAh4BJIACAAIgEABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAgAh2i2QAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAAAAAIgBAIIgCgEg");
	this.shape_82.setTransform(-129.1,-107.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("ADYSOQgBgDACgDIgBAIgARkP8IAEAAIgCABgAxnPGIABAAIgBABgAgzyOIANgBIgLAEIgCgDg");
	this.shape_83.setTransform(-64.7,-19.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AFAE5QhIhAgLheQgPh5AMh2QAIgFACgFQACgcAZgoQAKgSAPgQQBcAHBfANQBOAMBLgGIAJAAIAdALIAfANIgBAEIAAABQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAFAGAEAGIAAABIAEAHIAAACIgDACQgmAggtgWIAAgBQiPhBiZAeQgEAAgEADQgVALgNAUIgDAFQABAGADAEQAvByCQAVQBfAOBZAkQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIAAADQgEAGgCAGQgBAFgCACIgCACQgOAJgNALIgBAAIgKAGIgBACQhkABhhgcQhqgggyBTIABAFIACAUIABAHQAZAbAjAYQBLA1BYAFIAAAJIgNAHQgnATgjAAQgwAAgpgkgAI5EZQgIgFgKgBIgxgFQhPgKhIgoIgCgEIgCgCIgBAAQgNgMgIgNIgHgHIgBgCQAAAAAAgBQAAAAABAAQAAgBABAAQAAgBABAAIAFgIIAFgBQAvgFAvAGIAyAGQAcAEAaAIQB7AhA0huQAFgKgIgIQglgmg6gNIABgBQihgehyheIACgIQB2guB5A8QBzA3BGhZQgBgJgFgFIgBgBQgLgMgHgQIABgCIAAgBQgGgOgGgIIgCgDQgOgSgzgKQgSgGgVgGIhKgUQghgJABgHQACgZA7gcQAUgKBDgaIAKAAQBSACAzBsQAJARAGAQIgCAYIAAANIgBAEIACAAIAAABIACACQApDDifCXQg5A0hEAsgAGxjzQgEgGABgHQAAgFgDAAQgggBgkAHQBIg5BdgVIgJAGQgmAagCAmQgDAZAHAKIAEADQgngFgLgNgAsxjpIgGgIIATAQQgHgDgGgFgAqPk5QgUAAgRAJIgUAJQgFAAgTgVIAdgEQAugFAiAGQAjAFAAANQAAAFgFAJQgWgZgkgBg");
	this.shape_84.setTransform(-174.1,-116.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#D9F2F2").s().p("AifI8IADAAIgDAAgACfo7IABAAIgCACQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAg");
	this.shape_85.setTransform(-325.6,-77.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#283B4A").s().p("AtODTIAIgEIgBAEIgEAAIgBAAIgCAAgAJdBSIAFABIgCAAgAiziVIAEAAIACAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAABABgANLi+IACgCQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABIgGACQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAgAmPjRIABgBIAAABg");
	this.shape_86.setTransform(-126.3,113.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#56BBFE").s().p("AgrCEIgBABIgBAAgAAuiFIAAABIgDACg");
	this.shape_87.setTransform(-112.8,-120.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5763FF").s().p("AB4C8IADAAIAAABIgDgBgAh4BKIACAAIgEABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAgAh3i4QAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIgBAIIgCgEg");
	this.shape_88.setTransform(-134.7,-113);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("ADYSXQAAgEACgDIgCAIgARkQEIAEAAIgCABgAxnPNIABAAIgBABgAg7yWIANgBIgLADIgCgCg");
	this.shape_89.setTransform(-69.6,-24.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AFCE7QhJhAgLhfQgPh6AMh3QAHgFADgFQABgcAZgpQAKgSAPgPQBcAGBfANQBOAMBLgFIAJgBIAdAMIAfANIgBAEIAAABQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAFAGAEAGIAAABIAEAHIAAACIgDACQglAggugWIAAgBQiPhBiZAeQgEAAgEADQgVALgNAUIgCAFQABAGADAEQAvBzCQAVQBfAPBZAjQABAAAAABQABAAAAAAQAAAAABABQAAAAABAAIAAADQgEAHgCAFQgBAGgCABIgCADQgOAJgNALIgBAAIgKAGIgBACQhkABhhgcQhqgggxBTIAAAFIADAVIAAAHQAaAbAjAYQBLA1BYAFIAAAJIgNAHQgnAUgjAAQgwAAgpglgAI7EbQgJgFgJgBIgxgFQhPgKhJgpIgBgDIgCgDIgBAAQgNgLgJgNQgCgEgEgEIgBgCQgBAAABgBQAAAAAAAAQAAgBABAAQAAgBABAAIAGgIIAEgBQAwgFAvAGIAyAGQAcAEAZAJQB7AgA0hvQAFgKgIgIQglgmg6gNIABgBQiigehxhfIABgIQB2guB6A8QByA4BHhaQgCgJgFgFIgBgBQgLgMgHgQIABgCIAAgBQgGgOgGgJIgCgCQgOgSgzgKQgSgHgVgGIhKgUQghgJABgHQABgZA8gdQAUgJBCgbIALABQBRABA0BtQAJARAGARIgCAXIAAANIgBAEIACABIAAABIACACQAqDEifCYQg4A1hFAsgAGxj1QgFgGABgHQAAgFgCAAQgggBgkAHQBIg5BcgWIgIAGQgmAbgDAmQgCAZAHAKIAEADQgngFgLgNgAsxjrIgGgIIATAQQgHgDgGgFgAqPk7QgUAAgSAJIgTAJQgFAAgTgWIAdgEQAugEAhAFQAkAFgBANQAAAGgFAIQgWgYgjgBg");
	this.shape_90.setTransform(-179.8,-122.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#D9F2F2").s().p("AidJAIADAAIgDABgACcpAIACABIgDACQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBg");
	this.shape_91.setTransform(-331.1,-82.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#283B4A").s().p("AtHDVIAIgDIgBADIgDABIgCAAIgCgBgAJgBTIAFAAIgCABgAi5iXIAEAAIACAAIAAAEgANEjBIACgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABIgGACQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAABAAgAmXjTIABgCIABACg");
	this.shape_92.setTransform(-131.5,102.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#5763FF").s().p("AB9C+IAEAAIgBABIgDgBgAh3BKIADAAIgFABQAAAAAAAAQAAAAABAAQAAgBAAAAQABAAAAAAgAiAi6QAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAABQAAgBABgBQAAAAAAAAQAAgBABAAQAAAAABAAIgBAIIgDgEg");
	this.shape_93.setTransform(-147.9,-126.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#56BBFE").s().p("AgmCGIgBAAIgBABgAApiGIAAABIgDACg");
	this.shape_94.setTransform(-126.5,-135);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("ADfSmQgBgEACgDIgBAIgARlQQIAEAAIgCABgAxoPZIABAAIgBAAgAiJylIANgBIgLAEIgCgDg");
	this.shape_95.setTransform(-76.2,-37.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AFSE/QhLhAgOhhQgTh8AHh3QAHgFACgGQABgcAXgpQAKgSAOgQQBdAHBfANQBOAMBLgGIAJAAIAdALIAgANIgBAEIAAABIAAAGQAFAFAEAGIAAABIAEAHIgBABIgCADQgkAggugWIgBgBQiRhCiYAfQgEAAgEAEQgUAKgNAUIgCAFQABAGADAFQA0BzCRAWQBfAPBbAkQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIABADQgEAHgBAGQgBAFgCACIgCADQgOAIgNALIgBAAIgJAGIgBABQhkAChigcQhrghgvBVIABAFIADAUIABAHQAbAcAjAYQBNA2BYAGIABAJIgNAHQglATgjAAQgxAAgrglgAJKEfQgIgFgKgCIgxgEQhQgLhJgoIgCgEIgCgCIgBAAQgOgNgIgNIgHgHIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQABAAAAAAIAFgJIAFgBQAvgFAvAGIAzAHQAcAEAaAIQB8AiAwhwQAEgLgIgIQgngng6gNIABAAQijgfh1hgIABgIQB0guB8A8QB1A5BChdQgBgIgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgIIgCgDQgPgTgzgKQgSgGgWgGIhKgUQgigKAAgIQABgYA7gdQATgKBCgbIAKABQBSABA4BuIAQAiIgBAZIAAANIgBAEIACAAIAAABIACACQAyDIiZCZQg4A1hCAtgAGuj3QgFgGAAgIQAAgGgDAAQggAAgjAHQBGg6BbgWIgIAGQglAcgBAlQgBAaAHAKIAEAEQgngGgLgMgAs0juIgGgIIATAQQgHgDgGgFgAqVk/QgUAAgRAKIgUAJQgFAAgTgXIAcgEQAugEAiAFQAkAFAAAOQAAAGgFAJQgXgagjgBg");
	this.shape_96.setTransform(-194,-136.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D9F2F2").s().p("AiIJHIADAAIgDABgACIpHIABABIgCACQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBg");
	this.shape_97.setTransform(-343.4,-96.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#283B4A").s().p("AtHDWIAJgDIgBADIgEAAIgBAAIgDAAgAJgBTIAFAAIgCABgAi5iXIAEAAIABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABgANDjCIACgBQABAAAAAAQAAgBABABQAAAAAAAAQAAAAABAAIgHACQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAgAmYjUIABgBIABABg");
	this.shape_98.setTransform(-132.2,96.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#56BBFE").s().p("AgmCGIgBABIgBAAgAAoiGIAAABIgCABg");
	this.shape_99.setTransform(-127.8,-141.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ADfSpQAAgEABgDIgBAIgARlQTIAEAAIgCABgAxoPbIABAAIgBABgAiPyoIAOgBIgLAEIgDgDg");
	this.shape_100.setTransform(-77.1,-43.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#5763FF").s().p("AB+C/IADAAIAAAAIgDAAgAh2BKIACAAIgEACQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAABgBgAiAi7QAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIgCAHIgCgEg");
	this.shape_101.setTransform(-149.3,-133.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AFUFAQhMhBgOhhQgTh8AGh4QAHgFADgGQAAgbAXgqQAKgSAOgQQBdAHBfANQBOAMBLgFIAJgBIAdAMIAgANIgBAEIAAABIAAAFQAFAFAEAHIAAABIAEAHIAAABIgDADQgkAggugWIAAgCQiShBiYAeQgEABgEADQgUALgMAUIgCAEQABAHADAEQAzB0CRAWQBfAPBbAkQABAAAAAAQABAAAAAAQAAABABAAQAAAAABABIAAADQgDAHgCAGQgBAFgBACIgDADQgNAIgNALIgBAAIgJAGIgBACQhkABhigcQhsghguBWIABAEIADAUIABAHQAbAdAjAYQBNA1BYAGIABAJIgNAIQglATgjAAQgxAAgqglgAJLEgQgIgFgKgCIgxgEQhQgLhJgpIgCgDIgCgDIgBAAQgOgNgJgMIgHgHIgBgCQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABgBIAFgIIAFgCQAvgFAvAHIAzAHQAbAEAaAIQB9AhAvhwQAEgLgIgIQgngng5gNIABAAQijggh2hgIABgIQB0guB8A8QB1A6BChdQgBgIgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgCQgPgUg0gJQgSgHgWgGIhJgUQgigJAAgJQABgYA6gdQATgKBCgbIALABQBRABA5BvIAQAhIgBAZIAAANIgBAEIACABIAAABIACACQAzDIiaCaQg3A1hCAtgAGuj4QgFgGAAgIQAAgGgDAAQggAAgjAHQBFg5BbgXIgIAGQgkAcgBAlQgBAbAHAKIAEADQgngFgLgNgAs0juIgGgIIATAQQgHgDgGgFgAqWk/QgUAAgRAJIgTAJQgFAAgUgWIAcgEQAugFAiAGQAkAFAAANQAAAGgEAJQgXgZgkgBg");
	this.shape_102.setTransform(-195.4,-143.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#D9F2F2").s().p("AiHJJIADAAIgDAAgACGpIIACAAIgDACQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAAAAAg");
	this.shape_103.setTransform(-344.7,-103);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#283B4A").s().p("AtGDXIAJgDIgBADIgEABIgBAAIgDgBgAJgBUIAFAAIgCABgAi6iYIAEAAIABAAIABAEgANCjDIACgCQABAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABIgHACQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAAAgAmZjVIABgCIABACg");
	this.shape_104.setTransform(-133.8,90.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#56BBFE").s().p("AglCHIgBABIgBABgAAoiIIAAABIgDACg");
	this.shape_105.setTransform(-130.5,-149.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("ADgSxQgBgDACgDIgBAIgARmQbIADAAIgCAAgAxoPiIABAAIgBABgAiZyxIANgBIgKAEIgDgDg");
	this.shape_106.setTransform(-78.9,-50.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#5763FF").s().p("AB/DAIADAAIgBABIgCgBgAh2BLIADAAIgFACQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAgAiBi8QAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIgBAIIgCgEg");
	this.shape_107.setTransform(-152,-141.3);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AFWFCQhMhBgPhhQgUh9AGh5QAHgFADgGQAAgcAXgqQAKgSAOgQQBdAHBfANQBOAMBLgFIAJgBIAdAMIAgANIgBAEIAAABIAAAFQAFAFAEAHIAAABIAEAHIAAABIgDADQgkAggugWIAAgBQiShCiYAeQgEABgEADQgUALgMAUIgCAFQABAGADAFQA0B1CSAWQBfAOBbAlQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABIABADQgEAHgBAGQgBAFgCACIgCADQgOAIgMALIgBAAIgJAHIgCABQhjAChjgdQhrghguBWIABAFIADAUIABAHQAbAdAjAYQBNA2BYAGIACAJIgNAHQgmATgjAAQgwAAgrglgAJNEiQgIgFgKgCIgxgEQhQgLhJgpIgCgDIgCgDIgBAAQgOgNgJgNIgHgHIgBgCQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAABAAIAFgJIAEgBQAwgFAvAGIAyAHQAcAEAaAIQB9AiAvhxQAEgLgIgIQgngng7gNIABgBQijgfh2hhIABgIQB0gvB9A9QB1A6BBheQgBgIgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgCQgPgUg0gKQgSgGgWgGIhKgUQghgKAAgJQAAgYA7gdQATgKBCgbIAKAAQBSACA4BvIARAiIgBAZIAAANIgBAEIACABIAAABIACACQAzDJiYCbQg3A2hCAtgAGtj5QgFgGABgIQgBgHgCAAQggAAgkAHQBGg6BbgWIgIAGQglAcgBAlQAAAbAHAKIADAEQgmgGgMgMgAs0jwIgHgIIAUAQQgIgDgFgFgAqWlCQgUAAgRAKIgUAJQgFAAgTgXIAcgEQAugEAiAFQAkAFAAAOQAAAGgFAJQgXgagjgBg");
	this.shape_108.setTransform(-198.2,-151);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#D9F2F2").s().p("AiEJNIADAAIgDABgACEpMIABAAIgCACQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABAAg");
	this.shape_109.setTransform(-347.2,-110.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6,p:{scaleY:1,skewX:0,x:-346.6,y:-109.2}},{t:this.shape_5,p:{scaleY:1,skewX:0,x:-197.5,y:-149.7}},{t:this.shape_4,p:{scaleY:1,skewX:0,x:-151.3,y:-139.9}},{t:this.shape_3,p:{scaleY:1,skewX:0,x:-78.4,y:-49.5}},{t:this.shape_2,p:{x:-109.8,y:-166.7,scaleY:1,skewX:0}},{t:this.shape_1,p:{scaleY:1,skewX:0,x:-129.9,y:-148}},{t:this.shape,p:{scaleY:1,skewX:0,x:-133.4,y:91.3}},{t:this.instance_10,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-300.5,y:-92.8,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:45.7,y:-192.7,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1,skewX:0,x:-33.1,y:85.4,regX:300.3}},{t:this.instance_7,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-79.5,y:94.2,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:13.5,skewX:0,skewY:0,x:41.1,y:144.4,regX:23.3}},{t:this.instance_5,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-164.6,y:-250.1,regY:80.2,scaleX:1}}]}).to({state:[{t:this.shape_12,p:{scaleY:1,skewX:0,x:-79.7,y:-54.8}},{t:this.shape_11,p:{scaleY:1,skewX:0,x:-134.6,y:86.6}},{t:this.shape_10,p:{scaleY:1,skewX:0,x:-349.1,y:-114.7}},{t:this.shape_9,p:{scaleY:1,skewX:0,x:-200.3,y:-155.3}},{t:this.shape_8,p:{scaleY:1,skewX:0,x:-154,y:-145.6}},{t:this.shape_2,p:{x:-112.6,y:-172.4,scaleY:1,skewX:0}},{t:this.shape_7,p:{scaleY:1,skewX:0,x:-132.6,y:-153.7}},{t:this.instance_10,p:{scaleY:1.003,rotation:0,skewX:1,skewY:1.3,x:-302.9,y:-98.2,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1.003,rotation:0,skewX:1,skewY:1.3,x:42.8,y:-198.5,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.2,scaleY:1.004,skewX:-0.2,x:-34.7,y:80.5,regX:300.3}},{t:this.instance_7,p:{scaleY:1.003,rotation:0,skewX:1,skewY:1.3,x:-81,y:89.5,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1.002,rotation:0,skewX:13.3,skewY:13.6,x:40.1,y:139.9,regX:23.3}},{t:this.instance_5,p:{scaleY:1.003,rotation:0,skewX:1,skewY:1.3,x:-167.8,y:-256.1,regY:80.2,scaleX:1}}]},99).to({state:[{t:this.shape_10,p:{scaleY:1.004,skewX:-0.1,x:-350.9,y:-118.3}},{t:this.shape_9,p:{scaleY:1.004,skewX:-0.1,x:-202.3,y:-159.1}},{t:this.shape_8,p:{scaleY:1.004,skewX:-0.1,x:-155.9,y:-149.3}},{t:this.shape_12,p:{scaleY:1.004,skewX:-0.1,x:-81.3,y:-58.2}},{t:this.shape_2,p:{x:-114.7,y:-176.2,scaleY:1.004,skewX:-0.1}},{t:this.shape_7,p:{scaleY:1.004,skewX:-0.1,x:-134.6,y:-157.5}},{t:this.shape_11,p:{scaleY:1.004,skewX:-0.1,x:-135.7,y:83.6}},{t:this.instance_10,p:{scaleY:1.007,rotation:0,skewX:0.8,skewY:1.3,x:-304.7,y:-101.8,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1.007,rotation:0,skewX:0.8,skewY:1.3,x:40.6,y:-202.4,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1.007,skewX:-0.4,x:-35.8,y:77.6,regX:300.4}},{t:this.instance_7,p:{scaleY:1.007,rotation:0,skewX:0.8,skewY:1.3,x:-82.2,y:86.4,regY:94.9,scaleX:1}},{t:this.instance_6,p:{scaleX:1.001,scaleY:1.004,rotation:0,skewX:13.1,skewY:13.6,x:39.2,y:137.2,regX:23.3}},{t:this.instance_5,p:{scaleY:1.007,rotation:0,skewX:0.8,skewY:1.3,x:-170.2,y:-260.2,regY:80.2,scaleX:1}}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_2,p:{x:-113.7,y:-173.4,scaleY:1,skewX:0}},{t:this.shape_14},{t:this.shape_13},{t:this.instance_10,p:{scaleY:1.002,rotation:0,skewX:1.1,skewY:1.3,x:-304,y:-99.4,regX:102.5,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1.002,rotation:0,skewX:1.1,skewY:1.3,x:41.7,y:-199.5,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1.002,skewX:-0.1,x:-36.2,y:79.2,regX:300.3}},{t:this.instance_7,p:{scaleY:1.002,rotation:0,skewX:1.1,skewY:1.3,x:-82.5,y:88.1,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1.001,rotation:0,skewX:13.4,skewY:13.6,x:38.8,y:138.5,regX:23.4}},{t:this.instance_5,p:{scaleY:1.002,rotation:0,skewX:1.1,skewY:1.3,x:-168.8,y:-257.1,regY:80.2,scaleX:1}}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_2,p:{x:-110.9,y:-168.4,scaleY:1,skewX:0}},{t:this.shape_19},{t:this.instance_10,p:{scaleY:1,rotation:0,skewX:1.4,skewY:1.3,x:-301.6,y:-94.6,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1,rotation:0,skewX:1.4,skewY:1.3,x:44.6,y:-194.4,regY:91.6,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1,skewX:0.1,x:-34.5,y:83.6,regX:300.3}},{t:this.instance_7,p:{scaleY:1,rotation:0,skewX:1.4,skewY:1.3,x:-80.9,y:92.5,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.999,scaleY:1,rotation:0,skewX:13.7,skewY:13.6,x:40,y:142.7,regX:23.4}},{t:this.instance_5,p:{scaleY:1,rotation:0,skewX:1.4,skewY:1.3,x:-165.6,y:-251.9,regY:80.2,scaleX:1}}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_2,p:{x:-104.5,y:-156.8,scaleY:1,skewX:0}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_10,p:{scaleY:0.992,rotation:0,skewX:2.1,skewY:1.3,x:-296.1,y:-83.6,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:0.992,rotation:0,skewX:2.1,skewY:1.3,x:51.3,y:-182.6,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:0.992,skewX:0.8,x:-31.2,y:93.1,regX:300.3}},{t:this.instance_7,p:{scaleY:0.992,rotation:0,skewX:2.1,skewY:1.3,x:-77.7,y:101.9,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.996,scaleY:0.995,rotation:0,skewX:14.4,skewY:13.5,x:42.2,y:151.7,regX:23.3}},{t:this.instance_5,p:{scaleY:0.992,rotation:0,skewX:2.1,skewY:1.3,x:-158.2,y:-239.5,regY:80.2,scaleX:1}}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_2,p:{x:-99.6,y:-147.3,scaleY:1,skewX:0}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.instance_10,p:{scaleY:0.987,rotation:0,skewX:2.6,skewY:1.3,x:-291.9,y:-74.4,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.987,rotation:0,skewX:2.6,skewY:1.3,x:56.5,y:-172.9,regY:91.5,scaleX:0.999,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:0.986,skewX:1.3,x:-28.4,y:101.2,regX:300.4}},{t:this.instance_7,p:{scaleY:0.987,rotation:0,skewX:2.6,skewY:1.3,x:-75,y:109.9,regY:94.9,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.993,scaleY:0.991,rotation:0,skewX:14.9,skewY:13.4,x:44.6,y:159.5,regX:23.4}},{t:this.instance_5,p:{scaleY:0.987,rotation:0,skewX:2.6,skewY:1.3,x:-152.5,y:-229.6,regY:80.1,scaleX:0.999}}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_2,p:{x:-95.1,y:-141.7,scaleY:1,skewX:0}},{t:this.shape_38},{t:this.shape_37},{t:this.instance_10,p:{scaleY:0.986,rotation:0,skewX:3,skewY:1.3,x:-288,y:-68.9,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.986,rotation:0,skewX:3,skewY:1.3,x:61.1,y:-167.4,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.4,scaleY:0.985,skewX:1.7,x:-25.8,y:106.6,regX:300.4}},{t:this.instance_7,p:{scaleY:0.986,rotation:0,skewX:3,skewY:1.3,x:-72.5,y:115.2,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.992,scaleY:0.992,rotation:0,skewX:15.4,skewY:13.4,x:46.7,y:164.7,regX:23.4}},{t:this.instance_5,p:{scaleY:0.986,rotation:0,skewX:3,skewY:1.3,x:-147.4,y:-224,regY:80.1,scaleX:0.999}}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_2,p:{x:-92.3,y:-137.8,scaleY:1,skewX:0}},{t:this.shape_43},{t:this.instance_10,p:{scaleY:0.983,rotation:0,skewX:3.3,skewY:1.3,x:-285.5,y:-65.3,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.983,rotation:0,skewX:3.3,skewY:1.3,x:64,y:-163.4,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.4,scaleY:0.982,skewX:2,x:-24.3,y:109.6,regX:300.4}},{t:this.instance_7,p:{scaleY:0.983,rotation:0,skewX:3.3,skewY:1.3,x:-71,y:118.1,regY:94.9,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.99,scaleY:0.99,rotation:0,skewX:15.7,skewY:13.4,x:48,y:167.5,regX:23.4}}]},1).to({state:[{t:this.shape_54,p:{y:-78.9}},{t:this.shape_53,p:{y:-118.5}},{t:this.shape_52,p:{y:-20.7}},{t:this.shape_51,p:{y:-109}},{t:this.shape_2,p:{x:-91.6,y:-135,scaleY:1,skewX:0}},{t:this.shape_50,p:{y:-116.9}},{t:this.shape_49,p:{y:116.9}},{t:this.instance_10,p:{scaleY:0.978,rotation:0,skewX:3.4,skewY:1.3,x:-284.9,y:-62.9,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.978,rotation:0,skewX:3.4,skewY:1.3,x:64.8,y:-160.4,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.3,scaleY:0.977,skewX:2.1,x:-23.9,y:111.1,regX:300.4}},{t:this.instance_7,p:{scaleY:0.978,rotation:0,skewX:3.4,skewY:1.3,x:-70.6,y:119.6,regY:94.9,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.99,scaleY:0.986,rotation:0,skewX:15.8,skewY:13.4,x:48.3,y:168.8,regX:23.4}}]},2).to({state:[{t:this.shape_54,p:{y:-80.7}},{t:this.shape_53,p:{y:-120.3}},{t:this.shape_52,p:{y:-22.5}},{t:this.shape_51,p:{y:-110.8}},{t:this.shape_2,p:{x:-91.6,y:-136.8,scaleY:1,skewX:0}},{t:this.shape_50,p:{y:-118.7}},{t:this.shape_49,p:{y:115.1}},{t:this.instance_10,p:{scaleY:0.978,rotation:0,skewX:3.4,skewY:1.3,x:-284.9,y:-64.7,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.978,rotation:0,skewX:3.4,skewY:1.3,x:64.8,y:-162.2,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.3,scaleY:0.977,skewX:2.1,x:-23.9,y:109.3,regX:300.4}},{t:this.instance_7,p:{scaleY:0.978,rotation:0,skewX:3.4,skewY:1.3,x:-70.6,y:117.8,regY:94.9,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.99,scaleY:0.986,rotation:0,skewX:15.8,skewY:13.4,x:48.3,y:167,regX:23.4}}]},2).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.instance_10,p:{scaleY:0.983,rotation:0,skewX:3.9,skewY:1.3,x:-282.7,y:-61.3,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.983,rotation:0,skewX:3.9,skewY:1.3,x:67.8,y:-159.2,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.4,scaleY:0.982,skewX:2.5,x:-23.1,y:113.5,regX:300.4}},{t:this.instance_7,p:{scaleY:0.983,rotation:0,skewX:3.9,skewY:1.3,x:-69.9,y:122.1,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.988,scaleY:0.992,rotation:0,skewX:16.2,skewY:13.4,x:48.6,y:171.3,regX:23.4}}]},9).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_2,p:{x:-87,y:-132.1,scaleY:1,skewX:0}},{t:this.shape_63},{t:this.shape_62},{t:this.instance_10,p:{scaleY:0.977,rotation:0,skewX:3.9,skewY:1.3,x:-280.9,y:-60,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.977,rotation:0,skewX:3.9,skewY:1.3,x:69.6,y:-157.4,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.3,scaleY:0.976,skewX:2.6,x:-21.3,y:113.6,regX:300.4}},{t:this.instance_7,p:{scaleY:0.977,rotation:0,skewX:3.9,skewY:1.3,x:-68.1,y:122.2,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.988,scaleY:0.986,rotation:0,skewX:16.3,skewY:13.3,x:50.4,y:171.2,regX:23.4}}]},2).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_2,p:{x:-84.9,y:-131.1,scaleY:1,skewX:0}},{t:this.shape_68},{t:this.instance_10,p:{scaleY:0.972,rotation:0,skewX:4.1,skewY:1.3,x:-279.1,y:-59.4,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.972,rotation:0,skewX:4.1,skewY:1.3,x:71.8,y:-156.3,regY:91.5,scaleX:0.999,regX:84.3}},{t:this.instance_8,p:{regY:327.4,scaleY:0.971,skewX:2.8,x:-20.1,y:113.4,regX:300.4}},{t:this.instance_7,p:{scaleY:0.972,rotation:0,skewX:4.1,skewY:1.3,x:-66.9,y:121.9,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.987,scaleY:0.983,rotation:0,skewX:16.5,skewY:13.3,x:51.3,y:170.6,regX:23.4}}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_2,p:{x:-83.5,y:-129.3,scaleY:1,skewX:0}},{t:this.shape_74},{t:this.instance_10,p:{scaleY:0.972,rotation:0,skewX:4.3,skewY:1.3,x:-277.9,y:-57.6,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.972,rotation:0,skewX:4.3,skewY:1.3,x:73.3,y:-154.5,regY:91.5,scaleX:0.999,regX:84.3}},{t:this.instance_8,p:{regY:327.4,scaleY:0.971,skewX:2.9,x:-19.3,y:115.2,regX:300.4}},{t:this.instance_7,p:{scaleY:0.972,rotation:0,skewX:4.3,skewY:1.3,x:-66.2,y:123.7,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.986,scaleY:0.983,rotation:0,skewX:16.7,skewY:13.3,x:52,y:172.4,regX:23.4}}]},2).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_2,p:{x:-86.3,y:-133.2,scaleY:1,skewX:0}},{t:this.shape_80},{t:this.instance_10,p:{scaleY:0.975,rotation:0,skewX:4,skewY:1.3,x:-280.3,y:-61.2,regX:102.4,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.975,rotation:0,skewX:4,skewY:1.3,x:70.3,y:-158.4,regY:91.5,scaleX:0.999,regX:84.2}},{t:this.instance_8,p:{regY:327.3,scaleY:0.974,skewX:2.6,x:-20.8,y:112.1,regX:300.4}},{t:this.instance_7,p:{scaleY:0.975,rotation:0,skewX:4,skewY:1.3,x:-67.7,y:120.8,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.988,scaleY:0.986,rotation:0,skewX:16.4,skewY:13.3,x:50.7,y:169.7,regX:23.4}}]},5).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_2,p:{x:-92,y:-139.2,scaleY:1,skewX:0}},{t:this.shape_87},{t:this.shape_86},{t:this.instance_10,p:{scaleY:0.982,rotation:0,skewX:3.7,skewY:1.3,x:-285.8,y:-66.7,regX:102.3,regY:85.5,scaleX:0.999}},{t:this.instance_9,p:{scaleY:0.982,rotation:0,skewX:3.7,skewY:1.3,x:64.6,y:-164.6,regY:91.5,scaleX:0.999,regX:84.3}},{t:this.instance_8,p:{regY:327.4,scaleY:0.981,skewX:2.4,x:-25.7,y:108,regX:300.4}},{t:this.instance_7,p:{scaleY:0.982,rotation:0,skewX:3.7,skewY:1.3,x:-72.4,y:116.6,regY:95,scaleX:0.999}},{t:this.instance_6,p:{scaleX:0.989,scaleY:0.991,rotation:0,skewX:16.1,skewY:13.4,x:46.1,y:165.9,regX:23.4}}]},2).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_2,p:{x:-106.3,y:-153.5,scaleY:1,skewX:0}},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.instance_10,p:{scaleY:0.993,rotation:0,skewX:1.6,skewY:1.3,x:-297.4,y:-80.1,regX:102.5,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:0.993,rotation:0,skewX:1.6,skewY:1.3,x:49.3,y:-179.3,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:0.993,skewX:0.3,x:-31.2,y:96.7,regX:300.2}},{t:this.instance_7,p:{scaleY:0.993,rotation:0,skewX:1.6,skewY:1.3,x:-77.6,y:105.6,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.997,scaleY:0.994,rotation:0,skewX:14,skewY:13.5,x:42.7,y:155.4,regX:23.3}},{t:this.instance_5,p:{scaleY:0.993,rotation:0,skewX:1.6,skewY:1.3,x:-160.6,y:-236.3,regY:80.2,scaleX:1}}]},2).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_2,p:{x:-107.7,y:-160.3,scaleY:1,skewX:0}},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.instance_10,p:{scaleY:0.995,rotation:0,skewX:1.5,skewY:1.3,x:-298.7,y:-86.8,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:0.995,rotation:0,skewX:1.5,skewY:1.3,x:47.8,y:-186.1,regY:91.5,scaleX:1,regX:84.2}},{t:this.instance_8,p:{regY:327.4,scaleY:0.995,skewX:0.2,x:-31.9,y:90.6,regX:300.4}},{t:this.instance_7,p:{scaleY:0.995,rotation:0,skewX:1.5,skewY:1.3,x:-78.4,y:99.4,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.998,scaleY:0.996,rotation:0,skewX:13.8,skewY:13.5,x:42.1,y:149.4,regX:23.3}},{t:this.instance_5,p:{scaleY:0.995,rotation:0,skewX:1.5,skewY:1.3,x:-162.2,y:-243.3,regY:80.2,scaleX:1}}]},1).to({state:[{t:this.shape_6,p:{scaleY:1,skewX:0,x:-346.6,y:-109.2}},{t:this.shape_5,p:{scaleY:1,skewX:0,x:-197.5,y:-149.7}},{t:this.shape_4,p:{scaleY:1,skewX:0,x:-151.3,y:-139.9}},{t:this.shape_2,p:{x:-109.8,y:-166.7,scaleY:1,skewX:0}},{t:this.shape_3,p:{scaleY:1,skewX:0,x:-78.4,y:-49.5}},{t:this.shape_1,p:{scaleY:1,skewX:0,x:-129.9,y:-148}},{t:this.shape,p:{scaleY:1,skewX:0,x:-133.4,y:91.3}},{t:this.instance_10,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-300.5,y:-92.8,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:45.7,y:-192.7,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1,skewX:0,x:-33.1,y:85.4,regX:300.3}},{t:this.instance_7,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-79.5,y:94.2,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:13.5,skewX:0,skewY:0,x:41.1,y:144.4,regX:23.3}},{t:this.instance_5,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-164.6,y:-250.1,regY:80.2,scaleX:1}}]},1).to({state:[{t:this.shape_6,p:{scaleY:1.007,skewX:-0.2,x:-349.1,y:-114.7}},{t:this.shape_5,p:{scaleY:1.007,skewX:-0.2,x:-200.2,y:-155.5}},{t:this.shape_4,p:{scaleY:1.007,skewX:-0.2,x:-154,y:-145.7}},{t:this.shape_2,p:{x:-112.6,y:-172.7,scaleY:1.007,skewX:-0.2}},{t:this.shape_3,p:{scaleY:1.007,skewX:-0.2,x:-80.6,y:-54.7}},{t:this.shape_1,p:{scaleY:1.007,skewX:-0.2,x:-132.6,y:-153.9}},{t:this.shape,p:{scaleY:1.007,skewX:-0.2,x:-135,y:87.2}},{t:this.instance_10,p:{scaleY:1.007,rotation:0,skewX:1,skewY:1.3,x:-302.9,y:-98.3,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1.007,rotation:0,skewX:1,skewY:1.3,x:42.8,y:-198.9,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1.007,skewX:-0.2,x:-34.7,y:81.2,regX:300.3}},{t:this.instance_7,p:{scaleY:1.007,rotation:0,skewX:1,skewY:1.3,x:-81,y:90.1,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:1.001,scaleY:1.005,rotation:0,skewX:13.2,skewY:13.6,x:39.8,y:140.7,regX:23.3}},{t:this.instance_5,p:{scaleY:1.007,rotation:0,skewX:1,skewY:1.3,x:-167.8,y:-256.7,regY:80.2,scaleX:1}}]},2).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_2,p:{x:-110.5,y:-168.1,scaleY:1,skewX:0}},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.instance_10,p:{scaleY:1.002,rotation:0,skewX:1.2,skewY:1.3,x:-301.1,y:-94,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1.002,rotation:0,skewX:1.2,skewY:1.3,x:44.8,y:-194.1,regY:91.5,scaleX:1,regX:84.2}},{t:this.instance_8,p:{regY:327.3,scaleY:1.002,skewX:0,x:-33.5,y:84.6,regX:300.3}},{t:this.instance_7,p:{scaleY:1.002,rotation:0,skewX:1.2,skewY:1.3,x:-79.9,y:93.5,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:1,scaleY:1.001,rotation:0,skewX:13.4,skewY:13.6,x:40.7,y:143.8,regX:23.2}},{t:this.instance_5,p:{scaleY:1.002,rotation:0,skewX:1.2,skewY:1.3,x:-165.4,y:-251.7,regY:80.2,scaleX:1}}]},2).to({state:[{t:this.shape_6,p:{scaleY:1,skewX:0,x:-346.6,y:-109.2}},{t:this.shape_5,p:{scaleY:1,skewX:0,x:-197.5,y:-149.7}},{t:this.shape_4,p:{scaleY:1,skewX:0,x:-151.3,y:-139.9}},{t:this.shape_2,p:{x:-109.8,y:-166.7,scaleY:1,skewX:0}},{t:this.shape_3,p:{scaleY:1,skewX:0,x:-78.4,y:-49.5}},{t:this.shape_1,p:{scaleY:1,skewX:0,x:-129.9,y:-148}},{t:this.shape,p:{scaleY:1,skewX:0,x:-133.4,y:91.3}},{t:this.instance_10,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-300.5,y:-92.8,regX:102.4,regY:85.4,scaleX:1}},{t:this.instance_9,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:45.7,y:-192.7,regY:91.5,scaleX:1,regX:84.3}},{t:this.instance_8,p:{regY:327.3,scaleY:1,skewX:0,x:-33.1,y:85.4,regX:300.3}},{t:this.instance_7,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-79.5,y:94.2,regY:95,scaleX:1}},{t:this.instance_6,p:{scaleX:0.999,scaleY:0.999,rotation:13.5,skewX:0,skewY:0,x:41.1,y:144.4,regX:23.3}},{t:this.instance_5,p:{scaleY:1,rotation:1.3,skewX:0,skewY:0,x:-164.6,y:-250.1,regY:80.2,scaleX:1}}]},1).wait(154));

	// Layer 6
	this.instance_11 = new lib.SullyArmR("single",1);
	this.instance_11.setTransform(255.7,24.9,1,1,0,0,0,123.5,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(99).to({regX:123.4,scaleY:1,skewX:-0.1,x:253.8,y:19.9},0).wait(1).to({scaleY:1.01,skewX:-0.3,x:252.4,y:16.7},0).wait(2).to({regY:78.8,scaleY:1,skewX:0,x:252.5,y:18.5},0).wait(1).to({regX:123.5,scaleY:1,skewX:0.1,x:254.4,y:23},0).wait(1).to({regX:123.4,regY:78.9,scaleY:0.99,skewX:0.8,x:258.4,y:33.1},0).wait(2).to({regX:123.5,scaleY:0.99,skewX:1.3,x:261.7,y:41.6},0).wait(1).to({scaleY:0.99,skewX:1.7,x:264.8,y:46.9},0).wait(1).to({regX:123.4,scaleY:0.98,skewX:2,x:266.6,y:50.1},0).wait(2).to({scaleY:0.98,skewX:2.1,x:267.1,y:52},0).wait(2).to({y:50.2},0).wait(9).to({scaleY:0.98,skewX:2.5,x:268.3,y:54},0).wait(2).to({scaleY:0.98,skewX:2.6,x:270.1,y:54.6},0).wait(1).to({scaleY:0.97,skewX:2.8,x:271.5},0).wait(2).to({skewX:2.9,x:272.5,y:56.4},0).wait(5).to({scaleY:0.97,skewX:2.6,x:270.6,y:53.2},0).wait(2).to({regY:79,scaleY:0.98,skewX:2.4,x:265.6,y:48.6},0).wait(2).to({regX:123.7,regY:78.8,scaleY:0.99,skewX:0.3,x:258.3,y:36.6},0).wait(1).to({regX:123.5,regY:78.9,scaleY:1,skewX:0.2,x:257.1,y:30.3},0).wait(1).to({scaleY:1,skewX:0,x:255.7,y:24.9},0).wait(2).to({scaleY:1.01,skewX:-0.1,x:253.8,y:20.2},0).wait(2).to({scaleY:1,skewX:0,x:255.3,y:23.9},0).wait(1).to({scaleY:1,x:255.7,y:24.9},0).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446,-332.9,727,745.7);


(lib.SullyHeadclip_MuscleBeach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MEL-3Q-PUPIL2
	this.instance = new lib.MEL3QPUPIL2("synched",0);
	this.instance.setTransform(371.9,112.3,1,1,1.3,0,0,3.8,4.7);

	this.instance_1 = new lib.MEL3QPUPIL1("synched",0);
	this.instance_1.setTransform(125.6,143.6,1,1,1.3,0,0,5,6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]}).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]},1).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]},3).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},1).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},1).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},2).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},14).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},2).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},2).to({state:[{t:this.instance_1,p:{x:130.6,y:141.1}},{t:this.instance,p:{x:369.4,y:109.8}}]},2).to({state:[{t:this.instance_1,p:{x:132.9,y:143.4}},{t:this.instance,p:{x:369.4,y:112.1}}]},1).to({state:[{t:this.instance_1,p:{x:132.9,y:143.4}},{t:this.instance,p:{x:369.4,y:112.1}}]},20).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:132.9,y:145.7}},{t:this.instance,p:{x:369.4,y:114.4}}]},4).to({state:[{t:this.instance_1,p:{x:132.9,y:145.7}},{t:this.instance,p:{x:369.4,y:114.4}}]},1).to({state:[{t:this.instance_1,p:{x:132.9,y:145.7}},{t:this.instance,p:{x:369.4,y:114.4}}]},1).to({state:[{t:this.instance_1,p:{x:132.9,y:145.7}},{t:this.instance,p:{x:369.4,y:114.4}}]},2).to({state:[{t:this.instance_1,p:{x:132.9,y:145.7}},{t:this.instance,p:{x:369.4,y:114.4}}]},30).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:139.8,y:131.9}},{t:this.instance,p:{x:383.2,y:98.3}}]},8).to({state:[{t:this.instance_1,p:{x:139.8,y:131.9}},{t:this.instance,p:{x:383.2,y:98.3}}]},1).to({state:[{t:this.instance_1,p:{x:139.8,y:131.9}},{t:this.instance,p:{x:383.2,y:98.3}}]},2).to({state:[{t:this.instance_1,p:{x:138.4,y:135.7}},{t:this.instance,p:{x:381.8,y:102.1}}]},23).to({state:[{t:this.instance_1,p:{x:134.3,y:139.3}},{t:this.instance,p:{x:379,y:107.1}}]},2).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]},2).to({state:[{t:this.instance_1,p:{x:125.6,y:143.6}},{t:this.instance,p:{x:371.9,y:112.3}}]},1).wait(6));

	// MEL-3Q-PUPIL2
	this.instance_2 = new lib.MEL3QEYER("single",0);
	this.instance_2.setTransform(374.3,110.7,1,1,1.3,0,0,24.8,24.7);

	this.instance_3 = new lib.MEL3QEYEL("single",0);
	this.instance_3.setTransform(127.4,143.6,1,1,1.3,0,0,34.1,34.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]}).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},3).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.041,rotation:0,skewX:1.2,skewY:1.3,y:141.7,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1.041,rotation:0,skewX:1.2,skewY:1.3,y:108.6,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.029,rotation:0,skewX:1.3,skewY:1.3,y:142.2,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1.029,rotation:0,skewX:1.3,skewY:1.3,y:109.4,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},14).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:4,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:5,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:4,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:5,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:4,scaleY:0.89,rotation:0,skewX:4,skewY:1.1,y:147.8,regX:34,scaleX:0.999,x:126.3,regY:34.2}},{t:this.instance_2,p:{startPosition:5,scaleY:0.89,rotation:0,skewX:4,skewY:1.1,y:115.1,scaleX:0.999,x:373.8,regX:24.8,regY:24.7}}]},20).to({state:[{t:this.instance_3,p:{startPosition:3,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:4,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},4).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.026,rotation:1.3,skewX:0,skewY:0,y:200.2,regX:29.4,scaleX:1,x:121.4,regY:90.9}},{t:this.instance_2,p:{startPosition:0,scaleY:1.044,rotation:1.3,skewX:0,skewY:0,y:148.5,scaleX:1,x:374.9,regX:26.2,regY:62.5}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:2,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},30).to({state:[{t:this.instance_3,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:1,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},8).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1.059,rotation:0,skewX:1.2,skewY:1.4,y:140.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1.059,rotation:0,skewX:1.2,skewY:1.4,y:108.3,scaleX:1,x:374.1,regX:24.8,regY:24.6}}]},1).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},23).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},2).to({state:[{t:this.instance_3,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:143.6,regX:34.1,scaleX:1,x:127.4,regY:34.2}},{t:this.instance_2,p:{startPosition:0,scaleY:1,rotation:1.3,skewX:0,skewY:0,y:110.7,scaleX:1,x:374.3,regX:24.8,regY:24.7}}]},1).wait(6));

	// MEL-3Q-EYE-R
	this.instance_4 = new lib.MEL3QNOSE("synched",0);
	this.instance_4.setTransform(294.9,117.8,1,1,1.3,0,0,42.6,71.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// MEL-3Q-EYE-L
	this.instance_5 = new lib.MEL3QSTACHE("synched",0);
	this.instance_5.setTransform(296.3,180.6,1,1,1.3,0,0,89,43.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// MEL-3Q-NOSE
	this.instance_6 = new lib.MEL3QMOUTH("single",1);
	this.instance_6.setTransform(280.8,285.2,1,1,1.3,0,0,41.5,53.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:19},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(6).to({startPosition:7},0).wait(1).to({startPosition:19},0).wait(2).to({startPosition:4},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:11},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:18},0).wait(12).to({startPosition:2},0).wait(2).to({startPosition:29},0).wait(2).to({startPosition:28},0).wait(1).to({startPosition:26},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(4).to({startPosition:18},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:12},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:18},0).wait(1).to({startPosition:4},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:18},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:5},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:1},0).wait(17).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:1},0).wait(1).to({startPosition:1},0).wait(6));

	// MEL-3Q-MOUTH
	this.instance_7 = new lib.MEL3QBROWR("synched",0);
	this.instance_7.setTransform(360.6,30.2,1,1,1.3,0,0,51.4,22.1);

	this.instance_8 = new lib.MEL3QBROWL("synched",0);
	this.instance_8.setTransform(100.9,60.7,1,1,1.3,0,0,47.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:1.3,x:100.9,y:60.7,scaleX:1,scaleY:1,regY:31.4}},{t:this.instance_7,p:{regY:22.1,scaleX:1,scaleY:1,rotation:1.3,x:360.6,y:30.2,regX:51.4}}]}).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:9,x:100.8,y:72.7,scaleX:1,scaleY:1,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:-7.4,x:360.7,y:42.3,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:25.6,x:118.4,y:103.3,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:-22.1,x:360.7,y:65.3,regX:51.5}}]},1).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:9,x:112.8,y:76.3,scaleX:1,scaleY:1,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:-7.4,x:360.7,y:48.3,regX:51.4}}]},3).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:105.8,y:67.9,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:358.1,y:32.5,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:105.8,y:60.7,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:358.1,y:25.3,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:105.8,y:64.3,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:358.1,y:28.9,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:104.6,y:55.8,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:356.9,y:20.4,regX:51.4}}]},14).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:104,y:53.4,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:356.3,y:17.9,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:104,y:58.2,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:356.3,y:22.7,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-6.9,x:104,y:70.2,scaleX:0.999,scaleY:0.999,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:8.1,x:356.3,y:34.7,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-14.2,x:105.8,y:80.2,scaleX:0.999,scaleY:0.999,regY:31.5}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:15.6,x:354.5,y:44.7,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-14.2,x:105.8,y:83.8,scaleX:0.999,scaleY:0.999,regY:31.5}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:15.6,x:354.5,y:48.3,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:-5.2,x:107.4,y:89.6,scaleX:0.999,scaleY:0.999,regY:31.6}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:8.8,x:355.9,y:54,regX:51.3}}]},19).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:0.7,x:105.9,y:106.8,scaleX:0.999,scaleY:0.999,regY:31.6}},{t:this.instance_7,p:{regY:22.1,scaleX:0.999,scaleY:0.999,rotation:0.6,x:358.2,y:71.2,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:10.3,x:111.7,y:83.7,scaleX:0.997,scaleY:0.997,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:0.9,x:359.1,y:58.7,regX:51.4}}]},4).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:16.9,x:108.7,y:73.2,scaleX:0.998,scaleY:0.998,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:-6.8,x:356.4,y:49.3,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:16.9,x:107.2,y:67.5,scaleX:0.998,scaleY:0.998,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:-6.8,x:354.9,y:43.6,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:16.9,x:107.8,y:69.8,scaleX:0.998,scaleY:0.998,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:-6.8,x:355.5,y:45.9,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:16.9,x:110,y:75.8,scaleX:0.998,scaleY:0.998,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:-6.8,x:357.8,y:51.9,regX:51.4}}]},30).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:16.9,x:119.5,y:102.1,scaleX:0.998,scaleY:0.998,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:1,scaleY:1,rotation:-6.8,x:367.3,y:78.2,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:-8,x:127.9,y:69,scaleX:0.997,scaleY:0.997,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:8.1,x:347.9,y:46.3,regX:51.4}}]},8).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:-8,x:128.9,y:56.2,scaleX:0.997,scaleY:0.997,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:8.1,x:348.9,y:32.2,regX:51.4}}]},1).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:-8,x:128.7,y:58.8,scaleX:0.997,scaleY:0.997,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:8.1,x:348.7,y:34.8,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:-8,x:127.3,y:60,scaleX:0.997,scaleY:0.997,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:8.1,x:348.7,y:34.8,regX:51.4}}]},23).to({state:[{t:this.instance_8,p:{regX:47.4,rotation:-8,x:122,y:62.2,scaleX:0.997,scaleY:0.997,regY:31.4}},{t:this.instance_7,p:{regY:22.2,scaleX:0.999,scaleY:0.999,rotation:8.1,x:353.9,y:36.5,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:1.3,x:104.7,y:62.3,scaleX:1,scaleY:1,regY:31.4}},{t:this.instance_7,p:{regY:22.1,scaleX:1,scaleY:1,rotation:1.3,x:356.6,y:32.5,regX:51.4}}]},2).to({state:[{t:this.instance_8,p:{regX:47.5,rotation:1.3,x:100.9,y:60.7,scaleX:1,scaleY:1,regY:31.4}},{t:this.instance_7,p:{regY:22.1,scaleX:1,scaleY:1,rotation:1.3,x:360.6,y:30.2,regX:51.4}}]},1).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52.7,7,359.9,245.4);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MEL3QHAT("synched",0);
	this.instance.setTransform(-95.5,-289.9,1,1,1.3,0,0,118.9,80.2);

	this.instance_1 = new lib.MEL3QTIE("synched",0);
	this.instance_1.setTransform(110.3,104.6,0.999,0.999,13.5,0,0,23.3,21.9);

	this.instance_2 = new lib.MEL3QTIE_NECK("synched",0);
	this.instance_2.setTransform(-10.4,54.4,1,1,1.3,0,0,255.2,95);

	this.instance_3 = new lib.Sully_34_body("synched",0);
	this.instance_3.setTransform(35.9,45.6,1,1,0,0,0,300.3,327.3);

	this.instance_4 = new lib.MEL3QHAIRBACK2("synched",0);
	this.instance_4.setTransform(114.8,-232.5,1,1,1.3,0,0,84.3,91.5);

	this.instance_5 = new lib.MEL3QHAIRBACK1("synched",0);
	this.instance_5.setTransform(-231.3,-132.6,1,1,1.3,0,0,102.4,85.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#283B4A").s().p("AtGDXIAIgDIgBADIgDAAIgCAAIgCAAgAJgBTIAGABIgDAAgAi6iYIAEAAIABAAIABAEgANCjDIADgBQAAAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAIgHACQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAgAmZjVIABgBIABABg");
	this.shape.setTransform(-64.3,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#56BBFE").s().p("AglCGIgBACIgBAAgAAoiHIAAABIgDACg");
	this.shape_1.setTransform(-60.7,-187.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ADgSuQgBgDACgDIgBAIgARmQYIADAAIgCAAgAxoPgIABAAIgBAAgAiWyuIANgBIgLAEIgCgDg");
	this.shape_2.setTransform(-9.3,-89.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAADIAAgCg");
	this.shape_3.setTransform(-40.7,-206.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5763FF").s().p("AB+DAIAEAAIgBAAIgDAAgAh2BLIACAAIgEABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAgAiBi7QAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIgBAIIgDgEg");
	this.shape_4.setTransform(-82.1,-179.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AFVFCQhLhBgPhiQgUh8AGh5QAHgFADgGQAAgcAXgqQAKgRAOgRQBdAHBfAOQBOAMBLgGIAJAAIAdALIAgANIgBAEIAAABIAAAFQAFAGAEAGIAAABIAEAHIAAACIgDACQgkAhgugWIAAgCQiShCiYAfQgEAAgEAEQgUAKgMAVIgCAEQABAHADAEQA0B1CRAWQBfAOBbAlQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAADQgDAHgCAGQgBAFgBACIgDADQgNAIgNALIgBAAIgJAGIgBACQhkABhigcQhsghguBWIABAEIADAVIABAHQAbAcAjAYQBOA2BYAGIABAJIgNAIQglASgjAAQgxAAgrgkgAJNEhQgJgFgJgCIgxgEQhRgLhJgoIgBgEIgDgCIgBAAQgOgNgIgNIgHgHIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgJIAFgBQAvgFAvAGIAzAIQAcAEAaAIQB8AiAvhxQAEgLgIgIQgngng6gNIABgBQijgfh2hhIABgIQB0guB9A8QB1A6BBhdQgBgJgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgCQgPgTg0gKQgSgHgWgGIhKgUQghgKAAgIQAAgYA7gdQATgKBCgbIAKAAQBSACA4BvIARAiIgBAZIAAANIgBAEIACAAIAAABIACACQAzDJiYCbQg3A1hDAtgAGtj5QgFgGABgIQgBgGgCAAQggAAgkAHQBGg6BbgWIgIAGQglAcgBAlQAAAbAHAKIADADQgmgFgMgNgAs0jvIgHgJIAUARQgIgDgFgFgAqWlBQgUAAgRAKIgUAJQgFAAgTgXIAcgEQAugEAiAFQAkAFAAAOQAAAGgFAJQgXgagjgBg");
	this.shape_5.setTransform(-128.4,-189.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9F2F2").s().p("AiFJLIADAAIgDABgACEpLIABABIgCABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAg");
	this.shape_6.setTransform(-277.4,-149);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-336.2,-372.7,672.6,745.7);


(lib.SullyNest_MuscleBeach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Sully_34_arm("single",0);
	this.instance.setTransform(-221.4,133.6,1,1,0,0,0,146.2,69);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgxAgQgKgQAAgQQAAgZATgRQARgQAXgBQAYgBARAPQATARAAAdQAAARgNASQgRAYgeAAQgiAAgPgcg");
	this.shape.setTransform(-334.1,272);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewY:0,y:133.6,scaleX:1,scaleY:1,rotation:0,x:-221.4,regX:146.2,skewX:0,startPosition:0,regY:69}}]}).to({state:[{t:this.instance,p:{skewY:1.3,y:131.5,scaleX:1,scaleY:1,rotation:0,x:-221.4,regX:146.2,skewX:0,startPosition:0,regY:69}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:129.2,scaleX:0.999,scaleY:0.999,rotation:3.3,x:-222.7,regX:146.2,skewX:0,startPosition:0,regY:69}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:139.7,scaleX:0.999,scaleY:0.999,rotation:3.3,x:-231.1,regX:146.2,skewX:0,startPosition:0,regY:69}}]},1).to({state:[{t:this.instance,p:{skewY:-43.2,y:19.8,scaleX:0.997,scaleY:0.947,rotation:0,x:-222.9,regX:146.1,skewX:-53.1,startPosition:32,regY:69}}]},2).to({state:[{t:this.instance,p:{skewY:8,y:70,scaleX:0.996,scaleY:0.988,rotation:0,x:-266.9,regX:60.4,skewX:2.2,startPosition:33,regY:50}}]},1).to({state:[{t:this.instance,p:{skewY:9.3,y:94.7,scaleX:0.997,scaleY:0.999,rotation:0,x:-181.7,regX:146.2,skewX:9.7,startPosition:33,regY:68.9}}]},1).to({state:[{t:this.instance,p:{skewY:9.4,y:92.1,scaleX:0.997,scaleY:1.008,rotation:0,x:-180.1,regX:146.2,skewX:13.3,startPosition:33,regY:68.9}}]},1).to({state:[{t:this.instance,p:{skewY:9.4,y:94.2,scaleX:0.997,scaleY:1.002,rotation:0,x:-180.2,regX:146.2,skewX:11.8,startPosition:33,regY:68.9}}]},2).to({state:[{t:this.instance,p:{skewY:7.6,y:61.7,scaleX:0.999,scaleY:1.001,rotation:0,x:-266.1,regX:55.5,skewX:10.5,startPosition:33,regY:53.3}}]},13).to({state:[{t:this.instance,p:{skewY:5.5,y:65,scaleX:1,scaleY:1.001,rotation:0,x:-261,regX:61.8,skewX:9.8,startPosition:33,regY:58.4}}]},2).to({state:[{t:this.instance,p:{skewY:9.4,y:91.6,scaleX:0.997,scaleY:1.002,rotation:0,x:-180.2,regX:146.2,skewX:11.8,startPosition:33,regY:68.9}}]},2).to({state:[{t:this.instance,p:{skewY:10.4,y:97.3,scaleX:0.997,scaleY:1.003,rotation:0,x:-184.9,regX:146.2,skewX:14.2,startPosition:34,regY:69}}]},2).to({state:[{t:this.instance,p:{skewY:0,y:57.4,scaleX:0.993,scaleY:1.003,rotation:0,x:-284.4,regX:42,skewX:1,startPosition:32,regY:53}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:56.5,scaleX:0.998,scaleY:0.998,rotation:5.3,x:-273,regX:54.6,skewX:0,startPosition:32,regY:45.5}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:94.1,scaleX:0.998,scaleY:0.998,rotation:9.3,x:-188.7,regX:146.2,skewX:0,startPosition:32,regY:68.9}}]},2).to({state:[{t:this.instance,p:{skewY:0,y:71.1,scaleX:0.998,scaleY:0.998,rotation:11.8,x:-271.5,regX:60.6,skewX:0,startPosition:32,regY:59.6}}]},1).to({state:[{t:this.shape},{t:this.instance,p:{skewY:11.6,y:71.2,scaleX:0.998,scaleY:0.998,rotation:0,x:-271.4,regX:60.6,skewX:11.3,startPosition:32,regY:59.6}}]},2).to({state:[{t:this.instance,p:{skewY:11.3,y:66.2,scaleX:0.997,scaleY:0.992,rotation:0,x:-283.8,regX:47.9,skewX:11.9,startPosition:32,regY:53}}]},14).to({state:[{t:this.instance,p:{skewY:0,y:67.3,scaleX:0.998,scaleY:0.998,rotation:12.6,x:-268,regX:58.6,skewX:0,startPosition:32,regY:53.2}}]},1).to({state:[{t:this.instance,p:{skewY:11.6,y:71.4,scaleX:0.997,scaleY:1.002,rotation:0,x:-253.4,regX:71,skewX:12.1,startPosition:32,regY:54.4}}]},2).to({state:[{t:this.instance,p:{skewY:9.4,y:98,scaleX:0.995,scaleY:1.005,rotation:0,x:-176,regX:146.2,skewX:10.6,startPosition:32,regY:68.9}}]},1).to({state:[{t:this.instance,p:{skewY:13.3,y:106,scaleX:0.996,scaleY:0.976,rotation:0,x:-170,regX:146.2,skewX:13.7,startPosition:32,regY:68.8}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:97.7,scaleX:0.996,scaleY:0.996,rotation:13.6,x:-162.8,regX:146.2,skewX:0,startPosition:32,regY:68.8}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:88.9,scaleX:0.996,scaleY:0.996,rotation:13.6,x:-160.6,regX:146.2,skewX:0,startPosition:32,regY:68.8}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:86.3,scaleX:0.996,scaleY:0.996,rotation:13.6,x:-160.6,regX:146.2,skewX:0,startPosition:32,regY:68.8}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:88.9,scaleX:0.996,scaleY:0.996,rotation:13.6,x:-160.6,regX:146.2,skewX:0,startPosition:32,regY:68.8}}]},2).to({state:[{t:this.instance,p:{skewY:11.2,y:56.6,scaleX:0.991,scaleY:1.001,rotation:0,x:-227.8,regX:64.9,skewX:14.8,startPosition:32,regY:51.9}}]},29).to({state:[{t:this.instance,p:{skewY:9.9,y:52.8,scaleX:0.991,scaleY:0.999,rotation:0,x:-240.1,regX:48.2,skewX:11.9,startPosition:32,regY:49.4}}]},1).to({state:[{t:this.instance,p:{skewY:8.7,y:55.5,scaleX:0.989,scaleY:0.994,rotation:0,x:-231.9,regX:50.5,skewX:9.1,startPosition:32,regY:47.2}}]},1).to({state:[{t:this.instance,p:{skewY:4.9,y:54.9,scaleX:0.994,scaleY:0.996,rotation:0,x:-249.3,regX:43.8,skewX:5.2,startPosition:32,regY:50.1}}]},3).to({state:[{t:this.instance,p:{skewY:-0.1,y:103.2,scaleX:0.992,scaleY:1.053,rotation:0,x:-215.8,regX:146.3,skewX:0.8,startPosition:34,regY:68.9}}]},2).to({state:[{t:this.instance,p:{skewY:1.3,y:71.9,scaleX:1.008,scaleY:0.997,rotation:0,x:-344.7,regX:57.1,skewX:-10.6,startPosition:33,regY:29.8}}]},1).to({state:[{t:this.instance,p:{skewY:-4.5,y:102.7,scaleX:0.996,scaleY:0.998,rotation:0,x:-370.1,regX:45.8,skewX:-9.6,startPosition:33,regY:53.2}}]},1).to({state:[{t:this.instance,p:{skewY:-9,y:101.4,scaleX:0.991,scaleY:0.998,rotation:0,x:-269.9,regX:146.3,skewX:-8.5,startPosition:33,regY:68.8}}]},1).to({state:[{t:this.instance,p:{skewY:-9,y:104,scaleX:0.991,scaleY:0.998,rotation:0,x:-269.9,regX:146.3,skewX:-8.5,startPosition:33,regY:68.8}}]},2).to({state:[{t:this.instance,p:{skewY:-7.5,y:98.9,scaleX:0.991,scaleY:0.999,rotation:0,x:-264.5,regX:146.2,skewX:-9.5,startPosition:33,regY:68.9}}]},23).to({state:[{t:this.instance,p:{skewY:-21,y:64.6,scaleX:0.991,scaleY:0.998,rotation:0,x:-261.6,regX:146.2,skewX:-20.5,startPosition:34,regY:68.8}}]},2).to({state:[{t:this.instance,p:{skewY:0,y:130.2,scaleX:1.121,scaleY:0.985,rotation:0,x:-210.3,regX:146.2,skewX:-6.3,startPosition:24,regY:69}}]},2).to({state:[{t:this.instance,p:{skewY:2.1,y:146.6,scaleX:1.001,scaleY:1,rotation:0,x:-226.6,regX:146.2,skewX:0,startPosition:0,regY:69}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:141.4,scaleX:1,scaleY:1,rotation:0,x:-221.4,regX:146.2,skewX:0,startPosition:0,regY:69}}]},1).to({state:[{t:this.instance,p:{skewY:0,y:138.8,scaleX:1,scaleY:1,rotation:0,x:-221.4,regX:146.2,skewX:0,startPosition:0,regY:69}}]},2).to({state:[{t:this.instance,p:{skewY:0,y:133.6,scaleX:1,scaleY:1,rotation:0,x:-221.4,regX:146.2,skewX:0,startPosition:0,regY:69}}]},2).wait(1));

	// Layer 5
	this.instance_1 = new lib.SullyHeadclip_MuscleBeach("synched",0);
	this.instance_1.setTransform(-120.3,-47.3,1,1,0,0,0,206.2,142.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:142.5,rotation:1.5,x:-113.5,y:-37.8,startPosition:1},0).wait(1).to({regY:142.7,rotation:7.3,x:-97,y:-7.8,startPosition:2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:8.6,skewY:7.3,x:-86.2,y:-0.1,startPosition:3},0).wait(2).to({scaleX:0.99,scaleY:1,skewX:9.6,x:-72.3,y:-2.3,startPosition:5},0).wait(1).to({regX:206.1,scaleX:1,scaleY:0.98,skewX:13.5,skewY:13.1,x:-45.8,y:-24.8,startPosition:6},0).wait(1).to({regY:142.8,scaleX:1,scaleY:1,skewX:13.7,skewY:13.4,x:-41.1,y:-34.3,startPosition:7},0).wait(1).to({regX:206.2,scaleY:1.01,skewX:13.8,skewY:13.5,x:-38.9,y:-37.7,startPosition:8},0).wait(2).to({scaleX:1,scaleY:1,skewX:13.9,skewY:13.4,y:-34.9,startPosition:10},0).wait(13).to({y:-40.1,startPosition:23},0).wait(2).to({y:-45.3,startPosition:25},0).wait(2).to({y:-40.1,startPosition:27},0).wait(2).to({regX:206.1,skewX:15,skewY:14.5,x:-41.4,y:-29.4,startPosition:29},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.1,skewX:0,skewY:0,x:-50,y:-5.2,startPosition:30},0).wait(1).to({x:-52.2,y:-0.8,startPosition:31},0).wait(2).to({x:-54.4,y:5.6,startPosition:33},0).wait(17).to({regX:206.2,scaleX:1,scaleY:0.99,rotation:0,skewX:15.6,skewY:15,x:-51.6,y:9.6,startPosition:50},0).wait(1).to({regX:206.1,scaleY:0.99,skewX:17.1,skewY:16.5,x:-49.2,y:12.2,startPosition:51},0).wait(2).to({scaleX:0.99,scaleY:1,skewX:17.6,skewY:16.6,x:-46,y:13,startPosition:53},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:18.3,skewY:16.7,x:-38.8,startPosition:54},0).wait(1).to({regX:206,scaleX:0.99,scaleY:0.98,skewY:16.4,x:-19.9,y:-6,startPosition:55},0).wait(1).to({regX:206.1,scaleX:0.99,scaleY:1,skewX:18.2,skewY:16.7,x:-10.7,y:-50.9,startPosition:56},0).wait(1).to({x:-8.5,y:-59.7,startPosition:57},0).wait(1).to({y:-62.3,startPosition:58},0).wait(2).to({y:-59.7,startPosition:60},0).wait(29).to({regX:206,scaleX:0.99,scaleY:1.01,skewX:20.1,skewY:17.8,x:1.7,y:-52.5,startPosition:89},0).wait(1).to({skewX:21.1,skewY:18.9,x:6.2,y:-45.2,startPosition:90},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:21.6,skewY:18.8,x:10.1,y:-38.7,startPosition:91},0).wait(3).to({scaleX:0.99,scaleY:1,skewX:20.6,x:0.6,y:-37.4,startPosition:94},0).wait(2).to({scaleX:0.98,scaleY:1.01,skewX:8.6,skewY:2.9,x:-86.6,y:-53.7,startPosition:96},0).wait(1).to({scaleX:0.99,scaleY:1,skewX:1.2,skewY:-1,x:-145.1,y:-84.7,startPosition:97},0).wait(1).to({regX:206.1,scaleY:1,skewX:-2.6,skewY:-4.5,x:-174.5,y:-91.3,startPosition:98},0).wait(1).to({regX:206,skewX:-3.9,skewY:-5.8,x:-179,y:-96.7,startPosition:99},0).wait(2).to({y:-94.1,startPosition:101},0).wait(23).to({regX:206.1,skewX:-2.4,skewY:-4.3,x:-168.9,y:-86.4,startPosition:124},0).wait(2).to({regY:142.9,scaleX:0.98,skewX:-1.4,skewY:-2.7,x:-155.9,y:-73.5,startPosition:126},0).wait(2).to({regX:206.2,regY:142.5,scaleX:1,scaleY:1.01,skewX:-0.2,skewY:0,x:-131.2,y:-55.4,startPosition:128},0).wait(1).to({regY:142.6,scaleY:1,skewX:0,x:-120.2,y:-42,startPosition:129},0).wait(1).to({y:-39.4,startPosition:130},0).wait(2).to({y:-42,startPosition:132},0).wait(2).to({y:-47.2,startPosition:134},0).wait(1));

	// Layer 2
	this.instance_2 = new lib.seat("synched",0);
	this.instance_2.setTransform(-224.6,93.7,1.127,1.245);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(23).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1));

	// Layer 3
	this.instance_3 = new lib.MEL3QHAT("synched",0);
	this.instance_3.setTransform(-164.6,-250.1,1,1,1.3,0,0,118.9,80.2);

	this.instance_4 = new lib.MEL3QTIE("synched",0);
	this.instance_4.setTransform(41.1,144.4,0.999,0.999,13.5,0,0,23.3,21.9);

	this.instance_5 = new lib.MEL3QTIE_NECK("synched",0);
	this.instance_5.setTransform(-79.5,94.2,1,1,1.3,0,0,255.2,95);

	this.instance_6 = new lib.Sully_34_body("synched",0);
	this.instance_6.setTransform(-33.1,85.4,1,1,0,0,0,300.3,327.3);

	this.instance_7 = new lib.MEL3QHAIRBACK2("synched",0);
	this.instance_7.setTransform(45.7,-192.7,1,1,1.3,0,0,84.3,91.5);

	this.instance_8 = new lib.MEL3QHAIRBACK1("synched",0);
	this.instance_8.setTransform(-300.5,-92.8,1,1,1.3,0,0,102.4,85.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#283B4A").s().p("AtGDXIAIgDIgBADIgDAAIgCAAIgCAAgAJgBTIAGABIgDAAgAi6iYIAEAAIABAAIABAEgANCjDIADgBQAAAAAAAAQABgBAAABQAAAAAAAAQABAAAAAAIgHACQAAAAABAAQAAAAAAgBQAAAAABAAQAAAAAAAAgAmZjVIABgBIABABg");
	this.shape_1.setTransform(-133.4,91.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#56BBFE").s().p("AglCGIgBACIgBAAgAAoiHIAAABIgDACg");
	this.shape_2.setTransform(-129.9,-148);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAADIAAgCg");
	this.shape_3.setTransform(-109.8,-166.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ADgSuQgBgDACgDIgBAIgARmQYIADAAIgCAAgAxoPgIABAAIgBAAgAiWyuIANgBIgLAEIgCgDg");
	this.shape_4.setTransform(-78.4,-49.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5763FF").s().p("AB+DAIAEAAIgBAAIgDAAgAh2BLIACAAIgEABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAgAiBi7QAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIgBAIIgDgEg");
	this.shape_5.setTransform(-151.3,-139.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AFVFCQhLhBgPhiQgUh8AGh5QAHgFADgGQAAgcAXgqQAKgRAOgRQBdAHBfAOQBOAMBLgGIAJAAIAdALIAgANIgBAEIAAABIAAAFQAFAGAEAGIAAABIAEAHIAAACIgDACQgkAhgugWIAAgCQiShCiYAfQgEAAgEAEQgUAKgMAVIgCAEQABAHADAEQA0B1CRAWQBfAOBbAlQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAADQgDAHgCAGQgBAFgBACIgDADQgNAIgNALIgBAAIgJAGIgBACQhkABhigcQhsghguBWIABAEIADAVIABAHQAbAcAjAYQBOA2BYAGIABAJIgNAIQglASgjAAQgxAAgrgkgAJNEhQgJgFgJgCIgxgEQhRgLhJgoIgBgEIgDgCIgBAAQgOgNgIgNIgHgHIgBgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgJIAFgBQAvgFAvAGIAzAIQAcAEAaAIQB8AiAvhxQAEgLgIgIQgngng6gNIABgBQijgfh2hhIABgIQB0guB9A8QB1A6BBhdQgBgJgFgFIgCgBQgLgNgIgQIACgCIgBgBQgGgOgGgJIgCgCQgPgTg0gKQgSgHgWgGIhKgUQghgKAAgIQAAgYA7gdQATgKBCgbIAKAAQBSACA4BvIARAiIgBAZIAAANIgBAEIACAAIAAABIACACQAzDJiYCbQg3A1hDAtgAGtj5QgFgGABgIQgBgGgCAAQggAAgkAHQBGg6BbgWIgIAGQglAcgBAlQAAAbAHAKIADADQgmgFgMgNgAs0jvIgHgJIAUARQgIgDgFgFgAqWlBQgUAAgRAKIgUAJQgFAAgTgXIAcgEQAugEAiAFQAkAFAAAOQAAAGgFAJQgXgagjgBg");
	this.shape_6.setTransform(-197.5,-149.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D9F2F2").s().p("AiFJLIADAAIgDABgACEpLIABABIgCABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAg");
	this.shape_7.setTransform(-346.6,-109.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#283B4A").s().p("AtLDRIAIgDIgBADIgDAAIgCABIgCgBgAJeB0IAFAAIgCABgAi1iNIADABIACAAIAAADgANKieQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgFABIADgCgAmSjPIAAgCIABACg");
	this.shape_8.setTransform(-130.4,98.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#56BBFE").s().p("AgpCFIgBABIgBABgAAsiGIAAABIgDABg");
	this.shape_9.setTransform(-120.5,-138.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ADaSyQAAgDABgDIgBAIgARkQ0IAEAAIgCABgAxnPBIABAAIgBABgAhcyzIAOAAIgLADIgDgDg");
	this.shape_10.setTransform(-74.3,-38.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5763FF").s().p("AB5DDIAEAAIgBABIgDgBgAh4BHIACABIgEABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAgBABAAgAh8i/QAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAIgBAIIgDgEg");
	this.shape_11.setTransform(-142.1,-131.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AFIFAQhJhDgMhhQgRh9AKh5QAHgFADgGQAAgcAZgoQAKgSAOgQQBdAJBfAQQBNAOBMgDIAIgBIAdANIAfAOIgBAEIAAABIAAAFQAFAFAEAHIAAABIAEAHIAAABIgDADQglAfgtgXIgBgBQiQhGiYAaQgEABgEADQgVAKgNAUIgCAFQABAGADAFQAxB2CRAZQBeARBaAnQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAIAAAEIgFAMQgBAGgCABIgCADQgOAIgNALIgBAAIgJAGIgCABQhjgBhigeQhrglgwBVIABAEIADAVIAAAHQAbAdAiAZQBMA4BYAJIABAJIgNAHQglARghAAQgyAAgsgogAJBEnQgJgGgJgCIgxgFQhQgNhIgrIgCgDIgCgDIgBAAQgOgNgIgOIgHgHIgBgCQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAIAFgJIAFgBQAvgEAvAIIAzAIQAcAFAZAJQB8AlAyhwQAEgLgIgIQgmgog5gOIABgBQiigkh0hjIABgIQB2gsB7BAQBzA9BEhcQgBgIgFgFIgCgBQgLgOgHgQIACgCIgBgBQgFgOgGgJIgCgCQgPgTgzgMQgSgHgWgGIhJgWQgigLABgIQABgYA7gcQATgKBDgZIAKABQBSAEA1BwIAQAiIgBAZIgBANIgBAEIACAAIAAABIACACQAuDLidCWQg4A0hEAsgAGwj3QgFgGAAgIQAAgGgCAAQgggCgkAGQBHg3BcgUIgJAFQglAbgCAmQgBAaAHALIADADQgmgGgLgNgAsykPQgDgDgDgFQAIAIALAIQgHgDgGgFgAqSlcQgUgBgRAJIgUAJQgFAAgSgXIAcgEQAugDAiAHQAkAFgBAOQAAAGgFAJQgWgagkgCg");
	this.shape_12.setTransform(-187.7,-141.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9F2F2").s().p("AiUJIIADAAIgDAAgACUpHIABAAIgCACQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAg");
	this.shape_13.setTransform(-338.1,-105.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#283B4A").s().p("AJUDWIgCgBIAEABIgCAAgAtVCfIgEgBIAJgCIgCADIgDAAgANWgiIACgBQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAAAIgGACQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAgAikh6IAEAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABABAAAAIAAADgAl5jTIABgCIABACg");
	this.shape_14.setTransform(-127.9,122.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#56BBFE").s().p("Ag2CAIgBABIgBABgAA5iBIAAABIgDACg");
	this.shape_15.setTransform(-93.7,-109.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("ADHS8QAAgEACgDIgCAIgARaSaIgCgBIAEABIgBAAIgBAAgAxbNCIABAAIgBAAgACEy8IAOAAIgMADIgCgDg");
	this.shape_16.setTransform(-68.3,-4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5763FF").s().p("AByDOIADABIgBAAIgCgBgAhyA7IACAAIgEABQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAgAhbjLQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAIgCAIIgCgFg");
	this.shape_17.setTransform(-117.3,-103.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AETFuQhDhKgBhjQgEh+AWh2QAHgEADgGQAEgcAcgmQAMgQAQgPQBbATBdAaQBMAVBLAFIAJAAIAbAPIAeARIgCAEIAAABIgBAFQAFAGAEAHIAAABIACAHIAAACIgDACQgoAagqgaIgBgBQiIhVibALQgEAAgEADQgVAIgPATIgDAEQABAHACAEQAlB6CNApQBdAbBVAvQAAAAAAAAQABAAAAABQABAAAAABQABAAAAABIAAADQgFAGgBAGIgEAHIgDACIgcAQIgBgBIgJAGIgDABQhigLhegoQhmgvg5BPIAAAFIAAAUIABAHQAXAgAfAcQBHBABWARIABAJIgPAGQgeAKgbAAQg6AAgtgxgAINFuQgIgGgKgEIgwgKQhOgVhDgyIgBgDIgCgDIgBAAQgNgPgGgOIgGgHIgBgDQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAIAGgIIAEgBQAxACAtAMIAyANQAbAIAZALQB2AyA+hqQAFgLgHgJQgigrg4gVIACAAQieg0hohvIACgIQB5gfBzBMQBtBGBNhSQAAgIgFgGIgCgBQgKgPgFgQIACgCIgBgBQgDgPgFgJIgCgDQgNgVgygQQgQgJgWgJIhHgdQgfgOABgJQADgXA+gWQAUgHBFgTIAKACQBRAMAqB1QAHATAFARIgEAZIgCANIgCADIACABIAAABIACACQAZDOirCGQg9AuhHAkgAGzi8QgEgHACgIQABgGgDAAQgggFgkADQBMgwBdgLIgJAFQgnAXgGAlQgEAaAGALIADAEQgmgKgKgOgAsllTIgFgIQAHAIALAKQgHgEgGgGgAp9mPQgUgDgSAHQgUAIgBgBQgEAAgRgaQANgBAPABQAvACAgAKQAjAJgBAOQgCAGgFAIQgTgdgjgFg");
	this.shape_18.setTransform(-158.4,-119.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9F2F2").s().p("AjOI2IAAgBIADABIgDAAgADOo1IABABIgCABIABgCg");
	this.shape_19.setTransform(-313.5,-98.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#283B4A").s().p("AJQDUIgCgBIAFABIgDAAgAtXCeIgEgBIAJgCIgCADIgDAAgANYgiIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgGACQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAABAAgAigh6IAEABQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIgBAEgAlzjSIABgBIABABg");
	this.shape_20.setTransform(-120,129.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#56BBFE").s().p("Ag5CAIgBABIgBAAgAA8iAIAAABIgDABg");
	this.shape_21.setTransform(-80.7,-100.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5763FF").s().p("ABwDNIAEAAIgCABIgCgBgAhxA6IADAAIgFABQAAAAAAAAQABAAAAgBQAAAAAAAAQABAAAAAAgAhUjJQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAIgCAIIgCgEg");
	this.shape_22.setTransform(-104.7,-95.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#61FFDE").s().p("AAAAAIABgBIgBADIAAgCg");
	this.shape_23.setTransform(-58.2,-116.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ADCS0QAAgEACgCIgCAHgARWSSIgBAAIADAAIgBAAIgBAAgAxXM8IABAAIgBABgACzy0IAOABIgMACIgCgDg");
	this.shape_24.setTransform(-59.7,3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AEuFsQhBhKAAhiQgBh9AYh2QAHgEAFgFQADgcAdgmQANgQAQgPQBaATBeAaQBKAVBLAEIAJABIAbAPIAeAQIgCAEIAAABIgBAGIAIAMIAAABIACAHIAAACIgDACQgoAagqgaIAAgBQiHhUibALQgEAAgEADQgWAHgOATIgDAFQgBAGADAFQAhB5CNAoQBcAbBUAvQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIAAADQgEAHgCAGIgEAGIgDADIgdAPIgBAAIgJAFIgCACQhigMhdgnQhlgvg7BPIAAAEIAAAVIAAAHQAXAfAfAcQBEA/BWARIAAAKIgNAFQgfAKgbAAQg7AAgrgwgAIoFrQgIgGgJgDIgwgKQhPgVhCgyIgBgDIgBgDIgBAAQgMgOgGgPIgHgHIgBgCQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABAAIAGgIIAFgBQAvABAtANIAyANQAbAIAYAKQB2AyA/hqQAHgKgIgJQgggrg4gVIACAAQidgzhmhuIACgIQB6gfBxBLQBsBFBPhRQAAgIgFgGIgBgBQgKgOgFgRIADgBIgBgCQgEgOgEgKIgCgCQgNgWgxgPQgRgJgUgJIhHgdQgggOABgIQAEgYA/gWQAUgHBFgSIALACQBQALAnB1QAHATAEAQIgEAZIgBANIgDAEIACABIAAABIACACQAUDMitCFQg/AuhIAkgAHai7QgDgGABgIQAAgGgCgBQgggEgkACQBNgwBegKIgJAFQgoAWgHAmQgEAZAFALIADAEQglgKgKgOgAr3lNIACAAIAHAGIgJgGgAtGlNIgDgDIgGgJIALAMgAqhmNQgUgCgTAHQgSAHgCAAQgEgBgRgZQANgBAPABQAuABAhAKQAjAJgCAOQgBAGgFAIQgTgcgjgGg");
	this.shape_25.setTransform(-148.7,-111.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9F2F2").s().p("AizIyIAAgBIADABIgDAAgACzoxIABAAIgCACIABgCg");
	this.shape_26.setTransform(-304.7,-89.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#283B4A").s().p("AJNDUIgCgBIAFABIgDAAgAtZCeIgEgBIAJgCIgCADIgDAAgANagiIACgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgGACQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAABAAgAich6IAEABQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAAAEgAlujSIABgBIABABg");
	this.shape_27.setTransform(-108.7,127.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5763FF").s().p("ABvDNIADAAIgBABIgCgBgAhvA6IACAAIgEABQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAABAAgAhOjJQAAgBABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAIgDAIIgCgEg");
	this.shape_28.setTransform(-89.3,-97.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("ARTSjIgBAAIADAAIgBABIgBgBgAxUNNIABAAIgBABgADcyjIAOABIgLACIgDgDg");
	this.shape_29.setTransform(-47.8,-0.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#56BBFE").s().p("Ag8B/IAAABIgCABgAA/iAIAAABIgDABg");
	this.shape_30.setTransform(-65,-102.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D9F2F2").s().p("Ai9IyIAAAAIACAAIgCAAgAC9oxIABABIgCABIABgCg");
	this.shape_31.setTransform(-289.2,-92.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AEjFsQhAhKAChiQABh9Abh2QAHgEAFgFQAEgcAegmQAMgQARgPQBaATBcAaQBKAVBMAEIAIABIAcAPIAcAQIgBAEIAAABIgBAGIAHAMIAAABIADAHIAAACIgDACQgqAagpgaIAAgBQiFhUicALQgEAAgEADQgVAHgQATIgCAFQgBAGACAFQAgB5CMAoQBcAbBSAvQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAAADQgFAHgCAGIgEAGIgDADIgdAPIgBAAIgKAFIgCACQhigMhcgnQhkgvg8BPIAAAEIgBAVIAAAHQAWAfAfAcQBDA/BWARIAAAKIgOAFQgfAKgbAAQg7AAgqgwgAIdFrQgIgGgJgDIgwgKQhOgVhBgyIgBgDIgBgDIgBAAQgMgOgGgPIgHgHIAAgCQAAgBAAAAQAAgBAAAAQABgBABAAQAAAAABAAIAHgIIAEgBQAwABAtANIAxANQAbAIAYAKQB1AyBBhqQAGgKgGgJQgggrg4gVIACAAQicgzhkhuIADgIQB6gfBwBLQBqBFBQhRQABgIgEgGIgCgBQgJgOgGgRIADgBIAAgCQgDgOgFgKIgCgCQgMgWgxgPQgRgJgUgJIhGgdQgfgOABgIQAEgYA/gWQAUgHBGgSIAKACQBQALAlB1QAHATAEAQQgCAKgCAPIgDANIgCAEIACABIgBABIACACQARDMiwCFQg/AuhJAkgAHai7QgEgGABgIQABgGgCgBQgggEgkACQBOgwBdgKIgJAFQgoAWgHAmQgFAZAFALIADAEQgmgKgIgOgAr2lNIACAAIAHAGIgJgGgAtElNIgDgDIgFgJIAKAMgAqemNQgUgCgSAHQgUAHgBAAQgFgBgQgZQANgBAPABQAvABAhAKQAiAJgCAOQgBAGgFAIQgTgcgjgGg");
	this.shape_32.setTransform(-132.3,-113.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#283B4A").s().p("AI+EDIgCgCIAEACIgCAAgAtaA4IgEgBIAJgBIgCADIgDgBgANaAqIADgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAIgHABQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAgAiNiUIAEABQABAAgBABIAAADgAlXkAIACgCIAAACg");
	this.shape_33.setTransform(-90.6,100.3,1,1,0,-0.6,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#56BBFE").s().p("AhGB5IACgBIAAABgABHh4IAAABIgDACg");
	this.shape_34.setTransform(-32.1,-123.2,1,1,0,-0.6,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5763FF").s().p("ABPDVIgCgCIADACgAhPjRQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIgDAIQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_35.setTransform(-54.8,-120.4,1,1,0,-0.6,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D9F2F2").s().p("AkNISIAAAAIADAAIgCABIgBgBgAENoSIABABIgCABIABgCg");
	this.shape_36.setTransform(-251.6,-135.3,1,1,0,-0.6,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("ADNGSQg6hPAJhgQALh8AkhxQAHgDAFgFQAGgbAggiQAPgQARgMQBYAcBZAjQBJAdBKAMIAJABIAZAPIAcAUIgCADIAAABIgCAFQAFAGACAIIgBABIACAHIAAACIgDADQgrAWgnggIgBgBQh9hfiagGQgEAAgFADQgVAFgRARIgDAEQgBAHACAEQAVB7CIA2QBaAjBOA4QABABAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAADQgGAGgCAGQgDAFgCAAIgDADIgdAMIgBAAIgKAEIgCABQhggWhZgwQhhg5hBBIIAAAFIgDAUQABADgBAEQAUAhAcAeQA+BFBUAbIgBAJQgIABgGADQgWAFgUAAQhFAAgsg8gAHFGsQgHgHgJgEQgWgIgZgHQhLgdg9g3QAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgEIgBAAQgLgPgEgPIgGgIIAAgCQAAgDAEAAIAGgHQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAQAvAGArARIAwASQAaALAYAMQBwA9BIhhQAHgKgGgJQgdgvg0gZIABAAQiXhDhah5IADgIQB7gQBqBUQBkBSBVhJQABgJgDgGIgCgBQgHgQgEgQIACgBIAAgCQgCgPgEgJIgCgDQgKgVgwgUIgjgVIhEgkQgegRACgIQAGgXBBgOQAUgGBHgLIAKADQBOATAdB4IAIAiIgHAYIgDAMIgCADIACACIgBAAIACADQAADNi4ByQhDAmhLAcgAGsh6QgEgGADgIQABgGgDgBQgfgIgjgCQBRglBdgCIgJAFQgqARgLAkQgHAaAFALQAAAAAAABQABAAAAABQAAAAABABQAAAAABABQgkgOgIgPgAsRmNQgDgEgCgFIAPAUQgGgEgEgHgAplm3QgTgEgUAFQgTAGgCgBQgEgBgNgbQANAAAPADQAtAGAfANQAiAMgDAOQgBAGgGAHQgRgegigJg");
	this.shape_37.setTransform(-92.7,-142,1,1,0,-0.6,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AIHSiQAAgDAEgCIgEAHgArlKqIABAAIgBAAgALZyiIANABIgLACIgCgDg");
	this.shape_38.setTransform(-63.6,-16.8,1,1,0,-0.6,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#283B4A").s().p("AJAEHIgCgBIAEABIgCAAgAtaA5IgEgBIAJgBIgCADIgDgBgANaArIADgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABIgHAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAgAiPiXIAEACQABgBAAABIAAAEgAlZkEIACgCIgBACg");
	this.shape_39.setTransform(-86.9,93.1,1,1,0,0.4,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#56BBFE").s().p("AhFB7IACgBIAAABgABGh6IAAABIgDACg");
	this.shape_40.setTransform(-26.4,-134.5,1,1,0,0.4,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5763FF").s().p("ABRDZIgDgCIAEACgAhRjVQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIgDAIQgCgCAAgDg");
	this.shape_41.setTransform(-49.1,-131.6,1,1,0,0.4,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#D9F2F2").s().p("AkJIcIAAAAIADAAIgBAAIgCAAgAEIobIABAAIgCACIABgCg");
	this.shape_42.setTransform(-245.8,-146.9,1,1,0,0.4,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ADTGaQg7hRAIhiQAKh+AjhzQAHgEAEgFQAGgbAggjQAPgPARgNQBYAdBaAjQBIAeBLAMIAIABQAOAHAMAJIAcATIgCAEIAAABIgCAFQAFAGACAIIAAABIACAIIgBABIgDADQgqAWgoggIAAgBQh+hhibgFQgEAAgFACQgVAGgRARIgCAEQgBAHABAEQAXB9CJA3QBZAkBPA5QABABAAAAQABAAAAAAQAAABABAAQAAABAAAAIAAADQgGAGgCAGQgCAFgCABIgDACIgdAMIgBAAIgKAFIgCABQhhgWhZgxQhhg7hBBKIAAAEIgCAVQABADgBAEQATAiAdAfQA/BGBUAbIgBAKQgIABgGACQgWAGgUAAQhFAAgsg9gAHKGzQgGgGgJgEQgWgIgagIQhLgeg9g4QAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBIgCgDIgBAAQgKgQgFgPIgGgIIAAgCQAAgDAEAAIAGgHQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAIADAAQAvAHAsARIAvASQAaALAZANQBxA+BGhiQAHgLgGgJQgdgwg1gZIACAAQiYhEhbh8IADgIQB7gQBqBWQBlBTBVhLQABgIgEgHIgBgBQgIgQgEgQIACgCIAAgCQgCgOgEgKIgCgDQgKgVgwgUQgQgLgUgLIhEgkQgegSACgIQAGgYBAgOQAUgGBHgLIAKADQBPAUAdB5IAJAjIgHAYIgDANIgCADIACABIgBABIACADQACDRi3BzQhCAohLAcgAGsh8QgEgHADgIQABgGgCgBQgggIgjgBQBRgnBdgBIgJAEQgqASgKAkQgHAbAFALQAAABAAAAQABABAAAAQAAABABAAQAAABABAAQgkgOgJgPgAsTmUIgFgJIAQAUQgHgEgEgHgApnm/QgTgEgUAFQgTAGgCgBQgEgBgOgcQANABAPADQAtAGAgANQAiANgDAOQgBAGgGAGQgRgdgigKg");
	this.shape_43.setTransform(-87,-153.6,1,1,0,0.4,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AIUS3QAAgDAEgCIgEAHgArdK2IABAAIgBAAgALQy4IAOACIgMACIgCgEg");
	this.shape_44.setTransform(-59.1,-26.1,1,1,0,0.4,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#283B4A").s().p("AI9EJIgBgCIAEACIgDAAgAtbA6IgDgCIAJgBIgCAEIgEgBgANaArIADgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIgGABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAgAiNiXIAEABQABAAgBAAIAAAEgAlWkGIACgCIAAACg");
	this.shape_45.setTransform(-85.4,90.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#56BBFE").s().p("AhGB8IACgBIAAABgABHh7IAAABIgDACg");
	this.shape_46.setTransform(-24,-138.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5763FF").s().p("ABPDaIgDgBIAEABgAhPjWQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAIgDAIQgCgCAAgDg");
	this.shape_47.setTransform(-46.7,-135.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#D9F2F2").s().p("AkOIgIAAgBIADABIgCAAIgBAAgAEOofIABABIgCACIABgDg");
	this.shape_48.setTransform(-243.3,-151);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ADMGdQg6hRAKhjQAKh/Alh0QAHgEAEgFQAGgbAhgjQAPgQARgMQBYAcBZAkQBIAeBLAMIAIABIAZAQIAcAUIgBADIAAABIgCAGQAEAGADAHIgBACIACAHIgBACIgDADQgrAWgmggIgBgCQh9hhibgFQgEAAgFACQgVAGgRARIgCAEQgBAHABAEQAWB+CIA4QBZAkBOA5QABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIAAADQgGAGgCAGQgCAFgCABIgDACIgdAMIgBAAIgKAFIgCABQhhgWhZgxQhgg7hCBKIAAAEIgCAVQABADgBAEQATAiAcAfQA+BHBVAbIgCAKQgIABgGACQgWAFgUAAQhFAAgsg8gAHEG2QgHgGgJgEQgWgIgZgIQhLgeg9g4QAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgEIgBAAQgKgQgFgPIgGgIIAAgCQAAgDAEAAIAGgHQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAQAvAHAsARIAvASQAaAMAYANQBxA9BHhiQAHgLgGgJQgcgwg1gaIABAAQiWhEhbh8IADgIQB8gRBpBWQBlBUBUhLQACgJgEgGIgBgBQgIgRgEgQIACgBIAAgCQgCgPgEgKIgCgCQgJgWgwgUQgQgLgUgLIhDglQgegRACgJQAGgXBBgPQAUgGBHgLIAJADQBPAUAcB6IAJAjIgHAZIgEAMIgCADIACACIAAABIABADQAADSi4B0QhDAohLAcgAGrh8QgEgHADgIQABgGgCgBQgggIgigCQBQgnBegBIgJAEQgqASgLAlQgHAaAFAMQAAAAAAAAQABABAAAAQAAABABAAQAAABABABQgkgOgJgPgAsRmXIgFgJIAQAVQgHgFgEgHgAplnBQgTgFgUAGQgTAFgCAAQgEgCgNgbQANAAAPADQAtAGAfAOQAiAMgDAOQgBAGgGAHQgRgegigJg");
	this.shape_49.setTransform(-84.3,-157.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AIFS/QAAgDAEgCIgEAHgArnK6IABAAIgBABgALazAIANACIgLACIgCgEg");
	this.shape_50.setTransform(-56.8,-29.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#5763FF").s().p("ABPDZIgDgBIAEABgAhPjVQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIgDAIQgCgCAAgDg");
	this.shape_51.setTransform(-46.7,-132.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#56BBFE").s().p("AhGB7IACgBIAAABgABHh6IAAABIgDACg");
	this.shape_52.setTransform(-24,-135.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#D9F2F2").s().p("AkOIdIAAgBIADABIgCAAIgBAAgAEOocIABAAIgCACIABgCg");
	this.shape_53.setTransform(-243.3,-147.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ADMGbQg6hRAKhiQAKh+Alh0QAHgEAEgFQAGgaAhgkQAPgPARgNQBYAdBZAkQBIAdBLAMIAIABIAZAQIAcAUIgBADIAAABIgCAGQAEAGADAHIgBABIACAIIgBABIgDADQgrAXgmghIgBgBQh9hhibgFQgEAAgFACQgVAGgRARIgCAEQgBAHABAEQAWB+CIA3QBZAkBOA5QABAAAAAAQABAAAAABQAAAAABABQAAAAAAABIAAADQgGAGgCAGQgCAFgCAAIgDADIgdAMIgBAAIgKAEIgCABQhhgWhZgwQhgg7hCBJIAAAFIgCAVQABACgBAFQATAiAcAeQA+BHBVAaIgCAKQgIABgGADQgWAFgUAAQhFAAgsg8gAHEG0QgHgGgJgEQgWgIgZgIQhLgeg9g4QAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgCgDIgBAAQgKgQgFgPIgGgIIAAgDQAAgCAEgBIAGgHQAAAAABAAQAAAAAAAAQAAgBABAAQAAABAAAAIADAAQAvAGAsASIAvASQAaALAYANQBxA9BHhiQAHgKgGgKQgcgvg1gaIABAAQiWhEhbh7IADgIQB8gRBpBWQBlBTBUhKQACgJgEgHIgBgBQgIgQgEgQIACgBIAAgCQgCgPgEgKIgCgCQgJgWgwgUQgQgLgUgLIhDgkQgegSACgIQAGgXBBgPQAUgGBHgLIAJADQBPAUAcB5IAJAjIgHAZIgEAMIgCADIACACIAAABIABADQAADQi4B0QhDAohLAcgAGrh8QgEgHADgIQABgFgCgBQgggIgigCQBQgnBegBIgJAEQgqASgLAkQgHAbAFALQAAABAAAAQABAAAAABQAAAAABABQAAABABAAQgkgOgJgPgAsRmVIgFgJIAQAVQgHgFgEgHgAplm/QgTgEgUAFQgTAGgCgBQgEgBgNgcQANABAPADQAtAGAfANQAiANgDANQgBAGgGAHQgRgdgigKg");
	this.shape_54.setTransform(-84.3,-154.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#283B4A").s().p("AI9EIIgBgCIAEACIgDAAgAtbA6IgDgCIAJgBIgCADIgEAAgANaAqIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgGABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAgAiNiXIAEACQABgBgBABIAAADgAlWkFIACgBIAAABg");
	this.shape_55.setTransform(-85.4,92.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AIFS5QAAgDAEgCIgEAHgArnK3IABAAIgBAAgALay6IANACIgLACIgCgEg");
	this.shape_56.setTransform(-56.8,-26.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5763FF").s().p("ABPDZIgDgBIAEABgAhPjVQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIgDAIQgCgCAAgDg");
	this.shape_57.setTransform(-46.7,-135);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#283B4A").s().p("AI9EIIgBgCIAEACIgDAAgAtbA6IgDgCIAJgBIgCADIgEAAgANaAqIADgBQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIgGABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAgAiNiXIAEACQABgBgBABIAAADgAlWkFIACgCIAAACg");
	this.shape_58.setTransform(-85.4,90);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5763FF").s().p("ABPDZIgDgCIAEACgAhPjVQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIgDAIQgCgCAAgDg");
	this.shape_59.setTransform(-46.7,-137.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#56BBFE").s().p("AhIB6IABgBIAAABgABJh5IAAABIgDACg");
	this.shape_60.setTransform(-24.6,-129.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#5763FF").s().p("ABLDaIgCgBIADABgAhLjWQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAABABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIgDAIQgCgCAAgDg");
	this.shape_61.setTransform(-47.4,-126.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#D9F2F2").s().p("AkYIYIAAgBIADABIgCAAIgBAAgAEYoXIABAAIgCACIABgCg");
	this.shape_62.setTransform(-243.6,-145.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("ADBGiQg5hRALhjQANh+AnhyQAHgEAEgFQAHgbAigiQAOgQASgMQBXAeBYAmQBIAeBLAMIAIABIAZATIAbAUIgBADIAAABIgCAGQAEAGACAHIAAABIABAIIAAABIgDADQgsAWgmghIAAgCQh8hjiagHQgEgBgFACQgVAGgSAQIgCAEQgBAGABADQATCBCHA5QBZAmBNA6QABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIgBADQgFAGgCAGQgDAFgCAAIgDADIgdALIgBAAIgKAFIgCABQhggYhZgyQhfg9hDBIIAAAFIgDAVQABACgBAFQATAiAbAfQA9BHBUAcIgBAKQgJABgFACQgVAFgUAAQhGAAgrg+gAG4HAQgHgHgJgEIgvgRQhKgfg8g4QAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgCgEIgBAAQgKgQgEgPIgGgIIgBgDQABgCAEgBIAGgHQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAQAvAHArATIAvASQAaAMAXAOQBwA/BKhhQAHgKgGgKQgcgwg0gaIABAAQiVhHhYh9IADgIQB8gPBoBYQBjBVBWhJQABgJgDgGIgBgBQgIgQgEgQIACgCIAAgCQgBgOgEgKIgCgDQgJgWgwgVIgjgWIhCgmQgegSACgIQAGgXBBgOQAVgFBHgKIAJADQBPAVAaB6IAIAjQgEAKgEAPIgEAMIgCADIACACIAAABIABADQgEDQi6BwQhDAnhMAagAGphwQgEgHAEgIQABgGgDgBQgfgIgjgDQBSglBdAAIgJAEQgqASgMAjQgHAbAFALIACAFQgjgPgJgPgAsOmfQgDgFgBgEQAGAJAJALQgGgEgFgHgAphnGQgTgFgTAFQgUAFgBAAQgFgCgMgcQANABAPADQAsAHAgAOQAhANgDAOQgBAGgGAGQgRgdgigKg");
	this.shape_63.setTransform(-84.1,-150);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#283B4A").s().p("AI5EQIgBgCIAEACIgDAAgANaA4IADgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgHABQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAgAtaAoIgEgBIAJgBIgCADIgDgBgAiKibIAEABQABAAAAAAIAAAEgAlQkOIACgBIgBACg");
	this.shape_64.setTransform(-90.1,97.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AHrS3QAAgDADgDIgDAHgAr4KdIACAAIgCABgALry4IAOADIgMABIgCgEg");
	this.shape_65.setTransform(-58.9,-20.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#283B4A").s().p("AI5EVIgCgCIAEACIgCAAgANYBCQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQAAAAAAAAQABAAAAABQAAAAAAAAQABAAAAABgAtaAcIgEgCIAJgBIgBAEIgEgBgAiIieIAEABQABAAgBABIAAADgAlPkSIACgCIgBACg");
	this.shape_66.setTransform(-99,110.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#56BBFE").s().p("AhJB4IACAAIAAABgABKh4IAAABIgDACg");
	this.shape_67.setTransform(-32.9,-115.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#5763FF").s().p("ABKDaIgDgBIAEACgAhKjYQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABIAEgCIgDAIQgBgDAAgDg");
	this.shape_68.setTransform(-55.7,-113.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D9F2F2").s().p("AkZIUIAAgBIAEABIgCAAIgCAAgAEZoTIABAAIgDACIACgCg");
	this.shape_69.setTransform(-251.9,-134.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("ADAGmQg5hSAMhiQANh+AmhzQAHgCAGgFQAGgbAhgiQAPgPASgMQBXAfBYAmQBIAeBKAPIAIABQAOAJALAKIAcAUIgCADIAAABIgCAFQAFAHACAHIgBACIACAHIAAACIgEADQgqAUgoghIAAgBQh7hliagKQgEAAgFADQgVAFgSAQIgCAEQgBAFABAEQATCACHA7QBYAnBNA7QABAAAAAAQAAAAABABQAAAAABABQAAAAABABIgBADQgGAGgCAGQgDAFgCAAIgCADQgPAEgQAHIgBAAIgKAEIgCABQhfgZhYg0Qhfg9hDBHIAAAFIgEAVQABADgBAEQATAiAbAgQA9BHBUAeIgCAKQgIABgFACQgTAEgSAAQhJAAgshAgAG2HHQgGgHgJgEQgVgJgagHQhKghg8g6QABgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgDIgBAAQgKgQgEgQIgGgIIAAgCQAAgDAEAAIAHgHQAAAAAAAAQAAAAAAAAQABgBAAABQAAAAAAAAIADAAQAvAIArATIAwATQAZAMAYANQBvBCBKhhQAHgKgFgKQgcgwg1gbIABAAQiUhJhYh+IADgHQB7gPBoBbQBiBWBYhIQABgIgDgHIgBgBQgIgRgEgQIADgBIAAgCQgDgPgDgKIgBgDQgKgXgwgUQgQgMgTgLIhDgmQgegSADgJQAGgXBBgNQAVgFBHgJIAJAEQBPAVAaB7IAHAjIgHAYIgFAMIgBAEIABABIAAABIABADQgDDRi7BtQhEAmhLAagAGqhpQgEgHAEgIQAAgGgDgBQgegJgkgCQBRglBdACIgIAEQgqARgMAkQgHAaAEALIADAFQgkgQgHgPgAsNmmIgEgJQAGAJAJAMQgGgFgFgHgApfnLQgTgGgUAFQgTAFgCAAQgEgCgOgcQAOABAPAEQAsAHAhAOQAgAOgDAOQgBAGgGAGQgQgegigKg");
	this.shape_70.setTransform(-92.4,-137.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AHnS0QAAgEAEgCIgEAHgAr6KNIABAAIgBAAgALty0IAOACIgNABIgBgDg");
	this.shape_71.setTransform(-67.4,-6.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5763FF").s().p("ABKDaIgDgBIAEACgAhKjXQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAABIAEgCIgDAHQgBgCAAgCg");
	this.shape_72.setTransform(-57.9,-109.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D9F2F2").s().p("AkYIUIAAgBIACABIgBAAIgBAAgAEYoTIABAAIgCACIABgCg");
	this.shape_73.setTransform(-254.1,-130.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("ADAGmQg5hSALhiQAOh+AnhzQAGgCAFgFQAHgbAhgiQAPgPASgMQBWAfBaAmQBHAeBKAPIAJABQAOAJALAKIAbAUIgBADIAAABIgDAFQAFAHACAHIgBACIACAHIAAACIgDADQgrAUgnghIAAgBQh8hliagKQgEAAgFADQgVAFgRAQIgEAEQgBAFABAEQAUCACHA7QBYAnBNA7QAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIAAADQgGAGgDAGQgCAFgCAAIgDADQgOAEgQAHIAAAAIgKAEIgCABQhhgZhXg0Qhfg9hEBHIAAAFIgCAVQAAADgBAEQATAiAbAgQA+BHBTAeIgBAKQgJABgFACQgTAEgSAAQhJAAgshAgAG2HHQgGgHgJgEQgVgJgZgHQhLghg7g6QAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgDIgBAAQgKgQgEgQIgGgIIAAgCQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIAGgHQABAAAAAAQAAAAAAAAQAAgBABABQAAAAABAAIACAAQAvAIAsATIAuATQAaAMAYANQBvBCBKhhQAHgKgGgKQgbgwg1gbIACAAQiVhJhYh+IADgHQB8gPBnBbQBjBWBWhIQACgIgDgHIgCgBQgHgRgEgQIACgBIAAgCQgCgPgDgKIgCgDQgJgXgwgUQgPgMgUgLIhCgmQgfgSADgJQAGgXBCgNQAUgFBHgJIAKAEQBOAVAZB7IAIAjIgIAYIgDAMIgCAEIACABIgBABIABADQgDDRi7BtQhEAmhLAagAGphpQgDgHADgIQABgGgCgBQgfgJgjgCQBRglBdACIgJAEQgqARgMAkQgHAaAFALIACAFQgkgQgIgPgAsNmmIgEgJQAFAJAKAMQgGgFgFgHgApfnLQgUgGgTAFQgTAFgCAAQgEgCgNgcQANABAPAEQAtAHAfAOQAiAOgDAOQgCAGgGAGQgQgegigKg");
	this.shape_74.setTransform(-94.6,-133);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AHnS0QAAgEADgCIgCAHgAr5KNIABAAIgBAAgALty0IANACIgLABIgCgDg");
	this.shape_75.setTransform(-69.6,-2.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#5763FF").s().p("ABKDbIgDgCIAEACgAhKjYQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAEgBIgDAIQgBgCAAgEg");
	this.shape_76.setTransform(-60.1,-107.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#D9F2F2").s().p("AkZIUIAAgBIAEABIgCAAIgCAAgAEZoTIAAAAIgCACIACgCg");
	this.shape_77.setTransform(-256.3,-128.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("ADAGmQg5hSAMhiQANh+AmhzQAHgCAGgFQAGgbAhgiQAPgPASgMQBXAfBYAmQBIAeBKAPIAIABQAOAJALAKIAcAUIgCADIAAABIgCAFQAFAHACAHIAAACIABAHIAAACIgEADQgrAUgnghIAAgBQh7hliagKQgEAAgFADQgVAFgSAQIgCAEQgBAFABAEQATCACHA7QBYAnBNA7QABAAAAAAQAAAAABABQAAAAABABQAAAAABABIgBADQgGAGgCAGQgDAFgCAAIgCADQgPAEgPAHIgCAAIgKAEIgCABQhfgZhYg0Qhfg9hDBHIAAAFIgEAVQABADgBAEQATAiAbAgQA9BHBUAeIgCAKQgIABgFACQgTAEgSAAQhJAAgshAgAG2HHQgGgHgJgEQgVgJgagHQhKghg8g6QABgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgCgDIgBAAQgKgQgEgQIgGgIIAAgCQAAgDAEAAIAHgHQAAAAAAAAQAAAAAAAAQAAgBABABQAAAAAAAAIADAAQAvAIArATIAwATQAZAMAYANQBvBCBKhhQAHgKgFgKQgdgwg0gbIABAAQiUhJhYh+IADgHQB7gPBoBbQBjBWBWhIQACgIgDgHIgBgBQgIgRgEgQIADgBIAAgCQgCgPgEgKIgBgDQgKgXgvgUQgRgMgTgLIhDgmQgegSADgJQAGgXBBgNQAVgFBHgJIAJAEQBOAVAbB7IAHAjIgHAYIgFAMIgBAEIABABIAAABIACADQgFDRi6BtQhDAmhMAagAGqhpQgEgHAEgIQAAgGgDgBQgegJgkgCQBSglBcACIgHAEQgsARgLAkQgHAaAEALIADAFQgkgQgHgPgAsNmmIgEgJQAFAJAKAMQgGgFgFgHgApfnLQgUgGgTAFQgUAFgBAAQgFgCgNgcQAOABAPAEQAsAHAhAOQAgAOgDAOQgBAGgGAGQgQgegigKg");
	this.shape_78.setTransform(-96.8,-130.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AHnS0QAAgEAEgCIgEAHgAr6KNIABAAIgBAAgALty0IAOACIgMABIgCgDg");
	this.shape_79.setTransform(-71.8,0);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#283B4A").s().p("AI3ESIgCgBIAEACIgCgBgANXBBQABAAAAAAQAAgBAAAAQABAAAAAAQABAAAAABIADgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAgAtaAcIgEgCIAJgBIgBAEIgEgBgAiHidIAEABQACAAgBABIAAAEgAlNkQIACgCIAAACg");
	this.shape_80.setTransform(-104.7,119.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#56BBFE").s().p("AhKB3IACAAIAAABgABLh3IAAABIgEACg");
	this.shape_81.setTransform(-36.9,-104.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#5763FF").s().p("ABIDZIgCgCIAEADgAhJjWQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAEgCIgDAIQgCgCAAgDg");
	this.shape_82.setTransform(-59.7,-102.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D9F2F2").s().p("AkcIQIAAgBIADABIgCAAIgBAAgAEcoPIABAAIgCACIABgCg");
	this.shape_83.setTransform(-255.7,-123.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AC7GjQg4hSAMhhQAPh9AnhyQAHgCAFgFQAHgbAhghQAPgQASgMQBXAfBYAmQBIAeBJAOIAJACQAOAJALAJIAbAUIgBAEIAAABIgDAFQAFAGACAHIgBACIACAHIAAACIgEADQgrAUgnghIAAgBQh6hkiagKQgEAAgFADQgVAFgSAQIgDAEQgBAFABAEQATB/CGA6QBYAnBMA7QABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIgBADQgGAHgCAGQgDAEgCABIgCACQgPAFgPAGIgBABIgKAEIgCAAQhggZhXgzQhfg9hEBHIAAAFIgDAVQABACgCAFQATAiAbAfQA9BHBTAdIgBAKQgJABgFACQgUAEgRAAQhJAAgsg/gAGxHDQgGgGgJgFQgVgJgZgHQhKggg7g6QAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBIgCgDIgBAAQgKgQgEgPIgGgIIAAgDQAAAAABgBQAAAAAAgBQABAAABAAQAAAAABgBIAHgGQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIADAAQAuAHAsATIAvAUQAZALAYANQBuBBBLhfQAHgKgFgKQgcgwg0gbIABAAQiUhIhXh9IADgIQB8gOBnBaQBiBVBXhHQACgIgDgHIgCgBQgHgQgEgQIADgCIAAgCQgCgOgEgLIgBgCQgJgXgwgUQgQgMgTgLIhCgmQgegSACgJQAHgWBBgNQAVgFBHgJIAJAEQBOAVAZB6IAHAiIgHAZIgEAMIgCADIACABIgBABIACADQgGDPi7BtQhEAlhMAagAGphoQgEgHAEgIQABgGgDgBQgfgJgjgCQBRglBdACIgIAEQgrARgLAkQgIAZAFAMIACAEQgkgPgHgPgAsLmjIgEgJQAFAJAKAMQgHgFgEgHgApdnIQgTgFgUAFQgTAFgCgBQgEgBgNgcQANAAAPAEQAtAIAgAOQAgANgDAOQgBAGgGAGQgQgdgigLg");
	this.shape_84.setTransform(-96,-125.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AHcSrQABgEADgCIgEAHgAsAKIIAAAAIAAAAgAL0yrIANACIgLABIgCgDg");
	this.shape_85.setTransform(-72,3.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#283B4A").s().p("AIxEeIgBgBIACABIgBAAgANXBVQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAABABIACgCQABAAAAABQAAAAABAAQAAAAAAAAQAAABAAAAgAtZABIgDgBIAJAAIgCACIgEgBgAiCijIAFABQABAAgBABIAAADgAlFkcIADgCIgBACg");
	this.shape_86.setTransform(-101.9,121.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#56BBFE").s().p("AhNB1IACAAIgBABgABOh1IAAABIgEACg");
	this.shape_87.setTransform(-28.5,-101.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5763FF").s().p("ABDDaIgDgBIAEACgAhDjXQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAABABAAIAEgCIgDAIQgCgCAAgDg");
	this.shape_88.setTransform(-51.3,-99.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#D9F2F2").s().p("AkpIHIAAAAIADAAIgCAAIgBAAgAEpoGIABAAIgDACIACgCg");
	this.shape_89.setTransform(-246.6,-125.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("ACsGsQg3hTAPhhQARh8AqhyQAIgDAFgEQAIgaAhggQAQgPATgLQBVAhBXAoQBGAfBKARIAIACQAOAJALAKQAOAKANAKIgCAEIAAABIgDAFQAFAGACAIIAAABIAAAHIAAACIgDADQgsATglghIAAgCQh5hniZgOQgDAAgGACQgUAFgTANIgDAEQgCAHABAEQAQB/CFA+QBWApBMA9QAAAAAAAAQABAAAAAAQABABAAAAQABABAAAAIgBADQgGAHgDAGQgCAEgCABIgDACQgOAEgQAGIgBABIgKADIgCABQhggchVg1Qheg/hFBFIAAAEIgEAWQABACgBAFQARAiAbAgQA6BIBTAfIgCAKQgIABgFACQgRADgQAAQhMAAgrhCgAGgHSQgGgGgJgFQgUgJgZgIQhJgig6g8IAAgDIgCgDIgBAAQgKgQgEgPQgBgEgEgEIAAgDQAAAAAAgBQABAAAAgBQAAAAABAAQABgBABAAIAHgGIACAAIACAAQAvAJArAUIAuAUIAxAaQBtBEBMhdQAIgKgGgKQgagxgzgbIABAAQiShNhUh/IAEgHQB7gMBlBdQBfBYBahFQABgIgDgHIgBgBQgHgQgDgQIACgCIAAgCQgBgOgDgLIgCgCQgIgYgwgXQgPgKgTgMIhBgnQgegTADgJQAHgWBCgLQAUgEBIgHIAKAEQBMAXAXB4IAGAlQgEAJgEAPIgFAMIgBADIABABIAAABIABADQgLDPi+BoQhFAjhMAXgAGmhYQgEgHAFgIQAAgGgCgBQgfgKgjgDQBSgiBdAEIgIAEQgsAPgMAkQgJAZAFAMIACAFQgkgRgGgPgAsFmyQgDgEgBgFQAFAJAJAMQgGgFgEgHgApXnSQgTgGgTAFQgUAEgCAAQgEgCgMgcQANAAAPAFQAtAJAfAOQAgAOgDAOQgCAGgGAGQgOgdgjgMg");
	this.shape_90.setTransform(-86.5,-124.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AG3SkQAAgDADgCIgDAHgAsXJhIABAAIgBABgAMLylIANAEIgMAAIgBgEg");
	this.shape_91.setTransform(-65.5,7.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#283B4A").s().p("AIvEfIgCgCIADACIgBAAgANWBVQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAgAtZABIgDgBIAJAAIgBACIgFgBgAiAikIAFACQABgBgBABIAAAEgAlBkcIACgCIgBACg");
	this.shape_92.setTransform(-99.9,122.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#56BBFE").s().p("AhOB1IACAAIgBABgABPh1IAAABIgDACg");
	this.shape_93.setTransform(-24.1,-100.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#5763FF").s().p("ABBDbIgDgCIAEACgAhBjYQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAEgBIgDAHQgCgCAAgDg");
	this.shape_94.setTransform(-47,-99);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#D9F2F2").s().p("AkvIIIAAAAIAEAAIgCABIgCgBgAEvoIIABABIgEABIADgCg");
	this.shape_95.setTransform(-242,-125.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AClGtQg1hTAQhhQASh9AshxQAHgEAFgEQAIgaAiggQAQgPATgLQBUAhBYApQBFAfBKARIAIABQAOAKAKAJQAPAKAMALIgCADIAAABIgCAFQAEAHACAHIgBABIABAIIAAABIgDADQgsATgmghIAAgBQh3hniYgOQgFgBgEADQgWAEgSANIgDAFQgCAGABAFQAOB/CEA+QBXApBKA9QABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIgBADQgGAHgDAGQgDAEgCABIgCACQgPAEgQAGIgBABIgKADIgCABQhfgchUg1Qhdg/hGBFIgBAEIgEAWQABACgCAFQASAiAaAgQA6BIBSAgIgCAKQgIAAgFADQgRACgQAAQhMAAgrhCgAGZHUQgFgGgJgFQgVgKgYgHQhJgig6g9IAAgDIgBgDIgBAAQgJgQgFgPQgBgEgEgEIAAgDQAAgCAEgBIAHgGIABAAIADAAQAvAJArAUIAuAUIAwAaQBsBFBOheQAHgKgEgKQgbgxgzgbIABAAQiQhNhTh/IADgIQB8gLBjBdQBfBYBbhGQACgIgDgGIgCgBQgHgRgDgQIADgBIAAgCQgCgPgDgKIgBgDQgJgXgugXQgQgKgTgMIhAgoQgdgTACgJQAHgWBCgLQAVgEBHgHIAKAEQBMAXAVB5IAHAkQgFAJgEAPIgFAMIgCAEIACABIgBABIABADQgMDPi/BoQhGAjhLAYgAGkhYQgDgHAEgIQABgGgDgBQgegKgigDQBSgiBcAEIgHAEQgsAPgNAkQgJAZAFAMIABAFQgjgRgHgPgAsDmzQgDgEgBgFQAGAJAJAMQgGgFgFgHgApUnTQgTgGgTAFQgVAEgBAAQgEgCgMgcQANAAAPAFQAtAJAeAOQAhAOgEAOQgCAGgFAGQgPgdgigMg");
	this.shape_96.setTransform(-81.8,-124);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AGoSnQABgDADgCIgEAGgAsgJkIABAAIgBAAgAMUyoIANAEIgMAAIgBgEg");
	this.shape_97.setTransform(-62,8.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#283B4A").s().p("AIrEfIgBgCIACACIgBAAgANVBVQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIADgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAgAtYABIgDgBIAJAAIgCACIgEgBgAh9ikIAEACQABgBAAABIAAAEgAk9kcIACgCIgBACg");
	this.shape_98.setTransform(-94.2,122.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#56BBFE").s().p("AhQB1IACAAIAAABgABRh1IAAABIgEACg");
	this.shape_99.setTransform(-15.4,-100.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#5763FF").s().p("AA+DbIgDgCIAEACgAg+jYQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAEgBIgEAHIgBgFg");
	this.shape_100.setTransform(-38.3,-99);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("ACdGtQg1hTARhhQAVh9AthxQAHgEAFgEQAIgaAjggQAQgPATgLQBUAhBXApQBGAfBIARIAIABQAOAKALAJQAPAKALALIgCADIAAABIgCAFQAEAHACAHIgBABIABAIIAAABIgDADQgsATglghIAAgBQh2hniZgOQgEgBgFADQgVAEgTANIgDAFQgCAGABAFQANB/CDA+QBWApBKA9QAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABIgBADQgGAHgDAGQgEAEgCABIgCACQgPAEgPAGIgBABIgLADIgCABQhegchUg1Qhcg/hHBFIgBAEIgDAWQAAACgBAFQAQAiAaAgQA5BIBSAgIgCAKQgJAAgFADQgRACgPAAQhMAAgqhCgAGQHUQgFgGgJgFQgVgKgXgHQhKgig4g9IAAgDIgCgDIgBAAQgJgQgDgPQgCgEgEgEIAAgDQAAgCAFgBIAGgGIACAAIADAAQAuAJArAUQAXAJAXALIAvAaQBrBFBQheQAHgKgFgKQgZgxgzgbIACAAQiRhNhQh/IADgIQB8gLBiBdQBeBYBbhGQACgIgDgGIgCgBQgGgRgDgQIACgBIAAgCQAAgPgDgKIgBgDQgJgXgugXQgPgKgTgMIhAgoQgdgTACgJQAIgWBCgLQAVgEBHgHIAKAEQBMAXATB5IAGAkIgJAYIgFAMIgCAEIACABIgBABIABADQgPDPjBBoQhFAjhMAYgAGjhYQgDgHAEgIQAAgGgCgBQgegKgigDQBSgiBdAEIgIAEQgsAPgOAkQgIAZAEAMIABAFQgigRgHgPgAsAmzQgCgEgBgFQAEAJAKAMQgHgFgEgHgApQnTQgUgGgTAFQgUAEgCAAQgEgCgMgcQANAAAQAFQAsAJAfAOQAgAOgEAOQgBAGgHAGQgOgdghgMg");
	this.shape_101.setTransform(-72.5,-124);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D9F2F2").s().p("Ak2IIIAAAAIADAAIgBABIgCgBgAE1oIIABABIgCABIABgCg");
	this.shape_102.setTransform(-233,-125.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AGUSnQABgDADgCIgEAGgAstJkIABAAIgBAAgAMgyoIAOAEIgMAAIgCgEg");
	this.shape_103.setTransform(-54.4,8.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#283B4A").s().p("AIsEaIgBgCIADADIgCgBgANVBTQABAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIADgBQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAABAAgAtZACIgCgCIAJAAIgDADIgEgBgAh+ihIAEACQABAAAAAAIAAAEgAk+kXIABgCIAAACg");
	this.shape_104.setTransform(-74.8,109);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#56BBFE").s().p("AhPB0IACgBIgBABgABQhzIAAABIgDACg");
	this.shape_105.setTransform(2.9,-110);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#5763FF").s().p("AA+DXIgCgBIAEACgAg/jUQAAgBAAAAQAAAAAAAAQAAgBABAAQAAABAAAAIAEgCIgEAIIgBgFg");
	this.shape_106.setTransform(-19.9,-108.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D9F2F2").s().p("AkzIAIAAgBIADABIgCAAIgBAAgAEzn/IABABIgDABIACgCg");
	this.shape_107.setTransform(-214.7,-134.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("ACgGlQg1hRARhgQATh6AshwQAIgEAFgEQAIgZAigfQARgPATgLQBUAgBXAoQBGAeBIASIAJABQAOAJAKAKQAPAKAMAKIgCADIgBABIgCAFQAFAHABAHIAAABIABAHIAAACIgEADQgsATglghIAAgCQh3hliYgOQgEAAgEACQgWAFgTAMIgDAFQgCAGABAFQANB9CEA8QBWApBKA8QABAAAAABQABAAAAAAQABAAAAABQAAAAABABIgBADQgHAGgDAGQgDAEgCABIgCACIgfAKIgBABIgKADIgCAAQhegbhVg0Qhcg/hGBEQgBABAAABQAAAAAAABQAAAAAAABQAAAAAAABIgEAVQAAADgBAEQARAiAZAfQA6BHBSAfIgCAKQgIABgFACQgRADgQAAQhMAAgqhCgAGUHLQgGgGgJgFQgVgJgYgHQhJgig5g7IABgDIgCgDIgBAAQgJgQgEgOQgCgEgEgFIABgCQAAgDAEAAIAGgGIACgBIADAAQAvAKArATIAtAUQAZAMAXAOQBsBDBOhcQAIgKgFgKQgagwgzgbIACAAQiRhLhRh9IAEgIQB7gLBjBbQBeBXBbhEQABgIgCgHIgCgBQgGgQgDgQIACgBIAAgCQgBgOgDgLIgBgCQgIgYgvgWIgigWIhAgmQgegTADgJQAIgVBCgLQAUgFBIgGIAJAEQBNAXATB2IAGAkIgIAXIgGAMIgBAEIACABIgBABIABACQgPDNi/BmQhGAihMAXgAGjhXQgDgHAFgHQABgGgDgBQgegKgjgDQBTgiBdAEIgJAEQgsAPgNAjQgJAZAFALIABAFQgjgQgHgPgAsBmsQgCgEgBgFQAEAJAJAMQgGgFgEgHgApRnLQgUgGgTAEQgUAFgBgBQgFgCgMgbQANAAAQAFQAsAJAfAOQAgAOgDANQgDAGgGAGQgOgdghgLg");
	this.shape_108.setTransform(-54.2,-133);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AGbSTQAAgEADgCIgDAHgAspJZIABAAIgBAAgAMdyTIAMADIgMAAIAAgDg");
	this.shape_109.setTransform(-35.6,-2.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#5763FF").s().p("AA+DcIgDgCIAEACgAg+jYQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAABABIAEgCIgEAIQgBgCAAgDg");
	this.shape_110.setTransform(-10.3,-137.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#D9F2F2").s().p("Ak1IKIAAAAIADAAIgCAAIgBAAgAE1oJIABAAIgDACIACgCg");
	this.shape_111.setTransform(-205,-163.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#283B4A").s().p("AIsEgIgCgCIADACIgBAAgANWBVQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIADgBQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAgAtYACIgEgCIAJAAIgCADIgDgBgAh9ikIAEACQABgBAAABIAAAEgAk9kdIACgCIgBACg");
	this.shape_112.setTransform(-66,84.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#56BBFE").s().p("AhQB2IACgBIAAACgABRh2IAAABIgEACg");
	this.shape_113.setTransform(12.5,-139.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("ACeGuQg1hTARhhQAUh9AthzQAIgDAFgEQAIgaAiggQAQgPATgMQBVAiBWAoQBGAfBJASIAIABQAOAKAKAJQAPAKAMALIgCADIAAABIgDAFQAFAHABAHIAAABIABAIIAAABIgEADQgsAUglgiIAAgBQh2hoiYgOQgEAAgFACQgWAFgSANIgDAEQgCAHABAEQAMCACEA+QBWAqBJA9QABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIgBADQgHAHgCAGQgDAEgCABIgDACIgeAKIgBABIgLADIgCABQhegchUg2Qhcg/hHBFIgBAFIgEAVQABADgCAFQASAiAZAgQA5BIBSAgIgCAKQgIABgFACQgRADgQAAQhMAAgqhDgAGRHVQgGgGgIgFQgVgKgYgHQhJgig4g9IAAgDIgCgDIgBAAQgJgQgEgPQgBgEgEgFIAAgCQAAgDAEAAIAHgGIACgBIACAAQAvAKArAUIAuAUIAvAaQBsBFBPheQAHgKgFgKQgZgxgzgcIABAAQiQhNhRh/IAEgIQB7gMBjBeQBeBYBbhFQABgJgCgGIgCgBQgGgRgDgQIACgBIAAgCQgBgPgCgKIgCgDQgIgYgvgXIghgWQgwgcgRgLQgdgTADgJQAHgWBCgLQAVgFBIgHIAJAEQBNAYATB4IAFAlQgEAJgEAPIgFAMIgCAEIACABIgBABIABADQgPDQjABoQhGAjhNAYgAGjhZQgDgHAFgHQAAgGgCgBQgfgKgigDQBSgjBdAEIgIAEQgsAQgNAkQgJAZAEALIACAFQgjgQgHgQgAsAm0IgDgKQAEAKAJAMQgGgFgEgHgApQnUQgUgGgTAEQgUAFgBgBQgFgCgMgcQANABAQAEQAsAJAfAPQAgAOgDAOQgDAGgGAGQgOgeghgLg");
	this.shape_114.setTransform(-44.5,-162.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AGWSrQAAgEADgCIgDAHgAssJlIABAAIgBAAgAMfyrIANADIgLAAIgCgDg");
	this.shape_115.setTransform(-26.3,-29.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#5763FF").s().p("AA+DcIgDgCIAEACgAg+jZQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAEgBIgEAIQgBgCAAgEg");
	this.shape_116.setTransform(-8.1,-146.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#D9F2F2").s().p("Ak1IKIAAAAIADAAIgBAAIgCAAgAE1oJIABAAIgDACIACgCg");
	this.shape_117.setTransform(-202.8,-172.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#283B4A").s().p("AIrEgIgBgCIADACIgCAAgANVBVQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACgBQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAgAtZACIgCgCIAJAAIgCADIgFgBgAh9ikIAEACQABgBgBABIAAAEgAk+kdIACgCIAAACg");
	this.shape_118.setTransform(-63.8,75.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#56BBFE").s().p("AhQB2IACAAIAAABgABRh2IAAABIgEADg");
	this.shape_119.setTransform(14.7,-147.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("ACeGuQg1hTARhhQAUh9AthzQAIgDAFgEQAIgaAiggQAQgPATgMQBVAiBWAoQBGAfBJASIAIABQAOAKAKAJQAPAKAMALIgCADIAAABIgDAFQAFAHABAHIAAABIABAIIAAABIgEADQgsAUglgiIAAgBQh2hoiYgOQgEAAgFACQgWAFgSANIgDAEQgCAHABAEQAMCACEA+QBWAqBJA9QABAAAAAAQABAAAAAAQABABAAAAQAAAAABABIgBADQgHAHgCAGQgDAEgCABIgDACIgeAKIgBABIgLADIgCABQhegchUg2Qhcg/hHBFIgBAFIgEAVQABADgCAFQASAiAZAgQA5BIBSAgIgCAKQgIABgFACQgRADgQAAQhMAAgqhDgAGRHVQgGgGgIgFQgVgKgYgHQhJgig4g9IAAgDIgCgDIgBAAQgJgQgEgPQgBgEgEgFIAAgCQAAgBABgBQAAAAAAAAQABgBAAAAQABAAABAAIAHgGIACgBIACAAQAvAKArAUIAuAUIAvAaQBsBFBPheQAHgKgFgKQgZgxgzgcIABAAQiQhNhRh/IAEgIQB7gMBjBeQBeBYBbhFQABgJgCgGIgCgBQgGgRgDgQIACgBIAAgCQgBgPgCgKIgCgDQgIgYgvgXIghgWQgwgcgRgLQgdgTADgJQAHgWBCgLQAVgFBIgHIAJAEQBNAYATB4IAFAlQgEAJgEAPIgFAMIgCAEIACABIgBABIABADQgPDQjABoQhGAjhNAYgAGjhZQgDgHAFgHQAAgGgCgBQgfgKgigDQBSgjBdAEIgIAEQgsAQgNAkQgJAZAEALIACAFQgjgQgHgQgAsAm0IgDgKQAEAKAJAMQgGgFgEgHgApQnUQgUgGgTAEQgUAFgBgBQgFgCgMgcQANABAQAEQAsAJAfAPQAgAOgDAOQgDAGgGAGQgOgeghgLg");
	this.shape_120.setTransform(-42.3,-171.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AGVSrQABgEADgCIgDAHgAsrJlIABAAIgBAAgAMfyrIANADIgMABIgBgEg");
	this.shape_121.setTransform(-24.1,-38.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#56BBFE").s().p("AhQB2IACAAIAAABgABRh2IAAACIgEACg");
	this.shape_122.setTransform(14.7,-150.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AGVSqQABgDADgCIgDAHgAsrJlIABAAIgBABgAMfyrIANADIgMABIgBgEg");
	this.shape_123.setTransform(-24.1,-41);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#5763FF").s().p("AA2DcIgCgBIAEACgAg3jaQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAIAEgBIgDAIQgCgCAAgEg");
	this.shape_124.setTransform(6.2,-139);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#D9F2F2").s().p("AlHIEIAAAAIADAAIgBAAIgCAAgAFHoDIABAAIgDACIACgCg");
	this.shape_125.setTransform(-187.4,-168.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#283B4A").s().p("AIjEnIgBgBIACACIgBgBgANUBiQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIACgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAgAtXgOIgDgCIAJgBIgCAEIgEgBgAh2ioIAEACQABgBgBABIAAAEgAkyklIACgCIAAACg");
	this.shape_126.setTransform(-57.2,82);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#56BBFE").s().p("AhUB0IACAAIAAABgABVh0IAAABIgEACg");
	this.shape_127.setTransform(29.2,-140.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("ACIG0QgyhVAUhgQAYh9AxhxQAJgEAFgEQAIgZAkgfQARgQATgLQBTAjBVAoQBFAjBIASIAJACQANAKAKAJIAaAVIgCAEIgBABIgCAFQAEAGABAIIAAABIABAHIAAACIgEADQgtATgkgjIAAgBQhyhsiYgOQgEgBgFACQgWAEgSANIgEAFQgCAGABAFQAICACBBAQBVArBHA/QABAAAAAAQABAAAAABQABAAAAAAQAAABABAAIgBADQgHAGgDAGQgDAFgCAAIgCADIggAJIgBABIgKADIgCAAQhegdhSg3QhahBhJBEIgBAEIgFAWQABADgCAEQAQAiAZAhQA3BJBQAhIgCALQgIAAgFADQgQACgOAAQhOAAgphFgAF6HfQgGgGgJgFQgTgKgYgIQhIgkg3g9IABgDIgCgDIgBAAQgJgQgDgPQgBgEgEgFIABgDQAAgCAEgBIAGgGIADAAIACAAQAvAKAqAVIAtAVIAuAbQBqBHBShdQAIgKgFgKQgYgxgygdIABAAQiNhPhMiBIADgIQB8gJBgBfQBbBaBdhEQACgIgCgHIgCgBQgGgRgCgQIACgBIAAgCQAAgPgCgKIgCgDQgIgYgtgYIghgWQgugdgRgMQgdgTADgJQAJgWBCgKQAVgEBIgGIAJAEQBMAZAPB5IAEAlIgJAYIgGAMIgBADIABABIAAABIAAADQgWDRjEBkQhHAihNAWgAGfhOQgDgHAFgIQABgGgCgBQgfgKgigEQBUghBcAGIgIAEQgsAOgPAkQgKAZAEALIACAGQgjgSgGgPgApHncQgUgGgTAEIgVAEQgFgCgLgcQANAAAPAFQAtAKAeAPQAfAOgDAOQgDAGgGAGQgNgdghgNgAr4m/IgCgJQADAJAJAMQgGgFgEgHg");
	this.shape_128.setTransform(-26.3,-165);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AFiSmQABgDADgCIgEAHgAtLJLIABAAIgBABgANAyjIgCgEIAOAEg");
	this.shape_129.setTransform(-12.4,-30.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D9F2F2").s().p("AlQH+IAAAAIADAAIgCABIgBgBgAFQn+IABABIgDABIACgCg");
	this.shape_130.setTransform(-180.5,-164.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#283B4A").s().p("AIeEvIgBgCIACACIgBAAgANTBvQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADgBQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAgAtWggIgDgBIAJgBIgCAEIgEgCgAhzisIAEACQABgBAAABIgBAEgAktksIACgCIAAACg");
	this.shape_131.setTransform(-54.7,88.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AFISiQABgEADgCIgEAHgAtaIyIABAAIgBAAgANPyfIgBgDIAOADg");
	this.shape_132.setTransform(-7.5,-22.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#56BBFE").s().p("AhWBzIACAAIgBABgABXhyIAAAAIgDACg");
	this.shape_133.setTransform(35.5,-132.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#5763FF").s().p("AgBAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIACgCIgCAGQgBgCAAgBg");
	this.shape_134.setTransform(7.6,-153.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AB9G6QgxhVAWhhQAah8AzhwQAJgEAFgEQAJgZAkgeQARgPATgLQBUAkBUAqQBEAkBHATIAJADQANAJALAKIAZAVIgDAEIAAABIgDAFQAEAGACAIIgBABIABAHIAAACIgEADQgtASgkgjIAAgCQhwhtiXgTQgEgBgFACQgXAEgSAOIgEAFQgCAGABAFQAFCACBBCQBUAtBGBAQAAAAABAAQAAAAABABQAAAAABABQAAAAAAABIgBACQgHAGgDAGQgCAFgCAAIgDADQgPADgQAGIgBAAIgMADIgCAAQhcgehRg5QhZhDhKBDIgBAEIgGAWQABADgCAEQAQAjAXAgQA2BLBPAiIgBAKQgIABgGACQgNACgMAAQhSAAgohHgAFuHpQgGgGgJgFQgTgKgYgJQhHglg1g+IABgDIgDgDIgBAAQgIgQgDgPIgFgJIABgDQAAgCAEgBIAHgGIACAAIACAAQAvALApAWIAtAWIAuAcQBoBIBUhbQAIgKgEgKQgYgygygdIACAAQiMhShJiDIADgIQB8gGBeBgQBaBcBehCQABgIgBgHIgBgBQgHgRgBgQIACgCIAAgCQABgOgDgLIgBgCQgIgYgsgZIghgZQgugcgRgMQgcgUADgJQAJgWBDgIQAUgEBIgEIAJAEQBMAaANB6IADAlIgKAXIgFAMIgCADIACABIgBABIABADQgaDQjGBhQhHAhhPAUgAGdhDQgEgHAGgIQABgGgCgBQgfgLghgEQBUgfBcAHIgIAEQgsANgQAkQgKAZADALIADAGQgjgSgGgQgApCniQgUgHgUAEIgVADQgEgCgLgcQANABAPAFQAtAKAeAQQAfAPgDAOQgEAGgGAGQgNgegggNgAr0nIIgBgKQACAKAJAMQgFgFgFgHg");
	this.shape_135.setTransform(-19.2,-158.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#D9F2F2").s().p("AlUH7IAAgBIADABIgBAAIgCAAgAFUn6IABABIgDABIACgCg");
	this.shape_136.setTransform(-175.5,-157.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#283B4A").s().p("AIcEsIgBgBIACACIgBgBgANSBuQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIACgBQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAgAtVgfIgDgCIAJgBIgCAEIgEgBgAhxiqIAEABQABAAgBABIAAADgAkqkqIACgCIgBACg");
	this.shape_137.setTransform(-51.6,94.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AE9SZQABgEADgCIgEAIgAthItIABAAIgBABgANWyWIgBgEIANAEg");
	this.shape_138.setTransform(-3.3,-15.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#56BBFE").s().p("AhXByIACAAIgBABgABYhyIAAABIgDACg");
	this.shape_139.setTransform(40.3,-125);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#5763FF").s().p("AgBAAQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIACgBIgCAGQgBgCAAgCg");
	this.shape_140.setTransform(12.5,-145.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AB4G3QgwhVAXhfQAbh8AzhvQAJgEAGgEQAJgYAkgfQASgPATgLQBSAlBUApQBEAkBIATIAIACQAOAKAJAJIAZAWIgCADIAAABIgDAFQAEAGABAIIAAABIABAHIAAACIgEADQguASgjgjIAAgCQhwhsiWgTQgEgBgFACQgXAEgTAOIgEAFQgCAGABAFQAFB/CABCQBTAsBGA/QABAAAAAAQABABAAAAQABAAAAABQAAAAABABIgBADQgIAGgCAGQgEAEgCABIgCACQgPAEgRAFIgBABQgEACgHABIgCAAQhcgfhRg4QhYhChLBCIgBAEIgGAWQABADgCAEQAQAiAXAhQA1BKBPAhIgBALQgJAAgFADQgNABgNAAQhRAAgohGgAFpHmQgGgGgIgFQgUgLgYgIQhGglg2g9IACgDIgCgEIgBAAQgJgQgDgOIgFgJIABgDQAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAIAHgGIACAAIADAAQAuALAqAVIAtAWIAtAcQBoBIBUhbQAIgJgEgKQgXgygygdIACAAQiLhRhJiCIADgIQB8gGBeBfQBYBbBfhBQACgIgBgHIgCgBQgGgRgCgQIADgBIAAgCQAAgPgCgKIgBgDQgIgXgsgZIgggZQgugbgRgMQgcgUADgJQAJgWBDgIQAUgEBJgEIAJAEQBLAaAMB5IADAkIgKAYIgFALIgCADIABABIAAABIAAADQgbDPjHBgQhHAghOAUgAGchDQgDgHAGgHQABgGgDgBQgegLgigEQBVgfBcAHIgIAEQgtANgQAkQgKAYADAMIACAFQgigSgGgQgApAneQgUgHgTAEIgVADQgFgCgKgcQANABAPAFQAsAKAeAPQAfAPgEAOQgDAGgGAGQgMgeghgMgArynFIgBgJQADAJAIAMQgGgFgEgHg");
	this.shape_141.setTransform(-14,-150.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#D9F2F2").s().p("AlLH+IAAAAIADAAIgBABIgCgBgAFLn+IABABIgDABIACgCg");
	this.shape_142.setTransform(-187.6,-162.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#283B4A").s().p("AIhEvIgBgCIACACIgBAAgANUBvQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIACgBQABAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAgAtXggIgCgBIAJgBIgCAEIgFgCgAh1isIAEACQABgBAAABIgBAEgAkxksIACgCIAAACg");
	this.shape_143.setTransform(-59.1,91);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AFYSiQABgEACgCIgDAHgAtSIyIABAAIgBAAgANHyfIgCgDIANADg");
	this.shape_144.setTransform(-13.4,-19.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#56BBFE").s().p("AhVBzIACAAIAAABgABWhyIAAABIgEABg");
	this.shape_145.setTransform(28.8,-129.8);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("ACDG6QgxhVAVhhQAZh8AxhwQAJgEAFgEQAJgZAkgeQARgPATgLQBTAkBVAqQBEAkBIATIAJADQANAJAKAKIAaAVIgCAEIgBABIgCAFQAEAGABAIIgBABIABAHIAAACIgDADQgtASgkgjIAAgCQhyhtiXgTQgEgBgFACQgXAEgSAOIgEAFQgCAGABAFQAHCACBBCQBUAtBHBAQABAAAAAAQABAAAAABQABAAAAABQAAAAABABIgBACQgIAGgCAGQgDAFgCAAIgCADQgPADgRAGIgBAAIgLADIgCAAQhdgehSg5QhZhDhKBDIgBAEQgCAMgDAKQABADgCAEQAQAjAYAgQA3BLBQAiIgCAKQgIABgFACQgOACgMAAQhSAAgphHgAF0HpQgFgGgJgFQgTgKgYgJQhIglg2g+IABgDIgCgDIgBAAQgJgQgDgPIgFgJIABgDQAAgCAEgBIAGgGIADAAIACAAQAvALAqAWIAtAWIAuAcQBpBIBThbQAIgKgFgKQgYgygygdIACAAQiNhShLiDIADgIQB8gGBfBgQBbBcBdhCQACgIgCgHIgBgBQgGgRgCgQIACgCIAAgCQAAgOgCgLIgCgCQgIgYgsgZIghgZQgugcgRgMQgdgUADgJQAJgWBCgIQAVgEBIgEIAJAEQBMAaAOB6IAEAlQgEAJgFAOIgGAMIgCADIACABIgBABIABADQgYDQjFBhQhHAhhOAUgAGehDQgDgHAGgIQAAgGgCgBQgfgLgigEQBUgfBdAHIgIAEQgtANgPAkQgKAZAEALIACAGQgjgSgGgQgApGniQgTgHgUAEIgVADQgEgCgLgcQANABAPAFQAtAKAeAQQAfAPgDAOQgEAGgGAGQgMgegigNgAr3nIIgBgKQADAKAJAMQgGgFgFgHg");
	this.shape_146.setTransform(-26.3,-155.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D9F2F2").s().p("AjZJCIABAAIgCAAgADapBIABAAIgDADIACgDg");
	this.shape_147.setTransform(-300.9,-123.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#283B4A").s().p("AtTDMIgDgBIAKgDQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAABIgFAAgAJMCRIgCgBIADABIgBAAgANSh4IACgCQABAAAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgHACQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAgAieiBIAEABQACgBgBABIAAADgAlvjJIACgCIAAACg");
	this.shape_148.setTransform(-122.2,83.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#61FFDE").s().p("AAAAAIABgBIgBADIAAgCgAABgCIAAABg");
	this.shape_149.setTransform(-60.1,-168.9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AKFSxQAAgDADgDIgCAIgAqKOhIABAAIAAAAgAJ+yyIANAAIgMAFIgBgFg");
	this.shape_150.setTransform(-107.5,-50.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#5763FF").s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAABAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBABAAIgCAHQAAgBgBgDg");
	this.shape_151.setTransform(-114.4,-163.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#56BBFE").s().p("Ag7CFIACgBIAAABgAA8iEIAAAAIgBABg");
	this.shape_152.setTransform(-82.5,-151.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AEDFKQhChEABhiQgCh9Aah4IAMgKQACgcAdgnQAOgTAQgQQBZANBcASQBKAPBLAAIAIgBQAQAGAMAHQAPAGANAIIgBADIABACIgCAFQAFAFADAHIAAABIACAHIAAACIAAAAIgBACIgBABIAAABIgBAAQgoAcgrgXIABgBQiGhKiYAXQgEAAgFADQgUAKgQATIgDAFIABAKQAiB3CLAdQBdAUBSAoQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABIAAAEQgFAHgCAHQgCAFgCABIgCADQgOAHgOAKIgBABIgKAFIgCABQhhgEhcggQhlgog7BVIABAEIgBAWQABADAAAEQAWAdAfAZQBEA4BVAMIABAJQgJADgEAEQgkAPggAAQg0AAgngpgAH8E2IgBAAIgCgBQgHgEgJgDQgWgFgZgBQhOgPhBgtIAAgDIgCgDIgBABQgMgOgGgOIgHgGIAAgDQAAgBAAAAQAAgBAAAAQABgBAAAAQABgBABAAQADgDADgEIACgCIACAAQAwgBAtAJQAYADAYAGQAbAFAZAIQB1ApA+huQAGgLgHgJQghgpg3gOIACAAQibgphkhmIACgJQB3goBxBDQBrA9BOhXQABgIgEgGIgCAAQgJgPgGgPIACgCIABgCQgEgNgEgKIgDgCQgLgVgygMIgmgPIhFgWQgggMABgKQAEgWA/gbQATgIBGgZIAKACQBQAEAmByIAMAjQgDAKgCAPIgDANIAAAEIABAAIAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAUDLitCTQg/AyhHAogAGtjqQgEgGAEgIQAAgFgDgBQgggCghAFQBKg1BdgSIgHAFQgpAagIAlQgEAbAGAKIADAFQgmgIgKgOgAsdkeQgDgEgBgFQAGAIALAKQgHgEgGgFgAp1lnQgUgBgTAJIgUAIQgEAAgRgZQANgCAQABQAugCAhAHQAhAFgBAPQgBAFgFAIQgTgZgjgDg");
	this.shape_153.setTransform(-145.8,-155.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#283B4A").s().p("As/DeIAJgDQAAAAAAAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAIgBAAIgDgBgAJWA9IAEABIgCAAgAizieIAEAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAABIAAADgAmMjZIAAACIgCABgAM8jdIACgBQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAIgHADQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBABAAg");
	this.shape_154.setTransform(-164.7,65.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#5763FF").s().p("AB6C+IgCgBIAEABgAh7i4QAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIADgCIgBAIQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBgBgBg");
	this.shape_155.setTransform(-177.3,-165.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#56BBFE").s().p("AgpCJIACgBIAAABgAAqiIIAAABIgBABg");
	this.shape_156.setTransform(-156,-174.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAADIAAgCgAAAgCIAAABg");
	this.shape_157.setTransform(-135.9,-193.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AKXSqQAAgDACgDIgBAHgAqYP4IABgBIAAABgAFXypIANgBIgKAFIgDgEg");
	this.shape_158.setTransform(-154.3,-77);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D9F2F2").s().p("AiPJNIACAAIgCABgACPpMIABAAIgCACIABgCg");
	this.shape_159.setTransform(-370.3,-131);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AFGFGQhKg/gMhiQgRh7AIh5IAMgKQgCgdAYgpQALgUAPgRQBaAHBeALQBLAKBMgGIAIgBQAQAFAMAGQARAFAOAGIgBAEIABABIgBAGQAGAFAEAGIAAABIACAHIAAACIAAACIgBABIAAABIAAAAQgkAggugVIgBgBQiOhAiWAhQgDABgFADQgTALgMAUIgCAGQAAAGACAEQAxB0CPASQBeAOBYAjQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAIAAAEQgEAIgBAGIgDAHIgCACQgNAJgNAKIgBABIgJAGIgCABQhiADhggZQhqgggvBXIABAEIACAWQACADAAAEQAaAbAhAXQBMAzBXAFIABAKQgIADgEAEQgnAUgkAAQgvAAgogigAI5EgIgRgGQgWgDgZAAQhQgJhHgpIgBgDIgCgCIgBAAQgOgMgIgOIgIgGIAAgCQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBABAAQADgEACgFIABgBIADAAQAvgFAvAGQAZACAYADQAbAEAbAGQB6AgAwhwQAEgMgIgIQgmgng5gKIACgBQiggdhyheIABgJQBygxB5A7QB0A4BBhfQAAgIgEgFIgDgBQgKgNgIgPIACgCIAAgCQgFgNgGgJIgCgCQgPgVgzgHQgSgHgVgGIhJgRQgigKAAgJQABgYA8geIBVgnIAKABQBQgBA1BuQAKASAHAQQgCAKAAAPIgBANIAAAEIABAAIAAABIACADQAtDJiZCdQg4A2hCAtgAsnjTIgFgJQAHAJAMAIIgOgIgAGoj2QgGgGADgIQgBgFgDgBQggAAghAIQBEg7BagYIgHAGQglAcgDAmQgBAbAIAJIADAFQgmgFgLgNgAqJknQgUAAgRAKIgTAKQgFAAgUgYQANgCAQgBQAtgFAiAEQAiADACAPIgFAOQgXgYgjAAg");
	this.shape_160.setTransform(-222.3,-175.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#283B4A").s().p("AstESIAIgEQAAAAAAABQgBAAAAABQAAAAAAABQAAAAABABIgFAAIgCABIgBgBgAJcAaIgDgCIAEACIgBAAgAi+iUIAEAAQABgBAAACIABADgAmbjBIAAACIgCABgAMskSIACABIgDABIABgCg");
	this.shape_161.setTransform(-182.7,60.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#5763FF").s().p("ACFC3IAEAAIgCAAIgCAAgAiIiyQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIADgCIAAAIQgDgBgBgDg");
	this.shape_162.setTransform(-211.6,-170.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#56BBFE").s().p("AggCMIACgBIAAABgAAhiLIAAABIgBACg");
	this.shape_163.setTransform(-190.9,-180.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAADIAAgCgAABgBIgBAAg");
	this.shape_164.setTransform(-172.2,-201.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AKcSmIACgGIAAAHgAqcREIAAAAIAAABgAC2ykIANgCIgKAGIgDgEg");
	this.shape_165.setTransform(-174.7,-86.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D9F2F2").s().p("AhkJZIACAAIgDAAgABlpYIABAAIgDADIACgDg");
	this.shape_166.setTransform(-401.7,-124.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AFnFUQhPg7gShhQgbh8ABh6IAKgLQgDgdAVgqQAKgUAMgSQBbABBfAGQBMAFBKgLIAIgBQARAEANAFQARAEAOAFIAAAEIAAABIAAAGQAGAFAEAGIAAABQACACABAFIABABIgBADIAAABIAAAAIgBAAQgiAigugRIgBgCQiTg3iTArQgDAAgFAEQgSAMgLAVQgBACAAAEQAAAGACAEQA5ByCRAJQBfAHBaAfQAAgBABAAQAAAAAAAAQABABAAAAQABAAAAABIABADQgEAIAAAHQgBAFgCABIgCADQgMAJgNAMIAAABIgJAHIgCABQhhAJhhgUQhsgZgpBaIABAFIAEAVIADAHQAbAbAjAUQBPAvBXAAIACAJQgIAEgDAFQgqAYgnAAQgrAAgngdgAJXEfIgSgFQgXgCgYACQhRgFhJgkIgBgDIgDgCIAAAAQgPgLgJgNIgIgGIgBgDQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBIAEgIIACgCIACAAQAvgIAvADQAZABAYACQAcACAaAEQB9AZAoh1QADgLgJgIQgpglg5gHIABAAQihgUh4hYIAAgIQBug4B9AzQB4AxA7hjQgBgIgFgFIgCAAQgLgNgJgOIABgDIAAgCQgGgNgHgIIgCgCQgQgUgzgFIgpgKIhKgMQghgIgBgKQAAgXA4giQASgLBAgiIALAAQBQgGA8BsQALASAIAPQgBAKABAPIAAANIAAAEIABABIAAABIACACQA8DHiNCoQg1A5g+AygAsqiDIgGgIQAHAIANAIQgHgDgHgFgArjjfQAMgEAQgBQAtgIAiACQAiABACAOQAAAHgDAIQgYgXgjACQgUACgRALIgSALIAAAAQgFAAgVgWgAGfjxQgFgFACgJQgBgFgDAAQggACghAJQBAg/BYgeIgGAHQgjAegBAnQACAbAIAJIADAEQgmgDgNgMg");
	this.shape_167.setTransform(-258.2,-181.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#283B4A").s().p("AsnElIAIgEQAAAAAAAAQAAAAAAABQAAAAAAABQAAABAAABIgFAAIgCAAIgBAAgAJcAMIgCgBIADABIgBAAgAjCiPIAEAAQABgBAAABIABAEgAmfi3IAAACIgCAAgAMlkkIADABIgEABIABgCg");
	this.shape_168.setTransform(-184.2,55.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#61FFDE").s().p("AAAAAIAAgBIAAAEIAAgDgAAAgCIAAABg");
	this.shape_169.setTransform(-179.7,-206.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AKdSgIABgGIAAAHgAqdRcIABAAIgBABgACByeIANgCIgKAFIgDgDg");
	this.shape_170.setTransform(-177,-92.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#56BBFE").s().p("AgbCLIAAABIgCABgAAeiMIAAABIgBADg");
	this.shape_171.setTransform(-198,-185.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#5763FF").s().p("ACJC0IAEAAIgCAAIgCAAgAiLivQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIADgCIAAAIQgCgBgBgDg");
	this.shape_172.setTransform(-218.4,-175.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AFxFXQhQg4gVhiQgdh6gCh6IAKgMQgEgdAUgqQAKgVALgSQBbgBBgAEQBLAEBKgNIAIgCQARAEANAFQARADAPAFIgBAEIABABIgBAGQAHAFAEAGIAAABQACACABAFIABABIgBADIAAABIAAAAIgBAAQghAigvgQIgBgBQiTg0iSAuQgEABgEAEQgSAMgKAVQgCACAAAEQABAGACAEQA8BxCRAFQBeAGBbAcQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAIABAEQgDAIgBAGQAAAFgCACIgCADQgMAJgNAMIAAABIgIAHIgCABQhhALhhgRQhtgXgnBbIABAFIAEAVIADAHQAcAaAkATQBQAtBWgBIADAJQgIAEgDAFQgrAagoAAQgpAAgngcgAJfEdIgRgFQgXgBgZADQhQgDhKgjIgBgDIgDgCIAAAAQgQgLgJgNIgIgFIgBgDQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAABgBIAEgIIACgCIACgBQAvgIAvACQAYAAAZABQAbACAbADQB9AWAlh1QADgMgJgHQgqglg5gFIABAAQihgRh6hVIgBgIQBug7B9AxQB5AuA5hkQgBgIgGgFIgCAAQgLgNgJgOIABgCIAAgCQgGgNgHgJIgDgBQgQgUgzgDIgpgJIhKgLQgigHAAgKQgBgXA3gjQASgMA/gjIAKAAQBQgIA/BrQALARAIAPQAAAKABAPIABANIgBAEIACAAIAAABIACADQBBDGiKCqQgzA7g+AzgAsrhlIgGgIQAIAIAMAHQgHgCgHgFgArljCQAMgFAQgBQAsgJAiACQAiAAADAOQgBAGgCAIQgZgWgjADQgTACgRAMIgSAKIAAAAQgFAAgVgUgAGcjuQgFgFABgJQgBgFgDAAQggACggALQA+hBBYggIgGAHQgjAfABAnQACAbAJAJIADAEQgmgCgOgMg");
	this.shape_173.setTransform(-265.4,-185.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D9F2F2").s().p("AhXJbIACAAIgCABgABYpbIAAAAIgCAEIACgEg");
	this.shape_174.setTransform(-407.4,-124.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#283B4A").s().p("AsvEPIAJgEQgBAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgEAAIgCABIgCgBgAJbAcIgCgCIAEACIgCAAgAi+iUIAEAAQABgBAAABIABAEgAmajCIAAACIgCAAgAMtkOIADAAIgEACIABgCg");
	this.shape_175.setTransform(-180.2,60.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#5763FF").s().p("ACEC3IAEAAIgCABIgCgBgAiGizQgBAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAIACgDIABAJQgCgBgBgEg");
	this.shape_176.setTransform(-208.3,-171.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#56BBFE").s().p("AgfCKIAAABIgCAAgAAhiLIABABIgCADg");
	this.shape_177.setTransform(-187.6,-181);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AKbSmIACgGIAAAHgAqcRAIABgBIAAABgAC+ykIANgCIgKAEIgDgCg");
	this.shape_178.setTransform(-172.1,-86.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#D9F2F2").s().p("AhnJZIACAAIgCAAgABopYIAAAAIgCADIACgDg");
	this.shape_179.setTransform(-398.5,-125.4);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AFlFSQhOg6gShiQgah7ABh6IAKgMQgDgdAVgpQALgVAMgRQBbAABfAHQBLAGBLgLIAIgBQARAEAMAFQARAEAPAFIgBAEIABABIgBAGQAGAFAEAGIABABIADAHIAAACIgBADIAAAAIAAABIgBAAQgiAhgugSIgBgBQiSg3iTApQgEABgFAEQgRAMgLAVIgCAFQAAAGADAFQA4ByCRAJQBeAIBaAfQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAIAAAEQgDAIgBAGQAAAFgDABIgCADIgZAVIAAABIgIAGIgCACQhiAIhggUQhtgZgpBaIABAEIAEAWIADAHQAbAaAjAUQBPAwBWAAIADAJQgJAFgCAEQgqAZgnAAQgrAAgogfgAJVEeIgRgFQgXgCgZACQhQgFhJglIAAgDIgDgCIgBABQgPgMgJgNIgIgGIgBgCQgBgCAEgCIAFgJIABgBIACgBQAwgHAuADQAZABAYACIA2AGQB9AaAoh0QADgMgIgIQgpglg5gHIABAAQihgVh4hYIAAgJQBvg3B8A0QB3AxA9hiQgBgJgGgFIgCAAQgLgNgJgOIACgDIgBgCQgFgNgHgIIgDgCQgPgUg0gEQgSgGgWgFIhKgMQghgJgBgJQAAgYA4ghQASgLBAgiIALABQBQgHA8BtQALASAHAPQgBAJACAPIAAANIgBAEIACABIAAABIABADQA8DHiOCnQg1A5g/AxgAsqiIIgGgIQAIAHAMAIQgHgCgHgFgArijkQAMgEAQgBQAsgIAiADQAjABACAOQgBAGgCAIQgYgWgjACQgUABgRAMIgSAJIgBAAQgFAAgUgVgAGgjxQgFgGACgIQgBgFgDgBQggACghAKQBAg/BZgeIgGAGQgkAfgBAnQACAbAIAJIADAEQgmgDgNgMg");
	this.shape_180.setTransform(-254.8,-181.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#283B4A").s().p("AskD5IAJgEQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABIgEAAIgCAAIgCAAgAJsAsIgCgCIAEACIgCAAgAioiZIAEAAQABgBAAABIABAEgAmDjNIAAACIgBAAgAMij4IADAAIgEACIABgCg");
	this.shape_181.setTransform(-167.6,73);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#5763FF").s().p("ACBC7IAEAAIgCAAIgCAAgAiDi2QAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAABIADgDIAAAIQgDgBAAgDg");
	this.shape_182.setTransform(-193.3,-159.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#56BBFE").s().p("AghCJIAAABIgCAAgAAjiJIABAAIgCADg");
	this.shape_183.setTransform(-172.4,-168.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AKaSsIACgGIAAAHgAqbQhIABAAIAAABgADlyrIANgBIgKAFIgDgEg");
	this.shape_184.setTransform(-160.5,-72.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#D9F2F2").s().p("Ah3JVIACAAIgCABgAB4pVIABAAIgDADIACgDg");
	this.shape_185.setTransform(-379,-118.7);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AFdFNQhNg8gRhjQgXh7ADh6IAKgLQgCgeAVgoQALgUANgSQBbADBfAJQBLAIBLgJQAEABAEgBQARAEAMAGQARAEAOAGIAAAEIAAABIAAAFQAGAFAEAHIAAABQACADABAEIABACIgCADIAAAAIAAABIgBAAQgiAggugTIgBgCQiRg7iUAmQgEABgFAEQgSALgLAUIgCAGQABAGACAFQA2BzCSANQBdALBaAhQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABIABADQgEAIgBAGQAAAFgDABIgCADIgZAVIAAAAIgJAGIgCACQhhAFhhgWQhsgcgqBYIABAFQACAMABAJIADAHQAaAbAjAVQBOAyBXADIACAJQgJAEgCAFQgoAWglAAQguAAgpghgAJOEgIgRgGQgXgCgZABQhQgHhJgnIABgDIgDgCIgBAAQgPgMgIgNIgJgGIAAgDQgCgCAFgCIAEgIIACgBIACgBQAwgGAuAFQAYABAZADIA2AHQB9AdAqhyQACgLgIgJQgogmg5gIIABgBQiggZh3hbIAAgJQBwg0B8A3QB2A0A+hgQgBgJgGgFIgCAAQgKgNgJgPIACgCIgBgCQgFgOgHgIIgCgCQgQgUgzgGQgSgGgWgGIhKgOQghgKAAgJQAAgYA4ggQATgKBAggIALABQBQgEA6BuQALASAHAPQgBAKABAPIAAANIAAAEIABAAIAAABQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQA5DJiRCiQg2A4hAAwgAspisQgEgEgCgFQAHAIAMAJQgHgDgGgFgAGij0QgFgGACgIQgBgFgDgBQggABghAJQBBg9BagcIgGAGQglAegBAnQABAbAIAJIADAEQgmgEgNgMgAqPkFQgUABgSALIgRAJQgFABgVgXQAMgEAQgBQAsgGAiADQAjACABAOIgCAOQgYgWgjABg");
	this.shape_186.setTransform(-239.4,-169.7);

	this.instance_9 = new lib.Tween2("synched",0);
	this.instance_9.setTransform(-79.4,32.7,1,1.012,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:-109.8,y:-166.7}},{t:this.shape_2},{t:this.shape_1},{t:this.instance_8,p:{rotation:1.3,x:-300.5,y:-92.8,scaleX:1,scaleY:1,regX:102.4,skewX:0,skewY:0,regY:85.4}},{t:this.instance_7,p:{rotation:1.3,x:45.7,y:-192.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-33.1,y:85.4,regX:300.3,regY:327.3,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_5,p:{rotation:1.3,x:-79.5,y:94.2,scaleX:1,scaleY:1,regX:255.2,skewX:0,skewY:0,regY:95}},{t:this.instance_4,p:{regX:23.3,rotation:13.5,x:41.1,y:144.4,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:21.9}},{t:this.instance_3,p:{regX:118.9,rotation:1.3,x:-164.6,y:-250.1,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:80.2}}]}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_3,p:{x:-100,y:-156.9}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.instance_8,p:{rotation:2.8,x:-292.5,y:-88,scaleX:1,scaleY:1,regX:102.4,skewX:0,skewY:0,regY:85.4}},{t:this.instance_7,p:{rotation:2.8,x:56.2,y:-178.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:1.5,x:-30,y:97.1,regX:300.3,regY:327.3,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_5,p:{rotation:2.8,x:-76.6,y:104.7,scaleX:1,scaleY:1,regX:255.2,skewX:0,skewY:0,regY:95}},{t:this.instance_4,p:{regX:23.2,rotation:15.1,x:42.6,y:158.1,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:21.9}},{t:this.instance_3,p:{regX:119,rotation:2.8,x:-152.4,y:-241.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:80.2}}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_3,p:{x:-71.5,y:-125}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance_8,p:{rotation:8.6,x:-269.9,y:-76.1,scaleX:0.999,scaleY:0.999,regX:102.4,skewX:0,skewY:0,regY:85.4}},{t:this.instance_7,p:{rotation:8.6,x:86,y:-130.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:7.3,x:-27.6,y:134.7,regX:300.4,regY:327.4,scaleX:1,scaleY:1,skewX:0,skewY:0}},{t:this.instance_5,p:{rotation:8.6,x:-74.8,y:137.5,scaleX:0.999,scaleY:0.999,regX:255.2,skewX:0,skewY:0,regY:95}},{t:this.instance_4,p:{regX:23.2,rotation:20.9,x:38.3,y:202.7,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:21.9}},{t:this.instance_3,p:{regX:118.9,rotation:8.6,x:-115.1,y:-214.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:80.2}}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23,p:{skewX:0,x:-58.2,y:-116.5}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_8,p:{rotation:0,x:-257.5,y:-68,scaleX:0.996,scaleY:0.996,regX:102.5,skewX:9.9,skewY:8.6,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:99.5,y:-122.3,scaleX:0.996,scaleY:0.996,skewX:9.9,skewY:8.6,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-19.8,y:141.5,regX:300.4,regY:327.4,scaleX:0.997,scaleY:0.996,skewX:8.6,skewY:7.3}},{t:this.instance_5,p:{rotation:0,x:-67,y:144.2,scaleX:0.996,scaleY:0.996,regX:255.3,skewX:9.9,skewY:8.6,regY:95}},{t:this.instance_4,p:{regX:23.2,rotation:0,x:44.6,y:209,scaleX:0.991,scaleY:1,skewX:22.1,skewY:20.9,regY:21.9}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-99.9,y:-205.6,scaleX:0.996,scaleY:0.996,skewX:9.9,skewY:8.6,regY:80.2}}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_3,p:{x:-42.1,y:-118.7}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_8,p:{rotation:0,x:-242.4,y:-70.2,scaleX:0.993,scaleY:1,regX:102.5,skewX:10.9,skewY:8.6,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:115.7,y:-124.5,scaleX:0.993,scaleY:1,skewX:10.9,skewY:8.6,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-8.6,y:139.3,regX:300.4,regY:327.4,scaleX:0.994,scaleY:0.999,skewX:9.6,skewY:7.3}},{t:this.instance_5,p:{rotation:0,x:-55.8,y:142,scaleX:0.993,scaleY:1,regX:255.3,skewX:10.9,skewY:8.6,regY:95}},{t:this.instance_4,p:{regX:23.2,rotation:0,x:54.6,y:206.8,scaleX:0.985,scaleY:1.007,skewX:23,skewY:21.1,regY:21.9}},{t:this.instance_3,p:{regX:118.8,rotation:0,x:-82.2,y:-207.8,scaleX:0.993,scaleY:1,skewX:10.9,skewY:8.6,regY:80.2}}]},2).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_23,p:{skewX:-0.6,x:-8.3,y:-136.5}},{t:this.shape_34},{t:this.shape_33},{t:this.instance_8,p:{rotation:0,x:-210.6,y:-109.3,scaleX:0.998,scaleY:0.981,regX:102.4,skewX:14.8,skewY:14.4,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:148.8,y:-125.9,scaleX:0.998,scaleY:0.981,skewX:14.8,skewY:14.4,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:8.5,y:121.4,regX:300.3,regY:327.4,scaleX:0.998,scaleY:0.981,skewX:13.5,skewY:13.1}},{t:this.instance_5,p:{rotation:0,x:-38.6,y:119.4,scaleX:0.998,scaleY:0.981,regX:255.3,skewX:14.8,skewY:14.4,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:67.2,y:194.7,scaleX:0.995,scaleY:0.983,skewX:27.2,skewY:26.5,regY:21.9}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-42.6,y:-228.6,scaleX:0.998,scaleY:0.981,skewX:14.8,skewY:14.4,regY:80.2}}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_23,p:{skewX:0.4,x:-2.5,y:-148}},{t:this.shape_40},{t:this.shape_39},{t:this.instance_8,p:{rotation:0,x:-205,y:-120.4,scaleX:0.997,scaleY:1,regX:102.4,skewX:15,skewY:14.7,regY:85.3}},{t:this.instance_7,p:{rotation:0,x:154.5,y:-137.3,scaleX:0.997,scaleY:1,skewX:15,skewY:14.7,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:11.9,y:114.5,regX:300.3,regY:327.4,scaleX:0.997,scaleY:1,skewX:13.7,skewY:13.4}},{t:this.instance_5,p:{rotation:0,x:-35.1,y:112.5,scaleX:0.997,scaleY:1,regX:255.3,skewX:15,skewY:14.7,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:70,y:189.2,scaleX:0.995,scaleY:1,skewX:27.2,skewY:27,regY:22}},{t:this.instance_3,p:{regX:119,rotation:0,x:-35.8,y:-241.8,scaleX:0.997,scaleY:1,skewX:15,skewY:14.7,regY:80.2}}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_23,p:{skewX:0,x:0,y:-152.2}},{t:this.shape_46},{t:this.shape_45},{t:this.instance_8,p:{rotation:0,x:-202.6,y:-124.3,scaleX:0.996,scaleY:1.007,regX:102.4,skewX:15.1,skewY:14.8,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:157,y:-141.3,scaleX:0.996,scaleY:1.007,skewX:15.1,skewY:14.8,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:13.4,y:112.1,regX:300.3,regY:327.4,scaleX:0.997,scaleY:1.007,skewX:13.8,skewY:13.5}},{t:this.instance_5,p:{rotation:0,x:-33.6,y:110,scaleX:0.996,scaleY:1.007,regX:255.3,skewX:15.1,skewY:14.8,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:27.2,x:71.2,y:187.1,scaleX:0.995,scaleY:1.007,skewX:0,skewY:0,regY:21.9}},{t:this.instance_3,p:{regX:119,rotation:0,x:-33,y:-246.5,scaleX:0.996,scaleY:1.007,skewX:15.1,skewY:14.8,regY:80.2}}]},1).to({state:[{t:this.shape_56,p:{y:-26.8}},{t:this.shape_55},{t:this.shape_54,p:{y:-154.5}},{t:this.shape_53,p:{y:-147.7}},{t:this.shape_52,p:{y:-135.4}},{t:this.shape_23,p:{skewX:0,x:0,y:-148.9}},{t:this.shape_51},{t:this.instance_8,p:{rotation:0,x:-202.6,y:-121.1,scaleX:0.996,scaleY:1.002,regX:102.4,skewX:15.2,skewY:14.7,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:156.9,y:-138.1,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regX:84.3,regY:91.4}},{t:this.instance_6,p:{rotation:0,x:13.4,y:114.1,regX:300.3,regY:327.5,scaleX:0.996,scaleY:1.002,skewX:13.9,skewY:13.4}},{t:this.instance_5,p:{rotation:0,x:-33.6,y:111.9,scaleX:0.996,scaleY:1.002,regX:255.3,skewX:15.2,skewY:14.7,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:71.2,y:188.7,scaleX:0.994,scaleY:1.003,skewX:27.4,skewY:27.1,regY:21.9}},{t:this.instance_3,p:{regX:119,rotation:0,x:-33,y:-242.7,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regY:80.2}}]},2).to({state:[{t:this.shape_56,p:{y:-29.4}},{t:this.shape_58,p:{y:90}},{t:this.shape_54,p:{y:-157.1}},{t:this.shape_53,p:{y:-150.3}},{t:this.shape_23,p:{skewX:0,x:0,y:-151.5}},{t:this.shape_57},{t:this.shape_52,p:{y:-138}},{t:this.instance_8,p:{rotation:0,x:-202.6,y:-123.7,scaleX:0.996,scaleY:1.002,regX:102.4,skewX:15.2,skewY:14.7,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:156.9,y:-140.7,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regX:84.3,regY:91.4}},{t:this.instance_6,p:{rotation:0,x:13.4,y:111.5,regX:300.3,regY:327.5,scaleX:0.996,scaleY:1.002,skewX:13.9,skewY:13.4}},{t:this.instance_5,p:{rotation:0,x:-33.6,y:109.3,scaleX:0.996,scaleY:1.002,regX:255.3,skewX:15.2,skewY:14.7,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:71.2,y:186.1,scaleX:0.994,scaleY:1.003,skewX:27.4,skewY:27.1,regY:21.9}},{t:this.instance_3,p:{regX:119,rotation:0,x:-33,y:-245.3,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regY:80.2}}]},13).to({state:[{t:this.shape_56,p:{y:-32}},{t:this.shape_58,p:{y:87.4}},{t:this.shape_54,p:{y:-159.7}},{t:this.shape_53,p:{y:-152.9}},{t:this.shape_52,p:{y:-140.6}},{t:this.shape_23,p:{skewX:0,x:0,y:-154.1}},{t:this.shape_59},{t:this.instance_8,p:{rotation:0,x:-202.6,y:-126.3,scaleX:0.996,scaleY:1.002,regX:102.4,skewX:15.2,skewY:14.7,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:156.9,y:-143.3,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regX:84.3,regY:91.4}},{t:this.instance_6,p:{rotation:0,x:13.4,y:108.9,regX:300.3,regY:327.5,scaleX:0.996,scaleY:1.002,skewX:13.9,skewY:13.4}},{t:this.instance_5,p:{rotation:0,x:-33.6,y:106.7,scaleX:0.996,scaleY:1.002,regX:255.3,skewX:15.2,skewY:14.7,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:71.2,y:183.5,scaleX:0.994,scaleY:1.003,skewX:27.4,skewY:27.1,regY:21.9}},{t:this.instance_3,p:{regX:119,rotation:0,x:-33,y:-247.9,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regY:80.2}}]},2).to({state:[{t:this.shape_56,p:{y:-29.4}},{t:this.shape_58,p:{y:90}},{t:this.shape_54,p:{y:-157.1}},{t:this.shape_53,p:{y:-150.3}},{t:this.shape_52,p:{y:-138}},{t:this.shape_23,p:{skewX:0,x:0,y:-151.5}},{t:this.shape_57},{t:this.instance_8,p:{rotation:0,x:-202.6,y:-123.7,scaleX:0.996,scaleY:1.002,regX:102.4,skewX:15.2,skewY:14.7,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:156.9,y:-140.7,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regX:84.3,regY:91.4}},{t:this.instance_6,p:{rotation:0,x:13.4,y:111.5,regX:300.3,regY:327.5,scaleX:0.996,scaleY:1.002,skewX:13.9,skewY:13.4}},{t:this.instance_5,p:{rotation:0,x:-33.6,y:109.3,scaleX:0.996,scaleY:1.002,regX:255.3,skewX:15.2,skewY:14.7,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:71.2,y:186.1,scaleX:0.994,scaleY:1.003,skewX:27.4,skewY:27.1,regY:21.9}},{t:this.instance_3,p:{regX:119,rotation:0,x:-33,y:-245.3,scaleX:0.996,scaleY:1.002,skewX:15.2,skewY:14.7,regY:80.2}}]},2).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_23,p:{skewX:0,x:-0.4,y:-142.5}},{t:this.shape_61},{t:this.shape_60},{t:this.instance_8,p:{rotation:0,x:-203.4,y:-118.5,scaleX:0.996,scaleY:1.002,regX:102.4,skewX:16.2,skewY:15.8,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:156.4,y:-128.9,scaleX:0.996,scaleY:1.002,skewX:16.2,skewY:15.8,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:8.3,y:120.6,regX:300.3,regY:327.5,scaleX:0.996,scaleY:1.002,skewX:15,skewY:14.5}},{t:this.instance_5,p:{rotation:0,x:-38.6,y:117.6,scaleX:0.996,scaleY:1.002,regX:255.3,skewX:16.2,skewY:15.8,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:64.8,y:196.2,scaleX:0.994,scaleY:1.003,skewX:28.4,skewY:28.1,regY:21.9}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-31.7,y:-237,scaleX:0.996,scaleY:1.002,skewX:16.2,skewY:15.8,regY:80.2}}]},2).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_23,p:{skewX:0,x:-8.8,y:-128.6}},{t:this.shape_67,p:{x:-32.9,y:-115.9}},{t:this.shape_66,p:{x:-99,y:110.1}},{t:this.instance_8,p:{rotation:16.4,x:-211.6,y:-107.2,scaleX:0.998,scaleY:0.998,regX:102.5,skewX:0,skewY:0,regY:85.4}},{t:this.instance_7,p:{rotation:16.4,x:148,y:-113.2,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:15.1,x:-0.5,y:134.2,regX:300.4,regY:327.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0}},{t:this.instance_5,p:{rotation:16.4,x:-47.5,y:130.6,scaleX:0.998,scaleY:0.998,regX:255.3,skewX:0,skewY:0,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:28.7,x:55.7,y:210.6,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:16.4,x:-39.8,y:-223.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:80.2}}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_23,p:{skewX:0,x:-11,y:-124.2}},{t:this.shape_67,p:{x:-35.1,y:-111.5}},{t:this.shape_66,p:{x:-101.2,y:114.5}},{t:this.instance_8,p:{rotation:16.4,x:-213.8,y:-102.8,scaleX:0.998,scaleY:0.998,regX:102.5,skewX:0,skewY:0,regY:85.4}},{t:this.instance_7,p:{rotation:16.4,x:145.8,y:-108.8,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:15.1,x:-2.7,y:138.6,regX:300.4,regY:327.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0}},{t:this.instance_5,p:{rotation:16.4,x:-49.7,y:135,scaleX:0.998,scaleY:0.998,regX:255.3,skewX:0,skewY:0,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:28.7,x:53.5,y:215,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:16.4,x:-42,y:-219,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:80.2}}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_23,p:{skewX:0,x:-13.2,y:-122}},{t:this.shape_67,p:{x:-37.3,y:-109.3}},{t:this.shape_66,p:{x:-103.4,y:116.7}},{t:this.instance_8,p:{rotation:16.4,x:-216,y:-100.6,scaleX:0.998,scaleY:0.998,regX:102.5,skewX:0,skewY:0,regY:85.4}},{t:this.instance_7,p:{rotation:16.4,x:143.6,y:-106.6,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:15.1,x:-4.9,y:140.8,regX:300.4,regY:327.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0}},{t:this.instance_5,p:{rotation:16.4,x:-51.9,y:137.2,scaleX:0.998,scaleY:0.998,regX:255.3,skewX:0,skewY:0,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:28.7,x:51.3,y:217.2,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:16.4,x:-44.2,y:-216.8,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:80.2}}]},2).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_23,p:{skewX:0,x:-12.6,y:-117.1}},{t:this.shape_80},{t:this.instance_8,p:{rotation:0,x:-215.6,y:-95.7,scaleX:0.995,scaleY:0.993,regX:102.5,skewX:16.9,skewY:16.3,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:144,y:-101.7,scaleX:0.995,scaleY:0.993,skewX:16.9,skewY:16.3,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-6.2,y:143.8,regX:300.4,regY:327.4,scaleX:0.996,scaleY:0.993,skewX:15.6,skewY:15}},{t:this.instance_5,p:{rotation:0,x:-53.3,y:140.3,scaleX:0.995,scaleY:0.993,regX:255.3,skewX:16.9,skewY:16.3,regY:95.2}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:49.4,y:219.5,scaleX:0.993,scaleY:0.995,skewX:29.2,skewY:28.6,regY:21.9}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-42.9,y:-211.1,scaleX:0.995,scaleY:0.993,skewX:16.9,skewY:16.3,regY:80.3}}]},17).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_23,p:{skewX:0,x:-3.9,y:-113.1}},{t:this.shape_87},{t:this.shape_86},{t:this.instance_8,p:{rotation:0,x:-207.3,y:-97.1,scaleX:0.996,scaleY:0.991,regX:102.5,skewX:18.4,skewY:17.8,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:152.2,y:-93.6,scaleX:0.996,scaleY:0.991,skewX:18.4,skewY:17.8,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-4,y:147.4,regX:300.4,regY:327.4,scaleX:0.996,scaleY:0.991,skewX:17.1,skewY:16.5}},{t:this.instance_5,p:{rotation:0,x:-51,y:142.7,scaleX:0.996,scaleY:0.991,regX:255.4,skewX:18.4,skewY:17.8,regY:95.3}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:49.5,y:224.5,scaleX:0.993,scaleY:0.993,skewX:30.7,skewY:30,regY:22.1}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-31.9,y:-207.7,scaleX:0.996,scaleY:0.991,skewX:18.4,skewY:17.8,regY:80.2}}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_23,p:{skewX:0,x:0.5,y:-112.6}},{t:this.shape_92},{t:this.instance_8,p:{rotation:0,x:-203,y:-96.6,scaleX:0.993,scaleY:0.996,regX:102.5,skewX:18.9,skewY:17.9,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:156.6,y:-93,scaleX:0.993,scaleY:0.996,skewX:18.9,skewY:17.9,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-2.3,y:148.5,regX:300.4,regY:327.4,scaleX:0.993,scaleY:0.996,skewX:17.6,skewY:16.6}},{t:this.instance_5,p:{rotation:0,x:-49.1,y:143.8,scaleX:0.993,scaleY:0.996,regX:255.4,skewX:18.9,skewY:17.9,regY:95.3}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:50.6,y:225.8,scaleX:0.989,scaleY:0.999,skewX:31,skewY:30.2,regY:22.1}},{t:this.instance_3,p:{regX:119,rotation:0,x:-26.4,y:-207.4,scaleX:0.993,scaleY:0.996,skewX:18.9,skewY:17.9,regY:80.2}}]},2).to({state:[{t:this.shape_103},{t:this.shape_23,p:{skewX:0,x:9.3,y:-112.6}},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.instance_8,p:{rotation:0,x:-194.4,y:-96.6,scaleX:0.989,scaleY:1,regX:102.5,skewX:19.6,skewY:18,regY:85.4}},{t:this.instance_7,p:{rotation:0,x:165.1,y:-93,scaleX:0.989,scaleY:1,skewX:19.6,skewY:18,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:3,y:148.5,regX:300.4,regY:327.4,scaleX:0.99,scaleY:1,skewX:18.3,skewY:16.7}},{t:this.instance_5,p:{rotation:0,x:-43.6,y:143.9,scaleX:0.989,scaleY:1,regX:255.5,skewX:19.6,skewY:18,regY:95.3}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:54.9,y:225.8,scaleX:0.983,scaleY:1.005,skewX:31.6,skewY:30.4,regY:22.1}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-16.3,y:-207.4,scaleX:0.989,scaleY:1,skewX:19.6,skewY:18,regY:80.2}}]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_23,p:{skewX:0,x:27.7,y:-121.8}},{t:this.shape_104},{t:this.instance_8,p:{rotation:0,x:-176,y:-106.1,scaleX:0.989,scaleY:0.984,regX:102.4,skewX:19.6,skewY:17.7,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:183.5,y:-102.5,scaleX:0.989,scaleY:0.984,skewX:19.6,skewY:17.7,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:22.6,y:134.9,regX:300.4,regY:327.4,scaleX:0.989,scaleY:0.983,skewX:18.3,skewY:16.4}},{t:this.instance_5,p:{rotation:0,x:-24.1,y:130.1,scaleX:0.989,scaleY:0.984,regX:255.4,skewX:19.6,skewY:17.7,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:74.8,y:210.9,scaleX:0.981,scaleY:0.991,skewX:31.9,skewY:29.9,regY:22.1}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:1.6,y:-215.1,scaleX:0.989,scaleY:0.984,skewX:19.6,skewY:17.7,regY:80.2}}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_23,p:{skewX:0,x:37.3,y:-151.2}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance_8,p:{rotation:0,x:-166.3,y:-135,scaleX:0.99,scaleY:1.003,regX:102.5,skewX:19.4,skewY:18,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:193,y:-131.5,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:31.3,y:110.8,regX:300.4,regY:327.5,scaleX:0.99,scaleY:1.002,skewX:18.2,skewY:16.7}},{t:this.instance_5,p:{rotation:0,x:-15.4,y:106,scaleX:0.99,scaleY:1.003,regX:255.4,skewX:19.4,skewY:18,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:83.3,y:188.2,scaleX:0.984,scaleY:1.007,skewX:31.5,skewY:30.5,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:11.5,y:-246.2,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regY:80.2}}]},1).to({state:[{t:this.shape_121},{t:this.shape_120,p:{y:-171.4}},{t:this.shape_119},{t:this.shape_23,p:{skewX:0,x:39.5,y:-160}},{t:this.shape_118,p:{y:75.6}},{t:this.shape_117,p:{y:-172.6}},{t:this.shape_116,p:{y:-146.3}},{t:this.instance_8,p:{rotation:0,x:-164.1,y:-143.8,scaleX:0.99,scaleY:1.003,regX:102.5,skewX:19.4,skewY:18,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:195.2,y:-140.3,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:33.5,y:102,regX:300.4,regY:327.5,scaleX:0.99,scaleY:1.002,skewX:18.2,skewY:16.7}},{t:this.instance_5,p:{rotation:0,x:-13.2,y:97.2,scaleX:0.99,scaleY:1.003,regX:255.4,skewX:19.4,skewY:18,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:85.5,y:179.4,scaleX:0.984,scaleY:1.007,skewX:31.5,skewY:30.5,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:13.7,y:-255,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regY:80.2}}]},1).to({state:[{t:this.shape_123,p:{y:-41}},{t:this.shape_120,p:{y:-174}},{t:this.shape_122,p:{y:-150.5}},{t:this.shape_23,p:{skewX:0,x:39.5,y:-162.6}},{t:this.shape_118,p:{y:73}},{t:this.shape_117,p:{y:-175.2}},{t:this.shape_116,p:{y:-148.9}},{t:this.instance_8,p:{rotation:0,x:-164.1,y:-146.4,scaleX:0.99,scaleY:1.003,regX:102.5,skewX:19.4,skewY:18,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:195.2,y:-142.9,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:33.5,y:99.4,regX:300.4,regY:327.5,scaleX:0.99,scaleY:1.002,skewX:18.2,skewY:16.7}},{t:this.instance_5,p:{rotation:0,x:-13.2,y:94.6,scaleX:0.99,scaleY:1.003,regX:255.4,skewX:19.4,skewY:18,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:85.5,y:176.8,scaleX:0.984,scaleY:1.007,skewX:31.5,skewY:30.5,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:13.7,y:-257.6,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regY:80.2}}]},1).to({state:[{t:this.shape_123,p:{y:-38.4}},{t:this.shape_120,p:{y:-171.4}},{t:this.shape_23,p:{skewX:0,x:39.5,y:-160}},{t:this.shape_122,p:{y:-147.9}},{t:this.shape_118,p:{y:75.6}},{t:this.shape_117,p:{y:-172.6}},{t:this.shape_116,p:{y:-146.3}},{t:this.instance_8,p:{rotation:0,x:-164.1,y:-143.8,scaleX:0.99,scaleY:1.003,regX:102.5,skewX:19.4,skewY:18,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:195.2,y:-140.3,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:33.5,y:102,regX:300.4,regY:327.5,scaleX:0.99,scaleY:1.002,skewX:18.2,skewY:16.7}},{t:this.instance_5,p:{rotation:0,x:-13.2,y:97.2,scaleX:0.99,scaleY:1.003,regX:255.4,skewX:19.4,skewY:18,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:85.5,y:179.4,scaleX:0.984,scaleY:1.007,skewX:31.5,skewY:30.5,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:13.7,y:-255,scaleX:0.99,scaleY:1.003,skewX:19.4,skewY:18,regY:80.2}}]},2).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_23,p:{skewX:0,x:54.4,y:-151.8}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.instance_8,p:{rotation:0,x:-149.8,y:-139.4,scaleX:0.985,scaleY:1.008,regX:102.5,skewX:21.3,skewY:19.2,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:209.4,y:-129.3,scaleX:0.985,scaleY:1.008,skewX:21.3,skewY:19.2,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:39.3,y:110,regX:300.4,regY:327.5,scaleX:0.986,scaleY:1.007,skewX:20.1,skewY:17.8}},{t:this.instance_5,p:{rotation:0,x:-7.1,y:104.4,scaleX:0.985,scaleY:1.008,regX:255.5,skewX:21.3,skewY:19.2,regY:95.3}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:88.7,y:188.4,scaleX:0.977,scaleY:1.014,skewX:33.2,skewY:31.8,regY:22.1}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:31.9,y:-247.3,scaleX:0.985,scaleY:1.008,skewX:21.3,skewY:19.2,regY:80.2}}]},29).to({state:[{t:this.shape_135},{t:this.shape_134,p:{x:7.6,y:-153.5}},{t:this.shape_133},{t:this.shape_132},{t:this.shape_23,p:{skewX:0,x:61,y:-143.6}},{t:this.shape_131},{t:this.shape_130},{t:this.instance_8,p:{rotation:0,x:-143.4,y:-134.8,scaleX:0.985,scaleY:1.008,regX:102.5,skewX:22.3,skewY:20.2,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:215.6,y:-118.3,scaleX:0.985,scaleY:1.008,skewX:22.3,skewY:20.2,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:41.2,y:118,regX:300.4,regY:327.6,scaleX:0.986,scaleY:1.007,skewX:21.1,skewY:18.9}},{t:this.instance_5,p:{rotation:0,x:-5,y:111.5,scaleX:0.985,scaleY:1.008,regX:255.5,skewX:22.3,skewY:20.2,regY:95.3}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:89.2,y:197,scaleX:0.977,scaleY:1.014,skewX:34.2,skewY:32.8,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:40.2,y:-239.4,scaleX:0.985,scaleY:1.008,skewX:22.3,skewY:20.2,regY:80.2}}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_23,p:{skewX:0,x:65.9,y:-136.1}},{t:this.shape_137},{t:this.shape_136},{t:this.instance_8,p:{rotation:0,x:-138.6,y:-127.3,scaleX:0.981,scaleY:1.004,regX:102.5,skewX:22.8,skewY:20.1,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:220.2,y:-111.1,scaleX:0.981,scaleY:1.004,skewX:22.8,skewY:20.1,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:44.2,y:123.6,regX:300.4,regY:327.6,scaleX:0.983,scaleY:1.003,skewX:21.6,skewY:18.8}},{t:this.instance_5,p:{rotation:0,x:-2.1,y:117.2,scaleX:0.981,scaleY:1.004,regX:255.5,skewX:22.8,skewY:20.1,regY:95.4}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:91.5,y:202,scaleX:0.972,scaleY:1.012,skewX:34.7,skewY:32.7,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:45.8,y:-231.2,scaleX:0.981,scaleY:1.004,skewX:22.8,skewY:20.1,regY:80.2}}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_23,p:{skewX:0,x:54.2,y:-141}},{t:this.shape_143},{t:this.shape_142},{t:this.shape_134,p:{x:0.6,y:-150.9}},{t:this.instance_8,p:{rotation:0,x:-150.1,y:-132.2,scaleX:0.988,scaleY:1.004,regX:102.5,skewX:21.8,skewY:20.1,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:208.9,y:-115.7,scaleX:0.988,scaleY:1.004,skewX:21.8,skewY:20.1,regX:84.2,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:37.1,y:120.6,regX:300.4,regY:327.6,scaleX:0.989,scaleY:1.004,skewX:20.6,skewY:18.8}},{t:this.instance_5,p:{rotation:0,x:-9.3,y:114.1,scaleX:0.988,scaleY:1.004,regX:255.4,skewX:21.8,skewY:20.1,regY:95.3}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:85.9,y:199.7,scaleX:0.982,scaleY:1.009,skewX:33.8,skewY:32.6,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:32.3,y:-236.8,scaleX:0.988,scaleY:1.004,skewX:21.8,skewY:20.1,regY:80.2}}]},3).to({state:[{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.instance_8,p:{rotation:0,x:-258.1,y:-104.9,scaleX:0.98,scaleY:1.008,regX:102.4,skewX:9.9,skewY:4.2,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:96.6,y:-186.9,scaleX:0.98,scaleY:1.008,skewX:9.9,skewY:4.2,regX:84.3,regY:91.4}},{t:this.instance_6,p:{rotation:0,x:-22.7,y:85.6,regX:300.4,regY:327.4,scaleX:0.982,scaleY:1.006,skewX:8.6,skewY:2.9}},{t:this.instance_5,p:{rotation:0,x:-69.5,y:92.2,scaleX:0.98,scaleY:1.008,regX:255.4,skewX:9.9,skewY:4.2,regY:95.3}},{t:this.instance_4,p:{regX:23.4,rotation:0,x:41.4,y:148.2,scaleX:0.96,scaleY:1.026,skewX:21.5,skewY:17,regY:22.1}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-101.2,y:-254.5,scaleX:0.98,scaleY:1.008,skewX:9.9,skewY:4.2,regY:80.3}}]},2).to({state:[{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157,p:{x:-135.9,y:-193.2}},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.instance_8,p:{rotation:0,x:-325.2,y:-115.6,scaleX:0.984,scaleY:0.999,regX:102.3,skewX:2.5,skewY:0.1,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:18,y:-222.1,scaleX:0.984,scaleY:0.999,skewX:2.5,skewY:0.1,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-65.7,y:57,regX:300.3,regY:327.4,scaleX:0.985,scaleY:0.999,skewX:1.2,skewY:-1.1}},{t:this.instance_5,p:{rotation:0,x:-111.5,y:66.7,scaleX:0.984,scaleY:0.999,regX:255.3,skewX:2.5,skewY:0.1,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:6.3,y:114.5,scaleX:0.976,scaleY:1.006,skewX:14.5,skewY:12.7,regY:22}},{t:this.instance_3,p:{regX:118.8,rotation:0,x:-188.1,y:-275.3,scaleX:0.984,scaleY:0.999,skewX:2.5,skewY:0.1,regY:80.3}}]},1).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.instance_8,p:{rotation:0,x:-355.6,y:-111.5,scaleX:0.984,scaleY:1.006,regX:102.5,skewX:-1.4,skewY:-3.3,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:-20.5,y:-239.6,scaleX:0.984,scaleY:1.006,skewX:-1.4,skewY:-3.3,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-84.5,y:45.9,regX:300.4,regY:327.4,scaleX:0.985,scaleY:1.005,skewX:-2.7,skewY:-4.6}},{t:this.instance_5,p:{rotation:0,x:-129.6,y:58.7,scaleX:0.984,scaleY:1.006,regX:255.4,skewX:-1.4,skewY:-3.3,regY:95.3}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:-8.5,y:99.3,scaleX:0.978,scaleY:1.011,skewX:10.4,skewY:9.2,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-230,y:-280.5,scaleX:0.984,scaleY:1.006,skewX:-1.4,skewY:-3.3,regY:80.2}}]},1).to({state:[{t:this.shape_174,p:{y:-124.5}},{t:this.shape_173,p:{y:-185.9}},{t:this.shape_172,p:{y:-175.4}},{t:this.shape_171,p:{y:-185.7}},{t:this.shape_170,p:{y:-92.6}},{t:this.shape_169,p:{y:-206.4,x:-179.7}},{t:this.shape_168,p:{y:55.7}},{t:this.instance_8,p:{rotation:0,x:-361,y:-112.8,scaleX:0.984,scaleY:1.006,regX:102.5,skewX:-2.7,skewY:-4.6,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:-28.9,y:-248.4,scaleX:0.984,scaleY:1.006,skewX:-2.7,skewY:-4.6,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-86.4,y:38.6,regX:300.4,regY:327.4,scaleX:0.985,scaleY:1.005,skewX:-4,skewY:-5.9}},{t:this.instance_5,p:{rotation:0,x:-131.3,y:52.2,scaleX:0.984,scaleY:1.006,regX:255.3,skewX:-2.7,skewY:-4.6,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:-9.3,y:90.2,scaleX:0.978,scaleY:1.011,skewX:9.1,skewY:7.9,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-239.3,y:-284.4,scaleX:0.984,scaleY:1.006,skewX:-2.7,skewY:-4.6,regY:80.3}}]},1).to({state:[{t:this.shape_173,p:{y:-183.3}},{t:this.shape_174,p:{y:-121.9}},{t:this.shape_171,p:{y:-183.1}},{t:this.shape_169,p:{y:-203.8,x:-179.7}},{t:this.shape_170,p:{y:-90}},{t:this.shape_172,p:{y:-172.8}},{t:this.shape_168,p:{y:58.3}},{t:this.instance_8,p:{rotation:0,x:-361,y:-110.2,scaleX:0.984,scaleY:1.006,regX:102.5,skewX:-2.7,skewY:-4.6,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:-28.9,y:-245.8,scaleX:0.984,scaleY:1.006,skewX:-2.7,skewY:-4.6,regX:84.4,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-86.4,y:41.2,regX:300.4,regY:327.4,scaleX:0.985,scaleY:1.005,skewX:-4,skewY:-5.9}},{t:this.instance_5,p:{rotation:0,x:-131.3,y:54.8,scaleX:0.984,scaleY:1.006,regX:255.3,skewX:-2.7,skewY:-4.6,regY:95.2}},{t:this.instance_4,p:{regX:23.3,rotation:0,x:-9.3,y:92.8,scaleX:0.978,scaleY:1.011,skewX:9.1,skewY:7.9,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-239.3,y:-281.8,scaleX:0.984,scaleY:1.006,skewX:-2.7,skewY:-4.6,regY:80.3}}]},2).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_157,p:{x:-168.8,y:-201.3}},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.instance_8,p:{rotation:0,x:-352.6,y:-112.5,scaleX:0.984,scaleY:1.006,regX:102.4,skewX:-1.2,skewY:-3.1,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:-17,y:-239.2,scaleX:0.984,scaleY:1.006,skewX:-1.2,skewY:-3.1,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-81.9,y:46.1,regX:300.4,regY:327.5,scaleX:0.985,scaleY:1.005,skewX:-2.5,skewY:-4.4}},{t:this.instance_5,p:{rotation:0,x:-127.2,y:58.5,scaleX:0.984,scaleY:1.006,regX:255.3,skewX:-1.2,skewY:-3.1,regY:95.3}},{t:this.instance_4,p:{regX:23.2,rotation:0,x:-6.3,y:99.6,scaleX:0.978,scaleY:1.011,skewX:10.6,skewY:9.4,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-226.3,y:-280.9,scaleX:0.984,scaleY:1.006,skewX:-1.2,skewY:-3.1,regY:80.2}}]},23).to({state:[{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_169,p:{y:-188.4,x:-153.3}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.instance_8,p:{rotation:0,x:-338.5,y:-104.6,scaleX:0.984,scaleY:1.006,regX:102.5,skewX:-0.2,skewY:-1.5,regY:85.5}},{t:this.instance_7,p:{rotation:0,x:-0.9,y:-222.3,scaleX:0.984,scaleY:1.006,skewX:-0.2,skewY:-1.5,regX:84.3,regY:91.5}},{t:this.instance_6,p:{rotation:0,x:-70.8,y:61.2,regX:300.2,regY:327.5,scaleX:0.984,scaleY:1.005,skewX:-1.5,skewY:-2.8}},{t:this.instance_5,p:{rotation:0,x:-116.2,y:72.4,scaleX:0.984,scaleY:1.006,regX:255.2,skewX:-0.2,skewY:-1.5,regY:95.3}},{t:this.instance_4,p:{regX:23.2,rotation:0,x:6.8,y:116.7,scaleX:0.978,scaleY:1.011,skewX:12.2,skewY:11,regY:22}},{t:this.instance_3,p:{regX:118.9,rotation:0,x:-209.5,y:-269.6,scaleX:0.984,scaleY:1.006,skewX:-0.2,skewY:-1.5,regY:80.2}}]},2).to({state:[{t:this.instance_9,p:{scaleY:1.012,skewX:-0.3,x:-79.4,y:32.7}}]},2).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,x:-69.1,y:45}}]},1).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,x:-69.1,y:47.6}}]},1).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,x:-69.1,y:45}}]},2).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,x:-69.1,y:39.8}}]},2).wait(1));

	// Layer 6
	this.instance_10 = new lib.SullyArmR("single",1);
	this.instance_10.setTransform(255.7,24.9,1,1,0,0,0,123.5,78.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#2D3033").s().p("AgSANQgCgEAAgJIACgVQAngQgBAlQAAAZgUACQgOgEgEgKg");
	this.shape_187.setTransform(232.5,-98.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{rotation:0,x:255.7,y:24.9,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]}).to({state:[{t:this.instance_10,p:{rotation:1.5,x:260.4,y:44.2,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{rotation:7.3,x:266.5,y:111.5,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:151.4,y:85.5,regX:-3.8,regY:61.9,scaleX:1.003,scaleY:1.003,skewX:12.1,skewY:2.6,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:286.4,y:107.9,regX:123.5,regY:78.9,scaleX:0.994,scaleY:0.999,skewX:9.6,skewY:7.3,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:303.1,y:129.2,regX:123.5,regY:78.9,scaleX:0.998,scaleY:0.981,skewX:13.5,skewY:13.1,startPosition:10}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:187.4,y:103.7,regX:2.5,regY:86.2,scaleX:0.997,scaleY:1,skewX:9.7,skewY:9.4,startPosition:10}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:195.6,y:119.1,regX:13.3,regY:102,scaleX:0.996,scaleY:1.006,skewX:8.1,skewY:7.7,startPosition:10}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:195.7,y:121.2,regX:13.3,regY:102,scaleX:0.996,scaleY:1.006,skewX:10.4,skewY:10,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:195.7,y:118.8,regX:13.3,regY:102.2,scaleX:0.997,scaleY:1.005,skewX:11.8,skewY:12.6,startPosition:10}}]},13).to({state:[{t:this.instance_10,p:{rotation:0,x:195.5,y:115.9,regX:13.2,regY:102,scaleX:0.995,scaleY:1.007,skewX:13.2,skewY:14.6,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:195.5,y:118.6,regX:13.2,regY:102,scaleX:0.996,scaleY:1.006,skewX:12.4,skewY:11.8,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:186.9,y:127.7,regX:9.6,regY:101.8,scaleX:0.996,scaleY:1.002,skewX:12.9,skewY:12.4,startPosition:22}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:281.6,y:130.1,regX:123.5,regY:79,scaleX:0.998,scaleY:1.003,skewX:9.7,skewY:15.1,startPosition:21}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:186.1,y:135.1,regX:21.1,regY:93.2,scaleX:0.991,scaleY:1.005,skewX:21.8,skewY:22.4,startPosition:19}}]},1).to({state:[{t:this.instance_10,p:{rotation:15.1,x:283.1,y:153.2,regX:123.4,regY:79,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,startPosition:19}}]},2).to({state:[{t:this.instance_10,p:{rotation:13.8,x:163.5,y:141,regX:4.5,regY:98.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,startPosition:19}}]},1).to({state:[{t:this.instance_10,p:{rotation:14.9,x:163.4,y:140.9,regX:4.4,regY:98.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,startPosition:19}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:138.3,y:150,regX:-17.3,regY:111.8,scaleX:0.995,scaleY:0.993,skewX:17.4,skewY:16.8,startPosition:19}}]},14).to({state:[{t:this.instance_10,p:{rotation:0,x:287.6,y:173.4,regX:123.4,regY:79,scaleX:0.996,scaleY:0.991,skewX:17.1,skewY:16.5,startPosition:19}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:287.6,y:176.2,regX:123.4,regY:79,scaleX:0.993,scaleY:0.996,skewX:17.6,skewY:16.6,startPosition:19}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:295.8,y:171.4,regX:123.4,regY:79,scaleX:0.99,scaleY:1,skewX:15.2,skewY:16.7,startPosition:19}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:212.1,y:138.8,regX:10.9,regY:95.7,scaleX:0.99,scaleY:0.995,skewX:17.7,skewY:8.2,startPosition:23}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:324.2,y:111.3,regX:123.4,regY:79,scaleX:0.99,scaleY:1.002,skewX:9.9,skewY:8.4,startPosition:20}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:212.4,y:110.1,regX:8.3,regY:105.2,scaleX:0.989,scaleY:1.002,skewX:6.1,skewY:4.7,startPosition:20}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:182.6,y:99.9,regX:-19.7,regY:100,scaleX:0.991,scaleY:1.001,skewX:5.6,skewY:2.7,startPosition:20}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:182.6,y:103.1,regX:-19.7,regY:100,scaleX:0.991,scaleY:1.001,skewX:5.6,skewY:2.7,startPosition:20}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:207.1,y:151.7,regX:0.8,regY:135.8,scaleX:0.988,scaleY:1.003,skewX:4.1,skewY:1.6,startPosition:20}}]},29).to({state:[{t:this.instance_10,p:{rotation:0,x:186.8,y:127,regX:-22.1,regY:105.7,scaleX:0.987,scaleY:1.004,skewX:6.3,skewY:4,startPosition:20}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:188.8,y:131,regX:-22.1,regY:105.7,scaleX:0.987,scaleY:1.004,skewX:6.3,skewY:4,startPosition:20}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:192.6,y:142.2,regX:-14,regY:115,scaleX:0.989,scaleY:1.004,skewX:7.4,skewY:3.2,startPosition:20}}]},3).to({state:[{t:this.instance_10,p:{rotation:0,x:169.2,y:40.2,regX:-12.2,regY:56.7,scaleX:0.957,scaleY:1.136,skewX:51.7,skewY:48.4,startPosition:24}}]},2).to({state:[{t:this.shape_187},{t:this.instance_10,p:{rotation:0,x:111.8,y:-15,regX:-12.2,regY:56.7,scaleX:0.986,scaleY:0.994,skewX:33,skewY:30.7,startPosition:25}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:87.6,y:-37.3,regX:-12.3,regY:56.6,scaleX:0.991,scaleY:0.995,skewX:29,skewY:27.2,startPosition:26}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:83.8,y:-48.6,regX:-12.1,regY:56.5,scaleX:0.991,scaleY:1.008,skewX:29.1,skewY:25.9,startPosition:26}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:83.8,y:-46,regX:-12.2,regY:56.6,scaleX:0.991,scaleY:0.995,skewX:27.7,skewY:25.9,startPosition:26}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:90.4,y:-36.6,regX:-12.3,regY:56.6,scaleX:0.991,scaleY:0.995,skewX:29.2,skewY:27.4,startPosition:26}}]},23).to({state:[{t:this.instance_10,p:{rotation:0,x:103,y:-16.8,regX:-12.3,regY:56.6,scaleX:0.995,scaleY:0.99,skewX:30.3,skewY:28.8,startPosition:25}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:245.3,y:17.6,regX:123.5,regY:78.9,scaleX:1,scaleY:1.012,skewX:-0.3,skewY:0,startPosition:5}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:255.7,y:30.1,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:255.7,y:32.7,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]},1).to({state:[{t:this.instance_10,p:{rotation:0,x:255.7,y:30.1,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]},2).to({state:[{t:this.instance_10,p:{rotation:0,x:255.7,y:24.9,regX:123.5,regY:78.9,scaleX:1,scaleY:1,skewX:0,skewY:0,startPosition:1}}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446,-332.9,727,745.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;