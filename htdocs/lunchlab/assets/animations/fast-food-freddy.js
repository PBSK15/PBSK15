(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.fastfoodfreddy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:0,idle_loop:299,Whatever:308,Whatever_stop:376,ProfessorFizzy:377,ProfessorFizzy_stop:556,SomePeople:557,SomePeople_stop:778});

	// anim
	this.instance = new lib.Freddy_Masterclip_IDLE("synched",0);
	this.instance.setTransform(-351.7,-4.7,0.981,0.981,-7.2);

	this.instance_1 = new lib.Freddy_Masterclip_Whatever("synched",0);
	this.instance_1.setTransform(-351.7,-4.7,0.981,0.981,-7.2);

	this.instance_2 = new lib.Freddy_Masterclip_ProfFiz("synched",0);
	this.instance_2.setTransform(-351.7,-4.7,0.981,0.981,-7.2);

	this.instance_3 = new lib.Freddy_Masterclip_SomePeople("synched",0);
	this.instance_3.setTransform(-351.7,-4.7,0.981,0.981,-7.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},308).to({state:[{t:this.instance_2}]},69).to({state:[{t:this.instance_3}]},180).wait(222));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.2,32.8,425,553.5);


// symbols:
(lib.Symbol1handss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AEYD5Qg/gLgxglQgHgFgIgEIg9AVQgYAJgbADQhEAEhGgMQgcgHgYgPQg0gggbg3QASgjAEhBIACgbIgCACIAAABIgBABQgFAEgFAAQgGAMgEASQgDAVgIAVQgMAhghAPQgHADgHAAQgZgBgRgTQgWgYgDgfQgFgtAOgtQAOgrAngaQAKgGAKgDQAmgKAfAZQAWATAEAeQAHAoATAhQAfA6BBAKQAiAFAYgVQANgNAIgPQASgeAGgkQACgQgSgoIgMAYQABAlgPAgQgIASgRAOQgHAHgJAFQglgDgcgVQgOgKgIgOQgkhGAWhMQARg9A3gfQAJgFALgDQAUgCAQAFQAdAbAGApIAEAaQAAAFAFAGIAFACQgBAFACAFQACAEAFADIAJAFIAEAAIAWgHQAMgjAOgiQAFgNAJgKQANgOAVgFQAMgDAMAAQAJAAAHAGQATAOAQASQASAUAIAZQAQAugDAwQgCAhgNAcQgGAMgMAHQgMAKgYAAIAAAAIgGAAQgTABgJgQQgJgOgFgRIgEgIQgJgXgFgRQgDAAgDADQgFAEgBAGQgHA0AjAnQAFAGAHAFQAMAIAOABIAIAFQAzAZAyAWQAvAWAYAuQAKAVgJASQgKAVgVAHQgPAFgQAAQgKAAgKgCg");
	this.shape.setTransform(81.4,-73.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C9").s().p("AEMD9QgogGgjgYQgTgOgVgMQgGABgGACIgrARQglAOgnAAQhKAFhGgYQgWgIgTgPQgUgPgRgSQgJgKgHgKIARgnIgBgFQAGgPADgQQgHgQgLgPIgGACIgEAKQgCAUgEATQgLAugUAMQgYAbgkgOQgLgEgIgJQgYgXgBgiQgDguALgrQAOg3A2gUQAJgEALgBQAfgEAZAWIAFAAQAYAUAGAeQADAOAIALQAbAsAxARQAXAJAagFQAagGAMgVQAQgWAKgYQASgwgRgtQgCgEgGgDQgFACgCAGQgEAOgBAPQgBAmgOAgQgKAXgVALQgMAHgPgEQgcgEgVgTQgfgZgIgoQgJguALguQAJglAWggQAMgTAUgNIAWgMQApgJAXAiQAHANAFAOQAFAPADAQIADATQACAHAFABIgBAIQADAIAHACIALAFIAGgBIAKgPIgBgHQAIgBACgIQAHgTAFgTQAJglAfgUQAbgQAcAIQAGACAEADQA4AzAKBKQAJBCgkA4QgGAHgLAEIgMADQgGADgKAAQghAAgPg4QgFgTgCgTIgGgDIgIAFQgNAoARAlQAQAkAlAFQAHANAIAKQAJALAQAGQA+AWA1AoQATAOALAXQAFAJAAALQgBALgEAKQgFANgKAJQgOAMgUAAIgIABQgPAAgRgEg");
	this.shape_1.setTransform(81.5,-73.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("ACqDRQgVgQgXAMQgUAMgWAGQhUAWhWgTQgtgJglgbQgjgZgOgnQAbgtgBg0IgBgGIgRgFQgLAqgQAnQgGANgIAMIgMAPQgQAHgRACQgfgEgSgcQgKgPgEgTQgLgvANgsQAJggASgaQASgZAfgFQAWgCAUAGQAJACAHAGIAqAmQAOA8A1AjQAdATAkABQAVgDARgNQAagVALgfIAKgkQAFgTgBgSIgCgaIgLgIQgTAugJAxQgHAcgZARQgSALgVgIQg1gUgUgzQgJgXAAgbQAAgsAOgqQASgzArgaQAXgNAbAFQAfAPAJAhQAIAZABAYQAAAEADADQADADAFADIAAAHQACAKALADQAGABAGAAIARgKIASg0QAVg4A7gBQAHAAAIADQAeARARAeQAMAXAHAaQANA0gLA0QgDAOgFAOQgGAQgOALQgUAPgYgDQgPgDgHgNQgLgSgHgWIgKgoQgMgBgCAIQgEATAAAUQAAAhAaAaQAQAQAYABIACAEIAAAMQADAEAEACQAXALAXAKQArARAkAXQAkAWALAkQADAKgBAMQgFAgggAHQgOADgNABQhKgDg4gug");
	this.shape_2.setTransform(81.3,-74.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD8C9").s().p("AEOD8QgogGgjgYQgTgOgVgMQguANgvARQgMADgNABQhGAGhHgRQgngJgcgcQgXgYgVgYQgEgGAAgHQgCgNAIgNQAJgPAFgSQAIgZgEgaIgIgGQgEANgMAYIgMAVIgIAYQgGAPgKALQgOAOgTAEQgIACgHgBQgOgFgLgJQgOgLgIgPQgIgQgFgRQgFgYADgZQAGgqAWglQAWgnAtgDQAJAAAJACIAwAQQAVAeAKAjQAOAtAlAdQAhAbAsgBQAjgGATgdQAWggAHgiQAFgggDgiQgJgIgJAFIABANQAAAIgKATQgEAlgRAgQgIAQgSAKQgOAJgSgGQgxgNgWgrQgQghAAglQABg6AbgzQAWgnAqgRQAVgHAUAJQAUAMAIAVIAGAUIAOA0IAEACIAEARIAHAEIAGgBIAGADQAIAJAKgCIAFgCQALgpATghQAGgJAIgIQAUgRAdgCQAagCAQAXIAYAjQAXAiAEAqQAEAtgKAtQgFAZgXAOQgLAGgNABQgVABgTgJQgKgEgDgLIgEgUQgFgGgDgMQgEgPgBgPIgIgBQgEADgBAEQgNAnAQAgQATAmAnALQArALAqARQAzAWAkAqQAQATgHAVQgNApgqADIgHAAQgQAAgRgDg");
	this.shape_3.setTransform(81.3,-73.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD8C9").s().p("ACjC/QgJgHgLAFQgiAOgkAHQgnAJgnAEQg1ABg1gQQgngMgcgeQgagcgXgdIAVg4IAIgXQAFgVgDgTQgBgFgDgDIgGgDIgLADQgHAqgUAnQgFAKgHAKIgHAJQgKANgPADQggABgWgaQgMgOgFgUQgThMAnhEQAQgcAegMQArgPAhAcIABAFQAfAcANAqQACAJgFAHQAQBCA+AhQAgASAkgHQAQgDANgNQA5g/gOhWQgKgKgIAMQgHAKgCANQgCAcgIAcQgGAYgSASQgKAIgLAFQgbgEgZgOQgVgNgNgTQgTgcgEgkQgIhVA3hDQAbgZAngEQAaABALAUQAWAgAAApQAAANAMAFIAAAIIACAFIAEAEIANAFIAHgDIARgBIAahGQAEgIAGgGQAcgcAoACIAOAGQAUANANAUQAkA1ABBBQAAAggJAgIgEASQgBAMgKAJQgQANgWAAQgbABgOgWQgHgKgDgLQgHgTgCgWIgCgKIgCgCIgMgCQgDADgCAEQgMAnARAjQARAlAoAHIATADQAKADALAAIAEgBQBHAYAzA4QAIAIADAKQAKAfgZAWQgNANgSABIgGAAQhTAAhBg3g");
	this.shape_4.setTransform(81.3,-73);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD8C9").s().p("AEYDuQglgEgegSQgbgQgegQQgEgCgEACQgLACgKAEQg9AdhFgDQgqgBgqgIQgxgIgngiQglgfgQgqQAJggANgcQAHgSADgQIADgbIgbgDQgFAygbAuQgGAKgMAHQgaAQgbgOQgbgQgIgeQgOg3AQg6QAThDBDgLQAYgGAVAMQAWAOAKAcIANApIAEASIACABQADBEA2ArQATARAVAGIAfAGQATABARgKQAhgVALgoIAKgiQAFgTgBgSIgBgaIgOgHIgLAFQgEANABAMQAAAPgDAOQgIAngYAhQgLAPgTgCQgpgFgbgdQgSgVgHgbQgWhmBAhTQAagcAmgBQAaAAANAVQAOATAFAYIAJApQABAGADAGIAEAIQAGAJALAAQAMgKALgLQACgDABgEIADgRIgCgFQAIgcALgaQADgIAGgFQAcgdAoAIQAMACALAIQAdAYANAkQANAiADAjQACAfgGAfQgFAWgKAUQgDAIgGAEQgIAGgKADQgaAJgWgSQgMgJgFgNQgKgagBgcQAAgFgEgDQgCgCgDgBIgIACQgIAHAAALQgDAnAUAgQAMAWAYAGIAeALQA6ARAyAiQAUAOASAQQAGAFAEAGQASAagOAcQgEAJgIAHQgJAHgKAEQgPAEgPAAQgJAAgJgBg");
	this.shape_5.setTransform(81.4,-72.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AEZEYQhMgIg4gzIgTAIQgdALgeAJQgWAEgVAAQgyAAgzgCQgkgFgigPQgSgJgQgLQgNgJgLgKQgegcgVgkQgNAKgSAEQgxAGgggmQgLgNgGgPQgXg7AMg9QAGggARgdQAeg2A6gJQA7gGAqAsQAFggANgeQANgeAXgZQAfghAsgGQAtgCAZAiQAjArgEA4IAEgNQAHgoAbgfQAVgYAggJQAogNAiAYQBSBOgEBvQgCAtgVAoQgLAXgYAJQAeARAeANQAtAXAiAlQAHAGAEAIQAbAzgjAuQgFAGgHAEQgeATgjAAIgTgBg");
	this.shape_6.setTransform(81.4,-73.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ADbEOQgegLgYgTIgRgNQghARgkAHQgfAHgfADQhFAChEgUQgTgEgRgKQgRgJgPgLQgWgRgSgXQgaACgVALQgIADgJACQgaAAgUgNQgdgUgNgjQgVg4ANg8QAQhIBAglQAOgIARgEQAigGAfAPIAMACIAMgKIAKgeQAIgeAPgeQARgkAigXQAlgaAsALQAiAKAQAgQARAfAEAkQAKgqAcghQAIgLALgIQAVgRAcgDIAcgBQAiANAVAhIAXAlQAdAwAAA2QABA8ggAyQgLAUgXAIIgSAGIAHAJQA9AVA1AiQAfAVAVAcQAHALAEAMQAEAOAAAOQAAAggVAWQgGAHgJAGQgaAOgfAAQgpAAgpgRg");
	this.shape_7.setTransform(81.5,-73.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ACTDmQg8AhhEACQgiABglgEQgnABglgPQhDgbgqg7IgLgBQgTAOgYADQgoABgcgfIgNgQQgSgZgEgfQgKhOAqhGQAJgPANgLQAlgeAxABQAZADAYAIIAUAOIgCgQIADgEQAEgiAPghQASgnAggeQAggeAsAAQAmADAWAgQANASAGATQAJAcABAYQAJggARgcQAOgXAagPQAwgaAtAZQA5A1ARBKQAOBAgUA+QgIAWgSAUQgRATgbACQA+AYA3AhQAfATAYAaQAPAPACAUQAEAjgTAeQgNAXgaAHIgdAEIgKAAQhZAAhDg7g");
	this.shape_8.setTransform(81.5,-74.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AEaEdQhMgHg6g0IgWAJQgXAJgXAGQhhAXhkgcQgggIgZgSQgpgdgbgqIgHgBQgOAKgTAEQgXAEgVgIQgigPgTgiQgFgKgDgLQgRhCATg/QAMgrAjgdQAMgKANgGQAxgWAzAWIAFgDIAaANQAFgZAIgZQAFgQAIgQQAdg1A3gZQAegJAcAJQAPAHALAMQAmAtAAA+IAJACIAGgZQAIgdAagWQAfgaAqgBQASAEANAJQBFAwARBQQAFAXgBAXQgBAZgDAaQgHAygnAeQARAHAQAJQAhARAeAWQAVAPARAVQAaAfgKAoQgJAlghANQgbAKgcAAIgOAAg");
	this.shape_9.setTransform(81.5,-73.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AEDEQQg8gQgxgnIgZAMQg8AahBgCQhDgChAgXQgRgGgPgJQg5ghggg6QgwAfgvgjQgkgcgJgrQgLgxAOgzQANgwAhgkQAPgQAUgHQA7gUA4AfIADAJIAQANQAHgiAQgfQASgkAigaQAegWAkAAQAmACAXAgQAfArgEA2IAFABQADgQAFgPQAFgOAIgMQAggxA6gFQANAAANADQAIABAIAFQAXAQAPAUQAYAiAMApQAXBIgXBFQgKAggZAUQBBAXAxAtQAiAfgCAqQgBAXgMATQgSAbgfAFQgSAEgRAAQgVAAgVgFg");
	this.shape_10.setTransform(81.3,-72.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AEEEIQhAgOgvgqIg0AUQgTAHgUACQhMAMhNgPQglgFgggUQg9gngfhCQgWAPgagCQgmgFgZgdQgXgbgDgiQgCgZABgcQAEg2AbgvQAMgTASgRQAQgQAYgCQAXAAAWADQAWAEATAKQAYANAOAcQANg3AmgpQARgSAWgMQAkgSAmAOQAOAHANANQAdAgAHArIAHgfQAIgdAXgUQAMgKAOgHQAUgIAWACQAUgFATAIQAeANASAbQAOAVAKAWQAWAygDA3QgCAdgGAcQgIAoglAWIAdAOIA3AcQAfAQAVAcQAZAigJApQgEATgMAPQgUAYgdADQgOACgOAAQgUAAgUgEgADXAkIAAgBQgFAAAFABgAiqh3IABgHIgGgIg");
	this.shape_11.setTransform(81.4,-72);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41.7,-101.5,79.4,56.4);


(lib.FRE_prof_pupil_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAMQgDgIABgGQAAgLACgFQAFgJAOAAQANAAAGANQAEAHAAAHQAAANgBAEQgDALgNAAQgUAAgFgQg");
	this.shape.setTransform(-4.9,-0.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.2,-3.4,4.7,5.8);


(lib.FRE_prof_nose_v01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AilFaQglg2AAiiQAAiIBKhzQBChnCmiUQBEBZATBaQAMA3AACDQAABSgIBOQgIBMgMAcIgHAAQgYAAhjA6QhgA6g/AAQghAAgSgbg");
	this.shape.setTransform(1.5,-0.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ai4FKQghhOACh0QADh1ATgzQAUg1AnhSQAnhSC2iVIAhAUIgHgCIAEAEQBEBZATBZQAMA4AACCQAABTgIBNQgIBNgMAcIAAAAQAEATh5A+Qh6BBg6AAQgtAAgehFg");
	this.shape_1.setTransform(0.1,0);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.4,-39.8,43.3,79.9);


(lib.FRE_prof_hat_v01 = function() {
	this.initialize();

	// f
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB465F").s().p("AhRC2IAShxIArkBIBBgDQAmgCAAAfQAAAPgGAQQgBABglAEQgkAFgDABQgKAIgIAbQgMAhAAAwQAAAVAIAGQAEADAMAAQAXAAATgCIAAASQADAVgUAMQgKAGgZAGQggAHgDAuQgCAugdAGg");
	this.shape.setTransform(1.8,-7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D871").s().p("AglBHQgZgDgHgCQAxhqATghQBHApAAAIQgdBXgGAEQgWAHgRAAIghgDg");
	this.shape_1.setTransform(20.3,40.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8DA8BC").s().p("AhXFOIgjgWQAnh3ApisQAnihgIhOQgIhOgGgVQgHgWgbgRIgBgCIAGADIAeAFQAbAKAuAWQAqATAAAGIAUAXIADAJQAJAZAAAEIgDBGQhBDlgNAnQgKAfhSDeQgGgFgfgUg");
	this.shape_2.setTransform(33.5,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#300F14").s().p("AheDVQAAghAFgLIAShyIArkBIADgQIAbgEIAigCQAkAAANAKQAKAIAAAUQAAAmgMAPQgOAQgoADQghACgGAoQgBAvgFAOIAegBQAVAAAJAJQAHAGAAARQAAAlgMAQQgUAbg6ABIACAXIgDAYIgEAYQAAAGgGAJQgGAJgKAFIgHACQgSAEgBgBIAAATQgCgCAAgKg");
	this.shape_3.setTransform(2.6,-6);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7596A8").s().p("AgCBKQh/hBAAhQQAAgXAKgNQAKgPAVAAQAQABAkA2IAkA2QAKATA7A0QA3AxADAOIADABIgFAAQhBgPg+ghg");
	this.shape_4.setTransform(-23.6,27.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#A4C5DB").s().p("AA1FRIgjgVQhrglgrgFQgpgGhbAKIAEhtIAAAEQgBgDAAgKQAAggAFgMIAShxIArkBIAEgWQAEgrBEgYQA2gSBCAAQATAAAiAFIAbADIgBgBIAGACIAdAGQAeAJAuAWQAqAUAAAFIAUAYIADAJQAJAZAAADQABAMgBAXQAAAWgDAOQhBDkgNAnQgKAghUDdQgGgFgfgUg");
	this.shape_5.setTransform(19.3,-0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF7F").s().p("AAqHKQgZgDgHgCQg0gNgvgQQhVgdgYgZIAEhaIAigJQAWgEAlAAQAOAABDAPQBJARAZANQBJApAAAIQgdBZgGAEQgWAHgTAAIghgDgAB+mhQACgMACgeQAKgCATABQAUABAUAEQgCACgGAWIgIAbIg5gNg");
	this.shape_6.setTransform(12.2,2);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAtHaQhCgQhGgaQgJgDgPgKQgNgJgEgBQg3gNgDgBQhyguglgWQhlg/ABhOQAAgVAKgWQARgkAgAAQApAAAaAfQAIAJAiA7QAZArAdAbQAuAqAWAZQAVlKAhi2QAQhbAOgnQAFgmAtgiQA5gtBgAAIAlABQgGhJA9AAQBHAAAAAsQAAAKgOAuIBLAiQBSAzAAA5QABA5gTBSQgTBSg8CmQhdEHgfAzQgQAbgSAFQgGACghAAQglAAhCgPg");
	this.shape_7.setTransform(4.4,1.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.8,-47.7,88.6,97.9);


(lib.FRE_prof_hair_v01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292837").s().p("ACyFvQgVgNAAgFQAAgGADgFIABgEIAMgCQAEABATALQAQAJALAAQASAAARgMQAXgRAXgHQgUAkgfARQgTAKgQAAQgQAAgYgNgAiTAXQgTgSgGgPQADgLAJgCIAgAcQAVATATAAQARAAAIgLQANgUAPgVQAKAAgBAUQAAAZgRASQgQARgWAAQglAAgdgdgAmqjNQAAgMAOghQAUgrAVAAQAGAAAHACIAFADQgWAdgPAXQgLARAAACIAPAQQAPARAAACQAAAGgDAEIgDAEIgUADQgZgPgEgZgAGNj0IgEgEQAHg6gEgPQgJghgxgKIACgBIARgKIAJgEQASAAASAOQAZATAAAiQAAAcgJAVQgEAIgLAQQgDgBgDgEg");
	this.shape.setTransform(-13.7,1.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2B2B3A").s().p("AjOH1IAFgFQASgNAHgHQAbgZAAg3QgJhRAAgKQALgLALgNQAXgZAAgbQAAgXgOghIgNgeQAAgGACgBIAHABIAOAIQAKAHAGAAQArAAAZgUQAXgUAAghQAAgPgJgcQgCgIgNgcQgNgcAAgCQAAgGAxggQA0ggAAgcQAAgkgsgzIgqgzQAAgKA1g0QA2g0AAgmQAAgRgFgSIgTg0QAXgDAvAdIASALIAAAAIADALIAFAmIAAAJQAAAVgMAUIg6BeIALADIgEAGQAQAAAOACIAFABIAFACIADAAIABABIACAAIAWAHIAFABIABAAIAPAJQAcASAGAaIAAAHQAAAMgCALQgEAPgKAXIAAABIgGAJIgjAwIgPASQAoAoAMAPIAIAKQAKAPACALIAAAFQAAAPgNAWQgTAigyAxQAbAgAKAOQALASAAATQAAA4hIAgQgfAOgiAMIgLABIAAACIgDABQgIAMAAAbIAAACIAAADIAAABIAAABIgDAOIgEAIIgBAAIgHAIQgTAOgsgDIgIgCQgTgEgMgHQgWAogaASQgTANgRAAQgHAAgMgGg");
	this.shape_1.setTransform(27.2,4.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39394F").s().p("ACjJLIgOgHQgWgOgQgRQgjAbgvAAQglAAgVggQgSgbgEg2IAAgFQgSAKgsAKQglAAgOgxIgJgiQgGgQgMAAIgUAIQgXAHgRAAQgZAAgNgtQgNgqAFgwQgqgDgngaQgmgaADgXQgKAGgzgRQgygRAMhCQALhBgIgNQgHgLgHgDIgagQQgDgEgMgeQgNgfAAgHQAAgaAigdQAogiABgCIgfhcQAcg4AUgVQAngoA+AAQAQAAAgAIIAdAHQAQAAABgZIACg3QAKhQBqAAQAFAAAiAKQAiAKAFAAIAwglQAzglAeAAQAXAAAVATQAUARAOAfQASAkApgXQAMgHAWgPQATgMALAAQAdAAAUAUQAcAcgJA3IAXgCQBpgRAsAgIADADIAaAhIAFANIAAAAIAEALIAEAmIABAJQAAAUgNAVIg5BdIALAEIAAAAIABAAIAAAAIAEACIAMADIAIADIAFABIAFABIADABIABAAIACABIAWAGIAGACIAAAAIAGACIALADIAAAAQANAGAKAQQAHANACAMIAAAHQAAAMgCAMQgEASgJASIAAABIgBABIAAABIgFAJIgkAtIgPASQAoApAMAPIAJAMQAJAOACAMIAAAEQAAAQgMAWQgUAigyAxQAcAfAJAPQALASAAASQAAA4hIAhQgeAOgjALIgLAEIgDABQgHALgBAcIAAABIAAADIAAABIAAABIgDAOIgEAIIAAABIgEAFIgEAEIAAABQgGAFgJAEQgJAEgJAAQgPAAgRgEIgIgCQgSgFgNgGQgWAogaASQgTAMgRAAQgHAAgMgGg");
	this.shape_2.setTransform(-9.9,-4.5);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ACBJmQgSgQgJgFQgDALgPADQgOAEglAAQgnAAgbgeQgTgUgag5QgGADgOADQgOADgHAAQgcAAgYgWQgagZgHgoQgaAPgSAAQgfAAgYgfQgagiAAg0QAAgNADgaQgOAFglgfQgrglgYgGQg+gPgRgbQgNgXAAhCQAAgSAKgyQgbgDgcgcQgigjAAgrQABgbAQgdQATgkAfgFQgJgJgGgYQgEgUgBgLQABhVBDgyQA1gnA6AAIBCAFQgFg3AsgsQAvgvBHAAQAMAAAaAHQAaAIAGAAIA7gkQA+glATAAQAsAAAZAVQAcAYAMA0QAggaATgKQAYgMAeAAQAmAAAQAXQAPATAGAyQAAAJAHgBIASgFQAIgDARgDQAQgDAHAAQApAAAzAwQA4A3AABDQAAAPgLAaQgQAkgeAlQBBgBAcAfQAXAYAAAtQAAAmgZAuIgaAtQAAAGAbAiQAbAjAAAaQAAAigXAYQgkApgNAXQAPANAKAjQAIAcAAASQAAAagLATQgKARgXASIg3AsQgXAQgNABQgmADgHAbQgKAngHAGQgYAVgxAAIgeABQgEACgQAZQgGAIgQAHQgUAJgSAAQguAAgWgNgAF5IDIgDAFIAEgFIgBAAgAIyguIAAABIAAgCIAAABgAIXilIgHgCIABABIAGABIAAAAgAH+l+IgGgOIAGAOIAAAAIAAAAg");
	this.shape_3.setTransform(-9.9,-4.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-67.1,123.2,125.5);


(lib.FRE_prof_face_v01 = function() {
	this.initialize();

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B8AD").s().p("AJ1GvQAjkTAAhoQAAhagaiRQgfi0g3iNQg7iZhEhQQgYgdgigeIg6gyQBdAKBnA0QBoAzAyBSQA2BFA8CyQA9CygEDhQgDDfg1D9Qg1D+gJAKQgJAKgGAEIgMAIQgsAphbAtQAmhrApk1gAs9F9QA/g2AbgFIAEADQABACAAAHQAAAPgTAXQgcAhgtAAQgDgOAAgKg");
	this.shape.setTransform(14,-7.1);

	// mouth
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C9").s().p("AoAOgQh/gXg1guQgYgVgZhtQgbiEgOg3IAqABQAMAAANgCQARgEAAgHQAAgHgDgWQgFgggIgfIArgFQAIASAFAvQAKAlAjAAQA3AAARgJQAOgIAAgWQAAgKgDgMIgNhBIAlgKQAOBCAVAVQALALAXAAQAqAAAZgQQASgLAAgIQAAgogDgUIgLgwQA3gQAKgHQAIgFAAgOIgBgLIgBgBIgJgBQgOAAg3ASIi6A9IhFAOQhWAPhaAHQgThugHhXQgFhBAAhTQAAjmAaiMQAUhxAzhyQBTiVBZhKQBahKCSgzQCRgzBkgOQAkgFAkABIA6ACQDjAACLAtQA/AVBgA7QBtBDBJC9QBUDbAAEyQAABNgLBaQgJBMgWB6QgaCQgKAtQgeCKgXAVQhOBKiaA+Qh/AzhMAJQhyAchbAQQinAfiYAAQiWAAhsgTg");
	this.shape_1.setTransform(13.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ai7BJQgOgPgDg4IAugCQARA1ABARQgDAJgPAAQgXABgGgHgAhDgLIBQgOIAQBOQgVALgzAAQgLAAgNhLgACUAYQgYgBgIgWQgIgdgKgUIBegeQAOBEAAAFQAAAOgLAHQgMAIgcAAIgHAAg");
	this.shape_2.setTransform(-45.2,44.2);

	// face
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ArNNuQgbgUgMgvQgLhBgJgpQgpi8gMg/QgmjeAAixQAAjuAkioQAhiZBEhsQCUjsFAhXQCZgpCiAAQC4AACAAgQCcAoBoBdQD0DcAAIxQAABPg+GNQgYChgnBJQghA8hCAjQi4BjkUA2Qj9AykLgBQj/ABh/hkg");
	this.shape_3.setTransform(12.8,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-74,-97.7,173.8,195.6);


(lib.FRE_prof_eye_v01 = function() {
	this.initialize();

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AgQCNQAMgYADgTQAEgjAAgeQAAgzgPguQgMgcgMgVQgCgEgXgVIgMgNIAFgCIAOgEQA5gKAoBFQAgA3gBAuQAAAwgSAkQgHARgVAWQgbAdgZAEIAIgSgAAACQIAAAAIAAgBgAgxiVIAAgBIgBAAg");
	this.shape.setTransform(1,-4.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A6760").s().p("AgyALQgTgLAAgFQAAgOAEABQAEAAASAFQASAFAVADQASAEAvgQQAOgHgJAUQgJASgtAFIgVABQgcAAgNgJg");
	this.shape_1.setTransform(-0.7,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhOB2QgdgqAAhAQAAgQAEgcQAEgeAFgPQAKggAJgNIADgEQAFgHAHgFIABgCIAOgJIAFgCIAGgCIAOgEQA5gKAoBFQAfA3AAAuQAAAvgSAlQgHARgVAWQgcAdgbAEIgHABIAAAAQgwAAgegqg");
	this.shape_2.setTransform(-2.3,-4.8);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcC9QgzgLgcgyQgbguAAg8QAAhEAPgrQAHgWALgRQAbgrAwgQQAogOAsAoQAiAdANAgIAAABIAAABQAeAzAAAzQAAAjgDAQQgEAagPAYQgVAjgPAQQgMAMgOAIQgYAPgbAAIAAAAQgOAAgOgCg");
	this.shape_3.setTransform(-2.2,-4.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.8,-24.1,27.1,46.5);


(lib.FRE_prof_ear_v01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAHA+QgOgsgJgLIgWAuIgKgBIgBgFIgBgHQAAgeAegiQAdgmAcAAQAMAAACAIIAAARIgXgBQgQAEgUAdQAJAGAJAQQAJAPAAAGQAAAHgLASg");
	this.shape.setTransform(-1.1,0.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8B8AD").s().p("AgsAyQgNgWAAgQQA8hZAXAAQALAAAKASQALAUAAAZQAAApgWAcQgSAXgUAAQgZAAgRgcg");
	this.shape_1.setTransform(0.1,3);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("AgjB1QgigcgEgCQgDABgCADQgCAEABADQgIgMgEgNQgIgXAAglIAFgZIAJgqIADABQAHgBAqguQAlgqAqAAQA2AAAACRQAABHgcAmQgYAegjAAQgSABgegag");
	this.shape_2.setTransform(-0.5,0.7);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0CYQgdgVgNgiQgIgMgEgNQgIgXAAgmIAFgYIAJgqIgEgBQgCgBAAgHQAAgaAugmQAxgqAsAAQApAAAWAtQATAmAAA7QAABjgbAyQgcAyg8AAQgZAAgbgTg");
	this.shape_3.setTransform(0.9,0.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-10.6,-16.3,23.2,34.4);


(lib.FRE_prof_brow_v01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhcgZIgCgIQARgLAVAAQAXAAA3AcQA8AcANAWQgCAIgLADQgbgciTgqg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.5,-4.5,19.2,9.1);


(lib.FRD_MODEL_part_051 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D871").s().p("AhqHhIAAgDIA5iaIAUAAQBNgCAFgIIgDAKIgCAEIgIAaIgBACIgCAGIAAABQgPAogWArQgVAjhSAAIgDAAgAAsmDIAFgPQANgnALgnQAKADAHAEQAOAHADADIgVBZIgQACQgMgIgOgHg");
	this.shape.setTransform(63.3,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DA8BC").s().p("AhcDLQB1lCAAhWQAAg3gYgfIgCgFIABgBQAEgKAHgfIABgDQAiAKAcAOIABABIABAAQAfAUAZAaQAJAPACATQACAVgGAbQgnCxhFCqQgdBDgZBGQgGAQgDAMQgDANhnAFIgFAAIAziLg");
	this.shape_1.setTransform(73.8,45.1);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A1A1A").s().p("AgBgNIAAgBIADAdg");
	this.shape_2.setTransform(66.5,93.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7596A8").s().p("AhjgRQgMgYAFgVIAAgFQAAgdATgdQAUgdAbgKQAwgRAiA8QAKALAKAOQARA7AbAzIACAEIAAAfIAAABIgBABQgLBIAEAnIAAAHQiCgzhFiHg");
	this.shape_3.setTransform(18,75.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4C5DB").s().p("AgaFlQg2gBhIgUQg5gPhEgcIACgPQADgqAFgqQANhrAPhoQAOhmAZhlQAJgmALgeQALgfATgUQAJgJANgCIAwgHIAFAAQAmAAAgACIAeAEIAGABIgCAJIgKAmIAPAFQApAOA1AEIADgBIADgBQAFgKAGgfIABgDQAiAKAcAOIABABIABAAQAfAUAZAaQAJAQADASQABAVgFAbQgoCwhECrQgeBDgbBHQgGAPgDAMQgDANhkAFIgGAAIgFAAIAAAAIgGABIgGgBg");
	this.shape_4.setTransform(60.4,43.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF7F").s().p("AAAHjIgWgBIgFAAIgdgCQhXgIghgVIgSgNQgUgSABgNIAAglQAAgRAGgjIADgOIAAgBQAEgUAGgNIAAgBIAOAIQAbALA/ARIAKACQA9APA4ADIAUABIAUAAQBPgCAFgHIgEAJIgBAEIgJAaIgBACIgCAHIABAAQgQApgWAqQgXAjhSAAIgCAAgACIl5IgLgGIAchgIAFgDIAWAEQALADAHAEQANAIAEADIgVBZIgQACIgDAAQgUAAgTgIg");
	this.shape_5.setTransform(52.5,49.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(41,43,51,0.18)").s().p("AgQAvQAAgBAAgBQgBAAAAgBQABAAAAgBQAAAAABgBIADAZIAAAAgAARhCIAAAAIAAgBIABABIgBAAg");
	this.shape_6.setTransform(67.7,85.2);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiXHTQiKgehOhmQh5ieBwhlQBvhkBRC9IAHAOQACgiAFgiQAPhvAYhvQAWhjAQhlIADgNQALgcAKgoIALgPIAFgFIABgCQAbgnBuABQAsgFAsAFQAMgqAGgJIAFgJQA3AFAWANIAaAPIgOA5IAfAOQAiARAZATIAMAGQAgASAJAlIACAPQAFAwgNA0QhCDkhSDnQgIAPgEAPIAAABQgNAagOAjQgYA2gQAqQgJATgFARQgCAEgHAEQgVALggADIghABQghAAgzADIgBAAQhHAAhRgug");
	this.shape_7.setTransform(47.2,49.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.1,-1.3,86.4,102.7);


(lib.FRD_MODEL_part_050 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B3A").s().p("AEqI5QgrgugDAAQgKAAgHAIIgQASQgaAbg2AAQhGAAgjgyIgTgjQgKgQgHAAQgFAAgPARQgPAQgvAAQg4AAglgtQgbgtgIAAQgEAAgVAJIgdAMIgJADQgDACgHAAQgYAAgLgEQgWgFgHgSQgIgUgIgDQgHgEgaAFQg0ALgmggQgkggAAg1QAAgLAUgwIAVguQAAgJgRgPIgmgfQg3gyAAg6QAAgWAegZIAdgaQgOgUgOgYQgdgwABgbQAAgSAQgRQAZgaAxgCIACgCIgVg2QgPgmAAgrQAAgvBEglQAigTAigKQAAgMgCgDQgDgEgOgFQA3glBLgcQBsgpBoAAIA2AKQA4AKANAFQgUgEgJAAQgfAAgKAGQgFAEgBAKQABAKAJAEQAKAEAVAAQAjAAAbAPQATAMAIAPQgZADg2AWQhDAcgBAZQAAA+AbAmQgCAEgUAJQgZALgNAIQg2AiAAA7QAAATAMASQAKAOAuA4IgeAdQgYAXgUAyQgQAoAAATQAAAEANAYIAVApQAGAMATAMQATAMAWAEQgKARgPA1QAAA6AxAZQAqAWA2gPIAAAqQAAA5AfAcQAdAZAxAAQATAAAegKQAcgKANgJQAEAFAMAXQAPAaAUAUQA/A8ByAAQAUAAAOgCQAjgHAggUQgCAigwAOQgpAMhYAAQg/AAg2gug");
	this.shape.setTransform(62.2,71.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39394F").s().p("AlBJSQgqgvgEABQgJgBgIAJIgQASQgaAbg1AAQhHAAgigyIgTgkQgKgPgJAAQgGAAgPAQQgPARguAAQg4AAgmgtQgbgtgIAAQgDAAgVAIIgeAMIgJAEQgDABgHABQgXgBgMgDQgVgFgIgSQgHgUgJgEQgHgDgZAFQg1ALglghQgkgfAAg1QAAgMAUgvIAUgvQABgJgSgOIgmgfQg2gyAAg6QAAgYAdgYIAegZQgOgUgPgYQgcgwAAgcQAAgRAQgSQAZgZAxgDIADgBIgWg3QgOglAAgrQAAgvBDglQAjgTAigKQAAgMgDgDQgCgEgOgFQAqgQArgYIBAgmQBGgmBTAAQAOAABBANQBBAOAYAIQgXgEgKAAQggAAgKAGQgGADAAALQAAAJAKAEQAKAFAXAAQAyAAAaAWQAUAQgBAUIAmgTQDhgwAmA5IAVApQAKATAJABQBMhEAhgQQAmgSBBgBQBRAAAyApQAdAYA0A6QAYgVAmgwQAqgjBIgBQAyAAAVAiIAOAZQAJAMAOADQADgBAAgLQAAgLgIgUQgHgRgGgJQAegeAcgOQAVgKAQAAQAKAAAaAIQAZAIAKAAQAKAAgEgCIADgGIABgKQAAgEgHgHQgIgIgIgFQANgSAjgTQAmgUAXAAQAdAAAtAWQA1AaAAAbQAAAGgCABQgFACgGAGQBMACAjAOQAlAPgBAeQABAdgLAKQgMALgBAIQA7ALAgAgQAiAgAAAzQAAA1gSAjQgSAiAAADQAAAHACABIAHABQAgAAAfAhQAbAcAAALQAAAggdAkQgeAiABAFQAAAFAEAFIAVARQAMALALAOQAPASAAANQAAA5hAAxIgsAeQgVAOABAIQAAAKAUAuIAUAvQAAA8gqAdQgfAVgsAAQgEABgYgFQgXgFgFAAQgQAMgTALQgnAYgpAAQgYAAgzgZIgvgZQgKAAgIAUQgHAMgNAfQgfBAg3gBIgggVQgfgVgBgBQgGAAgKAOIgZAdQgpArg6AAQhLgBgVgdIgKgVQgEgJgJAAQgIAAgKALQgSAWgFAEQgpAlhVAAQgvABgcggIgSgWQgJgKgIAAQgOAAgEALQgJATgCAEQgcAhiLABQg+gBg3gtgAnfnqIABAAIgHAEgAmwoAQAtgVg0AZIAHgEg");
	this.shape_1.setTransform(124.2,68.7);

	// Symbol 61
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkiKDQgygWgggkQgQAPgeAMQgiANgcAAQhOAAgigqQgVgrgNAAQglARgmAAQg8AAgkgbQgYgUgVgrIgzAUQgJADgPAAQgiAAgYgVQgYgUgeAAQhSgBglg5QgWgkAAgvQAAgfAFgPQAEgPAUglQg4ghgbg+QgRgoAAgdQAAgNAVggQAVgcAAgIQABgCgFgJIgKgVQgdg9AAgYQAAg2AqgTQAYgKAaABQgXgUgMgsQgJggAAgSQAAgdASgdQAQgeAagOQAdgRAkgKIAegIQABgEAsgWIBUgrQAdgQAugOQA4gRArAAQAiAAA9AQIBSAUQAHACAeATIAdAUQADAAA3gbQA3gbBDAAQAvAAAYAPQAfAUAkBBQAKgBAegdQAggfAjgIQAPgDApgFQApgEATAAQAtAAAvATQA+AZAvA1QAPgFAQgOIAdgbQApghA6AAQARAAAhAIQAhAJANAJQADgHAYgXQAdgcASgJQARgGAagEQAUgCABgBQAAgWA6gZQA5gYAvABQATAAApASQAnAQAOAMQAKAKAEAOQADAHAPABQAzACAjAcQAlAeABAvQgBAKgHAZIARAGQAWAHAQAMQA2ApgEAxIgGBFQgCATgQAmQAYAHAaASQArAgAAAwQABAhgXApIgWAhQAAAEAYAfQAYAeAAARQAAAxgmArIhQBIIAZA1QACAHAAAYQAAA3gRAgQgaAxhAAMQgVAEgegCIglgDQgLABgLANQgOAPgHABIgXAGQgQAEgHAAQg7AAgtgPIgqgTQgFA0gmAgQgkAfg3AAQgYAAgSgMQgGgEgNgNQghApgjAQQgfANgyAAQg3AAgdgQIgggcQgTAUgvATQgzAVgmABQhPAAgjg2QgUAaghANQgpARhBAAQhFABg3gYg");
	this.shape_2.setTransform(124.4,68.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2.2,248.7,133.4);


(lib.FRD_MODEL_part_045 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C2C2A1").s().p("AvhHDQgKgRgKgMQgSgWgPAAQgoAAgPgRQgRgRAAgrQAAg2AmgTQgIgKgGgPQgKgUAAgKIAUglQAAgFgFgSQgEgSAAgFQgBgRASAAQAPgBAMAMQACACAFAUQAGATAOANIAgAkQAmgdAbgKQAjgOAIAAQATAAAOAPQAOAPAAARQAAAlgbAfQgPATgoAnIAoBIIACAHQACAJAAAGQAAAegYARQgUAPgaAAQgkgEgOgRgAPRGpQgwgeghhCQgJgUgagmQgXghgEgEQg8g4gJAAQgIAAgDACQgFACABAHQAAAIALA2QALA1AAAQQAAAhgJAQQgOAZgkAAQghAAglghQgpgkAAgnQAAgQAQgnQAOgnAAgGQAAgLgDgKQgGgUgNAAIgmARQgnAQgmAAQgVAAgggJQgfgJgNgKQhEg+AAgSQAAgZASgeQAagqA0AAQAbAAA5AeQA4AgAvAAQARAAAPgPQAOgPAAgMQAAgIgEgJQgEgLgQgUQgSgagUgSIgZgYQgQgRgQgiQgNgbAAgEQAAgqA+AAQBmAAA/A/QA/A+AABjQAwhHAJgJQAvgwBIAAQArAAAeAXQAaAVAAAYQAAAdgNAUQgNAYgWgDQhIAHggAGQg4AIgzAVQABAHgNAAQAIABApgGQArgHAMAAQA7AAAdAaQAUATAAAZQAAAWgeARQgYAPgQAAIgJgBIgCgBIhwgoQCbBgA4AwQBEA8AAAzQAAApgcAYQgYAUgdAAQgeAAgfgVgAFnmDQAAgdAegRQAagPAmAAQAmAAAbAOQAcAPAAAbQAAAtgkAdQgeAYggAAQhYAAgBhdgAD7mZQgLgMAAgGQAAgHAIgQQALgVAPAAQATAAAKARQAJAOAAALQAAAcgaAJQgTAAgQgRg");
	this.shape.setTransform(140.3,158.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AqPQ0Qlgghl6iAIACgzQgKhQAAgKIgKjmQAAkYAnjWQA3kqCMkMQBzjZCBisQAPgVBziJQAIgKAOgOQAVgUALAAQAHAAALAOQAJAMAAAFQAAAIgRAaQgUAegMAAQgPAAiBCwQhQBtgnBIQggA6AAAXQAAAeC0AhQBdARCCAUQBJARFDAMQCiAFCSADQgEAAgCABQAaAIEqgPQFMgSB5gTQDGgfAAgZQAAgWgjhOQgjhPgxhUQh+jdhFgMIBBgiQAOAAAQAXQAJAMAPAaQAKAPBABVQBHBkA1BrQDLGYBYE3QBcFDAAFEQAABmgEAhQgFAmgTAQQgJAIgxAWQg5AZg0AjQgVANgiAMIg0ARQgZAIgoALIhuAeQj9BGo+AAQmUAAlfggg");
	this.shape_1.setTransform(142.9,112.9);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Az/POIhdgfQgbgIgEgMQgHgTgCg0QgBgngJhuQgHhZAAhKQAAkAAukFQAzkhBXigQBhiyAbgtQBNiEBLhlQBiiDA9hAQA1g5AUAAQANAAANARQAOARAAAQQAAAagYAcQgjAkgYAfQhVBighAtQg3BIgiBVIADgMIgvBNQBNA5EKAgQEaAhHGAAQDFAACAgFQBPgDCvgLQCFgIBzgWQBmgVAAgLQAAgSgOgkQgNghgohUQgnhPguhIQg7hcgpgcQgXgQgNgNQgHgJgBgEIAfgZQAhgXAVAAQAKAAAOAJQAOAJAIAKQCICWCJEIQB5DrBFDdQBaEWAkDlQAdCzAACuQAABSgDAeQgGAvgTAdQgkA1ihA9QjcBSjZAqQiyAiiEAAIgHgBIlIAHQuvAAnLihg");
	this.shape_2.setTransform(143.1,113.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,286.1,227.1);


(lib.FRD_MODEL_part_044 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDBE67").s().p("AqNCgIgVgFQABgpAjgzQAggsAwgjQAVgRASgKIAMACIAdAJIABABIABAAIABABIAAAAIACABIABAAIAAABQhDAhgrAoQgrAmgMAiQgLAjgBAJIgEgBgAJZAZQgEgkgCgDQgNghgcgWIgPgLIADgBQBNggA2gvIAAAAIACACIAAATIgLBEQgIAugfA0IgKARIgFAHQgGgLgDgPg");
	this.shape.setTransform(89.9,20.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBgFIgBgCIABgBIAAAAIAEAQIAAACIgEgPg");
	this.shape_1.setTransform(-3.1,13.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF7F").s().p("AHRC+QgMAAACgLQABgLAEgKQAGgTAAgQQAAgygVgrQgRgggQgXQAnAAAhgKIBBgSIAIgCQAhgLBDgcIACgBQBOgfA2gvIAAgBIACACIAAATIgLBEQgIAvgfAzIgKARIgFAHIgFAIIgTAaQgfAqgvAdQgwAegmAIQglAJgNABIgNABIgMgBgAoYCSIgUgEQhjgZhEhTQgXgcgPgZIAAACIgCgGIgPgrQgLgiAAgJQgGgPAHgiQAGgjAeAEQA4ApBmAoQBlApA3AFIAHABIAPACIALACIAEABIALACIAeAJIABAAIABABIABAAIAAABIABAAIABABIABAAQhDAkgrAlQgrAmgMAjQgLAigBAJIgFgBg");
	this.shape_2.setTransform(78.1,22);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AG9DYQgMgEgBgDQgDgEAAgKQAAgGAGgPIACgIQAHgVABgWQAAghgYgtQgZgrgPgcQgHgNALgHIBNgLQA4gHBBgWQBCgWAegPQAfgQAdgXIAqghQAogcAABAIAAAIIgDAXQgMBpg+BXIgUAbQhKBbhxAZQgoAKgtABIgHgCgAoWCqQiNAAhViKQgLgSgIgSIgBABIgLgYIABAAQgIgSgGgTIgBgFIAAgBIgBAAIgGgRIgBgCIABgBQgIgjAAgHQAAgaALgbQAIgVAFgDQAGgDAQgDQAQgEAJAGQAfAMAtAVIA5AaQBRAnBNAYIAwALQAWACAZAHQARAFASAHIAFADQASAJgGALIhXA4QhMA3gNApQgMApAAAGQgOAHgGAAIgPAAg");
	this.shape_3.setTransform(77.9,21.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,0,164.2,43.7);


(lib.FRD_MODEL_part_043 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8DA8BC").s().p("AixE9QBBhdAXinQAHg0ACg0IAAguQAAgKAegPQAVgMCOhDIAHgFQAEgCAEADQAIgDAGgGQAJgKAXgQQAUDLhYB6QhBBbjLCFIgOAIgABNkxIAfgPQAIBMAAAKQAAAGgJAFIgQAIIgJACQACgjgHg5g");
	this.shape.setTransform(289.2,157);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D8DA").s().p("AiJAGIDwhKIAjA2IhUAbIipA4g");
	this.shape_1.setTransform(283.3,97.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D871").s().p("ACCGLQBwggBEgbQA6gXAKgCQAcBBANAiQAbBFAGAyIgDAAIAAABIg5AYQg6AWiLA3QgRhXgwiVgAisijQiVjNiChyQATgKATgOQAbgVAAgNQgOgogJgQIBDgiQBTBNAFACIDmEgQD7E7BiCeQhIAahZAdIhJAYQhbjcisjog");
	this.shape_2.setTransform(259.5,67);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A4C5DB").s().p("AjAGsQkwgFivgZQivgZj5hhQj5hghdiLQhSh2AAj2IABgSQAWAPBzA+QCLBLAoANQEjBdD1AtQEIAuD6AAQFKAADlgOQHqgkEMhpQBIgcACADQANgFDOhhQAIgDAHAAQAGAAAGgHQALgNAYgQIAABLQgCBUgKAxQgkBngzAyQgZAbgeAXQguAliKBlQgFAHgKAAQgGAAgYAMIgXAMQhMAegtANQhRAagqALQhEARiCAPQljApiJAIQghAChWAAQheAAifgCgAo9hPQgBg7gFgRIBDAIQgDALgCAkQgCAnAEAKQgOAFgLAAQgbAAgGghgAHiiFIAcgBQAdAAAAAJIgFAmQgEAcABAGIg0AGQAHgsgEgqgAQfiXQAGgSAFgXQAJgpgKgTIAwgPQAIAQAAAOQAAAdgPAbQgRAfgaAAIgIgBgAxki6IAFhVIAkALQgCArAEAtgAWPl+IAegOQAJBLAAAKQAAAGgKAFIgPAIIgJADQACgkgHg5gA26liQADgugDgdQAFAJAWAKQAQASgNA7IAAABIgBAIQgdgYAAgGg");
	this.shape_3.setTransform(154.7,164.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBE1F7").s().p("Ai4AuQgTgPgFgGQgJgKAAgLQAAgNAlgUQATgKATgHICDgBQCFgBA7AEQAJAAAIALIAKASIAGAPIAEALQAAAHgJANQgIAMgDAAQgGABjGAEQhEAAhugCg");
	this.shape_4.setTransform(157.4,157.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4D4436").s().p("AmmDNQgJhKACgdQApAGBTAGQBlAGBMADQgNAFgLATQgLATAAAXIAEALIAGARQiKgHiDgFgAFaC/QAAgIgFgXQgFgZgEgKQCzgGAAgEIABAUQABAggGARIgGASQhRAHhTAFQAJgOAAgJgAJ4CNQACgYgIgNQCXgRCagmQAdgGAogMIA7gRIARgEQAQgDABAGQAAAOgGAgIAAAaQgIATguALQlWBBhDAJQAHgjABgNgAsVCLQiVgigugXQgEgOgJhIICeApQB8AcCmAPQgCAvAEA4QhngNiLgfgAS4AfIACgfQgBgIgHgVQAMgDBxgqQBwgpALgEQgBADAEAoQAFAqADAGQgbANh2AqQhoAogYAHQAOgKAGghgA1Dg7IADhSQAEAAABgFQATAIAnAYQA9AhCFAxQgIAqAAAnIj8hsgA20h6QABgQAHhNQAVATgCAmQgCAVgEAbQgVgCAAgKg");
	this.shape_5.setTransform(148.9,139.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DB465F").s().p("AAEgCQAKgDADADIghAGIAUgGg");
	this.shape_6.setTransform(210.2,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF7F").s().p("AAeLbQACiDgEiVIA1AAQHHAAEog5QDngsFviFQAcBBANAiQAbBGAGAyIgDAAIAAABQmuC4lKA9QkLAxmrAAIgRAAgAqxKeQjigli8g3QhYgZiZhJQifhMAAgWQAAgJAXhbQAWhYAGgSQEECWHaBIQFbA0FlAAQAAA2AEBhQADBwAEARQligGlMg2gAAZFKIgHmDQgEiQgMk7IBsABQClAAClgZQDggiAAg8QgNgogKgPIA5gdQAcAgAGAFQAFADABgDQAPAACwDWQBaBsBoCAQBJBUBUB2QA+BXAjA7QkhBlipAoQhuAaiaASQjvAdk/AAIhIgBgAsAEHQmwhIjUh0IgCgEQAAgFAGAAQADAAAJgVIAJgUIAohGQAVglAcgjIAxg8QBNheDOjRQDjjlAwgVIAIAEQgMANABAXQAAAxBvAnQClA7GDAXQAIByAHLfQl0gDl8g/g");
	this.shape_7.setTransform(154.3,76.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AwRAjQiagniBg1QhngugOgEIAig4QESCDF1A+QFxA/HkAAQF3ABDwgiQDcgeD+hQIDhhHIAjA2QkuBpjhA1QhsAZhzARQhuAPirAJQiXAHiNAAQqfAAnpiBg");
	this.shape_8.setTransform(152.9,102.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#463E35").s().p("AgSgiQANgGALgIQANBGAAAKQAAAKgVAHQgKhDgGgQg");
	this.shape_9.setTransform(304.5,127.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BA4056").s().p("AnGAoQhagVg1gYQgvgYgBgTQABgVASgOQAPgLANAAQAVAAArAPQA4AUBXAMQB7ASCcANQCPANA6AAQEXAAB4gbQAXgFApgOQAagJAVAAQARAAAQASQAOAQAAAKQAAAbgzAXQgCgDgKAEIgWAIQgqAVhxANQiAAQirAAQlNAAjkg3g");
	this.shape_10.setTransform(152.4,12.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(41,43,51,0.18)").s().p("AAsgeQgWAWgNAIQgOANgcAPIgKADQAmgXAxgmg");
	this.shape_11.setTransform(286.3,184);

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("As7PfQmLhWininQhzhygkjBQgLg8gCg+IAAgxQAAibAhiIQARhIAVgzQAlhWASggQAUgdARggQBBh2Bwh7QA1g5DsjqQBlhlAIgGIA7g1QAhgcAJgFQAPgCAGAJQAGAKARAAQAFAAALgEQAKgEAFAAQAwAAAYAIQBAASBXARIBsARQByAQBMAFQCQALAoAAQEKAACHgdQAggHApgNQAcgJAPAAQASAAAhgQQAhgQAUAAQAMAAAUATIAoAnQAbAaCLCgQCiC7BlCDQBtCLBbCZQCdEKAACdQAAAKAJBtQAABIgRBEQgTBGghAwQgrA/g9A+Qg8A7ghAQQhSArhKAgQiMA9h6AYQjzAxlGAYQkAAUjfAAQlQAAk5hFg");
	this.shape_12.setTransform(155,105.6);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.3,311,212);


(lib.FRD_MODEL_part_041copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91AFC2").s().p("AhBgHQAagqAmgSQAbgOAVAEIATApQgeAJghAoQgbAlgJAcg");
	this.shape.setTransform(63.9,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C9").s().p("AiIARQAAhAAtgsQAZgYAcgUQAagRAIAAQAjAAAYAQIAXAWIgDgDIgJAIQALAaAiAoQAaAhAAAMQAAAGgRAPQgbAZgjAzQgDAFgZAMQgZALgKACQgMADgTALQgQAKgDAAQhRAAAAiIg");
	this.shape_1.setTransform(76.1,68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF7F").s().p("AmWBkQgXhEAAgfQAAhCAygiQAngZCGgmQCugxDuglQB5gTBdgJIAJgBIABAAIgFACQgGACgCAGIgEAMQgBAKgCAEQgGAPgLAQQgUAigVALQglgHgKAAQjsAtg3AQIiHAnQgkALg1AUIgyATIgKgUQgFAGgFAKQgDAKAAAGIAJBCQAPBTAjBLIgOgBQgcAAgaAMQglARgKAkQg5iVgKgdg");
	this.shape_2.setTransform(90.4,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91AFC2").s().p("AhjADQAggnAQgNQAegWA+gQIA7BFQhsA9giAtg");
	this.shape_3.setTransform(60.4,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF7F").s().p("AjCAPQgPghAAgoQAAhKA7goQBcg8EBgTQAEAWAEAqQAEAqgCAeQhPADhcAOQhYANg3AOIArANIAuBOQA1BaAqA0QgtAKgsAhQgpAdgIASQhrisgchBg");
	this.shape_4.setTransform(54.9,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD8C9").s().p("AhQBvIgKgTQAAgEAJADIAKAEIAHgCQAAgLgmgfQgmgeAAglQAAgCAtgnQAtgpAKgFQAqgZAJAAQAtAAAtA0QAoAtAAAXQAAAIgIAEIgWAKQgCgMgEgCIgKgDQgGAWgCAUQgCAJgGANQgDAFgRASQAAAGgFgBIgJgCQAEgTgCgFIgDgBQgIADgaAhQgXAfgRAAQghAAgRgSg");
	this.shape_5.setTransform(71.7,63.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF7F").s().p("AiMEJQhUhnguiNIAAAAQghhUgMhIQgGgjAAgoQAAgnANgvQANgvAPgNQAOAVADAKIAhgIIAAAEQAAAOAIAhQAHAfAIASQARArAXBXQAhBdBaCFQgHAMgQAfQgQAigHARQA2hEAkgrQAXggBaicQATAhBTAjQBRAgAagKQguBVgLASQgZAqg4BPQhFBOgRAOQgTAJgYAOIAAAAQg0AKgXAAQguAAhKhcg");
	this.shape_6.setTransform(147.2,29.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD8C9").s().p("AAIBaQgzhLgUgWIAAABIAFAGQgLgIgWgMQgTgKgEgBIAKAIQAiAhAtBCIgOgEQg6gTgggQQhGgiAAgfQAAgaA1ggQA7glBDAAQAbABAjAFIAAABQgMACgEAGIAmAYQAcASASASQA4A2AABWQAAAJgIAHQgJAHgNAAQgNAAgRgEQAHh7hDgzQglgdgqAAQgGABgKADIgJACIADADQA/AIAoA0QAjAsAAA8QAAAfgIAHQgEAEgRABQgXAAgXgigAC/BdQAChCgig0Qgng8hMgeIABgBQAmAKAZAQQAaAPAVAZIAAAAQATAZAOAnQAMAiAAALQAAAIgCAMQgDALgCADg");
	this.shape_7.setTransform(185.8,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#91AFC2").s().p("AgHBVQhXgYghg1IAvhqQANAcA9AfQAkATAYAHQBAASAKAMQgBAKgVAkQgVAkgFAAQgnAAgwgOg");
	this.shape_8.setTransform(172.7,18);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF7F").s().p("AiGEGQglgdAAhBQAAgxAmhlQAJgaAzhhQBAh9Aug6QABAZA8AeQA0AZAWACQhtCwg3BoQgkBJgGAaIABAHIABABQAGgUArgQQAigLBpgYIgTCYQgyALgcAGQgzAKgsAAQhCAAgggbg");
	this.shape_9.setTransform(79.7,-8.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD8C9").s().p("AhsCoQglgYAAgcQAAhIAxgMIAggGQAOgGACgXIgBgIQgBgEgHAAQgHAAgZAPQgZAQgOAAQgJAAgDgKIgBgJQAAgWARgQQAWgVApAAQACAAAOALQAPAMAAADQAAAFgEAKQgEAKAAAFQAAATAPA1IARA3QAGgFAAgQQAAgPgGgpQgHgpAAgJQAAgMAGgGQAFgFAFAAQAXAAAUAYQAWAZAAAnQAABBgcAjQgaAhgpAAQgsAAglgYgABSAPIgNgjIAGg8QAHg/AGgSQALgmAYAKQAXAKAAAlQAABOgOAtQgGATghBAQABgOgMgjgAgOhKQghggAAgkQAAgJAMgGQAMgHATAAQAIAAAXA0QATAtADAQIABAFQAAADgGAAQgcAAgegfg");
	this.shape_10.setTransform(107,-60.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#91AFC2").s().p("AgqAzQgugggKgTIA3hRQAZA6AmANQAoAMAeAAIAJgBIg/BQIgHABQgcAAgrgfg");
	this.shape_11.setTransform(95,-39.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFD8C9").s().p("AAjBwQgwgrgngPQhIgQgcgLQgwgTgDg4QgDg5AqgeQArgeCmAqQArAIAsAdIACACQAXAVAXARIAHAHQARAUAAAGQAAAGgEAHQgGAKgKAAQgQAAgIgGIgNgLQgUgTgdgWQgsghgTAAQgGAAgDACIgDAFQAjAiA5AmQAnAdAAAoQAAAIgCALIgGASQACgjg8gqQg0gjgTAAQgGAAgEAEIgCAEQBiA2ANAkQAIAWABAJIADgDIgCAEIgBAEIAAAAQAAALgKAGQgIAGgLAAQgUAAgpglgAC3gtIABAAIAAABIgBgBg");
	this.shape_12.setTransform(296.4,74);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#91AFC2").s().p("AhJBIIgCgxQAAgWANgbQAOgeAUgSQAAABAzAAIA0AAQgoAnAABAQAAAKAEAjQABgBhxgCg");
	this.shape_13.setTransform(270.2,66.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF7F").s().p("AJpF/QhDgFhvgOQADACh0gVIhtgZIAAAAIicgtIgzgRIAAAAIh1gwQgHgCg2gbQgxgZgbgPIg3ghQgvgZhLg5QhCgwgGgHQgSgEgigoQgogtgPgKQgyg2ggglIgBAAIgag4QgLgWABgmQAAgQANgmIA7AIQAgBICoCKQCwCRCVBCQDKBdCnAqQDJA0EQAPQgSAQgJAaQgGAXAAAjQAAAKAFAmQgBgFhKgCg");
	this.shape_14.setTransform(191.3,34.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91AFC2").s().p("AhmgaQAcgWAkgQQAtgVAqAAQAIAAARAaQASAbALAcQg7AEgnAYQgVAPgwAvg");
	this.shape_15.setTransform(56.2,62.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFF7F").s().p("Ai/ByQgQhEAAgtQAAhoBGg8QBchQD9gxIgZDDIjnA9IgCAFIAfAKQAsDzAEAPQgugIg8AWQg0AUgSAWIgsizg");
	this.shape_16.setTransform(59.9,27.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD8C9").s().p("AgcBqIgEgKQAUADAGgDIABgCQgngWgHAAQgHAAgigTQg1gegBg8QABgXA9gkQAfgRAlgIQAwgFA8AhQA2AeABAUQAAACgIAIIgLAMIgQgNQgCACgHgCIgBACQASA1ABALQgBAJgEAIQgGALgNACQgDgPgIgJQgLAHgDAQQgCAJgDATQgJAigwAAQgfgKgHgHg");
	this.shape_17.setTransform(65.3,77.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF7F").s().p("AARDzQghgOgcgqQhIhtgqlIQAJADAsAJQAtAJAHAAQAJAAAtgGQAwgHAMgEQABCqAIBSQALBmAWABIAOgNIgLggIA1gXIgYDKIgjAGQgRADgIAAQglAAgVgJg");
	this.shape_18.setTransform(65.5,22.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD8C9").s().p("AhEB1QgPgTAAg5QAAgqAlg0QAog4AtgJQAygIAlAnQAJAJAaAvIABAAQAEABAAAFIAAACIgBACIAAACIAAADIAAAFIgNgOQgDgEgHAAQgFAAgDACIgBACQAnA0AMATQAXAkAAAPQAAALgFAGQgIAKgZAAQgWAAgcgjQgTgXgaguQgFAFgCAHIAJAdIALAeQgJAEgTAGQgTAFgFAAQgGAAgFgBIgMgGQAMgcAmhGQgkAHgaA+QgaA6gRAAQgRAAgIgLgAiNBaQgNgQgDgnIADgXIAIgXQADgGAXglQAYgnADAAQADAAAagXQAegUAWARQguAWgbAzQgXAsAAApIADAfQADAZACANQgdgCgMgQgAiuBbIgJgGQgNgQgEgHQgGgOAAgVQAAgYASgiQAbgzAxgaQgrArgRAyQgKAZAAAaQABAoAOASg");
	this.shape_19.setTransform(58.9,-29.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#91AFC2").s().p("AgwBDQgygKgPgGIgOhqQALABALgCIAUALQAWAMAEAAQAJAAAQgQQAQgQAFAAQAGAAALAEQAOAFAFAAIA/gUQAFAAAKAKIAOAOQAFADAGAAQACgBAAAFQAABTgdAYQgSAPhCAAQgOAAgxgKg");
	this.shape_20.setTransform(60.6,-11);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF7F").s().p("Ah/EOQgogeAAhmQAAhNA1iwQAahZAdhRQAVASArARQAoAPAVAAIAXgBQg7CtgeB3QgZBfAAAaQAAAMAMgBQAIAAACgGIAIgxQACgHAcgJQBFgWBAgcIgSCkQhJAgg8AOQgpAJgfAAQg0AAgUgQg");
	this.shape_21.setTransform(79.7,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD8C9").s().p("AhMCtQgjgbAAgoQAAgbAkgUQAkgUAAgaQAAgKgJgCQgPASgQAPQgSAQgGAAQgMAAgFgCQgKgHgGghIAPgQIACgGIAUgNIAOgKQALgGAJABQAkADAAAPIgCAdQAAAOAMAPQACACAPAmQAEANAPARIAPAQIACgEQgMgxgRglQgLgdAAgHQAAgIAGgFQAFgHAMAAQAlAAAVAkQATAiAAAzQAAA4gYAYQgYAXg2AAQgkAAgggZgABdAAQgTglAAgFIgJg9QgJg9AAgIQAAgLAFgKQApgPASAwQARAvAAAyQAAAbgDANIgUBDQgBgFgUgngAAAgyQAAgDgggWQgPgKgMgTQgKgPAAgEQAAgLAKgJQALgJAQACQApAIAlBhQgEgBgYABIgDAAQgPAAAAgFgAA7jAIABgBIAAABg");
	this.shape_22.setTransform(90.3,-51.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#91AFC2").s().p("Ag1A2QgagXgRgLIAjhaIABAAIAwAfQAlAWAYAAQAKAAAlgFIABABIgsBaQgRACgKAAQgzAAgcgRg");
	this.shape_23.setTransform(84.4,-27);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF7F").s().p("AiXDoQiignhbhEQg/gvgqgnQg0gxgkg3QgSgcgSguQgTgvAAgTQAAgjAOgTIA2AHQAKAnBDBLQBLBUBQAuQBiA2BZAdQBtAkBpAAQCLAABihGQBJgzCMisQALAjAoAXQAkAVAfAAQAKAAAagDQiZDNiMBTQiEBOi1AAQhQAAh2gcg");
	this.shape_24.setTransform(182.5,22.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFD8C9").s().p("AjJCKQgdgWAAgxQAAgtBEg6QBLhDBTAAQAZAAAdAOQAmATAAAfQAAAJgdAAIhCgCQhqgCgiArQAXgHAcgDQAdgGASABIBjABQgGAEgVARIgXAWQADAEAIABQAPgEAJgGQADgCAqgBQAiAAARAMQAMAJAAAJQAAAcgrAEQg/gCglAEIg3AdQg5AegpAAQgcAAgUgPgABIhnQgqgfgVAGIANgEQAIACA8gSQBLASAAAoQAAALgWANQgSAKgNAEQADgVgrgegAC+hdQAAgTgLgSQgMgTgTgCIABgBQAnABATAKQAYAKAAAZQAAAXgqAGg");
	this.shape_25.setTransform(264.4,-14.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#91AFC2").s().p("Ag+AzQgvgYAAgeQAAgCAWgbIAcgjQAMArAeARQAWAMApAAQASAAASgGQATgKAJAAQgaAxggATQgVAMgfgBQgaAAgkgRg");
	this.shape_26.setTransform(245.3,2.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFF7F").s().p("AHKFWIh7gNIjYgpIhmgbIAAgBQgigJgrgQIhNgeIAAAAIgzgXQg3gWhqg/Qh5hIg7g0IhHg/QgzgzgigiIABgBQgWgUgLgqQgHgbAAgYQAAgKAMgsIA6AIIACgQQgBAEAEAMQAEAMAEAIQAXAqAYATQBcBHAVARQAyAsBqBCQBZA2AcALQEpCFDEAiQBYAPByAGIDuAIQgQAKgKApQgLAxANAvQh8AAh3gKg");
	this.shape_27.setTransform(192,30.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFD8C9").s().p("AAuBpQg1gWgsAAIgeAEIgdAEQg/gDgfAAQgEgjAAgKQAAhCAwgrQBBg9CPAAQA6AAA0AWQAzAVAAAUQAAAKgKAKQgKALgPgBQgGAAgFgCIgDgCIgkgSQgVgKgPgDIgpgIQgNgDgRAAQgLAAgBAFQAFAGALADQBTAJAgAmQAhAPAAAkQAAAKgGAXQgbgggsgUQgmgRgaABQgbACgPgBQAiAOBIAaQA3AYAAAdQAAAGgBADIgEAEQgIAMgOAHQgLAFgEAAQgDAAg4gXg");
	this.shape_28.setTransform(298.8,56.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#91AFC2").s().p("AhJAdQAAg3AagYQAighBXAJQgkAsgCAnQgBAXAIAsIhyABIgCgwg");
	this.shape_29.setTransform(271.6,57.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFF7F").s().p("ABlEcQirgqhlgWIgggLQjehJiziTQiuiSAAhnQAAgOAEgVIA/gPIABgEQAAAPAPAOQAUAVBBArICfBpQBTAzCHBBQBDAgCEAvQC6BDBiAEQAhAEAnAHQApAFBXAAQA7AAAKABIA9gHIAkgHQBAgIA3gNIgDAsQAAAWALAYQAKAVAaAnQh0AYhXAGQglADhlAAQi1AAicgfg");
	this.shape_30.setTransform(197.6,28.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD8C9").s().p("AhICVQgdg5AGgSQAEgSgOgbIhHiAQgagxAAgTQAAgPAIgOQALgTATAAQAcAAAzBcQAyBaAAAsIgFAGQgFAFgBAEQABAGABABIAEADQASgQAdgMQAZgIALAAQAFAAAIABQABABABgEIgOgNIgihtQgKgngbgvQgagtgMgFIAJAAQAPADAGADQAJAFAMAMQAsAzA3DlIgTAnQAAADAEAFQADAEADABQAjgwAhgiQAbgbAEAAQAMAAAJAMQAHAIAAALIgLARQgXAhgpBEQgKADgJAWIgTArQgcA7gvAAQgeAAg5hxgAhXiyQgggygmgLQAgg0A5BEQA7BHAZCJQgDAAgLAGIgOAJQglh4gmg6g");
	this.shape_31.setTransform(292.8,25);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#91AFC2").s().p("AhWgLQAAgNAFgmIBRgYQAJAdAbAwQAfA3AUAGIh7AjQgyhCAAggg");
	this.shape_32.setTransform(282.1,47);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFF7F").s().p("AFnHeQibgmkNh1QiLg9h9hrQhthfgnhIQg/h7gjhdQgjhfAAgxQAAgKADgWQADgYAFgQIAYADQgDgLAJgKQAKgLASgEQgOAnAxBqQAsBgA+BVQBBBXBbBQQBTBKBgA9QB4BODUA8QDCA1CVAJIABABQgUAagMAjQgHAYAAALQAAAIAFATQAGAUAHAPQisgSg7gOgAobnnIADgWIAFAKQABAHgHAGIgCAGQACgGgCgBg");
	this.shape_33.setTransform(180.8,43.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFD8C9").s().p("ABFCUQgDgCgJgKQgdghhSgvQhJgMgcgMQgvgUAAg2QAAgfAPgcQAagxA8AAQBtABBnA1QBcAwAAAlQgDAXgVAAQgOAAgGgFIgGgHQgxgsgPgKIgVgPQgSgKgQAAQgHAAgBABIgDAEQAPAMA9AoQA2ArAAAwQAAAHgDAMIgGASQACgkg8gqQg0gjgTAAQgGAAgCACIgBADIBBA0QAYAVAPAaIAMAUQACAAABABQABAAAAAAQABAAAAAAQAAABAAAAQgEAEAAAEQAAALgJAHQgIAFgLABQgUgBgGgCg");
	this.shape_34.setTransform(275.3,94.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#91AFC2").s().p("AgbBRQgTAAgMgLIgKgLQgLgdAAgMQAAgzAkgbQArgiBPAWQgpAoAABCQAAAKAGAlg");
	this.shape_35.setTransform(248.6,86.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#91AFC2").s().p("Ag7A6Qg1ghAAgBQAAgiArgqQAugsAsAAQAKAABSA5Qg0ATgeAlQgcAkgCAsIg8gng");
	this.shape_36.setTransform(124.6,86.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFF7F").s().p("AgKCRIiZh6Qgrgegmg2Qgmg4AAggIAJguIANhHIDBAaIhCBOIgDAJIACAHIAyggQBABRCBBsQBwBeA+AlQg1AMgoAuQgjAngBAcQg2ghhuhZg");
	this.shape_37.setTransform(95.6,60.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFD8C9").s().p("AhoB0QgIgFgHgMIABgLIAZAJIAIgCQAAgLgPgKIgjgTQgygdAAgzQAAgsA7gjQAdgRAfgJQB6AABLA3QA3AnAAAeQAAARgnAFQgMgSgJABIgUBBQgGANggALIgIABIAFgYQAAgBgGAAIgmAhQgkAigZAAQgrAAgVgPg");
	this.shape_38.setTransform(146.7,96.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#91AFC2").s().p("AhfggQAAgLAugLQArgLAaAAQAKAAAlAIQAQAGAIAbQAEANABAMQhagBgUAIQgTAGg7A0g");
	this.shape_39.setTransform(50.1,81.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFF7F").s().p("AjHDXQAAh4AKg7QAMhLAkg3QBFhoEQiCIgWCqIi9BsIgyArQACABAngKIAKFKQgRgFgYgFQgWgEgIAAQgaAAgqAMQggAJgRAIg");
	this.shape_40.setTransform(60.2,42.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFD8C9").s().p("Ah0BvQgLgOAAgKQAAgHABgDIADgGQAOANAGABIADgBIAAgDQgCgYgSgaQgSgXAAgWQAAgvAugjQAvgjA/AAQA3AAAkA1QAeAtAAAvQAAAVgMAGQgDACgZAGQACgOgCgEIgIgHQgDACgaAyQgdAsgagNIAMgWQAAgHgBABIgCABQgDABgfAaQgfAZgQAAQghAAgSgVg");
	this.shape_41.setTransform(54.4,97.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFD8C9").s().p("AhkByQg0g8AAhBQAAggAUgLQATgKAaAMQAbANASAdQAVAgAAArQAAAMgWALQgEAEgKAAQgFAAgUgXQgcgggagsQAHA9AVAhQAVAfAgAAQARAAAXgTQAWgUACAAQALAAAQgNQAUgRANgFQAtgTAIgFQADgDAKgQIADgJQgUARgeAGQgUAFgiAAQgHAAgEgPQgDgJAAgGQAAgTATgRQAWgUAgAAQAfAAAQAfQANAYAAAfQAABCglAoQgpAshLAAQgyAAgyg4gAgxhAQgJgJgPgEQgUgFgNgFQAHgLAOgLQARgOAOAAQARAAAYAWQAZAXAAAWIgRAtQAAANAFAPQAIAWARAFIAAABIgWAGQgfhegVgVgAAHh0QgYgdgdgDQAKgHASgHQARgHAEAAQASAAAXAfQAQAWALAbIgnASQgDgVgWgYg");
	this.shape_42.setTransform(99.1,-44.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#91AFC2").s().p("AgtAzQgzgUgXgVQAUg9AOgOQAIgJALAJQAKAIAdAJQAaAHADAAQAnAAAUgEQAWgFAlgTIg0CGQgoAFgKAAQgSAAgtgTg");
	this.shape_43.setTransform(97.6,-21.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF7F").s().p("AgyiSQAfAgA/ASQA+ARAegMQgkBpgjB4IjIANQAqiWAriPg");
	this.shape_44.setTransform(89.9,-2.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFD8C9").s().p("Ag9BrQgugcg0AAIgEguQAAiMApgoQAWgWAkgCIAOgBQgRAKgUAeQgZAkgDAfQAAAJAFAEIAEACQAKg0AqgiQAoggAtAAQAYAHAOAGIgCADQgoAFgdAjQggAkADAsQACAEAGgMIALgbQAIgSANgSQAOgOAUgGQARgFAfAAQAvAAAQAUQAKALAAAVQAAARgNAHQgXAMhEgBIABA+QAAAxgPAqQgPArgZASQgZgpgqgZg");
	this.shape_45.setTransform(96,-88.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#91AFC2").s().p("AgzAIQgkgSgaAAIA/hRIAZgBQAnAAArAcQAqAbAPAgIhSBiQggg5gzgcg");
	this.shape_46.setTransform(83.5,-68.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF7F").s().p("AgKEfQiIgzgSgdQgXgPgKggQgIgXAAgcQAAgHARg1QATg3AJgQIDYk/QAjgCA2AkQA2AkAIAeQhPBnhSCHQhFBygLAfIAGgEQANgKAdggIBNAiQApAQBFASIgLCyQhOgIh6gvg");
	this.shape_47.setTransform(64.5,-32.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF7F").s().p("Ah6FnQhTg0AAhMQAAguAwirQA9jVBdjmIAagBQAXAAA1ATQA1AUAYATQgtBfhLD3QhCDaAAANIAHA3QABgDADACQAEgDAEgeQC0ArASAAIgNCmQjYgKhkg+g");
	this.shape_48.setTransform(77.9,-42.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#91AFC2").s().p("AhwAdIAmhyQAzgFA0ATQAxARAjAdIguBwQhLhBhoAHg");
	this.shape_49.setTransform(89.7,-91.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFD8C9").s().p("AhUBrQg+gPgNAGIgFhLQAAh0AngpQAXgYAzABQgOALgYAjQgcAqABAVIABAGQAfglAkguQAcgcAyAAQALAAANAGIAOAHIgCACQggAKgYAPQgsAcgBA/QAAAGACACIABAAQALgqAkgfQAlgdAiAAQAjAAAZASQATAPAAAMQAAAegRAIQgLAFg5ACQgTAAgDAGQgGAKAHAlQAHAggRAxQgNAjgLAPQglghhIgSg");
	this.shape_50.setTransform(99,-112.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF7F").s().p("AiUAzQgrgtAAg6QAAhXBeggQAwgSDvgfIgMCJQhrAKhAAPQgtAMgqATIBAgDQDGBjAKAEQgdAZgbA4QgZAzAEAQQjGhnhBhDg");
	this.shape_51.setTransform(59.3,22);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#91AFC2").s().p("AhQA0QAGg0ATgiQAOgZAmgmIBUAgQgRAhgSAoIgkBag");
	this.shape_52.setTransform(81.6,40.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFD8C9").s().p("AgvB1IgDgKQAWABAEgEQgvgRgegVQgfgUABgQQAAgGASgvQAVg5AQgWQAKgNAagJQAUgHAPgBQA/AAAsAlQAWATAIATQgDALgRAQQgFgKgFgCQgGACgFgCIgBACQABAqAEAPQADAHADADQAAAYgFADQgKABgKAFIgCgSQgCgEgFgCQgJAHgGATIgLAfQgOAognAAQgbgIgIgIg");
	this.shape_53.setTransform(98.5,46.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFD8C9").s().p("AiKBZQgQgQAAgXQAAgyA3gzQA4gyA5AAQAWgBARAWQARAXAAAfQABASgHAEQgSAIgcAqQgVAEgJAAQg/AAALgcIA9hTQg0AYgTASQgRAQAAAZQAAAiAWALQAYAMBGgBQhWAigLAAQgsgBgWgWgAAxA8IgIgBIAigcIAQgOQAFgCAHAAQAEAAAGABQAGADAKAAQgGAYgXALQgQAHgTAAIgQgBgACYg2IACgHIABAHQAAAWgRAWQgFAEgGACQARgaAIgYgABcg4QgJgjgVgSIA1gBQAbAsgMAbQgNAbgTACIgEABQAFgSgHgdg");
	this.shape_54.setTransform(114.7,22.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#91AFC2").s().p("AgwBVIgPgvIgHgYQAAgPAKgcQANgmAWgUIBgAEQgYAYgOAeQgQAdAAAaQAAAJAIAVQAIAWAIAKg");
	this.shape_55.setTransform(95,24.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFF7F").s().p("AiBBQQAFiegIgMIBeAEQBdAEBOACQglAtAAAvIAHAiIALAtIjzgLg");
	this.shape_56.setTransform(75.9,24);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFD8C9").s().p("AhxB3QgxguABhFQAAgxA7g6QA3g2AeAAQAKAAAKAIQAVAMAAAWQAAAcgeArQgjAuggAAQgGAAgJgGIgMgMIgCgCQgCgEAAgGQAAgEAUghQAXgkARgWIAGgLQghAKggAoQgaAiAAAKQAAAoAeASQAPAKAXALQAIAJARAJQASAKAGAGQAMANAMAGIAXAJQAGACAGAAQAKAAgCgBIAFgEQgagYgagRQgJgGAAgLQAAgSAMgJQALgHAKAAQAkAAAXAfQASAXAAAPQAAAig1AaQguAXgrAAQgnAAgpgngAgrAWIAhgaQAegdALgUQANgYACgJQAGgWgIgdQAZACAQASQAOAQABAWQAAAIgHAQQgIAQgLAMQgHAIgPAAIgPgBQgTAAgSALQgbANADAXIgDAIQgCAAgOgNgABSgBQAngoAEgOQAEgMgFgkQAUABALARQAIALgBAHQABAWgJASQgKAXgeAfg");
	this.shape_57.setTransform(133.1,-19);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#91AFC2").s().p("AhlAUQgMgbAAguQAAgGA2gfIA1gdIACAjQACAnAgAtQAlAxAvAKIiMA9Qg5g7gSgpg");
	this.shape_58.setTransform(114.9,-7.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF7F").s().p("AiQg2IBbg2QBIgtAugaQgFA2AjA9QAdAzAdARIkwCvg");
	this.shape_59.setTransform(94.3,5.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFD8C9").s().p("AhkB9QgtgxAAhkQAAgkASgTQAQgPAXAFQAYAHAPAbQASAeAAApQAAAqgQANIgSAEQgUAAgOgVQgSgbgEg2QgCgDgCgCIgFAAQgCASAAAKQAABqBIAAQAKgBANgHIASgNQAIgDALAAQAJAAAHgCQAhgPAhgSQAmgVAJgJQhFAWgKgBQgQABgHgMQgFgJAAgMQAAgPARgOQAUgQAgAAQAhAAAMASQAKAPAAAmQAABHgrAlQgmAgg5AAQhEAAgogrgAgSgxQgEgNgWgZQgYgZgLgBIAVgLQAWgMAGAAQAVABAPARQAVAWAAArQgYAZgBAFQgDAQAAAHQAAANAKAdIAFAHIgRADQgDgLgMhagAAch7QgQgRAAgFIAAgBIgRgLIAUgGIATgFQASAAASAdQAUAeAEAnIgrAHQgGgogRgUg");
	this.shape_60.setTransform(115.6,-43.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#91AFC2").s().p("Ag1BAQgvgbgZgrIA1hVQAjAuAYAMQArAVBggMIhUB0QgygCgtgag");
	this.shape_61.setTransform(109.1,-22.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF7F").s().p("Ai6CtIBaidQA5hiA6hhQAQAaAtAhQA5AoAyAAIisEEg");
	this.shape_62.setTransform(93,-2.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFD8C9").s().p("AhgB7Qg2g3AAhPQgBgWAKgPQAMgSATAAQAkAAAbAuQAZAnAAAlQAAAPgMAJQgJAHgLAAQgVAAgNgWQgohFgGgJQAMBKASAcQARAaAiAAQAOAAAYgSQAWgSACAAQAKAAAvggQAtggAMgPIAHgJQgTABgLAKQgNAOgNADQgQAEgKAAQgSAAgGgQQgDgHABgHQAAgMAUgWQAagaAcAAQAbAAANAVQAPAYAAA1QAABKgzAkQgpAdg9AAQgvAAgvgvgAgkg1QgJgKgWgOQgagRgIACQAGgHAJgQQALgLAeAAQAPAAAWAXQAXAZAAAWQgTAnABAIQAAAIAFAPQAIASAFAIIAJAGIgUAHQgVhXgTgTgAAKh6QgPgSgigKIAagPQAIgEAFAAQAXAAAZAdQAWAaAHAbIgpARQgKgjgQgRg");
	this.shape_63.setTransform(102.6,-43.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#91AFC2").s().p("AgkBEQgjgNgxgpIAihcQAQAkBOAHQBOAIAkgcIg5CDQgRADgJAAQguAAgdgLg");
	this.shape_64.setTransform(100.3,-21);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF7F").s().p("AiNCSIBjkpQATAZA0AXQBAAaAygMIhZDxg");
	this.shape_65.setTransform(91.5,-1.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFD8C9").s().p("Ag9BsIAIhxIgBgKIgDgJIgGgIIgNBEQgLA8AAAJQAAAJAEAYQAEAaAEAOQgwgOgpgoQgvguAAg0QAAgJASgiQASgiAMgSQAQgVAYgUQAKgIAkgIQAlgIAOADQAcAGAeAyQAlA9AABMQAAA7gZAhQgXAfgiAAQgwAAAAhNgABdCAIgFgCQAHgkAAgTQAAhNgbhBQgehKgugLIgLgEQAQgOAggFQARgDAPAAQAlAAAbAnQAiAxAABhQAAA+gaAlQgSAbgNAAIgJgBgACzAmQAFgdAAgGQAAhAgQgsQgNgkgggrQApgEAWAgQAaAoAABfQAAAVgJAZQgLAfgRAKg");
	this.shape_66.setTransform(60.9,-26.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#91AFC2").s().p("AA8BcQhPAAg0g3IgfgkQgNgOgJABIAXhVQAiA3AlAlQAsArAhAAQAGAAAGgDQAGgEAFAAIAVAHQAXAHAMgCIgfA3QgagGgJAAg");
	this.shape_67.setTransform(48.1,-9.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF7F").s().p("AkDB/QgkgcAAhCQAAgMAIg+QAIhMAKgzQAgAtAgAUQA/AoBegFQgWAcgPA3QgLApAAANQABAKACAAIAmhFIAAAAIAqADICCgNQCGgMAsgGIgDCkQgnAEiWAJQiNAKgNAAQibAAg1gqg");
	this.shape_68.setTransform(61.9,8.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFD8C9").s().p("AhtCJQgggsAAg6QAAhiAUgoQANgcAYAAQAZAAAPAYQAQAWAAAjQAABXgWAWQgIAHgJgBIgLgBQgPAAgFgVQgDgUgHhpQgKALgHAlQgFAkAAAKQAAAxAWATQAOAKAXAAQAEAAAOgIQAPgJAKgCQAVAHAHAAQABAAAMgHQAOgIAFgCQAMgEBAgNIAMgPQgiAJgaAAQgZAAgJgIQgFgFAAgPQAAgUAXgSQAXgSAcAAQAvAAAAAzQAABnhBAxQgqAggqAAQhAAAgmg0gAgMAzQgFgCAAgGIAHggQAGgfAAgSQAAgugKgZQgLgagbgQQALgIAPgHQAOgGADAAQAYAAALATQANAUABAyQAAASgSASIgUAVQgGAYABAOIADARIAIATQgIAEgJAAIgDgBgABChpQAAgggGgQQgJgVgYgOIA9ACQAMAQAGAaQAFAUAAAQIgBAmIgtABg");
	this.shape_69.setTransform(73.7,-48.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#91AFC2").s().p("Ag+A2QgjgTgIgTIAChaQAQAbAnAUQAqAVAsAAQAsAAAYgUIgKBRQgPAOgfAFQgNABgUAAQgoAAgngVg");
	this.shape_70.setTransform(70.1,-26.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF7F").s().p("AjyC+QhGiKALlTQAPAWAoAOQAkANAkAAQAQAAAcgIQAVgGAJgEQADEhAVBgQAKAwALgKQAKAAgBgGIgGg4QCIg5A/ghQAlgQA7giIA9CmQifBfhiAjQhIAbhEAAQhjAAgyhig");
	this.shape_71.setTransform(89.6,7.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#91AFC2").s().p("AhmgeQAzglAPgFQAmgMBUAVIASBXQg6ADgiAHQgwAMg4Afg");
	this.shape_72.setTransform(62.4,74.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFF7F").s().p("AjdDdIgDhZQAAhfAJg2QAJg4A7hSQA6hTErhnIAPC9QhoAvgmATQhmA1gzAmQAIAAALgDIAQgDIgEBlIAEBgQAFBYADAdIhIgKQgagBgbALQgSAHguAWQgCgigDhXg");
	this.shape_73.setTransform(73.4,34);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFD8C9").s().p("AhtB2IgLggQAAgIAEgNQANASAGACIADgCQAAACAAABQAAAAAAAAQAAAAAAgCQABgBAAgDQAAgjgUggQgTgeAAgeQABhPBjgJIBqgNQAbAAASBVQAKAqAEAqQgBASgGAIQgJAKgWABQABgSgCgEQgFgEgDgGIgCABIggBNQgMAWgXAAIgJgBQAKgZAAgDQAAgGgBgBIgBABIgeAfQgdAbgRAAQggAAgRgfg");
	this.shape_74.setTransform(66.3,94.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#91AFC2").s().p("AhjgIQAkglASgKQAggSBAgIIAxBMQhIAahSA9g");
	this.shape_75.setTransform(54.3,61.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFF7F").s().p("AkGBdQgKg8AAgcQAAiICMhIQB3g+EYgnIAAB5IADAAIABADQgBAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIACAQIAAABQh5AIiIAlQipAtgiAgIAAAKIAzgHQAQBAArBcQAkBQAXAhQgoACg0AbQgsAYgPASg");
	this.shape_76.setTransform(60,27);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFD8C9").s().p("AhVBrQgQgMAAgLIABgLIAAAJIASACQAGAAABgBIAAgCIAAgBQAEgTgJgJQgEgEgTgKQgjgTgBgvQAAgLAZgVQAbgWAhgRQBYgsAqArQAmAnANAVQANATAAAVQgBAWggABQgEgRgCAAQgCABgGgEQgBAUgFAOQgFALgLASQgHAMgKAFIgHAEQAAAGgEgBIgJgDQAIgXgGgDQgKAGgdAdQgaAYgIAAQgcAAgUgPg");
	this.shape_77.setTransform(63.5,75.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#91AFC2").s().p("Ag7BLQgIgyAAgKQAAgyAPgcQAJgRAVgaIBaAaQgYAUgVA/QgWBFAMAjg");
	this.shape_78.setTransform(86.5,39.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFF7F").s().p("Ah0B/IhFgxQgkgYgWguQgTglAAggQAAhQBQgmQB0g4FJgGIgNCLQhmAAgwACQh3AIgwAWQgggZgQgIIgKgEQAZAsAwAiQA7AqB3AzQgbAwgJAgQgKAeAAAkQAAAKAEAWQhxg7hXg4g");
	this.shape_79.setTransform(69.1,21.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFD8C9").s().p("AgICCQgMgDgFgEIgGgKIAYgCQABAFAAgKQAAgKgSgDIgngDQg6gJAAg7QAAgWAJgaQAGgPAQggIAbgtQAKgEA1gKQAZAAAqAOQA3ASAAAXIgPAcQgHgGgHgEIgKACIgBACIASAyQAFAKAAAFQAAAGgFAKQgFANgJAHQgGgSgEgFQgFAIgDA1QgLAxgvAAQgJAAgJgDg");
	this.shape_80.setTransform(102.5,43.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).wait(1));

	// Layer 1
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("Aj8HAQgcgbgOg/QgFgbABgfIACgsQAAgFgIgMQgLgOgDgJQg/iWgdhPQgnhtAAgrQAAhWBAgvQBPg6DYgmQDlgpCPgUQBngPAZAAQAUAAALAFIAJAHQgGAHgIAFIAJgBIABABIgFACQgGACgDAFIgDANQgBAKgCADQgGAPgLARQgVAhgVAMQAEAAAMgBIAAAKQgEACgnAGQhiAQi/AxQjdA5hBAjIAGAjQAHAnANAgIArBfQAYA1AFAAQBLAEAlAmQAZAaAAAcIAAAPQADANANARQAXAeAAATQAAAPgXAWQgeAfgPAaQgXAogEAGQgLAMgRAAIgXgBQgXAAgJAIIgWAUQgMAIgMAAQgqAAgZgXg");
	this.shape_81.setTransform(88.8,39.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAgGPQgcgRAAgeQAAgTgNgKQgUgMgGgaQAGgFgDgKQgEgVgwg5QgUgYg2hZIhDhvQgcgugQg3QgOguAAgeQAAhXBjgyQBsg4DngKIgIAUQgBAZACAsQAEApADAaIAGAZQgwADhmANIhfANQAhA7AqA5QBOBqAlA2QAVAeAcALQAkANAHAHQAtAkAWAhQATAdAAASQAAAUgNAKQgMAJgOAEQgLADgHAJIgDASQgDARgFAGQgGAGgUAKQgUAKgEgBQgFAAgYAVQgXAUgVABQgkAAgZgPg");
	this.shape_82.setTransform(59.7,37.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AjFFuQAAgBgrgdIgagaQgqgygig3QhHiNgVg4QgshyAAhoQAAgfATg+QAJgfAKgYQAAgGAEgGIAMgNQABAHAFAKIAFAKQAPAVADAKIAhgIIAAgBIACABIAEgBQARAjAEARQAMAsBHC0QgFAAAvBMIAzBUIA5hVQAYgpAcgvQAbgzA0iEQAVgyAXgKIAHgGQAbgVAagFIAagGIAVgDQAUgCBIgEQBHgEBGBAQBCA+AABTQAAAfgPAXQgPAZgWgBQgNADgWAAIgTgDQgOgDgKABQgLAAgMAHIgNAGQgHABgPgFQgNgEgIgEQgOASgnBHQglBFgCADQgSAhgzBPQgiA0gwA0QgxA4gaAIIgyANIgrAJQg4gKAAgIgAG+h5IAAgBIgBAAQAAABAAAAQAAABAAAAQABAAAAAAQAAAAAAgBgAEolNIACABIABgBIgDgBg");
	this.shape_83.setTransform(160.5,29.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AlBGBQAAhyCgkLQAohBBGhwQAyhSAAgUIgQgnQAAgbAdghQAngoAsARIgMgfIgIgZQAAgWAQgMQAQgMAWAAQAXAAAaAXQAbAYAAAdIABgYQAAgvAbgVQARgNAUAAQA0AAAAB1QAAA2gmBVQglBVghAgQggAggLAPIgxA/QjIEfgeBZQAbgDAcgGIBYgXIgXCyQgHAfhMAOQgrAHgoAAQinAAAAiQg");
	this.shape_84.setTransform(92.1,-29.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AM1HNQhFg+hAgYQgygLAAgBQAAgFgagKQghgNgFgDQj5gLhEgHQh8gNi7gsQhjgZg8gUQhUgbhHghQg5gXAFAAIg0gaIhYgwIgUgNQgbgQgxggIgtgfQgngahLhHQhDg/gDAAQhUhcgUgjQgXgoAAg7IAEg4IBdALQAMABABgIIA7BCIgFgEQBcBrDICDQCyB1BlAlQEVBlDRAcQCVAUFOAAQBYAABsAuQB9A1AABCQAAAPgJARQgPAbgfgLIADANIACAUQAAAqghAiQgdAegVAAQgmAAgVgTg");
	this.shape_85.setTransform(218,43.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAlHYQgXgKgHgKIgHgPQgDgIgVgKIgWgFQgFgCgRgUQgmgwg8jWQgyixgJhCIgEgyQAAh7BbhDQBehGD4g5IgfD0IimAtQAPCIARBLQAaByAtA9QADAEBUAxQAVANAIASQAEAKgBAGQgCAIgFAIQgLARgSAFIAGAaQAEAOAAAFQAAARgUAOIgdAVQgDAEgFAQQgHAQgNAFQgHACgYAEIgaAFQgKAAgWgKg");
	this.shape_86.setTransform(59.6,44);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("ABGHOQgigMgIgGQgIgFgVgmQgXgmgRgvQgRgwgPhFQgOg8gShyQgOhYgGgnQgLhYACgGQgEgFgMAAIgMAAQgaAAgVgcQgWgdAAgmIgBgSIAog/QAPgYANgQIgBgBIARgTQAKgJAmgNQAqgOAaAAQAKAAAPAFIAHAEQAKADAGAAQAFAAALgEQAKgEAGAAQBKAAAnBAQAdAuAAAzQAAANAKAEQAOAGAIATIAHAWIAEASQAAAagPANQgOAMgkABIgLBQQgHAvAAAqQAABeAFA7QADAiAIA2IA3gWIghEAIg3AEQgdAAgigMg");
	this.shape_87.setTransform(58.9,2.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ah2IuQgIACgOgCQgcgFgYgaQgmgrAAhhQAAiAB2lFQAfhVAJgeQAOgtgGgvQgBAPABAEQACAEgMgVQgMgWAAgZQAHgeAegaQALgJALgEQANgFAUgCQgSgLgJgaQgEgNAAgNQAAgUAegUIAVgFQAKABAbAPQAdARAGAMIAKAMQgIgtAAgMQAAgVANgRQARgWAcAAQAbAAATAsQAOAgAIAvIACAfIACAfQAAAZgxCvQgBAAgQAXIgVAhQgkA4g0CKQg8CggSBzICVg2IgYC9QgDATgOALQgJAHgbAJIgzAQIhSAPIgUADIgEAAQgKAAAAgFg");
	this.shape_88.setTransform(83.4,-18.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AqzDfQhXhKgzhYQgvhPAAg4QAAgIAFgTQAEgUAEgHIBRAKQABAAADgSQBMBagEAJQAGAICkCDQBYBKCVAcQBPAPBSAAQCRAACPiFQBIhDAshAQAFAAA1hUIA2hWQABAAAIgSQANgXATgUQAigjAygZQAcgNAmgPQAZgMAogXQAsgSBcAAQBrAAAABLQAAAfgoAOQg2ANgeAMQgPAHgPANIgYATQAlgEAbARQAaASAAAZQAAAXgQARQgbAag8gIQhBgKgiAeQgNALgRAZIggAsQjDD2iIBcQiUBjjDAAQk9AAjhjDg");
	this.shape_89.setTransform(202.3,9.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("ANPFxQgpgQg8gLQg8gKhjAIQgFAFiuAFQk8AAkDhFQi6gxjmhtIhTgwQg6glgfgXQglgahBg4IhHg4QghgcAQAAQgUgXgbgpQgVgjgBAAQgFAAgDghQgDgZAAgJIADg4IBcAKIADgWQAWATAhAjQAjAmAJAIQAMALADAAQAFAAAjAgQAyAsAUAPIAeAXQAmAaAgAVQAxAfA/AhQB1A9CoA2QC7A4DdAVQBxAKBXgBIDRgHQASgOBQgZQBUgbAiAAQBIAAA9AZQBCAbAAAnQgBAQgHAOQgOAbgcgGIADAOQADAQAAAGQAAA5gdAmQgaAigbAAQgLAAgqgRg");
	this.shape_90.setTransform(219.6,32.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AiBEnQjbgqi2hUQjhhoiBiJQhrh1AAhWIACgfIAcACIA/gOIABgNQB6BZAuAdIBrBFIBtA3Ig3gYIDGBoQAhANBnAnQCLAxChAZQAhAFBRAFQBFAGANAAQBAgBALgBIBYgLQAFAABZgTQBggTAjgCQgBgggHgaQgFgWgCACQg3hegRgiQgcg0AAgbQAAgKAMgWQAMgaARgSQAXgaAPgGQALgDArAAQAGAAAJgEQAKgEAEAAQA2AAAeA2QAdA8APAtIAqCQQATgXAZgSQAWgQAFAAQAcAAAPAWQALAQAAAVQABAGgCAEIgTAdIg6BYIgxBYQgCAMgdAUQgbASgNACQgeACg7ARQg2AQgBACQAAAMiCARQiHARhtAAQjSABjDglg");
	this.shape_91.setTransform(216.4,28.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("ALJJAQhFg+hAgXQgygLAAgBQAAgGgZgKQgcgJgHgEQgFACgGAAIgtABQiNAAhtgTQjPglj4hvQifhHh4hgQhthXhYhzQgvg/guiIQgsiAAAg7IAEg/IA5AGQgDgKAJgLQAJgLASgEIAFggIAFAKQACAHgHAHQADADAKAiIATA4QAMAigBACIAGAGIAAAAQDHGqG1CbQENBiGzAAQBYAABsAtQB9A1AABCQAAAQgJARQgPAbgfgMIADANIACAUQAAArghAiQgcAdgWAAQgmAAgVgTg");
	this.shape_92.setTransform(207.6,52.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AC0FuQgfgRAAgUQAAgcgrgcQiahlgTgOIhghCQhWg9hBg0QjLilAAhfQAPhYAFgPID2AfIgZAbQBGBjDWCfQBuBOBnBBQB/gFBcA7QBOAyAAArQgBATgdAKQgkAOgJAMIgEATQgEAQgHAHQgHAEgbALQgbAKgEAAQgHAAgfAUQgfAVgcAAQg0AAgigTg");
	this.shape_93.setTransform(116.6,73.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AizH0QgRgUAAgPQANggAAgHIgJgWQgKgYgEgTQAGgXAAgKIgIkVQAAhrAEgqQAJhUAhhBQBVimEeh0IgdDjIhdA1IgqAZIgbAQIAABuQAAAnAGBXIANDIQAwAVAXBDQALAiABAeQAAAmgeAMIgaAJQgQAFgIAHIgOAYQgNAVgNADQgKADgSgBIgYgBIgVAPQgXAPgQAAQgqAAgZgeg");
	this.shape_94.setTransform(58.7,60.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AhUg0QgRgXgTgwQgTgzAAgbQAAgHAFgPQAFgQAFgFQAHgGAOgTQANgTANgNQA7g4ALgHQATgOAlAAQAUAAAgAuQAjAzALAEQAhAOATAfQAPAbAAAbQAAA+gEAVQgDAQgQAfQgyBogzCUQglBrgIATQgOAcgUACIjgATICBmvg");
	this.shape_95.setTransform(95.2,-26.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AkbG9QhUg5AAhYQAAgLAEgeQAUg5ArhOQAWgoEQlyQgLiKAihHQAgg/BDgBQAEABATAFQAUAEAEAAQAPAAAegEQAbgBAQAKIAQAPQAMAKALAFQAzATARAVQAKANAAAZQAAA5hsABQABBXgHAeQgIAggkAuQg7BIg0BGQhgB/hvC1QA+AbBkAjIgQDnQjkgzhdhAg");
	this.shape_96.setTransform(78.2,-52.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AjgJcQhag1AAhtQAAgjAThQQAYhnAuh8QA/isBjkdIgBgCQgBgDAAgGQAAiiAWg6QAbhFBQAAQAGAAAVAFQAUAEACAAQAegFAJAAQAfAAAOAMIAYAbIAjAMQAjALAEAEQAKAKAGANQADAJAAAFQABAugZANQgOAHhHAHQAEApAAAKQABAogMAhIgqBmQhiDqh/G1QBRAaBmASIgNDCQjqgChbg0g");
	this.shape_97.setTransform(86.5,-65.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("ACXEWQgFgPgdgWQgggYgXAAQgFAAg8gfIh0g8QhMgogkgWQgqgag5gzQgPgNgQgeQgTgmgBgfQABiJCmgfQAtgJBVgDQBJgEARgGIgECSQhJAihLALQB/BABOAhQAuASA9AUIAXgEQAXgDAGAAQBIAAAzAqQApAgAAAVQAAACgKAPIgTAdQgLATACAGQAFAQAAAGQAAAPgRAOIgfAXIgJAWQgKAWgGAGQgfAWghAAQgzgMgKgag");
	this.shape_98.setTransform(76,30.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AiPB7Qi7gPgNADIAEgYQABicgCgKIgBgOQERAABogIQA6gEAYgLQAUgJA9gHQAxgGAZAAQAbAAANAMQAIAGACAGQAVASAAAlQAAAYgTArQgSAvgPAIQiHBMh0AAIi4gQg");
	this.shape_99.setTransform(98.2,22.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AlYA2QAAgEgDgEQgEgIgNAAQBUg1B2hBIB6hAQAbgOAUgeQAJgMAOgYQAagwAtgZQAhgTAZAAQAQAAAvAWIA/AdQAiANASAOQAcAWAAAaQAAAVgDAMQgGAYgTASQgYAWgCAMIABAUQAAAagPAUQgaAghGAXQhyAkhOAkQiPBDjbCKg");
	this.shape_100.setTransform(115.3,-5.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AhFGCIjogHQAhhEBeikQBlirA0hLQgDgKgIg6IgJg5QAAgqAXgUQAOgNAlgbQAKgIAsgXQA1gcAUAAQAiAAASASQARARAKAqQAKAjAeAYQAXAUAAAsQAAAegKAmQgPA2gbAZQgFAEhOBlIiTDgQgmA+gMAOQgSATgUAAIgBAAg");
	this.shape_101.setTransform(102.7,-24.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AjhFxQAPg0A3iiQA3ieAVg2QgbgegMg5QgIgmAAgiQAAgaBDhBQBEhFAmAAQAlAAAXAXQAUAWAWA4IAbAMQAYALADADQAXAUAABAQAAAqgIAXQgEALgbAzQhJCKhcEVg");
	this.shape_102.setTransform(97.7,-25.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("Aj6FOQgxgpAAhXQAAiJA0iUQAnhvAwhKQAUgeBWgnQBYgpA8AAIA9gEQAmAAAYArQAfA1AABoQAAAhgNAWQgNAXgoAkQgWAYgMAKQgUATgUAAQgNAAgIgFQgZAXguBSQgjBBgHARIFFggIABC+QAAARgEAHIgEADQhOAMiWAGIiFAFQh+AAg3gtg");
	this.shape_103.setTransform(59.8,-9.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AkpEJQgPhjgCiSQgBhPACiIQAAicADgdQAHhGAhgUQAIgFAUgIQARgGAGgGQAegdAfAAQAIAAAUgMQAUgLAYAAQAdAAATAUQAbAdAAA+IgBAeQgCAIAIAJIAIAKIAQAXQAGALAAAKQAAAvgYA7QgVA5gZAPQgHAvgHBUQgGBFAAAOQAABbAVCmQBEgZBTgpQBLgkA4gjIBODWQixBhgvAVQhbAnhSAAQiqAAgtkbg");
	this.shape_104.setTransform(88.5,-15.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AiyIeQgWgdAAgcIAMgxIgIgVQgJgcgGglQAGgrAAgKIgCgFQgEgKgGg7QgDgYgOj9QAAiFAShKQAThPAwgzQAtgwBbgsQA+gfChg9IAZDxQh1A3hyA+IgEBwQAAA1AEBHQAEBVAGASIASBYIgBAJQAAAFALAIQARAUAVA4QASAxAAA2QAAAggMAQQgOARgiAGQgSAEgOAiQgLAggYAAQgFAAgMgEQgMgEgFAAIgUAQQgVAQgJAAQgmAAgbgig");
	this.shape_105.setTransform(71.9,55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("Ag6HBQgJgQAAgmIgTgbIgTgdIgIgmQgHgZgSgoQhpjkgYhIQgPgrAAgzQAAhsBXhEQCDhnFRgrIAACQIAJACIABAJIAAAOQgQAFAQgDIAAAJIgKAGIlwBkQAUBFArBZQAWAsAxBdQAwBWAWALQAGADAKABQAKADAMANQAvAzANAZQAJARAAAaQAAAPgMAKQgKAJgbAJQgUAHgEAPIgGAZQgFAKgbAFIgeAEQgFABgWATQgSAPgWAAQgyAAgQggg");
	this.shape_106.setTransform(58.2,42.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("ADhFAQgSgEgHgDQgFgCgFgJIgHgNQgBgBg1gWQgFAAgHAFQgHAEgFAAIgpgWQgtgWgTgEQghgWhkg3QhTgugWgQQhMg6gggqQglgzAAg6QAAhVBagxQCFhJE9AHIgQC9Ih6AAQhlAEg8ATQAdAVBtA0QCBA8AsAAIBHgOQBBAAAsAhQAjAaAAAVQAAAGgDAEIgEAIQgGAOgSAOQAAAIAHASQAFARABAHQAAAKgTAUQgVAUgCAMQAAAGgGARIgHAUQgFAJgaAMQgWALgIAAQgJAAgQgDg");
	this.shape_107.setTransform(78.8,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_83}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_84}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_89}]},1).to({state:[]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},1).to({state:[{t:this.shape_95}]},1).to({state:[]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_107}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FRD_MODEL_part_039 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB465F").s().p("AgjDIQgDgFgQhgQgQhtgFgXQgFgVgEgnQgFgvgDgMQgGgUAPgKQAOgJAkgDIA/gHQAvgDACADQAKAogGADQgWALgeADQgfADgPAIQgJAFAMBNQAMBFAEAKQAHAOAUgFQAlgKAZABIACAVQAAARgCABQgjASgYAFIgZAHQgNAHAHAmIARAyQgRAHgRADIgLABQgJAAgBgDg");
	this.shape.setTransform(29.6,44.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#300F14").s().p("AhJDPQgBgzgLgxQgkidAAhaQAAg7AlgSQAigQByAAQAgAAAKAUQAHAQAAAwQABAQgwANQgxALgHADQABAuAQBAQAHAAA/gJQAQAAAFAPQADAMAAAiQAAAegQAJIhKAaIAKAmQAHAdAAAKIgHASQgPASgoAAQg1AAgGgbg");
	this.shape_1.setTransform(30,44.9);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D871").s().p("AghguQALAAA2AGIABAAIABAIQAAAWgHAGQgaASgZAhQgFgjgEg6g");
	this.shape_2.setTransform(48.6,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8DA8BC").s().p("ABwFCIAAAAIAAAAgAApE4QAAhSgCggIgNi1QgHhugWhVQgmiEhGgLQCPgCAWAWIAVAVQgBgBAJAuQAJAvAJD2QAJD5gCAFQgCAGADADQglgHgfgCg");
	this.shape_3.setTransform(41,44.4);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7596A8").s().p("Ag0CCIgNgBIiIgEQBqhdATgSQA4gzA4hDQAogZAYAAQAxAAAYAVQAbAXACAhQABAigIAMIgVAcQgNASgbAVQgbAVgJAEIgdARQgVAMgvAIQgoAHgLAAIgCAAg");
	this.shape_4.setTransform(59.6,86.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF7F").s().p("AhZHiQgkgCgIgCQgniGgDgOQgCgKALgGQASgGALgHQAXgHAogIQBdgSAcAAQAbgBBkAIIABABIABAIQAAASgVAWIhPBRIg+BFQgMAJgwAAIgrgBgAh+nVQAAgGAfgFQAegEADAFIADAWIADAWQAAAKgBgFIhAAIQgFggAAgPg");
	this.shape_5.setTransform(34.4,51.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A4C5DB").s().p("Ai6BSQgxi2gJhZQgJhZBAghQA/giB1ABIB6ACQA8AEAYAWIAJAMQAEAHACAbIARD/QAODigBAwQgBArAFgDIgBABQgIgDgXgEQgbgEgdAAQhOAAhcAWQhPATgZAPIhGkHg");
	this.shape_6.setTransform(27.7,46.6);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiuIBQghAAgFgIIgMgXQgIgPgbhXIgmh1IgEgLIg5joQgihugNhdQgHgzAAglQAAhFAmgeQAOgLBIgUIBGgSIgGgcQgFgXAAgQQAAgDAWgLQAbgMAZAAQA4AAgEAYQgEAZACAGIAMAaQB/AIAPAGQAlAMAMAyQAbBzANETIAJDgQBDhLBCgHQBDgIAoBAQAnA/gUAoQgVApgYAdQgZAdhPAkQhPAkguAAIjhAGIhRAAg");
	this.shape_7.setTransform(41.4,51.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.4,82.7,102.8);


(lib.FRD_MODEL_part_038 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17171F").s().p("AguG8QgOgIAAgKQAAgEAFgEQAFgDACAAQABAAAJAIQAHAJAWAAQAvAAAbgKQAPgGAJgIQAWgLAHgBQAJgBgBAKQABAPgnASQgnARgZAAQgwAAgWgLgAGvGLQgKgHAAgJQAAgFADgEQAEgDAEAAQADAAAFAHQAFAHAZAAQAfAAAagIIAXgKQAFgBAagVQAYgPAAAYQAAAVg2ATQgrAQgXAAQglAAgRgLgApVFLQgagPAAgJQAAgKAGABQADABARAHQArAUAqAAQARAAAWgMQAWgNADAAQALAAACAMQAAALgbAOQgaANgUAAQg1AAgkgUgANREqQAdgDAhghQAigjAFgBIACAHIABAMQghBFgqAAQgWgJgHgHgAudDiQgRgQgBgNQAAgHAFgIQAEgKAHgBQAFAIAAAKQAAAIAhAWQAcASAMAFIgMACIgTABQgYAAgVgTgAKjC+IgBgGQAAgCAlgXQAogYAEgNQAPglAIAGQAEAEAAAXQgmBNg7AAQgHAAgDgFgAjeBZQgcgRAAgLQAAgKAhAOQAsATAbAAQAeAAAdgMIAdgNQANAAAAAOQgBAPgpAMQgiALgZAAQgqAAgigWgAvZgTIgJgtQAAgSABgFQADgSAOgEQAGAVAHAqQAIAmAWAZIAAADQgBADgMAAQgaAAgNgqgAPLgTQAFgTAAgRQAAgOgGgLQgHgLAAgHIABgHQAZADAHAQQABAFABAYQgBAbgEAMQgJATgcALQAJgMAGgTgAqDg8QgmgaADgSIADAAQAWAXAbALQAkANA8AAQALAAAHADIAHACQgFAGgPAIQgQAIgGAAQg1AAgrgegAH/hXQgFgFAAgCQAAgHBKgPQBJgYAAg5QAAgRALAKQAMAKAAAOQAAAfgkAeQguAlhJAAQgFAAgFgFgABOjGQgUgMAAgKQAAgJANAAQABAAAPAMQASAMAWAAQA/AAAYgPQAPgKAJAAQAJgBAAAJQAAAPgiANQghAMgmAAQgnAAgZgQgAoWkUQgogggBgfQAAgIACgCQACgCAGgBQAKAjA2AXQA0AXBIABIACAHIgVAOQgKAHgdAAQg3AAgsgigANnkOQAMgrgBgLQABgQgZgWQgQgOgkgZQAvAEAcAgQAWAbAAAeQAAALgIAOQgKANgLAAIgDAAgAvllpQAAgeATgYQAUgaApgNQgDAIgVAaQgTAagGALQgDAHgCAaQgBAYgHAJQgSgKAAgig");
	this.shape.setTransform(120.7,72.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17171F").s().p("AghG+QgXgHgEgRIAMgLIAMAJQAQAJARAAIAagCIAagDIALgBQADABAAAIQADgPAYgNQANgGAPgFIAGABQADACgBAHQABAPgnARQgmARgbAAQglAAgTgGgAGvGKQgKgGAAgKIALgMIAPAJQALAGAMAAQBCAAAfgYIASgOQAIgEAKACIABAAIABAHQgDAQgRAOQghAchDAAQglAAgRgMgApVFLQgagQAAgIQAAgHACgBIAEgBQBSAbAXAAQAVABAXgTQAQgLARAPQgLARgcAMQgaALgVAAQgqAAgigUgANREtQA2gZAagVQAKgKALgPQgCAqgYAYQgVAVgZAAQgEAAgZgQgAuiDiQgbgYAegcQAEAcAaARQAQAKAgAPIgBACQgPACgKAAQghAAgWgWgAKiC6IAdgSQAYgPAJgIQAMgJAMgUIAQgXIAFADIABATQAAAYgoAlQgZAWgSAAQgOAAgLgMgAjbBXQgVgNgKgQIACgEIgBAAIAGAAQBbAbAGAAQAJAAAVgDQAGgCAYgKQAXgKAFAAQAKAAAAABIACAFIABAIQAAAJgXAMQgeAQgwAAQgqAAgfgUgAuoAbQgrgJgMgyQgMgyAbgXIAHAhIAGAeQABAIAdA4QAAAFgCAAIgBAAgAPBAJQAEgJAGgWQAFgYAAgJIgNgnQgOgOATAGQASAFAFAIQAHAKAAAbQAAAfgHAOQgIASgbAFgAo8gfQgmgGgfgVQgggVgFgYQAEgBALAMQAnAbAqADQBBAFAMAEIgWAQQgNAGgSAAIgOAAgAIChVQgEgFgEgDQAJgJAtgNIA0gOQAjgRAHgaQABgbADgHIAMALQAGAJAAAHQAAApgwAdQgsAbg3AAQgKAAgFgDgAA6jfQABgCAEgDQAEgDAEgBIAbAPQAUAKAPgBQAnABAjgMIAfgNQAHAAABACIABAGQgIAPgcAMQghANgkAAQg4AAgcgngAnNj1QgfgGgmgZQgsgfgBggQAAgLAKgCQAEAHASAUQAUAUAKAFQAJAFBAAOQA+ANADADQgJALgVAGQgQAFgRAAQgLAAgMgCgANqkVQAJgjgBgJQABgLgPgTQgWgcgogTIAMABQAiACAaAcQAZAdAAAhQAAAMgJALQgKAKgNAFgAvWk7QgFgFgFgOQgEgOgBgJQABgfAXgdQAZgfAfgDIgIANQglAlgGAlQgJAwgCADg");
	this.shape_1.setTransform(120.7,72.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B3A").s().p("AAWH8IAjgiQAYgcAAgYQAAg6gWg/QgWg1AAgDQAAgMAQgJIAkgNQA0gSAAgmQAAgRgOgXQgMgTgLgJQgXgVAAgMQAAgOAigVQAhgTAAgcQAAgRgxgYQgygXAAgYQAAgHAUgiQATghAAgGQAAgpg4gFQgdgDgHgEQgSgHAAgWQAGgzgDgPQgEgVgtAAQgkAAgaAKQgUAKgFAAQgiAAgKgVQgGgNgBgrQgBgQgUggQgXgkgVgHIAPgDQA4gFAjAiQAXAVAQApIAEgDQADgOAXgNQAggSA4AAQA0AAARAhQARAhgNBRIAEgCQA9gCArAdQAlAZAAAcIgPBCQgJAegKAOQgHAJAAAEQAAAKADABIAIgBQASAAAiAZQAjAbAAAUQAAAcgdApIgdAmQAAAFAiAhQAiAlgGAYQgGAcgjAlQgXAYgWAQQgQAMgNALQgLALAAACIAVAqQAUAsAAASQAAAzggAdQgfAeg0AAQgFAAgsgKg");
	this.shape_2.setTransform(218.2,58.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2B2B3A").s().p("AA1IDIgfgHIAjghQAZgbAAgZQAAg6gWg/QgWg1AAgDQAAgMAQgJIAkgNQAzgSAAglQAAgjgegbQgegbAAgNQAAgGALgLQALgLAMgHQATgLADgDQAMgJAAgXQAAgSgygYQgxgXAAgYIATgdQATggAAgTQAAgXgRgLQgQgKgugGQgfgEABgXQAHgeAAgPQAAgwg1AAQgSAAghAKQggAJgEAAQgkAAgLgVQgKgSAFgmQACgOgSgcQgUgggdgSIAfgDQAiAAAdASQAnAYANAzQAQgVAOgIQAfgTA4AAQA0AAARAhQARAhgMBSQAmgNA2AdQA0AdAAAiIgOBCQgDAIgXAxIAAAHIABABQAwAQAPAJQAiAUAAAdQAAAcgdApIgeAmIAHAJQAIAKAKAIQArAggGArQgHA5gCABQgIABgIAEQgRAHgXASIgSAMQgNAKgdAaQAoBZAAARQAAA7gpAdQgfAVgrAAIgSgEg");
	this.shape_3.setTransform(218.2,58.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#39394F").s().p("AkUI+QgngvgGABQgHAAgaAYQgaAZgrAAQhNAAgjgzIgVgiQgJgPgKAAQgFAAgPAQQgOAQguABQg4AAgogsQgegtgJABQgPgBgQALQgTAMgIACQgQAEgiAAQgMAAgOgUQgPgWgOgEIg7AKQhzgMAAhiQAAgJAHgWQAhhCAAgHQAAgJgUgOIgrgeQhAguAAg6QAAgZAggaQAggcAAgCIgfgwQgegvAAgRQAAgjAogNIAggJQASgFAHgHIgYg1QgQgkAAgqQAAgsAzghQAegTA4gSQgJg2AKgZQAPglA8AAQA2AAAhAUQAJAFAVAXQAdguATgTQAYgVAfAAQBYAAA3A5IAkAoQATASASAAQAJAAA4gmQA5gnAjAAQAsAABDAuQApAdAYAYQAog3ANgJQAjgZBNAAQCFAABCA4QAOAMAUAaQAOARAIAAQALAAALgNIAYgdQAmgrA9AAQA2AAAjAaQAcAWAAAVIAAAFIBPhDQAygjA5AAQAqAAAhAbQAhAbAHAmIAEgDQADgOAXgNQAggTA4ABQA2gBARAiQARAggNBRIAEgCQA9gBArAcQAlAaAAAbIgPBCQgJAfgKANQgHAKAAAEQAAAKADABIAIgBQASAAAiAZQAjAaAAAVQAAAbgdAsIgdAkQAAAFAKAIQAWATAOANIAUArQABACgFAKQgDAmgfAaQglAagPAOIgcAYQgMALAAABIAVApQAUAsAAASQAAAzggAeQgfAdg0AAQgGAAgXgEIgagGQgPAMgSALQgkAWgoAAQgQAAgggLQgagKgIgFQgNgHgNgLQgIgGgDAAQgLAAgGATIgLAqQgUA9hAAAQgKAAgagVQgZgWgEAAQgEAAgKANIgXAcQgmAng4AAQhGAAgVgdIgLgUQgFgKgIABQgIgBgKALIgVAZQgmAihMABQg2AAgcgfIgRgVQgJgKgLAAQgOAAgEAKIgKAVQgVAgh6AAQhTAAg2gtg");
	this.shape_4.setTransform(124.3,63.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(30,31,38,0.502)").s().p("AAAgDIACADQADADgHABg");
	this.shape_5.setTransform(238.6,44.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39394F").s().p("AkPI7QgigugOAAQgHAAgaAZQgaAZgrAAQhNAAgjgxIgVgiQgJgPgKAAQgFAAgPARQgOARguAAQg4AAgogrQgegsgJAAQgGAAgXALIgdAOIgWADIgcACQgNAAgRgXQgSgXgHAAIg7ALQg2AAgegdQgfgcAAg0QAAgTAUgsIAUgpQAAgKgUgNIgrgdQhAguAAg6QAAgcAggWQAggXAAgJIgfgvQgegwAAgQQAAgYAigXQAfgUAegCIACgBIgYg0QgQgkAAgrQAAgaAPgRQAOgRAxghQAMgHAKgDIAWgGQARgFgBgKQgGgRAAgSQAAgmAUgRQAVgSAyAAQA+AAATAPQALAJAJARIAGAGQAhg0APgNQAXgWAnAAQBQAAA4A5IAlAmQATASARAAQALAAA0gnQA1goArAAQAwAABCAwQAtAgAPATQA3g/ALgHQAegTBOAAQBqAABNA5QAnAcAYAcQAHAAALgNIAagdQAqgqA7AAQA7AAAfAcQAWAUACAdQBIg5AbgQQAwgeAqAAQAiAAAdASQAoAYAMAzQAQgVAOgIQAggTA4AAQA2AAARAhQARAhgNBSQAngNA1AdQA1AdAAAiIgPBCQgCAIgYAxIABAHIABABQAvAQAPAJQAiAUAAAdQAAAcgdArIgdAkIAGAJQAIAKAKAIQArAggFArQgHAyABAHQgFAAgJADQgRAGgZATIgWAQQgMAIgeAbQApBZAAARQAAA7gqAdQgeAVgrAAQgHAAghgIIgHgCQgBgBgGAAIgiAWQglAWgnAAQgZAAgxgZIgtgaQgLAAgGATIgLAqQgUA8hAAAQgKAAgagVQgZgWgEAAQgEAAgKAMQgQAVgHAHQgmAog4AAQhGAAgVgeIgLgVQgFgJgIAAQgIAAgKAKIgVAYQgmAihMAAQgTAAgUgFQgdgIgNgRIgJgKIgLgMQgJgHgJgDQgEAAAAgLQgSAsgcAOQghAQhYAAQhVAAgxgug");
	this.shape_6.setTransform(124.1,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{y:44.6}},{t:this.shape_4}]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5,p:{y:45.5}},{t:this.shape_6}]},1).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AlDI1QgMANghAMQgfALgRAAQhEAAgxgpQgkgqgGAAQgGAAghAIIgjAIQhRAAgjgsQgUgrgLAAQgJAAgNANQgNALgOgBIgoADQgIAAgPgDQgPgDgHgEQgMgGgHgMQgFgJgFAAQgnAHgZABQgvAAgpgkQgbgZgJgdQgGgVAAgrQAAg1AbggQhCgdgeg8QgTgmAAgeQAIgkADgGIASgXIAQgWIgXgsQgXguAAgeQAAgmAggZQAZgSASAAIAVABQgRgagQgoQgOgjAAgKQAAgrAhghQAlgnBKgSQgEhAAfglQAdgjAzAAQAyAAAiAMQALAEARAKQAFgCAfgbQAngYAvAAQBdAAAwAwQAMAMASAVQAPAPARAAQAHAAAzgdQA0geAoAAQATgBAeAFQAaAEAJAEQAQAGAlAZIAiAZQAIAAAWgSIAZgUQAPgJAygJQA+gDAWAAQAtAAAvANQAZAHAVAJQAaAKAiAYIAeAVQACAAAggdQAugdA/gBQAMABAfAGQAJADBBAfQAGAAA2ghQBDgfBAAAQAeAAAkAPQAnARAPAZQAIgGAjgIQAngJAbAAQAiAAAfANQAsASAAAjQAAAKgKBKQCTAKAABbQAAAkgfBSIAFAHQAiADASAJQAnAVAAA3QAAAigWApIgXAhQAAAFAhAfQAbAngVAyQgZA8gbAVQghAVgYATQAUAVAFAaQADANAAAYQAACXiUAAQgTAAgWgEIgLAIQgOALgbAKQgYAIgKAAQg7AAgkgOQgfgRgOgFQgUA7gXAYQgdAcg1ABQgWgBgSgLQgMgIgHgJQglAqgnAPQgZAJgnAAQgjAAgigPQgegNgOgRQgeAcg0AQQgnAMgbAAQgpAAgggTQgOgHgdgbQgfA2h0AAQiGAAhOhSg");
	this.shape_7.setTransform(124.3,63.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AB4KAQgbgGgJgFIgVgOIgTgOQgKgFgFAGQgHATgrANQgnALgzAAQiFAAhOhSQgQAOgcALQgfAMgdAAQhOAAgigpIgVgcQgHgNgIAAQgHAAghAJIgjAIQhRAAgjgqQgUgrgLAAQgIAAgOAMQgNAMgNgBQgGAAgPACIgUACQgIAAgOgDQgQgDgHgDQgMgGgGgMQgGgKgEAAIgiADQgcADgGgBQgjgCgKgDQgMgDgbgXQgggbgIgoQgDgMAAgnQAAgVAEgPQAFgbASgVQhCgdgeg8QgTglAAgfQAIgjADgHIAjgsQgMgOgMgWQgXgrAAgqQABglAfgZQAZgUATAAIAUACQgRgagQgoQgOgjABgKQgBgrAighQAkgnBLgUQgFg+AggmQAeglAxAAQAuAAAcAIQAWAGAQAMQAKgPAZgQQAmgYAyAAQBdAAAvAvQAMAMASAVQAQAOAQAAQAEAAAvgfQA6geA/AAQALAAAQACQAVAEAOAGQAQAGAlAaIAiAYQAJAAAVgSIAZgUQAPgJAygJQA9gDAXAAIAAABIA+AMQBBANAKAEQAbAKAjAYIAdAVQACABAhgdQAtgdA/ABQAKAAAiAHQAHACBCAfQAGABA3ggQBCggBAAAQAeAAAkARQAnASAPAYQAIgGAjgHQAngJAbAAQAqAAAhATQAiAUABAcQAAAKgKBKQCTALgBBaQAAAogfBPIAFAHQAegDAdAaQAgAcAAAlQAAAigWApIgXAhIAQASQAQARADAFQAFAIAJAiQAAAxgnArQgHAIhIBAQATAUAFAbQADAMAAAYQAABLgjAlQgkAnhNAAIgZgDIgRgDQgHACgWASQgTASglgBQg7ABgjgPQgfgSgPgFQgTA9gYAXQgcAbg2AAQgVAAgTgMQgLgHgIgLQglArgnAOQgZAJgmAAQgfAAgfgKQgmgNgOgXQgdAdg1APQglALgcAAQgJAAgYgFg");
	this.shape_8.setTransform(124.3,64.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.8,248.6,129.5);


(lib.FRD_MODEL_part_037 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B8AD").s().p("AByOKQAAgKAoh0IARg5IARg+IAHgqIAFgkIAmj1QAPhlAAg0QAAjwgmi+QgaiFg4iTQgihag/hIQg2hBhLgsQhYg1h2geIg/gRQgOgFgGgFQFQAUCuCNIAJAHIAKAIIALAKIALALQDWDSAAHMQAAA6gGBXQgLCZgaCrQgDAbgQBPIgKA3QgBAVgOAuIgLAhIgDAKQgBAIgXA9QgWA+gVASQgUASgSAKQgTAKgsATIAAgBg");
	this.shape.setTransform(130.4,93);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAAIABAAIgBABg");
	this.shape_1.setTransform(0.5,126.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("AjxOVQjIgOg7gJIhSgNQgqgJgNgOQgMgQgcgwIgeg1QgnhEgsjrQgtjtAAiWQAAnuCbjhQC3kJHFABQA6AAA3ADQFQAUCwCNIAJAHIAKAIIALAKIALALQDWDSAAHLQAAA9gGBVQgLCZgaCrQgDAbgQBOIgKA4QgBAUgOAvIgLAhIgDAKQgBAIgXA9QgWA+gVASQgUASgSAKQgTAKgsATIgUAJQhvApk8gBQiEABjlgRg");
	this.shape_2.setTransform(85.1,95.4);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABmPBQgxAAjbgLQjMgLgUgCQiIgOgmgFQhHgLgOgPQgSgUgjg2Qgig1gTgzQgSg0gkimQgkimAAgoIgJhCQgJhFAAh3QAAhZAKh/QAKh/AGgrQAHgqA1iRQA0iRA4gvQAjg1AugXQBnhTCCglQB6gjCoAAQDUAACMAbQCzAiB2BWQEYDNAAIqQAABbgXDJQgXDJgyDRQgzDSgeASQgeAShlAiQhjAhliAAIgBAAgAtNE7IACACIgDABg");
	this.shape_3.setTransform(85.1,95);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.3,-1.1,173,192.4);


(lib.FRD_MODEL_part_035 = function() {
	this.initialize();

	// shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("Ag/CPIAdg4QAeg+AAgaQAAgugkg3IgbgnQANgCAOABQAtAEAgAmQAiAogEA8QAAAKgDANQgFAagKAWQggBGhEACIgBAAIgLAAg");
	this.shape.setTransform(26.7,16.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7A6760").s().p("AAfAkQglAAgigeQgbgVgEgTQALgEALAKIAUARQAIAIAsAMIAxAPIgLAJQgIADgRAAIgFAAg");
	this.shape_1.setTransform(15.9,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLCPQg4gGgdg6QgagwAEgfQAGhLApgmIAJgHIACgCIACgBIABgBIAGgEQARgKATgDQANgCAMABQAuAEAhAmQAhAogDA8QAAAKgDANQgFAagKAWQggBGhFACIAAAAIgLAAg");
	this.shape_2.setTransform(21.5,16.1);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah1BaQgag4AEgkQAHhdAwgsQAigiAuABQAHgCAKACQAQACAPAFQAfAPANANIAQARQAnAvgDBIQgDAzgZAxQgoBJhIACQhQAAglhUg");
	this.shape_3.setTransform(21.5,16.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7.4,-1.1,28.2,40.8);


(lib.FRD_MODEL_part_034 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AAFBuQATgjAAgeQAAgvgYgtQgcg6g9gXQAXgKAaABQAyACAmAmQAqApAAA7QAAAngOAhQgYA9g7ACIAMgcg");
	this.shape.setTransform(22.8,16.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6C7C9").s().p("AgWBSQAAgDAGgQQAGgRAAgFQAAgTgQgsIgLgcQgMgYgCgHQA7gDAUARQAFAEAGAJIACABQAJAWACAcQABAkgLAiQAAAAAAAAQgBAAAAABQAAAAAAAAQAAAAABABIgGACIgBABIguAKIgLABIAAgBg");
	this.shape_1.setTransform(25,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AgfA+QAJgXAAgRQAAgIgPgoIgKgcIAggcQACgCAGgCQAHgBAKADIAGADQABAAAAAAQAAAAABAAQAAABABAAQAAABABAAQAZAhADAtQABAfgIAfIgXAJIgBAAIgzAQIgFABIAIgZg");
	this.shape_2.setTransform(25.4,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6C7C9").s().p("AARB0IgHgCQAOgdAAgaQAAgxgYgrQgcg6g9gYQAXgJAaABQAyACAmAmQAqApAAA7QAAAngOAhQgIAVgNAOQgPgFgXgDg");
	this.shape_3.setTransform(22.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7A6760").s().p("AhKALQgGgEgCgHQgCgHgCgDQABgMACAAQACgBAJAGQAdARApAAQArAAATgIQAPgKAIgEIADAAIABAHQAAAPgUALQgVAMgeAAQhJAAgRgMg");
	this.shape_4.setTransform(19.3,38.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAeCKQhQAAgtgmQgjgeAAgmQAAhUApguQATgVAXgJQAWgKAZABQA0ACAmAmQApApAAA7QAAAngNAhQgZA9g8ACIgDAAg");
	this.shape_5.setTransform(18.7,16.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhHBRQgbgFgEABIgDAAIgCAAIgEgBIgFgGQgLgSgBgTQgDgkAHgdIAEgDQAKgMAKgFQAhgaBNgEIAPgBQA9gCAUAQQAFAFAGAIIACACQAJAWACAbQABAkgLAjQAAAAAAAAQgBAAAAAAQAAAAAAABQAAAAABAAIgGADIgBAAIgwAKIgLABIgLABIgjACIgEAAIgUAAQgjAAgUgDg");
	this.shape_6.setTransform(17.2,16.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D6B8AF").s().p("AiDAkQgZgNgBgWIADgBIACAAIAAAAQABAYBMgCQBqgEBDgUQA3gTAAgTQgBgJgJgBQAHgCAGACIABAEIABAKQAAAegyAZQg7AhhaAAQg8AAgegQg");
	this.shape_7.setTransform(17.9,21.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhrBSQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQgLgNgFgOIAEgCQAugRBIg7IAkgiIAfgbQADgDAFgCQAJAAAKADIAHACQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAYAgADAuQABAfgIAeIgXAJIgBABIg1AQIgFABIgHACIgdADIgCAAIgEAAQgqAAg9gIg");
	this.shape_8.setTransform(17.4,16.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6B8AF").s().p("AicAcQAAgJAGgJQADAGAKgBQAVgLAggKQA+gWBjgFQAdgBAoAHIAFAAQAEAGACAGIgLACIgJADIgTgEQgfgGg5ACQg3ACg1ATQg1AWgQAJIgJgGg");
	this.shape_9.setTransform(17.8,21.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AA7B0IgHgCQgegGgigCQgygDgjAJIgHgHIgagzIAAgBIAAgCIAAgFQAAhUApguQATgVAXgKQAWgJAZABQA0ACAmAmQApApAAA7QAAAngNAhQgJAVgMAOQgQgFgWgDg");
	this.shape_10.setTransform(18.7,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_6},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_4}]},1).to({state:[{t:this.shape_10},{t:this.shape_4}]},1).wait(1));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ah+BvQgegkAAgqQAAhjAyg4QArgxA/ACQA+ABAuAuQAxAyAABLQAAA2gTAqQggBIhOAAQhqAAgwg8g");
	this.shape_11.setTransform(18.8,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhSBqQgdgEgKgIQgIgBgEgGQgEgEgDgEQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAQgMgXgBgXQgCgkAFggIgBgDQAAgEADgEQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAJgNAkgTQAogZAegDQAEgDAKAAQAFgBADACQAEgBAJAAQAEgCANAAQA3gEAbAOIAIAFIAFADQASAJAGALIACABQALAcADAlQACAhgGAhQgCAIgGAJQgEAJgOAHQgUAOgXACQgOADgOABIgcABQhFAAgngHg");
	this.shape_12.setTransform(17.5,17.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AiDAkQgZgNgBgWIADgBIACAAIABgEQgCgDAJAAQAoAHAdgBQBjgEA+gWQAfgNAVgLIAFABQAHgCAGACIABAEIABAKQAAAegyAZQg7AhhaAAQg8AAgegQg");
	this.shape_13.setTransform(17.9,21.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhUBtQgUgEgMgEQgMAFgbAHIgFgBQgDgDAAgEQgBgFAMgFQAEgDAEAAQgJgPgEgPQgMgBAAgGQgBgEAggMQANgEAXgOIAOgJQAGgHAMgGQAHgHAHgEIAigfQBFhHAXgCQAHgBAJAEIAAAAQAMgBARATIAIAKQAAAAAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAQAWAlADAxQAAAYgDAZQAXgBABARQAAAOgOABQgaAEgMAGIgbAKQgRAKgUAAIgCAAQgfAHgYABIgJAAQgkAAgkgIgAiGA5IABAAIADgCIgEACg");
	this.shape_14.setTransform(18.1,16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AicA9QAAgKAGgJIgBgFIABgFIgCgCIACgFIAAAHQAKgbAtgdQAtgeA9gKQAcgEAdAGIABACIAEAHQhHAMg8AdQAtgNA4AAIAUABIANgBQBMgCACAYIgCAEQABABAAAAQAAAAAAABQgBAAAAAAQAAAAgBABQAEAFACAHIgLACIgJADIgTgEQgfgGg5ACQg3ACg1AVQg1AVgQAJIgJgFg");
	this.shape_15.setTransform(17.8,18.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AB0CXIgRgHQgYgJgdgFIgBAAIgGgBIgSgDIgGAAIgRgCQhGgDgzAQQgNAEgKAEIAAgEQAAgQASgKQgcgjAAgoQAAhjAyg4QArgxA/ACQA+ABAuAuQAxAyAABLQAAA2gTAqQgGAOgIALQADAEABAFQALAIAAAKQAAADgCACQgJgGgMgGgAhiBnIAAAAIgHgGIAHAGg");
	this.shape_16.setTransform(18.8,15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11}]}).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[]},1).to({state:[{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.1,-0.6,31.5,42);


(lib.FRD_MODEL_part_033 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAUQgHgJAAgLQAAgLAHgIQAIgJAJAAQAKAAAHAJQAIAIAAALQAAALgIAJQgHAJgKAAQgJAAgIgJg");
	this.shape.setTransform(2.7,2.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,5.1,5.9);


(lib.FRD_MODEL_part_032 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRATQgHgIgBgLQABgLAHgHQAHgJAKAAQALAAAHAJQAHAHABALQgBALgHAIQgHAJgLAAQgKAAgHgJg");
	this.shape.setTransform(2.7,2.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,5.2,5.7);


(lib.FRD_MODEL_part_031copy2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA/IgCgDIgBgHQABgDAHgRIAGgRIgFgJQgGgIgKgLQgFAGgNAIQgOALgDAAQgCgBgDgEIgIgIQAIgOAYgVQAfgdAZAAIAYAFQAYAGAJAFIgmAIIghAIIALARQAHAPAAAUQAAAQgGANQgIAQgLAAQgHAAgCgCg");
	this.shape.setTransform(7.5,19);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A69D").s().p("AgxA6QgUgSAAgSQABgZAgggQAkgjAmAAQAfAAABAgQAAAVgZAmQgbApgSAGQgJADgIAAQgRAAgPgNg");
	this.shape_1.setTransform(7,19.9);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("AgjB9QgRgHgWgSQgUgSgEgHIAAh6IAJgNIADADIASgVQAigjAYgIQAWgJANAAQAkAAAVAsQARAhAAAhQAAAvglAyQglAxgVACQgSABgBACIgCAAQgDAAgPgGg");
	this.shape_2.setTransform(9.7,16.2);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyCaQgQgEgEgCIgsgnIAAiOQAKgTgBgGQgEgKAAgKQAAgGAQgMIAagTQAQgOAWgMQAGgEARgFQASgIALAAQAvABAaA+QATAtAAApQAAAvgtA5QgwA/gxAAQgGABgRgFg");
	this.shape_3.setTransform(11.3,15.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,23,31.8);


(lib.FRD_MODEL_part_031 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOA/IgCgDIgBgHQABgDAHgRIAGgRIgFgJQgGgIgKgLQgFAGgNAIQgOALgDAAQgCgBgDgEIgIgIQAIgOAYgVQAfgdAZAAIAYAFQAYAGAJAFIgmAIIghAIIALARQAHAPAAAUQAAAQgGANQgIAQgLAAQgHAAgCgCg");
	this.shape.setTransform(7.5,19);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A69D").s().p("AgxA6QgUgSAAgSQABgZAgggQAkgjAmAAQAfAAABAgQAAAVgZAmQgbApgSAGQgJADgIAAQgRAAgPgNg");
	this.shape_1.setTransform(7,19.9);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("AgjB9QgRgHgWgSQgUgSgEgHIAAh6IAJgNIADADIASgVQAigjAYgIQAWgJANAAQAkAAAVAsQARAhAAAhQAAAvglAyQglAxgVACQgSABgBACIgCAAQgDAAgPgGg");
	this.shape_2.setTransform(9.7,16.2);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgyCaQgQgEgEgCIgsgnIAAiOQAKgTgBgGQgEgKAAgKQAAgGAQgMIAagTQAQgOAWgMQAGgEARgFQASgIALAAQAvABAaA+QATAtAAApQAAAvgtA5QgwA/gxAAQgGABgRgFg");
	this.shape_3.setTransform(11.3,15.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,23,31.8);


(lib.FRD_MODEL_part_030copy2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("ABZBBQghgTgfgGQgTgDgPAAIgWgDQgsgEgRAHQgGADgCACQgBgRAEgSIABgGQADgNAFgRQAPgsAfABIADABIAAAAQAfADBjA7IAFAQQAFAXABALQAAAKgFATIgBADIgHgIg");
	this.shape.setTransform(12.4,9.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA4BXIgigMIABgBIgCAAQgjgMgfAFQgEgBgEABQgCAAAAgHQAAgPAbgGQAMgCAOAAIgXgDQgrgEgSAHQgFADgDACQAAgQAEgTIAAgGIgDASIgXADQAGiFBKAOQBOAQAoAbQAoAbgGAbIgTgJIAFAQQAGAXAAALQAAAKgFATIAAADQASAUgdAGQgUgDgQgJg");
	this.shape_1.setTransform(11.8,9.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-0.7,23.5,20);


(lib.FRD_MODEL_part_030copy = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAoAyQgQgLAAgIQAFgeAHgNQgNgDgfgCIglgCQgCADAAgKQAAgLARgGQAQgGAZAAQAKAAAKACQAKADAHAEIAAA4IgBAHQgBAMACAIIAAAHIgIAAg");
	this.shape.setTransform(11.3,18);

	// shae
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A69D").s().p("AgQAiQgQgSgIgUQgJgRAJgQQAKgSAWAAQAXAAAfAPIAAAvIgDANQgGAjgMAAIgHABQgSAAgQgWg");
	this.shape_1.setTransform(11.5,18.9);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("AA3B/QgsAEgnguQgugyALg8QAAgqATgeQASgfAaAAQAJAAAhAOIAYALIAAC4QgBAAgBAvIAAABg");
	this.shape_2.setTransform(8.9,14.9);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABLCcQhJAAgngtQgogsAAhMQABiRBGgBQAJABAeAFQAcAFAQAGIAAAiIgIgCQgqgFAAAqIAKAUIACAEIgBAPIALA8QAEAPAEALIAEAdQAFAPAKAIIgBAUIACAAIAAAcIgCAAg");
	this.shape_3.setTransform(7.8,14.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.6,16.2,31.2);


(lib.FRD_MODEL_part_030 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgLAsQgDgEAAgJQAFgeAHgNQgNgDgegCIgjgCQgCADAAgKQAAgLAQgGQAPgGAZAAQAqAAAkAUQAfAQAAAMQAAAIgBgDIgGAFQgFACgGAAQgHAAgPgFQgPgGgLgFQgDAFgBAPQgDAQABAGIgCAMQAFABgKAAQgKAAgFgGg");
	this.shape.setTransform(14.5,18);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C2A69D").s().p("AAAA4QgbgCgUgRQgWgUAAgfQAAgpAiAAQAjAAAlAbQAhAXAAAHQAAAagWAPQgTANgYAAIgFAAg");
	this.shape_1.setTransform(13.7,18.9);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFD8C9").s().p("AhDBhQgrgkAAhEQAAhBAWggQAQgYAVAAQALAAAlAQQAwAVA4AlIAKANIAABuQgEADgMAMQgMANgIAGIgYAQQgPAKgGAAQg8AAglggg");
	this.shape_2.setTransform(13.4,14.9);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhTBvQgmgtAAhLQAAhFAQglQARgoAiAAQA1ABA4AfQA6AgAAAdIAJAUIAAB5IgXAhQgTAbgRAIQgPAJggAAQg9AAgmgtg");
	this.shape_3.setTransform(12.3,14.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.6,24.5,31.2);


(lib.FRD_MODEL_part_029 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39394F").s().p("ACOBhQg2gqh2g2Qh4g1ivgXIgBAAIgBgBQgDAAgBgKQAAgMAMgFQAKgFAVACQApACBQAZIAAAAICyBAIAAAAQA3ATA/AsQBDAvALAdIAAACIgBADIgBABIgFAEIgBAAQgJAAgwglgACrgNQh9hQhugeIAAgKQBggCCOBXQCOBVAQA4IgDAFQiDhggbgPg");
	this.shape.setTransform(32.9,13.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,66.4,27);


(lib.FRD_MODEL_part_028 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAOAJQhjghgigIQAqgWBbAfQBXAbATAhIgBADQgDACgIAAIheghg");
	this.shape.setTransform(12,4.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,24,8.5);


(lib.FRD_MODEL_part_027 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiHAXQAOgPAlgKQAtgOBZgPQAAgCAoADQApACAFAFQgSARhHAGQgkAEgmADIg4AVQgPAFgPAAQgRAAgFgKg");
	this.shape.setTransform(13.7,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/AZQAHgbAagNQAVgKAXgCQAOgEAPgBQAWADAYAEQAWADAXgBIAsgGIAOAEQgHAYgdABIgSADIgUgBIhVgJQgaADgWAHQgbALgVATQgBgFABgDg");
	this.shape_1.setTransform(15.6,1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.4,6.7);


(lib.FRD_MODEL_part_026 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A43C51").s().p("ACsDCIAQhQQARhVAAgrQAAg1gUg6QgOgkgEgOQAygbAAACQAIARATAgQAZA0AGAzIAAADIACAZIAAA1QAAA0gWAzQgTArgNAWQgbgCgYgFgAkKBgIgKgwQAAgbAOgVQAfAAAgANQgCAKABAMQABAUAFAQIgkALQgbAIgEADIADACIAEABQAiAAAegNQAEAIAGAGIgSAOIgEADIgkATQgRgMgLgZgAhZBRQAOgTAAgPQAAgbgcgVQgbgWAAgDIAAgBQAMgDAPACQAeADAVAXIACACIAHAGIAFAKIABACIABACIABABQAGAPAAASIAAABIgJAYIAAAAIgBABQgSAYguAAQADgJALgOgAjEgBQgigLgXAAQALgNASgMIAMgHIADADIAbAYQgHAIgFAJIgCgBg");
	this.shape.setTransform(51,23.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DB465F").s().p("AlyBwQgQg6ACgvQACgtAIgjQAHgfAWgvQAVgvAJABQAvADAwAqIB0BnIAEADIAaAYQgHAIgEAJIgDgBQgigLgXABQgQAAgKAGIACAEQACABAGAAIAHABQAfABAhALQgCAKAAAMQABAVAFAPIgjALQgbAIgFADIADACIAFABQAhAAAfgNQAEAJAFAGIgSANIgEADIgjATIgRAIIhqApQgvASgVAKQgigjgQg6gAEYC9QgPgEgOgFQglgNgSgJIgXgLIgpgYQglgVAAAAQgBABgKgEQAHgHAGgLIABgDIAHAFQAaASAfAAQAOAAAKgJQg8gPgLgEQgIgKgHgGIACgWIgCgMIAFgFQAMgOADgCIAcgHQAagIAAgHQAAgMguAQQgWAIgMAIIAAAAQgHgJgIgKIgDgDIgBgCIAggiQAsgwASgOQARgNBGglIATgKQAygaAAACQAIARATAfQAZA1AGAzIAAACIACAZIAAA1QAAA0gWAzQgTArgNAWQgbgBgYgGgAABBjQgQAAgQgJQgJgEgJgIIgFgFIgFgGQgGgGgCgGQgDgHAAgGQAAgNACgLQACgJADgHIAGgIQAEgHAGgFIAJgHIAHgDIAJgEQAMgDANACQAeAEAVAWIACACIAHAHIAGAJIAAACIACADQAGAQAAASIAAAAIgJAYIAAAAIgBABQgSAYguAAIgCAAg");
	this.shape_1.setTransform(40.2,24.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AlXDhQgXgKgKgVQgnhcAChkQADhcAhhYQAPgnAagJQAagJAmAWIABAAQAiAQAsAhQA2AnAtAtIALALIABABQAGAEALALIAFAGIAEAEIAFAGIAGgDIAYgLIADgBIATABQAZADAUAJIAAAAIADABIABgBIAAAAIACgCIAAAAIAJgLIAGgGIABgBQAWgjA7gsQBCgrATgIQBUgjAUgHIABAAQAYAKAOAmQAeBNAFBRIABAJIAAABIAAAOQADBigoBcQgIAUgVAKIgDABIgCAAIgOAFQgTAEgUgGIgMgFQgmgHhUgsQgqgVgYgPIgbgPIgKACIgEABQgPAFgSABIgNAAIgMAAQgVgDgSgKIgQANIgYAPQggASgsATQgfAOgeALIgcALIgRAHIgBABQgUALgTAAQgQAAgQgHgABGARIgBgCIABACgABeADIABAAIAAAAIgBgBIAAABg");
	this.shape_2.setTransform(40.2,24);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,0.8,82.8,46.4);


(lib.FRD_MODEL_part_025 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// f
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DB465F").s().p("AhtC+QgTgFgBgFQAAgGAWhfIAfiCQADgVALgnQANgtACgNQABgUASgEQARgCAgAKIA/ATQAuAOAAAEQgHApgGAAQgYACgegIQgdgJgTABQgKABgQBMQgPBFABALQABAQAVADQAjAEAXALIgGATQgFARgDgBQgnAEgXgEIgZgEQgRACgGAmIgDA1IgEAAQgRAAgQgEg");
	this.shape.setTransform(59.4,41.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#300F14").s().p("AiIDVQgYgNAAgJQgDgVA+j4IARhGQANgqAUgaQAQgVBhAeQBiAeACARQgRBUgMACQhVgHgRgFQgZBJgBAkQASAGAqAHQAUADACAQQABAMgMAfQgNAkgQABQguAEgPgCIgTgEQgCAEgGAyQgFAlgSABIgPABQggAAgZgNg");
	this.shape_1.setTransform(59.6,41.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DB465F").s().p("Ag4DNQgRgIgOgMQATgbALgRQATghgMgMIgWgNQgVgMgdgbQgCgCAFgQIAIgTQAZAGAfAUQASAKAMgLQAHgIAeg/QAihGgHgIQgPgMgagLQgdgMgRgQQgFgFAVgkQACgDArARIA8AZQAiANALANQAMAOgMARQgGALgSArQgQAlgKASQgLATgwBmQgoBYgEAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAQgFAAgMgFg");
	this.shape_2.setTransform(59,42.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#300F14").s().p("AgxDvQgigHgegbQgMgNASggQAagqACgEIgSgJQgOgKgiggQgLgKAMglQAKgdAIgJQAMgLARAKQAlAVASAEQAYgcAXhIQgOgIhHgvQgJgIAohNQAMgMBdAmQBhAmgCAaQAAAhgQApIgeBBQhqDogPAOQgEAEgKAAQgIAAgLgCg");
	this.shape_3.setTransform(58.7,42.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8D871").s().p("AhbHUQgmgFgSgDIBkjAQAsAVAhAkQgdBFgBAAQAAAAgVAoQgUAngHAAIgrgFgABlmlQAAgFALgVQAJgVACgEQAOADAGAGQAFAEAAACQAAAGgDAGQgDAIgBAGIgIATg");
	this.shape_4.setTransform(65.5,51.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8EA8BB").s().p("Ah1E1QgVgRgegIIDFmSQAshdAAgiQAAgSgLgSQgJgPgggnQCUAcAABXQAAAyhWC0QhMChhdClIgfgbg");
	this.shape_5.setTransform(78.6,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(2));

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7596A8").s().p("AgSCQQgjgOg1gwQhghSAAhIQABg0AkgdQAZgUAVAAQAzAAAbAsQARAeA1BoQAHAMBMBJQBJBJAKAHIAHAEIgJAAQiNAAhGgeg");
	this.shape_6.setTransform(22.6,78.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF7F").s().p("AgBHWQgmgEgSgEQgZABgSgTQgogpgVgRIgvgkQgdgYAAgIQAAgGAJgkQAKgmAAgMIgCAAIAGAAQAzAABSANQBZAOAhASQAsAVAjAkQgdBFgBAAQgCAAgVAoQgUAmgHABIgpgGgACimrQAKglADgGQACgEAEgBQAQAAAQAGQAOADAHAGQAEAEAAACQAAAFgCAHQgEAIgBAFIgIAUg");
	this.shape_7.setTransform(56.4,51.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A4C5DB").s().p("AAQFGQgUgQgdgIQgwgYhrgPIhzgNQAPh1AuiTQAeh3AahQQAahQA2g7QA9gEBZAOQBMAMAjAMQCVAdAABWQgBAyhWC0QhMChhfCmIgegcg");
	this.shape_8.setTransform(65.2,46.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(41,43,51,0.18)").s().p("AAXAIQAEABARAKIATALgAg+gdIAAAAIAcALg");
	this.shape_9.setTransform(87.7,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(2));

	// hat
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgEHuQhogNgegBQgUAAhCgTIg/gTQhAgdgvgoQhbhNAAhaQAAhEA0glQAkgZAigBQAwAAApBBQAYAoBDByQADiKBbkhQBdkyA2ABICbANQAAgPAKgeQANgjANAAQADAABJAeIAXAJQAHAEAAAEQgBAOgHAQQgLAVgGANIBWAmQAEABASAKIASAMQAcAZACAEQAIAOAAAsQAAASgkBfQgxCBhXCtQhXCugTAgIgSAdIgcA3QgbAvgXAAQgXAAhhgMg");
	this.shape_10.setTransform(48.8,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,0,98.1,101.3);


(lib.FRD_MODEL_part_023 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AidAIQgKgXCggBQCegCAGAOQACAEgBACQgCAHgJAEQgMAFiOAAQiSgBgEgJg");
	this.shape.setTransform(15.9,1.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.8,3.6);


(lib.FRD_MODEL_part_022 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgUAWQgLgKAAgMQAAgMALgIQAIgKAMAAQANAAAKAKQAIAIABAMQgBAMgIAKQgKAJgNAAQgMAAgIgJg");
	this.shape.setTransform(-2.6,3.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,0.5,6.4,6.3);


(lib.FRD_MODEL_part_021 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTAUQgJgJAAgLQAAgLAJgIQAIgIALAAQAMAAAIAIQAJAIAAALQAAALgJAJQgIAJgMgBQgLABgIgJg");
	this.shape.setTransform(-2.4,2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-0.5,5.9,5.8);


(lib.FRD_MODEL_part_020 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AADAIIhugKQgEgCgDgFQgCgFADgFQAEgIB1AMQB5ANgPAaQABgChwgOg");
	this.shape.setTransform(11.6,2.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,23.3,4.8);


(lib.FRD_MODEL_part_019 = function() {
	this.initialize();

	// shade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AiuErQg3hDAAiAQALhnAFgNQAGgSAJgWIAHgSQASglB1joIAEgHIAEAHQCfELB3DnQAAABAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgMADgjAhQgwAtg5AeIhpA5QgjAQgfAAQgpAAgmgwg");
	this.shape.setTransform(26,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7B8AE").s().p("AieBqQgagHgJgIQAeAFAPgBQAXgDAygUQAogGBrhSQBqhQACgOQAOANAAARQAAAQgFAIQgIAOgqAqQhBBAg/AZQg0AWhPAAQgQAAgWgFg");
	this.shape_1.setTransform(31.9,63.6);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhAFyQhXgDgyhSQgyhSAAh0QAAgZALg2QAOg8ARgoQAghFA3hjQAvhUAKgOIAIgLIAMAEIAEAHQCSD7A9B6IAxBlIAAAGQAAAGANAQIABACQADAGABgDIABABQASAUAAAVQAAAJgFANIgCAGQgNAPgbAbQhCBDg7AWQg1AUhKAAIgRAAg");
	this.shape_2.setTransform(25.3,37.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,51.3,74.6);


(lib.FRD_MODEL_part_018 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AhRCVQgNgbgGgGIgDADIgBADIAAjBIAhgnQAUgYAKgKQAfgcAaAAQAjAAAZAmQAdAsAABLQAAC8hpAAQg7AAgWgYgAgDAKQAHAUAAAHQAAAJgTAlQAAAGABAAIADAAIABABIAGAAQAJAAALgOQANgRAAgWQAAgLgJgXQgIgVgKgLQAIgCAAgBQAcAAANAEIAZAIQgEgWgagHQgYgGgdAIQhMAWAAA2QAAAGACABIACAAQAHgCARgQIAlgiIAPAag");
	this.shape.setTransform(17.5,20.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4DFIgCgBQgogPgKgUIgMgcIAAjkIAbgeQBFhLAaAAQAfAAAkAlQA1A3AABqQgBBLgZAzQglBNhUAAQgYAAgHgEg");
	this.shape_1.setTransform(19.2,20.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(7,0,24.4,40.3);


(lib.FRD_MODEL_part_017x = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACuEYIAAAAIAAABgAitkXIAAgBIABABg");
	this.shape.setTransform(48.2,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242330").s().p("ABbHIQgIgFAAgHQAAgFACAAIAEgBQAeARAfggQAMgNACgBQAFgBAAASQAAAIgMALQgRAPgaAAQgPAAgIgEgACkAOIgBgFQACgIAIgMQAGgKAAgKIgDgTIgDgSQAAgEgCgEQgDgEABgEQgBgEACgBIACABQATAAAGAbQADAKAAATIgFAaQgJAWgQAAQgFAAgBgCgAi9iFQgKgOAAgKQAAgLAGgTQAHgXAJgEQAGAAAAAHQAAAGgFAKQgFAJAAAFQAAAOARAQIARAPQAAAPgSAAQgNAAgLgQgABljSQgBgBAAgIQAAgEAFgMQAEgLAAgPQAAgSgNgVQgNgVAAgDIAAgFIABABQAmAJAJAUQADAHAAAfQAAAagCAGQgFAQgZAFgAg6moQglgbgYAFIAAgGIAAgEIAAAAQAvgLAjAVQAeASAAAXQAAAHgLAJQgVgVgTgOg");
	this.shape_1.setTransform(42.9,63.2);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39394F").s().p("AAwIqQgSgXgBg5QABgaAcgqQAcgqAAgDQAAgKgJgDIgpgQIgPghIAWhBQgPgNgagCQgcAAgOgCQgugHAAhWQgBgEAIgbIAHggQhcgwgMgZQgEgIAAgRQAAgTgGgOQgDgHgDgRIgDgWQgCgQghgNQgigLgEgEQhIhAABgZQAAgTAKgSQAKgSASgMQAKgGAdgOQANgFAAgLIgFghIgEghIADgWQACgNgJgGIgtgjQgVgSAAgEQgBgGADgEIAEgEIAUAAQAPACAHAEQAaAKAqAhQAuggAvgpQAkgYA3AAQBGAAAVAsQAJASAAAqQAAAEBdAXQBdAjAABAQAAAIgKAcQgMAhgRAeQA8AdAaA9QAQAmAAApQgWBHgQARQAcAMAMAgQAHATAAAYQgHAngeAWQgDgFgJgKQgIgJgEgBIAAAFQAEAWgPAkQgHASgIAQQAAACADACIAHAGQALgCADgCQADgCAJgMQAlAKAPAcQAKASAAAVQgBAZgdAgQgOAQgPAMIAOAfQANAfAAAHQAAANgMAOQgKALgPAIQgDABgiAHQghAHgCACQgDACgNAVIgQAYQgNAMgpAGQgwAAgSgZg");
	this.shape_2.setTransform(38.4,60.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAqJCQgmgnAAhRQAAgTAHgUQAGgQACAAIAJgQIALgTIgHgEQgTgMgLgWQgQgsAYgmQgUACgQAAQgtAAgZgiQgWgfAAg0QALgrAAgVIgtgcQgogbgDgNIgIgUQgJgZABgOIADguQgygIgzgyQg0gyAAgqQAAgFAEgPQAEgOAAgFQAAgUAmgYQAdgTAKgCQABgBAAgiIABgeQAAgEgFgBQgagGgugyQgKgLgFgNQgFgNAGgJQAGgJAPgJQAQgJARgBQAMAABYAmIAqggQArgiAHgEQAdgSAPgBQAKgBAZADQBGAAAsAtQAjAkAAAjQAAAMBbAQQBaAfAABbQAAAkgOAUQgQAWgCALQA4A0AHAJQAiAtAAA8QAAAMgeBQIALANQANAQAHAPQADAHADAVQADATAAAJQAAAcgPARQgEAFgbAUQgDADgMADQgCABAAASQAAADAiAQQAiAYAAAmQAAAogMAWQgGALgLAPQgFALgHACQgEABAAAKIAJATQAJATAAAKQAAA2gtAVQgQAIg9ALQgGAFgPAkQgXAhg0AAQg0AAgfggg");
	this.shape_3.setTransform(38.1,60.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,-0.1,74,122.2);


(lib.FRD_MODEL_part_017 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACuEYIAAAAIAAABgAitkXIAAgBIABABg");
	this.shape.setTransform(48.2,45.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242330").s().p("ABbHIQgIgFAAgHQAAgFACAAIAEgBQAeARAfggQAMgNACgBQAFgBAAASQAAAIgMALQgRAPgaAAQgPAAgIgEgACkAOIgBgFQACgIAIgMQAGgKAAgKIgDgTIgDgSQAAgEgCgEQgDgEABgEQgBgEACgBIACABQATAAAGAbQADAKAAATIgFAaQgJAWgQAAQgFAAgBgCgAi9iFQgKgOAAgKQAAgLAGgTQAHgXAJgEQAGAAAAAHQAAAGgFAKQgFAJAAAFQAAAOARAQIARAPQAAAPgSAAQgNAAgLgQgABljSQgBgBAAgIQAAgEAFgMQAEgLAAgPQAAgSgNgVQgNgVAAgDIAAgFIABABQAmAJAJAUQADAHAAAfQAAAagCAGQgFAQgZAFgAg6moQglgbgYAFIAAgGIAAgEIAAAAQAvgLAjAVQAeASAAAXQAAAHgLAJQgVgVgTgOg");
	this.shape_1.setTransform(42.9,63.2);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2B2B3A").s().p("AgPIqQgSgXAAg5QAAgcASgcQASgaAGgKQAfgYAugPIAtgOIgsg5QgTgZAAgLQAAgNAhgpQAhgqAAgzQAAgBgigqQAAgKAegpQAdgrAAgcQAAgwhCgkQgigRgMgIQgVgNAAgOIANgcQANgeAAgaQAAgOgHgLQgKgRghgcQgRgRgpgNQgdgJAAgRQAAgFAEgRQAFgSAAgFQAAgXgWgRQgXgSgkAAQgTAAgxAVIgyAUQAbgdAmgaQApgdAdgHIAMACIAAgDQBRgGAgAdQAXAVAAAvQAAAQANAFQAOAFBXAXQBIAUAABEQAAAIgKAcQgMAhgRAeQA7AdAaA9QAQAmAAApQgVBHgRARQAdAMALAgQAHATAAAYQgDAggTARIAAAAQgHAEgJACIgLgKIgMgJIAAAFQAEAWgOAkQgIASgIAQQAAACADACIAHAGQALgCADgCQADgCAJgMQAlAKAPAcQAKASAAAVQAAAZgdAgIgHAHQgLAMgLAJIANAfQANAfAAAHQAAANgMAOQgKALgPAIQgDABgiAHQghAHgCACQgDACgNAVIgPAYQgOAMgpAGQgvAAgRgZg");
	this.shape_2.setTransform(44.9,60.8);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39394F").s().p("AAwIqQgSgXgBg5QABgcASgcQAUgaAGgKQAMgSAAgDQAAgKgJgDIgfgGQgdgKAEgcIAWhGQgPgNgagCQgcAAgOgCQgugHAAhWQgBgEAIgbIAHggQhcgwgMgZQgEgIAAgRQAAgTgGgOQgDgHgDgRIgDgWQgCgQghgNQgigLgEgEQhIhAABgZQAAgTAKgSQAKgSASgMQAKgGAdgOQANgFAAgLIgFghIgEghIADgWQACgNgJgGIgtgjQgVgSAAgEQgBgGADgEIAEgEIAUAAQAPACAHAEQAaAKAqAhIACgDQAbgdAmgaQApgdAdgHIAMgBQBOgGAhAdQAYAVABAvQgBAQANAFQAOAFBXAXQBJAUgBBEQAAAIgKAcQgMAhgRAeQA8AdAaA9QAQAmAAApQgWBHgQARQAcAMAMAgQAHATAAAYQgDAggTARIAAAAIgGAGQgKAAACADQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgBgGIgLgKIgMgJIAAAFQAEAWgPAkQgHASgIAQQAAACADACIAHAGQALgCADgCQADgCAJgMQAlAKAPAcQAKASAAAVQgBAZgdAgIgGAHQgLAMgMAJIAOAfQANAfAAAHQAAANgMAOQgKALgPAIQgDABgiAHQghAHgCACQgDACgNAVIgQAYQgNAMgpAGQgwAAgSgZg");
	this.shape_3.setTransform(38.4,60.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(30,31,38,0.502)").s().p("AB6I4QgYgLgNgVQAOASAaALQATAIATACIgJAAQgQAAgQgHgAiJo+IgEADIgVAQIAZgTg");
	this.shape_4.setTransform(33.3,64.4);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABvJgQgUADgVgKQgYgLgOgVQgRgQgFgNQgJgUAAg/QAAgUAGgTQAGgRACAAIAKgQIAKgTIgcgRQgHgFAAgGQgTgoAZg0QgTACgRAAQgtAAgYgiQgXgfAAgzQALgrAAgVQgIgIgngYQgggTgJgRQgQgkAAgXIAEguQgzgJgzgyQg0gyAAgqQAAgFAGgYQAFgYAMgOQAMgOAUgOQAVgOAFACQAFACABgiIAAgeQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAQgDAAgjggQgjgggGgOQgGgPAEgKQAFgJANgJQAMgIASgCQAXAAAYANQAiATATAGIAZgTIAUgPQArghAWgJQAYgLAlAAQBFAAAsAtQAjAkAAAkQAAAMBbAPQBbAgAABaQAAAkgPAUQgQAXgBAKQA3A1AHAJQAjAtAAA7QAAANgeBPIALAOQANAPAGAPQAEAIADAVQADATAAAJQAAAbgQASQgEAFgaAUQgDACgNAEQgCAAAAASQAAADAiAQQAiAYAAAnQAAArgMAXQgHAOgUAXIgFAIIAMAXQAEAMABANQgEA3gnAVQgRAJg+AKQgPAfgPAQQgaAcgiAAQgIAAgIgCgAEtCTIAGgGIAAAAg");
	this.shape_5.setTransform(38.5,61.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.9,0.1,73.3,122);


(lib.FRD_MODEL_part_016 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8B8AD").s().p("ADLNlIAhi9QAgjJAAhvQAApBifk1Qgzhjg9g9QgTgTgsgeQhuhNg/gUQiNgugxgSQAwgDAzAAQB1AABbAoQCRBAA3AkQAUAMAgAhIABAAQCZCHBKCqQBICmAADQIgCBmQgEB3gGBtQAFCugKAaIABgVIgBAWIgBABIAAAJIAAABIAAAEIAAAKIgJB+QgFAugFAjIgBACQgHBDgUAdIgEAFIgDADIgBABQgIAHgvANQg9ARgUAHIgOAFQgEgIAAgPg");
	this.shape.setTransform(127.2,92.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C9").s().p("AjgOYQiFgIgxgOQivgqgdgKQgUgGgHgPQgFgJgKgnIgbhFQgdhKgqiUQgsicgWjaQgQieAAiLQAAmnFTi9QDFhtENgRQAvgDAzAAQB1AABbAoQCTBAA3AkQAUAMAgAhIABAAQCZCHBKCqQBICmAADQIgCBmQgEB3gGBtQAFCugKAaIgBALIABgKIgBACIAAAIIAAABIAAAEIAAAKIgJB+QgFAugFAjIgBACQgHBDgUAdIgEAFIgDADIgBABQgIAHgvANQg9ARgUAHIgPAFQhbAei1AVQiqATiIAAQiJAAh2gHg");
	this.shape_1.setTransform(86.9,95.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(41,43,51,0.18)").s().p("AgThCQAaA6ANBLQgPhDgYhCg");
	this.shape_2.setTransform(169.5,62.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AniOaQg5gMgvgQIgogOQgagFgHgUQgOgpgDgEQgRgbgahYQgZhQACAKQACAKgXhSQgYhTgOhMQgOhMgZiuQgZisAAg9QAAinAbiDQAfiPA9heQAthEA7gyQAtgmAXgNIBEglQAtgZA0gUQA1gUCngiQCmghBeACQBgABBbAeQBaAcBaA2QBQApBeBfQBeBfA2BsQAbA1AUA2QAaBDAOBEQAPBFADBFQADA6gGBYQgFBigCEcQgBEcgkBPQgjBPgZAHQgaAHgmAOQisAuiNAXQiNAWj8ABQkaAAi8gogAMdK9IABgCIgBACg");
	this.shape_3.setTransform(86.7,96);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,-0.1,173.4,192.4);


(lib.FRD_MODEL_part_015 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#242330").s().p("AinEMIgBgMQAAgWAIgRQAMgWAXABIgLAeQgKAeAFAOIgCAGQgCADgGAAQgNAAgDgLgAhkhaQAAgPAOgUQAQgWAUgJIAFABQACABAAAHQAAAEgSAYQgSAdAFAeQgagFAAgZgABljzQAGgVAYgJQAMgFAKAAQAVAAgGAPQgTAFgVAHIgWAIg");
	this.shape.setTransform(34.5,37.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAAAAIAAAAIABAAg");
	this.shape_1.setTransform(56,8.7);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39394F").s().p("AiDIfQgdggAAgjQABgSAFgTQg4gSgZgqQgQgYAAgRQAAgaAQggIAPgbIgegqQgegrAAgcQgBgNARgMQARgLAAgCIgBgHIgBgEQgjAEgZgcQgegfAAg4QAAgrAWgXQAEgFAigQQAZgMANgZQgXgLgIgHQgSgSAAg6QAAgjAgglQAkgqAxgBIgLgZQgMgWAAgKQAAgdAogSQAqgTBCAEIgJgGQgFgCAAgGQAEgVANgVQAcgoAyAAQATAAAQAOQAbAYAJAFQACgBAtgYQAngVAYAAQANAAAGADQAIADAIAJQABACgFAEIAMAOQAIAKAHAAQAZAAASAIQAZAMAAAZQAAApgqAgQgqAgAAAKQAAALAXAaQAXAaAAAdQgBAdgaARQgmATgZARQANAPAqAcQAkAdAAAdQAAAUgVAeQgXAhgWAAIgNgBIgEAGIATAdQAQAgABAcQgBAMgDAIQgGANgRASQgRASgbAYQgZAVgCAAQgQAAgCgBIgDAGQACAHAUAiQAQAbAAAKQgBAegPAUQgQAWgcAAQgLAAgKgGIgJgGQgGAAAAADIABADIgBAMQAHAPAVAfQASAYAAALQAAAOgKALQgLANgVAAQgIgBgIABQgPACgCAKQADAFAJAJQAAAhgZAOQgaAOgLgNQAAgFgCgFQgGgLgVAAQgCAAgMAUQgQATgXAAQgXAAgagdg");
	this.shape_2.setTransform(36.8,60.4);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah0JbQgEgBgQgJQgQgIgNgfQgMgegDgXIgDgdQgDADgIgGQgyglgVgcQgJgMgCgZIAAgbQAAgFALggQALghAAgGQgsg+gEgKQgJghAAgJQAAgGAFgMQAFgNAAgFQAAgFgJgIIgVgOQgMgPgIgRQgEgIgGgjIgEghQAIg2AWgVQATgSAOgKQAKgFAAgBQAAgEgIgVQgLgbgFgQIgBgZQAAgmAUgdQAXgjA6giQgHgZAAgKQAAgaAJgSQAKgVAYgQQAXgQAXgFIAygIQAmhaBLAAQAMAAAXAIQAWAHAHAFQAFAEACAEQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAQACAAAogTQAogUASAAQATABANADQANADAcAnQACADASAEQAUAFAUAQQANAMAKAYQAIAWAAAMQAAAwghAhQgWAWgOAEIAcA5QAFALAAAXQAAAfgVAWQgVAWgjAGQArAOAUAjQANAXAAAXIgRA3QgXAzgegGQANAWANA8QAAArgoArQgiAkgaAHQAGAJAFAOQAJAVAAAPQAAA/gkAYQgVANgWgCQAPAUAMAqQAAAYgLAXQgSAhglgIQAGAWgTAbQgWAegigBQgSAAgJgHQgJgIgBAAQg1AXgLAAIgGABIgbgBg");
	this.shape_3.setTransform(36.6,59.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.6,73.4,120.8);


(lib.FRD_MODEL_part_014 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AARCCQgjgDghgtQghgwAAhMQAAgkAPgYQARgcAfAAQA2AAAfBEQAVAuABAqQAAAtgQAfQgOAdggAAIgHgBgAg0hIQAAAFgIAGIAxAZQgHALgHAjQAAASANAQQAKANALAFIgKgeIgHgVQABgFAGgMIAHgTQALAHADAEIAOAUQAAABAAgBQgEgfgPgXQgPgbgaAAg");
	this.shape.setTransform(11.9,15.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNBBQgYg9ABg6QAAgtAagfQAXgcAcAAQA8AAAjAzQATAcAGAhQgEAEgGgDQAFAMAIAuQgEBBgKAMQAEgDAHADQAAAAAAAAQAAAAABABQAAAAAAAAQABAAAAAAQACACAAAGQAAAVgYAUQgYATgYAAQhGAAgkheg");
	this.shape_1.setTransform(10.5,15.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.3,0,20.4,31.9);


(lib.FRD_FRONT_part_nose = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1A1A1A").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(0.1,54.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C9").s().p("ABaFbIgEAAIgHgBIgrgRIgMgFQgtgagtgjQgWgQgTgTQgcgdgfgVIgEgDQgUgWgUgDQAGgVAphfQAphdAUgqQAehPAVgsQAWgsBOhOQAAAGADAJIAEAHIACAEIABABIAGAKQAjA+AfBEQAXAzAWA2QAwBwgTB6QgNBXgwBJIgPAQIgBABIgNAEIAAAAIgYAGIgBAAg");
	this.shape_1.setTransform(21.8,36.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BDA39B").s().p("AirhoIAAgBQAvAkAuApQBVBNBtAlIAAAAQAVAHATgHIAAAAIAQgFQgCAZhAAAQivAAhmjSg");
	this.shape_2.setTransform(17.6,65.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjfCiIAAgBIAAAAIAAgDQABgWALgBQAJgZAmhMQA0hmAaguIBBiHQAMgbAwhZIAAgDQAKgFACAAIABAAQAHAEAFAHQBcCaA2CwQAKAgAEAkIADAuIAAABQABAqgJAqQgRBIgiBBQgRAfgfAOQgCAZhAAAQivAAhmjUgABGFIIAGAAIgHgBgAjiCiIAAgBIABACIgBgBg");
	this.shape_3.setTransform(22.8,38.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.1,45.5,74.9);


(lib.FRD_FRONT_MOUTH_COMP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// teeth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AjoBDQiOgQhIgeIgKgEQgkgKgtgXIgpgZQgGgHAJgNIAOgTQBrA6CaAZQCZAbDTgHQDVgHBQgbICDgvQAygSASADQASAEAEAHQADAIAAAPIgLAOIgCgHQi9A/hwAYQh5AaiBAAQiAAAh5gOg");
	this.shape.setTransform(61.7,6.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgbBdQgNgBgRgDIgPgDIgHhJQA/AFAtgBIAIBGQAAADgcACIgcABIgIAAgACzA/QgEgXgIggQAnAAAlgFIAmgDIAGAXQAFAaABAGQgBAGgBABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABIhbAFQgRAAgDgHgAkVBDQgcgDgLgKQACgEACg+QAAADAcADIAgAEIAkACQgCA+gCAFIgOABQgiAAgJgBgAHEAVQgWgOgIgtIAwgRIA7gWQAIASAUA/QgOAMgYAGQgSAEgQAAQgYAAgJgFgAn5AFQgigNgSgSIAahCQArAXA4AaQgOAhgEAVQgBAHgJAAQgPAAgegNgAm0hKIALAEIAAAAg");
	this.shape_1.setTransform(59.7,15.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkVA9QkGgohJhVQACgQALgEIAZARQAHAHAnAUQAvAYAgAKIARAGQB1AiAeAGQBcAQC/AAQCmAACAgYQCBgYC4hBIAHAZQhdAjg8AUQhrAkhkALQgbAEhfAFQhhAHgZAAQh+gBifgYg");
	this.shape_2.setTransform(60,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40152B").s().p("AiJBAQhGgSghgOIAcgfQAWgXAagPQAkgVAvgFQAYgCASACQAJAABFgIQAkAABAAiIBmA2QhWAphHAPQgxAKg+AAQgiAAhMgTgABshSQAFAAAUAGQAWAIALAHQgdgLgdgKg");
	this.shape_3.setTransform(60.6,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#862D59").s().p("AkdBhQhshCgPgoQAXgBAGgFQAOgOASg8QAuAMAdACQgBAAAAAaIAAAZQgBAcADAMQADAKAJAEQAbALAgADQAPACAaAAQARAAADgIQAHgRAChNIABABQAAABBdAHQAHBKADAUQhCASgtAkQgoAfACAUIADAGIgBADQgegNhSgzgAFTCHQgKgXhZgrQgLgHgWgIQgUgGgGAAQgbgHgdgFIgKhQIBigGQAGAYAHApQAHAgASAAQAnAAAfgEQA+gHAAgUQAAgJgGghIgLgpIBngZQAMBHAUAUQgfAgg0AtQgyArgbAQgAn0igIAPAIIgFAJg");
	this.shape_4.setTransform(53.3,20.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFD8C9").s().p("AlDAuQixgjhPg5QgHgHgBgGQAGgNANgEQAOgFAsASQAtATAJADIA9ATQA0ARApAGQAoAIBiAEQBhAECdAEQCfAEBtgaQBtgcAsgZQAsgYAPAFQAOAFADAFQADAGgCAJQgDAIgPAQQigA5h3AWQh8AXiiAAQinAAihggg");
	this.shape_5.setTransform(59.4,5.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBdQgQAAgdgHIgIhUQA+AFAtgBIAKBRQAAAEgcABIgcABIgIAAgACzA9QgDgcgKgiQBDgDAmgEIAPAcQAHAZAAALQgBAFgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIhbAGQgRAAgDgKgAkjA+QgZgFAAgDIAFhKQAAACAVACIAdACIAuAGQgDBHgCAFIgOAAQgeAAgbgGgAG4AQQgJgLgLgwQAIgCAYgLQAsgSAggHQAJAXAUA+QgNAIgSAGQgaAJgYAAQgcAAgIgLgAn6AGQgogNgLgSIAahDQAFADApATIA3AYQgMAbgGAbQgDAKgJAAQgPAAgfgMg");
	this.shape_6.setTransform(59.7,15.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#40152B").s().p("AhbBoQg7gGgkgPQhEgXgQgIQgHgDgCgFIgBABIgBgCIABgBQgEgLAVgSQAPgUA2gqQA6gtAwgCIAKAEQAXAKAagBQAfAAAWgDQAKgBAKgKQAKgJAFABQAYAABZA6QBPAzAfAdQhOAphWASQhDAOg+AAQgyAAgegCg");
	this.shape_7.setTransform(59.9,35.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#862D59").s().p("AmJB7QhkhFgehUIAiAOQARAGAMAAQATAAAOgUQAOgXAJgwQBFAQAEAAQgCAAAAAdIAAAeQgBAcADAMQADAKAJADQAbALAgAEQAPACAagBQAOABAEgCQAEgCABgJQABgnAFg6IACABIBbAIQADAlADAVIAAAOQAAARgWAGQgdAFgJAFQhAAggnAzQgcAkgDAVQg5gcgzglgAD7BnQhEg2h5giIgIhGIBigGQACAeAGAbQALAwAUAAQAnAAAfgDQA+gIAAgTQABgXgJggIgLgnIBngZQAIA6ATAdQAaAmAqgUQhKBdgeAYIhWA2QgjgvgagVgAIliaIAegMQAAAFgHASQgIASgCAFgAo5idIgJgfIAmAXIgTArIgKgjg");
	this.shape_8.setTransform(59.3,20.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD8C9").s().p("AlZAuQivgjgygyIgBgDQgBgFAAgGQABgIACgBIACgBIADgCQABgBAIAAQALgBAhASIApAVIAAAAQAHAEArAIQApAKAbAEQA2AHBVAUIgBgBQBZAQCbAAQB7AAA4gNQAggGAygPIABAAQB1gSBAgjIAlgWIAAgBQASgIAUgBQALABAHAFQAHAFAAAIQABAFgIAKIABAAQgIAMgLAJIgCACQiIA1iAAYQiAAZiXgBQi2AAimghg");
	this.shape_9.setTransform(60.1,3.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhIBbIgJhbQBEAEAngCIALBaQgaAHgZAAQgcAAgegIgACyBCIgNhHQAmAAAkgEQAfgEALAQQgDgOAHAbQAHAgABANQgBAFgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIhbAGQgSAAgDgKgAk6A9QgCgNAGhIQAAACAWADIAdACIAsAGQgDBPgCAFIgOAAQg2AAgagMgAHGAbQgagPgIgyIgBgPQAJgBBegjIAjBiQgKAHgVAHQgbAJgQAAQgVAAgIgFgAoEAEIgpgYIAfhOQA+AiAmANQgKAbgJAdQgGASgJAAQgYAAgggTg");
	this.shape_10.setTransform(59.7,14.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40152B").s().p("Ak2AyQBAhUAWgVQA8g8BNgQIALAPQARAPAmAAQAsAAAZgHQAhgKgQgWQBDgIBYBNQBQBFALAsQjEBkiWAAQiIAAiLhcg");
	this.shape_11.setTransform(59.1,37.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#862D59").s().p("AnXBIQhDhMgOgxIAJAGQAXANA+ATQAUAAAKgVIAchNQAjAIAlAEQgCAcgBAqQAAAfADAJQACALAJADQAbALAgADQAPACAaAAQAVAAAEgOIAFhrQAUAEA4gBQASgBgCAeQAAAQADAQIADAUQhkAXhIBYQgyA7gJAjQhOgzhJhUgAEhCCQgpgzgygoQAdACAngFQA8gIgBgTQABgXgJghQgKgggCgLQABgCBlgYIAPA/QAGAUAKAWQAHAMAsgCQAbgDAXgGQg5BVgVAWQgXAXhoBIQgQgbgdgjgAChARQgNgGgpgJQgogIgFABIgHhCIBggGQAFASAQBSgAImigIA1gSIgcBYQgKgggPgmgApGiEQgMgogIgiQAfASAhARQgRAogGAIQgFAGgEAAQgHAAgFgPg");
	this.shape_12.setTransform(59.1,21);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD8C9").s().p("AlnAkQgQgEgXgFIgBAAIg+gSQhNgagGgGQgHgHgHgMQgGgJAAgDIAAgBIAAgCIALgHIABAAIABAAIBGAaQA+AXBYAMIB/APQBlALCIAAQDjAACUgsQAjgLAwgUQAhgPAMAAQAKAAAPADIACABIAAABIACAJIAAABQgEAIgPALQgMAKgIAEQhmArizAZQiIAThgAAQijAAjRggg");
	this.shape_13.setTransform(60.3,4.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgbBjQgNgBgRgDIgPgDIgKhkIBqACIANBjQAAAEgcABIgcABIgIAAgACyBBQgFgigKgrIADgEQBHgCAlgDQADAFAIAhQAHAfABAOQgBAFgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIhbAGQgRAAgEgMgAkVBJQgcgCgLgLIAHhdQgBACAYACIAhADIAnAFQgEBVgCAKIgOAAQgiAAgJgBgAGxAAQgOgnAAgJIABgFQAEgFAFgBQAsgNAwgRIAkBjQgKAHghAIQgcAIgDAAQgnAAgLghgAn5ALQgigMgSgSIAfhPQAUAKAjAOIAuATQgGAJgOAmQgNAggCAAQgPAAgegNg");
	this.shape_14.setTransform(59.7,14.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#40152B").s().p("AklA5QAXgsAjgtQAhgvAagXQAwgrAvgHQAZgEAeAFQAfAAAPgGQAQgFAZAAQBJAABEBKQAyA1AqBTQisBzibAAQiFAAh/hqg");
	this.shape_15.setTransform(59.2,42.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#862D59").s().p("Am9BTQg+hXgOg3IAMAHQAWAJAcAFQARAAALgOQATgXAMhAIBHAVQgCAVAAArQgBAeADALQADALAIACQAbAKAgAEQAPABAaAAQAPAAADgBQAEgDABgJQABgnAGg7QA5AHAkADIAHBaQAAAEgnASQg0AXguAwQgmAogXAyQgRAlABAPQhLg6hEhigADpBhQhfh1hJAPIgJhNIBhgHQACAeAGAaQALAxAUAAQAnAAAggEQA+gHAAgSQAAgZgJghIgLgoIBmgdIADASQADARAIAcQAKAiAEAFQAWAZA7gPQgTA5gyBCQg5BLhKA0QgjhCgwg7gAIgjDIAagKIgKAvQgOgkgCgBgAo5juIAnAbIgWAvg");
	this.shape_16.setTransform(59.1,23.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD8C9").s().p("ABQBNQl4gNgqgXIgjgJQgWgFg4gZIg4gYIgBgBIgMgSQgKgPAAgGQAAgJAGgBIAAgBIAGAAIABAAQARAFAxAaIgBAAQA8AZBSAOQBjAQAiAEQBdAMBzAAQBtgBAvgGQA2gHB3ggQARgEA8gcQA4gaALgCIABAAIAXAEIABABIABACIABAJIAAABQAEAPgoAXQhPAnhtAcQheAXhCAFQgwABgSADg");
	this.shape_17.setTransform(60.3,3.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbBpQgNgBgRgDIgPgDIgJhcQBJAFAigBIALBZQAAADgcACIgcABIgIAAgACyBIIgNhIQAkAAAmgDQAcgEALADIAHAbQAHAfABANQgBAGgBABQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAAAABIhbAFQgSAAgDgKgAkVBPQgcgDgLgKQAEgmACgzQAAAEAaADIAfADIAmAGQgDBRgCAFIgOABQgiAAgJgBgAHHAhQgSgJgEgTQgFgUgFgOQgEgKAAgEQAAgEAOgIQAQgIBFgfQATAvAUA/QgKADgjAPQgKAFgZAAQgKAAgMgGgAotgOIAkhaQAGABASAKQAXANALAFQAcAMAHAFQADACAAAEQAAAbgjA3QgnAAg6gsg");
	this.shape_18.setTransform(59.7,14.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#40152B").s().p("AiBBHQgaghgIgiIADgGQALgfAZgfQAOgRAQgOQACAKAJAEQAjAPAlgGQAkAEAjgQIgGg2QAqAHAhApQASAWANAXIAAAAIADADIABACIAAAAQgEAqgRApQgmBghYAAQheAAg0hEgAiZBXIAAgCIADAEIABABIAMAPQgLgKgFgIg");
	this.shape_19.setTransform(59.8,32.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#862D59").s().p("AilBQIAAgCQgGhdA4ghIAPgLIACATIACAQQACAPgBAHIAAABQgRALgQARQgYAbgNAbIAAgBgACSAEIgBgCIgLgJQghgdgvgFIgFgoQA1ADAQAIIAFADIADACIACACIACABIAYAkIADAGIABADIABAFQAFARACAZQgHgMgNgOg");
	this.shape_20.setTransform(59.6,21.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgFA0QgWgBgXgGIgFg5IAAgBIgDgaQAfgMAoAAIAiAAIAMBhQgaAGgaAAIgMAAg");
	this.shape_21.setTransform(57.4,18.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#40152B").s().p("Ah6gZQAAghAIgYQAHgXALgIQAGAqAEAvQAKAYA2AAIAhgDQAmgFASgEQgKhTADgaQABgPAIACIAPAHIAPALQARATAHBEQAABIgYArQgbAxg3AAQiLAAAAigg");
	this.shape_22.setTransform(59.3,26.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgEA7QgOgBgQgDIgPgDIgKhhQAJgDAagFQAagFAJAAQALAAAYAEIAOBrQAAAEgcABIgeABIgGAAg");
	this.shape_23.setTransform(57.5,18.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#40152B").s().p("AgzA2QgNgOAAgQQACgYAHgXQAPgvAhAAQAzAAAOAjQAHAOAAAfQgBA9hGAAQgdAAgQgRg");
	this.shape_24.setTransform(60.5,20.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("ABeAkQg4ghg6AAQghAAgnAPQgwASgRAfQgPgVg4gWQg+gYg7AAQgFAAgXAEIgcAEIg/hMQBmAfBkANQBnANCLAAQCZABCigWQBUgLBegQQgMAOgwBGQgKgFgagGQgggFgnAAQgpAAg5AeQg4AegJAAQgRgQgcgRg");
	this.shape_25.setTransform(61.1,14.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D580AA").s().p("AhpAgQghgHgSgRIAXgZQAVgWAZABQACAAAdAKQAiALAEAFIAXAZIAagXQAfgZAeAAQAEABAXATQAWASAQARQgRAEg2AIQg+AHghABQg+AAgigIg");
	this.shape_26.setTransform(58.6,29.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#40152B").s().p("ACDANQgagjg2ADIgDgeQBPASAdALIBVAoQhLAegOAAQgJgTgMgSgAjwAgQAGgCAbgeQAmgeBBgNIABAPQhcArAAAaIABAGgAgTAHIASAAIgJAKg");
	this.shape_27.setTransform(60.6,26.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#862D59").s().p("AjzBbQhQglg2goQAGgCAKgTQALgYAGgaQAtANAdACIgBAJQABAAgDBSQAAASA5AIQAfADAoAAIgJAIQgTAPABAMQABAGAFADQgjgNgqgSgAE4BNIAogEQAhgGABgSQgOhIgDgMIBmgYQADAQAOAtQAAAShIApQhDAogHAAQgOgPgQgJgAiFA8IAFhTIACABQAAABBcAHQACAVADAXQgMAAgqARQgrARgHAHgAClAaIgsgGIgEgfIBigHIAFAfIAIAdQgggKgfgGgAnnh5IAEAAIgCADg");
	this.shape_28.setTransform(53,17.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFD8C9").s().p("AlBArQixgkhQg4QgIgJgBgHIAAgBIACgBQATgHASAAQAUAAAkATIApAWIA5ALQA2AMAUAFQA8ARBzAJQBVAGBfAAQDmAACigxQAqgNAygWQAmgQAKAAQAJAAAHAGQAFAFAAAGQAAAPgLALIAAABQiGAxhYAUQiZAjjCAAQioAAihggg");
	this.shape_29.setTransform(59.1,5.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhIBSIgIhSQA+ACAtgBIAKBSQAAAPgbAAQgZAAg5gQgACzA4QgEgcgJgiQBJgCAlgGIAKAeQAHAYAAALQgBAGgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAAAIhgAHQgMAAgDgLgAkjA6QgZgFAAgDIAFhLQAAACAVADIAdACIAuAFQgDBIgCAEIgOABQgeAAgbgGgAG/APQgMgNgPg0QAVABAfgOQAlgTARgDIAfBVQgnAXgiAAQgdAAgIgIgAn4ACQgjgNgSgSIAahEQAhASAlAPIAfANIgPAlQgOAcgBAAQgOAAgegMg");
	this.shape_30.setTransform(59.7,15.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD8C9").s().p("AjsA1QhfgNg2gcQgHgDgigJIhwgdIgBgBQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAAAAAgBIAAgIIgBgBQAAgDAKgHIACAAQA0AHC9AvQCHAjCWAAQB6AAB/gUQA9gKA6gQIAygRIAAAAQAPgGAigTQAbgQAMAAQAoAAgBASQAAAGgPAQIgBABQgiAGg2AWQg4AYgyAKQhgAUhUAGQgzAEhVAAQiaAAhigOg");
	this.shape_31.setTransform(61.7,5.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#40152B").s().p("ABGCBQAAgSAHgKQAHgLAAgJQAAgGgFgCIgOgDIgKhaIBjgDQAFAsAKAgQgTAKAAAIIAFAVQAGAWABAVIgvAIIgfADQgNABAAABgAjACDIAIgVIAEgPQAAgCgVgXQAAgFADgDQADgCAAgGIAFhXQAAABARACIAQACIA9AFIAEA3QACAbAEAQQgLAFgHAGIgEAGQAAAFAIAVQAJAXAHAEQhJgIgjgGgAmJBRIgvgTQASgbACgIQgGgKgLgKQAQgMAWhVIBFAWQgCAdgBAoQAAAqAHAJQgOABgDACQgDADAAAIQAAAIAJAZQgagGgegMgAFEA+QgBgCAAgRQAAgJgHgiQgGgfgDgJIBmgYQAIApAFALIAQAiQgWASAAALQAAAGAFAKIhKAWQgWgZgBgCgAJHgFQABgEAAgFIgghmIATgDQAOgEAZARQAdASAAAYQAAANgJAPQgPAXghANIABgFgApyhSQAAgaAUgWQAbgcAoASQgIAkgQAdQgMAUAAAUQAAAEgDAIQgDAGABAGQgfgZgPgugAp7g1QgDgLAAgDIAIAbIgFgNg");
	this.shape_32.setTransform(59.3,17.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgvCLQgQgFgMgvQBmgCAXABIACAHIgGAxQhWAAgHgDgACzBWIAAgUIBQgCQAaAAAMAGQANAGAFAPIh6AeQgJgUgFgPgAlABfIAAgbIAFgCQA0AEAcAIIAeAKIACAFIgEAQQgDAJgGAAQgLAAhdgXgAgfA9QgHgDgbgDIgJhVQBFACAwAAIAABWIhHADIgDAAgAG1AtQAFgFArgMQA0gQAZgKIh8AzgAoHALQgmgUgGgGQACgJAFgEQANAFBiArIgMAZIg+gigAC5AdQgEgcgIgjQBFgDAuAGIAEATQAHAZAAALQAAAFgCACQAAAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAIhcAHQgQAAgDgLgAkOAkQgdgDgKgLQACgYADhDIBgAYQgEBNgCAEIgOABQghAAgJgBgAG+gNQgFgHgPg4IBpgqIAhBdQgPALgYAHQgSAEgQAAQglAAgIgKgAn4gZQglgPgJgRIAghUIBgAiIADAEIAAAIQAAAagjA5QgRAAghgNg");
	this.shape_33.setTransform(59.1,18.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFD8C9").s().p("AjlA2QhIgKhfggQgQgFiOgjIgBgBIgBgCIgBgIIAAgBQgBgDALgGIACgBQA4AIDBAtQCLAiCKAAQAwAAB1gKQBmgJAegEQAvgIBngfQAQgFAigTQAcgPAMAAQApAAgBASQABAEgQARIgCABQgLAChTAYQhcAegZAGIAAAAQhCASh8AGIgBAAQg9ADg9AAQijAAhTgLg");
	this.shape_34.setTransform(61.8,5.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#40152B").s().p("ABIB/QAAgMAHgSIAHgRQAAgGgWgFIgKhXIBigDQABAPAOA9IgGAHQgHAHAAABIAFAVQAGAWACAUIheANIgBgTgAjGCBQAEgHAEgOIAEgOQAAgCgMgRQAHhYABgRQAzAHAqACIAIBfQAAACgXAPQAAAFAIAUQAJAWAHAFgAnGA9QAHgIAHgMQAGgLAAgDQABgRADgHQADgFAKgeIARgyIBGAUIgGBwQgGAEgNAAIgCAEIAAAIQAAAIAJAXgAFSBDQgPgPAAgCQAAgLgShLIBogVQAFAWASA1QADAIgDAQQgDAQAEAIIhMAXQgDgFgQgRgAJKgKQgCAAgghiQAcgHAIAAQAyAAARAmQASAqhKAjQgDgKgKAAgAp+gvQgIgRAAgPQAAgaAWgXQAfggA0AeQgUAtgIAZQgIAYgDAAIgOAKQgFAEAAACQAAAKABABQgbgNgNgZgAqPgzQgDgKAAgDIAJAaQgDgCgDgLg");
	this.shape_35.setTransform(59.3,17);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("Ag7CFQgKgGgDgOQgCgTgEgLQAWAAArAEQAlACAbgHIACAGQgFAVgBAYIgDADIgVAAQgkAAgugDgAC4BEIAVABQAKAABEgIQASAAAKAJQAEADAJANIh+AeQgOgWAAgagAlKBaQAAAFAAgKIAAgVIAFgCQA1AEAdAIIAgAKIABAFIgEAOQgDAKgGAAQgKAAhhgXgAgGBFQgPgBgtgKIgJhaQAAACBrAAIALBZQgRALgYAAIgIgBgAHoAYQBAgNAdgLIABAAQgJADg8AYIg+AXQABgTAkgHgAC3AgQgCgfgKgkQBBgDAwgEIAHAdQAHAdAAAMQAAAGgDAAIgMAAQgsAJgYAAQgcAAgEgLgAo0gDQgDgCgFgCIgFgCIgDgCIAAgOQgEgFAKAAQAIAAAVALIAqAUQAFACAPAEQAOAEAKAGIgMAYgAkPAnQgcgCgLgLQADgaADhDQBXAVAIABQgDBQgCAFIgOAAQgiAAgJgBgAG+gKQgKgMgKgzIA1gSIA0gUIAgBZQgWAWg9AAQgaAAgIgKgAn5gWQgfgPgPgQIAghSIBiAhIABADIABAIQAAAagjA5QgTAAgggOg");
	this.shape_36.setTransform(59.1,18.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AGlAoQgCgRADgRIAJglIADgJIBEAMIApAJIgEAeIgOBCIgHABQg2AAgrgmgAoDA3IgbhOQATgGAYgDIBDgLIACAGIACAHQAIAWAJAlQgtAagwAAIgLAAgAkXAbIgXgCIgDgCIABgCIAAgBIABAAIgEgfIgFgwQAxgGAwgEIACATQAFBDABABIAAACIgBABIgBAAIgZAFQgMACgNAAIgUgBgAEJAVQgMAAgMgCQgogFgngOIgBAAIgBAAIAAgBIAAgBIAAAAIAAgHIAAgEIABgNIAFgWIABgOIACgIQA5ADA5AGIgEAVIAAAEIAAAAIgHAnIgDAQQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCABIAAAAgAgVATIgNgBQgXgCgVgIIABhUIA7gBIAuABIABBcQgYADgVAAIgFAAg");
	this.shape_37.setTransform(59.4,22.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFD8C9").s().p("AFmAJIhVgJQhAgEg6gEQg5gEgygBIhGgBIhLADQg3ADg1AFIgWACIgjABIAAAAIg2AGIgVACIgkAFIg1AIIgdAFIghAHIgLACIgIACIgBAAIgKADQgnAKgYAMIgWAFQgZAAgBgNQgJg0C2ghQC2gjCXABQAIgGCHAFQCJAFBEAFQBEAFBcAPQBcAPBOAUQBTAPAAAbQABAagXACQgugljQgXg");
	this.shape_38.setTransform(60.2,13.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AJ+BCQgEAAgdgTQgggUgdgGQh4gbicgPQiXgQiXAAQhyAAibAPQiXAPhcARQg5ALgNASIgFALQgCAEgGAAIgLgBQgDgCAAgEQADgHAPgQQAOgNAGgEQBCgcC3gYIANgBQC8gXDUAEQDWADCPAcQCPAcA7AUQAcAgAAAOQAAAHgBAAIgFgBg");
	this.shape_39.setTransform(61.2,19.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#40152B").s().p("Ak7AoIAPgMQAUgQAagNQAPgIARgHIAVgCIAkgEIACgBQAGgFADgDIgBgHQApgKAugEQADAFAGAEQAhARAjgEQAmAHAkgOIAAgLQBjAPBTAsIANAHIAyAdQgTgKAJAHIAEADIgGAAQh6gViZAAQikAAiVAUIg3AHIAMgNg");
	this.shape_40.setTransform(56.8,28);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AGnAqQgCgQADgRIAIglIABgCIAdAFQApAGAoARIgCAPIgOBDIgHAAQg2AAgrgmgAoBA5IgdhUQAqgMBCgLIAGAPIACAIQAHAVAJAlQgsAbgwAAIgLgBgAkWAdIgXgCIgCgBIAAgCIABgBIAAgBIgEgfIgEg0IAAgFQAwgFAugDIABAAIAAAAIABAAIACAaQAFBEABAAIAAADIgBABIAAAAIgZAFQgNACgMAAIgVgCgAEKAXQgLAAgMgCQgpgFgngNIgBgBIAAgCIgBAAIAAAAIAAAAIAAgGIABgFIABgNIAEgWIACgNIADgNQBFAFAsAJIgFAVIABAEIgBAAIgGAmIgEAQQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIgBAAIgBAAgAgUAWIgNgBIgQgDQgOgDgOgEIAChaIBpABIAABgIgRACIgbACIgGAAg");
	this.shape_41.setTransform(59.7,20.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFD8C9").s().p("AJyBPQgFgBgFAAIgBgBIgCgBQgIgQgpgNIgjgJIgXgGIgrgMQgUgGgdgFIgcgEQgngGgzgHIgbgDQhAgIg/gGIgYgCQg5gHgvgBIgXAAIgLAAQg3gCg1AAIgEAAIgzgBIgBACIgCABIg4AEQhIAEg8AHQgwAFgpAIIgDAAQgvAHgmAKQgkAJgZALIgBAAQgGgCgDgDQgGgEgFAAIgBAAIgBgBQgDgGgBgDQAAgZCFgcQCZggDUgCIgBACQAHgEA/AAQCBAAECAlQFFAsgBA6QAAAOgMAEIgBAAg");
	this.shape_42.setTransform(63.6,13.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#642142").s().p("AEyBeIgRgQIgLgJQhghMiRgSIAAhWQA3ABAtADIgBAIIgEANIgBAHIgCAJQAAAHgBAFIgBAMIgBAJIgDAWQAIAJANACIAAAAQAiAKAjAFQAdAFAcAAIAAgBIACgDIADgIIACgIIADgNIAHglIADgOQgBgLACgFIAAgEIAGACQAQAFBXAOIgEAJIgHAdQgCADgGArQAIAQAPAJQAQAKARAGQATAJAWACQAXACAbgMQANgxAHgnQAYAJAyAXIAEAAIAGAJQAAAhgbAYQgyAtiCAAQgMAAhrgUgApvBLQgHgKgBggQAAgTAHgNQAJgPAGgbQANgIATgGQAMA1AXAwIAEABQAMADAkgHQAkgGAVgKQAVgLAEgJQAFgJgDgOQgFgdgTgqIARgDIA+gIIAAADIAAAVIABAJQAGAkADAkQAGAGAKAFIAgAEQhUArAAAZIAAAEQhjAMgiAAQhZAAgYgfgAEOBXIAGAAIACACIgIgCgAjPg3QgBgggDgPIAAgIQAzgDAwAAIgBAIIAAAZIgBAQQAAAPgBAIIAAAMQgqAAgvAPgAEIhEIAAAAIAAABg");
	this.shape_43.setTransform(61.4,23.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#40152B").s().p("ADsAyQhggRh6AAQjvAZh6AOIgcADQA6hTBagmQBEgdBRAAQAFAAASAHQASAHAKAAIAqABQAEAAARgEQAQgEAFAAQBAAABpA8QANAHB4BMIAAABQhLgQg0gKgAFVAdQANAAAJAIQAJAIAAAKg");
	this.shape_44.setTransform(58.6,30.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#642142").s().p("AFsB/QgSgPgKgGQAAgKgJgIQgJgIgNAAQgagehsguQhqgrgjAAIgBheIBkAJIgHAdQgGAaAAAgQAAACAIAEQAIAEAFABQAUAHAoAHQAsAIAVAAQAJAAAMhmIBuAPQgMAigGANQgBADAAAmQAAALATALQAKAGAbALQAkAMARAAQAdAAALgWQAJgRAJg+QBEAfAUAVQAQAPAAAeQAABhjbAAQgpAAgVgOgAoqCEIAAAAIgNgCQhLgRAAg+IgCgVQAAgRADgQQAFgXAIgFIAGgFIgBgHIAAAAQAYgTAQgIQASBBAKARQAHAOAKAAQA+AAAkgVQAdgPAAgVQAAgEgNgkIgQgsQAngHAqgFIAEAcQAEAagBAXQgBAsAaAGQAOAEATgEQh8A8AABGIhVAGQgXAAgcgEgAjbiLIBkgBQgBAAAAATIgBATIgCAnIABATQgQAAgXADQggAEgRAGIgJhsg");
	this.shape_45.setTransform(62.2,25.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFD8C9").s().p("AJeBCQhBgdkGglQkBggiIgBQhVABhhAIQjAAQg9AdIgBAAIhBARIgBABIgBABIgBABQgBAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAgBIAAgBIgBgHQAAgfBtgcQCMgkEBAAQB0AAGlAvQBpAMA2ATQArAQAAAPQAAAFgOAQIgBABIgCAAg");
	this.shape_46.setTransform(62.4,12.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AHRBIQgrgQAAgcQAAgHAFgXIAGgcIBtAaIgJAqQgLAsgKAAQgXgCgYgIgAoCA7IgbhQIBoggQAFAHAIAdIAOAyQgjAWgqAEgAkaAfIgVgDIgHhnQA8gCAUABQANABABADIABgGIAJBlQAAAKgxAAIgbgCgAESANIAAAKIgIACQhKgCgXgMQgHgEgBgFIAAgCQAAgIAJg4IBxANQgBAAgDAyQgCAbgCAAQgBAAAAgNgAgOAUQgvgDgQgEIACheQAAABBpAEIAABgQAAACgMAAIgggCg");
	this.shape_47.setTransform(59.8,19.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#40152B").s().p("AEzBOQiSghhsAAQitAAjHAdIgoAFIAcgbQAsgtAcgQQB8hSCDgBIAbACQArADA0APQBVAYBGAtQAdARBLBPIhGgPgAlyBOIgBADIgFABIAGgEgAFkAiIACABIAAACIgCgDg");
	this.shape_48.setTransform(58.7,33.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFD8C9").s().p("ApUBlQAAgEgEgFIgaAAQgaADgBgKQgBgKADgLQABgMA0glQAbgQAggUIAyglIABAAQAogIAiAAQAIAABFgSQBGgTAVAAQAKAAAMAIICngIQFtAADIBBQBJAYAoAbQAhAZAAAVQABAVgNADQgNADgOgJIgNgJIgHgGIgPgNIgWgPQgtgegtgKIgGgBIgVgGQg8gOg9gLQhHgMhIgHQhCgHhEgCIg/gBIgtABQhNABg+AFQhAAGgxAKIgXAFQgLACgNAFQgQAGgUAJIgSAIIgEACQguAVgrAnIgPAPIgBAAIgYARQgXARgLACIgGAAQgGAAABgDg");
	this.shape_49.setTransform(58.1,15.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AGeAvQgCgRADgRIAIglIABgDQBOAVAeAXIAAABIgOBCIgHAAQg2AAgrglgAoKA+IgJgaQAygpAggTIAMgGIACAHQAHAWAJAlQgsAagwAAIgLAAgAkfAiIgXgCIgCgCIAAgCIABgBIAAAAIgEgfIgEg1IgBgFIAJgBQAqgIAogFIACADIADAEIAAgHIAAAAIADAhQAFBDABABIAAACIgBABIAAAAIgZAFQgNACgMAAIgVgBgAEBAcQgLAAgMgCQgpgFgngOIgBgBIAAgBIgBgBIAAgBIAAAAIAAgFIABgEIABgNIAEgWIACgOIAEgPIA/AIIAxAGIgFAXIABAEIgBAAIgGAnIgEAQQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAIgBABIgBAAgAgdAaIgNgBQgWgCgWgIIAChiQA1AAA0ADIAABnQgVADgXAAIgGAAg");
	this.shape_50.setTransform(60.7,19.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#642142").s().p("AGBCbIgDgJIAAgBIgIgOQgLgRgVgTIABgBIgDgBQglgghCgkQhmg0hWgQIgBh3QAzADAzAFIAAAAIgDALIgDANIgBAHIgCAJQAAAHgCAFIAAAMIgCAJIgCAWQAHAJANACIABAAQAiAMAjAFQAcAFAcAAIABgBIABgDIAEgIIACgKIACgNIAIglIACgOQAAgLACgFIABgHQA9AKAvALIgEAMIgIAdQgCADgFAtQAIAQAPAJQAQAIARAGQASAJAWACQAYACAbgMQAIgdAGgcQAkA3ANBNQAOBTgpgLQgHADhCACIgHAAQgqAAhFgMgApQCRQgNgMAAgNIAAgDIABgCIADgDQAEgCAAgFIgBgFQAFgPAGgWQARhCAZgaIAPAfIADABQANADAkgGQAkgFAVgKQAVgLAEgJQAFgLgDgOQgFgZgPgjQAdgKAugKIAAAWIAAAJQAHAkADAmQAFAGALAFQAuAHAggEIAkgFIACgBQAGgEADgEIgEgTIgDgtQgBgggDgPIgBgOIAAgBQAygFAvAAIADAAIgCARIAAAZIAAAQQAAAPgCAIIABAVQgBAMALAFIAJAEIgvAKQhmAXgsAnQgrAigVASQgOAMgLAMQgKAMgHANIgDAHIgGADQiPAUgLAAQgdAAgRgPgAEThwIABAAIgBABg");
	this.shape_51.setTransform(60.3,27.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#40152B").s().p("AiIgSQAsgVANgFQAvgSAuAAQAiABAlASQAMAHAoAbQgZAogbAQQgZAPgnAAQhsABgxhRg");
	this.shape_52.setTransform(59.4,40.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFD8C9").s().p("AiDAjIgBgBIgNgLIgBgBIABgCQAag2CZAAQAYAAArASQAlAQAIAFIABABIAAABIgBABIgKAHIgBAAIhagMIhGACQgMAAgcAKIAAAAIgBAAIAAAAIglAKIAAAAIgOAHQgGADgGAAIgCAAg");
	this.shape_53.setTransform(60.6,9.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#642142").s().p("AiWBfQgEgQgGAAQgGAAAAgSIACgaQAAhVBGg3IAAAFIgCAzQABAYAbAJQAXAIAuAAQAJAAAQgCQASgEAMgEIAAhpQA8gLAcArQAXAiAABCQAAAQgHAkQgIAlgIAZQgTghgzgNQgcgGgiAAQhUANgbALIgRAMIgSAOIgFAFQgFgIgGgXg");
	this.shape_54.setTransform(59.5,25.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AAIAsQgtgDgQgFIABhFIBBgLIApABIAABXQAAABgMAAIgigBg");
	this.shape_55.setTransform(57.4,17.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#40152B").s().p("AhHAAIAFAAIAdgNIAOgEQAPgDAUAAQAKAAAeAQIAQAHQgWASgkAAQgwAAghgVgABMgFIgCgCIADgBIAHgDIgGAHIgCgBgAhTgHIABAAIAAAAg");
	this.shape_56.setTransform(60,37.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFD8C9").s().p("AhHApQgEAAgLgFIAAAAQgCgCAAgMQgBgRA2gWQAvgXAWAAQAGAAAtASIABAAIABABIACAGIAAABQAAACgIAEIgeAIIAAAAQgaAEgXAHIgNAFIAAAAIgUAJIAAAAIgNAHIgBABIgZAIIgBAAg");
	this.shape_57.setTransform(53.4,9.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#642142").s().p("ABGByIgMgGQgagOgMAAQgZABghAJIgBAAQgQAEgJAFQgJAEgCAFIgBAAQgugoAAhbQAAgvANgXQAHgNAKgJIAAAHIAAAQQAAAPgCAIIABAVQgBAMALAFQAgARAmgDQAjAEAlgMIgBhuQAPADAHAEQArAVAABPQAAAHgRBMQgBAXgLAUIgEAFIgHAEIgDABIgKgIg");
	this.shape_58.setTransform(59.3,24.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AACAyIgLgBQgXgDgVgHIABhNQAYgLAiAAQAcAAAUACIAABdQgYAEgWAAIgGAAg");
	this.shape_59.setTransform(57.4,17.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFD8C9").s().p("AhgBSQgIgPAAgKIAPgxQgggIAAgPQAAgPAdgnQAcgnBYAGQBZAFAIAnIAAABQAGAUgggBIgBAAIgBAAQgVgRgiAAQgVAAgSALQgVAUgHAWIgDAIIgEAnIABACIAAABQgEAKABALQAAAIAEAJIAAABQgGARgTAAQgYAAgNgWg");
	this.shape_60.setTransform(56.6,16.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#40152B").s().p("AgzA2IgGgIQgGgKgBgMQACgYAHgXQAPgvAhAAQAzAAAOAjQAHAOAAAfQgBA9hGAAQgdAAgQgRg");
	this.shape_61.setTransform(60.5,20.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("ABNAwQgIgDgigIQgigIhBAHQhAAGABAJIgCAAQgcgNgigLQglgLgxgCQgxgCgLAGQgbgWgdgPIAngJQAtgEBSgMQBkgJDUAAQC9AAB4ATQgkAUgiAcIgLgEQgXgHgqAAQggAAgqAMIgfAKQgrAOgOAPQgBgDgIgDgAEIgQQAgAAACgBIgkgCg");
	this.shape_62.setTransform(62.6,18.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFD8C9").s().p("AlkB4QhpgFgWgFQgEgBgLgLQgGgGgIgsQgBgEgHgMQgHgMgNgTQgbglgOgsQgDgMACgIQABgIAOgFQANgGAaADQAaADAGADQAGAEAJACQAJADADACIAEAEIAAABIAAACIgCABQgwAKAAAGQAAACADADIAPACQAVAAAogHIABAAIAIAFIgBAAIAEACQAzAgAZAZQAXAWAdAiQADgIAAgIIAAgCIAAgBQgBgagcgcIgBgCIABgBIABgBQA5ABA/ANIABAAQAoAKAeAcQAdAcAEATIAHgBQAJgKAAgLQAAgIgDgJQgFgJgJgJIgEgDIgFgEIgBgCIABgBIACAAQBSgMAaADQAaACAXAHQAXAEADACIABACIAAABIgBACQgEACgDAFIgBABQgGAJgDAQIAAABQgDAKACAIQABAGAEAEIAAABIABABIAFADQALgCAHgCIAAgFIAAgCIABgGIAAAAIAAgBIABgHQADgPAFgLIABgCQACgGAEgFIAFgHIAKgIIAAAAIAXgOIAMgFIABAAIBjgRIAhABIAPABIABAAIAFABIABABIABACIgCABIgFAEIgIAHIgsApIgQAXIAAAAQgDAFgBAFQADACAGgBIALgJIAdgeIASgRIABAAQAfgYBCgjQAagPAYgLIABgBIABABQAfALAIAAIAMAAIABAAIAAgCIABgBIACgBIABgBIAKACQAPAAAGgCIABgEQgXgOgWgEQgXgFgBABQAAABAAAAQgBAAAAgBQAAAAgBgBQAAgBAAgBIgBgGIAbgIQAagHAZAAQAZAAAIAGQAHAHAAAIQAAAHgeAyQgCAVgMAUQgRAagFAlQgBAHAAAWIAAACQgLAUg5ADQjeASiYAAIAAAAQgjAFhOAAQhyAAjMgKg");
	this.shape_63.setTransform(62.1,24.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D580AA").s().p("AhzAiQAHgxAIgTQARAFAkAHQAfAEAFAAQAIAAAPgCQASgDAMgFIAAhKQAwADASBGQAMAmASBcQgdgDg3gDIg4gDQgVAAhxALQAOgXAHgug");
	this.shape_64.setTransform(61,26.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#40152B").s().p("ADyAtQgRgJgPgBQgOgJgJgMQgIgLgRgeIgBgKQA3AJBvBUIAAACIhVgNgAlBAyQB9hmBOgFQgLAggEAgQgEAWgbAEIiiAXgADdgfQAUAHAkAVQAjARALAKIhmg3g");
	this.shape_65.setTransform(59.4,34.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#642142").s().p("AF2CQQgngIgGgHQgMgMgWgTQgLgJgigUQglgVgUgGIg8gXQgEgdgGgfQAYANAxAIQAnAGAcAAQAIAAAMhkIBuARQgKAegHANQgCAFAAAkQAAANATAKQALAFAbALQAkAMAQAAQAZAAALgOQAOgUAHg6QAkANABAEQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAABQAKAEAUAWQAcAcAAAdQAABmjWgBQgLABgjgIgApPB9QgqgaAAg5QAFgeAHgZQAIgcAPgOQAPgJADgFQARA6AIAOQAHANALAAQA9AAAkgTQAdgRAAgUQAAgEgMgjIgQgrQBIgOAJAAQAFBiAJAPQAJAPA4ABQAYgBAWgEQAagEAAgGQAAgwgFgkQgGgkAAgHIBkgBIgCAyQAAAYgCAGQgEAOgDAdQgIAYgjAJQgnAMgvAYIgsAZQgcAPgUAYQgLAMgHAMQgDAEg3AHQgzAFgWABQg6AAgigWgAC/ByIgKgEIABAAQAQABAQAIgABBh6IgWgLQgLgFgCgFIBjAKQgFATgFAtIgBAMQgSgugjgTg");
	this.shape_66.setTransform(62.1,26.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFD8C9").s().p("AJZBNIgLgCIgHgHQgZgKhVgZQhigdgqgEQg/gKizgSQi/gUgzAAQh2AAiYAWQiYAWggAVQgfAXgDgEIgEgDQgMgDABgNIABgBQAVgWAugPIAAgBQAmgMBsgVQCOgcBNABQDMAAC9AQQClAOBJASQCZAlAyAVQArASgBAWIAAAHIAAABIgBABIgCABIgEAGIgBAAQgFAEgHAAIAAAAQgGAAgcgHg");
	this.shape_67.setTransform(66.1,14.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AH/BSQgwAEghgVQgggVAghGQAuAIASAFIAuAPIgTBSgAoDA7IgYhHIBmgmQADACAIAeQAJAcAFAXQgjAVgpAFgAkcAeIgVgDIgHhmQA8gDAUABQANABACAEIAAgHIAJBlQAAAKgxAAIgbgCgACoAKQgIgEgBgEIAAgDQAAgGAJg5IBsAOIgEBJIgIACQhKgDgWgMgAgQAUQgvgDgQgFIAChfQAAABBpAFIAABhQAAABgLAAIghgBgAEVgyIAEAAQgCAAAAAJIAAAJg");
	this.shape_68.setTransform(60,19.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#D580AA").s().p("AiHAVIgBgBIAGgGIAPgOQAVgWAWAAQAsgBAVAYIAEAFIACACIACAFIgoACQg8ACgcAFIgEABIgEgCgABnANIgFAAIgBAAIgDAAIglAAIgeAAIAEgEIAEgEIACgCQAcgUAdgBQAPAAAVAXIADAEIAEAEIgiAAg");
	this.shape_69.setTransform(55.5,37.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#40152B").s().p("AEzBOQhmgXhTgHQgWgrgsABQggABgoAjQgJgPgKgKQgUgRghAAQgiAAgiAcQgWARgGAMQhCAHhFAKIgoAFIAcgbQAsgtAcgQQB8hSCDgBIAbACQArADA0APQBVAYBGAtQAdARBLBPIhGgPgAlyBOIgBADIgFABIAGgEgAFkAiIACABIAAACIgCgDg");
	this.shape_70.setTransform(58.7,33.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFD8C9").s().p("ApOBlQgHgCAAgLIgfAAQgOAAgGgGQgHgFADgLQABgMA1glIA6gkIAzglIABAAQAngIAjAAQAIAABEgSQBGgTAVAAQALAAALAIICogIQFtAADHBBQBKAYAnAbQAiAZAAAWQAAAXgQAAQgPAAgLgIIgLgHIgGgGIgQgNIgVgPQgugegsgKIgBAAIgFgBIgBAAIgVgGQg8gOg9gLQhGgMhJgHQhCgHhEgCIg+gBIguABQhNABg+AFQhAAGgxAKIgWAFIgZAHQgQAGgUAJIgRAIIgFACQguAVgrAnIgPAPIAAAAIgDACIAAAAQgeAXgcAGIgBABIgBgBg");
	this.shape_71.setTransform(58.2,15.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#642142").s().p("AF/CbIgDgJIgBgBIgHgOQgMgRgUgTIAAgBIgCgBQglgghDgkQhlg0hXgQIAAh3QAzADAyAFIAAAAIgCALIgDANIgBAHIgCAJQAAAHgCAFIgBAMIgBAJIgCAWQAHAJANACIAAAAQAiAMAjAFQAdAFAcAAIAAgBIACgDIADgIIACgKIADgNIAHglIADgOQAAgLABgFIABgHQA+AKAvALIgFAMIgHAdQgCADgGAtQAJAQAOAJQARAIARAGQASAJAWACQAXACAbgMQAIgdAGgcQAkA3ANBNQAOBTgpgLQgGADhCACIgIAAQgpAAhFgMgAo3CdQglgHABgsIABADIACgJIAMgtQARg8AYgYIAOAfIAEABQAMADAkgGQAlgFAUgKQAVgLAEgJQAFgLgCgOQgFgZgPgjQAdgKAtgKIAAAWIABAJQAHAkACAmQAGAGALAFQAuAHAfgEIAlgFIABgBQAGgEADgEIgDgTIgEgtQgBgggDgPIAAgOIgBgBQAzgFAvAAIADAAIgCARIAAAZIgBAQQAAAPgBAIIAAAVQAAAMAKAFIAKAEIgvAKQhnAXgrAnQgrAigVASQgPAMgKAMQgKAMgHANIgDAHIgGADIhcANIgwAGIgMABQgKAAgLgDgAERhwIAAAAIAAABg");
	this.shape_72.setTransform(60.5,27.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#D580AA").s().p("AhxALIABgCQAVgWAWAAQAkgBAUASIACABIAAABIgVAAQgmACgWACIgZAEIAEgDgAAzACQAUgLAVAAQALAAANALIACACIhHAAIAEgCg");
	this.shape_73.setTransform(55.5,39.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#40152B").s().p("AErBRQhogZhTgGQgVgggkABQgbAAghAdIgPAAQgHgKgIgIQgTgTgfABQgiAAghAeQgLAJgHAIQhEAGhIAMIgoAFIAcgbQArgvAbgRQB5hWB/AAQA0AABDAUQBTAZBEAvQAcASBJBRIhEgPgAloBRIgBADIgFABIAGgEgAFaAkIADABIgBABIgCgCg");
	this.shape_74.setTransform(58.7,34.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#642142").s().p("AInCvIhAAAQgqAAhKgOIgDgJIAAgCIgIgPQgKgSgVgTIABgBIgDgBQgkgihBglQhog5hXgPIAKgEIAAh3QAyADAzAGIgCAIIgDANIgBAHIgCAJQAAAHgCAFIgBAMIgBAJIgCAWQAHAJANACIAAAAQAiAMAjAFQAdAFAcAAIAAgBIACgDIADgIIACgKIADgNIAHglIADgOQAAgLABgFIABgCQA9ALAuAMIgDAFIgHAdQgCADgGAtQAJAQAOAJQARAKARAEQASAJAWACQAXACAbgMIAJggQAbAzALBFQANBSgoAAIgFAAgAoiCmQgogFABg7QACgEAEgSIAEgQQAOg8AUgaIAHAQIAEABQAMADAkgHQAlgGAUgKQAVgLAEgJQAFgLgCgOQgEgXgNgeQAbgLAsgLIAAARIABAJQAHAkACAmQAGAGALAFQAuAHAfgEIAlgFIABgBQAGgEADgEIgDgTIgEgtQgBgggDgPIAAgNQAzgFAwAAIABAAIgCAPIAAAZIgBAQQAAAPgBAIIAAAVQAAAMAKAFQAMAGAMADQgaAEggAIQhkAZgqAoQgqAjgVATQgOANgKANQgKAMgGANIgDAIIgGADIhtAQQgSAFgUAAIgOAAgAEQh6IAAAAIAAABg");
	this.shape_75.setTransform(60.6,28.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFD8C9").s().p("AokBuQgBgDgKAAQgLAAgCgHIgBAAIgCAAQgHgCAAgMIgeAAQgOAAgGgFQgGgGADgLQAAgNA0gmQAagRAfgUIAxgnIABAAQAmgJAiAAQAHAABEgTQBEgTAUAAQAKAAALAIICjgIQFkAADCBEQAXAIATAIQAGgHALADQALACARAMQAoAZAGAZQAKAJABAKQABAKgFAKQgFALgMgCQgLgCgUgMIgBAAIgGgHIgDgCIgUgQQgzgogxgMIgBAAIgSgFQg3gPg5gLQhJgOhMgIQg9gHg+gCQglgCgkABQgZgBgXABQhEABg4AFQhKAGg1ANIgMADQgLADgNAFQgTAHgXAMIgOAHIgDACQgtAWgoAoIgHAHIgHAGIgCADIgIAHQgFAEgJAQQgHAOgCAAIgBgBg");
	this.shape_76.setTransform(58.2,16.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AGdAuQgCgRADgRIAIggQBTAXAWAgIgKAwIgHAAQg2AAgrglgAoLA9IgDgLQA2gyAigUIADgCQAHAVAJAkQgtAagwAAIgLAAgAkfAhIgXgCIgDgCIABgCIAAgBIABAAIgEgfIgFg1IAAAAIAQgDQAogIAlgFIACAEIAAgEIABAAIADAeQAFBDABABIAAACIgBABIgBAAIgZAFQgMACgMAAIgVgBgAEBAbQgMAAgMgCQgogFgngOIgBgBIgBgBIAAgBIAAgBIAAAAIAAgFIAAgEIABgNIAFgWIABgOIADgLIA5AHIA3AIIgDASIAAAEIAAAAIgHAnIgDAQQAAAAAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgCABIAAAAgAgdAZIgNgBQgXgCgVgIIABhgQA2AAAzADIABBlQgWADgXAAIgFAAg");
	this.shape_77.setTransform(60.7,19.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#40152B").s().p("AIxBmQAAgTgQgPQANgwAGglIAHAIQALALAKACIALAPQAIAMAAAOQAAApgzARgAEfBZIACgYIAAAAIAAgCIABgDIgCgNIgCgQIAAgBIAEgHIACgLIACgMIAIgkIACgOQAAgKACgGIABgJIBvANIgCAIIgFAOIgIAdQgCADgFArIAEAHIgQADQgGAIgEANIgFAdIABAFIgBACIhSgNgApEBcQgEgEgDgKQgCgLgFgFQgMgPgEgTQAPgrAggVQALAuAUAsQgUALgTAOIAAABIACASQgIgDgDgDgAmPBZQgBgMAAgMQABgVAHgWIAAgBIABgBQACgJgCgLQgFgbgVgtIBQgKIABAFIAAAVIAAAJQAHAlADAjIAGAFQgaAHgaAIIAHAYIAFAPIACAFIgoAFgABSA+IgtgDIAGgkIAJgEIgBh1IBlAHIgCALIgDAMIgBAHIgCAJQAAAHgCAFIAAANIgCAIIgCAUQAFAGAGADQgTADgGAcIgEAYIgmgDgAijAeIAAgDIABgCIgBAAIABgCIgFgHIgCAAIgCgCIAAgCIgCAAIgPAAIgBgGIgDgqQgBghgDgOIgBgNQA6gFAqgBIgCAPIAAAZIAAAQQAAAPgCAIIABATQgGACgEACQgQAPAEAjIABALIgeACIgXACQAEgRAHgSgAEWgyIABAAIgBABg");
	this.shape_78.setTransform(60,21.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFD8C9").s().p("AHmDVQjFgej+AAQhKAHiVAAIjbgFQgOAAgaAJQglALgQgKQgMgGglAPQgRAGgDAAQgcABgTiFIAAgBQAAgLAGgEIABgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAABQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAABIALANIAAABIAOANIADAAIAZADIAuABQARAAA2gHIAbgDIAqgHIAigFIAJgBQAygIAwgFIAhgDIAcgCIAegCIAZgCQApgCApAAIAZABIAWAAIAxACIAAAAIAlACIAXACQBAAFA0AMIAaAGIAMACIBHATIAKADIgBAAIAUADQAnAHAuAAQAXAAAUgCIAFAAIAbgEIAAAAIAFgCIABAAIACABIACACIABACQgEBphAAAIgCAAgAJxgkIgBAAIgJgDIgCgDQgFgFgGgDQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQgJgHgPgLIgGgEIgBgBIgIgHIgDgCIgQgHIgDgBIgHgEQgRgHgVgHQgggJiZgPIgcgDIiJgMIgzgEIAAAAQgJgCgHAAIgVgBIgYgCQhJgEgvAAIgIAAIgggBIgBABIgBABIgDABIhcAFQhBAEg2AFIhAAIQgXABgUAGIgBAAIgaAFIgJAAQgaAHgTAGIgUAHQguAQgTAaIAAABIgBAAIgBABIAAABIgBAAIgCAAIgBAAQgMAAAAgUQgBgOAZgSIAkgXQAKgFAogOQAtgQAPAAIAygKQAxgKAeAAIASgDIABAAQAMAAAHAFQAHAEABAIIADAAIAsgGQAZgEAYgCIAXgDQARgCAGAAQAKABAEgDQAGgJATAAQAbAABGgFIAggCIABAAQAdACAPAQQADACASABIABAAIAkAAIAvACICJAXQCSAZA3AHQAsAGAoAaQAqAaABATQABAKgCAGQgCAFgGAAIgBAAg");
	this.shape_79.setTransform(61.1,25);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AGQBlIgBgPIgBgBIAAgGQADgcAJAAIAGgBIAGAEQAQAKARAGQASAJAWACQAPACAQgFQALAJABALIgBAFQgfAGgsAAQgJAAg1gIgAoeBgIgBgDIAAgBIAAgCIABgCQAUgPAXgMIAGgDIAVgDQAfgFAUgJIAAABIgCAVQgBAPABAOQg0AHgOAAQggAAgVgDgACVA9IAIgcIAAAAIAAgBIABgBIACgBQA0gBAzAOIABABIABADIgDAeQg7gJg2gHgAlEBJIgDgMIAAAAIgBgCIgBgCQgBgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAgBAdgLQAcgKAcAFIAhAFQAFABADABIABACIAAACIgDANQgzAFg0AIIgOACIgCgEgAGyAcIgKgIQgCgRADgPIAIgnQABgFADgGIACgEIAcAEQAoAFAlASIgQBgIgHAAQgwAAgngdgAhdAuQAAgbACgDIABgCIABAAIAQgBQAaAKAegCQARADARgCIgEAdIgZAAQgoAAgpACIAAgHgAoAAjIgdhVIAAgBQAggMBLgMQADAFAEANIACAHQAHAVAIAjIABADQgrAZguABIgFAAIgJAAgAkVAHIgXgCIgCgCIAAgCIABgBIAAAAIgEgfIgEg1IgBgHIBdgJIADAEIAAgFIAAAAIADAfQAFBFABABIAAAAIgBABIAAAAIgZAFQgNACgMAAIgVgBgAELABQgLAAgMgBQgpgEgngOIgBgBIAAgBIgBgBIAAgBIAAAAIAAgHIABgEIABgNIAEgWIACgOIADgNIBxALIgFAYIABAEIgBAAIgGApIgEAPQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIgBABIgBAAgAgTAAIgNAAQgWgCgWgIIAChiIADAAQAvAAA3ADIAABnQgYACgUAAIgGAAg");
	this.shape_80.setTransform(59.7,22.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFD8C9").s().p("AIfDAQjNgdkIAAQhMAIibgBIjjgEQgQgBgbAJQglAKgQgJQgNgHgoAPIABAAQgRAHgEgBQgaABgTh8IAAAAQAAgKAEgEIABgBIACAAIABABIALAOIABAAQAGAEAHAIIABABIAAgBIAFACIAaADIAwABQASAAA4gHIAcgEIAsgFIAjgFIAKgCQAzgHAygEIAigEIAdgCIAggCIAZgBQArgCApAAIAZABIAaAAIAyACIAnABIAXACQBDAGA2AKIAbAGIALADIBKARIAKADIAUAEQApAFAxAAQAYAAAVgBIAEgBIAdgDIAGgBIABAAIABABIABABQgFBhhBAAgApkg/IAAgBIgBgBQAOg5CggiQCjgjEKAAIA2AFQA0AEATAAQBIgDAnADQAyAEAMAGIBOAIQBVAHAzAPQBGAUAIAEQALAFADAPIAAACIgCABIgBAAQhBgUkGgWQjFgRhBgCIgBAAIiKgBIkOAZQhIAHhGAfQgjAPgZAQIgBAAIgCAAg");
	this.shape_81.setTransform(57.3,24.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#40152B").s().p("AJGBhQABgaghgRQAMgvAEgkIAEACQAHACAQAQQAIAJAHABQAYAfADAPQgDAjgyAQgAErBUIABgWIAAgBIAAgBIABgDIgCgNIgCgPIgHgCIACgHIACgNIAIgjIACgOQAAgLACgFIABgLIABgCIAAgCIBxANIgBAAIgEAOIgFAOIgIAdQgCADgFArIABACQgFAIgDAKIgGAbIABAFIgBACIhUgNgApbBXQgEgDgCgKQgDgKgFgGQgNgNgEgSQATgyAsgRQAPgGAbgGIgUAIIgQAFQAJArARAqQgdALgZASIAAABIACARQgIgCgEgEgAmeBUQgBgLAAgLIABgLQARgKAEgIQAFgLgDgOQgGgdgXgxIBSgJIACAKIAAAVIAAAJQAHAiACAhQgeAGgdAJIAHAWIAGAPIABAEIgpAFgABVA6IgugCIAFgaIAIgDIgBh4IBmAHIAAACIgDALIgDANIgBAHIgCAJQAAAHgCAFIAAAMIgCAJIgCAUIAFAFQgKAHgEASIgEAXIgogEgAipAdIAAgDIABgDIgBAAIABgBIgGgHIgBAAIgDgCIAAgBIgBgBIgKABIgDgpQgBgggDgPIgBgOIAAgCQA6gEAqgBIAAABIgCARIAAAZIAAAQQAAAPgCAIIAAAKQgIACgFADQgRAOAEAhIABALIgfACIgYABQAFgQAHgQgAEWgqIABAAIgBABg");
	this.shape_82.setTransform(60,20.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AGiBfIAAgNIgCgBIABgGQABgKACgGIAFAEQAQAKARAFQASAJAWADQAYABAbgMIABgFQAMAJAAAKIgBAFQggAGguAAQgKAAg3gJgAowBbIAAgDIAAgBIAAgCIAAgBQARgNAUgJIACAEIADABQANADAkgGQASgEAPgEIAAAEQgBAOABANQg2AHgPAAIAAAAQghAAgWgDgACeA6IAIgaIAAgBIABgBIABgBIABgBQA2AAA1ANIACABIABACIgDAdQg9gJg5gGgAlNBGIgEgMIAAAAIgBgCIgBgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAQAAgBABABQAAAAABAAIBogIIATgCIAEABIABACIAAABIgDANQg1AFg2AIIgPABIgBgDgAHGAvQgLgGgKgIIgGgFQgCgRADgPIAIgmQABgGADgFQAEgHAEgEIAoAFQAgAEAeALIgTBtIgHABQgmAAgggTgAhdArQAAgZACgDIAAgBIACAAIACgBIADACQAgARAmgDQAQADARgCIgCATIgbAAQgpAAgqABIAAgHgAn9ArIgdhVIgBgFIAWgNQAhgGAvgHIAEAEQAEAFAFAPIACAHQAGATAIAeIACAKQgsAagwAAIgLAAgAkSAPIgXgCIgCgCIAAgBIABgBIAAgBIgEgfIgEg1IAAgLIBYgJIAEAEIADAEIAAgIIADAiQAFBDABABIAAABIAAACIgBABIAAAAIgZAEQgMACgNAAIgVgBgAEOAJQgLAAgMgCQgpgFgngLIgBgCIAAgBIgBgBIAAgBIAAAAIAAgHIABgEIABgNIAEgWIACgOIAEgRIByAKQgDAIgEAWIABADIgBAAIgGApIgEAOQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAgBABIgBAAIgBAAgAgQAIIgNgBQgWgDgWgGIAChlIABAAQAwAAA4ADIAABoQgXAEgVAAIgGAAg");
	this.shape_83.setTransform(59.4,21.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_24}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},2).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_72},{t:this.shape_50},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).wait(1));

	// Layer 9
	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AheB1QgDgtgGglQgmgBghgDIgagCQABBFgIAQQgDAHgRAAQgeAAgdgEQg5gIAAgRQADg+gBgVIhLgSIgcA/QgHAMgRAAQgaAAgpgXQgkgTgOgQQARgyAPgjQgWgOgWgPQABgPALgFIAZASQABgEAIgOIAKgQQBpA+DMAgQBmAQBRAEQFZAAB/g0QAfgNAngXQAhgQAwAAQAIAAAGAEQAKAHAAAPIgLAOIAFASIgsAPIAdBcQAAAOgcAPQghASguAAQghAAgJgQQgLgjgOglIhlAXIAIAlQAGAhAAAHQAAATg+AHQggAEgnAAQgRAAgIgeQgGgogFgRIhiAGIAKBXQgSAEgmAGIghAFQg2AAgKgag");
	this.shape_84.setTransform(60,12.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFD8C9").s().p("AkYBFQkGgphJhUQACgQALgFIAZASQABgFAHgNQAIgPAEAAQAZAAA5AcQBCAgAtAJQBUARAzAGQAvAEA9ALQAbAEAsAAQFiAACDgyQAhgNAogWQAjgRAwAAQAIAAAHAFQAKAHAAAPQAAABgMAMIAFATQheAjg7AUQhrAkhkALQgbADhfAGQhhAGgZAAQh+AAifgYg");
	this.shape_85.setTransform(60.3,9.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AjpCsQi3hLhFh+QgJgBgjgWQghgVgDgFIAQgyQgOgmgGgNQgJgWgYgFQABgQALgEIAYAQQgHgIgBgGQATgGARAAQATAAAkATIAqAWIA4ALQA3ALATAGQA9ATBzAIQBWAHBeAAQDnAACigzQAqgNAzgWQAlgQAJAAQAJAAAFAFQAFAFAAAFQAAAIgMASIATgGIAAAdIgZAwIASBAQgUAXgHAFQgPAKglAGQgSADgFACQgNAEgMAMQgrAzgOALQhuBVhEAfQhZAphwAAQh6AAiQg7g");
	this.shape_86.setTransform(58.1,21.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AkADJQhfgmg/gmQghgVgWgWIgfgjQgPgQgUgkIgWgtQgRgggKgGQgFgEAAgBQgBgTgIgiQgKgiAAgXIABgPQgCgHgFgEQABgQALgEIAgAWQgBgEABgGIABgFIACgDIAIAAQALAAAfAQIApAWQAHADAsAKQApAJAbAEQA2AJBVAUQBZAPCbgBQB8ABA4gMQAhgIAygOQB2gVBBgkIAlgVQARgIASAAQAJAAAGADQAFAFABAFQAAAEgHAJQgGALgMAIQAZgHAcACQAOACAJACQgJADgLAnIgTA8QgBAFgGAbQgEAUgIAIQgbAaglAyQhLBqiVBCQiJA+iAgBQhwAAiVg5g");
	this.shape_87.setTransform(60.5,23.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AnKBeQhShTgwhgQgwhiAAhVQAAgKANgKIBUAyIABgBQgHgHgHgLIgGgMIALgHIBFAaQA/AYBXALIB+ASQBlALCHAAQDiAACTguQAjgMAwgUQAhgPALAAQAKAAAPADIABAJQgDAHgOALQgMAKgIAEIBdgaIAMAEQAJADAAAEQAAAmg8ByQhGCDhNBGQhmBbiOA0Qh2ArhbAAQjxAAjCjDg");
	this.shape_88.setTransform(60.2,25.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AiuEwQhUgjhhhRQglgfgzg/Qgug4gQgeQgYgpgfg9Igbg5QAAgsgHgsQgHg1gBgRQAAgKANgNIBTA8IgLgRQgKgPAAgGQAAgGAEgBIAGgBQARAFAwAZQA8AaBTAPQBjARAhAEQBdAMB0AAQBsAAAwgHQA2gHB4giQARgEA7gcQA4gaALgBIAXADIABAKQAEAPgmAVIBXgdQAUAIAAAFIgjCFQAAAFAEAKQAEAJgBAFQABAGgJAIIgOALQgNALgPAgQgTAqgIAMQhQB3g+A4QhCA9hfAuQhzA3hkAAQhQAAhJgdg");
	this.shape_89.setTransform(60.3,28.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AiNCIQgLgKgFgIIAAgCIgGgJQgXgkgEg2IAAgBIADg3QABgbAEgOQADgcATgcIAEgGIAFgGIAAgBIABgBIAfgUIAGgDIAAAAQAlgPBAgLQAAgCAgAAIAHAAQBnAAAkA1QAaAlgBBWQABA6geBDQgtBmhZAAQhuAAg7hCg");
	this.shape_90.setTransform(60.2,29.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhvBtQgigsAAhTQAAhNAggfQAngmBqAAQA7AAAfA0QAbAugEBCQgEBCgfAvQgiA0gyAAQhfAAgqg4g");
	this.shape_91.setTransform(59.9,25.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AhABFQgIgFgHgUQgGgTAAgJIABgQIgBgFQgCgPAMgYIAOgYQAdgaAhAAQA4AAAUAsQAJAUAAAdQAABghLAAQg1AAgWgag");
	this.shape_92.setTransform(60.4,19.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AlRCkQgIhrh4hsQgcgZg1gqQgkgcAAgGQAAgKADABIADgCQABgBAGAAQB8BEBKAOQBLANBuAJQB7AKBWAAQB1AACxgYQCogYBggaQADALgBABQAAACgIADQgZAIghAjQhJBLgXAsQgoBLgIALIgBgMQAQgtAUgsQAKABgXgLQgYgKg5ABQg5AChGAmQhFAmgjAuIgBgEQgDgNAVgaQARgVARgNQgVgeg0gNQgigJgjAAQgsAAgoAQQglAPgFAQQAZAbAgA9QAAAKgBgCQgshShXglQg6gag6AAQgQAAggAJQAJAJALAfQAQAsAAAyIAAAIIAAgBg");
	this.shape_93.setTransform(59.9,16.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AjTCRQhrgihGgrIgdgYQgagVgBAAQgJgBgagFQgogJgbgUQgTgQAAgFQAAgFAKgaQAKgaAAgFQAAgTgWgVQgMgLgXgPQABgQALgEIAYAQQgHgIgBgGQATgGARAAQATAAAkATIAqAWIA4ALQA3ALATAGQA9ATBzAIQBWAHBeAAQDnAACigzQAqgNAzgWQAlgQAJAAQAJAAAFAFQAFAFAAAFQAAANgKALQABABAQgFIAAAdIgeAiQAAAFAMAiQALAiAAAFQAAAMgcAOQghASguAAQgFAAgOgEQgPgEgFgBQgCAAgVASIgbAYIhtBAQg1AdhQAOQg8AKhBAAQhxAAiDgpg");
	this.shape_94.setTransform(58.1,17.1);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("Al/BzQjMhCg3hWIgFgNQgDgLAAgDQAAgpANgWQAPgaAngLIA6AQQAAgGgBgDQAAgCAJgGQAzAIC9AxQCIAjCUAAQB8AAB/gUQA+gKA6gSQAdgKAVgIQAPgGAigTQAagPAMAAQAlAAAAAPQAAAFgPAPQAlgGAfATIAIAFQAOAHANAVQALAVAAAPQAABckLBSQhkAehvAUQhlASg0AAQjMAAjHhBg");
	this.shape_95.setTransform(60.5,17.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("Al9B2QjlhAgzhaQgDgDgDgKQgDgKAAgDQgEhQBJgRIA8APQAAgFgBgFQAAgBAJgFQA4AHDBAwQCMAhCJABQAxAAB1gLQBmgIAegFQAvgIBnghQAQgFAigTQAcgPAMAAQAlAAAAAQQAAADgPAQQAYgEAXAHQAOAEAKAGIAIAEQAPAHAMAVQAMAUAAAPQAABKjzBTQjnBPixAAQjCAAjPg6gApCAJQgDgDgFgCIgEgBIAMAGIAAAAg");
	this.shape_96.setTransform(60.5,16.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AHgB/QgWgDgSgJQgRgFgQgKQgPgKgIgPQAFguACgDIAIgaIAFgPIABgCQg3gJg3gGIgBAFQgCAGAAALIgCALIgIAmIgCANIgCAKIgEAHIgBAEIgBAAQgcAAgcgEQgjgGgigLIgBAAQgNgDgHgIIACgXIACgIIAAgKQACgGAAgGIACgJIABgIIADgMIABgFQgygDgygBIABBtQglAOgjgHQgmAEgggSQgLgFABgMIgBgVQACgHAAgOIAAgQIAAgZIABgCQgxACgxADIAAABQADAPABAeIADAsIAEAUQgDADgGAEIgCABIgkAFQggAEgugHQgLgFgFgGQgDglgHgjIAAgJIAAgOIhMAKQAQAjAFAZQADAPgFALQgEAJgVAKQgVAKgkAHQgkAGgNgCIgDgBQgWgvgMgyIgMAFQgOAIgHAMIAAAAQgEAHgGAAIgLgBIAAAAIgBgFQAAgWAlgQIgVAFQgZAAAFgUQAAgnC8giQCrggCOABQAAgCBSAAQDHAABaAJQA6AGCFAcQAaAGBbAPQBOARAAAbQAAASgUAAQAFAEAEAEQAeAsgQAAQgKAAgPgNQgUgQgKgEIgVgHQgHAugPA6QgYALgUAAIgHAAgAEKgKIABAAIgBAAg");
	this.shape_97.setTransform(60.7,20.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFD8C9").s().p("AKBBZQgEAAgegTQgggUgdgGQh4gdibgPQiYgOiXAAQhxAAicAOQiWAOhcATQg5ALgOASIgFALQgCAEgFAAIgLgBQgDgCgBgEQADgHAQgQQANgNAHgEQgPAHgNgCQgQgBAAgNQAAg6EXggQCzgUCJAAQC9AABhAKQBEAHCIAbQAwAJBXAPQBAAQAAAZQgCAKgSAHQAdAgAAAOQAAAHgCAAIgEgBg");
	this.shape_98.setTransform(61,17.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AELCFQiDgdiSAAQitAAiLATQiMATg3AAQhtAAgbgtQgIgOAAgSIACgSQACgmAHgJIAFgJQgBAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAgBQAAgVAxgUQgEgCgEgDQgGgFgGAAQgDgEAAgDQAAgZCCgcQCZggDVgCQAAgCBEAAQCBAAECAlQFCAvAAA3QAAAMgLADQAVAHAAAZQAAAnggAlQg0A8hwAAQhDABiEgdg");
	this.shape_99.setTransform(62.1,22.6);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("ADsCUQi1ghhRAAQhIAAjEAaQjEAagbAAQhgAAgggmQgYgeAAhUQAAggAegdQAcgcA2gWQhDARAAACIgBAAIgBgHQAAggBrgcQCMgjEBAAQB0AAGkAvQBpAMA2AUQApAQAAANQAAAFgNAPQAkAYARAZQAQAZAAAkQAAA6g6AfQg8Agh0AAQgTAAi1gggAozCPIABAAIgNgCg");
	this.shape_100.setTransform(63,24.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AFFCtQiYgmh3AAQiEAAjZAcQjYAbgUAAQgvAAgRgdIgFgSIgBABIAAgEIgCgJQAAgHAFgFQAPhwAvguIAAAAQgdAWgcAHQgGgCAAgMIghAAQgbAAAFgTQAAgKA1glIA6gmIAzglQAngIAiAAQAIAABGgSQBFgSAVAAQAKAAALAHICogHQFtAADHBBQBJAXAnAdQAgAYAAARQAAAVgRAAQgLAAgUgLQARARAFAWIAQA6QAOAyAFAoQAFAngvAOQgUALgiAAQhTAAiXglg");
	this.shape_101.setTransform(58.6,26.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AiiB8QgegzAAhEQAAg5AbgzQATgjAWgOIgBAAIgNgLQAag3CXAAQAYAAArASQAjAPAIAHIgJAGIgZgDQAiAMATAfQAZAogBBKQABCGhFA/QgsAogtAAQiOAAg3hfgAAyi3IADgBIgDAAg");
	this.shape_102.setTransform(60.1,28.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("Ah9BgQgPgjAAg+QAAgvAPgqQAEgLAPgKIgaAIQgDAAgKgFQgBgBAAgKQAAgPAzgYQAxgXAVAAQAGAAArASIACAGIgHADIAlAGIAAACQA5AJAWA7QAOAjgCAkQgKC9hqAAQh1AAgnhWg");
	this.shape_103.setTransform(59.5,24.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AglBLIgCgGQgFAPgRAAQgXAAgMgVQgIgNAAgKIAPgxQgfgIAAgPQAAgOAdggQAggkAdAAQCIAAAKAoQABAOgZACQANALAIARQAIAUABAbQAABihMAAQhBAAgSgog");
	this.shape_104.setTransform(56.9,17.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AlkB7QhpgFgVgEQgEgBgLgLQgFgGgIgqQAAgFgIgMIgUggQgbgkgNgsQgOgrBdAUIAFABQAOAHANACQgzALAAAIQAAACAEAFIAQACQAWAAAogHIgEgCIgYAFQgPgCAAgHQAAgEAPgFIgEgCIAsgKQAWgFAKgBIABAAIAXgEQCygZDdgBQAAgCA7AAQDDAACSAaQAGgCAMAGQAOAEAPAGQAeALAAAFQAAACgDAEIAKACQARAAAGgEIAEgHQgZgKgvgJQAtgSAhAAQAhAAAAAOQAAAHgeAxQgCAUgMAUQgQAbgGAmIgBAdQgKAUg4ACQjdASiYABQgjAEhNAAQhyAAjNgKgAkjAhIABAAIgBgBIAAABgAh8gDIADABIgBgCIgBAAIgBABg");
	this.shape_105.setTransform(62.1,24);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("ADbCdQixgjhQAAQhRAAisAcQisAbguAAQhZAAgkgfQgjgeAAhHIADgkIACgJQANghAEgIQANgWAZgPIgQgBQgKgBAAgLQAVgYAugPQAmgMBsgVQCNgcBNABQDMAAC8AQQClAOBKASQCYAnAyAVQApARAAAUQAAALgBgEIgGAIQgFADgGAAQgGAAgOgGIgfgKQAOAQAMAYQASAhgBAfQABA4gyAiQg6AohxAAQgcAAixgig");
	this.shape_106.setTransform(64.4,25.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AFFCtQiYgmh3AAQiEAAjZAcIi4AWQgwALgqgPQgagIgEgeQgEgbAJgbIAHgcQARhBAigjIAAAAQgdAWgcAHQgGgCAAgMIghAAQgbAAAFgTQAAgKA1glIA6gmIAzglQAngIAiAAQAIAABGgSQBFgSAVAAQAKAAALAHICogHQFtAADHBBQBJAXAnAdQAgAYAAARQAAAVgRAAQgLAAgUgLQARARAFAWIAQA6QAOAyAFAoQAFAngvAOQgUALgiAAQhTAAiXglg");
	this.shape_107.setTransform(58.6,26.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AE8C0QiUgnh0AAQiAAAjTAdQiPATg3AGQg1APghglQgUgXAHgbIAIglQAMg/AXglQgMAKgJAAQgKAAgCgIIgDABQgGgCAAgMIggAAQgaAAAFgTQAAgLAzgnIA5gnIAxgmQAmgJAhAAQAIAABEgTQBDgTAUAAQAKAAALAIICkgIQFjAADCBEQAYAIAUAJQAJgPAhAXQAoAbAFAYQAJAMAAAJQAAAWgRAAQgKAAgTgMQAQASAFAXIAPA8QAOA0AFAqQAFApguAOQgUAMghAAQhQAAiUgng");
	this.shape_108.setTransform(58.6,27.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAmCsQhKAHiVAAIjagFQgQAAgbAJQgiAKgPgJQgMgHgoAQQgQAGgDAAQgXAAgSiAQAAgIADgEIgGgHQgGgFgKgQQgKgSAAgHQAAgzATgPQgIgBABgOQAAgMAVgQIAjgXQAKgFAngOQAtgPAOAAIAzgKQAwgKAeAAIAUgDQAJAAAGAEQAHAEAAAJIAIAAIAtgGQAZgEAXgCIAWgDQARgCAFAAQAPACAFgGQAFgHAQAAQAaAABGgFIAggCQAcACAOAPQAEADAVABIAkAAIAvACICIAXQCTAZA3AHQArAGAmAYQAkAXAAAUQAAAMgHAAIgBAAQAOAQABAiQAAApgWAVQgVATgnAJQgFBkg8AAQjGgej+AAgAoQhwQAYgHAegGIgKAAQgaAHgSAGgABjiZQgKgBgHAAIgVgBIAmACg");
	this.shape_109.setTransform(60.7,25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAtCcQhMAHibAAIjjgFQgQAAgcAJQgjAJgQgIQgNgIgpAQQgQAGgEAAQgYAAgTh6QAAgHAEgEIgGgHQgHgFgKgPQgKgRAAgFQAAgsAPgQQAGgEAOgXQAOgXAngLQAogLAVgEIB5gZQBLgRBLgFQBigBBhADICxAGIB8AMIAqABQBdADBFAbQBFAbALADQALAEAFgBIAPAHIAEAAQACgBAdAeQAdAdAIAbQAIAZgCAJIgDANIgBADQgIAUgMAGIgGAGIgBABQgSAJgYAFQgEBeg/AAQjNgckJAAg");
	this.shape_110.setTransform(60.2,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84}]}).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_93}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_94}]},1).to({state:[]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},2).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_105}]},1).to({state:[]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,-2,119.8,29.2);


(lib.FRD_back_hat_v01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8D871").s().p("AgqA/QgagSAehmIAJgjQAtALAOAIIAYAOIABABIAAACIgBAHIgCACIgBAAIgDAMIgBADIgCAKIABAAIAAACIgBACIAAABIgPA3QgDAPACgEIgEANIgLAfQgegNgagRg");
	this.shape.setTransform(70.2,92.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8DA8BC").s().p("AACFXQgRgPhBgRIAQg8QAEgPAUhrQAWh2AFgpIAJhFQAEgtgEgeQgOhag3gqQgPgMgUgJQgPgGABgBQABgGAEgDIAAAAQBCABA5AOIAIACIBFAjIAHAHIAAAAIABABIAAAAQApAtgLBTQgSCPgjCAIgBADIgCAHIgRA/IgCAJIgCAEIgPAyIgFAYIAAAAIgDANIgPA1IAAACIgCAAIgCgBg");
	this.shape_1.setTransform(75.9,49.7);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7596A8").s().p("ABwCGIhRgjQgxgNgigkQgigngHgHIgHgMIgKgXQgGgTANgeQAOggAJgGIAKgHIAAAAQARgFAqgDQApgEA2BGIAOATIAFAlIAKCRIgBAAIAAAAg");
	this.shape_2.setTransform(26.3,83.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF7F").s().p("AAdHjQhDgDgogGQgVgDgZgKQgXgIgbgOIABgNIAAgCIgBgFIAAgBIAAgpIAAgDIgBhUIAAAAIAAgLIAAgBIAAgBIABgCIABgBIAggDIApgEQBJgHBPARIAnAJQAvALAOAIIAXAOIACABIgBACIgBAHIgBABIgBABIgEAMIAAACIgCAKIABABIAAABIgBADIAAABIgPA5QgDAOACgEIgEANIgLAgIgCAFIgBAAQgaAFgtAAIghAAgAA8muIgCgBIgBgCIAAgDIAAgBQABgMADgLIAAgBQADgJgCgIIAAgCIACgBQAigGAbAPIACACIAAABQgEANACAMIgDAVQgggFgegCg");
	this.shape_3.setTransform(58,54.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A4C5DB").s().p("AB7FXQgTgPhBgRQhAgQhEgFQhEgEggAGIgcAFIgNACIgCABIgBgBIgCgZIgCgiQgEg7AEhYQADhYAGhoQAGhqAMg1QAMg2AbgPIACAAQBdgSBRACIAAAAQBDABA7AOIAHACIBFAjIAIAHIAAAAIAAABQApAtgKBTQgTCPgjCAIgBADIgCAHIgRA/IgCAJIgCAEIgUBKIAAAAIgDANIgPA1IAAACIgBAAIgCgBg");
	this.shape_4.setTransform(63.9,49.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAAAAIABAAIgBAAg");
	this.shape_5.setTransform(63.2,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(41,43,51,0.18)").s().p("AAAABIABgBIgBABgAAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(74.2,94);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AADIBQgpgHgdgJQgTgGgughIgDAAIgXgFQgjgSgvgPIgsgWQg3gYgbgoQgTgfgGgEQgMgXADguQADgTAEgOQAMghAagXQAWgaAtgDQBQACAwA3QAAg3AGhEIAUj4QAJhoAVg8IAAgBIACgMIAQgaQAIgHALgEIABgCIAAAAQBNgOBLACIgBgFIACgFQgBgIACgIIAAgBIAAgBIACgKIACgHQgBgHABgFIAAgCQACgJAFgJQA0gJAZAKIAgAOQAIAFACACQABANgFAOIgBADQgFALACAKIABAGIgDADIgBAHIABABQBGAMBFAbQAjAPALAkQAPA3gMA8QgsDqg+DnIgJAeIAAAAIgUA9QgaBPgOAzIgGAKQgLARgMACIgtAHQg9AGgnAAQgbAAgRgDgAEaCYIgUBJIAAABIAVhPIgBAFgAFIlOIABAAIgBgBgABtoDIADAAIgEAAg");
	this.shape_7.setTransform(52.2,54.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12,3.1,80.4,103.4);


(lib.FRD_back_ear_R_v01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AgeCAIgYgIIgZgVIgNgKIAAiPQAXgfAdgTQAhgXAaAAQAeAAAWAiQAWAiAAAqQAAArglAxQgoA1gsAAIgCAAg");
	this.shape.setTransform(10.3,15.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhHCSIgZgMQgFgBgGgFIAAjaIAIgGIAagTQAQgOAVgMQAHgEARgFQASgIAKAAQA1ABAZBIQAMAlACAnQAAAvgsA5QgwA/gyAAQgKAAgbgMg");
	this.shape_1.setTransform(11.9,15.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1,0,21.8,31.8);


(lib.FRD_back_ear_L = function() {
	this.initialize();

	// shae
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("AhRBLQgYgkAAguQAAgzAVgkQATgiAWAAQAMAAA0AZQA5AbAcAVIAACNQgIAKgHgCQgHAAgFAEIgJAGIgRAOQgNALgHAAQhOAAgkg2g");
	this.shape.setTransform(12.9,14.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhOBvQgmgtAAhLQAAhFAQglQARgoAiAAQAmAAA5AcQBEAhADAnIAACHQgIAigUATQgXAXgtAAQg9AAgmgtg");
	this.shape_1.setTransform(11.8,14.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.6,23.5,31.2);


(lib.FRD_34BACK_part_hair = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39394F").s().p("Ah3CUQgEgCAAgKQABgQAvgsQAzgwA+gnQCwhxBbAvQACAEgBAIIgFAAQgGgCgJAAQhnAAiABNQhyBIgWA5QgCAFgGADQgGACgOADgAkvBFQgCgEgBgLQABgRAsglQAsglBBgkQCkhdBvASQAAADAIAOQjvAMi5DCQgHgCgDgEg");
	this.shape.setTransform(30.7,15.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,61.4,30.5);


(lib.FRD_34_MOUTH_COMPcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag6BvIgBgBQgDgEgBgDQgFgkgLghIAAgCIABgBIABgBQAwgCAugEIAJAAIACAAIABACQAIAkAOAlIAAABIgBACIgBABQg0AIg1AAIAAAAIgCAAgAjYBrQgtgDgugBIgCAAIgBgCIAAgCIAAgBIAAgBQAEghgGggIAAgCIABgBIACAAIAwACIAAAAIAmABIACABIABABIABABQgDAjAJAhIAAACIgBACIgCAAIAAAAgAnGBQQg6gGgtgfIgBgBIAAgCIAAgBQAIgfAEgcIAAgBIACgBIACAAQAvAWA0AKIABABIABABIAAACQgMAdADAiIgBACIgBABIgBAAIgBAAgAC8BIIgBgCIgBgBIAAgBIgbg6IAAgCIABgBIABgBQAvgGAvgNIABAAIAPgDIACAAIABABQADADABAEIAAAAQAKAaAGAeIAAACIgCABQgxARg1AEIAAAAIgCAAgAHCAFIgBgCIgCgCIAAgBIgBAAIAAAAQgTgegJggIAAgCIACgCQATgHASgIIA/gdIABAAIACABIABABQAKArAZAoIAAACIgBACQgxAag5AAIgCAAg");
	this.shape.setTransform(62.7,18.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ApXBQQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgCIAAgBQAAgTgCgTIgLgwQgBgFAAgEIAAgGQgBgVAPgEQAXgGAqAGQAMgCATAEQgBALgBAaQABAUADAQIgBABIADAcIAFAjQgSADgQAAQgkAAgggMgAnPBTIgLgDQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgCIAAgBQAAgTgCgTIgLgwQgBgFAAgEIAAgGQgBgVAPgEIABAAQAXgFApAFIAMgBQAJABALACIAKACIAAAXIABAEIgBAJQAAATgCALIABAAIAAACIgBANIAAAGQABARAFARIADAJIAAABIgBACIgCABQgPADgQAAIgKAAQgdAAgbgIgAh9BOQgHgcABgeQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAgBIgCgZQAGgJAAgeQAAgMgFgHQAMgEAfADIAXAFIATgBQAHgBAFALQACAHAAAMIACAWIAEARQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAABAAAAIgBACIAGAiIAAAKQAAATAFAMIgrACQgfAAgfgDgAAMBOIgEAAIgCgBIAAgBQgEgEAAgdIAAgCIgCgiIgCgFIgCgGIAAgBIgCgQIgCgXIAAgDIADgOQACgNAuAFIAXAFIATgBQAHgBAFALQACAHAAAMIACAWIAAABIAEAQQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAABAAAAIgBACQAFAjAKAlIAAACIgBABIgCAAIgMABIgfABQgeAAgegDgAkXBPIg+gDQgLghABgwQADgOgDgfQgDgLgSgFQAHgCAVAAQAhAAALAGQAYADAAALIgBAUIgCAHIgCAAIgBAIIgBATIAAABIAAAFQgBAhAIAeIAAACIgCABIgBABIAAAAgAicBPQgsgDgtgBIgCgBIgBgBIAAgCIAAgBIAAgBQADgbgDgaQgDgGgBgTIAAADIgDgUIgBgBIAAgGIABgUIAAgCQACgGACgDIABgBQAEgDAbAAQAhAAALAGIAMADQAMAEAAAHIgBAUIgBAHIgDAAIgBAIIAAATIAAABIgBAFQgBAgAIAfIAAACIgBABIgCABIgCAAgAEMBJIgKgBIgCgBIgBgCIAAgCIAAAAQgFgjgGggIABgCQgCgDAAgEIABgBIAAgDIgBgDIACgOIADgHIABgJQAFgUAKgEIADgCQANgCBBAFIARACIAGAAIgDAmQABANgBAMIgBAEIACAFIgBAAQADAggCAhIgBADIgCABIgNABIggACQgZAAgZgEgACTBKIgLgmIgIggQgEgMAAADIgDgdIACgDIABgJQAGgXAMgDQAPgCBQAHIgEALIgGAiIgBAPQAAAAAAABQAAAAAAgBQAAAAAAAAQAAgBAAgBQgDAoABAeIADAOQgRACgRAAQgXAAgXgDgAICBGIgJgCIgCgBIAAgBIgCgEIAAAAIAAgCIgBAAQgIgfgBgdQgCgGgBgKIgCgNIABgRIgBABIAAgUQACgHAIgCIAFgCIAbgGQAJgEAXgDQAYgDAIACIALAEQgDAOAAALQABALADAGIAAAFIABABIAAACQgBAvANAwIAAADIgCABQggALgfAAQgTAAgTgEgAGKBHIABgEIgBgDIAAgCIAAgBQADgggHgbIABgBIgBgCIgBgCIABgBIAAgBIABgBIgCgDIgDgpQADgLAAgIQAAgFgDgEIARgEQAJgEAXgDQAYgDAIACIALAEIAAACQgGAGgCAIIgBAcIgBAAQABAJgCAOIgBALIAAABQACAkAGAnQgYAGgXAAQgRAAgQgDg");
	this.shape_1.setTransform(69,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhRCcQgVgOgDgiQgDgbgIgaIgBgBIgCgBQgoACgrAAIgBAAIgBACIgBABQABAFAAAHIAAAAQgBAmAMAjIAAAAIAAACIABACIgBAAIAAABIgEAFIgBABIgBABIgBABIgBAAQhKABhEgKIgCgCQABgvgHgvIgBgCIgCgBQgjgEglgGIgCAAIgBACQgQAmAJAqIAAABIABACIgBABIAAAAIgBAAQgWALgfgLIAAAAQgTgIgUgGIAAAAQgigJgegUIAAgCQAGguAJgsIAAgBIgBgBIgIgFQgUgNgagIIAAAAIgBAAIgBgBIAAAAIAAgBQgDgDACgGIABgGIAAgBIAAAAIAFgDIADAAIADgCIABABIAfAOIAKAHQAdASAXACIAUAHQAnANApAIQBKAPBLAEQDFAIC/gcQBggMBcgbIAAAAQBAgSA8gcQBSgnBTgeIArgQIAAAAIACABIACABIACABIADABIABABIAAAAIAAABIABADIgBAGIgBABIAAgBQgjAXgpARIABAAIgbALIgBABIgBABIABACQAPAXAKAaIABACIAAAAIAAACIAAAAIABACQACAEAAAEIAAABIAAACIAAABIAAABIABABIABABIABABIADAEIAEAaQgkAmg7AJQgaAFgZgIIgBAAIgBgBQgHgDgEgGIAAgBIAAgBIAAgBQgRgjgLghIgBgBIgBgBIgCAAQgrAQgwANIgBABIgBABIAAAAQAPAZAFAfIAAAAIABACIACADIAAANIAAAQQg6AbhBAEIgBAAQgcAHgPgjIAAAAQgLgegGgcIgBgCIgDgBIg/AKIgDAAIgQACIgCABIgBACIABACQAJANAGASIATAxIAAADQgLAKgNAGIgJAEQgNAEgRAAQgQAAgSAEQgPAEgMAAQgSAAgMgIgAELANIAAAAIAAAAg");
	this.shape_2.setTransform(63.8,16.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AmDBxQgVgDgVAAIAAgBQgWAAgUgDIgMAFQgNADgQgBQgVgDgVAAIAAgBQgkABgggLIgCgBIgGguIgDgcIAAgBQgCgQgBgUQAAgjADgIQADgHAUgFQAbgIBBAFQAQABAJAEIAIgCQAZgHA6ADIACgGQAKgPAnACQA5AGAUAGQAKgOAmACQAtAFAWAEQAOgPAnAEQBAAGAPANIADgGQANgRAnAEQBGAHALAOIAAAAQAJgTARgCQA8gHAyAMIABAAQAGgEAIgBQAzgGAsAIQALgHATgBQAIgBAegIQAdgGAQAEQAVAFAFAIQAHgCAJAAQAIgBAegIQAdgGAQAEQAaAGABAMQABAGgEAKIABAAIACARIADAOIAAABIAAADQAJAcADAcIAAACIAAABIAAACIAAAAIAAACQABAFgBAEIgBABIAAADIAAAAIAAACIAAAAIAAACIABABIACAGIgDAeQguAhg7gFQgYgBgVgMQgkAQgsgDQgPgBgOgFQg7AMg8gKIgIgBQg6ALg7gKIgEgBIgGADIgJACQgOADgQgCQgTgBgSACQghAFgSgMIgHADIgJACQgOADgQgCQgTgBgSACQgbAEgSgHQg8AAg4gGIgCADIgCABIgBABIAAAAIgBABQgqAAgogDQgJAHgLAEQgJACgMAAIgIAAg");
	this.shape_3.setTransform(69.4,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.7,32.8);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_034("single",6);
	this.instance.setTransform(-55.7,-5.7,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_1 = new lib.FRD_MODEL_part_034("single",6);
	this.instance_1.setTransform(56.3,-5.8,1,1,0,0,0,17.7,20.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.1,-15,144.4,30.2);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_034("single",6);
	this.instance.setTransform(-55.9,-5.7,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_1 = new lib.FRD_MODEL_part_034("single",6);
	this.instance_1.setTransform(56.5,-5.7,1,1,0,0,0,17.7,20.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-72.3,-15,144.7,30.2);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(57.2,0,0.999,0.999,-9,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(-55.8,-0.8,1,1,0,0,0,13.6,3.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-69.5,-6,139.1,12.2);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(55.3,1.1,0.999,0.999,-39,0,0,12.1,4.3);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",1);
	this.instance_1.setTransform(-56.8,-1.9,1,1,30,0,0,13.6,3.4);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-67,-11.7,134.2,23.7);


(lib.FRD_MODEL_part_041 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#91AFC2").s().p("AhBgHQAagqAmgSQAbgOAVAEIATApQgeAJghAoQgbAlgJAcg");
	this.shape.setTransform(63.9,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD8C9").s().p("AiIARQAAgwAtg8QAtg9AqAAQAjAAAYAQIAXAWIgDgDIgJAIQALAaAiAoQAaAhAAAMQAAAGgRAPQgbAZgjAzQgDAFgZAMQgZALgKACQgMADgTALQgQAKgDAAQhRAAAAiIg");
	this.shape_1.setTransform(76.1,68.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF7F").s().p("AmWBkQgXhEAAgfQAAhCAygiQAngZCGgmQCugxDuglQB5gTBdgJIAKgBQgGAEgPAkQgQAngpAhQghgHgOAAQguAAi8AuQjTA0h4A0IgKgUIgGAFQgDADgCAAIgCAYQgBAdATBLQATBTAWAlQhSgFghBFQg5iVgKgdg");
	this.shape_2.setTransform(90.4,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#91AFC2").s().p("AhjADQAggnAQgNQAegWA+gQIA7BFQhsA9giAtg");
	this.shape_3.setTransform(60.4,50.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD8C9").s().p("AhQBvIgKgTQAAgEAJADIAKAEIAHgCQAAgLgmgfQgmgeAAglQAAgCAtgnQAtgpAKgFQAqgZAJAAQAtAAAtA0QAoAtAAAXQAAAIgIAEIgWAKQgCgMgEgCIgKgDQgGAWgCAUQgCAJgGANQgDAFgRASQAAAGgFgBIgJgCQAEgTgCgFIgDgBQgIADgaAhQgXAfgRAAQghAAgRgSg");
	this.shape_4.setTransform(71.7,63.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF7F").s().p("An6AUQgPghAAgnQAAgyAWgfQATgbAsgWQA0gZB4gVQAOgDCOgMQCQgOARAAQCDAAA/AEQBiAGCcAEIAAAKIACgTQAGADAFAbQAFAZACAgQADBEgDAQIgIAHIAAgNQidgVhsgGQhKgFhrAAQh0AAiLAQQiAAPhmAXIAsANIAuBOQA2BZArA1QgtAKgvAhQgpAcgIATQhqisgchCg");
	this.shape_5.setTransform(86.1,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF7F").s().p("AmCDsQgQgRg6hZQgXgjglhSIhRivIAKABIARACQAqAAAogNQApgNAegYQAJAzAwBzQA5CEA3BEIABAEQAAACAHAAIAIgBIAEgCQACgBAAgHQAAgDgNgVQDbhfBog+QAmgXBhhHQAvgkBWhMQBHg7ApABQAfAAAeAbQASAQA/BNQhzBdidBoQigBshwA7QhdAzhRAbQhMAagwgBQhXAAg7g6g");
	this.shape_6.setTransform(81.4,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#91AFC2").s().p("AhHBYIgohaQATACATAAQBCAAAcgOQAcgOAjgzIABgIIAWBkQAFAVAAAFQAAAPgqAQQgyAShIAAIgTAAg");
	this.shape_7.setTransform(27.2,-13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD8C9").s().p("AhnBXQAAgqAhgWQAUgNAXAAQAWAAAJAKQANAJAAARQgBAPgfAQQgkAPgCACIADAHQADAGAFgBQAYABAdgUQAggTAAgSIgPgmQgZgiguAKIACgcIAAAJIBbAOQAhgGAGAJIAJAMIAHgBQAHgDAAgHIgDgXQgFgTAAgFQAAhOAfgUQAIgFApgEIgHDZQAAAvgmAjQgnAkg4AAQiSAAgBhRgAh/ANQgIgYABglQAAghAVgSQALgJAMgCQAKAAAEADQALAJAAAeIgDA+QgpAagKATIgIgagAiphaQgJgSgGghIAFgPIAHgCQAGgDAHAAIASAMIAZASQgNAKgMATQgOAVAAALQgKgKgEgKg");
	this.shape_8.setTransform(16.4,-32.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#91AFC2").s().p("AAABVQhOgYgug1IAvhqQBOBCAdAJQAEAHAjAIQAtAJAIAEQAGAIgGAQQgDAIgEAGQgGALgNAeQgHAPgGAAQglAAgugOg");
	this.shape_9.setTransform(172.4,18);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFD8C9").s().p("AAIBaQgzhLgUgWIAAABIAFAGIg4gfIAKAIQANAMAdAkQAVAcAQAXIgOgEQgqgNgvgYQhHgjAAgcQAAgaA1ggQA7glBDAAQAbABAjAFIAAABQgMACgEAGIAmAYQAcASASASQA4A2AABWQAAAJgIAHQgJAHgNAAQgNAAgRgEQAHh7hDgzQglgdgqAAQgGABgKADIgJACIADADQA/AIAoA0QAjAsAAA8QAAAfgIAHQgEAEgRABQgXAAgXgigAC/BdQAChCgig0Qgng8hMgeIABgBQAmAKAZAQQAaAPAVAZIAAAAQATAZAOAnQAMAiAAALQAAAIgCAMQgDALgCADg");
	this.shape_10.setTransform(185.8,7.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF7F").s().p("AgUGEQgvgFhPhfQhOhfguiNIAAAAQghhUgMhIQgGgjAAgoQAAh4BKg1QAmgbAzgJIACABIAAgBQBIAXAAAlQAAATgIAUIgSAiIgkBNQgKAUgGAAQgGAAgFgEIgEgDIgZhQQgGgRgIgFQAEAXgCAOQADAXAbBeQAVBFAqBIQAYArA1BTQgHAMgQAfQgQAigHARQA2hEAkgrQAXggBaicQAqAtA6AWQA2AXA3AAIg2BhQgkA+gwBBQhFBOgRAOIgjAaQgbAIggAAIgYgBg");
	this.shape_11.setTransform(147.2,26.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#91AFC2").s().p("Ag3A1QgEAAgJgMIgBAFQgSgagbhBIAQAFQASAEAGAAQAKAAAsgLIALgEQAKgEAGAAQACAAAsAcQATAJAcABQANAAACARIgDACQgIAVgsARQgpAQgnAAg");
	this.shape_12.setTransform(53.8,7.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF7F").s().p("AiUEuQgigPgignQg9hDiLj8IgGgKQAeAJAzgMQA/gOAhglQBYCrAmBCQAkA9ALAAQAHAAACgEIADgGQAAgHgLgOIC+idIB1hlQA3gyBhhiIgGAGIAIgIIAgglIAAEGIAAAAIgDACQjYDRh1BTQhjBHg+AAQgsAAgdgMg");
	this.shape_13.setTransform(91,23.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFD8C9").s().p("AB0BCQgsgXgMgEQABAFgCADQgCAEgMADQgmAKgIAAQgGABgagJIgZgIIAAAAQAJgFAogmQAegdAagFIgBgDQgIgHgOgBQgmABgXAjQgXAjglgBQgFAAgFgIQgKgNAAgbQAAghAtgSQAkgPAtAAQANAAAYAGQAkAIAOAQQAbAfAVAaIASAYIAaAPQAKAFAAAPIgBAUQgKADgKgBQgbABgigTgAiQA8QgQgNAAgSQAAgQASgYIABALQAJAhAIAKIASAMQgCAIgPAIQgKgDgLgIgAjEAKIgBgKQgDgRAfgSQAWgNALgCIAAADQgGACgQASQgRASAAACQAAAGgDAEIgGAOg");
	this.shape_14.setTransform(46.5,-5.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#91AFC2").s().p("AANBIQhEgRgvg4IAwhQQAWAcAKAJQAEAEADAAQALAIAbAIQAZAHAKAAQAgAAANgLIg6BeIgHAQg");
	this.shape_15.setTransform(270,-24.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFD8C9").s().p("AhbDOQgbgGAAgIIgSgVQgSgVgBgEIgIgQQgFgRAAgmQAAgRAKgkQAJgfAHgMQALgRAjgeIAggbQAAgGAEABIAKADQAGAAAIAFQAJAFAAAGQAAAGgCAFIgDAIQgaAegWAlQgYAqAAAUQAAAGADADIAGADQAHgiAtgzQApgxAAgXQAAgFgKgPIgLgPQAAgKgNADIAkgMQALgEAIAAQAOAAAFAEQAIAGAAAVIADALQABADgQASIguA5QghAlACACIAFAFIAEADIA0g3QAqgsADgGIAAABQgUAdgKA0QgHAkAAAhIABAJIAFADIAHAAQABAAAUgVQAVgXAigFIAAAAQANgEASAGQATAHAEAMIAAAAQgEAFgvAZQguAZgNAQQgeAjgeAWQghAVgYAAQgLAAgWgEgABEhXQAGglgLgSQgMgRgcgDQAVgZAXgNQAPgJAGAAQASAAAGAEQAKAHAAAVQAAAOgOAWIglA3g");
	this.shape_16.setTransform(281.7,-49.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFF7F").s().p("ACzEVQhUAAgigDQgdgDhLgJQg8gIhVgRQhwgYgsgVQg4gbhggpQhigpgigQQgxgYgegXQhOhoBOgtIAJgDQDWBxB6AwQECBpDAAAQCGAAByhYQB3hZCijpQBQBIAsABQArAAj5EbQgkAlh2BQQh3BQhTAAIAAAAg");
	this.shape_17.setTransform(196.4,5.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#91AFC2").s().p("AAhBRQhhgMgihFIA2hRIACABQAHAUAOAKIABAAIAhAaIABAAQAiAWAKgBIApAEIAAAAQghAogfApIgCgBg");
	this.shape_18.setTransform(95,-39.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFD8C9").s().p("AgSDAIgqgHIgCAAQgGgBgYgQIABAAIglgZIAAAAQgIgHgEgLIAAAAIgGgTQADgEAAgFQgCgaAPgUIAAgBIAGgIIALgBIACAAQAlgHAXgfQADgDgBgEQgBgGgEgDIgEgBIgUAMQgPAOgVAFIgOAAIgBAAQgKgBgCgJQgCgHABgFIAAAAQABgMAFgKIAAAAQAEgIAHgGIAAAAQAUgSAcgCIAPAAQARAKANAPIABABQgIALAAATQAAAMAGAdIAAAAQAFAVADAhQAOAVAEALIAFgDQACgEAAgFQgBgygHgeQgGgZAAgKQAAgJADgGIAAAAQAFgCADgEIAAgBIAFgCQAWABAUAWIABACIAAAAQAWAXAAAkQAAA7gWAmIAAAAQgPAZgWAKIAAAAIAAAAIgCAAQgKAEgOABIAAAAgABcA3QAAgqgYgcIAAgFIAAgCQAEgDABgFQABgKgBgLIACgIIAAAAQAGguAAgeQAAgcAMgPQAKgNARAAQAJACAHAPQAIASAAAWIAAAAIADAmQgEATAAAGIgEAbQAAAIgDALIgBAAQgFASAAACQgBAFgZArIgMAWIAAgKgAACg1IgJABQgJgZgPgUQgQgWgBgWQABgQAVgEIABAAQAZgDATAkIAAABQAYAqAFAjIgCAMQgVgQgXABg");
	this.shape_19.setTransform(107.1,-60.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFF7F").s().p("Ak/EZQg9gRgLg+QgMhCAfhSQAhhTA5hkIAAAAQAhg6BBhkQAoBCBfAPQhvCYhLCuIgBABIgTAvQgCAFACAEIABADIAkglQBGgHCcguQClgwCLhJIAAABIAAgBQADgHAEAAQADgBAEAGIAMAVIANATQAUAcARATQAHAKAAAcQgJAKgPAGIgIACIhXAnQhaAmhnAfQhlAeh3AaQhDAOgzAAQgkAAgcgHg");
	this.shape_20.setTransform(101.9,-8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#91AFC2").s().p("AhXgiIBBg2QAjAAAjAfQApAlgCA0IhCA5QgVhihXgZg");
	this.shape_21.setTransform(28,91.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD8C9").s().p("AhMC9QgLgYAAggQAAgEAShMIAUhQIgIAEQgWAlgSAzQgWA/AHAXIgBADQgJgDgHgHQgNgOAAgaQAVh5ARg0IgHADQgEADgHAOIgGAMIgCADIABgBIgWA9IgIAhIgCgKQgBgHAAgKQAAgXAIgfQAGgYAFgLQArheAzgdIAegNQALgEAAgIQAAgGAGgBIAMAAQAxAAAgA/QASAkAIAsQACALABARQABAOACAHQACAJAMAXIAQAXQAKAQAAAGQAAAPgDAGQgIAMgZAAQgGAAgJgDIgIgDIAAgBQgdgPgSgiQgRghAIgQIgHACQgOASgFAEQgCACgHAYQghCHgEALQgLAggQAAQgOAAgLgYg");
	this.shape_22.setTransform(16.7,111.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF7F").s().p("An4GpQgWgXgxgOIQzt4IAAgBQAAgEACgCQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAVAQAWAmQAcAvAAArIgIAJQgJAJgFAEQgIADgJACIvrNSQgMg7gagbg");
	this.shape_23.setTransform(85.8,41.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF7F").s().p("AJ9GlIgUgCIAAAAIg8gFIg7gGIg7gIIABAAIg6gKIg4gKIABAAIg3gMIg3gNIAAABIg1gOIg1gPIABAAIgzgQIAAAAIgygRIAAAAIgzgUIgzgWIAAAAQgagLgZgMIAAAAQgagMgYgNIgBAAQghgSghgTIAAAAIgogXIAAgBIgpgYIAAAAIgogbIgmgcIgBAAIgmgdIgkgeIAAAAIglgeIAAAAIgighIAAAAIgjgiIgBAAIgyg2IggglIAAAAQgUgagJgfIAAAAQgKgcACgfQABgeAOgcIAAAAQANgZAYgPIAAAAQAbgRAfgHIABAAIAAgBIACAAIAHgCQALgBAOAEQAgAKAAASIANALQAMAMAUAYQALAMAIA+QAAAKgFAMQgGAPgLADIAAABQgDAFgLAAQhLhHAJAIQAKAIgRgTQgSgSgjgpQgDgEgFAAIgCAAQABAWATAfQHSIHMUA/QAvADAxACQgwAuAVBmIg4gEg");
	this.shape_24.setTransform(191.2,31.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFD8C9").s().p("ABWCWIgIgBIgJgBIgDgBIgDgBIgCgBIgJgIIAAAAIgagWIAAAAQgXgVgWgRIAAgBQgigYgngIIgCAAQgVgBgWgIIgBAAQgVgGgVgNIgQgJIAAgCQgYhnBMgwQBWgMBWAbQBYAZBDA/IAAABQATASABAOQgBAKgOALIgEAAIAAAAIgCABIgSgDQgFgDgEgEIgBAAIAAgBIgCgBIgHgGIAAAAIgWgVIAAABQgUgUgbgRIgBAAQgSgKgVgGQgEgBgFACQgEACgCAEIAZARQAUAOANAKQAPALAMAMIAAAAIAVARIAAAAIAHAIIABABIAAAAQASAVAAAeQgBATgIARQgGgRgKgPIAAABQgMgSgPgOQgOgNgQgLIAAAAQgPgKgQgIIgBAAIgTgGQgFgCgFACQgEADgCADIAAAAIAXAOQAoAZAMARIAFAFQANAMAKAPIAAAAQAKANAFARIAAgBQACAHgBAHIAAAAQAAADgCADQgDAEgEAEIgFACIgCABIgFACIgHABIgJgBg");
	this.shape_25.setTransform(296.5,73.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#91AFC2").s().p("AgQBKIg0gCQgYhqA9gkIAEgEQAyACA1gBQg4A2AUBeIg4gBg");
	this.shape_26.setTransform(270.1,66.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFD8C9").s().p("AgcBsIgFgKQAVADAGgDIABgCIgCgDQgdgOgTgEQgJgBgugfQgLgHgJgVIgIgTIgHgfIApgrQAWgXAjgPQANgFAMgDIAEAAQAfAAA8AXQBJAcAAAgQAAACgHAHIgLANIgPgNQAAACgKgCIgBACQASA1AAALQAAAJgEAIQgHALgMABQgDgOgIgKQgCAEgDAQQgFATgIAXQgCAHgOAIQgRAJgaAAQgegKgHgHg");
	this.shape_27.setTransform(65.3,77.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF7F").s().p("AnmCRQgQhEAAgtQAAhTAvg3QA6hDCLgoQBjgcCIgeQCLgfAwgCIDagQQBuAAAFgDIADABIgFAVIAIBeQAAAGgCADIgGACQhBAIjqAyQkcA+j/BHIgCAFIAfAIQAuD1AEAPQgwgIg8AWQg0AUgSAWIgsizg");
	this.shape_28.setTransform(89.4,24.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#91AFC2").s().p("AhmgaQAcgWAkgQQAtgVAqAAQAIAAARAaQASAbALAcQgYgDgeALQgUAHgXAOIgTAOQgWAKgLARQgKAKgIAKg");
	this.shape_29.setTransform(56.2,62.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#91AFC2").s().p("AAaA3Qg2gkhgAGIBeh8QA6AIAkAoQAjAoAQAOQAFANAFAJQgZAlgYAmQgVgbgdgSg");
	this.shape_30.setTransform(28.5,57);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD8C9").s().p("AgCDCQgMgQgHgGQATgQAFgQQAGgNAAgWQAAgPgWg3QgXg0ACgZIAFgbIAsA7QAIAKAEAZQADAVAHASQAGAPAZAyQAOAeAAAPQAAAPgEAGQgIALgbAAQghAAgMgMgABsCgQAAgVgSgWQgRgWgOgzQgNgvACgNIATAAQAAAJABAFIBCBoQAUAgAAAEQAAAXgMAMQgJAIgbAKQADgLgBgUgAhECSQgLgIgFAAQgSgSgRgiQgihDAAhJQAAhQAyhGQBsgFAvAfQAZARAVAeIg8gqQgGgCgGADQgFACgCADQApAfAaAbQAXAZAAAKQAAAjhJAAIgKABQgCAAAAgGIgIgIQgNgMgOgXIgTghQgQgbgMgEQABAXAFAQIAFAQQAAAFACADIgFABQgIAAAAA7QAAAJAIAcQAHAZAEAKIAQAeIAFAMQAEAOAAAGIgEAZQgIAXgaAAQgFAAgLgIg");
	this.shape_31.setTransform(24.6,82.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF7F").s().p("AnmD1Qg8gsgbgEQCLiuDlhxQD5h/G0hgQgBgGABgFIAJAEQAbAdAbA2QAZAwAGAcIgEABQgEgBgEgCQgHgJgGgKIgzAPQjGAujxBhQjuBgg5BIQABgKhXBbQhMBOgTAWQgJgkg8gsg");
	this.shape_32.setTransform(84.5,24.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#91AFC2").s().p("Ah5BQQBXhFAQgQQAfglAAg0QAAgMgIghIBzBdQAQA4ieCCIhjg8g");
	this.shape_33.setTransform(19.1,14.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF7F").s().p("AlGD9QhRggiuheQA/gtAdgkQAigrAPg7IABAAQBoBJB1BBQA8AhAmATQAKAAgBgBIAFgLQAAgFgDgEQgFgHgSgGQCQhJCVhoIDTiUQAngeBKgRQAkgJAegCQAHAAACACIABAEQAKAOALBXQAAALgMARQgKANgMAKQggAVhtBVQhwBWhJAxQj0CoihAAQg+AAhRgfg");
	this.shape_34.setTransform(77.6,16.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFD8C9").s().p("AjSDfIgBAAQgggSAOgmIAAAAIAOgeQAFAHAIADIAMAFQAqAMAsgPQgeArgMALQgRARgbAHIgFAAQgIAAgHgEgAi+B9IgCgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQgDgKAAgIIAAgDQABgNAHgLQANgPALgGIAagQQAFAbAbAPQAVANASgCIgGAJQgMAQgZAJQgUAHgSAAQgSAAgWgIgAhjA6QgUgMAAgbQAAgQARgJQAlgYBoAAQAEAAAcgMQAcgNAGgEIgQADQgxABhEAFQAugjAUghQAQgZgGgMIgBgJQghAmggAfQgpAkgSAAQgoAAgMgTQgGgJAAgRQAAgRAEgFQAEgEARgCQA7gJA9gdIAXgMQAagPAJgJIBBgSQAJgCAPAAQAWAAAUAQQAjAcAABBQAAAxhIA+QhYBKh5AAQgjAAgRgKg");
	this.shape_35.setTransform(-5.5,16.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFF7F").s().p("AkgEjQhNgegyhHQgzhIhCiHIg+iAQBpAGBGg5QAVBAAaA/QAiBOAuBKIAhA1IABAAIAAABIABABIAWAcQADAEAFABQAFAAAEgDQAEgDABgFQABgGgEgEIgLgOQBKgbBHgjQBOgnBNg2QBOg3A1gsQA1gsAngnQAogmAfgZIAAAAQAcgZAsgLQAQgDASAFQAcAKAgAfQAyAvAMAbQg2AqhEA4IhLA+IAAgBQh2Bgh8BLQh9BLh6AyQhKAeg7AAQgjAAgdgLg");
	this.shape_36.setTransform(84.1,15.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#91AFC2").s().p("Ag9BPIgDABIgwhgQAZAHATACQAUACAPAAIABAAQAQABAPgHIAAAAIAkgSIAAgBQAOgHAMgQIAAAAQAHgKAFgMIABgBIABgEIAFABIAFgBIAVBSIAAAAIAIAaQg8A1hWAAIgdgCg");
	this.shape_37.setTransform(29.9,-9.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFD8C9").s().p("AAiC6IgBAAQgPAAgSgCQgfgDg1gTIgBgBIgBAAQgLgEgZgWIAAAAQgKgKgIgMQgRgaAJgeQAPgcAdgMIAAAAQAegKAdALIAAAAQAJAEAEAKIAAAAIAIAcQgHALgOAEIgDABIgHACIgFAFQgSAOgXADIACACQAEAEAFAAIAhgCQAKgBAKgEQAZgIAMgXQABgFgBgFIgJgiIAAgBQgIgVgTgFIAAAAQgRgGgQgBIAHgbIAZAPIAAAAIAsAWIAAAAQARAHATABIAMABIAAAKQAAAFAEAEQAEADAFAAIACAAIAFgTIAEgNIADgKQACgcAKgcIAAAAQAGgQAMgMIABgBQALgMAOgGQAIgDAJAAIAAAAQAGAAAFADIADACQAIACAFAHIgKAhIgMAnIAAAAQgJAegIAeIAAABIgMA8IAAgBQgFAWgIAUIAAAAQgEAJgGAJIAAAAQgIAKgIAFIgBABIglARIAAAAQgJAEgKAAIgBAAgAibgTIAGgvIAAgDQAMgfAdgTIALgFQAJAAAGAIQAFAGABAKIAAABQABASgFASIgBACIAAACIgOAwIgBADIgQAEIgBAAQgYAHgQASQgDgVABgTgAithuQgNgeAJgeIAAAAQAEgJAHgEIgBAAQAIgEAIADIABABQAZAMAKAbIgFADIAAAAQgdATgPAcQgFgHgEgJg");
	this.shape_38.setTransform(23.2,-31.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF7F").s().p("AkjEEQghgPgbgrQhDhvgtlDQAJADAvAJQAvAKASAAQARAAAjgHQAkgHALgEQACCrAIBRQAKBnAXAAIANgMIgLghQA1gOBxhAQB9hHBShIQBAg5BWgqQAqgVAfgKQAJAAgBADIgBABQATAcASAkQAWArAAARQAAAKgKgCQgEABgWAaQggAmgrAoIAAAAQggAkh0BNQh0BNhsAwQhuAxgkAFQgkAGghAAQgkAAgVgKg");
	this.shape_39.setTransform(96,20.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#91AFC2").s().p("Ag9BEQgqgKgKgHIgOhpQALAAALgCQAFAAAEAHQAGAJACABQAMAGARAAQAOAAANgJQAIgFAGgKQAEgIAFgBQAFgBAVACQAWABALgEIAkgIQAEAAAIAIQAMAMASAMQgJAxgHA0QgJADgsAIQgsAIgRABIgDAAQgSAAgmgJg");
	this.shape_40.setTransform(60.6,-11);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFD8C9").s().p("AhEB1QgPgTAAg5QAAhDA8g0QAsgpAcAAQAJAAALACQAUAFALAJQAPAMAVAYIAaA0IgDgQIAEASIAAAAIAGANIgRgZQgDgEgHAAQgFAAgDACIgBACQAnA0AMATQAXAkAAAPQAAALgFAGQgIAKgZAAQgWAAgcgjQgTgXgaguQgFAFgCAHIAJAdIALAeQgEADgHADQgGADgNgBQgNgBgNACQgNACgGgDQAMgcAmhGQgkAHgaA+QgaA6gRAAQgRAAgIgLgAiNBaQgNgQgDgnIADgXIAIgXQADgGAXglQAYgnADAAQADAAAagXQAegUAWARQguAWgbAzQgXAsAAApIADAfQADAZACANQgdgCgMgQgAiuBbIgJgGQgNgQgEgHQgGgOAAgVQAAgYASgiQAbgzAxgaQgrArgRAyQgKAZAAAaQABAoAOASg");
	this.shape_41.setTransform(58.9,-29.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF7F").s().p("AkjEeIgBAAIgQgBIgBAAQgbgCgVgNQgEgCgDgEQgaglgFgsIAAgBQgFgqAGgyQAMhaAhhsQAThBAqhwQA1A4BggHQhHCogiC1IAAABIAAAAIgCAIIAAABIgBAHIgIAsQgBAFADAEQADAFAFAAQAFABAFgDQAEgDABgFIAIgtIAAgCIABgEQBggcB/g3QCehCCBhaIgBgDQAAgGAGgEIABAAQAgATAiAsQAlAuAAAZQAAALgUAFQgOADgWABIhDAoIAAAAQhUAxhjAsQhgAqh1ArQhtAng4AAIgFAAg");
	this.shape_42.setTransform(102.7,6.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#91AFC2").s().p("AhgAUIAjhaIABAAQAMATAQAGIAAAAIAmARIABAAQAkANALgCIAqgEIABAAQgYAsgUAvIgEAAQgOABgOAAQhLAAgqgzg");
	this.shape_43.setTransform(84.4,-27);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFD8C9").s().p("AgsDCIgngRIgBAAQgJgEgHgKIgKgSQABgEgBgEQgHgZAKgXIAAgBIAEgKIAKgCIADgBQAigPAOgkQACgFgCgFQgCgEgFgCIgCgBIgPAOIgEAGQgVAegOAAQgCAAgDgDIgDABQgLABgEgHIAAAAQgEgHAAgHIgBAAQgBgMADgLIAAgBQACgHAFgFQAQgXAbgIIAAAAIAOgEQATAGAQAMIABAAQgFANAEAQIAAABQAEAOAMAaIAAAAQAIAQAIAXQAVAXAJANQACgFgBgFQgNgxgOgbIAAAAQgIgWgEgNQgCgHACgGQADgCACgEIACgDIAEgDIABAAQAUgFAYARIAAAAIACACQAbASAIAiQANA6gNAqIAAAAQgIAcgSAOIgDABIAAAAQgLAHgMACIgpAFIgBAAIAAAAQgHAAgcgKgABuApIAAAAQgJgngegXIgCgFIAAgCQADgEAAgEQgBgKgEgKIAAgIIAAgBQgEgvgHgdQgGgbAIgRIgBgBQAHgNARgEQAKgBAKAMIAAABQAMAPAEAWIABAAIAKAkIACAYIADAdQABAHAAAMQgBAQAAAEQAAAGgOAvIgHAYIgCgKgAAAgrIAAAAIgLADQgOgVgTgRIAAAAQgWgRgFgWIAAAAQgDgQAUgIIAAAAQAYgJAdAfQAfAkANAhIAAAAIABAMQgYgLgUAGg");
	this.shape_44.setTransform(90.5,-51.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#91AFC2").s().p("AhWBEIgEggIgHg0QAVAQA4AKQBBgQAIgOQAIgNAegeIAHgFIgHAkQgCARAEAcQgPAQgjARQgrAXghAAg");
	this.shape_45.setTransform(64.2,13.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF7F").s().p("AksDnQg/g3gmiKQAYAJAVAAQATAAAsgQQAxgRAXgSQAGAUATAuQAbA+ANABIAMgOIgKgVQCbgtCBhmQAxgmA9g8IBthrIAAgJIAEABQAMALASAjQATAnAAAcQAAAdgPAYIhGBbIg9A6Ig0A1QgbAbhDAoIhEAnQg7AlhNASQg3ANgjAAQhHAAgtgpg");
	this.shape_46.setTransform(96.4,18.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFD8C9").s().p("AhtDvQgZgCgXgHQgYgIgPgZQgFgqAAgUQAAhQBkiNQBliSBCgCIg5A1QgdAuhLBnQgKAOgNACQgNACgJALQAJgCAbgEIAigDQA4AAAbARIAAgDQgFgEgJgHQgLgHgEgBQAQgrA+g/QBKhNA4AAQAKAAgCACIACAQQAAAeg4AvQhSBGgVAZQgIAKgIAMIgFAMQgnASgTAPQgVARgSAVQgPATAAAEQAAAKAEgCQAegRAsgnQAqgeA/AAQAcAAACAVQAAAQgVATQgVASgUAAQgUAAg9BAQg+A9gZAAIgCAAgAhEgaIBqiWQAzgqAjgNQAigNALALQAMAMgUADQgUAEgWAPQgJAGg7AvQgsAkgaAvQgUAngBAAg");
	this.shape_47.setTransform(74.2,-11.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#91AFC2").s().p("AhaCLQBGhOBJg3IABABQgFANgEAUQgFANgFAAIgDAJQgHAPgZAgQgNASgKAFQgOAHgkAAgAAoiKQABADAYAGQAZAGABAFQgYgEgoAIg");
	this.shape_48.setTransform(35.7,64.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFD8C9").s().p("Ah8ENIgPgCIgggNQgJgJgHgZQgHgZAAgYQAAhVBiijQBhimA6gMQgtApggA9QhBB2gNAUQgGAJgQAGQgRAIgEAEIACAFQATgJA6gGQA7gEAOAEIgCgCQgGgFgVgIQAPgzBBhPQATgRAkgoQAjggAlgCQAEAQAAAGQgGAbgFAGIhOBXQgzA3gMAXQgLASgJAVQgjAVgWAVQgFAGgSAOQgQARgLAdQAogdA3grQAsgcAsAAQAJAAAHADQAKAEAAAKQAAAegfAWQgUAOg5AlQgRAOgaAaQgYAXgFAGQgSAXgUANQgQALgHAAgAhEgQIBNiKQAeg1A3guQAmgPAOABQAHAAAPALQgFACgiAVQgiAVgEAEQgYAYgWAZQgcAigYAlQgUAagKAkQgCALgQAAIgNgBg");
	this.shape_49.setTransform(33,51.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF7F").s().p("An9GfQAJgOAag5IAZg2QAQgNAGgHQAJgMAAggQAAgFgEgGQgFgHAAgFQADgKgCgLQCOAND9irQDtigESkYQgBgEAGgKIACACQAPAvAKAwQAKAsAAASQAAAHgCABIgEADQkJDnk6DWQlbDvhvAHg");
	this.shape_50.setTransform(90,33.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#91AFC2").s().p("AgKAaQgEg9hDgRIBIgtIAGgEQBXAcgCBoIAAADIAAABIAAAAIAAACIheBAQAGgggEgrg");
	this.shape_51.setTransform(25,92.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFD8C9").s().p("ABuCOQgQgRAFguIACAEQABAFgBgTQAAgSAKgRIALgQIAAgBQgDgDgEgBQgEgBgEACQgYALgaAHIgFABIgEABIgVAFIgLACIgBABQgSAEgUACIAAAAIgSACIgBABQglAIgngJIAAAAIgRgEIgHgBIgXgFQgZgHgKgfIAAABIgCgFIgFgSIABAAIgBgFIACgBIABgBQAEgCABgEIACAAIABgBQANgEANADIACAAIAXADIADAAIAAAAIAHABIADAAIAdACIAcAAQAYADAXABIAAAAQAUABASgBIALgBIADAAIADAAQAFAAADgEQgHgIgHgNIgMABIAAAAIgBAAIgjAAQgWgBgXgDIgBAAIgygBIgQgCIgDAAIgWgDIgHgBIgUAAIgCgSQAAgIAUgGIARgHQADADADAAQANABANAEIAAAAQAuAOAvgHIAhgEQgFgRAAgGIAAgBIgfADIAAAAQgqAGgpgMIAAAAQgPgEgPgCQgFgBgEAEIgDACIgLgCIADgDQAHgJAJgFQAKgFALgBIATABIAEABIAAABQASAEARABQARAEASAAIATAAIATgCIADgBIAHgBIADAAIAKgBIAfgGIABAAIACAAIAQgDIAEgCIADgDIArgBIAQADQA+AKAFAzQAFA6gNAiIgKAeIgRBCIgHAsIgBAAQgQAFgMAAQgRAAgJgJg");
	this.shape_52.setTransform(0.7,103.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFF7F").s().p("Ao4GBIAHgFILoosIAWgTIAIgIIAXgUIAegcIArgpIAlgkQBahZBShbIABAAIgCgHIAEgGIACgCQAHAKATBFQASBDABAbIABAFQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAAAIgDABQgDgBgCgHIgCACIgKAKIgMAMIgdAdQnSG3oCF3IgIAFQgDhohTgjg");
	this.shape_53.setTransform(84.2,41.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF7F").s().p("AlmDwQgYgzAAhRQAAgTAMhkQANh3APhUQARAgAtAOQAaAJAUAAQAyAAAigPQg7CpAABoQAAAKAEADIAKAGIAOhDQB1hzB8iYQAtgyAhgUQAmgYArAAQAgAAA2APIBCAUQAJAJADAGQgLAHgiAyQgkA1gCABIgDgBQgCgBAAgGIAAgJQAAgCgGAAQjhD6hSBRQiaCUhNAAQhLAAgihHg");
	this.shape_54.setTransform(102.3,19.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#91AFC2").s().p("AhFBBQgxgVAAgaIAYhiIADABQALAgAqAPQAgANAmAAQAPAAAcgJQAdgIAMgKIADABQgeBEgDALQgDAMgEAGQgGAJgMAGQgRAIgdAEQgPACgJAAQgVAAgngQg");
	this.shape_55.setTransform(80.5,-7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFD8C9").s().p("AA+C8QgXgDgLgDQgKgCgQgVQgNgTgfgwQgthGg4gfQgtgUgNgQQALAKgPgVIACgJQAHARAoANIAwAPQAGADAnAeQAkAdAJAAQAEAAgCgEQgCgEAFAAQAFAAAHAJQAEAIAFAAQARAAAhAhQARASAYAcIABgDQgFgygzghIgjgXQgNgNAAgOIAJgSIgFgFIAlADQAZABAPAJQAQAIAoAyQAiArAJAQIAFgGQACgDAAgHIgOgmQgVgrgjgZQgMgJgYgLQgWgKgCAAQgbABgKgBQgPgCgwgnIgugdQgSgMAAgQQAAgMAKgMQAMgOALgCQALgCAgAIQAgAHAOAQQBgA+AyBQQAxBNAAAnQAAAeggAeQgjAhgvAAQgHAAgXgDgAiNg9QgegJgIgFQgOgKAAgVQAAgRAMgNQAPgTAdAEQAFAdA1AoQAcAUAkAWQgEAGgGANIgEAOQAAAGACAGIACAHIgBAAQgsg1hHgUg");
	this.shape_56.setTransform(74.4,-30.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFD8C9").s().p("AjJCKQgdgWAAgxQAAgtBEg6QBLhDBTAAQAZAAAdAOQAmATAAAfQAAAJgdAAIhCgCQhqgCgiArQAXgHAcgDQAdgGASABIBjABQgGAEgVARIgXAWQADAEAIABQAPgEAJgGQADgCAqgBQAiAAARAMQAMAJAAAJQAAAcgrAEQg/gCglAEIg3AdQg5AegpAAQgcAAgUgPgABIhnQgqgfgVAGIANgEQAIACBGgDQBBADAAAoQAAALgWANQgSAKgNAEQADgVgrgegAC+hdQAAgTgLgSQgMgTgTgCIABgBQAnABATAKQAYAKAAAZQAAAXgqAGg");
	this.shape_57.setTransform(264.4,-14.7);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#91AFC2").s().p("AgdA/QgYgHgJgFQgVgPgHgHQgTgSAAgOQAAgCAWgbIAcgjQAMArAeARQAWAMApAAQASAAASgGQATgKAJAAIg7BHQgJADgSADQgRACgHAAQgHAAgWgFg");
	this.shape_58.setTransform(245.3,2.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFF7F").s().p("AiXELQiigmhbhFQg/gugqgoQg0gzgkg1QgSgbgSguQgTgvAAgTQAAgyAqglQAjgeApgIQAHAKAMAhQAPAlAGAbQAGAiAGASIAGAPQAAAGgBgBIgFgBIgKgHQgRgQgggvQgcgqgOgIIAAAKQgBADAAAKQAAAXAsA1QA/BPB9BTQBUA6BlAfQBpAgBvAAQCLAABihGQBJg0CMirQALAjAoAYQAkAVAfAAQAKAAAagEQiZDOiMBSQiEBOi1AAQhQAAh2gcg");
	this.shape_59.setTransform(182.5,19);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFF7F").s().p("AhTEJQiVgdh9grQl+iHAAjZQAAgXAHgUQAMgmAigtQAfCtD1CCQDmB8DtAAQCpAABigoQA+gaCThQQgBADAngdIAqghQARAoAqAlQAlAhAeALQAOAIhpBCQhTA4i1AxQi4AxiKAAQglAAhsgVg");
	this.shape_60.setTransform(196.3,21);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#91AFC2").s().p("AgaBZQgUgQghghQgpgpgBgOIBlhYQAtA4ASAOQAZAUAhAAIAVgBQhEBWgTATQgNANgPAAQgOAAgTgPg");
	this.shape_61.setTransform(271.9,14.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFD8C9").s().p("AAXDrIgQgIQgNgHgWgcQgTgagBgFIABgRQgCgOjBj3QAAACgEgGQgDgFAAgGQAAgMAMgPQANgPALAAIAoAOQAYAAA8BPQA8BOgBAUQABAFgFACQgFACAAAFQAAAHABABIAAgBQASgUAqgSQAkgOALgBIgEgDQgJgJg8hjQgxhNg5ghIALgFQAwAXAhAcQAeAbAaAlQATAcAOAgQArBWAAAKIgDAWQAAAJAEAUIAFgEQAOgUAVgxQAUglAZAAQAfABATAcQAAACglA3IhGBuQgVAZgUAmQgFAMghAAQgWAAgTgHgAhhiAQhAhDgygFQAJgHALgGQASgJAOAAQAvAAAyA+IA0BEQAwBCgSALQgRAMgKAHQgehEg8hAgAhDipIACACIABABIgDgDg");
	this.shape_62.setTransform(276.6,-13.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#91AFC2").s().p("AhJAdQAAg3AagYQAighBXAJQgkAsgCAnQgBAXAIAsIhyABIgCgwg");
	this.shape_63.setTransform(271.6,57.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFD8C9").s().p("ABIB5QgrgQgdgCIhzgKQgwgEgXAAQgDgBgPAAQgEgjAAgKQAAhCAwgrQBBg9CPAAQA6AAA0AWQAzAVAAAUQAAAKgKAKQgKALgPgBQgGAAgFgCIgDgCIgkgSQgVgKgPgDIgpgIQgNgDgRAAQgLAAgBAFQAHAIAaAJIBYAdQArAOAAAvQAAAKgGAXQgbgggsgUQgmgRgaABQgbACgPgBQAiAOBIAaQA3AYAAAdQAAAGgBACIgEAFQgHALgPAIQgKAEgFABQgNgBgUgGg");
	this.shape_64.setTransform(298.8,56.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFF7F").s().p("AHKF5Ih7gMIjYgqIhmgbIAAAAQghgJgsgQIhNgfIAAAAIgzgWQgsgUghgRQgpgWhGgqQgJAAiQhuIhHg9IgmgmIgNgNIgBAAIgggjIAAAAQgUgYgLgfIAAAAQgJgcAAgfQAAgeAOgcQANgbAYgPIAAgBQARgLASgIQAagJAAgBIAHgDQApAYAUBLQALAmACAiQAAAGgCAAIgEAAIgHgEIg0g0IAAgBIgqgsIgIgHQgCgDgDgBIgBAAIAAABQAAAXAHALIAHAMQDdD/GBCMQFzCJGCgRQgQAKgJAqQgMAxAOAvQh9AAh3gLg");
	this.shape_65.setTransform(192,26.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#91AFC2").s().p("AhWgLQAAgNAFgmIBRgYQAJAdAbAwQAfA3AUAGIh7AjQgyhCAAggg");
	this.shape_66.setTransform(282.1,47);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFD8C9").s().p("AhICVQgdg5AGgSQAEgSgOgbIhHiAQgagxAAgTQAAgPAIgOQALgTATAAQAcAAAzBcQAyBaAAAsIgFAGQgFAFgBAEQABAGABABIAEADQASgQAdgMQAZgIALAAQAFAAAIABQABABABgEIgOgNIgihtQgKgngbgvQgagtgMgFIAJAAQAPADAGADQAJAFAMAMQAsAzA3DlIgTAnQAAADAEAFQADAEADABQAjgwAhgiQAbgbAEAAQAMAAAJAMQAHAIAAALIgLARQgXAhgpBEQgKADgJAWIgTArQgcA7gvAAQgeAAg5hxgAhXiyQgggygmgLQAgg0A5BEQA7BHAfCMQgJgDgLAGIgOAJQglh4gmg6g");
	this.shape_67.setTransform(292.8,25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFF7F").s().p("AC6FUQhsgRj5g9IgggLQjghJixiUQiuiQAAhrQAAgpAdgcQALgKBPg1IABgBIADgCQAqBQAMAaQAOAfAAAQQAAAKgCgFIgFAAIgCgBIAAAAIAAAAQhuhPgFgCQAAAUAKAOQAIALAcASQB4BVBoBAQA2AgAvAaQByBDCnA6QCqA9CLARQAhAGBZAFQBVAGA+AAIAogFQAmgFAUgEIB2gVQgQAkAPAnQACASArA5Qh0AYhXAGQglADhlgBQiNAAhvgRg");
	this.shape_68.setTransform(197.6,23.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#91AFC2").s().p("AgbBOQgTAAgMgLIgKgLQgLgdAAgMQAAgXAPgeQAOgdAQgJQALgBAgAAIBGACQgpAoAABCQAAAKAGAlg");
	this.shape_69.setTransform(248.6,87);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFD8C9").s().p("ABFCUQgDgCgJgKQgdghhSgvQhJgMgcgMQgvgUAAg2QAAgfAPgcQAagxA8AAQBtABBnA1QBcAwAAAlQgDAXgVAAQgOAAgGgFIgGgHQgxgsgPgKIgVgPQgSgKgQAAQgHAAgBABIgDAEQAPAMA9AoQA2ArAAAwQAAAHgDAMIgGASQACgkg8gqQg0gjgTAAQgGAAgCACIgBADIBBA0QAYAVAPAaIAMAUQACAAABABQABAAAAAAQABAAAAAAQAAABAAAAQgEAEAAAEQAAALgJAHQgIAFgLABQgUgBgGgCg");
	this.shape_70.setTransform(275.3,94.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFF7F").s().p("AFnH1QiagmkNh1QiMg8h5hqQh5hqg3hrQg3hsgbhPQgbhPAAg4QAAhCApgxQAUgZA2gmIADAFQAEAJAKAyQAKA2AAATQAAAygTATIgCgEQgDgDABgCQgLgVgLgmQgMgtgJgTIgCgDIgLAfQAABjCbDIQChDOCmBlQB8BMDSA8QDDA3CSAIIABABQgUAagLAkQgIAYAAAKQAAAIAGATQAFAVAHAPQisgTg7gOg");
	this.shape_71.setTransform(180.7,41.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFD8C9").s().p("AhoB0QgIgFgHgMIABgLIAZAJIAIgCIAAgEIgmgfQAEAFgSgLQgagPgOghQgIgTAAgMQAAgsA7gjQAdgRAfgJQB6AABLA3QA3AnAAAeQAAARgnAFQgMgSgJABIgUBBQgGANggALIgIABIAFgYQAAgBgGAAIgmAhQgkAigZAAQgrAAgVgPg");
	this.shape_72.setTransform(146.7,96.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#91AFC2").s().p("Ag7A6Qg1ghAAgBQAAgqA4gpQAvghAegEQA3AkAlAVQg0ATgeAlQgcAkgCAsIg8gng");
	this.shape_73.setTransform(124.6,86.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFF7F").s().p("Ag6FfIiZh6Qgqgggmg2Qgng4AAggQAAidEOi6QCihwCqhIQAUAMAUAkQATAgAAAPQgBAHgEAFQgIAGgXAEQhbAuiDBsQh/Bth+CGIgEAJIADAHIAxggQBBBRCBBuQBvBeA+AlQg0AMgoAuQgjAngBAcQg2ghhvhZg");
	this.shape_74.setTransform(100.4,39.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#91AFC2").s().p("AgdAHQgSgHg3gFIA7hPIAOACQAMgIA4AiQA6AiAFAZIg7BSQglg8gjgSg");
	this.shape_75.setTransform(33.1,86.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFD8C9").s().p("AgsC3QgNgWgCgOQgDgTACg1IACg4IgCgmQgPAKgFAYQgGAbAABBQAAAJADAUQADAWADAMIAAADQgigHgJhTQgEhggEgfQgHALgHAfQgJArAFAyIgKgZQgKgYAAgsQAFhCAWgrQAXgrAVgdQAUgeAXAAQArAAAkAZQAhAXAAAQIARAiQATAmAGAPIAIAKIAbAhIAPATQAPAVAAAGQAAAKgXAHQgRAFgNAAIAAgBQgpgSgPgLQgZgTAIggQgpAaAEA/IAIA8QAGAoAAAZQAAAQgWAQQgWAAgSgfg");
	this.shape_76.setTransform(28.3,109.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF7F").s().p("AnfGOQgsgagbgBQDEkLCViGQBbhSCYhgQCwhrCOhHQCQhIAoAAQAKAMABAQQgBAygQAxQgUA+gkAVQhoAQi+B1QjRCBiHCaQhWBbiZDIQgngkgpgZg");
	this.shape_77.setTransform(85.2,38.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFD8C9").s().p("Ah0BvQgLgOAAgKQAAgHABgDIADgGQAOANAGABIADgBIAAgDQgCgbgSgXQgSgXAAgWQAAgvAugjQAvgjA/AAQA3AAAkA1QAeAtAAAvQAAAVgMAGQgDACgZAGQACgOgCgEIgIgHQgDACgaAyQgdAsgagNIAMgWQAAgHgBABIgCABQgDABgfAaQgfAZgQAAQghAAgSgVg");
	this.shape_78.setTransform(54.4,97.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#91AFC2").s().p("AhfggQAAgLAugLQArgLAaAAQAKAAAlAIQAQAGAIAbQAEANABAMQhagBgUAIQgTAGg7A0g");
	this.shape_79.setTransform(50.1,81.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFF7F").s().p("AnyE5QAAiSAThUQAThTBOhCQBOhDB2g6QB2g6DLhLQCPg1B7gZQBdgUADgDIABABQABgFAAAKQgcBugOA7IgNgFIgBAAQhiAGjZBPQj2BaijBqIgjAYQgLALghAcQABABAngKIALFMQgSgFgXgFQgXgEgIAAQgVgBgZADQguAHgYAUg");
	this.shape_80.setTransform(90.2,32.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFF7F").s().p("Ak8ElQgegkAAhCQAAg0AXh6QAjisA9iqQAgAgBBASQA+ARAegMQiEGmgEATQA7g/DejgQCRiTAOgbIAGABIBLCMQgrAghZBZIihCdQjNDFhdAAQgtAAgbghg");
	this.shape_81.setTransform(107.5,15.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#91AFC2").s().p("AgtAzQgzgUgXgVQAUg9AOgOQAIgJALAJQAKAIAdAJQAaAHADAAQAnAAAUgEQAWgFAlgTIg0CGQgoAFgKAAQgSAAgtgTg");
	this.shape_82.setTransform(97.6,-21.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFD8C9").s().p("AhkByQg0g8AAhBQAAggAUgLQATgKAaAMQAbANASAdQAVAgAAArQAAAMgWALQgEAEgKAAQgFAAgUgXQgcgggagsQAHA9AVAhQAVAfAgAAQARAAAXgTQAWgUACAAQALAAAQgNQAUgRANgFQAtgTAIgFQADgDAKgQIADgJQgUARgeAGQgUAFgiAAQgHAAgEgPQgDgJAAgGQAAgTATgRQAWgUAgAAQAfAAAQAfQANAYAAAfQAABCglAoQgpAshLAAQgyAAgyg4gAgxhAQgJgJgPgEQgUgFgNgFQAHgLAOgLQARgOAOAAQARAAAYAWQAZAXAAAWIgRAtQAAANAFAPQAIAWARAFIAAABIgWAGQgfhegVgVgAAHh0QgYgdgdgDQAKgHASgHQARgHAEAAQASAAAXAfQAQAWALAbIgnASQgDgVgWgYg");
	this.shape_83.setTransform(99.1,-44.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFD8C9").s().p("Ag1CVQgLgVAAgXQAAgQALgdIAHgOQgKAJgUAkQgRAegIAAQgXAAgQgUQgNgTAAgVQAAgGAVgqQAUgnAOgXIhEBDQgCgJAAgJQAAgfA3g+QBDhLBFABQA2AAAuAtQAuAtAAA0QAAAegQAjQgQAlgUAHIgRgbIAygkIgDgIQgfANgdARQgqAZgVAZIAIAAQAOgCAigQIABADQACAGAAAGQglAzgQAIQgOAJgvAKQgLAAgLgTg");
	this.shape_84.setTransform(42.5,111.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#91AFC2").s().p("AgWAXQgvgig7gBIBahnQAngIA/AvQA/AvACAnIhWBrQgUg6gtgkg");
	this.shape_85.setTransform(57.1,93.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFF7F").s().p("AlKG8Qgtgjg7gKIMeuQQgBgFADgIIADAGIAPAmQABAFgEgCQAKAOAJASQATAjAQA/IgHAFIq3NnQgSgwgtgjg");
	this.shape_86.setTransform(98.7,39.1);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF7F").s().p("AC9FdQiyglg8gOQkghDhchPQgXgOgKggQgIgYgBgQQgBgQANgvQAMguBziqIB9i3QAjgCA2AkQA2AkAIAfQhPBnhSCGQhHBzgLAeIAHgEQANgKAfgfQBlA5EBA8QDsA1B1AFIAHgIIACAHQgYBggNAjQgMAdgTAVQhGgSiRgeg");
	this.shape_87.setTransform(91,-27.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#91AFC2").s().p("AgzAIQgkgSgaAAIA/hRIAZgBQAnAAArAcQAqAbAPAgIhSBiQggg5gzgcg");
	this.shape_88.setTransform(83.5,-68.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFD8C9").s().p("Ag9BrQgugcg0AAIgEguQAAiMApgoQAWgWAkgCIAOgBQgRAKgUAeQgZAkgDAfQAAAJAFAEIAEACQAKg0AqgiQAoggAtAAQAYAHAOAGIgCADQgoAFgdAjQggAkADAsQACAEAGgMIALgbQAIgSANgSQAOgOAUgGQARgFAfAAQAvAAAQAUQAKALAAAVQAAARgNAHQgXAMhEgBIABA+QAAAxgPAqQgPArgZASQgZgpgqgZg");
	this.shape_89.setTransform(96,-88.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#91AFC2").s().p("AhwAdIAmhyQAzgFA0ATQAxARAjAdIguBwQhLhBhoAHg");
	this.shape_90.setTransform(89.7,-91.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFF7F").s().p("AGsHHQgDAAgEgDQgOADilgOQimgPjugpQjxgpgVhVQgWhVA/jFQBAjIBejmIAcgBQAXAAA0AUQA1AUAYASQgsBfhMD3QhDDaAAANIAGA4QACgDAEABQAEgDAEgeID0A2QBhAQCYAAIBIgDQADgGAGABQAXAeAZBRQANAoAIAjQAAAJgCAAIgBAAg");
	this.shape_91.setTransform(100.2,-40.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFD8C9").s().p("AhUBrQg+gPgNAGIgFhLQAAh0AngpQAXgYAzABQgOALgYAjQgcAqABAVIABAGQAfglAkguQAcgcAyAAQALAAANAGIAOAHIgCACQggAKgYAPQgsAcgBA/QAAAGACACIABAAQALgqAkgfQAlgdAiAAQAjAAAZASQATAPAAAMQAAAegRAIQgLAFg5ACQgTAAgDAGQgGAKAHAlQAHAggRAxQgNAjgLAPQglghhIgSg");
	this.shape_92.setTransform(99,-112.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#91AFC2").s().p("AAZAtQg+gQhNALIAihpIBHgGQAfAAAlAQQAjAPAVAUIgeBcQgRgPgrgMg");
	this.shape_93.setTransform(80.9,-71.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFF7F").s().p("Ak/FcQhMgnAAhtQAAgJAEgcQAEghAGgdQAVhjA5i+IA4i0IBHgHQAZAAAuAOQArAMAUALIihHRIgMB9IAbhNQB9AJC3gGQBlgEBOgHQBVgHAMgLIAAABQACAegDA4QgDBJgJAWQgOgDg1AFQhvANinAPQigAPgVAAQh6gBg2gbg");
	this.shape_94.setTransform(92.9,-27.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFD8C9").s().p("AgNByQgjgQgnAAQgWAAgxANIgCgEIgEhIQAAh0AngpQAYgYAyABQgPAMgXAjQgbApAAAVQAAAGABABIABABQALgxApggQAqggAxAAQAMAAANAGIAOAHIgCACQggAKgYAPQgtAcAAA/QAAAGACACIAGACQASgzAjgdQAfgYAdAAQAkAAAXASQAUAPAAAMQAAAYgNAJQgQAMgqgBQggAAgEADQgJAGAJAZQAFAQgHAzQgFA1gKAHQgpgZgNgHg");
	this.shape_95.setTransform(88.8,-91.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFF7F").s().p("AEHNeQABgEACgBIqv5yQATAEAVAAQAsAAAmgUQAogVASgkIKUZ2IADAFQgNAZg7AXQguASgpAIQAAgBgBAAQAAgBAAAAQAAgBAAgBQABAAAAgBg");
	this.shape_96.setTransform(100.6,-76.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#91AFC2").s().p("AhFBFIgmhbQBvABBNg2IAcBLQgYAvg1AUQgbAJgZAAQgYAAgZgHg");
	this.shape_97.setTransform(64.2,-165.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFD8C9").s().p("AglEGQgVgHgIgOQgPgagTgyQAMADARgJQAUgKACgUQAMABAdATQAYASAWAAQALAAAUgJQAWgKAFgLIAFgHQgOAFgaAEQgWAEgIAAQgRAAgMgKQgLgKAAgSQAAgRAQgMIAMgHQBkgMALASQARAbAAA5QAAAygmAcQgoAehOAAQgNAAgPgFgAiFBoQgNgcAAgSQAAgaAGgHQAIgMAdgEQAAAkARAeQAQAeAAAKQAAAHgIAJQgHAJgIAAQgYAAgQgkgAg5BcQgVgXAAgxQAAg3ApAAQAKAAABABIAaBUQgXAUgFAMQgCAOgEAKIgXgOgAgThxQgWhaAAgaQALgrAVAHQArAOA6EdIhFAHQgXhEgThWg");
	this.shape_98.setTransform(57.3,-197.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#91AFC2").s().p("AhQA0QAGg0ATgiQAOgZAmgmIBUAgQgRAhgSAoIgkBag");
	this.shape_99.setTransform(81.6,40.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF7F").s().p("Am7A5QgrgsAAg6QAAgMAPgiQAUguAbgQQAqgYDLgbQCogXCqAAIExALIACgEIADAEQAJAtAJBoQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAIgFgCIgDgFQhFgGiDgHQhrgFgTAAQjEAAirAeQhuATgxAUIBAgDQDIBjALAEQgeAZgbA4QgZAzAEAQQjIhnhBhEg");
	this.shape_100.setTransform(88.8,21.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFD8C9").s().p("AgvB1IgDgKQAWABAEgEQgvgRgegVQgfgUABgQQAAgGASgvQAVg5AQgWQAKgNAagJQAUgHAPgBQA/AAAsAlQAWATAIATQgDALgRAQQgFgKgFgCQgGACgFgCIgBACIAHAhIADATQAAALABAEQAAAYgFADQgKABgKAFIgCgSQgCgEgFgCQgJAHgGATIgLAfQgOAognAAQgbgIgIgIg");
	this.shape_101.setTransform(98.5,46.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#91AFC2").s().p("AgwBVIgPgvIgHgYQAAgPAKgcQANgmAWgUIBgAEQgYAYgOAeQgQAdAAAaQAAAJAIAVQAIAWAIAKg");
	this.shape_102.setTransform(95,24.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFD8C9").s().p("AiKBZQgQgQAAgXQAAgyA3gzQA4gyA5AAQAWgBARAWQARAXAAAfQABASgHAEQgSAIgcAqQgVAEgJAAQg/AAALgcIA9hTQg0AYgTASQgRAQAAAZQAAAiAWALQAYAMBGgBQhWAigLAAQgsgBgWgWgAAxA8IgIgBIAigcIAQgOQAFgCAHAAQAEAAAGABQAGADAKAAQgGAYgXALQgQAHgTAAIgQgBgACYg2IACgHIABAHQAAAWgRAWQgFAEgGACQARgaAIgYgABcg4QgJgjgVgSIA6gBQAIAWgJAjQgHAhgOAKIgEABQAFgSgHgdg");
	this.shape_103.setTransform(114.7,22.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFF7F").s().p("AmbClQg4gXAAgqQAAghAXgiQASgbALgEQCig8CLgjQDog8FWgrIACgMIAEAAQAIAegcBSQgaBNgQAMIgEABQgCABAAgHQAAgHgOgGQgOgGgSAAQgNAAgyAFQg6AFgNAEQgHACgYAPQgTAMgPABQiUAGjDgBIijgBQBLAMBsAGQBgAEBCgCQgmAtAAAxIAHAiIALAsQkZgBhmgrg");
	this.shape_104.setTransform(90.3,12.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFD8C9").s().p("AhxB3QgxguABhFQAAgxA7g6QA3g2AeAAQAKAAAKAIQAVAMAAAWQAAAcgeArQgjAuggAAQgGAAgJgGIgMgMIgCgCQgCgEAAgGQAAgEAUghQAXgkARgWIAGgLQghAKggAoQgaAiAAAKQAAAoAeASQAPAKAXALQAIAJARAJQASAKAGAGQAMANAMAGIAXAJQAGACAGAAQAKAAgCgBIAFgEQgagYgagRQgJgGAAgLQAAgSAMgJQALgHAKAAQAkAAAXAfQASAXAAAPQAAAig1AaQguAXgrAAQgnAAgpgngAgrAWIAhgaQAegdALgUQANgYACgJQAGgWgIgdQAZACAQASQAOAQABAWQAAAIgHAQQgIAQgLAMQgHAIgPAAIgPgBQgTAAgSALQgbANADAXIgDAIQgCAAgOgNgABSgBQAngoAEgOQAEgMgFgkQAUABALARQAIALgBAHQABAWgJASQgKAXgeAfg");
	this.shape_105.setTransform(133.1,-19);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFF7F").s().p("Al/DFQgSgcAAgfQAAg2A8g6QBkhfEnipQgGAgAXA5QAaBBAsAeQh4A5iEBYQh4BOgYAcIAAACQABACAGAAQAHAAARgLIAlgZIB8hPIBog6QBrg5APgGIB7g6QBigsASAGIgMCAIgCAIIAAgEQgCgHgEgCIjHBbQjPBhhMAXQgWAHhUAPQhSAOgKAAQg5AAgcgqg");
	this.shape_106.setTransform(95.5,11.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#91AFC2").s().p("AhlAUQgMgbAAguQAAgGA2gfIA1gdIACAjQACAnAgAtQAlAxAvAKIiMA9Qg5g7gSgpg");
	this.shape_107.setTransform(114.9,-7.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFF7F").s().p("AlUEXQgYggAAgiQAAgYANguQAThFAnhPQAZg0BHh3QA6hjAbgpQAQAaAtAgQA4ApAxAAQhuCog4BdQgkA7g0BiQAFgEAyg9QA7hEAwgkQA6gtCEhfQBuhSAlgsIADADIAlBBQAaAuAAAeQAAAHgDAEQgBACgHAFIgRABQgCAEjXCYQjYCdglAWQgWAOg5AVQgyASgFAAQgsAAgdgmg");
	this.shape_108.setTransform(106.3,10.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#91AFC2").s().p("Ag1BAQgvgbgZgrIA1hVQAjAuAYAMQArAVBggMIhUB0QgygCgtgag");
	this.shape_109.setTransform(109.1,-22.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFD8C9").s().p("AhkB9QgtgxAAhkQAAgkASgTQAQgPAXAFQAYAHAPAbQASAeAAApQAAAqgQANIgSAEQgUAAgOgVQgSgbgEg2QgCgDgCgCIgFAAQgCASAAAKQAABqBIAAQAKgBANgHIASgNQAIgDALAAQAJAAAHgCQAhgPAhgSQAmgVAJgJQhFAWgKgBQgQABgHgMQgFgJAAgMQAAgPARgOQAUgQAgAAQAhAAAMASQAKAPAAAmQAABHgrAlQgmAgg5AAQhEAAgogrgAgSgxQgEgNgWgZQgYgZgLgBIAVgLQAWgMAGAAQAVABAPARQAVAWAAArIgcA1QAAANAKAdIAFAHIgRADQgDgLgMhagAAch7QgQgRAAgFIAAgBIgRgLIAUgGIATgFQASAAASAdQAUAeAEAnIgrAHQgGgogRgUg");
	this.shape_110.setTransform(115.6,-43.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF7F").s().p("Ak+EoQggggAAhBQAAhNA2inQBRkCAFgUQATAZA2AXQBAAaAygMQh9FEgIAqQgDANAAANQgCAUgUA/IACABIAIABQAGAAAAgCIgBgEIAwiMQAMgIBWhIQBfhWAygyQBchdAsgxIAEgSQADAAACACIABACQAMAjAaAwIAiA7IAIgFIgHAGIAGAKIgDAEQgMAAgCgEIh/B3Qg8A0hHBIQhABAggAeQhbBShGAhQgqAVgagBQgpAAgbgbg");
	this.shape_111.setTransform(108.3,15.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#91AFC2").s().p("AgkBEQgjgNgxgpIAihcQAQAkBOAHQBOAIAkgcIg5CDQgRADgJAAQguAAgdgLg");
	this.shape_112.setTransform(100.3,-21);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFD8C9").s().p("Ah1BbQgig7ABgrQgBgWAKgPQAMgSATAAQAkAAAbAuQAZAnAAAlQAAAPgMAJQgJAHgLAAQgVAAgNgWQgohFgGgJQAMBKASAcQARAaAiAAQAOAAAYgSQAWgSACAAQANAAAhgfQAFgEAggQQAegTAIgSQgTABgLAKQgNAOgNADQgQAEgKAAQgSAAgGgQQgDgHABgHQAAgMAUgWQAagaAcAAQAfAAANAdQALAXAAAuQAABKgzAkQgpAdg9AAQhGAAgthPgAgLgHQgMgggVgXQgTgYgmgGIACgEQAGgGAIgNQALgLAdAAQAPAAAWAXQAXAZAAAWQgTAnABAIQAAAIAFAPQAIASAFAIIAJAGIgUAHIgPg8gAAKh6QgPgSgigKIAagPQAIgEAFAAQAXAAAZAdQAWAaAHAbIgpARQgKgjgQgRg");
	this.shape_113.setTransform(102.6,-43.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#91AFC2").s().p("AhlBlIgwg3QBBAEBEgkQBGglBBhOQAJARAMALIAKAIQAAA9hUA2QhNA0hFAAg");
	this.shape_114.setTransform(53.1,63.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFD8C9").s().p("Ai4CzQgSgtAAhBQAAhAAjg9QAgg6AsgbQAugdAeAYQAhAbAABXQAAAzgqAvQgoAtgjAAQgLAAgHgRQgGgOAAgJQAAgIAEgWQAHgfAMgmQgOANgOAUQgVAjAAAdQAAAcATAVQARATAPgBQAVABAZgNQAcgPAQgXQAJAMAfAKQAhAKARgGQgoAng5AmQhGAsgiAAQgrAAgWg2gAARBSQgEgIgFgGQASAABCgkIBNgnIAGgHIAFAOQABAFAAAFQAAAXgdAYQgjAfgzAAQgoAAgJgGgAAmAJQADgKAAgcQAAhRgUghQgKgQgkgWQARgTAigKQAWgFARAAQATAAARAWQAYAfAAA/QAAAbgZA1QgeA+gjgEIgMADIAPghgACMg6QAKgiAAgMQAAhEgrg0QAZgIALAAQAeAAAQAeQAOAcAAAtQAAAggXAoQgXAmgVAGIgIAFIgKACQAKgQAMgkg");
	this.shape_115.setTransform(53.1,42.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFF7F").s().p("AmaHOQgjgNgVgTQBZAEBNhEQBAg5AShCIBXAGIhFgdQDJjIC/jVQCli7AzhMIABgCIABgQIAEABIACADIAdBjQAXBGAAALQgHADgaAsQgnBFg7BOQgVAcieC0QidC2gPAQQhSBOhKAoQhWAvhRAAQgkAAglgNg");
	this.shape_116.setTransform(92.4,33.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#91AFC2").s().p("AADAzQAIgigFgIQgFgJgDgWQgEgZhDg3IA3gcQArAZAWAfQAbAlAAA2QAAAIgEAWQgEAXgDAJIhYA0QAWgvAGghg");
	this.shape_117.setTransform(53.4,83.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFD8C9").s().p("AgFCZQgRgDgHgDQATgrAOgKQAQgKAHgRQAKAEASABQAVABALgIQAGgEAUggQAYglgFgXIg3BLQgLADgJABQgMAAgMgIQgSgMAAgXQAAgXAIgQQALgZAhgWQA8gHAUALQAUAKAMAmQgGgTAHAcQAAA9goA0QgwA+hMAAQgIAAgNgCgAiRB7QgigZAAghQAAgJAEgRQAsAtAPAHQAOAHBAAHQgIAagGAHQgHAKgRgBQglABgggZgAh6A4QgqgeAAgwQAAggAlgMQARAUAUAuQAXAlAsAAQAIAAALAFQAJAFAAAHQAAAHgWAKQgXAKgJAAQgnAAgigZgAgeAMQgUgEgVgVQgdggAAgtQAEgZAMgIQAsgfA4AAQAcAAAcATIArAeQgRgEgkAMIgfAMIgqAFQAEAHAQAHQgQArgEAjg");
	this.shape_118.setTransform(34.1,86.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFF7F").s().p("AlXGRQgYgzgwgpQBAgWD5j8QD3j6Bmh/QBkh+AZgwIACADQADApATAqQAKAVAKAOIgEAKQgCgEgKAVIgXAtIgaAyIgcAvQgiA/i8DqQi5DqhGBFQgZAYiYB4QARg4gdg9g");
	this.shape_119.setTransform(96.2,37.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFF7F").s().p("AoPB/QgkgcAAhCQAAgMAIg+QAIhMAKgzQAgAtAgAUQA/AoBegFQgWAcgPA3QgLApAAANQABAKACAAIAmhFIAAAAIAqADQFfgeDCg9QDDg9AxgbIAFAFQARAmASBFQAPA2ABAOIAAAFQgIADAAgGQhzAzjcAtQkUA5kIAAQibAAg1gqg");
	this.shape_120.setTransform(88.7,8.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFD8C9").s().p("Ag9BsIAIhxIgBgKIgDgJIgGgIIgNBEQgLA8AAAJQAAAJAEAYQAEAaAEAOQgwgOgpgoQgvguAAg0QAAgJASgiQASgiAMgSQAQgVAYgUQAKgIAkgIQAlgIAOADQAcAGAeAyQAlA9AABMQAAA7gZAhQgXAfgiAAQgwAAAAhNgABdCAIgFgCQAHgkAAgTQAAhNgbhBQgehKgugLIgLgEQAQgOAggFQARgDAPAAQAlAAAbAnQAiAxAABhQAAA+gaAlQgSAbgNAAIgJgBgACzAmQAFgdAAgGQAAhAgQgsQgNgkgggrQApgEAWAgQAaAoAABfQAAAVgJAZQgLAfgRAKg");
	this.shape_121.setTransform(60.9,-26.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#91AFC2").s().p("AA8BcQhPAAg7g0QgdgbgJgNQgKgLACgBIAXhVQAiA3AmAlQArArAiAAQAFAAAGgDQAGgEAFAAIAVAHQAYAHALgCIgfA3QgZgGgKAAg");
	this.shape_122.setTransform(48,-9.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFF7F").s().p("AmNCwQg2hwgBlfQAPAWAoAOQAjANAkAAQARAAAcgIQAVgGAJgEQgGBwAIBeQAIBeAXBwIAHAIQACADADAAQAKAAgCgGIgGg4QCwhDCchfQCEhSBihZQgDgIAEgGIBeCMQgLABgYAWIhRBKQgsAkhHAvIh4BQQhiBEhpAjQhTAbg9AAQhiAAg2hwg");
	this.shape_123.setTransform(104.8,7.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#91AFC2").s().p("Ag+A2QgjgTgIgTIAChaQAQAbAnAUQAqAVAsAAQAsAAAYgUIgKBRQgPAOgfAFQgNABgUAAQgoAAgngVg");
	this.shape_124.setTransform(70.1,-26.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFD8C9").s().p("AhtCPQgggsAAg6QAAhiAUgoQANgcAYAAQAZAAAPAYQAQAWAAAjQAABXgWAWQgIAHgJgBIgLgBQgPAAgFgVQgDgUgHhpQgKALgHAlQgFAkAAAKQAAAxAWATQAOAKAXAAQAEAAAOgIQAPgJAKgCQAVAHAHAAQABAAAMgHQAOgIAFgCQAMgEBAgNIAMgPQgiAJgaAAQgZAAgJgIQgFgFAAgPQAAgUAXgSQAXgSAcAAQAvAAAAAzQAABnhBAxQgqAggqAAQhAAAgmg0gAgMA5QgFgCAAgGIAHggQAGgfAAgSQAAgugKgZQgLgagbgQQALgIAPgHQAOgGADAAQAYAAALATQANAUABAyQAAASgSASIgUAVQgGAWABAQIADARIAIATQgIAEgJAAIgDgBgABChjQAAgggGgQQgJgVgYgOQAagYAjAaQAMAQAGAaQAFAUAAAQIgBAmIgtABg");
	this.shape_125.setTransform(73.7,-48.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#91AFC2").s().p("Ah0AaQgQgWgIgzQAjAlAWAKQAaAQAiAAQAnAAA/gPQA3gMAHgGIgFAkQgcAShgAKIgaABQhVAAgRgWg");
	this.shape_126.setTransform(43.2,13.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFF7F").s().p("AmqC4QhYgwgYhZQASAHAjAHQAuAKAygEQAzgEAmgOQAmgOAAABIAGAMQAKAOAPALIgOgzQCJAEEEhlQBIgcEaiAIAKABIAXDMQACALgJgDQhDAihFAiQiHBChmAeQi/A5hOARQg2AMgrAAQiFAAhWgwg");
	this.shape_127.setTransform(84.8,14);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFD8C9").s().p("AiVB7QgZgjAAghQAAhpAogzQAbgjAhAAQAeAAASAaQAUAdAAA1QAAAtgUATQgLALgOAAQgZAAgNgUQgRgbgDhOQgDADgIAVQgJAWAAAHQAAAwAWAaQATAXAiAAIAtgRQAJAAAVAGQgCAPAAAKQAAAEAdARQAhASAVgDQgGANgbANQguAWhQAAQg6AAgigvgABCBYQgXgJAAgFIACgLQABgEgBgDIAEgDQAFgEAGAAQAFAAAPAEQAOAFAFAAQAUAAATgLQAVgMADgSQANAMAAARQAAASgUAPQgVARghAAQgNAAgWgIgAADAiIAKghQAFgRAAgPQAAgwgPgdQgMgdgigVQAXgIASAAQAsAAAQAUQATAWAAA/QAAA3gSAWQgOAUgYAAgABOAeQAKgUANhCQAAg4gDgOQgEgdgVgMQAlgJAZAeQAYAcAAAwQAAA1gXAcQgSAWgUAAQgHAAgNgDg");
	this.shape_128.setTransform(46.8,-4.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFF7F").s().p("AHgGxQkHgIkJhRQiigxiAg/QhNgmgng8Qghg1AAg5QAAg1AfhRQArhyB2jZQAsBcBbAKQg6BMg2B6Qg/CNgEBcIAYgjQDNBXBfAaQCSAoFPAsIAIgHIACAIIAMC3QgBADgCABg");
	this.shape_129.setTransform(87.3,-38.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#91AFC2").s().p("AgsBIQgmgcgNgwIBHhiQgGA4ArAlQAmAdAtAAIg9BSQgtgEgigag");
	this.shape_130.setTransform(69.2,-85.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFD8C9").s().p("AgYCZQgGgHgGgVQgCgHACgaQACgUgMgOQgQALgdAEQgMACgSAAQgyAAghgbQgegZAAghQAAhLB5grQBaggBWAAQBZAAAwAmQAjAaAAAVQAAAGgJAHIgQALQgGADgKAAQgDAAhZgcQhbgcgZgDIgFACQBUA9AcAdQAqAoAAAlQAAAegKAKQgHAHgQAAQgRAAgFgHQgEgEgBgLQAAgagNgZQgYgqg8gdQAaAjAeAfQAPAVAAAlQAAAygRAOQgJAIgXAAQgQAAgIgIg");
	this.shape_131.setTransform(92.7,-93.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFF7F").s().p("AB4H1QhqhUg7hAQhHhKglgyIhah/Qg+hXgliUQggh/AAhnIAMhlQANhpAGgbQAXAXAeAMQAaAKAbAAQAIAAARgDQASgDAKgEQgFAYgKBDQgLBMAAAaQAADDCFC+QCTDYEwDFIABACQgDAWguA3QgtA2gqAiQgIgIhvhYg");
	this.shape_132.setTransform(97,-53.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#91AFC2").s().p("AgzBMQgngPgEgXIAsh9QAAAvAtAYQApAVA7gIIggBMQgtAPgRAAQgVAAgfgMg");
	this.shape_133.setTransform(72.9,-119.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFD8C9").s().p("AASCDQgMgrgGAAQgKALgxAdQgHAEgfAGQgZAEgFAAQgtAAgVgcQgRgXAAgjQAAhKCGhSQAzgfAzgVQAxgUAXAAQAlAAAkALQAoALAAAQQAAAOgIANQgMATgcgCQhDgEguAPQgJADghgBQgegBAAgBIgLADQBwAjAnAXQA3AeAAAwQAAAMgRAJQgNAGgIAAQgDAAgMgOQgQgWgKgKQgugsg+gDQBBAcAZAcQAdAeAAAxQAAAagYALQgOAHgMAAQgZAAgMgqg");
	this.shape_134.setTransform(91.3,-136.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#91AFC2").s().p("AgBBMQgXgBgYgEQgwgHgYgWIALh1QALALAYAMQAgAPAWAAQA7AAAjgKIAugOIgOBmQgQAJgjANQgjANgVAAIAAAAg");
	this.shape_135.setTransform(72.3,-149.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFF7F").s().p("ADuLvIAGgLQk6lqiSlSQiSlQgKmHIAAg9QAaAHAbAJQAbAJAXABQAYAAAngGQAngGAUgQQgDAegDBMIgCBPQAAC1A7DbQA2DIBCBvQBfCdBHBgQBNBmBfBhIAHgIIAEAGQACAbgtA1QgoAvgpAcg");
	this.shape_136.setTransform(97.4,-67);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFD8C9").s().p("Ai8ChQgcggAAh0QAAhCAmguQAggoAhAAQALAAANAXQAQAbAAAiQAAAbgOAfQgSApgbAAQgMAAgMgKQgOgNAAgSQAAgPALgUQAIgPgHgcIgFAIQgJAMgIAoQgJAiAAAQQAAAJASAMQASANASAAQAEAAAOgGQASgHALgJIAAAKQADAUALAQQAPAVAaAAQAQAAAQgHQAQgJADgLIg4AHIgTgYQgFgHAAgNQAAgNAlgNQAdgLAOAAQALAAAPAVQAOAWAAARQAAA+gkAdQgfAahBAAQhZAAgZgdgAg4gRQAIgdAAgKQAAgFgHgbQgHgbAAgFQAAgMAFgBQAjgIAbAaQAcAaAAAmQAAAcgOAJIhaAkQAGgLAJgcgAAwhlQgMgdgVgNQAOgHAxgSQA4gVARAAQAfAAASARQARAOAAASQAAAZgLAJQgHAGgXACQhHAFgxAfQADgPgLgYg");
	this.shape_137.setTransform(82,-174.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFF7F").s().p("ADwNpIgDgGIADgWIqH52QAaAGAYAAQAgAAAqgTQAygYAHgfIJwaGIAKAGIhPAoQhNAngDAAQgGAAgDgFg");
	this.shape_138.setTransform(102.8,-76.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#91AFC2").s().p("AhHBDIgjhgIAgACQAbAAAhgHQA6gMAlgcIAaBKQggAqgdARQgcAQgmAAQgVAAgegIg");
	this.shape_139.setTransform(68.1,-166.9);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFD8C9").s().p("AgcEKQgNgBgMgHQgmgXgKhIQAUAFAQgOQAOgMACgOQAKAFAdAWQAOALATAAQA4AAAfgcIgXgDQgoAJgJAAQgNAAgMgEQgVgJgBgXQAAgPARgNQAfgTBFAAQANAAAKASQAOAYAAAtQAAA/gPASQggAlhyAAIgFAAIgHAAgAiIBhQgIgVAAgVQAAgkAsgLQgDAyAQAeQANAagEAYQgpAAgRgpgAhEA9QgIgUABgPQAAgaANgTQAQgVAYAGIAXBUQgOANgHAIQgRATAEAQQgYgNgLgggAgOhwQgThZAAgcQAKgqAWAHQApAOA2EfIhFAFQgVg9gShdg");
	this.shape_140.setTransform(61.6,-199);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFD8C9").s().p("Ag8CTQgJgQAAgMQAAgJADgIQAFgOAZgvQgMgCgdAnIgcAnQgWAAgPgWQgOgVAAgcIABgHIBEheQgqAbglAnQgCgIAAgIQAAgcAmgvQAxg8BPgbQA9gBA1AoQA5AqAAA8QAAA2gXAhQgSAZgVAEQgHgWAAgKQAAgFAIgHQALgJAIgQQgoAPgZAdQgNAQgUAbQAQgCAUgRQAPgMABAFQgHAUgeAdQgnAlgiAAQgTAAgMgVg");
	this.shape_141.setTransform(38.6,107.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#91AFC2").s().p("AgZAXQg/gxgoAJIBehkQBHANAmAjQAiAdATA2IhZBoQgEgtg8gyg");
	this.shape_142.setTransform(53.8,90.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFF7F").s().p("AlnGoQg2gpgnAAIM/t1IABgOIAFAGQAXA4ApBXQAEAGAAAKQAAAHgCACIgGAIIgRANIrNNGQgMgxg6gsg");
	this.shape_143.setTransform(97.7,37.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFD8C9").s().p("AAICYIgEAAQgEgEAAgEQgQgrAJgsQgGABgEAHQgWAqARAsQgFAFgGACQgqAQgagkQgEgGgCgGQgIgVADgXIAIhQQgaAugGA2QgVgUAAgdQAAhNAohDQANgVAPgTQALgNAPgHQBQglBPAvQAdARALAeIASA0QANAqgeAXIgWgXIAGgTQAEgLgDgKQgJARgNAQQggAnAHAvIAFABQAEgDACgEQANgZAHgZQADAEACAFQAHAYgFAYQgNBBg5AXg");
	this.shape_144.setTransform(49.5,97.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#91AFC2").s().p("AAgAhQhHgihPAZIAwhhQAYgEAbADQBUANA2BDIgbBGQgZgbgjgQg");
	this.shape_145.setTransform(55,77);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFF7F").s().p("AlEGSQgVgQgYgKQgXgLgZgFQgMgDgNgBIgaAAQAohFAqhEQAphCAvg+QAtg8Ayg2QAxg3A2gyQA1gxA4gsQA5grA9gnQA9gmBBgfQBCghBCggQADgCAEABIAKAKIADAQQgKAGAIAOIAZAyQATAkAWAfIgMAGQhAAihAAkQg9Ajg6AmQg4Amg0AqQgzApgvAqQgrAsgqAwQgoAvgkAzQgjAygfA2QgeA2gcA3QgVgUgWgSg");
	this.shape_146.setTransform(96.1,31.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFD8C9").s().p("AhtB2IgLggQAAgIAEgNQANASAGACIADgCIABgCQgDgggTgjQgRgeAAgfIAEgcIADgVQBBggAqgKQAlgKA3AAQATAAAVBKQATBBAAAeQgBASgGAIQgJAKgWABQABgSgCgEQgFgEgDgGIgCABIggBNQgMAWgXAAIgJgBQAKgZAAgDQAAgGgBgBIgBABIgeAfQgdAbgRAAQggAAgRgfg");
	this.shape_147.setTransform(66.3,94.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#91AFC2").s().p("AhmgeQAzglAPgFQAmgMBUAVIASBXQg6ADgiAHQgwAMg4Afg");
	this.shape_148.setTransform(62.4,74.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFF7F").s().p("AnSEbIgChZQAAh7AWhFQAfhfBXg1QATgMBRgrQBRgrCVgxQCWgyBzgbQBzgaATgHIAFAAIAAACIA/CTIgDAEQgYALhQARQhXASgaAKQjVBLhiAuQhuAyiOBaQAIAAALgDIAQgFQgGByACBCQACAvAKBZIhIgKQgagBgcALQgSAHgtAWQgDgigDhXg");
	this.shape_149.setTransform(97.9,27.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFD8C9").s().p("AhVBuQgQgMAAgLIABgLIAAAIIASACQAGAAABgBIAAgBIAAgCQAAgMgGgGQgLgIgIgHQgLgHgJgNQgSgYgBgfQAAgOA3gjQA1gjAfgJQAbgKAaAOQAOAHAJAKIAxA+QAPAVAAARQgBAWggACQgEgRgCgBQgCABgGgEQgBAUgFAPQgFALgLARQgHAMgKAGIgHADQAAAGgEgBIgJgCQAIgYgGgCQgKAGgdAdQgaAXgIAAQgcAAgUgOg");
	this.shape_150.setTransform(63.5,75.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#91AFC2").s().p("AhjgIQAkglASgKQAggSBAgIIAxBMQhIAahSA9g");
	this.shape_151.setTransform(54.3,61.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFF7F").s().p("AoFBrQgLg8AAgcQAAhJAmg0QAtg8BogpQDnhbJYgSQAAgFAIAFIAfCaIgHAFIgGgQQhfgCg5AAQjdAAjyArQkEAuhTA+IgBAKIAzgHQARBAAqBcQAlBQAXAhQgoACg0AbQgsAYgQASg");
	this.shape_152.setTransform(85.5,25.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFF7F").s().p("ACpKMIh6ifQiqjlgyh+QgfhPg2h8QgshxgfiQQgvjXAEjWQAaARAeAGQAYAGAgAAQAFAAAqgLQAxgMARgIIgFBcIgDA9QAAKhIFIKQAQASADAKIgBAGQgDgHgnAxIgrA3QgTAWgOAFQgEABgMAAQgOgYg7hOg");
	this.shape_153.setTransform(97.8,-66.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#91AFC2").s().p("AgwBIQgwgHgYgXIALh0QAPAQAjALQAbAJAMAAIA4gEIA5gFQAMgCAPgLIgOBlQgXAGgoARQgaALgTAAIgJAAQgSAAgTgDg");
	this.shape_154.setTransform(72.3,-149.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFD8C9").s().p("AhzDxQgagcAAhBQAAgaAHgkIANAGQAEACAHAAQAeAAALgSQAOAHALAWQAMAaAEADQAKAJAaAJQAWAGAFAAIAcgCIABgCQADgCAGgDQgIgHgXgIQgfgIgIgEQgRgJgIgNQgFgHAAgFQAAgUAVgLQALgHAKABQALAABMAaQARAGAGAZIACAbQAABRgzAgQgkAVhFAAQg8AAgagcgAh9A5QgLgNAAgQQAAgyANgSQAOgRApAEQgGAPgIApQgJA0AJANQgLACgKAAQgLAAgLgNgAg4A3QgFgGAAghQAAgkAWggQAZglAhAUIgLBeQgIAAgSAKQgVAMgHAPQgEgFgGgCgAAhAaQATjDAfhDQAPggAUAAQAYAAAAAtQAAAPgsEAg");
	this.shape_155.setTransform(75.4,-182.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFF7F").s().p("AmMDsQg5g+AAhkQAAg2ARhbQADgQAbhqQAchpAJgfQANAZA0APQAkAKAaAAQAWAAAhgJQgTAygeBdQgnB4gFAhQgNBZAAAgQAAAQAHALIAGAGQAEgCALgcIBNAWQArAIBNAAQBhAAB9gIQCogMBsgXQADgGACgCIACAFQAPAgACA/QAAAHgEAaIgGAgIgCAGIgFgKQlkA6i4AAQjQAAhVheg");
	this.shape_156.setTransform(90.9,-27.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#91AFC2").s().p("Ag2BFQgqgOgNgbIArhqQABAgAYAaQAZAaAhAAQANAAAcgGQAfgHAVgLIgmBVQgTAMgqAAQgiAAgfgKg");
	this.shape_157.setTransform(65.9,-66.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFD8C9").s().p("AiwBBQAAhlAqguQAagcAdAAQASAAALAWQAKASgBAVQAAAYgLAcQgOAngYAAQgaAAAAg3QAAgKAFghIgHAMQgKALgFAaIgCAWQABAZAIAMQAKAQAaAAQAUAAARgQQAZgWALguIApATQgFAKgNAPIgLANICGgZQAQAAAKAMQAJAKAAALQAAASg2AHQhCAIgSAOQgmAfgYANQgoAVglAAQg/AAAAhggAgQgzIgKghQgGgWgMgQIAVgDQAzAAAcAYQAXATAAAdQAAAUgPAIQgKAEgUAAQgmAAgMgegABOhtQgigjgfgDIArgLQAlgIArATQApASAAARQAAAOgRALQgRALgZAAQgJAAgfghg");
	this.shape_158.setTransform(79.3,-84.4);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFD8C9").s().p("AgKCDQgQgEgFgOQAZgCAAgGIgBgCQg/gKgTgJQgggOAAgwQAAgfATgpIAnhEQAKgEA1gKQArAAApAWQAmATAAAOIgPAcIgJgHIgFgDIgLACIASA0QAFAKAAAFQgBATgHAJIgLAIQgIgRgEgGQgDADgBAAQgCBrg6AAQgMAAgIgCg");
	this.shape_159.setTransform(102.5,43.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#91AFC2").s().p("Ag7BLQgIgyABgPQAAgNALglQALglAWgdIBaAaQgYAUgVA/QgWBFAMAjg");
	this.shape_160.setTransform(86.5,39.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFF7F").s().p("AmHBQQhVhEAAhJQAAhLBSgqQB7g/E3AAQC0AABvALQBwALARgTIAIAEIAJCoIgHAGIAAgNQkVgdhuAAQiHAAhLAFQhvAHgrAUQgggZgQgIIgKgEQAZAsAwAiQA9AqB3AzQgNAMgPAvQgOAvgCAZQgCAYADAXQjPh3g3grg");
	this.shape_161.setTransform(90.5,21.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFD8C9").s().p("AgNBtQgrgegTgGQguACgegkQgYgaAAgUQAAg3AtgiQAzgmBcAAQBJAAAuAmQAsAjAAAwQAAAMgKAGQgKAJgSAAQgOAAgHgNIgOgbQgWgwg1gSIgBAFIAyBGQgUAUg1gBQgMAAgOgGQgLgIAAgCQAAgQAKgOQALgPAYgYIgLgEQgbAHgPARQgPAOAAAQQAAAZAIANQAIAOADAIIgGAAQgEAAAAAGIAJAYQAPAYAaAAIA8gCIABAfQAAAZgSAAQgXAAgkgagAgMAyQgHgEAAgJQAAgLAAAEQAwgBATgGQANgEAagPQASANAAAKQAAAWgbAFQgKACgpAAQgdAAgKgGg");
	this.shape_162.setTransform(96,-21.7);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFF7F").s().p("AGfC1QACgBAFgJQAAgDgDgFQgEgGgGAAQnHAUi8AAQipAAhHgWQhNgZAAg9QAAgxBkhOQBthYCCgkQgDAUAAAGQAAAlAVAkQATAhAXALQisA1grAXQgNAIgHAIQgIAJgIAEQB2gqAKAAIFAAIQBhAACXgHQB7gGAagDQAigEAngBQAZgEAMgQQAFAsg2BMQgvBDggAFg");
	this.shape_163.setTransform(85.5,-6.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#91AFC2").s().p("Ag8A2QgYghgBgiIAFgRIAHgXIBpgmIgWA+QAAAcALAWQATAnAtASIhbAPQgegIgYgfg");
	this.shape_164.setTransform(74.9,-20.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFD8C9").s().p("AghCZQgagTgXgJIgIgDIgBAAIgEgCIgxgRQhHgcAAgwQAAgeAhgkQAngrA9gLQAvgJAdgIQAcgIAogQIBBgeQA1gYAJAAQAMAAAJAKQAGAIAAAGQAAAyhrAeIgwAMIgEAAIgWAGQghAJAAAHQAAAEABADQAEAGALAAQATAAAagGQAGANAAAIQAAAPgYAVQgeAcggAAQguAAAAgUQAAgWAbgVIAbgUQAEgJgWADQgWACgTAZQgTAWAAAXIAJAVQAJAMAPAFIAAAAQgHAOAAAKQAAANAVAOQAZARAhAAIAIgBQACAEAFAEQAKAIAAAKQgCAhgJAAQgSAAgvgkgAgSBiQgRgHAAgIQAAgGALgHIAEgDQA2gCAiglIABgCIAGAEQANAJAAAHQAAASgJAPQgRAbgqAAQgUAAgSgIg");
	this.shape_165.setTransform(102.3,-66.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFF7F").s().p("AGyF8IAAAAIgBgEQAAgEAFgLQgDgDgFgBQkYgohLgSQhMgTh5gaQh4gbhhgsIAAAAQhfgsgognQgmglgDg0QgDg0Akg1QAmg4BYhWQBYhWBMg6IAAAAIADgCQgCBkBsA2QiNBchfBrQgjAlgdAqIgBACQAVgQAogYQFpCmHRADIAAAAQAEgKAEgHIAEAHIABAHIgFAhIgHAgQAAAMgXA9QgKAYgeArQgFAAgCgDg");
	this.shape_166.setTransform(87.2,-22.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#91AFC2").s().p("AheguIBXhAQgQAdAAAdQAAAtAwAiQAjAYAkAJQguAYgpAbQhzg1AMhog");
	this.shape_167.setTransform(80.4,-58.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#91AFC2").s().p("Ahdg5IBVgzQgDAJgDAKQgKAsAoAuQAiAoAsATIAEACIgBAAQg2AWgvAZQhvhAAWhmg");
	this.shape_168.setTransform(84,-47.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFD8C9").s().p("AgYCjQgRgFgogvQgZgfgYgPIgEgDQgbgRgQgMQg/grALgvQAHgfAogaQAvgfA+AEQAvADAcABQAfgBArgEIBGgNQA4gKAJADQAMADAGAMQAEAJgBAGQgMAxhuABIgxgCIgEABIgXgBQgiAAAAAHQgBAEABADQABAHALADQASAFAaABQAEAPgCAHQgDAPgeAQQggARgigJQgsgKAFgUQAEgXAggNIAfgNQAGgHgWgDQgXgDgYATQgXASgGAWIAFAXQAGAMANAIIAAABQgKALgCAKQgDANASATQAUAWAiAKIAIACQABAEAEAFQAIAKgDAKQgIAegJAAIgBgBgAgQBPQgWgFgQgMQgPgMACgIQABgGAMgEIAFgCQA1ANApgbIACgBIAEAFQALAMgBAGQgEASgMAMQgQAPgXAAQgJAAgNgEg");
	this.shape_169.setTransform(108.2,-50.4);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFF7F").s().p("AGrFTIAFgJIAHgNQgBgDgCgDQgDgEgGgBQkYgXhLgNIjFgiQh4gThhgnIAAAAQhfglgnglIgBAAQgkgigEgyIgBgEIAAgCQACgzApgyIAAAAQArgzBghNQBghNBRgyIAAAAIAEgCQgMBjBmBBQiTBMhoBgIgEADIAAAAQgUARgSAUQgEADAAAFIAAAEIA4gdQFgCHHBgXQAHgSAKgBQADgBADACQAAAAAAgBQABAAAAABQAAAAAAABQAAABAAABIgMAlQgMAmAAAFQAAAFgEAQQAAAngTApQgQAkgWARg");
	this.shape_170.setTransform(87.5,-17.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFD8C9").s().p("AghCZQgagTgWgJQgEgDgEAAIgBAAIgBAAIgEgCIgxgRQhHgcAAgwQAAgeAhgkQAngrA9gLQAvgJAdgIQAcgIAogQIBBgeQA1gYAJAAQAMAAAJAKQAGAIAAAGQAAAyhrAeIgwAMIgEAAIgWAGQghAJAAAHQAAAEABADQAEAGALAAQATAAAagGQAGANAAAIQAAAPgYAVQgeAcggAAQguAAAAgUQAAgWAbgVIAbgUQAEgJgWADQgWACgTAZQgTAWAAAXIAJAVQAJAMAPAFIAAAAQgHAOAAAKQAAANAVAOQAZARAhAAIAIgBQACAEAFAEQAKAIAAAKQgCAhgJAAQgSAAgvgkgAgSBiQgRgHAAgIQAAgGALgHIAEgDQA2gCAiglIABgCIAGAEQANAJAAAHQAAASgJAPQgRAbgqAAQgUAAgSgIg");
	this.shape_171.setTransform(102.3,-66.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFF7F").s().p("AGqF9IgBgDIAAgCQAAgHAEgPQkXgohLgSQhMgTh5gaQh4gbhhgsIAAAAQhfgsgognQgmglgDg0QgDg0Akg1QAmg4BYhWQBYhWBMg6IAAAAIADgCQgCBkBsA2QiNBchfBrIgGAHIgCACIgIAJIgYAcIAAAAIgFAGIgTAbQgDAEABAFIAAACIAZgUIAGgFIADgCIAagVIABABIABgCIAYALQFfCbHAADQAHgLAHgHIABgBQAAAAAAAAQABAAAAAAQAAABAAABQAAABAAABIgBADQAAAEgCADQhEDVgNAAQgEAAgCgFg");
	this.shape_172.setTransform(87.2,-22.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAAAAIAFgBIgJADIAEgCg");
	this.shape_173.setTransform(86.3,-76.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFD8C9").s().p("AASC9QgSgCgtgnQgdgagbgKIgEgCQgegMgRgJQhGghACgwQACgeAjghQAMgLAOgKIAEgEIAQgIQAXgLAagEIAIgCQAvgHAdgGQAdgHApgOIBCgbIAagKQAfgMAGAAQAMABAIAKQAFAHABAEIAAADQgDAxhsAaIgxAKIgDABIgXAFQgiAHAAAHQAAAEABADQACADADABIAgACIADgBIARgEIAAAAQAIAYAAAHQgBAPgZATQgfAZghgDQgtgDABgUQABgWAcgTIAcgSQAFgIgXABQgWABgUAXQgVAXgBAVIAIAWQAIAMAQAGIgBAAQgHANgBAKQAAANAUAQQAYATAgACIAIABQACADAGAFQAJAIgBALQgDAggJAAIgBAAgAALBpQgUgCgSgJQgQgJAAgIQAAgGAMgGIAEgDQA2ADAkgjIABgBIAGAEQAMAKAAAGQgBASgKAPQgQAXgjAAIgJAAg");
	this.shape_174.setTransform(102.7,-64.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFF7F").s().p("AGqF9IgBgDIAAgCQAAgHAEgPQkXgohLgSQhMgTh5gaQh4gbhhgsIAAAAQhfgsgognQgmglgDg0QgDg0Akg1QAmg4BYhWQBYhWBMg6IAAAAIADgCQgCBkBsA2QiNBchfBrIgGAHIgBACIgBAAIgIAJIgCADIgDADIgTAWIAAAAIgFAGIgTAbQgDAEABAFIAAACIAZgUIAGgFIADgCIAFgEIASgOIADgDIABABIABgCIAEACIAGADIAOAGQFfCbHAADQAHgLAHgHIABgBQAAAAAAAAQABAAAAAAQAAABAAABQAAABAAABIgBADQAAAEgCADQhEDVgNAAQgEAAgCgFg");
	this.shape_175.setTransform(87.2,-22.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#91AFC2").s().p("AhYgsIBbhEQgSAdgCAfQgCAuAuAlQAeAZAhAMQgnAWgkAXQhzg1AMhog");
	this.shape_176.setTransform(79.8,-58.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFD8C9").s().p("AAUC7QgSgCgtgoQgegbgagLIgEgBQgfgNgRgJQhGgjACgwQABgeAjggQAOgOASgKIAAAAIAAAAQAggTAngFQAvgGAdgGQAdgGApgNIBBgZQA3gWAIABQANABAIALQAGAIgBAFQgCAyhsAXIgxAJIgdAKIgbAIIgCADIgDADQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABADAEABIAfACIAEAAIARgEQAIAYAAAHQgBAPgZASQgfAZghgDQgtgFABgUQABgWAcgSIAcgRQACgDgDgCQgCgCgFgBIgKAAQgWAAgUAXQgVAXgBAVIAIAWQAIAMAQAGIgBABQgHANgBAKQAAANAUAPQAYAUAhADIAIABQACADAFAFQAJAJAAAKQgDAggJAAIgBAAgAANBnQgVgCgSgKQgQgJAAgIQAAgGAMgGIAEgDQA2AEAkgiIABgBIAGAEQAMAKAAAHQgBASgKAOQgPAXghAAIgLgBg");
	this.shape_177.setTransform(102.8,-64.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFF7F").s().p("AGqF9IgBgDIAAgCQAAgHAEgPQkXgohLgSQhMgTh5gaQh4gbhhgsIAAAAQhfgsgognQgmglgDg0QgDg0Akg1QAmg4BYhWQBYhWBMg6IAAAAIADgCQgCBkBsA2QiNBchfBrIgGAHIgCACIgIAJIgYAcIAAAAIgFAGIgTAbQgDAEABAFIAAACIAZgUIAGgFIADgCIAFgEIASgOIADgDIABABIABgCIAYALQFfCbHAADQAHgLAHgHIABgBQAAAAAAAAQABAAAAAAQAAABAAABQAAABAAABIgBADQAAAEgCADQhEDVgNAAQgEAAgCgFg");
	this.shape_178.setTransform(87.2,-22.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#91AFC2").s().p("AhXgrIBdhGQgTAegCAgQgCAuAuAmQAdAYAfANQgmAVgjAXQhzg1AMhog");
	this.shape_179.setTransform(79.7,-58.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFD8C9").s().p("AgcCdQgfgWgbgIIgFgCQgfgJgRgHQhJgagBgwQAAggAfgjQAngsA8gMQAvgLAdgIQAbgJAogQIBBggQA1gaAIAAQAMAAAJAKQAHAIAAAFQABAyhqAhIgxANIgCABIgXAGQghAKABAHQgBAEACADQAEAFALAAQATAAAZgGQAHAMAAAIQABAPgYAWQgdAcggABQguABgBgUQAAgYAagUIAbgUQAEgJgWADQgWADgSAZQgUAXABAXIAKAVQAJALAPAFIAAAAQgGAOAAAKQAAANAWAOQAaAQAggBIAIAAQACADAGAEQAJAIABAKQgBAhgKAAIgBAAQgSAAgvgigAgOBmQgRgIAAgIQgBgGAMgHIADgDQA2gDAhgmIABgCIAGAEQAOAJAAAGQAAASgIAQQgRAcgqABIgCAAQgVAAgPgHg");
	this.shape_180.setTransform(101.6,-67.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFF7F").s().p("AGqF9IgBgDIAAgCQAAgHAEgPQkXgohLgSQhMgTh5gaQh4gbhhgsIAAAAQhfgsgognQgmglgDg0QgDg0Akg1QAmg4BYhWQBYhWBMg6IAAAAIADgCQgCBkBsA2QiNBchfBrIgGAHIgKALIgHAJIgRATIAAAAIgFAGIgTAbQgDAEABAFIAAACIAZgUIAGgFIADgCIAFgEIASgOIADgDIABABIABgCIAGADIASAIQFfCbHAADQAHgLAHgHIABgBQAAAAAAAAQABAAAAAAQAAABAAABQAAABAAABIgBADQAAAEgCADQhEDVgNAAQgEAAgCgFg");
	this.shape_181.setTransform(87.2,-22.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#91AFC2").s().p("AhfgyIBNg4QgMAZAAAZQACAtAxAhQAlAZAnAIQgvAZgrAbQhyg0AMhpg");
	this.shape_182.setTransform(80.5,-58.2);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFF7F").s().p("AnCDnQg2gaAAgxQAAg5AhhCQAihBB7i5IAagjQATAmAvAeQApAZAaACIiPDUIgSAhIgKARQgIAOAAAGQAAAGACADIAFAEQAQgQANgJQAJgIANgcQCogKD0g7QD3g5Bsg5IAAAAQAAgIAGgGQAEgDAEgCIAADfIkDBAQjIAxj6AhIAAAAQgnAEgvADIgxACQhBAAgugWg");
	this.shape_183.setTransform(90.7,5.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#91AFC2").s().p("AgyAsQgzgkABgSQAAgGAQgVIAigtQAgAuAiAXQAqAYArgIIhEBQQghgDgygkg");
	this.shape_184.setTransform(73.9,-21.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFD8C9").s().p("Ah2CgQgrgfAAgXQAAgNANgkQANgjAAgUQAAgHgkhyQAAgLAJgMQAJgNANAAQAYAAASA2QAOAsgBAlQABAGgEACIgFAFQA6gBAtAeIAdAWQANALAFAAQAFAAAUgbQAMAAABgnIAAg1QACgOgDgnQAAggASAAIAIABQAPgMAcAxQAGARACAMIABAbQAAAKgFAOQAAAFgCAEIgWA4QgVA4gPgHQgQgHgKACQgRABg2AhIADAFQAFAEAOAAIA2gMIAhAFQAeAMAAAgIgBAMIgBAGIgJADQg6gKgJAAQgRAAgyALIgvAKQggAAgrgegAgFgLIgagIQAPgZgCgZQAAgRgHgWQgIgWAAgTQAAgJAGgNQAFgOAEAAIANgEQAMgCAMAIQALAJAIAgQAGAYABANQgBAQgKAoQgJAigHAPQgKgGgNgFg");
	this.shape_185.setTransform(87.1,-43.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFF7F").s().p("AnsDuQgygdAAhKQAAglAPgzQAZhUBPi5IASgpQAZAiA1AUQArARAbgDQgeBAgbBGQgRAoglBoIgHAXQgIAYAAAHIABAIIABABQAZgKAFgJIAKgeQDxgNEdhHQD8g9Bbg1IABgBIADgOIADgCIAIAHIAADVQizA4j+AyQkfA4ikAAQhrAAgsgag");
	this.shape_186.setTransform(88.5,4);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#91AFC2").s().p("AAaBJQgYgDgtgWQgzgZgGgRIAkhOQAVAaAlATQAiASAeAAQASAAAZgIIg1Bag");
	this.shape_187.setTransform(59.3,-25.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFD8C9").s().p("AhZCqQgqgYAAgOQAAgKAJhMQAAgegfgyQggg1AAgDQABgRAIgLQAJgKAMAAQBnBNgiA3IANgEQAOgCAGAAQAjAAAuAVQAXALATALQAHAAAIgKQANgTABgmQAAgVgMgpIgNgmQABguATAAQAXAAASAYQAaAjAABJQAABTgiAMIgzARQgkAOgDALIABAIQAJgEAjgIQAkgIAHAAQAZAAARAMQATANAAAYQgBAMgVgBQgngCgmAMIg0AWQgpASgLAAQgeAAgqgZgAgbgPQAIgvgRggQgUgkAAgVQAAgKACgFQADgMAHgHQAJgJAIAAQAJAAATAUQAYAWAAATIAEAcIAEAbQAAAXgJAyQgYgJgbgBg");
	this.shape_188.setTransform(67.5,-49.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFF7F").s().p("AFxJeQAJgSAFgEQj/hihdgpQhUgmheg3QhEgogzgjQg/gphQg8Qh4hZgthOQghg3AAhBQAAhQA2iJIBzkhQAgA3BCAfQBKAkBcgKQh4DNgjBBQhDCAgSBbIAJgBQAMgEAPgSQC/CgE/CUQEXCBCdAbIAWgJIAJABQABgCAAAKQAAAPhYBNQgxArglAdQgmAdgFAAQgCAAgQgMg");
	this.shape_189.setTransform(96.6,-44.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#91AFC2").s().p("AingRIAnhOQATA5BTAdQBCAVBcAAQAKAAAagDIhABTQgbAEgYAAQiiAAg6hxg");
	this.shape_190.setTransform(71.4,-107.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFD8C9").s().p("ADADiQgcgSgUgRQgHAAhQAhQggAAgigCQhIgEgcgMQg9gcgjgtQgXgfAAgMQAAgQAMgMQAPgPADgMIADgUIACgWQAAgSgGgFIgKADQgMA3gWAhQgXAggeAAQgaABgVgdQgSgbAAghQAAgxATgrQAbg/A2AAQAgAAAVARQAbAVAKAuQAeCFBaAAQAoAAAbgnQAhgrAAhKIAAgJQgBgDgHAAIgGAAIACABQgXBMgQAcQgUAhgbAAQgpABgbgkQgbggAAgxQAAhQAlg0QAigvAtAAQAxAAAPBFQAGAjAEANQAHAVANAAQAcAAAHgbQALgsAJgNQANgRAbgKQASgFAMgBIAIAEQAIADAHAIQAbAXAIAKQAEAFAFAQQAFAPAEAbQAGAaAAAJQgBA6gRAiQgSAhgZAAQgfAAgPgPQgTgUgLg/QgDABgDADIgCACQgIALABAPQAAAwAlAlQAaAYA5AaQBEAgAQAKQAlAYAAAhQAAA5g8AAQg3AAg3ghg");
	this.shape_191.setTransform(81.9,-131.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFF7F").s().p("AntD6QglglgBhEQAAgkAOhIQAWhwArhWQAiA2A6AhQA2AeAvAAQAIAAAtgIQArgIAMgDIAIgEIhBBpQgOAWAAAHQAAAGACACIADACQBYheArgRQAQgGAsgNQAvgPA7gcQBngxCKg/QBhgtAvgfQAVAZAJAVQAOAgAHA6QALBhAEBUQAAAOgGAFQgIADgBADQgJgJgEgKQgIgQgIgqQAAgIgDgJQgCgIgCgCQjaBdkuB1Qk8B5gkAAQhAAAglgjg");
	this.shape_192.setTransform(95.2,10.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#91AFC2").s().p("Ai6gUIAbhMQAdA2BNAbQA/AUBYAAQAaAAAXgFIAegHIAKgEQgZAwgVATQgxAphbAAQhmAAhVh1g");
	this.shape_193.setTransform(69.7,-6.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFD8C9").s().p("ADJDhQg0ghgCgBQgIAAgoAQQgoARgYACQgYAChPgOQhSgOgqg2QgigrAAgOIATgkQAUgmAAgMQAAgHgKgaQgQAPgKAdQgMAlgGAJQgVAigggBQgfABgSgUQgUgUAAgmQAAguASgvQAchJA6AAQAgAAAVASQAbAXANA5QAbB4BeAAQA0AAAWg2QANgbAAggQAAgQgFgrQgWBRgMAXQgSAlggAAQgpABgbgkQgbgfAAgzQAAheAugxQAhgjAlAAQArAAATBFQAHAjAEAMQAHAWAKAAQAMAAAMgLQAPgNABgRQABgrAjgUQAXgMAdAAQA/AmAGAlQANA9AAAJQAABEgYAgQgRAZgTAAQgjAAgRgYQgSgUgGg2QgDAFgJAAQgEAAAAAbQAAAsAmAjQAaAYA5AdQBDAiAQALQAmAbAAAeQAAAdgPAOQgOAOgfAAQg0AAgzgig");
	this.shape_194.setTransform(76.5,-31.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFD8C9").s().p("AAMCQQgNgDgFgEIgGgLIAYgDIABgGQgNgWAAACQgGAHgXgBIgKABQguAAgggpQgegoAAg3QAAgYAjgmQAwgzBJAAQBIAAApAbQAUAOAGAPIgGAOIgJASQgKgLgGAAIgIABIgDADQAbBGAAAIQAAAFgEAHQgEAGAAAFQAAAGgEABQgEABgDACIgKgXIgDAAQgHAFgBA8QgJA5gzAAQgJAAgMgCg");
	this.shape_195.setTransform(290.7,81.3);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFF7F").s().p("ACKFWQmMiAjsipIAAAAQhqhPg8hWQg8hWAAhGQAAhOAwgyQAzgzBRABIAEAAQABgLgBgKIALABIANAMQAKAOAAAZQAAAOgXAdQgaAhgDAHQgFAUgEALQgIATgQgCQgLgNgLgVIgNgeIgEANQgCBYB2BlQBvBeEjCAQEhCDIcBpQgTALgOAdQgPAeAAAeQAAAJAEAWQADAYAFARQkGgqkdhcg");
	this.shape_196.setTransform(192.2,38);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#91AFC2").s().p("AgLBcQglABgFgBQghgFAAhLQAAggATgeQASgcAVgGIBOAPQgCAFgRAUQgNAPAAAdQAAALAJAkQAJAlAHAOQgZgHgdABgABNhcQAEgGAGACIgLAHg");
	this.shape_197.setTransform(271.4,77.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFF7F").s().p("AnLERQgqgxAAhxQAAhSAPhiQAMhSAhihQAYAjAyAOQAhAKAkAAQAOABAogJQgeCYgNBdQgMBhgFCFQADARAEgOIAKgaQAOgmADgNQAEgSAtgMIBRgXQDzhdB2g0QCXhDAWgdIAKgHQAEgCAGAAQAKAAgDAAIABACQABACAAAHQgLAWABAFQAAAHBHA1IASAQIAAAxQjOBwkTBkQkQBlhnAAQhHAAgigog");
	this.shape_198.setTransform(101.3,11.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#91AFC2").s().p("AhEBJQgqgVAAgZIATh4QgBAwBTAdQBOAZAqgWQgKBGgJAPQgOAWgugBQhFAAgfgUg");
	this.shape_199.setTransform(68.9,-26.4);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFD8C9").s().p("Ah+DYQgegfgFhBQgEg7gehaQgehZAAgCQAAgxAcAAQAhAAAZA/QAXA6AAA3IgFACQgHADgHAHIgFAFQAigBBHADQBXADAUAHIAFACQgCgFgFgHQgHgJgGgDQAVhAAGhrQAEhHAVAAQAcAAAQAcQATAgAABAQAACEglBAQgZAqguAPIgIAEQAIAEAMADQAMADAIAAIAZgEQAVgEAFAAQAmAAAXAUQASAQAAAQQAAAXgVAGQgIACghAAIhWgNQgbAAgYAOQgXAOgTAAQhLAAgkglgAg/AAIAAgDQAAgpgMhWIgMhXQAAgUAPgJQAKgGAOAAQAgAAAQA7QANAsAAAtIgHBrQgQgCg1gBg");
	this.shape_200.setTransform(76.9,-55.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFF7F").s().p("AGkI9QgFgBgIgFQgDgDAAgHIAOgQQiUjKk/k4Qk+kzjPiSQA9AEAugxQAtgwgKg1QDICjEzFJQE1FHCUDOIACACIAZgLIAMgEIACACQACADAAAGQAAAJgLALIguAoQgsAdgcAWQgOALgKAAIgCAAg");
	this.shape_201.setTransform(83,-44.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#91AFC2").s().p("AggBuIhRg7QBWAHAfhCQARgiAEhDIBXBLIACAZQAAA4gdAdQgjAihQAAIgCAAg");
	this.shape_202.setTransform(25.2,-101.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFD8C9").s().p("AgNCpQg9gUg3gVQgTgKhigbQg+gRAAghQAAgEgBgBQABAAADgIQADgJAGgFQAHgGAIACIBWAUQBlAYAoAIQgDAPADAHQAMgWAtg2QA4hAAagEIgGgHQACgDgKAAQgGAAgCABIAAABIgvAgQhNg0gegSQgGgDgRgPQgNgKgMgTQgMgTAAgLQAAgKAFgGQAHgIAOAAQAVAAASAHQAZALAvAhQAxAkBOBLQBCA+ACAAQAIAAAGgJQAKgNAIgqQALgdAUgVQAQgSAIAAQAWAAAMANQAIAJAAAHQAAAXghAuQglAygKApQgFAvgLAeQgTA5gtAAQgrAAh4gngAhEAcIgggIQAAgIgGgEQhJgqhEghQgagMAAgNQAAgSANgKQALgIARAAQAnAAA4AaQBAAeBDA4IgUAcQgOAVgGAAQgKAAgMgFg");
	this.shape_203.setTransform(1.7,-119.8);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFF7F").s().p("AEFKMIAAAAIgBgBIAAAAIgCgEIAAgHQAAgFADgBQAEAAABgEQAAgHgEAAIgDAAQhWgTihh4QiLhqhChKQhmh2gxheQhIiHAAiYQAAhYAjhhQAohuBliqQAUAqAzAgQArAcAeADQhmCkgZA4QghBJAABKQAABfAvBdQAtBcBxCFQA9BKCaBaQBMAsBDAbQBAAZAWgDQASgFAFAEQABgDAAAKQAAAKg8BQQg/BTgQAAQgKAAgHgJg");
	this.shape_204.setTransform(109.8,-51.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#91AFC2").s().p("Ag1AzQgfgegUgeIA7hWQAKAWAkAgQAxApA3ANIhDBTQgqAAgxgtg");
	this.shape_205.setTransform(98.1,-119.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFD8C9").s().p("ABRDKQgjgNglAAQgxABgIgBQgpgFgmgfIglgeQgEAAgOgSQgNgRAAgCIAdgtQAdgzAAgoQAAgOgJglQgJglAAgLQAAgSAJgOQAKgQATAAQAQAAAMAZQAPAeAAA2QAAAJgDATQgCAUgCAAQAxAPAwAjQAwAkgDAUQALgHAHgJIAHgIQAMAAAMgyQAHgaADgbQgCgbAGgWQAIgfAWAAQAMAAALAMQATAVAAAuQAAA8gpA8IgpAzQgmgLgOAAQgXAAgRADQgVAFgDAHQBGAKAZALQAqARAAAmQAAAagTAAIgjgNgAgZgdQALgRAIguIAGgrQAAAAAAgdQAAgdAHAAIABAAIABgDQAKgbAcAMIALAIQAFABAFAIIAFAKIACAKQADANAAARQAAAhgIAgQgOA2gfAaQgWgRgcgNg");
	this.shape_206.setTransform(114.8,-140.2);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFD8C9").s().p("AigEEQgRgegHhOQgEgTgDgoQgEgpgTgoQgcg5gbgjQgQgVAAgOQgBg4AwAAQAwAAAZAyQAdBQAZA7QgLADgNAIQgMAHgFAFIANgCQBPgNAlAAQAjAAA4AHQBMAJARAOIACgIQgDgJgHgEIg5gTQAThlAQhvQAOg6AsAAQAPAAALAMQAOATAAAqQABB0giBSQgQApgcAmQgFAIg9AmQg0AiAAARQAAADAOANQAigUA6gxQA0gnAsAAQAdAAANALQAJAGAAAFQgBAJgFANQgDALgDACQgmAqgmAPQgcALABAEQAAADgRAGQgVAIgJAGQgSANg5AWQg5AWgSAAQhsAAgbgygAhHh5QgPhXgBgYQAAgkASgYQAagkAvApQAOALALAlQAOAyAABMIgDAwQgDAtgDAXQgbgBgfABIgcABQgDgegQhfg");
	this.shape_207.setTransform(74.5,-55.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFF7F").s().p("Am5C6QgzgkAAh3QAAgfAajCQBEAoBFAAQAnAAAhgJQAugMAJgCQgZAsgcBEQgYA7gEAUIAJA2IAPguQArgGAqgHQBHgKCDgnQBmgjBGggQBbgoBHgvIgDgHIgBgBIATgHQA3BUAhBOQAcBAAAAfQAAAMgKAIQgHgFgGgHQgJgKgIgXIgIgWIgBgBIiIBAQiOBBhLAVQhgAbh3ARQhuAQhGAAQhmAAgjgYg");
	this.shape_208.setTransform(100.9,3.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#91AFC2").s().p("AhhA1QglgKgfgYIAUhHQANAGAfAWQAlATA5AAQA1AAAugTQAagLAsgZIAEABQgIAMgJAVQgPAdgTAZQgKAOg8ALQgtAIgVAAQgsAAgggIg");
	this.shape_209.setTransform(71.4,-21.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#91AFC2").s().p("AgxA2QhPhvAShcIBBB1QBbCIBEApIhRAFQgqgngog5g");
	this.shape_210.setTransform(105.3,60.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFD8C9").s().p("ACFGEQgqgBhsgvQhtgwhThcQiDiUgWgzQgVgxAFAQQAFAQgSgtQgSgtgMgsQgLgtAAggQAAgHAFggIAGgfQAAgbAZggQAagfATAAQAWAAAtApQAcAaBKBLQCpCiCmBCQCXA6BHA3QA6AsAAAkQAABZh3BIQgrAagwANQgsAMgnAAIgHAAg");
	this.shape_211.setTransform(134.7,48.8);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFF7F").s().p("AkFGfQhNgqAAh3QAAhIAig5QAcgvBWhWIACACQABAKAgBfIgPAzQABBlAqBWQAkBKA0AkIgeABQiHAAg5ghgADgAKQg/gvhWhTQhLhNgMgLQCbiIBjg+QAugcAPgNQAIAOAKAZQASAsAAApQgBBlgeBcQgbBQgQAiQgQAegOAEg");
	this.shape_212.setTransform(107.7,31.1);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFD8C9").s().p("ABoDgQAAgEgHgGIARgTIACgFIgCgLQgmAHgcAQQgVAMghAAQhBAAg7hbQgvhLAAgfQAAhjAwhDQA4hNBiAAQAYAAAPAMQAYATgEAtIgGgDIgJgBQgDAAgGADQgHADAAAFQAAAEAGAIQANAOAhAXIAaAhQALALAGATQAFAQAAAPIAAAMIgfgXIgCgCQgBAAAAAGQAAAIAeA0QAdA0AAAiQAAAugaAZQgJAJgUAIg");
	this.shape_213.setTransform(224.8,74.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFF7F").s().p("ABSHHQiMgzhBg2QhshChCh2QhLiHAAioQgBgtASg8QARhAAhg1QAhg1BQg5IA9gqQAIgFgHAFQAVAGAVADIAAASIguBYIgxBXQgNgGgJACQgHABgKAJIABhQQgBgPgJgGQgQAHgFAaQgFAcAABUQAAD7ClCMQCjCPEvAFIgRAVQgbAigDAwQgEAwANAiQANAjANAPQh+gFiag3g");
	this.shape_214.setTransform(151.9,41.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#91AFC2").s().p("AgCB8QhVgDgVgqIgVgrQgPgdAUg7QAUg8AWgMIA5ABIA6AAQgZAhAmBZQAmBVA0AmQhBADgrAAIgegBg");
	this.shape_215.setTransform(201,82.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#91AFC2").s().p("AglB2QgjgiAAgMQgWgSgEhLQAAgkASg1IARgyIANgMIgGAbQgDASAAAHQAABYAwAxQAMAPAkAiQAjAjAbApIhBAfQgigTglgkg");
	this.shape_216.setTransform(95.9,52.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFD8C9").s().p("Ag0DjQgxgjgQglQAOACAaABQAZABARgBQgQgKgrgPQgsgQgUgMQhJgrAAhpQAAgXAcg8QAcg8AYgQQAXgQAXgSQAWgRASgDIAZgDQAFgBAQABQBBAABcBdQBeBgAABKIgFANQgGANgGAJIgDgIQgNgagngnQgggjgbgVQAaA1AtA6QAZAhAAApQAAAcgOAVQgRAZgiAIQgGgygvgyQgcgfgbgRQANAcArBGQAXAkAAAkQAAAWgPAQQgWAYgvAAQgZAAgugig");
	this.shape_217.setTransform(116.1,44.4);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFF7F").s().p("Am2HDQgdgdAAhGQAAh6FYklQBehRCxiOQCfh+ApgmQgBgIAAgHQACgFACgCQAYAUAaBGQAYBDAOBOQALgYAHgFQADgCADABIAFAGIAAAOQAABagoBSQgTAqgVAXQgGAAgEgCIgEgBQhShqhMgxQg1gjgiAAQgqAAgzAdQgwAdgeAnIgCACIlfFHIgEAFQAigTALgFQAtgXAzgtQAegaA9g7QgDALgMBTQAABJAvA9QAYAdA6AxQhSAng/AbQh2Ayg6AAQgqAAgWgWg");
	this.shape_218.setTransform(101.3,35.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#91AFC2").s().p("AgKAoQgcgEgRgHQgVgJgXgOQgZgOAAgHQAAgKAFgSQAfAbA8AMQAeAEAcAAQAJAAAegEQAigGAWgHQgLAagTAQIgRALQgoAIgQAAQgLAAgVgEg");
	this.shape_219.setTransform(70.2,3.8);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFF7F").s().p("AnODTQgmgjAAheQAAglADgnQAFhNAKgQQAPAUArASQAuAUAkAAQALAAAagDQAfgEAUgGIgbBIQgLAeAAAUQAAAgAFAOQAIATAAAEIAWhSQEBhYBFggQBCgeDriDIABgBIADgSQA7AGAiAlQAiAkAAA2QgWA5gIAOQgGgEgDgGQgFgKADgTQAEgRAAgIQgDgCgKAAIgIABIAAABQkHCtkJBaQjABAhrAAQg1AAgZgXg");
	this.shape_220.setTransform(105.3,14.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFD8C9").s().p("AAGBkQhFgrgDAAQgUAAg9AVQg/ATgWABQgPgBgMgKQgOgOABgXQAAggAugVQARgIAWAMQAbASAVAAIAmgEIAmgFQAKAAAZAKIgMADQgFABAAAFQABAHADgBIADgCQAggCBfgfQAEAAAIABQAHACAGAAQgHAdAGANQAFAOAgAUQAeASALAAQACAAAGgFQAJgFAGgIQgFgGgngTQgegPAAgMQAAgKAGgKQADgFALgFIAKgFQAAgDANgEQAQgEATAAQALAAATAQQAaATAAAcQgBAZgTAZQgmAxhZAAQgqAAhPgrgAgNgBIgJgHQgJgEgQgDQgQgDgIAAIghAFIgiAFQgSgBgRgJQgRgLAAgMQAAgRATgXQAdghAwgIQgCALACAUIACATQAAAOATASQASARAMAAIAogBQAkABAcAEQgOAEgYAMQgRAHgFAAQgEAAgKgFgABugiQgYgLgKgCQgPgDgXgDQgUgCgJAAQguAAgOgHQgQgHAAgbQAAgPAcgOQAegRArAAQA3AAAnAVQApAWAiAyQgpABgMANQgLALgDAAQgFAAgVgKg");
	this.shape_221.setTransform(59.7,-13.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFF7F").s().p("AoVAlQgVgJg2hEQg1hFgOglQBhgFAygSQAkgMA4gnQBiCtCKBDQB0A6C0AAQBcAAB9gTQB6gTAmgSQgIgJgBgDIACgKIACgBQADgCAGgBQAnABBRBHQBPBJAAAZQAAAKgHAGQgFACgEAAQgFAAgRgPQgWgVgggQIgdgUIgCABIj2A8QiDAfgsAFIAAAAIh3ALQgLABhJAAQkHAAjHi4g");
	this.shape_222.setTransform(98.7,-6.2);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#91AFC2").s().p("AhfBiQgBgGgEgDQgegcgIg1IADgBQBIABAvgTQAtgTBYhGQABAJAKA8IALA5QAAAOgkASQgRAHglANQgUAHgmAHQgvAJggAAQgGgBgBgCg");
	this.shape_223.setTransform(39.8,-34);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFD8C9").s().p("AjoDrQgDgFAAgNQgIgKgFgYQgGgXAAgVQAAhfBNheQBThoBgAAQARAAAWAJQAcAKAAAQQAAAFAEAMQADAMAAAFQAAASgVAMQgPAKhcApQgpAQgQAmIgKAmIApgoQAcgaAXgHIAAAAIAYgIIABADIgEAEQgCACABAHQgBAGACACIABAEIACABIAIABQAEAAAGgDIAwghQBQg2AcAAQAEABAFADQAIAGABANQAAAKgMATQgJANgIAJIAAAAQhzBbgVASQgQAOgBAJIg0AmIgZARQgSALgtANQgrAMgPAAQglAAgEgJgADMibQAMgPAAgOQAAgHgLgTQgMgVgOgMQAnABAUAVQARARAAAWQgBALgDAKQgGAWgOAAQgGAAhEAcQAigcANgQgAA+ioQgYgQglAAIgIABQA/gfAfgKQATgGAPAAQAZAAAaAXQAaAYgNAAQgBAIgLANQgWAZgwAWQgSglgXgQg");
	this.shape_224.setTransform(47.5,-60.6);

	this.instance = new lib.Symbol1handss("synched",0);
	this.instance.setTransform(77.3,-74.1,1,1,5.7,0,0,81.4,-74.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78}]},1).to({state:[]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_104},{t:this.shape_103},{t:this.shape_102}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105}]},1).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111}]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132}]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141}]},1).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147}]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_167},{t:this.shape_166},{t:this.shape_165}]},1).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168}]},1).to({state:[{t:this.shape_167},{t:this.shape_172},{t:this.shape_171}]},1).to({state:[{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173}]},1).to({state:[{t:this.shape_179},{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_182},{t:this.shape_181},{t:this.shape_180}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183}]},1).to({state:[{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]},1).to({state:[]},1).to({state:[{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},1).to({state:[{t:this.shape_194},{t:this.shape_193},{t:this.shape_192}]},1).to({state:[{t:this.shape_197},{t:this.shape_196},{t:this.shape_195}]},1).to({state:[{t:this.shape_200},{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_203},{t:this.shape_202},{t:this.shape_201}]},1).to({state:[{t:this.shape_206},{t:this.shape_205},{t:this.shape_204}]},1).to({state:[{t:this.shape_209},{t:this.shape_208},{t:this.shape_207}]},1).to({state:[{t:this.shape_212},{t:this.shape_211},{t:this.shape_210}]},1).to({state:[{t:this.shape_215},{t:this.shape_214},{t:this.shape_213}]},1).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216}]},1).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance,p:{startPosition:0,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[{t:this.instance,p:{startPosition:1,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[{t:this.instance,p:{startPosition:2,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[{t:this.instance,p:{startPosition:3,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[{t:this.instance,p:{startPosition:4,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[{t:this.instance,p:{startPosition:5,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[{t:this.instance,p:{startPosition:0,scaleX:1,scaleY:1,rotation:5.7,x:77.3,y:-74.1}}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance,p:{startPosition:0,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).to({state:[{t:this.instance,p:{startPosition:1,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).to({state:[{t:this.instance,p:{startPosition:2,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).to({state:[{t:this.instance,p:{startPosition:3,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).to({state:[{t:this.instance,p:{startPosition:4,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).to({state:[{t:this.instance,p:{startPosition:5,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).to({state:[{t:this.instance,p:{startPosition:0,scaleX:0.999,scaleY:0.999,rotation:20.7,x:86.4,y:-132.9}}]},1).wait(1));

	// Layer 1
	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AkAG+QgpgjAAhLQAAhEgEgQQgLgTgLgbQh+ksAAhHQAAhSA0grQBOhADlgoQEMgwBkgPQBbgNApAAQAIAAAMACQAMACAGADQACgFAAAKQAAACgOAKIAKAAQgHAEgOAjQgQAogqAhQAEAAAMgBQgBALgMADIgeAEQhgAPjBAxQjdA6hBAjQAFAXAJAlQALAqAGAOQApBgATAdQAIAMAIAAQA2AAApAjQAhAcAAAZQAAAeATAdQAUAdAAAPQAAASgVAVQghAjgYAmQgXAkgOADQgSgDgQAAQgSAAgXAUQgWATgMAAQgqAAgdgZg");
	this.shape_225.setTransform(88.8,39.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AjZGUQgcgRAAgeQAAgSgQgKQgTgMgHgaQAHgFgDgLQgEgUgwg5QgUgYg2hZIhEhwQgbgtgRg3QgNgvAAgdQgBgmAbgoQAagoAegOQAdgOBDgUQBDgTAqgFQAqgFCagMQCZgNCnAIQAvAAAsADQBgAFA9APQAGAEAFAaQAEAZACAhQADBEgDAQQgBALgHAEQiEgMh6gIQiBgIg9AAQhBAAhuAHQiiALhQATQAgA6AqA5QBQBrAlA1QAVAfAcALQAkANAHAGQAtAlAVAhQASAcABATQAAAUgOAKQgMAIgMAFQgKADgHAIIgEATQgDARgFAGQgGAGgUAKQgTAJgEAAQgFAAgYAVQgXAUgVAAQglAAgYgPg");
	this.shape_226.setTransform(84.8,36.9);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AlhFUQgcgxguhnQg0h1gagzIgvhlQgIgTgOgMQgIgFgFgCIgbgOQgOgHgHgJQgggqgCgVIgBgeIgRg4QgJglgHgIQgbgigHgRQgGgQAAgeQAAgMAKgNQANgSAZAAQAfABAQAPQAfAcASAKQADACAKAWIANAcQAEAJAKAJQAKAGAhAIQAdAGAFAAIAegCQgLhMAlgpQAdgfAmgBQAPAAAKAHQALAHAAANIgICQQgBAgATBcQAPBNANA1QAWBVAtBwQAwB4AcAYQDVhcBGgmQBgg0BnhVQAOgEAdgZIA6g2QBRhLA6AAQAyAAA9BGQA1A8AAATQgOAbgkAVQhAAmiUBrQiUBrhrA5QhrA5hbAmQhZAnhAAAQiLAAhaiXg");
	this.shape_227.setTransform(69.8,-2.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AifGYIgigMIgXgQQgXgQgbgbQgqgygig4QhHiMgVg5QgshyAAhnQAAggATg9QAJgfAKgZQAigqAfgUQAggTAqAAQAOAAAAAOIgBAHQBIAXAAAlQgBATgHATIgSAjIgkBNQgKATgGAAQgGAAgFgDIgFgDIA6CKQgFAAAvBMIAzBUIA5hWQAmg9BLisQAthmAmgGIATgJQAYgLgBAAQAWgOAkgDQAZgDAVAAQBnAABGBAQBCA+AABTQAAAfgPAXQgPAYgWAAQgGAAgDgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAQgNAGgKAAIgTgDQgOgDgKAAQgLABgMAGIgNAHQgHAAgPgEQgNgEgIgEQgOASgnBGIgkBDIgFAKQgTArgLAJIglA4QgiA0gwA0QgyA4gKAJQgLAJgpAKQgTAFgSAAQgTAAgSgGgAG+heIAAgBIgBAAQAAABAAAAQAAABAAAAQABAAAAAAQAAgBAAAAgAEokyIACABIABgBIgDgBg");
	this.shape_228.setTransform(160.5,26.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgpFgQgqgUgtg3QhThli7luIgGgHQgDAOgNALQgNAMgQAAQgkgOgQgbQgFgIgWgSQgQgNAAgPQAAgKAKgTQALgTAWgHQAVgHAMgHQANgGALAAIAIgBQgDAAAXgOQAagMAPgDIA/gHQBAAAArArQAWAWANAWIASAPQAXAVARAOQAGAFAGACQADAFAAAYQAAAHgDAJQgGAMgLAJQAeBOAGAMQApBYA/BjIANAUQAogjBihPICeiEIBmhfQBChDArgzIAAgBIACgCIAAFMIiXCLQh6B9hpA4QhIAngyAAQgzgBgjgQg");
	this.shape_229.setTransform(78.7,20.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("Aj2IEQjMgjhmgsQjVheg6gkIgbgRQhvh7BvhVIAGgBIBrA6QAaAOB1A1QB0AyAOAFICmA0QCPAnBmAAQCOABCEh3QCFh3CrkYQgCgJgFgKQgEgMAAglQAAhjBthZQARgOAxgcQAOgHAQgRIAXgaQAKgJATgKQAUgMAHAAQAbAAAQANQAQAOAAAaQAAAQgIAQIgrBHQgWAlgHAVQgHASgHAuIAqgVQARgHAOgBQAoABATATQAMANAAALQAAAagkATQguAVgYAPQggAUhUCEQhvCog+BNQiUC4iQBMQhvA6h+AAQg/AAimgdgAMEl/IABAAIAHgMIgDgCQgBAIgEAGg");
	this.shape_230.setTransform(210.7,-18.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("Ak4IIQhOgVgNhNQgNhIAihaQAghWA7hmIAAAAQAjhABMhwIAAAAIBEhkQABgDADgBQgBgEADgEIACgDQAAgeARgZIABAAQgMgIgDgQIAAAAQgDgLABgLQABgQAJgPIAAAAQAGgLAJgJIABAAQAagYAkgDIABAAIARgBIAGACQgRgbgBgdQgCglAsgHQApgJAfA2IAAAAIAPAdIABgZQAAglARgVQARgVAdgBQAYgBAPAgQALAXAAAbIAAAAIACAnIAAADIgEAWIAAACIgDAZQAAALgFAQIAAAAIgEALQABAIgfA3QggA6gHAOQgCAFgEACQgGARgIAOIAAAAQgUAggdAMIgBABQipDBhqDuQBFgJCKgpQCjgvCJhKQAFgCAFABQAFACACAEQADAFgCAFQAEgBAEAGIALAVIANAVQAUAcARATQAIAKAAAcQgKAKgPAGIAFABQAFACACAEQACAFgBAFQgCAFgFACIhbAoQhbAnhoAfQhnAfh2AaQhHAPg1AAQgoAAgegJgAFFC3IAAAAIAAgBIAAABgAArheIAAAAIgBAAgABIh8IAAABIABgBgAg/inIAAAAIAAgBgAhkiyIAAAAIABABIAAAAIgBgCIAAABgABTm3IABAAIAAgBg");
	this.shape_231.setTransform(100.7,-29.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#000000").s().p("ApxLMQgOgkgGgEQgGgFgKgCIgOgEQgFgCgJgPIgKgNQgBAAgNgyQgNgygBgKQAAgSAIgyQABgDASglQASglANgPIAvgxIARgSQApggALgGIAGgJISgvSIACgCQABgBAGAAIALAOQAVAQAWAmQAbAvABArIgJAJQgIAJgFAEIAFACQACACAAAGQAAAGgBACIgDADIxSOpQAFAxADALIAoBOQABA+g/AAQgNAAgWgKQgMgFgHgGIABABQADADABABQABACgBgBQAAAAgBgCQgCgCgDgDIgIgKIgcgkQgMApgPBXQgHAsgXAKQgNAFgHABIgOACIgBABQgIAAgXgPg");
	this.shape_232.setTransform(70.7,62);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#000000").s().p("ANwINIgMAAIAAAAIgJgBIgBgBIgFAAIgEgBIgEgBIgDgBIgEgCIgCgBIgEgCIgLgJIgbgXIAAAAQgWgUgXgRIAAAAQgcgVghgGQgZgCgZgJIABABQgZgIgXgOIgRgKIhHgBQgmAAgmgDIg4gEIgYgCIg7gFIgBAAIg7gHIAAAAIg7gHIgBgBIg6gKIAAAAIg4gKIAAAAIg2gMIg2gNIgBAAIg2gOIAAAAIg0gOIAAAAIgzgQIgBgBIgygRIgBAAIg0gUIAAAAIg1gWIABAAQgbgLgZgNIAAAAQgagMgagOIAAAAQgigRghgUIABABIgqgZIAAAAIgpgZIAAAAIgogbIgogcIAAAAIgngcIglgfIAAAAIglggIAAAAIgjgiIAAAAIgkgiIAAAAIgzg3IghgmIAAAAQgXgdgLgkIAAABQgKghABgjQABgjARgiIAAAAQARgfAdgSIABgBQAhgVAmgHQAFgBAEADQAEADABAFQABAFgDAEIgDAEQALgCAPAFQAgAKAAASIAMAKQAMAMAVAYQAKAMAJA/QAAAJgFAMQgHAPgLAEIAAABQgDAEgKABQG5GgK2A4QCIALCRgDIAAAAQBbgNBeAcQBeAcBHBDIAAAAQAdAbgBAXQABAagdATIgFACQgLADgKgBQAEAQAAARQgBAogbAhQgCADgDABIgCAEIgBAAQgFAIgIAHIgBAAIgJAFIgKAEIgDABIgKAAIgBAAgAPIExIAAAAIAAAAgAgwEWIAAAAIAAAAgAj/DZIAAgBIAAAAIAAABgAu2kFIAAAAIAAAAgAvMmyIAAAAIAAAAg");
	this.shape_233.setTransform(218,38.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#000000").s().p("AjwH5IgUgHQgGgDgOgUQgPgTgHgDQgogSgYgeQgbgggFgsIgCgBQgsh2gjiIQgfh3gCgmIgDgyQAAhJAcgxQAgg7BTgsQC6hkH8gyQBbgFBZADQAEAAADACQADAFAAAGQAAAGgDADIADABIgFAVIAIBeQAAAGgCADIgGADIAGADQADACAAAHQAAAGgDADQgCABgGACQhjAOjoAyQkKA6i6A1QAGB4AlB1QAdBkAfAtIgFAGQAqAMAiAbQAxAmAAAWQgCAHgFAIQgLARgSAGIAGAZQADAOABAGQAAANgMAMQgNAOgVACQgHALgLAcQgTAXgzAAQgFAAgUgHg");
	this.shape_234.setTransform(88.2,40.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AoNInQgXgbgXgHQgqgLgfhIQgfhHAAhNQAAhvBxiVQBgh7CeiEQCgiFEhhcQChg0EThCQAMAIACAJQAbAdAbA2QAZAwAGAcIgEABQgEgBgDgCQgEAFg2APQiwAzh3AnQh+Arg/AdQghAPhaAyQhTAthpBiQiAB1g2BtIgEAJQALAbABAAIAFAAQgEADAAAFQABATgJAPQgNAUgbAFQADACAlA9IAsBDQAEAGADAMQADAMAAAIQAAAtg9AXQgqAQgsAAQgsAAgTgWg");
	this.shape_235.setTransform(74.3,48.3);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAHErQg1gKgUgKQksiOgNgIQAKgEhog+Qg8AZgjACQgTABgQgEQgKgBgPAUIg+BhQgEAGgfAUQggAVgKABQgSABgOgIIgBAAQg0gdAXg6IAAgBQAGgOAYgtQAAgiAggYIAcgTQAQgLAGgJQALgSAKgIIAVgMQgZgPgZgNQgMgJAAgfQAAgpAbgKQAtgFAigGQAtgHAWgSQAigeAIgEQARgJArgLQAYgGASAAQAKAAAUAHQAXAJAKAJQA9A2AjAcQApAiAuAgQCPBgAJAJQAQACBjA5QB9g6CmhzIC/iIQBag0AfgNQAmgRAmAAQAoAAAHAKQACAEgFAOQAKAPALBXQAAALgMARQgKAMgMAKIAEADQACABAAAHQAAAIhMBBQhZBKhjBGQkoDPi1AAQgOAAgvgJg");
	this.shape_236.setTransform(52.1,17);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#000000").s().p("AjIHsQhUghg2hNQg1hKhCiLIh/kBQgCgEABgEIAKAFQAYAJgYgKIgKgEIAAgBIABgCIgLgEQgBAAAAABQAAAAABAAQAAABAAAAQABABAAAAIgUgKQgOgHgYgVIgBgBQgLgMgJgMIAAgBQgYgjAMgpQgKglADgmIAAAAIAFgtQgOgPgIgSQgRgnANgmIAAgBQAHgTAPgJIABAAQASgJATAIIABABQAkARANAoQAQACAMAPIABAAQAJAMABASIAAABQABATgEATIAdASIAAAAIAtAYIAAgBQANAGAPAAIADABIAIABQADgfAKgeIAAAAQAIgXASgQIgBABQAOgQATgIIABAAQAMgFANAAQANgBALAHQAVAHAIAUQABADgBAEIgKAoIgNAmIAAAAQgJAegHAfIAAgBIgIAoIABAAQAEADABAFIACAKQAOA8AQA+IAAAAIAHAYQAEACABAFQACAFgCAEQAVBCAcBEQAhBOAtBIIAcAtQBNgbBHgkQBMgnBNg2QBNg3A1grQA0gpAngnQApgnAfgZIAAAAQAggcAygNQATgFAVAFQAkAJAqAoQBAA+AHAgQABADgBACQgBADgDADQg/AwhSBEIg7AwQh4Bjh9BMQh+BLh+AzQhOAhg/AAQgoAAghgNgAp7icIAAAAIgBgBIABABgAmJigIAAAAIAAAAgAohkDIAAAAIAAgBgAppkSIABAAIAAAAIgBAAgAqynPIABAAIAAAAIgBAAg");
	this.shape_237.setTransform(74.4,-2.3);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#000000").s().p("AjtHPQgcgLgQgPQgPgPgQgiQgRgigQgrQgQgrgPhFQgOg8gThyQgOhYgFgnQgMhYADgGQgFgFgMAAIgLAAQgaAAgVgcQgXgdAAgmIABgXQAAgSALgdIAGgOQArg3BHgXQgLADALgEQApgOAaAAQALAAAOAFIAKAEQAJADAHAAQAEAAAMgEQAKgEAFAAQBLAAAnBAQAdAugBAzQAAANAKAEQAOAGAJATIAGAWIAFASQgBAagPANQgOAMgjABIgMBQQgHAvABAqQAABeAEA7QADAiAIA2QBKgSBhg+QA8gmBvhVQBqhPArgbQBKgsAnAHQAFAIACAEQABAFgDAFIAAABQATAcASAkQAWApAAARQAAAKgLgCIALAHQADADAAADQAAAgiPBwQhzBahNAvQh8BLh1AlQhTAZgwAAIAAAAQglAAgcgLg");
	this.shape_238.setTransform(89.3,2.5);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AkYIxIAAAAIgTgBIABAAQghgCgagQQgJgFgGgIIAAgBQgdgqgGgyQgGgtAHg2QAMhcAihwQAUhGAwh/IAAAAQATg0AYg9IADgEQgBgEABgEIACgEQgHgdAMgcIAAgBIAAAAQgNgEgHgPIAAAAQgGgLgBgLIAAAAQgCgPAEgSIAAABQADgNAIgLQAUgcAjgMIABAAIATgFIAGABQgZgWgHgcIAAAAQgKgkAqgRIgBAAQAngSArAuQALAMAJAMIgEgXIAAgBQgIgkALgZIAAAAQALgYAcgHIABAAQAKgDAKADQAMAFAMAPIAAABQAPAUAGAaIALAlIAAADIACAXIAAACIADAYIAAABQACAKgBAQIAAAAIgBAMIAAABQADAHgSA9QgSBAgEAQQgBAFgEACQgBASgGAPIAAAAQgIAkgaATIAAAAIgBABQh3DcgyD4QBbgbB2gzQCchDB/haQAEgCAFAAQAFABADAEQACADAAADQAhAUAiArQAlAuAAAbQAAALgUAFQABADgBAEQgBAFgFADIhVAzIAAAAQhVAyhkAsQhjArh0AqQhxApg7AAIgIAAgAhHhpIAAAAIAAgBIAAABgAjniaIABAAIgBgBIAAABgAi/lsIABAAIAAAAIgBAAgAgxoFIAAAAIAAAAg");
	this.shape_239.setTransform(101.4,-18.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#000000").s().p("AlmEsQhCh6AAjRQAAglAjhHIAAgCIAJgZIAig2IALgSIgDAHIABgDIBGhlQAZgfAkgcQAwglAZADQAOABAMAIQAFAAAXgEQAWgFAFAAQAIAAAKADQAKADAGADQABADAgAfQAPAPAAAVQAAAUgIANQgHAKgTATQhNBDg9BJQAYgDAOAAQAaAAAQAQQAPANAAAPQAAAQgGAOQgEALgDAAQgDAAgiAUIg5AhQgNAJgEAGQgCAFAAAHQgJAjABANQAAAaAGAZIALAjIAWAyQCRguByhVQBPg7CeidIABgCQACgCAGAAQAFAAAIAOQAMAKASAjQATAoAAAcQAAAagPAZIhGBbQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABACAAAGQAAAKgCgEQhrCPimBVQiFBEhcAAQiEAAhHiBg");
	this.shape_240.setTransform(94.1,5.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("ApFHFIgWgJQgYgKgCgBQgDgEgJgSIgJgSQgHAAgBgaIAAgjQgBg/AkhKIBeiuQA5hOAVgWQAlgoAkAAQAKAAANAEQAOAAAVgIQAWgIALAAQAZAAAXAhQAVAdAAATIgFAUQgGAUgEAGQgIAKgrAuQgxA0gRAUIgFAGIAgAHQASADAIAAQBEAABngmQBqgoBLg4QCLhkBthbQCZiACMiNIACgDQABgBAFAAQAIAAADAGIACAHQAPAvAKAvQAKAtAAASQAAAGgCABIgEADIAIAEQAFADAAAEQAAAHgBABIgDADQnoGTkhCrQjrCKiKAAIguADIgGAAQgiAAAAgGgAllEqIABABIAAgCg");
	this.shape_241.setTransform(77,35.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#000000").s().p("AnwKHQgYgXAGg9QABgIAJgSIgUAGIgBAAIgSAFIgDABIgJACIgDAAIgKACIAAAAIgCABQgTAEgVACIABAAIgTADQgqAIgrgJIgBAAIgJgCIgCgBIgBAAIgJgCIgagFIgBAAQgmgLgOgsIAAgBIgHgZIAAAAQgFgTAJgLIACAHIAAgGIAAgBQACgEADgDIADgBIACgBIgDgeQAAgQASgMIAAgBIgBgCQAAgEACgDQAUggAagKIAMgDIApADIgBgBQAQAEAQACIABAAQAPADAQABIADAAQANgBAVgCIABAAIAagEIAmgHIABAAQABgDADgBQADgCADAAIAwAAIACgCQHylQIlnOIAsgsIAQgPIAcgeIAFgFIAJgJIAOgQIAeggIAGgGIAKgMQAEgEAFAAQAFAAAEADIADAFIACgDQAHALATBFQASBCACAcQADABADACQADAEAAAFQABAFgEAEQoYIhqMGqIgDAIIgEALIgGAUQgMAsgFAtIAAAAQgCAQgRAEQgVAGgQAAQgbAAgPgQg");
	this.shape_242.setTransform(59.7,55.2);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#000000").s().p("AlAGyQgXg3AAhKQAAg5AGgtQAPheAQh1QAFggAIgiQAJghACgPQADgcAJgUIAHgPQgTgbgYgcQgwg4gcgLQgegMgRgQQgRgRAAgVQAAgCAIgMQAHgMAAgDIAAgaQAAgPAFgJQAEgIAQgLQAOgIALgEQAfgGAIgJQANgOANgGQARgIAUAAQBhAABoB9QAqAyAbA0QAZA1AAAfIABAZQAAAMgDAEQgDAQgPAkIgfBRQg0CHgXBpQDFjqA8g1QAogiAigMQAdgLAsAAQAJAAAfAGQAkAHAYAIQAqAMADAGQACAEgBAHQgBAHgEAEQAJAIADAHQgLAHgiAyQgkAzgCAAQjPDxhhBdQieCahXAAQhhAAgmhdg");
	this.shape_243.setTransform(95.9,0.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AqzDfQhXhKgzhYQgvhPAAg4QAAgvAigoQAngvA/gKQAGAGABAEQACAEgBAHQAHALAMAgQAPAmAFAbQAHAhAGATIAFAPQAAAGgBgBIgEgCIgKgGQDzD0E1AAQA7AAA1gPQA6gPAmggIAygwQA0gxATgWIBLhTQBXhbALgbQAIgTACgUQABgNADAAQABAAAIgSQANgXATgUQAigjAygZQAcgNAmgPQAZgMAogXQAsgSBcAAQBrAAAABLQAAAfgoAOQg2ANgeAMQgPAHgPANIgYATQAlgEAbARQAaASAAAZQAAAWgQAQQgbAZg8gFQgrgFgUAFQgYAFgGAGIhEBZQi9D2iNBdQiTBijFAAQk9AAjhjDg");
	this.shape_244.setTransform(202.3,9.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AigHEQk4gpjVh5Qi6hqgghyQgRggAAgxQAAgpAcg6QAeg+AbAAQAFAAAJAYQAPAmAOAaQA8BuCMBlQAwAiB/ArQC4A+CuAAQCrgSgSAAIAxgRQA8gXA7geQC9hfB4iDQhNhyhwiLQgDgEgFgNIgEgOQAAgMAJgUIAKgNIAFgDQAEgEAAgHQAAgGANgQQARgWAYgHQAHgCAYgDQAVgCAEgCQAGgEALgCQALgEAHAAQA1AAA1AxQBLBEAyCTQAYgjASgNQAPgKAQAAQAPAAAWAKQAVAJAAAFQAAADAIAKQAIAKAAAKQAAAHgGALIgiAzQglA3giA4QgfAygLAOQgOAQgJAPQgVAhgxAuQgyAugLAMQhZBkjRBGQjRBFhwADQgdAFgYABIgCAAQgZAAhLgKg");
	this.shape_245.setTransform(211.9,6.1);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#000000").s().p("AM+GZQgNgFgmgFQhKgLh2gFQgFAGiuAEQiRAAh3gOQhugNjEgnIgzgMQijgyg6gZIiVhKIhTgvQg6gmgfgXQglgchBg1QgjgggXgWIgfgfIABAAIgigkIgBAAQgXgcgLgjIAAAAQgMggABgjQAAgjARgiIAAgBQAPggAegTQAXgRAZgJIAJgEQAKgDAGAAQAKAAABAJIgCAMQAoAYAVBLQAKAmADAiQAAAGgCAAIgEAAQEbDtFSBoQEOBUFEAAIDRgGQASgOBQgaQBUgbAiAAQBIAAA9AZQBCAbAAAnQgBAQgHAOQgOAbgcgGIADAPQADAPAAAGQAAA5gdAnQgaAhgbAAQgLAAg7gUgAvBigIABAAIgBAAIAAAAg");
	this.shape_246.setTransform(219.6,28.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#000000").s().p("AiAFWQjbgpi3hUQjfhliDiOQhrhzAAhNQAAg4A0g2QAxgzAmAAQAHAAACAGQABADAAALQApBRAMAZQAOAgAAAPQAAALgBgFIgFAAICfBpIA/AlIgKgGIDHBlQAhAQBmAmQCMAxChAaQAgAFBRAFQBGAFANAAQA/AAAMgCIBYgKQAEgBBZgSQBggUAkgBQgBgggHgbQgFgXgCAEQg3hfgRghQgcg1AAgaQAAgKALgXQANgZARgTQAXgaAPgFQALgEArAAQAFAAAKgDQAJgFAFAAQA2AAAdA2QAeA9APAsIAqCOQATgWAZgQQAWgRAFABQAcgBAPAWQALAOAAAVQAAAGgBAEIgTAgIg6BYIgyBXQgBANgdAUQgcASgMABQgeADg7AQQg3ARAAABQAAAMiDASQiGARhtAAQjRAAjDgmg");
	this.shape_247.setTransform(216.4,24.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#000000").s().p("ALJJfQhFg+hAgXQgygLAAgBQAAgGgZgKQgcgJgHgEQgFACgGAAIgtABQiNAAhtgTQjPglj4hvQiehHh4hgQhthXhZhzQgug9gviKQgsiBAAg0QAAhCAkgzQAlg2BBgWQAFALAAAJQAEAJAKAyQAKA2AAATQAAAygTATIAAAAQBFCgCHCPQCtC1DfBPQEGBeC0ASQBCAHBUgBICUgCQBYAABsAtQB9A1AABCQAAAQgJARQgPAbgfgMIADANIACAUQAAArghAiQgcAdgWAAQgmAAgVgTg");
	this.shape_248.setTransform(207.6,49);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#000000").s().p("AC0JQQgfgRAAgUQAFgQgDgIQgGgLgtgeQgXgQhBgoQg7gkgUgOQi5iBg/gzQjKinAAhcQAAgYAJgtQAKg3BMhXQBIhTCghiQCghhAUgGQASgGBkg2QAHAAADADIAEAGQgDAIgJAKQAUAMAUAkQATAgAAAPQgBAHgEAFQgIAGgXAEIAHAEQACACAAAHQAAAGgBABIgFAEQhCAfiMB3QiJByhFBOQBGBiDWCdQBuBQBnBBQB/gEBcA6QBOAyAAAsQgBATgdAKQgkANgJANIgEATQgEAQgHAGQgHAFgbAKQgbALgEgBQgHAAgfAVQgfAVgcAAQg0gBgigSg");
	this.shape_249.setTransform(116.6,50.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#000000").s().p("An4K6QgQgUgTAAQgUAAgOgLQgNgKgPgcQgfgsgJgSQgNgbAAg9QAAhWAvhDIAhgqQAPgRAAgJQAAgOBPhpIBxiQQAagiA2hAQA2g9APgPQCSioFTjFQCBhKBwgzQBqgxAbABQAKgBABACIACACQABACAAAGQAAAEgEAEIgHAFQALANAAAPQAAAygQAyQgUA9glAVIADABQACAEAAAFQAAAHgCACIgGACQkxCAi+CmQi4CjkBFnQADAMAMAaQALAWADAEQATAWATAcQASAcAAAHQAAAYgWAOQgTAMgXAAQgQAAgVgGQglgMgOgaIAFCRQAAAdgWAUQgQAPgKABQgVAAgQgVg");
	this.shape_250.setTransform(74.7,61.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AnhJRQgRgUAAgPQANggAAgHIgJgWQgKgYgEgTQAGgXAAgKIgIkVQAAiAAJhCQAMhSAfg2QAgg3BAgvQA7gsBwg3QEFiBDYg/QCTgrBCAAQAGAAAFARQABgFAAAKQgcBugNA7IABAAQABACAAAGQAAAGgEADQgBABgGACQikASj4BoQjSBZheBFIgbAQIAABuQAAAlAGBZIANDIQAwAVAXBDQALAiABAeQAAAmgeAMIgaAJQgQAFgIAHIgOAYQgNAVgOADQgLADgSgBIgYgBIgVAPQgXAPgQAAQgqAAgZgeg");
	this.shape_251.setTransform(88.9,51);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AlGIUQglgqAAhEQAAhtA8jgQAqiZA/i4QgRgXgTgwQgTgyAAgbQAAgIAFgPQAFgQAFgFQAHgGAOgTQANgTANgMQA7g4ALgIQAVgOAlAAQAUAAAgAuQAhAzALAEQAhAOATAgQAPAaAAAcQAABSgNAbQhBCOgWA+IhpFFQBchIB+h7QBthnAtg1IACgDQAAgBAGAAQAEAAAEADQAEAEAAAHQAAAGgDADIgEAAIBMCKIAGAEQACADAAAGQAAAKgCgBIh5B0QibCYhHBAQhRBLhJApQg8AigeAAQg8AAglgrg");
	this.shape_252.setTransform(106.6,-7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#000000").s().p("AnZK+QgfgYgFAAQgYAAgUgQQgSgPgHgSIgXhZQAAhpCshaIOlwsIADgCQACgBAGAAQAGAAACAGIABAMIAOAnQABAEgDgCQAJAOAKASQATAjAPA/QAOAHgBAOIsrP5QAAAogWAtQgZAxggAIQgVAFgRAUQgYAcgGAFQgTAOg5AMQgKAAgfgZg");
	this.shape_253.setTransform(83.2,57.9);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AkpHFQhmgogtgyQgrgvAAhBQAAgKAFgeQATg5ArhOQAWgoEQlzQgLiJAkhHQAghABDAAQADAAATAFQATAFAFAAQAOAAAegEQAbgBAQAJIAQAPQAMALALAFQAzATARAUQAKAOAAAYQAAA5hsACQACBXgIAeQgHAggkAuQg8BIgyBGQhgB/hxC1QCcBDCgAoQCqAqDbAXQALAEAAAIQAAAHgEADIgEACQgYBggNAjQgMAdgTAVQgBAKgEACQoChPi+hMg");
	this.shape_254.setTransform(90.2,-47.2);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgZKNQjdgjgsgUQgtgVghgSQghgTgRgaQgWglAAhAQAAgkAShPQAZhnAth8QA/isBjkdIgBgCQgBgDAAgHQAAihAWg6QAbhGBTAAQAFAAAVAGQAUAEACgBQAcgEAKAAQAeAAAPALIAXAbIAjAMQAjAMAEADQAKALAGANQAEAJAAAEQAAAvgZANQgOAHhGAGQAEApAAALQAAAogMAgIgqBnQhfDqiCG1QCnArA7AJQBwAQDcAAIAEADQAEAFACAKQAXAfAZBQQANApAIAiQAAAKgDgBIADAIQgBACgXADQgVADgJgBQjBAAjbgig");
	this.shape_255.setTransform(99.2,-62.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#000000").s().p("AlJI0QhQguAAhrQAAgdAahvQAgiHA2irIAxikQAghpAHgEQAAgCACgFQABgCgGgBQgGAAAAgjIABgrQAAiFA1gvQAcgZAyAAQAFAAAWAEQAUAFACAAQAegGAHAAQAfAAAOAMIAYAbIAjANQAiAKAEAEQALAKAFAOQAEAJAAAEQAAAvgYAMQgOAIhHAHQAFAuAAALQAAAag/DIQg0CghxFLQBEAECgABQA9AABfgGQBrgHBOgKQAAAAAAAAQABABAAAAQABAAAAAAQABAAABAAQADADAEANIAAABQACAegDA4QgDBJgJAWIADADQACAEAAAFQgtANivAVQjAAWhvABQiLAAhFgng");
	this.shape_256.setTransform(91.5,-48);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#000000").s().p("AFJSeIgFgDIq46CQgOgkhSiqQg2hwAAgdQgBgjAWgTQAMgLAbgIQAQgFATgWQAQgTAagBQgQg7gOhrQAAg/A2AAQAVAAARAXQAZAjAaBuIAoCcQAGADAWASQAFAAAIARQAMAbAAA2IgGBAILEbwIgHAJQgDAEgCAAQgGAAgCgCIAAgBQgNAZg7AXQgvASgoAIIgEAAQgGAAgFgCg");
	this.shape_257.setTransform(92.5,-107.9);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#000000").s().p("ABAFBQgZgNgIgQQgGgOgYgMIgVgUQgRgOgTAAQgGAAg9ggIh0g8QhMgogkgVQgrgag5g1QgOgMgQgeQgUgmAAgfQAAg2ATgfQAZgqBHgbQCphAH6AAQCxAMASADIgCATIgFgBQAJAtAIBoIABAEQACAEAFgFIgBAQQglAAiAgIQiBgIgwAAQhSAAhfAGQiWAJhiATQB/BABQAhQAuARA7AWIAXgEQAWgEAHAAQBHAAA0AqQAoAhAAAVQAAACgKAPIgTAcQgLATACAHQAGAQAAAGQAAAOgRAOIggAXIgJAWQgJAXgGAGQgfAVghAAQgIAAgUgJg");
	this.shape_258.setTransform(88,29.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AijDRQjagTgegOQgpgUgOgWQgNgTAAgiQAAhGBNgrQBQguDTgxQBygbDCgjQEMgxAOASQAHAegcBSQgaBNgQAMQAKAQAJAmQAAAQgUAyQgVA0ghAKQghAKg4AaQg4AZhSACIgOAAQhVAAjGgRg");
	this.shape_259.setTransform(89.1,13.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#000000").s().p("AnuD1QAFgUAHgXQAQgtARgQQA1gwB8hZQCehuBhgsQB5g4AZggQAEgEANgYQAKgTASgSQAzgwAZgPQASgKAVAAQALAAAWAJIAgAMQAEABARAKQAVALASAHQAiAOATAOQAcAVAAAbQgEAdgHAPQgJATgVAXIgTAUQALAkgIAVQgNAjhcAiIgMB+IgCAKIAAgEQgZAokyCEQhsAvhoAZQhPATgrAAQiUAAAAiEg");
	this.shape_260.setTransform(102.4,0.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AlLH8QgvgnAAhBQAAg3BPiiQBPijCxkXQgDgKgJg6IgJg5QAAgqAYgVQAOgMAlgbQAJgIAtgYQA0gbAUAAQAiAAASASQARARALAqQAJAjAeAYQAXAUAAAsQAAAvgEAPQgFAUgdAoQjCEVhfCXQBIgtB9hgICdh1QALAIgBAJIAkA/QAbAuAAAdQAAAIgDADQgBADgHAEIADAQQkYDdiYBhQiGBUg1AAQgsAAgngig");
	this.shape_261.setTransform(104.9,-9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#000000").s().p("AlLINQghgrADg/QADg/A7jKQA8jHBDjMQgbgegNg5QgIglAAgjQAAgEAGgOQAIgSAJgGQAJgHAQgUQAPgVAMgIIARgMQAPgKAGgGQAQgPAXgKQASgIAGAAQAlAAAUAXQAVAVAWA5IAbALQAXALAEADQAXAVAAA/QAAAygGATQgDALgYAuQhOCVhwFFQB0hiCFiFQBthqADgBQAGAEAEAGIACACQAMAiAaAwIAiA6IAIgFIgHAGIAGAKIgDAEQAAAFgFAMQgGAMgDACQgYAThNBLQh7B3g8A5Qg2AzhJA2Qh6Bag3AAQg2AAgigrg");
	this.shape_262.setTransform(107.1,-6.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#000000").s().p("AnOGIQhXhlAAiGQAAi2C7hcQBeguBfgJQArAAAUAmQASAiAABIQAAAIgSAhIgRAlIAHAVQAIAWAAAEQAAAVgQASQgNAQgkAbIAKAWQBCgaEUk5QDxkRA4hRQAJAEAEAIIACADIAeBjQAWBGAAALIALANQgeBVjKDyQitDRhdBYQhCBBhaAsQhaAshAAAQh0AAhYhlg");
	this.shape_263.setTransform(85.2,34.1);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#000000").s().p("AnAJTIgZgHQgPAIgNAAQgzAAgogqQgjglAAgiQAAgFAHgSIAJgXQACgHgDgJIgDgPQAAgoAfgYQAkgbAIgTQAIgUAbgNQAbgNAnAAQAnAAAjAGIAqAGQAdAABwhOQBwhOCjisQCnivBsiCICNinQAhgmAEgSQACgGAJAAQAKAAAFABIgBAPQADApATAqQAKAVAJAOIAJACQAHADAAAHQAABHkFFLQjoEmhoBiQghAiiYB4QgCACgJACQgKACgUAPQgtAihJAbQhEAZgjAAQgGAAgagGg");
	this.shape_264.setTransform(76.5,44.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#000000").s().p("AoTFOQgxgpAAhXQAAiJA0iUQAnhvAwhKQAUgeBWgnQBagpA8AAIA9gEQAmAAAYArQAfA1AABoQAAAhgNAWQgNAXgoAkQgWAYgMAKQgUATgUAAQgNAAgIgFQg0A4gkBGIgbA9QDvgJD/g4QA8gNBgghQCJgwAsgMIADACIAAAGQAAAHgBABIgGAEQARAmASBFQAPA4ABAOQAIAEACADQgOAQgZAKQgkAOjIA3QiDAkifAVQixAXi9AAQh+AAg3gtg");
	this.shape_265.setTransform(87.9,-9.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#000000").s().p("AlRIGQgxgdgQglQgTgrgPg5QgPg3gCggQgCgagIjcIgHjWQAAicADgdQAHhGAhgUQAIgFAVgIQAQgGAGgGQAfgdAfAAQAIAAAUgMQAUgLAYAAQAdAAATAUQAaAdAAA+IgBAeQgBAIAHAJIALAKIAPAXQAGALAAAKQAAAvgXA7QgYA5gYAPQgHAvgIBUQgGBFAAAOQAABbAWCmQBXgiBAgfQBHgjBeg5QAYgOA5gmQBNg0AUgUQAfgfAUgMQAMgIADAAQAFAAAHASIBYCDQADAGAGACQABABAAAAQABAAAAABQABAAAAABQAAAAAAAAIg5A6QgaAbjxCsQiTBUg+AbQhdAmhTAAQgyAAgxgeg");
	this.shape_266.setTransform(104.1,-15.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#000000").s().p("AnYDjQhdhcAAi5QAAhLAbhEQAYg6AZgRQAYgRAigMQAogQAfAAQAKAAAMACQAGABAKAGQAHACAGAAIAmgNQBgAAAAB8QAAATgOAyQAPAIAGAPQAFAJAAAJQAAAegjAhIgkAaQABAKADAjIAzABQAqgBBogcQBJgVBFgWQBCgWC1hRQCThBAZAAQAGAAACACIABAJQAAAHgBAAIgCgBIAWDKQAFACACACQACADAAAGQABAUhbAtQhXAriBAwQk4ByiQAAQi4ABhbhag");
	this.shape_267.setTransform(83,7.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#000000").s().p("AATINQiYgqiXhDQiXhCghhAQggg/AAg/QAAg1ANgmQAMgjAohmQAphoA/hiQBAhiAPgVQAQgVAtg3QAtg3AbgQQAbgQBMgWQBLgVBGAAQBGABA/AgQA/AgAAAtQAAARgOAQQgTAXgjAAQhQgcgXgGIANAKQAYAUARAgQARAgAAAbQAABGg9AAQgMAAgRgIQgFAhgQAOQgRAOgoAAQgZAAgQgWQgQgWAAglIAAgQIgqAJQhXBvhHCFQhMCKgVBgICSA/QBOAeCqApQBUAUBbAQQBNAOBZAHQAyADAJALQgBAGgEAGIgFAEIANC3QACAEgBAGQgBAGgGAFQlAgdibgqg");
	this.shape_268.setTransform(86.2,-52.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAzKqQiqiTgohFQhPhjg0hkQhli/ABjcQgBiSA0ioQAqiKAlgvQARgWAfggQgGgFBYgxQBYgxAZgIQAYgJAvgCQAvgCAnAPQAvATAAAdQAAAdgVAUQgWAUgdAAIghgBQgfAAgTACQB1AvAABPQAAAZgTAPQgUAPgggEQAFAXgKAaQgQAoguAAQgWAAgUgTQgZgVgCgjIgwAdQgfBagOAvQgYBSAABmQAABpAyB1QAlBVAnAyQCACkAjAiQArApDqC0QAAADgDAEQgDAFgDABQgDAWgtA3QguA2gqAiIABAKQgBADgHAAQgYAAikiKg");
	this.shape_269.setTransform(96.3,-74.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#000000").s().p("ADvP+Qpwq6AAr4QAAh5AGg4IAGg0QAAgKgLhnQAAhXAng5QAigzAsAAQAKAAALAHQALAFAKABQAFgBAPgFQAPgEAIgBIAaAFQBqg7A0AAQAgAAAcARQAjAUAAAiQAAARgMAYQgSAkggAAQg1AAgeAMQgrARAAArQAAAGALALQAMAMACADQAIAVAAASQAAAYgKAXQgRAqgDAKQgeBhAADqQAAEkB2EVQB7EoEGEgQADAHgFAFQADAbgtA1QgoAvgqAcIAAAHQAAADgHAAQgIAAgFgEg");
	this.shape_270.setTransform(96.4,-93.6);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#000000").s().p("AFBSoIgCgFQgJAAgFgDIgEgEIqT6TQgxh4gVgsQgXg5ghhAQgQgggBgaQAAghAQgUQANgQARgEQAPgEAJgGQAIgFAIgMQALgPAQgEQAKgCASgBIgPhUQgLhJgBgKQAAgVAMgTQANgVAWAAQAeAAALAQQASAaAEAOQAEAJA/EFQAzAfAABZIgHBAIKbb7QgEALgHAGIhQAoQhNAngCAAQgGAAgEgFg");
	this.shape_271.setTransform(94.7,-108.2);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#000000").s().p("AnyK3QgMgSgJgUQgEACgKABQgQAAgWgQQgfgXgFgpQgBgOgGgXQgHgXABgGQAAgpAlgpQAqgtBkg7IPKwJIALgEQAFABAEAPQAXA5ApBXQAEAFAAALQAAAGgCADIgGAIQAHACAGAOItSPgQgCATgLAjQgOAugNATQgIAKgOAFIgdAHQgKACgqAnQgnAjgmAAQgjAAgPgOg");
	this.shape_272.setTransform(81.3,56);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#000000").s().p("AliKOQgOgHgOgJQgVAWgigFIgSgDIgJgCQgQgIgKgQIgMgQQgFgFgEgHQgqgSgFguQgEgjAIgjQAHgcALgZIAVgzQAOgjAbgYIA5h+QgCgJAFgFIAGgDQCik+ENjqQBGg9BOgyQAvgeAwgcQBkg5BtgmQAEgBADADQADAEAAAEQgBAFgDAFIAKAKIAEAQQgKAFAHAOIAaAyQATAlAWAfIgMAGQAXgBgPANQggAcgmAUQhHAkhAAsQg/Apg8AtQg7Asg0AxQg0AwgsA2QgoA0goA4QgnA4ggA8QghA8gYBAIgYBBQAVAygEA1QgBARgNALIgOAMIgLAIQAABFgxAwQgLAMgPAIIgSAGIgCAAQgNAAgMgFg");
	this.shape_273.setTransform(87.2,51.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#000000").s().p("AmpJYQgXgdAAgdIAMgwIgHgVQgJgcgGglQAGgsAAgKQgHgfgGgqQgDgZgOj/QAAi/AjhOQAbg+Bqg9QBqg9CJg0QCHg1FbhMQAGAIABAHIAAACIA/CTIgDAEQAFAAAAAKQAAAGgCAAIgFAAQieAwh+AsQjuBTjDByIgFBwQAAA0AEBIQAFBVAGASIASBYIgBAJQAAAFALAJQAQAUAVA3QATAyAAA2QAAAggNAPQgNARgjAHQgSADgOAiQgNAhgYAAQgFAAgMgEQgMgFgFAAIgUARQgVAQgIAAQgnAAgagig");
	this.shape_274.setTransform(96.7,49.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#000000").s().p("AkoHhQgUgKgIgJQgPgRACgPQAFgOAAgIIgTgbQgTgbAAgCQABgGgCgOQgFgagcg6QhqjcgSg7QgRg+AFhPQAHhPAvgvQAvgvA+gZQA+gYCAgiQCAgiBxgHQBzgHBpgIQBogJAfAAIBiABIgBAWIAfCbIAFgFIAAAQQkRgMkQAsQjkAkiBA2QAJA1A+B+QBBCAA2BKQBGAkAfAyQAWAiAAAfQAAAPgMAKQgLAIgbAKQgTAGgEAQIgGAZQgGAKgbAFIgdADQgFACgWATQgSAPgWAAQgRAAgYgNg");
	this.shape_275.setTransform(84.7,40.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("ADtRLQpxq5AAr6IAHimQADggADgSIACgOIgDglIgDgpQAAgKAPg+IgEgbQgFgVAAgFQAAgzAXgaQATgWAfAAQAFAAAMAFQAMAEAFAAIAsgXQARAAASAHQASh4AbgxQARggAXgBQAaAAAMAJQATAOAAAnIgKBVIghDMQASARAEAIQAHAMAAAkQAAAQgJAlIgVBPQgfB/AACOQAAFTBnEGQByEhEeE3IABACIABAGQAAAGgHABIgIAAQAQASADAJIgBAHQgDgHgnAwIgrA4QgTAWgOAEQgEACgMAAQgDACgFABQgGAAgDgDg");
	this.shape_276.setTransform(96.6,-101.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#000000").s().p("Al7HaQhWhJAAiHQAAiXBRjkIA7idQAdhOAEgcQAFgeASgiQARgiAbgOQAagPBKgYQBKgZAfAAQAsAAAhASQAoAVAAAoQABAYgkARQggAPgRgDQgGgBgIAUQgJAWgEADQgNAJgVADIAJgBIA4gNQAZAAASANQAZARAAAeQAAAhg2AJQhGALgbAYQglAhhIC9QhODNAABvQAAADAYAMQAXALAHABQARAFA2AEQA0ADAiAAIBhgEQBlgFA5gGQA0gFBbgMIBTgMQAOAAAAANQAAAGgBACIgCABQAPAgABA/QAAAHgEAaIgFAgQgBAPgDADIgEACQmGA7iZAAQi+AAhfhPg");
	this.shape_277.setTransform(89.6,-47.5);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#000000").s().p("ABNEmQgVgXgWgEQADgCgRAAQgYABgEgCQhIgggKAAQgGAAiPhVQiahcgigkQgjgkgPgnQgLgeAAgjQAAhjBkgsQCFg6FfABQAPAACOAJQCkALA3AIIAIAEIAJCoIgBAPQhCAAiYgNQiXgNiCAAQghAAhiAKQhfAKgKADQAcAVBuA0QCBA7ArAAIBHgNQAvAAAvAYQAyAaAAAeQAAABgeAtQAAAHAGATQAGARAAAHQAAALgSAUQgUAUgEASQgFAXgbAXQgaAWgQgBQgqAAgZgcg");
	this.shape_278.setTransform(89.3,27.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AnXDqQhdgdAAhMQAAhOCUhhQCDhXB+ghIAsgMQAagHAzgVQAYgKAtgXQAtgSA5gBQBaABAyAsQAuApAAA/QAAAUgLALQgLANgZAEQgTAEgWAPQgYARgIADQAJAdAAAPQABAPgHALQgGAKgXACIF6gZIAOAKQAFAvg2BMQgvBCggAGIAAAAIgCAAIgGAAIqCASQi1AAhNgYgAgaASIiwApIB3ACIBXACICYgCQgRgFglgXQgigUgLAAQg7AFgYAAg");
	this.shape_279.setTransform(84.2,-11.9);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AG/ICQgEACgEAAQkagphLgRIAAAAQhOgTh3gbQh7gchjgsIAAgBQhkgugqgpQgsgsgEg+QgFg+Aqg8QAng4BahYQBQhOBGg3QgIAEAbgUQAkgbB0hTIgBABIACgBIAKgHQAJgGAggPIABAAIAFgCQAngQgbALIgRAHQAbgRA+gHQAngFA3gSQA2gSAvgaQAwgaAeAMQAfALAAAfQAAA6hoAoQgcALgYAHQAHALAAANQAAASgNATIAEADQAXAUAAAOQAAAbgNAVQgOAXgbAIQANAOAAAOQgHA7gZAAIgKAAQgtgVgXgQQgXgRgWgKIgIAHIgDACQg2AdgvAfIgBAAIAAAAIgBABIgPAJIAAABQiMBXheBrIgGAGQFiChHHADQAFAAAEAEQAEADAAAGIgBACIACAHIgFAhIgHAgQAAAMgXA9QgKAXgfAsQgEAAgCgDg");
	this.shape_280.setTransform(86,-36.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#000000").s().p("AG4GpIAFgJQgDACgEAAQkagYhMgNIjEgiQh7gUhjgnIgBAAQhkgogqgnIAAAAQgrgpgFg8IAAAAIAAgBIgBgHIAAAAQABg9Avg3IAAAAQAtg1BihPQBhhOBTgzIAAAAIAJgGIgBAAIAggTIBwhBQA6giAIgDQAAgBAPgFQAPgFA/AEQA/AEA5gDQA4gDAzgNQA0gMAbASQAbATgHAeQgNA4huAMQgdAEgYABQAEAMgEANQgEARgQAPIADAEQASAYgDAOQgGAbgRARQgTASgdACQALAQgEAOQgUA4gYgGIgJgDQgngggTgWQgNgQgOgMIgCACIgHAFIgCABQg6AYgyAaIgCABIgPAHIgBABQiHBGhiBVQFZCBG3gXQAFAAAEADIADADQADAAAEABQAAAAAAAAQAAAAAAAAQAAAAAAABQABABAAABIgMAlQgNAmAAAFQAAAFgDAQQAAAngTApQgRAkgWARgAnQC/IAAAAIAAAAg");
	this.shape_281.setTransform(86.2,-26);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#000000").s().p("AG2IDIgBgDQkYgohLgRIAAAAQhOgTh3gbQh7gchjgsIAAgBQhkgugqgpQgsgsgEg+QgFg+Aqg8QAng4BahYQBZhXBNg7IABAAIABgBQAQgRCJhfIgBABIACgBIAOgIQAMgHAZgMIAGgDQAfgOgXAKIgLAFQAbgRA8gGQAngFA3gSQA2gSAvgaQAwgaAeAMQAfALAAAfQAAA6hoAoQgcALgYAHQAHALAAANQAAASgNATIAEADQAXAUAAAOQAAAbgNAVQgOAXgbAIQANAOAAAOQgHA7gZAAIgKAAQgtgVgXgQQgWgRgXgKIgIAHIgDACQg2AdgvAfIgBAAIAAAAIgBABIgPAJIAAABQiIBVhdBoIgFAFIgGAGIALAFQFeCcHAADQAFAAAEAEIACADIABgBQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAACIgBADQAAAEgDADQhDDVgOAAQgEAAgCgFg");
	this.shape_282.setTransform(86,-36);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AG2H5IgBgDQkYgohLgRIAAAAQhOgTh3gbQh7gbhjgtIAAgBQhkgugqgpQgsgsgEg+QgFg+Aqg8QAng4BahYQBZhXBNg7IABAAIAJgHIADgCQAhgYBphHIAYgMIAHgEIAVgLQAkgRAmgFIAcgDQAngDA4gPQAogMAmgQIAagMQAwgYAeAMQAeANgCAfIAAABQgEAsg+AfIhgAdIABABQAGANgBAJQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAIACAKQgBASgNATIADACQAWAWgBAOQgCAcgNATQgPAWgcAHQAMAOAAAOQgKA7gZgCIgKgBQgsgYgWgRQgWgTgWgMIgMgCIAAABQgBAFgFADQgvAZgoAbIgBAAIAAAAIgBABIgPAJIAAABQiIBXhdBmIgFAFIgGAGIALAFQFeCcHAADQAFAAAEAEIACADIABgBQABAAAAAAQAAAAAAAAQABABAAABQAAAAAAACIgBADQAAAEgDADQhDDVgOAAQgEAAgCgFgAlfCQIAFgGIAAgBIgFAHgAk8CJIAEgDIAAABIABgCIgFAEgABpjwIAAAAIAAAAIAAAAIAAAAgADjldIAFACIgBgDIgEABgADildIABAAIAAAAgAABmZIAHgDIgJAGIACgDg");
	this.shape_283.setTransform(86,-35);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#000000").s().p("AG2H0IgBgCQkYgohLgSIAAAAQhOgTh3gbQh7gbhjgtIAAAAQhkgugqgqQgsgsgEg+QgFg9Aqg9QAng4BahYQBZhXBNg6IABgBIAJgHIAGgCIAHgGQAxgmBTg8IgBACIBAgXIASgGQATgGAdgCQA9gGA3gOQA3gPAxgXQAwgXAeANQAeAOgCAfQgCAshAAeIhfAbIABABQAGANgBAJQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABIABAJQgBASgNATIADACQAWAXgBAOQgBAbgNATQgPAWgcAGQAMAPAAAOQgKA6gYgDIgKAAQgsgagXgRQgWgUgWgMIgQgDIAAAAQgCAFgEADQguAZgnAaIgBAAIAAABIgBAAIgPAKIAAAAQiIBYhdBlIgFAFIgGAHIALAFQFfCcG/ACQAFAAAEAEIACADIABgBQABAAAAAAQAAAAAAAAQABABAAABQAAABAAABIgBADQAAAEgDADQhDDVgOAAQgEAAgCgFgAlfCLIAFgGIAAAAIgFAGgAk8CEIAEgCIAAAAIABgCIgFAEgABqjxIAAAAIABAAIAAAAIgBAAgADklbIAGABIgCgCIgEABgAAJmdIAHgCIAEgCg");
	this.shape_284.setTransform(86,-34.5);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#000000").s().p("AG2IIIgBgDQkYgohLgRIAAAAQhOgTh3gbQh7gbhjgtIAAgBQhkgugqgpQgsgsgEg+QgFg+Aqg8QAng4BahYQBZhXBNg7IABAAIAIgGIAIgGQAmgdAvgeIA5glQA1gzBMgKQAngGA3gTQA2gTAugcQAvgbAfALQAeALABAfQACA5hnArIgzAUQAGAKABANQAAASgLAUIADACQAXAUAAAOQABAbgMAVQgNAXgcAKQAOANAAAOQgFA7gZABIgKAAQgtgUgYgPQgXgQgWgKIgBABQgBAFgEADIgCADIgCAAQg2AdgvAfIgBAAIAAAAIgBABIgPAJIAAABQiIBVhdBoIgFAFIgGAGIALAFQFeCcHAADQAFAAAEAEIACADIABgBQABAAAAAAQAAAAAAAAQABABAAABQAAAAAAACIgBADQAAAEgDADQhDDVgOAAQgEAAgCgFgAlfCfIAFgGIAAgBIgFAHgAk8CYIAEgDIAAABIABgCIgFAEgABnjyIAAAAIAAAAIAAAAIAAAAg");
	this.shape_285.setTransform(86,-36.5);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AnaHIQgtgkAAg6QAAhBA0hcQAhg7CVjcQA+hbAOgZQAXgqAAgfQAAgagTgrQgSgrAAgRQAAgiAbgSQAUgMATAAQAaAAAYAlQAbArAEBCQAHgTAAgNQAAgLgIgfQgHggAAgLQAAgFAEgKQAEgJAAgFQAAgGAOgPQASgTAUAAQAyAAAXBRQAKgQAOgKQANgKAHAAQAlAAAVAjQAVAiAAA2QAAAfgRA0QgRAxgPAWQARAPALAWQAJASAAAKQAAAbgSANQgMAJgTAAQgOAAgSgFQgTgGgNAAQgPAAgjAJQgCAGgVAYIhGBPQgGACgSAYQgjAthYCLQCkgKDsg7QDsg6B1g6QAFAEAFAFIAAD/IgxAOQg1AOjbA4QhlAZi4AbQixAZhAAAQhgAAgzgpgAAUj5IAHAGQAVgYgCg0QgKAfgQAng");
	this.shape_286.setTransform(89.2,-16);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#000000").s().p("AoAHlQgtgkAAhOQAAhAAviEQAnhsA/iAQAqhYALgjQAJgaAAgfQAAgighgyQgggxAAgSQAAgbATgWQASgUASAAQAcAAAcAZQAlAjAOBFQACgMAAgHQAAgcgQgbQgRgaAAgVQAAgbAMgUQAQgbAfAAQAPAAATAMQAdARANAlQAIgXAPgLQAMgKANAAQAvAAAaAzQAWAtAABDQAAAZgLAnQgHAZgFAOQAfAQALAaQAEAMAAAUQAAAfgkAFQhLAKgaAKQgYAIgYAuIgmBRQgpBWgZA6QgaA/gWBCQC8gGELg+QENg9B9hBQAIAEAGAGIADgBIAIAGIAADXQAAAIgEAJQgKATgXAGIhIATQhDATgfAHIhWAWQgvAMgbADIkxAzQh2AShgAAQiCAAg2grgAiNklIAIAGQAKgkgCggIgBAAIgCgDIgCgJQgDAkgIAmg");
	this.shape_287.setTransform(86.9,-19.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#000000").s().p("AGANsQkChchCgaQhTgihig7QkPiihbhSQiHh6AAiKQAAhFAsh9QA3iiCIkiIgHACIgUAGQgKACgGAAQgqAAgcgkQgbgjAAgvQAAhWAigyQAkgzBBAAQANAAAfAOQAcANAQAMQAWhLApgnQAjghArAAQArAAAbApQAWAgAAAhQAAAGABAFIADAKIACgOQACgqApgaQAjgYApAAQAlAAAkAxQAoA2AABFQAABGgXApQgRAggdANQBkA7AWASQAkAeAAAmQAABVhXAAQg9AAg1ghQgpghgHAAQgJAAgbAaQgmAigrA6Qh+Cph1EfQBjBYCKBRQB1BFDCBbQAdANBbAlQBgAnAQAEQBtAiAGABIAfADQAVAFALAXIAJAAQABgBAAAKQAAAPhYBNQgwArgmAdQglAdgGAAQgCAAgQgNg");
	this.shape_288.setTransform(95.1,-71.5);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AnrHWQgvguAAhTQAAgrAWhKQAUhIBVkBIgCgCQAAgBgFAAQgGAAgOAFQgPAFgFAAQgxAAgaguQgUgiAAgmQAAhYAfguQAmg4BWAAQAYAAAKAFQAPAIASAgQANhAAggnQAmgvA7AAQAoAAAZAhQAOATAVA0QAHgxAzgVQAegNAdAAQAlAAAkAxQAoA2AABBQAAAugRAxQgVA8gfAFQA+AZAqAhQA2ArABAsQAAANgGAPIB+gxQB0guAVgDQAVAaAJAUQANAgAHA5QALBgAFBXQAAAOgHAFQgHADgCACQgIgJgEgJQgIgQgIgsQkNB4khBtQkbBqgsAAQhIAAgsgqgAgwBOQgPAWgfAsIDKhQQgpgHgRgJIg5gnIgpBFg");
	this.shape_289.setTransform(92.9,-9.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#000000").s().p("ALuILQgGgMgGgFQgHgGgPgBQgDAAgPgGQgSgGgLgIQgPgLh0gRQikgZhEgOQg4gMhCgQQg8gOgQgGQkThIkHh6QoNjwAAkLQAAhaA8g7QA8g6BcAAQAHAAADADIAEAHIANAMQALAOgBAaQAAAOgWAcQgaAhgEAIQgEATgFALQgHATgQgCQBCBjCEBZQCBBVDHBPQCoBFFeBUQDBAvDbAsQADgGAHACQARgMAggNQAmgOAZAAQBRAAAxAfQAlAZABAbQgBAIgeArQAAAMAIARQAIARAAAJQAAAVgVASQgXARAAAWQAAASgSAZQgYAignAAQg3AAgLgWg");
	this.shape_290.setTransform(212.6,44);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#000000").s().p("AnUJUQgwg6AAh4QAAiiAxjUQAxjTAAhMQAAg0ghhNQgghNAAghQAAhPA6AAQAwAAAZAyQALAUAWBPIAAgCIgKhMQgJhGAAgVIAAgYQAAgQAHAAQACAAAKgNQAMgNAYAAQArAAAcAxQAdA0AABaQgBAYgFAtIAIAAQAJg8AGhmQAJhHAnAAQAnAAAZAhQAdAmAABDQABA9gKA3QgOBTgjAwQAWgNArAaQAuAcAAArQAAAegNANQgPAPgnAAQgLAAg0gHIg0gIQgRAAgnDpQghC/gJBXQAUgGA3gUIDlhXQA+gXCRhHQB8g8AKAAQALAAAFAOIAKgIQAEgCAGAAQAKAAgDABIABABQABADAAAGQgLAXABAEQAAAHBHA1IASARIAABSQqLE3jTAAQhQAAgrg0g");
	this.shape_291.setTransform(99.8,-19);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#000000").s().p("ALEMNQgEAAgIgGQgZgKgjgtQhKhihIhRQjjjzh6hzQiDh7jUirQiviOhphKQhCgXhCgTQgJAAhFgZIhoggQgVgHgSgQIgQgOQgEAAgIgkQAAgSASgUQASgWATAAQAVAABNARIAPAEQhOgYgfgaQgYgVAAgaQAAgTAVgWQAIgJgEABQAngPAeAHIAoAJIADABIABAAQANACgMgGIgDgBIgJgQQgFgPAAgGQAAgdASgPQAQgNAZAAQA4AABzBeQBDA3A7A+QAjhKASgWQASgWAYAAQAlAAATAXQARATgBAWQAAAbgWAgIgxBDQDNCWGJGbQGMGdBsCwIAMgEIACACQACADAAAGQAAAKgLAKIguApQgsAdgcAVQgOAMgLAAIgCgBg");
	this.shape_292.setTransform(54.2,-65.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#000000").s().p("AEUN3IgGABQgxAAioh6QiShshrhkQhdhWhCiKQhIiZAAiQQAAiTBwjSQAshUB3ixQAPgXAOgbQAYgvAAgbQgBgMgIgeQgJgfAAgXQAAgqAcgWQATgQAYAAQAcAAASAcQAXApgCBgIgDAOQASgZABgpQABgUgDgQQABAAgBgTQADgZAXgZQASgWAbAAQAiAAARAiQAKASAKAzQAHgKALgJQAPgNAKAAQAlAAAVAiQAQAbAAAkQAAByhXBZQAbAXAAAkQAAAhgSAQQgNALgQAAQgQAAgagNQgZgOgvAAQgUAAgaAZQgXAVgSAfIAKgNQggAyglAsQhGBSglBuQgbBPAAAvQAAB1BgCcQAPAYBKBRQBQBXAbANQAlAiBeAzQBuA9BTAVIAHAEQAEADAAAGQAAAHgDADQAAABgFADQASgEAFAEQABgDAAAKQAAAKg8BQQg/BTgQAAQgKAAgHgJgABspxIAHALQABALAIgMQAJgMAIgOQAJgOABgSIACgdIABgDQgZA4gVAYg");
	this.shape_293.setTransform(108.3,-74.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#000000").s().p("AmuIiQgxgsABh7QgBgVAOhxQAOhuAbhdIgHASIAIgXQAHgZABgHQgBgFgEgGQgEgIgFgjQgEgiAAgXQAAgXgWhCQgQg6gkgqQgcgjAAgbQAAhbBOABQA/AAAmBAQAVAkAjBwIgThnQgRhlAAgiQgBgiAJgSQAJgTAegbQATgQARAAQBIAAAZBkQAKAtABBTIgDAxQgDAvgDAaQAbhSALh/QAIgsATgTQAXgXAvAAQAdAAAQAmQAOAdAAAlQgBATgJA9QgKA9gHAYQgOA1gXArIAUgDIAVgDQAwAAAUAYQALANAAAOQAAAZgRAUQgQATgBAHQAAABhgA9QgIAFgGAOQgJAUgIAQIg1BZQglBCgyB1QBYAID3haQDIhHBJgoIgBgBIASgHQA3BUAiBOQAcBCAAAfQAAAMgKAIQgIgFgGgHQgIgKgJgXQi5Boi7A3QjEA6i9AAQh7AAgugqgAhTAnIABgDIgBACQAAAAAAAAQgBAAAAAAQgBABAAgBQgBAAgBAAg");
	this.shape_294.setTransform(96.5,-31.3);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#000000").s().p("ACtIHIhEgXQgagJhDgsIhDgrIipAJQipAAhFglQhZgxAAiLQAAhIAphJQAmhCBEg7QAagWAMg4QAMg4AJgXQAKgWAUgSQAUgRAfgIIAtANQAEAAApgiQA1gvAegWQA9gtA/gpIA6gjQAJgGAGAAQAKAAgDACQAYgHgRAPQAIAOAKAZQASAsAAApQgBBlgeBcQgbBQgQAiQgQAggOAEQBBAsDqBnQDJBoAABcQAAAQgWAoQgVAnhGA7QhFA8hOALQgkAGgcAAQghAAgWgHg");
	this.shape_295.setTransform(126,37.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AIxIcQgQgRgJAAQg4AUgPAAQgRAAgNgGQgtgThdgEIhogBQhdgDiagiQiigjhBgiQjIhphlidQhZiNAAimQAAhGAZhPQAVg9AZgrQAbgsBQgzQBKgwAUAGQAIgFgHAFQAVAGAVADIAAASIguBYIgxBXQgNgGgJACQgHABgKAJQgDANAAAGQAADZBiB3QCjDKGxAAQALAAAdgRQAhgTAFgSQACgGAagoQAagpAGgEQAWgSA8gRQAegIAagFQBjAAAAB8QgBAQAkAqQAiApABAwQgBAFgDAQQgEAQAAAFIARApQARAqAAANQAABDggAjQgYAZgeAAQgKAAgPgQg");
	this.shape_296.setTransform(178.7,45.7);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("Am8HJQgngnAAhSQAAhtDPjLQDGjCGjk5QAEgCAHABQAHABADADQACgFADgCQAXAUAaBGQAYBDAOBOQALgYAHgFQADgCADABIAFAGIABAOQAABagpBSQgTAqgUAXQgHAAgDgCIgEgBQAjArAABIQAAAIgRAgQgSAfAAAGQABAWgHAWQgJAfgTAPQgIAHgdAMQgQAIgMAUQgVAngTAMQgXANgzAAQgFAAgVgHQgVgIgGgEIgWgSQgOgNgFAAQgHAAgaAPQgZAPAAAEQgEAKgJACIgMAAQgKACgOAGIgjARQgWALgQAEQgzARhlAtQg4AZg3AAQg1AAgfgfg");
	this.shape_297.setTransform(99.8,37);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#000000").s().p("AllFDQgsgtABhpQgBgfAMhVQAKhDAMhAIgbgWQgPAAiaApQgZAAgUgVQgWgZAAgmQAAgeAZgVQALgIAvgZQABgKAPgeIARggQAJgNAsgRQAlgOAMgBQAtgEAmgIQAcgGAPAAQBKAAAsAeQASANAsA0QAHAKA7A3QAVATAAAoQAAAWgVAsQgkBMgpB7QD1hYBDgfQBBgbDiiAIARAIQA8AHAiAlQAiAkAAA1QgWA4gJANQgFgEgDgFQgGgLADgSQk7DCkIBWQilA3hkAAQhEAAgigkg");
	this.shape_298.setTransform(92.3,5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#000000").s().p("AnEF8QihiGhSjeQgUgYgMgxQgIglAAgaQAAiUCeiLQBGg9BQgkQBSgmBHAAQA0AAAfAfQAbAaAAAgQAAAjgUAVQgMAMgcAMIg4AUQASAEAPAQQARAQAAARQAAAIgNAbQgOAegNAMIguAkQgeAXgOAUQgTAYAAAMQAAChCECAQCUCODjAAQCEAABfgRICsggIACgCQADgCAGAAQAnAABRBKQBOBIAAAZQAAALgHAFQgEADgFAAQgFAAgQgQQgXgVgggQQgLAJiKAgIidAmIhEAPQgOACkLAYQj/AAi6ibgAqbANIAEgBIgEAAgAlDlJIgCABIAFgDg");
	this.shape_299.setTransform(92.6,-34.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFF7F").s().p("Aj1FEQhOgJghgGQhFgZgWgkQghg1AAiPIApj4IAiiJQAoA5AsAYQA0AcBTAAQA9AAAdgLQh1DMgoBSQgtBeAAAtQAAAKACgBIAqhCQBTAICoAGQCLAAEmgwQADgCADgIIAEgMIAHgDQAIAAALAIQAQALgEATIgIgBIgBADQADAOAJBKQAAAagdAoQgaAjgLAEIgLgCQgCgJAEgLQATgRgEgEQgJgCAAgHIgMABQhfAui5ATQh1ANiEAAQgfAAhVgKg");
	this.shape_300.setTransform(92.5,-13.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#91AFC2").s().p("AiTB5QgbgQgZghQgTgagBgGQAAgLAehHQAghQAVgiIFjCMIh2CbQggALgzAFIguACQg1AAhCgkg");
	this.shape_301.setTransform(75,-54.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AmxGZQglgjgOg6QgLgvAAhTQAAhUA3jfQAui6ATgzQADgJATghQARgiAFgNQALgdAKgEQAGgCALACQAFABF2CSIAHAFQADADAAAGQAEAHgDADIgmAuIg7BQIgNATQgOAUAAAGQAAADgRAXQgaAigYAmQhGBvhBCXQBRAICiAFQE5gaAZgEQBXgRAGAAIADACIAHAFIAHgCQAIAAALAIQAQALgEASIgIAAIgBADQADAOAJBJQAAAagdAoQgaAjgLAFIgLgCQgCgJAEgLQhfAti7AUQh8ANiBAAQjxAAhOhJg");
	this.shape_302.setTransform(91,-24.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFF7F").s().p("AFlJnIgHgLIABgMQADgIAUgBQk1h1hGgfQhJgejOiCQjNiChAhSQg/hPAAhfQAAhFAlh2QAsiMBYi0QAXA2BUAkQBVAkBIgNQhCBdhJCPQhECGgVBHIgIAYQgFAOAAAJQAAAGACACIAEADIAfghQCFB6EvCVQEuCUDPAsIAXgKQAWgHAOACQgBAPgHAMQgOAXhBAlQgxAbg+A0Ig2AsQgFAAgDgEg");
	this.shape_303.setTransform(97.9,-44.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#91AFC2").s().p("AhaCPQgsgNgRgJQgPgJghgkQgeghAAgDQAAgFALgVIAYgpIASgdQARgdAAgHIgMgXQAIgWAXgLQAMgFAKgCQAIAAAAACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAQABAFA+ACIA1AJQA2AJAgAHQA3AMAqAbQAoAaADAWQgFAQgMAAQgGAAgJgGIgHgFIiWCyQghADgWAAQgbABgxgNg");
	this.shape_304.setTransform(77.6,-113.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#000000").s().p("AF1LZIgIgLQhEgWicg/QiHg3gagNQhZgsgcgPQhhg1hdhEQjDiPg/hWQguhCAAhXQAAg7AVhHQAPgwA0iUQAGgUAphbQAqhfAfg8QAfg8AMgUQAMgUAJgEQAIgVAYgLQALgGAKgBQAJAAgBABQgBABAAAAQgBABAAAAQAAABAAAAQAAAAAAABQABAFA/ABIA3AJQA1AJAgAHQA3AMApAbQAnAaAEAWIgBAHQgDAFg8BDIhyCSQgpAwhTCcQhSCbgVBDQCIB9EsCWQEyCXDNAqQAIAHADALQAWgHAOACQgBAPgHAMQgOAXhBAlQgwAbg/A0Ig2AsQgEAAgDgEg");
	this.shape_305.setTransform(96.4,-55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_225}]}).to({state:[]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_302},{t:this.shape_301},{t:this.shape_300}]},1).to({state:[]},7).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_305},{t:this.shape_304},{t:this.shape_303}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(43.8,-7.3,90.2,94.4);


(lib.FRD_MODEL_part_012 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39394F").s().p("Ah3CUQgEgCABgKQAAgQAvgsQAygwA/gnQCvhxBcAvQACAEAAAIIgGAAQgGgCgJAAQhmAAiABNQhzBIgWA5QgCAFgGADQgGACgOADgAkuBFQgEgEAAgLQAAgRAsglQAuglBAgkQCkhdBvASQAAADAIAOQjvAMi5DCQgHgCgCgEg");
	this.shape.setTransform(98.4,15.2,1,1,0,0,180);

	this.instance = new lib.FRD_MODEL_part_018("synched",0);
	this.instance.setTransform(184.5,92.5,1,1,0,0,0,3.7,23.9);

	this.instance_1 = new lib.FRD_MODEL_part_017("synched",0);
	this.instance_1.setTransform(189.9,64.6,1,1,0,0,0,37.6,61);

	this.instance_2 = new lib.FRD_MODEL_part_016("synched",0);
	this.instance_2.setTransform(108.6,96.1,1,1,0,0,0,86.1,96.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1A1A1A").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(4.7,57.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#242330").s().p("AAAAAIAAAAIAAABQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAg");
	this.shape_2.setTransform(0,54);

	this.addChild(this.shape_2,this.shape_1,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-0.1,227.5,192.4);


(lib.FRD_back_head_v02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FRD_MODEL_part_038
	this.instance = new lib.FRD_MODEL_part_038("single",0);
	this.instance.setTransform(126.4,108.3,1,1,0,0,0,126.2,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(40));

	// FRD_MODEL_part_031
	this.instance_1 = new lib.FRD_back_ear_R_v01("single",0);
	this.instance_1.setTransform(220.6,106.5,1,1,0,0,0,11.3,15.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(40));

	// FRD_MODEL_part_030
	this.instance_2 = new lib.FRD_back_ear_L("single",0);
	this.instance_2.setTransform(29.8,98.2,1,1,0,0,0,10.9,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(40));

	// FRD_MODEL_part_037
	this.instance_3 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_3.setTransform(123.8,175,1,1,0,0,0,84.4,169.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,4.2,248.6,192.4);


(lib.FRD_34BACK_H2_COMP = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#17171F").s().p("Ah3H0QgNgHAAgLQAAgDAEgEQAFgEACAAQACAAAIAJQAIAIAVAAQAxAAAcgKQAMgFAKgIQAVgMAIgBQAIAAAAAKQAAAOgnASQgkASgaAAQgyAAgWgMgAFnHDQgLgHAAgJQAAgFAEgDQADgEAEAAQADAAAGAHQAFAHAYAAQAfAAAagIIAYgJQAEgCAagVQAYgPAAAYQAAAWg1ATQgsAPgWAAQgmAAgQgLgAqeGDQgagPAAgJQAAgJAGABQAEAAAQAIQArAUAqAAQARAAAWgNQAWgNADAAQAMAAABAMQAAALgbAOQgaAOgUAAQg1AAgkgVgAOGFTQgBgDAAgDQAAgCAwghQAwghAAgiQAAgOAMAIQAMAIAAAMQAAAPgbAkQgjAwgrAAQgKAAgEgFgAJbD2IgBgGQAAgCAlgXQAngYAFgNQAPglAHAGQAFAEAAAXQgmBNg8AAQgHAAgCgFgAwEC/QgQgeAAgTQAAgWASgWQASgXAAAZIgHAPQgHAOAAADQAAAbAbAeIAcAfQAAAKgKAAQgeAAgVgngAknCSQgcgSAAgKQAAgKAhAOQAsATAbAAQAeAAAdgNIAdgMQANAAAAANQAAAQgpAMQgjAKgZAAQgqAAgigVgAssB0QgYgeAAgjQAAgQAKAFQALAFADAOQABAHAGAMQAFAMAGAHQAOARAxAMQA3AOAMAIQgFAFgLAEQgKAEgHAAQhOAAglgtgAPvAkIAIgUQAJgSAAgLQAAgQgMgQQgLgRAAgBQAAgZAWAaQAWAaAAAYQAAAoghANgAG2gfQgFgFAAgBQAAgIBKgOQBJgZAAg5QAAgQAMAKQALAJAAAOQAAAfgkAeQgtAmhKAAQgFAAgFgGgAq/iTQgPgQgJgUQgGgPAAgEQAAgfAQAVIAhAuQAMAOAIAGQAOALAWAEQAoAJAvAEQAYABAAAIQAAAHgNAEQgPADgkAAQhNAAgtg0gAAFiNQgSgNAAgKQAAgJANAAQAAAAAOAMQASAMAWAAQA/AAAZgPQAOgKAJAAQAJAAAAAJQAAAPgiAMQghANgmAAQgmAAgagQgAv9iwQgPgfAAgVQAAgKAOgEQAOgFAAAMQAAAAAAABQAAABgBAAQAAABAAAAQgBABAAAAQgDACAAADQAAAtApATIAbALQANAFAAAFQAAANgYAAQgqAAgXgwgANrkYIgBgDQAAgFAWgYQAVgYAAgZQAAgLgagoQAAgaAaAeQAaAeAAAaQAAAQgOAZQgTAjgcAAQgFAAgCgEgAvHmeIgFgbQAAggAPgZQAPgZAAAYIgEAPQgDANAAAKQAAAYACAIQACAKAPAaIgEADQgDADgDAAQgTAAgIgbg");
	this.shape.setTransform(125.5,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(41));

	// FRD_MODEL_part_050
	this.instance = new lib.FRD_MODEL_part_050("single",0);
	this.instance.setTransform(124.5,83.6,1,1,0,0,0,124.4,65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(41));

	// FRD_34BACK_part_hair
	this.instance_1 = new lib.FRD_34BACK_part_hair("single",0);
	this.instance_1.setTransform(132.2,15.2,1,1,0,0,0,30.7,15.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(41));

	// FRD_MODEL_part_016
	this.instance_2 = new lib.FRD_MODEL_part_016("single",0);
	this.instance_2.setTransform(127.1,104.9,1,1,0,0,180,86.1,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(41));

	// FRD_MODEL_part_017
	this.instance_3 = new lib.FRD_MODEL_part_017x("single",0);
	this.instance_3.setTransform(45.7,73.4,1,1,0,0,180,37.6,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,248.7,201.1);


(lib.Freddy_Headclip_Whatever = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(558.3,308.5,0.999,0.999,-24,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(442.6,305.8,1,1,15,0,0,13.7,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:308.5,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]}).to({state:[{t:this.instance_1,p:{x:442.5,y:307.8,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.2,y:310.5,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:441.9,y:315.6,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:557.7,y:316.3,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:443.1,y:319.2,rotation:21.2,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:556.2,y:318.5,regX:12,rotation:-31,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:443.1,y:316.6,rotation:21.2,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:556.2,y:315.9,regX:12,rotation:-31,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_1,p:{x:443,y:311,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.5,y:311.1,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.9,y:309.1,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.4,y:309.8,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.4,y:303.2,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.1,y:305.9,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.4,y:303.2,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.1,y:305.9,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_1,p:{x:442.3,y:304.5,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558,y:307.2,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},14).to({state:[{t:this.instance_1,p:{x:442.8,y:303.2,rotation:0,regX:13.6,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.5,y:305.9,regX:12.1,rotation:-9,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:443.1,y:300.9,rotation:-6.2,regX:13.6,regY:3.3,scaleX:1,scaleY:1}},{t:this.instance,p:{x:559,y:303.8,regX:12.1,rotation:5.9,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.8,y:297,rotation:-6.2,regX:13.6,regY:3.3,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.6,y:299.9,regX:12.1,rotation:5.9,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.8,y:297,rotation:-6.2,regX:13.6,regY:3.3,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.6,y:299.9,regX:12.1,rotation:5.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.5,y:298.8,rotation:-6.2,regX:13.6,regY:3.3,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:301.7,regX:12.1,rotation:5.9,scaleX:0.999,scaleY:0.999}}]},21).to({state:[{t:this.instance_1,p:{x:442,y:301.8,rotation:-8.7,regX:13.6,regY:3.4,scaleX:0.999,scaleY:0.999}},{t:this.instance,p:{x:558.7,y:303.5,regX:12.1,rotation:2.2,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.9,y:303.9,rotation:8.7,regX:13.7,regY:3.3,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.7,y:306.2,regX:12,rotation:-8.1,scaleX:0.998,scaleY:0.998}}]},2).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,rotation:15,regX:13.7,regY:3.4,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:308.5,regX:12.1,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).wait(8));

	// Layer 2
	this.instance_2 = new lib.FRD_FRONT_part_nose("single",0);
	this.instance_2.setTransform(506.2,302.2,1,1,0,0,0,28.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({x:505.9,y:305.4},0).wait(1).to({x:505.8,y:307.4},0).wait(3).to({y:304.8},0).wait(2).to({x:506,y:300.2},0).wait(2).to({startPosition:0},0).wait(1).to({y:299.6},0).wait(3).to({startPosition:0},0).wait(14).to({x:505.9,y:300.9},0).wait(2).to({x:506.2,y:302.2},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// FRE_prof_ear_v01
	this.instance_3 = new lib.FRD_MODEL_part_032("single",0);
	this.instance_3.setTransform(450.6,330.7,1,1,0,0,0,2.7,2.5);

	this.instance_4 = new lib.FRD_MODEL_part_033("single",0);
	this.instance_4.setTransform(557.2,330.4,1,1,0,0,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]}).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_4,p:{x:556.9,y:333.7,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:450.3,y:333.9}}]},1).to({state:[]},1).to({state:[]},3).to({state:[{t:this.instance_4,p:{x:552.2,y:325.6,regX:0,regY:0}},{t:this.instance_3,p:{x:451.5,y:326.5}}]},2).to({state:[{t:this.instance_4,p:{x:554.7,y:324.3,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:451.5,y:324.7}}]},2).to({state:[{t:this.instance_4,p:{x:554.4,y:320.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:451.2,y:320.8}}]},1).to({state:[{t:this.instance_4,p:{x:554.4,y:320.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:451.2,y:320.8}}]},3).to({state:[{t:this.instance_4,p:{x:554.3,y:322.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:451.2,y:322.8}}]},14).to({state:[{t:this.instance_4,p:{x:553.3,y:323.6,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:448.2,y:324.5}}]},2).to({state:[{t:this.instance_4,p:{x:552.1,y:323.5,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:443.2,y:324.2}}]},2).to({state:[{t:this.instance_4,p:{x:551.4,y:323.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:439.9,y:324}}]},2).to({state:[{t:this.instance_4,p:{x:551.4,y:323.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:437.4,y:323.1}}]},1).to({state:[{t:this.instance_4,p:{x:552.4,y:324.8,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:438.4,y:324.5}}]},21).to({state:[{t:this.instance_4,p:{x:555.5,y:328.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:441.6,y:327.5}}]},2).to({state:[{t:this.instance_4,p:{x:556.1,y:329.6,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:446.5,y:329.4}}]},2).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4,regX:2.6,regY:2.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).wait(8));

	// FRE_prof_ear_v01
	this.instance_5 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_5.setTransform(447.9,336.8,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_6 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_6.setTransform(560,336.7,1,1,0,0,0,17.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]}).to({state:[{t:this.instance_6,p:{scaleY:0.938,y:338,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:0.966,y:338.1,x:447.9,startPosition:0}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:340,x:559.7,startPosition:1}},{t:this.instance_5,p:{scaleY:1.03,y:340,x:447.6,startPosition:1}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:341.9,x:559.6,startPosition:2}},{t:this.instance_5,p:{scaleY:1.03,y:342,x:447.5,startPosition:2}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:339.3,x:559.6,startPosition:2}},{t:this.instance_5,p:{scaleY:1.03,y:339.4,x:447.5,startPosition:2}}]},3).to({state:[{t:this.instance_6,p:{scaleY:1,y:334.8,x:559.8,startPosition:1}},{t:this.instance_5,p:{scaleY:1.03,y:334.8,x:447.7,startPosition:1}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:334.8,x:559.8,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:334.8,x:447.7,startPosition:0}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:334.1,x:559.8,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:334.2,x:447.7,startPosition:0}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:334.1,x:559.8,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:334.2,x:447.7,startPosition:0}}]},3).to({state:[{t:this.instance_6,p:{scaleY:1,y:335.4,x:559.7,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:335.5,x:447.6,startPosition:0}}]},14).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},1).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},21).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},2).to({state:[{t:this.instance_6,p:{scaleY:1,y:336.7,x:560,startPosition:0}},{t:this.instance_5,p:{scaleY:1.03,y:336.8,x:447.9,startPosition:0}}]},1).wait(8));

	// FRE_prof_hair_v01
	this.instance_7 = new lib.FRD_MODEL_part_029("single",0);
	this.instance_7.setTransform(508.7,254.5,1,1,0,0,0,33,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// FRE_prof_brow_v01
	this.instance_8 = new lib.FRD_FRONT_MOUTH_COMP("single",21);
	this.instance_8.setTransform(501.5,379.8,1,1,0,0,0,59.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(4).to({x:501.7,y:378.4,startPosition:22},0).wait(2).to({x:501.5,y:379.8},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:35},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:35},0).wait(13).to({startPosition:35},0).wait(1).to({startPosition:28},0).wait(1).to({startPosition:29},0).wait(1).to({startPosition:28},0).wait(2).to({startPosition:25},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:39},0).wait(2).to({startPosition:36},0).wait(2).to({startPosition:35},0).wait(2).to({startPosition:32},0).wait(2).to({startPosition:25},0).wait(1).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(3).to({startPosition:27},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:24},0).wait(1).to({startPosition:21},0).wait(12).to({startPosition:21},0).wait(7));

	// FRE_prof_pupil_v01
	this.instance_9 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_9.setTransform(501.4,416.3,1,1,0,0,0,84.4,169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// FRE_prof_eye_v01
	this.instance_10 = new lib.FRD_MODEL_part_031("single",0);
	this.instance_10.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// FRE_prof_nose_v01
	this.instance_11 = new lib.FRD_MODEL_part_030("single",0);
	this.instance_11.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// FRE_prof_face_v01
	this.instance_12 = new lib.FRD_MODEL_part_038("single",0);
	this.instance_12.setTransform(504,349.6,1,1,0,0,0,126.2,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

	// FRE_prof_hat_v01
	this.instance_13 = new lib.FRD_MODEL_part_039("single",0);
	this.instance_13.setTransform(488.6,238.1,1,1,-1.5,0,0,35.8,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(21).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.7,150.3,248.6,287.6);


(lib.Freddy_Headclip_SomePeople = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(558.3,308.5,0.999,0.999,-24,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(442.6,305.8,1,1,15,0,0,13.7,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]}).to({state:[{t:this.instance_1,p:{x:442.4,y:308.8,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.1,y:311.5,rotation:-24,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:443,y:315.9,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:557.4,y:313.9,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:445.5,y:312.3,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:557.7,y:313.6,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},14).to({state:[{t:this.instance_1,p:{x:445.9,y:308.1,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:557.7,y:313.6,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:445.4,y:311.2,regX:13.7,rotation:33.8,regY:3.5}},{t:this.instance,p:{x:557.2,y:316.6,rotation:-49.5,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},36).to({state:[{t:this.instance_1,p:{x:449.4,y:316.1,regX:13.7,rotation:45,regY:3.4}},{t:this.instance,p:{x:555.8,y:317.6,rotation:-54,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:449,y:320,regX:13.7,rotation:45,regY:3.4}},{t:this.instance,p:{x:555.4,y:321.4,rotation:-54,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},46).to({state:[{t:this.instance_1,p:{x:449.4,y:316.2,regX:13.7,rotation:38.2,regY:3.5}},{t:this.instance,p:{x:555.9,y:317.6,rotation:-33.7,scaleX:0.998,scaleY:0.998,regX:12.1,regY:4.2}}]},5).to({state:[{t:this.instance_1,p:{x:450.6,y:307.5,regX:13.7,rotation:30,regY:3.5}},{t:this.instance,p:{x:557.1,y:309,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:450.6,y:304.8,regX:13.7,rotation:30,regY:3.5}},{t:this.instance,p:{x:557.1,y:306.3,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:450.6,y:307.5,regX:13.7,rotation:30,regY:3.5}},{t:this.instance,p:{x:557.1,y:309,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},2).to({state:[{t:this.instance_1,p:{x:450.6,y:310.2,regX:13.7,rotation:0,regY:3.4}},{t:this.instance,p:{x:557.1,y:311.8,rotation:-9,scaleX:0.999,scaleY:0.999,regX:12,regY:4.2}}]},8).to({state:[{t:this.instance_1,p:{x:450.3,y:309.8,regX:13.7,rotation:-14.9,regY:3.4}},{t:this.instance,p:{x:556.8,y:311.4,rotation:5.9,scaleX:1,scaleY:1,regX:12.1,regY:4.1}}]},2).to({state:[{t:this.instance_1,p:{x:452.3,y:293.6,regX:13.7,rotation:165,regY:3.4}},{t:this.instance,p:{x:559,y:295.3,rotation:-174,scaleX:1,scaleY:1,regX:12.1,regY:4.1}}]},20).to({state:[{t:this.instance_1,p:{x:449,y:320,regX:13.7,rotation:45,regY:3.4}},{t:this.instance,p:{x:555.4,y:321.4,rotation:-54,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},29).to({state:[{t:this.instance_1,p:{x:447.8,y:315.2,regX:13.7,rotation:30,regY:3.4}},{t:this.instance,p:{x:555,y:317.1,rotation:-39,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},42).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:442.2,y:304,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:557.9,y:306.7,rotation:-24,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999,regX:12.1,regY:4.2}}]},2).wait(7));

	// Layer 2
	this.instance_2 = new lib.FRD_FRONT_part_nose("single",0);
	this.instance_2.setTransform(506.2,302.2,1,1,0,0,0,28.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({startPosition:0},0).wait(1).to({x:505.7,y:305.2},0).wait(14).to({x:506.2,y:302.2},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

	// FRE_prof_ear_v01
	this.instance_3 = new lib.FRD_MODEL_part_032("single",0);
	this.instance_3.setTransform(450.6,330.7,1,1,0,0,0,2.7,2.5);

	this.instance_4 = new lib.FRD_MODEL_part_033("single",0);
	this.instance_4.setTransform(557.2,330.4,1,1,0,0,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]}).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:556.8,y:332.8}},{t:this.instance_3,p:{x:450.4,y:331.9}}]},14).to({state:[{t:this.instance_4,p:{x:556.8,y:332.8}},{t:this.instance_3,p:{x:450.4,y:331.9}}]},1).to({state:[{t:this.instance_4,p:{x:556.8,y:332.8}},{t:this.instance_3,p:{x:450.4,y:331.9}}]},36).to({state:[{t:this.instance_4,p:{x:553.9,y:335.4}},{t:this.instance_3,p:{x:452.5,y:335.5}}]},1).to({state:[]},46).to({state:[{t:this.instance_4,p:{x:553.5,y:334.1}},{t:this.instance_3,p:{x:451.8,y:332.3}}]},5).to({state:[{t:this.instance_4,p:{x:553.5,y:334.1}},{t:this.instance_3,p:{x:451.8,y:332.3}}]},1).to({state:[{t:this.instance_4,p:{x:553.5,y:334.1}},{t:this.instance_3,p:{x:451.8,y:332.3}}]},1).to({state:[{t:this.instance_4,p:{x:553.5,y:334.1}},{t:this.instance_3,p:{x:451.8,y:332.3}}]},2).to({state:[{t:this.instance_4,p:{x:553.5,y:334.1}},{t:this.instance_3,p:{x:451.8,y:332.3}}]},8).to({state:[]},2).to({state:[]},20).to({state:[]},29).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},42).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},2).wait(7));

	// FRE_prof_ear_v01
	this.instance_5 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_5.setTransform(447.9,336.8,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_6 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_6.setTransform(560,336.7,1,1,0,0,0,17.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:336.8,scaleY:1.03}}]}).to({state:[{t:this.instance_6,p:{startPosition:1,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:1,x:447.9,y:336.8,scaleY:1.03}}]},1).to({state:[{t:this.instance_6,p:{startPosition:2,x:559.5,y:339.7,scaleY:1}},{t:this.instance_5,p:{startPosition:2,x:447.4,y:339.8,scaleY:1.03}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:1,x:447.9,y:336.8,scaleY:1.03}}]},14).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:336.8,scaleY:1.03}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:1,x:447.9,y:336.8,scaleY:1.03}}]},36).to({state:[{t:this.instance_6,p:{startPosition:4,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:4,x:447.9,y:336.8,scaleY:1.03}}]},1).to({state:[{t:this.instance_6,p:{startPosition:6,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:6,x:447.9,y:336.8,scaleY:1.03}}]},46).to({state:[{t:this.instance_6,p:{startPosition:1,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:1,x:447.9,y:336.8,scaleY:1.03}}]},5).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:336.8,scaleY:1.03}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:335.4,scaleY:1.066}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:335.4,scaleY:1.098}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:336.8,scaleY:1.03}}]},2).to({state:[{t:this.instance_6,p:{startPosition:1,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:1,x:447.9,y:336.8,scaleY:1.03}}]},8).to({state:[{t:this.instance_6,p:{startPosition:6,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:6,x:447.9,y:336.8,scaleY:1.03}}]},2).to({state:[{t:this.instance_6,p:{startPosition:6,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:6,x:447.9,y:336.8,scaleY:1.03}}]},20).to({state:[{t:this.instance_6,p:{startPosition:6,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:6,x:447.9,y:336.8,scaleY:1.03}}]},29).to({state:[{t:this.instance_6,p:{startPosition:1,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:1,x:447.9,y:336.8,scaleY:1.03}}]},42).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:336.8,scaleY:1.03}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:335.6,scaleY:1.053}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:335.6,scaleY:1.085}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,x:560,y:336.7,scaleY:1}},{t:this.instance_5,p:{startPosition:0,x:447.9,y:336.8,scaleY:1.03}}]},2).wait(7));

	// FRE_prof_hair_v01
	this.instance_7 = new lib.FRD_MODEL_part_029("single",0);
	this.instance_7.setTransform(508.7,254.5,1,1,0,0,0,33,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

	// FRE_prof_brow_v01
	this.instance_8 = new lib.FRD_FRONT_MOUTH_COMP("single",21);
	this.instance_8.setTransform(501.5,379.8,1,1,0,0,0,59.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:21},0).wait(1).to({x:501.2,y:381.6},0).wait(7).to({startPosition:23},0).wait(2).to({startPosition:39},0).wait(5).to({x:501.5,y:379.8,startPosition:23},0).wait(1).to({startPosition:26},0).wait(2).to({startPosition:24},0).wait(1).to({startPosition:22},0).wait(11).to({startPosition:22},0).wait(1).to({x:501.2,y:381.6,startPosition:39},0).wait(2).to({startPosition:40},0).wait(2).to({startPosition:22},0).wait(3).to({startPosition:27},0).wait(2).to({x:501.6,y:381.5,startPosition:34},0).wait(1).to({startPosition:35},0).wait(2).to({x:501.2,y:381.6,startPosition:39},0).wait(7).to({startPosition:18},0).wait(2).to({x:501.5,y:379.8,startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:16},0).wait(2).to({startPosition:1},0).wait(3).to({x:501.2,y:381.6,startPosition:18},0).wait(38).to({startPosition:39},0).wait(2).to({x:501.5,y:379.8,startPosition:21},0).wait(4).to({startPosition:11},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:19},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:11},0).wait(4).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:8},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:19},0).wait(3).to({startPosition:3},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:11},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:7},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:18},0).wait(2).to({startPosition:2},0).wait(2).to({startPosition:18},0).wait(3).to({startPosition:3},0).wait(1).to({startPosition:4},0).wait(15).to({startPosition:3},0).wait(1).to({startPosition:2},0).wait(1).to({startPosition:18},0).wait(1).to({startPosition:0},0).wait(12).to({startPosition:18},0).wait(2).to({startPosition:3},0).wait(1).to({startPosition:5},0).wait(12).to({startPosition:4},0).wait(1).to({startPosition:2},0).wait(2).to({startPosition:0},0).wait(18).to({scaleX:1.02,scaleY:0.86,x:502.1,y:381.9},0).wait(1).to({scaleX:1,scaleY:1,x:501.5,y:379.8,startPosition:21},0).wait(1).to({startPosition:21},0).wait(2).to({startPosition:21},0).wait(7));

	// FRE_prof_pupil_v01
	this.instance_9 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_9.setTransform(501.4,416.3,1,1,0,0,0,84.4,169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

	// FRE_prof_eye_v01
	this.instance_10 = new lib.FRD_MODEL_part_031("single",0);
	this.instance_10.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

	// FRE_prof_nose_v01
	this.instance_11 = new lib.FRD_MODEL_part_030("single",0);
	this.instance_11.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

	// FRE_prof_face_v01
	this.instance_12 = new lib.FRD_MODEL_part_038("single",0);
	this.instance_12.setTransform(504,349.6,1,1,0,0,0,126.2,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

	// FRE_prof_hat_v01
	this.instance_13 = new lib.FRD_MODEL_part_039("single",0);
	this.instance_13.setTransform(488.6,238.1,1,1,-1.5,0,0,35.8,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(36).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(5).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(20).to({startPosition:0},0).wait(29).to({startPosition:0},0).wait(42).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.7,150.3,248.6,287.6);


(lib.Freddy_Headclip_ProfFizcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(558.3,308.5,0.999,0.999,-24,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(442.6,305.8,1,1,15,0,0,13.7,3.4);

	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.setTransform(503.9,287.6);

	this.instance_3 = new lib.FRD_MODEL_part_051("single",0);
	this.instance_3.setTransform(485.2,246.4,1,1,0,0,180,48.9,80.7);

	this.instance_4 = new lib.FRD_34BACK_H2_COMP("synched",0,false);
	this.instance_4.setTransform(499.5,407.5,1,1,0,0,0,123,165.9);

	this.instance_5 = new lib.FRD_back_hat_v01("single",0);
	this.instance_5.setTransform(492.6,238.4,1,1,-1.5,0,0,35.8,87);

	this.instance_6 = new lib.FRD_back_head_v02("synched",0,false);
	this.instance_6.setTransform(499.1,416.3,1,1,0,0,0,124.4,173.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39394F").s().p("AhYghQh6ADAEgVQAEgUBNAAQBYAAB0AuQB7AvAFAtQgDAEgGABQimhth4AEg");
	this.shape.setTransform(487.6,248.3);

	this.instance_7 = new lib.FRD_MODEL_part_019("single",0);
	this.instance_7.setTransform(458.5,299.6,1,1,0,0,0,20.4,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39394F").s().p("AjOBDQAFgtB7gvQB0guBYAAQBNAAAEAUQAEAVh6gDQh4gEimBtQgGgBgDgEg");
	this.shape_1.setTransform(493.3,248.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,regX:12.1,scaleX:0.999,scaleY:0.999}}]}).to({state:[{t:this.instance_1,p:{x:442.5,y:307.6,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.1,y:310.9,rotation:-24,regX:12.1,scaleX:0.999,scaleY:0.999}}]},5).to({state:[{t:this.instance_1,p:{x:443.8,y:318,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:556.8,y:318.9,rotation:-39,regX:12.1,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:443.3,y:324,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:556.3,y:324.9,rotation:-39,regX:12.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:443.7,y:319.2,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:556.7,y:320.1,rotation:-39,regX:12.1,scaleX:0.999,scaleY:0.999}}]},4).to({state:[{t:this.instance_1,p:{x:444.5,y:313.2,regX:13.6,rotation:30,regY:3.4}},{t:this.instance,p:{x:557.5,y:314.1,rotation:-39,regX:12.1,scaleX:0.999,scaleY:0.999}}]},27).to({state:[]},17).to({state:[{t:this.instance_2}]},112).to({state:[{t:this.instance_1,p:{x:444.2,y:295.9,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:559.9,y:298.6,rotation:-24,regX:12.1,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.8,y:304.6,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.5,y:307.3,rotation:-24,regX:12.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,regY:3.4}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,regX:12.1,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_4,p:{skewY:0,x:499.5}},{t:this.instance_3,p:{skewY:180,x:485.2}}]},23).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_4,p:{skewY:180,x:489.2}},{t:this.instance_3,p:{skewY:0,x:503.4}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_7,p:{skewY:0,x:458.5}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.7,regX:13.7,rotation:0,regY:3.3}},{t:this.instance,p:{x:558.3,y:308.6,rotation:0,regX:12,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{skewY:180,x:537.9}}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.instance_8 = new lib.FRD_FRONT_part_nose("single",0);
	this.instance_8.setTransform(506.2,302.2,1,1,0,0,0,28.4,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39394F").s().p("AA4gHQghgOg/gRQhCgShGABQhHACgHgIQgNgbBEAAQC6AACIBGQBRAnA1A5IgCAHQgCAEgIAAQichVghgLg");
	this.shape_2.setTransform(476.2,255.7);

	this.instance_9 = new lib.FRD_34_MOUTH_COMPcopy("single",0);
	this.instance_9.setTransform(464.6,382.6,1,1,0,0,0,45.7,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39394F").s().p("Aj+BVIgCgHQA1g5BRgnQCIhGC6AAQBEAAgNAbQgHAIhHgCQhGgBhCASQg/ARghAOQghALicBVQgIAAgCgEg");
	this.shape_3.setTransform(504.7,255.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{x:506.2,y:302.2}}]}).to({state:[{t:this.instance_8,p:{x:506.2,y:302.2}}]},5).to({state:[{t:this.instance_8,p:{x:506,y:304}}]},2).to({state:[{t:this.instance_8,p:{x:505.8,y:307}}]},1).to({state:[{t:this.instance_8,p:{x:506.2,y:302.2}}]},4).to({state:[{t:this.instance_8,p:{x:506.2,y:302.2}}]},27).to({state:[]},17).to({state:[{t:this.instance_8,p:{x:506.8,y:297.2}}]},112).to({state:[{t:this.instance_8,p:{x:506.7,y:299.2}}]},2).to({state:[{t:this.instance_8,p:{x:506.4,y:301}}]},1).to({state:[{t:this.instance_8,p:{x:506.2,y:302.2}}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_9,p:{skewY:0,x:464.6}}]},1).to({state:[{t:this.instance_8,p:{x:506.2,y:302.2}}]},1).to({state:[{t:this.instance_9,p:{skewY:180,x:531.9}}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// FRE_prof_ear_v01
	this.instance_10 = new lib.FRD_MODEL_part_032("single",0);
	this.instance_10.setTransform(450.6,330.7,1,1,0,0,0,2.7,2.5);

	this.instance_11 = new lib.FRD_MODEL_part_033("single",0);
	this.instance_11.setTransform(557.2,330.4,1,1,0,0,0,2.6,2.4);

	this.instance_12 = new lib.FRE_prof_ear_v01("synched",0);
	this.instance_12.setTransform(522.6,347.2);

	this.instance_13 = new lib.FRD_MODEL_part_023("single",0);
	this.instance_13.setTransform(530.6,311.8,1,1,0,0,0,15.8,1.8);

	this.instance_14 = new lib.FRD_MODEL_part_020("single",0);
	this.instance_14.setTransform(418.2,312.6,1,1,0,0,0,11.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11,p:{x:557.2,y:330.4}},{t:this.instance_10,p:{x:450.6,y:330.7}}]}).to({state:[{t:this.instance_11,p:{x:557.2,y:330.4}},{t:this.instance_10,p:{x:450.6,y:330.7}}]},5).to({state:[]},2).to({state:[]},1).to({state:[]},4).to({state:[{t:this.instance_11,p:{x:554.5,y:334.5}},{t:this.instance_10,p:{x:453.2,y:333.9}}]},27).to({state:[]},17).to({state:[]},112).to({state:[{t:this.instance_11,p:{x:557.7,y:327.4}},{t:this.instance_10,p:{x:451.1,y:327.7}}]},2).to({state:[{t:this.instance_11,p:{x:557.4,y:329.2}},{t:this.instance_10,p:{x:450.8,y:329.5}}]},1).to({state:[{t:this.instance_11,p:{x:557.2,y:330.4}},{t:this.instance_10,p:{x:450.6,y:330.7}}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_12,p:{skewY:0,x:522.6}}]},1).to({state:[{t:this.instance_14,p:{skewY:0,x:418.2}},{t:this.instance_13,p:{skewY:0,x:530.6}}]},1).to({state:[{t:this.instance_11,p:{x:561,y:334.4}},{t:this.instance_10,p:{x:447.9,y:333.4}}]},1).to({state:[{t:this.instance_13,p:{skewY:180,x:465.9}},{t:this.instance_14,p:{skewY:180,x:578.2}}]},1).to({state:[{t:this.instance_12,p:{skewY:180,x:458.4}}]},1).wait(1));

	// FRE_prof_ear_v01
	this.instance_15 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_15.setTransform(447.9,336.8,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_16 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_16.setTransform(560,336.7,1,1,0,0,0,17.7,20.9);

	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.setTransform(504.9,332.9);

	this.instance_18 = new lib.FRE_prof_hair_v01("synched",0);
	this.instance_18.setTransform(564.1,321.9);

	this.instance_19 = new lib.FRD_MODEL_part_021("single",0);
	this.instance_19.setTransform(416.1,328.6,1,1,0,0,0,2.5,2.3);

	this.instance_20 = new lib.FRD_MODEL_part_022("single",0);
	this.instance_20.setTransform(529.2,328.6,1,1,0,0,0,2.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{startPosition:0,x:560,y:336.7}},{t:this.instance_15,p:{startPosition:0,x:447.9,y:336.8}}]}).to({state:[{t:this.instance_16,p:{startPosition:1,x:560,y:336.7}},{t:this.instance_15,p:{startPosition:1,x:447.9,y:336.8}}]},5).to({state:[{t:this.instance_16,p:{startPosition:6,x:559.8,y:338.5}},{t:this.instance_15,p:{startPosition:6,x:447.7,y:338.6}}]},2).to({state:[{t:this.instance_16,p:{startPosition:6,x:559.6,y:341.5}},{t:this.instance_15,p:{startPosition:6,x:447.5,y:341.6}}]},1).to({state:[{t:this.instance_16,p:{startPosition:6,x:560,y:336.7}},{t:this.instance_15,p:{startPosition:6,x:447.9,y:336.8}}]},4).to({state:[{t:this.instance_16,p:{startPosition:4,x:560,y:336.7}},{t:this.instance_15,p:{startPosition:4,x:447.9,y:336.8}}]},27).to({state:[]},17).to({state:[{t:this.instance_17}]},112).to({state:[{t:this.instance_16,p:{startPosition:1,x:560.5,y:333.7}},{t:this.instance_15,p:{startPosition:1,x:448.4,y:333.8}}]},2).to({state:[{t:this.instance_16,p:{startPosition:0,x:560.2,y:335.5}},{t:this.instance_15,p:{startPosition:0,x:448.1,y:335.6}}]},1).to({state:[{t:this.instance_16,p:{startPosition:0,x:560,y:336.7}},{t:this.instance_15,p:{startPosition:0,x:447.9,y:336.8}}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_18,p:{skewY:0,x:564.1}}]},1).to({state:[{t:this.instance_20,p:{skewY:0,x:529.2}},{t:this.instance_19,p:{skewY:0,x:416.1}}]},1).to({state:[{t:this.instance_16,p:{startPosition:0,x:560,y:336.7}},{t:this.instance_15,p:{startPosition:0,x:447.9,y:336.8}}]},1).to({state:[{t:this.instance_20,p:{skewY:180,x:467.3}},{t:this.instance_19,p:{skewY:180,x:580.4}}]},1).to({state:[{t:this.instance_18,p:{skewY:180,x:416.8}}]},1).wait(1));

	// FRE_prof_hair_v01
	this.instance_21 = new lib.FRD_MODEL_part_029("single",0);
	this.instance_21.setTransform(508.7,254.5,1,1,0,0,0,33,13.2);

	this.instance_22 = new lib.FRE_prof_brow_v01("synched",0);
	this.instance_22.setTransform(457,306.9);

	this.instance_23 = new lib.FRD_MODEL_part_035("single",0);
	this.instance_23.setTransform(415.4,330.7,0.897,0.897,0,0,0,18.6,20);

	this.instance_24 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_24.setTransform(531.8,332.8,1,1,0,0,0,17.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21}]}).to({state:[{t:this.instance_21}]},5).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},4).to({state:[{t:this.instance_21}]},27).to({state:[]},17).to({state:[{t:this.instance_21}]},112).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_22,p:{skewY:0,x:457}}]},1).to({state:[{t:this.instance_24},{t:this.instance_23}]},1).to({state:[{t:this.instance_21}]},1).to({state:[]},1).to({state:[{t:this.instance_22,p:{skewY:180,x:523.9}}]},1).wait(1));

	// FRE_prof_brow_v01
	this.instance_25 = new lib.FRD_FRONT_MOUTH_COMP("single",21);
	this.instance_25.setTransform(501.5,379.8,1,1,0,0,0,59.6,14);

	this.instance_26 = new lib.FRE_prof_pupil_v01("synched",0);
	this.instance_26.setTransform(451.7,333.8);

	this.instance_27 = new lib.FRD_MODEL_part_012("single",0);
	this.instance_27.setTransform(495.9,340.9,1,1,0,0,0,113.7,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25,p:{x:501.5,y:379.8,startPosition:21}}]}).to({state:[{t:this.instance_25,p:{x:501.5,y:379.8,startPosition:21}}]},5).to({state:[{t:this.instance_25,p:{x:501.4,y:381.6,startPosition:21}}]},2).to({state:[{t:this.instance_25,p:{x:501.1,y:384.6,startPosition:21}}]},1).to({state:[{t:this.instance_25,p:{x:501.5,y:379.8,startPosition:21}}]},4).to({state:[{t:this.instance_25,p:{x:501.5,y:379.8,startPosition:21}}]},27).to({state:[]},17).to({state:[{t:this.instance_25,p:{x:502.3,y:373.8,startPosition:25}}]},112).to({state:[{t:this.instance_25,p:{x:502,y:376.8,startPosition:21}}]},2).to({state:[{t:this.instance_25,p:{x:501.7,y:378.6,startPosition:21}}]},1).to({state:[{t:this.instance_25,p:{x:501.5,y:379.8,startPosition:21}}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_26,p:{skewY:0,x:451.7}}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_25,p:{x:501.5,y:379.8,startPosition:0}}]},1).to({state:[]},1).to({state:[{t:this.instance_26,p:{skewY:180,x:529.3}}]},1).wait(1));

	// FRE_prof_pupil_v01
	this.instance_28 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_28.setTransform(501.4,416.3,1,1,0,0,0,84.4,169.6);

	this.instance_29 = new lib.FRE_prof_eye_v01("synched",0);
	this.instance_29.setTransform(456.6,335.9,1.173,1);

	this.instance_30 = new lib.FRD_MODEL_part_014("single",0);
	this.instance_30.setTransform(404.6,349.8,1,1,0,0,0,14.6,20.9);

	this.instance_31 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_31.setTransform(464.6,332.8,1,1,0,0,180,17.7,20.9);

	this.instance_32 = new lib.FRD_MODEL_part_035("single",0);
	this.instance_32.setTransform(581,330.7,0.897,0.897,0,0,180,18.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28}]}).to({state:[{t:this.instance_28}]},5).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},4).to({state:[{t:this.instance_28}]},27).to({state:[]},17).to({state:[{t:this.instance_28}]},112).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_28}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_29,p:{skewY:0,x:456.6}}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_32},{t:this.instance_31}]},1).to({state:[{t:this.instance_29,p:{skewY:180,x:524.3}}]},1).wait(1));

	// FRE_prof_eye_v01
	this.instance_33 = new lib.FRD_MODEL_part_031("single",0);
	this.instance_33.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.instance_34 = new lib.FRD_MODEL_part_031copy2("single",0);
	this.instance_34.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.instance_35 = new lib.FRE_prof_nose_v01("synched",0);
	this.instance_35.setTransform(402,338.5);

	this.instance_36 = new lib.FRD_MODEL_part_015("single",0);
	this.instance_36.setTransform(418.2,317.2,1,1,0,0,0,46.3,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33}]}).to({state:[{t:this.instance_33}]},5).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},4).to({state:[{t:this.instance_33}]},27).to({state:[{t:this.instance_34}]},17).to({state:[{t:this.instance_33}]},112).to({state:[{t:this.instance_33}]},2).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_33}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_35,p:{skewY:0,x:402}}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_33}]},1).to({state:[]},1).to({state:[{t:this.instance_35,p:{skewY:180,x:579}}]},1).wait(1));

	// FRE_prof_nose_v01
	this.instance_37 = new lib.FRD_MODEL_part_030("single",0);
	this.instance_37.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.instance_38 = new lib.FRD_MODEL_part_030copy("single",0);
	this.instance_38.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.instance_39 = new lib.FRE_prof_face_v01("synched",0);
	this.instance_39.setTransform(479.9,339.6);

	this.instance_40 = new lib.FRD_MODEL_part_025("single",0);
	this.instance_40.setTransform(513.8,242.8,1,1,0,0,0,48.9,80.7);

	this.instance_41 = new lib.FRD_MODEL_part_012("single",0);
	this.instance_41.setTransform(500.6,340.9,1,1,0,0,180,113.7,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37}]}).to({state:[{t:this.instance_37}]},5).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},4).to({state:[{t:this.instance_37}]},27).to({state:[{t:this.instance_38}]},17).to({state:[{t:this.instance_37}]},112).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_37}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_39,p:{skewY:0,x:479.9}}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_39,p:{skewY:180,x:501}}]},1).wait(1));

	// FRE_prof_face_v01
	this.instance_42 = new lib.FRD_MODEL_part_038("single",0);
	this.instance_42.setTransform(504,349.6,1,1,0,0,0,126.2,90);

	this.instance_43 = new lib.FRE_prof_hat_v01("synched",0);
	this.instance_43.setTransform(508.6,201.5);

	this.instance_44 = new lib.FRD_MODEL_part_014("single",0);
	this.instance_44.setTransform(591.8,349.8,1,1,0,0,180,14.6,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).to({state:[{t:this.instance_42}]},5).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},4).to({state:[{t:this.instance_42}]},27).to({state:[]},17).to({state:[]},8).to({state:[{t:this.instance_42}]},104).to({state:[{t:this.instance_42}]},2).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_43,p:{skewY:0,x:508.6}}]},1).to({state:[]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_43,p:{skewY:180,x:472.4}}]},1).wait(1));

	// FRE_prof_hat_v01
	this.instance_45 = new lib.FRD_MODEL_part_039("single",0);
	this.instance_45.setTransform(488.6,238.1,1,1,-1.5,0,0,35.8,87);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(41,45,54,0.4)").s().p("AgDgCIADgDIAEALIgHgIg");
	this.shape_4.setTransform(561.1,271.4);

	this.instance_46 = new lib.FRD_MODEL_part_015("single",0);
	this.instance_46.setTransform(578.2,317.2,1,1,0,0,180,46.3,62.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(41,45,54,0.4)").s().p("AgBgBIADABIgBACIgCgDg");
	this.shape_5.setTransform(435.4,271.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_45}]}).to({state:[{t:this.instance_45}]},12).to({state:[{t:this.instance_45}]},27).to({state:[]},17).to({state:[{t:this.instance_45}]},101).to({state:[{t:this.instance_45}]},14).to({state:[{t:this.instance_45}]},1).to({state:[]},23).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 12
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(41,45,54,0.4)").s().p("AgBAAIADgBIgCADIgBgCg");
	this.shape_6.setTransform(545.5,271.5);

	this.instance_47 = new lib.FRD_MODEL_part_025("single",1);
	this.instance_47.setTransform(482.6,242.8,1,1,0,0,180,48.9,80.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(41,45,54,0.4)").s().p("AABgFIADADIgHAIIAEgLg");
	this.shape_7.setTransform(419.8,271.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},12).to({state:[]},27).to({state:[]},17).to({state:[]},10).to({state:[]},10).to({state:[]},19).to({state:[]},10).to({state:[]},4).to({state:[]},48).to({state:[]},14).to({state:[]},24).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.7,150.3,248.6,287.6);


(lib.Freddy_Headclip_ProfFiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(558.3,308.5,0.999,0.999,-24,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(442.6,305.8,1,1,15,0,0,13.7,3.4);

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(502.3,316);

	this.instance_3 = new lib.Tween7("synched",0);
	this.instance_3.setTransform(504.1,286.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,startPosition:0}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,regY:4.2}}]}).to({state:[{t:this.instance_1,p:{x:442.5,y:307.6,regX:13.7,rotation:15,startPosition:0}},{t:this.instance,p:{x:558.1,y:310.9,rotation:-24,regY:4.2}}]},5).to({state:[{t:this.instance_1,p:{x:443.8,y:318,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:556.8,y:318.9,rotation:-39,regY:4.2}}]},2).to({state:[{t:this.instance_1,p:{x:443.3,y:324,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:556.3,y:324.9,rotation:-39,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:443.7,y:319.2,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:556.7,y:320.1,rotation:-39,regY:4.2}}]},4).to({state:[{t:this.instance_1,p:{x:444.5,y:313.2,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:557.5,y:314.1,rotation:-39,regY:4.2}}]},27).to({state:[{t:this.instance_1,p:{x:442.4,y:328.3,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:555.5,y:329.3,rotation:-39,regY:4.2}}]},17).to({state:[{t:this.instance_1,p:{x:446.2,y:309.8,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:558.1,y:316.3,rotation:-39,regY:4.3}}]},10).to({state:[{t:this.instance_1,p:{x:445.9,y:306.2,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:557.8,y:312.7,rotation:-39,regY:4.3}}]},1).to({state:[{t:this.instance_1,p:{x:446.1,y:308.6,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:558,y:315.1,rotation:-39,regY:4.3}}]},7).to({state:[{t:this.instance_1,p:{x:442.5,y:322.5,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:555.6,y:323.5,rotation:-39,regY:4.2}}]},2).to({state:[{t:this.instance_1,p:{x:442.4,y:328.3,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:555.5,y:329.3,rotation:-39,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:442.3,y:320.3,regX:13.6,rotation:30,startPosition:0}},{t:this.instance,p:{x:555.4,y:321.3,rotation:-39,regY:4.2}}]},17).to({state:[{t:this.instance_1,p:{x:445.9,y:306.2,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:557.8,y:312.7,rotation:-39,regY:4.3}}]},1).to({state:[{t:this.instance_1,p:{x:445.9,y:306.2,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:557.8,y:312.7,rotation:-39,regY:4.3}}]},8).to({state:[{t:this.instance_1,p:{x:445.4,y:314,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:557.6,y:317.1,rotation:-39,regY:4.3}}]},2).to({state:[{t:this.instance_1,p:{x:445.4,y:314,regX:13.6,rotation:30,startPosition:1}},{t:this.instance,p:{x:557.6,y:317.1,rotation:-39,regY:4.3}}]},1).to({state:[{t:this.instance_2,p:{x:502.3,y:316}}]},1).to({state:[{t:this.instance_2,p:{x:502.8,y:308.6}}]},1).to({state:[{t:this.instance_2,p:{x:503.2,y:301.2}}]},1).to({state:[{t:this.instance_2,p:{x:503.7,y:293.8}}]},1).to({state:[{t:this.instance_3,p:{x:504.1,y:286.4}}]},1).to({state:[{t:this.instance_3,p:{x:503.9,y:287.6}}]},57).to({state:[{t:this.instance_1,p:{x:444.2,y:295.9,regX:13.7,rotation:15,startPosition:0}},{t:this.instance,p:{x:559.9,y:298.6,rotation:-24,regY:4.2}}]},2).to({state:[{t:this.instance_1,p:{x:442.8,y:304.6,regX:13.7,rotation:15,startPosition:0}},{t:this.instance,p:{x:558.5,y:307.3,rotation:-24,regY:4.2}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regX:13.7,rotation:15,startPosition:0}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,regY:4.2}}]},1).wait(6));

	// Layer 2
	this.instance_4 = new lib.FRD_FRONT_part_nose("single",0);
	this.instance_4.setTransform(506.2,302.2,1,1,0,0,0,28.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({startPosition:0},0).wait(2).to({x:506,y:304},0).wait(1).to({x:505.8,y:307},0).wait(4).to({x:506.2,y:302.2},0).wait(27).to({startPosition:0},0).wait(17).to({x:504.8,y:312},0).wait(10).to({x:506.2,y:302.2},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({x:504.8,y:312},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({x:506.2,y:302.2},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:506.4,y:300.6},0).wait(1).to({x:506.6,y:299.1},0).wait(1).to({x:506.8,y:297.5},0).wait(1).to({x:507,y:296},0).wait(57).to({x:506.8,y:297.2},0).wait(2).to({x:506.7,y:299.2},0).wait(1).to({x:506.4,y:301},0).wait(1).to({x:506.2,y:302.2},0).wait(6));

	// FRE_prof_ear_v01
	this.instance_5 = new lib.FRD_MODEL_part_032("single",0);
	this.instance_5.setTransform(450.6,330.7,1,1,0,0,0,2.7,2.5);

	this.instance_6 = new lib.FRD_MODEL_part_033("single",0);
	this.instance_6.setTransform(557.2,330.4,1,1,0,0,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{x:557.2,y:330.4}},{t:this.instance_5,p:{x:450.6,y:330.7}}]}).to({state:[{t:this.instance_6,p:{x:557.2,y:330.4}},{t:this.instance_5,p:{x:450.6,y:330.7}}]},5).to({state:[]},2).to({state:[]},1).to({state:[]},4).to({state:[{t:this.instance_6,p:{x:554.5,y:334.5}},{t:this.instance_5,p:{x:453.2,y:333.9}}]},27).to({state:[]},17).to({state:[{t:this.instance_6,p:{x:552.5,y:330.9}},{t:this.instance_5,p:{x:453.4,y:328.4}}]},10).to({state:[{t:this.instance_6,p:{x:552,y:323.3}},{t:this.instance_5,p:{x:453,y:320.8}}]},1).to({state:[{t:this.instance_6,p:{x:552.4,y:329.1}},{t:this.instance_5,p:{x:453.5,y:328.4}}]},7).to({state:[]},2).to({state:[]},1).to({state:[{t:this.instance_6,p:{x:552.1,y:337.9}},{t:this.instance_5,p:{x:453.1,y:338.4}}]},17).to({state:[{t:this.instance_6,p:{x:552,y:323.3}},{t:this.instance_5,p:{x:453,y:320.8}}]},1).to({state:[{t:this.instance_6,p:{x:551.8,y:329.1}},{t:this.instance_5,p:{x:452.8,y:326.6}}]},8).to({state:[{t:this.instance_6,p:{x:551.9,y:336.8}},{t:this.instance_5,p:{x:454.3,y:338}}]},2).to({state:[{t:this.instance_6,p:{x:551.9,y:339.8}},{t:this.instance_5,p:{x:454.3,y:341}}]},1).to({state:[]},1).to({state:[]},4).to({state:[]},57).to({state:[{t:this.instance_6,p:{x:557.7,y:327.4}},{t:this.instance_5,p:{x:451.1,y:327.7}}]},2).to({state:[{t:this.instance_6,p:{x:557.4,y:329.2}},{t:this.instance_5,p:{x:450.8,y:329.5}}]},1).to({state:[{t:this.instance_6,p:{x:557.2,y:330.4}},{t:this.instance_5,p:{x:450.6,y:330.7}}]},1).wait(6));

	// FRE_prof_ear_v01
	this.instance_7 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_7.setTransform(447.9,336.8,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_8 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_8.setTransform(560,336.7,1,1,0,0,0,17.7,20.9);

	this.instance_9 = new lib.Tween8("synched",0);
	this.instance_9.setTransform(503.5,342.6);

	this.instance_10 = new lib.Tween9("synched",0);
	this.instance_10.setTransform(505.1,331.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{startPosition:0,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:0,x:447.9,y:336.8}}]}).to({state:[{t:this.instance_8,p:{startPosition:1,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:1,x:447.9,y:336.8}}]},5).to({state:[{t:this.instance_8,p:{startPosition:6,x:559.8,y:338.5}},{t:this.instance_7,p:{startPosition:6,x:447.7,y:338.6}}]},2).to({state:[{t:this.instance_8,p:{startPosition:6,x:559.6,y:341.5}},{t:this.instance_7,p:{startPosition:6,x:447.5,y:341.6}}]},1).to({state:[{t:this.instance_8,p:{startPosition:6,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:6,x:447.9,y:336.8}}]},4).to({state:[{t:this.instance_8,p:{startPosition:4,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:4,x:447.9,y:336.8}}]},27).to({state:[{t:this.instance_8,p:{startPosition:6,x:558.7,y:345.9}},{t:this.instance_7,p:{startPosition:6,x:446.6,y:345.9}}]},17).to({state:[{t:this.instance_8,p:{startPosition:1,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:1,x:447.5,y:336.7}}]},10).to({state:[{t:this.instance_8,p:{startPosition:7,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:0,x:447.5,y:336.7}}]},1).to({state:[{t:this.instance_8,p:{startPosition:1,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:1,x:447.5,y:336.7}}]},7).to({state:[{t:this.instance_8,p:{startPosition:6,x:558.7,y:345.9}},{t:this.instance_7,p:{startPosition:6,x:446.6,y:345.9}}]},2).to({state:[{t:this.instance_8,p:{startPosition:6,x:558.7,y:345.9}},{t:this.instance_7,p:{startPosition:6,x:446.6,y:345.9}}]},1).to({state:[{t:this.instance_8,p:{startPosition:1,x:558.7,y:345.9}},{t:this.instance_7,p:{startPosition:1,x:446.6,y:345.9}}]},17).to({state:[{t:this.instance_8,p:{startPosition:7,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:0,x:447.5,y:336.7}}]},1).to({state:[{t:this.instance_8,p:{startPosition:7,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:0,x:447.5,y:336.7}}]},8).to({state:[{t:this.instance_8,p:{startPosition:4,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:4,x:447.5,y:336.7}}]},2).to({state:[{t:this.instance_8,p:{startPosition:4,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:4,x:447.5,y:336.7}}]},1).to({state:[{t:this.instance_9,p:{x:503.5,y:342.6}}]},1).to({state:[{t:this.instance_9,p:{x:503.9,y:339.9}}]},1).to({state:[{t:this.instance_9,p:{x:504.3,y:337.1}}]},1).to({state:[{t:this.instance_9,p:{x:504.7,y:334.4}}]},1).to({state:[{t:this.instance_10,p:{x:505.1,y:331.7}}]},1).to({state:[{t:this.instance_10,p:{x:504.9,y:332.9}}]},57).to({state:[{t:this.instance_8,p:{startPosition:1,x:560.5,y:333.7}},{t:this.instance_7,p:{startPosition:1,x:448.4,y:333.8}}]},2).to({state:[{t:this.instance_8,p:{startPosition:0,x:560.2,y:335.5}},{t:this.instance_7,p:{startPosition:0,x:448.1,y:335.6}}]},1).to({state:[{t:this.instance_8,p:{startPosition:0,x:560,y:336.7}},{t:this.instance_7,p:{startPosition:0,x:447.9,y:336.8}}]},1).wait(6));

	// FRE_prof_hair_v01
	this.instance_11 = new lib.FRD_MODEL_part_029("single",0);
	this.instance_11.setTransform(508.7,254.5,1,1,0,0,0,33,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(57).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// FRE_prof_brow_v01
	this.instance_12 = new lib.FRD_FRONT_MOUTH_COMP("single",21);
	this.instance_12.setTransform(501.5,379.8,1,1,0,0,0,59.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({startPosition:22},0).wait(2).to({x:501.4,y:381.6},0).wait(1).to({x:501.1,y:384.6,startPosition:23},0).wait(2).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({x:501.5,y:379.8},0).wait(2).to({startPosition:27},0).wait(1).to({startPosition:28},0).wait(20).to({startPosition:27},0).wait(2).to({startPosition:25},0).wait(2).to({startPosition:24},0).wait(2).to({startPosition:23},0).wait(13).to({startPosition:22},0).wait(2).to({x:500.7,y:385.6,startPosition:27},0).wait(7).to({startPosition:32},0).wait(2).to({startPosition:23},0).wait(1).to({x:501.5,y:379.8,startPosition:25},0).wait(1).to({startPosition:25},0).wait(2).to({startPosition:24},0).wait(1).to({startPosition:39},0).wait(3).to({startPosition:27},0).wait(1).to({startPosition:27},0).wait(2).to({x:500.7,y:385.6},0).wait(1).to({startPosition:27},0).wait(13).to({startPosition:24},0).wait(1).to({startPosition:32},0).wait(3).to({startPosition:25},0).wait(1).to({x:501.5,y:379.8,startPosition:24},0).wait(1).to({startPosition:23},0).wait(1).to({startPosition:39},0).wait(6).to({startPosition:23},0).wait(2).to({startPosition:24},0).wait(1).to({startPosition:25},0).wait(1).to({startPosition:25},0).wait(1).to({x:501.8,y:378},0).wait(1).to({x:502,y:376.2},0).wait(1).to({x:502.3,y:374.4},0).wait(1).to({x:502.5,y:372.6},0).wait(37).to({startPosition:24},0).wait(2).to({startPosition:23},0).wait(2).to({startPosition:21},0).wait(16).to({x:502.3,y:373.8},0).wait(2).to({x:502,y:376.8},0).wait(1).to({x:501.7,y:378.6},0).wait(1).to({x:501.5,y:379.8},0).wait(6));

	// FRE_prof_pupil_v01
	this.instance_13 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_13.setTransform(501.4,416.3,1,1,0,0,0,84.4,169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(57).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// FRE_prof_eye_v01
	this.instance_14 = new lib.FRD_MODEL_part_031("single",0);
	this.instance_14.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(57).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// FRE_prof_nose_v01
	this.instance_15 = new lib.FRD_MODEL_part_030("single",0);
	this.instance_15.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(5).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(7).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(8).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(57).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

	// FRE_prof_face_v01
	this.instance_16 = new lib.FRD_MODEL_part_038("single",0);
	this.instance_16.setTransform(504,349.6,1,1,0,0,0,126.2,90);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(30,31,38,0.502)").s().p("ABkIgQgOAAgFgKIgBgHQgTAKgYgBQgMAAgDgHIgBgIQAAgIAhgbQAfgcAAgdQAAg4gWg+QgWg1AAgHQAAgNAQgIQAEgCAggLQAzgSABgkQAAghgegdQgfgeAAgLQAAgOAigUQAigWAAgYQAAgQgygbQgxgaAAgVQAAgNAUgWQASgVAAgXQAAgrg3gGQgegCgGgEQgSgIAAgWQAIgegCgUQgCgkgygCQgogBgSAKQgRAJgMAAQgxgBgEgpQADgtgDgLQgJgWgUgVQgQgQgugjQAqgPAfATQALgVAsAjQAdAXAdAhQAEAAAegRQAngTApABQBPACAEA7QACAggOA0QBiADAiAtQATAZAAAuQAAALgKArIgLAuQAAAHAeAdIAAABQAngeAAB9QAAALgwBOQArAUAMAJQAOALAAAQQAAA0g/AxIgsAgQgUANAAAGQAAATAMAoQAMAnAAATQAAAggPAnQgZA8gzAAIgCAAgACOBAIABABIABgCIgCABgAgNmNIgBgCIgBAAIACACg");
	this.shape.setTransform(595.6,319.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#17171F").s().p("AFsGyQgNgIAAgKQgBgEAFgEQAEgDADAAQABAAAJAIQAHAIAWAAQAvgBAbgJIAAAAIADgBQAOgFAJgJQAWgLAIgCQAHAAAAAKQAAAPgnASQgMAGgMAEIAAAAQgWAIgRAAIgEAAQgvAAgVgKgAi5FNQgagOAAgJQAAgKAGABQADABARAHQArATAqgCQARAAAWgNQAWgOADAAQAMAAABAMQgBALgaAPQgaANgUABIgIAAQgwAAghgSgAoBDtQgSgQAAgMQABgHAEgJQAFgKAGgBQAFAIAAAKQAAAIAhAVQAcARAMAFIgLACIgUACIgCAAQgXAAgUgSgAC8BSQgcgRAAgKQAAgKAgANQAtASAbAAQAegBAdgNIAdgNQAMAAAAAOQABAPgpANQgjALgZAAIgEAAQgoAAgggUgAo9gGIgJgtQAAgSABgFQAEgSANgFQAHAVAFAqQAJAkAWAaIAAADQgCADgLABIgBAAQgZAAgNgpgAjng4QgmgaADgSIADAAQAWAXAcAKQAiAMA9gBQALgBAHADIAHACQgFAGgPAJQgPAIgHAAIgGAAQgxAAgpgbgAHqjRQgUgNAAgKQAAgJAMAAQACAAAOAMQATAMAWAAQAagBAVgCIgBAYQgQACgQAAQgmAAgZgPgAh6kUQgpgeAAgfQAAgIADgDQABgCAGgBQALAkA1AVQA0AVBGAAIADAHIgWAOQgJAHgcABIgDAAQg2AAgqgggApJlcQABgeASgYQAVgbAogOQgEAIgTAaQgUAbgGALQgEAHgBAaQgBAYgHAKQgRgKgBgig");
	this.shape_1.setTransform(457.3,333.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39394F").s().p("AEsJUQgjgOgIgHQgjgpgLgIIgEgCQgHgBgHAIQgSARAAACQgeAZg1AAQg6gCgmguIgZggQgMgQgEAAQgJAAgCAGQgJAMABABQgRAQg6AAQg1gDgjgnQgagqgHAAQgWAHgSAKQgKACgEAGQgFABgCACQgRADgnABQgNgDgLgUQgNgYgJACQgGgBgZAHQgcAFgEAAQhGgCgagtQgQgbABggQgCgRAWgsQAKgYAKgUQAAgIg/grQhCg1ACgyQgCgbAigZQAggXAAgHQgBgEgcgnQgfgpgBgbQgCgXAggVQAYgRAogJQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIABgBIgCAAIgZg4QgMghgBgpQgDgqAyggQAvgiARAAQAJgCARgHIgBgOQgHgkAFgOQAHg8BdAFQAhACAaAMQAPAIAJADQgCAGAFAGQACABAIAHQAOggASgVQAmgrA+AJQA7AIARAOIAGAFIABABIAAAAIAOANIAGAHQACAAADADIAVASQAmAgAOAHQANACA1grQA6guA0AHIAOADQA3APAvAnQAsAiABAEQgBgEAQgRQAPgSAegdQAbgaBjACIADAAQAWABATACIAbAEQAqAIAeASIgSGdQgUADgaAAQgWAAgTgMQgOgLgCAAQgMAAAAAJQAAAKAUAMQAZAQAmAAQAQgBAPgCIgeLFQgVgIgPgOQgOgSgGgEQgKgJgIAAIgEAAIAAgBQgMABgBAKIgJAWIgKAJQgKAHgRAFQgpALhPABQgjAAgsgQgAG1HwQgFAEAAADQAAALAOAHQAVALAzAAQARgBAWgIIAAABQAMgEAMgHQAngSAAgOQAAgKgIAAQgHABgWAMQgJAIgPAGIgCABIAAgBQgbAKgvABQgWAAgIgIQgIgJgBAAQgDAAgEAEgAiBGNQAAAJAaAPQAjATA2gBQASgBAagOQAagPAAgLQgBgMgLAAQgDABgWANQgUANgRABQgqABgrgTQgRgHgDAAIgBAAQgFAAAAAIgAm9EZQgEAIAAAHQAAANASAQQAVASAYgBIATgBIAMgDQgMgEgcgSQghgUAAgJQAAgJgFgJQgHABgFALgADyCOQAAALAcARQAiAVApgBQAagBAigLQApgMAAgQQAAgNgMAAIgdANQgeANgeAAQgaABgtgSQgSgIgIAAQgGAAAAAEgAnzAMQgBAEAAASIAJAtQANAsAagBQALAAACgDIAAgEQgWgagJglQgGgqgGgTQgOAFgDAQgAiVAdQArAdA1gCQAGAAAPgIQAQgIAFgHIgHgCQgHgCgLAAQg9ACgjgMQgcgKgVgVIgEAAQgCAQAmAZgAhPkEQgCACAAAIQAAAfAoAfQAqAgA4gBQAdAAAKgIIAVgOIgCgHQhIABgygVQg2gWgKgjQgGABgCACgAnkk7QgTAYAAAeQAAAjASAJQAHgJABgYQABgbAEgHQAFgLAUgaQAUgaAEgJQgpAPgUAag");
	this.shape_2.setTransform(449.1,324.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AENJdQgdgRgPgRIgGgJQgjAnhOAAQg+gCgpgmQgfgpgDABQgMADgLAHQgdAIgrAAQg5gDgiggQgcgogIgIQgiAPgOAIQAAAAgBAAQAAABAAAAQAAAAAAAAQAAABABAAQgFgBgFADQgBgBAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAIgBAAIgcACQgogCgOgNQgJgIgKgNQgZAGgfABQhkgCgchLQgLgbAAgdIAAgdQAAgRAKgVQAHgUALgMQg5gkgdgoQgfgqABglQgBgoAvgvQgBgDgVglQgZgoABggQgFgiAdgeQAbgjAsAJIgYgnIgOgfQgWg4AjgxQAhg1BagTQgFg9AagjQAggrA1AAQAzgCAbAKQAaAKAJAGQAJgVAXgNQAjgSA3gFQAzgBAnANIAJAEQABADALAFQAIADAiAgQAeAfAQABQAIAAAxgjQA2gfA/ABIALABQBCACBHA/QATgHAbgaQAigYBLgEQgBgBA1gBIAVABIgWAAIAWAAIASACIAaADQAjAHAkAPIgBAkQgegSgqgIIgbgEQgTgCgWgBIgDAAQhjgCgbAaQgeAdgPASQgQARABAEQgBgEgsgiQgvgng3gPIgOgDQg0gHg6AuQg1ArgNgCQgOgHgmggIgVgSQgDgDgCAAIgGgHIgOgNIAAAAIgBgBIgGgFQgRgOg7gIQg+gJgmArQgSAVgOAgQgIgHgCgBQgFgGACgGQgJgDgPgIQgagMghgCQhdgFgHA8QgFAOAHAkIABAOQgRAHgJACQgRAAgvAiQgyAgADAqQABApAMAhIAZA4IACAAIgBABIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgoAJgYARQggAVACAXQABAbAfApQAcAnABAEQAAAHggAXQgiAZACAbQgCAyBCA1QA/ArAAAIQgKAUgKAYQgWAsACARQgBAgAQAbQAaAtBGACQAEAAAcgFQAZgHAGABQAJgCANAYQALAUANADQAngBARgDQACgCAFgBQAEgGAKgCQASgKAWgHQAHAAAaAqQAjAnA1ADQA6AAARgQQgBgBAJgMQACgGAJAAQAEAAAMAQIAXAgQAoAuA6ACQA1AAAegZQAAgCASgRQAHgIAHABIAEACQALAIAjApQAIAHAjAOQAsAQAjAAQBPgBApgLQARgFAKgHIAKgJIAJgWQABgKAMgBIAAABIAEAAQAIAAAKAJQAGAEAOASQAPAOAVAIIgBAeQgMgEgKgFQgTgKgcgaIgIAJIAAAAQgKAMgMAJIgMAGQgMAFgQAEQghAIg1ACQhegDg9ggg");
	this.shape_3.setTransform(447.7,324.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#17171F").s().p("AiYGEQgKgHAAgJQgBgFAEgEQADgDAFAAQADAAAFAHQAFAHAYABQAgAAAZgHIAYgJQAEgBAagVQAXgOgBAYQABAVg0ASQgsAOgWAAQglgBgRgLgAEkE9QgVgJgIgIQAegBAgghQAjgiAEgBIACAHIABAMQggBDgqAAIgBAAgABkDCQgHAAgDgFIgBgGQAAgCAlgXQAngXAFgNQAPgkAHAGQAFAEAAAXQglBLg6AAIgCAAgAGCgOQAEgTAAgQQABgPgHgKQgGgLAAgHIAAgIQAaAEAGAQQACAFAAAYQAAAbgFAMQgIATgdALQAJgNAHgTgAg/hXQgFAAgFgGQgEgFgBgBQAAgIBKgMQBHgXAAg5QAAgRAMAKQAMALgBAOQABAfgkAdQgsAihEAAIgGAAgAmajdQAbgDAOgIQAPgKAIAAQAJAAAAAJQAAAPghAMQgUAGgVADgAEekLQALgrAAgLQAAgPgZgXQgPgOglgaQAwAEAcAiQAVAbAAAeQAAALgIAOQgJAMgLAAIgDAAg");
	this.shape_4.setTransform(557,333.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#39394F").s().p("AonJFIAerEQAVgDATgHQAigMAAgPQAAgJgJABQgJAAgOAJQgOAJgbADIARmdIANAIQA0AnALARQAJAPAJAAIAQgJQAHgKAdgfQAaghBCACQBCgBAfAkQAbAdgJAOQAvgpApgZQAZgTAJgBIAJgCQARgJAXgCQA+gGAmAuQASAVANAhIAKgKIADgLIAYgLQAYgNAigBQBbgGAJA9QACAOgEAlQgEAeAEANIADgDQAfgGArAVQBDAfAAAmQgDAWgLAsQgPAtgLAMIABAGQgCAEAKABQABAAAAAAQAAgBAAAAQAAAAAAAAQAAAAgBgBQAZAMAgATQAgAWAAAWQgCAbgcAnQgeAkABAEQAAAHAgAZQAgAZAAAbQAAAyhAA1QhAArABAIQAKAUAKAXQASAuACAQQAAAggPAbQgcAthFACQgHABgZgGQgQgFgJgBQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQgiAegSADQgcACgPAEIgMACQghgDglgTQgdgOgKgNQgKgFgBABQgJgBgGATQgFALgIAeQgYA5g5ADQgSgCgVgTQgWgXgEAAQgHAAgIAMQgOAQgFALQggAkgsACQhaABgYgfQgDgEgIgSQgFgLgJACQgEgCgKAMIgYAXQgrAghFABQgZgBgUgHgAkNGxQgEADAAAFQAAAJALAHQAQALAmACQAWAAAsgOQA1gSAAgWQAAgYgYAPQgaAUgEACIgYAIQgaAIgfgBQgYgBgFgHQgGgHgDAAQgEAAgDAEgADXFQQggAggeACQAHAHAWAKQAqAAAhhEIgBgLIgCgIQgEACgjAigAA8DAQgFANgnAXQgjAWAAACIABAGQACAFAHAAQA6ACAmhNQAAgXgFgEIgCgBQgHAAgNAggAELgXQAAAHAHALQAGAJAAAOQAAARgFATQgGAVgJAMQAdgLAIgVQAFgLAAgcQAAgVgCgGQgGgPgagEgAgpiCQAAA5hJAXQhKANAAAHQAAACAFAFQAFAGAFAAQBKABAtgkQAkgdAAgfQAAgOgLgKQgFgEgCAAQgFAAAAAKgACikiQAZAXAAAQQAAALgLArQANACAKgPQAIgNAAgLQAAgfgWgbQgbghgwgFQAkAaAQAOg");
	this.shape_5.setTransform(568,326.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ao3JhIABgeQAUAHAZABQBGAAArghIAYgXQAKgLAEABQAJgCAFAMQAHASADADQAYAfBaAAQAsgCAgglQAGgLANgPQAJgMAGgBQAFAAAWAXQAUAUASACQA6gEAXg5QAJgeAEgKQAHgTAIAAQACgBAJAFQALAOAcAOQAlASAhADIANgCQAOgEAcgCQATgDAigdQAAAAgBgBQAAAAABAAQAAAAAAgBQABAAAAAAQAJAAARAFQAZAGAHAAQBEgDAdgsQAOgcABggQgCgQgTgtQgKgYgKgTQgBgJBBgrQBAg0AAgzQAAgagggZQgggaAAgHQgCgCAegmQAcgmACgcQAAgWgggVQgggUgYgLQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgKgBABgDIgBgHQALgMAPgtQAMgrADgWQgBgnhDgeQgrgVgeAGIgEACQgDgNAEgdQAEgmgCgNQgJg+hbAHQgiABgZANIgYAKIgCALIgLAKQgMgggTgWQglgtg+AFQgXADgRAJIgKABQgJACgZASQgpAZgvApQAKgNgbgdQgggkhBAAQhCgCgbAhQgcAggHAKIgRAIQgJAAgJgOQgKgRg1gnIgMgJIABgjIAZAMQAmAWAcAXIAngbQAsgaAwgBQAugGBTAwIApgVQAjgRAQgEQAFgDAGgCQAlgOAxACQA1ABAkAXQAWAOAJAWQAIgHAQgDQAhgKA0AAQAxgDAjAdQAeAagFAfQgIAdgBAlIAAABQBWAHAkAkQAaAbgCAvQgJAhgGAhQgMAhgIAQQAqgHAfAhQAbAdAAAiQgCAggVAmQgWAiABADQAtAmADAtQgDArgdAqQggAog2AkIARAhQAKAVAAAQIAAAeQgDAdgHAaQgeBLhkACQgOAAgjgFQAAAAAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQgoAkgsgBQgwgEgagIQgLgFgGAAIgOgFIgkgRQgVBphfAEQgeAAgTgOIgQgRQgPASgSARQgmAbg3ABQg7AAglgTQgbgQgEgMQhHAyhNACQgagBgVgGgAEdHYIABABIgBgBIAAAAIAAAAg");
	this.shape_6.setTransform(569.5,326.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(30,31,38,0.502)").s().p("ABkIrQgOgBgFgKIgBgGQgTAIgYgCQgMgBgDgHIgBgIQAAgIAhgaQAfgaAAgdQAAg4gWg/QgWg2AAgIQAAgMAQgHQAEgCAggJQAzgOABgkQAAghgeggQgfgfAAgLQAAgOAigTQAigTAAgYQAAgQgygeQgxgeAAgVQAAgNAUgUQASgUAAgXQAAgqg3gKQgegFgGgEQgSgKAAgVQAIgegCgUQgCglgygEQgogDgSAIQgRAIgMgBQgxgFgEgoQADgtgDgMQgJgWgUgXQgQgQgugnQAqgLAfAUQALgUAsAlQAdAaAdAjQAEABAegQQAngQApAEQBPAHAEA7QACAggOAzQBiAKAiAvQATAaAAAuQAAALgKAqIgLAtQAAAHAeAgIAAABQAngcAAB7QAAANgwBLQArAXAMAKQAOAMAAAQQAAA0g/AtIgsAcQgUANAAAGQAAATAMAnQAMAoAAATQAAAggPAmQgYA4guAAIgIgBgACOBPIABABIABgDIgCACgAgPmLIACACIgBgCIAAAAIgBAAg");
	this.shape_7.setTransform(595.6,323.5,1,1,0,0,0,0,0.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#17171F").s().p("Am8F1IAHgFIAQgHIAAABQAJgEAEgBQAIAAAAAKQAAALgUALIAAgBIgTAJIgEACgAgpGFQglgCgRgMQgKgIAAgJQAAgFADgDQADgDAFAAQADAAAFAIQAFAHAZABQAfACAZgGIAWgJQAEgBAagTQAZgOAAAYQAAAWg2APQgnAMgVAAIgEAAgAFeFAQgWgKgHgIQAdAAAhgfQAighAFgCIABAIIABALQgfBBgpAAIgCAAgACdC+QgHgBgDgFIgBgGQAAgCAlgUQAngWAFgNQAPgkAHAGQAFAFAAAXQgkBHg3AAIgGAAgAG7gHQAFgTAAgRQAAgOgHgLQgGgLAAgHIABgIQAZAFAGAQQACAGAAAXQAAAcgEALQgJATgcAJQAJgMAGgSgAgGhgQgFgBgFgFQgEgGAAgBQAAgIBHgKQBKgUAAg5QAAgQALAKQAMAKAAAOQAAAfgkAcQgpAfg+AAIgPAAgAmBjbQgmgCgZgRIgDgCIAAAAIgDgCIACgZIAMAKQATANAWABQA/AEAYgOQAPgJAJABQAIgBAAAJQAAAPghALQgcAJgeAAIgOgBgAnUkIQAAgJAMAAIAEACIAAABIAAAAIgCAZQgOgKAAgJgAFXkIQALgrAAgLQAAgPgYgYQgQgOglgbQAwAGAcAiQAWAcAAAeQAAALgJANQgJANgLgBIgDAAg");
	this.shape_8.setTransform(551.3,336.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#39394F").s().p("AkSI3QgEgEgHgSQgFgLgJABQgEgCgKAMIgYAWQgrAfhGgCQgvgEgdgaIAAgBIgFgFQgOgSgGgEIAAAAIgCgpIADgCIATgJIAAABQAVgLgBgLQAAgKgHAAQgFABgJAEIAAgBIgQAHIgHAFIgWm/IAMioIAEACIAAAAIACACQAZARAmACQAmADAigLQAhgLABgPQAAgJgJABQgJgBgPAJQgYAOg/gEQgWgBgTgNIgLgKIAfmmIANADQAzAOAhAaQA1ApAKARQAJAPAKABIAQgJQAHgJAdgfQAaggBCAEQBBACAgAlQAbAegJANQAugnAqgXQAWgSAJgBIAKgCQARgIAZgBQA+gEAlAvQATAWANAhIAKgJIACgMIAZgJQAYgMAiAAQBbgDAJA+QACANgEAmQgEAdADANIAEgCQAegFAsAWQBDAhAAAnQgDAWgMArQgPAsgKAMIABAHQgCADAKABQAAAAABgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAZANAgAVQAfAWAAAWQgCAcgcAjQgeAlACAEQAAAHAgAbQAgAaAAAaQAAAzhAAyQhAApABAIQAJAUAKAZQATAtACAQQgBAggOAcQgcArhFAAQgHAAgZgGQgRgGgIgBQgBAAgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQgiAcgSADQgdABgOADIgNABQghgEgkgUQgdgOgLgOQgJgGgCABQgIgBgHATQgEAKgIAeQgYA5g7ABQgRgDgUgVQgWgWgEgBQgHAAgIAMQgOAPgFAKQggAkgtABQhagDgXgggAjUHAQgEADAAAFQAAAJAKAIQARAMAlACQAWABAtgNQA1gPAAgWQAAgYgYAOQgbATgDABIgYAJQgaAGgfgCQgYgBgGgHQgFgIgDAAQgEAAgDADgAEQFxQghAfgdAAQAHAIAWAKQAqACAghDIgBgLIgBgIQgEACgjAhgAB0DbQgFANgnAWQgkAUgBACIABAGQADAFAHABQA8AEAlhLQAAgXgEgFIgDgBQgHAAgNAfgAFEAKQAAAHAGALQAHALAAAOQAAARgFATQgGAUgJAMQAdgJAIgVQAFgLgBgcQAAgXgCgGQgFgQgagFgAAOhqQAAA5hHAUQhKAKAAAIQAAABAEAGQAFAEAFAAQBLAEArghQAkgcAAgfQAAgOgMgKQgEgEgDAAQgEAAAAAKgADbkDQAYAYAAAPQAAALgLArQANACALgOQAIgNAAgLQAAgegWgcQgcgigvgGQAkAbAQAOgApgpZIAWABIABAAQAVABAUACIANADIgfGmIgBAAIAAgBIgEgCQgMAAAAAJQAAAJAOAKIgMCpg");
	this.shape_9.setTransform(562.4,326.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ai8J3Qg7gDglgUQgbgRgEgMQhHAvhNAAQgpgEgcgPIgHgFIAAgBQgLgHgOgNIgCgqIABAAQAGAEAOASIAEAFIAAABQAdAaAwAEQBGACArgfIAYgWQAKgMAEACQAJgBAFALQAHASADAEQAYAgBaADQAsgBAggkQAGgKANgPQAJgMAGAAQAFABAWAWQAUAVASADQA6gBAXg5QAJgeAEgKQAHgTAIABQACgBAJAGQALAOAcAOQAlAUAhAEIANgBQAOgDAcgBQATgDAigcQAAgBgBAAQAAAAABAAQAAgBAAAAQABAAAAAAQAJABARAGQAZAGAHAAQBEAAAdgrQAOgcABggQgCgQgTgtQgKgZgKgUQgBgIBBgpQBAgyAAgzQAAgagggaQgggbAAgHQgCgEAeglQAcgjACgcQAAgWgggWQgggVgYgNQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQgKgBABgDIgBgHQALgMAPgsQAMgrADgWQgBgnhDghQgrgWgeAFIgEACQgDgNAEgdQAEgmgCgNQgJg+hbADQgiAAgZAMIgYAJIgCAMIgLAJQgMghgTgWQglgvg+AEQgZABgRAIIgKACQgJABgXASQgpAXgvAnQAKgNgbgeQggglhBgCQhCgEgbAgQgcAfgHAJIgRAJQgJgBgJgPQgKgRg1gpQghgagzgOIgNgDIACgeIANACIAZAIQAjAMAkAUQAmAXAcAYIAngZQAsgaAwACQAugFBTAzIApgTQAjgQAQgDQAFgEAGgCQAjgMAzAEQA1ADAkAYQAWAPAJAWQAIgHAQgCQAhgIA0ABQAxgBAjAeQAeAcgFAeQgIAdgBAlIAAABQBWAJAkAmQAaAcgCAvQgJAggGAhQgMAhgIAQQAqgGAfAiQAbAeAAAiQgCAggVAkQgWAiABAEQAtAoADAsQgDArgdApQggAng2AiIARAhQAKAWAAAQIAAAeQgDAdgHAaQgeBKhkgCQgOAAgjgGQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgoAjgsgCQgwgGgagJQgLgGgGAAIgOgGIgkgRQgVBnhhABQgcgBgTgOIgQgSQgPASgSAPQglAag2AAIgCAAgAFWH/IABAAIgBAAIAAgBIAAABgAovpUQgTgCgVgBIgBAAIgWgBIgCgeIAYAAIAFAAQATABAUACIANADIgCAfIgOgDg");
	this.shape_10.setTransform(563.8,326.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#17171F").s().p("AGhGdIgIgDQgNgIAAgKQgBgEAFgEQAEgDADAAQACAAAHAHIABABQAHAIAWAAQAUgBAQgCIAAABQAOgBAMgDIAPgEIAHgDIAJgFIACAbIgJADIgXAHQgQAEgMgBIAAAAIgKAAQgjAAgTgGgAiMFUQgagNAAgJQAAgJAGAAIAUAGQArARAqgEQARgBAWgOQAUgPADAAQAMgBABAMQgBALgYAQQgaAQgUABIgTABQgpAAgdgOgAnUEHQgSgPAAgMQABgHAEgJQAFgLAGgCQAFAJAAAJQAAAJAhASQAcAQAMAEIgLADQgLADgJAAIgFAAQgVAAgTgPgADpBEQgcgQAAgKQAAgKAgALQAnAOAZAAIAAgDIAIAAQAegBAdgOIAdgOIABAAIAAAAQALAAAAANQABAIgKAHIAAABQgLAHgUAHQgjAMgZAAIgKABIAAADQgkAAgegQgAoQAVIgJgrQAAgSABgFQAEgSANgFQAHAVAFApQAJAjAWAZIAAADQgCAEgLABIgCAAQgYAAgNgpgAi6gvQgmgXADgSIADAAQAWAVAcAJQAiAKA9gFQALgBAHACIAHACQgFAGgPAKQgPAJgHABIgNAAQgtAAgmgXgAhNkQQgpgcAAgfQAAgIADgDQABgCAGgBQALAiA1ATQAyASBIgEIADAGIgWAQQgJAHgeADIgNABQguAAgmgbgAock/QABgeASgYQAVgcAogRQgEAJgTAbQgUAbgGAMQgEAHgBAbQgBAYgHAKQgRgJgBgjg");
	this.shape_11.setTransform(452.8,335.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39394F").s().p("AFnJIIgBAEIAAAAIgFgCQgjgLgIgGQgtgygFACQgHgBgHAJQgSASAAABQgeAcg1ADQg6ABgogsIgZgfQgMgPgEAAQgHABgCAGQgJAMABABQgRASg6ADQg1AAgjglQgagpgHABQgWAIgSALQgKADgEAFQgFACgCACQgRAEgnADQgNgBgLgUQgNgYgJADQgGgBgZAIIggAIQhGABgagrQgQgbABggQgCgRAWgtQAKgYAKgVQAAgIg/gnQhCgxACgyQgCgbAigbQAggbAAgHQgBgEgcgkQgfgmgBgcQgCgWAggYQAYgSAogLQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIABgBIgCAAQgSgngHgRQgMgfgBgpQgDgqAygiQAvglARgBIAagKIgBgOQgHglAFgOQAHg8BdABQAhgBAaAKQAPAIAJACQgCAGAFAFQACABAIAIQAOghASgWQAmgtA+AFQA7AEARAOIAGAEIABABIAAABIAOALIAGAHQACAAADADIATAQQAoAeAOAGQANACA1guQBBg4A7ANQA3ALAvAkQAsAfABAEQgBgEAQgSIASgVIAMgNIAAgBIAPgPQATgSA4gFIAWgBIAKAAIAfJuIgBAFIABgDIAWG+IgJAFIgIADIgOAEQgMADgOABIAAgBQgQACgUABQgWAAgIgIIAAgBQgIgHgBAAQgDAAgEADQgFAEAAAEQAAAKAOAIIAIADQAWAHApgBIABAAQAMABAQgEIAWgHIAJgDIACAoQgFgFgEgDQgEgCgEAAQgLgBgEAGQgCACAAADIgJAWQgEAFgGAEQgGADgHADIgOAFQgRAFgYACQghAGguABQghAAgogNgAhMGdQAAAJAaANQAjARA0gEQAUgBAagQQAagQAAgLQgBgMgLABQgDAAgWAPQgWAOgRABQgoAEgrgRIgUgGIgBAAQgFAAAAAJgAmIE7QgEAJAAAHQAAAMASAPQAVARAYgCQAIAAALgDIAMgDQgMgEgcgQQghgSAAgJQAAgJgFgJQgHACgFALgAEnCJQAAAKAcAQQAeAQAjAAIABgDIAJgBQAaAAAigMQAVgHAKgHIAAgBQAKgHAAgIQAAgNgLAAIAAAAIgBAAIgdAOQgeAOgeABIgHAAIgBADQgZAAgmgOQgRgGgIAAQgHAAAAAFgAm+AwQgBAFAAASIAJAtQANArAagCQALgBACgEIAAgDQgWgZgJglQgGgpgGgVQgOAFgDASgAhgAuQArAbA1gEQAEgBAPgJQAQgKAFgGIgHgCQgHgCgLABQg7AFgjgKQgcgJgVgVIgEAAQgCASAmAXgAgaj3QgCADAAAIQAAAfAmAcQAsAeA4gEQAdgDAKgHIAVgQIgCgGQhIAEg0gSQg0gTgKgiQgGABgCACgAmvkWQgTAYAAAeQAAAjASAJQAHgKABgYQABgbAEgHQAFgMAUgbQAUgbAEgJQgpARgUAcg");
	this.shape_12.setTransform(443.8,326.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AFyJlIAAAEQgbgGgVgKQgkgTgPgVQgiAphPAEQg9ACgqglQghgmgDAAQgLAFgKAHQgdAKgrADQg5gBghgeQgcgmgIgHQgiAQgOAJQgBAAAAAAQAAAAgBABQAAAAABAAQAAAAAAABQgFgBgFADQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBAAIgbADQgoAAgOgMQgKgHgKgMQgYAGgfAEQhkADgdhJQgLgaABgdIAAgdQAAgRAKgWQAHgVAKgMQg5ghgdgmQgfgpACglQgCgnAvg0QAAgDgVgiQgagnABgfQgFgjAegfQAagkAtAGQgMgRgNgVIgOgeQgWg2Akg0QAgg3BagYQgFg8AbglQAfgsA2gDQAzgFAbAJQAZAIAJAFQAJgVAXgPQAjgTA3gJQAzgEAnALIAJAEQACADALAEQAGADAiAeQAgAdAPAAQAIAAAygmQA6glBFAAQBCgCBIA6QATgIAagcIAEgDIAGgDIAAgBQAggSA7gEIAIAAQAAgBAOAAIAKgBIABAeIgJAAIgXACQg3AEgTATIgQAOIAAACIgMAMIgSAWQgQARACAEQgCgEgrgeQgvglg3gLQg7gNhBA4Qg1AvgOgCQgNgGgogeIgWgRQgCgCgDgBIgFgHIgMgLIgBAAIgBgBIgFgFQgRgOg8gEQg9gFgmAtQgSAWgOAiQgIgJgDAAQgEgGABgGQgIgCgPgHQgbgKggAAQhdAAgIA8QgEAOAHAkIABAOIgbALQgRABgvAkQgyAjAEAqQAAAoANAgQAGARATAnIABgBIgBACIAAAAQgBgBAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgoAMgZASQggAYACAWQABAbAfAnQAdAkAAAEQAAAGggAbQghAcACAaQgCAzBBAwQA/AoABAIQgKAUgKAZQgWAtABARQAAAgAPAaQAaArBGgBIAhgIQAYgHAGAAQAJgDANAYQAMAUANACQAngEAQgDQADgDAEgBQAFgGAKgDQASgLAWgIQAGgBAbApQAjAmA0AAQA7gEAOgSQAAgBAJgLQABgHAJAAQAFAAAMAPIAYAfQAoArA6gBQA1gCAfgcQAAgCARgRQAHgJAHAAQAGgBAtAyQAHAFAkAMIAEACIABAAIAAgEQAoANAiAAQAtgCAhgFQAYgDARgFIAOgFQAIgCAGgEQAGgEAEgEIAIgWQABgEACgCQAEgGALACQADAAAEACQAFACAFAGIACAqIgKgIIgGgGQgHAKgJAIIgNALQgGAEgHACIgNAFIgOADQgRAEgUADQgWADgbACQg9gBgugMg");
	this.shape_13.setTransform(442.4,325.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(30,31,38,0.502)").s().p("ABkIvQgOgBgFgKIgBgHQgTAIgYgDQgMgBgDgHIgBgIQAAgIAhgZQAfgZAAgdQAAg4gWhAQgWg3AAgHQAAgNAQgGIAkgKQAzgOABgkQAAghgeggQgfggAAgLQAAgOAigRQAigTAAgYQAAgQgygfQgxgfAAgVQAAgNAUgUQASgTAAgXQAAgrg3gLQgegFgGgFQgSgKAAgVQAIgegCgTQgCgmgygFQgogEgSAIQgRAHgMgBQgxgGgEgoQADgtgDgMQgJgWgUgXQgQgRgugoQAqgKAfAVQALgUAsAmQAdAaAdAkQAEABAegQQAngOApAEQBPAJAEA8QACAggOAyQBiAMAiAwQATAaAAAvQAAAKgKAqIgLAtQAAAHAeAhIAAAAQAngaAAB6QAAAOgwBJQArAYAMALQAOAMAAAQQAAA0g/AsIgsAbQgUAMAAAGQAAATAMAoQAMAoAAATQAAAggPAmQgYA2gtAAIgJgBgACOBTIABABIABgCIgCABgAgPmKIACACIgBgCIAAAAIgBAAg");
	this.shape_14.setTransform(595.6,325.5,1,1,0,0,0,0,0.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#17171F").s().p("Am8FtIAHgFQAJgEAHgDIAAACQAJgFAEAAQAIAAAAAKQAAALgUALIAAgBIgTAIIgEADgAgpGGQglgDgRgMQgKgIAAgJQAAgFADgEQADgCAFAAQADAAAFAIQAFAGAZADQAfADAZgHIAWgIQAEgBAagTQAZgMAAAXQAAAWg2AOQglALgWAAIgFAAgAFeFKQgWgLgHgIQAdAAAhgfQAiggAFgBIABAHIABAMQgfBAgoAAIgDAAgACdDDQgHgBgDgFIgBgGQAAgCAlgUQAngUAFgOQAPgjAHAGQAFAFAAAXQgjBFg3AAIgHAAgAG7ACQAFgRAAgRQAAgOgHgKQgGgMAAgHIABgHQAZAFAGAQQACAFAAAYQAAAbgEAKQgJAVgcAIQAJgLAGgVgAgGhfQgFAAgFgGQgEgFAAgCQAAgIBHgIQBKgTAAg4QAAgRALALQAMAKAAAOQAAAfgkAbQgnAdg7AAIgUgBgAmBjhQgmgDgZgSIgDgCIAAgBIgDgCIACgZIAMALQATAOAWABQA/AFAYgNQAPgJAJABQAIAAAAAJQAAAPghAJQgZAIgcAAIgTAAgAnUkQQAAgJAMAAIAEACIAAAAIAAABIgCAZQgOgKAAgJgAFXj+QALgsAAgKQAAgQgYgYQgQgOglgcQAwAGAcAjQAWAdAAAeQAAALgJANQgIAMgLAAIgEAAg");
	this.shape_15.setTransform(551.3,337.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#39394F").s().p("AihJfQhagFgXghQgEgDgHgTQgFgLgJABQgEgCgKALIgYAWQgrAehGgEQgvgEgdgbIAAgBIgFgFQgOgSgGgEIAAgBIgCgoIADgCIATgJIAAABQAVgLgBgKQAAgKgHgBQgFABgJAEIAAgBQgGACgKAEIgHAFIgWm/IAMioIAEACIAAAAIACACQAZASAmADQAmADAigKQAhgKABgPQAAgJgJAAQgJAAgPAIQgYAOg/gGQgWgBgTgOIgLgKIAfmlIANADQAzAPAhAbQA1AqAKARQAJAPAKABIAQgIQAHgJAdgeQAaggBCAGQBBADAgAmQAbAegJAOQAugmAqgXQAWgRAJgBIAKgCQARgHAZgBQA+gCAlAvQATAXANAhIAKgJIACgMIAZgJQAYgLAiABQBbgBAJA+QACANgEAmQgEAdADANIAEgCQAegEAsAXQBDAiAAAnQgDAWgMArQgPArgKAMIABAHQgCAEAKAAQAAAAABAAQAAAAAAAAQAAgBAAAAQgBAAAAAAQAZANAgAVQAfAYAAAWQgCAbgcAjQgeAkACAEQAAAHAgAcQAgAaAAAbQAAAyhAAxQhAAnABAJQAJAUAKAZQATAuACAQQgBAggOAbQgcAqhFgBQgHAAgZgHQgRgGgIgBQgBAAgBAAQAAAAAAABQAAAAAAAAQAAAAAAABQgiAbgSADQgdAAgOADIgNABQghgFgkgVQgdgPgLgOQgJgGgCABQgIgBgHATQgEAKgIAeQgYA4g7AAQgRgEgUgVQgWgXgEgBQgHAAgIAMQgOAPgFAKQggAjgrAAIgCAAgAjUHDQgEAEAAAFQAAAJAKAIQARAMAlADQAWACAtgMQA1gPAAgVQAAgYgYANQgbASgDACIgYAIQgaAGgfgDQgYgCgGgHQgFgIgDAAQgEAAgDACgAEQF/QghAegdAAQAHAIAWALQAqADAghDIgBgLIgBgIQgEACgjAggAB0DmQgFANgnAVQgkATgBACIABAGQADAFAHABQA8AFAlhKQAAgXgEgEIgDgBQgHAAgNAegAFEAZQAAAHAGAMQAHAKAAAPQAAAQgFATQgGAVgJALQAdgIAIgVQAFgLgBgcQAAgXgCgGQgFgQgagFgAAOhhQAAA5hHASQhKAJAAAHQAAACAEAEQAFAFAFABQBLAGArggQAkgcAAgfQAAgOgMgKQgEgEgDAAQgEAAAAAKgADbj2QAYAYAAAQQAAALgLArQANACALgOQAIgNAAgLQAAgegWgdQgcgigvgHQAkAcAQAOgApgpeIAWABIABAAQAVACAUADIANADIgfGlIgBAAIAAgBIgEgCQgMAAAAAJQAAAJAOAKIgMCpg");
	this.shape_16.setTransform(562.4,326.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ai8J7Qg7gDglgVQgbgSgEgMQhHAthNgCQgpgEgcgQIgHgFIAAgBQgLgHgOgNIgCgrIABABQAGAEAOASIAEAFIAAABQAdAbAwAEQBGAEArgeIAYgWQAKgLAEACQAJgBAFALQAHATADADQAYAhBaAFQAsAAAggjQAGgKANgPQAJgMAGAAQAFABAWAXQAUAVASAEQA6AAAXg4QAJgeAEgKQAHgTAIABQACgBAJAGQALAOAcAPQAlAVAhAFIANgBQAOgDAcAAQATgDAigbQAAAAgBgBQAAAAABAAQAAAAAAgBQABAAAAAAQAJABARAGQAZAHAHAAQBEABAdgqQAOgbABggQgCgQgTguQgKgZgKgUQgBgJBBgnQBAgxAAgyQAAgbgggaQgggcAAgHQgCgEAegkQAcgjACgbQAAgWgggYQgggVgYgNQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgKAAABgEIgBgHQALgMAPgrQAMgrADgWQgBgnhDgiQgrgXgeAEIgEACQgDgNAEgdQAEgmgCgNQgJg+hbABQgigBgZALIgYAJIgCAMIgLAJQgMghgTgXQglgvg+ACQgZABgRAHIgKACQgJABgXARQgpAXgvAmQAKgOgbgeQgggmhBgDQhCgGgbAgQgcAegHAJIgRAIQgJgBgJgPQgKgRg1gqQghgbgzgPIgNgDIACgeIANACIAZAIQAjANAkAVQAmAYAcAZIAngYQAsgZAwACQAugEBTA2IApgTQAjgPAQgDQAFgDAGgCQAjgMAzAFQA1AFAkAZQAWAPAJAWQAIgHAQgCQAhgHA0ACQAxAAAjAfQAeAdgFAeQgIAdgBAlIAAABQBWALAkAmQAaAcgCAwQgJAggGAhQgMAggIAQQAqgFAfAjQAbAeAAAiQgCAggVAjQgWAiABAEQAtApADAsQgDArgdApQggAmg2AhIARAhQAKAWAAAQIAAAeQgDAdgHAaQgeBKhkgFQgOAAgjgHQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgoAigsgDQgwgHgagJQgLgGgGAAIgOgHIgkgSQgVBnhhgBQgcgCgTgPIgQgRQgPARgSAPQgjAYgyAAIgIgBgAFWIPIABAAIgBAAIAAgBIAAABgAovpXQgTgDgVgCIgBAAIgWgBIgCgeIAYABIAFAAQATABAUADIANADIgCAfIgOgDg");
	this.shape_17.setTransform(563.8,326.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#17171F").s().p("AGhGQIgIgDQgNgHAAgKQgBgEAFgEQAEgEADAAQACAAAHAHIABABQAHAIAWgBQAUgBAQgDIAAABIAagEIAPgFIAHgDIAJgFIACAaIgJAEIgXAIQgQADgMAAIAAAAIgVABQgbAAgQgFgAiMFZQgagMAAgJQAAgKAGABIAUAFQArAQAqgFQARgCAWgPQAUgQADAAQAMgBABAMQgBALgYARQgaAQgUACIgaACQglAAgagMgAnUEWQgSgOAAgNQABgHAEgJQAFgLAGgCQAFAJAAAJQAAAJAhARQAcAPAMAEIgLADQgLADgJABIgGAAQgUAAgTgOgAoQAmIgJgrQAAgSABgEQAEgSANgGQAHAUAFAnQAJAlAWAYIAAAEQgCADgLABIgDAAQgXAAgNgngADpA9QgcgPAAgKQAAgKAgAKQAnAMAZgBIAAgCIAIgBQAegCAdgOIAdgPIABAAIAAAAQALgBAAANQABAIgKAHIAAACQgLAHgUAHQgjANgZACIgKABIAAACIgHAAQggAAgbgNgAi6gpQgmgWADgSIADAAQAWAVAcAIQAiAJA9gHQALgCAHACIAHACQgFAGgPAKQgPAKgHABIgTABQgqAAgjgVgAhNkNQgpgbAAgfQAAgIADgDQABgCAGgBQALAiA1AQQAyARBIgHIADAHIgWAQQgJAIgeAEIgSABQgrAAgkgYgAockuQABgeASgYQAVgdAogTQgEAKgTAcQgUAcgGALQgEAIgBAaQgBAYgHALQgRgJgBgjg");
	this.shape_18.setTransform(452.8,337.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39394F").s().p("AFnJMIgBAEIAAAAIgFgBQgjgLgIgFQgtgwgFABQgHAAgHAJQgSASAAACQgeAcg1AFQg6ADgogrIgZgeQgMgOgEAAQgHAAgCAHQgJAMABABQgRASg6AFQg1ACgjgkQgagogHABQgWAJgSALQgKADgEAGQgFACgCACQgRAEgnAFQgNgBgLgUQgNgXgJADQgGAAgZAIIggAJQhGAEgagrQgQgaABggQgCgRAWgtQAKgZAKgVQAAgIg/gmQhCguACgzQgCgaAigdQAggcAAgGQgBgEgcglQgfgkgBgbQgCgWAggZQAYgTAogNQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAIABAAIABgCIgCABQgSgngHgQQgMgggBgoQgDgqAygkQAvgmARgCIAagLIgBgOQgHgkAFgOQAHg9BdgCQAhgBAaAJQAPAHAJABQgCAGAFAGQACABAIAIQAOgjASgWQAmguA+ADQA7ACARANIAGAFIABABIAAAAIAOALIAGAHQACAAADACIATAQQAoAdAOAGQANABA1gwQBBg6A7ALQA3AJAvAjQAsAdABAEQgBgEAQgSIASgWIAMgMIAAgCIAPgPQATgTA4gGIAWgCIAKgBIAfJuIgBAFIABgEIAWG+IgJAFIgIADIgOAFIgaAEIAAAAQgQACgUABQgWABgIgIIAAAAQgIgHgBAAQgDAAgEADQgFAFAAADQAAALAOAGIAIADQAWAHApgCIABAAQAMAAAQgEIAWgIIAJgDIACAoQgFgFgEgDQgEgCgEAAQgLgBgEAGQgCADAAADIgJAWIgKAJIgNAHIgOAFQgRAFgYAEQghAGguADIgFABQggAAgkgMgAhMGvQAAAJAaAMQAjAQA0gFQAUgDAagQQAagRAAgLQgBgMgLABQgDAAgWAQQgWAPgRACQgoAFgrgPIgUgGIgBAAQgFAAAAAJgAmIFXQgEAJAAAHQAAAMASAOQAVARAYgDQAIAAALgDIAMgDQgMgEgcgPQghgSAAgIQAAgKgFgIQgHACgFALgAm+BOQgBAFAAASIAJAsQANArAagDQALgBACgEIAAgDQgWgZgJgkQgGgpgGgVQgOAGgDASgAEnCPQAAALAcAOQAeAPAjgBIABgDIAJgBQAagBAigNQAVgIAKgHIAAgBQAKgIAAgHQAAgNgLAAIAAABIgBAAIgdAPQgeAOgeACIgHAAIgBADQgZABgmgNQgQgFgIAAQgIAAAAAFgAhgBBQArAZA1gGQAEgBAPgJQAQgKAFgHIgHgBQgHgCgLABQg7AHgjgJQgcgIgVgUIgEAAQgCASAmAWgAgajnQgCADAAAIQAAAfAmAbQAsAdA4gGQAdgEAKgHIAVgRIgCgGQhIAHg0gRQg0gRgKgiQgGABgCACgAmvj5QgTAZAAAeQAAAiASAJQAHgKABgYQABgbAEgHQAFgMAUgcQAUgcAEgJQgpATgUAcg");
	this.shape_19.setTransform(443.8,326.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AFyJqIAAAEQgbgGgVgJQgkgSgPgUQgiAqhPAGQg9AEgqgjQghglgDAAQgLAFgKAHQgdAMgrAEQg5ABghgdQgcgmgIgGQgiARgOAJQgBABAAAAQAAAAgBAAQAAABABAAQAAAAAAAAQgFAAgFADQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBAAIgbAEQgoABgOgLQgKgHgKgMQgYAHgfAFQhkAGgdhJQgLgZABgdIAAgdQAAgRAKgWQAHgVAKgNQg5gfgdglQgfgoACglQgCgnAvg1QAAgDgVgjQgaglABgfQgFgiAeggQAaglAtAEQgMgQgNgVIgOgeQgWg1Akg1QAgg4BagbQgFg8AbglQAfguA2gFQAzgHAbAJQAZAHAJAFQAJgWAXgPQAjgUA3gLQAzgGAnAKIAJAEQACADALADQAGADAiAdQAgAdAPgCQAIAAAygnQA6gnBFgCQBCgEBIA4QATgJAagdIAEgDIAGgDIAAgCQAggSA7gGIAIgBQAAgBAOAAIAKgBIABAeIgJABIgXACQg3AGgTATIgQAPIAAACIgMAMIgSAWQgQASACAEQgCgEgrgdQgvgjg3gJQg7gLhBA6Qg1AwgOgBQgNgGgogdIgWgQQgCgCgDAAIgFgHIgMgLIgBAAIgBgBIgFgFQgRgNg8gCQg9gDgmAuQgSAWgOAjQgIgIgDgBQgEgGABgGQgIgBgPgHQgbgJggABQhdACgIA9QgEAOAHAkIABAOIgbALQgRACgvAmQgyAkAEAqQAAAoANAgQAGAQATAnIABgBIgBACIAAAAQgBAAAAgBQAAAAAAAAQAAAAAAABQAAAAAAAAQgoANgZATQggAZACAWQABAbAfAkQAdAlAAAEQAAAGggAcQghAdACAaQgCAzBBAuQA/AmABAIQgKAVgKAZQgWAtABARQAAAgAPAaQAaArBGgEIAhgJQAYgIAGAAQAJgDANAXQAMAUANABQAngFAQgEQADgCAEgCQAFgGAKgDQASgLAWgJQAGgBAbAoQAjAkA0gCQA7gFAOgSQAAgBAJgMQABgHAJAAQAFAAAMAOIAYAeQAoArA6gDQA1gFAfgcQAAgCARgSQAHgJAHAAQAGgBAtAwQAHAFAkALIAEABIABAAIAAgEQAoAMAigBQAtgDAhgGQAYgEARgFIAOgFIAOgHIAKgJIAIgWQABgDACgDQAEgGALABQADAAAEACQAFADAFAFIACAqIgKgIIgGgFIgQASIgNAMIgNAGIgNAFIgOAEIglAIQgWAEgbACIgPABQg0AAgogKg");
	this.shape_20.setTransform(442.4,326.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(30,31,38,0.502)").s().p("ABkInQgOAAgFgKIgBgHQgTAJgYgCQgMgBgDgHIgBgIQAAgIAhgaQAfgaAAgdQAAg4gWg/QgWg2AAgIQAAgMAQgHQAEgCAggKQAzgPABgkQAAghgegfQgfgfAAgLQAAgOAigTQAigUAAgYQAAgQgygdQgxgcAAgWQAAgMAUgVQASgVAAgXQAAgqg3gJQgegEgGgEQgSgJAAgVQAIgegCgUQgCglgygDQgogDgSAJQgRAIgMgBQgxgDgEgoQADgtgDgMQgJgWgUgWQgQgQgugmQAqgMAfATQALgTAsAjQAdAZAdAiQAEABAegQQAngRApADQBPAFAEA7QACAggOA0QBiAHAiAuQATAaAAAuQAAALgKAqIgLAuQAAAHAeAfIAAABQAngdAAB7QAAANgwBMQArAWAMAKQAOALAAARQAAAzg/AvIgsAdQgUANAAAGQAAATAMAoQAMAnAAATQAAAggPAnQgYA5gwAAIgGgBgACOBKIABABIABgDIgCACgAgPmMIACACIgBgCIAAAAIgBAAg");
	this.shape_21.setTransform(595.6,321.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#17171F").s().p("Am8F9IAHgFIAQgIIAAABQAJgEAEAAQAIAAAAAKQAAAKgUAMIAAgBIgTAJIgEACgAgpGEQglgCgRgLQgKgHAAgKQAAgEADgEQADgDAFAAQADABAFAHQAFAHAZAAQAfACAZgHIAWgJIAegWQAZgOAAAZQAAAVg2ARQgoAOgWAAIgCgBgAFeE3QgWgKgHgIQAdgBAhggQAigiAFgBIABAHIABALQggBEgpAAIgBAAgACdC5QgHgBgDgFIgBgGQAAgCAlgVQAngXAFgNQAPglAHAGQAFAFAAAXQglBKg4AAIgEAAgAG7gTQAFgTAAgRQAAgOgHgLQgGgLAAgHIABgIQAZAFAGAPQACAGAAAYQAAAbgEAMQgJATgcAJQAJgLAGgTgAgGhiQgFgBgFgFQgEgFAAgBQAAgIBHgMQBKgWAAg4QAAgRALAKQAMAKAAAOQAAAfgkAdQgqAhhDAAIgJAAgAmBjUQgmgBgZgRIgDgCIAAAAIgDgCIACgZIAMAKQATANAWAAQA/ADAYgPQAPgJAJAAQAIAAAAAIQAAAPghAMQgeAKghAAIgJAAgAnUj/QAAgJAMAAIAEACIAAAAIAAABIgCAZQgOgKAAgJgAFXkRQALgsAAgKQAAgQgYgXQgQgOglgaQAwAEAcAiQAWAcAAAeQAAALgJANQgJANgLAAIgDAAg");
	this.shape_22.setTransform(551.3,335.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39394F").s().p("AnCJVQgvgDgdgaIAAgBIgFgEQgOgSgGgDIAAgBIgCgoIADgCIATgKIAAABQAVgMgBgKQAAgKgHAAQgFAAgJAFIAAgBIgQAHIgHAFIgWm+IAMipIAEACIAAABIACABQAZARAmABQAmACAigMQAhgLABgPQAAgJgJABQgJgBgPAKQgYAOg/gDQgWAAgTgNIgLgKIAfmmIANADQAzAMAhAZQA1ApAKAQQAJAPAKABIAQgJQAHgKAdggQAaggBCADQBBAAAgAlQAbAcgJAOQAugoAqgYQAWgSAJgCIAKgCQARgIAZgCQA+gFAlAuQATAWANAgIAKgJIACgMIAZgKQAYgNAiAAQBbgFAJA9QACAOgEAlQgEAeADANIAEgDQAegFAsAVQBDAgAAAmQgDAWgMAsQgPAsgKAMIABAHQgCAEAKAAQAAAAABAAQAAAAAAgBQAAAAAAAAQgBAAAAgBQAZAMAgAVQAfAVAAAWQgCAcgcAmQgeAkACAEQAAAHAgAaQAgAZAAAaQAAAzhAA0QhAAqABAIQAJAUAKAYQATAtACAQQgBAggOAcQgcAshFACQgHAAgZgGQgRgGgIAAQgBAAgBAAQAAABAAAAQAAAAAAAAQAAABAAAAQgiAcgSAEQgdABgOAEIgNACQghgEgkgTQgdgOgLgNQgJgGgCABQgIgBgHAUQgEAKgIAeQgYA5g7ADQgRgDgUgUQgWgWgEgBQgHAAgIANQgOAPgFAKQggAlgtABQhaAAgXggQgEgEgHgRQgFgMgJABQgEgBgKAMIgYAWQgqAghCAAIgFAAgAjUG7QgEAEAAAFQAAAJAKAHQARAMAlACQAWAAAtgOQA1gRAAgVQAAgYgYAOIgeAVIgYAJQgaAHgfgBQgYgBgGgHQgFgHgDgBQgEAAgDADgAEQFhQghAggdABQAHAIAWAKQAqABAghEIgBgMIgBgHQgEACgjAhgAB0DPQgFANgnAXQgkAVgBACIABAGQADAFAHABQA8ACAlhMQAAgXgEgEIgDgBQgHAAgNAfgAFEgFQAAAFAGAMQAHAKAAAOQAAARgFATQgGAVgJAMQAdgKAIgVQAFgMgBgbQAAgYgCgFQgFgOgagEgAAOhzQAAA5hHAVQhKAMAAAIQAAABAEAFQAFAGAFAAQBLADArgkQAkgdAAgfQAAgOgMgKQgEgDgDAAQgEAAAAAKgADbkRQAYAXAAAQQAAALgLArQANACALgPQAIgNAAgLQAAgegWgcQgcghgvgFQAkAaAQAOgApgpUIAWAAIABAAQAVAAAUACIANADIgfGnIgBgBIAAAAIgEgCQgMAAAAAJQAAAJAOAKIgMCpg");
	this.shape_23.setTransform(562.4,326);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AoUJhIgHgEIAAgBQgLgHgOgMIgCgrIABABQAGADAOASIAEAEIAAABQAdAaAwADQBGABArghIAYgWQAKgMAEABQAJgBAFAMQAHARADAEQAYAgBaAAQAsgBAgglQAGgKANgPQAJgNAGAAQAFABAWAWQAUAUASADQA6gDAXg5QAJgeAEgKQAHgUAIABQACgBAJAGQALANAcAOQAlATAhAEIANgCQAOgEAcgBQATgEAigcQAAgBgBAAQAAAAABAAQAAgBAAAAQABAAAAAAQAJAAARAGQAZAGAHAAQBEgCAdgsQAOgcABggQgCgQgTgtQgKgYgKgUQgBgIBBgqQBAg0AAgzQAAgagggZQgggaAAgHQgCgEAegkQAcgmACgcQAAgWgggVQgggVgYgMQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQgKAAABgEIgBgHQALgMAPgsQAMgsADgWQgBgmhDggQgrgVgeAFIgEADQgDgNAEgeQAEglgCgOQgJg9hbAFQgiAAgZANIgYAKIgCAMIgLAJQgMgggTgWQglgug+AFQgZACgRAIIgKACQgJACgXASQgpAYgvAoQAKgOgbgcQggglhBAAQhCgDgbAgQgcAggHAKIgRAJQgJgBgJgPQgKgQg1gpQghgZgzgMIgNgDIACgeQAGAAAHACIAZAHQAjALAkATQAmAXAcAXIAngaQAsgbAwABQAugGBTAxIApgUQAjgQAQgEQAFgEAGgCQAjgNAzACQA1ADAkAXQAWAOAJAWQAIgHAQgDQAhgJA0AAQAxgCAjAeQAeAbgFAeQgIAdgBAlIAAABQBWAIAkAlQAaAbgCAvQgJAggGAiQgMAggIAQQAqgGAfAhQAbAeAAAiQgCAfgVAnQgWAhABADQAtAnADAtQgDArgdApQggAog2AjIARAhQAKAVAAARIAAAdQgDAdgHAaQgeBMhkgBQgOABgjgGQAAAAAAgBQAAAAAAAAQAAAAgBAAQAAAAAAABQgoAkgsgCQgwgEgagIQgLgGgGAAIgOgGIgkgQQgVBohhADQgcgBgTgOIgQgRQgPASgSAQQgmAbg3ABQg7gCglgTQgbgRgEgMQhHAxhNACQgpgDgcgPgAFWHuIABAAIgBgBIAAAAIAAABgAovpRQgTgCgVAAIgBAAIgWAAIgCgeIAYgBIAFAAQATAAAUACIANADIgCAfIgOgDg");
	this.shape_24.setTransform(563.8,325.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#17171F").s().p("AHhGsIAAAAQgqAAgWgIIgIgDQgNgIAAgKQgBgEAFgEQAEgDADAAQACAAAHAHIABABQAHAIAWAAQAUAAAQgBIAAAAIAagDIAPgEIAHgDIAJgEIACAaIgJAEIgXAGQgNADgLAAIgEAAgAiMFRQgagNAAgJQAAgJAGAAIAUAHQArARAqgDQARgBAWgOQAUgOADAAQAMgBABAMQgBALgYAQQgaAPgUABIgPABQgsAAgegQgAnUD+QgSgPAAgMQABgHAEgJQAFgLAGgBQAFAIAAAKQAAAIAhATQAcARAMAEIgLADQgLACgJAAIgDAAQgWAAgUgQgADpBIQgcgQAAgLQAAgKAgAMQAnAOAZABIAAgDIAIAAQAeAAAdgNIAdgOIABAAIAAAAQALAAAAANQABAIgKAHIAAABQgLAHgUAGQgjALgZABIgKAAIAAADQgkgBgegQgAoQALIgJgrQAAgSABgEQAEgSANgFQAHAUAFAqQAJAjAWAZIAAAEQgCADgLABIgCAAQgYAAgNgqgAi6gyQgmgYADgSIADAAQAWAWAcAJQAiALA9gEQALgBAHACIAHACQgFAGgPAJQgPAJgHABIgLAAQguAAgngYgAhNkSQgpgdAAgfQAAgIADgCQABgCAGgBQALAiA1AUQAyATBIgDIADAGIgWAQQgJAHgeACIgKAAQgvAAgogcgAoclJQABgeASgYQAVgbAogRQgEAJgTAbQgUAbgGAMQgEAHgBAaQgBAYgHAKQgRgJgBgjg");
	this.shape_25.setTransform(452.8,334.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#39394F").s().p("AFnJKIgBAEIAAAAIgFgCQgjgMgIgGQgtgzgFACQgHgBgHAJQgSARAAACQgeAbg1ACQg6AAgogtIgZgfQgMgPgEAAQgHAAgCAGQgJAMABABQgRARg6ADQg1gBgjgmQgagqgHABQgWAIgSALQgKACgEAGQgFABgCADQgRADgnADQgNgCgLgUQgNgYgJACQgGAAgZAHIggAHQhGAAgagrQgQgbABggQgCgRAWgtQAKgYAKgUQAAgJg/goQhCgyACgyQgCgbAigbQAggaAAgHQgBgEgcgkQgfgngBgcQgCgWAggXQAYgSAogLQAAAAAAAAQAAgBABAAQAAAAAAAAQAAABAAAAIABAAIABgBIgCAAQgSgngHgRQgMgggBgpQgDgqAyghQAvgkARgBIAagKIgBgOQgHgkAFgOQAHg8BdACQAhAAAaALQAPAHAJACQgCAGAFAGQACABAIAIQAOghASgWQAmgsA+AGQA7AFARAOIAGAFIABABIAAAAIAOAMIAGAHQACAAADADIATARQAoAfAOAGQANACA1guQBBg2A7AOQA3AMAvAlQAsAfABAEQgBgEAQgRIASgVIAMgMIAAgCIAPgOQATgSA4gEIAWgBIAKAAIAfJvIgBAFIABgDIAWG/IgJAEIgIADIgOAEIgaADIAAAAQgQABgUAAQgWAAgIgIIAAgBQgIgHgBAAQgDAAgEADQgFAEAAAEQAAAKAOAIIAIADQAWAIApAAIABAAQAMAAAQgDIAWgGIAJgEIACApQgFgGgEgCQgEgDgEAAQgLgBgEAGQgCACAAADIgJAWQgEAEgGAEQgGAEgHACIgOAFQgRAEgYADQghAEguABQghAAgogOgAhMGXQAAAJAaANQAjASA0gDQAUgBAagPQAagQAAgLQgBgMgLABQgDAAgWAOQgWAOgRABQgoADgrgRIgUgHIgBAAQgFAAAAAJgAmIEvQgEAJAAAHQAAAMASAPQAVASAYgCQAIAAALgCIAMgDQgMgEgcgRQghgTAAgIQAAgKgFgIQgHABgFALgAEnCJQAAALAcAQQAeAQAjABIABgDIAJAAQAagBAigLQAVgGAKgHIAAgBQAKgHAAgIQAAgNgLAAIAAAAIgBAAIgdAOQgeANgeAAIgHAAIgBADQgZgBgmgOQgSgGgIAAQgGAAAAAEgAm+AkQgBAEAAASIAJAtQANArAagBQALgBACgDIAAgEQgWgZgJglQgGgqgGgUQgOAFgDASgAhgAoQArAbA1gDQAEgBAPgJQAQgJAFgGIgHgCQgHgCgLABQg7AEgjgLQgcgJgVgUIgEAAQgCAQAmAYgAgaj8QgCACAAAIQAAAfAmAdQAsAfA4gDQAdgCAKgHIAVgQIgCgGQhIADg0gTQg0gUgKgiQgGABgCACgAmvkjQgTAYAAAeQAAAjASAJQAHgKABgYQABgaAEgHQAFgMAUgbQAUgbAEgJQgpARgUAbg");
	this.shape_26.setTransform(443.8,325.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AFyJmIAAADQgbgGgVgLQgkgTgPgVQgiAohPADQg9AAgqglQghgngDABQgLAEgKAHQgdAKgrABQg5gBghgfQgcgngIgHQgiAQgOAIQgBABAAAAQAAAAgBAAQAAABABAAQAAAAAAAAQgFAAgFADQAAAAgBgBQAAAAAAAAQgBAAAAABQAAAAAAAAIgBAAIgbADQgogBgOgMQgKgHgKgNQgYAGgfADQhkACgdhKQgLgaABgdIAAgdQAAgRAKgWQAHgUAKgNQg5ghgdgnQgfgpACglQgCgoAvgzQAAgDgVgiQgagnABggQgFgiAegfQAagjAtAGQgMgRgNgVIgOgeQgWg3AkgzQAgg3BagWQgFg8AbgkQAfgsA2gCQAzgFAbAKQAZAIAJAGQAJgVAXgOQAjgTA3gIQAzgDAnAMIAJAEQACADALAEQAGADAiAeQAgAfAPgBQAIAAAygkQA6gkBFABQBCgBBIA8QATgIAagcIAEgDIAGgDIAAgBQAggRA7gDIAIAAQAAgBAOAAIAKAAIABAeIgJAAIgXABQg3ADgTASIgQAPIAAABIgMAMIgSAVQgQASACAEQgCgEgrggQgvglg3gMQg7gOhBA3Qg1AtgOgCQgNgGgogfIgWgRQgCgCgDgBIgFgHIgMgLIgBgBIgBgBIgFgEQgRgOg8gFQg9gHgmAtQgSAVgOAiQgIgJgDgBQgEgFABgGQgIgCgPgIQgbgKgggBQhdgCgIA8QgEAOAHAlIABAOIgbAKQgRAAgvAkQgyAiAEAqQAAAoANAgQAGARATAnIABAAIgBABIAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQgoALgZARQggAYACAWQABAbAfAnQAdAlAAAEQAAAGggAbQghAbACAaQgCAzBBAxQA/ApABAIQgKAUgKAZQgWAsABARQAAAgAPAbQAaAsBGAAIAhgIQAYgHAGABQAJgDANAYQAMAUANACQAngDAQgDQADgCAEgCQAFgFAKgDQASgLAWgHQAGgBAbApQAjAmA0ABQA7gCAOgSQAAgBAJgLQABgHAJAAQAFAAAMAPIAYAgQAoAsA6AAQA1gCAfgbQAAgBARgSQAHgJAHABQAGgBAtAyQAHAGAkAMIAEACIABAAIAAgEQAoAOAiABQAtgBAhgFQAYgCARgFIAOgEQAIgDAGgDQAGgEAEgFIAIgVQABgEACgCQAEgGALACQADAAAEACQAFADAFAFIACArIgKgJIgGgGQgHAKgJAIIgNALQgGADgHADIgNAEIgOADQgRAEgUACQgWADgbABQg9gBgugNg");
	this.shape_27.setTransform(442.4,325.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(30,31,38,0.502)").s().p("ABRIRIgBgHQgTALgYgBQgMABgDgHIgBgIQAAgIAhgcQAfgdAAgdQAAg4gWg9QgWg0AAgIQAAgMAQgJIAkgOQAzgTABgkQAAghgegdQgfgdAAgLQAAgOAigVQAigUAAgaQAAgQgygaQgxgZAAgVQAAgNAUgWQASgWAAgXQAAgrg3gEQgegCgGgEQgSgHAAgVQAIgfgCgUQgCgkgyAAQgoAAgSAKQgRAKgMAAQgxAAgEgoQADgugDgLQgJgWgUgUQgQgPgugjQAqgPAfASQALgVAsAhQAdAXAdAgQAEAAAegTQAngTApAAQBPgBAEA7QACAggOA0QBiAAAiAtQATAYAAAvQAAAKgKArIgLAuQAAAHAeAdIAAABQAngfAAB9QAAALgwBPQArATAMAJQAOAKAAARQAAAzg/A0IgsAgQgUAOAAAGQAAATAMAnQAMAnAAATQAAAggPAnQgaA/g0AAQgOAAgFgKgACOA6IABABIABgDIgCACgAgPmQIACABIgBgCIgBABg");
	this.shape_28.setTransform(595.6,317.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#17171F").s().p("AFsG+QgNgIAAgKQgBgEAFgEQAEgDADAAQABgBAJAJQAHAJAWAAQAvABAbgJIAAABIADgBQAOgGAJgIQAWgLAIgBQAHAAAAAKQAAAOgnARIgYAKIAAAAQgWAHgRAAQgzAAgVgMgAi5FJQgagPAAgJQAAgKAGABQADABARAHQArAVAqgBQARAAAWgMQAWgNADAAQAMAAABAMQgBALgaAPQgaANgUgBQg2ABgjgVgAoBDfQgSgQAAgMQABgHAEgJQAFgKAGgBQAFAJAAAJQAAAIAhAWQAcATAMAFIgLABIgUABIgBABQgXAAgVgUgAEIBvQgqgBgigVQgcgSAAgKQAAgLAgAPQAtATAbABQAeAAAdgMIAdgMQAMAAAAAOQABAPgpAMQghAJgZAAIgCAAgAo9gVIgJguQAAgSABgFQAEgRANgEQAHAUAFArQAJAlAWAZIAAADQgCADgLABQgZAAgOgqgAiHggQg0AAgsgeQgmgaADgTIADAAQAWAZAcAKQAiANA9ABQALAAAHACIAHACQgFAHgPAIQgPAHgGAAIgBAAgAHqjCQgUgMAAgKQAAgKAMAAQACAAAOAMQATANAWABQAaAAAVgCIgBAXQgQACgQAAQgmgBgZgQgAgXj0Qg4AAgrgiQgpgfAAggQAAgHADgDQABgCAGgBQALAkA1AXQA0AWBGACIADAHIgWANQgJAHgYAAIgEAAgApJlsQABgeASgXQAVgaAogOQgEAIgTAaQgUAagGALQgEAHgBAbQgBAYgHAJQgRgKgBgjg");
	this.shape_29.setTransform(457.3,331.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#39394F").s().p("AF7JsQgjgBgsgSQgjgPgIgGQgjgrgLgIIgEgCQgHgBgHAIQgSAQAAACQgeAYg1gBQg6gEgmgvIgZghQgMgQgEAAQgJgBgCAHQgJALABABQgRAQg6gCQg1gEgjgpQgagrgHABQgWAGgSAKQgKABgEAGQgFABgCACQgRACgnAAQgNgDgLgUQgNgZgJABQgGAAgZAFQgcAGgEgBQhGgEgaguQgQgbABggQgCgRAWgsIAUgrQAAgIg/gtQhCg2ACgzQgCgaAigXQAggYAAgHQgBgEgcgoQgfgpgBgcQgCgWAggVQAYgQAogIQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIABgBIgCAAQgSgogHgRQgMghgBgpQgDgqAygfQAvggARABQAJgCARgHIgBgOQgHglAFgNQAHg8BdAIQAhADAaANQAPAIAJADQgCAGAFAGQACABAIAIQAOggASgUQAmgrA+AMQA7AJARAPIAGAFIABABIAAAAIAOANIAGAHIAFADIAVATQAmAhAOAHQANADA1gpQA6gtA0AJIAOADQA3AQAvApQAsAjABAEQgBgEAQgQQAPgSAegcQAbgZBjAFIADAAIApAEIAbAFQAqAJAeATIgSGdQgUACgagBQgWAAgTgNQgOgMgCAAQgMAAAAAJQAAAKAUANQAZAQAmABQAQAAAPgCIgeLFQgVgJgPgPQgOgSgGgEQgKgKgIAAIgEAAIAAAAQgMAAgBAKIgJAWIgKAJQgKAGgRAEQglAKhFAAIgOgBgAG1H6QgFAEAAADQAAALAOAHQAVAMAzABQARAAAWgHIAAAAIAYgKQAngRAAgOQAAgKgIAAQgHABgWALQgJAIgPAFIgCABIAAAAQgbAIgvAAQgWgBgIgIQgIgJgBAAQgDAAgEAEgAiBGHQAAAJAaAPQAjAUA2AAQASAAAagNQAagOAAgLQgBgMgLAAQgDAAgWANQgUAMgRAAQgqAAgrgUQgRgHgDgBIgBAAQgFAAAAAJgAm9EJQgEAJAAAHQAAAMASAQQAVAUAYgBIATgBIAMgCQgMgFgcgSQghgWAAgIQAAgKgFgIQgHABgFAKgADyCSQAAALAcASQAiAVApABQAaAAAigKQApgLAAgQQAAgNgMAAIgdAMQgeAMgegBQgaAAgtgTQgTgJgIAAQgFAAAAAEgAnzgEQgBAEAAARIAJAtQANAsAaAAQALAAACgDIAAgDQgWgbgJgmQgGgogGgVQgOAEgDASgAggAsQAQgIAFgGIgHgCQgHgDgLAAQg9AAgjgNQgcgLgVgWIgEAAQgCASAmAZQArAeA1AAQAGAAAPgIgAhPkJQgCACAAAIQAAAfAoAgQAqAiA4AAQAdAAAKgHIAVgNIgCgHQhIgCgygWQg2gYgKgjQgGABgCACgAnklMQgTAYAAAeQAAAiASAKQAHgJABgYQABgaAEgHQAFgLAUgaQAUgaAEgIQgpANgUAag");
	this.shape_30.setTransform(449.1,322.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AENJhQgdgSgPgSIgGgIQgjAmhOgDQg+gDgpgoQgfgpgDAAQgMADgLAHQgdAHgrgBQg5gFgighQgcgpgIgIQgiAOgOAHQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAABAAQgFgBgFADQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAABIgBAAIgcAAQgogDgOgNQgJgJgKgNQgZAFgfAAQhkgEgchNQgLgaAAgdIAAgeQAAgQAKgVQAHgUALgMQg5glgdgpQgfgrABglQgBgoAvguQgBgDgVglQgZgpABggQgFgiAdgdQAbgiAsAJQgMgRgMgWIgOgfQgWg5AjgwQAhg0BagRQgFg8AagjQAggqA1ACQAzgBAbALQAaALAJAGQAJgVAXgMQAjgRA3gEQAzABAnAOIAJAFQABADALAFQAIADAiAhQAeAgAQABQAIABAxgiQA2gdA/ADIALAAQBCAEBHBCQATgHAbgZQAigYBLgBQgBgBA1ABIAVABIgWAAIAWAAIASADIAaAEQAjAIAkAQIgBAjQgegTgqgJIgbgFIgpgEIgDAAQhjgEgbAZQgeAbgPASQgQARABAEQgBgEgsgjQgvgpg3gRIgOgDQg0gJg6AtQg1AqgNgDQgOgHgmgiIgVgSIgFgEIgGgHIgOgMIAAgBIgBgBIgGgFQgRgPg7gJQg+gLgmAqQgSAVgOAfQgIgIgCgBQgFgGACgGQgJgCgPgJQgagMghgDQhdgIgHA7QgFAOAHAlIABAOQgRAGgJACQgRgBgvAhQgyAeADAqQABApAMAiQAHARASAoIACAAIgBABIgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgoAIgYARQggAUACAXQABAbAfAqQAcAoABAEQAAAGggAZQgiAWACAbQgCAyBCA2QA/AtAAAJIgUAqQgWAsACARQgBAgAQAcQAaAtBGAFQAEAAAcgFQAZgGAGABQAJgCANAZQALAVANACQAnAAARgBQACgDAFgBQAEgFAKgCQASgKAWgGQAHAAAaArQAjAoA1AFQA6ACARgRQgBgBAJgLQACgGAJABQAEAAAMAPIAXAiQAoAvA6ADQA1ACAegZQAAgBASgQQAHgJAHABIAEACQALAJAjAqQAIAHAjAPQAsARAjACQBPABApgKQARgFAKgGIAKgJIAJgWQABgKAMAAIAAABIAEAAQAIAAAKAKQAGAEAOASQAPAPAVAIIgBAeQgMgEgKgGQgTgKgcgbIgIAJIAAAAQgKAMgMAIIgMAGQgMAFgQADQghAHg1ABQhegGg9gig");
	this.shape_31.setTransform(447.7,322.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#17171F").s().p("AiYGKQgKgHAAgJQgBgFAEgEQADgDAFAAQADAAAFAHQAFAHAYAAQAggBAZgIIAYgJQAEgCAagVQAXgPgBAYQABAWg0ATQgsAPgWABQglAAgRgLgAEHEnQAegDAgghQAjgjAEgBIACAHIABAMQggBEgrABQgVgJgIgHgABaC8IgBgGQAAgCAlgYQAngXAFgOQAPglAHAGQAFAEAAAXQgmBOg7AAQgHAAgDgFgAGCgXQAEgTAAgQQABgPgHgKQgGgLAAgHIAAgIQAaAEAGAPQACAGAAAXQAAAcgFALQgIAWgdAJQAJgLAHgVgAhJhZQgEgFgBgBQAAgIBKgOQBHgZAAg5QAAgRAMAKQAMAKgBAOQABAfgkAeQguAlhIABQgFAAgFgGgAmajQQAbgDAOgJQAPgKAIAAQAJgBAAAJQAAAPghANQgUAHgVADgAEekRQALgrAAgLQAAgQgZgWQgPgOglgZQAwAEAcAgQAVAbAAAeQAAALgIAOQgJANgMAAIgCAAg");
	this.shape_32.setTransform(557,331.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#39394F").s().p("AonJNIAerFQAVgDATgHQAigNAAgPQAAgJgJABQgJAAgOAKQgOAJgbADIARmdIANAIQA0AmALAQQAJAPAJAAIAQgKQAHgKAdggQAagiBCAAQBCgCAfAjQAbAcgJAOQAvgqApgaQAZgTAJgCIAJgCQARgJAXgEQA+gHAmAtQASAVANAgIAKgKIADgMIAYgLQAYgNAigCQBbgJAJA9QACAOgEAlQgEAeAEANIADgDQAfgHArAUQBDAcAAAnQgDAWgLAsQgPAtgLAMIABAHQgCAEAKAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAQAZAKAgATQAgAVAAAWQgCAbgcAoQgeAmABAEQAAAHAgAXQAgAYAAAbQAAAyhAA2QhAAtABAJQAKATAKAXQASAtACAQQAAAggPAcQgcAthFAFQgHABgZgGQgQgEgJgBQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQgiAfgSADQgcADgPAEIgMADQghgCglgSQgdgNgKgNQgKgFgBABQgJAAgGATQgFALgIAeQgYA5g5AGQgSgCgVgTQgWgWgEAAQgHABgIAMQgOAQgFALQggAlgsAEQhaADgYgfQgDgDgIgSQgFgLgJACQgEgCgKAMIgYAYQgrAihFACQgZAAgUgHgAkNGxQgEAEAAAFQAAAJALAHQAQALAmAAQAWgBAsgPQA1gTAAgWQAAgYgYAPQgaAVgEACIgYAJQgaAIgfABQgYAAgFgHQgGgHgDAAQgEAAgDADgADXFDQggAhgeADQAHAHAWAJQAqgBAhhEIgBgMIgCgHQgEABgjAjgAA8C3QgFAOgnAXQgjAYAAACIABAGQACAFAHAAQA6AAAmhOQAAgXgFgEIgCAAQgHAAgNAfgAELglQAAAHAHALQAGAKAAANQAAAQgFATQgGAVgJANQAdgLAIgWQAFgLAAgcQAAgVgCgGQgGgPgagEgAgpiHQAAA5hJAZQhKAOAAAIQAAABAFAFQAFAGAFAAQBKgBAtglQAkgeAAgfQAAgOgLgKQgFgDgCAAQgFAAAAAKgACiktQAZAWAAAQQAAALgLArQANACAKgPQAIgOAAgLQAAgegWgbQgbgggwgEQAkAZAQAOg");
	this.shape_33.setTransform(568,325.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ao3JqIABgeQAUAHAZAAQBGgCArgiIAYgYQAKgMAEACQAJgCAFALQAHASADADQAYAfBagDQAsgEAgglQAGgLANgQQAJgMAGgBQAFAAAWAWQAUATASACQA6gGAXg5QAJgeAEgLQAHgTAIAAQACgBAJAFQALANAcANQAlASAhACIANgDQAOgEAcgDQATgDAigfQAAAAgBAAQAAgBABAAQAAAAAAAAQABgBAAAAQAJABARAEQAZAGAHgBQBEgFAdgtQAOgcABggQgCgQgTgtQgKgXgKgTQgBgJBBgtQBAg2AAgyQAAgbgggYQgggXAAgHQgCgEAegmQAcgoACgbQAAgWgggVQgggTgYgKQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgKAAABgEIgBgHQALgMAPgtQAMgsADgWQgBgnhDgcQgrgUgeAHIgEADQgDgNAEgeQAEglgCgOQgJg9hbAJQgiACgZANIgYALIgCAMIgLAKQgMgggTgVQglgtg+AHQgXAEgRAJIgKACQgJACgZATQgpAagvAqQAKgOgbgcQgggjhBACQhCAAgbAiQgcAggHAKIgRAKQgJAAgJgPQgKgQg1gmIgMgIIABgjIAZALQAmAVAcAXIAngcQAsgcAwgDQAugHBTAuIApgWQAjgSAQgEQAFgEAGgCQAlgPAxAAQA1ABAkAWQAWANAJAVQAIgHAQgEQAhgKA0gCQAxgEAjAcQAeAagFAfQgIAdgBAlIAAABQBWAEAkAjQAaAagCAwQgJAhgGAhQgMAhgIAQQAqgIAfAhQAbAcAAAiQgCAfgVAoQgWAkABADQAtAjADAsQgDArgdAsQggAog2AmIARAgQAKAVAAAQIAAAeQgDAdgHAaQgeBMhkAFQgOABgjgEQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAABAAAAQgoAmgsAAQgwgDgagHQgLgFgGABIgOgGIgkgPQgVBphfAHQgeABgTgNIgQgRQgPATgSAQQgmAdg3ACQg7ACglgSQgbgPgEgMQhHAzhNAFQgagBgVgFgAEdHKIABAAIgBAAIAAgBIAAABg");
	this.shape_34.setTransform(569.5,325.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(30,31,38,0.502)").s().p("ABkIvQgOgBgFgLIgBgGQgTAIgYgDQgMgBgDgIIgBgIQAAgIAhgYQAfgZAAgdQAAg4gWhAQgWg2AAgIQAAgMAQgHIAkgKQAzgOABgkQAAghgeggQgfggAAgLQAAgOAigRQAigTAAgYQAAgQgygfQgxgeAAgWQAAgMAUgUQASgUAAgXQAAgrg3gLQgegFgGgFQgSgJAAgWQAIgegCgTQgCglgygGQgogEgSAIQgRAHgMgBQgxgFgEgpQADgtgDgLQgJgXgUgXQgQgRgugoQAqgKAfAVQALgTAsAmQAdAaAdAjQAEABAegPQAngPApAFQBPAIAEA8QACAggOAyQBiAMAiAwQATAbAAAuQAAALgKApIgLAtQAAAHAeAgIAAABQAngaAAB6QAAAOgwBKQArAXAMALQAOAMAAAQQAAA0g/AsIgsAbQgUAMAAAGQAAATAMAoQAMApAAATQAAAggPAlQgYA2gtAAIgJgBgACOBTIABABIABgCIgCABgAgPmJIACABIgBgCIgBABg");
	this.shape_35.setTransform(565.3,322.8,1,1,0,0,0,-30.3,-3.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#17171F").s().p("AFsGSQgNgGAAgKQgBgEAFgEQAEgEADAAQABgBAJAIQAHAIAWgCQAvgFAbgLIAAAAIADgBQAOgHAJgJQAWgNAIgCQAHAAAAAKQAAAOgnAVIgYAMIAAAAQgWAKgRABIgdACQgcAAgPgHgAi5FYQgagMAAgJQAAgKAGABQADAAARAGQArAPAqgEQARgCAWgPQAWgPADgBQAMgBABAMQgBALgaARQgaAQgUADIgZABQglAAgbgNgAoBERQgSgOAAgMQABgHAEgJQAFgLAGgCQAFAIAAAKQAAAIAhASQAcAQAMADQgCACgJABQgLADgJABIgGAAQgVAAgSgPgAC8BAQgcgPAAgKQAAgKAgALQAtAPAbgDQAegDAdgPIAdgPQAMgBAAANQABAQgpAQQgjANgZADIgPAAQghAAgcgPgAo9AhIgJgrQAAgSABgEQAEgSANgGQAHAUAFAoQAJAkAWAZIAAADQgCADgLACIgDAAQgXAAgNgogAjngqQgmgWADgTIADAAQAWAWAcAIQAiAJA9gGQALgBAHABIAHACQgFAHgPAJQgPAKgHAAIgTABQgqAAgjgVgAHqj6QgUgLAAgKQAAgJAMgBQACAAAOAKQATALAWgCQAagDAVgEIgBAYQgQAEgQABIgNABQgdAAgVgLgAh6kNQgpgcAAgfQAAgIADgCQABgDAGgBQALAiA1ASQA0ARBGgGIADAHIgWAQQgJAHgcADIgRABQguAAgkgYgApJkyQABgeASgaQAVgcAogSQgEAJgTAcQgUAcgGALQgEAIgBAaQgBAYgHAKQgRgIgBgig");
	this.shape_36.setTransform(457.3,338.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#39394F").s().p("AEsJQQgjgLgIgGQgjgngLgHIgEgCQgHAAgHAJQgSASAAACQgeAbg1AEQg6ADgmgrIgZgfQgMgOgEAAQgJABgCAGQgJAMABABQgRASg6AFQg1ABgjglQgagogHABQgWAIgSAMQgKADgEAGQgFABgCADQgRADgnAEQgNgBgLgTQgNgYgJADQgGAAgZAIQgcAIgEAAQhGADgagqQgQgaABggQgCgRAWguQAKgZAKgUQAAgJg/gmQhCgvACgzQgCgaAigcQAggcAAgGQgBgEgcgmQgfgkgBgbQgCgWAggYQAYgTAogMQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAABIABAAIABgBIgCAAQgSgmgHgRQgMgggBgoQgDgqAygkQAvgmARAAQAJgDARgJIgBgOQgHgkAFgOQAHg8BdgCQAhAAAaAJQAPAHAJACQgCAGAFAGQACAAAIAIQAOgiASgWQAmguA+AEQA7ADARANIAGAFIABABIAAAAIAOALIAGAHIAFADIAVAQQAmAdAOAGQANABA1gvQA6gzA0ADIAOACQA3ALAvAjQAsAfABAEQgBgEAQgSQAPgUAegeQAbgcBjgGIADAAIApgBQAOAAANACQAqAFAeAPIgSGfQgUAEgaADQgWACgTgLQgOgKgCAAQgMABAAAJQAAAKAUALQAZANAmgDQAQgBAPgEIgeLIQgVgHgPgNQgOgQgGgEQgKgJgIABIgEAAIAAAAQgMABgBALIgJAWIgKAKQgKAHgRAHQgpAOhPAIIgJAAQggAAgmgLgAG8HeQgDAAgEAEQgFAEAAAEQAAAKAOAGQAVAKAzgFQARgBAWgKIAAAAIAYgMQAngVAAgOQAAgKgIAAQgHACgWANQgJAJgPAHIgCABIAAAAQgbALgvAFQgWACgIgIQgHgHgCAAIAAAAgAiBGrQAAAJAaAMQAjARA2gFQASgDAagQQAagRAAgLQgBgMgLABQgDABgWAPQgUAPgRACQgqAEgrgPQgRgGgDAAIgBAAQgFAAAAAJgAm9FPQgEAJAAAHQAAAMASAOQAVASAYgDQAIgBALgDQAKgBACgCQgMgDgcgQQghgSAAgIQAAgKgFgIQgHACgFALgADyCPQAAAKAcAPQAiATApgEQAagDAigNQApgQAAgQQAAgNgMABIgdAPQgeAPgeADQgaADgtgPQgRgGgIAAQgHAAAAAFgAnzBGQgBAEAAASIAJAtQANAqAagCQALgCACgDIAAgDQgWgZgJgkQgGgqgGgUQgOAGgDASgAiVA8QArAaA1gGQAGAAAPgKQAQgJAFgHIgHgCQgHgBgLABQg9AGgjgJQgcgIgVgWIgEAAQgCATAmAWgAhPjqQgCACAAAIQAAAfAoAcQAqAdA4gGQAdgDAKgHIAVgQIgCgHQhIAGgygRQg2gSgKgiQgGABgCADgAnkkCQgTAaAAAeQAAAiASAIQAHgKABgYQABgaAEgIQAFgLAUgcQAUgcAEgJQgpASgUAcg");
	this.shape_37.setTransform(449.1,327.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AENJgQgdgPgPgQIgGgIQgjAqhOAFQg+ADgpgjQgfgmgDABQgMAFgLAHQgdAKgrAEQg5ABgigeQgcgmgIgGQgiARgOAJQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABABQgFgBgFAEQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgBAAIgcAEQgoABgOgLQgJgIgKgMQgZAHgfAEQhkAGgchJQgLgaAAgdIAAgdQAAgRAKgWQAHgVALgNQg5gfgdgmQgfgoABglQgBgnAvg1QgBgDgVgjQgZglABgfQgFgiAdggQAbglAsAFQgMgRgMgUIgOgeQgWg2Ajg0QAhg4BagaQgFg8AaglQAggtA1gEQAzgGAbAHQAaAJAJAFQAJgWAXgPQAjgUA3gKQAzgFAnAKIAJAEQABADALAEQAIACAiAeQAeAdAQgBQAIgBAxgmQA2gjA/gEIALgBQBCgDBHA6QATgJAbgcQAigbBLgJQgBgBA1gEIAVgCIgWADIAWgCIASAAIAaACQAjAEAkAMIgBAjQgegPgqgFQgNgCgOAAIgpABIgDAAQhjAGgbAcQgeAegPAUQgQASABAEQgBgEgsgfQgvgjg3gLIgOgCQg0gDg6AzQg1AvgNgBQgOgGgmgdIgVgQIgFgDIgGgHIgOgLIAAAAIgBgBIgGgFQgRgNg7gDQg+gEgmAuQgSAWgOAiQgIgIgCAAQgFgGACgGQgJgCgPgHQgagJghAAQhdACgHA8QgFAOAHAkIABAOQgRAJgJADQgRAAgvAmQgyAkADAqQABAoAMAgQAHARASAmIACAAIgBABIgBAAQAAgBAAAAQAAAAAAAAQgBABAAAAQAAAAAAABQgoAMgYATQggAYACAWQABAbAfAkQAcAmABAEQAAAGggAcQgiAcACAaQgCAzBCAvQA/AmAAAJQgKAUgKAZQgWAuACARQgBAgAQAaQAaAqBGgDQAEAAAcgIQAZgIAGAAQAJgDANAYQALATANABQAngEARgDQACgDAFgBQAEgGAKgDQASgMAWgIQAHgBAaAoQAjAlA1gBQA6gFARgSQgBgBAJgMQACgGAJgBQAEAAAMAOIAXAfQAoArA6gDQA1gEAegbQAAgCASgSQAHgJAHAAIAEACQALAHAjAnQAIAGAjALQAsANAjgCQBPgIApgOQARgHAKgHIAKgKIAJgWQABgLAMgBIAAAAIAEAAQAIgBAKAJQAGAEAOAQQAPANAVAHIgBAdQgMgCgKgFQgTgJgcgXIgIAKIAAgBQgKANgMAKIgMAIQgMAFgQAFQghALg1AGIgYABQhOAAg1gYg");
	this.shape_38.setTransform(447.7,327.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#17171F").s().p("AhiGCQglgEgRgNQgKgIAAgJQgBgFAEgDQADgDAFAAQADABAFAHQAFAIAYADQAgADAZgFIAYgHQAEgBAagSQAXgMgBAYQABAVg0ANQgkAIgVAAIgJAAgAEkFSQgVgLgIgJQAeABAggdQAjgfAEgBIACAHIABAMQgeA9gnAAIgGAAgABkDFQgHAAgDgGIgBgGQAAgCAlgTQAngTAFgNQAPgjAHAGQAFAFAAAXQgjBDg0AAIgKgBgAGCANQAEgQAAgRQABgOgHgMQgGgLAAgHIAAgIQAaAGAGARQACAFAAAYQAAAZgFALQgIAVgdAIQAJgMAHgUgAg/hiQgFAAgFgGQgEgGgBgBQAAgIBKgGQBHgQAAg5QAAgRAMALQAMALgBAOQABAfgkAaQglAag0AAQgOAAgPgCgAmakGQAbgBAOgHQAPgIAIABQAJAAAAAJQAAAPghAJQgUAFgVABgAEej3QALgqAAgLQAAgPgZgZQgPgQglgdQAwAJAcAkQAVAcAAAfQAAALgIANQgIALgKAAIgFgBg");
	this.shape_39.setTransform(557,337.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#39394F").s().p("AjZJLQhagHgYghQgDgEgIgTQgFgMgJACQgEgCgKAKQgQANgIAIQgrAdhFgGQgZgDgUgJIAerBQAVgBATgFQAigJAAgPQAAgJgJAAQgJgBgOAIQgOAHgbABIARmbIANAJQA0AsALASQAJAPAJABIAQgHQAHgKAdgdQAageBCAHQBCAGAfAmQAbAggJANQAvglApgWQAZgQAJgBIAJgBQARgHAXAAQA+AAAmAxQASAWANAiIAKgJIADgLIAYgIQAYgLAiACQBbACAJA+QACAOgEAlQgEAdAEANIADgCQAfgDArAYQBDAlAAAmQgDAWgLArQgPArgLALIABAHQgCADAKACQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAgBgBQAZAOAgAWQAgAZAAAWQgCAbgcAiQgeAjABAFQAAAHAgAcQAgAcAAAaQAAAzhAAvQhAAlABAIQAKAVAKAZQASAuACARQAAAggPAaQgcAqhFgDQgHgBgZgIQgQgGgJgCQgBAAAAAAQgBABAAAAQAAAAAAAAQAAAAAAABQgiAagSACQgcAAgPACIgMABQghgGglgVQgdgRgKgOQgKgGgBABQgJgBgGASQgFAKgIAdQgYA3g5gCQgSgDgVgWQgWgYgEgBQgHAAgIAMQgOAOgFAKQgfAggqAAIgDAAgAkNGvQgEADAAAFQAAAJALAIQAQANAmAEQAWADAsgLQA1gNAAgVQAAgYgYAMQgaASgEABIgYAHQgaAFgfgDQgYgDgFgIQgGgHgDgBIgBAAQgEAAgCADgAC2GpQAqAEAhhBIgBgMIgCgHQgEABgjAfQggAdgegBQAHAJAWALgAA8DbQgFANgnATQgjATAAACIABAGQACAGAHAAQA6AHAmhJQAAgXgFgFIgDgBQgHAAgMAegAELAVQAAAHAHALQAGAMAAAOQAAARgFASQgGAUgJAMQAdgIAIgVQAFgLAAgbQAAgYgCgFQgGgRgagGgAgphvQAAA5hJAQQhKAGAAAIQAAABAFAGQAFAGAFAAQBKAJAtghQAkgaAAgfQAAgOgLgLQgFgEgDAAQgEAAAAAKgACij9QAZAZAAAPQAAALgLAqQANAEAKgOQAIgNAAgLQAAgfgWgcQgbgkgwgJQAkAdAQAQg");
	this.shape_40.setTransform(568,329);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Aj1JqQg7gGglgVQgbgTgEgMQhHArhNgEQgagEgVgIIABgdQAUAJAZADQBGAGArgdQAIgIAQgNQAKgLAEACQAJgBAFAMQAHASADAEQAYAiBaAHQAsABAgghQAGgLANgOQAJgLAGAAQAFAAAWAZQAUAWASADQA6ACAXg3QAJgeAEgKQAHgSAIABQACAAAJAFQALAPAcAQQAlAWAhAGIANgBQAOgDAcABQATgCAigbQAAAAgBAAQAAAAABAAQAAgBAAAAQABAAAAAAQAJABARAHQAZAIAHAAQBEADAdgqQAOgaABggQgCgQgTgvQgKgZgKgUQgBgJBBglQBAgvAAgyQAAgbgggcQgggcAAgHQgCgEAegkQAcgiACgbQAAgWgggYQgggXgYgNQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgKgBABgEIgBgHQALgKAPgsQAMgrADgVQgBgnhDgkQgrgZgeAEIgEACQgDgOAEgdQAEglgCgOQgJg+hbgBQgigCgZALIgYAIIgCALIgLAJQgMgigTgXQglgxg+AAQgXABgRAHIgKABQgJAAgZARQgpAVgvAlQAKgNgbgfQgggnhBgFQhCgIgbAfQgcAdgHAJIgRAIQgJgBgJgQQgKgRg1gsIgMgKIABgjIAZAPQAmAZAcAZIAngXQAsgXAwADQAugCBTA4IApgSQAjgNAQgDQAFgDAGgCQAlgKAxAGQA1AGAkAbQAWAPAJAXQAIgHAQgBQAhgHA0AEQAxACAjAgQAeAdgFAeQgIAdgBAlIAAABQBWANAkAoQAaAdgCAvQgJAggGAhQgMAfgIAQQAqgEAfAlQAbAfAAAiQgCAdgVAlQgWAiABADQAtAqADAtQgDAqgdAoQggAmg2AfIARAiQAKAWAAAQIAAAeQgDAdgHAZQgeBJhkgHQgOgBgjgIQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgoAhgsgFQgwgIgagKQgLgGgGAAQgHgFgHgCIgkgUQgVBnhfgFQgegCgTgPQgQgRAAgCQgPARgSAPQggAVguAAIgPgBg");
	this.shape_41.setTransform(569.5,328.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(30,31,38,0.502)").s().p("ABkIpQgOgBgFgLIgBgGQgTAJgYgCQgMgBgDgHIgBgIQAAgIAhgaQAfgaAAgdQAAg4gWg/QgWg2AAgHQAAgNAQgHIAkgMQAzgPABgkQAAghgegfQgfgfAAgLQAAgOAigTQAigUAAgYQAAgQgygdQgxgcAAgWQAAgMAUgVQASgVAAgXQAAgqg3gJQgegEgGgEQgSgJAAgWQAIgegCgUQgCgkgygEQgogDgSAJQgRAIgMgBQgxgDgEgpQADgtgDgLQgJgXgUgWQgQgQgugmQAqgMAfAUQALgUAsAkQAdAZAdAjQAEAAAegQQAngRApAEQBPAFAEA7QACAhgOAzQBiAHAiAvQATAaAAAuQAAALgKAqIgLAtQAAAHAeAfIAAABQAngcAAB7QAAANgwBMQArAWAMAKQAOALAAARQAAAzg/AvIgsAdQgUANAAAFQAAAUAMAnQAMAoAAATQAAAggPAmQgZA5gvAAIgGAAgACOBLIABABIABgDIgCACgAgPmLIACABIgBgCIgBABg");
	this.shape_42.setTransform(565.3,320.7,1,1,0,0,0,-30.3,-2.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#17171F").s().p("AFsGaQgNgHAAgKQgBgEAFgEQAEgEADAAQABAAAJAIQAHAIAWgCQAvgDAbgLIAAAAIADgBQAOgHAJgIQAWgOAIgBQAHgBAAAKQAAAPgnAUIgYAMIAAAAQgWAJgRABIgYABQggAAgQgHgAi5FWQgagNAAgJQAAgKAGABIAUAGQArARAqgEQARgCAWgOQAWgPADAAQAMgBABAMQgBALgaAQQgaAQgUACIgVABQgoAAgcgOgAoBEJQgSgPAAgMQABgHAEgJQAFgLAGgBQAFAIAAAJQAAAJAhASQAcAQAMAEQgCACgJABQgLADgJAAIgFABQgVAAgTgQgAC8BFQgcgQAAgKQAAgKAgALQAtAQAbgCQAegCAdgPIAdgPQAMgBAAAOQABAPgpAPQgjAOgZACIgMAAQgjAAgdgQgAo9AXIgJgqQAAgSABgFQAEgSANgGQAHAVAFAqQAJAiAWAZIAAAEQgCADgLABIgCAAQgYAAgNgpgAjngtQgmgXADgSIADgBQAWAWAcAJQAiAJA9gFQALAAAHACIAHABQgFAHgPAJQgPAJgHABIgQABQgrAAglgXgAHqjxQgUgLAAgKQAAgJAMAAQACgBAOALQATALAWgBQAagCAVgEIgBAYQgQADgQABIgKABQgfAAgWgNgAh6kPQgpgcAAgfQAAgIADgCQABgDAGgBQALAjA1ASQA0ASBGgFIADAHIgWAQQgJAIgcACIgOAAQgvAAgmgagApJk8QABgeASgZQAVgcAogRQgEAJgTAbQgUAcgGALQgEAHgBAbQgBAYgHAKQgRgIgBgjg");
	this.shape_43.setTransform(457.3,337.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#39394F").s().p("AEsJNQgjgMgIgGQgjgngLgIIgEgCQgHAAgHAJQgSASAAABQgeAcg1ADQg6ABgmgsIgZgfQgMgOgEAAQgJAAgCAHIgIAMQgRASg6AEQg1AAgjgmQgagogHABQgWAHgSAMQgKACgEAGQgFACgCACQgRAEgnADQgNgBgLgUQgNgYgJADQgGgBgZAIQgcAIgEAAQhGACgagsQgQgaABggQgCgRAWgtQAKgZAKgUQAAgIg/goQhCgwACgzQgCgaAigbQAggcAAgGQgBgEgcgkQgfgngBgbQgCgWAggYQAYgSAogMQAAAAABAAQAAgBAAAAQAAAAAAAAQAAABAAAAIABAAIABgBIgCAAQgSgngHgQQgMgggBgpQgDgqAygjQAvglARAAQAJgDARgIIgBgOQgHgkAFgOQAHg8BdAAQAhAAAaAKQAPAHAJACQgCAGAFAGQACAAAIAIQAOghASgWQAmguA+AGQA7AEARANIAGAFIABABIAAAAIAOAMIAGAGQACABADACIAVARQAmAeAOAGQANABA1guQA6gyA0AEIAOACQA3AMAvAlQAsAfABAEQgBgEAQgSQAPgTAegeQAbgcBjgEIADAAQAWgBATABQAOABANACQAqAFAeAQIgSGfQgUAEgaACQgWABgTgLQgOgLgCABQgMAAAAAJQAAAKAUALQAZAPAmgDQAQgBAPgDIgeLHQgVgHgPgOQgOgQgGgEQgKgJgIABIgEAAIAAAAQgMABgBAKIgJAXIgKAJQgKAHgRAGQgpAOhPAGIgJAAQggAAgmgMgAG8HdQgDAAgEAEQgFAEAAAEQAAAKAOAHQAVAKAzgEQARgBAWgJIAAAAIAYgMQAngUAAgPQAAgKgIABQgHABgWAOQgJAIgPAHIgCABIAAAAQgbALgvADQgWACgIgIQgHgIgCAAIAAAAgAiBGgQAAAJAaANQAjARA2gEQASgCAagQQAagQAAgLQgBgMgLABQgDAAgWAPQgUAOgRACQgqAEgrgRIgUgGIgBAAQgFAAAAAJgAm9E+QgEAJAAAHQAAAMASAPQAVASAYgDQAIAAALgDQAKgBACgCQgMgEgcgQQghgSAAgJQAAgJgFgIQgHABgFALgADyCLQAAAKAcAQQAiATApgDQAagCAigOQApgPAAgPQAAgOgMABIgdAPQgeAPgeACQgaACgtgQQgRgGgIAAQgHAAAAAFgAnzA0QgBAFAAASIAJAsQANArAagCQALgBACgDIAAgEQgWgZgJgkQgGgqgGgVQgOAGgDASgAi5AIQgCASAmAXQArAbA1gFQAGgBAPgJQAQgJAFgHIgHgBQgHgCgLAAQg9AFgjgJQgcgJgVgWgAhPj0QgCACAAAIQAAAfAoAcQAqAeA4gEQAdgCAKgIIAVgQIgCgHQhIAFgygSQg2gSgKgjQgGABgCADgAnkkTQgTAZAAAeQAAAjASAIQAHgKABgYQABgbAEgHQAFgLAUgcQAUgbAEgJQgpARgUAcg");
	this.shape_44.setTransform(449.1,327.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AENJcQgdgQgPgQIgGgIQgjAphOAEQg+ACgpgkQgfgngDABQgMAEgLAIQgdAJgrADQg5AAgigeQgcgmgIgHQgiAQgOAJQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAABAAQgFgBgFAEQgBAAAAgBQgBAAAAAAQAAAAAAABQAAAAAAAAIgBAAIgcADQgoABgOgMQgJgIgKgMQgZAHgfADQhkAEgchKQgLgZAAgdIAAgeQAAgQAKgWQAHgVALgMQg5ghgdgmQgfgpABglQgBgnAvg0QgBgDgVgiQgZgnABgfQgFgiAdggQAbgkAsAGQgMgRgMgVIgOgeQgWg2Ajg0QAhg3BagYQgFg8AaglQAggtA1gDQAzgFAbAIQAaAJAJAFQAJgVAXgPQAjgTA3gJQAzgEAnALIAJAEQABADALAEQAIACAiAeQAeAeAQgBQAIAAAxgmQA2giA/gDIALAAQBCgCBHA8QATgJAbgcQAigaBLgHQgBgCA1gDIAVgBIgWACIAWgCQAJAAAJABIAaACQAjAFAkAMIgBAkQgegQgqgGQgNgCgOAAQgTgBgWAAIgDABQhjAEgbAbQgeAegPAUQgQARABAEQgBgEgsgfQgvgkg3gMIgOgCQg0gEg6AyQg1AugNgCQgOgGgmgeIgVgQQgDgDgCAAIgGgHIgOgLIAAgBIgBgBIgGgEQgRgOg7gEQg+gFgmAtQgSAWgOAhQgIgHgCgBQgFgGACgGQgJgCgPgHQgagKghAAQhdAAgHA8QgFAOAHAkIABAOQgRAJgJACQgRABgvAlQgyAiADAqQABApAMAgQAHARASAmIACAAIgBABIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgoALgYATQggAXACAWQABAcAfAnQAcAjABAEQAAAHggAbQgiAbACAbQgCAyBCAxQA/AnAAAJQgKAUgKAYQgWAuACARQgBAgAQAaQAaArBGgCQAEAAAcgHQAZgIAGAAQAJgCANAXQALAUANACQAngEARgDQACgDAFgBQAEgGAKgCQASgMAWgIQAHgBAaApQAjAlA1AAQA6gDARgSIAIgNQACgGAJAAQAEgBAMAPIAXAfQAoArA6gBQA1gDAegbQAAgCASgSQAHgJAHABIAEACQALAHAjAoQAIAGAjALQAsAOAjgCQBPgFApgOQARgGAKgHIAKgKIAJgXQABgKAMgBIAAABIAEgBQAIAAAKAJQAGADAOARQAPAOAVAGIgBAeQgMgDgKgFQgTgJgcgYIgIAKIAAgBQgKANgMAKIgMAHIgcAKQghAKg1AGIgPAAQhUAAg4gag");
	this.shape_45.setTransform(447.7,327.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#17171F").s().p("AhiGIQglgDgRgMQgKgIAAgJQgBgFAEgDQADgDAFAAQADAAAFAIQAFAHAYACQAgACAZgGIAYgIQAEgBAagTQAXgNgBAYQABAVg0APQgpAMgVAAIgEgBgAEkFIQgVgKgIgIQAeAAAggfQAjggAEgCIACAIIABAMQgfBAgoAAIgEgBgABkDDQgHAAgDgFIgBgGQAAgCAlgVQAngVAFgNQAPgkAHAHQAFAEAAAXQgkBHg3AAIgGgBgAGCAAQAEgRAAgQQABgPgHgLQgGgLAAgHIAAgIQAaAFAGAQQACAGAAAXQAAAcgFAJQgIAVgdAJQAJgMAHgUgAg/hdQgFgBgFgFQgEgGgBgBQAAgIBKgJQBHgTAAg5QAAgRAMALQAMALgBAOQABAfgkAbQgoAeg6AAIgUgBgAmaj0QAbgCAOgHQAPgJAIAAQAJAAAAAJQAAAPghALQgUAFgVACgAEekAQALgqAAgLQAAgQgZgYQgPgPglgcQAwAHAcAjQAVAcAAAeQAAALgIANQgIAMgLAAIgEAAg");
	this.shape_46.setTransform(557,335.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#39394F").s().p("AlLIiQgDgEgIgTQgFgLgJABQgEgBgKAKIgYAXQgrAehFgDQgZgCgUgIIAerDQAVgCATgFQAigLAAgPQAAgIgJgBQgJAAgOAJQgOAHgbACIARmbIANAIQA0AqALARQAJAPAJABIAQgIQAHgJAdgfQAaggBCAGQBCADAfAlQAbAegJAOQAvgnApgYQAZgRAJAAIAJgCQARgIAXgBQA+gDAmAwQASAVANAiIAKgJIADgLIAYgJQAYgMAiAAQBbgCAJA+QACANgEAmQgEAdAEANIADgCQAfgEArAWQBDAiAAAmQgDAXgLArQgPAsgLALIABAGQgCAFAKABQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAZANAgAVQAgAXAAAWQgCAbgcAmQgeAiABAEQAAAHAgAbQAgAaAAAbQAAAzhAAxQhAAoABAIQAKAVAKAYQASAuACAQQAAAggPAbQgcArhFgBQgHAAgZgGQgQgHgJAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAAAAAQgiAcgSACQgcABgPADIgMACQghgFglgUQgdgPgKgPQgKgFgBABQgJgBgGASQgFALgIAeQgYA3g5ABQgSgDgVgUQgWgZgEAAQgHAAgIAMQgOAPgFAKQggAkgsAAQhagEgYgggAkNGsQgEACAAAGQAAAIALAJQAQALAmADQAWABAsgMQA1gOAAgWQAAgYgYANQgaATgEACIgYAHQgaAGgfgCQgYgCgFgHQgGgIgDAAIgBAAQgEAAgCAEgADXFiQggAfgeAAQAHAIAWAKQAqADAhhCIgBgMIgCgHQgEABgjAggAA8DLQgFANgnAVQgjAUAAACIABAGQACAFAHAAQA6AFAmhKQAAgYgFgEIgDgBQgHAAgMAfgAELgCQAAAFAHAMQAGALAAAOQAAAQgFATQgGAVgJALQAdgIAIgVQAFgMAAgbQAAgYgCgGQgGgOgagFgAgph8QAAA5hJAUQhKAIAAAIQAAABAFAGQAFAFAFABQBKAGAtgjQAkgbAAgfQAAgOgLgKQgFgFgDAAQgEAAAAAKgACikSQAZAYAAAQQAAALgLAqQANADAKgOQAIgNAAgMQAAgegWgcQgbgjgwgGQAkAbAQAPg");
	this.shape_47.setTransform(568,328.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Aj1JlQg7gDglgVQgbgRgEgMQhHAuhNgBQgagDgVgHIABgeQAUAJAZACQBGADArgfIAYgWQAKgLAEACQAJgBAFALQAHASADAEQAYAhBaADQAsAAAggjQAGgKANgPQAJgMAGAAQAFAAAWAYQAUAVASADQA6gBAXg4QAJgdAEgLQAHgSAIABQACgBAJAFQALAOAcAQQAlAUAhAFIANgCQAOgDAcgBQATgCAigcQAAgBgBAAQAAAAABAAQAAAAAAgBQABAAAAAAQAJABARAGQAZAHAHAAQBEABAdgsQAOgaABggQgCgQgTguQgKgZgKgUQgBgIBBgoQBAgyAAgyQAAgbgggaQgggbAAgHQgCgEAegjQAcglACgbQAAgWgggXQgggVgYgNQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQgKgBABgEIgBgGQALgLAPgsQAMgsADgWQgBgmhDgiQgrgXgeAFIgEACQgDgNAEgdQAEgmgCgNQgJg+hbACQgigBgZAMIgYAJIgCALIgLAKQgMgigTgWQglgvg+ACQgXACgRAIIgKABQgJABgZARQgpAXgvAnQAKgNgbgeQgggmhBgDQhCgFgbAgQgcAegHAKIgRAIQgJgBgJgPQgKgRg1gqIgMgJIABgjIAZANQAmAYAcAZIAngZQAsgZAwABQAugEBTA1IApgTQAjgPAQgDQAFgEAGgCQAlgMAxAFQA1AEAkAZQAWAPAJAWQAIgHAQgCQAhgIA0ACQAxAAAjAfQAeAbgFAfQgIAcgBAlIAAABQBWALAkAmQAaAcgCAvQgJAggGAhQgMAggIAQQAqgFAfAjQAbAeAAAiQgCAggVAjQgWAjABADQAtAoADAtQgDArgdApQggAmg2AiIARAhQAKAWAAAQIAAAeQgDAcgHAaQgeBKhkgDQgOAAgjgHQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgoAjgsgDQgwgHgagJQgLgFgGAAIgOgHIgkgSQgVBohfgBQgegBgTgPIgQgSQgPASgSAPQgkAYgzAAIgGAAgAEdH0IABAAIgBAAIAAgBIAAABg");
	this.shape_48.setTransform(569.5,327.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(30,31,38,0.502)").s().p("ABkIdQgOAAgFgKIgBgHQgTAKgYAAQgMAAgDgHIgBgIQAAgIAhgcQAfgcAAgdQAAg4gWg+QgWg0AAgHQAAgNAQgIIAkgOQAzgTABgkQAAghgegdQgfgdAAgLQAAgOAigVQAigWAAgYQAAgQgygaQgxgZAAgWQAAgMAUgWQASgWAAgXQAAgrg3gFQgegCgGgEQgSgHAAgWQAIgfgCgTQgCglgyAAQgogBgSAKQgRAKgMAAQgxgBgEgoQADgtgDgLQgJgWgUgVQgQgPgugjQAqgPAfASQALgVAsAiQAdAXAdAgQAEAAAegSQAngTApABQBPAAAEA7QACAggOA0QBiABAiAtQATAZAAAuQAAALgKArIgLAuQAAAHAeAdIAAAAQAngeAAB9QAAALgwBPQArATAMAJQAOALAAAQQAAA0g/AyIgsAgQgUAOAAAGQAAATAMAnQAMAnAAATQAAAggPAnQgaA+gzAAIgBAAgACOA8IABABIABgCIgCABgAgPmQIACABIgBgBIgBAAg");
	this.shape_49.setTransform(595.6,318.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#17171F").s().p("AFsG4QgNgHAAgLQgBgDAFgEQAEgDADAAQABAAAJAIQAHAJAWAAQAvgBAbgIIAAAAIADgBQAOgFAJgJQAWgLAIgBQAHAAAAAKQAAAPgnARIgYAKIAAAAQgWAHgRAAQgzAAgVgMgAi5FLQgagPAAgJQAAgKAGABQADABARAHQArAUAqgBQARAAAWgMQAWgNADgBQAMAAABAMQgBALgaAPQgaANgUAAIgDABQgzAAgjgUgAoBDmQgSgRAAgMQABgHAEgIQAFgLAGgBQAFAJAAAJQAAAJAhAVQAcARAMAFIgLADIgUABIgBAAQgXAAgVgSgAC8BWQgcgRAAgLQAAgKAgAOQAtATAbAAQAeAAAdgMIAdgNQAMAAAAAOQABAPgpAMQgjAKgZAAQgqABgigWgAo9gPIgJgtQAAgSABgEQAEgTANgEQAHAVAFAqQAJAmAWAYIAAAEQgCADgLAAQgZAAgOgqgAjng8QgmgZADgTIADAAQAWAYAcAKQAiANA9AAQALAAAHACIAHACQgFAGgPAJQgPAHgHABIgDAAQgzAAgqgegAHqjIQgUgNAAgKQAAgJAMAAQACAAAOAMQATAMAWABQAagBAVgCIgBAYQgQACgQAAQgmAAgZgQgAh6kVQgpgfAAgfQAAgIADgDQABgBAGgBQALAjA1AWQA0AXBGAAIADAHIgWAOQgJAHgcAAIgCAAQg2AAgrghgApJllQABgeASgYQAVgaAogOQgEAJgTAaQgUAagGALQgEAGgBAbQgBAYgHAJQgRgKgBgig");
	this.shape_50.setTransform(457.3,332.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#39394F").s().p("AEsJXQgjgOgIgHQgjgqgLgIIgEgCQgHgBgHAIQgSARAAABQgeAZg1gBQg6gDgmguIgZghQgMgQgEAAQgJAAgCAGQgJALABABQgRARg6gBQg1gEgjgoQgagrgHABQgWAGgSAKQgKACgEAFQgFABgCADQgRACgnAAQgNgCgLgVQgNgYgJABQgGAAgZAGQgcAFgEAAQhGgEgagtQgQgbABggQgCgRAWgsQAKgYAKgTQAAgJg/gsQhCg1ACgzQgCgaAigYQAggYAAgGQgBgEgcgoQgfgpgBgcQgCgWAggVQAYgRAogIQAAgBABAAQAAgBAAAAQAAAAAAABQAAAAAAAAIABAAIABgBIgCAAQgSgogHgRQgMghgBgpQgDgqAygfQAvghARABQAJgCARgHIgBgOQgHglAFgOQAHg7BdAHQAhACAaAMQAPAJAJACQgCAGAFAGQACABAIAIQAOggASgUQAmgrA+AKQA7AJARAOIAGAFIABABIAAABIAOAMIAGAHIAFAEIAVASQAmAhAOAHQANACA1gqQA6gtA0AIIAOADQA3AQAvAoQAsAiABAEQgBgEAQgQQAPgSAegcQAbgaBjAEIADAAQAWABATACQAOACANADQAqAIAeATIgSGdQgUACgaAAQgWAAgTgMQgOgMgCAAQgMAAAAAJQAAAKAUAMQAZAQAmABQAQAAAPgCIgeLEQgVgIgPgPQgOgRgGgEQgKgKgIAAIgEAAIAAgBQgMABgBAKIgJAWIgKAJQgKAGgRAFQgpAKhPAAQgjgBgsgRgAG1H2QgFAEAAADQAAALAOAHQAVAMAzAAQARAAAWgIIAAABIAYgKQAngSAAgOQAAgKgIAAQgHABgWALQgJAIgPAGIgCABIAAgBQgbAJgvAAQgWAAgIgIQgIgJgBAAQgDAAgEAEgAiBGKQAAAJAaAPQAjAUA2gBQASAAAagOQAagOAAgLQgBgMgLAAQgDAAgWANQgUANgRAAQgqABgrgUQgRgHgDgBIgBAAQgFAAAAAJgAm9EQQgEAJAAAHQAAAMASAQQAVATAYAAIATgCIAMgCQgMgFgcgSQghgVAAgIQAAgKgFgIQgHABgFAKgADyCRQAAAKAcASQAiAVApAAQAaAAAigKQApgMAAgQQAAgNgMAAIgdAMQgeANgeAAQgaAAgtgTQgTgJgIAAQgFAAAAAFgAnzACQgBAFAAASIAJAtQANAsAaAAQALgBACgDIAAgDQgWgbgJglQgGgqgGgTQgOAEgDAQgAiVAZQArAeA1gBQAGAAAPgIQAQgIAFgGIgHgCQgHgDgLAAQg9ABgjgNQgcgKgVgWIgEAAQgCARAmAZgAhPkHQgCADAAAIQAAAfAoAfQAqAhA4AAQAdAAAKgHIAVgOIgCgHQhIgBgygWQg2gWgKgkQgGABgCACgAnklEQgTAYAAAeQAAAiASAKQAHgJABgYQABgbAEgHQAFgLAUgaQAUgaAEgIQgpAOgUAag");
	this.shape_51.setTransform(449.1,323.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AENJgQgdgSgPgSIgGgIQgjAmhOgCQg+gCgpgnQgfgpgDAAQgMAEgLAGQgdAIgrgBQg5gEgighQgcgogIgIQgiAOgOAIQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAABABQgFgBgFADQgBgBAAAAQgBAAAAAAQAAAAAAAAQAAABAAAAIgBAAIgcABQgogCgOgNQgJgJgKgNQgZAFgfABQhkgDgchMQgLgbAAgdIAAgdQAAgRAKgVQAHgUALgMQg5gkgdgpQgfgrABglQgBgnAvgvQgBgDgVglQgZgpABgfQgFgjAdgdQAbgiAsAJQgMgSgMgVIgOgfQgWg5AjgxQAhg0BagSQgFg8AagjQAggqA1ABQAzgCAbALQAaAKAJAGQAJgVAXgMQAjgRA3gFQAzAAAnAOIAJAEQABADALAFQAIADAiAhQAeAgAQAAQAIABAxgiQA2geA/ACIALAAQBCADBHBBQATgHAbgaQAigXBLgCQgBgCA1ABIAVAAIgWABIAWAAIASACIAaAEQAjAHAkAQIgBAjQgegSgqgJQgNgDgOgBQgTgDgWgBIgDAAQhjgDgbAZQgeAcgPASQgQARABAEQgBgEgsgjQgvgog3gQIgOgDQg0gIg6AuQg1AqgNgDQgOgHgmghIgVgSIgFgDIgGgHIgOgNIAAAAIgBgBIgGgFQgRgPg7gIQg+gLgmArQgSAVgOAgQgIgIgCgBQgFgGACgGQgJgDgPgIQgagMghgDQhdgHgHA8QgFAOAHAkIABAOQgRAHgJACQgRgBgvAiQgyAfADAqQABApAMAhQAHARASAoIACAAIgBABIgBAAQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAQgoAJgYAQQggAVACAXQABAbAfApQAcAoABAEQAAAHggAYQgiAXACAbQgCAyBCA2QA/AsAAAIQgKAUgKAXQgWAsACARQgBAgAQAcQAaAtBGADQAEABAcgGQAZgGAGABQAJgCANAZQALAUANADQAngBARgCQACgCAFgBQAEgGAKgBQASgLAWgGQAHAAAaAqQAjAoA1AEQA6ABARgQQgBgBAJgLQACgHAJABQAEAAAMAPIAXAhQAoAvA6ADQA1ABAegZQAAgCASgQQAHgJAHABIAEACQALAJAjAqQAIAGAjAPQAsARAjABQBPAAApgLQARgFAKgGIAKgJIAJgWQABgKAMAAIAAAAIAEAAQAIAAAKAKQAGAEAOASQAPAPAVAIIgBAdQgMgDgKgGQgTgKgcgbIgIAKIAAgBQgKAMgMAJIgMAGQgMAFgQADQghAIg1ABQhegEg9ghg");
	this.shape_52.setTransform(447.7,323.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#17171F").s().p("AiYGHQgKgHAAgJQgBgFAEgDQADgEAFAAQADAAAFAHQAFAHAYABQAgAAAZgIIAYgJQAEgCAagVQAXgOgBAYQABAVg0ATQgsAPgWAAQglgBgRgLgAEHEpQAegCAgghQAjgiAEgCIACAIIABALQggBFgrAAQgVgJgIgIgABkDBQgHAAgDgFIgBgGQAAgCAlgXQAngXAFgNQAPglAHAGQAFAEAAAXQgmBMg7AAIAAAAgAGCgTQAEgTAAgQQABgPgHgKQgGgLAAgHIAAgIQAaAEAGAPQACAGAAAXQAAAcgFALQgIAUgdALQAJgNAHgTgAg/hVQgFAAgFgFQgEgFgBgCQAAgHBKgOQBHgYAAg5QAAgRAMAKQAMAKgBAOQABAfgkAeQgtAkhHAAIgCAAgAmajVQAbgEAOgIQAPgKAIAAQAJgBAAAJQAAAPghANQgUAHgVADgAEekOQALgrAAgLQAAgQgZgWQgPgOglgaQAwAEAcAhQAVAbAAAeQAAALgIAOQgJANgLAAIgDAAg");
	this.shape_53.setTransform(557,332.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#39394F").s().p("AonJKIAerFQAVgDATgHQAigMAAgPQAAgJgJAAQgJAAgOAKQgOAJgbADIARmdIANAIQA0AnALAQQAJAPAJAAIAQgJQAHgKAdggQAagiBCABQBCgBAfAjQAbAdgJAOQAvgqApgaQAZgTAJgBIAJgCQARgJAXgDQA+gHAmAtQASAVANAhIAKgKIADgMIAYgKQAYgOAigBQBbgIAJA9QACAOgEAlQgEAeAEANIADgDQAfgGArAUQBDAdAAAnQgDAWgLAsQgPAtgLAMIABAGQgCAEAKABQABAAAAgBQAAAAAAAAQAAAAAAAAQAAgBgBAAQAZALAgATQAgAVAAAWQgCAcgcAnQgeAmABAEQAAAGAgAYQAgAZAAAaQAAAzhAA1QhAAsABAJQAKATAKAYQASAtACAQQAAAggPAbQgcAthFAEQgHABgZgGQgQgFgJAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAABQgiAegSADQgcADgPAEIgMACQghgCglgSQgdgOgKgNQgKgFgBABQgJAAgGATQgFAKgIAeQgYA6g5AEQgSgBgVgUQgWgWgEAAQgHAAgIANQgOAPgFALQggAlgsADQhaACgYgfQgDgDgIgSQgFgLgJACQgEgCgKAMIgYAXQgrAihFABQgZAAgUgHgAkNGxQgEAEAAAFQAAAJALAHQAQALAmAAQAWAAAsgPQA1gSAAgWQAAgYgYAPQgaAVgEABIgYAJQgaAIgfAAQgYAAgFgHQgGgHgDAAQgEAAgDADgADXFJQggAhgeACQAHAHAWAJQAqAAAhhEIgBgMIgCgHQgEABgjAjgAA8C7QgFANgnAYQgjAXAAACIABAGQACAFAHAAQA6AAAmhNQAAgXgFgEIgCgBQgHAAgNAggAELgfQAAAHAHALQAGALAAAMQAAARgFATQgGAVgJAMQAdgLAIgVQAFgMAAgbQAAgWgCgFQgGgQgagDgAgpiFQAAA5hJAYQhKAOAAAIQAAABAFAFQAFAGAFAAQBKAAAtglQAkgdAAgfQAAgOgLgKQgFgEgCAAQgFAAAAAKgACikoQAZAXAAAPQAAALgLArQANACAKgPQAIgNAAgLQAAgfgWgaQgbghgwgEQAkAZAQAOg");
	this.shape_54.setTransform(568,325.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ao3JmIABgeQAUAHAZABQBGgCArghIAYgYQAKgLAEABQAJgCAFAMQAHARADAEQAYAfBagCQAsgDAgglQAGgLANgQQAJgMAGgBQAFAAAWAXQAUATASACQA6gFAXg5QAJgeAEgLQAHgTAIABQACgBAJAEQALAOAcANQAlASAhADIANgDQAOgEAcgCQATgEAigeQAAAAgBAAQAAAAABgBQAAAAAAAAQABAAAAgBQAJABARAFQAZAFAHAAQBEgEAdgtQAOgcABggQgCgQgTgtQgKgXgKgUQgBgIBBgsQBAg2AAgyQAAgbgggYQgggXAAgHQgCgEAegnQAcgnACgbQAAgWgggVQgggTgYgLQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAQgKAAABgEIgBgHQALgMAPgtQAMgsADgWQgBgmhDgeQgrgUgeAHIgEACQgDgNAEgdQAEgmgCgNQgJg+hbAIQgiACgZANIgYALIgCALIgLAKQgMgggTgVQglgtg+AGQgXADgRAJIgKACQgJACgZATQgpAZgvAqQAKgOgbgcQgggkhBACQhCgBgbAhQgcAggHAKIgRAJQgJAAgJgOQgKgRg1gmIgMgIIABgkIAZAMQAmAVAcAXIAngbQAsgcAwgBQAugHBTAvIApgWQAjgRAQgEQAFgEAGgCQAlgPAxABQA1ABAkAXQAWANAJAWQAIgIAQgDQAhgKA0gBQAxgDAjAcQAeAagFAfQgIAdgBAlIAAABQBWAFAkAkQAaAagCAvQgJAhgGAhQgMAhgIARQAqgIAfAhQAbAcAAAiQgCAggVAnQgWAkABADQAtAjADAtQgDArgdArQggAog2AlIARAgQAKAVAAARIAAAdQgDAdgHAbQgeBLhkAEQgOAAgjgEQAAgBAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQgoAlgsAAQgwgDgagIQgLgFgGABIgOgGIgkgQQgVBphfAGQgeABgTgOIgQgRQgPATgSAQQgmAcg3ACQg7ABglgSQgbgQgEgMQhHAzhNAEQgagBgVgGgAEdHQIABAAIgBAAIAAgBIAAABg");
	this.shape_55.setTransform(569.5,326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]}).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},5).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},2).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},1).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},4).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},27).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},17).to({state:[{t:this.instance_16,p:{x:503.9,y:350,startPosition:3}}]},8).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},6).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},2).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:3}}]},2).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:3}}]},15).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},7).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},2).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},4).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},57).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},2).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},1).to({state:[{t:this.instance_16,p:{x:504,y:349.6,startPosition:0}}]},1).wait(6));

	// FRE_prof_hat_v01
	this.instance_17 = new lib.FRD_MODEL_part_039("single",0);
	this.instance_17.setTransform(488.6,238.1,1,1,-1.5,0,0,35.8,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(12).to({startPosition:0},0).wait(27).to({startPosition:0},0).wait(17).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(19).to({startPosition:0},0).wait(10).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(4).to({startPosition:0},0).wait(46).to({startPosition:0},0).wait(14).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.7,150.3,248.6,287.6);


(lib.Freddy_Headclip_IDLEcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(558.3,308.5,0.999,0.999,-24,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(442.6,305.8,1,1,15,0,0,13.7,3.4);

	this.instance_2 = new lib.FRD_MODEL_part_051("single",0);
	this.instance_2.setTransform(485.2,246.4,1,1,0,0,180,48.9,80.7);

	this.instance_3 = new lib.FRD_34BACK_H2_COMP("synched",0,false);
	this.instance_3.setTransform(499.5,407.5,1,1,0,0,0,123,165.9);

	this.instance_4 = new lib.FRD_back_hat_v01("single",0);
	this.instance_4.setTransform(492.6,238.4,1,1,-1.5,0,0,35.8,87);

	this.instance_5 = new lib.FRD_back_head_v02("synched",0,false);
	this.instance_5.setTransform(499.1,416.3,1,1,0,0,0,124.4,173.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#39394F").s().p("AhYghQh6ADAEgVQAEgUBNAAQBYAAB0AuQB7AvAFAtQgDAEgGABQimhth4AEg");
	this.shape.setTransform(487.6,248.3);

	this.instance_6 = new lib.FRD_MODEL_part_019("single",0);
	this.instance_6.setTransform(458.5,299.6,1,1,0,0,0,20.4,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#39394F").s().p("AjOBDQAFgtB7gvQB0guBYAAQBNAAAEAUQAEAVh6gDQh4gEimBtQgGgBgDgEg");
	this.shape_1.setTransform(493.3,248.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.3,y:308.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]}).to({state:[{t:this.instance_1,p:{x:442.4,y:307.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.1,y:310.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},30).to({state:[{t:this.instance_1,p:{x:442.1,y:309.6,regY:3.4,rotation:15}},{t:this.instance,p:{x:557.8,y:312.3,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},1).to({state:[{t:this.instance_1,p:{x:442.2,y:308.6,regY:3.4,rotation:15}},{t:this.instance,p:{x:557.9,y:311.3,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},3).to({state:[{t:this.instance_1,p:{x:442.5,y:306.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.2,y:309.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},1).to({state:[{t:this.instance_1,p:{x:442.8,y:304.3,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.5,y:307,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.3,y:308.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},2).to({state:[]},68).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.3,y:308.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},69).to({state:[{t:this.instance_1,p:{x:442.4,y:307.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.1,y:310.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},25).to({state:[{t:this.instance_1,p:{x:442.1,y:309.6,regY:3.4,rotation:15}},{t:this.instance,p:{x:557.8,y:312.3,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},1).to({state:[{t:this.instance_1,p:{x:442.2,y:308.6,regY:3.4,rotation:15}},{t:this.instance,p:{x:557.9,y:311.3,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},3).to({state:[{t:this.instance_1,p:{x:442.5,y:306.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.2,y:309.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},1).to({state:[{t:this.instance_1,p:{x:442.8,y:304.3,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.5,y:307,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15}},{t:this.instance,p:{x:558.3,y:308.5,regX:12.1,scaleX:0.999,scaleY:0.999,rotation:-24}}]},2).to({state:[{t:this.instance_3,p:{skewY:0,x:499.5}},{t:this.instance_2,p:{skewY:180,x:485.2}}]},35).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_3,p:{skewY:180,x:489.2}},{t:this.instance_2,p:{skewY:0,x:503.4}}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.instance_6,p:{skewY:0,x:458.5}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.7,regY:3.3,rotation:0}},{t:this.instance,p:{x:558.3,y:308.6,regX:12,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{skewY:180,x:537.9}}]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 2
	this.instance_7 = new lib.FRD_FRONT_part_nose("single",0);
	this.instance_7.setTransform(506.2,302.2,1,1,0,0,0,28.4,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#39394F").s().p("AA4gHQghgOg/gRQhCgShGABQhHACgHgIQgNgbBEAAQC6AACIBGQBRAnA1A5IgCAHQgCAEgIAAQichVghgLg");
	this.shape_2.setTransform(476.2,255.7);

	this.instance_8 = new lib.FRD_34_MOUTH_COMPcopy("single",0);
	this.instance_8.setTransform(464.6,382.6,1,1,0,0,0,45.7,21.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#39394F").s().p("Aj+BVIgCgHQA1g5BRgnQCIhGC6AAQBEAAgNAbQgHAIhHgCQhGgBhCASQg/ARghAOQghALicBVQgIAAgCgEg");
	this.shape_3.setTransform(504.7,255.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_7}]},30).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[]},68).to({state:[{t:this.instance_7}]},69).to({state:[{t:this.instance_7}]},25).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.instance_8,p:{skewY:0,x:464.6}}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8,p:{skewY:180,x:531.9}}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// FRE_prof_ear_v01
	this.instance_9 = new lib.FRD_MODEL_part_032("single",0);
	this.instance_9.setTransform(450.6,330.7,1,1,0,0,0,2.7,2.5);

	this.instance_10 = new lib.FRD_MODEL_part_033("single",0);
	this.instance_10.setTransform(557.2,330.4,1,1,0,0,0,2.6,2.4);

	this.instance_11 = new lib.FRE_prof_ear_v01("synched",0);
	this.instance_11.setTransform(522.6,347.2);

	this.instance_12 = new lib.FRD_MODEL_part_023("single",0);
	this.instance_12.setTransform(530.6,311.8,1,1,0,0,0,15.8,1.8);

	this.instance_13 = new lib.FRD_MODEL_part_020("single",0);
	this.instance_13.setTransform(418.2,312.6,1,1,0,0,0,11.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{x:557.2,y:330.4}},{t:this.instance_9,p:{x:450.6,y:330.7}}]}).to({state:[{t:this.instance_10,p:{x:557,y:332.4}},{t:this.instance_9,p:{x:450.4,y:332.7}}]},30).to({state:[]},1).to({state:[{t:this.instance_10,p:{x:556.9,y:333.4}},{t:this.instance_9,p:{x:450.3,y:333.7}}]},3).to({state:[{t:this.instance_10,p:{x:557,y:331.9}},{t:this.instance_9,p:{x:450.4,y:332.2}}]},1).to({state:[{t:this.instance_10,p:{x:557.2,y:330.4}},{t:this.instance_9,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_10,p:{x:557.2,y:330.4}},{t:this.instance_9,p:{x:450.6,y:330.7}}]},2).to({state:[]},68).to({state:[{t:this.instance_10,p:{x:557.2,y:330.4}},{t:this.instance_9,p:{x:450.6,y:330.7}}]},69).to({state:[{t:this.instance_10,p:{x:557,y:332.4}},{t:this.instance_9,p:{x:450.4,y:332.7}}]},25).to({state:[]},1).to({state:[{t:this.instance_10,p:{x:556.9,y:333.4}},{t:this.instance_9,p:{x:450.3,y:333.7}}]},3).to({state:[{t:this.instance_10,p:{x:557,y:331.9}},{t:this.instance_9,p:{x:450.4,y:332.2}}]},1).to({state:[{t:this.instance_10,p:{x:557.2,y:330.4}},{t:this.instance_9,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_10,p:{x:557.2,y:330.4}},{t:this.instance_9,p:{x:450.6,y:330.7}}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_11,p:{skewY:0,x:522.6}}]},1).to({state:[{t:this.instance_13,p:{skewY:0,x:418.2}},{t:this.instance_12,p:{skewY:0,x:530.6}}]},1).to({state:[{t:this.instance_10,p:{x:561,y:334.4}},{t:this.instance_9,p:{x:447.9,y:333.4}}]},1).to({state:[{t:this.instance_12,p:{skewY:180,x:465.9}},{t:this.instance_13,p:{skewY:180,x:578.2}}]},1).to({state:[{t:this.instance_11,p:{skewY:180,x:458.4}}]},1).wait(1));

	// FRE_prof_ear_v01
	this.instance_14 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_14.setTransform(447.9,336.8,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_15 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_15.setTransform(560,336.7,1,1,0,0,0,17.7,20.9);

	this.instance_16 = new lib.FRE_prof_hair_v01("synched",0);
	this.instance_16.setTransform(564.1,321.9);

	this.instance_17 = new lib.FRD_MODEL_part_021("single",0);
	this.instance_17.setTransform(416.1,328.6,1,1,0,0,0,2.5,2.3);

	this.instance_18 = new lib.FRD_MODEL_part_022("single",0);
	this.instance_18.setTransform(529.2,328.6,1,1,0,0,0,2.5,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]}).to({state:[{t:this.instance_15,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:1,scaleY:1.03,y:336.8}}]},30).to({state:[{t:this.instance_15,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_15,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1.036,y:336}},{t:this.instance_14,p:{startPosition:0,scaleY:1.067,y:336}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]},2).to({state:[]},68).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]},69).to({state:[{t:this.instance_15,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:1,scaleY:1.03,y:336.8}}]},25).to({state:[{t:this.instance_15,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_15,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1.036,y:336}},{t:this.instance_14,p:{startPosition:0,scaleY:1.067,y:336}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_16,p:{skewY:0,x:564.1}}]},1).to({state:[{t:this.instance_18,p:{skewY:0,x:529.2}},{t:this.instance_17,p:{skewY:0,x:416.1}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_14,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_18,p:{skewY:180,x:467.3}},{t:this.instance_17,p:{skewY:180,x:580.4}}]},1).to({state:[{t:this.instance_16,p:{skewY:180,x:416.8}}]},1).wait(1));

	// FRE_prof_hair_v01
	this.instance_19 = new lib.FRD_MODEL_part_029("single",0);
	this.instance_19.setTransform(508.7,254.5,1,1,0,0,0,33,13.2);

	this.instance_20 = new lib.FRE_prof_brow_v01("synched",0);
	this.instance_20.setTransform(457,306.9);

	this.instance_21 = new lib.FRD_MODEL_part_035("single",0);
	this.instance_21.setTransform(415.4,330.7,0.897,0.897,0,0,0,18.6,20);

	this.instance_22 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_22.setTransform(531.8,332.8,1,1,0,0,0,17.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_19}]},30).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},2).to({state:[]},68).to({state:[{t:this.instance_19}]},69).to({state:[{t:this.instance_19}]},25).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},3).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_19}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_20,p:{skewY:0,x:457}}]},1).to({state:[{t:this.instance_22},{t:this.instance_21}]},1).to({state:[{t:this.instance_19}]},1).to({state:[]},1).to({state:[{t:this.instance_20,p:{skewY:180,x:523.9}}]},1).wait(1));

	// FRE_prof_brow_v01
	this.instance_23 = new lib.FRD_FRONT_MOUTH_COMP("single",21);
	this.instance_23.setTransform(501.5,379.8,1,1,0,0,0,59.6,14);

	this.instance_24 = new lib.FRE_prof_pupil_v01("synched",0);
	this.instance_24.setTransform(451.7,333.8);

	this.instance_25 = new lib.FRD_MODEL_part_012("single",0);
	this.instance_25.setTransform(495.9,340.9,1,1,0,0,0,113.7,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{startPosition:21}}]}).to({state:[{t:this.instance_23,p:{startPosition:21}}]},30).to({state:[{t:this.instance_23,p:{startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{startPosition:21}}]},3).to({state:[{t:this.instance_23,p:{startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{startPosition:21}}]},2).to({state:[]},68).to({state:[{t:this.instance_23,p:{startPosition:21}}]},69).to({state:[{t:this.instance_23,p:{startPosition:21}}]},25).to({state:[{t:this.instance_23,p:{startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{startPosition:21}}]},3).to({state:[{t:this.instance_23,p:{startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{startPosition:21}}]},1).to({state:[{t:this.instance_23,p:{startPosition:21}}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_24,p:{skewY:0,x:451.7}}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_23,p:{startPosition:0}}]},1).to({state:[]},1).to({state:[{t:this.instance_24,p:{skewY:180,x:529.3}}]},1).wait(1));

	// FRE_prof_pupil_v01
	this.instance_26 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_26.setTransform(501.4,416.3,1,1,0,0,0,84.4,169.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFD8C9").s().p("AgZBHIABgzIAAgDIADg+IAEhVIABABIACADIAFADQA4BQghBnQgNAngXAgg");
	this.shape_4.setTransform(420.9,339.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AACDzQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAIAAACQAAgIACAGgAgPALIAAgCIgBgtQAAgoACgpIAGh/IACACIABABIADAFIATALIgEBWIgDBAIAAADIgBAyIADA7IgGAHQgJANgIANIgEg7g");
	this.shape_5.setTransform(417.3,349.1);

	this.instance_27 = new lib.FRE_prof_eye_v01("synched",0);
	this.instance_27.setTransform(456.6,335.9,1.173,1);

	this.instance_28 = new lib.FRD_MODEL_part_014("single",0);
	this.instance_28.setTransform(404.6,349.8,1,1,0,0,0,14.6,20.9);

	this.instance_29 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_29.setTransform(464.6,332.8,1,1,0,0,180,17.7,20.9);

	this.instance_30 = new lib.FRD_MODEL_part_035("single",0);
	this.instance_30.setTransform(581,330.7,0.897,0.897,0,0,180,18.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26}]}).to({state:[{t:this.instance_26}]},30).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},2).to({state:[{t:this.shape_5},{t:this.shape_4}]},68).to({state:[{t:this.instance_26}]},69).to({state:[{t:this.instance_26}]},25).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},3).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_27,p:{skewY:0,x:456.6}}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_30},{t:this.instance_29}]},1).to({state:[{t:this.instance_27,p:{skewY:180,x:524.3}}]},1).wait(1));

	// FRE_prof_eye_v01
	this.instance_31 = new lib.FRD_MODEL_part_031("single",0);
	this.instance_31.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.instance_32 = new lib.FRE_prof_nose_v01("synched",0);
	this.instance_32.setTransform(402,338.5);

	this.instance_33 = new lib.FRD_MODEL_part_015("single",0);
	this.instance_33.setTransform(418.2,317.2,1,1,0,0,0,46.3,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31}]}).to({state:[{t:this.instance_31}]},30).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},2).to({state:[]},68).to({state:[{t:this.instance_31}]},69).to({state:[{t:this.instance_31}]},25).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},3).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_31}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_32,p:{skewY:0,x:402}}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_31}]},1).to({state:[]},1).to({state:[{t:this.instance_32,p:{skewY:180,x:579}}]},1).wait(1));

	// FRE_prof_nose_v01
	this.instance_34 = new lib.FRD_MODEL_part_030("single",0);
	this.instance_34.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.instance_35 = new lib.FRD_MODEL_part_030copy2("single",0);
	this.instance_35.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.instance_36 = new lib.FRE_prof_face_v01("synched",0);
	this.instance_36.setTransform(479.9,339.6);

	this.instance_37 = new lib.FRD_MODEL_part_025("single",0);
	this.instance_37.setTransform(513.8,242.8,1,1,0,0,0,48.9,80.7);

	this.instance_38 = new lib.FRD_MODEL_part_012("single",0);
	this.instance_38.setTransform(500.6,340.9,1,1,0,0,180,113.7,96.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34}]}).to({state:[{t:this.instance_34}]},30).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},2).to({state:[{t:this.instance_35}]},68).to({state:[{t:this.instance_34}]},69).to({state:[{t:this.instance_34}]},25).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},3).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_36,p:{skewY:0,x:479.9}}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_36,p:{skewY:180,x:501}}]},1).wait(1));

	// FRE_prof_face_v01
	this.instance_39 = new lib.FRD_MODEL_part_038("single",0);
	this.instance_39.setTransform(504,349.6,1,1,0,0,0,126.2,90);

	this.instance_40 = new lib.FRE_prof_hat_v01("synched",0);
	this.instance_40.setTransform(508.6,201.5);

	this.instance_41 = new lib.FRD_MODEL_part_014("single",0);
	this.instance_41.setTransform(591.8,349.8,1,1,0,0,180,14.6,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_39}]}).to({state:[{t:this.instance_39}]},30).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},2).to({state:[]},68).to({state:[{t:this.instance_39}]},69).to({state:[{t:this.instance_39}]},25).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},3).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_39}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_40,p:{skewY:0,x:508.6}}]},1).to({state:[]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_40,p:{skewY:180,x:472.4}}]},1).wait(1));

	// FRE_prof_hat_v01
	this.instance_42 = new lib.FRD_MODEL_part_039("single",0);
	this.instance_42.setTransform(488.6,238.1,1,1,-1.5,0,0,35.8,87);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(41,45,54,0.4)").s().p("AgDgCIADgDIAEALIgHgIg");
	this.shape_6.setTransform(561.1,271.4);

	this.instance_43 = new lib.FRD_MODEL_part_015("single",0);
	this.instance_43.setTransform(578.2,317.2,1,1,0,0,180,46.3,62.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(41,45,54,0.4)").s().p("AgBgBIADABIgBACIgCgDg");
	this.shape_7.setTransform(435.4,271.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_42}]}).to({state:[{t:this.instance_42}]},30).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},2).to({state:[]},68).to({state:[{t:this.instance_42}]},69).to({state:[{t:this.instance_42}]},25).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},3).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},2).to({state:[]},35).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.shape_7}]},1).wait(1));

	// Layer 12
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(41,45,54,0.4)").s().p("AgBAAIADgBIgCADIgBgCg");
	this.shape_8.setTransform(545.5,271.5);

	this.instance_44 = new lib.FRD_MODEL_part_025("single",1);
	this.instance_44.setTransform(482.6,242.8,1,1,0,0,180,48.9,80.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(41,45,54,0.4)").s().p("AABgFIADADIgHAIIAEgLg");
	this.shape_9.setTransform(419.8,271.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},30).to({state:[]},145).to({state:[]},68).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.7,150.3,248.6,287.6);


(lib.Freddy_Headclip_IDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FRD_MODEL_part_028("single",0);
	this.instance.setTransform(558.3,308.5,0.999,0.999,-24,0,0,12.1,4.2);

	this.instance_1 = new lib.FRD_MODEL_part_027("single",0);
	this.instance_1.setTransform(442.6,305.8,1,1,15,0,0,13.7,3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]}).to({state:[{t:this.instance_1,p:{x:442.4,y:307.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.1,y:310.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},30).to({state:[{t:this.instance_1,p:{x:442.1,y:309.6,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:557.8,y:312.3,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.2,y:308.6,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:557.9,y:311.3,rotation:-24,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_1,p:{x:442.5,y:306.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.2,y:309.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.8,y:304.3,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.5,y:307,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:443,y:309.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.7,y:312.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},62).to({state:[{t:this.instance_1,p:{x:442.3,y:315.7,regY:3.3,rotation:21.8,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558,y:318.6,rotation:-29.7,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:443,y:309.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.7,y:312.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_1,p:{x:445.7,y:296.6,regY:3.3,rotation:-18.9,regX:13.6,scaleX:0.999,scaleY:0.999}},{t:this.instance,p:{x:561.5,y:299.5,rotation:-3.6,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.instance_1,p:{x:446.4,y:290.5,regY:3.3,rotation:-29.9,regX:13.6,scaleX:1,scaleY:1}},{t:this.instance,p:{x:562.2,y:293.4,rotation:20.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:446.6,y:287.3,regY:3.3,rotation:-29.9,regX:13.6,scaleX:1,scaleY:1}},{t:this.instance,p:{x:562.4,y:290.1,rotation:20.9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:446,y:289.5,regY:3.3,rotation:-29.9,regX:13.6,scaleX:1,scaleY:1}},{t:this.instance,p:{x:561.8,y:292.3,rotation:20.9,scaleX:0.999,scaleY:0.999}}]},63).to({state:[{t:this.instance_1,p:{x:445.2,y:292.9,regY:3.3,rotation:-22.4,regX:13.6,scaleX:1,scaleY:1}},{t:this.instance,p:{x:560.9,y:295.7,rotation:17.6,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:443.3,y:302.9,regY:3.2,rotation:7,regX:13.6,scaleX:1,scaleY:1}},{t:this.instance,p:{x:559,y:305.8,rotation:-9,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:443.2,y:303.6,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.8,y:306.9,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:442.4,y:307.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.1,y:310.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},25).to({state:[{t:this.instance_1,p:{x:442.1,y:309.6,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:557.8,y:312.3,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.2,y:308.6,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:557.9,y:311.3,rotation:-24,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_1,p:{x:442.5,y:306.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.2,y:309.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.8,y:304.3,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.5,y:307,rotation:-24,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_1,p:{x:442.6,y:305.8,regY:3.4,rotation:15,regX:13.7,scaleX:1,scaleY:1}},{t:this.instance,p:{x:558.3,y:308.5,rotation:-24,scaleX:0.999,scaleY:0.999}}]},2).wait(35));

	// Layer 2
	this.instance_2 = new lib.FRD_FRONT_part_nose("single",0);
	this.instance_2.setTransform(506.2,302.2,1,1,0,0,0,28.4,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

	// FRE_prof_ear_v01
	this.instance_3 = new lib.FRD_MODEL_part_032("single",0);
	this.instance_3.setTransform(450.6,330.7,1,1,0,0,0,2.7,2.5);

	this.instance_4 = new lib.FRD_MODEL_part_033("single",0);
	this.instance_4.setTransform(557.2,330.4,1,1,0,0,0,2.6,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]}).to({state:[{t:this.instance_4,p:{x:557,y:332.4}},{t:this.instance_3,p:{x:450.4,y:332.7}}]},30).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:556.9,y:333.4}},{t:this.instance_3,p:{x:450.3,y:333.7}}]},3).to({state:[{t:this.instance_4,p:{x:557,y:331.9}},{t:this.instance_3,p:{x:450.4,y:332.2}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},2).to({state:[{t:this.instance_4,p:{x:557,y:333}},{t:this.instance_3,p:{x:450.4,y:333.3}}]},62).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:555.8,y:331}},{t:this.instance_3,p:{x:446.6,y:331}}]},3).to({state:[{t:this.instance_4,p:{x:554.6,y:327.2}},{t:this.instance_3,p:{x:441.8,y:325.1}}]},1).to({state:[{t:this.instance_4,p:{x:553.5,y:324.5}},{t:this.instance_3,p:{x:440.8,y:323.5}}]},1).to({state:[{t:this.instance_4,p:{x:553.6,y:323.2}},{t:this.instance_3,p:{x:441,y:321.5}}]},1).to({state:[{t:this.instance_4,p:{x:552.4,y:327.6}},{t:this.instance_3,p:{x:439.8,y:325.9}}]},16).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:552.4,y:327.6}},{t:this.instance_3,p:{x:439.8,y:325.9}}]},3).to({state:[{t:this.instance_4,p:{x:553.6,y:323.2}},{t:this.instance_3,p:{x:441,y:321.5}}]},1).to({state:[{t:this.instance_4,p:{x:552.4,y:327.6}},{t:this.instance_3,p:{x:439.8,y:325.9}}]},2).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:552.4,y:327.6}},{t:this.instance_3,p:{x:439.8,y:325.9}}]},3).to({state:[{t:this.instance_4,p:{x:553.6,y:323.2}},{t:this.instance_3,p:{x:441,y:321.5}}]},1).to({state:[{t:this.instance_4,p:{x:554.4,y:324.6}},{t:this.instance_3,p:{x:442.3,y:323.1}}]},35).to({state:[{t:this.instance_4,p:{x:556,y:327.4}},{t:this.instance_3,p:{x:443.5,y:327.5}}]},1).to({state:[{t:this.instance_4,p:{x:556.9,y:329.2}},{t:this.instance_3,p:{x:447.4,y:329.2}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},2).to({state:[{t:this.instance_4,p:{x:557,y:332.4}},{t:this.instance_3,p:{x:450.4,y:332.7}}]},25).to({state:[]},1).to({state:[{t:this.instance_4,p:{x:556.9,y:333.4}},{t:this.instance_3,p:{x:450.3,y:333.7}}]},3).to({state:[{t:this.instance_4,p:{x:557,y:331.9}},{t:this.instance_3,p:{x:450.4,y:332.2}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},1).to({state:[{t:this.instance_4,p:{x:557.2,y:330.4}},{t:this.instance_3,p:{x:450.6,y:330.7}}]},2).wait(35));

	// FRE_prof_ear_v01
	this.instance_5 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_5.setTransform(447.9,336.8,1.03,1.03,0,0,180,17.7,20.9);

	this.instance_6 = new lib.FRD_MODEL_part_034("single",0);
	this.instance_6.setTransform(560,336.7,1,1,0,0,0,17.7,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]}).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},30).to({state:[{t:this.instance_6,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1.036,y:336}},{t:this.instance_5,p:{startPosition:0,scaleY:1.067,y:336}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},2).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},62).to({state:[{t:this.instance_6,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},16).to({state:[{t:this.instance_6,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},2).to({state:[{t:this.instance_6,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},35).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},2).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},25).to({state:[{t:this.instance_6,p:{startPosition:2,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:2,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:1,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:1,scaleY:1.03,y:336.8}}]},3).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1.036,y:336}},{t:this.instance_5,p:{startPosition:0,scaleY:1.067,y:336}}]},1).to({state:[{t:this.instance_6,p:{startPosition:0,scaleY:1,y:336.7}},{t:this.instance_5,p:{startPosition:0,scaleY:1.03,y:336.8}}]},2).wait(35));

	// FRE_prof_hair_v01
	this.instance_7 = new lib.FRD_MODEL_part_029("single",0);
	this.instance_7.setTransform(508.7,254.5,1,1,0,0,0,33,13.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

	// FRE_prof_brow_v01
	this.instance_8 = new lib.FRD_FRONT_MOUTH_COMP("single",21);
	this.instance_8.setTransform(501.5,379.8,1,1,0,0,0,59.6,14);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(3).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(2).to({startPosition:21},0).wait(62).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(3).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(63).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(2).to({startPosition:21},0).wait(25).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(3).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(1).to({startPosition:21},0).wait(2).to({startPosition:21},0).wait(35));

	// FRE_prof_pupil_v01
	this.instance_9 = new lib.FRD_MODEL_part_037("single",0);
	this.instance_9.setTransform(501.4,416.3,1,1,0,0,0,84.4,169.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

	// FRE_prof_eye_v01
	this.instance_10 = new lib.FRD_MODEL_part_031("single",0);
	this.instance_10.setTransform(598.2,347.8,1,1,0,0,0,11.3,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

	// FRE_prof_nose_v01
	this.instance_11 = new lib.FRD_MODEL_part_030("single",0);
	this.instance_11.setTransform(407.4,339.5,1,1,0,0,0,10.9,15.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

	// FRE_prof_face_v01
	this.instance_12 = new lib.FRD_MODEL_part_038("single",0);
	this.instance_12.setTransform(504,349.6,1,1,0,0,0,126.2,90);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

	// FRE_prof_hat_v01
	this.instance_13 = new lib.FRD_MODEL_part_039("single",0);
	this.instance_13.setTransform(488.6,238.1,1,1,-1.5,0,0,35.8,87);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(30).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(62).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(63).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.7,150.3,248.6,287.6);


(lib.Freddy_Masterclip_Whatever = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FRD_MODEL_part_064
	this.instance = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewX:1,skewY:181.1,x:589.8,y:433},0).wait(1).to({skewX:1.8,skewY:181.9,x:590.8,y:436.1},0).wait(1).to({skewX:3.6,skewY:183.7,x:591,y:442.1},0).wait(1).to({x:590.7,y:443.7},0).wait(2).to({regX:124.9,scaleX:1,scaleY:1,skewX:9.9,skewY:190,x:593.4,y:453.3,startPosition:15},0).to({_off:true},2).wait(19).to({regX:125,regY:9.7,scaleX:0.99,scaleY:1.01,skewX:-2.9,skewY:175.5,x:606.2,y:441.2,startPosition:19,_off:false},0).wait(1).to({scaleX:1.07,scaleY:1.01,skewX:-2.3,skewY:174.2,x:605.8,y:439.6,startPosition:20},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-5.5,skewY:172.9,x:605.5,y:437,startPosition:11},0).wait(2).to({regY:9.8,skewX:-10,skewY:168.4,x:602.2,y:429.8},0).wait(2).to({regX:124.9,regY:9.6,scaleX:1,scaleY:1.01,skewX:-6.1,skewY:177.9,x:600.1,y:426.7},0).to({_off:true},2).wait(22).to({regX:125,regY:9.7,scaleX:0.99,scaleY:1.01,skewX:3.1,skewY:181.8,x:590.3,y:420.5,startPosition:32,_off:false},0).wait(2).to({regY:9.5,scaleX:1,scaleY:1.12,skewX:-3,skewY:184.7,x:589.3,y:427,startPosition:2},0).wait(1).to({regY:9.6,scaleX:1,scaleY:1.04,skewX:-1.6,skewY:181.8,x:588.3,y:429.4},0).wait(1).to({regY:9.5,scaleX:1,scaleY:1,skewX:0,skewY:180,x:588.1,y:430.5},0).wait(1).to({x:588,y:431.1},0).wait(3).to({x:588.2,y:429.9},0).wait(2).to({x:588.3,y:429.3},0).wait(1));

	// Layer 96
	this.instance_1 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_1.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgSAMQgDgGAAgFQAAgXAVABQAWABAAAUQAAAIgGAHQgHAHgLAAQgLAAgFgKg");
	this.shape.setTransform(445.8,462.8);

	this.instance_2 = new lib.FRD_MODEL_part_041("single",10);
	this.instance_2.setTransform(436.8,418.2,0.964,1.027,0,11.8,10.2,127.5,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:418.1,y:426.6,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:1,x:419.6,y:427.2,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:1.8,x:420.7,y:428,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:3.6,x:421.4,y:428.7,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:3.6,x:421.1,y:430.4,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:5.4,x:424.1,y:433.4,startPosition:15,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[]},2).to({state:[{t:this.shape},{t:this.instance_1,p:{regY:6.7,rotation:0,x:438.6,y:414.8,startPosition:8,regX:127.7,scaleX:0.994,scaleY:1.015,skewX:10.2,skewY:8.8}}]},19).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:0,x:437.7,y:417,startPosition:25,regX:127.7,scaleX:0.994,scaleY:1.015,skewX:8.9,skewY:7.5}}]},1).to({state:[{t:this.instance_2,p:{regX:127.5,regY:6.8,scaleX:0.964,scaleY:1.027,skewX:11.8,skewY:10.2,x:436.8,y:418.2,startPosition:10}}]},2).to({state:[{t:this.instance_2,p:{regX:127.6,regY:6.7,scaleX:0.994,scaleY:1.015,skewX:5.6,skewY:4.2,x:432,y:419,startPosition:10}}]},2).to({state:[{t:this.instance_2,p:{regX:127.5,regY:6.8,scaleX:1.048,scaleY:1.009,skewX:1.9,skewY:7.2,x:430.7,y:418.1,startPosition:10}}]},2).to({state:[{t:this.instance_2,p:{regX:127.7,regY:6.7,scaleX:0.994,scaleY:1.014,skewX:3.9,skewY:2.5,x:428.8,y:406.9,startPosition:26}}]},2).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:0,x:428.9,y:407,startPosition:28,regX:127.7,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4}}]},1).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:0,x:428.5,y:405.7,startPosition:27,regX:127.7,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4}}]},2).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:0,x:428.4,y:406.3,startPosition:14,regX:127.7,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4}}]},2).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:0,x:428.4,y:406.9,startPosition:14,regX:127.7,scaleX:0.994,scaleY:1.014,skewX:1.8,skewY:0.4}}]},2).to({state:[{t:this.instance_1,p:{regY:6.7,rotation:0,x:428.2,y:409.3,startPosition:29,regX:127.7,scaleX:0.994,scaleY:1.014,skewX:3.1,skewY:1.7}}]},13).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:427.7,y:412.5,startPosition:30,regX:127.7,scaleX:0.994,scaleY:1.014,skewX:3.1,skewY:1.7}}]},2).to({state:[{t:this.instance_1,p:{regY:6.6,rotation:0,x:419.3,y:424,startPosition:2,regX:128,scaleX:0.949,scaleY:0.99,skewX:-11.5,skewY:-15.6}}]},2).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:418.1,y:426.6,startPosition:2,regX:127.8,scaleX:1.005,scaleY:0.996,skewX:-3.3,skewY:-5.5}}]},1).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:418,y:427.8,startPosition:2,regX:127.9,scaleX:1.001,scaleY:0.999,skewX:-2,skewY:-2.2}}]},1).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:417.8,y:428.4,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:418,y:427.2,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},3).to({state:[{t:this.instance_1,p:{regY:6.8,rotation:0,x:418.1,y:426.6,startPosition:2,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).wait(1));

	// FRD_MODEL_part_049
	this.instance_3 = new lib.FRD_MODEL_part_026("single",0);
	this.instance_3.setTransform(502.1,426.8,1,1,0,0,0,41.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:1,x:503.6,y:429},0).wait(1).to({rotation:1.8,x:504.5,y:431.8},0).wait(1).to({regX:41,rotation:3.6,x:504.6,y:438.5},0).wait(1).to({x:504.1,y:441.5},0).wait(2).to({rotation:5.4,x:507.5,y:441.6},0).wait(2).to({regX:41.1,rotation:7.7,x:512.1,y:435.6},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,skewX:11.4,skewY:10.6,x:515.9,y:416.9},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewX:13,skewY:11.5,x:520.3,y:408.7},0).wait(1).to({x:520.5,y:407.5},0).wait(2).to({x:520.7,y:406.3},0).wait(3).to({x:520.5,y:407.5},0).wait(2).to({x:520.3,y:408.7},0).wait(5).to({x:520.1,y:409.9},0).wait(2).to({skewX:10.2,skewY:8.8,x:518.5,y:419.8},0).wait(1).to({x:519.5,y:426.3},0).wait(1).to({skewX:8.9,skewY:7.5,x:518.8,y:426.7},0).wait(2).to({skewX:7.7,skewY:6.3,x:518.3,y:426},0).wait(2).to({regY:24.9,skewX:5.6,skewY:4.2,x:513.7,y:424.2},0).wait(2).to({scaleY:1.01,skewX:4.4,skewY:3,x:512.4,y:421},0).wait(2).to({regY:24.8,skewX:3.9,skewY:2.5,x:510.3,y:409.4},0).wait(1).to({scaleX:0.97,skewX:2.8,skewY:1.5,x:508,y:405.6},0).wait(2).to({x:507.6,y:404.3},0).wait(2).to({x:507.5,y:404.9},0).wait(2).to({x:507.4,y:405.5},0).wait(13).to({regX:41.2,regY:24.7,skewX:3.1,skewY:1.8,x:507.3,y:408.2},0).wait(2).to({skewX:3,skewY:1.7,x:506.8,y:411.2},0).wait(2).to({regX:41.1,regY:24.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:503.1,y:424.5},0).wait(1).to({x:502.1,y:426.8},0).wait(1).to({x:501.9,y:428},0).wait(1).to({x:501.8,y:428.6},0).wait(3).to({x:502,y:427.4},0).wait(2).to({x:502.1,y:426.8},0).wait(1));

	// FRD_MODEL_part_049
	this.instance_4 = new lib.FRD_MODEL_part_044("single",0);
	this.instance_4.setTransform(502.4,433.9,1,1,0,0,0,80,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:1,x:503.8,y:436.1},0).wait(1).to({rotation:1.8,x:504.7,y:438.9},0).wait(1).to({regY:32.3,rotation:3.6,x:504.5,y:445.7},0).wait(1).to({x:504,y:448.7},0).wait(2).to({regY:32.2,rotation:5.4,x:507.3,y:448.8},0).wait(2).to({rotation:7.7,x:511.5,y:442.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,skewX:11.4,skewY:10.6,x:514.8,y:423.9},0).wait(1).to({regX:80.1,regY:32.3,scaleX:0.99,scaleY:1.01,skewX:13,skewY:11.5,x:519.1,y:415.9},0).wait(1).to({x:519.3,y:414.7},0).wait(2).to({x:519.5,y:413.5},0).wait(3).to({x:519.3,y:414.7},0).wait(2).to({x:519.1,y:415.9},0).wait(5).to({x:518.9,y:417.1},0).wait(2).to({skewX:10.2,skewY:8.8,x:517.6,y:427},0).wait(1).to({x:518.6,y:433.6},0).wait(1).to({regX:80.2,skewX:8.9,skewY:7.5,x:518.1,y:434.1},0).wait(2).to({skewX:7.7,skewY:6.3,x:517.8,y:433.4},0).wait(2).to({skewX:5.6,skewY:4.2,x:513.4,y:431.5},0).wait(2).to({regY:32.4,scaleY:1.01,skewX:4.4,skewY:3,x:512.3,y:428.4},0).wait(2).to({regX:80.1,skewX:3.9,skewY:2.5,x:510.2,y:416.8},0).wait(1).to({regX:80.2,scaleX:0.97,skewX:2.8,skewY:1.5,x:508,y:413},0).wait(2).to({x:507.6,y:411.7},0).wait(2).to({x:507.5,y:412.3},0).wait(2).to({x:507.4,y:412.9},0).wait(13).to({skewX:3.1,skewY:1.8,x:507.3,y:415.7},0).wait(2).to({regY:32.3,skewX:3,skewY:1.7,x:506.7,y:418.6},0).wait(2).to({regX:80,regY:32.2,scaleX:1,scaleY:1,skewX:0,skewY:0,x:503.4,y:431.6},0).wait(1).to({x:502.4,y:433.9},0).wait(1).to({x:502.2,y:435.1},0).wait(1).to({x:502.1,y:435.7},0).wait(3).to({x:502.3,y:434.5},0).wait(2).to({x:502.4,y:433.9},0).wait(1));

	// FRD_MODEL_part_049
	this.instance_5 = new lib.FRD_MODEL_part_045("single",0);
	this.instance_5.setTransform(500.1,431.2,1,1,0,0,0,141.7,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regY:21.6,rotation:1,x:501.5,y:433.3},0).wait(1).to({regY:21.7,rotation:1.8,x:502.4,y:436.1},0).wait(1).to({regY:21.8,rotation:3.6,y:442.8},0).wait(1).to({x:501.9,y:445.8},0).wait(2).to({regX:141.5,rotation:5.4,x:505.1},0).wait(2).to({regX:141.6,rotation:7.7,x:509.6,y:439.7},0).wait(2).to({regY:21.7,scaleX:1,scaleY:1,rotation:0,skewX:11.4,skewY:10.6,x:513.1,y:420.8},0).wait(1).to({regY:21.8,scaleX:0.99,scaleY:1.01,skewX:13,skewY:11.5,x:517.4,y:412.6},0).wait(1).to({x:517.6,y:411.4},0).wait(2).to({x:517.8,y:410.2},0).wait(3).to({x:517.6,y:411.4},0).wait(2).to({x:517.4,y:412.6},0).wait(5).to({x:517.2,y:413.8},0).wait(2).to({skewX:10.2,skewY:8.8,x:515.7,y:423.9},0).wait(1).to({x:516.7,y:430.4},0).wait(1).to({skewX:8.9,skewY:7.5,x:516.1,y:431},0).wait(2).to({skewX:7.7,skewY:6.3,x:515.7,y:430.3},0).wait(2).to({regY:21.9,skewX:5.6,skewY:4.2,x:511.2,y:428.5},0).wait(2).to({scaleY:1.01,skewX:4.4,skewY:3,x:510.1,y:425.4},0).wait(2).to({skewX:3.9,skewY:2.5,x:508.1,y:413.9},0).wait(1).to({regX:141.7,regY:21.8,skewX:2.8,skewY:1.4,x:508.4,y:412.5},0).wait(2).to({x:508,y:411.2},0).wait(2).to({x:507.9,y:411.8},0).wait(2).to({x:507.8,y:412.4},0).wait(13).to({regY:21.9,skewX:3.1,skewY:1.7,x:507.6,y:415.3},0).wait(2).to({x:507.2,y:418.4},0).wait(2).to({regY:21.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:501.1,y:428.9},0).wait(1).to({x:500.1,y:431.2},0).wait(1).to({x:499.9,y:432.4},0).wait(1).to({x:499.8,y:433},0).wait(3).to({x:500,y:431.8},0).wait(2).to({x:500.1,y:431.2},0).wait(1));

	// FRD_MODEL_part_062
	this.instance_6 = new lib.FRD_MODEL_part_043("single",0);
	this.instance_6.setTransform(505,599.9,1,1,0,0,0,156.5,187.7);

	this.instance_7 = new lib.FRD_MODEL_part_041("single",24);
	this.instance_7.setTransform(437.6,408.3,0.994,1.015,0,10.2,8.8,127.7,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{rotation:0,x:505,y:599.9,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]}).to({state:[{t:this.instance_6,p:{rotation:1,x:503.3,y:602.1,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:1.8,x:502,y:604.8,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:3.6,x:496.6,y:611.3,regX:156.4,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:3.6,x:496.1,y:614.3,regX:156.4,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:5.4,x:494.1,y:614.1,regX:156.4,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},2).to({state:[{t:this.instance_6,p:{rotation:7.7,x:491.9,y:607.4,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:484.3,y:587.4,regX:156.5,scaleX:0.997,scaleY:1.002,skewX:11.4,skewY:10.6,regY:187.7}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:483.7,y:580.5,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regY:187.8}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:483.9,y:579.3,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regY:187.8}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:484.1,y:578.1,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:483.9,y:579.3,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regY:187.8}}]},3).to({state:[{t:this.instance_6,p:{rotation:0,x:483.7,y:580.5,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:483.5,y:581.7,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regY:187.8}}]},5).to({state:[{t:this.instance_6,p:{rotation:0,x:490.1,y:593.2,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:10.2,skewY:8.8,regY:187.8}},{t:this.instance_7}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:491.1,y:599.8,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:10.2,skewY:8.8,regY:187.8}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:494.3,y:600.8,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:8.9,skewY:7.5,regY:187.8}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:497.7,y:600.6,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:7.7,skewY:6.3,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:499.2,y:599.3,regX:156.6,scaleX:0.994,scaleY:1.015,skewX:5.6,skewY:4.2,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:501.8,y:596.4,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:4.4,skewY:3,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:501.3,y:584.8,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:3.9,skewY:2.5,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:504.7,y:583.6,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regY:187.8}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:504.3,y:582.3,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:504.2,y:582.9,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:504.1,y:583.5,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:503,y:586.3,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:3.1,skewY:1.7,regY:187.8}}]},13).to({state:[{t:this.instance_6,p:{rotation:0,x:502.6,y:589.4,regX:156.6,scaleX:0.994,scaleY:1.014,skewX:3.1,skewY:1.7,regY:187.8}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:506,y:597.6,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:505,y:599.9,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:504.8,y:601.1,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:504.7,y:601.7,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},1).to({state:[{t:this.instance_6,p:{rotation:0,x:504.9,y:600.5,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},3).to({state:[{t:this.instance_6,p:{rotation:0,x:505,y:599.9,regX:156.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:187.7}}]},2).wait(1));

	// FRD_MODEL_part_064
	this.instance_8 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_8.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({skewX:1,skewY:181.1,x:589.8,y:433},0).wait(1).to({skewX:1.8,skewY:181.9,x:590.8,y:436.1},0).wait(1).to({skewX:3.6,skewY:183.7,x:591,y:442.1},0).wait(1).to({x:590.7,y:443.7},0).wait(2).to({regX:124.9,scaleX:1,scaleY:1,skewX:9.9,skewY:190,x:593.4,y:453.3,startPosition:15},0).wait(2).to({regX:125,regY:9.6,scaleX:1,scaleY:1,skewX:7.7,skewY:187.8,x:596.8,y:452.3,startPosition:16},0).wait(2).to({scaleX:1,scaleY:1,skewX:11.4,skewY:190.7,x:599.2,y:436.2,startPosition:17},0).wait(1).to({regY:9.5,scaleX:1.01,scaleY:1.02,skewX:21.8,skewY:195.6,x:602.2,y:429.4,startPosition:3},0).wait(1).to({scaleX:0.99,scaleY:1.02,skewX:15.7,skewY:192.9,x:602.6,y:426.6},0).wait(2).to({regY:9.6,scaleX:0.99,scaleY:1.01,skewX:13,skewY:191.6,x:602.8,y:424.9},0).wait(3).to({x:602.5,y:427.7},0).wait(2).to({x:602.1,y:430.1},0).wait(5).to({regX:125.1,regY:9.5,scaleX:0.98,scaleY:1.02,x:602.2,y:431.6,startPosition:18},0).wait(2).to({regX:125,regY:9.7,scaleX:1.06,scaleY:1.14,skewX:-2.9,skewY:176.1,x:608.4,y:433,startPosition:9},0).wait(1).to({scaleX:0.99,scaleY:1.01,skewY:175.5,x:606.2,y:441.2,startPosition:19},0).wait(1).to({scaleX:1.07,scaleY:1.01,skewX:-2.3,skewY:174.2,x:605.8,y:439.6,startPosition:20},0).wait(2).to({scaleX:0.99,scaleY:1.01,skewX:-5.5,skewY:172.9,x:605.5,y:437,startPosition:11},0).wait(2).to({regY:9.8,skewX:-10,skewY:168.4,x:602.2,y:429.8},0).wait(2).to({regX:124.9,regY:9.6,scaleX:1,scaleY:1.01,skewX:-6.1,skewY:177.9,x:600.1,y:426.7},0).wait(2).to({regX:125,scaleX:0.99,scaleY:1.01,skewX:-3,skewY:175.4,x:596.7,y:412.9,startPosition:21},0).wait(1).to({scaleX:0.99,skewX:2.8,skewY:181.5,x:591.7,y:414.3,startPosition:22},0).wait(2).to({skewX:2.8,x:591.3,y:413,startPosition:23},0).wait(2).to({x:591.2,y:413.6,startPosition:13},0).wait(2).to({regX:125.1,scaleX:0.99,skewX:2.4,skewY:181.1,x:591.1,y:414.2},0).wait(13).to({regX:125,scaleX:0.99,skewX:3.1,skewY:181.8,x:590.8,y:417.5,startPosition:31},0).wait(2).to({regY:9.7,x:590.3,y:420.5,startPosition:32},0).wait(2).to({regY:9.5,scaleX:1,scaleY:1.12,skewX:-3,skewY:184.7,x:589.3,y:427,startPosition:2},0).wait(1).to({regY:9.6,scaleX:1,scaleY:1.04,skewX:-1.6,skewY:181.8,x:588.3,y:429.4},0).wait(1).to({regY:9.5,scaleX:1,scaleY:1,skewX:0,skewY:180,x:588.1,y:430.5},0).wait(1).to({x:588,y:431.1},0).wait(3).to({x:588.2,y:429.9},0).wait(2).to({x:588.3,y:429.3},0).wait(1));

	// Layer 12
	this.instance_9 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_9.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgSAMQgDgGAAgFQAAgXAVABQAWABAAAUQAAAIgGAHQgHAHgLAAQgLAAgFgKg");
	this.shape_1.setTransform(444.8,456.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgSAMQgDgGAAgFQAAgXAVABQAWAAAAAVQAAAHgGAHQgGAHgLABIgBAAQgLAAgFgKg");
	this.shape_2.setTransform(445.9,464.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AgSANQgCgGgBgGQgBgWAWAAQAVAAABAVQABAHgGAGQgHAIgKABIgDAAQgJAAgGgJg");
	this.shape_3.setTransform(446.2,465.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgRANQgDgGgBgFQgCgXAXAAQAUgBACAVQABAHgGAGQgGAJgLABIgCAAQgKAAgFgJg");
	this.shape_4.setTransform(443,466.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AgRAOQgDgGgBgGQgCgWAWgBQAVgCACAWQABAGgGAHQgFAIgMACIgCAAQgJAAgGgIg");
	this.shape_5.setTransform(442.7,464.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:418.1,y:426.6,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]}).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:1,x:419.6,y:427.2,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:1.8,x:420.7,y:428,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:3.6,x:421.4,y:428.7,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:3.6,x:421.1,y:430.4,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:5.4,x:424.1,y:433.4,startPosition:15,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:7.7,x:429,y:424.1,startPosition:16,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},2).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:434.9,y:402,startPosition:17,scaleX:0.997,scaleY:1.002,skewX:11.4,skewY:10.6,regX:127.8}}]},2).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:439.2,y:393,startPosition:3,scaleX:1.02,scaleY:1.012,skewX:7,skewY:6.2,regX:127.7}}]},1).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:441.5,y:390.2,startPosition:3,scaleX:0.994,scaleY:1.016,skewX:9.2,skewY:10.6,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:441.9,y:388.4,startPosition:3,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regX:127.8}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:440.9,y:391.2,startPosition:3,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regX:127.8}}]},3).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:440.5,y:393.6,startPosition:3,scaleX:0.994,scaleY:1.015,skewX:13,skewY:11.5,regX:127.8}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:440.5,y:395.5,startPosition:3,scaleX:0.966,scaleY:1.056,skewX:16.8,skewY:9.9,regX:127.7}}]},5).to({state:[{t:this.shape_1,p:{x:444.8,y:456.2}},{t:this.instance_9,p:{regY:6.7,rotation:0,x:437.6,y:408.3,startPosition:24,scaleX:0.994,scaleY:1.015,skewX:10.2,skewY:8.8,regX:127.7}}]},2).to({state:[{t:this.shape_1,p:{x:445.8,y:462.8}},{t:this.instance_9,p:{regY:6.7,rotation:0,x:438.6,y:414.8,startPosition:8,scaleX:0.994,scaleY:1.015,skewX:10.2,skewY:8.8,regX:127.7}}]},1).to({state:[{t:this.shape_2},{t:this.instance_9,p:{regY:6.7,rotation:0,x:437.7,y:417,startPosition:25,scaleX:0.994,scaleY:1.015,skewX:8.9,skewY:7.5,regX:127.7}}]},1).to({state:[{t:this.shape_3},{t:this.instance_9,p:{regY:6.8,rotation:0,x:436.8,y:418.2,startPosition:10,scaleX:0.964,scaleY:1.027,skewX:11.8,skewY:10.2,regX:127.5}}]},2).to({state:[{t:this.shape_4},{t:this.instance_9,p:{regY:6.7,rotation:0,x:432,y:419,startPosition:10,scaleX:0.994,scaleY:1.015,skewX:5.6,skewY:4.2,regX:127.6}}]},2).to({state:[{t:this.shape_5},{t:this.instance_9,p:{regY:6.8,rotation:0,x:430.7,y:418.1,startPosition:10,scaleX:1.048,scaleY:1.009,skewX:1.9,skewY:7.2,regX:127.5}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:428.8,y:406.9,startPosition:26,scaleX:0.994,scaleY:1.014,skewX:3.9,skewY:2.5,regX:127.7}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:428.9,y:407,startPosition:28,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regX:127.7}}]},1).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:428.5,y:405.7,startPosition:27,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regX:127.7}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:428.4,y:406.3,startPosition:14,scaleX:0.994,scaleY:1.014,skewX:2.8,skewY:1.4,regX:127.7}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:428.4,y:406.9,startPosition:14,scaleX:0.994,scaleY:1.014,skewX:1.8,skewY:0.4,regX:127.7}}]},2).to({state:[{t:this.instance_9,p:{regY:6.7,rotation:0,x:428.2,y:409.3,startPosition:29,scaleX:0.994,scaleY:1.014,skewX:3.1,skewY:1.7,regX:127.7}}]},13).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:427.7,y:412.5,startPosition:30,scaleX:0.994,scaleY:1.014,skewX:3.1,skewY:1.7,regX:127.7}}]},2).to({state:[{t:this.instance_9,p:{regY:6.6,rotation:0,x:419.3,y:424,startPosition:2,scaleX:0.949,scaleY:0.99,skewX:-11.5,skewY:-15.6,regX:128}}]},2).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:418.1,y:426.6,startPosition:2,scaleX:1.005,scaleY:0.996,skewX:-3.3,skewY:-5.5,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:418,y:427.8,startPosition:2,scaleX:1.001,scaleY:0.999,skewX:-2,skewY:-2.2,regX:127.9}}]},1).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:417.8,y:428.4,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},1).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:418,y:427.2,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},3).to({state:[{t:this.instance_9,p:{regY:6.8,rotation:0,x:418.1,y:426.6,startPosition:2,scaleX:1,scaleY:1,skewX:0,skewY:0,regX:127.8}}]},2).wait(1));

	// FIZ_34BACK_part_017
	this.instance_10 = new lib.Freddy_Headclip_Whatever("synched",0);
	this.instance_10.setTransform(495,295.9,1,1,0,0,0,494.9,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(1).to({rotation:1,x:498.7,y:298.6,startPosition:1},0).wait(1).to({regX:503.4,regY:426.1,rotation:2.1,x:505.1,y:432.6,startPosition:2},0).wait(1).to({regY:426.2,scaleX:1,scaleY:1,rotation:4.8,x:503.5,y:442.6,startPosition:3},0).wait(1).to({x:502.9,y:446.2,startPosition:4},0).wait(2).to({rotation:7.7,x:506.7,startPosition:6},0).wait(2).to({rotation:9.5,x:512.6,y:436.9,startPosition:8},0).wait(2).to({regY:426.1,rotation:10.5,x:519.3,y:413.6,startPosition:10},0).wait(1).to({regY:426.2,scaleX:1,scaleY:1,rotation:9.8,x:524,y:403.5,startPosition:11},0).wait(1).to({x:524.5,y:402.7,startPosition:12},0).wait(2).to({x:524.1,y:403.8,startPosition:14},0).wait(3).to({x:524,y:403.5,startPosition:17},0).wait(2).to({x:523.4,y:403.4,startPosition:19},0).wait(5).to({x:522.9,y:406.4,startPosition:24},0).wait(2).to({regY:426.1,rotation:8.1,x:523.1,y:416.1,startPosition:26},0).wait(1).to({regY:425.9,rotation:6.8,x:523.8,y:424.3,startPosition:27},0).wait(1).to({regY:426.1,rotation:5.5,x:522.9,y:426.6,startPosition:28},0).wait(2).to({rotation:4.3,x:521.8,y:425.7,startPosition:30},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.2,x:517.6,y:425,startPosition:32},0).wait(2).to({rotation:1,x:516.2,y:418.7,startPosition:34},0).wait(2).to({regX:503.6,regY:426.2,rotation:-0.9,x:515,y:399.7,startPosition:36},0).wait(1).to({rotation:-3,x:514.2,y:392.6,startPosition:37},0).wait(2).to({x:514.6,y:390.2,startPosition:39},0).wait(2).to({x:514.4,y:391.4,startPosition:41},0).wait(2).to({x:514.2,y:392.6,startPosition:43},0).wait(13).to({rotation:-1.1,x:513.3,y:396.6,startPosition:56},0).wait(2).to({rotation:-0.7,x:511.3,y:401.1,startPosition:58},0).wait(2).to({regX:494.8,regY:296.2,scaleX:1,scaleY:1,rotation:0.2,x:496,y:289.3,startPosition:60},0).wait(1).to({regX:494.9,rotation:0,x:495,y:295.9,startPosition:61},0).wait(1).to({x:494.6,y:298.3,startPosition:62},0).wait(1).to({x:494.4,y:299.5,startPosition:63},0).wait(3).to({x:494.8,y:297.1,startPosition:66},0).wait(2).to({x:495,y:295.9,startPosition:68},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.5,149.9,360.6,486.6);


(lib.Freddy_Masterclip_SomePeople = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_34BACK_part_017
	this.instance = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(220));

	// FRD_MODEL_part_064
	this.instance_1 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_1.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(215).to({regX:127.8,regY:6.8,skewY:0,x:418.3,y:425.4,_off:false},0).wait(2).to({x:418.1,y:426.6},0).wait(3));

	// Layer 96
	this.instance_2 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_2.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD8C9").s().p("Ag1BmIgNgtQgCgOgDgGQgBgBAAgBQgBAAAAAAQgBAAAAgBQgBAAAAABQgBgBAAAAQgBAAAAABQgBAAAAAAQAAABgBAAIgDAKQAAAIgCAEIgLgIIAAAAIgDgDQgJgKAAgMIABgDIAAgBQgBgKABgNQAEgTAHgUIAAgBIgBgCIgCAAIgFAAIgCAAIAAABIgBgBQgIADgEAJIgHgHIgJgLQgHgKAHgKQALgRAhgTQBEgoBDAWQBEAUANAXIAAAAQAOAYgCAcQgBAdgHATIAAAAQgGATgOASQgfAZgZADIAAAAIgCAAIAAABIgjAQIgBABIgBABIABACIABABQAEADAEAAIAQgBQgCAMgIAEIAAABQgMAFgIABIAAAAIgBAAIgIACQgugIgJgXg");
	this.shape.setTransform(613.7,473.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABCbQhDgKgJglIgIgaIgGgCQgHgCgKgIQgegXAIgiIADgIIAAgCIABgPIgJgEIAAgBQgJgHgKgMQgRgWAQgaQANgUAngWQBMgtBNAYQBRAYAOAfQARAegDAhQgBAfgHAYQgIAXgSAWIgBACIgBAAQggAagbAGQgDAegUAJIgBABQgSAHgJABIgKADIgBAAIgDgBgAhHAkQADAGACAOIANAtQAJAYAvAIIAIgCIAAgBIABAAQAHAAANgGIAAAAQAIgFACgMIgQABQgFABgDgDIgBgCIgBgBIAAgCIABAAIAjgRIABAAIABAAIABgBQAZgCAegZQAOgSAHgTIAAgBQAHgSABgeQABgbgNgYIgBgBQgNgWhEgVQhCgVhEAnQgiATgKARQgIALAIAJIAJALIAHAHQAEgJAHgCIABAAIABAAIABAAIAFAAIACAAIABABIAAACQgHATgDAUQgCAMABAKIABABIgCAEQABALAJALIADADIgBAAIAMAIQABgEABgIIADgKQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIABAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAg");
	this.shape_1.setTransform(613.7,473.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgOCbIgJgDQgJgBgRgJIgBAAQgUgKgCgeQgbgHgfgcIAAAAIgCgBQgQgXgHgYQgHgWABghQAAgiARgdQAQgdBSgVQBNgVBLAxQAmAXALAVQAPAbgSAVQgKAMgJAHIgBAAIgIAEIgBAPIABACIACAHQAHAjggAWQgKAIgHACIgGABIgKAZQgLAmhDAHIgEgBgAgnB6IAAABQANAGAHABIAAAAIACAAIAHACQAvgFAKgXQALgfAEgOQADgOADgFQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABABIACAJIABANIAMgIIAAABIADgEQAJgKABgLIgBgEIAAgBQACgKgBgOQgCgSgGgUIAAgCIAAgBIACAAIAGAAIABABIABAAIABAAQAHADAEAJIAHgHIAKgKQAHgKgHgLQgJgRghgVQhCgqhEATQhEARgPAWIAAAAQgPAYABAbQgBAeAGASIAAABQAGATANATQAdAaAZAEIABAAIAAAAIABAAIAAABIAjASIAAABIABABIgBACIAAABQgEADgFgBIgQgCQACAMAHAFg");
	this.shape_2.setTransform(386.6,468.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD8C9").s().p("AgRCDIgBAAIgBgBQgGgBgNgGIAAAAQgIgFgBgMIAPACQAFAAAEgDIABgBIAAgBIAAgCIgBgBIgigSIgBAAIAAgBIgBABIgBgBQgYgEgegaQgNgTgFgTIAAAAQgGgTAAgdQAAgcAOgXIABgBQAOgWBEgRQBEgSBDAqQAgAVAKARQAGALgHAJIgJALIgHAGQgFgJgHgDIgBAAIgBAAIgBAAIgFgBIgCAAIgBACIAAACQAGATACASQACAPgCAKIAAABIABAEQgBALgJAKIgEADIAAAAIgLAHIgCgMIgCgKQAAgBgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABQgEAFgDAPQgDAOgMAeQgKAXgvAGg");
	this.shape_3.setTransform(386.6,468.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#91AFC2").s().p("ATpAnQgRgngUgmIBWgeQAdAaAUAhQAQAcAFAgIADAgIhcAsQgMgtgSgrgA1iAVQACgQADgOQAGggASgcQAVghAegYIBVAhQgWAmgTAnQgUApgOAsg");
	this.shape_4.setTransform(500,464.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF7F").s().p("AV0DnIgEgTQgVhAgtgwQBugqBmg6IBAAFQgZgKgdgLIgZgIIg1gMIhwgQIhvgNIARiJQCiAQCfAqIA9ARQARADALAOQATAaAMAdQARAmgNAnQgEANgHANQgHANgJAMQgKAOgMANIgXAVIgMAKQhuBEh0AzIgDgTgA5eA5IgMgLIgWgWQgLgMgKgMQgIgNgHgOQgGgMgDgOQgLgpASgmQAOgdAUgYQALgOARgDIA+gOQBngWBpgLIgSCLIhQAIIg1AKQgOACgMAFQgdAIgaALIBAgBQBkA+BsAuQgvAugYA+QgDAJgCAKIgEATQhyg5hqhJg");
	this.shape_5.setTransform(500.7,446.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ATrEnQgMhGgghAQgPgdgUgYIAFgPQBiggBcgoQBAgZA+gfQhsgVhugKIgngEIADgZIBvAOIBwAQIA1AMIAZAIQAdAKAZAMIhAgEQhmA4huAqQAtAwAVA/IAEAUIADATQB0g0BuhEIAMgKIAXgUQAMgNAKgOQAJgMAHgOQAHgMAEgLQANgpgRgnQgMgcgTgaQgLgOgRgEIg9gQQifgqiigRIADgXIAdADQBOALBNAPQBHALBGASQAhAIAeAQQAbANAWAVQAKAKAHANQASAogDAuQgGBAgvAtQg+A7hMAnQhNAnhLAjIhuA0gAS+BuQATAnARAoQATAsALAtIBdgtIgEggQgFgggQgdQgTgigdgagA19C8QhKgmhLgrQhKgrg7g+QgtgtgDhBQgBgvAUgnQAHgMALgJQAXgVAbgMQAfgPAhgGQBHgOBHgJIBLgKIgDAXQhpAMhnAWIg+AOQgRADgLANQgUAZgOAdQgSAmALApQADAOAGAMQAHAOAIANQAKAOALAMIAWAUIAMALQBqBJByA5IAEgUQACgJADgJQAYg+AvgvQhsgthkg/IhAACQAagLAdgJQAMgEAOgDIA1gKIBQgIIgDAXIAKABQg8AFg7AJQA8AiA/AdQBaArBhAkIAEAPQgVAWgQAeQgjA9gPBFIgZAHIhrg4gA1LBPQgSAcgGAhQgEAPgCAQIBbAwQANgsAVgqQATgnAVgnIhVghQgeAYgUAhg");
	this.shape_6.setTransform(500.7,449.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFD8C9").s().p("ANZC5QhSgFgxhAQgMgOAFgRQAGgQANgMQAYgWAegFQAQgEALALQAeAeghAWQgZAQgZAOQAJAIANgEIAagHQAXgIALgSQAWABAQgQQAHgGAFgKIACgDQAQAFARgMQAQgKAIgQQASgegVgfQgagngogaQgDgCgFgBQAMAUASAZQATAbAKAeQAEAOgPAJIgVANQg/gfgZhAQgLgdAUgXQATgWAbAKQAZAHARATQAbAdAWAfQAyA9giBIQgVAtgoAeQgZASgfAAIgHAAgAtrCBQgjgCgagYQgkgigPgwQgYhJA4g5QAbgbAegZQAUgRAYgEQAdgHAQAYQARAZgPAbQghA/hBAXIgVgQQgNgLAHgOQAMgeAXgXQAVgWAOgTIgJACQgqAUgfAkQgYAcANAjQAGAPAQANQAPANARgDIABADQAEAJAFAHQAOATAXABQAJATAVALIAZALQANAGAKgHQgYgRgWgTQgegbAggXQAOgKAOAFQAdAKAWAWQALANADASQADAQgMAOQg1AzhJAAIgNAAgANaA+QgDgkgigTQgZgKgYAJQgbgZgIgjQgBgGABgGQAMgvAvgBQgPAlARAiQAaA0AyAiIABAHIgPANgAK+AfIAAgBQgdghABgtQAAgJAGgFIAYgRIALgHIgDAXQgHAaASAYIAbAfIgiAcgArtgWIAfgdQAWgVgEgbIAAgWQAFACAFAFIAVAVQAGAFgBAJQgGAtghAfIAAAAIgQALgAtgAHIgNgLIACgIQA2gcAhgxQAVghgLgmQAwAIAFAvQABAGgCAGQgMAhgfAYQgWgOgaAKQglAOgIAig");
	this.shape_7.setTransform(501.2,414.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#91AFC2").s().p("AN9BYQBGgTAmhAQAOgXAGgdQAEgRABgRIBnA+QABBQg4A9QgTAUgYAQgAxBAnQgwhBAMhRIBtgyQAAASABARQACAdAMAbQAdBCBEAcIiTA0QgWgSgQgXg");
	this.shape_8.setTransform(500.7,426.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF7F").s().p("AP+AtQBbhBAHhvQAiAUAjAXQA3AmA2AnQBXA9BQBHQAeAaAYAfIjYgbIgKBJQiBhiiOhRgA1ngXIiHgRQBFgtBJgpQA5gfA9gfIBJgjQgHBvBSBOQiWA9iMBQg");
	this.shape_9.setTransform(504.1,439.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ARHDeQgXgPgZgOIgwgcIgKgFQhFgphMghIhHgfQgFgCgCACIgTgIQgcgLgZgXIgMgMIgJgLIgDgIQgNgcAPgdQgKgIgIgLQgXgdgJgiQgFgSAEgUQACgJAFgJIAHgIIAAgBQAaggArgCIAQgMQAKgFALgDIALgDIAHAAIAHgBQALgDAJACIAPgKQAUgKAXAFQAaAFASARIAaAYIANAPIAPARQAeAkAPAsQAkAYAmAWQBBAmBBArIB2BPQA/AuA8AyQA5AwAxA0QAKAKAIAMIglgEQgYgggegaQhQhHhXg/Qg2gmg3gmQgjgVgigVQgHBthbBDQCOBRCBBiIgDAaQhehGhlg9gAPchGQgGAdgPAYQglA/hHATICLBGQAYgQATgVQA4g8gChQIhmg/QgCARgDASgAL7huQgeAFgYAWQgNAMgGAQQgFARAMAOQAxA+BSAFQAjACAcgUQAogcAVgtQAihIgyg/QgWgfgbgdQgRgTgZgHQgbgKgTAWQgUAXALAdQAZBCA/AfIAVgNQAPgJgEgQQgKgegTgbQgSgZgMgUQAFABADACQAoAaAaAnQAVAfgSAgQgIAQgQAKQgRAMgQgFIgCADQgFAKgHAGQgQAQgWgBQgLASgXAIIgaAHQgNAEgJgIQAZgOAZgQQAhgWgegeQgIgIgLAAIgIABgAMYiFQAiATADAkIACABIAPgNIgBgHQgygigag2QgRgiAPglQgvABgMAvQgBAGABAGQAIAjAbAbQALgGAMAAQANAAANAHgAKjjdIgYARQgGAFAAAJQgBAtAdAjIAAABIAOAPIAigcIgbghQgSgYAHgaIADgXIgLAHgA14DTQCNhRCVg+QhShMAHhvIhJAiQg9Afg5AgQhJAmhFAtIglgFIAkgXQBDgpBDglQA/gjBAggQBGgiBGgeQAogRAngTQATgpAjggIARgPIAQgOIAcgVQAUgOAagDQAXgCATAOIANALQAKgBAKAEIAHACIAIABQAFABAFAEQAKADAJAHQAIAHAHAIQArAGAVAkIABAAIAFAKQAEAIABAKQABAUgHARQgNAhgaAaQgKAJgKAHQAKAggPAaIgFAHIgKAMIgOALQgbASgeAHIgTAFQgDgCgFACIhKAVQhQAXhIAgIgLAFQgaAJgaALIgyAXQhuAxhnA7gAyHiDQgLBRAwBCQAQAXAWASICSg0QhDgagehEQgLgbgCgdQgCgRABgSgAtzlEQgYAEgUARQgeAZgbAbQg4A5AYBLQAPAwAkAiQAaAYAjACQBRAFA6g4QAMgOgDgQQgDgSgLgNQgWgYgdgKQgOgFgOAKQggAZAeAbQAWATAYARQgKAHgNgGIgZgLQgVgLgJgTQgXgBgOgTQgFgHgEgJIgBgFQgRADgPgNQgQgNgGgPQgNgjAYgcQAfgkAqgUIAJgCQgOATgVAWQgXAXgMAeQgHAOANALIAVAQQBBgXAhg/QAPgbgRgZQgNgTgUAAIgMACgArZjxQAEAbgWAVIgfAdIAeAgIAQgNIAAAAQAhgfAGgtQABgJgGgFIgVgVQgFgFgFgCgAsxjnQghAxg2AcIgCAIIANANIACABQAIgkAlgOQAagKAWAOQAfgYAMghQACgGgBgGQgFgvgwgIQALAmgVAhg");
	this.shape_10.setTransform(504.1,428.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#91AFC2").s().p("ATOIvQBNhDA+hFIACgDQBEh9AnheIADAOQAGCAhSByQgPAVgpAwQgTAWgFAMIgfAAIhAgBgA2eioQAAgMgJgcQgSg9gFgaQgdiKA6hyIAJgMQgDBmALCOIABADQAcBaAsBdIhXgng");
	this.shape_11.setTransform(524.9,497.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF7F").s().p("AWWJhQAyhDASgrQARgmAIg7QAHg1gCgwQgBgagTghQAchMAEgyIADgCIAAgBQB8BxApBTQArBbgpCNQggBmkeAMQARgSAVgcgA7AlLQAUiRBMhBQBIg8Cfg1IAAAAIABADQgQAwgFBRQgfAXgMAXQgVArgPA1QgQA4gBApQAAAvASBSQAIAiAHAYQkBiAANhrg");
	this.shape_12.setTransform(524.1,488.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD8C9").s().p("AJ1MHQirhrABhXQAHhXD2h8QEGiFBwhyQBvhxBThaQAjgoAegCQAcAAAaAjQAVAcANAiQgBAAAAABQAAAAAAABQgBAAAAABQAAABAAAAQAAAHAGAFIACAEQAKAgAAAoIAAACQAAARgCATQgEAngSA4QgKgHACAZIAAAFQgnBqhXChQhJBThfBOIgBABQg3Asg+AsQh0BRhqAAQhQAAhKgugAz+BwQgnhBggg9IgBgBQg3hugihqQgOi2AIhyIACgEQAMgXgMADQAGg7AMglQAGgSAHgQIABgCQAQgkAXgcIAEgCQAHgDACgGQACgCgBgDQAagZAfgSQAlgVAaALQAaAPARAyQAlB3A5CUQA4CWC6DkQCwDUgdBTQgjBQjIAdQgWADgWAAQisAAhzi9g");
	this.shape_13.setTransform(529.9,488.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AKdMlQjCh5AHhoQABhpEQiJQC3hdBshSIAKgHIABgCQAkgcAagbQBvhuBShcIAMgNIgwglIBEAJIAGAFIABABQAbgTAYAAQAtgDAmA0IAAgBQAeAoAPAxIAAAAIAAABIAAACQAMAjAAAqQCXCDAuBgIAAABQAyBkgtCbQgpCgn5gVQg2Asg9ArQh+BXh0ABQhZAAhTg0gAV7h6QgeACgjAoQhSBahwBxQhvBykGCFQj3B8gHBXQAABXCqBrQCtBqDLiNQA+gsA4gsIAAgBQBfhOBKhTQBWihAnhqIAAgFQgBgZAJAHQATg4AEgnQACgTgBgRIAAgCQABgogLggIgCgEQgFgFAAgHQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQgMgigWgcQgZgjgcAAIgBAAgAVjH9IgBADQg/BGhNBDIBfAAQAGgLATgWQAogwAQgVQBRhzgGh/IgDgOQgmBdhFB9gAYEBsIAAABQgEAygcBMQATAhABAaQACAwgHA1QgIA7gRAmQgSArgyBDQgVAcgRASQEegMAghmQApiNgrhbQgphTh8hxIgCgCIgBAEgAzhCDQgnhAgfg+QnYi4AcikQAWihBWhHIAAAAQBShGDAg7QARgmAagdIAAgBIABgBIABgBQAggmAsgZIAAABQA4ggAoAVQAWAKARAcIABgBQAygNAygLIAhgHIgFAmIgVAEIhcAWIAGAQQAlB2A4CTQANAkAVAoIACACIAFALQBBB3CCCgQDCDqgpBgQglBjjiAfQgaAEgaAAQi9AAh8jNgA1ooTIgDAEQgHByANC2QAjBqA3BuIAAABQAhA9AnBBQCBDUDKgaQDHgdAjhQQAehTixjUQi6jkg4iWQg4iUgmh3QgQgygagPQgbgLglAVQgfASgZAZQAAADgBACQgDAGgGADIgEACQgYAcgQAkIAAACQgIAQgGASQgMAlgGA7IACAAQAJAAgKAUgA2ZnJQg5ByAcCKQAGAaASA9QAIAbAAANIBXAmQgrhdgdhZIAAgEQgLiOAChlIgJAMgA15qVQifA1hIA8QhMBBgUCRQgNBrEBCAQgHgYgIgiQgShSAAgvQABgpAQg4QAPg1AVgrQAMgXAfgXQAFhRAQgwIAAAAIABgEIgCABg");
	this.shape_14.setTransform(524.1,488.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD8C9").s().p("AAtEWIgBgBQgNgDgJgXIAXgJQAGgDAEgJIAAgDIABgDIgCgCIgCgBIg2gHIgCAAIgBgBIAAABIgBAAQgkAMg3gZQgegagRggIgBgBQgTglgQg5QgQgyAHg6IAAgCQAHg2BUhZQBVheBxAcQA4ANAXAYQAPARgEAYIgIAdIgGASQgLgPgLABIgCACIgBgBIgBABIgIAEIgCABIgBAEIABADQAUAhAOAlQAKAbADAVIAAACIAEAGQAEAVgGAaIgDAKIgLAXQgEgGgGgRQgFgNgDgEQgEgDgDADQgCAAgBAHQgCANAEAeQACAeACBFQAAA1hAAzIgMACIgBAAIgBABQgHACgMAAIgLAAg");
	this.shape_15.setTransform(505.7,530);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgMEJQgpAJg6gbIAAgBIgDgCQgkgfgWgnQgXgqgShAQgThBAIhFQAFhGBkhsQBhhpB/AfQBCAOAbAgQAlAmgOA4QgIAggIAVIAAACIgKAOQAGAQADARIACADIAHAOQAdA7gfBEQgKAYgIAIIgIAIIABA6QAGBRhbBHQgCACgDABIgOADQgOAEgcgDIgBABQghgDgSg6gAgDDWIA2AHIACABIACACIgBADIAAAEQgEAJgGACIgXAKQAJAWANADIABABQAUACAKgEIABAAIABgBIAMgCQBAgzAAg1QgChFgCgdQgEgeACgNQABgHACgBQADgDAEAEQADADAFAOQAGARAEAGIALgYIADgJQAGgbgEgVIgEgGIAAgCQgDgUgKgcQgOglgUggIgBgEIABgDIACgCIAIgDIABgBIABAAIACgCQALAAALAPIAGgTIAIgdQAEgYgPgQQgXgYg4gOQhxgbhVBdQhUBagHA2IAAACQgHA5AQAzQAQA5ATAlIABAAQARAgAeAaQA3AaAkgMIABAAIAAgBIABAAIABAAIABAAg");
	this.shape_16.setTransform(505.8,529.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFD8C9").s().p("AiNEIIgBAAIgBgBIgLgFQgyhBAMgzQAShCAJgcQALgdACgNQABgGgDAAQgBgDgFACIgMANQgJAPgGAFIgFgaIAAgHQAAgcAJgUIAFgGIABgCQAIgTAQgYQAWggAbgcIACgDIAAgDIgCgCIgGgGIgCgBIgBABIgCgCQgKgEgOAMIgCgUIABgdQABgZASgMQAdgSA5AAQBzACA9BuQA8BrgGA1IAAAAQgHA6gcAvQgdAzgcAfIAAABQgaAbgiASQg5AMgggVIgBAAIAAgBIgCAAIgBAAIg5gHIgCABIgCACIAAADIAAAEQABAIAFAEIAVAPQgOAUgOAAIAAAAQgVgDgIgGg");
	this.shape_17.setTransform(539.5,543.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ah3FBIgBgBQgcgFgMgHIgNgHQgCAAgCgDQhIhbAahNQAKgkAEgUIgGgJQgGgLgDgYQgPhIAsg0IAKgMIACgCQAIgQAJgOIgGgRIAAgBQgDgWAAghQABg5ArgdQAigYBEABQCCABBFB+QBHCAgMBDQgJBGgiA6QggA6ggAjQggAhgpAWIgDABIgBAAQg8ANgmgSQgfAvgeAAIgFAAgAiZAAQACAAAAAGQgCANgLAcQgJAcgSBCQgMA0AxBBIALAEIABABIABABQAJAFAUAEIABgBQANAAAOgTIgUgPQgGgEgBgJIABgEIAAgDIACgBIACgBIA5AHIABAAIABAAIAAAAIABABQAhAUA5gMQAigSAZgbIABAAQAcgfAcgzQAcgwAHg5IAAAAQAGg1g8hrQg8hvh0gBQg5gBgcATQgTAMgBAYIAAAeIACATQAOgLAKADIACACIABAAIABABIAGAGIACACIAAADIgCADQgaAbgWAgQgRAZgIATIAAACIgGAFQgJAVAAAbIAAAHIAGAbQAFgFAJgQIAMgMIADgBQABAAABAAQAAAAAAAAQABABAAAAQAAABABAAg");
	this.shape_18.setTransform(539.4,543.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#91AFC2").s().p("ADdEaQgDgFgCgHQgLg/BIiyQAehIAWgdQAZghAHAnIABABQABAHgJAdQBWgMBOgQIAAAAQAAANAbAbIAAAAQAQAQACAFIACAGIAlBHQAFAogdBEIgKAZQiUAniYAXQgJAOgLACIgGABQgNAAgIgLgAkrBxQgLgFgFgQQiOg5iHhJIgEgaQgMhJAOgmIA2g9QACgCABgDQAEgHASgLIABAAQAggUAEgMIAAgBQBIAiBQAhQgBgeADgGIAAgBQAQglASAmQAOAhAMBQQAbC8gZA7QgEAGgFAFQgHAGgJAAQgGAAgGgDg");
	this.shape_19.setTransform(522.6,537);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AB5NUQgGgFgBgHQgBgHAEgGQAFgGAHgBIAMgBQAKAMARgDQALgBAJgPQCYgWCUgoIAKgYQAdhEgFgoIglhIIgCgFQgCgIgQgPIAAAAQgbgbAAgNIAAgBQhOAQhWAMQAJgdgBgGIgBgBQBMgLBFgOQAEgFAHgBQAFgBAFADQGPhaCTjUQBLhuADiLQACgJAAgMQABgSgIguIgHhhQgBghgDgfQgDgegHgQIAHghIAEACQAGADACAHQByFmidDgQiVDbmQBdIABACQACAFAOAQQAZAYADAQIAlBIQACABAAADQAJAxghBQQBQgXBOgcQDUhOCfiZIABAAQDnjggclGQgWkAi6htIAHgkQDUB0AYEaQAeFXj0DrQilCejbBRQhiAjhkAbIAAAAQi2Axi9AYIgCAAQgGAAgEgDgAlgKrQiyhDilhcIAAAAQhbgyhXg6QjCiDh7jBQi2kdBwlKQBbkNDqg+QgGAWgDASQjKBAhRDvQhqE5CtEPIAAAAQB2C7C8B/QBGAuBIApQgNhWAUgtIADgEIA1g9QAHgOAegSQARgMAEgFIABgCQlvi6hdj2QhikBDElDQACgEADgCIgNBmIgFAMQgHAGgGANQgEALgbBUQgSArgEASQgCAMAAAJQgfCKAvB9QBcDwFvC2QAGgBAEACQAGACADAGQBAAeBHAdIAAABQgDAGABAeQhQgghIgiIAAAAQgEANggAUIgBAAQgSALgEAHQgBADgCABIg2A9QgOAnAMBIIAEAbQCHBKCOA6QAFAQALAEQAQAHAMgKIAMAEQAGADAEAHQACAHgCAHQgDAGgGADIgHACQgEAAgDgCg");
	this.shape_20.setTransform(530.6,483.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF7F").s().p("AIsKIQAAgDgCgCIglhHQgDgQgZgYQgOgQgCgFIgBgDQGQhdCVjaQCdjghylmQgCgIgGgDIgEgBIAFgXQC6BtAWD/QAcFHjnDgIgBgBQifCZjUBOQhOAchQAXQAhhQgJgwgAtWGpQi8h/h2i7IAAABQitkQBqk5QBRjuDKhAIgBAJIgCAOQgDACgCAEQjEFCBiEBQBdD2FvC7IgBACQgEAFgRALQgeASgHAOIg1A9IgDAFQgUAtANBVQhIgphGgugAvAqKIgCAIIgDADIAFgLg");
	this.shape_21.setTransform(530.6,479.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFD8C9").s().p("AgkCtIgJgEIgBgBIgBAAQgIgDgQgKIAAgBQgJgIAAgQIAUAGQAFABAGgCIABgCIABgCIAAgCIgBgBIgpgfIAAAAIgCAAIAAAAIgBgBQgegKgigoQgOgbgEgXIgBgBQgEgdAFgmQADgkAVgbIABgBQAVgaBZgJQBYgKBOBEQAmAhALAYQAGAQgKALIgOAMIgKAHQgEgNgIgFIgCAAIgBgBIgBAAIgHgBIgCgBIgCACIAAACQAGAbgBAYQAAATgEANIAAABIABAFQgDAPgNALIgFADIABAAIgQAIQgBgGABgLIgCgNQgCgEgDABQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgFAGgGASQgGARgTAmQgPAagzAAIgKAAg");
	this.shape_22.setTransform(584.9,560);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgoDLIgFgBIgLgFQgLgEgVgOIgBgBQgYgRACgoQghgOgjgqIAAgBIgCgCQgSghgFgeQgFghAFgqQAEgsAagiQAYgkBqgLQBlgLBXBNQAuAmALAdQAQAmgaAYQgQAMgMAHIAAAAIgLADIgDAXIABACIABALQAEAugrAWQgOAIgIABIgJABIgPAfQgRAqhIAAIgRAAgAhICaIAAABQAQAKAIADIABAAIABABIAJAEQA8ACAQgcQATgmAGgRQAGgSAFgGQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADgBACAEIACANQgBALABAGIAQgIIgBAAIAFgDQANgLADgPIgBgFIAAgBQAEgNAAgTQABgYgGgbIAAgCIACgCIACABIAHABIABAAIABABIACAAQAIAFAEANIAKgHIAOgMQAKgLgGgQQgLgYgmghQhOhEhYAKQhZAJgVAaIgBABQgVAbgDAkQgFAmAEAdIABABQAEAXAOAbQAiAoAeAKIABABIAAAAIACAAIAAAAIApAfIABABIAAACIgBACIgBACQgGACgFgBIgUgGQAAAQAJAIg");
	this.shape_23.setTransform(585,560);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFD8C9").s().p("AhNCFQgKgpgDgSQgDgTgEgHQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAQgCgBgDADQgCADgCAKQgCALgCAFIgNgKIAAAAIgEgFQgKgNgBgPIACgEIAAgCQgBgMADgRQAGgaAJgZIABgDIgBgBIgDAAIgGAAIgCAAIgBAAQAAAAAAAAQAAgBAAABQgBAAAAAAQAAAAAAAAQgJADgHAMIgJgJIgLgPQgIgMAKgOQAOgWAsgYQBZg0BVAcQBVAaAQAdIAAABQAQAfgEAkQgCAmgKAZIAAABQgJAYgUAYQgoAgggAEIgBAAIAAAAIgBAAIgBAAIguAWIgBACIAAABIAAACIABACQAFAEAGgBIAUgBQgDAPgLAGIAAABQgRAHgIABIgBAAIgBAAIgIADQg9gKgLgeg");
	this.shape_24.setTransform(461.7,559.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgHDKQhYgMgJgxQgGgXgEgLIgIgCQgIgDgMgKQgmgeANgtIAEgLIAAgBIACgVIgKgFIgBgBQgKgJgNgQQgVgdAXghQARgbAzgcQBlg6BhAfQBlAfARAoQATAmgFArQgCApgLAfQgMAegYAdIgCACIAAABQgrAhgjAIQgGAogaAMIgBAAQgXAKgMABIgKAEIgFgBgAhgAwQAEAHADATQADARAKApQALAeA9AKIAIgCIABAAIABAAQAIgCARgHIAAAAQALgGADgQIgUACQgGAAgFgEIgBgBIAAgCIAAgCIABgBIAugWIABAAIABgBIAAABIABgBQAggEAoggQAUgYAJgYIAAAAQAKgaACgmQAEgjgQggIAAAAQgQgehVgZQhVgchZAzQgsAZgOAVQgKAPAIAMIALAOIAJAKQAHgNAJgCQAAAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIABAAIACAAIAGAAIADAAIABACIgBACQgJAZgGAaQgDARABANIAAABIgCAFQABAPAKANIAEAEIAAAAIANALQACgFACgMQACgJACgDQADgDACABIABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAABg");
	this.shape_25.setTransform(461.6,559.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#91AFC2").s().p("An6CJQgYgagphYQgHgrAlgxIAKgLQAEgGAGgBIAEgCQANgVAIANQADAHACAQIAAAEQAHACAGgCIAhgNIBJgbQAiAOAUAXQAtAzgXBhIgBABQhOAbhFATIgBgBIgBABQgGAPgTADIgCABQgFAEgIABIgCABQgHAAgLgKgAHMCCQgIgDgEgGIgCAAQgSgHgDgQIAAgCIgBABQhBgghHgqIgBgBQgEhkA2gpQAZgUAkgHIBCAqIAeATQAGAEAHgCIAAgDQAFgQAFgFQAKgMAJAXQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAGADACAGIAHAMQAbA4gOApQg6BPgdAUQgKAHgGAAIgFgBg");
	this.shape_26.setTransform(523.6,551.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AqBN/QgGgFgBgGQgBgIAEgFQAFgHAHgBIAJgCQAMALAIgCQAIgBAFgEIACgBQATgDAGgPIACAAQBFgTBOgbIABgBQAXhjgtgzQgUgXgigOIhJAbIghANQgGACgHgCIAAgEQgCgQgDgHQACgEAGgCIArgRIB/gwQBVgiBPghQgugmhnhSIgBgBQiFhqipieQiqieh3jAQh5jEgSiaQgTihBihVIAAgBQA0gtBAgHIgFAmQgwAIgoAiQhUBLARCNQASCTByC7IAAAAIABAAQB0C9CnCaQCoCeCEBpIClCFIAGAFIAAgBIAZAUQA3AoCNBgIAVAPIALAIQA5AmA2AhQABiEBegoIAKgDIgHgFIgBgBIgggUQhjhAhag/IgfgXQtLpLh6m6IAAgEQgJg6AOgqIAJgMQABAQADAOQADAXAFAYIgBAGIAEADQBpG6NhJYQLhlfDAlXQAigdAZhNQAEApgSA0IgCAEQi0Fpr3FtQBaA+BiA/QCRhLC8h2QDBh4CWiiIAAABIAAAAQCUifAuiMQAriHhEhZQgXgegfgRIAHgmQArAVAgApIAAAAQBQBmgyCbQgvCTibClQiaCljFB8QixBtiLBLIBVA2IAoAZQAFACABAGQgFAFgFAQIAAADQgHACgGgEIgegTIhCgqQgkAHgZAUQg2ApAEBmIABABQBHAqBBAgIABABQADAQASAHIACAAQAEAGAIADQAIADANgJIAKAEQAGACADAIQADAGgDAIQgCAGgHADQgGADgGgDQighFjNiLIgIgFQhHAgiSA9QjlBgiqAkIgDABQgFAAgFgDgAm0JPIgJADQAFACAEAEQBVA4gZCCQBBgYBGgeQB9g1BGgeQiXhogtgiQhdAohlAog");
	this.shape_27.setTransform(535.4,478.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF7F").s().p("Am0J9QgEgEgFgCIAJgDQBlgoBdgoQAtAiCXBnQhFAfh+A1QhGAehBAYQAZiChVg4gAAXKzIgLgHIgVgPQiNhgg3gpIgZgTIAAABIgGgFIiliFQiEhpioieQiniah0i9IgBAAQhyi7gSiTQgRiNBUhLQAogiAwgIIgBADQgJA2AAAWIAAAKIgJAMQgOAqAJA6IAAAEQB6G6NLJLIAfAXQBaA+BjBBIAgAUIABABIAHAFIgKADQheAogBCEQg1ghg6gngAAuGiQL3ltC0lpIACgEQASg0gEgpQAHgWAGgaIALgxQAfASAXAeQBEBZgrCHQguCMiUCfIAAgBQiWCijBB4Qi8B2iRBLQhig/hag+gAu8qGIgBgBIgEgDIABgGQgFgYgDgXIADAMIAHAQIAAAIQAAALAFANIgDgDgAtHrpIABAAIAEALIgHAFIACgQg");
	this.shape_28.setTransform(535.4,475.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgzDHIgFgBIgMgGQgLgDgUgOIgBgBQgYgRAEgnQghgPgigpIAAAAIgCgDQgQgggEgdQgEghAHgqQAHgrAcghQAagjBsgJQBogLBVBMQAsAmALAdQAOAlgbAXQgRAMgMAHIgBAAIgMADQAAALgDALIAAACIABAKQACAugtAWQgOAHgJABIgIAAIgSAfQgUAphJAAIgQAAgAhRCWIAAABQAOALAJACIABABIABAAIAJAEQA+ADARgcQAUglAIgQQAGgSAGgGQADgDACABQACgBACAEQACADgBAKQgBALABAFIAQgHIAAAAIAFgEQANgKAEgOIgBgFIABgBQAEgNABgTQACgYgEgaIAAgCIACgBIACAAIAHABIABABIAAAAIADAAQAIAFADANIALgHIAOgMQAMgKgHgQQgJgXglghQhMhDhbAJQhbAIgXAaIAAAAQgXAbgFAjQgHAlADAcIAAABQADAXAOAbQAgAnAfAKIAAABIABAAIABABIABAAIAoAeIABABIAAACIgBACIgBABQgGADgGgCIgUgFQAAAQAJAHg");
	this.shape_29.setTransform(580.4,560.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFD8C9").s().p("AgvCpIgJgEIgBAAIgBgBQgJgCgOgLIAAgBQgJgHAAgQIAUAFQAGACAGgDIABgBIABgCIAAgCIgBgBIgogeIgBAAIgBgBIgBAAIAAgBQgfgKgggnQgOgbgDgXIAAgBQgDgcAHglQAFgjAXgbIAAAAQAXgaBbgIQBbgJBMBDQAlAhAJAXQAHAQgMAKIgOAMIgLAHQgDgNgIgFIgDAAIAAAAIgBgBIgHgBIgCAAIgCABIAAACQAEAagCAYQgBATgEANIgBABIABAFQgEAOgNAKIgFAEIAAAAIgQAHQgBgFABgLQABgKgCgDQgCgEgCABQgCgBgDADQgGAGgGASQgIAQgUAlQgQAag0AAIgLgBg");
	this.shape_30.setTransform(580.4,560.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFD8C9").s().p("AhECDQgNgogEgRQgDgTgFgHQgBgDgCAAQgDgBgDAEQgBACgCAKIgCAQIgPgLIABABIgFgFQgLgNgBgOIACgFIAAgBQgCgNACgRQAEgaAJgYQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIgBgBIgCAAIgHAAIgCAAIAAAAIgDAAQgJADgFAMIgJgJIgMgOQgJgNAIgOQAPgVArgZQBXgzBXAbQBXAaASAdIAAABQARAfgBAjQgBAlgJAaIAAAAQgIAYgSAYQgoAggfAEIgCAAIgBAAIgBABIgtAVIgBACIgBABIABACIABACQAFAEAGgBIAUgBQgCAPgKAGIAAABQgRAHgIABIgBAAIgCAAIgKACQg8gKgMgeg");
	this.shape_31.setTransform(465.2,560.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AADDJQhXgNgMgwIgLgiIgIgCQgIgCgNgLQgngdALgtIACgKIABgCQgBgJACgLIgLgFIgBgBQgLgJgNgQQgWgdAVghQAQgaAygdQBjg5BjAeQBoAfATAnQAVAmgDArQAAApgLAfQgJAegXAcIgCACIAAABQgqAigjAHQgEAogaALIgBAAQgXAKgLACIgMADIgDAAIgDAAgAhgAsQACAAACAEQAFAHADASQAEASANAoQALAeA9AKIAKgDIABAAIABAAQAJgBAQgHIABAAQAJgGADgQIgVACQgFAAgFgEIgCgBIAAgCIABgCIABgBIAtgWIABAAIABAAIABgBQAggEAngfQATgYAHgYIABgBQAIgZABgmQACgjgRgfIgBgBQgRgchYgaQhWgbhYAzQgqAZgPAVQgIAOAJAMIALAPIAJAIQAGgMAJgDIACABIABgBIABAAIAHAAIACAAIABACQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgJAZgEAaQgDAQACANIAAABIgCAFQACAPALAMIAEAFIgBAAIAPALIADgRQABgJACgDQACgDACAAIABAAg");
	this.shape_32.setTransform(465.1,560.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#91AFC2").s().p("AnMCMQgagaguhXQgIgqAjgxIAJgLQAEgFAGgCIAEgCQAMgVAJANQADAHADAQIABAEQAGACAHgCIAggNIBIgbQAjAOAWAXQAwAzgTBfIgBABQhNAbhFATIgBgBIgBABQgFAPgTADIgCABQgFAEgIABIgCABQgIAAgLgKgAGdB6QgIgDgEgGIgCAAQgSgHgCgQIAAgBIgCAAQhAgghHgqIAAAAQAAhiA5goQAagTAlgHIBCAqIAdATQAGADAHgCIABgDQAGgPAFgGQALgLAIAXQAAAAABAAQAAAAABABQAAAAABABQAAAAAAAAQAGADACAGIAHANQAZA2gRAoQg+BNgfAUQgKAHgHAAIgEgBg");
	this.shape_33.setTransform(523.1,552.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFF7F").s().p("AmQJ2QgDgDgGgCIAJgEQBPgfBLggQA/AuCHBbIACACIiWBBQhGAdhAAYQATiBhZg4gAAZK/IghgXIgUgOQh1hQg+gsIghgYIgdgWIAAABIioiJQiBhoikicQijiYhui7IgBABQhri5gMiQQgKiLBZhIQAggZAkgLIAKBSIgLAMQgQApAGA4IABAFQBpG7NdJUIAfAXQBZA9BhA/IAHAEIABABIgHACIgDABQgUAIgPALQgjAZgSAqQgOAjgDAvIhBgpgADOIUQhSg1hNg1QMGlyColsIACgEQAQg2gIgsIgCgEIAAgEIAIg1IADgfIABgDQAmARAeAjQBJBYgmCGQgnCKiNCeIgBAAQiPChi9B3Qi/B5iTBMIgVAMIgigWgAvGrWIAAgEIABADIAAANg");
	this.shape_34.setTransform(534.8,477.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ApQN2QgGgEgBgHQgCgHAEgFQAEgHAHgBIAKgCQAMALAIgCQAIgBAFgEIACgBQATgDAGgPIABAAQBFgTBOgbIAAgBQAThhgwgzQgWgXgjgOIhIAbIggANQgGACgHgCIAAgEQgDgQgEgHQACgEAGgCIArgQIB9gxIB8gyIgNgLQgnghiBhnIgBAAQiChqikicQinichwi+QhyjBgLiXQgNifBphSIAAgBQArgjAygLIgDAmIAAABQgkAKggAZQhZBJAKCKQAMCRBrC4IABAAIAAAAQBuC6CjCYQCkCdCBBoICoCIIAAAAIAdAWIAhAYQA+AsB1BPIAUAOIAhAXIBBApQADgvAOgiQASgrAjgZQAQgLATgHIADgBIAHgDIgBAAIgHgFQhhg/hZg9IgfgXQtdpUhpm7IgBgEQgGg5AQgpIALgMIAAACIAAAFIABALIADAjQACAeAGAaQAGAeAKAbQAJAbAPAaQAOAZAKAYQDGF9LCHnQMQlxCilrQAGgKAIgQQATgmAEgWIACAFQAIArgQA2IgCAEQioFtsGFyQBNA0BSA2IAiAVIAVgLQCThNC/h5QC9h3CPihIAAABIABgBQCNidAniLQAmiFhJhZQgegigmgSIAIgjQAxAUAlAsIAAABQBXBlgsCZQgoCSiVCkQiSCjjCB7QjAB5iTBOIgBAAIgDACIAuAdIAnAZQAFACACAFQgGAGgGAPIAAADQgHACgHgDIgdgTIhBgqQglAHgaATQg6AoAABkIAAAAQBHAqBBAgIABABQADAQASAHIABAAQAEAGAIADQAIADAOgJIAJAEQAHADADAHQACAGgDAHQgDAHgHADQgGACgGgDQiRg+i0h3IirBJQjjBgiqAkIgDABQgFAAgFgEgAmQJJIgJADQAGACADAEQBZA4gTCAQBAgYBGgdICWhBIgCgBQiHhcg/gtQhLAfhPAgg");
	this.shape_35.setTransform(534.8,481.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFD8C9").s().p("AiQEHIgBgBIgCgBIgKgEQgxhCANg0IAdhdQALgcACgNQABgFgDgBQgBgDgFACQgEACgIAKQgKAPgFAFIgFgbIAAABIAAgIQAAgbAKgUIAFgGIABgCQAIgTARgYQAXggAagaIACgDIAAgEIgBgCIgHgFIgBgBIgBgBQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgKgEgOAMIgBgUIAAgdQABgZATgMQAdgSA5ACQBzACA7BvQA7BtgHA0IAAABQgIA5gdAvQgdAzgdAfIAAAAQgZAagjASQg6ALgfgVIgBAAIgBgBIgBAAIgBAAIg5gIQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABAAAAIgCABIAAAEIAAAEQABAIAFAFIAUAPQgOATgOAAIAAAAQgVgEgIgFg");
	this.shape_36.setTransform(535.5,546);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ah6FAIgCgCQgbgFgMgHIgNgGQgCgBgCgDQhHhbAbhOQALgkAEgTIgFgKQgGgLgEgYQgNhHAtg1IAKgLIACgCQAIgQAKgOIgHgRIABgBQgDgWAAghQACg5AsgcQAigXBDACQCCADBEB+QBFCBgNBDQgKBGgjA6QghA5ggAiQggAhgqAVIgDABIgBABQg9AMglgTQgfAugdAAIgGAAgAiYgBQADAAgBAFQgCANgMAdIgcBdQgNAzAwBCIALAFIACABIABAAQAIAGAUAEIABgBQANAAAPgTIgUgPQgGgEgBgJIAAgEIABgDIACgCQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIA5AHIABABIABAAIAAABIABAAQAgAVA5gLQAjgSAZgaIABgBQAcgeAegzQAcgvAIg5IABgCQAGg0g6hsQg7hvh0gDQg5gBgdASQgSALgBAZIgBAdIABAUQAPgLAKADQAAAAABAAQAAABAAAAQAAAAABAAQAAAAAAABIABAAIABABIAGAGIACABIAAAEIgCADQgbAbgWAgQgRAYgIATIgBACIgGAFQgJAVgBAbIABAIIgBgBIAFAaQAGgFAJgOQAJgKAEgDIADAAQABAAAAAAQAAAAABAAQAAAAAAABQABAAAAABg");
	this.shape_37.setTransform(535.5,546.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAjFFIgBABQgigEgQg6QgpAIg6gcIAAgBIgDgCQgjgfgWgoQgWgqgRhBQgSg/AJhGQAGhHBmhpQBihoB/AhQBBAPAbAgQAkAngPA4QgIAggJAUIAAACIgKAOQAGAQAEARIABADIAHAOQAcA8ggBDQgKAXgIAJIgJAIQgBAUABAlQAFBShcBFIgFADIgPACQgIADgNAAIgUgBgAgHDVIA3AIIACABIABACIAAAEIgBADQgEAIgGADIgXAJQAJAXAMADIABABQAVACAJgEIACAAIABAAIAMgCQBAgzACg1QgBhFgCgdQgEgeACgNQABgHADAAQACgDAEADQADADAFAOQAGARADAGIAMgYIAAABIADgJQAHgbgEgUIgEgHIAAgCQgCgVgKgbQgOglgTghIgBgDIABgEIACgBIAIgEIABgBIACAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAKgBALAPIAHgSIAHgcQAFgZgPgQQgXgZg3gOQhwgdhXBcQhVBYgIA2IgBACQgHA5APAzQAPA5ATAmIAAAAQASAgAdAbQA2AaAkgLIACgBIAAAAIABAAIABAAIAAAAg");
	this.shape_38.setTransform(502.3,531.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFD8C9").s().p("AAnEVIAAgBQgNgDgJgWIAYgKQAGgCADgIIACgEIAAgDIgCgCIgBgBIg3gIIgBgBIgBAAIgBABIgBAAQgkAMg3gbQgdgagRggIgBgBQgTglgPg6QgPgyAIg6IAAgBQAIg2BVhZQBXhcBwAeQA4ANAXAaQAPAQgGAYIgHAcIgGATQgMgPgKABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIgBAAIgCAAIgHAEIgDABIAAAEIABADQATAhANAlQAKAcACAUIABADIADAGQAEAVgGAaIgEAJIABAAIgMAYQgEgGgFgRQgGgOgDgDQgDgEgDADQgCABgCAGQgBAOADAeQACAdABBFQgCA1hAAyIgLACIgCAAIgBABQgGACgLAAIgOgBg");
	this.shape_39.setTransform(502.3,531.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#91AFC2").s().p("ADZEfQgEgFgCgIQgJg+BJixQAfhIAXgdQAaggAHAnIAAABQABAGgJAeQBWgLBOgPIAAAAQAAAOAaAbIABAAQAPANACAIIACAFIAkBIQAEApgdBDQgFANgGAMQiVAliYAUQgJAPgLABIgFABQgNAAgIgLgAktBvQgKgFgFgRQiOg7iFhLQgDgMgBgOQgLhJAPgmIA3g8IACgEQAEgHAUgMIAAABQAhgTADgNIAAgBQBIAjBQAiQgBgeADgGIABgBQAQglARAnQAOAiAKBPQAYC9gZA6IgJALQgIAGgIAAQgHAAgGgDg");
	this.shape_40.setTransform(518.9,538.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFF7F").s().p("AIgKUQAAgDgCgCIgkhIQgCgPgZgZQgOgQgDgFIAAgCQGShYCXjXQCcjZhilbIgFgwQCyBwASD6QAXFHjsDdIAAgBQihCXjVBLQhPAahQAWQAihPgIgxgAteGhQi5iBh0i9IgBABQiokTBvk3QBWjzDTg6IAEATIADAIIgCAAQgGgEgHABQgHABgEAHQjJE/BfEDQBZD3FsDAIgBACQgDAFgSALQgeARgHAOIg2A8IgDAFQgVAtAMBWQhIgrhFgvg");
	this.shape_41.setTransform(528,481.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ABpNaQgFgFgBgHQgCgHAFgGQAFgFAHgBIANgCQAJANARgCQALgCAJgPQCYgTCVgmQAGgLAFgOQAdhCgEgpIgkhIIgCgFQgCgIgPgQIgBAAQgagbAAgNIAAgBQhOAPhWALQAJgdgBgHIAAgBQBMgJBFgNQAEgFAHgBQAFgBAEADQGRhUCWjRQBNhtAFiLIADgVQAAgTgGgtQgFhUgCgOIAFgNQAKgfAAgsIgCgYQBjFbicDZQiYDXmRBYIAAACQACAFAOAQQAZAZADAPIAjBIQACACABADQAHAxgiBPQBQgWBQgaQDUhLCiiXIAAABQDrjdgXlHQgSj6iyhwIAAgDIgEgpQDWB2AVEeQAZFYj4DnQinCbjcBOQhjAhhlAaIAAAAQi3Avi8AUIgDAAQgFAAgFgDgAlsKrQixhGijheIgBAAQhag0hWg7QjAiGh4jDQixkfB0lHQBdkIDlg9IAIAjQjSA5hXD0QhuE3CoETIAAgBQB0C9C6CBQBFAvBHArQgLhWAUgtIADgFIA2g8QAHgOAegRQASgLAEgFIABgCQltjAhZj3QhekDDJk/QAEgHAGgBQAHgBAHAEIABAAIAGARIgCAHQgVAigXA2QgGAGgGANQgFALgcBUQgTAqgEASQgDAMAAAJQghCKAtB+QBZDwFtC8QAFgBAFACQAGACACAGQBAAgBHAdIgBABQgDAGABAeQhQgihIgiIAAAAQgDANghATIAAAAQgUALgEAHIgCAFIg3A7QgPAmALBJQABAOADANQCFBMCOA8QAFAQAKAFQAQAHANgKIALAFQAHADADAGQADAHgDAHQgDAGgHADIgGACIgHgCg");
	this.shape_42.setTransform(527.9,485.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF7F").s().p("AazIFQh/gshfgjQAjgZAdgjQAZgfARglQAdg+gDhDQgCg6gYgzICvCNQAQAFATAHIAPAGIgnEyQgggHgmgNgA8ficIAok3IDMhFQgoApgWA1QgaA+AFBEQAEAqANAlQAOArAaAkIgfAAQhTAAhogCg");
	this.shape_43.setTransform(534.1,488);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#91AFC2").s().p("AVvHQQAzg+AOgkQAcgRAUgYQA7hEgIhyQgCgegMgeIAPAMQgBAHADAGQAMASAJATQAbA0ADA7QACA7gYA2IAAAAQgPAhgXAcQgiApguAYQgrgQgjgPgA45iqQgMgigDglIABABQgFg8AXg3QAWg2AsgoQAQgOAQgNQAGgEABgHIATgHQgXAYgMAcQgvBpAhBUQAKAeAVAZQgBAmAbBMIhUADQgjgngRgyg");
	this.shape_44.setTransform(532.2,480.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFD8C9").s().p("ASUIXQghgSgDgoQgDg2Arg6QABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQANgiAXgzQglAegdAlQgsA6gEA5QgZgBgXgSQgfgcgEgxQgBgKACgKIAAgBIAAgBIAEgPQAMgnAngvIAAgBIAVgvQAKgbAKgXQgvAxgWAbQgmAwgPAoIgHgJIAAAAQgNgRgCgIQgGhhBkh1QBihxBQgHQAKgBAIADQAHACAGgDIADgCQBDANBEA9IABAAIAJAKIABAAIACADQBNBIAFBKQAHBigxA6IgBAAQgNAQgSAMQgHgBgGAFQgEADgCAEQgOAHgQAFIgFADIgdARQgcAPgaALQA2AAAqgLQgPAXgbAfIAAABQg+BLgwAFIgLABQggAAgYgNgA1RAqQgrgWgghaIAAAAQgOgmgGgcQAjAaAzASQgUgTgWgYIgVgaIgEgFQgOgKgKgLQAAgFgDgEQgEgHgHgBQgNgRgHgUIAAAAQgbhJAphZQAfhDBhgqIADgCIABAAIANgGIgBABQBXgkBDALIACADQAFAFAIAAQAIAAAJAFQBJAiA0CNQA1CSgmBZQgFAHgTALIABAAIgJAGQgCgrgSg6QgLghgcg+QABAZAAAdQAAAKAEApIAAABQATA6gBAoIgCAQIAAACQgCAKgEAJQgVAtgnANQgdAKgXgJQAQg0gVhHQgPgtgYgoQAEA4AAAkQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAVBFgWAwQgRAlglAGIgLAAQgbAAgegNg");
	this.shape_45.setTransform(533.5,478.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AapJdQiUgyhogoIgMAEQgHABgGgDQgHgEgCgGIgBgFIhGgeQg8BAgzADQgzAEgkgUQgsgXgJgxQgmABgigcQgrgkgFhCQAAgKAAgKIgFgFIgBgBIgCgCIgBgBQgIgHgHgKQgXgdAAgQQgFg/AkhIQAagyAug0QBmh3BVgNQAFgFAHgBQBhgFBlBeIABAAIAJAJIACABIAAAAIACACIF/E1IgCAUIgQgGQgSgHgQgFIiviNQAXAzACA6QAEBDgdA+QgRAlgZAfQgdAjgkAZQBfAjCAAsQAlANAhAHIgFAjQgjgIgpgOgASWE/QAAAAgBABQAAAAAAABQAAAAgBABQAAAAAAAAQgsA6ADA2QADAoAhASQAdAPAngDQAvgFA/hLIAAgBQAagfAPgXQgqALg1AAQAZgLAcgPIAdgRIAGgDQAQgFAOgHQACgEADgDQAGgFAHABQASgMANgQIABAAQAyg6gIhiQgFhKhNhGIgBgDIgBAAIgKgKIAAAAQhFg/hCgNIgEACQgGADgHgCQgIgDgJABQhRAHhiBxQhkB1AGBhQACAIANARIAAAAIAHAJQAQgoAlgwQAWgbAvgxQgKAXgKAbIgVAvIAAABQgnAvgMAnIgEAPIAAABIAAABQgCAKACAKQADAxAgAcQAWASAZABQAEg5Asg6QAeglAlgeQgXAzgNAigAYAB8QAJByg8BEQgTAYgdARQgNAkgzA+QAjAPArAQQAugYAhgpQAXgcAQghIAAAAQAYg2gDg7QgCg7gbg0QgJgTgMgSQgDgGABgHIgPgMQAMAeABAegA1kAfQgugUgjhPIhNADIgCAFQgEAFgIABQgHABgGgDIgKgIQhqABiSgDIAFgjQB7ACBfAAQgagkgPgrQgMglgEgqQgGhEAbg+QAWg1AogpIjMBGIAFgoIGWiJIADgCIgBABIAOgGIAAAAQCAg1BaAmQAGADAEAHQBKArA3CSQAZBDAGA4QAJBQgaA6QgFAPggATIgVALIgBABIgCABIgBABIgIACQgCAKgEAKQgbA8g1ASQgqANgkgNQgZAqgyAHIgQABQghAAgmgRgA2hhxIAAAAQAgBcArAVQAlAPAggDQAlgGAQgjQAWgygVhFQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgkgEg4QAZAoAOAtQAVBHgQA2QAYAJAcgKQAogPAUgtQAEgJACgKIAAgCIACgQQABgogSg6IgBgBQgEgpAAgKQAAgdgBgZQAcA+ALAhQASA6ACArIAJgGIAAAAQASgLAFgHQAnhZg2iSQg0iNhIgiQgKgFgIAAQgIAAgFgFIgCgDQhDgLhXAkIABgBIgNAGIgBAAIgDACQhhAqgfBDQgoBZAaBJIABAAQAGAUAOARQAGABAEAHQADAEAAAFQALALANAKIAEAFIAWAaQAVAYAUATQgygSgkgaQAHAcANAmgA5Mi9QASAyAjAnIBUgDQgbhMAAgmQgUgZgKgeQgihUAwhpQAMgcAXgYIgUAHQgBAHgFAEQgQANgQAOQgsAogWA2QgYA3AGA8IgBgBQADAlALAig");
	this.shape_46.setTransform(534,482.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFD8C9").s().p("Ag8BjIgLgtQgBgPgDgFQgBgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAABgBAAQgBACgCAIIgDAMIgKgIIAAAAIgEgEQgHgKgBgMIACgDIAAgCQgBgJADgNQAEgTAIgUIAAgBIgBgBIgCAAIgFgBIgBAAIgBAAIgCAAQgGACgGAKIgGgIIgJgMQgGgJAHgLQAMgQAigRQBFgkBDAYQBCAXAMAXIAAABQANAZgDAbQgCAbgIAVIAAAAQgHASgPASQggAXgZACIgBAAIAAAAIgBAAIAAABIgkAPIgBAAIgBACIABABIABABQADAEAFgBIAQAAQgDAMgIAEIAAABQgNAFgHAAIAAAAIgBABIgGABQgwgKgIgYg");
	this.shape_47.setTransform(625.8,502.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGCcQhEgNgHgnIgIgaIgGgCQgHgCgJgJQgegYALgiIACgHIABAAQgBgJACgIIgIgFIAAAAQgJgIgJgNQgRgXASgYQAOgUAngVQBPgoBMAbQBPAcANAfQAPAegEAiQgCAfgJAXQgJAXgSAVIgCACIAAAAQgiAYgbAFQgFAegUAIIgCAAQgRAHgKABIgHACIgCAAIgCAAgAhLAiQADAFABAPIALAtQAIAYAxAKIAFgBIABgBIABAAQAHAAANgFIAAgBQAIgEADgMIgRAAQgEABgDgEIgCgBIAAgBIAAgCIABAAIAlgPIAAgBIAAAAIABAAIABAAQAZgCAfgXQAQgSAHgSIAAAAQAHgVADgbQACgbgMgZIAAgBQgMgXhDgXQhCgYhGAkQgiARgLAQQgIALAHAJIAIAMIAHAIQAFgKAHgCIACAAIAAAAIABAAIAFABIACAAIABABIAAABQgIAUgEATQgDANABAJIAAACIgBADQAAAMAIAKIAEAEIgBAAIALAIIADgMQABgIACgCQAAAAABgBQABAAAAAAQABAAAAAAQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABg");
	this.shape_48.setTransform(625.8,502.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgWCbIgJgDQgKgCgQgKIgBAAQgUgKAAgfQgbgIgdgdIgBAAIgBgCQgPgYgGgYQgGgWACghQACghASgdQARgdBTgQQBOgRBIAzQAlAZALAWQAOAbgUAUQgKAMgKAGIAAABIgJADQAAAHgBAIIABACIABAHQAGAkghAUQgKAHgHABIgGABIgLAaQgNAkhDAEIgEAAgAgSCEQAvgEAMgWIAQgrQAEgOAEgGQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAAABABAAIACAKIABANIAMgHIADgDQAJgKACgLIgBgEIAAgBQACgJAAgPQgBgSgFgUIAAgBIABgCIABAAIAGABIABAAIAAAAIACAAQAGADAEAKIAIgGIAKgLQAIgJgGgLQgKgRgfgXQhAgthFAPQhFAOgPAVIgBABQgPAXgBAbQgCAdAFAUIAAAAQAFATAMAUQAcAbAZAGIABAAIABAAIAiAUIAAABIABABIgBACIgBABQgEADgEgBIgQgDQABAMAHAGIAAAAQAMAHAHABIABABIABgBg");
	this.shape_49.setTransform(399.2,487.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFD8C9").s().p("AgZCCIgBAAIgBAAQgHgCgMgGIAAgBQgHgFgBgMIAQADQAEAAAEgCIABgCIABgBIgBgCIAAAAIgigUIgBgBIgBAAQgZgFgcgcQgMgTgFgTIAAgBQgFgTACgdQABgcAPgWIABgBQAPgVBFgOQBFgPBAAtQAfAWAKARQAGAMgIAJIgKAKIgIAGQgEgKgGgCIgCAAIAAgBIgBAAIgGAAIgBAAIgBABIAAACQAFATABASQAAAPgCAKIAAABIABAEQgCAKgJAKIgDADIgMAHIgBgNIgCgJQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAgBgBAAQAAAAgBABQAAAAAAAAQgBABAAABQgEAFgEAOIgQAsQgMAWgvADg");
	this.shape_50.setTransform(399.2,487);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#91AFC2").s().p("ATnBhQgPgpgRgoIBXgXQAcAYARAjQAPAeAEAgQACAQAAAQIhfAoQgJgtgRgsgA1fgoIAHgfQAIgfASgcQAXggAfgXIBUAlQgYAlgUAnQgXApgPApg");
	this.shape_51.setTransform(512.3,488.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF7F").s().p("AVmEoIgEgTQgShAgrgzQBwglBog1IBBAIQgZgOgcgLQgMgGgNgDIg0gPIhwgWIhxgQIg5gHIgxgFIARiIIBVAIQCxAYCrA1IA9AUQARAEAKAPQARAaALAbQAPAogPAoQgFANgHAMQgHANgKAMQgLANgMAMIgYAUIgNAJQhwA/h2AuIgCgTgA5hgNIgLgMIgVgXQgLgNgJgPQgIgMgGgOQgFgNgDgOQgIgqATgkQAPgdAVgXQAMgNARgCIA/gLQCwgeC0ABIAwACIgSCJIg1gBIhzADIhyAGIg2AHIgZAGQgeAIgaAJIBAACQBhBDBpA0QgxApgaA+IgGASIgFATQhvg9hnhMg");
	this.shape_52.setTransform(514.2,470.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ATYFlQgJhHgdhBQgNgegTgYIAFgPQBkgbBegkQBBgXA/gdQhrgahugNQhJgLhKgGIAEgaIAxAFIA5AHIBxASIBwAUIA0APQANADAMAGQAcALAZAOIhBgIQhoA1hwAlQArAzASBAIAEATIACATQB2guBwg/IANgJIAYgUQAMgMALgNQAKgMAHgNQAHgMAFgNQAPgogPgmQgLgdgRgaQgKgPgRgEIg9gUQirg1ixgYIhVgIIADgWIAZACQA8AEA8AJQBNAPBNASQBHAPBEAVQAhAJAdARQAbAPAUAWQAKAKAGANQARAngGAuQgIBBgxArQhBA4hOAkQhOAjhNAgIhwAugASzCqQASAoAPApQARAsAJAtIBfgoQAAgQgCgQQgEgggPgeQgSgigbgbgA2HCAQhJgphIguQhIgsg5hAQgqgxAAhCQABguAWgnQAHgLALgJQAYgTAcgLQAfgNAigFQBHgLBIgFQBOgIBOgFQA5AAA4ADIgDAWIgwgBQi0gBiwAeIg/ALQgRACgMANQgVAXgPAdQgTAkAIAqQADAOAFANQAGAOAIAMQAJAPALANIAVAXIALAMQBnBMBvA9IAFgTIAGgSQAag9AxgqQhpg0hhhDIhAgCQAagJAegIIAZgGIA2gHIBygGIBzgDIA1ABIgDAZIhcgBQhuABhuALQA6AkA+AhQBYAwBfApIADANQgVAWgSAcQglA7gTBFIgZAGIhog+gA1RAWQgSAcgIAfIgHAgIBYA0QAQgsAWgpQAVgmAXglIhTgkQggAXgWAeg");
	this.shape_53.setTransform(514.2,472.8);

	this.instance_3 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_3.setTransform(421.9,438,1,0.94,0,-6.4,1.3,127.7,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:127.8,regY:6.8,scaleY:1,skewX:0,skewY:0,x:418.1,y:426.6}}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},102).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},8).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},2).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},92).to({state:[{t:this.instance_3,p:{scaleY:0.94,rotation:0,skewX:-6.4,skewY:1.3,x:421.9,y:438}},{t:this.instance_2,p:{regX:125,regY:9.5,scaleY:0.964,skewX:10.3,skewY:-178.6,x:592.1,y:444.4}}]},1).to({state:[{t:this.instance_3,p:{scaleY:1,rotation:1.1,skewX:0,skewY:0,x:418.2,y:427.6}},{t:this.instance_2,p:{regX:125,regY:9.5,scaleY:1,skewX:1.1,skewY:-178.8,x:588.4,y:433.5}}]},1).to({state:[{t:this.instance_2,p:{regX:125,regY:9.5,scaleY:1,skewX:0,skewY:180,x:588.5,y:428.1}}]},2).to({state:[{t:this.instance_2,p:{regX:125,regY:9.5,scaleY:1,skewX:0,skewY:180,x:588.3,y:429.3}}]},2).wait(3));

	// FRD_MODEL_part_049
	this.instance_4 = new lib.FRD_MODEL_part_026("single",0);
	this.instance_4.setTransform(502.1,426.8,1,1,0,0,0,41.1,24.8);

	this.instance_5 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_5.setTransform(418.3,425.4,1,1,0,0,0,127.8,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4,p:{rotation:0,x:502.1,y:426.8,regY:24.8,scaleX:1,scaleY:1,regX:41.1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_4,p:{rotation:1.3,x:501.2,y:431.5,regY:24.8,scaleX:1,scaleY:1,regX:41.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:3.6,x:504.8,y:438.6,regY:24.9,scaleX:1,scaleY:1,regX:41.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:6.9,x:503.2,y:464.5,regY:24.9,scaleX:0.999,scaleY:0.999,regX:41.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:11.6,x:504,y:482.5,regY:24.8,scaleX:0.999,scaleY:0.999,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:11.6,x:504.6,y:485.9,regY:24.8,scaleX:0.999,scaleY:0.999,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:11.6,x:505,y:487.6,regY:24.8,scaleX:0.999,scaleY:0.999,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:11.6,x:506.6,y:490.8,regY:24.9,scaleX:1.013,scaleY:1.013,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:11.6,x:510.2,y:491,regY:24.9,scaleX:1.024,scaleY:1.024,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:11.6,x:514.9,y:486.9,regY:24.9,scaleX:1.04,scaleY:1.04,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:12.1,x:530.1,y:472.6,regY:24.7,scaleX:1.088,scaleY:1.088,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:12.1,x:542.4,y:449.4,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.2,y:443.7,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.7,y:440.7,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.5,y:442.3,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.4,y:443.4,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.7,y:440.9,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},27).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.9,y:439.9,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:12.1,x:543.6,y:441.9,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:13.1,x:542.2,y:447.6,regY:24.7,scaleX:1.123,scaleY:1.123,regX:41.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:14.7,x:544.9,y:467.1,regY:24.8,scaleX:1.123,scaleY:1.123,regX:41.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:18.2,x:552.3,y:474.5,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:18.2,x:552.5,y:473.3,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:18.2,x:552.8,y:471.5,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:18.2,x:553,y:470.3,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:18.2,x:552.5,y:473.3,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},38).to({state:[{t:this.instance_4,p:{rotation:18.2,x:551.8,y:479,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:18.2,x:551.5,y:480.8,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:18.2,x:551.4,y:477.7,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:14.2,x:540.4,y:446.9,regY:24.8,scaleX:1.174,scaleY:1.174,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:10.6,x:538.7,y:431.7,regY:24.8,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:9.4,x:539.2,y:425,regY:24.8,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:9.4,x:538.8,y:427.4,regY:24.8,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:11.5,x:536.6,y:434.1,regY:24.9,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_4,p:{rotation:11.8,x:542.6,y:443,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:13.9,x:549.9,y:447.5,regY:24.8,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:15.4,x:555.9,y:446.6,regY:24.8,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:15.9,x:571.5,y:433,regY:24.7,scaleX:1.173,scaleY:1.173,regX:41,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:16.9,x:572.5,y:429.4,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:15.9,x:572.5,y:436,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_4,p:{rotation:15.1,x:572.2,y:442.4,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:15.1,x:571.8,y:444.8,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:16.1,x:572,y:438.5,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_4,p:{rotation:19.2,x:575.9,y:413.4,regY:24.8,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:20.4,x:582.5,y:407.2,regY:24.7,scaleX:1.173,scaleY:1.173,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:21.4,x:584.1,y:403.9,regY:24.7,scaleX:1.172,scaleY:1.172,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:21.4,x:583.9,y:405.1,regY:24.7,scaleX:1.172,scaleY:1.172,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:19.2,x:580.7,y:419.3,regY:24.7,scaleX:1.172,scaleY:1.172,regX:40.9,skewX:0,skewY:0}}]},22).to({state:[{t:this.instance_4,p:{rotation:0,x:554.3,y:474.2,regY:24.8,scaleX:1.168,scaleY:1.191,regX:40.9,skewX:14,skewY:13.7}}]},2).to({state:[{t:this.instance_4,p:{rotation:5.4,x:531.4,y:478.9,regY:24.8,scaleX:1.171,scaleY:1.171,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:4.4,x:524.4,y:477.9,regY:24.7,scaleX:1.171,scaleY:1.171,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:3.4,x:522.5,y:477.6,regY:24.7,scaleX:1.171,scaleY:1.171,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:0,x:528,y:477.6,regY:24.8,scaleX:1.17,scaleY:1.172,regX:40.9,skewX:5.8,skewY:4.9}}]},3).to({state:[{t:this.instance_4,p:{rotation:21.7,x:586.4,y:409,regY:24.7,scaleX:1.055,scaleY:1.055,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:21.7,x:589.6,y:403.2,regY:24.7,scaleX:1.055,scaleY:1.055,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:21.7,x:590.7,y:407.7,regY:24.7,scaleX:1.055,scaleY:1.055,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:21.7,x:594.7,y:473,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:21.7,x:595.1,y:478,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:21.7,x:610.2,y:464.1,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:21.7,x:611.2,y:461.8,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{rotation:21.7,x:616.4,y:473.5,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:21.7,x:618.8,y:471.2,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:20.6,x:618.6,y:477.9,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},15).to({state:[{t:this.instance_4,p:{rotation:18.1,x:611.5,y:487.6,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_4,p:{rotation:12.8,x:589.6,y:486.5,regY:24.8,scaleX:1.004,scaleY:1.004,regX:40.8,skewX:0,skewY:0}}]},2).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_5,p:{x:418.3,y:425.4}}]},2).to({state:[{t:this.instance_5,p:{x:418.1,y:426.6}}]},2).wait(3));

	// FRD_MODEL_part_049
	this.instance_6 = new lib.FRD_MODEL_part_044("single",0);
	this.instance_6.setTransform(502.4,433.9,1,1,0,0,0,80,32.2);

	this.instance_7 = new lib.FRD_MODEL_part_026("single",0);
	this.instance_7.setTransform(548.5,477.5,0.999,0.999,7.1,0,0,41.2,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{rotation:0,x:502.4,y:433.9,scaleX:1,scaleY:1,regY:32.2,regX:80,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_6,p:{rotation:1.3,x:501.3,y:438.6,scaleX:1,scaleY:1,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:3.6,x:504.7,y:445.7,scaleX:1,scaleY:1,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:6.9,x:502.6,y:471.6,scaleX:0.999,scaleY:0.999,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:11.6,x:502.9,y:489.6,scaleX:0.999,scaleY:0.999,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:11.6,x:503.5,y:493,scaleX:0.999,scaleY:0.999,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:11.6,x:503.9,y:494.7,scaleX:0.999,scaleY:0.999,regY:32.2,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:11.6,x:505.5,y:498,scaleX:1.013,scaleY:1.013,regY:32.3,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:11.6,x:509.1,y:498.3,scaleX:1.024,scaleY:1.024,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:11.6,x:513.8,y:494.3,scaleX:1.04,scaleY:1.04,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:12.1,x:528.9,y:480.6,scaleX:1.088,scaleY:1.088,regY:32.3,regX:80.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:12.1,x:541.3,y:457.7,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.1,y:452,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.6,y:449,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.4,y:450.6,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.3,y:451.7,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.6,y:449.2,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},27).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.8,y:448.2,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:12.1,x:542.5,y:450.2,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:13.1,x:540.7,y:455.8,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:14.7,x:543.2,y:475.2,scaleX:1.123,scaleY:1.123,regY:32.4,regX:80.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:18.2,x:550.2,y:482.7,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:18.2,x:550.4,y:481.5,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:18.2,x:550.7,y:479.7,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:18.2,x:550.9,y:478.5,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:18.2,x:550.4,y:481.5,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},38).to({state:[{t:this.instance_6,p:{rotation:18.2,x:549.7,y:487.1,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:18.2,x:549.4,y:488.9,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:18.2,x:549.3,y:485.8,scaleX:1.174,scaleY:1.174,regY:32.2,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:14.2,x:538.7,y:455.3,scaleX:1.174,scaleY:1.174,regY:32.3,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:10.6,x:537.6,y:440.2,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:9.4,x:538.3,y:433.5,scaleX:1.173,scaleY:1.173,regY:32.3,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:9.4,x:537.9,y:435.9,scaleX:1.173,scaleY:1.173,regY:32.3,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:11.5,x:535.3,y:442.5,scaleX:1.173,scaleY:1.173,regY:32.3,regX:80,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_6,p:{rotation:11.8,x:541.4,y:451.6,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:13.9,x:548.3,y:455.9,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:15.4,x:554.1,y:455,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:15.9,x:569.6,y:441.5,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:16.9,x:570.5,y:437.8,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:15.9,x:570.7,y:444.4,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_6,p:{rotation:15.1,x:570.4,y:450.8,scaleX:1.173,scaleY:1.173,regY:32.4,regX:79.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:15.1,x:570,y:453.2,scaleX:1.173,scaleY:1.173,regY:32.4,regX:79.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:16.1,x:570.1,y:446.8,scaleX:1.173,scaleY:1.173,regY:32.4,regX:79.9,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_6,p:{rotation:19.2,x:573.5,y:421.7,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:20.4,x:580,y:415.5,scaleX:1.173,scaleY:1.173,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:21.4,x:581.5,y:412.2,scaleX:1.172,scaleY:1.172,regY:32.3,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:21.4,x:581.3,y:413.4,scaleX:1.172,scaleY:1.172,regY:32.3,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:19.2,x:578.4,y:427.7,scaleX:1.172,scaleY:1.172,regY:32.3,regX:80,skewX:0,skewY:0}}]},22).to({state:[{t:this.instance_6,p:{rotation:0,x:552.8,y:482.8,scaleX:1.168,scaleY:1.191,regY:32.4,regX:80,skewX:14,skewY:13.7}}]},2).to({state:[{t:this.instance_6,p:{rotation:5.4,x:531.1,y:487.5,scaleX:1.171,scaleY:1.171,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:4.4,x:524.3,y:486.6,scaleX:1.171,scaleY:1.171,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:3.4,x:522.6,y:486.3,scaleX:1.171,scaleY:1.171,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:0,x:527.7,y:486.3,scaleX:1.17,scaleY:1.172,regY:32.4,regX:80,skewX:5.8,skewY:4.9}}]},3).to({state:[{t:this.instance_6,p:{rotation:21.7,x:583.9,y:416.5,scaleX:1.055,scaleY:1.055,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:21.7,x:587.1,y:410.6,scaleX:1.055,scaleY:1.055,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:21.7,x:588.2,y:415.1,scaleX:1.055,scaleY:1.055,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:21.7,x:592.5,y:480,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:21.7,x:592.9,y:485,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:21.7,x:608,y:471.1,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:21.7,x:609,y:468.8,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_6,p:{rotation:21.7,x:614.1,y:480.5,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:21.7,x:616.6,y:478.2,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:20.6,x:616.5,y:485,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},15).to({state:[{t:this.instance_6,p:{rotation:18.1,x:609.7,y:494.7,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_6,p:{rotation:12.8,x:588.5,y:493.7,scaleX:1.004,scaleY:1.004,regY:32.4,regX:80,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_7,p:{regX:41.2,rotation:7.1,x:548.5,y:477.5,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regX:41.1,rotation:3.9,x:515.1,y:455.3,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_7,p:{regX:41.1,rotation:1.3,x:506,y:440.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regX:41.1,rotation:1.1,x:502.2,y:429.4,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{regX:41.1,rotation:0,x:502.3,y:425.6,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_7,p:{regX:41.1,rotation:0,x:502.1,y:426.8,scaleX:1,scaleY:1}}]},2).wait(3));

	// FRD_MODEL_part_049
	this.instance_8 = new lib.FRD_MODEL_part_045("single",0);
	this.instance_8.setTransform(500.1,431.2,1,1,0,0,0,141.7,21.7);

	this.instance_9 = new lib.FRD_MODEL_part_044("single",0);
	this.instance_9.setTransform(548,484.5,0.999,0.999,7.1,0,0,80.2,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{rotation:0,x:500.1,y:431.2,scaleX:1,scaleY:1,regX:141.7,regY:21.7,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_8,p:{rotation:1.3,x:499.1,y:435.8,scaleX:1,scaleY:1,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:3.6,x:502.6,y:442.8,scaleX:1,scaleY:1,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:6.9,x:500.7,y:468.6,scaleX:0.999,scaleY:0.999,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:11.6,x:501.3,y:486.5,scaleX:0.999,scaleY:0.999,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:11.6,x:501.9,y:489.9,scaleX:0.999,scaleY:0.999,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:11.6,x:502.3,y:491.6,scaleX:0.999,scaleY:0.999,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:11.6,x:503.9,y:494.7,scaleX:1.013,scaleY:1.013,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:11.6,x:507.4,y:494.9,scaleX:1.024,scaleY:1.024,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:11.6,x:512.1,y:490.9,scaleX:1.04,scaleY:1.04,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:12.1,x:527.2,y:476.9,scaleX:1.088,scaleY:1.088,regX:141.8,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:12.1,x:539.3,y:454,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.1,y:448.3,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.6,y:445.3,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.4,y:446.9,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.3,y:448,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.6,y:445.5,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},27).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.8,y:444.5,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:12.1,x:540.5,y:446.5,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:13.1,x:538.9,y:451.9,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:14.7,x:541.5,y:471.3,scaleX:1.123,scaleY:1.123,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:18.2,x:548.7,y:478.8,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:18.2,x:548.9,y:477.6,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:18.2,x:549.2,y:475.8,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:18.2,x:549.4,y:474.6,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:18.2,x:548.9,y:477.6,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},38).to({state:[{t:this.instance_8,p:{rotation:18.2,x:548.2,y:483.3,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:18.2,x:547.9,y:485.1,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:18.2,x:547.8,y:482,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:14.2,x:537,y:451.4,scaleX:1.174,scaleY:1.174,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:10.6,x:535.6,y:436.4,scaleX:1.173,scaleY:1.173,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:9.4,x:536.3,y:429.7,scaleX:1.173,scaleY:1.173,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:9.4,x:535.9,y:432.1,scaleX:1.173,scaleY:1.173,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:11.5,x:533.4,y:438.6,scaleX:1.173,scaleY:1.173,regX:141.7,regY:21.7,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_8,p:{rotation:11.8,x:539.4,y:447.6,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:13.9,x:546.5,y:451.9,scaleX:1.173,scaleY:1.173,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:15.4,x:552.4,y:451,scaleX:1.173,scaleY:1.173,regX:141.7,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:15.9,x:567.8,y:437.5,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:16.9,x:568.9,y:433.7,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:15.9,x:568.9,y:440.3,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_8,p:{rotation:15.1,x:568.8,y:446.8,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:15.1,x:568.4,y:449.2,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:16.1,x:568.4,y:442.9,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.9,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_8,p:{rotation:19.2,x:572.1,y:417.5,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:20.4,x:578.6,y:411.2,scaleX:1.173,scaleY:1.173,regX:141.6,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:21.4,x:580.2,y:408,scaleX:1.172,scaleY:1.172,regX:141.6,regY:21.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:21.4,x:580,y:409.2,scaleX:1.172,scaleY:1.172,regX:141.6,regY:21.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:19.2,x:576.9,y:423.5,scaleX:1.172,scaleY:1.172,regX:141.6,regY:21.7,skewX:0,skewY:0}}]},22).to({state:[{t:this.instance_8,p:{rotation:0,x:550.9,y:478.7,scaleX:1.168,scaleY:1.191,regX:141.6,regY:21.8,skewX:14,skewY:13.7}}]},2).to({state:[{t:this.instance_8,p:{rotation:5.4,x:528.7,y:483.9,scaleX:1.171,scaleY:1.171,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:4.4,x:521.8,y:483,scaleX:1.171,scaleY:1.171,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:3.4,x:520,y:482.7,scaleX:1.171,scaleY:1.171,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:0,x:525.2,y:482.6,scaleX:1.17,scaleY:1.172,regX:141.6,regY:21.8,skewX:5.8,skewY:4.9}}]},3).to({state:[{t:this.instance_8,p:{rotation:21.7,x:582.7,y:412.6,scaleX:1.055,scaleY:1.055,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:21.7,x:585.9,y:406.8,scaleX:1.055,scaleY:1.055,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:21.7,x:587,y:411.3,scaleX:1.055,scaleY:1.055,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:21.7,x:591.4,y:476.4,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:21.7,x:591.8,y:481.4,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:21.7,x:606.9,y:467.4,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:21.7,x:607.9,y:465.1,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{rotation:21.7,x:613,y:476.8,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:21.7,x:615.5,y:474.5,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:20.6,x:615.3,y:481.5,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.9,skewX:0,skewY:0}}]},15).to({state:[{t:this.instance_8,p:{rotation:18.1,x:608.3,y:491.2,scaleX:1.004,scaleY:1.004,regX:141.5,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{rotation:12.8,x:586.9,y:490.3,scaleX:1.004,scaleY:1.004,regX:141.6,regY:21.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_9,p:{regX:80.2,rotation:7.1,x:548,y:484.5,scaleX:0.999,scaleY:0.999,regY:32.2}}]},1).to({state:[{t:this.instance_9,p:{regX:80,rotation:3.9,x:515,y:462.5,scaleX:0.999,scaleY:0.999,regY:32.2}}]},1).to({state:[{t:this.instance_9,p:{regX:80,rotation:1.3,x:506.1,y:447.2,scaleX:1,scaleY:1,regY:32.2}}]},1).to({state:[{t:this.instance_9,p:{regX:80,rotation:1.1,x:502.4,y:436.7,scaleX:1,scaleY:1,regY:32.3}}]},1).to({state:[{t:this.instance_9,p:{regX:80,rotation:0,x:502.6,y:432.7,scaleX:1,scaleY:1,regY:32.2}}]},2).to({state:[{t:this.instance_9,p:{regX:80,rotation:0,x:502.4,y:433.9,scaleX:1,scaleY:1,regY:32.2}}]},2).wait(3));

	// FIZ_34BACK_part_017
	this.instance_10 = new lib.FRD_MODEL_part_045("single",0);
	this.instance_10.setTransform(546,481.5,0.999,0.999,7.1,0,0,141.7,21.7);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(211).to({startPosition:0,_off:false},0).wait(1).to({regX:141.6,rotation:3.9,x:512.9,y:459.5},0).wait(1).to({regX:141.7,scaleX:1,scaleY:1,rotation:1.3,x:503.9,y:444.4},0).wait(1).to({rotation:1.1,x:500.1,y:433.7},0).wait(2).to({rotation:0,x:500.3,y:430},0).wait(2).to({x:500.1,y:431.2},0).wait(3));

	// FRD_MODEL_part_062
	this.instance_11 = new lib.FRD_MODEL_part_043("single",0);
	this.instance_11.setTransform(505,599.9,1,1,0,0,0,156.5,187.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(1).to({rotation:1.3,x:500.2,y:604.6},0).wait(1).to({rotation:3.6,x:496.9,y:611.4},0).wait(1).to({regX:156.4,scaleX:1,scaleY:1,rotation:6.9,x:485.4,y:636.5},0).wait(1).to({regX:156.3,rotation:11.6,x:472,y:652.5},0).wait(1).to({x:472.5,y:655.9},0).wait(2).to({x:472.9,y:657.6},0).wait(2).to({scaleX:1.01,scaleY:1.01,x:474.2,y:662.9},0).wait(2).to({regX:156.4,scaleX:1.02,scaleY:1.02,x:477.4,y:665.1},0).wait(2).to({regX:156.3,scaleX:1.04,scaleY:1.04,x:481.5,y:663.7},0).wait(1).to({regX:156.2,scaleX:1.09,scaleY:1.09,rotation:12.1,x:493.5,y:657.4},0).wait(1).to({regX:156.3,scaleX:1.12,scaleY:1.12,x:504.8,y:640.2},0).wait(1).to({x:505.5,y:634.5},0).wait(1).to({x:506,y:631.5},0).wait(2).to({x:505.9,y:633.1},0).wait(1).to({x:505.8,y:634.2},0).wait(27).to({x:506.1,y:631.7},0).wait(2).to({x:506.2,y:630.7},0).wait(2).to({x:505.9,y:632.7},0).wait(2).to({rotation:13.1,x:500.9,y:637.5},0).wait(2).to({rotation:14.7,x:498.6,y:655.8},0).wait(1).to({regX:156.2,scaleX:1.17,scaleY:1.17,rotation:18.2,x:492,y:668.6},0).wait(1).to({x:492.2,y:667.4},0).wait(2).to({x:492.5,y:665.6},0).wait(2).to({x:492.7,y:664.4},0).wait(38).to({x:492.2,y:667.4},0).wait(1).to({x:491.5,y:673},0).wait(1).to({x:491.2,y:674.8},0).wait(2).to({x:491.1,y:671.7},0).wait(2).to({regX:156.3,rotation:14.2,x:493.9,y:644.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:10.6,x:504.6,y:631.9},0).wait(1).to({rotation:9.4,x:509.5,y:626},0).wait(2).to({x:509.1,y:628.4},0).wait(8).to({regY:187.6,rotation:11.5,x:499.5,y:633.6},0).wait(2).to({rotation:11.8,x:504.3,y:642.3},0).wait(1).to({regY:187.7,rotation:13.9,x:504.4,y:645.4},0).wait(1).to({rotation:15.4,x:505.1,y:643.1},0).wait(1).to({regY:187.6,rotation:15.9,x:519,y:629.1},0).wait(2).to({regY:187.7,rotation:16.9,x:516.6,y:624.6},0).wait(7).to({rotation:15.9,x:520.2,y:632.1},0).wait(1).to({rotation:15.1,x:522.7,y:639.3},0).wait(1).to({x:522.3,y:641.7},0).wait(5).to({rotation:16.1,x:518.9,y:634.4},0).wait(1).to({rotation:19.2,x:512.4,y:606.2},0).wait(2).to({regY:187.6,rotation:20.4,x:514.8,y:598.5},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:21.4,x:513.1,y:594.1},0).wait(2).to({x:512.9,y:595.3},0).wait(22).to({rotation:19.2,x:517.2,y:612.2},0).wait(2).to({regY:187.7,scaleX:1.17,scaleY:1.19,rotation:0,skewX:14,skewY:13.7,x:507.6,y:674.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:5.4,skewX:0,skewY:0,x:515.5,y:681},0).wait(2).to({rotation:4.4,x:512.1,y:680.4},0).wait(2).to({regX:156.4,rotation:3.4,x:514.1,y:680.3},0).wait(3).to({regX:156.3,scaleX:1.17,scaleY:1.17,rotation:0,skewX:5.8,skewY:4.9,x:510.7,y:679.9},0).wait(2).to({regY:187.6,scaleX:1.06,scaleY:1.06,rotation:21.7,skewX:0,skewY:0,x:521.7,y:579.8},0).wait(1).to({x:524.9,y:574},0).wait(2).to({x:526,y:578.5},0).wait(2).to({regX:156.4,regY:187.7,scaleX:1,scaleY:1,x:533.2,y:635.6},0).wait(1).to({x:533.6,y:640.6},0).wait(2).to({regX:156.5,regY:187.6,x:548.9,y:626.6},0).wait(1).to({x:549.9,y:624.3},0).wait(2).to({regX:156.4,regY:187.7,x:554.9,y:636},0).wait(2).to({x:557.3,y:633.7},0).wait(15).to({regX:156.3,rotation:20.6,x:560.1,y:641.6},0).wait(2).to({regX:156.4,rotation:18.1,x:560.5,y:653.7},0).wait(2).to({regX:156.5,rotation:12.8,x:554.2,y:656.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:7.1,x:529.8,y:649.4},0).wait(1).to({regX:156.3,rotation:3.9,x:506.2,y:628},0).wait(1).to({regX:156.5,scaleX:1,scaleY:1,rotation:1.3,x:504.9,y:613.2},0).wait(1).to({regY:187.6,rotation:1.1,x:501.9,y:602.4},0).wait(2).to({regY:187.7,rotation:0,x:505.2,y:598.7},0).wait(2).to({x:505,y:599.9},0).wait(3));

	// FRD_MODEL_part_064
	this.instance_12 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_12.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({regY:9.6,skewX:1.3,skewY:181.4,x:587.4,y:436,startPosition:40},0).wait(1).to({regX:125.2,skewX:3.6,skewY:183.7,x:590.5,y:446.5,startPosition:42},0).wait(1).to({regX:125,regY:9.5,scaleX:1,scaleY:1.01,skewX:-7.5,skewY:180.5,x:591.2,y:478.3,startPosition:43},0).wait(1).to({scaleX:1,scaleY:1,skewX:5.2,skewY:185.3,x:589.8,y:507.3,startPosition:75},0).wait(1).to({scaleX:1,scaleY:1,skewX:-0.4,skewY:179.4,x:592.4,y:510.4,startPosition:76},0).wait(2).to({skewX:-4.9,skewY:174.9,x:592.7,y:512.1},0).wait(2).to({scaleX:1.01,scaleY:1.01,skewX:-8,skewY:171.8,x:596,y:513},0).wait(2).to({scaleX:1.02,scaleY:1.02,skewX:-0.4,skewY:179.4,x:600.2,y:515.9},0).wait(2).to({regX:125.2,scaleX:1.22,scaleY:1.11,skewY:163.2,x:606.1,y:512.3,startPosition:84},0).wait(1).to({regX:124.9,scaleX:1.1,scaleY:1.02,skewX:4.7,skewY:192.9,x:625.4,y:500.2,startPosition:78},0).wait(1).to({regX:125,regY:9.4,scaleX:1.12,scaleY:1.08,skewY:187.4,x:640.8,y:477.8,startPosition:109},0).wait(1).to({regY:9.5,scaleX:1.12,scaleY:1.12,skewY:184.8,x:641.6,y:472.1},0).wait(1).to({x:642.1,y:469.1,startPosition:110},0).wait(2).to({x:641.9,y:470.8,startPosition:111},0).wait(1).to({x:641.8,y:471.9},0).wait(1).to({startPosition:112},0).wait(2).to({startPosition:113},0).wait(2).to({startPosition:114},0).wait(2).to({startPosition:115},0).wait(2).to({startPosition:109},0).wait(2).to({startPosition:110},0).wait(2).to({startPosition:111},0).wait(2).to({startPosition:112},0).wait(2).to({startPosition:113},0).wait(2).to({startPosition:114},0).wait(2).to({startPosition:115},0).wait(2).to({startPosition:109},0).wait(2).to({startPosition:110},0).wait(2).to({x:642.1,y:469.4},0).wait(2).to({x:642.3,y:468.4},0).wait(2).to({x:642,y:470.4},0).wait(2).to({regX:124.9,scaleX:1.13,scaleY:1.08,skewX:7.1,skewY:190.7,x:639.9,y:477.8,startPosition:78},0).wait(2).to({regX:125,regY:9.6,scaleX:1.16,scaleY:0.97,skewX:7.2,skewY:202.8,x:641.6,y:499.9},0).wait(1).to({regX:124.9,regY:9.4,scaleX:1.18,scaleY:1.17,skewX:-12.6,skewY:158.9,x:651,y:510.8,startPosition:79},0).wait(1).to({regY:9.5,scaleX:1.17,skewY:167.2,x:650.2,y:512.1},0).wait(2).to({x:651,y:507.3},0).wait(2).to({x:651.3,y:505.5},0).wait(38).to({regX:125,regY:9.4,skewX:-15.9,skewY:163.9,x:651.4,y:511.6},0).wait(1).to({regX:124.9,scaleX:1.17,scaleY:1.17,skewX:-19.6,skewY:160.2,x:656.5,y:512.2},0).wait(1).to({skewX:-23.2,skewY:156.6,x:657.1,y:512.3},0).wait(2).to({skewX:-19.6,skewY:160.2,x:656.1,y:510.9},0).wait(2).to({scaleX:1.17,scaleY:1.17,skewX:-2.6,skewY:177.2,x:634.8,y:477.4,startPosition:85},0).wait(1).to({regX:125,regY:9.3,skewX:-9.2,skewY:170.6,x:640.7,y:448.6,startPosition:86},0).wait(1).to({regX:124.9,regY:9.4,scaleY:1.17,skewX:-7.6,skewY:169.4,x:641.7,y:439.8,startPosition:80},0).wait(2).to({regX:125,scaleY:1.17,skewX:-10.4,x:641.2,y:442.2},0).wait(8).to({regY:9.5,scaleX:1.17,scaleY:1.17,skewX:-8.3,skewY:171.5,x:638.3,y:452.7,startPosition:86},0).wait(2).to({regY:9.3,skewX:-3.9,skewY:175.9,x:644.3,y:462.2,startPosition:87},0).wait(1).to({regX:124.8,regY:9.5,scaleX:1.11,skewX:8.9,skewY:187.5,x:653.7,y:472.1,startPosition:88},0).wait(1).to({regX:124.9,regY:9.3,scaleX:1.17,scaleY:1.07,skewX:5.5,skewY:181.7,x:656.2,y:472,startPosition:81},0).wait(1).to({regX:125,regY:9.4,scaleX:1.17,scaleY:1.17,skewX:-3.9,skewY:175.9,x:671.5,y:459.5},0).wait(2).to({regY:9.5,skewX:-4.1,skewY:175.7,x:672.1,y:457.7},0).wait(7).to({scaleX:1.17,skewX:-0.6,skewY:182,x:672.6,y:462.4},0).wait(1).to({regY:9.4,scaleX:1.17,scaleY:1.17,skewX:5.9,skewY:186,y:467.4},0).wait(1).to({scaleX:1.17,scaleY:1.17,skewX:10.1,skewY:190.2,x:672.2,y:469.7},0).wait(5).to({skewX:-3.6,skewY:176.2,x:685.4,y:462.6,startPosition:89},0).wait(1).to({regY:9.5,scaleX:1.17,scaleY:1.17,skewX:18.9,skewY:204.2,x:674.8,y:449.6,startPosition:82},0).wait(2).to({regY:9.4,scaleY:1.17,skewX:25.3,skewY:205.4,x:680.6,y:445.6},0).wait(1).to({skewX:27.4,skewY:207.5,x:681.6,y:444.1},0).wait(2).to({skewX:26.3,skewY:206.4,x:681.4,y:445.3},0).wait(22).to({regX:125.1,skewX:24,skewY:204.1,x:679.6,y:455.5},0).wait(2).to({regX:125,regY:9.3,scaleX:1.16,scaleY:1.27,skewX:31.9,skewY:206.2,x:656,y:500.6,startPosition:83},0).wait(1).to({regY:9.4,scaleX:1.17,scaleY:1.1,skewX:13.7,skewY:190.4,x:635.9,y:490.5},0).wait(2).to({regX:125.2,regY:9.3,scaleX:1.31,scaleY:1.04,skewX:8,skewY:189.4,x:629,y:487.7},0).wait(2).to({regX:125,regY:9.5,scaleX:1.29,scaleY:1.03,skewX:4.9,skewY:188.3,x:627.5,y:485.7},0).wait(3).to({regY:9.4,scaleX:1.16,scaleY:1.08,skewX:8.5,skewY:189.9,x:632.5,y:488.3},0).wait(2).to({regY:9.3,scaleX:1.2,scaleY:1.05,skewX:26.6,skewY:177.7,x:674,y:445.5,startPosition:89},0).wait(1).to({regY:9.4,scaleX:1.05,skewY:206.7,x:677.1,y:439.7,startPosition:82},0).wait(2).to({x:678.2,y:444.2},0).wait(2).to({scaleX:1,scaleY:1,x:678.1,y:507.7},0).wait(1).to({x:678.5,y:512.7},0).wait(2).to({x:693.6,y:498.8},0).wait(1).to({x:694.6,y:496.5},0).wait(2).to({regY:9.3,x:699.8,y:508.1},0).wait(2).to({x:702.2,y:505.8},0).wait(15).to({skewX:23.2,skewY:203.3,x:702.7,y:511.1},0).wait(2).to({skewX:20.2,skewY:200.3,x:696.9,y:516.8},0).wait(2).to({regY:9.4,skewX:47.7,skewY:227.8,x:676.1,y:517.9,startPosition:83},0).wait(1).to({regX:124.9,regY:9.6,skewX:3.1,skewY:183.2,x:640.1,y:490.2,startPosition:47},0).wait(1).to({regX:125,regY:9.5,skewX:3.9,skewY:184,x:601,y:463.6,startPosition:40},0).wait(1).to({scaleX:1,scaleY:0.96,skewX:10.3,skewY:181.4,x:592.1,y:444.4,startPosition:2},0).wait(1).to({scaleY:1,skewX:1.1,skewY:181.2,x:588.4,y:433.5},0).wait(2).to({skewX:0,skewY:180,x:588.5,y:428.1},0).wait(2).to({x:588.3,y:429.3},0).wait(3));

	// Layer 12
	this.instance_13 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_13.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0000FF").s().p("AgOAWQgCgDAAgOQAAgeAQAAQARAAAAAXQAAAJgEAGIgIALQAIACgPAAQgLAAgBgEg");
	this.shape_54.setTransform(491.4,410.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{rotation:0,x:418.1,y:426.6,startPosition:2,regX:127.8,scaleX:1,scaleY:1,regY:6.8,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_13,p:{rotation:1.3,x:417.3,y:429.4,startPosition:40,regX:127.8,scaleX:1,scaleY:1,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:3.6,x:411,y:437.7,startPosition:42,regX:127.7,scaleX:1,scaleY:1,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:26.1,x:405.3,y:457.2,startPosition:43,regX:127.7,scaleX:0.998,scaleY:0.998,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:11.6,x:421.4,y:469.7,startPosition:75,regX:127.8,scaleX:0.999,scaleY:0.999,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:18.9,x:417.3,y:471.5,startPosition:76,regX:127.8,scaleX:0.999,scaleY:0.999,regY:6.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:24,x:417.7,y:473.2,startPosition:76,regX:127.8,scaleX:0.999,scaleY:0.999,regY:6.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:26.2,x:418.1,y:476.1,startPosition:76,regX:127.8,scaleX:1.012,scaleY:1.012,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:18.9,x:420.7,y:476.2,startPosition:76,regX:127.8,scaleX:1.024,scaleY:1.024,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:18.9,x:424,y:471.9,startPosition:84,regX:127.8,scaleX:1.04,scaleY:1.04,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:435,y:456.2,startPosition:99,regX:127.7,scaleX:1.104,scaleY:1.028,regY:6.9,skewX:14.9,skewY:5}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:444.5,y:432.6,startPosition:99,regX:127.9,scaleX:1.123,scaleY:1.062,regY:6.9,skewX:14.9,skewY:12.8}}]},1).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.2,y:426.8,startPosition:99,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.7,y:423.8,startPosition:100,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.5,y:425.4,startPosition:101,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:101,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:102,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:103,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:104,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:105,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:99,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:100,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:101,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:102,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:103,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:104,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:105,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:99,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.4,y:426.5,startPosition:100,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.7,y:424,startPosition:100,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.9,y:423,startPosition:100,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:14.9,x:445.6,y:425,startPosition:100,regX:127.8,scaleX:1.122,scaleY:1.122,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:444.2,y:428.9,startPosition:100,regX:127.7,scaleX:1.131,scaleY:1.085,regY:6.9,skewX:15.9,skewY:8.7}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:452.6,y:442.4,startPosition:100,regX:127.9,scaleX:1.139,scaleY:0.979,regY:7,skewX:12.8,skewY:6.3}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:449.8,y:452,startPosition:79,regX:127.8,scaleX:1.181,scaleY:1.173,regY:6.9,skewX:20.9,skewY:27.8}}]},1).to({state:[{t:this.instance_13,p:{rotation:20.9,x:450,y:450.8,startPosition:79,regX:127.8,scaleX:1.173,scaleY:1.173,regY:6.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:20.9,x:450.6,y:447.2,startPosition:79,regX:127.8,scaleX:1.173,scaleY:1.173,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:20.9,x:451.1,y:444.2,startPosition:79,regX:127.8,scaleX:1.173,scaleY:1.173,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:25.7,x:449.7,y:448.9,startPosition:79,regX:127.7,scaleX:1.173,scaleY:1.173,regY:6.9,skewX:0,skewY:0}}]},38).to({state:[{t:this.instance_13,p:{rotation:30.7,x:448.7,y:445.4,startPosition:79,regX:127.7,scaleX:1.172,scaleY:1.172,regY:6.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:36.7,x:450.6,y:445.7,startPosition:79,regX:127.7,scaleX:1.172,scaleY:1.172,regY:6.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:30.7,x:450.4,y:442.6,startPosition:79,regX:127.7,scaleX:1.172,scaleY:1.172,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:26.7,x:437.2,y:419,startPosition:85,regX:127.8,scaleX:1.172,scaleY:1.172,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:23.1,x:434,y:410.3,startPosition:86,regX:127.8,scaleX:1.172,scaleY:1.172,regY:7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:434,y:406,startPosition:80,regX:127.8,scaleX:1.172,scaleY:1.173,regY:7,skewX:18.8,skewY:21.9}}]},1).to({state:[{t:this.instance_13,p:{rotation:21.9,x:433.7,y:408.3,startPosition:80,regX:127.8,scaleX:1.172,scaleY:1.172,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:24,x:432.1,y:411,startPosition:86,regX:127.7,scaleX:1.172,scaleY:1.172,regY:6.9,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance_13,p:{rotation:24.4,x:438.4,y:419.4,startPosition:87,regX:127.8,scaleX:1.171,scaleY:1.171,regY:7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:16.6,x:445.3,y:419.9,startPosition:88,regX:127.7,scaleX:1.171,scaleY:1.171,regY:7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:453.5,y:416.5,startPosition:81,regX:127.9,scaleX:1.174,scaleY:1.13,regY:7,skewX:18.3,skewY:21.7}}]},1).to({state:[{t:this.instance_13,p:{rotation:28.4,x:469.2,y:402.1,startPosition:81,regX:127.8,scaleX:1.171,scaleY:1.171,regY:7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:31.7,x:470.9,y:396.5,startPosition:81,regX:127.7,scaleX:1.171,scaleY:1.171,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:19.4,x:470.3,y:405,startPosition:81,regX:127.9,scaleX:1.171,scaleY:1.171,regY:6.9,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_13,p:{rotation:15.1,x:469.6,y:412.9,startPosition:81,regX:127.8,scaleX:1.171,scaleY:1.171,regY:6.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:12.6,x:469.2,y:415.4,startPosition:81,regX:127.8,scaleX:1.171,scaleY:1.171,regY:7,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_54},{t:this.instance_13,p:{rotation:28.7,x:470.1,y:407.1,startPosition:89,regX:127.9,scaleX:1.171,scaleY:1.171,regY:6.9,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_13,p:{rotation:0,x:474.6,y:378.4,startPosition:82,regX:127.8,scaleX:1.17,scaleY:1.178,regY:7,skewX:26.6,skewY:19.9}}]},1).to({state:[{t:this.instance_13,p:{rotation:21.2,x:482,y:370.2,startPosition:82,regX:127.8,scaleX:1.17,scaleY:1.17,regY:7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:20.9,x:484.3,y:365.1,startPosition:82,regX:127.7,scaleX:1.17,scaleY:1.17,regY:7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:22.2,x:484.1,y:366.3,startPosition:82,regX:127.7,scaleX:1.17,scaleY:1.17,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:19.9,x:479.3,y:384.5,startPosition:82,regX:127.7,scaleX:1.17,scaleY:1.17,regY:7,skewX:0,skewY:0}}]},22).to({state:[{t:this.instance_13,p:{rotation:0,x:450.8,y:449.1,startPosition:83,regX:127.9,scaleX:1.167,scaleY:1.261,regY:6.9,skewX:-5.1,skewY:2.2}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:424.9,y:469,startPosition:83,regX:127.8,scaleX:1.169,scaleY:1.171,regY:6.9,skewX:2.9,skewY:6.2}}]},1).to({state:[{t:this.instance_13,p:{rotation:5.2,x:417.8,y:470,startPosition:83,regX:127.8,scaleX:1.169,scaleY:1.169,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:415.8,y:471.7,startPosition:83,regX:127.8,scaleX:1.169,scaleY:1.13,regY:7,skewX:6.3,skewY:4.1}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:421.4,y:468.9,startPosition:83,regX:127.7,scaleX:1.167,scaleY:1.17,regY:6.9,skewX:4.8,skewY:5.6}}]},3).to({state:[{t:this.instance_13,p:{rotation:0,x:496.7,y:373.6,startPosition:89,regX:127.8,scaleX:1.139,scaleY:1.053,regY:6.8,skewX:22.4,skewY:44.8}}]},2).to({state:[{t:this.instance_13,p:{rotation:22.4,x:499.9,y:367.9,startPosition:82,regX:127.8,scaleX:1.053,scaleY:1.053,regY:6.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:22.4,x:501,y:372.4,startPosition:82,regX:127.8,scaleX:1.053,scaleY:1.053,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:22.4,x:509.4,y:439.3,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.002,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:22.4,x:509.8,y:444.3,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.002,regY:6.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:22.4,x:524.9,y:430.4,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.002,regY:7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:22.4,x:525.9,y:428.1,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.002,regY:7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:22.4,x:531.1,y:439.7,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.002,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:22.4,x:533.4,y:438.6,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.002,regY:6.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:25.2,x:532.5,y:447.1,startPosition:82,regX:127.7,scaleX:1.002,scaleY:1.002,regY:7,skewX:0,skewY:0}}]},15).to({state:[{t:this.instance_13,p:{rotation:0,x:524.3,y:460.7,startPosition:82,regX:127.8,scaleX:1.002,scaleY:1.004,regY:7,skewX:25.4,skewY:22.1}}]},2).to({state:[{t:this.instance_13,p:{rotation:-13.5,x:500.2,y:467.6,startPosition:83,regX:127.8,scaleX:1.001,scaleY:1.001,regY:7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:7.1,x:465.3,y:466.6,startPosition:47,regX:127.7,scaleX:0.999,scaleY:0.999,regY:6.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:3.9,x:431.5,y:449.4,startPosition:40,regX:127.9,scaleX:0.999,scaleY:0.999,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:421.9,y:438,startPosition:2,regX:127.7,scaleX:1,scaleY:0.94,regY:6.8,skewX:-6.4,skewY:1.3}}]},1).to({state:[{t:this.instance_13,p:{rotation:1.1,x:418.2,y:427.6,startPosition:2,regX:127.7,scaleX:1,scaleY:1,regY:6.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_13,p:{rotation:0,x:418.3,y:425.4,startPosition:2,regX:127.8,scaleX:1,scaleY:1,regY:6.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_13,p:{rotation:0,x:418.1,y:426.6,startPosition:2,regX:127.8,scaleX:1,scaleY:1,regY:6.8,skewX:0,skewY:0}}]},2).wait(3));

	// FIZ_34BACK_part_017
	this.instance_14 = new lib.Freddy_Headclip_SomePeople("synched",0);
	this.instance_14.setTransform(495,295.9,1,1,0,0,0,494.9,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(1).to({regX:505.9,regY:446,rotation:1,x:503.8,y:450.4,startPosition:1},0).wait(1).to({scaleX:1,scaleY:1,rotation:4.3,x:506.5,y:458.6,startPosition:2},0).wait(1).to({regX:500,regY:431.6,scaleX:1,scaleY:1,rotation:9.1,x:498.8,y:470.6,startPosition:3},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.2,x:497.3,y:489.9,startPosition:4},0).wait(1).to({x:497.5,y:496.3,startPosition:5},0).wait(2).to({rotation:16.2,x:496.2,y:498.9,startPosition:7},0).wait(2).to({scaleX:1.01,scaleY:1.01,rotation:17.3,x:495.7,y:502.9,startPosition:9},0).wait(2).to({regX:500.1,scaleX:1.02,scaleY:1.02,rotation:17.7,x:498.9,y:501.5,startPosition:11},0).wait(2).to({scaleX:1.04,scaleY:1.04,rotation:19,x:503.6,y:496,startPosition:13},0).wait(1).to({regY:431.4,scaleX:1.09,scaleY:1.09,rotation:16.4,x:523.5,y:480.1,startPosition:14},0).wait(1).to({scaleX:1.12,scaleY:1.12,rotation:16.9,x:535.2,y:449,startPosition:15},0).wait(1).to({rotation:18.5,x:536.3,y:436.4,startPosition:16},0).wait(1).to({x:537.5,y:431.8,startPosition:17},0).wait(2).to({x:537.2,y:435.1,startPosition:19},0).wait(1).to({x:537,y:437.3,startPosition:20},0).wait(27).to({x:537.4,y:433.8,startPosition:47},0).wait(2).to({x:537.9,y:430.8,startPosition:49},0).wait(2).to({x:537.3,y:434.8,startPosition:51},0).wait(2).to({regX:500,rotation:18,x:536.5,y:443.2,startPosition:53},0).wait(2).to({regX:500.1,rotation:17.5,x:540,y:468.4,startPosition:55},0).wait(1).to({regY:431.3,scaleX:1.17,scaleY:1.17,rotation:20,x:544.9,y:484.1,startPosition:56},0).wait(1).to({x:546.3,y:483.1,startPosition:57},0).wait(2).to({x:547.1,y:478.3,startPosition:59},0).wait(2).to({x:547.7,y:474.7,startPosition:61},0).wait(1).to({x:547.9,y:473.5,startPosition:62},0).wait(37).to({x:546.6,y:481.3,startPosition:99},0).wait(1).to({rotation:21.8,x:540.5,y:498.6,startPosition:100},0).wait(1).to({x:540.3,y:503.5,startPosition:101},0).wait(2).to({x:539.6,y:496.6,startPosition:103},0).wait(2).to({regY:431.2,scaleX:1.17,scaleY:1.17,rotation:19.5,x:532.5,y:452.7,startPosition:105},0).wait(1).to({regX:500,scaleX:1.17,scaleY:1.17,rotation:15.2,x:533.5,y:427.1,startPosition:106},0).wait(1).to({rotation:9.6,x:536.8,y:417.9,startPosition:107},0).wait(2).to({rotation:9.4,x:537,y:424.1,startPosition:109},0).wait(8).to({rotation:10.2,x:534.9,y:430.7,startPosition:117},0).wait(2).to({regX:499.9,rotation:13.6,x:539.4,y:439,startPosition:119},0).wait(1).to({rotation:15.7,x:546.8,y:443.3,startPosition:120},0).wait(1).to({rotation:20.8,x:551,startPosition:121},0).wait(1).to({regX:500,scaleX:1.17,scaleY:1.17,rotation:25.3,x:564.3,y:429,startPosition:122},0).wait(2).to({regX:499.9,rotation:27.4,x:566.5,y:422.2,startPosition:124},0).wait(7).to({regY:431.3,rotation:24.5,x:564.3,y:435,startPosition:131},0).wait(1).to({rotation:21.4,x:562.7,y:447.7,startPosition:132},0).wait(1).to({rotation:20.2,x:562.5,y:452.6,startPosition:133},0).wait(5).to({regY:431.2,scaleX:1.17,scaleY:1.17,rotation:23.2,x:564.2,y:433.5,startPosition:138},0).wait(1).to({regX:500.1,scaleX:1.17,scaleY:1.17,rotation:27.5,x:570.5,y:401.7,startPosition:139},0).wait(2).to({regX:500,rotation:28.7,x:577.2,y:395.5,startPosition:141},0).wait(1).to({regX:500.1,rotation:29.7,x:579.1,y:392.1,startPosition:142},0).wait(2).to({x:577.9,y:395.6,startPosition:144},0).wait(22).to({scaleY:1.21,rotation:0,skewX:27.2,skewY:26.2,x:574.4,y:412,startPosition:166},0).wait(2).to({regX:499.9,regY:431.3,scaleX:1.17,scaleY:1.19,skewX:19.8,skewY:19,x:544.8,y:481.1,startPosition:168},0).wait(1).to({regY:431.2,scaleX:1.17,scaleY:1.17,rotation:9.2,skewX:0,skewY:0,x:523.9,y:500.3,startPosition:169},0).wait(2).to({regY:431.3,rotation:3.5,x:518.5,y:499,startPosition:171},0).wait(2).to({rotation:2.4,x:516.2,y:499.2,startPosition:173},0).wait(3).to({regY:431.2,scaleX:1.17,scaleY:1.17,rotation:0,skewY:2.4,x:528.2,y:494.9,startPosition:176},0).wait(2).to({regY:431.3,scaleX:1.05,scaleY:1.05,rotation:27.7,skewY:0,x:580.8,y:404.6,startPosition:178},0).wait(1).to({regY:431.2,rotation:30,x:585,y:392.4,startPosition:179},0).wait(2).to({rotation:31.3,x:586.1,y:397,startPosition:181},0).wait(2).to({scaleX:1,scaleY:1,rotation:30,x:589.5,y:469.5,startPosition:183},0).wait(1).to({x:588.9,y:476.8,startPosition:184},0).wait(2).to({x:604.9,y:456.6,startPosition:186},0).wait(1).to({x:607.4,y:452.7,startPosition:187},0).wait(2).to({x:610.7,y:467.8,startPosition:189},0).wait(2).to({x:613.2,y:464.9,startPosition:191},0).wait(15).to({rotation:30.4,x:612.9,y:471.8,startPosition:206},0).wait(2).to({rotation:26.3,x:605,y:484.7,startPosition:208},0).wait(2).to({regY:431.3,scaleX:1,scaleY:1,rotation:21,x:582.1,y:490.5,startPosition:210},0).wait(1).to({regX:494.9,regY:296.2,scaleX:1,scaleY:1,rotation:7.1,x:556.9,y:353.1,startPosition:211},0).wait(1).to({regX:494.8,rotation:3.9,x:516.1,y:330.5,startPosition:212},0).wait(1).to({regX:494.9,scaleX:1,scaleY:1,rotation:1.3,x:501.3,y:312,startPosition:213},0).wait(1).to({rotation:1.1,x:496.8,y:299.5,startPosition:214},0).wait(2).to({rotation:0,x:495.4,y:293.5,startPosition:216},0).wait(2).to({x:495,y:295.9,startPosition:218},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.5,149.9,360.6,486.6);


(lib.Freddy_Masterclip_ProfFiz = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FRD_MODEL_part_064
	this.instance = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.instance_1 = new lib.Freddy_Headclip_ProfFizcopy("synched",57);
	this.instance_1.setTransform(526,483.3,0.997,0.997,1.8,0,0,504.6,441.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:588.3,y:429.3,startPosition:2,regX:125,regY:9.5}}]}).to({state:[{t:this.instance,p:{scaleX:1.001,scaleY:1.005,skewX:-0.2,skewY:177.2,x:587.4,y:427.5,startPosition:2,regX:125,regY:9.5}}]},3).to({state:[{t:this.instance,p:{scaleX:1.001,scaleY:1.005,skewX:0.8,skewY:178.1,x:586.7,y:432.2,startPosition:2,regX:125,regY:9.5}}]},2).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1.005,skewX:3.8,skewY:-175.8,x:585.5,y:444.6,startPosition:2,regX:125,regY:9.5}}]},2).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1.005,skewX:5.3,skewY:-174.3,x:589.6,y:455.2,startPosition:40,regX:125,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1.005,skewX:6.6,skewY:-173,x:590.2,y:463.8,startPosition:41,regX:125,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:1.005,skewX:8.2,skewY:-171.4,x:593.4,y:469.4,startPosition:42,regX:124.9,regY:9.5}}]},2).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:10.5,skewY:-169.4,x:605.6,y:472.8,startPosition:43,regX:125,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:12,skewY:-167.9,x:614.2,y:475.4,startPosition:34,regX:125,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:13.1,skewY:-166.8,x:618,y:474,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:34,regX:125.1,regY:9.6}}]},2).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:34,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:34,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:34,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:34,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:34,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:14.1,skewY:-165.8,x:619.8,y:472.9,startPosition:44,regX:125.1,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:11.8,skewY:-168.1,x:620.5,y:476,startPosition:34,regX:125.2,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:0.999,scaleY:0.999,skewX:3.3,skewY:-176.6,x:623.7,y:479.3,startPosition:34,regX:125,regY:9.6}}]},2).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,skewX:1.5,skewY:-178.4,x:625,y:484.8,startPosition:34,regX:125,regY:9.6}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,skewX:0.5,skewY:-179.4,x:625.9,y:488.4,startPosition:44,regX:125.2,regY:9.7}}]},1).to({state:[{t:this.instance,p:{scaleX:0.998,scaleY:0.998,skewX:0.5,skewY:-179.4,x:625.1,y:489,startPosition:34,regX:125.2,regY:9.7}}]},2).to({state:[{t:this.instance,p:{scaleX:1.006,scaleY:0.993,skewX:2.3,skewY:-172.7,x:625.4,y:487.4,startPosition:34,regX:125.2,regY:9.7}}]},3).to({state:[]},2).to({state:[{t:this.instance_1,p:{regX:504.6,regY:441.6,rotation:1.8,x:526,y:483.3,startPosition:57,scaleX:0.997,scaleY:0.997}}]},18).to({state:[{t:this.instance_1,p:{regX:495.1,regY:296.4,rotation:1.3,x:519.6,y:339.5,startPosition:58,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_1,p:{regX:505.7,regY:437.9,rotation:3,x:526.5,y:477,startPosition:64,scaleX:0.997,scaleY:0.997}}]},6).to({state:[{t:this.instance_1,p:{regX:507.4,regY:430.7,rotation:6.8,x:538.4,y:450,startPosition:66,scaleX:0.997,scaleY:0.997}}]},2).to({state:[{t:this.instance_1,p:{regX:494.9,regY:296.2,rotation:10.1,x:557.3,y:309.2,startPosition:67,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.instance_1,p:{regX:506.9,regY:440.5,rotation:12.2,x:544.2,y:446.9,startPosition:68,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.6,rotation:10.9,x:539.3,y:457.8,startPosition:74,scaleX:0.996,scaleY:0.996}}]},6).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.4,rotation:6.2,x:540.4,y:475.9,startPosition:76,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.5,rotation:4.9,x:537.3,y:485.5,startPosition:77,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.5,rotation:4.9,x:537.7,y:483.1,startPosition:79,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.instance_1,p:{regX:506.9,regY:440.6,rotation:7.6,x:535.7,y:478.2,startPosition:94,scaleX:0.996,scaleY:0.996}}]},15).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.6,rotation:10.9,x:539.5,y:451.7,startPosition:95,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_1,p:{regX:506.9,regY:440.6,rotation:11.9,x:539.5,y:447.5,startPosition:96,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_1,p:{regX:506.9,regY:440.6,rotation:11.9,x:539.1,y:449.9,startPosition:98,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.instance_1,p:{regX:506.9,regY:440.6,rotation:9.4,x:539.2,y:459.2,startPosition:102,scaleX:0.996,scaleY:0.996}}]},4).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.7,rotation:5.4,x:539.3,y:476.8,startPosition:103,scaleX:0.996,scaleY:0.996}}]},1).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.7,rotation:4.3,x:539.5,y:480.3,startPosition:105,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.7,rotation:3,x:538.5,y:478,startPosition:107,scaleX:0.996,scaleY:0.996}}]},2).to({state:[{t:this.instance_1,p:{regX:506.8,regY:440.7,rotation:2.8,x:538.5,y:476.8,startPosition:108,scaleX:0.996,scaleY:0.996}}]},1).to({state:[]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:-1.4,skewY:178.5,x:595.3,y:438.8,startPosition:60,regX:125,regY:9.5}}]},61).to({state:[{t:this.instance,p:{scaleX:1.002,scaleY:1.003,skewX:5.8,skewY:180,x:593,y:441.1,startPosition:2,regX:124.9,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:1.5,skewY:-178.4,x:591.7,y:441.1,startPosition:2,regX:125,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:1,skewY:-178.9,x:590.7,y:436.5,startPosition:2,regX:125,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:0.5,skewY:-179.4,x:589.6,y:431.9,startPosition:2,regX:125,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:588.6,y:427.3,startPosition:2,regX:125,regY:9.5}}]},1).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:588.3,y:429.3,startPosition:2,regX:125,regY:9.5}}]},2).wait(1));

	// Layer 96
	this.instance_2 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_2.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.instance_3 = new lib.FRD_MODEL_part_041("single",36);
	this.instance_3.setTransform(455.1,459.1,0.999,0.999,0,6.7,10.1,127.9,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:418.1,y:426.6,regY:6.8,startPosition:2,rotation:0}}]}).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:1.001,scaleY:1.005,skewX:-0.2,skewY:2.3,x:417.3,y:424.9,regY:6.8,startPosition:2,rotation:0}}]},3).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1.002,scaleY:1.005,skewX:0.8,skewY:4,x:416.6,y:426.5,regY:6.8,startPosition:2,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1.005,skewX:3.8,skewY:4.1,x:416,y:429.6,regY:6.7,startPosition:2,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1.005,skewX:5.3,skewY:5.6,x:420.5,y:435.8,regY:6.8,startPosition:40,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1.005,skewX:6.6,skewY:6.9,x:421.6,y:440.7,regY:6.8,startPosition:41,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.999,scaleY:1.005,skewX:8.2,skewY:8.5,x:425.5,y:441.5,regY:6.7,startPosition:42,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:439.2,y:438.6,regY:6.8,startPosition:43,rotation:10.5}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:448.9,y:436.7,regY:6.8,startPosition:34,rotation:12}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:453.3,y:432.2,regY:6.8,startPosition:44,rotation:13.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:34,rotation:14.1}}]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:44,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:34,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:44,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:34,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:44,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:34,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:44,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:34,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:44,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:34,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:456.1,y:428.1,regY:6.8,startPosition:44,rotation:14.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:452.9,y:430.8,regY:6.8,startPosition:34,rotation:18.7}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,x:447.1,y:437.8,regY:6.8,startPosition:34,rotation:27}}]},2).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.997,scaleY:0.997,skewX:0,skewY:0,x:445.3,y:443.2,regY:6.8,startPosition:34,rotation:31.4}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:444.1,y:446.8,regY:6.9,startPosition:44,rotation:34.3}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:442.6,y:447.6,regY:6.9,startPosition:34,rotation:34.3}}]},2).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1.007,scaleY:0.998,skewX:31,skewY:23.4,x:446.7,y:448.7,regY:6.9,startPosition:34,rotation:0}}]},3).to({state:[]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:445.1,y:452.9,regY:6.9,startPosition:47,rotation:7.5}}]},17).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1.008,scaleY:0.996,skewX:3.6,skewY:-3.2,x:440.8,y:460.9,regY:6.8,startPosition:36,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:440.4,y:463.8,regY:6.8,startPosition:36,rotation:5.5}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.998,scaleY:1.007,skewX:5.8,skewY:5.5,x:442,y:462,regY:6.9,startPosition:36,rotation:0}}]},6).to({state:[{t:this.instance_2,p:{regX:128,scaleX:0.999,scaleY:0.997,skewX:10.3,skewY:11,x:448.6,y:454.9,regY:6.5,startPosition:37,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:458.9,y:444.4,regY:6.8,startPosition:37,rotation:10.1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,x:460.7,y:435.9,regY:6.8,startPosition:37,rotation:10.8}}]},1).to({state:[{t:this.instance_2,p:{regX:128,scaleX:0.998,scaleY:0.979,skewX:13.5,skewY:13.8,x:451.5,y:446.4,regY:6.8,startPosition:37,rotation:0}}]},6).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:1,scaleY:0.998,skewX:6.8,skewY:10.6,x:451.6,y:468.2,regY:6.7,startPosition:36,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:1,scaleY:0.998,skewX:6.8,skewY:10.6,x:451.8,y:467,regY:6.7,startPosition:36,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:128,scaleX:0.998,scaleY:1.026,skewX:8,skewY:8,x:452.4,y:461.5,regY:6.8,startPosition:36,rotation:0}}]},15).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1.026,scaleY:0.962,skewX:9.6,skewY:5.4,x:455.1,y:448.5,regY:6.9,startPosition:37,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:128,scaleX:1.016,scaleY:0.998,skewX:10.6,skewY:0,x:455.5,y:444.5,regY:6.8,startPosition:37,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:128,scaleX:1.016,scaleY:0.998,skewX:10.6,skewY:0,x:455.3,y:445.7,regY:6.8,startPosition:37,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:1.026,scaleY:0.956,skewX:9.6,skewY:4.9,x:455.1,y:453.3,regY:6.7,startPosition:37,rotation:0}}]},4).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:0.974,scaleY:0.992,skewX:5.4,skewY:-0.1,x:455.2,y:463.9,regY:6.5,startPosition:36,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:128,scaleX:1.016,scaleY:0.998,skewX:6.2,skewY:-4.4,x:455,y:467.3,regY:6.8,startPosition:36,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:1.026,scaleY:0.998,skewX:5,skewY:-8.4,x:454,y:467.9,regY:6.5,startPosition:36,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{regX:127.9,scaleX:1.014,scaleY:0.997,skewX:28.6,skewY:18,x:437.7,y:464.3,regY:6.8,startPosition:48,rotation:0}}]},1).to({state:[]},1).to({state:[{t:this.instance_2,p:{regX:128,scaleX:1.015,scaleY:1.016,skewX:13.2,skewY:2.2,x:441.6,y:409.9,regY:6.9,startPosition:56,rotation:0}}]},59).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:425.2,y:431.5,regY:6.7,startPosition:57,rotation:1.5}}]},2).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1.001,skewX:3.4,skewY:0.6,x:422.8,y:433.8,regY:6.8,startPosition:2,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:421.7,y:433.8,regY:6.7,startPosition:2,rotation:1.5}}]},1).to({state:[{t:this.instance_2,p:{regX:127.7,scaleX:1,scaleY:1,skewX:0,skewY:0,x:420.5,y:430.8,regY:6.8,startPosition:2,rotation:1}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:419.5,y:427.6,regY:6.7,startPosition:2,rotation:0.5}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:418.4,y:424.6,regY:6.8,startPosition:2,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:418.1,y:426.6,regY:6.8,startPosition:2,rotation:0}}]},2).wait(1));

	// FRD_MODEL_part_049
	this.instance_4 = new lib.FRD_MODEL_part_026("single",0);
	this.instance_4.setTransform(502.1,426.8,1,1,0,0,0,41.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({regY:24.7,scaleY:1,skewX:-0.1,x:501.1,y:425},0).wait(2).to({skewX:0.8,skewY:1.1,x:500.5,y:428.1},0).wait(2).to({regY:24.8,skewX:3.8,skewY:4.1,x:499.7,y:435.9},0).wait(1).to({regX:41,skewX:5.3,skewY:5.6,x:504,y:444.2},0).wait(1).to({regY:24.9,skewX:6.6,skewY:6.9,x:504.9,y:451},0).wait(2).to({regY:24.8,scaleX:1,skewX:8.2,skewY:8.5,x:508.5,y:454.1},0).wait(1).to({regX:41.2,scaleY:1,rotation:10.5,skewX:0,skewY:0,x:521.8},0).wait(1).to({regX:41.1,rotation:12,x:530.8,y:454.4},0).wait(1).to({rotation:13.1,x:535,y:451.5},0).wait(2).to({rotation:14.1,x:537.3,y:448.8},0).wait(12).to({x:537.4,y:451.9},0).wait(2).to({rotation:12,x:535.7,y:457.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.3,x:535.8,y:464.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:11,y:469},0).wait(2).to({x:534.3,y:470.7},0).wait(3).to({regY:24.7,rotation:10.2,x:535.5,y:468.2},0).wait(2).to({regY:24.8,scaleX:0.96,scaleY:1,rotation:0,skewX:7.6,skewY:8.3,x:539.5,y:436.5},0).wait(1).to({x:540.3,y:430.2},0).wait(1).to({x:540.6,y:428.4},0).wait(2).to({x:540.4,y:429.6},0).wait(11).to({skewX:6.6,skewY:7.2,x:538.7,y:434.1},0).wait(2).to({scaleX:0.98,skewX:4.2,skewY:4.7,x:527.1,y:459.3},0).wait(1).to({skewX:2.2,skewY:2.7,x:522.7,y:466.3},0).wait(1).to({x:522.5,y:467.5},0).wait(6).to({scaleX:0.98,scaleY:1.01,skewX:2.6,x:524.2,y:465.6},0).wait(2).to({scaleX:0.98,scaleY:1,skewX:5,skewY:5.5,x:535.4,y:454.8},0).wait(1).to({scaleX:0.98,skewX:6.8,skewY:7.3,x:540.9,y:450.7},0).wait(1).to({skewX:7.5,skewY:8,x:542.1,y:447.2},0).wait(6).to({scaleX:0.98,skewX:6.3,skewY:6.8,x:537.1,y:456.1},0).wait(2).to({scaleX:0.98,scaleY:1,skewX:4.8,skewY:5.3,x:535.8,y:468.5},0).wait(1).to({regX:41,skewX:3.5,skewY:4,x:533.5,y:473.8},0).wait(2).to({x:533.7,y:472.6},0).wait(15).to({skewX:4.7,skewY:5.2,x:534,y:469.7},0).wait(1).to({regX:41.1,scaleX:0.98,scaleY:1,skewX:6.3,skewY:6.8,x:537.6,y:452},0).wait(1).to({scaleX:0.98,skewX:7.3,skewY:7.8,x:537.8,y:449.8},0).wait(2).to({x:537.6,y:451},0).wait(4).to({scaleY:1,skewX:6.3,skewY:6.8,y:457.2},0).wait(1).to({skewX:4,skewY:4.5,x:537.7,y:464.5},0).wait(2).to({skewX:2.9,skewY:3.4,x:537.4,y:466.1},0).wait(2).to({regX:41.2,skewX:1.7,skewY:2.2,x:536.5,y:465.2},0).wait(1).to({scaleX:0.98,scaleY:1,skewX:1.5,skewY:2,y:464.2},0).wait(1).to({regX:41.1,scaleX:0.98,x:536.3,y:461.1},0).wait(1).to({regX:41.2,scaleX:0.98,scaleY:1,x:536.2,y:456.1},0).wait(1).to({scaleX:0.97,scaleY:1,skewX:1.3,x:535.9,y:448.9},0).wait(1).to({scaleX:0.96,scaleY:1,skewY:1.8,x:535.6,y:439.8},0).wait(1).to({scaleX:0.95,scaleY:1.01,x:535.2,y:428.7},0).wait(1).to({regY:24.9,scaleX:0.94,scaleY:1.01,skewX:1,x:534.7,y:415.6},0).wait(1).to({scaleX:0.93,scaleY:1.02,skewY:1.7,x:534.1,y:400.4},0).wait(2).to({x:534.3,y:399.2},0).wait(2).to({x:534.1,y:400.4},0).wait(2).to({x:534,y:401},0).wait(45).to({skewX:2,skewY:2.7,x:530.8,y:405.6},0).wait(2).to({regX:41.3,regY:24.8,scaleY:1.01,skewX:3.3,skewY:4,x:527.4,y:417.4},0).wait(2).to({regX:41.1,scaleX:1,scaleY:1,rotation:1.5,skewX:0,skewY:0,x:509.1,y:434},0).wait(1).to({x:506.8,y:436.3},0).wait(1).to({x:505.6},0).wait(1).to({rotation:1,x:504.5,y:432.4},0).wait(1).to({regX:41,rotation:0.5,x:503.4,y:428.7},0).wait(1).to({regX:41.1,rotation:0,x:502.4,y:424.9},0).wait(2).to({x:502.1,y:426.8},0).wait(1));

	// FRD_MODEL_part_049
	this.instance_5 = new lib.FRD_MODEL_part_044("single",0);
	this.instance_5.setTransform(502.4,433.9,1,1,0,0,0,80,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({scaleY:1,skewX:-0.1,x:501.5,y:432.2},0).wait(2).to({skewX:0.8,skewY:1.1,x:500.8,y:435.4},0).wait(2).to({regY:32.1,skewX:3.8,skewY:4.1,x:499.5,y:443.1},0).wait(1).to({skewX:5.3,skewY:5.6,x:503.7,y:451.3},0).wait(1).to({skewX:6.6,skewY:6.9,x:504.5,y:458},0).wait(2).to({scaleX:1,skewX:8.2,skewY:8.5,x:507.8,y:461.3},0).wait(1).to({regY:32.3,scaleY:1,rotation:10.5,skewX:0,skewY:0,x:520.8,y:461.2},0).wait(1).to({rotation:12,x:529.8,y:461.5},0).wait(1).to({rotation:13.1,x:533.8,y:458.6},0).wait(2).to({rotation:14.1,x:536,y:455.9},0).wait(12).to({regX:80.1,x:536.1,y:459.1},0).wait(2).to({regX:80,regY:32.4,rotation:12,x:534.5,y:464.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.3,x:534.7,y:471.7},0).wait(1).to({regY:32.3,scaleX:1,scaleY:1,rotation:11,x:534.9,y:476.1},0).wait(2).to({regX:80.1,regY:32.2,x:533.5,y:477.7},0).wait(3).to({rotation:10.2,x:534.7,y:475.3},0).wait(2).to({regX:80,regY:32.3,scaleX:0.96,scaleY:1,rotation:0,skewX:7.6,skewY:8.3,x:539,y:443.6},0).wait(1).to({x:539.8,y:437.4},0).wait(1).to({x:540.1,y:435.6},0).wait(2).to({x:539.9,y:436.8},0).wait(11).to({skewX:6.6,skewY:7.2,x:538.3,y:441.2},0).wait(2).to({regX:80.1,regY:32.4,scaleX:0.98,skewX:4.2,skewY:4.7,x:527,y:466.6},0).wait(1).to({regY:32.3,skewX:2.2,skewY:2.7,x:522.9,y:473.4},0).wait(1).to({x:522.7,y:474.6},0).wait(6).to({scaleX:0.98,scaleY:1.01,skewX:2.6,x:524.3,y:472.8},0).wait(2).to({scaleX:0.98,scaleY:1,skewX:5,skewY:5.5,x:535.2,y:462},0).wait(1).to({regX:80.2,regY:32.2,scaleX:0.98,skewX:6.8,skewY:7.3,x:540.6,y:457.8},0).wait(1).to({regX:80.1,regY:32.4,skewX:7.5,skewY:8,x:541.6,y:454.4},0).wait(6).to({scaleX:0.98,skewX:6.3,skewY:6.8,x:536.8,y:463.4},0).wait(2).to({regY:32.3,scaleX:0.98,scaleY:1,skewX:4.8,skewY:5.3,x:535.7,y:475.7},0).wait(1).to({skewX:3.5,skewY:4,x:533.5,y:481},0).wait(2).to({x:533.7,y:479.8},0).wait(15).to({skewX:4.7,skewY:5.2,x:533.9,y:476.9},0).wait(1).to({regY:32.4,scaleX:0.98,scaleY:1,skewX:6.3,skewY:6.8,x:537.2,y:459.3},0).wait(1).to({scaleX:0.98,skewX:7.3,skewY:7.8,x:537.3,y:457},0).wait(2).to({x:537.1,y:458.2},0).wait(4).to({scaleY:1,skewX:6.3,skewY:6.8,x:537.2,y:464.4},0).wait(1).to({regY:32.3,skewX:4,skewY:4.5,x:537.6,y:471.7},0).wait(2).to({skewX:2.9,skewY:3.4,x:537.4,y:473.3},0).wait(2).to({regX:80.2,skewX:1.7,skewY:2.2,x:536.7,y:472.4},0).wait(1).to({regY:32.4,scaleX:0.98,scaleY:1,skewX:1.5,skewY:2,x:536.6,y:471.4},0).wait(1).to({regY:32.3,scaleX:0.98,y:468.3},0).wait(1).to({regY:32.2,scaleX:0.98,scaleY:1,x:536.3,y:463.2},0).wait(1).to({regY:32.3,scaleX:0.97,scaleY:1,skewX:1.3,x:536.1,y:456.2},0).wait(1).to({regY:32.2,scaleX:0.96,scaleY:1,skewY:1.8,x:535.8,y:447.1},0).wait(1).to({regX:80.1,regY:32.3,scaleX:0.95,scaleY:1.01,x:535.3,y:436},0).wait(1).to({regX:80.2,scaleX:0.94,scaleY:1.01,skewX:1,x:534.9,y:422.8},0).wait(1).to({regX:80.1,regY:32.5,scaleX:0.93,scaleY:1.02,skewY:1.7,x:534.5,y:407.7},0).wait(2).to({x:534.7,y:406.5},0).wait(2).to({x:534.5,y:407.7},0).wait(2).to({x:534.4,y:408.3},0).wait(45).to({skewX:2,skewY:2.7,x:530.9,y:413},0).wait(2).to({regX:80.2,regY:32.4,scaleY:1.01,skewX:3.3,skewY:4,x:527.4,y:424.8},0).wait(2).to({regX:80,regY:32.2,scaleX:1,scaleY:1,rotation:1.5,skewX:0,skewY:0,x:509.2,y:441.2},0).wait(1).to({x:506.9,y:443.5},0).wait(1).to({x:505.7},0).wait(1).to({rotation:1,x:504.7,y:439.6},0).wait(1).to({rotation:0.5,x:503.8,y:435.8},0).wait(1).to({rotation:0,x:502.7,y:432},0).wait(2).to({x:502.4,y:433.9},0).wait(1));

	// FRD_MODEL_part_049
	this.instance_6 = new lib.FRD_MODEL_part_045("single",0);
	this.instance_6.setTransform(500.1,431.2,1,1,0,0,0,141.7,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({scaleY:1,skewX:-0.1,x:499.2,y:429.5},0).wait(2).to({regY:21.6,skewX:0.8,skewY:1.1,x:498.5,y:432.4},0).wait(2).to({regY:21.7,skewX:3.8,skewY:4.1,x:497.4,y:440.1},0).wait(1).to({skewX:5.3,skewY:5.6,x:501.6,y:448.4},0).wait(1).to({skewX:6.6,skewY:6.9,x:502.5,y:455},0).wait(2).to({regX:141.6,scaleX:1,skewX:8.2,skewY:8.5,x:505.8,y:458.2},0).wait(1).to({regX:141.7,regY:21.8,scaleY:1,rotation:10.5,skewX:0,skewY:0,x:519,y:458},0).wait(1).to({rotation:12,x:528,y:458.3},0).wait(1).to({rotation:13.1,x:532.1,y:455.3},0).wait(2).to({regX:141.8,regY:21.9,rotation:14.1,x:534.5,y:452.7},0).wait(12).to({regY:21.8,x:534.6,y:455.7},0).wait(2).to({rotation:12,x:532.9,y:461.6},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.3,x:533,y:468.5},0).wait(1).to({scaleX:1,scaleY:1,rotation:11,x:533.2,y:473},0).wait(2).to({regX:141.9,regY:21.7,x:531.7,y:474.6},0).wait(3).to({rotation:10.2,x:532.9,y:472.2},0).wait(2).to({regX:141.8,regY:21.8,rotation:7.9,x:536.9,y:442.9},0).wait(1).to({x:537.7,y:436.6},0).wait(1).to({x:538,y:434.8},0).wait(2).to({x:537.8,y:436},0).wait(11).to({rotation:6.9,x:536.1,y:440.6},0).wait(2).to({regY:21.9,scaleX:1,scaleY:1,rotation:4.5,x:525.6,y:463.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.4,x:521.4,y:470.9},0).wait(1).to({x:521.2,y:472.1},0).wait(6).to({scaleX:1,scaleY:1.01,rotation:0,skewX:2.8,skewY:2.4,x:522.7,y:470.3},0).wait(2).to({scaleY:1,rotation:5.2,skewX:0,skewY:0,x:533.9,y:459.4},0).wait(1).to({rotation:7,x:539.2,y:455.2},0).wait(1).to({rotation:7.8,x:540.4,y:451.7},0).wait(6).to({rotation:6.5,x:535.5,y:460.6},0).wait(2).to({rotation:5,x:534.3,y:473.2},0).wait(1).to({rotation:3.7,x:532.1,y:478.3},0).wait(2).to({x:532.3,y:477.1},0).wait(15).to({rotation:5,x:532.5,y:474.2},0).wait(1).to({rotation:6.5,x:535.9,y:456.5},0).wait(1).to({rotation:7.6,x:536,y:454.2},0).wait(2).to({x:535.8,y:455.4},0).wait(4).to({regX:141.9,rotation:6.5,x:535.9,y:461.7},0).wait(1).to({regX:141.8,rotation:4.2,x:536.2,y:469.1},0).wait(2).to({rotation:3.2,x:536,y:470.8},0).wait(2).to({rotation:1.9,x:535.1,y:469.9},0).wait(1).to({regX:141.9,rotation:1.8,y:468.9},0).wait(1).to({regX:141.8,scaleY:1,x:534.9,y:465.9},0).wait(1).to({scaleY:1,x:534.6,y:461},0).wait(1).to({scaleY:1,rotation:0,skewX:1.8,skewY:1.6,x:534.4,y:454.1},0).wait(1).to({scaleY:1,rotation:1.6,skewX:0,skewY:0,x:533.9,y:445.2},0).wait(1).to({scaleY:1.01,rotation:1.5,x:533.4,y:434.4},0).wait(1).to({regY:21.8,scaleY:1.01,rotation:0,skewX:1.5,skewY:1.3,x:532.7,y:421.5},0).wait(1).to({regY:21.9,scaleX:1,scaleY:1.02,skewX:1.4,skewY:1.2,x:532.2,y:406.8},0).wait(2).to({x:532.4,y:405.6},0).wait(2).to({x:532.2,y:406.8},0).wait(2).to({x:532.1,y:407.4},0).wait(45).to({skewX:2.4,skewY:2.2,x:528.7,y:412},0).wait(2).to({skewX:3.7,skewY:3.5,x:525.2,y:423.8},0).wait(2).to({regX:141.7,regY:21.7,scaleX:1,scaleY:1,rotation:1.5,skewX:0,skewY:0,x:507,y:438.3},0).wait(1).to({x:504.7,y:440.6},0).wait(1).to({x:503.5},0).wait(1).to({regX:141.6,regY:21.6,rotation:1,x:502.3,y:436.7},0).wait(1).to({regY:21.7,rotation:0.5,x:501.4,y:433},0).wait(1).to({regX:141.7,rotation:0,x:500.4,y:429.2},0).wait(2).to({x:500.1,y:431.2},0).wait(1));

	// FRD_MODEL_part_062
	this.instance_7 = new lib.FRD_MODEL_part_043("single",0);
	this.instance_7.setTransform(505,599.9,1,1,0,0,0,156.5,187.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(3).to({scaleY:1,skewX:-0.1,x:504.9,y:599.1},0).wait(2).to({skewX:0.8,skewY:1.1,x:501.1,y:602.2},0).wait(2).to({regY:187.6,skewX:3.8,skewY:4.1,x:491.1,y:609.6},0).wait(1).to({regY:187.7,skewX:5.3,skewY:5.6,x:490.7,y:617.6},0).wait(1).to({skewX:6.6,skewY:6.9,x:487.8,y:624},0).wait(2).to({regY:187.6,scaleX:1,skewX:8.2,skewY:8.5,x:486.7,y:626.6},0).wait(1).to({scaleY:1,rotation:10.5,skewX:0,skewY:0,x:493.1,y:624.6},0).wait(1).to({rotation:12,x:497.7,y:624.1},0).wait(1).to({rotation:13.1,x:498.7,y:620.5},0).wait(2).to({regX:156.6,rotation:14.1,x:498,y:617.2},0).wait(12).to({x:498.1,y:620.3},0).wait(2).to({regX:156.5,regY:187.7,rotation:12,x:502.4,y:627.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.3,x:504.5,y:634.6},0).wait(1).to({regX:156.6,regY:187.6,scaleX:1,scaleY:1,rotation:11,x:505.7,y:639.2},0).wait(2).to({x:504.3,y:640.8},0).wait(3).to({rotation:10.2,x:507.9,y:638.8},0).wait(2).to({regX:156.5,rotation:7.9,x:518.4,y:610.4},0).wait(1).to({x:519.2,y:604.1},0).wait(1).to({x:519.5,y:602.3},0).wait(2).to({x:519.3,y:603.5},0).wait(11).to({rotation:6.9,x:520.7,y:608.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:4.5,x:517.3,y:632},0).wait(1).to({regY:187.7,scaleX:1,scaleY:1,rotation:2.4,x:519,y:639.2},0).wait(1).to({x:518.8,y:640.4},0).wait(6).to({regX:156.6,scaleX:1,scaleY:1.01,rotation:0,skewX:2.8,skewY:2.4,x:519.3,y:640.1},0).wait(2).to({regX:156.5,regY:187.6,scaleY:1,rotation:5.2,skewX:0,skewY:0,x:523.2,y:627.3},0).wait(1).to({regX:156.6,rotation:7,x:523.4,y:622.7},0).wait(1).to({regX:156.5,regY:187.7,rotation:7.8,x:522.4,y:619.1},0).wait(6).to({regY:187.6,rotation:6.5,x:521.1,y:628.3},0).wait(2).to({rotation:5,x:524.3,y:641.1},0).wait(1).to({regY:187.7,rotation:3.7,x:525.9,y:646.6},0).wait(2).to({x:526.1,y:645.4},0).wait(15).to({rotation:5,x:522.6,y:642.3},0).wait(1).to({regY:187.6,rotation:6.5,x:521.5,y:624.2},0).wait(1).to({rotation:7.6,x:518.6,y:621.6},0).wait(2).to({x:518.4,y:622.8},0).wait(4).to({regX:156.6,rotation:6.5,x:521.5,y:629.4},0).wait(1).to({regX:156.5,rotation:4.2,x:528.5,y:637.2},0).wait(2).to({rotation:3.2,x:531.4,y:638.9},0).wait(2).to({regX:156.6,rotation:1.9,x:534.3,y:638},0).wait(1).to({rotation:1.8,y:637.1},0).wait(1).to({scaleY:1,x:534.2,y:634.3},0).wait(1).to({regY:187.7,scaleY:1,x:534.1,y:629.7},0).wait(1).to({regY:187.6,scaleY:1,rotation:0,skewX:1.8,skewY:1.6,x:533.9,y:623.1},0).wait(1).to({scaleY:1,rotation:1.6,skewX:0,skewY:0,x:533.8,y:614.7},0).wait(1).to({scaleY:1.01,rotation:1.5,x:533.5,y:604.5},0).wait(1).to({regX:156.5,scaleY:1.01,rotation:0,skewX:1.5,skewY:1.3,x:533.1,y:592.3},0).wait(1).to({regY:187.7,scaleX:1,scaleY:1.02,skewX:1.4,skewY:1.2,x:532.7,y:578.2},0).wait(2).to({x:532.9,y:577},0).wait(2).to({x:532.7,y:578.2},0).wait(2).to({x:532.6,y:578.8},0).wait(45).to({regX:156.6,skewX:2.4,skewY:2.2,x:526.2,y:583.4},0).wait(2).to({regX:156.5,skewX:3.7,skewY:3.5,x:518.9,y:595.1},0).wait(2).to({regX:156.4,scaleX:1,scaleY:1,rotation:1.5,skewX:0,skewY:0,x:507.3,y:607.1},0).wait(1).to({x:504.9,y:609.4},0).wait(1).to({x:503.8},0).wait(1).to({regX:156.3,rotation:1,x:504.1,y:605.6},0).wait(1).to({regX:156.4,rotation:0.5,x:504.7,y:601.7},0).wait(1).to({regX:156.5,rotation:0,x:505.3,y:597.9},0).wait(2).to({x:505,y:599.9},0).wait(1));

	// FRD_MODEL_part_064
	this.instance_8 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_8.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(3).to({scaleX:1,scaleY:1,skewX:-0.1,skewY:177.2,x:587.4,y:427.5},0).wait(2).to({skewX:0.8,skewY:178.1,x:586.7,y:432.2},0).wait(2).to({scaleX:1,skewX:3.8,skewY:184.2,x:585.5,y:444.6},0).wait(1).to({skewX:5.3,skewY:185.7,x:589.6,y:455.2,startPosition:40},0).wait(1).to({skewX:6.6,skewY:187,x:590.2,y:463.8,startPosition:41},0).wait(2).to({regX:124.9,scaleX:1,skewX:8.2,skewY:188.6,x:593.4,y:469.4,startPosition:42},0).wait(1).to({regX:125,regY:9.6,scaleY:1,skewX:10.5,skewY:190.6,x:605.6,y:472.8,startPosition:43},0).wait(1).to({skewX:12,skewY:192.1,x:614.2,y:475.4,startPosition:34},0).wait(1).to({regX:125.1,skewX:13.1,skewY:193.2,x:618,y:474,startPosition:44},0).wait(2).to({skewX:14.1,skewY:194.2,x:619.8,y:472.9,startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({regX:125.2,regY:9.5,skewX:11.8,skewY:191.9,x:620.5,y:476,startPosition:34},0).wait(2).to({regX:125,regY:9.6,skewX:3.3,skewY:183.4,x:623.7,y:479.3},0).wait(1).to({scaleX:1,scaleY:1,skewX:1.5,skewY:181.6,x:625,y:484.8},0).wait(1).to({regX:125.2,regY:9.7,skewX:0.5,skewY:180.6,x:625.9,y:488.4,startPosition:44},0).wait(2).to({x:625.1,y:489,startPosition:34},0).wait(3).to({scaleX:1.01,scaleY:0.99,skewX:2.3,skewY:187.3,x:625.4,y:487.4},0).wait(2).to({regX:125,regY:9.6,scaleX:1,scaleY:1,skewX:3.9,skewY:184,x:619.4,y:452.8,startPosition:45},0).wait(1).to({x:620.2,y:446.6,startPosition:46},0).wait(1).to({skewX:1.6,skewY:181.7,x:620.5,y:444.8,startPosition:35},0).wait(1).to({skewX:3.9,skewY:184},0).wait(1).to({regX:125.1,skewX:1.9,skewY:182,x:620.2,y:446},0).wait(1).to({regX:125,skewX:3.9,skewY:184,x:620.3},0).wait(1).to({regX:125.1,skewX:1.9,skewY:182,x:620.2},0).wait(1).to({regX:125,skewX:3.9,skewY:184,x:620.3},0).wait(1).to({regX:125.1,skewX:1.9,skewY:182,x:620.2},0).wait(1).to({regX:125,skewX:3.9,skewY:184,x:620.3},0).wait(1).to({regX:125.1,skewX:1.9,skewY:182,x:620.2},0).wait(1).to({regX:125,skewX:3.9,skewY:184,x:620.3},0).wait(1).to({regX:125.1,skewX:1.9,skewY:182,x:620.2},0).wait(1).to({regX:125,skewX:3.9,skewY:184,x:620.3},0).wait(1).to({regX:125.1,skewX:1.9,skewY:182,x:620.2},0).wait(1).to({regY:9.7,scaleX:1,scaleY:1,skewX:-0.7,skewY:179.1,x:621.5,y:449.4,startPosition:46},0).wait(2).to({skewX:0.4,skewY:180.5,x:608.5,y:468.8,startPosition:47},0).wait(1).to({scaleX:1,skewX:-0.5,skewY:184.6,x:605.7,y:474,startPosition:36},0).wait(1).to({regX:125.2,regY:9.6,scaleX:1,skewX:-1.4,skewY:178.4,x:604,y:473.9},0).wait(6).to({regY:9.7,scaleX:1,scaleY:1.01,skewX:-1,x:605.6,y:472.2},0).wait(2).to({scaleX:1,scaleY:1,skewX:0.2,skewY:178,x:616.5,y:465.3,startPosition:38},0).wait(1).to({scaleX:1,scaleY:1,skewX:3,skewY:183.1,x:621.4,y:466},0).wait(1).to({skewX:3.7,skewY:183.8,x:622.6,y:461.3},0).wait(6).to({regX:125.1,regY:9.8,scaleX:1,scaleY:0.97,skewX:-0.6,skewY:178.5,x:621.7,y:469.4},0).wait(2).to({regX:125.2,regY:9.7,scaleX:1,scaleY:1,skewX:1,skewY:185,x:616.9,y:478.8,startPosition:36},0).wait(1).to({regX:125.1,regY:9.6,skewX:-0.1,skewY:183.8,x:614.9,y:482.2},0).wait(2).to({skewX:-0.1,x:615.1,y:481},0).wait(15).to({regX:125.2,scaleX:1.01,scaleY:1,skewX:1.8,skewY:189,y:479.9},0).wait(1).to({regX:125,regY:9.7,scaleX:1,scaleY:1,skewX:1.6,skewY:182.3,x:619.8,y:469.5,startPosition:38},0).wait(1).to({regX:125.2,skewX:3.5,skewY:183.6,x:617.5,y:469.3},0).wait(2).to({x:617.3,y:470.5},0).wait(4).to({regY:9.6,scaleX:1,skewX:1.5,skewY:177.8,x:617.7,y:475.2},0).wait(1).to({regY:9.7,scaleX:1,skewX:0.2,skewY:182.3,x:618.4,y:479.4,startPosition:36},0).wait(2).to({scaleX:1,skewX:-0.7,skewY:179.1,y:479.6},0).wait(2).to({regY:9.5,scaleX:1.02,skewX:-1.9,skewY:181.6,x:619.2,y:476.3},0).wait(1).to({regY:9.7,scaleX:1,skewX:-1.8,skewY:178,x:617.7,y:475.8,startPosition:50},0).wait(1).to({scaleY:1,x:617.5,y:472.8,startPosition:51},0).wait(1).to({regY:9.6,scaleY:1,skewY:177.9,x:617.3,y:467.8,startPosition:52},0).wait(1).to({regY:9.7,scaleY:1,skewX:-1.9,skewY:177.7,x:617,y:460.9,startPosition:39},0).wait(1).to({regY:9.6,scaleY:1,skewX:-2.1,x:616.5,y:451.8,startPosition:53},0).wait(1).to({regY:9.7,scaleY:1.01,skewY:177.5,x:616.1,y:440.9,startPosition:39},0).wait(1).to({scaleX:1,scaleY:1.01,skewY:177.4,x:615.6,y:428,startPosition:53},0).wait(1).to({scaleX:1,scaleY:1.02,skewX:-2.4,skewY:177.1,x:614.8,y:412.9,startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({x:615,y:411.7,startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({x:614.8,y:412.9,startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({x:614.7,y:413.5,startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(1).to({startPosition:53},0).wait(1).to({startPosition:39},0).wait(2).to({scaleX:1,skewX:-1.7,skewY:178.4,startPosition:53},0).wait(2).to({scaleX:1,skewX:-2.9,skewY:177.1,startPosition:39},0).wait(27).to({scaleX:1,skewX:-1.8,skewY:178.1,x:611.9,y:413.9,startPosition:58},0).wait(2).to({skewX:-0.6,skewY:179.4,x:607.4,y:433.1,startPosition:59},0).wait(2).to({regX:125,regY:9.5,scaleX:1,scaleY:1,skewX:-1.3,skewY:178.5,x:595.3,y:438.8,startPosition:60},0).wait(1).to({regX:124.9,scaleX:1,scaleY:1,skewX:5.8,skewY:180,x:593,y:441.1,startPosition:2},0).wait(1).to({regX:125,scaleX:1,scaleY:1,skewX:1.5,skewY:181.6,x:591.7},0).wait(1).to({skewX:1,skewY:181.1,x:590.7,y:436.5},0).wait(1).to({skewX:0.5,skewY:180.6,x:589.6,y:431.9},0).wait(1).to({skewX:0,skewY:180,x:588.6,y:427.3},0).wait(2).to({x:588.3,y:429.3},0).wait(1));

	// Layer 12
	this.instance_9 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_9.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(3).to({regX:127.9,scaleX:1,scaleY:1,skewX:-0.1,skewY:2.3,x:417.3,y:424.9},0).wait(2).to({regX:127.8,scaleX:1,skewX:0.8,skewY:4,x:416.6,y:426.5},0).wait(2).to({regY:6.7,scaleX:1,skewX:3.8,skewY:4.1,x:416,y:429.6},0).wait(1).to({regY:6.8,skewX:5.3,skewY:5.6,x:420.5,y:435.8,startPosition:40},0).wait(1).to({skewX:6.6,skewY:6.9,x:421.6,y:440.7,startPosition:41},0).wait(2).to({regY:6.7,scaleX:1,skewX:8.2,skewY:8.5,x:425.5,y:441.5,startPosition:42},0).wait(1).to({regY:6.8,scaleY:1,rotation:10.5,skewX:0,skewY:0,x:439.2,y:438.6,startPosition:43},0).wait(1).to({rotation:12,x:448.9,y:436.7,startPosition:34},0).wait(1).to({rotation:13.1,x:453.3,y:432.2,startPosition:44},0).wait(2).to({regX:127.9,rotation:14.1,x:456.1,y:428.1,startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({startPosition:34},0).wait(1).to({startPosition:44},0).wait(1).to({scaleX:1,scaleY:1,rotation:18.7,x:452.9,y:430.8,startPosition:34},0).wait(2).to({scaleX:1,scaleY:1,rotation:27,x:447.1,y:437.8},0).wait(1).to({regX:127.8,scaleX:1,scaleY:1,rotation:31.4,x:445.3,y:443.2},0).wait(1).to({regY:6.9,scaleX:1,scaleY:1,rotation:34.3,x:444.1,y:446.8,startPosition:44},0).wait(2).to({x:442.6,y:447.6,startPosition:34},0).wait(3).to({scaleX:1.01,rotation:0,skewX:31,skewY:23.4,x:446.7,y:448.7},0).wait(2).to({regX:127.9,regY:6.8,scaleX:1,scaleY:1,rotation:11,skewX:0,skewY:0,x:457.2,y:427,startPosition:45},0).wait(1).to({x:458,y:420.7,startPosition:46},0).wait(1).to({scaleX:1,scaleY:1,rotation:13,x:458.3,y:419,startPosition:35},0).wait(1).to({scaleX:1,scaleY:1,rotation:11,y:418.9},0).wait(1).to({regY:6.9,rotation:12.5,x:458,y:420.3},0).wait(1).to({regY:6.8,rotation:11,x:458.1,y:420.1},0).wait(1).to({regY:6.9,rotation:12.5,x:458,y:420.3},0).wait(1).to({regY:6.8,rotation:11,x:458.1,y:420.1},0).wait(1).to({regY:6.9,rotation:12.5,x:458,y:420.3},0).wait(1).to({regY:6.8,rotation:11,x:458.1,y:420.1},0).wait(1).to({regY:6.9,rotation:12.5,x:458,y:420.3},0).wait(1).to({regY:6.8,rotation:11,x:458.1,y:420.1},0).wait(1).to({regY:6.9,rotation:12.5,x:458,y:420.3},0).wait(1).to({regY:6.8,rotation:11,x:458.1,y:420.1},0).wait(1).to({regY:6.9,rotation:12.5,x:458,y:420.3},0).wait(1).to({rotation:11.7,x:453.3,y:425.9,startPosition:46},0).wait(2).to({scaleX:1,scaleY:1,rotation:7.5,x:445.1,y:452.9,startPosition:47},0).wait(1).to({regX:127.8,regY:6.8,scaleX:1.01,scaleY:1,rotation:0,skewX:3.6,skewY:-3.1,x:440.8,y:460.9,startPosition:36},0).wait(1).to({regX:127.9,scaleX:1,scaleY:1,rotation:5.5,skewX:0,skewY:0,x:440.4,y:463.8},0).wait(6).to({regY:6.9,scaleY:1.01,rotation:0,skewX:5.8,skewY:5.5,x:442,y:462},0).wait(2).to({regX:128,regY:6.5,scaleX:1,scaleY:1,skewX:10.3,skewY:11,x:448.6,y:454.9,startPosition:37},0).wait(1).to({regX:127.9,regY:6.8,scaleX:1,scaleY:1,rotation:10.1,skewX:0,skewY:0,x:458.9,y:444.4},0).wait(1).to({rotation:10.8,x:460.7,y:435.9},0).wait(6).to({regX:128,scaleY:0.98,rotation:0,skewX:13.5,skewY:13.8,x:451.5,y:446.4},0).wait(2).to({regX:127.9,scaleX:1,scaleY:1,skewX:6.7,skewY:10.1,x:455.1,y:459.1,startPosition:36},0).wait(1).to({regY:6.7,scaleX:1,scaleY:1,skewX:6.8,skewY:10.6,x:451.6,y:468.2},0).wait(2).to({x:451.8,y:467},0).wait(15).to({regX:128,regY:6.8,scaleX:1,scaleY:1.03,skewX:8,skewY:8,x:452.4,y:461.5},0).wait(1).to({regX:127.8,regY:6.9,scaleX:1.03,scaleY:0.96,skewX:9.6,skewY:5.4,x:455.1,y:448.5,startPosition:37},0).wait(1).to({regX:128,regY:6.8,scaleX:1.02,scaleY:1,skewX:10.6,skewY:0,x:455.5,y:444.5},0).wait(2).to({x:455.3,y:445.7},0).wait(4).to({regX:127.9,regY:6.7,scaleX:1.03,scaleY:0.96,skewX:9.6,skewY:4.9,x:455.1,y:453.3},0).wait(1).to({regY:6.5,scaleX:0.97,scaleY:0.99,skewX:5.4,skewY:0,x:455.2,y:463.9,startPosition:36},0).wait(2).to({regX:128,regY:6.8,scaleX:1.02,scaleY:1,skewX:6.2,skewY:-4.3,x:455,y:467.3},0).wait(2).to({regX:127.9,regY:6.5,scaleX:1.03,skewX:5,skewY:-8.3,x:454,y:467.9},0).wait(1).to({regY:6.8,scaleX:1.01,scaleY:1,skewX:28.6,skewY:18,x:437.7,y:464.3,startPosition:48},0).wait(1).to({scaleX:1.01,scaleY:1,skewX:5.3,skewY:-5.1,x:454.5,y:457.4,startPosition:49},0).wait(1).to({regX:128,scaleY:0.91,skewX:3.8,skewY:4,x:449.9,y:453.7,startPosition:46},0).wait(1).to({regX:127.9,scaleY:1,skewX:6.3,skewY:-4.1,x:451.4,y:446.2,startPosition:35},0).wait(1).to({scaleY:1,skewX:7.3,skewY:-3.3,x:452.1,y:436.7,startPosition:54},0).wait(1).to({scaleY:1.01,skewX:8.3,skewY:-2.3,x:451,y:424.7,startPosition:35},0).wait(1).to({regY:6.7,scaleY:1.01,skewX:9.5,skewY:-1.1,x:449.5,y:413.1,startPosition:54},0).wait(1).to({regX:128,regY:6.9,scaleY:1.02,skewX:10.9,skewY:0,x:447.9,y:398.3,startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({x:448.3,y:395.1,startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({x:448.1,y:396.3,startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({x:448,y:396.9,startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(1).to({startPosition:54},0).wait(1).to({startPosition:35},0).wait(2).to({regX:127.9,regY:7,scaleX:1.01,scaleY:1.02,skewX:12.2,skewY:1,x:447.9,y:397},0).wait(2).to({regX:128,regY:6.9,scaleX:1.01,scaleY:1.02,skewX:10.9,skewY:0,x:448,y:396.9},0).wait(27).to({skewX:12,skewY:1,x:444.9,y:400,startPosition:55},0).wait(2).to({skewX:13.2,skewY:2.2,x:441.6,y:409.9,startPosition:56},0).wait(2).to({regX:127.8,regY:6.7,scaleX:1,scaleY:1,rotation:1.5,skewX:0,skewY:0,x:425.2,y:431.5,startPosition:57},0).wait(1).to({regY:6.8,scaleY:1,rotation:0,skewX:3.4,skewY:0.6,x:422.8,y:433.8,startPosition:2},0).wait(1).to({regY:6.7,scaleY:1,rotation:1.5,skewX:0,skewY:0,x:421.7},0).wait(1).to({regX:127.7,regY:6.8,rotation:1,x:420.5,y:430.8},0).wait(1).to({regX:127.8,regY:6.7,rotation:0.5,x:419.5,y:427.6},0).wait(1).to({regY:6.8,rotation:0,x:418.4,y:424.6},0).wait(2).to({x:418.1,y:426.6},0).wait(1));

	// FIZ_34BACK_part_017
	this.instance_10 = new lib.Freddy_Headclip_ProfFiz("synched",0);
	this.instance_10.setTransform(495,295.9,1,1,0,0,0,494.9,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({regX:501.3,regY:433.2,rotation:-0.9,x:501.4,y:429.2,startPosition:3},0).wait(2).to({regX:501.4,rotation:-0.3,x:500.1,y:432.2,startPosition:5},0).wait(2).to({scaleX:1,scaleY:1,rotation:2.3,x:497.7,y:439.6,startPosition:7},0).wait(1).to({rotation:5.4,x:501,y:450.2,startPosition:8},0).wait(1).to({rotation:7.4,x:502.1,y:458.7,startPosition:9},0).wait(2).to({rotation:10.5,x:505,y:464.2,startPosition:11},0).wait(1).to({regX:494.9,regY:296.2,rotation:14.7,x:543.9,y:330.2,startPosition:12},0).wait(1).to({regX:495.2,regY:430.4,rotation:17.3,x:519.1,y:459.9,startPosition:13},0).wait(1).to({regX:498.7,regY:434.4,rotation:19.4,x:525.4,y:461.6,startPosition:14},0).wait(2).to({regX:505.9,regY:429.1,rotation:20.6,x:534.7,y:456.4,startPosition:16},0).wait(1).to({startPosition:17},0).wait(11).to({regX:506,scaleX:1,scaleY:1,rotation:19.6,x:535.4,y:459.7,startPosition:28},0).wait(2).to({regX:500.8,regY:433.2,scaleX:1,scaleY:1,rotation:17,x:528.4,y:469.1,startPosition:30},0).wait(1).to({scaleX:1,scaleY:1,rotation:15.5,x:528.6,y:478,startPosition:31},0).wait(1).to({regY:433.4,rotation:14.7,x:528.7,y:483.8,startPosition:32},0).wait(2).to({regY:433.3,rotation:13.4,x:527.9,y:485.5,startPosition:34},0).wait(3).to({regY:433.2,rotation:11.1,x:529.4,y:482.5,startPosition:37},0).wait(2).to({regX:494.9,regY:296.3,rotation:8.1,x:551,y:305.7,startPosition:39},0).wait(1).to({x:552.5,y:293.8,startPosition:40},0).wait(1).to({x:553,y:290.8,startPosition:41},0).wait(2).to({x:552.5,y:293.8,startPosition:43},0).wait(11).to({regX:502.6,regY:439.9,rotation:5.7,x:538.7,y:442.5,startPosition:54},0).wait(2).to({regX:494,regY:434.7,scaleX:1,scaleY:1,rotation:5.3,x:517.6,y:462.6,startPosition:56},0).wait(1).to({regX:504.6,regY:441.6,rotation:1.8,x:526,y:483.3,startPosition:57},0).wait(1).to({regX:495.1,regY:296.4,rotation:1.3,x:519.6,y:339.5,startPosition:58},0).wait(6).to({regX:505.7,regY:437.9,rotation:3,x:526.5,y:477,startPosition:64},0).wait(2).to({regX:507.4,regY:430.7,rotation:6.8,x:538.4,y:450,startPosition:66},0).wait(1).to({regX:494.9,regY:296.2,rotation:10.1,x:557.3,y:309.2,startPosition:67},0).wait(1).to({regX:506.9,regY:440.5,scaleX:1,scaleY:1,rotation:12.2,x:544.2,y:446.9,startPosition:68},0).wait(6).to({regX:506.8,regY:440.6,rotation:10.9,x:539.3,y:457.8,startPosition:74},0).wait(2).to({regY:440.4,rotation:6.2,x:540.4,y:475.9,startPosition:76},0).wait(1).to({regY:440.5,rotation:4.9,x:537.3,y:485.5,startPosition:77},0).wait(2).to({x:537.7,y:483.1,startPosition:79},0).wait(15).to({regX:506.9,regY:440.6,rotation:7.6,x:535.7,y:478.2,startPosition:94},0).wait(1).to({regX:506.8,rotation:10.9,x:539.5,y:451.7,startPosition:95},0).wait(1).to({regX:506.9,rotation:11.9,y:447.5,startPosition:96},0).wait(2).to({x:539.1,y:449.9,startPosition:98},0).wait(4).to({rotation:9.4,x:539.2,y:459.2,startPosition:102},0).wait(1).to({regX:506.8,regY:440.7,rotation:5.4,x:539.3,y:476.8,startPosition:103},0).wait(2).to({rotation:4.3,x:539.5,y:480.3,startPosition:105},0).wait(2).to({rotation:3,x:538.5,y:478,startPosition:107},0).wait(1).to({rotation:2.8,y:476.8,startPosition:108},0).wait(1).to({regY:440.8,x:538.6,y:473.4,startPosition:109},0).wait(1).to({regY:440.7,rotation:2.3,x:538.9,y:467.3,startPosition:110},0).wait(1).to({regX:506.7,rotation:2,x:539.1,y:459.2,startPosition:111},0).wait(1).to({regX:506.8,regY:440.8,rotation:1.3,x:539.6,y:448.6,startPosition:112},0).wait(1).to({regY:440.7,rotation:0.8,x:540.1,y:435.5,startPosition:113},0).wait(1).to({rotation:0,x:540.7,y:420.3,startPosition:114},0).wait(1).to({regX:506.9,regY:440.4,scaleX:1,scaleY:1,rotation:-0.7,x:541.2,y:402.5,startPosition:115},0).wait(2).to({x:541.6,y:400.1,startPosition:117},0).wait(2).to({x:541.2,y:402.5,startPosition:119},0).wait(2).to({x:541,y:403.7,startPosition:121},0).wait(45).to({regX:507.1,rotation:1.1,x:537.8,y:408.5,startPosition:166},0).wait(2).to({rotation:3.6,x:534.3,y:420.5,startPosition:168},0).wait(2).to({regX:501.6,regY:427.1,scaleX:1,scaleY:1,rotation:4.3,x:508.9,y:427.2,startPosition:171},0).wait(1).to({regX:494.8,regY:296.3,rotation:3.6,x:506.2,y:302.6,startPosition:172},0).wait(1).to({regX:505.4,regY:441.1,rotation:2.6,x:507,y:447.5,startPosition:173},0).wait(1).to({regX:494.8,regY:296.2,rotation:1,x:499.3,y:299.4,startPosition:174},0).wait(1).to({regX:494.7,rotation:0.5,x:497,y:296.3,startPosition:175},0).wait(1).to({regX:494.9,rotation:0,x:494.7,y:293.2,startPosition:171},0).wait(2).to({x:495.2,y:294.6,startPosition:173},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.5,149.9,360.6,486.6);


(lib.Freddy_Masterclip_IDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ_34BACK_part_017
	this.instance = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.instance_1 = new lib.Freddy_Headclip_IDLEcopy("synched",109);
	this.instance_1.setTransform(504.7,450.7,0.999,0.999,-6,0,0,505.8,462.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{x:418.1,y:426.6,rotation:0,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]}).to({state:[{t:this.instance,p:{x:418.2,y:426,rotation:0,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]},95).to({state:[{t:this.instance,p:{x:417.9,y:427.8,rotation:0,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]},3).to({state:[{t:this.instance,p:{x:416.6,y:430.9,rotation:1.3,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]},2).to({state:[{t:this.instance,p:{x:416.7,y:429.1,rotation:0,regX:127.7,scaleX:0.998,scaleY:0.935,skewX:-5.2,skewY:0.3,regY:6.8,startPosition:2}}]},1).to({state:[{t:this.instance,p:{x:409.3,y:427.1,rotation:0,regX:127.7,scaleX:0.997,scaleY:1.002,skewX:2.5,skewY:2.7,regY:6.7,startPosition:60}}]},2).to({state:[]},1).to({state:[{t:this.instance_1,p:{x:504.7,y:450.7,startPosition:109,regX:505.8,regY:462.8,scaleX:0.999,scaleY:0.999}}]},5).to({state:[{t:this.instance_1,p:{x:504.3,y:449.4,startPosition:111,regX:505.8,regY:462.8,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_1,p:{x:475.4,y:285.8,startPosition:113,regX:494.9,regY:296.2,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_1,p:{x:474.3,y:285,startPosition:168,regX:494.9,regY:296.2,scaleX:1,scaleY:1}}]},55).to({state:[{t:this.instance_1,p:{x:475.4,y:285.8,startPosition:170,regX:494.9,regY:296.2,scaleX:1,scaleY:1}}]},2).to({state:[]},1).to({state:[{t:this.instance,p:{x:411.8,y:421.9,rotation:4.3,regX:127.7,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.7,startPosition:60}}]},2).to({state:[{t:this.instance,p:{x:416.8,y:425.6,rotation:0,regX:127.5,scaleX:1.001,scaleY:0.981,skewX:-7.1,skewY:0.6,regY:6.8,startPosition:2}}]},1).to({state:[{t:this.instance,p:{x:417.8,y:428.4,rotation:0,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]},1).to({state:[{t:this.instance,p:{x:418,y:427.2,rotation:0,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]},2).to({state:[{t:this.instance,p:{x:418.1,y:426.6,rotation:0,regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:6.8,startPosition:2}}]},1).wait(122));

	// FRD_MODEL_part_064
	this.instance_2 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_2.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(95).to({x:588.4,y:428.7},0).wait(3).to({x:588.1,y:430.5},0).wait(2).to({skewX:1.3,skewY:181.4,x:586.7,y:437.5},0).wait(1).to({skewX:0.3,skewY:180.4,x:585.5,y:439.3},0).wait(2).to({skewX:-0.6,skewY:179.2,x:585.1,y:436.9},0).wait(1).to({x:583.3,y:436.6},0).wait(1).to({regY:9.6,skewX:0,skewY:179.8,x:582.4,y:432.1},0).wait(2).to({skewX:-1.1,skewY:178.7,x:581.3,y:426.6},0).wait(2).to({skewX:-1.8,skewY:178,x:581.5,y:423.5},0).wait(2).to({x:581.1,y:422.2},0).wait(2).to({x:581,y:422.8},0).wait(55).to({scaleY:1.01,skewX:-1.9,x:580.5,y:421.5},0).wait(2).to({scaleY:1,skewX:-1.8,x:581,y:422.8},0).wait(1).to({regY:9.5,skewX:-1.1,skewY:178.7,x:583.2,y:425.4},0).wait(1).to({skewX:-0.6,skewY:179.2,x:585.1,y:427.6},0).wait(1).to({regY:9.6,skewX:-0.1,skewY:179.7,x:586.5,y:429.4},0).wait(1).to({regY:9.5,skewX:0,skewY:180,x:587.4,y:430.4},0).wait(1).to({x:588,y:431.1},0).wait(2).to({x:588.2,y:429.9},0).wait(1).to({x:588.3,y:429.3},0).wait(122));

	// Layer 96
	this.instance_3 = new lib.FRD_MODEL_part_041copy("single",2);
	this.instance_3.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({x:418.2,y:426},0).to({_off:true},3).wait(77).to({x:417.8,y:428.4,_off:false},0).wait(2).to({x:418,y:427.2},0).wait(1).to({x:418.1,y:426.6},0).wait(122));

	// FRD_MODEL_part_049
	this.instance_4 = new lib.FRD_MODEL_part_026("single",0);
	this.instance_4.setTransform(502.1,426.8,1,1,0,0,0,41.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(95).to({x:502.2,y:426.2},0).wait(3).to({x:501.9,y:428},0).wait(2).to({regY:24.7,rotation:1.3,x:500.5,y:433},0).wait(1).to({rotation:0.3,x:499.3,y:436.4},0).wait(2).to({rotation:-0.6,x:498.8,y:435.6},0).wait(1).to({x:497,y:435.2},0).wait(1).to({regY:24.8,rotation:0,x:496.2,y:430},0).wait(2).to({rotation:-1.1,x:495.1,y:426},0).wait(2).to({rotation:-1.8,x:495.3,y:424.1},0).wait(2).to({x:494.9,y:422.8},0).wait(2).to({x:494.8,y:423.4},0).wait(55).to({scaleY:1.01,rotation:0,skewX:-1.9,skewY:-1.8,x:494.4,y:422},0).wait(2).to({scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:494.8,y:423.4},0).wait(1).to({rotation:-1.1,x:497.1,y:425.1},0).wait(1).to({rotation:-0.6,x:498.9,y:426.4},0).wait(1).to({rotation:-0.1,x:500.3,y:427.5},0).wait(1).to({rotation:0,x:501.2,y:428.2},0).wait(1).to({x:501.8,y:428.6},0).wait(2).to({x:502,y:427.4},0).wait(1).to({x:502.1,y:426.8},0).wait(122));

	// FRD_MODEL_part_049
	this.instance_5 = new lib.FRD_MODEL_part_044("single",0);
	this.instance_5.setTransform(502.4,433.9,1,1,0,0,0,80,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(95).to({x:502.5,y:433.3},0).wait(3).to({x:502.2,y:435.1},0).wait(2).to({regY:32.3,rotation:1.3,x:500.6,y:440.3},0).wait(1).to({regY:32.2,rotation:0.3,x:499.6,y:443.6},0).wait(2).to({rotation:-0.6,x:499.2,y:442.8},0).wait(1).to({x:497.4,y:442.5},0).wait(1).to({regY:32.3,rotation:0,x:496.6,y:437.1},0).wait(2).to({regY:32.4,rotation:-1.1,x:495.5,y:433.2},0).wait(2).to({regX:80.1,rotation:-1.8,x:496,y:431.2},0).wait(2).to({x:495.6,y:429.9},0).wait(2).to({x:495.5,y:430.5},0).wait(55).to({regX:80,scaleY:1.01,rotation:0,skewX:-1.9,skewY:-1.8,x:494.9,y:429.3},0).wait(2).to({regX:80.1,scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:495.5,y:430.5},0).wait(1).to({rotation:-1.1,x:497.6,y:432.3},0).wait(1).to({rotation:-0.6,x:499.4,y:433.6},0).wait(1).to({regX:80,rotation:-0.1,x:500.6,y:434.7},0).wait(1).to({regX:80.1,rotation:0,x:501.6,y:435.4},0).wait(1).to({regX:80,regY:32.2,x:502.1,y:435.7},0).wait(2).to({x:502.3,y:434.5},0).wait(1).to({x:502.4,y:433.9},0).wait(122));

	// FRD_MODEL_part_049
	this.instance_6 = new lib.FRD_MODEL_part_045("single",0);
	this.instance_6.setTransform(500.1,431.2,1,1,0,0,0,141.7,21.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(95).to({x:500.2,y:430.6},0).wait(3).to({x:499.9,y:432.4},0).wait(2).to({rotation:1.3,x:498.5,y:437.4},0).wait(1).to({rotation:0.3,x:497.3,y:440.8},0).wait(2).to({rotation:-0.6,x:496.9,y:440},0).wait(1).to({x:495.1,y:439.7},0).wait(1).to({regX:141.6,rotation:0,x:494.2,y:434.3},0).wait(2).to({regX:141.7,rotation:-1.1,x:493.3,y:430.3},0).wait(2).to({rotation:-1.8,x:493.5,y:428.5},0).wait(2).to({x:493.1,y:427.2},0).wait(2).to({x:493,y:427.8},0).wait(55).to({regX:141.8,regY:21.8,scaleY:1.01,rotation:0,skewX:-1.9,skewY:-1.8,x:492.6,y:426.5},0).wait(2).to({regX:141.7,regY:21.7,scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:493,y:427.8},0).wait(1).to({rotation:-1.1,x:495.2,y:429.4},0).wait(1).to({rotation:-0.6,x:496.9,y:430.8},0).wait(1).to({rotation:-0.1,x:498.3,y:431.8},0).wait(1).to({rotation:0,x:499.3,y:432.5},0).wait(1).to({x:499.8,y:433},0).wait(2).to({x:500,y:431.8},0).wait(1).to({x:500.1,y:431.2},0).wait(122));

	// FRD_MODEL_part_062
	this.instance_7 = new lib.FRD_MODEL_part_043("single",0);
	this.instance_7.setTransform(505,599.9,1,1,0,0,0,156.5,187.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(95).to({x:505.1,y:599.3},0).wait(3).to({x:504.8,y:601.1},0).wait(2).to({rotation:1.3,x:499.5,y:606.2},0).wait(1).to({rotation:0.3,x:501.5,y:609.5},0).wait(2).to({rotation:-0.6,x:504.1,y:608.6},0).wait(1).to({x:502.3,y:608.3},0).wait(1).to({rotation:0,x:499.8,y:602.9},0).wait(2).to({rotation:-1.1,x:501.8,y:598.8},0).wait(2).to({regY:187.6,rotation:-1.8,x:504.3,y:596.7},0).wait(2).to({x:503.9,y:595.4},0).wait(2).to({x:503.8,y:596},0).wait(55).to({scaleY:1.01,rotation:0,skewX:-1.9,skewY:-1.8,x:503.7,y:595.8},0).wait(2).to({scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:503.8,y:596},0).wait(1).to({regX:156.6,rotation:-1.1,x:504.2,y:597.8},0).wait(1).to({regX:156.5,rotation:-0.6,x:504.3,y:599.2},0).wait(1).to({rotation:-0.1,x:504.5,y:600.4},0).wait(1).to({rotation:0,x:504.7,y:601.2},0).wait(1).to({regY:187.7,y:601.7},0).wait(2).to({x:504.9,y:600.5},0).wait(1).to({x:505,y:599.9},0).wait(122));

	// FRD_MODEL_part_064
	this.instance_8 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_8.setTransform(588.3,429.3,1,1,0,0,180,125,9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(95).to({x:588.4,y:428.7},0).wait(3).to({x:588.1,y:430.5},0).wait(2).to({skewX:1.3,skewY:181.4,x:586.7,y:437.5},0).wait(1).to({skewX:0.3,skewY:180.4,x:585.5,y:439.3},0).wait(2).to({skewX:-0.6,skewY:179.2,x:585.1,y:436.9},0).wait(1).to({x:583.3,y:436.6},0).wait(1).to({regY:9.6,skewX:0,skewY:179.8,x:582.4,y:432.1},0).wait(2).to({skewX:-1.1,skewY:178.7,x:581.3,y:426.6},0).wait(2).to({skewX:-1.8,skewY:178,x:581.5,y:423.5},0).wait(2).to({x:581.1,y:422.2},0).wait(2).to({x:581,y:422.8},0).wait(55).to({scaleY:1.01,skewX:-1.9,x:580.5,y:421.5},0).wait(2).to({scaleY:1,skewX:-1.8,x:581,y:422.8},0).wait(1).to({regY:9.5,skewX:-1.1,skewY:178.7,x:583.2,y:425.4},0).wait(1).to({skewX:-0.6,skewY:179.2,x:585.1,y:427.6},0).wait(1).to({regY:9.6,skewX:-0.1,skewY:179.7,x:586.5,y:429.4},0).wait(1).to({regY:9.5,skewX:0,skewY:180,x:587.4,y:430.4},0).wait(1).to({x:588,y:431.1},0).wait(2).to({x:588.2,y:429.9},0).wait(1).to({x:588.3,y:429.3},0).wait(122));

	// Layer 12
	this.instance_9 = new lib.FRD_MODEL_part_041("single",2);
	this.instance_9.setTransform(418.1,426.6,1,1,0,0,0,127.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(95).to({x:418.2,y:426},0).wait(3).to({x:417.9,y:427.8},0).wait(2).to({rotation:1.3,x:416.6,y:430.9},0).wait(1).to({regX:127.7,scaleX:1,scaleY:0.94,rotation:0,skewX:-5.1,skewY:0.3,x:416.7,y:429.1},0).wait(2).to({regY:6.7,scaleX:1,scaleY:1,skewX:2.5,skewY:2.7,x:409.3,y:427.1,startPosition:60},0).wait(1).to({regX:127.8,scaleX:1,scaleY:1,rotation:7.2,skewX:0,skewY:0,x:413,y:436.2,startPosition:63},0).wait(1).to({regY:6.8,scaleX:1,scaleY:1,rotation:0,x:412.2,y:430.9,startPosition:65},0).wait(2).to({regX:127.7,scaleY:0.98,rotation:0,skewX:0.2,skewY:-2.5,x:410.7,y:429.5,startPosition:64},0).wait(2).to({regX:127.8,scaleY:1,rotation:-1.8,skewX:0,skewY:0,x:411.4,y:426.8},0).wait(2).to({x:411,y:425.5,startPosition:67},0).wait(2).to({x:410.9,y:426.1,startPosition:66},0).wait(2).to({startPosition:67},0).wait(2).to({startPosition:68},0).wait(2).to({startPosition:67},0).wait(2).to({startPosition:66},0).wait(2).to({startPosition:69},0).wait(2).to({startPosition:66},0).wait(2).to({startPosition:67},0).wait(2).to({startPosition:68},0).wait(2).to({startPosition:67},0).wait(2).to({startPosition:66},0).wait(2).to({startPosition:69},0).wait(2).to({startPosition:66},0).wait(2).to({startPosition:67},0).wait(2).to({startPosition:68},0).wait(2).to({startPosition:67},0).wait(2).to({startPosition:66},0).wait(2).to({startPosition:69},0).wait(21).to({regX:127.5,regY:6.7,scaleY:1.01,rotation:0,skewX:-1.9,skewY:-1.8,x:410.1,y:424.7,startPosition:64},0).wait(2).to({regX:127.7,regY:6.6,scaleY:0.99,skewX:-0.3,skewY:-3.5,x:410.7,y:425.9},0).wait(1).to({regY:6.8,scaleX:1,scaleY:1,skewX:-1.1,skewY:-4.9,x:413.1,y:426.8,startPosition:65},0).wait(1).to({regY:6.7,scaleX:0.95,skewX:-0.6,skewY:-4.7,x:414.3,y:427.2,startPosition:63},0).wait(1).to({scaleX:1,rotation:4.3,skewX:0,skewY:0,x:411.8,y:421.9,startPosition:60},0).wait(1).to({regX:127.5,regY:6.8,scaleX:1,scaleY:0.98,rotation:0,skewX:-7,skewY:0.6,x:416.8,y:425.6,startPosition:2},0).wait(1).to({regX:127.8,scaleX:1,scaleY:1,skewX:0,skewY:0,x:417.8,y:428.4},0).wait(2).to({x:418,y:427.2},0).wait(1).to({x:418.1,y:426.6},0).wait(122));

	// FIZ_34BACK_part_017
	this.instance_10 = new lib.Freddy_Headclip_IDLE("synched",0);
	this.instance_10.setTransform(495,295.9,1,1,0,0,0,494.9,296.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(95).to({x:495.2,y:294.7,startPosition:95},0).wait(3).to({x:494.6,y:298.3,startPosition:98},0).wait(2).to({rotation:1.3,x:496.1,y:303.8,startPosition:100},0).wait(1).to({rotation:0.3,x:492.2,y:308.5,startPosition:101},0).wait(2).to({regX:503.9,regY:453.7,rotation:-1.7,x:500.8,y:463.9,startPosition:103},0).wait(1).to({rotation:-2.9,x:499,y:463.6,startPosition:104},0).wait(1).to({regX:498.2,regY:430.6,scaleX:1,scaleY:1,rotation:-4.1,x:493.3,y:430.9,startPosition:105},0).wait(2).to({regX:505.7,regY:462.9,scaleX:1,scaleY:1,rotation:-4.9,x:503.2,y:454.5,startPosition:107},0).wait(2).to({regX:505.8,regY:462.8,scaleX:1,scaleY:1,rotation:-5.9,x:504.7,y:450.7,startPosition:109},0).wait(2).to({x:504.3,y:449.4,startPosition:111},0).wait(2).to({regX:494.9,regY:296.2,scaleX:1,scaleY:1,x:475.4,y:285.8,startPosition:113},0).wait(55).to({x:474.3,y:285,startPosition:168},0).wait(2).to({x:475.4,y:285.8,startPosition:170},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.6,x:479,y:288.3,startPosition:171},0).wait(1).to({rotation:-3.6,x:482.9,y:290.8,startPosition:172},0).wait(1).to({regX:494.7,scaleX:1,scaleY:1,rotation:-2.3,x:486.6,y:293.4,startPosition:173},0).wait(1).to({regX:494.9,rotation:-1.1,x:490.8,y:296.2,startPosition:174},0).wait(1).to({rotation:0,x:495.1,y:299,startPosition:175},0).wait(2).to({x:494.8,y:297.1,startPosition:177},0).wait(1).to({x:495,y:295.9,startPosition:178},0).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321.5,149.9,360.6,486.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;