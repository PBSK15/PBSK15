(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.mixiebot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle_loop:239,BetterGetBackToTheLunchLab:240,BetterGetBackToTheLunchLab_stop:384,ProfessorYourGoggles:385,ProfessorYourGoggles_stop:496,TakeCareOfThisMyself:497,TakeCareOfThisMyself_stop:599});

	// anim
	this.instance = new lib.Mixie_IDLE("synched",0);
	this.instance.setTransform(238.9,306.6,0.8,0.8,0,0,0,7,7.1);

	this.instance_1 = new lib.Mixie_GetBack("synched",0);
	this.instance_1.setTransform(238.9,306.6,0.8,0.8,0,0,0,7,7.1);

	this.instance_2 = new lib.Mixie_ProfGoggles("synched",0);
	this.instance_2.setTransform(238.9,306.6,0.8,0.8,0,0,0,7,7.1);

	this.instance_3 = new lib.Mixie_TakeCareofThis("synched",0);
	this.instance_3.setTransform(238.9,306.6,0.8,0.8,0,0,0,7,7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},240).to({state:[{t:this.instance_2}]},145).to({state:[{t:this.instance_3}]},112).wait(103));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14,44.4,381.6,381.2);


// symbols:
(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIB+QgEAAgCgGQgDgHATgIQAbgMAOgTQADgIAKgRQAKgQADgBQgCAXgHASQgPAmgkALQgLAEgFAAIgBAAgAgjBWQgDgIAMgKIAWgSQAJgMAGgLIAJgRQAEgHADgdQABgcgBgEQgDgEABgCQAFADAHANQADAHAAAaQAAAYgCAFIgTAjQgVAkgVAGIgEABQgHAAgBgGgAg6AeQgFgBgFgEQAigZAKgxQAIgpgKgfIgBgEQAGACAGALQAFAKADAKQAHAXgJApQgMAxgfAJIgBAAIgFAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.6,13.8,25.4);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSB+QgEAAgBgGQgBgIAVgGQAagIAPgSIAQgXIAOgQQgEAWgIARQgTAlglAHIgQACIgCAAgAgpBTQgBgIANgJIAYgPQAKgLAHgKIALgQQAEgHAFgcQAFgbAAgEIgCgHQAEAEAHAOQABAHgDAaQgCAXgCAEIgXAiQgZAhgUAEIgEABQgIAAgBgIgAg5AaIgKgGQAlgUAPgxQAMgogGggIgBgEQAFADAFALQADALACAKQAEAYgLAnQgRAwggAGIgGgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.6,13.7,25.4);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAVgGQAagHARgRQAEgHANgPQAMgPADgBQgGAXgIARQgVAjgjAGIgSABIgCAAgAgrBTQgBgJANgIIAYgPQAMgKAGgKIAMgQQAEgGAHgcQAHgbAAgEQgDgFAAgCQAFAEAGAOQABAIgEAZQgEAXgBAFIgZAhQgaAfgVADIgDABQgIAAgBgHgAg4AYQgGgCgFgEQAmgTASgxQALgngDggIgBgEQAEADAFAMQADAKABAKQAEAYgNAoQgTAuggAFIgFgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-12.6,13.6,25.4);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGB3QgDgHASgKQAagNALgVQADgIAJgRQAIgRADgCQAAAXgFATQgMAngjAOQgOAGgDAAQgDAAgDgGgAgeBXQgDgIALgLIAUgUQAIgMAGgMIAHgSQADgGgBgdQAAgdgBgDQgDgEAAgCQAEADAKAMQADAHACAZQACAYgBAFIgQAlQgUAlgSAIIgGACQgFAAgCgGgAg5AhQgFgBgGgCQAggdAGgxQAEgqgMgeIgCgEQAGACAHALQAHAJADAJQAJAXgGAqQgHAxgeAMIgCAAIgEAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-12.5,13.9,25.1);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgpBeQgMgOgJgWQACABAQAMQAOAMAGAGQAUAOAbABQAWABAAAIQABAGgEACQgEABgQABIgFAAQggAAgagdgAgJA6IgfgbQgDgEgJgYQgIgWgBgIQAEgPADgFIAAAHQAAAEAMAaQAMAaAGAFIAOAOQAJAIANAHIAaAJQAPAGABAJQAAAIgLABIgBAAQgVAAgegZgAgIgZQgXgjgBgYQgBgKACgLQACgNAFgEIAAAEQACAgAVAkQAYAtAoAKQgDAFgFADIgFACIgCAAQgfAAgZgog");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-12.3,12.8,24.8);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdBtQgogZACgvIAFAGQAQAVAkAdIAfAZQAAAHgBAAIgCABQgVgBgagQgAgcAkQgOgUAAgwQAAgHAEgHIAIgPIAAADQgEBDAiAdQAkAdAEANQAAAHgCADIgFABQg1gqgIgNgAAWAAQgWgfAAgvQAAgWASgZIgBABIgCAQIgBAVQAAAkAUAkQASAeAQAHQgFAEgIACQgSgGgPgWg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-12.6,13.7,25.4);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83888C").s().p("AgNA9IgZgFQgLgEgJgGQgRgLACgUQACgNAFgKQANghAigOQANgDALgCIAEAAQAVgDASANIAJAHQAGAHAFAJQAIAQgCAPIgEAPQgFANgJAKQgNANgTADQgOADgMAAIgLAAg");
	this.shape.setTransform(15.3,12.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AA6A+IAqgGIgHAOIgsAIgABCAOIAzgKQAAALgIAKQgDAFgFACQgRAJgTABgAA0gPIgBgCIgVgWIAXgHIAYgJIAggKIAkgMIASAIIAFAQQAAAEgBAEQgDANgMAFQgQAIgRADIgrAKIgMACIgEABIgIgMgAh0gJQghgEgHgIIgLgOIAEgPIAGgEIAIgGIAPgDQAagEAVARQAJAGAIAJIglAgIgJgGg");
	this.shape_1.setTransform(18.1,9.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgwBpIgcgHIgVgIQgWgMgFgbQgBgKABgJIABgGIAEgUIgCgBIgHgFQgHgDgIgBQgKgBgKgHQgHgEgEgHQgGgLgEgMQgCgbAcgNQAugKAnAcIAHAGIAJALQAPgHAQgCIAVABIAmgKQAhgJAUgHIAPgGIAogNQAMAEAMAHQAQAJADAUIABAGQAAAHgCAHQgDAHgGAGQgIAHgJAFIgZAMQADAUgNARIgGAKQACAWgRAOQgFAFgFADQghALghACQgPgBgOAFQgRAEgPAAIgMAAg");
	this.shape_2.setTransform(18.5,10.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,37.1,21.2);


(lib.PROPELLORSPIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54565E").s().p("AHyVgQiSAliQAAQiYAAiPgjQh5gdh0g0QjFhZiQiJQgkgihPhmQg3A7hDA8IhWBKIgGAFQgDAFAAgKQAAg1CejYIgpg3QifjVAAgTIAAgIQABgMACgKIAAgBQALAHBUBXIArAsQA5A7A1AzIBShqQBwiQDEjtQgZghgXgkQhgiVg2i1Qg3i4AAizQAAkcBxiHQBriADJAPIAJAAQhOjJhkksIgSg2QjGAthjAvQhIAegeATQgtAdhUBgQjHDkiBDTIgcAwIAHACIAiANQBXAjB0BKICtBtQBYAyA4AAQAKAAAlgOQADAAADgCQABgBAAAGIAAAhQgDAPgMAIQgaAShyAAQhUAAgjgGQgigHgcgUQgogfgjgZQgigZgpgZIgPgJQgfgTghgSQgugRgvgNIgXgGIgVAsQh8ESAAEDIAAADQAAAdACAdQANC3BbDWQAXA4AbA0QBgC9CICOQg5gLhFhBIgYgYQg9hAg0hbQiPj7gLlGIgBg5IAAgJQAAjLAhivQAWhyAjhmQgpgHgqgEIgYgCQgygEgOgIQgTgKAAgiQAAgHAFgcIAEgOQADAEADARIAEAdQBQgmAZgYQANgMAJAAIASAAQAnACAoAHQBci/DUj9QCKikGFi0QA6gbA4gXIgVhCQhrlMgUhrICbGoIAZBEQBKgeBGgYIApgNQBjgfAqAAQANAAC4ASIA3AGQCPANAkACQCUAFB6CEIAyhgQBojFALgZQAOA/hPCqQgbA6glBGQAkAvAiA6QAAAIgSAMQgVANgUAAQgOAAgMgJQgOgPgLgKIgMgJIgsBMIgnBAQCFBnBzCiQBoCTBECjQA0gMBKgOIA3gKIgohUQgkhMgThAIAAgVIABAAQABAHA3BrQAmBKATA1QCagdAdgFQA5gKAlgCQhlihiUiZQABgRAXgJQAVgJAgAAIAEAAQBAACAzA8QAgAlBFB6QAqA2AjBjQAlBoAeCZQAwD3AACtQAAFbiHEtQhzEBjKDHQARAbAIAPIAEAJIgIgHIghgfIgPAOQgrApguAlQirCLjMBVQhPAhhPAWIA9ERQBPFnAaCoQhelYh0m8gAnpIoQiQDbhNBZQAlAhAkAeQGdFQGTAAQAhAACTgkIBegYIg8jqIgoidIgpikIgritQgRAWgRAQQhDA8hwAAQiOAAiHheQhKgzhBhLQg9BjhEBogAE4GUIABADIA2DfIAqCsIASBKIBKE3IAqgLQBZgWBcgyQA2gdB5hFQBGgkCFg9Qg/hHhWhpIgggnQg2Ajg9AAQgIAAgPgYQgMgTgGgUIgFgPIAHAKIACAEQADAEAFACIABAAIgKgcQAvgCAsgZIh3iXIAAgBIinjYIidjPIhgh9IgFgIIAJAEQBOAfA8A5IAZAXQAlAoBjB3IBOBgIBZB4IAXAgIBmCOQBvhuBOkYQAsibAai0QAViPAAhGQAAiogsiIIimAuIgRAAQArCDAABhQAAB4gWA2IAAABQgSAshEBCQAhhRASg5IAGgVQAXhTAAg7QAAgRgbhPQgTg5gZg6QhKAGgzAXQgNAFgMAHIgPAKQgPAKgBAAQgWAAgaghQATgQAdgbIAdgaQAegcAVgMQARgJAlgLQiZktjdiiIgPgKIgdgUIgjA4IgoA9IgIAMQhIBvgXAgIAdAaQAcAaAaAbQAyAyArA4QAnAzAiA4IABACIgGAAIgngYIhLguQh+hNg6gdQgigYgsgUIgFgCQhLgghbgFIgogBQgQAAg5AaIgDABIAkBtIAYBIIAAAGQgUgkgWgxQgUgpgVgyIhHAgIg4AWIhFAXIgJADQhAARgvAdQgpAagbAiQg9BNAACCQAAA3AKA+IAFAYQAMBAAXBGQANAnAPAlQApBoA5BbIATAeQAsBEAxA3IAUgYIBFhTIA3hCIgnBIIg5BkIgSAgQAyAzA4AnQCPBkCdAAQA0AAA5gYIATgIIARgJQgjiOgYhqQgliggNhPIACgJQAvAxAuCfIAHAZQATBFAnCfQAigcAagnQgZA9gZAugAVQrbQg5ASiTAqQAkCSAJA5QAKBAAABmQAAHnh9EdQg0B2g/BBIAqA8IAHAKIAXAhIBcCJQB1g6AmgxQCOi4BMi/QA1iFAaiQQAIgsAFgtQAKhZAAhfQAAjkhWjcQgjhZgxhXQgbAOg1ASgAEMuyQAOgjBIiKIAeg4IAfg9QjBhsjtAZIgGABQgIgtAAgVQAAgwAdgUQAcgRBAAAQC+AAC2B7IAHAFIAwhaIAagxQgqgUg9gQQiAgmhHgSQh/ggh0AAQiYAAjkAwQCoHOAcBYIABAHIAAAAQAkgIA8gSQA7gRA1gSQBrAACIByg");
	this.shape.setTransform(701.3,-65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54565E").s().p("ACFbaQj+gHjHgrQkNg8jPiFQjuiYi6kPIgLAFQgEgEAAgVIAAgCQifjvh3lIQCbDfBlB9QAtA3ArAwIAEgFIASgYQAHgJApgvQAjgpBfiBQCKi7gYBJQgVBBgyBNQiHC2hFBYQA2A5A2AvQBSBKBhBBQArAdAuAcQBZA1B1A5QBHAjBSAlQAwAVHGBGIgJhFIgKhGIghkFIgMhrIgXAAIgUAAQiLgChpgnQh0gqiEhqQgLgJgXgdIiqGJIgJgDQBQj8BAi6Ig6hYQhwisAAg/QAAgEAEgDIADgBIAAgBQAHgDAJAAQALABA4BFQBCBQA7A4IAWg+IAbhFQAVg5ATgtQAjhVAjhCQhYhxAAh0QAAiaAohbQAZg7BZhtQgeCCg5CBQgrBgAAA6QAAA4BvBaQAdgsAdggIAGAEQgFAdgYBGIACACQA6ArA4AeQA4AeAVAAQByAABNh1QAVgfAPgiQAZg5AIhBQAEgdAAgiQAAhtgrg5IgWgdIgIgLQgOgWAAghIACggQANAIALAKQAnAhAVA0QAbBGAAB1QAAEbhnCMQgpA5g0AcIAuG0IAgABQCCAAB7g+IgnhfIgahDQhSjYAAhKQAAgMAFgVIB9EiIAuBsIAYA5QAggUAegXIAPgMQBPhABGhYQA9hOAthVIhQhDIg8gzQh9huhUhWIAGgpQAHAPAOACIAkADQBFAJBiBOIAaAXIBIBBIAtAoIAWAVQA2iFAAhlQAAhVguiIQgph7g7hvIgVglQhUiQhahIQhNg+hJgBQgxBFgHAMQgGgDgCgDQgCgDgBgrQgDgoBJiCQAYgpAfgyQAohBBHhvIAzhQIBSh+IAWgiQALAUAAANIgCATQgGA4gsBcQgRAigWAnQgkBAgxBOQgeAugnA5IgiAxQAPgCARACQBdAJBiBqQBpBxA/CzQAYBCAQBGQAhCRAAChQAAB6gdB5IgJAjIARAPIB6BtIAGAEIAMALIAlAgIAWg3QBYjrAAkDQAAjShFimQhBibiwjpQgtg7hcgaQghgJgJgKQgMgOAMgiIAAgNQAFAHAFANQAFAAAVgNQAVgNA1AAQBFAABNBlQBFBaA/CaIAOAkQAyCBAgCJQAlCgAABxQAACvgVCJQgYCcgtA9QgJALgZAoIE/EXIAXAVQAohSAghiQBRj/AAkjQAAiOh/lWQhAishAiWQAAgfAJgNQCaEnBHDsQA4C4AACHQAADTgzDhQgmCqg9CZIA2AxIADADQgBACgKAAQgTAAgpgVQgPAkgRAjQgYAzgZAvQhEB8hRBhIgdAhQiLCaifA5QgrAQg6AYICBEuQhMh6hXimIgWAKQhwAwgkAOQipBEiFAAIhWgCQAWDkACAoIgmkMgAFvPOQhlA2hwAUQgmAHgpADIALBmIAcEPIAHBFIAHBFICeAYQCvAACUhXIAfgTIgcg4IgBgCQhMichTi7IgFgKIgGgPIgthnIgdAQgAKZLCQgQAXgSAWQgRAWgSAVQhEBLhPA3IDlIZQAkgZAqggICtiIQA+gvBPgbQAwgQA4gxQAUgQAVgVQBOhOA7hvIgjgWQh5hOjVimQgvBJgIAQIgEAEIAshYIAGgMIgHgFIgbgVIgZgUIiChoQgvB7hJBngAAZN8IgJhZQgNiUgBjAQgrAWg1AAQgHAAgzghQhBgqg4gxQgWgUgSgUQgpBqhBCbIgTAuIgVAxIgJAUQDYCxEVASIAAAAgAyUEUQgahagGiSIlMAAQgJgIgFgIQgKgOAAgdQAAg7AwgiQAigZAZAAIA4AAQBrABBVAFQAHjXAvinQAMgqAOgnIAMgeQBNi+CAheQBqhOBjALQArAEAZAUQAaAVAAAfQAAAUhZA9QiEBdg/A3QkRDugLEvQBaAFBAALQA5AJAhAJQAMhgAKgtIAHACIgICPQAYgBAkgHIAlgKQAzgNAhgTQAbgOAQgSQALALApAjQAlAkAHAXQgjAEh8AvIgKAFIhOAdIg6AXIgZAAIAAAIQAABEAhBFQAhBFAAAmQAAAPgDAFQgEAIgKAAQgiAAgUheQgRhOgBhsIjVAAQAQBCAdBOIArBwQAUA0AAARQAAAPgEAHQgCAEgJAGIARADIgSAAQhFAAglh8gAz7vkQAugyBXgrQBfgtAugrQBQhLBygrQBJgcAlgDQAEAAA4gRIBLgTQhhkaAAiHQAAgKADgTQACAAACgHIABgDQBGB9BjE6QDfgsDtgGIAfpQIAFAAQAGAQAAAeQAAB0gUF/IgCAvIAtgBQAnAAA1AWQBBAbBXA6QBPA2AoAsQArAuAAAiIgCAZIgCACQgXgGhIgWIj7hQIhvgjIgLCtIgGBmIgQDOIgDg2QAAg+AEhaIAEhqIAIiZIABgVQhtgggjAAQiQAAiDAYIAAABIBGD2IAYBUIBTEdIARA7IgBABIgYg5QhBiXg0h+IgbhEQg8iTgphvQgvALguAPQkBBRjLC3Qk6EZiSHaQBzptCViig");
	this.shape_1.setTransform(711,-88.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54565E").s().p("Ai1cvQgDgTAAgWQAAghAMh8QggAIgNABQkQAAkAjXQjAihiokKIgthLQifkOhlkvIgbhUQhAjWAAh+QAAjLA6jxQBZlzDHkSQAQgWAqgVIA0gWQg6hWAAgnQAAgJAJg2QAzBDBNBSQA+goANg2QAdAeAUALQAGADAAALQAAAKhQBSIAdAeIBCBCIAaAZQAEgfATgiQAfg4A9guQCgh6E4gUIAPgBIgghvIgdhnQgliRAAgtQAAgbALgOIBwG/QAQACANAEQAPAEAiATQBCAiBcABQAqAAAfgMIAcgMQASAAArA+QAmA3AKAbQgEgEgKgDQgLgCgHAAQgpAAhHAZQhHAYggAAIhbgiIgDgBQglgOgagIIAxDFIgsiFIgVhBIgBgDQgagIgMABQhCgBg/AIQhwAMhnAjQiSAwhfBPIDWDQIAhAhIAmAnQBtg0CFAAQALAAAFAFQAKAJAPAkQhjAShrBDQBTBdAzBMQBoCdAJCFQgDADgKAAIgkgoIhGhPIhuh6Ih+iNQgyAsgtA1QjNDugHEgIBggGQAUgCAVgEIAMAAQBCgOBRgqQA5gdAxgdQAJAAADAHQAEAGAAASQAABxi2A4IgdAJQgkAJgqAHIgVADIhBAIIghAGQAVBlBBBtQBTCLCPCDQCAB1CJBLQBSAuA+ARIAKhdIABgHIAgkrIAJhSQh+gRg2hNIgDgEQgUgegOgtQgQg3gDgFIAngCQAhAAAaANIAuAeQAtAeA/AJIABgEIAAAFQAaADAgAAQCNAABzh3QB0h2AAiXQAAhehdhxIgRgTQhehkgbgoQAZgCAXADQBZAMA4BcIAJAQQAdA0AOBGQAQBLAABeQAACMgjBgIgLAZQgjBRhAAxQgkAbhdAnQhdAngdAAQglAAgfgDIgGBQQgJBjgPCLIgHBAIAAACIgLBkQAcAGAXAAQAUAAAbgEICQgYQgDAwhjA5QhTAygbgBQgWABgWgCIgoF4IgPCRQApgEBpgmQA8gWAygYQBPgnA1guQAHAMAGACIAUAFQgJAtg3AuQg9Azh1A2QhOAlhTAbIgeAJIgUDMgAyAurQk8GfAAHOQAAA+AMBHQAdCjBfDFQB/EJDRD9QCtDQC0CNQAnAeAnAcQDkCfCxAFIAQiUIAFguIAklJQjggXi1jGQhQhYhIh6QgTghgRghQhCh+gtiMQgSg3gLgtQhmAYhHAnQB9K4KuFpQgbALgYAKQguARggAAQk2AAjoogQhQi6g2jXQgUhNgLg4IgfAUQgVAOgNAAQgxAAgqgcQgqgdAAgiQAAhBAXgFQARgCBEAJQAkAAANgKIAbgYQAIgGAMgEQAzgVB6gNIAAgCQAAnFDXjcQAWgXAYgUIg+hDIhchiQg6g9gyg4Qg1g7gsg2IgcgjIgCgDQhiBnhHBdgAGSW/QgkjQhXnqQgykUAAhCQAAgQADgJQACgGAGgHIA0E1IABAHQA1E5AOBpIAtFXIAIBDIgLhCgAQPQeIgPgbQgFgLgBgFIAFgCIAEAFQABADAGAAIAEAAQAcgEAtg1IAGgJQA5hFA0htQCGkaAAk4QAAhJgJiXQAHAYANBkQANBsAAAtQAAFZhnDuIgFAMQhYDCh+BHQgGgGgRgggAJ/OdIg6gPQBYgvBrhjQBthkBeh5QDgkhAAjKQAAg8gXh6QgThpgdhkIh5AmQguAXgjALQgXAHgLAAQgXAAhBgZQg3gWgVALIgCghQAAgcAlgNIBPgQIArgJQBCgNBEgTIBKgWQiGl9jgiAQgdAaghAbIgsAkQhGA4hTA5Qg2Amg7AmIgUAMQgLgKgEgNQgHgYAOgjQAQglAsg5QATgYAYgcQAvg2BdhcIgHgFQhrg/g0g4IADgSIBNAeQArAQAWAAQAIAAA2gTQA1gTAVAAQAJAAAKACICRiKQi+ihkiiAQiDg6iWgzQC6hrDnBPQDSBKDIDRIAoArIA6g2IABAaQAAAqgKArQAkAuAiAwQAyBIArBNQAhA8AcA/QAiBKAZBIQAzCYAMCQQAvgVAxgWQABALAMAPQAPARAQADQgyBAg+AoIgbAQIgEAbQgEAXgJAJIgJguQgtAUhnAiQAvDMAADVQAAB2hHCdQg/CMhpCNQhhCFhhBVQhiBZg1gBQgHABgGgCgANTwpQBXBkBRCZQBZCpA0CyQBIgZBLgfIAFgBIgHgcQgoidg4iAQhajQiQicIgOgQQgqBKhEBMg");
	this.shape_2.setTransform(700.3,-76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0B6C4").s().p("AGhVgQiSAliQAAQiWAAiRgjIgtAfQghATgoAAQiHAAidhhQiQhZi1i2IgCgCQALATALAfQANAhAAANQAAAhgTATQgSASghAAQgsAAhAgwQhTg/hRh9QhNh4hDijQg9hAgzhbQiPj7gMlGQghgIgbgmQgmg1AAhSQAAifA5i+QAVhHAbhGIgYgCQgzgEgOgIQgTgKAAgiQAAgHAGgcIADgOQADAEADARIAEAdQBQgmAZgYQANgMAKAAIARAAQAXgwAbgxQDamSEliqQBUgxE9idIApgUQhrlMgThrICbGoQETiGAaAAQAkAABXAcIB3ApIAIADQgNAJgKAAIghgEIgigFQhOAAg8ALQhXAQgbAkQBkgfAqAAQAMAAC4ASIA4AGQDxAJDHAkIA7ALQBojFAKgZQAOA/hPCqQCdAlBrA2QB+BBAZBFQAYBDhPAoQBbBVBQBWQA/ACAzA8QAgAlBFB6QAqA2AjBjQA6BbAuBcQCSEnAAD8QgEANgEAXQgJAqAABzQAAAFAXAwIAXAwQAABEgaA6QgtBUgmBKQg6BxhSBAQgnAegIAJQgTAWgFAgQgOBXiKBbQgzAihEAhIAEAJIgIgHQg9AfhMAeQirCLjLBVQhQAhhPAWIA9ERQBPFnAbCoQhflYhzm8gAmxQ2QBjAtBMAIQA0AFCZACIAaAAQhAgPgpgQIgxgSQgogLjDAAIgRAAgANnOKIgYAIIAHATIB5g3QhHAQghAMgAisMgQAlAUCcACQBKABBGgEIAAAAQAAABBqgMIgpikIg1AQQhwAjggAAQgsAAhDgQQhIgRh3gngAEeJ2IApCsICBgQQD4gdCngYIgfgnQg2Ajg+AAQgIAAgPgYQgLgTgHgUQhaAhhOAAQheAAgpgkQgRgTgJgHQgOgLgTAAQgMAAgXAEgAOrLTIAggFQgWgBgRgEIAHAKgATtH5QgTALggAlQhVBkh9A8QCKgSAvgOQApgMAJgXQAGgOAMgqQAVguBCg0IgPgBQgnAAgZAOgAKvKZQAEAEAEACIABAAIgDgIIgGACgAu6KcQizidhFhaQg5hMAAg5QAAgmAggVQAYgPAZAAQAGAAASANQAiAXAnAXIhdjFQgHARgXAMQgVALgTAAQguAAgagTQgVgOgQgiQgKgTgTgtQgVgsgdgfIgFBHQAAC9CgDcQBMBpBRBFQAAgMACgKIAAgBQALAHBVBXQAhATAjAOIAAAAgA4tgrQgFAHgFAFQANC3BaDWQAYA4AaA0QhJjtg5ktQgGAMgHAJgAKRHSIACgBIgBgBgALEGOIAYAgQAkgYAlgoQBjhoABiBIjFEJgAlrDaQBOA/BNAnQCgBQDJAIIAQgJQgiiOgYhqQhLARhUAAQiIAAh7gyIg4BkgADmGUIABADQA0gHA5geQBGgmA+hAIATgUIidjPQgXATgXAPQg6AmhDAXQASBFAnCfQAigcAagnQgYA9gaAugARuC3IgkBiIgDAEQAVgbAhh4QAliJgPg4QgDB+giBwgAVxkIQALBvAAA9QAAA/gGBeIgIB2QAAAIACAEIACAGQBbghASgdIACgFQAIgsAFgtIABgjQAAjCgohPQgMgYgigwQgmgzgYgsQALA8ALBqgAoLBCIAgAjQAyA0AyAqIBFhTQhcgohThFQhNg8gwhIQApBoA6BbgAF9AAIAZAXQAlAoBiB3QBEhmAAhoQAAgigag3QgfhBgjgEQhABshIBKgAGZpQQAEA5ADAGQAlA/BCBRQAmAvBMBaQCFChALBXIgCAIIBXhaQA8hGAAgjQAAgJgPgaIAAABQgSAshDBCQAhhRARg5IAGgVQgWgjghgwQhsicgHgQQgMgcgPgdIgPAKQgPAKgCAAQgWAAgZghQATgQAdgbQg2hchShsQhmiHh5h/IgIAMQhIBvgYAgIAeAaQAcAaAaAbQBFAvAXA7QAoAzAiA4IAAACIgGAAIgngYQAMArAFAogAD5kUQAAAygeBOQgjBagrAZQAaAFBIg4IgGgIIAKAEIAOgMQBbhMAdhDQgKgJg2gXQg2gXgLAAIABAWgAgvhSQBHAAA0iNQA6iggJj+QAsAYAxAJQAcAGAYAAQANAAAIgDQALgFAHgOQhKhcgTgSQgUgTgpgMQgmgMgmg9IgXglIgFgCQhKgghcgFIgSA4QgaBXgBAcIAAAJIgagiIgJgLIAYBIIgBAGQgTgkgXgxQgVAFglAfQgyAugXATQALAABCgFQBIgHAigFQAHJoBsAAgA29pxQh8ESAAEDIAAADQALgaAPg6IBGkNQAhh0AmhpIgXgGIgUAsgA5qjOQAABEAQAqIACADQABjLAhivQg0CYAABxgAlil1QghAuAAAhQAAAIAMAaQAQAhAYAdQBIBZBrAOQg8gWgwhPQgnhBAAgfQAAgiAZg8QAKgXAfg/QhLAngqA8gASOkVIAKAyQgBgbgGgbQgHgkgXhOIAbB2gAnMsZQhAARguAdQgLAdgHAlIg9CtQgeBYgKA5IAEAYQAKhwBUiUQBBhyBLhTIgJADgA0DoSIABAZIAWABIAGhTIgPgJQgOA1AAANgA1msaIAHACIAVgyIgcAwgAC6uyQAPgjBIiKQhGhHhLhEQAQAECLBFIATAKIAgg9QjChsjtAZQgbAKgbAMQg2AXg1AfQgtAbgHAEQA8A9AJAKQAgAlAAAXQAAAzgdAUQgKAGgRAFIAAAAQAkgIA9gSQA7gRA3gSQBoAACIBygAFKyJIBhAwIAFABQgPgpgWgsIgegUIgjA4gAIhzfIAIgSQgOgFgIAAIAAAAQgPAAAdAXgAjX3VIAfAZQAMAIAUgCQAKAADbgsgAmd4NIAYAFQAcgGBAgFIh0AGg");
	this.shape_3.setTransform(709.5,-65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C4C4C4").s().p("AgMACIAbgFIgRAEIgMADQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAABgBg");
	this.shape_4.setTransform(707.4,-243.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0B6C4").s().p("ACFbaQj+gHjHgrQkNg8jPiFQjuiYi6kPIgLAFQgEgEAAgVIAAgCQifjvh3lIQCbDfBlB9QAtA3ArAwIAEgFQhdiQhEjVQhZkagCkKIh3AAQgJgIgFgIQgKgOAAgdQAAg7AwgiQAigZAZAAIA4AAIALhHQAkjvAXg7QBBihB4iWQB3iVCah0QB8hcB+g6QkBBRjLC3Qk6EZiSHaQBzptCViiQAugyBXgrQBfgtAugrQBQhLBygrQBJgcAlgDQAEAAA4gRIBLgTQhhkaAAiHQAAgKADgTQACAAACgHIABgDQBGB9BjE6QDfgsDtgGIAfpQIAFAAQAGAQAAAeQAAB0gUF/IgCAvIAtgBQAnAAA1AWQAjgLArAAQCLAACmBJQA9AaA8AjIAWgiQALAUAAANIgCATQBTAzBSBBQFTEOCcFlQAWAyARCXQASClAUA/QAcBaAFAZQAYB2AACpQAABTgQBJQgRBKAAAIQAAAEANAbIANAaQAABkhrCLIAXAVQAohSAghiQBRj/AAkjQAAiOh/lWQhAishAiWQAAgfAJgNQCaEnBHDsQA4C4AACHQAADTgzDhQgmCqg9CZIA2AxIADADQgBACgKAAQgTAAgpgVQgPAkgRAjQgYAzgZAvQAVAJAAAkQAAAxgpAoQgiAghfA3IgdAhQiLCaifA5QgrAQg6AYICBEuQhMh6hXimIgWAKQhwAwgkAOQipBEiFAAIhWgCQAWDkACAoIgmkMgAB5XcQBcAMBjgIQChgOCLg7IgBgCIifAAIhlgBIiHAJQguAAg4gGIAHBFgAi8VwQCGBRCYAYIgKhGQgygGg4gMQiLgdgTAAIgMAMgAokV7Ig9gzQiDhui0iIQBNA2BNAzQA/AqAHADIACAAQghgviGh5IjFi0QAnBCAgAKQAIADACALQADANAEA4IgXgRQBMBpBKBRQArAdAuAcQBZA1B1A5IAAAAgATgO9QhEBFhaBNIhkBVQBLgWBtglQAUgQAVgVQBOhOA7hvIgjgWQgfAlgmAngAiKQyQARAMA6AtQA3AoAfAAQAFAAAbgFIgMhrIgXAAIgUAAIiKAPgABLQiIALBmIB4gXQCUgeBigVIgFgKIklgcQgmAHgpADgALMPSQBEApANAkQA6gDBYhHQBWhGAGgsQgOAJgSAAQgpgRgFAAQgmAAg6AnQg6AngcAAQgZAAgdgMQgtgSgCgjQgDAGgSAVIghAnIgHAFIAJgBQAiAAA8AkgAJ3LvQgRAWgSAVQAaAIAbALQgQgcAghPQgQAXgSAWgAIAG3QhZB8hhBLIAuBsQAuAHAoAHIAPgMQgMgGgHgJQgQgVAAgsQAAgfA4hIQAhgrBYhuIAhguIg8gzQggA+gsA+gAm2J0IgVAxQAsBOA8AAQAgABBsgVQg/gRhQhKQgegcgfgiIgTAugACpLVQBIAGA/AHIgahDQg1Aig4AUgANnKaQAIgJAdgXQAUgRAMgNIgZgUIgsBSgAnuJRIAbhFQg0hBg1hTIgJgTQAmBbAxCRgAO+HzIAGAEIAMALQAAgTgGgWIgMAagAr5gMIhOAdIAKBEQAiDDBECuIADgBIAAgBIAHixQAAgTgSh7QgRh5AAgHIABgWIgKAFgAM9FSIgBACIgJAjIARAPIAYgqQAwhYAAgjQAAgJgIgQQgVAhgyBpgAKPBnQAAAtgUA8IBIBBQBViaAAiFQAAhig6hNQhDhYiJg5QB9FIAABtgAQ5EBQAEgGABgfIAAgMQgIAcADAVgAiMA4QAeA5BEAKQgPAagKAUIgHALQCUAJBHgzQAZg5AIhBQgQgegaAAQgJgBgJAEQgWAIg5AcQA7ihAHgdQAIggAEgtIgIgLQgOgWAAghIACggQANAIALAKIABgmQAAg/gHg2QgDgbgNhLQBQARCKAaQByAYBQAoQBTAoBYBNIgVglQhUiQhahIQhNg+hJgBQgxBFgHAMQgGgDgCgDQgCgDgBgrQgDgoBJiCQgzgDg5AAQgNAAg6AIQhCAIghADQByANAwAYQApAWAAAiQAAArgeASQgSAKgZAAQhoAAgvglQgYgUgPgGQgcgLg1AAQg6gBhVAeQgaAJgZAKIARA7IgBABIgYg5Qg4AYg0AfQjDBzAEB0IgFARQAfgzCghcQCshjA9AWQgVEZgRA8QgFASgNAWQgNAXgKAfQAggLAYgPQANCgAfA7gA0cBfQACgZAAgeIgDAAgAO2gvQgXjQhdiQIg9hXQgagmAAgZQAAgjAHgJQAGgGAcAAQAgAAATAZQALAOARAbIgEgcQgFgkgDglQhBgQhBgjQhGgogngTQhQgohtgRIgiAxQAPgCARACQBdAJBiBqQBpBxA/CzQAYBCAQBGQA+BIBABaIAAAAgAsnlnQg0A9AAAkQAABRAHBSIAlgKQAzgNAhgTQAHggAJgiQAMg5AXhZQAchoASgpQhuBCg/BJgARekjIAlBcQAJhvg/iFQgfhCgigwQAyCBAgCJgAzmkPIALgWIAOgfIAEgOQgNAagQApgAyon5QASAJAXgRQAMgqAOgnIhDBZgAqqqNQgdAQgOALIgOAKQAYgLAjgUQApgWALgJQgOABgoAYgAOsr+IAOgEIgPgTIgJAAQAGAMAEALgAnlsQQAHABAegGQAjgHAHgGgAprtiQAVgCBNgaQBEgXA3gPIgbhEQhNAwh1BWgAlWwWQgRAIgVALIAYBUIADgBQCVgkCggGIAEhqQgTgEgPABQieAAhuAxgAJFwWIC3BQQglhHhUhBIgXgRQgRAigWAngADXvPQhCglg6gcQhEgigugOIgGBmQB2gEB+APIAAAAgAH6w3IAzhQQgrgYgwgUQgfgNgdgJQArAuAAAiIgCAZIgCACQgXgGhIgWgAlFytQAuAAAkgPQgbgChnANIgQADIASgBIAuACg");
	this.shape_5.setTransform(711,-88.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B0B6C4").s().p("AjfcvQgDgTAAgWQAAghAMh8QggAIgNABQkQAAkAjXQjAihiokKQg+hIg2hWQhxixg9jWQgbhcgPhbQhAjWAAh+QAAjLA6jxQBZlzDHkSQAQgWAqgVIA0gWQg6hWAAgnQAAgJAJg2QAzBDBNBSQA+goANg2QAdAeAUALQAGADAAALQAAAKhQBSIAdAeQBahkBdhSQDsjODWgtQgliRAAgtQAAgbALgOIA4DhQAsgHAsAAQCCABAQAgIAEAWQACAKARAAQAHAACfgWQBmgPBQgFQiDg6iWgzQC6hrDnBPQDSBKDIDRIAoArIA6g2IABAaQAAAqgKArQAkAuAiAwIAMgLQAwgmBTgGQAngDAmAnQAVAXBVBzQA/ByA7EOQA0DuAABjQAADThIFyIgyDyQgWBsAAAVQAAAIAPAnQAPAnAAAaQAAD/hwCaQh0Cej/BTIjCAbQiwAZgnAbQhZA9g9AZIgZAIIAIBDIgLhCQgfAJgcAAQgcAAhHgQIgbgHQg9AzhzA2QhQAlhTAbIgeAJIgUDMgApfVMQDkCfCxAFIAQiUIhkgPQkUgmhLgMQgYgEgYgFQAnAeAnAcgAi2XwQApgEBrgmQA6gWAygYIiMgmQghgIhEgLIgPCRgAMGSlQCMgMCWhyQCeh4ARiAIgFAMQhYDCh+BHQgGgGgRggIgPgbQilB/grAjgAPrP0IgHAFQAcgEAtg1IhCA0gAuQFfQgUAUgnAaQDIDsCQBhQAjAYAqAWQhQhYhIh6QgTghgRghQgqgkgggoQgigugNgPQgUgYgTAAIgOAMgAiqL4QAnAKAIAAIADAAIABgHIhkgTQALAFAmALgAhmMAIAEgBIgEgBIAAACgAD7LFQAaALAhASQAuAUBBABQCBgBBlhUQBMhAA0hnQhNA/gjAZQg5ArgwAWQhwAzjIgJIABAHgAKYB9IgxB8QgdA7g9A6QhGBCiUBlIAhABQBMgBBSgjQBSgkBEhAQCbiQAAi7QAAgvgNgdQgGgPgYgkQg7BdglBcgARtIIIAUgmQASgkACgMgAj+GEQByBMAyAAIADAAIAJhSQh+gRg2hNIgDgEIgigMQgdgMhDgiQg7gegqgPIgMgFQB7CAB/BUgAhHHQQDvgJDOjqQBUhgA0hsQAyhkAAhFQAAhvhvhNQgogdhCgeIgDgBQAdA0AOBGIALALQBPBUAABVQAAAyghBEQghBGg2A+QgjBRhAAxQgkAbhdAnQhdAngdAAQgjAAghgDIgGBQgArcBvIAAAJQAABeBdBiQBfBnB3AVQgggjgegrQgqg6h9jNQgkAJgqAHgAyqurQk8GfAAHOQAAA+AMBHIAAgfQAAg0AdilIAdijIgEgXQgEgTAAgFQAAhKCZjjQBOh2BhiAQA+hWA/hNIgcgjIgCgDQhiBnhHBdgAh6pDQgWBcAAB+QAACSApBoQAwBzBQAAQA7AAAlhzQAchVAmjtIBIA0QhehkgbgoQAZgCAXADQgKgagLglQgmiIgDgGQBBAIBlAeQgHgYAOgjQAQglAsg5QhfhHiaAAQhRAAh2BQQh9BcgvAbIgOALQAkgEBPgNIBSgMQgeBigMA1gArUAAIAMAAIgLgSIgBASgAOfhNQARAlAWgDQAEgKADhBIgNgDQgcACgSgBQgDALAQAggAoMijQAIgKAHgiQAFgYABgMIgBgJIgUBZgAleksQgHAsAPA8QAZgQBFg5IhGhPQgZAFgHArgAUpmkIgEAbIARAnIAAABIAKAAQAEg3AAgQIAAgMIgbAQgAJPthQCoEaAkCTQAHAbACAbIArgJQBCgNBEgTQgJgtgTg3Qglhmg5hYQhAhihGgyQgugggsgIIgsAkgATmolIALAcIAFgBIgHgcgAwTrEQgpA4gjBWQAKAFAmAEQAoAHAWAAQAPAAEPjJIAZgSIhchiQg6g9gyg4QgcAlAAAiQAqA3AAACQAAAegOAbIgTAeIgBABQgLgOgIgeQhBAxgpA3gAFFqkQBWAbBYAlQgZhSgkg6Qg2Amg7AmgARxxUQAhA8AcA/QAiBKAZBIIAKANIADAGQgWhtgfhQQgmhggngRIgDAOgAo3ydQiSAwhfBPIDWDQQEAi8Cvh+IgVhBIiogDQhwAMhnAjgAiayPIAxgjQglgOgagIg");
	this.shape_6.setTransform(704.5,-76.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(537,-281.5,345,432.9);


(lib.MIX_front_nose = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E939A").s().p("Ag4AmIAAgBQgFgRAJgaQAMglAJgOQATAIAWAAQAPAAANgEQACADgBAEQgDAMAXBUQgUAIgeAAIgEAAQgoAAgVgUg");
	this.shape.setTransform(-1.1,6.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AhDA4IgBAAQgVgWgGgPQgGgPABgKIAGgeIAHgoIAGAHQAQAVAXAJQATAIAXAAQAOAAANgDQAdgIAVgXIAGgHQAKA3AIAZQgEAcggAXQgIAGgJADQgVAIgcABIgEAAQgpAAgVgVg");
	this.shape_1.setTransform(0,4.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888D91").s().p("AhAAlQgOgTABgQQAGgpAdgPQAQgIAagCQBDADALA9IAAAAIAAACQgBATgLAPQgVAdgwAAQgpAAgUgcgAgLggQgYAIABAbQABAbAhABIAEABQARAAAKgLIADgDQAKgKgBgIQgBgigkAAIgBAAQgIAAgIACgAgKgCQADgNAHAAQAYAAAAAPQAAALgWAAQgMAAAAgNg");
	this.shape_2.setTransform(-0.2,-7.4);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJCRQgggSgNgdQgPggAGgoIAWhmQAHgeAPgSQAUgaApgHQANgDAJAAQA2AAAaAkQAWAfACAUIAaB+QAAAHgDAOQgEATgTAXQgdAkgvAGQgTADgPAAQgpAAgagQg");
	this.shape_3.setTransform(0.1,-0.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.9,-16.3,26.1,32.3);


(lib.MIX_front_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C1247").s().p("AB7hQIAXgBIAEBBQAFBWAAAhIAAAFIgBAAIgcABQAAh+gDg/gAijBqIgagCQgDgaAAgpQgBguADhLIAYABQAAAkACAtIADBJIABAjIgDAAgAF4hTIAAgUIAEAAIAWgDQAAAUgCAaQAFAwAAAzIAAAqIgWADIgEABgAl5BUIgWgEIgDAAQgDgjAChBQgBg1ABgjIAHABIARADIADBGQACA5ABA9IgEAAg");
	this.shape.setTransform(0.7,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC289D").s().p("ACIhQIAXgBIADAAIANgBQBogFBugQIAAAUIADCoQhoAOhqAHIgOACIgBAAIgcABQAAh+gDg/gAloBUIgEAAIgWgEIgDAAQgDgjAChBQgBg1ABgjIAHABIARADIAGAAQBeAOBZAGQgDBLABAuQAAApADAaQhdgIhbgMg");
	this.shape_1.setTransform(-0.5,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE33CA").s().p("AhyBeIgNgBIgCAAIgagCQgDgaAAgqQgBgtADhLIAYABIAKABIANAAQBwALCagJQADA/AAB+QguAChJAAQhogBgzgDg");
	this.shape_2.setTransform(-2.6,2.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5248B").s().p("AF1g1IAAgUIAEAAIAWgEIAAAAIAdgEQBegQAPgEQAZgGALgHQgEAdgFA+QgGBSAAAZQhNAPhPAMIgBAAIgVADIgFABgAouBTQAAgZgGhSIgIhXIAjAKQAPADBeAQIAWAEQgBAjABAzQgCBDADAjQhNgMhMgPg");
	this.shape_3.setTransform(1,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE33CA").s().p("AiXB7IgNAAIgCAAIgagCQhdgIhcgNIgDAAIgWgDIgDgBQhNgLhMgPQAAgZgGhSIgIhXIAjAJQAPAEBeAQIAWAEIAHAAIARADIAFABQBeANBaAGIAYACIAKAAIANABQByAKCYgIIAXgBIACAAIAOgBQBogGBugPIAEgBIAWgDIAAAAIAdgEQBegRAPgDQAZgGALgHQgEAdgFA9QgGBTAAAYQhNAQhPALIgBAAIgVADIgFABQhnAOhqAIIgOABIgBAAIgcABQguADhJAAQhogBgzgEg");
	this.shape_4.setTransform(1,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC289D").s().p("AgBAAIADAAIgDAAIAAAAg");
	this.shape_5.setTransform(-37,-9.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE33CA").s().p("AiHBqIgMgBIgDAAIgagCQhdgIhbgMIgEgBIgWgDIgDgBQgDgiAChBQgBg1ABgjIAHABIARACIAAABIAGAAQBeANBZAHIAYABIALAAIANABQBxALCYgJIAXgBIADAAIANgBQBogFBugQIAAAUIADCoQhoAOhqAHIgOABIgBAAIgcACQgtAChKAAQhogBgzgDg");
	this.shape_6.setTransform(-0.5,1.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5248B").s().p("AiXB7IgNAAIgCAAIgagCQhdgIhcgNIgDAAIgWgDIgDgBQhNgLhMgPQAAgZgGhSIgIhXIAjAJQAPAEBeAQIAWAEIAHAAIARADIAFABQBeANBaAGIAYACIAKAAIANABQByAKCYgIIAXgBIACAAIAOgBQBogGBugPIAEgBIAWgDIAAAAIAdgEQBegRAPgDQAZgGALgHQgEAdgFA9QgGBTAAAYQhNAQhPALIgBAAIgVADIgFABQhnAOhqAIIgOABIgBAAIgcABQguADhJAAQhogBgzgEg");
	this.shape_7.setTransform(1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah/CXIgcgBIgOgCIgBAAIgUgCQhegIhfgOIgEAAIgUgEIAAAAIhGgMQgrgIhJgQQgDgogBhHIgDh3QAEgEADgBIAKgCIgBAAIAFAAQB1AYAzAJIAPACIAFABIAGABIALACQAyAIA0AGIBJAGIAPABIAnACIANABQAvABAyAAQBOAABRgEIAKgBIAZgCIATgBQBfgHBhgOIASgDIABAAIAKgCIABAAQBvgRBJgRQAKAIgBAbIgFBlQgDBGgCAQQgDAQgJAGQg7ANgwAJIhFAMIgBAAIgUADIgFABQhpAPhoAJIgOABIgEAAIgYACIgBABQgLADhxACQh8gEAAgDg");
	this.shape_8.setTransform(1.2,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.4,-16.1,119.4,31.7);


(lib.MIX_front_lashes_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag2BrQgPgRgLgYQADABATANQASAPAIAHQAYAQAjADQAbABAAAJQABAHgFACQgFACgUAAIgEAAQgrAAgggjgAgOBDIglggQgEgFgKgcQgKgagBgIQAFgRAFgGQAAACgBAGQAAAEAOAeQAPAfAHAGIASAQQALAJAQAJIAiAMQASAGAAAKQABAKgOAAIgCAAQgaAAgngdgAgJgcQgcgqgBgcQAAgMADgMQADgPAGgEIAAAEQABAmAZAqQAfAzAyAOQgEAFgGAEIgHACIgCAAQgoAAgfgvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.1,-14.2,16.4,28.6);


(lib.MIX_front_lashes_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag8CIQgDgFgBgGIAVABQAUACAjgSIAcgSQAYgPAKgDIACgCIgrAyQgXASghAAQgLAAgagEgAhFBaIgBgDQgCgCgFAAQgGAAAsgQQAqgQAOgNQAOgNAVgdQAVgiAAgKIABgEQAGAPABAJQAAAggqAoQgqAtgxAAQgKAAgHgBgAhGAMIgJgMQAfgHAtgtQAygzgGgkQADADADALQACALAAAHQAAA0gsAmQghAegZABQgKAAgHgCg");
	this.shape.setTransform(0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-14,16.2,28.1);


(lib.MIX_front_head = function() {
	this.initialize();

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5F669A").s().p("Ah4CcQgFgMgEgNIgEgUQgGgeABglQAAhEAshSQAthRBrgZIAXgBQAgAAAbAIIggAnQg7BLgeAzQgcAxgwCXIgQA2QgegVgRglg");
	this.shape.setTransform(-54.2,-16.5);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777FC7").s().p("AHdDpQhdAAgxhFQgpg5gChXQgDhIAmhLQAXgvAugZQAsgZAxACQApACAXALQANAGANALIABABIAAAAIADADIADAEQAWAaAUAcIALAPIAJAPQAIAQAHAYQAOAngBAbQAAA1gKAhQgEAMgIAQIgKARQgLATgSAXQgpA2hhAAIAAAAgAnzDiQhEAAgrgfQgegVgRglQgFgMgEgNIgEgUQgFgeAAglQAAhEAthSQAshRBtgZIAXgBQAgAAAbAIQBPAYAiBhQAXBCgCBJQAAANgLAbQgPAjgYAeQhHBVh1AAIAAAAg");
	this.shape_1.setTransform(-0.5,-14.6);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#525354").s().p("AHcEVQhdAAgxhFQgpg5gChYQgDhIAmhLQAXguAugaQAsgYAxACQApABAXALQANAHANALIABAAIAAABIADADIADADQAWAbAUAcIALAOIAJAPQAIARAHAXQAOAlgBAdQAAA2gKAgQgEANgIAQQAogJAzgRIABgBIAFAPIgBABQgNAGgaAIQglALgeACQgLATgSAXQgpA3hhAAIAAAAgAn0EOQhEAAgrgfQgegWgRglQgFgLgEgOIgdgIQgogLgLgKIgCgCIAGgPIACABQAnAQAfAJQgFgdAAglQAAhFAthRQAshSBtgZIAXgBQAgAAAbAIQBPAZAiBhQAXA/gCBLQAAAOgLAbQgPAjgYAdQhHBWh1AAIAAAAgAK4DAQAAgEAEgGQAKgHAKAEIADAHQACAGgBADQgCAIgPAAQgHgCgEgJgArICuQgBgFABgFQAKgHAMAEQAIAIAAAEQgDAIgIACQgRgDgCgGgAAKA2IAAgjIAAhiQgBg3AIiOIAQAAIgCAhQgFBEAACHIABDXQgDADgEABQgJgygBhLgAAyiJQACgKAPgGQANACABALQACAKgRAGIgEAAQgJAAgDgNgAAzkJQAJgLANAEQACgCABAIQABAIgEAGQgGADgHACQgNgGAEgMg");
	this.shape_2.setTransform(-0.4,-19);

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E939A").s().p("AiwGzIhJgYQABgqgFgnQgIgxgQgTQAGg8ANg/QANg/ARg0QALAKAnAMIAeAHQAEAOAFALQARAlAeAWQgiB+gFCBIgDA4IgqgNgAjBA+QgBAFABAGQABAFASAEQAIgCADgJQAAgEgIgIIgJgBQgGAAgHAEgAjeAIQAQgtAVglQBHiEBdhZQBUhSA1gcQAxgaAmgQQAZANAyAPQgnAZgpAiQglAegoAwQgbgJggAAIgXABQhrAagtBRQgsBSAABGQgBAjAGAdQgfgJgngQg");
	this.shape_3.setTransform(-52.3,-8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686C72").s().p("AltIYIABgZIADgmQAoAOBMATIgFBNQhBgXgygYgADCneIgHgCQgegKAMgOQAMgOAjgUQA6ghBcgLQgtAKgjAdQgkAeggAoIgBACIgXgHg");
	this.shape_4.setTransform(-41.3,-12.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#505358").s().p("AgdAOIgJgEIAAAAIgEgBQAEgMAGgLIAFgFQAIgGATgEIAAAAIANAGIACABIAcAIQgUAWAFAWQgjgJgWgHg");
	this.shape_5.setTransform(-25.8,-56.2);

	// Layer 3
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(-79.6,44.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BC329C").s().p("AgWAXIgBgCQgHgQAPgOQAGgIAJgDQAJgGAPABIABAAIABAHQgYAAgLARQgGAHgCAHIgCAIIAAAFIgDgDg");
	this.shape_7.setTransform(-30,-59);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#606366").s().p("AsrHzIABiAIAAgFIAAgBIAAgBIAAgBIABgxIAAgNIABgGIAAgFIAAgBQAEAMADARQAEARACAWIAAACIABAUIAAABIABAYIgBAcIgCAxIgCAaIgNgIgAMaHWIgDgmIgCgfQgBgbABgNQABgfAGgYIABgHQAEgQACAEQAMCggDAtQgNAIgDAAIgCgegABmmjIgDgSIgGgXQBHgFBGgTIAmgMIAagKIAHAFQANAHADASIAAANIgPAHIgjAOQhNAdhfAHQABgHACgGgAjImyIgYgGQgkgKgXgHIgJgEIAAAAIgDgBQADgOAGgKIAFgFQAIgHATgEIAAAAIAPAHIACAAIAcAJIAQAEIAdAHIAIACQA3ALBKADQgFAJgBARIAAANIADAOQhOgHhcgVg");
	this.shape_8.setTransform(-0.4,-9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE33CA").s().p("AiKA5IgMAAIgKgBIgNAAQgBAAgBAAQAAAAgBAAQAAgBgBAAQAAgBAAgBIgEgQIAAgJQACgMAIgOIAAAAIATAAIAVABIAGAAIAEAAIAMgBIAAABIAKAAQAGAMACAKIACALQAAARgEADQgGABgIgBIgcABIgDAAgACXg3QAOgFANAXIAEAMQgCAFgGAFQAAgbgXgNg");
	this.shape_9.setTransform(16.6,-55.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#83888C").s().p("ACJJFQAAgKgGgZIAAgCQC5gLEdhBQBtgYA4gWIACAbQACAWAEAZQgOAIgTAIQglARg4ASQg3AThEATQjFAvjDAJQAEgoAAgUgApUIoIg+gVQhCgYgxgXIABgZIADgnQAoAOBLAUIBJARQB3AYBTAOQBSAOCkASIgBAFQgGAZAAAKQAAAjACAUQjngLjjhJgAgsn2QglgDg0gIIgCgBQgfgFgXgFIgXgGIgHgDQgfgKANgOQAMgOAjgUQA6ggBbgMQAfgEAhgBIAAA7IgBAmIgBAdIgBANIgVAAIgrgBg");
	this.shape_10.setTransform(-0.5,-6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BBC1C7").s().p("AggKAIhLgEQgGgzAAgIIAEgdIAAgHQBQADBcAAIAugBIABAnQAAAWgHAlQgMACgZAAQglAAg9gDgAAEH+QkAgCk0g9IgGgBIgFgBQgkgGgsgNIgqgNIhJgXQABgqgGgoQgHgwgQgUQAGg7ANg/QANg/ARg0IgCgCIAGgNIABABQARgvAUgmQBHiDBehZQBWhTA0gbQAygbAlgPQAZAMAzAQIAWAHQB1AiByAAIADAAIAPAAQCDgCBYgZQA5gQAfgTQCLBLBkBzIAAAAIABABIACADIADADQAWAbAUAcIALAOIAKAPQASAdARAfQAlBDAZBEIABgBIAEAPIAAABQAhBhALBnQgTARgGA3QgFApABAjIAAAJQibA3ifAdQjVAnjgAAIgLAAgAAun5IAAgKIgBgcIAAg2IAAgtQBNAEA1AUQA1ATAgAWQAdAUgCAGQgBAFghANIgPAFQggAKg3AHIgDABQgxAGggAAIgVgBg");
	this.shape_11.setTransform(-0.6,-6.7);

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgBKfQiAAAhjgMQhkgMi3goQirgniDhMIgIgEQgBABgMgIQgCgegBg4IgBgpQgBkJBtjSQB4jtD3h9IAZgLQgKgXAEgQQALgjArgHIAagCQAbgbBPgiQBUgjB6ADQCLACCIBjQAagFAMAMQATASgCAfQgBAOgNAOQDyB5BrDbQBrDYAOC6QACAiAAAuIABAiQADBPgDAfIgNAMIgBACQh3BHjCApQjGAqheALQhaALh6AAIgHAAgAsVH7IAAAAIABABIgBgBg");
	this.shape_12.setTransform(-0.6,-6.1);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-84.5,-73.3,167.9,134.4);


(lib.MIX_front_eyesR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBEC1").s().p("AAZCJIgCgBQhJgMgshBQgpg/APhQQAGgcALgZIATgBQgIAcgCArQgCA0AiA9QAjA/BHARQArAIAmgLQgdAOggACIgCAAIgBAAIgHAAQgOAAgPgCg");
	this.shape.setTransform(-56.6,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("Ah7ApIgbAAIALgdQAMgLANgJQBBgvBKAMQBMALAqBAIAIAOIgCABQg/gGjRAAgABBAVQgCAMAMAAQAMAAAAgMQAAgEgBgDQgDgFgIAAQgLAAABAMgAh2ASQAAAMAMAAQALAAAAgMIgBgGQgCgFgIAAQgMAAAAALg");
	this.shape_1.setTransform(-49.3,-14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686C72").s().p("AAZCjIgCAAQhJgMgshBQgQgZgHgbIACAAQAKACAbABQAGARAKASQAjBABHARQArAIAmgLQgdANggACIgCAAIgBAAIgHABQgOAAgPgDgAh6AKQgFgfAHgkQAMhAArgsQgIAUgJAZQgJAdgDAzQgBAaAIAaIgjgCg");
	this.shape_2.setTransform(-56.6,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 9
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiCTIgCgBQhMgMgrhBQgqhBAQhOQAFgdAMgYIASgBIAnAAQCCAICZAAQARAwgLA4QgQBOhBAxIgFADIgSAMIgOAHQgeAOggACIgBAAIgBAAIgGAAQgOAAgOgCgACiiTIABgBIABACIgCgBg");
	this.shape_3.setTransform(-50.5,4.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83888C").s().p("Ah1ApIgbAAIgMAAQAKgPAOgOQALgLANgJQBBgvBKAMQBMALAqBAIAIAOIgBABQg/gGjSAAgABHAVQgCAMANAAQAMAAAAgMQAAgEgCgDQgDgFgHAAQgLAAAAAMgAhwASQAAAMAMAAQALAAAAgMIgBgGQgCgFgIAAQgMAAAAALg");
	this.shape_4.setTransform(-49.9,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83888C").s().p("AgiDBIgCAAQhMgMgrhBQgQgZgIgbIADAAQAKACAaABQAoACBNABQCDACBBgIQgSA2g2AnIgFAEIgSAMIgOAHQgeANggACIgBAAIgBAAIgGAAQgOAAgOgCgAiUAqIgjgCQgFghAHgiQAMhAArgsQALgLANgKQBBgwBKAMQBMAMAqBBQArBBgQBPIgCAHIg4AFQhJAFhIAAQg/AAhAgEgABGAPQgBAMAMAAQAMAAAAgMQAAgEgBgDQgDgFgIAAQgLAAAAAMgAhwAMQAAAMAMAAQALAAAAgMIgBgGQgDgFgHAAQgMAAAAALg");
	this.shape_5.setTransform(-50.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgqDgQgtgHgigXQgKgFgJgJQgWgTgSgbQgxhMAThaQAShdBKg5QBMg3BVAOQBYAOAxBMQAOAVAJAXIACAFQATA3gMA+QgTBdhKA5Qg8AshCAAQgRAAgSgDg");
	this.shape_6.setTransform(-50.7,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgqDgQgtgHgigXQgKgFgJgJQgWgTgSgbQgxhMAThaQAShdBKg5QBMg3BVAOQBYAOAxBMQAyBLgSBbQgTBdhKA5Qg8AshCAAQgRAAgSgDg");
	this.shape_7.setTransform(-50.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.MIX_front_eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBEC1").s().p("Ag2BnQhBgwgPhNQgNhAAYg1IAOgBIgDAYQgJBVBCBJQBBBKBIAEQAiABAXgCIABAAIgQAHIgQAGIgCABIgVAFIgCAAIgBAAQgQADgOAAQg4AAgygmg");
	this.shape.setTransform(46.1,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686C72").s().p("Ag2B3Qg0gmgUg6IABABIAEAAQAKACAhACQAKAPANAPQBBBLBIADQAiACAXgDIABAAIgQAIIgQAGIgCAAIgVAFIgCAAIgBABQgQACgOAAQg4AAgygmgAiEAAIgCgGQgQhQAqhAIAEgGQgEAXgEAhQgGA3AZAwg");
	this.shape_1.setTransform(46.1,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83888C").s().p("AiSAnIACgGIAFgIQAlgrAkgJIACgBIAFgBIAFgCIAGgCIADAAIACgBIAFgBIADAAIADgBQBKgMBAAwQAYAQARAWQgpgBgxACIAAgCQhUAChFAAIgyAAgAhgATIACAHQADAGAHAAQAMAAAAgNQAAgLgMAAQgMAAAAALgABBARIABAGQACAFAIAAQAMAAAAgMQABgMgNAAQgKAAgBANg");
	this.shape_2.setTransform(50.2,-15.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(47,50,59,0.314)").s().p("AAAADIgBAAIABgBIAAgCIACgCIgCAFIAAAAIAAAAg");
	this.shape_3.setTransform(35.4,-11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhjB1QhBgwgPhNQgNhAAYg1IDzgDQA+gDAUAAQARAeAGAkQAQBNgqBAIgFAHIgBABIgmAnIgQAKIABAAIgQAHIgQAGIgCABIgVAFIgCAAIgBAAQgPADgPAAQg4AAgygmgAAziYIACgCIAAACIgCAAg");
	this.shape_4.setTransform(50.6,3.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83888C").s().p("AhjCcQgzgmgVg7IABABIAEABQAKACAhACIADAAIAoACQBcAEBPgIQBQgHAJgCQgHAggTAdIgCADIgBABIgpAqIgQALIABAAIgQAHIgQAGIgCAAIgVAGIgCAAIgBAAQgPACgPAAQg4AAgyglgAhqApIhHgFIgCgIQgQhNAqhBIAEgGQApg7BIgLQBKgMA/AvQBAAxAPBPQAGAbgCAbIgtAFQhMAKhgAAIhJgBgAhQAHIACAHQADAGAHAAQALAAAAgNQAAgJgLAAQgMAAAAAJgABRAFIABAGQACAGAIgBQALAAAAgMQABgKgMAAQgLAAAAALg");
	this.shape_5.setTransform(50.6,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ah2C3QhKg5gThdQgShbAyhLQAxhMBYgOQBVgOBMA4QBKA5ASBcQATBbgxBMQgyBLhYAOQgSADgRAAQhCAAg8gsgABcCrIABAAIAPgJIgQAJg");
	this.shape_6.setTransform(50.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah2C3QhCgzgWhQIgBgDIgEgQQgShbAyhLQAxhMBYgOQBVgOBMA4QBKA5ASBcQATBbgxBMQgyBLhYAOQgSADgRAAQhCAAg8gsgABcCrIABAAIAQgKIgRAKg");
	this.shape_7.setTransform(50.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.MIX_front_brow_R = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909499").s().p("AiKAQQgFgegBgIIABAAIAvgJQAOBMAAAMIguAHQgFgSgFgegAhPALQgCgOgIgdIAugGIAbgCQAZgCgBgDQAIAzAOAAQBLgKAigKIAFAZIjbAvIgEgvgAAWgvIBsgRIAHAoQgbAHhTAKQgCgVgDgTg");
	this.shape.setTransform(-0.2,-0.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AikgXIgEgTQAcgKB2gRQCQgUANAAQAHAAAIAJQAIA1ALAyQgRAJhAAMQicAdhHARQgOg6gLg3g");
	this.shape_1.setTransform(-0.3,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.3,-8.9,33.9,18.1);


(lib.MIX_front_brow_L = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909499").s().p("ABOA/QAEgLAJgmQAIghAAgFIAuANIgKAwQgGAhgDADgAiQAAIAIgYQBLAcAgAAQAJAAAGgFQAKgMAAggIBgAUQgFAKgHAaQgHAegCAWQh5gchegjgAiGgiIAKgmQALAFAbAGIBFANIgJAnQg1gLg3gOg");
	this.shape.setTransform(0.2,-0.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyA2QhygfABgQQAAgOAahbQEfBCAIAEIAGADQgBACAAAPQAAAPgaBcQhLgNhwggg");
	this.shape_1.setTransform(0.2,-0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.2,-10.5,33,20);


(lib.MIX_43_eyeR_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBEC1").s().p("AgmCbIgHgIIgBgBIgDgDIgEgFQgkgqgKg0QgDgPgBgQIAAgYIABgDIACgWQAMhHA3gxQA6g2BPACQgXAIgiAZQgnAdgJASQgDAEgQAkQgTAqAAAJIgEAlQAABoBCA+QARARAdARIANAJQhIgGgwgwgAgXCRIgBAAIgBAAIACAAg");
	this.shape.setTransform(-54.7,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AhpAtIglAAIAEgKQAEgCABgDIABgCIABgFQAMgQAkgZQAigaAXgHIABAAIAHAAQBSAGA4A/QAMAPAKAQIABADQg9gHi7AAgAAhAXQgCAMAOABQANgBAAgMIgCgEQgEgGgHAAQgMAAAAAKg");
	this.shape_1.setTransform(-41.5,-11.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDBEC1").s().p("AgaBbIgIgIIgBgBIgDgDIgEgFQgkgqgKgyQgDgPgBgQIABgaIAAgDIACgWQAEgVAHgUIAbAAIAngDQgPAjAAAIIgFAnQAABmBCA+QARARAdARIANAJQhIgGgvgwgAgOBRIACAAIgBAAg");
	this.shape_2.setTransform(-55.8,10.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686C72").s().p("AgmCbIgHgIIgBgBIgDgDIgEgFQgZgdgNgiIA7AEQARAzAmAkQARARAdARIANAJQhIgGgwgwgAgXCRIgBAAIgBAAIACAAgAhjAtIAAgBQgDgPgBgQIAAgYIABgDIACgWQAMhHA3gxQA6g2BPACQgXAIgiAZQgnAdgJASQgDAEgQAkQgTAqAAAJIgEAlQAAAaAEAYQgxgDgLgCg");
	this.shape_3.setTransform(-54.7,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBEC1").s().p("AgaA7IgIgHIgBgCIgDgDIgEgEQgkgrgKgxQgDgPgBgQIAAgHIAggMIAegNIgCASQAABnBCA+QARAQAdASIANAIQhIgFgvgxgAgOAyIACAAIgBgBg");
	this.shape_4.setTransform(-55.8,13.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#686C72").s().p("AhlBPQAMhGA3gvQA6g3BPADQgXAHgiAaQgnAdgJARQgDAEgQAjIgPAkIgKAEIgzAVIgDACIgCAAIABgMgAgxAgQgOAFAFAMQAEANAOgFQANgFgFgPIgDgEQgDgCgEAAIgHABg");
	this.shape_5.setTransform(-54.6,-7.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBEC1").s().p("AgbAnIgIgIIgBgBIgDgDIgDgFQglgogKgzIgCgRIABAAQAYgFAKAAIAYgBQAGBZA7A1QASARAcARIANAJQhHgFgwgxgAgOAdIABAAIAAAAg");
	this.shape_6.setTransform(-55.7,15.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#686C72").s().p("AhmBZIAAgDIACgWQAEgVAHgUIAAAAQAfg3AZgWQAOgNAQgKQAvgeA8ABQgXAIgiAZQgnAegJARQgDAEgQAiQgTAqABAJIgFAiIggADIgCAAQgRADgJAEIABgSg");
	this.shape_7.setTransform(-54.7,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgNDRIgBAAIgBAAQhHgGgygxIgIgHIgBgBIgDgDIgDgFQglgqgKg0QgDgPgBgQIABgYIAAgDIADgWQAMhHA2gxQA8g2BOACIAAAAIAIABQBUAFA3BBQAMAPAKAQQAOAYAHAbQAHAaAAAcIAAAOIgBAKQgJBQg8A3Qg6AzhLAAIgNAAg");
	this.shape_8.setTransform(-44.8,4.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgNCSIgBAAIgBAAQhHgFgygxIgIgHIgBgCIgDgDIgDgEQglgrgKgxQgDgPgBgQIABgbIAAgCIADgXQADgVAIgTIAaAAIAngDQBTgFCMABQAwABAnADQAFAMADANQAHAaAAAcIAAAQIgBAKQgJBOg8A2Qg6A0hLAAIgNgBg");
	this.shape_9.setTransform(-44.8,10.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#83888C").s().p("AhJAtIglAAQgoABgYACQAQgbAYgVQA9g1BNACIABAAIAHABQBUAFA4A/QAMAPAJAQIACADQg9gHi7AAgAiAAYQgBANAPAAQAFAAADgCQADgCACgDIABgBIABgFIAAgCIAAgBIgCgFQgDgFgKAAQgOAAAAANgABBAYQgCAMANAAQAOAAAAgMIgCgFQgEgGgIAAQgLAAAAALg");
	this.shape_10.setTransform(-44.7,-11.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83888C").s().p("AgNDRIgBAAIgBAAQhHgGgygxIgIgHIgBgBIgDgDIgDgFQgagegMgiIA7AFQB/AIBcgFQBNgEAZgGQgSAxgoAlQg6AzhLAAIgNAAgAg2A3IgJgBIhLgEQgxgEgLgBIAAgBQgDgPgBgQIABgYIAAgDIADgWQAMhHA2gxQA8g2BOACIAAAAIAIABQBUAFA3BBQAMAPAKAQQAOAYAHAbQAHAaAAAcIAAAOIgBAKIgEAXQhTALhYAAQgnAAgqgCgABRAbQgCAMANAAQAOAAAAgMIgCgFQgEgGgIAAQgLAAAAALgAiBAUQgBANAPAAQAPAAAAgPIgCgFQgDgGgKAAQgOAAAAANg");
	this.shape_11.setTransform(-44.8,4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNCnIgBAAIgBAAQhHgFgygxIgIgIIgBgBIgDgDIgDgEQglgrgKgzQgDgNgBgQIAAgIIAggLIAfgOQBNggCIgxQAxgQAngLIANAUQAOAYAHAaQAHAaAAAdIAAAQIgBAJQgJBPg8A2Qg6A0hLAAIgNgBg");
	this.shape_12.setTransform(-44.8,8.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#83888C").s().p("AisBPQANhGA2gvQA8g3BNADIABAAIAIAAQBPAGA2A6Qg3ALi9BCIgcAKIgJADIgJAEIgzAVIgEACIgCAAIABgMgAh4AgQgNAFAEAMQAEANAOgFQAOgFgFgPIgEgEQgCgCgEAAIgIABgAA8gcQgLAEADAKQADAMAMgFQANgEgEgLIgEgEQgDgDgEAAIgFABg");
	this.shape_13.setTransform(-47.5,-7.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgNBfIgBAAIgBAAQhHgFgygxIgIgHIgBgCIgDgDIgEgEQgkgogKg0IgCgRIABAAQAYgFAKAAIAYgBQAigBAQgDQAMgBA8AAIDdAHQgKBQg7A0Qg6A0hLAAIgNgBg");
	this.shape_14.setTransform(-44.8,15.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#83888C").s().p("AjJBZIAAgDIADgWQADgVAIgUIAAAAQAfg3AYgWQAPgNAQgKQAxgeA6ABIAAAAIAIABQBUAGA3BBQANAOAJAQIANAYIAAAAIAAAAQAFAMADANQAHAaAAAcIAAABQgUgEglgBQgigCiBAAIgEAAIgLAAIgJAAIgVABIhMACIgDABIghADIgCAAQgQADgKAEIABgSgAiFBFQAAADACAEQAEAIAIAAQAGAAAEgFQADgEAAgEQAAgNgOAAIgBAAQgMAAAAALgABZA9QgCADAAAEQAAAKALAAQAEAAAEgDQAEgEAAgEQAAgHgHgBIgEgDIgDABIgCABIgCAAIAAAAIgBAAIgBAAIgBADg");
	this.shape_15.setTransform(-44.8,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPDuQhggGg+hKQg/hLAGhhIABgIIADgZQAJguAZgmIADgEQAQgXAWgUQBIhBBeAGQA3AEAtAZIARAMQAXARAUAWQAMAQAKAQQAlA8gDBIIAAAIQgHBjhIBCQhCA7hVAAIgQgBg");
	this.shape_16.setTransform(-44.8,4.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgPDuQhggGg+hKQgigogOgvIgBAAIABAAQgMgpADgsIABgIIADgZQAJguAZgmIADgEQAQgXAWgUQBIhBBeAGQA3AEAtAZIARAMQAXARAUAWQAMAQAKAQQAlA8gDBIIAAAIQgHBjhIBCQhCA7hVAAIgQgBg");
	this.shape_17.setTransform(-44.8,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-19.5,46.4,47.9);


(lib.MIX_43_eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBEC1").s().p("AgLCHQgngYgYguQggg9AAguQAAhIAkgcQAXgPAcADQglAkgEAtQgDA6AMAjQARAzAwAnQAsAjAxgIIgHAHIgaAKIgDABIgPABQgkAAgfgVg");
	this.shape.setTransform(43.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDBEC1").s().p("AgLBbQgngYgYguQggg7AAgwIABgVIAtgEQgCA2ALAjQARAxAwAnQAsAjAxgIIgHAHIgaALIgDAAIgPABQgkAAgfgVg");
	this.shape_1.setTransform(43.8,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686C72").s().p("AgHgWQAUgQAdAEQgXAVgKAWQgCgEgGAAQgGgBAAAJIAAAFQACAEAEABIABAAIACgBIAAAAIgCAJQgcACgPADQAIgnAagTg");
	this.shape_2.setTransform(37.6,-12.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#686C72").s().p("AgLCHQgigVgWgkQARABAfgCQAPARASAQQAsAjAxgIIgHAHIgaAKIgDABIgPABQgkAAgfgVgAhqgqQAAhIAkgcQAXgPAcADQglAkgEAtQgDA6AMAjQAHATALASIgKABIgeADIgEAAQgdg7AAgsg");
	this.shape_3.setTransform(43.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBEC1").s().p("AgLBpQgngZgYgtQggg8AAgwQAAgdAGgWIApANIgBAHQgDA6AMAmQARAwAwAoQAsAiAxgHIgHAGIgaALIgDAAIgPABQgkAAgfgUg");
	this.shape_4.setTransform(43.8,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#686C72").s().p("AgkAQQAJgRAPgLQAVgQAcADQgaAZgJAaQgZgIgNgCg");
	this.shape_5.setTransform(38.1,-13.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBEC1").s().p("AgSAuQgogZgYgrIgGgMIgFgKIgGgPIAJgCQAJgDAIAAIAPgBQASAxAvAlQAsAiAxgHIgHAGIgaALIgDAAIgPABQgkAAgfgUg");
	this.shape_6.setTransform(44.6,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#686C72").s().p("AgqAfIAAgVIAAAAQALg5AZgTQAVgQAcAEQglAjgEArQgCApAFAfIgMABQgSADgKAEQgHgaAAgXg");
	this.shape_7.setTransform(37.4,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

	// Layer 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgWCHQgogYgYguQggg9AAguQAAhIAlgcQAWgPAdADQAPACAPAHQAtAUAlA3QAiA0ADBTQABAfgMAYIgCADIgHALIgDADIgHAHIgaAKIgDABIgPABQgkAAgfgVg");
	this.shape_8.setTransform(45,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBgQgogYgYguQggg7AAgwIABgWIAugDIAWgCQBWgIAZABIAQAAIAEAGQAiA0ADBTQABAfgMAYIgCADIgHALIgDADIgHAHIgaAKIgDABIgPAAQgkAAgfgUg");
	this.shape_9.setTransform(45,3.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#83888C").s().p("Ag3gWQAWgQAdAEQANABAQAHQAjAPAdAiQgvABhFAFIgQACQgfACgOADQAHgnAagTgAg1ANIABAFQABAEAGABIABAAIADgBIAAAAQADgBABgDIABgCIAAgBIAAAAIAAgBIgBgFQgCgEgGAAIAAAAQgIAAAAAIgAAxAGIABAFQABAEAGABQAJAAAAgJQAAgHgJAAIAAAAQgIAAAAAGg");
	this.shape_10.setTransform(42.4,-12.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83888C").s().p("AgWCHQgigVgXgkQARABAggCIAEAAQBHgFA3gQIAQgEIACgBIABAOQABAfgMAYIgCADIgHALIgDADIgHAHIgaAKIgDABIgPABQgkAAgfgVgAh2gqQAAhIAlgcQAWgPAdADQAPACAPAHQAtAUAlA3QAbAqAHA9IgdAHQgXAGhPAIIgXACIgHABIgKABIgeADIgDAAQgeg7AAgsgAgoAjIABAGQACAEAGAAQAIAAAAgJQAAgJgIAAIAAAAQgJAAAAAIgABSARIABAFQABAEAGAAQAJAAAAgJQAAgJgJAAIAAAAQgIAAAAAJg");
	this.shape_11.setTransform(45,-0.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#83888C").s().p("AgdAJIgfgJQgagHgOgCQAJgTAQgLQAWgQAdADQAPACAOAHQAuAUAkA1QAIALAGANQg0gThOgagAA2ATIgBAFQAAAFAGACQAIADADgIQADgIgIgDIgEgBQgEAAgDAFgAgrgLIgBAFQAAAFAGABQAIACADgGQADgJgIgDIgEgBQgEAAgDAGg");
	this.shape_12.setTransform(44.4,-10.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWBpQgogZgYgtQggg8AAgwQAAgdAGgWIAqANIAaAIQBbAbAeANIAcANQAMAmACAuQABAggMAYIgCACIgHALIgDAEIgHAGIgaALIgDAAIgPABQgkAAgfgUg");
	this.shape_13.setTransform(45,2.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgeAxQgngYgYgsIgGgMIgFgKIgGgPIAJgCQAIgCAJgBIAPgBQA9gEAOAAQBVgBAPgCQAEAYABAaQABAdgMAYIgBADIgIALIgDADIgHAHIgaALIgDAAIgPABQgkAAgfgVg");
	this.shape_14.setTransform(45.7,8.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#83888C").s().p("AhxAfIABgVIAAAAQAKg5AagTQAWgQAdAEQAPABAOAHQAjAQAsA1IADAEQASAcAKAjQh6ABg3AFIgOABQgTADgKAEQgHgaAAgXgAgvA1IAAAGQADAGAKAAQANAAAAgNQAAgDgCgEQgEgEgHAAQgNAAAAAMgAA3ApQAAAOANAAQAFAAAEgEQADgDAAgGQAAgKgMgBIgDAAQgKAAAAAKg");
	this.shape_15.setTransform(44.5,-7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).wait(1));

	// Layer 7
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhYB0QgrgygLhOQgHg1AMgqQAWhOBIAAQAaAAAcAQQBKAkAkBOQAYAxAABHQAABphMANQgOADgNAAQhGAAg8hGg");
	this.shape_16.setTransform(45,-0.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhYB0QgrgygLhOQgHg1AMgqQAWhOBIAAQAaAAAcAQQBKAkAkBOQAYAxAABHQAABphMANQgOADgNAAQhGAAg8hGgAhDhgIAAAAQADgBABgDQgBADgDABg");
	this.shape_17.setTransform(45,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.4,-19,29.2,37.3);


(lib.MIX_34_pupil_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGArQgSAAgNgOQgOgNAAgRQAAgUAOgOIAGgFQAJgDAJABQARABANAOQAMAPgBARQgCAUgNAMIgGAEQgGACgGAAIgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.9,-4.3,8.1,8.8);


(lib.MIX_34_pupil_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAXQgJgMABgRQACgbAVAAQAOABAHASQAGAQgHARQgFAPgLAAQgKAAgJgLg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.3,-3.3,4.9,6.8);


(lib.MIX_34_nose = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E939A").s().p("Ah0A+QAkgeA0gnIBQhCIAMAKQAWAQAfgCIAAAAQhSBMgXASQgmAdgiAAQgfAAgZgMg");
	this.shape.setTransform(1.5,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E9F0").s().p("AhhBHQgBgEAAgKQAAgRAIgaQAngSBEgnIBGgoQACAVAKAXQgYAQgYAOQgRAJh+BUg");
	this.shape_1.setTransform(-5.4,-0.6);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E7175").s().p("AgCACQgDgCgBgGIAAgFIANATIAAAEIgJgKg");
	this.shape_2.setTransform(11.2,-7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BBC1C7").s().p("AhaBxIgOgIQgggUgFggQgBgEAAgLQAAgQAIgYQAOgsAsgIQBdg1AZgQIABAWQACAVAKAXQALAVANANIALAKQAWAOAfgBIAAAAQhSBOgXARQgmAegiAAQgfgBgZgLg");
	this.shape_3.setTransform(-1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#888D91").s().p("AgYArQgZgbAAgtQAAgOAPgVQAfAAAbAsQAaAlAAAbQAAALgCAEQgEAGgQAAQgeAAgWgWgAgMgWIgBABQgJATAGAQQAHATARAAQAOAAAAgPQAAgSgLgMQgJgLgIAAIgGABg");
	this.shape_4.setTransform(10.9,-7.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiVB8QghgmAAgxQAAgXAagyQAJgRAWgJQAagIAMgGQA3gdAWgOQAMgKAkgdQApgaA1AsQAzAsAAA5QAAAggSARQg3A4gEAGQgiAqgoAbQgqAcgjAAQhBAAgngtg");
	this.shape_5.setTransform(0,0.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.3,-16.6,36.7,33.9);


(lib.MIX_34_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5248B").s().p("AAAAAIAAAAIABAAIgBAAg");
	this.shape.setTransform(-48.3,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AACAAIgCAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAACAAg");
	this.shape_1.setTransform(-23.2,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C1247").s().p("AleCMQgEgeAChEQgChAAEgdIAQAAQADAaABA1QABA1gBA1IAAAHIgUgBgAhXgyIAAgKIASgBQAHAyAFCOIAAABIgSABQgHgqgFiNgADUhCIgBgeIAUgEQAHAnAECMIAAAAQgLACgOAEQACAAgHiXgAFLg0QgBgzABgdIATgIQACAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADg");
	this.shape_2.setTransform(9.6,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B5248B").s().p("AjwAzIADAAIAAAAIgDAAgAnTAoIAAgBIACABIgCAAgAHSgyIACAFIgCABg");
	this.shape_3.setTransform(-1.6,3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C1247").s().p("AleCMIAAAAQgEgeAChEQgChAAEgdIAQAAQADAaABA1QABA1gBA1IAAAHIgUgBgAhXgyIAAgKIASgBQAHAyAFCOIAAABIgSABQgHgqgFiNgADUhCIgBgeIAUgEQAHAnAECMIAAAAQgLACgOAEQACAAgHiXgAFLg0QgBgzABgdIATgIQACAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADg");
	this.shape_4.setTransform(9.6,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 5
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CC289D").s().p("AlTCGQABg1gBg1QgBg1gEgaIAngBQBtgBBkgHIASgBQAHAyAFCOIAAABIgSABIgDAAIgEABQhLAEhzACIg6ABgADehkQAjgIAZgJIAogPIASgIQADAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADIgUAHQgVAIgzANQgEiMgHgng");
	this.shape_5.setTransform(10.5,-5.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE33CA").s().p("AiPB0QgFiOgHgzQBBgEA9gHQBagKA/gNIAVgFQAHAnAECMIgBAAQgKACgOAFQh0AfieAQg");
	this.shape_6.setTransform(18.2,-3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B5248B").s().p("Aj/CTIgDAAQhngChdgIIgggDIgBgoQgChMADggIACgkIA7AEQA0ADB1gBIAQAAQAEAaABA2QABA0gBA1IAAAHIgUgBgAnlCIIAAAAIACAAIgCAAgAHAAtQABgzgBg1QgBgvgDgaIAigPQAFApACAzIADA/IABAZIgMAGIgaAKIgDABg");
	this.shape_7.setTransform(0.1,-6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACAAIgCAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAACAAg");
	this.shape_8.setTransform(-23.2,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE33CA").s().p("AjmDkIgCABIgBAAQgCAAAAAAQgBAAABAAQAAAAABAAQABAAADgBgAj/BBIgDAAQhngBhdgJIgggDIgBgnQgChLADgiIACgkIA7AEQA0AEB1gCIAQAAIAnAAQBtgCBigHIASgBQBBgEA9gHQBcgKA/gNIAVgFQAjgIAZgJIAogPIASgHIAigPQAFAqACAyIADBBIABAaIgMAFIgaAKIgBABIgCAAIgCACIgKADIgHADIgUAIQgVAHgzALIgBAAQgKACgOAFQh0AfigAQIgSAAIgDABIgEAAQhJAEhzADIg6AAIgUgBgAnlA2IAAAAIACAAIgCAAg");
	this.shape_9.setTransform(0.1,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE33CA").s().p("AlTCGQABg1gBg1QgBg1gEgaIAngBQBtgBBkgHIASgBQBBgFA7gGQBcgKA/gOIAVgEQAjgIAZgJIAogPIASgIQADAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADIgUAHQgVAIgzANIgBAAQgKACgOAEQh0AfieAQIgSABIgDAAIgEABQhLAEhzACIg6ABg");
	this.shape_10.setTransform(10.5,-5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5248B").s().p("AjmDkIgCABIgBAAQgCAAAAAAQgBAAABAAQAAAAABAAQABAAADgBgAj/BBIgDAAQhngBhdgJIgggDIgBgnQgChLADgiIACgkIA7AEQA0AEB1gCIAQAAIAnAAQBtgCBigHIASgBQBBgEA9gHQBcgKA/gNIAVgFQAjgIAZgJIAogPIASgHIAigPQAFAqACAyIADBBIABAaIgMAFIgaAKIgBABIgCAAIgCACIgKADIgHADIgUAIQgVAHgzALIgBAAQgKACgOAFQh0AfigAQIgSAAIgDABIgEAAQhJAEhzADIg6AAIgUgBgAnlA2IAAAAIACAAIgCAAg");
	this.shape_11.setTransform(0.1,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AjjD3IgCABIgBAAQgBAAgBAAQAAAAAAAAQABAAABAAQABgBACAAgAjqBtIgVgBQhegChbgIIgEAAQgQAAgQgEIgggDIgEgBIgBgiIAAgfIgBiTQgDgWAOgHQAcAEB9AKQB9AKDggTQDfgTBRgTQBRgUAygTIA5gYQALgBACAPQAHAlACA3QADBPAAAwIguATQgkAPgfAJQipAxivAUIACABQhdAJgbAAIgdAAIhVABIgHAAIg2AAg");
	this.shape_12.setTransform(-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-24.7,103.3,49.8);


(lib.MIX_34_Lashes_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjB5QgngZgGgxIADACIAXAaQAQATAUAMQAlAKAKAJQADADAAAKQAEABgJAAQgiAAgcgSgAghAvQgaghAAg3QAAgEAFgJIAHgKIAAAEQgBAIAJAiQAJAdADAFQASAhAhARQAeAOAAAJQAAAGgDACQgBABgEABQg2gVgZgfgAAUAAQghghAAgzQAAgQAHgRQAFgNAEgIQgDA2ARAmQASAqAuAYIgFAEIgKAEQgWgDgYgZg");
	this.shape.setTransform(0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-13.8,16.3,27.9);


(lib.MIX_34_head = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#777FC7").s().p("AhoCLIABgpQAAhohAg6Qg4gyhSAAQi4AAg1DWQgCgOAAgKQAAhtBShQQBJhGBNAAQCTAAA7CRQAYA3ABBAQAAA+gUApQgDgJAAgkgAGuA3IAAgBQgFgOAAgMQAAgzAMglQAXhDA9AAQADAAAVAfIgEgBQgkAAgYAbQgVAXgCAbQAFAcgKAbQgJAVgHAAQgGABgBgCg");
	this.shape.setTransform(8.6,-8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AlvEHQgEgDAAgGQAAgFAEgEQAFgEAGAAQAHAAAEAEQAFAEAAAFQAAAGgFADQgEAEgHAAQgGAAgFgEgAniDnQgEgFAAgGQAAgGAEgEQADgEAGAAQAFAAAEAEQAEAEAAAGQAAAGgEAFQgEAEgFAAQgGAAgDgEgAk2DYQgwgDgRgDQgmgLhagfQhFgYgUgKIAGgRQCAA1BWASQAOAEBFAHIBHAOQgUAHgWAAIgygEgAo/DDQgEgEAAgGQAAgFAEgEQAFgEAHAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgHAAgFgEgAIbCmQgUhigghcQg+i8hKgvIAZgEQAvA5ARAXQATAZAdBIQAOAkALAeQAOAlAQBBQAOA4AAAHQAAAPgCACQgCACgNACgAI4BqQgEgFAAgHQAAgHAEgGQAEgFAGAAQAGAAAFAFQAEAGAAAHQAAAHgEAFQgFAFgGAAQgGAAgEgFgAIAhVQgFgFAAgIQAAgIAFgGQAGgFAHAAQAHAAAFAFQAFAGAAAIQAAAIgFAFQgFAGgHAAQgHAAgGgGgAGmjvQgEgFAAgGQAAgHAEgEQAEgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_1.setTransform(-14.7,-12.7);

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505358").s().p("AkEIHQgNABgDgDQgNgOAAigQAAgjAHgIQAGgHAWAAQASAAADAMQACAIAAAvIAICAQAAAlgOAIQgKgOgNAAgADenWQgYgKAAgXQAAgGgCgBIARgWQAQAQANAGIAwAMIgIAXIgGAVQgwgMgGgEg");
	this.shape_2.setTransform(-51.9,2.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E939A").s().p("AjcFcQgigMgRACQAIiwBXitQArhVA2hFQAfgnApgoQAVgWBZg8QBag9AMAAQA7AkAIAEQhWBIhIBQQhLBUhKCQQhlDAgUCjQgVgagrgOg");
	this.shape_3.setTransform(-52.8,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#686C72").s().p("Ah4AqQAKgbBkgqQBigsAhALQhGAdgaARQgtAdgVAwQgsgJgjgMg");
	this.shape_4.setTransform(-16,-55.6);

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC1C7").s().p("AFMJxQABgUgHgxIC/gjQAGAMAEAVQAGAbABAYQAAAVgNADIhRAOIhqALIgCgdgAkcIDQhngQjsgzQgPhVg5g5Qg4g1g0AJQAIiwBXitQArhVA1hFQAggnApgoQAWgWBag8QBag9ALAAIAfATQAgATADABQAVAHAVAEIAUADQAQAGBHAFQA4AEAUAAQCQAABogVQBXgSAegbQCCBEBoBuQA7A/AiA6QAxBPAuCfQA0C1AACBQAAALh8AqQhxAmgeAFQivAjgtAGQh5ARidAAQihAAiigZgAh3n8QATgxAVgaQATgYAugjQAfgcBAAoQBBAnAmBIQhQAPhZAAQg+AAhIgEg");
	this.shape_5.setTransform(0.3,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE33CA").s().p("AjWAfIgDgVQABgSAJgFQANgIAmAGIAFABQgHAYACAaIg6gFgACUgbIAZgFQAQgDAFAAQALAAAFAOQAEASAEAHIg2ANQgJghgHgLg");
	this.shape_6.setTransform(4.8,-44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606366").s().p("AnuIXIgugTQgSgJgIgHQgFgEgCikQAAgpALgEQAQACAMgGQBSAQAkBtQAQAwAIBJIADAmgAnAFeIgLgUgACSmzIgBgXIAAgWQABgGAIgCQAnACA9AAQAcABA3gFIBAgJQAHAAAIAVQAGASAAAIQglAHjGALgAgknaQgwgSAAgWQAAgGgCgBIARgVQAWAXAnAIQAsAHAWAGQgEAFgEATIgEAUIAAAEQg8gPgWgJgAIDnxIgKgVQAHgGAUgIQAOgFAAgHQAAgGgEgGIgIgKQARADAMANQALANAAANQAAAKgKANQgPASgbAEIgHgSg");
	this.shape_7.setTransform(-23.5,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#83888C").s().p("AldKCQjNgYiWgwQgBgsgIg0QDhA3C1ATQB7AMCtAAIDCgIIALADQAKALAAAtIgBAmIiKAGIh5AEQiNAAiYgRgAHSJSQAAgpgCgNIgMgiQCegvAugTQARgHAjgXIAGBWQAAALgZAOIgsAUIhLAgQgOAGgtANQgqANgDAAgAlIoVIg1gPIAEgFQAmglBWghQBNgfAwgEQg5ApgYApQgFAIgSAyQg1gEgrgLgABQo6Qgjgvg3goQBAAJAzAdQAvAbAbAmIACAEQgPALgGACQgSAGglAAIgZgng");
	this.shape_8.setTransform(10,3.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(47,50,59,0.314)").s().p("AgEgJIAJASg");
	this.shape_9.setTransform(-69,37.6);

	// Layer 4
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjNKkQirgQiAggQh/gfhfglQgvgSgWgMQglgTAAgNIgEhfIgChGQAAjkBcjFQA5h5BMhVQAngrBphLQA2gnA6goQAFgDAJglQAIggAYgHQBUhHCRgdQB4gZBHARQAwALAwAaQAhARALAKQAXAUAUAGQAKAEALACQAaAPAHAGQASATAAAgQAAAGgBADIgFAJQEICYB1EMQBkDjAAFTQAABFjeA/QjqBEkjAAQiVAAiUgOg");
	this.shape_10.setTransform(0.3,3.5);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.6,-65.5,167.9,138.1);


(lib.MIX_34_handR = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83888C").s().p("AgtAzQgBgUgXgHQABgGgFgLQgDgHgSgDIABgDQAUgqAggMQBQgfAsA8QANARgBAPIAAAAIgRgBQgkAAAAAtIAGAJQgGAEgNAFQgXAIg3ABQAEgIAAgNg");
	this.shape.setTransform(3.1,-3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AiSA/QgDgQAogdQApgaAWgBQAWgBgFARQg6BEgcACIgIABQgVAAgCgPgACiAwQgTgDgog2QAAgEADgIQAFgLAGAAIAEAAQAMAIAdAKQAdAPABAiQgJAOgQAAIgFgBgAi/AVQAAgOAkgYQAqgeArAAQARAGAAAJIAAADQgZAEgoAZQgkAVgNAVIgCAAQgWAAAAgVgAiwg5QASgWA1ACQAUACALACIgEAMQgigCg0AZQgRgHAFgMg");
	this.shape_1.setTransform(-0.5,2.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBB+QgrgBgCghIAAgCIgCABQgnAAgBgiQAAgaAmgfQgfgGAIgcQAMgeA7gFIAOgBQAhAAATAGQASgbAdgQQA3gfAwAXQAmATANAVQAPAYACAgQAIACAfAVQAaATgCAiQgCAVgWALQgTAKgRgEQgagGgcgwIgGAEIAAgBIAAABIgYAIQgnANhAgFIgUAWQgkArgqAAIgBAAgACFgbIADAAIgDAAg");
	this.shape_2.setTransform(-0.6,-0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-12.8,43.4,25.3);


(lib.MIX_34_handle = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#494B51").s().p("AhtCqQgWgtAAhSQAAgrAZhJQANglARgoQANgxAdgcQAagXAYAAQA4AAAjAkQATASAGATQAAALgIAEQgZgegegRQgYgOgOAAQgpAAgrBgQgsBhAABhQAAA3AWAiQAPAZA1AuIgBAYQhIgVgdg8g");
	this.shape.setTransform(-2,3.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606366").s().p("AiyDVQgdhaAAhwQAAggAWg5QAXg8Ajg4QBZiNBXAAQAmACAYAVIAYATQAbAVAuAtIhTB5QgUgWgEgDQgZgegegQQgYgOgOgBQgoAAgsBgQgsBgAABiQAAA3AWAiQAPAZA2AuIAcAHIAAA7QgWAMgmAAQhOAAgnh7g");
	this.shape_1.setTransform(0.2,0.2);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AigExQhEhSAAixQAAiMBoiIQAtg6AxgjQAxgkApAAQAcAAAYAOIAtAiQAEADA7BFQAHAAABAGIABANQAAAJgbAqIg7BbIgQgGQgHgCAAgGQAAgCgVgSQgagWghgXIgDgBQgOgDgMABQgJAAgCABQgtBAgUAwQgeBEAABNQAAAvAkAzQAdApAeAKIAABfIgLAGQgaAMgYAAQg2AAgtg3g");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.8,-36,45.9,72.2);


(lib.MIX_34_hand_L = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83888C").s().p("AgtAuIACgEQgBgegfgDIgJAAQAAgrBOgOQAxABAZAUQARANAAAOQAAAEgEAGIgLgBQgUgBgNANQgKALAAAHIABAGQgRAEgSAAQgWAAgQgDg");
	this.shape.setTransform(0,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AA3AsIgkgcIAAgDQAIgNAIgBQAJAAALABQBQAaAAAYQgFARgWABQgXgBgegXgAigAqQAcgpAVgBQAUAAAAAKQADACgSAYQgRAYgRAFIgFAAQgNAAgCgXgACFAQIgIgFQgYgQgbgGQADgIAAgIIABgBQAOABAQAEQAyAMACANQACAOgLADIgIABQgGAAgEgEgABJgtQgFgLgFgHIAAgBIAjgCQAngBAGAXIADAKQgbgKgugBg");
	this.shape_1.setTransform(2.8,0.8);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAmQgWAIgeAAQgcAAgUgFQgdAxggABQgnAAABgbQACgbAXgbQALgKAMgHIAAgFQAAgWAQgVQAageA1gFQA2gEAhAWQAQgIAnAAQA+AAAAAuQAAAIgCAEQASANAAATQAAAXghAEQAIAHAAAJQAAAKgHALQgLARgXAAQgZAAhJg1gABPgXIAAgCIgBAAIABACgABAg7IAAgBIgBAAIABABg");
	this.shape_2.setTransform(2.7,0.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.4,-8.7,36.5,18.4);


(lib.MIX_34_bulbL = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017E58").s().p("AgaA7QABgEAFgGIAAAAIACgCIABgBIACgCIAAAAIAAgBIABAAIADgEIAEgFQgGgFgCgFIgDgJIgagCIgPAKIgIAEIgCgBQgFgCgGgJIADAAIADgBQAJgCADgGQgLgKgEgHQgEgHAAgIIABgBIgBgBQACgeAdgHQAQgDAGAIQAHAIgCASQAAAGgFAMQgEAKgDAFIgCABIADAAQAMgBANgSQAOgYARABQAKABACAJIAAABIAAAIIAAABQgBAHgNAMQgLAIgMAHIADAEIAAABQAAAEADAAIAYgRQAYgRASACQAIAAADAEQADADgBAEIAAAAQgBAKgSAPQgTARgTAAQgNABgIAEQgFADgEAGIgHALQgGgDgIgFgAArANIgPAMQALgBAKgJIANgMQgIADgLAHgAgygxQgPAGgBAJIAAACQAAAHACAFQACAHAJAIQADgCAGgKIAAgBQAGgLAAgGQABgKgDgDQgCgCgDAAIgFABgAACgPQgCAFgBAEQALgMADgFQgFACgGAGg");
	this.shape.setTransform(-4.2,5.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_1.setTransform(-12.4,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21FFC0").s().p("AgHCKQgUgCgZgMIAAAAIgBgBQgHgCgIgFIgNgJIABAAIgBgBIAAAAIgBgBIgBAAIgagUIAAAAIAAgCIgBgBQgGgBgGgJIAAgBIgBAAIgIgLQgMgVgCgUQgCgMACgZQAFg+AwggIAAAAQAsgeA6AGQA7AGAnAlQArApgFA+QgCAkgXAjQgnA5hLAAIgOAAgAh7AcIABAAIgBgCIAAACg");

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJCfQg0gEg2guQgzgtADggIAAAAQAAgIgDgOIAAAAQgCgPABgQIAAAAQAEgyAaggQArg1BfgDQBiABAsBIQAdAxgEAxQgDAugcAoQgrA+hWAAIgRgBg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-15.9,33.9,32.1);


(lib.MIX_34_bulb_R = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#505358").s().p("AgcAOIgIgHIgHgDIABAAIgBAAIgDgEQAPgFANgJQAHAGAPAJIATARQgMAFgRAEIgWgNgAAJgLIgPgLIAGgBIADgDQADAAAHAFIAHADQAMAGAFAIQAJAFABADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIAAAAIgDABIAAgBIgCADIAAABIgDACQgIgIgUgOg");
	this.shape.setTransform(10.9,14.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#017E58").s().p("AAYBZIgJgLIgJgJIgDgEIAAAAIgGgHQgFgFgDAAIgNAEIgJACIgSACQgeABgNgRIgHgTQgBgGADgDQAEgDAIgCIAOgCIAFABIAJABQANACAPAIQANAGAKAHQAFgBADgCQAFgFABgMIgEgDIgYgMQgfgOgBgRQAAgGADgHQAEgGAGgBIAEgBQAcgCAQAYQAPARAAAPIADAAQAPgBAFgCIAFgFQgSgSgJgLIgEgFQgMgPgBgKQgBgUAOgEQANgEASATIAJAJQANAWAAAKIgDAZQAAACADAEQAFAEALAJIAAgBIACACIAGAEIAGAFIgJANIgFgEIgFgEQgOgNgGgKIgHAGIgDADQgFAEgNAAIgNAAIgEANQgFAKgKAGIAQASIAFAFIACACIAAABIAMANIgMAHIgCgCgAhXAcIACADQANAPAHAAQAfgCAFgBIAAAAQABAAABAAQAAgBAAAAQABAAAAgBQAAAAAAgBIgVgKQgGgEgQAAIgRABIgCAAIABABgAgpgfQABAJALAHQAKAFAaAJIAAgDQgCgNgVgOIgKgGQgFgCgEAAQgGAAAAAIgAAThLQAAABAAAAQAAAAAAABQgBAAABABQAAAAAAABQAAAMANANIAEAFIAVAUQABgCgBgGQAAgIgDgIIgGgMQgLgSgRgBIgBABg");
	this.shape_1.setTransform(2.9,2.4);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606366").s().p("AgmAlIgJgHIgGgDIAAAAIAAAAIgEgDIABAAQAOgIAOgJQAHAGARALIARARQgMAGgSADIgVgNgAAAALIgRgLIAAAAIAGgDIAAgBIACgCIAHgFIAIgJIABAAIAQARQAPAOAIAGIgDADIgGAHQAAAAgBABQAAAAAAAAQAAAAgBAAQAAABAAAAIgBAAIgDACIgBABIgDACQgIgIgTgPgAAegRIgPgMIAIgIIADgCIAFgGQABAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBIABgBIALAMIAHAHIAAABIACABIACADQACAEAAALQAAAJgDAGIgZgWg");
	this.shape_2.setTransform(11.9,11.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21FFC0").s().p("Ag5CSQgWgJgWgQQgfgXgQgeIgBgEIgIgbQgMgqARgpQAQglAfgZQAggbAogJQAVgEATgBQBpAHAjBLQAQAgAAA9QgHASgMASIgKANIgLANQgUAXgYAOIgLAHQgjARgmABIgFAAQgZAAgWgEgAguBFIACgBIgCAAIAAABg");
	this.shape_3.setTransform(-1.1,-1.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABTC/QgFgCgIgGIgRgPQgJgHgGgEQgfAHg5gFQg8gFgtg5Qgug4AAg3QgBg0Ang1QAog1BbgSIATgCQBvgCA1BPQAeAsACAmIABALQACAfgMAeIgIAQIALAJIAHAGIAOALQAEAKAAAWQAAAVgbAfQgYAWgnAGIAAAAIgJAAQgMAAgIgCgACZCZIADgCIAAAAIgDACgAg3A4IABgBIgCAAIABABg");
	this.shape_4.setTransform(-0.1,-0.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.4,-19.6,40.5,38.7);


(lib.MIX_34_browR = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909499").s().p("AiZARIgDgtIAbgDQAagDAAgDIAMBhIgyAHQgJgOgDgkgAhTAJQgCgNgJgiIA0gGIAegCQAbgCAAgCQAEAdACAHQAFAUALAAQBPgKAkgKIAFAcIjsAuIgEgzgAAdg0IBzgLIAAgDIACAVQADAWACgBQhBAKgzAGQgEgsgCAAg");
	this.shape.setTransform(-0.6,-1.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiqAbQgFg2gDgMQgDgNA7gHIEfgfQAJApADAmQADAcgCAJQgBABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAAACIgtAKQhiAUjEAfQgGgJgEg3g");
	this.shape_1.setTransform(-0.6,-1.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.6,-10.3,35.9,18.4);


(lib.MIX_34_browL = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909499").s().p("AhHAoQgGgPgFgdIgGgoQBZAOAGAAQgBAaABAdQAfAEAuABIAAAOIgCABgAANAPIACgrQAbADAvALIgCAdIgBACQgegEgrACg");
	this.shape.setTransform(-0.1,-0.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABdBGQgygIg1ABIhGACQgOABAAgMQgBgLgKgwQgLgyAHgOQC/AeAfAJIgEAAQgGBTgCAKQgCAHgEAAIgCAAg");
	this.shape_1.setTransform(0.1,-0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.1,-7.5,22.6,14.1);


(lib.MIX_34_armR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F949A").s().p("AiZCiIgTgFIAcgqQASgFAXAGIgfAzIgTgFgAg1ACQAkgeALgKQAEAFAUACIgmAkQgVgEgMABgABYh4IA1giIABAAIADgCIAEABQAEAAAUAMIg2AiQgTgJgMgCgACfikQgEADgFABQASgKgJAGg");
	this.shape.setTransform(-0.4,-5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F669A").s().p("AjmDmIAYgyQASgnAHgHQAHgHAOAAQADAAASAMQgNAZgKAXIgWAxQgWgGgYAAgAh+AwQAvhIAXgHQAIgCAIAEQAKAFADgBQgfAkgdApQgYgGgPACgAAJhlQAlgmATgKQAUgKAYANIhJA4QgNgHgOgEgACnjWIAQgLQAQgKAGAAIAaAOQgCADgOAIQgOAJgJACIgZgPg");
	this.shape_1.setTransform(-0.9,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E939A").s().p("AhRCEQAMACAFgDIgHAyIgRAGQgCgwAJgHgAgogYQAKgPAVACIgTAmQgOABgMADIAOgdgAA7iTIgUgHIAeggIAVADIgfAkIAAAAg");
	this.shape_2.setTransform(7.4,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F669A").s().p("Ah2DHQAFgBALgIIgCA9IgMAIgAhrBMQANg8ACgCQAJAAASgEIgZBXQgOAEgJAEgAg3hEIA0hQQAIAAAMAGQgXAkgXAmIgaAAgAA7jYIAygqIAKAFIgsAqg");
	this.shape_3.setTransform(10.4,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5F669A").s().p("ABbCCIgBgSIgBgTIAuAHIABASQAAAMACAAgAhUBVIgwgRIgBgDIAIgoIA7AiQAiASAeAAQgBASADARQgcgGg4gVgABmhJQAAgGgHgXQBHAWAHADQAdANgBAYQgigOhBgTgAjIgzQADgRALgaQAQgQAfgJQAggKAhAAQAfAAAGAGQADALAEAIIhOgGQgoANgJAcQgVAFgGADIgQALg");
	this.shape_4.setTransform(-1.4,-23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E939A").s().p("ABNB0QgEgHgDgLQgDgMABgHIBDALIgBAUIAAAPgAh1AkQgcgkAAgYQAAgEAQgMQAQgNALgEQgCAmACAIQACAFAVAVQgHATAEAaQgOgNgVgLgAAqhlIgDgKIgGgOQAmADAaAFQAxAMAAAcQgggJhIgPg");
	this.shape_5.setTransform(-7.2,-23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#777FC7").s().p("AAIgVQgJAYgDARIgDACIAAABQAHgbAIgRg");
	this.shape_6.setTransform(-21,-30.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F669A").s().p("AgPClIALgSIANgVIAcAuIgQAOIgPAPgAg5gEQADgSAAgDIAAAAQAFgJAagEIgFAZIAGAvQgOADgTARQgCgdAAgdgAgYh2QAAgKAaghIAGgMQAMgUASgEIAFgDIgDACIAGgBIAMAGQgQAMgQAZQgPAXgKAMQgDAAgGADIgDAAIgNABIAAgBg");
	this.shape_7.setTransform(1.7,2.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8E939A").s().p("AhNBzQAAgEALgHQALgIAKgEIAGAfQAEAOAPAZQgCACgKALQgMAPgCAKIgfhVgAhGgWQADgeAKAAQAEAAAFgDIAMgCIgFAgQgBAHgDAOIgcAJIgFADgAAeipQApgfAIABIgrAjIgGgFg");
	this.shape_8.setTransform(4.2,-2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#777FC7").s().p("AAAgJIABAAQAAADgBAQg");
	this.shape_9.setTransform(-3.9,0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F669A").s().p("AgnCbIAPgWQAiAUALAIIARAOQgDAHACARgAiyAwQgTgbAAgMQAAgGAIgDIASgHQABAXAUAcQARAYAPAHQgKARABAGQgdgVgWgdgAhuiOQAogUAYgJQAsgQAiAAQACAAAGAGIAJAMQhpAbggAPgACDjGIAjAAIAeAAQgCADAEAEIg/AHg");
	this.shape_10.setTransform(-0.5,-8.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E939A").s().p("AhMCBQAAgDALgTIBFArQgHASgBAHgAiNgyQAWg2AZAAQANAAAQAIQghASgSAbQgQAZAAAaIgcAOQAAgUATgsgABZinIBBgHQAGAAABAHIAAAIIg7AKg");
	this.shape_11.setTransform(-4.4,-10.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#777FC7").s().p("AAHCqQgJgJgkgUQAJgFAOgGIAZgJIA4AcQgFACgQANQgSAOgDAGIgRgOgAikA0QgUgcgBgYQAogEAHAGQAkArASAPQgOABgPAJQgOAHgFAGQgPgHgRgYgAB5iwIA/gGQAJAkgXAIQggACgOADQABgdgEgOg");
	this.shape_12.setTransform(0.8,-9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#83888C").s().p("AgnA3QgigZAAgzQACgVANgOQAagcAyAfQAhATAPAgQAHAOABANQAAALgRAOQgJAHgJAFQAAAGgPACIgXAAQgTAAgVgPg");
	this.shape_13.setTransform(12.8,13.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBC1C7").s().p("ACeBIQgEgNgFgWIgEgLQAMAJANAdQALAZAAAJQAAAHgDAGIgGAKIgOgxgAi0hiQAlgWALAAQAnAaAWANQgIABgPALQgMAJgDAFg");
	this.shape_14.setTransform(7,9.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F669A").s().p("AABCQQgJgJAEgfQAzAfAFACIgSgNIAZALQgDARABARQg0gVgEgEgAiQAvQgpgfgMgLIAPgQQAXASANAJIA1AjQgEAOgCAPIgtghgAh+iWIA5gJIAygJQAGABADAFQAEAIACACIAAAAIhjATQgMgKgLgHgACKiVIgLgQIBDAKIAEAMQgDADgEAAg");
	this.shape_15.setTransform(-1.1,-13.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E939A").s().p("AgjBrIAAgQIADgPIBHArIgFAhIhFgtgAivgUQAAgVAXgmQAbgtAhAAQAGAAABAEQAAAFAUAFQgtACgXAhQgRAXAAAgQAAADALARQgIAHgGAJQgWgVAAgPgAA9iHIgFgHQgGgFgEgDIA7gCQA8ABALATQhSgHghAEg");
	this.shape_16.setTransform(-6.3,-15.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(47,50,59,0.314)").s().p("AgHgHQAIgPAVACIgTAmQgMABgMACIAOgcg");
	this.shape_17.setTransform(4.1,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E939A").s().p("AhRCEQAMABAFgCIgHAyIgRAGQgCgwAJgHgAA7iTIgUgHIAeggIAVADIgfAkIAAAAg");
	this.shape_18.setTransform(7.4,2.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5F669A").s().p("Ah2DJQgBgGAGgBIAFABQABgDAFgCIgCA9IgMAIgAhrBMQANg8ACgCQAJAAASgEIgZBXQgOAEgJAEgAg3hEIA0hQQAIAAAMAGQgXAkgXAmIgaAAgAA7jYIAygqIAKAFIgsAqg");
	this.shape_19.setTransform(10.4,3.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8E939A").s().p("AiTC1QgDgCgGAAIAaggIAIgBIAKAEQALAFAEAEIgdAjQgNgLgIgCgAgjAYIAsg4IALgBIAIABQABACADABQgNAOgQAXQgMAXgCACQgUgJgEAAgABfiQIAmgxQANAGALAHIgmAvIgYgLg");
	this.shape_20.setTransform(-2.6,3.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5F669A").s().p("Ai4DcQAGAAAPAKQgHAJgGABgAiLCUIBChVQAMABAPAHQgjA7gcAiQgNgKgRgGgAAAggIA7hLQADAAAUAKIg9BJQgPgIgGAAgAB7i9IAkgwIAAAAIADgCQAIAAAPAFQgCAFgOAVQgOAWgJALIgXgOg");
	this.shape_21.setTransform(-0.2,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#777FC7").s().p("AAAAAIABAAIgBABg");
	this.shape_22.setTransform(15.9,-22.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8E939A").s().p("Ah5CNIABABQgPgGgNgJQgNgIgKgMIAAAAQgLgNgIgPIADgDIAKgQIAKAQQAVAcAiAKQgBANACANIABAEIgLgDgABZBpIAAgBQAegJA3gWIACgBIAHAPQACADADABIADACIghALIg5ASQgHgEgFgNgAiwhyIAAgBIAKgSIACAAQAEgBADgDIACgEIABAAIABAAIABgBIABAAIAQgBIAEAAQgVAegNAWQgMAAgNADIAOgag");
	this.shape_23.setTransform(27,-1.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5F669A").s().p("Ah4C8IgBgEIAAAAQgDgNABgMQANACAOAAQAvAAAlgFQAkgEAEgCQAFgCgFADIAKgBIABACQAEAKAEAGQgaAJgZAEIgBAAQgkAJgnAAIgBAAIgNAAQgNAAgNgCgACoByIgFgJIBBgcQAGANAKAHIgHADIAAAAIgzAWgAjzA1QgCghAKgdIAAgBIAEgMIABgBQAHgEAIgCIAIgBQgJATAAAKIgFAtQAAASAEAQQgIAKgHALQgJgWgCgYgAidh7IgHAAIgKAAIgCAAIAHgJQAWgbAZgaIADgEIAHAFIAAABIAEACIgqA8IgHgCg");
	this.shape_24.setTransform(30.1,-5.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(47,50,59,0.314)").s().p("AgCABIgDABQAEgEAHAAQgDABgBABIgBADIgDgCg");
	this.shape_25.setTransform(17.5,-25.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8E939A").s().p("AChCpQgFgIgEgBIgDAAIgBgNIAygGQAAALACAGIAAAAIAFAJIgrACIgBAAgAiHBnQACgCgBgEQgBgKAHgJQAaAZAlAPIANAFQgCAIgBAIIAAACIABAGQgugPgjgdgAiuijIAAAAIAAgBQAHgDAKgBQAGAEADgBIgHAKQgYAlgFAnQgKABgFACIgBAAIgEADQAJgzAVgng");
	this.shape_26.setTransform(24.7,5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5F669A").s().p("Ag2DcIgNgDIAAgBIgBgBIAAgKIAAAAIABgLQBCAVBDAAIAdgCQABANAEAIIgYAAQhDAAg/gOgADADjQgFgHgBgEIAAgBIgBgDIAAAAIAAgBIgBgJIAFgBQAXgDAWAHQACAKAFAJIgDACIgtADIgBgCgAjECNQgxg2AFhIIAQgLIAFgBQgBAcAJAdQAMAmAXAcIgEAGIgHAPIAAADIgJgJgAiuh4IgGgBQgFgDgEAAIgDAAIAJgMIAAAAQAsg0ArgtIABAAIAAABIAKAEIAJAGQgzAvgqA4IgFgBg");
	this.shape_27.setTransform(28.1,-1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(47,50,59,0.314)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_28.setTransform(19.5,-26.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#777FC7").s().p("AABAAIABAAIgDAAIACAAg");
	this.shape_29.setTransform(52.2,21.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8E939A").s().p("AgOC1QADgDAAgDQAAgJAKgKIAHAWIAMAbIgCADIgGAMIgBACIAAADQgMgVgLgXgAgogsIABgIIADgCIAFgCIAJgCQgHAkgCAWQgIADgHAEgAgBivIABgGIAAAAIAFgNIAAAAQAGgOAHgMIABAAIACgBIAIgCIACAAQAIgBAIADIgKAPQgKAOgJATQgJgCgKAAg");
	this.shape_30.setTransform(10.4,8.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5F669A").s().p("AgBEBIAAgBIAFgTQAJAMAOAQIAFAFIgBAAQgDAHgCAKQgQgOgLgQgAhFBfIAAgBIgDgXIgBgYIACgCIAEgEIABAAIAIgGQAAAlAEAWQAFAaANAeIgEAEIAAgBQgHAHgEAGQgMgigGglgAg7hBQAKgnAOgmQAMAAAJABIgPAmQgIASgGAUIgBAAQgIAAgHACIAAgCgAAGjnQASgaAYgVQACgDABgDQAHgCAGAAIAKAGIgZAiIgPAVQgNgGgPAAg");
	this.shape_31.setTransform(13,7.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#777FC7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(19.9,32.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8E939A").s().p("AiZCcIgTgFIAcgqQASgFAXAGIgfA0IgTgGgAg1gCQAkggALgKQAEAFAUACIgmAlQgVgDgMABgABYh+QAuggAEAAIADgBQACgCAGAAQAEAAAUAMIg2AiQgTgJgMgCg");
	this.shape_33.setTransform(-0.4,-4.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5F669A").s().p("AjQDuQgPgBgKACQAbg6Aeg2QAIgDAKAAQADAAASALQgRAigeBHQgJgCgPAAgAh7AtIA3hDQAdgJAOADQgfAjgcAqQgZgHgOADgAALhoQAPgKAdgcQAbgUAeAMIhJA5QgOgIgOgDgACqjaIAmgVIAaAOQgCADgOAIQgPAJgIADIgZgQg");
	this.shape_34.setTransform(-1.1,-0.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8E939A").s().p("AjwBgQATgeATgbQARgYACAAQAGAAAEADIALAHQgMAIgSAgIgVAlIgbgGgACrg4IgBgFIABgIQABgJADgCQAZAJAWAMQAQAJADACQgEAMgEAFIgDAEgAgvhNIgDgEQAdgLAFgDQAJAAAggGQAEAIADAPIhFAWIgKgVg");
	this.shape_35.setTransform(-5.5,-22.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5F669A").s().p("Aj8BKQAHAAAJABIAJACIggA6QgNAEgNAFQAThGAOAAgADxg5QAFgMACgMIAaAUQAPANgEAbQgWgTgWgRgAiagaIgWgLQAeggAjgXQANgIAYgNQAHAFAEAIIAEAMIgyAgIgtAegAAth3QgCgPgEgJIAWAAQA8ABARAOQAHAHACATQhdgRgJAAg");
	this.shape_36.setTransform(-4.9,-18.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8E939A").s().p("AiJDAQAQgaAHgHQAGgHAIAAQAGAAAJADIAHACQgMAVgNARQgXgDgLAAgAgeAVIAZgmQAdgEADAAQgLAQgRAeIgdgEgABMiUIAcgtIANgBQAHAAAEACIAKAFIgfAyg");
	this.shape_37.setTransform(1.7,4.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5F669A").s().p("AisEAQALgeAPgCQASAEAIABIgeAfgAhqCXIA6hdIAgABIg6BkIgggIgAABgVIA6hcIANACIATAHIg6BVQgLgDgVABgAB4jAIgKgCQAagpAOgQQAHgIABAAIAPAEQgFAfgaAoIgWgIg");
	this.shape_38.setTransform(2.2,3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#BBC1C7").s().p("AgCABIACgBIADABg");
	this.shape_39.setTransform(-22.5,42.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8E939A").s().p("AApDqIgOhAIAVAEIAQA/gAAAAoIgQhFIAUAEIAPBEgAg/jqQAOAAAOgCIAPBOIgZACg");
	this.shape_40.setTransform(26.1,14.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5F669A").s().p("AA3ErQAAgGgBAAIAWABIAKAhQgLAGgKAHgAA2ElIAAAAgAAeC9IgUhaIAVACIAAAAIAUBegAgNgKIgUhZIAYgCQALBIAGAZQgPgDgGgDgAg7jVIgah1IAQgJQAMAbANAwIANAyIgUABIgIAAg");
	this.shape_41.setTransform(25.3,11);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8E939A").s().p("AiZCcIgTgFIAcgqQASgFAXAGIgfA0IgTgGgAg1gCQAkggALgKQAEAFAUACIgmAlQgVgDgMABgABYh+IA7gjIACAAQAEAAAUAMIg2AiQgTgJgMgCg");
	this.shape_42.setTransform(-0.4,-4.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5F669A").s().p("AjHDbQgPgCgKAAQATgzAQgQQAJgJANAAQADgBASAMIgQAgIgRAnQgGgCgOgCgAiEA+QAvhJAXgHQAHgCAIAEQAKAFADAAQgfAjgcApQgZgGgOADgAAChYQA2gxAHgDQAHgDAhAKIhJA4QgOgHgOgEgACwjBQgEgDgLgFIAPgLQARgKAGAAIAaAOQgDAEgSAKIgSAJIgKgIg");
	this.shape_43.setTransform(-0.2,-2.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8E939A").s().p("AiZCfIgTgFIAcgqQASgFAXAGIAAAAIgfAzIgTgFgAg1AAIAvgpQAEAFAUACIgmAkQgVgCgMAAgABYh7QBAgvgFAIIgEAEIAGAAQAEAAAUAMIg2AiQgTgJgMgCg");
	this.shape_44.setTransform(-0.4,-5.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5F669A").s().p("AjZDeIABhWQAPAAAOgBIAPgCQADAAATAMQgRAdgQAnIgXANQgIAEgDAAQgEAAAEgIgAhzA3QgQgCgGABQAvhIAXgHQAHgCAJAEQAKAFACAAQgfAjgcApQgCgBgPgCgAgBhfQAbgfAXgMQAXgMAaAKIhJA4QgOgHgMgEgACsjIQgFgDgLgFIAQgLQAQgKAGAAIAaAOQgCAEgTAKIgSAJIgJgIg");
	this.shape_45.setTransform(0.2,-1.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BBC1C7").s().p("AABgCIACgCIgDAGIgCADg");
	this.shape_46.setTransform(-18,31.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8E939A").s().p("AhvB6IgCgNIAAgBIAAgNQAeALAqACQAAAJACAIIABACIABAGIABAAQgmgDglgIgACUBuIgCgBIgHgMIAJABQAJAAARgHQAMgFAFgEQAHAAADgCIAGAGIAJAIIAGADIgOAFIgHACIgIACIgEABIgGABIgdAIQgCgEgEgCgAjNh5QAQgJAOgDQgNAmgFAcQgPACgNAKQACgiAOggg");
	this.shape_47.setTransform(29.9,1.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5F669A").s().p("Ag/C+IgBgBQgFgNgBgMIAEAAQBIAAA6gJQAGALALAKIAAAAQgcAGgeAEIAAAAQggAFghAAIgVgBgAkOAoIgBgNIACgDIAEgDIAHgGIAGgEIAIgDIAAAFQAABBAZAhQAOATAXAMQgBAMACAMIAAAEQhQgjgJhfgADECPIgIgFIgBgBQgKgFgGgIIACgBQAUgGAwgXQAEAGAHAEQAJAFAKAFIABAAIAAAAIgIAEIg2AXIgKADIgBABIgDgCgAiwizIABgBIAKgKIANACIgXAcQgaAggOAdQgLABgLADIgEABQAZgwAoglg");
	this.shape_48.setTransform(34.7,-3.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BBC1C7").s().p("AAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(41.8,6.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#5F669A").s().p("Aj9A3QAAgnALgJQAJgGAagDQgPARgHASQgGANAAAIQABAKAOAMQANANAQADQAFAQAHANQhKgBAAhBgAhSBdIgGgMIBCgYQA4gWAPgJIAMAKIgKAGQAHAAiFA7gACYgWIgMgGIBWg+IAIADIAUAEIgwAiIgqAdQgGAAgGgCgAidhRIAugoIAJAHIgoAng");
	this.shape_50.setTransform(31.4,-9.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8E939A").s().p("Ah1BXIgIgSQAeABAfgLQAAADAMARQgsAPgMAAQgGAAgDgHgABvgKIAcgSIAZgQQAJAGAJAEIg6AhQgEgCgJgHgAiRhSIgDABQAFgBAEgHQAHgHAVAGIgpAtIgdAGQAmgrgCAAg");
	this.shape_51.setTransform(27.1,-6.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8E939A").s().p("ADuBnQgEgEABgIQAAgMgCgGIBRABQADAfAFAKQhKgCgKgKgAgmA/QgggGgIgDIAAgBIAAAAIACAAIgCgCQACgQAAgOQAGgBAKAFQAXAJAfABQgCASAFAQIgjgGgAk7hHIgEgFQgCgCAAgGQAAgNAFgRIA1AtQgFAOgDAPQgEgCgCACIgDAEIgBAAQgHAAgbgjg");
	this.shape_52.setTransform(61.6,5.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#5F669A").s().p("AE8ChQgDgLgBgQQBNAEAyAFQALAWAJAMQgmADgzABIgDAAQgvAAgEgUgAAqCQQghgGgJgNQgGgIAAgRQBWAUBuAKQABAOAFAWQhagKhAgMgAimBTIg2gVQgcgNgagUQACgPAEgOICYBGIgDAPIABAQgAnKidQgBgGAEgHIAGgKQAyA7AuAzQgHAPgDAUQgtgsgyhOg");
	this.shape_53.setTransform(63.8,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5F669A").s().p("AB+DCQACgQAFgQIAyAEIAAAWQAAAEgBADQgCADAAAHQgagGgcgFgAALCyIgEgBIgcgIIAAAAIgOgEIgBAAIhug5IASgZQAlAXAoATQAcANAeAFIAiAFQgBARAAAUIgdgHgAiBhVQAIgKANgEQAKACAFAIQghAjgWAqIgEAHIgeAEQASgwAjgkgAgciiIBFgqIAEADIhBAxg");
	this.shape_54.setTransform(16.5,-1.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8E939A").s().p("ABeCoQAAgcACgIIA2AIIgJAiQABgFgwgBgAiVALQAJgOAUACIASAxIgZAagAgviDIgKgIIAvgiIAKANIggAdIgHAGg");
	this.shape_55.setTransform(12.9,0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8E939A").s().p("AgxBbQgYgBgMgDQgRgEgGgMIBFgCIAMAWgAC4AeQAMgCAngNIA0gRIAQATIg1ARIgoAQgAExAUIAAAAIgCAAIACAAgAkwghQAEgLADgQQAHgOAbgQQgMAyAAAEIADASIgXAWQgGgLgDgag");
	this.shape_56.setTransform(32.5,0.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#5F669A").s().p("AhaCIIC3ggIAYAUQgxAPhCAKQgrAHgjACgAkwCAQgtgVgGgQIATgZQAmA9BjAKIAIASQg8gDg1gYgAD1BRQgCgBgEgJIgFgNQAMgEApgRIApgQIAiAMIgwAVIg1AWIgPAFIgBAAgAkehuQAggWA7gZQgYALgyAvQgrApgIAMQgTAHgWAPQAQgvA7gng");
	this.shape_57.setTransform(39.5,-6.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8E939A").s().p("AgxB8QhAgUAAgDQAAgIAFgOQAgANAbAIIA6ASIAGAagADgB7IBPgYIAXANQgRAGgQAJQgSAKgQAAQgTAAgQgOgAlFiGIAYgJQAWAmAZAmQgWAMgGAGg");
	this.shape_58.setTransform(53.1,6.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5F669A").s().p("AgGDUQgLgDgEgOIAsAHQA/AGA9gKIAYAPQguAMgsAAQguAAgpgNgAEkCpIgIgDIgKgFIAKgGIApgZIAxgfIAeABQgIAIgwAhIgvAeIgJgCgAkJBiQgtgqgMgVQAKgIASgLQAUAiAsArQAhAfAXAPIgGAXQgjgRgygvgAmMiPQgHgqAAghQAAgGAEAAIAIAAQgBAhAMAvQAKAnAKAPIgVAJQgIgZgHglg");
	this.shape_59.setTransform(58.1,-0.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#5F669A").s().p("Ai4CQQAJgDAKAAQADAAASALQgJAQgHAQQgJAWgIAQQgggCgQADgAiDA+IA3hDQAegJAOADQgfAjgcAqQgZgHgPADgAAEhXQAQgNAbgbQAagTAgANIhJA5QgOgIgOgDgACyjAQgFgEgLgFIAmgVIAaAOQgCAEgTAKIgSAJIgJgHg");
	this.shape_60.setTransform(-0.4,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[]},1).to({state:[{t:this.shape_60},{t:this.shape_33}]},1).to({state:[]},1).wait(1));

	// Layer 9
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#83888C").s().p("AgwBHQADgKAAgJQAAgDgLgOIgNgOQAAgIgDgHQgIgLgOACQAJgdAYgSQAegVAqAAQAUAAAUAKQAmATAGAqIAAABQgagIgRATQgRAVANAVQgQAJgQADQgWAGgkAAIgGgBg");
	this.shape_61.setTransform(-23.7,31.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8F949A").s().p("AACAAQgCACgEABQAPgJgJAGg");
	this.shape_62.setTransform(15.2,-21.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BBC1C7").s().p("AkSFHQgGgEAAgHQAAgQAlgdQAmgdAZAAQAzAAg3AtQg3AsgRAAQgMAAgGgEgAAAEdQgdgVAAgWQAAgOAOgEQANgDAPAIQAtASAAApQAAAMgZACQgIAAgZgRgAk6EmIgHgEQgEgGAAgKQAAgNAagTQAkgbBDgLQAAACAEAGIAFAHQgWAJgPAIIgcAPIgdAXIgZAVQgGAAgCgBgAkzDQIgEgIQAFgSAhgGQAfgFAiAHQgDADgHAFQgIAFgEAAQgNACgWALQgSAJgPAAQgGAAgDgFgAAWASQgKgSgMgFIgSgFIgTgFIAcgqQAQgFAXAGIAXATIAQAYIgkA2QgDgKgIgNgACIiSQgLgNgMgIQgVgEgMABQAkggALgKQAEAFAWACQAMAJAGAJIAPAcIgiAlQgDgKgNgOgAEPkJQgKgNgHgFQgTgJgMgCIA1giIABAAIADgCIAEABQAEAAAUAMQAPAdADANIgrAdQgDgIgJgLg");
	this.shape_63.setTransform(-13.9,11.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#777FC7").s().p("AjCDhQgWgGgYAAIAZgyQASgnAHgHQAHgHANAAQADAAASAMQAHAFAHAIQAGAHgCgBIAOAeIgnBGQgUgNgSgJgAhOBAIgSgXQgZgGgOACQAuhIAYgHQAHgCAIAEQAKAFADgBIAPAMQAOANAIARQgeAngeArIgSgYgAAwhOQgKgNgLgKQgOgHgNgEQAlgmATgKQATgKAZANQAOAHARAdQgkAfgjAhQgDgJgJgMgAC2jSIgYgPIAPgLQAQgKAHAAIAZAOQADADAIASIAJAVIgqAXQgCgcgPgPg");
	this.shape_64.setTransform(0,0.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#83888C").s().p("AgqAeQgIgFgagKQgEgPAXgcQAcgjAnAAQAcAAATARQAPAMAFAOIAAABQgXgHgIAUQgEAJAAAMQAAAJAJAIQgkAfglABQgDgWgRgMg");
	this.shape_65.setTransform(3.5,35.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BBC1C7").s().p("AhvFLQgFgFAAgKQAAgMAWgbQAagiAdgCIAEADQACACAAAHQAAAYgeAdQgaAagMAAIgKgBgAibEpQABgOALgSQAdgwAkAAIAIAAIAEACQAEAEABAEQgiAbgbAiQgUAYgDAAQgLAAABgPgABbDjQgWgRAAgFQAAgaApAKQApAJAAAdQAAAMgLAEIgNABQgMAAgYgRgAimDnQAGgHAQgLQAZgPAUgBIAMgBQgGAKgWAOIglAYQgIgEgGgJgAgkgLQALACAGgDQADgBAWACIAYACQgCAAAAAXIAAAYQgbgFgbAEIgSAFQgBguAJgHgAAmiHIgXgGQgPAAgJADIAMgeQAJgPAVACQAWADAXAMIgSAmIgWgHgABokkIgUgHIAeggIAUADQAcAQAFAcQAAAHgOAMIgNAKQgEgOgggXg");
	this.shape_66.setTransform(2.9,16.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#777FC7").s().p("AiCDHQAFgBALgIQAGABAigFQAeAGgEAyQAAgBgNgBIgOgBQgUADgVAJIgMAIgAh3BMQANg8ACgCQAJAAASgEQANAAALADQAIADANAFQgPAuABACQABAFgIAcQgKgDgPgBIgYgBQgNAEgJAEgAgYhCQgGABgKgDIgbAAIA0hQQAKAAAKAGIAVARQAPAOAAAFQAAAJgnAvQgVgOgFgCgABPjIQAAgFgGgDIgKgDIgQgFIAygqIALAFQAFAEAJAWQAIAVABAIIghAeQgDgJgQgXg");
	this.shape_67.setTransform(11.5,3.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#83888C").s().p("Ag9A6QgfgXgFgjQgFggAXgZQAYgbAtAAQAkABAkAVQAlAYAAAbQAAArgXAbQgVAagdAAQg1gBgigag");
	this.shape_68.setTransform(24.2,-10.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#777FC7").s().p("ABdCCIgCgSIgBgTIAFgSQACgFARgWIA2gCQgUAOgFANQgDAQgDALIAAASQABAMABAAgAhSBVIgwgRIgCgDIAJgoQAGgVADgEQAFgEASAAQADAAAjAQQAlAUAhAFIgSAoQAAASABARQgbgGg3gVgACYgOQgcgGgdgJQAIgVABgXQAAgGgHgXQBHAWAHADQAcANAAAYQgEAMgFALQgFAJgBAAQgIAAgcgGgAi4heQAQgQAfgJQAfgKAhAAQAgAAAGAGQADALADAIQACAGgCATIgDAdIhAgEIgTgYQgCAEgmAFQgVAFgGADIgRALIAAgBIgCACIgBABQAHgdALgRg");
	this.shape_69.setTransform(-1.5,-23);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#BBC1C7").s().p("ACHCzQgQgMgGgOIgCgJQAdAMAXACQAcAEAagJIAHgFQACATgPAPQgOAMgPAAQgZAAgWgPgAD0CQQACgIAHgNIASgfQACANAAAKQAAAPgGAQQgGAQgLAIIgHAFIgJADQAJgUABgOgAEhBXQgKgQABgeQAGAHAHARQAHAQAAAFIAAATIgGAFQADgKgIgNgAhLAwQgEgHgDgLQgDgMABgHQAEgNAUgZIA9AHQgQAkgCAGIgBATIAAAQgAkPgeQgcglAAgZQAAgEAQgMQAQgNALgEQAQgBAOAFQAcAJABAdQgKAEgMALQgJAJgFAIQgHATAEAaQgOgOgVgKgAh3h2QAHgJACgIQABgHgBgbIgDgKIgGgOQAmADAaAFQAxALAAAcIAAAGIgLAlIhmgPg");
	this.shape_70.setTransform(8.1,-16.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BBC1C7").s().p("AgPFFIgDgMIAIgdQAHgXgEgMQAHADAkADQgHAwgHARQgHARgPAAQgKAAgFgMgAAoFMQABgDAJgwQAFgdAbgJIABAnQAAAbgPAOQgKAKgMAAIgGgBgABoD7IgDgbIACgSQADgOAAgNQAQAvAAAaIgEAJQgFAJgGAIQAAgGgDgVgAh5gTQAAgEALgHQALgIAKgEQAOgCAKAAQAFAAAEAKIAQAzQgMADgMAGQgCACgKALQgMAPgCAKIgfhTgAhyieQADgeAKAAQAGAAAHgFIAJgGIASgBQASAAANANQgNAagKAaQgKgGgGAAIgUABIgcALIgEADgAAMkYQgLgNgKgFIgIgDQAsgjAIAAQAMADAMAMQAFAEAMAQQgoAjgSANQAGgMgMgPg");
	this.shape_71.setTransform(8.5,11.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#777FC7").s().p("AhNDOIALgTIAPgUQAIgFAMgEIAfAyIgXAFIgQANIgPAPgAh3AjIACgVIABAAIAAAAQAFgJAagFIAWAAIALAAQACAAAAAGQgEAtAAAVQgHgBgXAEQgOADgTARQgCgdAAgfgAhEhPIgVADQAPgYAQgVQAggrAPAFQAMAFAGAIQAIANAKAKQgFAFgTAYIgSAZQgNgIgmgCgABNjGQgOgLgOgHIAjgZQAGAEALALQAPAQAEANIgbASQgFgIgLgLg");
	this.shape_72.setTransform(7.9,-1.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#83888C").s().p("AgsAzQgZgYAAgpQAAg5AyAAIAsARQAtAbAAA0QAAAcgTALQgOAIgaAAQghAAgWgVg");
	this.shape_73.setTransform(10.3,28);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#777FC7").s().p("AgoCbIAPgWQAJgGAOgFIAZgKIA4AcQgFACgQAOQgSAOgDAFQgDAHACARgAizAwQgTgbAAgMQAAgGAIgDIASgHQAogGAHAJQAkApASAPQgOABgPAIQgOAIgFAGQgLARACAGQgdgVgWgdgAhZh/IgXgPQApgUAYgJQAsgQAiAAQACAAAGAGIAJAMQAFAKAAALQAAAWgsAKIgqAJQAAAFgNAEQgUAFgGADQgJgagIgLgACGi4IgFgOIAkAAIAeAAQgCADAEAEQAJAlgXAHQggACgOAEQABgdgEgOg");
	this.shape_74.setTransform(-0.4,-8.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#83888C").s().p("AgnA3QgigZAAgzQACgVANgOQAagcAyAfQAhATAPAgQAHAOABANQAAALgRAOQgJAHgJAFQAAAGgPACIgXAAQgTAAgVgPg");
	this.shape_75.setTransform(12.8,13.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#BBC1C7").s().p("ABsEYIgDgOIACgbQAAgTgGgJQAWAAAXgGIAEAvQAAAqgXABQgOgBgFgOgACpEXQADgMAAgYQgBgagHgUQARgJAGgGQAMAqAAAOQAAAQgFALQgHAOgQAAIgCAAgADOCgQgFgOgFgWIgDgKQAMAIAMAdQAMAZAAAKQAAAGgDAGIgHAKIgNgwgAiQAJQAAgCALgRQAmgXAKAAQAoAbAVALQgIAAgOALQgMAKgEAEQgJATgBAHgAjRipQAXg2AZAAQAMAAAQAIQAKAFAEAEQAHAHAAAVQgdAtgEANQgRgFgmAHIgcAPQABgXASgrgAAoj1QgCgOgEgJIgNgTIBCgHQAGABABAGIgBAIQAEANAAATIgBAMQg3AEgBADQABgGgBgLg");
	this.shape_76.setTransform(2.2,1.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#83888C").s().p("AhIAtQgbgcAAgdIABgLIABgBQAFgZAcgSQAcgSASAEQAtgEAjAWQAmAXAAAbQAAArgXAcQgVAZgdAAQg/AAgkgmg");
	this.shape_77.setTransform(16.5,3.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#777FC7").s().p("AAACQQgJgJADgfQAGgMAHgLQAQgXASAAQAFABARAIIAlASQgNAIgNAQQgLANgGANQgDARABARQg0gVgDgEgAiRAvQgpgfgMgLIAOgQQAMgMAOgLQAWgQAJAAQAQAAALAFQAbALAiApQgpARgOAbQgFAOgCAPIgsghgACcheIgYgFQAJgNAAgVQAAgHgCgDIgDgGIgLgQIBDAKIAEAMQADAaAAALQABARgLABQgHgBgagFgAhVhhIgKgTQgHgNgDgEQgMgKgLgHIA5gJIAygJQAGABADAFQAEAIACACIAAAAIACADQAHALAAAPQACAIgIAHQgSALgwAAIgQAAg");
	this.shape_78.setTransform(-0.9,-13.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BBC1C7").s().p("ABrDiQgPgMgHgNIgCgKIAfAJIAZAGQAcAAAIgCQAJgBAMgIQADAUgQAOQgOAMgPAAQgZAAgWgPgADXDFQAGgTANgVIAJgSIACAXQABAQgHAPQgGAQgKAIIgIAFIgJADIAJgcgAEFCGQgKgQABgeQAGAIAHAQQAIAQgBAFIAAATIgFAGQADgLgJgNgAiEATIAAgQIAEgOQAPgVAVgKQAOgIAJAAQAGAAARAMQAZASAMAHQgPAEgOAMQgNANgFAPIgFAhIhHgtgAkPhtQgBgVAXglQAcgtAgAAQAGgBABAEQAAAFAUAFIAaAkIgEACIgMABIgRgBQAAAKAHAKIAGAKQgaAAgUANIghAdQgIAJgHAKQgVgXAAgQgAgbiuQADgPgKgiIgFgHQgGgGgEgCIA5gCQA9AAAKAUQAFAIgBAUQAAAMgDAKQhCgGgpACg");
	this.shape_79.setTransform(3.3,-6.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#83888C").s().p("AgqAcIgigOQgEgQAXgcQAcgiAnAAQAcAAATAQQAPALAFAQIAAAAQgXgGgIAUQgEAIAAAMQAAAKAJAIQgLAOgYAIIgnAMQgCgZgRgMg");
	this.shape_80.setTransform(3.5,36.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(47,50,59,0.314)").s().p("AgHgHQAIgPAVACIgTAmQgMABgMACIAOgcg");
	this.shape_81.setTransform(4.1,0.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BBC1C7").s().p("AhvFLQgFgFAAgKQAAgMAWgbQAagiAdgCIAEADQACACAAAHQAAAYgeAdQgaAagMAAIgKgBgAiaE0QgGgEgBgGQABgYAigeQAggbAQAAIAIAAIAEACQAEAEABAEQgJAFgeAjQgiAkgLAJIgJgEgABbDjQgWgRAAgFQAAgaApAKQApAJAAAdQAAAMgLAEIgNABQgMAAgYgRgAimDnQAGgHAQgLQAZgPAUgBIAMgBQgGAKgWAOIglAYQgIgEgGgJgAgkgLQALABAGgCQAUgBAJABQAHAAAMADIgBAvQgbgFgbAEIgSAFQgBguAJgHgAAmiHIgXgGIASgoQAWADAXAMIgSAmIgWgHgABokkIgUgHIAeggIAUADQAcAQAFAcQAAAHgOAMIgNAKQgEgOgggXg");
	this.shape_82.setTransform(2.9,16.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#777FC7").s().p("AiCDJQAAgGAFgBIAFABQABgDAFgCQAsgEAFADQATAHgCAuQAAgBgNgBIgOgBQgUADgVAJIgMAIgAh3BMQANg8ACgCQAJAAASgEQANAAALADQAIADANAFQgPAuABACQABAFgIAcQgKgDgPgBIgYgBQgNAEgJAEgAgYhCQgGABgKgDIgbAAIA0hQQAKAAAKAGIAVARQAPAOAAAFQAAAJgnAvQgVgOgFgCgABPjIQAAgFgGgDIgKgDIgQgFIAygqIALAFQAJAHAIAVQAGATAAAIQAAAHgQALIgRAMQgDgJgQgXg");
	this.shape_83.setTransform(11.5,3.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#83888C").s().p("AgxAhIgBgIQgBgCACgFQAKgTANgRIARgRQAJgKAKgEIAagHIAQAsIgJAGQgJAGAAAFQAAACAEAKQAFAMAGAIQgaAUgYAAQgwAAAAgYg");
	this.shape_84.setTransform(-23.3,30.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#BBC1C7").s().p("AkUDjQAAgFAJgGQALgJAQABIAQABQAqARgBAWQgegBgoACQgXgCAAgUgAhFDaQAJgLAVgHQAPgEAOAAQAKAAAHAFQAFASgNALQgPALgWAAQgPAAgQgXgAjfCvQgjgQAAgbQAAgKAKgGQAKgHAPADQAmAGAiA8IgRAXIg3gagAgIClQgLgLgSgOQgMgLgIgDQgEgBgGAAIAaghIAIAAIALADQAKAFAEAEQAIAPAKAJQAEAHgVAegAi6BPQgJgYAdAAQAxABAfBXIgUAGIgTAHQgzg2gKgXgABfgDIgTgRQgUgJgEAAIAug6IALAAIAIAAQABACADABQALAGAOANQANANABAFIgwA8IgRgQgADQi8IgXgLIAmgxQAMAGALAIIAMAQQAHANAGAAQAKAAgFAMIghAqQgDgIgggdg");
	this.shape_85.setTransform(-11.5,8.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#777FC7").s().p("AjLDPQAGgBAPALIAgAZIAAACQgSADgSAHgAh3CfQAAgGgFgCIgEgBQgNgKgRgGIBChVQAMACAPAGIATALQAFAFAJATIhHBagAAYgVIgWgRQgNgHgGAAIA5hMQADAAAUALQAKAFANAPQAKAMACAFIg5BIIgRgUgACNitIgPgPIgWgPIAkgvIAAAAIACgDIABAAQAIAAAPAFQAcAVAGAJQACAFACAFIguA7QgLgSgGgGg");
	this.shape_86.setTransform(1.7,2.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#83888C").s().p("AggA9QgNAAgJgIQgIgGgEgLIAAAAIgBgBQgKgNAAgUQAAgEACgGQAEgPAOgMIABgCQAbgXAwAAQAlAAAOATQAHAKAAATIAAACIABAMIgBAIQgBAXgSALQgYAQg4ABIgKAAg");
	this.shape_87.setTransform(61.3,-1.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#5F669A").s().p("AgiAOIgFgKIA/gZQAGAMAKAIIgHABIAAAAIgxAWg");
	this.shape_88.setTransform(50.5,4.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BBC1C7").s().p("AknCZIABAAQgPgFgNgJQgNgJgKgMIAAAAQgLgNgJgOIADgEIALgQQAPgTAUgPIAGgEQAEANAIAMQAKAQASAIIAAABQgOAUgCAWQgBANACAOIABAEIgLgDgAhTB0IAAAAQgHgQAAgOIACgMIAWgHIAAAAQAegJAcgMQAAANAHAPIACAKIAIAOQACADADACIADABIgfALIg6ASQgGgDgFgOgAD4AyQALgLAFgKQAMgCAJgEQgCAGgFAFQgKANgTAEgAENAHQAAgMgDgMQASAAARgEIABAIQAAAKgCADQgEAEgbAHIAAgEgAECgnQgKgPgSgLQAYgDAlgMIAggKQAUgFAKAAIACAAQAKAAABAYQAAAFgIAFQgKAHgZAHIgLADQglAKgMAGIgFgLgABxhIIABgpQAFgqASAAQALAAAGAWIAEAWQAAADgKAgQgXAGgSASQAGgPAAgFgAkqhCIgQgIIAAAAQgNgFgMAAQgNgBgMADIANgaIAAAAIALgSIACgBQAEgBACgDIADgDIABgBIABAAIABAAIAAAAIAQgCIAFABIAIACIAYAQIABABIACADIACACIgFAGIAAAAQgMASgKATIgDgCg");
	this.shape_89.setTransform(44.4,-2.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#777FC7").s().p("AhwC8IgBgEIAAAAQgDgNABgMQACgXAOgTQAgAIAhgCIABAAQAZgEAXgGIgBAAIAagFIAAAFIgBACQAAAQAIATIABACQADAKAFAGQgbAJgbAEIAAAAQgjAJgnAAIgBAAIgNAAQgNAAgNgCgACmBeQgHgOADgNIAAgDQAggPAfgRIAAAAIABAAIACgCIAAAFQAAAZAIARIhBAcIgFgLgAjrA1QgCghAKgdIAAgBIAEgMIABgBQAHgEAIgCIAIgBQAOgCAPAGIgBgBIAPAIIAFABQgKAaAAAgIgPAJQgSANgOAQQgJAKgHALQgJgWgCgYgAhqhgIgBgBIAAgBIgCgBIAAgBQgPgPgRgGIgHgCIgHAAIgKAAIgDAAIAHgJQAWgbAagaIACgEIAHAFIAAABIAEACQAXATAJAcQgVAUgQATIgBgBg");
	this.shape_90.setTransform(29.3,-5.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#83888C").s().p("AgXA5IgTgDQgNgCgIgIQgGgIgCgNIgBgBIgBgBQgHgOADgRIABgDQAEgQAPgMIAHgFQAJgFAKgEQAQgEAQAAQANAAAPADQAlAHAJAUQAGAMgDARIgBACIgBANIgDAIQgFAXgTAHQgPAHgZAAQgNAAgTgDg");
	this.shape_91.setTransform(60.7,16.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(47,50,59,0.314)").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_92.setTransform(19.5,-26.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#BBC1C7").s().p("AD3CrQANgIAGgKQAMABALgCIgJAKQgNAKgTAAgAgSClQgFgIgFgBIgDAAIgBgNIAAgPIADgJIACgFIADgCIABgBQAXABAUgCQgEAJAAAIIAAAKQABAMACAFIAAAAIAEAJIgoACIgBAAgAk8BjQABgCAAgEQgBgJAGgKIAHgJIAAAAQANgNANAAQADACAEAAIAEAAQAQAMAVAJIAYAJQgMAJgGAHQgHAJgEAKQgCAIAAAIIAAACIAAAGQgtgOgjgegAETCFQADgOgBgMQASADARgBIgBAIQgBAJgDADQgFAGgcABIABgDgAERBTQgHgQgPgNQAXABAngGQAvgGARACIACAAQAKACgEAYQgBAFgJAEQgNAGgjADQgmADgNAEIgDgNgACIAaIAIgnQANgoASADQAKACACAXIAAAXQAAACgQAbQgXADgVAOQAIgOABgEgAlkinIAAAAIABgBQAHgDAKAAQAFADAEgBIAAAAQALABALALIAAAAQAGAGAEAHQABADADABQgZAkgDAaIAAAAIAAAAQgNgGgMABIgUAAQgKABgEACIgBAAIgEADQAIgyAVgog");
	this.shape_93.setTransform(42.9,5.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#777FC7").s().p("Ag3DcIgMgDIgBgBIAAgBIgBgKIAAAAIACgLQACgHAEgFIABgBQAHgJASgLIACgBQA7ASBCgBIAGABIAAABIgBABQgEALABAFIAAARQACANADAIIgYAAQhDAAg/gOgADADjQgFgHgCgEIAAgBIgBgDIAAAAIAAgBIgBgJIAAgHQAAgEACgEIAFgKIABgBIAigGIAJgCQgEAVAEAQQACAKAFAJIABABIgEABIgtADIgBgCgAjECNQgxg2AEhIIAQgLIAFgBIAVgBQAJAAAIAEIAAABIAIADQAAA3AgAkQgOAEgOAOIAAAAIgEAFIgCACIgEAGIgHAPIgBADIgIgJgAiShnIAAAAIgBgBIgTgOIgDgBIgGgBIgGgBQgEgDgFAAIgDAAIAJgMIAAAAQAsg0ArgtIABAAIABABIAKAEIAIAGIACABIAEAEIABABIAAAAQALAPAAAbIgCAHIAAAAQgsAqgUAZIgJAMQgFgIgHgHg");
	this.shape_94.setTransform(28.1,-1.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#83888C").s().p("AgdA3QgZgVgJgXIgDgKQgEgNADgRIADgJIADgJQAHgQANgGIAAAAIAGAKIAAACQAGAKAIADQAJAEAMgEIABgBIAKgFIACgDIACgFQAFADAKAIQAQANAXAnQgHAAgJAFQgOAJAEAUQgFACgGAIQgEAFAFAPIgDABIgNAAQgcAAgSgPg");
	this.shape_95.setTransform(24.1,40);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BBC1C7").s().p("AAxEvQgIgPgCgJIALgCQAMAaAoAbQABAPgKABQgYgDgUgogAByE6QgogRgSggQgCgOAGgEIACgBQANAQAjASQAfARAVABQALARgPAIQgDACgFAAQgNAAgXgLgAB5EJQglgSgKgPQgLgPAQgFQBKAOAOATQANAUgLAIQgEADgHAAQgNAAgYgLgAgKB6IgCgDQABgKgDgUIgCgIQAAgXAQgOIAHgFQAQABAGAPQABAEgBAIQgBASgRAkIgBACQgCABgIABIgCAAQgGAAgCgDgAiNA8QADgDAAgDQAAgJAKgKIABgBIAAAAQANgNAOAAQAFAAAAgBQADACAEABIACAAQAKATANATIgoATIgEADIAAABIgCADIgGAMIAAACIgBADQgOgVgLgXgAinilIABgIIAEgCIAEgCIAKgCIAGAAQAOgBAGADIAJAIIgBACIABgBIgDAPIAAAAIgDAfIAAAAIgLAAIgBAAQgPAAgMADQgIADgHAEgAhrkmQgJgCgLAAIACgGIAAAAIAFgNIABAAQAFgOAIgMIABAAIABgBIAIgCIACAAQAJgBAIADQAMAEAKAKIAAABIAEADIgCADQgNATgLAVQgLgKgTgDg");
	this.shape_96.setTransform(23.1,20.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#777FC7").s().p("AgPEBIAAgBIAHgTIADgGIAhgSIABAAQADACAEgBIAPASIAAADQgXAOgKAVIgBAAQgDAHgCAKQgOgOgNgQgAA2D+IAAgBIAAABgAhTBfIAAgBIgDgXIgBgYIACgCIAEgEIABAAIAIgGQALgFAQAAIAAAAIANABQABAvARAuIAAAAIAEALIgDAAQgUAAgRAPIgEAEIAAgBQgHAHgEAGQgMgigGglgAgag9QgIgEgVAAIgCAAIAAAAIgBAAQgIAAgHACIAAgCQAKgnAOgmQAMAAAJABQATADAJALQgOAhgIAkIgEgDgAAsjQIgBAAIgBgBIgBgCIgCgBIgBgBIgBgCIgBAAIgBgBIgCgBIgCgCIAAAAIgLgGQgNgGgNAAQAQgaAYgVQACgDABgDQAHgCAGAAIAfASIAAABIAAAAIAHALIgcAfIgPASIgBgBg");
	this.shape_97.setTransform(14.4,7.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#83888C").s().p("AgnArQAAgGgQgSQgQgSgKgEQASgfAYgOQAUgMAaAAQAVAAAUAKQAjAQgCAiIAAABQgWgHgPAQQgPASAMASQgUAKgLACQgKACgqABQADgIAAgKg");
	this.shape_98.setTransform(-22.8,31.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#BBC1C7").s().p("AkHE9IgBgEQgCgBAAgGQAAgOAagWQAhgbAoABIACABQABAAAAAGQgBAQgdAYQgdAYgWAEgAgSEcQgNgLgUgeIADgRQAYAAAVALQAaAOABAbQgBAKgEAEIgDABIgKABQgNAAgLgKgAktEbIgDgNQASgdAegQQAbgPAcAAQAEAAAKAMQgWANhLA1QgIAAgJgFgAkkDOQAIgNALgEQAQgFApACIAMABQgKALgUAEQgeAJgRAHQgIgFgDgHgAABAdQgIgSgNgHIgTgEIgSgEIAbgqQATgFAUAGIAXATIAQAXIgkA3QgCgKgJgNgABziHQgLgNgLgIQgWgEgMABQAlggAKgKQAEAFAWACQAMAJAGAJIAPAcIgiAlQgDgKgNgOgAD6j+QgKgNgHgFQgTgJgMgCQAvggADAAIADgCQACgBAGAAQAEAAAUALQAPAeADANIgrAcQgDgHgJgLg");
	this.shape_99.setTransform(-11.9,10.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#777FC7").s().p("AjCDmQgIgDgPAAQgPAAgKABQAbg5Adg3QAJgCAKAAQADgBASAMQAHAFAGAIQAHAHgCgBIAOAdIgqBNQgUgOgSgGgAhLA+IgSgYQgZgGgPADIA3hEQAegIAOADIAPALQAOANAIARQgeAogeAqIgSgXgAAzhRQgKgNgLgKQgOgHgOgEQAPgKAcgbQAbgVAfANIAPARQANAPADAEQgkAfgkAhQgCgJgJgMgAC5jUIgZgQIAmgVIAaAOQADADAIASIAIAVIgpAXQgCgbgPgPg");
	this.shape_100.setTransform(-0.2,0.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#83888C").s().p("Ag0A2QgLgPAAgSQAAgaATgeQAXgmAgAAQAYAAAQAZQANAWAAAWQAAAigYAXQgWAVgaAAQgcAAgQgUg");
	this.shape_101.setTransform(-30.7,3.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#BBC1C7").s().p("AjuDsQgJgHgHgWIAJABQARAFAEACQAKAGAIAQQgJAFgIAAQgJAAgGgGgAjJDUIAJgBQAIACAUgMQAUgMABgHIAHAFIADAGQABACAAAGQAAAOgOAJQgMAIgMAAQgRAAgOgUgAkXDDQgEgFgCAAQgBgRACgJQALATACANQABAGgBADIgIgKgAiKBAIALADQAPAIAKAOQAKAOAAAOQAAAFgCADQgGAIgYADQAIgngWghgAinglIgbgFQATgeATgbQARgYACAAQAGAAAEADIALAHQAWAKAIAMQAEAGAAAFQAAAGgOASQgUAagJAPQgSgMgYgKgADBiMQAHgMAGgIQAEgIAGgcIABAAIgBgFIABgIQABgJADgCQAZAJAWAMQAQAIADADQgEAMgEAFIgDAEIgGgDIAHAEIgDAQQgCAIgGAAIgRAeQgcgPgcgNgAAHjEIgIgWIgDgDQAbgLAFgDQAJAAAigGQAEAIADAPQACASAAAQQgDASgHABQgjAFgVAHQgBgUgGgXg");
	this.shape_102.setTransform(-10.1,-8.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#777FC7").s().p("AjsCGIgXgBQgNAEgNAFQAThGAOAAQAHAAAJACIAJABIAdAOIAAgBIANAKIgUAwQgJgKgWgCgADVgFIAMgUQALgUAFgNQAFgNACgLIAaATQAPANgEAbQgJAigSAMIgtgcgAiYgaIgCgCIAAAAIgWgLQAeggAjgWQANgJAYgNQAHAFAEAIIAEANQAWAjggASIgeAQQgRALgFALQgPgQgQgMgABYg3QgZgJgWgCQAHgagDgdQgCgPgEgJIAWAAQA8ACARAOQAHAGACATQgCATgKAUQgIARgDAAQgPAAgVgHg");
	this.shape_103.setTransform(-4.9,-18.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#83888C").s().p("AgWA8QgYgKAAgQQAAgkgMgIQgEgCAOgTQAFgFAJgHQAJgGAFgCQAGgCAJgHIAGgHQATAAAOAJQAUANAGACQgMAMgJAOQgIALAAACQAAAEAJAJQAJANAJAEQgKAHgOAVQgKAOgPAAQgMAAgTgIg");
	this.shape_104.setTransform(-16.5,37.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BBC1C7").s().p("AjNFEQgIgDgBgEQADgPAbgbQAXgXANgHQAJAKAMALQgJAIgZAgQgQAVgMAAQgHAAgJgDgAj7D7QgMgHAAgLQgBgNAMgLQAYgXBCAEIABATIhNAuQgGgBgHgDgAgnC+QAFgLAWgVQAYgaATAAQAOAAAGAEQAHAEAAAMQAAAhhbAUgAjlCQQgLgJAAgQQAAgeAxACQAtADApAWQgSAOgfAKQgfAKgcAAQgJAAgHgGgAAKBIQgKgHgKgDQgXgDgMAAQAQgZAHgHQAHgIAHAAQAHAAAHADIAHADQAHAEAZAYQAAAKgVAXQgEgHgKgHgABvhfQgTgKgCgBIgegDIAagoQAfgFADABQATAEARAdQAAAKgYAbIgVgMgADIkNIgggLIAcguIAOAAQAGAAAFACIAKAFQAJAFAKAIQALAJADAFIgdAvQgNgMgWgMg");
	this.shape_105.setTransform(-7.5,18);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#777FC7").s().p("AiJEGQgFgGgbgLIgWgDQALgfAPgCQASAFAIAAQAKACALAFQAQAIAAAKQAAAKgfAaQAAgJgEgEgAhdCRIgggIIA6hdIAgABQAOADAJAFQAGADALALIhBBpQgTgTgOgIgAAhgTIgSgPQgMgCgTABIA4hdIANADIATAGQAHADANALIAPAMIg5BbIgRgRgACMi6QgLgKgGgDIgWgIIgKgCQAagpAOgQQAHgIABAAIAPAFQAUALAEAFQAEAFAKAVIgjA3IgRgOg");
	this.shape_106.setTransform(4.1,4.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#83888C").s().p("Ag3ARQAAgwASgXQANgRASAAQAQAAAWAYQAYAZAAAXQAAAigPASQgOATgbAAQg2AAgBg3g");
	this.shape_107.setTransform(36.4,52.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#BBC1C7").s().p("ABEGGQgDgLABgJQAAgIAHgNQAJgPABgGIAAgSQAAgEAVgQIACgBQAHAwgBALQABATgKATQgKAXgPAFQgHgIgDgQgAAHGFQAkgUAAg8IAJAAIARAAQgFBCgxARIgIgDgAgmF1QgFgEAAgDQAAgLALgPQASgaAOgdQADAFAOAFQAKADAAAGQAAAdgJAUQgMAagUAAQgPAAgJgGgAgFBFIgPg/IAUAEQAJgBAUgFIATgEIANA5IgWAIQgUAHgEAAgAgch3IgVgEIgQhGIAWADQARgCAKgEQAKgDAJgIIANBAQgHANgOAHQgLAEgIAAIgEAAgAhvmPQANAAAOgBIArgNIAPBIIgVAKIgWAIIgZACg");
	this.shape_108.setTransform(31,31.4);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#777FC7").s().p("AAfEsQAAgHgBAAIAWABIAXgGIAXgHIAMA2QgFgCgRgDQgTgDgGABQgMAGgKAHgAAeElIAAAAgAAbDDIgVgGIgShZIATABIAAABIALgCQAfgOACgCIADgDIAWBmQgFADgQAFQgRAFgJAAIgCgBgAgOgEQgRgCgGgDIgUhZIAYgCIArgRIAUBcQgHANgQAFQgIADgJAAIgEAAgAhTjVIgah1IAQgJQAPgDASAHQASAHAKANIATBZIgqAMIgUABIgIAAg");
	this.shape_109.setTransform(27.7,10.9);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#83888C").s().p("AgyA1QgQgPgBgSQAAgcAWgZQATgXAagJQAbgJAUAMQAUAOAAAlQABAkgZAXQgWAWgbAAQgbAAgRgRg");
	this.shape_110.setTransform(-22.8,27.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#BBC1C7").s().p("AimEpQgPgIACgPQAHABAagFQAagGAFgEQAFAHACAHQABAPgOAIQgKAGgMAAQgMAAgLgGgAjeEeQgJgNACgRQANADAHAFQAOAIAFAaIgJABIgBAAQgNAAgJgNgAj8DgQAAgGADgHIACgFQAHAWgCANQgBAGgCACQgGgMgBgNgAhVDdQAMgWAAgPQgBgQgGgUIANAIQAXAVgBAYQgCAVgZAAIgNgBgAgxAtQgKgTgNgGIgTgGIgSgEIAbgoQATgFAWAGIAXATIAQAVIgkA5QgCgKgJgNgAA/h3QgLgNgLgIQgWgEgMAAQAlgfAKgLQAEAGAWABQAMAJAGAKIAPAbIgiAlQgDgJgNgOgADGjuQgKgOgHgEQgTgJgMgDIA8giIABAAQAEAAAUALQAPAeADAMIgrAdQgDgHgJgLg");
	this.shape_111.setTransform(-6.7,9.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#777FC7").s().p("AioDgQgMgKgJgFQgGgCgNgCQgPgCgKAAQASgzAQgQQAJgJAOAAQADgBASAMQAHAFAGAIQAHAHgCgBIAOAeIgcAyIgRgNgAhUBLIgTgYQgYgGgPADQAvhJAXgHQAIgCAIAEQAKAFADAAIAPALQAOANAKARQggAogeAqIgSgXgAAqhEQgKgNgMgKQgNgHgMgEQAzgxAHgDQAIgDAgAKQAPAHARAdQgkAfgkAhQgCgJgJgMgACwjHIgJgIQgFgDgLgFIAQgLQAQgKAGAAIAaAOQAWAhgDAJIgpAXQgCgbgPgPg");
	this.shape_112.setTransform(0.6,-0.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#83888C").s().p("AAABCIhEgwQgEgvAVgUQAZgXAxAAQAOAAALADIgIAVIgEANQAOA2ATASQgjAkgVAAQgJAAgEgHg");
	this.shape_113.setTransform(-29.3,31.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BBC1C7").s().p("AhcDtQAAgrAbgVQATgPAVAAQALAAAFAJQADAFgJALIgjAqQgbAfgCAZIgNgsgAkxDUQgWgVAAgXQAAgFAHgHQAHgJAJAAQAPAAARAhQAPAcAKAkIABAOQgygmgJgIgAgjD1IACgDIgFAIIgCAEgAjpCOQgJgXAAgLQAAgPAJgMQAJgLALAAQAPAAAFAdQADASAAAoQAAAGgLAJIgPAKIgRgogAh3CNIgCgFQgDgHgCgWIgCgiQAAgGAGgDIAKgDQAFAEAGAHQAHAJAAAIIAABIQgZgPAAgFgAAYBJQgKgTgNgGIgRgGIgTgEIAcgoQAQgGAXAGIAAABIAIADQAOANAEAGIANASIgkA5QgDgKgIgNgACKhbQgLgNgMgIQgVgEgMAAIAvgqQAEAGAWABQAMAJAGAKIAPAbIgiAlQgDgJgNgOgAERjSQgKgOgHgFQgTgIgMgDQBAgugFAHIgDAFIAFAAQAEAAAUALQAPAeADAMIgrAdQgDgHgJgLg");
	this.shape_114.setTransform(-14.1,6.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#777FC7").s().p("AjiDeIAAhWQAPAAAOgBIAQgCQADAAASAMQAHAFAGAIQAHAHgCgBIAOAeIgRAeIgPgGQgRgFgPAAIgYANQgHAEgDAAQgFAAAFgIgAhrA6QgDgBgPgCQgQgCgGABQAvhIAXgHQAIgCAIAEQAKAFADAAIAPALQAOALAKATQggAngeArQgTghgRgOgAAlg9QgKgNgLgKQgOgHgMgEQAbgfAXgMQAXgMAaAKQAOAHARAdQgkAfgkAhQgCgJgJgMgACrjAIgJgIQgFgDgLgFIAQgLQAQgKAGAAIAaAOQADADAIASIAIAVIgpAXQgCgcgPgOg");
	this.shape_115.setTransform(1.1,-1.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#83888C").s().p("AgUA6IgHgCIgBAAIgHgDIgIgDQgLgFgIgGQgPgMADgSIABgDQADgLAGgMIAEgGQAQgaAggJIATgCIAGAAIAEAAQAUAAARAPIAJAJQAFAHAEAKQAGAQgFAPIgFAPQgGAMgLAJQgOALgUAAIgKABIgGABIgBAAQgJAAgLgDg");
	this.shape_116.setTransform(67.2,0.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#777FC7").s().p("Ag/C+IgBgBQgFgNgBgMQgCgYAQgXQA+AEA0gLIAAADIAAAAIAAABQgDAWAJATQAGALALAKIAAAAQgcAGgeAEIAAAAQggAFghAAIgVgBgAkOAoIgBgNIACgDIAEgDIAHgGIAGgEIAIgDIALgDIAUABIAAABIAIACIABAAIAEABQgDAxAqAhIAAABIgBAAIgBABIAAABIgBABIAAAAIgBABIAAABIgBABIAAAAIgBABIAAABQgMATgDAWQgBAMACAMIAAAEQhQgjgJhfgADECPIgIgFIgBgBQgKgFgGgIQgMgPACgYQAigKAigNQABATALANQAEAGAHAEQAJAFAKAFIABAAIAAAAIgIAEIg2AXIgKADIgBABIgDgCgAjXhjQgLABgLADIgEABQAZgwAoglIABgBIAKgKIANACIAMAGIAAAAQAVALAIAVIAAAAIADAGQgdAXgVAeIAAAAIgIALQgWgTgbAAg");
	this.shape_117.setTransform(34.7,-3.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BBC1C7").s().p("AkhB6IgCgNIAAAAIAAgOQAAgcAUgVIAgAHIAAAAIAgAGQgOAYABAZQABAJACAJIABACIABAFIABABQgmgDglgJgAgcBuIgCgBIgHgLIgDgFQgJgTAAgIIABgPIAKgDIADAAQAKAAAZgKIAFgBIAAAAIAAgBIABAAIADAAIABADIACABIAGAZQADAIAEAGIgCABIAGAGIAJAIIAGAEIgPAEIgGACIgIACIgEABIgGACIgbAHQgCgEgEgCgAg6AyIABAAIgBAAgAEWAfIAqgBIgJANIgsADgAEfALIAEgZIA0gEQgBALgJAHQgEAEgFACQgOAGgPAAIgIgBgAEfgiIgGgMIgBgDIgSgXIAXgFIAZgGIAigHIAkgHIARAKIADAQQAAAEgBAEQgFANgNADQgQAGgRACIgsAEIgMABIgFAAgABvg9QgggGgGgKIgJgOIAFgPIAGgDIAJgFIAPgBQAbgBATATQAIAHAGAKIgoAbIgIgIgAl/h4QAQgKAOgCQAUgDASAKIAAABIADABIAHAGIgKAWIAAAAQgIARgDAPIgDgBQgXgHgTAEQgPADgNAJQACgiAOgfg");
	this.shape_118.setTransform(47.7,1.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#83888C").s().p("Ag9BHQgcgRAAglQAAgoAYgeQAZgdAhAAQAegBAfAaQAkAeAAAuQAAAbgjAUQgfARgcABQgjAAgWgNg");
	this.shape_119.setTransform(59.6,-28.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#BBC1C7").s().p("Aj3DUIgJgRIgBgFIAAgIQgBg2A8gCQgCAMABASQABASAEALQAAADALARQgrAOgMAAQgGAAgDgHgAgSBxIgNgNQgFgHAAgMQAAgPAFgHQAJgNAhgWQgBATAEAKQAFANAPAOQAJAFAJAEIg4AhQgEgCgKgHgAj6BQQgNgEgUADIgcAGQAmgsgCABIgDABQAEgCAEgHQAIgGAUAFQAQAHAHAHQAFAGAFAOQgCABgRAdQgJgNgNgEgAEiiAIACgEQADgGADgJQAOAUAAAOQAAAQgKAJgABMh4IgEgPQAAgSAMgNQANgRAVAQIgRAkIgPAiQgFgIgFgPgAEAimIgVgTIgFgRQATgGAQAQQAQAQgCASIgCAMIgVgUgACzjaQAHAAAJAFQAOAHABANIgLAAQgIAAgUAEQgVADgNAFQAAglAqAAg");
	this.shape_120.setTransform(40.1,-19);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#777FC7").s().p("Aj9A8QAAgnALgJQAJgGAagFIAaAAQATAEANASQgGADgaAIIgdALIABAEIAHAFIATgCQgIAZAAAUQAFAPAHAOQhKgBAAhBgAhSBhIgGgLQgFgTAAgKQAAgXAWgMIBlgxIgBARQAAASAUAXIAMAKIgKAGQAHAAiFA6gACYgSIgMgGQgPgNgDgFQgDgGAAgOQAAgRAVgQIAsgeQAPAVAIAHQAFAEAOAIIAIADIAUAEIgwAiIgqAdQgGAAgGgDgAiOhGIgPgGIAugoIAJAHQAGAIAUAgQAAAHgQALIgQAKQgNgXgVgGg");
	this.shape_121.setTransform(31.4,-9.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#83888C").s().p("Ag2A8QgfgZAAgkQAAghAdgYQAegZAmAAQATAAAaAWQAeAZgBAdQgBAsgEALQgPAkg7AAQggAAgdgYg");
	this.shape_122.setTransform(117.9,11.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#777FC7").s().p("AE8CmQgDgLgBgQQAFgdAFgJIBvgBQgCAXAIAZQALAXAJALQgmADgzABIgDAAQgvAAgEgUgAAqCVQghgGgJgMQgGgJAAgQIAGgcQADgMAFAAQAEAAAEACQAHADAnAGQBvAPAcACQgHAUgEAWQABANAFAWQhagKhAgMgAimBZIg2gWQgcgMgagUQACgQAEgOQAOgRAIgGQAGgEAHAAQACAAA1AdQA5AfAeAAIgOAUIgLARIgDAPIABARgAnKiXQgBgHAEgGIAGgKQAMgLAMAAQALAAAYAcQAqAvAXAVIgcAYQgHAQgDATQgtgsgyhNg");
	this.shape_123.setTransform(63.8,-0.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#BBC1C7").s().p("AHfBlIATgIQgGAXgJALQgJAKgPABgAA0BnQgDgDAAgJQAAgLgCgGIABgTQAAgJAIgIQAEgEAAgCIADABIBJAEQgEAOgEAYQADAeAGALQhLgCgKgLgAHiAtQAAgYgCAAIAJgOQATASAAANQAAAJgGAKIgLAPIgKAIQACgLgBgYgAkFAyQAAgNgCgKIADgJQAEgJAMgMQALgMACAAQAMAAAGACQALAGAaAHIgNAmQgBAYABAJQg0gNgUgIgAG3gVQgbgTgEgCIAQgIIALgDQAQAAALAIQASAMgIAaIgCAIQgDgBgcgVgAFWg/QAigXAIAoIglANQgfAMgEACQgGgVAkgXgAn0hGIgFgFQgCgCAAgGQAAgNAGgRIAQgPQALgJACAAQAGAAAOANQAXATAKAGIgHAFIgXAaQgFAOgDAPQgDgCgDACIgDAEIAAAAQgHAAgbgjg");
	this.shape_124.setTransform(80.2,5.7);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#83888C").s().p("AhjAnQgQgUAAgdQAAgWAKgRQAMgTAVAAQBuAAAwAXQAeAOAAATQAAAGgkAfQgpAngcAAQgFAAgIACQgKADgFAAQg5AAgZgeg");
	this.shape_125.setTransform(49.3,17.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BBC1C7").s().p("ADiD0QAQgWARgaQAhg0AAgYQAAgFgEgHQgEgIAAgFQAAgNAJgCQAJgBAMAIQAdAUAAAkQAAAlgmArQgkApgYAAQgTgEAAgQgAB4DNQgXgJAAgPQAAgGAEgGIADgFQAmAOAMAAQAHAAArgTIgIAOQgKASgRAKQgOAJgMAAQgMgBgLgEgADPC3QALgQABgFQAGgOAPgQIARgQQAIAVgbAgQgYAdgYAJQAHgHAKgRgAhiBOQABgdACgHIALgjQAOgLAyASQgKAOgLAWIgJAhQABgFgxAAgAlWhOQAIgPAVABQAVABAWAIQAPAGAGANIgvAXIgYAagAjVi0QgEgVgPgPIgIgGIgLgIIAwghIAyA3Ig4AsIgEgQg");
	this.shape_126.setTransform(32.2,9.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#777FC7").s().p("AB0DCQADgQAEgQQAEgGAIgRQAIgOAGAAQAKAAAiAHQgRAZgDAJIAAAWQAAAEgBADQgCADAAAHQgagGgcgFgAABCyIgCgBIgegIIAAAAIgOgEIAAAAIhvg5IASgZIAtgXIBcAeQAtAPAJABIgWAqQgBARAAAUIgdgHgAihgFIgfAEQATgwAigkQAIgKANgEQALACAEAIIAeAsIgjAtgAgmiiIBFgqIAFADQAJAFAKAOQAKAOACAMQgCAHg5Apg");
	this.shape_127.setTransform(17.5,-1.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#83888C").s().p("AhDBMQgYgKgSgqQgNgkAAADQAAhEAmgXQAigTAyAUQAxATAkAsQAmAsAAAxQAAAYghARQgaANgTAAQghAAhPgjg");
	this.shape_128.setTransform(77,-15.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8E939A").s().p("AAAAAIABAAIgBAAIAAAAg");
	this.shape_129.setTransform(63,2.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BBC1C7").s().p("AjFDSQgYAAgLgDQgSgFgGgMQgOg7gDgJQgEgJASgBQASAAAeACQACAIAWBDIAAAAIAMAVgAAkCWQgSgNgQgaQgPgdgBgYIBtgtQAFAcAHASQALAYAVAhIAQAUIg1ASIgoAPgAnEBUQAEgLADgQQAHgNAbgQQAVgJAMAAIAcACQADgEAAAKQAAAGgFAKQgHALAAAEQgBAGgIAEIgSAIIgQAHQgHAFgLALIgXAZQgGgNgDgbgAGqgyQAAgIAEgQQAOATAJAjQgCARgKADQgNgjgCgPgACEh0QgJgUAAgLQAAgFAFgNQAGgQAHAAQAOAAAbARIgTAnIgRAlQgGgJgIgTgAGKhcIgUgVIgYgYQgNgPgFgPQAjAKALALQAPAOAKAmQgBAFgDAAQgCAAgDgDgAD/iqQgvgGAAABQADgPAKgKQAIgJAGAAQAXAAARAHQAVAJAFAVIAEAKQgBgCgxgGg");
	this.shape_130.setTransform(47.3,-11.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#777FC7").s().p("AhaCJQgHgJgKghIgIgjQAQgDA3gPQBCgSAWgLQARA2ALAPQAHAKAOANIAYAUQgxAOhCAKQgrAHgjADgAkwCAQgtgUgGgRIATgZQANgMAHgFQAVgPAVAAQABAAAkAVIATAHQAIAFAAAIIALA/IAIARQg8gDg1gYgAD1BSQgCgBgEgKIgFgNQghgwgMg1IAxgXQAiA9A4AaIAiAMIgwAVIg1AWIgPAGIgBAAgAkehuQAggVA7gaIACgBQADACARANQAQANADAEQgUAQguAqQgjAggDAAQgKgEgLgCQgXgGgSACQgTAHgWAQQAQgvA7gog");
	this.shape_131.setTransform(39.5,-6.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#83888C").s().p("AhiBBQgLgGgHgHIgNgXIgBgMQAAgoAjgeQAjgdAxAAQAtgBAsAaQA1AeAAAuQAAAfg6AUQgqANghAAQg+AAgigSg");
	this.shape_132.setTransform(98.2,-1.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#BBC1C7").s().p("AjFCcQg/gUAAgDQgBgIAFgOQAEgJAGgJQAMgQAOAAQAKAAANAFIBFAcIgJAoIAGAagABMCbQgTgJgLgTQgDgGgDgHIABAAIBCgdIAwAuIAYANQgRAGgRAJQgRAJgRAAQgTAAgQgNgAnZhmIAYgJQAUgGAUgDQAWAqAVAeIgkANQgWAMgGAGgAG5hQIAEgEQAFgGADgJQAHAIAIAOQAGALAAADQAAAFgEAGQgDAIgIAEgACEhGQgGgLAAgGQAAgSAQgNQAUgRAeAQIgXAjIgXAjQgHgIgHgNgAGfhqIgTgNIgYgPQgNgJgEgLQAdgCAPAIQAUAJAGAdQgBAFgEAAIgFgBgAENirQApgNAMAgIAEAHQgygCg4AOQAKgaAngMg");
	this.shape_133.setTransform(67.9,3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#777FC7").s().p("AgGDUQgLgDgEgOIAIgrQAwAMAzgEIAhgFIAEALQAFAKAGAIIANAOIAYAPQguAMgsAAQguAAgpgNgAEkCpIgIgDIgKgFIg0gtIAAgFIAzgvIALAKQANAJAcAHQAiAJAPAAIAeABQgIAIgwAhIgvAeIgJgCgAkJBiQgtgqgMgVQAKgIASgLIAWgJQAKgDAGAAQAFAAARAVQAWAbAIAHQAWATAnAZQgJADgLAOQgJAMgCAHIgGAXQgjgRgygvgAmMiPQgHgqAAghQAAgGAEAAIAIAAIAaAEQAJABAFAHQAEAHAdBqQgcAFgOAEIgVAJQgIgZgHglg");
	this.shape_134.setTransform(58.1,-0.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#83888C").s().p("AgWA5IgcgLIgNgHQgHgCgMADIgBgOQAAg/A4ggQA5giA2A2QghAIAAAfQAAANATAQQgTAhg4AfQgBgSgQgIg");
	this.shape_135.setTransform(-22.2,30.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#BBC1C7").s().p("AjVFQQABgVASgmQAXgvAbgBIAFACQADACABAHQAAA0gnAtQgQASgKABIgCABQgLAAAAgVgAkEFXIgJgCQgCgGABgKQACggANgdQAZg6A0AKQgGAQgRAWQgQAVAAACQgOAwgIAMQgDAHgKAAIgIgBgAklEJQgDgDAAgGQAAgOAhgXQAYgSAXgKIACANQgOAFgaAeQgZAcgLAAgAgICnQgYgNAAgMIAAgHIACgFQAbgFAXABQAxAAAAAbQAAANgLAJQgIAGgHAAQgbAAgYgOgAgFgHQgKgSgNgGIgTgGIgSgFIAbgqQATgFAUAGIAXATIAQAYIgkA2QgCgKgHgLgABritQgLgNgLgHQgWgFgMABQAlggAKgKQAEAFAWACQAMAJAGAJIAPAcIgiAlQgDgKgNgOgADykkQgKgNgHgFQgTgJgMgCQAvggADAAIADgBQACgCAGAAQAEAAAUAMQAPAdADANIgrAdQgDgIgJgLg");
	this.shape_136.setTransform(-11.1,14.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#777FC7").s().p("AilDeIgWgJQgggCgQADIAqhQQAIgCAKAAQADgBASAMQAHAFAHAIQAHAHgDgBIAOAeIgWAoIgVgKgAhSBQIgTgYQgZgGgOADIA3hEQAdgIAOADIAPALQAPALAJATQgfAogfAqIgRgXgAArg/QgJgNgMgKQgOgHgMgEQAOgMAcgbQAZgTAgANQAPAHAQAdQgkAfgjAhQgDgJgJgMgACyjCIgKgIQgEgDgLgFIAmgVIAaAOQACADAIASIAJAVIgpAXQgDgbgOgPg");
	this.shape_137.setTransform(0.5,-1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119}]},1).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AlAFtQgPgHgBgVIgagNQgPgHAAgQQAAgXAlgjQgJgBgHgGQgIgGAAgIQAAgSASgOQAXgRAtAAIAoAAQARAAAFgHQAMgNAbgQIAZgNQAUgqAZgsQA2hbBAhXQAbgkCAhiQB9hfAPgBQAdADAXAnQAXAngDgBQgDgBhuBSQhtBShdCGQhbCIgDAJIADAIQALAzAXAUIAmAgQALAMAAATQAAAPgHALQgNAVgfAAQgPAAgPgPQgJgJgWgfQgCACgDgDQAAgBgBAAQAAAAAAABQAAAAAAABQAAABAAABQAAAHghAHQgeAFgbAAQgQAAgWgCIgOASQgJALgGAFQgUARgIAFQgRAKgUAAQgYAAgLgGg");
	this.shape_138.setTransform(-11.2,10.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AigFxIgFgGIgNABQgNAAgHgJQgHgJAAgOQAAgNASgfQgKACgHgGQgIgFAAgOQAAgZAtgPQAugLAEgDQAYgNAEgiIAAhIQAAhIAGgoQAMhLAmhEQAjhDA9hIQBEhQAcAAQAbAAAPAkQAMAZAAAWIAAAEIg2A1Qg5A4goBTQgnBSAABFQAABAAMAZQAJAPAdAkQAFAHAmARQAdANAAAhQAAASgTAJQgOAIgNAAQgDAAgRgLQgSgLgLgJQgOANgYAKQgcAOglAHQgcBMg1AAQgFAAgVgNg");
	this.shape_139.setTransform(5.4,14);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("ABnC2QgKgRgCgTQAAgHgLgNQgSgUgOgXQghAAgvgFIiOgfQhLgYgmgnQghglAAgtQAAg7AigdQAkgdBLAAQBZAKAtAIQAqAHA2ATQAvARAVANQABAFAAAKQAAAugJAPQgIAMgWAAQgbAAgMgEIgXgJQgugSijgQIAIALQAHAHAfAPQAdAOAGABQAJACBNAIIBLAHQAKAABKgIQBNAAA3AxQAwAsAAArIABASQgBAKgHAAQgKAAgNAYQgUAigFAHQgOAQgaAAQgHAAgNAHQgOAHgWAAQgsAAgWgigAkrhzIACgBIAAgBg");
	this.shape_140.setTransform(8.2,-16.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgeFiQgGgMAAgMQAOgpAAgXQAAgFgOgQIgQgSQgJgMgDgeIgCgdQgdgxgQgjQgehCAAhJQAAhNAohBQAzhSB8hUQAaAFATAXQAQATAAARQAAAHgDAEIgDAEQhhBBgsBPQgeA0ACBAQADA+A6A4IBIBCQAbAsAHARQAPAfAAAiQAAAegqAXQgGADgFAMIgGAOQgJAPgYAAQgGgBgGgCIgIgCIgMAFQgKAFgFAAQgWAAgLgWgAh5hgIABAAIAAAAg");
	this.shape_141.setTransform(8.3,9.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("ABTEMQABgzgBgJQgTgGgKgIQgPgMgVgrQgEgKgtgZQhFglg/gvQhUg2AAhKQAAhIBIg0QA9gtBtgaQA9gHA3gCIAAgCIA7AAQAaAUAAAYQAAAkggAJIiRAXQhEALghATQgsAZAAAtQAAASBAAoQArAcAmASQAAAXBbATQAHABAZARIAkAYQARALAYAdQAdAlAAAZQAAAXgKAPQgSAcgJATQgCAHgjARQgiASgMAAQgoAAgFgvg");
	this.shape_142.setTransform(2.1,1.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("ABYDxIgUgWQgFgHgDgPQgCgQgDgEQgXgqgyggQgcgRgmgRQhYg2gfgVQhWg+AAgoQAAhRA/gjQA/giCTAAIAmACQAgABAAgBQBdAYAHAEQATAKAAAmQgBAagWAPQgRgQjBAAIgoADIgxAGQAZAjBdA+QBVA3AOAAQAFAAAPgEQAPgCAFAAQBOAAA4AxQAwAsAAArQAAAYgOALQgSAOgFAQQgJAegVAJQgKAEgaAAQgEAEgHAEQgPAHgWAAQgdAAgWgSg");
	this.shape_143.setTransform(3.6,-6.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AigFxIgGgGIgNABQgNAAgHgJQgGgJAAgOQAAgNASgfQgKACgHgGQgIgFAAgOQAAgZAsgPQAvgLAEgDQAYgOAEghIgBhIQAAhIAHgnQAMhNAlhDQAkhDA9hIQBDhQAdAAQAaAAAQAkQALAZAAAWIABAJIgCAGIgEgCQgJgFhABQQhABQgUArQgUArgEAYQgEAWAAAvQAABAANAZQAIAPAdAkQAFAHAmARQAeANAAAhQAAASgTAJQgOAIgOAAQgCAAgRgLQgTgLgLgJQgNANgYAKQgcAOglAHQgcBMg2AAQgFAAgUgNg");
	this.shape_144.setTransform(5.5,14);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("Ai3EvIgjgOQgKgDhAAFQgRAAgIgOQgGgKAAgIQAAgRALgLQALgNASAAQAtAIAbARIAEgJQhigcAAg1QAAgMALgKQALgLAOAAQAUAAAuAmIAUAZQALAQABgLQgygxgIgTQgHgPAAgJQAAgQAJgKQAIgIALAAQAdAAAVAWQAXAiARAWIFanBIAJgBQApAAAaAeQAUAVAAAOQAAAGgBAAIgCAFIhoCDQhEBbhNBeIhlB/QAIAFAGAJQAGAHAAAEQAAAYgdALIg0AUQgPALgMAFQgQAGgRAAQgJAAgYgIgADvkfIAAAAIACgDg");
	this.shape_145.setTransform(-8.2,6.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AkBDPIAAAAIgDgBIgBAAIgZgGIgBAAQgRgHgPgKQgQgKgMgOIAAAAQgOgRgKgTQgSgggDglQgDglAMghIAAAAIAFgQIAAgBQAKgbAOgZIAAAAQASggAWgcQAXgcAagaQACgDADAAQADgFAJAAIACgBQAFgBADACIAJAHQAiAaAKAoIAAAFIgDAEQgiAggUAfIAAAAQgNASgJAUIAAAAQgQAfACAmQABAQAJAPQAJAMAPAGIAAAAIAIACIAAABQAfAIAfgDQAZgDAYgGIAAAAQATgDATgFIACAAIAbgJIAAAAQAjgLAfgPQAjgRAjgTIAAAAIARgKIAAgBQACgDAEAAIAAAAIAFgHIAFgTQAFgYAAgZIAEgrQAAgJAJgFQAJgHARAAQAUAAAIAdIADAeIgBAHIgCAHIgDAOQAQgBAQACIARAGQAMgFAogMQAhgLAXgEQARgEALgBIAEAAQARAAAFAUIACAVQAAAHgTANIgOAJQgLAHgMAFIgMACQADAEAAAJQAAANgKAMIgDACQgBAUgPAPQgZAag2AAIAAAAQgZAHggAAQgOAAgLgDQgLAHgLAEIAAAAIg3AXIAAABIAAAAIgBAAIgBAAQgaAMgeAJIg6ASIAAAAIgBAAIgBAAIgEACQgjALgiAGIABAAQgnAJgpAAIgBAAIgMAAQgSAAgRgCgAEEBPIADAAIgBgBIgCABg");
	this.shape_146.setTransform(43.1,-5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("ADOD+IgBAAQgZADgfgGQgRgDgNgHQhJAJhGABIAAAAQhaAGhYgTIAAAAIgQgEIgCAAIgCgBQhQgVg0g7Qg4g/AHhTIABgLQAIg8AZguIAAAAIADgFQALgTANgQIAAgBQAug3AugvIAFgDIAFAAIAMAEIAAgBIABABQATAIALAOIAAAAQAPAUAAAkIgBAEIgCAIIgCAEIgDADQgrAqgTAYQgsA2gBAgIAAAEIAAACQgBBUBSAkQBQAiBYgCIABAAQA/AGA+gMIABAAIAUgFQAFgKAKgKIAIgSQAKgXAEgYIAMgqQABgJAJgEQALgEARADQATADADAeIgCAeIgCAHIgEAGIgFAOQAPABARAFIAOAJIA2gHQA9gIAbADIADABQARADACAVIgCAVQgBAHgWAJIgPAGQgTAHgTADQADAEgBAJQgDANgNAJIgDACQgEAUgSAMQgTAOggAAQgOAAgRgDgAD6DuIACAAIAAgBIgCABg");
	this.shape_147.setTransform(42.4,-1.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAuFvIgGgKQgOgYgEgRQgZgBgXgOQglgXgKghQgCgIgBgJIgBgIIgDgCQgCgEAAgDQgzgsgcg+IAAAAQgWgygIg1IABAAIgEgYIgBgTIAAAAQgCgzALgyIAAgBIAAAAIAAgBIABgFIADgIIACgJIAAAAQAOg1AVg0IAGgOIAAAAQAGgPAIgOIAAAAIAJgPQAUghAegbIADgCIABgDIAAgBIAAAAQACgEAFgBQAsgKAVAkIAAAAIALAVQABADAAADQgBADgCACIgNANIggAoIAAAAIgGAIIAAAAIgFAHIAAABQgoA7gPBGIAAAAIgDASIAAABIgDANIgCAdIAAABIAAAIIAAAAIAAABIAAABQgBAxASAsIAAAAQAOAnAbAkIAIAKIABgGQACgUAOgMQAFgEAHgDQAPgIARALQAOAKAFAOQAGAWgWAnIAEADIAAABIAAgBIARAOQAZAXAYAyQAJADAQABQAuAJASAgQARAfgXAPIgBABIABACQAQAcgYAOQgTALgngNQAIAYgYAGIgFAAQgYAAgagkg");
	this.shape_148.setTransform(23.2,17.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AkXFlQgoAAABgeIgXgKQgNgFAAgPQAAgKAKgQQAKgRANgHQgKAAgFgFQgGgFABgHQAAgQAOgMQATgPAoAAQAgADAHgCQAJgCAZgXQAMgLAMgXIAYgyQCckiEQiRQAfABAVAVQAVAWAAAlQABAIgDADQgEADgaAOQgcAPg0AqIg0ApQgkAahYB3QhXB1ggBBQAEAGAIAXQAJAYABACIAfAZQARAOAAAaQAAAMgNAKQgKALgTAAQgOAAgNgNQgJgIgSgZQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBQAAAAAAAAQAAAAAAAAQAAABAAAAQgBABAAABQgbARgxAAQghAAgDABQgFACgRAYQgNASgZAGQgKADgJAAIgDAAg");
	this.shape_149.setTransform(-9.1,9);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AkgDzIgTgZQgWgQAAgmQAAgZAphMQAGgZAJgZQARgvAggrQA3hGBCgyQAhgZAtgUIAZgIIAigIQAPgDAIAAQBbABBdArQBZApAAAiQAAAcgVAhQgSAdgKgBQgngXgvgXQhhgwgvABQg8AAgxAnQg7AxgxBuQAnAEAPAdQAIAOAAASQAAAMgNANQgRARgXgIIgCADQgDAFAAAGIAJALQAIALAAAPQAAAJgIAPQgLAUgRACIgmAAQgGAAgLAHQgLAGgFAAQgWAAgOgSgAiDh8IgBgCIAAAAg");
	this.shape_150.setTransform(-7.1,-8.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("Aj6F4QgEgHAAgQQAAgGAcgfQAegiARgHIgBgGQgLAHgZAWQgaASgbAAQgNAAgMgRQgKgOAAgJQAAgYAhgUQAlgXAxAHQAEgIABgIQgKAAgsANQgRAAgNgMQgSgOABgbQAAgWAQgLQAQgMAgAAQAnAAArAVQALAGAHgEIACgBIgDAFIADgFQAJgHANgTIAMgbIEonTQACgDAGAAQAeAAAWAUQAVATAJAdQgHASgkA0QgkA1gIAQIhEBtIh2C2IgfAvQACgBAFgHIgEAHQAXgHAPAQQAKANAAAKQAAAfgqAVQgSAKgcALQADAOgbAYQgZAVgNADQgIACgWgBQgTABgHANQgMAYgLAKQgPANgYAAQgZAAgJgLg");
	this.shape_151.setTransform(-5.2,13.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ABNHuQgLgIgBgZQgMAPgPgCQgGAAgNgEIgRgFQgsgIgBgYQAAgaAZgaQAVgaAAgNQAAgFgDgRQgEgRgBgFQAAgUAGgZQAFgTgFgxQgBgKAAgBQgCgBgBgKQgOg7gHgmIhKkxQgti3AAgmQAAgDAUgQQAVgPANABQAMAAAUgGQATgGARBoQASBpAWBjIAtC2QARBNAOBPQAKAxAOAaQAOAbAEAaQAEAbgCAZQgDAZAEAcIAEAdQAAAsgIAWQgKAfgcAAQgPAAgGgGgAgIggIAAABIAKgCg");
	this.shape_152.setTransform(29.3,24.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AkHFDQgFgFgOgbQgPgfAAgOQAAgMAHgRQAHgSAJgNQAHgIAVgTQASgPAGgMQAvhfAsg+QBChiBUhNQA9g5BAgpQBSg0AdAQQAWAMAIALQANASAAAgQAAACgcATQgcASg8AsQg8ArhiBxQhgBvgTBHIASAVQAMAQAAASQAAAngwAAQgKAAgNAJIAHAPQACAFAAAHQAAAWgRAOQgPAMgTAAQhQgHgJgIg");
	this.shape_153.setTransform(-3.4,7.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AkWEZQheg7gBg0QABgTAHgQQAIgSANAAQAgAAAVAkIAbAvIAHgIQgQgRgKgeQgJgZAAgKQAAgeAQgQQAOgQAXAAQAQAAAMAVQAOAbgEAzQAAgBAdABQgDgKgDgUIgEgVQAAgWAMgSQANgSATAAQAKAAAHAFQAKAHAEAOIADgIQAfg3A7hHQAxhCAegbQC8ipAzAAQAWAAAUATQAbAYAAAnQAAADhFAyQhFAygxApQgxAqhJBiQhIBkg5BsIgEAIIgCADIACgCQgTArgYAUQgYATgfAAQgeAAhRg0gAAJABIgIgDIAAAAIAIADg");
	this.shape_154.setTransform(-11,6.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AksDDIgBAAIgBAAIgBgBQhpgkgMh0IgBgRIAAgDQgBgxAVgvIABgCIAAAAQAbhEA2gyIAAAAIAOgNQADgDAEAAIALABQACgBACACQAMACALAGIAAAAQAcAOAKAdIAAAAIAFANQABADgBADQgBADgCACQgeAXgVAeIAAAAIgOATIAAACIgMAbIAAABQgKAUgCAPIAAABQgGAuAtAeIAjAIIgBAAIAuAIIABAAIAAAAQBLAFA7gQIACAAIAYgGIABAAQAZgFAWgHIACgBIABAAQAogLAogQIABgDIACgGIgBgCIADgKIACgBIAAAAIgBgCIgHgGQgGgFgHgCQgLgDgIgFQgIgGgCgHQgGgLgBgNQABgaAdgKQAvgFAiAgIAHAHIAIAMQAMgFANAAIAGgBIAVAEIApgGQAigEAVgFIAQgEIApgJQALAGALAIQAPAKACAUIAAAGQgBAIgEAEQgDAHgHAGQgIAGgKADIgbAJQABAWgOAQIgHAJQgCAWgRANIgMAGQghAHgigCQgPgCgQADIgKABQgSABgQgEIgBAAQgrAZgwAPQhWAehcANIgBAAQgjAFgjAAQhBAAg/gQg");
	this.shape_155.setTransform(47.7,-3.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AlCDUQgYgWABglQAAgWAQgfQAUgkAkgjIAxgzQAagYAOAAQALAAAWAZQAYAZAAAVQgGADgMAMQgYAXgdAvQBEgRB4hFQBxhAAAgNQAAgKgSgWQgSgVAAgXQAAgnAUgPQAQgOAeAIIALgZQASgZAZAAQBlAaAMAOQAOASATATQANARABAfQgTAvgbAgQgcAggiAIQgjAJhLA0IhTA6QhQAwiSA6QgkAKgKAAQhCAAgegcg");
	this.shape_156.setTransform(38.6,-19);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AGEDNIgRgLQiCAPjlgnQiLgZhigaQgZgHhOglQhNgmgTgOQhRg4gwhFQgYghgHgXQAAgTAOgRQAQgUAVAAQAYAAADACQAFAIALAKQAMAMAQAWIAPATQACAAATATQAWAXAIAFIAuAjQAfAUARAKQAQAJAuAUQAtASBaAUQBaAUBEAHQAzAED2AAIABgLQABgMgDgPQAAgfAegVQAXgQASAAQALAAAHAHIAUAXIATgHIAOgFQANAAAQALQAWALAIAYQAEAJARAYQAOAVAAAKQAAANgDASQgEASAAAHQAAApgaANQgdAOhcAAQgYAAgTgKg");
	this.shape_157.setTransform(74.3,0.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("ADIEhQgJgVAMgPQgCgEgMgCQgMgCgJAAIgeALQgnAAgTgVQgNgOAAgNQAAgHACgGIAGgNQgJgBgUgVQgUgVgEgBQgSgEgjgFIg0gGQgOgBgegHIgbgHIhTgbQgqgNgjgcQgPgNgKgSQgPgcgGgcQgFgZAGgYQAFgWAMgRQAYgiAegeIAfgcQBhhTAmAAQAMABATARQAVASAHAZQAHAZhDAoIgfAUIgTAOIgeAYQgJAHgMALQgLAMgIAPQgHAPAHAKQAZAcBAANQBeAoA7ACQA9ABACgBQAEgFAHgDIAkgGIApADQAvAGAoAMQB+AoAABbQAAA0gyAxQgrAsgbAAQggAAgLgVgAi4BTIgBgBIgNgEIgBAAg");
	this.shape_158.setTransform(32.8,6.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AmnC4QgzglAAg9QAAghAPghQAUgoApghQAdgYAlgZQAfgVACAAQAtAAAYAbQANAPAGAVQgKAIgCgBQAAAAgBgBQAAAAgBAAQAAAAgBgBQgBAAgBAAQgPAAgoAoQgYAVgXAcQgFAGgEALQgFALAAAGQAAAQAhAKQAdAKAkAAQAyAABogjQBmgjCLg9QgEgRgdghQgYgcAAgsQAAgeANgMQAKgJAVAAQAQAAAYANQgDgSASgOQARgNATAAQAMAAAbAQIArAZQAQAIAUAEQASAEAEADQAXAPAMASQAJAPARATQAQAUAIALQAPAYAFAQQADAKAAAMQAAAVgKAMQgWAWgXAfQgSAXgpACIg0gCQgGAAggASQgpAUgSAHQgdALgaAIIg2ATQgWAHgvAMQhbAZhIAHQgWACgrAAQigAAhFgxgAgQAqIgCACIATgIIAAAAIATgIg");
	this.shape_159.setTransform(47.7,-11.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgeDyQhRgFhNgXQhMgZg+grQi3iBAAjuQAAgNATgFQAKgCAKAAIASAFQAOAEAHADIAAAAQAPANAAAFQAKAzALApQAIAfAlA1QAlAyANAMQANAMAoAfQAoAeADAAQADAAANAGQBWAoBhgCIAOABQAjgJA3gZQAtgUAbgnIgNgaQgHgMgJgGQgkgaAAgNQAAgxAYgNQAPgJA5AAQAAAAAKgPQAMgRAJgFQAfgNAQAAQAJAAAWAIIAjAKQALACAiACQAWACASAIQASAIAJANQAKAOAOAIQAIAEAKARQAKASAAALQAAAbgzArQg5Ayg+AJIAAABQhKBBgnATQgTAFgNAGQhhAshpAAIgXAAg");
	this.shape_160.setTransform(66.9,-0.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("Aj5GEIgLgJQgFAAgHAFQgHAFgFAAQgPAAgJgLQgKgMAAgXQAAgLAJgfQgOAIgLgIQgMgHAAgPQAAgQAKgQQAPgWAegPIAegJQAMgFAIgXQAFgPASgeQAPgbACgBIAfgYQABgHAOgeQAUgnAvhGIAthCQBhhtBRhBQBRhBA5gVQAfABAVAVQAWAWAAAlQAAACgTAMQguAehLA7QhLA7hMBnQhKBlgXA0QAIALATADIAiAEQAtAFAAArQAAASgOAPQgPARgVAAQgTAAgngWQgFANgwAmQAHgBghAOQgcAPgDATQgGApgUAeQgWAfgbAAQgJAAgMgJg");
	this.shape_161.setTransform(-8.3,13);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_138}]}).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[]},1).to({state:[{t:this.shape_161}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.1,-26.8,75.8,74.3);


(lib.MIX_34_arm_Lcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089C0").s().p("AgKACQAGgFAGgIIAJgFIgPAhIgGgPg");
	this.shape.setTransform(17.2,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666D96").s().p("AB3BLIAKgUIAtA5IgOAQgAADgaIAFgbQAXALAMAKQAWASgOAWgAiChgQgqgVAAgKIAiAFIA1ASIgDAag");
	this.shape_1.setTransform(-6,-2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F949A").s().p("ABmBmQACgLAJgJQAbAoAAADQAAAKgPAIgAAAgSIAAgTQABAAACgKIAQAPIAXAZIgLASgAiLhyQgBgNADgPQAuAUAMAJIgHAdg");
	this.shape_2.setTransform(1.1,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666D96").s().p("AgHAPIANAAQgHgJgDAAIgIgVQAHACAMAAQAAANAHAQg");
	this.shape_3.setTransform(-17.7,5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83888C").s().p("AgoAlIAAgWQAAgFgGgOQgGgRAAgFQAAgGAFgGIAEgFQAXAIAGAAQAKAAAJgGIANgHQABAXAEAGQAGAJAYAGQgDAGgEASQgDAJgKAJQgIAHglAEQgXAAgFgMg");
	this.shape_4.setTransform(21.8,25.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC1C7").s().p("AiNBMQAAgTAKgIQAIgFAPAAQAiAAACAHQABAGgDAYIg5AKQgKgFAAgKgAA0BRQAKgUAagFQAOgDAMABQAYAAADAGQADAGgNAQIgzACQgYAAgEgDgAAbAPQAAgIAQgNQAVgUAgAAIAXABIACABQACACAAAGQAAAKgEAEIhHAiQgVgIAAgJgAgsgFQANgqAZgXQAUgUAWABIAAASQgCAGAAAGQgGAMghAoQgIAIgOAAQgOAAgDgGg");
	this.shape_5.setTransform(22.9,19.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDC2C6").s().p("ABTB5QAHgPAFgHQAJgLAdgKIAaArQgrAdgJAMgAgRgIQADgVAEgGQAGgLAUgQIAqArQgEACgSASQgRAUgGAJQgegeAAgIgAiehkQAEgfADgFQADgFAYgUIAoAWIAIAFQgLAQgGANQgIARgDAXQg1gegBgFg");
	this.shape_6.setTransform(3,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089C0").s().p("ACwDBQABgHAIgNQALgSAMgEQgPAfgFAIQgFAHgDAAQgCAAgCgEgABUA2IAOgaQAGgJAXgSIAyBCQgSAFgNAMQgIAHgMARgAgeguIAIglQADgMARgUIA6AvQgLAHgMAQQgOATgCAQgAjPiDQAAgyARgMQALgHAYAIQAbAKAoASQgTAPgIANQgJARACAVg");
	this.shape_7.setTransform(-2.5,-0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8089C0").s().p("AgYAhIgXgBIAQABQgJgKgEAAIgIgWQAQAFARgEQAhgEgXACIAHgCIAtghIAKBGIgTABIg6gDg");
	this.shape_8.setTransform(-13.8,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#83888C").s().p("AgDAWQgSgCgBACIACgNIgCgLQAIABAKgHQAGgIAEgKIANABQADAVACAYQgEAAgBAHQgFgDgRgCgAgWAWIAAAAIAAAAg");
	this.shape_9.setTransform(-11,-9.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BBC1C7").s().p("AgoB6QALgwBVAEQAKAIAAAGQAAAPgcATQgZARgNAAQgXAAgRgVgAhhBAIgCgGQgCgGgBgGQAAgFAMgHQASgKAlABQAYAAALAFQAJAEAHANQgQAJgNADQgbAHgtgBQgIAAgEgBgAAAANQgYgHgSAAQgHgBgQADIgYAGQgIgLAAgFQABgbBEAAQAmAAAVAPQAFAEAKAOQgQAQgKAAIgUgHgAA7gNQgCgEgBgEQAAgGAFgPQADgQAAgFQAAgKgNgGQgIgFgVgGQgmgRAHghQAAgCAJAAQAdAAAlAVQAkAVAAARQAAAZgKAZQgKAagKAAQgJAAgEgGg");
	this.shape_10.setTransform(-16.7,-12.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(47,50,59,0.314)").s().p("AAbgRIgtAfIgIAEg");
	this.shape_11.setTransform(-12.1,1.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#83888C").s().p("AggBBIgNgFIgDgBQgMgHAAgEQAAgUAPgMIABgBQAKgIAQgEQASgDAGgGQALgLgEgXQAIAAAKgHQAIgHAFgKIAMABIAFAiQgDAagJASQgYAygzAAIgGAAg");
	this.shape_12.setTransform(-2.8,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BBC1C7").s().p("AhjBnQgEgIAAgKQAAgTA7gCQA5gDABAZQgOAIgPAEQgbAGgtAAQgIAAgEgBgAgrAsQgIAAgQADIgYAFQgHgKAAgIQAAgbBEAAQAmAAAWAQQAGAFAJAOQgDAEgIAGQgKAHgFAAQghgPgdAAgAA5AYQgCgEAAgFQAAgFAEgNQAEgQAAgFQAAgOgogMQgmgNAAgYQAAgGABgCIADgGQABgCAKAAQAOAAAiAOQArARAJAWQAKAZgPAcQgNAbgMAAQgJAAgEgGg");
	this.shape_13.setTransform(-4.6,-5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).wait(1));

	// Layer 4
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABND/IhDAJIgQgZQgDgGAAgGQgBgWAKgLQAQgQAwgBQgTgogWgpIgcgmQgxg/gbgXQh3hihvggIAAh6QBsAmAtAXQA9AgBNBBQAyAyALAQQAIARAUAaIgdguQBABYAXAmQAHgSAVgGQALgDAKAAQARAAAJANQAGAJAAAJQAAAHgIATQgIAUgJALIAQgJQAjgOALAAQAWAAAOAHQAOAHAAALQAAAegRAHQgqARgPALQAZgJAPAAQAzAAAAAnQAAAXgXAFIheAFQgTANgpAKQgfAAgbgag");
	this.shape_14.setTransform(7.8,4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAGCzQgmgBgBgFQgHgYgKgXIgJgMQgDgDAAgHQAAgGAEgNIAEgRQgmAKgTgTQgNgMAAgUQAIgTANgKQgGgOABgNQAEgVAkgJQAWgGAaAAQAdAAAmATIADgZIgBgOQhNgEgBg4QABgeAYgGQASgFAiANQAdANAYAVQAYAWAAARIgYBPQAAAFAEAPQAEANAAAFQAAAagQAkQAKBbAAAOg");
	this.shape_15.setTransform(-17,-10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWCkIgHgDQghgLAAgcQAAgGADgNIAGgRQgoAKgSgTQgNgMAAgUQAAgCAGgKQAHgLAIgIQgGgOACgLQACgWAkgIQAWgGAbAAQAdAAAmATIADgZIgBgOQhOgEAAg4QAAgeAZgGQATgFAgANQAeANAXAVQAZAWAAARQAAAMgGAXQgEARgOAbQAAADAEAPQAEAPAAAFQAAAmgNAUIgNAXIgQARQggAgglAAQgKAAgKgBg");
	this.shape_16.setTransform(-5.1,-1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-24,62.5,56.2);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_handR
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-478.9,56.9,1,1,0,0,0,18.6,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regY:10.5,rotation:0.3,x:-477.8,y:56.6},0).wait(1).to({regY:10.6,rotation:0.6,x:-476.3,y:56.3},0).wait(1).to({rotation:1.3,x:-474.3,y:55.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:2,x:-471.6,y:55.1},0).wait(1).to({rotation:3,x:-468.4,y:54.3},0).wait(1).to({rotation:4,x:-465.3,y:53.4},0).wait(1).to({rotation:4.8,x:-462.6,y:52.7},0).wait(1).to({regY:10.5,scaleX:1,scaleY:1,rotation:5.3,x:-460.9,y:52.3},0).wait(2).to({regX:18.4,scaleX:1,scaleY:1,rotation:5.5,x:-460.3,y:52.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:5.3,x:-461.1,y:52.4},0).wait(2).to({regX:18.5,scaleX:1,scaleY:1,rotation:4.8,x:-462.3,y:52.6},0).wait(1).to({rotation:4.3,x:-464.1,y:53.1},0).wait(1).to({rotation:3.6,x:-466.3,y:53.7},0).wait(1).to({rotation:2.8,x:-469,y:54.4},0).wait(1).to({rotation:2,x:-471.8,y:55.1},0).wait(1).to({regX:18.4,scaleX:1,scaleY:1,rotation:1.1,x:-474.7,y:55.8},0).wait(1).to({rotation:0.5,x:-476.9,y:56.4},0).wait(1).to({regX:18.5,regY:10.6,rotation:0,x:-478.2,y:56.8},0).wait(2).to({regX:18.6,x:-478.8,y:56.9},0).wait(1));

	// MIX_34_armR
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC1C7").s().p("AhjB6IgCgeIABgQIAKghIBCAHIgFAhQgBAHABAHIAGAcgACEAgIABgLIA4gUQAGAoAjASIhFAXQgfgQACgigAjchtQAggXAjANIALAEIgPA5QgegGgbAOIgPAJg");
	this.shape.setTransform(-519,65.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777FC7").s().p("AhaCkIgCgLIAAgMIABgMIAHgSQA6gHA4gOQAAALADALQACALAGAIQAIAMAKAKQhEAbhLADIgGgTgAk0AtQAWgcAjACIAIABQALAyApAbQgVAlAKArQhbghgPhjgACNBWQgHgJgEgLQgCgGAAgHIBUgqIAhA6QgiAXgnAQQgUgGgLgQgAEqALIAFAAIAGAEIgFAFIgGgJgAkXhSIgNAEQAbg3AlgxQASAAARAKIAKAHIARAWQgdAggVAmQgegTghAKg");
	this.shape_1.setTransform(-510.8,59.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBC1C7").s().p("AhcByQgQgDgPgGIAAgDQAAgmATgYQALAFAOACIAAAAQAXADAYAAIgBADIAAAAQgLAYAAAkIAAAGQgYgBgYgEgACPA5QgMgTgDgUQAjgLAagJIAEgCQADAPAIAKIAAAAQAIAOAVAPQgfAPgmAPQgLgJgKgOgAjjhxQARgFAUAAQARAAAOAJIAAAAIAAABQgHAYAAAWIgGAAQgWAAgcAKIgJADQgCghAGgfg");
	this.shape_2.setTransform(-517.8,66);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777FC7").s().p("AhGC5IgBgGQABggAJgWIAAAAQACgGADgEQAXgCAXgFQAvgLAcgIQAEAWAOAWQAIAMAJAIIgDACIAAgBQg+AYg6AFIgrACIgEAAgAjjCCIAAgBQglgogJg4IAMgFQAZgIATAAIAHAAQACAUAHARIAAAAQALAbAYAOQgTAZgBAnQgWgMgTgUgACtBNIAAAAQgGgKgCgPQAggPAjgWIAEAAIAJgBIAeA2IAAABIhFAlIgBAAQgWgPgKgOgAjrhGQgRAAgPADIAGgSIAAAAQAWg4AVgYQAKgLAFgFIACAAQADAAADgCIABgBIACABQAgAJAQAiQglAjgRAsQgRgJgUAAg");
	this.shape_3.setTransform(-513.3,59.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(-533.8,55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC1C7").s().p("AhYBzQgTgDgRgFIAAgHQAAgjAPgWQANAFAQACQAVADAZgCQgLAZAAAjIAAAHIgrgDgACVA5QgNgTgCgUQAjgMAegMQACAQAIALIAAAAQAJAOATAOQgjAQgjANQgKgJgIgMgAjlhuIAFgBIAAAAQAVgGASAAQAOAAAOAHIgDAJIAAAAQgGAXgCATQgJgCgHAAQgZAAgbAHQgBgdAIgbg");
	this.shape_5.setTransform(-517,65.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#777FC7").s().p("AhECsQAAggAJgWIABAAIADgIQAhgDAogJQAegHAbgIQAEAXAOAWQAGAJAIAIIgKADIABAAQg9AUg3AHQgZADgZAAIAAgGgAjfCCQgogogLg3IgCgMQAagIAZAAQAHAAAJADQABAXAJASIAAAAQALAXAWANQgRAagBAmQgVgLgSgSgAC3BIIAAAAQgHgLgCgRQAlgSAjgQIAfA6Ig5AeIAAAAIgGACQgWgOgJgOgAjjhKQgQAAgTAEIAAgBQAXg0AiguIAAgBIAFgHIAEABQAfAJAQAhQgbAfgQAlQgRgIgSAAg");
	this.shape_6.setTransform(-512.9,59.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(-535,41.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BBC1C7").s().p("AhiBsQgKgCgKgDIgBgQQAAgfALgUQAKAEAMACQASAEAagBQgHAWABATQAAAOABAMQgagBgZgDgACaAuQgMgSgDgSQAhgKAagKIAGgDQADANAHAKIAAAAQAJAOATAOQgeAQgnAOQgKgJgJgNgAjuhuIASgBQAhAAATAGQgHAbABAXIgSgBQgUAAgcAHQgEggAGgdg");
	this.shape_8.setTransform(-515.4,65.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#777FC7").s().p("AhICWQAAgTAIgWIgBAAIABgBQAhgDAogJIABAAQAmgIAfgJQAFAVANAUQAHAKAIAJIgWAHQhDAWg2AFQgUADgUAAQgBgMAAgOgAjlB9IAAAAQgngngLg3QAbgHASAAIAVABQADAQAIAOQAOAYAWANQgNAXAAAkIAAAJQgbgMgXgXgAC7BAIAAAAQgGgJgCgOQAhgQAkgUIAgA4Ig+AgQgWgPgJgOgAkGhBIgNABIACgIQASgxAhguIABgBIAFgHIAEABQAfAJAQAhQgaAigOAoQgVgHgkAAg");
	this.shape_9.setTransform(-511.2,59);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BBC1C7").s().p("AhtBnIgHgCIgBgIQAAghARgYIAFABIAAABQATAFAfgBQgEAVAAAeIAAAQQgfAAgdgGgAClArQgNgTgDgVIAqgMIAAAAIAYgLQACASAIAJIAAAAQAIAMARAOIgTAIIgzAUQgIgIgHgKgAj0glQgGghABgcIANgGIAAgBQAOgGASAEIAZAGQgFAZADAVQgPACggALIgQAGg");
	this.shape_10.setTransform(-513.7,65.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#777FC7").s().p("AhFCeQAAggAFgVQAfgDAmgIQAzgKAmgLQAEAXAPAWIAKAOIgmAMQhIAWg3AGIgaACIgBgQgAjoB4IAAAAQgggggNgsIASgGQAfgMAOgBQAFAOAIAMIAAAAQATAcAbAOQgRAcAAAlIAAACQgggNgcgbgADLA+IAAAAQgHgLgCgRQAbgPAhgTIAUAjIALAUIg3AhQgTgNgIgNgAjug8QgZgFgSAJIAAAAIgDACIAEgTIAAgBQAMgtAhguIABgBIAFgHIAEABQAfAJAQAhQgYAigLAqIgZgGg");
	this.shape_11.setTransform(-509.9,58.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BBC1C7").s().p("AhzBjIAAgDIAAAAIAAgHIAAgEIAHguIACgGIAAAAIAGACIAnAEIATgBQgDAXAAAbIABASIgFAAQgiAAgggHgAC1AZQgLgQgEgPIAcgLIAAAAIAGgDIAfgOQADAPAHAKQAIALASAOIgpAUIgTAIIgIADQgKgJgIgNgAkDgyQgGgYgBgVQAagKAdAAIAQACQgBAbAGAXQgSAFgZALIgUAKIgGgXg");
	this.shape_12.setTransform(-511.3,65);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777FC7").s().p("Ag0CsIgFAAIgDAAIgBgRQAAgcADgXIACgCIAFABQAVgDAYgEIAPgEIAEgBIAFAAIAJgCIAMgDQAhgIAcgIIAOgFQAFATAMATQAHAKAIAIIgoANIgnAMIgVAGIgNAEIgLADIgEACIgFAAQgdAHgcADIgFABIgDAAgAisCfIgMgFIg7grIgBgBIgdgoIgEgHIgEgIIAFgCIAOgHIACgBQAYgLASgFIADAHIAAAAIAGAKIALAOIANAOIADABIAEAEIACABIAJAGIAKAGQgLAfABAeIAAACIAAAGgADdAvQgGgKgCgOIA3gaIABgBIACgCIACAAIAAgBIAIAMQAKAPALAWIgCABIAAABIgBAAIAAAAIAAABIgBADIgBABIAAAAIguAZQgVgPgJgMgAkqhLQAJgnAhguIABgBIAHgKIACAAIAVAKQAQALAKAWIABACIAAABQgJALgGAMIgPAvIAAABIgSgBQgcAAgbAIQAAgPADgNg");
	this.shape_13.setTransform(-507.8,58.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBC1C7").s().p("AhWBkIAAgTQAAgcAEgYQAfAHAigCQgEAXAAATQAAALACAOIgaABQgVAAgUgCgAC9AUQgLgSgEgQIAqgTIAWgLQADASAIAMIAAAAQAHALAPAKQgiARgcAMIAAAAIgEACQgJgIgHgKgAkOhYIAOgFQAcgHAVgBQABARAFATIAEALQgUAGgWALIgSALQgLgegCggg");
	this.shape_14.setTransform(-509.3,65.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#777FC7").s().p("AglCTQAAgTAFgZQA3gGA0gRIAAAAIAwgSQAFAUAMATQAGAJAHAHQgdANgdAKQgrAPgtAJQgUAFgWACQgCgOAAgKgAilCiIAAAAQglgKgggZIAAAAQgigbgRgoIAVgMQAVgLAUgGQASAhAqATQAOAHAQAFQgFAaAAAfIAAAQIgbgGgADnAtIgBAAQgHgLgBgTQAagPAZgPIAhA4QgNAJgXAMIAAAAIgOAHQgSgMgHgMgAkgh7IAVguIAGABIAEABIAUAMIAEABIAIANIAAAAIAJARIgRAsIAAAAQgHAPgBARQgXABgeAIIgBAAIgKADQgBgtASgqg");
	this.shape_15.setTransform(-505.9,58.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBC1C7").s().p("AgzBbIAAAAQgPAAgPgCQgDgOAAgSQAAgVAEgPQAeAFAhgCQgCAOAAAQQAAAPAFAWIgXAAIgOAAgADDAFQgKgOgEgRQAcgMAagMIAAAAIAKgFQADAPAHALQAIAMASAOQgiAQgZALIgHADQgLgJgJgNgAkYhIIAUgIQAVgIASgCQAEAMAGANIAAAAQAEAKAGAIQgLAFgMAGIgBABIggAVQgQgcgHgeg");
	this.shape_16.setTransform(-507.1,65.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#777FC7").s().p("AggCDQAAgRAEgPQA4gGA8gVIAtgQQAFASAMASQAHALAIAIQggANgpANQg6ASgmAIIgWADQgGgVAAgOgAijCcQgrgMgbgSQgXgQgWgiIAggVIAAAAQAOgIAMgEQAWAaAlAPQAQAGARAFQgEARAAAWQAAAQABANIgggHgADwAkQgHgKgCgPQAbgOAdgVIAgAzIgBABQgCADABADIgSAMIAAgBIgfASQgUgOgIgNgAk8gbQgFgyAMgmQAKggAMgSIACAAQALABARAOIAAAAQAQAOADAKIACAEQgNAWgHAdQgEASAEAWQgTADgWAIIgRAHIgCgOg");
	this.shape_17.setTransform(-504.1,58.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BBC1C7").s().p("Ag2BeQgDgSAAgTQAAgRACgOIAXABQAUAAARgCQgCATAAAaIAAAWQgaACgeAAIgBAAgADRAHIAAAAQgKgNgEgQQAjgPAdgQQADAPAHALIAAgBQAHAMAQANIgvAUIAAAAIgUAJQgJgIgHgLgAkjhNQAKgFARgFIAAAAIAhgHIAIAVQAHAOAKAOIgSAHQgYAKgRAOQgSgdgIgig");
	this.shape_18.setTransform(-505.8,64.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#777FC7").s().p("AijCXIAAgBQgsgMgZgQQgZgQgZglQAPgOAXgJQANgGALgCQANANAQANQAgAZA7AFQgCAPAAASQAAASADASQgfgDghgJgAgECLQAAgbADgTQA2gGAzgRIAwgRQAEAQALARIAAAAIAAAAQAGAJAHAIQgvATgsAOIAAAAQg8ASghAFIAAgUgAECAeIgBAAQgGgKgCgQQAggTAQgRIAJATIAVAmQgBAAAAAAQgBABAAAAQAAABAAABQgBAAAAABIAAABQgTANgWAMQgSgNgHgMgAk/hwQAKgfALgSIACgBQAQABATARIAAAAQAPAPADAGQgPAYgFAcQgCAOADAQIghAGIgBAAQgPAFgLAFQgJgyAMglg");
	this.shape_19.setTransform(-503.1,57.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BBC1C7").s().p("AgyBfQgNgXACgUQADgQACgJIAWAAIAAAAQAXAAAVgCQgFANAAARQABATAHARQgcAEghAAIgCAAgADgAWIAAAAQgJgIgHgMIAAAAQgJgLgEgOIgBgBIABAAIABAAQAigPAcgRQADAOAHAKIAAAAQAHAMASAOIgYAKIgkARIgGADIAAAAIgDgCgAkkhBIAGgFIAAAAQAXgTAagFIABAAIAAACIAAAAIADAGIABADIAFAMIAAAAQAHAPALAOQgNAHgQAMQgNAKgKAKQgVgdgKghg");
	this.shape_20.setTransform(-505,64.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#777FC7").s().p("AigCYQgsgMgagRQgWgNgWgeIAAAAIABgBQAJgKAOgKQAPgLANgHIABAAIACgBQAMANARANIAAAAIAAAAQAhAYA8AFQgDAKgCAPQgDAUALAYQgggCgigKgAAAB8QAAgTAIgNQAzgGAugQIAFgCIAngPIAFgCQAFAPAKAQIAAAAIAAAAQAHALAJAIQgxAUgtAPQgwAPggAGIABAAIgEABQgHgPgBgTgAEDAaIAAAAQgFgJgCgNIAAAAIgBgCIAQgJIAlgaIAAAAIABgBIADgDIABAAQAMABAEAbQACAKACAYIgDACIgBABQgRAMgVAMQgUgOgIgMgAlAgPIAAAAIgBAAIgCgIQgKgyALglQAKghALgUQARAEAUAOQAPAMAFAJIgBABQgPAZgFAdIAAAAQgCAMADAPQgdAGgbAVg");
	this.shape_21.setTransform(-502.6,57.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AD1AxIAAAAIAAAAgAhyAhIAAAAIAAAAgAj0gwIAAAAIAAAAg");
	this.shape_22.setTransform(-510.2,60.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BBC1C7").s().p("AgsBdQgHgWAAgYQAAgMACgKIABAAIABAAIASAAQAYAAAWgDIAAAcQAAAVACASQgcAEgjAAIAAAAgADNAMQgMgQgDgTIACgBIAAAAQAigOAcgPQADATAIAMIAAgBQAHAMAOALIgmAQIgaALIAAAAIgEABQgHgHgGgJgAj/gGQgUgcgKghQAJgGANgGIgBAAQATgJASgEIAHARIAAAAQAIASAOAQQgMAFgLAHIAAAAQgSAMgOAOIgCgDg");
	this.shape_23.setTransform(-506,64.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#777FC7").s().p("AinCXIAAAAQgrgMgagRIAAAAQgUgNgUgbQANgOASgMIAAABQANgJANgFQALALANAKIAAABQAhAZA9AGQgCAKAAANQAAAXAGAWQghgCglgLgAABB6IABgSIAAgKIAAAAIAAgBIABgBIABAAIAMgCIBUgVIAngPQAFAVANATIAKAOQgqAQgoANIAAAAQgxAPghAGQgCgRAAgTgAD3AmIAAAAQgHgLgCgRIAAgDQAsgYARgUIAIACIABAAQAKABAGANQAGAOAAANIgDAKIgHAMQgCACAAADIgBABIAAgBQgVAOgaAOQgQgMgHgLgAlFgZIAAAAQgJgxALglQALgiALgSIALABQAOABAPAQQALANACAKQgOAYgEAbIAAAAIAAAAQgDAQAEASQgUAEgTAKIgBAAIgSAKIgCgMg");
	this.shape_24.setTransform(-502.7,57.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BBC1C7").s().p("AgqBaIgBgFIgCgIIgBgBIgBgDIABgEIgEgoIgBgDIAAgBQASABATgCIAAAAIAcgEIAAABQAAAgAHAhIgBAAQgeAGgfAAIgBgCgADYAWIgCgCIgBgCIgBgBIgJgMQgMgQgDgTIACgBIAGgCIAbgNIAHgDIABAAIAVgMQADAUAIAMIAAAAQAHALAOAMIgjAQIgEADIgEABIgTAJIgBAAIgCABIgDgCgAkbhFIALgIIAAAAQAWgMAegCIAJAbQAEAMAIALIgjAQQgOAHgLAIQgQgcgIgfg");
	this.shape_25.setTransform(-506.7,65.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#777FC7").s().p("AhrCnIgNgBQgZgEgagGQgrgMgbgSQgXgQgUgeQALgIANgGQAXgMAPgGQAUAWAhAOIALAEIAnAKIAPACIABAAQAAAgAGAZIADALIgNgBgAAABiIAAgEIAAAAQAngIApgOIArgPIANgFQAEARALARIADAGIAGAIIAGAIIgEACIgJADIgRAGIg0ASQgtAOgiAIQgFgfAAgegAEJA5IgJgHIgLgMIgBgCIAAAAQgIgMgBgUIAbgQIACgCIAEgCIACgBIAIgGIADgCIADgCIADgDIAFgDIANAAIAAAAQALAAAFAKIAAAAQAGAJAAAMQAAAGgEAIIgEAHIAAABIgDACQgDADAAADIABAEIgXAOIAAgBIgDACIgEACIgOAIIgCACIgBAAIgCgCgAlEgbIAAAAQgFgyAMgmQAKgiAMgSQARABARAUQAOAPADAKQgLAWgEAeIAAAAQgCAQADAUQghADgYAOIAAAAIgHAEIgCgPg");
	this.shape_26.setTransform(-503.3,58.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#BBC1C7").s().p("AgwBdQgQgoAPgXIA8gDQACAgAIAgIhFADIAAgBgACxgNIgBgGIABAAIAigPQAOgGAOgJIADAMQADAJAFAHQABACADABQAAADACACQAGAIAKAGIgZAMIgrARQgVgRgGgagAj9gWQgHgPgEgSIgHgdIAFgCIAugHQAHAAAHABIAEAKIANAkIgIAEQgbALgYATIgFgKg");
	this.shape_27.setTransform(-509.3,65.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#777FC7").s().p("AhuCpQgZgEgXgFIgDgBQgIgBgGgEIgkgSQgIgEgGgFIgOgKIgEgFIgEgDIgZggIAWgOQAMgIAOgHQAGgDAGgBIAGAHIAJAJQAPAOASAKIAIAFIADACIAKADIASAHIAWADIAAAdIAAAAIADAlIgKgBgAAFChQgGgggBgeQAHAAALgEQATgCARgHIATgFIA2gSQAHAgAUAWIgWAIIgDACIgEABIgdALIgQAGQgkALgkAIIgBgDgADsAxIgDgCIgCgEQgGgLgCgQIAdgQIAKgFIABAAIACgDQAEAAACgCIADgBIABgBIACgBIACAAIAEABIASgCIAEAKQAEAKAAAKIgCASIgBAHQgLAHgUAKIgBAAIgFADIgFADIgDACIgEABIgBAAQgMgJgIgJgAkzhAQAEgTAGgTIAMgiQAGgVAOgLIASAGQAWALAKAXIgDAIQgEAJgEANIgBACIgDALIgLAzQgigDggAKQgDgUADgRg");
	this.shape_28.setTransform(-506,58.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AACAAIAAAAIgDABg");
	this.shape_29.setTransform(-485.7,69.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BBC1C7").s().p("Ag/BhIAAAAIgHAAQgBgMgBgOQAAgUAGgSIAGAAIABAAQAOABAQgBIAAAAIAXgDQgCAQAAAPQAAAVACAPIgbABIgegBgADKAkIgGgGIgIgLQgMgSgDgRIABgBIABAAIAZgLIAAAAIALgGIAagNQADAUAIAMIAAAAQAGALAOAJIgCABIg9AdIABAAIgEACgAj8gaIgBgCIgBgCQgKgdgDgfQAVgHAaAAQALAAALADIAAAGQADAWAJATQgUADgYANIAAAAIgTAKIgDgFg");
	this.shape_30.setTransform(-510.6,66);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#777FC7").s().p("AgZCKQAAgRACgQQAggFAfgIIABAAQAtgOAigNQAFAVANAUQAGAIAGAHIgeAMIgtAQQgqAOgiAGIgBAAIgNACIgIABQgCgPAAgTgAixCeIAAAAQgVgJgUgNQgOgJgMgMQgUgTgMgaIATgKIAAAAQAagOATgCQALAQAPAOIAAAAQAcAZAnAIQgFATAAAVIABAYQgdgDgZgKgADkAyIAAAAQgHgMgCgTIAsgYIAAAAQADABADAAQASgDAKAAQAHABAAATQAAAJgEAJIAAAAQgEAKAAAIIgEACIABAAIgdAPIAAAAIgNAHQgQgMgHgLgAkvgpQAAgNACgMQAGgiAZgyIAOgVIAIABIABAAQAOABAPATIAAABQAMAPACAGQgIAOgLAYQgLAXAAAfQgKgDgKAAQgbAAgWAHIAAgJg");
	this.shape_31.setTransform(-507.1,58.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BBC1C7").s().p("Ag9BmIgQgBQgCgPAAgRQAAgSADgPIAPACQAOABARgBIAXgCQgCANAAASIACAkIgTAAIgjgBgACpAfIAAAAQgLgSgEgPQAZgJATgJIABAAIALgGIAAAAIAJgEQADAQAHALQAIAKARAOIg6AbIABAAIgHADIgDABQgKgJgIgMgAj9hgQAPgGAhAAQAIAAANADIAAAGIAAAAQABAWAGAUQgWABgTAIIgaAKQgJggAAggg");
	this.shape_32.setTransform(-512.8,66);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#777FC7").s().p("AgiCLQAAgUACgNQAggEAfgJIABAAIA+gTQAEAUANATIAAAAQAHAKAIAJIgNAFIAAAAQgWAJgXAHQgqANgjAFIgNACIgKABIgCgjgAi3CdIAAAAQgVgKgSgOIAAAAQgNgKgMgMIAAAAQgVgYgMgfIAZgLIAAAAQATgIAVAAIACABQAIAQANAOIAAAAIAAAAQAWAaAiAKQgEARAAAUQAAAQABANQgXgEgVgJgADeBOIgRgQIgBgBIgDgEQgGgKgCgPIA1gdIADAAIABAAIAmgDQAEAAACAIIABAAQACAJAAAJQAAAFgDAHIgGAMIAAADIgBAAIgfARIgBAAIgWAMIgDACIgIgGgAkogvIADgaQAIgiAbgxIAJgNQAEAAADgCIADgCIAAAAIACAAQAPABAQARQAMANADAKQgKAOgKAUIAAABQgNAWgCAeQgNgDgJAAQgeAAgSAFIAAgEg");
	this.shape_33.setTransform(-508.5,58.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FF0000").s().p("AA8BLIAAgBIAAABgAj8gJIABAAIAAABgAD8hJIABgBIAAABg");
	this.shape_34.setTransform(-502.5,66.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BBC1C7").s().p("Ag+BuIgVgDIgCAAIgVgEIAAgGIAAgBQAAgfAOgZQAMADAOACQAPABAQAAIAAABQgIAXgBApIgSgBgAChAwQgNgUgDgVQAcgIAVgJIABAAIALgFIgBAAIAGgDQACASAIAMIAAAAQAHALAQANIgyAXIAAAAIgRAHQgJgIgHgKgAjzhhIAPgFQAcgHASgBIAKABIgBANIAAABQgCAXAEAVQgXABgbAKIAAAAIgQAHQgHghABgfg");
	this.shape_35.setTransform(-514.7,65.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#777FC7").s().p("AhICyQAAglAIgWIABgDIACgFIADAAIABAAQAogEApgLIABAAIA4gRQAEAXAPAXIAMAPIgEACIAAAAQgWAJgXAHIAAAAQgpAMgkAFIgMABIAAAAQgXACgWAAIgBAAgAi6CdQgUgKgSgPQgMgMgLgMQgVgagKghIARgHIAAAAQAagKAWgBQAGASALAPIAAAAQAPAYAaAMQgPAdAAAiIgBAAIgPgGgAC+BFIAAAAQgHgLgCgTIA1gdIAAAAIABAAIADAAIADABIARgEIABAAQANgEAIAAQACAAACAEIAAAAIABAAQADAGAAAHQAAAKgHASIgEAIQgBADABACIgcAPIggARIgBAAQgSgMgIgMgAkfg0IAFgaQAKgiAbgwIAAABIAPgSIADAAQAHAAAPAJQANAHAEAEIALAQIACAGQgMANgKATIAAAAQgMATgGAYIgNgBQgUAAgfAJIgIACIAAgCg");
	this.shape_36.setTransform(-510.1,59.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BBC1C7").s().p("AhGBuIAAAAIgUgDIAAAAIgHgBIAAAAIgEAAIgJgDIgBAAIgCAAIgCgIIAAgBIAAgBIgBgKIABgKIABgMIAAgCIABgGIAAAAIABgEIAEgMIACABIAEABIAEABIABAAIABABIAGACIABAAIABAAIACABIAKABIAGAAIAaABIgBAMIAAAEQgBAeAEAUIgcgCgACZAuQgMgSgEgTQAbgJAUgGIAAAAIAMgGIgBAAIAIgDQACAPAIAKIAAAAQAIANAUAPIg3AZIAAAAIgOAFQgKgJgJgNgAjrgkIgBgCIgCgOIAAgBIgBgJIgBgWIACgVIAJgCQASgEANAAIATACIAIACIADABIgBABIAAABIABAAQgDASAAAQQAAADABACIgBAEIABAJQgTAAgdAKIAAAAIgRAHg");
	this.shape_37.setTransform(-516,66.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#777FC7").s().p("AhEC3QgFgTAAgfIAAgDIABgGIAAgDIABgFIAHAAIBAgKIAIgCIAFgBIACgBIABAAIAKgDIAMgDIABAAIAGgCIACAAIAOgFIAOgEQAEAWAOAUQAHAMAJAIIgJADQgWAJgXAHIAAAAQgoAMgjADIgBAAIgLABIAAAAIgfACIgFgBgAiyCmIgJgEIgCgBIgEgCQgSgLgRgQIAAAAIgEgEQgKgKgHgKIgKgPIgHgOIgGgPIgBgCIgBgEIgBgCIgBgEIABgBIAAAAIASgHIAAAAQAagJARAAIAAAAIACAAIAFAQIAFALIAAAAIASAaQAHAHAIAFIAAAAIAAABIgCAEQgDAIgCAKIgCAPIgBAJIAAAEIABAIIAAAHgAC3BIIAAgBQgHgJgCgQQAcgOAegSIAlgFQAEACADAHQAFAKAAALIgDALIgBACIAAAAQgDADAAAFIAAABIAAAFIghATIgcAPQgVgPgJgNgAj0g6QgOAAgUAFIAAAAIgCAAIAAgBIAGgZQAMgiAcgvIABgBIAAAAIANgQQADAAACgBQADgBABgCQADgCAKAAQAEABALAHIAAAAQAKAHADAEIABABQAJAJAAARQgOAOgMARIAAAAQgQAYgHAdQgOgFgVAAg");
	this.shape_38.setTransform(-511.4,59.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF0000").s().p("AAfA+IgBAAIABAAgAgeg9IAAAAIAAABg");
	this.shape_39.setTransform(-529.8,61.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BBC1C7").s().p("AhjBzIgSgEQABgDAAgDIgBgLQAAgbAJgTQAJADALACQAaADAfgCQgHAVAAAeIABAQQgggBgegFgACWA1QgMgTgEgSQAbgJAWgIIAQgHQAEAOAHALIAAgBQAIAOAVAPQgfAQglAPQgMgJgJgOgAjphvIAAAAIABgFQAOgEAXAAQAVAAAKAHIAAgBIABABIgBACIgBAEQgHAaAAAWIgOgBQgdAAgWALQgCgfAGgfg");
	this.shape_40.setTransform(-517.1,65.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#777FC7").s().p("AhCC3IgBgOQAAggAJgWQAdgEAfgHIAAAAQAlgJAfgKQAEAVAOAUQAIANAKAJIgRAHIAAgBQg/AYg6AFIgiACIAAgCgAjsCBQgkgogKg4QAUgOAdAAQAHAAAHACQABAUAHATIAAgBQALAfAcAPQgKAWAAAeIAAALQgdgNgZgagACyBHIAAgBQgGgJgCgPQAagOAcgRIAFAAQApgKAHgBQgCACADAMIAAAAIAFASIgEAIIAAAAQgGAMgBAHIAAADIg/AhQgWgPgJgNgAjyhKQgSAAgOACIAFgNIAAAAQAVg4AVgYQAKgLAGgFIABAAQAEAAADgCIABgBIACABQAgAJAQAiQgjAhgRAoQgNgHgZAAg");
	this.shape_41.setTransform(-512.4,59.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FF0000").s().p("AgFAUIABAAIgBABIAAgBgAAFgUIABAAIgBABg");
	this.shape_42.setTransform(-541.7,52.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BBC1C7").s().p("AhdBzQgMgCgLgEIAAgEIgBgLQAAgcAKgUQAMAFAOACIAAAAQAXADAcgCQgHAWAAAdIABAQQgdgBgcgFgACPA7QgMgTgDgUQAjgLAagKIAEgBQADAOAHALIAAAAQAJAOAUAOQgfAQglAPQgMgJgJgOgAjih0QAOgEAXAAQAVAAAKAHIABAAIgCAGQgGAagBAWIgOgBQgdAAgWALQgCgiAHghg");
	this.shape_43.setTransform(-517.7,65.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#777FC7").s().p("AhMC3IgBgOQAAggAJgVQAfgEAkgIIAAAAIA1gPQAEAWAOAWQAIAMAJAIIgDACIAAgBQg/AYg6AFIgnACIAAgCgAjxCBQgkgogKg4QAUgOAdAAQAHAAAHACQABAUAHATIAAgBQAKAdAZAPQgMAWAAAgIABAJQgbgNgWgYgACgBNIAAAAQgGgKgCgPQAfgPAigUIACgCIgCgCIgCgDQAAgDAFgDIABAAQAGgEAHAAQAKAAAXAcIAVAcQAAADgCADQgBAAAAABQgBAAAAABQgBAAAAAAQgBAAAAAAIgBAAIgGgGIgCAAQgEAAgDADQgCACAAAEIAAACIgFABIhCAkIgBAAQgXgPgJgOgAj3hKQgSAAgOACIAFgNIAAAAQAVg4AVgYQAKgLAGgFIABAAQAEAAADgCIABgBIACABQAgAJAQAiQgjAhgRAoQgNgHgZAAg");
	this.shape_44.setTransform(-511.9,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:-533.8,y:55}},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_7,p:{x:-535,y:41.1}},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_7,p:{x:-535,y:41.1}},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_7,p:{x:-535,y:41.1}},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_7,p:{x:-535,y:41.1}},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_4,p:{x:-486.3,y:66.4}},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_4,p:{x:-529.4,y:50.5}},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_7,p:{x:-507.1,y:77.1}},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_4,p:{x:-541.1,y:50.2}},{t:this.shape_44},{t:this.shape_43}]},2).wait(1));

	// MIX_34_armR
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AjADFQgvgGgjgjQg5g5ABhRQACh+BZhcQAWgEAWAIQAmAQAKApQgrAvgUA7QglBuBxAOQBbAIBUgeQBigiBXg3IAoAEIAhAJIALAEQANABAGAKQACAEgBAEIgDALQhCA9hQApQiNBJiYAAQgnAAgpgFg");
	this.shape_45.setTransform(-510.6,59.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AhXDMQgfgCgegFQgQgCgPgGIgEABQgEAAgCgDIgDgDQgegOgagcIAAAAQgqgtgJhBIgBgEQgFgpAJgqIABgBIAAgBQAEgRAHgRIgBAAQAXg8AXgZQAMgNAGgFIAGgEIADgDQADgCAEAAIALADQAqALAUAxQABADAAADQgBACgCACQgqAlgPAvIAAACIgCAHIAAgBQgIAcABAVIAAACIAAABQABAUAIARIAAAAQAPAlAwAHQAzAIA4gMQA3gNAdgJIACAAQAlgLAcgNIAPgGIAAAAQAsgUAxgfQADgCAEABQAEABACADQACADgBADIAAABQAcAAAMAVIAAAAQAIAOAAARIAAADIgCAFQACABACACQABAEgBADQgBAEgDACIhbAxIgBAAIgDACIgBAAQgmAUgxATIgBABIgRAHIAAAAQhCAZg8AFIAAAAQgdACgaAAIgCAAIgBAAgAjqCCIAAAAIgBAAg");
	this.shape_46.setTransform(-512.5,59.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhaDFQgbgBgbgCIAAAAQgXgDgUgIIgBAAIgBgBIgBAAQgggNgagaQgsgsgMg9IgDgUIAAgBQgDgmAMgmIAAgBIABgCIAGgPIAAgBQAYg1AjgxIgBABIABgBIAIgMIAEgDIAFgBIALADQApALAVAuIABACIAAACQABADgBAEQgCADgEABIgCABQgcAggOAmIAAAAIAAAAIgFAPIAAAAQgIAbABAUIAAABQAAAVAIASIAAAAQAKAWAXAKIAAAAQAOAGARADQAZADAhgDIAAAAQAigDAogJQAigIAfgJIADgBQAogNAhgQIAAAAIAHgDIAAAAQApgVAogPIgCACQgCADAAACQABAEADACQADACADAAIACgBIABAAIAAAAIgDgEQgFAAABgFQAAgFAGABQAGAAAAAEIgBABIAFAEIAOgFQADgBABgEIABgEQARACALAIQAOANAAAQQAAAPgJAMIgBABIABADIgBADQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAIgCgBIAAAFQgBADgDACQguAZgbANIgBAAIgIAEIgCABQgtAWgtARIAAAAIgCAAIgWAIIAAAAQg/AVg4AGQgeAEgdAAIgCAAIgBAAgAD7AHIAVAUIAPAQIAAAAQAEgGAAgHQgBgIgHgHQgJgIgOAAIgJAAgAkThGIAAAAIAAAAgADpgGIgBAAIgBABIgBAAIADgBg");
	this.shape_47.setTransform(-511.6,59.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhaDCIgBAAQggABgfgFQgPgCgOgFIAAAAIgBAAIAAgBQgmgNgggfIAAAAQgqgrgNg9IAAABIgBgIIAAgBQgHgqAJgmIAAgCIAAgBIAGgUQATg0AjgwIAAAAIAAAAIAJgNIADgDIAGAAIAKACQAqALAUAuIABADIAAABQABAEgBADQgCADgEABIgBABQgaAigMApIgBACIgBAFQgIAdADAVIABADQACAQAIAOQANAWAWAMIABAAQAMAFANADQAWAEAggCIABAAQAigDAsgJQAogJAigKIAEgBQAkgLAbgMIARgIIAAAAIAAAAQAmgSArgWIACgBIAVgMQADgCAEABQADABACADIABAEIABAAQASgBAKAYIABAAQAGAQAAAMIgBAKIACAAQADABACAEQACADgBAEQgBADgEACIgTAKIgBABIgDACIgDABIhJAmIAAAAIgKAFIgBABQghAQgsAQIgBABIgBAAIgkANQhFAWg4AGQgZACgYAAIAAAAgAjxB+IAAgBIAAAAgAhNBuIABAAIgBAAgAEcALIAAAAIAAAAg");
	this.shape_48.setTransform(-510,58.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhjDBQgmgBgjgGIAAAAIgMgDIgCgBQgsgMglglIAAAAQgmgmgNg1IgBgBIgCgLQgHgjACggIAAgBQABgVAGgTIgBAAQANgwAkgxIgBAAIABAAIAIgNIAEgDIAFAAIALACQAqALAUAuIABADIAAABQABAEgBADQgCADgEABIgBABQgXAhgKAqIgBAEQgFAdAFAWQAFAPAIANIAAAAQATAbAdAMIALAFIAAgBQAUAGAkgDQAfgCArgJQA4gMApgMIABAAQAagIATgIIAAAAIAigPIAAAAQAigSAqgaIATgNQAEgCADAAQAEABACADIABACIABAAQASAAALASIAAABQAJAMAAAQQAAAHgFALIANgHQAEgCADABQAEACACADQABADgBAEQgBADgDACIgiASIgFACIAAAAIgBABQgpAagdAQIgBAAIgBABQgSAKgOAGQgWAJgjAMIgBAAIgCABIgyAQQhJAXg6AGIgBAAIgjADgAj+B5IAAAAIAAAAgAkwAbIABAAIgBgBg");
	this.shape_49.setTransform(-507.7,58.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FF0000").ss(1.8,1,1).p("AgFADQAFgDAGgC");
	this.shape_50.setTransform(-473.5,61.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AioC2IgCgBIgCAAIgEgBIgBgBIgBAAIgBgBQgqgNgiggIAAAAIgFgFIgDgDIgCgCIgGgHIgEgEIAAgBIgegvIAAgBIgDgHIgBgCIAAAAQgHgRgEgSQgGgbgCgZIAAgCIAAgBQgBgYAFgUQAJgqAkgxIAAABIAAgBIAJgNIACgBQAIgGAKACIAeAPQAKAIAIALIABACIADAEIACACIAIATIABAEIAAAAIAAABIgCADIgEAGIgCACIgBACIgCADQgHALgFAMIgKAoIAAABIAAABIAAABQgCAhAJAXIAAABIAFAMIABAAIANATIAFAGIANALIACABIAIAGIAJAGIABAAIACABIACABIABAAIAAABQANAFATACIAPABIAagBIACgBIAAAAIACAAIABAAIACAAQACgBADACIAEgCIAsgHIAAAAIAQgDQACgBABABIAEgCIALgCIANgDQAhgIAbgJIATgGIACAAIAAAAIABAAIAggNIAAAAIAMgGIAjgQIACgBIA6gcIAFgDIADgCIABAAIAVgMQADgCAEABQADABACADIAIAAQAIgBAGAGQAFAGAEANQAEALAAAKIAAABIgCAPIAAAAIAAAFIACADIABABQABADAAADQgCAEgDACIgbAPIAAAAIgzAcIAAAAIgBABQggAQgXAKIgYAKIgGACIgCABQgcALgeAKIgkALIgZAGIgMAEIgJACIgFAAIgEACQgfAHgdADIgEAAQgDABgDAAIAAAAIgCABIgNAAIgBAAIgPABQgoAAgkgJg");
	this.shape_51.setTransform(-506.9,58.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AiHC7IgBAAQgVgDgUgFIAAAAQgpgMgjgbIAAAAQgmgfgTgtIAAAAIgBgEIgBgBQgQgogCgqIAAgBIgBgJIAAAAQgBgyAUgvQALgbANgZIADgEQAFgDAEAAIADABIAGABIAEABIACABIAFABIATAMQAHABANAUIAAAAQALATABAGQABACgBADIgTAvIAAAAQgHAPAAAUQAAASAHAVIAAAAQACAIAEAIIAAABIABABQAPAeAnATIAAgBQARAIARAFIABAAIAAABQAkAJAogDIABAAIABAAIADgBIAAAAQA4gFA1gSIgBAAIA5gUIADgCIAugVIAigRIAAgBQAfgPAdgUIADgCIARgFIAAAAQANgFAGAAQATgBAIAcIAAgBQAFAPAAAOQAAAGgDAIIABABQACADAAAEQgBAPg8AgIgBAAIgSAJIgCABQgqAVghAOIAAAAIgJAEIAAAAQgkAQglAOQgsAPguAJQgZAFgbADQgTABgSAAIgBAAQgYAAgYgDgAjxB+IAAAAIgBAAgAjoiNIAAAAIAAAAg");
	this.shape_52.setTransform(-505.1,58.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhhC6QgTgBgTgDQgXgDgYgGQgugNgegUQgcgTgbgrIAAAAIgCgFIAAAAQgVgjgIgmIAAAAIAAAAIgEgaQgGg2ANgpQANgpAPgUQADgCADgBQADgBADACIACAAQAPAAAYATIAAABQAWASADAPIAAAAQAEACAAADQABAEgCADQgNAWgIAeIAAAAQgEASAGAXIAAABQAEAOAIAOIAAAAQAFAMAJALIAAABQAVAZAjAPQASAHATAEIACABIABAAQAiAGAngDIAFgBQA6gGA9gUIA2gUIACgBQAfgMAbgNIgBAAIAVgJIABgBIABAAQAigUAngdIAAgBIANgJQADgDADAAQAEABACADQADACAAAEIgBADQANAHAKAUQAJARABAKIACAAQAHAAACAEQAFAEgDAHQgBAEgJAIQgNAKgiAUIAAAAIgjATIgBABQgrAXgeANIgMAFIgBAAIgBABIgBAAQglAPgxAPQg7ATgnAIIgeAEIgDABQgRABgRAAIgPAAgAkQiXIABAAIgBAAg");
	this.shape_53.setTransform(-502.6,58.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhfC2IgHAAIAAAAIgBAAQgmgCgogMIAAAAQgvgNgbgSQgcgSgegsIgCgDIAAAAQgZglgKgqIAAgBIAAgBIAAAAIgDgNIAAAAQgJg2ANgpQANgoAOgVQACgDAEAAQADgBADACIABAAQAWAAAZAXIAAAAQAVAUACAKQABACgBADIAAAAQABAEgCADQgOAWgEAZQgCAPAEARQADAMAGAOQAJAPAPARIAAABQANAOARANQAeAYA8ADIABAAIAeABQAZAAAYgCIABAAQA3gFA0gSQAdgJAbgLIAAAAIAAAAQAogRAhgRIgBAAIAIgFIABAAIAAgBQArgaAOgVIADgDIAFgBIAGAAIADABQAZAHAKAkQADALABAIIAHgCQAFgCACABQAGABACAEQACADgCAFQgCAGgaATIAAAAQgZARgfARIAAAAQgcAPghAPIgXAJIgDACIgBAAQg2AXgyAPIAAAAQhAAUgiAFIgHABIgBAAQggADglAAIAAAAIgBAAgAkxgRIABAAIAAAAgAEjgoIABAAIgBAAg");
	this.shape_54.setTransform(-501.8,57.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhaC3IAAAAQgqAAgtgOQgvgNgcgRIgBgBIgmgjIgOgSIgBgBIAAgBIgEgFIgBgBIAAAAQgYgigLgoIgBgBIgFgVQgLg3AMgoQAMgpAOgXQABgCADgBQACgBADAAQAXADAbAUQAWAQAFANIAAAAQACAFAAAGQAAADgCADIgEACIgDAFIgLAhIgBABIAAACIAAACIgBACIAAAAIAAADIABATIACAIIAAAAIABAEIAAABIABADIAEAJIAEAKIAQAYIAHAIIABABIAHAHIAXAUIABAAIAAAAQAgAYA+AEIABAAIAaAAIAAAAQAeAAAcgDIAEgBIAAAAQAxgGAugQQAegLAbgLIABAAIAJgEIgBAAQAhgOAcgPIAAAAIAEgCIAGgEIAAAAIABgBQAqgaAUgSQACgCAEAAIAEAAQAagCAIAtIAAAAIACARIAKgEIAGgBQAKAAgBAJQADAFgVARIgBAAIgGAFIgBABIgBABIAAAAIgBAAIgGAEIgBABQgUAOgYAOIgBAAIAAABIgIAEIAAAAIgEACIgBABQgXAMgbAMIgKAEIgKAFIgDABIgGACIgBABQg0AVgwAQQgyAQggAGIgBABIgGABIgBAAIgHABQghAFglAAIgIAAgAkpBCIAAAAIAAgBIAAABgAlNgOIAAAAIABgBgAkQgYIAAAAIAAAAg");
	this.shape_55.setTransform(-501.4,57.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhfC3QgpgCgtgNIAAAAQgvgNgcgSIABAAQgYgPgagkIAAAAIgIgMQgXghgLgnIAAAAQgDgLgDgNIABAAQgKg2AMgpQANgpAOgUIAEgDIAEgBIAFAAIACAAIAJACQAVAAAVAXQASAVAAAPQABADgCADQgNAWgFAZIAAAAQgDAPAFASIABACQADALAFALIABAAQAJATARASIAAAAIABABQALAMAPALIAAAAQAgAYA+AEIABAAIAJABIARAAQAdAAAcgEIAAAAIAEAAIACgBIADAAQAugGAtgQIAkgNIALgFIABgBIABAAIAIgDIAAAAQAkgPAdgPIAAAAIAGgDIADgCIAGgDIA2gpIABgBIABgBIADgDIAEgBIAEAAIACAAIAIACQAUgBAMAZQAIASAAAQIAGgCQAFgBACACQAIADgEAKQgBAEgSANIAAABIgIAFIgBABIgKAHIAAAAQgYAQgeAQIAAAAIgBAAQgXAMgcAMIgaALIAAAAIgJAEIgCABQgxATgtAPIAAAAQg6ASghAFIgGABIAAAAQgkAFgpAAIgBAAIgBAAgAj+A4IAAAAIgBAAgAkUhHIABAAIAAAAg");
	this.shape_56.setTransform(-501.7,57.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhYC6IgBAAIgDAAIgEAAIgBAAIgDAAIgCAAIgMgBIgNgCQgagDgdgHQgugNgegUQgbgSgZgoIAAAAIgFgJIAAAAQgTgggJglQgEgNgBgRIAAAAQgGg2ANgpQANgoAOgVIADgDIAFgBIAFAAQAXAAAYAbQASAVADAMIAAABIABAEIgBAFQgLAVgDAbIAAABQgDASAFAWIAAAAIABABIAEAQIAFAOQAFAOAKAMIACACQASAWAfANIAEABIAEACQARAGARADIAJACIAQABIACAAIAAAAIABAAIAEABIAigBIAFAAIAAAAIAigEIAFgBIAAAAIACAAIAAAAIAEgBIACAAIAJgCIBEgTIAAAAIA5gVIABgBIAGgCIABgBIABAAIAAAAIADgBIABgBIAEgBIAFgCIAbgNIAHgDIABAAIACgBIAVgKIAIgEIABgBIAAAAIAqgcIAFgDIAQgMIAAAAIABgBIABAAIALgKQADgCAEAAQADABADADQACADAAAEIAAAAIAAABIAAAAQAIABAGAFIALALIABACIgBAAQAIANAAARIAAAGIABAAQAHABACADQAFAEgDAHQgBAFgJAHQgNAKgiAUIAAAAIgIAEIgNAIIAAAAIgDABIgEACIgBABIgCAAIgGAFIgBAAIgnAUIgEABIgEADIgUAJIABAAIgEACIgDABIgBAAIgCABIgBAAIgCABIgLAFIgDABIgKAEIgDABIgFACIgBAAIgHADIg1ARQgzARgkAIIAAAAIgCAAIgFABIgEABIAAAAQgkAGgjAAIgBABIgBgBgAEIBMIAAABIAAAAIABgBIgBAAg");
	this.shape_57.setTransform(-502.6,58.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhXC6IAAAAIgJAAIgBAAIgBAAQgmgCglgLQgrgMgkgbIAAAAQgYgSgSgbIgHgKIAAgBIgJgQIABAAQgNgbgHgcIgCgHIAAAAQgEgOgBgRIAAAAQgFgzAUgvIAXgyQABgDAEgBIAFgCIADgBQAdAAAWAXQASATACAVIgBAEIgQAsQgHAUAFAdIABACIABAFIAAABIAEAPIAAAAQAFAPALAPIAAAAQAQAWAdAQQAeARAnADIABAAQAWACAZgCIApgFIAAAAQAsgHAlgNQAdgJAcgMIACgBIArgTIgBAAIAmgTIABAAQAlgUAvgdQAEgCADABQAEABACADQACADgBAEIgBACIAGABIAAAAQALgCAFAYIAAAAIgBAAQADAMAAAFQAAAGgDANQADABABADQAJAHgOALQgJAHgiARIAAABIgcANIAAABIAAAAIgBAAIgLAFIg6AcIgBABIgGADIAAAAIgGACIgDACQggAOgvAQQg2ATgoAIIgCAAIgBAAIgBAAIAAAAQghAGgiAAIgQgBgAjxB4IAAAAIAAAAgAEABAIAAAAIAAAAgAE7gSIABAAIgCAAg");
	this.shape_58.setTransform(-504.2,58);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhKC8IgRgBIgCAAIgZgDIgFABIgXgEQgpgJgkgWQgfgSgYgdQgQgUgLgYQgPghgGgmQgHgyAPgtQAMghARggIAIgOQAUgDATAIQANAHALAMQAKALAGANIACAHIABAEQgLAXgHAaIgDAKQgCAHgBALIgBALIgCAGIADAKQAEAdAUAaIAEAEQAMAMAOAMQAOALAPAGIAmALIAhABIAcgDQAUgEAVgDIAagGQAOgBALgFIAKgDQAegKAbgLQAfgLAdgOQAOgHALgHIADgCIAAAAIAqgVIADgCIAEgBIADgDIAAAAIAGgEIgBABIASgLIABAAIAHgFQADgCAEABQADABACADQACADgBAEIAAABQAKACAHAUQAGAOAAAMIgBALIAAABQAGACgBAIQACAFgMAJIgCABQgLAIgaANIAAAAIgKAGIgBAAIgEABQgCACgCABIgCABIgEACIgIAEIgiAQIgPAIIAEgDQgYALgXAIIgkAPIgdANIgCABIgNAEIg2APQgKADgLABQgUAEgVACIgMgBIgXABIACAAg");
	this.shape_59.setTransform(-505.7,58.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AhjC/IAAAAIgMgBIgBAAIgBAAIAAAAIgBAAIgGgBQgigDgegMIAAgBQgXgJgVgOQgPgKgNgNQgZgYgPgiIgBgBIgGgOIgBgBIgBgCQgNgjgCgkIAAAAIAAgBIgBgVQAAgOACgOIAAAAQAGgkAbg2IABgBIARgZQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBIABAAQADgCAEAAIAMACQAUAAAWAcIAAAAQAQAVABAIIAAACIABABQAAAEgCADQgIANgLAZQgMAZADAhIAAABIABAKIAAAAQACAYANAUIAAABQAKAQAPANIAAABQAbAZApAFIABAAIALABIABAAIAcgBIAigDQAhgFAigJIAAABQAygPAkgPIAEgBIAGgDIABAAIAYgLIAAAAIAMgFIAlgTIAwgaIAAAAIATgMIAAABIAGgEQADgCADAAQAEABACADQACADgBAEIAAABIADAAIACAAQAZgCAAAoQAAAMgFAMIABABQAGAFgEAHQgBAEgJAHIgCABIgGAEIAAAAIgdAQIgBAAIgQAIIgCABIgOAHIg+AeIgBABIgGACIAAAAIgEACIgoAQIguARQgrAOgmAHIAAAAIAAgBIgNADIAAAAIgRACIgBAAQgTACgSAAIgfgBgACnBwIAAAAIAAAAgAEHgGIAAAAIABAAIgBAAgAjaiWIABAAIgBgBg");
	this.shape_60.setTransform(-507.1,58.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhqDAIgVgCIgCAAQgggEgdgNIAAAAQgXgKgUgPIAAgBQgOgLgNgNIAAAAQgagdgOgnIAAgBIgBgCIgBgEIgBgDIgBgBQgLglABgkIAAgDIAAgQIAAAAQABgOADgOIAAgBQAHgkAdg0IAAgBQAPgUAFgEQADgDAEAAQADAAACACIAFAAQAWgBAWAZQATAUACAQIAAADIgCADQgKAOgLAWIgBAAQgMAXgBAgIAAABIAAABIAAAKIAAABQABAYAJAWIAAABQAIAQAMAOIAAABQAVAYAiAIIABAAIABAAIABABIASACQAOABAPgBIAhgDIABAAQAhgFAigIQAngMAfgKIACgBIAAAAIABAAQAbgKAUgJIABAAIAMgGIgBAAIATgIIABgBIAAAAIABAAQAcgPAhgSIAAAAIABAAIAbgRQADgCAEABQADAAACAEQACADgBADIgCAFIAGgBIACAAQARgBAHAWIAAABIAAgBQADAMAAALQAAAHgDAIIAAABQAIAGgLALQgDADgJAGIgBABIggARIAAAAIgXAMIgHAEIgDABIgHAEIg/AeIgBAAIgEACIgCAAIgFACIgDACIgaAKIgBAAIABAAQgXAJgYAIQgrANgkAGIgNACIAAAAIgUACIAAAAIgBAAIgeABIgkgCgAjeCFIAAAAIAAAAgAEfA1IAAAAIABAAg");
	this.shape_61.setTransform(-508.5,58.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AhLDEIgIAAIgBAAIgcgCIgWgCQgQgCgPgEIgBgBIgMgEIgSgIQgXgLgTgRQgOgMgLgOQgZgegMgqIAAgBIgBgEIAAAAIgBgEIAAAAQgKgmADgmIAAAAIACgQQACgOAEgOQAJgkAegzIAAgBQATgZAHAAIACAAIAFAAQAKgBAUAMQATAKAEAHIAMASQADAGACAIIAAAEIgCAEQgMAOgLATIAAAAQgNAVgEAaIgBACIgCARIAAABQgBAaAFAVIABAAQAFASAKAQIAAAAQAQAXAbAKIABABQAMAEAQABIAAAAQAOACAPgBIANgBIAAAAIAJAAQAmgEAogKIBCgUIACgBQAggKAWgKIgBABIAMgGIAAAAIAQgHIABgBQAagNAdgPIAAAAIAVgMIAQgLQADgCAEABQADABACADQACADAAAEIgCADIAGAAQAMgBAIANIABABQAGAIAAAMQAAAJgFAPIACAAQADgBADADQADACAAAEQABAEgDACQgDAEgHAFIAAAAIgMAJIgBAAIgeAQIgfARIgBAAIgFACIAAABIgBAAIgBABQggAQgfANIAAAAIgVAJIgDACIgRAGIAAAAQgXAJgXAHIgBAAQgqANgkAFIgBAAIgMABIAAAAQgZACgXAAIgBAAIAAAAgAitCjIAAAAIAAAAgAA8CeIAAAAIAAAAg");
	this.shape_62.setTransform(-509.8,59.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhNDJIgDAAIgngCIAAAAIgWgDIAAAAIgGgBIAAAAIgSgDIgFgCIgBAAIAAAAIgCgBIgPgGIgPgIIgJgGQgRgKgOgOIAAAAIgOgPIgKgMQgJgNgHgOIgFgKIgHgVIgCgGIAAgBIgBgEIAAgBIAAAAIgBgEIgBgFIgBgCIgBgCIAAAAIgBgNIgBgBIgBgMQgBgRABgUIACgOIAAgBIABgEIACgKQACgOAFgNQALglAegxIABgBIALgMQAIgIAGgDQAGgHATAAQAIAAARALIAAAAIABABIAMAJIAEAFIAAAAQAGAFADAHQAGANgBARIgBAFIgCABIgJAKQgJAKgHALIAAABIgUApIgCAHIgCAHIAAAAIAAACIAAAAIgBAHIgBAAQgCARAAAOIgBADQABADAAACIABAJIAAAAIABAHIABABQABALAFAKIABADIACAFIAAAAQAKAUARALIACABIAEACIAAAAIAAAAIABABIABAAIgBAAIABAAIAGADIABAAIAHACIAFACIAMACIABAAQAOABAQAAIAKAAIACAAQApgDAvgLIAJgDIAHgBIAGgCIACgBIAGgBIABgBIAlgLIACgBIAAAAQAegJAVgJIgBAAIAMgFIAAAAIASgJIABAAQAdgOAhgSIACgBIAZgQQADgCAEABQADAAADADQACAEgBADIgBACIAEgBIABAAQAOgBAKATQAGAOAAAOQAAADgDALQADgCADABQAEABACADQACADgBAEQAAADgDACQgUANglAUIgeAQIgCABIAAABQghAQgkAPIAAAAIgRAIIgDABIgVAIQgXAJgXAHIAAAAQgqAMgmAEIABAAIgNABIAAAAIghACIgKgBgAi1CmIAAAAIAAAAgAjnCFIAAgBIAAAAgAESA0IABAAIAAAAgAjYghIAAAAIAAgBgAkbg2IAAABIABAAIgBgBgAi6ivIAAAAIAAAAg");
	this.shape_63.setTransform(-511.2,59.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AiUDGQg6gKgqguQgqgtgJhBIAAgBIAAAAQgGgoAIgpIAAABIAAgBIACgJIAAgBQAEgQAGgPIAAAAIAAAAQAXg8AXgZQALgNAHgFIAFgEIAEgDQADgCADAAIALADQArALAUAxQABADgBADQAAADgCABQgsAmgOAzIgBABIgBACQgHAdABAYIAAAAQAAAUAHATIAAAAQAKAcAcALQALAEANACQAdAEAmgEIABAAQAdgEAigIQAogKAigLIADgBQAegJAXgLIAZgLIADgCQAmgSAqgaQADgCAEABQAEABACADIABADQAVgFAFAAQAKgCAIAbIAAAAIAFAUIABACQAAAGgGALIAAAAIgCAEIACAAQAEABACADQABAEgBADQgBAEgDACIhUAtIgBAAIgGADIAAABQgjASgsASIgCABIgdAMIgBAAQhBAZg8AFQgVACgVAAQgoAAglgGgABaCbIAAAAIAAAAgAjSgxIAAAAIgBgBg");
	this.shape_64.setTransform(-512.5,59.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AiPDGQg6gKgqguQgqgtgKhBIAAgBIAAAAQgGguALgtIAAgBQAEgPAGgPIAAAAIAAAAIAAAAQAXg8AWgZQAMgNAHgFIAFgEIADgDQADgCAEAAIALADQArALATAxQACADgBADQgBADgCABQgtAogOA0QgIAdABAYIAAAAQABAUAHATIAAAAQAIAaAZALIAAAAIABAAQAMAGAPACQAbAEAjgEIABAAQAfgDAkgJIBBgSIABAAQAmgLAcgNIAOgGIAAAAIAAAAQAhgPAkgWIAFgCIABAAIATgMQADgCADABQAEABACADQACADgBADIAAABIgBAAIgBAAIgVACIgJABIABAAQAEABACADIAAAAQAHgEAHAAQAKAAAWAcIAVAcQAAADgCADQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIAAAAIAAADIAAABIABADIAAACQAAADgDADQgDADgDAAIgCgBQgBADgDACIhDAkIgBAAIgDACIgBAAQgmAUgxATIgBABIAAAAIgRAHIAAAAQhBAZg9AFQgVACgUAAQgoAAglgGgADLBrIAAAAIABgBgAjNgwIgBgBIgBgBIABABIABABIAAAAg");
	this.shape_65.setTransform(-513,59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45}]}).to({state:[{t:this.shape_46}]},2).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},2).to({state:[{t:this.shape_56}]},2).to({state:[{t:this.shape_57}]},2).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-543.8,39.4,83.4,40.6);


(lib.MIX_propeller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// pink ball
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE33CA").s().p("AhAAhIgHgFIgEgFQgDgEAAgEIAMgbQAWgcA1AAQAkAAAUAUQAOANAAAKQAAAGgPALIgNAKIAAAAQgXALgnAAQgiAAgTgIg");
	this.shape.setTransform(0.6,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNAvQgTgNAAgiQAAgVAfgTQAfgUArAAQAwAAAXAWQARAQAAAWQAAARgRASQgZAagzAAQg7AAgWgOg");
	this.shape_1.setTransform(0.7,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(3));

	// propeller
	this.instance = new lib.PROPELLORSPIN("synched",2);
	this.instance.setTransform(3.9,-23.9,0.727,0.134,0,2.8,-0.6,711.4,-104.6);
	this.instance.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(3));

	// stem
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#505358").s().p("AgJAnIgCgBIAAAAQgEgDgBgGIAEgWQgBgZgCgBQAFgTAKAAIADABIAFABIAEACIAFA1QAAAUgWAAIgEAAg");
	this.shape_2.setTransform(-3.3,14.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606366").s().p("AgMAyIgigDIgFgCQAcACAAgVIgFg2IgEgBIgFgCQADgDADABQAMAEAKAAQAdAAANgDQALgDAKgKQAGA3AAAWQAAAQggADIgQABQgMAAgMgCgAg7AqIABgGQABAFAEADIAAAAIAAABgAAjgzIADAAIgHACQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAgAgpgyIgCAAIAJgBQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAgBAAIgEgBg");
	this.shape_3.setTransform(0.8,14.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag/DUQgTgHAAgKQAAg7AHgpQACgJAQgEIAWgFIAIkpIAUAAIgFFFIAWgBQAAitgDiXIATAAQAGB8gBCtQALgDAOAGQAOAGACAJQADAPADAmQAFAqAAALQAAAJgmAHQgSADgTABQgvAAgYgJgAgzDFIAFACIAiADQATADAVgCQAggDAAgQQAAgWgHg5QgJAJgLAEQgNADgdAAQgLAAgMgEQgDgBgDADIgDAAQgMAAgEASQABABABAbIgEAWIgBAHIAGACIAAAAIADABgAAeBlIAIgCIgEAAQgBAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAgAgsBkIACAAQAIACAAgEg");
	this.shape_4.setTransform(0.9,-0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9CA1A6").s().p("AgFiiIAOAAQACCXAACtIgVABg");
	this.shape_5.setTransform(0.7,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.4,-50.3,253.6,71.6);


(lib.MIX_34_arm_L = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666D96").s().p("ACSBuQAQgGAJgGQArBUAEATQgLAEgLADIgyhigABAAAIANgIIAOgLQAVAXATAaIgRALQgHAEgFABgAhYhzQATgOAGgRQAuAYArAnQgKAbgQAAIhYg7gAjViuQgDgIgBgZQAGABBBAaIgHATQgEAKgGAAQgnAAgLgXg");
	this.shape.setTransform(-1.1,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F949A").s().p("ABpBmIAOgGIAPgHIASAfIgaANgAAIAAIAMgOIAMgPIAiAgQgEAFgaAOgAiXhmIASgeIAqASQgRAbgLAAQgKAAgWgPg");
	this.shape_1.setTransform(-0.1,-2.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666D96").s().p("AC7CoIAKgWIAFAPQgGAMgFAAQgCAAgCgFgAgThHIAFgcIAxAoIgIAYgAjHidIgCgPQAPgBAQAEQAUAFApAPIgDAag");
	this.shape_2.setTransform(-3.6,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089C0").s().p("AgogKIAMgRQALgMAKgFIAwBAIgTAMQgRAKgCACg");
	this.shape_3.setTransform(11,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8F949A").s().p("ABmBmQAAgFAFgHIAHgIIAaArIgOASQgYgfAAgKgAAAgbIAEgUIAPAPIAXAZIgKASQgggdAAgJgAiLh3QABgQACgHQAuAUALAJIgGAdQg1gegBgFg");
	this.shape_4.setTransform(1.1,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8F949A").s().p("AgiBZQAAgJANgdQANAfAOAYQAKARAGAGIgDAZQgOgMgng1gABkAgQgCgbgGgKIABABIASAFQAEAggEAeQgJgJgCgWgAhwh9QAHgNAPgPQAUA4ABAPIgXAag");
	this.shape_5.setTransform(-26.9,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666D96").s().p("AArDKIAAgBQgFgCAAgaIAFAEIATAMQAiAVAqgDIAAAAIgGAEQgSAFgRAAQgcAAgagOgABcBmIANAJIgIAWIgGALQgFAGgFADIALgzgAhVgDIARgaIAlBWIAAAAQgNASgGAOgABYgCQgOgLABgVIARACIANAmQgPgGgCgCgAiJi4IAAgEQABgBACgGQACgHALgNIAXBGQgLAKgLALg");
	this.shape_6.setTransform(-26.8,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8F949A").s().p("AgegHIgLgGIAKgKIAkAUIAlARIgCABIgCABIgJAIIg7gfg");
	this.shape_7.setTransform(-10,-12.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666D96").s().p("AgegHIAAgNIA9AfIgIAIIgCACIgzgcg");
	this.shape_8.setTransform(-17.3,-16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8089C0").s().p("AgQAWIgsgWQAFgbASgRIABgBIAAAAIABgBIAFgFIA8AjQAQAJAPAKIgDADIgDADIgBABQgUAVABALIAAAKQgXgOgcgQg");
	this.shape_9.setTransform(-2.6,-4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666D96").s().p("ABOCJIACgBIgHgCIATgZQASgYAFgaQAXgCAAgCIAAAAQADAWAAAPQAAAfgaAMQgMAGgKAAQgIAAgHgEgAiMiJIAQgDQAHAQA4BXQgEADgIAJQgOgWg1hag");
	this.shape_10.setTransform(-4.5,15.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8F949A").s().p("AABB7QgZgTgRgYIACgEIADgBQgEACAOAJIAcASIAjAWQgEAGgCAIQgNgFgRgMgACFBvQANgHADgFIAIAjQgFACgOAAIgFgZgAiciCIAKgJQAMAeAYAvIgRAEQgHgNgWg7g");
	this.shape_11.setTransform(-6.6,6.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666D96").s().p("AgMBiIAAgBIABAAQAHAAACgSIABgMIAFAGQAWAWAHAFQAMAJAPAOQANAJAiACIAOAMQgPAFgRAAQg3AAgug1gAB3AJIgGgFIAAgbIAAgBIAIADIAEABIABAPIgCARIgFgDgAhshLIgRgyIABgEIALgVIAAAAIANAhIAXA5IgLASIgDAHIgRgog");
	this.shape_12.setTransform(-19.3,17.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8F949A").s().p("AgJCiIgFgGIgEgFIgBgCIgBgBIgbgsIgEgHIgMgbIAAgCQAEgZABgEIABAAIACgEIAFALQAHARAWAhQAPAXAEAHQgFAPAAARIAAAHIgCgDgABwCYIAAgBQALgGAEgpIAAgCQAEADAHADIgBAMQgIAngQAFIgBgMgAiJiUIAEgFIAAgBIACgDIAGgHIAAAAQAEAdAEANQAEAPAKAYQgJAJgFAIQgLgogJgqg");
	this.shape_13.setTransform(-20.8,9.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8F949A").s().p("ABmBmQADgLAJgJIAaArIgOASgAAAgbIAEgUIAPAPIAXAZIgKASQgggdAAgJgAiLh3QABgQACgHQAuAUALAJIgGAdQg1gegBgFg");
	this.shape_14.setTransform(1.1,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8F949A").s().p("ACSCDQAAgKAEgKQALAIAyAhIgJAYgAgfgIQgEgQgBgLQAEAEAzAkIgIAUgAjSiVQAAgFAEgUIA4AuQgEAQAAAJg");
	this.shape_15.setTransform(3,10.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666D96").s().p("ADzDQQADgMAFgMIAMAKIgCAPQgFADgEAAQgFAAgEgEgAA0A6QABgKAFgMIBiBSIgHARgAhvhFIAAgLQAAgKABgGIBPBBQgCALAAAMgAjpilQgMAAgIgNQgJgNAAgUQANAEAYARQASANAHAIIgHAYg");
	this.shape_16.setTransform(0.7,8.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8F949A").s().p("ABLCKIAYgDIgNAmQgLgBgVADQANggAIgFgAAVgVIAUgOQAUAhARAhIgaANgAhiiOQAAgPAHgRIA7AyIgNAWg");
	this.shape_17.setTransform(-9.5,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666D96").s().p("ABCDFIgIgBQAFgDAIgBIAbgCIgMALQgLgEgJAAgABSBfIgHgnIAZgNQADAFAJAlQAKAngBAFQgIAAgZAGIgGgogAgRhYIANgWQAbAeAbAkIgUAOgAheiRIAAAAIgGgEIgKgWQgJgTgBgKQAOAGALAHIAQANQgIAUgCAMg");
	this.shape_18.setTransform(-11.5,-0.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666D96").s().p("AB5BLIAKgUIAsA5IgNAQgAAFgaIAFgbIA0AoIgJAVgAithvIgBgQQAOAAAQAEQAUAEApAPIgDAag");
	this.shape_19.setTransform(-6.2,-2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8F949A").s().p("ABmBmQAAgFAFgHIAHgIIAaArQgFAEgKAOQgXgfAAgKgAAAgbIAEgUIAPAPIAXAZIgKASQgggdAAgJgAiLh3QABgQACgHQAtAUAMAJIgGAdQg1gegBgFg");
	this.shape_20.setTransform(1.1,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666D96").s().p("AC8CyQgGgOABgLQABgIAFgKIATApIgLAIgABXASIAKgSIAtA3IgNARgAgbhSIAFgcIAyAoIgIAYgAjPioIAAgPQAPgBAPAEQATAFApAPIgCAag");
	this.shape_21.setTransform(-2.8,2.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8F949A").s().p("ABmBmQAAgGAFgGIAHgIIAaArIgOASQgYgfAAgKgAAAgbIAEgUIAPAPIAXAZIgKASQgggdAAgJgAiLh3QABgQACgHQAuAUALAJIgGAdQg1gegBgFg");
	this.shape_22.setTransform(1.1,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8F949A").s().p("ABfCEQAQgCAIgFQgCAdgDAOQgOABgTAGQABgkANgHgAASgeIASgRIAQAUIAfAsIgYASgAh2iVIAAgIIAEgRIAnAZIAaASIgJAZQg7gigBgJg");
	this.shape_23.setTransform(-6.8,3.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666D96").s().p("ABlDJIgBAAIgDgEIAEgIQAAgBALgEQAMgDALgBIgOAYgABkBQIgNgpQAMgKAMgIQAKATALAbQAKAdACAOQgIABgXALIgNgqgAgZhkIAKgZQAcAZAjAkIgSASgAhtiUIgGgDQgGgIgJgPQgLgSgCgLQAOADAMAHIATALIgFAkg");
	this.shape_24.setTransform(-9.3,4.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666D96").s().p("Aj5A/IAggdQAGAFAHADIghAagADZAwIATgRIAOAXIgGACQgIADgGAFgABjgkIADgUQArAQAZANQgGAEgMAPQgagQgbgMgAh6gRQgCgBgFgKQAHgEBpgjIADAQQgRADhVAfIgGAAg");
	this.shape_25.setTransform(1.7,-21.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8F949A").s().p("ACbARIAUgRQAWAPASATIgUASQgTgSgVgRgAjMArQgHgCgDgCIA7goQAGAHAFAEIgyAjIgKgCgAAngfQgdgDgSAAIgBgRQAOgBAbADQAaACAQADIgCAUQAAgEghgDg");
	this.shape_26.setTransform(2.7,-22.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8F949A").s().p("ABrCaIAUgcIArAzQgOAMgJANgAgfgJIATggIA0BCIgUAbgAipirQANgRAOgNIArA0IgXAhg");
	this.shape_27.setTransform(-1.8,5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666D96").s().p("AC1DoQAKgNALgLIAZAlIgKAPIgFACQgHgBgYgdgAA3BSIACgFQABgDAQgTIA/BJQgJAIgNASgAhXhUIAVgiIBABOIgVAfgAjij4IAIgEQAFABADAFIACADIgFgLIAQgHQAWASAXAZIAUATIgbAdg");
	this.shape_28.setTransform(-4,3.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666D96").s().p("AlLC9IBKgxIATATIg6AiIgjgEgAiTBEQAngYBIgrQAHAJAKAIIAIAGIhxBDQgGgEgRgTgABZgmIgUgSIBqg7QAHAJAPAJQhkA7gHAAIgBAAgAEMipIArgXIAVAPQgeAXgKAAQgGAAgSgPg");
	this.shape_29.setTransform(1.6,-37.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8F949A").s().p("AkBCIIBRg0IALAPQAHAHADACIhRAvQgQgMgFgHgAgWAJIgMgJIAAAAIBIgpIAXAVIhEAnQgDgBgMgJgAC9hvIgNgHIA+gkIAUATIg1AeQgFgBgLgFg");
	this.shape_30.setTransform(3.1,-37.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8F949A").s().p("AgPBHIgFgOIABAAQATACAcgGQARgDALgFIAOAOIguAMQgZAGgGAAQgGAAgCgGgAjsArIAEgbIBKAWIABAaQgtgKgigLgACrgUIAmg2IACABIgDgDIAOAHIADABIgBAAIANAHQgIADgTAbQgJANgQAAQgGAAgIgCgACrgUIAAAAIAAAAIAAAAg");
	this.shape_31.setTransform(3.6,-27);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666D96").s().p("AhnBdIgDgeQAtAOA5AAQAFAQAEAFIgWABIhWgGgAB8BHQgIAAAAgCQgBgGgGgEQAOgFAjgVQAggTADgDQAIAFAIADIgoAgQgjAVgBAAQgEgBgFAAgAklASQgLgJgBgGQAAgDADgGQADgFAAgCQARAHAcAPQAbAQAMAEIgEAbQg0gUgWgSgAEQg7IgLgFIAVgiQAMAEAMACIgMAZQgFALgGAAQgGAAgFgDg");
	this.shape_32.setTransform(0.2,-28.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8F949A").s().p("AAEDcIASgJIAIBIIgVAJgAgMgYIAVgLIAFBHIgUAKgAgdkVQAMgJAMgFIAFBRIgYAKg");
	this.shape_33.setTransform(-24.5,19.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666D96").s().p("AALFhIAVgLIANBBQgOAJgPAOgAgFBrIATgLIAGCJIgSAIgAgXiLQAAgKAXgBIAICJIgWAKgAgrmtIABAAIATAAQASCTAAARIgaAJg");
	this.shape_34.setTransform(-24.5,15.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666D96").s().p("AC7CqIAKgXIAEAPIgGAHQgDADgCAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAgABfAfIAKgUIAsA5IgNAQgAgThGIAFgbIAyAoIgJAXgAjHibIgCgQQAPAAAQAEQAUAEApAPIgDAag");
	this.shape_35.setTransform(-3.6,1.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8F949A").s().p("ABmBmQAAgGAEgGIAIgIIAaArIgNAOIgCAEQgXgfAAgKgAAAgbIAEgUIAPAPIAXAZIgKASQgggdAAgJgAiLh3QABgQACgHQAtAUAMAJIgGAdQg1gegBgFg");
	this.shape_36.setTransform(1.1,1.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8F949A").s().p("ACTBMQgHgLgBgQIAoAdIgLAUQgRgRgEgFgAgDggIABgIIA9AkIAAAIQg7gWgDgOgAiqhMQgDgCgFgTIA0AHIgCAXIgqgJg");
	this.shape_37.setTransform(5.6,-6.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666D96").s().p("ADiBxQgVgGABgQQAAgPAKgEIAfAkQAAAHgJAAQgEAAgIgCgACCAUQgWgTgHgMIA0AlIAAAPIgXgVgAg2hIQgcgLgDgVQAWAHBEAhIgBAPQgEgDg2gUgAj2hvIBQgDIADAYQguABglAEg");
	this.shape_38.setTransform(3,-4.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8F949A").s().p("AiiBdIAAAAIAAAAgAj4BTIADgeIBQAPQACAYABABgAgNBRIgEgLQAVAAAegJIAdgKIAPAMIgJAEIgmANQgdAKgEAAQgGAAgFgJgAC1gaQARgRAMgWQADgGgCgRIAAgBIACADIACACIACgCIAAABIAEgHIgBAGIAdAMQgRAfgcAVg");
	this.shape_39.setTransform(6.8,-30.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666D96").s().p("AhkBoIgCgYQAcAEAlAAQAdAAANgCQAGAMAHAJQgbADgWAAgAkRBGQgWgKgIgEQgNgIAAgHQAAgFADgGQADgGgBgBQBRAgALADIgDAbQgbgHgYgIgACLA+IgNgKQAngNAegbIARgOIAAAAIASAEIhMA9gAEYhWIAKgTIAbAEIgMAUg");
	this.shape_40.setTransform(2.4,-31.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8F949A").s().p("AAsDKQgSgVADgCQADgCADgPIAFgQQAaAsAUAUQgBAGABASQgYgLgSgVgAg8geIAAAAIAPgPIAEgCQACANAIAXQAHAVAEAEIgUAVIgUhBgAhVjaIAVgPIACArQgHAFgOAOg");
	this.shape_41.setTransform(-17.4,5.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666D96").s().p("AA5EoQgWgNAAgSQALAJALADQAPAFAagBIAXAAQAIAFAcALIgFAGIgSAFIgYACQgfAAgWgOgAhZB7QgMgcAAgBQARgRAFgDQAMAgARAjIASAgIgQAeQgTgggWgwgAickMIADgoIAdAAIgHBnIgVAPg");
	this.shape_42.setTransform(-10.7,1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8F949A").s().p("AA9DZQgdgVAAgNQAAgHADgOIAFgQQAaAsAUAUQgBAGABASIAAAAIgZgRgAg8geIAAgBIAPgOIAEgDQADAOASAwQgMAGgIAOIgUhAgAhVjaIAVgPIACArQgHAFgOAOg");
	this.shape_43.setTransform(-17.4,5.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666D96").s().p("ABYEoQgTgLgGgVQAVAPAZACIANAUIAHAHQgagEgPgIgAg+B7IgLgeQAGgLAQgJIAuBjIgPAeQgOgXgcg4gAhwg4IgIgyQAAgLAGgIQAGgIAJAAIAKBHIAIAnIgWANIgJgugAiAkNIACgmIAdAAIgHBmIgUAOg");
	this.shape_44.setTransform(-13.5,1.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8F949A").s().p("ABsBvQACgIAKgNIAcAvIgPATgAAAgcIAEgVIANAMQAOAOANARIgLATQghggAAgJgAiTh9IAAgJQAAgHADgOQAuAWAOALIgHAeg");
	this.shape_45.setTransform(2.7,4.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666D96").s().p("ADFC2IAKgXQAEAJADARQgGAFgDABIAAAAQgFAAgDgJgABkAhIAKgVQApA0AGAKIgNARgAgVhOIAFgcIA1AsQgFAKgEAOgAjSitIgBAAIgCgRQAOAAASAFQAUAFAtARQgDAOAAAOg");
	this.shape_46.setTransform(-2.2,3.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666D96").s().p("ACQAbIAKgOIAaAvIgKALgAAJgqIgBgYQAvAIAaAIIgMAZgAizg3QBJgPANAAIACAYQgsADgsAGg");
	this.shape_47.setTransform(-8.1,-10.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8F949A").s().p("AB0BCIAJgMIAMAlIgMAHgAAZgpIALgZQASANAFAGQAHAIAMANIgLAPgAiGhGIgCgbQAPAAAvAEIABAAIgBAXg");
	this.shape_48.setTransform(-1.8,-7.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8F949A").s().p("AjGB5IgDgPIA+gFQADgEAEAJQADAIABAJIgKAAQgjAAgZgCgAASBAIA4gdQAPAPAFAIQgVAMghAPQgHgJgPgMgACshUIAHgmIAWAEQgCASgGAZg");
	this.shape_49.setTransform(-32.5,-2.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666D96").s().p("AgyCRIgBgLQgCgLgCAAQALgBApgMQAkgKATAAQAFAAAVAQQgbANgtAJQgiAHgUAAIgCAAgAjhCJIghgCIAEgDQgHAAABgBIACgMIAAADIABgEQArANAqgEIABABIAAAAQAHAGADAIQgJgDg3gCgACYAuQARgJAVgYQAZgbAIgcQAMAEAKAGQgHAbgTAdQgYAlgYAIgADvh3QAAgLADgOIATAAIAAAdg");
	this.shape_50.setTransform(-38.3,-4.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8F949A").s().p("AgcBNIAEgQIAIAEIAUAOQAAAJgKAHQgMAGgQAAQAEgKACgOgAAPgYQgBgegGgTQgDgLgFgKQAIgDAKgCIAIgBQAEAPADAYQADAZgBAOg");
	this.shape_51.setTransform(-18.9,0.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666D96").s().p("AgQBqQALgLAFgKQAEgNAJgjIAVADQACASgJAYQgEANgNAaIgagPgAgQhYQgNgagFgGIAjAAQACAFAUAzQgQABgJAFIgOgeg");
	this.shape_52.setTransform(-19,-4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_14},{t:this.shape_2}]},1).to({state:[{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_24},{t:this.shape_23}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).wait(1));

	// Layer 4
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BDC2C6").s().p("ABdB7IAPgGIAOgHIALgTIAJgRIAVAgQgCAIgJAOQgJAMgDABIgaANgAgCATIALgOIAMgNQAGgOADgRIABgBIAXATQALAJAAAGQAAAGgEAJQgDAKgDAFQgFAFgZAOgAiihRIASgeQAEgMgEgeQAwAQADAPIgKAdQgRAbgLAAQgKAAgVgPg");
	this.shape_53.setTransform(0.9,-4.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8089C0").s().p("ACBB+QAPgFAJgGIAQgRIAJgSIA5BmQAAAEgMANQgOANgIAFQgLAFgLADIgyhjgAAuARIAOgKIANgKIAOgjQAIAJgGgKQAsAmAAANQAAACgHANQgIAOgEAFIgRAMQgHAEgFAAgAhqhjQAUgNAFgRQAGgQgCgUQBEAqAKANQASASgKAaQgJAbgRAAIhZg8gAjmieQgDgHgBgaIAJgWQAGgLAIAAQAOAAANAIQAZAQgFAlIgGATQgEAKgGAAQgnAAgLgYg");
	this.shape_54.setTransform(0.6,-0.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#83888C").s().p("AgoAlIAAgWQAAgFgGgOQgGgRAAgFQAAgGAFgGIAEgFQAXAIAGAAQAKAAAJgGIANgHQABAXAEAGQAGAJAYAGQgDAGgEASQgDAJgKAJQgIAHglAEQgXAAgFgMg");
	this.shape_55.setTransform(21.8,25.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BBC1C7").s().p("AiMBMQAAgTAKgIQAIgFAPAAQAiAAACAHQABAGgDAYIg5AKQgKgFAAgKgAA1BRQAKgUAagFQAOgDAMABQAUAAAEAEQAGAGgNASIgzACQgYAAgEgDgAAlAdQgJgEAAgKQAAgKATgNQAWgSAcAAIAXABIACABQACACAAAGQAAAKgEAEIhHAiQgHgCgFgBgAgrgFQANgqAZgXQAUgUAWABIAAASQgCAGAAAGQgGAMghAoQgIAIgOAAQgOAAgDgGg");
	this.shape_56.setTransform(22.8,19.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BDC2C6").s().p("ABTB5QAAgFAFgHIAHgIQADgFAGgFQAMgLARgCIAaArQgVAKgRANIgOASQgYgfAAgKgAgRgIIAEgUQANgbAQgHIAqArIgOAKQgGAEgPAPIgKAUQgegeAAgIgAiehkQABgQACgHQAFgOAHgKQAKgOAJAAQAIAAAoAbQgNATgJAVIgGAdQg1gegBgFg");
	this.shape_57.setTransform(3,-0.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8089C0").s().p("ACyDHIAKgXQAGgHAIgHIAIgFIgRAjQgGALgEAAQgDAAgCgEgABWA8IAKgUIAMgQQALgNAKgEIAyBBIgTAMQgQAKgDADIgNAQgAgcgpIAFgbQAJgfAOgLIA6AvQgTARgMASIgIAXgAjQh+IgBhGIABgBIACgFQAQADAkANQArAPAZAMQgKAJgIAFQgEAEgKAWIgCAag");
	this.shape_58.setTransform(-2.7,-1.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(47,50,59,0.314)").s().p("AADAAIAAAAIgFABg");
	this.shape_59.setTransform(-14.5,3.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#83888C").s().p("AgDAWQgSgCgBACIABgNQAAgIgBgDQAIABAJgHQAHgHAEgLIANABQADAVACAYQgEAAgBAHQgFgDgRgCgAgWAWIAAAAIAAAAg");
	this.shape_60.setTransform(-11,-9.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BBC1C7").s().p("AggCJQgMgKAHgCQABgcBPgVQALAAAHACIADAEQACADAAAGQABAcgjAOQgRAIgQACIgIABQgNAAgKgHgAhhA/IgCgGQgCgGgBgGQAAgFAMgGQASgKAlAAQAYAAALAFQAJAFAHANQgQAIgNADQgbAHgtAAQgIAAgEgCgAAAAMQgYgHgSAAQgHAAgQACIgYAGQgIgKAAgGQABgbBEAAQAmAAAVAQQAFADAKAOQgQARgKAAIgUgIgAA7gOQgCgEgBgEQAAgFAFgQQADgPAAgFQAAgKgNgHQgIgEgVgHQgmgQAHgiQAAgCAJAAQAdAAAlAVQAkAVAAARQAAAZgKAaQgKAZgKAAQgJAAgEgGg");
	this.shape_61.setTransform(-16.7,-12.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#BDC2C6").s().p("AhFBlQAAgJAOgdIAQgSQAOgOAVAAQAFAAALAQQAOAVAJAHQgQAFgQAZQgMAWgBAOIgEAZQgOgMgpg1gABXBSIgLgHQgJgJgCgWQgCgbgGgMIABABIASAHQAPAHAUgCQAVgDAQgOIAAA0QgJAggmAAQgHAAgHgDgAiThxQAHgNAPgPIAegIQATgFAFgJIgBgCIAKAbQAHAYAAASQAAABgJACQgOAGgaARIgXAag");
	this.shape_62.setTransform(-23.4,8.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8089C0").s().p("AAWDNIAAgBQgFgCAAgaQAHgbAHgNIAQgTIAAApIADAAIAEgBQAEADACgCIAAgCIALgzIANAJQAWAKATgGQAUgGAOgHIAAAAQgCAkgHAXIgIATQgHAQgOAIIgEADIAAAAIgGAEQgSAGgRAAQgcAAgagPgAhqAAIARgaQAlggAOAAQAGABAGAcIAYA9QgEABgUAKQgVAKgDAEIgCADIAAAAQgNASgGAOgAB5AUQgEgDgFAAQgJAAgTgIQgPgIgCgBQgOgKABgVIARACIABAFQARABAJgEIAHgDIAAgBIAXgSIAYgVIAHBCQgEADghARIgBAFIAAgBgAidi1IgBgEQABgBACgGQACgHALgNQAPgKAZAEQATAEANAIIAJAxQghAEgJAEIgPAHQgMAKgLALg");
	this.shape_63.setTransform(-24.7,6.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BBC1C7").s().p("AAmA8IAAgBIABgEIgBgMQANAEATAAQAdAAAUgLQABAGgCAGQgIARguAAIgagFgAhzA0IgCgHIAAgCQgCgDAAgFQAXhAAcAAQAKAAAEAFQACAEAAAEIgBABIABAKQgaAfgPAQIgCACQgMANgDAAQgDAAgCgFgAAwAcIgQgEQgEgLgIgLIAgABIAVABQAXAAAPgGIABABQAHAFAAAFQgJAXgkAAQgIAAgSgEgAAogPQgYAAgIADIgKgLQgOgNgLgFQAIgDAGgGQAIgBAGgDIAigIQAKgCANAAIABAAIADAAQAVAAAOANQAMAMAAAOQAAAGgPAEQgPAEgRAAQgRgEgFAAg");
	this.shape_64.setTransform(13.7,14.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#83888C").s().p("Ag/AoIgBgBQAQgGAbgeQAdggAAgHQAAgLgDgLQgDgJgEgGIACAAIARAOQAWAUALAPQAGAIAGARIABABIAAAFIAAAOIACAFIgBABQAAAGgPASQgUAXgWAAQg3AAgPgig");
	this.shape_65.setTransform(9.3,17.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#BDC2C6").s().p("ACnDBIAEgIQAEgIABgFQALgBAKgDIAHgCIgGAMIgFAFQgSAPgMAEIgDABIAHgKgAAiAIQgPgRgigXIAAgBQAAgWAYgYIABAAIAFgFIAKgIIABgBIATAOIAtAiIAIAIQgLAEgOAJIgCABQgdATgFANIgDgBgAjKiCIAAgLQgBgOACgIQADgIAQgRIADgEIAKgKIAnAUIAkATIgCACIgCABIgJAIIgJALIgBABIgBABIAAABQgTAaAAANIAAAAIhBgfg");
	this.shape_66.setTransform(3.7,5.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8089C0").s().p("ACEDhQAJgEAIgHQAPgMAKgWIAFACQAPAEAJAAQgBALgCADIgEAGIgIAHQgGAFgCAEQgUAEgTAAIgJgBgABWAeIAAAAQAFgKAIgKQAHgJAIgEQANgKAQgDIAXAXIABABIAEAEIAJAKIgBABIgBAAIgDAAIgFAAIgNACIgIACQgNADgLAEIgGACIgVAJQgFgIgHgHgAgqg3IgsgXQAGgcARgSIABAAIAAgBIABAAIAFgGIALgLIAAgBIBPAsIATANIgCAAIgBABIAAAAIgCABIgIAFIgFAEIgDADIgDAEIgBABQgTAVAAALIAAAKQgVgPgegPgAjKiFIAAhcIA/AhIgIAIIgCACQgbAcAAAQIAAABIAAAPIgagLg");
	this.shape_67.setTransform(0,3.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(47,50,59,0.314)").s().p("AABgGQABANABAAIgFAAQACgNABAAgAADAHIAAAAIAAAAIAAAAg");
	this.shape_68.setTransform(-1.6,20.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#BBC1C7").s().p("AgjB1QgFgFgBgDQAAgLATgXQAYgeAngIIANABQADABAAAHQAAAVhRA5QgFgBgGgGgAg8BIQgIgHAAgIQAAgRAlgdQAqgfAtAIQgBAHgDALQgFAMgCABQgVAIgUAJQglASgQAZgAAog1QgSgagHAAIg4ANQgQAAgIgHQgHgGAAgKQAAgNAigLQAfgKAbAAQAQAAAOAMQAXATAAAqQAAANgCADQgCAFgKABQgBAAgSgZg");
	this.shape_69.setTransform(-4.2,2.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8089C0").s().p("ABaCJIADgBIgHgCQgJgFgVgaQgXgdADgLIACgKIAHgBIADAHQAIgDAAgPIAAgCQgDgNAHAJIANAQQAHAEAOACQAMACAJAAIANAAQAWgCAAgCIABAAQACAWAAAPQAAAfgZAMQgNAGgJAAQgJAAgHgEgAiYhMQAAgaAGgMQACgEARgTIAQgDQAHAQA3BXQgDADgIAJQgHAJgCANIgBAfIABAIQhThuAAgCg");
	this.shape_70.setTransform(-5.8,15.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#BDC2C6").s().p("AAbCRQgtghAAgJIgDgqQAAgIAEgMIABgDIAEgCQgFACAOAJIAcATIAkAVQgFAGgCAJIAAANQAAAcAIAOQAGAIAOAOQgPgHgogbgAB3BgQgPgDgJgMQgIgEAAgBIAQAFQAPADAHAAQAQAAAFgCIALgJQAMgIADgFIAIAjQgFACgOAAIgQABQgSAAgIgCgAizh9IAvgsIAKgJQAMAeAXAvIgRAEQgIAGgMAQQgOAWAHANQgYgogYgtg");
	this.shape_71.setTransform(-8.9,10.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#83888C").s().p("AghBAQgGgNAAgKQAjgtAAgGQAAgDgDgGQgEgJgJgIIAMgOQAEgIgFgPIAJgHIAIAHQAQAKAGAPQATAtgQAuQgGAUgPAIQgMAKgRAAQgJAAgHgRg");
	this.shape_72.setTransform(4.2,8.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#83888C").s().p("AgsA8QgHgDgGgGIgDgEIACgHIAGgRIAFgNIAQgDQANgDAJgEIAHgBQARgFAAgWQAAgHgCgGQAPgBAIgHQAHgGABgKIAJABIADAAIACAPIADAVIgEALIgBAMIgBADQgHATgNAQQgHAJgJAHQgKAJgKAEQgJADgIABIgCAAIgCAAQgLAAgLgGg");
	this.shape_73.setTransform(-2.8,6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BBC1C7").s().p("AhjBhQgCgGAAgGQAAgIASgGQASgGAXgCQA6gDAAAaQAAAFgpAHQgpAGgYAAQgHAAgCgHgAAKA2QgTgKghAAQgbAAgVAIIgDgGQgEgFAAgHQABgbBEAAQAWAAAXAKQAdAMAAANQAAAIgOAFIgMAEIgKgFgAA7AYQgDgDAAgGQAAgIAFgHQAEgKgBgOQAAgPgngMQgngNAAgXQAAgeA6AYQAXAJASAOQASAPAAAKIAAACQgDAjgPAaQgBACgCACQgGAIgCAAQgMAAgDgGg");
	this.shape_74.setTransform(-4.8,-5.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(47,50,59,0.314)").s().p("AgtAvIAEgKIgBAHIgBAIIgCgFgAAmgvIAHgEIABAAIgHAEg");
	this.shape_75.setTransform(-6.8,19.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8089C0").s().p("AgxBvIAAAAIAAAAQAIAAACgTIABgMIACgRIAAAAQAJgaAOgJQAdAnAdABIgBAIIAAAAIgEAJIACAGIAAAAIgCAMIAAABQAAADAJAOIAKAQIALAKIAOANQgPAEgSAAQg0AAgwg1gABXAaIgGgEIgGgEIABgcIAAgBIAHADIAFABQAJACAVAAIAHgEIABAAIAHgDIgBgBQANgHALgKIAHgGQABAegDAXQgWAPgMAAQgZAAgPgGgAiBgVIgQgpIgSgxIACgFIAKgUIABAAIADgGIAMgMIAEgDQAJgFAQgBIACAAIATA3IALAaQgIAEgNALIgBABQgLAKgHAJIgLATIgDAGIAAABg");
	this.shape_76.setTransform(-15.5,16);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BDC2C6").s().p("ABjC8QgIgGgFgIIgBgBQgHgKgCgOIgBgMIAAgBQAMgGADgpIAAgCQAFADAGADQASAGAhAAQAJAAANgJIgBAJQgNBNgrAaIgSgOgAguCTIgFgGIgDgFIgCgCIgBgBIgbgsIgEgHIgMgbIABgCQADgZABgEIABAAIADgEQAJgOASgOIAMgJQAQAkAMAVIARAbQgPAGgKATQgEAJgDAKQgEAPAAARIAAAHIgDgDgAiuijIAEgFIABgBIABgDIAGgHIAHgJIAUgMIACgBIAAAAIAEAAIAOACIAPAuIAHAaQgLABgQALQgMAIgIAJQgIAJgFAIQgMgogJgqg");
	this.shape_77.setTransform(-17.1,10.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BBC1C7").s().p("AiNBOQAAgTAKgIQAIgFAPAAQAiAAACAHQABAGgDAYIg5AKQgKgFAAgKgAA0BTQAKgUAagFQAOgDAMABQAYAAADAGQADAGgNAQIgzACQgYAAgEgDgAAbARQAAgIAQgNQAVgUAgAAIAXABIACABQACACAAAGQAAAKgEAEIhHAiQgVgIAAgJgAgsgDQAOgtAbgbQAYgaAPAOQAAAcgJALIgmAwQgEADgMAAQgOAAgDgGg");
	this.shape_78.setTransform(22.9,19.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#BDC2C6").s().p("ABTB5QADgLAJgJQADgFAGgFQAMgLARgCIAaArQgVAKgRANIgOASgAgRgIIAEgUQANgbAQgHIAqArIgOAKQgGAEgPAPIgKAUQgegeAAgIgAiehkQABgQACgHQADgJAcgdIAoAWIAIAFQgNATgJAVIgGAdQg1gegBgFg");
	this.shape_79.setTransform(3,-0.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#83888C").s().p("AgcAcQgGgNgMgKQgJgFAAgDIADgUQAXAAAMgHQAJgFAIgOIACgCQAIATAHAFQAKAGAYgCIACAPIADAUQAAANgYAOQgVANgMAAQgQAAgLgYg");
	this.shape_80.setTransform(34.5,29.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#BBC1C7").s().p("Ah5BIQAUgUAUAAQAJgBAEANQACAIACANIgxAeQgegTAWgYgAA1AkQABgQAVgSQAVgSAWAAQAKAAADAJQACAHgHAIQg+AdgKAAIgBgBgAhFgHQAAg0ALgcQAKgbATAAQAOAAgBAbQAABJgwAMIgDABQgCAAAAgGgAACgXQAAgLAagXQAegZAYABIABAQIg0A7IgKADQgTgKAAgKg");
	this.shape_81.setTransform(36.3,25.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#BDC2C6").s().p("ACBCSQAAgLAFgKQACgDARgOQARgOADgCIA3AsIgFACQgCABgaAcIgJAXgAgwAFQgDgOgBgLIAAAAQAGgMAPgNQANgKAFgCIAyAqIgRAQIgRATIgHAUgAjjiGQAAgFAFgVQATgWACgBQAHAAAPgGIAvAlQgYAMgEAGQgCAKgFAKQgDARAAAIg");
	this.shape_82.setTransform(4.6,8.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8089C0").s().p("ADyDoQADgMAEgMIAPgTIgEAsQgFADgEAAQgFAAgEgEgAAzBSQABgKAFgLIASgTIARgRIBmBRIgUARIgTATIgHARgAhwgtIAAgLQAAgKABgGQAJgQAAgFIAZgRIBRBCIgBABIgRARQgQAOgCAFQgCAJAAAMgAjqiNQgMAAgJgNQgIgNAAgTIAPgZIAPgYIBJA6IgVAPIgUARIgHAYIAAABg");
	this.shape_83.setTransform(0.8,5.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#BBC1C7").s().p("AAUBDQAAgIAOgXQALgUAIgIIAqAMQgLArgVAVQgOAQgPAAQgOAAAAghgAgIA9QgMgPAAgNQAAgKAMgVQARgZAKgRIAJAOQAJAQAAAGQAAACgOAKQgRAPgGAsgAhdg3QAAgUAZgNQAigTA9AOIAAAfQgIAAgwALIgzALQgNAAAAgPg");
	this.shape_84.setTransform(-17.8,32.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#83888C").s().p("AgzAnQgOgQAAgUQAAgVAQgRQASgWAfAAQAeAAARAMQATAOAAAfQAAAfgSANQgSANgpAAQgYAAgQgSg");
	this.shape_85.setTransform(-7.1,26.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BDC2C6").s().p("ABbC5QgPgNgOgBQgKgBgVADQAMggAIgFIAZgDQAQABAOAHQARAIgBANQAAAGgDAMIgKAdQgGgNgMgLgAgBgXIASgOQANgGAhgIIAxBOQgXgCgSACQgNABgDACIgaAMgAh5iQQgBgPAIgQQADgEAsgdIAyAyQgZARgOAPIgMAWg");
	this.shape_86.setTransform(-7.2,0.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8089C0").s().p("ABcDZQgMgNgTgHQgLgFgJAAIgIgBQAFgDAIgBIAbgBIAgALQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIANAMQAEAFAAAJQAAAKgGAGIgHAQQgCgYgQgRgAB5CHQgTgJgFgBQgJAAgZAGIgGgoIgHgnIAagNQBGgbAABiQAAAKgDAcQgDgEgTgJgAgqhdIANgVQAHgHAMgKQALgJAJgEIBCBSIgzAOIgUANgAh3iVIAAAAIgEgCIgBgDIgLgWQgJgTgBgKQgBgUASgQQAJgJANgHIAzAvQgEACgVANIgXARQgJATgCAMg");
	this.shape_87.setTransform(-9,-0.2);

	this.instance = new lib.MIX_34_hand_L("single",0);
	this.instance.setTransform(20.5,19.2,1,1,23,0,0,-3.6,-4.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(47,50,59,0.314)").s().p("AABgGIADAKIgHADIAEgNg");
	this.shape_88.setTransform(15.9,17);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BDC2C6").s().p("ABTB5QAAgFAFgHIAHgIQADgFAGgFQAMgLARgCIAaArIgcAPQADgBgNAJQgFAEgJAOQgYgfAAgKgAgRgIIAEgUQANgbAQgHIAqArIgOAKQgGAEgPAPIgKAUQgegeAAgIgAiehkQABgQACgHQAFgOAHgKQAKgOAJAAQAIAAAoAbQgNATgJAVIgGAdQg1gegBgFg");
	this.shape_89.setTransform(3,-0.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8089C0").s().p("ACsC4IANgNQAPgMALACIAMATIAEAHIgGAAQgYACgVAGIgEgLgABGBEIAKgUIAMgQQALgNAKgEIAyBBIgTAMQgRAKgCADIgOAQgAgsghIAFgbQAJgfAOgLIA6AvQgTARgMASIgJAVgAjgh2IgChGIACgBIACgFQAQADAkANQArAPAZAMQgKAJgIAFQgFAEgJAWIgDAag");
	this.shape_90.setTransform(-1.1,-2.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#BBC1C7").s().p("AAXAxIgOgZQAIgCAHgEQAmAhALAGQgIAJgNABIgBAAQgPAAgNgSgABDAjIgeghIAHACQAMACAVAJQASAFALgLIAEAIIACALQgFAHgHAGQgFAEgCAAQgQAAgKgKgAhuAKIgBgFQgBgKAKgVIAMgbQAGASARAZQAAAKgKAGQgJAGgPAAQgHAAgCgCgABFAAIhFgfIgIgHIgDgEIAAABIgEgFIgDgDQAHgKALgFQAKgEANAEIAsAPQAgALACAPQABAPgIAFIgIAFg");
	this.shape_91.setTransform(25,32.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#83888C").s().p("AgfAZQgWgaAIgvIADABQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIAFgDQAMgIAUAAQAUAAAiAhIgLAAQgZAAgMAJQgOAIAAAMQAAACASAUQAWAYAHAJIgMADIgGABQgXgGgXgeg");
	this.shape_92.setTransform(23.1,27.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#666D96").s().p("AAAAAIAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAAAAIgBgBg");
	this.shape_93.setTransform(18.6,22.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#BDC2C6").s().p("ABTB5QAAgGAFgGIAHgIIAKgLQAJgHATgFIAaArQgVAKgRANIgOASQgYgfAAgKgAgRgIIAEgUQANgbAQgHIAqArIgOAKQgGAEgPAPIgKAUQgegeAAgIgAiehkQABgQACgHQAFgOAHgKQAKgOAJAAQAIAAAoAbQgNATgJAVIgGAdQg1gegBgFg");
	this.shape_94.setTransform(3,-0.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8089C0").s().p("ACmDNQgGgOABgLQABgHAFgLQANgMAbgLIAXAuQgDAEgSAGIgXAIIgLAJIgEAFgABBAuIAKgUIAMgQQALgLAKgEIAyA/QgYAHgOASIgNAQgAgxg3IAFgbQAJgfAOgLIA6AvQgTARgMASIgGAXgAjliMIAAhGIACgGQAQADAkANQArAPAZAMQgKAJgIAFQgEAEgKAWIgCAag");
	this.shape_95.setTransform(-0.6,0);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#BBC1C7").s().p("ABABVQgNgPAAgaIACgvIAygFIABA6QAAARgJAPQgIAOgLAAQgFgCgHgJgAANA8QgNgPAAgYQAEAAAEg8IAPAKQAQAMAAAGQAAAFgFAOQgFAQAAAFIACAZIAEAWQgMgEgKgMgAhfAAQgIgFAAgMQAAgTAOgNQAVgRA/gdQARAggPALQgJAGgUAEQgLAIgSAUQgIAHgGAHQgCACgGABQgGgBgGgCg");
	this.shape_96.setTransform(-8.1,42.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#83888C").s().p("AguAuQgUgTAAgbQAAgaAUgTQATgUAbAAQAcAAATAUQAUATAAAaQAAAbgUATQgTAUgcAAQgbAAgTgUg");
	this.shape_97.setTransform(0.1,33.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#BDC2C6").s().p("AB1C7QgOgKgOAAQgOABgTAGQABgkANgHQAQgCAIgFQAMABATAKQATAJAAADQAAARgGAjQgJgNgMgJgAgFgVIAQgRQAMgKAegOQAXALAnBBQgbgCgOAFQgIADgIAGIgYASgAiPiMIAAgIIAEgRQAhgxAIAGIA5AtQgQARgGAHQgFAGgGALIgJAZQg7gigBgJg");
	this.shape_98.setTransform(-4.3,3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8089C0").s().p("AB8DiQgKgMgSgCIgUgDIgBAAIgDgEIAEgIQAAgBALgEQAMgDALgBQAUADAEABQAKAGAQAYIgIAlIgcghgACUB9QgVgHgIAAQgIABgXALIgNgqIgNgpQAMgKAMgIQAVgHAPgBQAdAAALAzQAGAaABAjQgCgDgTgFgAgyhcIAKgZQAFgIALgNQAMgNAHgGIBLBOIgvAXIgSASgAiGiMIgGgDQgGgIgJgPQgLgSgCgLQAAgKAJgXQALgaAKgEIAzAlQgNANgXAiIgFAkg");
	this.shape_99.setTransform(-6.8,3.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#BBC1C7").s().p("AguA4QgJgKgBgXIADgCQADgDABgDIAQAPQAJAFAbAFQABAPgEAHQgFAFgLAAQgVAAgJgLgAATA6IABgKIgBgIIAXgHIAXgJQABgEAAAKQgCAKgHAIQgKALgRAAIgLgBgABPAKIAKgRIADgOQADADAAAKIgEALQgFAMgEAIQgBgHgCgGgAhYgJQgGgKAAgIQAAgCAGgMQAIgOAJgLIABACIgDAGIgBAJQAJAoAEAJQgBABgKAAQgJAAgHgKg");
	this.shape_100.setTransform(32.1,-5.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#83888C").s().p("AgpAwQgXgTAAgiQAAgTAOgQQATgXAiAAQAaAAATAeQARAZAAAVQAAAcgYAOQgQAJgXAAQgYAAgTgQg");
	this.shape_101.setTransform(33,-10);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#8089C0").s().p("Aj+BZQgIgFgMgQQgJgNgEgIIAvgmQACAnAPAMQAGAFAHADIggAagADTBLIATgSIAVgHQANgDAIAAQAKAAAGANIgCAAQghANgJAHIgGADQgHACgHAGgABdgKIAEgUQAFgSAUgYQA2ALAcAmIgoAWQgGADgMAOQgZgPgcgLgAiAAHQgBgBgGgIIgFgOQgEgNAEgMQADgMA7gWQA6gWANAFQgCAFgHAVQgGAWAAAEIADAQQgRAChWAeIgGgBg");
	this.shape_102.setTransform(2.2,-23.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#BDC2C6").s().p("ACMAqIAUgSIATgLIANgFQAFgBAGgBQAGABANAOIAVAYIgWAHIgWAHIgUATQgTgSgUgSgAjbBEQgIgBgCgCQgFgJgEgRQgEgQAAgFQAAgGAJgGQAOgJAlgSQAAAMABAGQADAJAIAQQAFAJAFAEIgyAjIgJgCgAAYgGQgcgDgUAAIgBgRQAEgZALgPQAIgLACABQAHgBAjAHIAoAIIgMAWIgLAWIgCASQgBgDgggDg");
	this.shape_103.setTransform(4.3,-25.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#83888C").s().p("AgiA8QgKgFgQgTQATgBALgHQALgHAAgOQABgOgLgNQgKgMgMAEQAEgKAIgIIATgSQgDAMALAKQAJAIAHAAQAFAAAOgEQANgFAEABQANAAAGARQACAJAAAKQAAAagWAWQgVAXgVAAQgVAAgKgFg");
	this.shape_104.setTransform(24.7,33.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#BBC1C7").s().p("AAuBZQANgYADgEQAGgFARgBQAZABANAPQAKALAAANQAAAOgLABQg6gRgSgEgAiSAvQgXgKAEgXQATgLAsAHQAvAIALAVQgHAFgNAEQgTAGgWABQgZgBgQgHgABJAcQAAgMgGgPQAVgQA0gFQAGAAAJAGQAMAIAAAMQAAAXgnAAQg3gDAAACgAgMgfQAAgYAogcQAogZAaAAQALAAAGAEQAJAGAAASQAAATg8AXIg8AVQgMgMAAgCg");
	this.shape_105.setTransform(25.5,30);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#BDC2C6").s().p("ABWCiIAVgcIAYgIIAXgFIAlAtQgVADgHAFIgOALQgNAMgKAMgAg0gBIATggQAVgLAOAAQALAAAHACIAxA6IgZAIIgYAIIgUAbgAi+ikQANgQAOgOIAZgHIAZgHIApAxIgYAIIgYAKIgWAhg");
	this.shape_106.setTransform(0.2,4.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8089C0").s().p("ACiD1QAKgNAMgLQAJgGAjgMQAKAAAHAWQgHADgJAGQgPALgGANIgKAPIgEACQgHgBgZgdgAAkBfIACgFQABgDAQgTIAXgIQAQgEAFAAQAKAAgBAAIA3BFIgtAQQgJAIgMASgAhqhHIAWgiQARgMAUgCQAOABA9BNQgEAAgVAGIgYAIIgVAdgAj0jrIBVgoIA4BHIgXAJIgZAJIgbAdg");
	this.shape_107.setTransform(-2.2,2.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#83888C").s().p("AgnA4IgBgEQgDgEgGgFIAQgLQAIgIAAgKQAAgTgRgLQgVgMABAFIgBgBIAAgBIgBgBIAAgMQAkAAAPgJQAOgKACAAIAVAEQARAEAJgBIAMANQADAFAAANQAAAYgTAZQgWAcggAAg");
	this.shape_108.setTransform(39,-62.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#BBC1C7").s().p("AiOBwQgNgGAAgKQAAgJANgHQAOgGATAAQAUAAANAGQAOAHAAAJQAAAKgOAGQgNAHgUAAQgTAAgOgHgAA3AhQAAgGAcghQAhgoAUAAQAqAAguAtQgcAaglAZIgMgRgAhEgHQAAhWAagRQAKgHAIAJQAIAJAAASIgGAyIgFArQgFAIgYAJQgMgMAAgYgAAJAMIAAACIgBgZQAAgcAOgmQAOgnAQgCQAPgBAEAWQADAXgRAkIgcA0g");
	this.shape_109.setTransform(40.9,-70.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#BDC2C6").s().p("Aj2CYIgLgYIgLgZIBTgtIAUAqIALAPQAHAIADABIhRAvQgQgMgFgHgAgLAZIgMgKIAAAAIgGgIIgLgbIBIgqIARAmIAXAVIhGAnQgCgCgLgJgADIhfIgNgHQgIgBgFgPIgFgTIA8ghQAFAMAPAUIAUATIg1AfQgFgBgLgGg");
	this.shape_110.setTransform(2,-39.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#8089C0").s().p("AktDBIgOgDIgYgRIgWgSIBug9IALAZIANAZIATATIg6AiIgjgEgAh1BJQgLgLgDgMIgDgVIBvg7IAAAFIARAeQAGAJAJAIIAIAGIhvBDQgGgEgRgSgAB3giIgUgSIgJgTIgHgSIBng5IATAjQAHAJAPAJQhkA7gHAAIgBAAgAEqilIgHgJQgCgDgJgRQAUAAANgBIAQgBQAGAAACACQACAEACACIAVAPQgeAXgKAAQgGAAgSgPg");
	this.shape_111.setTransform(-1.3,-37.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_112.setTransform(32.5,-65.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#83888C").s().p("AgrAyIgTgPIAAgBQAYAEADgXQABgLgDgLQAAgEAYgXQAbgaAZAAQAOAAAGAZIAEAZQAAAhgbAUQgXASgdAAQgKAAgRgLg");
	this.shape_113.setTransform(33,-46);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#BBC1C7").s().p("AA3BOQgRgIAAgKQAAgFACgHQADgJAAgIIAAgBQAeACANAQQAHAKAAAMQAAAQgMAAQgLAAgPgIgAh1ArQgGgNAAgQQAAgTAOgQQAPgRAVAAQATAAAAAcQAAACgGAHIgNANQgJALAAADQACAHAAALQAAAFgBACQgCADAAACQgDADgKAAQgOAAgHgQgABOAVQgTgKgXABIAAgXIgJAAQAKgBAsgKQATAAANARQALALAAALQAAAGgNAFQgJAEgFAAIgTgLgAgzgkIgLgPQAPgKBJgYQAPAAAIAGQAHAGAAAJQAAAJgdAJQgsAOgYAMIgKgQg");
	this.shape_114.setTransform(36.3,-49.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BDC2C6").s().p("AgPBVIgFgPIABAAIgEgKQgCgqAOgEIAxgKIAIAbQAHAXADAEIAOAPIguAMQgZAGgGAAQgGAAgCgGgAjsA5IAEgcQAEgLALgNQANgPAMAAQAGAAAWAIIAbAIIgLAXIgKAXIABAaQgtgKgigLgACrgGQgPgIgGgOQgDgIAAgQQAAgGAJgKIAWgWQADAGAOAMQAKAKAEACIACABIgDgEIAOAHIADABIgBAAIANAIQgIADgTAbQgJANgQAAQgGAAgIgCg");
	this.shape_115.setTransform(3.6,-28.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#8089C0").s().p("AhnBuIgDgeQAIgiASgNQAKAABDAHQgEApADANQAFAQAEAFIgWABIhWgGgAB8BYQgIAAAAgCQgBgGgGgEQgLgigFgDQgCgBAAgIQAAgIAigWIAmgVQgCAPAPARQAIAKAJAHQAIAFAIADIgoAgQgjAVgBAAQgEgBgFAAgAklAjQgLgJgBgGQAAgFADgGQADgFAAgCIAUgTQAPgPAEgCIA3AbIAaAJIgPAIQgDACgSAiIgEAbQg0gUgWgSgAEQgqIgLgFQgSgIgJgQQgGgLAAgFQAAgKARgSIAFAHQARATAPAIQAMAEAMACIgMAZQgFALgGAAQgGAAgFgDg");
	this.shape_116.setTransform(0.2,-30.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BBC1C7").s().p("AAKBiIgEAAQgDgBAAgGQAAgHAMgnQALgmgBgKIAOADQAJAAAAAFQAAAvgFAVQgIAagSAAIgHgBgAgNA1QAIgYAOgPQgBAJgEAKQgEASgHAIIgCAAQgEAAAAgGgAA/AFIAMgCIgBAFQgBAGgCADIgFAIgAgNgBQgEgHAAgJQAAgKAEgHQAFgHAGAAQAEAAAFAHQAEAHAAAKQAAAJgEAHQgFAFgEAAQgGAAgFgFgAhKg8QAFgIAUgLQAVgKAagJQgCAdgcAKQgLAEgJAAQgMAAgKgFg");
	this.shape_117.setTransform(-25.2,73.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#83888C").s().p("AgjA1QgLgUAAgfQAAgbAXgcQAVgYANAAQASAAAJAUQAJAVAAArQAAAggVAWQgQARgKAAQgWAAgNgZg");
	this.shape_118.setTransform(-19.2,64.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#BDC2C6").s().p("AgUDdIASgJQAGgCAVgCQAUgCAFABIAGBJQAAgBgVACQgWABgJACIgTAJgAgmgXIAXgLQAXgFAYACIAFBHQAAgBgUABQgTACgIABIgWAKgAg3kUQAMgIAMgGQALgCAKAAQANAAAGANQAIASACAzIgPAAQgPAAgOACIgZAKg");
	this.shape_119.setTransform(-21.9,19);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#8089C0").s().p("AgJFhIATgLQAUgGALAAIAUACIAGBGQgNgMgfALQgOAJgNAOgAgbBrIAVgLQAIgDAPgBQAQgBAKABIAJCIIgSAAQgUACgOADIgSAIgAgtiLQAAgKAZgBQAXgEAVACIAKCIIguADIgYAKgAhBmtIABAAIBDAAIANCpQAAgCgQgCQgSgCgJABIgaAJgAAQkEIAAAAg");
	this.shape_120.setTransform(-22.3,15.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BBC1C7").s().p("AgzAZQAGgDAAgFQAGADAXAHQAWAHAFAAIABANQAAASgfAAQgWAAgKgogAAdAyQAAgKgDgIIAWgJQATgKADgCIABgBIAAAGQgBAKgFAJQgKAPgWAAIgEAAgABSgDQAAgFADgLQAFgMAAgHIAFANQAAALgEAOIgFAHQgEgCAAgIgAhPACQgPgKAAgLQAAgHAGgOQAGgNAHgLIgDALQgDAQAWAmIgKAFg");
	this.shape_121.setTransform(21.8,28.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#83888C").s().p("Ag1AhQgMgWAAgbQAAgPAcgRQAZgPALAAQAOAAAXARQAeAXABAiQAAAbgaAPQgSALgVAAQglAAgSgfg");
	this.shape_122.setTransform(22.4,23.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#BDC2C6").s().p("ABTB5QAAgGAFgGIAHgIIAKgLQAJgHATgFIAaArIgcAPQADgBgNAJIgMAOIgCAEQgYgfAAgKgAgRgIIAEgUQANgbAQgHIAqArIgOAKQgGAEgPAPIgKAUQgegeAAgIgAiehkQABgQACgHQAFgOAHgKQAKgOAJAAQAIAAAoAbQgNATgJAVIgGAdQg1gegBgFg");
	this.shape_123.setTransform(3,-0.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#8089C0").s().p("ACkDIIAKgXIAOgNQAOgMAMACIAKAUIgtASIgGAHQgDADgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAgBgBAAgABIA9IAKgUIAMgQQALgNALgEIAxBBQgXAHgPASIgNAQgAgqgoIAGgbQAIgfAOgLIA7AvQgUARgMASIgIAXgAjeh9IgBhGIABgBIACgFQARADAjANQArAPAaAMQgLAJgHAFQgFAEgKAWIgCAag");
	this.shape_124.setTransform(-1.4,-1.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#666D96").s().p("AACAFQgUgRgHgOIAzAlIAAAPIgYgVg");
	this.shape_125.setTransform(15.8,-3.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#BDC2C6").s().p("AB9BhQgHgKgBgRQADgQAIgNQALgUAQAAQAIAAAmAwQgkAbgIAEIgLAUQgSgRgDgGgAgZgLIABgIQAfg5AIAAQAXAEAkAdQgjAWgCAkIAAALQg6gZgEgMgAjBg3QgCgCgFgTIAJgkQAEgHAHAAIBDAHIgbAiIgIAKIgCAWIgrgJg");
	this.shape_126.setTransform(7.8,-8.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#8089C0").s().p("ADICGQgVgGABgPQAAgQAKgEQAKgIAfgVIAqA1IgzANQgBAGgIAAQgFAAgIgCgABLAJQgBgMAEgIQAFgKAZgeIA+AzQghADgKAsgAhQgzQgcgKgDgVIAXgfQAJgMAHAAQAKAAAEACQA1APAVAIQgTAPAFABQgPAdgFAMIgCAQQgFgDg3gVgAkQiHIBeAAIgOArIADAYQguABglADg");
	this.shape_127.setTransform(5.6,-6.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#83888C").s().p("AgPAlQAAgRgFgJQgKgNgnACQAFgBACgKQADgKAAgJQAAgRAWgKQATgIAXAAQAUAAATARQAaAXAAAmQAAAYgOAPQgNAOgSAAIgogdg");
	this.shape_128.setTransform(32.5,13.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BBC1C7").s().p("AADBkQARgCAfgoQAjgsAIgEIAAAGQgGAfgbAcQgbAagUAAgAglBYIgRgJIACAAQAQgCAfgmQAcgkACgPQAPAAAFAFQAFAEAAANQAAAcggAcQgZAZgTAAIgLgDgAhNAyQAAgVAngrQATgWAUgXQARAbgQAlQgPAoggAOIgZACQgHgBAAgKgAhEgpQgZgEAAgNQAAgKATgLQASgMAbgJIAAAFQgBAngLAPQgCACgHAAQgHAAgLgCg");
	this.shape_129.setTransform(27.7,20.5);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#83888C").s().p("AgbA2QgIgCgIgEQgIgHgNgOIAAgBQAZAEAEgUQACgKgCgLQAAgFAbgTQAegWAYAAQAOAAAEAaIABAbQAAAbgdAUIgIAFQgRAKgQAAQgLAAgLgEg");
	this.shape_130.setTransform(35.3,-49.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#BBC1C7").s().p("AAxBOQgPgKAAgJQAAgGADgJIAEgNIABgBQAaAFAKAKQAJAIAAASIgBAOIgCACQgCABgGAAQgNAAgOgKgAhyAjQgGgIAAgHQAAgKgCgLQAAgXARgNQAQgNAVAAQAKAAAEAJQADAFAAAHQAAAJgPANQgPALgCAGIgDAZQgCAJgKAAQgJAAgHgJgABVAdQgMgLgGgDQgPACgHgBQgOgBgCgdQAKAAAugFQAdAAAJAoQAAAJgMAEQgGACgHAAQgDAAgKgHgAg3g+QAVgNArgJQA3gLAAAeQAAAKgVAEQguALgiALQgDgJgPgYg");
	this.shape_131.setTransform(39,-52.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#BDC2C6").s().p("AiiBmIAAAAIAAAAgAj4BcIADgdQAGgXALgIIAYgQQAyAMAKABIgLAXIgKAZQACAZABAAgAgNBaIgEgKIgEgMQgCgEAAgHQAAgfAMgFQAKgFAqgIIAKAaIAMAaIAPANIgJADIgmAOQgdAJgEABQgGAAgFgKgAC1gRQgUgPgHgZIgCgJIAfgjIAiAXIAAABIAAABIAEgHIgBAHIAdALQgRAggcAUg");
	this.shape_132.setTransform(6.8,-31.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#8089C0").s().p("AhkB3IgCgYQADgUAJgOQAJgPAjgBIAxgBQgBAqADAMQAGALAHAJQgbADgWAAgAkRBVQgWgJgIgFQgNgIAAgHQAAgFADgGQADgFgBgCQAHgWAfgRQAFgBAbAIQAjANAWAGQgMAFgKANQgMAOgBAQIgDAbQgbgGgYgJgACLBNIgNgKIgNgQQgEgIgCgJQgDgLAAgJIAJgGIBBgnIABADQADAXAWALIAIAFIAAAAIASAGIhMA9gAEYhHQgbgJgKgaIAAgGQACgGAGgDIAJAJIAeAWIAbAEIgMAUg");
	this.shape_133.setTransform(2.4,-33.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#8089C0").s().p("AA6EoQgWgNAAgSQAAABAAAAQAAABgBgBQAAAAAAgCQAAgBAAgDIAHgaQAIgaAGAAIAWADQAOABAAgBQAFAkACAFQAFANASAQQAIAFAcALIgFAGIgSAFIgYACQgfAAgWgOgAhYB7QgMgcAAgBQARgRAFgDIAlgLIAnBWQgbASgCAGIgQAeQgTgggWgwgAiKgwIAAgHIgJgyQAAgLAGgJQAGgHAJgBQAQgJAHgDIAXgGIAQBzIABAGQgfADgOAEIgWAOIgCACQgFgdgBgMgAidk0IBHAAIgBAOIADBUQgTgFgIACIgTAIIgVAPg");
	this.shape_134.setTransform(-10.8,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#BDC2C6").s().p("AAfDQQgSgVAEgCQADgCADgPIAFgQQAOgRAPgIIAUAUIAVAVQgGAIgHAGQgFAGgGAcQgBAGABASQgYgLgTgVgAhJgWIABgCIAAAAIAPgPIAEgCIAUgIIAKgDIARAAIAMBBQgYACgOAFIgUAVIgBABQgVg9ABgDgAhhjUIAVgPIARgIQAMgEAHAAQAFAAACACQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIACAkQgDAAgrARQgHAFgOAOg");
	this.shape_135.setTransform(-16.2,4.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#83888C").s().p("Ag9A+QAkABAPgsIAJgtQAGgbAAgNQAGADAGAAQAaAAASgJIABABQgBBMgQAfQgSAlguAAQgggGgKgFg");
	this.shape_136.setTransform(8.6,21.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#BBC1C7").s().p("AhdCBQgNgDgBgRQADg/AXgfQAPgUAPAAQAGAAABABIAFAEIACATQAAAPgHAKQgFAVgDAYQgEAYgPAMQgGAFgIAAIgIgBgAgKgEQAKgJAVgvQAZgygDgPIAKgCIAMgCQAQAAAAAUQAAAFghAuQgkAygRAHIgFgDgAA7g4IAVgWQAGgGAGgVQADgOgBgBIABAAQANAGAAAKQAAALgdAiIgjAnIgGAGQAGgaAPgQgAgrgeQgKgDgSAGQAWgrAegeQAYgZATgDQAEADAAAPQAAAPgbAhQgYAiACANQgQgNgGgCg");
	this.shape_137.setTransform(10.9,13.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#83888C").s().p("AgpAzQgSgJgFgPIAAgBQAUgFAGgKQAEgGAAgJQAAgKAVgPQAIgHABgHQAAgGABgCQACgHAvAAQAOAAAEAaQACANgBAOQAAAcgeAUQgYAQgUAAQgRAAgPgIg");
	this.shape_138.setTransform(5.5,26.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#BBC1C7").s().p("AAxBOQgQgKAAgKQAAgFAEgKIAEgMIAAgBQAaAFAKAJQAKAJAAARQAAALgCAEIgCABQgBACgGAAQgNAAgOgKgAh1AdQgHgOADgRQAHgwAuAAQAJAAAFAJQADAFAAAHQAAAJgLAKIgWAQQADAIgDAPQgDAPgHAAQgPAAgIgPgABVAdIgSgOQgHgFgMABQgFgBgEgHIgKgRQAKAAAtgFQAdAAAKAoQAAAOgZABQgEAAgJgHgAguguIgJgQQAEgVBWgEQAOAAAIAJQAHAGAAAGQAAALgWAEQguALghALIgJgRg");
	this.shape_139.setTransform(9.3,22.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8089C0").s().p("ABZEoQgTgLgGgVQgBACAAAAQAAAAAAAAQAAgBAAgBQAAgCAAgCQAAgNAUgnQAIAPAJAcIAJAeIAOAUIAHAHQgbgEgOgIgAg9B7IgLgeQAGgLAPgJIAlgKIAlBVQgXAUgEAEIgPAeQgOgXgcg4gAhugxIgBgHIgJgyQAAgLAHgIQAGgIAJAAIAUgMIAZgGIASB4QggAEgNAEIgWANIgCADQgGgdAAgNgAiBkzIBGAAQgBAhADA/QgGgGgSAEQgRADgFAFIgUAOg");
	this.shape_140.setTransform(-13.6,1.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#BDC2C6").s().p("AAxDfQgdgVAAgNQAAgHADgOIAFgQQALgOASgMQAcAlANAFQgGAIgHAFQgFAHgGAcQgBAGABASIAAAAIgZgRgAhJgWIABgCIAAgBIAPgOIAEgDQAPgHAggDIAMBAIgmAIQgMAGgIAOIgBACQgVg+ABgCgAhhjUIAVgPIARgIQAMgEAHAAQAFAAABABQAAAAAAAAQAAAAABAAQABABAAAAQABAAABAAIACAkQgUAEgaANQgHAFgOAOg");
	this.shape_141.setTransform(-16.2,4.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#BBC1C7").s().p("AglA5QgNgKgBgWQAEgDACgFQAFADAXAHQAWAHAGABIABAMQAAASgZAAQgOAAgKgIgAAcAzQAAgLgDgHQAEgBATgJQATgKADgCIABAGQgDALgIAJQgMAOgQAAIgEAAgABRgCQABgFAEgLQAEgMABgHQAEALABAKIgBAJIgEAHIgFAIQgFgCAAgIgAhPACQgPgKAAgMQAAgPAUgdIgDALQgEAOAXAoIgKAEg");
	this.shape_142.setTransform(24.2,33.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#83888C").s().p("AgwAnQgRgXAAgdQAAgMAUgTQAXgTAWgBQASAAAWAVQAaAYAAAeQAAAbgYAPQgTAMgVgBQggAAgSgZg");
	this.shape_143.setTransform(24.7,28.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#BDC2C6").s().p("ABYCDQACgIAKgNIALgLQAMgKASgCIAbAuIgfAQQABAAgKAHIgPAUgAgTgJIAFgVQAOgZARgKIAsAuQgLAGgLALQgKAHgFAHIgLAVQgfghgBgJgAinhqIAAgIQAAgIADgNQAEgIAdgfIAzAeIgYApIgHAeg");
	this.shape_144.setTransform(4.7,2.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#8089C0").s().p("ACrDWIALgXIAPgOQAPgMAMADIAPAgQgdAGgWAKQgGAGgCABIgBAAQgFAAgDgJgABKBBIAKgVIAPgPQALgNAJgGIA1BHIgUAMIgVAMIgNASgAgvguIAFgdQAKghAPgKIA+A0QgVASgNARQgFALgEAOgAjsiNIgBAAIgCgRIAAgoIAEgYQBbAeAkAUQgGAFgNAQQgMAPgDAFQgCAOAAAOg");
	this.shape_145.setTransform(0.3,0.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#83888C").s().p("AgiAlQgRgPAAgMQAAgGAGgEQAJgIACgEQADgCAAgTQgBgOAVgHQAKAQAOAHQAOAHARgDIgGAQQgCAEAAAHQAAADAGAKQAFAJAFAFQgRAWgEADQgFADgQAAQgYAAgUgSg");
	this.shape_146.setTransform(14.9,11.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#BBC1C7").s().p("ABQBjQgHgDgVgPQgVgOgBgCIACgFQADgFAGAAIAnAJQAlANgEAcQgVAAgMgGgAAzATQgNgEAAgKQAAgQAKgEQADgBAXAAQAQAAAXAEIAQAKIABAAQAKASgMACQgQACgbAAIgigBgAh+gRQgEgFgCgGQgDgLAHgJIAEgFIAOABQANAFAbALIADgBQACAAAAAGQAAAIgFALIgHAMgAAAguQgIgHgBgDQA8g6AqANIADAFQADAEAAAGQAAAVhSAaQgHAAgKgHg");
	this.shape_147.setTransform(16.6,10.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BDC2C6").s().p("ABeBXIAJgMQAIgFANgGIAPgFQAKAAAIACIACAgQAAAEgTAHIgZAIIgMAHgAADgUIALgZIAIgKQAKgNAJgLQAGADArAhQgSASgQATIgMAOgAicgyIgCgaIAKgWIAKgUIA9AEQgKAOgGAQIgDAMIABAAIgCAWg");
	this.shape_148.setTransform(0.3,-9.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#8089C0").s().p("AB2AxIALgPQAJgNAagXQACACATAeIAUAkQgKgBgJACQgRACgOANIgKALgAgPgUIAAgZQAFgVAOgSIBOAVQgXAcgDAHIgMAZgAjMhSIBigJIgGAUIgHAXIACAXQgrAEgsAGg");
	this.shape_149.setTransform(-5.6,-12.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#BBC1C7").s().p("AhkAqQgRgIAAgQQAAgKAJgNQAVACACACQAFAEBHATQgBAFAAANQgIAKgwAAQgTAAgPgIgAigADIAHgHIAGgGIASABIgIAfIAAABQgUgPgDgFgABCAAQAAgGALgJIAogeQAHgEAKgBQAmAAgQAYQgRAXhDASQgGgGAAgJgAiLgfIAAAAQAJgFAKABQAZAAAYAPIAAABg");
	this.shape_150.setTransform(-79.7,5.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#83888C").s().p("AgpArQgPgEgLgGQAYgRAAgUQAAgGgFgGQgGgJgLgCIgOgFQBLgNAEAAQgEAJAAAKQAAAJAEAIQAGAJAJAAQAygIAPgGQgEAWgUAQQgcAWgvAAQgIAAgOgDg");
	this.shape_151.setTransform(-74.4,8.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#666D96").s().p("AgFAAIAFAAIAGABg");
	this.shape_152.setTransform(-54.6,7.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#BDC2C6").s().p("AjWCMQAEgGADgPQADgMAAgHIgCgQIA+gEQADgFADAJQAEAIABAJIgCApIgaACQgKAAgrgEgAApBRQgDgLgDgGQgHgKgPgLIA4gdQAPAOAFAIQAFALAEAUQgyAggFAAQAAgHgCgLgAC8hgIgWgJIAIgmIAWADQAKAFAJAFIgIAwg");
	this.shape_153.setTransform(-32,-0.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#8089C0").s().p("AguB8IgBgLQgCgLgDAAQALgBApgLQAkgLAUAAQAFAAAUARQAJANAAAMQAAANgLAEQgaALhpAQQAGgYAAgRgAkYCTIAMgRQAGgJAIgGIADgDQgGgBAAgBIACgMIAAADIABgDQAsAMApgDIABAAIAFABIgEAAQAGAFADAJQABAFgEANQgEAPgGAHQg3gGg2gJgACuAxIgTgYQARgIAVgXQAZgdAIgbQAMAEAKAFQARAJAAAKQAAAYhRBVQgBgNgJgNgAEJiIIgXgDQABgMADgNIAdAAIAGAig");
	this.shape_154.setTransform(-38.6,-2.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BDC2C6").s().p("AgpBpQgMgPgMgEIAHgKQAEgLADgNIADgRIAJAEIAVAPQAVAZAAARQAAAKgDAFQgFALgXAFQgBgJgMgNgAAMgwIgTgBQgBgegFgUQgDgKgFgLQAHgDAKgBIAHgCQAOABANAGQAIAEAUAPIAIBIg");
	this.shape_155.setTransform(-16.6,3.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#8089C0").s().p("AAHCLQABgLgIgPQgHgOgHgFIgcgPQALgLAFgKQAGgNAJgjIATADIAiAMQATAIAAAGQAAAmgWAgQgMASgUAVgAgChbQgPABgLAFIgOgeQgNgagFgGIBOAAIAOAWQALASAKAeQgUgRgjADg");
	this.shape_156.setTransform(-16.4,-1.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#83888C").s().p("AhOAyQglglAAghQAAghARgWQAMgQALAAQA1AVAjAHQAhgIAYAFQAuALAABIQAAAPgaAbQgfAhgoAAQg3AAgqgqg");
	this.shape_157.setTransform(-51.4,15.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#BBC1C7").s().p("AgHB0QAUgbBCgDQBAADAGgCIgBADQgaAQg7AIQglAEgjAAgAAVBGQgCABgCABQgBABgBAAQAAAAAAAAQAAgBACgBIADgCIABgLQAFgigBgFQAzACASgGQATgGAdAAQASAAALAGQAHAFAAAEQAAAZgvAMQgjAKgwAAIgVADQgEABgCACIgDAFgAAAgZQAAgNAIgDIAUgCIBkgSQAOAAAHAHQAFAEAAAGQAAAUgeAOQgdALgoAAQg3AAAAgagAiohFQgLgFADgGQAAgUAjgKIAbgHIA0AAQA2AAgCAUQgDATgTAJQgUAKgaAAQhFAAgVgKg");
	this.shape_158.setTransform(-40,12.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_58},{t:this.shape_79},{t:this.shape_78},{t:this.shape_55}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.instance}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134}]},1).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]},1).to({state:[{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155}]},1).wait(1));

	// Layer 5
	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("ACjD3QhfjYithhQgZgPhTglQgrgTAAgQQAAgoAOgaQAPgbAfAAQAfABCJBcQCHBdAlAzQAlAxAhA1QAiA1AGAVQAJAbgQASQgQATgxAQg");
	this.shape_159.setTransform(0.4,-0.4);

	this.instance_1 = new lib.MIX_34_hand_L("single",0);
	this.instance_1.setTransform(20.5,20,1,1,0,0,0,-3.5,-4.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("ABPEAIhAAEQgPgEgCgLQgFgLAAgGQAAgWAIgKQARgRAxgBQg2hegQgbQgkg3gngcIgrgiQgngdgJgFIiRhBIAAh6QAEABACACIACADQA5ARAxAUQAoAQAgAUIAeATIBnBbQAcAVBhCLQAGgRAWgHQAKgDAKABQATAAAHAMQAGAJAAANQAAAQgFALQgFANgOANIAOgIQAkgPAMAAQAWAAAOAHQANAHAAALQAAAfgQAGQgqARgQALQAagIAPAAQAyAAAAAmQABASgJAHQgKAJgbgBQhOgCgQAMIgKAJQgHAEgUAAQgfAAgcgag");
	this.shape_160.setTransform(7.5,3.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AAxEsQgxgJAAgFQgagWgkg0QgkgzgQgrIgihgIgpiQQgBgLALgTQAQgbAcAAQAxAAAQAQQAKALAJAsQABgEANgIQgMgdARgQQAVgSA3AAQAfAAAlATIAEgZIgBgOQhQgEAAg4QAAglAqAAQAnAAAmAeQAlAdgBAXIgYBPQAAAFAFAPQADAPAAAFQAAAagQAkQAMCNgBADIAAAcQgBAcgFAqQgBAHgKAhQgLAVgDADQgfAggoAAIgSgBgABqELIAAAAIADgDgAgQAcQAQA4ArAvIAAgTQgPg2gPgoIgMgeQABgGADgNIAFgRQglABgJgCQAKAwAKAdgAhAB1IAAAAIADgDg");
	this.shape_161.setTransform(-23.5,0.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("ABEDnQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgBAAIgDAAQhBAAgTgvIgCgKQgEgDgDgIIgBgRQADgXAMgWQARgkAbgGIgCgBIADgCQAJgEAMgDQhlhMhrg2QgzgagbgPIAAhtQALgCAyAVIASAHIAEACIABABQA8AbBeAzQBuA+A6BSQA+ADgBA1QAAAGgFAGQAPAPAAAOQAAAFgDAEIACADQACADABAKQgBAMgKALIAAAIQgHAQgHAHQgGAQggAKQgeAOgkAAgAAyAwIAAgBIAAAAIgDAAgAAvAvIACgBIgBgBIgBACgACQATIAAgBIgBABIABAAIAAAAg");
	this.shape_162.setTransform(3.5,4.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AAzDDQgzgYgZghIgugzQgeghgZgnQgXgggVgqQgSgjgJgKIAOgNIAugsIAUgRIAhBBQALAVAFADQAAABAAAAQAAAAABABQAAAAAAABQAAABAAABQAAABAgAzQArhDBGgIQgLgWgJgLQgMAGgYAHQgVAHgCAAIgZgHQgWgMAAgaQAAgVAagPQAagRAvAAQBIAAAIBEQACAOADAJQADAMAIAGQAPAMALATQAaAugOAwQgFAPgCAPIAEALIAGAOQAKAfgBAdQAABYg0AAQgqAAg0gYgAApA9IAeAXIAAgLIgBAAIgIgaIAAgCg");
	this.shape_163.setTransform(-8.5,9.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AiaBJQgdg/gUhHIgPhGIABgBIABAFQATggAjgOIACgBQAQgGATgDIAOAmQAWBLAIAVIATAvQAMAaANAWQAXAmAjAeIASAOQAIg7AAgHIgBgMIgNgPQgCgCgBgIIAEgUIAFgOIglABQgSAAgJgVQgEgKgBgLQAAgKAIgKQAGgIAIgDQgFgJAAgSQAAgRAZgKQAagKAjABQAkABAYANIAIAFQABgKACgLIgBgSQgwgIgSgPQgNgNAAgYQAAgdAYgHQAVgGAhAMQAeAMAXAVQAYAWAAAVIAAADIgDAQQgFAegOAbIgCACQAIATAAAVIAAANQgFAmgYAbIgDA4QgBAUgEAoQAAAggVAmQghA7hBAAQh0AAhVi+gAiLA5IAAgCIgBAAIABACg");
	this.shape_164.setTransform(-14.5,8.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("ABaEAIhCAFQgIgJgIgMQgGgKAAgCQAAgWAKgKQARgRAxAAQgXg6gtg9Qgmg3gngfIgrgiQgngdgJgFIiRhBIgVABIAAhMQAAgvASAAQAHAAACAEIACACQA5ARAxAUQAoAQAgAUIAeATQAyAcA3A8QAaAYBhCLQAGgRAWgGQAKgDAKAAQARAAAJANQAHAJAAAJQgBAGgHAUQgJATgIALIAQgJQAigNAMAAQAWAAAOAGQANAIAAAKQAAAfgQAHQgqAQgQAMQAagJAPAAQAyAAAAAmQAAAXgWAFIhfAGQgTAMgoAKQgfAAgcgag");
	this.shape_165.setTransform(6.4,3.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("ABhEOQgHgKgBgSQABgHADgHQAGgPAQgCQgCgCgCgFInzmIQgDgCgCgHQgDgJgBgGQABgTASggQAUghAPAAQAGAAABABIABADIECDNQAEAFDmC4QgBglAVgWQARgSAQAAQAkAAAAAyQAAAIgHAXQAfgkA1gPQAaAAgBAqQAAAHgDADQgRAQgdAeIAVgOQAYgPAPAAQAUAAALAPQAIAMgBAPQAAAIgVAMIhOAlQgMAQgZARQgZARgLAAQgSgBgUgIIg6AhQgZgTgHgIg");
	this.shape_166.setTransform(11.9,9.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("Ag0FcQgJgOgHgFQgRgMgKgSQgIgNAAgHQAAgQARgdQATggAFgLIhAAYQgKACgGABQgTAAgLgRQgJgMAAgNQAAgVAZgRQAdgSAtgBQAFABAXAFQAWAFAFAAQAJAAAOgLQARgPAYgJQAMgEAIgVQAIgXAAgbQAAhAhNhmQhIhcgagBQgZABAAgrQAAgVALgcQAMgcAMAAQAcAABFBCQAjAiAuAxQA8BAAYBDQAUA3AABDQAAA2gnBKQgjBCgXAMQgKAFgYAEQgVAygRAZQgJAOgFAFQgIAHgMAAQgVAAgKgMgAhijwIAAAAIgEgCg");
	this.shape_167.setTransform(-11.1,8.8);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("ACaD+IgDgGQAAgBABAAQAAAAAAgBQABAAAAAAQABgBABAAQAEgCAAgGIgVgvQgLgZACAAQADgBghg1Qgjg0gkgmQgigjhCgzQgggaiHg0IgWABQAKg3gDgwQAAgOAHAAQAIABAjAIQAjAIBBAfQBBAgAuAkQBJA7AlAwQAWAcADACIA4BPIAmBCIAIABQAEACAAAGQAAAFAHAZQAHAYAAAFQAAAHgDABIgGAAQgEAAgPgbIggAvQgRAZgHAAQgTAAgFgGgACmCfQgHAFgGAHQABAIAFAJIAGALQANAAAJgGQAJgFAAgJQAAgIgJgGQgIgGgMAAIgBAAg");
	this.shape_168.setTransform(0,2.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("ADQFAQgRgKgIgPQgDgFgDgNIgCgMQgDgCgWgIIgZgKQgMASgJAGQgIAGgQAAQgjgBAAgeQAAgHASgjQARgkAAgOIgXgvIgbg2IAHAOQgzhghlhNQgPgKgYgPQgigTgagMQgagMgqgPQgpgPARgUIAAhkQCXAlCBBwQBtBgA4BuQAKAUARAcQAUAjAHAFQALAIAgApQACADAiAQQAXALAEASIAHAcQAGAWAAADQAAAQgcAVQgcAXgWAAQgLAAgPgHgACjDGIAAgDQAAAAAAAAQAAAAABAAQAAAAABABQABAAABABIAAAAIgEgEgACxBoQADAHABABIgHgOg");
	this.shape_169.setTransform(7,8.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AA0F+QgKgIgJgDQgEACgIAAIgMgBQgOgFgNgVQgPgZAAggQAAgFAFgQQAFgPAAgGQgBgFAAgIQgSAhgYAQQgSANgPABQgWgBgMgSQgIgNAAgMQAAhAB8ggQgBgXAcgWQAdgWADAIQAXgYAAgvQAAgugTgoQgQgigngxQgtg2gqgiQgqgigUgEQgUgGgCgjQgCgiAKgXQAKgXAMgBIASABIAKACIAsAlIABAAIBLA+QA/A0AgAkQBYBiAACMQAAAagLA6QgMA+gNANQAHgCgVAhQgWAhAAAUQAABIgOAXQgJAOgaAAIgIgIg");
	this.shape_170.setTransform(-6.4,15.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("ACvB9QgKgFgKgIQgVgQAAgZQAAgGADgJQAHgQAQgRQgbgggzghQhDgsg3AAQg0ADgmAMQglANg+AqQg+AoABANIABABQAAABgGAAIgggTQgegXAAgfQAAgMBmg5QBng6AwgPQAvgPBSANQBTAOBEA6QAJAFAcAgQArAxAEACIAaAIQAPAEAJAGQAKAIASAjQAUAkAAAOQAAAqglAWQgbAQgiAAQggAMgDAAQgyAAAAg8g");
	this.shape_171.setTransform(7.2,-15.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AEJFSQgmgMgQAAIg1AOQgYAAgagXQgZgXgHAAQggAAgUgOQgYgQAAggQAAgNAYgEQAVgEARAEQmQnYADABIAAAAIgDgCQgIgHgXgeIARgHQBpgdgEgMQgBgDgGgCIALAAIAFAAQgDADgBAEIGXH1QAXgXAegSQAlgXAVAAQAtAAABAtQgBASgUANQgJAGg4AbIAIAIIAbgOQAdgNAgAAQAVAAAMAUQAJAOgBALQAAAOgPAPQgTARgagGQALAHAHAPQAHAOgBANQAAAGgKAKQgMANgLAAIgjgLg");
	this.shape_172.setTransform(7.4,7.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("Al/FUIhohFIKAlgIgGgTIgEgOQAAgSAXgJQASgHAaAAIAMgZQAMgdAAgSQAAg0ADgSQALgvAkAAQALAAALANQANAPAAAXIgKBaQABAAAAgGQAIgRAGhCQAMg6AnAAQAbAAAKArQAAANgIAXQgMAkgbArIABAAQALgKAmgsQAZgfAPAAQAMAAALAJQANAKgFAcQhCBFgRAHQgSAHgLAgQgMAggPAKIgUALIgJAEQgRAFglATQhDAiirBlIiHBLQhYAxgtAjQgMAMgbAPIgzAaQgeARgIAHIgBAAQgDAAgJgEgAheB6IAAAAIgGgIgADqiUIABABIAAgBIgBAAIAAgBIAAgBIAAACgADqiUg");
	this.shape_173.setTransform(9,-50.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AkBC8QhTgWgSgNIgyghQgGgEAAgSQAghHAcgCIAFABQBeAsAxAQQA1ARAxAAQAPAAApgIQAwgKAOgKQArgbApgnQAugqAAgTIgIgVQgIgVAAgDQAAgQAHgMQAGgLARgRQAPgQAKgCQAMgDAGgFQAOgKAbgKQAigOAXgBQAyABgGAeQgFAagYANIANgEQAUgEAIAAQAXAAARAQQAUARAAAeQAAAFgHAJQgKAMgSABQAGAXgGAQQgIAUgVgBQgLAAgSgKQgNgIgJgJQgFAFgVAOQgVAMgGABQgKAEgPAWQgVAfhUBPQA0g1guAuQgvAuhBATQhAATguABQg9gBhhgagAhMCuIABAAIgEgLgAEeiIIADADIAVgJIgYAGg");
	this.shape_174.setTransform(9.2,-38.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AADI2QgNAAgIgHQgNgKAJgYQgWgHAAgTQAFgVAOgOQgJgFgHgRQgHgPAAgLIgNABQgtAAAAgfQAAgZAmgNQA0gSALgKIggm7IgLibQgUkagDgDIgBgBIBsAAIAsIvQAbFcAAAYQAAAYglBXQglBXgdABIgBAAg");
	this.shape_175.setTransform(-23.8,28.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AB8ElQgRgOAAgVQgMgGgMgJQgYgSAAgVQAAgTADgHQACgGAOgQIAOgQQgBgGgOgYIgdgwQgCgFgtg0Igvg2IgrgiQgmgdgKgFIiRhBIgCAAIAAh6QAgABBuA6QBwA8AqAuQAsAuASAVIAYAaIAUAbQASAZAYAqQAUAiALAGQAMAGARANQASAOAKAMIAbApQAKANAAAPQAAAbgLASQgHAMgUAQQgKAIggALQgjALgTAAQgNAAgOgMg");
	this.shape_176.setTransform(4.3,6.2);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("ACyEOQgLgEgGAAQgMACgHAAQgOAAgGgJIgbgfQgNgOAAgUQAAgJAng0QgdgBgOgKQgLgJAAgNQAAgcAUgLQAMgHAmgPQghg5gigaIg1gpQgTgPhbgkQhbgkhdAAIgkABIAAhiIBTgDQCkAAB+BLQBGApBCBIQAQARAXAjIAaAjIAkAoQARAVgBASQABBcgwA4QgkArgiAAQgFAAgNgDg");
	this.shape_177.setTransform(9.7,4.7);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AkuDIQh4gYAAgpQAchQAiABIA3ASQA4ASAUAEIAtAJQAZAEAjAAQAjgBAtgLQAkgIAPgKIAUgMIAkgYQAyggAhgrQAKgQAAgNIgPgvQgDgaAXgaQAWgZAOABQAPAAAegRQAegRAbAAQAzAAAMAXQANAYgvAYIANgCQAjgJAYATQAXARAAAeQAAAggmABQAHAfgNAOQgKAKgOAAQgfgIgWgYQgEAEgNAJIgcAMIgoA3QhJBjh1AvQgTAHgUAFQg+ARgjAAQhiAAhfgTgAB+BbIAAgBIgIgFgAEqiOIADADQAGgCAQgFQgGAAgTAEg");
	this.shape_178.setTransform(11,-41.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AjJBhQg1iTAAiYIABhxIBZAAIAUDPIAAgBQAOBHADAXQAXBYAPAjQAhBMAvAAQAHAAAFgKQAHgJgBgIQAAgiAzhLQA3hOAiAAQACAAARAMQAFgBAMgFQALgEAGAAQALAAATAMQAWAOABANQgBADgHAOQgLARgOAPQgdAegCAJQgCAJACAcQAAA2gRAqQgRAogZAKIgzAYQgZALgdgBQiWAAhOjbgAjYADIABgCIAAAAg");
	this.shape_179.setTransform(-1.9,1.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("ACGEdQgMAMgYAKQgUAHgNABQgKgBgJgBIAVAAIhRgFIAVAAQiWgQhFjeQgqiFAAiNIABhxIBZAAQALDjA0CSQAsB9AogBQAkgnAugWQAlgQAdAAQAgAAAQANQAOAJAAAQQAAAJgEAEQgEAGgPAKIgLAEQAegFAMABQAWAAAQATQAQATAAAVQAAAggmABQAGAfgMAOQgKALgOgBQgYAAgdgggACCCzIADADQAFgDARgEQgGAAgTAEgAjYAAIABAAIAAAAg");
	this.shape_180.setTransform(-1.9,2.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("ACFE9QgRgOAAgVIABgIQgPgCgMgJQgWgOABgXIADgZQADgPAPgNQANgKAAgCQAAgFgcgxQgbgxgMgPQgmg2gsgpIgugmQgogggKgFQgkgVglgSQgogRgOgKQgQgMgGgPIgBgBIgCgQIAAhbQAaAFAtASQA8AZA/AnQBkA/BJBgQBLBeAUAkIAcAzQAIAPADADQAEABAMAIQAWAOAYAlQAaAmAAALQAAAXgQAXQgKANgNAOQgKALghACQgEABgQAIQgPAIgSAAQgNAAgOgMg");
	this.shape_181.setTransform(5.8,8.7);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("ADNDeQgXgSgngPQgpAHgggeQgUgSgHgWIgygcQgKgKgDgKIABgMQACgcAbgFIAvAQQgUhqhLgoQg2gdhnAAQggAAhDAMIAAhYIACgVIB8gIQETAAAtDqQAvgTAFAAQASAAAOAJQARAIAAATQAAAhg3ARQA2gDAaAYQARAPAAAOQAAANgOALQgMAJgJAAIgvgFQAXAEAPAQQAQARAAAPQAAAKgFAJQgIANgRAAQgTAAgNgKgAh+imIAAAAIADgMg");
	this.shape_182.setTransform(3.3,-0.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AAXCuIgugCQg+gBgogKIgkgJIgaAHQgaAGgPABQgfgBgOgFQgFgCgLgKQgKgKgFAAQgjAAgpgMQhAgSAAgkQAAgSALgTQAQgbAgAAQAHABASAFIBLAcQBUgIAFgCQALgDAbgPQAYgNAGAAQATAAAMAJQAMAIAAAQQAAAOgIALIgJAJQAfAEArACIArACQDrAABSh7QApg/gFhBIBJAAIAEA6QAAA0gZAtQgdA0hEA9QhgBTiwAAIgcgCgAk9A4QgHgGgOgCIAAABIAVAHIAAAAg");
	this.shape_183.setTransform(-52.9,-1.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AguDbQjnAAAAifQAAgDAEgNQAEgNAOgYQAOgXAJgHIAkgbQAxgWASABIAjABQARAAAaAMQAhAOAAAVQAAAIgDAKQgDAHgEAFIAJgBIAzgKQAngIAXAAQATAAAOAHIAMAFQAQAAALgfQAJgbAAgYQAAgegXgzQgPgkgLgQIAHgDIBZAAQAZAEASA6QAQAzgDBEQgEBBggAmQggAlghAWQghAWgLAZQgLAahAALQg6AKgnAAIgHAAg");
	this.shape_184.setTransform(-36.8,5.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:-3.5,rotation:0,y:20}},{t:this.shape_159}]}).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168},{t:this.instance_1,p:{regX:-3.6,rotation:23,y:19.2}}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_181}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.3,-25.1,70.4,59.6);


(lib.HeadclipTakeCare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_nose
	this.instance = new lib.MIX_34_nose("synched",0);
	this.instance.setTransform(-398.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({startPosition:0},0).wait(56).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(11).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(8));

	// MIX_34_pupil_L
	this.instance_1 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_1.setTransform(-379.8,-2.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgPAMQgJgMABgRIABgFQANACASAAIANAAQAEAQgGANQgFAOgLAAQgKAAgJgLg");
	this.shape.setTransform(-374.5,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:-379.8,y:-2.4}}]}).to({state:[{t:this.instance_1,p:{x:-382.7,y:-3.4}}]},2).to({state:[{t:this.instance_1,p:{x:-386.1,y:-6.3}}]},1).to({state:[{t:this.instance_1,p:{x:-389.3,y:-8.6}}]},2).to({state:[{t:this.instance_1,p:{x:-390.7,y:-10.3}}]},1).to({state:[{t:this.instance_1,p:{x:-390.6,y:-6.2}}]},55).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape}]},11).to({state:[{t:this.instance_1,p:{x:-375,y:-6.5}}]},1).to({state:[{t:this.instance_1,p:{x:-375,y:-6.5}}]},1).to({state:[{t:this.instance_1,p:{x:-375,y:-6.5}}]},2).to({state:[{t:this.instance_1,p:{x:-375,y:-6.5}}]},16).to({state:[{t:this.instance_1,p:{x:-376.6,y:-5.1}}]},1).to({state:[{t:this.instance_1,p:{x:-378.2,y:-3.8}}]},1).to({state:[{t:this.instance_1,p:{x:-379.8,y:-2.4}}]},1).wait(5));

	// MIX_34_pupil_R
	this.instance_2 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_2.setTransform(-471.2,2.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgZAMQgOgMAAgTIAEgBQAfgEAaAAIARAAQABAGAAAHQgCASgNANIgGADQgGACgHABQgSAAgNgOg");
	this.shape_1.setTransform(-485.4,6.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAJQgOgLAAgTIAAgBIAKAAIAtABIARAEIAHACIAAACQgCASgNAMIgGAEQgGACgHAAQgSAAgNgOg");
	this.shape_2.setTransform(-458.2,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-471.2,y:2.4}}]}).to({state:[{t:this.instance_2,p:{x:-474,y:1.2}}]},2).to({state:[{t:this.instance_2,p:{x:-477.5,y:-1.6}}]},1).to({state:[{t:this.instance_2,p:{x:-484,y:-6.2}}]},2).to({state:[{t:this.instance_2,p:{x:-485.3,y:-7.8}}]},1).to({state:[{t:this.instance_2,p:{x:-485.3,y:-2.1}}]},55).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},11).to({state:[{t:this.instance_2,p:{x:-458.3,y:-2.9}}]},1).to({state:[{t:this.instance_2,p:{x:-458.3,y:-2.9}}]},1).to({state:[{t:this.instance_2,p:{x:-458.3,y:-2.9}}]},2).to({state:[{t:this.instance_2,p:{x:-458.3,y:-2.9}}]},16).to({state:[{t:this.instance_2,p:{x:-462.6,y:-1.1}}]},1).to({state:[{t:this.instance_2,p:{x:-466.9,y:0.6}}]},1).to({state:[{t:this.instance_2,p:{x:-471.2,y:2.4}}]},1).wait(5));

	// MIX_34_browR
	this.instance_3 = new lib.MIX_34_browR("synched",0);
	this.instance_3.setTransform(-475.4,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({rotation:-8.8,x:-475.6,y:-32.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-14.8,x:-475.8,y:-33.6},0).wait(56).to({x:-475.7,y:-32.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.8,x:-474.8,y:-25.8},0).wait(1).to({rotation:0,y:-24.4},0).wait(11).to({x:-475.3,y:-27.5},0).wait(1).to({x:-475.2,y:-30.2},0).wait(1).to({y:-31.6},0).wait(2).to({y:-30.2},0).wait(16).to({startPosition:0},0).wait(1).to({y:-29.8},0).wait(1).to({x:-475.3,y:-29.3},0).wait(1).to({y:-28.9},0).wait(5));

	// MIX_34_browL
	this.instance_4 = new lib.MIX_34_browL("synched",0);
	this.instance_4.setTransform(-389.9,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({rotation:3.3,x:-390.1,y:-33.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:10.8,x:-390.3,y:-34.6},0).wait(56).to({x:-390.2,y:-33.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:6.5,x:-389.4,y:-28.1},0).wait(1).to({rotation:0,x:-389.3,y:-26.7},0).wait(11).to({x:-389.8,y:-28.5},0).wait(1).to({x:-389.7,y:-31.2},0).wait(1).to({y:-32.6},0).wait(2).to({y:-31.2},0).wait(16).to({startPosition:0},0).wait(1).to({y:-30.8},0).wait(1).to({x:-389.8,y:-30.3},0).wait(1).to({y:-29.9},0).wait(5));

	// MIX_43_eyeR_v01
	this.instance_5 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_5.setTransform(-425.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({startPosition:0},0).wait(56).to({startPosition:1},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:2},0).wait(11).to({startPosition:7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(12));

	// MIX_43_eyeL
	this.instance_6 = new lib.MIX_43_eyeL("single",0);
	this.instance_6.setTransform(-425.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({startPosition:0},0).wait(56).to({startPosition:1},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:2},0).wait(11).to({startPosition:7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(12).to({startPosition:0},0).wait(12));

	// MIX_34_mouth
	this.instance_7 = new lib.MIX_34_mouth("single",0);
	this.instance_7.setTransform(-423.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(5).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(4).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(3).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(4).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(9).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-494,-39.4,127.7,111.9);


(lib.HeadclipIDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_nose
	this.instance = new lib.MIX_34_nose("synched",0);
	this.instance.setTransform(-398.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(96).to({startPosition:0},0).wait(9).to({startPosition:0},0).wait(66).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(61));

	// MIX_34_pupil_L
	this.instance_1 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_1.setTransform(-379.8,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({x:-379.6,y:-0.6},0).to({_off:true},2).wait(4).wait(1).to({startPosition:0,_off:false},0).wait(1).to({x:-379.7,y:-2.3},0).wait(3).to({startPosition:0},0).wait(54).to({x:-379.6,y:-0.6},0).to({_off:true},1).wait(8).to({startPosition:0,_off:false},0).wait(1).to({x:-390.9,y:-10.8},0).wait(1).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-386,y:-7.1},0).wait(1).to({x:-382.5,y:-4.4},0).wait(1).to({x:-380.4,y:-2.8},0).wait(1).to({x:-379.7,y:-2.3},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({x:-379.6,y:-0.6},0).to({_off:true},2).wait(4).wait(1).to({startPosition:0,_off:false},0).wait(1).to({x:-379.7,y:-2.3},0).wait(3).to({startPosition:0},0).wait(4));

	// MIX_34_pupil_R
	this.instance_2 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_2.setTransform(-471.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({x:-471,y:4.1},0).to({_off:true},2).wait(4).wait(1).to({startPosition:0,_off:false},0).wait(1).to({x:-471.1,y:2.4},0).wait(3).to({startPosition:0},0).wait(54).to({x:-471,y:4.1},0).to({_off:true},1).wait(8).to({startPosition:0,_off:false},0).wait(1).to({x:-482.8,y:-10.3},0).wait(1).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:-477.7,y:-4.7},0).wait(1).to({x:-474,y:-0.6},0).wait(1).to({x:-471.8,y:1.6},0).wait(1).to({x:-471.1,y:2.4},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({x:-471,y:4.1},0).to({_off:true},2).wait(4).wait(1).to({startPosition:0,_off:false},0).wait(1).to({x:-471.1,y:2.4},0).wait(3).to({startPosition:0},0).wait(4));

	// MIX_34_browR
	this.instance_3 = new lib.MIX_34_browR("synched",0);
	this.instance_3.setTransform(-475.4,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(30).to({x:-474.9,y:-25.5},0).wait(2).to({x:-474.6,y:-23.4},0).wait(1).to({x:-474.5,y:-22.3},0).wait(3).to({x:-474.6,y:-23.4},0).wait(1).to({x:-475.1,y:-26.5},0).wait(1).to({x:-475.3,y:-28.9},0).wait(1).to({x:-475.4,y:-29.9},0).wait(2).to({x:-475.3,y:-28.9},0).wait(54).to({x:-474.9,y:-25.5},0).wait(1).to({x:-474.3,y:-20.9},0).wait(8).to({x:-474.9,y:-25.5},0).wait(1).to({rotation:-7.3,y:-29.2},0).wait(1).to({rotation:-14.8,x:-475.3,y:-32},0).wait(2).to({x:-475.2,y:-31.3},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:-8.1,x:-475.3,y:-29.2},0).wait(1).to({rotation:-3.4,x:-475.2,y:-27.8},0).wait(1).to({rotation:-0.6,x:-475.3,y:-26.9},0).wait(1).to({rotation:0,y:-26.6},0).wait(2).to({y:-27.9},0).wait(1).to({y:-28.9},0).wait(46).to({x:-474.9,y:-25.5},0).wait(2).to({x:-474.6,y:-23.4},0).wait(1).to({x:-474.5,y:-22.3},0).wait(3).to({x:-474.6,y:-23.4},0).wait(1).to({x:-475.1,y:-26.5},0).wait(1).to({x:-475.3,y:-28.9},0).wait(1).to({x:-475.4,y:-29.9},0).wait(2).to({x:-475.3,y:-28.9},0).wait(4));

	// MIX_34_browL
	this.instance_4 = new lib.MIX_34_browL("synched",0);
	this.instance_4.setTransform(-389.9,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(30).to({x:-389.4,y:-26.5},0).wait(2).to({x:-389.1,y:-24.4},0).wait(1).to({x:-389,y:-23.3},0).wait(3).to({x:-389.1,y:-24.4},0).wait(1).to({x:-389.6,y:-27.5},0).wait(1).to({x:-389.8,y:-29.9},0).wait(1).to({x:-389.9,y:-30.9},0).wait(2).to({x:-389.8,y:-29.9},0).wait(54).to({x:-389.4,y:-26.5},0).wait(1).to({x:-389,y:-23.9},0).wait(8).to({x:-389.4,y:-26.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:10.7,x:-389.5,y:-30.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:15,x:-389.8,y:-33},0).wait(2).to({x:-389.7,y:-32.3},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({rotation:8.3,y:-30.2},0).wait(1).to({rotation:3.6,x:-389.8,y:-28.8},0).wait(1).to({rotation:0.8,y:-27.9},0).wait(1).to({rotation:0,y:-27.6},0).wait(2).to({y:-28.9},0).wait(1).to({y:-29.9},0).wait(46).to({x:-389.4,y:-26.5},0).wait(2).to({x:-389.1,y:-24.4},0).wait(1).to({x:-389,y:-23.3},0).wait(3).to({x:-389.1,y:-24.4},0).wait(1).to({x:-389.6,y:-27.5},0).wait(1).to({x:-389.8,y:-29.9},0).wait(1).to({x:-389.9,y:-30.9},0).wait(2).to({x:-389.8,y:-29.9},0).wait(4));

	// MIX_43_eyeR_v01
	this.instance_5 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_5.setTransform(-425.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(30).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(54).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(4));

	// MIX_43_eyeL
	this.instance_6 = new lib.MIX_43_eyeL("single",0);
	this.instance_6.setTransform(-425.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(30).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(54).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(8).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:1},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:2},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(4));

	// MIX_34_mouth
	this.instance_7 = new lib.MIX_34_mouth("single",0);
	this.instance_7.setTransform(-423.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(54).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(65).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-494,-39.4,127.7,111.9);


(lib.HeadclipGoggles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_nose
	this.instance = new lib.MIX_34_nose("synched",0);
	this.instance.setTransform(-398.4,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(24).to({startPosition:0},0).wait(6).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// MIX_34_pupil_L
	this.instance_1 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_1.setTransform(-379.8,-2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},3).wait(4).to({x:-372.1,y:-1,_off:false},0).wait(1).to({y:-3.1},0).wait(1).to({y:-4.1},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},24).wait(6).to({x:-379.3,y:1.3,_off:false},0).wait(1).to({x:-379.7,y:-2.3},0).wait(6));

	// MIX_34_pupil_R
	this.instance_2 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_2.setTransform(-471.2,2.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},3).wait(4).to({x:-454.1,y:2.7,_off:false},0).wait(1).to({y:0.6},0).wait(1).to({y:-0.3},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},24).wait(6).to({x:-470.6,y:6.2,_off:false},0).wait(1).to({x:-471.1,y:2.4},0).wait(6));

	// MIX_34_browR
	this.instance_3 = new lib.MIX_34_browR("synched",0);
	this.instance_3.setTransform(-475.4,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({x:-474.5,y:-23.1},0).wait(4).to({x:-474.3,y:-26.5},0).wait(1).to({x:-475.3,y:-28.9},0).wait(1).to({y:-30.6},0).wait(2).to({y:-29.6},0).wait(62).to({scaleX:1,scaleY:1,rotation:-9.4,x:-475.5,y:-27.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.8,x:-475.3,y:-26.4},0).wait(24).to({startPosition:0},0).wait(6).to({rotation:-5.8,x:-475.4,y:-27.5},0).wait(1).to({rotation:0,x:-475.3,y:-28.9},0).wait(6));

	// MIX_34_browL
	this.instance_4 = new lib.MIX_34_browL("synched",0);
	this.instance_4.setTransform(-389.9,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({x:-389,y:-24.6},0).wait(4).to({x:-388.8,y:-28},0).wait(1).to({x:-389.8,y:-29.9},0).wait(1).to({y:-31.6},0).wait(2).to({y:-30.6},0).wait(62).to({scaleX:1,scaleY:1,rotation:9.3,x:-390,y:-28.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:15,x:-389.8,y:-27.5},0).wait(24).to({startPosition:0},0).wait(6).to({rotation:9,x:-390,y:-28.9},0).wait(1).to({rotation:0,x:-389.8,y:-29.9},0).wait(6));

	// MIX_43_eyeR_v01
	this.instance_5 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_5.setTransform(-425.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(24).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(6));

	// MIX_43_eyeL
	this.instance_6 = new lib.MIX_43_eyeL("single",0);
	this.instance_6.setTransform(-425.9,-0.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({startPosition:2},0).wait(4).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(24).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(6));

	// MIX_34_mouth
	this.instance_7 = new lib.MIX_34_mouth("single",0);
	this.instance_7.setTransform(-423.2,47.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:3},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:3},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(15).to({startPosition:2},0).wait(1).to({startPosition:1},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:3},0).wait(2).to({startPosition:0},0).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-494,-39.4,127.7,111.9);


(lib.HeadclipGetBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_nose
	this.instance = new lib.MIX_34_nose("synched",0);
	this.instance.setTransform(-398.4,9.4);

	this.instance_1 = new lib.MIX_front_nose("synched",0);
	this.instance_1.setTransform(-444.7,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:-398.4}}]}).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-402.1}}]},2).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-398.4}}]},76).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance,p:{x:-398.4}}]},3).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-398.4}}]},2).to({state:[{t:this.instance,p:{x:-398.4}}]},22).to({state:[{t:this.instance,p:{x:-398.4}}]},2).to({state:[{t:this.instance,p:{x:-398.4}}]},1).to({state:[{t:this.instance,p:{x:-398.4}}]},1).wait(29));

	// MIX_34_pupil_L
	this.instance_2 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_2.setTransform(-379.8,-2.4);

	this.instance_3 = new lib.MIX_front_brow_L("synched",0);
	this.instance_3.setTransform(-396.5,-32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:-379.8,y:-2.4}}]}).to({state:[{t:this.instance_2,p:{x:-379.5,y:-0.4}}]},1).to({state:[]},1).to({state:[]},2).to({state:[{t:this.instance_2,p:{x:-373.2,y:1.2}}]},1).to({state:[{t:this.instance_2,p:{x:-373.5,y:-0.7}}]},1).to({state:[{t:this.instance_2,p:{x:-373.4,y:1.3}}]},76).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2,p:{x:-373.4,y:1.3}}]},3).to({state:[{t:this.instance_2,p:{x:-373.5,y:-0.7}}]},1).to({state:[{t:this.instance_2,p:{x:-373.5,y:-0.7}}]},1).to({state:[{t:this.instance_2,p:{x:-373.5,y:-0.7}}]},2).to({state:[{t:this.instance_2,p:{x:-375.5,y:-0.7}}]},22).to({state:[{t:this.instance_2,p:{x:-377.7,y:-0.8}}]},2).to({state:[{t:this.instance_2,p:{x:-379.2,y:-1.8}}]},1).to({state:[{t:this.instance_2,p:{x:-379.8,y:-2.4}}]},1).wait(29));

	// MIX_34_pupil_R
	this.instance_4 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_4.setTransform(-471.2,2.4);

	this.instance_5 = new lib.MIX_front_brow_R("synched",0);
	this.instance_5.setTransform(-499.3,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:-471.2,y:2.4}}]}).to({state:[{t:this.instance_4,p:{x:-470.9,y:4.4}}]},1).to({state:[]},1).to({state:[]},2).to({state:[{t:this.instance_4,p:{x:-458.8,y:5.3}}]},1).to({state:[{t:this.instance_4,p:{x:-459.1,y:3.3}}]},1).to({state:[{t:this.instance_4,p:{x:-459,y:5.3}}]},76).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_4,p:{x:-459,y:5.3}}]},3).to({state:[{t:this.instance_4,p:{x:-459.1,y:3.3}}]},1).to({state:[{t:this.instance_4,p:{x:-459.1,y:3.3}}]},1).to({state:[{t:this.instance_4,p:{x:-459.1,y:3.3}}]},2).to({state:[{t:this.instance_4,p:{x:-461.2,y:3.3}}]},22).to({state:[{t:this.instance_4,p:{x:-467.1,y:2.9}}]},2).to({state:[{t:this.instance_4,p:{x:-470,y:2.8}}]},1).to({state:[{t:this.instance_4,p:{x:-471.2,y:2.4}}]},1).wait(29));

	// MIX_34_browR
	this.instance_6 = new lib.MIX_34_browR("synched",0);
	this.instance_6.setTransform(-475.4,-29);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({x:-474.8,y:-24.9},0).wait(1).to({x:-474.5,y:-22.9},0).wait(2).to({x:-478.5,y:-24.9},0).wait(1).to({x:-475,y:-26.9},0).wait(1).to({x:-475.3,y:-28.9},0).wait(1).to({x:-475.6,y:-30.3},0).wait(2).to({x:-475.3,y:-28.9},0).wait(73).to({x:-475.2,y:-26.8},0).to({_off:true},2).wait(3).to({startPosition:0,_off:false},0).wait(1).to({x:-475.3,y:-28.9},0).wait(1).to({x:-475.4,y:-30.1},0).wait(2).to({x:-475.3,y:-28.9},0).wait(22).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(29));

	// MIX_34_browL
	this.instance_7 = new lib.MIX_34_browL("synched",0);
	this.instance_7.setTransform(-389.9,-30);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({x:-389.3,y:-25.9},0).wait(1).to({x:-389,y:-23.9},0).wait(2).to({x:-393,y:-25.9},0).wait(1).to({x:-389.5,y:-27.9},0).wait(1).to({x:-389.8,y:-29.9},0).wait(1).to({x:-390.1,y:-31.1},0).wait(2).to({x:-389.8,y:-29.9},0).wait(73).to({x:-389.7,y:-27.8},0).to({_off:true},2).wait(3).to({startPosition:0,_off:false},0).wait(1).to({x:-389.8,y:-29.9},0).wait(1).to({x:-389.9,y:-31.1},0).wait(2).to({x:-389.8,y:-29.9},0).wait(22).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(29));

	// MIX_43_eyeR_v01
	this.instance_8 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_8.setTransform(-425.9,-0.7);

	this.instance_9 = new lib.MIX_front_eyeL("single",2);
	this.instance_9.setTransform(-447.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]}).to({state:[{t:this.instance_8,p:{startPosition:1,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:2,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:2,x:-429.6}}]},2).to({state:[{t:this.instance_8,p:{startPosition:1,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:1,x:-425.9}}]},76).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_8,p:{startPosition:1,x:-425.9}}]},3).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},2).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},22).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},2).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:0,x:-425.9}}]},1).wait(29));

	// MIX_43_eyeL
	this.instance_10 = new lib.MIX_43_eyeL("single",0);
	this.instance_10.setTransform(-425.9,-0.7);

	this.instance_11 = new lib.MIX_front_eyesR("single",2);
	this.instance_11.setTransform(-446.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]}).to({state:[{t:this.instance_10,p:{startPosition:1,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:2,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:2,x:-429.6}}]},2).to({state:[{t:this.instance_10,p:{startPosition:1,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:1,x:-425.9}}]},76).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_10,p:{startPosition:1,x:-425.9}}]},3).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},2).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},22).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},2).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},1).to({state:[{t:this.instance_10,p:{startPosition:0,x:-425.9}}]},1).wait(29));

	// MIX_34_mouth
	this.instance_12 = new lib.MIX_34_mouth("single",0);
	this.instance_12.setTransform(-423.2,47.5);

	this.instance_13 = new lib.MIX_front_mouth("single",3);
	this.instance_13.setTransform(-446.6,42.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]}).to({state:[{t:this.instance_12,p:{x:-426.9,startPosition:0}}]},4).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},18).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},3).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},3).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},3).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},3).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},2).to({state:[{t:this.instance_13,p:{startPosition:3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:3}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:1}}]},2).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:2}}]},1).to({state:[{t:this.instance_12,p:{x:-423.2,startPosition:0}}]},2).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-494,-39.4,127.7,111.9);


(lib.Mastercliptakecare = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Headclip
	this.instance = new lib.HeadclipTakeCare("synched",0);
	this.instance.setTransform(-442.7,14.2,1,1,0,0,0,-442.7,14.2);

	this.instance_1 = new lib.MIX_34_armR("single",36);
	this.instance_1.setTransform(-526.1,50,0.94,0.96,0,-4.8,-2.2,21.8,-21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:-442.7,rotation:0,x:-442.7,y:14.2,startPosition:0,regY:14.2,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance,p:{regX:-442.8,rotation:1.1,x:-441.8,y:16.8,startPosition:2,regY:14.2,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance,p:{regX:-442.8,rotation:2.1,x:-440.9,y:18.7,startPosition:3,regY:14.2,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:0.8,x:-442.7,y:16.4,startPosition:5,regY:14.3,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-1.1,x:-446,y:11.6,startPosition:6,regY:14.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-3.1,x:-450,y:4.6,startPosition:7,regY:14.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-4.4,x:-452.7,y:0.5,startPosition:8,regY:14.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-5.4,x:-454.6,y:-1.7,startPosition:9,regY:14.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-6.5,x:-456.2,y:-3.4,startPosition:10,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-6.5,x:-456,y:-2.2,startPosition:12,regY:14.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance,p:{regX:-442.8,rotation:-3.9,x:-454.7,y:0.9,startPosition:60,regY:14.2,scaleX:0.999,scaleY:0.999}}]},48).to({state:[{t:this.instance,p:{regX:-442.7,rotation:0.2,x:-447.4,y:15,startPosition:61,regY:14.3,scaleX:1,scaleY:1}},{t:this.instance_1,p:{regX:21.8,scaleX:0.94,scaleY:0.96,skewX:-4.8,skewY:-2.2,x:-526.1,y:50,startPosition:36,rotation:0}}]},1).to({state:[{t:this.instance,p:{regX:-442.8,rotation:1.5,x:-444.7,y:19.8,startPosition:62,regY:14.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:2.5,x:-442.5,y:23.3,startPosition:63,regY:14.2,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-0.1,x:-446,y:20.7,startPosition:71,regY:14.2,scaleX:1,scaleY:1}},{t:this.instance_1,p:{regX:22,scaleX:1.06,scaleY:1.026,skewX:-9,skewY:2.9,x:-522.6,y:56.2,startPosition:33,rotation:0}}]},8).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-5.4,x:-449.8,y:3.2,startPosition:73,regY:14.2,scaleX:0.999,scaleY:0.999}},{t:this.instance_1,p:{regX:21.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:-524.4,y:46,startPosition:37,rotation:-5.4}}]},2).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-8.5,x:-457.4,y:-6.6,startPosition:74,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-10.6,x:-460.9,y:-11.3,startPosition:75,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-11.9,x:-462.4,y:-13.6,startPosition:76,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.6,rotation:-10.6,x:-460.8,y:-10.9,startPosition:78,regY:14.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance,p:{regX:-442.6,rotation:-10.6,x:-460.6,y:-9.5,startPosition:79,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.6,rotation:-10.6,x:-460.9,y:-11.6,startPosition:91,regY:14.2,scaleX:0.999,scaleY:0.999}}]},12).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-9.6,x:-457.5,y:-8.2,startPosition:93,regY:14.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance,p:{regX:-442.6,rotation:-6.8,x:-452.7,y:-4.4,startPosition:94,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.6,rotation:-4.5,x:-449.4,y:-0.8,startPosition:95,regY:14.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-2.4,x:-446.1,y:9.7,startPosition:96,regY:14.5,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:-1.2,x:-443.4,y:13.3,startPosition:97,regY:14.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:0,x:-442.4,y:16.3,startPosition:98,regY:14.2,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance,p:{regX:-442.7,rotation:0,x:-442.5,y:15.3,startPosition:100,regY:14.2,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance,p:{regX:-442.7,rotation:0,x:-442.7,y:14.2,startPosition:101,regY:14.2,scaleX:1,scaleY:1}}]},1).wait(1));

	// MIX_34_armR
	this.instance_2 = new lib.MIX_34_armR("single",1);
	this.instance_2.setTransform(-521.2,49.7,1,1,0,0,0,21.9,-21.8);

	this.instance_3 = new lib.MIX_34_handR("single",0);
	this.instance_3.setTransform(-529.4,91.5,0.998,0.998,-42.2,0,0,9.1,-5.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AARgZIgCgDIgWgeQglgOgmAMQgKADgJADIAjA7QAOgSArgHQAHACATgHIANARAAdgKQgHgJgHgJAgTBVQABAAAAABABsAzQAHgFgEgBABjAlIAAAAIgJgFABaAnIAAgHQgQgFgNgJQgTgMgNgQAhCAFIAgA0IALAEAgdBCIgFgJABGBDQgCABgCABQgMADgJADAgIBIQADAAADADAgHg6IgJgbAhwhVIALAf");
	this.shape.setTransform(-535.4,85.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AhZB1IASgGQAmgMAkAOIAXAfIACACQgUAHgHgCQgqAIgNATgAhYAGQAFgUAKgPQAtgIAcAVQAAAAAAAAQAAAAAAAAQABABAAAAQAAAAgBABQgFAOgHAUQgjgUgpAGgAA7hxQgWgagggGIAdgfQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQAVgDARAKQAPAJgBAQIABAFQgMAOgQARQgBgFgCAAg");
	this.shape_1.setTransform(-536.6,67.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#777FC7").s().p("AgZD2IgBgBQgGgFgGgMQABAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQAAgBgBABIAEgDIABAAIgLgFIgfg0QANgTAsgHQAGACATgHIANARIgBgCQANASATAMQANAJAQAFIAAAGQAGgDADACIAAAAQAJgCACAGQABAAABAAQAAAAABABQAAAAgBABQAAAAgBABQAFABgIAFQgFAFAEAJQAEACgPALQgPAKgnAHIgPAAQgiAAgKgIgAA6DkIgVAHQAVgCAEgHIgEACgAgJDqQgEgCgDgBQADABAEACgAh4BJIAHgBQACgDAAgDIAAgCQgFgbAEgZQAHgCAEAAIACAAQAfgGAfATQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQgFATAEASQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAAAIACAEIAJAEIAJAcQglgOgmALIgSAHgAhRhBQAYgnAeglQAgACAQAZIAAAAQAEABAAAFIAEADQgXAhgNAaQgfgVgrACgABEjGIABAAQgRgLgTgBIAHgHIAAAAIAngkIAAAAQATADAKAQQAKALACAVQgQANgPASQgEgRgRgKg");
	this.shape_2.setTransform(-534.6,69.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiCCpQgEgEAAgDQgHgeAGgfIAAAAIAAgCQAIgeAOgdIABAAQAcgzAogqIACgDQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAgBAAQAhgmAfgjQATgWAUgQIACgCQAEgCACABQABgBAEAAQAeAEARAZQAOANADAeIAAAFIgDACQiYCGAAB9QABACgDAEIgIAAIgIgEIgDgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgEgSAFgTQAAgBAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgegTggAGIgCAAQgEAAgGACQgFAZAGAbIAAACQAAADgCADIgHABQgFgBgDgDgAgiBqQAHgVAHgPQABgBAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQgdgVgtAHQgKAPgFAWQAKgCAKAAQAeAAAaAQgAgKA0QANgaAYgfIgFgDQAAgFgDgBIAAAAQgRgZgggCQgeAlgYAlIAJAAQAmAAAbATgAAMhaIgbAgQAeAFAVAaQADABABAEQAQgQAMgPIgBgEQAAgRgPgIQgQgKgVACIgCgBIgBABgABWhHQAPgSARgNQgDgVgKgLQgKgQgTgDIAAAAIgmAkIgBAAIgHAHQAUABAQALIgBAAQARAKAEARg");
	this.shape_3.setTransform(-534.3,59.2);

	this.instance_4 = new lib.Symbol2("synched",12);
	this.instance_4.setTransform(-493.7,56,1,1,0,0,0,-493.7,57);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{rotation:0,x:-521.2,y:49.7,regY:-21.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]}).to({state:[{t:this.instance_2,p:{rotation:1.1,x:-520.9,y:50.8,regY:-21.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},2).to({state:[{t:this.instance_2,p:{rotation:5.1,x:-520.7,y:51.4,regY:-21.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{rotation:3.8,x:-521.8,y:50.8,regY:-21.7,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:-523.8,y:48.7,regY:-21.8,scaleX:1,scaleY:0.977,skewX:-3.8,skewY:-1.1,regX:21.9,startPosition:1}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3}]},1).to({state:[{t:this.instance_2,p:{rotation:-4.4,x:-528.3,y:42,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.8,startPosition:35}}]},1).to({state:[{t:this.instance_2,p:{rotation:0,x:-529.4,y:41,regY:-21.8,scaleX:0.999,scaleY:1.001,skewX:1.2,skewY:3.5,regX:21.8,startPosition:32}}]},1).to({state:[{t:this.instance_4,p:{x:-493.7,y:56,startPosition:12,rotation:0}}]},1).to({state:[{t:this.instance_4,p:{x:-493.6,y:57,startPosition:9,rotation:0}}]},2).to({state:[{t:this.instance_4,p:{x:-494.9,y:58.4,startPosition:7,rotation:2.5}}]},48).to({state:[]},1).to({state:[{t:this.instance_2,p:{rotation:1.5,x:-524,y:53.2,regY:-21.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:33}}]},1).to({state:[{t:this.instance_2,p:{rotation:0,x:-522.7,y:54.3,regY:-21.8,scaleX:1.003,scaleY:0.997,skewX:-1.7,skewY:-1.6,regX:21.9,startPosition:33}}]},1).to({state:[]},8).to({state:[{t:this.instance_2,p:{rotation:-8.5,x:-529.6,y:40.1,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.9,startPosition:34}}]},3).to({state:[{t:this.instance_2,p:{rotation:-10.6,x:-531.3,y:38,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:22,startPosition:34}}]},1).to({state:[{t:this.instance_2,p:{rotation:-11.9,x:-531.6,y:37.2,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:22.1,startPosition:34}}]},1).to({state:[{t:this.instance_2,p:{rotation:-10.6,x:-531.4,y:38.4,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.9,startPosition:34}}]},2).to({state:[{t:this.instance_2,p:{rotation:-10.6,x:-531.2,y:39.8,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.9,startPosition:34}}]},1).to({state:[{t:this.instance_2,p:{rotation:-10.6,x:-531.5,y:37.7,regY:-21.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.9,startPosition:34}}]},12).to({state:[{t:this.instance_2,p:{rotation:0,x:-528.7,y:40,regY:-21.7,scaleX:0.957,scaleY:1.006,skewX:-1.6,skewY:-5.7,regX:22,startPosition:34}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:-526.7,y:36.6,regY:-21.8,scaleX:0.798,scaleY:0.997,skewX:17.2,skewY:8.6,regX:21.9,startPosition:34}}]},1).to({state:[{t:this.instance_2,p:{rotation:-61.9,x:-524.6,y:40.6,regY:-21.8,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,regX:22.1,startPosition:39}}]},1).to({state:[{t:this.instance_2,p:{rotation:-14,x:-523,y:48.3,regY:-21.7,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{rotation:-5.5,x:-521.1,y:50.5,regY:-21.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{rotation:-1.7,x:-520.9,y:51.8,regY:-21.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{rotation:1.2,x:-521,y:50.8,regY:-21.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:-521.2,y:49.7,regY:-21.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:21.9,startPosition:1}}]},1).wait(1));

	// MIX_propeller
	this.instance_5 = new lib.MIX_propeller("synched",0);
	this.instance_5.setTransform(-446.6,-62.8,1,1,0,0,0,1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({regY:18.5,rotation:1.1,x:-444.1,y:-60.1,startPosition:2},0).wait(1).to({rotation:2.1,x:-441.8,y:-58.2,startPosition:0},0).wait(2).to({rotation:0.8,x:-445.3,y:-60.6,startPosition:2},0).wait(1).to({rotation:-1,x:-451.3,y:-65.3,startPosition:0},0).wait(1).to({rotation:-3,x:-458,y:-72.1,startPosition:1},0).wait(1).to({regY:18.4,scaleX:1,scaleY:1,rotation:-4.3,x:-462.4,y:-76,startPosition:2},0).wait(1).to({rotation:-5.3,x:-465.7,y:-78.2,startPosition:0},0).wait(1).to({rotation:-6.4,x:-468.7,y:-79.6,startPosition:1},0).wait(2).to({x:-468.5,y:-78.4,startPosition:0},0).wait(48).to({regY:18.5,rotation:-3.8,x:-463.8,y:-75.6},0).wait(1).to({regX:1.1,regY:18.4,scaleX:1,scaleY:1,rotation:0.2,x:-450.9,y:-62,startPosition:1},0).wait(1).to({regX:1,rotation:1.5,x:-446.4,y:-57.3,startPosition:2},0).wait(1).to({rotation:2.5,x:-443,y:-53.7,startPosition:0},0).wait(8).to({rotation:0,x:-450.1,y:-56.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.3,x:-461,y:-72.9,startPosition:2},0).wait(1).to({rotation:-8.4,x:-472.6,y:-82.1,startPosition:0},0).wait(1).to({rotation:-10.5,x:-478.8,y:-86.2,startPosition:1},0).wait(1).to({regY:18.5,rotation:-11.8,x:-482,y:-87.9,startPosition:2},0).wait(2).to({rotation:-10.5,x:-478.9,y:-85.7,startPosition:1},0).wait(1).to({x:-478.7,y:-84.3,startPosition:2},0).wait(12).to({x:-479,y:-86.4,startPosition:1},0).wait(2).to({regX:1.1,regY:18.4,rotation:-9.5,x:-474.1,y:-83.4,startPosition:0},0).wait(1).to({regX:1,regY:18.5,rotation:-6.7,x:-465.8,y:-80.2,startPosition:1},0).wait(1).to({regY:18.4,rotation:-4.4,x:-459.4,y:-77.2,startPosition:2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-453.4,y:-67.3,startPosition:0},0).wait(1).to({rotation:-1.1,x:-449,y:-63.5,startPosition:1},0).wait(1).to({rotation:0,x:-446.2,y:-60.6,startPosition:2},0).wait(2).to({x:-446.3,y:-61.6,startPosition:1},0).wait(1).to({x:-446.5,y:-62.7,startPosition:2},0).wait(1));

	// MIX_34_bulb_R
	this.instance_6 = new lib.MIX_34_bulb_R("synched",0);
	this.instance_6.setTransform(-512.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(2).to({rotation:1.1,x:-510.4,y:-42.6},0).wait(1).to({rotation:2.1,x:-508.4,y:-41.9},0).wait(2).to({rotation:0.8,x:-511.6,y:-42.8},0).wait(1).to({rotation:-1,x:-517,y:-45.2},0).wait(1).to({rotation:-3,x:-522.9,y:-49.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3,x:-526.8,y:-52},0).wait(1).to({rotation:-5.3,x:-529.6,y:-53.1},0).wait(1).to({rotation:-6.4,x:-532.2,y:-53.3},0).wait(2).to({x:-532,y:-52.1},0).wait(48).to({rotation:-3.8,x:-528.4,y:-52.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2,x:-516.9,y:-43.5},0).wait(1).to({rotation:1.5,x:-512.8,y:-40.3},0).wait(1).to({rotation:2.5,x:-509.6,y:-37.9},0).wait(8).to({rotation:0,x:-515.9,y:-37.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.3,x:-524.7,y:-47.9},0).wait(1).to({rotation:-8.4,x:-534.9,y:-53.7},0).wait(1).to({rotation:-10.5,x:-540,y:-55.6},0).wait(1).to({rotation:-11.8,x:-542.5,y:-56.1},0).wait(2).to({rotation:-10.5,x:-540.1,y:-55.2},0).wait(1).to({x:-539.9,y:-53.8},0).wait(12).to({x:-540.2,y:-55.9},0).wait(2).to({rotation:-9.5,x:-535.8,y:-53.9},0).wait(1).to({rotation:-6.7,x:-528.8},0).wait(1).to({rotation:-4.4,x:-523.4,y:-53.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-518.3,y:-45.6},0).wait(1).to({rotation:-1.1,x:-514.4,y:-43.3},0).wait(1).to({rotation:0,x:-512.1,y:-41.8},0).wait(2).to({x:-512.2,y:-42.9},0).wait(1).to({x:-512.4,y:-43.9},0).wait(1));

	// MIX_34_Lashes_R
	this.instance_7 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_7.setTransform(-495.7,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(2).to({rotation:1.1,x:-494.2,y:-9.5},0).wait(1).to({rotation:2.1,x:-492.9,y:-8.5},0).wait(2).to({rotation:0.8,x:-495.3,y:-9.7},0).wait(1).to({rotation:-1,x:-499.5,y:-12.7},0).wait(1).to({rotation:-3,x:-504.3,y:-17.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3,x:-507.5,y:-20.6},0).wait(1).to({rotation:-5.3,x:-509.7,y:-22},0).wait(1).to({rotation:-6.4,x:-511.7,y:-22.6},0).wait(2).to({x:-511.5,y:-21.4},0).wait(48).to({rotation:-3.8,x:-509.3,y:-20.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2,x:-500.3,y:-10.6},0).wait(1).to({rotation:1.5,x:-496.9,y:-7},0).wait(1).to({rotation:2.5,x:-494.3,y:-4.3},0).wait(8).to({rotation:0,x:-499,y:-4.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.3,x:-504.9,y:-16.9},0).wait(1).to({rotation:-8.4,x:-513.4,y:-23.9},0).wait(1).to({rotation:-10.5,x:-517.4,y:-26.5},0).wait(1).to({rotation:-11.8,x:-519.3,y:-27.6},0).wait(2).to({rotation:-10.5,x:-517.5,y:-26.2},0).wait(1).to({x:-517.3,y:-24.8},0).wait(12).to({x:-517.6,y:-26.9},0).wait(2).to({rotation:-9.5,x:-513.7,y:-24.4},0).wait(1).to({rotation:-6.7,x:-508.2,y:-23.4},0).wait(1).to({rotation:-4.4,x:-504,y:-22},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-500.2,y:-13.6},0).wait(1).to({rotation:-1.1,x:-496.9,y:-10.8},0).wait(1).to({rotation:0,x:-495.3,y:-9},0).wait(2).to({x:-495.5,y:-10},0).wait(1).to({x:-495.6,y:-11.1},0).wait(1));

	// Layer 23
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAagHAQgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQAKgKAHgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgGgCgEgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape_4.setTransform(-371.3,-16.2,1,1,0,0,0,-0.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgYB+QgEgBgBgGQgBgIAWgFQAagGAQgRIARgWQANgOADgCQgFAXgKAQQgVAkgjAFIgQABIgEAAgAgsBRQgBgIANgIIAZgOQALgKAHgJIAMgQQAFgHAHgbQAHgcgBgEIgBgHQAEAFAGAOQABAHgFAaQgDAXgDAEIgZAhQgaAfgVACIgDABQgIAAgBgIgAg4AXQgGgDgEgDQAlgTASgwQANgngCghIgBgDQAEADAEAMQAEAKABAKQADAYgPAoQgTAuggAEIgBAAIgEgBg");
	this.shape_5.setTransform(-369.7,-12.3,1,1,0,0,0,-0.2,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgaB9QgEgBAAgGQgCgHAWgFQAbgGAQgRIASgVQANgOADgCQgGAXgKARQgWAjgjAEIgOABIgGgBgAgtBRQgBgJANgIIAZgNQALgKAJgJIAMgQQAEgGAIgcQAHgbAAgEIgBgHQADAFAGAOQABAIgFAZQgEAXgDAEIgZAhQgbAegWACIgCABQgJAAAAgIgAg4AWQgGgDgEgEQAmgRATgwQANgmgEghIAAgEQAFADAEAMQAEAKABAKQADAZgRAnQgTAtghAEIgBAAIgDgBg");
	this.shape_6.setTransform(-368.3,-9,1,1,0,0,0,-0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXB+QgEgBgBgGQgBgHAVgFQAagHARgRIARgWQAMgPAEAAQgGAWgJARQgWAjgiAFIgSABIgCAAgAgsBSQgBgJANgIIAZgOQALgJAHgKIANgQQAEgGAHgcQAGgcAAgEIgBgGQAEAEAGAOQABAHgFAaQgEAXgCAFIgYAgQgbAggVACIgDAAQgIAAgBgHgAg4AXQgGgCgEgEQAlgSASgwQANgngDghIgBgEQAEADAFAMQADAKABAKQAEAZgPAnQgSAughAEIgFgBg");
	this.shape_7.setTransform(-370.9,-13.1,1,1,0,0,0,-0.3,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgUB+QgEAAgBgGQgBgIAVgGQAagHAQgSQAEgHAMgPQAMgPADgBQgFAWgJARQgTAkgjAHIgRABIgDAAgAgqBTQgBgIANgJIAYgPQALgKAHgKQAGgKAFgGQAFgHAFgcQAGgbgBgEIgCgHQAFAEAHAOQABAHgEAaQgDAXgCAFIgYAhQgZAggVAEIgDAAQgIAAgBgHgAg5AZQgFgCgFgEQAlgUAQgwQANgogFghIgBgDQAGADACAMQAFAKABAKQAEAYgNAoQgRAuggAGIgGgBg");
	this.shape_8.setTransform(-375.3,-20.4,1,1,0,0,0,-0.4,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgRB+QgEAAgBgGQgCgIAWgGQAZgJAQgSIAPgXQAMgPACgCQgEAXgHARQgTAlglAIIgQADIgCgBgAgoBUQgCgJANgJIAXgQQALgKAHgKIALgRQAEgGAEgdQAFgcgBgEQgCgEAAgCQAFAEAGAOQACAHgDAaQgBAXgDAFIgWAiQgYAhgVAEIgEABQgHAAgBgHgAg5AaQgGgCgEgDQAkgVAOgyQAMgogGggIgCgEQAGADAGAMQABAKADAKQAFAYgLAoQgRAvggAHIgFgBg");
	this.shape_9.setTransform(-380.4,-29.8,1,1,0,0,0,-0.5,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOB+QgFAAgBgGQgCgHAVgHQAagKAOgSIAPgYQAMgPACgBQgDAWgIASQgRAlglAIQgLAEgFAAIgBgBgAgnBUQgCgIANgJIAXgRQAKgLAHgKIAKgRQAEgGAEgdQAEgcgBgDIgCgHQAEAEAIANQACAIgCAZQgBAYgDAEIgWAjQgXAigUAEIgFABQgHAAgBgHgAg5AbQgGgCgEgDQAjgWAOgyQAKgogHggIgBgEQAGADAFAMQAEAJABAKQAFAYgKApQgPAvggAHIgCABIgDgBg");
	this.shape_10.setTransform(-384,-35.4,1,1,0,0,0,-0.6,-0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgTB4QgBgIAUgHQAagKAOgSIAPgZIANgRQgDAYgHARQgSAlgkAKIgRADQgEgBgCgFgAgmBVQgCgJAMgJIAXgRQAKgLAGgLQAGgKAEgGQAEgIAEgcQAEgcgCgEIgCgGQAFAEAHANQACAHgCAaQAAAXgCAFIgVAjQgXAigUAFIgFABQgHAAgBgGgAg6AbQgFgCgEgCQAigXANgxQAKgpgHggIgCgEQAGACAFANQAFAJACAKQAFAYgKAoQgOAxggAHIgGgBg");
	this.shape_11.setTransform(-386.5,-39.1,1,1,0,0,0,-0.7,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgRB4QgCgHATgIQAcgKANgUIAOgYQALgPACgCQgCAYgHARQgQAmglAJQgNAFgEAAQgFgBgBgGgAglBVQgCgIAMgKIAWgRQALgLAFgKIAKgSQAEgHADgcQADgdgBgEIgCgGQAEAEAIANQACAIgBAZQgBAXgCAFIgTAjQgXAkgUAFIgEABQgHAAgCgHgAg5AdQgGgCgFgEQAjgXALgxQAKgpgJgfIgBgFQAGADAGALQAFAKACAKQAFAXgJApQgNAxgfAIIgCAAIgEAAg");
	this.shape_12.setTransform(-388.8,-42,1,1,0,0,0,-0.7,-0.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgRB4QgCgHATgIQAbgKAOgUIAOgXQALgQADgCQgDAXgHASQgRAmgjAKQgOADgEAAQgFAAgBgGgAglBVQgCgJAMgJIAWgRQALgLAFgLIAKgRQAEgHADgdQADgbgBgFIgDgFQAFADAIANQADAIgCAZQgBAXgCAGIgUAjQgWAigUAGIgEABQgHAAgCgHgAg5AcQgGgBgFgDQAjgYALgxQAKgpgJggIgBgDQAGACAGALQAFAKACAKQAFAYgJApQgNAvggAJIgBAAIgEgBg");
	this.shape_13.setTransform(-388.6,-40.8,1,1,0,0,0,-0.7,-0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgQB+QgDAAgBgGQgCgIAVgGQAagJAOgTIAPgXQAMgQACgBQgDAXgIARQgSAlglAIQgMAEgEAAIgCgBgAgnBUQgCgIANgJIAXgRQAKgLAHgJIALgRQADgHAEgcQAFgcgBgEIgCgHQAEAEAIAOQACAHgDAaQgCAXgCAFIgWAiQgXAigVAEIgEABQgHAAgBgHgAg5AbIgKgFQAkgWAOgyQAKgogHggIgBgEQAFADAGAMQAEAJABALQAFAXgKApQgQAvggAHIgFAAg");
	this.shape_14.setTransform(-385.6,-34.5,1,1,0,0,0,-0.5,-0.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgXB+QgDgBgBgGQgCgIAVgFQAbgHAQgRIARgWQAMgPAEgBQgGAWgJARQgVAkgjAFIgQACIgEAAgAgsBSQgBgJANgIIAZgOQAMgKAGgKIAMgQQAFgGAHgcQAFgcAAgDIgCgHQAFAEAGAOQABAHgEAaQgEAXgCAFIgYAgQgbAggUADIgDABQgIAAgCgIgAg5AXQgFgCgFgEQAmgSARgxQAMgngCghIgBgDQADACAFAMQAEALABAKQADAYgNAoQgTAughAEIgFgBg");
	this.shape_15.setTransform(-376,-15.2,1,1,0,0,0,-0.4,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZB+QgDgBgBgGQgBgIAVgFQAagGARgRQAFgHAMgPQANgOADgBQgGAWgJARQgVAjgkAFIgQABIgEAAgAgtBRQgBgIAOgIIAZgOQALgKAHgJIANgQQAFgGAHgcQAHgbgBgEIgCgHQAEAEAHAOQAAAIgEAZQgEAXgDAFIgZAgQgbAfgVACIgDABQgIAAgBgIgAg5AWQgFgCgEgEQAmgSASgwQANgngDggIAAgEQADADAFAMQAEAKABAKQADAYgQAoQgTAtggAEIgGgBg");
	this.shape_16.setTransform(-372.4,-8.9,1,1,0,0,0,-0.2,-0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgaB+QgEgBgBgGQgBgIAWgFQAagFARgRIASgVIAQgQQgGAXgKAQQgWAjgkAEIgRABIgCAAgAgtBRQgBgJANgHIAagOQALgJAHgJIANgQQAEgGAJgcQAHgbAAgEIgCgHQAEAFAGAOQABAHgFAZQgFAYgDAEIgZAgQgcAfgUACIgCAAQgJAAgBgIgAg4AWQgGgDgEgEQAmgRATgvQAOgngDghIgBgEQAFADAFANQADAKABAKQACAYgRAnQgTAuggADIgFgBg");
	this.shape_17.setTransform(-369.9,-4,1,1,0,0,0,-0.2,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgWB+QgEAAgBgGQgBgIAVgGQAbgHAQgRQAEgIAMgPIAPgPQgEAXgJAQQgVAkgjAGIgSACIgCgBgAgrBTQgBgJANgJIAYgOQALgKAIgKIALgQQAFgGAGgcQAGgcAAgEIgCgHQAEAFAHAOQABAHgEAaQgEAXgCAEIgYAiQgaAfgVADIgEABQgHAAgBgHgAg5AYQgFgCgEgEQAlgTARgxQAMgngEghIgBgEQAFAEAEAMQAEAKABAKQAEAYgOAnQgSAvggAFIgGgBg");
	this.shape_18.setTransform(-374.7,-10,1,1,0,0,0,-0.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNB+QgEAAgBgGQgCgHAUgIQAagJAPgTQADgIALgQQALgQADgBQgEAXgHARQgRAmgkAJIgQAEIgCgBgAgmBVQgCgJAMgJIAXgRQAKgLAGgKIAKgSQAFgHADgcQAEgcgBgEQgDgEAAgCQAFAEAIANQABAHgBAaQgBAYgCAEIgVAjQgXAjgUAFIgEABQgHAAgCgHgAg5AcQgGgCgFgEQAkgWAMgyQAKgogIggIgBgEQAGADAFALQAFAKADAKQAEAYgKAoQgOAwggAIIgBABIgEgBg");
	this.shape_19.setTransform(-381.7,-34,1,1,0,0,0,-0.7,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgNB4QgCgHARgJQAcgLANgUIANgYIANgSQgCAXgGASQgPAmgkALIgRAFQgEAAgCgGgAgiBWQgDgJAMgJIAVgTQAKgMAFgKIAJgSQAFgHABgcQADgcgCgEQgCgEAAgDQAEAEAIANQACAHABAaQAAAXgCAFIgTAkQgUAjgVAHIgFABQgGAAgBgGgAg5AeQgGgCgFgDQAigZAKgxQAHgpgJggIgBgDQAGACAFALQAGAJADAKQAHAYgJApQgMAxgfAJIgBAAIgEAAg");
	this.shape_20.setTransform(-391.4,-47.5,1,1,0,0,0,-0.8,-0.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKB4QgDgHASgJQAbgNAMgUIAMgZQAKgQADgCQgBAXgGASQgOAngjAMQgNAGgEAAQgEAAgCgGgAghBWQgDgIAMgKIAVgTQAJgMAFgLIAJgSQADgHABgcQABgdgBgEIgDgGQAFAEAIAMQADAHABAaQABAXgBAFIgSAlQgUAkgUAHIgFABQgGAAgCgGgAg5AgQgGgCgFgDQAhgbAIgxQAGgpgLgfIgBgEQAGADAHALQAFAIAEAKQAIAXgIAqQgKAxgfAKIgDABIgCAAg");
	this.shape_21.setTransform(-396.4,-54.5,1,1,0,0,0,-1,-0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgIB3QgDgHASgJQAagNAMgVIAMgYQAJgRADgCQgBAXgFATQgNAngjANQgPAFgCAAQgEAAgCgGgAgfBXQgDgIALgLIAVgTQAIgNAFgLIAIgSQAEgHAAgdQAAgcgBgEIgEgGQAGADAJANQACAGACAaQACAYgCAFIgRAlQgUAlgSAHIgGABQgFAAgCgFgAg5AgQgGgBgFgDQAggcAHgxQAGgpgMgfIgCgDQAGACAIALQAFAIAEAKQAIAXgHApQgIAygeALIgCABIgEgBg");
	this.shape_22.setTransform(-398.9,-58.2,1,1,0,0,0,-1,-0.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEB9QgEAAgCgGQgDgHASgJQAbgMAMgUQADgIAJgRQAKgRADgCQgBAYgGASQgOAngjAMQgNAGgEAAIAAgBgAghBWQgDgIALgLIAWgSQAJgNAFgKIAIgSQAEgHABgdQABgcgCgEQgCgEAAgCQAEADAJANQADAHAAAZQACAYgCAFIgRAlQgUAkgUAHIgFABQgGAAgCgGgAhEAbQAhgbAIgxQAGgpgLggIgBgDQAFACAHALQAGAJADAKQAIAXgHAqQgKAwgfALIgFAAQgGgBgFgDg");
	this.shape_23.setTransform(-396.4,-54.1,1,1,0,0,0,-0.9,-0.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgGB+QgDAAgCgGQgDgHASgJQAagMAOgUQADgIAKgRQAJgQACgBQAAAXgHASQgOAngjALQgNAFgEAAIgBAAgAgiBWQgCgIALgKIAWgSQAJgNAGgKIAIgSQAEgHABgdQACgcgCgEQgDgEABgCQAEADAJANQACAHABAaQAAAYgBAEIgSAlQgVAkgTAGIgGABQgGAAgCgGgAg5AfQgGgBgEgEQAhgaAIgxQAHgpgKgfIgBgEQAGACAGALQAGAKACAKQAIAXgJApQgJAxggAKIgBAAIgEAAg");
	this.shape_24.setTransform(-392.3,-50.3,1,1,0,0,0,-0.8,-0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLB+QgEAAgCgGQgCgHATgIQAbgKAOgUIAOgXQALgRADgBQgDAXgHASQgQAmgkAKQgMADgFAAIgBAAgAglBWQgCgJAMgKIAXgRQAJgMAGgKIAKgRQAEgHACgcQAEgcgCgEIgDgHQAFAEAJANQACAHgBAaQAAAYgDAEIgUAkQgVAigVAGIgFABQgGAAgCgGgAg5AdQgGgCgFgDQAigYAMgxQAJgpgIgfIgCgEQAGACAGAMQAFAJADAKQAEAYgJAoQgNAxgfAIIgCAAIgDAAg");
	this.shape_25.setTransform(-385.7,-43.3,1,1,0,0,0,-0.7,-0.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgPB+QgDAAgCgGQgCgHAVgHQAZgKAPgSIAPgYQAMgPACgBQgDAWgIASQgSAlgkAIQgKADgFAAIgDAAgAgnBVQgCgJAMgJIAXgQQALgMAGgKIALgRQAEgGADgdQAFgbgBgEIgDgHQAFAEAIAOQABAHgBAZQgCAYgDAEQABACgWAhQgYAigTAFIgFAAQgHAAgBgGgAg6AbQgFgCgEgDQAjgWAOgxQAJgogGghIgCgDQAGACAFAMQAFAKABAKQAEAYgJAoQgPAwggAHIgGgBg");
	this.shape_26.setTransform(-380.8,-36.9,1,1,0,0,0,-0.5,-0.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgRB+QgFAAgBgGQgBgIAUgGQAagIAPgSIARgXQALgPADgCQgEAXgJARQgSAlglAHIgPADIgCgBgAgpBUQgCgJANgJIAYgPQALgLAGgKIALgQQAFgHAEgcQAGgcgBgEQgCgEAAgDQAFAFAGANQACAHgDAaQgCAYgDAEIgWAiQgZAhgUAEIgFAAQgHAAgBgGgAg5AZIgKgFQAkgUAPgyQAMgngGghIgBgEQAGADAFAMQADAKABAKQAFAYgMAoQgRAvggAHIgFgCg");
	this.shape_27.setTransform(-376.2,-24.1,1,1,0,0,0,-0.5,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgUB+QgDAAgBgGQgCgIAVgGQAagHAQgSIAQgXIAOgQQgEAXgIARQgVAkgjAHIgQABIgDAAgAgpBTQgCgIANgJIAYgPQAKgKAIgKIALgRQAEgGAGgcQAGgbgBgEIgCgHQAFAEAGAOQACAHgEAaQgDAXgCAFIgYAhQgZAhgVADIgEAAQgHAAAAgHgAg5AZQgFgCgFgEQAlgUAQgwQANgogFghIgBgDQAFADADAMQAEAKACAKQAEAYgNAoQgSAugfAGIgCAAIgEgBg");
	this.shape_28.setTransform(-372.7,-18.7,1,1,0,0,0,-0.4,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAVgGQAagHARgRQAEgHANgPQAMgPADgBQgGAXgJARQgUAjgjAGIgSABIgCAAgAgrBTQgBgJANgIIAYgPQAMgKAGgKIAMgQQAEgGAHgcQAHgbAAgEQgDgFAAgCQAFAEAGAOQABAIgEAZQgEAXgBAFIgZAhQgaAfgVADIgDABQgIAAgBgHgAg4AYQgGgCgFgEQAmgTASgxQALgngDggIgBgEQAEADAFAMQADAKABAKQAEAYgNAoQgTAuggAFIgFgBg");
	this.shape_29.setTransform(-371,-14.1,1,1,0,0,0,-0.3,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVB+QgFAAgBgGQgBgIAVgGQAbgHAQgRQAEgHAMgPQANgPADgBQgFAXgKARQgUAjgjAGIgSABIgBAAgAgrBTQgBgJANgIIAYgPQALgKAIgKIALgQQAFgGAGgcQAHgbAAgEQgDgFABgCQAEAEAGAOQABAIgEAZQgDAXgCAFIgZAhQgaAfgUADIgEABQgIAAgBgHgAg4AYQgHgCgDgEQAlgTASgxQALgngDggIgBgEQAEADAFAMQADAKABAKQAEAYgNAoQgTAuggAFIgFgBg");
	this.shape_30.setTransform(-371.1,-15.1,1,1,0,0,0,-0.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},48).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},8).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23,p:{x:-396.4,y:-54.1}}]},2).to({state:[{t:this.shape_23,p:{x:-396.2,y:-52.7}}]},1).to({state:[{t:this.shape_23,p:{x:-396.5,y:-54.8}}]},12).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},2).to({state:[{t:this.shape_4}]},1).wait(1));

	// MIX_34_head
	this.instance_8 = new lib.MIX_34_head("synched",0);
	this.instance_8.setTransform(-448.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(2).to({rotation:1.1,x:-446.8,y:2.4},0).wait(1).to({rotation:2.1,x:-445.7,y:4.3},0).wait(2).to({rotation:0.8,x:-447.8,y:2},0).wait(1).to({rotation:-1,x:-451.6,y:-2.5},0).wait(1).to({rotation:-3,x:-456,y:-9.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3,x:-459.1,y:-13.2},0).wait(1).to({rotation:-5.3,x:-461.2,y:-15.5},0).wait(1).to({rotation:-6.4,x:-463.1,y:-16.9},0).wait(2).to({x:-462.9,y:-15.7},0).wait(48).to({rotation:-3.8,x:-461,y:-12.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2,x:-452.8,y:0.6},0).wait(1).to({rotation:1.5,x:-449.6,y:5.2},0).wait(1).to({rotation:2.5,x:-447.3,y:8.8},0).wait(8).to({rotation:0,x:-451.4,y:6.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.3,x:-456.5,y:-10.4},0).wait(1).to({rotation:-8.4,x:-464.7,y:-19.9},0).wait(1).to({rotation:-10.5,x:-468.7,y:-24.3},0).wait(1).to({rotation:-11.8,x:-470.5,y:-26.5},0).wait(2).to({rotation:-10.5,x:-468.7,y:-24},0).wait(1).to({x:-468.5,y:-22.6},0).wait(12).to({x:-468.8,y:-24.7},0).wait(2).to({rotation:-9.5,x:-465.1,y:-21.4},0).wait(1).to({rotation:-6.7,x:-459.7,y:-18.1},0).wait(1).to({rotation:-4.4,x:-455.8,y:-14.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-452.1,y:-4.5},0).wait(1).to({rotation:-1.1,x:-449.1,y:-0.7},0).wait(1).to({rotation:0,x:-447.7,y:2.1},0).wait(2).to({x:-447.9,y:1},0).wait(1).to({x:-448,y:0},0).wait(1));

	// MIX_34_bulbL
	this.instance_9 = new lib.MIX_34_bulbL("synched",0);
	this.instance_9.setTransform(-400.2,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2).to({rotation:1.1,x:-398,y:-46.1},0).wait(1).to({rotation:2.1,x:-396,y:-43.3},0).wait(2).to({rotation:0.8,x:-399.2,y:-46.7},0).wait(1).to({rotation:-1,x:-404.7,y:-53},0).wait(1).to({rotation:-3,x:-411,y:-61.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3,x:-415.2,y:-66.2},0).wait(1).to({rotation:-5.3,x:-418.2,y:-69.3},0).wait(1).to({rotation:-6.4,x:-421.1,y:-71.5},0).wait(2).to({x:-420.9,y:-70.3},0).wait(48).to({rotation:-3.8,x:-416.6,y:-65.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2,x:-404.7,y:-48.6},0).wait(1).to({rotation:1.5,x:-400.4,y:-42.9},0).wait(1).to({rotation:2.5,x:-397.2,y:-38.5},0).wait(8).to({rotation:0,x:-403.6,y:-43.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.3,x:-413.6,y:-64.3},0).wait(1).to({rotation:-8.4,x:-424.8,y:-76.1},0).wait(1).to({rotation:-10.5,x:-430.8,y:-81.9},0).wait(1).to({rotation:-11.8,x:-433.9,y:-84.8},0).wait(2).to({rotation:-10.5,x:-430.9,y:-81.5},0).wait(1).to({x:-430.7,y:-80.1},0).wait(12).to({x:-431,y:-82.2},0).wait(2).to({rotation:-9.5,x:-426.2,y:-78.1},0).wait(1).to({rotation:-6.7,x:-418.1,y:-72.8},0).wait(1).to({rotation:-4.4,x:-412.1,y:-67.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-406.5,y:-56.1},0).wait(1).to({rotation:-1.1,x:-402.3,y:-51.4},0).wait(1).to({rotation:0,x:-399.8,y:-47.3},0).wait(2).to({x:-400,y:-48.4},0).wait(1).to({x:-400.1,y:-49.4},0).wait(1));

	// MIX_34_arm_L
	this.instance_10 = new lib.MIX_34_arm_L("single",1);
	this.instance_10.setTransform(-369.9,39.4,1,1,0,0,0,-18.9,-18.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#83888C").s().p("AgxAeQAOgdgRgYIAMgRQAJADAKACQAMAEAJgFQAHgCAGgFQADgCAEABIAAAIQgBALAGAJQAGAHANADIAIACIgCAEQgKAMgBAQQgUAPgYACIgHAAQgXAAgOgPg");
	this.shape_31.setTransform(-335.8,46.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AggBvQgbgDgQgUIhDAJIgQgXQgGgIAEgMIAEgMQADgQASgFIAZgFIAgAAQAXghAWgnQANgVASgQIAJgJQAWgNAWAGQAJADAGAHIAEAHQACAkggAbQARgJASgGIAegHQAOgBAPAGIAGABQAJAGAEALQgCANgFAKQgFAKgNAEIgfAMIgYAKQAagKAdACQAcABAGAZQABAFgBAEIgCAHIgDALQgNAIgQADQgOADgOAAIg6ABQgLAGgLAEQgUAKgWAAIgKAAgAg7AWQAQAagOAeQARARAbgDQAZgBATgQQACgPAJgPIADgDIgJgDQgMgDgHgHQgGgIABgLIAAgJQgEAAgDACQgFAFgFACQgMAFgMgFQgKgBgJgDgAiJAtIgEAUIAJAOIA6gKIACgKIABgMQAAgKgEgCIgZgBIgGAAQgSAAgNALgAA8A4IgHAMIAFAEIBJgDIAJgFIADgHIgIgOQgJgBgKAAQgcAAgcAOgABQgaIgVAIQgKAEgIAHIgHAGQgIATAVAEIAGAAIBJggIAGgNIgEgFQgLgEgLAAQgNAAgNAGgAARhWQgVAQgNAXIgUAjQgBAFAGABQAPAFANgHQAVgWAVgYQAKgLABgRIAAgDIgEgGIgBAAIgJgBQgJAAgJAGg");
	this.shape_32.setTransform(-335,42);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BBC1C7").s().p("AiOBIIAFgUQAPgNAWACIAZABQADACAAAKIgBAMIgBAKIg6AKgAA0BLIAIgMQAlgTAmAGIAHAOIgCAHIgJAFIhJADgAAvAdQgVgEAHgVIAIgEQAIgHAKgEIAVgIQAYgLAXAJIAFAFIgGANIhKAgIgFAAgAghAAQgFAAABgFIAUgjQANgXAVgQQANgJAOAEIAAAAIAFAGIAAADQgBARgLALQgUAYgVAWQgIACgIAAQgGAAgHgBg");
	this.shape_33.setTransform(-335,41.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BDC2C6").s().p("ABhBJIACgJQAEgNAIgMIAHgJQAJgLAKgGIAfAdQgMAKgJANQgOAQgHAVgAgRACIgCgFQgBgOAEgOIAAgBQAHgTANgQIAuAWIgJAKQgTAbgGAagAilgaQgFgSAFgUQACgLAHgHQAHgIAFgKIApADIAJABQgGALgDAMQgJAcACAZg");
	this.shape_34.setTransform(-356.7,29.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8089C0").s().p("AC0BUQACgSAIgPQALgVASgJIAdAhIgJAxIgFAKQgFANgKALgABHgEQADgOAFgOQAIgWAQgRIA5AoQgKAHgJAMQgOARgIAVgAg1gyQgBgRACgUQACgKADgKQAEgJAFgKIA+ATIgMATQgLASgBASIgCAOgAj0haQgDgOAAgPIABgHIAcgEQAugGAtAAIgFAJIgHAKQgRAdAIAcIhYAFQgFgRgDgSg");
	this.shape_35.setTransform(-360.5,32.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AC+CiIgEgCIgBgDIgBgEIAGgJQgggxgsgoIgHgBIgDgIQgwgpg7gVQgWgJgXgGIgcgHIgYgEQgjgEgkAAIhMAFIgIAEIgOgIIADgJQgPgkAFgnIgGgHIABgEIACgEIAFgEIAEgFIAIgBIAEADQBIgNBEADQAmABAhAIIAiAJIAxAOQAWAKAXAMIANAFQADABAEAAQABADACACIA0AnQAXARAVATQAYAVAWAVIACgBIADgBIAEABIACACIACADIgCANIAZAiIAAAEIgBADIgCAEIgEACIgEABIgSgTQgFAYgJAXQgHASgPAOIgGALIgLABIgIAEIgCAAgACzAtQgIAPgCASIAnA1QAKgLAFgNIAFgKIAJgxIgdghQgSAJgLAVgACRgIIgHAIQgJALgDANIgCAJIAdAdQAHgUAOgRQAJgNAMgKIgfgbQgKAGgJALgABEgmQgFAOgDAOIAwAeQAIgUAOgSQAJgMAKgHIg5goQgQARgIAWgAAJhIIAAABQgEAOABAOIACAHIAiAQQAGgcAUgbIAJgKIgvgWQgPAQgGATgAg6hxQgDAKgCAKQgCAUABARIAzAMIACgOQADgSAJgSIAMgTIg+gTQgFAKgEAJgAiBh6QgHAHgDALQgEAUAFASIA3AGQgCgZAJgbQADgMAGgLIgJgCIgqgDQgFAKgGAIgAjliIIgcAEIgBAHQAAAPADAOQADASAFARIBYgFQgIgcARgdIAHgKIAFgJIgGAAQgqAAgrAGg");
	this.shape_36.setTransform(-359.4,33.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BBC1C7").s().p("AhBBfQgHgBgGgFIAAAAIgHgFIgGgaQAFgEAIgCIAIgCIAFgBIABABIAEACQASgBAOgEIAogJIADAHQAEAKgFAFQgOARgVALQgSAGgRADIgJgCgAh4BfIgGgBIgFgEQgFgKAIgIIAQgHIANAgIgVgCgAiFAyQADgEAEgDQAGgGAJgDIATgHIAaABIAAABQgXADgSAMIgZAHgABDgQIACgQIgCgFIASgpQAIgNAPgEQAOgDAJAIIADAIQAAANgHAKQgSAdgcAag");
	this.shape_37.setTransform(-398.6,72.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#83888C").s().p("AgaASQgEgJgHgFQgGgEgHABQgOgBgPADQAagdAmgRQABAKAGAJQAIANAOABQAEABAFgCQAegPASgcQAIAJABAMIgBARQgHARgNANQgNAMgOAIQgbAVgjAAQAOgSgKgTg");
	this.shape_38.setTransform(-392.3,74.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AiVBhQgGgJgDgLQgEgQAFgRQAIgbAdgGIALgCIBUgJQAegeApgUQAIgdAWgVQAKgJAPgEQATgGASAMQAJAHADALQAEAUgJAQQAaAjgRAlQgGAPgNAMQgSASgXANQgPAIgQAGQgaAGgbgIQgRAQgYAGIgfADIgOABQgOAAgOABIgFAAQgZAAgPgTgAhEBeIAJACQARgDASgGQAVgLAOgRQAFgFgEgKIgDgHIgoAJQgOAEgSABIgEgCIgBgBIgFABIgIACQgIACgFAEIAGAaIAHAFIAAAAQAGAFAHABgAiDBHQgIAIAFAKIAFAEIAGABIAVACIgNggIgQAHgAAVAYQAGAFAEAIQAKAUgNASQAkAAAbgVQAPgIAMgMQAOgOAGgTIABgPQgBgLgHgJQgTAbgeAOQgEACgFgBQgPgCgJgLQgFgIgBgLQgmASgYAdQAOgDANAAIACAAQAGAAAFAEgAhyAhQgJADgGAGQgEADgDAEIAAABIABAAIAZgHQASgMAXgDIAXgDIgHgCIgLADIgFABIgagBIgTAHgABphgQgPAEgIANIgSApIACAFIgCAQIAOAMQAcgaASgdQAHgKAAgNIgDgIQgGgGgJAAIgIABg");
	this.shape_39.setTransform(-398.3,72.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8089C0").s().p("Ah7E0QACgRAGgQIALgIIgBgIIgCgDQAtgvAkg1QAOADAMAHIAHAGIAFAFIADADIACAKQg1BJhEA+IgUAQIgFACIAGgjgAA1BFQgOgHgNAAQASgkAKglIAJgcIAIgGQAfgSAcAVQgKBEgkBBQgNgMgSgKgABEiVQgGg4gngrQATgTAcgBQAtA0ANBDQgSgGgRAEIgZAEgAg1kzIgsgiIABgBQAuAAAqARIgPAMIgOARQgJgFgHgGg");
	this.shape_40.setTransform(-376.1,40.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#BDC2C6").s().p("AggDpQgPgQgWgGIgCAAQANgZAPgYQABgGADgCIAKAAQALABAOAJQALAIAJAKIgJATIgfAqIgIgKgAAhAAQgNAAgNAGIAEg6QANgFAOgCQAJgBAJACIATAGIADA2IgCAFQgUgKgXADgAhNjVIAIgKQAKgMAQgHIAoAdIgKADQgUAHgNAOg");
	this.shape_41.setTransform(-370.4,33.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AiKFsQgLgCgCgKIgBgKQADghAIgfIgHgIIAfgjIAxg7QAOgSAMgUQASgeAUgeIASgsQAOghAHggQAIgwAEgyQgFgQgBgPQgCgMgEgNQgHgTgLgQQgQgWgTgRQgSgNgSgKIgQgKIgNgJQgTgQgSgQIgLgNIABgIIAEgDQALgHAOABQAiADAgAIQAVAFASAIQAQAGAPAKQAcASASAXQASAYAPAaQAPAaAJAbQAIAXAEAYIABABQAEAhgFAeIABAHQgDAdgGAcQgMAwgZAxIgYAnIgEAEQgRAfgXAcQgmAzgqAuQgjAkgoAdQgJAHgIAAIgDAAgAhuEAIADADIABAIIgLAIQgGAQgCARIgGAjIAFgCIAUgQQBEg+A1hJIgCgKIgDgDIgGgFIgFgGQgNgHgPgDQgjA1guAvgAAOBRQgDADgBAFQgNAZgNAZIACAAQAUAFAPAQIAIAKIAhgqIAJgSQgJgLgNgIQgOgIgLgBIgHgBIgDAAgABFgtIgIAGIgJAcQgLAlgRAkQANAAAOAHQARAKAOAMQAjhBALhEQgPgLgQAAQgNAAgPAIgACDhAIACgEIgDg5IgTgFQgJgDgJACQgOACgNAEIgEA9QANgHANgCIAJAAQASAAAQAJgAAVj4QAnArAGA4IgBACIAagEQARgEASAGQgNhDgug0QgbABgTATgAgOkoIgIAKIAdAYQANgNAUgIIAKgDIgogcQgOAGgKAMgAhjlVIAsAiQAHAGAIAFIAPgRIAOgMQgqgRgtAAIgCAAIABABg");
	this.shape_42.setTransform(-375.9,40.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#83888C").s().p("AgLAnQgHgEgIgBQgIgCgGAEQgMAHgLAKQAIgoAXgfQAGAIAJAEQAOAGAMgFQAFgCACgEQASgcADghQALAEAHAJIAHAQQAEATgFATQgFAPgIAPQgNAfggARQADgVgRgNg");
	this.shape_43.setTransform(-363.1,80.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AheCfQgKgFgIgHQgMgMgEgRQgGgcAWgUIAJgHIBDgzQANgoAXgmQgFgeAGgcQAFgOALgKQANgQAVACQALACAJAIQAOAOgBAUQAoARAGAqQACAQgFARQgIAYgNAWQgJAOgLANQgTASgbAHQgJAWgSASIgXASIgMAJQgMAGgMAIQgPAKgOAAQgKAAgJgEgAhbCAQgDALAJAGIAGAAIAGgCIATgIIAAAAIAAAAIgbgWIgKAPgAg0BPIgHAHQgFAFgCAGIASATIAIABQAIABAHgCIAJgDQANgMAKgNQANgUAFgXQACgHgIgGIgHgFIgdAdQgLALgPAJIgFABIgBAAIgDACgAgvAvIgJAIIgEAEIgXALIgMAQQgHAHgCAJQgCAEAAAFIAAABIAAgBQAKgLAJgHQAJgUATgOIASgOIgGACgAAQAKQAJABAHAFQATANgDAVQAfgRANggQAJgMAEgRQAGgTgEgTIgIgQQgGgKgLgEQgDAigSAcQgDAEgFACQgOAGgOgHQgIgEgHgJQgVAigHAlQAKgJALgHQAEgDAFAAIAEAAgAAdiIQgMALAAAPIAFAtIAEADIAHAQIARACQALgkABgiQABgMgFgMIgHgEIgGgBQgJAAgHAHg");
	this.shape_44.setTransform(-367.5,82.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BBC1C7").s().p("Ag/CQQgIgFADgLIAJgPIAbAVIAAABIgSAIIgHACIgCAAIgEgBgAgRB1IgIgBIgTgUQACgGAGgFIAHgGIADgDIABAAIAFAAQAPgKAJgLIAfgcIAGAEQAIAHgCAHQgFAWgMAVQgMANgOAMIgHACQgFACgFAAIgEAAgAhUBvQAAgFACgFQACgJAHgGIANgQIAXgMIABABQgUAOgJATQgJAIgJALgAA3gvIgGgPIgEgDIgGguQAAgPAMgKQAKgKAMADIAHAFQAGALgBAMQgBAigLAkg");
	this.shape_45.setTransform(-369.8,82.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8089C0").s().p("ABzEeQgGgQgEgQIAGgNIgFgGIgEgCQARg/AEhAQAOgFAPAAIAJABQADAAAEACIAEABIAHAIQgLBagcBYIgJAZIgEAEIgMgigABthPIgFgdIAEgKQARgeAjAEQAaBCABBJQgRgDgUABQgQAAgLAGQgDgogLgmgAA1jNQgigug1gSQAHgaAXgPQBAAXAtAzQgTAEgNAMIgUAQgAiDkZIg3gIIAAgBQAogXAtgGIgHARIgEAWIgEABQgIAAgHgCg");
	this.shape_46.setTransform(-372.7,47.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BDC2C6").s().p("AB5DJQgUgGgWAGIgCABIgBg4QgCgGACgEQADgDAGgBQAKgEAQAAQAQAAANAEIABAVIgIA1IgMgFgAARhDQAJgMALgIQAHgGAJgCIATgFIAgAwIgBAEQgXABgSAOQgKAHgIAMgAiMiiIACgNQADgPALgOIAwAFIgHAHQgNAQgFATg");
	this.shape_47.setTransform(-367.9,36.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AB4FRIgFgIQgOgdgIggIgLgDIAKguIAMhLQAEgYAAgXQABgjACgjIgFguQgEgkgLghQgRgugWgtQgMgMgJgLQgHgLgKgIQgOgNgRgJQgZgLgbgDQgWgEgVACIgSgCQgIAAgIgBQgZgEgXgFIgQgFIgDgIIACgFQAGgLANgHQAfgOAfgJQAVgGAVgDQARgDASABQAhACAZALQAcALAaAPQAaAPAVAUQASAPAQATIABABQAVAaAKAdQADACABAEQANAZAIAcQAPAxACA3IgBAsIgBAFQAAAkgGAkQgJBAgNA9QgMAwgVAuQgFAMgIADIgHABQgGAAgFgFgACBBqQgEBAgRA/IAEACIAFAGIgGANQAEAQAGAQIAMAiIAEgEIAJgYQAchYALhbIgHgHIgEgBQgEgCgDAAIgJgCQgPAAgOAFgACvBVIAMAEIAIg1IgBgVQgNgEgQAAQgQAAgKAEQgGACgDACQgCAEACAGIABA4IACgBQAKgDALAAQALAAAKAEgAByh1IgEAJIAFAdQALAnADAoQALgHAQAAQAUgBARAEQgBhKgahCIgJAAQgcAAgPAbgABrjUQgJACgHAGQgLAJgJALIAbA1QAIgMAKgHQASgOAXAAIABgFIgggwIgTAFgAgckNQA1ASAiAuIAAABIAUgQQANgMATgEQgtgzhCgWQgVAOgHAagAhUkjIgCAMIAnAFQAFgSANgRIAHgHIgwgFQgLAOgDAQgAi0kiIgBABIABABIA3AHQAJACAKAAIAEgWIAHgSQgtAHgoAWg");
	this.shape_48.setTransform(-373.3,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-18.9,scaleX:1,scaleY:1,rotation:0,x:-369.9,y:39.4,startPosition:1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_10,p:{regX:-18.8,regY:-18.8,scaleX:0.999,scaleY:0.999,rotation:2.8,x:-369.4,y:43.4,startPosition:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_10,p:{regX:-19,regY:-18.9,scaleX:0.999,scaleY:0.999,rotation:5.8,x:-369.2,y:46.5,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-18.9,scaleX:0.999,scaleY:0.999,rotation:10.9,x:-370.4,y:42.5,startPosition:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19,scaleX:0.999,scaleY:0.999,rotation:6.1,x:-372.9,y:35.1,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19,scaleX:1,scaleY:1,rotation:-3.1,x:-376,y:25.5,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19.1,scaleX:0.999,scaleY:0.999,rotation:-12.6,x:-378.4,y:19.8,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19.1,scaleX:0.999,scaleY:0.999,rotation:-12.9,x:-379.9,y:16,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19.1,scaleX:0.999,scaleY:0.999,rotation:-15.2,x:-381.2,y:13.1,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19.1,scaleX:0.999,scaleY:0.999,rotation:-16,x:-381,y:14.2,startPosition:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},48).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19,scaleX:0.999,scaleY:0.999,rotation:-27.8,x:-374.9,y:40.2,startPosition:42,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19.1,regY:-19,scaleX:1.007,scaleY:0.992,rotation:0,x:-372.6,y:46.6,startPosition:42,skewX:-34.5,skewY:-37.7}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-18.9,scaleX:1.008,scaleY:0.999,rotation:0,x:-371,y:51.6,startPosition:42,skewX:-35,skewY:-43}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-18.9,scaleX:1.008,scaleY:0.998,rotation:0,x:-373.7,y:51.9,startPosition:42,skewX:-25.2,skewY:-33.2}}]},8).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-18.8,scaleX:0.999,scaleY:0.999,rotation:-33.5,x:-374.8,y:21.1,startPosition:44,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19,scaleX:0.998,scaleY:0.998,rotation:-36.6,x:-381.7,y:7.2,startPosition:43,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19,scaleX:0.998,scaleY:0.998,rotation:-38.7,x:-384.8,y:-0.1,startPosition:43,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-19,scaleX:0.998,scaleY:0.998,rotation:-39.9,x:-386,y:-4.1,startPosition:43,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-19,scaleX:0.998,scaleY:0.998,rotation:-38.7,x:-384.8,y:0,startPosition:43,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-19,scaleX:0.998,scaleY:0.998,rotation:-38.7,x:-384.6,y:1.4,startPosition:43,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-19,scaleX:0.998,scaleY:0.998,rotation:-38.7,x:-384.9,y:-0.6,startPosition:43,skewX:0,skewY:0}}]},12).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-19,scaleX:0.978,scaleY:0.995,rotation:0,x:-381.6,y:4.1,startPosition:43,skewX:-40.7,skewY:-43.4}}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-19,scaleX:0.999,scaleY:0.999,rotation:23.5,x:-372.2,y:34.6,startPosition:0,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-18.9,scaleX:0.999,scaleY:0.999,rotation:7.3,x:-370.2,y:36.8,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-18.9,scaleX:1,scaleY:1,rotation:0,x:-369.6,y:41.5,startPosition:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_10,p:{regX:-19,regY:-18.9,scaleX:1,scaleY:1,rotation:-2.4,x:-369.9,y:40.4,startPosition:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_10,p:{regX:-18.9,regY:-18.9,scaleX:1,scaleY:1,rotation:0,x:-369.9,y:39.4,startPosition:1,skewX:0,skewY:0}}]},1).wait(1));

	// MIX_34_handle
	this.instance_11 = new lib.MIX_34_handle("synched",0);
	this.instance_11.setTransform(-526.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(2).to({rotation:1.1,x:-525.3,y:-0.9},0).wait(1).to({rotation:2.1,x:-524.1,y:-0.5},0).wait(2).to({rotation:0.8,x:-526.3,y:-1.1},0).wait(1).to({rotation:-1,x:-530.1,y:-3},0).wait(1).to({rotation:-3,x:-534.5,y:-7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3,x:-537.5,y:-9.1},0).wait(1).to({rotation:-5.3,x:-539.5,y:-10},0).wait(1).to({rotation:-6.4,x:-541.3},0).wait(2).to({x:-541.1,y:-8.8},0).wait(48).to({rotation:-3.8,x:-539.4,y:-9.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.2,x:-531.1,y:-1.6},0).wait(1).to({rotation:1.5,x:-528,y:1.2},0).wait(1).to({rotation:2.5,x:-525.5,y:3.3},0).wait(8).to({rotation:0,x:-529.8,y:4.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.3,x:-534.7,y:-4.8},0).wait(1).to({rotation:-8.4,x:-542.6,y:-10.2},0).wait(1).to({rotation:-10.5,x:-546.1,y:-11.8},0).wait(1).to({rotation:-11.8,x:-547.6,y:-12.2},0).wait(2).to({rotation:-10.5,x:-546.1,y:-11.4},0).wait(1).to({x:-545.9,y:-10},0).wait(12).to({x:-546.2,y:-12.1},0).wait(2).to({rotation:-9.5,x:-542.6,y:-10.2},0).wait(1).to({rotation:-6.7,x:-537.7,y:-10.7},0).wait(1).to({rotation:-4.4,x:-534.1,y:-10.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-530.6,y:-3.1},0).wait(1).to({rotation:-1.1,x:-527.5,y:-1},0).wait(1).to({rotation:0,x:-526.2,y:0},0).wait(2).to({x:-526.3,y:-0.9},0).wait(1).to({x:-526.5,y:-1.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-572.1,-131.6,260.1,255.5);


(lib.MasterclipIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_arm_L
	this.instance = new lib.MIX_34_arm_Lcopy("single",2);
	this.instance.setTransform(-383.4,20.6,0.999,0.999,-8.2,0,0,-19,-19.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(106).to({startPosition:2,_off:false},0).wait(2).to({x:-386.2,y:16.9},0).wait(1).to({x:-387.7,y:15.3},0).wait(2).to({x:-387.5,y:16.5},0).wait(2).to({x:-387.4,y:17.4},0).wait(58).to({x:-387.8,y:14.3},0).wait(1).to({regX:-18.8,regY:-18.9,rotation:-6.3,x:-381.3,y:21.8},0).wait(1).to({regX:-18.9,rotation:-4.8,x:-381.9,y:21,startPosition:5},0).to({_off:true},1).wait(66));

	// Headclip
	this.instance_1 = new lib.HeadclipIDLE("synched",0);
	this.instance_1.setTransform(-442.7,14.2,1,1,0,0,0,-442.7,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(96).to({rotation:0.8,x:-442.4,y:17.3,startPosition:96},0).wait(1).to({regX:-442.7,rotation:1.8,x:-441.3,y:20.1,startPosition:97},0).wait(2).to({regY:14.3,rotation:0.8,x:-444.3,y:20.5,startPosition:99},0).wait(2).to({rotation:-0.1,x:-447.4,y:19.7,startPosition:101},0).wait(2).to({rotation:-2.3,x:-451.7,y:17.2,startPosition:103},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-455.8,y:13.7,startPosition:104},0).wait(1).to({regX:-442.6,rotation:-7.1,x:-460.1,y:7.8,startPosition:105},0).wait(1).to({rotation:-8.1,x:-461.8,y:4,startPosition:106},0).wait(2).to({x:-462.8,y:2,startPosition:108},0).wait(1).to({x:-463.2,y:1.2,startPosition:109},0).wait(2).to({x:-463,y:2.4,startPosition:111},0).wait(2).to({x:-462.9,y:3.3,startPosition:113},0).wait(58).to({x:-463.3,y:0.1,startPosition:171},0).wait(1).to({regX:-442.5,regY:14.4,rotation:-6.3,x:-458.9,y:3.1,startPosition:172},0).wait(1).to({regX:-442.6,regY:14.3,rotation:-4.8,x:-455.1,y:5.6,startPosition:173},0).wait(1).to({regY:14.4,rotation:-3.4,x:-451.8,y:8,startPosition:174},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-448.9,y:10,startPosition:175},0).wait(1).to({rotation:-1.3,x:-446.7,y:11.5,startPosition:176},0).wait(1).to({regX:-442.5,regY:14.3,rotation:-0.6,x:-444.8,y:12.7,startPosition:177},0).wait(1).to({regX:-442.6,rotation:-0.1,x:-443.6,y:13.5,startPosition:178},0).wait(1).to({regY:14.4,rotation:0,x:-442.8,y:14.1,startPosition:179},0).wait(1).to({regY:14.2,x:-442.6,y:14.2,startPosition:180},0).wait(59).to({startPosition:239},0).wait(1));

	// MIX_34_armR
	this.instance_2 = new lib.MIX_34_armR("single",1);
	this.instance_2.setTransform(-521.2,49.7,1,1,0,0,0,21.9,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(96).to({regX:21.8,regY:-21.6,rotation:3.6,x:-521.4,y:51.7},0).wait(1).to({regY:-21.7,rotation:7.6,x:-520.9,y:53.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:6.8,x:-523.3,y:54.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.1,x:-525.8,y:55.5},0).wait(2).to({regX:21.9,rotation:-2.3,x:-528.5,y:56.1,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-530.4,y:58.7,startPosition:4},0).wait(1).to({rotation:-7.1,x:-533.5,y:53,startPosition:5},0).wait(1).to({regX:18.4,regY:-29,scaleY:1.07,rotation:0,skewX:-4.9,skewY:-8.1,x:-538.5,y:47.6,startPosition:2},0).wait(2).to({regX:21.8,regY:-21.7,scaleY:1,rotation:-8.1,skewX:0,skewY:0,x:-535.2,y:49.9},0).wait(1).to({x:-535.8,y:47.7},0).wait(2).to({x:-535.4,y:48.9},0).wait(2).to({x:-535.5,y:49.8},0).wait(58).to({x:-535.9,y:46.7},0).wait(1).to({regX:21.9,regY:-21.8,rotation:-6.3,x:-532.5,y:49.6},0).wait(1).to({scaleY:1.1,rotation:0,skewX:-1.5,skewY:-4.8,x:-529.5,y:52},0).wait(1).to({regY:-21.7,scaleX:1,scaleY:1,skewX:-3.4,skewY:-7.8,x:-527.4,y:50.8,startPosition:5},0).wait(1).to({scaleX:0.87,scaleY:1,rotation:-2.3,skewX:0,skewY:0,x:-525.1,y:53.5,startPosition:4},0).wait(1).to({scaleX:1,rotation:-1.3,x:-520.1,y:52.3,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.6,x:-523.5,y:48.9,startPosition:1},0).wait(1).to({regY:-21.8,scaleX:1,scaleY:1,rotation:-5.1,x:-521.8,y:49.6},0).wait(1).to({regY:-21.6,rotation:0,skewX:-1.1,skewY:-0.8,x:-521.3,y:49.8},0).wait(1).to({regY:-21.7,skewX:0,skewY:0,x:-521.1,y:49.7},0).wait(59).to({startPosition:1},0).wait(1));

	// MIX_propeller
	this.instance_3 = new lib.MIX_propeller("synched",0);
	this.instance_3.setTransform(-446.6,-62.8,1,1,0,0,0,1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(96).to({rotation:0.8,x:-445.2,y:-59.7},0).wait(1).to({regX:1.1,rotation:1.8,x:-442.6,y:-56.9,startPosition:1},0).wait(2).to({regX:1,rotation:0.8,x:-447,y:-56.6,startPosition:0},0).wait(2).to({rotation:-0.1,x:-451.6,y:-57.3,startPosition:2},0).wait(2).to({regX:1.1,rotation:-2.3,x:-458.9,y:-59.6,startPosition:1},0).wait(1).to({regX:1,scaleX:1,scaleY:1,rotation:-4.9,x:-466.5,y:-62.6,startPosition:2},0).wait(1).to({rotation:-7.1,x:-473.9,y:-68,startPosition:0},0).wait(1).to({rotation:-8.1,x:-476.9,y:-71.6,startPosition:1},0).wait(2).to({x:-477.9,y:-73.6,startPosition:0},0).wait(1).to({x:-478.3,y:-74.4,startPosition:1},0).wait(2).to({x:-478.1,y:-73.2,startPosition:0},0).wait(2).to({x:-478,y:-72.3,startPosition:2},0).wait(58).to({x:-478.4,y:-75.5,startPosition:0},0).wait(1).to({rotation:-6.3,x:-471.7,y:-72.8,startPosition:1},0).wait(1).to({rotation:-4.8,x:-465.8,y:-70.4,startPosition:2},0).wait(1).to({rotation:-3.4,x:-460.7,y:-68.4,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-456.3,y:-66.6,startPosition:1},0).wait(1).to({regY:18.5,rotation:-1.3,x:-452.8,y:-65.1,startPosition:2},0).wait(1).to({regY:18.4,rotation:-0.6,x:-450,y:-64,startPosition:0},0).wait(1).to({rotation:-0.1,x:-448,y:-63.3,startPosition:1},0).wait(1).to({regX:1.1,rotation:0,x:-446.8,y:-62.8,startPosition:2},0).wait(1).to({regX:1,x:-446.5,y:-62.7,startPosition:0},0).wait(59).to({startPosition:2},0).wait(1));

	// MIX_34_bulb_R
	this.instance_4 = new lib.MIX_34_bulb_R("synched",0);
	this.instance_4.setTransform(-512.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(96).to({rotation:0.8,x:-511.3,y:-41.9},0).wait(1).to({rotation:1.8,x:-509.2,y:-40.3},0).wait(2).to({rotation:0.8,x:-513.2,y:-38.8},0).wait(2).to({rotation:-0.1,x:-517.4,y:-38.3},0).wait(2).to({rotation:-2.3,x:-524,y:-38},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-530.4,y:-38.2},0).wait(1).to({rotation:-7.1,x:-536.8,y:-41.1},0).wait(1).to({rotation:-8.1,x:-539.3,y:-43.5},0).wait(2).to({x:-540.3,y:-45.5},0).wait(1).to({x:-540.7,y:-46.4},0).wait(2).to({x:-540.5,y:-45.2},0).wait(2).to({x:-540.4,y:-44.3},0).wait(58).to({x:-540.8,y:-47.4},0).wait(1).to({rotation:-6.3,x:-534.8,y:-46.6},0).wait(1).to({rotation:-4.8,x:-529.6,y:-45.9},0).wait(1).to({rotation:-3.4,x:-525,y:-45.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-521.1,y:-45},0).wait(1).to({rotation:-1.3,x:-517.9,y:-44.6},0).wait(1).to({rotation:-0.6,x:-515.5,y:-44.3},0).wait(1).to({rotation:-0.1,x:-513.7,y:-44},0).wait(1).to({rotation:0,x:-512.7},0).wait(1).to({x:-512.4,y:-43.9},0).wait(59).to({startPosition:0},0).wait(1));

	// MIX_34_Lashes_R
	this.instance_5 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_5.setTransform(-495.7,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(96).to({rotation:0.8,x:-495,y:-8.8},0).wait(1).to({rotation:1.8,x:-493.5,y:-6.9},0).wait(2).to({rotation:0.8,x:-496.9,y:-5.7},0).wait(2).to({rotation:-0.1,x:-500.6,y:-5.5},0).wait(2).to({rotation:-2.3,x:-505.8,y:-5.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-510.9,y:-6.9},0).wait(1).to({rotation:-7.1,x:-516.1,y:-10.6},0).wait(1).to({rotation:-8.1,x:-518.1,y:-13.4},0).wait(2).to({x:-519,y:-15.4},0).wait(1).to({x:-519.5,y:-16.2},0).wait(2).to({x:-519.3,y:-15},0).wait(2).to({x:-519.1,y:-14.1},0).wait(58).to({x:-519.6,y:-17.3},0).wait(1).to({rotation:-6.3,x:-514.6,y:-16},0).wait(1).to({rotation:-4.8,x:-510.2,y:-14.8},0).wait(1).to({rotation:-3.4,x:-506.3,y:-13.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-503,y:-12.9},0).wait(1).to({rotation:-1.3,x:-500.4,y:-12.3},0).wait(1).to({rotation:-0.6,x:-498.3,y:-11.7},0).wait(1).to({rotation:-0.1,x:-496.8,y:-11.4},0).wait(1).to({rotation:0,x:-495.9,y:-11.2},0).wait(1).to({x:-495.6,y:-11.1},0).wait(59).to({startPosition:0},0).wait(1));

	// Layer 23
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAagHAQgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQAKgKAHgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgGgCgEgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape.setTransform(-371.3,-16.2,1,1,0,0,0,-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgYB+QgDgBgBgGQgBgIAVgFQAagGARgSIARgVQANgPACgBQgFAWgKARQgUAkgjAFIgQABIgFAAgAgsBRQgBgIANgIIAZgOQALgKAHgKIANgQQAEgGAHgcQAHgbgBgEIgCgHQAEAEAHAPQABAHgFAZQgDAYgDAEIgZAhQgaAfgVADIgCAAQgIAAgCgIgAg5AXQgFgDgEgEQAlgSASgwQAMgngCghIgBgDQAEACAEANQAEAKACAKQADAYgPAnQgTAvggAEIgBAAIgFgBg");
	this.shape_1.setTransform(-370.6,-12.1,1,1,0,0,0,-0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZB+QgEgBgBgGQgBgIAWgFQAagGARgQQAFgIAMgOQANgOADgBQgGAWgJARQgWAjgjAEIgPABIgFAAgAgtBSQgBgJAOgIIAZgOQALgKAIgJIAMgPQAEgHAIgbQAHgcAAgEIgCgGQAEAEAGAOQABAIgFAZQgEAXgDAFIgZAgQgbAegVADIgDAAQgIAAgBgHgAg4AXQgGgDgEgEQAmgRASgxQAOgmgEghIAAgEQAFADAEAMQADALABAKQADAYgQAnQgTAuggAEIgFgBg");
	this.shape_2.setTransform(-369,-8.1,1,1,0,0,0,-0.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgXB+QgFgBAAgGQgBgHAVgGQAagGAQgRIARgWQANgPADgBQgGAXgJAQQgVAkgjAFIgRABIgCAAgAgsBSQgBgJANgIIAZgOQALgKAIgJIALgQQAFgGAHgcQAGgcAAgEIgCgGQAEAEAGAOQABAHgEAaQgEAXgCAEIgZAhQgaAfgVADIgDAAQgIAAgBgHgAg5AXQgFgCgEgEQAlgSASgwQAMgngCghIgBgEQAEADAEAMQAEAKABAKQADAZgOAnQgTAughAEIgFgBg");
	this.shape_3.setTransform(-372.4,-9,1,1,0,0,0,-0.2,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgWB+QgEgBgBgGQgBgHAVgGQAbgHAQgSIAQgWQANgPACAAQgFAWgIARQgVAkgjAFIgSADIgCgBgAgrBSQgBgIANgIIAYgPQALgKAIgKIALgQQAFgGAGgcQAGgcAAgEIgDgHQAFAFAGANQABAIgDAaQgEAXgCAEIgYAhQgaAggVADIgDABQgIAAgBgIgAg5AYQgFgDgEgDQAlgTAQgxQANgngEghIgBgEQAFADADAMQAFALABAKQAEAYgOAnQgSAvghAFIgBAAIgEgBg");
	this.shape_4.setTransform(-376.2,-11.1,1,1,0,0,0,-0.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgSB+QgEAAgBgGQgCgIAWgGQAagIAOgSIAQgXQANgPACgCQgEAXgJARQgTAlgkAHIgQADIgCgBgAgpBUQgBgJANgIIAXgQQALgLAGgKIAMgQQAEgHAFgcQAFgcgBgEIgCgHQAFAEAHAOQABAIgDAZQgCAYgCAEIgXAiQgZAhgUAEIgEABQgHAAgCgHgAg5AaQgGgCgEgEQAlgUAOgyQAMgngFghIgBgEQAFADAFAMQADAKACAKQAEAYgLAoQgSAvggAGIgBABIgEgBg");
	this.shape_5.setTransform(-381.8,-16.4,1,1,0,0,0,-0.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTB4QgCgIAUgGQAagKAPgUIAOgXQALgPADgCQgDAXgHARQgSAmgkAJIgSADQgEAAgBgGgAgnBUQgCgJANgJIAXgQQAKgLAGgLIAKgRQAEgGAEgdQAEgcgBgDIgCgHQAEAEAIANQACAHgCAaQgBAYgCAEIgWAkQgXAhgUAFIgEABQgHAAgCgHgAg6AbQgFgCgEgDQAjgWANgyQAKgpgIggIgBgCQAFABAGAMQAFAKACAKQAEAYgKAoQgOAwggAHIgCABIgEgBg");
	this.shape_6.setTransform(-387.5,-23,1,1,0,0,0,-0.6,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgPB4QgCgIASgHQAbgLAOgTQADgIALgQIAMgSQgBAXgIASQgPAmglAKIgRAEQgEAAgBgGgAgkBVQgCgIALgKIAXgRQAJgMAHgKIAJgSQADgGADgdQADgdgBgDQgCgEAAgCQAEADAIANQACAHgBAaQAAAYgBAEIgUAkQgXAjgTAGIgFABQgHAAgBgHgAg5AdQgGgBgEgEQAhgYAMgxQAIgpgJggIgBgDQAFACAHALQAFAKADAKQAEAXgIApQgMAwgfAJIgDAAIgDAAg");
	this.shape_7.setTransform(-393.4,-31.4,1,1,0,0,0,-0.7,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIB+QgEAAgCgGQgCgHASgIQAbgMANgTQAEgIAKgRQAKgQACgBQgCAXgGASQgPAmgjALQgMAEgFAAIgBAAgAgkBWQgCgIAMgKIAXgSQAJgMAFgLIAKgRQADgHACgdQACgcgBgEQgDgEAAgCQAGADAIANQACAHAAAaQAAAYgCAFIgTAjQgWAkgTAGIgFABQgHAAgCgGgAg5AeQgHgBgDgEQAhgZAKgxQAIgpgKgfIgBgEQAGACAGALQAFAKAEAKQAGAXgJApQgMAxgfAJIgBAAIgEAAg");
	this.shape_8.setTransform(-395.7,-36.4,1,1,0,0,0,-0.7,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgIB+QgEAAgCgGQgDgHATgIQAbgMAOgTQADgIAKgRQAKgQADgBQgDAXgGASQgPAmgkALQgLAEgFAAIgBAAgAgjBWQgDgIAMgKIAWgSQAJgMAGgLIAJgRQAEgHADgdQABgcgBgEQgCgEAAgCQAFADAHANQADAHAAAaQAAAYgCAFIgTAjQgVAkgVAGIgEABQgHAAgBgGgAg6AeQgFgBgFgEQAigZAKgxQAIgpgJgfIgCgEQAGACAGALQAGAKACAKQAHAXgJApQgLAxggAJIgBAAIgFAAg");
	this.shape_9.setTransform(-396.7,-38.4,1,1,0,0,0,-0.7,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgIB+QgFAAgBgGQgDgHATgIQAbgMAOgTQADgIAKgRQAKgQADgBQgCAXgHASQgPAmgkALQgLAEgFAAIgBAAgAgkBWQgCgIAMgKIAXgSQAIgMAGgLIAJgRQAEgHACgdQACgcgBgEQgDgEABgCQAFADAHANQADAHAAAaQAAAYgCAFIgTAjQgVAkgVAGIgEABQgHAAgCgGgAg5AeQgGgBgFgEQAigZAKgxQAIgpgKgfIgBgEQAGACAGALQAFAKADAKQAHAXgJApQgLAxggAJIgBAAIgEAAg");
	this.shape_10.setTransform(-396.9,-38,1,1,0,0,0,-0.7,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIB+QgEAAgCgGQgDgHATgIQAbgMAOgTQADgIAKgRQAKgQACgBQgCAXgGASQgPAmgjALQgMAEgFAAIgBAAgAgjBWQgDgIAMgKIAWgSQAJgMAGgLIAJgRQAEgHADgdQABgcgBgEQgCgEAAgCQAEADAIANQADAHAAAaQAAAYgCAFIgTAjQgVAkgVAGIgEABQgHAAgBgGgAg6AeQgGgBgEgEQAigZAKgxQAIgpgJgfIgCgEQAGACAGALQAGAKADAKQAGAXgJApQgLAxggAJIgBAAIgFAAg");
	this.shape_11.setTransform(-396.8,-37.1,1,1,0,0,0,-0.7,-0.1);

	this.instance_6 = new lib.Tween6("synched",0);
	this.instance_6.setTransform(-396.6,-40.2);

	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(-371,-16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},96).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9,p:{x:-396.7,y:-38.4}}]},2).to({state:[{t:this.shape_9,p:{x:-397.1,y:-39.2}}]},1).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.instance_6,p:{x:-396.6,y:-40.2}}]},58).to({state:[{t:this.instance_6,p:{x:-391.2,y:-35.2}}]},1).to({state:[{t:this.instance_6,p:{x:-386.5,y:-30.7}}]},1).to({state:[{t:this.instance_6,p:{x:-382.4,y:-26.9}}]},1).to({state:[{t:this.instance_6,p:{x:-378.9,y:-23.6}}]},1).to({state:[{t:this.instance_6,p:{x:-376.1,y:-21}}]},1).to({state:[{t:this.instance_6,p:{x:-373.9,y:-18.9}}]},1).to({state:[{t:this.instance_6,p:{x:-372.3,y:-17.4}}]},1).to({state:[{t:this.instance_6,p:{x:-371.3,y:-16.5}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.shape}]},59).wait(1));

	// MIX_34_head
	this.instance_8 = new lib.MIX_34_head("synched",0);
	this.instance_8.setTransform(-448.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(96).to({rotation:0.8,x:-447.6,y:2.9},0).wait(1).to({rotation:1.8,x:-446.3,y:5.6},0).wait(2).to({rotation:0.8,x:-449.5,y:6},0).wait(2).to({rotation:-0.1,x:-452.9,y:5.4},0).wait(2).to({rotation:-2.3,x:-457.8,y:3.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-462.5,y:0},0).wait(1).to({rotation:-7.1,x:-467.5,y:-5.5},0).wait(1).to({rotation:-8.1,x:-469.4,y:-9.2},0).wait(2).to({x:-470.3,y:-11.2},0).wait(1).to({x:-470.8,y:-12},0).wait(2).to({x:-470.6,y:-10.8},0).wait(2).to({x:-470.4,y:-9.9},0).wait(58).to({x:-470.9,y:-13.1},0).wait(1).to({rotation:-6.3,x:-466.1,y:-10.4},0).wait(1).to({rotation:-4.8,x:-461.8,y:-7.9},0).wait(1).to({rotation:-3.4,x:-458.2,y:-5.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-455,y:-3.9},0).wait(1).to({rotation:-1.3,x:-452.5,y:-2.5},0).wait(1).to({rotation:-0.6,x:-450.5,y:-1.3},0).wait(1).to({rotation:-0.1,x:-449.2,y:-0.6},0).wait(1).to({rotation:0,x:-448.3,y:0},0).wait(1).to({x:-448,y:0},0).wait(59).to({startPosition:0},0).wait(1));

	// MIX_34_bulbL
	this.instance_9 = new lib.MIX_34_bulbL("synched",0);
	this.instance_9.setTransform(-400.2,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(96).to({rotation:0.8,x:-399,y:-45.8},0).wait(1).to({rotation:1.8,x:-396.8,y:-42.2},0).wait(2).to({rotation:0.8,x:-400.8,y:-42.7},0).wait(2).to({rotation:-0.1,x:-405.2,y:-44.2},0).wait(2).to({rotation:-2.3,x:-412.1,y:-48.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-419.1,y:-53.6},0).wait(1).to({rotation:-7.1,x:-426.2,y:-60.8},0).wait(1).to({rotation:-8.1,x:-429.1,y:-65.2},0).wait(2).to({x:-430,y:-67.2},0).wait(1).to({x:-430.5,y:-68.1},0).wait(2).to({x:-430.3,y:-66.9},0).wait(2).to({x:-430.1,y:-66},0).wait(58).to({x:-430.6,y:-69.1},0).wait(1).to({rotation:-6.3,x:-424.2,y:-65},0).wait(1).to({rotation:-4.8,x:-418.6,y:-61.4},0).wait(1).to({rotation:-3.4,x:-413.7,y:-58.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-409.5,y:-55.6},0).wait(1).to({rotation:-1.3,x:-406.2,y:-53.3},0).wait(1).to({rotation:-0.6,x:-403.6,y:-51.6},0).wait(1).to({rotation:-0.1,x:-401.6,y:-50.4},0).wait(1).to({rotation:0,x:-400.6,y:-49.7},0).wait(1).to({x:-400.1,y:-49.4},0).wait(59).to({startPosition:0},0).wait(1));

	// MIX_34_arm_L
	this.instance_10 = new lib.MIX_34_arm_L("single",1);
	this.instance_10.setTransform(-369.9,39.4,1,1,0,0,0,-18.9,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(96).to({regX:-18.7,rotation:-1.8,x:-369.9,y:43.4},0).wait(1).to({regX:-18.8,regY:-18.9,scaleX:1,scaleY:1,rotation:-5,x:-369.3,y:47.5},0).wait(2).to({rotation:-4.5,x:-371.8,y:46.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-0.1,x:-374.5,y:44.4},0).wait(2).to({regX:-18.9,rotation:-2.3,x:-378,y:39,startPosition:3},0).wait(1).to({regX:-18.8,regY:-19,scaleX:1,scaleY:1,rotation:-4.9,x:-381.1,y:32.1,startPosition:4},0).wait(1).to({regX:-18.9,rotation:-7.1,x:-385,y:23.3,startPosition:5},0).wait(1).to({rotation:-8.1,x:-383.3,y:20.6,startPosition:2},0).wait(2).to({x:-386.2,y:16.9},0).wait(1).to({x:-387.7,y:15.3},0).wait(2).to({x:-387.5,y:16.5},0).wait(2).to({x:-387.4,y:17.4},0).wait(58).to({x:-387.8,y:14.3},0).wait(1).to({regX:-18.8,regY:-18.9,rotation:-6.3,x:-381.3,y:21.8},0).wait(1).to({regX:-18.9,rotation:-4.8,x:-381.9,y:21,startPosition:5},0).wait(1).to({regY:-19,scaleX:1.04,rotation:0,skewX:-3.4,skewY:12.3,x:-376.1,y:21.8},0).wait(1).to({regY:-18.9,scaleX:1,scaleY:1,rotation:-8,skewX:0,skewY:0,x:-377.4,y:34.3,startPosition:4},0).wait(1).to({scaleX:1,scaleY:1.01,rotation:0,skewX:12.1,skewY:4,x:-378,y:37.3,startPosition:1},0).wait(1).to({regY:-18.8,scaleX:1,scaleY:1,skewX:6.1,skewY:2.5,x:-375.4,y:37.2},0).wait(1).to({regY:-18.9,scaleY:1,rotation:3.2,skewX:0,skewY:0,x:-371.5,y:38.2},0).wait(1).to({regY:-19,rotation:0,x:-370.8,y:39},0).wait(1).to({regX:-18.8,regY:-18.8,x:-369.8,y:39.4},0).wait(59).to({startPosition:1},0).wait(1));

	// MIX_34_handle
	this.instance_11 = new lib.MIX_34_handle("synched",0);
	this.instance_11.setTransform(-526.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(96).to({rotation:0.8,x:-526,y:-0.1},0).wait(1).to({rotation:1.8,x:-524.6,y:1.1},0).wait(2).to({rotation:0.8,x:-527.9,y:2.9},0).wait(2).to({rotation:-0.1,x:-531.3,y:3.7},0).wait(2).to({rotation:-2.3,x:-536.2,y:4.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.9,x:-540.7,y:4.9},0).wait(1).to({rotation:-7.1,x:-545.4,y:2.3},0).wait(1).to({rotation:-8.1,x:-547.2,y:0},0).wait(2).to({x:-548.1,y:-1.8},0).wait(1).to({x:-548.6,y:-2.7},0).wait(2).to({x:-548.4,y:-1.5},0).wait(2).to({x:-548.2,y:-0.6},0).wait(58).to({x:-548.7,y:-3.7},0).wait(1).to({rotation:-6.3,x:-544,y:-3.3},0).wait(1).to({rotation:-4.8,x:-539.9,y:-3},0).wait(1).to({rotation:-3.4,x:-536.3,y:-2.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:-533.3,y:-2.5},0).wait(1).to({rotation:-1.3,x:-530.8,y:-2.2},0).wait(1).to({rotation:-0.6,x:-529,y:-2.1},0).wait(1).to({rotation:-0.1,x:-527.6,y:-2},0).wait(1).to({rotation:0,x:-526.7,y:-1.9},0).wait(1).to({x:-526.5},0).wait(59).to({startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-572.1,-131.6,260.1,255.5);


(lib.Masterclipgoggles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Headclip
	this.instance = new lib.HeadclipGoggles("synched",0);
	this.instance.setTransform(-442.7,14.2,1,1,0,0,0,-442.7,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-1.6,x:-443.9,y:17.8,startPosition:1},0).wait(1).to({rotation:-3.1,x:-445.6,y:23.1,startPosition:2},0).wait(1).to({rotation:-4.1,x:-446.1,y:26,startPosition:3},0).wait(2).to({rotation:-5.9,x:-447.9,y:21.6,startPosition:5},0).wait(2).to({regX:-442.7,regY:14.3,scaleX:1,scaleY:1,rotation:-8.1,x:-457.6,y:1.8,startPosition:7},0).wait(1).to({regY:14.2,rotation:-9.3,x:-461.3,y:-4.9,startPosition:8},0).wait(1).to({x:-461.8,y:-6.1,startPosition:9},0).wait(2).to({x:-461.2,y:-4.3,startPosition:11},0).wait(1).to({x:-461.1,y:-3.7,startPosition:12},0).wait(5).to({rotation:-8.3,x:-458.2,y:-4.1,startPosition:17},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-449.5,y:-2.3,startPosition:19},0).wait(1).to({rotation:2.8,x:-423.8,y:-3.8,startPosition:20},0).wait(2).to({rotation:4.4,x:-418,y:-4.3,startPosition:22},0).wait(2).to({x:-419.2,y:-4.1,startPosition:24},0).wait(31).to({rotation:3.1,x:-419.9,y:-1,startPosition:55},0).wait(2).to({regY:14.3,rotation:1.1,x:-424.5,startPosition:57},0).wait(1).to({rotation:0.6,x:-427.1,y:-2.9,startPosition:58},0).wait(1).to({rotation:-0.3,x:-430.9,y:-7.6,startPosition:59},0).wait(1).to({rotation:-1.3,x:-432.4,y:-10.2,startPosition:60},0).wait(1).to({x:-433.3,y:-11.6,startPosition:61},0).wait(11).to({regX:-442.8,scaleX:1,scaleY:1,rotation:1.3,x:-426.9,y:-3.5,startPosition:72},0).wait(1).to({rotation:2.9,x:-423.2,y:5.2,startPosition:73},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-421.3,y:10.9,startPosition:74},0).wait(1).to({x:-420.9,y:13.3,startPosition:75},0).wait(1).to({x:-420.8,y:14.2,startPosition:76},0).wait(21).to({regX:-442.9,regY:14.2,rotation:5.9,x:-421.6,y:18.1,startPosition:91},0).wait(1).to({rotation:5.3,x:-422.9,y:20,startPosition:92},0).wait(1).to({regX:-442.8,rotation:4.7,x:-424,y:21.7,startPosition:93},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-430.2,y:25.1,startPosition:95},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-432.3,y:23,startPosition:96},0).wait(1).to({regX:-442.9,rotation:1.8,x:-434.6,y:21,startPosition:97},0).wait(1).to({regX:-442.8,scaleX:1,scaleY:1,rotation:1.3,x:-436.6,y:19,startPosition:98},0).wait(1).to({rotation:0.8,x:-438.8,y:16.9,startPosition:99},0).wait(1).to({regX:-442.9,scaleX:1,scaleY:1,rotation:0.3,x:-441.1,y:14.9,startPosition:100},0).wait(1).to({regX:-442.6,rotation:0,x:-443.1,y:12.8,startPosition:101},0).wait(2).to({x:-442.6,y:14.2,startPosition:103},0).wait(2));

	// MIX_34_armR
	this.instance_1 = new lib.MIX_34_armR("single",1);
	this.instance_1.setTransform(-521.2,49.7,1,1,0,0,0,21.9,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:11.5,skewY:14,x:-521.4,y:53.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-3.1,skewX:0,skewY:0,x:-521.9,y:63,startPosition:22},0).wait(1).to({regX:21.8,scaleX:1,scaleY:1,rotation:0,skewY:3.2,x:-521.7,y:67.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-5.9,skewY:0,x:-522.2,y:65.3},0).wait(2).to({regX:21.9,scaleX:1,scaleY:1,rotation:-8.1,x:-530.1,y:48.1,startPosition:25},0).wait(1).to({rotation:-9.3,x:-532.7,y:42.8,startPosition:23},0).wait(1).to({regY:-21.8,scaleY:1.01,rotation:0,skewX:-10.2,skewY:-10.3,x:-533.2,y:41.5},0).wait(2).to({regY:-21.7,scaleY:1,rotation:-9.3,skewX:0,skewY:0,x:-532.6,y:43.4},0).wait(1).to({x:-532.5,y:44},0).wait(5).to({regY:-21.6,rotation:-5.8,x:-530.4,y:42.5},0).wait(2).to({regX:21.7,scaleX:1,scaleY:1,rotation:-4.3,x:-524.9,y:39},0).wait(1).to({regX:21.8,regY:-21.7,scaleX:1,scaleY:1,rotation:6.6,x:-503.9,y:27.4,startPosition:20},0).wait(2).to({regX:21.9,rotation:16.6,x:-498.9,y:24.9},0).wait(2).to({rotation:18.9,x:-500.1,y:25.1},0).wait(31).to({regX:21.8,rotation:23.4,y:30},0).wait(2).to({regX:21.9,regY:-21.6,rotation:19.9,x:-503.6,y:32.7},0).wait(1).to({regX:21.7,regY:-21.7,rotation:15.1,x:-506,y:31.4},0).wait(1).to({rotation:11.8,x:-509,y:28.2},0).wait(1).to({regX:21.8,rotation:8.8,x:-509.9,y:27},0).wait(1).to({regX:21.7,rotation:7.5,x:-510.8,y:25.6},0).wait(11).to({regX:21.8,scaleX:1,scaleY:1,rotation:-4.2,x:-506.1,y:29.7,startPosition:26},0).wait(1).to({scaleX:1,scaleY:0.99,rotation:0,skewX:-25,skewY:-31.4,x:-503.1,y:36.6},0).wait(1).to({regX:21.9,scaleX:1,scaleY:1,rotation:16.7,skewX:0,skewY:0,x:-502.1,y:40.1,startPosition:24},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.4,x:-501.7,y:42.5},0).wait(1).to({rotation:4.3,x:-501.6,y:43.5},0).wait(2).to({scaleY:1,rotation:0,skewX:6.2,skewY:4.3},0).wait(1).to({regX:22,scaleY:1,skewX:7.4,x:-501.5},0).wait(2).to({regY:-21.8,scaleY:1,skewX:6.8,y:43.4},0).wait(2).to({regX:22.1,skewX:7.4,x:-501.4},0).wait(14).to({regX:21.9,regY:-21.7,scaleY:1,rotation:5.4,skewX:0,skewY:0,x:-503,y:45.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:4,x:-504.1,y:47.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.4,x:-504.9,y:50.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:1,x:-510.2,y:56.4},0).wait(1).to({regX:21.8,rotation:2.8,x:-512.2,y:55},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,x:-514.1,y:53.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:12.3,x:-516,y:52.4},0).wait(1).to({regX:21.9,regY:-21.9,scaleX:1,scaleY:1,rotation:-31.6,x:-517.8,y:50.9,startPosition:0},0).wait(1).to({regY:-21.7,scaleX:1,scaleY:1.06,rotation:0,skewX:1.3,skewY:-3.2,x:-519.7,y:50.5,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:0,skewY:-1.3,x:-521.6,y:48.3},0).wait(2).to({scaleY:1,skewY:0,x:-521.1,y:49.7},0).wait(2));

	// MIX_propeller
	this.instance_2 = new lib.MIX_propeller("synched",0);
	this.instance_2.setTransform(-446.6,-62.8,1,1,0,0,0,1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regY:18.5,rotation:-1.6,x:-450.2,y:-58.9,startPosition:1},0).wait(1).to({regY:18.4,rotation:-3.1,x:-453.8,y:-53.4,startPosition:2},0).wait(1).to({regX:0.9,rotation:-4.1,x:-455.8,y:-50.4,startPosition:0},0).wait(2).to({rotation:-5.9,x:-460,y:-54.4,startPosition:2},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.1,x:-472.6,y:-73.7,startPosition:1},0).wait(1).to({regY:18.5,rotation:-9.3,x:-477.9,y:-80.2,startPosition:2},0).wait(1).to({x:-478.4,y:-81.3,startPosition:0},0).wait(2).to({x:-477.8,y:-79.6,startPosition:2},0).wait(1).to({x:-477.7,y:-79,startPosition:0},0).wait(5).to({regX:1,regY:18.4,rotation:-8.3,x:-473.4,y:-79.7,startPosition:2},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-459.4,y:-78.8,startPosition:1},0).wait(1).to({rotation:2.8,x:-423.9,y:-80.9,startPosition:2},0).wait(2).to({rotation:4.4,x:-416.1,y:-81.4,startPosition:1},0).wait(2).to({x:-417.3,y:-81.2,startPosition:0},0).wait(31).to({regX:1.1,rotation:3.1,x:-419.6,y:-78.1,startPosition:1},0).wait(2).to({rotation:1.1,x:-427,y:-78.2,startPosition:0},0).wait(1).to({regX:1,rotation:0.6,x:-430.3,y:-80,startPosition:1},0).wait(1).to({rotation:-0.3,x:-435.4,y:-84.6,startPosition:2},0).wait(1).to({regX:0.9,regY:18.3,rotation:-1.3,x:-438.4,y:-87.2,startPosition:0},0).wait(1).to({x:-439.3,y:-88.6,startPosition:1},0).wait(11).to({regX:1.1,regY:18.4,scaleX:1,scaleY:1,rotation:1.3,x:-429,y:-80.4,startPosition:0},0).wait(1).to({rotation:2.9,x:-423.1,y:-71.6,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-419.2,y:-65.8,startPosition:2},0).wait(1).to({x:-418.8,y:-63.4,startPosition:0},0).wait(1).to({x:-418.7,y:-62.5,startPosition:1},0).wait(21).to({rotation:5.9,x:-417.4,y:-58.4},0).wait(1).to({rotation:5.3,x:-419.5,y:-56.6,startPosition:2},0).wait(1).to({rotation:4.7,x:-421.6,y:-55,startPosition:0},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-430.1,y:-51.7,startPosition:2},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-432.9,y:-53.7,startPosition:0},0).wait(1).to({rotation:1.8,x:-435.7,y:-55.8,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:-438.5,y:-57.9,startPosition:2},0).wait(1).to({rotation:0.8,x:-441.3,y:-60,startPosition:0},0).wait(1).to({regX:1.2,scaleX:1,scaleY:1,rotation:0.3,x:-444.1,y:-62.1,startPosition:1},0).wait(1).to({regX:1,rotation:0,x:-447,y:-64.1,startPosition:2},0).wait(2).to({x:-446.5,y:-62.7,startPosition:1},0).wait(2));

	// MIX_34_bulb_R
	this.instance_3 = new lib.MIX_34_bulb_R("synched",0);
	this.instance_3.setTransform(-512.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-1.6,x:-515.4,y:-38.2},0).wait(1).to({rotation:-3.1,x:-518.5,y:-30.9},0).wait(1).to({rotation:-4.1,x:-520,y:-26.7},0).wait(2).to({rotation:-5.9,x:-523.5,y:-28.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.1,x:-534.9,y:-45.7},0).wait(1).to({rotation:-9.3,x:-539.5,y:-50.9},0).wait(1).to({x:-540,y:-52},0).wait(2).to({x:-539.4,y:-50.3},0).wait(1).to({x:-539.3,y:-49.7},0).wait(5).to({rotation:-8.3,x:-535.6,y:-51.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-523.4,y:-54.9},0).wait(1).to({rotation:2.8,x:-490.5,y:-65.4},0).wait(2).to({rotation:4.4,x:-483,y:-67.6},0).wait(2).to({x:-484.2,y:-67.4},0).wait(31).to({rotation:3.1,x:-486.3,y:-62.8},0).wait(2).to({rotation:1.1,x:-493.1,y:-60.5},0).wait(1).to({rotation:0.6,x:-496.2,y:-61.8},0).wait(1).to({rotation:-0.3,x:-501,y:-65.2},0).wait(1).to({rotation:-1.3,x:-503.6,y:-66.6},0).wait(1).to({x:-504.4,y:-68},0).wait(11).to({scaleX:1,scaleY:1,rotation:1.3,x:-494.9,y:-63.2},0).wait(1).to({rotation:2.9,x:-489.5,y:-56.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-486,y:-52.2},0).wait(1).to({x:-485.6,y:-49.8},0).wait(1).to({x:-485.5,y:-48.9},0).wait(21).to({rotation:5.9,x:-484.5,y:-46.6},0).wait(1).to({rotation:5.3,x:-486.5,y:-44.2},0).wait(1).to({rotation:4.7,x:-488.5,y:-41.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-496.7,y:-36.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-499.4,y:-38},0).wait(1).to({rotation:1.8,x:-502.1,y:-39.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:-504.8,y:-40.9},0).wait(1).to({rotation:0.8,x:-507.6,y:-42.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,x:-510.2,y:-43.9},0).wait(1).to({rotation:0,x:-512.9,y:-45.4},0).wait(2).to({x:-512.4,y:-43.9},0).wait(2));

	// MIX_34_Lashes_R
	this.instance_4 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_4.setTransform(-495.7,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-1.6,x:-497.7,y:-5.9},0).wait(1).to({rotation:-3.1,x:-500,y:0.7},0).wait(1).to({rotation:-4.1,x:-500.9,y:4.6},0).wait(2).to({rotation:-5.9,x:-503.4,y:1.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.1,x:-513.7,y:-15.7},0).wait(1).to({rotation:-9.3,x:-517.7,y:-21.3},0).wait(1).to({x:-518.2,y:-22.5},0).wait(2).to({x:-517.6,y:-20.7},0).wait(1).to({x:-517.5,y:-20.1},0).wait(5).to({rotation:-8.3,x:-514.3,y:-21.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-504.3,y:-23.6},0).wait(1).to({rotation:2.8,x:-475.5,y:-32},0).wait(2).to({rotation:4.4,x:-468.9,y:-33.8},0).wait(2).to({x:-470.1,y:-33.6},0).wait(31).to({rotation:3.1,x:-471.5,y:-29.3},0).wait(2).to({rotation:1.1,x:-477.1,y:-27.6},0).wait(1).to({rotation:0.6,x:-479.9,y:-29},0).wait(1).to({rotation:-0.3,x:-484.1,y:-32.7},0).wait(1).to({rotation:-1.3,x:-486.1,y:-34.4},0).wait(1).to({x:-487,y:-35.8},0).wait(11).to({scaleX:1,scaleY:1,rotation:1.3,x:-479.3,y:-30.2},0).wait(1).to({rotation:2.9,x:-474.8,y:-22.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-472.2,y:-18.4},0).wait(1).to({x:-471.8,y:-16},0).wait(1).to({x:-471.7,y:-15.1},0).wait(21).to({rotation:5.9,x:-471.6,y:-12.5},0).wait(1).to({rotation:5.3,x:-473.2,y:-10.1},0).wait(1).to({rotation:4.7,x:-474.8,y:-7.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-481.9,y:-2.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-484.3,y:-4.6},0).wait(1).to({rotation:1.8,x:-486.7,y:-6.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:-489,y:-7.7},0).wait(1).to({rotation:0.8,x:-491.4,y:-9.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,x:-493.8,y:-10.9},0).wait(1).to({rotation:0,x:-496.2,y:-12.5},0).wait(2).to({x:-495.6,y:-11.1},0).wait(2));

	// Layer 23
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAagHAQgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQAKgKAHgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgGgCgEgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape.setTransform(-371.3,-16.2,1,1,0,0,0,-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTB+QgEAAgBgGQgCgIAWgGQAZgIAQgRIAQgXQAMgPADgBQgFAXgIAQQgUAlgjAHIgQACIgDgBgAgqBTQgBgJANgHIAYgQQALgLAHgJIALgRQAEgGAGgcQAFgcgBgEIgCgHQAEAEAIAOQABAHgDAaQgDAYgCAEIgYAiQgZAggUAEIgDABQgIAAgCgIgAg5AZQgGgCgEgEQAlgUAQgxQAMgngGghIgBgEQAGAEADALQAEAKACALQAEAXgMAoQgSAvggAGIgBAAIgEgBg");
	this.shape_1.setTransform(-373.5,-14.8,1,1,0,0,0,-0.4,-0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgRB+QgEAAgBgGQgCgIAVgHQAbgIAPgSIAOgYQAMgPADgBQgEAXgHARQgTAlglAHQgMAEgEAAIgCgBgAgoBTQgCgIANgJIAYgQQAKgLAHgJIAKgRQAEgHAFgcQAFgcgBgEIgCgGQAFAEAGANQACAHgDAaQgBAYgCAEIgXAiQgYAigVAEIgDABQgIAAgBgIgAg5AaQgGgCgEgDQAkgVAOgyQAMgogHggIgBgEQAGADAFALQACAKADAKQAEAYgLApQgQAvggAHIgBAAIgEgBg");
	this.shape_2.setTransform(-376.2,-11.2,1,1,0,0,0,-0.5,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgPB+QgEAAgBgGQgCgIAVgGQAagKAPgSIAOgXIAOgSQgDAYgIARQgRAlglAIQgMAEgFAAIgBgBgAgnBUQgCgIANgJIAXgRQAKgLAHgKIAKgRQAEgGAEgdQAEgcgBgEIgCgGQAFAEAHANQACAHgCAaQgCAYgCAFIgWAiQgXAigVAEIgEABQgGAAgCgHgAg5AbQgGgCgEgEQAkgVAMgyQAMgogIggIgBgEQAGADAGAMQAEAJAAALQAFAXgJApQgQAvggAHIgBABIgEgBg");
	this.shape_3.setTransform(-377.4,-9.6,1,1,0,0,0,-0.6,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgMB+QgEAAgBgGQgCgHATgIQAagKAPgTQADgIALgQQALgQACgBQgCAXgHASQgRAlgkAKQgMAEgFAAIgBgBgAgmBVQgCgJANgJIAWgRQAKgLAGgKIAKgSQAEgHADgcQAEgcgBgEIgDgHQAFAEAHANQACAHgBAaQgBAYgCAFIgUAjQgXAigUAGIgEABQgHAAgCgHgAg6AcQgFgCgEgDQAigXAMgyQAJgogIggIgBgEQAGADAGALQAEAKADAKQAEAYgJAoQgNAwggAIIgCABIgEgBg");
	this.shape_4.setTransform(-380.2,-16.1,1,1,0,0,0,-0.6,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOB4QgCgIASgIQAbgLAOgTQADgIAKgRQAKgQADgCQgCAYgHASQgPAmgkAKQgNAFgEAAQgEAAgCgGgAgjBWQgDgJAMgKIAXgSQAJgLAFgKIAKgSQADgHADgcQACgdgCgEIgCgHQAEAEAJANQACAHAAAaQAAAYgCAEIgTAkQgVAkgUAGIgGABQgGAAgBgGgAg5AeQgGgCgFgDQAigZAKgyQAIgogJggIgCgDQAHACAGALQAFAJADAKQAGAYgJApQgMAwgfAKIgCAAIgDAAg");
	this.shape_5.setTransform(-391.5,-38.5,1,1,0,0,0,-0.8,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgGB+QgEAAgCgGQgDgHATgJQAbgMAMgUIANgYQAKgRADgBQgCAXgGASQgOAngkALQgMAFgEAAIgBAAgAgiBWQgCgIALgKIAWgTQAIgMAHgKIAIgSQADgHABgdQACgcgBgEIgCgGQAEADAJANQACAHABAaQABAYgCAEIgTAlQgUAkgUAGIgGABQgFAAgCgGgAg5AfQgHgCgDgCQAggbAJgxQAIgpgKgfIgCgEQAGACAGALQAGAKACAKQAIAXgIApQgLAxgfAKIgCAAIgDAAg");
	this.shape_6.setTransform(-396,-46.9,1,1,0,0,0,-0.8,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgGB+QgEAAgCgGQgDgHASgJQAcgMANgUIAMgYQAKgRACgBQgBAXgGASQgOAngkALQgMAFgEAAIgBAAgAgiBWQgDgIAMgKIAVgTQAKgMAFgKIAJgSQAEgHAAgdQADgcgBgEIgEgGQAFADAJANQACAHAAAaQACAYgCAEIgTAlQgUAkgUAGIgGABQgFAAgCgGgAg6AfQgFgCgFgCQAhgbAKgxQAGgpgKgfIgBgEQAGACAHALQAEAKADAKQAIAXgIApQgLAxgfAKIgCAAIgEAAg");
	this.shape_7.setTransform(-396.5,-48,1,1,0,0,0,-0.8,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgGB+QgFAAgBgGQgDgHATgJQAagMANgUIANgYQAKgRACgBQgBAXgGASQgOAngkALQgMAFgEAAIgBAAgAgiBWQgCgIALgKIAWgTQAIgMAHgKIAIgSQADgHABgdQACgcgBgEIgCgGQAEADAJANQACAHABAaQAAAYgBAEIgTAlQgUAkgUAGIgGABQgFAAgCgGgAg5AfQgHgCgDgCQAggbAJgxQAIgpgLgfIgBgEQAGACAGALQAGAKACAKQAIAXgIApQgLAxgfAKIgCAAIgDAAg");
	this.shape_8.setTransform(-396,-46.3,1,1,0,0,0,-0.9,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgGB+QgEAAgCgGQgDgHATgJQAagMANgUIANgYQAKgRACgBQgBAXgGASQgOAngkALQgMAFgEAAIgBAAgAgiBWQgDgIAMgKIAWgTQAIgMAHgKIAIgSQADgHABgdQACgcgBgEIgDgGQAFADAJANQACAHABAaQAAAYgBAEIgTAlQgUAkgUAGIgGABQgFAAgCgGgAg5AfQgHgCgDgCQAggbAJgxQAIgpgLgfIgBgEQAGACAGALQAGAKACAKQAIAXgIApQgLAxgfAKIgCAAIgDAAg");
	this.shape_9.setTransform(-395.9,-45.7,1,1,0,0,0,-0.9,-0.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgHB+QgFAAgCgGQgCgIATgIQAbgLANgUQADgHAKgRIAMgSQgBAYgGARQgQAngjALQgMAEgEAAIgBAAgAgiBWQgDgIAMgLIAVgRQAKgMAFgLIAJgRQAEgHACgdQACgcAAgEIgDgGQAEADAIANQACAHABAaQAAAYgCAEIgTAkQgUAkgVAGIgFABQgGAAgBgGgAg5AeQgGgCgFgDQAigZAKgxQAIgpgKgfIgBgEQAGACAGALQAFAKAEAKQAGAXgJApQgMAxgeAJIgGAAg");
	this.shape_10.setTransform(-392.2,-44.9,1,1,0,0,0,-0.6,-0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUB4QgBgIAUgGQAagKAPgSIAOgYIAOgRQgDAXgHASQgTAlgkAIIgRADQgEAAgCgGgAgnBUQgCgJANgIIAXgQQAKgMAGgKIALgRQAEgGAEgdQAEgcAAgDIgDgHQAFADAHAOQACAIgCAZQgCAYgCAEIgWAjQgXAigUAEIgEABQgHAAgCgHgAg5AbQgGgCgEgDQAkgWANgyQAKgogHggIgCgEQAGADAGAMQAEAJABALQAFAXgKApQgPAwggAGIgBABIgEgBg");
	this.shape_11.setTransform(-380.9,-38.5,1,1,0,0,0,-0.4,0);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgbB9QgEgBgBgGQAAgHAVgFQAbgFARgRIARgVQAOgOADgBQgHAXgKAQQgWAigjAEIgPABIgFgBgAguBRQgBgJAOgIIAZgNQALgJAIgJIANgQQAFgGAIgbQAHgbAAgEIgCgHQAEAEAGAOQABAIgGAZQgEAXgDAFIgaAfQgbAegVACIgCAAQgJAAgBgHgAg5AVIgJgGQAmgRAUgvQAOgngEghIAAgEQAFAEAEAMQADAKABALQACAYgRAmQgTAuggADIgGgCg");
	this.shape_12.setTransform(-351.4,-31,1,1,0,0,0,-0.3,0);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgdB9QgEgBgBgGQAAgIAVgEQAbgFASgQIASgUIAQgPQgHAXgKAPQgYAjgiACIgLAAIgJAAgAgvBQQAAgJANgHIAagMQALgKAIgIIANgQQAGgGAIgbQAIgbAAgEQgCgFABgCQAEAFAFAOQAAAHgFAZQgGAYgDAEIgbAfQgcAdgUACIgCAAQgKAAAAgIgAg4AUQgFgCgEgEQAngQAUgvQAPgmgCghIAAgEQAFADADANQADAKABALQACAYgTAmQgUAtghACIgBAAIgEgCg");
	this.shape_13.setTransform(-344.9,-29.5,1,1,0,0,0,-0.2,0);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgdB9QgEgBAAgGQgBgIAVgEQAbgFASgQIASgUIAQgPQgHAXgKAPQgXAjgkACIgKAAIgJAAgAgvBQQAAgJAOgHIAYgMQAMgKAJgIIAMgQQAGgGAIgbQAJgbAAgEQgCgFAAgCQADAFAGAOQAAAHgFAZQgGAYgDAEIgbAfQgbAdgWACIgBAAQgKAAAAgIgAg4AUQgGgCgDgEQAngQAVgvQAOgmgDghIAAgEQAGADADANQADAKABALQABAYgRAmQgVAtghACIgBAAIgEgCg");
	this.shape_14.setTransform(-346,-29.3,1,1,0,0,0,-0.1,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbB9QgEgBAAgGQgCgHAWgFQAagGASgQIASgVIAQgPQgHAWgKARQgWAigkADIgQACIgDgBgAguBQQAAgJANgHIAZgNQAMgJAIgJIAMgQQAFgGAHgbQAJgcgBgDQgBgFAAgCQADAEAGAOQAAAHgEAaQgFAXgDAEIgaAgQgcAegUACIgCAAQgJAAgBgIgAg4AVQgGgDgDgDQAmgRATgwQAOgmgDghIAAgEQAFAEAEAMQADAKABAKQACAZgSAmQgTAuggACIgBABIgEgCg");
	this.shape_15.setTransform(-347.4,-27.8,1,1,0,0,0,-0.3,0);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYB+QgEgBgBgGQgBgIAVgFQAbgHAQgQQAFgIAMgOQANgPADgBQgFAXgKAQQgVAkgjAEIgSACIgCAAgAgsBSQgBgJANgIIAZgOQAKgKAJgJIALgQQAFgGAHgcQAGgbAAgEQgBgFAAgCQAEAEAGAOQABAHgEAaQgFAXgCAEIgZAhQgaAfgVADIgDAAQgIAAgBgHgAg5AXQgFgDgEgEQAlgSASgwQANgngDggIAAgEQADADAEAMQAFAKABALQADAYgPAnQgTAuggAEIgGgBg");
	this.shape_16.setTransform(-353,-30.4,1,1,0,0,0,-0.4,0);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgXB9QgEAAgBgGQgBgIAVgFQAbgHAQgRIARgWIAPgQQgFAXgKAQQgUAkgjAFIgPACIgFgBgAgsBRQgBgIAOgIIAYgOQALgKAIgKIALgPQAFgHAGgcQAIgbgBgEIgCgHQAEAEAGAOQABAIgDAZQgFAYgCAEIgZAgQgaAggUACIgEABQgIAAgBgIgAg5AXQgFgCgEgEQAlgTASgwQAMgngDggIgBgEQAEADAFAMQADAKACAKQADAYgOAoQgSAughAEIgBAAIgFgBg");
	this.shape_17.setTransform(-355.8,-32.9,1,1,0,0,0,-0.4,0);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgVB+QgEgBgBgGQgCgHAWgGQAagIAQgRIARgWIAOgQQgEAXgJAQQgVAkgjAGIgSACIgBAAgAgrBSQgBgIANgIIAYgPQALgLAHgJIAMgQQAFgGAFgcQAHgcgBgEIgCgHQAFAFAGANQABAIgDAZQgEAYgCAEIgYAhQgaAggUADIgDABQgIAAgCgIgAg5AYQgFgCgEgEQAlgTAQgxQANgngEggIgBgEQAFADADAMQAEAKACAKQADAYgNAnQgSAvghAFIgFgBg");
	this.shape_18.setTransform(-360,-38.8,1,1,0,0,0,-0.4,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgTB+QgFgBgBgGQgBgIAVgFQAagIAQgSIAQgXQAMgOADgBQgFAWgIARQgUAkgjAGIgSADIgBAAgAgqBTQgBgJANgIIAYgQQALgKAHgJIALgRQAEgHAGgbQAFgcAAgEIgCgHQAEAEAHAOQABAIgDAZQgDAYgCAEIgXAhQgaAhgUADIgEABQgIAAgBgHgAg5AZQgFgCgFgEQAlgUAQgxQANgngGghIgBgDQAGACACAMQAFAKABAKQAFAYgNAoQgRAvghAFIgBABIgEgBg");
	this.shape_19.setTransform(-362.2,-42.8,1,1,0,0,0,-0.4,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgZB9QgEAAAAgGQgBgIAVgFQAbgGAQgRQAFgHAMgPQANgOADgBQgGAWgJAQQgVAkgkAEIgPACIgFgBgAgtBRQAAgIANgIIAYgOQAMgKAHgJIANgQQAEgGAHgcQAHgbAAgEIgCgHQAEAEAGAOQABAIgFAZQgEAYgCAEIgZAgQgbAfgVACIgDABQgIAAgBgIgAg4AXQgGgDgEgEQAlgSATgvQAMgngCghIAAgEQADADAEAMQAEALACAKQACAYgPAnQgTAughAEIgEgBg");
	this.shape_20.setTransform(-355.2,-32.5,1,1,0,0,0,-0.4,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgaB9QgEgBgBgGQgBgHAWgFQAagGARgQIASgVQANgOACgBQgGAWgJARQgXAigjADIgRABIgCAAgAgtBQQgBgIANgIIAZgNQAMgJAHgJIANgQQAFgGAIgcQAHgbAAgEIgBgGQADAEAHAOQAAAIgFAZQgFAXgCAEIgaAgQgbAegWACIgCAAQgJAAAAgIgAg4AWQgFgDgEgEQAmgRATgwQAOgmgDggIgBgEQAFADAEAMQAEAKABALQACAYgRAmQgUAuggADIgFgBg");
	this.shape_21.setTransform(-350.7,-21.7,1,1,0,0,0,-0.3,0);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgdB8QgEAAAAgGQgBgIAVgEQAbgFARgPQAGgHAMgOQAPgOACgBQgHAWgLAQQgWAigjADIgLAAIgJgBgAgvBPQgBgIAOgHIAagNQAMgJAHgJIAOgPQAEgGAJgbQAIgbAAgEIgBgHQAEAFAFAOQABAIgHAZQgFAXgDAEIgaAfQgcAdgVABIgBAAQgKAAgBgIgAg4AUQgFgCgEgFQAngPAUgvQAPgmgCghIgBgEQAFADAFANQACAKABALQABAYgSAmQgUAsghACIAAAAIgFgBg");
	this.shape_22.setTransform(-348.2,-14.1,1,1,0,0,0,-0.3,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgdB8QgFAAAAgGQAAgIAVgEQAbgFASgPQAEgHAOgOQAOgOACgBQgHAWgKAQQgXAigkADIgKAAIgJgBgAgvBPQgBgIAOgHIAagNQAMgJAIgJIAMgPQAFgGAJgbQAJgbgBgEIgCgHQAFAFAFAOQAAAIgFAZQgGAXgCAEIgbAfQgdAdgUABIgBAAQgKAAgBgIgAg4AUQgFgCgEgFQAmgPAVgvQAPgmgCghIgBgEQAGADADANQADAKAAALQACAYgRAmQgVAsghACIAAAAIgFgBg");
	this.shape_23.setTransform(-347.8,-11.7,1,1,0,0,0,-0.3,0);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgdB8QgEAAgBgGQAAgIAVgEQAbgFARgPQAFgHANgOQAOgOADgBQgHAWgLAQQgWAigjADIgLAAIgJgBgAgvBPQgBgIAOgHIAagNQAMgJAHgJIAOgPQAEgGAJgbQAIgbAAgEIgBgHQADAFAGAOQAAAIgGAZQgFAXgDAEIgaAfQgcAdgVABIgBAAQgKAAgBgIgAg4AUQgFgCgEgFQAmgPAVgvQAPgmgCghIgBgEQAGADAEANQACAKAAALQADAYgTAmQgUAsghACIAAAAIgFgBg");
	this.shape_24.setTransform(-347.7,-10.8,1,1,0,0,0,-0.3,0);

	this.instance_5 = new lib.Tween5("synched",0);
	this.instance_5.setTransform(-347.6,-4.9);

	this.instance_6 = new lib.Tween4("synched",0);
	this.instance_6.setTransform(-371.6,-17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},5).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},2).to({state:[{t:this.shape_15}]},31).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19,p:{x:-362.2,y:-42.8}}]},1).to({state:[{t:this.shape_19,p:{x:-363,y:-44.2}}]},1).to({state:[{t:this.shape_20}]},11).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.instance_5,p:{x:-347.6,y:-4.9}}]},21).to({state:[{t:this.instance_5,p:{x:-349.1,y:-4}}]},1).to({state:[{t:this.instance_5,p:{x:-350.6,y:-3}}]},1).to({state:[{t:this.instance_5,p:{x:-357.5,y:-1.7}}]},2).to({state:[{t:this.instance_5,p:{x:-359.9,y:-4.4}}]},1).to({state:[{t:this.instance_5,p:{x:-362.2,y:-7}}]},1).to({state:[{t:this.instance_5,p:{x:-364.5,y:-9.7}}]},1).to({state:[{t:this.instance_5,p:{x:-366.9,y:-12.4}}]},1).to({state:[{t:this.instance_5,p:{x:-369.2,y:-15}}]},1).to({state:[{t:this.instance_6,p:{x:-371.6,y:-17.7}}]},1).to({state:[{t:this.instance_6,p:{x:-371,y:-16.2}}]},2).wait(2));

	// MIX_34_head
	this.instance_7 = new lib.MIX_34_head("synched",0);
	this.instance_7.setTransform(-448.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({rotation:-1.6,x:-449.8,y:3.7},0).wait(1).to({rotation:-3.1,x:-451.8,y:9.2},0).wait(1).to({rotation:-4.1,x:-452.6,y:12.2},0).wait(2).to({rotation:-5.9,x:-454.8,y:8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.1,x:-465,y:-11.4},0).wait(1).to({rotation:-9.3,x:-469,y:-18.2},0).wait(1).to({x:-469.5,y:-19.3},0).wait(2).to({x:-468.9,y:-17.6},0).wait(1).to({x:-468.8,y:-17},0).wait(5).to({rotation:-8.3,x:-465.6,y:-17.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-456,y:-16.2},0).wait(1).to({rotation:2.8,x:-428.5,y:-18.5},0).wait(2).to({rotation:4.4,x:-422.3,y:-19},0).wait(2).to({x:-423.5,y:-18.8},0).wait(31).to({rotation:3.1,x:-424.5,y:-15.6},0).wait(2).to({rotation:1.1,x:-429.7},0).wait(1).to({rotation:0.6,x:-432.4,y:-17.4},0).wait(1).to({rotation:-0.3,x:-436.4,y:-22},0).wait(1).to({rotation:-1.3,x:-438.2,y:-24.5},0).wait(1).to({x:-439.1,y:-25.9},0).wait(11).to({scaleX:1,scaleY:1,rotation:1.3,x:-432,y:-18},0).wait(1).to({rotation:2.9,x:-427.8,y:-9.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-425.6,y:-3.7},0).wait(1).to({x:-425.2,y:-1.3},0).wait(1).to({x:-425,y:-0.4},0).wait(21).to({rotation:5.9,x:-425.4,y:3.3},0).wait(1).to({rotation:5.3,x:-426.7,y:5.1},0).wait(1).to({rotation:4.7,x:-428.2,y:6.9},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-434.9,y:10.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-437.2,y:8.5},0).wait(1).to({rotation:1.8,x:-439.4,y:6.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:-441.7,y:4.5},0).wait(1).to({rotation:0.8,x:-444,y:2.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,x:-446.3,y:0.5},0).wait(1).to({rotation:0,x:-448.6,y:-1.3},0).wait(2).to({x:-448,y:0},0).wait(2));

	// MIX_34_bulbL
	this.instance_8 = new lib.MIX_34_bulbL("synched",0);
	this.instance_8.setTransform(-400.2,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({rotation:-1.6,x:-403.4,y:-47.1},0).wait(1).to({rotation:-3.1,x:-406.8,y:-42.8},0).wait(1).to({rotation:-4.1,x:-408.5,y:-40.7},0).wait(2).to({rotation:-5.9,x:-412.5,y:-46.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.1,x:-424.7,y:-67.3},0).wait(1).to({rotation:-9.3,x:-429.9,y:-75},0).wait(1).to({x:-430.4,y:-76.1},0).wait(2).to({x:-429.8,y:-74.4},0).wait(1).to({x:-429.7,y:-73.8},0).wait(5).to({rotation:-8.3,x:-425.6,y:-73.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-412.2,y:-69.3},0).wait(1).to({rotation:2.8,x:-378.4,y:-65.4},0).wait(2).to({rotation:4.4,x:-370.9,y:-64.7},0).wait(2).to({x:-372.1,y:-64.5},0).wait(31).to({rotation:3.1,x:-374.2,y:-62.4},0).wait(2).to({rotation:1.1,x:-381.1,y:-64.1},0).wait(1).to({rotation:0.6,x:-384.2,y:-66.3},0).wait(1).to({rotation:-0.3,x:-389.1,y:-71.7},0).wait(1).to({rotation:-1.3,x:-391.8,y:-75.1},0).wait(1).to({x:-392.7,y:-76.5},0).wait(11).to({scaleX:1,scaleY:1,rotation:1.3,x:-383.1,y:-66.2},0).wait(1).to({rotation:2.9,x:-377.6,y:-56.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-374.2,y:-49.1},0).wait(1).to({x:-373.8,y:-46.7},0).wait(1).to({x:-373.6,y:-45.8},0).wait(21).to({rotation:5.9,x:-372.8,y:-40.5},0).wait(1).to({rotation:5.3,x:-374.7,y:-39.3},0).wait(1).to({rotation:4.7,x:-376.7,y:-38.1},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-384.7,y:-36.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-387.4,y:-38.6},0).wait(1).to({rotation:1.8,x:-390,y:-41},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:-392.7,y:-43.4},0).wait(1).to({rotation:0.8,x:-395.4,y:-45.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,x:-398,y:-48.4},0).wait(1).to({rotation:0,x:-400.7,y:-50.9},0).wait(2).to({x:-400.1,y:-49.4},0).wait(2));

	// MIX_34_arm_L
	this.instance_9 = new lib.MIX_34_arm_L("single",1);
	this.instance_9.setTransform(-369.9,39.4,1,1,0,0,0,-18.9,-18.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(47,50,59,0.314)").s().p("AgMAAQAAgMAMAAQANABAAALQAAANgNAAQgNAAABgNg");
	this.shape_25.setTransform(-326,34);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s().p("AgOAJQAAgSAUAAIAJABIAAAAIAAABIAAgBQgNACgKAJIgGAHIAAgBg");
	this.shape_26.setTransform(-370.9,65.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.9,scaleX:1,skewX:0,skewY:0,x:-369.9,y:39.4,rotation:0,startPosition:1,scaleY:1}}]}).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:1.008,skewX:-1.7,skewY:-9,x:-370.6,y:40.8,rotation:0,startPosition:1,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.9,scaleX:1,skewX:0,skewY:0,x:-371.6,y:44.2,rotation:-3.2,startPosition:22,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:1.001,skewX:-9,skewY:-11.7,x:-371.8,y:45.7,rotation:0,startPosition:22,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.9,scaleX:1,skewX:-2.2,skewY:-0.6,x:-373,y:38.9,rotation:0,startPosition:22,scaleY:0.999}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-19,scaleX:0.999,skewX:0,skewY:0,x:-378,y:17,rotation:-11.4,startPosition:27,scaleY:0.999}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:0.999,skewX:0,skewY:0,x:-385.4,y:7.7,rotation:-9.4,startPosition:23,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.7,regY:-18.8,scaleX:0.999,skewX:-8.6,skewY:-8.4,x:-385.9,y:6.4,rotation:0,startPosition:23,scaleY:1.019}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:0.999,skewX:0,skewY:0,x:-385.3,y:8.3,rotation:-9.4,startPosition:23,scaleY:0.999}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:0.999,skewX:0,skewY:0,x:-385.2,y:8.9,rotation:-9.4,startPosition:23,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.9,scaleX:0.999,skewX:-4.4,skewY:-5.7,x:-382.7,y:9.8,rotation:0,startPosition:23,scaleY:0.999}}]},5).to({state:[{t:this.shape_25},{t:this.instance_9,p:{regX:-18.8,regY:-18.9,scaleX:0.998,skewX:0,skewY:0,x:-375.2,y:16.8,rotation:-4.4,startPosition:28,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:1.265,skewX:-22.4,skewY:-42.3,x:-352.1,y:28.5,rotation:0,startPosition:28,scaleY:1.094}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-347.6,y:26.1,rotation:0.5,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.6,y:25.9,rotation:0.6,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:26.3,rotation:4.4,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-348.9,y:27.8,rotation:4.6,startPosition:24,scaleY:0.998}}]},3).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-352.4,y:28,rotation:5.3,startPosition:24,scaleY:0.998}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:1.033,skewX:0.6,skewY:-1.6,x:-355.9,y:25.5,rotation:0,startPosition:29,scaleY:0.998}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.998,skewX:0,skewY:0,x:-358.3,y:16.7,rotation:3.1,startPosition:25,scaleY:0.998}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.997,skewX:0,skewY:0,x:-359.2,y:14.2,rotation:1.5,startPosition:25,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.997,skewX:0,skewY:0,x:-360.1,y:12.8,rotation:2.3,startPosition:25,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:-26.7,regY:-49.6,scaleX:0.862,skewX:1.3,skewY:15.5,x:-363.9,y:-8.3,rotation:0,startPosition:25,scaleY:1.6}}]},11).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.997,skewX:0,skewY:0,x:-352.2,y:33.8,rotation:2.9,startPosition:30,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.7,scaleX:0.893,skewX:4.9,skewY:-3.8,x:-351.4,y:57.1,rotation:0,startPosition:31,scaleY:1.195}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.8,scaleX:0.996,skewX:0,skewY:0,x:-350.7,y:43.9,rotation:-1.3,startPosition:26,scaleY:0.996}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.995,skewX:0,skewY:0,x:-350.6,y:44.8,rotation:-0.2,startPosition:26,scaleY:0.995}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.8,scaleX:0.995,skewX:-1.6,skewY:-0.2,x:-350.6,y:44.8,rotation:0,startPosition:26,scaleY:0.996}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.8,scaleX:0.995,skewX:-2.5,skewY:-0.2,x:-350.5,y:44.8,rotation:0,startPosition:26,scaleY:0.996}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:0.995,skewX:-1.6,skewY:-0.2,x:-350.4,y:44.8,rotation:0,startPosition:26,scaleY:0.996}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.8,regY:-18.8,scaleX:0.995,skewX:-2,skewY:-0.2,x:-350.4,y:44.8,rotation:0,startPosition:26,scaleY:0.996}}]},2).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.8,scaleX:0.996,skewX:0,skewY:0,x:-352.2,y:50.6,rotation:-3.8,startPosition:26,scaleY:0.996}}]},14).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.7,scaleX:0.995,skewX:0,skewY:0,x:-353.1,y:51.7,rotation:-4.7,startPosition:26,scaleY:0.995}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.7,scaleX:0.996,skewX:0,skewY:0,x:-354.1,y:52.6,rotation:-5.5,startPosition:26,scaleY:0.996}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.6,scaleX:0.997,skewX:-8.4,skewY:-5.1,x:-359.3,y:54.1,rotation:0,startPosition:26,scaleY:1.004}}]},2).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.7,scaleX:0.997,skewX:0,skewY:0,x:-361.1,y:51.3,rotation:-5.2,startPosition:26,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.7,scaleX:0.996,skewX:0,skewY:0,x:-359.7,y:62.8,rotation:44.4,startPosition:34,scaleY:0.996}}]},1).to({state:[{t:this.shape_26},{t:this.instance_9,p:{regX:-19,regY:-18.7,scaleX:0.997,skewX:0,skewY:0,x:-364.1,y:54.2,rotation:22.8,startPosition:34,scaleY:0.997}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.7,scaleX:0.999,skewX:0,skewY:0,x:-366.3,y:47.4,rotation:15.8,startPosition:1,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:-19,regY:-18.7,scaleX:0.999,skewX:0,skewY:0,x:-368.5,y:42.7,rotation:4.4,startPosition:1,scaleY:0.999}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.9,scaleX:1,skewX:0,skewY:0,x:-370.5,y:37.9,rotation:0,startPosition:1,scaleY:1}}]},1).to({state:[{t:this.instance_9,p:{regX:-18.9,regY:-18.9,scaleX:1,skewX:0,skewY:0,x:-369.9,y:39.4,rotation:0,startPosition:1,scaleY:1}}]},2).wait(2));

	// MIX_34_handle
	this.instance_10 = new lib.MIX_34_handle("synched",0);
	this.instance_10.setTransform(-526.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:-1.6,x:-528.2,y:4.1},0).wait(1).to({rotation:-3.1,x:-530.2,y:11.6},0).wait(1).to({rotation:-4.1,x:-531,y:16},0).wait(2).to({rotation:-5.9,x:-533.1,y:14.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:-8.1,x:-542.9,y:-2.2},0).wait(1).to({rotation:-9.3,x:-546.6,y:-7.2},0).wait(1).to({x:-547.1,y:-8.3},0).wait(2).to({x:-546.5,y:-6.6},0).wait(1).to({x:-546.4,y:-6},0).wait(5).to({rotation:-8.3,x:-543.4,y:-7.8},0).wait(2).to({scaleX:1,scaleY:1,rotation:-4.3,x:-534.3,y:-12},0).wait(1).to({rotation:2.8,x:-506.6,y:-24.4},0).wait(2).to({rotation:4.4,x:-500.2,y:-27},0).wait(2).to({x:-501.4,y:-26.8},0).wait(31).to({rotation:3.1,x:-502.6,y:-21.8},0).wait(2).to({rotation:1.1,x:-508,y:-19},0).wait(1).to({rotation:0.6,x:-510.6,y:-20.2},0).wait(1).to({rotation:-0.3,x:-514.6,y:-23.3},0).wait(1).to({rotation:-1.3,x:-516.5,y:-24.5},0).wait(1).to({x:-517.3,y:-25.9},0).wait(11).to({scaleX:1,scaleY:1,rotation:1.3,x:-510.1,y:-21.8},0).wait(1).to({rotation:2.9,x:-505.8,y:-15.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.4,x:-503.3,y:-11.6},0).wait(1).to({x:-502.9,y:-9.2},0).wait(1).to({x:-502.8,y:-8.3},0).wait(21).to({rotation:5.9,x:-502.9,y:-6.5},0).wait(1).to({rotation:5.3,x:-504.4,y:-3.9},0).wait(1).to({rotation:4.7,x:-505.9,y:-1.2},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.8,x:-512.9,y:4.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.3,x:-515.3,y:3.1},0).wait(1).to({rotation:1.8,x:-517.6,y:1.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:1.3,x:-520,y:0.5},0).wait(1).to({rotation:0.8,x:-522.4,y:-0.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:0.3,x:-524.6,y:-2},0).wait(1).to({rotation:0,x:-527,y:-3.4},0).wait(2).to({x:-526.5,y:-1.9},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-572.1,-131.6,260.1,255.5);


(lib.MasterclipBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// MIX_34_handR
	this.instance = new lib.MIX_34_armR("single",13);
	this.instance.setTransform(-362.5,32.4,0.998,0.998,0,-5.8,174.1,21.9,-21.7);

	this.instance_1 = new lib.MIX_propeller("synched",0);
	this.instance_1.setTransform(-458.3,-43.7,0.999,0.999,-7.2,0,0,1.1,18.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regY:-21.7,skewX:-5.8,skewY:174.1,x:-362.5,y:32.4}}]},81).to({state:[{t:this.instance,p:{regY:-21.8,skewX:-1.2,skewY:178.7,x:-365.3,y:45}}]},1).to({state:[{t:this.instance_1,p:{regX:1.1,scaleX:0.999,scaleY:0.999,rotation:-7.2,x:-458.3,y:-43.7,startPosition:0}}]},2).to({state:[{t:this.instance_1,p:{regX:1,scaleX:1,scaleY:1,rotation:-4,x:-457.2,y:-40.4,startPosition:2}}]},2).to({state:[]},1).wait(58));

	// Headclip
	this.instance_2 = new lib.HeadclipGetBack("synched",0);
	this.instance_2.setTransform(-442.7,14.2,1,1,0,0,0,-442.7,14.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:-442.8,rotation:2,x:-442.3,y:21,startPosition:1},0).wait(1).to({x:-442.1,y:22.2,startPosition:2},0).wait(2).to({regX:-442.6,rotation:3.8,x:-436.7,y:21.8,startPosition:4},0).wait(1).to({rotation:0,skewX:1.5,skewY:-178.3,x:-445.1,y:-1.8,startPosition:5},0).wait(1).to({regX:-442.5,skewX:3.3,skewY:-176.5,x:-443.3,y:-11.5,startPosition:6},0).wait(1).to({regX:-442.6,scaleX:1,scaleY:1,skewX:4.5,skewY:-175.3,x:-442.4,y:-17.7,startPosition:7},0).wait(2).to({x:-442.1,y:-15.6,startPosition:9},0).wait(1).to({x:-441.9,y:-14.7,startPosition:10},0).wait(25).to({skewX:2.5,skewY:-177.3,x:-441.4,y:-11.8,startPosition:35},0).wait(1).to({skewX:-1.8,skewY:-181.9,x:-443,y:-4.1,startPosition:36},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5.3,skewY:-185.4,x:-444.3,y:1.9,startPosition:37},0).wait(1).to({regX:-442.5,skewX:-7.8,skewY:-187.9,x:-445.3,y:6.3,startPosition:38},0).wait(1).to({regX:-442.6,skewX:-9.3,skewY:-189.4,x:-445.7,y:8.8,startPosition:39},0).wait(1).to({skewX:-9.9,skewY:-190,x:-445.8,y:9.7,startPosition:40},0).wait(2).to({regX:-442.4,scaleX:1,scaleY:1,skewX:-11.2,skewY:-191.3,x:-447.4,y:9,startPosition:42},0).wait(2).to({x:-447.6,y:7.8,startPosition:44},0).wait(37).to({regX:-442.5,regY:14.3,scaleX:1,scaleY:1,skewX:-10.2,skewY:-190.3,x:-445.9,y:11.6,startPosition:81},0).wait(1).to({regY:14.2,skewX:-8.7,skewY:-188.8,x:-446.4,y:21.5,startPosition:82},0).wait(2).to({regX:-442.6,regY:14.3,scaleX:1,scaleY:1,rotation:-7.1,skewX:0,skewY:-359.9,x:-446.2,y:31.7,startPosition:84},0).wait(2).to({regY:14.2,scaleX:1,scaleY:1,rotation:-3.9,x:-449.4,y:35.4,startPosition:86},0).wait(1).to({regX:-442.5,scaleX:1,scaleY:1,rotation:-3.2,x:-459,y:36.4,startPosition:87},0).wait(1).to({regY:14.3,rotation:-10.2,x:-465.2,y:20.4,startPosition:88},0).wait(1).to({regX:-442.6,regY:14.2,rotation:-11.8,x:-468.3,y:17,startPosition:89},0).wait(1).to({regX:-442.5,regY:14.3,rotation:-13.1,x:-470.7,y:12.4,startPosition:90},0).wait(1).to({x:-472,y:10.5,startPosition:91},0).wait(1).to({regX:-442.6,regY:14.2,scaleX:1,scaleY:1,rotation:-12.9,startPosition:92},0).wait(1).to({rotation:-12.6,x:-471.7,y:10.9,startPosition:93},0).wait(1).to({regX:-442.5,regY:14.3,scaleX:1,scaleY:1,rotation:-12.2,x:-471.4,y:11.5,startPosition:94},0).wait(17).to({regX:-442.6,rotation:-11,x:-469.2,y:14.1,startPosition:111},0).wait(1).to({regX:-442.5,regY:14.2,rotation:-9.7,x:-466.1,y:17.8,startPosition:112},0).wait(1).to({regX:-442.6,rotation:-4.4,x:-458.4,y:22.7,startPosition:113},0).wait(2).to({rotation:-2.2,x:-452.6,y:22.5,startPosition:115},0).wait(2).to({scaleX:1,scaleY:1,rotation:-1.1,x:-449.8,y:21.6,startPosition:117},0).wait(1).to({regX:-442.5,scaleX:1,scaleY:1,rotation:-0.3,x:-445.5,y:20.5,startPosition:118},0).wait(1).to({regX:-442.6,scaleX:1,scaleY:1,rotation:0,x:-443.5,y:16,startPosition:119},0).wait(2).to({x:-443,y:11.5,startPosition:121},0).wait(2).to({x:-442.8,y:12.7,startPosition:123},0).wait(2).to({x:-442.6,y:14.2,startPosition:125},0).wait(20));

	// MIX_34_armR
	this.instance_3 = new lib.MIX_34_armR("single",1);
	this.instance_3.setTransform(-521.2,49.7,1,1,0,0,0,21.9,-21.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:-3.3,x:-521.8,y:53.7},0).wait(1).to({regY:-21.6,scaleX:1,scaleY:1,rotation:-8.4,x:-521.7,y:54.9},0).wait(2).to({regY:-21.8,scaleX:0.95,scaleY:0.94,rotation:0,skewX:-16.7,skewY:-10.6,x:-519.8,y:51.9,startPosition:10},0).wait(1).to({regY:-21.7,scaleX:1,scaleY:1,skewX:5.2,skewY:-174.6,x:-367.5,y:35.5,startPosition:12},0).wait(1).to({skewX:6.5,skewY:-173.3,x:-366.8,y:28.3},0).wait(1).to({skewX:4.5,skewY:-175.3,x:-367,y:23.7},0).wait(2).to({skewX:1.8,skewY:-178,x:-366.7,y:25.8},0).wait(1).to({skewX:2.8,skewY:-177,x:-366.5,y:26.7},0).wait(25).to({regY:-21.6,skewX:6.3,skewY:-173.5,x:-364.5,y:26.9},0).wait(1).to({regX:21.8,regY:-21.7,scaleX:1,scaleY:1.06,skewX:1.1,skewY:-176,x:-359.6,y:27.9,startPosition:11},0).wait(1).to({regX:21.9,scaleY:1,skewX:-5.3,skewY:-185.4,x:-363.2,y:29.3,startPosition:15},0).wait(1).to({skewX:-7.8,skewY:-187.9,x:-362.8,y:30.1,startPosition:14},0).wait(1).to({scaleX:1,skewX:-9.3,skewY:-193.4,x:-362.2,y:31.9,startPosition:13},0).wait(1).to({scaleX:1,skewX:-9.9,skewY:-190,x:-362.4,y:30.7},0).wait(1).to({skewX:-10.4,skewY:-190.5,x:-363,y:29.6},0).wait(1).to({regY:-21.6,scaleX:1,scaleY:1,skewX:-11.2,skewY:-191.3,x:-363.4,y:28.5},0).wait(2).to({x:-363.6,y:27.3},0).to({_off:true},37).wait(3).to({regY:-21.7,scaleX:1,scaleY:1,skewX:-20.7,skewY:-200.8,x:-368.3,y:50,_off:false},0).wait(2).to({regX:21.8,regY:-21.6,scaleX:0.87,scaleY:1.1,skewX:-33.8,skewY:-212.1,x:-372.4,y:58.5},0).wait(1).to({regX:21.9,regY:-21.7,scaleX:1,scaleY:1,skewX:1.1,skewY:-351.3,x:-535.1,y:76.5},0).wait(1).to({regY:-21.6,scaleX:1,skewX:-10.2,skewY:-364.3,x:-535.8,y:69.4},0).wait(1).to({regY:-21.7,scaleX:1,rotation:-11.8,skewX:0,skewY:-359.9,x:-537.6,y:67.9},0).wait(1).to({regY:-21.6,rotation:-13.1,x:-538.8,y:64.9},0).wait(1).to({x:-540.1,y:63},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.9},0).wait(1).to({rotation:-12.6,y:62.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.2,x:-540.2,y:63},0).wait(17).to({rotation:-11,x:-539,y:64.1},0).wait(1).to({regY:-21.7,scaleX:1,rotation:0,skewX:-9.7,skewY:-362.6,x:-537.2,y:66.2},0).wait(1).to({regY:-21.5,scaleX:1.01,scaleY:1,skewX:3.4,skewY:-348.4,x:-533.5,y:64.6},0).wait(2).to({skewX:3.4,x:-530.4,y:62.1,startPosition:14},0).wait(2).to({regY:-21.6,scaleX:1,scaleY:1.08,rotation:-1.1,skewX:0,skewY:-359.9,x:-527.3,y:59,startPosition:15},0).wait(1).to({scaleX:1,scaleY:1,rotation:11,x:-523.7,y:56.8},0).wait(1).to({rotation:-5.4,x:-521.9,y:51.7,startPosition:11},0).wait(2).to({regY:-21.7,scaleX:1,scaleY:1,rotation:0,x:-521.5,y:47,startPosition:1},0).wait(2).to({x:-521.3,y:48.2},0).wait(2).to({x:-521.1,y:49.7},0).wait(20));

	// MIX_propeller
	this.instance_4 = new lib.MIX_propeller("synched",0);
	this.instance_4.setTransform(-446.6,-62.8,1,1,0,0,0,1,18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:18.5,rotation:2,x:-443.3,y:-55.8,startPosition:1},0).wait(1).to({x:-443.1,y:-54.6,startPosition:2},0).wait(2).to({regX:1.1,rotation:3.8,x:-437.8,y:-55,startPosition:1},0).wait(1).to({rotation:0,skewX:1.5,skewY:-178.3,x:-439.3,y:-78.7,startPosition:2},0).wait(1).to({skewX:3.3,skewY:-176.5,x:-435,y:-88.1,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.5,skewY:-175.3,x:-432.6,y:-94.2,startPosition:1},0).wait(2).to({x:-432.3,y:-92.1,startPosition:0},0).wait(1).to({x:-432.1,y:-91.2,startPosition:1},0).wait(25).to({regY:18.4,skewX:2.5,skewY:-177.3,x:-434.2,y:-88.7,startPosition:2},0).wait(1).to({skewX:-1.8,skewY:-181.9,x:-441.9,y:-80.7,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5.3,skewY:-185.4,x:-448,y:-74.4,startPosition:1},0).wait(1).to({regY:18.5,skewX:-7.8,skewY:-187.9,x:-452.2,y:-69.8,startPosition:2},0).wait(1).to({regY:18.4,skewX:-9.3,skewY:-189.4,x:-454.9,y:-67.3,startPosition:0},0).wait(1).to({regY:18.5,skewX:-9.9,skewY:-190,x:-455.7,y:-66.2,startPosition:1},0).wait(1).to({regY:18.4,skewX:-10.4,skewY:-190.5,x:-457.2,y:-66.6,startPosition:2},0).wait(1).to({regY:18.6,scaleX:1,scaleY:1,skewX:-11.2,skewY:-191.3,x:-458.7,y:-66.8,startPosition:0},0).wait(2).to({x:-458.9,y:-68,startPosition:2},0).wait(37).to({regY:18.5,scaleX:1,scaleY:1,skewX:-10.2,skewY:-190.3,x:-456.1,y:-64.5,startPosition:0},0).wait(1).to({skewX:-8.7,skewY:-188.8,x:-456.3,y:-54.4,startPosition:1},0).to({_off:true},2).wait(3).to({regX:1,scaleX:1,scaleY:1,rotation:-3.2,skewX:0,skewY:-359.9,x:-467.4,y:-39.8,startPosition:2,_off:false},0).wait(1).to({regX:1.1,rotation:-10.2,x:-482.8,y:-54.4,startPosition:0},0).wait(1).to({regX:1,regY:18.4,rotation:-11.8,x:-488,y:-57.3,startPosition:1},0).wait(1).to({rotation:-13.1,x:-492.2,y:-61.5,startPosition:2},0).wait(1).to({x:-493.5,y:-63.4,startPosition:0},0).wait(1).to({regY:18.5,scaleX:1,scaleY:1,rotation:-12.9,x:-493.2,y:-63.2,startPosition:1},0).wait(1).to({regY:18.4,rotation:-12.6,x:-492.7,y:-63,startPosition:2},0).wait(1).to({regY:18.5,scaleX:1,scaleY:1,rotation:-12.2,x:-491.8,y:-62.6,startPosition:0},0).wait(17).to({regX:1.1,regY:18.4,rotation:-11,x:-487.8,y:-60.5,startPosition:2},0).wait(1).to({regX:1,regY:18.5,rotation:-9.7,x:-483.2,y:-57.1,startPosition:0},0).wait(1).to({regY:18.6,rotation:-4.4,x:-468.4,y:-53.3,startPosition:1},0).wait(2).to({regX:1.1,rotation:-2.2,x:-459.6,y:-53.8,startPosition:0},0).wait(2).to({regY:18.5,scaleX:1,scaleY:1,rotation:-1.1,x:-455.4,y:-54.8,startPosition:2},0).wait(1).to({regY:18.6,scaleX:1,scaleY:1,rotation:-0.3,x:-450.3,y:-56.2,startPosition:0},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-447.5,y:-60.7,startPosition:1},0).wait(2).to({regX:1,regY:18.4,x:-446.9,y:-65.4,startPosition:0},0).wait(2).to({x:-446.7,y:-64.2,startPosition:2},0).wait(2).to({x:-446.5,y:-62.7,startPosition:1},0).wait(20));

	// MIX_34_bulb_R
	this.instance_5 = new lib.MIX_34_bulb_R("synched",0);
	this.instance_5.setTransform(-512.5,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({rotation:2,x:-509.8,y:-39.5},0).wait(1).to({x:-509.6,y:-38.3},0).wait(2).to({rotation:3.8,x:-504.9,y:-40.7},0).wait(1).to({rotation:0,skewX:1.5,skewY:-178.3,x:-374,y:-58.3},0).wait(1).to({skewX:3.3,skewY:-176.5,x:-370.3,y:-65.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.5,skewY:-175.3,x:-368.5,y:-70.4},0).wait(2).to({x:-368.1,y:-68.3},0).wait(1).to({x:-368,y:-67.4},0).wait(25).to({skewX:2.5,skewY:-177.3,x:-369.3,y:-67.1},0).wait(1).to({skewX:-1.8,skewY:-181.9,x:-375.9,y:-64.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5.3,skewY:-185.4,x:-381.1,y:-62.1},0).wait(1).to({skewX:-7.8,skewY:-187.9,x:-384.8,y:-60.5},0).wait(1).to({skewX:-9.3,skewY:-189.4,x:-386.9,y:-59.7},0).wait(1).to({skewX:-9.9,skewY:-190,x:-387.7,y:-59.4},0).wait(1).to({skewX:-10.4,skewY:-190.5,x:-389.1,y:-60.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.2,skewY:-191.3,x:-390.5,y:-61.5},0).wait(2).to({x:-390.7,y:-62.7},0).wait(37).to({scaleX:1,scaleY:1,skewX:-10.2,skewY:-190.3,x:-388,y:-58},0).wait(1).to({skewX:-8.7,skewY:-188.8,x:-388.4,y:-46},0).to({_off:true},2).wait(3).to({scaleX:1,scaleY:1,rotation:-3.2,skewX:0,skewY:-359.9,x:-532,y:-17.1,_off:false},0).wait(1).to({rotation:-10.2,x:-544.2,y:-24},0).wait(1).to({rotation:-11.8,x:-548.4,y:-25.2},0).wait(1).to({rotation:-13.1,x:-551.8,y:-28},0).wait(1).to({x:-553.1,y:-30},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.9,x:-552.9},0).wait(1).to({rotation:-12.6,x:-552.5,y:-30.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.2,x:-551.9},0).wait(17).to({rotation:-11,x:-548.7,y:-29.2},0).wait(1).to({rotation:-9.7,x:-544.7,y:-27.2},0).wait(1).to({rotation:-4.4,x:-532.4,y:-29.3},0).wait(2).to({rotation:-2.2,x:-524.5,y:-32.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:-1.1,x:-520.7,y:-34.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:-515.9,y:-36.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-513.4,y:-41.9},0).wait(2).to({x:-512.8,y:-46.6},0).wait(2).to({x:-512.6,y:-45.4},0).wait(2).to({x:-512.4,y:-43.9},0).wait(20));

	// MIX_34_Lashes_R
	this.instance_6 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_6.setTransform(-495.7,-11.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({rotation:2,x:-494.3,y:-6.1},0).wait(1).to({x:-494.1,y:-4.9},0).wait(2).to({rotation:3.8,x:-490.4,y:-6.9},0).wait(1).to({rotation:0,skewX:1.5,skewY:-178.3,x:-391.5,y:-25.9},0).wait(1).to({skewX:3.3,skewY:-176.5,x:-388.9,y:-33.9},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.5,skewY:-175.3,x:-387.7,y:-39},0).wait(2).to({x:-387.4,y:-36.9},0).wait(1).to({x:-387.2,y:-36},0).wait(25).to({skewX:2.5,skewY:-177.3,x:-387.4,y:-35},0).wait(1).to({skewX:-1.8,skewY:-181.9,x:-391.4,y:-31.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5.3,skewY:-185.4,x:-394.5,y:-28.3},0).wait(1).to({skewX:-7.8,skewY:-187.9,x:-396.7,y:-26.2},0).wait(1).to({skewX:-9.3,skewY:-189.4,x:-398,y:-25},0).wait(1).to({skewX:-9.9,skewY:-190,x:-398.4,y:-24.6},0).wait(1).to({skewX:-10.4,skewY:-190.5,x:-399.4,y:-25.4},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.2,skewY:-191.3,x:-400.5,y:-26.2},0).wait(2).to({x:-400.7,y:-27.4},0).wait(37).to({scaleX:1,scaleY:1,skewX:-10.2,skewY:-190.3,x:-398.5,y:-22.9},0).wait(1).to({skewX:-8.7,skewY:-188.8,x:-399.9,y:-11.2},0).to({_off:true},2).wait(3).to({scaleX:1,scaleY:1,rotation:-3.2,skewX:0,skewY:-359.9,x:-513.4,y:14.2,_off:false},0).wait(1).to({rotation:-10.2,x:-521.9,y:4.8},0).wait(1).to({rotation:-11.8,x:-525.3,y:3},0).wait(1).to({rotation:-13.1,x:-528.1,y:-0.1},0).wait(1).to({x:-529.4,y:-2.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.9,x:-529.2},0).wait(1).to({rotation:-12.6,x:-529,y:-2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.2,x:-528.6,y:-1.8},0).wait(17).to({rotation:-11,x:-525.9,y:-0.5},0).wait(1).to({rotation:-9.7,x:-522.8,y:1.8},0).wait(1).to({rotation:-4.4,x:-513.2,y:1.6},0).wait(2).to({rotation:-2.2,x:-506.6,y:-0.5},0).wait(2).to({scaleX:1,scaleY:1,rotation:-1.1,x:-503.3,y:-2.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:-498.9,y:-4.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-496.5,y:-9.1},0).wait(2).to({x:-496.1,y:-13.8},0).wait(2).to({x:-495.9,y:-12.6},0).wait(2).to({x:-495.6,y:-11.1},0).wait(20));

	// Layer 23
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAagHAQgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQAKgKAHgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgGgCgEgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape.setTransform(-371.3,-16.2,1,1,0,0,0,-0.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgaB+QgEgBAAgGQgBgIAVgFQAbgGAQgRIASgVQANgOADgCQgGAXgKARQgWAjgjAEIgQABIgEAAgAguBRQAAgJANgHIAZgOQALgKAIgJIANgQQAEgGAIgbQAHgcgBgEQgBgEABgCQADAEAGAOQABAHgFAaQgFAXgCAFIgZAfQgbAfgWACIgDABQgIAAgBgIgAg5AWIgJgGQAmgSATgwQANgmgEghIAAgEQAGADADAMQAEALABAKQADAYgRAnQgTAughADIgFgBg");
	this.shape_1.setTransform(-369.8,-6.8,1,1,0,0,0,-0.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaB+QgEgBAAgGQgBgIAVgFQAagGARgRIASgVQANgOADgCQgGAXgKARQgVAjgkAEIgQABIgEAAgAguBRQAAgJAOgHIAYgOQAMgKAHgJIAMgQQAFgGAIgbQAHgcgBgEQgBgEAAgCQAEAEAGAOQABAHgFAaQgEAXgDAFIgaAfQgbAfgUACIgEABQgIAAgBgIgAg5AWIgJgGQAmgSATgwQANgmgDghIgBgEQAGADADAMQAEALABAKQADAYgRAnQgTAuggADIgGgBg");
	this.shape_2.setTransform(-369.6,-5.6,1,1,0,0,0,-0.2,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcB9QgEgBgBgGQAAgIAVgDQAbgGASgQQAFgHANgOIAPgPQgGAXgKAQQgXAigjADIgNABIgHgBgAguBQQgBgJANgHIAbgNQALgJAHgJIAOgPQAEgGAJgcQAIgbgBgEQgBgEABgDQAEAFAFAOQAAAHgGAaQgEAXgEAEIgZAgQgdAdgUACIgDAAQgJAAAAgIgAg4AUQgFgCgFgEQAogQATgwQAPgmgCghIgCgEQAGAEAEAMQADAKABALQACAYgSAnQgUAtghACIgFgCg");
	this.shape_3.setTransform(-365.9,-3.8,1,1,0,0,0,-0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABB8QgjgGgUgkQgJgRgDgXIAOAQQAMAQAEAHQAPARAbAIQAVAGgCAIQgBAGgEABIgBAAIgSgDgAAeBaQgVgEgZggIgXgiQgCgEgDgXQgEgaACgIQAHgNAEgEIgCAGQAAAEAFAcQAGAcAEAHIALAQQAIAJAKALIAYAPQANAJgCAIQgBAHgHAAIgEAAgAADgaQgNgoAFgYQABgLAEgJQADgMAFgEIAAAEQgGAhANAoQAQAxAlATIgKAGIgGABQgfgGgSgug");
	this.shape_4.setTransform(-515.8,-34.2,1,1,0,0,0,0.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAB7QgkgHgTglQgIgRgEgXQADACALAPIAQAXQAPASAaAJQAVAGgBAIQgCAGgEAAIgBABQgFAAgMgEgAAdBaQgVgEgYgiIgWgiQgDgEgCgYQgCgZACgIQAHgNAEgEIgCAHQgBADAGAcQAEAcAEAHIALARQAGAKALALIAXAPQANAJgCAJQgBAHgHAAIgEgBgAA1AbQgggHgQgvQgMgoAGgYQABgKADgKQAFgMAGgDIgBAEQgGAgALAoQAOAyAkAVQgFADgFACIgEABIgBAAg");
	this.shape_5.setTransform(-512.7,-46.1,1,1,0,0,0,0.6,-0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgCB8QgkgJgSglQgIgSgDgXQACACALAPIAQAYQAOASAaAKQAVAGgCAIQgCAGgDAAIgDABQgFAAgKgDgAAbBaQgUgEgYgiIgVgjQgCgEgCgYQgBgaABgHQAHgNAFgEIgCAGQgBAEAFAdQADAbAEAHIALARQAGAKAKAMIAXAQQAMAJgBAIQgCAHgGAAIgFgBgAA0AcQgfgIgPgvQgLgpAFgXQACgLAEgJQAGgMAFgDIgBAEQgHAgAKApQAOAxAjAWQgEADgGACIgEABIgCAAg");
	this.shape_6.setTransform(-511.3,-53.9,1,1,0,0,0,0.6,-0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgCB8QglgJgRglQgIgSgDgXQACACAMAPIAPAYQAPASAZAKQAVAGgCAIQgBAGgEAAIgDABQgFAAgKgDgAAbBaQgUgEgYgiIgVgjQgCgEgCgYQgBgaABgHQAHgNAFgEIgCAGQgBAEAFAdQADAbAEAHIALARQAGAKAKAMIAXAQQANAJgDAIQgBAHgGAAIgFgBgAA1AcQgggIgPgvQgLgpAFgXQACgLAEgJQAGgMAFgDIgBAEQgIAgALApQAOAxAjAWQgFADgFACIgEABIgBAAg");
	this.shape_7.setTransform(-510.9,-51.8,1,1,0,0,0,0.6,-0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgCB8QglgJgRglQgIgSgDgXQADACALAPIAOAYQAPASAaAKQAVAGgCAIQgCAGgEAAIgCABQgFAAgKgDgAAcBaQgVgEgXgiIgWgjQgDgEgBgYQgCgaACgHQAHgNAFgEIgCAGQgBAEAEAdQAEAbAEAHIAKARQAHAKAKAMIAXAQQAMAJgCAIQgBAHgGAAIgEgBgAA1AcQgggIgPgvQgKgpAEgXQACgLAEgJQAFgMAHgDIgCAEQgIAgAMApQANAxAjAWQgFADgFACIgEABIgBAAg");
	this.shape_8.setTransform(-510.8,-50.9,1,1,0,0,0,0.6,-0.1);

	this.instance_7 = new lib.Tween1("synched",0);
	this.instance_7.setTransform(-512,-45.4,1,1,-1.9);

	this.instance_8 = new lib.Tween2("synched",0);
	this.instance_8.setTransform(-523.1,-6.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqBdQgMgOgJgWQADABAPAMQAPAMAFAHQATAOAbACQAWABAAAIQABAGgEABQgEACgQAAIgDAAQghAAgagegAgKA6IgegcQgDgDgIgZQgIgWgBgIQAEgOAEgFIgBAHQAAAEALAaQAMAaAGAFIAOAOQAJAIAMAIIAbAJQAPAGAAAJQAAAIgLABIgBAAQgUAAgfgagAgHgZQgWgjgBgZQgBgKACgKQADgNAEgEIAAAEQABAgAVAlQAYAsAoAMQgDAEgFADIgFADIgCAAQggAAgYgqg");
	this.shape_9.setTransform(-521.5,-5.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgsBcQgLgPgJgWQADABAPANQAOAMAFAHQATAOAcADQAVACAAAIQAAAGgDABQgEACgRAAIgBAAQgiAAgagggAgLA6IgdgdQgDgEgHgYQgIgXAAgHQAEgPAEgFIgBAHQAAAEALAaQAKAaAGAGIANAOQAKAJAMAIIAbAKQAOAHgBAIQABAJgLAAQgWAAgegbgAgFgYQgWgmAAgYQAAgKACgLQADgMAEgEIAAAEQAAAhASAlQAZAtAoAMQgEAFgFADIgFACQghAAgXgqg");
	this.shape_10.setTransform(-523.4,2.7);

	this.instance_9 = new lib.MIX_front_lashes_L("synched",0);
	this.instance_9.setTransform(-382.7,-6.3,0.999,0.999,-7.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQB+QgFAAgBgGQgBgIAUgGQAagJAPgSIAQgXQAMgPACgCQgEAXgIARQgSAlglAIQgKACgFAAIgCAAgAgoBUQgCgJAMgJIAYgPQALgLAGgKIALgRQAEgGAFgdQAEgcAAgDIgDgHQAFAEAIANQABAIgCAZQgDAYgCAEIgWAjQgYAhgUAEIgFAAQgGAAgCgGgAg5AaQgGgCgEgDQAjgVAPgxQALgogGggIgCgEQAHADAFALQACAKACAKQAFAYgLAoQgQAwgfAGIgGgBg");
	this.shape_11.setTransform(-389.9,1.8,1,1,0,0,0,-0.6,-0.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgKB3QgCgHAQgIQAbgMANgVIANgZQAJgQACgCQAAAYgHASQgNAngkAMQgNAEgDAAQgEABgCgHgAghBXQgDgJAMgKIAVgTQAJgMAGgLIAIgSQADgHABgcQABgdgBgDIgDgGQAFADAIAMQADAHABAaQABAXgBAFIgSAlQgUAkgUAHIgGABQgFAAgCgFgAg5AfQgGgBgEgDQAggbAIgwQAHgpgLgfIgBgFQAGADAGALQAGAIADALQAIAWgIAqQgKAxgfALIgBAAIgEgBg");
	this.shape_12.setTransform(-400.9,-22.5,1,1,0,0,0,-1,-0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgIB3QgDgHASgKQAagNAMgTIAMgaQAJgQADgCQgBAXgGASQgNAngiANIgQAGQgFAAgCgGgAggBXQgDgJALgKIAWgTQAIgNAFgLIAIgSQADgHABgdQAAgcgCgEIgDgGQAFADAKAMQACAHABAbQACAXgBAFIgRAlQgUAlgSAHIgHABQgFAAgCgFgAg5AgQgGgBgFgDQAhgcAGgxQAGgpgMgfIgCgDQAHACAGALQAGAIADAKQAJAXgHApQgIAygfALIgCAAIgDAAg");
	this.shape_13.setTransform(-405,-27.4,1,1,0,0,0,-1,-0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGB3QgDgHASgKQAagNALgVQADgIAJgRQAIgRADgCQAAAXgFATQgMAngjAOQgOAGgDAAQgDAAgDgGgAgeBXQgDgIALgLIAUgUQAIgMAGgMIAHgSQADgGgBgdQAAgdgBgDQgDgEAAgCQAEADAKAMQADAHACAZQACAYgBAFIgQAlQgUAlgSAIIgGACQgFAAgCgGgAg5AhQgFgBgGgCQAggdAGgxQAEgqgMgeIgCgEQAGACAHALQAHAJADAJQAJAXgGAqQgHAxgeAMIgCAAIgEAAg");
	this.shape_14.setTransform(-408.6,-33.5,1,1,0,0,0,-1.1,-0.2);

	this.instance_10 = new lib.Tween3("synched",0);
	this.instance_10.setTransform(-408.8,-35.3);

	this.instance_11 = new lib.Tween4("synched",0);
	this.instance_11.setTransform(-407.6,-33.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgMB4QgCgIASgIQAagNANgTIANgZQAJgQAEgCQgCAXgGASQgOAngkALIgRAGQgDgBgDgFgAgiBWQgCgIALgKIAWgTQAIgMAGgLIAIgRQAEgIACgcQABgdgBgDQgDgEAAgCQAEADAKANQACAHAAAZQABAYgCAFIgSAkQgUAkgUAHIgFABQgGAAgCgGgAg6AfQgFgCgFgDQAhgaAJgxQAHgpgLgfIgBgEQAFACAIALQAFAJADAKQAIAXgJAqQgKAwgfALIgCAAIgEAAg");
	this.shape_15.setTransform(-401.5,-24.3,1,1,0,0,0,-1,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgPB+QgEAAgBgGQgBgIAUgHQAagJAPgSQADgIALgQQALgQADgBQgDAXgIARQgRAmglAIQgMAEgEAAIgCgBgAgmBUQgCgIAMgJIAWgRQALgLAHgKIAKgRQADgHAFgcQADgcAAgEIgCgGQAEAEAHANQACAHgCAaQgBAXgCAFIgWAjQgXAigUAEIgEABQgHAAgBgHgAg5AbQgGgCgEgDQAjgWANgxQALgpgIggIgBgEQAGADAFAMQAFAKABAKQAEAXgJApQgPAwggAHIAAAAIgFgBg");
	this.shape_16.setTransform(-390.1,-13.2,1,1,0,0,0,-0.7,-0.1);

	this.instance_12 = new lib.Tween5("synched",0);
	this.instance_12.setTransform(-382.5,-10.7);

	this.instance_13 = new lib.Tween6("synched",0);
	this.instance_13.setTransform(-371.5,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.instance_7,p:{rotation:-1.9,x:-512,y:-45.4}}]},25).to({state:[{t:this.instance_7,p:{rotation:-1.2,x:-515.4,y:-31.7}}]},1).to({state:[{t:this.instance_7,p:{rotation:-0.7,x:-517.8,y:-21.1}}]},1).to({state:[{t:this.instance_7,p:{rotation:-0.2,x:-519.7,y:-13.6}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:-520.8,y:-9}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:-521.2,y:-7.5}}]},1).to({state:[{t:this.instance_7,p:{rotation:0,x:-522.1,y:-7.1}}]},1).to({state:[{t:this.instance_8,p:{x:-523.1,y:-6.8}}]},1).to({state:[{t:this.instance_8,p:{x:-523.3,y:-8}}]},2).to({state:[{t:this.shape_9}]},37).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.instance_9,p:{scaleX:0.999,scaleY:0.999,rotation:-7.2,x:-382.7,y:-6.3}}]},2).to({state:[{t:this.instance_9,p:{scaleX:1,scaleY:1,rotation:-4,x:-383.7,y:1.2}}]},2).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.instance_10,p:{x:-408.8,y:-35.3}}]},1).to({state:[{t:this.instance_10,p:{x:-408.6,y:-35.1}}]},1).to({state:[{t:this.instance_10,p:{x:-408.3,y:-34.5}}]},1).to({state:[{t:this.instance_11,p:{rotation:0,x:-407.6,y:-33.4}}]},1).to({state:[{t:this.instance_11,p:{rotation:1.2,x:-404.3,y:-29.5}}]},17).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.instance_12,p:{x:-382.5,y:-10.7}}]},2).to({state:[{t:this.instance_12,p:{x:-379,y:-10.3}}]},2).to({state:[{t:this.instance_12,p:{x:-374.4,y:-10.7}}]},1).to({state:[{t:this.instance_12,p:{x:-372,y:-14.6}}]},1).to({state:[{t:this.instance_13,p:{x:-371.5,y:-18.9}}]},2).to({state:[{t:this.instance_13,p:{x:-371.3,y:-17.7}}]},2).to({state:[{t:this.instance_13,p:{x:-371,y:-16.2}}]},2).wait(20));

	// MIX_34_head
	this.instance_14 = new lib.MIX_34_head("synched",0);
	this.instance_14.setTransform(-448.1,0);

	this.instance_15 = new lib.MIX_front_lashes_R("synched",0);
	this.instance_15.setTransform(-527.6,14.3,0.999,0.999,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{rotation:0,x:-448.1,y:0,skewX:0,skewY:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_14,p:{rotation:2,x:-447.2,y:6.6,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_14,p:{rotation:2,x:-447,y:7.8,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_14,p:{rotation:3.8,x:-443.7,y:7.3,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:-439.5,y:-16,skewX:1.5,skewY:-178.4,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-437.1,y:-25.5,skewX:3.3,skewY:-176.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-436.1,y:-31.6,skewX:4.5,skewY:-175.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-435.8,y:-29.5,skewX:4.5,skewY:-175.4,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:-435.6,y:-28.6,skewX:4.5,skewY:-175.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-435.5,y:-25.9,skewX:2.5,skewY:-177.4,scaleX:0.999,scaleY:0.999}}]},25).to({state:[{t:this.instance_14,p:{rotation:0,x:-438.3,y:-18.4,skewX:-1.9,skewY:178,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-440.4,y:-12.6,skewX:-5.4,skewY:174.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-442,y:-8.5,skewX:-7.9,skewY:172,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-442.9,y:-6,skewX:-9.4,skewY:170.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-443.2,y:-5.1,skewX:-10,skewY:169.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-444,y:-5.5,skewX:-10.5,skewY:169.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-444.9,y:-5.9,skewX:-11.3,skewY:168.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-445.1,y:-7.1,skewX:-11.3,skewY:168.6,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:-443.3,y:-3.3,skewX:-10.3,skewY:169.6,scaleX:0.998,scaleY:0.998}}]},37).to({state:[{t:this.instance_14,p:{rotation:0,x:-445.2,y:7.1,skewX:-8.8,skewY:171.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_15,p:{scaleX:0.999,scaleY:0.999,rotation:-7.2,x:-527.6,y:14.3}}]},2).to({state:[{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:-4,x:-529.6,y:13.5}}]},2).to({state:[{t:this.instance_14,p:{rotation:-3.3,x:-465.4,y:22.7,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-10.3,x:-473.3,y:7.3,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-11.9,x:-476.6,y:4.2,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-13.2,x:-479.5,y:-0.1,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-13.2,x:-480.7,y:-2.1,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-13,x:-480.6,y:-2,skewX:0,skewY:0,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_14,p:{rotation:-12.7,x:-480.5,y:-1.7,skewX:0,skewY:0,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_14,p:{rotation:-12.3,x:-480,y:-1.2,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-11.1,x:-477.4,y:1.2,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},17).to({state:[{t:this.instance_14,p:{rotation:-9.8,x:-474.1,y:4.8,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-4.5,x:-465.1,y:9.1,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_14,p:{rotation:-2.3,x:-458.8,y:8.7,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_14,p:{rotation:-1.2,x:-455.7,y:7.7,skewX:0,skewY:0,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_14,p:{rotation:-0.4,x:-451.3,y:6.3,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-449,y:1.8,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:-448.6,y:-2.7,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:-448.4,y:-1.5,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:-448.1,y:0,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).wait(20));

	// MIX_34_bulbL
	this.instance_16 = new lib.MIX_34_bulbL("synched",0);
	this.instance_16.setTransform(-400.2,-49.5);

	this.instance_17 = new lib.MIX_front_head("synched",0);
	this.instance_17.setTransform(-450,28.3,0.999,0.999,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{rotation:0,x:-400.2,y:-49.5,skewX:0,skewY:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_16,p:{rotation:2,x:-397.6,y:-41.1,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_16,p:{rotation:2,x:-397.4,y:-39.9,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_16,p:{rotation:3.8,x:-392.6,y:-38.9,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:-486.1,y:-66.7,skewX:1.5,skewY:-178.4,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-482.1,y:-77.6,skewX:3.3,skewY:-176.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-479.9,y:-84.8,skewX:4.5,skewY:-175.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-479.6,y:-82.7,skewX:4.5,skewY:-175.4,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:-479.4,y:-81.8,skewX:4.5,skewY:-175.4,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-481.2,y:-77.5,skewX:2.5,skewY:-177.4,scaleX:0.999,scaleY:0.999}}]},25).to({state:[{t:this.instance_16,p:{rotation:0,x:-487.6,y:-65.8,skewX:-1.9,skewY:178,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-492.4,y:-56.8,skewX:-5.4,skewY:174.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-496,y:-50.4,skewX:-7.9,skewY:172,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-498.1,y:-46.4,skewX:-9.4,skewY:170.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-498.8,y:-45.1,skewX:-10,skewY:169.9,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-500.2,y:-45,skewX:-10.5,skewY:169.4,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-501.5,y:-44.9,skewX:-11.3,skewY:168.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-501.7,y:-46.1,skewX:-11.3,skewY:168.6,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:-499.3,y:-43.2,skewX:-10.3,skewY:169.6,scaleX:0.998,scaleY:0.998}}]},37).to({state:[{t:this.instance_16,p:{rotation:0,x:-500,y:-34.3,skewX:-8.8,skewY:171.1,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_17,p:{scaleX:0.999,scaleY:0.999,rotation:-7.2,x:-450,y:28.3}}]},2).to({state:[{t:this.instance_17,p:{scaleX:1,scaleY:1,rotation:-4,x:-452.9,y:31.9}}]},2).to({state:[{t:this.instance_16,p:{rotation:-3.3,x:-420.7,y:-29.3,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-10.3,x:-435.3,y:-49.8,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-11.9,x:-440.2,y:-53.9,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-13.2,x:-444.3,y:-59.1,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-13.2,x:-445.6,y:-61,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-13,x:-445.5,y:-60.8,skewX:0,skewY:0,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_16,p:{rotation:-12.7,x:-444.9,y:-60.4,skewX:0,skewY:0,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_16,p:{rotation:-12.3,x:-444,y:-59.6,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-11.1,x:-440.2,y:-56.5,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},17).to({state:[{t:this.instance_16,p:{rotation:-9.8,x:-435.6,y:-52,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-4.5,x:-421.5,y:-43.9,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_16,p:{rotation:-2.3,x:-413.2,y:-42.5,skewX:0,skewY:0,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_16,p:{rotation:-1.2,x:-409,y:-42.8,skewX:0,skewY:0,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_16,p:{rotation:-0.4,x:-404,y:-43.7,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-401.3,y:-47.7,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_16,p:{rotation:0,x:-400.7,y:-52.2,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:-400.5,y:-51,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_16,p:{rotation:0,x:-400.2,y:-49.5,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).wait(20));

	// MIX_34_arm_L
	this.instance_18 = new lib.MIX_34_arm_L("single",1);
	this.instance_18.setTransform(-369.9,39.4,1,1,0,0,0,-18.9,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1).to({regX:-18.7,regY:-18.9,rotation:5.1,x:-370.3,y:48.7,startPosition:14},0).wait(1).to({scaleX:1,scaleY:1,rotation:9.5,x:-370.1,y:50},0).wait(2).to({regY:-19,scaleX:1,scaleY:1,rotation:8,x:-368.2,y:51.7},0).wait(1).to({regY:-18.8,scaleX:1,scaleY:1,rotation:0,skewX:-10.6,skewY:169.2,x:-518.5,y:21.4,startPosition:12},0).wait(1).to({regX:-18.8,regY:-18.9,skewX:-0.3,skewY:179.5,x:-517.2,y:9.3},0).wait(1).to({skewX:4.5,skewY:184.6,x:-517,y:1.4},0).wait(2).to({regX:-18.9,skewX:6.8,skewY:186.9,x:-516.6,y:3.5},0).wait(1).to({skewX:6.1,skewY:186.2,x:-516.4,y:4.4},0).wait(25).to({regX:-18.8,skewX:-2.5,skewY:177.3,x:-515.1,y:10},0).wait(1).to({regX:-18.7,regY:-19,scaleX:1,scaleY:1.08,skewX:-10.9,skewY:163.6,x:-519.2,y:31.7,startPosition:11},0).wait(1).to({regY:-18.9,scaleX:1,scaleY:1,skewX:-20.3,skewY:159.5,x:-516.3,y:41.1,startPosition:15},0).wait(1).to({regX:-18.9,regY:-19,skewX:-7.8,skewY:172,x:-512.9,y:41.3,startPosition:16},0).wait(1).to({regX:-18.8,scaleY:1.03,skewX:-8,skewY:170.5,x:-512.7,y:45.8,startPosition:13},0).wait(1).to({regY:-18.9,scaleY:1,skewX:-9.9,skewY:169.9,x:-512.6,y:47.4},0).wait(1).to({skewX:-10.4,skewY:169.4,x:-513,y:47.7},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.2,skewY:168.6,x:-513.5,y:48.1},0).wait(2).to({x:-513.7,y:46.9},0).wait(37).to({regX:-18.7,scaleX:1,scaleY:1,skewX:-6.4,skewY:173.4,x:-512.9,y:49.4},0).wait(1).to({regX:-18.9,skewX:-4.4,skewY:175.4,x:-516,y:58},0).wait(2).to({scaleX:1.06,scaleY:1,skewX:-22.7,skewY:157.1,x:-529.8,y:72.5},0).wait(2).to({regX:-18.7,regY:-18.7,scaleX:1.26,skewX:-40,skewY:151.4,x:-531.3,y:71.6},0).wait(1).to({regY:-18.9,scaleX:1,rotation:-3.2,skewX:0,skewY:0,x:-385.1,y:57.2},0).wait(1).to({regY:-19,rotation:7.4,x:-389.4,y:31.8,startPosition:14},0).wait(1).to({regX:-18.8,regY:-18.9,rotation:-4.7,x:-392.1,y:26.6,startPosition:0},0).wait(1).to({regX:-18.7,rotation:-13.1,x:-394.4,y:20.2},0).wait(1).to({rotation:-16.9,x:-395.6,y:18.2},0).wait(1).to({regY:-18.8,scaleX:1,scaleY:1,rotation:-16.3,x:-395.5,y:18.6},0).wait(1).to({regY:-18.9,rotation:-14.8,y:19.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.2,x:-395.2,y:20.4},0).wait(17).to({rotation:-11,x:-393.1,y:24.5},0).wait(1).to({rotation:-9.7,x:-390.4,y:30.1},0).wait(1).to({rotation:-4.4,x:-384.1,y:41.9},0).wait(2).to({rotation:-2.2,x:-379.2,y:44.7},0).wait(2).to({regY:-19,scaleX:1,scaleY:1,rotation:-1.1,x:-376.6,y:45.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:-372.7,y:44.8},0).wait(1).to({regY:-18.9,scaleX:1,scaleY:1,rotation:0,x:-370.7,y:41,startPosition:1},0).wait(2).to({regX:-18.8,regY:-18.8,x:-370.3,y:36.7},0).wait(2).to({x:-370.1,y:37.9},0).wait(2).to({x:-369.8,y:39.4},0).wait(20));

	// MIX_34_handle
	this.instance_19 = new lib.MIX_34_handle("synched",0);
	this.instance_19.setTransform(-526.6,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1).to({rotation:2,x:-525.4,y:1.8},0).wait(1).to({x:-525.2,y:3},0).wait(2).to({rotation:3.8,x:-521.8,y:0.1},0).wait(1).to({rotation:0,skewX:1.5,skewY:-178.3,x:-360.9,y:-16},0).wait(1).to({skewX:3.3,skewY:-176.5,x:-358.6,y:-23},0).wait(1).to({scaleX:1,scaleY:1,skewX:4.5,skewY:-175.3,x:-357.7,y:-27.4},0).wait(2).to({x:-357.4,y:-25.3},0).wait(1).to({x:-357.2,y:-24.4},0).wait(25).to({skewX:2.5,skewY:-177.3,x:-357.1,y:-24.5},0).wait(1).to({skewX:-1.8,skewY:-181.9,x:-360.5,y:-23.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-5.3,skewY:-185.4,x:-363.1,y:-22.3},0).wait(1).to({skewX:-7.8,skewY:-187.9,x:-365,y:-21.6},0).wait(1).to({skewX:-9.3,skewY:-189.4,x:-366.1,y:-21.1},0).wait(1).to({skewX:-9.9,skewY:-190,x:-366.5,y:-21},0).wait(1).to({skewX:-10.4,skewY:-190.5,x:-367.5,y:-22.2},0).wait(1).to({scaleX:1,scaleY:1,skewX:-11.2,skewY:-191.3,x:-368.5,y:-23.3},0).wait(2).to({x:-368.7,y:-24.5},0).wait(37).to({scaleX:1,scaleY:1,skewX:-10.2,skewY:-190.3,x:-366.7,y:-19.5},0).wait(1).to({x:-371.6,y:-6.7},0).to({_off:true},2).wait(3).to({scaleX:1,scaleY:1,rotation:-3.2,skewX:0,skewY:-359.9,x:-543.5,y:25.1,_off:false},0).wait(1).to({rotation:-18.2,x:-549.9,y:22.6},0).wait(1).to({rotation:-19.7,x:-552.8,y:21.6},0).wait(1).to({rotation:-13.1,x:-555.8,y:15.6},0).wait(1).to({x:-557.1,y:13.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.9,x:-557},0).wait(1).to({rotation:-12.6,x:-556.8,y:13.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:-12.2,x:-556.5},0).wait(17).to({rotation:-11,x:-554.2,y:14.2},0).wait(1).to({rotation:-4.4,x:-550.2,y:16.5},0).wait(1).to({x:-542.9,y:13.2},0).wait(2).to({rotation:-2.2,x:-536.7,y:9.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:-1.1,x:-533.8,y:7.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.3,x:-529.6,y:5},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-527.4,y:0},0).wait(2).to({x:-526.9,y:-4.6},0).wait(2).to({x:-526.7,y:-3.4},0).wait(2).to({x:-526.5,y:-1.9},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-572.1,-131.6,260.1,255.5);


(lib.Mixie_TakeCareofThis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mastercliptakecare("synched",0);
	this.instance.setTransform(-20.8,-32.8,1.469,1.469,5.8,0,0,-446.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-32.8,startPosition:1},0).wait(1).to({y:-33.1,startPosition:2},0).wait(1).to({y:-33.5,startPosition:3},0).wait(1).to({y:-34,startPosition:4},0).wait(1).to({y:-34.6,startPosition:5},0).wait(1).to({y:-35.5,startPosition:6},0).wait(1).to({y:-36.4,startPosition:7},0).wait(1).to({y:-37.6,startPosition:8},0).wait(1).to({y:-38.8,startPosition:9},0).wait(1).to({y:-40.3,startPosition:10},0).wait(1).to({y:-41.8,startPosition:11},0).wait(1).to({y:-43.4,startPosition:12},0).wait(1).to({y:-45,startPosition:13},0).wait(1).to({y:-46.6,startPosition:14},0).wait(1).to({y:-48.1,startPosition:15},0).wait(1).to({y:-49.4,startPosition:16},0).wait(1).to({y:-50.7,startPosition:17},0).wait(1).to({y:-51.7,startPosition:18},0).wait(1).to({y:-52.6,startPosition:19},0).wait(1).to({y:-53.4,startPosition:20},0).wait(1).to({y:-54,startPosition:21},0).wait(1).to({y:-54.5,startPosition:22},0).wait(1).to({y:-54.9,startPosition:23},0).wait(1).to({y:-55.2,startPosition:24},0).wait(1).to({y:-55.1,startPosition:25},0).wait(1).to({y:-54.9,startPosition:26},0).wait(1).to({y:-54.6,startPosition:27},0).wait(1).to({y:-54.2,startPosition:28},0).wait(1).to({y:-53.6,startPosition:29},0).wait(1).to({y:-53,startPosition:30},0).wait(1).to({y:-52.2,startPosition:31},0).wait(1).to({y:-51.4,startPosition:32},0).wait(1).to({y:-50.3,startPosition:33},0).wait(1).to({y:-49.2,startPosition:34},0).wait(1).to({y:-48,startPosition:35},0).wait(1).to({y:-46.6,startPosition:36},0).wait(1).to({y:-45.2,startPosition:37},0).wait(1).to({y:-43.8,startPosition:38},0).wait(1).to({y:-42.3,startPosition:39},0).wait(1).to({y:-41,startPosition:40},0).wait(1).to({y:-39.7,startPosition:41},0).wait(1).to({y:-38.5,startPosition:42},0).wait(1).to({y:-37.4,startPosition:43},0).wait(1).to({y:-36.4,startPosition:44},0).wait(1).to({y:-35.5,startPosition:45},0).wait(1).to({y:-34.8,startPosition:46},0).wait(1).to({y:-34.2,startPosition:47},0).wait(1).to({y:-33.7,startPosition:48},0).wait(1).to({y:-33.3,startPosition:49},0).wait(1).to({y:-33,startPosition:50},0).wait(1).to({y:-32.7,startPosition:51},0).wait(1).to({y:-32.8,startPosition:52},0).wait(1).to({y:-33.1,startPosition:53},0).wait(1).to({y:-33.4,startPosition:54},0).wait(1).to({y:-33.9,startPosition:55},0).wait(1).to({y:-34.5,startPosition:56},0).wait(1).to({y:-35.2,startPosition:57},0).wait(1).to({y:-36.1,startPosition:58},0).wait(1).to({y:-37.2,startPosition:59},0).wait(1).to({y:-38.4,startPosition:60},0).wait(1).to({y:-39.7,startPosition:61},0).wait(1).to({y:-41.1,startPosition:62},0).wait(1).to({y:-42.6,startPosition:63},0).wait(1).to({y:-44.2,startPosition:64},0).wait(1).to({y:-45.7,startPosition:65},0).wait(1).to({y:-47.2,startPosition:66},0).wait(1).to({y:-48.6,startPosition:67},0).wait(1).to({y:-49.9,startPosition:68},0).wait(1).to({y:-51,startPosition:69},0).wait(1).to({y:-52,startPosition:70},0).wait(1).to({y:-52.8,startPosition:71},0).wait(1).to({y:-53.5,startPosition:72},0).wait(1).to({y:-54.1,startPosition:73},0).wait(1).to({y:-54.6,startPosition:74},0).wait(1).to({y:-54.9,startPosition:75},0).wait(1).to({y:-55.2,startPosition:76},0).wait(1).to({y:-55.1,startPosition:77},0).wait(1).to({y:-54.8,startPosition:78},0).wait(1).to({y:-54.5,startPosition:79},0).wait(1).to({y:-54,startPosition:80},0).wait(1).to({y:-53.4,startPosition:81},0).wait(1).to({y:-52.7,startPosition:82},0).wait(1).to({y:-51.8,startPosition:83},0).wait(1).to({y:-50.7,startPosition:84},0).wait(1).to({y:-49.5,startPosition:85},0).wait(1).to({y:-48.2,startPosition:86},0).wait(1).to({y:-46.8,startPosition:87},0).wait(1).to({y:-45.3,startPosition:88},0).wait(1).to({y:-43.7,startPosition:89},0).wait(1).to({y:-42.2,startPosition:90},0).wait(1).to({y:-40.7,startPosition:91},0).wait(1).to({y:-39.3,startPosition:92},0).wait(1).to({y:-38,startPosition:93},0).wait(1).to({y:-36.9,startPosition:94},0).wait(1).to({y:-35.9,startPosition:95},0).wait(1).to({y:-35.1,startPosition:96},0).wait(1).to({y:-34.4,startPosition:97},0).wait(1).to({y:-33.8,startPosition:98},0).wait(1).to({y:-33.3,startPosition:99},0).wait(1).to({y:-33,startPosition:100},0).wait(1).to({y:-32.7,startPosition:101},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-291.6,-342,501.8,506.3);


(lib.Mixie_ProfGoggles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Masterclipgoggles("synched",0);
	this.instance.setTransform(-20.8,-32.8,1.469,1.469,5.8,0,0,-446.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-32.9,startPosition:1},0).wait(1).to({y:-33.1,startPosition:2},0).wait(1).to({y:-33.4,startPosition:3},0).wait(1).to({y:-33.7,startPosition:4},0).wait(1).to({y:-34.2,startPosition:5},0).wait(1).to({y:-34.6,startPosition:6},0).wait(1).to({y:-35.2,startPosition:7},0).wait(1).to({y:-35.7,startPosition:8},0).wait(1).to({y:-36.4,startPosition:9},0).wait(1).to({y:-37,startPosition:10},0).wait(1).to({y:-37.7,startPosition:11},0).wait(1).to({y:-38.5,startPosition:12},0).wait(1).to({y:-39.2,startPosition:13},0).wait(1).to({y:-40,startPosition:14},0).wait(1).to({y:-40.8,startPosition:15},0).wait(1).to({y:-41.5,startPosition:16},0).wait(1).to({y:-42.3,startPosition:17},0).wait(1).to({y:-43,startPosition:18},0).wait(1).to({y:-43.7,startPosition:19},0).wait(1).to({y:-44.3,startPosition:20},0).wait(1).to({y:-44.9,startPosition:21},0).wait(1).to({y:-45.4,startPosition:22},0).wait(1).to({y:-45.9,startPosition:23},0).wait(1).to({y:-46.3,startPosition:24},0).wait(1).to({y:-46.7,startPosition:25},0).wait(1).to({y:-47,startPosition:26},0).wait(1).to({y:-47.3,startPosition:27},0).wait(1).to({y:-47.5,startPosition:28},0).wait(1).to({y:-47.7,startPosition:29},0).wait(1).to({x:-20.6,y:-47.5,startPosition:30},0).wait(1).to({y:-47.3,startPosition:31},0).wait(1).to({y:-46.9,startPosition:32},0).wait(1).to({y:-46.5,startPosition:33},0).wait(1).to({y:-46.1,startPosition:34},0).wait(1).to({y:-45.5,startPosition:35},0).wait(1).to({y:-44.9,startPosition:36},0).wait(1).to({y:-44.3,startPosition:37},0).wait(1).to({y:-43.6,startPosition:38},0).wait(1).to({y:-42.8,startPosition:39},0).wait(1).to({y:-42.1,startPosition:40},0).wait(1).to({y:-41.3,startPosition:41},0).wait(1).to({y:-40.4,startPosition:42},0).wait(1).to({y:-39.6,startPosition:43},0).wait(1).to({y:-38.8,startPosition:44},0).wait(1).to({y:-38,startPosition:45},0).wait(1).to({y:-37.2,startPosition:46},0).wait(1).to({y:-36.5,startPosition:47},0).wait(1).to({y:-35.9,startPosition:48},0).wait(1).to({y:-35.3,startPosition:49},0).wait(1).to({y:-34.7,startPosition:50},0).wait(1).to({y:-34.2,startPosition:51},0).wait(1).to({y:-33.8,startPosition:52},0).wait(1).to({y:-33.4,startPosition:53},0).wait(1).to({y:-33.1,startPosition:54},0).wait(1).to({y:-32.9,startPosition:55},0).wait(1).to({x:-20.7,y:-32.7,startPosition:56},0).wait(1).to({y:-32.9,startPosition:57},0).wait(1).to({y:-33.1,startPosition:58},0).wait(1).to({y:-33.4,startPosition:59},0).wait(1).to({y:-33.7,startPosition:60},0).wait(1).to({y:-34.2,startPosition:61},0).wait(1).to({y:-34.6,startPosition:62},0).wait(1).to({y:-35.2,startPosition:63},0).wait(1).to({y:-35.7,startPosition:64},0).wait(1).to({y:-36.4,startPosition:65},0).wait(1).to({y:-37,startPosition:66},0).wait(1).to({y:-37.7,startPosition:67},0).wait(1).to({y:-38.5,startPosition:68},0).wait(1).to({y:-39.2,startPosition:69},0).wait(1).to({y:-40,startPosition:70},0).wait(1).to({y:-40.8,startPosition:71},0).wait(1).to({y:-41.5,startPosition:72},0).wait(1).to({y:-42.3,startPosition:73},0).wait(1).to({y:-43,startPosition:74},0).wait(1).to({y:-43.7,startPosition:75},0).wait(1).to({y:-44.3,startPosition:76},0).wait(1).to({y:-44.9,startPosition:77},0).wait(1).to({y:-45.4,startPosition:78},0).wait(1).to({y:-45.9,startPosition:79},0).wait(1).to({y:-46.3,startPosition:80},0).wait(1).to({y:-46.7,startPosition:81},0).wait(1).to({y:-47,startPosition:82},0).wait(1).to({y:-47.3,startPosition:83},0).wait(1).to({y:-47.5,startPosition:84},0).wait(1).to({y:-47.7,startPosition:85},0).wait(1).to({x:-20.6,y:-47.5,startPosition:86},0).wait(1).to({y:-47.2,startPosition:87},0).wait(1).to({y:-46.9,startPosition:88},0).wait(1).to({y:-46.5,startPosition:89},0).wait(1).to({y:-46,startPosition:90},0).wait(1).to({y:-45.4,startPosition:91},0).wait(1).to({y:-44.8,startPosition:92},0).wait(1).to({y:-44.1,startPosition:93},0).wait(1).to({y:-43.3,startPosition:94},0).wait(1).to({y:-42.5,startPosition:95},0).wait(1).to({y:-41.7,startPosition:96},0).wait(1).to({y:-40.9,startPosition:97},0).wait(1).to({y:-40,startPosition:98},0).wait(1).to({y:-39.2,startPosition:99},0).wait(1).to({y:-38.3,startPosition:100},0).wait(1).to({y:-37.5,startPosition:101},0).wait(1).to({y:-36.8,startPosition:102},0).wait(1).to({y:-36.1,startPosition:103},0).wait(1).to({y:-35.4,startPosition:104},0).wait(1).to({y:-34.8,startPosition:105},0).wait(1).to({y:-34.3,startPosition:106},0).wait(1).to({y:-33.9,startPosition:107},0).wait(1).to({y:-33.5,startPosition:108},0).wait(1).to({y:-33.2,startPosition:109},0).wait(1).to({y:-32.9,startPosition:110},0).wait(1).to({x:-20.7,y:-32.7,startPosition:0},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-287.3,-324.5,555,532.3);


(lib.Mixie_IDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MasterclipIdle("synched",0);
	this.instance.setTransform(-20.6,-32.8,1.469,1.469,5.8,0,0,-446.1,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.47,y:-32.9,startPosition:1},0).wait(1).to({y:-33.2,startPosition:2},0).wait(1).to({y:-33.5,startPosition:3},0).wait(1).to({y:-33.9,startPosition:4},0).wait(1).to({y:-34.4,startPosition:5},0).wait(1).to({y:-34.9,startPosition:6},0).wait(1).to({x:-20.6,y:-35.4,startPosition:7},0).wait(1).to({y:-36.1,startPosition:8},0).wait(1).to({y:-36.7,startPosition:9},0).wait(1).to({scaleX:1.47,x:-20.5,y:-37.5,startPosition:10},0).wait(1).to({y:-38.2,startPosition:11},0).wait(1).to({y:-39,startPosition:12},0).wait(1).to({x:-20.6,y:-39.8,startPosition:13},0).wait(1).to({y:-40.6,startPosition:14},0).wait(1).to({y:-41.4,startPosition:15},0).wait(1).to({y:-42.2,startPosition:16},0).wait(1).to({y:-42.9,startPosition:17},0).wait(1).to({y:-43.6,startPosition:18},0).wait(1).to({y:-44.3,startPosition:19},0).wait(1).to({y:-44.9,startPosition:20},0).wait(1).to({x:-20.7,y:-45.4,startPosition:21},0).wait(1).to({y:-45.9,startPosition:22},0).wait(1).to({y:-46.3,startPosition:23},0).wait(1).to({y:-46.6,startPosition:24},0).wait(1).to({y:-47,startPosition:25},0).wait(1).to({y:-47.2,startPosition:26},0).wait(1).to({y:-47.4,startPosition:27},0).wait(1).to({y:-47.6,startPosition:28},0).wait(1).to({regX:-446.1,y:-47.7,startPosition:29},0).wait(1).to({x:-20.6,y:-47.5,startPosition:30},0).wait(1).to({y:-47.3,startPosition:31},0).wait(1).to({y:-47,startPosition:32},0).wait(1).to({y:-46.6,startPosition:33},0).wait(1).to({y:-46.2,startPosition:34},0).wait(1).to({y:-45.7,startPosition:35},0).wait(1).to({y:-45.2,startPosition:36},0).wait(1).to({y:-44.6,startPosition:37},0).wait(1).to({y:-44,startPosition:38},0).wait(1).to({y:-43.3,startPosition:39},0).wait(1).to({y:-42.5,startPosition:40},0).wait(1).to({y:-41.8,startPosition:41},0).wait(1).to({y:-41,startPosition:42},0).wait(1).to({y:-40.2,startPosition:43},0).wait(1).to({y:-39.4,startPosition:44},0).wait(1).to({y:-38.7,startPosition:45},0).wait(1).to({y:-37.9,startPosition:46},0).wait(1).to({y:-37.2,startPosition:47},0).wait(1).to({y:-36.6,startPosition:48},0).wait(1).to({y:-36,startPosition:49},0).wait(1).to({y:-35.4,startPosition:50},0).wait(1).to({y:-34.9,startPosition:51},0).wait(1).to({y:-34.5,startPosition:52},0).wait(1).to({y:-34.1,startPosition:53},0).wait(1).to({y:-33.8,startPosition:54},0).wait(1).to({y:-33.5,startPosition:55},0).wait(1).to({y:-33.2,startPosition:56},0).wait(1).to({y:-33,startPosition:57},0).wait(1).to({y:-32.8,startPosition:58},0).wait(1).to({x:-20.7,y:-32.7,startPosition:59},0).wait(1).to({y:-32.9,startPosition:60},0).wait(1).to({y:-33.1,startPosition:61},0).wait(1).to({y:-33.4,startPosition:62},0).wait(1).to({y:-33.8,startPosition:63},0).wait(1).to({y:-34.2,startPosition:64},0).wait(1).to({y:-34.7,startPosition:65},0).wait(1).to({y:-35.2,startPosition:66},0).wait(1).to({y:-35.8,startPosition:67},0).wait(1).to({y:-36.4,startPosition:68},0).wait(1).to({y:-37.1,startPosition:69},0).wait(1).to({y:-37.9,startPosition:70},0).wait(1).to({y:-38.6,startPosition:71},0).wait(1).to({y:-39.4,startPosition:72},0).wait(1).to({y:-40.2,startPosition:73},0).wait(1).to({y:-41,startPosition:74},0).wait(1).to({y:-41.7,startPosition:75},0).wait(1).to({y:-42.5,startPosition:76},0).wait(1).to({y:-43.2,startPosition:77},0).wait(1).to({y:-43.8,startPosition:78},0).wait(1).to({y:-44.4,startPosition:79},0).wait(1).to({y:-45,startPosition:80},0).wait(1).to({y:-45.5,startPosition:81},0).wait(1).to({y:-45.9,startPosition:82},0).wait(1).to({y:-46.3,startPosition:83},0).wait(1).to({y:-46.6,startPosition:84},0).wait(1).to({y:-46.9,startPosition:85},0).wait(1).to({y:-47.2,startPosition:86},0).wait(1).to({y:-47.4,startPosition:87},0).wait(1).to({y:-47.6,startPosition:88},0).wait(1).to({y:-47.7,startPosition:89},0).wait(1).to({x:-20.6,y:-47.5,startPosition:90},0).wait(1).to({y:-47.3,startPosition:91},0).wait(1).to({y:-47,startPosition:92},0).wait(1).to({y:-46.6,startPosition:93},0).wait(1).to({y:-46.2,startPosition:94},0).wait(1).to({y:-45.7,startPosition:95},0).wait(1).to({y:-45.2,startPosition:96},0).wait(1).to({y:-44.6,startPosition:97},0).wait(1).to({y:-44,startPosition:98},0).wait(1).to({y:-43.3,startPosition:99},0).wait(1).to({y:-42.5,startPosition:100},0).wait(1).to({y:-41.8,startPosition:101},0).wait(1).to({y:-41,startPosition:102},0).wait(1).to({y:-40.2,startPosition:103},0).wait(1).to({y:-39.4,startPosition:104},0).wait(1).to({y:-38.7,startPosition:105},0).wait(1).to({y:-37.9,startPosition:106},0).wait(1).to({y:-37.2,startPosition:107},0).wait(1).to({y:-36.6,startPosition:108},0).wait(1).to({y:-36,startPosition:109},0).wait(1).to({y:-35.4,startPosition:110},0).wait(1).to({y:-34.9,startPosition:111},0).wait(1).to({y:-34.5,startPosition:112},0).wait(1).to({y:-34.1,startPosition:113},0).wait(1).to({y:-33.8,startPosition:114},0).wait(1).to({y:-33.5,startPosition:115},0).wait(1).to({y:-33.2,startPosition:116},0).wait(1).to({y:-33,startPosition:117},0).wait(1).to({y:-32.8,startPosition:118},0).wait(1).to({x:-20.7,y:-32.7,startPosition:119},0).wait(1).to({y:-32.9,startPosition:120},0).wait(1).to({y:-33.1,startPosition:121},0).wait(1).to({y:-33.4,startPosition:122},0).wait(1).to({y:-33.8,startPosition:123},0).wait(1).to({y:-34.2,startPosition:124},0).wait(1).to({y:-34.7,startPosition:125},0).wait(1).to({y:-35.2,startPosition:126},0).wait(1).to({y:-35.8,startPosition:127},0).wait(1).to({y:-36.4,startPosition:128},0).wait(1).to({y:-37.1,startPosition:129},0).wait(1).to({y:-37.9,startPosition:130},0).wait(1).to({y:-38.6,startPosition:131},0).wait(1).to({y:-39.4,startPosition:132},0).wait(1).to({y:-40.2,startPosition:133},0).wait(1).to({y:-41,startPosition:134},0).wait(1).to({y:-41.7,startPosition:135},0).wait(1).to({y:-42.5,startPosition:136},0).wait(1).to({y:-43.2,startPosition:137},0).wait(1).to({y:-43.8,startPosition:138},0).wait(1).to({y:-44.4,startPosition:139},0).wait(1).to({y:-45,startPosition:140},0).wait(1).to({y:-45.5,startPosition:141},0).wait(1).to({y:-45.9,startPosition:142},0).wait(1).to({y:-46.3,startPosition:143},0).wait(1).to({y:-46.6,startPosition:144},0).wait(1).to({y:-46.9,startPosition:145},0).wait(1).to({y:-47.2,startPosition:146},0).wait(1).to({y:-47.4,startPosition:147},0).wait(1).to({y:-47.6,startPosition:148},0).wait(1).to({y:-47.7,startPosition:149},0).wait(1).to({x:-20.6,y:-47.5,startPosition:150},0).wait(1).to({y:-47.3,startPosition:151},0).wait(1).to({y:-47,startPosition:152},0).wait(1).to({y:-46.6,startPosition:153},0).wait(1).to({y:-46.2,startPosition:154},0).wait(1).to({y:-45.7,startPosition:155},0).wait(1).to({y:-45.2,startPosition:156},0).wait(1).to({y:-44.6,startPosition:157},0).wait(1).to({y:-44,startPosition:158},0).wait(1).to({y:-43.3,startPosition:159},0).wait(1).to({y:-42.5,startPosition:160},0).wait(1).to({y:-41.8,startPosition:161},0).wait(1).to({y:-41,startPosition:162},0).wait(1).to({y:-40.2,startPosition:163},0).wait(1).to({y:-39.4,startPosition:164},0).wait(1).to({y:-38.7,startPosition:165},0).wait(1).to({y:-37.9,startPosition:166},0).wait(1).to({y:-37.2,startPosition:167},0).wait(1).to({y:-36.6,startPosition:168},0).wait(1).to({y:-36,startPosition:169},0).wait(1).to({y:-35.4,startPosition:170},0).wait(1).to({y:-34.9,startPosition:171},0).wait(1).to({y:-34.5,startPosition:172},0).wait(1).to({y:-34.1,startPosition:173},0).wait(1).to({y:-33.8,startPosition:174},0).wait(1).to({y:-33.5,startPosition:175},0).wait(1).to({y:-33.2,startPosition:176},0).wait(1).to({y:-33,startPosition:177},0).wait(1).to({y:-32.8,startPosition:178},0).wait(1).to({x:-20.7,y:-32.7,startPosition:179},0).wait(1).to({y:-32.9,startPosition:180},0).wait(1).to({y:-33.1,startPosition:181},0).wait(1).to({y:-33.4,startPosition:182},0).wait(1).to({y:-33.8,startPosition:183},0).wait(1).to({y:-34.2,startPosition:184},0).wait(1).to({y:-34.7,startPosition:185},0).wait(1).to({y:-35.2,startPosition:186},0).wait(1).to({y:-35.8,startPosition:187},0).wait(1).to({y:-36.4,startPosition:188},0).wait(1).to({y:-37.1,startPosition:189},0).wait(1).to({y:-37.9,startPosition:190},0).wait(1).to({y:-38.6,startPosition:191},0).wait(1).to({y:-39.4,startPosition:192},0).wait(1).to({y:-40.2,startPosition:193},0).wait(1).to({y:-41,startPosition:194},0).wait(1).to({y:-41.7,startPosition:195},0).wait(1).to({y:-42.5,startPosition:196},0).wait(1).to({y:-43.2,startPosition:197},0).wait(1).to({y:-43.8,startPosition:198},0).wait(1).to({y:-44.4,startPosition:199},0).wait(1).to({y:-45,startPosition:200},0).wait(1).to({y:-45.5,startPosition:201},0).wait(1).to({y:-45.9,startPosition:202},0).wait(1).to({y:-46.3,startPosition:203},0).wait(1).to({y:-46.6,startPosition:204},0).wait(1).to({y:-46.9,startPosition:205},0).wait(1).to({y:-47.2,startPosition:206},0).wait(1).to({y:-47.4,startPosition:207},0).wait(1).to({y:-47.6,startPosition:208},0).wait(1).to({y:-47.7,startPosition:209},0).wait(1).to({x:-20.6,y:-47.5,startPosition:210},0).wait(1).to({y:-47.3,startPosition:211},0).wait(1).to({y:-47,startPosition:212},0).wait(1).to({y:-46.6,startPosition:213},0).wait(1).to({y:-46.2,startPosition:214},0).wait(1).to({y:-45.7,startPosition:215},0).wait(1).to({y:-45.2,startPosition:216},0).wait(1).to({y:-44.6,startPosition:217},0).wait(1).to({y:-44,startPosition:218},0).wait(1).to({y:-43.3,startPosition:219},0).wait(1).to({y:-42.5,startPosition:220},0).wait(1).to({y:-41.8,startPosition:221},0).wait(1).to({y:-41,startPosition:222},0).wait(1).to({y:-40.2,startPosition:223},0).wait(1).to({y:-39.4,startPosition:224},0).wait(1).to({y:-38.7,startPosition:225},0).wait(1).to({y:-37.9,startPosition:226},0).wait(1).to({y:-37.2,startPosition:227},0).wait(1).to({y:-36.6,startPosition:228},0).wait(1).to({y:-36,startPosition:229},0).wait(1).to({y:-35.4,startPosition:230},0).wait(1).to({y:-34.9,startPosition:231},0).wait(1).to({y:-34.5,startPosition:232},0).wait(1).to({y:-34.1,startPosition:233},0).wait(1).to({y:-33.8,startPosition:234},0).wait(1).to({y:-33.5,startPosition:235},0).wait(1).to({y:-33.2,startPosition:236},0).wait(1).to({y:-33,startPosition:237},0).wait(1).to({y:-32.8,startPosition:238},0).wait(1).to({x:-20.7,y:-32.7,startPosition:239},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-281.4,-310.7,489.2,470.5);


(lib.Mixie_GetBack = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MasterclipBack("synched",0);
	this.instance.setTransform(-20.8,-32.8,1.469,1.469,5.8,0,0,-446.2,12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:-32.9,startPosition:1},0).wait(1).to({y:-33.2,startPosition:2},0).wait(1).to({y:-33.7,startPosition:3},0).wait(1).to({y:-34.3,startPosition:4},0).wait(1).to({y:-35,startPosition:5},0).wait(1).to({y:-35.8,startPosition:6},0).wait(1).to({y:-36.7,startPosition:7},0).wait(1).to({y:-37.8,startPosition:8},0).wait(1).to({y:-38.9,startPosition:9},0).wait(1).to({y:-40,startPosition:10},0).wait(1).to({y:-41.2,startPosition:11},0).wait(1).to({y:-42.4,startPosition:12},0).wait(1).to({y:-43.5,startPosition:13},0).wait(1).to({y:-44.6,startPosition:14},0).wait(1).to({y:-45.6,startPosition:15},0).wait(1).to({y:-46.5,startPosition:16},0).wait(1).to({y:-47.3,startPosition:17},0).wait(1).to({y:-48,startPosition:18},0).wait(1).to({y:-48.6,startPosition:19},0).wait(1).to({y:-49.1,startPosition:20},0).wait(1).to({y:-49.4,startPosition:21},0).wait(1).to({y:-49.6,startPosition:22},0).wait(1).to({y:-49.7,startPosition:23},0).wait(1).to({y:-49.5,startPosition:24},0).wait(1).to({y:-49.2,startPosition:25},0).wait(1).to({y:-48.8,startPosition:26},0).wait(1).to({y:-48.3,startPosition:27},0).wait(1).to({y:-47.7,startPosition:28},0).wait(1).to({y:-46.9,startPosition:29},0).wait(1).to({y:-46.1,startPosition:30},0).wait(1).to({y:-45.2,startPosition:31},0).wait(1).to({y:-44.3,startPosition:32},0).wait(1).to({y:-43.3,startPosition:33},0).wait(1).to({y:-42.2,startPosition:34},0).wait(1).to({y:-41.1,startPosition:35},0).wait(1).to({y:-40,startPosition:36},0).wait(1).to({y:-39,startPosition:37},0).wait(1).to({y:-38,startPosition:38},0).wait(1).to({y:-37,startPosition:39},0).wait(1).to({y:-36.1,startPosition:40},0).wait(1).to({y:-35.3,startPosition:41},0).wait(1).to({y:-34.7,startPosition:42},0).wait(1).to({y:-34.1,startPosition:43},0).wait(1).to({y:-33.6,startPosition:44},0).wait(1).to({y:-33.2,startPosition:45},0).wait(1).to({y:-32.9,startPosition:46},0).wait(1).to({y:-32.8,startPosition:47},0).wait(1).to({y:-32.7,startPosition:48},0).wait(1).to({y:-32.9,startPosition:49},0).wait(1).to({y:-33.1,startPosition:50},0).wait(1).to({y:-33.5,startPosition:51},0).wait(1).to({y:-33.9,startPosition:52},0).wait(1).to({y:-34.5,startPosition:53},0).wait(1).to({y:-35.1,startPosition:54},0).wait(1).to({y:-35.8,startPosition:55},0).wait(1).to({y:-36.6,startPosition:56},0).wait(1).to({y:-37.4,startPosition:57},0).wait(1).to({y:-38.3,startPosition:58},0).wait(1).to({y:-39.3,startPosition:59},0).wait(1).to({y:-40.3,startPosition:60},0).wait(1).to({y:-41.3,startPosition:61},0).wait(1).to({y:-42.3,startPosition:62},0).wait(1).to({y:-43.3,startPosition:63},0).wait(1).to({y:-44.2,startPosition:64},0).wait(1).to({y:-45.1,startPosition:65},0).wait(1).to({y:-45.9,startPosition:66},0).wait(1).to({y:-46.7,startPosition:67},0).wait(1).to({y:-47.4,startPosition:68},0).wait(1).to({y:-48,startPosition:69},0).wait(1).to({y:-48.5,startPosition:70},0).wait(1).to({y:-48.9,startPosition:71},0).wait(1).to({y:-49.2,startPosition:72},0).wait(1).to({y:-49.4,startPosition:73},0).wait(1).to({y:-49.6,startPosition:74},0).wait(1).to({y:-49.7,startPosition:75},0).wait(1).to({y:-49.5,startPosition:76},0).wait(1).to({y:-49.2,startPosition:77},0).wait(1).to({y:-48.8,startPosition:78},0).wait(1).to({y:-48.4,startPosition:79},0).wait(1).to({y:-47.8,startPosition:80},0).wait(1).to({y:-47.1,startPosition:81},0).wait(1).to({y:-46.4,startPosition:82},0).wait(1).to({y:-45.5,startPosition:83},0).wait(1).to({y:-44.6,startPosition:84},0).wait(1).to({y:-43.7,startPosition:85},0).wait(1).to({y:-42.6,startPosition:86},0).wait(1).to({y:-41.6,startPosition:87},0).wait(1).to({y:-40.6,startPosition:88},0).wait(1).to({y:-39.5,startPosition:89},0).wait(1).to({y:-38.5,startPosition:90},0).wait(1).to({y:-37.6,startPosition:91},0).wait(1).to({y:-36.7,startPosition:92},0).wait(1).to({y:-35.9,startPosition:93},0).wait(1).to({y:-35.2,startPosition:94},0).wait(1).to({y:-34.5,startPosition:95},0).wait(1).to({y:-34,startPosition:96},0).wait(1).to({y:-33.5,startPosition:97},0).wait(1).to({y:-33.2,startPosition:98},0).wait(1).to({y:-32.9,startPosition:99},0).wait(1).to({y:-32.8,startPosition:100},0).wait(1).to({y:-32.7,startPosition:101},0).wait(1).to({y:-32.9,startPosition:102},0).wait(1).to({y:-33.3,startPosition:103},0).wait(1).to({y:-33.8,startPosition:104},0).wait(1).to({y:-34.4,startPosition:105},0).wait(1).to({y:-35.2,startPosition:106},0).wait(1).to({y:-36.1,startPosition:107},0).wait(1).to({y:-37.1,startPosition:108},0).wait(1).to({y:-38.2,startPosition:109},0).wait(1).to({y:-39.3,startPosition:110},0).wait(1).to({y:-40.6,startPosition:111},0).wait(1).to({y:-41.8,startPosition:112},0).wait(1).to({y:-43,startPosition:113},0).wait(1).to({y:-44.2,startPosition:114},0).wait(1).to({y:-45.3,startPosition:115},0).wait(1).to({y:-46.3,startPosition:116},0).wait(1).to({y:-47.1,startPosition:117},0).wait(1).to({y:-47.9,startPosition:118},0).wait(1).to({y:-48.5,startPosition:119},0).wait(1).to({y:-49,startPosition:120},0).wait(1).to({y:-49.4,startPosition:121},0).wait(1).to({y:-49.6,startPosition:122},0).wait(1).to({y:-49.7,startPosition:123},0).wait(1).to({y:-49.4,startPosition:124},0).wait(1).to({y:-49,startPosition:125},0).wait(1).to({y:-48.5,startPosition:126},0).wait(1).to({y:-47.8,startPosition:127},0).wait(1).to({y:-47,startPosition:128},0).wait(1).to({y:-46,startPosition:129},0).wait(1).to({y:-44.9,startPosition:130},0).wait(1).to({y:-43.7,startPosition:131},0).wait(1).to({y:-42.5,startPosition:132},0).wait(1).to({y:-41.2,startPosition:133},0).wait(1).to({y:-39.9,startPosition:134},0).wait(1).to({y:-38.7,startPosition:135},0).wait(1).to({y:-37.5,startPosition:136},0).wait(1).to({y:-36.4,startPosition:137},0).wait(1).to({y:-35.5,startPosition:138},0).wait(1).to({y:-34.6,startPosition:139},0).wait(1).to({y:-33.9,startPosition:140},0).wait(1).to({y:-33.4,startPosition:141},0).wait(1).to({y:-33,startPosition:142},0).wait(1).to({y:-32.8,startPosition:143},0).wait(1).to({y:-32.7,startPosition:144},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-309.9,-330.7,527.5,514);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;