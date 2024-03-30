(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Fizzy_Music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,intro_stop:15,action:16,action_stop:284,idle:285,idle_loop:370});

	// BODY
	this.instance = new lib.FIZZYENTER11509("synched",0,false);
	this.instance.setTransform(535.9,243.8);

	this.instance_1 = new lib.Fizzy_DANCE("synched",2);
	this.instance_1.setTransform(252.4,329.5,1,1,0,0,0,88.1,193.7);

	this.instance_2 = new lib.FIZZYIDLE11509("synched",0,false);
	this.instance_2.setTransform(244.7,321);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_2}]},269).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.8,130.4,263.5,554.3);


// symbols:
(lib.FIZZYHEAD11509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AMBCOQAQgVAAgTQgPgqgNAAQgaAAgYAVQgcAagJADQgEABgCgBIgBgHQAHgTA3giQAxggAQgDIAWAPIguASQASgBAJAQQAIANAAATQAAAqgOARQgMAPglAIIAfgjgAsFCHQgRgcAAgQQAAgMAEgNQAHgaATgFIgPgHQgDgBgTAAQgGAAgDgDIgFgHIAHgJQAEgGAHAAQAUAAAYAUQAVARAJATIgHAGQgOgOgDAAQgIAAgJAJQgLALAAASQAAANANAhQAJAZAHAMQgPgJgQgbgACmg+QAAgEhygQQhwgRgoAAQgoAAhPAGIihAUIgDAAIABgTQAfgFBUgLQB1gQCFAJQB+AIBFAcIgBARgABriEQhFgPhAgDIhUgCQiAAAhPAJQgoAEgOAEIgKAAIAAgSQAWgHAPgDQBDgNCCAAQDsAABZAuIABANIAAACQgDgBhFgQg");
	this.shape.setTransform(-0.2,34.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4D3232").s().p("AMQK9QANgOATgDIAIACIgcAcQgDADgaAGQAGgGALgQgAroJgQgFgJgRgWQgFgHgBgGIABgFIAAgCIAAAAIAAgBQALABAIAJQAHAJAAANIAQAggAMYJdQgCgUALgLIAUgUIAGAGQgJAdgFAGQgIAGgKAMgAtTIhQAAgKAHgCIAHAHQAYAqANALQABAFADACIgEACQgZgTgagmgAsfHVIACAOQgrgWgBgtIAHAGIAhArIgJgaIASAmIgBAIgAMIHbIgBgJQAAgGANgXQAOgZAMgJQAGADAGAFQghA7gNALIgEgGgAubGHQAAgGACgDIAGgDIAlBQIgDABQgMAAgehFgAN0G+QACgFAPgQQAQgQAHgCQgRAhgHAGIgKAJQgFgCgBgHgAr1GbQgEgTADgCQAFAAABgCQACABAPAqIgCAKgAMZE6QAEgMAgguQAJACABAGQgEAKgTAVQgTAUgGACgAr+E1QgIgGgFgSQgFgRAAgOQAAgKAKgRQAFALAEAhQAEAbAAANgAtWEDQgEgIgDgRQgCgNAAgKQAAgMAJgTIAFAKQAFAwAAARQAAAGgDAEIgEACgALLDhQAcgwABgBQAIANgMARQgKAPgQAJgAreCLQgMgJAAgeQAAgRADgOQAEgPAFAAIAHAAIgBAAQADAtgCAwgAh1iyQgIgXgGg+IACgQIADAEQAPAWAJASQATAhAAAlQAAAHgBABIgDABIABAAIgHABQgQAAgIgXgAkqkAQgPgLgMgNQgQgPgTghIgTgiIAIgDQAUAOAcArQAZAnAcAPQgBALgCABQgHAAgSgOgAgumGQAAgJADgGQAGAFAKAVQAIASAEALIAGApIgIAKIgDAEQgMgTgOhMgAknl4QgHgIg0hXQALAFAfAkIApAxQgEABgMAGIgDABQgDAAgCgDgAjFnnIAJADQAQAKANAWQALATAAALIgBATQgCALgCACQgcgQgQhRgAn7nKQgZgugBgRQAjApAZApQASAeABAAQgKAAAKAMQgYgIgdg1gAi1pmQAAgKAIgSQATAwAAAUQAAAHgEACIgGACQgNgMgEgngAlWo3QgPgEgUgdQgYgjADgmQAhAlAPAfQAKAVAAAMIAAAGgAhMp0IAFheQAIAGACAFQADAFAAALIABBDg");
	this.shape_1.setTransform(-1,-52.4);

	// shading
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AqZAbICEgZIAAA5IhxANgAI3BBIAAg6IBjASIgKAnQgDAHgLAAgAA3giQiEgIh0APQhUALgfAFIABgrIAKABQAOgFAogEQBOgJCBAAIBSADQBCACBFAPQBEAQADACIgBAhQhFgah/gIg");
	this.shape_2.setTransform(-7.6,26.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6A17D").s().p("AjORCQAAh7BBjXQBVkUCQjgQBXh9Apg/QA2hRAPgwIAegDIAkA8IgWgJQg3BsgcA0QghA9g/BrQhGB4grBZQgXAyg7CpQg9CqggB0IgOAzIAFAAIgHAHQgOAvAFgYIAFgUIgwAkgAGiAPQgIgLgHgsQAKgDAcgZQAYgVAaAAQANAAAPApQAAAUgQAUIgfAiQgMACgKAAQgXAAgJgNgAnZw9QgZgHgUgRQAmgRA4AIQA8ALAbAAQAXAAAogKQgUAPghAKQgpANgvAAQgkAAgWgGg");
	this.shape_3.setTransform(26.3,49.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#69494B").s().p("AKFNxIAlg9IgmABQgfAAgHgCQgGgDgBgMQAAgEAOgaIADAJQAKgMAIgGQAFgGAIgeQAHgLAFgOQAMgUAyhFQAHgFARgiIAOgYIAAgCQgVAGgiAIIghAHQgMAAgQgDQgUgEAAgHQgBgPAnhEIAphHQgfAQgbAFQgTAFgaAAQgNAAgKgCIgBgCQgCgCAAgGQAAgLAOgaQAQgzANiFIADgNIAUAXQAFARAABNQgKAfAAARQAAAGAPAGIACABQA+gtAXggIAqg6IABAEQABBRgrBoQgrBYAAACQAAAHAFAEQAFADAHAAIAxgVQAygcAIgnIAAAhQAAB1hGBkQgTAbgfAhQgVAYAAAEQAAAKAGgBIALADQAYAFBCg7QgbBXgqArQgNAOgNAHQgJAFgCAAIghgCgAnYA7QgWgJgcgQQAYgIAQgHIAKgGQAOAAAZAQQAcASAMADIg+APIAAAAIgRgGgAjCAMQANgbAAgwQABgMgIhBIgHgpQgHghgPh1QgMhhgIhIIgBgaIAVjPIAigvIgJCcIgDA0QgBBMAhDTQAgDGAAAFQABBzhoAWQAcgRAMgagArnnOQgHgKgVgnQgXgpgXgjIAKhAQAeBdA6BJQAvA7AcAJQhJgKgagjgApHoyQgvhEgQiRQAKgJAYgwQATC6A4BMQASAaAZAPQAZANAIAFQgCAJgKAAQhEAAgqg8gAliqnQgehXABglQAFgOARgkQASgkAJAJIgBBUQAABQALA/QALA9AQAWQgZgRgghcg");
	this.shape_4.setTransform(16.8,-69.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC767").s().p("AgNAmQgPgegJgHIArhFQAKAMAKAaQAIAVAEAQIgmA+QgBgGgMgZg");
	this.shape_5.setTransform(54.1,-80.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6870B0").s().p("AhcBFIAkg5QAOARALAXQAMAZAAAOQAAAOgZAggAAuhAIgXgfQADgBAWgoIAtA/IgfArQgIgVgIgNg");
	this.shape_6.setTransform(53.8,-79.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C7C9").s().p("AkeDxQAEgFAOgUQAPgTAGgMQARANATAiQARAdAAAJIgDAVQgDAAgEADIgFAEQhVg9AIAEgABhAtQgUgKgBgTQgQAGgSAAQgbABgNgVQAkgeAagdIATgUQAFABACgDIAAAEQAAAHAHABIAPABQAeAAAMgLQAHgFADgOIAHgCQAHgDAAgHQAAgGgFgJQgMgRgggWQASgVA8gXQAvgTAAgYQAAgigfgKIABgCIAIgCQAeAIANAdQAIATAEAYQAEAYgdAQIgwAZQABACAnAUQAWAMAAAlQAAAignAJIg7AFQAGAtgKASQgLAVgnAAQgOAAgNgGgAg7hBQADgCANgWQAOgXAGgNIgFgEQgcAGgSgMIghgaQgIgEgsgMQglgIgSgSQASgUAQADQAIACAMAHIASAAQARgCAPgDQANAnAaAMQAYAMAogMQgDAmARAVQASARAYgFIAEgBQAAAEgQAWQgVAcghAmg");
	this.shape_7.setTransform(67,-89.1);

	// fill
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4D3232").s().p("AgDgBQAEABAEACIgDAAQgCgBgDgCg");
	this.shape_8.setTransform(-28.2,-120.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AgqRcQgogMgvgtQgGhsiUk4QiUk4jhkjQAFgGgGAHIgEgFQgFgEgGAAQgWAAgRAaQgRAbgfAAQgKAAgJgCQglgTgPgZQgKgPgLgsQgRhFgChEQgDhDAeg2QATAIAvBMQA1BVAvBrQAHgEACgJIgfhEIAdADIgSg6IBJgKQAQgDAAgIIgBgzQgCgrgCAAIhuAYQgThGgHgxQgFgmAAgvQAAiIAkhtQAfhfBGhhQBGhgA0gqQAzgqCsg3QAlgRA4AIQA8ALAbAAQAXAAApgKQBhgPBwAsQBxAtBfBcQBmBhA5CBQBACNAACeQAABYgjBwIh0gZIgMANIAABPQARAMARADIBCAJIgVBGIAggDQArgDAugpQAKgIAyg4QAbgdAcgqQAWgbAiAAQAPAAALATQAQAcAAA7QAABzg3BFQgxA+hAAAQgRAAgegfQgigogQgQIgXgIQg3BsgcA0QghA9g/BrQhGB4grBZQgXAyg9CpQg9CqggB0IgOAzIAFAAIgHAGQgNAwAEgYIAFgUIgvAjIgbABQgpAAgVgGgArujMICDgZIAAA5IhwANgAHiilIAAg7IBiASIgKAnQgDAHgKAAg");
	this.shape_9.setTransform(0.9,49.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#825454").s().p("AJNPYIgBgCIAviBQAVhMgBiPQgCiPgjhbQgjhahNhsQhNhtiDhMQiYhXh4AJIABAAIAOglQAMgdAQAAQBLAABqAuQBpAuByBQQAZARAsA3QAmAvANAXQANAWAKAFQAGADAWAAQA2AAAjgeQAhgdAVg/IADgOIATAXQAGARAABNQgKAfAAARQAAAGAOAGIADACQA+guAXggIAqg6IABAEQAABRgrBoQgqBYAAACQAAAHAFAEQAFADAGAAIAygVQAygcAHgnIABAhQAAB1hHBkQgTAbgeAhQgWAYAAAEQAAAKAHgBIALADQAYAFBBg7QgbBXgpArQgNAOgNAHQgJAFgCAAIghgCQgxAphQBiQg3BCggAAIgHAAgArAPHQgHgLgDgHIARgCQAKAgAAAFIgBAAQgHgFgJgMgAsCMaQgOhKgDgwIADgwIAAAAIAPiSQgEgSADgDQAEABABgDQAXiVCDirQCHiuB5gaQAYgJAQgHIAKgGQAOAAAZAQQAcASALADIg9AQQjRA2hXB5QhYB5gkBUQglBUgDBEIgBALIgICTIAQAgIgQgMIAfC2IgZAGIAAAAQgGAAgNhGgAtcLrQgmgohEhoQAKAOAbAHIAaAFIANAAQACACAAgKQAAgCgRgfQgXgngRgnQgXg1gHgzQgEgegEhAIgBgVQAwBXAOAVQATAcAcgCIgFgxIgKgxQgIgrAAggIAQiLQAJAWAZAfQAZAeAMAHIAQiKQAJhDAQgsQAlBDAoAqQAsAwAagKQhEBZg6CJQg5CHAABCIABARIgHBzQABAGACABIgEADQACA2AFA/QgggRgWgXgAkFhhQhpg2hcheQhfhhgzhvQg5h6ALhxIAJhBQAeBdA7BJQAvA7AbAJIANAAIACgBQABgCAAgGQAAgKgVg4IgMgnQgDgGgBgWIgCgcQAAgWAHhAQAIhFAHggQAKgKAYgwQATC6A3BMQATAaAZAPQAZANAIAGIAHAAQAAgrAUhTQAUhTAfhUQAEgNASgkQASglAJAJIgBBUQAABQALA/QAKA9AQAWQADABACAEQABABAFAAQANAAAMgjIAsiFIAjgwIgJCcIgEA0QAABMAfDTQAgDGAAAFQAAB1hlAWIgKABQhTAAhlg1gAkXpfIACAAQgEgEgGgBQADAEAFABg");
	this.shape_10.setTransform(0.1,-59.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0FF7A").s().p("ABcBbQgPgegJgHQgOgXhMgoQhUgsgnACQAQgTAYgaQAXgYABAAQAggBBEAiQBPAmAPAiQAKAMAKAYQAIAUAFATIgoA+QgBgGgNgZg");
	this.shape_11.setTransform(43.3,-85.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8089DD").s().p("AB2B5IhwhUQhZgngUAHQALgFARgVIATgVQAcAABCAcQBUAhAgAtQAOARALAXQAMAZAAAOQAAAOgZAggAkHBWQgCg6gCgLIgljMIABgBQA7gEAOBrQAHCAAPAtgAECgMIgXgfQgfgjgcgSQgtgdhWgcIAfgiQAbgGBLAuQBEArAOAUIAtA/IgfApQgIgUgIgMg");
	this.shape_12.setTransform(32.6,-84.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AioFxQh5g9gLgDIhEgYQglgOAAgSQAAgNA2gkQAxAAA/AdQBHAhAnA0QARANATAiQARAdAAAIIgDAWQgDAAgEACIgFAFQhVg9AIADgADXCtQgUgJgBgUQgQAHgSAAQgbAAgNgUQAkggAagdIATgUQAFAAACgCIAAAEQAAAHAHABIAPABQAeAAAMgLQAHgFADgOIgEAAIgTAHQgVACgQgLQgPgLgCgQIgWACQgbAAgMgHQgJgHAAgRQAAgFAFgVQAGgUAAgEIgNgBQgxAQgKAAQgYAAgMgLQgMgMgFghIgIABIgIAFQgTAKgeAAQgWAAgKgdIgIgFIAIAEIgBgEIgDgEIgBgPQgCgNAAgOIACgIIgBgLQgBAAgCgGQgFAGgIAUQgJAUAAAHQAAALAKAhIggAlIgagLQgIgEAAgIIAGgQQAGgRAFgHIgGgDIgMAAQhNABgCgiQgNglAkgqQAjgqAEAEQADADgGgJQgGgIAAghQAAghAbgTQAcgUAgABQAfACANAKIAOAKQADAAAJgFIAUgLQAQgKAYgJQAYgKApAFQApAFASAnQASAngEAGQgDAGAJALIABgEQAIAEAZgKQAZgJAoASQApARAJAcQAKAdgzA6QAAAYAZgBQAOAAAggEQAeAJANAdQAIASAEAZQAEAYgdAQIgwAZQABACAnAUQAWAKAAAkQAAAjgnAJIg7AFQAGAvgKASQgLAVgnAAQgOAAgNgHgAA5A+QglgngmgVQgOgGhcglIAcghQASgVAQAEQAIACAMAHIASAAQARgCANgDQANAnAaAMQAYALAogLQgDAkATAUQASASAYgFIAEgBQAAAEgQAWQgVAcgjAmg");
	this.shape_13.setTransform(55.2,-102);

	// outline
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AghZMQgogLgvguIAAAEQgHgBgIABQgEgBgDgJQgPgvgdhRQgihehBiOIhKieQgbg6haiQQhaiQhhiBIg5ArQgQALgLAAQiIAAAAkoQAAgTAQgxQANgrAGgLQg+ghg3haQgvhNAAgmQAAgGACgJQAqAsAEADQAGABASAKQgSgcgUhBQghhoAAhkQAAgNAEgiQAEgoAGgQQAEAIAbA/QAbA+AbAvIAAgDQgLg2AAhCQAAijAngnIAfBKQAFALAQASIALiAQALg/AvhCQAqBmAiAtQAjAsAVAEQAWADAvgoQAwgpAhgZQAhgaAbgNQA0gcAqgPQjFiPhIh8QhIh8gFhpQgFhpAMg7QANg8ABAWQAiA1AtBSQAxBaAYATQgHghgMghQgIgjAAhaQAAhRAfhHQAfhHAjAAQAbBqAVBIQAqCLAlAQQALigA0h6QAthpAiAAIARACQANDaAEAyQADAMACAYIADgQQAXhOA1hLQAzhLAFAaQACgIAAAKIAAAHIgBgBIgKBLQgGAzAAARQAACEAHBhQALBLAAAKQAggHAGAAQApAAAPBIQANBzAOBTQAUgQBQhQQBfhgBFhNQgbgKgGgGQgKgJAAgXQABgKACgPQg4gEgUgaQgMgPAAgZQABgFAIgWQAKgdALgLQAWgVAEgOQAEgKADghQAKg3ArgZQAegRAkAAQAJAAAMAHQAMAHALAAQAVAAAigSQAjgSAjAFQAkAFAeAQQAfAPAXBDIAggGQAMgDAHAAQAgAAAfAZQAmAcAAAqQAAAegFAMQgCADgSATIANgBQAhgHAhAlQAiAkAAAtQAAAngTASQgJAKgbAKQAYAFAKASQAHANgBAWQABAggWAVQgZAXgrgCQgNgNgCAcIgFAqQgHAQgTAJQgQAHgRAAQgJAAgRgEQgDgBgVgOIgWgPQgGAAgJAEQgJAEgGAAQgSAAgQgGIgOgHQhTB0gzBbQgjBEgDADQBXBdAmA6QASAbAIAAQApAAAugyQA3g6AFhQQAbAUATA6QARA3ABA1IgBAXQAegPAXglQAHgMAwhaQAVAVAAAjQAABBgMBDQgPBPgcAnIADgBQALgMAggmQAcggAMAAQAKAAAAADQADAgAAAKQAABPgRA9QgXBRg4BCQA8ghABgGIAEAEIAGAOQAEAegmBBQgnA/gpAiQAYAiAFAOQAGARAAAjQAAB8gqBTQgwBghXAAQgrAAgTgMQgMgJgug0Ii+FNQhcChgMAmIgnBpQgkBcgYA/QgXBAgdBkQgYBIgdARIgHAGQgOAwAFgYIAEgUIgvAjIgaABQgpAAgVgHgAsBI/QgmgSgOgZQAQAiAkAJIAAAAg");
	this.shape_14.setTransform(0.1,0);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-101.2,-161.9,202.7,323.9);


(lib.FIZFRONTCOLLAR002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AilDUIgCgJQANhaAMhtQABhCACg0QADhkAQAAQA8AABSAiQBUAkA+AyQhxBLg8BeQg+BgAAAoQgSAEghAAQgaAAgVgDg");
	this.shape.setTransform(67.1,24.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AgiDRQgrgMgRgyQgSgyhYhIQhmhQhSguQA1gjA6gcQB0g2BuAAQBzAABSASQCBAdBrBPQh5BXhBBZQgzBJAAAvIAAALIheAEIgLAAQgqAAgkgKg");
	this.shape_1.setTransform(45.3,24.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AADDdQgpgOgngwIAEANQgNgJgqgqIgrgsQhghLhLgmQhDgggfgUQBKgvBJggQCNg+CUABQCdAAB6AvQBgAlBFBCQhrA+hJBXQg1BBgrBbQgCgBgWABIgfADQhMgBgegIg");
	this.shape_2.setTransform(44.1,23.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,88.2,46.2);


(lib.FIZFRTORSO002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6870B0").s().p("AglBQQgMiRg4mYQAUgDAogKQBFFiAuEzQAhDmADBKIhoAIQgZjXgOjAg");
	this.shape.setTransform(50.8,60.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EB8BA").s().p("AgaAGIgEgNIAEAAQAHAAARgDQATgFAIgFIAFAaIgeAKIgRAFQgGgBgDgOg");
	this.shape_1.setTransform(42.6,8.4);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#363636").s().p("AjfBtQhIhqAAjZQA2AcBMALQBLALCKAAQBRAAAygEQBLgHApgQIABAdIgBAAQgEDHhgBjQhOBPh1AAQiWAAhJhqg");
	this.shape_2.setTransform(32.1,129.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("AhBBIIAAgsICDAAIAAAsgAg/gdIAAgpIB9AAIAAApg");
	this.shape_3.setTransform(29.9,24.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AgBHxIgGr9IA6gDQALgDAAgjQACgPgIgMQgPgWgyAPIAAgdQAxADAKgGQAIgGAAgcQAAgWgIgFQgMgIgwABIgBgbQBOgBAmgIIAkgJQBHFiAtEzQAiDmADBKIioAOQhCAHgOAAgAkAHaQglgIAAgHQAAgPAPiZIAQiuQAJh6AEgqQAFg3A8mLQANANAsAHQAmAIAigBIAcAAIAAAbQgxgBgKAEQgQAHAAAjQAAAVANADQALACAyAAIAAAeIhJACIgEAwQAAAKACAIIAeADIAsACIAFL+QilgIhDgPg");
	this.shape_4.setTransform(32,60.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AAIAAQBGgFAmADQAIABAggOIg0AoIgCgMIABAMIABAAQAdAAgvACQg0AAgYACgAgqAdQgMgBgqgIIg7gMIAEgiIACgCQAWARAwAIQApAFAmgCIgBAdg");
	this.shape_5.setTransform(29.4,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6870B0").s().p("AgjAbIgBgLIACALgAAjgOIgFgMIACADIAGAKgAghgWIgCACIgCAAg");
	this.shape_6.setTransform(43.4,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5EB8BA").s().p("AAAgCIAAABIABAFg");
	this.shape_7.setTransform(47.2,6.5);

	// body
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjjKTQhehxAAjqQAAimAtmQQAxmtAlhIIAYAKQAYALAFABQAzALA0gBIAigCIgFgBIALAAQBHAAAMgEQAKgEAbgQQAsAxBPHVQBJG3AABhQAADdhRByQhUB1ijAAQiMAAhRhhg");
	this.shape_8.setTransform(32.3,78.3);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,2.7,64.5,151.3);


(lib.FIZFRPUPILR002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAnIgIgQQgFgMABgPQABgeAWgJQAagLAOApQAGANgEARQgFAUgPAGQgJADgGAAQgLAAgHgHg");
	this.shape.setTransform(3.4,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.4);


(lib.FIZFRPUPILL002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVAnIgIgQQgEgMAAgQQABgdAWgJQAagLAPApQAFANgEARQgFAUgPAGQgJADgGAAQgLAAgHgHg");
	this.shape.setTransform(3.4,4.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.4);


(lib.FIZFRNOSE002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("Ag9AuQguglgGhEIAAgBIAFgRIABgBIACgBIACACQAkA6A7AkQA9AoA6gEIACABIABACIAAABIgFAGIAAAAQgaARgpAAQg9AAgqgig");
	this.shape.setTransform(10.8,44.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhPDRQgkgoAAgyIADgkQAIAMAtAzIAmAcQBYA3AFgfQgbhhgLhIQgNhMAAhPQAAg7AOgqQAHgUAHgKIgFApIgDAoQAACpBLDrIAAAJIgIgBIgaALQgcALgRAAQhIAAgsgxg");
	this.shape_1.setTransform(11.6,25.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,0.1,23.9,52.1);


(lib.FIZFRMOUTH002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// teeth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#40152B").s().p("AhrBSQgYgIgmgXQAbhAAygmQAyglA5AAQBNAAAmArQAKAFARAiQATAigIANQgKARghAPQgeANgXABIiFACQgZAAgVgHg");
	this.shape.setTransform(33.3,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("Aj2AtQgPgYgjhUIAEAHQAMARAjALQAHAAAQgCIAWgFQAMgDAJAKQAEAGAFAJIAgAbQALAJAKAAIAIgBQgXAVgjBZQg1gsgagrgAC4BBQgSgggygsIAKgBQAdgRAJgJQATgRADgaQA4AJATgMQAGgEAegrIgBAVQgHA4gaA4QgbA6gkAmQgGgRgKgQg");
	this.shape_1.setTransform(32.3,15.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhmBPQgdgCgUghIgKgYQgFgKgFAAQgMAAgRAJQgQAIgCAAQggAAgXgaQgYgZgBgmQAsANAyAKQBjATBOAAQA6AABUgQQA8gMB8gfIgDAJQgKAdgRAOQgOALgHgCQgpALgNgKQgOgJgBAGQgCAFgBAPQgDASgIAKQgRAWg1AAQg2AAgLglIgIACQgOAhgnAQQgmAQgbAAIgGgBg");
	this.shape_2.setTransform(30.7,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).to({state:[]},1).wait(40));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiSAsQgWgggEgBIgqAQQgcAAgSgTQgTgSgDgpQAXAIBEAKQBPANAsAAQCOAABXgQQBDgMA3gcIAAAKQAAAfgWAMQgOAHgaAAQgFAAgYgNQgOArgJAOQgPAWgwAAQg7AAgNglIgIACQgVAcghASQghAQgbAAQgdAAgdghg");
	this.shape_3.setTransform(30.3,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiLBVIgUgWIgTgVIgRAGQgRAGgUAAQgTAAgUgWQghgfgFhAIAFgGQABgDAFAAQBZAVAKABIBAAEIA4ADQDFAACEgsQAtgPAEAAQALAAAAAZQAAAugTAUQgaAbhCgPQgMAqgbAQQgYAQguAAQgkAAgNgMQgKgOgFgCQgLAOgUAOQgpAcgyAAQgfgJgMgJgAiZAsQAcAhAegBQAbAAAhgQQAigRAUgdIAIgCQAMAmA8gBQAwAAAPgVQAJgOAOgsQAXAOAGAAQAagBANgGQAXgNAAgfIAAgJQg3AbhDAMQhXARiPgBQgrAAhPgMQhFgKgWgIQACApAUASQASASAcABIAqgQQADAAAXAhg");
	this.shape_4.setTransform(31.1,10.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhwC1QhBgWgrg7Qg0hHgghKQgbg9AAgdQAAgTAGgOQAFgJADAAQAhAABMAWQBMAWBwAAQAIAABPgQQBSgQAKgDIgIADQBQgPApgMIAbgJQATAAAIAJQAHAIAAATQAACyhqBtQgoAnguAXQgnASgaABQh8gBhAgVg");
	this.shape_5.setTransform(31.6,16);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjMAtQhUgZgrgtQBkAgA6AOQBKASBAAAQCkAACphBQgjgdgHgIIAAgCIAJgCQAeAIATAVQASAWAAAWQAAAOgEAHIgCABQgBADgDgNQgGgUgKgQQgzAlhoAbQheAWhIAAQhsAAhRgXg");
	this.shape_6.setTransform(31.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).to({state:[]},1).to({state:[{t:this.shape_5}]},2).to({state:[]},1).to({state:[{t:this.shape_6}]},39).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,62.1,20.7);


(lib.FIZFRHEAD002 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ANNEXIAGgCQABgBAAAGQAAAVgOAMQgLAJgcALQASgpAcgPgAr2DYQgSgSAAgTIACgKIAGAAQAUAOAHASQAEAKAGAdQgRgOgKgKgAtBDBQgQgSgFgNIAAgWIAEAAIAtBIIACACQgMgCgSgTgAMyCjQAGgLAMgPIAIgGIABACQACAEAAAGQAAAMgCAGQgFAQgSAYQgNgSAJgUgAs9A/QgOgUgDgZIADgHIAHgGQAIANATApQAPAhADACQgXgLgPgUgAuZAaQgKgTAAgRQAAgGABAAIACgDIAFgDQAHAGANAiIAQArQgWgNgMgWgAMfAoQAAgDANgdQAOgdAFgIQALACAAABQADAIgqBJQgEgGAAgJgArtAdQgKgVAJgMQAEAEAPAyQgJgCgJgTgAOCAEQAAgQALgNQALgNAMgCQACAGgJARQgIAPgKAKIgDACQgDAAgDgGgAsDheQgKgaAAgLQAHgcADgJIABABQAGAKAEBEQgBAJgCAAQgDAAgFgOgAMnh2QAWggAKgdIAHACQAAAHgNAaQgOAcgIADIgCACQgCAAAAgHgAtei8IACgLQACgJAHgLIAIAMIAABKIgIAAgALljQQAGgPANgPIAEgEIACAFQACAGAAAGQAAAKgLAKQgKAKgKABIAEgOgArikiQAAgRAFgKQAEgKAKgHQACABAAANIgDBLIgSgtg");
	this.shape.setTransform(101.9,60.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AhdI5QgDgHAAgJQAAgmgsh1QghhTgihLQhHibgvhWQgmhJgqhCQgxhGglg3QhDhnh1jgIAeAGQAaAHAEAAQAAgJgLgfQBSCTAsBFICZD2QAMATBICnICSFTQA9CQAABHQAAAcgRAJQgRgngDgMgAB2JgQgIgKABgKQAAhBAfhqQAdhdCDlzQAEgNBdifQBui+BnifQAjgFAdgKIjFFhQhLB3hHCWQg7CBgsB6QgOAogHAOQgOAjg3C1IACAKQADAGAHgBIgYAsIgKgLg");
	this.shape_1.setTransform(108,176);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#69494B").s().p("ALbgmQgWBCgXAsIg1AHgAq6AkQgMgngUguIAKAEQACgCgDgfQAvAaAIAqQAHApAQAqQgtgPgKgWg");
	this.shape_2.setTransform(108,108.1);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AgkRrQgfgUAGgLIgCABQgEADgDAAQgRgngEgMQgCgHAAgJQAAgmgth2QgghSgihLQhIibguhYQgmhJgqhDQgyhFgkg4QhDhmh1jfQADACAbAFQAbAFAFAAIgNgnIAAgBQiLn1DTj3QDTj3D5gNQD2gOBzA3QB0A4AsAtQAtAugkgoQBxBlA+CJQA+CLAADBQAABBgaBbIg5C9QAcgCAVgEQAPgEAWgIIjFFfQhLB3hHCZQg8CBgrB5QgOApgIAOQgNAjg3C1IACAGQACAHACACIACABQAJgCAGgJIALgRIACgBQAHAzgiAfQgiAgg/ADIgQABQgwAAgbgSg");
	this.shape_3.setTransform(107.7,127.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#825454").s().p("ALdF/QARhPAAhcQgXjggEgMIgKgcIgdg/QgzhfhGhEQiEh/hMglQh1g4jVAAQlPAAi/DsQhQBkgZBxQgYBwgIBHQgIBIAJCCQAJCCgBgyIAbBoQAIAZAEAGQgngLgMgSQgEgGgahIQgHgRgfgRQgtgWgZgQQgCgHghgTQgogYgegmQgSgYgYgnIgvhLIgFgJQAyAgAVAAQAHAAADgDQABgDABgJIgkhGQgKgTgCgHQgNghgMglQgPg0AAgaIABhbQAlBaAcAgQAPARAPAAIAJAAIACgDQgRiZAAgSQABgOAJg4IAMg6IAAgFIAyBKQAMAQAEAAQAMAAAAgIIAChHQAEhkAig4QAvByBtAdQA4AOAwgJIACgBQgEAKgFAKQATgYA2goQBFgzBOgoIAhgOIBKgeQBXgbB2gEQB4gFBPAUQBCARCEA2QAKAEA0AjQBAAsAdAdQAzA2AhAqIgFAEQAFACANAAQAsAAAkgzQAbglAIgjIAAgNQAPAXAGAjQAEAXAAATIgIArIABAJQABADAHAAQALAAAogpQAygzAHg0IABAaQAABXgcBMQgeBMAAAJQAAAKABAAIAEABIAMABIArgXQArggAFgvIADA4QAABYgnBkQgdBJgRASQgUATgJAWIAIAHQAFAFACAAIAlgTQAlgYAOgeQgyCngtAvQgpAsglAUQgUALAFgCIgBABQgFAWADACIAGABQgQAggRAtIgQArIg+AJQAohnAQhJg");
	this.shape_4.setTransform(102.8,60.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(40,42,51,0.263)").s().p("AAAgaQADAUgDAhg");
	this.shape_5.setTransform(203.6,43.4);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAqSiQgmgNgEgWQgBADgEACQgEADgDAAIgZg5QgOgYhFirQhHiwhPiNQguhShOh8IiAjKQiMjhggiIQh+gthih6Qhhh6gDhMIAEgTIAgAfQAdAdALAEQgmgjgPh7IgHh6QAAhIAJghQAJgTAAgDIApBcIAnBZIAAgEQgJhJAEhMQAHhxAngxQAkBWAQAXQgGhRAdhSQAZhJAYgJQAABABGBAQBLBEBcAAQAKAAAogrIA+grQCGhFAygXQAygYA/gBQBdgQCMAEQCNAECjBZQCjBYBcB4QAygjAKgYQANg0AWhDQAPAPAYA6QAcBDgGAeQAYgLAehGQAPgjANgmQAJALAHATQAIAZAAAhQAABLgNA1QgHAdgOArIALgNIAagpQAaglAOgEQAVAZgJBzQgKCHg9BZQAEgCAKgJIAtgtQAHAGACAAIACAYQAAASgZBEQgYBDgUAjQgOAbgtA4QgpAygNAdQhKCmhIB+QgvBTiJDqQhbCfgvB5QgjBZhiEfQAHgBgFAXQgEAWgIAJQgZAcgSAKQgcAPguAAQghAAgegKg");
	this.shape_6.setTransform(101.9,122.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,2.4,203.9,240.2);


(lib.FIZFRHAT002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6870B0").s().p("AgpAOQAIgSATgZQAOgVAQgRIAaAwQgGAIgXAiIgaAtg");
	this.shape.setTransform(47.6,66.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC767").s().p("AgKBDIAAgKQgDAFgmg+QANgTAZgfIAXgbQAIAMARAeQARAcAAACQAAAEgaAhQgaAogEAGg");
	this.shape_1.setTransform(42.8,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AC6E1QgXgxgBgKQgCgJAMgXQALgWAignQBJCCAAALQAAABhGBeQgLgjgXgxgAi3AgQgHgcgJgGIAAAGQgBADgHAAQgjAAgUgUQgRgUAAgcQAAgWAcgUIAggTQgZgJgXgdQgWgcAAgTQAAgeAQgTQAQgSAcAAQALAAAIALQAEAEAMgRQABgFgPgRQgOgSAAgSQAAgSAEgOQAEgMAKgOIAAADIgFAPQgDAIAAAGQAAASATAnIAVAoQhBAjAAAaQAAALALATIAPATQAKAMAAAGIghA+QAAAZAeALQAZAJAMgFIAAALIgCABIAAABQAeACAcgLQAggMgBgYIA3BCQgrgCgLAbQgMAfgsAAQglAAgLgZgAgrhAQgdglgEgHQAZAGAZgFQAggGANgaIAyA+IghAmIgeAjQgQgTghgpg");
	this.shape_2.setTransform(31.4,51.1);

	// MORE LAYERS
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6C7C9").s().p("AAAAAIABgDIAAAHg");
	this.shape_3.setTransform(41.5,64.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F0FF7A").s().p("AhSBbIAAgKIgDAEIgmg+QA3hPA3gcQAhgRA0AAQAFAAAKAIQARAOAUAgIgJgBQgoAAg5AkQhGAqgYBIg");
	this.shape_4.setTransform(50,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AilB2QgRgIAAgOQAAgZAVgkQAYgmAmgiQBihZB7ABQBFAAgIAnQgHAig8A0Qg5AxhEAmQhLAngtAAQgUABgQgJg");
	this.shape_5.setTransform(74.2,85.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AjmByQAehCBDgtQA7gnArgBQAGABAMAMIAYAYIAHAFQhRAPhDA2Qg7AvgNAvgACBAxQALhNAFgXQAZh0BKAAQAVAAAaAdQAfAkAAAxQAAAugYBEQgXBFgNABIg9gLIhcAVQAKgdAKg/gAk7gXIgGgMQAAgbA0guQBBg5BRAAQAKAAAOAjQg1gIhEAzQgvAiglAwQgEgGgHgMg");
	this.shape_6.setTransform(66.5,56.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABmFmQgYgwAAgKQAAgKAPgYQASgeAagZQBLhLBlABQAJAAAYATQAZAUAAAGQgBA8grAfQhEAlgyApIhEBeIgBACQgKgegcg7gAkHBWQgIgdgJgHIAAAIQgBADgHAAQgiAAgVgWQgQgUgBgaQABgXAbgTIAhgTQgigXgLgLQgZgZgBgbQAAgdAQgTQAQgSAcAAQAFgBAGAFQAGAFAEAAQABAAABgBQABAAAAAAQABAAAAgBQABAAAAgBQADgEAHgEQAAgFgPgSQgOgRAAgTQAAgcANgTQAQgYAbABIA1AOQAFgHAAgLQABgVAIgeQANgoA5AAQAdAAAYASQAXASADAAIAagPQAYgQAaAAQAaAAAOASQANAQAAAaQAAAGgEARQgFAQgCABQAwAAAgAQQAtAYAAA3QAAABgLASQgMASgLANQABADAYAVQAVARAAAMQAAARgNANQgVATgqAAQgtg2ACgZQACAAARgIQARgGADgEQgCgFgJgGIgPAEQgKADgFAAIgUgCQACgOgHgIIgJgIIgGADQgKAkgSAQQgUATgjAAQgUAAgHgEIgOgIIgGAPIgFANQAAAhgLANQgMAPggAAQgKAAgrgNIgKADIgBAKQAAABAGAKQAFAKAAAHQAAAWgNAQQgPAQgrAZQACABAEAAQAnACAZgRQAXgOgDgOIA3BBQgqgDgLAdQgNAfgsAAQgkAAgLgZgAiIgZQgSgXgDgHQA3AWAkguQAcgkgFgWIATAGQAMACAIABQAigBASgNQAIgGAUgdQAOAdApBDQhVAXgfATQgsAagsA9Qgkgngbgig");
	this.shape_7.setTransform(39.5,45.8);

	// LAYER
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAyH4QgPgKgNgbQghhegzheQheiugWgeQgagkgjAAIgQAWQgRAXgHAEQgOAKghACQgVAAgWgLQgggQADgfQgNAGgLAAQgSAAgYgYQgdgbAAgnQAAgEAQgeIAUgjIgcgbQgVgXAAgbQAAgtAYgbQAXgcAbANIAAgGQAAgFgFgQQgEgRAAgFQAAg+AvgWQAmgSAbAQQAIhVBSgQQAggGAdAJQAcAJAIASIAegPQAagMAMAAQAWAAAZAOQAbAOAJAVQADAFACAPIACAUIgCAfIAMgBQAcACAbARQAvAeAAA+QAAAKgGAQQgHARgHAGQAOADAKANQAJANAAAQQAAAfggAeQgiAfgYgMQALAQBSBYQBeBoAZAPQANh8AZg6QAdhAA0AAQA6AAAkAwQAfApAAAvQAABGgjBEQgjBDAAADIAMAuQAAApgeAhQgIAJg4AvQiRB5hwAAQggAAgQgKg");
	this.shape_8.setTransform(50.7,49.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-2,101.5,103);


(lib.FIZFRHAIRTOP002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AA6EKQgBABAAgKQAAgMASgmQAUgtAUgSIAAAAQgBAmgKAeQgPAxgdAIgAiHBwQgZgxADgUIABAAQAKgDAEAHQADAFANAcQAIAQATAiQAPAXABAGQgBAGgCACIgDACQgTgJgbgwgADNCGIgBgIQADgTAOggQAOgiANgQIABACIABABIAAAMQAAAqgRAeQgNAYgHAAQgHAAgBgCgAgxAXQgOgYgHg7QAEAAADgCQACACAJATQAJAVAPAaQANAVAAADQAAAGgCAAIgEABQgGACgHAAQgGAAgJgQgABeAcIgIgKQAJgSAKgbQALgdAEgNIAHAAQAKAbAAAHIgMAjQgOAigMAAQgCAAgDgGgAChiLIABgBQgBgCgBgHQgCgLATgbQAPgWAJgIIABABQgBAYgHAXQgKAegQAAgAgxigIgDgBIgCgrQgBgJAHgWQAGgYAGgJQAIATAAAQIAAAkQgDAegNANIgFgGgAjIinIgIAAQgFAAgQgUQgUgYgBgdIACgQIACgJIAEAAQAcApAKAdQAFAPAAAIIAAAGg");
	this.shape.setTransform(37.6,61.9);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AhdF0Qg4g0hFh4QgyhYgoiuQgiiVAAhDQAAh5AXgaQACAAAWBRQATDjBfDPQBiDcCNBmIALAJQgaAFgKAAQhCAAg8g2gAB+GJQBChRAtiOQApiKALiaQAOiZAAgbIgDg7QgBgkARgVIAAgDQAJAkAIAwQAKA5AAAbQAAEKhNDIQg+CehBAgIgEAAQgHAAgCgKg");
	this.shape_1.setTransform(37.7,56.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D3232").s().p("AAAAAIAAgDIAAAGQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAg");
	this.shape_2.setTransform(67,38.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#825454").s().p("AhdGoQg4gzhFh4QgyhYgoiuQgiiVAAhDQAAh5AXgbQAZBmAZAtQAYApAbAAQAKAAANhFQAZh7AThJQBADlAPAgQB+jHAShaIBWEgQAGAVAGAIIAPAPQAOgOA1hZQAwhSAQgjIAAgCQAJAkAIAvQAKA6AAAbQAABxgeCgQghCxgpBMQgrBOgZAYQg1AzhVAAQhCAAg8g3gAElh8QAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAIABgIg");
	this.shape_3.setTransform(37.7,51.3);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhhHCQhMg9g/hqQiLjrAAkRQAAgfAShNQAThRAOgOQAMALAjBSQAlBXAHAJIAGAHQARhCAahZQAchgAJgMQAZA+AbBUQAcBVAGAOIAAABQATgeBtjqQAhATAgBlQAUA9AfCKQAcgcAohNQANgaA5h9QAlBoALBBQAGAtABBVQgBBngIA3QgOBZg1CiQgsCIgkAuQg5BJhuAAQhIAAhOg/g");
	this.shape_4.setTransform(37.6,51.4);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,102.8);


(lib.FIZFRGLSSR002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhWgbICtAJIgbAsIiSACg");
	this.shape.setTransform(9.9,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABMAvIhqAAQhRAAgBgCIAAhOIALgOIDWARQgFATgLAVIgVAmg");
	this.shape_1.setTransform(10.3,3.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,22.7,9.7);


(lib.FIZFRGLSSMID002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AEgAqIAEAAIAAACgACiACQhXgOhGAAQitAAhKAQQgZAGgPAIIgJAGIAAg1QAFAEAHAAQAJAAApgJQAjgEBBgDIBEgCQCcAABfATQBgATAGAAIAAAlQhAgShCgMgAEigXIACABIAAADQAAgBAAgBQgBAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape.setTransform(37.3,6.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACJAeQhKgLheAAIg1ACQgzADgbACQgXADgvAJIgtAHQgIAAgGgEIAAhEQAWgJA7gJQBSgMBVAAQBGABB2APQBtANAmAPIAABHQhugVgtgHg");
	this.shape_1.setTransform(37.3,5.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8,0,58.5,11.6);


(lib.FIZFRGLSSL002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhWgbICtAJIgbAsIiSACg");
	this.shape.setTransform(9.9,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhuAvIAAhVIAGgIQDWASAAACQgNAggVApg");
	this.shape_1.setTransform(10.6,3.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.4,-1.4,22.2,9.5);


(lib.FIZFREYER002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9C7C9").s().p("AhGECQANgLAPgPQAqgpAWhJQAPgyAFgcQAFgcAAgnQAAhTgqhRIgihCQAfAQAZAyQAoBOAEBmQAEBkgsBUQgoBSg0ADIgJAAg");
	this.shape.setTransform(26.6,29.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52A1A4").s().p("AhGECQANgLAPgPQAqgpAWhJQAPgyAFgcQAFgcAAgnIAAgNIAJACIAJADIADABIACAAIABAXQAEBkgsBUQgoBSg0ADIgJAAgAA3hCIgLgEQgIg9gfg8IgihCQAfAQAZAyQAdA5AKBHg");
	this.shape_1.setTransform(26.6,29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	// Layer 8
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("AAcDpIgOgPIgOgSQgQgXgIgaQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIALgTQAJgOAKgMQAIgHAIgGIgKAQQgMATgMAbIgCAEIgCADQgXA8gEBdQgDBaAMArIAMAvIAIAXQAKAbALATIAKAOIgNgKg");
	this.shape_2.setTransform(7,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9FFFF").s().p("AgMEFQgugHgihDQgnhLADhtQADhrAlhPQAkhPAzABQAOAAAPAIQAgAQAZAyQAoBOAEBmQAEBkgrBUQgrBSgyADIgJgBg");
	this.shape_3.setTransform(20.7,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D9FFFF").s().p("AAAABIAAgBIAAABg");
	this.shape_4.setTransform(7.8,30.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8089DD").s().p("AAcDpIgOgPIgOgSQgQgXgIgaQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIALgTQAJgOAKgMQAIgHAIgGIgKAQQgMATgMAbIgCAEIgCADQgXA8gEBdQgDBRAJAqIAAAAIACAGIABAEIAMAvIAIAXQAKAbALATIAKAOIgNgKg");
	this.shape_5.setTransform(7,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLABIAAAAIABAAIAAAAIgBAAIAAAAgAgLAAIAAAAIAEAAIARAAQAFAAgGAAIgDAAIgRAAg");
	this.shape_6.setTransform(9.3,24.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66CCCC").s().p("AgJEFQgugHgjhDQgSgkgJgsIAAgBQABgEgCgFIgBgBQgHgmAAgrIABAAIgBgCIABgKIACgxIAAgBIAAgBIgIgEIAIACIAAgBIABgRIgBARIAPAAIAagBIAEAAIADgBIACAAIADgBIAqACIB8AMIAMADIAJADIAJADIADABIACAAIABAXQAEBkgsBUQgqBSgyADIgJgBgAh7gvIABAAIAAAAIgBAAgAh7gyIAAAAQARACAFAAQAHgBgGgBIgTAAIgCAAIgCAAgAB0g/IgLgDIgPgEIjEgFIgDABIgGABIgDABIAAAAQAJg9AYgyQAkhPAxABQAQAAAOAIQAhAQAZAyQAdA5AKBHg");
	this.shape_7.setTransform(20.5,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

	// Layer 5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTQAggmAugSIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAg");
	this.shape_8.setTransform(18.1,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8}]}).to({state:[]},1).to({state:[{t:this.shape_8}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.4,58.8);


(lib.FIZFREYEL002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9C7C9").s().p("AApEBIg0gwIgCgDIgDgFIgBgCIgDgGIgBgBIgDgGQgnhLADhtQADhrAlhPQAdhCAogKIghAxQghA0gIAcQgDAPgGAsQgGAxAAAVQAABLAUBGQAaBcA3AaIAAAAQgKAAgKgEg");
	this.shape.setTransform(13.9,29.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#52A1A4").s().p("AgYC6QgTgkgJgsIAAAAIgCgLQgGgmAAgqIAAgDIAAgKQABgZADgZIABABQAFADAFgCIAJgCQgEAfAAAPQAABLAVBGQAZBdA3AZQgygDgjhIgAgUi4QAdhCApgKIgiAxQghA0gHAcQgEAOgFAnIgUAGIAAAAQAKg+AXgyg");
	this.shape_1.setTransform(13.9,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},2).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#676EB2").s().p("AAcDpIgOgPQgKgKgGgMQgPgVgHgYQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIAIgNQAKgSAMgOQAIgHAIgGIgKAQQgJANgIAQIgLAYQgXA8gEBdQgDBaAMArQAKArAKAbIAAABIADAGIABADQAIAVAJAPIAKAOIgNgKg");
	this.shape_2.setTransform(7,29.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D9FFFF").s().p("AgDEGIgDAAIABAAQgLgBgKgDIg1gwIgCgEIgDgEIgBgCIgEgGIAAgBIgDgGQgnhLADhtQADhrAlhPQAehCApgKQAIgCAIAAQAxABAlBJQAoBOAEBmQAEBkgrBUQgrBSgyADg");
	this.shape_3.setTransform(20.7,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6569AC").s().p("AAcDpIgOgPQgKgKgGgMQgPgVgHgYQgMglgEgeIgFgxQgCgTAIg0IAAgBQABgXAFgYQALg1AWgvIAIgNQAKgSAMgOQAIgHAIgGIgKAQQgJANgIAQIgLAYQgXA8gEBdQgDBRAJAqIAAAAIACAGIABAEQAKArAKAbIAAABIADAGIABADQAIAVAJAPIAKAOIgNgKg");
	this.shape_4.setTransform(7,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#66CCCC").s().p("AgFEGQgygDglhIQgTgkgJgsIAAgBIgCgKQgHgmABgrIAAgCIAAgKQABgZACgZIACABQAFADAFgCIAIgCQBhgaCGArIACAAIABAXQAEBkgrBUQgrBSgyADIgCAAgAhlhNIgUAFIAAABQAKg+AXgyQAehCApgKQAIgCAIAAQAxABAlBJQAeA5AKBHQiBgohhAWg");
	this.shape_5.setTransform(20.7,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},2).wait(1));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTIAQgRIAIgHQAYgUAegMIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAgAAVEGIgCAAIAAAAIACAAIAAAAg");
	this.shape_6.setTransform(18.1,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAhElIAAAAIgNgBIgHABQgZAAgsgSQgtgTgbghQgaghgOhBQgNhAABg9QAAgoAKgsQAMgzAUgwQAJgXAQgTIAQgRIAIgHQAYgUAegMIAAAAQAXgIAMAAIAAAAIAAABIALgEIAAAAIABABIAMgBQBDgBAuBaQAtBagBBxQAABvgwBUQgwBUglAKIgOAEIgBAAIAAAAg");
	this.shape_7.setTransform(18.1,29.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[]},1).to({state:[{t:this.shape_7}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.4,58.8);


(lib.FIZFREARR002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAwQgPgbAAgRQAAgTAKgPQAJgPAMgGQgMgIAAgCIgQgBIgQACQgIAAgCgDQAAgIACgEQAFgHASgBQAcABAYAaQAQARAEANQgDACgIgFQgJgHgFAAQgPAAgJAQQgFAMAAAIQAAAlAeAvQgUgIgPgcg");
	this.shape.setTransform(12.5,24.7);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AgjA7QgUggAAgwIADgYIACgSQgHgXAfAAQAuAAAWAxQAMAYACAYQAAAggSAXQgQAVgUAAQgUAAgRgcg");
	this.shape_1.setTransform(12.9,25);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhyB3QgdhEABh+QgBgdAJgiQAIglAIgDQAHgCAhAZQAgAaAjBDQAhBCAOAWQAHAJASgCQASgCAbAmQAcAmACAvIAIANQgSgbgSgQQgSgQgLAAQgPAAgLALQgHAHgNASQgfAjg0AAQgnAAgZg8g");
	this.shape_2.setTransform(17,20.4);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah9CDQgghHAAiCQAAgxAJggQAOgzAiAAQAlAAApA9QAjA5AxB6IAEgBQAFgBAGAAQAVAAA8CNQgEAAgGACQgIADgFAFQgKgMgXgVQgUgTgDgCIgZAhQgPASgKAFQgKAGgTAEQgQAEgNAAQg/AAghhIg");
	this.shape_3.setTransform(15.8,20.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,40.7);


(lib.FIZFREARL002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAwQgPgbAAgRQAAgTAKgPQAJgPAMgGQgMgIAAgCIgQgBIgQACQgIAAgCgDQAAgIACgEQAFgHASgBQAcABAYAaQAQARAEANQgDACgIgFQgJgHgFAAQgPAAgJAQQgFAMAAAIQAAAlAeAvQgUgIgPgcg");
	this.shape.setTransform(12.5,24.7);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AgjA7QgUggAAgwQAAhBAdAAQAuAAAWAxQAMAYACAYQAAAggSAXQgQAVgUAAQgUAAgRgcg");
	this.shape_1.setTransform(12.9,25);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhyB4QgdhEABh+QgBgdAJgiQAJglAOgEQAOgFAnAxQAmAxAUAuQAWAsAOAMQAOAMAWABQAVAAAUAuQAUAuADAhIAIANQgSgbgSgQQgSgQgLAAQgPAAgLALQgHAHgNASQgfAjg0AAQgnAAgZg8g");
	this.shape_2.setTransform(17,20.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah9CDQgghHAAiCQAAgxAJggQAOgzAiAAQAlAAApA9QAjA5AxB6IAEgBQAFgBAGAAQAVAAA8CNQgEAAgGACQgIADgFAFQgKgMgXgVQgUgTgDgCQglArgRAMQgWAPggAAQg/AAghhIg");
	this.shape_3.setTransform(15.8,20.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.7,40.7);


(lib.FIZFRBROWR002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhKBGQgPgLgWgkQBUg6ApgWQAhgRAWAAQAPAAAKALQAKALAIAYIh6BKQguAcgGAAIgCABQgEAAgGgFg");
	this.shape.setTransform(13.3,9.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhyBEQgRgYAAgRQAAgeBdgwQBUgsAiAAQAQAAATAfQARAbAAAKQAAAQgXANQgWAPg1AUQgnAWghAYQgTANgLAAQgZAAgVgcg");
	this.shape_1.setTransform(13.6,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,-0.2,26.5,19.4);


(lib.FIZFRBROWL002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhwgVIAPgeQAMgUADAAQAfAAAsAQQAKAFA3AhQA4AfAAADQAAARgPATQgOATgMAAQiJhIgwgVg");
	this.shape.setTransform(13.7,9.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AASBCQgxgcgRgGQgsgNgXgRQgTgLAAgLQAAgZAZgYQAVgVAJAAQApAABTAoQBaAsAAAbQAAAsgxAZIgKABQgOAAgsgZg");
	this.shape_1.setTransform(13.6,9.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,18.3);


(lib.FIZFRAPRON002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AgNEhIgYl+QhNp0gQhEIAVgGQAvDVAjD3QAVCQAiEeQAMBbAFA6IAOChQAKBoALBMQAMBMAnB5IgxAOQg/iAggl7g");
	this.shape.setTransform(65.2,81.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AhXCRIgBgfQAaADBCADIBIAEQAKAAABgBIACAUQhHADg5AAgAgbhnQgHgHAAgKQAAgLAHgHQAHgHAKAAQAJAAAFAHQAHAHAAALQAAAKgHAHQgFAIgJAAQgKAAgHgIg");
	this.shape_1.setTransform(39.3,83);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AhBEAQAMgSAFgSIAGgTQAGgJBHAAQAEAAAGAQQAKAcAIARIgGACIhHAEQgbAAgYgDgAimDeQgDgGAKgpQAJgpASghIAWgmIgBBoIgVAbQgUAcgNAYQABgTgCgFgACkDzQgmgigLgUQgTgeAAhgQAZAQAZBDQAXA9gBAfIgBAGIgBAAIgCgBgAgMB9QgugDgkgDQAAifAQg+QAXg3AOgqQAeADAdgDQAdA9ATBsQAUBqgEAyIguABIgwgCgAg5hlQAAARANANQAOANASAAQAMAAAMgLQANgNAAgWQAAgoggAAQgyAAAAArgAggjZIAUgpIAVApg");
	this.shape_2.setTransform(39.8,81.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjyMbQhegOgfgDQAgh3AKhdQAHhAAAhoQgCkVAhj+QALhwAKhbQAUiqA0kkQAZADACgDIAAACIgSB5QgSCBgDAsQgCArAjANQAjAOCKAKQCIALAGgsQAHgrgNh5QgQiOgPgoIAVgGQAvDVAjD3QAVCQAkEeQAMBbAEAzQAGBAACBfQACBUAUBdQASBYAnB5QhGAWhoAJQhVAHiHAAQhxAAhngNgABZCuQAOAVASARQAKAKANAXQAMAWACABQAEgEADgQQAEgQAAgQQAAhVg4hHIgbgiQgMgQgBgMQgPhugGgWQgVhSg6hRQgKAXgdAqQgxBmAABCQABBAgfAvQgfAwgHASQgNAiAAAyIAHBEIAMgQIA4hXIAJAFQAJADAmADQgVAcgOAtQAAAOBNAAQAvAAAUgDQAagEAAgLQAAgagMgRQgPgSgHgJIASgFQAOgDAGAAQAIAAAHAKg");
	this.shape_3.setTransform(41.5,83);

	// apron
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhINAIgLAAQh9gCjIgjQAwhjAMiuQAFjMAGhjQAHhoADhUIABhAQAkkyARiFQAejkAth+QAaAFAmAMQgLAlgPBjQgQBxgEBXQARAPA2AKQA2ALA0gEQAygEAsgNQAmgLAAgNQAAgUgIg9IgViWQgEgQgEgiQgEgkAAgQQAAgFAJgEQAOgGAegBIAIABQA5EEAMBZQAIA9AOB8QAaCzAmFMQAnFOAHAqQALBDAwCFQgMAFgxAIQg2AJgzAFIiuAIIiMAGg");
	this.shape_4.setTransform(41,83.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,82,166.5);


(lib.FIZ34LTORSO002copy2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F32").s().p("AgUDFQgHgNAAgLQAAgFALgxIALgvQgFAFglAKQgHABgUASIgjAdIgFgFQgBgCAAgHQAYg0AYg9QAyh6AFhVIBkgJQAQgCAHgDQAGBUAAAkIgBAuQAAAOgFAhQgDAYgVA1QgWA4gjBCQAGAAACAFQgSAJgPABQgOgBgLgQg");
	this.shape.setTransform(16.7,50);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5EB8BA").s().p("AgoABQAGgBBDgeQAIAOAAAKQAAAKghAMIgtAOg");
	this.shape_1.setTransform(19.8,-70.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6870B0").s().p("AhAB7QABhgATikIAVimQAGgFgNhAQgJgxgIgYIAvgPQASgGAPgLQADALAJBdQAKBeAAARIgIHXQgBAuATDUIh6AHIAAAEg");
	this.shape_2.setTransform(21.2,-20.3);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(33,35,43,0.282)").s().p("AgDAAIAHgBIgFADg");
	this.shape_3.setTransform(20.8,70.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363636").s().p("AhJDxQgtgEglgHIhAgNQgMgpgJgnIgMgvQgFgXgLhIQgHgwgGhfIgFhUQAmAECAAHQCTAJAvAAQAMABBagIQBbgIANgDIABgBQAGBUAAAkQAABKgKAmQgQBGg8BuIAFAAIACAEQgOAFhJAfQgkAOg3AHQgdACgVAAQgTABgigEgACcjzIAAABIhIAEg");
	this.shape_4.setTransform(-0.2,51.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AhFBHIgFgFIAKgiIBAADIA3ADQAEAgguACIgjABQgZAAgWgCgAghhIIBsACIgDAeQgDADhuAAQAFgRADgSg");
	this.shape_5.setTransform(-3.1,-52);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72EBEB").s().p("AgvAjQgFgaApgFQAWgDA4gBQAZgCAOgFIA/gcQAIANAAAKQAAAVhPAQQg+ALguAAgAiwgBIAJgVQAhAPAlAIQAfAIAJgBIgHAaIgCAAQgNAAhhgjg");
	this.shape_6.setTransform(6.2,-69.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AhtHhQAChxAQinQATjVAljVQAvAEARgQQARgQABgWQABgWgBgCQgvAAgTgCIAHggQBOgEADgIQACgIAAgpQAAgMgegEQgQgCgSAAIAIgZQAtACA1gEQBjgIAogfIADAHIABABIAMB9QAFBDABAPIgIHXQgBAuATDUIh8ALIAAgCIhIAGIhsABIhZgBgAkaHTIAAhIQAAjjAmjZQAtj/BXixQAHAHAqARQAtASARgBQgFAdgUABQgUAAgRAEQgRAEgBAbIgHAdQABAFAcAEIAcADIgIAhQg1gCgDABIgGAGQgDAEgGATQgGASAAADQAAAPAFAFQAJAIAcAAIAMAAIAFgBQgkDuglHQIAAAAgAhij2IgBgEIAFAFQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAg");
	this.shape_7.setTransform(-0.6,-20.2);

	// body
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah1L7QhQgIgZgMQgMACgIAIQgFAAgPgvQgYhMgHgxQgWigAAiUQAAlNA2kCQA2kGBniUQAZAMAdAIQAnALAaAAQBeAAA0gPQA7gQAYgpQAvCsAEC6QgFD2AACzQAAAjANCOQANCOAAA8QAABzgZBVQgaBYgvAXQiHBChqgBQggAAg+gGg");
	this.shape_8.setTransform(0,-0.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.6,-77.7,63.3,154);


(lib.FIZ34LTORSO002copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F2F32").s().p("AgQCoQhPglgagFQgagGg3gkQg3glBZgZQBXAcA2AUQAGADARgFQABADACADQACAEAGAAQAHAAALgHQATgOAWgjIBKh2QAHghAGgOQALgZAfgBIALgBIASgGQgeBag4BZQglA8AJASQgmBgg3AAQgRAAgQgJg");
	this.shape.setTransform(25,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DADEE0").s().p("AAEB8QgZgXgLglQACgGAEACIAEAEQAOAVAPAMQANAJAKAAQAnAAgBgYQgBgcg8gzIAQAFIA5AyQASATAAAcQAAAQgEAIQgIAQgZAAQggAAgZgVgAhcgIQAGgFAXAAQATgFAIgDIgRA7QgeAIgdACQANgyAHgGgAgJgNQAPgNAigQQAagQAAggQAAgGgFgFQgHgGgNAAQgCAAgMAGQgPAHgIAHIADgJIAEgFQAHgaAZgLQANgGAMAAQAnAAAGAWQAEAUgVAdQgUAbgeASQgaAQgUAAIgJgBg");
	this.shape_1.setTransform(53.6,23.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AhIEDQAAgEgFgCQAGgLAPgVQASgaAEAAIAiADIAqACQgBADABAVIACApgACEEBQgBg3gDAQIgOgTQgDgEgBgQQAAgkAIgXQAIgcABgMIAGAAQAOAOAHAiQADARAAAkQgJA6gOAZgAiIChQARglArg2IgIBAQAAAOgOALQgZAUgXAhIgLAPQAKgqALgYgABkCGIgBAAIABAAgAg6CAQgBiAAxjNQADABAPgCQAPgBALAFQAjANAPBKQAGgEAPBBQAPA+gUB+IiegGgAgDiEQgJAOAAAVQAAArAyAAQATAAAJgVQAHgNAAgJQgBgYgRgNQgOgMgYAAQgNAAgHAOgAgGjfIAGgOQABgOAHgNQADACAIAQIAOAYg");
	this.shape_2.setTransform(13,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6870B0").s().p("AAiFoIACg4QAAiWgsivQgph6gahSQgxicAQgiIABgOQB+DKAuCkQAdBkALBQQAHA5AABIQAAASgFBDIgHAuQAEAoghAJQgjACgFACIgDAAQACgUAEgyg");
	this.shape_3.setTransform(41,-22.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8089DD").s().p("AAEGrIgcgEIgBAAIADgZQAWADAHADQASACB2AHIADAAIgFARIhtABIgcgEgAA4CxQgJgJAAgMQAAgMAJgJQAIgIALAAQAMAAAIAIQAIAJAAAMQAAAMgIAJQgIAIgMAAQgLAAgIgIgAgihWQgegFgUgGQgUgygUhbQgYhsAEg8QAIAJAlAFQAdAFAEAbIgggLIgFADIgCABQgBABAAAHIADAcIADAVQAGAOArAOQAlANgBAZQgLAAgegJQgIAHAAAQQAAAZAHANQAIAPAUAIQAVAIAQAAQABAAAHAYQAHAaAFAbIgcACQgHAAgbgEgAAlimQAXgGAPgMQAOgLAAgLQgMgzgFAAQgGAAABgDIAAgGQgJABgRAKQgPAJgPAAQgGAAgDgQIgCgQQAPAAAUgNQATgNAAgKQAAgLgDgQQgEgYgIgMQgGABgUANQgNAJggAAIgSglQAogKA0gJQAegFAlgOQgPA/APBtQANBeAVAsIgrAQQgnAPgFABIgThPg");
	this.shape_4.setTransform(8.3,-25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72EBEB").s().p("AhKAOQAtAFBAgTQA4gRAagUQAJAghLAYQg4ATg/AFQACgIgIgVgAh5AhQgegIAAgCQAAgKABgIQAMAGAkAAQARAAgBAeQgGAAgdgIgACTgnIAAgDIAFAIIgIADQAEgEgBgEg");
	this.shape_5.setTransform(9.1,-70.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("AgQBLQgVgLAAgIIABgVQANAEARAAIAhgDQAigFAHgFIAJAUQACAFAAAHQAAAMgfAIQgWAHgKAAQgOAAgSgKgAhFgrQgFgIgEgZIAAgGQAdAJARADQAcAEAqgSIACAbQAAARgSAIQgPAHgTAAQgrAAgOgSg");
	this.shape_6.setTransform(7.3,-51.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABMKFQg1gVhVgcQgdgGhZg+QhZg9AAgHIAXg6QAYg8AEgeQADgZAKgqQAMgyADgSQAMhCAHhFQAGg6AAgiQAAhZg5i4Qg4iwAFhhIAAgTIArAAIgDBAQAAASAKBMQAJBJAEAOQATBLAWA8QAEAKAYAJQAgALAzAAQBWAAAzgcQAZgOAIgPIgVhaQgWhXAAgoQAAgtAIgxQAGgpAIgaIAIgDQAQgGAOAMQAPALAAAQQgPA2AAAPQAAA6AWBZQAJAgAqCLQBIDwAACaQAACJgiBtQgoCAhjBfIgBABIAAABQgLAEgHAAIgGgBgABmFSQAIAZgCAiQA1giAAhTQAAgrgWgqQgXgqAAgLQAAgmgKgzQgOhCgYgpIgohAQgig8AAgEIgCAAQgMAXgSA5QgUBDgIA0QgMBOgDAOQgNAzgfAiQhABHAABVQAAAPAIAGIAigzQAYggAVgHIgBAOIApAHIgqAyQgJALgCAIQAJAJAbAHQAfAHAqAAQA5AAAAgRQAAgagIgqIArgFQAMAVAEANg");
	this.shape_7.setTransform(14.4,-9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA4LQQgxgdAXgfQAYgfgaAAQgbAAgygUQg1gWgSggQgJgSg0gaIhCgfQhMglgWgUIhMCZQgFAGgJABQgMgLAAgCQAAgJAgg6QAlhFAJgXQAthsARhWQAnjzAAhDQAAgKgGhBQgQhIgviZQgniOAAhoQAAgiADgBQAIgCALACQA4gEAVAIQAlANAsAAQBEAABRgqQAmgUAJgDQASgHAKAJQAbAqAIALQAKAMAIAAQAKAAABAKQADAVANAWQAIANA4BuQA7BzAVAsQAlBOAbCrQAcCwgTA/QAigeAeAAQAgAAARAVQAJANABAMQAAAegaAeQgdAigyAQQA5ApAOARQARAVAAAjQAAA1g2AAQgjAAgdgVQgcgVgLggQgKAbgdA8IhSCvQglBNgmAAQgLAAgLgGgAEoE+QgFAQgBAGQAAALAdAUQAYAQALADIAJAAQADAAAAgHQAAgMgMgMIg1g3gAFZDYQgPALgQAUIgEASQAfgRAIgFQAPgNACgUIAAgCIgHgBQgDAAgLAJg");
	this.shape_8.setTransform(22,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ34LTORSO002apron = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("AgQBLQgVgLAAgIIABgVQAKADAogCQAvgCAHgIIAJAUQACAFAAAHQAAAHgYAKQgXAKgOAAQgQAAgSgKgAgmgcQgggGgFgSQgDgKAAgOIAAgGQAHADAeAFIAdAFQAEgBARgFQAUgEAJgFIACAbQAAAQgRAKQgNAGgRAAQgOAAgRgDg");
	this.shape.setTransform(7.3,-51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("Ag2CUIgdgEIgCAAIADgZQAYADAHADQASACB0AHIADAAIgFARIhrABIgcgEgAgIhmQgDgFABgNQAAgkAZAGQAcAFAAAeQAAALgIAHQgIAGgMAAQgQAAgHgLg");
	this.shape_1.setTransform(14.3,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AhIEDQAAgEgFgCQAGgLAPgVQASgaAEAAIAiADIAqACQgBADABAVIACApgACEDtQgBgSgLgTQgJgTgBgCQABgQAHgiQAIghAAgQIAHAAQAQAOAFAiQADATAAAiQgIA7gPAYQgCgHAAgUgAiIChQARglArg2IgIBAQAAAOgOALQgZAUgXAhIgLAPQAKgqALgYgAg8CAQABiAAxjNQAKADAjACQAYACAVBCQAUBDAIApQAHAngKB8QgCgGijgFgAgDiDQgJAOgBARQgCAuA1AAQATAAAJgVQAHgNAAgJQgBgYgRgNQgOgMgYAAQgMAAgIAPgAAejeQgVAAgPgBQAEgKACgLQABgIAHgMQADABAKATIAMAWg");
	this.shape_2.setTransform(13,0.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABvKqIiOgrQhngfhOgUQhNgUgSAAQBIiKAMgfQASgsAGgUQAdhZAMhZQAai5AAgyQAAg7gShJQgJghgfhjQg3iwAFh1IAWgBQAGAAAIADIAHACQgGBmAHAxQAHA0AjB4QAOAzAKAJQAXAXBQAAQBLAAA4gcQAcgOANgQQAAgEgLghQgMgngGgaQgGgegFg0IgEg2QAAgMACgsQACgtAFgKIAVgxQAHgCAMACQAVAEARANQgKALgJAqQgIAkAAANQAABDAXBUQAHAaAsCEQBJDgAAC6QAABngtCgQgRA/gsBDIhXCEIgBABIAAAAgACHE+QAIAYgCAiQA1giAAhTQAAgrgXgqQgXgqAAgZQgBgagVhLQgUhJgNgUIgggzQglg9AAgEIgCABQgMAWgPA5QgVBEgIA2QgLBMgEANQgNA0geAhQhABHAABVQAAAQAIAFIAigzQAXggAVgHIAAAPIAoAGIgqAzQgJALgBAHQAIAKAcAHQAfAHAoAAQA6AAAAgSQAAgZgIgqIArgGQANAWAEANg");
	this.shape_3.setTransform(11.1,-7.8);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFKIQjYg9gygIIAOghIAPgdQAlhFAJgXQAthsARhWQAnjzAAhDQAAgKgGhBQgQhIgviZQgniOAAhoQAAgcAUgJQAJgEAXAAQAlAAAHAQQAFAKgDAyQgHCTBBCsQATAGAeAFQAbAFAIAAIA1gFQA6gKAfgWQgoh2AAhhQAAiBAbgtQANgWAZAAIAoAIQAmAKAAAKQAAAagOAaQgOAbAAAhQAABMAwCeQAYBSAjBtQAnCjAACMQAAA/gOBQQgSBhgdA5QghBBggA3QghA3ghApIgMAPQgEAGgGAFQgPgGiwgygAhBlbQgUgJgFgPQgCgGAAgaQAAgRAJgGQARAFAGABQAMACAWAAQAcAAAKgEQAMgFAJgHIAGgFQAGAAAAACIAAAHQADADAHAWQAGAVAAAEQAAANgbAQQgcAQgXAAQgOAAgigMgAh/njQgGgOAAgkQAAgGABgCIACgBIAFgCIAbAJQAZAIARAAQAiAAASgKIAUgMQAIALACAPQABAIAAAbQAAAMgYAOQgZAPggAAQg5AAgQgkgAhqpLQgHgNAAgXQAAgMAHgCQAEAFAHAVQAIAYgBAIIgEACIgFACIgJgMg");
	this.shape_4.setTransform(11,-7.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.6,-78.1,67.4,141);


(lib.FIZ34LTIE002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AibAhQhQgKg/gYQADgQgCgaQByAVB7AMQB5AKAxgCIBigGQAygDAhgIQAUAUgZAQQgrAbinAAQiUAAhTgLg");
	this.shape.setTransform(0.1,0.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhyA7Qg/gGiLggIgCgVIgBgZQAAgPACgVIAMgBQAvAOB2APQB5ARA1AAQA3AABogIQBpgIALgCQALgCAAAuQAAAwi6AEIh7ABQhWAAgngEg");
	this.shape_1.setTransform(0,-0.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32,-6.5,64.2,12.8);


(lib.FIZ34LPUPILR002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ34LPUPILL002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ34LNOSE002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AhSApQgxgSgSgbIAAgCIABgCIABgBIACABIAHAFIAAAAQAaAIAbAEQAVADApAAQBRAABYhCIACgBIACABIAAACQgFA4gbAXIgBAAQghAdhQAAQgtAAgpgPg");
	this.shape.setTransform(15.7,35.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag2DDIgqgNQgSgFgTgTQgQgSgEgCQAug2AthQQBCh1AEhWIAEgCQADATAAAKQAABEgsBfQglBLguA3QA8AOAYAAQAdAAA5gVQAggLA5gYIAHACQgMA+gQAUQghAmhaABQggAAgZgHg");
	this.shape_1.setTransform(15.5,20.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,31,40.9);


(lib.FIZ34LMOUTH002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah9BbQgSgHgHgGQgGgGgIgNIgMgTQgTAZgRAIQgIADgKAAQgfAAgbhMIAJAEQAOAEAhADIAmADQCSAAB+ggQBZgXB3g2QAIAqgOAQQgKAMgcAAIgdgMQgJAAgFAOIgKAdQgXAthQAAQgVAAgRgOIgQgPQggApglAPQgSAMgaAEQgKACgJAAQgOAAgLgFg");
	this.shape.setTransform(33,12.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiEBgQgTgDgHgGQgHgEgIgOQgJgPgFgEQgTAYgRAIQgIADgKABQgVAAgRggQgNgXgDgWQAOAGBjAJQCWAAFIh6QgDAygIAOQgLASgiAAQgHAAgVgIQgLgDgKANQgiAvgEADQgZAYgyAAQgVAAgKgGQgHgDgSgTQgbAbgUAOQgiAagpAAQgQAAgQgDg");
	this.shape_1.setTransform(34.1,7.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("AgaAeQgJgIAAgfQAAgGAcgIQAggIAIgGQAHAlACAeQgdAIgJAAQgXAAgHgIgAgpAjIABAAQAAgBAAAAQABAAAAABQAAAAAAAAQABAAAAABIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_2.setTransform(29.3,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40152B").s().p("Ah9BWIgDgBQgBgMgHgfIgGgeQAAgCAIgKQAJgIAHAAIA5ANQA2AAAegPQAjgVALgvQALAEAZABQAfAAAHgNQgVBdh4AxQg6AZg9AGIgIgBg");
	this.shape_3.setTransform(48.4,15.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AimBUQgJgWgNgIQgPASgLAJQgNAIgPABQgMgBgSgQQgYgVADgdQAVAEAaAAQBbAADAgoQDWguAqgrIABAWQAAAngLAPQgLAOgfAAQgOAAgIgCQgMgEgHgLIgFAOQgIAQgTAdQgVAihEAAQgUAAgMgHQgHgDgTgSQgyAqgPAJQgbAQglAAQgsAAgOgTg");
	this.shape_4.setTransform(34.2,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#40152B").s().p("AiICmIACgXQgBgugIghQgKgfgFgPQAGADATACQASADAIAAQA9AAAfgSQAhgRAMgwQAQAFANAAQAoAAAbgkQAdgogMg1QAEAIAGAhQAFAeABAHQgBBmgzBAQhJBdisAaIACgQg");
	this.shape_5.setTransform(52.3,11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#862D59").s().p("AgmAmQgHgpAAgSQAAgUAOgRQASgWAegCQACAJAHBEQAIBAAMANIhTALQAEgLgFgig");
	this.shape_6.setTransform(32.9,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AikBfQgGgGgIgNIgMgTQgdAlgZgBQgTAAgQgcQgNgVgCgPQBbAOC5gnQDGgpByhFIABAMQADAsgPAXQgOAVgZAAQgFAAgSgHQgRgHgFAAQgJAAgIAOQgJASgGALQgbAtg6AAQgWAAgRgMIgZgRQg8AugLAHQgZAPgbAAQgsAAgPgMg");
	this.shape_7.setTransform(34.4,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#862D59").s().p("AADBbQgHgJgBgMQgEgfgTg3QgTg1AAgJQAAgHAJgIQAJgIAHAAQAOAAARAJIAQAIQAKAAACgCIALCSQAAAqgSAAQgQAAgLgLg");
	this.shape_8.setTransform(38.7,20.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40152B").s().p("AhyCZQAAg+gWhKQBLgGAgglQAQgUAGgTQA/AAAVgWQAagaAGhZQALALAJAiQAIAjAAAmQAAB6hZBUQhJBHhaAKg");
	this.shape_9.setTransform(56.7,9.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhUA8QgGgFgIgNQgIgQgFgEIgZAbQgFAEgMAGQgEgKAAgKQAAhtB5AAQAwAABKAvQA/AmAJARQgXgCgTgMIgTgOQgtApgfAPQgVALgZAAQgsAAgPgLg");
	this.shape_10.setTransform(26.5,8.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40152B").s().p("AgYCCQgRgPgHgmQgMg9gzg4Qg1g1gKgMQAGgDALgJQANgJADgDQASASAMAQQAIAGAiAAQAmAAAigLQAxgPAOgfQAOALAMADQAKACAXAAQAfAAANAsQAMApgLA1QgLA6ggAlQglAsg2AAQgpAAgTgRg");
	this.shape_11.setTransform(29.7,27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhBAwQgEgXgMgFIgSAOIgEgOQgCgIAAgGQAAgjAdgVQAYgSAeAAQAqAAAjAVQAoAYALAsQgjAwhBAAQg5AAgOgVg");
	this.shape_12.setTransform(23.5,9.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40152B").s().p("AgoBKQgJAAgGgfIgHguQgDgOgSgfIgXgoQAOAYAPAFQAPAHAsAAQAQAAAfgKQAugNAXgXQAJAmAAAPQAAA7gXAnQgaAtgvAAIgzgYg");
	this.shape_13.setTransform(25.4,24.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#40152B").s().p("AgmBUQgGgHAAgLQAAgJAGgSIAFgRIgPgcQgPgdAAgJQAAgZAUgOQATgNAYADQAaACASASQAUAUAAAhQAABAgbAdQgUAVgdAAQgSAAgIgKg");
	this.shape_14.setTransform(21.4,12.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#40152B").s().p("AgiAaQgNgQgMgFIAjgYQAYgUAFAAQAMAAAQAPQATARAIADIgyAiQgLAKgPAAQgHAAgLgOg");
	this.shape_15.setTransform(17.7,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCC99").s().p("AieCVQgMgJACgPIABgCIACgBQALgBAFgDIABAAQAOgGAjgdQA2gtAigmQBJhXAPgYQAKgRAKgaIABgCIACAAIAeAFQAZAGAHAJQAUAagmBGQgfA4gbAYQggAcgaAMQgnAQgIAFIAAABQgVAMgvAhQgPAKgYAAQgWAAgKgIg");
	this.shape_16.setTransform(56.7,8.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiRBSIgLgRQgGgJgJgFIgUAVQgPAPgTAAQgPAAgQgRQgUgVgDgmIBBADQCAAACdgoQB+ghBTgoQhRBrgNAOQgmAngzAAQggAAgcgcQgeAbgjAUQglAUgXAAQgqAAgPgSg");
	this.shape_17.setTransform(32.5,6.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D580AA").s().p("AhdAkQgngnAAgnQAAgHAFgBIAKgEIADgDQAUAhAMADQAKAEAnAAQAJACAbgJQAYgIAPgGQAXgKALgPQAHgLAKAAIAoAPIgZAmQgYAlgQANQgbAcgMAHQgRALgsAAQgZAAgkgng");
	this.shape_18.setTransform(27,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#40152B").s().p("AgHgCQAMgJARgBIgJALQgRAEgKAFIgHAFQABgJANgGg");
	this.shape_19.setTransform(43.6,16.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AigCQIhHgEIAAgCQABgmAIgPQAGgNAXgSQAPAdAPAGQAMAGAnAAQAmgBAmgSQAfgQAUgWQAKAGAVAFQAQAEAEAAQA7AAAkgVQAkgWAIgoQANAGATgBIARgDQASgFAHgFIAbAfQgMAbgzAkIg4AiQgdARgfAGQg0AMgUAHIhPALQgiAFgsAAIg6gEgAiuAvQgIgYgMgGQgNAEgRARQgPAPgHAAQgbAAgRgnQgMgpgDgFIA8ACQBsgBCKgcQCbggCEg4IABAZQgBApgKAQQgOAVgjgDIgjgNQgIAFgKASIgSAdQgcAkg6AAQgvAAgFgYIgGgEIg9AuQgdAVgcAAQg3AAgPgUg");
	this.shape_20.setTransform(34.8,11.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#40152B").s().p("AgSAsQAMgJAFgwQADgwANgIIABABIADBBQgFAugJAaIgBABQgNgXgJgDg");
	this.shape_21.setTransform(65.8,1.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AidClQhBgEgKgJIAGgzQADgRAKgLQAMgJADgEQAVAgAMAHQAJAFAeAAQAnAAAjgMQAvgQAPghQAZAQAiAAQBtAAAWhaQARAGAYgEQAMgBAMgDQAJAAARAUIAUAZQgUAUgfAZIgdAXQgzAkhCAQIgfAHQgCAAAAAAQAAAAAAAAQABABABAAQACAAACAAQgMAEhKAMQhFAMgIAAQgpAAgogDgAiqA0QgXgdgGgCQgaAngdAAQgSAAgQgbQgOgagIgnQB3AKCxgrQCZgmCQhAIAAAgQAAAwgKARQgMAVgkAAQgFAAgPgGIgRgHQgPAngPAUQgcAjhEAAQgWAAgRgOIgOgQQg1BIhCAAQgrAAgRgWg");
	this.shape_22.setTransform(35.3,10.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#40152B").s().p("AgTBJQgRgTAAgCQAAgHAGgvIAGg8QAAgJAYgOQAOgHARgIQAGBDAAATQAAAPgKAhIgUBDQgJgIgRgUg");
	this.shape_23.setTransform(67.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},7).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

	// Layer 5
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AiNBuIgbgbIgJAOQgMAKgjAAQgpAAgVgyIgQgpQgJgVgLgKIACgFQAOAGAWAGQArAJBBAAQDIAACRg6QAdgNA3gdQAkgTAOAAQAWAAgCArQgBAigIAPQgQAXgJADQgQAFgsgGQgVBThvAAIgYgIQgYgIgKAAQgnAggbAKQgdAJgmABIgIABQgfAAgIgJg");
	this.shape_24.setTransform(32.4,11.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AkoAzQgUgJgTgMIAJgGQARAEBpAPQD3AACOg3QAQgGBCggQAkgRAXAAIAKADQhhA/iJAhQiLAkihAAQg8AAgmgRg");
	this.shape_25.setTransform(32.9,8.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AiRCdQgUgEgLgJIABgJIAAgCQACgBAGAAIAgAEQAdAEAMAAIgKgwQgZABgMgDQgWgGgNghQgCAKgHAFQgLAJgjAAQgwAAgOg6QgIgegDgHQgJgRgSABQgBgBgBgIQABgFADgCQADgCAGAAIA0ALQAxAKAHABIAuABQBqABBrgoIChg7QBXggAUABQAJAAAGARQAEANAAALQAACTh/BJQhqA9inAAQg1gBgagEg");
	this.shape_26.setTransform(33.1,11.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ag6DOQgegFgLgGIADgBQAGgBAnAAIAAgwIgKg1QgHgbgcAAQgnABgIgFQgLgQgRgVQgQARguAAQgngMgIgcQgIgbgIgHQgJgHgJgEIgngFQgYgFgEgbQBOAPA4AAQA9AABlgPQBkgPCRguQCSgtATgKQATgKAGgCQAGgBAJAPQARAeAABLQAAB0heBUQhwBkjIAAQgKAAgYgEg");
	this.shape_27.setTransform(32.6,11.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgYDtQAAgFgDgDQAEgHARgEQASgGAeABIACg6QABgRgMgeQgXg5gJgYQgMAJgeAHQgYAGgRAAQgpAAgKgFQgHgEgZgfQgRAQgnAHQgdABgRghQgUgqgMgIQgIgFgxgFQgjgEgMgfQADgBAoAJQA0AMA6AAQDWAADQhTQA3gWBIgkQA2gZAHAAQAUAAAMArQAMAqAAA9QAACGhcBdQhtBvjLAAQgTgBgFgFg");
	this.shape_28.setTransform(32.1,10.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhgBCQgBgCgjglIgpgqQgQgWgEgIQgPgeAAglQAAg4AugeQAogbA9AAQBbAABYBMQBbBPAABZQAABdg7A8Qg2A2hHAAQhbAAgeigg");
	this.shape_29.setTransform(29.3,21.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ag7CGQgJgRgIg1QgDgXgfg1Qgcg0AAgTQAAgyAqgbQAhgVApAAQBEAAAxBCQAsA9AABIQAABigiAlQgZAdg6AAQg6AAgXgwg");
	this.shape_30.setTransform(24.7,18.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag8BNQAAgPAFgSIAGgRIgPgaQgOgZAAgPQAAghAcgXQAZgUAZAAQAjAAAXAlQAVAhAAAtQABAvgVAgQgXAlgoAAQg4AAAAgng");
	this.shape_31.setTransform(21.4,11.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AguAzQgPgQgKgGIgYgEQgTgEAAgJQAAgJADgDQACAAAHgCQAHABApgcQAogdAMAAQAVgBAcAWQAbAWApgDQAAASgDACIgXADQgYAFgcAbQgZAXghgBQgRAAgIgIg");
	this.shape_32.setTransform(18.1,6.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjYA6QgqAGgUgdQgCgCgag4QgKgYgngCQgggCgBgfIADgBIBNALQBLAMAcAAQDAAACihDQAagLBKgjQAsgVARAAQAGAAALAHQALAGAMAAQAWABAJAHQAIAFAAALQAABMg+BHQgrAuggAOQgtATgyAgQgiAVgRAAQgVAAgKgHQgKgIACgOQAVgCAAgKIAAgCIgRgHQgKAtg0AoQgvAmgmAAQhoAAgkiJg");
	this.shape_33.setTransform(33.3,11.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AjfCqQgggCgRgFQgSgEACgIQADgBAEgEQAFgEAFgDIAlAGIAIg6QgMAFgUgPQgVgPgEgNQgUg1AAgEQgEgTgggGQgggHgDgKQANgCAKAAIB7ALQB6AACcgkQCkgmB0g5IAMgFQAIgEAGADQAUAJgBBJQAACMiQBIQiABAjeAAQjMgOBkAEgACSB7Qg0ALgUAHQAzgJAagIQAdgJAagPQgdAQgfAHg");
	this.shape_34.setTransform(32.9,10.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AjcDMQg9gEgMgPQAHgIAQgEQAQgFAHAGQACgbAGgpQghABgQgVQgKgNgMglQgKgigKgLQgRgVgiAEQgFgFgEgHQAOgDAKAAQALAABeAIQCaAAD3hXQB8grBggsQAIAAAKAVQANAbAAAqQAACXijBhQiEBNiIAAQiCAAgygEgABPChIAMgBIAOgFg");
	this.shape_35.setTransform(34.9,8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},7).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,64.8,23.8);


(lib.FIZ34LHEAD002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AjtNFQAmjuBYjfQCqmcA4iWQBYjtAAijQAAheg0iBQg8iYhbhKQhUhEg0gbIg0gbQEAA4B4CnQB4CogKDwQgLDxg9BvQg+BvhOCYQhOCZhaDBQhdDCgSC4QgTC4gfAxQgNA9gqAzQAXhTAmjug");
	this.shape.setTransform(118,124);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AAEgOIgBALQgDAMgDAGQAFgRACgMg");
	this.shape_1.setTransform(95,234.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AgeRwQgbgggKglQgFgRhGixQhCiigTguQgZg6gNgZQgyhbhtiZQiRjLhHirQhTjNAAjTQAAiUAahrQAgiDBGhQQB7iLCOhCQCHg/CiAAQAOAAA6AHQBRAJA1AMQANACBuAoQBzAqApATQB/A+BHCSQBKCbAADqQAAB4g7CIQglBUhoDCQgyBmgjBAQgeA9hsD8QggBMgiC4QgmDKgIAYQgfBigVAZQgVAXgyAAQg6AAgmgzg");
	this.shape_2.setTransform(75.3,122.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag0SCQgagegRg9QgJggg9iPIhDiaQgPgmgZg3QgihNgWglQgfg4hOhrQhQhwgZgpQh3jLgmhpQg3idAAjfQAAlXDdjNQBghaB9gwQB5gtB+AAQBvAABiATQBQAPBmAjQAmAMBFAlQBGAlA8AwQA9AwBBCZQBBCYAACzQABCBg3CUQgmBng+BmQhMCBhZC1QhgDFgUBLQgrCpgNBIQgRBYglCZQgTBQgWAbQgYAdgzAAQhgAAgxg3g");
	this.shape_3.setTransform(75.5,122.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,1.2,151,242);


(lib.FIZ34LHAT002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AAVBYQAAgPgNgYQgWgogwgaQAHgOAMgRQAMgTAOgZQAsAdAVAkQAPAaABAXQgEAbgnAsIAAgFg");
	this.shape.setTransform(74.9,67.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("Ag5B0QgOgUgpgnIAig7IAqAfQAlA2gBAeIgGATQgJASgIANIgigvgAA2g6QgZgfgigjIAdgmQBZBbAAAIQgYApgIADQgFgNgWgag");
	this.shape_1.setTransform(74.8,69.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AkFFXQgyg4gKgHQA0huAagyIBEBZQARAVAAAKQgqCkgEAJQgEgLg1g7gACLgdIgegSQgBgBgRADIgeAGIgLgLQAFgDASgWQASgWAUgcQALAHARACQAMgEANgIQgfgFgCgWIAFgcIgBgSQgOACgMAAQgZAAgLgIQgLgIAAgRQAAgIAGgQIAFgPIAAgIQgEgEgJAAIgUAIQgTAIgTAAQgDAAgLgDQgPgFgFgHQgFgFgEgUQgDgRgGAAIgbAEIgbAEQgfAAgKgSQgMgUADg0IATgGIAAAWQAAAdAPAKQAHAFAIgCIA3gOQATAAAFAZQAEAZAWAAQANAAAvgLQAMAHAIAXIAHAZQAJASAiALQAdAKAAAPQAAAFgFAMQgFAMAAAFQAAAKABABIAAACQACACAGAAQAjAAAKgXQAFgOAJggQAHgNAfgbQAcgYAAgJIgKgqQATABAPAVQAQAZgBAcQgCAbghATQgiATAAAJQAAAQAhAFQAgAFAAAgQAAAqg1AAQgFAAgJgEQgKgEgFAAQgQAAgDAPQgCAGABAaQAAAvgYABIgEAAQgXAAgagQgAgehwQgNgNgdgXIAlgnIATgWQAUgaAKgEQAHgCAPAAQgJAjAWAQQANAKAlAJQgBAWhSBgQgYglgWgWg");
	this.shape_2.setTransform(86.4,65.7);

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("ABwB4QAAgphGg7QhThEhxgLQAMgQAOgRQAbggAMAAQBPAABSBAQBTA8AAA2QgEAbgnAsIAAgFg");
	this.shape_3.setTransform(65.7,64.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("ADUCWIgCgBQhRAEhng7QhUgxhWhSIgwgoQgSgSgCgYQgBgOAJgIQAJgIAQAAQAYAAAtAVQAYALA+AiQAoAYAxAqIA1ArQAoAaAeAsQAZAjAAAOQAAAFgBAAIAAAAg");
	this.shape_4.setTransform(42,96);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8089DD").s().p("ACxBOQg7g1h7geIAqgvQBSADBbA/QBeBDAAA/IgIATQgJASgIANQgrg/g7g1gAlkA7Qg8hYAAg6QAAgfAKgRQAJgRARAAQAuAAAsBhIAmBXQAYA3AWAiQgQAEgTAMQgRALgDAAQgjAAg8hZgAEfhiQhMg4hPAEQASgUAIgOQAEgJACAAQBUAABbBJQAhAaAYAcQAVAaAAAIQgYAngIADQgkg/g+gtg");
	this.shape_5.setTransform(44.4,66.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AjCF+QhThBirhSIBBg7QA8g0AFAAIBQAWQBkAwAsA4QAsA3AKAPQAKAPAAAKQABAEgPA3QgTBEgKAvIgCABQgphNhOg9gAEIBHIgWgRQgFAAgUAFQgUAEgFAAQgGAAgBgBIgGgKQAOgKAvg/QAPAKANAAQAGAAASgNQgggJAAgTIADgTQABgOAAgMQgjAEgPgEQgXgGAAgZQAAgIAGgPIAFgPIgBgJIgBgDQgBgBgKAAIgUAJQgTAIgUAAQgYgDgIgIQgEgFgGgWQgFgTgGAAIgbAEIgbADQgcAAgMgQQgJgNAAgcQAAgfgEgIIgFAHQgDAHgDAjQgEAogCAFQgDAPgPARQgSAUgRAAQgZAAAAgbIAPghQAAgNgPgEIgjgCQgzgEAAgoQgBgkAkgdIAkgcQAAgFgFgMQgEgLAAgFQAAgfAQgVQAUgcAtAAIAXAJQAVAJAIAAIAogXQAwgXAkAAQArAAAfA4QAOAbAMAcIAbgEIAcgEQAbAAAbAVQASAOAJAOQALAYgOAjQgIARgJAPIABAOQBHgDAhApQAUAYAAAYQAAAighATQgiATAAAJQAAAQAhAFQAfAFAAAgQAAAog1AAQgEAAgJgDQgKgDgFAAQgQAAgEAMQgBAGABAbQAAAugoAAQgPAAgagRgAgQhTIhWgaIAhgkQASgVAUgiQAIAMATAEQAKADAZAAQATAAAMgHQALAsAcAKQAWAJAqgLQgKAiAXARQAMAJAlAJQAAAWhSBeQgwhKhxg6g");
	this.shape_6.setTransform(73.5,55.2);

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AjHHwQibhbhQiNQhCgWg6hzQgyhjAAg4QAAgZAQgVQATgaAhAAQAgAAAeAiQAdAfAVA2IAcBFQAhBLAZAiQDri7B6irQgegEgHgVQgDgJAAglQhCgUgHgFQgSgNAAgtQAAgoAegVIAVgMQAKgHABgGIgJgkQAMg3AmgdQAegYAoAAQAWAAAKAHQAKAHADAAIAhgUQArgVA3AAQBaAAAiBwQAogIAJAAQAoAAAiAhQAgAfAAAaQAAAcgJAUQgEAKgGAIIgEABQANACAZABQAUADARAPQATARAJAPQARAbAAAjQAAAdgNAPQgWAQgQAPQARATATARQAHAGAAAKQAAAngXAUQgaATg0gEIABAIIACAPQAAAigWATQgSARgdAAQgOAAgfgRIgegRQgFAAgKAFQgLAEgFAAQgcgIgNgKQhjCXg3BtQg3BtgDAXQgCATAIA4QAAAfgTAMQgMAIgYAAQheAAiDhNg");
	this.shape_7.setTransform(60.8,57.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,121.9,114.7);


(lib.FIZ34LHAIRR002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AgdEHQgZgNgPgXQAGgCAPAIQAVAJAVAUIAJAKIgDABQgLAAgSgKgAgdBoQgegSACgcQADgHAIgDQAKAKAjAeQAVAUADAJQgHABgKAAQgMAAgXgOgAAfhpQgPgNgIgTQAlALAUAUQAPARgEAJIAAAAQgkgTgJgGgAg1hmQgPgKgIgZQAFgDADgEIAuAtIgBABQAAABAAAAQgBAAAAAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAAAAAQgBAAgBAAQgCAAgDAAQgPAAgKgGgAAAjeQgPgUAAgWQAAgIABAAIgCAAIAGAAQAJAAALAPQAQAUAHAgQADACgKAAQgMAAgOgTg");
	this.shape.setTransform(23.6,51.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AAAF/IAHAAIgEACIgDgCgAhaEoQhDhGgThOIgDgJQAZAbAtAYQAnATAPgBQgggjgwhUQg3hfgFguIgCgKQALAdApAUQAVALAUADQAKgBAEAAQAAgGgNgTQgRgcgJgUQgnhUABiFIABgKQABASA9A/QA6A+APAGIAEgCQACAAAAgHQAAgFgNg3QgOg3AAgFIADgrQADgnADgWQAYBTAoAwQAqAwAxAAQARAAAXgKQAXgKAAgIIAAgFQALAFAFAFQAHAJAAANQAAAJg4D/QgCAygcBBQAAgGAAgCQAAgDAAABQAAAAAAAEQAAADAAAGIgkBxQgNAogNAWQgOAVgSAEQg2gYg2g4g");
	this.shape_1.setTransform(23.1,45.7);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiJEaQgZgtgTg3QgOgogCgPQACgDAGgBQATANAfAdQAZAZAEAAQgphFgSgnQgvhmAChOQAEgHAGgBQAEAFAbAkQAdAoASAUQgshtgBhQQgChQAVghQAIAIBZB6IADACQgGhQAHhEQAIhRAWgQQADAcALApQAMAvAMASQAZAjAdAaQAiAeAYAAQAFAAATgFQAUgEAFAAQANgBALAJQANAJAAARQAAAJhHEdIgMAyIgLAkIgmB1QgQAxgMAVQgPAYgRAAQhWgBhKiKg");
	this.shape_2.setTransform(21.4,42.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,43.1,84.2);


(lib.FIZ34LHAIR002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AJFKMQA7gWAegaIAEAAQACABAAAGQAAAPgoAPQgeAMgQAAIgJgBgALtJGIAQgMIAQgKIACAAQABACABAEQgDAOgIADIgHABQgHAAgLgCgAJnIEIAAgBQgDgCgCgDQAGgCAhgWQAfgWAEgEIAGACQACACABAGQAAAGgGAHQgJAPgWAJQgYAJgKAAIgHAAgAJGGgIgEgDQAOgKAGgKQAEgDAaABIABACQACACAIADQgGAFgUAIQgTAGgEAAgAKiEOIAFgFQAGgEAAAEQADAagUALQgLAHgcAEQAOgLAfgggAH/CmIACgMQAMAOANAfQALAaAAAFIgBAWIgBAHIgBABQgFAAgehegAkSjwQgTgIgQgRQAHAAAaAIQAaAIAEADIAKAFIgGAFQgEABgGAAQgJAAgNgFgAnCkDQgegMgMgRIABgEIAGgBQA2ARAXAZIgCACIgHAAQgJAAgYgKgAqlkwQgNgQAAgKQAAgHABgBIADgCQA6AmAUAMQgBADgGADQgHACgHAAQgdAAgTgWgAkbk+QgYgNgFgHIgLgLQAOABAZAQQAaAQAEAMQgIgCgVgMgAoZl+QgXgPgNgeIABgHIAeAVQAVAOALAXQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIgFABQgKAAgOgJgAmZmeQgZgYgCgQQAGAEAZAbIAdAiQgMgFgVgUgAqgmbQgagTACgXIAAgEQABgBAAAAQAAgBAAgBQABAAAAAAQAAgBABAAQALAEAVAYQAVAWAHAOIgFABQgNAAgVgPgAsRniQABgKAEgPQADADASAkQASAlABAGQgsgdgBgcgAlhnoQgPgdAAgHQAAgHADgDIAGgDIAOAfIAWA3QgMgGgSgfgAomo6QAHAGAHAQQAJAQAQApQgTgJgUhGgAqppWQgOgVgBgOQADgKAFgJQAFAEAJATQAMAaAJAgQgOgGgOgVg");
	this.shape.setTransform(92.5,107.6);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#664548").s().p("AD/MiQAGgeBbhIQAwgnBLg5IgIACQgWAJgSgXIgOgaQAAgOAVgaQAggpAJgQIgKAEQgQAEgHAAQghAAgLgLQgGgGAAgPQAAgGAkg8QAphFAThMQghAQgUAIQgkAOgiAAQgfAAgGgQIgBgSQAAgGATgyIASgxQAXgSAQgTIABAQQgCANgOAoQgQAqgJAKQAGAOATAAQAyAAA2gxQAPgNA7hDQAMAig2CCQgwB1gTAUQAQAPAFAAQAUAAAegYIBIg7QgUA+gHAjQgEAMgcAoQghAqAAAKQAPAJAsgOQApgMANgNQADAgg4BDQgqAyg4AwQgPANghAWQgfAVgGACIgtAPIgiAJIgtAaQgEgCgCgHgAk+i5Qh7gkhPhgQgyg8gehGIgUg7IAFgRQAFgPgFgcQgDgUACghQADghAHgTQAYhBARgUQAEgGA3gwIghBRQgZA8gBBiQgBBiBKBhQBMBkCjBLQAOAKA3ARIBEAUQiVgPg1gQg");
	this.shape_1.setTransform(117.7,105.8);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AH7LIQAniPAAgrQAAilg5h1QgWgtgog4IhJhmQgug/hPgnQhBgghegRQgHgFgTgIQgSgIgDAAIhDAIQgyAJhxAJQhyAIhOgFQhNgFhNgdQhXgfg8hMQhOhigrhYQg9h+AAh9QAAgGAFgaIAEgZQA4DfBbAAQAGAAACgCIACgCQgHgcgGgjQgNhMAAg+QAAgNAJgmQAIgnAUg2QAUg2ARgHQgPCXAmBpQAkBnBAAAQAHAAABgDIAAgFIgIhvQgIgeAchUQAdhUAUgOQgJAzgRBSIgOBFIAJAiIAOA4QANAsAXAfQAQAUAMAHIATAVQAQhQAmhMQAyhnBEgqIgIAJQgYAVgRA5QgRA7AABDQAACBBKBhQBMBkChBLQAUAKAzAPQBlAeBKAiQAqATBHAoQAWANAnAmQArAsAaApQAXAjAMAXQAFAGAXAAQAcAAASgFQApgLATgjIABAQQgCANgOAnQgQAqgJALQAGANATAAQAWAAAogVQAegQARgOIAhghQAHgIAUgeQAPgUgEAbQAEAqg1B7QgxBygNAJQAQAOAFAAQAUAAAegXIBIg8QgQA+gSAtQgRArgIAAQgEAAgOATQgPAUAAANQAPAIAsgNQApgNANgNQgNBEhXBaQhSBUg2AOQhmAagXAsQgLAVgOAKQgYARg7ANQAugsAvipg");
	this.shape_2.setTransform(91.5,102.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#664548").s().p("ACxGdIBFgIQAEAAARAHQAUAIAGAGIh0gNgAjpAGQgYgdgMgsIgPg3IgIgiIAOhGQARhRAIgzIAyhDQgYA7gQBZQgNBOAAA5QAAA+ANArQALAmAbAhQgNgHgPgVg");
	this.shape_3.setTransform(69.2,48.8);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AF8PXQgJgEAAgCQAAgRARgdQARgeArhgQArhgANh7QAOh6gth1Qguh0hDhVQifjGjiAAQgaAAhzAKQh0AKgLAAQitAAhagiQhcgjhohqQhChEg4iVQguh7AFhNQAFhMAOgfQANgeANgPQAGAKAaB3QAgBzAnALIAMAHQgEgDgGgiQgGgigChOQgChOAihXQAmhjAlgCQARABAAAZQgCBIABAPIAHA4QAFA1ALAxQAKAxAVAbQAUAbAIgFIgFgSQgEgNAAhOQgBhOA3hgQA3hfAfgcQAegbAQAHQABACAAAKIgdBzQgdBvAABlQAAAmACAOQAEAWAOAsQAvh2BAhGQBAhFBDgSQgLAogtBnQgeBFAAA7QAADbDUB4QBAAlBrAmQB3AqARAIIBgAtQApAVAyAvQAyAvAqA6QAfApAEAAQAtAAAVgWQAVgWAQgVQANgPACgBQAAgCACAHIAEATQADALgGAsQADAcgXA7QA8gGA6hWQAMgSAZgsQASgfAHgGQAHAAACADQACAEAAAPQAABUgNAzQgFAUg6CsQACgBAxguIA4g0QAGAFAFgDQABABAAAVQAAAdgPA6QgTBMgeAlIgIAKQAogIAqgmQADACAEgBQADABAAAOQAAA0gSAqQgbA9gyAvQgyAvg+AjQg/AjguAPQgvAPgNAcQgNAdgIAFQhBAngwAAQgPAAgLgFg");
	this.shape_4.setTransform(92.1,98.8);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.5,0,183.4,197.8);


(lib.FIZ34LGLSSMID002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AEcAvQAGgFAFgFQiKgdgugHQhHgIhXAAQg1gBhjANIhZAPIgJAAIAAg/QAHgBAGACQgCABgHABQgDAAAAAHQAAAGAFADQADACAIgBQAbAABPgLQBPgMBfABQCUAAAzANQA0AOAZAKIATAGQgDgBABgEQABgDAEABIAAA4g");
	this.shape.setTransform(33.6,6.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB8AgQhVgLg6AAQhhAAhYANQgsAHgdAGIgQAAIgCgDIAAgHQAAgGABAAIAAABQAEAAACgCIgJAAIAAg8IANgDIBhgMQBWgJA6AAQCOAABQALQBSAMAlAcIAAA6IiugXg");
	this.shape_1.setTransform(33.6,5.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.8,0,59.8,11.3);


(lib.FIZ34LGLSSL002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("Ag2AnQgfAAgQgDIAAhNIABADQAAAFABABQAEACAWAHQAWAIAGAAQBkARAvAIQgGAUgDAFQgFAGgNABQg2gEhLABg");
	this.shape.setTransform(13.5,4.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhzAxIAAgTIAHgCIgHgCIAAhPQCfAcBIAOIgWA8QgGACgZACIgeABg");
	this.shape_1.setTransform(14.9,5.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.3,0.2,23.2,11);


(lib.FIZ34LEYER002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgxD3IALgWIAQgfQAJgTANg1QAOg1gCgzQgCgqgFguQgFgtgNgqQgPgugdgoIgCgCIAJgBIALABQARAEAPAOQAPAQAPAcIAEAIQAjBGgCBnQgDBkggBMQgeBJgsAAg");
	this.shape.setTransform(19.1,27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4F9B9F").s().p("AggDhIAPgfQAGgNAJgdQAVgEAXgHQgFARgHAQQgeBJgrAAIALgWgAAyhzQgZgHgZgEIgHgfQgQgugdgoIgBgCIAIgBQAtABAgBGQAOAcAIAhIgEgBg");
	this.shape_1.setTransform(18.6,27.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A3C0C3").s().p("AgdBuQAPg1gCgzQgCgqgFguIgFgbQAbAFAZAIIABAAQAFAmAAAsQgCA8gMA0IAAAAQgWAHgXAFg");
	this.shape_2.setTransform(22.1,29);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C0C3").s().p("AgVgMIgCgZQAXAFAXAHIABABIABAAIgBANIgEAlQgVAHgXAFQAEgagBgYg");
	this.shape_3.setTransform(22.6,31);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F9B9F").s().p("AgmDhIAQgfQAJgTANg1IAFgXQAWgEAYgIQgJAvgRAoQgeBJgsAAIALgWgAA7gVQgZgIgagEIAAgBIgDgkQgFgtgNgqQgPgugdgoIgCgCIAJgBQAtABAgBGQAfA/ACBbIAAAAg");
	this.shape_4.setTransform(19.1,27.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F9B9F").s().p("AgmDhIAQgfQAJgTANg1IACgJIAmgJIAHgBIABAAQgJAmgOAhQgeBJgsAAIALgWgAA4AzIgpgUIgDgCIAAgLQgCgqgFguQgFgtgNgqQgPgugdgoIgCgCIAJgBQAtABAgBGQAjBGgCBnQgBAbgDAbg");
	this.shape_5.setTransform(19.1,27.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F9B9F").s().p("AggAlIAPgfQAJgQALgxIAKACIAfAGQgGAVgIASQgeBHgrABIALgXg");
	this.shape_6.setTransform(18.6,46.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3C0C3").s().p("AAFCqQAIgpgBgnQgCgtgFgtQgFgsgNgqQgPgugdgnIgCgDIAJgBIALACIAgASIAeArIAEAIQAjBGgCBlIgBAPIgMBdIgqgFg");
	this.shape_7.setTransform(19.1,20.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F9B9F").s().p("AgdAaIAPgdQAHgNAIggQAeABAIAGIACABIgHARQggBHgqABIALgXg");
	this.shape_8.setTransform(18.3,47.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A3C0C3").s().p("AAkC8QgPgHgVgBIAAgBQAOg2gCgyQgCgtgFgrQgFgtgNgqQgPgvgdgnIgCgCIAJgBIALABIAgASIAeArIAEAJQAjBGgCBlIgBATIgTB2IgEgCg");
	this.shape_9.setTransform(19.1,22.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F9B9F").s().p("AgUAEIAPgdIAAAAIAKgBIAcABQgdAzgkABIAMgXg");
	this.shape_10.setTransform(17.4,49.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A3C0C3").s().p("AAbDQQgSgEgVABIAMgsQAOg2gCgyQgCgtgFgrQgFgtgNgqQgPgvgdgnIgCgCIAJgBIALABIAgASIAeArIAEAJQAjBGgCBlQgDBkgeBJg");
	this.shape_11.setTransform(19.1,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Layer 2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9FFFF").s().p("AAED3IgCAAQgGgBgIgCQgZgIgUgfIgMgUIgEgIQgkhJgEhhIgBgRQABhAAUg5IABgFIADgGIABgEIACgEIADgGIABgDIADgGQAeg/AjgOIAKgDIAGgBIAMABQARAEAPAOQARAQAOAcIAFAIQAiBGgCBnQgCBkggBMQggBJgsAAg");
	this.shape_12.setTransform(13.7,27.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6569AC").s().p("AgjDhQAKgQAJgTQAghMAFhdIABgKIAAgOQAChtglhTQgLgVgLgQIgCgCQAXALARAPIAIAQQAhBNAABeQAAAwgPBWQgGAcgMAdQgLAagNAVIgSALIgMAHIAIgKg");
	this.shape_13.setTransform(25.6,27.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9FFFF").s().p("AhcBzQgSg4gDhAQgCg2ALgxQBPgSBQAOQAbAFAbAIIAAAAQAGAngBArQgBA8gMA0IgBAAQgXAIgXAEQgzAMgrAAQgcAAgYgEg");
	this.shape_14.setTransform(13.7,29.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("AAAD3QgsgCgghEIgJgSIACAAIADAAIADAAIACABIAEAAQA0AEA6gLIAEgBQAWgEAYgHQgGARgGAPQggBKgsAAIgBAAIAAAAgABhhzQgagHgZgEIgGgBQhBgJhDAMIgDAAIgEABQAHgWAKgVQAihGApgJIAHgBQAsABAjBGQANAcAIAhIgDgBg");
	this.shape_15.setTransform(14,27.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9FFFF").s().p("AhpA2QgGghgCgiIAAgLQBZgWBZASQAYAFAXAHIACABIAAAAIgBANIgDAlQgXAHgXAFQg5AOgvAAQgjAAgegHgAApg8IAWAEIAAAAIgWgEg");
	this.shape_16.setTransform(13.7,30);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AACD3QgrgCgghEQgQghgKglQBHAMBXgUQAXgEAXgIQgJAvgQAnQggBKgsAAIgBAAIgBAAgABygVQgagIgZgEIAAgBIgWgDIiXAHIgDAAQADhJAfg/QAihGApgJIAGgBQAtABAjBGQAfA/ABBbIAAAAg");
	this.shape_17.setTransform(13.7,27.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(33,35,43,0.282)").s().p("AgEALIAJACIgFACIgFACIABgGgAgBgLIAAgFIAAAAIADADIAEAEg");
	this.shape_18.setTransform(20.5,34.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9FFFF").s().p("AgkALIAAAAIAAAAIAAAAgAAagLIALAJIAAAAIgLgJg");
	this.shape_19.setTransform(16.5,33.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CCCC").s().p("AACD3QgrgCgghEQgcg6gJhIIBnAVIAAAAIAAAAIBGAOIgCAHIgJADIglANIgBAAIgIABIgBACQABAGAFADQAEADATgDIABAAIAJgCIAMgDIAngIIAHgCIAAAAQgIAngOAgQggBKgsAAIgBAAIgBAAgAhwAZIgBgSQgEheAmhPQAihGApgJIAGgBQAtABAjBGQAiBGgCBnQAAAbgDAbIgBgBIgogUIgDgCQgigRgMgJQgEgDgGAAQgEABgDADIAAABIABABIAxAmIAMAJIgBAFg");
	this.shape_20.setTransform(13.7,27.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#66CCCC").s().p("AACA+QgrgBghhCQgKgVgIgYIAUgFIBBgGIACAAIAxAEIAIABIAKABIAfAHQgGAUgIATQggBHgsAAIAAAAIgBAAg");
	this.shape_21.setTransform(13.7,46.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#D9FFFF").s().p("AhbC+IAUgFIgUAFgAhxBAIgBgTIAVh3IABgFIADgGIABgEIACgEIADgGIABgDIADgGQAchIAlgFIAKgDIAGgBIAMABIAgASIAfAsIAFAIQAiBGgCBlIAAAPIgMBdIgqgFIgLgCQhEgHgzAPIgbAIQgOgxgCg5g");
	this.shape_22.setTransform(13.7,22.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#66CCCC").s().p("AgBAxQgtgCghhCIgBgCIANgHQAigUA9AAIAAAAIANAAQAeABAJAGIABABIgHARQggBHgqABIAAAAIgBAAg");
	this.shape_23.setTransform(14.2,47.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D9FFFF").s().p("AhxA2IgBgTQgBg7AWg8IABgFIADgGIABgEIACgEIADgHIABgCIADgHQAghMAhAAIAKgDIAGgBIAMABIAgASIAfArIAFAJQAiBGgCBlIAAASIgUB3IgDgCQgPgHgWgCQgXgBgfAFQgwADgbASIgJAGQgahBgDhRg");
	this.shape_24.setTransform(13.7,23.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#66CCCC").s().p("AAJAbQgdgBgZggIAAAAQAfgSA0gCIAMAAIAbABQgcAzgmABIgBAAIgBAAgAg/ARIgHgJIABgBIAIALIgCgBgAhMAAIAAgCIAFAFIAAADIAAAAIgFgGg");
	this.shape_25.setTransform(13,49.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D9FFFF").s().p("AhDDaIgDgGIgDgHQgkhKgEhgIAChBQACg5Adg6QAYgvgJAWQAXgrAcgBIAKgDIAGgBIAMABIAgASIAfArIAFAJQAiBGgCBlQgCBjgfBKIAAAAQgRgEgXABQgPABgRADQgwADgbASIAAAAIgBgBg");
	this.shape_26.setTransform(13.7,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_13},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_13},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_13},{t:this.shape_24},{t:this.shape_23}]},1).to({state:[{t:this.shape_13},{t:this.shape_26},{t:this.shape_25}]},1).wait(1));

	// Layer 1
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("Ah5DBQgphVAAhtQAAhuAnhQQAphUA6AAQABgBAJACIAnAMQAiAJAlATIAGADIAGAEIADADIAEAEIgCgBQAQATAOAvQATA/ABBIQAABHgPBGQgIAlgTApIgUAoIAAAAIAAAAIAAAAQgBACgmASQgmARgIgBQgIgBgRACIgMABIgCAAQg6AAgohUgAgVD3IABAAIAAAAIgBAAQgJAAgIgDQAIADAJAAg");
	this.shape_27.setTransform(16.2,27.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah5DBQgphVAAhtQAAhuAnhQQAphUA6AAQABgBAJACIAnAMQAiAJAlATIAGADIAGAEIADADIAEAEIgCgBQAQATAOAvQATA/ABBIQAABHgPBGQgIAlgTApIgUAoIAAAAIAAAAIAAAAQgBACgmASQgmARgIgBQgIgBgRACIgMABIgCAAQg6AAgohUg");
	this.shape_28.setTransform(16.2,27.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhdDuIgDAAIgGgKIgBgBIgGgIIABgCIgDgFIgCgBIABgBIgJgRQgphVAAhtQAAhuAnhQQAphUA6AAQABgBAJACIAnAMQAiAJAlATIAGADIAGAEIADADIAEAEIgCgBQAQATAOAvQATA/ABBIQAABHgPBGQgIAlgTApIgUAoIAAAAIAAAAIAAAAQgBACgmASQgmARgIgBQgIgBgRACIgMABIgCAAQgnAAgfgngAhnDiIgBgCIAAgBIABADg");
	this.shape_29.setTransform(16.2,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.7,55.5);


(lib.FIZ34LEYEL002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgbC2QAQgoALgpQAMgtACguQACgngEgqQgEgwgSgtQgVgsgcgqIgCgCIANgCQAwABAgBIQAjBJgFBqQgGBogkBNQgiBLguABQASgkAPglg");
	this.shape.setTransform(20.5,28.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgaBZQANgtACgsQACgqgEgpQgBgQgDgRQAXAEAZAHQAGAqgCAxIgBALQgEA9gPA0QgXAFgaABIAIgbg");
	this.shape_1.setTransform(23.2,29.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AgWC2IAJgZQAZgBAYgEIgEALIAAAAIgIAQQgLAZgNARQgYAigfAAQASgkAPglgAAqh+IgCAAQgSgEgRgCQgFgQgGgQQgUgsgcgqIgCgCIANgCQAuABAiBIQANAbAHAgIgPgEg");
	this.shape_2.setTransform(20,28.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C0C3").s().p("AgSgVIABgYQAVAEAYAHQgCAlgGAiQgVAHgaACQAIgiABghg");
	this.shape_3.setTransform(23.9,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F9B9F").s().p("AgbC2QAPglALgmQAYgCAYgFQgIAhgMAeIAAAAIgHAQQgMAZgLARQgaAigfAAQASgkAPglgAAagmIgMgCIgCgfQgFgwgSgtQgUgsgcgqIgCgCIANgCQAwABAgBIQAeA/AABYg");
	this.shape_4.setTransform(20.5,28.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F9B9F").s().p("AgbC2QAQgoALgpQAGgZAEgaIAwgKQgJBEgWA3IAAAAIgHAQQgMAZgLARQgaAigfAAQASgkAPglgAAOAKQACgngEgqQgEgwgSgtQgVgsgcgqIgCgCIANgCQAwABAgBIQAjBJgFBqIgCAUIgvAJIABgRg");
	this.shape_5.setTransform(20.5,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F9B9F").s().p("AgQgFQANgeAHgfQAYAEAWAIIgMAeIAAABIgHAQQgMAXgMAQQgZAigfABQASgkAPgkg");
	this.shape_6.setTransform(19.4,47.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3C0C3").s().p("AAECsIgEgBQAMgsACguQACgpgEgoQgEgwgSgsQgVgsgcgqIgCgCIANgDQAwACAgBIQAjBIgFBoIgBAQIgQBiIgBADIgogMg");
	this.shape_7.setTransform(20.5,21.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4F9B9F").s().p("AgEgiIABgCIAAgBQAVADAUAGIAAAAQgiBBgpABQASgkAPgkg");
	this.shape_8.setTransform(18.2,50.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A3C0C3").s().p("AAADMIgRgEQAKgcAHgcQAMgsACgvQACgpgEgnQgEgxgSgsQgVgsgcgqIgCgCIANgDQAwACAgBIQAjBIgFBoIgDAlIgDATIgFAgIgDAMIgBAFIgCAJIgUA5IAAACIgZgIg");
	this.shape_9.setTransform(20.5,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4F9B9F").s().p("AgLgPIAOgpQAXAGATAMIgJAVQgkBJgsABQASgkAPgkg");
	this.shape_10.setTransform(18.9,48.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A3C0C3").s().p("AAYC9QgPgHgNgEIAEgRQAMgsACgvQACgpgEgnQgEgxgSgsQgVgsgcgqIgCgCIANgDQAwACAgBIQAjBIgFBoIgBANIgTBvIgFAPIgNgGg");
	this.shape_11.setTransform(20.5,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).wait(1));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9FFFF").s().p("AgDD/QgwgBgghHQgkhMgBhjQgBhiAqhRQAkhFApgMIALgCQAwABAiBIQAjBJgFBqQgGBogkBNQgkBLgsABIgBAAIgBAAg");
	this.shape_12.setTransform(14.6,28.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6569AC").s().p("AgrDjQALgQAJgTQAqhZAFhuQAFhwglhWQgLgYgPgNQAaAIASAPIAAAAQAHALATAuQAUAuAABUQABBSgOAyQgNAygKAWQgKAWgJAPQgHAPgCACQgDACgsAQIAMgRg");
	this.shape_13.setTransform(27.2,29.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CCCC").s().p("AACENIAYgDIAEgBIAAACIgQAEIgMgCgAgIDvQgggBgZgfIgcg0QgIgRgFgSQBOAWA/gBQAaAAAZgEIgEAKIgBAAIgHARQgMAYgMARQgaAigdAAIgCAAIgBAAgAhTi7QAjhFApgMIAMgCQAwABAiBIQANAbAHAgIgPgDIgCgBQgSgEgSgCQhNgJhSAUQAJgZANgZg");
	this.shape_14.setTransform(15,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9FFFF").s().p("AhACgIgSgeIgBgDIgDgHIgDgGIAdA0IgEgGgAhuAwQgKgtAAgyIAAgNIABgSQACgkAIghQBagaBVANQAaAEAZAHQAGApgCAxIgBALQgEA9gQA0QgYAGgbABIgPAAQhAAAhQgYg");
	this.shape_15.setTransform(14.6,34.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9FFFF").s().p("Ah1AWIgBgJIgCgcIAAgCIAAgCIAAgBIAAgHIABgBQBjgfBeAQQAXAEAYAHQgCAlgGAiQgXAHgaACIgeABQhDAAhUgbg");
	this.shape_16.setTransform(14.6,31.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AgED/QgvgBghhHQgWgugIg2QBfAcBLgEQAagCAYgFQgIAhgNAeIAAAAIgHAQQgMAZgMARQgbAigdAAIgBAAIgBAAgAhPirQAjhFApgMIAMgCQAwABAiBIQAeA/AABYIglgIIgLgCIgRgCIhxACIgCAAIgEABIgDAAIgEABIgEABIgDABIgEAAIgEABIgDABIgEABIgEABIgEABIgEABIgFABIgCABIgEABIgFABQAGhOAjhDg");
	this.shape_17.setTransform(14.7,28.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9FFFF").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_18.setTransform(14.7,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#66CCCC").s().p("AgDD/QgwgBgghHQgTgngJguIAKACIA8ANQATADAFgDQAEgEABgFIAAgCIgJgCQgIgBgzgTIBQgQIABAAIAAAAIB0gYQgJBEgWA3IAAAAIgHAQQgMAZgNARQgaAigdAAIgBAAIgBAAgAgKAAQgDgBgFgBQgFgBgFADQgTANhHAjQgCgUAAgUQgBhiAqhRQAkhFApgMIALgCQAwABAiBIQAjBJgFBqIgCAUIjJAmIBIg4g");
	this.shape_19.setTransform(14.6,28.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#66CCCC").s().p("AAKBTIAYgDIAEgBIAAACIgQADIgMgBgAAAA1QgggBgZggIgcgxQgJgUgGgUQBZgWBCAMQAYAEAWAHIgLAeIgBABIgHAQQgMAXgMARQgaAhgfABIgBAAIAAAAg");
	this.shape_20.setTransform(14.2,48.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D9FFFF").s().p("Ag/DrIgUghIAAgCIgDgHIgDgGIAdA0IgDgEgAA/B1IgEgCQgygNhAAIIg4AGIAAgBIgJhXIAAgCIAAgCQgBhhAqhSQAkhFApgMIALgCQAwACAiBHQAjBJgFBoIgBAQIgQBhIgBADIgogLg");
	this.shape_21.setTransform(14.6,27);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#66CCCC").s().p("AAAAmQgugBgghCIAAAAIBkgIIANABIAAAAQAXADAVAFIAAAAQgiBBgsABIgBAAIAAAAg");
	this.shape_22.setTransform(14.2,50.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#D9FFFF").s().p("AASDYIANABIAAAAIgNgBgAA6DHIgSgFQgrgJg5AHIgiADQgZhCgBhTQgBhiAqhRQAkhFApgMIALgCQAwABAiBIQAjBJgFBoIgDAkIgDAUIgFAfIgDAMIgBAFIgCAJIgUA5IAAACIgagHg");
	this.shape_23.setTransform(14.6,24.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#66CCCC").s().p("AAAA8QgugCgghEQgIgQgGgSQBWgYA5APQAXAGATAMIgJAVQgkBJguABIgBAAIgBAAg");
	this.shape_24.setTransform(14.1,48.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D9FFFF").s().p("ABTC9QgPgHgPgEQgvgOgvAHIhBAIQgOgzAAg8QgBhhAqhRQAkhGApgLIALgDQAwACAiBIQAjBIgFBoIgBANIgTBvIgFAPIgNgGg");
	this.shape_25.setTransform(14.6,22.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6569AC").s().p("AgrDjQALgQAJgTQALgWAIgXQAHAAgFgEQAWhGAEhQQAFhwglhWQgLgYgPgNQAaAIASAPIAAAAQAHALATAuQAUAuAABUQABBSgOAyQgNAygKAWQgKAWgJAPQgHAPgCACQgDACgsAQIAMgRg");
	this.shape_26.setTransform(27.2,29.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12}]}).to({state:[{t:this.shape_13},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_13},{t:this.shape_16}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_13},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_13},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

	// Layer 2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AiODHQgnhYADhwQADhyArhTQAuhWA9gBIAAABIAGAAIAWAGIAIACIAeAIQAVAGAnAUIAAAAIAGADIAGAFIAAAAIARANIAAAAQAeArAKBCQAJBCAAAhQABAfgMBEQgMBEgzBcIAAABQgHAEgfAMQgfAMgWAEIgQADIgYADIgMABIgCAAQg+AAgohXg");
	this.shape_27.setTransform(18,28.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgaEcIAAAAIgMABQg/ABgphYQgnhXADhwQADhzArhSQAYgsAbgWQAagVAeAAIAAAAIAGABIAWAFIAIACIAeAJQAVAGAnATIAAAAIAGAEIAGAEIAAAAIARANIAAABQAeArAKBCQAJBBAAAiQABAfgMBEQgMBEgzBcIAAAAQgHAFgfAMQgfALgWAEIgOADIAAABIgOAEIgMgCg");
	this.shape_28.setTransform(18,28.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgaEcIAAAAIgMABQg/ABgphYQgnhXADhwQADhzArhSQAuhWA9gBIAAAAIAGABIAWAFIAIACIAeAJQAVAGAnATIAAAAIAGAEIAGAEIAAAAIARANIAAABQAeArAKBCQAJBBAAAiQABAfgMBEQgMBEgzBcIAAAAQgHAFgfAMQgfALgWAEIgOADIAAABIgOAEIgMgCg");
	this.shape_29.setTransform(18,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27}]}).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36,57.2);


(lib.FIZ34LEARL002 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAIBQQABgHAGgFIAPgMQAIgKAGgKQAEgGAEgOIAFgPQAAgNgJgMQgMgRgZAAQgGAAglAdIgrAfIgDAAQgCgBAAgGQAAgOA5gpQA3gqAaAAIAXALIgwAWQARgHAOAQQAMARAAAaQAAAfgSAVQgLANgfAUIgFABQgCgBgBgFg");
	this.shape.setTransform(17.5,23.2);

	// Layer 8
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("Ag6BWQgdgSAAgjQAAgGABgDIAEgFIgEAAQgDAAAAgHQAtg1AsggQBahAAABuQAAA2gYAhQgdAmg5AAQgSAAgUgMg");
	this.shape_1.setTransform(18.4,23.2);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhSCYQgIgIgOgkQgEgLgMgDQgRgFgIgBQgJgCgMgFQgNgEAHgQIBVgzQAngrAZgYQAXgYA8gwQAxgtAZAAQAbAAAKA3QALA2gOBBQgQBKgoAuQgwA3hHAAQg1AAgWgXg");
	this.shape_2.setTransform(16.1,20.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhyC5QgkgUgLgnIgEgkQgCgVgOgKIAfgWQgKgBgFgDQBfhpAyguQAagaATgNQAVgSAggPQAbgNAGAAQAlAAASAjQAQAeAAAvQAACmhGBKQg0A3hYAAQgzAAgjgTg");
	this.shape_3.setTransform(18.3,20.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.4,0,38,40.9);


(lib.FIZ34LCOLLARFR01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("AgYCFQAMg9gRhIQgVhZg0gaIALABQAdABBBgEQBUgHAQgJQgGARgyBtQgyBvgSAeg");
	this.shape.setTransform(16.4,18.4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgpBkQACggAAgYQAAg+gVgmQgWgmhIhEQBdAIAbAAQAkgFArgJQBVgQAZgQQg7CUgPAfQg/CGhEBTIgHAFQALgrAFg6g");
	this.shape_1.setTransform(15.6,20.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,31.2,40.3);


(lib.FIZ34LCOLLARBK01 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B5C15D").s().p("AhNALQgQgbgFgaQAmgCAeAAQCBAAAAApQAAAPgqAQQgtARg3AAQgOAAgUgig");
	this.shape.setTransform(68.5,7.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("Ag0C8IgmgxQgYgfgVgSQgUgYgbgUQgxgliEg6QC7hfANgFQCFgvBWgVQBjgXBOAAQCEAAAAApQgBAfhjAPQhbAOhfgJQAYAWAaAdQAiAlAJAUQAPAgAGAvQACAZAAATQAAA9gZAnQgmA6hXAAQg0AAgtg1gADZB/QAGhCgGgwQgLhYhDguIALACQAcABBDgFQBVgGAQgKQgGARgzBtQg0BvgRAeg");
	this.shape_1.setTransform(42,27);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAAD3QglgXgjgoQhKhUg1gpQhVg/h3gkQB+hbC3hCQC8hFCNAAQB7AAAhAoQAfAngrBYQgbAsgqBUQgpBUgVAiQhMB4h1AAQgXAAgggUgADoCFIgCAGIAFgIIgBAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAABAAAAg");
	this.shape_2.setTransform(40.5,26.7);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.9,53.5);


(lib.FIZ34LBROWR002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhVAmQAAgkA5gXQAagLBYgZIAAAjQgBAMgMAHQgFADiVA6QgEgKAAgKg");
	this.shape.setTransform(11.1,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AhVAxQAAgbA4gtQAngiAggSQATgLAIAHQAOAMAEA7QgnAHgvAgQg2ArgUAIQgMgWAAgLg");
	this.shape_1.setTransform(11.9,7.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhqBGQgGgOAAgeQAAgdAUgOQAUgOBSgeQBHgaAMABQAUABAAArQAAAdgKATQgKAUgPAEQgRAGhEAdQg3AWgNAAQgWAAgJgRg");
	this.shape_2.setTransform(11.4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhuA5QAAgrA+g6QA+g+A0AAQANAAALAMQAVAZAAA/QAAAEgKACQgaAFguAaQg0AfggAdQgTAQgLAAQgZgOAAgkg");
	this.shape_3.setTransform(12.2,7.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,22.8,17.5);


(lib.FIZ34LBROWL002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AAZAgIiWgiQADgjANgSQAIgMAIABQAjgBAlAOIBvAzQAoAXgFAVQgDALgOAPQgTgRhAgTg");
	this.shape.setTransform(16.2,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AAOAqQgugzgmgNQgTgGgIABQAAgFAHgdQAIgeAEgGQBpASBHCLIgSAYQgJANgEABQgEgCgxg2g");
	this.shape_1.setTransform(11.3,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AA6AbQgmgOgUgBQgFABgXAEQgXAFgFgBQgbABgRgEQgMgDgQgHQAOgvAAgCQAgAHBSgSQAdgBAsARQA4AUAAAaQAAADgJAQQgIAQgBAJQgNgOgogNg");
	this.shape_2.setTransform(12,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7AoQgxgGgQgEQgYgFgBgXQAIgzAQgUQATgZAZAAQAgAABbAkQBsApAAAgQAAAxgTAUQgLAKgLAAQg7gXhtgfg");
	this.shape_3.setTransform(15.9,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAvBpQgdghgxgnQgngdgjgMQgSgHAAgJQAAhSAngPQAggNA0AjQAuAfAnAzQAnAwAAAeQgFARgKAQQgTAfgWAAQgEAAgRgUg");
	this.shape_4.setTransform(11.3,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABvBPIgGgDQgNgDgkgUQgegQgXAAQgjAMgWAAQg2AAgbgQQgSgJAAgIQAAgUAJggQAKghAHAIQAIAHB3gXQA0gFArAWQArAVALAWQAKAUgMAiQgNAigLAFQgIADgDAAIgBAAg");
	this.shape_5.setTransform(11.7,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0,30.1,19);


(lib.FIZ34LBOW002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AhOBKQABADgJAAIAAgMIAEgDQAIAUAkAKQAYAIAQAAQAqAAAAgZQAAgQgYgOQgKgGghgOIANgCQAsAOAdAYQAYAUAAALQAAAQgQANQgRAPgVAAQg4gBg3g9gAhSACIAOgEQAqgcAagNQAbgMAJgfIgBgIQgEgCgKABIgLAAIgKABQgnAOgbAUQgNAKgHAJIAAgPQAPgZAygcQAdgZAfAAQAIgBAIAFQAJAFAAAFQAAAvgnAkQgnAlhCAHg");
	this.shape.setTransform(11.2,15.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AheBJQAAgGACgGIAEgIIADgFIAXARQAaAQAcAAQAIAAAHgDQAIgCADgCQgEgKgfgRQghgRgsgDIAAgkQBeg1ALgUQgIAAgjATQgmATgYARQgHg0AvglQAegYAfgHQAkgJARALQAOAJAAATQAAAigWAYQgPARg/AuQAzADAlAeQAiAbAAAcQAAAdgXARQgSAOgaAAQh7ggAAgvg");
	this.shape_1.setTransform(12,15.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.4,0,19.3,30.5);


(lib.FIZ34LAPRONBK002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOBUIAAAAIAAAAIABgCIAPgtQAMggAOgaIAAgBIgBgBIgBAAQgYAIgQAkIAAABIgIAWIgHAaIgEAOIg6AAQANgmAMghQAMghAKgTIAAAAIAYguQANAEAnAXQAEAJAAAOQAAAYgLAlIgMAnIAAABIAAABQgMATgKAAQgDAAgCgCg");
	this.shape.setTransform(67.4,10.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAQBeIAAgBIhjAAQAahLAag3QAag6AIABIALABQAQACAYAMQAZAMACAPIAAABIgCACQADAKABAXQACAUgIAZQgJAYgKAPQgFAIgDACQgBAAAAAAQgBAAAAABQgBAAAAgBQAAAAgBAAIgCgCQgNATgJAAQgDAAgDgBgAATBXIgBAEIAPgsIgOAog");
	this.shape_1.setTransform(67.1,9.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(58.7,0,16.8,19.2);


(lib.FIZ34LAPRON002 = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AhUIfQgRjMAAh8QAAgnAPjhQAOjhAFgpQAOhhAYhrQAujVA4hPQAXAOAAACIAGAUQgJAVgQAFQgQAFgsCNQgqCNgNC7QgKCUgFCNQgEBqAAAsQAAEIAfDSQATB9ANArQgaAGgKAAQgfAAgXkNg");
	this.shape.setTransform(63.7,84.4);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AgGCYQgtABghgIIgCgaQAmAOAsACQAZABA/gBQAAABAAAAQAAAAABAAQAAAAAAAAQABAAABAAIgBASQgjgDg5ABgAgSh8QACgdAYAAQATAAAGAKQAEAHAAAPQAAAbgiAAQgXAAACgeg");
	this.shape_1.setTransform(31.7,84.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("AhAEDQAAgEgFgBIAPggQANgcADAAIAkADQAeADAMAAQACAfAMAjQhRgEglgDgACKDkQgKgTgMgQQgLgOAAgBIACguQADgogCgQIAFAAQAPANAOAqQAPAtAAAnIgDAkIgCACQgDAEgEAIgAicDJQAAgUALgbQALgfAjg8IgCBCIABAHQAAAGgIAJQgGAGgPAYIgTAfIgHAPgABUCDQiqgQAAgKQAAhAANhKQAUhxAohAIAUAEIAfABQAOATARBAQAHAhACAZIANDDgAgXiAQgIARAAAMQAAATALAJQALAKAXAAQAUAAAMgUQAIgOAAgMQABgtgyAAQgRAAgLAYgAgEjjIAGgOQAIgNAIgLQACABAFAPIAJAWIgDABg");
	this.shape_2.setTransform(31.5,83.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(40,42,51,0.263)").s().p("AAFgPIAEABQgBASgHAIQgBACgIACg");
	this.shape_3.setTransform(72.4,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjMMpQhGgKhMgcQA0i4AFhcQAXlaALhuQAKhpAii/IAeipQAqjlAPg1QAOgiAOgmIANgCQATgBAFAFIgDAGQgkBwgUB0QgMBMAAAeQAAABAZATQBAANAtAHQAsAGA/gDQA/gDAMg2IAkioQAWhTA7h1QAlASAJAJQAGAGAAALIgBAVIgDgBIAAgCQggATgMAcIgaBTQgoCFgLBWQgHAygDBQQgPCqgFEVQgBEfAgDHQAPBlATA3QgOAEggACQg9AFiGAAQiNAAhTgMgAAzDPQATAgABAsQAjgYAAg4QAAgngUgwQgRgqgXgaQgGgIgIhEQgJhUgHgdQgKgogWg7QgXg1gFgDQgpAqgmBkQghBXgBAjQgBAqgJAZQg1BEgLAqQgKAoAAARQAAAOAOAnIAFABIAVg1QAMgbAYgNQgCANAJADQAGACAfAFQglA/gBADQABAOAoAIQAhAGAxAAQAuAAgBgPQAAgFgEgRQgFgZgKgZIATgCIAVgDIAVATgAioAlQgDAHgFAGIgDAEIALgRg");
	this.shape_4.setTransform(38.3,84);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAIAGQgEgGgRABIABgIIAMgEQAKAFAEAGQgBADgCAEQgDAEgCABg");
	this.shape_5.setTransform(30.9,5.5);

	// apron
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AjnM5QgVgEh7gkQAphrAPhTQAHgmAGg9QASjcAMitIALiSQAUiQAciiQA5lDA0iDIABgBIABABIgBAEIAZgIQAKgDAOAAQAJAAAIAFQAJAEAAAFIgNAoQgcBRgQBKQgWBeAEA4QAeAQAbAHQAmAKA7AAIBAAAQAqgEAEgQIAJgqQAwioASgrIAmhhQAVg3AHAAQALAAAcALQAnAOAAASQAAAKgCgFIgBAAQgCABgGAAQgGAAgBgBQACAogJAPQgVAmgOApQgwCPgVDcQgVDNAAEhQAACyASCpQAWDQAnBGQgQAHgwAGQhQAKiLAAQidAAhggTgAg6sOIADgFIgGAAg");
	this.shape_6.setTransform(37.6,84.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.2,168.9);


(lib.FIZ23RTORSO002 = function() {
	this.initialize();

	// buttons
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313234").s().p("AhZCmIgHgOQAziJANglQARg2AAg3IgBgZQANAAAegDQArgFAOgGIAGA+QAHAtAAAGIgDAVIgFAcQgFAegBA0QgHAogtATQgLAEgWAAIgcAAQgKACgTARIgTAPQgIAAgDgFg");
	this.shape.setTransform(18.8,44.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AgaHeQAAiXgFjLQgIkIgLgBQAGAAgBgbIgCgiQAAgZgIhOQgIhOAAhDQAAgFANgDQAVgDAZgQQA7IRAJGqg");
	this.shape_1.setTransform(19.8,-21);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5EB8BA").s().p("AgWAAIAtgbQAHAZgEADQgCAEgzAWg");
	this.shape_2.setTransform(16.1,-70.7);

	// body
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAGAMQhHgNgHgLIBVAEIA4ADIADAFIgIAFQgVAIgLAAg");
	this.shape_3.setTransform(-0.5,76);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#363636").s().p("Ah5D4Qg8gHghgZQgSgOgLg1QgJg4gDgLQgKgqgJhOQgJhNAAguIABhVQAhgCBGALQBTANBmAAQCFAACGgZIAJA8QACAPAAAdQAAAFgRBcQgTBjgIAWQgKAcgLAsQgFATgfAWQgWAQgYALIgyAUQgUAHgJgBIAIgGIgDgGIg4gDIhVgEQAHALBHAPQgpAEgiAAQgZAAgVgCg");
	this.shape_4.setTransform(0,52.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AhCBJIAAgtICFAAIAAAtgAg0geIAAgqIByAAIAAAqg");
	this.shape_5.setTransform(-2.6,-52.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AgtDSQAAhVAGhtIARjxIBSAAIAAhIIhMAAIADghIBCAAIAAhFIg9AAIACgQIABgVQAgAGA/gLQBIgNAigaQAiEvARDwQANDHAGDWIk2AFIgBkPgAkHHUQgKj1A0lRQA1lWAxAAQAFAAAfAGQAnAJAXADIgEAnIhCAAIAABFIA6AAIgEAhIhEAAIAABIIA9AAQgLBqgHCPQgFBqAAA9IAJEhIjNgMg");
	this.shape_6.setTransform(-0.3,-20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72EBEB").s().p("AgCAlIgcgBIABgfQB8gFAPgGIANgKQAMgKAZgKQAHAagCAEQgBAEgjAMQgqASgwAGQgWADgQAAIgDAAgAikAPIALgfQBOAbAhgCIgCAbQhQgMgogJg");
	this.shape_7.setTransform(2.4,-69.8);

	// body
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiQL+QgvgKgKgHQgbgSgEABQgJADgEgBQgehggNhXQgPhpAAiKIABg3QAHAAADgDQASlwAWiyQAnk0BOh8QAsAKAnAKQAQAEAIAAQCsAAAzhGQAJBcAKBQQALBQAeFRQAdFPAKBPQAKBOAAA1QAADshaBcQhVBXjTAAQgSAAgsgJg");
	this.shape_8.setTransform(0.1,0.1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.3,-77.4,60.9,155.1);


(lib.FIZ23RTIE002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AiqAeQgugIhSgZQAFgWgBgQQAYAHB2AQQCBARA6AAQBDABBbgEIgKABQAaAABUgKIAFAJQABAEAAAFQAAAPg/ALQg+ALhLAAQi2AAhXgMg");
	this.shape.setTransform(32.1,6.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAIBCQh1gCg7gNQhSgTg3gJQgMgEgCgLIgBgkQAAgdAEgHIALgBQD+AuDcAAICEgTQAOAAAFAiQAFAigbAKQg6AVgWADQgGABhLAAIhXABIgqAAg");
	this.shape_1.setTransform(32.1,6.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.3,13.4);


(lib.FIZ23RPUPILR002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ23RPUPILL002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ23RNOSE002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AgSBNQg8AAgfgYQgWgSADgNIACgFIABgCIACAAIABACQAIATAnABQA7AAAigRQA0gXA1hIIACgBIABAAIABABIABABQAKBOgxApQgoAghDAAIAAAAg");
	this.shape.setTransform(12.4,39.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah/C5QAFAAAUgsQAWgyAUg7QA4ingPhjIAEABQAGA5AAAUQAABaglB6QgTA+gTAvIAAAFIAJABQATABAqgHQAogHBehTQAJgHgBAkQAABFguAiQgmAcg9AAQhZAAgVgyg");
	this.shape_1.setTransform(12.3,23.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,0,26,47.6);


(lib.FIZ23RMOUTH002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeA8QgrghgOgIQgKATgIAEQgPALgiAAQg2AAgjgoQgZgmgDAAQgEAEgHAEQgMAHgQABQgpAAAAg2IABgKIABgEQCNApAXAGQB+AdByAAQA6ABA+gMQApgIAQgHQgLAngLARQgOAYgWgBQgLABgSgQQgTgPgEgBQgEACgEALQgEANgEAGQgSAZhCAAQgbAAgZgSg");
	this.shape.setTransform(34.3,14.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA4QgigegEgCIgeAYQgPAKgTAAQhJAAgZgoQgNgmgKAAIgnAQQgkAAgLgVQgEgHgJgzQByA2C8AVQBfAKBJAAQAlAAArgJIAvgOQgEAigNAVQgOAXgVABQgLgBgSgPQgUgQgEgBQgMAUgMANQgWAagwAAQgjAAgpgcg");
	this.shape_1.setTransform(32.8,10.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#862D59").s().p("AgmAjIAAgUIAEgxIAdANQAPAHAKAAQAKAAAJAtIgBABIAAADg");
	this.shape_2.setTransform(39,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40152B").s().p("AgvAfQhMgqgWg+IAJAGIALAEQAFABAGAAQAHAAAQgDQAQgDAEgCQAGAqAsATQAfAMArAAQAcAAATgIQAUgLACAAQAKAAAOALIgIBOIgXABQhZAAhJgrg");
	this.shape_3.setTransform(19.3,18.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhA/IgugiQgHAig4gBQhCABgbgkQgSgkgLgHQgSAQgQAAQgmAAgKgQQgHgKgJg8QBmAyCpAXQBTAMBHABIBKgCQBGgCAZgDQgLAmgDAFQgMAagZAAQgGAAgWgOIgYgSQgHAegUAOQgUANgmAAQgiABgrgZg");
	this.shape_4.setTransform(32.6,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AgrBOQADgGAGhAIAHhWQAEAFAcANQAeANAJABQgNA5AAAbQAAAQAGAPQgNAEgUADQgQADgJAAg");
	this.shape_5.setTransform(35.9,24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#40152B").s().p("AhPBRQhThEAAh0QAAgNAIg1IACAQQALA2AJAPQATAiAsAAQAjAAABABQAFAEAdAlQAOAMANAFQAYAJAwAAQAkAAAbgSQgIAogFArQgDAhAAAJQAAAHADAQQADAPADAHQiegbhNg+g");
	this.shape_6.setTransform(15.1,14.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA7BQIhGgvQgHASgRAIQgQAHgbAAQg4AAgZgfQgUgjgRgMQgQANgSAAQgmAAgLgPQgGgKgNhCQBhAxChAbQCBAVBugBIAsgDQAmgCASgCQgKAkgDAGQgMAZgZgBQgIAAgUgOIgYgSQgHAfgWANQgVAOgpAAQgdAAgSgLg");
	this.shape_7.setTransform(32.2,5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#862D59").s().p("AgkBrQgGgHACgTIAAgXIgBgVQAAgNAJgvIAJgxQABgDAEgIQAFgJADgCIANgKIANgGQAKAAAJAMQAFAGACAGQAAANgPA5QgPA2AAAGQAAAHADAWIAGAhQgWAGgPgBQgPAAgFgEg");
	this.shape_8.setTransform(29.5,23.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#40152B").s().p("AAnCsQgxgZgsguQhmhoAUhjIANhbIABACQAXAsANA1QANAgAzAAQAKAAAVgFQACAaAjAaQAqAcA0gHIgMBRQgCAkAHBGIgOABQglAAgrgWg");
	this.shape_9.setTransform(10.7,13.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgwBAQgigMgXgXQASg4ApgZQAfgTAvAAQAdAAAWAYQAXAYAAAfQAAAKgFAHIgTgNQgTAdgKAKQgPAQgaACQgKADgJAAQgTAAgWgIg");
	this.shape_10.setTransform(44,10.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#40152B").s().p("AhCBDQgngsABhRQAAgGACgMIADgOIAtAaQAaALAcAAQApAAAagQQAPgJAYgTQgCAFgSA0QgSAvgBAFQgBAXgMAXQgWAogsAAQgbAAgbgfg");
	this.shape_11.setTransform(42.6,25.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#40152B").s().p("AgtAyQgQghgBgeQAAgkAUgVQARgTAZgDQAZgDASANQAUAOAAAYIgNAaQgNAZAAAMQAAADAIAVQAHAUABAFQAAAagqAAQgjAAgVgsg");
	this.shape_12.setTransform(45.9,13.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40152B").s().p("Ag6AAQACAAATgTQAVgSALgBQABABAcASIAjAUIAAAAIgTAWQgPAPgKABQgPAAg6gng");
	this.shape_13.setTransform(49.5,6.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AjUCbQhdgigRhPQgXhUgIhLQgFg8AFgGIACgCIABgBIADABIABAAQBfA0AlBmQARAvADAxIADAAIAFgBIABAAIAGgKIgHgzIAAAAIABgDQAAAAABAAQAAAAAAAAQABAAABgBQAAAAABAAIBDgJQBrAAA7A1IAAAAQAXAUAhA9IADgFIAAAAQACgGACgCQABgCgFgKQgFgNgSgWIgSgYIgBgDQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAIAygOQAtgNAnAFQAnAEAiAPQAiAOALAOQAKANAAAYQABANg8AmIAAABIgCABIgdANQgaAKgPADQgYAFgpAEQg1AFgrAAQiqAAhVgggAFUBYIgBgBIgBgBQgGghgFgJQgEgIgXgUIgBgCIAAgBIABgBIACgBIACABIAzAMIABABIABACQgGAngCAJIAAAAIgGAMIgBABIgCAAg");
	this.shape_14.setTransform(31.5,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgNA8QgigQhBgHIhaAHQgBglgtguQgXgZgdgZQBfArCVAaQB3AUBXAAIBEgCIBTgFQABAugEAfIgeABIgsgGQgngGgeABQgfABhNAdQgcgOgggQg");
	this.shape_15.setTransform(33.1,6.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhcB3IgigHQgigJgXgIQgRgGgjgWQgmgYgPgRQgPgQAAgDIAXgfIAUAGIAOAFQAHAAAPgEQAOgCAFgDQAKAmAhASQAgARA7AAQAbABAPgIQAGgCANgLQAcA2BYgFQAlgCAagNQAbgOACgUQAWARALAAQABABAMA9QgOAGhIAIQhGAJgYAAQh4gJgkgFgAAQAgQgYgegEgHQgSANgPAJQgPAJgqAAQgqAAgVgcQgRgogOgKQgGACgJAJQgGAEgTAAQgkABgJgUQgFgIgLhEQDNAyAWAFQBwAWB6AAQAYAAA2gEQAzgFALgBQgOBbgWADQgWACgWgJQgVgIgGgSQgIAKgDAQQgDAPgJAEQgJAEgcAIQgcAIghABIgDAAQggAAgZgeg");
	this.shape_16.setTransform(32.6,14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#40152B").s().p("AgNASQgKgvADgnQARAJAKA2QADAPAMAgQAAABgWAaQgFgLgIgog");
	this.shape_17.setTransform(1.1,6.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#40152B").s().p("AgWAhQgLgtgFhbQAmAUAIARQAFAJAYBaQAEAPgEAEQgCADgJAEQgEADgDARQgDAMAAAIQgDAFgBABQgXgWgLgyg");
	this.shape_18.setTransform(-0.7,5.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiRB5Qhugig0g5QALgIAOgWQAMgSAEAAQAQAAATAEQAPABAQgIIASAdQALARAKAJQAcAZBDAAQAXAAATgLIATgLIAmAbQAnAaAgAAQAtAAAagKQAfgMgCgXQAAgBAAgBQAAgBABAAQAAgBABAAQAAAAABAAIAEAAQAQANAKAiQAFASADAUIgCAHIhqAMQg4AGgVAAQhoAAhlgegAA6AyQgagSgngiQgOAUgHAGQgMAIgdAAQhCAAgcglQgSgrgLgGQgEARgnAAQgjAAgLgcQgFgOgIhHQBnAtCcAaQCDAXBnAAIA1gCQAvgDAJgCQgHA0gNAWQgMAWgTAAIgVgNIgigUQgIAfgVAPQgWAOghAEIgLAAQgbAAgWgOg");
	this.shape_19.setTransform(32.1,13.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#40152B").s().p("AgtA0QgQgigBgdQAAgmAbgYQAWgWAVAAQAOAAASAOQAXAQAAAWIgNAaQgNAaAAALQAAAEAIAUQAHAVABAFQAAAZgqABQgjgBgVgrg");
	this.shape_20.setTransform(45.9,13.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#40152B").s().p("AgGAJIgXABQgKAAgGgDQABgEANgJQASgOAPAAQAHAAAOAMQAQAMAHAQIgJABQgggMgLAAg");
	this.shape_21.setTransform(27.7,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},6).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_20}]},9).to({state:[]},1).to({state:[{t:this.shape_21}]},13).wait(1));

	// Layer 5
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAHBUQgZgXgLgEQgOALgHADQgRAHgeAAQgrAAghgOQgtgUgGgpQgEACgNAEQgOADgIAAQgeAAgQgYQgOgXAAgoQgBgRAHgGQAGgGAQAAQARAAAgAMIBIAbQB4AmCkAAQBQAAArgIIBTgYQAEABAFAFIgTASQgEADAAADQAAArgTAeQgUAgghAAQgJAAgRgGQgQgGgJgHQgKAbgTAKQgWALg3AAQgjAAgfgVg");
	this.shape_22.setTransform(34.8,14.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiaATQhxgVgpgSIgGgFIgYgSQAEgDAGgBIANgCQANgBAsAOQBDAWAjAJQCnApDGgQQAogEAngMIApgLQAFAAAEAFIABABIgBAAQgFAHgNAHQgKAEgMAHIABgBIgLAEIgSAIQgUAGhWAHQgaACgdAAQhvAAiYgfg");
	this.shape_23.setTransform(33.2,10.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AkNAqQhChGAAhUQAAgVAPgOQCmAxCFAYQBgARAwAAIAxgBQA4gDAggJIA1gPQASgGACABIACABQABABAAAGQAAAIgCABIgHABQgMAFgKAtQgLAqgSAPQgOALgZgBQghABgRgUQgOAegDACQgMALgoADQgEAsgBAEQAlACAjgPQAFAAABABQACACABAIQAAAGgdAJQguAOhaAAQjIAAhihpg");
	this.shape_24.setTransform(33.8,14.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AkeBpQhdhTAAiDQAAhWAhAAQAMAAApAQQA/AZAjALQCiA0C0AAQBKAACfgRQgIASgVAAQgZgBgXAbQgIAwgWASQgQAPgbgBQgJABgngSQgQAggHADQgHAEhBAGQAAAPgOA5QAAALAEAuIASgBIARgBQAKAAACABIAAABQgHAHgVAHQgiAJg7AAQi6AAhnhbg");
	this.shape_25.setTransform(34.1,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AkyCBQhghYAAiMQAAg7AJgiQAJgiAQAAIBnAmQBuAnAfAIQB7AhCCAAQBFAABCgKQA7gJBQgVIAAAIQAAAZguAMQg2ANgDAEIgLAdQgKAcgHAIQgJANgUAGQgOADgGAAQgKAAgmgSQADAbgiAMQgYAIgwAAQgSAAgKgEIgkgNQgSAkgHA0QgEAaAAAUQAAApAUARQARAPAngGQgGAIgBAEIg1ABQjDAAhqhig");
	this.shape_26.setTransform(34.6,14);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhlCOQgegsAAheQAAhPAyg3QAug0A4AAQBKAAAaAvQAeA2g1BgQgVApgKBKQgPA1hHAAQg3AAgbgpg");
	this.shape_27.setTransform(42.9,19.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag5BEQgWgmAAgkQAAgWARgkQAXgyAjAAQAqAAAYAbQASAUAAAaQAAAogYAXIAQA3QABAmhBAAQgnAAgagvg");
	this.shape_28.setTransform(45.7,12.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgYAhQgTgYgtAAQgFAAgHgCQgKgDgFgEIACgIQAgAAAXgPQAHgEATgQQASgOANAAQAgAAAXAWQAaAZAjAEQADAOgFADIghALQgGADgRASQgNAPgRAAQghAAgSgZg");
	this.shape_29.setTransform(48.9,7.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ai0C1QhNgOgsglQhWhIgBjjIgIgEIACgFQACgHABgFIAQgCQBpA2CKAfQCFAhB5AAQCHgBCEgoIAIADQABAFgDAIQgDAOgMADQgFAEg+AOQgSAEgCApQgBAUADAVQAAABAJABQAJAFAAAOQAAApgCAGIgLAMIgBgIQgsBjj7ABQh1AAhDgNgAEXgQIAAAAIABgIIgBAIg");
	this.shape_30.setTransform(35.3,11.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AkTBZQhkhIAAhuQAAgUAHgWQAGgSAIgIQAaAICMAgQDQAvBeACQBeABBCgJIBmgOIAAAGIgmARQggAOgFAPQgGAUgFAnQgKAhgpAFIAMA4IAOgEQAQgFAGAAQAKAAAIALQgGAFgCADQgCAEhEASQhDATilAAIgBAAQinAAhmhJg");
	this.shape_31.setTransform(34,13.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AkLBxQh9hQAAiDQAAhdAbAAQAKAAAwAUQBKAdB7AhQByAfBRAKQAwAGBEAAQBWAAA6gOQApgLAHADIgBAKQgYAGgOAGQgaALgDAnQgDAqgdAaQgVASgSABQAMAxACAOQAXgHALAGQAGAEAFAIQgcASgdAJQgzAQiWAAQjHAAh7hPg");
	this.shape_32.setTransform(31.8,11.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag6BEQgWgmABgkQAAgWAQgkQAXgyAjAAQAsAAAXAYQASAVABAkQAAASgLAPQgOATgBADIARA3QABAmhBAAQgoAAgagvg");
	this.shape_33.setTransform(45.8,12.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgsBKQh4griBhnQgOANgIANIgIAOQgCAAgBgIQgEgcAggYQAcgTAXgBQAHAAACACIAFAEIAAABQgDADgXAMIgZALIB5BFQA4AeAJADQBZAgAgAIQBKASBbAAIA+gHIA9gHIAJACIAHAEQgbARg1ANQgpAKgQgBQiDAAhngmg");
	this.shape_34.setTransform(29.9,3.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ABNACQg4gVgnAAQgLAAg2AOQg1AMgZAJQAaggAogOQAhgMAvAAQBLAAAyAiQALAIApAqIgHABQgmgYgogRg");
	this.shape_35.setTransform(29.6,16.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAeAlQgHgFgjgBIgKACQgKADgFAAQgQAAgIgMQgHgMAEgNQAKgpAwAAQAmAAAVAfQANARAAAQQAAAOgJAFQgGACgOAAIgHgGg");
	this.shape_36.setTransform(27.7,22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[]},1).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},1).to({state:[]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},1).to({state:[{t:this.shape_31}]},6).to({state:[{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},9).to({state:[]},1).to({state:[{t:this.shape_34}]},11).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.3,4.1,65,21.2);


(lib.FIZ23RHEAD002 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6A17D").s().p("AkEKGIgIgDQgDgVAAgVQAAiCA1ilQA3ipBnixQBBh1BwjpQBdi/AbhDIgEAQQglBkgCATQAFABBJgNQgNAbgnBKIhbCoIhxDIQgrBNghBUQh5ExgWA7QgrByAAAgQAAAMAHADIAHgCQgBATgQABQgFAAgGgCg");
	this.shape.setTransform(116.9,170.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AgXAAIAPgtIAxAQQgVA6gCADQgEAEggAAQgKAAgMAKQAEgLANgjg");
	this.shape_1.setTransform(144.3,111.5);

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ABBRrQgngFgsgaQgugaAAgZQAAgXgSg4QgWhKgthiQitl9hPh2QgzhGglg4QhDhlhbihQAgAGAIgBQgfhUgPg5QgdhpAAhrQAAiRAxiMQAxiNBOhDQCAhwBqgtQBkgsB6AAQCgAABsAfQBjAcBIA6QCZB6A/ByQBPCPAADYQAABEggBwQgRA+giBvQAFAABJgNQgNAcgnBIIhbCnIhwDJQguBPghBUQh5EwgWA8QgrByAAAgQAAALAHAEIAHgCQgNATgdAVQgXARgeAAIgNgBg");
	this.shape_2.setTransform(76.2,126.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#825454").s().p("AKiGGQAQhRAAhdQAAhogNhJQgXiNhFhIQglguhFhEQhahZgxgbQg1gchAgVQg0gSgVgCIi7gRQh9AAh1AqQh9AthhBVQjeDFgBFSQAABwAdBoQAMAtAhBRQgNAAgRgPQgTgTgIgcQgUg/gJgpQgShIAAhKQAAitA8iVQA3iMBth9QBIhTClhJQCqhMBkAMIAAADQFugVDcEHQBeBwAyCUQAwCJAACRQAAApgSBVQgRBTgRAtQgYBDgPAFQgWgEgYANQAmhUAShYg");
	this.shape_3.setTransform(78.3,59.8);

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgvSGIgXgVQgLgJgOAAQgEAAhfj5QgXg+hKibQgPgehiijQhrizgLAAQgBAAgyhYIg9hqQhJhygoh+QgfhkAAhBQAAjCAtiPQAsiJBkiGQBmiICvhEQCwhECwACQCyACB3A7QB4A6BOBVQCECPA6CQQA6CRgEDDQgDDEh7DfIjcGRQhXCRgfBaIhLDIQhFC5AIAOQAIAOgUARIgZAdQgbAUgiAKQhZAAgngeg");
	this.shape_4.setTransform(78.1,119.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,0.8,156,238.6);


(lib.FIZ23RHAT002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgCA4QgZg3gLgCIAvhCQAiA3gFAMIgOAVQgNAVgLAag");
	this.shape.setTransform(62.7,68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6870B0").s().p("AhMBXQgLgNgEAAIAJgJQAPgOALgpQASAUAGASIANApIgaAtQgNgagSgVgAAxg7IgZgmIAdgkIAnA4IgeAqIgNgYg");
	this.shape_1.setTransform(62.7,69.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C6C7C9").s().p("AkIF1IgZgqQAAgPAagnQAbgqAMgWQAGAMASAVQARAVgBAYQgBAXgVArIgfBFQgCgLgZgqgABoA4QgXgRgEAAQgEAAgNAEQgOAEgFAAIgWgBQAAgCgHgEIA5hCIAUAJIAOAEQATAAAMgaIATg0QAJgTAhgiQAdgeAAgLQAAgfgngYQgtgWgMgJQARgVAMgZQANgcgBgWQABgEgag2QAPAEAQAIQARAIADAZQADAZgHAYQgIAXgNATQALAFAfAEQAfAFAPAQQAOAQAKAXQAHATABAKQAAAjgjASQgiATAAAKQAAASAeAFQAeAFAAAUQAAAjgYALQgLAFgWAAQgFAAgHgEQgHgEgEAAQgRAAgEAPQgBAEgBAaQABAugpAAQgLAAgXgRgAgsgfQAsgnAIgUQARAQAKADQAGABAVACQgCAHgGAHIg/BMIgjg1g");
	this.shape_2.setTransform(75,56.8);

	// Layer 4
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0FF7A").s().p("ABrB0QABgnhXg/Qhag/hMgCIAIgJQA3g9ACAAQArAABAAhQBBAhANAdIAcAmQALAQABAJQACAPgpBGg");
	this.shape_3.setTransform(52.1,62.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAMBjQg/gog3g7Qg1g4gMgqQgMguAuAAQBMAABwBcQB7BhAABaQAAAHgLACIgTAAQg6AAhKgtg");
	this.shape_4.setTransform(31,90.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8089DD").s().p("ABtBjQhDg5hogiIgWABIADgCIAugvQAKgCAbAKQAXAHATAJQBZAlAoArQAKAKAfBJIgaAsQgLgihEg6gAk6AHQgMgvAAgmQAAgmAQgjQASgnAcAAQAsAAAOBsQADASAGBIQAEA4AGAYIAAACQgLgCgKAAQgaAAgiAZQgfglgPhFgADkhGQhGg+hbgTQAZgiAFAAQAOAAAXAJIA1AWQAkAQAdAZQAeAZAtBFQAAADgeAkQgMgog5gyg");
	this.shape_5.setTransform(39.3,63.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiRGpQgYgphVhHQg/g0g4gdQgTgKgEgDQgGgGAAgMQAAgBAagYQAZgXADAAQA6AABjA3QB3BDAABLQAAAIgYA2IgcBEQgIgggNgXgADVBuIgWgRQgFAAgLAEQgMAEgFAAQgUAAgNgHIA5hEIAVAJIANAEQAGAAASgMIgHgCQgNgHgHgJQgHgIAAgFQAEgZgLgOQgTADgLgFQgNgFgJgJQgIgJAAgGQAAgFAGgOQAFgOAAgMIgBgGQgCgBgKAAIgVAIQgTAIgPAAQgdAAgOgPQgMgNgCgdIg3AOQgWAAgLgLQgGgIgGgSIABgeQABgWgJgNQgMAHgGAWQgEANAAALQAAAHAEAPIAGAWIggAmQgjgGAAgYIAJgMQAJgNAAgJQAAgNgPgEQgEgCgegCQgxgDAAgnQAAgaAlgjQATgSASgOQAAgFgDgMQgEgLAAgFQAAgeAQgVQAWgcAsAAQAPAAAQAJQAQAJADAAIAqgWQAngXArAAQA5AAAOA4IAHAmQAFARAKAAIBNgDQA6AHAAA0QAAANgGAVQgIAYgNATQABAHAOADIAeAFQAcAGARANQANALAJAXQAIATAAALQAAAjgjASQgiATAAAKQAAASAeAFQAeAFAAAUQAAAagOAMQgOALgdAAQgFAAgHgEQgGgEgFAAQgRAAgEAPQgBAGAAAaQAAAugpAAQgPAAgXgRgADUgTIABgDIgBgCIAAAFgAAGgfQhBgsg9gOQAcgZAQgcIAgAFIAgAEQAPAAAHgDQADAbAYAPQAXAPAggBIAVgEQAAAlAMAPQAOAUAkgCQgCAHgGAHIhABMQgSg4hPgzg");
	this.shape_6.setTransform(63.7,51.4);

	// Layer 3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AkTHfQhlhJhEiCQgEgJAAgPQAAgQgPgOQgOgPgShLQgThLAAg1QgBgyAYgpQAagrA0AAQAyAAANBwIAJBYQAEAyAGATQDijfAngtQgYgIgJgHQgPgOAIgsQgygJgPgJQgXgOAAgmQAAgnAegcQAegdACgfQADg1AiggQAhgeAyAAIATAGQATAIADgBQAKABAjgVQAlgVApAAQAuAAArAlQArAmgIAnQAogJAKAAQAoAAAgAhQAeAdAAAYQAAApgHAPIgRARQAagFAnAcQAuAiAAA1QABAQgIASQgOAhgiALQApAKABArQgBAmgaAUQgcAXgugGQgCAtgOAWQgSAYgoAAIhDgiQgFAAgKAEQgJAEgFAAQgYAAgIgDIgQgKQioDfgpCeQgPA0gFAHQgMANgvAAQhQAAhahAg");
	this.shape_7.setTransform(55.8,54.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,0,103.2,108.7);


(lib.FIZ23RHAIRTOP002 = function() {
	this.initialize();

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ACcEHQgRggABhHIADgBQAGAPAWAxQAQAiAAALQAAAKgCACQgBADgKAAQgJgCgJgSgAgaC4IgVgVQgWgSgFgIQgGgGgJgUQgLgYgHgKQABgDAJAAQAEAAALAPQAeAkA0A8IAAAJQAAADgGAAQgGAAgOgNgADtB7QgLggABg4IABgCQAJAFAMAjQAKAeADAcIgCAJIgCACQgCABgGABQgGgBgHgUgAgsAiQgYgigOgfIAJgBQAFAAAOARIA2BIQgEAJgNgBQgFAAgWgfgABlAnQgIgIgBgIIgNguQgGgUAHgHQARAJAMAZQANAXAAAaQAAANgJAEQgGgDgGgIgAi3ApQgKgJggguQgjg0gBgPIABgFIAFADQBJB0AAgDIAAALgABeiXQgFgRAAgGQAAgHAEgJIAEgKIAAgCQAVAygDANQABALgDADIgHACQgGgIgGgUgAhmiZQgbghAAgmQAAgGABgCIACgBQA6BLAAAXIAAAFIgCACQAGACgKAAQgIgBgUgagADCi8IAFheQAJALAEAlIACAxIgUgDgAgBjqQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBIABgBIAEABQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgEABIgBgBg");
	this.shape.setTransform(39,65.3);

	// Layer 13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AB2HSQAUgIAGgGIAcgmQALgOABgFQADgMAAg1QAAg0gdixQgdivAAhLQAAggAYhKQATg8AUgtIAGgIIgGBFQgHA/AAA+QAAALAJBdQAKBrAIAzQAWCFAOBJQADAQAAATQAAA5gaAmQgcArgxAAgAjVi8QgphYAFhvIAUghQAPCJAlBRQAoBZBBAQIAGgJIgCARQgIACgKAAQhRAAguhlgABPibQgcgDgVgyQgZg+AAhuQAAgwApgmIgBBVQAABRAPBHQANA8ANAOg");
	this.shape_1.setTransform(45.8,51.1);

	// Layer 14
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AAmGYQhng8hshsQg+g/gzh0Qg5iBABhvIAKg7QAyB/AmA3QAjAxApAGQAOgKAAAAIgWhLQgVhOADg9QACABABAPIAAABQABg9ADgdQAGgvAshKQAPCJAlBRQAoBYA/ARQAMhuANg1QAUhUBNh8IgCBbQAABNAIA5QANBbAeAAQAGAAAEgGQAGgMAIgoQABgHAMgfIASgxQAEgLAZgXQAMgKAEgMIgFA4QgGBMAABCIAEBEQAHBVAPBZIAlDPQACAMAAAXQAAA5gaAmQgcArgxAAQhdAAhtg8g");
	this.shape_2.setTransform(36.6,51.1);

	// Layer 15
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAbG+QiJhChNheQhehygrhlQgrhmAAh0QAAgVAMgzQAMg0AIgPQATAsAaAzQAyBoAnAsIAIAIQgOgngHg+QgGgvAAgsQAAhaAlhHQAgg+AcABQAGANAJAlIAPBIQAOBEAaA6QAbA/AcAVQgCgSAAgLQAAg+Auh/QA3iWA4gQIAVEeQACAAADASQgDhCCMiYIACABQgfB9AMCiQAGBVARBkIAXB5QATBeAABFQAABUgmAnQgkAlhMAAQhIAAh3g4g");
	this.shape_3.setTransform(36.7,50.3);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.1,0,73.8,100.5);


(lib.FIZ23RHAIRR002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("AgvERIABgBIAAAAQAFgGAWgSIATgSQAHAAABACIAAADQgMAMgPAQQgKAKgMAAgAgWCaIABgOQACgMAGAAIAGgKQAHgKAFgEQADABADAFQAAAOgJANQgDAIgQASQgFAAAAgJgAgnAQQAAgaARgTQARgTAPALQgEAIgSAdQgUAdgCABQgFgEAAgKgABEgCQABgEALgQQANgRAIgFQAIAOgPASQgIAKgMAHgAgXiEIgBgDIAlg6IAHAEQAAARgPAUQgMATgMADgAhljbIgCgGQABgDAMgSQANgTAHgHQAIAMgKARQgJARgTAIg");
	this.shape.setTransform(25.8,51.3);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69494B").s().p("AjCG+QgBgBAAgGQAAgaBJhEQBphiAvg+QgLgBgOgNQgOgOAAgNQAAgRAig/QAuhMAQgpQgWAKgOAAQgPAAgKgGQgPgJAAgWQAAgJAZhGQAZhIABgIIgKAGIgZAMQgMAGgHAAQgXAAgIgMQgGgKAAgZQAAgKAJgkIAJgkQAAgFgEgTQgEgTAAgFQARgzABgGIAEALQAIAOAGAiQAFAfAAAWQAAALgFAUIgFAXQAAAKAFADIAHABQATgFAYgTQAygnAmhLQACAdgJAqIgPA/QgLApgIARIgZAxQgRAlAAACQAAAEACAEQAFAHAKAAQAUgGAXgNQAtgcASgpIABAxQAEA2gyBfQggA7gaAiQgQAVgPANQgHAGAAAFQAAAEAEADQAFAEAJAAQAFAAAcgOQAggSAVgTIABADQgIAMgLAaQgNAbgWAcQhCBWjCCrIglABIgCgEg");
	this.shape_1.setTransform(24.3,52.7);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#825454").s().p("AijGXQAVhZAQgkIAigqQAJgJAFgoQAFgngCgsQgDgsgpiQQgpiSg5hZIAwgLIgCgCIALAIQANAHAWAAQA8AAAmgiQAkgkAKhCIAGALQAIAOAGAiQAFAeAAAXQAAALgFAUIgFAXQAAAKAFADIAHABQATgFAYgTQAygoAmhKQACAcgJArIgPA/QgLApgIAQIgZAyQgRAlAAACQAAAEACADQAFAIAKAAQAUgGAXgNQAtgcASgqIABAyQAEA2gyBfQggA7gaAiQgQAVgPAMQgHAHAAAFQAAAEAEADQAFAEAJAAQALAAAZgLQAjgRASgaIgBACQgGAKgKAZQgOAcgXAeQhHBei/CmIgsACg");
	this.shape_2.setTransform(22.1,52.7);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjqH7IAwiUQAchYAGgGQAJAIABAKQABAHgEAcQAjgiAQggQAUglAAgvQAAhGgWhjQgniyhYh9QApgFgDgDQARAABOgcQAoAAAWhMIAOg5QAHgcAEgFQAeAfAVBHQAUBGgLAfIABAGQAhgVAbg1QAfg+ARgSQAMAJACAFQAHAPAAArQAAAtgQBIQgPBEgQAhIgHAQQAUgaAdgbQAbgaAJgEQAaAXgOBlQgQB0hGBSQAZgGAcgZQADABADAHQADAIAAAIQAAAOgdA1IgdA2QAAALglAmQgjAkgUANIhgBeQhOBKgYAPQgaAPg5ADg");
	this.shape_3.setTransform(23.5,51.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.3,47.1,101.5);


(lib.FIZ23RHAIRL002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D3232").s().p("ABEEEQgLgKgFgWIABgEQAAgBAAgBQAAgBABAAQAAgBAAAAQAAAAAAAAQAXAMAJAWQAFAMADANIACAEQgVgQgHgHgAgGDrQgLghgEgHQANAKAcAtIAIALQAAAEgKAAQgNAAgLgegAgBB3QgVgZAJgXIAGgGIANASQAPAXAQArQgWgIgQgWgAhTBUQgOgYgBgGQABgHACgCIAEgCIACgBQAHAFAOAjQAOAfABAIIgBACQgOgMgPgbgABLBQQgLgRAAgEQAAgHACgBIAHAAIAAgBIATA2QgGgGgLgSgAAxgrQgJgSAAgVQAAgHAJgSIABgBQACAJAKBLQgGgEgHgPgAgkh7QgBgMAJgUIABgBQACAGAEAfQADAcAAAJQAAAKgBABIgGACIgLg2gABWjLQgIgNAAgTQAAgKAEgPQAEgQAEgGIAIAHQgEA1ADAhQgJgKgCgEg");
	this.shape.setTransform(17.7,52.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AiiFeQgug1gyhOIAEADQAKAHAVAJQAUAIAFAAQAQAAABgCQgBgDACgDQgogwgghgQgjhrALhNIAKATIA5BeQAOAUAYAAQAGAAgBgBIgCgCQgCgfgKhGIgKhEQAAgOAFgrIALhSIAGAMQAIAXAZAbQAVAYALAEQAJgRABhqQAAgPAOg1QAMgvAFgNIACAJQAdA3AfAjQAnAvAjAAQAwAAAVgTQAGgFAMgWIgEABQAhgRAmAkQApAoAJBPQAJBQgnBcQgnBagbBHQgaBGgVAfQgLAcg7BFQg7BFgUAKQgXAKgQAAQgpAAhEhQg");
	this.shape_1.setTransform(30.7,49.9);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AikGOQhEhLg2iEIACgPQAHAFA7AzIgohyQgbhfAAhUQAAgXAEgmQAFgmAEgEQAEAGAfBPQAeBHAVAWIgBgOQgLhYAAgTQAAhLALg1QAKg3ATgTIABACQACAFATAuQATAtAKAHIACgBIABgBQADhqAKgvQANg0Aog0IAEAIQAMA+ArA3QAwA5AtAAIBQgRQAoAAAbAoQAbAoAAA6QAAAkgfBZIhSDkQgkBnhPBXQhIBRguAAQguAAg8hCg");
	this.shape_2.setTransform(28.9,46.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,58.7,93);


(lib.FIZ23RGLSSR002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhfALQgDgXAFgPIC+AJIgsArQgsADgdAAQhJAAgCgRg");
	this.shape.setTransform(10.6,4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah9ApIAAhNIALgPIDYATIAYACIhFBPIirADQgGgFgFgGg");
	this.shape_1.setTransform(11.6,3.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,25.3,10.5);


(lib.FIZ23RGLSSMID002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("ADSAWQhJgQiKgDQiMgDg7AJQg7AKgWAGIAAgqIADgBQBIgRCrAAQB6AABeANQAwAGAeAHQAQACAFABIACABIAAAoQAAAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAQgMAAg5gOg");
	this.shape.setTransform(32.3,5.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ADHArQhJgNgSgBIhKgEIg5gCQg9ABhjAIQhHAGgbAEIAAhOQATgGAsgFQBJgJBoAAQBHAABfAJQByALAcAPIAPAHIAABFIgDACQgJAAhHgOg");
	this.shape_1.setTransform(32.3,5.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,0,56.5,11.4);


(lib.FIZ23RGLSSL002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089DD").s().p("AhWgbICtAJIgbAsIiSACg");
	this.shape.setTransform(9.9,4);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhrAxIgFgGIAAhNIALgOIDWARQgDAMgkBEg");
	this.shape_1.setTransform(10.3,3.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.4,22.7,10);


(lib.FIZ23REYER002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgXC4QgjhPgIhrQgDhvAkhJIAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQggBjAABOQAAASADAUIAAACIANA2QAJAhASAlQAVAqAVAmIgIABQgxAAghhPg");
	this.shape.setTransform(15.2,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgOBvQgOg1gEg/QgCg3AJguQAcgHAegDQgUBIAAA8QAAASADAUIABABIANA3IACAHQgZgBgVgFg");
	this.shape_1.setTransform(11.9,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AgQDSIgGgLIgHgPQgJgUgHgVQAYAEAXABIAQAiQAVAqAVAmIgHABQgoAAgdg1gAgoi6IAAgBQAehMAwABQAIAAAIADQgNASgKASIgYBAIgFARQgeACgfAHQAHgdAMgYg");
	this.shape_2.setTransform(15.9,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C0C3").s().p("AgSAnQgEgdgDgdIAAgDIAAgDIAAgKQAZgGAXgEQgDAWAAAUQAAARADATIABACIACALQgXgCgVgFg");
	this.shape_3.setTransform(11.2,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F9B9F").s().p("AA2EHIgFgBIgBAAQgjgHgZgxIgDgGIgIgQQgSgqgLgzQAUAEAVACIAGAAIADAPQAJAhASAlQAVAqAVAmIgIABIgFAAgAhCgpQAEhVAdg8IAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQgSA5gIA0QgbADgaAGg");
	this.shape_4.setTransform(15.2,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F9B9F").s().p("AA2EHIgFgBIgBAAQgjgHgZgxIgDgGIgIgQQgWgygLg9QAWAEAYACIAIAhQAJAhASAlQAVAqAVAmIgIABIgFAAgAg9ArQgDgXgCgWQgDhvAkhJIAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQggBjAABOQAAAQACARQgXgDgWgFg");
	this.shape_5.setTransform(15.2,29.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4F9B9F").s().p("AgrggQARgEASgCIAKgBIAAAAQAVAoAVAmIgHABQguAAgihIg");
	this.shape_6.setTransform(17.5,51.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3C0C3").s().p("Ag/AqQgDhsAkhKIAAAAQAehMAwABQAIAAAIACQgNATgLASIgXBAQggBiAABPQAAASADAUIAAABIAMA3QAGAWALAZIgYAFIgTAFQgehLgHhjg");
	this.shape_7.setTransform(14.9,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).wait(1));

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6569AC").s().p("AANDpIgKgSIgQgmQgKgWgPg0QgQg0AAhTQAEhXAXgwQAVgyAFgIQAJgLAOgHIADABIACgEIAAAAIAKgEQgOANgKAbIAAgBQgnBYACBzQAIByAoBcIATAjIAAABQAIAIAEAJQgngPgDgDg");
	this.shape_8.setTransform(8.4,29.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8089DD").s().p("AgBAAIADgBIAAABIgBACIgCgCg");
	this.shape_9.setTransform(10.9,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9FFFF").s().p("AhTC4QgkhPgHhrQgDhvAjhJIAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAvBTgCBmQgBBlgqBQQggBBguAHIgGABQgwAAgjhPg");
	this.shape_10.setTransform(21.3,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9FFFF").s().p("Ag8B2QgZgBgXgFQgOg1gEg/QgCg3AJguQAegHAegDQBUgJBYAWIABACQAMArABAvIAAAEIAAANQAAAvgJApQhWAYhFAAIgXgBg");
	this.shape_11.setTransform(21.3,29.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AhEDaIgGgLIgHgQQgJgTgHgVQAYADAaABQBHACBYgWQgHAUgIAUIgLAWQgOAdgRARQgVAWgaAFIgHAAQgmAAgfg0gAgwiHQggACgfAHQAIgdALgYIAAgBQAehMAyABQAIABAGACQAsAMAmBHQAMAWAJAXQhOgRhLAGgAAqkNIACAAIAGACIADAFIgLgHg");
	this.shape_12.setTransform(21.1,28.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9FFFF").s().p("AhJAwQgXgDgXgEQgEgdgDgdIAAgDIAAgEIAAgJQAZgHAZgDQBjgPBoAdIAAAHIAAALIgBAjQhaAZhJAAQgSAAgSgBg");
	this.shape_13.setTransform(21.3,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66CCCC").s().p("AgEEHIgFgBIgBAAQgigHgbgxIgEgGIgHgQQgTgqgLgzQAUAEAVACIAGAAQBBAEBKgPIADgBIAEAAIAqgKQgKA+gcA1QggBBguAHIgHABIgEAAgAhIgyQgaADgbAGIAAAAQADhVAdg8IAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAkA/AHBNQhlgbhhANg");
	this.shape_14.setTransform(21.2,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#66CCCC").s().p("AgEEHIgGgBIgBAAQgigHgbgxIgDgGIgIgQQgWgygMg9QAXAEAYACQBVAGBugdQgJBJggA9QggBBguAHIgGABIgEAAgAhMAzQgYgDgVgFQgDgXgCgWQgDhvAjhJIAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAvBTgCBmIAAASQhbAZhJAAQgUAAgTgBg");
	this.shape_15.setTransform(21.3,29.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9FFFF").s().p("AgiDeIATgBIgTACgAh+AkQgDhtAjhJIAAgBQAehMAyABQAIABAGACQAsAMAmBHQAvBTgCBmIAAADIAAACIAAAFIAAAFIAAACIAAADIAAACIgBADIAAACQgEA7gTA0IgGAOIgkgEQg8gGgtAIIgaAGIgTAFQgehLgHhjg");
	this.shape_16.setTransform(21.3,25.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#66CCCC").s().p("AgVA3IAJABIAAAAIAGgBIgGABQgEAAgFgBgAhSgvQARgEASgCIAMgBIAAAAIATgBQAbgBAfADQAUACAVAEIAAAAQggBAguAHIgFABQgwAAgihIg");
	this.shape_17.setTransform(21.4,53.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_14},{t:this.shape_8},{t:this.shape_9},{t:this.shape_13}]},1).to({state:[{t:this.shape_15},{t:this.shape_8},{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_9},{t:this.shape_8}]},2).wait(1));

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAdEmIgBAAQgEgBgHABIgBAAIgWgDIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQBDAAAxBZIgBAAQAwBVADB1QADB0gvBbQgqBahCAAIgBgBg");
	this.shape_18.setTransform(18.3,29.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAdEmIgBAAQgEgBgHABIgBAAIgWgDIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQAdAAAZAQIACAAIAFADIADAFQAcAWAYArIgBAAQAwBVADB1QADB0gvBbQgqBahCAAIgBgBg");
	this.shape_19.setTransform(18.3,29.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAdEmIgBAAIgFgBIgHABQgEAAgFgBIgNgCIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQBDAAAxBZIgBAAQAwBVADB1QACBdgdBNIgCAIIgDADIgMAaQgqBahCAAIgBgBgAB/ChIAAAAIAGgPIgGAPg");
	this.shape_20.setTransform(18.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18}]}).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_18}]},1).to({state:[]},1).to({state:[{t:this.shape_20}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,59);


(lib.FIZ23REYEL002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A3C0C3").s().p("AgXC4QgjhPgIhrQgDhvAkhJIAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQggBjAABOQAAASADAUIAAACIANA2QAJAhASAlQAVAqAVAmIgIABQgxAAghhPg");
	this.shape.setTransform(15.2,29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A3C0C3").s().p("AgOBvQgOg1gEg/QgCg3AJguQAcgHAegDQgUBIAAA8QAAASADAUIABABIANA3IACAHQgZgBgVgFg");
	this.shape_1.setTransform(11.9,29.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4F9B9F").s().p("AgQDSIgGgLIgHgPQgJgUgHgVQAYAEAXABIAQAiQAVAqAVAmIgHABQgoAAgdg1gAgoi6IAAgBQAehMAwABQAIAAAIADQgNASgKASIgYBAIgFARQgeACgfAHQAHgdAMgYg");
	this.shape_2.setTransform(15.9,29.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A3C0C3").s().p("AgSAnQgEgdgDgdIAAgDIAAgDIAAgKQAZgGAXgEQgDAWAAAUQAAARADATIABACIACALQgXgCgVgFg");
	this.shape_3.setTransform(11.2,31.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4F9B9F").s().p("AA2EHIgFgBIgBAAQgjgHgZgxIgDgGIgIgQQgSgqgLgzQAUAEAVACIAGAAIADAPQAJAhASAlQAVAqAVAmIgIABIgFAAgAhCgpQAEhVAdg8IAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQgSA5gIA0QgbADgaAGg");
	this.shape_4.setTransform(15.2,29.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F9B9F").s().p("AA2EHIgFgBIgBAAQgjgHgZgxIgDgGIgIgQQgWgygLg9QAWAEAYACIAIAhQAJAhASAlQAVAqAVAmIgIABIgFAAgAg9ArQgDgXgCgWQgDhvAkhJIAAgBQAehMAwABQAIAAAIADQgNASgLASIgXBAQggBjAABOQAAAQACARQgXgDgWgFg");
	this.shape_5.setTransform(15.2,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6569AC").s().p("AANDpIgKgSIgQgmQgKgWgPg0QgQg0AAhTQAEhXAXgwQAVgyAFgIQAJgLAOgHIADABIACgEIAAAAIAKgEQgOANgKAbIAAgBQgnBYACBzQAIByAoBcIATAjIAAABQAIAIAEAJQgngPgDgDg");
	this.shape_6.setTransform(8.4,29.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AgBAAIADgBIAAABIgBACIgCgCg");
	this.shape_7.setTransform(10.9,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D9FFFF").s().p("AhTC4QgkhPgHhrQgDhvAjhJIAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAvBTgCBmQgBBlgqBQQggBBguAHIgGABQgwAAgjhPg");
	this.shape_8.setTransform(21.3,29.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9FFFF").s().p("Ag8B2QgZgBgXgFQgOg1gEg/QgCg3AJguQAegHAegDQBUgJBYAWIABACQAMArABAvIAAAEIAAANQAAAvgJApQhWAYhFAAIgXgBg");
	this.shape_9.setTransform(21.3,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CCCC").s().p("AhEDaIgGgLIgHgQQgJgTgHgVQAYADAaABQBHACBYgWQgHAUgIAUIgLAWQgOAdgRARQgVAWgaAFIgHAAQgmAAgfg0gAgwiHQggACgfAHQAIgdALgYIAAgBQAehMAyABQAIABAGACQAsAMAmBHQAMAWAJAXQhOgRhLAGgAAqkNIACAAIAGACIADAFIgLgHg");
	this.shape_10.setTransform(21.1,28.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9FFFF").s().p("AhJAwQgXgDgXgEQgEgdgDgdIAAgDIAAgEIAAgJQAZgHAZgDQBjgPBoAdIAAAHIAAALIgBAjQhaAZhJAAQgSAAgSgBg");
	this.shape_11.setTransform(21.3,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AgEEHIgFgBIgBAAQgigHgbgxIgEgGIgHgQQgTgqgLgzQAUAEAVACIAGAAQBBAEBKgPIADgBIAEAAIAqgKQgKA+gcA1QggBBguAHIgHABIgEAAgAhIgyQgaADgbAGIAAAAQADhVAdg8IAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAkA/AHBNQhlgbhhANg");
	this.shape_12.setTransform(21.2,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CCCC").s().p("AgEEHIgGgBIgBAAQgigHgbgxIgDgGIgIgQQgWgygMg9QAXAEAYACQBVAGBugdQgJBJggA9QggBBguAHIgGABIgEAAgAhMAzQgYgDgVgFQgDgXgCgWQgDhvAjhJIAAgBQAehMAyABQAIAAAGADQAsAMAmBHQAvBTgCBmIAAASQhbAZhJAAQgUAAgTgBg");
	this.shape_13.setTransform(21.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_6},{t:this.shape_7},{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_6},{t:this.shape_7}]},1).wait(1));

	// Layer 2
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAdEmIgBAAQgEgBgHABIgBAAIgWgDIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQBDAAAxBZIgBAAQAwBVADB1QADB0gvBbQgqBahCAAIgBgBg");
	this.shape_14.setTransform(18.3,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAdEmIgBAAQgEgBgHABIgBAAIgWgDIAAAAQgIgDgKgBIAAAAQgUgEgbgNIghgRIgBAAQgvhfgThGQgLg1AAgmQAAgpALhIQAQhFAdgrIAPgOQAEgFACAAIAGgDQAhgWARgFIAcgIIAIgCIAXgGIAEgBIACABQAdAAAZAQIACAAIAFADIADAFQAcAWAYArIgBAAQAwBVADB1QADB0gvBbQgqBahCAAIgBgBg");
	this.shape_15.setTransform(18.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,59);


(lib.FIZ23REARR002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGBRQgFgBgBgCQAJgUAXgZQAPgRAAgQQAAgOgNgNQgMgMgQAAQgJAAgSAWQgUAXgXAFIgIgCIgBgFQBLhJAcgKQAPgGAdASIguASQAQACAKAPQAJAPAAASQAAAUgMAbQgOAigYAAIgHgBg");
	this.shape.setTransform(13.3,25.9);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AgiBAQgqgZAAgnQAngsAlgYQBNgvAABtQAAAxgYAYQgPAQgSAAQgXAAgfgTg");
	this.shape_1.setTransform(13.1,26.4);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("Ag+CWQgpg1gEgFIgggQQgOgIAEgOQAEgPAdgLQAcgMAVgSQAHgHAmgtIAfgnIAPgVQAQgWAbgUQAcgUAOAAQAOAAALARQARAZAAA2QAABugtBIQgvBLhKAAQgbAAgUgbg");
	this.shape_2.setTransform(12.7,21.3);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhpCwQgNgOgphPQABACAHgBQgKgRAAgOQAAgOASgSQAlgiAQgTQA4hFA0hGQAhgkAkABQArgBASAnQAOAeAAA6QAACfhKBNQgyA0g6AAQg4gBgdgfg");
	this.shape_3.setTransform(14.5,20.9);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,0.1,33.2,41.6);


(lib.FIZ23REARL002 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAuQgLgYAAgTQAAgUAHgPQAJgSAMgCQgWgOgLADIgIAFQgHgHAAgHQABgLAWAAQAYAAAWAWQAQARAEAQIgHAGIgRgOQgLACgHAIQgIAKAAAQQAAAYALAdQAEAJAMAVIgEABQgSgJgNgdg");
	this.shape.setTransform(11.5,24.8);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6A17D").s().p("AghBAQgVgaABglQAAgoAHgYQAJgZAPAAQARAAAZAYQAiAhABAuQAAAlgMASQgMATgbAAQgTAAgSgZg");
	this.shape_1.setTransform(12.3,25.3);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("AhlA6QgMg7AAhQQAAgcAJgiQAJgdAHgIQAzAuA6ByQAeA4AYA5QAEgBADgEQACgDgCgNIAEgHQAfAzgDATIgCAKIgOgBQgHgKgCgCQgEgDgGAAQgWAAgVAaQgUAagbAAQhBAAgZh7g");
	this.shape_2.setTransform(13.8,20.9);

	// Layer 6
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhZCQQgmhLAAiZQAAhIATgfQANgWATAAQAnAAAjBJQATAoAeBLIA3BmQAKAVAAANQABAMgIAPQAMAAAFAJQADAGADAUQgGgGgNgIQgPgHgEAAIgHAHQgKAMgXASQgLAKgFADQgLAEgTAAQg7AAgihCg");
	this.shape_3.setTransform(12.9,21.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,25.7,42.1);


(lib.FIZ23RCOLLARFR002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F0FF7A").s().p("Ag4BBQADgZAAgMQAAg+gagiIBFgQQBGgVAUgVQiJD2gGAHIAHg+g");
	this.shape.setTransform(63.8,27.5);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhVCoQgEgKAAgQQAIhFAAgKQAAhBgVgoQgXgfgEgIIA7gKQA6gMAugUQAwgUAbgYQAbgXgHAKQADAZg8BrQg7BnhXCBIgLgQg");
	this.shape_1.setTransform(64.1,26.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(51.1,8.2,26.1,36.9);


(lib.FIZ23RCOLLARBK002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgdAmQgGgUgQhIQAfADAdAOQAjAPAIARIglAdQglAfgCAAIgFgRg");
	this.shape.setTransform(68.9,8.7);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AglDUQghgWgRgdQgmg0gVgjQgVgihSgyQhDgsgbgKQBahFBAgfQBAgeBQgSQBNgSAhgBQAUgDCbAAQAeADAgAOQAiAPAIARQhPBFhGATQg/AIgRAHIgBABIAEAIQAEAHAHAAQAKAAAOAvQAFARACAVQACAUAAAeQAABOgoAtQgmArg6AAQgcAAgjgXgAC5BJIADgnQAAgTgGgUQgGghgPgWIBFgPQA+gRAfgaQgFAMg6BmQg7BogYAjQAEgbAEgjg");
	this.shape_1.setTransform(39.6,26.6);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVD5IgogiQgtgogOgaQgshThng7QgagNgugWQgkgSgIgHQBlhaCAg1QCchAC2AAQBtAAA0AbQAnAUAAAfQAAAjgqBGQhZCUgSAjQgbAygoAoQhDBBhKAAQgcAAgUgMg");
	this.shape_2.setTransform(38.5,26.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,77,52.4);


(lib.FIZ23RBROWR002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhiA/QgVgQACgeQBxg6AVgMQAogTAUAAQARAAAJARQAFAKAKAZQi9BdgDAAQgLAAgNgKg");
	this.shape.setTransform(13.6,9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("AhOBLIgMgTQAcg6A1guQAvgqAiAAQAFAFAHAdQAHAZAAAFIgwAcQgwAegCACIgfAjIgXAWQgIgCgJgOg");
	this.shape_1.setTransform(17.8,6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},3).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhxBNQgYgTAAggQAAgYBXguQBUgvAtAAQARAAAVAbQAVAcAAAVQAAALgQAEIhMAeQgpASgpAaQgeASgIAAQgTAAgUgPg");
	this.shape_2.setTransform(13.8,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhJBvIgCgEIgegpIgIgLIAAgEQACgNAlg7QALgCAhgqIAMgMIAAgBQAlgkAmgBQAaAAAPAZQAQAaAAAtQAAAJgWAJQgnAQgiAZQgnAdgYAbQgQATgCAAQgDAAgIgEg");
	this.shape_3.setTransform(17.8,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,27.7,18.6);


(lib.FIZ23RBROWL002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhqgaQAAgUAJgPQALgPAPAAQAaAAA4AeQBDAhAdAlQgQAegKAMQgJALgGAAQgCAAiqhng");
	this.shape.setTransform(12.7,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#825454").s().p("ABJBVQgWghgSgUQghgkg2AAQgKAAgRAEIAGg6QABgNARgKQAZgNAuApQAvApAOAnQANAqgLAQg");
	this.shape_1.setTransform(10.9,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_1}]},3).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABEBeQAAgHhfgvQhiguAAgVQAAgNASgaQAUgcAPAAQAqAABMAuQBPAvAAAZQAAArgcATQgJAGgLACIgHABIgCgBg");
	this.shape_2.setTransform(12.6,9.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AA2BUQgegkgYgTQgFgFg1gHQgwgGAAgJQAAhDAZgZQASgSApAAQAhAAAzBNQAtBCAAAUQAAAVgIARQgHAQgHAAQgJAAgWgZg");
	this.shape_3.setTransform(10.7,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[]},1).to({state:[{t:this.shape_3}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.2,19.1);


(lib.FIZ23RBOW002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADEE0").s().p("AgMB/QgagNgIgCQgOgDgLgFQgUgKAOgPIgCgBIAAgMQAIATAeAJQAVAGAUAAQApAAAAgYQAAgOgOgJIglgWIgQgGIAOgBQAcAAAkAfQAgAcAAAJQAAARgOANQgQAOgYAAQgbAAgPgJgAhPAAQBIgbAOgMQAUgPAGgfIgBgIIgWgDQgVAGgGACQgUAJgqAeIAAgQQBChEArgCQAOgBAKAHQAHAFABAFQAABXiNAqg");
	this.shape.setTransform(14.2,15.1);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AALgPQABANgIAIQgFAKgJAAQAGgDAPgcg");
	this.shape_1.setTransform(14.3,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdCQQgpgNgSggIAAgyIAVARQAaAPAdAAQAIAAAHgDQAIgCADgCQgKgKgUgMQghgRgngGIAAgtQAlgWAggLQAKAAAHgKQAFgKAAgNQgSAIhJAqQgPhEBAggQAggQAigDQArAAAAAiQAAAqgdAaQgqAggdAVQAzADAlAeQAiAbAAAcQAAAdgXARQgTAOgZAAQgcAAgagIg");
	this.shape_2.setTransform(15.2,15.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.8,0,18.6,30.5);


(lib.FIZ23RARMR002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhLB1QgIgLABgMQAAgTAcgUQAmgYASgRQgNgDgfAJQglALgIAWQgDAGgHgUQgIgVAAgKQAAgJAQgSQAXgYAwgXIANgFIgLgEQgLgCgHAAQgDAAhIArQAAgsAdgcQAegfAyAAQAyAAAeAlQAeAkAABAQAAAdgRApIgRAZQgFAIADAAIgTAJQgZAMgFABQgLADAAgKQAAgCgEgFQgFgGgGgGIgIABQgCAAAAAHQAAAFAFAEQAEAEAAAFQAAAFgGAFQgFACgDAAQgrAAgQgUg");
	this.shape.setTransform(-36.1,3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AAmDwQAFgVAAgVQAAg2gUghIgdgwIgIgHIA4gPQAqASAYBFQASAzAAAlQAAAzgPAJQgGAFhWAVQAOgpAFgVgAgEgzQAAglAtgcQA1ggAxAoIALAJQg0AAgeAPQgmATgRAsQgVgTAAgLgAiQjTQgJgLABgMQAAglAcgMQAYgWAdAGIAoAjQgiALgUAOQgZARgMAbIgBAJQgIgMgNgNg");
	this.shape_1.setTransform(-27.6,-17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8089DD").s().p("ACSDcQgWgxglghQAggNAQgQIABgCIABAAIgHAAIgXAHQgVAGgQAAIgPgCIgBgBQgBgBAAgGQAAgiAegYQAhgaA0AAQAnAAAnAvQAsA0AABEQAAAogiAfIhYBGQAFg4gbg6gAkhkBIAshMICrB8QgiABgaAYQgYAXACAZQgogmhdhTg");
	this.shape_2.setTransform(-29.5,-27.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72EBEB").s().p("AhjgDQAHgnAYgSQAQgMAugPIBqBcIgTgCQgbAAgcAaQgYAWgTAlg");
	this.shape_3.setTransform(-27.8,-33.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AgFAIQAEgKAEgLQAFgJAAAJQgBAOgCAEQgCAEgLAJg");
	this.shape_4.setTransform(-39.2,-39.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F0FF7A").s().p("AgeB6QAyALA3g7QA4g+AKhWIAfAbQAUASAAAQQAABdhDA4QgxAoglAAQgEAAhBg2gAi1hQQgKgJAAgKQAAgVAXgcQAZgfAYAFQAJACAFAEIAIAKQgHAGgcAmQgYAjgIAMQgOgJgDgEg");
	this.shape_5.setTransform(-25.7,-31.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("AgqCTQgWgIgKgHIAVgNIgIgLIAAAAIAAAAQgDAFgQAAQgiAAgMgXQgHgMAAgQQAAgTARgSQAUgXAiAAQAYAAAYAIQAWAIAHAAQgSgcgfgGQgSgDgqABQABggAVgUQATgRAcAAQAoAAAXAOQAUANALgBQgLgRgUgNQgegTghACQAOgaARgKQAPgJAXAAQAwAAAYAqQASAeAAAiQAABagvA5QgsA2g/AAQgDAAgTgHg");
	this.shape_6.setTransform(-26.8,-38);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AC5ECQgqgSgqgaQAngDArg1QAtg4AFg/QAvA3AQAZQAdAoAAApQAAAogNASQgQAVgnAAQgXAAgxgVgAlEi4IAtheICgBxQg/AWgJA/g");
	this.shape_7.setTransform(-28,-34.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72EBEB").s().p("AgnAuQgkgTAAgIIAKgmQAPgqAagRIBkAtQg/AoAJBIIg9ghg");
	this.shape_8.setTransform(-32.9,-44.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC99").s().p("AgxCPQgMgIgUgUIAZgCIgJAAQhGgXAAghQAAgMAMgRQAOgUASAAQALAAAiANQAgANATAAQAGAAAEgEIACgFQgrgjg5gEQgXgCgFgDQgKgGAAgSQABgKAUgOQAWgPATAAQAsAAAYAIIAnAPQgBgWghgPQghgPgoAFIgCgEQgBgGAAgGQAAgPAQgKQANgIAOAAQBOAAAtBGQAgAyAAAoQAAA/g0AvQgtApgqAAQgcAAgSgNg");
	this.shape_9.setTransform(-20.6,-68.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8089DD").s().p("ABdCeQhdgaAAgUQAAgYANgtQARgvANAAQAOAABAAgQAoAWApAXQgFgGhIhCQARgEAuglQAygoAAgSQCMCjAAA3QAAAbgkARQglASg9AAQg9AAhagYgAl5hcIA2hZIBqA+QgMAJgYAlQgbAoAEAKg");
	this.shape_10.setTransform(-21.6,-44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0FF7A").s().p("AgqCXQgMgEAAgkQgBgPAPgeQAUgnAVAAQANAAASALQgLAPgOAgQgVAyAEAcQgEgEgcgIgAjxApQAEgXAQgfQAUgqATAAQAGAAAeASQgwAngGA/gABKAXQgJgGgXgUQArggApgYQAXgWAbhRQBCBBAAAIQgBAhgpArQguAug3AAQgMAAgNgKg");
	this.shape_11.setTransform(-22.9,-49.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72EBEB").s().p("AgDALQgBgMABgJIADgNQAEAUAAAFIAAAHIgCAGIgEAJg");
	this.shape_12.setTransform(-36.9,-44.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F0FF7A").s().p("ABUCmQgdgKgTgZIgFgJQAzALAbhmQAYhbgShBQA8AcAGBNQAGBMgXA3QgaA8gcAAIgagFgAiohDQgNgNAAgRQAAgXAOgbQAUgmAfAZQgHAFgIAhQgJAhgCAhQgCAAAAAIIgYgTg");
	this.shape_13.setTransform(-24.6,-37);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC99").s().p("AgcCfIAOgTIgHgEQgCgBgHAAQgFAAgJAEQgLAEgFAAQgNAAgPgUQgQgVAAgWQABgvAqgNQAbgJAlAHIAFAAQgGgHgNgIQgUgLgSAAQgeAAgQAJQgKhYBAAAIAhAFIAgAFQAGgCAAgCQgKgSgUgHQgKgEgZgBIgeAAIgBgMQgEgOASgQQAUgSAeAAQA0AAAbA5QAbA4AABoQAAAwgXAlQgaApgtAAg");
	this.shape_14.setTransform(-25,-44.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8089DD").s().p("ACWDIQAvgfALhXQAJhDgLgdQA1AgAnAxQAvA9ABA5QAAA0g7AAQhigVgngQgAlYh9IAAhvQAGAACvBVQgNAJgNAYQgSAkAKAlg");
	this.shape_15.setTransform(-24.9,-40.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72EBEB").s().p("Ah0AhQAGgPAfgmQAigtAQgDICRBlIgmAbQgFgFgOgGQgUgHgXAAQgVAAg/Abg");
	this.shape_16.setTransform(-27.5,-43.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8089DD").s().p("ADYDMQAAg7gYgpQgdgxg/gRQALgSAHgiQAKgZArAFQArAFAjAoQAjArAYBSQAXBRgfAqQgfArhNAyQAYhvAAglgAk9jsIAghzQALAICSBIQgNAJgbAnQgdArADAQQhhg6gagOg");
	this.shape_17.setTransform(-27.3,-29);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F0FF7A").s().p("AByE6QgOgEgHgEQAOgPAOgrQAPgtAAgkIgRhKQgRhMgHgNQAsAKAXApQAWApAABEQAABFgIAgQgMA1gkAAIgOgEgABgh2QgFgJgGgFIARgJQARgJAHgFIAjAhIg7ARQABgDgHgKgAitjGQgKgHAAgFQAAglAfgjQAUgZATgKIAxAdQgdAPgVAdQgPAVgSAmQgQgGgKgHg");
	this.shape_18.setTransform(-26.3,-23);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCC99").s().p("AAKDTQgSgSgIgqQAbgDASgQQAKgIAIgRIgFgBQgRAEhIAbQgXAAgQgSQgNgQAAgRQAAgcASgdQAXgiAiAAQAqAAArAXQAjAZACAAQAGAAADgCIACgEQgSgegUgLQgkgZg7AAQgUABgKADQgJACgNALQgBgJgCAAQgMgjApgcQAmgbAtAAQAwAAAfArQAkAxAABdQAABKgVAnQgWAogpAAQgjAAgTgQgAiBBCQgtitBIAAQAIAAAGAEQAGAEAAAFIgLAVQgMAXAAASQAAAOAEASQACAJgFAMQgTAwAAACgAhJhrIgIgEQgFgEAAgFQAAghAlgkQAmgkAngBQAgABAYAKQAeAOAAAcQAAAKgGAVQgGARgEALQgOgGg4gKQgWgBglANIgkANQgKAAAEgCg");
	this.shape_19.setTransform(-29.4,-14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#72EBEB").s().p("Ag9AIQgJgHgbgSQgRgTAagWQAIgJAYgJQAZgLAMAAQAQAAAsAuIA/BDIABABQgKADglAZQglAZgGAIQgYgeg0gyg");
	this.shape_20.setTransform(-27.2,-36.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F0FF7A").s().p("ABlEIQAAglgcguQgfg0g4guIALAAQBBAAA8A9QA6A8AABCQAAAWgYAQQgZAQgqAFQAMg3AAgKgAAFhKQgJgLAAgHQAAgLAggZQAjgbAXAEIAlAvIgRgBQgQAAgeAMQggAOgMAPgAizkVQAAgUAdgUQAlgYArAgQgeACgYASQgSAOgTAcQgSgSAAgMg");
	this.shape_21.setTransform(-23.5,-16.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AgJCMQgOgMAAgRQAAggAkgiQAmgdABgEQgBgDgEgDQgRAJgaAKQgVANgeApIgMgcQgIgTAAgEQAAgeAmghQApghAJgKIgJAAIgyAQQgyAZgCAqIgDgDQgHgRAAgZQAAg0AWgeQAVgdAiAAQA6AAA1A1QA5A4AABJQAAAjgWAlQgTAigRAIIAEgJQAFgkgHgGQgEgDgNgCIgKAxQgHAOgcAAQgXAAgNgMgAhsBgQgkgZAAgqQAAgRAHgIIAHgEQAMAQAgAuIAfAvIgBAFIgBACIgBAAQgXAAgbgUg");
	this.shape_22.setTransform(-30.7,8.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8089DD").s().p("ADEEIQgsg0gngLIANgYQADgGgOgdQgPgegCgSQgCgSA5gTQA6gSAkBRQAkBRAAAlQAAAmgEAOQgGAagVAkQgQgqgogugAkZkHQAHg1AxgjIByBaIAzAqQg5AIgXBAg");
	this.shape_23.setTransform(-29.5,-29.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFCC99").s().p("AAnCRQgSgCgOgPQgNgRgFgcQgFgdASgaQATgZAAgCQAAgBgFAAQgTAAgXAhQgWAkAHAZQgggHgIgHQgTgPgBgtQgBgrAZgOIAngXQgBAAABgGQgDgGgOAAQgTAAgRANQgeAWgJA3QgNgSgKghQAAgsApgjQApgjA+ACQA9ADAzA7QA0A7gBAkQAAAkgOAdQgPAegYAEQgBgJgFgIIgGgGQADAcgSAQQgPAOgQAAIgEgBgAiGBkQgLgNgFgfIAAgLIBCBBQgCACgSAAQgTAAgLgMg");
	this.shape_24.setTransform(-56.6,-18.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8089DD").s().p("AgDEcQADgbgLg2QgKg2gRgbIAZABQAyAAA2gMQBFgPAUgbQgBgBgfAFQgfADgEgHQAOgvAtgeQAlgbAaAAQAMAAAnAuQApAzAAAfQAAAlgcAkQgaAggnASQgpAThrAgQhOAXgMAAQgIAAAJgGgAlGjRIAGghQAog5AfAMQAdgBCWBNQgMAFgcAgQgfAiABAOg");
	this.shape_25.setTransform(-26.3,-41.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#72EBEB").s().p("AgWAyQgjgag5ghQAEgRAiggQAkgiASAFICJBNQhNAOgQBVQgZgZgTgOg");
	this.shape_26.setTransform(-22.4,-49.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F0FF7A").s().p("AiaEEIAYgwQAFgKAAgOQAAgqgWgqQgXgrgggQQBFgVAjAPQA/AaAACrQAAAJgSAKQgUAKgcAAQgKAAgrgFgABWhZQAUgxA+gHQAWARANAHQgyASgaAZQgPAPgYAqQgVgVATgvgAiAi4QgFgSAigeQAggcAUgEQAIACAIAEIAJAFQgoAGgqBMg");
	this.shape_27.setTransform(-25.4,-34.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#72EBEB").s().p("AgnAlQgogOAAgXQAAgHAEgLIAOgwQAEAEAsAVIAtAYQAVAPANAJIAOANIgQAvQgsgOg7gQg");
	this.shape_28.setTransform(-26.2,-45.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8089DD").s().p("ADICaIhpgZIAchHQAiAWAlAWQBKArAWgCQgBgFg1gpIgJgGQBJgjAZghQAWgcAAg5QAAgUgIgoQAuA2AVAjQAcAvAAApQAAA8g2AgQgmAWglAAQgnAAhCgPgAkRAKIg8gRQgugOgfgWQgegWAJgbIAPgwQAGgUAXgIIClA7QgWAbgRA/IADAhQgDAAgMgEg");
	this.shape_29.setTransform(-18.3,-48);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F0FF7A").s().p("AgLC7QgUgIAFgYQAGgYArgIQAtgIgCADQAAANgOAeIgUAoIgrgOgACCCJQgbgRgUgQQAKgJAngVQAggSARgWQAQgVgDg3QgFhWhFhIQBaAhAmA4QAkA1AABUQAABCgwAjQgkAZgpAAQgEAAgZgPgAkQBoQgOgCAEgvQAEguAggYIAeARQAUAMAAADQAAAUgLAkIgNAvQgmgPgOgBg");
	this.shape_30.setTransform(-14.3,-55.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC99").s().p("AgOCKQgOgPAAgSQAAgiAmgrIA8g/IgDgDQgJABgUAMQgYAOgWAUQgeAagOAhQgNAeAHANIAAACQgBABgGAAQgUAAgagYQgZgYAAgZQAAgZAdgpQAcgrAogWIAGgHIgNgBQgeAAghAiQgtAtgCBIQgRgJgPgUQgPgTAAgIQAAgxAzgtQBHg9CBAAQAwAAApAlQAlAjATAzQASAxgLAoQgMAsgrALIgFgfQgLAhgfAZQgfAXgcAAQgkAAgRgVg");
	this.shape_31.setTransform(-17.5,-61.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC99").s().p("AjuECQgJgJAAgOQAAggAehTQAehUBQhpQBPhqA7gtQA8guAmAAQBQAAAbA9QAXA1gWBSQgVBKguA6QgyA+gygBQgGAAgFgBIgDgCIAAgFIAmg+QAEgUgSASIgbAdIgmAiIgnAeQgTAMgLAAQgRAAgIgIQgHgHAAgKQAAgUAZgqQAig6ANgeQgUAAgnAvQgrA1AAApQAAAxguA0QgmAsgPAAQgOAAgJgJg");
	this.shape_32.setTransform(39.8,-136.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#72EBEB").s().p("AiGB6QgTgggGhHQBmhMBfhdQgBAtA0AsQAsAnAcACQhuBehKAuQgyAfgVAAQgZAAgPgdg");
	this.shape_33.setTransform(-6.4,-74.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8089DD").s().p("AoADzQEEhBAsgnQgDAmAXAtQASAiAMAJQgwAikxBAgADQhaQgpgogHguQBIhfAEgDQAAAAABgBQAAAAAAABQAAAAAAAAQABABAAAAQAAADAIgHQAKAGAQAFQAPAFAIAAQAaAAAWgWQAYgYAag3QAHALAyAZQAwAZAPACQh0CdggAnQgsA5gTAAQgyAAgsgsg");
	this.shape_34.setTransform(-11,-80.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F0FF7A").s().p("AmJEZQgXgzAIgUIAxgeQgFAuAfAsQAXAgAQAHIg/AeQgPgKgVgwgAhKA7QgygvAGglIAogtQgHAeA/AwQA3AuAaACIgyAuIgCAAQgiAAgvgrgAEDj8Qg4gWgWgbIADgCQA9ATAkgVQASgLAQgOQAFAAAGAEQAGADAFAAQAsAAAfgPQgnBCgKAOQgRAZgLAAQgcAAgwgTg");
	this.shape_35.setTransform(11.1,-88.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8089DD").s().p("AAcDVIBrg2QAkgXAPgkIAAgGQgBgHgCgFQgJAHgMAQIgVgUQALgXAjgbQAngeAcAAQAXAAAVA/QARAyAAATQAAA1gwAvQgxAxhgAogAk6jsIAshZQA5AcCjBTQgUAEgiAmQgRAUgPAUQiMhXgmgRg");
	this.shape_36.setTransform(-28.6,-29.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F0FF7A").s().p("AhkDAQgjgeglgTQAOgMASgLQAlgTAhgBQAEABAHADQANAGAMAQIAPASIASATIAWAcQAXAdAAAGQAAAJgPAYQgQAbgPAJIgSAHIgVAGQALg4hGg8gAAfhNQAAgjAxgaQAmgUAYAAQATAFARAdQgiAGgeAZQgQANgiAmQghgJAAgagAixjpQALgWAOgSQAbgiAhAAQANAAAVAJIAMAGQgRAGglAeQgpAhADARg");
	this.shape_37.setTransform(-22.6,-18);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#72EBEB").s().p("Ah1gKQALghAlgaQAggXASgBQARgBA5AnQA6AnAFAQQgPADgZARQgoAcgWAuQhBg2hEgyg");
	this.shape_38.setTransform(-22.8,-36.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AAlCbQgZgEgHgaIgGg3QgTAiALAkIABACQAAABgGAAQgdAAgVgJQgigPAAgjQAAgPAIgcIAJgYIAAgGIgBABIgEgCQgEAGgPAgQgNAegDAKQgNAHgKgQQgKgPAFg0QAFgyBBhCQAygzAgAAQA7AAAoA+QAdAwAAAfQAAAagIAaQgMAlgbATIgJAHQAIAHAKAAQAJAAAOgJQAUgMgBgUIAQAGQAIAigwAaQgqAXgYAAIgIgBg");
	this.shape_39.setTransform(-42.5,14.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#72EBEB").s().p("Ag4AoQgVgSAOgbQALgkAUgYQAPgQAOgFIBJAnQgiAPgXAuQgSArAFAYIABAGQgVgZgkgWg");
	this.shape_40.setTransform(-36.4,-39.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8089DD").s().p("ABkC1QgcgLAAgYQAAguAVgqQAMgWARgXQAMgSAcADQAlACAJgCQgjAygNAuQgKAkgFA+IgtgLgAjOhRIAehuIBhBYQgOAGgYAjQgaAmADATQgVgXgtg1g");
	this.shape_41.setTransform(-35.2,-41.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0FF7A").s().p("AAoCIQgBgFAAgIQAAgOAKgmQANguATglQA6h0BWAAQAKAAAKABIgLAIQhHAcgdAtQgIAOhNCsQgGAAgDgEgAhrBRQgIgPAAghQAAgiAjgfQAbgaAWgEIAQADQgjAogRA2QgNArADAQIABAGQgWgBgJgSgAj0g4QAAgaATgaQASgbAYgEQAJABADADIAHAIQgZAQgQAbQgMAUgJAhIgCALQgQgPAAgVg");
	this.shape_42.setTransform(-22.4,-36.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFCC99").s().p("AhoDUQgHgJAAgNIAogpQAqguAMg5QAEAAgKAAQgXAhgbAhQg2BDgZAAQgLAAgIgPQgGgMAAgLQAAggAdgtQAmg4ABgGQAZhDANgbQAYg0AagbQA/hCBDAUQBFATAABeQAABSgxBcQg3BqhKAXIgNABQAegfAdgzQAYgsADgSIgBgDQgIAIhBBeQguBDgnAAQgLAAgHgKg");
	this.shape_43.setTransform(-2.5,-24.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFCC99").s().p("AhxDfQgKgVAAghQAAhFAjhHQAihGAAgQQAAgPgIgLQgJgMgOgDQgMAAAAACIATAlQgDAdgeAqQgxgZgCg7QgCg7A7g8QA6g7AyADQA0AEA2AsQA2AtAAA3QAAATgJAMQgUAYgFAKIADgTQgBgNgIgZQgKgkgVgmIgIgJQgFACAAAKQAAAHAPAnQAPAnAAANQAAApgRAYQgTAdglAIQAIhGAAglQAAgegEgaQgEgWgFgLQgIARgCBBQgBBEgCAPQgIBIgSBBQggBogpAAQgUAAgMgZg");
	this.shape_44.setTransform(22.8,-88.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#72EBEB").s().p("AhqBnQgrgOAAgpQAAg+AUgVQAOgOAogBQApAAAZgUIAzgnQAPBkBUARIAJAAQgvAwgqAYQg0Aeg2AAQgoAAgVgHg");
	this.shape_45.setTransform(-16.9,-35.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F0FF7A").s().p("AlOD6QAAglAUgTQAYgXAgAcQgVAkgEAMQgHAZACAyQgugDAAhFgAgMDXQgrgeAAgxQAAgQAYgmQAQA1AdAcQAgAbAMAEQANAEAFAEQgDAOgJALQgJAKgGAAQgeAAgfgWgAB3iUIgXgOIgbgSQgKgLAAggQAAgQAPgnIALgfQAGgQACAGQAcA3AVAPQAOAJAAACIgIAUQgJAagIAyIgMgGgAE4jXIAMgBQAKgBABgBQgDALgOAVQgMASgEAEg");
	this.shape_46.setTransform(-5.1,-60.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8089DD").s().p("AjDDQQgdgRhBhBQhBhCAAgWQgRhYAqgGQBgBqAlAeQAcARATANQgNAKgMAYQgNAXAAASIADAegADPBZQg2gpAAg0IAhg/QAkhNARhGQA4AQALA8QAGAgAGALQAMAUAeAIQgEALgSAjIgqBOIgUAmQgOAYgBAAIg2geg");
	this.shape_47.setTransform(-22.2,-54.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#72EBEB").s().p("AihBhIgDgXQAAg6APgZQAPgcAEAEQAFgCAsADQAkADAsgaQAogaANgdIACABQAHAZAbAiQAlAwAogHQg1A5hFAgQhAAfhDAAQgKAAg/gOg");
	this.shape_48.setTransform(-17.9,-48);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8089DD").s().p("AmTDLIAIhFQADhBA4AMIB4A2IABAAQgYAXgFAuQgCAWACAYIACAMQiMgwgVgLgAC5AsQgtgbAAg8QAAgKAmhOQArhYAMgqQAaAWAgAMQAoAPBJAHQg1CCgrBJQgrBIgSAAQgSAAgsgag");
	this.shape_49.setTransform(-19.4,-66.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0FF7A").s().p("AlPFGIgFgFQgNgOAAgLQAAg+APgYQAPgYA2ATQgNAOgKAjIgLAoQgDAOAHAPQADAIgLAAQgJAAgTgFgAgJC2QgggggBgvIAbgtQAMgIgCgNIATAtIAIANIAJAPQAMAOAYAMQAcANAagBQgJAkgfAQQgTAKgQAAQgdAAgagcgACjjBQhBgYAAgXQAAgHAVhIIADgLQAPAdAPAMQAsAgBjAAQAcAAAfgNQgNAdgTAkQgTAkgCAAQhGAAhEgYg");
	this.shape_50.setTransform(-6.3,-72.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCC99").s().p("Ah3D9QgugbgNgnQgNgoAeggQAeghAwACQAvADAKAJQAKAJAAAYQAAAlgfAVQgUANgNAAQgFAAgOgDQgPgFgFAAQgGAAgKADIgCACQAHAHAOAJQARAKALAAQAbAAASgKQAcgQAPgqQARAXAOAOQAbAbAkgMIgrA4QgPAVgkAAQhDAAg0gfgAA4CqIgIgKQBCgRASh+QAUADAOAPQARASAAAcQAAAxglAdQgeAWghAAQgMAAgPgLgAAJB8QgHgMAAgIQAAgLANgfIAAgHQgCgCgGAAQgDAAgIAMIgMAPQgKgGgPgDQgdgJgmACQAyh5APiSQAFgvAHgNQAKgUAaAAQAPABAPAVQAUAeAAA1QAABOgpA6IgbAlQgNAPAAAKQAAAHADADIAGAFQARgLA6gvQAcAAAKAOQAIAJAAAaQAAAxgiAiQgbAbgVAAQgHAAgGgMg");
	this.shape_51.setTransform(24.1,-129.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#72EBEB").s().p("AAZBcQhGgWgugnQgTgQAAABQgLABAPgzQAihEAjgDQAjgEAoAQQArARAigHQgqBBAABCQAMAsAIAPQgagCgqgNg");
	this.shape_52.setTransform(-30.6,-34.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8089DD").s().p("ABYC4QgXgiAAgqQAAg8AjgoQBAhIAeg3IAlhRQALgQALAGIAmAMIAsAOIArAJQAaAFADAAQhaC0hPBoQhLBjgpAAQgOAAgUgdgAlUAbQgqgugRgbQgSgbAcgbQAFg7A8AOQAvA2ASARIA9A2QgnAHgZAcQgRAWgPArIgug1g");
	this.shape_53.setTransform(-20.2,-48);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F0FF7A").s().p("AhaEhQgTgRAAgoQAAgcAKgfQAQgzAngkQgWBPAIAhQAHAZAwA1QgDADgZAFIgsALQACgBAAAAQAAgBAAAAQgBAAgBABQgCABgCABIgCAAQgFgCgEgFgAlwClIgSgQQAIgtAkgdQAQgPAIgEIAagLQAOgHAIAKQAIAKATAJQhfAfgIBUQgLgGgLgLgADgiaQhdgXAAgdIABgKIAUhPQAIATAYAQQAfAWA2AKQAwAJAhgGQARgEAUgHQgIAfgRAiQgSAjgKgBQglAAhJgRg");
	this.shape_54.setTransform(-9.8,-53.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFCC99").s().p("AiADpQg7gxAAglQAAglAXgLQAcgOBSAAQAYAAALARQAIAMAAAPQAAAdgVATQgTARgYAAQgFAAgNgDIgRgFQgPABgBAHQAGAHARAIQAQAIAGAAQApAAAOgRQAJgLAXgnQAMAFAWAcQAOASAxAAIgpA3QgQAUg4ADIgIAAQg2AAg4gugABdC2QgOgHgSgLIgFgJQAUACAbgoQAfguAAg5QAcgEAPAbQALAUAAAXQgHASgJAUQgSAngNAHQgbATgPAAQgEAAgCgBgAAcCIQgHgFgHgMQgGgLAAgJQAAgKALgfIAAgGQgCgDgGAAQgNAAgDAIQgCAMgEAHIgagKQgdgHglACQAkhOAMhiQANhgAVg7IAOgGQAKgGAOAIQAjAUAABHQAABOgjA9QgjAxgFAMIACAJIAAADQABADAHgHQAGgHAigdQAkgeAOAIQAOAIAMALQAMAMgDAoQgEArgnArQgbANgKAAIgEgBg");
	this.shape_55.setTransform(22.7,-105.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#72EBEB").s().p("AgpA7QhAhAAAgCQAAgNAWgfQATgZAPgNQAPgMAogBIBkBYQgVADgdAbQgjAjgQA0g");
	this.shape_56.setTransform(-41.2,-33);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8089DD").s().p("AglDXQhHgUAAgRQAAgEATgkQATgkAFgFIAcgUIAbgRIAmAdIgMAWQApANBChIQBBhFA9h8QAZAeA3ARQAdAIApAHQhPCkhfBQQhQBEhPAAQgnAAhAgSgAl5hdQgLgPgHgTQgIgTARguQASgvAsAIIBHBNIg2AcQgeARgOAxIgaghg");
	this.shape_57.setTransform(-22.6,-35.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F0FF7A").s().p("AjrDMQgKgIAAgEQAwh0AvAAQAGAAAcARIACACQgvAjgHAJQgMAOgfBAQgOgGgKgHgAmiAKQAJg4AsgXQAWgLAaAAQAMAAAHAIQAJAIADANQgaADgZASQgiAagUAwgADohMQhBgfAAgbQAAgrAYgnQAoAwAuATQApAQA6AAQAHAAAOgDQAOgDAIgEQgIAZgWAkQgWAlgGAAQg/AAhCgfg");
	this.shape_58.setTransform(-14.3,-40.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFCC99").s().p("AiDD0QgygoAAhDQAAgZAkgOQAfgNArAAQAZAAANAIQAOAJAAAUQAAAZgTAXQgUAZgaAAQgbAAgJgFQgFgFgDAAIgGAAIgDACIgEAFQAHAJAVAJQAUAIAHAAQAYAAAWgMQAegRAHgiQAHAFAZAZQASATAoAIQgGAiggAUQgbARgbAAQhNAAgxgngAAsCiQApgSAQgXQAPgYAUhJQAPADALAFQAUAKAAAbQAAArgeAlQgeAlgkAAQgaAAgQgYgAAGB7QgFgJAAgLQAAgIAIgRQAIgQAAgHQAEgCgKAAQgRAAgDAIQgCAKgEAHQgOgQgYgDIg1gBQA0hqAliMQAOg4ADgOQAKgYAMAAQAUAAAOAZQAOAaAAAkQAABVgqBBQgrA0gHALIAAAKIABADQABADAGgCQAGgCAXgWQAYgUAagIQArAAAAApQAAAzgfAjQgaAegaAAQgNAAgGgOg");
	this.shape_59.setTransform(23.8,-84.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#72EBEB").s().p("Ag6AnQgig3AAgJQAAgfAiggQAjghAcALIBYCCQg+ANgnBFIgFAMIgthLg");
	this.shape_60.setTransform(-41.3,-24.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8089DD").s().p("AguEWQgngcgTgcQgWgdArgxQAngsAdgDIA1BCIgpgBQAOAZAgAAQAdAAAygeQA4giAWgpQAEAOAqAYQAxAbAoAAQhKBhg7AnQg6AnhGAAQg9AAg7gsgAk+icQgQgeAAgIQAAgJADgVQAEgYAFgPQAEgOAGghQALgWAnATIBFCSQgfAHgjAbQgbAVgGALQgGgSgUglg");
	this.shape_61.setTransform(-25.6,-25.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F0FF7A").s().p("AjcCbQgKgHAAgGQAAgkAvgiQAogcAUAAQAJAAAHAVQgGADgbAUQgbAUgEAEQgeAhgIAPQgCAAgJgFgAC4BZQhFgbAAggQAAgIAKgWQAKgYANgZQAWA3BXAUQBFAQAfgKQgMARgiAzQgJANgQAAQgsAAg6gYgAlkhWQAAgEAEgJQAHgMASgOQATgNAfgQQAfgQAAAmIgDACQgOACgcATQgbATgVApQgRgbAAgKg");
	this.shape_62.setTransform(-18,-24.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFCC99").s().p("AiADcQgqgoAAgtQAAgmAhgOQAVgJAoAAQAigBAMAIQANAIAAAXQAAAWgSAUQgUAWgfAAQgGAAgPgGIgTgGQgIABgCAEQAJALAOAHQAPAKAMgBQBFABANg2QANAaAMAQQAWAdAhgLQgjAmgLAJQgPAOgVAAQhJAAgxgsgAAnCZQAggBAbgoQAWggANgyQAZAJAJAYQAIAXgIAbQgUBAhFAAQgYABgPgZgAADBfIASgpIgBgFIgCAAQgHACgJAIQgIAGgFAGQgfgTgGgBIgugFQA0heAriCQAehVAQAAQAQABALAUQANAYAAAqQAAA3gpA4QguA4gOAXQABAKAGAFIAlgZQAigTAGgBQATAAAKAOQAJAJAAAPQAAA5glAdQgYAVgUAAQgYAAAAgig");
	this.shape_63.setTransform(15.2,-49.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCC99").s().p("AhFDoQgqgBgogxQgggmgMgUQgcgqgJgcQgIgbAOgJQAOgJAWAWQgIgIArAnQAsApAWADQgGgDgSgrIA6hpQANgZAQguIAPgtQADgGALgpQAHgYARAAQBBAAgqB8QgWBBgWAQIglAMQAtAFAYAsIAoBPQgBAHADgBIACgDQAEgJAFgRQAFgPAPgGIAugYQAngVAKACQAKACAKAHIAKAOQABAXgQAVQgRAUgzAjQg0AihBAaQg8AZgoAAIgFgBgAAegIQAZghAkhUQATgsAoAAQAWAAAHAMQAGALAAAdQAAA9hrBuIgwg+g");
	this.shape_64.setTransform(2.8,-34.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#72EBEB").s().p("Ag3gKQgKggAAgTQAAgQAkgPQAigOARAGQAQAIADAIQAKAXAPBSQgQgFgkAeQghAeACAbIgmhxg");
	this.shape_65.setTransform(-48.6,-18.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#F0FF7A").s().p("ABhCJQg2gsAAgsQAMgKAsgsQAfAnAVAPQAnAeA0AAQAPAAAmgLQgbA6gkAeQgbAUgXAAQglAAgwgngAjWBlQAAgQAPgYQAVghAjAAQAKAAARAOIAJAHQgOAHgjAlQgnAoAAAPQgLgRgIgegAkihwQgEgJAAgHQAAgWArgPQAfgLAQABQADgBAEAGQAHAKADAWQgOgBgmAKQgrANgEALg");
	this.shape_66.setTransform(-26.9,-16.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8089DD").s().p("AAwFOQgqgBg2ggQg3ghAGgQQAFgQAXgiQAcgsATAAQATABAOAKQAQAKAggEIAwgKQAIApAxAoQAkAdASAEQgaAbg5ARQgpALgmAAIgIAAgAjZjRQABhWAegWQAdgWAYAIQAFBZAHBIQAFA1ABALQgxACgLAGIglAYQAAglgFhig");
	this.shape_67.setTransform(-34.9,-25.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#72EBEB").s().p("AgzA5QgEgZgFhIIgDgkQgBgOACgCQAFgHATgIQAUgIAMAAQAaAAALAHQAKAGAEASQAEBCAPBEQgRAAgkARQgsAWgJAbIgJg7g");
	this.shape_68.setTransform(-51.6,-16.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F0FF7A").s().p("ABjDMQgvgggTg+QAVgQAJgFQAQgJAcATQApAcAWAKQAVAJAXAAQAWAAAMgDIgEALQgUAhgZATQgaASgdAAIgtgUgAjTB0QAAgeAbgZQAegbAqAAQAIAAAKASIAMAVIABACQgUAAgeAXQgfAXgeAmQgTgmAAgFgAj1ihQgCgEAAgHQAAgVARgPQARgPAaAAQAKAAAQAIQAYANAFAYQgCAHgIAAIgRgEQgRgEgJACIgbAJIgfALg");
	this.shape_69.setTransform(-33.8,-12.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8089DD").s().p("AAwFnQgmgBg7gjQg8gjgDgXQgCgXAkgcQAXgSAWgHQAWgHAhANQAkANAKgCQALgCAIAOIARAjQAcA3AwAUQgRAKgkAKQgnALgjAAIgFAAgAiblQQADgPANgDQAXgBAXgDQAEAhAGBVIAGBbIAAAJQgcgHgKgEQgKgEgXAHIgfAJQAUh7AEhKg");
	this.shape_70.setTransform(-39.9,-21.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC99").s().p("Ag8C6IgpgZQgUgDg8gEQgxgHAAgZQAAgfATgJQAOgIAvAAQAlAAAPgfQAKgWAAgmIgFhLQgHhBAAgSQABgQAJgJQAKgJAOAAQAOAAANAMQARAQABAYQgIBTACAtIgKAAIgLADIgDAGQAGgFApAWQAqAWAeAmQAfAmARAAIAAgEIgBgIIgMgUQAygRAbgQIAUgLQAOAAAJAKQAIAJAAAOQAAAQgUAKQgxAUg4AbQgsA8gGAGQgTATgeAAQgZAAgqgYgAAVgHQATgcAThKQAMgtAkAAQALAAAIAKQAMAOAAAgQgBAUgRAjQgUAngfAhg");
	this.shape_71.setTransform(-13,-21.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFCC99").s().p("Ai+B/QgkgxAAhVQAAgbAMgRQAMgRASAAQAlAAAJA3QADA9AFARIAGgIQADgFADgBIADgnIgEgZIgEgbQCFiQA4AAQAMAAAJAJQAHAGAAAFQAAAMg8AzQg4AzgHAAQgGAAgIgEIgMgEIgFAIQAoAfAiArIAiAsIAAgWQACgRANgLQAmgcBEgWQA6AAAAAhQAAAMgOAMQgSAQgzAdIiIBXQgpAbgbAAQhZAAgpg5gAgKgkQAKgIASgTQAagXA1gcQA9ghAWAMQAOAIAAAaQAAAVgnAfQgoAehNAjIgwg0g");
	this.shape_72.setTransform(-3,-24.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8089DD").s().p("AgtEvQg3guAFgRQAEgQAygqQAvgqAaAAQAHAAADACIALAHIAcAIQAPAEAHAXQAIAYAbAaQAjAiA2ARQgaAkg1APQghAKg1ABIgEAAQg0AAgzgsgAjZiZIgEgGIAAgNIgCgIIgDgUQAIg4AWgtQAXguAiABQAaAQAOA1QAMAwADBTIgqgFQgXAAgPAEQgOADgaAKIgHAFg");
	this.shape_73.setTransform(-35.9,-24.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F0FF7A").s().p("ABwCmQhDgrAIguQAVAgApAPQAjAMA4AAQAbAAAMgFQARgIASgHQgqAygRARQgSASgJAAQgbAAg3gjgAjJB3QAAgSAbgfQAmgrA/AAQAKAAAKAZQg5AQhABXQgbgSAAgSgAkWiKQgBgEAAgGQAAgRAKgNQATgZAyADQAlgCAMAOQAHAIADAdQgjgHgLAAQgYAAgPADQgdAGgUATIgDgIg");
	this.shape_74.setTransform(-29.1,-17.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#72EBEB").s().p("AhBAgQgSgtgEgZQgMhJBGAAQBDAAAEAVQADAVAtBhQgsABghAXQgdAVgUAnIgdhQg");
	this.shape_75.setTransform(-47,-20);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFCC99").s().p("AjUAtQgVg4AAhKQAAgqAvAAQAZAAAMATQAJAOAAAVQAAAQgFAXIgGAXQAAAGADAFQADADACAAQAFgBABgOQADgcAAgXQgBgWA+geQA9geA4ADQAQACAIAGIAFAFIhnAiIgKACQAOAOAQAJIATAMQASAOAHA1IAGALQAMgbAOgCIBOgNQAsgLAYAQQAWAOAAAgQAAAOgVAGIhKAQIhwApQhnAmgKAAQhZAAglhjgAAlg3QgRgWgIgGQAngTAggKQAggLAnACQAoABAQALQARAKgIAUQgUATg8APIhUARQgCgHgQgUg");
	this.shape_76.setTransform(7.9,-29.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#72EBEB").s().p("AhTgYQgXgyAvgfQAkgYAqAAQAGAAASAsQAdBIAUAmQgSAGgcAVQgtAigQArQgGgJg+iQg");
	this.shape_77.setTransform(-41.1,-19.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8089DD").s().p("AAPFiQgggGgNgHIgmgUQgZgMAOgwQAPgvAggUQAfgUAWAEQAYAFAWgHQAXgHAXgPIA5BLQAWASBKANQg2A6hJAaQgvARgmAAQgHAAgggHgAkFitIgEgeQAIjeAoBdQApBdAUBAQAOAvAEASQgPgBgqAVQgsAVgGAOIgQh2g");
	this.shape_78.setTransform(-27.8,-29.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F0FF7A").s().p("AjRCYQAhg6AigdQAZgVARAAQAIAAACACQADACAAAEIAFAIQglAIgfAwQgdArABAegABZBfQgigeAAgfQAAgDAQgQQAYAaAjALQAfAKArAAQAPAAARgHQAsgTAkgNQAGAggmAsQgjAogSAAQhdAAgxgsgAk8h4QAAgVAlgXQAlgZAjABIALAlQgPABgrAVQgxAWgGAQQgHgVAAgIg");
	this.shape_79.setTransform(-20.2,-19.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFCC99").s().p("ABRC/QgbgVhOgRQhsgWgzg6QglgqAAguQAYiXACgKQAKggAmAEQAmADAAAhQgBAKgJAXQgMAZgBAGQACAKAFAMIAPgMQARgMAGAAQCSAAByBgQAqAiAAARQAAAGgDANQgDAAgCADQgmgpg7gcQg6gegagaIgCAPQAIAjABAMQAAAdgSAeIgQAaIAAAHIAAABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAHAAQAMAAAJgGQAMgJABgUQBJAnAhAkQAYAZAAAUQAAAPgKAFQgLAGgYAAQgbAAgSgPgAC4CeQgEgQgmgfQgsgjg2gbIAIgfQACgSgGgWQA4AYBKA6QArAlAAAiQAAAJgGAHQgKALgTAAIgCAAg");
	this.shape_80.setTransform(18.4,-37.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#72EBEB").s().p("AhdgdQAAgbAqghQAlgdAMAAQA4BhAnAtQglAHgVAbQgTAWgKAnQhjiFAAgPg");
	this.shape_81.setTransform(-36,-20.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8089DD").s().p("AACESQgcgUgTgVQAAgfAfgjQAdgjAcAAQAWAAAUAJIASAJQAZAAAPgUQARgUASg4QATAWAvATQArATAgACQhVCCggAgQgkAlgzAAQg3AAg6gpgAkJh2Ig1haQAWhnA0gDIBXCmQgQAFghAWQgoAbgFATIgOgrg");
	this.shape_82.setTransform(-24.7,-24.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#F0FF7A").s().p("AilCZQgGgHAAgCQAAgtAhgeQAagZAbAAQAKAAAOAaQhFAZgTBLQgKgJgGgIgACTAWQgzgeAAgbIAOhpQAlBLA6AjQAoAWBQANQACAYgVANQgTAOgfAAQg4AAg1gigAk+hLQgGgLAAgEQAAgNAYgdQAfglAnAAQAEAAADAEQAFAGAHAWQgUAFgeAWQgiAZgKAaIgNgQg");
	this.shape_83.setTransform(-16.3,-20.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCC99").s().p("AjJBtQgjgggBgrQABgpAWhBQAZhIAZAAQAVAAANAIQAPAJAAAQQAAAegUAgIgaAhIABAFIAAADQACABAGAAQANAAATgdQAZgiADgDQATgOAwgIQAxgIBFAAQAHAAAIADIAJADIABABQgoAFgtARQgmAPgOAAQgKAAgKgJIgHACIgBAHQAdArAJAQQAMAhgDAjIAGABQAJAAAEgKQAGgQAFgFQAcgfB7AAQA4AAAAAsQAAAuimAdQhSAOhVAFQhBAAgogkgAgCgrQAbgMAlgLQAxgPAeAAQAjAAAdAVQAYARAAAOQAAARgKADQgFABgcgCQhNgFhXAgQAAgEgYg4g");
	this.shape_84.setTransform(-15.3,-36.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#72EBEB").s().p("AhJhGQAAgGAqgVQAmgUAMgDIgIAeIgEAXQgBAyAYAlQAfAsANANQgCAOgdANIggAQQhUi6AAgEg");
	this.shape_85.setTransform(-42.1,-27.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8089DD").s().p("AgVDcIAVgQQANgHAQAEQAAAOAGAbQAFAaAFAHQAMgMgCggQgBgKgGgiQAHACAeAEQAdADAKAAQAOABATgDQAogFAjgTIABAfQAACMh+AAQg6AAhGh5gAjnkDIBAhRIBNCYQg5AKgpAjg");
	this.shape_86.setTransform(-34.3,-29.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F0FF7A").s().p("AhWCTQAQgKAVgKQAVgLAHABQAGABAEAMQAFAMgCATQgFAAgYAJQgYAJgFAEgAAFCHQgCgDgDgXQgDgUgLgQIgJgJQBOARAGAAQAwAABggOQAFAVABANQgBAZgiAQQgjAPg3AAQhHAAgKgWgAjLhvQgGgRgBgLQAAgFAYgRQAcgVAdAAQAIAAAEAEQALAHAXAeQgQAAgfAOQgnAQgYAXIgKgXg");
	this.shape_87.setTransform(-31,-27.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#F0FF7A").s().p("AikDSQgegMgQgIQBWgIAqgSQAcgRAMgDIAEgDQgRAugQAPQgUATgqAAQgDAAgcgLgACoAvQgNgCgWADQABgDAEgfIAKgCQAYACAQAHQAVAJAAAQIACANIgrgMgAgpibQgHgNAAgGQAAgMAXgQQAZgSAeAAQAJAAAaAHQAEABAHAFQANAMANAXQgOgEgJAAQgQAAgqASQgpASgJAAQgFAAgHgPg");
	this.shape_88.setTransform(-46,-21.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#72EBEB").s().p("AAsBEQgmgIgMgIQAIgNAAgSQAAglgigNIgcgKQgQgGgGgKIgCgCQA0gRAEAAQAcAAAKAGQAKAGAIARQAnBbASAdIgpgHg");
	this.shape_89.setTransform(-35.7,-29);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFCC99").s().p("AjABqQgsgoAAgrQAAg8AjgiQAbgbAkgDIALgBQADAAABAGQgBAKgQAfQgSAhgCAJIgBAGQAAACAFAAQARAAALgaQANghARgLQASgNBOgcQBWggAZAEIANAFQieA5gNgCIgPAKQAlgBARAxQALAjgBAfQgDADAIAAQAbgVAkgUQBKgnAyAAQAMAAAPANQARAOAAANQAAAeiiA7QiUA1ggAAQgrAAgrgngAADgmQgHgRgUgPIBrgnQAqgOAUAAQA8AAAAAsQAAAMgDADQgCADgSAFQhKAThcAlQgFgZgIgNg");
	this.shape_90.setTransform(-57.8,-18.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8089DD").s().p("AAAFWQhOgOg7ggQAQgEANgdQAVgvAIgMQAKgMBKgYQBOgZAiAAQAcAAAJALQARAWAABVQABBahmAAQgaAAgsgJgAAbCXIgBABIhhArQBegsAEAAgAihjUQgKgXAAgVQABgdASgeQAUgfAVgEIBuC0QgggMgpAOQgnANgOAXQgRgqgRgmg");
	this.shape_91.setTransform(-39.2,-28);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#72EBEB").s().p("AAkBCQgmgMgEAAQgHABgUADQgZAEgIAFIgQiAIBCgSQAyAAAVAcQAWAeAGBOIAAAXIgvgOg");
	this.shape_92.setTransform(-42.1,-25.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#F0FF7A").s().p("AihD3QgbgHgKgGIgGgHQANgDAMgMQAWgWAAgqQAAgsgXgqQgNgYgYgmQAtgGAiAfQAPAPASAsQAUAwAAAhQAAAvgPAWQgMASgUAAQgGAAgXgFgABnAXQgRgCgdAHQgGAAgCgHIAAgPQAAgeBAAAQA8AAAbAeQASAVAAAXIgCATQhVgrgcgDgAAYjbQAAgTAagGQAegEAIgDQASgBAbASQAcARAGASQgPAJgRgGQgagJgMAAIhAARQgJgSAAgNg");
	this.shape_93.setTransform(-54.1,-15.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8089DD").s().p("AhYFsQgYgIgfgPQAmhOgvhpQAfALAKADQAOAEBDAAQAWAAASgHQAPgFAJgGIgGgDQgLgDgUgBIAOgEQAOgDAHAAQAiACBAAeQAJAEAIAHQAGAGAAADQAAC2iFAAQhBAAgrgOgAhMlMIBSgtQA6CTATBGIghgMQgOgEgSAAIg7ARQgQhWgThXg");
	this.shape_94.setTransform(-47.7,-25.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFCC99").s().p("AgDBtQgNATgKAXQgHANgNAAQgZAAgOgUQgQgVgBgqQAAgPALgOQARgVAhAAQAZAAAQAJQAPAIAGAAIAGgBIABABIABgGQAAgDgHgEQgLgIgWgHIgTgGQgMgDgGAAQgPAAgRAJQgXAOgPAbQgLgEgJgMQgJgNAAgNQAAgdARgSQATgXAqAAQAHAAAXAGIAlALIAGADQAHABABgFQgNgjhKgQQgjgIgLgFQgVgJAAgRQABgMAHgNQAQgYAiABQAUAEAfATQAhAUASAVQA4A8AUAdQA2BJAABBQAAAagMAPQgNAPgZAAQgQAAhVhBg");
	this.shape_95.setTransform(-86.8,-12);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#72EBEB").s().p("Ag6AoIg7hoQAAgNAigUQAVgLAagLQAhgFABABQgCAFAFAGQAKALAgAwIBLBtQgkgCgpAWQgjAUgUAcg");
	this.shape_96.setTransform(-30.5,-29.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFCC99").s().p("AA0CZQgegKAAgVQgCgFgEgFQgRAOgIAIIgFAEQgSAAgSgLQgWgMAAgUQAAgsAwgVQA7gSAagKIAEgCQgPgGgJAAQgdAAgjAJQg3ARgDAgQgegoAAgEQAAgbAXghQAhgvA4AAQAJAAAYAGIAQAEQgFgKgUgKQgSgJgHAAQgFAAhIAbQAigmATgNQASgOAzgDQA1gDAiBoQAXBGAAAwQAABkg0AAQgdAAgWgHgAiagBQARgsAagTQAAADgMAfQgMAeAAAJQAAADANAiQgVgPgLggg");
	this.shape_97.setTransform(-59,-0.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F0FF7A").s().p("Ah2FCQgXgHgLgIQAhgZAAhAQAAgqgKgwQgFgZgIgeIBNATQAXAgANA5QAJAnAAAaQAAA6gMANQgLAMgyAAQgGAAgTgHgAAAAeIgMgdQgGgPAsgcQApgYAgAAIAVgBQAHgBAaAqQg5ABgtAfIgvAiIAAAAQgCAAgCgKgAiWkCQgCgKAhgeQAhgeAZABQAJAAASAhQgLACgpAWQgsAYgJAOQgIgQgDgKg");
	this.shape_98.setTransform(-29.5,-14.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8089DD").s().p("AAVGRQACgGACgWIADgcQAAgFgLg1QgMg7gGgOIAPABQAOAAAkgIQAngJAKgHQgDgBgrAFQgZAAABgXQABgXAsgdQAsgeAfAAQAgAAAYBOQAWBLAAAdQAABCgxAhQgwAfhbAAgAjxlOIBBhDIB9CVQgVAAgkAhQgZAWgJANQgwhLgzhLg");
	this.shape_99.setTransform(-32.1,-24.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#8089DD").s().p("AAbF0QAAgggNgkQgQg0gpgqQAggQAsgwQAigkAkAAQAsAAAdAhQAXAZAGAbQAHAbgNAdQgMAegFAEQgBAAAAAAQgBABAAAAQgBgBAAAAQAAAAAAgBQgFAKgLAQIgRAYIgCACIAAABQgxAzhKAUQAGgTAAgRgAiTj8QgcgogIgEIgHABQgJgMgHgpQgHgoApgNQAogNAUANQALAGAiAnQAwA0AwBFQghgBgoAbQgiAWgLAWQgfgxgbgmg");
	this.shape_100.setTransform(-38.7,-24.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFCC99").s().p("AhRCDQgXgQAAgbQAAgHAOgZQASggAGgQIgBgCQgGABgTAUQgZAYgHAYQgLgJgQgqQAAgfAegWQAegQADgDIgGgIQgDgDgGAAQgBAAgpAZQgHgOAAgKQAAgkBQgdQBDgYAwAAQAVAAApArQAwAyAAAxQAAAxgzAfQgfAShLAjQAIAIAOABIAOgCQgPANgbAAQgvAAgYgRg");
	this.shape_101.setTransform(-60.6,13.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#72EBEB").s().p("AhCAhIguhXQAAgSAkgRQAigQAeAAQAXAAALAHQALAHAJAVIAYA4QAUArAbAvIgegJQgXgHgaACQgZACgTAOQgVAOgKAOQgCgHgXhCg");
	this.shape_102.setTransform(-32.6,-29.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#F0FF7A").s().p("AhXFWIgIgFQAVgGAOgdQAMgbAAgiQAAgygpgxQgug4hBgDIADgEQAegSAIgJQAHgIAcADQAdACAxBJQAvBJAAAmQAAA0gcAgQgWAZgZADQgIAAgFgDgAC+gEIgYgVQgHgEgWgFQgWgEgUAAQgVAAgUALQgUAMgMAGIgEgoQAAgQAvgRIAwgPQBEAAASBQQAFARgGAAQgDAAgFgEgAhQkSQAGgSAQgSQAggiAxAAIANABIAFABIAbApIgggBQgkAAgXALQgYAMgTAcQgOgOAAgJg");
	this.shape_103.setTransform(-38.3,-11.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8089DD").s().p("Ag8CAIhhgZQABgcgFgXQgFgXgHgVQgIgUAGgKIAMgRQAFgHAHAAQAOAABBAiQAnAUAnAXQgFgGhGhAQARgGAuglQAxgoAAgSQBNBWAcApQAeAsAAAkQAAApgwAUQgiANgrAAQhDAAgugNg");
	this.shape_104.setTransform(-2,-39.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F0FF7A").s().p("Ah7BRIAnAIIgUAXgAgpBKQgKgHgXgVQAsggAngXQAWgVAbhRQBCBBAAAIQAAAhgpAoQguAwg1AAQgMAAgNgJg");
	this.shape_105.setTransform(-11.1,-54.3);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFCC99").s().p("AAJB0QgRgcAAgrQAAgGAHgQIAJgXIAFgKQgeAKgLAaQgIATAAAlQghgHgIgHQgTgPAAgqQAAgHAOgaQAPgdAQgXIAFgJQgQgGgYAUQgfAagJAyQgHgIgJgbQgHgUAAAEQAAguAvgdQAtgcA5AEQA/AEAoAnQAvAuAABOQAAAQgIAWQgNAigXADIgMgXQgLAOgDAhQgCAVgXAAQgbAAgTgcgAiCBSQgGgLgJgaIgBgMIBCBCQgCACgSAAQgTAAgLgTg");
	this.shape_106.setTransform(-57,-17.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8089DD").s().p("AiVCZQACgTgLg1QgKg4gOgbIAYABQA1AAA2gMQBDgPAUgbQgCgBgfAFQgcADgFgHQAPgvArggQAlgbAaAAQAMAAAmAwQAqAzAAAfQAAAjgcAkQgaAggnASQgpAThqAgQhGAVgTAAQgNAAAKgJg");
	this.shape_107.setTransform(-11.9,-28.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#72EBEB").s().p("AhhAEQgRg3AsgPQAtgOAEgEIB8BHQhNAOgQBUIhrhRg");
	this.shape_108.setTransform(-21.1,-49.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F0FF7A").s().p("AibDHIACgBIALghIAGgXQAAgwgRgvQgTg2gdgHIAwgJQAigGAVAIQA/AZAACqQAAAKgSAJQgVALgbAAQgKAAgsgFgABJhjQAAgiAXggQAbgmAqAAQAGAAAKAFQAJAEAHAFIAFAGQgyATgZAZQgQAPgXAqQgPgPAAgCg");
	this.shape_109.setTransform(-25.4,-28.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#F0FF7A").s().p("AikDGQgegLgQgIQBWgJAqgRQAcgSAMgDIAEgCQgRAugQAPQgUASgqAAQgDAAgcgLgACoAjQgNgCgWAEQABgDAEggIAKgCQAYACAQAHQAVAKAAAQIACAMIgrgMgAgmiiQAGgWApgOQArgNAlAEIANAXQgOgEgJAAQgRAAgpAQQgsASgLACg");
	this.shape_110.setTransform(-46,-20.1);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#72EBEB").s().p("AAsBEQgmgIgMgIQAIgNAAgSQAAglgigNQgtgQgHgMQA0gRAEAAQAcAAAKAGQAKAGAIARQAnBbASAdIgpgHg");
	this.shape_111.setTransform(-35.7,-29);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFCC99").s().p("Ai2B9Qg2ghAAhEQAAg7AjgjQAbgaAkgEIANACQABgGABAKQgBARgJAPQgSAbgJAYIgBAGQAAACAFAAQAIAAAJgKQAKgJAFgMQADgOAFgIQAIgOAagLQBBgiAWgLQApgUAtAAIASABQgBACAOAGQieA5gNgCIgPAJQAlgBARAyQALAjgBAeQgDADAIAAQAIAAAAgCIABgHQAEgQAzgTQAcgLAugNQApgLAIAAQAMAAAPANQARAOAAANQABAWg0AYQgaAMhVAeIhnAkQg4ASgVAAQgoAAgkgWgAADglQgHgQgUgQIBrgmQAqgPAUAAQA8AAAAAtQAAAMgDADQgCADgSAEQhKAThcAkQgFgYgIgNg");
	this.shape_112.setTransform(-57.8,-18.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#8089DD").s().p("AgQBdQhPgOg7ggQAQgCATgkQAUgfgBgPQAAgHALgHIB8gmQAngMAbAAQAdAAAIAKQARAWAABRQAABahlAAQgaAAgsgJgAhDhAQAxgSAdgPQgNAJhXAkQAIgGAOgGg");
	this.shape_113.setTransform(-37.6,-3.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#72EBEB").s().p("AA3AQIgIgDIAPAEQAOAEAAABIgCAAgAhIANIgEgcQBIgSAXAeQgpAGgxAKg");
	this.shape_114.setTransform(-41.5,-20.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#F0FF7A").s().p("AihCFQgbgGgKgHIgGgHQANgDAMgMQAWgVAAgrQAAgqgXgqQgNgYgYgmQBLAEAjBFQAWApAAAxQAAAvgPAXQgMASgUAAQgGAAgXgGgABnhZQgRgBgdAGQgGAAgCgHIAAgPQAAggBAABQA8AAAbAfQASAVAAAXIgCATQhVgrgcgDg");
	this.shape_115.setTransform(-54.1,-4.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#8089DD").s().p("AhZBoQgTgHgjgSQAmhNgvhoQAfAMAKACQAOAEBDAAQAWAAASgGQAPgFAJgHIgGgCQgLgDgUgCIAOgEQAOgDAHAAQAiACBAAeQAJAFAIAHQAGAGAAACQAAC1iFAAQhLAAgigNg");
	this.shape_116.setTransform(-47.7,0.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFCC99").s().p("AgDBrQgNATgKAXQgHANgNAAQgZAAgOgUQgQgVgBgqQAAgPALgOQARgVAhAAQAZAAAQAJQAPAIAGAAIAGgBIABABIABgGQAAgKglgMQgUgFgUgEQgPAAgRAJQgXAOgPAbQgLgEgJgMQgJgNAAgNQAAgdARgSQATgXAqAAQAHAAAXAGIAlALIAGADQAHABABgFQghgnhEgQQgegGgIgFQgPgHAAgRQAAgoAugEQA0gGA+BCQAoAfAmA4QA0BJAABDQAAAagMAPQgNAPgZAAQgQAAhVhBg");
	this.shape_117.setTransform(-86.8,-11.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#72EBEB").s().p("AAAgoIAuBAIgcgDQguALgRAJg");
	this.shape_118.setTransform(-22.5,-25.4);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFCC99").s().p("ABtCgQgsgBgWgHQgWgGAAgVQgBgFgFgFQgRANgIAIIgFAEQgSAAgRgKQgWgNAAgTQAAgsAwgVQA7gSAagKIADgCQgPgHgJAAQgdAAgiAKQg4ARgCAgQgfgpAAgDQAAgbAYgiQAgguA4AAQAJAAAYAGIARADQgFgJgUgKQgTgKgHAAQgFAAhIAbQAigpAJgHQAdgWAvAAQA4AAAiBnQAYBHgBBJQgBBIgqAAIgCAAgAiYgFQAEgaAlgYQgEAKgLARQgKASAAAVQAAAEAOAhQgjgaAFgbg");
	this.shape_119.setTransform(-59,-0.9);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#F0FF7A").s().p("AhzDAQgWgHgLgIQAhgaAAg/QAAgqgKguQgFgagIgdIBMATQAYAgANA3QAJAnAAAaQAAA6gMANQgLALgzAAQgFAAgUgGgAgQiRQAIgCASgLQArgbAvgMQAMACALAGQAWAMAFAVQg0AKgeARQgXANgkAeg");
	this.shape_120.setTransform(-29.9,-1.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#8089DD").s().p("AhhCbQACgHACgVIADgdQAAgEgLg1QgMg5gIgOIARAAQAOAAAkgIQAngJAKgHQgDgBgrAFQgZAAAAgiIAugkQAPgNAFgBIAbgNQATgIAcAAQALAAAYBOQAWBMAAAaQAABDgxAgQgwAghZAAg");
	this.shape_121.setTransform(-20.1,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},22).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},2).to({state:[]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118}]},1).wait(1));

	// Layer 1
	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AiWF5QgFgIgfhaIAAgmIgEgUQgDgNAAgGQAAghAZgfQAfgkA4gLIA4gGQAjgEAhgMQgbgmhzh+QiKiXhLg/IAGgEIAHgDIAKACIAshMQgMgPADgHQAJgEAPALQAjAbArAfQCEBcAdAcQDBCsARARQBeBeAABDQAAA+g2A2QgbAcgiAUQgdAYgVAWQgUAYg4AGQg4AGguAXQgvAWgHAAQgqAAgYglg");
	this.shape_122.setTransform(-29.5,-21.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("ACyEWQhLglg5gUQgSgGgigfQgWgSg0gwQgOgNgfgYQgYgXgDgfIAKgmQjIicgEgIIAKgKQABABAHgBIAtheIgEAAQAAgHABgGQABgGABgBIAHgBQAIAADaCfQAMgpAfgUQAVgPAcAAQA/AAAgAnQAVAaAFAkQAFAkAiApQAuAxAaAjQBTBegKBTQgKBPhMAAQgjAAgvgXg");
	this.shape_123.setTransform(-27.6,-34.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhSDfQi7hVh6hnQAMgFAHgNQAPgVAchDQgKgGgFgHIAKgNICDBHQCKBIBKAZIgDgDQgFgJgOgGIgfgLQgrgQgNgrQgQAAgTgNQgXgRAAgcQAAgIAOgVQAXgfADgIQgFgCgJgMQgJgMAAgHQAAgOARgZQAXggAdAIIgFgJQgFgIAAgHQAAgRAOgOQATgUAjAAQBpAAAsBVQAMAZAJAlQAGAgACACQBGBKAEAHQAFAHAAAjQAAAFAXAWQAkAkAQASQBJBUAAA+QAAAmgbAaQgkAihOAAQiEAAjIhcg");
	this.shape_124.setTransform(-21,-55.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AC6DwQgogTgjABQgdAAgWgPIgkgjQgMgMhMglQglgSgMgaQgHgRgQgwIjbh2QgEgEgDgHQACgLAMAAIAHhuQgGgEAAgSIAHgBQArAOBLAlQBJAjA1AgQgJhpBeAAQAeAAAVAYQAWAZAcApQAbApA4AqIAaAbQA4AnAlAkQBHBHAABYQAAAigOARQgTAVgxAAQg2AAgpgUg");
	this.shape_125.setTransform(-24.5,-40.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AB7F8QgRgHggAAIglAFQghACgSgMQgggUgIgfIgIgaQgrAAgqg2Qgtg6AAhGQAAgbARgtQAEgOAQgGQAPgEABgBQAKgMANgcQAPggALgPQh0hUhTgyQgugcAAgDQAAgKAFABIALAAIAgh0QgDgDAAgHQgBgGABgEIAJgBIAHABIgBAAQFWCiCZClQB0B6AAB3QAABQhdBFQgfAXgkARQgfAPgKAAIgMgHg");
	this.shape_126.setTransform(-27.1,-27.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgjG4QgrgUgLgCQgtgMgXgfQgWgcAAgnQABgGAIgRIAMgWQACgFAGgjQAGghAEgIQAXgwAhgYQAZgSAQABIA4AJQAbgNAmAEQAKABAEgEQAEgGAAgTQAAg/iuijQhbhViFhrQAIgHAIgBQAEABAbguIAbgvQgCgCAlAAQAFAAAQAOIAXAUIBoBWIArAlQCxCeBLCCQA1BYAABGQAAAagNAnIgQApQgHATgHAbQgFAZgCAEQgKAVgnAQQgVAJgVAEIg3AoQgyAlgoAAQgRAAgjgQg");
	this.shape_127.setTransform(-29.2,-19.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("Aj0FIQgagdgEAAQgLAAgKACIgaAHQgPAEghgHQgtgdAAgqQAAgFAFgMQAEgNAAgFQAAgFgGgRQgGgQAAgFQAAhBA1gqQAvgnA7AAQAsAAAjATQAcATAGACQAigdBMALQBBAVA6gFQA7gFAPgDQgXgviThhQiahmhogbQAKgsABgLIBHgtQgEgDAAgHQgBgHACgDQgBgBAZACQAZADClBTQCnBTBeA+QByBcAOBAQAIAmgaAuQgaAuhFAeQhGAehCANQhCAOgtAeQgnAZg5AAQgNAAgXgDQgVgEgUAPIgiAaQgOAMgaACIgEAAQgYAAgZgbg");
	this.shape_128.setTransform(-32.8,-36.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AhoCfQlJhgAAgaQAAgFAGgBQAEgBAAgFQAAgGgDgDIgDgGIgEgTIgCgXQAAgKANgZQAOgaAAgOQAAgFgCgHQgCgGABgCIAJgBICkAoQAEg3BOg2QBMg1BHgBIgOgBIA5AAQBFAGATADQATAEAMAHIANAHQAaANApAbQApAaBWBxQAdApARAYQAeAwAAAyQAAA3gwApQgvAog8AAQhBAAlAheg");
	this.shape_129.setTransform(-16.2,-54.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AqIJtQgDgCAAgGQAAgGAEgCIAJgGIgBh4QgJgHgCgEQBZgWCEg5QCghEBCg5QBShHBohtQBhhoAPgcQAGgMAAgQQgBgXAOgtQAGgVATgwIATgwQBkjFBxhgQBPhDA6AAQA7AAAqArQApAqACAtQABAsgQBAQgRBAgPAWIgdAuQgPAWgIAKQgmAygOAaQgOAagQARQgPASgeAWQgfAVgSAYIhJBbQglAxggAiIhPBTQhOBLhZA/QkXDBljAxg");
	this.shape_130.setTransform(1.6,-104);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AiHHSIgHADQgFAEgGAAQglAAgegWIgSgRQgSgRgHAAQgUABgPgVQgOgTAAgVQAAhfBJhMQBIhNA8gZQA8gYAzgIQA1gJAagPIA+gnQjfjHh7hIIhIgoQgggRgbgYIACgJIAOAAIAshYIgDgDIgBgGIALgLQGqC9B7CjQBYB1hGBpQgHAQhRA0QhSAzgHAIQgHAHgcAjQgPAUgNAHQgEAEgkAMQgdARAHAcQAUgIAKAPQAFAHABAKQAAAogkAeQglAig9ACg");
	this.shape_131.setTransform(-28.3,-15.8);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("ABIE1QgRgGgIgIQgPgRgOgHIgRgIQgMgGgIgVQgHgOAAgHQAYhKAPgbQhLAEiVh6QiEhughg/IAFgHQADgDAKACQAehugCAAIgBgIIAGgJQABgCADAAQAwAvBBAwQCABfBSAAQA5gBA/gsQA2gpAxANQBMAGAtBDQAfAvAAAiQAABKgfBEQgFALhABvQgMAVgOALQgFAEguAcQgZAQgPgGQgHgDgIgGQgBAAgWAOQgVAPgNAAQgDAAgNgGg");
	this.shape_132.setTransform(-20.1,-31.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AjgG6QgygXhFgwQhEgxgtgzQgtg0AAgdQAAgIACgBIAPAAIAUhdQgFgGgEgKIADgKIAKAAQBbBoA+AvQBHA2A6gBQAsAAAugeQAvghAbgzQBBiBAPggQATgrAAgdIgNgwQAAgjAihRIAqhhQAOgkAlglQA0gzA6AAQBRAAA7A6QA1A0AAA3QAAARgTAlQgUAngPAIQgIAEgVAZQgTAXgCAFQgEAOgIARQgPAhgUATQgFAFgNADQgEABgGAeQgCAJgLAXQgMAbgIAIQgQAIgUAQQgTAQgqBnQgqBnhYBYQhVBXhrAAQgpAAg2gZg");
	this.shape_133.setTransform(-8.7,-68.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AlXJZQiAgig8guQAagQAHgVIAihmIgHgFQgCgDAAgGQAAgGADgCIAHgBQAtAgAyARQAxARBHAJQBIAIA0gUQA0gUAgg7QBJiMAqhhQAdhDAAgJQAAgCgKgQQAAgkARgmIARglQAAgFgHgeQgHgeALgVQAMgVAZgSQAZgTASgmQASgmAOhcQAIgzALhiQAEgbAYgUQAXgUAbABQBFABAAB2QAAAWgOAxIgUBHQAjgDA9ApQBDAsAAAsQAAAkgwA1Qg8BDgTArQggBTgrA8QgbAmg5BvQg7BzgoA6QiLDLjIAAQgwAAhngbg");
	this.shape_134.setTransform(-8.2,-97.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Al9HKQhDg/hHhgQAJgJAIgCQAAgnAGgWQACgHAYgdIAYgcQAAgEgEgDQgEgCAAgFQAAgGAFgCIAHgCQBDBJA1AuQBjBVBWAAQBEAAA8hEQA/hIApiIIgEgBQgEghAPgnIASgyIgJgfQgKgfAAgHQAAgdAYgXQAYgXAeAAQAGgBADgCIAMgGQgIAAACgOIAIgeIAIgfIAGgeQAIgvAHhaQAGhIASgcQAOgZAbAAQA1AAAWA9QAHATADAXIABAWQAAAJgDAOIgbBuQAYgJAbAOQAUAKARATQAFAGAEAAQAHAAAbAVQAlAeAAAmQgVBFgyAsQgPAOgdA7QgNAkgOAgQgaA+gdAPQgUAKg3BmQg2BngGAKQhDBjhJA2QhMA6hMgBQiVAAiAh3g");
	this.shape_135.setTransform(-7.9,-79.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AkWHQQgygigfglIhth6QhFhOAAgNQAAgIAFAAQAFAAAFgfQAMhOAagLQAEgCANAAQAGgBABgGIgCgEQACgDAIgNIAqArIBTBWQA0A1BbBLQBaBLAMAAQAUAAASgPQANgMAfglQAIgOAshIQAthPAAgKQAAgFgDgCQgEgBAAgTQAAgTACgLQACgLARgeQARgcgHgyQgIgyArgXQArgXARgkQARgkAiiCQAiiBAGgOQAQgdAcgBQASAAAXAWQAhAgAAA6QABAWgTA5IgZBKQARABAcAQQAaAPAOANQAWAJARALQAgAUAAAsQAAAjgcAoQgYAjgUAIIgeALIgGATQgFAJgRAVQgOASAAAFQAAASgYAsQgTAlgUAbIgfARQgaAPgWAvQgwBphRBIQhfBWhjgBQhtABhihEg");
	this.shape_136.setTransform(-9,-62.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AjFF4QgTgRhXhlQgngthDiGQhEiGgBgjQABgKAPgBIAFguQACgLANgjQAMgiABAAQA6AAAeAxIAdBFQBJCBANARQAxBIAXAgQAJAMAOARIAfAkIATAbQAMASAGAAQAKAAA1gmQA3gnAAgPQAAgDgNgTQAAglAWghQAXghAAgCIgDgaQgDgSAQggQARgfAegdQAegdAPgSQAWgaAyiuQAFgTANgZQASggAPgGQAggNAYAjQAXAhAAAqQAABMgzBMQApgBASATIAMAXIAmAjQAdAdAAAUQAAAngNAUQgIAMgcATQhHAygsBWQgDAGgVAfQgVAfgDACQgGAGgFgCIgLgBQgPACgkA3Qg1BQhOAkQg2AZg1AAQhQAAhIg+g");
	this.shape_137.setTransform(-12.8,-35.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AlxC/QhAiDAAjFQAAguACgJQADgOANgGQAQgHAEghQAFgnAHgKQARgXAhgJIgCgLIABAAIAHgBQAIAvANBiQAOBwANA5QAqC1BlAAQAJAAAMgEQARgGAHgKQARgaAagRQASgMAAgLQAAgegWgiQgWgkAAgEQAAg2ArAAQAEAAAjAXQAkAVAJAHQAhhMAwiBQAlhdAYgJQAdgLAYAlQAVAggCAcIgCAIQAlgbAKAAQApAAAVATQASAQAAAbQAAApghA6QgkA9grAaIgRALQASgKAmgcQAkgWAlAAQASAAAKAMQAOAOAAAgQAAAcglAlQgpArhJAfQhIAegaAlQgRAkgIALQgSAZgfAQQgPAIgwAQQgXAIhIAjQgnATgtAAQifAAhPijg");
	this.shape_138.setTransform(-15.1,-25.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AjrFSQgdgWgXgfIACADQgTgVgNggIgNgbIAGALQgQgrgJg8QgOhlABhAQgBhOALhgIAPhsQACgTAPgOQAUgRAkAAQAhAAALBYQACAVAKCuQAGCBAUA/QAaBYA+AAIAOgBIAIgCIgSgBQgXgJgKgLQgOgPAAgbQgBgbAUgRQAWgTArAAQAlAAAHgGQAJgJAAgqQAAhIgEgzIgGgsQAAgeARgOQANgLAQAAQAdAAARASQAYAYgBAzQgHBFAAAKQAAAQACAGQADAHAFAFQAighANhFQAFgYAJgIQAMgNAfAAQAfAAAPAjQAQAjgQAnQgXA0gPAXQgMAQgOAKIAFAFIACACIAGABQAMAAAngYQAogXAGAAQAcAAAPAMQARANAAAZQAAAUgWAOIgyAZQhVAnghBIIgYA0QgQAcgXALQhSAmgdAKQgyATgpAAQhWAAg6gsg");
	this.shape_139.setTransform(-24,-21.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AlRCmQhCiYAAiiIAAgJQAAABABAAQAAABAAAAQABAAAAABQAAAAABAAQAFgBALhCQAIgzAYggIAsgqQgHgDgCgJIADgHQADgDAGAAQAiAAAQA4QANAuAOCFQANCIA1BNQApA7AnAAQAJAAAOgKIgXhOQgFgVAAgkQAAgqAUgVQASgSAcAAQALAAAKAHQAOAHAKAPQAyg7AvgkQA+gvAtAAQAzAAgNA5QARgNAngCQAaAAAMARQALAQAAAiQgKAagMANQAagGAOAOQAPAOAAAjQAAATgWAPQhBAugcAYQhBAtgHAHQgJAJgIATQgHASgOASQgNASghAaQggAZgTAAQgFAAgjAbQgnAdgPAHQgIADgVAEQgdAFgSAAQihAAhYjLg");
	this.shape_140.setTransform(-18.9,-24.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AlqChQhTiigBjNQABgKADAFQAGgEAHgQQAPgdAdhPIABgGQABgEAFgDQAiAKAeBWIAnCIQBOD5BUAAQAQAAAggXQAjgYgBgTQAAgQgOhEQgQhGAAgUQAAglAVgSQARgPAbAAQATAAAVAOQARAMADALQAXgYA3gMQAsgLAsAAQAYAAAPANIAKAMQAbAABFgHQA4AFABA8QAAADgMANQgLANgFAEQAUAMALAWQAMAVAAAUQgBAbgNADQgNAEhPAOQhQAOgOAeQgEAhgGANQgzBggsAAQgHAAh2BSQgRAMgfALQgnAOgeAAQikAAhijAg");
	this.shape_141.setTransform(-11.3,-26.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("Aj8DiQgYgagog5QgigwgQgcIgthLQgeg4geg+IgVgpQgKgSAAgGIgCgJQgBgCAGAAIAOAAIBKhpQgBgIABgDIAIgJQAMAPArBRQA4BrAcAxQB6DPBMAAQAuAAALhLIAGhAQADgqAEgVQAThDANh4QARhWA/AAQAtAAAIAnQAHAjgVAbQB9gHBwA8QBqA3AAA6QAAACgPAdIAWA3QAAATgOAOQgMALgNAAIgKgBIgCgBQAFAyg4AAQgrAAgzgWQgagMgSgMQgRAygUAOQgJAGgZAAQgSABgHAOQgTAmgHAKQg6BTgQARQg2A3hCAAQhgAAhph2g");
	this.shape_142.setTransform(-8,-25.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AiNDcQhSiLh+lRQAJgGAHgBQAEABAgglQAhglAAgHIAAgDQACgEAJgKQAFADAbAzQAoBOApBGIAcgzQATgaAbAAQAlAAAQASQALANAAATIgBAMIgBAEQAZgQBHgHQAjgEAdAAQAYAAAeAHQAJACAJAGQAMAIAHADQALACAPgBQANABAVAJQAhAOAAAnIgOAiQAAAGAJAKQAKAMAAACQAFAMAAAIQAAAZglASQgWAMiAArQAKAugEASQgMA4gDAmQgHA+gkAhQgkAgg9AAQhIAAhTiNg");
	this.shape_143.setTransform(-24.6,-29);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("ABFFdQhcgaglgJIgWgFIg7gTQgugPghgSQhhg1AAhYQAAhHAxgrQAkgdAcAAQAaAAALAaQCEg4AjgNIgPgjQgNgcgZg/IAJgDQAGgCAAgGQAAgEgEgVQgEgTAAgFQAAgVAJgUQAKgVAQgOIARgWIABgHIALgLQBrCeBDB6QB+DjAACEQAAAygfAcQgfAcg5AAQgsAAhWgYg");
	this.shape_144.setTransform(-51.7,-28);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("ABsF4QhDgVgIAAIgNAHQgMAHgYAAQgQAAgngSQgmgSAAgIIgogVQgrgWgIgGQgEANgIAKQgKAOgOAAQgnAAgSgRQgTgSgFgoQgDgXgYgYQgXgXAAgTQAAghATgZQAcgkA9ACQg3gHgSgJQgegOAAggQAAgTAXgSQAbgWAqAAQAlAABDBAQA/BCAHAEQAOAIApAIQAiAHAMAPQAVAWAwALQAiAIAhAAIAQgBIAIgCQgFhxgijAQgShhgQhOIAKgLQAJABADAHIBTgtIACgHIAKgHQAwBsAlBtQBKDUAACnQAABdglAwQgqA4hcAAQgWAAhDgVg");
	this.shape_145.setTransform(-66.9,-24.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgVGlQgbgQgHgBIgiAAQgfABgVgPQgVgPgGAAQgGAAgNAFQgMAEgGAAQgdAAgRgVQgTgYgCgxQggAIgYgTQgZgVAAgnQAAgjBPhFQBShJA4AAQAfAAAgAtQAjAvAnALQApALAUALQAUALAnADQgihThti9Qheijg1hOIgCAAIAAgHQAAgKAAAEIAJgDQAKAAAIgHQANgKAtgvQAFgTAEAAQAGAAABABIAAAAQECFPAiAyQCEC/AAB0QAAA9goAoQgmAng9AFQhQAHhPARIgZABQghAAgTgLg");
	this.shape_146.setTransform(-41.1,-23.1);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AjQHVQgTgMghgkIgdgfQgSgZgBgcQABgLAFgKQAHgJAAgFQgBgFgGgTIgHgTQAAgNAPgUQAOgTAPgLQAbgTArgMIAlgJIAugkQAigbAfAEQAgAEAPALQARALANAAQANAAASgQQAYgUAAgpQAAg1glhLQgPgggggyQggg3gshMIgjg/QgHAAAAgKIABgSQAAgsAdgXQAKgIAsgSQAMgFALAGQANAJAiAmQBEBRAsBAQA4BRAxBnQAgBEAFAMQATA0AABGQAAB6hQBKQgpAnhBAYQgPAGglAlQgeAdgjAAQgDAAgDgIQgHgIgYAAIgVALQgVALgFACQAHASgbAOQgXAMgcAAQgkAAgYgOg");
	this.shape_147.setTransform(-46.9,-18);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAgExIhpgfQALgpAAgNQAAgngUgdQgQgXhGhTIA/AZQgDgEg1gZQgkgRgTgqQgRAAgSgNQgXgRAAgcQAAgIAOgVQAWgfAEgIQgFgCgJgMQgKgMAAgHQAAgOASgZQAXggAdAIIgGgJQgEgIAAgHQAAgRAOgOQASgUAjAAQBsAAApBVQANAZAIAlQAHAgABACQBHBKAEAHQAFAHAAAjQAAAFAXAWQAkAkAPASQBKBUAAA+QAAApghAbQgmAehCAAQg+AAgsgKg");
	this.shape_148.setTransform(-9.4,-55.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AjyEHQgbgdgEAAQgLAAgaAIQgaAIgGAAIgkgPQgigYAAgqQgBgFAFgMQAEgNAAgFQAAgFgGgRQgFgQgBgFQAAg7AzgiQAvghBBAAQA1AAAXALQAXALAJAAQAQAAAagIQAZgIAPAAQAEAAAkAKQAiAJAGAAQCDgKAPgDQgLgNgIgTQgZgdh0hUQAegcAlgtIAogyQCUBNBMBCQBSBJAABAQAAA0gzAyQg4A3hhATQgNADg9AQQhBARgKAEQgMAGgXARQgbAOgoAAQgbAAgTgCQgLAAgeAWQgSAOgIANQgCADgRAAQgtAAgagdg");
	this.shape_149.setTransform(-33,-30.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AA/DnQhngggqgIQgUgDgqgRQgwgVgkgXQgzghgMgNQgageAAgzQAAhGAxgrQAkgfAcAAQAaAAALAaQA4ggBBgVQAtgOAAgGQAAgFBMgbIBcggQBIBsAqB5QAlBoAABIQAAAygfAcQgfAcg5AAQg4AAhQgZg");
	this.shape_150.setTransform(-51.7,-16.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("ABrDSQhEgVgIAAIgNAHQgMAHgXAAQgRAAgmgSQgngSAAgIIgogVQgqgWgJgGQgEANgHAKQgLAOgOAAQgmAAgSgRQgSgRgHgpQgDgcgZgbQgWgXABgJQAAghASgZQAcgkA+ACQg4gHgSgJQgegOAAgiQAAgTAXgSQAbgWAqAAQAmAABCBBQA/BDAIAEQANAIApAIQAiAHAMAPQAVAWAwALQAiAIAhAAIAXgBQgBgVgKhqQCfAlAbALQAhANAAAeQAACQgXA1QgjBWh0AAQgWAAhDgVg");
	this.shape_151.setTransform(-66.7,-8.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAeD4IhpgaQhegXgJgEIgJAEQgMAEgGAAQgdAAgRgVQgTgYgCgxQggAIgYgTQgZgVAAgnQAAgGAUgcQAXgdA4g6QA5g6AvgGQAwgFAgA1QAgA2AZAEQAyAIAYARQAVAPAnABIgCgGIgPgiQgHgOAAgHQAAgHASgcIBaiXQBEBaAlBPQAsBfAABAQAAA+gnAoQgmAng+AEIhYANQhCAJgWAAIgJAAg");
	this.shape_152.setTransform(-41.1,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_122}]},22).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[]},1).to({state:[{t:this.shape_128}]},2).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[]},1).to({state:[{t:this.shape_146}]},2).to({state:[]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ23RARML002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AgoCKQgqgRAAgPQAAgGAFgHIAKgKQAbALAOAAQAJAAAIgCQhDg0gWgUQgggaAAgMQABgkArgwQAsgyAiAAQAsAAAyA4QAsAxABAcIgBAIIgDACIgEAFQAAgLgBgDQgCgFgJgGIgKAIQADAHADASQAEAUAAAIQAAAlgSAKIgGAEIgHACQABgGAAgKIgCgRQgSAAAAgCIgFgDQAJAMAAAPQAAAogWAVQgRASgYAAQgUgGgWgJg");
	this.shape.setTransform(36.5,23.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AgXAkQgbgbgcgKIBYhFQAiAIASAWQARAWAAAFQAAAFgLAJIhEBGQAAgKgXgZg");
	this.shape_1.setTransform(20,-25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AgrE+QgfgaAAgcQAAg/A8hOQA8hQA8AAQAjAAAXAfQARAZAAAUQgCAAgHAKQgGgIgUgKQgRgIgDAAQgjAAg3A0Qg7A6AAA6QAAAUAIALQAHAKAOAHQACAUgRAAQgJAAgZgVgAhThCQgGgVgcgcQgjgigcAQQARgRAVgSQAVgTADAAQAVAAAbAeQAZAbAAAOQAAAGgPASIgWAagAAnkFQgXgYgOgEQAIgFAVgTQAVgRAOgFQAqgQAKBSIg5AxQADgOgZgbg");
	this.shape_2.setTransform(23,-5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AjhDYQgtg0AAgoQAAgxAZgeQAMgPANgEQAqgBAVALQAUALALAcQAMAdAbAcQARASA8A6Qg8A6gSAcQgJAPgEAPQhRg5grgzgABoi0QgNgagSgJQAbgQCdhcQAZAMgVA5QAAgBgnAdIhmBMIgIAGQADgNgLgXg");
	this.shape_3.setTransform(25.2,-19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AgMAhQgzgggfAOQA5hLAYgMQAWgMAvApQASARAIALQAFAGAHAPIg8BGQgFgPgpgcg");
	this.shape_4.setTransform(26.4,-25.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC99").s().p("AgjCbQgOgJgEgEQAHAAADgCQACgCABgFIAAgEQgxgMgpg7Qgrg7AAg+QAAgfAegeQAmgmA+AAQA2AABTBIQBQBFAAAmQAAAUgEAJIgIAOQgFgSgUgXQgOgQgIgEIgDABIgBAIQACAGAPAYQANAaAAARQAAAZgUAVQgRASgMAAIgWgDQAKglgFgWQgFgWgUgLIgFAMIAEARQAEATAAAGQAAAbgMAOQgNAQgaACIgEAAQgVAAgMgIg");
	this.shape_5.setTransform(27.5,17.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0FF7A").s().p("Ai3DFQgGgYAlgeQAjgeAzgRQA4gTAoAKQAxALAPAwIgCgBQgIgDgngJIgngJQgpAAgnATQg7AcgKA9gAgCgJQgtgQgTAAQgIAAgjAJQAGhGBUANQAfAFAZARQAaAQAAASQAAAKgQAQQgLgHgmgLgAB2ipQghgfgcgCIAmgcQAbgEAYAVQAXAWAQAqIggAbQgGgUgdgbg");
	this.shape_6.setTransform(22.2,-13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8089DD").s().p("AjhCOQAOgRAXAAQAagBAeAJQAVAGAuARQgJASgBANQAAAIgBABQgLgFgtgCQgOgBguASQgqAPgOAHQADg9AUgZgABChWQgQgPgigSICxhtQAgAWAOAbQAKAUAAAbQAAAjgZAHIgMgLQgEAAgXAPIhVA1QgKgegYgXg");
	this.shape_7.setTransform(32.7,-26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC99").s().p("AhWBtQhIg0AAhpQAAgqAagcQAdgfA1gBQAsABBEAfQBYAnAAAzIAAAJIgDAGQghgigTgRQghgdgfABQgGgBgCACIgDADIgDAEQBUAhAjA2QAXAkAAAnQAAAegeAAQgEAAgqgTQgxgUgggSIgHALQAEAGAYARQAlAYA0AVQgNAIgSAGQgSAGgLAAQhSAAg4gpg");
	this.shape_8.setTransform(13.3,9.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#72EBEB").s().p("AgPAoQglgnglADQAxg0ATgXQAUgYANAAQAPAAAeAhQAfAgACANIhJBxQgBgXgfghg");
	this.shape_9.setTransform(37.2,-20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F0FF7A").s().p("Aj8DoQgcgoAAhNQAAg9AngpQAkgjAbANQgcAAgWAlQgXAmAAAwQAAAwAaAqQAPAYAgArIAPALQg9gJgcgpgABpg2QgTgNg9gSQAEgKAQgLQAOgLAIAAQAdAAAeAVQAiAXAAAhQAAAPgQAaQgOgmgZgRgADljeQgigZgSgDIAEgLQAFgQAMgDQALgEAhASQAhARAGAtQgBAKgDAEIgHAHQgIgPghgYg");
	this.shape_10.setTransform(20.3,-6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8089DD").s().p("AioDeIgYgMIgbgMQALgFAbgZQAdgXAbAAQAwAAAfAoQAQAVAEALQADAdg4AfIhZg3gAB1g0QgZgTgrgQQAbgiAfg6QAhg7ADgXQAygdAOAdQAOAdgBAkQgCAlgDAKQgDANgNAdQgBgFAKgaQALgagLAKQgMAJgNAbQgOAbgdBHQgBgOgWgSg");
	this.shape_11.setTransform(35.6,-27.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8089DD").s().p("Ah4B3IgGgBQANgfAJg6QAKg8gKgTQAWAKBFgmQAhgUAggVQAfgCAYArQAVAjgBAWQAAAkhnA3QhdAzgmAAIgNgCg");
	this.shape_12.setTransform(27.6,7.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72EBEB").s().p("AgVAiQgRgSgdACQAdg4AOguQAEgQANAAQAgAAAYATQATAPAAAMQAAAlgYA6IgbA5IgCADQgUgygQgRg");
	this.shape_13.setTransform(44.5,-14.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F0FF7A").s().p("Aj8ELQAEgFAZgyQAagzADgEQAFgFAlgWQAXgOAAgiIgBgSQAAgKAAgBQAJAvgBAOQAABggcApQgPAXgQAAQgMAAg7gHgABxAQQgdgegUgEQAYgrAJAAQAeAAAZApQAUAgAAAbQAAAGgGAJIgNATIgHAIQgBgdgggkgADOjOQgjgUgRAHQAHgbAHgPQAGgMADAAQAcAAAbAcQAVAWAAAHQAAAHgHAfQgMgNgcgPg");
	this.shape_14.setTransform(27.4,-4.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC99").s().p("Ah1BwQgigmAAhDQAAg2AtgxQAvg0A7AAQAkAAAbATQAaAUADAYQACAagdASQghATg/AAIgTgBIAIAJQAIALAiAAQAfAAAPgGIArgVIAHAVIAFANQAAAcgcAXQggAZgvAAQgaAAgNgFIgZgJIAAAGQALAKAWAIQAZAJAcgBQAIAAAQgDQASgDAEgCQgGAjgjAPQgVAJggAAQg0AAghglgAB0g0QgGg0gNgVIAIAEQAbAJAMAdQAIAVAAAYQAAALgFAJQgGALgJAGQgLgFgFgug");
	this.shape_15.setTransform(-3.2,7.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_16.setTransform(119.5,-73.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8089DD").s().p("AklEcQAMgYAWgjQARghAAg0QAAgYgEgeQgEgfgFgKQAPAAAmgCIAqgDQAOAAAdBEQAeBFAAAjIADAeQABAQgIAIQgXAVh9AAIg2gDgADihpQgRgkgwgYQAEgEAiguQAog1AJgSQAuAsAAAyQAAAhgIAeIgSA8IgBgDQgBgBgHAAQgFAAgDACQgFAEgFAPQgFgNgKgog");
	this.shape_17.setTransform(27.4,-25.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCC99").s().p("AhSCbQgtgtAAhnQAAhsAkguQAhgqBCAGQAdACAYAuIATAvQgLgFgsgKQgXAAgMAHQgOAGAAAJQAAAGABABIACAAQAmgIAKAAQAYAAAaAUQAdAWAAAZQAAAFACAIQACAGAAAFQAAAJgIAUQgJAUgHAJQgOgWgbgIQgOgEgMAAQgCAAgPALIAFALQAbgIAdAeQAcAeAAAkQAAAQgKALQgKAMgQACIABgMQgBgFgGAAIgcAJIgbAJQgtAAgfgegABug7QgJgMgCgKIgNhKQAgASAIAtQAGAjgJAUQgDgJgKgNg");
	this.shape_18.setTransform(-14.4,-19.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F0FF7A").s().p("AlEDTQgbgLgCgSIAsAJQAWADAeAAQAiAAAWgQQAYgSAAgiIgFgZIgJgiQAHgCALgSQAPgYAAgYQAAgKAFgQIACAEQAQAQAAA9QAACoh0AAQgtAAgcgLgAAsAzQgEgIgyhOQAIgBA+gVQAYAAAdA+QAcA/AAAtQAAAjgNAKQgIAGhAAXQAGhcgSgsgAEuh6QgegzgigJQATgTASgUQAuAeADAEQALARATBNQAAAKgfAtQAJghgegzg");
	this.shape_19.setTransform(14.6,-18.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#72EBEB").s().p("Ag3ANQgNgbgugwQC/ifAmCyQgdBlh3BQQgGhXgQgmg");
	this.shape_20.setTransform(34.2,-18.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#72EBEB").s().p("AgsBOQAAgigIgcQgNgrgggUQCchJgJAAQAQAAASAsQATAvgGAnQgCAfgXAXQgXAXhmAiQAJgaAAgRg");
	this.shape_21.setTransform(29.5,-29.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCC99").s().p("AAADhQgDgHgHgIIgQALQgDABgGAAQgrAAgYhBQgQgrgBgdQABhVAwhsQA0h0AyAAQAkAAAZArQAbAtAABCQgBASgHAxIgCADQAEgbg2gwQg3gxgfAEIgKAGIgDAFIgBAAQBKAqAgAjQAdAgAAAqQAAAPgFASQgGATgPAeQgCglgug4Qgtg3gdADQgDAAgCgCQgBAAAAAGQgBAOAGADIARAJQAjASAiA5QAGAKAHAeQAHAbAAAGQAAAggSAVQgOAPgQAAIgEAAg");
	this.shape_22.setTransform(-5.5,-59.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F0FF7A").s().p("AAiDJQAAgfgGgcQgHgkgPgOQAGAAAzgMQASAAAPA2QAMAtAAAaQAAAlgTAOQgjAYgqAAQAKgTAMg8gAEiA+QgLgsgggZIApgbQAiALALAcQAGAPAAAbIgCAiIgCAhIgmAeQgCg7gFgXgAkjA+QgkgngJhKQgHg9AVg1QAFgMA3hmIgbBWQgWBLAAAYQAABHAcAtQAcAuAqACIALAAQgJACgKAKQgIAJgGgBQgdAAgbgcg");
	this.shape_23.setTransform(11.5,-42.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8089DD").s().p("AlrCEQg8hJAAhsIACggQAQA7AeAcQAaAbAfAAQAPAAApgWQApgUAYAAQA1AJA1APQANAJAJAhQAJAgAAAgQAAA7gdAUQgXAQg3AAQh/AAhFhUgAEWhDQgQgxgggKQAEgBAZgVIAugmQAigdACAAQANAAAiAOQAjAPgIArQgIArAOgLQAOgLgtA3QgOABglAiIg4AvQAIgmgNgsg");
	this.shape_24.setTransform(19.1,-34.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8089DD").s().p("AjiChQhAgSgngmQgmgngHgPQgKgXgFgWIgEgPQgJAAAAhKQAAgKAIglQAGghADgJQABAdBFAiQBFAgAKgSQAAAxAaAgQAZAeAuAOQAtAOAGAeQAFAegIAaQgJAbgGAFQgHAEgYAGQgGABgJAAQgaAAgwgMgAEPBUQADgMAAgGQAAgogTgaQgMgSgNgHIAhgNQAigPAWgLQAdgPAdAcQAdAbgDAUQgDASgMAXQgMAYgPABQgQACgVAIIg4AXg");
	this.shape_25.setTransform(19.3,-49.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F0FF7A").s().p("AgGD/QACgFAEgWQAGgXAAgGQAAgsgWgmQAQgFAGAAQAYAAAQAVQATAXAAArQAAA5g4AAIgPgBgAEVC7QADgTgDgcQgFgtgXgQQgIgSAaACQAZABAIALQAIAKAIAdQAGAWAAAIQAAAcgKAKQgIAHgeAIgAjGgqQgcgFgXgMQhIgkAAhVQAAgFAohGQABBRAfArQAbAkAqAAQADAAAbgIIAbgJQAGAAAHASQAHAQAAAGQAAAOgWAKQgVAJgaAAQgKAAgQgDg");
	this.shape_26.setTransform(12.4,-57.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72EBEB").s().p("AhFASQgIgwgZgSIBNgUQAsgMAdAAQACAAAIACIAMAEQAKAGALAaQAMAcAAAVQAAALgGAMQgIAPgRAGQgQAGgpAKQggAJg7AFQAOgOgHgxg");
	this.shape_27.setTransform(27.9,-41.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC99").s().p("AiCB0QgdgoAAhOQAAhDAjgjQAsgtBkAAQAuAAAdAhQAcAgAAAvIgMAbQgDglg+gjQhAgmhAALQBdAaArAhQAnAeAAAmQAAANgMAQQgLANgLAGQgNgfgngbQgogbgoAAQgHAAgHADQA5ALAmAmQAhAjAAAcQAAAPgNAIQgKAHgbAIIABgCIAEgOQAEgKAAgHQgBgIgBgDQgBgEgHgDQgZBDghAAQglAAgZgigABgBBQASgaARgiQATgngFgQQAFAHAFARIAFAQQgBAVgSAcQgWAfgcADg");
	this.shape_28.setTransform(2.3,-84.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC99").s().p("AgNCIIgGgCQAKgMAGgLIgHgBQghAJgKAAQgfAAgTgNQgcgVgNg2QAFhEAsgyQAsgyArAAQA+AAAvAnQAsAlAAAoQAAARgIAPQgNgpgrgfIgogXQgGAAgDADIgBACQAfAXAeArQAcAmAAARQAAAYgJAMQgMAOgeAFQgFhCgfgcQgQgNgUgCIgCAGIAbAhQAaAjAAAUQAAAZgJAOQgNARgbAAQgFAAgHgCg");
	this.shape_29.setTransform(41.3,-11.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#72EBEB").s().p("AgyAZQgGgIg1gnQAtgPAtgTQArgUAbABQAcACATArQAEAKAIAmIiKA6IgWgzg");
	this.shape_30.setTransform(23.6,-46.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F0FF7A").s().p("AgbDkQgLgSAAgXQAAgzAUguQAag/A2AAQAPAAAiARQg1A7gQAaQgYAoAAAvQAAANAHAdQgjgDgRgbgAh4hnQgRgLgogUIArgXQAUABAmAiQApAkgEAUIgkARQgSgkgbgSgACJiOIACgBQADgIgLgeQgLgegmgbQAygiAXAZQAWAZAAAzQACAIgEAIQgHAOgZAAQgGAAAAgBg");
	this.shape_31.setTransform(22.7,-31);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8089DD").s().p("AkcCIQgdgbgBg3QAAg2AYgVQAZgWAZgDQAagCATAQQAUARAZAjIgLgFQgLgGgMgCIgBALQAQATA3AbQAwAYASAEQgiAigRAoQgTArAFApQiOhXgdgbgACBirQgIgOgcgVIACAAQBIgQBWgaQAagEAOALQAOAKAGAcQAHAbgeATQgeASh0AoQgBgwgOgYg");
	this.shape_32.setTransform(28.2,-37.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8089DD").s().p("AkNCnQgqg6AAgtQAAg8AkgmQASgVATgIQAhAAAXAVQAYAVAZA1IgJAFQgYgZgKgBIgFACQgDACAAAGQAAAEA3AxQA3AyAPAKQgWAQgdAmQgiAtgIAjQhHgmgug/gACAimQgXgmgLgIIBFgUIBXgbQAcgTATAdQAPAYAAAcQAAAQgFAOQgJAWgUAAQgFAAAAgEQAAgEgFAAQgMAAgYAHQglALgtAYQAEgNgagqg");
	this.shape_33.setTransform(23.8,-30.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC99").s().p("AhICTQgNgJgIgKIgCgCQA2AKAOAAQAIAAAFgDQAHgGgEgLQgBgBgHABIgOACQgoAAgtgsQgtgrAAgmQAAgiAlg3QAthBA0AAQAEAAAaAIQAlAMAeAOQBfAuAAA7QABAQgGAOIgEAHQgBghgUgZQgTgXgZgCIgHACQAAgEAAAKQAAACAIAOQAMARAPATQARAVAAAbQABApgXAYQgTAVgYgDQADgRAAgKQAAgWgJgeQgJgcgJgKQgHAAABAPIAMBKQAAAYgSATQgXAYgqAAQgSAAgWgPg");
	this.shape_34.setTransform(36.7,7.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#72EBEB").s().p("AgpAiQgZgkgngSQAegXA5gVQA4gWAHACQAVAHATAmQAOAcAHAdIiCBDQADgSgUghg");
	this.shape_35.setTransform(20.8,-40.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F0FF7A").s().p("AhRD+QgQgMAAgIQAAhFA3g/QAvg4A0gDQA0gCAkBGQgkgPhCBGQhABFAEAyQgrgQgVgPgAhth/QgigfgfgEQAIgEAWgPQAMgJALAAQAcAAAdAiQAdAiADAkIgqAYQABgggkghgAByjlQgUgngOgJQAYgHAHAAQAWAAASAgQATAfAFASQAEASgsAOQgCgVgTglg");
	this.shape_36.setTransform(19.7,-22);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#72EBEB").s().p("AAKCQIiCjeQAtAEAbgPQAUgLAmgtIBvDgQgLAjggASQgYAOgWAAg");
	this.shape_37.setTransform(24.2,-90.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#F0FF7A").s().p("AC8HFIgYgkQAqAAAfgXQAbgUAHgYQAQAbAJAVIAIAQQgBAbgjAaQgeAVgTABQgHgBgYgjgAAACPIggg+QA3AHArgeQAhgXAHgZIAdA/QgQAggNAPQgYAagxAAQgWgDgLAAgAkRlEQgRgYgNg3QAlAIAQAAQAnAAAkgNQBAgYAOg4IABABQgFAKAQAgQATAjAAAEQAAAZgyAnQg4Arg1AAQgeAAgSgZg");
	this.shape_38.setTransform(10.4,-115.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC99").s().p("AgbD1QgTgGgJgSQATABAMgNQAJgIAJgWQAVAWAWAAQAHAAAigPQAmgRABgNIgBgHIgBAAIgHgBQgbAMgSAOQgNAKgDAAQgXAAgMgIQgIgGgBgJQAAgaAYgVQAUgTAegGQAegGAUALQAXAMAAAfQAAAvgtAgQgsAgg9AAQgRAAgKgDgAhkDLQgxgRAAg6QAAgLAHgKQAHgKAWgZQgDAiARAVQARAUA6AVQgUAnggAAQgMAAgMgEgAhMB8QgSgYAAgnQAAhBAjAAQARAXAIAAQAGAAABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIACgIQgIgNgjgnQgfgvAAhFQAAgzASgWQAMgOAQAAQAVAAAQAsQAKAbAJA8QAGAeAYBOIAXBHIgeATQgKgYgVgSQgPgLgKgDQATAYALAXQANAWgBAPQgBAPgLAOQgJANgIAAQgmAAgVgcg");
	this.shape_39.setTransform(-15.8,-182.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8089DD").s().p("ADSHUQg/hegwhJQAbAGAjgiQAfgdACgRIBaC4QAGAMAMATQAMAUADABQAFADANACQAKAFAAAZQAAAYgWAYIgmAiIhLhwgAiqifIiulKQAcAFAggRQAmgVA6g5ICdFdQgNAqgSARQgWATgyABQgFAAgfgIg");
	this.shape_40.setTransform(22.7,-94.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFCC99").s().p("AgfEqQgegUgPgYQANgEAXgUQAVgTAVgGIANAzQAIAcAZAAQAVAAAVgLQAZgNAAgVQAAgKgCAHIgFgBIg1AZQgRACgIgMQgGgJAAgLQAAgbAUgdQAegrA6AAQAZAAADAVQACALgIA2QgGAqgnAbQgqAchAAAQgIAAgagQgAiMDNQgTgfAAg2QAAgeANgbQAPgfAagKQAEAIgCAUQgDAaAKAnQANAyAQAVQANARAAADQAAAHgGAJQgJAOgVAAQgfAAgTgfgAgfC5QgLgEgKgJQgegdAAg3QAAg3ASgjQASglAVgGQAUgGALA4QANA7ALAMIAAgBQgbjcAAgLQAAg9ARgqQAWg2ApAAQAkAAAAA/QAAAMgLAzQgKA0AAAmQAACOAIAjQAKARgEAIQgFAIgmAQQglAPgCAHQAAgPgEgPQgEgOgFgHQgHA0gJATQgGAQgRAAg");
	this.shape_41.setTransform(-30,-143.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F0FF7A").s().p("ADyGQQATgFAUgvQAUgtgCgnIANgEQAGgDAHAFQANADABAGQAEAKAAAGQAAAzgXAgQgWAegiAAgAhbD2QgVgRgUgkIAIABQAtAIApgiQAmghAAgkIAfAgQANALAAANIgBAHIgBAAQgoBhg+AAQgOAAgRgNgAlAjwQgWgWAAgyIABgZQApALAVgDQANgBAfgHQANgDAOgHQgWANAegQQAegPAggiQAJBRAAANQABAYgXAXQgkAjhPAAQgkAAgSgRg");
	this.shape_42.setTransform(0.6,-76.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#72EBEB").s().p("AgiBWQhiglgng0QAxgEAbgYQAZgYAXg7QA1A2BfAWQAoAJALAFQAUAKAAATQAAAtggAkQgaAdgVAAQgzAAhMgdg");
	this.shape_43.setTransform(11.9,-48.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8089DD").s().p("ADcD0QAOg5gPgSQAHAABRgNQBCgKAWgJQAMAKANAVQALAUAAAIQAAAlgPAbIgGAJIAJAAQADAAgOADQgLANgMABIgBgIIgVAIQgVAJifAQQAXgJAOg6gAlshNQg2iOgMhBQAJAGBAgLQBAgLAIgJQAIgJAGAnQAHAmAlBSQANA+AhAvIAhAyIABAAIgBAAIAAAGQAAATgZAcQggAkg9AAQgiAAhAimg");
	this.shape_44.setTransform(14.2,-67.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#72EBEB").s().p("AgpAMIgpgvQAagOAkgZQAhgYAUAJQAVAJAPAdQAOAcAAAWQAAAIgGASIhdBEQgQhFgJgMg");
	this.shape_45.setTransform(35.2,-34.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8089DD").s().p("AlABIQgbgxgXhHIgghqQA6gDAsgMQA2gOANgWQgGAsA4BwQA4BtApAaIACgCQACgCAAgHQAAgBgNgUQAigMAugWQARAAAYAwQAXAuAAAcQAAAMgpAaQgzAihDAAQiFAAhNiOgAEihPQgJgagpghIATgOQAGgFAcgeQAcgaAcAAQAbAAAPATQAPAUgEAYQgEAYgpBLQgCgCgHgBIgIAAIgnAiQgHgZgEgig");
	this.shape_46.setTransform(20.1,-36.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F0FF7A").s().p("ACnD6QgEghgQgkQgVgtgagQIAugYQAeAWAUAuQARAkAAATQAAADgLAHQgTAMgQAOgAE2AXIgdgLIAsgeQArAfAMAtQAMAygqAVQANgTg1hXgAlihZQgUgYgHhBQANATApAEQAmAEArgMQBqgbgGhAQABAAADAOQALA6AAAgQAAAYgfAcQgpAkhEAAQg7AAgYgbg");
	this.shape_47.setTransform(10.2,-47);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCC99").s().p("Ag1EmQgogbAAgvQAAgJAngMQABAAATAOQAUAOAOAAQAZAAAdgOQAfgPAYgcIgLgMIglAhQgaARghAAQgYAAgMgOQgIgJAAgNQAAgrAqgfQAngcAqAAQApAAAXAaQAYAbAAAxQAAAzgcAmQgoA3hYAAQgjAAgfgWgAiTCrQgVgfAAgiQAAg9ANgeQARgkAoAIIgTBFQAAAkAbAoQARAaANAKQgLAUgIAHQgIAGgMAAQgaAAgWgegAhaBnQgHgaAAgWQAAgmAVgeQAWghAaAIQAFAaASAXQALASAJAHIABgBQAAgOgUg4QgXg7AAhPQAAhKARglQANgfAYAAQAiAAAJBrQAHCeANBjIhGASQgFgNgMgQIAAACIgBAPIABAVQgmAqgJAMQgIAKgEAOQgXgLgLgog");
	this.shape_48.setTransform(-22,-96.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFCC99").s().p("AhCD4QgbgXgIgwQATgBAQgNQARgOAEAAQAlAAAIAeQALAdAiAAQATAAASgJQAWgLACgOIgPAGQgWAHgJAAQgbAAgLgIQgKgIAAgQQAAg/BWAAQAWAAANAOQAOAOAAAYQAAA2ggAiQglAnhBAAQgzAAgcgXgAiECKQgOgTAAgoQAAgoARgbQAPgWAQAAQAKAAABAEQgEAKAAAMIADAjQADAdADAJQACAFALARQAIAOAAAJQAAAEgHAIQgJALgKAAQgfAAgOgTgAg0BsQgOgagCgnQgCgmALgZQAMgeAWAAQAMAAALAqIACAIQALBbAAAJQAAADgJARQgIARgDAAQgbAAgQgdgAATAuQAAgRgMhQQgJhSAAgKQAAgzALgiQARgqAiAAQATAAAABOIgEBTQAAAcAPBNIAQBJQgcAAgLACQgJACgbAMQgBgGgLghg");
	this.shape_49.setTransform(-14.2,-68.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F0FF7A").s().p("ACwCbIACgBQADgbgRgeQgVgngrgOIAOgMQAQgNAGAAQAmAAASAzQALAgAAAdQgDAZgSAAQgGAAAAgBgAFHAGQACgFgXgkQgYgmgRgOIAWgXQAHgHAJgCQAJgDAVAgQAUAgAAAbQAAANgHALIgSAWgAlRgtQgFgPgKgwQAUAGASALQAKAFAZAAQCBAAAUhFIAOBAQgTAigxATQgsARg0AAQgwAAgJgYg");
	this.shape_50.setTransform(13.6,-30.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8089DD").s().p("AjfDGQhFg9g2iPQBfgOAggbQgWALAmgVQAmBcAvAzQAoAsAbgDQAAgBABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAIABgEQAAgOgVgKIBMgvQAqAEASAoQAMAaAAAeQgDAhgSAAQgfAVgqASIAAgBQADABAkgWQhKAohJgBQg0ABgvgpgAEXhhQgSgZgbgQIAlgmIA1g+QASAAAEBIQAFBJg1AtQgCgZgRgYg");
	this.shape_51.setTransform(21.2,-30.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#72EBEB").s().p("AgWAgQgMgVgpgbQAXgOBIhCQAvAyAFATQAFATgBARQgBAThOBFQgHgugMgTg");
	this.shape_52.setTransform(36.5,-28.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#72EBEB").s().p("AhAAeQAEgagHgZIgJgkQAhAAAtgZQAvgZAGAAQAJAAAWASQAWATAEANIAGAUQADAIABAWQABAUg4AlQg4AliEAVQA1g0AEgag");
	this.shape_53.setTransform(27.6,-27.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFCC99").s().p("AhcEEQgegcAAgyQAAgKACgRIABABQAOAIALgCQAJgCAOgKIgCALQgFAnAcAWQAZASAlAAQANAAACgLIAAAAQgRgIgkgLQgegMAAgXQAAgVAOgKQAOgKAOgGQAOgFAAAAIABAAQAAgEAIAAQAKgFgHAFIADAAQAPABARAHQAtAUAAAiQAAAqgcAdQggAhg2AAQgqAAgcgZgAiJB6QgSgXAAgjQAAgaAUgaQAVgZAVAAQAKAAAMAGQgFBOACASQACAGAAALQAAAIgFAMQgIARgKAAQgYAAgSgVgAAeBoQAFgKAFgiQAFgeAAgLQAAgOgCgBIgHgCQgQAtgFAfIgBAZQgeAEgIADIgZANQAAgQgHgqQgHgqATgoQASgnAvAJIAEAKQAIARACAWQAFiWAVhFQAVhDAoAAQAoAAgGA9IgXBuQgrDagDASIg5gTg");
	this.shape_54.setTransform(-17.7,-97.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F0FF7A").s().p("AgqEaIgDgCQA2gQASgqQANghgHg9QAnAAAPAUQAJANAAAYQAAAtggAiQgUAWgcANgAE4C0QABglgIgVQgIgUgxgaIA2gfQAHgCAXAcQAWAcABAbQABAbgKAJQgXATgNARgAlKh2QgQgWgIhJIBCANQAvAAAmgjQAjgfADggQAXBJADATIABASQAAAYgiAbQgrAjhGAAQghAAgMgQg");
	this.shape_55.setTransform(9.9,-46.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8089DD").s().p("AjeCvQgcgfgbgmQhUh1gjiGQABABAJABQAbgCAdgIQA5gRANgcQANAyArBNQAwBUAsAlQAJAIAEAOQACAJAAAQQAAAvgcAcQgcAbgsAAQgCAAgXgYgADvAEQgOgPgZgNQAggQAkgcIBFg5QAtgOAMAzIACAJQAEgBgLAZQgKAYh8BzQgBg/gPgRg");
	this.shape_56.setTransform(21.7,-40.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8089DD").s().p("ADRDJQAEgXAAgJQAAgEgJgXQgJgYgHgNQAagIA9ghQA1gdAHACQANABALAOQAMAPAAASQAABCgzAeQhJAegwAXQAFgGAFgbgAk1AnQgVgxgoixQAgAHAogKQAvgMAegfIAFAqQAHApADAMQAGAWAbBCIAaA8QgBAVgbAYQgjAdgnADIgFABQgkAAgTgxg");
	this.shape_57.setTransform(20.6,-62.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#72EBEB").s().p("AghBaQhHgQg4hAIgOgMQAEAAAIACQAHABAFAAQAZAAAggXQAmgeATgvQAgAdAiAKQAjAJAoAFQAnAGANANQAQASACAnQABAqgTAIQgSAJgzAIQgSADgUAAQgmAAgtgKg");
	this.shape_58.setTransform(15,-44.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F0FF7A").s().p("AD3E9QAIgFAAguQAAgdgHgRQgHgTgSgNQAGABAVgHQAWgHAEAAQAIAAALAOQASAVAAAjQgBAigSAXQgNARgTAAQgHAAgIgCgAiADVQgJgGgXgoIAKADQAGACAGAAQAcAAAkgSQAugXAMghQAUAFACATQABATgNAWQglA3gmAAQgmAAgJgFgAkgigQgXgbgBhLIAHAKQAMALAaAIQAUAHAHAAQA1AAAhgaQAQgMArg2IADBKQAAA0gsAeQglAYguAAQgxAAgUgWg");
	this.shape_59.setTransform(8.7,-68.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFCC99").s().p("AhhEVQgXgbgHggQAmgNAFgWQAXAeAKAMQASATAbAAIAOgEQARgFAIgFQgHgHAAgCQggAAgNgDQgmgKAAgiQAAgUAVgVQAagZAnAAQAaAAAZAOQAbAPAAAUQAAA9gtAtQgtAtg5ABQgfAAgagggAifCwQgTgbAAgqQAAgaAYgqQAagtAYAEQgIAQgDAPQgHAYAAAsQAAAjAMAWQALAQAAABQgBAHgEAHQgJANgNAAQgRAAgQgWgAhnBhQAAgwAagxQAbgvAXgDQAXgEADAcQABAaAMAeIADgOIAxjXQAghtAxAAQAcABAEAUQAEAPgIAVQhRDcgLCAIhOgCQAJgngMgOIgHAHQgFALgBARIgBAVIgeAWQgdAUgDAUQgSgVgJgqg");
	this.shape_60.setTransform(-11.1,-124.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#72EBEB").s().p("AglBIQhShGgchjQBYAiAyhCQAfBLBGAmQAgAQAIAIQAQAQAAAcQAAAbgUAZQgVAageAAQgwAAhCg6g");
	this.shape_61.setTransform(14.6,-59.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8089DD").s().p("ACDFOIgvgDQAKgPALgZQARgmAAgRQAAgDgPgpQAVAFAtgEQAtgDAhgHIAxgLQAQgEAMAHQANAIAAAdQAAARgLAbQgSAqglAgIgCgFIgkAFQgjAFgnAAIgggBgAkcgaQgOgKgFggQgEgWgHhKQgJhUgRhWQBVARAGAAQBGgEALgKQgBCCAEA5QAMBRAAAKQAAAWglAJIgnAGQgpAAgOgKg");
	this.shape_62.setTransform(26.2,-75.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F0FF7A").s().p("ACmGrIgVgFQAYgUAOgkQAHgSACgPQAAgYgKgYQAkAEAOANQANANgFAZQgEAYgNAbQgMAbgMAHQgGAEgLAAQgHAAgJgCgAiECPIgPgzQAIAEAfAFIAfAEQAMAAAWgKQAXgKAMgMQAQAogZAdQgYAZgfAAQgVAAgngYgAjPkFQgigcAAg0IAFhXQANAjA3ARQAjALAgAAQAlAAAcgNQAQgIAUgOIgGBxQgCAggLAGIgQACQg1AMgcAAQg7AAgggag");
	this.shape_63.setTransform(12.2,-86.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFCC99").s().p("AhCDmQgngigHg6QAMASAagOQAigUAEAAQAGAAAQgDQARgFAIgFIgEAJQgDAAgCAKQgCAJAAAJQAAAYATAZQAVAcAcAAIAHAAIAAgHQAAgFgbgRQgbgVAAgeQAAgLALgQQAOgWATAAQAsAAAaAaQAYAWAAAeQgFAYgTAXQgmAthEAAQg5AAgmgigAiJBjQgVgZAAgwQAAg9AigRQAdgPAXAUQgTBBAAAKQAAAjAPAVQAOAOAAAFQAAAIgGAFQgGAFgLAAQghAAgTgWgAgyBUQgUgXAAgoQAAgdAPgcQARgfATAAQATAAAJAIQAKAHADAxIgIgDQgDAEgBA5QgBAugdAAQgPAAgPgRgAAaA1QAEglgCgJQAGADAEgBQAFgBAAgHQAAgUgIgbQgJgcAAgIQAAhUAkg1QAegsAhAAQAgAAgJA1IgVBYQgQBGAAAvQAAANAJBKQgmgJgKAAQgbAAgaAZQAEgIADglg");
	this.shape_64.setTransform(-0.9,-151);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFCC99").s().p("AhXDWQgdgvgThcQgBgJglg9Qgjg/AAgjQAAgdAOgUQAMgRALAAQArAAAWBRQAPA1AAAqIgJAGQgLAIgIAKIABAIQABACAGAAQAGAAAhgSQAggTArAAQA4AAAjAmIAFgCQAEgCAAgGQAAgLgJgGQgEgEgRgFQgPgFAAgGQABgoAWhQQAahdAaAAQAZAAALAXQAFANAAAQQABAOgjB5QgjB3ABAMQgKAJgFAHIACAHQACADAGAAIAbgVQAfgVAVAAQAOAAAIAPQAHALAAAIQAAA1hLAxQhDAsgvAAQhDAAgog8gAg7hhIgEgwQgBgyASgkQAPggAWgIQATgIAQAVQARAYAAAyIgSCRQAAAHACAOIAGASQghgEgzAIg");
	this.shape_65.setTransform(0.4,-82.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#72EBEB").s().p("AgtAjQAAgbgLgYQgIgUgRgZQAQgEAggUQAdgSAFAAQAnAAAYAoQASAdAAAVQAAAfgaAVQgZAVhYArQAMgZAAgrg");
	this.shape_66.setTransform(35.9,-27);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F0FF7A").s().p("ABACSQAAgsgLgVIgOgXIAhgDQAOAAAMAkQALAfAAAWQAAAjgPAYQgSAcgiACQAWgtAAgqgAEVBgQgBgTgbgnQgdgngUgFIAkgdQAvAjAMAOQALAPAAAZQAAAfgMATQgFAJgEAAQgFAAgDgRgAkSh/QgnglAKhEQAcAyAsAXQAgAQAkAAQA3AAAZgXIANgKQAFAlgtAYQgkAVglAAQg6AAghghg");
	this.shape_67.setTransform(18.3,-38.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8089DD").s().p("Aj1BVIgFgJQhUjSAhAGQAhAGAVABQAUABAcgIQAjgKAKgRQANB/A9AeQAhAQAGAHQARATAAAtQAAA6gfAsQhzAAhLhqgAERAOIgFgCIgHAAQgGAAgBACIAAABIgCAAQgBgagWgiQgXgjgegKQAWgRAdglQAUgYANgWQAeAUANAxIAIAuQAAAVgRAoQgNAegIAJIAAgLg");
	this.shape_68.setTransform(25.5,-33.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8089DD").s().p("ABnC+QAAAAABAAQAAgBAAAAQAAAAABgBQAAAAABgBQACgBAKgYQAKgYgCgWIgEgfQgCgLgQgTQAPgEB5g0QAsghAKATIATAfQAJAPgYAsQgYAsgaAPQgZAPg2AVQg4AXgEAAQgGAAAAgDgAkNgSQgLgBgMgGQgNgFgFg3IgFhhIAwAJQAGAAAegGQAlgGAOgHIAVCAQgGAPgYAPQgYAQgWAAIgNAAIgVAAg");
	this.shape_69.setTransform(25.8,-55.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F0FF7A").s().p("ACgEWQAMgKAIgZQAHgVACgQQADgPgZgmQAMgBApgKQAQAfAAAZQAAAogSAWQgQATgcAAIgOgBgAh1COQgQgEgPgYQgOgYACgSIAKAGQAkALAIAAQAbAAAWgIQAhgLAJgZQAGAPAHAJQACAFAAAFQAAAYghAVQghAUggAAIgTgCgAjXiKQgWgaADhCQANAKAgALQAbAKAFAAQAyAAAdgUQAagSARgpIABAuQAABMgPAVQgRAZhAAAQg/AAgWgcg");
	this.shape_70.setTransform(12.7,-63.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFCC99").s().p("AhDEwQgWgHgOgWQgjg6AAjAQAAiEAhhSQAchHAngGQgqCfgCATIgCA4IgDAsQgCAOgSAIQgSAIAAAGQAAAHADACIAHABQAXgIATgNQALgHAXAAQALAAAzASQgQAMgKAcQgKAXAAAMQAAAfADAKIAPAlQAJgJAEgJIgGgWQgHgYAAgGQAAggAPgUQANgSASAAQAOAAAQAZQAQAZAAAbQAAAsgcA1QglBIg7AAQgdAAgLgDgAApAgQgNgHgZgJIAFgyQAFgzAKgoQAeh9A+AAQAQAAAFARQAGARgHAYQgVA1gOArQgaBSAEA/QgYgJgNgIgAhCALIAAglQAEiPAlhKQAdg/AwAAQASAAAIAQQAEAGAFAVQgcABgjBMQgqBcALBrQgpgDgSABg");
	this.shape_71.setTransform(0.4,-116.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#72EBEB").s().p("AgtA1Qg2gfgsgwQA0AEASgHQAcgLAkg0QASAhA4ARQAsAOAPgDQATAHABAeQACAfgOAcQgNAcgRAAQhOAAhFgog");
	this.shape_72.setTransform(14.9,-44.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#72EBEB").s().p("AgbBoQgNg2gZgUQgGgEgSgRQAmgkAagqIAXgoQAZgPAiAWQAhAVAAAYQAAAHgxBGQgtBGgVAag");
	this.shape_73.setTransform(36.1,-20.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#F0FF7A").s().p("AA+BuQgWgtgOgNQAqgsAfAmQAYAfAAAsQAAAJgEASIglAeQADgTgXgxgAkQA0QgQgagIgxIADgHQANACAZAKQAZALAYgFQAYgEAkAAQAjABAHAQQAMAcABACQgmAegRAJQgZAOgxAAQggAAgUgggADuh/QgYgNgjACIAQgaQAKgPAaADQAaADAUARQAUARAAAUQAAAHgKAQIgKAQQgQghgXgOg");
	this.shape_74.setTransform(18.6,-21);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFCC99").s().p("ABjC8QglgUgRAAQgKAAgGAGQgaAFgXAAQgtAAgWgTQgYgTgIgxQgMhDgmgjIgYgXQgKgNAAgQIAHgPQAKgPANgDQAMgDAMAQIA6BOQgQAFgGAJIgEAIIAAABIAGAAQAGAAARgFIAogKQAVgEBAgJIAxgEQgIgIgLgHQAehyA4gbQAVgKAPAIQAPAIAAATQAAAXg2BRQg3BPAAAfQAAAgArAWQAqAXAAAWQAAAcgLAIQgFADgMAAQgQAAglgUgAgugYQgCgagHg9QAAgpASgbQARgZASgDQAPgCAOAQQAOAPgDALIgQA7QgNAuAAAJQAAANADAJIg6ALg");
	this.shape_75.setTransform(0.5,-41.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8089DD").s().p("AjKEZQhEgcgihAQAmABA8gfQAdgPAYgPIALAEQALAFARACIAbADQAQADAJAHQASARAQApQAHAUAFASQAAAcgkANQgYAJgjAAQgvAAgsgSgADBhjQgWgNgSABIgNABIgEABQBEiAA1g9QAwAQABAaIgpBxIghBRQgMgWgbgPg");
	this.shape_76.setTransform(26.4,-29.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8089DD").s().p("AhcDpIAJgVQAJAQAAAKQAAAGgEAEIgIAIIgLAIQAEgSABgNgAirBrIAGgHIAPAKIgRAPgABpgzQABgWgjgYQgcgVgrgSQATgOBAg0IBNg9QAFAHAEAXQADATAAAOQAAAqgPAaQglA7gOAfg");
	this.shape_77.setTransform(37.1,-31.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFCC99").s().p("AhUCnQgegngKgYQgKgXgUg/QgVg9AEgiIAHgTQAJgXANgJIAQAEQgCAeAPA9QARBHABAIIgPAVQABAIADABQAHgFAcgLQAegMAMAAQAGAAAJACQASAGAeAHIACAAQABgBAAgHQAAgCgOgHQgTgJgEgDQgFgDgFgSQgFgOAAgGIgHgaQgHgeACg8QADg7AagMQAbgMATBFQAGBYALBMQAIA0gDAFIADAJIADAGQALgUAPgPQATgQAUAAQALAAAKALQALAMAAASQAAAWgxA4Qg1A9ghgBQhLAAgvg8gAhuh2QgBhtAvAAQAYAAAJAGQAJAFAAAMQAAASgMAfQgNAfAAAWQAAA1AUBOQgPABgjAHQggg1gBhmg");
	this.shape_78.setTransform(11.2,-24);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#F0FF7A").s().p("Ai6DWQgfgYACglQATANAeAOQAoASAZAAQAZAAASgJQAhgPAdgrQgUA6gcAaQgYAYggAAQg2AAgggZgAAyBIQAAgFAEgKQAEgKAAgFQAAgjgigSQgSgLgogKQANgbAEgGQAFgHAFAAQBJAAAZCKIgcAiQgNgZAAgDgACaiiQgkgfgvgEQAHgeAYgIQAWgIAbANQAbAMASAZQAUAcAAAhQAAAFgEAJQgFALgIAJQgSgngbgZg");
	this.shape_79.setTransform(24.7,-19.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#72EBEB").s().p("AgOAiQgqhBglAKIA5hVQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgCAGAAQBEAAAiAxQAWAdAAAYIgBAAIgRAdQgXApgiAvQgDgYgeg0g");
	this.shape_80.setTransform(33.9,-26);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#72EBEB").s().p("AgzAqQgNgKgpgEIgJAAIAsglQAnghAtghQAngcAhAaQAdAXAAAdQAAABgSAQQgmAfhBBEQgigrgLgGg");
	this.shape_81.setTransform(24.8,-31.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#F0FF7A").s().p("AiSD0QgYgVAAgfQAAgWAQgkQASglAZgcQBDhHA4A1IAFAHQg4gMgsBjQgRAmgGAlQgGAkAIALIACAJQgegUgOgMgAhKgoQgbgKg2AIQARgYAFgPQAQgWAXABQAYgBAeAVQAfAVAAAWQAAAKgGAIIgKALQgpgbgIgDgAB/jYQgVgUglgWQAIgFALgFQAMgHAFABQAaAAAVAWQATAVAAAUQAAAEgCADQgGAGgUAIQACgJgSgRg");
	this.shape_82.setTransform(23.8,-16.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8089DD").s().p("Aj5DzQgIgOAAgKQAAhVAfgZQANgKAjAAQAzAVAYAQQgcAAgqAiQgxAngSA0QgBgEgIgOgABfiDQgZgegMgEQA1geB9hBQABAKALAAQAKAAAAAeQgBAegqAbIheBDQgCgGgYgdg");
	this.shape_83.setTransform(30.6,-29.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFCC99").s().p("AgaCjQgSgIgJgMIgEgHIAHADIAIAAQAKAAgFAAQAFgEADgEQgfgJgmgrQgqgvAAgnQAAgPALglQAMgpAKgOQAggqAIgGQAagRAlAYQBQA6AhApQAfAoAAAtQABALgFAGQgGAHgOADQgJgdgOgUQgSgYgTADIgIABIAAgBIAAAGIAbAdQAcAjAAAcQAAAIgCAOQgDAPgEAGQgzAgAQgXQgBgIgSgfQgSgggIgIIgEAAQgFABAAAGIASAhQARAhAAAIQAAAMgLAJQgNALgUAAQgJAAgNgHg");
	this.shape_84.setTransform(29,8.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8089DD").s().p("AkWDJQgdgcAAgpQAAhDAlg6QgCAjAzBFQAzBFAeAAQAEAAAPgHQAOgHAGABQAgAKAMAAIABgBIhQApQgcAPgdAAQg2AAgfgfgAB5gQQAAgPgMgcQgMgbgNgRQAdgHBGgqQBMgvAZggQAYAjAAApQAAAagKAdQgJAYgJAMIgHAGIgGAFQANgMADgNQgFAFgWAOQgsAchdAyg");
	this.shape_85.setTransform(21.7,-29.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFCC99").s().p("Ag3DpQgMgFgIgGIAJgBIABACIAAgGIgOgiQgQglgHgbQgShIgEgZQgFgdADgqQAIhrApgwQAcghAiAAQApAAAzB/QAzB8AABlQAAApgKAdQgLAfgUAAIgHABQAFgSACgaQADgVAAgLQAAgigCgFQgBgGgKgKQABAugCAjQgEBDgqAAIgagDQAGgLAMgtQAAgRgHgWQgFgSgFgGIgFAAQgBAEAAAJQAAAFACAMQADAMAAAFQAAArgNATQgNARgWAAIgLgFg");
	this.shape_86.setTransform(11.7,-37.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#F0FF7A").s().p("AidBbQgcg+AAhkQAAgFAIgZQAKgdAJgMIACAAQgFA7AAAKQAAAaAIAnQAUBaALA9QgZgdgKgXgAB8ADQgBgKgIggQAZgLAXAcQAXAbAAAwQAAAUgJAKQgNAOghADIgHhhg");
	this.shape_87.setTransform(13.3,-34.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#72EBEB").s().p("AgyA9QglgggdhLQAMADAKAAQArAAAngRQAmgSgBgRQAdAgAnAJQAOADAEAFQAHAGAAAUQAAArgXAlQgVAkgZAAQg9AAgmgjg");
	this.shape_88.setTransform(12.9,-30.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8089DD").s().p("ABHDXQAFgWAAgIQAAhJgjgaIAigKQAXgNCVhiQgDAVANAJQANAHABAZQABAYgPAYIgPAYIAQgLQAWgPgrAhQgFAHgEABQgjAugrAaIg/AmQgHAEgEAAQgIAAADgNgAkJALQgFgSAAgxQAAg7ALhtIABgDQAVAIAhAEQAqAGAcgGIgJB0QAKBUAAAKQAAASglANQggALgmAAQgSAAgHgag");
	this.shape_89.setTransform(25.8,-47.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#F0FF7A").s().p("AB0DQIgFgZQgGgbgGgMQALgDAMgFQAKgFADABQAPAAAKAkQAHAcABAXQgBA6g/ARIgNACQAagcgBg8gAiOCFIgKgsQAeAFAJAAQAwAAAWgNQANgHANgUQAZBLhIALQgcAEgSAAQgdAAgDgLgAinjyQAOgPAXAGIAsAJQAtAAAyg2IABAiQABAsgXAPQgOAJgcAAQhjABgOgxg");
	this.shape_90.setTransform(14.9,-51.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFCC99").s().p("AgoBxQgWgOgFgXIACgLQARAFAUAJQAKAFAggBQA3AAAKgMIACAEQADAWgLAOQgNARgfAAQgrAAgagPgABXB+QAFgKAEgmQAEgmgCgOQBPgJACgjQgLAAhEAaQgrAAAAgmQAAgKAMgTQAQgbAXAAQAvAAAhAcQAkAgAAA0QAAAsgjAdQgiAdg0AAQgKAAgGgCgAgrA2QgkgOAAgaQAAgJAMgMQAOgRARAAQATgBARACQAlAEAHANQAHAMAQAMIAOALQAAAYgVAIQgMAFgagBQgkAAgdgLgAjXg2QgHgJgBgLQAAgOA2gUQA1gTAoAAQAwAAAcAGIBNAdIgSAZIgTAeIjWAAIgFAAQgYAAgMgRg");
	this.shape_91.setTransform(-6.1,-91.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFCC99").s().p("AAnDvQgnAAgYgJQgYgIgEgGIAIAAQAtgDgKhAQAJgCAOgLQAOgMADgJQAKAJAVALQARAJADAAQAGAAABgDIACgHQgrgIgVgdQgQgUAAgTQAAgVANgNQANgPAVAAQAyAAAgAUQAjAVAAApQAABGgxApQgtAlgpAAIgBAAgAiECsQgkgeAAg1QAAgMAFgLQAHgRAPAAQAJAAAwAyQAtAuAKAQQAJAQgIALQgHAKgSAAQgvAAgggagAgOB9QgPgFgoggQgngggDgWQgDgWAJgJQALgJAVAAIAUABQACgGAWAXQAVAZAKAgQAMAhAAAKQAAAGgFAEQgGAFgGAAIgLgCgAhqhTQhEhFAAgrQAAgPAFgMQAIgQAOAAQA2AAAwBHIAvBKQAiAxAiAmQgHAAgcAJQgdALgFAGQgYgchThLg");
	this.shape_92.setTransform(6,-111);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#72EBEB").s().p("AgrA4QgigRg2g2QBmACAag/QA6AsA2APQAPAEAEAFQAEAHAAAUQAAAcgMANQgQAQgrAAQhBAAgngUg");
	this.shape_93.setTransform(15.9,-38.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F0FF7A").s().p("ACAEiIAHgKQAGgTAAgHQAAgWgEgMQgGgRgQgQQAIgDAAgCIAQgCQARAAAKAUQAJASgBAYQgCAZgLAOQgJAKgNAAQgFAAgGgBgAiiCyQgEgGgGgaQAeAOAmgQQArgSASgtQAIAEAEAQQAGATgGARQgOAxhQAAQgfAAgGgIgAiAjHQgtgMAAgQQAAgKAEgcQAXATA+ABQBMAAArgtQgUBDgJAPQgJATgrAAQgpAAgpgKg");
	this.shape_94.setTransform(17,-60.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8089DD").s().p("ABwDFQAAgzgYgMQASgGBCgeQA+gdAHgFQAIAMAKAXQAMAaAAAKQAAAcgPASQgLANgLAAQgFAAAAgEQgBgFgFAAQgGAAgZAOIgYAMIhBAXQAJgRAAgUgAkBBLQgNgYAAhIQAAgVADgPIAciwQANAOA6AEQAzAEAZgEQgiC2gPAxQgLAogUARQgVASgnAAQgRAAgIgQg");
	this.shape_95.setTransform(25.3,-56.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFCC99").s().p("AgFEwQgdgSAAgUQAAgHANgaQAIACAKAAQAMAAAPgLQARgNAFgRIgBgDQgIAIgGADQgIAGgcAAQgpAAgZgnQgcgrAAhMQAAgcANgZQAPgdAUgHIAuBuQAVA0ATACIADgLQhMidgKiNQgIiJA9AAQAlAAAaB+QAwDkAUA/IACAIIgZgIQgUgGgLAAQgRAAgQAPQgRARgBAaQAAAHAdArQAgAuANgBIANgBQgggMgdhMQAAgPAMgLQAMgLAPAAQAeAAAWAcQAZAdAAApQAAA9glAbQgbATgsAAQgqAAgcgSgAh6DbQgygwAAhSQABgyAUgeQARgXAWgBIgPBAQAABHAcA2QAbA2AhABIgIANQgJAGgLAAQgYAAgfgdg");
	this.shape_96.setTransform(5.6,-66.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#72EBEB").s().p("AgBgCQAlgwgDgjIABgLQARATACAHQAGAPABAyQADAsgqAXQg1AUgbAPQALgrAvg4g");
	this.shape_97.setTransform(22.1,-29.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F0FF7A").s().p("AB/BDQAAgsgVgbQgVgdAAgMIgEgVQgFgUAAgSQAFgBAUgGQASgFARAAQAYAAAUA3IAPA5QAAAkgWAkQgTAcgZARQgHADgGABQALgSAAgggAibBTQgngWAAgPQAAgEADgIQAEgHAAgJIACgQIACgBIADgGQAeAoAaAOQAaANAwAAQAYAAAZgGQAhgJAHgQQgKAogYATQgUASglAAQg4AAgvgZg");
	this.shape_98.setTransform(17.6,-37.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8089DD").s().p("AkKCdQgZgXAAgsQAAgFADgLIAGgSQANAjBOATQBJASAWgMIAHgCQgXAygHAKQgKAMgdAAQhMAAgggdgACRAEQADgTAAgGQAAgdgIgcQgMgrgdgSQAJgCBKgWQBEgWAPAAQAPAAAHAOQAEAIABAJQgDARgHAUQgPAogWAVIg1AsQgsAhgHAIIgBABIAFgag");
	this.shape_99.setTransform(24.7,-36.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFCC99").s().p("AhICcQgQgGgMgQQAQACAFgIQACgEABgRIgIACQgJACgGAAQggAAgSggQgQgaAAghQAAgyArg2QA7hLBuAAQAzAAAjBCQAhA8AABGQAAAmgOARQgJAJgmAUQADgJADgWIACgeQAAg8gggwQgthEgEgKIgEAEQgCADAAAHIAdBEQAeBFAAA0QAAAdgLAQQgRAZgsgFIgDgCQAHgUAAgMQAAg7gNghQgEgMgvhYQgSAKAYA1QAhBGAAAvQAAAigQARQgMANgTAAQgIAAgJgEg");
	this.shape_100.setTransform(23.1,-9.4);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#72EBEB").s().p("AgpBcQAAgGgDgEQgEgogRgiQgTgmgbgLIBVgfQBBgZAKAIQARANAXAfQAXAfAAAOQAAAQgFALQhlAngoAYIgGACIgBAAg");
	this.shape_101.setTransform(21.8,-38.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#F0FF7A").s().p("AivDlQgUgXAAg9QAAhAAqgyQAug0A8AMQgtAOggA9QgcA1AAAoQAAAfARAdQAPAZAhAfQhHgcgRgSgAjKiYIgJABQBGgjAQAAQAfAAAbAnQAeApAAA1QAAAGgoALQgphrhUgJgACeiKIACgZQAAgjgUgaQgLgOgYgYIA+gMIAYAfQAVAdAAAYQAAAWgQAPQgPAPgVAAIgCAAg");
	this.shape_102.setTransform(19.1,-22.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8089DD").s().p("Ak7CzQgegkgEgrQgDgsAuhDQAvhEAeABQAeACAmAXQAmAYAPA3QhSAkgTAyQgRAlgCAuQgCAiAGAcQhCgxgZgdgADliHQAAgKgQghQgQgggLgLQAegHApgPQAkgNADAAQAUAAASAjQAQAgAAAYQAAAegIAKQgGAKgRABIgpABQgeACgcAKQAJgXAAgLg");
	this.shape_103.setTransform(19.8,-28.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#72EBEB").s().p("AggBmQgHglgfgbQgRgPgkgUQAigfBFgoQBDgnAMACQANABAYAXQAZAXADAbQADAbhcA+QhFAwgDAAIAFgEg");
	this.shape_104.setTransform(32.6,-32.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFCC99").s().p("AgZCUQgSgEALgEIAMgDIASgIQAFgDAAgGQAAgGgDgCIgFAAIgqAHQgjAHgGAAQhFAAAAhAQAAhtBYg+QA7gpAqABQApAAAXAcQAWAaAAAlQAAAKgBACQgGgHgXgUIgdgYIgEACIgBAJQAIARAgAfQASAUAAAmQAAAVgKASQgKAUgTAOQAGgZgcgsQgbgmgNAAQgGgBAAACIACABIgCAJQABACAXAaQAXAhAAAbQAAAagMARQgPAWgdAAQgGAAgPgCgACDAKQACgeADgKIAHAJQAWAbgJAgQgJAegVAAIAFg6g");
	this.shape_105.setTransform(46.3,4.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F0FF7A").s().p("AhhExQgVgUAAgRQAAhHAnhGQAohGAngBIA9APQguAqgUBBQgOAsAAAgQgBAQAMAYQAGANAEAKQAAAKgBAAIgJACIgNABQgwAAgcgZgAhyhTQgdgegsgFIAzgpQA5AcAUAWQAWAZAAAoQABAKgjAVQgVgwgWgWgACYjxQgjg+gaAFQAzgdgEgCIACABQAFABAWAcQAVAbAAAYQAAALgDAFQgDAFgQARQgKgOgEgRg");
	this.shape_106.setTransform(30.4,-14.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8089DD").s().p("AkLEPQgvguAAgtQgBguAng+QAng/AlgPQAkgRAZAWQAYAUAqA/IgFAHQgDAEgDAAQgEAAgKgDQgJgDgEACIgCAIQAHARA7AlQhIBGgFBvQhbgJg0g0gADUjIQgQgjgggXQCFhTgQALQgQALgIAEIASgHQAagKAJAcQAJAbgGAfQgGAegMAMQgHAHhDAoQAFgOgOgdg");
	this.shape_107.setTransform(29,-22.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#8089DD").s().p("AlACUIARgEIAagLQgRAOgOACIgFAAQgEAAgDgBgAB6AaQgLgagbgZQAugMA2ggQA2ghAwguQAVAaAOA1QAAAhgVASIAEgGQACgKgEgDQgFgBgCgCIhIBHQg8A7gdATQgBg1gLgeg");
	this.shape_108.setTransform(16.8,-38.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F0FF7A").s().p("AiiBvQgYgHgNgFIA5g5QAWgbgDglQgBgLAHgpIAIgqQBaA0geBcQgMAlgaAaQgaAagZAAIgYgGgACVAmQAAgsgWgcIgegjIgKgHQAYgKAKgBQAgABAZAhQAdAkgJAsQgEAPgKALQgGAFgjAcg");
	this.shape_109.setTransform(8.8,-32.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#72EBEB").s().p("AhmBqIgMgBQAlgUAUgyQARgoAAgwIgFgZQgFgXgDgHQBhAGAmApQAhAjAABIQAAAkgyAOQgoANhOAAQgTAAgegDg");
	this.shape_110.setTransform(10.5,-30.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFCC99").s().p("AAJD+QgYgHgLgKQgMgLgYgqQgYgugEgEIgLANQgBAQAQAcIAeAuIgIgGQgkgQghhOQgmhdAAh0QAAhhAvg2QAhgkAaAAQAUAAAnAfQAnAgAnAwQBkB5AABiQABAGgEAKIgEAJQgBgEgMgSQgLgRgEgDIgEACIgBAIIANAoQANAoAAAkQAAA0gzAAQgaAAgbgpQgqg/gJgKIgJAMQACAMAfAtQAjAwASAMQgFADgVAFIgUAFQgFAAgUgGg");
	this.shape_111.setTransform(-21.5,-51.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#72EBEB").s().p("AhzAAQAmgFAigvQAcgmAEgYIgCgIIBWBOQArApAAAHQAAA3gaAjQgPAUgUAJIiqh7g");
	this.shape_112.setTransform(14,-62.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#F0FF7A").s().p("ACKFVQAggRAVg1QAVgxgKgQIAxAgQAYBmhbAcgAhQC7IgfglQAdgCAZgbQAhgjAOhIQAPANANAPQASAWAAARQAAAjgiAmQggAngiAAQgLAAgFgGgAj0jtQgBgWAAgOQABgIgFgBQgGgCAAgTIABgMIACgDQACgBAEAAQAYAAAJgSQAFgJAHgVQAHARAIAfQAJAeAAAEQAAAUgOAMIgyAnQABgBABAAQABAAAAAAQAAAAAAAAQAAAAAAABIgBAAIgCAAIAAACIgDgZgAjtk+IACgBIgGABIgLAAQACACANgCg");
	this.shape_113.setTransform(7.2,-82.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFCC99").s().p("AhjC0QgOgxgZiCQgdiBAwhLQAng+BDABQA5gBAyBJQA4BQAAB3QAAAigJAOIgSAPQgKgKgQguQgRgxgDgFIgEASQAWBqAFAgQAIArAAAcQAAAggJAPQgKATgWgBQghABgQhEQgeiJgHgUIgHAIIgDAFIAhCcQgYgHgXgfQgTgbgEgUIgPhQQgCgJgFAAQgDAAgCACIgFAIQAIBgAgAuIAUAaQAJAOAAARQAAAMgDAIQgEAOgIAAQgfAAgYhWg");
	this.shape_114.setTransform(-29.6,-124);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#8089DD").s().p("AEDFFIh7hBQAtggAMgVQAPgZgHgpIgCgMQA1AhA4AdIA4AaQAYAMAAAJQAAAygUAmQgTAigVAAIhFgjgAkVhCQg8hSgyhkQAGgBAEACIgFgLQACABAHAAQATAAASgWIAbgjIAXgNQAVgMARgUQAKAmAoBDQAxBUA0AuQgDA7ghAnQgeAjgoAAQgRAAg5hLg");
	this.shape_115.setTransform(14.3,-70.7);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFCC99").s().p("AAZD4QgUgNgLgSQAOABARgKIAQgKQAVAvA1ABQAdAAAAgPQAAgJgegGQgjgFgNgbQATAAAKgVQALgXAlgCQAjgCAVAWQAPARAAAOQAAAnguAXQgkATglAAQglAAghgWgAgyChQgjghAAguQAAgIAFgnQABgHAOgNQAIgIAGgFIgBAcQAAAtAZAwQAXApAYAPIgHAHQgGACgKABQgWgFgZgXgAACCBQgcglAAg5QAAgSAIgOIAIgMIAAgGQADgGAPAAQARAhAbAhQAYAdAMAIIABgGQgVgwgwhVQgjhNAAg5QAAgiAMgWQAJgWAPAAQAbAAAQAlQALAZAOBFQAkCuAzBQIhKAAQgEgUgHgFQgEgCgEABQgEAngFAMQgIARgTAAQgVAAgYgdgAipgMQgshIAAgtQAAg1APAAQAigBAnBcIAgBbQAAAEgJAXQgKAYAAAFIABAcQgDgKg3hWg");
	this.shape_116.setTransform(-41.2,-171.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#F0FF7A").s().p("AE5G8IgIgCIgiglIABAAQAfAKAegmQAagfADgbQgBgIAPATQANATAAATQAAAkgXAXQgTASgTAAIgPgBgAApCHIAKABQA1AHAcgvQAUgfADgqIAyBFQgEgDgXAgQgWAhgXAKQgXALgRgCQgRgDAFALIAAAAIgogugAlplJQgRgfgBgRIAiALQAFAAAKAEQAKAEAFAAQA1AAApgaQAjgWATgmIAZA3QAGAOAAADQAAAQgyAfQg9AkhFAAQgXAAgWgogAmElyIAEgEIgDAFg");
	this.shape_117.setTransform(-0.6,-105.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#72EBEB").s().p("Ah8grQBTgZARgcQARgcAEgOICAC5QADBYhjADg");
	this.shape_118.setTransform(21.4,-81.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#8089DD").s().p("AC5FBIABgBQAaADAYgeQAVgbAHgmQA1BEBpB/QgGATgfANQgkAQgGAHIgJgJIAIANQAAAGgCAEQgDAEgEAAQgug0hmh7gAmlmbQA3gFAugbQAngXASgdIB+CvIBaB5QApA5ACAJQgBANgOAfQgPAhgKAGQgLAGgZAHQgeAHgFACQkhlngRgYg");
	this.shape_119.setTransform(13.7,-91.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgDgFIAHAGIgBAFg");
	this.shape_120.setTransform(47.6,-43.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFCC99").s().p("AAkFaQgkgqgWg+Ig2htQhEjIgXhHQgahUAAg2QAAguANgHQAMgHATAYQArA5AABNQgBAFgFAUQgEAVgBAFQABBvAhBZQAkBgAvAAQAFAAATgLQAPAXAbAPQAZAPAYAAQAGAAABgBIABgDQgHgIgigYQgpgdAAgRQAAgpA7AAQApAAAcAzQAZAsAAAsQAABPghArQgcAkgpAAQgWAAgigngAg5BRQgihRAAiKIAEgZQAFgXANAAQAeAAAIAHQAGAFADAXQAHBMAwBRIABgGQgFgggciCQgXh2AAgTQAAgvAUgWQAMgQASAAQASAAAJBKQAQB6ADAOQAvDRAIAdIgtAFQgbACgSAHQgDgSgKgbQgLgggFgGIgGAEIgBABIAAAFQAAAaAFAnIAFAkQABASgCAGQgEAOgMAAQgbAAgag/g");
	this.shape_121.setTransform(-27.8,-99.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8089DD").s().p("AEGDBQgdABiOgPQAPgNAPgqQATgxgMgWQBCAXBGAJQAVAFAIAKQAIAMAAAdQABAZgIAMQgEAIgTAPQgCgIgHAAgAksAWQAggWAThWQAShWgQgcQAlAcAZAlQAhAxAAAyQAABMgpAwg");
	this.shape_122.setTransform(25.2,-59.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F0FF7A").s().p("AC2EPIgSgFQAKgNARgeQAQgdgBgRQgCgRgJglQAHADAaAEQAXAFAEAOQAEAMAAAQQAAA4gWAYQgPAQgZAAQgGAAgJgCgAgbDGQAYgfAIguQAHgdAAgcQAAgQgJgrQAtAYANAbQAIAPAAAgQAAAMgGAXQgHAZgGAGIgfAgQgMALgHAAQgHAAgUgOgAj7BxIgHgGQAkgCAhg3QAhg2AAg5QAAg3gagwIg6hsQA0ATAiA1QAlA7AABMQAABUgjA6QghA0goAAQgEAAgWgQg");
	this.shape_123.setTransform(10.5,-69.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#72EBEB").s().p("AhRA7QAtgnAKgWQAJgZgDhGQApAZAoAQQAUALABAlQABAkgTAjQgaAjgBAAQgOAAhogng");
	this.shape_124.setTransform(21.1,-53);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#72EBEB").s().p("AgxA8QAPg8gpgyQgIgIAHgCQAKgCAzABQAsABAVAFQALACABADQAGAJAHAWIAGATQgIA3gKAAIgvACQgrACgXAEg");
	this.shape_125.setTransform(18.6,-49.4);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#F0FF7A").s().p("Ai7DcQgigpgLgPQgOgWAAgRQAAgkALgUQAQgiAygUQBWghAdAGQA1AKA3BlQgbgXgcgNQgigQgeAAQg4AAgcAjQgkAtAPBgIgKAEIAAAAQgBAAgGgHgAgfiZQgqg4gbgCQBKgmAhA6QAMATAGAaIADAXQAAASgHAPQgIATgNACQAJgbgog5gACyhgIAMglQADgMAAgIIgBgSQgCgSgIgJQgRgmAgANQAgAOAIAVQAKAZAAAIQAAANgLAXQgMAagMAAg");
	this.shape_126.setTransform(9.2,-33.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFCC99").s().p("AA9DcQgJgEgEgBQAKgDAJgVQAKgYAAgdQAAgKgGgHIgEgCQgHAHgEARIgIAfQgMAlgkAAQghAAgjgaQgxgkgYhLIgFgSQAHATAVAaQAVAZAJAFIAIgBQACgCAAgHQAAgFgshIQgwhMgLgiQgEgLgFAAQgEgEAAgtQAAg1AqgbQAbgRAWAAQAaAAAyAfQAwAfAyAvQB8B0AABeQAAAJgDAKQgGATgPAFQABgIgCgQQgDgVgFgIQgDAFgDAYQgFAggDAPQgQA+g4AAQgFAAgKgEg");
	this.shape_127.setTransform(12.8,-4.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#8089DD").s().p("AldAZQAAgeAfgxQAjg4AjAAQA7AAAiA0QAhA1gLBIQgVgMhDALQhLANgiAlQgHgUgMhHgAEoAyQACgCAAgHQAAgGgRgFQgjgLhxgTIARgPQAJgMAAggIgFgXQgHgXgFgJQASgBAzAJIB7AYQAFALAFATQAGAWAAANQAAAbgTAUQgRASgUACg");
	this.shape_128.setTransform(19.9,-43);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFCC99").s().p("AgTCGQAIgFAHgIIAAgJIABgBQgBgBgGAAQgFAAgRAEQgSAFgFAAQguAAgZgiQgSgaAAgcQAAg6Aog1QAqg5A2AAQA+AAAvAnQAsAlAAAoQAAARgIAPQgQgjgkgfQgcgZgQgEQgJABgBAEQAsAuAVAbQAYAfAAATQAAAcgQAMQgGAEgdAJQgEgbgUgjQgWgogXgGIgDgBQgCAAAAAGIAaAfQAbAlAAAXQAAAegRANQgOAKgSAAQgHAAgLgEg");
	this.shape_129.setTransform(41.3,-11.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F0FF7A").s().p("AgFCJQAAgPAFgmQAJgmAFgKQAUghAxgWQAPAAAQAFIAeALQgnAmgZAkQgtBFAXBFQg/gOAAg6gAh1iuIgXgMIAngVQARgEAeAWQAjAcANAuIgkARQgkg3gngVgAiPi4IABgBIAEADIAIAGIgNgIg");
	this.shape_130.setTransform(19.4,-26);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#72EBEB").s().p("AgtgFQgLgPgVgWQBNANBOAdIhlArQACgVgYgbg");
	this.shape_131.setTransform(23.1,-42.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#8089DD").s().p("AhaA6QgqgqACgmQABgnAMgmQAQg0AYAAQAaAAAZANQAlATATArQAJAGgRgIIgWgLQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQgBACAAAHQAAAEA2AhQA8AjAWACQghAjgNAVQgVAkABBAQhzg0gpgqg");
	this.shape_132.setTransform(10.1,-27.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFCC99").s().p("AhICcQgQgGgMgQQAQACAFgIQACgEABgRIgIACQgJACgGAAQggAAgSggQgQgaAAghQAAgyArg2QA7hLBuAAQAzAAAjBCQAhA8AABGQAAAmgOARQgJAJgmAUQADgJADgWIACgeQAAg6gjhAQgagugUgSIgEAEQgCADAAAHIAdBEQAeBFAAA0QAAAdgLAQQgRAZgsgFIgDgCQAHgUAAgMQAAg7gWg8QgTgvgXgaQgSAKAYA1QAhBGAAAvQAAAigQARQgMANgTAAQgIAAgJgEg");
	this.shape_133.setTransform(23.1,-9.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#72EBEB").s().p("Ag0AXQAAgIgFgOIgSgsICXAbIg/AbQgsAVgOAHIgJAFg");
	this.shape_134.setTransform(22.6,-33.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F0FF7A").s().p("AgyCxQgVgWAAg9QAAhBAqgvQAsg2A9AMQgtAPgfA8QgcA0AAApQAAAfARAdQANAZAhAfQhFgcgQgTgAgHiqQg4gqgVAJIAsgUQAWAFAbAAQAdABAMATQAMATAGAOQAHANAEATQAGAXAAAGQAAAFgoAMQAEgng4gsg");
	this.shape_135.setTransform(6.7,-17.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#8089DD").s().p("AhTBZQgfgkgGgoQgGgmAzhHQAyhIAZACQAYACApAXQApAWAPA6QhSAjgSAwQgSAlgCAuQgBAjAFAbQhAgxgYgdg");
	this.shape_136.setTransform(-3.2,-19.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFCC99").s().p("AgZCUQgSgEALgEIAMgDIASgIQAFgDAAgGQAAgGgDgCIgFAAIgqAHQgjAHgGAAQhFAAAAhAQAAhaBLhCQA+g3A0AAQApAAAXAcQAWAaAAAlQAAAKgBACQgGgHgXgUIgdgYIgCAAIgCACQgBACAAAHIAdAnQAdAtAAAWQAAAVgKASQgKAUgTAOQAGgZgcgsQgbgmgNAAQgGgBAAACIACABIgCAJQABACAXAaQAXAhAAAbQAAAagMARQgPAWgdAAQgGAAgPgCgACDAKQACgeADgKIAHAJQAWAbgJAgQgJAegVAAIAFg6g");
	this.shape_137.setTransform(46.3,4.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F0FF7A").s().p("AghDcQgVgUAAgRQAAhHAnhGQAmhEApgBIA8APQgtAogWBBQgPAsAAAgQAAAQAMAYQAGANAGAKQAAAKgBAAIgLACIgOABQguAAgbgZgAgyioQgdgegsgFIAzgpQApgDAYAiQAQAaAQA6IggAfQgWgwgVgWg");
	this.shape_138.setTransform(24,-6.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#72EBEB").s().p("AgTAGQgOgagtgmQBVALBIAsIhPA9IgTg0g");
	this.shape_139.setTransform(28.5,-26.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8089DD").s().p("AhWByQgugvAAg8QAAggAshJQAvhLAZAAQAyAAAdAdQAJAKAjA9IgFAGQgDAEgDAAQgEAAgLgDQgIgDgEADIgCAHQAHARA7AlQhIBEgFBwQhZgJg1g0g");
	this.shape_140.setTransform(10.8,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},20).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},3).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121}]},1).to({state:[{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129}]},1).to({state:[]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).wait(1));

	// Layer 2
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AA0G+QgfgaAAgOQAIgcAIgLIgWgVQgBAQgIAFQgGAFgRAAQgRAAgKgIIgYgcIgYgaQgGgGgCgIQgCgGAEgXQAEgZgBgHQgBgLgegXIhAgzQhbhRAAhUQAAgnAzg9QA3hCBlhLQBlhMBTg2QBuhGA4gTIAACAQiTBxhHBAQhbBTgkA9QBYBcAHgBQAIgBAAgBIARgMQAQgMAlgEQAkgEAgAhQAaAcAAANQAAAFgDAOQgEANAAAFQAAAHAPALQAJAGAdAdQA1BAgWA2QgaBBgLAKIguA4QgcAgggAAQgqAAgmgeg");
	this.shape_141.setTransform(23.4,-6.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AhyGKQgggig6hnQgLgUgEgUQgDgPgWgPQgXgPgHgRQgIgSAHgPQAGgPAGgLQAVgkAHgfIAJgwQACgLAshXQAshWBchJQBahKClhVQAWASAOATQAgAoAAAlQAAAXgNANIghAWQhwBLgXATQheBRgfBjQAqARAaAvQAeA3AEADQBmBRAAA1QAAASgOAgIgVAtQgNAfgKALQgNARgTAAQgOAAgUgEQgLgCgKAFQgNAGgTAGQgPAEgEAAQg3AAgogqg");
	this.shape_142.setTransform(29.6,-7.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AijF/QhSgQgHgEQgxgmgSgmQgRgkAAhDQABgqASgrQAcg9AzAAQARAAAsAKQArAJAFAAQAPAAAtgpQAsgnBOhZQBEhBBAh7IAmhHQASgcAKAAQAmAAAZAjQAXAcAAAbQAAAZgsBcIgtBmQgWA2g8BIQg9BLgjAaQgSAOAEAAQADAAAEAPQAEAQAAAOIgLAiQAUAzAAALQAAAggqAlQgqAngzAAQgUAAhUgRg");
	this.shape_143.setTransform(23.8,-13.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AmcHuQgUgBgdgDQgjgEgIgGIg7AKQhCgEglguQgjgsAAhJQAAheA/gzQAsgjAmAAQAmAAAUAIQAQAKAJABQAUADAYAGIAbAIQATAKAbAfQAXAZAHAAQB+AABFihQAUgvAXhPIAOgyIAEAAQAEAAAFgEQAHAEAQABQAPgEAXAQQAUAMARATIAGgHIAIgHQACABAEgCQADAAAAAGQAAB1g0B6QgyB6hEA0QhDA1g/AbQg+AagbABQgaAAgSAQQgSAPgTAAIgCAAgAK6nsIAEgBIgBABIgBABIgCgBg");
	this.shape_144.setTransform(49.4,-24.1);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AmNDOQghhLAAhYQAAhlAqgyQAjgpA8AAIAcAEIAcADQAiAAArAuQAzA3gRBAIAoAAQDyAADZlMQAGgGAGAAQADACADAEQADAEAAADIgJAPQAuAsAAAyQAAAhgIAeIgSA9IACAHQgcBShVBkQhdBuhXAkQgfAMhIAQQhNASgfgCQg3gFgpAFIg8AFQhhABgvhug");
	this.shape_145.setTransform(13.7,-25.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AlJE1QhbhRgBitQAAgUAGgdQAEgXgBgTQAAgNAGgfQAJgvARgkQAag5AeggIAeghQAWgoAdgWQAbgUAaAAQAsAAAfAvQAjA0AABWQAAAwgnBuIgwB4QAZAOALADQAaAJAjAAQBOgBBpg4QBkg2CSh2QAAADAfAqQAfArAAAiQABAtgSATQgRAThZBTQhYBTh9A0Qh7A0h7AAQhkAAhEg7g");
	this.shape_146.setTransform(16.8,-47.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AlOEVQhFhFAAhyQAAgeAJgrQAJgpAJgNQgfg8Alg3QAEgCAihHQAFgLALgdQAMgbAQgTQAsg0BfAAQBKAAA7BAQAxA2AAAoQAAA7gkAfQgaAVgeAAIgPgBIgKgCQABARgdASQgfATAAAQQAAADAIASQAIASAAADQAAAJgKALQgSARgjAFQALBBAhAZQAeAYA9AAQA2AACBgeQCXgiBIgoIAFAJIATATQAPANAIAVQAHAWgCAyQgCAyiyAwQiyAwiBAJQioAAhShTg");
	this.shape_147.setTransform(17.2,-66);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgLEWQgLgDgLgGQgXgMgUgTIgMgUQgLgTgEgDQhRgqgugjQhYhAAAhJQAAhMBcg8QBdg7BiggQBggfBZgbQBYgbA3gLIAIABQAAAPgLAGQARANAIAbIAEAaIgEAbQgEASAEALQgQAHi7BHIjeBUIBhArQAJgDAOgFQAHAAAqANQArAPAGgCQAOgGAEAAQBDAAA1AgQBCApAABJIgjBjQgDAMgFAFQgLAKgbADQgPABgSAYQgSAWgkAAQgMAAiPhAg");
	this.shape_148.setTransform(26.6,-30.1);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("ABBGnQgcgHgNgWIgUg0QgRgugOgSQgLgOgZgLIgpgTQgwgYADg0QhJhAglgkQhBg/AAhBQAAh7DXhfQBLghB8gpIDMhBIgBAHQgDAIAAAFQAAAIAQAUQAQAVAAAZQAAAdgLAMQgHAJgNABQgOACiuBVQisBUgwAfQAeAdAdAVQAWARAFAAQARAAAagOQAdAAAeANQAyAUALAxQACAGAwAUQA7AXANAHQBHAqAABJQAAAXgKATIgRAYQgFAIgOAmQgKAfgPAFQgrAQgfAZQgRAMgqAAQgmABgSgFg");
	this.shape_149.setTransform(22.8,-16.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AFSM2QgwhFhaiNQheichoixQjLlfhCiTQgvgZgTg/IgOgrQgHgVgLgFIgugUQgmgXAAgvIALgcQARghAYgXIANgjQALgeAVgHQgXglgHgRQgQgoAAgxQAAg6AYgcQASgTAWAAQAwAAAiCQQAYCUASAWIAMARQAEgBALAAQATgBAUANQAOAKAGALQAJAOAGAgQAGAlAXAzQAPAvAbBAQAyB+B8EFQCwF0BcChQAbAsAEAJQADAIABATQALAhgBACQABAOgMATQgMARgaAcQgHAIgFAJQgBADgJAAQgFAAgjgxg");
	this.shape_150.setTransform(12.3,-122);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAEKfQiJg8hHiEQibkhAAhgQAAgBgLgDQgMgJgLggIgIg3QgIg0gHgKQgIgKgQghQgFgKgTgDQgZgFgSgmQgRgkAAgoQAAg/AngmIAggeQAZgWAOgWQAPgVAXgDQAWgDAAgCQAAgkgLhEQAAg+AQgoQAYg9A5AAQA9AAAABRIgKBQIgLBQQAACNALAtQAHAaASAEQARAEAFArIAMB+QAIBSgBADIgHAsQgHAmAdBNIAlBXQATAtAhAzQAdAsAQAPQBFBDBGAdQBBAcBNAAQAbAABEgMIBwgUQAKAEAAAKQAAAGgCABIgGAAQANALAMAVQAMAUAAAIQAABCg6AiQhHAoilAAQh8AAhngsg");
	this.shape_151.setTransform(4.8,-105.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AiNIcQgwgog2hkQgGgLgbhRIgghfQgDgHgZgXQgYgWgCgGIgchUQgXhFgEgPQgCgMgHgGQgtgRgPguQgQgwADg2QADg3ArgXQANgHAkgJQAmgKAXgLIgNhtQgFhJASgnQAYg1AsAAQAjAAAKBDQADAQAHCRQAKBoAOA5QAvAVALAQQAJAMAIA0QAEAZAIBOQAIBTgCAJQgGAjAgBhQA9CUAUADQAegIB7hEQCXhTBHg/IAdgaQAPgNAFgCQAFAJAJAFQAFADASAGQAYAJAHAWQAEALAAAYQAAAGgHAUQgMAjgDAPQgCAPgLAPQgLAPhyBOQhxBOhVA0Ig/AfQgkARgrAAQhVAAg4gug");
	this.shape_152.setTransform(8.9,-71);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgiHWQh6gEg7iGQg8iFgbgHQgcgHgNgVQgDgFgDgaQgDgfgIgXIgHgWIgPglQgMgagZgsQgPgZAAgUQAAgyAQgbQAOgWAbgLIAtgXQAhgSAPgDQgHglAAgUQAAhDASgrQAYg1AvAAQAkAAADAwQgCBTgBBEQAAAZAOBDQAOBJALAJQAYATADAUIAHB1QAAAKAHAIQAFAIAAAUQAAANgIAKIgJAIQAAAQAqBCQAtBEALAAQAMAABvhQQBwhQA+hBQA/g+A1g7IAKABQAAASgFAEQgFAFAAACQAAAGAGAKQAGAKAAAMQAAAPgCAtIgDAwQAAAGAFABQAHADADADQhtChh4BbQhzBYh0AAIgJAAg");
	this.shape_153.setTransform(12.3,-51.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhaIfQg1gdguhDQgvhCgSgtIgshrQgbg/gGgEQgEgDgNgFQgPgKgJgXQgIgVgRhJQgCgJgXgnQgQgeAAg1QgWgmgHgiQgGgjAVgpQAVgoA1ABQATABAggcQAdgZAZAIQAMjmBTAAQA4AAAABBQAAAwgjB+QgkB/AABPIAwCaQAEAjAJAwQAJAxAbA2QAaA2AtAqQArAqAjAAQAjAAAfgOQATgJAzgbQCBg9BJg3QAlgdATgWIAIABQACALgBADQgEAOgUAKQAWAOAPApQAAAWgXAmQgWAlAJAFQADACADAAIgVAUQAkgmg8A8Qg8A9heA6QhfA6hcAHIggABQhDAAgsgXg");
	this.shape_154.setTransform(12.2,-71.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("Ag8JRQhNghgpg8QhUh6gkiAQgShBgEg3QgxgQgGhVIgDg+QgDgggJgMQgngwgDgFQgKgUAAgwQAAgRAHgYQANgrAdgQIAagLIAegMQAPgIAcgZQATgSAUAAQALAAAKAKQAliWAEgKQAkhkA+AAQAcAAANAXQAIAPAAAWQAAAPg0CWQg0CVAAA5IAMAMQANALACAEQAGANAAALQAAAFgEATQgEASADAdQAEAdACAgQADAegJAQQgIAQgBAhQAAAhAIAkQAPBJAyBaQAmBEAxAWQAoARBUAAQBBAABHghQApgTBWgrIAIABQADABAAAHQAAAMgUAJQAOABALAOQALAPAAASQAAAXgRAeQgQAdgQAKQAHAEACADQgpArhlAkQhiAkhIAAQhSAAhFgeg");
	this.shape_155.setTransform(13.3,-94.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("ACDK3QgIgBg2gNIg1gMQivg5hAiyQgbhKgVh+QgNhMgRihQgggYgGgOQgGgPAAg7IAHhvQAAgQgHgRIgOgeIgVgrQgQgiAAgSQAAgkAZgjQAZgkAfAAQAGAAAPAHIAPAIQAQAAAQgKQAPgJAYACQAfi3BFgUQAagHAUATQATASAAAbQAAAHgOBBIgRBJQgIA4AAAuQgBAuAVAhQAUAhgBAcQAAAdgEAQIgOBMQgGB6gIAJQgIAAgDAIQgEAOAABMQAADlBMBiQBDBYCVAAQAOAACNgYQANALgIAJQAOAIAKANQALANAAALQAAAcgVAfIgvA/QgJANgcAFQgYAFgvAAQgfAAg7gEg");
	this.shape_156.setTransform(20.6,-110);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("Ag2HbQgZgKgUgKQgQAAhHhVQgPgUgchjQgchkgFgIIgZgeQgSgaAAgVQAAgVgFhAQABgMAEgwQACgLgPgcIg0hjQgZgzAAgZQAAgfATgbQATgcAYAAQAqAAAYA8QAOAkAQBdQgFhSgFgUQgDgNgBgzQABhFAignQAagdAcAAQATgBARAUQAWAaAAA2QABAygIApQgIAkgCAOQAThQAVguQAVguAVgBQBBABAABHQgBAOgbBrIgmCBQAlgWANABQAVAAAOANQAQAQAAAbQAAAWgTAhQgWAggcASQgRAIgEAEQgIAGAAAVQgBAKgGAKQgHAKAAADQAABAATAqQAcA8A8gBQAbAAAqgSQAngRAegWQAngbA+hLQAggkAYgfQAKgBAAACIACALIgTAfQAeAUANAwIAJAuQgBAVgRAoQgNAhgIAJQhGBbhcAyQhWAuhXABQgagBgygTg");
	this.shape_157.setTransform(17.1,-62);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("Ai9HbQhehrAFiwQAAgXgTgWQgUgZgCgIQgFgfgEguIgMhGQgMhhAAiHQAAhqAjhUQAfhKAhgHQAYgFAbgVQAVgQAqAAQAVAAAOAMQATAPgDAbIAMgCQAYAGAJAQQAHANAAAXQAAAdgdBQQgeBPAABQQATA8AAAjIgGArQgFAnAAALIgBAqIgBA2QAAAagGASQgHASAAACQACBDAUBAQAqCBBeAAIAvgFQAtgFBNghQBMghAigVIACACQACABAAAGQABANgRAFQAUAQAFAIQAFAIAAAPQAAANgYAvQgXAvAAAFQAAAIgrASQgrARAAABQAAAHg3APQg+AQgxAAQiXAAhchog");
	this.shape_158.setTransform(20,-91.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AiuEiQgjgagug8QgJgMgPgNIgbg9QgMgbAFgaQAFgZAAgFIgEghQgGgggDgOIgFgUQgMgXgyg4QgHgIgHgWQAAgZAPgNQAOgNASAAQAlAAASAdQAfAxAWATIAEAAQABAAAAgGIgGggQgGgcAAgpQAAggAVgeQAYgkAiAAQAUAAAPANQARAPAAAWQAAAMgNAzIgOAxIACAQIADACQACACAGAAQANAAAMgYQAHgPAPgoQAhhPAwAAQA3AAAAAvQAAAUg2BXQg4BWAAAfQAAALANAJIAfAPQApAUAAAuQAAAdgZAQQgaAPgZgIIgIgCIgJgDQAPAMAnALQAtAAA4hFQAlgvA9hnQBFh5AVgeQAwhFAgAAQAfAAAOAfQAMAcgIAYQgRA7gNAhQgUA2g5BtQhUCig+A+QhOBMhtAAQhLAAg7grg");
	this.shape_159.setTransform(18.5,-30.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AjJEcQgLgRgKgbIgPgrIguhtQgdhSAAg2QgBgiAUgUQAOgQAOAAQAKAAAGACQAAg1ATgaQARgXAfAAQASAAAQALIAVAQQAGACAeAEQAZAFAMA9QAKAxAEBkQAkhVBfhsQByiBBsgpQAAALgBADQgCAKgNACQAFAHADAWQADAUABAOQAACQi5D7QhMBogwApQgvAmgtAAQhKAAgjgyg");
	this.shape_160.setTransform(23.5,-26.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("Ag9GKQgegsgVgbQgYgggHgEQgvgXgbghQgZgcAAgVIADgaIADgWQgEgLgMgQQgKgOAAgPQAAhTAzhTQA2hYBgg8QA6gkB+hUQBohBAYgDIAMALQgIALgMAGIAIANQAEAHAAAGIgPBBQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABAAQADADAAAMIg8AuIg9AtQgyAhg8A7QhGBIgDAhQAeAUAdAeQAaAgAaATQBtBSAABPQAAAagJAJIgQALQgMAKgEATIgEAWQgKAYgyAXQgpAUgPAAQgiAAgbgfg");
	this.shape_161.setTransform(28.9,-15.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AkQEIQgtghAAg8QAAgtAag0QANgZAMgUQAAgSgGglQgHgnAAgNQAAgTA6heQA/hlAfgBQAyAAAsA6QAuBAAZBuQBRgSBchAQAwghAwgrQAEAQgIADQgJAEAAAJIAMAgQAMAfAAAMQAABOhFA1QgXARgmAVIg5AeQgUANgeAIQgUAGgFAJQgFAKgIAaQgIAWgDADQh7BthYAAQg3AAgmgdg");
	this.shape_162.setTransform(20.7,-34);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AhTFWQg3hYAAiXIAOjHIgPgiQgJgLgjgFQgjgGgNgLQgNgLgCgSQgCgRABgDQABgEgJgaQgJgaAAgFQAAgFADgGIANgbQhCAKgrgKQg0gNAAgoQAAgRAogWQA1gfBTAAQAfAAAxANQBRAVAyAKQA3ALAXAiQAVAfAAA5QAABrgWA2QgXA2AABXQAABZAYAzQAYAvAlAAQAgAAAzgdIC/htIAHACQACACAAAGQAAAGgEABQgFACAAAFQAAAFAKAPQAJAQAAAZQAABQhbBTQhnBdiJAAQhoAAg6hdg");
	this.shape_163.setTransform(10.4,-62.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AiRHjQhZhLAAimQAAg5AQhEQAPhDAAgeIgHgGQgHgHAAgLQAAgFAFgOQAEgOAAgFQAAgOgSgLIgngYQg6gpADg6QACg5ATgDQATgCALgLQALgMAJgSQADgGAagKIhHhdQglgvAAgcQAAglATgOQAPgMAjAAQAnAABEBbQBHBoAaAbQARAVAYARQAZAQALAIQAlAaAAA0QAAAmgSAyIgnBgQg4CMAAB7QAAA8A0AhQAkAYAhAAQA/AABMgiQArgTBBglQAEAAAAAKQAAAPgEACQgIAAgGACQAdA1AAAWQAAAthVAuQhdAyhzAAQhwAAhFg6g");
	this.shape_164.setTransform(19.4,-82.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AjcGXQgtgeAAg/QAAgdASgxIATgwQglgHglg4Qgmg5AAg7QAAgwATgpQAXgtAgAAQAKgBANAKQAFgJARgJQAOgJAGAAIgDgMIABAAIAFAFQgKgMgFgjQgEgbABgbQAAhVAUgwQAVgvAkAAQAxAAAWA9QAKAbAXB4IAVB9QALA3APA1QAWBGANAAQAQAABzgdQBxgeAVAAIAPAAIgBANIgLABQAQAIAFAHQAGAFAAAMQAAAKghBMIAagNQiCCYh9BKQhsBChfAAQg9AAgkgZg");
	this.shape_165.setTransform(19.7,-58.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Ag6E4QgPgNgHAAQgTAAgHgCQgigLgPgMQgZgTgegQQglgSgwgwQhChDAAg2QAAivD8hYQBIgZCTgjQCUgiA4gUQgGAPAGAJQACAEAPALQAfAYAAAuQgLAqgGAIIAMALIisAtQiQAmg5AwIALAAQBRgRAQgFQA6AAAqA2QAuA9AABjQAABihCANQgjAHgRAMQgMAJgOAAIgxgDQgPAAgSALQgQALgLAAQgdAAgOgOg");
	this.shape_166.setTransform(18.7,-23.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AB/FzIgVgPIhQgGQgRAWgJAAQhfAAgYgnQgKgVgFgIQgKgPgVgFQhJgOgzgwQg3gyAAhDQAAg5A7hGQA8hIA9grICQhkIBag1IBdg2QBCgnAFAAQASAAAYAZQAYAaAAATQgBAGgDARQgEASAAAGIAGAEQAGAEgBAEQAAABl6EtQAPAPAbAIIAmgPQAjAIAaAIQAQAGAEAAIApgSQAvgSAgAAQA6AAAlBbIAbArQARAaAAAlQAAAWgPAPQgNALg2AiQgJAGgrAlQgYAVgdgBQgKABgVgOg");
	this.shape_167.setTransform(29.7,-16.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AigEaQhygigjgIQgmgJgthXQg4hsAAiFQAAhVAlg/QAnhAA0AAQAqAAAxApQBGA9BFCLIATAvQALAaAPAQQArAsB1AAQA9AABvhBQA5gfBDgsQgBACACAGQAEAHAAAFQAAADARAlQAQAjAAAIQAAAggpAyQgpAwhZBJQhaBJh2AFIggABQhjAAhjgcg");
	this.shape_168.setTransform(3.9,-48.7);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AEQIMQg+gfhrhGQhLgxhDg7QhehRhBhWQgyhBgeg3QgQgcgSgnQgDgHgFgdQgCgOgVgFQABAhgGARQgHAXgVAAQguAAgpiTQgliBAAhgQAAhZAvg6QAtg4A/AAQBkAAA7C1QAQA0AEAVQAAAMACAGQAWA9AJAeQAKAkAAAWQAAA0BABeQBTB6CvCcQA5AzBWA0QAvAcArAUQAgAOAiALQAEAIgCADQgDAFgCAFIgCAjQgDAjgGAOQgEALgLAPIgKANIgUARQgLALgDAAQAEAAidhJgAkXgZQAEgBgEgFIgFgFgAjIjZIACgBIgFABIgMAAQADACAMgCg");
	this.shape_169.setTransform(3.5,-93);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AGSK/IhyiDQgvgzhkhzQiLihg2hKQgcglgxg+Qgjgsgsg8Qgog5ghgOQgmgPgSgWQgRgTgLghQgGgSgIgjQgEgNgXgfQgCgEgPgKQgQgKgHgJQgXgjhPhrQhChpAAhTQAAghAPgQQALgMAQAAQAqAAAiAyQAiAxAWBcQAEgDAagJQAbgIAKgFQgagsgJgpQgGgbAAgvQAAgvAVgbQATgWAZABQAoAAAUAcQARAWAMA4QAOBLALAvQATBVAbBJIgPgPQAkAlAaAiIAVAcIgBAAIgJgKQATAeAkBLQAVAqBQByIBRBrQBjCGBKBqQAwBCCoDjQBrCPANAeIgCAAIgNgKQgFAJgdARIgoAZIgKAQQgIANgKgBQgKAAhWhjg");
	this.shape_170.setTransform(-4,-121.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("ADZHnQg9gOgigOQgtgShig2IhagyQgDABgOAFQgOAFgPAAQgPAAgYgPQgSgLg5grQgfgXgVgiQgSgbg0hkQgSglg2ibQhFjLAAhJQAAgdAIgXQAKgdAWAAQAiAAAPAVQAXAhARBkQAOgDAXgCIATgCQgDAAgEgjIgEgsIgCgJIgBgKQAAguAWgeQATgdAcAAQAdAAARArQAXA8AECbQADByBEA2QAmAcARAQQAfAdAOAnQANAgBbBaQBoBlBOAjQA/AdB7AkIBxAgQgBAEgFADQgGAEgHgBQgGAAgJgCIgIgBQALAIADAHQAIAMgBAZQAAAtgeAPQgSAJgjAAQhtAAhpgYg");
	this.shape_171.setTransform(3.9,-89.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgRFwQgJAEgfAGQhTAAg0hfQgohJgBg+QAAgGgJgRIgNgaIgDADQgDADgHAAQgOAAgkgnQgsguABgoIAbhSQgahmAAgHQAAiMC9gfQA9gKBPABQAmABAqADIARADQAVADArAEQBPAICOAcIAGACQADABAAAGQgBAGgMAHQAFALAFATQAFAWABANQgBAcgTAVQgQARgUADIgGAEIh/gWQh1gUgfAAQg+AAgiATQgeARAAAdIAhAjQAjAlAHARIAGAdQADAOAmAnQBNBTAfA1QAbAxABAuQAAAtgWAQQgZALgIANQgZAngRAMQgQAMgdAAQgbgHgGgRg");
	this.shape_172.setTransform(18.7,-19.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("ABRDxQgzgUgMgLQgFgEgVgLQgdgOgZgPQgNgOgQgPQghgeg/gfQhTgqgcg0QgRgfAAgzQAAglAVgmQAgg5BEgcIEZA9IjBBTQBKAoAQABQALABASgIQAgAAAaAPQAbAPADAAIAngEQApgBAUAKQBzA4AAA6QAAAPgSA1QgUA8gSAPQgEACgVAIQgVAGgGAGQgVAWgEACQgIAFgWAAQgUAAg0gUg");
	this.shape_173.setTransform(26.3,-22);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AADDtQgQgOgIAAQgNAAgWgDQgcgFgNgHQgQgKgVgYQhBghgtgvQg3g7AAg5QAAg/Adg0QAohIBZgoIFzBGIhPAhQhQAhgbANIALgBQAUgEAXgJQAWgIAiABQA7gBApA4QAuA+AABoQAABYg5AOQgkAIgTAMQgNAJgTAAIgxgDQgPAAgSALQgSALgLAAQgYAAgSgNg");
	this.shape_174.setTransform(12.5,-15.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("ACLERQgMgCgEgDQgGgDgFgJIgGgJIhQgGQgRAWgJAAQhfAAgYgnQgKgVgFgIQgKgPgVgFQhJgOgzgwQg3gyAAhBQAAhQBgheQAxgxBMgxIDQBGQgOAPiSCCQAPAPAbAIIAmgPQAjAIAaAIQAQAGAEAAIApgSQAvgSAgAAQA6AAAlBZIAbArQARAaAAAlQAAAWgPAPQgNALg2AiQgJAGgrAlQgYAVgdgBQgHABgMgDg");
	this.shape_175.setTransform(29.8,-5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141}]}).to({state:[]},1).to({state:[{t:this.shape_142}]},20).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[]},1).to({state:[{t:this.shape_148}]},3).to({state:[]},1).to({state:[{t:this.shape_149}]},1).to({state:[]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-54.3,57.2,95.3);


(lib.FIZ23RAPRON002 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C7C9").s().p("AgUKKQgIhagIgIIgTjoIgHlZQAAkGANjWQALjKAThhIAUADQgFBngNEEQgNEEAIC1QAHC5AACIQAADOBOEGIg5AEQgSgwgIhmg");
	this.shape.setTransform(65,82.9);

	// apron
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("Ag5CXIgbgEIgCgaIAzAIQA7AHA8gBIADgBIgBASIhtACIgigDgAgVh7QAGgeARAAQARAAAIAKQAEAHAAAOQAAATgNAGQgHADgOAAQgXAAAFgdg");
	this.shape_1.setTransform(34,83.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7C66").s().p("Ag/EGQgFAEAAgKQAAgFAFgHQADgHAAgFQAAgFAKgQQAKgQABAAQBOAFAAgBQAAAGAHAcIAJAhQgiAAhUgEgACREEQgEgKgCgKIgGgUQgHgVgNgIQgJgGAAgJIABhlIAFAAQAUAMAQA9QALArAAAVIgLAzgAicDNQAAgVAJgaQAMghAgg7QAAA+ADAWIgUAYQgWAcgJAWIgEAHIgBgagABYCCIgGAAIgKgBQiggMAAgJQgBhHALhDQAQhyAohBQAMADAhABQAOAAAIAWQAFANAIAkQAKAlADAVIASDOIgBAAgAgfh+QgHARAAAMQAAAlAmAAQASAAALgIQASgMAAgbQABgsgxAAQgUAAgKAZgAgOjiQAEgCAEgLQAGgOAIgMQABABAGAPIAKAXIgEAAg");
	this.shape_2.setTransform(34,81.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhSMaQitgNhqgbQAzhzAakjQAXlFAQh4QAlkhATh1QATh1BFi1IAMALQANABALADQgUAsgZBfQgkCCAABMQAAAjAuAWQAvAXA5ADQA7ADA7gFQA7gFAQgNQAUgOgBgYIgDgpIAJiBQALiIARhNQAEgDALAAIAjAAQAAAXgMBwQgOBzgBAWQgEBxgBC7QAAA1AHC1QAHC5AACIQAADPBQEFQg5AFhVAEIhYABQhkAAhygJgACBEOIAAABQAigXgBg7QABhahHhGQgJiOgkhiQgMgggQgdIgTgiQgRAVgmBTQgyBvgFBVQgCAZgVAgIggAsQgTAlgBBAQAAAFAEANQAEATAHAQIAGABIASgxQAJgcAPgMIANgFQAFAHgJAGIAoAHIAJABQglA/AAAEQAAALAfAIQAfAHApAAQBCAAAAgRQAAgKgDgIIgVg1IAVgDQAQgDAFAAQAPAAAcBeg");
	this.shape_3.setTransform(35.1,83.2);

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA3M8QhdgFgzgEQgPgBkogvQBJi6APjCQAPkAAWisQAViuAljyQAljyA9h5QAEgBAAgDQAAgDAFAAQAUAAAbAKIAdAMQgyCIgTBGQgYBbAABKQAAAMAiANQAOAFAkAKQAHACAgAEQAgAFAQAAQAIAAAagDQAcgEAOgDQAPgEAbgKQAbgJAAgCQAAhkAIhSQACgYAJhIQAKguAAgYQAAgsAYgRQANgIARAAQALAAAvAEIgFAAQgJB3gLBCQgHBBgDC2QgCC2AKE/QAJFCANBOQAMBOAMA4QALBEAoBsQgdAEhpAGQhiAGgTAAIhegEg");
	this.shape_4.setTransform(35,83.2);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5,0,80.2,166.6);


(lib.FIZ_23_part_03211509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CCCCCC").s().p("AgyJEQgXiQAAi2QAAkCAaloQAAgJAFgWQAEgWAGijIAGiFQACgEAOhTIADJQQgCA1ADD8QADDvAGBhQARDPA2CcIg7AFQgphBgYicg");
	this.shape.setTransform(51,83.4);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#363636").s().p("AjqEVIgCgaIAdAEIA4AAIAEBZIhTAEIgEhHgAgYEGIBMAAIACAnIACAfIhMAEIgEhKgADllbQAIA5AAASIgDAyQgHA7gQA0g");
	this.shape_1.setTransform(33.5,140.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DADEE0").s().p("AgfBmIgBgKQAHACARADQAQADAHAAQAmAAAAgZQABgQgagPIgbgNIgPgGQAjgEAgAUQAMAHAOAOQASARAAALQgBAWgPAMQgNAMgWAAQg3AAgWgigAhegIQgBAAgBgGIADgmIA4AAQABAigVAGQgaABgJADIgBABIgBgBgAAQgrQAagaADgOQgNgOgJAAIg7ASIgJACIgCAAQAtgwAmgIQAmgIgBAcQAAAZgRAVQgQAUgoAdIgPAGQASgSANgNg");
	this.shape_2.setTransform(62.6,105.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF7C66").s().p("AhED/QAHgHAMgXQANgXAVgDQASgDAVAFQAVAFADAhIAHAaIhfABQgMABgQgMgACODxQgPgigOgRIgJgPQAChLgBgaQAiBIAJAaQAJAZAAARQAAAGgCAFIgJAlgAicDNQAAgdAUgzQATgzAOgJIAEBSQAAAGgMAQIgmAzIgFAKIgCgZgAgxB4QgogEAAgeQAAgmAThyQAXiPAZgBQAlAAATAOQATANAJAlQAIAeAFBKIAOCrQhtgGgdgDgAgmhiQAAATALAJQALAJAQAAQATAAAMgKQARgNgBgYQAAgSgNgNQgNgLgRAAQgqgBAAA1gAAHkIIABgCIARAlQgBACgmAAQALgMAKgZg");
	this.shape_3.setTransform(21.1,82.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72EBEB").s().p("AgGAYIABgZQBsgIAVgIQAMASgQAMQgQALhiAAIgMAAgAiAAFIALgcQAQADAUAIQAVAHArABIAAAcIhvgTg");
	this.shape_4.setTransform(29.3,8.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiGMZQiXgYhtgOQAqh8AajPQAKhNAck/QAXkBAaigQAnjmA1i0IA0AJQgeBygnCQQgPA1AAAnQAAAlAsAYQAsAYA9AEQA8AEA3gHQA4gIAOgFQAZgLACgrQgCg9AEhhQAEhgAThFQAEg3AHgBIAZgBIADJQQgCA1ADD8QADDuAIBiQARDOA2CcIg7AFQhfADhQAAQiKAAhbgJgABKDJQAMAXAKAwQARgDAJgfQAHgYAAgXQAAgggOgiQgPgiggguQgJgOgCgQQgGg3gShlQgGgcgSgxQgUg6gVgdQgxA4gZA+QgZA/gHBJQgIBGgGAOQgHARgfAqQgcAtAAA3QAAAUAIAQQAEAKAJANQAXg5AQgXQAFgGAKgIQAEAWApAAQgRAqgMANQgHAIAAAEQAAANAiAHQAeAGAoAAQApAAAOgGQAJgEAAgIQAAgGgYhAIAVgEQAQgCAHAAQAIAAAMAXgAFdCVQAkgPAKgCIgBACIgLAQIgMAPIgSAIg");
	this.shape_5.setTransform(25.5,83.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8089DD").s().p("AjCHEIgCgaQATAFBDAFQBFAGAUgDIgBASIh1ACIg3gHgADIDDIAFqNIAXOGIgTADQgEh/gFh9gAiGC/QAAgpAdgBQAcgCAAAfQAAAVgLAHQgHAGgRAAQgWAAAAgVgAhChHIAAh2IBUABQAGAAAEgJQADgJAAgNIgEgTQgEgQgDgGIhEgDIAAgeIBHgBIABgpQAAgUgKgEQgGgCgugEIAAgkIAmABQAtAAAWgEQAYgEAVgNQgaC0AIB6QgCAcgVAHQgLAEhIAJgAi8hfQgngMAAgRQAAgWANg8QANg3ApilIBAAOQAnAJAFAAIgCAmIhDADIgDBAIA7AAIAAAhIgYAAQgdAAgJAGQgMAKAAAlQAAANALAEQANAFAngBIgGB1QhJgKghgLg");
	this.shape_6.setTransform(32.1,53.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F0FF7A").s().p("AjNEeIAIgtQAvAEBTABIAAAsgAi9C3IAAgqIB0AAIAAAqgAA1heQgNhJgNgXQATgIgDADQASgICRhWQiGD8gSAdIgGAIIgFAFQAKhUAAgPg");
	this.shape_7.setTransform(40.3,3.5);

	// Layer 3
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AjFP3IgBgYIgCgaIgCgbIgBgMQgEgBgBgBIgCgEQhigNiUgZQAghQAOg+QAOg9AGgsQAHgrAVj/QAVj/AQiMQAPiOAzj6QAYh1AXhHQAYhKAQAAIBDAQQAQAEgIAPQAYAVBPAAQBOAAAcgMQAhgNABgoQAEhNgCgQQgEgegag0QAUgGBig2QBig3ASgRQgQBZg8BxQggA4giAyQAzARgGAiQAXCPAHExIAHG4QAigZAOgJQAXgNAdAAQAqABAAAhQABAlgaAcQgSAVg6AlQAoADApAaQArAcAAAdQAAAagSARQgTATgeAAQgHAAgfgJQgjgKgJgGQgFAsgRBEQgRA9ABAQQgBAnAWBRIAwCmQiIAMhLADIAAAFIABAaIADAlIh6AHIgBglIgBgaIgBgNQgrgCgvgEIABAYIABAZIACAmIh2AGIAAgNgAE1GVIAlAAQAegCADgEQgHgFgcgOIgkgSg");
	this.shape_8.setTransform(28.3,72.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.4,-30.1,91.4,205.8);


(lib.FIZ_23_part_02811509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AAQCBQgggRghgOQgdgMgUgjQgRgfAAgXQgBgfAegqQAagkAZgQQAcgVA9AgQA/AgAAAhQAAAWgWAeIg0BNIAMgDIAXgQQAIgGAFAAIAIAFIAMALQgEAagZAWQgZAVgMAAIAAAAQgNAAgQgIgAhWgdIAAADQAHAVAeAMQAcANAWgEQgHgQgcgOQgbgPgXgDQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBABg");
	this.shape.setTransform(40.4,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089DD").s().p("AC0DOQgXgThFghIAwhTQAMgYAGgwQAEghATgSQASgRApAIQAoAHAZA4QAAAjgbBFQggBRgoApQgJgMgNgKgAjKiKQgigJgqgOQgsg3AsgLIBAANQBgASAKAEQgFARgJANQgGAMAGAgQgPgFhBgPg");
	this.shape_1.setTransform(37,26.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("ABqESQALgGACgCQAEgEAAgVQAAghglgmQgzg0hVAAQgMAAggAmQgTgbAAgCQAAgaAhgXQAbgTAQAAQBKAABFA9QA8A2AAArQAAAqgqAbQgDAAgPgMgAAeh5QgGgIAEgeQAFgeAogYQApAMADAEQAEAEAVAMIgMAFQgbANgMAMQgRAQAAAZIAAARQglgUgHgIgAiZjNQgMgJAAgjQAAgFAFgJQAGgNALgJIBPAXQgTAJgIAQQgHAOAAAWQAAAOACAEQgtgMgMgKg");
	this.shape_2.setTransform(42.7,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72EBEB").s().p("AgtAUQgWgLgBgJQgCgJADgUQADgUAlgLIBhAiQgOAGgTAgQgRAegBALIACAIQgtgdgVgMg");
	this.shape_3.setTransform(41.5,17);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGF5IgmgWQgggKgJgIQgFgFgGgPQgCgIABgBIgLgMQgXgdgDgjQgEgkAagjQAZgjAAgHQAAgEgLgLQgMgKAAgUQAAgKAdgjQAggkAfADIAqAEQANgHAZgkQAbgnACgRQACgNgVgNQgNgIhHglQg0gjhFgWQh2glg7gWIAAhuQDEAnBRAcQC/BDA+ApQA+AoAEAkQAFAkgNAwQgNAwhKB9IALAlQADAKABAQQAAAQgIAWQgHAVgMAMQgMALgFAEQgFADgGgCIgHgCIgUgPIgOAZQAHAGAJAKQALAPAAAGQAAATgeAhQgiAmgfAAQgNAAgjgUg");
	this.shape_4.setTransform(39,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_02711509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgXAcIgEgPQgCgLAEgNQAHgYASgDQAYgEAEAlQACAMgHAOQgIAPgNACIgFABQgOAAgGgLg");
	this.shape.setTransform(2.9,4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,5.8,7.9);


(lib.FIZ_23_part_02411509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("AhgA3QgNgYADgIQBag8AegTQAkgUAXAAQAHAAALAOQALAPAFAUQgpAZhPAyQgqAcgOABIgBAAQgNAAgNgWg");
	this.shape.setTransform(12.5,9.5);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhrBJQgRgWABgVQACgVBPg2QBNg3AeAEQAdAEAWAhQAVAggjAbQgkAbiBBGQgagCgSgWg");
	this.shape_1.setTransform(12.6,9.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.2,-0.3,24.9,19.6);


(lib.FIZ_23_part_02311509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#825454").s().p("Ah1gUQgBgYARgQQANgMAGAAQAyAAA+AiQAZAOA/ApQgMAUgLAXQgIANgLAAIjBhdg");
	this.shape.setTransform(14,9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAmBLQgkgXgWgNQgegRg2gTQgegJAAgNQAAgNAHgVQAHgVAPgHQAPgGAFgBIAGAAQAuAAAyAWQA9AYA5AuQABAhgUAYQgUAZgPADIgEAAQgOAAgZgOg");
	this.shape_1.setTransform(13.6,8.9);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,27.1,17.9);


(lib.FIZ_23_part_02211509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnDWQgQgDgDgCQgHgQAKgBQABAAAMgcIAdhHQAPghAPg5QAQg9AEguQADgoACgrQABgdABAAIAEABQAGA9AAAYQAAAxgMA+QgGAbg5CvQAAAKACgIQBKAAAjgVIBdhHIAHABIAAABQgCAJgQAWQgUAbgeAaQgYATgpALQgkAIglAAQgIAAgPgDg");
	this.shape.setTransform(12.4,21.8);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C09B79").s().p("AhSBGQgugMAAgYQAAgGACgLIACgJIABgCIACAAQAmACAeABQA1AAAWgNQAagTApghQAbgWAEABQAIAAABAEIAAAAIAAAFIAAABQgDAJgGAeQgHAcgLATQgkA7hdAAIgBAAQgYAAgegIg");
	this.shape_1.setTransform(12.6,39.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.2,0,25.9,47.3);


(lib.FIZ_23_part_02111509 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgbAiIgFgQQgDgNAEgPQAGgdAXgFQAcgGAHAqQADAOgHARQgJASgPADIgJABQgQAAgHgLg");
	this.shape.setTransform(3.5,4.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,6.9,9.2);


(lib.FIZ_23_part_02011509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 10
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 9
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AAAEHIAAAAIgFgBQgugHgghCQgqhPgBhlQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgHBqgkBQQgjBPgxAAIAAAAg");
	this.shape_6.setTransform(15.3,29.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#656BAA").s().p("AgqDqIAAgBIATgjQAohbAIhzQAChzgnhYIAAABQgKgbgOgNIAKAEIAAAAIACAFIADgCQAOAHAJALIAAAAQAGAIAUAyQAXAwAEBXQAABTgQA0QgPA0gKAWIgQAmQgIAQgCACQgDADgnAPQAEgIAIgJg");
	this.shape_7.setTransform(28.2,29.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8089DD").s().p("AgBAAIAAgBIADABIgCACIgBgCg");
	this.shape_8.setTransform(25.7,5.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9FFFF").s().p("Ah1BfIAAgBIgJhNIAAgDIAAgDIAAgCIAAgCIAAgJIAAgFIALhWIADgJQBYgWBUAJQAeADAeAHQAJAugCA3QgEA/gOA1QgXAFgZABIgXABQhFAAhWgYg");
	this.shape_9.setTransform(15.3,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#66CCCC").s().p("AAAEHIgHgBQgJgBgJgEQgPgHgOgOIgJgKIgWglIgLgVIgDgHQgGgRgGgRQBYAWBHgBQAagBAYgEQgHAVgJAUIgHAOIgBACIgCAFIgFAJQgeAxglAAIAAAAgAhUiwIAAAAQAnhHArgMQAGgDAIAAQAygBAeBMIAAAAQAMAZAIAdQgfgHgggCQhLgHhPARQAJgXAMgVg");
	this.shape_10.setTransform(15.6,29.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D9FFFF").s().p("Ah9AYIgBgjIAAgSQBogdBjAPQAaADAYAHIAAAJIAAAEIAAADIgBAHQgCAZgEAaQgXAEgXADQgSABgSAAQhJAAhagZg");
	this.shape_11.setTransform(15.3,31.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AAAEHIgGgBQgugHgghCQgcg0gKg+IAhAIICYAPIADgBQAYgBAXgFQgLAzgTAqIgJAUIgGAKQgYAogeAHIgHACIgFAAIgCAAgAhSiwIAAAAQAmhHAsgMQAGgDAIAAQAygBAeBMIAAAAQAdA9ADBVIAAAAQgagGgbgDQgagEgbAAQgkgBgoAFIgCABIgDAAIgoAHIgDABIgEAAIgDABIgEABIgDABIgEABIgDABQAHhNAkg/g");
	this.shape_12.setTransform(15.4,29.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#66CCCC").s().p("AAAEHIgFgBQgugHgghCQggg8gIhJQBtAdBVgGQAYgCAXgEQgMA9gWAyIgJAUIgGAKQgZAogeAHIgGACIgFAAIgDAAgAh+AbIAAgSQgChmAuhTIABAAQAmhHArgMQAHgDAIAAQAygBAeBMIAAAAQAjBKgDBvQgCAWgDAXQgVAFgYADQgTABgUAAQhJAAhbgZg");
	this.shape_13.setTransform(15.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9}]},1).to({state:[{t:this.shape_12},{t:this.shape_8},{t:this.shape_7},{t:this.shape_11}]},1).to({state:[{t:this.shape_13},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 8
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AiJDNQgvhbADhzQADh2AvhVIAAAAQAxhYBCgBIADAAIAEAAIAWAGIAIACIAcAJQASAFAhAVIAAAAIAFADQADABADAEIAQAOIAAAAQAcArARBGQALBHAAApQgBAngKA1QgTBGgvBeIgBABIghARQgcAMgTAEIAAAAQgKABgIADIAAAAIgXADIAAAAQgHgBgFABIAAAAIgCAAQhBAAgqhZg");
	this.shape_14.setTransform(18.3,29.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AiJDNQgvhbADhzQADh2AvhVIAAAAQAYgrAcgWIADgFIAFgCIACgBQAZgQAcAAIADAAIAEAAIAWAGIAIACIAcAJQASAFAhAVIAAAAIAFADQADABADAEIAQAOIAAAAQAcArARBGQALBHAAApQgBAngKA1QgTBGgvBeIgBABIghARQgcAMgTAEIAAAAQgKABgIADIAAAAIgXADIAAAAQgHgBgFABIAAAAIgCAAQhBAAgqhZg");
	this.shape_15.setTransform(18.3,29.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.6,59);


(lib.FIZ_23_part_01811509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

	// Layer 6
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D9FFFF").s().p("AAJD+IgJgBQgrgIggg+QgqhNgChiQgFhiArhRQAjg/AogPIALgEIAHAAIABAAQAuAAAeBJQAgBHgBBrIgBAOIgBAAIAAAVQgIBTgZA/QgdBLguAAIgBAAg");
	this.shape_6.setTransform(14.4,28.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#656BAA").s().p("AgRDEQAjhaAFhtQgBhwgihVQgLgZgKgQQATAMAOAPIAAAAQAEAHAEAKQAeBOAEBiQABAxgRBZQgHAcgLAfIAAAAQgKAbgNAWQgHADgJAHIABAAIgLAHQAMgTAMgbg");
	this.shape_7.setTransform(26.6,28.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#66CCCC").s().p("AAFD+IgIgBQgrgIghg+QgIgPgGgPQA7AJBDgLQAegEAggIQgGAVgIATQgdBLguAAIgBAAgABQh+IgQgDQhUgNhUARQAIgYAMgWQAig/AogPQAKgEAKAAQAuAAAeBJQAMAbAHAgIgZgFg");
	this.shape_8.setTransform(14.8,28.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D9FFFF").s().p("AhlBwQgRg1gBg8IAAgCQgBgWACgWIACgZIAAgCIABgBIAAgEIAFgXIAAgDQBcgWBcAQQAUAEAUAFQAGApAAAwIgBAOIgBAAIAAAXQgEAngIAjQgeAIgcAFQgsAIglAAQgkAAgggHg");
	this.shape_9.setTransform(14.4,29.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9FFFF").s().p("AA3A5IAAAAIgWADIAWgDgAhxAcIgCgOIgEgpIAAgCIAAgDIAAgNQBhgZBiASQAWAEAWAGIgBAOIgBAWIgDAVQgaAHgZAFQg1ALgrAAQgrAAgmgKg");
	this.shape_10.setTransform(14.4,32.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgVgngLgsICMACIAWgDIAAAAIAOgDIAqgKQgJAzgRAqQgdBLguAAIgBAAgABOglQhjgShiAYQAEhMAihAQAjg/AngPQAJgEALAAQAuAAAeBJQAcA+ADBaQgVgGgVgDg");
	this.shape_11.setTransform(14.4,28.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#66CCCC").s().p("AAJD+IgJgBQgrgIggg+QgZgvgLg2QBNAQBfgSQAagFAbgHQgJA9gUAyQgdBLguAAIgBAAgAh0A0QgCgWgBgWQgFhiArhRQAjg/AogPQAIgEALAAQAuAAAeBJQAgBHgBBrIgBAOIgBAWIAAAEIgBAAQgZAHgZAFQg2AMguAAQgsAAgngKg");
	this.shape_12.setTransform(14.4,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_7},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_7},{t:this.shape_10}]},1).to({state:[{t:this.shape_7},{t:this.shape_12}]},1).wait(1));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah7DGQgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAQhDAAgshXg");
	this.shape_13.setTransform(16.7,28.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYEcQgRgCgPgIQgngTgcg5QgshXABhwQgChyArhTQAuhWBEAAQACgBAJADQAHABAgAKQAdAKAeATIAFAEIAAgBQADABACAEQAEACAFAEIAAABIAAABIgBAAIgBAAIgBgBQANAUAPAvQAVBAAEBLQgBBKgRBHQgLAmgSAqIgTAqIAAAAQgBACghASIAAAAQgjARgHAAIAAAAQgHgCgSADIAAAAQgHAAgEABIgBAAIAAAAIgMgBg");
	this.shape_14.setTransform(16.7,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.5,57.2);


(lib.FIZ_23_part_01011509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().p("AhYB4QgggeAAgNQAAgDAHgHQAIgJAIAAIASALQAVANANADQgBgDgpg7QgMgNgNgbQgNgbAAgNQAAgjA6gfQAwgZAZAAQAggBAqAwQAuAzAAA1QAAAIgRAhQgTAlgTAQQgIAHgXAIIgWAHIggAVQgQAJgLABQgPAAgggegAAvgMQgkAUgMAJQAoAAAVgGQAdgKAEgWQAGgDgRgIIgjAUg");
	this.shape.setTransform(44.7,68.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72EBEB").s().p("AgTA0QAAgLgKgaQgKgYgigTIBogkQATAGAMAXQANAVAAAQQgBAchdAjIAAgNg");
	this.shape_1.setTransform(43.4,16.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0FF7A").s().p("AilEMQgNgdAAgLQAAgVAcgmQAqg4BPgpQAdgPA4AMQBCAOAAAzQAAAGgUAaQgHgLgVgRIgTgOQg2AAg8AjQhIApAAAyQAAAPAFALQAFANAIADIgJALQgDADgGAAQgSAAgQgmgAhjitQgXgigVAJIgJABQAOgLAYgMQAUgJAFAAQAMAAASAPQASAQAJAUQAXA2hHAVQAFgjgYgjgABpjQQgBgYgOgbQgOgbgGABQBJgdASANQASANAAAXQAAAXgDAHQgDAIgDAAQgEAAghAPQgTAJgHAAQgEAAACgFg");
	this.shape_2.setTransform(42.1,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8089DD").s().p("AkZB+QgnhaAAgfQAAgXAggZQAdgXASAAQAgAAAZAUQAcAWgGAbQAdBOAKAUIAgBDQhLAkgZAUQgOALgJANQgcgegnhcgACLiXQAAgMgDgNQgGgRgKgLQAcgJBEgOQBHgPAggFIACBLQgdAAhIASQhHATgOAKQAEgPAAgLg");
	this.shape_3.setTransform(48.1,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 10
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhrGVQgxgfAAgtQAAgBAKgOIATgXIgPgaQgSANgEADQgCABgMAAQgmgBgWhnIAZg5QgBgDgxheQgyhcgHhMQgHhNDuhaQDshaCugaIAAB7IgoAKQgeAGhVAbQhWAcjBBpQAeA2AdAxQAQAZAEAAIAiAEQAdAEAOAEQANADAWAUQAWATAAAnQAAAXgWAOQApA2AKAUQALAVAAAhQAAASghAxQgeAsgGADIglANIgNAFQgaAUgOAIQgUAKgRAAQgagHgZgQg");
	this.shape_4.setTransform(45.8,42.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.FIZ_23_part_00911509 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC767").s().p("AgdAmQgGgUgQhIQAfADAdAOQAjAPAIARIglAdQglAfgCAAIgFgRg");
	this.shape.setTransform(68.9,8.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0FF7A").s().p("AglDUQghgWgRgdQgmg0gVgjQgVgihSgyQhDgsgbgKQBahFBEggQA7gbBQgPQBKgPAlgJQAUgDCbAAQAeADAgAOQAiAPAIARQhPBFhGATQg/AIgRAHIgBABIAEAIQAEAHAHAAQAKAAAOAvQAFARACAVQACAUAAAeQAABOgoAtQgmArg6AAQgcAAgjgXgAC5BJIADgnQAAgTgGgUQgGghgPgWIBFgPQA+gRAfgaQgFAMg6BmQg7BogYAjQAEgbAEgjg");
	this.shape_1.setTransform(39.6,26.6);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgVD5IgogiQgtgogOgaQgshThmg7QgagNgugWQglgSgIgHQBRhHBvg0QCzhUDFAAQC2AAAPBIQALAxhMBxQg+BzgtA9QhQBvhmAAQgdAAgUgMg");
	this.shape_2.setTransform(38.5,26.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.1,0,76.9,52.4);


(lib.FIZ_23_MOUTH_COMP11509 = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8BaQgUgEgGgFQgHgGgIgNIgLgTQgUAZgRAIQgIADgKAAQgfAAgbhNIAJAFQAPAEAhADIAmADQCSAAB9ggQBZgXB4g2QAEAPAAAHQAAAegQALQgLAIgUgBQgDAAgOgGIgOgGQgIAAgFAOIgLAdQgWAthRAAQgUAAgRgOIgQgPQgrAeALgEQg4AqgmAAQgOAAgQgDg");
	this.shape.setTransform(33,12);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiKBxQgMgPgSgTIgJAPQgMAJgjAAQggAAgSgpQgcg+gUgTQgCgGAKAAQBiATASAAQDIAADKhRQBMgeAPgBQAcgDAAAnQAABohegbQgVBThvAAIgYgHQgYgIgKAAQgnAfgfAPQgWALgrAAQgiAAgIgHg");
	this.shape_1.setTransform(32.4,12);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,64.8,24);


(lib.FIZZYIDLEEYES11509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FIZ_23_part_02111509("single",0);
	this.instance.setTransform(-30.6,11.8,0.768,0.768,0,-1,178.9,3.5,4.6);

	this.instance_1 = new lib.FIZ_23_part_02711509("single",0);
	this.instance_1.setTransform(33.7,11,0.768,0.924,0,-1,178.9,2.9,4);

	this.instance_2 = new lib.FIZ_23_part_02311509("single",0);
	this.instance_2.setTransform(-36.4,-27,0.768,0.768,0,-1,178.9,13.8,9.1);

	this.instance_3 = new lib.FIZ_23_part_02411509("single",0);
	this.instance_3.setTransform(35,-28.2,0.768,0.768,0,-1,178.9,12.6,9.5);

	this.instance_4 = new lib.FIZ_23_part_02011509("single",0);
	this.instance_4.setTransform(-32.1,12.9,0.768,0.768,0,-1,178.9,18.3,29.5);

	this.instance_5 = new lib.FIZ_23_part_01811509("single",0);
	this.instance_5.setTransform(34.3,11.6,0.768,0.768,0,-1,178.9,16.6,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{y:-28.2,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-27,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]}).to({state:[{t:this.instance_5,p:{startPosition:1}},{t:this.instance_4,p:{startPosition:1}},{t:this.instance_3,p:{y:-27.4,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-26.3,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]},42).to({state:[{t:this.instance_5,p:{startPosition:2}},{t:this.instance_4,p:{startPosition:2}},{t:this.instance_3,p:{y:-24.2,regX:12.5,skewX:-5.5,skewY:174.4,x:35.1}},{t:this.instance_2,p:{y:-23,skewX:6,skewY:-173.9}},{t:this.instance_1,p:{y:12.3}},{t:this.instance,p:{y:12.6}}]},1).to({state:[{t:this.instance_5,p:{startPosition:3}},{t:this.instance_4,p:{startPosition:3}},{t:this.instance_3,p:{y:-18.2,regX:12.6,skewX:-16.8,skewY:163.1,x:35}},{t:this.instance_2,p:{y:-17.1,skewX:12.5,skewY:-167.4}}]},1).to({state:[{t:this.instance_5,p:{startPosition:2}},{t:this.instance_4,p:{startPosition:2}},{t:this.instance_3,p:{y:-24.2,regX:12.5,skewX:-5.5,skewY:174.4,x:35.1}},{t:this.instance_2,p:{y:-23,skewX:6,skewY:-173.9}},{t:this.instance_1,p:{y:12.3}},{t:this.instance,p:{y:12.6}}]},2).to({state:[{t:this.instance_5,p:{startPosition:1}},{t:this.instance_4,p:{startPosition:1}},{t:this.instance_3,p:{y:-27.4,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-26.3,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]},1).to({state:[{t:this.instance_5,p:{startPosition:0}},{t:this.instance_4,p:{startPosition:0}},{t:this.instance_3,p:{y:-28.2,regX:12.6,skewX:-1,skewY:178.9,x:35}},{t:this.instance_2,p:{y:-27,skewX:-1,skewY:178.9}},{t:this.instance_1,p:{y:11}},{t:this.instance,p:{y:11.8}}]},1).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.8,-36,94.3,71.9);


(lib.FIZZYENTER11509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// BODY
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AseCgIAAk/IY+AAIAAE/g");
	this.shape.setTransform(-289.9,271.7);

	this.instance = new lib.FIZ_23_part_03211509("single",0);
	this.instance.setTransform(-275.1,386.5,0.768,0.768,0,10.6,-169.3,23.4,111.2);

	this.instance_1 = new lib.FIZ_23_part_02811509("single",1);
	this.instance_1.setTransform(-280.2,302.3,0.776,0.823,0,-10.9,166.8,4.5,1.9);

	this.instance_2 = new lib.FIZ_23_part_01011509("single",1);
	this.instance_2.setTransform(-252.2,309.9,0.767,0.767,0,28.6,-151.3,83,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.instance_2,p:{skewX:28.6,skewY:-151.3,x:-252.2,y:309.9,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-10.9,skewY:166.8,x:-280.2,y:302.3,regY:1.9,scaleY:0.823}},{t:this.instance,p:{regX:23.4,skewX:10.6,skewY:-169.3,x:-275.1,y:386.5,regY:111.2}}]},1).to({state:[{t:this.instance_2,p:{skewX:25.3,skewY:-154.6,x:-253.3,y:190.5,regX:83}},{t:this.instance_1,p:{regX:4.4,skewX:-14.2,skewY:163.5,x:-281.6,y:184.6,regY:1.9,scaleY:0.823}},{t:this.instance,p:{regX:23.3,skewX:7.3,skewY:-172.6,x:-271.8,y:268.4,regY:111.2}}]},2).to({state:[{t:this.instance_2,p:{skewX:19.6,skewY:-160.3,x:-271.8,y:143.5,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-19.9,skewY:157.8,x:-300.6,y:140.4,regY:2,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:1.5,skewY:-178.4,x:-282.3,y:222.9,regY:111.4}}]},2).to({state:[{t:this.instance_2,p:{skewX:17.5,skewY:-162.4,x:-277.4,y:136.9,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-22,skewY:155.7,x:-306.4,y:134.9,regY:2,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:-0.5,skewY:179.4,x:-285.1,y:216.7,regY:111.4}}]},2).to({state:[{t:this.instance_2,p:{skewX:17.8,skewY:-162.1,x:-276.3,y:137.5,regX:82.9}},{t:this.instance_1,p:{regX:4.5,skewX:-21.7,skewY:156,x:-305.2,y:135.3,regY:2,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:-0.1,skewY:179.8,x:-284.5,y:217.2,regY:111.4}}]},2).to({state:[{t:this.instance_2,p:{skewX:18.1,skewY:-161.8,x:-276.1,y:138.5,regX:83}},{t:this.instance_1,p:{regX:4.5,skewX:-21.5,skewY:156.3,x:-304.9,y:136.2,regY:1.9,scaleY:0.824}},{t:this.instance,p:{regX:23.4,skewX:0,skewY:180,x:-284.5,y:218.2,regY:111.3}}]},2).wait(3));

	// HEAD
	this.instance_3 = new lib.FIZ_23_part_02111509("single",0);
	this.instance_3.setTransform(-256.2,203.8,0.767,0.767,0,18.3,-161.6,3.5,4.5);

	this.instance_4 = new lib.FIZ_23_part_02711509("single",0);
	this.instance_4.setTransform(-195.2,224.5,0.767,0.923,0,18.3,-161.6,2.9,4);

	this.instance_5 = new lib.FIZ_23_part_02311509("single",0);
	this.instance_5.setTransform(-248.8,165.3,0.767,0.767,0,18.3,-161.6,13.8,9.1);

	this.instance_6 = new lib.FIZ_23_part_02411509("single",0);
	this.instance_6.setTransform(-181,187.8,0.767,0.767,0,18.3,-161.6,12.6,9.5);

	this.instance_7 = new lib.FIZ_23_MOUTH_COMP11509("single",0);
	this.instance_7.setTransform(-244,251.9,0.767,0.767,0,18.3,-161.6,31.2,10.2);

	this.instance_8 = new lib.FIZ_23_part_02211509("single",0);
	this.instance_8.setTransform(-216.7,216.9,0.767,0.767,0,9.8,-170.1,11.8,2.7);

	this.instance_9 = new lib.FIZ_23_part_02011509("single",0);
	this.instance_9.setTransform(-258,204.5,0.767,0.767,0,18.3,-161.6,18.4,29.6);

	this.instance_10 = new lib.FIZ_23_part_01811509("single",0);
	this.instance_10.setTransform(-194.9,225.2,0.767,0.767,0,18.3,-161.6,16.6,28.6);

	this.instance_11 = new lib.FIZZYHEAD11509("synched",0);
	this.instance_11.setTransform(-228.4,192.1,0.767,0.767,0,18.3,-161.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11,p:{skewX:18.3,skewY:-161.6,x:-228.4,y:192.1,scaleX:0.767,scaleY:0.767}},{t:this.instance_10,p:{regX:16.6,skewX:18.3,skewY:-161.6,x:-194.9,y:225.2,regY:28.6,scaleX:0.767,scaleY:0.767}},{t:this.instance_9,p:{skewX:18.3,skewY:-161.6,x:-258,y:204.5,scaleX:0.767,scaleY:0.767,regY:29.6,regX:18.4}},{t:this.instance_8,p:{regY:2.7,skewX:9.8,skewY:-170.1,x:-216.7,y:216.9,scaleX:0.767,scaleY:0.767}},{t:this.instance_7,p:{skewX:18.3,skewY:-161.6,x:-244,y:251.9,regX:31.2,scaleX:0.767,scaleY:0.767}},{t:this.instance_6,p:{regY:9.5,skewX:18.3,skewY:-161.6,x:-181,y:187.8,scaleX:0.767,scaleY:0.767,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:18.3,skewY:-161.6,x:-248.8,y:165.3,scaleX:0.767,scaleY:0.767}},{t:this.instance_4,p:{skewX:18.3,skewY:-161.6,x:-195.2,y:224.5,regY:4,scaleX:0.767,scaleY:0.923,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.5,skewX:18.3,skewY:-161.6,x:-256.2,y:203.8,scaleX:0.767,scaleY:0.767}}]},1).to({state:[{t:this.instance_11,p:{skewX:11.2,skewY:-168.7,x:-244.8,y:70.5,scaleX:0.767,scaleY:0.767}},{t:this.instance_10,p:{regX:16.7,skewX:11.2,skewY:-168.7,x:-207.5,y:99.2,regY:28.6,scaleX:0.767,scaleY:0.767}},{t:this.instance_9,p:{skewX:11.2,skewY:-168.7,x:-272.7,y:86.4,scaleX:0.767,scaleY:0.767,regY:29.6,regX:18.4}},{t:this.instance_8,p:{regY:2.6,skewX:2.7,skewY:-177.2,x:-230.2,y:93.5,scaleX:0.767,scaleY:0.767}},{t:this.instance_7,p:{skewX:11.2,skewY:-168.7,x:-253,y:131.7,regX:31.2,scaleX:0.767,scaleY:0.767}},{t:this.instance_6,p:{regY:9.4,skewX:11.2,skewY:-168.7,x:-198.3,y:60.3,scaleX:0.767,scaleY:0.767,regX:12.6}},{t:this.instance_5,p:{regY:9,skewX:11.2,skewY:-168.7,x:-268.4,y:46.3,scaleX:0.767,scaleY:0.767}},{t:this.instance_4,p:{skewX:11.2,skewY:-168.7,x:-207.9,y:98.5,regY:4,scaleX:0.767,scaleY:0.923,regX:2.9}},{t:this.instance_3,p:{regX:3.4,regY:4.6,skewX:11.2,skewY:-168.7,x:-270.9,y:85.6,scaleX:0.767,scaleY:0.767}}]},2).to({state:[{t:this.instance_11,p:{skewX:1.5,skewY:-178.4,x:-282.3,y:22,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.7,skewX:1.5,skewY:-178.4,x:-240.8,y:44.1,regY:28.5,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:1.5,skewY:-178.4,x:-307.2,y:42.4,scaleX:0.768,scaleY:0.768,regY:29.6,regX:18.4}},{t:this.instance_8,p:{regY:2.6,skewX:-6.9,skewY:173,x:-264,y:42.4,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:1.5,skewY:-178.4,x:-280.1,y:83.8,regX:31.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:1.5,skewY:-178.4,x:-238.2,y:4.3,scaleX:0.768,scaleY:0.768,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:1.5,skewY:-178.4,x:-309.7,y:2.2,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:1.5,skewY:-178.4,x:-241.3,y:43.4,regY:3.9,scaleX:0.768,scaleY:0.924,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:1.5,skewY:-178.4,x:-305.6,y:41.4,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_11,p:{skewX:-2.3,skewY:177.6,x:-296.2,y:14.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.7,skewX:-2.3,skewY:177.6,x:-253.2,y:33.3,regY:28.5,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:-2.3,skewY:177.6,x:-319.5,y:36.1,scaleX:0.768,scaleY:0.768,regY:29.5,regX:18.4}},{t:this.instance_8,p:{regY:2.6,skewX:-10.8,skewY:169.1,x:-276.5,y:33.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:-2.3,skewY:177.6,x:-289.7,y:75.6,regX:31,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:-2.3,skewY:177.6,x:-253.4,y:-6.5,scaleX:0.768,scaleY:0.768,regX:12.7}},{t:this.instance_5,p:{regY:9.1,skewX:-2.3,skewY:177.6,x:-324.8,y:-3.7,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:-2.3,skewY:177.6,x:-253.7,y:32.8,regY:4,scaleX:0.768,scaleY:0.924,regX:3}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:-2.3,skewY:177.6,x:-318.1,y:34.9,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_11,p:{skewX:-1.5,skewY:178.4,x:-293.5,y:16.4,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.8,skewX:-1.5,skewY:178.4,x:-250.8,y:36.2,regY:28.6,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:-1.5,skewY:178.4,x:-317.1,y:38.1,scaleX:0.768,scaleY:0.768,regY:29.5,regX:18.2}},{t:this.instance_8,p:{regY:2.6,skewX:-10,skewY:169.9,x:-274.1,y:35.7,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:-1.5,skewY:178.4,x:-287.9,y:78,regX:31.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:-1.5,skewY:178.4,x:-250.3,y:-3.6,scaleX:0.768,scaleY:0.768,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:-1.5,skewY:178.4,x:-321.9,y:-1.8,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:-1.5,skewY:178.4,x:-251.3,y:35.6,regY:4,scaleX:0.768,scaleY:0.924,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:-1.5,skewY:178.4,x:-315.7,y:37,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_11,p:{skewX:-1,skewY:178.9,x:-292.1,y:17.5,scaleX:0.768,scaleY:0.768}},{t:this.instance_10,p:{regX:16.6,skewX:-1,skewY:178.9,x:-249.5,y:37.6,regY:28.6,scaleX:0.768,scaleY:0.768}},{t:this.instance_9,p:{skewX:-1,skewY:178.9,x:-316,y:38.9,scaleX:0.768,scaleY:0.768,regY:29.5,regX:18.3}},{t:this.instance_8,p:{regY:2.7,skewX:-9.5,skewY:170.4,x:-272.9,y:37,scaleX:0.768,scaleY:0.768}},{t:this.instance_7,p:{skewX:-1,skewY:178.9,x:-287.1,y:79.1,regX:31.1,scaleX:0.768,scaleY:0.768}},{t:this.instance_6,p:{regY:9.5,skewX:-1,skewY:178.9,x:-248.8,y:-2.2,scaleX:0.768,scaleY:0.768,regX:12.6}},{t:this.instance_5,p:{regY:9.1,skewX:-1,skewY:178.9,x:-320.3,y:-1,scaleX:0.768,scaleY:0.768}},{t:this.instance_4,p:{skewX:-1,skewY:178.9,x:-250.1,y:37,regY:4,scaleX:0.768,scaleY:0.924,regX:2.9}},{t:this.instance_3,p:{regX:3.5,regY:4.6,skewX:-1,skewY:178.9,x:-314.5,y:37.8,scaleX:0.768,scaleY:0.768}}]},2).wait(3));

	// COLLAR
	this.instance_12 = new lib.FIZ_23_part_00911509("single",0);
	this.instance_12.setTransform(-264.5,307.1,0.75,0.768,0,10.6,-169.3,41.6,43.4);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1).to({startPosition:0,_off:false},0).wait(2).to({skewX:7.3,skewY:-172.5,x:-265.7,y:188.5},0).wait(2).to({skewX:1.5,skewY:-178.3,x:-284.2,y:142.7},0).wait(2).to({regY:43.5,skewX:-0.4,skewY:-180.5,x:-289.9,y:134.6},0).wait(2).to({skewX:0,skewY:-180.1,x:-288.8,y:137.1},0).wait(2).to({skewX:0,skewY:-179.9,x:-288.5,y:138.1},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-369.9,255.7,160,32);


(lib.FIZZHEADNEST002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PUPILS
	this.instance = new lib.FIZ23RPUPILL002("single",0);
	this.instance.setTransform(186.3,188.4,1,1.203,0,0,0,2.9,4);

	this.instance_1 = new lib.FIZ23RPUPILR002("single",0);
	this.instance_1.setTransform(102.4,188.5,1,1,0,0,0,3.5,4.6);

	this.instance_2 = new lib.FIZFRPUPILL002("single",0);
	this.instance_2.setTransform(91.9,192.5,1,1,0,0,180,3.4,4.7);

	this.instance_3 = new lib.FIZFRPUPILR002("single",0);
	this.instance_3.setTransform(176.9,191.3,1,1,0,0,180,3.4,4.7);

	this.instance_4 = new lib.FIZ34LPUPILL002("single",0);
	this.instance_4.setTransform(114.6,173.3,1.483,0.762,0,-54.6,125.3,3.4,5.1);

	this.instance_5 = new lib.FIZ34LPUPILR002("single",0);
	this.instance_5.setTransform(202.5,173.7,1.555,0.85,0,-57.3,122.6,3,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:188.5,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:102.4}},{t:this.instance,p:{y:188.4,scaleX:1,scaleY:1.203,rotation:0,x:186.3,regY:4}}]}).to({state:[{t:this.instance_1,p:{y:188.9,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:102.4}},{t:this.instance,p:{y:189.3,scaleX:1,scaleY:1.203,rotation:0,x:186.3,regY:4}}]},4).to({state:[]},1).to({state:[{t:this.instance_1,p:{y:189.2,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:102.4}},{t:this.instance,p:{y:189.1,scaleX:1,scaleY:1.203,rotation:0,x:186.3,regY:4}}]},72).to({state:[{t:this.instance_1,p:{y:188.5,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:102.4}},{t:this.instance,p:{y:188.4,scaleX:1,scaleY:1.203,rotation:0,x:186.3,regY:4}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2}]},15).to({state:[{t:this.instance_1,p:{y:188.5,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:102.4}},{t:this.instance,p:{y:188.4,scaleX:1,scaleY:1.203,rotation:0,x:186.3,regY:4}}]},1).to({state:[{t:this.instance_1,p:{y:182.6,regX:3.6,scaleX:0.868,scaleY:1.291,rotation:32.9,x:107}},{t:this.instance,p:{y:182.1,scaleX:1.044,scaleY:1.351,rotation:40.8,x:192.3,regY:4}}]},62).to({state:[{t:this.instance_5,p:{regX:3,regY:4.8,scaleX:1.555,scaleY:0.85,skewX:-57.3,skewY:122.6,x:202.5,y:173.7}},{t:this.instance_4,p:{regX:3.4,regY:5.1,scaleX:1.483,scaleY:0.762,skewX:-54.6,skewY:125.3,x:114.6,y:173.3}}]},1).to({state:[{t:this.instance_5,p:{regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:208.2,y:165.6}},{t:this.instance_4,p:{regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:121.4,y:164.3}}]},1).to({state:[{t:this.instance_5,p:{regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:206.2,y:170.4}},{t:this.instance_4,p:{regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:180,x:119.9,y:169.1}}]},47).to({state:[{t:this.instance_5,p:{regX:2.5,regY:4.8,scaleX:0.999,scaleY:1.269,skewX:32.1,skewY:-147.8,x:197.8,y:182.2}},{t:this.instance_4,p:{regX:3.6,regY:5.8,scaleX:0.998,scaleY:1.274,skewX:21.6,skewY:-158.3,x:112.4,y:181.5}}]},1).to({state:[{t:this.instance_1,p:{y:185.5,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:110.6}},{t:this.instance,p:{y:185.4,scaleX:1,scaleY:1.202,rotation:-6.2,x:194.4,regY:3.9}}]},1).to({state:[{t:this.instance_1,p:{y:188.3,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:110.9}},{t:this.instance,p:{y:189,scaleX:1,scaleY:1.202,rotation:-6.2,x:194.9,regY:3.9}}]},29).to({state:[]},1).to({state:[{t:this.instance_1,p:{y:188.2,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:109.2}},{t:this.instance,p:{y:188.6,scaleX:1,scaleY:1.202,rotation:-6.2,x:193.1,regY:3.9}}]},31).to({state:[{t:this.instance_1,p:{y:188.5,regX:3.5,scaleX:1,scaleY:1,rotation:0,x:102.4}},{t:this.instance,p:{y:188.4,scaleX:1,scaleY:1.203,rotation:0,x:186.3,regY:4}}]},1).wait(11));

	// BROWS
	this.instance_6 = new lib.FIZ23RBROWL002("single",0);
	this.instance_6.setTransform(188.7,137.1,1,1,0,0,0,12.6,9.5);

	this.instance_7 = new lib.FIZ23RBROWR002("single",0);
	this.instance_7.setTransform(95.5,136.9,1,1,0,0,0,13.8,9.1);

	this.instance_8 = new lib.FIZFRBROWR002("single",0);
	this.instance_8.setTransform(187.8,138,1,1,0,0,180,13.4,9.6);

	this.instance_9 = new lib.FIZFRBROWL002("single",0);
	this.instance_9.setTransform(101.2,133.4,1,1,0,-8.2,171.7,13.5,9.2);

	this.instance_10 = new lib.FIZ34LBROWL002("single",2);
	this.instance_10.setTransform(96.7,138.3,0.999,0.999,0,9.8,-170.1,15.5,9.5);

	this.instance_11 = new lib.FIZ34LBROWR002("single",2);
	this.instance_11.setTransform(192.6,139.6,1,1,0,0,180,11.3,8.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:0,x:95.5,y:136.9,startPosition:0,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:188.7,y:137.1,startPosition:0}}]}).to({state:[{t:this.instance_7,p:{regX:13.9,rotation:-3.4,x:97.5,y:135.1,startPosition:0,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:3.3,x:188.2,y:134.7,startPosition:0}}]},2).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:6.1,x:95.5,y:136.3,startPosition:4,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:188.8,y:134,startPosition:4}}]},2).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:6.1,x:95.5,y:135.2,startPosition:4,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:188.8,y:133,startPosition:4}}]},1).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:6.1,x:96.4,y:137.8,startPosition:4,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:189.7,y:135.5,startPosition:4}}]},40).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:6.1,x:96.6,y:141,startPosition:4,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:189.9,y:138.8,startPosition:4}}]},1).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:6.1,x:96.7,y:143.8,startPosition:4,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:190.1,y:141.5,startPosition:4}}]},1).to({state:[{t:this.instance_9,p:{x:101.2}},{t:this.instance_8,p:{x:187.8}}]},8).to({state:[{t:this.instance_7,p:{regX:13.9,rotation:-6.4,x:96.5,y:130.7,startPosition:4,regY:9.2,scaleX:0.998,scaleY:0.998}},{t:this.instance_6,p:{rotation:0,x:190.1,y:138.3,startPosition:4}}]},1).to({state:[{t:this.instance_7,p:{regX:13.9,rotation:-6.4,x:96.5,y:130.7,startPosition:4,regY:9.2,scaleX:0.998,scaleY:0.998}},{t:this.instance_6,p:{rotation:0,x:190.1,y:138.3,startPosition:4}}]},23).to({state:[{t:this.instance_9,p:{x:100.1}},{t:this.instance_8,p:{x:186.8}}]},14).to({state:[{t:this.instance_7,p:{regX:13.9,rotation:3.6,x:98.5,y:139.9,startPosition:0,regY:9.1,scaleX:0.998,scaleY:0.998}},{t:this.instance_6,p:{rotation:0,x:186.9,y:142.7,startPosition:0}}]},1).to({state:[{t:this.instance_7,p:{regX:13.9,rotation:3.6,x:100.8,y:136.7,startPosition:0,regY:9.1,scaleX:0.998,scaleY:0.998}},{t:this.instance_6,p:{rotation:0,x:189.2,y:139.5,startPosition:0}}]},62).to({state:[{t:this.instance_11,p:{x:192.6,y:139.6,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:0.999,scaleY:0.999,skewX:9.8,skewY:-170.1,x:96.7,y:138.3,regX:15.5,startPosition:2}}]},1).to({state:[{t:this.instance_11,p:{x:195.9,y:136.4,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:1,scaleY:1,skewX:0,skewY:180,x:100.7,y:137.7,regX:15.5,startPosition:2}}]},1).to({state:[{t:this.instance_11,p:{x:196.5,y:138.4,skewX:-4.4,skewY:175.5}},{t:this.instance_10,p:{scaleX:0.998,scaleY:0.998,skewX:31,skewY:-148.9,x:103.9,y:141.5,regX:15.5,startPosition:2}}]},47).to({state:[{t:this.instance_11,p:{x:197.1,y:140.4,skewX:-1.9,skewY:178}},{t:this.instance_10,p:{scaleX:0.997,scaleY:0.997,skewX:17.8,skewY:-162.1,x:106,y:150.2,regX:15.7,startPosition:3}}]},1).to({state:[{t:this.instance_11,p:{x:197.4,y:144.1,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:0.998,scaleY:0.998,skewX:26.6,skewY:-153.3,x:106.1,y:154.2,regX:15.6,startPosition:3}}]},1).to({state:[{t:this.instance_11,p:{x:197.3,y:140.6,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:0.998,scaleY:0.998,skewX:26.6,skewY:-153.3,x:106.3,y:156,regX:15.6,startPosition:3}}]},28).to({state:[{t:this.instance_11,p:{x:197.5,y:138.3,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:0.998,scaleY:0.998,skewX:26.6,skewY:-153.3,x:106.3,y:157.4,regX:15.6,startPosition:3}}]},1).to({state:[{t:this.instance_11,p:{x:198.1,y:135,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:0.998,scaleY:0.998,skewX:26.6,skewY:-153.3,x:105.8,y:158.8,regX:15.6,startPosition:3}}]},1).to({state:[{t:this.instance_11,p:{x:194.1,y:135.3,skewX:0,skewY:180}},{t:this.instance_10,p:{scaleX:0.996,scaleY:0.996,skewX:-1.2,skewY:178.7,x:99.9,y:146.8,regX:15.6,startPosition:3}}]},31).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:0,x:97.2,y:139.5,startPosition:0,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:188.6,y:137.9,startPosition:0}}]},1).to({state:[{t:this.instance_7,p:{regX:13.8,rotation:0,x:95.5,y:136.9,startPosition:0,regY:9.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{rotation:0,x:188.7,y:137.1,startPosition:0}}]},1).wait(10));

	// EYES
	this.instance_12 = new lib.FIZ23REYER002("single",0);
	this.instance_12.setTransform(100.3,189.1,1,1,0,0,0,18.3,29.5);

	this.instance_13 = new lib.FIZ23REYEL002("single",0);
	this.instance_13.setTransform(186.7,189.1,1,1,0,0,0,16.7,28.6);

	this.instance_14 = new lib.FIZFREYER002("single",3);
	this.instance_14.setTransform(179,191.3,1,1,180,0,0,18.1,29.2);

	this.instance_15 = new lib.FIZFREYEL002("single",3);
	this.instance_15.setTransform(90.6,191.3,1,1,0,180,0,18.1,29.2);

	this.instance_16 = new lib.FIZ34LEYEL002("single",7);
	this.instance_16.setTransform(109.2,187.9,1,1,0,0,180,18,28.6);

	this.instance_17 = new lib.FIZ34LEYER002("single",6);
	this.instance_17.setTransform(197.2,187.8,1,1,0,0,180,16.3,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{startPosition:0}},{t:this.instance_12,p:{startPosition:0}}]}).to({state:[{t:this.instance_13,p:{startPosition:1}},{t:this.instance_12,p:{startPosition:1}}]},2).to({state:[{t:this.instance_13,p:{startPosition:2}},{t:this.instance_12,p:{startPosition:2}}]},2).to({state:[{t:this.instance_13,p:{startPosition:3}},{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_15,p:{startPosition:3}},{t:this.instance_14,p:{startPosition:3}}]},50).to({state:[{t:this.instance_13,p:{startPosition:3}},{t:this.instance_12,p:{startPosition:3}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2}},{t:this.instance_12,p:{startPosition:2}}]},21).to({state:[{t:this.instance_13,p:{startPosition:1}},{t:this.instance_12,p:{startPosition:1}}]},1).to({state:[{t:this.instance_13,p:{startPosition:0}},{t:this.instance_12,p:{startPosition:0}}]},1).to({state:[{t:this.instance_15,p:{startPosition:0}},{t:this.instance_14,p:{startPosition:0}}]},14).to({state:[{t:this.instance_13,p:{startPosition:0}},{t:this.instance_12,p:{startPosition:0}}]},1).to({state:[{t:this.instance_13,p:{startPosition:2}},{t:this.instance_12,p:{startPosition:6}}]},62).to({state:[{t:this.instance_17,p:{startPosition:6}},{t:this.instance_16,p:{startPosition:7}}]},1).to({state:[{t:this.instance_17,p:{startPosition:5}},{t:this.instance_16,p:{startPosition:5}}]},1).to({state:[{t:this.instance_17,p:{startPosition:6}},{t:this.instance_16,p:{startPosition:8}}]},47).to({state:[{t:this.instance_17,p:{startPosition:7}},{t:this.instance_16,p:{startPosition:7}}]},1).to({state:[{t:this.instance_17,p:{startPosition:0}},{t:this.instance_16,p:{startPosition:0}}]},1).to({state:[{t:this.instance_17,p:{startPosition:1}},{t:this.instance_16,p:{startPosition:1}}]},28).to({state:[{t:this.instance_17,p:{startPosition:2}},{t:this.instance_16,p:{startPosition:2}}]},1).to({state:[{t:this.instance_17,p:{startPosition:4}},{t:this.instance_16,p:{startPosition:4}}]},1).to({state:[{t:this.instance_17,p:{startPosition:2}},{t:this.instance_16,p:{startPosition:2}}]},31).to({state:[{t:this.instance_13,p:{startPosition:1}},{t:this.instance_12,p:{startPosition:1}}]},1).to({state:[{t:this.instance_13,p:{startPosition:0}},{t:this.instance_12,p:{startPosition:0}}]},1).wait(10));

	// MOUTH
	this.instance_18 = new lib.FIZ23RMOUTH002("single",0);
	this.instance_18.setTransform(136.1,241.1,1,1,0,0,0,31.1,10.2);

	this.instance_19 = new lib.FIZFRMOUTH002("single",43);
	this.instance_19.setTransform(132.4,245.7,1,1,0,0,180,31.1,10.2);

	this.instance_20 = new lib.FIZ34LMOUTH002("single",3);
	this.instance_20.setTransform(139.1,242.9,1,1,0,0,180,32.4,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{startPosition:0,y:241.1}}]}).to({state:[{t:this.instance_18,p:{startPosition:1,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:41,y:241.1}}]},2).to({state:[{t:this.instance_19,p:{startPosition:43}}]},51).to({state:[{t:this.instance_18,p:{startPosition:41,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:42,y:243.1}}]},22).to({state:[{t:this.instance_18,p:{startPosition:43,y:241.9}}]},1).to({state:[{t:this.instance_18,p:{startPosition:43,y:241.5}}]},2).to({state:[{t:this.instance_18,p:{startPosition:43,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},6).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:4,y:241.1}}]},1).to({state:[{t:this.instance_19,p:{startPosition:3}}]},2).to({state:[{t:this.instance_18,p:{startPosition:4,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:11,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:7,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:8,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:7,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:4,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:19,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:4,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:19,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:18,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:1,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:18,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:7,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:29,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:10,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:7,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:11,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:19,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},3).to({state:[{t:this.instance_18,p:{startPosition:4,y:241.1}}]},1).to({state:[{t:this.instance_18,p:{startPosition:3,y:241.1}}]},3).to({state:[{t:this.instance_18,p:{startPosition:2,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:19,y:241.1}}]},2).to({state:[{t:this.instance_18,p:{startPosition:18,y:241.1}}]},9).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:4}}]},2).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:19}}]},1).to({state:[{t:this.instance_20,p:{startPosition:6}}]},2).to({state:[{t:this.instance_20,p:{startPosition:7}}]},1).to({state:[{t:this.instance_20,p:{startPosition:8}}]},1).to({state:[{t:this.instance_20,p:{startPosition:18}}]},1).to({state:[{t:this.instance_20,p:{startPosition:17}}]},2).to({state:[{t:this.instance_20,p:{startPosition:2}}]},2).to({state:[{t:this.instance_20,p:{startPosition:1}}]},1).to({state:[{t:this.instance_20,p:{startPosition:7}}]},2).to({state:[{t:this.instance_20,p:{startPosition:8}}]},2).to({state:[{t:this.instance_20,p:{startPosition:2}}]},2).to({state:[{t:this.instance_20,p:{startPosition:19}}]},1).to({state:[{t:this.instance_20,p:{startPosition:2}}]},1).to({state:[{t:this.instance_20,p:{startPosition:3}}]},1).to({state:[{t:this.instance_20,p:{startPosition:18}}]},2).to({state:[{t:this.instance_20,p:{startPosition:19}}]},2).to({state:[{t:this.instance_20,p:{startPosition:3}}]},1).to({state:[{t:this.instance_20,p:{startPosition:4}}]},2).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:19}}]},1).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:2}}]},2).to({state:[{t:this.instance_20,p:{startPosition:18}}]},1).to({state:[{t:this.instance_20,p:{startPosition:2}}]},5).to({state:[{t:this.instance_20,p:{startPosition:3}}]},1).to({state:[{t:this.instance_20,p:{startPosition:4}}]},1).to({state:[{t:this.instance_20,p:{startPosition:3}}]},1).to({state:[{t:this.instance_20,p:{startPosition:2}}]},1).to({state:[{t:this.instance_20,p:{startPosition:19}}]},1).to({state:[{t:this.instance_20,p:{startPosition:18}}]},3).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:4}}]},1).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:7}}]},2).to({state:[{t:this.instance_20,p:{startPosition:8}}]},2).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:4}}]},1).to({state:[{t:this.instance_20,p:{startPosition:3}}]},2).to({state:[{t:this.instance_20,p:{startPosition:19}}]},2).to({state:[{t:this.instance_20,p:{startPosition:18}}]},2).to({state:[{t:this.instance_20,p:{startPosition:7}}]},2).to({state:[{t:this.instance_20,p:{startPosition:8}}]},2).to({state:[{t:this.instance_20,p:{startPosition:8}}]},2).to({state:[{t:this.instance_20,p:{startPosition:9}}]},1).to({state:[{t:this.instance_20,p:{startPosition:7}}]},2).to({state:[{t:this.instance_20,p:{startPosition:6}}]},2).to({state:[{t:this.instance_20,p:{startPosition:3}}]},1).to({state:[{t:this.instance_20,p:{startPosition:4}}]},1).to({state:[{t:this.instance_20,p:{startPosition:3}}]},6).to({state:[{t:this.instance_20,p:{startPosition:19}}]},2).to({state:[{t:this.instance_20,p:{startPosition:18}}]},19).to({state:[{t:this.instance_18,p:{startPosition:0,y:241.1}}]},2).wait(11));

	// HEAD
	this.instance_21 = new lib.FIZ23REARR002("single",0);
	this.instance_21.setTransform(73,207.9,1,1,0,0,180,-1.3,27.7);

	this.instance_22 = new lib.FIZ23RHAIRTOP002("single",0);
	this.instance_22.setTransform(143.5,90.5,1,1,0,0,180,55.8,90.5);

	this.instance_23 = new lib.FIZ23RNOSE002("single",0);
	this.instance_23.setTransform(156.4,187.6,1,1,0,0,180,11.8,2.6);

	this.instance_24 = new lib.FIZ23RGLSSR002("single",0);
	this.instance_24.setTransform(85.3,191.6,1.112,1,0,0,172.2,-1.2,4.2);

	this.instance_25 = new lib.FIZ23RHAIRR002("single",0);
	this.instance_25.setTransform(53.9,154.1,1,1,0,0,180,23.3,50.8);

	this.instance_26 = new lib.FIZ23RGLSSL002("single",0);
	this.instance_26.setTransform(194.4,191.9,0.919,1,0,0,7.5,2.6,4.5);

	this.instance_27 = new lib.FIZ23RGLSSMID002("single",0);
	this.instance_27.setTransform(142.5,184.2,1,1,0,0,180,32.5,5.7);

	this.instance_28 = new lib.FIZ23RHEAD002("single",0);
	this.instance_28.setTransform(131.9,309,1,1,0,0,180,81.6,223.8);

	this.instance_29 = new lib.FIZ23REARL002("single",0);
	this.instance_29.setTransform(202,202.7,1,1,0,0,180,18.3,22.4);

	this.instance_30 = new lib.FIZ23RHAIRL002("single",0);
	this.instance_30.setTransform(209.9,137.5,1,1,0,0,180,23.4,46.5);

	this.instance_31 = new lib.FIZ23RHAT002("single",0);
	this.instance_31.setTransform(106.6,95.8,1,1,0,0,180,34.5,82.1);

	this.instance_32 = new lib.FIZFRHAIRTOP002("single",0);
	this.instance_32.setTransform(131.3,95,1,1,0,0,180,43.3,95.1);

	this.instance_33 = new lib.FIZFREARL002("single",0);
	this.instance_33.setTransform(66.4,205.7,1,1,0,0,0,23.5,22.1);

	this.instance_34 = new lib.FIZFREARR002("single",0);
	this.instance_34.setTransform(200.4,205.2,1,1,0,0,180,23.5,22.1);

	this.instance_35 = new lib.FIZFRGLSSL002("single",0);
	this.instance_35.setTransform(77.7,194.4,1.011,1,0,0,171.5,-1.2,4.2);

	this.instance_36 = new lib.FIZFRGLSSR002("single",0);
	this.instance_36.setTransform(194,194.7,1.007,1,0,0,6.9,2.6,4.5);

	this.instance_37 = new lib.FIZFRGLSSMID002("single",0);
	this.instance_37.setTransform(133.8,190.9,1,1,0,0,180,37.4,6.8);

	this.instance_38 = new lib.FIZFRNOSE002("single",0);
	this.instance_38.setTransform(129.6,182.6,1,1,0,0,180,15.8,4);

	this.instance_39 = new lib.FIZFRHEAD002("single",0);
	this.instance_39.setTransform(130.3,304.2,1,1,0,0,180,111.2,216.1);

	this.instance_40 = new lib.FIZFRHAT002("single",0);
	this.instance_40.setTransform(177.2,107.9,1,1,0,0,180,69.1,80.7);

	this.instance_41 = new lib.FIZ34LNOSE002("single",0);
	this.instance_41.setTransform(173.8,188.5,1,1,0,0,180,17,1.6);

	this.instance_42 = new lib.FIZ34LEARL002("single",0);
	this.instance_42.setTransform(77.7,199.5,1,1,0,0,180,3.1,23.4);

	this.instance_43 = new lib.FIZ34LGLSSL002("single",0);
	this.instance_43.setTransform(81.9,190.7,1,1,0,0,180,13.7,5.7);

	this.instance_44 = new lib.FIZ34LGLSSMID002("single",0);
	this.instance_44.setTransform(154.8,182.9,1,1,0,0,180,32.1,6);

	this.instance_45 = new lib.FIZ34LHAIR002("single",0);
	this.instance_45.setTransform(126.1,149.7,1,1,0,0,180,90.4,145.8);

	this.instance_46 = new lib.FIZ34LHEAD002("single",0);
	this.instance_46.setTransform(131,314.2,1,1,0,0,180,81.5,228.2);

	this.instance_47 = new lib.FIZ34LHAIRR002("single",0);
	this.instance_47.setTransform(206.2,150.3,1,1,0,0,180,27.6,58.8);

	this.instance_48 = new lib.FIZ34LHAT002("single",0);
	this.instance_48.setTransform(99.8,109.8,1,1,0,0,180,44.8,97.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32}]},55).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]},1).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32}]},37).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]},1).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},63).to({state:[{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},50).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]},62).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.2,0,203.1,324.6);


(lib.Fizzy_DANCE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// FIZ-34L-ARMR-002
	this.instance = new lib.FIZ23RARMR002("single",55);
	this.instance.setTransform(96.8,243.3,0.764,0.764,0,25.3,-154.6,-51.9,-60.6);

	this.instance_1 = new lib.FIZ23RARML002("single",60);
	this.instance_1.setTransform(113,260.5,0.759,0.759,0,10.7,-169.2,52.4,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regX:-51.9,regY:-60.6,skewX:25.3,skewY:-154.6,x:96.8,y:243.3,scaleX:0.764,scaleY:0.764,startPosition:55}}]},5).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.7,skewX:27.8,skewY:-152.1,x:97.8,y:243.3,scaleX:0.764,scaleY:0.764,startPosition:55}}]},2).to({state:[{t:this.instance,p:{regX:-51.9,regY:-60.7,skewX:29.1,skewY:-150.8,x:90.9,y:243.2,scaleX:0.764,scaleY:0.764,startPosition:55}}]},3).to({state:[]},1).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.6,skewX:17.7,skewY:-162.2,x:90.7,y:243.1,scaleX:0.764,scaleY:0.764,startPosition:55}}]},12).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.7,skewX:20.8,skewY:-159.1,x:94.1,y:243.1,scaleX:0.764,scaleY:0.764,startPosition:55}}]},2).to({state:[{t:this.instance,p:{regX:-51.9,regY:-60.6,skewX:25.3,skewY:-154.6,x:96.8,y:243.3,scaleX:0.764,scaleY:0.764,startPosition:55}}]},2).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.7,skewX:27.8,skewY:-152.1,x:97.8,y:243.3,scaleX:0.764,scaleY:0.764,startPosition:55}}]},2).to({state:[{t:this.instance,p:{regX:-51.9,regY:-60.8,skewX:25,skewY:-154.9,x:96.1,y:243.1,scaleX:0.764,scaleY:0.764,startPosition:55}}]},3).to({state:[{t:this.instance,p:{regX:-51.9,regY:-60.7,skewX:20.1,skewY:-159.8,x:90.3,y:243.3,scaleX:0.763,scaleY:0.763,startPosition:55}}]},2).to({state:[]},1).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.7,skewX:12.3,skewY:-167.6,x:92.7,y:255,scaleX:0.765,scaleY:0.765,startPosition:57}}]},10).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.6,skewX:15.8,skewY:-164.1,x:95.3,y:257.7,scaleX:0.764,scaleY:0.764,startPosition:57}}]},2).to({state:[{t:this.instance,p:{regX:-51.8,regY:-60.7,skewX:16.5,skewY:-163.4,x:96.9,y:258.5,scaleX:0.764,scaleY:0.764,startPosition:57}}]},2).to({state:[{t:this.instance,p:{regX:-51.7,regY:-60.7,skewX:16,skewY:-163.9,x:95.5,y:258.2,scaleX:0.764,scaleY:0.764,startPosition:57}}]},3).to({state:[]},2).to({state:[{t:this.instance,p:{regX:-51.4,regY:-60.7,skewX:13.3,skewY:-166.6,x:67.2,y:245.9,scaleX:0.76,scaleY:0.76,startPosition:58}}]},104).to({state:[{t:this.instance,p:{regX:-51.4,regY:-60.6,skewX:13.6,skewY:-166.3,x:60.1,y:248.9,scaleX:0.76,scaleY:0.76,startPosition:59}}]},1).to({state:[{t:this.instance,p:{regX:-51.2,regY:-60.7,skewX:14.5,skewY:-165.4,x:58.3,y:248.9,scaleX:0.76,scaleY:0.76,startPosition:59}}]},2).to({state:[{t:this.instance,p:{regX:-51.3,regY:-60.7,skewX:15.1,skewY:-164.8,x:57.5,y:249,scaleX:0.76,scaleY:0.76,startPosition:59}}]},2).to({state:[{t:this.instance,p:{regX:-51.1,regY:-60.6,skewX:16,skewY:-163.9,x:56.8,y:248.9,scaleX:0.76,scaleY:0.76,startPosition:59}}]},2).to({state:[{t:this.instance,p:{regX:-51.3,regY:-60.8,skewX:13.5,skewY:-166.4,x:55.4,y:249.3,scaleX:0.759,scaleY:0.759,startPosition:59}}]},35).to({state:[{t:this.instance,p:{regX:-51.3,regY:-60.6,skewX:11.9,skewY:-168,x:53.6,y:249.9,scaleX:0.759,scaleY:0.759,startPosition:59}}]},2).to({state:[{t:this.instance,p:{regX:-51.3,regY:-60.7,skewX:17.7,skewY:-162.2,x:64.2,y:248.7,scaleX:0.759,scaleY:0.759,startPosition:59}}]},2).to({state:[{t:this.instance,p:{regX:-51.2,regY:-60.7,skewX:24.8,skewY:-155.1,x:72.7,y:248.5,scaleX:0.759,scaleY:0.759,startPosition:59}}]},1).to({state:[{t:this.instance,p:{regX:-51.4,regY:-60.8,skewX:35.1,skewY:-144.8,x:84.7,y:256,scaleX:0.758,scaleY:0.758,startPosition:59}},{t:this.instance_1,p:{regX:52.4,scaleX:0.759,scaleY:0.759,skewX:10.7,skewY:-169.2,x:113,y:260.5,startPosition:60,regY:-52}}]},1).to({state:[{t:this.instance_1,p:{regX:52.2,scaleX:0.758,scaleY:0.758,skewX:12.3,skewY:-167.6,x:123.4,y:273.3,startPosition:61,regY:-52}}]},1).to({state:[{t:this.instance_1,p:{regX:52.3,scaleX:0.759,scaleY:0.759,skewX:10.8,skewY:-169.1,x:124.1,y:273.7,startPosition:61,regY:-52}}]},2).to({state:[{t:this.instance_1,p:{regX:52.2,scaleX:0.759,scaleY:0.759,skewX:11.1,skewY:-168.8,x:123.5,y:273.1,startPosition:61,regY:-52.1}}]},2).to({state:[{t:this.instance_1,p:{regX:52.2,scaleX:0.759,scaleY:0.759,skewX:11.8,skewY:-168.1,x:123,y:272.5,startPosition:61,regY:-52}}]},2).to({state:[{t:this.instance_1,p:{regX:52.1,scaleX:0.758,scaleY:0.758,skewX:14.1,skewY:-165.8,x:124.3,y:273.9,startPosition:61,regY:-52.1}}]},18).to({state:[{t:this.instance_1,p:{regX:52.2,scaleX:0.758,scaleY:0.758,skewX:15.8,skewY:-164.1,x:125.7,y:275.5,startPosition:61,regY:-52.1}}]},2).to({state:[]},2).wait(45));

	// FIZ-34L-APRON-002
	this.instance_2 = new lib.FIZ23RCOLLARFR002("single",0);
	this.instance_2.setTransform(83.1,245.7,0.747,0.765,0,-2.8,177.1,56.1,42.4);

	this.instance_3 = new lib.FIZ34LAPRON002("single",0);
	this.instance_3.setTransform(93.7,369.4,0.77,0.77,0,1.3,-178.6,29.3,167.5);

	this.instance_4 = new lib.FIZ23RARMR002("single",60);
	this.instance_4.setTransform(95.3,267.5,0.757,0.757,0,40.1,-139.8,-51.3,-60.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{scaleX:0.747,scaleY:0.765,skewX:-2.8,skewY:177.1,x:83.1,y:245.7,regX:56.1,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-4.9,skewY:175,x:97.3,y:247.2,regX:56.1,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:102.8,y:248.7,regX:55.9,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:103.8,y:249,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:-5.1,skewY:174.8,x:97.3,y:247.8,regX:55.9,regY:42.1,rotation:0}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:-3.9,skewY:176,x:87.3,y:245.8,regX:56.1,regY:42.3,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-2.7,skewY:177.2,x:80.5,y:245.1,regX:56.2,regY:42.2,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:-0.7,skewY:179.2,x:70.1,y:244.8,regX:56.1,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0.1,skewY:-179.9,x:63,y:246,regX:55.9,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.762,skewX:0.6,skewY:-179.3,x:60.9,y:246.3,regX:55.9,regY:42.5,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.762,skewX:0.1,skewY:-179.8,x:63.4,y:246.2,regX:55.8,regY:42.5,rotation:0}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-2.4,skewY:177.5,x:73.1,y:246,regX:55.7,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-3.2,skewY:176.7,x:82,y:245.5,regX:55.8,regY:42.2,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.763,skewX:-5.1,skewY:174.8,x:96.9,y:247.6,regX:55.8,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-5.6,skewY:174.3,x:100.1,y:248.1,regX:56,regY:42.3,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:102.8,y:248.7,regX:55.9,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:103.8,y:249,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:102.2,y:248.7,regX:56,regY:42.4,rotation:0}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:-5.1,skewY:174.8,x:97.3,y:247.8,regX:55.9,regY:42.1,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:-3.9,skewY:176,x:87.3,y:245.8,regX:56.1,regY:42.3,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:-0.7,skewY:179.2,x:70.1,y:244.8,regX:56.1,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0.1,skewY:-179.9,x:63,y:246,regX:55.9,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.762,skewX:0.6,skewY:-179.3,x:60.9,y:246.3,regX:55.9,regY:42.5,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0.1,skewY:-179.9,x:63,y:246,regX:55.9,regY:42.4,rotation:0}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:3.1,skewY:-176.8,x:79.5,y:249.8,regX:56.1,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.763,skewX:8.7,skewY:-171.2,x:98.5,y:261,regX:56,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.763,skewX:9.9,skewY:-170,x:101,y:264.2,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.763,skewX:10.6,skewY:-169.3,x:102.5,y:266.3,regX:56.1,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.746,scaleY:0.763,skewX:10.1,skewY:-169.8,x:101.2,y:265.9,regX:56.1,regY:42.4,rotation:0}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:3.8,skewY:-176.1,x:94,y:257,regX:56,regY:42.4,rotation:0}}]},2).to({state:[]},1).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:94.3,y:252.4,regX:56,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:88.9,y:247.7,regX:56.1,regY:42.5,rotation:-0.4}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:87.3,y:246.9,regX:56,regY:42.5,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:89.9,y:246.9,regX:55.9,regY:42.6,rotation:0.7}}]},4).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.762,skewX:0,skewY:0,x:101.4,y:247.5,regX:56,regY:42.2,rotation:3.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.745,scaleY:0.762,skewX:0,skewY:0,x:106.7,y:247.9,regX:55.9,regY:42.5,rotation:3.1}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:108,y:248,regX:55.9,regY:42.5,rotation:3}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:109.2,y:248.3,regX:55.9,regY:42.6,rotation:3}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:110.4,y:248.3,regX:56,regY:42.5,rotation:3.1}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:104.6,y:247.4,regX:56,regY:42.4,rotation:1.9}}]},3).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:100.1,y:247.3,regX:56,regY:42.5,rotation:0.4}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:94.2,y:246.8,regX:55.9,regY:42.4,rotation:-0.9}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:88.4,y:246.8,regX:55.9,regY:42.5,rotation:-1.3}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:89.6,y:246.9,regX:56.1,regY:42.6,rotation:-0.8}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:90.2,y:247,regX:56.1,regY:42.6,rotation:-0.5}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:91.1,y:247,regX:56,regY:42.6,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:91.7,y:248.9,regX:56,regY:42.5,rotation:0}}]},4).to({state:[{t:this.instance_2,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:94.1,y:251,regX:56,regY:42.6,rotation:0}}]},2).to({state:[]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-1.8,skewY:178.1,x:91.7,y:252,regX:56,regY:42.3,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-1.7,skewY:178.2,x:93.2,y:250.6,regX:56,regY:42.3,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-1.6,skewY:178.3,x:93.9,y:247.2,regX:56,regY:42.1,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-1.8,skewY:178.1,x:94.8,y:245.8,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-1.8,skewY:178.1,x:94.8,y:245.8,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-3.1,skewY:176.8,x:93.5,y:246,regX:55.9,regY:42.3,rotation:0}}]},13).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-4.1,skewY:175.8,x:92.5,y:246.2,regX:56,regY:42.3,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:-1,skewY:178.9,x:94.9,y:245.7,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.761,skewX:2.8,skewY:-177.1,x:98.1,y:245.2,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.76,skewX:5,skewY:-174.9,x:99.7,y:244.9,regX:56,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.742,scaleY:0.76,skewX:6.6,skewY:-173.3,x:103.1,y:245,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.76,skewX:6.3,skewY:-173.6,x:102.3,y:245,regX:56.1,regY:42.5,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.76,skewX:5.8,skewY:-174.1,x:101.4,y:244.9,regX:56,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.76,skewX:6.8,skewY:-173.1,x:102.5,y:244.9,regX:55.9,regY:42.4,rotation:0}}]},25).to({state:[{t:this.instance_2,p:{scaleX:0.743,scaleY:0.76,skewX:7.9,skewY:-172,x:103.6,y:244.8,regX:55.9,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.742,scaleY:0.76,skewX:3.5,skewY:-176.4,x:97.9,y:245.1,regX:55.8,regY:42.4,rotation:0}}]},2).to({state:[{t:this.instance_2,p:{scaleX:0.742,scaleY:0.76,skewX:-0.4,skewY:179.5,x:87.2,y:244.3,regX:55.9,regY:42.4,rotation:0}}]},1).to({state:[{t:this.instance_3,p:{regX:29.3,regY:167.5,skewX:1.3,skewY:-178.6,x:93.7,y:369.4,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-0.9,skewY:179,x:91.6,y:370.2,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-1.8,skewY:178.1,x:91.7,y:370.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-2.2,skewY:177.7,x:91.7,y:370.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-2.4,skewY:177.5,x:91.7,y:370.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_3,p:{regX:29.4,regY:167.2,skewX:-3.2,skewY:176.7,x:91.6,y:370.1,scaleX:0.77,scaleY:0.77}}]},35).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-4,skewY:175.9,x:91.7,y:370.1,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_3,p:{regX:29.3,regY:167.2,skewX:1.7,skewY:-178.2,x:89.9,y:372.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:6.2,skewY:-173.7,x:88.7,y:373.5,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:13.2,skewY:-166.7,x:85.3,y:382,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_4,p:{regY:-60.5,scaleX:0.757,scaleY:0.757,skewX:40.1,skewY:-139.8,x:95.3,y:267.5,regX:-51.3}}]},1).to({state:[{t:this.instance_4,p:{regY:-60.7,scaleX:0.759,scaleY:0.759,skewX:42.9,skewY:-137,x:96.3,y:267.6,regX:-51.3}}]},2).to({state:[{t:this.instance_4,p:{regY:-60.7,scaleX:0.758,scaleY:0.758,skewX:41.7,skewY:-138.2,x:95.5,y:267.3,regX:-51.1}}]},2).to({state:[{t:this.instance_4,p:{regY:-60.7,scaleX:0.758,scaleY:0.758,skewX:40.9,skewY:-139,x:95.1,y:266.8,regX:-51.3}}]},2).to({state:[{t:this.instance_4,p:{regY:-60.5,scaleX:0.758,scaleY:0.758,skewX:39.9,skewY:-140,x:96.2,y:267.8,regX:-51.1}}]},18).to({state:[{t:this.instance_4,p:{regY:-60.6,scaleX:0.758,scaleY:0.758,skewX:39.6,skewY:-140.3,x:97.9,y:268.9,regX:-51.2}}]},2).to({state:[{t:this.instance_4,p:{regY:-60.7,scaleX:0.758,scaleY:0.758,skewX:28.3,skewY:-151.6,x:79.2,y:266.6,regX:-51.1}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-3.2,skewY:176.7,x:88.1,y:370,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.2,skewX:-8.8,skewY:171.1,x:90.5,y:370,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.1,skewX:-10.2,skewY:169.7,x:90,y:370.1,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.3,skewX:-10.5,skewY:169.4,x:89.4,y:370.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.3,skewX:-10,skewY:169.9,x:89.4,y:370.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.3,skewX:-9.5,skewY:170.4,x:89.4,y:370.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.3,regY:167.3,skewX:-9.7,skewY:170.2,x:89.4,y:370.1,scaleX:0.769,scaleY:0.769}}]},18).to({state:[{t:this.instance_3,p:{regX:29.3,regY:167.3,skewX:-10,skewY:169.9,x:89.3,y:370.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.3,skewX:-9.5,skewY:170.4,x:89.4,y:370.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.2,regY:167.3,skewX:-5.2,skewY:174.7,x:90.6,y:370.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_3,p:{regX:29.3,regY:167.5,skewX:-1.7,skewY:178.2,x:91.7,y:368.7,scaleX:0.769,scaleY:0.769}}]},1).to({state:[]},1).wait(10));

	// Layer 39
	this.instance_5 = new lib.FIZ23RARML002("single",58);
	this.instance_5.setTransform(121.6,263.4,0.765,0.765,0,12.3,-167.6,52.9,-51.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(45).to({startPosition:58,_off:false},0).wait(2).to({regY:-51.7,scaleX:0.76,scaleY:0.76,skewX:10.2,skewY:-169.6,x:124,y:266.8},0).wait(2).to({regY:-51.6,skewX:10.9,skewY:-168.9,x:125.5,y:268},0).wait(3).to({skewX:10.4,skewY:-169.4,x:124.3,y:267.4},0).wait(2).to({regX:53,regY:-51.7,skewX:10.9,skewY:-168.9,x:117.1,y:261.4},0).to({_off:true},1).wait(225));

	// FIZ-34L-TIE-002
	this.instance_6 = new lib.FIZ23RAPRON002("single",0);
	this.instance_6.setTransform(89.8,365.2,0.765,0.765,0,5.5,-174.4,32.4,162);

	this.instance_7 = new lib.FIZFRAPRON002("single",0);
	this.instance_7.setTransform(94.2,373.3,0.773,0.773,0.3,0,0,42,162.3);

	this.instance_8 = new lib.FIZ34LTIE002("synched",0);
	this.instance_8.setTransform(85.4,323.6,0.77,0.77,0,1.3,-178.6);

	this.instance_9 = new lib.FIZ34LTORSO002apron("single",0);
	this.instance_9.setTransform(89.5,362.4,0.768,0.768,0,15.8,-164.1,-1.8,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.765,scaleY:0.765,skewX:5.5,skewY:-174.4,x:89.8,regX:32.4,y:365.2,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.764,scaleY:0.764,skewX:11.3,skewY:-168.6,x:90.5,regX:32.4,y:365.2,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.765,scaleY:0.765,skewX:14.2,skewY:-165.7,x:91.2,regX:32.2,y:365.4,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.765,scaleY:0.765,skewX:14.8,skewY:-165.1,x:91.2,regX:32.2,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:161.9,scaleX:0.764,scaleY:0.764,skewX:11.5,skewY:-168.4,x:91.1,regX:32.4,y:365.4,rotation:0}}]},3).to({state:[{t:this.instance_6,p:{regY:161.8,scaleX:0.763,scaleY:0.763,skewX:6.5,skewY:-173.4,x:91.4,regX:32.2,y:364.9,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:161.9,scaleX:0.763,scaleY:0.763,skewX:3.2,skewY:-176.7,x:91.3,regX:32.1,y:365,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:161.9,scaleX:0.764,scaleY:0.764,skewX:-1.7,skewY:178.2,x:91.3,regX:32.2,y:364.4,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:91.5,regX:32.1,y:365.1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:-6.1,skewY:173.8,x:91.5,regX:32.1,y:365.1,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:-5.3,skewY:174.6,x:92.3,regX:32.2,y:365.2,rotation:0}}]},3).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.763,scaleY:0.763,skewX:-0.1,skewY:179.8,x:91.5,regX:32.1,y:365,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:4.1,skewY:-175.8,x:91.6,regX:32.1,y:365.2,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.764,scaleY:0.764,skewX:11.4,skewY:-168.5,x:91.2,regX:32.2,y:365.4,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.765,scaleY:0.765,skewX:13,skewY:-166.9,x:91.2,regX:32.2,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.765,scaleY:0.765,skewX:14.2,skewY:-165.7,x:91.2,regX:32.2,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.765,scaleY:0.765,skewX:14.8,skewY:-165.1,x:91.2,regX:32.2,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:14,skewY:-165.9,x:91.2,regX:32.2,y:365.4,rotation:0}}]},3).to({state:[{t:this.instance_6,p:{regY:161.9,scaleX:0.764,scaleY:0.764,skewX:11.5,skewY:-168.4,x:91.1,regX:32.4,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:161.8,scaleX:0.763,scaleY:0.763,skewX:6.5,skewY:-173.4,x:91.4,regX:32.2,y:364.9,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:161.9,scaleX:0.764,scaleY:0.764,skewX:-1.7,skewY:178.2,x:91.3,regX:32.2,y:364.4,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:91.5,regX:32.1,y:365.1,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:-6.1,skewY:173.8,x:91.5,regX:32.1,y:365.1,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:91.5,regX:32.1,y:365.1,rotation:0}}]},3).to({state:[{t:this.instance_6,p:{regY:161.9,scaleX:0.763,scaleY:0.763,skewX:3.5,skewY:-176.4,x:89.7,regX:32.1,y:367.7,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.765,scaleY:0.765,skewX:12.3,skewY:-167.6,x:91.3,regX:32.2,y:377.4,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.765,scaleY:0.765,skewX:13.5,skewY:-166.4,x:91.3,regX:32.2,y:380,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.765,scaleY:0.765,skewX:14.2,skewY:-165.7,x:91.3,regX:32.2,y:380.8,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.765,scaleY:0.765,skewX:13.7,skewY:-166.2,x:91.1,regX:32.2,y:380.4,rotation:0}}]},3).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:9,skewY:-170.9,x:93.5,regX:32.2,y:376.8,rotation:0}}]},2).to({state:[{t:this.instance_7,p:{regX:42,regY:162.3,rotation:0.3,x:94.2,y:373.3}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:90.9,regX:32,y:371.1,rotation:-6.8}}]},1).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:86.5,regX:32.1,y:367.9,rotation:-7.2}}]},2).to({state:[{t:this.instance_6,p:{regY:162,scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:83.9,regX:32.1,y:367,rotation:-6.7}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:83.9,regX:32.1,y:367.1,rotation:-5.4}}]},4).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32,y:367.1,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:83.8,regX:32.1,y:367,rotation:2.6}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.7,regX:32.1,y:367,rotation:3}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.1,y:367,rotation:3.5}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.1,y:367.1,rotation:4.3}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.2,y:367,rotation:1.6}}]},3).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.1,y:367,rotation:-0.5}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.1,y:367,rotation:-3.2}}]},1).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.1,y:367.1,rotation:-6.1}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.2,y:367,rotation:-5.6}}]},2).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.1,y:367.1,rotation:-5.3}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.8,regX:32.2,y:367.1,rotation:-4.8}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:84.7,regX:32.1,y:369,rotation:-5}}]},4).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:86.8,regX:32.2,y:371.1,rotation:-4.8}}]},2).to({state:[{t:this.instance_7,p:{regX:43.4,regY:160.8,rotation:-0.9,x:97.8,y:376.2}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:4.7,skewY:-175.2,x:99.6,regX:32.1,y:371.8,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:5.3,skewY:-174.6,x:99.6,regX:32.1,y:370.3,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:5.8,skewY:-174.1,x:99.5,regX:32.1,y:367.1,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:6.2,skewY:-173.7,x:99.5,regX:32.1,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:6.2,skewY:-173.7,x:99.5,regX:32.1,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:5.6,skewY:-174.3,x:99.5,regX:32.1,y:365.5,rotation:0}}]},13).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:5.2,skewY:-174.7,x:99.5,regX:32,y:365.5,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.763,scaleY:0.763,skewX:6.2,skewY:-173.7,x:99.5,regX:32.1,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:7.6,skewY:-172.3,x:99.4,regX:32.2,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:8.3,skewY:-171.6,x:99.4,regX:32.2,y:365.5,rotation:0}}]},1).to({state:[{t:this.instance_6,p:{regY:162.1,scaleX:0.762,scaleY:0.762,skewX:9.9,skewY:-170,x:99.4,regX:32.4,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:9.6,skewY:-170.3,x:99.5,regX:32.2,y:365.5,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:9.1,skewY:-170.8,x:99.4,regX:32.2,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:9.6,skewY:-170.3,x:99.5,regX:32.1,y:365.5,rotation:0}}]},25).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:10.1,skewY:-169.8,x:99.5,regX:32.1,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:7.8,skewY:-172.1,x:98.7,regX:32,y:365.4,rotation:0}}]},2).to({state:[{t:this.instance_6,p:{regY:162.2,scaleX:0.762,scaleY:0.762,skewX:3.2,skewY:-176.7,x:97.6,regX:32.1,y:364.2,rotation:0}}]},1).to({state:[{t:this.instance_8,p:{skewX:1.3,skewY:-178.6,x:85.4,y:323.6,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_8,p:{skewX:-0.9,skewY:179,x:81.5,y:325,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_8,p:{skewX:-1.8,skewY:178.1,x:80.9,y:325.1,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_8,p:{skewX:-2.2,skewY:177.7,x:80.6,y:325.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_8,p:{skewX:-2.4,skewY:177.5,x:80.4,y:325.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_8,p:{skewX:-3.2,skewY:176.7,x:79.8,y:325.4,scaleX:0.77,scaleY:0.77}}]},35).to({state:[{t:this.instance_8,p:{skewX:-4,skewY:175.9,x:79.1,y:325.6,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_8,p:{skewX:1.7,skewY:-178.2,x:82,y:326.5,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:6.2,skewY:-173.7,x:84.3,y:327.5,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_8,p:{skewX:13.2,skewY:-166.7,x:86.5,y:335.7,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_9,p:{regY:50.7,scaleX:0.768,scaleY:0.768,skewX:15.8,skewY:-164.1,y:362.4,x:89.5}}]},1).to({state:[{t:this.instance_9,p:{regY:50.6,scaleX:0.769,scaleY:0.769,skewX:16.6,skewY:-163.3,y:363,x:89.5}}]},2).to({state:[{t:this.instance_9,p:{regY:50.7,scaleX:0.769,scaleY:0.769,skewX:16.1,skewY:-163.8,y:362.8,x:89.5}}]},2).to({state:[{t:this.instance_9,p:{regY:50.7,scaleX:0.769,scaleY:0.769,skewX:15.8,skewY:-164.1,y:362.3,x:89.5}}]},2).to({state:[{t:this.instance_9,p:{regY:50.8,scaleX:0.769,scaleY:0.769,skewX:16.6,skewY:-163.3,y:363.2,x:89.5}}]},18).to({state:[{t:this.instance_9,p:{regY:50.8,scaleX:0.769,scaleY:0.769,skewX:17.6,skewY:-162.3,y:364.3,x:89.4}}]},2).to({state:[{t:this.instance_9,p:{regY:50.8,scaleX:0.768,scaleY:0.768,skewX:6.3,skewY:-173.6,y:361.8,x:89.4}}]},2).to({state:[{t:this.instance_8,p:{skewX:-3.2,skewY:176.7,x:76.3,y:325.4,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_8,p:{skewX:-8.8,skewY:171.1,x:74.4,y:326.7,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_8,p:{skewX:-10.2,skewY:169.7,x:72.8,y:327.3,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_8,p:{skewX:-10.5,skewY:169.4,x:71.9,y:327.3,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:-10,skewY:169.9,x:72.3,y:327.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:-9.5,skewY:170.4,x:72.7,y:327,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:-9.8,skewY:170.1,x:72.5,y:327.1,scaleX:0.769,scaleY:0.769}}]},18).to({state:[{t:this.instance_8,p:{skewX:-10,skewY:169.9,x:72.3,y:327.2,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:-9.5,skewY:170.4,x:72.7,y:327,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:-5.2,skewY:174.7,x:77.2,y:325.8,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_8,p:{skewX:-1.7,skewY:178.2,x:81,y:323.6,scaleX:0.769,scaleY:0.769}}]},1).to({state:[]},1).wait(10));

	// FIZ-34L-ARMR-002
	this.instance_10 = new lib.FIZ23RTIE002("single",0);
	this.instance_10.setTransform(87.9,317.3,0.765,0.765,0,5.5,-174.4,32,6.6);

	this.instance_11 = new lib.FIZ23RARMR002("single",48);
	this.instance_11.setTransform(67.2,245.9,0.76,0.76,0,13.3,-166.6,-51.4,-60.7);

	this.instance_12 = new lib.FIZ23RARML002("single",60);
	this.instance_12.setTransform(113,260.5,0.759,0.759,0,10.7,-169.2,52.4,-52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10,p:{regX:32,regY:6.6,skewX:5.5,skewY:-174.4,x:87.9,y:317.3,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:10.1,skewY:-169.8,x:92.7,y:316.9,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:12.2,skewY:-167.7,x:94.8,y:317.4,scaleX:0.765,scaleY:0.765,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:12.7,skewY:-167.2,x:95.2,y:317.5,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.6,skewX:9.5,skewY:-170.4,x:92.5,y:317.6,scaleX:0.764,scaleY:0.764,rotation:0}}]},3).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:4.4,skewY:-175.5,x:88.4,y:317.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:1.1,skewY:-178.8,x:85.7,y:317.5,scaleX:0.763,scaleY:0.763,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-3.8,skewY:176.1,x:81.6,y:317.6,scaleX:0.764,scaleY:0.764,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-7.1,skewY:172.8,x:79,y:318.8,scaleX:0.764,scaleY:0.764,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-8.1,skewY:171.8,x:78.2,y:319,scaleX:0.764,scaleY:0.764,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:-7.3,skewY:172.6,x:79.6,y:318.9,scaleX:0.764,scaleY:0.764,rotation:0}}]},3).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:-2.1,skewY:177.8,x:83,y:317.8,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:2.1,skewY:-177.8,x:86.6,y:317.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:9.3,skewY:-170.6,x:92.4,y:317.3,scaleX:0.764,scaleY:0.764,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:10.9,skewY:-169,x:93.7,y:317.4,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:12.2,skewY:-167.7,x:94.8,y:317.4,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:12.7,skewY:-167.2,x:95.2,y:317.5,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:11.9,skewY:-168,x:94.6,y:317.4,scaleX:0.765,scaleY:0.765,rotation:0}}]},3).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.6,skewX:9.5,skewY:-170.4,x:92.5,y:317.6,scaleX:0.764,scaleY:0.764,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:4.4,skewY:-175.5,x:88.4,y:317.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-3.8,skewY:176.1,x:81.6,y:317.6,scaleX:0.764,scaleY:0.764,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-7.1,skewY:172.8,x:79,y:318.8,scaleX:0.764,scaleY:0.764,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-8.1,skewY:171.8,x:78.2,y:319,scaleX:0.764,scaleY:0.764,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:-7.1,skewY:172.8,x:79,y:318.8,scaleX:0.764,scaleY:0.764,rotation:0}}]},3).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:1.4,skewY:-178.5,x:84.3,y:320.2,scaleX:0.764,scaleY:0.764,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:10.2,skewY:-169.7,x:93.2,y:329.3,scaleX:0.765,scaleY:0.765,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:11.4,skewY:-168.5,x:94.2,y:332,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:12.2,skewY:-167.7,x:94.8,y:332.8,scaleX:0.765,scaleY:0.765,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:11.6,skewY:-168.3,x:94.2,y:332.4,scaleX:0.765,scaleY:0.765,rotation:0}}]},3).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:6.9,skewY:-173,x:92.7,y:328.9,scaleX:0.764,scaleY:0.764,rotation:0}}]},2).to({state:[]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:93.4,y:323,scaleX:0.764,scaleY:0.764,rotation:-4.8}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:88.7,y:319.8,scaleX:0.764,scaleY:0.764,rotation:-5.2}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:0,skewY:0,x:86.5,y:319,scaleX:0.764,scaleY:0.764,rotation:-4.7}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:0,skewY:0,x:87.6,y:319.1,scaleX:0.764,scaleY:0.764,rotation:-3.4}}]},4).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:0,skewY:0,x:92.1,y:319.8,scaleX:0.764,scaleY:0.764,rotation:2}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:94,y:320.1,scaleX:0.764,scaleY:0.764,rotation:4.6}}]},1).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:0,skewY:0,x:94.5,y:320.2,scaleX:0.763,scaleY:0.763,rotation:5}}]},1).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:0,skewY:0,x:95.1,y:320.3,scaleX:0.763,scaleY:0.763,rotation:5.5}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:95.5,y:320.4,scaleX:0.764,scaleY:0.764,rotation:6.3}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:93.3,y:319.8,scaleX:0.763,scaleY:0.763,rotation:3.6}}]},3).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:0,skewY:0,x:91.5,y:319.7,scaleX:0.763,scaleY:0.763,rotation:1.2}}]},2).to({state:[{t:this.instance_10,p:{regX:31.9,regY:6.5,skewX:0,skewY:0,x:89.1,y:319.3,scaleX:0.763,scaleY:0.763,rotation:-1.2}}]},1).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:0,skewY:0,x:86.7,y:319.1,scaleX:0.763,scaleY:0.763,rotation:-4.1}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:87.1,y:319.1,scaleX:0.763,scaleY:0.763,rotation:-3.6}}]},2).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:0,skewY:0,x:87.4,y:319.1,scaleX:0.763,scaleY:0.763,rotation:-3.3}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:87.8,y:319.1,scaleX:0.763,scaleY:0.763,rotation:-2.8}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:88.6,y:321,scaleX:0.763,scaleY:0.763,rotation:-3}}]},4).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:0,skewY:0,x:90.8,y:323.1,scaleX:0.763,scaleY:0.763,rotation:-2.8}}]},2).to({state:[]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.4,skewX:2.7,skewY:-177.2,x:95.3,y:323.9,scaleX:0.763,scaleY:0.763,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.4,skewX:3.3,skewY:-176.6,x:95.9,y:322.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:3.8,skewY:-176.1,x:96.1,y:319.1,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.4,skewX:4.2,skewY:-175.7,x:96.5,y:317.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.4,skewX:4.2,skewY:-175.7,x:96.5,y:317.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:3.6,skewY:-176.3,x:96,y:317.6,scaleX:0.763,scaleY:0.763,rotation:0}}]},13).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.4,skewX:3.2,skewY:-176.7,x:95.6,y:317.4,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.4,skewX:4.2,skewY:-175.7,x:96.5,y:317.3,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:5.6,skewY:-174.3,x:97.8,y:317.4,scaleX:0.763,scaleY:0.763,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:6.3,skewY:-173.6,x:98.3,y:317.4,scaleX:0.762,scaleY:0.762,rotation:0}}]},1).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:7.9,skewY:-172,x:99.7,y:317.3,scaleX:0.762,scaleY:0.762,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:7.6,skewY:-172.3,x:99.4,y:317.3,scaleX:0.762,scaleY:0.762,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.8,regY:6.5,skewX:7.1,skewY:-172.8,x:99,y:317.3,scaleX:0.762,scaleY:0.762,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:7.6,skewY:-172.3,x:99.4,y:317.3,scaleX:0.762,scaleY:0.762,rotation:0}}]},25).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:8.1,skewY:-171.8,x:99.8,y:317.3,scaleX:0.762,scaleY:0.762,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:5.8,skewY:-174.1,x:97.1,y:317.4,scaleX:0.762,scaleY:0.762,rotation:0}}]},2).to({state:[{t:this.instance_10,p:{regX:31.7,regY:6.5,skewX:1.2,skewY:-178.7,x:92.1,y:316.4,scaleX:0.762,scaleY:0.762,rotation:0}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:13.3,skewY:-166.6,x:67.2,y:245.9,startPosition:48,regX:-51.4,scaleX:0.76,scaleY:0.76}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.6,skewX:13.6,skewY:-166.3,x:60.1,y:248.9,startPosition:49,regX:-51.4,scaleX:0.76,scaleY:0.76}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:14.5,skewY:-165.4,x:58.3,y:248.9,startPosition:49,regX:-51.2,scaleX:0.76,scaleY:0.76}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:15.1,skewY:-164.8,x:57.5,y:249,startPosition:49,regX:-51.3,scaleX:0.76,scaleY:0.76}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.6,skewX:16,skewY:-163.9,x:56.8,y:248.9,startPosition:49,regX:-51.1,scaleX:0.76,scaleY:0.76}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.8,skewX:13.5,skewY:-166.4,x:55.4,y:249.3,startPosition:49,regX:-51.3,scaleX:0.759,scaleY:0.759}}]},35).to({state:[{t:this.instance_11,p:{regY:-60.6,skewX:11.9,skewY:-168,x:53.6,y:249.9,startPosition:49,regX:-51.3,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:17.7,skewY:-162.2,x:64.2,y:248.7,startPosition:49,regX:-51.3,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:24.8,skewY:-155.1,x:72.7,y:248.5,startPosition:49,regX:-51.2,scaleX:0.759,scaleY:0.759}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.8,skewX:35.1,skewY:-144.8,x:84.7,y:256,startPosition:49,regX:-51.4,scaleX:0.758,scaleY:0.758}},{t:this.instance_12}]},1).to({state:[{t:this.instance_11,p:{regY:-60.5,skewX:40.1,skewY:-139.8,x:95.3,y:267.5,startPosition:52,regX:-51.3,scaleX:0.757,scaleY:0.757}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:42.9,skewY:-137,x:96.3,y:267.6,startPosition:52,regX:-51.3,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:41.7,skewY:-138.2,x:95.5,y:267.3,startPosition:52,regX:-51.1,scaleX:0.758,scaleY:0.758}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:40.9,skewY:-139,x:95.1,y:266.8,startPosition:52,regX:-51.3,scaleX:0.758,scaleY:0.758}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.5,skewX:39.9,skewY:-140,x:96.2,y:267.8,startPosition:52,regX:-51.1,scaleX:0.758,scaleY:0.758}}]},18).to({state:[{t:this.instance_11,p:{regY:-60.6,skewX:39.6,skewY:-140.3,x:97.9,y:268.9,startPosition:52,regX:-51.2,scaleX:0.758,scaleY:0.758}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:28.3,skewY:-151.6,x:79.2,y:266.6,startPosition:52,regX:-51.1,scaleX:0.758,scaleY:0.758}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:15.2,skewY:-164.7,x:51.7,y:249.4,startPosition:52,regX:-51.2,scaleX:0.759,scaleY:0.759}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:9.7,skewY:-170.2,x:42.6,y:253.4,startPosition:52,regX:-51.1,scaleX:0.759,scaleY:0.759}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:11.3,skewY:-168.6,x:39,y:254.9,startPosition:52,regX:-51.2,scaleX:0.759,scaleY:0.759}}]},1).to({state:[{t:this.instance_11,p:{regY:-60.7,skewX:13.9,skewY:-166,x:37.9,y:255,startPosition:52,regX:-51.1,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.8,skewX:13.5,skewY:-166.4,x:38.9,y:254.6,startPosition:52,regX:-51,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.9,skewX:13.2,skewY:-166.7,x:40,y:254,startPosition:52,regX:-51,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-61,skewX:14.8,skewY:-165.1,x:39.5,y:254.3,startPosition:52,regX:-51,scaleX:0.759,scaleY:0.759}}]},18).to({state:[{t:this.instance_11,p:{regY:-61,skewX:15.7,skewY:-164.2,x:38.9,y:254.5,startPosition:52,regX:-51,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.9,skewX:13.2,skewY:-166.7,x:40,y:254,startPosition:52,regX:-51,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-60.8,skewX:17.4,skewY:-162.5,x:50,y:250.7,startPosition:52,regX:-51,scaleX:0.759,scaleY:0.759}}]},2).to({state:[{t:this.instance_11,p:{regY:-61,skewX:20.9,skewY:-159,x:58.5,y:247,startPosition:54,regX:-51,scaleX:0.758,scaleY:0.758}}]},1).to({state:[]},1).wait(10));

	// FIZ-34L-TORSO-002
	this.instance_13 = new lib.FIZ_23_part_03211509("single",0);
	this.instance_13.setTransform(87,325.4,0.768,0.768,0,0,180,23.4,111.3);

	this.instance_14 = new lib.FIZ23RTORSO002("synched",0);
	this.instance_14.setTransform(88.6,299.3,0.765,0.765,0,5.5,-174.4);

	this.instance_15 = new lib.FIZFRTORSO002("single",0);
	this.instance_15.setTransform(94.1,341.7,0.773,0.773,0.3,0,0,33.8,121.6);

	this.instance_16 = new lib.FIZ34LTORSO002copy2("synched",0);
	this.instance_16.setTransform(85.2,300.9,0.77,0.77,0,1.3,-178.6);

	this.instance_17 = new lib.FIZ34LTORSO002copy("single",1);
	this.instance_17.setTransform(89.5,362.4,0.768,0.768,0,15.8,-164.1,-1.8,50.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13,p:{regX:23.4,regY:111.3,skewX:0,skewY:180,x:87,y:325.4}}]}).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:5.5,skewY:-174.4,x:88.6,y:299.3,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:11.3,skewY:-168.6,x:95.9,y:299.3,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:14.2,skewY:-165.7,x:100,y:299.9,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:14.8,skewY:-165.1,x:100.6,y:300,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:11.5,skewY:-168.4,x:96.9,y:299.7,rotation:0}}]},3).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:6.5,skewY:-173.4,x:91.1,y:299.2,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:3.2,skewY:-176.7,x:87.3,y:299.4,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-1.7,skewY:178.2,x:81.7,y:299.3,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:78.1,y:300.5,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-6.1,skewY:173.8,x:76.9,y:300.8,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-5.3,skewY:174.6,x:78.6,y:300.7,rotation:0}}]},3).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:-0.1,skewY:179.8,x:83.6,y:299.6,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:4.1,skewY:-175.8,x:88.7,y:299.2,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:11.4,skewY:-168.5,x:96.7,y:299.6,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:13,skewY:-166.9,x:98.5,y:299.7,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:14.2,skewY:-165.7,x:100,y:299.9,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:14.8,skewY:-165.1,x:100.6,y:300,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:14,skewY:-165.9,x:99.7,y:299.9,rotation:0}}]},3).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:11.5,skewY:-168.4,x:96.9,y:299.7,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:6.5,skewY:-173.4,x:91.1,y:299.2,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-1.7,skewY:178.2,x:81.7,y:299.3,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:78.1,y:300.5,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-6.1,skewY:173.8,x:76.9,y:300.8,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:78.1,y:300.5,rotation:0}}]},3).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:3.5,skewY:-176.4,x:86.1,y:302.1,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:12.3,skewY:-167.6,x:97.8,y:311.6,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:13.5,skewY:-166.4,x:99.2,y:314.4,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:14.2,skewY:-165.7,x:100,y:315.3,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.765,scaleY:0.765,skewX:13.7,skewY:-166.2,x:99.2,y:314.9,rotation:0}}]},3).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:9,skewY:-170.9,x:96.2,y:310.8,rotation:0}}]},2).to({state:[{t:this.instance_15,p:{regX:33.8,regY:121.6,rotation:0.3,x:94.1,y:341.7}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:90.6,y:304.9,rotation:-6.8}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:85.7,y:301.7,rotation:-7.2}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:83.6,y:300.9,rotation:-6.7}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:85,y:300.9,rotation:-5.4}}]},4).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:91.3,y:301.4,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:94.2,y:301.7,rotation:2.6}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:94.9,y:301.8,rotation:3}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:95.5,y:302,rotation:3.5}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:96.3,y:302,rotation:4.3}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:93.1,y:301.5,rotation:1.6}}]},3).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:90.6,y:301.4,rotation:-0.5}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:87.4,y:301.1,rotation:-3.2}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:84.1,y:300.9,rotation:-6.1}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:84.7,y:300.8,rotation:-5.6}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:85.1,y:300.9,rotation:-5.3}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:85.6,y:300.9,rotation:-4.8}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:86.4,y:302.8,rotation:-5}}]},4).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:88.6,y:304.9,rotation:-4.8}}]},2).to({state:[{t:this.instance_15,p:{regX:33.7,regY:121.7,rotation:-0.9,x:95.9,y:345.8}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:4.7,skewY:-175.2,x:97.5,y:305.8,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:5.3,skewY:-174.6,x:98.3,y:304.1,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:5.8,skewY:-174.1,x:98.6,y:301,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:6.2,skewY:-173.7,x:99.2,y:299.3,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:6.2,skewY:-173.7,x:99.2,y:299.3,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:5.6,skewY:-174.3,x:98.4,y:299.4,rotation:0}}]},13).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:5.2,skewY:-174.7,x:97.9,y:299.4,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.763,scaleY:0.763,skewX:6.2,skewY:-173.7,x:99.2,y:299.3,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:7.6,skewY:-172.3,x:100.9,y:299.4,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:8.3,skewY:-171.6,x:101.8,y:299.4,rotation:0}}]},1).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:9.9,skewY:-170,x:103.6,y:299.5,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:9.6,skewY:-170.3,x:103.2,y:299.5,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:9.1,skewY:-170.8,x:102.7,y:299.4,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:9.6,skewY:-170.3,x:103.2,y:299.5,rotation:0}}]},25).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:10.1,skewY:-169.8,x:103.8,y:299.5,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:7.8,skewY:-172.1,x:100.4,y:299.4,rotation:0}}]},2).to({state:[{t:this.instance_14,p:{scaleX:0.762,scaleY:0.762,skewX:3.2,skewY:-176.7,x:94,y:298.3,rotation:0}}]},1).to({state:[{t:this.instance_16,p:{skewX:1.3,skewY:-178.6,x:85.2,y:300.9,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_16,p:{skewX:-0.9,skewY:179,x:80.4,y:302.3,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_16,p:{skewX:-1.8,skewY:178.1,x:79.5,y:302.4,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_16,p:{skewX:-2.2,skewY:177.7,x:79,y:302.5,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_16,p:{skewX:-2.4,skewY:177.5,x:78.6,y:302.5,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_16,p:{skewX:-3.2,skewY:176.7,x:77.8,y:302.7,scaleX:0.77,scaleY:0.77}}]},35).to({state:[{t:this.instance_16,p:{skewX:-4,skewY:175.9,x:76.8,y:302.9,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_16,p:{skewX:1.7,skewY:-178.2,x:81.9,y:303.7,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:6.2,skewY:-173.7,x:86.1,y:304.7,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_16,p:{skewX:13.2,skewY:-166.7,x:91,y:313.4,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_17,p:{regY:50.7,scaleX:0.768,scaleY:0.768,skewX:15.8,skewY:-164.1,y:362.4,x:89.5}}]},1).to({state:[{t:this.instance_17,p:{regY:50.6,scaleX:0.769,scaleY:0.769,skewX:16.6,skewY:-163.3,y:363,x:89.5}}]},2).to({state:[{t:this.instance_17,p:{regY:50.7,scaleX:0.769,scaleY:0.769,skewX:16.1,skewY:-163.8,y:362.8,x:89.5}}]},2).to({state:[{t:this.instance_17,p:{regY:50.7,scaleX:0.769,scaleY:0.769,skewX:15.8,skewY:-164.1,y:362.3,x:89.5}}]},2).to({state:[{t:this.instance_17,p:{regY:50.8,scaleX:0.769,scaleY:0.769,skewX:16.6,skewY:-163.3,y:363.2,x:89.5}}]},18).to({state:[{t:this.instance_17,p:{regY:50.8,scaleX:0.769,scaleY:0.769,skewX:17.6,skewY:-162.3,y:364.3,x:89.4}}]},2).to({state:[{t:this.instance_17,p:{regY:50.8,scaleX:0.768,scaleY:0.768,skewX:6.3,skewY:-173.6,y:361.8,x:89.4}}]},2).to({state:[{t:this.instance_16,p:{skewX:-3.2,skewY:176.7,x:74.2,y:302.7,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_16,p:{skewX:-8.8,skewY:171.1,x:70.2,y:304.3,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_16,p:{skewX:-10.2,skewY:169.7,x:67.9,y:305,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_16,p:{skewX:-10.5,skewY:169.4,x:67,y:305,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:-10,skewY:169.9,x:67.6,y:304.8,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:-9.5,skewY:170.4,x:68.2,y:304.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:-9.7,skewY:170.2,x:67.9,y:304.7,scaleX:0.769,scaleY:0.769}}]},18).to({state:[{t:this.instance_16,p:{skewX:-10,skewY:169.9,x:67.6,y:304.8,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:-9.5,skewY:170.4,x:68.2,y:304.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:-5.2,skewY:174.7,x:74.3,y:303.2,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_16,p:{skewX:-1.7,skewY:178.2,x:79.6,y:300.9,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_13,p:{regX:22.2,regY:166.2,skewX:0.8,skewY:-179.1,x:88,y:367.6}}]},1).to({state:[{t:this.instance_13,p:{regX:22.2,regY:166.2,skewX:0.2,skewY:-179.7,x:87.9,y:367.7}}]},2).to({state:[{t:this.instance_13,p:{regX:20.2,regY:162.3,skewX:0.3,skewY:-179.6,x:89.5,y:364.6}}]},2).to({state:[{t:this.instance_13,p:{regX:23.4,regY:111.3,skewX:0,skewY:180,x:87,y:325.4}}]},2).wait(4));

	// FIZ-34L-BOW-002
	this.instance_18 = new lib.FIZ_23_part_01011509("single",1);
	this.instance_18.setTransform(95.5,245.7,0.767,0.767,0,18.1,-161.8,83,1.4);

	this.instance_19 = new lib.FIZ23RARML002("single",21);
	this.instance_19.setTransform(106.6,248.5,0.765,0.765,0,5.5,-174.4,52.9,-51.8);

	this.instance_20 = new lib.FIZ34LBOW002("single",0);
	this.instance_20.setTransform(65.5,324.9,0.77,0.77,0,1.3,-178.6,-3.1,18.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{skewX:18.1,skewY:-161.8,x:95.5,y:245.7,regX:83}}]}).to({state:[{t:this.instance_19,p:{scaleX:0.765,scaleY:0.765,skewX:5.5,skewY:-174.4,x:106.6,y:248.5,startPosition:21,regX:52.9,regY:-51.8,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:11.3,skewY:-168.6,x:118.9,y:250.7,startPosition:22,regX:52.9,regY:-51.8,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:21.5,skewY:-158.4,x:125.3,y:252.6,startPosition:23,regX:53,regY:-52,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:24.3,skewY:-155.6,x:126.3,y:252.9,startPosition:23,regX:53,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:25.2,skewY:-154.7,x:120,y:251.2,startPosition:23,regX:53.1,regY:-52,rotation:0}}]},3).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:19.8,skewY:-160.1,x:109.8,y:248.8,startPosition:24,regX:53,regY:-52.3,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:12.7,skewY:-167.2,x:103.2,y:248,startPosition:24,regX:52.9,regY:-52.2,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:7.8,skewY:-172.1,x:92.9,y:246.8,startPosition:25,regX:53,regY:-52.1,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:86.3,y:247.6,startPosition:26,regX:52.9,regY:-52,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:-7.8,skewY:172.1,x:84.2,y:247.7,startPosition:26,regX:52.8,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.765,scaleY:0.764,skewX:-7.1,skewY:176.1,x:86.6,y:247.6,startPosition:26,regX:52.8,regY:-52.1,rotation:0}}]},3).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:-6.1,skewY:173.8,x:96.5,y:247.4,startPosition:25,regX:52.8,regY:-52.2,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:-1.8,skewY:178.1,x:105.5,y:248.2,startPosition:24,regX:52.6,regY:-52.1,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:16.6,skewY:-163.3,x:119.6,y:251,startPosition:23,regX:53.1,regY:-52,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:19,skewY:-160.9,x:122.8,y:251.8,startPosition:23,regX:53.1,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:21.5,skewY:-158.4,x:125.3,y:252.6,startPosition:23,regX:53,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:24.3,skewY:-155.6,x:126.3,y:252.9,startPosition:23,regX:53,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:20.3,skewY:-159.6,x:124.9,y:252.5,startPosition:23,regX:52.9,regY:-52,rotation:0}}]},3).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:15.1,skewY:-164.8,x:120,y:251.2,startPosition:23,regX:53.1,regY:-51.9,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:19.8,skewY:-160.1,x:109.8,y:248.8,startPosition:24,regX:53,regY:-52.3,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:7.8,skewY:-172.1,x:92.9,y:246.8,startPosition:25,regX:53,regY:-52.1,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:86.3,y:247.6,startPosition:26,regX:52.9,regY:-52,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:-7.8,skewY:172.1,x:84.2,y:247.7,startPosition:26,regX:52.8,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:86.3,y:247.6,startPosition:26,regX:52.9,regY:-52,rotation:0}}]},3).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:13,skewY:-166.9,x:102.2,y:250.8,startPosition:25,regX:52.9,regY:-52.1,rotation:0}}]},2).to({state:[]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:3.4,skewY:-176.5,x:103.8,y:255.4,startPosition:32,regX:52.9,regY:-51.7,rotation:0}}]},10).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:71.4,y:254.8,startPosition:34,regX:52.9,regY:-51.7,rotation:-7.2}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:65.9,y:251.8,startPosition:34,regX:52.8,regY:-51.8,rotation:-6.1}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:64.5,y:250.8,startPosition:34,regX:52.9,regY:-51.8,rotation:-5.4}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:67,y:250.4,startPosition:34,regX:52.7,regY:-51.7,rotation:-4.9}}]},4).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:78.4,y:249.4,startPosition:35,regX:53,regY:-51.9,rotation:1.3}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:83.3,y:249.2,startPosition:36,regX:52.8,regY:-51.8,rotation:3.8}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:84.6,y:250,startPosition:37,regX:52.8,regY:-51.8,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:85.8,y:251,startPosition:37,regX:52.8,regY:-51.7,rotation:-3.5}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:87.1,y:251.6,startPosition:37,regX:52.9,regY:-52,rotation:-7.4}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:81.6,y:251.7,startPosition:37,regX:52.9,regY:-51.9,rotation:-10.1}}]},3).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:77.3,y:252.3,startPosition:38,regX:52.9,regY:-52,rotation:-12.2}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:71.5,y:252.7,startPosition:39,regX:52.8,regY:-52,rotation:-15}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:65.9,y:253.1,startPosition:40,regX:52.8,regY:-52,rotation:-16.4}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:67,y:253,startPosition:40,regX:52.9,regY:-52,rotation:-16}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:67.5,y:252.9,startPosition:40,regX:52.9,regY:-52.1,rotation:-16.1}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:68.4,y:252.7,startPosition:40,regX:52.8,regY:-52,rotation:-16.6}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:69,y:254.7,startPosition:40,regX:52.8,regY:-52,rotation:-16.8}}]},4).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:71.4,y:256.7,startPosition:42,regX:52.8,regY:-52,rotation:-16.6}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:79.9,y:258.1,startPosition:41,regX:52.9,regY:-51.9,rotation:-10.7}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:16.5,skewY:-163.4,x:114.4,y:259.1,startPosition:43,regX:52.8,regY:-52.1,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:14,skewY:-165.9,x:116,y:257,startPosition:43,regX:52.8,regY:-52,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:12.8,skewY:-167.1,x:116.6,y:253,startPosition:43,regX:52.6,regY:-52.1,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:11.5,skewY:-168.4,x:117.5,y:251.6,startPosition:43,regX:52.7,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:11.5,skewY:-168.4,x:117.7,y:251.6,startPosition:43,regX:52.7,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:10.9,skewY:-169,x:116.2,y:251.5,startPosition:43,regX:52.7,regY:-52,rotation:0}}]},13).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:10.5,skewY:-169.4,x:115.4,y:251.4,startPosition:43,regX:52.6,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.762,scaleY:0.762,skewX:11.5,skewY:-168.4,x:117.5,y:251.6,startPosition:43,regX:52.7,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:13,skewY:-166.9,x:120.5,y:252.3,startPosition:44,regX:52.6,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:13.8,skewY:-166.1,x:122,y:252.5,startPosition:45,regX:52.6,regY:-52.1,rotation:0}}]},1).to({state:[{t:this.instance_19,p:{scaleX:0.76,scaleY:0.76,skewX:16.4,skewY:-163.5,x:125.1,y:253.2,startPosition:0,regX:52.7,regY:-52,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:15.6,skewY:-164.3,x:124.5,y:253.1,startPosition:0,regX:52.5,regY:-52.1,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:14.6,skewY:-165.3,x:123.5,y:252.8,startPosition:0,regX:52.6,regY:-52.1,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:15.8,skewY:-164.1,x:124.4,y:253.1,startPosition:0,regX:52.6,regY:-52.1,rotation:0}}]},25).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:17.1,skewY:-162.8,x:125.4,y:253.2,startPosition:0,regX:52.6,regY:-52.1,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.761,scaleY:0.761,skewX:14.8,skewY:-165.1,x:120,y:252.3,startPosition:0,regX:52.6,regY:-52.1,rotation:0}}]},2).to({state:[{t:this.instance_19,p:{scaleX:0.76,scaleY:0.76,skewX:10.2,skewY:-169.7,x:109.9,y:249.7,startPosition:47,regX:52.6,regY:-52.1,rotation:0}}]},1).to({state:[{t:this.instance_20,p:{skewX:1.3,skewY:-178.6,x:65.5,y:324.9,regX:-3.1,regY:18.2,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_20,p:{skewX:-0.9,skewY:179,x:61.6,y:327.1,regX:-3.1,regY:18.2,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_20,p:{skewX:-1.8,skewY:178.1,x:61,y:327.5,regX:-3.1,regY:18.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_20,p:{skewX:-2.2,skewY:177.7,x:60.7,y:327.8,regX:-3.2,regY:18.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_20,p:{skewX:-2.4,skewY:177.5,x:60.5,y:327.9,regX:-3.2,regY:18.2,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_20,p:{skewX:-3.2,skewY:176.7,x:59.9,y:328.1,regX:-3.1,regY:17.9,scaleX:0.77,scaleY:0.77}}]},35).to({state:[{t:this.instance_20,p:{skewX:-4,skewY:175.9,x:59.4,y:328.6,regX:-3.3,regY:18,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_20,p:{skewX:1.7,skewY:-178.2,x:62,y:327.6,regX:-3.2,regY:18.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:6.2,skewY:-173.7,x:64.2,y:327,regX:-3.1,regY:18.1,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_20,p:{skewX:13.2,skewY:-166.7,x:66.8,y:332.9,regX:-3.3,regY:18.1,scaleX:0.769,scaleY:0.769}}]},1).to({state:[]},1).to({state:[{t:this.instance_20,p:{skewX:-3.2,skewY:176.7,x:56.3,y:328.3,regX:-3.1,regY:18.2,scaleX:0.769,scaleY:0.769}}]},29).to({state:[{t:this.instance_20,p:{skewX:-8.8,skewY:171.1,x:54.9,y:331.5,regX:-3.2,regY:18.2,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_20,p:{skewX:-10.2,skewY:169.7,x:53.4,y:332.5,regX:-3.3,regY:18,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_20,p:{skewX:-10.5,skewY:169.4,x:52.5,y:332.7,regX:-3.1,regY:18.2,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:-10,skewY:169.9,x:52.9,y:332.3,regX:-3.2,regY:18.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:-9.5,skewY:170.4,x:53.2,y:332,regX:-3.3,regY:18.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:-9.8,skewY:170.1,x:53.1,y:332.1,regX:-3.3,regY:18,scaleX:0.769,scaleY:0.769}}]},18).to({state:[{t:this.instance_20,p:{skewX:-10,skewY:169.9,x:52.8,y:332.2,regX:-3.2,regY:17.9,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:-9.5,skewY:170.4,x:53.2,y:332,regX:-3.3,regY:18.1,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:-5.2,skewY:174.7,x:57.4,y:329.3,regX:-3.3,regY:18,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_20,p:{skewX:-1.7,skewY:178.2,x:61.1,y:325.9,regX:-3.3,regY:18,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_18,p:{skewX:20.3,skewY:-159.6,x:97.2,y:245.9,regX:83}}]},1).to({state:[{t:this.instance_18,p:{skewX:19.3,skewY:-160.6,x:95.9,y:245.9,regX:83.1}}]},2).to({state:[{t:this.instance_18,p:{skewX:18.6,skewY:-161.3,x:96,y:245.7,regX:83}}]},2).to({state:[{t:this.instance_18,p:{skewX:18.1,skewY:-161.8,x:95.5,y:245.7,regX:83}}]},2).wait(4));

	// FIZ-34L-APRONBK-002
	this.instance_21 = new lib.FIZ23RBOW002("single",0);
	this.instance_21.setTransform(72.9,317.1,0.765,0.765,0,5.5,-174.4,-2,12.1);

	this.instance_22 = new lib.FIZ34LAPRONBK002("single",0);
	this.instance_22.setTransform(88.5,305.4,0.77,0.77,0,1.3,-178.6,37.8,84.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_21,p:{regX:-2,skewX:5.5,skewY:-174.4,x:72.9,y:317.1,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:10.1,skewY:-169.8,x:77.8,y:315.8,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:12.2,skewY:-167.7,x:80.1,y:315.7,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:12.7,skewY:-167.2,x:80.5,y:315.7,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:9.5,skewY:-170.4,x:77.8,y:316.4,scaleX:0.764,scaleY:0.764,regY:12.1,rotation:0}}]},3).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:4.4,skewY:-175.5,x:73.6,y:317.4,scaleX:0.763,scaleY:0.763,regY:12.1,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:1.1,skewY:-178.8,x:70.8,y:318.6,scaleX:0.763,scaleY:0.763,regY:12.1,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:-3.8,skewY:176.1,x:67,y:320,scaleX:0.764,scaleY:0.764,regY:12.2,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:-7.1,skewY:172.8,x:64.5,y:321.9,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2,skewX:-8.1,skewY:171.8,x:63.6,y:322.5,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:-7.3,skewY:172.6,x:65.1,y:322.2,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},3).to({state:[{t:this.instance_21,p:{regX:-2,skewX:-2.1,skewY:177.8,x:68.3,y:319.8,scaleX:0.763,scaleY:0.763,regY:12,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:2.1,skewY:-177.8,x:71.9,y:318.1,scaleX:0.763,scaleY:0.763,regY:12,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:9.3,skewY:-170.6,x:77.7,y:316.3,scaleX:0.764,scaleY:0.764,regY:12.1,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:10.9,skewY:-169,x:79,y:316,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:12.2,skewY:-167.7,x:80.1,y:315.7,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:12.7,skewY:-167.2,x:80.5,y:315.7,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:11.9,skewY:-168,x:79.9,y:315.8,scaleX:0.765,scaleY:0.765,regY:12.1,rotation:0}}]},3).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:9.5,skewY:-170.4,x:77.8,y:316.4,scaleX:0.764,scaleY:0.764,regY:12.1,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:4.4,skewY:-175.5,x:73.6,y:317.4,scaleX:0.763,scaleY:0.763,regY:12.1,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:-3.8,skewY:176.1,x:67,y:320,scaleX:0.764,scaleY:0.764,regY:12.2,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:-7.1,skewY:172.8,x:64.5,y:321.9,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2,skewX:-8.1,skewY:171.8,x:63.6,y:322.5,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:-7.1,skewY:172.8,x:64.5,y:321.9,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},3).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:1.4,skewY:-178.5,x:69.5,y:321.3,scaleX:0.764,scaleY:0.764,regY:12.2,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:10.2,skewY:-169.7,x:78.4,y:328,scaleX:0.765,scaleY:0.765,regY:12,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2,skewX:11.4,skewY:-168.5,x:79.5,y:330.4,scaleX:0.765,scaleY:0.765,regY:12,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:12.2,skewY:-167.7,x:80.1,y:331,scaleX:0.765,scaleY:0.765,regY:12,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:11.6,skewY:-168.3,x:79.5,y:330.7,scaleX:0.765,scaleY:0.765,regY:11.9,rotation:0}}]},3).to({state:[{t:this.instance_21,p:{regX:-2,skewX:6.9,skewY:-173,x:77.8,y:328.4,scaleX:0.764,scaleY:0.764,regY:12,rotation:0}}]},2).to({state:[]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:108.3,y:323,scaleX:0.764,scaleY:0.764,regY:11.9,rotation:-4.8}}]},1).to({state:[{t:this.instance_21,p:{regX:-2,skewX:0,skewY:0,x:103.6,y:319.8,scaleX:0.764,scaleY:0.764,regY:11.9,rotation:-5.2}}]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:0,skewY:0,x:101.4,y:319.1,scaleX:0.764,scaleY:0.764,regY:11.8,rotation:-4.7}}]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:0,skewY:0,x:102.4,y:319.4,scaleX:0.764,scaleY:0.764,regY:11.8,rotation:-3.4}}]},4).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:106.7,y:321.6,scaleX:0.764,scaleY:0.764,regY:11.8,rotation:2}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:108.7,y:322.5,scaleX:0.764,scaleY:0.764,regY:11.8,rotation:4.6}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:109.1,y:322.8,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:5}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:109.6,y:323,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:5.5}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:110.1,y:323.2,scaleX:0.764,scaleY:0.764,regY:11.8,rotation:6.3}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:108,y:322.1,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:3.6}}]},3).to({state:[{t:this.instance_21,p:{regX:-2,skewX:0,skewY:0,x:106.2,y:321.3,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:1.2}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:103.9,y:320.3,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-1.2}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:101.6,y:319.2,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-4.1}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.3,skewX:0,skewY:0,x:102,y:319.4,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-3.6}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:102.3,y:319.5,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-3.3}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:102.7,y:319.6,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-2.8}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:103.5,y:321.5,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-3}}]},4).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:0,skewY:0,x:105.7,y:323.6,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:-2.8}}]},2).to({state:[]},2).to({state:[{t:this.instance_21,p:{regX:-2,skewX:2.7,skewY:-177.2,x:80.4,y:324.4,scaleX:0.763,scaleY:0.763,regY:11.7,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2,skewX:3.3,skewY:-176.6,x:81,y:322.6,scaleX:0.763,scaleY:0.763,regY:11.7,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:3.8,skewY:-176.1,x:81.3,y:319.4,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:4.2,skewY:-175.7,x:81.7,y:317.6,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:4.2,skewY:-175.7,x:81.7,y:317.6,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:3.6,skewY:-176.3,x:81.1,y:317.9,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},13).to({state:[{t:this.instance_21,p:{regX:-2,skewX:3.2,skewY:-176.7,x:80.7,y:318,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:4.2,skewY:-175.7,x:81.7,y:317.6,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:5.6,skewY:-174.3,x:83,y:317.2,scaleX:0.763,scaleY:0.763,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:6.3,skewY:-173.6,x:83.5,y:317.1,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},1).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:7.9,skewY:-172,x:85,y:316.5,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.2,skewX:7.6,skewY:-172.3,x:84.7,y:316.7,scaleX:0.762,scaleY:0.762,regY:11.7,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:7.1,skewY:-172.8,x:84.2,y:316.8,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:7.6,skewY:-172.3,x:84.6,y:316.7,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},25).to({state:[{t:this.instance_21,p:{regX:-2.2,skewX:8.1,skewY:-171.8,x:85.1,y:316.6,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.1,skewX:5.8,skewY:-174.1,x:82.3,y:317.2,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},2).to({state:[{t:this.instance_21,p:{regX:-2.2,skewX:1.2,skewY:-178.7,x:77.4,y:317.4,scaleX:0.762,scaleY:0.762,regY:11.8,rotation:0}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:1.3,skewY:-178.6,x:88.5,y:305.4,regX:37.8,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_22,p:{regY:84.4,skewX:-0.9,skewY:179,x:83.9,y:306.5,regX:37.8,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-1.8,skewY:178.1,x:83.1,y:306.7,regX:37.6,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-2.2,skewY:177.7,x:82.6,y:306.8,regX:37.7,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-2.4,skewY:177.5,x:82.3,y:306.9,regX:37.7,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-3.2,skewY:176.7,x:81.5,y:306.9,regX:37.8,scaleX:0.77,scaleY:0.77}}]},35).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-4,skewY:175.9,x:80.6,y:307.1,regX:37.7,scaleX:0.77,scaleY:0.77}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:1.7,skewY:-178.2,x:85.3,y:308.3,regX:37.8,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:6.2,skewY:-173.7,x:89,y:309.6,regX:37.8,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:13.2,skewY:-166.7,x:93.4,y:318.6,regX:37.8,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:15.8,skewY:-164.1,x:101,y:329.7,regX:37.6,scaleX:0.768,scaleY:0.768}}]},1).to({state:[{t:this.instance_22,p:{regY:84.3,skewX:16.6,skewY:-163.3,x:101.3,y:330.5,regX:37.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.4,skewX:16.1,skewY:-163.8,x:101.1,y:330.2,regX:37.5,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.4,skewX:15.8,skewY:-164.1,x:100.9,y:329.6,regX:37.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.3,skewX:16.6,skewY:-163.3,x:101.4,y:330.6,regX:37.6,scaleX:0.769,scaleY:0.769}}]},18).to({state:[{t:this.instance_22,p:{regY:84.4,skewX:17.6,skewY:-162.3,x:101.9,y:331.9,regX:37.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.2,skewX:6.3,skewY:-173.6,x:95.4,y:327.6,regX:37.5,scaleX:0.768,scaleY:0.768}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-3.2,skewY:176.7,x:78,y:306.9,regX:37.6,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-8.8,skewY:171.1,x:74.3,y:308.1,regX:37.6,scaleX:0.77,scaleY:0.77}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-10.2,skewY:169.7,x:72.2,y:308.8,regX:37.6,scaleX:0.769,scaleY:0.769}}]},1).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-10.5,skewY:169.4,x:71.3,y:308.7,regX:37.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-10,skewY:169.9,x:71.8,y:308.5,regX:37.6,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.6,skewX:-9.5,skewY:170.4,x:72.4,y:308.4,regX:37.7,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.6,skewX:-9.7,skewY:170.2,x:72.1,y:308.6,regX:37.7,scaleX:0.769,scaleY:0.769}}]},18).to({state:[{t:this.instance_22,p:{regY:84.6,skewX:-10,skewY:169.9,x:71.8,y:308.6,regX:37.7,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.6,skewX:-9.5,skewY:170.4,x:72.4,y:308.4,regX:37.7,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.5,skewX:-5.2,skewY:174.7,x:78.2,y:307.3,regX:37.8,scaleX:0.769,scaleY:0.769}}]},2).to({state:[{t:this.instance_22,p:{regY:84.7,skewX:-1.7,skewY:178.2,x:83.2,y:305.3,regX:37.8,scaleX:0.769,scaleY:0.769}}]},1).to({state:[]},1).wait(10));

	// FIZ-34L-COLLARFR-01
	this.instance_23 = new lib.FIZ_23_part_02811509("single",1);
	this.instance_23.setTransform(66.6,243.4,0.776,0.824,0,-21.5,156.3,4.5,1.9);

	this.instance_24 = new lib.FIZ23RARMR002("single",22);
	this.instance_24.setTransform(76.9,243.6,0.765,0.765,0,5.5,-174.4,-51.8,-60.5);

	this.instance_25 = new lib.FIZ34LCOLLARFR01("single",0);
	this.instance_25.setTransform(68.8,243.8,0.77,0.77,0,-7.2,172.7,13.5,28.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{skewX:-21.5,skewY:156.3,x:66.6,y:243.4,scaleY:0.824}}]}).to({state:[{t:this.instance_24,p:{scaleX:0.765,scaleY:0.765,skewX:5.5,skewY:-174.4,x:76.9,y:243.6,startPosition:22,regX:-51.8,regY:-60.5,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:11.3,skewY:-168.6,x:89.9,y:242.8,startPosition:23,regX:-51.8,regY:-60.5,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:25.3,skewY:-154.6,x:96.8,y:243.3,startPosition:24,regX:-51.9,regY:-60.6,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:27.8,skewY:-152.1,x:97.8,y:243.3,startPosition:24,regX:-51.8,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:29.1,skewY:-150.8,x:90.9,y:243.2,startPosition:24,regX:-51.9,regY:-60.7,rotation:0}}]},3).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:19.5,skewY:-160.4,x:80.3,y:243.5,startPosition:25,regX:-51.7,regY:-60.7,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:16.3,skewY:-163.6,x:73.3,y:244.4,startPosition:25,regX:-51.8,regY:-60.7,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:11.3,skewY:-168.6,x:71,y:245.8,startPosition:26,regX:-51.8,regY:-60.8,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:56.3,y:248.1,startPosition:27,regX:-51.8,regY:-60.8,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:-3.8,skewY:176.1,x:54.1,y:248.8,startPosition:27,regX:-51.7,regY:-60.8,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.769,scaleY:0.764,skewX:-0.4,skewY:-174,x:56.6,y:248.3,startPosition:27,regX:-51.8,regY:-60.8,rotation:0}}]},3).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:16.1,skewY:-163.8,x:66.5,y:245.4,startPosition:26,regX:-51.6,regY:-60.9,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:13.4,skewY:-166.5,x:75.6,y:243.9,startPosition:25,regX:-51.8,regY:-60.9,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:17.7,skewY:-162.2,x:90.7,y:243.1,startPosition:24,regX:-51.8,regY:-60.6,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:20.8,skewY:-159.1,x:94.1,y:243.1,startPosition:24,regX:-51.8,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:25.3,skewY:-154.6,x:96.8,y:243.3,startPosition:24,regX:-51.9,regY:-60.6,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:27.8,skewY:-152.1,x:97.8,y:243.3,startPosition:24,regX:-51.8,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:25,skewY:-154.9,x:96.1,y:243.1,startPosition:24,regX:-51.9,regY:-60.8,rotation:0}}]},3).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:20.1,skewY:-159.8,x:90.3,y:243.3,startPosition:24,regX:-51.9,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:19.5,skewY:-160.4,x:80.3,y:243.5,startPosition:25,regX:-51.7,regY:-60.7,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:11.3,skewY:-168.6,x:71,y:245.8,startPosition:26,regX:-51.8,regY:-60.8,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:56.3,y:248.1,startPosition:27,regX:-51.8,regY:-60.8,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:-3.8,skewY:176.1,x:54.1,y:248.8,startPosition:27,regX:-51.7,regY:-60.8,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:-5,skewY:174.9,x:56.3,y:248.1,startPosition:27,regX:-51.8,regY:-60.8,rotation:0}}]},3).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:16.5,skewY:-163.4,x:80.4,y:247.7,startPosition:26,regX:-51.8,regY:-60.9,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.765,scaleY:0.765,skewX:12.3,skewY:-167.6,x:92.7,y:255,startPosition:30,regX:-51.8,regY:-60.7,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:15.8,skewY:-164.1,x:95.3,y:257.7,startPosition:30,regX:-51.8,regY:-60.6,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:16.5,skewY:-163.4,x:96.9,y:258.5,startPosition:30,regX:-51.8,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:16,skewY:-163.9,x:95.5,y:258.2,startPosition:30,regX:-51.7,regY:-60.7,rotation:0}}]},3).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:11.2,skewY:-168.7,x:87.8,y:254.7,startPosition:31,regX:-51.8,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:9,skewY:-170.9,x:74.2,y:251.8,startPosition:32,regX:-51.8,regY:-60.6,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:101,y:249.1,startPosition:34,regX:-51.8,regY:-60.6,rotation:-6.8}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:95.5,y:245.8,startPosition:34,regX:-51.7,regY:-60.7,rotation:-7.2}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:94.1,y:245.2,startPosition:34,regX:-51.6,regY:-60.6,rotation:-6.7}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:96.8,y:245.5,startPosition:34,regX:-51.6,regY:-60.6,rotation:-4.1}}]},4).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:108.4,y:247.3,startPosition:35,regX:-51.5,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.764,scaleY:0.764,skewX:0,skewY:0,x:113.6,y:248.5,startPosition:36,regX:-51.5,regY:-60.5,rotation:2.6}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:114.9,y:247.7,startPosition:37,regX:-51.5,regY:-60.5,rotation:1}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:116.1,y:247,startPosition:37,regX:-51.5,regY:-60.5,rotation:-0.2}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:117.2,y:246.3,startPosition:37,regX:-51.5,regY:-60.5,rotation:-1.6}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:111.4,y:244.8,startPosition:37,regX:-51.5,regY:-60.5,rotation:-4.4}}]},3).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:106.7,y:244.3,startPosition:38,regX:-51.5,regY:-60.5,rotation:-6.5}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:0,skewY:0,x:100.6,y:243.1,startPosition:39,regX:-51.5,regY:-60.6,rotation:-9.2}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:94.5,y:242.2,startPosition:40,regX:-51.5,regY:-60.5,rotation:-7.9}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:95.8,y:242.3,startPosition:40,regX:-51.4,regY:-60.6,rotation:-9.3}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:96.4,y:242.4,startPosition:40,regX:-51.5,regY:-60.5,rotation:-10.2}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:97.3,y:242.4,startPosition:40,regX:-51.5,regY:-60.6,rotation:-10.9}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:97.9,y:244.3,startPosition:40,regX:-51.5,regY:-60.6,rotation:-11.1}}]},4).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:0,skewY:0,x:100.4,y:246.5,startPosition:40,regX:-51.4,regY:-60.5,rotation:-7.1}}]},2).to({state:[]},2).to({state:[{t:this.instance_24,p:{scaleX:0.763,scaleY:0.763,skewX:10.7,skewY:-169.2,x:85.5,y:249,startPosition:43,regX:-51.3,regY:-60.5,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:14.5,skewY:-165.4,x:87.1,y:246.3,startPosition:43,regX:-51.2,regY:-60.6,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:16.3,skewY:-163.6,x:87.8,y:242.2,startPosition:43,regX:-51.4,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:18.5,skewY:-161.4,x:88.8,y:240.5,startPosition:43,regX:-51.4,regY:-60.6,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:18.5,skewY:-161.4,x:88.8,y:240.5,startPosition:43,regX:-51.4,regY:-60.6,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:17.1,skewY:-162.8,x:87.4,y:240.7,startPosition:43,regX:-51.5,regY:-60.8,rotation:0}}]},13).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:16.2,skewY:-163.7,x:86.4,y:240.8,startPosition:43,regX:-51.4,regY:-60.6,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.762,scaleY:0.762,skewX:15.7,skewY:-164.2,x:88.8,y:240.5,startPosition:43,regX:-51.4,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.761,scaleY:0.761,skewX:20,skewY:-159.9,x:92.1,y:240.4,startPosition:44,regX:-51.4,regY:-60.6,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.761,scaleY:0.761,skewX:20.8,skewY:-159.1,x:93.9,y:240.3,startPosition:45,regX:-51.5,regY:-60.7,rotation:0}}]},1).to({state:[{t:this.instance_24,p:{scaleX:0.76,scaleY:0.76,skewX:24.4,skewY:-155.5,x:97.4,y:240.2,startPosition:46,regX:-51.6,regY:-60.8,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.761,scaleY:0.761,skewX:23.1,skewY:-156.8,x:96.6,y:240.1,startPosition:46,regX:-51.4,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.761,scaleY:0.761,skewX:21.6,skewY:-158.3,x:95.6,y:240.1,startPosition:46,regX:-51.5,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.76,scaleY:0.76,skewX:23.6,skewY:-156.3,x:96.6,y:240.2,startPosition:46,regX:-51.3,regY:-60.7,rotation:0}}]},25).to({state:[{t:this.instance_24,p:{scaleX:0.761,scaleY:0.761,skewX:25.3,skewY:-154.6,x:97.8,y:240.2,startPosition:46,regX:-51.4,regY:-60.7,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.76,scaleY:0.76,skewX:19.2,skewY:-160.7,x:91.9,y:240.3,startPosition:46,regX:-51.3,regY:-60.8,rotation:0}}]},2).to({state:[{t:this.instance_24,p:{scaleX:0.76,scaleY:0.76,skewX:18.5,skewY:-161.4,x:80.8,y:240.2,startPosition:47,regX:-51.4,regY:-60.5,rotation:0}}]},1).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.1,scaleX:0.77,scaleY:0.77,skewX:-7.2,skewY:172.7,x:68.8,y:243.8}}]},1).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.2,scaleX:0.769,scaleY:0.769,skewX:-11,skewY:168.9,x:61.5,y:246.2}}]},1).to({state:[{t:this.instance_25,p:{regX:13.7,regY:28.3,scaleX:0.769,scaleY:0.769,skewX:-12.8,skewY:167.1,x:59.7,y:247}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.2,scaleX:0.769,scaleY:0.769,skewX:-13.4,skewY:166.5,x:58.8,y:247.3}}]},2).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.2,scaleX:0.769,scaleY:0.769,skewX:-14,skewY:165.9,x:58.2,y:247.5}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.3,scaleX:0.769,scaleY:0.769,skewX:-15.5,skewY:164.4,x:56.6,y:248.2}}]},35).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.3,scaleX:0.769,scaleY:0.769,skewX:-16.4,skewY:163.5,x:54.8,y:248.8}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.2,scaleX:0.769,scaleY:0.769,skewX:-9.3,skewY:170.6,x:65.7,y:247.3}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.2,scaleX:0.769,scaleY:0.769,skewX:2.2,skewY:-177.7,x:75.3,y:245.1}}]},1).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.2,scaleX:0.768,scaleY:0.768,skewX:9.8,skewY:-170.1,x:87.8,y:252.8}}]},1).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.2,scaleX:0.767,scaleY:0.767,skewX:15.3,skewY:-164.6,x:98.3,y:267.3}}]},1).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.3,scaleX:0.768,scaleY:0.768,skewX:16.3,skewY:-163.6,x:99.4,y:268.1}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.4,scaleX:0.768,scaleY:0.768,skewX:15.4,skewY:-164.5,x:98.5,y:267.8}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.4,scaleX:0.768,scaleY:0.768,skewX:14.8,skewY:-165.1,x:98,y:267.4}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.4,scaleX:0.768,scaleY:0.768,skewX:16.3,skewY:-163.6,x:99.4,y:268.4}}]},18).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.4,scaleX:0.768,scaleY:0.768,skewX:17.8,skewY:-162.1,x:101.2,y:269.4}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.4,scaleX:0.767,scaleY:0.767,skewX:5.5,skewY:-174.4,x:82.2,y:261.7}}]},2).to({state:[{t:this.instance_25,p:{regX:13.7,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:1,skewY:-178.9,x:55,y:243.2}}]},1).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:-6.2,skewY:173.7,x:45.1,y:247.5}}]},1).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28,scaleX:0.768,scaleY:0.768,skewX:-6.4,skewY:173.5,x:41.5,y:248.5}}]},1).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:-7.3,skewY:172.6,x:40.2,y:248.8}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28,scaleX:0.768,scaleY:0.768,skewX:-6.7,skewY:173.2,x:41.4,y:248.3}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:-6.5,skewY:173.4,x:42.5,y:248}}]},2).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.2,scaleX:0.768,scaleY:0.768,skewX:-7.3,skewY:172.6,x:41.8,y:248.5}}]},18).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:-8.1,skewY:171.8,x:41.2,y:248.8}}]},2).to({state:[{t:this.instance_25,p:{regX:13.5,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:-6.5,skewY:173.4,x:42.5,y:248}}]},2).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.1,scaleX:0.768,scaleY:0.768,skewX:-6,skewY:173.9,x:52.5,y:246.1}}]},2).to({state:[{t:this.instance_25,p:{regX:13.6,regY:28.1,scaleX:0.767,scaleY:0.767,skewX:-5,skewY:174.9,x:61,y:242.4}}]},1).to({state:[{t:this.instance_23,p:{skewX:-22,skewY:155.8,x:68.3,y:243.1,scaleY:0.824}}]},1).to({state:[{t:this.instance_23,p:{skewX:-22,skewY:155.7,x:67.1,y:243.5,scaleY:0.823}}]},2).to({state:[{t:this.instance_23,p:{skewX:-21.5,skewY:156.2,x:67.2,y:243.3,scaleY:0.824}}]},2).to({state:[{t:this.instance_23,p:{skewX:-21.5,skewY:156.3,x:66.6,y:243.4,scaleY:0.824}}]},2).wait(4));

	// FIZZ-HEADNEST-002
	this.instance_26 = new lib.FIZZHEADNEST002("synched",0,false);
	this.instance_26.setTransform(83.9,246.1,0.765,0.765,0,-0.4,-0.9,135.9,320.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(2).to({regX:136.1,regY:320.7,skewX:-3,skewY:-3.5,x:95.4,y:247,startPosition:2},0).wait(2).to({regX:136.2,regY:320.8,scaleX:0.76,scaleY:0.76,skewX:-5.1,skewY:-5.6,x:109.5,y:248.1,startPosition:4},0).wait(1).to({regX:136.1,regY:320.7,skewX:-6,skewY:-6.5,x:115.1,y:249.4,startPosition:5},0).wait(2).to({x:116.2,y:249.6,startPosition:7},0).wait(3).to({regX:135.9,regY:320.8,scaleX:0.76,scaleY:0.76,skewX:-5.3,skewY:-5.8,x:109.5,y:248.8,startPosition:10},0).wait(1).to({regX:136.2,regY:320.9,scaleX:0.76,scaleY:0.76,skewX:-4.1,skewY:-4.6,x:99.5,y:246.9,startPosition:11},0).wait(1).to({skewX:-2.9,skewY:-3.4,x:92.7,y:246.7,startPosition:12},0).wait(1).to({scaleX:0.76,scaleY:0.76,skewX:-0.9,skewY:-1.4,x:82.4,y:246.5,startPosition:13},0).wait(1).to({regX:136.3,regY:320.6,scaleX:0.76,skewX:0,skewY:-0.5,x:75.2,y:247.9,startPosition:14},0).wait(2).to({scaleX:0.76,skewX:0.3,skewY:0,x:73.1,y:248.3,startPosition:16},0).wait(3).to({regX:136.4,regY:320.5,skewX:0,skewY:-0.5,x:75.6,y:248.1,startPosition:19},0).wait(2).to({regY:320.4,scaleX:0.76,scaleY:0.76,skewX:-2.5,skewY:-3,x:85.1,y:247.1,startPosition:21},0).wait(1).to({regX:136.3,scaleY:0.76,skewX:-3.3,skewY:-3.8,x:94.2,y:246.8,startPosition:22},0).wait(1).to({regX:136.2,regY:320.7,scaleX:0.76,scaleY:0.76,skewX:-5.3,skewY:-5.8,x:109.2,y:248.4,startPosition:23},0).wait(2).to({regX:136.1,regY:320.6,scaleX:0.76,skewX:-5.7,skewY:-6.3,x:112.5,y:248.8,startPosition:25},0).wait(2).to({regY:320.7,scaleY:0.76,skewX:-6,skewY:-6.5,x:115.1,y:249.4,startPosition:27},0).wait(2).to({x:116.2,y:249.6,startPosition:29},0).wait(3).to({regX:136.2,scaleY:0.76,x:114.6,y:249.4,startPosition:32},0).wait(2).to({regX:135.9,regY:320.8,scaleX:0.76,skewX:-5.3,skewY:-5.8,x:109.5,y:248.8,startPosition:34},0).wait(1).to({regX:136.2,regY:320.9,scaleX:0.76,scaleY:0.76,skewX:-4.1,skewY:-4.6,x:99.5,y:246.9,startPosition:35},0).wait(1).to({scaleX:0.76,scaleY:0.76,skewX:-0.9,skewY:-1.4,x:82.4,y:246.5,startPosition:36},0).wait(1).to({regX:136.3,regY:320.6,scaleX:0.76,skewX:0,skewY:-0.5,x:75.2,y:247.9,startPosition:37},0).wait(2).to({scaleX:0.76,skewX:0.3,skewY:0,x:73.1,y:248.3,startPosition:39},0).wait(3).to({scaleX:0.76,skewX:0,skewY:-0.5,x:75.2,y:247.9,startPosition:42},0).wait(2).to({regX:136.2,regY:320.9,scaleX:0.76,scaleY:0.76,skewX:2.9,skewY:2.4,x:91.5,y:252.3,startPosition:44},0).wait(1).to({regX:136.1,regY:320.8,scaleX:0.76,scaleY:0.76,skewX:8.4,skewY:7.9,x:110.3,y:268.5,startPosition:45},0).wait(2).to({regX:135.9,regY:320.9,skewX:9.6,skewY:9.1,x:112.4,y:271.9,startPosition:47},0).wait(2).to({regX:136,skewX:10.4,skewY:9.9,x:113.9,y:274.2,startPosition:49},0).wait(3).to({regX:135.9,skewX:9.5,skewY:9,x:112.7,y:273.6,startPosition:52},0).wait(2).to({regX:135.8,regY:320.8,skewX:3.6,skewY:3.1,x:106.1,y:263.5,startPosition:54},0).wait(1).to({regX:135.9,skewX:2.9,skewY:2.4,x:93.8,y:257.6,startPosition:55},0).wait(1).to({regX:136.1,regY:320.9,skewX:0.2,skewY:180.8,x:82.1,y:254.5,startPosition:56},0).wait(2).to({regY:320.7,skewX:-0.1,skewY:180.1,x:76.8,y:249.7,startPosition:58},0).wait(2).to({regX:136,regY:320.8,skewX:0.1,skewY:180.6,x:75.2,y:249,startPosition:60},0).wait(4).to({regX:136.1,regY:320.9,skewX:0.8,skewY:181.3,x:77.7,y:248.8,startPosition:64},0).wait(2).to({regX:135.9,regY:320.7,scaleX:0.76,scaleY:0.76,skewX:3.5,skewY:184.1,x:89.1,startPosition:66},0).wait(1).to({regX:136.1,skewX:3.2,skewY:183.8,x:94.6,y:249.3,startPosition:67},0).wait(1).to({regX:136.2,skewX:3,skewY:183.6,x:95.8,y:249.4,startPosition:68},0).wait(2).to({x:97.1,y:249.5,startPosition:70},0).wait(2).to({regX:136.1,skewX:3.2,skewY:183.8,x:98.2,y:249.7,startPosition:72},0).wait(3).to({skewX:1.9,skewY:182.5,x:92.5,y:249.2,startPosition:75},0).wait(2).to({scaleX:0.76,scaleY:0.76,skewX:0.5,skewY:181.1,x:88,y:249.3,startPosition:77},0).wait(1).to({regX:136,regY:320.6,skewX:-0.8,skewY:179.5,x:82.2,y:249.1,startPosition:78},0).wait(1).to({regX:136.2,regY:320.7,skewX:-1.1,skewY:179.1,x:76.4,y:249.2,startPosition:79},0).wait(2).to({regX:136.1,regY:320.6,skewX:-0.6,skewY:179.7,x:77.5,y:249,startPosition:81},0).wait(2).to({regY:320.7,skewX:-0.3,skewY:180,x:78.2,y:249.1,startPosition:83},0).wait(2).to({regY:320.6,skewX:0,skewY:180.5,x:79.1,y:249,startPosition:85},0).wait(4).to({regX:136.2,skewY:180.6,x:79.6,y:250.9,startPosition:89},0).wait(2).to({regX:136.1,skewY:180.5,x:82.1,y:253,startPosition:91},0).wait(2).to({regY:320.7,skewX:-0.9,skewY:179.4,x:89.3,y:259.3,startPosition:93},0).wait(1).to({regX:136.2,regY:320.5,skewX:-1.8,skewY:357.7,x:103.9,y:253.7,startPosition:94},0).wait(1).to({skewX:-1.6,skewY:357.8,x:105.4,y:252.2,startPosition:95},0).wait(2).to({regY:320.6,scaleY:0.76,x:106,y:249.1,startPosition:97},0).wait(2).to({scaleY:0.76,skewX:-1.7,skewY:357.7,x:106.9,y:247.5,startPosition:99},0).wait(2).to({startPosition:101},0).wait(13).to({regX:136.3,regY:320.7,skewX:-3.1,skewY:356.4,x:105.6,startPosition:114},0).wait(2).to({regX:136.2,regY:320.6,skewX:-4.1,skewY:355.4,x:104.7,startPosition:116},0).wait(2).to({regY:320.5,skewX:-0.9,skewY:358.5,x:106.9,startPosition:118},0).wait(2).to({regY:320.7,scaleY:0.76,skewX:2.6,skewY:362.1,x:109.9,y:247.9,startPosition:120},0).wait(1).to({scaleX:0.76,skewX:4.8,skewY:364.3,x:111.4,y:248.1,startPosition:121},0).wait(2).to({regX:136.1,skewX:6.4,skewY:365.9,x:114.7,y:248.4,startPosition:123},0).wait(2).to({skewX:6.1,skewY:365.6,x:114,startPosition:125},0).wait(2).to({regX:136.2,regY:320.6,skewX:5.6,skewY:365.1,x:113.1,y:248.2,startPosition:127},0).wait(25).to({regY:320.7,skewX:6.6,skewY:366.1,x:114.1,y:248.4,startPosition:152},0).wait(2).to({regX:136.1,skewX:7.6,skewY:367.1,x:115.1,y:248.5,startPosition:154},0).wait(2).to({regY:320.6,skewX:3.3,skewY:362.8,x:109.6,y:247.9,startPosition:156},0).wait(1).to({skewX:-0.6,skewY:358.8,x:99.1,y:246.2,startPosition:157},0).wait(1).to({regX:135.9,regY:320.8,scaleX:0.77,scaleY:0.77,skewX:-7.6,skewY:351.8,x:85.7,y:249.9,startPosition:158,loop:false},0).wait(1).to({regX:136.1,regY:321,skewX:-11.4,skewY:348,x:78.9,y:251.3,startPosition:159},0).wait(2).to({scaleX:0.76,scaleY:0.76,skewX:-13.2,skewY:346.2,x:77.1,y:251.6,startPosition:161},0).wait(2).to({regX:135.9,regY:321.1,scaleX:0.77,scaleY:0.77,skewX:-13.8,skewY:345.6,x:76.3,y:251.7,startPosition:163},0).wait(2).to({regY:320.9,skewX:-14.4,skewY:345,x:75.6,startPosition:165},0).wait(35).to({regX:136.2,regY:321,scaleX:0.76,scaleY:0.76,skewX:-15.6,skewY:343.8,x:74.2,y:252,startPosition:200},0).wait(2).to({regX:136.1,regY:320.9,skewX:-16.8,skewY:342.6,x:72.5,y:252.2,startPosition:202},0).wait(2).to({regX:136,skewX:-9.7,skewY:349.7,x:82.7,y:253,startPosition:204},0).wait(1).to({skewX:1.7,skewY:361.2,x:90.9,y:254.1,startPosition:205},0).wait(1).to({regX:136.1,regY:321,scaleY:0.76,skewX:9.3,skewY:368.8,x:102.2,y:263.8,startPosition:206},0).wait(1).to({regX:135.9,regY:320.9,scaleX:0.76,scaleY:0.76,skewX:14.8,skewY:374.3,x:111.5,y:279.6,startPosition:207},0).wait(2).to({regY:321,scaleY:0.76,skewX:15.8,skewY:375.3,x:112.2,y:280.5,startPosition:209},0).wait(2).to({regY:321.1,skewX:14.9,skewY:374.4,x:111.6,y:280.1,startPosition:211},0).wait(2).to({regY:321,skewX:14.3,skewY:373.8,x:111.2,y:279.4,startPosition:213},0).wait(18).to({regX:136,regY:320.9,skewX:15.8,skewY:375.3,x:112.3,y:280.7,startPosition:231},0).wait(2).to({regX:135.9,skewX:17.3,skewY:376.8,x:113.7,y:282.1,startPosition:233},0).wait(2).to({regX:136,skewX:5,skewY:364.5,x:97.3,y:271.5,startPosition:235},0).wait(1).to({regX:135.8,skewX:0.5,skewY:360,x:70.7,y:251.9,startPosition:236},0).wait(1).to({regX:135.9,regY:320.8,scaleX:0.76,scaleY:0.76,skewX:-6.6,skewY:352.7,x:61.8,y:253.9,startPosition:237},0).wait(1).to({regY:320.9,scaleX:0.76,scaleY:0.76,skewX:-6.8,skewY:352.6,x:58.1,y:255,startPosition:238},0).wait(2).to({regY:320.8,scaleX:0.76,skewX:-7.7,skewY:351.7,x:57,startPosition:240},0).wait(2).to({regY:320.9,skewX:-7.1,skewY:352.3,x:58.1,y:254.8,startPosition:242},0).wait(2).to({regX:136.1,scaleX:0.76,skewX:-6.9,skewY:352.5,x:59.3,y:254.4,startPosition:244},0).wait(18).to({skewX:-7.7,skewY:351.7,x:58.7,y:254.6,startPosition:262},0).wait(2).to({regX:136,regY:321,skewX:-8.5,skewY:350.9,x:58.2,y:254.8,startPosition:264},0).wait(2).to({regX:136.1,regY:320.9,skewX:-6.9,skewY:352.5,x:59.3,y:254.4,startPosition:266},0).wait(2).to({regY:321,skewX:-6.4,skewY:353,x:69.3,y:252.7,startPosition:268},0).wait(1).to({regY:320.9,skewX:-5.4,skewY:354,x:77.7,y:249.3,startPosition:269},0).wait(1).to({regX:135.9,scaleX:0.77,scaleY:0.77,skewX:1,skewY:360.5,x:85.5,y:246,startPosition:270},0).wait(2).to({skewX:0.5,skewY:360,x:84.3,y:246.1,startPosition:272},0).wait(2).to({regX:135.8,regY:320.8,skewX:0,skewY:359.5,y:245.9,startPosition:274},0).wait(2).to({regX:135.9,regY:320.9,skewX:-0.3,skewY:359.1,x:83.9,y:246.1,startPosition:276},0).wait(4));

	// Layer 37
	this.instance_27 = new lib.FIZ23RARML002("single",48);
	this.instance_27.setTransform(95.7,244.5,0.76,0.76,0,6,-173.9,52.5,-52.1);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(158).to({startPosition:48,_off:false},0).wait(1).to({skewX:3.7,skewY:-176.1,x:88.6,y:245.5,startPosition:49},0).wait(2).to({regX:52.4,regY:-52.1,skewX:0.6,skewY:-179.2,x:86.8},0).wait(2).to({regX:52.5,regY:-51.9,skewX:0.2,skewY:-179.6,x:85.9,y:245.6},0).wait(2).to({regX:52.4,skewX:-0.6,skewY:-180.7,x:85.3},0).wait(35).to({regX:52.5,regY:-52,scaleX:0.76,scaleY:0.76,skewX:-2.9,skewY:-183,x:83.8,y:245.7},0).wait(2).to({scaleX:0.76,scaleY:0.76,skewX:-4.8,skewY:-184.9,x:81.8,y:245.8},0).wait(2).to({regX:52.6,scaleX:0.76,scaleY:0.76,skewX:1.6,skewY:-178.2,x:92.7,y:247.5},0).wait(1).to({regX:52.4,regY:-51.9,skewX:7.9,skewY:-171.9,x:101.3,y:249.5,startPosition:50},0).wait(1).to({skewX:10.7,skewY:-169.1,x:113,y:260.5,startPosition:51},0).wait(1).to({regX:52.2,scaleX:0.76,scaleY:0.76,skewX:12.3,skewY:-167.5,x:123.4,y:273.3,startPosition:52},0).wait(2).to({regX:52.3,scaleX:0.76,scaleY:0.76,skewX:10.8,skewY:-169,x:124.1,y:273.7},0).wait(2).to({regX:52.2,regY:-52,skewX:11.1,skewY:-168.7,x:123.5,y:273.1},0).wait(2).to({regY:-51.9,skewX:11.8,skewY:-168,x:123,y:272.5},0).wait(18).to({regX:52.1,regY:-52,scaleX:0.76,scaleY:0.76,skewX:14.1,skewY:-165.7,x:124.3,y:273.9},0).wait(2).to({regX:52.2,skewX:15.8,skewY:-164,x:125.7,y:275.5},0).wait(2).to({regX:52.1,regY:-51.9,skewX:0.3,skewY:-179.5,x:107.7,y:267.7},0).wait(1).to({regX:52.4,regY:-52,scaleX:0.76,scaleY:0.76,skewX:-1.4,skewY:-181.5,x:76.1,y:245.6,startPosition:53},0).wait(1).to({skewX:-7.7,skewY:-187.8,x:70.5,y:247,startPosition:54},0).wait(1).to({scaleY:0.75,skewX:-6.3,skewY:-186.4,x:66.6,y:247.7,startPosition:55},0).wait(1).to({regX:55.4,regY:-41.8,scaleY:0.77,skewX:-7.7,skewY:-187.8,x:65.6,y:255.9},0).wait(1).to({regX:52.4,regY:-52,scaleY:0.76,skewX:-10,skewY:-190.1,y:247.7},0).wait(1).to({regX:54.6,regY:-39.4,skewX:-8.7,skewY:-188.8,y:257.4},0).wait(1).to({regX:54.9,regY:-39.7,skewX:-9.6,skewY:-189.7,x:66.4,y:257},0).wait(1).to({regX:54.8,skewX:-8.4,skewY:-188.5,y:257.1},0).wait(1).to({regX:55.1,regY:-39.8,skewX:-9.9,skewY:-190,x:67.2,y:256.8},0).wait(1).to({skewX:-9.1,skewY:-189.2},0).wait(1).to({skewX:-9.9,skewY:-190},0).wait(2).to({skewX:-9.1,skewY:-189.2},0).wait(2).to({skewX:-8.5,skewY:-188.6},0).wait(12).to({regX:52.4,regY:-52,skewX:-9,skewY:-189.1,x:67.4,y:247.4},0).wait(2).to({skewX:-9.6,skewY:-189.7,x:66.8,y:247.6},0).wait(2).to({skewX:-8.3,skewY:-188.4,x:67.9,y:247.3},0).wait(2).to({regX:52.3,skewX:-4,skewY:-184.1,x:78.4,y:246,startPosition:56},0).wait(1).to({regX:52.4,skewX:-0.5,skewY:-180.6,x:87.1,y:244.2,startPosition:57},0).to({_off:true},1).wait(10));

	// FIZ-34L-COLLARBK-01
	this.instance_28 = new lib.FIZ_23_part_00911509("single",0);
	this.instance_28.setTransform(82.9,245.3,0.75,0.768,0,0,180,41.6,43.5);

	this.instance_29 = new lib.FIZ23RCOLLARBK002("single",0);
	this.instance_29.setTransform(94,245.9,0.747,0.765,0,-2.8,177.1,41.6,43.4);

	this.instance_30 = new lib.FIZFRONTCOLLAR002("single",0);
	this.instance_30.setTransform(94.3,252.6,0.773,0.773,0.3,0,0,50.9,37.3);

	this.instance_31 = new lib.FIZ23RARMR002("single",42);
	this.instance_31.setTransform(107.4,250.8,0.763,0.763,-11.9,0,0,-51.4,-60.6);

	this.instance_32 = new lib.FIZ34LCOLLARBK01("single",0);
	this.instance_32.setTransform(82.5,248.6,0.77,0.77,0,-7.2,172.7,46.5,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_28,p:{regX:41.6,skewX:0,skewY:180,x:82.9,regY:43.5,y:245.3}}]}).to({state:[{t:this.instance_29,p:{scaleX:0.747,scaleY:0.765,skewX:-2.8,skewY:177.1,x:94,y:245.9,regX:41.6,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-4.9,skewY:175,x:108,y:247,regX:41.6,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:113.6,y:248.3,regX:41.4,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:114.6,y:248.6,regX:41.5,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:-5.1,skewY:174.8,x:108.1,y:247.6,regX:41.5,regY:43.1,rotation:0}}]},3).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:-3.9,skewY:176,x:98.1,y:245.8,regX:41.6,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-2.7,skewY:177.2,x:91.2,y:245.5,regX:41.9,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:-0.7,skewY:179.2,x:81,y:245.4,regX:41.5,regY:43.4,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0.1,skewY:-179.9,x:73.8,y:246.7,regX:41.4,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.762,skewX:0.6,skewY:-179.3,x:71.7,y:247.1,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.762,skewX:0.1,skewY:-179.8,x:74.2,y:246.9,regX:41.3,regY:43.4,rotation:0}}]},3).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-2.4,skewY:177.5,x:83.7,y:246.2,regX:41.5,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-3.2,skewY:176.7,x:92.8,y:245.6,regX:41.3,regY:43.2,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.763,skewX:-5.1,skewY:174.8,x:107.8,y:247.2,regX:41.3,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-5.6,skewY:174.3,x:111.1,y:247.7,regX:41.4,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:113.6,y:248.3,regX:41.4,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:114.6,y:248.6,regX:41.5,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.764,skewX:-5.9,skewY:174,x:113,y:248.3,regX:41.5,regY:43.4,rotation:0}}]},3).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:-5.1,skewY:174.8,x:108.1,y:247.6,regX:41.5,regY:43.1,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:-3.9,skewY:176,x:98.1,y:245.8,regX:41.6,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:-0.7,skewY:179.2,x:81,y:245.4,regX:41.5,regY:43.4,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0.1,skewY:-179.9,x:73.8,y:246.7,regX:41.4,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.762,skewX:0.6,skewY:-179.3,x:71.7,y:247.1,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0.1,skewY:-179.9,x:73.8,y:246.7,regX:41.4,regY:43.3,rotation:0}}]},3).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:3.1,skewY:-176.8,x:90.2,y:251,regX:41.6,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.763,skewX:8.7,skewY:-171.2,x:109.1,y:263.4,regX:41.5,regY:43.4,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.763,skewX:9.9,skewY:-170,x:111.5,y:266.8,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.763,skewX:10.6,skewY:-169.3,x:113.1,y:269.1,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.746,scaleY:0.763,skewX:10.1,skewY:-169.8,x:111.8,y:268.5,regX:41.5,regY:43.4,rotation:0}}]},3).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:3.8,skewY:-176.1,x:104.8,y:258.5,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_30,p:{regY:37.3,rotation:0.3,x:94.3,y:252.6}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:83.4,y:253.1,regX:41.4,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:78.1,y:248.4,regX:41.5,regY:43.4,rotation:-0.4}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:76.5,y:247.6,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.763,skewX:0,skewY:0,x:79.1,y:247.4,regX:41.4,regY:43.5,rotation:0.7}}]},4).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.762,skewX:0,skewY:0,x:90.5,y:247.6,regX:41.4,regY:43.2,rotation:3.5}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.745,scaleY:0.762,skewX:0,skewY:0,x:95.9,y:248,regX:41.4,regY:43.4,rotation:3.1}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:97.1,y:248.2,regX:41.5,regY:43.4,rotation:3}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:98.2,y:248.3,regX:41.4,regY:43.4,rotation:3}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:99.6,y:248.4,regX:41.5,regY:43.4,rotation:3.1}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:93.7,y:247.7,regX:41.4,regY:43.2,rotation:1.9}}]},3).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.762,skewX:0,skewY:0,x:89.3,y:248,regX:41.4,regY:43.4,rotation:0.4}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:83.4,y:247.6,regX:41.3,regY:43.2,rotation:-0.9}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:77.6,y:247.7,regX:41.4,regY:43.3,rotation:-1.3}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:78.7,y:247.7,regX:41.5,regY:43.4,rotation:-0.8}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:79.4,y:247.7,regX:41.6,regY:43.4,rotation:-0.5}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:80.3,y:247.6,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:80.9,y:249.6,regX:41.4,regY:43.4,rotation:0}}]},4).to({state:[{t:this.instance_29,p:{scaleX:0.744,scaleY:0.761,skewX:0,skewY:0,x:83.3,y:251.6,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_31},{t:this.instance_30,p:{regY:37.4,rotation:-0.9,x:93.5,y:258.7}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-1.8,skewY:178.1,x:102.5,y:252.3,regX:41.5,regY:43.1,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-1.7,skewY:178.2,x:104.1,y:250.9,regX:41.4,regY:43.2,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-1.6,skewY:178.3,x:104.8,y:247.7,regX:41.4,regY:43.2,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-1.8,skewY:178.1,x:105.6,y:246.2,regX:41.5,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-1.8,skewY:178.1,x:105.6,y:246.2,regX:41.5,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-3.1,skewY:176.8,x:104.3,y:246.2,regX:41.3,regY:43.4,rotation:0}}]},13).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-4.1,skewY:175.8,x:103.4,y:246.2,regX:41.4,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:-1,skewY:178.9,x:105.6,y:246.2,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.761,skewX:2.8,skewY:-177.1,x:108.9,y:246.5,regX:41.4,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.76,skewX:5,skewY:-174.9,x:110.4,y:246.6,regX:41.4,regY:43.3,rotation:0}}]},1).to({state:[{t:this.instance_29,p:{scaleX:0.742,scaleY:0.76,skewX:6.6,skewY:-173.3,x:113.7,y:246.9,regX:41.5,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.76,skewX:6.3,skewY:-173.6,x:113,y:246.9,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.76,skewX:5.8,skewY:-174.1,x:112,y:246.7,regX:41.5,regY:43.4,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.76,skewX:6.8,skewY:-173.1,x:113.1,y:246.8,regX:41.4,regY:43.2,rotation:0}}]},25).to({state:[{t:this.instance_29,p:{scaleX:0.743,scaleY:0.76,skewX:7.9,skewY:-172,x:114.2,y:246.9,regX:41.4,regY:43.3,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.742,scaleY:0.76,skewX:3.5,skewY:-176.4,x:108.5,y:246.4,regX:41.5,regY:43.2,rotation:0}}]},2).to({state:[{t:this.instance_29,p:{scaleX:0.742,scaleY:0.76,skewX:-0.4,skewY:179.5,x:97.9,y:244.9,regX:41.5,regY:43.4,rotation:0}}]},1).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.77,scaleY:0.77,skewX:-7.2,skewY:172.7,x:82.5,y:248.6,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:-11,skewY:168.9,x:75.6,y:250.1,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:-12.8,skewY:167.1,x:73.9,y:250.4,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:-13.4,skewY:166.5,x:73,y:250.5,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:-14,skewY:165.9,x:72.4,y:250.6,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.7,scaleX:0.769,scaleY:0.769,skewX:-15.2,skewY:164.7,x:70.9,y:251,regY:44.7}}]},35).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:-16.4,skewY:163.5,x:69.1,y:251.3,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:-9.3,skewY:170.6,x:79.6,y:251.6,regY:44.7}}]},2).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.769,scaleY:0.769,skewX:2.2,skewY:-177.7,x:88,y:252.1,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.768,scaleY:0.768,skewX:9.8,skewY:-170.1,x:99.4,y:261.4,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.767,scaleY:0.767,skewX:15.3,skewY:-164.6,x:109.2,y:277,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:16.3,skewY:-163.6,x:110.1,y:277.9,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:15.4,skewY:-164.5,x:109.5,y:277.5,regY:44.5}}]},2).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:14.8,skewY:-165.1,x:109,y:276.9,regY:44.5}}]},2).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:16.3,skewY:-163.6,x:110.1,y:278.1,regY:44.6}}]},18).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:17.8,skewY:-162.1,x:111.7,y:279.5,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.767,scaleY:0.767,skewX:5.5,skewY:-174.4,x:94.6,y:269.4,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.768,scaleY:0.768,skewX:1,skewY:-178.9,x:67.9,y:250,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.768,scaleY:0.768,skewX:-6.2,skewY:173.7,x:58.8,y:252.5,regY:44.6}}]},1).to({state:[{t:this.instance_32,p:{regX:46.6,scaleX:0.768,scaleY:0.768,skewX:-6.4,skewY:173.5,x:55.1,y:253.6,regY:44.7}}]},1).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.768,scaleY:0.768,skewX:-7.3,skewY:172.6,x:54,y:253.6,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.768,scaleY:0.768,skewX:-6.7,skewY:173.2,x:55,y:253.3,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:-6.5,skewY:173.4,x:56.2,y:253,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.768,scaleY:0.768,skewX:-7.3,skewY:172.6,x:55.6,y:253.1,regY:44.6}}]},18).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.768,scaleY:0.768,skewX:-8.1,skewY:171.8,x:55,y:253.3,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.4,scaleX:0.768,scaleY:0.768,skewX:-6.5,skewY:173.4,x:56.2,y:253,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.768,scaleY:0.768,skewX:-6,skewY:173.9,x:66.2,y:251.2,regY:44.6}}]},2).to({state:[{t:this.instance_32,p:{regX:46.5,scaleX:0.767,scaleY:0.767,skewX:-5,skewY:174.9,x:74.6,y:247.7,regY:44.6}}]},1).to({state:[{t:this.instance_28,p:{regX:41.5,skewX:0.8,skewY:-179.1,x:84.6,regY:43.5,y:245.3}}]},1).to({state:[{t:this.instance_28,p:{regX:41.5,skewX:0.2,skewY:-179.7,x:83.4,regY:43.6,y:245.5}}]},2).to({state:[{t:this.instance_28,p:{regX:41.5,skewX:0.3,skewY:-179.6,x:83.5,regY:43.5,y:245.3}}]},2).to({state:[{t:this.instance_28,p:{regX:41.6,skewX:0,skewY:180,x:82.9,regY:43.5,y:245.3}}]},2).wait(4));

	// Layer 40
	this.instance_33 = new lib.FIZ23RARML002("single",30);
	this.instance_33.setTransform(121.6,263.4,0.765,0.765,0,12.3,-167.6,52.9,-51.9);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(45).to({startPosition:30,_off:false},0).wait(2).to({regY:-51.7,scaleX:0.76,scaleY:0.76,skewX:10.2,skewY:-169.6,x:124,y:266.8},0).wait(2).to({regY:-51.6,skewX:10.9,skewY:-168.9,x:125.5,y:268},0).wait(3).to({skewX:10.4,skewY:-169.4,x:124.3,y:267.4},0).wait(2).to({regX:53,regY:-51.7,skewX:10.9,skewY:-168.9,x:117.1,y:261.4},0).to({_off:true},1).wait(225));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-1.1,173.2,375.9);


(lib.FIZZYIDLE11509 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FIZZYIDLEEYES11509("synched",0);
	this.instance.setTransform(8.3,-50.2);

	this.instance_1 = new lib.FIZ_23_part_03211509("single",0);
	this.instance_1.setTransform(7.5,141.9,0.768,0.768,0,0,180,23.4,111.3);

	this.instance_2 = new lib.FIZ_23_part_02811509("single",1);
	this.instance_2.setTransform(-12.8,59.9,0.776,0.824,0,-21.5,156.3,4.5,1.9);

	this.instance_3 = new lib.FIZ_23_part_01011509("single",1);
	this.instance_3.setTransform(16,62.2,0.767,0.767,0,18.1,-161.8,83,1.4);

	this.instance_4 = new lib.FIZ_23_MOUTH_COMP11509("single",0);
	this.instance_4.setTransform(5,2.8,0.768,0.768,0,-1,178.9,31.1,10.2);

	this.instance_5 = new lib.FIZ_23_part_02211509("single",0);
	this.instance_5.setTransform(19.2,-39.2,0.768,0.768,0,-9.5,170.4,11.8,2.7);

	this.instance_6 = new lib.FIZZYHEAD11509("synched",0);
	this.instance_6.setTransform(0,-58.8,0.768,0.768,0,-1,178.9);

	this.instance_7 = new lib.FIZ_23_part_00911509("single",0);
	this.instance_7.setTransform(3.4,61.8,0.75,0.768,0,0,180,41.6,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(86));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.1,-184.6,160.3,376);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;