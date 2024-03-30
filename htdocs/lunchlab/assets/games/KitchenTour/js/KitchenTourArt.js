(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.KitchenTourArt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#172628").s().p("AHaA9IgIgDQgHgDgGgGQgGgGgDgIQgCgHAAgKQAAgIACgJQADgFAGgGQAGgGAHgDQAIgDAJAAQAJAAAIADQAHADAGAGQAGAGADAFQACAJAAAIQAAAKgCAHQgDAIgGAGQgGAGgHADQgLADgGAAgAHYgHQgFACgDAFIgFAHIgBALQAAAHABAEQABAGADAFQAEAEAEACQAGAEAGAAQAGAAAGgEQAEgCAEgEQADgFABgGQABgEAAgHQAAgFgCgGQgBgFgDgCQgEgFgEgCQgFgDgGAAQgGAAgFADgAjFA9IgHgDQgHgEgEgHQgFgGgCgHQgBgIAAgJQAAgIABgIQADgFAEgFQAFgHAGgCQAHgEAJAAIAJABIAIADQAGADAEAGIAAAAIAAgyIAPAAIAAB3IgOAAIAAgMIgBAAQgEAFgFAEIgIADIgKABIgJAAgAjDgHQgFACgDAFQgCACgBAFQgCAFABAGQgBAGACAEIADAKQAEAGAEACQAEAEAGAAQAGAAAFgEQAEgCADgFIAFgKIABgKQAAgGgBgGQgCgFgDgCQgDgEgFgDQgEgDgGAAQgGAAgEADgAmMA7QgGgCgEgFQgDgEgCgHQgCgGAAgJIAAguIAPAAIAAAoIAAANQACAFACAEQACADADACQADACAFABQAGAAAGgDQAEgDADgEQADgEACgHQABgGAAgHIAAgkIAPAAIAABQIgPAAIAAgOIAAAAQgCAEgCADIgGAFIgJADIgIAAQgHAAgGgCgAnkA9IgIgDQgIgDgFgGQgFgGgDgIQgEgHAAgKQAAgIAEgJQADgFAFgGQAFgGAIgDQAIgDAJAAQAJAAAIADQAHADAGAGQAFAGADAFQADAJAAAIQAAAKgDAHQgDAIgFAGQgGAGgHADQgLADgGAAgAnmgHQgFACgDAFIgFAHIgBALQAAAHABAEQABAGAEAFQADAEAFACQAFAEAGAAQAHAAAEgEQAFgCAEgEQACgFACgGQACgEAAgHQAAgFgDgGQgBgFgDgCQgEgFgFgCQgEgDgGAAQgGAAgFADgAIqA8IAAhEIgTAAIAAgMIATAAIAAgHIABgOQACgGACgFQADgEAGgCQAGgDAHAAIALABIgBANIgHgBQgFAAgDABQgDABgCADQgCAEAAAKIAAAJIAVAAIAAAMIgVAAIAABEgAkCA8IAAgrIgBgMQgBgFgDgCQgCgEgCgCQgEgCgFAAQgGAAgFACQgEADgDAFQgDACgCAGQgBAGgBAIIAAAmIgOAAIAAhQIAOAAIAAANIAFgHIAGgEIAHgDIAJgBQAHAAAHADQAFABAEAGQAEADABAIQACADABAJIAAAxgApOA8IAAhuIA7AAIAAAOIgrAAIAAAhIAoAAIAAALIgoAAIAAA0g");
	this.shape.setTransform(429.6,555);

	// Layer 12
	this.total = new cjs.Text("00", "bold 36px Cafeteria", "#FFE969");
	this.total.textAlign = "center";
	this.total.lineHeight = 40;
	this.total.lineWidth = 44;
	this.total.setTransform(514.8,534);

	this.found = new cjs.Text("00", "bold 36px Cafeteria", "#FFE969");
	this.found.textAlign = "center";
	this.found.lineHeight = 40;
	this.found.lineWidth = 44;
	this.found.setTransform(442.8,534);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#68A0D6","#3278BC"],[0,1],0,-35.4,0,15.5).s("#CEF2FF").ss(1.5,1,1).rr(-104.5,-27,209,54,13);
	this.shape_1.setTransform(450,555.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.4)").s().rr(-104.5,-27,209,54,13);
	this.shape_2.setTransform(451,561.5);

	// ItemPopup
	this.dialog = new lib.ItemPopup();
	this.dialog.setTransform(337,328.1,1,1,0,0,0,280.5,156.5);

	// blocker
	this.blocker = new lib.Blocker();
	this.blocker.setTransform(450,300,1,1,0,0,0,450,300);

	// counters
	this.counters = new lib.Counters();
	this.counters.setTransform(-2.9,350);

	// kitchen
	this.kitchen = new lib.Kitchen();

	this.addChild(this.kitchen,this.counters,this.blocker,this.dialog,this.shape_2,this.shape_1,this.found,this.total,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.9,-49.2,2459.4,650.8);


// symbols:
(lib.Counter = function() {
	this.initialize(img.Counter);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,912,251);


(lib.KitchenTour_vBG = function() {
	this.initialize(img.KitchenTour_vBG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1950,600);


(lib.XTSPFR002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(3,1,1).p("ANOkKIAAAAQAHAEAAAEQAAATiBANQiBANi2AAQi3AAiBgNQh+gNAAgTQAAgDAEgDQABgBABgBQAEgCAGgCAhOk/IAAAAQgCAAgCABQgXAFgLAGAh1kzQgCABgBABIAAAAIAAAAAivkvQjLADjLgSAOlisQACgVABgQQABgWAAgQQAAgBAAAAQAFgrgegRAADg9IgDgBIAFACAADg9IAhAJIAIABIADAAQGoBDE3hBIA6gMQAKgDAJgCQAGgCAFgCQAZgGAagIQAHgyAFgmAgPgfIgBgQAg1hJIgBgBAg9hLIgagDIgTgBQgCAAgCAAQgDAAgDgBAhXhNIgTgCQgCAAgCAAQgDAAgDgBQkJgYjgAbQiHARiBAhQgFABgFACQgQgigLgbQgHgNgFgMQgGgOgEgOQghh1Bbh1QAjAJAtALQAuALAzAJQANACANACIBWAKAAgg1IAEABAgQg+IAwAJANmhGQAAADAAACQAAAHgBAGQABAFgBAEANkgiQgJBCgTAvQgZA9gpA4QgaAhgdAdQgWATgWATQg8AthJAUQhHAShIgJAGOFwQgTgCgRgCIhDgTQgsgQgngXQgsgagmgjQhOhJgqhpQgQgwgHgqIgCgIANkgiQABgEAAgFAGPFyIAAAAAGPFyIgBgCANlg0QAAAEgBADAivkvIAzgCQACAAACAAAgqhHIgIgCIgCAAAgWhDIgPgDIAOAEIgTgFIgMgCAglhGIgFgBAglhGIgNgDAtlgbQgXgfgOgbAAAg+IgWgFIAbAH");
	this.shape.setTransform(2.3,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6BADBD").s().p("AgYDaIgYgVIgMAQIhDgTQgsgQgngXQgsgagmgjQhNhJgrhnQgRgwgIgsIgBgIIgCgQIgDgBIAAgIIADgGIAyAJIAEABIAJABIACAAQGnBFE2hDIA6gMIATgFIAAAAIACAAIAHAVIABACIABADIAAAEIAAACIgCAAIAAAAIAAAAIABgJIgBAJIgBABQg0ARg2AOQg8ANg9AKQg2AIg1ADQg8AEg3gBIgqgDIgBADQgKAmgEAoQgFAxAGA1QAAANADAQQAGAoANAoIADAIIAOAmgAl3jKIgCAAIgJgBIgggJIgDgBIAuAJQAMADgGAAIgGgBgAmGjMIgygKIgFgEIAcAHIgBgBIAgAJgAm9jaIAVAFIAHACgAmijUgAm9jag");
	this.shape_1.setTransform(44.7,19.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7EC5D6").s().p("AjTDJIgBAAIgOgmIgDgIQgNgogGgoQgDgQAAgNQgGgzAFgzQAEgoAKgnIABgCIAqADQA5ABA8gEQA1gDA0gIQA9gLA8gNQA2gNA0gRIABgBQgJBEgSAvQgaA9gpA2QgaAhgdAdIgsAmQg8AthHAUQgvAMgvAAQgYAAgYgDg");
	this.shape_2.setTransform(63.6,21.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAD9D8").s().p("AEhFbIABAAIAAABgAjNi1IgVgDIgBgBIAAABQkygxkWArQgihKAnhTIAdACIBWAFQDLARDMgDIA2AJIACgJIgCgBIAAgBIAAAAIAAAAIADgCIAAABIABgBQALgGAXgFIAEgBIABAAQACAlBCAMIgKAEIgCACQgEADAAADQAAATCAANQB/ANC3AAQC2AACBgNQCBgNAAgTQAAgEgHgEIAAAAIBCgqQAeARgFArIAAABIgBAmIgDAlQj9BOkPAAQj2AAkChAg");
	this.shape_3.setTransform(13.3,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBCB9").s().p("AGRFyIABABIAAABgAAygyIgDAAIADAAQAPABgPgDIgugJIACABIgFgBIgUgFIgPgDIANAEIgSgFIAFABIgNgDIgCAAIACAAIAIACIgNgCIADAAIgBAAIgCAAIgHgCIgZgDIAAABIgUgCIgDAAIgHgBIAHABIADAAIAUABIgUgBIgDAAIgHgBQkJgYjgAbQiGARiCAhQgWgfgOgbIgMgZQgGgOgEgOQgih1Bbh1IBRAUQAuALAzAJIAZAEIAAAGIgdgCQgnBTAiBKQEWgrEyAxIABACIAAgCIAVADQIhCGHjiUIgMBYIgyAOIgLAEIgTAFIg6AMQiZAhi1AAQi6AAjXgjgAgOg9IgZgFIgBAAIAbAEIAvAKgAABg9IAFABIACABgAABg9gAgnhGIgIgCIANADgAgvhIgAhyhPIAAAAg");
	this.shape_4.setTransform(2,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBD4C5").s().p("Am8BbQAOAbAXAfIgKACQgQghgLgbgAG5CAIADAAIABAQgAGiBtIAaAFIgEAGgAGiBtIgNgGIANACIATAEIgOgDIAPADIAGAEgAjOiRIAAgFIBXAKg");
	this.shape_5.setTransform(-43.8,-12.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#958B96").ss(3,1,1).p("ANShJQAHAbAAAdQAAAngNAmQgBABgBACQgdBOhWA9QhjBFiCAQIhUAGQgDAAgCAAQhXAAhJgWIgngMQg6gWgzgjQhPg5gdhGQAAAAAAgBQgTgsAAgvQAAgrAOgnANShJQgWhehlhHQhjhFiCgQIhUgGQgDAAgCAAQhXAAhKAWIgmAMQg7AWgyAjQhWA9gbBOAhsh0QAGgBAHgBQAOglAYgiQAkg1A5gtQCah3DbAAQDaAACbB3QBFA1AmA/QAwBPAABcQAACoibB4QibB3jaAAQjbAAiah3QhfhLgkhdQgGgBgHAAAhtB2QkHgbjoAcQiHARiCAiQgfgpgQgnQgGgOgEgOQgihzBbh1QBXAXBZAOQAsAIAtAFQAMACAMABQDlAZDygY");
	this.shape_6.setTransform(2.1,-15.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#928D94").s().p("AgEDEQhWAAhKgVIgmgNQg7gVgygkQhQg4gfhEIAAgBQgTgsAAgyQAAgrAPgmIAGAHQA2A8BKAnQF2DEFHj/IAJgIIARgOQAHAcAAAdQAAApgNAlIgBAEQgeBLhWA9QhjBGiCAPIhTAGIgEAAg");
	this.shape_7.setTransform(43.6,-5.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A59DA6").s().p("AkoB8QhKgmg2g8IgGgIQAchMBXg9QAygjA7gVIAmgNQBKgWBWAAIAGAAIBRAGQCCAQBjBFQBlBHAWBcIgRAOIgJAHQi5CSjIAAQiZAAijhXg");
	this.shape_8.setTransform(44,-27.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BDBCB9").s().p("AmTBaQgGgOgEgOQghhzBbh0QBXAWBZAPIgCALQgnBYAiBMIABAJQEWgiE2AtIAAA4QkHgbjmAcQiHAQiCAiQgggogQgogAGTB3IAAg4IAUADIgHA0IABACIgOgBg");
	this.shape_9.setTransform(-49.1,-15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DAD9D8").s().p("AhIEgQhhhLgkhdIgBgCIAQADQgKgaACgdIgBAAIgTgDIAAizIANgCQAOglAYgiQAkg1A7gtQCYh3DbAAQDaAACbB3QBFA1AmA/QAwBPAABcQAACoibB4QibB3jaAAQjbAAiYh3gACKkzIgmANQg6AVgxAjQhWA9gdBOQgOAnAAArQAAAvATAsIAAABQAfBGBPA5QAxAjA6AVIAnANQBKAWBWAAIAFAAIBUgGQCCgQBjhFQBWg9AdhOIACgDQANgmAAgnQAAgdgHgbQgWhehlhHQhjhFiCgQIhUgGIgFAAQhXAAhKAWgAspAzIgBgIQgihNAnhXIACgLQAsAHAtAFIAYADQDlAZDygZIAAC0Qk1gtkZAhg");
	this.shape_10.setTransform(13.1,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CBD4C5").s().p("AgGAYIAGgyIAAAAQgBAbAIAag");
	this.shape_11.setTransform(-6.7,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-32.5,187.7,74.7);


(lib.XTSP002 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(3,1,1).p("AgRgnQAFAMAHAMAgDgKQA3CgBvBcQBIA7BSAdIA8ARAGZFgIABAAIABAAANbgyQmWBmnUhlAgZjxQAAgEAEgDQABgBABAAQAVgOBjgKQCBgNC3AAQC2AACBANQBfAKAZANQABAAABABQAHAEAAAEQAAASiBANQiBANi2AAQi3AAiBgNQh+gNAAgSgAh0kiQALgGAXgGQACAAACgBQAmgIBDgHQCbgPDbAAQDaAACbAPQBGAHAuALQA2AMgHA4QAAABAAABQAAAPgBAWQgBARgCAVQgFAlgHAzQgaAHgZAHQAAACAAACQgBAPgCANANbgyQAGgCAFgBANigJQgNA4gZA2QgdA7gsAzQgrAyg1AkQg4AlhCAPQg/ANg/gKAGZFgQgQgCgQgDANigRQAAABAAABQABADgBADAg1g5QgBAAgBgBAg9g6QgcgDgbgDAh1hAQj8gZjsAdQiHAQiBAiQgFABgFABQgQghgLgcQgHgMgFgNQgGgOgEgOQghh1Bbh0QAjAIAtALQAuAMAzAIQANADANABIBWALQDLARDLgDIAzgBQACAAACgBIAAAAQABgBACAAAh4kgIAAgBAtlgKQgXgfgOgcAg1g5QAUAEASAE");
	this.shape.setTransform(2.3,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A59DA6").s().p("Ak2AfQiAgNAAgSIAGgGQAWgOBkgKQCBgNC1AAQC1AACBANQBfAJAZANIAJAIQABASiCANQiBANi1AAQi1AAiBgNg");
	this.shape_1.setTransform(43.6,-21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DAD9D8").s().p("AEtFVIAAAAQghg/gMhFQgPhVAQhWIApACQA4ACA6gDQA1gCA1gJQA+gKA+gNQA5gMA4gTIABAGQgNA4gZA2QgdA7gsAzQgrAyg1AkQg4AlhCAPQgkAHglAAQgaAAgbgEgAEtFVIAAAAIAAABgAEtFVgAjNiZIgVgDIgBgBIAAABQkygwkWArQgihKAnhUIAdACIBWAFQDLARDMgDIA2AKIACgKIgCgBIAAAAIAAgBIAAAAIADgBIAAAAIABAAQALgGAXgGIAEgBQAmgIBFgHQCZgPDbAAQDaAACbAPQBGAHAuALQA2AMgHA4IAAACIgBAlIgDAmQj9BNkPAAQj2AAkChAgAgHkcQhjAKgXAOIgCABQgEADAAAEQAAASCAANQB/ANC3AAQC2AACBgNQCBgNAAgSQAAgEgHgEIgCgBQgZgNhfgKQiBgNi2AAQi3AAh/ANg");
	this.shape_2.setTransform(13.3,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDBCB9").s().p("AGcFhIABABIAAABgAGcFhIgXgRIgJAMIg9gQQhRgdhIg7Qhvhdg3igIgDgEIgMgYIADgKIAUAEIAAAAQDeAtDPAAIABAAIAAAAQDcAADMgyIAIAcIgBAEIAAACIgCABQg3ARg5ANQg/ANg+ALQg1AIg0ACQg6ADg5gBIgogDQgQBWAOBWQAMBEAhBAgAG1ACQjPAAjegtIAAAAIgUgEIgmgJIgCAAIgHgBIg3gFIAAgBIgBABQj7gZjtAcQiGARiCAhQgWgfgOgbIgMgZQgGgOgEgOQgih1Bbh1IBRAUQAuALAzAJIAZAEIAAAGIgdgCQgnBTAiBKQEWgrEyAxIABAAIAAAAIAVADQIhCGHjiUIgMBYIgyAOIgLAEQjMAyjcAAIAAAAIgBAAg");
	this.shape_3.setTransform(2,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CBD4C5").s().p("AnBBbQAOAbAXAfIgKACQgQghgLgbgAG2CQIAAgYIgkgSIAmAIIgCAKIAMAYgAjSiRIAAgFIBWAKg");
	this.shape_4.setTransform(-43.3,-12.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#958B96").ss(3,1,1).p("Ahsh0QAGgCAHAAQAOglAYgiQAagmAjgiQAIgHAIgGQASgOASgMQAUgOAVgNQABAAALgGQAKgFAVgLQAVgKAXgIQAXgIAYgIQAYgGAYgFQAZgFAagDQAagCAagCQAeAAAdABQATABAUABQASADASABQASAEASADQARAEARAEQARAFARAFQAQAGARAGQAPAIAQAHQAPAIAQAHQAiAUAhAYQBFA2AmA/QAwBOAABdQAACoibB4QibB3jaAAQjbAAiah3QhfhLgkhdQgGgBgHAAAhtB2QkHgbjoAcQiHARiCAiQgfgpgQgnQgGgOgEgOQgihzBbh1QBXAWBZAPQAsAIAtAFQAMABAMACQDlAZDygZANShJQgWhehlhHQgGgEgGgEQgZgOgYgNQgagMgbgJQgbgKgcgIQgPgDgOgDQgQgCgPgDQgcgCgdgCQgbgBgaAAQgVABgVACQgeADgdAHQgYAGgYAGQgOAFgOAFQgPAFgOAGQgOAHgNAGQgOAHgNAIQgOAJgOAJQgUAPgUAQQg1AwgTA6ANShJQAHAbAAAdQAAAngNAmQgBABgBACQgdBOhWA9QhjBFiCAQIhUAGQgDAAgCAAQhXAAhJgWIgngNQg6gVgzgjQhPg5gdhGQAAAAAAgBQgTgsAAgwQAAgqAOgn");
	this.shape_5.setTransform(2.1,-15.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#928D94").s().p("AgEDEQhWAAhKgVIgmgNQg7gVgygkQhQg4gfhEIAAgBQgTgsAAgyQAAgrAPgmIAGAHQA2A8BKAnQF2DEFHj/IAJgIIARgOQAHAcAAAdQAAApgNAlIgBAEQgeBLhWA9QhjBGiCAPIhTAGIgEAAg");
	this.shape_6.setTransform(43.6,-5.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A59DA6").s().p("AkoB8QhKgng2g8IgGgHQAVg4A0gwIAogfQAOgKAPgIIAagPIAcgNQAOgGAOgFIAdgKIAwgNQAdgGAegEIApgCIA0ABIA5AEIAeAFIAdAGQAcAIAcAJQAaAKAaAMIAxAbIAMAIQBlBHAWBbIgRAOIgJAIQi5CRjIAAQiZAAijhWg");
	this.shape_7.setTransform(44,-27.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDBCB9").s().p("AmTBaQgGgOgEgOQghhzBbh0QBXAWBZAPIgCALQgnBYAiBMIABAJQEWgiE2AtIAAgBIAAABIAUADIgHA0IABACIgOgBIAAAAIAAAAQkHgbjmAcQiHAQiCAiQgggogQgog");
	this.shape_8.setTransform(-49.1,-15.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DAD9D8").s().p("AhIEgQhhhLgkhdIgBgDIAQAEQgKgbACgcIgBAAIgTgEIgBAAIAAAAQk1gtkZAiIgBgJQgihMAnhXIACgMQAsAIAtAFIAYADQDlAZDygZIAAABIABgBIANgBQAOgmAYghQAagmAlgiIAQgNQASgOASgMQAUgOAVgMIALgHIAegQQAWgKAWgIIAvgQIAwgMIAzgHIA0gEIA7ABIAnACIAkAFIAkAGIAiAIIAiALIAhALIAfAQIAfAOQAjAUAgAYQBFA2AmA/QAwBOAABdQAACoibB4QibB3jaAAQjbAAiYh3gADslGQgeAEgdAGIgwAOIgcAJQgPAFgOAHIgbAMIgbAPQgOAJgMAJIgoAfQg1AwgVA6QgOAnAAAqQAAAwATAsIAAABQAfBGBPA5QAxAjA6AVIAnANQBKAWBWAAIAFAAIBUgGQCCgQBjhFQBWg+AdhNIACgEQANglAAgnQAAgdgHgcQgWhdhlhHIgMgIIgxgbQgagMgbgKQgbgJgcgIIgdgGIgfgFIg5gEIg1gBIgqACg");
	this.shape_9.setTransform(13.1,-15.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CBD4C5").s().p("AgGAYIAGgyIAAAAQgBAbAIAag");
	this.shape_10.setTransform(-6.7,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.5,-32.5,187.7,71.4);


(lib.XTBSP003FR = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(3,1,1).p("AhhlGQgIADgEACQgBABgCABQgFADAAADQAAATCaANQCdANDeAAQDeAACdgNQCdgNAAgTQAAgEgIgEQgCAAgBgBQgBAAAAAAAQSlfQAQASgEAeQAAAAAAABQAAAQgBAWQgCAQgCAVQgFAmgKAyQgSAFgRADQgBAQgBAOQAAAGAAAGQgECHhCB4QgJAQgJAPQgdAvgnAmQg0AyhBAkQgpAXgtAOQgfAJgfAGQgaAFgbACQgOABgNAAQglAAglgEIgCAAQgTgDgUgDIhKgQQgLgDgKgEQhXgdhOg0QiChbhGicQgBgEgBgEQgXg/gLhBAh1hRQgCgRgCgSAi0iCQgHAAglgEQgCAAgBgBQgLAAgNgCIgFAAQAAAAAAAAQiagOiTAGQhUADhRAKQiHARiBAhQgFABgFACQgQgigLgbQgHgNgFgMQgGgOgEgOQghh1Bbh1QAjAJAtALQAuALAzAJQANACANACIBWAKQBGAGBHAEQCEAHCFgCIAxgCAisiCQAoAFAOACQAGABAFABQABABACAAQAWAEAWADQIhBbHbhjQAGgCAHgCQAMgDAOgDAh1hRQABAGABAGAjploQgDAAgCAAAjploIABAAIAAAAQABgBACgBAjziIQgEgBgEAAAi4iDQAGABAGAAAiqiBQgCAAgIgBAvahSQgXgfgOgb");
	this.shape.setTransform(14,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E0A7CA").s().p("Ak7i+IAxADQBFABBHgDQA/gCA/gIQBLgLBMgNQAogIAogJIBYgSQgECJhCB4IgSAdQgdAvgnAmQg0AyhBAkQgpAXgrAOQgfAJgfAGQgaAFgbACIgbABQidiaAWkng");
	this.shape_1.setTransform(81.8,27.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CF7CAE").s().p("AgPEUIgBAAIgngGIhKgQIgWgHQhXgdhOg0QiEhbhFiaIgDgIQgXhBgKhBIgCgMIgEgjIANAGIADgKIAtAHQIgBbHbhjIANgEIAagGIgCAeIAAAMIhYASQgnAJgoAIQhMANhMALQhAAIhAACQhHADhCgBIgxgDQgWEnCaCaIgGAAQgiAAgggEg");
	this.shape_2.setTransform(57.8,25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DAD9D8").s().p("Ak4AyIgagDIgBgBIAAABIgbgDIgGgBIgIgBQiTgViMABQiGAAiAAUQghhIAnhTIAcABIBXAFQBGAGBHAEQCFAGCEgBIAxAIIArAOIgngOIAHABIACgKIgDgBIAAAAIABAAIAAgBIADgBIAAAAQABAAgCAIQgBAHAxAJQAyAJAjADIgMAFIgDABQgFADAAAEQAAASCcANQCbANDeAAQDeAACdgNQCdgNAAgSQAAgEgIgEIgDgBIgBAAIBmgdQAQASgEAdIAAACIgBAkIgEAlQk0BNlJAAQksAAk6hAg");
	this.shape_3.setTransform(25,-16.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBCB9").s().p("AhxCuIgBgIIACANIgBgFgAg5CHIgsgIIgDgBIgLgCIg2gGIgMgCIAFABIAaABIgIgBIgqgDIgVgBIgDAAIAHgBIgIAAIAAgBIgPgCIAAACIgIgBIgFAAIAAAAQiagOiTAGQhUAEhRAJQiHARiBAhQgXgfgOgbIgMgZQgGgOgEgOQghhzBbh1IBQAUQAuALAzAJIAaAEIgBAGIgcgCQgnBTAhBIQCAgTCGgBQCMAACTAUIAIACIAGAAIAbAEIABABIAAgBIAaADQKXCGJMiUQgFAmgKAyIgjAJIgaAFIgNAEQj5A0kMAAQj0AAkDgrgAixB1IgEgBIAMACIACAAIgBAAIgJgBgAi1B0IAAAAgAjqBxIAKAAIADAAIgNAAgAjgBxIAAAAg");
	this.shape_4.setTransform(13.7,-14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBD4C5").s().p("AnKBbQAOAbAXAfIgKACQgQghgLgbgAG7BzIg8gOIAKABIgBgBIA1AHIALACIADAAIgDAKgAjbiRIAAgFIBWAKg");
	this.shape_5.setTransform(-42.4,-12.9);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.5,-32.5,211.1,85.7);


(lib.XTBSP002 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(3,1,1).p("Ah1k5QAAATCaANQCdANDeAAQDeAACdgNQCdgNAAgTAOtlCQgfgNhzgJQidgNjeAAQjeAAidANQh3AKgbANAh1k5QAAgDAFgDQACgBABgBAh5h0QACASACARQABAGABAGQALBBAXA/QABAEABAEQBGCcCCBbQBOA0BXAdQAKAEALADIBKAQQAUADATADIACAAQAlAEAlAAAPlhZQAAgGAAgGQABgOABgQQgOADgMADQgHACgGACQnbBjohhbQgWgDgWgEAisiCQAoAFAOACQAGABAFABQABABACAAAjklqQAOgGAcgFQADgBACAAQAugIBUgHQC7gQEKAAQEKAAC8AQQBVAHA4AKQBBANgIA4QAAAAAAABQAAAQgBAWQgCAQgCAVQgFAmgKAyQgSAFgRADAOtlCQABABACAAQAIAEAAAEAPlhZQgECHhCB4QgJAQgJAPQgdAvgnAmQg0AyhBAkQgpAXgtAOQgfAJgfAGQgaAFgbACQgOABgNAAAsQl/QgNgCgNgCQgzgJgugLQgtgLgjgJQhbB1AhB1QAEAOAGAOQAFAMAHANQAOAbAXAfQCBghCHgRQBRgKBUgDQCTgGCaAOQAAAAAAAAIAFAAQAEAAAEABAjjiHQABABACAAQAlAEAHAAAi4iDQAGABAGAAAq6l1QBGAGBHAEQCEAHCFgCIAxgCAq6l1IhWgKAjploIABAAIAAAAQABgBACgBAjploQgDAAgCAAAjjiHQgLAAgNgCAiqiBQgCAAgIgBAvahSQgFABgFACQgQgigLgb");
	this.shape.setTransform(14,10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CF7CAE").s().p("AgPEUIgBAAIgngGIhKgQIgWgHQhXgdhOg0QiEhbhFiaIgDgIQgXhBgKhBIgCgMIgEgjIANAGIADgKIAtAHQIgBbHbhjIANgEIAagGIgCAeIAAAMIhYASQgnAJgoAIQhMANhMALQhAAIhAACQhHADhCgBIgxgDQgWEnCaCaIgGAAQgiAAgggEg");
	this.shape_1.setTransform(57.8,25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DC9AC2").s().p("Ak7i+IAxADQBFABBHgDQA/gCA/gIQBLgLBMgNQAogIAogJIBYgSQgECJhCB4IgSAdQgdAvgnAmQg0AyhBAkQgpAXgrAOQgfAJgfAGQgaAFgbACIgbABQidiaAWkng");
	this.shape_2.setTransform(81.8,27.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A59DA6").s().p("Al6AfQicgNAAgSIAIgGQAbgOB5gKQCegNDcAAQDdAACdANQBzAJAfANIALAIQAAASidANQidANjdAAQjcAAiegNg");
	this.shape_3.setTransform(55.7,-21.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DAD9D8").s().p("Ak4A/IgagDIgBgBIAAABIgbgDIgGgBIgIgBQiTgViMAAQiGABiAAUQghhIAnhUIAcACIBXAFQBGAGBHADQCFAHCEgCIA8AJIACgJIgDgBIAAAAIABAAIAAgBIADgBIAAAAIABAAQAOgGAcgGIAFgBQAugIBUgHQC7gPEKAAQEKAAC8APQBVAHA4ALQBBAMgIA4IAAACIgBAjIgEAmQk0BNlJAAQksAAk6hAgAhHhCQh5AKgbAOIgDABQgFADAAAEQAAASCcANQCbALDeAAQDeAACdgLQCdgNAAgSQAAgEgIgEIgDgBQgfgNhzgKQidgNjeAAQjeAAibANg");
	this.shape_4.setTransform(25,-17.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BDBCB9").s().p("AhxCuIgBgIIACANIgBgFgAg5CHIgsgIIgDgBIgLgCIg2gGIgMgCIAFABIAaABIgIgBIgqgDIgVgBIgDAAIAHgBIgIAAIAAgBIgPgCIAAACIgIgBIgFAAIAAAAQiagOiTAGQhUAEhRAJQiHARiBAhQgXgfgOgbIgMgZQgGgOgEgOQghhzBbh1IBQAUQAuALAzAJIAaAEIgBAGIgcgCQgnBTAhBIQCAgTCGgBQCMAACTAUIAIACIAGAAIAbAEIABABIAAgBIAaADQKXCGJMiUQgFAmgKAyIgjAJIgaAFIgNAEQj5A0kMAAQj0AAkDgrgAixB1IgEgBIAMACIACAAIgBAAIgJgBgAjqBxIAKAAIADAAIgNAAg");
	this.shape_5.setTransform(13.7,-14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBD4C5").s().p("AnKBbQAOAbAXAfIgKACQgQghgLgbgAG7BzIg8gOIAKABIgBgBIA1AHIALACIADAAIgDAKgAjbiRIAAgFIBWAKg");
	this.shape_6.setTransform(-42.4,-12.9);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-91.5,-32.5,211.1,85.7);


(lib.XBLINKY = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6BADBD").ss(3,1,1).p("AAAg6QAYAAARARQASASAAAXQAAAYgSARQgRASgYAAQgXAAgSgSQgRgRAAgYQAAgXARgSQASgRAXAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#8DE0C7","#78EDD5"],[0.008,0.988],-5.8,0,5.9,0).s().p("AgpApQgRgRAAgYQAAgXARgSQASgRAXAAQAYAAARARQASASAAAXQAAAYgSARQgRASgYAAQgXAAgSgSg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.9,-5.8,11.9,11.9);


(lib.xufodoodle = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.149)").s().p("AmiISQgWgMgVgOIgGgEIgLgHQg3gogsgzQgUgYgSgaQghgvgZg4IgFgMIgTgHQhcgogJgyIgBkSIAAgCIAAgDQAAgSAOgRIAFgGIACgDQAQgRAcgRQBCgiAegMIAKgFIADgGQAegsAggnQAZgeAcgcQAgggAjgeIAjgbIAAAAQCXh4CygUQg4Aig1AqQjTCjA8D6QASBJA6A2IhPAAIgoAKQgTAIgGAKQgIAOACBLQACBMAUBqIAGAeIgEAIIAFgBIAAABIgEAAIAFABIAAAAIABAAICAAMQAZACAAABIAiAEQBJAHBKAFIAsACQBVACBXgBQA2gCA1gEIA3gGQA1gGA1gJIAXgEIASgEIAFgBQBwgXBBgVQBGgWBHgnIhTCIQgbAKhaAWIh2AdIgLACIgGACIgzALIgEABQgoAGgoAFIg3AGQg1AEg2ACQhXABhVgCIgsgCQhKgFhJgHIgXgCQAtCzDQAoIAaAEQj6gJjlhqgAlfE0IAIABIgdAAIAVgBg");
	this.shape.setTransform(-3.4,0.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#6BADBD").ss(2,1,1).p("AG/ibQgOg9gag6QgSgpgagrQgDgEgCgEQgXAIgXAGQltBxlsh6QgJATgIAUQggBMgWBeAFmluQBdgtBIg8AGlDNQgBAAABAAQgOCniDBoQgKAIgKAIAlZnrQgpBAgfBCAoKDFQAHBkA6Cb");
	this.shape_1.setTransform(4.8,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6BADBD").ss(3.5,1,1).p("AG/oiQAhAYAgAYQAdAXAbAZQApAkAiArQAJALAKAMALnCHQggBehFBHQgzA1g4AqQgkAagmAWQAAAAgBAAQgkAVgoASQgoARgrAOQg5ASg9AKQkEAukDhVQgngNgkgQQgygXgrgdQiLhghIinAqZlbIADgGQAegsAhgnQA2hBBCg3ALojcQgkhDgug9AqZlbIhOCL");
	this.shape_2.setTransform(0.2,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#9CA584").ss(3.5,1,1).p("ABCngQAWAEAWAGQC5AvCaBoAKfh+QBFALAkASQAcAOAOAUQABABABABQALASAAAXQAAADAAADIAEAAIgHDxQADAKAAALQAAAHgBAHIAAABQgIAzhDAqQgFADgFAEArJGCQhugrgKg2QgBgGAAgFQAAgFACgGIgCj/IAAgBQAAgCAAgBQAAgTATgUQABgCABgBQAQgRAcgSQBCgiAegMAnelIQAtglAygfQDSiCDvAuAm5BeQBoASBrAJQAmAEAmAEQBkAIBlgBQArAAAsAAQAogCApgCQAogEApgDQBkgMBjgWQAFgBAFgBQA9gOA6gSQAygQAugWQANgHANgGAL+BPQgzAjhbAdQg5ASg7ANQgWAFgWAEQgYAFgYAFQg8ALg8AHQgoAEgoAEQgpACgpABQhYAChVgCQgxgDgxgDQgvgEgugEQhmgLhkgPQgNgCgOgCQgVgEgVgDQgvgJgugMQgQgEgPgEQAAAAgBAAQgagHgZgHQiZgxgEhEAG6HKQALgCALgDQACAAACAAQBPgPBNgZQBJgXAwgbAL+BPQA9grAEgyAM7EGIABgjAhTHpQAWACAWABQBVACBYgCQA1gBA2gEQAbgDAcgDQBJgJBJgOArlARQBQAgBTATQAgAHAgAGQAkAHAlAGAkpjyQBEAZBDAPQE+BEEli5AnelIQBbA0BaAiAnLHAQAOACANACQBkAPBmALQBJAHBKAEAnaG9QgKgBgJgCQhDgMhCgSQgagHgZgHQgUgGgQgGAnLHAQgIgBgHgCAtBEhIABgW");
	this.shape_3.setTransform(0,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D5DFCA").s().p("AhbBpQhZgihbg0QAtgjAxgfQDRiCDwAuQhAAggsApQhOBGgrCFQhCgPhEgZg");
	this.shape_4.setTransform(-20.5,-49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBD4C5").s().p("AmMDwQhmgKhlgQIgagDIgqkTIAqAHIAaADQBlAQBmAKIBdAJIA1EPQhJgFhJgHgAAxgRIBQgIQA8gGA8gMIAaEIQhJAOhJAIIg3AHgAJXicQA9gsAEgzIAEAAIgHDzIgBAgIADABQgIA0hDAqg");
	this.shape_5.setTransform(16.7,9.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCE6D5").s().p("AglDvIgsgCIg1kQIBhAGQBVACBYgBIBTgEIAYEKQg1AEg2ACIhLABIhigCgAGjg6IAvgJIAsgJQA7gNA6gTQBbgcAzgjIgMETIgKAGQgwAbhIAXQhOAZhOAQIgFAAIgVAEgAnXDBIgTgDQhDgMhCgTIg0gNIgkgNQhtgqgKg3IABgVIgCj9IAAgCQADBFCZAxIA0ANIABABIAfAIQAuALAvAJIAqEUIgPgDgAM9AJIAEABIAAAAg");
	this.shape_6.setTransform(-0.2,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8CDEC6").s().p("AlQH2QgngNgkgQQg6ibgHhkIAQADIAaADQBlAQBmAKQBJAHBJAFIAsACQBVACBYgBQA1gCA2gEIA3gGQBJgJBJgOIAWgEIAEAAIAAAAQgOCniDBoIgUAQQg5ASg9AKQhcAQhbAAQioAAiog3gAoEiQIg/gOQhUgShQggIBOiLIADgGQAegsAhgnQA2hBBCg3QBbA0BZAiQgpBAgfBCIgRAnQggBMgWBeIhKgNgAHFj9QgTgpgagrIgFgIQBegtBHg8QApAkAiArIATAXQAuA9AkBDIgaANQguAWgyAQQg6ATg9ANIgKADQgOg9gag6g");
	this.shape_7.setTransform(0.2,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#94F3DC").s().p("AEzICQCEhoAOinIAAAAQBOgPBOgZQBIgYAwgbQggBehFBHQgzA1g4AqQgjAagnAWIAAAAQglAWgoARQgoASgrANIAUgQgAoFG2QiMhghIimIAkAMIA0AOQBCASBDAMIATADQAGBkA7CcQgzgXgqgegAiphQIhMgHQhrgKhogRQAXhdAfhNIARgnIALADQC4A9C5AAIAAAAIAAAAQCmAACpgyIAJgDIAFgCIAugNIAEAHQAaArATAqQAaA5AOA9QhjAVhkANIhRAHIhRADIhXABIgMAAQheAAhegIgAgFkDQi5AAi4g9IgLgDQAfhCApg/QBEAZBEAOQE+BFEki5IBBAxQAdAWAcAZQhIA8hdAuIguANIgFACIgJADQipAyimAAIAAAAIAAAAg");
	this.shape_8.setTransform(1.6,6.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E6F3E4").s().p("AglFfIhigGIhdgIQhmgLhkgPIgbgEIgqgHQgvgJgugMIgfgIIgBAAIgzgOQiZgxgEhEIAAgDQAAgVATgUIACgDQAQgRAcgSQBCgiAegMIAKgEIhOCKQBQAgBTATIBAANIBJANQBoASBrAJIBMAIQBkAIBkgBIBXAAIBRgEIBRgHQBlgMBigWIAKgCQA9gOA7gSQAxgQAugWIAagNQgkhEgug8IAIgGQBFALAkASQAcAOANAUIACACQAMASAAAXIAAAGQgEA0g9ArQgzAjhbAdQg6ASg6ANIgsAJIgwAKQg8ALg9AHIhPAIIhTADIhLABIhhgBgAighJQAriFBOhIQAqgpBBggIArAKQC6AvCaBoQjWCHjkAAQhSAAhXgSg");
	this.shape_9.setTransform(-0.1,-27.3);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,-64.1,167.1,129.1);


(lib.xpot2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D5A70").ss(3.5,1,1).p("AVe1tQxkBexrg+QixgJixgOQi0gNi0gSQhCgGhDgHQhIAxBIBKQBLALBLAKQCTAUCTAQQCwATCwAPQSTBeSLiKQAAgBAAAAA4byKQB5ARB5APQCwAVCxAPQSFBnR+iKAV+znQgCABgCAAA5WyTQAdAFAeAEA5WyTQAVhZh/gpAznTrQgbgLgagNQgqgWgVgkQhQh+g5hoQgCgCgBgDQgKgSgJgSQgbgzgag1QgKgVgKgVQgFgLgFgLQjHnAgFnTQgBhkAHhlQAJhuAShwQAhjBBAjFQAHgWAIgWQAXhEAbhFAznTrQABAAABABQBYAlBfAWQA0AMA3AMQACAAADAAQC3AlDYAVQDHATDjAFQBOABBQAAAV+znQACAAACAAQCugVCugaQAwg9gwg+QiJAOiJANQg3AFg3AEAU/xpQAAAAABgBQABAAACAAQCZgSCYgXQAGhABkhDAU/xpQgDAAgBAAAZ0yTQASBGARBFQA5DmAgDUQAhDYAHDFQAVIcisGNQgKAVgJAVQgtBgg1BbQhBBthRBjQgMAPgRAKQhHAuhRAXQh4Akh7AXQhIAOhLAKQlfA0nHAA");
	this.shape.setTransform(286.8,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A7ADC7").s().p("AhFPaQhjgUgxgMQgyifgniXQhWlFgokfQBeARCYATICIAQQAZAFCEAcQgsGVAfHsQg7gHhogVgAB0iHIkughIkQgcIgFhLQgGhoABhiQACknBBj1QA+AIBRAFQCUAJDbABQEdAaBLgYQjHErhhGiQgQBEgNBHIgcgDg");
	this.shape_1.setTransform(214.9,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888EA3").s().p("AAAWQQjjgFjHgTQjYgUi3glIgEgBQg3gLg0gNQhfgVhYglIgDgCQiCiqhgi2QgrhTgkhWQi2mrgDnoQAAhMAEhNIDYBcIA9hnIgCglQgMk3BJitIjDhOQAQhuAVhwQB6ARB5APQCwAVCwAQQSGBnR9iKIAEAAIACAFIAXBcQA4DmAgDUQAhDYAHDEQAVIcisGOIgTApQgsBhg2BbQhBBthRBiQgMAPgQALQhHAthRAYQh4Akh8AWQhIAPhKAKQjfAhkIAMIAAAHQhRAAhNgCgAt8LhQAoCYAyCfQAxAMBjAUQBqAVA7AGQggnsAtmUQiGgdgZgEIiIgQQiYgThfgRQApEfBVFEgAwdl7QgBBiAGBnIAFBMIEQAcIEwAhIAcADQANhIAQhEQBhmhDHkrQhLAYkdgbQjdgBiUgJQhRgFg+gHQhBD1gCEngAsfy7QivgOiwgTQiUgRiTgTIiVgVQhJhKBJgyICFAOQC0ARCzAOQCyANCxAKQRqA9RkhdQArBCgPBDIAAABQq0BSq3AAQnYAAnbgmg");
	this.shape_2.setTransform(273.4,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6F788F").s().p("AAZWLQEIgMDeghQBLgKBIgOQB7gXB4gkQBRgXBHguQARgKAMgPQBRhjBBhtQA1hbAthgIATgqQCsmNgVocQgHjFghjYQggjUg5jmIgXhbIADgHQCZgSCYgXIAjCLQA5DmAgDUQAhDYAHDFQAVIcisGNIgTAqQgtBgg1BbQhBBthRBjQgMAPgRAKQhHAuhRAXQh4Akh7AXQhIAOhLAKQlfA0nHAAgA0cTTQgqgWgVgkQhQh+g5hoIgDgFIgTgkQgbgzgag1IgUgqIgKgWQjHnAgFnTQgBhkAHhlQAJhuAShwQAhjBBAjFIAPgsQAXhEAbhFIA7AJQgVBwgRBtIDDBPQhICsAME4IABAkIg9BnIjYhcQgDBOAABMQADHoC1GrQAlBVArBTQBgC3CCCqQgbgLgagNgAV6znQAPhDgrhDIBugJQCJgNCJgOQAwA+gwA9QiuAaiuAVIgEAAg");
	this.shape_3.setTransform(286.8,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#48A18E").s().p("AjPBUIBCh6IAEAAQCsgVCugaQhkBDgHA+QiWAXiYASIgEAAIAAABg");
	this.shape_4.setTransform(441.7,-120.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6CBDAC").s().p("AsnBRQixgQiwgVQh5gPh5gRIg7gIQAVhXh/gpICWAVQCTATCTARQCwATCwAOQSTBcSLiIIAEAAIhCB6IgBACQqSBPqWAAQnrAAnwgsg");
	this.shape_5.setTransform(270.7,-116.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9EA6BE").s().p("AggA/IAEgBIAAABgAAdg+IAEABIgEAAIAAgBg");
	this.shape_6.setTransform(424.1,-117.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CF7A27").s().p("AAAAAIAAgBIAAAAIAEAAIgDAEIgBgDgAgCgCIACABIgDABgAAAgBg");
	this.shape_7.setTransform(421.1,-111.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(104.9,-141.2,363.8,285.4);


(lib.xpanhandle = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#262626").ss(3.3,1,1).p("AAPC1QAIgTAHgTQARgyACguQABgagDgWQgLhRg5hFQgJgKgKgKQgBgBAAAAQgDgEgEgE");
	this.shape.setTransform(-18.5,6.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2B6680").ss(3.3,1,1).p("AF0hLQAHAEAGAHQARASAAAYQAAACAAABQgBAUgNAPQgDAEgDADQgHAGgIAEQADABACACQALAFAOAAQAOABALgFQALgEAJgIQADgDADgEQANgPABgUQAAgBAAgCQAAgYgRgSQgRgTgagBQgRAAgNAHgAJUiHQAAgBAAgBQgLgVgPgSQgXgZgcgPQgpgWgmgIQglgIgsgDQgsgCg7ACQg8ACgqABQiTAGiNAcQj4AxjrByQA7BCALBRAFiAWQgDgEgDgDQgMgPABgVQABgaATgSQAHgGAIgEAJUiHQARAhAEApQAHBJgqA+QgtA/hIAXQgIADgIACQg3ASg3AOIgaAHQgqAJgpAHQl+BFmdg1AFvAhQgHgFgGgG");
	this.shape_1.setTransform(41.1,-3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#262626").ss(3.3,1,1).p("AGqB4QgGATgIATQgugGgugEQi8gQi8ARQipAOiqApIgykQQDiADDggsQBngUBogeQAagHAbgJQASgGATgGQAWgHAWgJQAEAEADAEQABAAABABQAKAKAJAKAFbATQgBgLAAgJQgCgUgEgSQgPhAgug4QgHgIgHgIAGqB4QARgyADguQABgYgDgYAFbATQAAAPgCAPQgFAwgUAz");
	this.shape_2.setTransform(-58.1,8.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3EA0B9").s().p("AgQA+QgOgBgLgFIgFgCQAIgEAHgHIAGgGQANgQABgVIAAgBQAAgYgRgSQgGgHgIgEQAOgHARAAQAYABARATQARASAAAXIAAACQgBAVgNAQIgGAGQgJAJgLAEQgIAEgMAAIgDAAg");
	this.shape_3.setTransform(82.6,-5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4DACC4").s().p("ApPCuQARgyADguQABgagDgYQA3AHB0AKQBzALCxgOQCugNDag2IAEgBIAAAAIAqgMQAGAHAHAEIAFADQALAFAOAAQAOABALgFQALgEAJgIIAGgHQANgPABgWIAAgDQBcgvAqhEQARAhAEApQAHBLgqA8QgtA/hIAXIgQAFQg3ASg3AOIgaAHIhTAQQjXAojjAAQitAAi0gYg");
	this.shape_4.setTransform(43.7,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7EC5D6").s().p("AltC1Qh0gLg3gHQgLhQg7hFQDrhvD4gxQCNgcCTgHIBlgDQA8gCAsADQAsADAlAIQAlAIAqAWQAcAPAXAZQAPARAKAWIABACQgqBChcAvQAAgYgRgSQgRgRgagBQgRAAgOAHQgHACgHAGQgTARgBAaQgBAWAMAQIAGAHIgqAMIAAAAIgEABQjaA4iuAOQhkAHhPAAQg/AAgygEg");
	this.shape_5.setTransform(40,-10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AmLhzQDjADDfgsIgtC5QC+gXDDgEQgEAwgVAzQi7gQi9ARQioAOirApg");
	this.shape_6.setTransform(-63.2,13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7B7B7B").s().p("Ag9A7QAUgzAFguIABgeIBhAFQgCAvgRAvQgHAUgIASQgrgGgugEg");
	this.shape_7.setTransform(-19.8,17.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#959595").s().p("AgHBtIgBgXQgCgTgEgSQgPg/gug3IgOgQIAlgMIAsgPIAHAHIABABQAJAJAJALQA7BFALBPQADAYgBAZg");
	this.shape_8.setTransform(-22.5,-0.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#484848").s().p("AiTg7QBngUBmgeIA1gQIAOAQQAuA4APA+QAEASACAUIABAWIgCAeQjCAEi9AXg");
	this.shape_9.setTransform(-42.7,3.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-102.8,-29,205.8,58);


(lib.xpanfr2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3.3,1,1).p("EgjpgEuIABABQAWA1CbAoQCmAsFBAeQDOATDpAJQFhAOGggHQBEgCBFgBQB7gECAgFQDRgIDFgMQB4gIB0gIQGTgfFWgxQB4gQBwgTQDMgjCQgkQEZhGAwhIIAKglQgBgBABgBQgCgKgGgJEAgdgIMQAEAHAAAHQgBACAAACQAAABgBACQgBAFgFAGQgsA7kyA7Qh0AWibAWQgrAGgtAGQlSAtmXAeQh0AIh4AIQjIALjXAJQh8AFh2AEQhGAChEABQmjAJldgLQilgFiWgJQl6gZiPgsQhBgUgRgXEgjrgE6QAAAGACAGEAjugIAQABADAAADQAAABAAABQAAACgBACQgCAMgIANIieJZQgqB5hjAgQklBJkmAvQiXAYiYARQjdAbjdASQh2AKh2AHQhTAFhTADQj1ALj2AHQhFABhFACQhUABhUACQkuAEkqgUQhYgGhXgHQlAgek+g1QhkgegpiEIiyo+");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#484848").s().p("AyBGmQhMgFhLgHQk6gak5gwQhjgbgnh5IiYnHQBPBaIzAuQC/AQDXAIQFjAMGkgIICKgDIBYgCICfgFQDWgJDJgMIDtgQQGYggFXgvQBfgNBagOQFrg8Cng8QBSgdAjgeIiEHpQgpBuhgAdQkQBBkQArQilAZimASQjSAZjRARIjuAQIiwAJQj0ALjyAHIiKADIihADIiNABQjtAAjrgOg");
	this.shape_1.setTransform(-0.8,4.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#555555").s().p("Ax9HpIivgNQk/gek+g2QhlgegoiEIiyo+IAFANIAAAAQAWA1CbApQCnAsFAAdQDPATDpAKQFhAOGfgIICKgDID6gIQDRgIDFgMIDsgRQGTgfFWgwQB4gRBwgTQDMgjCQgjQEZhGAwhIIieJZQgqB4hjAgQklBKkmAvQiXAXiYASQjdAajdATQh2AJh2AHQhTAFhTAEQj3ALj0AGIiJADIioADIhnABQj6AAj4gQgEggZADOQAnB5BjAbQE5AwE6AaQBLAGBMAFQExATE0gGIChgDICKgDQD0gHDygKICwgJIDugRQDRgRDSgYQCmgSClgaQEQgrEQhBQBggdAphtICEnqQgjAehSAeQinA8lrA7QhaAPhfANQlXAvmYAfIjtAQQjJAMjWAJIifAFIhYADIiKADQmkAIljgNQjXgIi/gPQozgvhPhag");
	this.shape_2.setTransform(-0.4,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B7B7B").s().p("AyaDRQjogKjPgTQlBgdimgsQibgpgWg1IgBAAIgCgNIC6gHQAQAWBBAUQCPAsF6AYQCWAKCmAFQFdALGigJICKgEIDygIQDWgJDJgMIDsgQQGXgeFSgrIBYgMQCbgWB0gWQEyg6Asg8QAEgFACgGIABgCIAAgEQABgHgEgHIDIgKQAHAJABAKIABADIgKAlQgwBIkZBGQiQAhjMAjQhxATh3ARQlWAwmTAfIjsARQjFAMjRAIIj6AIIiKADQiRADiJAAQkBAAjmgJg");
	this.shape_3.setTransform(0.1,-31.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-228.6,-53.4,457.4,107);


(lib.xpanbk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(3.3,1,1).p("A/lChQhMgbgIgdQgBgDAAgDQAAgCAAgCQAKhXJLg/QCWgRCogMQACAAABAAQAjgCAigDQAjgDAkgCQAkgDAlgCQAjgDAkgCQAkgCAkgBQAjgDAkgBQAkgDAkAAQAjgCAkgCQAlgBAkgCQAkAAAkgBQAagBAbgBQAKAAAKAAQAkgBAkAAQAXgBAXAAQANgBANAAQAkgBAkAAQAkAAAkAAQAkAAAkgBQArgBAqACQAkAAAkAAQAkAAAlACQAlAAAjABQAlAAAkABQAUAAAUAAQAQABARABQAjAAAlABQAlAAAkABQAdABAdAAQAIAAAIABQAjABAlABQAlABAkABQAlABAkACQAlACAlABQAkABAlACQAkACAkACQAkABAlACQByAGBsAJQA1AEAzAFQJwA+gFBZQgBADgBAEQgCAGgEAFQguA6k0AvEgjsACBQgCgHAAgHQgBgKAEgKQAshtJbhVQDSgeDugUQFhgfGfgLQBEgDBGgBQB/gDCFgBQDMgBDBADQB5ACBzAEQGVALFXAgQCEANB7AQQKNBRAUB2QgBABABAC");
	this.shape.setTransform(0.2,-41.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#262626").ss(3.3,1,1).p("Aa6llQh2ASibARQgsAEgtAFQlTAgmYAQQh0AEh5ADQjIAFjWABQh8AAh3AAQhGgBhEgBQmigGldgXQilgLiWgPQl5gmiNgxEAjlgG1QgzBGkaA8QiRAejOAcQhxAPh4AMQlXAkmUARQh0AEh5AEQjFAFjRAAQiAABh7gBQhGgBhEgBQmfgIlggaQjpgSjNgaQlAgpilgyQiYgugVg2IAAgBEgjwgG8ICeJHQAkCGBjAiQE8BBE+ApQBXAKBYAJQEpAeEuAHQBUACBUABQBFABBFABQD2ACD1gCQBTAABTgCQB2gDB3gFQDdgLDfgSQCYgMCXgSQEoglEog/QBjgcAvh4ICzpSEAjxgHaQAAADAAAFQAAACgBACQgCAMgJANEAjxgHaIgMAl");
	this.shape_1.setTransform(0,14.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#404040").s().p("AXBB+IhpgNQhqgMhzgKIhIgFIhIgGIhJgFIhKgGQgkgDgkgBIhKgFIhHgFIgQgBIg6gDIhJgEIhIgDIghgCIgogCIhIgDQgkgDgkgBIhJgDIhJgCQgqgFgrAAIhHAAIhIgCIhIgCIgagBIguAAQgkgBgkAAIgUAAIg1AAIhIgBIhJAAIhHACQglgBgjABIhHACIhIABIhIADIhIACIhHAEIhGADIgDAAQinAGiXANQlxAdiOAtQhMgagJgeIgBgGIABgEQAJhVJLhBQCXgRCngLIAEAAIBFgGIBHgFIBIgFIBHgFQAkgCAlgBIBHgEQAjgDAlAAIBHgEIBJgDIBIgBIA0gCIAUAAQAkgBAkAAIAugBIAbgBIBIAAIBIAAIBHgCQArgBAqADIBJAAIBJABIBIABIBJABIAnABIAhABIBJABIBJABIA6ACIAPAAIBIACIBKADQAkAAAkACIBLADIBIADIBJAEIBIADQBzAGBrAJIBpAKQJwA9gGBZIgBAHQgCAGgFAFQgtA6k0AvQhwgUiUgTg");
	this.shape_2.setTransform(-1,-38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#484848").s().p("AkMGEIiLgCIihgDQk0gGkxgdQhLgIhKgJQk6glk3g7Qhigfgih7IiHnMQBLBdIxBCQC+AXDXAPQFjAaGjAHICLACIBXAAICgABQDVgBDKgFIDugIQGYgQFZgjQBfgKBagLQFuguCpg2QBTgbAjgdIiVHlQgtBshhAaQkRA3kSAhQimATinANQjSAQjSAKQh4AFh2ADIiwADIjyABIj0gBg");
	this.shape_3.setTransform(-1.1,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#555555").s().p("AkTHLIiKgCIiogDQkugHkpgeQhYgJhXgKQk+gpk8hBQhjgigkiGIiepHIAGAQIAAABQAUA2CZAuQClAyFAApQDNAaDpASQFgAaGfAIICKACQB7ABCAgBQDRAADFgFIDtgIQGUgRFXgkQB4gMBxgPQDOgcCRgeQEag8AzhGIizJSQgvB4hjAcQkoA/koAlQiXASiYAMQjfASjdALQh3AFh2ADQhTAChTAAIj1ABIj2gBgEggtABlQAiB7BiAeQE2A7E6AmQBLAJBLAHQEwAeE0AFIChADICLACQD0ACDygCICwgDQB3gDB3gFQDSgJDTgRQCmgMCmgUQESghESg3QBhgZAshtICWnkQgkAdhTAaQipA2ltAvQhbALhfAJQlYAjmZARIjuAHQjJAFjWABIifAAIhYgBIiLgCQmjgHligZQjXgQi/gWQowhDhMhcg");
	this.shape_4.setTransform(-0.5,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AiDB+IiKgBQmjgGldgYQilgLiVgPQl5gmiOgvQCPgtFwgdQCXgMCngHIAEABIBFgEIBHgDIBJgCIBHgDIBJgBIBGgCQAkgBAkAAIBIgBIBJgBIBIABIA0AAIAUAAQAkAAAkACIAuAAIAaAAIBIACIBGACIBIABQAtAAAqAEIBIACIBJAEQAlABAjACIBJAEIAnACIAhACIBJADIBJADIA6AEIAPABIBIAEIBJAFQAkACAkADIBLAFIBIAFIBJAGIBIAGQByAJBrANIBoANQCUARBwAUQh1ASicAQIhYAJQlTAhmZAPQhzAFh5ADQjJAEjYABIh4ABIh4gBg");
	this.shape_5.setTransform(-14.8,-23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7B7B7B").s().p("AkaEsIiKgCQmfgIlhgaQjogSjOgaQk/gpilgyQiZgugUg2IgBgBQgCgHAAgHQgBgKAEgIQAshvJbhVQDSgdDugVQFhgfGfgLICKgEQB/gCCFgBQDMgCDBADQB5ACBzAEQGVALFXAhQCEAMB7AQQKNBRAUB4IAAADIgLAjQgzBHkbA7QiRAejOAcQhwAPh4AMQlYAkmUARIjsAIQjGAFjRAAIhUABIimgBgA3licQpLBBgKBXIAAAEIABAEQAIAeBMAaQCOAxF5AmQCVAPClALQFdAXGjAGICKACIDyAAQDWgBDJgFQB5gDBzgEQGZgQFTggIBYgJQCcgRB1gSQE0gvAug4QAEgFACgGIACgHQAFhbpwg9IhogKQhsgJhygGIhJgDIhIgEIhJgDIhKgDQgkgCglAAIhJgDIhIgCIgQAAIg6gCIhJgBIhIgBIghgBIgogBIhJgBIhIgBIhJgBIhIAAQgqgDgrABIhIACIhIAAIhIAAIgaABIguABQgkAAgkABIgUAAIg1ACIhIABIhJADIhHAEQgkAAgkADIhHAEQgkABgkACIhHAFIhJAFIhHAFIhFAGIgDAAQioALiWARg");
	this.shape_6.setTransform(0.2,-31.5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-228.9,-61.7,457.9,123.5);


(lib.xmeasurecupfr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,97,150,0.643)").s().p("ApZQbIgEgCQjpiXitkIQjLDxidgVQingRhwkwQjYpChGstQgBgIAFgGQAEgGAIgCQELg7DfCNQggiGgWjFQgBgGADgGQADgFAGgDQAGgDAHABQEDA4G9AJQI2AMNhg9QIugoKqhHQAGAAAFACQAFADADAFQADAFAAAFQADEOjQCLQgGEUgTDuQgeFyg/EUQg0DjhKCkQhkDciNBqQhRA9hdAYQk9BmlZAAQneAAoWjEgAvpJGQAGACADAGQCsEPDrCZQOFFKLpjtIABAAQBWgWBLg5QCFhmBgjRQBIigAzjfQA+kSAeluQAUjxAFkZQAAgFACgFQADgEAEgDQC/h6AFjsQqeBFolAnQtjA+o4gNQmrgJkCgzQAaDXAmCGQABAGgCAGQgCAGgFADQgGAEgGAAQgGAAgFgEQjbihkLA1QBHMbDTI4QBmETCQAUQCTAPDEjxQAEgFAGgCIAFAAIAIABgA3fIzQihkNiOwBQgBgGADgFQACgFAFgEQAEgDAGAAQFIgKBpEHIABADIDdM5QACAGgCAGQhcD8hYA4QgfAWgeAAQhDAAg/hqgA29IeQBDBxBEgpQBOg1BUjmIjbsyQhdjkkXAAQCLPjCbEGg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(112,129,181,0.502)").s().p("AAzReIgpgBQgXABgVgDIgmgCIAAAAIgrgDIAAAAIgsgEIgCAAIgngFIABAAIgtgFIAAAAIgugIIgBAAQgUgEgWgDIgBAAIgugIIgBgBIgsgIIgBAAIgugLIgtgKIgBAAIgvgKIgBAAIgugPIACABIgigJIAAAAIgpgNIABABIgpgNIgDgBQikhQiIipQgEgEAAgHQAAgGADgGQADgFAGgCQAGgDAGABQF/BRFvAYQJFAnIehmQB4gXB2geQAIgCAHAEQAHAFACAHQACAIgDAHQgXAsgVAlIgBAAIgDAGIAAAAQgNAWgOAUIAAAAQgQAVgQASIABgBQgOARgRAOIAAAAQgUARgWALIAAAAQgVANgZALIgBAAIgnAPIAAAAIgtAQIgvAQIgBAAQgXAHgWAHIgCABIguAMIgBAAIguAMIgBAAIgvALIgBAAIgwAKIAAAAIgwAJIAAAAIgwAIIAAAAIgxAGIgwAGIgxAEIgBAAIgwAEQgZACgZAAIgBAAIgwABIgBAAIglAAIgaACIgagCgAA2Q2IABAAQAWACAXgCIACAAIAlAAIAygBIAAAAQAYAAAYgCIAwgEIAxgEIAAAAIAvgFIAAAAIAwgHIAvgIIAwgIIgBAAIAwgKIAAAAIAwgLIgBAAIAugLIAAAAIAvgNIgBAAQAXgIAYgGIABAAIAsgPIAugRIAlgOIAAAAQAXgKATgLIABgBQASgKASgOIAAAAQANgLAMgOIABgBQAOgQAOgTIARgaIAIgNIAAAAIAEgHIABgBIAVgmQhiAYhjATQoZBlpAgkIgTgCQlXgXllhHQBzCACGBBIAmAMIABAAIAnANIAAAAIAgAIIABAAIAuAOIAtAKIABAAIAtAKIAAAAIAtALIAsAIIAvAIIgBAAQAYADAVAFIAtAHIgBAAIAsAFIABAAIAmAGIgBgBIAtAEIArADIAmACIABAAQAUACAUAAIABAAIArABgAkrMCIAAAAQh1gHh1gMQkOgbkNg4QgIgCgFgGQgrg/gohKQgEgBgEgDQgGgGAAgJQAAgIAGgGQAGgGAIAAIAGAAIAEABIAAAAQIBBZHWAPQHzAOHDhGQC1gdCsgqIAUgFQAHgCAHADQAGAEADAGQADAHgCAHIgCAIIAAABQgVBSgWBDQgCAFgEAEQgEADgFABQiLAfiKAXQmrBHmoAAQiRAAiQgIgAwgJ3QEHA2EIAaQB0AMB0AHIAAAAQI0AgI3heQCEgXCEgcQARg0AQg9Ig2AMQiOAhiTAXIgBAAQm1BFnggLIgogBQnGgOnuhUQAeA1AgAvgAj6IlQnEgVn1hZQgFgBgEgDQgDgDgDgEQjyn1hvuNQgBgGADgGQADgFAGgDQAFgDAGABQDxAbEGANQKdAiMnhAQIRgpJOhTQAHgBAGADQAGAEADAHQACAGgCAHQhFDHieA+QgXFjgfEdIAAAAQgnFYg1DzQgBAFgEAEQgEAEgFACQjMA4jcAiQleA2mGAAQiEAAiKgGgAj4H9QIYAZHShJQDTghDEg1QAyjoAmlFIABgOIAAAAQAgkhAXlqQAAgGAEgFQAEgEAFgCQCKgxBBihQo8BQoEAoQsqBAqfgiIgGAAQj3gNjjgZQBtNrDpHoQD9AtDwAbIAAAAQgBAIAGAHQAFAGAIABIDfATQAIABAGgFQAGgFABgHQBdAHBaAEg");
	this.shape_1.setTransform(24.5,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.702)").s().p("ABYJRIjcgTQgIgBgGgGQgFgHABgIIAAAAQAAgIAHgFQAGgGAIABIDdATQAIABAFAHQAGAGgBAIIAAACQgBAHgGAFQgGAFgHAAIgCgBgABVGRIjfgPQgJgBgFgGQgGgGABgJQABgIAGgFQAGgGAIABIDfAQQAJAAAFAGQAGAHgBAIQgBAIgGAGQgGAFgHAAIgBgBgAEtDSIjMgQIl7gcQgIgBgFgGQgGgGABgIQABgJAGgFQAGgGAIABIEDATIFEAYQAJABAFAGQAGAHgBAIQgBAIgGAGQgGAFgHAAIgCAAgABqAVIjhgPQgIAAgFgGQgGgFAAgIQABgIAGgGQAHgFAIABIDhAOQAIABAFAGQAGAGAAAGQgBAJgGAFQgGAFgHAAIgCAAgABoiVIjhgPQgJAAgFgGQgGgHABgIQABgIAGgGQAGgFAIABIDhAOQAJABAFAGQAGAGgBAIQgBAJgGAFQgGAFgHAAIgBAAgABflJIjhgPQgJgBgFgGQgGgGABgIQABgJAGgFQAGgGAIABIDhAOQAJABAFAGQAGAHgBAIQgBAIgGAFQgGAGgHAAIgBAAgAEXn9IpGgsQgJAAgFgHQgGgGABgIQABgIAGgGQAGgFAJAAIJGAsQAIABAGAGQAFAGAAAJQgBAIgHAFQgFAFgHAAIgCAAg");
	this.shape_2.setTransform(-29.7,-8.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(147,209,236,0.502)").s().p("ApKP1QjriZirkPQgEgGgGgCQgGgDgHACQgGACgEAFQjEDxiTgPQiQgUhmkTQjTo4hHsbQELg1DbChQAFAEAGAAQAHAAAFgEQAFgDACgGQACgGgBgGQgmiGgZjXQEBAzGrAJQI4AMNjg9QImgnKehFQgGDsi/B6QgEADgDAEQgCAFAAAFQgFEZgUDxQgdFug/ESQgzDfhICgQhgDRiEBmQhLA5hXAWIgBAAQk3BjlSAAQnXAAoOjAgAEnRSQAaACAbgCIAlAAIAAAAIAwgCIABAAQAZAAAZgCIAwgDIABAAIAxgFIAwgFIAxgHIAAAAIAwgIIABAAIAvgIIAAgBIAxgKIAAAAIAvgKIABAAIAugMIABAAIAugNIACAAQAWgIAXgGIABgBIAvgPIAtgQIAAAAIAngQIABAAQAZgLAWgMIgBAAQAWgMAUgRIAAAAQARgNAOgRIgBAAQARgRAPgVIAAgBQAOgUANgVIAAgBIADgFIABgBQAVgkAXgtQADgHgCgHQgCgIgHgEQgHgEgIACQh2Aeh4AXQoeBmpFgnQlvgZl/hQQgGgBgGACQgGADgDAFQgDAFAAAHQAAAGAFAFQCHCoCkBQIADABIApANIgBAAIApANIAAAAIAiAIIgCAAIAuAOIABAAIAvAKIABABIAtAKIAuAKIABABIAtAIIABAAIAtAIIABAAQAXADATAEIABABIAuAHIAAAAIArAFIgBAAIAnAGIACAAIAsADIAAAAIArADIAAAAIAmADQAVACAZAAIApABgAukHeQgGAGABAIQgBAIAGAGQAEAEAEABQAoBJAsA/QAEAHAIABQENA4EOAcQB1ALB1AHIAAAAQI5AhI7hfQCKgYCLgeQAFgBAEgEQAEgDACgFQAWhEAVhSIAAAAIACgIQACgHgDgHQgDgHgGgDQgHgDgHABIgUAFQisAqi1AdQnDBHn1gPQnUgOoBhaIAAAAIgDAAIgHAAIAAAAQgIAAgGAGgA78rzQgFAAgFADQgFAEgCAFQgDAFABAGQCOQBChENQBcCaBjhGQBYg4Bcj8QACgGgCgGIjds5IgBgDQhlj9kzAAIgZAAgA0kv3QgGADgDAGQgDAFABAGQBvONDzH1QACAFADACQAEADAFABQH1BZHEAVQIcAZHXhJQDbgiDMg4QAFgBAEgEQAEgEABgGQA1jyAnlZIAAAAQAfkdAXljQCeg9BFjIQACgGgCgHQgDgHgGgDQgGgEgHABQpOBToRAqQsnA/qdghQkGgNjxgcIgCAAQgFAAgEACg");
	this.shape_3.setTransform(0.1,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(183,225,242,0.302)").s().p("ADDP8IgBAAIgsgBQgWAAgUgCIgBAAIglgCIgrgDIgrgEIABABIgngGIgBAAIgrgFIABAAIgugHQgVgFgYgDIABAAIgugIIgtgIIgtgLIAAAAIgtgKIgBAAIgtgKIgtgOIgBAAIghgIIAAAAIgngNIAAAAIgngMQiGhChyh/QFkBHFXAXIATACQAQAQATAQQCOBxErAAQCQAABJgJQBNgKBkghIEShgIACAAICCguIgRAaQgNATgPAQIgBABQgLAOgOALIAAAAQgSAOgSAKIAAABQgUALgWAKIgBAAIglAOIgtARIgtAPIgBAAQgYAGgXAIIACAAIgwANIABAAIgvALIABAAIgwALIABAAIgwAKIAAAAIgvAIIgwAIIgvAHIAAAAIgvAFIgBAAIgxAEIgwAEQgYACgXAAIgBAAIgyABIgkAAIgCAAIgXABIgXgBgAidKgIAAAAQh0gHh0gMQkHgbkIg1Qgfgvgfg1QHuBUHHAOIAlABIARAHQCpBJFCAAQDiAADXhLQA0gSA0gXQBJggBUguIA1gMQgQA8gQA1QiFAciEAXQmnBGmnAAQiNAAiQgIgAhsHDQhagEhdgHIABgCQAAgIgFgGQgFgHgJgBIjegTQgIgBgHAGQgGAFgBAIQjwgbj9gtQjpnphttqQDjAZD3ANQg+CvAACBQAAChBkCbQBeCRCnB0QBbA/BmAuIkDgRQgIgBgGAGQgHAEAAAHQgBAIAFAHQAGAGAIABIF9AcIA3ATQDQBCDOAAQC9gBEPhLQBCgTBDgVQDCg+DMhcQB5g2Bvg6QglFFgyDoQjFA1jSAhQlcA2mDAAQiEAAiIgGgAooDWQgHAFAAAIQgBAJAGAGQAFAGAIABIDhAPQAIABAHgGQAGgFABgIQAAgIgFgHQgGgGgIgBIjhgPIgBAAQgHAAgGAFg");
	this.shape_4.setTransform(10.5,4.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.502)").s().p("AB6D+QgKgTABgfQAAgaATgcQAagmAyAAQA4AAAZArQANAZABAYQgBAegSAcQgbAlgxAAQhBAAgVgtgAiyBuQhcglgZhRQgFgTgCgTQgEg/Asg+QA5hSBqgfIAggIQBWgSBOAfQBcAlAZBSQAFARABARQAHBCguA+Qg5BRhqAfIgaAIQgiAHghAAQg1AAgygTg");
	this.shape_5.setTransform(103.7,-54.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(211,237,248,0.102)").s().p("AmYOaQgTgQgQgRQJAAlIZhmQBkgSBigYIgWAmIgBABIgEAHIAAAAIgIANIiCAuIgCAAIkSBgQhkAhhNAKQhJAJiQAAQkpAAiQhxgAk7KlIgRgHQHgAKG2hEIAAAAQCTgYCPggQhUAuhJAgQg0AXg0ASQjXBLjiAAQlAAAiphJgApOCuIg3gTIDMAPQAIABAHgGQAGgFABgIQAAgIgFgHQgGgGgIgBIlGgYQhngwhag9Qinh0heiRQhkibAAihQAAiBA+ivIAGAAQKfAiMrhAQIDgpI8hPQhBCgiKAyQgFABgEAFQgDAFgBAGQgXFqggEhIAAAAIgBAOQhvA6h5A2QjMBajCBAQhDAVhCATQkPBLi7ABQjQAAjQhCgAtrhCQgGAGgBAIQAAAIAFAGQAGAHAIAAIDjAPQAIAAAGgFQAHgGAAgIQABgIgGgGQgFgHgJAAIjjgPIgBAAQgHAAgGAFgAtujuQgGAGAAAIQgBAIAGAGQAFAHAIAAIDjAPQAJAAAGgFQAGgGABgIQAAgIgFgGQgGgHgIAAIjjgPIgCAAQgHAAgGAFgALSlWQgTAbAAAbQAAAfAJATQAWAtBAAAQAyAAAagmQATgbAAgeQAAgZgOgYQgYgsg5AAQgxAAgbAngAIKsTIggAIQhqAgg5BRQgtA+AFA/QABATAGATQAYBTBdAlQBPAfBbgTIAcgHQBqggA5hQQAthBgGhCQgCgQgFgRQgYhThcgkQgygUg2AAQgeAAggAGgAt3miQgGAFAAAIQgBAJAGAGQAFAGAIABIDjAOQAJABAGgGQAGgFABgJQAAgIgFgGQgGgGgIgBIjjgOIgBAAQgIAAgGAFgAwjpzQgHAFAAAJQgBAIAFAGQAGAHAIAAIJJAsQAIAAAGgFQAGgFABgJQABgIgGgGQgFgHgIAAIpJgsIgCAAQgHAAgFAFg");
	this.shape_6.setTransform(44.7,-5);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-193.7,-124.6,387.6,249.4);


(lib.xmeasurecupbk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(82,97,150,0.643)").s().p("A6mCBQgHgFgBgIQgCgJAFgGQBFhlG4gzIAAAAQLkhYPSAIIA6ABQQEANBlB6QAFAGgBAIQAAAJgHAFQgGAGgIgBQgIgBgGgGQgEgFgHgFQiHhju4gMIg7gBQvOgIriBXQmNAuhOBTIgGAHQgFAHgIABIgEAAQgGAAgFgDg");
	this.shape.setTransform(0,-3.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(147,209,236,0.502)").s().p("AvUCGQmtgJkBg0QBOhRGNgwQLihXPOAJIA7ABQO4ALCHBlQqbBCojAoQrUAzoEAAQhlAAhcgCg");
	this.shape_1.setTransform(-0.1,1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-171.1,-16.5,342.4,31.3);


(lib.xknob = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D5A70").ss(3.5,1,1).p("AESBcQgHAwgYAqQjfBikGhiQgjg9AAhLQAAhxBShSQBRhRByAAQANAAANABQBiAIBIBIQBSBSAABxQAAAXgEAXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9E9FBE").s().p("AjwC2Qgjg9AAhLQAAhxBShSQBRhRBxAAIAaABIgVAYQhpCDAACPQAAAeBIAQQAvAKAyAAQBxAABdghQgIAwgXAqQhwAxh6AAQh3AAiEgxg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B9B7D0").s().p("Ah0CnQhJgPABgfQAAiOBriDIAVgZQBgAJBIBIQBRBRABBxQgBAYgDAWQhdAihuAAQgzAAgwgLg");
	this.shape_2.setTransform(8.8,-5.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.7,-23.1,55.6,46.3);


(lib.xhandle02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D5A70").ss(3,1,1).p("ACtlaQABgHACgIIgHgBIAEAQQiFFdgKGLIBngQQAHiXAUiWQAYivA7i8IhDhPAAaGPIAEACIAAgDgACplqIkIgmQg8CggkCnQglCqgOCtIEMCB");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A8AEC9").s().p("AAklsIAEAQIgBgfIBDBPQg8C7gXCwQgUCWgFCXIhnAQQAKmJCDlfg");
	this.shape_1.setTransform(13.7,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888EA3").s().p("AjPEPQAPitAkiqQAkinA8igIEIAmIAEAQQiFFdgKGLIgEABg");
	this.shape_2.setTransform(-3.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDBCB9").s().p("AgCgHIAFABIgCAOg");
	this.shape_3.setTransform(17.3,-35.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.3,-40.1,48.7,80.4);


(lib.xhandle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D5A70").ss(3.5,1,1).p("AEqikQgygHg0gDQh0gFhxAMQhIAHhJAOQguAJguANQh7AhhyA7QgUAKgTAMQiPBQhvB9QhRBbh3AdQgZAFgaABQh9AEhYhVQhahWgBh9QAAgkAHgjQAEgSAGgQQAJgbAPgYQASgfAbgbQAJgLALgIQAagUAdgOQAIgFAJgEQAZgMAbgKQCghCCngrQA2gOA3gLQCpgjCwgMQAegCAdgBQB8gECAAGQCtAJC2AeQDOAhDXA9QCzAyC7BEQB6AtB9A1IhlGyIgdB8QgXgegXgdQgtg4gwg1QgugzgygwQgMgMgNgLQglghgmgeQgTgPgTgPQhTg8hagvQg3geg6gZQiDg3iKgUgAFKjsQgLAkgVAkAFKjsQAEgPACgOQAMhHgahMAPzBdQBIiDAaiiALNhfQAEgIADgHQAjhZgQh3AKogiQAWgcAPghAPxBhQABgCABgCAPxBhQgUAkgXAhAo/ijQgHgbgJgZQglhvg9hNAo/ijQATBGAKBTAkLj/QgDgXgFgVQgShRgzhGAghnDQAVBHABBEQABAUgCAUQgEA1gRA0AkLj/QAHA+gKBF");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5D5A70").ss(3,1,1).p("AARg2QAAAZgRASQgRAQgZAAQgKAAgIgCQABAXARARQAJAJAMAFQAKAEALAAQAZAAASgSQAPgOADgTQAAgFAAgFQAAgYgSgSQgLgLgNgEQgBgBgBAAQAAACAAACgAARg6QgIgCgJAAQgYAAgSASQgSASAAAYQAAABAAAC");
	this.shape_1.setTransform(-101.8,6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#888EA3").s().p("AQSDDIgqgkIADgEQBHiFAaigQB6AtB9A1IhlGyQhjhuhphZgA0fBFIgGgLQgRgkgMgkQAIgbAPgYQASgfAbgbQAKgLALgIQAZgUAegOIARgJQAYgMAbgKQCghCCogrQA2gOA2gLQA+BNAlBvQAIAZAHAbQhaAthPBCQhAA4hgBhIgLAKQgqAfgrAQQgmANgoAAQiKAAhWikgAwuBPQgSASAAAZIAAADQACAYAQARQAKAJAMAFQAKAEAMAAQAaAAASgSQAPgPACgSIABgLQAAgZgSgSQgLgMgOgEIgBAAQgJgDgJAAQgZAAgTATgAFvijIgugLIAHgdQAMhHgbhMQDOAhDXA9QAQB3gjBZIgHAPQikhWixgsgAkbjtQgThRgzhGIA8gDQB7gECBAGQAUBHABBEQABAUgCAUQh3AAhoANIgfAEQgEgXgEgVg");
	this.shape_2.setTransform(0.9,-6.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6F788F").s().p("ATPExQgtg3gwg1Qgvg0gxgvIgZgXQAXghATgkIArAkQBoBZBjBuIgdB8Igtg8gAy+CVQhahXAAh7QgBgmAIgiQADgSAHgRQAMAnASAkIAFALQBWChCKABQAoAAAngNQAqgQAqggIALgJQBghfBAg4QBPhEBbgtQASBGALBTQiQBShvB7QhQBbh3AdQgZAFgbABIgKAAQh2AAhVhRgAvdAaQgMgFgJgIQgRgQgBgXQAIACAKAAQAZABASgTQASgRAAgaIACgDQANAEALAMQASARAAAaIAAALQgDASgPANQgSASgZAAQgNgBgKgEgAJqi0QiDg4iKgTQAVgkAKgkIAvALQCxAsCkBVQgPAhgWAdQg3geg6gZgAjYlaIAggFQBogMB1AAQgEA1gRAzQhHAIhIAOQgvAJgtAMQAKhEgHg+g");
	this.shape_3.setTransform(-5,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C46A9D").s().p("AKiCcIgmgdQhSg9hagwQAWgbAPghIAfARIAPAJQB9BFB4BhIAAABQgTAjgXAiQglghgngfgAsXhuIAYgMQAggPAjgMQBhgjB4gRQAHA+gKBEQh7AihzA5QgTAKgTALQgLhQgShHgAgSh4Qh0gFhzALQARgzAEg2IABAAIAoABQCbADCRAgQgKAlgVAjQgzgHgxgCg");
	this.shape_4.setTransform(21.6,-5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E398C2").s().p("AIrBqIgQgJIgfgRIAGgOQAjhYgPh3QCzAyC6BFQgZCghICEIgDAEQh4hhh8hHgAsggmQglhug+hOQCqgjCwgLQAyBFATBRQAFAWADAXQh3ARhiAjQgiAMghANIgYAMQgIgZgIgZgAi0heIgngBIgCAAQABgTAAgUQgBhEgVhHQCvAIC0AeQAaBMgMBHIgGAdQiSggibgDg");
	this.shape_5.setTransform(20.9,-17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6CBDAC").s().p("AAAABIABgCIgBADIAAgBg");
	this.shape_6.setTransform(101,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9293B1").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_7.setTransform(-99.9,0.3);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-135.6,-45.6,271.3,91.3);


(lib.xfptopfr = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.702)").ss(2,1,1).p("AqLAAQEQAyF7ALQGOANEbglQBIgKA2gLQA1gLAkgKAqLAAQgNAAgMgDQiWgchFgg");
	this.shape.setTransform(2,-27.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.702)").ss(3,1,1).p("ANdlCQghAJgqAIQgvAJg8AIQkbAlmMgNQmLgMkWg1QgDAAgCgBQg4gKgtgLQiVgmgXgqIA2DzIB4IVIAKA0QMNBxLsh7IAKgpIB5ncIA8jsQgXAYhFAUgAO5luIAEgSAu3mvIgFgTQAAABAAABQAAAGACAGQABACACADg");
	this.shape_1.setTransform(2.2,-15.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B807B").ss(3,1,1).p("AJoCyQAogFAmgFQEggmAAg3IhLjeQAAAzkFAiQgpAGgsAFgABUgaQghAAgjAAQh0AAhrgEQjlgHixgZQkFgiAAgzIhrDeQAAA3EgAmQDNAcENAIIAAAAQBpADByAAQAxAAAvgBgAIxgzQiQAPitAGQhNADhTABABgDOQBZAABTgEQC+gHCegRAOLiTQgBgghvgaArzjOQh1AagCAh");
	this.shape_2.setTransform(0,39.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(162,216,238,0.502)").s().p("Ar/GEIgLg1Ih3oUQBEAgCWAcIAZAFIAkFzQKwA1KXiEIBHkUIA5jXQBEgUAYgYIg8DsQgkAMg1ALQA1gLAkgMIh5HbIgKAqQmGBAmOAAQluAAl3g2gAqniJQiWgchEggIg3j0QAYArCVAlQAsALA4ALIAFABIAUDOIgZgFg");
	this.shape_3.setTransform(2.3,-14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(183,225,242,0.502)").s().p("ArHEZIgklyQERAxF9AMIAEAAQBgADBbAAIAAAAIAAAAQEHAADNgZIAIgBIAHgBIAEgBQBJgJA1gLQg1ALhJAJIgEABIgHABIgIABQjNAZkHAAIAAAAIAAAAQhbAAhggDIgEAAQl9gMkRgxIgUjPQEXA1GLAMQGLANEbglQA8gIAwgJQAqgIAhgJIg5DYIhHETQnZBfnlAAQjDAAjGgQg");
	this.shape_4.setTransform(11.6,-18.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#A5CFC1","#ACEDDF"],[0,1],-1081.4,-989.8,229.2,-989.8).s().p("AhwhnQBTgBBLgDQCtgGCQgPIA3DlQieARi+AHQhRADhZABgAmhB+IABgEIAAAEg");
	this.shape_5.setTransform(19.8,47.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8CDEC6").s().p("AAABZQh0AAhrgDQjlgIixgYQkFgjAAgwQACghB1gbIAKA1QMNBvLsh5IAKgqQBwAbABAgQAAAwkFAjIhVAKQiQAQiuAGQhNAChTABIhDAAg");
	this.shape_6.setTransform(1.6,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4FB09C").s().p("AjaCuIAAgEIgBAEQkMgIjOgcQkfgmAAg3IBrjdQgBAyEGAjQCxAYDlAHQBqAEB0AAIBDAAIANDpIhgAAQhyAAhogDgAIxhRIBVgKQEFgjAAgyIBKDdQAAA3kfAmIhPAKg");
	this.shape_7.setTransform(0,42.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-60.5,196.4,121.2);


(lib.xfptopbk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.702)").ss(3,1,1).p("AOcjHIAjiLQgWg5j+gxQkYg2mOgMQmMgMkbAlQkWAkgGA+IAFATIAZBwICVKYIAKA0QMNBxLsh7IAKgpgAu+mDQAAABAAABQAAAJAFAI");
	this.shape.setTransform(2.3,-15.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.702)").ss(2,1,1).p("Ar/gZQAbgEAegFQEpgmGgANQGQAMEeAyQAOADANACQAkAHAgAHQABAAABABQAkAIAeAIQAsAMAfANAueAIQAjgKAxgKQAdgGAhgFQAHgBAGgB");
	this.shape_1.setTransform(2.1,-41.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2B807B").ss(3,1,1).p("AJoCyQAogFAmgFQEfgnAAg2IhKjeQAAAzkFAiQgpAGgsAFgAIxgzQiQAPitAGQhNADhTABIAMDoQBZgBBTgDQC+gHCegRABUgaQghAAgjAAQh0AAhqgEQjlgIiygYQkFgiAAgzIhqDeQAAA2EfAnQDNAbENAIIAAAAQBqAEBxAAQAxAAAvgBAOLiTQgBgghvgaArzjOQh1AagCAh");
	this.shape_2.setTransform(0,46.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(132,204,234,0.502)").s().p("AsBHMIgLg0IiUqYQAigLAxgKIA/gLIg/ALQgxAKgiALIgahwIgEgTQAFg+EXgkQEbglGMAMQGOAMEYA2QD+AxAWA5IgjCLQgfgNgrgMQgegJgkgIIAAgBQgtgLg4gLQkYg2mOgMQmMgMkbAlQg1AGgrAJIA6gJQEpgnGgANQGPANEeAzIAbAGIBEAOIADAAQAkAIAeAJQArAMAfANIiaJgIgKApQmGBAmOAAQluAAl3g2gAsOkgIABAAIAKACIABgEIgMACg");
	this.shape_3.setTransform(2.4,-15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#A5CFC1","#ACEDDF"],[0,1],-1081.4,-989.8,229.2,-989.8).s().p("AhwhnQBTgBBLgDQCtgGCQgPIA3DlQieARi+AHQhRADhZABgAmhB+IABgEIAAAEg");
	this.shape_4.setTransform(19.7,53.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8CDEC6").s().p("AAABZQh0AAhrgDQjlgIixgYQkFgjAAgwQACghB1gbIAKA1QMNBvLsh5IAKgqQBwAbABAgQAAAwkFAjIhVAKQiQAQiuAGQhNAChTABIhDAAg");
	this.shape_5.setTransform(1.5,34.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4FB09C").s().p("AjbCuIAAgEIAAAEQkNgIjNgcQkfgmAAg3IBrjdQgBAyEGAjQCxAYDlAHQBqAEB0AAIBDAAIANDpIhgAAQhyAAhpgDgAIxhRIBVgKQEFgjAAgyIBKDdQABA3kgAmIhPAKg");
	this.shape_6.setTransform(0,49.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC6FA7").s().p("AgFAAIALAAIgKABg");
	this.shape_7.setTransform(-75.3,-44.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#757593").s().p("ALIAfIgbgFQkegymPgMQmggNkpAnIg6AIQArgIA1gHQEbglGMAMQGOANEYA0QA4AKAtAMIgDAAIhEgOgAsOAAIALgCIgBADIgKgBg");
	this.shape_8.setTransform(2.5,-44.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0A7CA").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_9.setTransform(80.7,-39.6);

	// Layer 2
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2B807B").ss(3,1,1).p("ANwBBQAFAEAEAEAt4BXQAAgVAsgSQA/gaCagVQAqgDArgFQCQgPCugGQBNgDBTgBQAhAAAgAAQB2AABrAEQDlAICxAVQDKAbAuAlAt4AhQAAgwEFgjQAqgFArgFQCQgQCugGQBNgDBTgBQAhAAAgAAQB2AABrAEQDlAICxAYQDhAeAgAo");
	this.shape_10.setTransform(1.3,28);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2B807B").s().p("At2gQIgEgHQAAgUArgTQBAgZCagVIBVgKQCQgQCtgFQBNgDBTgBIBDAAQB1AABqAEQDlAHCxAYQDKAbAvAkIAIAJQADAEABAFIABAFIgnBaIvKBMg");
	this.shape_11.setTransform(1.5,39.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4FB09C").s().p("AJ1AMQixgVjlgIQhqgEh1AAIhDAAQhTABhNADQitAGiQANIhVAKQiaAVg/AaIgogIIgEgHQAAgwEFgjIBVgLQCQgPCtgFQBNgDBTgCIBDAAQB1ABBqAEQDlAHCxAYQDiAeAfAnQADAFABAEIABAFIgNAfQgugkjLgbg");
	this.shape_12.setTransform(1.5,26.9);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.2,-66.8,196.6,133.8);


(lib.xfpbottom = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9DA89B").ss(2,1,1).p("Ag1kjQAwgSAwgNAA0EvQgpAKglAKQCtlWjIkQAgcFDIgZpm");
	this.shape.setTransform(25.5,55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B5B3B0").s().p("AgcEzIgZplQDIEQitFVg");
	this.shape_1.setTransform(25.5,56.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAC8C6").s().p("AhfkjQAwgSAwgNIAmA/IADAGQBkC4hXESIgDAMIADgBIgtBXIhOAUQCtlVjIkRg");
	this.shape_2.setTransform(29.7,55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6B9C5A").ss(2,1,1).p("AgDABQADgBAEAA");
	this.shape_3.setTransform(67.8,57.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DE9C42").ss(2,1,1).p("AAHiKQAIgDAKABQAGAAAGAAQAsAFAcAjQAfApgKA7QgJA6guAqQgCABgOALAA1B2QgkAXgnAAQg2ACgggnQgZgjABgrQACgMABgMQADgQAGgPQAFgKAEgJQAMgVARgSQACgCABgBQADgCADgDQAKgKAIgGQAWgQAagGQACgDAEAA");
	this.shape_4.setTransform(67.5,71.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2DBA6").s().p("AghAfIgDgIQgIgPAHgPQAEgMALgJQAXgZATAMQAHABAGAKQAVAbggAiQgQAPgMAAQgPAAgMgPg");
	this.shape_5.setTransform(72.3,65.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B7816A").s().p("AAdB8IACABIgEACIgBAAgAgeh8IAJgCQgFADgDAFg");
	this.shape_6.setTransform(70.5,70.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E1AA59").s().p("AhHBmQgZgjABgrIADgYQADgQAGgPIAJgTQAMgVARgSIADgDIAGgFQAKgKAIgGQAUgQAagGQACgDAEAAIABAGQgWAUgNAYQgGAOgGARQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAABQAAAAAAABIgCABIgCAQQgKA5AcArQAfAoBBACIgEAEIgCACQgkAXgpAAIgFAAQgxAAgeglg");
	this.shape_7.setTransform(63.8,71.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E7B976").s().p("AhIBUQgegqAKg6IACgPIACgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAGgQAHgOQAOgZAWgTQAEgFAFgDQAIgDAKABIAKAAQAsAEAcAjQAfAqgKA5QgJA7guArQgCAAgOAMQg/gDgfgogAgLhIQgLAJgEAMQgIARAIAPIAEAIQAWAcAggcQAhgkgVgbQgGgKgHgBQgGgEgHAAQgOAAgPARg");
	this.shape_8.setTransform(71.2,70);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#78A98B").ss(2,1,1).p("AjBgqIDxBfICAA1IASgqIhygyIkNh3");
	this.shape_9.setTransform(45.6,61.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#CEDECE").s().p("AhHgGQANgUATgSIBwAvIgSAqg");
	this.shape_10.setTransform(57.8,67.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#ECF1EB").s().p("AiIgPIAEg/IENB3QgTATgNAUg");
	this.shape_11.setTransform(40,58.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#9DA89B").ss(2,1,1).p("AiqkRQAxgSAxgOQBOgWBXgNQCNEEh0FeQhYAchdAXQgpAKgnAJQCtlVjIkQgAiRFVIgZpmAAgDaIgyAQIgDAAQACgFABgGQBWkShii4QgCgDgCgEIAwgNIAYgHQBcDihID2IgaAIQBIj3hajiAgSDfIAAAL");
	this.shape_12.setTransform(37,53.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B5B3B0").s().p("AiBkyQDIEQiuFVIgCAAgAA3kgIAYgHQBcDihJD1IgaAIQBJj3hajhg");
	this.shape_13.setTransform(33,56.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7D7A79").s().p("AggDqQBVkShii4IgDgHIAwgNQBaDihJD3IgxAQIAAgLIAAALIgEAAIAEgLgAggD1g");
	this.shape_14.setTransform(38.5,52.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CAC8C6").s().p("AiqkRQAxgSAxgNQBOgXBXgNQCNEFh0FeQhYAbhdAXIhQAUQCtlVjIkRgAAOj/IgwANIAEAHQBiC4hWESIgDALIADAAIAygQIAagIQBIj2hcjhg");
	this.shape_15.setTransform(37,53.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9AB432").ss(2,1,1).p("AA6hJQgogcgrARQgkAOgRAiQgXAsAYAsAA6hJQAoAkgKAyQgDASgKAQQgTAegjAKQgbAJgdgKQgbgJgPgZ");
	this.shape_16.setTransform(-57.8,25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BDE89F").s().p("AgWAYQgJgKAAgOQABgPALgIQAJgNALADQANgEAJANQAKAIgBAQQgBANgLALQgLALgLAAQgNgBgHgKg");
	this.shape_17.setTransform(-59.9,23.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#A8CF49").s().p("AgpBNQgbgIgPgZQAXAQAfAAQAigBAegaQAbgcACgiQACgfgOgVQAoAjgKAzQgDARgKAQQgTAfgjAJQgOAEgMAAQgPAAgPgFg");
	this.shape_18.setTransform(-57.2,26.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B5D764").s().p("AhDBAQgYgsAXgtQARgiAkgNQArgRAoAcQAOAVgCAfQgCAigbAcQgeAagiABQgfAAgXgQgAgeghQgLAIgBAQQAAAOAJAJQAHALANAAQANAAAJgLQALgKABgOQABgPgKgIQgJgNgLADIgFAAQgKAAgHAKg");
	this.shape_19.setTransform(-58.8,24.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#959C74").ss(2,1,1).p("AB1gFQgDgxgkgeQglgegvAFQgvAEghAiQgfAiABAsQADAtAkAeQAkAeAxgBQAxgFAegiQAhgigDgrg");
	this.shape_20.setTransform(-55.2,24.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C0C9BA").s().p("AhNBSQgkgegDgtQgBgsAfgiQAhgiAvgEQAvgFAlAeQAkAeADAxQADArghAiQgeAigxAFIgFAAQguAAgigdg");
	this.shape_21.setTransform(-55.2,24.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#D6973A").ss(2,1,1).p("AA2hEQgVgSgeAAQgjABgaAbQgZAYgCAjQgCAbAOAXQAEAFAFAHQAXAYAlAAQAiAAAagZQAagbAEgiQAAgjgXgZQgFgHgEgCg");
	this.shape_22.setTransform(-96.9,16.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E1AA59").s().p("AhGA2IgJgMQAVAOAdAAQAgAAAdgZQAagbABggQACgdgNgUQAEACAFAHQAXAZAAAlQgEAggaAbQgaAZgiAAIgCAAQgjAAgXgYg");
	this.shape_23.setTransform(-96.3,17);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F2DBA6").s().p("AgVAXQgJgKABgNQABgPAKgHQAIgMAKACQAMgCAKAMQAJAHgBAPQgBANgKAJQgLAKgKABQgMAAgHgKg");
	this.shape_24.setTransform(-99,14.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7B976").s().p("Ag/A+QgNgXABgbQACgjAagYQAagbAjgBQAdAAAVARQANAVgBAdQgCAggaAaQgcAaggAAQgeAAgVgOgAgcgfQgKAIgBAPQgBANAJAJQAHAKAMAAQAMAAAJgKQAKgKABgMQABgPgKgIQgJgMgLADIgDAAQgKAAgGAJg");
	this.shape_25.setTransform(-97.9,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#959C74").ss(2,1,1).p("AB1gFQgDgxgkgeQglgegvAFQgvAEghAiQgfAiABAsQADAtAkAeQAkAeAxgBQAxgFAegiQAhgigDgrg");
	this.shape_26.setTransform(-93.5,14.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C0C9BA").s().p("AhNBSQgkgegDgtQgBgsAfgiQAhgiAvgEQAvgFAlAeQAkAeADAxQADArghAiQgeAigxAFIgFAAQguAAgigdg");
	this.shape_27.setTransform(-93.5,14.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#C66B94").ss(2,1,1).p("AhXgIQAAAHgBAHQACAhAcAYQAdAXAhgCQAlgEAagYQAXgdgCgfQABgJgCgFAhXgIQADgZATgUQAZgbAkgCQAjgEAcAXQAXASAFAb");
	this.shape_28.setTransform(-133.4,7.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EBC7DD").s().p("AgWAXQgKgIABgLQgBgMAKgKQALgLALABQANgFAIAKQALAGgBAQQADAJgLALQgJALgOABQgNAAgJgIg");
	this.shape_29.setTransform(-133.6,4.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D687B7").s().p("Ag6AeQgcgXgCggIABgPQAHAZAWARQAbAVAjAAQAmgFAXgXQAUgWACgYQACAGgBAIQACAigXAaQgaAYglAEIgEABQggAAgagWg");
	this.shape_30.setTransform(-133.4,11);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E0A7CA").s().p("Ag5AxQgWgTgHgZQADgYASgTQAagbAjgDQAkgEAcAXQAWATAFAaQgCAWgTAWQgYAZgmAFIgBAAQgiAAgagVgAgXghQgKALABANQgBAKAKAIQAJAHAOAAQAMgBAKgLQALgJgDgLQABgQgLgFQgIgKgNAEIgBAAQgLAAgKAKg");
	this.shape_31.setTransform(-133.5,6.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#959C74").ss(2,1,1).p("AhWhHQgfAiABAsQADAtAkAeQAkAeAxgBQAxgFAegiQAhgigDgrQgDgxgkgeQglgegvAFQgvAEghAig");
	this.shape_32.setTransform(-130.6,6.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C0C9BA").s().p("AhNBSQgkgegDgtQgBgsAfgiQAhgiAvgEQAvgFAlAeQAkAeADAxQADArghAiQgeAigxAFIgFAAQguAAgigdg");
	this.shape_33.setTransform(-130.6,6.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#2B807B").ss(3.5,1,1).p("EghQgIaMAhmgKFMAgyAIGIAMALIhKRXMgh3ALWIAAAAIgBABIgBAAIAAAAIgBgGIgBgEIAAAKIgBAAI7smbIjz0eIgCgHgAhvgdI/hn9AhvgdIgBRbQAAATAAATIAAAAIABAHIAAADIAAAAIAAAEIgBAFIAAAEIABANIABAKIABANQAAgFgBgFQAAgCAAgBAhvRrIgBABIAAAEIABgCAhwR1IABgDIgBAAIAAADIAAACAhySgIAAgLIgBgDIABgOIACgNIAAgFIAAgCIABgCAhwR3IAAACIAAgCgAhwRkIAAAIAhwR7IAAgCIAAAhIABAAIgBgcgAhySEIAAADIABgHIABgHIgBAdIgBgBIAAgOIgBALAhvSIIgBgKAhySVIABgVAhtSfIgCgFIAAAGEAhUgKOMgjDAJx");

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#459993").ss(2,1,1).p("AOHmAItiDyIAAAsINijwgAZLmYIEChHAPVoDIAMEWIJqirAXPhTIgDjUIjAA2IAAA9AWehGIAxgNAUMCvIAAhEIAAiIIjsA/IAACOIAABIIDshJIDGg+IgDjEAUMgdIAAiXAQghwIAACSIkBBHIAACRAUMgdICSgpAMfBpIAAiPAKCCVICdgsAQghwIAAg+IkBBIIAABAAMfFIIAAhOAKCCVIhEASIAJDkIDYhDIEBhQAUMjxIjsBDAI+CnIgIjMIDphBAH7HyIgfpQIIFiPAZECRIAHopAvOIeIAHnLIrjikIgynMAmTDSIo0h/AzMFlIADAyIC6AsIgEkzIjHgqIADA1A6HAMIAEAyA2iBvIgDg0IjigvA51D+IAEA0IDdA1IgDgzAzJGXIjLgwAzMFlIgLjKA2iBvIALDFA51D+IgOjAA2lA7IDLArA5xEyIizgqIgokkIDFAo");
	this.shape_35.setTransform(11.5,29.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#2B807B").ss(2,1,1).p("AenmtIATktIuMEIIwaE0IAAN5IJAi4IRJlhIDmhJgA6DnsIk2hRICmOzIOeDZII0CEIAHnQIAGmNg");
	this.shape_36.setTransform(2.6,24.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BAD88D").s().p("AyWDcIgLjFIDLAsIALDKgA3uCIIgei9ICKAdIAOC+gAN+hQICiguIAACPIidAsgAUhjIIDshEIAACXIjsBBg");
	this.shape_37.setTransform(-14.1,38.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#69C9A2").s().p("A2zDXIgEg1IDeA2IADAzgAPdCeIEBhKIAABIIAAhIIDshFIAABEIjsBJIkBBQgA3FgbIgEgzIDiAvIADAzgAPdjCIEBhIIAAA+IkBBKg");
	this.shape_38.setTransform(-7.4,39);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#9ED591").s().p("A0vDFIgLjIICSAeIAEDMgAIfgJICdgsIAACPIiXAsgASpi9ICSgpIAACIIiSArg");
	this.shape_39.setTransform(21.4,45.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#9FC862").s().p("Ax0EUIgDgzIDMAxIADAzgA4DC1IgokkIDFAqIAEAzIiKgeIAeC+IB6AdIAEA1gANXh4IDphBIAABAIijAuIAGCNIhEASgAyBAdIgDgzIDLApIADA2gAVBkBIDshCIAAA8IjsBEg");
	this.shape_40.setTransform(-17.3,38.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8ED7B9").s().p("A4CDTIgOi/IDhAxIALDEgAOTA/IEAhFIAACMIkABKgASTgGIDshBIAAiXICSgrIAACZIiSApIAACIIjsBFgAOThQIEAhLIAACVIkABFgASTgGg");
	this.shape_41.setTransform(0,34);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#80C66C").s().p("A1EDgIgDgyICKAhIgDjLIiSgeIgDg1IDHAqIAEExgAHDgOIBEgTIAFCQICYgsIAABOIjZBDgASQhLICSgqIAAiIIAxgOIADDHIjGA9g");
	this.shape_42.setTransform(23.9,48.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#68C7A0").s().p("AAwgnIiQApIAAg7IC+g2IADDSIgxANg");
	this.shape_43.setTransform(150.5,11.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6BC6AE").s().p("AmCkjIQZkzIAMEVIJqiqIgHIpIxJFgIgfpQIIFiPIoFCPIAfJQIo/C5gAPOlEIjsBCIkBBIIjpBBIAIDMIAJDlIDYhEIEBhQIDshJIDGg+IgDjEIgDjTgATAAUIACAJQAFALANAAQALAAAFgHQAEgFAAgIQAAgTgUAAQgUAAAAATgAiQgdIACALQAFANARAAQAIAAAFgGQAGgFAAgIQAAgUgVgCIgFAAQgRAAAAARgAAbhUIACAJQAFALAMAAQAUAAAAgUQAAgTgUAAQgTAAAAATgAS8hzIACAJQAFAKANAAQAKAAAGgHQAEgGAAgGQAAgTgUAAQgUAAAAATgAkXjhIAAAsINgjwIAAgvgATAkBIACAJQAFALANAAQAKAAAGgHQAEgGAAgHQAAgTgUAAQgUAAAAATgAS5mVIACAJQAFAKAMAAQAKAAAGgIQAEgFAAgGQAAgVgUAAQgTAAAAAVgA0MHLIAHnLII0B+IgHHRgAsUCyIACAJQAFAKANAAQAKAAAFgIQAEgFAAgGQAAgVgTAAQgUAAAAAVgAuVCSIACAJQAFALAMAAQAKAAAGgIQAEgFAAgHQAAgUgUAAQgTAAAAAUgAw6BzIACAJQAFAKAMABQALAAAFgJQAEgFAAgGQAAgVgUAAQgTAAAAAVgAzRBcQAFALAMAAQAKAAAGgIQAEgFAAgHQAAgTgUgBQgTABAAATIAAAAIACAJgAC9Geg");
	this.shape_44.setTransform(43.3,38.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2B807B").s().p("AmwBjINhjxIAAAvIthDug");
	this.shape_45.setTransform(58.6,5.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8CDEC6").s().p("EghRABEMAhlgKEMAgyAIHIAMALMgjCAJvg");
	this.shape_46.setTransform(0.1,-60.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#49A592").s().p("An/GLIgCgJQAAgUAUAAQATAAAAAUQAAAGgEAGQgFAHgKAAQgNAAgFgKgAqAFrIgCgJQAAgTATAAQAUAAAAATQAAAHgEAFQgGAIgKAAQgMAAgFgLgAslFMIgCgJQAAgUATAAQAUAAAAAUQAAAGgEAGQgFAIgLAAQgMAAgFgLgAu+EsIgCgIQAAgUATAAQAUAAAAAUQAAAGgEAFQgGAIgKAAQgMAAgFgLgAXVDuIgCgJQAAgUAUAAQAUAAAAAUQAAAHgEAFQgFAHgLAAQgNAAgFgKgACDC8IgCgLQAAgTAWACQAVACAAAUQAAAIgGAFQgFAGgIAAQgRAAgFgNgAEwCEIgCgJQAAgUATAAQAUAAAAAUQAAATgUAAQgMAAgFgKgAXRBkIgCgJQAAgTAUAAQAUAAAAATQAAAHgEAFQgGAIgKAAQgNAAgFgLgA6kACIgCgHQAAgTATAAQAUAAAAATQAAAFgEAFQgGAIgKAAQgNAAgEgLgAXVgnIgCgJQAAgUAUAAQAUAAAAAUQAAAGgEAGQgGAIgKAAQgNAAgFgLgA6siBIgCgJQAAgUAUAAQATAAAAAUQAAAHgEAFQgFAHgLAAQgMAAgFgKgAPni4IgCgJQAAgUAUAAQATAAAAAUQAAAGgEAGQgFAHgLAAQgMAAgFgKgAXOi8IgCgJQAAgUATAAQAUAAAAAUQAAAGgEAGQgGAHgKAAQgMAAgFgKgAR4jcIgCgJQAAgTAUAAQATAAAAATQAAAHgEAFQgFAIgKAAQgOAAgEgLgAUhkPIgCgJQAAgTAUAAQATAAAAATQAAAHgEAFQgFAIgLAAQgMAAgFgLgA68kiIgCgJQAAgUAUAAQATAAAAAUQAAAGgEAGQgFAHgKAAQgNAAgFgKgAXhlCIgCgJQAAgTAWAAQAVAAAAATQAAAHgEAFQgFAIgMAAQgPAAgFgLgAaWlzQgCgFAAgGQAAgRAVgEQAWgFAAAWQAAAIgHAHQgHAJgKAAQgNAAgEgJg");
	this.shape_47.setTransform(15.8,17.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#90C5B8").s().p("A8TG8IimuzIE2BRIAyHKILjCmIgHHLgA7KF/ICyAqIDdA1IDMAwIC6AsIgEkzIjHgqIjMgrIjhgvIjGgqgAtuDKIrjimIgynKIVPFiIgGGNgA4igKIACAJQAFAIANAAQAKAAAFgHQAEgEAAgGQAAgUgTAAQgUAAAAAUgA4qiQIACAJQAFALANAAQAKAAAGgIQAEgFAAgHQAAgTgUAAQgUAAAAATgA45kxIACAJQAEALANAAQAKAAAGgIQAEgFAAgHQAAgUgUAAQgTAAAAAUgAalkgIEChHIkCBHIprCqIgMkVIOMkJIgTEtIgkImIjmBJgARpjHIACAJQAFALANAAQAKAAAGgIQAEgFAAgHQAAgTgUAAQgUAAAAATgAT7jqIABAJQAFALANAAQAKAAAGgIQAEgGAAgGQAAgUgUAAQgTAAAAAUgAWjkdIACAJQAFALANAAQAKAAAGgIQAEgGAAgGQAAgUgUAAQgUAAAAAUgAZklQIACAJQAFALAOAAQAMAAAGgIQAEgGAAgGQAAgUgWAAQgVAAAAAUgAcumZQgWAEAAASQAAAGACAEQAFAJANAAQAJAAAIgIQAGgIAAgHQAAgTgPAAIgGABgA6Dmmg");
	this.shape_48.setTransform(2.6,17.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4FB09C").s().p("A9eH8Ij00eIABgBIfhH+IAARbIAAAlIAAABIAAAHIAAAEIAAADIgBAEIgBANIgBAOIABADIAAAMgA76FmIOeDZII0CEIAHnQIAGmNI1PliIk2hRgAhuOJIgBgKIgBgMIAAgFIAAgEIAAgFIAAAAIAAgCIAAgHIAAgBIAAglIAAxbMAjDgJyIhKRYMgh2ALWgARHnhIwaEzIAAN5IJAi5IRJlgIDmhKIAkolIATkugAhwklg");
	this.shape_49.setTransform(0.1,26.5);

	this.addChild(this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-213.1,-118.4,426.4,237);


(lib.xcornmeal = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E8910F").s().p("AjDGjQlCglkeiZIgCgdIgPgFIgVANQixhmhsiwQg1hWgvhbIgDgHQgLgdgihgQAHgGAIgEQAggSAmAEQBeAMBMA5QAZgSAcgHQASgGASgEQAmgEAkAOQA0ATARA0QBbghBjAFQBoAHBaBUQAWg2AWgMQAagOAfgEQA9gMA3AhQAZAPAVAUQAqAAApAJIAaAHQAlALAjAXIAXAPQA4hABMglQCWhECIBlQAogUArgFIApgBQAkAEAgANIAbANQA3gpBDgNQBygYBdBJQAQANAQAJQAGgBADgEQAQgcAUgaQAlgxA5gYQAcgLAegKIAQgzIgJB+IgNCfQgdFdlFCAQjrBdj+AQQh2AIh2AAQi3AAi6gVgAGYDcQgGABAAAGQAAAJAFgFQAIgCAEgFIgBgDIgGgCIgEABgAgaDAQgFAGAAAKIAEAFIASAPIAPgHIAEgOQgBgLgDgDIgDgEQgHgEgHAAQgKAAgFAHgAqJB8QAAACAEADIASAOQAIgCAJgGIADgNQAAgKgDgDQgDgEAAgBQgJgDgHAAQgUAAAAAXgAJmBHQgFAHAAAKQAAACAEADIASAOQAKgCAHgGIAEgNQAAgKgDgEQgCgDAAgCQgJgDgGAAQgMAAgGAHgAO8BJIALALQAHgDAAgGQgEgFAAgDIgMAAgAF/AZQgFAGAAAKQAAACAEADIARAPQAJgDAJgFIADgNQAAgKgDgEIgCgEQgKgEgHAAQgKAAgFAHgADCgRQgFAGAAALIAWARQAJgCAJgFIADgMQAAgLgDgDIgDgEQgJgDgHAAQgLAAgFAGgAlng+IAAgCIgCgCIACAEgArfh7QgFAHAAAKQAAABAEADIARAPQAKgCAJgFIADgOQAAgKgDgEQgDgDAAgCQgJgDgHAAQgKAAgGAHgAKYhvIAKAJQAEgBAFgDIACgGQgBgGgBgBIgCgDIgIgCQgKAAABANgAC/iQQgFAHAAAJQAAACAEADIASAPQAJgCAJgGIADgOQAAgKgDgDQgDgEAAgBQgIgDgHAAQgLAAgGAHgAlTiSQgFAFABALQAAACADADIASAOQAJgBAIgGIAEgOQgBgKgCgDQgDgDAAgCQgJgDgHAAQgKAAgGAHgAQ9iaQgDAEAAAEQAAACAKAIIAJgEIACgGIgCgHIgBgDIgHgCQgFAAgDAEgAp8jZQgFAGAAAKQAAACAEADIASAOQAJgBAIgHIADgNQAAgKgCgDQgDgEAAgBQgIgDgHAAQgLAAgGAHgAKRjZIABgCQgIgIgJgHQALAIAFAJgANnj5QAAAIAEABQAFgCABgCQAAgEgEgEQgFAAgBADgAxVkcQgFAGAAALQAAABAEAEIASANQAIgBAJgGIADgOQAAgKgDgDIgDgEQgJgEgHAAQgKAAgFAHgAt7lMIAdAFQgWgKggAAQgOABgOAEQANgBANAAIAbABg");
	this.shape.setTransform(0,11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F0960F").s().p("AKtAwIgRgWQiohuhyCzQgRg0g1gCQhgAFggAuQAjhPBbgFQAyAKALAkIAPgSQCCiSCkBuIAWAaQAcAbAFAmQAEAVgIAWgArkBTQAPhJBKgPQAigRAoAYIApAdIAMgfQADg6BAgsQAVgOAagJQAygPBAANIAdAPIBwBUQAdgWAhANQAaAKACAZIgugTQguAAgJAcIgJgKQh0ieioBrIgQAQIg0BmQgygshAgFIgVAFQg0AcgWAmg");
	this.shape_1.setTransform(9.6,-39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBF7EC").s().p("AnxCzIADACIgBACIgCgEgAq4iDIACgBIABAAIAAACIgDgBgACWiMIgBgFIAIAFIgHAAgAQGiuIAPgFIgPAIgAwUiyIABgEIAAAEIgBAAg");
	this.shape_2.setTransform(13.5,-12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2A42F").s().p("AtwCNQgCgFgBgGQABgPARgIQASgIABAXQAAAHgCAJQgFAMgKAAIgBAAQgLAAgFgJgAtZB1IABAEIADACQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIgGgBgANhCJIgDAAIgIgCIAAgDIgBgCIgBgJQgBgFACgEIAHgBIAIgGIAFADIABAFQAIACABAIQAAAGgEAEQgFAEgFAAIgEAAgANSgXQgBgDAAgFQgBgGABgHQAEgBAHACQAGADAEADQgBACgEAGQgFAFgGAEIgEgDgAANhRQgBgGADgDQAFgEALADIACACIAAAHIgBAHQgEACgEABQgLgIAAgBgAjph+QgEgHABgDQgBgNANAAQASgBAAALQAAADgDAJQgGAKgEgBIgBABQgIAAgFgJg");
	this.shape_3.setTransform(16.9,-40.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BE701B").s().p("AAgEmQgigXgngLIgZgHQgqgJgqAAQgUgUgZgPQg3ghg+AMQgfAEgZAOQgWAMgXA2QhahUhogHQhigFhcAhQgQg0g0gTQglgOglAEQgTAEgRAGQgdAHgYASQhNg5hegMQgmgEgfASQgIAEgHAGIgEgKQCKilDbBCQAFglAWgfQBbh9CUA7QAdgrAzgIQAvgKArAWQCChnChA3QAYgvAtgXQCThLBhCVQA7gjBDAEQBiALAzBVQCvhsCYCOIAbgTQEdi9CuEjIBWgaIAEANIgKAJIhOAmIgMgCQgnhYhVgxQhmg7hjAXIAAgBQgJgBgEAGQhHAUhEA/Qgrgqg2gWQh8g0htBTQgwg/hKgXQhQgahOArQg7hahkABQhcACgnBTQgtgLgwgDQh4gOhZBOQgRgKgVgFQgrgKgoAWQgaANgMAbQhggkhbAvQhHAmAABSQg4AGg6gNQhvgZhWBGQAkgBAmALQA+ARA2AlQBFgsBQAPQBGAPAcA9IAwgNQCngoCRBjQBNhEBUADQBKAGAxA0QAnAAAmAJQA9AOA1AkQApg8BBggQCjhRCWBsQA0gZA7gBQA6ACAxAbIAfgTQCsheCaB8QAYgkAgggQA3g2BJgTIAehjIAOgGIAEAEQgLAegBAUIgBAWIgRAzQgdAKgdALQg4AYgmAxQgTAagRAcQgDAEgFABQgQgJgQgNQhehJhxAYQhEANg2ApIgbgNQgggNgkgEIgpABQgsAFgoAUQiHhliWBEQhNAlg4BAIgWgPg");
	this.shape_4.setTransform(0.9,-38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDE7B5").s().p("AiADJIgBgHQgBgGAFgDQAGgEAKAEIADAPIgCAGQACABgJAAIgBABQgJAAgDgHgACYCgIgBgGIAIgCQAHgBADAIQgBADgEACIgCABQgIAAgCgFgANUCdQAGgJADAEIgFAIQgCAAgCgDgAF4CGQAAgEADgDQAFgGAKAEIACACQACACAAAFIgCAGIgJAEQgLgJAAgBgAnYCFQAAgQASAGIABACQACACAAAFIgCAHIgIADQgLgIAAgBgApKCBQAAgGADgDQAEgGAMAEIABADQABABAAAGIgBAGIgJAEgAkPB9QAAgQATAGIABACQABACAAAFIgBAHQgEACgFABQgLgIAAgBgAPgBgQgBgRATAHIABACQACACAAAFIgCAHIgIADIgLgJgAv0BgQAAgRATAHIABACQABABAAAGIgBAGQgEADgFABIgLgJgAHGA5IADABQABABAAAFIAAAGIgBAAIgCADIgIAAQgCgNAJgDgAtjA8QgBgEADgDQAFgHALAEIABADQACABAAAFIgCAHIgJAEIgKgKgAL1A6IgCgFQAHgBAHAGQAAACgFACgAH5ArQAAgFADgDQAEgFAMAEIABACQABABAAAFIgBAHQgEADgFAAIgLgJgAACAlQgBgFADgDQAFgGALAEIABACQACACAAAFIgCAHIgJADIgKgJgAm7AaQAAgQASAGIACACIABAHIgCAGQgEAEgEABIgLgKgAuagHQAAgQASAFIACADQABABAAAFIgBAHQgFACgEAAQgLgGAAgBgAg5g2QAAgCADgDQAEgCAEAAIAEAFQgDADgDACQgGgBgDgCgAq1g7IAAgHQAAgKAHgDQAIAEADADIAAgBIABAFIgBAGQgIAAgHADIgDAAgAohhTQAAgFADgDQAFgGALAEIABACQABACAAAFIgBAHIgJAEIgLgKgAGLhQIAAgOIAEAAQgGgGAAgBQgBgPASAFIACACQABACABAFIgCAHIACAAIADALIgCAEQgCADgGAAgALTh/IAAgBQAEgFAJAAIAAABIABACQgEAFgFACQgEgBgBgDgAiqiPQgDgCAAgCQACgBAHAFIgDABIgDgBgAjrivQAAgFACgEQAFgGALAFIACACQABACAAAFIgBAHIgJADIgLgJgAikjDQgBAAgBgGIAAgFIABABIAFgBIACgBQABABAAAFIAAAFQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgDACIgDgBg");
	this.shape_5.setTransform(13.6,-41.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9C142").s().p("AFrHwQAAgGAHgBQAFgBAFACIABADQgEAFgJACIgDACQgCAAAAgGgAtvHdIAUgNIAQAFIABAdIglgVgAhCHiIgDgFQgBgKAFgGQAJgLAXAIIADAEQADADAAALIgDAOIgSAHIgSgPgAqrGOQgEgDAAgCQgBgeAlAKQAAABADAEQADADAAAKIgDANQgJAGgJACIgRgOgAI/FqQgEgDAAgCQgBgKAGgHQAJgKAXAGQAAACADADQACAEABAKIgFANQgHAGgKACIgRgOgAOWFWIACgGIAMAAQAAADAEAFQgBAGgGADIgLgLgAFXE7QgDgDgBgCQAAgKAGgGQAIgLAXAIIADAEQACAEAAAKIgDANQgIAFgJADIgSgPgACWELQAAgLAFgGQAKgKAWAHIAEAEQACADAAALIgDAOQgJAFgIACgAsHClQgEgDAAgBQAAgKAGgHQAJgLAXAHQAAACADADQACAEAAAKIgDAOQgJAFgJACIgSgPgAJxCcQAAgRASAGIABADQACABAAAGIgCAGQgEADgEABIgLgJgACYCQQgFgDAAgCQAAgJAGgHQAJgLAXAHQAAABADAEQACADAAAKIgDAOQgJAGgIACIgSgPgAl6COQgEgDAAgCQAAgLAFgFQAJgLAWAHQAAACADADQADADAAAKIgDAOQgJAGgIABIgSgOgAQUB5QgBgEAEgEQAFgGAJAEIACADIABAHIgBAGIgJAEQgKgIAAgCgAqjBHQgEgDAAgCQAAgKAFgGQAJgLAXAHQAAABADAEQACADAAAKIgDANQgIAHgKABIgRgOgAJbAhQAJAHAIAIIgCACQgFgJgKgIgAhaAAQgmgIgnAAQgxg0hKgGQhUgDhNBEQiRhjinAoIgwANQgcg9hGgPQhQgPhFAsQg2glg+gRQgmgLgkABQBWhIBvAbQA6ANA4gGQAAhUBHgmQBbgvBgAkQAMgbAagNQAogWArAKQAVAFARAKQBZhOB4AOQAwADAtALQAnhTBcgCQBkgBA7BaQBOgrBQAaQBKAXAwA/QBthTB8A0QA2AWArAqQBEg/BHgUIAAAAQABADAEACQAFgCAEgGIgBgBQBjgXBmA7QBVAxAnBaIAMACIBOgoIgDAMIgOAGIgeBlQhJATg3A2QggAggYAkQiah8isBeIgfATQgxgbg6gCQg7ABg0AZQiWhsijBRQhBAggpA6Qg0gkg+gNgAgbhPQgFADABAHIABAHQADAGAKAAQAJAAgCgCIACgGIgDgOQgFgDgEAAQgEAAgDACgAEBhwIgIADIABAFQACAFAKAAQAEgDABgCQgCgIgGAAIgCAAgAO2hrQACADACAAIAFgIIgCgBQgDAAgEAGgAreiTQgSAIAAAPQABAGACAFQAFAJAMAAQAKAAAEgNQADgIAAgIQgBgQgKAAQgDAAgFACgApXhtIADABIAAgCIgBAAgALWjdIARAWIAyBWQAIgWgEgVQgFgmgcgbIgWgbQikhviCCUIgPASQgLgkgygKQhbAFgjBPQAgguBggFQA1ACARA0QBHhwBbAAQA4AABAArgAPfiPIgIABQgBAEABAFIABAIIABADIAAADIAIACIADAAIADAAQAGAAAEgEQAFgEAAgGQgCgIgHgDIgBgEIgGgDIgHAGgAD3h2IAGAAIgHgFgAHdiJQgDADAAAFQAAABALAIIAJgDIACgHQAAgFgCgBIgCgDIgHgBQgFAAgDADgAl2iCQAAABALAIIAIgEIACgGQAAgGgCgBIgBgDIgJgBQgJAAAAAMgAnliPQgDADAAAFIALAJIAJgDIABgHQAAgFgBgCIgBgCIgIgCQgGAAgCAEgAitiKQAAABALAIQAFgBAEgDIABgGQAAgGgBgBIgBgDIgJgBQgKAAAAAMgARmiYIABADIAOgIIgPAFgAuzicIABAAIAAgEgARCinIALAJIAIgEIACgGQAAgGgCgBIgBgDIgJgBQgKAAABAMgAuSioIALAKQAFgBAEgDIABgHQAAgFgBgCIgBgBQgGgCgEAAQgJAAAAALgApRj+QhKARgPBJIAEADQAWgmA0gcIAVgFQBAAFAyAsIA0hoIAQgQQCohrB0CeIAJAMQAJgeAuAAIAuATQgCgZgagKQghgNgdAWIhwhUIgdgPQhAgNgyAPQgaAJgVAOQhAAsgDA8IgMAfIgpgdQgYgQgWAAQgPAAgNAHgAIhi+IAIgBIACgCIABgBIAAgFQAAgFgBgBIgDgCQgJADACAOgAr/jTQgDADABAFIAKAJIAJgDIACgHQAAgFgCgCIgBgCIgIgCQgFAAgDAEgANVjTIACAFIAHAFQAFgCAAgDQgGgFgGAAIgCAAgAJejkQgDADAAAFIALAJQAFgBAEgDIABgGQAAgFgBgCIgBgCIgJgBQgFAAgCADgABmjqQgDADABAEIAKAKIAJgEIACgHQAAgFgCgBIgBgDIgIgBQgFAAgDAEgAlZjuIALAKQAEgBAEgDIACgHIgBgGIgCgDIgIgBQgKAAAAALgAs4kRQAAABALAJQAEgBAFgDIABgHQAAgFgBgCIgCgCIgIgBQgKAAAAALgAPUksQgBAGAAAGQAAAGACADIAEADQAGgEAFgGQAEgFAAgCQgDgDgHgDIgHgBIgDAAgAp6kwIACACIAEgDIgGABgAAqlEQgDACAAACQADACAGABQADgBADgDIgEgFQgEAAgEACgApTlLIAAAGIADABQAHgEAIAAIABgFIgBgGIAAABQgDgDgIgEQgHADAAALgACSlaQgDADAAAGQAAABALAIQAFgBAEgCIABgHIgBgHIgBgDIgIgBQgFAAgDADgAm8llQgDADAAAFIALAKIAJgDIABgHQAAgGgBgBIgBgDIgIgBQgFAAgDADgAHtlZIAMACQAGAAACgCIACgFIgDgKIgCAAIACgHQgBgGgBgBIgCgDQgSgFABAPQAAACAGAFIgEAAgAhdmVQgNAAAAAMQAAAEAEAHQAFAJAIgBQAFAAAFgKQAEgIAAgEQAAgJgRAAIgBAAgAhLmcQAAACADACQAEABACgBQgFgEgDAAIgBAAgAiHnBQgCADAAAGIALAJIAJgEIABgGQAAgGgBgBIgCgDQgEgCgEAAQgFAAgDAEgAhEnSQABAFABABIADABIADgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAABAAAAIAAgFQAAgGgBAAIgCAAIgFABIgBAAgANAASQABgDAGAAQAEAEAAAEQgCACgEACQgFgBAAgIgAx8AFQgEgEAAgBQgBgJAGgGQAIgLAXAIIADAEQACADABAKIgEAMQgJAGgIABIgRgNgAuhg/QgdgDgYADQANgEAPgBQAgAAAVAKIgcgFgArViFIgBgEIAAAAIAGABQAAABAAABQAAAAgBABQAAAAAAABQAAAAgBABIgDgCg");
	this.shape_6.setTransform(3.8,-15);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-127.9,-68.9,257.7,124.9);


(lib.xcookiesheet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#716873").ss(4,1,1).p("ASm5SItFAAADn3wINGAAAVh1KIT1AAQCqADBCBoMAOfAj1QAHAcAAAYQAAAPgEAOQBXgmABhOQAAgagIgbIkDqKIhskQIjOoBIjUoVIh/k+IgghRQhEhriugEI5lAAASm5SIZvAAQC3AFBHBzQAXAlALAxIBkD7IAnBhQAzAAA0AAQCdAMBFCAQAJAVAIAVQBqD6BqD6QA4CFA5CFQBUDHBVDJQANAoABAfQABAcgJAUIgbCVQAAAUgGAQQgBACgBADQgVAuhHAIQgTAAgTAAICuG1QAKAkgBAfQgBABAAACQgCAlgJAVQgMBkhJBcQgzAZhqAHIgGAAIhDBwQgoBFhRAAMhxnAAAQhqAMguhPIhShyIhUgHQiFhhgWhnQgFgGgHgRIgEgHIgDgNQgCgJgBgJQgJg9AchXICNl1QgRAAgRAAQhQgGgZgrQgKgSgGgUIgkieQgHgNgCgRQgCgXAGgdQAGgbANggQDQm7CwnBQA5iTA2iTQADgJAEgKQAIgqAUgbQAfgtA0gJQAdgFAiAFIABAAQBKAABKABIA9ikIBNjLQAJgnASggQA2heCMgUIDHAAIDDAAIQLAAICrAAIaIAAEAukgUwQgLgvgVgiEBAOAGTQgIARgPAMQgMAKgRAGQgRAHgXACQhKAAhKAAIBLC+EA7kARnQgbAMglAHQgZAFgdAEQgSACgSABIpxAAIkxAAIpGAAIrYAAMg5LAAAItkAAIm3AAEAtwAUaIOyAAQCxgMBBhSAf4UaIJGAAIEyAAEgl4AUaMA6PAAAAf4UaIrhAAEg2igQrQAgAAAfAAEgwagR5IBKjLQAEgXAIgTEg19gCrIFjvOEg4RgOwQANgjAPgiEgsmgXpQASgFATgCICuAAEgu/gVyIAHgUQgHALgFANIAFgEIgRAuEguHgTjQACgEACgEQAHgKAIgKQAJgKAKgIQADgDAEgDQAygnBVgMMBAwAAAEg7OARpQgEgRgBgTQgBgtARg6MAMkgiBQAAgBABAAQAGgkARgbEguegSkIAXg/Egu4gWGQArhLBngYEgxEgWZIAbhHA5W3wIv9AAA5W3wICtAAIaQAAEgzdAUaINlAAEg/iAG+QAGACAIACQASAFAYACQBOAABOAAIhIC+Eg3MAAsIk4NXQgRA8ABAvQACBTBEAoEhAVAGSQAIASAQAMQALAIAQAGEg/zASiQACAFACAGQABAEACAFEg/vAStQgBABAAABEg5uASGQgXgDgTgFQgfgIgXgNEg5uASGQAMACAMABQACAAADAAQA0ACBBgFgEg/gATNQAuBABlANIJwAAEg19gCrIhPDXEA8cAWcMh4NAAA");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("Eg60AAWIhShwMB4NAAAIhEBuQgnBFhRAAMhxnAAAQgOACgNAAQhWAAgnhFg");
	this.shape_1.setTransform(2.1,152.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686664").s().p("EA9uAB6IhMi8ICVAAQAWgDARgGQARgHAMgJQAPgMAIgSIgbCUQAAAUgGAQIgCAEQgVAuhHAJIglAAgEg90AB5QhPgFgZgsQgLgSgFgTIglicQAIASAQAMQAMAIAPAGIAOAEQASAFAYABICcAAIhIC8IgiAAg");
	this.shape_2.setTransform(-0.4,52.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A7A6A5").s().p("EAoHARrIIus+IEmLZQAHAZgBAWQAAANgDAMQgZALggAHQgXAEgbAEIggADgAElRrMAiFgjFQBKAWAlA7IFRNCIyDUygAi7RrMAhTgjUIEnAAMghoAjUgEgr8ARrMAougjVIWLABMgqFAjUgEg0GARrQgUgDgRgEQgcgIgVgMQgEgPAAgRQgBgpAPg0ICCleMAgrgbfIKRAAMgrKAjVgEgppgQOIAEgGIAOgSQAvg3BhgNISCAAI8uXjg");
	this.shape_3.setTransform(1,-9.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#95938F").s().p("EAvPATpIkxAAIpGAAIrYAAMg5LAAAItkAAIm3AAIiSAAQgXgDgTgFQgfgIgXgOQgEgRgBgTQgBgtARg6MAMkgiBIABAAIAXhAIAEgHIAPgUQAJgKAKgJIAHgFQAygoBVgMMBAwAABIAEAAIT1AAQCqADBCBoMAOfAj1QAHAcAAAYQAAAPgEANQgbAMglAIQgZAFgdADIgkAEgEgpXgQmIgOASIgEAGIoKWHIhdD8IiCFeQgPA0ABApQAAARAEAPQAVAMAcAIQARAEAUADIAoAAIHiAAIU0AAIUNAAIESAAIDOAAIXCAAIMgAAILMAAIAggDQAbgEAXgEQAggHAZgLQADgMAAgNQABgWgHgZIkmrZIjLn0IlRtDQglg6hKgXQgsgOg6gBIiFAAIknAAIrbAAI2LAAIlGAAIqRAAIigAAIyCAAQhhANgvA3g");
	this.shape_4.setTransform(1,-9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7F7C7B").s().p("EA8CAXHMh4NAAAIhUgHQiFhhgVhnQAuA/BkAOIJwAAINlAAMA6PAAAILhAAIJHAAIEyAAIOxAAQCygNBBhSQgNBkhJBcQgzAZhqAIgEg8uAQYQgBgvARg8IE4tWIBQjXIFivOIBKjLIARguIAHgUQArhMBngYQASgEATgDICuAAIP9ABICtAAIaQAAINGAAIZlAAQCuADBEBrIAgBRIB/E/IDUIVIDOIAIBsERIEEKJQAIAcgBAZQgBBPhXAlQAEgNAAgPQAAgYgGgcMgOfgj1QhDhoiqgDIz0AAIgFAAMhAwgABQhVAMgyAoIgGAFQgLAJgIAKIgPAUIgFAHQgQAcgHAkIAAAAMgMlAiBQgRA6ACAtQAAATAEARQhDgngDhUg");
	this.shape_5.setTransform(2.6,-4.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AFAEAD").s().p("Ab1RrISD0yIDLH0IovM+gABlRrMAhogjUICFAAQA5ABAtAOMgiFAjFgA27RrMAqGgjUILaAAMghSAjUgEgzQARrMArKgjVIFFAAMgotAjVgEgxlAF5Icu3jICgAAMggsAbfgEA6aAEIIhvkKIjSn6IiZlxICvAIIBZDOIDYHwIByEEICOFGIi7AcgEg9oAEjIF7u0IBcjmICuAAIl4PTIhWDiIgnBmIhlAEIhiADg");
	this.shape_6.setTransform(-0.3,-9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C6C4C1").s().p("EAqfAW2IBpiTIExAAIhoCTgAV4W2IBziTILXAAIhqCTgEgx9AW2IC5iTINjAAIi3CTgEg+dAJMQgQgMgIgRQgGgOgCgRQgDgWAHgdICuiBIg3CJIBhgEIihB6QgPgHgMgIgEA4lADAIBjiKIBvELIhlCPgEg3+ACVIDiijIhQDXIjoCugEA79gBuIBSh0IBwEIIhQBxgEAyDgNVIB2iYIAnBiIBnAAQCdAMBFB/IASAqIhWB4IhajOIiugHICZFwIheCDgEg24gMBIC2iOICUABIA+ikIDNigQgIATgEAXIhKDMIjICkIgFgGIiuAAIhcDnIiXB8QA5iTA2iTgEgpAgW2IDDAAIh2BiIitAAQgUADgRAEgAFI1UIB6hiINEAAIh5BigA321UICFhiICrAAIiCBig");
	this.shape_7.setTransform(-9.6,-15.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDBCB9").s().p("EAtuAW2IBoiTIJxAAIAkgEQAdgDAagGQAkgHAcgMQBWglABhPQABgagIgbIkDqKIBliPIBLC4IC7gcIiOlGIBQhxICqGSQANAoABAgQAAAbgJAUQgIASgPALQgMAKgQAHQgSAGgWADIiVAAIBMC9ICtG2QAKAjgBAfIAAADQgDAlgIAVQhBBSiyAMgAf1W2IBqiTIJGAAIhpCTgEgl7AW2IC3iTMA5MAAAIhzCTgEg9PAW2QhlgNgug/QgGgHgGgRIgEgJIgDgLIgEgSQgIg9AchXICNl1IBHi+IicAAQgXgCgTgFIgOgDIChh6IBmgDIAnhnIDoiuIk3NWQgSA8ACAvQACBUBDAnQAXANAfAJQAUAFAWADIAZACIAEAAQA0ACBCgEIG3AAIi5CTgEhAJAGhQDQm7CvnBICXh8Il7OzIiuCBQAGgcANgggEAz1gFAIBeiDIDSH5IhjCKgEgzpgM+IAFAGIDIikIljPOIjiCjgEA3CgJeIBWh4IDUH0IhSB0gEg4UgMUQAOgjAPgiQAegtA0gJIBAAAIAAAAIi2COIAHgTgEAuhgSUQgLgvgVgiQhEhriugEI5lAAIB5hiIZwAAQC3AFBHBzQAWAlAMAxIBjD7Ih2CYgEgxHgT8IAbhHQA2hfCMgUIDHAAIiFBpQhoAYgqBMQgHALgFAMIjNCggA2r1UICChiIaIAAIh6BigEgpWgVUIB2hiIQMAAIiFBig");
	this.shape_8.setTransform(0.2,-15.5);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-412.7,-161.8,825.6,323.9);


(lib.xbowlfront = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9FA475").ss(3,1,1).p("EgvxgBiQgCAEAAADQAAA7HuAtQCsAQDmAOQF9AYHAAOQJeATLYAAQA0AAA0AAQBbAABZgBQCSgBCMgBQOKgLKvgrQOBg2AAhQQAAgDgCgF");
	this.shape.setTransform(-1.9,-129.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9FA475").ss(4,1,1).p("EAyzgV1QADAHAAAHIAAAAIAEgBQB+FQilEbQhLAUh5AaEAvQgLKQAmDJADCzQAAAogBAoQgHDuhLDEQgOAngSAmQiPE1lADJQj3CSkPBUQh9AoiCAZQihAdihAVIAAACIAABPIAABYQkPAukQAcQxtB0yCi+IAAheIAAhvIAAgCQgJgBgIgBQmSg4l3icQjrhri8i3QhshshNiAQgXgmgUgoQhljJgdjzQgFgogDgoQgLijASi0QAFgzAHg0QiJgchUgfQiVkbBllCIAGAJQgEgHAAgGIAAgBQAAgIAEgHEAy2gVnQgCB3u6BUQuaBS0MADQguAAgsAAQrcAApogYQoJgWm2gnQiUgMh8gOQpwhGg2haIgCgCQAAgBAAAAEgvBgLTIAHAJQK6COK1BOUAksAEGAjugHnA2eQyQAHABAHABQFrAtFuAcQGhAbGhgCQEzgBEygMAVfRaQjdAbjfAMQhaAEhZAEAVfRaQAJgCAIAA");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BE9EC7").s().p("AsHFsQBKj4APj/QLjhkLmi5IgBBPQgIDvhLDEQrvDeryBxIATg9g");
	this.shape_2.setTransform(227.1,9.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DDC9E0").s().p("AEYE6IipgiIhBgOIgygMIhdgVIg5gNIgGgLIgTglIgJgWIgIgQQgag/gThFQgoiPgTiWIgIgBIgDgbIBOAQIA3ALIAJABQB0AXBzAVIBPANIADAXIgBABQAQBsAcBnQArCpBSCQIgCAGIgegGg");
	this.shape_3.setTransform(-241.2,11.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CFB4D3").s().p("AwRE8IgMgCIgxgIIhGgNIgFAAIgagFQhXgPhXgRIgEgBIABgGQhSiRgrinQgchpgQhrIABgBIgDgXICLAXIAJABICDAUIAFABIADAAQbwEFb+juQgPEAhKD4IgTA9QsMB1sMAAQtFAAtGiHgA9mCPQiHghiHgkQhljGgdj1QgFgogDgpQBqAZBrAXIAaAFIAaAGIAgAGIADAbIAIACQATCWAoCQQASBEAbA/IAIAQIAJAVIATAlIgGAIIgigIg");
	this.shape_4.setTransform(-71.8,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D7CB9F").s().p("Egh1AOFIAAhvIAPAAQFqAtFuAcQGhAbGjgCQEzgBExgMQA5gNA2gVQG5iqCqm6QLyhxLxjcQgOAngRAmQiPEzlBDJQj3CSkPBUQh8AoiDAZQigAdihAVIgRACIARAAIAABPQkRAmkPAYQmwAlmuAAQrPAArChpgADMNjIiyAIICygIQDfgMDegbQjeAbjfAMgANYnGIhtAHQmzAWmwgWQmqgTmng3QmWgzmUhCQmrhKiDhEUAksAEGAjtgHnIABAFQAmDJAECzQrmC5rlBkg");
	this.shape_5.setTransform(72.7,28.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBDECB").s().p("AAAACIAAgEIAAAEg");
	this.shape_6.setTransform(-210.1,43.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B6D1B8").s().p("ADuA3IABgGIgBAGgAjuguIAFgIIAGALIgLgDg");
	this.shape_7.setTransform(-234,38.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E6E2C4").s().p("ArtPFQifg1iQhcQihhmhjiaQgOgXgNgXIA6ANIBcAVIA0AMIBCAOICoAjIAfAGIAAAAIAAAAIAEAAIATAhIAAAEIAEABQBNB/BtBsQBCBCBLAxgAxhAxQh1gVh0gXIgJgBIg3gJIhNgQIgBgHIAAgFIAAgGQgHhgAAhjIAAgIIG4CKQgBAIATCRIADANIhPgNgA+0vQQAEgTgSgLQeQFrf1hiQwIBGsKAAQ5aAAoLkxg");
	this.shape_8.setTransform(-122.7,-18.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EDE9C5").s().p("AAACXQraAApogYQoKgWm2gnQiTgMh9gOQpvhEg2haIgCgCIAAgBIgEgOQAAgIAEgHIC7ACQgCADAAAEQABA7HtAuQCtAQDmAPQF9AVHAAOQJeATLZAAIBnAAIC0gBIEegCQOKgLKvgoQOBg5AAhPQAAgEgCgEIDVAAQADAHAAAHIAAAAQgCB3u6BSQuaBS0MADIhcAAg");
	this.shape_9.setTransform(-0.7,-124.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCDBAB").s().p("A2eT6IAAheQRoCpSHhlQEPgYEQgmIAABYQkPAukQAcQmvAsmvAAQrFAArMh2gAq3R2QlugclrgtIgOgCIgRgCQmSg4l3icQjrhri8i3QhshshNiAQgXgmgUgoQCHAkCHAhIAiAIIALADQANAXAPAXQBjCaChBmQCPBcCfA1IDnAqQhKgxhDhCQhthshNh/IgEgBIABgEIgTghQBXARBXAQIAaAEIAEABIBHAMIAxAIIAMACQZTEFZQjzQiqG6m5CqQg2AVg6ANQkyAMkzABIg5AAQmEAAmFgZgA+/hPIgDAAIgFgBIiDgUIgJgCIiMgXIgCgNQgUiTACgIIm5iKIABAIQgBBjAHBgIABAGIAAAFIAAAHIgggHIgagFIgagGQhrgXhqgYQgLijASi0QAFgzAHg0QK6COK1BOQq1hOq6iOIgHgJIAHAJQiJgchUgfQiVkbBllCIAGAJIAAABIACACQA2BaJwBGQB8AOCUAMQG2AnIJAWQJoAYLcAAIBaAAQUMgDOahSQO6hUACh3IAEgBQB+FQilEbQhLAUh5AaUgjuAHngksgEGQCEBEGqBKQGVBCGWAzQGlA3GqATQGyAWGzgWIBsgHIABB3QtWBwtRAAQulAAuiiHgEgyAgSNUAMEAHDAxygDYQ/0Bi+QlrQARALgDATg");
	this.shape_10.setTransform(0,0.7);

	this.addChild(this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-331.2,-139.8,662.6,279.9);


(lib.xbowlback = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#959966").ss(3,1,1).p("EAm/ABwQiTAMi5AMQqvAruKALQiMABiSABQhZAAhbAAQg0AAg0AAQrYAApegSQnAgOl9gYQjmgOisgQQiSgOhogPQhggOg6gPQhagXAAgZQAAg6HuguQCsgQDmgOQF9gYHAgOQJegTLYAAQA0AAA0ABQSwABNbA3QOBA4AABOQAAA+ocAwQgMABgMABIgBAAg");
	this.shape.setTransform(-1.9,-125.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9FA475").ss(4,1,1).p("EAv5gDFQgDizgmjJEAvPgJGUgjuAHngksgEGEAy2gTeQgBBRm5BBQgCAAgDAAQjPAfkuAaQuaBS0MADQguAAgsAAQrcAApogYQoJgWm2gnQiUgMh8gOQkZggimgjQgWgFgUgFQiigngbgsIgCgCQAAgBAAAAIgGgJQhlFCCVEbQBUAfCJAcIgHgJEAy2gTeIAEgBQB+FQilEbQhLAUh5AaEAv5gDFQAAAogBAoQgHDshLDGQgOAngSAmQiPE1lADJQj3CSkPBUQh9AoiCAZQihAdihAVIAAACIAABPIAABYQkPAukQAcQxtB0yCi+IAAheIAAhvIAAgCQgJgBgIgBQmSg4l3icQjrhri8i3QhshshNiAQgXgmgUgoQhljJgdjzQgFgogDgoQgLijASi0QAFgzAHg0QK6COK1BOEgzFgTeQAAhlKshMQB8gOCUgNQG2gnIJgUQJogaLcAAQAsAAAuABQUMADOaBRQO8BVAAB3IAAAAALwUSQkyAMkzABQmhACmhgbQlugclrgtAVfTjQAJgCAIAAAVfTjQjdAbjfAMQhaAEhZAEEgzBgTQQgEgHAAgGIAAgBA2eS7QAHABAHAB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BFB984").s().p("EAm/ACTQiTgQi5gQQtbhJywgdIhogDQrYgOpeAEQnAAEl9AOQjmAJisANQiSALhnAMQhhAMg6ANQhagXAAgZQAAg5HugvQCsgQDmgOQF9gYHAgOQJegTLYAAIBoABQSwACNbA2QOBA4AABOQAAA+ocAwIgYACg");
	this.shape_2.setTransform(-1.9,-129.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BEB77C").s().p("AAAACIAAgDIAAADg");
	this.shape_3.setTransform(247.6,-114.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B8B072").s().p("ADtB1QrXAApfgTQm/gOl9gXQjngPisgQQiSgOhngOQhggMg7gPQA7gOBggLQBngNCSgLQCsgMDngJQF9gPG/gEQJfgGLXARIBoADQSxAdNbBHQC5APCTARIgBAEQiSANi5AMQqvAquKALIkeACIi1ABIhoAAg");
	this.shape_4.setTransform(-25.6,-117.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CBDECB").s().p("AEYE7IipgjIhBgPIgygLIhdgVIg5gOIgGgKIgTglIgJgWIgIgQQgag/gThFQgoiPgTiWIgIgCIgDgbIBOARIA3AKIAJACQB0AXBzAUIBPAOIADAXIgBABQAQBrAcBoQArCoBSCSIgCAFIgegFg");
	this.shape_5.setTransform(-241.2,25.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E2C4").s().p("ArtPFQifg1iQhcQihhmhjiaQgOgXgNgXIA6ANIBcAVIA0AMIBCAOICoAjIAfAGIAEAAIATAhIAAAEIAEABQBNB/BtBsQBCBCBLAxgAxhAxQh1gVh0gXIgJgBIg3gJIhNgQIgBgHIAAgFIAAgGQgHhgAAhjIAAgIIG4CKQgBAIATCRIADANIhPgNgA+0vQQAEgTgSgLQeQFrf1hiQwIBGsKAAQ5aAAoLkxg");
	this.shape_6.setTransform(-122.7,-4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B6D1B8").s().p("AwRE8IgMgCIgxgIIhGgNIgFAAIgagFQhXgPhXgRIgFgBIACgGQhSiRgrinQgchpgQhrIABgBIgDgXICLAXIAJABICDAUIAFABIADAAQbwEFb+juQgPEAhKD4IgTA9QsMB1sMAAQtFAAtGiHgA9ECXIgigIQiHghiHgkQhljGgdj1QgFgogDgpQBqAZBrAXIAaAFIAaAGIAgAGIADAbIAIACQATCWAoCQQASBEAbA/IAIAQIAJAVIATAlIAGALIgMgDg");
	this.shape_7.setTransform(-71.8,31.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A0C5A4").s().p("AsHFsQBKj4APkAQLjhjLmi5IgBBPQgIDvhLDEQrvDeryBxIATg9g");
	this.shape_8.setTransform(227.1,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCDBAB").s().p("A2eT6IAAheQRoCpSHhlQEPgYEQgmIAABYQkPAukQAcQmvAsmvAAQrFAArMh2gAq3R2QlugclrgtIgOgCIgRgCQmSg4l3icQjrhri8i3QhshshNiAQgXgmgUgoQCHAkCHAhIAiAIIALADQANAXAPAXQBjCaChBmQCPBcCfA1IDnAqQhKgxhDhCQhthshNh/IgEgBIABgEIgTghQBXARBXAQIAaAEIAEABIBHAMIAxAIIAMACQZTEFZQjzQiqG6m5CqQg2AVg6ANQkyAMkzABIg5AAQmEAAmFgZgA+/hPIgDAAIgFgBIiDgUIgJgCIiMgXIgCgNQgUiTACgIIm5iKIABAIQgBBjAHBgIABAGIAAAFIAAAHIgggHIgagFIgagGQhrgXhqgYQgLijASi0QAFgzAHg0IgHgJIAHAJQiJgchUgfQiVkbBllCIAGAJIAAABIACACQAbAsCiAnIAqAKQCmAjEZAgQB8AOCUAMQG2AnIJAWQJoAYLcAAIBaAAQUMgDOahSQEugaDPgfIAFAAQG5hBABhRIAEgBQB+FQilEbQhLAUh5AaUgjuAHngksgEGQCEBEGqBKQGVBCGWAzQGlA3GqATQGyAWGzgWIBsgHIABB3QtWBwtRAAQulAAuiiHgA5Ln1Qq1hOq6iOQK6COK1BOgEgyAgSNUAMEAHDAxygDYQ/0Bi+QlrQARALgDATg");
	this.shape_9.setTransform(0,14.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D7CB9F").s().p("Egh1AOFIAAhvIAPAAQFqAtFuAcQGhAbGjgCQEzgBExgMICygIQDfgMDegbQjeAbjfAMIiyAIQA5gNA2gVQG5iqCqm6QLyhxLxjcQgOAngRAmQiPEzlBDJQj3CSkPBUQh8AoiDAZQigAdihAVIgRACIARAAIAABPQkRAmkPAYQmwAlmuAAQrPAArChpgANYnGIhtAHQmzAWmwgWQmqgTmng3QmWgzmUhCQmrhKiDhEUAksAEGAjtgHnIABAFQAmDJAECzQrmC5rlBkg");
	this.shape_10.setTransform(72.7,42.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C7C08D").s().p("AAAACIAAgDIAAADg");
	this.shape_11.setTransform(247.6,-114.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EDE9C5").s().p("AAAEgQraAApogYQoKgWm2gnQiTgMh9gOQkZggilgjIgqgKQijgngagsIgCgCIAAgBIgEgOQAAhjKrhMQB9gOCTgNQG2gnIKgUQJogaLaAAIBcABQUMADOaBRQO8BVAAB1IAAAAQgBBRm5BBIgGAAQjOAfkuAaQuaBS0MADIhcAAgA1CiyQnAAOl9AXQjmAPitAQQntAugBA8QABAXBZAXQA7APBgAOQBnAOCSAOQCtAQDmAPQF9AXHAAOQJeATLZAAIBnAAIC0gBIEegCQOKgLKvgqQC5gMCTgMIAAAAIABAAIAXgDQIdgwAAg7QAAhQuBg5Qtbg2ywgCIhnAAQrZAApeATg");
	this.shape_12.setTransform(-0.7,-124.7);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-331.2,-153.5,662.6,307.3);


(lib.xbolt001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(3,1,1).p("AAbgaQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B9B9CE").s().p("AgaAbQgLgMAAgPQAAgOALgMQAMgLAOAAQAPAAAMALQALAMAAAOQAAAPgLAMQgMALgPAAQgOAAgMgLg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(2,1,1).p("AAbgaQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.8,-3.8,7.7,7.7);


(lib.xarrow = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B807B").ss(2,1,1).p("AAwglIipCBABQgEIAqhXIhkAaIAaAcg");
	this.shape.setTransform(12.8,-10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#A3FEF4","#43C7C0"],[0,1],-545.7,1524.7,488.3,-936.2).s().p("AgXAKIgZgaIBhgaIgpBVg");
	this.shape_1.setTransform(20.1,-15);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,-19.4,24.4,18.5);


(lib.Untensils = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D9B98").ss(0.5,1,1).p("ABuhVIABgMQhuAMhrgQIgEC8QBCAQA7gBABvhhQACAAACgBIAAgOQhyAKhwgNIAAANQACABADAAAhuBXQgBAAgDgBIAAAPQBuAdB0gaIAAgPQgCABgCAAQgkAJgmADQgKAAgJAAABsBaIACiv");
	this.shape.setTransform(16,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DEE4E4").s().p("AhyBlIAAgPIAFABQBBAQA7gBIATAAQAmgDAkgJIAEgBIAAAPQg4AMg1AAQg6AAg7gPgAhcBRQgCAAAAgNQAGgBgBgGQABgIgIAAIgBgoIAAgVIACAAQAIAAgBgHQABgIgIAAIgCABQAAgkADgVQACABACAAQAJAAAAgHIgBgEQAGAAAIAFIADACQgDACAAAEQAAAIAIAAIAGgBQAJARgCAeIgEgBQgIAAAAAIQAAAHAIAAIADAAIgEARIgGAeIgFgBQgHAAgBAHQAAAHAHABQgKAcgQAAIgCAAgAhcATQAAAHAIAAQAIAAAAgHQAAgIgIAAQgIAAAAAIgAhRgqQAAAHAIABQAIAAAAgIQAAgHgIAAIgBAAQgHAAAAAHgAhrhlIgDgBIAAgNQBvANBxgKIAAAOIgDABQgwAFgvAAQg8AAg/gJg");
	this.shape_1.setTransform(16,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1C5C4").s().p("AhcBLQAjgeACg3QACg6gLgXIAaAEQABAIAHAAQAHgBABgFQAgACAkgEIAvgGIgCCvQgkAJgmACIgRABQgUgDhIgQgAgPBVQAAAHAIAAQAHAAAAgHQAAgIgHABQgIgBAAAIgAAoBPQAAAIAIAAQAIAAAAgHQAAgIgIAAQgIAAAAAHgAg5BDQgBAHAIABQAIAAAAgIQAAgHgHAAIgBAAQgHAAAAAHgAAAAwQAAAIAGAAQAIAAAAgIQAAgHgIAAQgGAAAAAHgABEAlQAAAIAIAAQAHAAAAgIQABgHgIAAQgIAAAAAHgAgnAiQgBAIAIAAQAIAAAAgIQAAgHgHAAQgIAAAAAHgAAfAOQAAAIAIgBQAIABAAgIQAAgIgIABQgIgBAAAIgAgmgHQAAAHAIAAQAIAAAAgHQAAgIgIAAQgIAAAAAIgAA5gWQAAAIAIAAQAIAAAAgIQAAgHgIAAQgIAAAAAHgAgDgWQAAAHAFAAQAIAAAAgHQAAgIgIAAQgFAAAAAIgAghgzQAAAHAIAAQAHAAAAgHQAAgIgHAAQgIAAAAAIgAAPg3QAAAHAIAAQAIABAAgIQAAgHgIAAIgBgBQgHAAAAAIgAA2hOQAAAIAIAAQAIAAAAgHQAAgIgIAAIgBAAQgHAAAAAHg");
	this.shape_2.setTransform(17.6,37.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C6D2D2").s().p("AhtBXIACi8QBsAQBugMIgBAMIgwAGQgjAEghgCQAAAGgHAAQgHAAgBgHIgagFQAKAXgBA6QgCA4gjAeQBIAPASADIgEAAQg5AAg/gPgAhhANIABAoQAIAAgBAIQABAGgGABQAAANACAAQARACALgeQgHgBAAgHQABgHAHAAIAFABIAGgeIAEgRIgDAAQgIAAAAgHQAAgIAIAAIAEABQACgegJgRIgGABQgIAAAAgIQAAgEADgCIgDgCQgIgFgGAAIABAEQAAAHgJAAQgCAAgCgBQgDAVAAAkIACgBQAIAAgBAIQABAHgIAAIgCAAIAAAVgAAABdQAAgHAIAAQAHAAAAAHQAAAIgHAAQgIAAAAgIgABABfQgHAAAAgIQAAgHAHAAQAIAAAAAIQAAAHgHAAIgBAAgAgoBLQAAgHAHAAQAIAAAAAIQgBAHgHAAQgIAAABgIgAAPA5QAAgIAIAAQAIAAAAAIQAAAHgIAAQgIAAAAgHgABVAuQAAgIAIAAQAIAAgBAIQAAAHgHAAQgIAAAAgHgAgWAqQAAgHAHAAQAIAAAAAHQgBAIgHAAQgIAAABgIgAAwAWQAAgHAIAAQAIAAgBAHQABAIgIAAQgIAAAAgIgAhcATQAAgIAIAAQAIAAAAAIQAAAHgIAAQgIAAAAgHgAgVAAQAAgHAIAAQAIAAgBAHQABAGgIAAQgIAAAAgGgABKgNQAAgIAHAAQAJAAgBAIQABAHgJAAQgHAAAAgHgAAMgOQgBgHAIAAQAIAAAAAHQAAAIgIAAQgIAAABgIgAhRgqQAAgIAIABQAIAAAAAHQAAAIgIAAQgIgBAAgHgAgRgrQABgIAHAAQAIAAAAAIQAAAHgIAAQgHAAgBgHgAAggvQgBgIAJABQAIAAAAAHQAAAIgIAAQgJgBABgHgABHhFQAAgIAIABQAHAAABAHQgBAIgHAAQgIgBAAgHg");
	this.shape_3.setTransform(16,36.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#48BF6B").ss(0.5,1,1).p("AAAACQAAgCAAgBAAAACIAAAA");
	this.shape_4.setTransform(14,23.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#729E83").ss(0.5,1,1).p("AAXhcIgMAEIgZhBIAKgFgAABhSIgFADIgahDIAGgCgAgtiJIAUBEIAKgFIgXhDgAgEjHIA2CIQgPAIgSAHQgGACgFABQgOAEgUACQASADARgCQAHgCAJgCQAUgFAWgLIg5iFQgIgJgEABgAAHgmIABAAQAAAQADAtQAAAGAAAGQACABAAAEQAIgDAJAAQgBgHAAgIQgDgegDgiAApDHQgVAEgPgHIgFiZQAGgCAGgBAAeAlQAGAAAFACIARCaQgIAEgJACAgcgnIgkh3QAZghAjgI");
	this.shape_5.setTransform(12.8,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CBE7D2").s().p("AgHAyQgHgWgGgtIgBgzIAAgJQAJgCAIAAQAEAAAFABIASCZIgRAFQgGgKgHgUg");
	this.shape_6.setTransform(16.3,31.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B4DCBF").s().p("AgOBLIgFiXIAMgDIAAAAIAAAJIABAzQAGAtAGAWQAHAUAHAKIgOACQgKAAgKgFg");
	this.shape_7.setTransform(14.9,32);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A6A6A6").s().p("AAAACIAAgDQAAAAAAABQAAAAAAAAQAAAAAAAAQAAABAAABg");
	this.shape_8.setTransform(14,23.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADDABE").s().p("AgFAlIgBgMIgDg9IgBgBIAOgDIAGBAIABAPQgIAAgHACQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAg");
	this.shape_9.setTransform(14.6,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A5AE95").s().p("AguBPQAUgCAQgFIAKgDQARgGAPgJIg3iFQAGgBAIAIIA4CDQgWALgVAGIgNADIgRABQgKAAgKgBg");
	this.shape_10.setTransform(14.6,8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9C0AD").s().p("Ag4gmQAYggAhgJIA5CGQgQAJgSAGIgKADQgOAEgUACgAgmgRIAUBCIAKgFIgWhBgAgWgaIAXBCIAIgEIgZhAgAgGghIAZBAIAMgFIgdhAg");
	this.shape_11.setTransform(12,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#808080").ss(0.5,1,1).p("AAsiHQgCAAgCgBQgRgFgNAEQgKADAQATQAOAMASADQAIABAJAAQAdgDgTgPQgQgMgPgGgAhBCpQABAAABgBQABAAABAAQAIgEADgRQARh9AhiPQAkAoA2gPQADgWgJgUQgJgXgXgGQgWgFgVAQQgJAHgFAJQgCADgCADQgFAJgDALQAAAAgBABQgRApgdBZQgpCAAZASQAIAGAHAAg");
	this.shape_12.setTransform(27.3,24.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B7B7B").s().p("AgOAQIAHgKQAFgHgQgPQAPAFAOALQATAPgdACIgCAAIgNgBg");
	this.shape_13.setTransform(33.7,12.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBBBBB").s().p("AhICLQAAgTAHghQAHggAJgOQAIgNgJBEIAAAFIgFAgQgCAUgHAAQgIAAAAgOgAA7iFQgHgCAAgFQAAgLAJAAQAMAEAAAJQAAAHgHAAgAAmiTQAAgFAFAAQAEAAAAAFQAAAEgEAAQgFAAAAgEg");
	this.shape_14.setTransform(27.5,24.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A6A6A6").s().p("AhTCLQgBhTBEi+IAEgGQAHgJAIgHQAUgQAWAFQAXAGAKAXQAJAUgEAWQg2APgkgoQggCPgSB9QgDARgHAEIgDAAIgCABQgLgMAAgSgAg2ApQgJAOgHAgQgHAhAAATQAAAOAIAAQAHAAACgUIAFggIAAgFQAIg5gFAAIgCACgAAEiJQgLADARATQANAMASADQAIABAJAAQAdgDgTgPQgPgMgPgGIgFgBQgJgDgIAAQgHAAgFACgAAviMQAAAFAHACIAHACQAHAAAAgHQAAgJgMgEQgJAAAAALgAAhiTQAAAEAFAAQAEAAAAgEQAAgFgEAAQgFAAAAAFg");
	this.shape_15.setTransform(28,24.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8C8C8C").s().p("Ag/CUQgZgRApiBQAdhYARgqIABgBQABgLAFgIQhCC9AABTQAAASAMAMIgBAAQgGAAgIgGgAAhiCQgSgTAMgDQANgDARAEIAEACQAQAPgFAJIgHAKQgSgCgOgNg");
	this.shape_16.setTransform(25.6,26.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#A48D5B").ss(0.5,1,1).p("AhbiFQgKALAOAnQABAAAAABQAPAlATAMQAVALAQgFIBJCxQAjgFADgWIhgifQAIgKAEgWQAEgVgNgXQgMgWgVgJQgUgJgQAEQgOAEgLALgAhQhVQgIgTAAgKQABgMAGgDQAHgEANAKQAOAKAOAVQAEAFADAHQAJAOACANQACATgOABQgOABgMgMQgMgLgMgYQgCgDgBgDg");
	this.shape_17.setTransform(9.7,25.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AF9C72").s().p("AgEARQgMgMgMgVIgDgGQAJgGAQACQAPABAMAHQAJAOACAMQACATgOAAIgCAAQgNAAgJgKg");
	this.shape_18.setTransform(4.8,18.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A79261").s().p("AACAQQgPgBgJAFQgIgTAAgIQABgMAHgDQAGgEANAKQAMAKAPATIAHAMQgMgHgRgCg");
	this.shape_19.setTransform(3.8,14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C2B492").s().p("AgPgbQgQAFgVgLQgTgMgPglIgBgBQgOgnAKgLQALgLAOgEQAQgEAUAJQAVAJAMAWQANAXgEAVQgEAWgIAKIBgCfQgDAWgjAFgAhRiBQgGADgBAMQAAAKAIATIADAGQAMAYAMALQAMAMAOgBQAOgBgCgTQgCgNgJgOIgHgMQgOgVgOgKQgKgIgGAAIgEACg");
	this.shape_20.setTransform(9.7,25.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,36.5,48.2);


(lib.ToasterOven = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#69531F").ss(0.5,1,1).p("AAEgDQACADAAAAQAAADgCABQgCACgCAAQgBAAgCgDQgCgBAAgCQAAgBACgBQACgDABAAQADAAABACg");
	this.shape.setTransform(46.4,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B6A830").s().p("AgDAEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQACgDABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_1.setTransform(46.4,49.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#69531F").ss(0.5,1,1).p("AAAgFQADABABABQACADAAAAQAAADgCABQgCACgCAAQgBAAgCgCQgCgCAAgCQAAgBACgBQACgCABgBg");
	this.shape_2.setTransform(38.9,50.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B6A830").s().p("AgDADQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQACgCABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_3.setTransform(38.9,50.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#69531F").ss(0.5,1,1).p("AAAgFQADAAABACQACACAAABQAAACgCACQgCABgCABQgBgBgCgCQgCgCAAgBQAAgBACgCQACgCABAAg");
	this.shape_4.setTransform(24.7,51.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B6A830").s().p("AgDADQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQACgBABgBQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_5.setTransform(24.7,51.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#69531F").ss(0.5,1,1).p("AAAgFQADABABABQACADAAAAQAAADgCABQgCACgCAAQgBAAgCgCQgCgCAAgCQAAgBACgBQACgCABgBg");
	this.shape_6.setTransform(17.4,51.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B6A830").s().p("AgDADQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAAAQACgDABAAQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_7.setTransform(17.4,51.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#69531F").ss(0.5,1,1).p("AAAgFQADAAABACQACACAAABQAAACgCACQgCACgCAAQgBAAgCgDQgCgBAAgCQAAgBACgBQACgDABAAg");
	this.shape_8.setTransform(53.7,49);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6A830").s().p("AgDAEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQACgCABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAg");
	this.shape_9.setTransform(53.7,49);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#69531F").ss(0.5,1,1).p("AAAgFQACAAACADQABABABABQAAACgCADQgCABgCAAQgBAAgCgDQgCgBAAgCQAAgBACgCQABgCACAAg");
	this.shape_10.setTransform(10.4,51);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B6A830").s().p("AgDADQAAAAgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAAAAAQACAAACACIACADQAAACgCACQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBgBgCgCg");
	this.shape_11.setTransform(10.4,51);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#69531F").ss(0.5,1,1).p("AAAgFQADAAABACQACACAAABQAAACgCACQgCACgCAAQgBAAgCgDQgCgBAAgCQAAgBACgBQACgDABAAg");
	this.shape_12.setTransform(31.4,51);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B6A830").s().p("AgDADQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBQACgCABAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIACADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEACQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_13.setTransform(31.4,51);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#666666").ss(0.5,1,1).p("AA5AEQg2gYg7Abg");
	this.shape_14.setTransform(28.9,38.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9D9D9D").s().p("AA5AEIhxADQA7gbA2AYg");
	this.shape_15.setTransform(28.9,38.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#951E1E").ss(0.5,1,1).p("AAAgNQAEgBAFAEQAEAEAAAGQAAAFgDAEQgEAFgGAAQgDAAgEgEQgFgEAAgGQAAgEAEgFQADgEAFAAg");
	this.shape_16.setTransform(50.5,37.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E35757").s().p("AgCACIgBgCQABgDACAAQACAAABAEQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_17.setTransform(51,37.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC2222").s().p("AgHAKQgFgEAAgGQAAgEAEgFQADgEAFAAQAEgBAFAEQAEAEAAAGQAAAFgDAEQgEAFgGAAQgDAAgEgEgAAAgCIABACQAAAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAgBQgBgGgDAAQgEAAAAAFg");
	this.shape_18.setTransform(50.5,37.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#666666").ss(0.5,1,1).p("AgQACQgCgHAFgHQAEgHAIgBQAFgBAGAFQAGAGABAJQACAGgFAHQgEAHgHACQgGABgGgGQgGgFgBgJg");
	this.shape_19.setTransform(50.1,38);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#808080").s().p("AgJAQQgGgFgBgJQgCgHAFgHQAEgHAIgBQAFgBAGAFQAGAGABAJQACAGgFAHQgEAHgHACIgCAAQgFAAgFgFg");
	this.shape_20.setTransform(50.1,38);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#3F7074").ss(0.5,1,1).p("AAKAUIgRAGQgMgJgEgPQgEgNAKgJIASgFQACAAACAAIAAAAQAHAAAGAHQAGAHABAJQABAIgEAHQgDADgDACQgCABgBABgAABgZQgCACgDAFQgEAHABAJQABAIAFAHQAFAHAGAAQACAAABAA");
	this.shape_21.setTransform(52.6,43.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6DADB4").s().p("AACAXQgFAAgGgHQgGgHgBgJQgBgIAEgHQAEgFAEgCIADAAIABAAQAFAAAGAHQAGAHABAIQABAJgFAHIgGAFIgCACIgDAAg");
	this.shape_22.setTransform(53.4,43.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#52969C").s().p("AgPACQgEgNAJgKIATgEQgEACgEAFQgCAGABAKQAAAIAFAGQAGAIAHgBIAAABIgSAGQgLgJgEgPg");
	this.shape_23.setTransform(51.8,43.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#B1BA9A").ss(0.5,1,1).p("Ah5AoQgMAAgNgBIgPhEIExgLIAHAcIALApQgWACgVACQgSABgRABQgIABgIAAQgZACgYABQgcABgeAAQgKABgLAAQgeAAgfgB");
	this.shape_24.setTransform(29.4,44.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#69531F").ss(0.5,1,1).p("ADHhNIAjCNAD1A/IgiiMADbBCIgQhRQgJgbgtgGQhoAAhhACQhVABAFAiIAUBZAj1AvQAoAZAqAF");
	this.shape_25.setTransform(25.1,41.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#69531F").ss(0.7,1,1).p("AC2haQgGgBgGAAQjFgLjIATQgFACgEAEQgBAAAAABQgPAKgOAQQgHAWgBAcQgBAPABATADMAzQAGgBAGgBQAegDAegEIgniAQgcgDgbgBABrA7QAjgCAjgEQAHAAAGgBQAHgBAHAAAiNBBQAGAAAGAAQAtABAtAAQAKgBALAAAgQBBQAbgBAdgBQAZgBAagCQAHAAAHgBAjABAIgjiTAjABcQgygSgegWQgBgJgBgJAiNBBQgaAAgZgBIAAAcQDQAPEEglIAAgc");
	this.shape_26.setTransform(28,43.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5E7391").s().p("AhegFIgBgCIgLgSIATgCIAKARIAaAuIgVAAQgPgigHgHgAgYgOIgKgQIAugDIAKAQIAiAxIgxACIgfgwgAAwgIIgGgJIgLgRIAcgBQAEAHAIALIAIAKQAHAHAVAcIgjADIgYgng");
	this.shape_27.setTransform(30.6,44.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C641C").s().p("AglAwIgCgSQAnAZApAFIAAAcQgwgSgegWgAgnAeQgBgTABgPQANAkAoAAIAKAAIgahwIABgBIAHgGIAjCTQgpgFgngZg");
	this.shape_28.setTransform(4.5,43.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#415269").s().p("AiMAoIgQhFIExgKIAHAbQgcgBgeABIgDgBIgHABQgIgLgEgHIgbABIAKARIgBAAIgTAAIgJgQIguADIAJAQIg1AEIgJgRIgTACIAKASQgXACgIAKQgHAIABAXIgZgBg");
	this.shape_29.setTransform(28.9,44.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#4B5E78").s().p("AiNAbIAAAAQgBgWAHgGQAIgLAYgEIABACQAHAKAPAfIgHABIg2gBgAhVgSIA1gFIAgAxIg7ABIgagtgAAOgaIATAAIAAAAIAGAJIAZAnIgQABIgigxgABHgQIgJgKIAHAAIADAAQAfgBAcACIALApIgrAEQgVgbgHgJg");
	this.shape_30.setTransform(31.4,45.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B6A830").s().p("Ai5BOIgMAAIgVhaQgFgiBVgBIDJgCQAuAGAIAcIAQBQIgMABIhHAGIgBAAIgPABIgxADIg5ACIgCAAIgWAAIgkAAIg1AAgAjLgFIAPBFIAZAAIAAAAIA9ABIAVAAIA7gCIAwgCIAQgBIAigDIAsgEIgLgrIgHgagAB9hNIA3ADIAnCAIg7AIg");
	this.shape_31.setTransform(33.6,41.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8E8324").s().p("AjpAWIAAgaIAzACIAMAAIBaAAIAVAAIACAAIA5gCIAygDIAOgBIACAAIBGgGIANgBIAOgCIAMgBIA8gIIAAAbQi4AaieAAQhBAAg9gFg");
	this.shape_32.setTransform(32.1,50);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#9C9127").s().p("Ai0BPIgjiTQDIgSDFAKIAiCOIgOABIgRhQQgIgbgtgGIjJABQhWACAGAhIAUBaIgzgBg");
	this.shape_33.setTransform(26.8,41.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#746A1D").s().p("ADHhGIAMAAIAjCMIgMABgAj1ATQACgbAGgVQAPgQAOgLIAcBwIgJABQgqAAgOgmg");
	this.shape_34.setTransform(25,41);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#BBBBBB").ss(0.3,1,1).p("AAEAMIgEgbIgDAcQAEAFADgGg");
	this.shape_35.setTransform(26.8,31);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgDANIADgcIAEAbQgBABAAABQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgDgDg");
	this.shape_36.setTransform(26.8,31);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#666666").ss(0.4,1,1).p("AAtgHQAHAAAGABQAGAAAGABQAGAAAFAAAAtgHQgGAAgGAAQgIgBgIAAQgIAAgIAAQgGAAgIAAQgHAAgGAAQgIAAgIAAQgGAAgHAAQgGAAgHABQgGAAgGAAIAAAEIAAAKQBQgEBRAHIAAgPAhJAAQBIgDBJAE");
	this.shape_37.setTransform(31.8,31.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#76423D").ss(0.4,1,1).p("ABRAGIACgGABGAGIABgGAAtAAIAAAEAA7AFIAAgFAASADIAAgDAABgBIAAAEAAhAEIAAgIAgNADIAAgEAgaADIgBgKAg3gBIAAAEAgqADIAAgEAhEAEIAAgFAhQAIIgBAAIgBgO");
	this.shape_38.setTransform(31.8,30.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#AAAF94").s().p("AhQAHIAAgKIAAgEIAMAAIANgBIANAAIAQgBIANAAIAOABIAQAAIAQABIAMAAIANABIAMABIALAAIAAAPQhRgHhQAEgABIABIgHgBIgDAAQgrgBgoAAIAAAAIAAAAIg0ABIA0gBIAAAAIAAAAQAoAAArABIADAAIAHABIAAAAg");
	this.shape_39.setTransform(31.8,31.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#706243").ss(0.4,1,1).p("AgGgKIgBgEIAHgEIAAAGQABAAABAAQAGABADAEQADAFAAAFQgCAGgEACQgCACgBAAIABADIgGADIgBgFQgFgBgEgEQgBgCgBgCQgBgDABgCQAAgEACgDQABgBACgBQAAgBABAAgAAAgMIAFAZAgBAOIgFgY");
	this.shape_40.setTransform(15.4,31.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B0894F").s().p("AgKAIIgCgDQgBgDABgCQAAgEACgDIADgDIABgBIAFAYQgFAAgEgFgAAAgNIACAAQAGABADAFQADAFAAAEQgCAGgEADIgDABg");
	this.shape_41.setTransform(15.4,31.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C0A072").s().p("AAAAOIgFgYIgBgEIAGgEIABAGIAGAZIAAADIgHADg");
	this.shape_42.setTransform(15.3,31.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#706243").ss(0.4,1,1).p("AANgBQAAABAAAAQAAAFgEAEQgEAEgFABQgFgBgEgEQgBgBgBgBIgDABIgEgHIAFgBQAAgFAEgEQABgBACgBQADgCADAAQACAAAEACQABABACABQAAAAABABIAEgCIAFAHIgGACIgYAIAAKgIIgXAI");
	this.shape_43.setTransform(19.9,31.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C0A072").s().p("AgSACIAFgCIAXgHIAEgCIAFAHIgGACIgYAIIgDACg");
	this.shape_44.setTransform(19.9,31.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B0894F").s().p("AgJAJIgBgCIAYgIIAAABQAAAFgFAEQgEAEgFABQgFgBgEgEgAgJgJIADgCQADgCADAAQADAAADACIADACIABABIgXAIQAAgFAEgEg");
	this.shape_45.setTransform(19.9,31.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#79831F").ss(0.4,1,1).p("ACQgXQiNgNiVALIgOA4IFBAAg");
	this.shape_46.setTransform(27.9,32);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B3D06A").s().p("AigAfIAOg4QCVgLCNANIARA2g");
	this.shape_47.setTransform(27.9,32);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#666666").ss(0.5,1,1).p("AALgCQAAAAAAgBQAAgBgBgBQgCgCgDgBQgEgCgDACQgBAAgCABQgBABgBABQgBABAAABQgDADABADQACAEAEACQAEACADgBQAEgDADgDQACgEgBgCg");
	this.shape_48.setTransform(47.1,31.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#919191").s().p("AgEAHQgEgCgCgEQgBgCADgEIABgCIAAABQAEAJAJgDQAFAAAAgEQABAEgCACQgDADgEADIgDAAIgEgBg");
	this.shape_49.setTransform(47.1,31.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#9D9D9D").s().p("AgJAAIAAgBIACgCIAEgBQADgCAEACQADABABACIABABIABAAQgBAEgFABIgEABQgGAAgDgGg");
	this.shape_50.setTransform(47.2,31.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#69531F").ss(0.5,1,1).p("AgkgrQACgDAFgCIAggIQAOgEAGAPIAXBCQACAGgBAFQAEAIgYAJQgZAJgGAAQgIAAAAAAQgMABgMgpQgMgnABgJQACgIAJgFgAgFAxIgHAJAgFAxQgGgDgDgIIgYhCQgDgKAFgFAAvAgQgCAGgIACIgiAJQgEABgEgB");
	this.shape_51.setTransform(45.8,28.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#666666").ss(0.5,1,1).p("AgHgXQgJADgDAJQgEAKADAIQAEAKAJAFQAHAFAIgDQAJgDADgJQAEgKgDgIQgEgKgJgFQgIgFgHADgAAPACQAAADgBADQgCAHgGADQgGACgEgEQgGgDgDgIQgCgFACgHQABgCABgCQACgEAEgBQAFgDAGAEQAGADACAIQAAABABACQAAABAAACg");
	this.shape_52.setTransform(45.7,26.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#746A1D").s().p("AgVANIgJAAIAIgKQAEACAGgCIAfgHQAJgCACgGQAEAJgYAHQgWAJgJAAIAAAAg");
	this.shape_53.setTransform(47.5,33.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8E8324").s().p("AgIALQgNgnACgJQABgIAJgFQgFAFAEAKIAVBCQADAJAGACIgHAJIAAAAQgMAAgJgog");
	this.shape_54.setTransform(43,29.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#6FA278").s().p("AgGAIQgGgFgBgDIAAgFQACgEAFgCQAGgCAEAEQAGADACAGIABACIABAGQgCACgFACIgEABQgDAAgGgFgAAEAHQgBAAAAAAQAAABAAAAQgBAAAAABQAAAAABABQAAAAAAABQAAAAABAAQAAAAABAAQAAAAABAAIABgDQAAAAAAgBQAAAAgBAAQAAAAAAAAQAAgBgBAAIgBABgAgBAGQgBAAAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAAAAAIAAgDQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBABgAgIAAQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAABAAAAQAAAAABABQAAAAABAAQAAAAABAAIABgDQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgBAAgAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAABAAIABgCQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAIAAAAg");
	this.shape_55.setTransform(45.8,26.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#649B6F").s().p("AgEANQgHgEgCgHQgDgGADgHIACgDIAAAHQABADAGAEQAGAFAGgCQAGgCABgBIgBAFQgCAHgGACIgFABQgCAAgDgCgAAEABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAABQABAAAAAAQAAAAABAAIgBACIgCAAQAAAAgBAAQAAAAAAAAQAAAAgBgBQAAAAAAAAgAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBAAAAQAAAAAAAAQABABAAAAQAAAAAAABIgBABIAAAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAAAgAgIgGQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIgCADIgBAAQAAAAgBAAQAAAAAAgBQAAAAgBAAQAAgBAAAAgAAAgGQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAIgCADIgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_56.setTransform(45.7,27.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B6A830").s().p("AgJA1QgGgCgDgJIgYhCQgDgKAFgFQADgDAFgBIAggJQAOgEAFAPIAYBCQACAGgBAFQgCAGgJACIghAJIgEABIgFgBgAgMgnQgJADgDAJQgEAKADAKQAEAIAJAFQAIAFAHgDQAJgDAEgIQADgJgDgKQgEgKgJgFQgDgDgGAAIgGABg");
	this.shape_57.setTransform(46.2,28.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#9D9D9D").s().p("AgHAWQgJgFgEgKQgDgIAEgKQADgJAJgDQAHgDAIAFQAJAFAEAKQADAIgEAKQgDAJgJADIgGABQgEAAgFgDgAgFgQQgEABgCAEIgCAEQgCAHACAFQADAIAGADQAEAEAGgCQAGgDACgHIABgGIAAgDIgBgDQgCgIgGgDQgEgCgCAAIgFABg");
	this.shape_58.setTransform(45.7,26.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#666666").ss(0.5,1,1).p("AgNgCQAAAAAAAAQAAgCABgBQACgDADgCQAGgDAEACQACAAACACQACABABABQABACABAAQADAFgBAEQgCAEgFADQgFADgEgBQgGgCgDgFQgDgFABgDg");
	this.shape_59.setTransform(7.5,32.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#9D9D9D").s().p("AgEAHQgGgCgBgEIAAgBIABgBQACgDADgCQAFgCAFABIAEACIADADIAAABQgDAJgJAAIgEgBg");
	this.shape_60.setTransform(7.3,32.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#919191").s().p("AgCAKQgGgCgDgFQgDgDABgEQABAEAGAAQAMAEAEgMIAAgBIACACQADAEgBAEQgCAFgFADQgEABgDAAIgCAAg");
	this.shape_61.setTransform(7.5,32.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#666666").ss(0.5,1,1).p("AAOgPQgDgFgGgBQgFgCgIAEQgHAGgCAJQgBACAAABQAAACgBADQABAEABAEQAEAIAIADQAFACAIgFQAHgFACgKQADgHgEgJQgBgCgBgCgAAIgeQAKADAGALQAGAMgEALQgDANgLAGQgLAIgIgDQgLgDgGgMQgFgLADgKQAEgNAKgIQALgHAJADg");
	this.shape_62.setTransform(8.9,26.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#69531F").ss(0.5,1,1).p("AAqg6QgEgDgGgBIgngIQgTgEgGAUIgXBVQgCAIACAFQACAHAMACIApAIQAGACAGgDQAHgDADgLIAYhVQADgNgHgGgAAWBHQAOAAAMg0QALgygCgLQgDgKgMgGAg3AsQgFALAgAJQAcAJALgBQAKgBABAAIgKgL");
	this.shape_63.setTransform(8.9,29.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#746A1D").s().p("AgLAFQgfgHAEgLQADAIALACIAoAGQAIABAFgCIAKALIgKABIgBAAQgMAAgbgJg");
	this.shape_64.setTransform(7.1,35);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8E8324").s().p("AgVA2QAHgDADgLIAWhWQADgMgHgGQAMAFADALQACAKgLAzQgMAzgMABg");
	this.shape_65.setTransform(12.4,29.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#649B6F").s().p("AgFATQgHgCgEgJIgCgHQACACAIACQAHACAIgHIAIgJQgBgFABgFIACAFQAEAIgDAIQgDAJgHAFQgFAEgDAAIgFgBgAgIAEIgCgEQABAAAAAAQAAAAABAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBAAgAAAACIgBgCQAAgBABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIAAAAgAgCgGIgDgDQABgBAAgBQAAAAABAAQABgBAAAAQABAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAIgBAAgAAHgGIgCgDQABgDADAAQABAAAAABQABAAAAAAQAAABAAABQAAAAAAABQAAABAAAAQgBAAAAABQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_66.setTransform(8.8,26.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#9D9D9D").s().p("AgHAfQgLgDgFgMQgGgLADgKQAEgNALgIQAKgHAJADQALADAFALQAGAMgEALQgDANgKAGQgIAGgGAAIgGgBgAgIgTQgHAGgCAJIgBADIgBAFIACAIQAFAIAHADQAGACAHgFQAHgFACgKQAEgHgFgJIgCgEQgDgFgGgBIgEgBQgDAAgGADg");
	this.shape_67.setTransform(8.9,26.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#6FA278").s().p("AgGAQQgIgCgCgDIAAgHIABgDQACgHAIgGQAFgEAIACQAFABAEAFQgBAFABADIgIAKQgIAGgEAAIgDAAgAgIALIACADQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBABAAQAAgBgBAAQAAAAAAgBQgBAAAAAAIgCAAQgBAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAABgAAAAJIABADQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBAAIgBgBQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAgDAAIADADQAAAAAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAgBAAAAIAAAAQAAAAgBAAQAAAAgBAAQAAABAAAAQgBAAAAAAgAAHAAIACACQABAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgBAAQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_68.setTransform(8.6,25.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B6A830").s().p("AAEBCIgogIQgMgCgCgHQgCgFACgIIAXhVQAGgUATAEIAnAIQAGABAEADQAHAGgDANIgYBVQgDALgHADQgEACgEAAIgFgBgAgHguQgKAHgEANQgDANAFALQAGAKALADQAIADALgIQALgGADgLQAEgNgGgMQgGgMgKgDIgGgBQgHAAgHAGg");
	this.shape_69.setTransform(8.4,28.6);

	this.addChild(this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,21.9,55.2,30.9);


(lib.Timer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#58597C").ss(0.8,1,1).p("AAJgeQAAAEgDADQgCADgEAAQgDAAgDgDQgCgDAAgEQAAgEACgDQADgDADAAQAEAAACADQADADAAAEgAAPAyQgZgGgYghQAAgmAPgZIAsAKIAKACQgMAuADAvQgEgBgHgCQgGgsAQgw");
	this.shape.setTransform(7.3,18);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#686993").s().p("AgHAtQgHgsAOgwIAKACQgKAtABAwIgIgDg");
	this.shape_1.setTransform(9.8,18.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AgGAGQgCgCAAgEQAAgCACgDQADgEADAAQAEAAACAEQADADAAACQAAAEgDACQgCADgEABQgDgBgDgDg");
	this.shape_2.setTransform(7.3,14.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9395A8").s().p("AgdAMQAAgmAPgZIAsAKQgQAxAGAsQgZgGgYgigAgBgjQgCADAAADQAAAFACACQABADAFABQAEgBACgDQADgCAAgFQAAgDgDgDQgCgEgEAAQgFAAgBAEg");
	this.shape_3.setTransform(6.8,17.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#686993").ss(0.8,1,1).p("AhKAHQAFgFAGAAQAGAAAEAFQAFAEAAAHQAAAGgFAEQgEAFgGAAQgGAAgFgFQgEgEAAgGQAAgHAEgEgABLgcQADADABAEQAAABAAABQAAAFgEAEQgEAEgGAAQgHAAgEgEQgEgEAAgFQAAgBABgBQAAgEADgDQAEgEAHAAQAGAAAEAEgAgDgEQADgEAFAAQAFAAAFAEQAEAEAAAEQAAAGgEAEQgFAFgFAAQgFAAgDgFQgEgEAAgGQAAgEAEgEg");
	this.shape_4.setTransform(26.8,30);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AhKAcQgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAHQAAAGgFAEQgEAFgGAAQgGAAgFgFgAgDAOQgEgEAAgGQAAgEAEgEQADgEAFAAQAFAAAFAEQAEAEAAAEQAAAGgEAEQgFAFgFAAQgFAAgDgFgAA2gKQgEgEAAgFIABgCQAAgEADgDQAEgEAHAAQAGAAAEAEQADADABAEIAAACQAAAFgEAEQgEAEgGAAQgHAAgEgEg");
	this.shape_5.setTransform(26.8,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E8C9F").s().p("AhKAcQgEgEAAgGQAAgHAEgEQAFgFAGAAQAGAAAEAFQAFAEAAAHQAAAGgFAEQgEAFgGAAQgGAAgFgFgAgDAOQgEgEAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAFAEAAAEQAAAGgFAEQgEAFgFAAQgFAAgDgFgAA2gKQgEgEAAgFIAAgCQABgEADgDQAEgEAGAAQAGAAAFAEQADADABAEIAAACQAAAFgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_6.setTransform(26.1,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#58597C").ss(0.8,1,1).p("AglBLQgBgCgBgBQgag0AQgXQhJgagogtQgWAUATAtQAjAmBXAsgAgxgDQABAAABABQB/gIBOgyQAaAPgOAzQhQAzh/AS");
	this.shape_7.setTransform(17.6,29);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#686993").s().p("Ag5gIQgTgtAWgUQAoAtBHAaQgQAWAaA1IgEABQhVgsgjgmg");
	this.shape_8.setTransform(6.8,28.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B9B7D0").s().p("AhiBBQgbg1ARgWIACAAQB+gHBOgyQAaAOgNA1QhQAyiAASIgBgDg");
	this.shape_9.setTransform(23.5,29.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgBAAIACAAIABABg");
	this.shape_10.setTransform(13.4,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A3628A").ss(0.8,1,1).p("AgGhyIA0DPQgFAEgFAEQgSAMgfACAgPBzIgdgMIAOi/IABgYIAXgCIgJDlg");
	this.shape_11.setTransform(23.6,11.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(102,0,102,0.102)").s().p("AgDhQIARgPIgOC+IgNABg");
	this.shape_12.setTransform(18.9,12.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CF7CAE").s().p("AgRBnIANi/IACgYIAVgCIgJDlIAAAAg");
	this.shape_13.setTransform(20.9,11.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAAAAIABAAIgBAAg");
	this.shape_14.setTransform(22,23.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FBC2CA").s().p("AgeBzIAJjlIAAAAIA0DPIgKAIQgRAMgfACg");
	this.shape_15.setTransform(25,11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A16188").ss(0.8,1,1).p("ABYhWIAFgKAguCCIABACQCLgKBCgxQgIhKgbg5QghhJgsAAIAAAAQAAAAgBAAIgBAAQgBAAgBABIgBAAQgoAEgZBGQgcBJADBoQAAAFABAEgABlgxIAIgGABwgQIAOgLACDBKIARgGAB5AdIAMgDAgyCBQg8gSgogqQgFgFgEgFQADgXAGgWQAmiECbgMAgjA7IALAAAgPgoIAIAGAgfAHIAOAFAAAhWIAJAJAgyCBQACABACAAAgjBxIATgC");
	this.shape_16.setTransform(17.3,15.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CF7CAE").s().p("AhbBGIgJgKQADgYAGgVQAmiECagMQgoAEgaBGQgdBJAEBoIgDAIQg6gTgogpg");
	this.shape_17.setTransform(11.4,15.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FBC2CA").s().p("AhlCCIAAgJQgEhoAchIQAbhHAogEIABAAIACgBIABAAIABAAIABAAQApAAAhBKQAbA4AIBKQhCAwiKALgAhaBxIATgCgABMBJIARgFgAhaA7IAMAAgABCAdIAMgDgAhHALIgPgEgAA5gQIAOgLgAg+giIgIgGgAAugwIAIgHgAgshNIgKgJgAAhhWIAGgKgAhoCCIADgJIAAAJIgDAAg");
	this.shape_18.setTransform(22.7,15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#7B4A68").ss(0.5,1,1).p("AhAAmQAAgDAAgEQAAgKAGgFQAHgHAIAAQAJAAAFAHQAGAFgBAKQgBAJgGAGQAAAAgBAAQgCADgDACQgEABgFAAQgIAAgFgGQgDgDgBgDQAAgBgBgBgAiQgNQADgCACgDQAGgFABgIQABgIgEgGQgFgGgHgBQAAAAgBAAAiQgNQgEABgDgBQgIAAgEgGQgFgHABgIQABgIAGgFQAGgFAGAAACGgcQABgCABgBQADgDADgBQADgCAEAAQAIAAAFAEQAGAEAAAHQAAACAAACQgBAEgEADQgFAFgHABQgIAAgGgEQgFgEAAgHQgBgFADgDg");
	this.shape_19.setTransform(18.3,33.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B96F9B").s().p("AhAAuQgDgDAAgEIAIgBQAKgCAIAGIABACIAAABIgBACIgBABIAAAAIgBABIACABQgFACgEAAQgIAAgGgGgAiVgOQgGgCgEgGQgHgIAIgIQAGgIAAgEIAAgBIABAAQAHAAAEAGQAFAHgBAHQgBAIgGAFIgGAFgACSgQQgCgCgCgCQgFgHABgGQgEACgBAEIgDgBIACgDIAFgEIAIgCQAHAAAGAEQAFAFAAAGIAAAEIgBAAQgEADgFAAQgDAAgEgBg");
	this.shape_20.setTransform(18.7,33.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B5375").s().p("AglAzIAFgEIAAACQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCgBgAgmAyIAAgBIABgBIAAAAIABgCIABgBIgCgCQgHgGgLACIgIABIgBgBIABABIAAAAIgBAAIAAgBIAAgHQAAgKAGgGQAHgGAIAAQAJAAAFAGQAGAGgBAKQgBAJgGAFIgBABIgFAEIgBgBgAggAvIAAAAgACJgIQgFgEAAgHQgBgFADgDIADABQABgFAEgCQAAAHAFAHQABACADABQAJAEAGgFIACAAQgBAEgEADQgFAFgHABIgCAAQgGAAgGgEgAiXgMQgIAAgEgGQgFgHABgIQABgIAGgFQAGgFAGAAIAAABQABAFgHAIQgHAIAGAIQAFAGAFACIABABIgFAAIgCAAg");
	this.shape_21.setTransform(18.3,33.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#7B4A68").ss(0.8,1,1).p("AAMgCQgBABgBABQgFACgFAAQgFAAgEgCQgBgBgBgB");
	this.shape_22.setTransform(8.1,12.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#330000").ss(0.8,1,1).p("AgLALQgCgEAAgEQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAEgCAE");
	this.shape_23.setTransform(8.1,11.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#330000").ss(0.5,1,1).p("AAtANIAPgNAAhgQIAHgKAgggSIAHAJAg7APIATAM");
	this.shape_24.setTransform(22,8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#7B4A68").ss(0.5,1,1).p("ABCgGIASgJAA5gwIAPgMAgGApIgBAAIgCAAgABIAZIAXgEAhdAPIAZACAhRguIAUAGAhcA9IAXgD");
	this.shape_25.setTransform(22.9,19);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B96F9B").s().p("AgJAAIgCgCIAXAAIgDACQgEACgFAAQgFAAgEgCg");
	this.shape_26.setTransform(8.1,12.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#477DCE").s().p("AgLALQgCgEAAgEQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAEgCAEg");
	this.shape_27.setTransform(8.1,11.4);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.1,38.7);


(lib.Stove = function() {
	this.initialize();

	// extras
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#F4970B").ss(1,1,1).p("AgovKIBReV");
	this.shape.setTransform(6.9,74.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E7E7E7").ss(0.5,1,1).p("ACHgJQmQAOCrAFQBXACCDgIQBEgFiQABQjKAIDDgE");
	this.shape_1.setTransform(64.1,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#958B96").ss(0.5,1,1).p("ADfgIQgBABgEACQgOADguACQhCAFhcACQhbADhBgCQgdgCgPgBQgLgCgFgBQgFgBAAgBIAGAMQAEACAKABQAQACAdABQBCACBbgCQBcgCBBgFQAvgEAOgEgAjdAAQgBAAAAAAQAAgDAVgCQAQgDAdgCQBCgFBagDQBJgBA3ABQAQAAAOABQBBACAAAGQAAAAAAAB");
	this.shape_2.setTransform(64.8,23.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A6A6A6").s().p("AicANIgtgDIgOgDIgHgKIAGACIAQABIArADQBCACBbgDQBcgCBCgDQAugEAOgDIAFgDIgFANQgNACgvAEQhCAFhcACIhUABIhIgBg");
	this.shape_3.setTransform(64.8,24.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBCB9").s().p("AicANIgsgDIgQgDIgFgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgDAVgBQAQgCAdgCQBCgGBagCQBJgCA3ACIAeAAQBBACAAAGIAAABIgFADQgOACguAEQhCAFhcACIhdABIg/gBgAg6AHQBJAABngGIADgBIAAAAIADAAIAAAAIACAAIABAAQAmgDhPAAIgBAAIAAAAIgMAAIggAAQicAGBUgBIAIAAIABAAIAmgBIAIAAIAFAAIAFAAIgFAAIgFAAIgIAAIgmABIgBAAIgIAAQhUABCcgGIAgAAIAMAAIAAAAIABAAQBPAAgmADIgBAAIgCAAIAAAAIgDAAIAAAAIgDABQhnAGhJAAIgBAAIAAAAIgYAAIgDAAIgMAAIgDAAQgzgCAAgCQABgEEXgLQkXALgBAEQAAACAzACIADAAIAMAAIADAAIAYAAIAAAAIABAAg");
	this.shape_4.setTransform(64.8,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#E7E7E7").ss(0.5,1,1).p("ACHgJQmQAOCrAFQBXACCDgIQBEgFiQABQjKAIDDgE");
	this.shape_5.setTransform(50.1,19.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#958B96").ss(0.5,1,1).p("AjdAAQgBAAAAAAQAAgDAVgCQAQgDAdgCQBCgFBagDQBJgBA3ABQAQAAAOABQBBACAAAGQAAAAAAABIgEALQgOAEgvAEQhBAFhcACQhbAChCgCQgdgBgQgCQgKgBgEgCgADfgIQgBABgEACQgOADguACQhCAFhcACQhbADhBgCQgdgCgPgBQgLgCgFgBQgFgBAAgB");
	this.shape_6.setTransform(50.8,20);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A6A6A6").s().p("AicANIgtgDIgPgDIgFgKIAEACIARABIAsADQBBACBbgDQBcgCBBgDQAvgEAOgDIAEgDIgDANQgOACgvAEQhCAFhbACIhVABIhIgBg");
	this.shape_7.setTransform(50.8,20.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDBCB9").s().p("AicANIgsgDIgQgDIgFgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgDAVgBQAQgCAdgCQBCgGBagCQBJgCA3ACIAeAAQBBACAAAGIAAABIgFADQgOACguAEQhCAFhcACIhdABIg/gBgAg6AHQBAAABXgFIAGAAIAHgBIADAAIAHAAIACAAIACgBIABAAQAygDhVAAIAAAAIgBAAIgmAAIgGAAIgGAAIgSABQh7AEBHAAIA6gBIABAAIAEAAIAGAAIgGAAIgEAAIgBAAIg6ABQhHAAB7gEIASgBIAGAAIAGAAIAmAAIABAAIAAAAQBVAAgyADIgBAAIgCABIgCAAIgHAAIgDAAIgHABIgGAAQhXAFhAAAIgBAAIAAAAIgqAAQgzgCAAgCQABgEEXgLQkXALgBAEQAAACAzACIAqAAIAAAAIABAAg");
	this.shape_8.setTransform(50.8,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E7E7E7").ss(0.5,1,1).p("ACHgJQmQAOCrAFQBXACCDgIQBEgFiQABQjKAIDDgE");
	this.shape_9.setTransform(139.9,19.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#958B96").ss(0.5,1,1).p("ADfgIQgBABgEACQgOADguACQhCAFhcACQhbADhBgCQgdgCgPgBQgLgCgFgBQgFgBAAgBIAGAMQAEACAKABQAQACAdABQBCACBbgCQBcgCBBgFQAvgEAOgEgAjdAAQgBAAAAAAQAAgDAVgCQAQgDAdgCQBCgFBagDQBJgBA3ABQAQAAAOABQBBACAAAGQAAAAAAAB");
	this.shape_10.setTransform(140.5,20.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A6A6A6").s().p("AicANIgtgDIgOgDIgGgKIAEACIAQABIAsADQBCACBbgDQBcgCBBgDQAvgEAOgDIAEgDIgEANQgNACgvAEQhBAFhcACIhVABIhIgBg");
	this.shape_11.setTransform(140.6,21.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BDBCB9").s().p("AicANIgsgDIgQgDIgFgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgDAVgBQAQgCAdgCQBCgGBagCQBJgCA3ACIAeAAQBBACAAAGIAAABIgFADQgOACguAEQhCAFhcACIhdABIg/gBgAg7AHQBKAABngGIADgBIAAAAIADAAIAAAAIACAAIAAAAQAogDhQAAIgBAAIAAAAIgMAAIggAAQicAGBUgBIAIAAIABAAIAmgBIAIAAIAFAAIAFAAIgFAAIgFAAIgIAAIgmABIgBAAIgIAAQhUABCcgGIAgAAIAMAAIAAAAIABAAQBQAAgoADIAAAAIgCAAIAAAAIgDAAIAAAAIgDABQhnAGhKAAIAAAAIAAAAIgYAAIgDAAIgMAAIgDAAQgzgCAAgCQABgEEXgLQkXALgBAEQAAACAzACIADAAIAMAAIADAAIAYAAIAAAAIAAAAg");
	this.shape_12.setTransform(140.5,20.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#AC8E4A").ss(0.5,1,1).p("AAMgLQAAABACABQAFAFgBAFQAAAHgGAEQgGAEgGAAQgHgBgFgGQgCgBAAAAQgDgFAAgEQABgGAGgFQAGgEAFABQAGABAFADg");
	this.shape_13.setTransform(51.6,-19.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#DBD59B").s().p("AAAAFQgCAAgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBABAAQACgCABABQADAAACACQABAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_14.setTransform(51.2,-20.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BFB451").s().p("AgCAOQgGgBgEgDQgDgFAAgFQABgFAGgEQAGgEAFABQAGAAAFAEQACAEAAAEQgBAGgFAEQgGAEgEAAIgCAAgAgFgFQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAAAABAAQAAAAAAAAQABAAAAABQACACADAAQABABACgCQABgBAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAgBQAAAAgBgBQAAAAAAAAQAAgBgBAAQgCgCgBAAIgBgBQAAAAgBABQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_15.setTransform(51.4,-20.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A3983A").s().p("AgBAOQgIgBgFgGIgCgBQAEADAHAAQAFABAGgEQAGgFAAgEQABgGgDgEIACACQAFAFAAAGQgBAGgGAEQgFAEgFAAIgBAAg");
	this.shape_16.setTransform(51.8,-19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C66B94").ss(0.5,1,1).p("AgOAIQgDgFAAgEQABgGAGgFQAGgEAGABQAFABAFADQABABABABQAFAFgBAFQAAAHgGAEQgGAEgGAAQgHgBgFgGQgBAAgBgBg");
	this.shape_17.setTransform(51.9,-14.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D687B7").s().p("AgOAHIgCgBQAEACAHABQAFABAGgEQAGgFAAgFQABgFgDgEIACACQAFAFgBAGQAAAFgGAEQgGAFgFAAQgIgBgFgGg");
	this.shape_18.setTransform(52.1,-13.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EBC7DD").s().p("AgEADQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQgBAAABgBQAAAAAAAAQAAgBABAAQAAAAABgBQACgCABABQADAAACACQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAAAgBABQAAABAAAAQAAABgBAAQAAAAgBABQgCABgCAAQgCAAgCgCg");
	this.shape_19.setTransform(51.6,-14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E0A7CA").s().p("AgCAOQgGgBgEgDQgEgFABgFQAAgFAHgEQAFgEAGABQAGAAAFAEQACAEAAAEQgBAGgFAEQgGAEgEAAIgCAAgAgFgFQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAABQACACADAAQABAAACgBQABgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgBAAIgBgBQAAAAgBABQgBAAAAAAQAAAAgBAAQAAABgBAAg");
	this.shape_20.setTransform(51.8,-14.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#9AB432").ss(0.5,1,1).p("AALgLQgEgDgGgBQgFAAgGAEQgGAEgBAHQAAADADAFAALgLQABABACABQAFAGgBAEQAAAHgGAEQgGAFgGgBQgHgBgFgFQgCgCAAAA");
	this.shape_21.setTransform(44.6,-13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#A8CF49").s().p("AgBAOQgIgBgFgFIgCgCQAEADAHAAQAFABAGgEQAFgEABgFQABgFgDgFIACACQAFAGAAAFQgBAGgGAEQgFAEgFAAIgBAAg");
	this.shape_22.setTransform(44.7,-13.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDE89F").s().p("AAAAFQgCAAgCgCQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAgBABAAQACgBABAAQADAAABACQABABAAAAQABAAAAABQABAAAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_23.setTransform(44.2,-14.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B5D764").s().p("AgCANQgGAAgEgDQgDgFAAgFQABgFAGgEQAGgEAFAAQAGABAEADQADAFAAAEQgBAGgGAEQgEAEgFAAIgCgBgAgFgFQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAABAAQAAAAABAAQAAAAABAAQABADADAAQABAAACgCQABAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgCgCgBgBQgDAAgCACg");
	this.shape_24.setTransform(44.4,-13.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#8A7586").ss(0.5,1,1).p("AALgLQgEgDgGgBQgFAAgGAEQgGAEgBAHQgBADAEAEQAAABABACQAFAFAIABQAFAAAGgEQAGgEABgHQABgFgFgFQgCgBgBgBg");
	this.shape_25.setTransform(44.1,-19.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AEACCA").s().p("AAAAFQgCAAgCgCQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAgBQAAAAABAAQAAgBABAAIADgBIAFACQABAAAAABQAAAAAAABQABAAAAAAQAAAAgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAIAAAAg");
	this.shape_26.setTransform(43.7,-20.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8B88B3").s().p("AgCANQgGAAgEgEQgEgEABgFQABgFAGgEQAGgEAFAAQAGABAEADQADAEAAAFQAAAFgHAFQgEAEgFAAIgCgBgAgFgGQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAQACADADAAQABAAACgCQABAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgBIgDgCIgFABg");
	this.shape_27.setTransform(43.9,-20);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#7C78A9").s().p("AgCAOQgHgBgFgFIgCgDQAEAEAGAAQAGABAGgEQAGgFAAgEQABgGgDgEIACACQAFAFgBAGQAAAGgGAEQgFAEgFAAIgCAAg");
	this.shape_28.setTransform(44.2,-19.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#4DA0C4").ss(0.5,1,1).p("AgOAIQgDgFAAgEQABgGAGgEQAGgEAFAAQAGABAEADQABABACABQAFAGgBAEQAAAHgGAEQgGAFgGgBQgHgBgFgFQgCgBAAgBg");
	this.shape_29.setTransform(35.7,-19.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#57B4CA").s().p("AgBAOQgIgBgFgGIgCgCQAEADAGABQAGABAGgEQAFgFABgEQABgGgDgEIACACQAFAFAAAGQgBAGgGAEQgFAEgFAAIgBAAg");
	this.shape_30.setTransform(35.9,-19);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B1DDE7").s().p("AAAAFQgCAAgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAAAABgBQACgBABAAQADAAACACQAAABABAAQAAABAAAAQAAAAABAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIAAAAg");
	this.shape_31.setTransform(35.3,-19.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#7EC5D6").s().p("AgCANQgHAAgDgDQgDgFAAgFQABgFAGgEQAGgEAFAAQAGABAEADQADAFAAAEQgBAGgGAEQgFAEgEAAIgCgBgAgFgFQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABgBABQAAAAABAAQAAAAAAAAQABAAAAAAQACADADAAQABAAACgCQABAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgBgBQgDAAgCACg");
	this.shape_32.setTransform(35.5,-19.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D6973A").ss(0.5,1,1).p("AALgKQgEgEgGgBQgFAAgGAEQgGAEgBAHQAAADADAFQAAABACABQAFAFAHABQAGABAGgFQAFgEABgHQABgEgFgGQgCAAgBgBg");
	this.shape_33.setTransform(36.3,-12.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E1AA59").s().p("AgBAOQgIgBgFgGIgCgBQAEACAGABQAGABAGgEQAFgFABgEQABgGgDgEIACACQAFAFAAAGQgBAGgGAEQgFAEgFAAIgBAAg");
	this.shape_34.setTransform(36.5,-12.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F2DBA6").s().p("AgEADQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAABgBQACgCABABQADAAACACQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAgBABQAAABAAAAQgBABAAAAQAAAAgBABQgCABgCAAQgCAAgCgCg");
	this.shape_35.setTransform(35.9,-13.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E7B976").s().p("AgCAOQgHgBgDgDQgDgFAAgFQABgFAGgEQAGgEAFAAQAGABAEAEQADAEgBAEQAAAGgGAEQgFAEgFAAIgBAAgAgFgFQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQABAAAAABQACACADAAQABAAACgBQABgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBAAAAgBQgCgCgBAAIgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABQgBAAAAAAg");
	this.shape_36.setTransform(36.1,-13);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#7B6ABF").ss(0.5,1,1).p("AgOAHQgDgEAAgDQABgHAGgEQAGgEAFAAQAGABAFADQAAAAAAABQABABABAAQAFAFgBAFQAAAHgGAEQgGAEgGAAQgHgBgFgFQgCgCAAgBg");
	this.shape_37.setTransform(28.4,-12.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8B7DC6").s().p("AgBANQgIgBgFgFIgCgCQAEADAHABQAFABAGgEQAGgFAAgEQABgFgCgFIABACQAFAFAAAGQgBAGgGAEQgFAEgFAAIgBgBg");
	this.shape_38.setTransform(28.6,-11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CCCAE8").s().p("AAAAFQgCAAgCgCQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgBABAAIAFACQABAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_39.setTransform(28,-12.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A69BD2").s().p("AgCANQgGAAgEgEQgDgEAAgFQABgFAGgEQAGgEAFAAQAGABAFADIAAABQACAEAAAEQgBAGgFAEQgFAEgFAAIgCgBgAgFgFQgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABABAAQAAAAAAAAQABAAAAABQACACADAAQABAAACgCQABAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAgBgBIgDgCQgDAAgCACg");
	this.shape_40.setTransform(28.2,-12.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#6F9C5A").ss(0.5,1,1).p("AgKgMQAGgEAFABQAGABAFADQAAABACABQAFAFgBAFQAAAHgGAEQgGAEgGAAQgHgCgFgFQgCgBAAgBQgDgEAAgEQABgHAGgEg");
	this.shape_41.setTransform(27.7,-18.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BFDE8F").s().p("AgEADQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQACgCABABQADAAACACQABAAAAABQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEQgCABgCAAQgCAAgCgCg");
	this.shape_42.setTransform(27.3,-19);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#927265").ss(0.5,1,1).p("AALgLQgEgDgFgBQgGgBgGAEQgGAEgBAHQAAAEADAEQABABABABQAFAFAHACQAGAAAGgEQAFgEABgHQABgFgFgFQgCgBgBgBg");
	this.shape_43.setTransform(13.1,-11.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B1665F").s().p("AgOAIIgCgDQAEAEAGABQAGAAAGgEQAGgFAAgEQABgGgDgEIADACQAEAFAAAGQgBAGgGAEQgGAEgFAAQgIgBgFgFg");
	this.shape_44.setTransform(13.2,-11);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#D2A8A4").s().p("AgEADQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAAAAAQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQACAAADACQAAAAABABQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBABIgEABQAAAAgBAAQgBAAAAgBQgBAAAAAAQAAgBgBAAg");
	this.shape_45.setTransform(12.7,-11.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BA7770").s().p("AgCAOQgGgBgEgDQgDgFAAgFQABgFAGgEQAGgEAGABQAFAAAEADQADAEAAAFQgBAFgGAFQgFAEgFAAIgBAAgAgFgFQAAAAgBAAQAAABgBAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQABABAAAAQABAAABAAIAEgBQAAgBABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAQgCgCgBAAIgCgBIgDACg");
	this.shape_46.setTransform(12.9,-11.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#AEA340").ss(0.5,1,1).p("AgOAIQgDgFAAgDQABgHAGgEQAGgEAFAAQAGABAEADQABABACABQAFAFgBAFQAAAHgGAEQgGAEgGAAQgHgBgFgFQgCgBAAgBg");
	this.shape_47.setTransform(19.8,-18.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B3C02E").s().p("AgBAOQgIgBgFgFIgCgCQAEADAHABQAFAAAGgEQAFgEABgFQABgFgDgFIACACQAFAFAAAGQgBAGgGAEQgFAEgFAAIgBAAg");
	this.shape_48.setTransform(19.9,-18);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E1E99E").s().p("AgEADQAAgBgBAAQAAgBAAgBQgBAAAAAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAQACgCABABQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAAAAAAABQAAAAABAAQAAAAAAAAIgDAEQgCABgCAAQgCAAgCgCg");
	this.shape_49.setTransform(19.4,-18.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CAD753").s().p("AgCAOQgGgBgEgDQgDgFAAgFQABgFAGgEQAGgEAFAAQAGABAEADQADAFAAAEQgBAGgGAEQgFAEgEAAIgCAAgAgFgFQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABABAAQAAAAAAAAQABAAAAABQACACADAAQABAAACgBIADgCQAAgBAAAAQgBgBAAgBQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgBAAIgEABg");
	this.shape_50.setTransform(19.6,-18.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#99769A").ss(0.5,1,1).p("AAMgLQgFgDgGgBQgFAAgGAEQgGADgBAHQAAAEADAFAAMgLQAAABACABQAFAFgBAFQAAAHgGAEQgGAEgGAAQgHgBgFgFQgCgCAAAA");
	this.shape_51.setTransform(20.5,-11.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#ECD7E6").s().p("AAAAFQgCAAgBgCQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQgBAAABAAQAAgBAAAAQAAgBABAAQABgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQADAAACACQAAABABAAQAAAAAAABQAAAAABAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_52.setTransform(20.1,-12.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C281AF").s().p("AgBAOQgIgBgFgFIgCgCQAEADAHAAQAFABAGgEQAGgEAAgFQABgFgDgFIACACQAFAFAAAGQgBAGgGAEQgFAEgFAAIgBAAg");
	this.shape_53.setTransform(20.7,-11.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#D6A9C9").s().p("AgCANQgGAAgEgDQgDgFAAgFQABgGAGgDQAGgEAFAAQAGABAFADQACAFAAAEQgBAGgFAEQgFAEgFAAIgCgBgAgEgFQgBAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAABQAAAAABAAQAAAAAAAAQABAAABAAQABADADAAQABAAACgCQABAAAAAAQABgBAAAAQAAAAAAAAQABAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQgCgCgBgBQgBAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAg");
	this.shape_54.setTransform(20.3,-12);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgRANQgHgHABgHQABgJAIgGQAIgFAIABQAKABAGAHQAHAGgBAHQgBAJgIAGQgHAGgIgBQgKgBgHgHg");
	this.shape_55.setTransform(51.2,-13.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#CAC8C6").s().p("AAAAVQgKgBgHgHQgHgHABgHQABgJAIgGQAIgFAIABQAKABAGAHQAHAHgBAGQgBAJgIAHQgGAEgIAAIgBAAg");
	this.shape_56.setTransform(51.2,-13.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgRANQgHgHABgHQABgJAIgFQAIgGAIABQAKABAGAHQAHAHgBAHQgBAJgIAGQgHAFgIgBQgKgBgHgHg");
	this.shape_57.setTransform(50.9,-19.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CAC8C6").s().p("AAAAVQgKgBgHgHQgHgHABgHQABgJAIgGQAIgFAIABQAKABAGAHQAHAHgBAGQgBAKgIAFQgGAFgIAAIgBAAg");
	this.shape_58.setTransform(50.9,-19.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_59.setTransform(43.8,-13);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_60.setTransform(43.8,-13);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_61.setTransform(43.3,-19.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_62.setTransform(43.3,-19.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_63.setTransform(35.6,-12.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_64.setTransform(35.6,-12.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_65.setTransform(35,-19);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_66.setTransform(35,-19);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_67.setTransform(27.5,-11.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_68.setTransform(27.5,-11.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_69.setTransform(26.8,-18.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_70.setTransform(26.8,-18.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgYgBQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHQgGgIAAgHg");
	this.shape_71.setTransform(19.8,-11.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_72.setTransform(19.8,-11.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_73.setTransform(12,-10.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_74.setTransform(12,-10.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgYgBQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHQgGgIAAgHg");
	this.shape_75.setTransform(19,-17.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_76.setTransform(19,-17.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#719F96").ss(0.5,1,1).p("AALgLQgEgDgGgBQgGAAgFADQgGAEgBAHQgBAEAEAFQAAAAACABQAEAGAIABQAFAAAHgEQAFgEABgHQABgFgFgFQgBgBgCgBg");
	this.shape_77.setTransform(12.3,-17.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#BED1D1").s().p("AAAAFQgCAAgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABAAQgBAAABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQADAAACACQAAABABAAQAAAAAAABQAAAAAAAAQABAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIAAAAg");
	this.shape_78.setTransform(11.9,-17.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#83A7A7").s().p("AgOAHIgCgBQAEADAGAAQAGABAGgEQAGgEAAgFQABgFgDgFIACACQAFAFgBAGQAAAGgGAEQgGAEgFAAQgIgBgFgGg");
	this.shape_79.setTransform(12.5,-17);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#96B4B6").s().p("AgCANQgGAAgEgDQgEgFABgFQABgGAGgEQAFgDAGAAQAGABAEADQADAFAAAEQgBAGgGAEQgEAEgFAAIgCgBgAgFgFQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAAAQAAAAABAAQAAAAAAAAQACADADAAQABAAACgCQABAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQgCgCgBgBQgBAAAAABQgBAAgBAAQAAAAgBAAQAAABgBAAg");
	this.shape_80.setTransform(12.1,-17.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgSAOQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgIAGgIgBQgLgBgHgHg");
	this.shape_81.setTransform(11.6,-17);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CAC8C6").s().p("AAAAWQgLgBgHgHQgGgIAAgHQABgJAIgGQAJgGAIABQAKABAHAHQAHAIgBAHQgBAJgIAGQgHAFgIAAIgBAAg");
	this.shape_82.setTransform(11.6,-17);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AjhBVQAnAAAogBQBFgCBGgFQBpgJBpgRQAXgDAXgEIAChXAjhBVIgYABIgCh6QA7gRA8gMQBGgOBEgEQAMAAALgBQALgBAMAAQAgAAAiABQAbABAbADQAoAEAoAGIgBAb");
	this.shape_83.setTransform(31.7,-15.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B5B3B0").s().p("Aj7gkQA7gRA8gMQBGgOBEgEIAXgBIAXgBIBCABIA2AEQAoAEAoAGIgBAbQgpgDgpABIg3AAQgtACgsADIgXACQhEAGhGAMIhMANIgNBcIgYABg");
	this.shape_84.setTransform(31.7,-15.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CAC8C6").s().p("AjhgaIBMgNQBHgMBFgGIAWgCQAsgDAsgCIA3AAQAqgBApADIgDBXIgtAHQhpARhqAJQhFAFhGACIhPABg");
	this.shape_85.setTransform(33,-13.8);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AhyAOQBygCBygBIABgYQhzAAhyAAgAhmAAQBmAABmAA");
	this.shape_86.setTransform(89.3,-12.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#CAC8C6").s().p("AhygNIDmAAIgCAYIjkADgAhmAAIDMAAIjMAAg");
	this.shape_87.setTransform(89.3,-12.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAHAJQgDAEgEAAQgFgBgEgEQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADg");
	this.shape_88.setTransform(97.7,-17.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EAF2F0").s().p("AgJAIQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADQgDAEgEAAQgFgBgEgEg");
	this.shape_89.setTransform(97.7,-17.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAHAJQgDAEgEAAQgFgBgEgEQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADg");
	this.shape_90.setTransform(92.5,-17.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#EAF2F0").s().p("AgJAIQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADQgDAEgEAAQgFgBgEgEg");
	this.shape_91.setTransform(92.5,-17.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAHAJQgDAEgEAAQgFgBgEgEQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADg");
	this.shape_92.setTransform(87.1,-17.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#EAF2F0").s().p("AgJAIQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADQgDAEgEAAQgFgBgEgEg");
	this.shape_93.setTransform(87.1,-17.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgLAAQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADQgDAEgEAAQgFgBgEgEQgDgEABgEg");
	this.shape_94.setTransform(82,-17.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EAF2F0").s().p("AgJAIQgDgEABgEQAAgFAEgDQAEgEADABQAFAAAEAEQADAEAAADQAAAGgFADQgDAEgEAAQgFgBgEgEg");
	this.shape_95.setTransform(82,-17.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#92B1B0").ss(0.5,1,1).p("AhdgGQABgDADgDQAGgEAHAAQAIAAAEAGQADADABADQABAEAAABQAAADgBACQgBAEgEADQgFAFgIAAQgHgBgGgGQgCgDgBgDQgBgEAAgBQAAgDACgDgABBALQgEgEgBgGQABgBAAAAQAAgHAFgFQAGgEAIAAQAHAAAFAGQAFAGgBAFQAAABAAABQgBAHgFADQgBABgBABQgEADgGAAQgGgBgFgEQgBgBgBgBgAAsAAQAAAIgGAEQgFAFgIAAQgHgBgFgGQgFgEAAgGQABgHAFgGQAGgEAHAAQAIAAAFAGQAFAGgBAFgAglgNQAFgEAIAAQAHAAAFAGQAEAEABAGQAAABAAAAQgBAFgCAEQgCABgBACQgGAFgHgBQgIAAgFgGQgBgBgBgCQgDgEABgDQAAgCAAgBQABgGAFgEg");
	this.shape_96.setTransform(89.3,-17.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#D6E4E2").s().p("ABDANIgCgBQgEgFgBgGIABgBQAAgHAFgFQAGgEAIABQAHgBAFAGQAFAGgBAGIAAACQgBAFgFAEIgCACQgEADgGAAQgGgBgFgEgAhbAMQgCgDgBgFIgBgEQAAgCACgDIAEgHQAGgEAHABQAIgBAEAGQADADABADIABAGIgBAEQgBAEgEADQgFAFgIAAQgHgBgGgFgAANALQgFgFAAgGQABgHAFgFQAGgFAHAAQAIAAAFAGQAFAGgBAGQAAAHgGAEQgFAFgIAAQgHgBgFgFgAgaAQQgIAAgFgFIgCgEQgDgEABgDIAAgDQABgGAFgDQAFgFAIAAQAHAAAFAGQAEAEABAGIAAABQgBAFgCAEIgDADQgFAFgHAAIgBgBg");
	this.shape_97.setTransform(89.3,-17.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#B9CECE").ss(0.5,1,1).p("AALAbQgUgSgMgjQAfAVAMAXg");
	this.shape_98.setTransform(83.4,-28.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#8AB0A8").s().p("AgVgaQAfAUAMAYIgLAJQgUgSgMgjg");
	this.shape_99.setTransform(83.4,-28.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgkgBQABgIADgGQACgIAFgFQABgBABAAQAFgGAGgDQAHgDAGABIABAAQAPABAKANQAKAMAAAQQgBAGgCAGQgCAGgFAGQgBACgCACQgDADgCACQgGAEgGABQgFABgDAAQgEAAgEgBQgIgCgHgHQgBgBgCgDQgDgEgCgEQgCgFgBgFQgBgGAAgEgAABgiQACAAADAAQAMABAIAKQAIAKgBANQgBAGgCAGIAEACAABgoIAAAGQgCAAgEADIgHgHAgQgWQABgCACgCQAEgEAEgBAgZgcIAJAGQgDADgCAFAgWAEQgBgEAAgBIgNAAAgXgBQAAgBAAgBQABgGABgFIgLgBAAbAaIgEgFQgEADgDACIADAJAAHAdIAAALAAQAaQgFACgEABQgDAAgCAAQgDAAgDgCIgFANAgWAEQABAEACAFQABADADACQAAACACABQAEAEAFACAgYAfIALgKAAeAMQgDAEgEAFAgjAJIANgFAgTANIgNAG");
	this.shape_100.setTransform(83.9,-26);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EAF2F0").s().p("AgBAgQgEAAgEgCQgFgCgDgEIgDgDIgEgFIgDgJIAAgHIAAAAIACgLQACgFADgDIADgEQADgEAFgBQADgDAEAAIADAAQAMABAIAKQAIAKgBALQAAAIgDAGIgGAJIgHAFIgKADIgDAAg");
	this.shape_101.setTransform(84.4,-26.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D6E4E2").s().p("AgJAoIAFgNIgFANQgIgCgHgHIALgKIgLAKIgDgEIgFgIIANgGIgNAGIgDgKIANgFIgNAFIgBgKIAAAAIANAAIABAFIADAJIAEAFIACADQAEAEAFACQADACADAAIAFAAIAJgDIAHgFIAEAFIgDAEIgFAFIgDgJIADAJQgGAEgGABIAAgLIAAALIgIABIgIgBgAAXAVIAHgJQACgGABgGQABgNgIgKQgIgKgMgBIgFAAIAAgGIAAAGQgCAAgEADIgHgHIAHAHQgEABgEAEIgDAEIgJgGIAJAGQgDADgCAFIgLgBQACgIAFgFIACgBQAFgGAGgDQAHgDAGABIABAAQAPABAKANQAKAMAAAQIgDAMIgEgCIAEACQgCAGgFAGgAAiAOgAgkgBQABgIADgGIALABIgCALIAAACgAgggPgAgFgfg");
	this.shape_102.setTransform(83.9,-26);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#B9CECE").ss(0.5,1,1).p("AAGAcQgRgUgHgkQAdAZAIAZg");
	this.shape_103.setTransform(94.3,-27.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#8AB0A8").s().p("AgSgbQAdAYAHAZIgMAGQgQgTgIgkg");
	this.shape_104.setTransform(94.3,-27.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgggPQACgIAGgFQAAgBABAAQAFgGAHgCQAGgDAFAAQABAAAAAAQAPABALANQAKAMgBAQQgBAFgCAGQgCAHgEAGQgCACgCACQgCACgCACQgGAFgHABQgEABgDAAQgEgBgEgBQgIgCgGgGQgCgCgCgCQgCgEgDgFQgCgEgBgGQgBgFABgEIAAAAQAAgIADgGIAMABAgFgfQgEACgEAEQgCABgBACQgDADgBAFQgCAFAAAGQAAABAAAAQgBACABAEQABAEACAEQABADACADQACABABACQAEAEAFACQADABADAAQACAAACABQAFgBAFgCQADgCADgEQAFgEACgEQADgGAAgGQABgNgIgKQgHgKgMgBQgDAAgCABQgCAAgEACIgGgGAAAgoIABAHAgQgWIgIgGAgWgCIgNABAAWAUIAFAGAAdAMIAEABAgXAfIAKgKAgEAbIgFAMAAGAdIAAALAATAiIgDgIAggASIANgGAgWAEIgNAE");
	this.shape_105.setTransform(94.4,-25.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EAF2F0").s().p("AgBAfQgEAAgEgBQgEgCgEgEIgDgDIgDgGQgDgEAAgEQgBgEAAgDIAAAAIACgLQACgFADgDQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQADgEAEgCQAEgCAEAAIADgBQAMABAIAKQAHAKAAALQgBAIgDAGQgCAEgEAEIgHAGIgJADIgDgBg");
	this.shape_106.setTransform(94.9,-25.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#D6E4E2").s().p("AgJAnIAFgMIgFAMQgIgCgGgGIAKgKIgKAKIgEgEIgFgJIANgGIgNAGIgDgKIANgEIgNAEIAAgJIAAAAQAAgIADgGIAMABIgMgBQACgIAGgFIABgBQAFgGAHgCQAGgDAFAAIABAAQAPABALANQAKAMgBAQIgDALIgEgBIAEABQgCAHgEAGIgFgGIAFAGIgEAEIgEAEIgDgIIADAIQgGAFgHABIAAgLIAAALIgHABIgIgCgAgWAEQABAEACAEIADAGIADADQAEAEAFACQADABADAAIAEABIAKgDIAGgGQAFgEACgEQADgGAAgGQABgNgIgKQgHgKgMgBIgFABIgBgHIABAHQgCAAgEACIgGgGIAGAGQgEACgEAEQAAAAgBAAQAAABAAAAQgBABAAAAQAAABgBAAIgIgGIAIAGQgDADgBAFIgCALIAAABIgNABIANgBQgBACABAEgAAhANgAgWgCIAAAAgAABghg");
	this.shape_107.setTransform(94.4,-25.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAGAIQgEACgCAAQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADg");
	this.shape_108.setTransform(164.5,-18.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#EAF2F0").s().p("AAAAKQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADQgDACgDAAIAAAAg");
	this.shape_109.setTransform(164.5,-18.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAGAIQgEACgCAAQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADg");
	this.shape_110.setTransform(160.4,-18.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#EAF2F0").s().p("AAAAKQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADQgDACgDAAIAAAAg");
	this.shape_111.setTransform(160.4,-18.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#92B1B0").ss(0.5,1,1).p("AgIgJQAEAEgBAFQgBAFgFAEQgFADgGAAQgGgCgCgEQgEgFABgDQAAgHAFgDQAFgEAFABQAHABADAFgAAWgKQAGAAAEAFQADAFAAAEQAAABgBABQgBAEgEADQgBAAgBABQgEACgFAAQgEgBgDgDQgCgBAAgBQgDgEAAgEQAAgBAAgBQABgEAFgEQAEgEAGACg");
	this.shape_112.setTransform(162.1,-18.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D6E4E2").s().p("AASAQQgEgBgDgDIgCgCQgDgEAAgEIAAgCQABgEAFgEQAEgEAGACQAGAAAEAFQADAFAAAEIgBACQgBAEgEADIgCABQgEACgDAAIgCAAgAgWAMQgGgCgCgEQgEgFABgDQAAgHAFgDQAFgEAFABQAHABADAFQAEAEgBAFQgBAFgFAEQgEADgFAAIgCAAg");
	this.shape_113.setTransform(162.1,-18.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAGAIQgEACgCAAQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADg");
	this.shape_114.setTransform(164,-14.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EAF2F0").s().p("AAAAKQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADQgDACgDAAIAAAAg");
	this.shape_115.setTransform(164,-14.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AAGAIQgEACgCAAQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADg");
	this.shape_116.setTransform(159.9,-14.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EAF2F0").s().p("AAAAKQgEgBgDgDQgCgEAAgCQABgEADgDQAEgCACAAQAEABADADQADAEgBACQgBAEgDADQgDACgDAAIAAAAg");
	this.shape_117.setTransform(159.9,-14.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#92B1B0").ss(0.5,1,1).p("AgIgKQAEAFgBAFQAAAFgGAEQgEAEgHgBQgFgBgEgFQgDgFAAgEQABgGAFgEQAFgDAFABQAGABAEAEgAAFABQAAAAABgBQAAgEAFgEQAFgEAHABQAGABADAFQADAFAAAEQgBABAAAAQAAAFgFADQgBAAgBABQgEACgEAAQgFgBgEgDQAAgBgBgBQgEgEAAgFg");
	this.shape_118.setTransform(161.5,-14.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#D6E4E2").s().p("AATAQQgGgBgDgDIgCgCQgDgEAAgFIABgBQAAgEAGgEQAFgEAGABQAFABAEAFQADAFgBAEIAAABQAAAFgFADIgCABQgDACgEAAIgBAAgAgVAMQgGgBgEgFQgDgFABgEQAAgGAFgEQAFgDAFABQAHABADAEQAEAFgBAFQgBAFgFAEQgEADgEAAIgCAAg");
	this.shape_119.setTransform(161.5,-14.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#DBE8DF").ss(0.5,1,1).p("AgXgwQgHAGAAAJQAAAJAGAHQAIAHALAAIAKABQALAAAHgGQAHgGAAgKQAAgJgHgGQgHgHgLAAIgKgBQgLAAgHAGgAgzhKIABCbQAyATA0gYIgDibQgygWgyAbgAAIAHIgLgBQgLAAgGAGQgHAGAAAJQAAAJAHAGQAHAHALABIAKABQALAAAGgGQAIgHAAgJQAAgJgHgGQgIgHgKAAg");
	this.shape_120.setTransform(15.7,4.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B5D3B4").s().p("AgyBRIgBibQAygbAyAWIADCbQgeAOgbAAQgXAAgWgJgAgUAMQgIAGAAAJQAAAJAIAGQAHAHALABIAKABQAKAAAHgGQAIgHAAgJQAAgJgIgGQgHgHgKAAIgLgBIgCAAQgJAAgGAGgAgXgwQgHAGAAAJQAAAJAHAHQAHAHALAAIAKABQAKAAAIgGQAHgGAAgKQAAgJgHgGQgIgHgKAAIgKgBIgCAAQgKAAgGAGg");
	this.shape_121.setTransform(15.7,4.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#94BD8E").s().p("AgNApIgBgVIAHAAIADAWgAALApIgCgVIAJAAIABAVgAgQgTIgCgWIAIABIADAVgAAIgUIgCgVIAIAAIACAVg");
	this.shape_122.setTransform(15.8,3.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C7DDC4").s().p("AgDA0QgLgBgIgHQgHgGAAgJQAAgJAHgGQAIgGAKAAIALABQAKAAAHAHQAIAGAAAJQAAAJgIAHQgHAGgKAAgAgNApIAJABIgDgWIgHAAgAALApIAIAAIgBgVIgJAAgAgGgIQgLAAgHgHQgHgHAAgJQAAgJAHgGQAHgGALAAIAKABQAKAAAHAHQAIAGAAAJQAAAKgHAGQgIAGgKAAgAgQgTIAJAAIgDgVIgIgBgAAIgUIAIAAIgCgVIgIAAg");
	this.shape_123.setTransform(15.8,3.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#B9CECE").ss(0.5,1,1).p("AAJAaQgSgRgKghQAcAUALAWg");
	this.shape_124.setTransform(132.9,3.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8AB0A8").s().p("AgSgZQAbAVAKAVIgKAIQgRgQgKgig");
	this.shape_125.setTransform(132.9,3.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgDgdQADgCACgBIAAgGQgFAAgGADgAAfAOQACgGABgFQABgPgJgMQgJgMgOgCIgBAAAACggQACAAACAAQALABAHAKQAHAKgBALQAAAHgDAFIAEACAgNgVQABgCABgBQAEgDAEgCAAZAZIgEgFQgDADgEACIADAIQACgCADgCQABgCACgCQAEgFACgGAAbAMQgCAEgEAEAgEAaIgEALQADABAEAAQACABAFgBIAAgLQgCAAgCAAQgCAAgEgBgAgNgVQgDADgCAFQgCAEAAAGQAAABAAAAQAAACAAADQABAFACAEQABACACADQABABACACQADAEAEACAAGAmQAGgBAFgEAAOAZQgEACgEAAAgJgjQgGACgFAFQgBAAAAABIAIAGAgSgNIgLgCQgDAGAAAIIAMgBAgggBIAAAAQgBADABAFIAMgEAgVgbQgFAGgDAGAgIAlQgHgCgHgGQgBgCgBgCQgDgEgCgEQgCgFgBgFAgRAMIgMAFAgWAdIALgJ");
	this.shape_126.setTransform(133.3,5.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EAF2F0").s().p("AgBAeIgHgCQgFgBgDgEIgDgEIgDgEIgCgJIgBgGIAAgBQABgFACgEQABgFADgDIADgDQADgEAEgCIAHgCIADAAQALABAHAKQAHAJgBALQgBAIgCAFQgDAEgEAEQgDADgDABQgFADgEAAIgCAAg");
	this.shape_127.setTransform(133.7,5.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D6E4E2").s().p("AgBAmIgHgBIAEgLIgEALQgHgCgHgGIALgJIgLAJIgCgEIgFgIIAMgFIgMAFIgDgKIAMgEIADAJIADAFIADADQADAEAEACIAGABIAEAAIAAALIAAgLQAEAAAEgCIADAIIgDgIQAEgCADgDIAEAFIgEgFQAEgEACgEIAEACIgEgCQADgFAAgHQABgLgHgKQgHgKgLgBIgEAAIAAgGIABAAQAOACAJAMQAJAMgBAPIgDALQgCAGgEAFIgDAEIgFAEQgFAEgGABIgFABIgCgBgAgggBIAAAAIAMgBIgMABQAAgIADgGQADgGAFgGIAIAGIgIgGIABgBQAFgFAGgCIAGAGQgEACgEADIgCADQgDADgCAFIgLgCIALACQgCAEAAAGIAAABIAAAFIgMAEIAAgIgAgDgdIgGgGQAGgDAFAAIAAAGIgFADgAACgmIAAAAg");
	this.shape_128.setTransform(133.3,5.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#B9CECE").ss(0.5,1,1).p("AAIAoQgXgdgIgyQAmAiAJAkg");
	this.shape_129.setTransform(122.6,1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#8AB0A8").s().p("AgXgnQAmAiAJAkIgQAJQgXgdgIgyg");
	this.shape_130.setTransform(122.6,1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgOg0QAJgEAIABQAAAAABAAQAUACANASQANARgBAWQgBAIgCAIQgDAJgHAIQgCADgDADQgDADgDACQgIAGgIACQgHABgEgBQgFAAgFgCQgMgDgHgJQgDgCgCgDQgEgGgDgGQgDgHgBgHQgBgIABgFIAAgBQABgKADgJQAEgKAHgHQABgCABAAQAIgIAIgDgAgFgrQgGACgFAFQgCACgCADQgEAFgCAHQgDAGgBAIQAAABAAABQAAADABAFQABAGACAHQACADADADQACADACACQAEAGAHACQAFADAEAAQADAAADAAQAGgBAGgDQAFgCAFgFQAFgFADgGQAFgJAAgJQACgRgKgOQgLgOgPgBQgEgBgDABQgDAAgFADIgJgJAADg3IAAAJAAZAwIgEgMAAfAdIAFAIAAJAoIAAAQAAnASIAHACAgUgfIgMgIAgrgWIARADAgegDIgRAAAgdAFIgSAGAgfAqIAOgNAgrAZIARgHAgGAlIgGAR");
	this.shape_131.setTransform(122.7,4.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EAF2F0").s().p("AgCAsQgGgBgFgCQgHgDgEgGIgEgEIgFgHQgCgGgBgHQgBgEAAgEIAAgCQABgIADgGQACgHAEgFIAEgEQAFgFAGgDQAFgCAFgBIAFAAQAPABALAOQAKAOgCAQQAAALgFAIQgDAGgFAFQgFAGgFACQgGADgGABIgEAAg");
	this.shape_132.setTransform(123.4,3.8);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#D6E4E2").s().p("AgCA4IgKgCIAGgRIgGARQgMgDgHgJIAOgNIgOANIgFgFIgHgMIARgHIgRAHQgDgHgBgHIASgGIgSAGIAAgNIAAgBQABgKADgJQAEgKAHgHIACgCQAIgIAIgDIAJAJQgGACgFAFIgEAFIgMgIIAMAIQgEAFgCAHIgRgDIARADQgDAGgBAIIAAACIgRAAIARAAQAAADABAFQABAGACAHIAFAGIAEAFQAEAGAHACQAFADAEAAIAGAAQAGgBAGgDQAFgCAFgFQAFgFADgGQAFgJAAgJQACgRgKgOQgLgOgPgBIgHAAIAAgJIAAAJQgDAAgFADIgJgJQAJgEAIABIABAAQAUACANASQANARgBAWIgDAQIgHgCIAHACQgDAJgHAIIgFgIIAFAIIgFAGIgGAFIgEgMIAEAMQgIAGgIACIAAgQIAAAQIgJAAIgCAAgAAuAUgAADgug");
	this.shape_133.setTransform(122.7,4.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#B9CECE").ss(0.5,1,1).p("AAJAZQgSgRgKghQAcAUALAXg");
	this.shape_134.setTransform(43.3,5.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#8AB0A8").s().p("AgTgZQAcAVALAVIgLAJQgRgRgLgig");
	this.shape_135.setTransform(43.3,5.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgJgjQgGACgFAFQgBAAAAABIAIAGQABgCABgBQAEgDAEgCgAgdgPIALACQACgFADgDAgVgbQgFAGgDAGQgDAGAAAIIAAAAQgBADABAFIAMgEAgSgNQgCAEAAAGQAAABAAAAQAAACAAADQABAFACAEQABACACADQABABACACQADAEAEACQAEABACAAQACAAACAAQAEAAAEgCQAEgCADgDQAEgEACgEQADgFAAgHQABgLgHgKQgHgKgLgBQgCAAgCAAQgCABgDACAACgmIAAAGAAfAOQACgGABgFQABgPgJgMQgJgMgOgCIgBAAQgFAAgGADAgdARIAMgFAgWAdQAHAGAHACIAEgLAgdARQACAEADAEQABACABACIALgJAAOAZIADAIQACgCADgCQABgCACgCIgEgFAAGAmIAAgLAAGAmQAGgBAFgEAgIAlQADABAEAAQACABAFgBAAZAZQAEgFACgGIgEgCAggAHQABAFACAFAgggBIAMgB");
	this.shape_136.setTransform(43.7,7.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EAF2F0").s().p("AgBAeIgHgCQgFgCgDgDIgDgEIgDgEIgCgJIgBgGIAAAAQABgGACgEQABgFADgDIADgDQADgDAEgCIAHgDIADAAQALABAHAKQAHAKgBAKQgBAHgCAGQgDAEgEADQgDAEgDABQgFADgEAAIgCAAg");
	this.shape_137.setTransform(44.1,7.1);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#D6E4E2").s().p("AgBAmIgHgBIAEgLIAGABIAEAAQAEAAAEgCQAEgCADgDIAEAFIgDAEIgFAEIgDgIIADAIQgFAEgGABIAAgLIAAALIgFABIgCgBgAgWAdIALgJIgLAJIgCgEIgFgIIAMgFIADAFIADADQADAEAEACIgEALQgHgCgHgGgAgEAaIAAAAgAAVAUQAEgEACgEQADgFAAgHQABgLgHgKQgHgKgLgBIgEAAIAAgGIAAAGIgFADIgGgGIAGAGQgEACgEADIgCADQgDADgCAFIgLgCIALACQgCAEAAAGIAAABIAAAFIgMAEIAAgIIAAAAQAAgIADgGQADgGAFgGIAIAGIgIgGIABgBQAFgFAGgCQAGgDAFAAIABAAQAOACAJAMQAJAMgBAPIgDALIgEgCIAEACQgCAGgEAFgAgggBIAMgBgAAVAUgAggAHIAMgEIADAJIgMAFIgDgKgAAfAOgAgRAMIAAAAgAgUADIAAAAg");
	this.shape_138.setTransform(43.7,7.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#B9CECE").ss(0.5,1,1).p("AAIAoQgXgdgIgyQAmAjAJAjg");
	this.shape_139.setTransform(54.8,3.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#8AB0A8").s().p("AgXgnQAmAiAJAkIgQAJQgXgdgIgyg");
	this.shape_140.setTransform(54.8,3.3);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AADguQADgBAEABQAPABALAOQAKAOgCARQAAAJgFAJIAHACQACgIABgIQABgWgNgRQgNgSgUgCQgBAAAAAAgAADg3QgIgBgJAEIAJAJQAFgDADAAAgOg0QgIADgIAIQgBAAgBACIAMAIQACgDACgCQAFgFAGgCAgegDQAAgBAAgBQABgIADgGIgRgDQgDAJgBAKIARAAQAAADABAFQABAGACAHAgUgfQgEAFgCAHAgRAdQgCgCgCgDQgDgDgCgDIgRAHQADAGAEAGQACADADACIAOgNQAEAGAHACAAJAoQgDAAgDAAQgEAAgFgDIgGARQAFACAFAAQAEABAHgBgAgMA2QgMgDgHgJAAJA4QAIgCAIgGIgEgMQgGADgGABAAfAdQgFAFgFACAAZAwQADgCADgDQADgDACgDIgFgIAAnASQgDAGgFAFAAkAlQAHgIADgJAgvgDIAAABQgBAFABAIIASgGAgrAZQgDgHgBgHAgggnQgHAHgEAK");
	this.shape_141.setTransform(54.9,6.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#EAF2F0").s().p("AgCAsQgGgBgFgCQgHgDgEgGIgEgEIgFgHQgCgGgBgHQgBgEAAgEIAAgCQABgIADgGQACgHAEgFIAEgEQAFgFAGgDQAFgCAFgBIAFAAQAPABALAOQAKAOgCAQQAAALgFAIQgDAGgFAFQgFAGgFACQgGADgGABIgEAAg");
	this.shape_142.setTransform(55.6,6.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#D6E4E2").s().p("AgCA4IgKgCIAGgRQAFADAEAAIAGAAIAAAQIgJAAIgCAAgAAJAoQAGgBAGgDQAFgCAFgFIAFAIIgFgIQAFgFADgGIAHACIgHgCQAFgJAAgJQACgRgKgOQgLgOgPgBIgHAAIAAgJIABAAQAUACANASQANARgBAWIgDAQQgDAJgHAIIgFAGIgGAFIgEgMIAEAMQgIAGgIACgAgfAqIAOgNQAEAGAHACIgGARQgMgDgHgJgAAZAwgAgkAlIgHgMIARgHIAFAGIAEAFIgOANIgFgFgAgrAZQgDgHgBgHIASgGIgSAGIAAgNIAAgBIARAAIgRAAQABgKADgJIARADIgRgDQAEgKAHgHIAMAIIgMgIIACgCQAIgIAIgDIAJAJIgJgJQAJgEAIABIAAAJQgDAAgFADQgGACgFAFIgEAFQgEAFgCAHQgDAGgBAIIAAACQAAADABAFQABAGACAHIgRAHIAAAAg");
	this.shape_143.setTransform(54.9,6.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AANBFQgJAAgHABQAkhFgthDAgEBGIgIiIQALgCAJgB");
	this.shape_144.setTransform(68.3,4.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B5B3B0").s().p("AgDBEIgIiHQAtBDglBEg");
	this.shape_145.setTransform(68.2,4.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CAC8C6").s().p("AgVhCIAVgDIAIAQIABACQAXAtgSA3IgBADIABAAIgLARIgQABQAlhEgthEg");
	this.shape_146.setTransform(69.2,4.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#6B9C5A").ss(0.5,1,1).p("AAcAKQgDAJgIAFQgKAIgKgCQgLgCgGgHQgBgCgCgCQgCgEgBgDQgBgBgBgDQgBgEABgDQAAgBAAAAQAAgBAAgBQABgCAAgDQACgGAEgEQAAAAAAgBQABgBABgBQABgBACgBQABgBACgBQAJgFAIACQANACAHALQAHAKgCALQAAAAgBAE");
	this.shape_147.setTransform(78.9,-0.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#BFDE8F").s().p("AAAAJIgCAAQgEgCgBgDIAAgEQABgHAFgBIADAAQAIACgBAIQgCAHgHAAIAAAAg");
	this.shape_148.setTransform(78.8,-1.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#9EBE7C").s().p("AAAAXQgLgCgHgLIgCgDIgBgBIAAgBIgCgFQgCgFACgGIAAgDIADgCIADgCQAJgFAIACQANACAHALQAHAIgCANIgBAEQgLAGgKAAIgDAAgAgFgQQgGABgBAHIABAGQABACADABIADAAQAHACABgHQABgKgGgCIgDAAIgBAAg");
	this.shape_149.setTransform(79.3,-1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#B7816A").s().p("AAZAPIAAAAIAAABIAAAAgAgYgNIACgCIgBACg");
	this.shape_150.setTransform(79.2,-0.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#84AD5A").s().p("AgDAZQgKgCgGgGIgEgFIgDgGIgBgEQgBgDAAgFIAAgBIABgBIABgFQACgGADgEIABgBIABAAQgBAHABAFIACAGIABACIAAAAIACADQAHAJALACQAMACANgIIAAABIgBABQgDAIgHAGQgIAFgKAAIgDAAg");
	this.shape_151.setTransform(78.8,0.1);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#78A98B").ss(0.5,1,1).p("AASAAIAhgHIgEgJIgdAHIhEAPAgpARIA7gR");
	this.shape_152.setTransform(72.9,1.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#CEDECE").s().p("AgOAAIAbgHIADAHIgfAIIABgIg");
	this.shape_153.setTransform(76.4,0.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#ECF1EB").s().p("AgiADIBFgPIgBAKIg7APg");
	this.shape_154.setTransform(71.3,1.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgmhBQALgCALgBQAQgBAUAAQAhBBgZBGQgUACgTABQgKABgIAAQAkhEgthDgAgeBGIgIiHAAIAzIgKABIAAAAQAAgBAAgBQARg4gWgtQAAgBAAgBIAJAAIAFAAQAWA1gPAyIgGABQAQgzgWg1AgCA0IAAgC");
	this.shape_155.setTransform(71,4.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#7D7A79").s().p("AgFA1gAgFA1IAAgDQARg3gWgtIAAgCIAKAAQAVA0gQAzIgKACIAAgDIAAADg");
	this.shape_156.setTransform(71.3,4.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#B5B3B0").s().p("AgUBEIgIiHQAsBDgkBEgAALg3IAGAAQAWA2gQAyIgFAAQAPgygWg2g");
	this.shape_157.setTransform(70,4.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#CAC8C6").s().p("AgmhBIAWgDQAQgBAUAAQAhBBgZBGIgnADIgSABQAkhEgthDgAgHgzQAWAtgRA4IAAACIAAAAIAKgBIAGgBQAPgygWg1IgFAAIgJAAIAAACg");
	this.shape_158.setTransform(71,4.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AAMBCQgJABgGAAQAjhBgrhBAgEBDIgHiCQAKgCAJgB");
	this.shape_159.setTransform(85.7,3.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B5B3B0").s().p("AgDBBIgIiBQArBAgjBBg");
	this.shape_160.setTransform(85.6,4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#CAC8C6").s().p("AgUg/IAUgCIAIAPIABACQAWAqgRA2IgBACIABAAIgKAQIgQABQAjhBgrhBg");
	this.shape_161.setTransform(86.5,3.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#6B9C5A").ss(0.5,1,1).p("AAAAAQAAAAAAAA");
	this.shape_162.setTransform(94.8,6.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#DE9C42").ss(0.5,1,1).p("AABgbQABgBADABQABAAABAAQAKADAGAJQAHAKgCAKQgCAMgKAHQAAAAgDACAALAbQgHADgHgBQgMgCgHgKQgFgIAAgJQAAgBAAgCQABgEABgDQABgCABgBQADgEADgDQAAgBABAAQABAAAAgBQACgBACgBQAFgDAGAAQAAgBAAAA");
	this.shape_163.setTransform(94.7,9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#F2DBA6").s().p("AgFAFIgBgCQgCgDABgCQAAgBABAAQAAgBAAAAQABgBAAAAQABAAABgBQADgEAEADIADADQAFAFgHAGQgDACgCAAQgCAAgDgEg");
	this.shape_164.setTransform(95.7,8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E1AA59").s().p("AADAdQgKgCgHgKQgGgIABgJIAAgDIACgHIACgDIAGgHIAAgBIACgBIADgCQAEgDAFAAIABgBIAAACQgEADgCAFIgCAFIAAABIgBABIAAAAIAAAEQgCAKAFAKQAHAKAOADIgCABQgGACgFAAIgFAAg");
	this.shape_165.setTransform(94,9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#B7816A").s().p("AAFAcIACgBIgBABIgBAAgAgGgbIACABIgCABg");
	this.shape_166.setTransform(95.4,8.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E7B976").s().p("AgOAOQgHgKACgKIABgEIAAAAIAAgBIAAgBIADgFQADgFAFgDIACgBIAEAAIABAAQAJADAGAJQAHAKgCAKQgCAMgKAHIgDACQgMgDgHgKgAgBgPQgBABAAAAQgBAAAAABQgBAAAAABQAAAAgBABQgBADACAEIABACQADAFAHgDQAHgGgFgHIgDgDIgEgBQgCAAgBACg");
	this.shape_167.setTransform(95.5,8.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#78A98B").ss(0.5,1,1).p("AAKANIAcARIAEgIIgZgPAgogdIA5AkAAKANIgzgd");
	this.shape_168.setTransform(90.1,6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#CEDECE").s().p("AgPgDIAHgHIAYANIgFAIg");
	this.shape_169.setTransform(92.7,7.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#ECF1EB").s().p("AgdgHIABgOIA5AkIgHAHg");
	this.shape_170.setTransform(88.8,5.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#9DA89B").ss(0.5,1,1).p("Agkg/QAKgCALAAQAPgBATAAQAfA+gXBDQgTACgTABQgJAAgIABQAjhBgrhBgAgdBDIgHiCAAIAwIgJABIgBAAQAAgBABgBQAPg1gUgrQgBgBAAgBIAJAAIAFAAQAVAzgPAwIgFAAQAPgwgVgzAgBAvIAAAC");
	this.shape_171.setTransform(88.1,3.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#7D7A79").s().p("AgEAygAgFAyIABgCQAPg1gUgrIgBgBIAKAAQAUAxgPAxIgJABIAAgCIAAACg");
	this.shape_172.setTransform(88.4,3.7);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#B5B3B0").s().p("AgUBBIgHiBQArBAgjBBgAALg0IAFgBQAVA0gPAvIgFABQAPgwgVgzg");
	this.shape_173.setTransform(87.2,3.9);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#CAC8C6").s().p("Agkg/QAKgCALAAQAPgBATAAQAfA+gXBDQgTACgTABIgRABQAjhBgrhBgAgGgxQAUArgPA1IgBACIABAAIAJgBIAFAAQAPgwgVgzIgFAAIgJAAIABACg");
	this.shape_174.setTransform(88.1,3.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AAMBAQgJABgHAAIgHh/QAKgCAIAAAgEBBQAjhAgqg/");
	this.shape_175.setTransform(101.3,3.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#B5B3B0").s().p("AgLg/QAqA/giBAg");
	this.shape_176.setTransform(101.3,3.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#CAC8C6").s().p("AgUg+IAUgCIAHAOIABACQAWAqgRA0IgBACIABAAIgKAQIgPABQAihAgqg/g");
	this.shape_177.setTransform(102.2,3.2);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#6B9C5A").ss(0.5,1,1).p("AAAAAQAAAAAAAA");
	this.shape_178.setTransform(109.1,-3.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#AEA340").ss(0.5,1,1).p("AgSgTQABgCACgBQABgBABAAQAJgFAIABQALACAHAKQAHAKgCAKIgBAEAAaAKQgDAIgIAFQgJAHgJgCQgKgBgGgHQgBgCgCgCQgCgDgBgDQgBgCAAgCQgBgEABgDIAAgBQAAgBAAAAQAAgDABgCQABgFAEgEQAAgBABAA");
	this.shape_179.setTransform(111.1,-1.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B3C02E").s().p("AgCAYQgKgCgGgGIgDgFIgDgGIgBgDQgBgDABgFIAAAAIAAgCIABgEQABgGAEgEIABgBIABABQgBAGABAFIACAGIAAABIAAABIAAAAIACADQAHAHAKADQALACAMgIIAAABIAAABQgDAHgIAFQgIAGgIAAIgCAAg");
	this.shape_180.setTransform(111,-0.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E1E99E").s().p("AAAAIIgCgBQgDgBgBgDQgBgCAAgBQABgHAFAAQAAAAABAAQAAgBAAAAQAAAAAAABQAAAAABAAQAIABgBAHQgBAIgHAAIAAgBg");
	this.shape_181.setTransform(111.1,-2.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#B7816A").s().p("AAXAOIAAAAIAAABgAgWgNIABgBIAAACg");
	this.shape_182.setTransform(111.4,-1.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#CAD753").s().p("AAAAVQgLgDgHgJIgCgDIAAAAIAAgBIAAgBIgCgEQgBgFABgGIAAgCIADgCIACgCQAJgFAIACQALACAHAJQAHAJgCAMIgBADQgKAGgIAAIgEAAgAgFgPQgFABgBAGQgBADABACQABADAEAAIACABQAGABACgHQAAgJgFgBIgCAAIgCAAg");
	this.shape_183.setTransform(111.5,-1.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#78A98B").ss(0.5,1,1).p("AARAAIAfgHIgDgIIgcAHIhAAPAgnAQIA4gQ");
	this.shape_184.setTransform(105.5,0.3);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#ECF1EB").s().p("AggADIBBgPQgBAGABAEIg4AOg");
	this.shape_185.setTransform(104,0.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#CEDECE").s().p("AgOAAIAagHIADAHIgdAIQgBgFABgDg");
	this.shape_186.setTransform(108.8,-0.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AAIAwIgJABIgBAAQAAgBABgBQAPg0gTgrQgBgBAAAAIAIgBIAGgBQAUAzgPAvIgFABQAOgwgUgyAgjg9QAKgCALgBQAOgBATABQAfA7gYBDQgSADgSAAQgJABgIAAQAihAgqg/gAgcBCIgHh/AgBAvIAAAC");
	this.shape_187.setTransform(103.7,3.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#7D7A79").s().p("AgFAygAgFAyIAAgCQAQg0gUgqIgBgCIAKgBQATAxgPAxIgJABIAAgCIAAACg");
	this.shape_188.setTransform(104,3.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#B5B3B0").s().p("AgTBAIgIh/QAqA/giBAgAALg0IAFAAQAUAzgOAuIgGABQAPgvgUgzg");
	this.shape_189.setTransform(102.8,3.4);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#CAC8C6").s().p("Agjg9IAVgDQAOgBATABQAfA7gYBDQgSADgSAAIgRAAQAihAgqg+gAACgyIgIABIABACQATAqgPAzIgBADIABAAIAJgBIAFgBQAPgvgUgzg");
	this.shape_190.setTransform(103.7,3.3);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#FF4AAD").ss(0.5,1,1).p("AEfAqIgFhKQgfAGghAFIACBMQAigGAhgHgACUgNIADBNQAjgEAigFADagVQgiAEgkAEAGVg6QAZgHAYgHIAGA3QgYALgaAJQgZAKgaAJQgjAKglAKAFhguQAagFAagHIAFA9AFnAWIgGhEQgjAIgkAGAkAgLIAEBGQAgADAhADIgChHQgfgCgggCQgCgBgCAAgAh1BGQgjgCgjgDAi9gGQAkABAkABQAqABAogBQAtAAAtgCQAvgDAugEAh1gEIAABKQApACAnABIAChNAA5BHQgvACgvAAAA3gGIACBNQAwgCAugFAmJgYQAiAEAgADQAkAEAjACAmJAoQgDgBgDAAQgegFgegGIAAg9QAiAEAgAFgAlHAyQgBAAgCAAQgfgFgggFAlHAyIAAhDAj8A7QglgEgmgF");
	this.shape_191.setTransform(110.3,35.2);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#B41052").s().p("ACjA1IAChMQAvAAAsgDIACBOQglACgmAAIgUgBgAjFAUIg8gLIAAg+IBCAJIgBBBIgFgBg");
	this.shape_192.setTransform(90.2,37.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C21259").s().p("ABgAuIABhKQApABApgBIgCBNIhRgDgAhyAaIhAgKIABhAIBCAHIAABDIgDAAg");
	this.shape_193.setTransform(88.8,37.6);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EA156B").s().p("AAiAnIgChHIBIACIAABKIhGgFgAhoAYIAAhDIBHAGIAEBGIhLgJg");
	this.shape_194.setTransform(88,37.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FF44A2").s().p("AgdAhIgEhGIAEAAIA9AEIACBIIg/gGg");
	this.shape_195.setTransform(88,37.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#6D0A32").s().p("AgagXIAvgOIAGA0IgwAXg");
	this.shape_196.setTransform(153.6,31.7);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7C0C39").s().p("AgbgbIAxgMIAGA9IgyASg");
	this.shape_197.setTransform(148.6,33.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#A40F4B").s().p("AhRgfQAwgCArgFIADBOQgrAEgxADgAANAogAAKgmIBHgIIABBMIhFAKg");
	this.shape_198.setTransform(124.1,37.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#940E44").s().p("AhFgZIBAgLIBFgOIAGBEIhGAUIgFhKIAFBKIhDANg");
	this.shape_199.setTransform(139.2,35.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#E7E7E7").ss(0.5,1,1).p("ACHgJQmQAOCrAFQBXACCDgIQBEgFiQABQjKAIDDgE");
	this.shape_200.setTransform(125.9,16);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#958B96").ss(0.5,1,1).p("AjdAAQgBAAAAAAQAAgDAVgCQAQgDAdgCQBCgFBagDQBJgBA3ABQAQAAAOABQBBACAAAGQAAAAAAABIgEALQgOAEgvAEQhBAFhcACQhbAChCgCQgdgBgQgCQgKgBgEgCgADfgIQgBABgEACQgOADguACQhCAFhcACQhbADhBgCQgdgCgPgBQgLgCgFgBQgFgBAAgB");
	this.shape_201.setTransform(126.5,16.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#A6A6A6").s().p("AicANIgtgDIgPgDIgGgKIAGACIAQABIAsADQBBACBbgDQBcgCBCgDQAugEAOgDIAFgDIgFANQgNACgvAEQhCAFhcACIhUABIhIgBg");
	this.shape_202.setTransform(126.6,17.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#BDBCB9").s().p("AicANIgsgDIgQgDIgFgCQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAgDAVgBQAQgCAdgCQBCgGBagCQBJgCA3ACIAeAAQBBACAAAGIAAABIgFADQgOACguAEQhCAFhcACIhdABIg/gBgAg7AHQBBAABXgFIAGAAIAHgBIADAAIAHAAIACAAIABgBIADAAQAwgDhUAAIAAAAIgBAAIgmAAIgGAAIgGAAIgSABQh7AEBHAAIA6gBIABAAIAEAAIAGAAIgGAAIgEAAIgBAAIg6ABQhHAAB7gEIASgBIAGAAIAGAAIAmAAIABAAIAAAAQBUAAgwADIgDAAIgBABIgCAAIgHAAIgDAAIgHABIgGAAQhXAFhBAAIAAAAIAAAAIgqAAQgzgCAAgCQABgEEXgLQkXALgBAEQAAACAzACIAqAAIAAAAIAAAAg");
	this.shape_203.setTransform(126.5,16.3);

	// top
	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#EBF1EC").ss(0.5,1,1).p("AB7gUQAAgGABgJQhJgWhEABQg2gBgzANQgBANAAANQAAApAPAjIAPgCIDRgDQAEgkADglg");
	this.shape_204.setTransform(89.5,-26.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#E4EAE1").s().p("AhxgkQBzgZBxAgQgEAmgEAjIjRAEQgOgrADgpg");
	this.shape_205.setTransform(90.4,-25.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#DFE7DC").s().p("Ah7gSIABgaQAzgNA2ABQBEgBBJAWIgBAPQhxgghzAYQgCApAOArIgPACQgPgjAAgpg");
	this.shape_206.setTransform(89.5,-26.1);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#EBF1EC").ss(0.5,1,1).p("AA0g+QgZgIgfgGQAAgBgBABQgIgCgIgCQgKgBgLgCQgogGgqAAQgdgBgeACQgmACgoAGQgFAPgCAPAkQgBQAAgMAAgMQABgNADgMAkOAVQACATAGASQALABALABQAAAAABAAIAAAAAkQgBQAAAKACAMAjvA8QAaADAXACQAHABAGABQAYABAVACQAJAAAIABQAjACAeAAQALAAAKAAQAKAAAJAAQA3gCAjgNQAQgGALgIAA0g+QAdAJASALQAHADAFAFQACABACACQADACADADQANANABANQAAAFgBAGQgCAGgEAGQgHAMgOAJAERASQgBgJgCgJIiIgsQAkAbgTApQgSArhTARIBNACICFAFQAQgjgDgmg");
	this.shape_207.setTransform(142.6,-19.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#9DD279").ss(0.5,1,1).p("AjHgvIAdACIBOAFAisgUIgBAWIBOAFIABgVgAivAaIgagCAjKgWIAeACIACgZAitACIgegCAivAaIACgYAgRAMIgBAYIBXAFIABgXIhXgGIABgWIBXAGIACgaIhXgFAhegOIBOAEIACgZIhOgFgACwAwIgSgCIhZgFAhgAfIABgYIBOAFAgSAkIhOgFIhPgFAC+gWIgcgCIgBAYIArADACgAYIgCAWABGASIBaAGIABgYIhagEgABJgeIBZAGADGAbIgmgD");
	this.shape_208.setTransform(135.6,-20.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#EBF1EC").ss(0.5,1,1).p("AlnAWQg7gEg+gFIPBgtQgZAIgbAHQkcBKn4gjg");
	this.shape_209.setTransform(109.4,26.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#78A98B").ss(1,1,1).p("AK4i0IAHgBIDkBtIAEgBQAYAkgQAoIltBLIAAABQmHC8oyidQgBAAAAAAIAAACIgDAAImAAAQAAAAAAgBIiyg5AJKgSIAAgCIgEAEQACAAACgBgAJCBOIAIhfAl5AbQgBAAgBgBIl+AEQgWApAUAoAl7AaIACAAIAAABQIXA5GohkAl7BwIADgCIgBhTAuxgjIC4BBArxh3IjDAJAK4i0IkDALAJKgUIFZg0");
	this.shape_210.setTransform(99.3,27.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#78A98B").ss(1,1,1).p("AiGh8QiEAIhUAUQg0AMgjARQiLBEgVBvIAAAAIA8ATIAAAAIRvgwQgFgUgBgCQgYg9gXgbQgagfgFgBQg6hKk7AEQicgDh3AIg");
	this.shape_211.setTransform(83.8,4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#BBD6BA").ss(1,1,1).p("AiDjDQAIgDAIgDQB+gvCeBDIAAAAIgHB8QAKANAWAKQABABAAAAQABAAAAAAQAAAAAAgBQgCgNAAgNQgEhFARghIAqgJQACAAADgBQDSgzF2CNQAAAAAAAAQANAVgGBNQgFBDgZCKAtOhaQDfhpFFAcQA3AfALBDQADASAAAUQAuADAggUQgkhCAThFIAlgMIAAAAAiDjCIAAgBAjlgfQAAACAAABQBAAPA5gsQgBgCgBgBIgpAMAiDjCQgMBKAhA8ADEghQAVAKAXAAQgFgoABggQAAgxANgb");
	this.shape_212.setTransform(87.5,-13);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C4DDC4").s().p("AmKAPIMVgoQjDAzkqAAQiJAAifgLg");
	this.shape_213.setTransform(112.9,27.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#BAD7B9").s().p("AngASIPBgtQgZAIgbAHIsUAoIh5gKg");
	this.shape_214.setTransform(109.4,26.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#8ADBDB").s().p("ABbAqIABgXIBZAGIgBAWgAhJAIIABgWIBMAFIgBAWgAAEgJIABgZIBZAFIgBAagAAEgJgAi0gVIADgZIAdACIgCAZg");
	this.shape_215.setTransform(133.5,-20.4);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#9FF9BA").s().p("AhLAcIABgXIBMAFIgBAXgAi2AAIABgYIAeACIgBAWgABcgGIACgaIBZAGIgBAag");
	this.shape_216.setTransform(133.5,-20);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#9AAEDC").s().p("ACQAuIABgXIAmADQgHAMgOAJgAi9AZIACgXIBOAEIgCAYgAC3AagACRAXIACgXIArACQAAAGgBAFQgCAHgEAGgAgfAMIABgXIBXAGIgBAWgAi6gVIACgZIBOAFIgCAag");
	this.shape_217.setTransform(137.1,-20.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#73B5D0").s().p("AgSAjIABgXIBXAGIgBAXgAjJAYIgCgYIAeACIgCAYgABGASIABgWIBaAEIgBAYgAitACIABgWIBOAFIgBAWgAChAAIABgYIAcACQANANABAMgAhegPIACgZIBOAFIgCAZg");
	this.shape_218.setTransform(135.6,-20.3);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E4EAE1").s().p("ABxBPQAsgoAPgtIBXARQACAmgPAigAhABCIhBgDIgRgBIgtgDIgNgBIgxgFIAAAAIgFgmIBOAFIBPAFIBZAFIBXAFIASACQgLAHgQAGQgjANg3ACIgTABIgLAAIgKAAgABPgjIhYgGIhZgFIhNgFIhOgFIAAgVQCXgNCMAUQAdAJASALIAMAIIAEADIAGAGg");
	this.shape_219.setTransform(144,-19.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#DFE7DC").s().p("AAyBWQBSgRATgrQASgpgkgbICIAsIADASIhWgSQgQAvgrAngAjxA+IgWgCQgFgSgDgTIAaABIAFAmIAAAAIgBAAIAAAAgAkNgwQACgPAFgPQAogGAmgCQAegCAdABQArABAnAFIAVADIARAEIAAAAQAfAGAZAIQiMgUiXAMIAAAWg");
	this.shape_220.setTransform(142.6,-20.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#A4BCA0").s().p("ACfBMIAAgCIgCgZQgEhEARggIAqgJQgNAbAAAvQAAAfAFAoIgCAAQgWAAgVgJgAjNhJIAlgLIAAAAQgMBKAhA6IgoAMQglhAAThFg");
	this.shape_221.setTransform(91.1,-24.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#CFDCCD").s().p("AlvFMIgBAAIgBhUIAGABIABAAIAEABIAIAAIAFABQC1ASCnAAIAAAAIAAAAQE9AAEOhBQkOBBk9AAIAAAAIAAAAQinAAi1gSIgFgBIgIAAIgEgBIgBAAIgGgBIAAAAIgCAAIl+AEQgLAVAAAWQAAATAJATIiyg6IgEhaIC4BDIi4hDIgDhMIDEgIIA8ATIAAAAIRvgwIgGgWIEDgLIkDALQgYg9gXgbQgagfgGgBIgBgBQg4hFkcAAIAAAAIAAAAIgZAAIAAAAIgEAAIgDAAIhJgBIAAAAIgBAAQhmAAhTAFIgHAAIgDAAIgFABIAFgBIADAAIAHAAQBTgFBmAAIABAAIAAAAIBJABIADAAIAEAAIAAAAIAZAAIAAAAIAAAAQEcAAA4BFIABABQAGABAaAfQAXAbAYA9IAGAWIxvAwIAAAAQgNjEGgg7QiEAIhVAUQg0AMgiARQiMBGgVBtIABAAIjEAIIgRl9QDfhpFGAcQA2AfALBDQADASAAAUIAAADQBAAPA5gsIgCgDQggg8ALhKIABgBIAQgGQB/gvCcBDIABAAIgIB8QAKANAWAKIACABIAAAAQAWAKAXAAQgFgoAAggQAAgxAOgbIAEgBQDSgzF2CNIABAAQAMAVgFBPQgFBDgaCIIAHAAIDkBsIAEAAQAYAkgQApIltBLIAIhgIgIBgIAAACQjVBmkJAAQjbAAkAhHgAlzDmIB5AKQH4AjEchMQAagHAZgJgAJODMIAEgBIAAgBIAAgCgAJSDIIFZg1gAJQjhQgTArhSARIBNACICFAFQAPgjgDgmIgCgSIiJguQAkAbgSArgAD5i4IANACIAsADIASABIBBACIAUAAIAUAAQA5gCAigNQAQgGAMgIQAOgJAHgMQAEgFABgHQACgGgBgGQgBgOgNgNIgGgFIgEgDIgLgIQgTgLgdgJQgZgIgggGIgBAAIgRgEIgVgDQgngFgqgBQgegBgeACQgmACgoAGQgEAPgDAPIgDAZIgBAYIACAYQADATAGASIAVACIABAAIAyAFgArzFOIAAgBQgJgTAAgTQAAgWALgVIF+gEIACAAIABBUIgDACgAlxD4IAAAAgAlxD4gAupC5gAroBlgAG9AyIAAAAg");
	this.shape_222.setTransform(98.5,5.1);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EEF1EB").s().p("AkFCjIAAAAQAVhvCLhEQAjgRA0gMQBSgUCEgIQmeA7ANDDgACNiUIAAgDQAuADAhgUIApgMIABADQgrAhguAAQgQAAgQgEg");
	this.shape_223.setTransform(50.2,-1);

	// Layer 14
	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#958B96").ss(0.5,1,1).p("AgbAaQgKgDgMgCQAUhMAmAHQAGAAAHADQAxAWgmBJQgdgOgfgKg");
	this.shape_224.setTransform(159.7,-28.4);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#DEDCDC").s().p("AAAATQgCgCACgEQABgFAEADQAEACgCAEQAAABgBABQAAAAgBABQAAAAgBAAQAAAAgBAAIgDgBgAgDADQgIgDABgHQABgEACgCQAEgKAHAFQAKAGgGAMQgDAFgFAAQAAAAgDgCg");
	this.shape_225.setTransform(162.9,-29.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#CAC8C6").s().p("AgmAaQgBg1AngVQAEAAAHADQAxAWgmBJQgbgPghgJgAAUAGQgDAEAEADQAEACADgEQACgFgEgCIgCgBQgBAAgBAAQAAAAAAABQgBAAAAABQgBAAAAABgAAMgUQgCADgBAEQgBAHAIAEQAIADAFgIQAGgMgKgGIgFgBQgFAAgDAGg");
	this.shape_226.setTransform(160.8,-28.4);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#BDBCB9").s().p("AgdAhQAVhMAlAHQgkAVABA1QgLgDgMgCg");
	this.shape_227.setTransform(157.7,-29.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#958B96").ss(0.5,1,1).p("AACgmQAEAAAGACQAqANgYA+QgZgJgZgEQgJgCgJgBQAJg/AfACg");
	this.shape_228.setTransform(147.5,-32.2);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#BDBCB9").s().p("AgUAdQAKg+AeACQgbAVAFAqIgSgDg");
	this.shape_229.setTransform(145.6,-32.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#DEDCDC").s().p("AADAQQgDgCABgEQABgDAEACQADABgBAEQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAgAgBADQgHgCAAgFIACgFQADgIAGADQAIADgEALQgCAEgFAAIgBgBg");
	this.shape_230.setTransform(149.8,-32.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#CAC8C6").s().p("AgdAZQgFgqAdgVIAJACQAqANgYA+QgXgJgcgFgAAQAEQgCAEAEABQADACACgEQABgEgDgBIgCgBQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABgAAHgQIgCAGQAAAGAHADQAHABADgHQAEgLgIgCIgFgCQgEAAgCAGg");
	this.shape_231.setTransform(148.3,-32.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#958B96").ss(0.5,1,1).p("AgGgrQAGgBAGABQA1AIgRBQQgggGggAAQgMgBgLAAQAAhNAngEg");
	this.shape_232.setTransform(133.5,-34.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#DEDCDC").s().p("AAGATQgFgBACgFQAAgFAFABQAFACgBAFQgBADgEAAIgBAAgAgBAFQgJgCgBgGQAAgEABgDQACgKAIACQALADgDAOQgCAGgGAAIgBAAg");
	this.shape_233.setTransform(136,-35.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#BDBCB9").s().p("AgSApQAAhOAlgEQgdAgANAyIgVAAg");
	this.shape_234.setTransform(130.8,-35.2);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#CAC8C6").s().p("AgfAnQgPgzAfgfIAOAAQAzAIgRBQQgggGggAAgAATAEQgBAFAEABQAFABABgFQABgFgEgBIgCAAQgDAAgBAEgAAEgTQgBADABAEQAAAHAJACQAJACADgKQACgOgLgCIgDgBQgHAAgCAJg");
	this.shape_235.setTransform(134.4,-34.9);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#978646").ss(0.5,1,1).p("AgWgTQgCgCgBgCIAEgMQABACACACIACgFQAGABAGACQARAGASAOQADACADACIgJANIABABIgFAHQgBAAgBAAIgJAOQABAAABABIgFAIQgBgBgBAAIgCADQgEAAgCAAQgMgDgLgGQgHgFgGgGIAFgMQgCgCgBgBIADgIQABACACABgAgHgUQgGgFgFgGAgHgUQALANARAIQADABAEACAgEAQQgCgBgBgBAgRAHQAFADAFAEAgcgDQAFAEAGAGAgfAFQAFAFAHAFQAKAIALAIQADABADACAgLgIQgGgGgFgFAAQAJQADABADACAANAaQgDgBgDgCQgHgDgEgEAAQAJQgQgHgLgK");
	this.shape_236.setTransform(162.4,-32.8);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#B5A464").s().p("AAAAlIACgGIAGADIgCADIgGAAgAgkARIAFgMIAMAKIgEANQgHgFgGgGgAAHAXIAJgOIAGADIgJAOIgGgDgAgcgDIAGgQIALALIgGAPIgLgKgAAVABIAKgOIAGAEIgJANIgHgDgAgSgfIACgFIAMADIgDANIgLgLg");
	this.shape_237.setTransform(162.4,-32.8);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#C2B581").s().p("AgbAaIAEgMIAXAPIgDAGQgNgCgLgHgAgIAPIgDgCIgJgHIAGgPQANAJANAHIgJAPIgLgHgAgLgVIADgOQARAHASANIgKAPQgRgIgLgNg");
	this.shape_238.setTransform(162.8,-32.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D7D78E").s().p("AgCATQgOgHACgEQABgBAAAAQAAgBABAAQAAAAABAAQABAAABABIADACIADACQADAEAAADIgBABIgBAAgAAHgDQgOgJACgEQAAgBAAAAQABgBAAAAQABAAAAAAQABAAABAAQASALgCAEIgDABIgFgBg");
	this.shape_239.setTransform(162.2,-32.3);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#CCBB77").s().p("AAMAjIgHgEIgVgPIgMgKIgDgEIADgIIADAEIAMAKIAJAHIgDgDQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgCAFANAHQABAAAAAAQAAAAAAAAQAAAAAAAAQABgBAAAAQABgDgDgEIALAHIAGADIACAAIgFAJIgBgBgAAZAMIgGgDQgPgHgLgJIgMgLIgDgFIAEgLIAEADIAKAMQALANARAHIAHAEIABABIgFAHIgCgBgAgDgKQgDAEAPAGQAGADABgCQADgDgTgKIgBAAQAAAAgBAAQAAAAgBAAQAAAAAAABQAAAAAAABg");
	this.shape_240.setTransform(162.1,-32.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#FE70C6").ss(0.5,1,1).p("AAahUIAAAAQAFABAFADQAUANACAUQAEAagvAxQgHAJgIAJQgDADgCADQgVAWAEAMIgkgSQASgOABgXQAJhfAcgOQAMgIAQACg");
	this.shape_241.setTransform(166.2,-40.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("rgba(253,45,149,0.4)").s().p("AgpBEQARgOABgXQAJhfAagOQAOgIAQACQgXAIgOAbQgLAbgBAXQAAAYAEAGQADAHAGABQAGACAUgNIgRASIgFAGQgTAWADAMg");
	this.shape_242.setTransform(164.5,-40.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("rgba(253,147,200,0.302)").s().p("AgDAOQgLgFAIgRQAEgJAGAEQALAFgIAOQgFAJgDAAIgCgBg");
	this.shape_243.setTransform(170.2,-44.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("rgba(253,45,149,0.302)").s().p("AgZA+QgGgBgFgHQgFgGABgYQAAgYAOgaQANgbAWgIIAAAAQAFABAFADQAUANACAUQAEAYgtAzQgRALgHAAIgBAAgAAPgZQgHATALAFQAFABAGgJQAJgQgLgFIgFgBQgFAAgDAGg");
	this.shape_244.setTransform(167.9,-43);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#999999").ss(0.5,1,1).p("AghAwIAbhcIAGAKIAGgQIADATIAGgOIACAQIALgJIgEAMIAKgCIg6BQ");
	this.shape_245.setTransform(165.6,-38.8);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#978646").ss(0.5,1,1).p("AgJgdQAPACASAJQADABADABIgFAPQAAAAABAAIgDAFQAAAAgBAAIgFAOQAAAAABABIgDAHQgBAAgBAAIgBAEQgEAAgDAAQgJABgKgEQgHgDgGgEIABgMQgBgBgCgBIABgHQACABACAAIACgOQgCgBgCgBIACgLQABABACABIABgEQAFgBAGABgAgVgZQAFAEAGAEAAZgBQgDgBgDgBQgRgFgMgJAAQADQgQgDgLgGAgMAIQAEACAFACQABABACAAQAEADAGABAAQADQADABADAAAAIAYQADABACABAgNAPQALAFAKAEAARASQgEAAgDgBAgMAIQgHgEgFgEAgaAIQAGAEAHADAgWgOQAFAEAGAE");
	this.shape_246.setTransform(149.2,-35.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#D7D78E").s().p("AAAAQQgLgDABgEQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAIADABIAEABQADADgBADQAAAAAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAIgBAAgAAEgFQgNgEABgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQARAFgBAEQAAAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAIgEAAg");
	this.shape_247.setTransform(149.2,-35.4);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#C2B581").s().p("AgTAaIACgLIAUAJIgCAGIgBAAQgJAAgKgEgAgEANIgEgBIgJgFIACgOQANAHANADIgFAOIgKgEgAgOgSIABgLQAPACASAIIgGAQQgOgGgOgJg");
	this.shape_248.setTransform(149.6,-35.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#CCBB77").s().p("AAPAbIgFgCIgVgJIgNgHIgDgCIABgHIAEABIAMAIIAJAEIgDgBQgBAAgBAAQAAAAgBAAQAAAAAAABQgBAAAAABQgBAEALADQABAAAAAAQABAAAAAAQAAAAAAAAQABgBAAAAQAAgDgFgDIAMAEIAHABIABABIgDAHIgCAAgAAYAFIgGgBQgQgDgLgGIgLgIIgEgCIACgLIADACIALAIQAMAJARAFIAGACIABAAIgDAFIgBAAgAgGgIQgBAEAOAEQAGAAABgBQABgEgSgFIgBAAQAAAAgBAAQAAAAAAAAQAAABgBAAQAAAAAAABg");
	this.shape_249.setTransform(148.9,-35.9);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#B5A464").s().p("AAHAYIAFACIgBAEIgHAAgAgcAUIABgMIANAHIgBAMIgNgHgAAJARIAGgOIAGABIgFAOIgHgBgAgZAAIACgOIALAIIgBAOIgMgIgAASgDIAFgPIAGACIgFAPIgGgCgAgWgZIABgEIALAAIgBAMIgLgIg");
	this.shape_250.setTransform(149.2,-35.8);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#2FB82E").ss(0.5,1,1).p("AAQAVQgFAJgGAKQgDADgBACQgMAXAFAKIghgJQAMgPgDgUQgKhTAVgSQAKgJAMgBQABAAAAAAIABAAQAEAAAFACQATAHAGARQAHAVgeAzg");
	this.shape_251.setTransform(151.3,-43.4);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("rgba(206,244,206,0.502)").s().p("AAAANQgKgDADgPQACgJAGACQAKADgEANQgDAJgEAAIAAAAg");
	this.shape_252.setTransform(153.8,-47.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("rgba(41,198,41,0.502)").s().p("AgbBFQAMgPgDgUQgJhTAUgSQAJgJANgBIABAAQgQALgHAZQgHAaAEAUQAFAVAEAFQADAEAGAAQAFAAAPgOIgLATIgDAFQgOAXAFAKg");
	this.shape_253.setTransform(150.1,-43.4);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("rgba(41,198,41,0.302)").s().p("AgVA0QgFgFgEgVQgEgWAHgXQAGgaATgLIABAAQACAAAFACQATAIAGARQAHAVgeAyQgNAPgFAAQgGAAgFgFgAAIgaQgDASALADQAFABADgLQAEgPgKgDIgCAAQgGAAgCAHg");
	this.shape_254.setTransform(152.1,-45.6);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#999999").ss(0.5,1,1).p("AgVAtIAFhUIAIAJIAEgQIAEAQIADgOIAEAOIAIgKIgCAMIAJgEIgjBP");
	this.shape_255.setTransform(150.9,-41.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#978646").ss(0.5,1,1).p("AgOggQgHAAgGABIAAAGQAGADAIADAgMAKQAMAFAPACAATAAQgSAAgOgGAgbANQAHADAJACQALAFAOACQADAAADABQABAAACAAIABgJQgBAAgBAAQgDAAgEAAAgMAKQgIgDgHgEQgCgBgCgBIAAAKQACABACABAAVgIQgTgDgPgIAAaAAQABAAABAAIABgGQAAgBgBAAQgDAAgEgBAAaAAIgEARAAZgaQADABAEABIgEARAATAAQADAAAEAAAgOggQARAAAWAGAgbgZQgCgCgCgBIAAANQACABACABQAHAEAHADAAMAgQgMACgLgCQgIgDgIgDIAAgNAAUAaIgBAEQgDABgEABAgbADIAAgQ");
	this.shape_256.setTransform(134.5,-39.2);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#D7D78E").s().p("AADASQgNgCAAgFQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAQAMABAAAGQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgBAAgAAFgHQgQgCAAgFQAAgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAVADgBAFQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgDAAg");
	this.shape_257.setTransform(134.6,-38.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#CCBB77").s().p("AAWAbIgHgBQgOgCgLgFIgPgFIgEgBIAAgLIAEACIAPAHQALAFAQACIAHAAIACAAIgCAJIgCAAgAgHAQQAAAFANACQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAgBQAAgFgMgBIgBgBQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAAAgAAcABIgIAAQgRgBgOgFIgPgHIgEgCIAAgNIAEADIAOAGQAPAJAUACIAHABIABABIgCAGIgBAAgAgIgJQgBAFAQACQAHABABgDQAAgFgUgCIgBgBQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAAAABg");
	this.shape_258.setTransform(134.3,-39.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#C2B581").s().p("AgQAgIAAgOQAMAFANACIgCAHIgJABIgOgBgAgRAKIgBgQQAQAGAQAAIgEARQgNgCgOgFgAgSgTIgBgNQATAAAUAGIgEASQgRgDgRgIg");
	this.shape_259.setTransform(135,-39.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#B5A464").s().p("AAMAZIAGABIgBAFIgHACgAgdAaIAAgNIAQAGIAAANIgQgGgAANARIAEgRIAHABIgEARIgHgBgAgdADIAAgQIAOAHIABAQIgPgHgAATgHIAEgSIAHACIgEARIgHgBgAgdgZIAAgFIANgCIABAOIgOgHg");
	this.shape_260.setTransform(134.7,-39.2);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#9933FF").ss(0.5,1,1).p("AgEhYQAAAAgBAAQgPAEgKAMQgVAXAYBdQAHAWgMATIAlAEQgFgKAKgcQACgDABgDQAGgNAEgLQAag+gLgWQgJgTgYgFQgFgBgDAAQgBAAAAAAg");
	this.shape_261.setTransform(135.6,-48.2);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("rgba(225,196,255,0.302)").s().p("AABAPQgKgBABgTQABgKAHABQAMACgDAPQgCAMgFAAIgBAAg");
	this.shape_262.setTransform(137.9,-53.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("rgba(165,49,255,0.302)").s().p("AgOA9QgHgFgHgXQgIgYADgcQAEgdATgQIABAAQAFAAAEABQAXAFAJATQALAWgaA+QgOATgEABIgCAAQgFAAgGgEgAAHggQgBAUAMACQAGAAACgMQADgSgMgBIgCAAQgIAAAAAJg");
	this.shape_263.setTransform(136.2,-50.6);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("rgba(165,49,255,0.502)").s().p("AgXBVQAMgTgHgWQgYhdAVgXQAKgMANgEIABAAQgRAQgEAdQgDAeAIAWQAHAXAGAFQAGAEAGAAQAGgBAOgTIgKAYIgDAGQgMAcAHAKg");
	this.shape_264.setTransform(134.7,-48.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#999999").ss(0.5,1,1).p("AgOA1IgHhgIAJAIIADgSIAIARIABgPIAGAOIAHgMIABANIAIgFIgaBf");
	this.shape_265.setTransform(135.4,-45.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#958B96").ss(0.5,1,1).p("AgSAqQgMABgLADQgPhMAmgMQAGgCAHgBQA1gBgCBRQghABgfAGg");
	this.shape_266.setTransform(119.6,-35.4);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#DEDCDC").s().p("AAJASQgFAAABgFQgBgFAGAAQAEAAAAAGQgBAEgDAAIgBAAgAgMAAQgBgDAAgEQABgKAJAAQAKABAAAOQAAAIgIAAQgJgBgCgFg");
	this.shape_267.setTransform(121.6,-37);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#CAC8C6").s().p("AgZgoQAGgCAHgBQA1gBgCBRQghABgfAGQgZgwAZgkgAASAAQgBAEAFAAQAEABABgFQAAgDgEAAIgBAAQgFAAABADgAAAgUQAAADAAADQABAIAJAAQAKAAAAgKQAAgNgMgBIgBAAQgHAAAAAKg");
	this.shape_268.setTransform(120.3,-35.6);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#BDBCB9").s().p("AANgrQgXAkAXAvIgVAEQgPhMAkgLg");
	this.shape_269.setTransform(116.3,-35.3);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#978646").ss(0.5,1,1).p("AgOgfQgHABgGACIABAFQAHADAHACQAQAGATABQAEAAAEABAgZgLQgCgBgCgBIgCgMQACABADABAgWAPQgCgBgCAAIgBgLQACABACABIgCgQAgHAKQgIgCgIgDAgGATQgIgCgIgCIACANQAIADAIABAACANQgEgBgFgCAAWgBQgRAAgPgFQgIgCgHgDAAFANQAIABAHAAAACANQAAAAABAAQABAAABAAAgGATQALADAPAAQADAAADABQACgBABABIAAgJQgBgBgBABQgDAAgEAAAAZgdQgWgEgRACAATAeQgMADgLgBAATAeQADgCAEgBIAAgEAAdgBQABgBABAAIABgIQgBgBAAABIABgSQgDgBgEAAAAdgBIgCAPAAdgBQgDAAgEAA");
	this.shape_270.setTransform(119.1,-39.4);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#D7D78E").s().p("AgHAMQAAgBAAAAQABgBAAAAQABgBAAAAQABAAABAAIADAAIAAAAIACABQAHABAAADQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQgNAAAAgFgAgLgOQAAAAAAgBQAAAAABgBQAAAAAAAAQABAAABAAQAUAAAAAFQAAADgHAAQgQgBAAgFg");
	this.shape_271.setTransform(119.4,-39.1);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#C2B581").s().p("AgJAgIgCgNQALADAPAAIgBAIQgKADgHAAIgGgBgAAAANIAAAAIgBAAIgLgDIgDgQQAPAFARAAIgCAPIgPgBgAgRgSIgCgNQATgCAUAEIgCASQgSgBgRgGg");
	this.shape_272.setTransform(119.6,-39.4);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#CCBB77").s().p("AAaAJIgHAAQgOgBgLgDIgQgEIgFgBIgBgIIAFACIAPAFIAJABIgBAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAABAAABQAAAFANAAQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAgDgHgBIAPAAIAHAAIACAAIAAAJIgDAAg");
	this.shape_273.setTransform(119.1,-38.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#B5A464").s().p("AgVAcIgCgNIAQAEIACANIgQgEgAATAWIAHABIgBAEIgHADgAATAOIACgPIAHAAIgBAPIgIAAgAgYAFIgCgQIAPAFIADAQIgQgFgAgbgXIAAgFIAMgDIACANIgOgFg");
	this.shape_274.setTransform(119.2,-39.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#538BDF").ss(0.5,1,1).p("AgJhWIABgBQAFgBADABQAYADALARQANAVgSBBQgDAMgEANQgCADAAADQgKAdAIAJIglAAQAKgUgKgWQgihZATgZQAJgNAOgFQABAAAAAAg");
	this.shape_275.setTransform(119,-48.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("rgba(90,148,231,0.502)").s().p("AgNBXQAKgUgJgVQgjhZATgaQAJgMAPgGIABAAQgSASAAAeQgBAeALAUQAKAXAFADQAIAEAFgBQAGgCAMgUIgHAZIgCAHQgKAdAJAJg");
	this.shape_276.setTransform(118.5,-48.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("rgba(203,221,248,0.502)").s().p("AgJgEQAAgKAJAAQAKAAAAAQQgBANgGAAQgLAAgBgTg");
	this.shape_277.setTransform(121.2,-54);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("rgba(90,148,231,0.302)").s().p("AgGA+QgHgEgKgWQgLgXABgcQAAgeASgRIAAgBQAFgBAGABQAVADAMARQANAVgTBBQgMAUgGABIgCAAQgDAAgGgCgAAFghQABAVAMAAQAGAAABgNQABgSgNAAQgIAAAAAKg");
	this.shape_278.setTransform(119.7,-51.1);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#999999").ss(0.5,1,1).p("AgDA1IgSheIAKAHIAAgSIALAQIAAgQIAHAPIAFgOIACAOIAIgHIgRBh");
	this.shape_279.setTransform(119.2,-46.2);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#ADA6AE").ss(0.5,1,1).p("ABdAXQhPgZhqAVQAQgnBPgCQBSgBAIAug");
	this.shape_280.setTransform(87.7,-35);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#EBE9E9").s().p("AgxAJQgGAAAAgEQABgKAWABQAHAAgBAEQgBAJgTAAIgDAAgAAuAIQgMgBAAgHQAAgIAMABQALAAgBAHQAAAIgJAAIgBAAgAASgDQAAgGAFABQAFAAAAAFQAAADgFAAQgFAAAAgDg");
	this.shape_281.setTransform(87.1,-35.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#DEDCDC").s().p("AhcATQAQgnBPgCQBSgBAIAuQhQgZhpAVgAg8ABQgBAFAGAAQAWABABgJQABgFgHAAIgDAAQgTAAAAAIgAAdgDQgBAHAMAAQAKABAAgHQABgIgLgBIgBAAQgKAAAAAIgAANgHQgBAFAFAAQAFAAABgFQAAgFgGAAIAAAAQgEAAAAAFg");
	this.shape_282.setTransform(87.7,-35);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#958B96").ss(0.5,1,1).p("AgTgzQAIgDAJABQBEABgIBkQgqgCgpAFQgPABgOADQgQhfAzgLg");
	this.shape_283.setTransform(87.5,-40.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#BDBCB9").s().p("AATg1QghArAbA8QgNABgOACQgQheAxgMg");
	this.shape_284.setTransform(83.5,-40);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#DEDCDC").s().p("AAKAWQgGAAABgGQABgHAGACQAGAAgBAGQAAAFgGAAIgBAAgAgCAHQgLgBgDgIQgBgEABgEQABgNANACQAMABAAARQgCAKgJAAIgBAAg");
	this.shape_285.setTransform(90.3,-41.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#CAC8C6").s().p("AgdgyQAIgCAJAAQBEABgIBlQgqgCgpAFQgdg8AjgrgAAXACQgBAGAGAAQAHABAAgGQABgEgGAAIgCAAQgEAAgBADgAAAgYQAAAEAAAEQADAKALABQAMAAACgMQAAgRgOgBIgDAAQgKAAgBALg");
	this.shape_286.setTransform(88.5,-40.3);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#958B96").ss(0.5,1,1).p("AglAWQgIgFAAgKQAAgJAUgNQAUgOALgDQANgDAKAGQAKAFAGAUQAAAAABABQAAAAAAABQACALgEAJQgFAIgOAFQgPAEgPgBQgRgDgPgJg");
	this.shape_287.setTransform(81.9,-66.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#BDBCB9").s().p("AgJASQgRgCgPgJQBVgDgDgWQACAOgEAGQgFAJgOAEQgKAEgLAAIgIgBg");
	this.shape_288.setTransform(82.3,-64.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#DEDCDC").s().p("AgMAHQAAgCAEgEQADgCADgBQAFgBAAADQADAJgIACIgDAAQgGAAgBgEgAAEgFQgBgEAFgBQAEgBABAEQABAEgEABIgCAAQgBAAAAAAQgBAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_289.setTransform(79.2,-66.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#CAC8C6").s().p("AgtANQAAgLAUgLQAUgOALgDQANgDAKAGQAKAEAGATIABABIAAABQADAXhWADQgIgFAAgKgAgcAAQgEABgDAEQgEADABACQABAGAIgBQAKgCgCgKQAAgDgFAAIgCAAgAgRgGQgEABABAEQABABAEAAQAEAAgBgEQAAAAAAgBQAAgBgBAAQAAAAgBAAQAAgBgBAAIgCABg");
	this.shape_290.setTransform(81.9,-66.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#958B96").ss(0.5,1,1).p("AgpgGQABgJAPgIIABAAQAHgEAGgCQATgFAGASQAJAWAKAAIAEAIIAFAKQgnARgcgXQgNgLgDgHQgBgDABgDgAAlAOQgSAAgJgWQgGgSgSAFQgHACgHADIgBABQgIAEgEAF");
	this.shape_291.setTransform(78.9,-68);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#DEDCDC").s().p("AgZAOQgNgLgDgHQgBgDABgDQAEgFAIgEIABgBIAOgFQASgFAGASQAJAWASAAIAFAKQgQAHgPAAQgSAAgSgNg");
	this.shape_292.setTransform(78.9,-67.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#CAC8C6").s().p("AANAAQgGgRgTAEIgNAGIgBAAQgJAFgEACQACgHAPgIIAAAAIAOgFQATgFAGASQAIAWAKgBIAFAIIgBAAQgRAAgJgWg");
	this.shape_293.setTransform(78.7,-68.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#958B96").ss(0.5,1,1).p("AgBAlQgLgDgMgSQgGgKgCgGQgCgPAbgDQAOgDALgSIAIADIAGADQAFA2gSAOQgLAJgJgHgAAagkQAEA2gSAPQgHAFgGgB");
	this.shape_294.setTransform(81.3,-59.7);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#CAC8C6").s().p("AgRAjQAIACAHgGQAQgPgEg1IAGADQAFA1gSAPQgEAEgGAAQgFAAgFgDg");
	this.shape_295.setTransform(82.9,-59.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#DEDCDC").s().p("AAAAmQgJgCgMgTQgGgKgCgHQgCgNAbgEQAOgDALgRIAIADQAEA1gSAPQgFAEgGAAIgEAAg");
	this.shape_296.setTransform(81,-59.8);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#958B96").ss(0.5,1,1).p("AAfgXQgCgEgFgDQgWgTgjAZIgDAWQASgBAFAbQABAFACADQAfgJAKgugAgKAgQAJARAXgaQAZgYgQgW");
	this.shape_297.setTransform(89.3,-63.5);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#DEDCDC").s().p("AgKAcQgFgcgSAAIADgUQAjgaAWATQAFAEACAEQgKAugfAJQgCgEgBgEg");
	this.shape_298.setTransform(89,-63.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#CAC8C6").s().p("AgXAZQAfgJAKguQAQAVgZAZQgNAPgJAAQgGAAgEgGg");
	this.shape_299.setTransform(90.6,-62.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#958B96").ss(0.5,1,1).p("AgcAuIgLgEQgHhCAZgSQAWgSAcAnQAJAMADAJQAFATgYAHQgiAJgFAOgAApAAQACARgkADQgVAEgOAW");
	this.shape_300.setTransform(86.3,-72.6);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#CAC8C6").s().p("AgiAVQANgVAVgCQAkgEgCgSQAFAVgYAEQgiAJgEAPg");
	this.shape_301.setTransform(87,-70.2);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#DEDCDC").s().p("AgnArQgGhCAYgSQAXgSAcAnQAIANADAHQACASgkAEQgVAEgNAVg");
	this.shape_302.setTransform(86.3,-72.8);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#958B96").ss(0.5,1,1).p("AACAqIgBAAQgLADgMgKQgMgKgEgRQgEgOAGgPQAHgNANgCQABAAAAAAIAUgFQAcACAGAjQAGAggYAKgAgPgkQANgDAKAJQAMALAEAQQAEAPgHANQgGAOgNAD");
	this.shape_303.setTransform(85.1,-66.6);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#CAC8C6").s().p("AAJAZQAHgNgEgPQgEgQgLgLQgLgJgNADIAWgFQAZADAHAiQAFAggYAKIgQAEQALgDAGgOg");
	this.shape_304.setTransform(86.4,-66.6);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#ADABA7").s().p("AgPAgQgMgJgEgRQgEgPAHgOQAHgNANgDIABAAQALgCALAJQANAKAEARQAEAPgHANQgGANgNAEIgBAAIgFAAQgJAAgKgIg");
	this.shape_305.setTransform(84.4,-66.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#958B96").ss(0.5,1,1).p("AAJAwIgLgBIgehTIAOAAIAagLIAZBKQgRACgHATgAgSgkIAbBU");
	this.shape_306.setTransform(87.2,-62.2);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#BDBCB9").s().p("AAIAqIgchUIAOABIAbBUg");
	this.shape_307.setTransform(86,-61.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#CAC8C6").s().p("AgZgkIAagLIAZBKQgRACgHATg");
	this.shape_308.setTransform(87.9,-62.2);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#958B96").ss(0.5,1,1).p("AAKAfIghgHQAAACgFgIQgGgJAAgKQABgNAGgIQAEgEAEgCQABgBACgBIAfADQAAAAABAAQABAAACABQAGABAFAIQAFAIAAALQgBAMgGAJQgGAIgJAAQAAAAgBAAgAATgaIgEgBQgIAAgGAIQgFAJAAAKQgBANAFAJQAEAHAGACAAKgKQAEgEADAAQAEAAADAFQADAFgBAFQAAAIgDAFQgDAFgEgBQgEAAgDgFQgCgFAAgHQAAgFADgGg");
	this.shape_309.setTransform(89.7,-56.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#CAC8C6").s().p("AAAARQgDAAgDgFQgCgFAAgHQAAgGADgFQAEgFABAAQAEABADAEQADAGgBAFQAAAHgDAFQgDAFgDAAIAAAAg");
	this.shape_310.setTransform(91.4,-56.3);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#DEDCDC").s().p("AAAAdIgBAAIgBAAQgHgBgFgIQgFgJAAgLQABgMAGgIQAGgIAGAAIAEAAQAGACAFAHQAFAJAAAKQAAANgHAJQgGAHgHAAIAAAAgAgDgLQgDAFAAAGQAAAHACAFQADAFACAAQAEAAADgFQAEgFAAgHQAAgFgDgGQgCgEgEgBQgDAAgDAFg");
	this.shape_311.setTransform(91.2,-56.3);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#BDBCB9").s().p("AgPAYQAAACgFgIQgGgJAAgKQABgNAGgIIAIgGIADgCIAfADQgIAAgGAIQgHAJAAAKQgBANAGAJQAFAHAGACgAAXgbIABAAIADABg");
	this.shape_312.setTransform(88.9,-56.4);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#958B96").ss(0.5,1,1).p("AAEg4IAUAJIAAABIgYBoIgPgFIgIgDIAWhrIAFABIgTBt");
	this.shape_313.setTransform(88.3,-49.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#CAC8C6").s().p("AgTA0IAThsIAUAIIAAABIgXBpg");
	this.shape_314.setTransform(88.7,-49.3);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#BDBCB9").s().p("AgNA1IAUhrIAHABIgTBsg");
	this.shape_315.setTransform(87.3,-49.6);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#ADA6AE").ss(0.5,1,1).p("AgZgHIAAAAQAMgDAOAAQAXAAAPAFAgsgCQgLAEgEAJIB4gCQgEgJgOgEQgCgBgCAAAgsgCQAIgDALgC");
	this.shape_316.setTransform(33.9,-31);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#958B96").ss(0.5,1,1).p("AAqAkQABgYgEgOQgIgjgggBQgDAAgDAAQgEAAgCABQgNADgHALQgNATAGAr");
	this.shape_317.setTransform(33.6,-35.3);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#BDBCB9").s().p("AgEgYQAFgLANgCQgSAYAFAfIAEAPQgJACgHAEQgGgsANgTg");
	this.shape_318.setTransform(30.7,-35.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#DEDCDC").s().p("AgrAaQAHgEALgCIAAAAQAMgCAOAAQAXgBAPAFIADACQAOAEAEALIh3ABQAEgJAMgFgAAYgEQgEAAABgEQAAgFAFAAQAEABgBAFQAAADgDAAIgCAAgAAOgQQgIgBgCgGQgBgEABgDQABgKAJABQALABgBAOQgBAIgHAAIgCAAg");
	this.shape_319.setTransform(33.9,-34);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#CAC8C6").s().p("AgBAhQgQAAgMACIAAAAIgEgOQgHgfAUgZIAGgBIAGgBQAgACAIAiQAEAPgBAYQgPgGgVABgAARAFQgBAFAFAAQAEABABgFQAAgFgEAAIAAgBQgFAAAAAFgAAAgPQAAADAAAEQACAGAIABQAJABABgJQABgNgLgBIgBgBQgIAAgBAJg");
	this.shape_320.setTransform(34.3,-35.5);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#978646").ss(0.5,1,1).p("AgRgYQgIAAgGABIAAAEQAIADAIACQARAFAVACQACAAACAAQAEABAEAAIADgOQgEAAgEgBQgBAAAAAAQgZgFgVACgAgNgEQgIgCgJgDIACAMQAJADAJACAgJAOQgJgBgJgCIABAKQAKADAJABAAHALQgFgBgCAAQgFgBgFgBAAjgGQABAAABAAIgCAGQgBAAAAAAIgDAMQABAAABAAIgBAHQgBAAgCAAIgBADQgEACgEAAQgOACgNgBAAiAAQgEAAgFAAQgUAAgSgEAAXAMQAEAAAEAAAAdATQgEAAgEgBQgRgBgNgDAAXAMQgIAAgIgBAgbALQgDgBgCAAIgBgIQACAAADABAgegJQgDAAgCgBIgBgKQACAAADAB");
	this.shape_321.setTransform(33.3,-39.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#D7D78E").s().p("AgJAJQAAgBAAAAQABgBAAAAQABAAAAAAQABgBABABIACAAIAHABQAFABABADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBABQgPgBAAgEgAAGgGQgTgBAAgEQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABABQAYABAAADQAAACgGAAIgCAAg");
	this.shape_322.setTransform(33.6,-39.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#CCBB77").s().p("AAeAUIgIgBIgegEIgTgDIgEgBIgCgIIAFABIASAFIAKACIgBAAQgBAAgBAAQgBAAAAAAQgBAAAAABQAAABAAAAQAAAEAPABQABAAABgBQAAAAABAAQAAAAAAgBQAAAAAAAAQAAgDgFgBIAPABIAIAAIACAAIgBAHIgCAAgAAZAAQgUAAgRgDIgSgFIgFgBIgBgKIAFABIARAFQAQAFAVACIAEAAIAIABIACAAIgCAFIgBAAIgJAAgAgKgHQAAAEAUABQAIABAAgDQAAgDgYgBIgBAAQgBAAAAAAQgBAAAAAAQAAAAAAABQAAAAgBAAg");
	this.shape_323.setTransform(33.3,-39.5);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#C2B581").s().p("AgNAZIgBgLIAdAEIgBAGIgRACIgKgBgAABALIgHgBIgKgCIgDgMQATAEATAAIgCAMIgQgBgAARgHQgTgCgTgFIgCgKQAXgCAXAFIABAAIgDAOIgEAAg");
	this.shape_324.setTransform(33.9,-39.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#B5A464").s().p("AgdAVIgBgKIATADIACALIgUgEgAATASIAIABIgBADIgIACgAAUAMIACgMIAJAAIgDAMIgIAAgAgfADIgCgMIASAFIACAMIgSgFgAAYgHIADgOIAIABIgDAOIgIgBgAgigTIAAgEQAHgBAHAAIADAKIgRgFg");
	this.shape_325.setTransform(33.6,-39.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#30ADAD").ss(0.5,1,1).p("AgNgdQgZAKAEArIBCAIQABgFABgEAgNgdQAFgBAGgBQAtAAgJA2");
	this.shape_326.setTransform(33.5,-44.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("rgba(49,173,181,0.502)").s().p("AghAXQgEgrAZgKQgEAIgBALQABAPAKAGIAGAEQALAGAYABIgCAKg");
	this.shape_327.setTransform(33.4,-44.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("rgba(176,232,231,0.302)").s().p("AAFALQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAABgBAAIgCABIgBAAgAgCACQgFgCgBgDIABgEQADgFAEADQAGADgBAGQgCADgDAAIgCgBg");
	this.shape_328.setTransform(35.3,-45.3);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("rgba(49,181,181,0.302)").s().p("AgHAUIgIgEQgKgGgBgPQAAgLAEgIQAFgCAGAAQAuAAgKA1QgXgBgJgGgAANACQAAAAgBABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAgBQgBAAAAgBQAAAAgBAAIgBgBIgCACgAAAgNIAAAEQAAAEAFADQAGACADgEQABgIgGgDIgEgBQgDAAgCADg");
	this.shape_329.setTransform(34.4,-44.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#999999").ss(0.5,1,1).p("AgFAqIgLhKIAHAFIABgOIAIANIAAgMIAFALIAEgKIACAKIAGgFIgRBM");
	this.shape_330.setTransform(33.7,-41.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#958B96").ss(0.5,1,1).p("ABdAKQAFAXACAZQgPACgPACQg1AJgyAPQgCABgCAAQgGACgGACQgPAEgOAFQgJgZgEgWAhfAhQgRhhA7gaQALgFAQgCQAIgCAHAAQBIgDAcBd");
	this.shape_331.setTransform(15.7,-35);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#9C949C").ss(0.5,1,1).p("ABEgKQANgBAOABAhaAfQAMgGAMgFIgHgSQgLAEgKAFABagfQgMABgKAAIAAAUQg8ABg6AVQgJAEgHAEAhJACQAKgCAKgEQA5gVBAgF");
	this.shape_332.setTransform(15.6,-32.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#BDBCB9").s().p("AgjA1IAYgLIAOgIQAFAZAJAcIgLAEIgcAJQgIgZgFgWgAAChaQALgFAPgCIAQgCQg3AZALBaIgSAIIgVAJQgQhhA5gag");
	this.shape_333.setTransform(10.1,-35);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#B6BEA7").s().p("AhGAHIAUgHQA4gUBBgEIAAATQg8ABg6AWIgQAHg");
	this.shape_334.setTransform(15.3,-33.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#DEDCDC").s().p("AAPBAQgBgCAAgEQgBgMANgBQAOgBAAAMQABANgOABQgJAAgDgGgAgMgOQgEgIgBgGQgBgTAMgBQASgBAHAiQABAMgNABIgCAAQgLAAgGgMgAgng5QgBgMALABQAJgCABALQABAKgKABQgLAAAAgJg");
	this.shape_335.setTransform(19.5,-37);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#CAC8C6").s().p("AhIApQA7gYA7gBQANgBANACQAFAWACAZIgeAFQgzAIg0AQIgEABQgJgdgFgYgAArAgQgNABABAMQAAADABADQADAFAJAAQAOgBgBgMQAAgLgMAAIgCAAgAgghdQBIgCAcBdIgXABQg+ACg6AVQgOhZA5gagAAJg+QgKABABAUQAAAGADAHQAHANAOgBQANgBgBgMQgHghgTAAIgBAAgAgWhHQAAAJALAAQAKAAgBgLQgBgKgJABIgBAAQgKAAABALg");
	this.shape_336.setTransform(17.8,-35.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#978646").ss(0.5,1,1).p("AA0g2QAJgBAJgBIABAcQABAAABgBIACAOQgDABgBAAIABAZQACAAACgBIABAPQgCAAgDABIAAAHQgIADgHADQgbAMgcAEQgSACgTgBIgIgTQgFAAgFAAIgGgPQAFAAAFAAIgKgYQgGAAgFgBIgHgSQAGAAAFABIgDgIQAOgFAPgEQAogNAygEQABgBABABgAA2gZQgEAAgEABQgpAGgkAAQgSgBgRgBABHgOQgJACgIACAA4APQAIgCAIgCABHgcQgJABgIACAAPAVQgOACgMAAQgTAAgTgBAAUAVQgCAAgDAAABIAaQgIABgIABQghAFgcADQgUABgSAAAA4APQgSAEgSACAg7gCQASACASgBQAmAAAngJ");
	this.shape_337.setTransform(11.6,-45.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#D7D78E").s().p("AgKAXQgBgFAIAAIAJgCIAFgBQAQgCACAGQABAEgGABQgQADgIAAQgJAAgBgEgAgcgOQgBgEAGgCQAxgKACAHQABAEgQAEQgUAEgLAAQgJAAgBgDg");
	this.shape_338.setTransform(12.5,-45.1);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#CCBB77").s().p("Ag1AhIgGgPIAKABIAmABIAbgCIgMACQgGAAACAFQAAAHAhgGQAGgBgBgEQgCgFgQABIAjgGIARgEIADgBIADAPIgGABIgQADQghAFgcACIgmABIgKAAgAg7gFIgLgBIgHgTIALACIAiABQAmAAAogFIAIgCIARgDIACAAIABAOIgDABIgRADQgnAJgmABIgJAAIgbgBgAgOgSQgFACABAEQABAHAngIQAQgEgBgEQAAgDgJAAQgOAAgcAGg");
	this.shape_339.setTransform(11.6,-45.3);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#B5A464").s().p("AgkA4IgIgTIAmgBIAGATQgNACgQAAIgHgBgAA3AcIAQgCIAAAHIgQAGgAgyAWIgKgYQASACASgBIAMAYIgmgBgAA1gKIARgEIABAZIgRAEgAhDgUIgDgIQANgFAPgEIAJATIgigCgAA0g2IARgCIABAcIgRADg");
	this.shape_340.setTransform(11.7,-45.7);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#C2B581").s().p("AgMAkQAbgCAigFIAAALQgbALgaAEgAgeAAQAlgBAngJIACAZIgjAGIgFABIgbACgAgwglQAqgNAwgEIADAAIABAdIgHACQgnAFgnAAg");
	this.shape_341.setTransform(12.4,-45.7);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#F43202").ss(0.5,1,1).p("AgtgxQAJgGAKgEQBagXAIBuQAAAJABAKIiEARQgfhUAtgdg");
	this.shape_342.setTransform(10.9,-55);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("rgba(254,119,86,0.302)").s().p("AAPAUQgFgBABgEQABgFAFACQAFABgCAEQgBADgDAAIgBAAgAgEAGQgMgDgDgGIAAgIQACgLAOAEQAKACACAQQgCAGgHAAIgEAAg");
	this.shape_343.setTransform(13.4,-58);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("rgba(214,49,0,0.502)").s().p("Agtg4QgEASADAVQAKAdAXAIIAPAFQAZAFAtgJIABAUIiEAQQgfhTAtgegAgkAJIADACIgFgEIACACg");
	this.shape_344.setTransform(10.9,-54.4);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("rgba(214,49,0,0.302)").s().p("AgIAuIgRgEQgXgIgKggQgDgSAEgSQAJgGAKgEQBagXAIBuQgcAGgUAAQgMAAgIgDgAAYABQgBADAFACQAFABABgEQABgDgFgBIgCAAQgDAAgBACgAgGgZIABAHQADAIAJADQANADADgKQgCgRgMgCIgHgBQgGAAgCAJgAgwAfIgCgCIAFAEIgDgCg");
	this.shape_345.setTransform(12.1,-56.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#999999").ss(0.5,1,1).p("AAVBTIg3iLIASAGIgGgbIAVAVIgEgYIAPATIAEgVIAHASIAKgMIAECd");
	this.shape_346.setTransform(10.6,-49.7);

	// door
	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#958B96").ss(1,1,1).p("AGug6QgjAEi+AUQjHAUjSACQjVACgPAAIABAmQH5BTFniLIgBge");
	this.shape_347.setTransform(111.3,75.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#7BAD8C").ss(1,1,1).p("AABAAQgBAAAAAA");
	this.shape_348.setTransform(154.5,69.2);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#C4C4C4").s().p("AAVAQQiIgQgMgBQgNgCAAgCQAWABDKgMQAJABAJALQgEAIgVAHQgRAGgVAAIgSgBgACAAHQgDAAgHgFQgBgBABgGQABgKAMABQALABgBALQgBAKgKAAIgCgBg");
	this.shape_349.setTransform(99,77.6);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#A6A6A6").s().p("AmvAcIgBgmIDkgCQDSgCDHgUIDhgYIACAAIABAeQjiBXkbAAQinAAi8gfgAj7AXQANAACJASQAgAEAZgJQAUgGAFgKQgKgMgIgBQjMAMgXAAQAAABANADgAgEATQgBAHABABQAGAGACAAQAMABABgNQACgKgMgCIgCAAQgHAAgCAKg");
	this.shape_350.setTransform(111.3,75.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#9CC6A5").ss(1,1,1).p("AASgfIAZgCQAXAbgWAYIgaAEIgjAGIgiAGIgDg1QABgBACAAIAAAAIAhgFIAkgGQAVAZgVAcAgzgUQAEAAAHAMQAGAJgDALQgEAJgEAGQgEAFgCACAg2gTIADgBAgSgZQATAegSAX");
	this.shape_351.setTransform(152.1,135.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#DBE9DA").s().p("AgXgXIAkgGQAVAZgVAcIgjAGQAUgXgVgeg");
	this.shape_352.setTransform(152.6,134.9);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#B8D3B4").s().p("AgIgZIAEgBQAEAAAFAMQAFALgCAIQgEAKgEAFIgEAIg");
	this.shape_353.setTransform(147.5,135.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#CAE0C9").s().p("AguAbQAEgFAEgKQACgLgFgIQgHgMgEgBIAhgFQATAegTAYIghAFIAGgHgAAQgfIAZgCQAYAbgWAYIgaAEQAVgcgWgZg");
	this.shape_354.setTransform(152.3,135.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#9CC6A5").ss(1,1,1).p("AgSgaIgjAEQAEABAHAMQAGAKgDAKQgFALgEAFQgEAFgCACIAjgEQAUgYgTggIAlgGIAagBQAYAdgYAYIgbAEIglAGAg4gVIADgBIAAAAQgCAAgBABIACA3AATggQAWAbgXAd");
	this.shape_355.setTransform(73.2,146.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#DBE9DA").s().p("AgXgZIAlgFQAWAagXAeIglAFQAWgYgVggg");
	this.shape_356.setTransform(73.7,146.6);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#CAE0C9").s().p("AgxAbQAEgFAFgLQADgKgGgKQgHgMgEgBIAjgEQATAggUAYIgjAEIAGgHgAASggIAagBQAYAdgYAYIgbAEQAXgdgWgbg");
	this.shape_357.setTransform(73.3,146.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#B8D3B4").s().p("AgIgaIAEgCQAEABAEANQAHAMgEAHQgEAMgDAEIgGAIg");
	this.shape_358.setTransform(68.4,147.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#DBE8DF").ss(1,1,1).p("AJ8BLIAMnZI0PBPIAIIxQAOCwC1gVIOniFQB/gVAQhzQAEgYgCgdgAGsjnIAAAnIAAAYIABDLQAABQhUAKIquBQQgDAAgEAAQghACgUgJQAPAzBMgIIKthQQBUgKAAhPIgBjvQgBgJAAgGQgFgjgYgOgAmRDGQgFgOAAgSIABkCQAAgwAdgXQAYgUArgDIKrg2QAigDAUAM");
	this.shape_359.setTransform(109.6,104.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#94B89E").ss(1,1,1).p("AKPBQIAOn5I05BTIAFJWQAKCZB9APQAdAEAkgFIPHiNQCDgWASh7QADgagBgfg");
	this.shape_360.setTransform(109.7,104.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#A4BCA0").s().p("AmtDBQAUAJAhgCIAHAAIKuhQQBUgKAAhQIgBjLIAAgYIAAgnQAYAOAFAjIAAAPIABDvQABBPhUAKIqtBQIgUABQg6AAgNgsgAGQitIAAgMIAAgMIAAAYg");
	this.shape_361.setTransform(112.5,104.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("rgba(116,107,88,0.4)").s().p("AmcDYQgEgOgBgSIABkCQAAgwAdgXQAYgUArgDIKrg2QAigDAUAMIAAAnIAAAMIqaA9QhXAUgQB2IgHC6IgLABQgaAAgQgIg");
	this.shape_362.setTransform(110.7,102.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("rgba(203,197,188,0.4)").s().p("AjQhjICpgLICNDUIi4ASgAARhxIBNgGIBzDTIg9AFg");
	this.shape_363.setTransform(121.7,103.2);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("rgba(177,170,154,0.4)").s().p("Al9AHQAQh3BXgTIKag9IAAAMIABDLQAABQhUAJIquBQIgHABgAh/h4IB+DaIC4gSIiPjTgABiiHICDDTIA9gGIhzjTg");
	this.shape_364.setTransform(113.6,105.4);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#BAD7B9").s().p("AoQGoQh9gPgKiZIgFpWIU5hTIgOH5QABAfgEAaQgRB7iDAWIvHCNQgUADgRAAQgPAAgNgCgAqHlBIAHIxQAOCwC1gVIOniFQB/gVAQhzQAEgYgCgdIAMnZg");
	this.shape_365.setTransform(109.7,104.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#CAE0C9").s().p("AhfB5QgYgDgDgHIABgHQABgNA7gXQAegMAmgOQAOgGAggmQAbglAHABQAtAFgNAzQgFAjgtAhQgzAlhKAAQgTAAgUgCgAhcBmIAAgBIgFABIADAAIACAAgABdhMQgOgCgFgKIgCgKQAAgJAOgIQAMgIAIABQAVADgFAWQgDAVgVAAIgFAAg");
	this.shape_366.setTransform(155.4,116.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#C4DDC4").s().p("Ap/DyIgIoxIUPhPIgMHZQACAdgEAYQgQBzh/AVIunCFQgTACgSAAQiSAAgMidgAH/B7QggAogOAGQgoANgeAMQg7AXgCAOIAAAHQADAHAYACQBnAMA/guQAtghAFgkQANg1gtgEIAAAAQgIAAgaAkgAF2jwIqrA2QgrADgYAUQgdAXAAAwIgBECQAAASAFAOQAPAzBMgIIKthQQBUgKAAhPIgBjvIgBgPQgFgjgYgOQgQgKgYAAIgOABgAIfAKQgNAIgBAIIADAKQAFALAOACQAZACAEgXQAEgXgUgCIgCAAQgHAAgMAHgAFnDlIAEgBIABABIgFAAg");
	this.shape_367.setTransform(109.6,104.1);

	// body
	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#DBE8DF").ss(1,1,1).p("AGSjnQAYAOAFAiQAAAHABAJIABDvQAABPhUAKIqtBQQhMAIgPgzQgFgOAAgSIABkCQAAgwAdgXQAYgUArgDIKrg2QAigDAUAMIABEKQAABQhUAJIquBQQgDAAgEABQghACgUgJ");
	this.shape_368.setTransform(112.2,104.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#78A98B").ss(1,1,1).p("AOJqPIAAgZAOJqKIAAgBIAAgEAOIpuIAAAOAOJqKIgBAcAr0nRIADR6QAIgBAHAAQLWgsNPiUQAagFAbgEIAQw/AuIJxIAFACAr1ovIAAgGAr1ovIAAAJIABBVArxKpIgtgRIhlgl");
	this.shape_369.setTransform(100.9,94.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#A5A5A5").ss(1,1,1).p("AMximIgGCBQvGC5qVAT");
	this.shape_370.setTransform(102.8,159.9);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#A5A5A5").ss(1,1,1).p("AAyBPIAAgBIhjgtAAxhOIABCc");
	this.shape_371.setTransform(16.1,168.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#B3B3B3").s().p("AgtA1IgHiWIAFACIBjAlIABCcg");
	this.shape_372.setTransform(15.7,166.7);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#A4BCA0").s().p("AArKoIhjglIAAAAIgGhGIgCAAIgvxpIACAAIgEgrIgEhBQAAgaAQgFQASgGAVAoIAHAAQAKAAAIAIQAIAIAAAFQAKgGAJAAQARAAAHAOQADAHABALQANgHAGAAQAUAAAGASQACAHAAAOIALgJQAGgHAGAAQAeAAAAA0IgiADIAAgGIAAAGIgRACIAFADIAMAEIAABVIAER6g");
	this.shape_373.setTransform(16.7,92.7);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#BBBBBB").s().p("AsvCnIgBifIAtARIAPgBQLVgqNQiUIgGCBQvGC5qUATg");
	this.shape_374.setTransform(102.8,159.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#BFD0BF").s().p("ApNA/QhnAIhmgCIgbAAIgBhUIAAgIIAigEIASgBIArgEQA9gRA/gJIAMgBQAQgBAIALIABABQgLAIgMAFIBegNIBAgKIBwgPQCDgPCDgRQD0ghD3gFQBggCBdgDIALABIAQACQBPALBQAHIAbAEIADACIABACIAAAEIgBABIABAAIgBAbIAAAOIAAgOIABAAIgBAOIAAAAQifAihyAYQglAPheArQi0BRlPAWQg6ADg0AAQkBAAiOhWgAtBgTIgGgCIARgCIAAAIIgLgEg");
	this.shape_375.setTransform(107.4,40.7);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#CFDCCD").s().p("As+ndIAbABQBmABBngIQCrBoFSgVQFPgVC0hSQBegqAlgSQBygXCfgjIgQQ/Ig1AJQtPCVrWArIgOABgAk9FIIAUgBIKuhQQBTgJAAhPIAAgBIgBjvIgBgPQgFgjgXgOQgVgMgiADIqrA2QgrADgYAUQgdAXABAwIgBECQAAASAEAOQANAsA6AAIAAAAIAAAAgAk9FIQg6AAgNgsQAUAJAhgCIAIAAIKuhQQBTgKAAhQIAAkKQAXAOAFAjIABAPIABDvIAAABQAABPhTAJIquBQIgUABIAAAAIAAAAgAM/qbIAAAAIAAAEg");
	this.shape_376.setTransform(108.3,95.5);

	// oven interior
	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#5A5379").s().p("AgCF3QgQgNABgUQgQgHgPgNIgBgCQgjA9g5gTQgSgGAAgTQglgCgZgZQglA4g0gaQgFgCgCgEQgSgCgOgOIgCgDQghAxgyAHQgRACgJgQQgGgJABgMIgNgGIgGgEQg9AOAFg5QAAgIAFgHQgxAJADg0QABgcATgWIAngsQgiggAhglIAfglQg/gpA9hAQAvg0Aog5QAyhHBGgwQAOgJAQgGQAcgJAaAKQAXgLAVAPQApgqA0gBQANAAAIAJQALANAJAPQAVgFAQALQAlghAsgYQAFgDAEgBQAeADAFAcIAAACQAcgRAYAUQAjAAAIAiQAmgTAsgKQALgCAJAJQAEAFADAGQA6giAqAoQA3gnAUA6QADAHgCAHQAjAIAEAkQABAFgDAFQAWASgHAbQgEAMgJAIQAxAkgqAwIghAoQAMA0gqAwQgcAfgYAjQgeAsgdAvQgPAYgcgGQgPARgJAWQgCAHgGgBIACgFIAEgIIABgCQgoA6g/AGQgHAAgJgEQg4Aqggg2IgDgFQgnA5g7ANIgDAAQgHAAgFgFg");
	this.shape_377.setTransform(113,104.8);

	this.addChild(this.shape_377,this.shape_376,this.shape_375,this.shape_374,this.shape_373,this.shape_372,this.shape_371,this.shape_370,this.shape_369,this.shape_368,this.shape_367,this.shape_366,this.shape_365,this.shape_364,this.shape_363,this.shape_362,this.shape_361,this.shape_360,this.shape_359,this.shape_358,this.shape_357,this.shape_356,this.shape_355,this.shape_354,this.shape_353,this.shape_352,this.shape_351,this.shape_350,this.shape_349,this.shape_348,this.shape_347,this.shape_346,this.shape_345,this.shape_344,this.shape_343,this.shape_342,this.shape_341,this.shape_340,this.shape_339,this.shape_338,this.shape_337,this.shape_336,this.shape_335,this.shape_334,this.shape_333,this.shape_332,this.shape_331,this.shape_330,this.shape_329,this.shape_328,this.shape_327,this.shape_326,this.shape_325,this.shape_324,this.shape_323,this.shape_322,this.shape_321,this.shape_320,this.shape_319,this.shape_318,this.shape_317,this.shape_316,this.shape_315,this.shape_314,this.shape_313,this.shape_312,this.shape_311,this.shape_310,this.shape_309,this.shape_308,this.shape_307,this.shape_306,this.shape_305,this.shape_304,this.shape_303,this.shape_302,this.shape_301,this.shape_300,this.shape_299,this.shape_298,this.shape_297,this.shape_296,this.shape_295,this.shape_294,this.shape_293,this.shape_292,this.shape_291,this.shape_290,this.shape_289,this.shape_288,this.shape_287,this.shape_286,this.shape_285,this.shape_284,this.shape_283,this.shape_282,this.shape_281,this.shape_280,this.shape_279,this.shape_278,this.shape_277,this.shape_276,this.shape_275,this.shape_274,this.shape_273,this.shape_272,this.shape_271,this.shape_270,this.shape_269,this.shape_268,this.shape_267,this.shape_266,this.shape_265,this.shape_264,this.shape_263,this.shape_262,this.shape_261,this.shape_260,this.shape_259,this.shape_258,this.shape_257,this.shape_256,this.shape_255,this.shape_254,this.shape_253,this.shape_252,this.shape_251,this.shape_250,this.shape_249,this.shape_248,this.shape_247,this.shape_246,this.shape_245,this.shape_244,this.shape_243,this.shape_242,this.shape_241,this.shape_240,this.shape_239,this.shape_238,this.shape_237,this.shape_236,this.shape_235,this.shape_234,this.shape_233,this.shape_232,this.shape_231,this.shape_230,this.shape_229,this.shape_228,this.shape_227,this.shape_226,this.shape_225,this.shape_224,this.shape_223,this.shape_222,this.shape_221,this.shape_220,this.shape_219,this.shape_218,this.shape_217,this.shape_216,this.shape_215,this.shape_214,this.shape_213,this.shape_212,this.shape_211,this.shape_210,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.7,-77.6,191.7,254.3);


(lib.Sponge = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C98944").ss(0.5,1,1).p("AA5gNQAAgEgCgCQgDgCgEAAQgEAAgDACQgDACAAAEQAAADADACQADADAEAAQAFAAADgDQACgCgBgDgAgMAQQAAgCgCgCQgDgBgCAAQgCAAgCABQgCACABACQAAACABABQACABADAAQACAAACgBQACgBAAgCgAgnAHQgEgCgEAAQgEAAgDACQgDADAAADQABAEADACQADADAEAAQAEAAADgDQADgCAAgEQAAgDgDgDg");
	this.shape.setTransform(24.9,5.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DA964B").ss(0.6,1,1).p("AhBg5QAAADAEACQADACAFAAQAFAAADgCQADgCAAgDQAAgDgEgBQgDgCgFAAQgFAAgDACQgDABAAADgAC1gqIABgDQgegFgcgEQgBADgDACQgFADgIAAQgHAAgGgDQgGgDAAgFQAAgBAAgBQhUgLg+AAQhJASgyAgQBeAFBlAfIAAAAAAPAQQABAAAAABAARARQABAAABAAQACABACAAIABAAIA6gVQAAADADAAQAGABAFAAQAFAAAEgCQADgDAAgGQAAgCgBgBIBKgdAARARIgBAAAAPAQQAAAAgBAAAiyAQIAAABIAAACIAAAFIDJAvIAAguAAXASIAAAHAAXBHICXg6QgDgVAKgiAiyAQIgBgJQADAAADgCQADgCAAgDQgBgCgDgCQgCgCgEAAIgBgO");
	this.shape_1.setTransform(14.2,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#DA964B").ss(0.5,1,1).p("AhJgeQgDABAAACQAAABADABQACABADAAQADAAACgBQACgBAAgBQAAgCgCgBQgCgBgDAAQgDAAgCABgABDgqQAEAAACgBQADgCAAgBQAAgCgDgBQgDgCgDAAQgDAAgCACQgDABAAACQAAABADACQACABADAAgABIgJQAGgDAAgDQAAgEgHgCQgHgDgHAAQgHAAgEADQgFACAAAEQABADAEADQAFACAHAAQAHAAAHgCgAATgTQgCgCgEAAQgEAAgCACQgDABAAACQAAABADACQADABADAAQAFAAABgBQADgCAAgBQAAgCgDgBgAAHAkQgDADAAADQAAAEAFADQAEADAFAAQAGAAAEgDQAEgDgBgEQAAgDgEgDQgEgDgGAAQgHAAgDADgAgwAOQgDgBgDAAQgDAAgBABQgCABAAACQAAACACAAQACACADAAQADAAACgCQABAAAAgCQAAgCgBgBgAhAAGQgBgCgBgBQgCgBgDAAQgDAAgBABQgCABAAACQAAACADABQABABADAAQACAAACgBQACgBAAgCg");
	this.shape_2.setTransform(10.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF66").s().p("AACgBIgBAAIgBAAIAAgBIAAAAIAAAAIAAAAIAEABIAAAFQAAgDgCgCgAgCgDIABABIAAAAIgBgBgAgDgDIAAAAIAAAAg");
	this.shape_3.setTransform(16.1,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AhhABIAAgBIAAAAIABABIgBAAgABiAAIAAAAIAAAAgABgAAIAAAAIABAAIgBAAg");
	this.shape_4.setTransform(6.1,5.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6B769").s().p("AAWA5gAizAKIAAgFIAAgCIAAgBIABAAIA8ANQAjAHAhAJIAyAMQAFAAADgDQAGgIAAgKIgBgUIAAAAIABAAIABABIAAAAIABAAIAAAAIABAAIAAABIACAAIABAAQACAEAAADIAAAugAAWALIAAgHIABAAIA6gVQAAADADABQAGACAFAAQAFAAAEgEQADgDAAgGIgBgDIBKgdQgKAiADAWIiXA5gAAyAPQgDADAAADQAAAEADACQADACAEAAQAFAAADgCQADgCgBgEQAAgDgDgDQgDgCgFAAQgEAAgCACgABQAUQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIACADIAEABIAFgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAgBgBIgEgBIgFABgACSgLQgDACAAAEQABADADACQADABAEAAQAEAAADgBQACgCAAgDQAAgEgCgCQgDgCgFAAQgEAAgDACg");
	this.shape_5.setTransform(14.3,5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D69655").s().p("Ag1ATQgDgCgBgDQAAgEADgCQADgDAEAAQAEAAAEADQADACAAAEQAAADgDACQgDACgEAAQgEAAgDgCgAgXATIgBgCQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBIAEgBIAFABQAAABABAAQAAABABAAQAAABAAAAQAAABAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABIgFgBgAApgIQgDgCAAgDQAAgEADgCQADgBAEAAQAEAAADABQACACAAAEQABADgCACQgDADgFAAQgEAAgDgDg");
	this.shape_6.setTransform(24.9,5.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDF75").s().p("AgxA0QghgJgjgHIg8gNIgBAAIgBgJQADAAADgCQADgCAAgDQgBgEgDgCQgCgBgEAAIgBgNQBeAFBlAfQhlgfhegFQAyggBJgSQA+ABBUALIAAACQAAAEAGADQAGADAHAAQAIAAAFgDQADgCABgDIA6AJIgBADIhKAdIABADQAAAEgDADQgEAEgFAAQgFAAgGgCQgDgBAAgDIg6AXIgBAAIgEgBIgCAAIAAgBIgBABIgBgBIAAAAIgBAAIAAAAIAAAAIABAUQAAAKgGAIQgDADgFAAIgygMgAgeAlQgEADAAADQABAEAFADQADADAGAAQAFAAAEgDQAEgDAAgEQAAgDgEgDQgFgDgGAAQgGAAgDADgAhiAPQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQABAAAAAAQAAABAAAAQABAAAAAAQACACADAAQADAAACgCQABAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIgFgBIgFABgAhyAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABQABAAAAAAIAEABIAFgBQAAAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBIgCgDIgEgBIgEABgAAGgUQgEACAAAEQAAADAFADQAFACAGAAQAHAAAHgCQAHgDgBgDQAAgEgGgCQgIgDgHAAQgGAAgFADgAgfgSQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIAHABIAGgBQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQgCgCgFAAQgDAAgDACgAhxgdQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABAAAAAAIAGABIAFgBQAAAAABAAQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgFgBIgGABgAAWgwQAAAAgBABQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQABAAAAABQADABADAAQADAAADgBQAAgBABAAQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgDgCgEAAQgDAAgCACgAg+g2QgDACAAACQAAADAEACQADACAFAAQAFAAADgCQADgCAAgDQAAgCgEgCQgDgCgFAAQgFAAgDACg");
	this.shape_7.setTransform(14.2,3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBC06B").s().p("AAJA0QgFgDAAgEQAAgDADgDQADgDAHAAQAGAAAEADQAEADAAADQABAEgEADQgEADgGAAQgFAAgEgDgAg6AWQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIAEgBIAGABQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgCACgDAAQgDAAgCgCgAhKAMQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAIAEgBIAFABIACADQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBAAIgEABIgEgBgAAugGQgEgDgBgDQAAgEAFgCQAEgDAHAAQAHAAAHADQAHACAAAEQAAADgGADQgHACgHAAQgHAAgFgCgAAHgKQgBgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAABAAQACgCAEAAQAEAAACACQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBABIgGABIgGgBgAhJgWQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAIAFgBIAFABQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgFABIgFgBgAA+goQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQACgCADAAQADAAADACQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQgCABgEAAQgDAAgCgBgAgWgrQgDgCgBgDQAAgCAEgCQADgCAFAAQAFAAADACQADACAAACQABADgEACQgDACgFAAQgFAAgDgCg");
	this.shape_8.setTransform(10.3,2.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#3C6D96").ss(0.6,1,1).p("AA3AHQADADAAADQAAAEgDADQgDABgEAAQgEAAgDgBQgDgDAAgEQAAgDADgDQADgCAEAAQAEAAADACgAAZAMQABACAAACQAAACgBACQgCAAgDAAQgCAAgCAAQgCgCAAgCQAAgCACgCQACgBACAAQADAAACABgAgwgVQAEAAADACQADACAAAEQAAADgDACQgDADgEAAQgEAAgDgDQgCgCAAgDQAAgEACgCQADgCAEAAg");
	this.shape_9.setTransform(3.6,11.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#428EA6").ss(0.6,1,1).p("AC2AQIAAgJQgDAAgDgCQgDgCAAgDQAAgCADgCQADgDADAAIAAgNQhdAFhkAeAC2ATIAAAFIjHAvIiag7QADgUgNgjIAAgCQAdgFAcgEQABADADACQAGADAHAAQAIAAAFgDQAGgDAAgFQAAgBgBgBQBUgLA+AAQBKARAzAhAC2ATIAAgCIAAgBABygfQgDABgDAAQgDAAgCgBQgCgBAAgCQAAgBACgCQACgBADAAQADAAADABQACACAAABQAAACgCABgABxgCQADAAABABQACABAAAAQAAACgCABQgBABgDAAQgDAAgCgBQgBgBAAgCQAAAAABgBQACgBADAAgABnALQAAABgCABQgCACgDAAQgDAAgCgCQgBgBAAgBQAAgCABgBQACgBADAAQADAAACABQACABAAACgAA1gzQgFAAgDgCQgDgBAAgDQAAgDADgBQADgCAFAAQAFAAADACQAEABAAADQAAADgEABQgDACgFAAgAgcgwQgDAAgDgCQgCgBAAgCQAAgBACgBQADgCADAAQADAAADACQACABAAABQAAACgCABQgDACgDAAgAgFgQQgFADgGAAQgHAAgHgDQgHgCAAgEQAAgDAHgDQAHgCAHAAQAGAAAFACQAFADAAADQAAAEgFACgAgLAPQAAAAAAAAAgNAQQgCABgBAAQgBAAgCABIAAAHAgNAQIAAAAAgMAQQAAAAgBAAAi1grIBMAdQgBACAAACQAAAGADADQAFABAFABQAFAAAGgBQADgBAAgCIA7AVIABAAAgMAQQABAAAAgBAAUgUQgDgBAAgCQAAgCADgBQACgBAEAAQAEAAACABQADABAAACQAAACgDABQgCABgEAAQgEAAgCgBgAAmAkQAAAEgFACQgDAEgGAAQgFAAgEgEQgEgCAAgEQAAgEAEgCQAEgDAGAAQAGAAAEADQADACAAAEgAgRBHIgCgu");
	this.shape_10.setTransform(13.9,9.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#639BB8").s().p("AApAUQgDgDAAgDQAAgEADgDQADgCAEAAQAEAAADACQADADAAAEQAAADgDADQgDACgEAAQgEAAgDgCgAAQAUQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAIAEgBIAFABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAIgBAEIgFABIgEgBgAg3gIQgCgCAAgDQAAgDACgDQADgCAEABQAEgBADACQADADAAADQAAADgDACQgDADgEAAQgEAAgDgDg");
	this.shape_11.setTransform(3.6,11.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF66").s().p("AgDgBIADgBIABgBIAAABIgBAAIAAABIAAAAIgBAAQgCABAAAFgAABgDIABAAIAAABIgBgBgAADgDIABgBIAAABIgBAAg");
	this.shape_12.setTransform(12.3,11.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#71BED1").s().p("AgYA0QgEgDAAgEQAAgDAEgDQAEgDAGAAQAGAAAEADQADADABADQAAAEgGADQgDADgGAAQgFAAgEgDgAAzAWQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBIAEgBIAGABQAAABAAAAQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgDACgDAAQgCAAgCgCgABEAMQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBIAEgBIAEABQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgEABIgEgBgAhHgGQgGgDgBgDQABgEAGgCQAHgDAHAAQAGAAAGADQAEACAAAEQAAADgEADQgGACgGAAQgHAAgHgCgAgTgKQgBgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQACgCAEAAQAEAAACACQABAAABAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBABIgGABIgGgBgAA+gWQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAGgBIAFABQABAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgFABIgGgBgAhKgoQgBgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABAAABgBQACgCADAAQADAAADACQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBABQgDABgDAAQgDAAgCgBgAAFgrQgEgCAAgDQAAgCAEgCQADgCAEAAQAGAAACACQAEACAAACQAAADgEACQgCACgGAAQgEAAgDgCg");
	this.shape_13.setTransform(18,8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC33").s().p("ABiAAIAAAAIAAABIAAAAgAhhAAIAAAAIAAAAgAhfAAIAAAAIgBAAg");
	this.shape_14.setTransform(22.3,11.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6EB6CC").s().p("AgRA5IgCgtIACAtIiag5QADgWgNgiIBMAdIgBADQAAAGADADQAFAEAFAAQAFAAAGgCQADgBAAgDIA7AVIABAAIAAAIQAAgEACgEIABAAIACAAIAAgBIAAAAIABAAIAAAAIABAAIAAgBIABAAIABAAIAAAUQAAAKAGAIQAEADADAAIAzgMQAhgJAigHIA8gNIABAAIAAABIAAACIAAAFIjHAvgAg9APQgDADAAADQAAAEADACQADACAFAAQAEAAADgCQADgCAAgEQAAgDgDgDQgDgCgEAAQgFAAgDACgAhWAUQAAABgBAAQAAABAAAAQAAAAgBABQAAABAAAAQAAABAAAAQABAAAAABQAAAAAAAAQABABAAAAIAFABIAEgBIACgDQAAAAAAgBQAAgBgBAAQAAAAAAgBQAAAAgBgBIgEgBIgFABgAifgLQgCACAAAEQAAADACACQADABAFAAQAEAAADgBQADgCAAgDQAAgEgDgCQgDgCgEAAQgFAAgDACg");
	this.shape_15.setTransform(13.9,10.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#81E0F0").s().p("AgEA9QgGgIAAgKIAAgUIAAgBIgBABIAAAAIgBAAIgBABIAAgBIAAABIgDAAIgDABIgBAAIg7gXQAAADgDABQgGACgFAAQgFAAgFgEQgDgDAAgEIABgDIhMgdIAAgDIA5gJQABADADACQAGADAHAAQAIAAAFgDQAGgDAAgEIgBgCQBUgLA+gBQBKASAzAgQhdAFhjAeQBjgeBdgFIAAANQgDAAgDABQgDACAAAEQAAADADACQADACADAAIAAAJIgBAAIg8ANQgiAHghAJIgzAMQgDAAgEgDgAAPAlQgEADAAADQAAAEAEADQAEADAFAAQAGAAADgDQAFgDAAgEQAAgDgDgDQgEgDgGAAQgGAAgEADgABbAPQAAABAAAAQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAQACACADAAQADAAACgCQABAAAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAgBgBIgFgBIgFABgABsAEQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAABABQAAAAAAAAIAFABIAEgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAgBIgEgBIgFABgAgegUQgHACAAAEQAAADAHADQAHACAHAAQAGAAAFgCQAFgDAAgDQAAgEgFgCQgFgDgGAAQgHAAgHADgAAUgSQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABABIAGABIAGgBQABgBABAAQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAQgCgCgEAAQgEAAgCACgABngdQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAAAIAFABIAGgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQgBAAAAAAIgGgBIgFABgAgigwQAAABgBAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQABAAAAABQADABADAAQADAAADgBQAAgBABAAQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgDgCgDAAQgDAAgDACgAAtg2QgDACAAACQAAADADACQADACAFAAQAFAAADgCQAEgCAAgDQAAgCgEgCQgDgCgFAAQgFAAgDACg");
	this.shape_16.setTransform(13.9,8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#2B8257").ss(0.2,1,1).p("ACigTQABADACACQADAFAFAAQACAAACgBACQgPQAAACAAACQAAAFgDAEQgCACgFAAQgEAAgDgCQgCgEAAgEABqgGQAAACAAACQAAADgDAEQgDADgEAAQgFAAgDgDQgDgEAAgCABBABQABADAAACQAAAGgDAEQgDADgEAAQgDAAgDgDQgDgEAAgGQAAAAAAgBAAZALQAAABAAABQAAAGgDAEQgCAEgEAAQgEAAgCgEQgCgEgBgEAgIAjQgBgCAAgDQAAgFACgEQACgCADAAQACAAABACQACAEAAAFQAAABAAAAAAdAaQAAgCAAgCQAAgFACgEQADgDAEAAQAEAAACADQADAEAAAFIAAABABFARQAAgCAAgDQAAgFACgFQADgCAEAAQAEAAACACQADAEAAAFABuAGQAAgCAAgCQAAgDACgDQACgFAEAAQADAAACAFQADADAAADACTgBQgBgBAAgCQAAgFADgDQACgEAEAAQADAAADAEQACADAAAEAiPgVQAAABAAAAQAAAHADAEQABAEACABIABAAQABAAABAAQADAAACgFQACgCABgDAg6AbQABgBAAgCQADgFAAgHIAAgBAhFAGQgBACAAAEQAAAGACAFAhaAAIAAAAQAAAFgCAEQgCAEgCAAQgBAAgBAAQgDAAgBgCQgBgBgBgBQgCgEAAgFQAAgEAAgCAhXAPQAAgBAAgBQAAgGACgEQABgCABgBAg1AeQgBgDAAgCQAAgFACgEQABgCACgBAgrAiQACgEAAgFQAAgFgCgEIAAAAAhwgJQACAEAAAFQAAADgBADAh4gMQgCABgBABQgCAFAAAFIAAAAAihgOQAAgBAAAAQAAgFACgEQABgBABgBAiigdQAAAEgCACQgCAEgDAAQgDAAgCgEQgCgDAAgFQAAgBABgCAiWgYQACAEAAAFQAAADgBAD");
	this.shape_17.setTransform(14.5,14.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#2B8257").ss(0.5,1,1).p("ACygMQAIgKgMgCIgLACIgSAFIgTAEIgTAEIgVAFIgUAEIgSADIgWAFIgSAEIgfAIIAAAAAgXAUQAGAFgIALIASgEIALgDIAYgGQABAAABAAQAKgCAIgBQAMgCAKgEQADgBADgBIAMgDIAXgGIAQgDIAVgEIAQgDIAMgDQABgCABAAAh9gRIgRgHIgHgCIgHgDIgFgCIgNgFQgKABAGAKIASAIIAMAFIAMAFAg1AJIgPgGIgOgDIgHgDIgQgGIgGgCIgIgEIgGgCAhDAVIAKAEIAFACIAKAEIAOAGIADgBAhfALQACAAACABIAFABIACAAIARAIAgwALIgFgCAgqANIgGgCAhuADQAEADAFACQACACAEABAh8gBIAKABQACACACABAiHgGIALAFAgXAUIAAAAIAAAAIgTgH");
	this.shape_18.setTransform(14.4,14.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#45A074").s().p("AA6AfQACgEAAgFQAAgFgCgEIAAAAIATAHIAAAAQAGAFgIALIgDABgAAwAbIgBgFQAAgFACgEQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAGACIAAAAQACAEAAAFQAAAFgCAEgAArAYIABgDQADgEAAgIIAAAAIAFACQgBAAAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgCAEAAAFIABAFgAAhAVQgCgFAAgHIABgGIAPAGIAAAAQAAAIgDAEIgBADgAAQANIgCAAIAAgCQAAgHACgEIACgBIAOAEIgBAGQAAAHACAFgAAJAMIgEgBQACgBACgEQACgEAAgFIAAAAIAHACIgCABQgCAEAAAHIAAACgAAAAIIgBgCQgCgEAAgFIAAgGIAOAGIAAAAQAAAFgCAEQgCAEgCABIgFgDgAAvAJgAgIADIABgFQAAgGgCgEIAGADIAAAGQAAAFACAEIABACIgIgFgAgIADIgEgDIgKgCIAAAAQAAgGACgEIADgDIAIADQACAEAAAGIgBAFIAAAAgAgWgCIgLgEIACAAQADAAACgFQACgDABgDIAGACIgDADQgCAEAAAGIAAAAgAghgGIgBgBQgCgBgBgDQgDgFAAgGIAAgBIARAGQgBADgCADQgCAFgDAAIgCAAgAgugMIABgGQAAgEgCgFIAHAEIAAABQAAAGADAFQABADACABgAgugMIgMgFIAAgBQAAgFACgEIACgCIAHACQACAFAAAEIgBAGgAhMgZQgGgKAKgBIgBADQAAAEACAEQACADADAAQADAAACgDQACgDAAgDIAFACIgCACQgCAEAAAFIAAABgAhHgZQgCgEAAgEIABgDIANAFQAAADgCADQgCADgDAAQgDAAgCgDgAg2gdg");
	this.shape_19.setTransform(4.2,14.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4DB080").s().p("AhkAPIAAgBIAhgHIARgEIAAACQAAAGgCAEQgDAEgDAAQgEAAgDgEQgCgEAAgEQAAAEACAEQADAEAEAAQADAAADgEQACgEAAgGIAAgCIAXgEIASgEIAAAFQAAAEgDAEQgCADgEAAQgEAAgDgDQgCgEAAgEIAAgBIAAABQAAAEACAEQADADAEAAQAEAAACgDQADgEAAgEIAAgFIASgEIAUgFIABAEQAAAFgEAEQgDABgEAAQgEAAgDgBQgDgEAAgEQAAAEADAEQADABAEAAQAEAAADgBQAEgEAAgFIgBgEIATgEIATgFIABAEQAAAFgDAEQgDADgEAAQgEAAgDgDQgDgEAAgEQAAAEADAEQADADAEAAQAEAAADgDQADgEAAgFIgBgEIATgEIACAFQAEAFAEAAIAEgBIgEABQgEAAgEgFIgCgFIALgDQALADgIAJIgCACIgLADQgBgEgCgDQgCgEgEAAQgDAAgDAEQgCADAAAFIAAADIgVAFQAAgFgCgDQgCgEgEAAQgDAAgDAEQgCADAAAFIABAEIgXADQgBgDgCgEQgDgDgEAAQgBAAgDADQgDAEAAAEIABAFIgWAGIAAgBQAAgFgDgEQgDgDgDAAQgEAAgDADQgDAEAAAFIABAEIgBgEQAAgFADgEQADgDAEAAQADAAADADQADAEAAAFIAAABIgSADIgCAAIgYAGIAAgCQAAgFgCgDQgCgDgDAAQgDAAgCADQgDADAAAFIABAFIgRAEQAIgMgGgEgAhWAWQAAgFADgDQACgDADAAQADAAACADQACADAAAFIAAACIgOADIgBgFgAgGAEQAAgEADgEQADgDABAAQAEAAADADQACAEABADIgLADIgFADIgBgFgAAhgEQAAgFACgDQADgEADAAQAEAAACAEQACADAAAFIgPAEIgBgEgABGgMQAAgFACgDQADgEADAAQAEAAACAEQACADABAEIgRAEIAAgDgABXgNIAAAAg");
	this.shape_20.setTransform(22.1,15);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.3,-3.4,36.9,21.7);


(lib.Sink = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AADgcQAFADAFAEQAOANgBAXQAAAFAAAGQgTAHgPgFQgIgBgJgFQAAgGAAgFQACgTAJgNQAJgLAIAEgAAaAPQgTAHgPgEAgZALQAJAFAIAC");
	this.shape.setTransform(32.8,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDBCB9").s().p("AgOARQACgTAJgNQAHgLAKAEQgOAWABASIAAAGQgGgCgJgFg");
	this.shape_1.setTransform(31.7,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#DEDCDC").s().p("AgRAVIAAgLQARAEASgHIgBALQgLAFgJAAQgHAAgHgCgAgEgIIgCgFQAAgJAGAAQAIAAABAMQgBAIgHAAQgEAAgBgGg");
	this.shape_2.setTransform(33.6,3.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CAC8C6").s().p("AgZAWIAAgLQAJAFAIACIAAAKQgIgBgJgFgAgIASIAAgGQgBgSAMgVIAKAGQAOANgBAXQgMAEgLAAIgLgBgAABgFIABAFQACAEAFAAQAIAAAAgHQgBgLgHAAIgBAAQgHAAAAAJg");
	this.shape_3.setTransform(32.8,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A59DA6").ss(0.4,1,1).p("Ag4BHQARAGAOgKQAFgYAJgUQALgaAUgTQANgNARgJIAWgNQgBgSgVAEAAyhIQguARgbAfQgUAUgMAZQgHANgEAOQgDAIgCAJQACABADABQAFADAFAB");
	this.shape_4.setTransform(26.6,7.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CAC8C6").s().p("Ag/BHQAEgaAKgYQAMgYATgVQAXgdAmgSQAUgEABASIgWANQgRAJgMANQgTATgMAaQgKAUgEAYQgJAGgKAAQgGAAgGgCg");
	this.shape_5.setTransform(27.4,7.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBCB9").s().p("Ag3BEIgFgCQABgJAEgIQAEgPAHgNQAMgYATgUQAcggAugQIAAABQgmASgXAdQgTAVgMAYQgJAXgFAbIgKgEg");
	this.shape_6.setTransform(25.6,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AA4APIABAMQAGgBAFgBQAAAPgDAQQAAABAAACQg2AUg1gPQgFgBgGgCQgGgCgFgCIgBAAQgBgTgBgQQAFABAHACIAAgLQgFgCgGgBQAEgfAKgTQAMgaAWgDQAMgCAJAAQA2AEAIBQQgEABgFAAgAgnAcQgGAAgHgCQgCgBgBAAAg3AOQABAAACAAQAHACAIABQAwAHAtgJAA5AbQgxAKgvgJ");
	this.shape_7.setTransform(22,20.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BDBCB9").s().p("AgoBAIgMgDIgLgEIAAAAIgCgjIALADIADABIAOACIgCAPQAgAVA6gDIAPgFIAAADQgfAMgfAAQgVAAgXgHgAgzAOIgDAAIgKgDQAEgfAKgTQAMgaAVgDQAMgCAJAAQgQAGgLAbQgKAagDAcIgPgDg");
	this.shape_8.setTransform(21.9,20.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B6BEA7").s().p("AgnAFIgOgDIgDAAIAAgKIADAAIAQADQAvAGAugHIABAKQgaAFgaAAQgVAAgXgEg");
	this.shape_9.setTransform(22,23.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DEDCDC").s().p("AAHAYIgDgEQgBgBAAAAQAAgBAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQACABABADQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAIgDADIgBAAIgDAAgAgFAGQgFgEgCgFQgCgHABgGQACgGAEgBQAEgCADAFQAFAEACAHQACAHgCAEQgBAGgEACIgBAAQgCAAgEgEg");
	this.shape_10.setTransform(26.3,19.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CAC8C6").s().p("Ag1AwIABgPQAyAIAugJIAKgCQAAAPgCAQIgPAFIgQAAQgvAAgbgSgAgyAWQACgcALgaQALgbASgGQA0AEAIBQIgIABQgaAFgYAAQgWAAgWgDgAAlAEQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAABQAAABAAAAQgBABAAAAQAAABABABQAAAAAAABIADAEIAFAAIADgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQgBgDgCgBIgDgBIgCAAgAAVgfQgEABgBAGQgCAGACAHQADAHAEAEQAFACAEAAQAEgCABgEQACgGgCgHQgCgHgFgEQgDgEgDAAIgDABg");
	this.shape_11.setTransform(23.3,20.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AAggYQgEgPAngGQgzgRgLAhQAHAAAFABQAJACAGACgAAzAJQACgQgJgUIgMADQAFAOAAAKAAzAJQgBAMgIAMIgOgHQgBAYAfgIQg0AXgEgiQgHAAgHAAQgSgCgNgIQgNgIgLgNQAFgDAGgDQABgCACgBQAGgFAGgDQAYgOAWACAgpABIAAgSAgpABIgCAUAgGgIQgEAAgDACQgDADAAADQAAACACACQADACAEABQADAAADgCQABgDABgCQAAgDgBgCQgCgCgEgBgAAQAKIABgmAACAfQAGAAAHgCIABgTAAcAaQgGACgHABAAcAaQAIgMABgO");
	this.shape_12.setTransform(37.3,9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#DEDCDC").s().p("AgRAEQgDgDADgBQANgLAFAHQADAEgEACQgEAFgFAAQgFAAgDgDgAAJAAQgEgBAFgDQAEgEAEADQADAEgEACIgEACQAAAAgBgBQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_13.setTransform(36,8.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CAC8C6").s().p("AAQAVIABgmIgBAmQgKACgNgCQgTgCgPgGIgBgBIABgSQAYgOAWACQAIAAAEABIAQAEIALgDQAJASgCASQgJgEgFgFIAAgCQAAgJgEgNQAEANAAAJIAAACQgBAOgIAMIgNADgAgEASIACgBIABAAIAAAAIABgBIAAgGQAAgEAAgCQgDgCgDgBQADABADACQAAACAAAEIAAAGIgBABIAAAAIgBAAIgCABIgCAAIAAAAIAAAAIgBAAIAAAAQgEgBgDgCQgCgCAAgDIAAgBQABgDACgDIABAAIACgBIACgBIAAAAIABAAIABAAIgBAAIgBAAIAAAAIgCABIgCABIgBAAQgCADgBADIAAABQAAADACACQADACAEABIAAAAIABAAIAAAAIAAAAIACAAgAgegEQgCACACACQAIAHALgHQAEgFgDgDQgDgDgDAAQgGAAgIAHgAgBgJQgEADADAEQACACAEgCQAFgDgEgEQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBAAgBAAQAAABAAAAQAAAAAAAAQAAABgBAAgAhDALIALgIIADgDQAGgDAGgDIgBASIgBAUQgNgIgLgNgAgpgGgAAhgNIAAAAgAARgRQgEgBgIAAQALghAzARQgnAGAFAPIgQgEg");
	this.shape_14.setTransform(37.3,8.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BDBCB9").s().p("AgEAFIAMgCIgMACIgQAAQgRgCgNgGIABgUIABABQAPAGATACQAOACAJgCIgBARIANgDQAIgKABgOQAFAFAJAEQgCAMgGAKIgPgHQgBAYAfgIQgVAJgNAAQgSAAgDgUg");
	this.shape_15.setTransform(38,12.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AgHAvQgHgBgGgEQgCgVAPgCQACgsABgWQAGAAAJABIgBBDQAOADgDAVQgQAFgMgDgAADAVIgDgBAADAVIAHAAAgHATIAHAB");
	this.shape_16.setTransform(35.6,16.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DEDCDC").s().p("AAAAGQgGAAAAgGQAAgGAGAAQAHABAAAFQAAAHgHAAIAAgBg");
	this.shape_17.setTransform(36.5,20.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CAC8C6").s().p("AgNANIgBgFQAAgSAJgCIADAAIAFABQAPADgEASQgKAEgHAAIgKgBgAgEAAQAAAFAFAAQAHAAAAgFQAAgHgHAAQgFAAAAAHgAgCgMgAgFgMIACgBQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_18.setTransform(36.3,20.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BDBCB9").s().p("AgPAqQgCgUAPgCIAChDIAQABIgBBEIgHgBQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCABIgGgBIAGABQgGACgBAUIABAFQgHgCgGgEgAAEAVg");
	this.shape_19.setTransform(35.1,16.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AADgiQgHgBgJADQgGAAgFADQgVAMgFAuQADABAEAAQAHACAHACQANABAMAAQAYACAZgFQADgBADAAQgGg+gqgDg");
	this.shape_20.setTransform(35.5,23.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DEDCDC").s().p("AgBALQgEgDgCgGQgBgEABgEQABgFAEgBQACgBACADQAEADACAGQABAEgBAFQgBAEgDABIgCAAQgCAAgBgCg");
	this.shape_21.setTransform(38.6,24.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CAC8C6").s().p("AgOAjIgZgBQACgYAIgTQAFgNAIgHQAEgEAGgBQAoADAGA+IgGABQgTADgRAAIgMAAgAARgIQgEABgBAFQgBACABAGQACAGAEADQADADAEgBQADgBABgEQABgFgBgGQgCgEgEgDQgCgCgCAAIgCAAg");
	this.shape_22.setTransform(36.5,23.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDBCB9").s().p("AgTAfIgHgBQAFguAVgMQADgDAGAAQAJgDAJABQgGABgFAEQgHAHgFANQgGATgCAYIgPgEg");
	this.shape_23.setTransform(33.1,23.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AgzAIQgCgRAKgTIALAEQAGgOgngJQA0gOAJAiQAWABAXAPQAGADAHAGQABABACABQAEACAFAGQgKAMgNAGQgOAHgRABQgIAAgGgBQgGAigzgaQAfAJgBgYIgPAGQgGgMgBgMgAAqAHIgBgSAAqAHIABATAgQALIAAgmQgKACgGABQgFAOAAAKQABAOAHAMQAGADAHABgAAHgFQAEAAACADQADACgBACQAAADgCADQgCACgEAAQgEAAgCgCQgBgDAAgEQAAgBABgCQACgDAEAAgAgEgbQgIAAgEAAAgQAeQAHADAHAA");
	this.shape_24.setTransform(8.2,9.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BDBCB9").s().p("AgzAOQAgAJgBgXIgPAFQgGgKgCgMIAPgIQABAOAHALQAGACAGABIAAgRQAJADAOgBQAUAAAOgFIACgBIABASQgOAGgSABIgPgBQgFAAgIgDQAIADAFAAQgEAUgPAAQgOAAgXgMgAAFAGIAAAAg");
	this.shape_25.setTransform(7.3,11.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEDCDC").s().p("AAAACQgDgCADgDQAFgGAMAJQAEADgDADQgDACgEAAQgFAAgGgGgAgQAAQgFgCAFgEQADgDAEAEQAEAEgDABQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAAAgBg");
	this.shape_26.setTransform(9.4,7.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CAC8C6").s().p("AgdAlQgHgMgBgOQAAgLAFgNIAQgDIAAAmIAAATQgHgBgGgDgAAqASIgBgSIABASIgCABQgOAFgUAAQgMABgKgDIAAgmIgQADQAGgOgngJQA0gOAJAiQAWABAXAPQAGABAHAGIADACIAJAKQgKAMgNAGgAAAAMQAAAEABADQACACAEAAQAEAAACgCQACgDAAgDIAAgBQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgCgDgDAAIgBAAIAAAAIAAAAIABAAQADAAACADQABABAAAAQABABAAAAQAAABAAAAQAAABAAABIAAABQAAADgCADQgCACgEAAQgEAAgCgCQgBgDAAgEIAAgBQAAgDABgBQACgDAEAAQgEAAgCADQgBABAAADIAAABgAALgFQgEAEAFACQAKAKAIgHQADgDgDgBQgIgHgGAAQgDAAgCACgAgEgHQgEAEAEADQAEACADgCQADgCgEgEQgCgDgBAAIgDACgAgEgQIgMAAIAFAAIAHAAgAgrgRIALAEQgFANAAALIgOAIQgCgTAKgRgAAqASgAgggNg");
	this.shape_27.setTransform(8.2,8.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AAAAUQAAgBABABQACAAAAABIAHAAIABhEQgKAAgFAAQgBAWgCAsgAADAVIgDgBAgHAvQALADARgFQADgVgOgDAgHATQgPACACAVQAGADAHAC");
	this.shape_28.setTransform(9.2,16.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#DEDCDC").s().p("AAAAGQgFAAgBgGQABgGAFAAQAHABAAAFQAAAHgHAAIAAgBg");
	this.shape_29.setTransform(10,19.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#CAC8C6").s().p("AgNANIgBgFQAAgTAJgCIAEABIAFAAQAOADgDATQgLAEgIAAIgJgBgAgEAAQAAAFAFAAQAHAAAAgFQAAgHgHAAQgFAAAAAHgAgBgMgAgFgNIACAAQAAAAABABQAAAAAAAAQAAAAABAAQAAAAAAAAg");
	this.shape_30.setTransform(9.8,19.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BDBCB9").s().p("AgPAqQgCgUAPgCIAGAAIgGAAIAChDIAQAAIgBBEIgHAAQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgCAAQgGACgBAVIABAFQgHgCgGgEg");
	this.shape_31.setTransform(8.7,16.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#A59DA6").ss(0.4,1,1).p("AADgiQgHgBgJACQgdAFgIA4QAEABAEABQAHACAHABAADgiQAqADAGA9QgDABgDABQgkAHglgG");
	this.shape_32.setTransform(9.2,23.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#BDBCB9").s().p("AgTAgIgHgCQAIg5AbgFQAJgBAJAAQgPAFgIAVQgFASgDAXIgPgCg");
	this.shape_33.setTransform(6.8,23.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DEDCDC").s().p("AgBALQgEgEgBgFQgCgEABgEQABgFADgBQADgBACAEQAEACACAGQABAEgBAFQgBAEgDABIgBAAQgDAAgBgCg");
	this.shape_34.setTransform(12.4,24);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CAC8C6").s().p("AgnAhQADgXAHgTQAIgVAPgEQAoADAGA9IgGACQgUADgSAAQgRAAgSgCgAAQgIQgDABgBAFQgBACACAGQABAFADAEQAEACADAAQADgCACgEQABgEgBgHQgCgDgEgDQgDgDgCAAIgCABg");
	this.shape_35.setTransform(10.3,23.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#A59DA6").ss(0.4,1,1).p("ADWATQAFAAAFAAQADAGAAAHQgzAFgzADQhQAEhMgBQhjgChggLQAAgHACgHQAFABAFABIACgFQgFgBgFAAQARgjBPgMQBCgLBsAGQCUAOAaAnQgGABgFABgAhWAbIAAAAQhAgDhAgGAhkAVQCZAICegOAhkAVQg4gDg4gFAhWAbQCUAHCYgP");
	this.shape_36.setTransform(22.7,28.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BDBCB9").s().p("AjbAbQAAgHACgHIAKABQA/AHBAACIABAAQAZALAdAFQhigBhggLgAhPAXIgBAAQhAgCg/gHIABgEIgJgBQAQgjBQgNQgMAKgBAMQAAARAnASQCZAHCegOIACAFQhmAKhmAAQgvAAgwgDgAhdASQg5gDg4gFQA4AFA5ADgAjPAOIAAAAg");
	this.shape_37.setTransform(22.1,29);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DEDCDC").s().p("AAJAKQgMAAAAgIQAAgFADAAQAPABABAIQAAAEgGAAIgBAAgAgPgGQAAgEAEABQAEAAAAAEQAAAEgEAAQgEAAAAgFg");
	this.shape_38.setTransform(41,28.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CAC8C6").s().p("AhLArQgdgGgZgKQCTAHCYgPIAKAAQADAGAAAHQgzAFgzADQhAADg9AAIgfAAgAiQAVQgmgSAAgRQAAgMAMgJQBCgLBsAGQCUAOAaAnIgKACQhlAJhhAAQg5AAg5gDgACGAAQAAAIAOAAQAHABAAgFQgBgIgPgBQgFAAAAAFgAB6gIQgBAFAFAAQAEAAAAgEQgBgEgDAAIgBAAQgEAAABADg");
	this.shape_39.setTransform(27.1,28.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.051)").s().p("AgaCSQhXgChXgJQAAgGACgHIAJABIABgEIgJgBQAIgSAYgLIgBAAQAFgvAVgIQgDgSAOgBIAAgwIgHgBQgEAegugXQAbAJgCgWIgMAFQgFgLgCgLQgCgQAIgRIALAEQADgNgjgIQAugMAKAeQAVABAVANIALAIIADACIAJAIQgJALgMAGQgJAEgKACIABAyQANADgCARQARAIAHAbIALgBIgBgMIAKACIAAgKIgIgCQACgdAIgSQAIgRAQgFIADgMQADgNAGgLQAKgYAOgRQAZgbAogPQAGgHAIAEQAEABAFAEQAMAMABAWIgBAJQgQAHgQgEQgHgCgIgEIABgJIAAgBQgHAFgGAGQgSARgKAZQgHAPgDAUQAiANAIA5IgHACIAAALIAJgDIAAALIARADQAFgcAOgIIAEgCQAAgPAMgBIAAg1QgKgCgKgFQgMgHgJgLIAJgIIADgCQAFgFAGgCQATgMAWABQAIgdAvAPQgjAFAEAOIALgDQAJARgCAQQgBALgGALIgMgGQgBAVAbgGQguATgFgeIgGAAIACA1QALACgBAPQAWANAFApQAdALAKAQIgJAAIADAFIAJgBQACAGAAAGIhaAHQg2ADg3AAIgcAAg");
	this.shape_40.setTransform(21.1,18.3,1,1,0,0,0,-0.1,0);

	this.addChild(this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.5,33);


(lib.rivet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4597A8").ss(0.9,1,1).p("AgFArIAPAAQALgCAHgKQAJgNAAgSQAAgQgJgNQgEgHgJgGIgTAAQAEAAADADQAGADAFAHQAJAMgBARQABASgJAMQgJANgKAAgAggAVQgEgJAAgMQAAgRAJgMQAJgNAMAAQABAAABAAAggAVQACAFADAEQAIANAMAAIACAA");
	this.shape.setTransform(3.8,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#75B3A6").s().p("AgVArQANAAAIgNQAHgMAAgSQAAgRgHgMQgFgHgFgDQgFgDgFAAIAUAAQAIAGAFAHQAJANgBAQQABASgJANQgIAKgIACg");
	this.shape_1.setTransform(5.3,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B8FFF0").s().p("AgRAfQgEgKAAgMQAAgQAIgNQAJgNALAAIABAAQAFABAFACQAEAKAAANQAAAQgIAMQgJANgLAAIAAAAQgGAAgFgDg");
	this.shape_2.setTransform(2.3,3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#93E0D0").s().p("AgBAqQgMgBgJgMIgFgJQAGADAGAAQANAAAGgNQAJgKAAgSQAAgMgFgLQAGADAFAHQAJANAAASQAAAQgJANQgJAMgKABg");
	this.shape_3.setTransform(3.2,4.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.5,8.7);


(lib.OvenMitt = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B57A50").ss(1,1,1).p("AAAAuQgTAAgOgOQgOgNAAgTQAAgSAOgOQAOgNATAAQAUAAAOANQAOAOAAASQAAATgOANQgOAOgUAAg");
	this.shape.setTransform(26.8,25.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFA866").s().p("AghAgQgOgNAAgTQAAgSAOgOQAOgNATAAQAUAAAOANQAOAOAAASQAAATgOANQgOAOgUAAQgTAAgOgOg");
	this.shape_1.setTransform(26.8,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(51,0,51,0.169)").ss(0.8,1,1).p("AgEAAQACABACAAQACgBADAA");
	this.shape_2.setTransform(24.7,33.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#72C4B6").ss(0.8,1,1).p("AAfhsQACgEABgEQABgEABgEQAFABAEADQAEACAEAEAgyheQABgEAEgDQACgCADgCQABgBACgBAgyheQgFAIgBAMQAcANALAcQAUgQAGgeQgFgPgIgGAAfhsQgGASgQALQAWAIAMAcQAUgQAGgcQgFgRgLgKAgOhoQAGABAEADABshEQAAAIgJAHQALADAFAMQABACABACABfiGQgHAegTARIAeAiAh0g/QACAFACAFQADAHAEAGQAEAEAFAEQAGADAHACQAFggAWgPQgEgQgNgDAhTgbQACAHAEAGQAMAUAUAGQAFgFADgEQAMgNAIgXAhZgMQgDADgFACAhZgMQAEgFACgKABpASQgFgMgKgHQgHgFgJgFQgEALgFALQgHAOgMAKABXBPIAEAFAgFAtQAOgKAEgTQACgGAAgIQgKgbgWgIABKgLQgJgZgWgHQgEAggYANIAfAhAgRAuQgUgHgIgbQgCAXgTAKAAGByQAGgGADgKAgFB8QACgBADgBQAAgBAAgBQAEgCACgEAAaBhQALAQAQAFQAVgKAFgZAA0B9QABgDAAgEAAsCHQAGgDACgHABKgLQAVgSAEgY");
	this.shape_3.setTransform(26,29.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2D748A").ss(1,1,1).p("ACBiXQAAABAAABIACAJQAEAhADAjQADA3gGAsQgEAfgJAaQgLAigTAZQgSAZgbACQgbABgXgRQgUgQgSgUQgTgWgQgbQgVgkgQgrQgOgpgLg2AB9ipQABALACAGACAiYQAAABABAAAhMBFQAHAAAHgBQAEAAAFAAQAXgCAWgDAByAjQADgCADgBQAIgCAHgDAA2A0QAfgIAdgJABvBaQgHADgIADABzBYQADgCAEgCABvBaQACgCACAAAACA+QgEAAgGABAgGB2QAOgBAQgCQAFgBAGAAQAbgFAagKQADgBAFgCAgGB2QgGAAgFAAQgNAAgLAAAACA+QAagEAagG");
	this.shape_4.setTransform(25.1,27.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#2D748A").ss(0.5,1,1).p("AAAAAQAAAAABAA");
	this.shape_5.setTransform(37.4,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#35A1A1").ss(0.5,1,1).p("ABhg5QgPAHAEALABogfQANgMANgBQADgBAEABAArAEQAJAGADAJABjAAQgHgIgSABABjgWQASgGAJAFACJgLQgCgFgCgDQgDgDgEgBAgJgcIgEgTAASggQgIgLAIgKAA6gmQgGgKANgKAA4AhQABgEAAgEQgBgEgBgCAAMAgIADAOAgaAVQgMALAAALAAMAgIgFgSABnAHQAAADABACABjAAQACAEACADAhcAFQgJgJgUAEAg3gjQANAGgBAOAhTgWQAQABgBAMAghA4QgDgEgBgEQgBgCAAgDAhNAqQgBAEgBADQAAAFABAFAhNAqQAEgIALgIAhYAaQgMAEgGAHQgBACgBACQgDAGgBAHAh9AYQAJgDAPABAh9AYQgEABgCABQgEADgBAD");
	this.shape_6.setTransform(23.6,11.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2D748A").ss(0.8,1,1).p("AB7gzQgCgBgBAAQgIgDgKgBQgBAAgBAAQgDgBgCAAIgBAAABSgmQAGAAAEABQAIACABAEQABAEgGAGQgHAGgQAHQgBABgBAAQgBABgBAAQgIADgIADQgHABgHADQgQAFgTAFQgCAAgCABQgPAEgOADABFgmQAIgBAFABABFgmQgBAAAAAAIgBAAQgGAAgHABQgGAAgGABIgGABQgBAAAAAAQgHABgHABACIgrQAEAFABAGQAAABAAABQAAAHgEAIQgCACgCADAh+A0IABAAQgBAAAAgBQgLgHgCgLIAAgBQAAgBAAAAQgBgPAQgPQABgBABAAQAJgHANgIQAHgEAGgDQANgHAPgFQATgHAXgFQAFgBAFgBQAEgBADgBQAHgBAIgBQAZgEAVgBQASgBAPABACIgrQgBgBgDgCQgEgDgFgCABDgmQgFgBgIABQgDABgEAAQgDAAgCABAALAuQAdgIAIgDIAFgCAALAuQgEABgFABQgBAAgBABQgSAEgSADQgZADgVAAQgIgBgHAAQgLgBgHgCQgBAAAAAAIgBAAQgFgCgEgCABhAOQgDACgFACQgQAJgUAGABmAMQAVgMAKgKABkANQABgBABAAABkANIAAAAQgBAAgCABAhaACIgBABQgCABgCABQgIAFgCAFQgCACABACQAAACACABQADADAJACQAIAAALAAQAEAAAEAAQAQgBAUgEAhUAAQgDAAgDAC");
	this.shape_7.setTransform(23.9,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#82DECF").s().p("ABECMQATgRAJgaIAAgEIgCgEIAAgBIAHgDQgLAigTAZgAAoCPIABgHQAVgLAFgZQgFAZgVALQgQgGgLgQQALAQAQAGIgBAHQgZgCgTgJQAEgHADgJIALgCQAbgEAagKIAIgDIAEAFIgEgFIAPgGIgBACQgKAagWAUQgEAEgGAAIgHAAgAApCIIAAAAgAgbB3QAQgBAOgCQgDAJgEAHQgMgGgLgHgAADB0IAAAAgAhOA/QATgKACgXQAHAbAVAHQgWADgXABIgEgFgAg5AeIAIgJQAMgPAHgVQgHAVgMAPIgIAJQgUgHgMgVIgGgLIAGALQAMAVAUAHQgCAXgTAKQgOgXgHgbIgDgJQAFgEACgJQgCAJgFAEIgGgSQAGADAHACQAFggAWgPQgFgRgMgCIAWgBQgFAIAAAMQAcANAKAcQAXgQAFgfQgFgOgJgHIAQgCQAJgCAKgDQgHASgOAKQAVAJAMAcQgEAdgZAQIAfAgQgaAHgYADQAQgJACgTQABgHAAgHQgIgbgYgIQAYAIAIAbQAAAHgBAHQgCATgQAJIgMACQgVgHgHgbgAACAUQAZgQAEgdQAWAHAIAXQgDANgFALQgIAOgMAJQAMgJAIgOQAFgLADgNQAJAEAHAGQAKAJAGALQgdAKgfAHgABNAPQgHgGgJgEQAVgQAEgZQgEAZgVAQQgIgXgWgHQATgQAHgcQgGgSgKgJQAWgJAUgMIARgMQAFgEACgGIADAAQAEAhADAjQADA3gGAsIgPAFIgGACQgGgLgKgJgABWgkQALAEAGALIABAFIgBgFQgGgLgLgEQAJgGAAgIQAAAIgJAGIAAAAgAA5hFIAdAhIgdghQATgRAHgfQgHAfgTARIAAAAgAg5AeIAAAAgAg5AeIAAAAgAg5AeIAAAAgAhsgOIgHgYQgGgWAOgQIAWABQAMACAFARQgWAPgFAgQgHgCgGgDgAhEg4QAAgMAFgIIAagEIAVgDQAJAHAFAOQgFAfgXAQQgKgcgcgNgAAfgZIAAAAgAgCg+QAOgKAHgSQALgCALgEQAKAJAGASQgHAcgTAQQgMgcgVgJgAhVhLIAAAAgAgQhTIAAAAgABDiPIAAAAIgDACIADgCg");
	this.shape_8.setTransform(27.2,27.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#69AAAF").s().p("AAAAIIADgBIgDACIAAgBgAAAAHIAAABIAAgBgAgCgHIAAgBIACALIAAAEIgCgOg");
	this.shape_9.setTransform(38,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#72C4B6").s().p("AAACaQgSgQgSgUIAYAAIALAAQAJAIAMAFIgGAGIgDABIgFADIAFgDIADgBIAGgGQAVAKAZABQgCAGgHAEQAHgEACgGIAHAAQAGAAAEgEQAWgTAKgbIABgCIAEgCIAAAAIACAEIAAAEQgJAagTARIADAEQgSAZgbACIgFAAQgYAAgXgQgAhsgKQgOgpgLg2IABAAIAIADIABAAIABAAQAHADALAAIAPABQAVAAAZgDIAmgHIACAAIAHgDIAlgKIAFgCQAUgHAQgIIAIgEIADgCIACgBQAVgMAKgMIAEAAIADARIAAAAIABABIgBAAIABACIgBAJQgCAHgFAEIgRAMQgUAMgWAIIgIgGIgKgEIgBAIIgDAIIADgIIABgIIAKAEIAIAGQgLAEgLACQgKADgKACIgRADQgEgDgEgBQAEABAEADIgTADIgaADQACgEAEgDIAEgEIAEgCIgEACIgEAEQgEADgCAEIgWABIgWgBQgOAQAGAXIAHAXIgJgIQgEgGgEgHIgDgKIADAKQAEAHAEAGIAJAIIAGASQgCADgFACQAFgCACgDIADAKQAHAaAOAXIAEAGIgJAAIgOABQgVgkgQgrg");
	this.shape_10.setTransform(24.6,27.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiDAsIAAgBIAIAEgACEgXIAAAEIAAABIgEAAIAEgFgAAqgtIAHAAIANgBIgNABIgNABIAGgBg");
	this.shape_11.setTransform(24.4,12.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#35A1A1").s().p("AgeClQgTgWgQgbIAPgBIAJAAQAOAWAWATIAJAJIgJAAIgZAAgAhSgzIgBgGIAAgEIACgGQATACAVgBIAAAFIAEAHIgEgHIAAgFQAQgCASgEIAPgFIADANIgDgNIArgOIACAGIAAADIgBAGIABgGIAAgDIgCgGIAdgKQAIgDAHgFQAQgKALgPIAAAAQAHgMgDgJIABAAIABAAIAAAAIAFAAIgFAAIAAAAIgBAAIgBAAIgFgHIABgBIAAAAIABgBIABAAIACAAQAEADACAEIABACIADABQADAEABAGIAAACQAAAIgDAHIgEAFQgBgFgDgDQgCgDgFgBQAFABACADQADADABAFQgKAMgVAMIgDgEIABAFIAAAAIgDACIgIAEQgQAIgVAHIgEACIglAKIgJADIgCAAIglAHQgYADgVAAIAAAAgABjhmIgEgHIAEAHgACEidIgKgGIAKAGgAhhg0QgLAAgHgDQAAgHADgGIACgEIgCAEQgDAGAAAHIgCAAIgBAAIgIgEQgMgGgBgMQAAgEAEgCIAGgDIACAEQADAGAIADIAGABQAOAEAPABIgCAGIAAAEIABAGIgPgBgAhchTQgKgBgCgDIgCgDQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAABgBQABgEAJgFIAEgDIgBACQABAFAagEQARgCAXgFIAUgFQAhgJAXgJIAIgDIAKgFQAFgDAAgDQAAAAgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAIANAAIAKABQAIACABAFQABAEgHAFQgGAGgQAIIgDABIgBABIgRAGIgNAFIgkALIgDAAIgeAHQgTAEgRABIgIAAIgKAAIgIAAgAiEhjIACgCQgCAIADAHIgGADQgCgHAFgJgAiBhWIAAAAg");
	this.shape_12.setTransform(23.9,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#40BFBF").s().p("AgJCfQgVgTgPgXQAXgBAWgDIAEABIAGgDQAbgEAagGQAegHAegKIAGgCIAPgGQgFAfgJAbIgHADIgEACIgPAHIgIADQgaAJgbAFIgLACQgPACgQAAIgKgIgAAABxIAKgCIgGADIgEgBgAAKBvIAAAAgAhUhAQAEgJALgHQgLAHgEAJQgPgCgOgDQAGgIAMgDQgMADgGAIIgGgCQgIgCgDgGIgCgEIABAAQAGgCAIAAIABAAIAAAAIAFAAIADAAIgDAAIgFAAIAAAAIgBAAQgIAAgGACIgBAAQgDgIACgHIgDACQgEAIACAHQgEADgBAEIAAgBIAAgBQAAgPAPgPIACgCQAJgIAOgIIANgHQANgHAPgFQATgHAXgFIAJgCIAJgCIANgCQAagEAVgBQARgBAPABQgMAHAAAIIABAEIgBgEQAAgIAMgHIABAAIAFABIACAAQALABAHADIADABIAAAAIgBABIAFAGQgNABgNAMQAAgEgIgCIgKgBIgNAAQABAAABAAQABAAAAABQABAAAAAAQAAABAAAAQABACgFAEIgKAEIgIAEQgYAJggAJIgVAFQgWAFgRACQgaADgBgEIABgCIAAgBIAAABIgFACIgBAAQgFgHgJAAIAAAAIgBAAIgKACIAAAAIgBAAIgBABIAAAAIAAAAIgBAAIABAAIAAAAIAAAAIABgBIABAAIAAAAIAKgCIABAAIAAAAQAJAAAFAHIABAAQgIAFgCAFQAAABAAAAQgBABAAAAQAAABAAAAQAAABAAAAIACADQADADAKACIASAAIAIAAQARgBATgEIAggHIABgBIAFATIgQAEQgRAEgRACIAAAAQAAgKAMgLQgMALAAAKIAAAAIgRABIgWgBgAhehpIAHgDIgCAAIgFADIAAAAgAhLh1IAAgBQAAgMgPgBQAPABAAAMIAAABgAgyh8IAAgBQAAgNgMgFQAMAFAAANIAAABgAgQiJIgEgSgAALiNQgEgFAAgFQAAgFAEgFQgEAFAAAFQAAAFAEAFgAASiOIANgCIABAAIAGgBIANgBIANgBIgNAAQgCgDAAgDQAAgGAJgHQgJAHAAAGQAAADACADIgHABIgGABIgGABIgBAAIgNACgABAiTIACAAIgCAAIAAAAgAAFhKIgFgTIAkgKQAJAHADAIIgrAOgAAkhnIANgFIARgHIABgBIABAAIABAAIAAAAIABAAQAOABAIAIIAAAAIAAABQgHAEgIADIgdALQgDgIgJgHgABghjIADAEIgCABIgBgFgAhjhmIAAAAgABchqIAAgBIAAAAQgIgIgOgBIgBAAIAAAAIgBAAIgBAAIACgBQAQgHAHgGIABAAIABAAIADgBIAGgCIACAAIAEAAIABAAIAAAAIAIABIAAAAIABAAIAAABQgLAPgQAKIAAAAgABhiMQANgMANgBQADAKgHALIgBAAIAAAAIgIgBIAAAAIgBAAIgEAAIgCAAIgGACIgDABIgBAAIgBAAQAGgGgBgEgAAziTIAAAAgACCiYIgBgDIAEADIgDAAg");
	this.shape_13.setTransform(24.2,22.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#B57A50").ss(0.8,1,1).p("AANAfQAHgVAAgMQABgYgRgDQgEgBgPADQAEACADADQAFAHACANQABAKgDATAgPgbQgBAAgBgBIgDAIQAJAFACANQACAKgDAS");
	this.shape_14.setTransform(34.9,3.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC66").s().p("AgFAbQACgTgBgKQgBgNgGgHQgDgDgDgCQAPgDADABQARADAAAYQgBAMgGAVQgIgDgIgBg");
	this.shape_15.setTransform(35.1,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E8AE4D").s().p("AAFAcIgFgBQADgSgCgKQgBgNgIgFIADgIIACABQADACACADQAFAHACANQABAKgDATIgCAAg");
	this.shape_16.setTransform(33.7,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B57A50").ss(0.8,1,1).p("ACVAtQAXgEARgIQBDghgVhhQgBgBAAgCQgDgEgCgBQgGgDgIAHQAAAAgBAAQgBACgCACQgKAHgMAGQgVAJgcADAiKgGQgTAFgWAAQgXAAgagFQgJAAgCAGQAAADAAADAhjBrQgwABgggRQgvgYgNg9");
	this.shape_17.setTransform(24.1,15.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB8E65").s().p("AizBbQgvgYgNg9IADgCQAaAlAfAOQAeAOAkgHIAOAsIgGAAQgsAAgegPgACTARQAZgFARgMQApgdgDhJIACgDQACABADAEIABACQAVBihDAgQgRAIgXAEIgCgbg");
	this.shape_18.setTransform(24.1,15.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFA866").s().p("AitBNQgggPgZglIgEACIABgGQACgIAJAAQAaAFAXAAQAWAAATgFQACAMAMAHQAFAbAFAYQgMADgLAAQgWAAgUgJgACOgiQAEgIgBgHIAAgCQAcgDAWgJQALgGAKgHIAEgEIABAAQAIgHAFADIgBADQADBJgpAdQgRAMgaAFQgDgjgHglg");
	this.shape_19.setTransform(23.5,13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#330000").ss(0.8,1,1).p("AACAAQgCAAgBAB");
	this.shape_20.setTransform(15.3,11.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#CCCCCC").s().p("AgKgBIAJgBIABAAQAGgBAFABIgMAGQgEgEgFgBg");
	this.shape_21.setTransform(34.2,0.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AABAAIACAAIgFABIADgBg");
	this.shape_22.setTransform(15.4,11.7);

	this.addChild(this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,48.1,44.5);


(lib.Mixer = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(1,1,1).p("AClh6QAHgCAHgDIgCgOQgHACgHACQgyAOgyAKQhyAVhxgEQgHAAgHAAIACANQAHABAHAAQByAFBxgVQAygKAygOgAAaCMQAlgFAmgQQATgTAQgdQAIgQAGgQQAWg4gEhGQAAgCgDghAiihSQAEAgAAADQANBXAyA7QAVAZAWAOQAnAHAngF");
	this.shape.setTransform(48.7,37);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9A7A3").s().p("Ag1CAQgWgOgUgYQgzg7gMhXIgFgjQByAFBxgVQAygKAygOQgyAXgxARQhBAVg6AJQAOCgBFAfQgRACgPAAQgXAAgXgEg");
	this.shape_1.setTransform(48.8,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1AFAB").s().p("Ahwg8QA7gJBAgVQAwgRAygXIADAjQAEBGgVA3QgHARgIAQQgPAcgTATQgmAQgkAFQhHgfgNiggABTgeQgLABADAMQABALAIAAQAGgCACgGIABgHQgBgJgHAAIgCAAgABRhtQgZADAFAmQADAaAOgCQAPgCAGgUIAEgUQgCgXgQAAIgEAAg");
	this.shape_2.setTransform(54.2,37.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5C4C2").s().p("ACCA8QgCgMAKAAQAJgCACALIgBAHQgCAGgGABIgBAAQgIAAgBgLgAB0AJQgEgjAZgDQATgDADAZIgEATQgGAUgPACIgCAAQgMAAgEgZgAiigLIgOgBIgCgNIAOAAQBxAEBygVQAygKAygOIAOgEIACAOIgOAFQgyAOgyAKQhbARhcAAIgsgBg");
	this.shape_3.setTransform(48.7,29.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A6A6A6").ss(0.7,1,1).p("AC7ggQgMABgOABQgJABgKgBQgLABgLgBQgEAAgEAAQgZgCgegDQgmgEghAAQgIAAgGAAQgaABgYACQgvAEgnAMQgFABgEACQgIACgHADQgIAEgJADQgNAFgMAGQgBABgBABQgIAFgJAGAB9gOQAUAAARAAQACAAAAAAQADgBAEABQAhgCAagGQAagGATgKQAFgJgIgHQgTAKgaAGQgSAEgWACABZgQQATABARABAjpAaIABgBQABgBACAAQAEgDAEgCQAKgGAJgEQAJgEAIgDQAMgDAMgDQAngMAvgFQAYgCAaAAQAmgBAuAFQAPACAPABAkTAmQAEgCADgCQABgBAAAAQACgCACgBQAHgGAHgFAkTAmQgBADAAADQgCAIAFACQABABAAAAQADgDAEgCQAAgBABAAQACgCACgCQAEgDAEgDQAJgHAKgG");
	this.shape_4.setTransform(30.2,21.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#7EBC84").ss(0.7,1,1).p("AEfg2QgVgqhMgTQhegWh3AZQgOACgNAEQgYAGgXAHQgtAPgmAVQgLAGgMAHQgHAFgJAFQgCACgDACQgKAIgJAHQgBABgBABQgJAIgHAGIAAAAQgnApAIApQADAUAOAQQAAABABAAQABABAAABQACABABABQABABABABAEXAgQATgpgFgZQgCgLgEgJ");
	this.shape_5.setTransform(29.5,12.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DDDDDD").s().p("AjBAZIgBgDIACgFQAFABABADIgEAFgAi0ARIgBgCQAAgEAEgBQAEgBABAFIgEAFgAiiAGQgDgFANgBIACAAQAJgCAAACIAAAEIgKADIgEACIgCAAQgFAAAAgDgAC8gKIgBgDQgBgEAEgBQAEAAABAEIgDAEIgEAAgABFgTIAAgDIADgCQANAAAMABQAYABABAGIgEAFQgwgBgBgHgAA2gRIgBgDIAEgFQAEABAAADIgDAEIgEAAg");
	this.shape_6.setTransform(26.7,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BBBBBB").s().p("AkRA2QgFgCACgIIABgGIAHgEIABgBIAEgDIAOgLQAHAEAIADIABAAQgKAGgJAHIgIAGIgEAEIgBABIgHAFIgBgBgACkgPIADgBQAIgDAGgGIAGgHQAWgCASgEQAagGATgKQAIAHgFAJQgTAKgaAGQgaAGghACIgHAAIgCAAIACgBgABZgQQAKgFANgJIAIAAIAWAAIgEAEIgDAEIgKAIIgkgCg");
	this.shape_7.setTransform(30.2,21.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4C4C4").s().p("AjKAgQgJgCgHgEIARgMIACgBIAZgNIARgFIAPgGIAJgCQAngMAvgFQAYgCAYAAIAOAAQAjAAAmAEIA4AFQgNAJgLAEIgegCQgugFgoABQgYAAgYACQgvAFgnAKIgYAIIgRAHIgTAKIgIAEIgDACIgBABIAAgBgAjGASIABADIADABIAEgFQAAgDgFgBgAi1AGQgEABABAEIABACIADACIAEgFQgBgEgDAAIgBAAgAiagEIgCAAQgNADADADQABAEAGgBIAEgCIAKgDIAAgCQAAgDgEAAIgFABgABEgcIgCACIgBADQABAHAwACIAEgGQgBgFgXgCIgRgBIgJAAgAAxgXIABACIAFAAIACgEQAAgDgEgBIgEAGgACdgHIAJgIIADgEIAEgEIATAAIAbgCIgHAHQgGAFgHADIgEACIgCABIgkAAgAC6gWQgEABABAFIABACIAEABIADgEQAAgFgEAAIgBAAg");
	this.shape_8.setTransform(27.1,20.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#A9DEB3").s().p("AkCBgQgQgEgCgUQgEgeAKgLIAAAAQAHgIAJgIIACgCIATgNIAFgEIAQgKIAXgNQAmgVAtgPQAXgHAYgGIAbgGQB3gZBeAWQBMATAVAqQgCANgIALQgRAZgmAHQgvAKhZgHQhHgGgsAFIgVADIgcAGQgjAJgkAPIgNAGIgXAJIgRAGQgOAEgMADIgCAAIgBAAIgLABIgHAAgAj/AuQgEABAAAGQABAFAFgBIAFgCIAAgEQgBgFgEAAIgCAAgAjuAXQgLACACALQACAKALgCQAKgCgCgLQgBgJgIAAIgDABgAC8g6QgWAEAGARQABAJAKAHQAMAKARgEQAPgDAEgLIAAgKQgBgIgLgHQgJgFgMAAIgKABgACOhDQgKACACALQACAMANgDQAGgBACgGQACgDgBgDQgCgKgJAAIgFABg");
	this.shape_9.setTransform(30.4,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C8EACE").s().p("Aj1A6QAAgFAFgBQAFgBABAFIAAAEIgEADIgCAAQgEAAgBgFgAjpAqQgCgLALgDQALgCACALQACAKgLACIgEABQgHAAgCgIgADFgPQgJgIgCgJQgFgQAWgFQARgDANAIQALAGACAJIgBAKQgDAKgPADIgKACQgLAAgJgHgACUgwQgBgMAKgCQANgCADAMQAAADgBADQgCAFgHABIgFABQgIAAgCgJg");
	this.shape_10.setTransform(28.9,9.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#96D8A3").s().p("AkOBYIgDgCIgBgBIgBgBQgOgRgDgTQgIgpAngoQgKALAEAcQACAUAQAEQAHACALgCIABAAIACgBQAMgDAOgEIARgGIAXgJIANgFQAkgNAjgKIAcgGIAVgDQAsgFBHAGQBZAHAvgJQAmgIARgaQAIgMACgNQAEAJACALQAFAagTAqQgTAJgaAGQgSAEgWACIgaACIgTAAIgWAAIgIAAIg3gFQgmgEghAAIgOAAQgaAAgYACQgvAFgnAMIgJACIgPAGIgRAHIgZANIgCABIgRAMIgOALIgEACIgBABIgHAFIgCgDg");
	this.shape_11.setTransform(29.5,16.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A6A6A6").ss(0.7,1,1).p("AgEggQALADAKgFQACgCACgBIABgpIgbgBgAANgWQgDAUgBAPQgTAhgggGQgFgJgGgKQgSggBHgJQAGgBAHgBgAAXgVQgHAkAKASQALASAJgPQAKgPAGgYQAFgUgsACgAARgiQA+gEgHAfQgHAcgWAjQgXAigfgOQghgPgXgoQgXglBWgQAAfA6QgSAUgVgKQgPgHgMgNQAiAHANghQAEAXAPANg");
	this.shape_12.setTransform(49.5,24.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4C4C4").s().p("AgLA2QghgPgXgnQgXgmBWgQQALADAKgFQA+gEgHAfQgHAdgWAiQgQAYgWAAQgHAAgJgEgAgIAuQAVAKASgUQgPgNgEgXQgNAhgigHQAMANAPAHgAAXgrQgHAmAKAQQALASAJgPQAKgOAGgZQAFgSgmAAIgGAAgAAAgqQhHAJASAhIALASQAgAGATgfQABgRADgUIgNACg");
	this.shape_13.setTransform(49.5,27.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBBBBB").s().p("AgMAXIgBguIAbACIgBAmIgEADQgHAEgGAAIgIgBg");
	this.shape_14.setTransform(50.3,19.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#7EBC84").ss(0.7,1,1).p("Ak3glQgQhtAxggQAjgYAjgDQA6gWAsARQgeAsAMBZQAJA/AfBTQADAJADAIQARgCAQgCQDlgeBcAPQBHAMgNAmIhPBYQABABgBACIpOALQAAgBABAAQAThAA0gQQgmhpgKhGgAipCRQgahCgNg+QgBgBAAgCAjQjNQgbBiAaB5AkHCKQAEAKAEAJIBWgMIBbg7AD/DNQgKhLjlANQk6ARgkA6");
	this.shape_15.setTransform(34.8,39.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7DCE8D").s().p("AgsB0Qgah5AbhjQA4gWAsASQgdAsAMBWQgTgfgUAbQgSAdgZBGIgCgBg");
	this.shape_16.setTransform(18.3,28.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#96D8A3").s().p("AgVBOQgmhngLhHQAQA9BUgIIABADQAOA7AaBCIhUAMIgIgTg");
	this.shape_17.setTransform(10.7,45.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#84D093").s().p("AkmDUQAkg7E6gQQDlgNAKBKIAAAEIpOALIABgBgAioALIgBgDIACABQAZhDATgeQAVgdASAiQAJA+AfBUIAGARIhbA7QgahDgNg9gAkPgrQgQhtAxggQAjgYAjgEQgbBjAaB5IgUABQhFAAgNg0g");
	this.shape_18.setTransform(30.8,39.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A9DEB3").s().p("AkHAAIAIARIBWgMIBag5IAigEQDkgeBcAPQBHALgMAnIhPBVQgKhJjmAMQk5AQglA6QAThAA1gNgAE1gxIhABLQABAEAFgBQALgCAagjQAagjgBgCQAAgEgDAAIgBAAg");
	this.shape_19.setTransform(34.9,53.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C8EACE").s().p("AghAkIA+hLQAEAAABAEQAAADgZAgQgZAlgLACIgCABQgDAAgBgEg");
	this.shape_20.setTransform(62.8,52.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.5,61);


(lib.FINALsoap = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(0.7,1,1).p("ABVgYQAIAugIAQQgwAHhHgFIAAAjQBZADBegTQCWgdhAhoQhDAXhWAMQACAIABAHgAgiAoIAAgoQhxgJhlguQgcBgCFAXQA2AJA3ACAj4g3QACgHADgHQCaBFCugY");
	this.shape.setTransform(5.5,27.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DAD8D8").s().p("AgZARIgDgHQAAgKAUgLQASgNAZAAQAWAAgBAPQAAAKgTAMQgVAMgYAAQgLAAgGgIgAg3AAIACgFQADgGAHABQALgBgBAJQAAAJgOAAQgIAAAAgHg");
	this.shape_1.setTransform(23.5,25.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1AFAB").s().p("AAsA2IAAgoQhvgMhlgrIAFgOQCaBECugXQAIAugIAQQgdAEgmAAQgZAAgdgCg");
	this.shape_2.setTransform(-2.4,25.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDBCB9").s().p("AAAA2QiDgXAchfQBlAtBvAMIAAAmIAAAiQg3gBg2gKgAhcghQAAANAbASQAlAWA5AAQAcAAAAgJQAAgCg9gXQhBgZgPAAQgIAAAAAGg");
	this.shape_3.setTransform(-8.9,28.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CAC8C6").s().p("AgqBLIAAgjQBHAFAwgHQAIgQgIguIgDgPQBWgMBDgXQBABoiWAdQhRAQhNAAIgZAAgACigiQgUAMAAAMIADAHQAGAGALAAQAaAAAVgLQATgLAAgMQABgPgWAAQgZAAgUAMgAB1gcIgCAGQAAAJAIAAQAOAAAAgLQABgJgLAAQgHAAgDAFgAjaAFQgbgPAAgNQAAgHAIAAQAPAABBAaQA/AWAAADQAAAJgcAAQg7AAglgZg");
	this.shape_4.setTransform(6.3,27.3);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#958B96").ss(0.7,1,1).p("AhohHIAAgVQBmgaBrAaIgHARIgEAHQhBgMgzAoIAAAgQgIAGgJACIAABnQgOAGgIgGIAAhnQgJgCgIgGQABgggbgDgAg9AAQALABALgB");
	this.shape_5.setTransform(11.6,-42.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B1AFAB").s().p("AgKAyIAAhmQAKADALgDIAABmQgHADgEAAQgGAAgEgDg");
	this.shape_6.setTransform(6.5,-37.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BDBCB9").s().p("Ag5AnQgJgCgIgFQABgggbgCIAAgbQAYAGAQASIAEAFIAQgFIAAgEQAAgRAlgIQAYgGAeAAQAbAAAYAGIgEAHQhBgMgzAnIAAAgQgJAFgIACIgLACIgLgCg");
	this.shape_7.setTransform(11.2,-46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DAD8D8").s().p("AghACQAAgDALgGQAJgGAIAAQALAAgBAKQABADgGAHQgIAHgLAAQgMAAgCgMgAARgBIAAgEQAAgIAIAAQAJAAAAAIQAAAGgIAAQgHAAgCgCg");
	this.shape_8.setTransform(7.5,-51.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CAC8C6").s().p("AhAAaQgQgSgYgGIAAgUQBmgZBrAZIgHARQgYgFgbAAQgeAAgYAFQglAHAAARIAAADIgQAFIgEgFgAhAgQQgKAGAAAFQACAKAMAAQAKAAAJgFQAHgHAAgFQABgKgNAAQgIAAgKAGgAgWgOIAAAEQACAEAHAAQAIAAAAgIQAAgIgJAAQgIAAAAAIg");
	this.shape_9.setTransform(11.6,-50.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#958B96").ss(0.7,1,1).p("AAvggQgqgWg3AWQAwAgAxgggAgyggIgHA7QA2AgA9gbIgLhA");
	this.shape_10.setTransform(6.4,-29.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CAC8C6").s().p("AgwgBQA3gWAqAWQgZAOgYAAQgYAAgYgOg");
	this.shape_11.setTransform(6.2,-32.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BDBCB9").s().p("Ag5AWIAHg8QAwAhAxghIALBBQgcAMgbAAQgfAAgdgRg");
	this.shape_12.setTransform(6.4,-28.9);

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BEE2EB").ss(1,1,1).p("AgpkTQAAABgBABQgUAlAtAMIAACpQiqCpgqBjQgLA4BIALQCiAXC+gdQA7gJgOg8QgGgUgNgbQg3hohshrIAAitQAsgIgVgnQgBgBAAgBAgpkRQAAgBAAgBABFkRQAAgBAAgBIAAAAIAAAAIAAgBQgDgFgNgEQgRgEgXAAQgVAAgRAEQgOAFgCAFABFkRQAAAGgQAFQgRAEgXAAQgFAAgFAAQgPgBgNgDQgQgFAAgG");
	this.shape_13.setTransform(4.9,0.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.502)").s().p("AA8BWQhshEgRhhQAAgGAGAAQAGAAA7BTIA8BRQAAAEgBABQAAAAgBABQAAAAAAAAQgBAAgBABQAAAAgBAAIgBAAg");
	this.shape_14.setTransform(15.9,7.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(183,225,242,0.502)").s().p("AglEOQhWACgngYQgngYAJgWQAJgXAggzQAhgyAzg7QAZgbAFgIQAFgJAEgTQAGgjAAg1QAAgPgIhiIABgLIAKAAQAWAAAQgFQARgEAAgHIAAAAQAWAogtAIIAACsQBtBsA2BoQAOAaAFAVQgJBCiiAAQgbAAgigDgAAJgHQASBhBuBEQABAAABAAQABAAAAAAQABgBAAAAQAAAAAAgBQABgBAAgEIg7hTQg9hQgHAAQgGAAAAAFg");
	this.shape_15.setTransform(8.3,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(147,209,236,0.502)").s().p("AioEYQhIgLALg4QAqhjCqipIAAipQgtgMAUglIABAAIAAgCQACgFAOgFQARgEAVAAQAXAAARAEQANAEADAFIAAABIAAAAIAAAAIAAACQAAAGgQAFQgRAEgXAAIgKAAQgPgBgNgDQgQgFAAgGQAAAGAQAFQANADAPABIgBALQAHBiAAAPQAAA1gFAjQgEAUgEAJQgEAHgaAcQgyA6ghAzQghAzgJAWQgJAWAoAYQAnAYBWgBQDdAOALhOQAOA8g7AJQhrAQhgAAQhNAAhIgKgAADkCIAAAAg");
	this.shape_16.setTransform(4.9,0.3);

	// Layer 2
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(154,254,129,0.702)").s().p("AiNBUQAAgDAGgDQAFAFAAABIAAAEIgFABgAhTBIQAAgJAJAAQAIAAAAAHQAAAKgKAAQgJAAACgIgAgkBFQAAgEAGgCIAFAGIgBAEIgEABIgGgFgAAsBCQgBgEAAgDQAAgOAPAAQANAAABANQAAAPgQAAQgIAAgEgHgAB7A6IAAgEQAAgLAKACIAHAAIACAFQAAAEgFAEQgEADgCAAQgHAAgBgDgAhpAzQAAgEAFgCQAGAEAAABIAAAEIgGACgAhEAeQAAgEAGgCQAFAEAAACIAAADIgFACgAgmAWQAAgEAGgCIAFAGIgBAEIgEACIgGgGgABUAJQgHAAgBgEIAAgEQAAgJAKAAQAJAAAAAIQAAAJgLAAIAAAAgAg5AFQgMAAADgFQAAgMANAAQAKAAgCAJQAAAIgLAAIgBAAgAgegSQgBgGABgDQABgFAMAAQASAAAAATQAAAFgDAGQgGAFgHAAQgUAAAFgVgAhaghQAAgKAIAAQANAAgBALQAAALgKAAQgNAAADgMgAApgvIAAgGQAAgFAFgEQAEgEAEAAIANAOQAAAKgOAAIgBAAQgJAAgCgFgAB0hBQAAgFAFgBIAGAFIgBAEIgFACIgFgFgAg3hDQAAgEAGgCQAGAEAAABIgBAEIgFACgAAuhOQAAgKAMAAQAHAAAAAHQAAAIgNACQgGgFAAgCgAh6hQQAAgFAFAAQAIAAAAAHIAAAEIgGADQgFAAgCgJg");
	this.shape_17.setTransform(7.2,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(65,255,17,0.702)").s().p("AioBzQhIgLALg3QAchBBWhjQAVABAiABIAEAAQA0AABBgFIAlgDIAhgDQAwA8AfA7QANAZAGAUQAOA8g7AJQhrAQhgAAQhNAAhIgKgAh2BDIAGAFIAFgCIAAgEQAAgBgFgEQgGACAAAEgAg8A2QgCAJAJAAQAKAAAAgKQAAgHgIAAQgJAAAAAIgAgNA0IAGAFIAEgCIABgEIgFgFQgGABAAAFgABCApQgBADACAEQAEAHAIAAQAQAAAAgPQgBgNgNAAIgBAAQgOAAAAAOgACSAkIAAAEQABAEAHAAQACAAAEgEQAFgEAAgDIgCgFIgHgBIgCAAQgIAAAAAJgAhSAhIAFAFIAGgCIAAgDQAAgCgGgEQgFADAAADgAgtAMIAGAGIAFgCIAAgEQAAgBgFgFQgGADAAADgAgPAFIAGAFIAEgCIABgDIgFgFQgGABAAAEgABjgOIAAAEQABADAHAAQALAAAAgJQAAgJgJAAQgKAAAAALgAgrgSQgDAIAMAAQAMAAAAgKQACgJgKAAQgNAAAAALgAgHgsQgCADACAGQgFAXASAAQAHAAAGgHQAFgHAAgFQAAgTgUAAIAAAAQgKAAgBAGgAhDgyQgDALANABQAKAAAAgMQABgLgNAAIAAAAQgIAAAAALgABFhQQgFAFAAAEIAAAGQACAGAKAAQAOAAAAgLIgNgNQgEAAgEADgACLhTIAFAFIAFgCIABgDIgGgGQgGACABAEgAgghVIAGAFIAFgBIABgEQgBgBgFgFQgGADAAADgABFhgQAAACAGAFQANgBAAgJQAAgHgHAAQgMAAAAAKgAhjhhQACAIAFAAIAGgDIAAgDQAAgHgIAAQgFAAAAAFg");
	this.shape_18.setTransform(4.9,16.8);

	// Layer 4
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CCCCCC").ss(1,1,1).p("AAKj8IAAH5IgTAAIAAn5");
	this.shape_19.setTransform(6.3,-0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgJD9IAAn5IATAAIAAH5g");
	this.shape_20.setTransform(6.3,-0.1);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.9,-53.4,50.9,88.4);


(lib.FINALrocketblender = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(1,1,1).p("AAbARQACAAACgBQAOgHAAgJQAAgIgOgHQgNgGgSAAQgDAAgGAAAAbARQgMAFgPAAQgRAAgNgGQgOgHAAgJQAAgIAOgHQAJgEAMgC");
	this.shape.setTransform(-63.1,-57.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDBCB9").s().p("AgVAPQgOgGAAgJQAAgIAOgHQAJgEAMgCIAAABQAAAhAjAEQgLAFgQAAQgQAAgNgHg");
	this.shape_1.setTransform(-64,-57.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CAC8C6").s().p("AgagRIAAgBIAKgBQARAAAMAHQAOAGAAAIQAAAJgOAHIgEACQgjgFAAggg");
	this.shape_2.setTransform(-61.3,-57.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#958B96").ss(1,1,1).p("ACIA+QgRgfgPgYQg/hfgyAJQgDgBgDAAACIA+QAAABABABQgLADgLACQhaAShXgKQgdgDgcgGQgJgCgIgCQARgfAQgZQA3hWAhgC");
	this.shape_3.setTransform(-63.1,-48.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BDBCB9").s().p("Ag+BNQgdgDgcgGIgRgEQARggAQgYQA3hWAhgCQgSAugBAbIACAOQABALAEAJQAHAMALAIQAcARBVAAIAIAAIAYgCIABACIgXAFQg5AMg5AAQgeAAgggEg");
	this.shape_4.setTransform(-63.1,-48.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DAD9D8").s().p("AAMAWIAAgEQACgGAIABIAEABIAEABQABAAAAAAQAAABAAAAQABAAAAABQAAABAAAAIAAAEQAAALgKAAQgLAAABgLgAgfgPQAAgRAPAAQAQAAAEANIADAOQAAAQgNAAQgZAAAAgag");
	this.shape_5.setTransform(-59.1,-49.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CAC8C6").s().p("Ag7A3QgMgHgGgNQgEgIgCgLIgBgQQAAgZASguIAHAAQAzgIA9BeQAQAYAQAfIgYACIgHAAQhUAAgdgRgAACAPIgBADQgBAMALAAQAKAAAAgMIAAgDQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAAAIgEgBIgFgBIgCAAQgGAAgBAFgAgqgSQAAAZAZAAQAPAAAAgQIgCgOQgGgNgRAAQgPAAAAASg");
	this.shape_6.setTransform(-58,-49.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AAiAIQgCAJgHAHQgKAKgPAAQgMAAgKgKQgLgKAAgOQAAgNALgKQAKgKAMAAQAMAAAJAH");
	this.shape_7.setTransform(-51.7,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6F9C5A").ss(0.5,1,1).p("AAJgWQADABACABQACACACABQAHAIAAAJQAAAGgDAGAAJgWQgEgCgFAAQgJAAgHAHQgIAIAAAJQAAAIAFAGQABACACABQAHAIAJAAQAKAAAIgIQACgCACgD");
	this.shape_8.setTransform(-50.5,23.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#BEE2EB").ss(1,1,1).p("AjMAhQAFAfACALQAFASADAKQAIAeAMAdIAAAAQACAFABABQAAgBABAAQAFAQACAFQACAEACAFQABAAABABQBrAzBvgdIAbgHQAGgCAGgDIAVgIQATggAEgJACWCeQAEgNADgHIAAgBQALgeAHgeQAFgUACgTQAHgtgDgwAiAk9QhjC9AXChABqk7QBICUAIBwACvBNQCMAphNCMQgWg9hGgXIADgPACWCeQgCAHgCAJAC2AmQDWAuieDlQgbhWhVgbAjFBLQhyBIBABsQAEgxBNgmAiaDFQheAxALBIQiVjHC2hW");
	this.shape_9.setTransform(-62.2,-10);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#958B96").ss(1,1,1).p("ADhBKQgBgEAAgEQgEgZgHgXQgGgSgIgTQgCgEgCgEQgIgSgLgRQAAAAAAgBQgGgJgGgJQgiAQghAJQgsANgrADIAAAAQAAAGAAAHQAAAYABAVQACA8AHAyQABABAAAAQADAAADABQAWACAVAAQAOABANAAQAwgBAtgIQATgDASgFQAAgVgCgVgABoh6QgDACgEABACkhRQgRgZgWgYAgKgnQgxAAgxgOQglgKgkgSQgMAbgIAbQgIAXgGAWQgFAYgEAYQgDAXABAZQAAABAAABQA3ANA/ADQAtADAygDQACgDACgCQABgBAAAAIABAAIgDilgAAKgoQgKABgKAAAi1hRQAMgaAOgZAgHB+IAAAAIgBAAAgHB+IAbAC");
	this.shape_10.setTransform(-62.1,23.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BFDE8F").s().p("AAAAIQgDAAgDgCQgCgDAAgDQAAgCACgDQADgCADAAQADAAAEACQACADAAACQAAADgCADQgDACgEAAIAAAAg");
	this.shape_11.setTransform(-51.1,22.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#84AD5A").s().p("AgTAPIgDgDQAHAEAIAAQAIAAAIgHQAHgHAAgJQAAgFgCgEIgCgGIADADQAIAIAAAKQAAAFgEAGIgEAFQgHAIgJAAQgKAAgIgIg");
	this.shape_12.setTransform(-50.3,23.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9EBE7C").s().p("AgCAWQgIAAgGgFQgFgGAAgIQAAgJAIgHQAHgIAJAAQAFAAAEACIAFADIADAFQACAFAAAFQAAAIgIAIQgHAHgIAAIgBAAgAAEADQADgDAAgCQAAgDgDgDQgDgCgCAAQgEAAgDACQgDADAAADQAAACADADQADACAEAAQACAAADgCg");
	this.shape_13.setTransform(-50.8,23);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(147,209,236,0.502)").s().p("AjMAhIAHAqQhyBIBABsQAEgxBNgmIABgBIAHAVIAEAJQheAxALBIQiVjHC2hWgAB+DIQATggAEgJIgDAPQBGAXAWA9QBNiMiMgpQAFgUACgTQDWAuieDlQgbhWhVgbgAiYDGIgCgBIgEgJIgHgVIgBABIgDgGIAAAAQgMgdgIgeIgIgcIgHgqQgXihBji9QAdAHAcADQhPDWAOBJQAQBQAxAWQAxAXAdgEQAfgFBEgzQBEgxAMgzQADAwgHAtQgCATgFAUQgHAegLAeIAAABIgHAUIgBABQgEAJgTAgIgVAIIgMAFIgbAHQgpAKglAAQhHAAhFgggAimBMQAIA5AaAkQAZAlBHgSQBEgSAMgYQANgYgnAJQglAKgfgHQgfgIgWgQQgXgQgYglQgJgPgFAAQgGAAAEAig");
	this.shape_14.setTransform(-62.2,-10);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.502)").s().p("AgBBPQAAgVASAAQAMAAAGAKQACAFAAAGQAAATgUAAQgRAAgBgTgAgkgvQAAgyAeAAQAZAAAKAuIAGAwQgBAdgbAAQgmAAgFhJg");
	this.shape_15.setTransform(-53.6,-20.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(183,225,242,0.502)").s().p("AiNDnQgZglgIg5QgIg4AYAlQAYAlAWARQAWAQAgAHQAfAHAkgJQAngKgMAYQgMAYhFASQgXAGgSAAQglAAgSgYgAhPCQQgxgXgQhSQgPhHBQjWQBXAKBZgSQBJCUAHBuQgMAzhDAzQhEAzgeAFIgJAAQgdAAgpgSgABLAgQACATASAAQAUAAAAgTQAAgGgDgFQgFgKgMAAQgUAAAAAVgAAoheQAFBLAoAAQAbAAAAgfIgFgwQgLgugaAAQgeAAAAAyg");
	this.shape_16.setTransform(-61.3,-16.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BDBCB9").s().p("AhsCEQg/gDg3gNIAAgCQgBgZADgXQAEgYAFgYQAGgWAIgXQAIgbAMgbQAMgaAOgZIACAAQBrAzBvgdIAagHIAGgCIAHgDIAVgIQAWAYARAZIAMASIAAABQgOALhBAQIgKADQgIABgHAEQgcANgCAgIAAAFQAAAwA3AOQAXAGAfAAQAOAAAbgHIAUgFIANgFQACAVAAAVQgSAFgTADQgtAIgwABIgbgBIgrgCIgGgBIgBgBQgHgygCg8IgBgtIAAgNIAAAAQArgDAsgNQAhgJAigQQgiAQghAJQgsANgrADIAAgCIgUAAIAAADIgBAAIAAAAQgvAAgugNIgEgBQglgKgkgSQAkASAlAKIAEABQAuANAvAAIAAAAIABAAIAAAAIADClIgBAAIgBABIgEAFQgcABgbAAIgogBgAiPgKQgKALgCARIgBANQAAAlArASIAFACQAbAKAgAAIALAAIAAh0QgtgIgZgBIgGAAIgCAAQgQAAgLARgABkhmIgDABQgLAGgTADQhDALgoABQgQAAAAAGQgNARBTAAQA0AAAfgMIAIgDQAWgLAAgLQAAgNgRAAgAgIB+IABAAIAAAAg");
	this.shape_17.setTransform(-62.1,23.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DAD9D8").s().p("ABwA0QAAgHAEgDQACgCAGAAQAEAAAEACIACABIACADQADAEAAACQAAAKgHACIgFABQgPAAAAgNgAiJAqIgCgIQAAgYAPAAQAJAAAHAMQAEAKAAAFIAAAFQgDAKgNAAQgNAAgEgKgABUAKQAAgKAEgEQAFgHAKAAQALAAAFAHIACAEQAEAFAAAHQgBAPgPAAQgZAAAAgRgAgngxQAAgKAIABQAFAAADAEIACAGIgBAHIgIACQgLABACgLgAgLg0QAAgEALgEQALgEAEAAQAHABADAFQACADAAACQAAAMgXAAQgPAAAAgLg");
	this.shape_18.setTransform(-55.8,20.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#CAC8C6").s().p("AiOBdIgFgCQgrgSAAglIABgNQACgRAKgLQALgRAQAAIACAAIAGAAQAZABAtAIIAAB0IgLAAQggAAgbgKgAhuAQIABAHQAEAKAOAAQANAAADgKIAAgFQAAgEgFgKQgGgLgJAAQgPAAAAAXgAA/BaQg3gOAAgwIAAgFQACggAcgNQAHgDAIgCIAKgDQBBgQAOgLQALARAIASIAEAIQAIARAGAUQAHAYAEAYIABAJIgNAEIgUAFQgbAHgOAAQgfAAgXgGgACQAXQgDADAAAHQAAANAPAAIAFgBQAHgCAAgJQAAgDgDgEIgDgDIgBgBQgEgCgFAAQgFAAgDACgABHAtQANAAAKgKQAHgHACgJQAEgGAAgHQAAgIgIgIIgDgDIgFgCQgEgCgGAAQgKAAgIAHQgHAIAAAIQAAAJAEAGIADADQAIAIAKAAQALAAAHgIIAEgFQgCAJgHAHQgKAKgNAAIgBAAIAAAAIAAAAIgBAAQgOAAgKgKQgKgKAAgPQAAgMAKgKIABgBQAKgJANAAIABAAIAAAAIAAAAIABAAQAKAAAIAFIAAABIABAAIABABIgBgBIgBAAIAAgBQgIgFgKAAIgBAAIAAAAIAAAAIgBAAQgNAAgKAJIgBABQgKAKAAAMQAAAPAKAKQAKAKAOAAIABAAIAAAAIAAAAIABAAgAB1gWQgEAFAAAKQAAAPAZAAQAPAAAAgNQAAgHgDgGIgCgEQgGgIgKAAQgLAAgEAIgAgsgiIAAgDIAAADgAgWgjIAAgCIAAACgAhahFQAAgGAQAAQAqgBBBgLQATgDALgGIADgBIAKgFQARAAAAANQAAALgWALIgIADQgfAMgyAAQhVAAANgRgAgKhDQgDAKAMAAIAGgDIABgHIgCgFQgDgFgDAAQgIAAAAAKgAAdhPQgNAEAAAEQAAALARAAQAXAAAAgMQAAgCgCgDQgDgFgIAAQgDAAgLADg");
	this.shape_19.setTransform(-58.7,22.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#A6A6A6").s().p("AgMBSIgDilIAUgBIAAANIABAwQACA6AIAyg");
	this.shape_20.setTransform(-61.6,27.5);

	this.addChild(this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-92.8,-59.7,61.1,96.3);


(lib.FINALmicrowave2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AEA340").ss(0.5,1,1).p("AgIAJIgBAAIAAgBQgDgDAAgEQAAgEAEgEQAEgEAEgBQAEAAADABIAAABQABAAABABQAEADAAAGQAAADgDAFQgEAEgFABQgEAAgEgDQgBgBAAAAg");
	this.shape.setTransform(64.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E1E99E").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgDACQAAAAAAAAQAAAAAAAAQgBAAAAgBQgBAAAAAAg");
	this.shape_1.setTransform(64.2,19.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3C02E").s().p("AgJAJIgBgBQADACAEgBQAEAAADgEQAEgFAAgDQgBgFgCgDIACABQAEAEAAAFQAAAEgDAEQgEAEgEABQgFAAgEgDg");
	this.shape_2.setTransform(64.7,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CAD753").s().p("AgHAKIAAAAIAAAAQgDgDAAgFQgBgDAFgFQADgEAEAAQAEgBAEACIAAAAQACADAAAFQAAADgDAFQgEAEgEAAIgBAAIgGgBgAAAgFQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAAAQABABAAAAQABAAAAAAIACgCQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAgBgBIgBgBIAAAAg");
	this.shape_3.setTransform(64.4,19.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABQgFABgGgFg");
	this.shape_4.setTransform(64.2,19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CAC8C6").s().p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABIAAAAQgGAAgFgEg");
	this.shape_5.setTransform(64.2,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6F9C5A").ss(0.5,1,1).p("AgJAIQABABABABQAEADADAAQAGgBAEgEQADgFAAgDQgBgGgDgDQgBgBgBAAAgJAIQgDgDAAgEQAAgEAEgEQAEgEAEgBQADAAAEAC");
	this.shape_6.setTransform(65.2,30);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BFDE8F").s().p("AgCADQgBAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAgBAAAAQABgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAABABIACACQAAAAAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgCgBg");
	this.shape_7.setTransform(64.9,29.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9EBE7C").s().p("AgHAKQgDgDAAgFQgBgDAEgFQAEgEAEAAQAEgBADACQADADAAAFQAAADgDAFQgEAEgEAAIgBAAQgEAAgCgBgAgBgFQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAAAABIAEABIACgCQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBIgCgDIgBgBIgBAAg");
	this.shape_8.setTransform(65.1,29.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#84AD5A").s().p("AgJAJIgBgBQADABAEAAQAEAAAEgFQADgEAAgEQAAgEgDgDIACABQAEADAAAGQAAAEgDAEQgEAEgEABQgFAAgEgDg");
	this.shape_9.setTransform(65.4,30.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABQgFABgGgFg");
	this.shape_10.setTransform(64.7,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CAC8C6").s().p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABIAAAAQgGAAgFgEg");
	this.shape_11.setTransform(64.7,30.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#D6973A").ss(0.5,1,1).p("AgJAIQAAABACABQAEADAEAAQAFgBADgEQAEgEAAgEQAAgGgEgDQgBgBgBAAQgEgCgDAAQgFABgDAEQgEAEAAAEQAAAEADADg");
	this.shape_12.setTransform(64.5,14.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F2DBA6").s().p("AgBADQgBAAgBgBQAAAAAAAAQAAgBgBAAQAAgBABAAQgBAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABQABAAAAAAIgBADQgBAAAAAAQgBABAAAAQgBAAAAAAQAAAAgBAAIAAAAIgBgBg");
	this.shape_13.setTransform(64.1,14);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E7B976").s().p("AgHAKQgDgDAAgFQgBgEAFgDQADgFAEAAQAEgBAEACQACAEAAAEQAAADgDAEQgFAFgDAAIgBAAQgEAAgCgBgAgEgDQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAgBIABgCQAAAAAAgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_14.setTransform(64.3,14.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1AA59").s().p("AgJAJIgBgCQACACAFAAQADgBAFgEQADgEgBgDQAAgFgCgDIACABQAEADABAGQAAAEgFAEQgDAEgEABQgFAAgEgDg");
	this.shape_15.setTransform(64.7,14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABQgFABgGgFg");
	this.shape_16.setTransform(64.1,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CAC8C6").s().p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABIAAAAQgGAAgFgEg");
	this.shape_17.setTransform(64.1,14.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#4DA0C4").ss(0.5,1,1).p("AgJAJQgDgEAAgEQAAgEAEgEQAEgEAEgBQADAAAEACQABAAABABQAEADAAAGQAAAEgDAEQgEAEgGABQgDAAgEgDQgBgBgBAAg");
	this.shape_18.setTransform(65.4,35);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#57B4CA").s().p("AgJAJIgCgBQADABAFAAQAEgBADgEQAEgEAAgEQAAgEgDgDIACABQAEADABAGQAAAEgEAEQgEAEgEABIgBAAQgEAAgEgDg");
	this.shape_19.setTransform(65.6,35.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B1DDE7").s().p("AgCADQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAAAAAAAQABAAAAgBQAAAAABAAIACgCIADABIACACQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAIAAAAIgCgBg");
	this.shape_20.setTransform(65.1,34.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7EC5D6").s().p("AgHAKQgDgDAAgFQgBgEAEgEQAEgEAEgBQAEAAADACQADADAAAFQAAADgEAFQgDAEgEAAIgCABIgFgCgAgEgDQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBIgCgDIgCgBIgDACg");
	this.shape_21.setTransform(65.2,34.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABQgFABgGgFg");
	this.shape_22.setTransform(65,35.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CAC8C6").s().p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABIAAAAQgGAAgFgEg");
	this.shape_23.setTransform(65,35.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#9AB432").ss(0.5,1,1).p("AgJAIQgDgDAAgEQAAgEAEgEQADgEAFgBQADAAAEACIAAAAQABABAAAAQAFADAAAGQAAAEgEAEQgDAEgFABQgEAAgEgEQgCAAAAgBg");
	this.shape_24.setTransform(64.8,24.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#A8CF49").s().p("AgJAIQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQADACAEAAQADgBAFgEQADgEAAgEQAAgFgDgCIACABQAEADAAAGQABAEgEAEQgEAEgEABIAAAAQgFAAgEgEg");
	this.shape_25.setTransform(65,24.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BDE89F").s().p("AgCADQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAQgBAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAIAAAAIgCgBg");
	this.shape_26.setTransform(64.5,24.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B5D764").s().p("AgHAKQgDgDAAgFQAAgEAEgEQADgEAEgBQAEAAAEACIAAABQACACAAAEQABAEgEAEQgEAFgEAAIgBABQgDAAgDgCgAgDgDQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBIgCgBQAAABgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAg");
	this.shape_27.setTransform(64.6,24.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABQgFABgGgFg");
	this.shape_28.setTransform(64.4,25.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CAC8C6").s().p("AgLAOQgGgFAAgIQAAgFAFgGQAFgGAHgBQAGAAAGAEQAFAFABAHQAAAGgFAGQgGAGgHABIAAAAQgGAAgFgEg");
	this.shape_29.setTransform(64.4,25.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#C66B94").ss(0.5,1,1).p("AgJAIQAAABACAAQAEAEADAAQAGgCADgDQAEgFAAgDQAAgGgEgDQgBgBgBgBAgJAIQgDgDAAgFQAAgDAEgFQADgDAFgBQADAAAEAB");
	this.shape_30.setTransform(64.2,9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#D687B7").s().p("AgJAJIgBgBQADABAEAAQADgBAFgEQADgEAAgDQAAgFgDgDIACABQAEAEAAAFQABAEgEAEQgEAEgEABQgFAAgEgDg");
	this.shape_31.setTransform(64.3,9.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EBC7DD").s().p("AgCADQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBABAAQgBAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAAAAAIADABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAAAgBAAIAAAAIgCgBg");
	this.shape_32.setTransform(63.8,8.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E0A7CA").s().p("AgHAKQgDgDAAgFQAAgDAEgFQADgDAEgBQAEAAAEABQACADAAAFQABADgEAEQgEAFgEAAIgBAAIgGgBgAgDgDQgBAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAABABQAAAAABAAQAAAAAAABQABAAABAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgCgBQAAAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAg");
	this.shape_33.setTransform(64,9.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgKANQgGgFAAgHQAAgFAFgGQAFgFAGgBQAGgBAGAFQAFAEAAAIQAAAFgEAGQgGAFgHABQgFABgFgFg");
	this.shape_34.setTransform(63.7,9.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#CAC8C6").s().p("AgKANQgGgFAAgHQAAgFAFgGQAFgFAGgBQAGgBAGAFQAFAEAAAIQAAAFgEAGQgGAFgHABIAAAAQgGAAgEgEg");
	this.shape_35.setTransform(63.7,9.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B9B9A4").ss(0.7,1,1).p("AAQgfQgBACgIAFQgHADgFgCQgFgBgDgDQgDgDgCgBIADAVQANAKATgKgAgNAMIgCgWAgNAMQAPAMARgNIgCgVAgSgfIAhgCAATALIAAAQQgTAPgMgOIgBgQ");
	this.shape_36.setTransform(12.2,15.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#9CC6A5").ss(0.5,1,1).p("AAAAAIAAABIAAgBQAAAAAAAAg");
	this.shape_37.setTransform(13.7,12.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#DBE9DA").s().p("AgPAIIgCgWQANANATgNIADAWQgJAHgJAAQgGAAgJgHg");
	this.shape_38.setTransform(12.3,16.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CAE0C9").s().p("AgMAaIgCgQQAQANARgNIAAAPQgKAIgIAAQgGAAgHgHgAgQgMIgCgUIAEADQAEADAFACQAFACAHgEQAIgEABgCIABAUQgLAHgHAAQgIAAgHgHg");
	this.shape_39.setTransform(12.2,16.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B8D3B4").s().p("AgDAEQgGgBgDgDIgEgCIAggCIABACQgBACgHADQgFACgEAAIgDgBg");
	this.shape_40.setTransform(12,13);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#958B96").ss(0.5,1,1).p("AgQh6QABAIAGA4QAGA5AAA7QABA9AAAFIAKgCQAXiRgmhkIgJABg");
	this.shape_41.setTransform(55.5,22.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C4C4C4").s().p("AgEgXQABgCADgDQAAABADAGQACAHgBAJIgEApIgBAEIgDg/gAgDgkQAAgBABAAQAAgBAAAAQABgBAAAAQABAAAAAAQACAAgBADIgBADIAAABQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_42.setTransform(56.3,26);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A6A6A6").s().p("AgDA6QAAg7gGg5IgHg/IAAgBIAJgBQAmBkgXCRIgKACIgBhCgAACAKIADBBIABgFIAFgrQACgJgDgHQgCgGgDgBQgDADAAADgAADgCQAAABAAABQAAAAAAAAQABAAAAAAQABAAAAAAIACAAIACgCQAAgDgDABIgBgBQAAAAgBABQAAAAgBAAQAAABAAAAQAAABAAAAg");
	this.shape_43.setTransform(55.5,22.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#B9B9A4").ss(0.7,1,1).p("AgSgfIAhgCAgSgfQACABACADQAEADAFABQAFACAHgDQAIgFABgCIABAVAgOAMIgBgWIgDgVAATALIAAAQQgTAPgMgOIgCgQQAQAMARgNIgCgVQgTAKgNgK");
	this.shape_44.setTransform(13,33.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#9CC6A5").ss(0.5,1,1).p("AAAAAIAAABIAAgBQAAAAAAAAg");
	this.shape_45.setTransform(14.5,30.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DBE9DA").s().p("AgPAIIgCgWQANANATgNIADAWQgJAHgJAAQgGAAgJgHg");
	this.shape_46.setTransform(13.1,34.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#CAE0C9").s().p("AgMAaIgCgQQAQANARgNIAAAPQgKAIgIAAQgGAAgHgHgAgPgMIgDgUIAEADQADADAGACQAFACAHgEQAIgEABgCIABAUQgLAHgHAAQgIAAgGgHg");
	this.shape_47.setTransform(13,34.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B8D3B4").s().p("AgDAEQgGgBgDgDIgEgCIAggCIABACQgBACgHADQgFACgEAAIgDgBg");
	this.shape_48.setTransform(12.8,31);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#AEAD95").ss(0.7,1,1).p("AFMgLIAAAAQAAAIgGADQgFAGgIAAQgHAAgGgGQgDgBgBgEQAAAAAAAAAlLgfQgBALAFAFQAGAGAHAAQAIAAAFgGQABgBABgBAjjANQAAAEACAEQABADADACQAFAGAIAAQAGAAAFgEQABgBABgBQAFgFAAgG");
	this.shape_49.setTransform(37.1,40.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#B9B9A4").ss(0.7,1,1).p("Ah+BbIgoABIgJi/IFngUIABAlIAFCegAjeiAIG5gaIAFEVIm0ASIAAAOAjeiAIgBgOAjchTIgCgtAjUCNIgIjg");
	this.shape_50.setTransform(34.8,24.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#C0C0AD").ss(0.7,1,1).p("AFAioQgCABgQgBQgVgCgUgBQgDAAgCgBQgmgCgnAAQjQgDjWAtIAAARIHIgYIAHEvInDASIAAARQADABAEAAQAAAAABAAQASACASABIAAAAQDPARDsghQAKgBALgCQAKgBALgCQABAAAAAAQACAAABAAQAQgDAQgDQAEAAAEgBgAk+ifQEThAEHATQACAAABAAIBhAkAE3CeQACgCACgCIgMknQghgagmAZIAKEwQAkAPAXgMQAGgDAEgEgAlVAdQAAhPANhDQAEgWAFgUIAAAAIABAAIgBAAAjziEIhLgbAlVAdQgBA6AGBBIAIAEIAgAOIBBAd");
	this.shape_51.setTransform(36.8,21.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DBE9DA").s().p("AjdC2IgEgFQgCgEAAgEIAAgCIABAAIAkAEIAAAAQAAAGgFAFIgCACQgFAEgGAAQgIAAgFgGgAEsCcQgDgDgBgEIAAAAIABgBIADAAIAggFIAAAAQAAAIgGAFQgFAGgIAAQgHAAgGgGgAlHCLQgFgFABgLIAgAOIgCACQgFAGgIAAQgHAAgGgGgADwCBIgKkwQAlgZAiAbIALEnIgDADQgFAFgGADQgKAFgMAAQgQAAgUgJg");
	this.shape_52.setTransform(37.1,24.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#BFBBAE").s().p("AgJBiIgfgOIgIgEQgGhAABg4QATgXAdgYQAagYAZgQIAIDgIAAAOIABARg");
	this.shape_53.setTransform(8,28.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C7C4B8").s().p("Agkg0QAEgVAFgVIABAAIBJAcIABARIAAAOIACArQgYAQgbAYQgcAYgUAXQABhSAMhBg");
	this.shape_54.setTransform(7.6,14.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D6D3CB").s().p("Ak+AKQETg+EHAUIADAAIBgAiQgBABgRgCIgpgBIgEAAQgngCgmgBQjQgDjXAsg");
	this.shape_55.setTransform(36.9,4.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#C4DDC4").s().p("AjcCTIG0gRIgEkVIm6AZIgBgOIHIgYIAHEvInDASg");
	this.shape_56.setTransform(35.6,23.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(116,107,88,0.4)").s().p("AizhVIFmgUIABAlQknACgPCqIgpACg");
	this.shape_57.setTransform(35.3,22.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(177,170,154,0.4)").s().p("ACahWIAECeIk7APQAQiqEngDgAAHhDIgfCHIAYgBIAniIgAA+hHIgrCJIBMgDIAliMg");
	this.shape_58.setTransform(38,24.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(203,197,188,0.4)").s().p("Agsg+IAggCIgoCIIgaABgAAJhCIBGgGIglCMIhLADg");
	this.shape_59.setTransform(43.3,24);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E9E8E2").s().p("AjsC7IAAAAIgkgEIgBAAIgHgBIAAgQIHDgTIgHkvInIAZIAAgRQDWguDQADQAnAAAmADIAFAAIApADQAQABACAAIAWFVIgIACIggAFIgDAAIgBAAIgVAEIgVADQicAViOAAQhKAAhHgFgAC3ifIAKEwQAkAPAXgMQAGgDAEgEIAEgDIgMknQgRgOgSAAQgSAAgSAMgAkhhIIgCgtIG6gaIAEEVIm0ARgAjzhYIAIC/IAogBIE8gPIgFieIgBglg");
	this.shape_60.setTransform(41.7,23);

	// Layer 3
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#6600FF").ss(0.7,1,1).p("AD7CTIn2AAIAAklIH2AAg");
	this.shape_61.setTransform(36.7,23.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#465575").s().p("Aj6CTIAAkkIH2AAIAAEkg");
	this.shape_62.setTransform(36.7,23.2);

	this.addChild(this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,0.4,68.6,43.1);


(lib.FINALjuicer = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D27E02").ss(0.5,1,1).p("AgTAOQgFgGAAgIQAAgJAIgIQAHgHAJAAQAFAAAEACQADABACABQACACACABQAHAIAAAJQAAAGgDAGQgCADgCACQgIAIgKAAQgJAAgHgIQgCgBgBgCg");
	this.shape.setTransform(25.2,38.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FED9A3").s().p("AgGAGQgCgDAAgDQAAgCACgDQADgCADAAQADAAAEACQACADAAACQAAADgCADQgEACgDAAQgDAAgDgCg");
	this.shape_1.setTransform(24.7,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB74E").s().p("AgQASQgFgHAAgIQAAgJAIgHQAHgIAJABQAFgBAFACIAEADIADAFQACAFAAAFQAAAIgHAIQgIAHgIAAQgJAAgGgEgAgIgIQgDADAAADQAAACADADQADACAEAAQACAAADgCQADgDAAgCQAAgDgDgDQgDgCgCAAQgEAAgDACg");
	this.shape_2.setTransform(24.9,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDA31C").s().p("AgTAPIgDgDQAGAEAJAAQAIAAAIgHQAHgHAAgJQAAgFgCgEIgDgGIAEADQAHAIABAKQgBAFgDAGIgEAFQgHAIgJAAQgLAAgHgIg");
	this.shape_3.setTransform(25.5,38.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AABghQAPABAJALQAKALgBAMQgBAOgLAJQgKAJgNgBQgOAAgJgLQgJgKABgNQABgOAKgJQAKgJAMAAg");
	this.shape_4.setTransform(24.4,39.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CAC8C6").s().p("AgBAhQgOAAgJgLQgJgKAAgNQACgOAKgJQAKgJAMAAQAPABAJALQAKALgBAMQgBAOgLAJQgJAJgNAAIgBgBg");
	this.shape_5.setTransform(24.4,39.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#958B96").ss(0.7,1,1).p("AClg4QgIABgKABQgCAAgDAAQgPACgOABQgRABgRAAQgSAAgYgBQgQAAgSgCQgSgCgXgDQgHgBgHgBADYgwQgXgJgcABAEGgRIAAABQAPAEAIAJQAOAOgIAiQhPAOhWABQAAAAgBAAQgmABgngCQgPAAgPgBIgBATIgLCPIhngKIgOgQIgCgCIAKiTQgKgCgKgBQACAXgBAVQgBAWgDASQgDAUgGAPQgIAUgNANQgPAOgWADQgUADgZgGQgHgBgHgDQgNgHgKgHQgYgSAIgPQAGgMAdgJQAKgEANgDIgBAYQgFAAgEABQgRACgDAFQgEAGAQAKQACACAEABQAJAEAJACQAPAEANgBQARgCAMgMQAKgLAGgRQAFgOACgSQACgQAAgUQAAgTgBgWQgggFghgHQgPgDgPgDQgFgwAogQQAVgfA/AEQAph+BBgFQAQgLARgGQAPAHANAJQBJAPAvCEADYgwQAaAKAUAVAh2gaQgdgFgdgGQgPgDgPgEAgmg6QAHhDAdhCQgtAegXBiQAJABAJACAAlgzQAJhbgeg3QgMA8gBBUABxgzQgYhigwgfQAnA8gBBGAhfhEQgPgCgMgBAhfhEQADABAEAAQAJACAJACAhfhEIAAAAQARhfA+gnAhWAvQgCAAgCAAQgHgBgGgBAiRBPQACABACABQAKAFAJAAAhWAvIgDArIgIB4Ah7AqQgLgCgMgCAjzCaQgIgLgFgHAkTC+QAOgJAKgEAjjC6QgCADgCADQgFAJgCAHAjHC9QABAIAFAOAiaCTQAIAIALAGAicDCQgCgDgCgDQgGgHgEgGAh+B+QgNgGgIgFAASA6QgEAAgEgBQgLgBgNgBQgkgDgkgFAh2gaQDFAfC3gWACOg2QgchmhFgvAkHChQgKgBgSgD");
	this.shape_6.setTransform(28.1,25.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B1AFAB").s().p("AgygUQAkAFAhADIAbACIAIABIgBARIgIABIgbACQg5AFgOAFg");
	this.shape_7.setTransform(24.6,32.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A09E9A").s().p("AgLBCIgBgCIAJiRIAMACIAEAAIgDArIgIB2g");
	this.shape_8.setTransform(18.1,38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DAD9D8").s().p("AikB6QAAgEAGAAIAAAAQAGAAAAAFQAAABAAAAQAAABAAABQAAAAgBAAQAAABgBAAIgDABQgHAAAAgGgAiCB7QgEAAAAgFQAAgFAEgBIACAAIAFAGQAAAFgHAAgAjHBzQAAgFAFAAIAEAFQAAAFgFAAQgEAAAAgFgAjbBmQgEgBAAgFQABgFADgBIADAAIAEAFQAAAHgGAAIgBAAgAB9gxQgCgBgCgDIgBgFQAAgKALAAQAKAAAAALQABAGgGACIgFABIAAAAIgGgBgAC2g1QghgBgBgKQAAgFAJgDQANgEAfgBQAWAAABANQAAAKgbABIgIAAIgHAAgABxhoIgBgCIAAgDQgBgLALAAQAGAAADAJIAAAEQgBAHgJAAIAAAAQgGAAgCgEgACXhrIgFgDQgCgCAAgFQgBgIAKgCIAfAAQALAAABAKQAAAEgCACQgEAGgOAAIgDAAQgOAAgIgCg");
	this.shape_9.setTransform(22.8,33.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BDBCB9").s().p("AhhDSIAIh4QAPgFA6gFIAZgCIAIgBIgLCPgAjuDQQACgHAFgJIAEgGIgEAGQgFAJgCAHIgOgEQgNgHgKgHQAOgJAKgEQgKAEgOAJQgYgSAIgPQAGgMAdgJIAXgHIgBAYIgJABIgNgSIANASQgRACgDAFIgcgEIAcAEQgEAGAQAKIAGADIASAGQAPAEANgBQARgCAMgMQAKgLAGgRQAFgOACgSQACgQAAgUQAAgTgBgWIAXAEIgXgEIhBgMIAAgFQAAgeAZgVIAKgHIA6ALQAGAlBkALQAjAEAxABIAGABIAFgBIAegBIAQAAQBYgEBEgZQAOAOgIAiQhPAOhWABIgBAAQgmABgngCIgegBIgIgBIgYgCQgkgDgkgFIgEAAIgNgCIgUgDQACAXgBAVIgBAAIgBAAIAAAAIgBAAQgIgBgHgEIgBAAIgEgCIAEACIABAAQAHAEAIABIABAAIAAAAIABAAIABAAQgBAWgDASQgNgGgIgFQAIAFANAGQgDAUgGAPQgLgGgIgIQAIAIALAGQgIAUgNANIgEgGIgKgNIAKANIAEAGQgPAOgWADQgFgOgBgIQABAIAFAOIgNABQgPAAgRgEgAjfDHQAAAIAKAAQAEAAACgCQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAgGgGAAIgHgBQgFAAAAAFgAi4C+QgEABAAAEQAAAFAFAAIAAAAIADABQAJAAAAgIQAAgFgEAAQgGAAgDACgAkAC9QACAKAJAAQAGAAAAgGIgMgJQgFAAAAAFgAkXCrQAAAIAGAAIAAAAIABAAQAHAAAAgGIgFgGIgCABIgBgCQgGAAAAAFgAieCpQABAGAGAAQAFAAAAgIQAAgEgFAAQgHAAAAAGgAkQCUQAAAHAFAAQAHAAAAgGQAAgFgFAAQgHAAAAAEgAjzCaIAAAAgAiSAmIAAAAgAh2gaIg6gLQALgaBGgFIAAAAQARhfA+gnQAQgLARgGQAPAHANAJQBFAvAcBmIgdADQgYhigwgfQAnA8gBBGIgqgBQAJhbgeg3QgMA8gBBUIgpgFQAHhDAdhCQgtAegXBiIASADQAOAhBhgCIABACQACAFAGAAQAIAAABgHIAVgBQAIADAQAAQAOAAAFgGQAbgDATgEQAQgDANgFQAaAKAUAVQhMAKhOAAQhtAAh1gTgAhYhDIASAEIgSgEIgHgBIAHABgAiwglIAAAAg");
	this.shape_10.setTransform(28.1,25.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CAC8C6").s().p("AjiDGQAAgFAGAAIAHABIgBAAQgGAAAAAEQAAAHAHAAIAEgBQgCACgEAAQgLAAAAgIgAi5DHQAGAAAAgFIgFgFIgCAAQACgCAGAAQAFAAAAAFQAAAIgKAAIgCgBgAkDC8QAAgFAGAAIALAJQAAAGgGAAQgJAAgCgKgAj/C/QAAAFAEAAQAFAAAAgEIgEgGQgFAAAAAFgAkUCyQgGAAABgIQAAgFAFAAIABABQgDACgBAEQAAAGAEAAIgBAAgAigCoQAAgGAGAAQAFAAAAAEQAAAIgFAAQgGAAAAgGgAkSCTQAAgEAGAAQAGAAAAAFQAAAGgHAAQgFAAAAgHgABWARQgBgLgKAAQgLABABAJIAAAGQACACADABQgyAAgigEQhlgMgFglQDFAgC3gWIAAAAQAOAEAIAJQhEAahYAEIgPAAIgeABQAFgCAAgHgACRAAQgfAAgMACQgKADABAFQAAAKAiABIAOAAQAbAAAAgLQgBgKgVAAIgBAAgAjzATQgFgxAogPQAVgfA/AEQAph+BBgGQg+AogRBfIgBAAIgagDIAaADQhGAFgKAaIgegHIAeAHIgKAHQgaAVAAAeIAAAFIgdgGgAg2g9IAOACIAoAFIAiACIArABIAhgBIAegDQgchnhFgvQBJAQAvCEIgSACIgFAAIAFAAIASgCQAcgBAXAJQgOAEgPAEQgTAEgcADQACgDAAgDQgBgLgLAAIgfABQgKACABAIQAAAFACABIAGADIgVABIAAgFQgDgJgGABQgLAAABAKIAAADIgKAAQhXAAgNgfgAAni1QAwAeAXBjIghABQAAhGgmg8gAAig0IgigCQABhUANg8QAeA3gKBbIAAAAgAgog7IgOgCIgSgDQAWhiAugeQgeBCgGBDIAAAAg");
	this.shape_11.setTransform(28.4,25.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#BEE2EB").ss(1,1,1).p("AAlBcQhgg4APiAIBbAMg");
	this.shape_12.setTransform(0.9,43.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#BEE2EB").ss(0.5,1,1).p("AClAGIAJiWQAmACAdgnIhKgGQiPATiOgSAClAGIgCArQhIADhJgDQhBgChDgHQg7gHg8gKIAQjhQAxAKAyAGAh2A0Qg5gGg6gLIgFBBQA0AJA0AGQBTAKBQACQBBACBAgDIACgmAiCCAQg2gGg3gKIAAAKQgDA0ArADQCZAjCcgNQAsADADg0IAAgJAA1CNQgKAAgKAAQhQgDhTgKABYCOQAjAAAigBIAAAAAh2A0QBGAIBDADQBIADBHgCIgCAY");
	this.shape_13.setTransform(30.1,47.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(255,255,255,0.702)").ss(1,1,1).p("AE6jGQgdgBg4gGQiHAPiNgPQg7gHg8gMIAAAAQgQALgCAbIgDAsIh1gOQgqCxCRBAIgEBAQgDAwAwADQCmAiCpgNQAwACADgvIATkuQBDgUACg0g");
	this.shape_14.setTransform(24.6,47.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(147,209,236,0.502)").s().p("AigDIQgwgDADgwIAEhAQiRhAAqixIB1AOIADgsQACgbAQgLIAAAAQA8AMA7AHQCNAPCHgPQA4AGAdABQgCA0hDAUIgTEuQgDAvgwgCQgvAEgvAAQh4AAh5gZgAi4B5QgDA0AsADQCWAjCegNQAsADADg0IABgJIAAAAIhFABQgEgIgJAAQgRAAgFAHIgVAAQhSgDhRgKQg2gGg2gKgAi3BjQA1AJAzAGQBRAJBSADQBBACBAgDIADgmIABgYQhHAChIgDQhFgDhEgIQg5gHg6gKgAjGAyIAKisIhegMQgPCBBjA3gAixAWQA7AKA7AGQBCAIBCACQBJADBIgDIACgsIAJiWQAmADAdgnIhKgGQiPASiNgRQgygGgygKg");
	this.shape_15.setTransform(24.6,47.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(183,225,242,0.502)").s().p("AihCxQgsgDADg0IABgKQA3AKA2AGQAIAOAZAKQAoAQA7AAIAogBIARgBQAFACAJAAQAKAAAEgGIAVgEQAYgGAZgLIAAAJQgDA0gsgDQgrAEgrAAQhwAAhvgagABCB/QhPgChTgKQg0gGg0gJIAEhBQA6ALA6AGQAAAYAjARQAkASA2AAIASAAQAwgDBCgPIAVgFIgCAmIhIACIg6gBgAA4AxQhBgChDgHQg7gHg8gKIAPjhQAyAKAyAGIgFAHQgcAmgDAgIAAAHQAAA1AzAoQAxAjBIAGIAdACQAxAAA6gYIALgEIgDArIhIACIhIgCg");
	this.shape_16.setTransform(26.4,47.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.502)").s().p("AgeCQQgJgEAAgLQAAgGADgEQAGgGAQAAQAKAAADAHQABAEAAAFQAAAHgCAEQgEAGgKAAQgJAAgFgCgAgtBGIgCgIQAAgSAcAAQAYAAgDARQAAARgiAAQgKAAgDgIgAALgSIgCgIQAAgTASAAQAPAAAAAPQAAAUgRAAQgKAAgEgIgAgghDQgGgHAAgGQAAgUAMgTQASgaAeAAQAWAAAEAgQAAAKgNAVQgQAbgTAAQgVAAgLgMg");
	this.shape_17.setTransform(39.3,50);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(211,237,248,0.502)").s().p("AiLCiQgZgKgJgOQBTAKBSADIASAAQgDAEAAAGQAAAKAJAFIgQABIgnABQg9AAgngQgAAvChQAAgGgCgDIBGgBIAAAAQgaALgYAGIgVAEQADgEAAgHgAh+BnQgjgRAAgYQBGAIBFADQBGADBHgCIgCAYIgUAFQhCAPgvACIgRABQg4AAglgSgAAABeIABAIQAEAIAJAAQAkAAAAgRQAEgRgbAAQgbAAAAASgAgXAqQhKgGgwgkQg0goAAg0IABgHQACggAdgnIAFgGQCPARCNgSIBKAGQgdAngmgCIgJCWIgKAEQg7AYgwAAIgcgCgAA5AEIACAIQAEAIALAAQARAAAAgUQgBgOgOAAQgTABAAARgAAVhXQgNATAAATQAAAHAHAHQAKAMAWAAQAUAAARgbQANgVAAgKQgFghgVAAQghABgRAag");
	this.shape_18.setTransform(34.4,46.8);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,3.7,64.5,66.8);


(lib.FINALcenterislandbackhalf = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(121,193,171,0.2)","rgba(206,205,57,0.2)"],[0,1],-321.7,49.6,61.7,49.6).s().p("AifBrQAKgUgCgVIgIgdIHcguQBOAbAYAVQBFArAmA2IAHAKgAj8gwQhZgrhDgNQhEgMgxgTQgxgTFDASQFBARCWA6IAoAQIm7AwQgagegrgVg");
	this.shape.setTransform(379,7.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#D3D3C5").ss(1,1,1).p("ApZiDQgCgEABgEIAAAAQAIgWDGAEQH9ALEDBxQAGADAHADQCEA7A/BZQANATAKASAjiBwQgLhAiDgmIjdg+IgMhPAjYBwQAVgigagrQgCgEgDgEQgMgSgVgSQhZg4iHgcQhpgUgNgSAF0gaIANgBAF0gaIpRA9");
	this.shape_1.setTransform(378.5,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8F7F5").s().p("AgFgCIALAEIgLABg");
	this.shape_2.setTransform(416.4,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E1DFD9").s().p("ACxB6QgLhAiDgmIjbg+IgLhPQANASBpAUQCEAcBZA3QAVATANASIAFAIQAZArgVAig");
	this.shape_3.setTransform(337.9,5.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E9E8E2").s().p("AjYBwQAVgigagrIJRg9IANgBQCEA7A/BZQANATAKASgAjiAbQgMgSgVgSQhZg4iHgcQhpgUgNgSQgCgEABgEIAAAAQAIgWDGAEQH9ALEDBxIAAAHIpRA9IgFgIg");
	this.shape_4.setTransform(378.5,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B67616").ss(1,1,1).p("ABfAwIiqC5IiHljIgqhuIH5Bxg");
	this.shape_5.setTransform(349.2,22.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E3A71C").s().p("AiYixIA1AQQByAmBBA0QArAjAeAfIiqC3g");
	this.shape_6.setTransform(343.4,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D59C1A").s().p("AAWBLQg/g1hzgjIg2gQIgqhuIH5BwIieCnQgdgfgsgig");
	this.shape_7.setTransform(349.2,13.4);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(318.1,-8.9,120.8,54.9);


(lib.FINALfridge = function() {
	this.initialize();

	// extras
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#638B8C").ss(1,1,1).p("AArhTQAHAFAHAGQAbAbAAAnQAAAkgbAbQgbAbglAAQgmAAgbgbQgGgFgEgH");
	this.shape.setTransform(-84.2,-12);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#638C83").ss(1,1,1).p("Ag2BJQgRgYAAgeQAAglAbgbQAbgbAlAAQAdAAAXAQ");
	this.shape_1.setTransform(-87.1,-14.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#89B4BD").s().p("AggAiQA1gcALgnQABAhgQAMQgRANgIADIgRAGg");
	this.shape_2.setTransform(-80.9,-8.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7CA5AB").s().p("AhJA5IgKgMQAXAQAeAAQAkAAAbgbQAbgbAAgkQAAgfgRgXQAHAFAHAGQAbAbAAAnQAAAkgbAbQgbAbglAAQgnAAgbgbgAAABEIAGAAIARgGQAKgDARgMQAQgNAAgiQgMAog2Acg");
	this.shape_3.setTransform(-84.2,-12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B4F1F7").s().p("AgmAZQAAgMAOAAQAIAAADAFQABADAAAEQAAANgNAAQgPAAACgNgAgMgJQAAgcAcAAQAYAAAAAUQAAAHgHAJQgJALgQAAQgXAAADgTg");
	this.shape_4.setTransform(-88.1,-16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#98CCD1").s().p("Ag+BBQgRgYAAgeQAAglAbgbQAbgbAkAAQAeABAWAPQARAYAAAeQAAAlgbAaQgbAbgkAAQgeAAgWgPgAg5ABQgBAMAPAAQANABAAgNQAAgCgCgDQgDgFgIgBQgOAAAAALgAgeghQgDAVAZAAQAOAAAJgNQAGgJAAgHQAAgUgVAAQgeAAAAAcg");
	this.shape_5.setTransform(-86.2,-13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgKgLQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgGAFgGAAQgGAAgFgFQgFgFAAgHQAAgGAGgFg");
	this.shape_6.setTransform(-116.1,40);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAF2F0").s().p("AAAARQgGAAgFgFQgFgFAAgHQAAgGAGgFQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgFAFgHAAIAAAAg");
	this.shape_7.setTransform(-116.1,40);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgKgLQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgGAFgGAAQgGAAgFgFQgFgFAAgHQAAgGAGgFg");
	this.shape_8.setTransform(-109.2,39.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EAF2F0").s().p("AAAARQgGAAgFgFQgFgFAAgHQAAgGAGgFQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgFAFgHAAIAAAAg");
	this.shape_9.setTransform(-109.2,39.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgKgLQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgGAFgGAAQgGAAgFgFQgFgFAAgHQAAgGAGgFg");
	this.shape_10.setTransform(-102.2,39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAF2F0").s().p("AAAARQgGAAgFgFQgFgFAAgHQAAgGAGgFQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgFAFgHAAIAAAAg");
	this.shape_11.setTransform(-102.2,39.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgKgLQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgGAFgGAAQgGAAgFgFQgFgFAAgHQAAgGAGgFg");
	this.shape_12.setTransform(-95.2,39.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EAF2F0").s().p("AAAARQgGAAgFgFQgFgFAAgHQAAgGAGgFQAFgFAFAAQAHAAAGAGQAEAEAAAGQAAAHgFAFQgFAFgHAAIAAAAg");
	this.shape_13.setTransform(-95.2,39.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#92B1B0").ss(0.5,1,1).p("AhWgLQAGAGABAGQAAABAAABQgBAKgGAIQgIAGgKAAQgKAAgGgHQgIgIABgKQAAgBAAgBQABgGAGgGQACgBABgCQAGgEAIAAQAIAAAGAFQACABABACgAATgQQAHgHAKABQAKAAAHAHQACACABACQADAGAAAFQAAACAAACQgBAHgGAGQgHAHgKAAQgKgBgHgHQgGgGgBgHQAAgCAAgBQAAgGAEgGQACgCACgCgAgzATQgHgIAAgKQAAgIAIgGQAHgHAKAAQAKAAAGAHQAHAIAAAIQAAAKgHAGQgHAHgKAAQgKAAgHgHgACAgCQAAADgCAFQgCAEgDADQgHAHgKAAQgKgBgHgGQgEgEgCgEQgBgFAAgDQAAgEABgDQACgFAFgEQAHgIAKABQAKAAAHAHQAEAFABAFQABADAAAEg");
	this.shape_14.setTransform(-104.9,39.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D6E4E2").s().p("AhoAbQgKAAgGgHQgIgHABgLIAAgCQABgGAGgGIADgDQAGgEAIAAQAIAAAGAFIADADQAGAGABAGIAAACQgBAKgGAIQgIAGgJAAIgBAAgAgiAaQgKAAgHgHQgHgHAAgLQAAgIAIgGQAHgHAKAAQAKABAGAGQAHAIAAAIQAAAKgHAGQgHAHgJAAIgBAAgAASARQgGgHgBgHIAAgDQAAgGAEgGIAEgEQAHgHAKABQAKAAAHAHIADAEQADAGAAAFIAAAEQgBAIgGAFQgHAHgKAAQgKgBgHgGgABXANQgEgEgCgEIgBgIIABgHQACgFAFgEQAHgIAKABQAKAAAHAIQAEAEABAFQABADAAAEQAAADgCAFQgCAEgDADQgHAHgKAAQgKgBgHgGg");
	this.shape_15.setTransform(-104.9,39.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#7282C0").ss(0.5,1,1).p("AgfAJIAAAAQgBgEAAgEQACgQAMgJQALgHAZADAASgcQATATgFASQgCAIgGAIIgBAAQgeAJgLgIQgJgGgEgKQAAAAAAgB");
	this.shape_16.setTransform(-126.8,39.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(225,196,255,0.302)").s().p("AgJABQAAgHAKAAQAJAAAAAEQAAAHgMACIgBAAQgGAAAAgGg");
	this.shape_17.setTransform(-127.7,38.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(123,140,206,0.502)").s().p("AgSAGQgJgGgEgIIAAgBQAMALATgBQAMgBAUgJQgCAIgGAGIAAAAQgSAFgJAAQgKAAgFgEg");
	this.shape_18.setTransform(-126.8,41.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(115,132,198,0.302)").s().p("AgfAOIAAgBIgBgHQACgQAMgJQALgIAZAEIAAAAQATATgFARQgUAMgMAAIgBAAQgTAAgLgLgAgFgRQgNAAAAAJQAAAHAHAAQAMgCAAgKQAAgEgGAAIAAAAg");
	this.shape_19.setTransform(-126.8,39.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#958B96").ss(0.5,1,1).p("AgHAbIAOgDQAQgYgVgZIgPgB");
	this.shape_20.setTransform(-123.5,39.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ADABA7").s().p("AAAALQAEgSgRgTIAAAAIAPABQAVAZgQAYIgOADQAGgIABgIg");
	this.shape_21.setTransform(-123.5,39.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#958B96").ss(0.5,1,1).p("AgDAKQAEAQALABIAQgDQAQgYgVgZIgRgBQgHAJgDAJIAZAAAAWACIgZAIQgBgBAAgCQgDgHADgIIgegBIAMAHIgMAEIAOAEIgKALIAbgH");
	this.shape_22.setTransform(-125.6,39.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#A5A39E").s().p("AgRAKIAZgIIgZAIIgBgDQgDgHADgIIAZAAIgZAAQADgJAJgJIAPABQAVAZgQAYIgOADQgLgBgGgQg");
	this.shape_23.setTransform(-124.2,39.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#958B96").ss(0.5,1,1).p("AgMArQAEADAFACQADABAEgBQAOgBAJgPQAIgPgCgSQgCgUgLgPQgDgDgEgDQgGgEgGgCQgBAAgDAAQgOACgIAPQgJAPACASQACAVALANQABABABABQACADADACg");
	this.shape_24.setTransform(-123.2,39.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B7C0AD").s().p("AgCgBIAFABIgBACIgEgDg");
	this.shape_25.setTransform(-124.8,43.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#DEDCDC").s().p("AgGAXIAAgEQgCgFAGAAQADgBABAGQABAGgDAAQgFAAgBgCgAgCADQgCgDgBgFQgDgSAKgBQAFAAAAAGIgCAMQgCAJgDABIAAAAQgBAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAg");
	this.shape_26.setTransform(-125.2,38.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CAC8C6").s().p("AgKAqIgCgCQgLgNgCgVQgCgSAJgPQAIgPAMgCIAGAAQAGACAGAEQAFANABAOQACAUgJARQgFAKgHAEQgGAEgFABgAgPALQgGAAACAFIAAAEQABACAFAAQAFAAgBgGQgBgFgEAAIgBAAgAgJgbQgMABADASQABAHACABQAAAAAAAAQAAABAAAAQABAAABAAQAAAAABAAQAEgBACgJIACgMQAAgGgEAAIgBAAg");
	this.shape_27.setTransform(-123.9,39.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BDBCB9").s().p("AgNAtQgFgCgEgDIABgCQAHgBAGgEQAHgEADgKQAJgRgCgUQgBgOgFgNIAHAGQALAPACAUQACASgIAPQgJAPgMABIgDABIgGgBg");
	this.shape_28.setTransform(-122.2,39.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgJgMQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgGAFgFgBQgIgBgEgGQgEgFAAgGQABgHAGgEg");
	this.shape_29.setTransform(-156.4,38.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EAF2F0").s().p("AAAARQgIgBgEgGQgEgFAAgGQABgHAGgEQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgFAEgGAAIAAAAg");
	this.shape_30.setTransform(-156.4,38.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgJgMQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgGAFgFgBQgIgBgEgGQgEgFAAgGQABgHAGgEg");
	this.shape_31.setTransform(-149.5,39.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EAF2F0").s().p("AAAARQgIgBgEgGQgEgFAAgGQABgHAGgEQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgFAEgGAAIAAAAg");
	this.shape_32.setTransform(-149.5,39.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgJgMQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgGAFgFgBQgIgBgEgGQgEgFAAgGQABgHAGgEg");
	this.shape_33.setTransform(-142.4,39.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EAF2F0").s().p("AAAARQgIgBgEgGQgEgFAAgGQABgHAGgEQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgFAEgGAAIAAAAg");
	this.shape_34.setTransform(-142.4,39.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A6BFBF").ss(0.5,1,1).p("AgJgMQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgGAFgFgBQgIgBgEgGQgEgFAAgGQABgHAGgEg");
	this.shape_35.setTransform(-135.4,40);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EAF2F0").s().p("AAAARQgIgBgEgGQgEgFAAgGQABgHAGgEQAFgFAGABQAHABAFAGQAEAFgBAFQgBAIgFAEQgFAEgGAAIAAAAg");
	this.shape_36.setTransform(-135.4,40);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#92B1B0").ss(0.5,1,1).p("AhXgWQACACABABQAFAHAAAIQAAABgBABQgBAIgHAHQgIAGgKgCQgKgBgGgHQgGgIABgIQAAgBAAgCQACgIAHgFQACgBABgBQAGgEAIABQAIABAGAFgAAVgNQAHgHAKABQAKABAGAJQACACABACQADAFgBAGQAAACgBACQgCAHgGAFQgHAGgKgBQgKgBgGgIQgGgGAAgIQAAgCAAgCQABgFAEgFQACgCADgBgAglAXQgKgBgGgIQgGgIABgIQABgKAIgGQAIgGAKABQAKABAGAIQAGAIgBAIQgBAKgIAGQgIAGgKgBgABrgQQAKABAGAIQADAEABAEQABADAAAEQgBAFgCAEQgCAEgEAEQgIAGgKgCQgKgBgGgHQgDgEgCgFQgBgEABgFQAAgDACgCQACgGAFgDQAIgGAKABg");
	this.shape_37.setTransform(-145.1,39.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D6E4E2").s().p("ABlAdQgKgBgGgHQgDgEgCgFQgBgEABgFIACgFQACgGAFgDQAIgGAKABQAKABAGAIQADAEABAEQABADAAAEQgBAFgCAEQgCAEgEAEQgGAEgIAAIgEAAgAAhAbQgKgBgGgIQgGgGAAgIIAAgEQABgFAEgFIAFgDQAHgHAKABQAKABAGAJIADAEQADAFgBAGIgBAEQgCAHgGAFQgGAFgIAAIgDAAgAglAXQgKgBgGgIQgGgIABgIQABgKAIgGQAIgGAKABQAKABAGAIQAGAIgBAIQgBAKgIAGQgGAFgIAAIgEAAgAhqARQgKgBgGgHQgGgIABgIIAAgDQACgIAHgFIADgCQAGgEAIABQAIABAGAFIADADQAFAHAAAIIgBACQgBAIgHAHQgGAEgIAAIgEAAg");
	this.shape_38.setTransform(-145.1,39.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#86C02E").ss(0.5,1,1).p("AggAGIAAAAQAAgEABgCQADgRANgIQALgHAZAGQARAVgHAQQgDAIgHAIIAAAAQgfAHgLgKQgIgHgDgKg");
	this.shape_39.setTransform(-166.6,37.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(165,49,255,0.502)").s().p("AAAAAIAAAAIAAAAg");
	this.shape_40.setTransform(-169.9,37.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(132,206,41,0.502)").s().p("AgUAGQgIgGgDgKIAAAAQALALAUABQALAAAVgHQgDAGgHAHIAAAAQgOADgIAAQgNAAgHgFg");
	this.shape_41.setTransform(-166.6,39);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(225,196,255,0.302)").s().p("AgJAAQABgHAKABQAJABgBAEQgBAHgMABQgHAAABgHg");
	this.shape_42.setTransform(-167.3,35.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(132,198,41,0.302)").s().p("AAAAZQgUgBgLgNIgBAAIAAgBIABgHQADgQANgHQALgHAZAGQARAUgHARQgUAJgLAAIAAAAgAgQgJQgBAGAHAAQAMAAABgJQABgFgHAAIgCAAQgKAAgBAIg");
	this.shape_43.setTransform(-166.6,36.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#958B96").ss(0.5,1,1).p("AgLAbIAOgBQATgXgTgaIgPgD");
	this.shape_44.setTransform(-163.1,37.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ADABA7").s().p("AgBALQAFgQgQgVIAPADQATAagTAXIgOABQAHgIADgIg");
	this.shape_45.setTransform(-163.1,37.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#958B96").ss(0.5,1,1).p("AgEAIQAEARAJACIARgBQATgXgTgaIgRgDQgJAIgDAJIAZADAgDgJIgegEIAKAJIgLAEIAOAEIgLAJIAbgFQAAgBgBgBQgCgHAEgIgAAWADIgaAF");
	this.shape_46.setTransform(-165.4,37.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A5A39E").s().p("AgTAIIAbgFIgbAFIAAgCQgCgHAEgIIAZADIgZgDQADgJAKgIIAPADQATAagTAXIgOABQgLgCgFgRg");
	this.shape_47.setTransform(-163.9,37.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#958B96").ss(0.5,1,1).p("AgQAqQAEADAEACQAFABADABQANAAAKgPQAKgOAAgUQAAgTgKgOQgCgEgEgDQgFgFgHgCQgDgBgCAAQgNAAgJAOQgKAPAAATQAAATAKAPQAAABABABQADADACADg");
	this.shape_48.setTransform(-163,37.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B7C0AD").s().p("AgCgBIAEABIAAACIgEgDg");
	this.shape_49.setTransform(-164.9,41.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DEDCDC").s().p("AgIAXIAAgEQgBgGAGAAQADAAAAAGQAAAGgDAAQgEAAgBgCgAgBADQgDgDAAgGQgBgSAJAAQAFAAAAAHIgCALQgEAJgDAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAAAABAAg");
	this.shape_50.setTransform(-164.9,36.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#CAC8C6").s().p("AgOApIgCgCQgKgPAAgUQAAgSAKgPQAJgOANAAIAGABQAHACAFAFQADAMAAAPQAAAUgLAQQgGAJgHAEQgEADgHAAgAgVAPIAAAEQABACAEAAQAFAAAAgGQAAgGgFAAQgGAAABAGgAgRgKQAAAHADADQgBAAAAAAQAAAAAAAAQABAAAAAAQABAAABAAQAEAAAEgKIACgLQAAgHgFAAQgLAAABASg");
	this.shape_51.setTransform(-163.6,36.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BDBCB9").s().p("AgRArIgHgFIABgDQAHAAAGgDQAHgEAEgJQALgQAAgUQAAgPgDgMIAGAHQAKAPAAAUQAAASgKAOQgKAPgMAAIgKgCg");
	this.shape_52.setTransform(-162.2,37.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#C0E074").ss(1,1,1).p("AlSg9IgWAAQAKhLAShBQADgOAEgNQBagKBXgEIAAAbIAAAlQg/ADg9AFQgMA2gJA3gAFeglIAZAAQgEg5gJguQgCgNgDgMQgFgXgHgTQhZgShegKIAAAbIAAAnQA8AFA+AIQAGAeAFAdQAAABAAAAQAFAeAEAdgAC8DeIAAghQA6gBA6gEQAFgvABgwIAqAAIAYAAQgCBDgHBNQhcAHhXADgAleA5IArAAQgEAxgBAyQAVADAVADQAyAHAyAGIAAAnIAAAUQhTgHhNgMQgXgEgWgEQgBhOAFhIg");
	this.shape_53.setTransform(-119.6,-92.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F1F1AF").s().p("AC1DHQA6gBA6gEQAFgvABgwIAqAAQgCA7gHBDQhPAFhMADgAk/DQIgpgHQgBhGAEhAIArAAQgEAxgBAyIAqAGQAyAHAyAGIAAAnQhKgGhEgKgAFXgaQgDgwgIgnIgFgXQgFgUgHgSQhOgPhSgIIAAgbQBeAJBZASQAHAUAFAWIAGAZQAIAuAEA6gAlvgzQALhKARhCIAHgaQBagLBXgEIAAAbQhOAEhRAJIgHAYQgPA3gJA+g");
	this.shape_54.setTransform(-118.9,-93.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EBEB8B").s().p("AC8DRQBLgDBQgFQAGhDADg6IAYAAQgCBCgHBOQhcAHhXACgAlKDJIgtgHQgBhPAFhHIAVAAQgEA/ABBGIApAHQBEAKBKAGIAAAUQhTgHhNgMgAEwgyQgEgegFgeIAAAAQgFgegGgeQg+gIg8gFIAAgmQBSAIBOAQQAHARAFAVIAFAWQAIAnADAwgAlShKQAJg/APg3IAHgYQBRgJBOgDIAAAlQg/ACg9AFQgMA2gJA4g");
	this.shape_55.setTransform(-119.6,-91.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#DBE8DF").ss(1,1,1).p("AgyhBIAAgaIAdAAQgCkOBpgPQAZgCAWARQALAIALANQhugKgBEDIAaAAIAAAdQAIABAHAAQApACAnAEAFdByQACAYABAaQAAARAAASQAAAVgBAWAC7F3QgnABgmABQg5ABg1gCQgSAAgSgBQgpgBgogDQgbgCgbgCAlfDSQACgYACgXQACgVACgVQACgQACgPAiVg+QAmgCAmAAQAMAAALgBAhJgmIAAgaAiVglQAmgBAmAAAABhAIAAAbQAoABAoACIAAgbAABhAQgHAAgKAAQgRAAgRgBABCg+QgggBghgBAANhbIAbAAABRgiQAoACAoAEAgVhbIAiAAAABglQgkgBgmAAAFBDHIAfAAAFACkQABASAAARQABAWgBAVAE7ByQADAZACAZIAgAAABuFjIAAAWAAAF4IAAgYQg6gCg7gFIAAAaAAAFgQA3ADA3AAQAnAAAmgBAk/DSQACgXACgYIggAAAk7CjQACgVADgVIghAAAk2B5QACgPADgQAirFTQAbADAbADIAAAA");
	this.shape_56.setTransform(-119.6,-107.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#94AF99").s().p("ABVCgQg3AAg2gDQg7gCg7gFIAAAAIg2gGIAAgMQgygFgygHIA4kDQDwgoEOAoIAAABQAFAeADAdIAMAAIAFAyIABAhIABArIgMAAQgBAwgGAvQg6AEg6ABIAAAMIg+ABIgPAAg");
	this.shape_57.setTransform(-117.1,-88.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#B5D2B5").s().p("AhDCHQAGkPBsACQALAJALANQhtgLAAECg");
	this.shape_58.setTransform(-111.3,-130.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#C0D9BF").s().p("AhLCOQgBkMBogPQAZgCAXARQhsgDgHEPg");
	this.shape_59.setTransform(-114.2,-131.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E4EFE4").s().p("AAADcIAAgXQA3ACA3AAIBNgBIAAAVIhNACIAAgWIAAAWIghAAIhNgBgABuDdgAAADcIgkgBIhRgEIAAgaQA7AFA6ADIAAAXIAAAAgAh1DXIg2gEIAAgbIA2AFIAAAAIAAAaIAAAAgAFBBWIAAgrIAfAAIgBArgAlfA2IAEgvIAgAAIgEAvgAFBArIgBgiIAggBIggABIgFgxIAiAAIADAwIAAAjgAlbAHIAEgoIAhAAIgFAogAlbAHgAk2ghIghAAIAEgfIAiAAIgFAfgAlXghgABRi+IAAgbIAAAbIhQgDIAAgbIBBADIAPAAQApADAnAEIAAAaIhQgGgAiVjaIBMgCIAAAaIhMACgAhJjCIAAgaIAXAAIAiAAIARAAIAAAbIhKgBgAABjcIAAAAgAhJjcg");
	this.shape_60.setTransform(-119.6,-92.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#85A58A").s().p("AksCrQABgyAEgxIgLAAIAEgvIAFgoIAFgfIAMAAQAIg3AMg2QA+gFA+gCIAAgMIBMgCIBKABIBQADIBQAGIAAAMQA8AFA+AIQAHAeAEAdQkOgojwAoIg3EDIgqgGg");
	this.shape_61.setTransform(-120.9,-94.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CADFCA").s().p("AgFAMIgTgBIgiAAIAAgYIAeAAIAiAAIAbAAIAZAAIAAAbIg/gCg");
	this.shape_62.setTransform(-118.8,-115.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#A96501").ss(0.4,1,1).p("AgdhZQACgQAFgPIAyAAQgDAPgCAQQgDAPgBARQgCASABATQAAAQACAQQABARADATQACAQADASQAEASAFAUIg0ABQgGgTgEgRQgEgSgDgRQgDgSgBgTQgCgPABgRQgBgTADgSQABgRAEgQgAgYBVIA1gDAgfAyIA3gCAATg5Ig1ABAAUAMIg3ABAgkgTIA2gBAAXhZIg0AA");
	this.shape_63.setTransform(-79.8,25.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#9D9F9B").ss(0.4,1,1).p("AhPi8QANAOAPAIQAoAUAzgVIABgJQAKgDAJgBQA2gGAMA5IgJAEIAAA4IAKgBQABAmgeAOIgJgHIhZApIAAAAIgUACIAHCoIhTADQgYg8gFg6QgHhPAfhLIBNgBIADBHIASABQAAgBAAAAAgCgMIBBgiIgIgGQAIgFgCgJIAGAAIAAgkIgHACQgEgcgUgDIABgJQhCASgqgcQgSgMgNgVABghzIAVgKABDhmIAdgNAAoinIgDAbAgDgMQgBAMABAHQABAFACAEAgCgMIgBAAAgVgNIgFABQgHAMAEAJIAagCAgdAJQABAFAEAEIAEAAABshFIAJAAABWgbIADACABDhCIApgDAA/guIAXATAgYhUQglBzAwCb");
	this.shape_64.setTransform(-72.5,20.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#DBE8DF").ss(1,1,1).p("AACh0QgBAQgBAQQgEBmAEBj");
	this.shape_65.setTransform(-104.4,-41.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#DBE8DF").ss(1,1,1).p("AhegQIALgHIAyA1IBEgwIAyA1IA3goACMBoQiFgJhzgSQgPgDgQgCIAAg+IABhxQCJARCNAHAhegQIgtAa");
	this.shape_66.setTransform(-155.9,55);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#ADB65A").ss(1,1,1).p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_67.setTransform(-71,-76.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#54BC5E").ss(1,1,1).p("AAAgoQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMQgMgMAAgRQAAgQAMgMQAMgMAQAAg");
	this.shape_68.setTransform(-138.2,-17.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#9BA2D2").ss(1,1,1).p("AAAgRQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFQgFgGAAgHQAAgGAFgGQAGgFAGAAg");
	this.shape_69.setTransform(-71.1,-86.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#9DA89B").ss(1,1,1).p("AluDYQAUgUAdAAQAcAAAUAUQAUAUAAAdQAAAcgUAUQgUAUgcAAQgdAAgUgUQgUgUAAgcQAAgdAUgUgAgVgWIACB0Qgzg0AxhAgAAmBbQAzgzgyhAgADkHNQgJABgLAAQg6AAgqgpQgBgBgBAAQgrgrAAg8QAAg8ArgqQADgDADgDQApglA3AAQA8AAArArQALALAJANQAWAiAAAsQAAA5gnAqQgBACgCACQgaAaghAKQgMADgMACgAFbnNQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgQAAgLgMQgMgLAAgQQAAgQAMgMQALgLAQAAgAFclnQAQgBAMAMQALALAAAQQAAAQgLAMQgMALgQAAQgQAAgLgLQgMgMAAgQQAAgQAMgLQALgMAQABg");
	this.shape_70.setTransform(-105.7,-43.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#DBE8DF").ss(1,1,1).p("AHYrCQgGADgGAAQgQAAgMgTQgDgEgDgFQgOgbAAgnQAAgnAOgcQAOgbAUAAQAEAAAFABQAJADAIAKQAEAGAEAHQABACABABQADAGACAHQACAHACAHQABAHABAGQABAHAAAIQAAAEAAAFQAAABAAACQAAAGAAAGQgBAGgBAFQgBAIgCAHQgBAHgDAGQgBAFgDAEQAAACgBABQgCAFgDAEQgIALgJAFgAGys2QABgIABgHQACgGACgGQACgHADgGQABgCABgBQADgHAEgFQAHgJAIgEAGxspQAAAFAAAFQAAACAAADQAAAFAAAFQABAHABAHQABAGABAFQABAFACAFQACAGACAFQABADACADQADAFADAFQAJAMAKAEAGys2QgBAGAAAHAIJkdIAAgVImUABAk+keIAAgVIi0gFQgqFhARFQIAYABAjjhTQgNgBgMgCIAEjaIFtgBABWAXIgBgoIjGgIIAECsIAXABICuAGgAIJkdIAIDLQjpAMi1ABQjKAAiMgOAkCMGIAKgIIA8A8IA8g3IBGA3IA6g3IA3A3IA3g3IBBA8IAyg8IA+BBIgFhrAEfNEIACAuQkrATj4gQAkCK8QEFALEWgZIABArAk+keIAEKjIi5gL");
	this.shape_71.setTransform(-115.9,-23.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#958B96").ss(1,1,1).p("AB+obIgZAOIgigPQgYBQgUBaQgLAugJAxIAlgJIAfAYIABAPIiLAbQAMiKA3iEQAVgzAdgzIBPAggABDocQADgKAEgKIA0AVAADkTQgDAOgBAOIBIgNAAYgcIgxgRQgCAIgDAIIAdAHgAhgJGIgXAJQgVkZAdjmQANhgAWhYIBmAyIgCAaAgegdQgIAcgHAbQgBADgBADQgIAggGAiQgkC7ABD7IAtgSIAgAPIgCAWIhLAbAhgIYQAAABAAABQAAAMAAALIBNgc");
	this.shape_72.setTransform(-174.9,-50.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#BDC5B1").s().p("AAEAuQAAgGAFAAQAKAAAAAHQAAAEgIAAQgHAAAAgFgAgRgrQAAgHAFAAQAIAAAAAGQAAAIgIgBQgHABACgHg");
	this.shape_73.setTransform(-65.8,10.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#C6CBBC").s().p("Ah4A9QgHhPAfhLIBNgBQglByAwCcIhTACQgYg7gFg6gAhigvQgDAQgCAQQgCAQAAAUQAAAQABASIAFAkIAGAjIALAkIA1gBIgIgmIgGgiIgEgkIgBgiQgBgTACgQQABgQADgQIAFgeIg0gBQgFAQgDAQgAACgCIgCgVIABAAIgBAAIAAgBIABABIBDghIAXASIADADIhbApgAAAgXgABIhxIAdgNIAVgKIAAA4IgJABIgpACgAhCigIAIgFIAMgLQAoAUAzgVIgDAaQgbAIgVAAQgjAAgZgRg");
	this.shape_74.setTransform(-73,21.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#CA7902").s().p("AgfgQIA2gCIAIAjIgzACIgLgjg");
	this.shape_75.setTransform(-79.2,36.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E38902").s().p("AgegPIA3gCIAGAgIg2ADIgHghg");
	this.shape_76.setTransform(-79.9,32.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FD9B0B").s().p("AgfAxIA3gCIAEAlIg3ACIgEglgAgShUIAyAAIgFAeIg0ABQACgQAFgPg");
	this.shape_77.setTransform(-80.2,22.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFC166").s().p("AgZgRIA1gBQgBASAAARIg2ACQAAgTACgRg");
	this.shape_78.setTransform(-80.7,22);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFAA2B").s().p("AgdASIA2gCIACAiIg3ACQgBgRAAgRgAgWgyIA0gBQgDAQgBAQIg1ABQACgQADgQg");
	this.shape_79.setTransform(-80.5,22);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#A3AE95").s().p("AhDhWIADBHIgFAAQgHANAEAJIAagDIACAAIABAKIAAAAIgDgKIADAKIgUABIAHCpQgwicAlhygAhDAPIAEAAIgEAAQgEgEgBgEQABAEAEAEIAAAAgAgrAOIAAAAgAAugbIgDgDQAIgGAGgKQAIgNAAgMIAJgBIAKAAQABAmgeAOgAAuiQQgGgZgXgNQA2gHAMA6IgJADIgVAKIgHgag");
	this.shape_80.setTransform(-68.2,21);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B0B9A4").s().p("AgcBMIAFgBIASAAIACAVIgDABIAAgJIABgNIgBANIAAAJIgaACQgEgLAIgMgAA9AqIgIgGQAIgFgDgJIAHgBIApgCQgBAMgIANQgGAKgHAGgABEAhQAAAGAHAAQAIAAAAgFQAAgGgKAAQgFAAAAAFgAAigqIABgJIADgaIABgJIASgEQAYAOAGAYIAGAaIgcANIgHADQgEgcgUgEgAAtg4QgCAHAHAAQAIAAAAgIQAAgGgIAAQgFAAAAAHgAhphdQANgBALgEQANAOAPAIIgNALIgHAFQgSgMgOgVg");
	this.shape_81.setTransform(-72.2,11.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#B6B085").s().p("AgQBUIgGgLIgDgGIAxAFIgBADIgFAJgAgdA5IgDgLIBAAEIgDANgAgkAVIBJADIgBALIhGABIgCgPgAgkALIAAgEIAAgJIBJACIAAAIIAAADgAgjgOIADgPIBCADIACANgAgdgqIAFgMIAxABIAFAMgAgPhGQAHgJAIgEQAHADAIALg");
	this.shape_82.setTransform(-68.8,-103.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#D6D2BA").s().p("AgQBFIAiAAQgIAMgIAEQgJgDgJgNgAgZA1IgEgKIA6AFIgFAKgAggAgIgCgKIBGgCIgEAQgAgkAHIAAgIIBJAAIAAAKgAgkgQIABgNIBHACIABAOgAgggsIADgMIA7ABIAEAPgAgYhFIACgDIAHgMIAeAAIAIANIACAEg");
	this.shape_83.setTransform(-68.8,-102.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A8CAA4").s().p("AgJBLIgGgJQgOgbAAgnQAAgmAOgbQAOgbASAAIAJABQgIAEgHAIIgHAMIgCAEIgDAMIgDANIgDAPIgBANIAAAKIAAACIAAALIACAOIACALIADAKIACALIADAFIAGALQAJAMALAEQgGADgHgBQgQABgKgTg");
	this.shape_84.setTransform(-71.6,-103);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#81CB9E").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_85.setTransform(-138.2,-17.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#BDBCB9").s().p("ABsGlIgCgBQgrgrAAg8QAAg8ArgrIAGgFQApglA3AAQA8AAArAqQALAMAJANQAWAiAAAsQAAA5gnAqIgDAEQgaAaghAKQgMADgMACIgUABQg6AAgqgpgAluE5QgUgUAAgcQAAgdAUgUQAUgUAdAAQAcAAAUAUQAUAUAAAdQAAAcgUAUQgUAUgcAAQgdAAgUgUgAlhDoQgMAMAAASQAAARAMANQAMAMASAAQARAAAMgMQANgNAAgRQAAgSgNgMQgMgMgRAAQgSAAgMAMgAgVgWIACB0Qgzg0AxhAgAAngZQAyBBgzAzgAFBklQgMgMAAgQQAAgQAMgLQALgMAQAAQAQAAAMAMQALALAAAQQAAAQgLAMQgMALgQAAQgQAAgLgLgAFOlPQgGAFAAAIQAAAIAGAFQAFAFAIAAQAIAAAFgFQAFgFAAgIQAAgIgFgFQgFgGgIAAIAAAAQgIAAgFAGgAFAmLQgMgLAAgQQAAgQAMgMQALgLAQAAQAQAAAMALQALAMAAAQQAAAQgLALQgMAMgQAAQgQAAgLgMgAFNm1QgGAGAAAHQAAAIAGAGQAFAFAIAAQAIAAAFgFQAFgGAAgIQAAgHgFgGQgFgFgIAAIAAAAQgIAAgFAFg");
	this.shape_86.setTransform(-105.7,-43.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A4CDF4").s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_87.setTransform(-71.1,-86.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E4E456").s().p("AgMAMQgFgFAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAFQgGAGgHAAQgGAAgGgGg");
	this.shape_88.setTransform(-71,-76.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BAD7B9").s().p("AoSJEIAAg+IAtgcIgOBfIgfgFgAoRGUQCKARCOAGQEFAMEWgZIACAqQkUAUkJgOQhzgGhygMIgHAuIgtAcgAoCBoQgQlNApljIC0AEIAAAVIiIAEIgtKVgAhkh7IgEivIDGAIIABArIilgMIgHCIgAjzlmIAEjbIFtgBIgCAhIACghIGUgBIAAAVImWANIlEAKIgSCzIgZgCg");
	this.shape_89.setTransform(-116.8,4.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C4DDC4").s().p("AkMJGQiEgIh2gTIAOhfIALgHIAyA3IBGgyIAyA3IA3gqIg3AqIgyg3IhGAyIgyg3IgLAHIAHguQByAMBzAGQELAOESgUIAEBrIg+hBIgyA8IhBg8Ig3A3Ig1g3Ig8A3IhGg3Ig8A3Ig8g8IgKAIIAKgIIA8A8IA8g3IBGA3IA8g3IA1A3IA3g3IBBA8IAyg8IA+BBIACAuQijALiSAAQh9AAhxgIgAn9BMIAtqVICIgEIAEKkgAhgiZIAHiIIClAMIACCCgAjtmCIASizIFEgKIGWgNIAIDLQjpAMi1ABQgDgzAAg1QAAgxADgyQgDAyAAAxQAAA1ADAzIgUAAQi9AAiFgOgABHmeIgCh1QgxBCAzAzgACCmgQAzg0gyhCgABpl0IAAAAg");
	this.shape_90.setTransform(-114.9,7.1);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C2D1BE").s().p("AAAAAIAAAAIAAABIAAAAg");
	this.shape_91.setTransform(-141.5,-111.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#C4C4C4").s().p("AhJEtQABgPAFAAQAAAAABAAQABABAAAAQABAAAAAAQABAAAAABQAGASgIAFIgEABQgEAAAAgLgAhCDmQADgkAQgBQAGgBADABQAGACAAAHQAAAHgGATIgCAHQgKAfgKABIAAAAQgKAAAEglgAAoj8QAGgbAIgHQACgEAEAAIAEAEIgBACIACADQAAAGgEANQgGASgIAAQgHAAAAgIgABAkxQAAgGAFAAQAFAAAAAGQAAAFgFAAQgHAAACgFg");
	this.shape_92.setTransform(-176.2,-76.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#919191").s().p("AhvIaIAAgCIAugSIAfAPIhNAcIAAgXgAgsgdIAFgQIAxARIgZAHgAgKkTIAkgJIAfAYIhIANIAFgcgAA1ocIAGgUIA1AVIgaAOg");
	this.shape_93.setTransform(-173.4,-50.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A6A6A6").s().p("AhvBQQANhgAWhYIBmAyIgCAaIgxgRIgFAQIgPA3IgCAGQgIAggGAiQgkC7ABD7IAAACIAAAXIAAACIAAATIgXAIQgVkYAdjmgAhWAoQgBAPAJgGQAIgEgGgTQAAAAgBAAQAAAAgBgBQgBAAAAAAQgBAAgBAAQgEAAgBAPgAg8hDQgQABgDAlQgEAjAKgBQAKAAAKgdIACgHQAGgUAAgGQAAgHgGgCIgGgBIgDAAgAAAnoQAVgzAdgyIBPAfIgDATIg0gVIgHAUQgYBQgUBaIgUBfIgEAcIBIgNIABAPIiLAbQAMiKA3iEgAApokQgJAIgGAbQAAAIAHAAQAJAAAFgSQAEgNAAgHIgBgCIAAgCIgDgEQgFAAgBADgAAyo3QgBAGAHAAQAEAAAAgGQAAgFgEAAQgGAAAAAFg");
	this.shape_94.setTransform(-174.9,-50.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#AEAEAE").s().p("AglAFIAAgCIBLgaIgCAWIhJAZIAAgTg");
	this.shape_95.setTransform(-180.8,4.9);

	// base
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#9B5A4A").ss(1,1,1).p("Ag8AUQgCgFgBgGQAAgBAAgBQAAgBAAgCQgBgEAAgFQACgMAFgLQABgBABgCAg1gjQADgDADgEQACgCACgCQARgQAXgBQAZgCAUARQAVATACAbQAAABAAAFQAAABAAABIAAAAABAAIQgCATgOAPQgRAVgbABQgUACgRgLQgFgDgDgEQgGgFgEgEQgBgBAAgBQgDgEgCgEQgCgEgBgF");
	this.shape_96.setTransform(-14.8,-101.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#8F5345").ss(1,1,1).p("AAAACQAAgCABgB");
	this.shape_97.setTransform(-20.3,-105.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#4A6956").ss(1,1,1).p("AgYj6IgSgCQADAgAEAeQAdERACCqIAcgGQAFiagVicAAEhbQgFgxgKgyQgGgegHgeAAShiQgHgvgJgtQgEgegHgdIAAAAIgPgBAAWhGQATCPACCqIgTAE");
	this.shape_98.setTransform(-38,-82);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#78A98B").ss(1,1,1).p("ArxoZQgUBAgNBIQgFAhgFAhQALA2DYAVQARACATACIA0ADQA9AEBIACQA7ABA4ACQGRAJDGgKAIBr8QgBgDgCgDQhKijjEgpQhCgOhEgGQgxgDg1gCQhtAHh6ALQhRANhTAXAshksQgYCtgQCoAFxj2QCwgJAMgYIgBkbQgFh1gmhVAsclPQgCARgDASAI0sQQgBgBAAgBQhCh/iSgvQgigJgkgIQhRgLhegGAM/orQgShsgohFQhPiLlXhZQgYgIgbgGQgKgCgJgBQh/gZiFADQgJAAgIAAANFoJQADAVABAWAAVvnQArABAqAEAjjvVQB3gTBwABANBohQgBgFgBgFAKGEEIgdo3IgBj/QgGiDguhbAKGEEIAmK9AItkXIBFT/");
	this.shape_99.setTransform(-111.9,-41.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#78A98B").ss(1,1,1).p("AmfvDQkIBZhjE/AthAXQgcEzgBEoQAABFACBEQAAAjABAjQACBCAEBBAFVkHQACgBACAAAIbsiIABAAAKVhjQAGkVgdjxQgHg3gJg1IBjAMIADAAQAAADABACQAJAsAIAvQAHAnAGAqIAmgUIAPgHIABAAIA3gcALTnqIgfARIgCgfIAdgOIAOgHAN/pHIgaANIg5AfIgDACIgKAFIgpAXQABAGABAHAN1paIgVALALhnyIgOAIAL2n9IgVALALzoYIgWAL");
	this.shape_100.setTransform(-109.5,-39.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#A5A5A5").ss(1,1,1).p("AFxDqQlxAsn1heQhagQg9g7QgHgHgHgIQgagdgUgnQgUglgOgwQgLgngIguQgCgPgCgPQgBgagCgaALLjQIA6gn");
	this.shape_101.setTransform(-120.8,79.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#A5A5A5").ss(1,1,1).p("AsIjbQAtA9C4AjAIVDKQgnAMgrAKIAAAAQgoAKguAHAMBjwIAHCNQgKBmg6BKQgLANgLAMQg4A5hXAkALLiAIgEhJQh0Ctsog6QgWgCgWgCQitgLh1gWALEgqQAGgcACgdIgBgdQh4Crsog4QgWgBgWgCQitgMh1gWQirgggyg3AKdA5QAaguANg1QiJCdsQg5QgTgCgUgBQitgMh1gWQiXgag5gvAJACfQA6gqAjg8Qi2CBrshCQhjgIhQgLQg9gIgygKQhpgVg8gdALEgqQAEgGAEgGAHCDcQBJgXA1gmQjsBJpZg1QitgOh1gXQg8gMgtgOAHCDcQgnANguAIAIWDGQgnAPgsAL");
	this.shape_102.setTransform(-120.5,79.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#78A98B").s().p("AjEOwQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIABgBIACgBIAHgDQDshJBpiRIAAAAIAJgNIAAAQIgBADIAAAAQhrCVj2BLIgCAAIgCAAgAAjoZQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAIACAAIBrgkIACgBIAAAAIAAACIAAAJIhsAkIgBAAIgCgBgACMuKIgDgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBAAAAgBIgBgOIgCgOQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAIAAAAIAEABQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABIAAABIABAJIgBADIgBgBQgBASABADIAAAAIgBAAgAC+ufIgBgLIAAAAIACgDIADgCIAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIABAMg");
	this.shape_103.setTransform(-47.1,5.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C59987").s().p("AgCAUQgIgBgFgIQgDgEgBgFQgBgNALgFIAJgCQAQgBAEATQABASgUACIgDAAg");
	this.shape_104.setTransform(-15.6,-104.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B1775F").s().p("AgXAnQgHgDgGgGIgFgEIgBgBIAAAAIgBgCIgCgBIgHgMQgFgKgBgMIAAgFIAFgHIAFgFQAQgPAYgCQAZgBAUARQAUASACAZIAAAJQgDgBgDADQgRAVgbACIgEAAQgPAAgNgIgAgNghIgJACQgLAFABAPQAAAGADAEQAFAFAIABIAFAAQASgBgBgRQgDgUgPAAIgBAAg");
	this.shape_105.setTransform(-14.2,-103.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#9B624A").s().p("AghAmQgFgDgDgEIgKgIIgBgDIgFgIIgDgIIgDgJIAAgCIAAgDIAAgLQABgNAFgKIACgDIADABQABANAEALIAIAMIABABIACACIAAAAIAAABIAFAEQAGAEAHADQAQAJARgBQAbgCARgTIAFABQgCARgOAPQgRAVgbACIgEAAQgSAAgPgKg");
	this.shape_106.setTransform(-14.8,-100.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B7816A").s().p("AA2AVQADgEADABIABABIgBABIAAgCIAAACIAAAAIAAACgAA8AUIAAAAgAg8gRIADgEIAAAGg");
	this.shape_107.setTransform(-14.3,-103.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#ECF1EB").s().p("AhYAcIAdgPIAOgHIAWgJIAkgTIAPgHIABgBIA3gbQACAMADAJIg5AfIgDACIgKADIgnAWIgVAMIgOAIIgfAQg");
	this.shape_108.setTransform(-31.5,-92.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#91B391").s().p("AAAg8IANgIQATCPACCqIgTAEQAFiagUibgAgUi8IgNg8IAPABIAAAAIANA7QAHAtAHAvIgMAHQgHgxgKgyg");
	this.shape_109.setTransform(-37.1,-82.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#797E70").s().p("Agai+IgHg+IASACIANA8QAIAyAHAxIgaAPIACAeIAcgQQAVCbgFCaIgeAGQgCiqgbkRg");
	this.shape_110.setTransform(-38.9,-82);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#CEDECE").s().p("Ah3jMQgHg2gJg1IBjALIADABIABAFQAJAsAIAuIANBRIgWALQgHgvgJgtIgNg7IAAAAIgPgBIgTgCIAHA+QAeERACCqIAegGIASgEQgBiqgTiPIAUgMIABANIAAAAQgBAAAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAAAABIACAOIAAAOQAAAAAAAAQAAABABAAQAAABAAAAQAAAAABABIADABIAFFBIgBAAIhpAkQAGkUgdjwgABpiyIAVgLIADAJIAFAIIACACIgaAOQgDgKgCgMg");
	this.shape_111.setTransform(-33.6,-80.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#959595").s().p("AiiDlQBJgYA1gmQA4gqAjg8QAagtANg2QAGgbADgeIgCgcIgEhJIA6goIAICNQgLBng6BKQgLANgLAMQg3A4hWAkIgHACIgCACQgmAPgtALgABegiIAJgMIgJAMg");
	this.shape_112.setTransform(-59.1,78.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B3B3B3").s().p("AnaCtQhagQg9g7QAtAPA8AMQB1AXCtANQJZA1DrhJQg0AmhJAYQgnAMguAJQh1AOiEAAQkWAAlXhBgAjmBmQhjgIhRgKQg8gIgygKQhpgVg8geQgUgkgOgwQA5AuCXAbQB1AWCtALIAnADQMQA5CIidQgMA4gaArQh5BVlxAAQi8AAj8gWgAIpBMQAXAAAUgKQAUgJAAgLQAAgEgPgLIg7ANQgPAFAAANQAAAMACgBgAo1AJIgBALQAAAMAQALQAaASA8AAQAZAAAGgDQAHgCAAgKIh9goQgNAAgBADgAp8ARIAPAOIAMgFIADgKIgPgPQgPAGAAAKgAi2gfIgtgDQitgLh0gWQirgggyg4IgFgeIgDg0QAtA9C4AjQB0AWCtAMIAtADQMnA6B1isIAEBJQhaCBnbAAQihAAjKgPgAFnhGQgCAIAAADQAAAPAUAHIAHgDIAFgCIADgKIgBgBIABgCQgLgRgJAAQgNAAAAACgAHYgvQBNAAA+geQAygZAAgPQAAgPgPAAIhGAjQhAAUguAEIgQACQgDACAAAIQAAAMACgBgApniLIgBALQAAAOAkAOQA4AXBzAAQAQAAAHgNQgEgGgFgBQgZgDg9gRQgUgGhkgTQgNAAgBADgAquiNIAPAOIAMgFIADgKIgPgPQgPAGAAAKg");
	this.shape_113.setTransform(-123.5,80.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#CCCCCC").s().p("AIXCMQAAgJAPgHIAPAQIgDAJIgMAGIgPgPgAmTB9QAAgKAUgLQAPANAAADQAAAJgUALIgPgPgAn3BiIACgLIABAAQAAgDAMABQAMAAALACQAJADAJAFQAPAJAEAIQgGAMgRAAQg0AAAAgagAo/BmQgDABAAgMIAAgEQACgNAPABQARgBABANIAAACQAAAQgSgBgAIeBNQgCABAAgMQAAgNAPgFIA7gOQAPAMAAAEQAAALgUAJQgUAJgWAAgAoZAvQgQgLAAgNIABgKQABgDANAAIB9AoQAAAKgGACQgHADgZAAQg8AAgagSgApvAVQAAgKAPgGIAPAPIgDAKIgMAEIgPgNgAIBAHQgDABAAgLQAAgPAWgDQA1gHAigLQAPAMAAAEQAAAKgcAMQgeALgpAAgApCgtQAAgDADgIQAAgDAMABQANgBCdAoQAAALgHACQgGACggABQiMAAAAgqgAFyg3QAAgEACgHQAAgCANAAQAJAAALARIAAACIAAABIgDAJIgFACIgHAEQgUgHAAgPgAHOguQgCABAAgMQAAgJADgBIAQgCQAugEBAgUIBGgkQAPABAAAPQAAAPgyAYQg9AehOAAgAqNhBQAAgEACgHQAAgCANAAQALAAAJARIgBAHQgEAHgKADQgUgGAAgPgAo2hgQglgOAAgPIABgLQABgCANAAQBkASAUAHQA9ARAZADQAFAAAEAHQgHAMgPAAQh0ABg3gXgAqhiKQAAgJAPgHIAPAQIgCAJIgNAGIgPgPg");
	this.shape_114.setTransform(-124.9,80.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#EAEDE7").s().p("AjnNyIgCgmQgBg3AJgqQAShYAxABQARgBAJAkQADASAAAUQAAAVgEBvQAAA2g3AAQgjABgIgmgAiehaQgBgYAQAAQAMAAAFANQACAGABAGQAAAVgSgBQgYABAHgWgAiuioQABgRAPgOQAOgPASAAQARAAAQATQAOAQABAFQAAAQgNAMQgNAMgWAAQgvABgBgjgAAnsqQAAgPAegeQAighAdgBQAbAAAIAPIADARQAAAPgcAcQggAegeAAQgoAAgBgagAC+uCQAAgUATgBQAPAAAHAKQADAGABAGIgDAPIgUADQgeABAIgUg");
	this.shape_115.setTransform(-170.3,-38.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C8D5C4").s().p("AhehaQhBgOhEgHQBeAHBQAKIBFARQCSAvBCB+IAAACIg1AOQhLihjCgpg");
	this.shape_116.setTransform(-78.4,-129.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AEAEAE").s().p("AAAABIAAgBIAAABg");
	this.shape_117.setTransform(-75.3,101.4);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#BBBBBB").s().p("AjrCTQisgNh1gXQg8gMgtgPIgOgOQgagegUgmQA7AdBqAVQAyAKA8AIQBRALBiAHQLsBCC2iBQgjA8g6AqQiIAqkEAAQi9AAj8gWgAIFB7IAPAOIANgFIACgKIgPgPQgPAGAAAKgAmlBsIAPAOQAUgLAAgJQAAgDgPgMQgUAKAAALgAoGBFIAAABIgDAKQAAAbA1AAQAQAAAGgNQgEgIgPgJQgIgFgKgCQgLgDgMAAQgMAAAAACgApCBXQARAAAAgPIAAgCQgBgNgQAAQgQAAgBANIgBADQAAAMADgBgAi7AaIgngDQisgLh1gUQiXgdg5guQgMgogHgtQAzA3CqAgQB1AWCtALIAsAEQMoA4B4irIACAcQgDAegGAbQhlBznEAAQiiAAjOgPgAIFgGQApAAAfgNQAbgLAAgLQAAgEgPgLQgiAKg1AHQgWADAAAQQAAAMADgBgApRhKQgDAIAAADQAAAqCMAAQAgAAAHgDQAGgCAAgKQidgogNAAQgMAAAAACgAqcheQgDAIAAADQAAAPAUAHQAKgDAEgIIABgHQgJgRgLAAQgMAAAAACg");
	this.shape_118.setTransform(-123.1,82.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#DFE7DC").s().p("AqwOvQgEhBgChBIgBhHQgChEAAhFQABknAckzQAQipAYitIAFABQAKA1DYAVQCzAKCeAFQHXAOEfggQgaA/rcgLQicgCi9gGQgQBvgMBzQgdEagEFAIAACJIABBHQABBvAEBzQi4gjgsg9gAp8LfQgJAqAAA3IADAmQAIAmAigBQA3AAAAg2QAFhvAAgVQAAgUgEgSQgIgkgSABQgwgBgSBYgAo6hmQgGAWAYgBQARABAAgVQAAgGgCgGQgFgNgNAAQgPAAAAAYgAo6jTQgPAOAAARQABAjAvgBQAVAAAOgMQAMgMAAgQQAAgFgOgQQgQgTgRAAQgSAAgPAPgAk0kkQA7ACBIAAIABAEQhIgCg8gEgApvl1IAJhCQANhJAUhAQBjk/EIhZQBTgWBRgOQB4gLBvgHIBmAFQBEAHBCAOQDDAoBLCkIADAFQhGiAjegxQo2gnilG7QgtB5gPCcQjYgVgKg1gAlUtjQgeAeAAAPQAAAaAoAAQAfAAAggeQAbgcAAgPIgCgRQgIgPgbAAQgdABgiAhgAjcuOQgHAUAegBIAUgDIACgPQAAgGgDgGQgHgKgPAAQgUABAAAUg");
	this.shape_119.setTransform(-129.2,-37.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#A4BCA0").s().p("Ag1IHIgdo3IAAj/QgHiEguhaIgBgCQBxgDBEBeIhhgMQAJA1AGA2QAeDygHESIgBABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIBpgkIAED6QgmCBhGAAQgUAAgWgJgABajKIgBgBIACgCIgCgKIAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBIgDgBIgCgNIApgWIAGAbIAFAAIAAANIADAMIgxACgABClVQgIgugJgsQAqA6AaBeIgnATIgMhRg");
	this.shape_120.setTransform(-41.9,-66.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#9AB597").s().p("AgwN1QAMgMAKgNQA5hKAKhpIgHiNIgkq6QBmAsAvikIANP/IgJANIAAAAQhpCRjsBKQBXgkA3g4gAC5t+IAAgNIAAgBIgCggIAEgCIAEArIgDACIgBADIAAABIABAKIgBABIgCgMgAC1vQIACAKIgBAAIgBgKg");
	this.shape_121.setTransform(-46.9,0.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B3C7AF").s().p("Ag9SxIABAEQgpAKgtAHQAtgIAogNgACBn1IgBkbQgFh1gmhVIgDgGIA1gOIAAgCIABACIgBAAIABAAQAuBbAGCDIABD/IAdI3IAmK9Ig6AngAGLrgIAKgFIABAgIgEAAIgHgbgAFBuPIgBgGIgDAAQhGhdhwACQhCh/iQgvQFVBZBPCLQAoBFASBsIABAKIgPAIQgahegqg6gAiRyvIATADQAbAGAYAIIhGgRgAlAzAQgqgEgrgBQCFgDB/AZQhRgLhegGg");
	this.shape_122.setTransform(-69.1,-18.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#CFDCCD").s().p("Ak7QaIgsgDQitgMh1gWQgEhzgBhvIgBhGIAAiKQAEk/AdkZQAMh1AQhvQC9AGCcACQLcALAag/QkfAhnXgPQiegEizgKQjXgWgLg1IgFgBIAFgiQALA1DXAWQAQidAsh4QCmm8I1AnQDeAxBGCAQAlBWAGB1IAAEaQgMAZivAJIgEAAIgEAAQhnAFidAAIgBAAIAAAAQh6AAicgDIgXAAIAAAAIAAAAIgGAAIgNgBIgNAAIh0gDIgBgEQhIABg7gDIg0gDIglgDIAlADIA0ADQA8AEBIACIB0ADIANAAIANABIAGAAIAAAAIAAAAIAXAAQCdADB5AAIAAAAIABAAQCdAABngFIAEAAIAEAAQCvgJAMgZIBFUAQhXCBnaAAQieAAjNgPgAMtonIAFgBIAAABgAgKwoIAOAAQAsACAqADIhkgFg");
	this.shape_123.setTransform(-110.3,-34.6);

	// Layer 3
	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#3C914B").ss(1,1,1).p("Ah6ArIAPACAh5AOIARAAAiFgHIAxABAh2glIASABAh1g+IASAAAiAhbIAwADACnAUQASgvADg4QAAgCAAgSIA7AAQAIBzhYAIQgDAIgEAIQCRgCgVifIhfAAQlRAFiJgtQgGAgAgAIIAAAAQAAAnABADQAEBTAlBAQAKATAOASQAYAfAcAUQA2ANA0ABQA0AAA1gOQAcgUAYgfQAYgeAOgjAh3B6IAPAAAh5BfIARABAiFBJIAsAA");
	this.shape_124.setTransform(-104.1,-153.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#8ABA89").s().p("AgUA3QgCgDAAgDQAAgKAIAAQAHAAAEALQAAALgIAAQgHAAgCgGgAgTAQIgHgQQAAgPANAAQAaAAAGAiQAAANgPAAQgNAAgKgQgAgCgsQgogGAAgFQAAgFAKAAQAuAAAdAPQAAAFgHAAIgmgEg");
	this.shape_125.setTransform(-125.1,-162.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#5EA264").s().p("AAlheQhmAFhKgQQhKgQg7gYIAAAAQBFAKBFAEQCcAJCZgXIBgAAQAUCfiQACQgPAjgXAeQgZAfgcAUQg0AOg1AAQBZgvgDjBgACZAAIgGAQIAGgQQBYgGgIh1Ig6AAIgBAUQgDA4gSAvIAAAAgAhehsIgwgDg");
	this.shape_126.setTransform(-102.7,-151.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#68A86D").s().p("AhcCYQgcgUgYgfQgOgSgKgTQglhAgEhTIgBgqQA7AYBLAQQBKAQBlgFQAEDBhbAvQgygBg2gNgAg3B6IgPAAgAg3BgIgRgBgAhUBJIAsAAgAg6AtIgPgCgAg3AOIgRAAgAgjgGIgxgBgAi3ggQAAADACADQADAGAGAAQAIAAAAgLQgDgLgIAAQgIAAAAAKgAgzgkIgSgBgAi6hSIAHARQAJAQAPAAQAPAAAAgNQgFgkgdAAQgMAAAAAQgAgyg+IgSAAgAhIhvQhEgEhGgKQgggIAGggQCJAtFRgFQhvAQhwAAQgqAAgtgCgAjLiKQAAAFAoAGIAoAEQAHAAAAgFQgdgPgwAAQgKAAAAAFg");
	this.shape_127.setTransform(-109,-153.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#D8A863").ss(1,1,1).p("AhwhNQgEgBgFgBQgkgJgkgMQgCAgABAfAi9ALQAGArAPAoQAHASAIAPQAHANAHAKQAlARAnAIIAAABACSA/QgUAngaAhQgVAcgXARQg8AIg7gMAjBhkQgNgFgNgEIALhJQAxARAyANQCbAoCugEIgLBJQgNABgNAAQgHAggLAbQgJAYgKAWAC3gqQiYACiPglAi9ALQgEgWgBga");
	this.shape_128.setTransform(-105.3,-163);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E2CB72").s().p("AhiB7QBfAMAph/QAkACAlAAQgUAogaAhQgVAbgXASQgWACgXAAQgmAAgkgHgAAygkIAEgTQhhgRhog5QCRAkCWgBQgHAfgLAdQgpAAgngCg");
	this.shape_129.setTransform(-101.8,-157.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#DBE76D").s().p("AgtAVQAHgVAFgXQAmADApAAQgJAWgKAWQgjgBglgCg");
	this.shape_130.setTransform(-93.3,-159.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#E1EB83").s().p("AhHAQIgLgCIg0gOQgEgXgBgZQAgAKAgAIIAKADQBkAaBpAEQgFAZgHAVQhngIhggZg");
	this.shape_131.setTransform(-110.8,-161.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#EDDFAB").s().p("AhhA9QgKgBgGgJQgFgIABgFQABgKALACQATADAAAVQgBAIgHAAIgDgBgAhHA1IgCAAQgEgBgBgDIABgDQABgFAFAAIABAAQAHACgBAGQgCAEgFAAIAAAAgAABgDQghgFgegIQgYgFgWgIQglgOABgJQABgIAHgBQAkAOApALQBXAXB1AJQgHAGglABIgEAAQglAAg7gGg");
	this.shape_132.setTransform(-110.5,-173.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E7D387").s().p("Ag/CzIAAgBQgngIglgRQgHgKgHgNQgIgPgHgSQgPgogGgrIA0AOIALADQBiAZBlAHQgnB1hRAAIgQgBgAh4gNIgKgCQgggJgggKQgBgfACggIgagJIALhJQAxARAyANQCbAoCugEIgLBJIgaABQiYACiPglIgJgCQgkgJgkgMQAkAMAkAJIAJACQBoA5BhARIgEARQhngGhmgYgAiqg8QgBAFAFAIQAHAJAKACQAJABABgIQAAgWgTgDIgCAAQgIAAgCAIgAiCg0IAAAEQAAACAEABIACABQAGAAACgFQABgGgIgBIgBAAIgBAAQgEAAgBAEgAjEiYQgBAJAlAOQAVAIAYAGQAfAIAiAEQA9AJAmgBQAkgBAIgHQhzgJhagXQgpgLgkgOQgHAAAAAIg");
	this.shape_133.setTransform(-105.3,-163.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#62B7B7").ss(1,1,1).p("ABfhKQA2gHA3gPQAAAFAAAEQAABNg8A0QgyAuhCAHQgOACgOAAQhTAAg8g3Qg8g0AAhNQAAgDAAgDQCWAmCUgTg");
	this.shape_134.setTransform(-103.6,-179.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#ADD1DA").s().p("AAAATQgygDgRgKQgQgIAAgIIABgGQAEgFAxAJQAuAJBDAGQggAQgqAAIgKAAg");
	this.shape_135.setTransform(-114.1,-184.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#91C0CC").s().p("AhhApQg7g0AAhNIAAgGQCVAmCUgTQAeAxgYA0QgXA0gxAQQgOABgPAAQhSAAg9g2gAiMhDIgBAFQAAAJAQAKQARAJAyADQAyADAigSQhBgIgwgJQgfgGgNAAQgIAAgBACg");
	this.shape_136.setTransform(-108.3,-179);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#80B7C4").s().p("AgOAcQAWgzgcgyQA1gHA2gPIAAAJQAABNg8A0QgvAuhCAHQAxgPAXg1g");
	this.shape_137.setTransform(-92,-179.3);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#BCBF9D").ss(1,1,1).p("AiLAEQgIgWgFgbQgLgBgMgBIgHg9QCxAPC1g2IAHA9QgKADgLAEQABAagCAaQgCAVgEASQgHAkgOAgQgLAbgOATQgwATgyADQgBAAAAAAQgfABghgFQgTgPgRgYQgUgdgPghQgIgTgGgUgAhSgsQgjABgjgCACihPQh5Ahh7AC");
	this.shape_138.setTransform(-104,-188.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#B6D1B8").s().p("AhnAbQgIgTgGgRQAgABAfgBQBWgBBVgRQACAVgBAQQhUAQhTACIgSAAIgkgBg");
	this.shape_139.setTransform(-106.1,-186.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D7D09F").s().p("AA4gHQAegFAdgIQgHAigOAgQgLAbgOATQgwATgwADQBNgLAGhugAA3g9QhRAHhggYQB7gCB5ghQABAagCAaQggAJghAGIgBgPg");
	this.shape_140.setTransform(-100,-185);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#A6C8A9").s().p("AgfgLQAfgGAggJQgCAVgEASQgbAIgeAFQABgRgBgUg");
	this.shape_141.setTransform(-91.1,-188.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E6E2C4").s().p("AhJAvQgGgFAAgEQgBgIAJAAQAQgCAFAQQABAIgJABIgCAAQgHAAgGgGgAgtAmIAAgCQAAgFAEAAQAGgBABAFQAAAFgFABIgBAAQgEAAgBgDgAhWgRQgigEAAgHQgBgIAIgBIgDABQBkALCKgbQgEAJgeAIQgeAIg0AHQggAEgeAAIgegBg");
	this.shape_142.setTransform(-108.6,-194.4);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#DCDBAB").s().p("Ag2CQQgTgPgRgYQgUgdgPghIA3AAQBSgBBUgRQgGBwhPALIgBAAIgKAAQgaAAgcgEgAiLAEQgIgWgFgbIAeABIAaAAIAAAAIAAAAIAHAAIAHAAIgHAAIgHAAIAAAAIAAAAIgaAAIgegBIgXgCIgHg9QCxAPC1g2IAHA9IgVAHQh5Ahh7ACQBeAYBTgHIABAPQhWAPhVACIgZAAIgngBgAh1gcQgJAAABAIQAAAEAGAFQAHAHAIgBQAJgBgBgIQgFgPgNAAIgDABgAhXgbQgEAAAAAFIAAACQACADAEAAQAFgBAAgFQgBgEgFAAIgBAAgAimhYQAAAHAiAEQAqADA0gGQAygHAegIQAegIAEgJQiKAbhkgLIADgBQgIABABAIg");
	this.shape_143.setTransform(-104,-188.4);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#BCBF9D").ss(1,1,1).p("AiNgWQgEgWAAgaQgKgCgLgDIAEg4QCdApCsgUIgEA4QgJABgKACQgDAYgHAXQgFAQgGASQgMAfgSAbQgOAXgQAPQgvAJgrgEQAAgBAAABQgfgFgdgKQgOgRgMgYQgOgcgIghQgEgQgCgUgAiRhGQAfAIAgAEQBvASBzgL");
	this.shape_144.setTransform(-105.5,-194.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B6D1B8").s().p("Ag0ARIgwgJQgFgQgCgTQAdAHAdAEQBNAMBQgCQgDARgEARIgRAAQhFAAhDgLg");
	this.shape_145.setTransform(-109,-194.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#A6C8A9").s().p("AgagOQAdgBAegDQgFASgGAQIg2ADQAEgRACgQg");
	this.shape_146.setTransform(-95.4,-193.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#D7D09F").s().p("Ag5BeQBHACAWhhIA4gDQgMAdgRAaQgPAXgQAPQgfAGgdAAIgdgBgAAtgzQhLgGhSglQBwARBxgLQgDAYgGAXQgfADgeABIACgOg");
	this.shape_147.setTransform(-102.5,-191);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E6E2C4").s().p("AhDAtQgIAAgFgHQgFgFAAgEQABgHAIAAQAPABACAQQAAAGgHAAIgBAAgAg1AiIAAgCQABgEAEAAQAFAAAAAFQAAAFgFAAQgEgBgBgDgAACgKQgugCgmgKQgdgJAAgHQABgHAHABIgCAAQBYAaCBgDQgGAHgbADQgRACgYAAIgkgBg");
	this.shape_148.setTransform(-109.6,-202);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#DCDBAB").s().p("AgbCDIAAAAQgfgEgdgKQgOgRgMgYQgOgdgIghIAxAJQBNAMBMgBQgWBhhFAAIgDAAgAhUgKQgdgEgcgHQgEgXAAgZQAfAHAgAFQBSAlBLAGIgCAOIgWAAQhDAAhEgKgAh+gqQAAAEAFAFQAFAHAIAAQAIABAAgHQgCgQgPgBIgBAAQgHAAgBAHgAhegnIAAACQABADAEABQAFAAAAgFQAAgFgFAAIgBAAQgDAAgBAEgAhSg5QgggFgfgHIgVgFIAEg4QCdApCsgVIgEA4IgTADQgtAEgsAAQhEAAhFgKgAiYhvQAAAHAdAJQAmAKAwACQAuACAdgDQAbgDAGgHQiBADhYgaIACAAIgBAAQgGAAgBAGgAiRhFIAAAAg");
	this.shape_149.setTransform(-105.5,-194.7);

	this.addChild(this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-199,-207.9,190.8,312.7);


(lib.DinnerPlates = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#62B7B7").ss(1,1,1).p("ACDgUQAAgCAAgCAiCgiQABAMAEALQAKAUAbAOQA2APA0gDACDgUQgJAhguAOQgPAEgRACQgNACgNAAAAsAhQgUACgHgB");
	this.shape.setTransform(19.3,32.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#68B9B9").ss(1,1,1).p("AB7ATQgyAEhRgEQhTgEgwgHQhHgJAMgSQAAgBABAAQDMAUDCgIQABAVhPAGg");
	this.shape_1.setTransform(20.1,28.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6DADBC").s().p("AgHAbIAEAAIAVgBIgZACgAgHAbQg+gCgYgXQgGgEgEgKIAcACQAmABBEgIIBJgKQgIAhguAOIggAGIgVABIgEAAgAgHAbIAAAAgAASAaIAAAAg");
	this.shape_2.setTransform(21.9,33.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#62A6B7").s().p("AhYAXQgbgOgKgUQgEgLgBgMQAvAHBTAEQBRADAygEIAAAEIhKAKQhDAIgngBIgcgCQAEAIAGAGQAYAXA8ACIABABIgQAAQgsAAgugMg");
	this.shape_3.setTransform(19.3,32.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ADD1DA").s().p("ACCAKQgGAAAAgEQAAgCAYgEIAYgCQAGAAAAACQgBAEgOAEQgMACgNAAIgIAAgAg7AKQgcgBgngEQgzgFAAgFQAAgEAGAAQAWABB6AOQAAABAAABQgBAAAAABQAAAAgBABQAAAAgBAAIgFAAIgYAAg");
	this.shape_4.setTransform(20.9,28.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91C0CC").s().p("AgIATQhTgEgwgHQhHgJAMgSIABgBQDMAUDCgIQABAVhPAGQgbACgkAAIhEgCgACbAAQgYACAAACQAAAFAHAAQARABAPgEQAPgDAAgDQABgDgHgBIgYAEgAiqgHQAAAGA0AFQAnADAcABIAcABQABAAAAgBQABAAAAAAQABgBAAgBQAAAAAAgBQh6gPgVgBQgHAAAAAEg");
	this.shape_5.setTransform(20.1,28.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#62B7B7").ss(1,1,1).p("ACCgLQAAACgBACQgLAgguALQgQADgQABQgNABgOgBQg0gBg1gSQgZgQgJgVQgDgLgBgNAAoAoQgUAAgHgB");
	this.shape_6.setTransform(19.8,28.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#68B9B9").ss(1,1,1).p("AiMACQhGgNANgSQABgBAAAAQDKAiDCAEQAAAXhQAAQgyAAhQgJQhTgJgvgLg");
	this.shape_7.setTransform(20.8,23.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6DADBC").s().p("AgKAYIABgBQg+gGgXgXQgGgGgEgLIAdAEQAmAEBEgEIBKgEQgLAggvALQgPADgRABIgYgBIAYABIgQAAIgJAAgAAPAYIAAAAg");
	this.shape_8.setTransform(22.3,29.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#62A6B7").s().p("AhbAVQgagQgIgVQgEgLgBgMQAvAKBTAKQBRAJAyAAIgCADIhJAFQhEACgngDIgcgEQAEAJAGAGQAWAZA9AHIgBABQgzgCg1gSg");
	this.shape_9.setTransform(19.8,28.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#ADD1DA").s().p("ACBAVQgHgBABgFQAAgCAYgCIAZgCQAGABgBADQAAAEgPADIgSABIgPAAgAg7AHQgcgDgmgFQg0gKABgGQAAgEAHABQAVACB4AXQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgEAAIgYgBg");
	this.shape_10.setTransform(21.5,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#91C0CC").s().p("AgKAWQhTgJgvgLQhGgNANgSIABgBQDKAiDCAEQAAAXhQAAQgyAAhQgJgACaANQgYACAAACQgBAFAHABQARACAQgDQAPgDAAgEQABgDgGgBIgZACgAipgPQgBAGA0AJQAmAGAcADQAXACAFgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQh4gXgVgCIgCAAQgFAAAAADg");
	this.shape_11.setTransform(20.8,23.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#68B9B9").ss(1,1,1).p("AB4AfQgyAAhQgJQhTgJgvgLQhGgNANgSQABgBAAAAQDKAiDCAEQAAAXhQAAg");
	this.shape_12.setTransform(21.2,19.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#62B7B7").ss(1,1,1).p("ACCgHQAAgCABgCAiBgoQAAANADALQAJAVAaAQQA0ASA0ABACCgHQgMAgguALQgPADgRABQgNABgOgBAAoAoQgUAAgGgB");
	this.shape_13.setTransform(20.2,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6DADBC").s().p("AgKAYIABgBQg+gGgXgXQgGgGgEgLIAdAEQAmAEBEgEIBKgEQgLAggvALQgPADgRABIgYgBIAYABIgPAAIgKAAgAAPAYIAAAAg");
	this.shape_14.setTransform(22.6,25.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#62A6B7").s().p("AhbAVQgagQgIgVQgEgLgBgNQAvALBTAJQBRAKAxgBIgBAEIhJAEQhEADgngDIgcgDQAEAIAGAHQAWAYA8AGIAAABQg0AAg0gTg");
	this.shape_15.setTransform(20.2,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#ADD1DA").s().p("ACBAVQgHgBABgFQAAgCAYgCIAZgCQAGABgBADQAAAEgPADIgSABIgPAAgAg7AHQgcgDgmgFQg0gKABgGQAAgEAHABQAVACB4AXQAAAAAAABQAAABgBAAQAAABgBAAQAAAAgBAAIgEAAIgYgBg");
	this.shape_16.setTransform(21.9,19.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#91C0CC").s().p("AgKAWQhTgJgvgLQhGgNANgSIABgBQDKAiDCAEQAAAXhQAAQgyAAhQgJgACaANQgYACAAACQgBAFAHABQARACAQgDQAPgDAAgEQABgDgGgBIgZACgAipgPQgBAGA0AJQAmAGAcADQAXACAFgBQABAAAAAAQABAAAAgBQAAAAABgBQAAAAAAgBQh4gXgVgCIgCAAQgFAAAAADg");
	this.shape_17.setTransform(21.2,19.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#68B9B9").ss(1,1,1).p("AB8ANQgyAGhRAAQhTAAgwgEQhIgJAMgQQAAgBAAAAQDNALDCgSQACAWhPAJg");
	this.shape_18.setTransform(21.7,15.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#62B7B7").ss(1,1,1).p("AAVAgQANgCAOgCQgVADgGAAACDgdQgHAigtAQQgQAEgPADACDggQAAACAAABAiCgfQABAMAFALQALAUAbANQA3AMA0gF");
	this.shape_19.setTransform(20.9,20.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ADD1DA").s().p("Ah9AJQg0gDAAgGQAAgCAGAAQAWAAB6AIQAAABAAABQAAAAAAABQgBAAAAABQgBAAAAAAIgdACQgcAAgngDgAB8AAQAAgBAYgFIAYgFQAGAAAAAEQAAAEgOADQgPADgSAAIgBAAQgGAAAAgDg");
	this.shape_20.setTransform(22.4,15.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#91C0CC").s().p("AiKAOQhIgHAMgSIAAgBQDNAMDCgSQACAWhPAJQgyAGhRAAQhTAAgwgFgAipAAQAAAFA0ADQAnACAcABIAcgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBQh7gJgVAAQgHAAABAEgACbgHQgXAFAAACQAAACAHAAQARAAAPgCQAOgEAAgEQABgEgHAAIgYAFg");
	this.shape_21.setTransform(21.7,15.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#62A6B7").s().p("AhWAZQgbgNgLgUQgFgLgBgMQAvAFBTAAQBRAAAygGIAAADIhJANQhDAMgnAAIgcAAQAFAIAHAFQAYAWA9AAIAAABIgeABQgmAAgngIg");
	this.shape_22.setTransform(20.9,20.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6DADBC").s().p("AgEAeQg/AAgYgWQgHgFgFgIIAdAAQAmAABDgMIBJgNQgHAigtAQIgfAHIgZADIAZgDIgZAEg");
	this.shape_23.setTransform(23.6,20.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#68B9B9").ss(1,1,1).p("AiLAFQAvAJBTAHQBRAGAygBQBPgDAAgXQjDACjLgbIAAAAQgOATBIALg");
	this.shape_24.setTransform(22.1,9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#62B7B7").ss(1,1,1).p("AAqAlQgVAAgGAAAAPAmQANAAAOgBACCgNQgKAhguAMQgQAEgQABACDgRQgBACAAACAAPAmQg0ABg2gRQgZgPgKgVQgEgLAAgM");
	this.shape_25.setTransform(21.2,14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#62A6B7").s().p("AhbAWQgZgPgKgVQgEgLAAgMQAvAJBTAGQBRAHAygCIgBAEIhKAHQhDAGgmgDIgdgCQAEAHAGAGQAXAYA8AFIAAABIgDAAQgyAAg1gQg");
	this.shape_26.setTransform(21.2,14.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6DADBC").s().p("AgIAYIAZAAIgZACgAgIAYQg/gEgXgWQgFgGgFgKIAdADQAnADBCgHIBLgGQgKAhgvAMQgQAEgPAAIgRABIgIgBgAgIAYIAAAAg");
	this.shape_27.setTransform(23.8,15.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#ADD1DA").s().p("ACCAQQgHgBAAgEQAAgCAZgDIAYgDQAGABAAADQgBAEgOADQgKACgMAAIgLAAgAg7AJQgcgDgngFQg0gGABgGQAAgEAHAAQAWACB4ASQAAAEgDAAIgGAAIgWAAg");
	this.shape_28.setTransform(22.9,9.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#91C0CC").s().p("AgJAVQhTgHgvgJQhIgLAOgTIAAAAQDLAbDDgCQAAAXhPADIgUAAQguAAhBgFgACbAHQgYACAAACQgBAFAHAAQASACAPgDQAPgDAAgEQABgEgGAAIgZADgAiqgLQAAAGA0AGQAmAGAcACQAYACAFgBQACgBABgDQh5gTgWgBIgBAAQgFAAgBADg");
	this.shape_29.setTransform(22.1,9.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#68B9B9").ss(1,1,1).p("AiNgEQhEgWAPgQQAAgBAAAAQDHAyDBATQgCAXhPgGQgzgEhPgPQhRgQgvgMg");
	this.shape_30.setTransform(22.8,4.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#62B7B7").ss(1,1,1).p("ACBACQgBABAAACQgOAigvAHQgQABgQAAQgNAAgOgCQgzgFg0gWQgYgSgHgWQgDgLABgNAAjAvQgUgBgHgC");
	this.shape_31.setTransform(21.5,8.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6DADBC").s().p("AALAcQgSgBgGgBQg+gMgUgYQgFgHgDgKIAbAGQAnAHBDABIBKACQgNAfgwAIIgVAAIgLAAgAgNAbIAAgBQAGABASABIgYgBg");
	this.shape_32.setTransform(23.9,10.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#62A6B7").s().p("AhfASQgYgRgHgWQgDgMABgMQAuAOBSAQQBPAPAyACIgBAEIhKgBQhEgCgmgFIgcgGQADAIAGAIQAUAaA7ALIAAABQgzgFg0gXg");
	this.shape_33.setTransform(21.5,8.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#ADD1DA").s().p("AB/AfQgGgBABgFQAAgCAYAAIAZAAQAGABgCAEQAAAEgPABIgIABQgMAAgNgDgAg8ACQgbgDgmgJQgzgOABgGQABgEAHABQAVAEB2AgQAAABgBABQAAABAAAAQgBABAAAAQgBAAgBAAIgcgFg");
	this.shape_34.setTransform(23.4,4.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#91C0CC").s().p("AB1ArQgzgEhPgPQhRgQgvgMQhEgWAPgQIAAgBQDHAyDBATQgBASgzAAIgdgBgACYAcQgYAAAAACQgBAEAGACQARADAQgBQAPgCAAgEQACgDgGgBIgNgBIgMABgAipgaQgBAHAzANQAmAIAbAFIAcAEQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQh2gggVgEIgDgBQgEAAgBADg");
	this.shape_35.setTransform(22.8,4.5);

	this.addChild(this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,42.7,36.4);


(lib.CuttingBoard = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E3B985").s().p("AloAJIC4g2QD5AREgADIimBHg");
	this.shape.setTransform(49.1,5.3,1,1,0,0,0,-0.7,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9D6C47").ss(0.8,1,1).p("AiYhJQFEAXEggBIACgBQALAHgRAUIjoBnIqog2QgSgJAPgQIBJgRQgVgKATgKQAUgKAvgKQAkgIAdgFQAJgCAHgBQADgBADAAQAAAAABAAIAAAAQAfgEAhAKIAPgEADgBOQALgSgEgMQlogSlKgfAlPgVQAAAAgBAAQgWACgCgFIAAgBQgCgFAagHQAPgFAQgEQALgDAMgEQAPgEAMgCQAMgDAKgBQAUgCACAFIAAABQAAADgHAEQgEADgJADQgVAJgeAIQgfAHgWABQAHgHAagHQAJgDALgCQAagGAmgGADnAwIDlhj");
	this.shape_1.setTransform(46.7,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D6A172").s().p("AlTASQgRgKAPgQQFKAgFoARQADAMgLASgAjygfIAAAAQgCgFAZgIIAggJIAXgGIAbgHIAWgEQATgCACAGIAAAAQABADgHAEQgnAGgaAHIgTAEQgbAHgGAHIgBAAIgMABQgLAAgBgEg");
	this.shape_2.setTransform(35,8.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F0D28D").s().p("ADkAwIDlhjIjlBjQlogSlKgfIBIgRQgVgKAUgKQAUgKAvgKQAkgIAdgFIAQgDIAFgBIABAAIABAAQAfgEAhAKIAPgEIACAAQFEAXEggBIACgBQALAHgRAUIjpBnQALgSgDgMgAjsg/IgWAEIgbAGIgXAHIggAJQgZAHACAFIAAABQABAFAXgCIABAAQAWgBAegHQAfgIAVgJIANgGQAHgEgBgDIAAgBQgBgEgLAAIgJABg");
	this.shape_3.setTransform(47.1,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6C7D5C").ss(0.8,1,1).p("AAKgiIACAfIACAnAgJAiIgCgmAgNgjIACAf");
	this.shape_4.setTransform(14.4,13.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#45493E").ss(0.8,1,1).p("AAAgTQABAAACACQACACAAADQAAACgCACQgCACgBAAQgCAAgCgCQgCgCAAgCQAAgDACgCQACgCACAAgAAHAMQAAADgCACQgCACgDAAQgBAAgCgCQgCgCAAgDQAAgCACgDQACgCABAAQADAAACACQACADAAACg");
	this.shape_5.setTransform(17.8,13.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6C7D5C").ss(1,1,1).p("AHIg2QAAAQgJANIj+BzQj2gOkBgaQgMgCgNgBQgugFgvgFQgTgSgGgRQgGgPAKgPIE2g9IJPARIABAAIgBAAQAEAKAAAIgADiAnQAAADgBACQgDAXgdAXADiAnQAAgOgJgOADZALIoSgfADZALIAAAAIAAAAIABAAIDqhTAnBgcIBvAHIAZAB");
	this.shape_6.setTransform(47,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3BD89").s().p("AjEAIIgBgnIIZAhQgDAXgeAXQj3gOkAgagAi3gOQAAADACACQACACADAAQABAAAAAAQABgBABAAQAAAAABAAQAAgBABAAQACgCAAgDQAAgDgCgCQgBgBAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgDAAgCACQgCACAAADIAAAAgAjdAFIgCgmIACAmIhdgIQgTgSgGgRIAFgCIBvAHIAaACIABAnIgZgDgAi1gJQgCgCAAgDQAAgDACgCQACgCADAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABQACACAAADQAAADgCACQgBAAAAABQgBAAAAAAQgBAAgBABQAAAAgBAAQgDAAgCgCgAipgOIAAAAgAi2glQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAABABQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAABAAAAQgBABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_7.setTransform(35.6,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8FA579").s().p("Ak3AXIgCgcIACAcIgagBIgBgdIABAdIhwgIIgEACQgGgQAKgOIBvAHIAZACIISAeIAAAAQAJAOAAAOIgBAGgAkoAJQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQABAAAAAAQABABABAAQAAAAABgBQAAAAABAAQABAAAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAgADiA1QAAgOgJgOIABAAIDqhSQAEAJAAAJIgEAAIjgBcIgCAAIAAAAg");
	this.shape_8.setTransform(47,11.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BFDF9F").s().p("ADeAsIAAgFIADAAIDfhdIAFAAQAAAQgJANIj+BzQAdgXADgXgADWALIgBAAIoSgfIgZgBIhugHIE2g9IJPARIAAAAIjrBTg");
	this.shape_9.setTransform(47.3,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#2F3629").ss(0.8,1,1).p("AGxhIQAAADAAADQgCAKgFAJQgIAMgKAAQgJAAgHgJQgBgCgBgBQgDgFgBgGACVAqQgCgHAAgHQAAgTAJgLQAIgOAMAAQAMAAAIAOQAJALAAATQAAACAAABADMAmQgCAMgGAKQgIANgMAAQgIAAgGgGQgBAAgBgBQAAgBgBAAQgBgCgBgBIAAgBQgBgBAAAAQgFgIgCgKQAAAAAAAAAmAgDQADgIAAgLQAAgRgIgMQgHgMgLAAQgKAAgIAMQgHAMAAARQAAANAFAJQABACABACQAIAMAKAAQALAAAHgMQACgCABgC");
	this.shape_10.setTransform(48.6,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("ACiBAQAHAGAIgCQgLgIAIgJQAKgLAOgDIAHgCQgDAMgFAKQgJANgLAAQgIAAgHgGgAmoABIgDgCQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAQANgDAMAEIABABIADACIABAAIAAAAIAAAAQABAAABgBQAAAAAAAAQABgBAAAAQAAgBAAAAIACgBIAAAAIAAAAIABAAIAAgBIABAAIAAAAIgCACQgIAMgKAAQgLAAgHgMgAmwgZQAAgRAIgMQAHgMALAAQAKAAAIAMQAHAMAAARQAAALgDAIIAAgBQgEgCgFAAIgLgCQgKgCgKACIgBgBIAAgBIgCAAIAAAAIgBAAIgBABQgBAHADABIAAAAIAAACIAAABQgFgLAAgNgAGJgvIABAAQADAFAEAAQACACADAAQAFACAEgFQgEAAgBgBIgBgBIgBAAQgBgCgBgDQgBgFAFgEQAKgJANgBQgCAKgFAJQgIAMgKAAQgJAAgGgJg");
	this.shape_11.setTransform(48.6,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4D514A").s().p("AChBGIgCgBIgBgBIgDgEIAAAAIgCgEIgGgPIAAgBIABgBIAwgKIAFgBIACACIAAAHIgGACQgPADgJALQgIAJAKAIIgEABQgFAAgFgFgAmKAKIgBAAIgBAAIgDgCIgBgBQgMgGgNADQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAIAAgBIABgCIAAAAQgDAAABgGIAAgBIABAAIABAAIABAAIAAABIABABQAKgCAKACIAMACQAEAAAEACIAAABIgBADIgBAAIgBAAIAAABIgBAAIAAABIAAAAIgCACQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAgAGVgiQgDAAgDgCQgEAAgDgFIgBAAIgCgDQgDgFgBgGQABgEAFgDQAQgIAQgDQAEgBADACIACADIgBAGQgNABgKAJQgFAEABAFQABADACACIAAAAIABABQACABADAAQgDADgDAAIgCAAg");
	this.shape_12.setTransform(48.8,17.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#2F3629").ss(0.8,1,1).p("AFrgQQgDgJAAgLQABgSAHgNQAIgMAKAAQALAAAHAMQAHANgBASQAAADAAACAC1BQQAAgEAAgDAmYAlQgBACgBAC");
	this.shape_13.setTransform(51,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4D514A").s().p("AC1AxQAEAEgEADIAAgHgAmYANIAAACIgBABIgBABIACgEgAFqgmIAAgCQABAFADAFIADADQgIgCABgJgAGZg3IACADIgBADIgBAAIAAgGg");
	this.shape_14.setTransform(51,16);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AiFBYQgFgIgCgJIAGAOQABAEADAEIgDgFgAiOA4QAAgTAJgNQAIgNAMAAQAMAAAIANQAJANAAATIAAAEIgDgDIgEABIgxAKIgBACIgBgOgABdgxQAAgSAIgNQAIgMAKAAQAKAAAHAMQAHANAAASIgBAFIgCgCQgDgCgDAAQgRAEgQAHQgFADgBAFQgDgJABgLg");
	this.shape_15.setTransform(77.7,14.9);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,93.5,25.2);


(lib.CookBooks = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#477DCE").ss(0.2,1,1).p("AASAGIAAAAAgRgFQABAAAAAB");
	this.shape.setTransform(16.3,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#477DCE").ss(1,1,1).p("ABug3QgggIgjgMQgjgMgkgRAg/h0QAKACANAIQAAACAAADIALgDQAAAAABAAAgohlQAHBGAKBCQAFAhAGAgAgmAgQAHABAIACAgmAgQgmgHgTAeQAFAfAEAfAhSB2QATgWAlAFQAFABAFABAhrg/QgBgKgBgJQARgoAcAGAhfA3QgIg6gEg8");
	this.shape_1.setTransform(21.1,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,0,102,0.2)").s().p("AgKCGQgNiMAKiCQAFA8AIA8IAGA8QAAAAAAAAQgBABAAAAQgBAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABIAPBUIABADIgbAAIgBgDg");
	this.shape_2.setTransform(11.6,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66CCFF").s().p("AgYAqIgJg8QATgeAkAHIAMBDQgkgEgSAVQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAg");
	this.shape_3.setTransform(14.9,25.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#56AFDC").s().p("AAAAhIgMhDIAOADIALA/IgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABgBAAIAAABIgJgCg");
	this.shape_4.setTransform(18.4,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#89CAFC").s().p("AgYCjIAAgCIgQhVQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAgBgBQATgVAjAEIASBsIg2ABIAAgBgAA2CjIAAgBIAAgBQgMgzgJg0QgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAgBAAIgDgBIgLg/QgLhEgFhGIAKgCQAVCmAmCQIAAACgAhDhtIgBgTQAQgoAcAGIABAAIAYCWQgkgHgTAcQgIg6gFg8g");
	this.shape_5.setTransform(17,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#589AFC").s().p("AhOA3IAKACIAAADQAJAyAMAyIAAADIgNAAgAgWCgQgmiPgUinIgMADQAHBFAKBFIgPgDIgZiWQAKACANAIIAAAFIALgDIABAAIAAAAIAAAAQAmAQAjANQAhAMAfAIIAAACQAWCHAlB8IAAABIiKABIAAgCg");
	this.shape_6.setTransform(26.3,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#477DCE").s().p("ACCCIIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBIAAgBIAAgBQgmh8gViHIAAgCIABgCQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAABABQAVCHAmB8IAAABIAAADQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAABIgBAAIgBAAIAAAAgAglCIIgBgCIAAgBIgBgDQgMgygJgzIAAgCIABgBQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAIAAAAIAEABQAAABABAAQAAAAAAABQAAAAABAAQAAABAAAAQAJA0AMAzIAAABIABABIgBADIgBABgAh1CIIgBgCIAAgBIgBgDIgPhTQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAIAQBVIAAACIAAABIAAADg");
	this.shape_7.setTransform(25.4,25.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#64516C").ss(0.2,1,1).p("AAAg8IAAABAAAA7IAAAC");
	this.shape_8.setTransform(1,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#2D93A1").ss(1,1,1).p("AhJjJQAJACAKAFIAAAEQAAABAAACIAKgEQADABACABQBcAqBfAYQAAA7ACA4QABAuABAvAiODPQABhVAAhQQgBgogBgjQAAgVgBgUQgDg8gEg4QATgRAbABAhRjLQAEABAEABAhHhTQAIACAJAEQgBg2ABg4AhJhUQgDgBgDgBQgCAAgBgBQgCAAgBAAQgBAAgBgBQgigGgXAUAhHhTQgBgBgBAAAgshGQgBAAgBAAIAAAAIgBAAAgpAhIAAAAQABAAAAABQBgAiBgARAgzhFIAEgBAg0hFIABAAIAAAAAg0hFIgCABQAAA0ABAyAg2hNQgBAFABAEAgshGQBpApBZAVAiNAqQAXgPAlAGQABAAACAAIAAABQABAAABAAQABAAAAAAQABAAACABAhCAkQgDAAgDgBAgsAjIADgCAgtAjIgIAEQAAABAAABAg0AtQABBHAEBIQABAJABAJAg0AtQgBgDAAgBQgBgBgBAAQgFgCgGgCAg1AnQAAgDAAgCAgsAjIgBAAAhRjLQgMgDgLAA");
	this.shape_9.setTransform(8.4,18.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#20AC9E").s().p("AhPAhIgBAAIAAAAIgDAAQACgJAAgJIgBgqQAAgWgCgUIgCgBIAAAAIAAgBIABAAIACABQBoApBZAUIADBeQhhgShfgigAhpAkIgHgCIAAh2IABAAIARAHIAAAIIADAAIgBAAIAAABIgBAVIAAAsQABAUAHAQIgHAAQgBgxgBg1QABA1ABAxIgCAGIgLgDg");
	this.shape_10.setTransform(12.3,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#23C3B3").s().p("AgwgJIgCgpQAXgUAhAGIACABIACAAIADABIAHACIABABIgBAAIAAgBIAAABIAAB2IgCgBIgBAAIgCAAIgBgBIgCAAQgjgGgYAPIgBhLgAAmBAIACgGIAAAFIAAACIgCgBgAAvA7IACAAIgBABIgBgBgAAvA5QgHgQgBgWIAAgqIABgUIAAgBIABgBIAAAAIAAAAIAFgBIAAAAIACABQACAVAAAVIABArQAAAJgCAIIAAACIgCAAIAAgCgAAqguIACAAIACAAIgFABIABgBgAAuguIAAAAg");
	this.shape_11.setTransform(-1,16.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#73C4BB").s().p("AhjAmIAGAAIAMAEIACABIAAAEIAAgEIABgCIgBAGQABBHAEBIIAEASIgCAAIgCgSIACASIgbAAgAg5DDQgEgagCg1IgDhDIgBgNIAAAAQBgAiBhARQACA9AEA5Ii6ADIgDgNgAhIDQIAAAAgAhGhEQABgCgBgXQgCgWADgkQACgkABAAQBcAqBfAYQAAA7ACA4QhZgVhogpgAhRhLIAAglIABhJIgBBJIAAAlIgRgGIAAgBIgBAAIgBh1QAKACAKAFIAAAEIAAADIAAA8QgCAeAGAYgAhyhWIAAAAIABAAIABABIgCgBgAiDjMIAFgCIAJgBIAKAGQgNgDgLAAg");
	this.shape_12.setTransform(11.1,18.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8CEAE0").s().p("AgyAqQAXgPAjAGIADAAIAAABIACAAIABAAIADABIAGABIgGAAIAAgBIAAABIAACqIhEABQABhVAAhQgAAtDOIgDgSQgEhIgBhHIABgGIgCACIAAgCIAIgEIAAABIABgBIADgCIAAAAIABABIAAAAIABANIADBDQACA1AEAaIACANgAAkAiIAHgBIABACIgIAEIAAgFgAAtAhIADAAIgDACIAAgCgAAwAhgAAjhNIAFAEQgGgYABgeIAAg8IAKgEIAFACQgBAAgDAkQgCAkABAWQABAXgBACIgCAAIAAAAIgBAAIgBAAIgDAAIAAABIAAAAIAAAAIgDABIAAgJgAg8i+QATgRAbABIABAAQALAAAKADIAIACIAAB1IgGgCIgDgBIgDAAIgBgBIgBAAIAAAAQgggGgXAUQgDg8gEg4gAAQhUIACAAIAAABIgCgBg");
	this.shape_13.setTransform(-0.6,18.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#64516C").ss(1,1,1).p("AgnhiIgBgYQAIgFANgBQAJgBAKAAQAAAAAAAAQASABAWAFIABAAAgjCCIgEjkAAphhQgIgCgHgBQgFgCgBAAIAAAAQgKgCgJAAQgYgBgQAH");
	this.shape_14.setTransform(-9.3,26.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9A7EA8").s().p("AgXhvQARgGAYABIAGDpIgqABg");
	this.shape_15.setTransform(-10.9,27.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8889A2").s().p("AAFAMIgFgBIAAgBIgSgBIgBgYQARACAVAFIABAAIAAAYIgPgEg");
	this.shape_16.setTransform(-7.2,14.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#A7A8C5").s().p("AgUgGQAHgGANgBQAIgBALABIABgBIABAYQgYgCgRAHg");
	this.shape_17.setTransform(-11.2,14.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7F678A").s().p("AgIhmIARABIAAABIAGABIAPAEIABDiIghAAgAgdiAIADgBIAHgBIAJADQgLgBgIABIAAgBg");
	this.shape_18.setTransform(-8.2,26.2);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-13.4,-2.4,52.5,41.9);


(lib.Bowls = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#62B7B7").ss(1,1,1).p("ABLg6QAqgHArgMQAAADABAEQABA8gvArQgmAkg0AIQgLABgMAAQhAACgxgqQgwgogBg9QAAgCAAgDQB3AcB0gSg");
	this.shape.setTransform(36.9,40.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#ADD1DA").s().p("AAAAOQgngCgNgHQgOgGAAgGIABgFQADgEAmAGQAlAHA1ADQgZAOgjAAIgGAAg");
	this.shape_1.setTransform(28.7,37.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#91C0CC").s().p("AhKAhQgwgogBg9IgBgFQB3AcB0gSQAYAngRAoQgSAqgmAOIgXABIgFABQg+AAgugpgAhvg0IAAAFQAAAGANAIQAOAHAnACQAnABAbgPQgzgFgngHQgYgDgKAAQgHAAgBABg");
	this.shape_2.setTransform(33.3,41.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#80B7C4").s().p("AgKAWQAPgogWgnQApgHArgMIAAAGQABA9guAqQgkAlg0AHQAmgNASgqg");
	this.shape_3.setTransform(46.3,40.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#62B7B7").ss(1,1,1).p("ABJgsQArgBAtgHQgBAEAAADQgHA7gzAlQgrAgg0AAQgKABgLgCQhDgGgqgwQgrguAHg8QAAgDAAgCQBzAqB1gDg");
	this.shape_4.setTransform(37.1,34.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ADD1DA").s().p("AgBARQgngHgNgJQgMgHABgHIABgEQAEgDAlALQAkAJA0ALQgUAIgWAAQgNAAgMgCg");
	this.shape_5.setTransform(28.5,30);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#91C0CC").s().p("AAXBSQhAgGgrgwQgqguAGg8IABgFQByAqB2gDQATAqgXAmQgXAngoAIIgFABIgSgCgAhtg9IgBAFQgBAGAMAKQANAJAnAGQAnAGAcgLQgygMgmgLQgcgIgJAAIgEAAg");
	this.shape_6.setTransform(33.1,34.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#80B7C4").s().p("AgNAVQAVgmgRgqQApgBAsgHIgBAHQgGA8gzAkQgpAgg1AAQAogIAXgng");
	this.shape_7.setTransform(45.5,35.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#62B7B7").ss(1,1,1).p("ABLg6QAqgJAqgQQAAADABADQAGA9grAtQgjAog0ALQgKACgMACQhAAGg0gmQgzgmgGg6QgBgDAAgCQB5ASBygbg");
	this.shape_8.setTransform(37,26.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#ADD1DA").s().p("AgzAHQgOgGgBgFIABgEQADgFAnAEQAlADA1ABQgbAPgoACIgMAAQgcAAgLgFg");
	this.shape_9.setTransform(29,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#91C0CC").s().p("AhEAnQgzgmgGg6IgBgFQB5ASBygbQAbAlgOAqQgOArgmAQIgWAEIgTABQg1AAgsghgAhvgpIgBAEQABAHAOAGQAOAGAngCQAogCAZgQQgzgCgngDIgagBQgPAAgBADg");
	this.shape_10.setTransform(33.6,27.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#80B7C4").s().p("AgJAXQAMgqgZglQAogJAqgQIABAGQAGA9grAtQghAog0ALQAmgQAOgrg");
	this.shape_11.setTransform(46.9,26.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#62B7B7").ss(1,1,1).p("ABJgsQArgBAtgHQgBAEAAADQgHA7gzAlQgrAgg0AAQgKABgLgCQhDgGgqgwQgrguAHg8QAAgDAAgCQBzAqB1gDg");
	this.shape_12.setTransform(37.1,19);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#ADD1DA").s().p("AgBAQQgngFgNgKQgMgHABgGIABgFQAEgEAlALQAkAKA0AMQgUAHgWAAQgNAAgMgDg");
	this.shape_13.setTransform(28.5,14.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#91C0CC").s().p("AAXBSQhAgGgrgwQgqguAGg8IABgFQByAqB2gDQATAqgXAmQgXAngoAIIgFABIgSgCgAhtg9IgBAFQgBAGAMAKQANAJAnAGQAnAGAcgLQgygMgmgLQgcgIgJAAIgEAAg");
	this.shape_14.setTransform(33.1,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#80B7C4").s().p("AgNAUQAVglgRgqQApgBAsgHIgBAHQgGA8gzAkQgpAgg1AAQAogIAXgog");
	this.shape_15.setTransform(45.5,20.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#62B7B7").ss(1,1,1).p("ABLg6QArgFArgMQAAADAAAEQAAA9gwAoQgnAkg0AGQgLABgLAAQhCAAgvgsQgvgoAAg9QAAgDAAgCQB3AfB0gPg");
	this.shape_16.setTransform(37.2,13.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#ADD1DA").s().p("AAAAPQgngDgOgIQgMgFAAgHIAAgEQADgFAnAIQAlAHA1AFQgaAMghAAIgIAAg");
	this.shape_17.setTransform(28.9,9.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#91C0CC").s().p("AhMAgQgvgpAAg9IAAgEQB2AeB1gOQAXAngTAoQgTApgmAMIgXACQhBgBgvgrgAhvg1IAAAEQAAAHANAHQANAJAnACQAoACAbgOQgzgGgngIQgYgFgKAAQgGAAgCACg");
	this.shape_18.setTransform(33.5,13.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#80B7C4").s().p("AgLAWQARgogVgnQApgGArgMIAAAHQAAA+gwAoQglAkg0AFQAngLASgqg");
	this.shape_19.setTransform(46.4,13.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#62B7B7").ss(1,1,1).p("ABLg6QArgFArgMQAAADAAAEQAAA9gwAoQgnAkg0AGQgLABgLAAQhCAAgvgsQgvgoAAg9QAAgDAAgCQB3AfB0gPg");
	this.shape_20.setTransform(37.2,7.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ADD1DA").s().p("AAAAPQgngDgOgIQgMgFAAgHIAAgEQADgFAnAIQAlAHA1AFQgaAMghAAIgIAAg");
	this.shape_21.setTransform(28.9,3.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#91C0CC").s().p("AhMAgQgvgpAAg9IAAgEQB2AeB1gPQAXAngTAoQgTArgmALIgXACQhBAAgvgsgAhvg1IAAAEQAAAHANAHQANAJAnACQAoACAbgOQgzgHgngHQgYgFgKAAQgGAAgCACg");
	this.shape_22.setTransform(33.5,7.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#80B7C4").s().p("AgLAWQARgogVgnQApgFArgNIAAAIQAAA8gwApQglAkg0AGQAngMASgqg");
	this.shape_23.setTransform(46.4,7.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#62B7B7").ss(1,1,1).p("AASA2QgIABgIAAQguABgjgeQgigcgBgrQAAgCAAgBQBVATBSgMQAfgFAfgJQAAACAAADQABArgiAeQgbAaglAFg");
	this.shape_24.setTransform(11.5,40.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#80B7C4").s().p("AgHAQQALgdgQgbQAdgFAfgJIAAAFQABArgiAeQgZAaglAFQAbgKANgdg");
	this.shape_25.setTransform(18.2,40.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ADD1DA").s().p("AAAAKQgbgBgKgGQgKgDAAgFIACgDQACgDAcAFQAZAEAlACQgSAKgZAAIgEAAg");
	this.shape_26.setTransform(5.7,38.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#91C0CC").s().p("Ag1AXQgigcgBgrIAAgDQBVATBSgMQARAbgMAdQgNAdgbAKQgIABgJAAIgDAAQgrAAgigdgAhPgkIgBADQAAAFAKAFQAKAFAcABQAcABASgKQgjgEgcgFQgQgCgIAAQgFAAgBABg");
	this.shape_27.setTransform(9,41.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#62B7B7").ss(1,1,1).p("AAFA7QgGABgIgBQgwgFgfgiQgeggAFgrQAAgCAAgCQBSAeBTgCQAfAAAggFQgBACAAADQgEApglAbQgfAWglAAg");
	this.shape_28.setTransform(11.7,36.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#80B7C4").s().p("AgIAPQANgbgLgeQAdAAAggFIgBAFQgEAqgmAaQgcAWglAAQAcgFARgcg");
	this.shape_29.setTransform(17.7,37.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#ADD1DA").s().p("AAAAMQgcgFgJgGQgJgFABgFIAAgDQADgDAbAJQAZAGAlAIQgOAFgRAAIgQgBg");
	this.shape_30.setTransform(5.6,33.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#91C0CC").s().p("AARA7QgugFgfgiQgeggAFgrIAAgEQBSAeBTgCQAOAegQAbQgRAcgcAFIgFABIgLgBgAhOgrIAAADQgBAFAJAHQAJAGAcAFQAcAEATgIQgjgIgbgIQgUgGgGAAIgEAAg");
	this.shape_31.setTransform(8.9,36.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#62B7B7").ss(1,1,1).p("AAaA5QAlgIAZgcQAegggEgrQAAgDAAgCQgeALgeAHAAaA5QgIACgIABQgtAFglgcQglgbgEgpQAAgCAAgCQBWANBRgT");
	this.shape_32.setTransform(11.6,30.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ADD1DA").s().p("AgkAFQgKgEAAgDIAAgEQACgDAcACQAaADAlABQgTAKgcABIgLABQgRAAgIgEg");
	this.shape_33.setTransform(5.9,29);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#80B7C4").s().p("AgGAQQAIgdgRgaQAcgHAegMIAAAFQAEArgeAgQgXAcglAJQAbgMAKgfg");
	this.shape_34.setTransform(18.7,30.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#91C0CC").s().p("AgwAbQglgbgEgpIAAgDQBWANBRgTQATAagKAdQgKAfgbAMIgQACIgOABQglAAgfgYgAhPgeIAAAEQAAAFAKAEQAKAFAcgCQAcgBARgMQgjgBgcgDIgTAAQgKAAgBABg");
	this.shape_35.setTransform(9.2,31.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#62B7B7").ss(1,1,1).p("AA0gfQAfAAAggFQgBACAAADQgEApglAbQgfAWglAAQgGABgIgBQgwgFgfgiQgeggAFgrQAAgCAAgCQBSAeBTgCg");
	this.shape_36.setTransform(11.7,25.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#ADD1DA").s().p("AAAAMQgcgFgJgGQgJgFABgFIAAgDQADgDAbAJQAZAGAlAIQgOAFgRAAIgQgBg");
	this.shape_37.setTransform(5.6,22.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#91C0CC").s().p("AARA7QgugFgfgiQgeggAFgrIAAgEQBSAeBTgCQAOAegQAbQgRAcgcAFIgFABIgLgBgAhOgrIAAADQgBAFAJAHQAJAGAcAFQAcAEATgIQgjgIgbgIQgTgGgHAAIgEAAg");
	this.shape_38.setTransform(8.9,25.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#80B7C4").s().p("AgIAPQANgbgLgeQAdAAAggFIgBAFQgEAqgmAaQgcAWglAAQAcgFARgcg");
	this.shape_39.setTransform(17.7,26.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#62B7B7").ss(1,1,1).p("AA1gpQAfgEAfgIQAAACAAADQAAArgiAdQgcAZglAEQgIABgIAAQguAAgigfQgigdAAgrQAAgCAAgCQBVAWBSgKg");
	this.shape_40.setTransform(11.6,21.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#ADD1DA").s().p("AAAAKQgbgCgKgFQgKgEAAgFIACgDQACgDAcAFQAZAGAlADQgRAJgYAAIgGgBg");
	this.shape_41.setTransform(5.7,18.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#91C0CC").s().p("Ag2AXQgigdAAgrIAAgEQBVAWBSgKQARAcgNAbQgOAegbAJIgQABQguAAgigfgAhPgmIgBADQAAAGAKAFQAJAFAdACQAcACASgKQgjgEgcgHQgRgDgHAAQgFAAgBABg");
	this.shape_42.setTransform(9,21.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#80B7C4").s().p("AgHAPQALgbgPgdQAdgDAfgJIAAAFQAAAsgiAcQgaAaglAEQAcgJANgeg");
	this.shape_43.setTransform(18.2,21.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#62B7B7").ss(1,1,1).p("AA1gpQAfgEAfgIQAAACAAADQAAArgiAdQgcAZglAEQgIABgIAAQguAAgigfQgigdAAgrQAAgCAAgCQBVAWBSgKg");
	this.shape_44.setTransform(11.6,17.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#ADD1DA").s().p("AAAAKQgbgCgKgFQgKgEAAgFIACgDQACgDAcAFQAZAGAlADQgRAJgYAAIgGgBg");
	this.shape_45.setTransform(5.7,14.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#91C0CC").s().p("Ag2AXQgigdAAgsIAAgDQBVAWBSgLQARAdgNAcQgOAdgbAJIgQABQguAAgigfgAhPglIgBACQAAAFAKAGQAJAFAdACQAcACASgKQgjgFgcgFQgRgEgHAAQgFAAgBACg");
	this.shape_46.setTransform(9,17.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#80B7C4").s().p("AgHAPQALgbgPgdQAdgDAfgJIAAAFQAAAsgiAcQgaAaglAEQAcgJANgeg");
	this.shape_47.setTransform(18.2,17.1);

	this.addChild(this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,53.3,48.8);


(lib.BakingPans = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#949494").ss(0.7,1,1).p("Al6g2IgRgCIgBgOIFnAUQAMABANABQA9AABCgOIEYg3IACANIgUAGIgEAXIgKA8QgUA8hMAOIi1AuQg3AOgwgBQgEgBgFABQgMgBgNgCIjbgUQgMAAgKgCQg+gLgOg8QgIgYgCgjQAAgJAAgIgAAXgeQAxgCA4gMID5g2AAaAIQgBgRAAgCQAAgJgCgKQgXAAgVgCIllgWAAaAIQAEBqgvAE");
	this.shape.setTransform(39.7,20.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C4C4C4").s().p("ACUBOIgZgCIjZgUQgMgBgKgCQg+gLgOg6QgIgagCgjQFMA0BIgFQAEBogxAEIgJAAg");
	this.shape_1.setTransform(22.1,24.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B7B7B7").s().p("AjKgOIAAgRIFkAXQAVABAZAAIABASIABAUIgNABQhVAAkygug");
	this.shape_2.setTransform(22.1,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AisA1IgBgUIgCgUQAwgBA4gMID3g0IgDAWQlKBTgPAAIAAAAg");
	this.shape_3.setTransform(59.8,16.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEAEAE").s().p("AgUApIlmgWIgRgCIgBgOIFoAUIAYACQA9AABCgOIEYg1IABANIgTAGIj5A0Qg4AMgwACQgYAAgUgCg");
	this.shape_4.setTransform(39.7,13.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D0D0D0").s().p("AjDBhQAxgEgEhoQAKABFQhWIgKA8QgVA8hMAOIiyAuQgyANguAAIgKAAgACvg9QgFAJgqAgQgoAehlAfQhlAegCACQgCACBvgYQBtgZAbgUQAcgSAIgOQAKgOADgPQACgKgBAAIgEAEg");
	this.shape_5.setTransform(57.5,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E6").s().p("AiTBFQACgCBlgeQBkgfApgeQAqggAFgJQAGgKgDAQQgEAPgJAOQgJAOgbASQgbAUhuAZQhmAXgGAAIAAgBg");
	this.shape_6.setTransform(60.6,23.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#949494").ss(0.7,1,1).p("AFZhTIgDAUIgIA3QgUA2hGAOIikApQgyANgrgBQgEAAgFAAQgLgBgLgCIjJgSQgLAAgJgCQg4gJgNg4QgHgYgCgdQAAgIAAgIIgPgBIgEgVIFZguIF7ALIABAMIgSAGIjjAwQgzALgsACQABAJAAAJQAAABABAQAgQhkIABgBIFAAJIjGApQg9ANg3gBQgLgBgLAAIkWgWgAlXgsIFGAUQASACAWAAAgNBxQAqgDgEhh");
	this.shape_7.setTransform(39.9,11.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4C4C4").s().p("ACHBHQgLgBgLgCIjHgSIgUgCQg4gJgNg2QgHgYgCgfQEvAvBBgEQAEBfgsADIgEAAIgFAAg");
	this.shape_8.setTransform(24,15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8C8C8C").s().p("AB/AdIkTgWIEigkIAHA7IgWgBg");
	this.shape_9.setTransform(23.9,4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#808080").s().p("AiZAfIgHg8IABgBIFAAKIjEAnQg5AMg1AAIgIAAg");
	this.shape_10.setTransform(54.3,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B7B7B7").s().p("Ai3gMIAAgQIFDAUQAVACAWAAIABAQIABATIgMAAQhOAAkWgpg");
	this.shape_11.setTransform(24,9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E6E6E6").s().p("AiGA/QACgBBcgcQBbgcAmgbQAlgdAGgJQAFgJgDAOQgDAPgJAMQgIANgZAQQgZAShjAXQhfAVgEAAIAAgBg");
	this.shape_12.setTransform(59.2,14.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#CCCCCC").s().p("AieAwIgBgTIgBgSQAsgBA0gKIDhgwIgEAUQkuBNgMAAIgBgBg");
	this.shape_13.setTransform(58.4,7.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D0D0D0").s().p("AixBYQAsgDgEhfQAJABEyhPIgIA4QgUA2hGANIiiAqQgtAMgpAAIgJgBgACgg4QgFAJgmAeQglAbhbAcQhdAbgCACQgCABBmgWQBjgWAZgSQAYgRAJgMQAIgNAEgOQACgJgCAAIgDADg");
	this.shape_14.setTransform(56.3,13.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#AEAEAE").s().p("AgRArIlGgVIgPgBIgEgVIFZgsIF7ALIABAMIgSAGIjjAuQgzAMgsABIgIABQgQAAgQgCgAgQggIklAkIEWAWIAWACQA3ABA9gNIDGgnIlAgKg");
	this.shape_15.setTransform(39.9,4.5);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.4,32.5);


(lib.Blocker = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().dr(-450,-300,900,600);
	this.shape.setTransform(450,300);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,900,600);


(lib.Counter_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Counter();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,912,251.1);


(lib.Background = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#958B96").ss(1,1,1).p("AlLi2QgOgCgPgCIAAgZQAOABAPACQBnALBmAEQDqAHDhgkQANgCAPgCIAAAXQgOADgOADQgBA2AAAGQgECYhWBxQgjAugpAeQhNAWhRABQhKABhQgRQgqgcgmgsQgVgZgQgaQg5hbgJh2QAAgFgCg4gAFNjFQjjAljogHQhmgDhngM");
	this.shape.setTransform(1495.2,179.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A9A7A3").s().p("ACCiGQh6AAiFgUQhkgQhqgaQBnALBmAEQDoAHDigmIAAA9QgECXhXBxQgiAvgpAdQhNAWhSACQCHhHgMkUg");
	this.shape_1.setTransform(1495.2,180.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B1AFAB").s().p("AguC8QgqgbgmgtQgUgYgQgbQg5hagJh3IgCg8QBqAaBkAQQCFAUB6AAQAMEUiHBHIgEAAQhKAAhMgRgAiagpQgSAAAAATQAAAFADAGQAGAKAMABQARgBAAgVQABgTgTAAIgCAAgAipiuQgoABABAqIANAhQASAhAdAAQAdgCAAgsQAAg/gwAAIgCAAg");
	this.shape_2.setTransform(1485.1,181.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C5C4C2").s().p("AkNBxQgDgGAAgFQgBgTATAAQAVgBgCAUQABAVgRABQgMgBgGgKgAkoAaIgMgfQgBgqAogBQAygBgBA+QABAsgdACQgeAAgSghgAh+g/QhmgEhngLIgdgEIAAgaIAdADQBnALBmAEQDqAIDhgkIAcgFIAAAYIgcAFQi/AgjCAAIhKgBg");
	this.shape_3.setTransform(1495.2,168.8);

	this.instance = new lib.KitchenTour_vBG();

	this.addChild(this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1950,600);


(lib.ItemPopup_icon = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0)").s().dr(-120,-120,240,240);
	this.shape.setTransform(120,120);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,240,240);


(lib.ItemPopup_base = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3278BC").s().rr(-297.5,-22.5,595,45,9);
	this.shape.setTransform(484,29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().rr(-297.5,-22.5,595,45,9);
	this.shape_1.setTransform(484,31);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0)").s().rr(-0.5,-131,1,262,0.5);
	this.shape_2.setTransform(0.5,131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#D1E1F1"],[0,1],3.2,136,3.2,-77.9).s("#172628").ss(2,1,1).rr(-303.5,-131,607,262,13);
	this.shape_3.setTransform(483.5,131);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,787,262);


(lib.CloseButton_up_base = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("An7CsQhGAAgzgzQgzgyABhHQgBhGAzgyQAzgzBGAAIP3AAQBHAAAyAzQAzAyAABGQAABHgzAyQgzAzhGAAgApthxQgwAvAABCQAABCAwAwQAvAwBDAAIP3AAQBDAAAvgwQAwgwAAhCQAAhCgwgvQgvgwhDAAIv3AAQhDAAgvAwg");
	this.shape.setTransform(71.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F4A1B").s().p("An7DKQhTAAg8g7Qg7g8AAhTQAAhSA7g8QA8g7BTAAIP3AAQBTAAA8A7QA7A8AABSQAABTg7A8Qg8A7hTAAgAp7iAQg2A2AABKQAABLA2A2QA1A1BLAAIP3AAQBLAAA1g1QA2g2AAhLQAAhKg2g2Qg1g1hLAAIv3AAQhLAAg1A1g");
	this.shape_1.setTransform(71.1,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9B63").s().p("An7C2QhLAAg1g1Qg2g2AAhLQAAhKA2g2QA1g1BLAAIP3AAQBLAAA1A1QA2A2AABKQAABLg2A2Qg1A1hLAAgAp0h4QgzAyABBGQgBBHAzAyQAzAzBGAAIP3AAQBGAAAzgzQAzgyAAhHQAAhGgzgyQgygzhHAAIv3AAQhGAAgzAzg");
	this.shape_2.setTransform(71.1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F19C74").s().p("AJpBaQgfgNgSgHQgigMgaAAIv3AAQgaAAgiAMQgSAHgeANQgYAJgKgFQgMgGABgeQAAg+AtgtQAtgtA/AAIP3AAQBAAAAtAtQAsAtABA+QAAAegMAGQgEABgGAAQgJAAgOgFg");
	this.shape_3.setTransform(71.1,14.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EF8250").s().p("An7CiQhDAAgvgwQgwgwAAhCQAAhCAwgvQAvgwBDAAIP3AAQBDAAAvAwQAwAvAABCQAABCgwAwQgvAwhDAAgAH8AAQAaAAAiALQASAGAeAOQAYAIAKgFQAMgGgBgcQAAg/gtguQgsgthAAAIv3AAQg/AAgtAtQgtAuAAA/QgBAcAMAGQAKAFAYgIQAegOASgGQAigLAaAAg");
	this.shape_4.setTransform(71.1,20.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,40.6);


(lib.CloseButton_over_base = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BC2C8").s().p("An6C3QhMgBg2g1Qg1g2AAhLQAAhKA1g2QA2g1BMgBIP1AAQBMABA2A1QA1A2AABKQAABLg1A2Qg2A1hMABgAp0h4QgzAyAABGQAABHAzAyQAyAyBIABIP1AAQBIgBAygyQAzgyAAhHQAAhGgzgyQgygzhIAAIv1AAQhIAAgyAzg");
	this.shape.setTransform(71.1,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A6072").s().p("An6DKQhUAAg8g7Qg7g7AAhUQAAhSA7g8QA8g7BUgBIP1AAQBUABA8A7QA7A8AABSQAABUg7A7Qg8A7hUAAgAp8iAQg1A2AABKQAABLA1A2QA2A1BMABIP1AAQBMgBA2g1QA1g2AAhLQAAhKg1g2Qg2g1hMgBIv1AAQhMABg2A1g");
	this.shape_1.setTransform(71.1,20.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("An6CsQhIgBgygyQgzgyAAhHQAAhGAzgyQAygzBIAAIP1AAQBIAAAyAzQAzAyAABGQAABHgzAyQgyAyhIABgApthxQgwAwAABBQAABCAwAwQAwAvBDABIP1AAQBDgBAwgvQAwgwAAhCQAAhBgwgwQgwgvhDAAIv1AAQhDAAgwAvg");
	this.shape_2.setTransform(71.1,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7EC9DA").s().p("AJoBaQgegNgTgHQghgMgbAAIv1AAQgbAAghAMIgxAUQgYAJgKgFQgMgHAAgdQAAg+AugtQAtgtBAAAIP1AAQBAAAAtAtQAuAtAAA+QAAAdgMAHQgEABgFAAQgKAAgPgFg");
	this.shape_3.setTransform(71.1,14.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#59ABBD").s().p("An6CiQhDgBgwgvQgwgwAAhCQAAhBAwgwQAwgvBDAAIP1AAQBDAAAwAvQAwAwAABBQAABCgwAwQgwAvhDABgAH7AAQAbAAAhALQATAHAeAMQAYAKAKgGQAMgGAAgcQAAg/guguQgtgthAAAIv1AAQhAAAgtAtQguAuAAA/QAAAcAMAGQAKAGAYgKIAxgTQAhgLAbAAg");
	this.shape_4.setTransform(71.1,20.3);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.2,40.6);


(lib.PROPELLORSPIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54565E").s().p("AG7NQQjatdAAg8IACgTIAOAAQAnAADmPNQDPNvBKGLIAAAOQiDnNjZtcgAp8KyQCljECmjDQBoh5Bih+QkeJ1oFG7QBCi9DMj1gALXFpIlJm/QCCBEBlBpQF1GHEGHhQAVAnANAqgAxyoxQiziCjggMIgHhdIAIAvQEeiFFCDPQCXBiCuA+IABAtQhfAfhaAAQi1AAimh6gAL+pOQDSi7EtgZQCDgMCEAEIAJAYQkyCJlJBBQg/ALg/AIgAlI3lQi/ouAAhaIADgLQB/E3CBGFQDhKkAhBfIgFAGQh6jtjHpFgAJQ2VQCdkDBujKQg0C7hhCqQitEvi1EoQBXj6CVj1g");
	this.shape.setTransform(693,-65.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54565E").s().p("ABIOBIgYo2ICjY1gANrbaQiPj1h3kEQhujxhxjuQh/kNgSj6IKSYJQgQgUgMgWgAjbAPQgHD3iVETQiHD6hyEFIggBLQB6pME7oIgAyYOPQCkj6DHjFIAJAYQg7BehABbQh9CviMCPQgJgqAZgmgATnLKQjlirjhivQjQihixjAIAJglIALAUIB3AKQBgBMBeBNQGVFMFjFrQiGg3h0hXgA3ghCQADkDFMBkQEhBYDoiKQAEAEAEACQBLAbANBIQk8CClPAAQiUAAiZgagAmSxTQixmMggmgIGBTKQhUjRhcjNgAK92NQgPESjDDmQhZBqhVBvQBImSE4k/g");
	this.shape_1.setTransform(707,-78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54565E").s().p("AjeL8IBNoZQAGEEgiEBIiPRFgAEGWyQh/oOgiobIApCoICJPQQgHgogKgngA1ADbQgpg4AfhEQCUAKCQgZQEZgwDsiSQALCWixAwQiGAjh4A4QiAA8h9AAQg/AAg/gQgAnZmnQidititibQlDkkhmlpQCYCeCaCdQDEDJDJDFQDVDRAID8QhShihXhfgAJakjIgFgqQFzhqFkiUIAsAvQhWB8iOA7Qi8BOjGAAQhLAAhNgMgAJhzfQCUhgCGh4QgPEcjnDMQjICyjoCFQA3lrFVjcgAk50NQhXkOgUkRIDMMuQg1iHgsiIg");
	this.shape_2.setTransform(713.7,-76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(2));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#54565E").s().p("ABdY3QkqgSkKiOQm8juimnSQCqC1C6ClQDUC8EJBfQHGCjGijmIGMiaQCWg5BfiCQB6ioBMjDQBSjSgBjgQgBqEmsncIADgCQCXgxBKCRQEQHdgkIiQgVFCiMEhQioFck7DiQjWCakABEQiUAmiZAAQgjAAgkgCgA3YI2QitohCtolQBjk5D+jkQDdjGEDiNQERiUEtgfQHqgvEEF2QgLALgPAKQgXAOgdgGIgGgUQjBhvjggnQkXgvkcBDQhIAWhIAYQq6DsjnMGQjaLaIHJMQjridhWkOgALRM0QBXgJA5hDQBOhdA1huQCplhgUmKQgQlEinkXIACgdIABASQCKDXAiEAQAjEIgHEIQgIEWiNDoQhjCji3A7gAmBInQkgltgjnPQghm0GDhSQCcgjChgcIAIgTQA5AIA4AXQEbBwBqEVQiDhiiShOQiOhNicAJQiGAHiHAgQjQAzgfC8QhhJWIBFhQEaDEDhj1QgRAvgUAtQhCCWieASQgdADgaAAQjnAAiXi/gANYBCQCbkCiQkIQi1lNk0jWQjLiOj4ABIgIg0QDEimEhCwQD2CWCJECQCED3AlESQAZC4hwCRg");
	this.shape_3.setTransform(706.2,-83.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#54565E").s().p("AgTZKQjmgWjbhMQnoiqklmsQiykEhRkwQE5IUIbEhQGvDnHuAiQBDAIBBgMQBagQBQgnQBDggBBgeIAFggQCLhGCFhQQDyiQB7j7QB/kAAskbQArkVhrkJQhnkAhHkCQDUFaAkGtQBcQot4HfQkgCclAAAQhHAAhGgHgAmhMDQj5iyg6kkIATADQBsCaCnB1QDqClEdgEQEbgEDCjNQDHjUAmkfQAmkeiQkGQiKj8kMgoQAdhOBfAJQD1AUBmD2QEXKfm3IlQjKD9k/AmQgyAGgvAAQjZAAi4iDgAQLnBQhXkCi6jPQg/hHgshOQEdgeB1FQQBcEHAMEXQAMEMhrD5QgpBggvBcQDdnHiknkgAmPBFQh+kOC3jtIA4hSQhRDQgvDVQBhCMCUBLQDjBzBTkMQBHjnhujdQC5DVhTE1QgpCYiFBHQhSAthJAAQimAAhsjogAwvD5Qg0gLgSgwQhWjoAUj+QAWkoCAkMQB1jyELgbIBABIQhLBBhRA5QjhCehxD6QgrBhgLBrQgSCwBICeQA4B6AEB2IgHAAQgLAAgKgCgAuMlcIALgiQgTEUBAEMIgZAEQhwj6BRkIgA07wwQBKiECEgwQCCgvBzhTQCbhwC7g7QKbjUFKHyQipgkijhEQkIhtkYBDQteCqj3NxQALl7C4lLg");
	this.shape_4.setTransform(710.5,-73.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#54565E").s().p("AnuZmQjDhbiRijQi3jMiCj0QjbmYgznNQg7ofEmnZQCAjODSh8IAjAPIAOAoQjODWitDwQiZDVhAD9Qg+D3BBDwQBLEUCRD2QCSD1C4DaQCpDJDgCEQEUCkEXiIQBgguBVhAIAfAOQhHBghmA+QiVBaiqAMQgfADgfAAQiIAAh+g6gAqRRuQiYjihfkAQhgkAgCkLQAoCHA3DMQA7DeCSCxQDyEjEkClQhKAXhEAAQjOAAiNjUgAQnQ0QBHgBAwhGQCYjfAtkNQArj+gkkAQA9EIgdENQgfEfisDjQgvBAhBAsgAlQO+QjkixiBkFQiCkHAKkcQAJkWCijfQC5j+EiAkIAKAkQkQAwinDpQiEC4ghDhQgoELClDkQCpDpD1CXQDLB9DnhHQgMAegXATQh3Bnh+AAQiCAAiKhrgAJuPRQCNhRByh3QC3jCBmj0QCVlhinlzQjXnbnYjrIAIgRIAGABQEKgIDACUQDOE8BYFyQA4DvgpDsQhWHumVERQgPAUgWAHQgUAIgTAAQgaAAgXgPgAjoDXQDkBsDchbQCbhBAbinQAqj/jcjHQGNCjjAHmQhPDIjfAnQgqAHgmAAQjIAAhLjigAPfxkQk4lCmpicQhEgYgjgZQEJhpEHCSQD9CMCjDzQCcDpBmEFQBWDYg1DfQg7nmlQlYgAm1z0QFDg3FDAnIBlCAIj3A4QjLhtjlA6QjTA1isCFQA1kCEGgtg");
	this.shape_5.setTransform(696.2,-83.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).wait(2));

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B0B6C4").s().p("AnnZFQj9iJi4i7QBHBghZAVQiiAnheimQhYidhEinQimmUhMl8IgcAeQgiACgGgbQibqkIZojQElkrGEidQCWg9CagvQCZgvCSBVQgYAOgcgGQijgfiABZQDIgVDIALQEUAKEQAhQFaAmAyEGIgpA4QEuEXDYFcQD1GJhDHAQA5AygVBKQhTEtjgDVQgcCiidBLQo0EQpnAdQihADiABSQg1Aig5AAQg2AAg5gggAgwVOIiigzIjvgFQBEARBEAOQCDAZCGAAgAM7RuIAGATQA/gWA6ghQg2ALhJAZgAjBP8QJBAyI2iEQgqgGgkgYQgogcgfgmQjgCTjih/IgbgRQk1CCkxiEgATOLbQgjAegdAlQhLBfhwAoIDJgqICLizgAvPN4Qh5hdhUh7QjHkhEWBuIhcjBIgBgCQi8BEhHjqQAZHzHFEBgAKBKyQDXhlAdjsgAodpUQiCD5gnEWQgfDbCmCaQDRDDEOBYQEjBfDajCQDujUiajwQgvBfhLBKQhHBHhcArQi1BUjFgaQmvg2gsmXQgjlIEAjYgAQzH5IALgTQBMiYgHirQgPCxhBClgAVoGgIBrhCIAGgvQAfjXhki1IhNh1QAvFKgOEogAFTngQAwCBBYBjQCxDJBdD6IAKAdQBfhTAzhyQkJmXkamLQhqiViNh2QCfAuCCBpIAPgFQg2hLgJhaQgBgEABgFIAugbQlHhvkuCdQgvAZguAdIBiCEQACAYgLAUQgPAfgkAKQgTAGgSABIgUAAIBiA9IB/gTQg3BlgEB0Igvg0IiEBlICygRQgcE7BqEWQCbhTArjFQAch9gRh/ICiAmIARgZQhGiAiLggIhYihQEHAHBZDugAB4C5QBGgWBIhFQA+g7Ahg6QhCg3hAAAQAACThrB0gA5bi0QgWBggHBgQgFBKAUA7IAygSQgDgrAHgrQAwkQBpkEQBlj7CWjiQlRFDhrHRgAiwB7IgNgHQjOiLB8jSIAOgTQkyDsGDCLIAAAAgASFgDQgEg+gjhuQAVBWASBWIAAAAgA0WkdIAUABIANiegAJmsEIgggeIAKAaIAWAEgAINwDQAMghg8gEgAjhz1IAmAiID0gzg");
	this.shape_6.setTransform(711.5,-87.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B0B6C4").s().p("AoLW1QjrheiljAQhwiDhniEQi6jvg2k1QgukDgNkBQgMj4BejdQBAiXBgiEQCYjRDMicQFukZG5BbIBrhaQJNgdGIH1QCVC/BXDfQAxB6AhCAQBrGXhFGVQAZAdgEAmQgJBQgxBBQizDtjlC7IE1heIAgARQAJAWgJAUQhQCnjHAqQgMAhgaAZQixCmj4AtQjuAtjxAWQhGAHhEAAQjzAAjlhbgAvrNfIgNAjIADAFQCfDvD+CFQCvBbDEAiQnfj/l2mGgAjUTYQB3A/B/AeQEeBFEQh9QkSAXkQgZQh8gKh6gmgAP7RdQBugXBOg3gAiiOZICnBgIHDhbIgUgBQiegaidAAQiNAAiOAWgAKDMbQBeASAkBZQCMgwBghjIADgpIhOgHQhDAnhIAWQhhAegyhJIg6BBIALAAQAVAAAVAFgAI9lBQAVA+ABBBQAIIFnKD6QD2AEDoBIQA5iiBIicQhzCkjEBNQgCg8Alg3QCwkEBFkwQBAkakXhigARzJNIgEAVIAQgegApTD3QAlDkChB+ICfgSQjxiDh9j3QAGAVADAVgANQIBQBBgyAwhSIgOg8QgrBVg4BrgAtsicQAjDxBeDhQggnpB6nYQkKCkAvFLgANTCFIAig9IgJgZQgLAtgOApgAQcBVIAGATIAEgxIgKAegAjJjHQAPCLB5AhIgfA0IC0ACQAggbAdggQAcgigLgrQgKgrgngPIhiApQB7kkg+k5QBBAJBBAMQHdBcD0GiQhskVhZkLQAMgJAUAAQAZAAAOASIAoAwIgQhkQgngIgggVQlKjbmBBWQBGAJBGARQAcAIASAXQAMAagLAaQgVAtgwAMQg3AOg0gZQgKgRgPgOQgmgjg0gFQgrgCggAcQlaAMh7FDIATgWQCii2DzgVIABAEIhNGzIA1gZQABA7AGA5gARrlgIAEhYQgwi3hsh8gAy/qRQAJgDAJgFQBqg4AQh/gAOgubIACAAIgRgIIAPAIgAtdviIBUgMIBLhugAjAzQQkLAOi4DHIBbgRQFqh4F9AcQiqhpjGAAIgPABgACV19IgXATIJnELQgfgWgagdQjNjrk2AAIgUAAg");
	this.shape_7.setTransform(713.4,-73.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C4C4C4").s().p("AmfMrQAIADgFADgAGesvIACgBIgBAEg");
	this.shape_8.setTransform(653.3,-64.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B0B6C4").s().p("AAhXsQi6g8jBgFQnYgNlFlHQi9i/hVj/QhAjBgajLQgWioAXilQBUpPG6m+QD7j+FFiRQDdhjCSB/QCGgGCHgOQHHgyEoGIICghUQATgBAOAJQDXB2A7EFQCmLhjrLYQAPAwAFAyQAYEJi3C6QkTEXmTgTQhxBeiQARQgrAGgrAAQheAAhegcgACHUsIgkgbQkRhBi+g6QjdhDjMiXQgvgjgrglQFXGNKfArIAAAAgALzT4QAogJAogLQEihNBgkZQjaDPj4CrgAmdOjQgPgHgNgIQhcg7gEh0Il8k+IhJA6QDfEzFiCPIAAAAgAGnNJQAYgCAXgGQDHg0Bci/QjhDnlDgkgAHNHgQhCBXhiAxQENgRCWjpQBrilhSi0Qh3DzihDYgAm8IHQiSiihjjEQgZgygbgwQgRB4AuBvQBLC1DBAsIAAAAgAAqHTQFLg+BvlHQA1iXhbiKQhiiWizgcQACh0gyhqIgQgfQDDAgC1BSQiGlxmDB8QiTAuhtBtIDFgdQiEFfC4E+QAwBWBHhuQBkifgDi9QFACHhkE1QhfEok/AEQkMAEjliLQDjESFRhCgAOAglIAfBLQAkgDgIg0IgDgWgAoehPIALgJIAJhQgAlpjlQgSA6ASA7IB2hcIg8hEQguABgMAqgAInswQC/ENAtFEQBhAIBTg+QgghSgVhWQhLk3j+hGgAUjkOQAehTgghpIhOgCgAxpneIB9AKIAYgSQBphSBnhXQFCkNFljYIlSgFQlKAfi4EcQAQALAMAQQAJALAAANQADA4gjAlIgQgrQiKBngjCUgAQqq5QiBjhjCiqQjbi+kTgbIApAPQGICMENE9QA7BFA4BHIAAAAgATkrgQgPiyhzh8IgJAMIABAEQATCiB3B8IAAAAg");
	this.shape_9.setTransform(706.3,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_8},{t:this.shape_7}]},2).to({state:[{t:this.shape_9}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(538.1,-282.6,343.5,434);


(lib.MIX_43_eyeR_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEDRQhUgCg5g+QgngpgMgzQgEgPgBgQQgBgNAAgMIAAgCQAAgLACgMQAJhHA0gzQA9g7BSABQBVACA6A/QANAOAKAQQAPAXAJAaQAHAaACAcIAAAPIAAAJQgGBRg5A5Qg8A5hQAAIgEAAg");
	this.shape.setTransform(-44.8,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgEDvQhhgDhBhGQhDhIADhhIAAgJQABgMACgMQAGgvAXgnIADgEQAPgYAVgVQBFhFBfACQA3ABAtAYIASALQAYAQAVAWQANAOALAQQAmA6ABBLIAAAGQgCBkhFBEQhEBChbAAIgFAAgAiLiXQg0A0gJBHQgCALAAALIAAADQAAAMABAMQABAQAEAPQAMAzAnApQA5A+BUACQBTACA9g7QA5g5AGhQIAAgKIAAgOQgCgdgHgZQgJgbgPgXQgKgQgNgOQg6g/hVgCIgEAAQhQAAg7A6g");
	this.shape_1.setTransform(-44.8,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83888C").s().p("AiIADQA9g5BSABQBVACA6A9QANAOAKAQIACADQg+gFi7AJQhDADghAEQAOgbAYgYgAh0AOQgOABAAANQAAANAPgBQAPgBgBgPIgCgFQgDgFgIAAIgCAAgABKAIQgLABAAAKQgBAMANAAQAOgBgBgMIgCgFQgEgFgHAAIgBAAg");
	this.shape_2.setTransform(-45.1,-11.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgECVQhUgCg5g+QgngpgMgxQgEgPgBgQQgBgMAAgOIAAgDQAAgLACgLQADgVAGgUIAagBQBVgMCxgGQAwgCAnABQAGAMAEANQAHAZACAdIAAAQIAAAKQgGBOg5A5Qg8A5hQAAIgEAAg");
	this.shape_3.setTransform(-44.8,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEDvQhhgDhBhGQhDhIADhhIAAgJQABgMACgMQAGgvAXgnIADgEQAPgYAVgVQBFhFBfACQA3ABAtAYIASALQAYAQAVAWQANAOALAQQAmA6ABBLIAAAGQgCBkhFBEQhEBChbAAIgFAAgABhhYQixAGhVAMIgaABQgGAUgDAVQgCALAAALIAAADQAAAMABAMQABAQAEAPQAMAzAnApQA5A+BUACQBTACA9g7QA5g5AGhQIAAgKIAAgOQgCgdgHgZQgEgNgGgMIgjAAIg0ABgAiLiXQgYAYgOAbQAhgEBDgDQC7gJA+AFIgCgDQgKgQgNgOQg6g/hVgCIgEAAQhQAAg7A6gAiFh+QAAgNAOgBQAKAAADAFIACAFQABAPgPABIgBAAQgOAAAAgMgAA8iHQAAgKALgBQAIAAAEAFIACAFQABAMgOABIgBAAQgMAAABgMg");
	this.shape_4.setTransform(-44.8,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83888C").s().p("AgEDRQhUgCg5g+QgbgcgOgiQClAHBxgMQBOgHAYgHQgQAxgmAnQg8A5hQAAIgEAAgAgzA5Qh+gBgTgCIAAgBQgEgPgBgQQgBgNAAgMIAAgCQAAgLACgMQAJhHA0gzQA9g7BSABQBVACA6A/QANAOAKAQQAPAXAJAaQAHAaACAcIAAAPIAAAJIgDAYQhvATh2AAIgWAAgAhzAMQgOABABANQAAANAPgBQAOAAgBgQIgBgEQgEgGgIAAIgCAAgABSAXQgCANAOgBQANgBAAgMIgCgFQgFgFgHAAQgMABABAKg");
	this.shape_5.setTransform(-44.8,4.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgEDvQhhgDhBhGQgkgngQguQgOgpACgrIAAgJQABgMACgMQAGgvAXgnIADgEQAPgYAVgVQBFhFBfACQA3ABAtAYIASALQAYAQAVAWQANAOALAQQAmA6ABBLIAAAGQgCBkhFBEQhEBChbAAIgFAAgAiRCQQA5A+BUACQBTACA9g7QAmgnAQgxQgYAHhOAIQhxALilgHQAOAiAbAcgAiLiXQg0A0gJBHQgCALAAALIAAADQAAAMABAMQABAQAEAPIAAABQATACB+ABQCCACB5gVIADgXIAAgKIAAgOQgCgdgHgZQgJgbgPgXQgKgQgNgOQg6g/hVgCIgEAAQhQAAg7A6gAiAAZQgBgNAOAAQAKgBAEAGIABAFQABAPgOABIgBAAQgOAAAAgNgABSAWQgBgKAMgBQAHAAAFAFIACAFQAAAMgNABIgCAAQgLAAABgMg");
	this.shape_6.setTransform(-44.8,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-19.6,46.3,47.9);


(lib.MIX_43_eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcCGQgmgagWgvQgeg9ADgwQADhIAmgZQAjgXAtAXQAtAWAiA4QAgA2gBBTQAAAfgNAYQgSAegfACIgJABQgoAAghgYg");
	this.shape.setTransform(45,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhdBwQgog0gIhPQgFg1AOgpQAahNBHADQAaABAbARQBJAoAhBPQAWAygDBIQgFBohNAKIgUACQhLAAg7hMgAhKiSQgmAagDBIQgDAwAeA9QAWAuAmAbQAlAaAtgDQAfgCASgfQANgXAAgfQABhTggg2Qgig5gtgWQgVgLgVAAQgVAAgRALg");
	this.shape_1.setTransform(45,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83888C").s().p("Ag1gWQAjgXAuAXQAiAQAcAjQgwgBhFACQgsABgSAEQAJgoAbgRgAg0ANIAAAFQABAEAHABQAIAAABgJQAAgJgIAAIgBAAQgIAAAAAIgAAyALIAAAFQACAEAGABQAJAAAAgJQAAgKgIABIgCAAQgHAAAAAIg");
	this.shape_2.setTransform(42.8,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcBdQgmgbgWguQgeg9ADgwQAAgLABgKIBFgDQBVgEAaACIAPABIAEAGQAgA2gBBTQAAAfgNAXQgSAfgfACIgJAAQgoAAghgXg");
	this.shape_3.setTransform(45,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhdBwQgog0gIhPQgFg1AOgpQAahNBHADQAaABAbARQBJAoAhBPQAWAygDBIQgFBohNAKIgUACQhLAAg7hMgAgthIIhFADQgBAKAAALQgDAwAeA9QAWAuAmAbQAlAaAtgDQAfgCASgfQANgXAAgfQABhTggg2IgEgGIgPgBIgYAAQgfAAg4ACgAhKiSQgbASgJApQASgDAsgBQBFgCAvAAQgcgkgigRQgVgLgVAAQgVAAgRALgAhChjQgGAAgCgEIAAgFQABgJAIAAQAJAAgBAKQAAAIgIAAIgBAAgAAdhqIgBgFQABgJAIABQAJAAgBAJQAAAJgIAAQgHgBgBgEg");
	this.shape_4.setTransform(45,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83888C").s().p("AgcCGQghgWgUgmQARACAjgBQBHgBA4gNIAQgEIACgBIAAAOQAAAfgNAYQgSAegfACIgJABQgoAAghgYgAhzgwQADhIAmgZQAjgXAtAXQAtAWAiA4QAaArAEA+IgdAGQgYAFhPAEIhJAEQgcg7ADgugAgpAiIABAFQABAEAGABQAJAAAAgJQABgJgJAAIgBAAQgHAAgBAIgABSAUIAAAFQABAEAHABQAIABABgJQAAgKgIAAIgCAAQgHAAAAAIg");
	this.shape_5.setTransform(45,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhdBwQgog0gIhPQgFg1AOgpQAahNBHADQAaABAbARQBJAoAhBPQAWAygDBIQgFBohNAKIgUACQhLAAg7hMgAgcCGQAlAaAtgDQAfgCASgfQANgXAAgfIAAgPIgCACIgQADQg4ANhHACQgjAAgRgBQAUAlAhAXgAhKiSQgmAagDBIQgDAuAcA6IBJgDQBPgFAYgEIAdgHQgEg9gagrQgig5gtgWQgVgLgVAAQgVAAgRALgAghArQgGgBgBgEIgBgFQABgJAIABQAJAAgBAKQAAAIgIAAIgBAAgABaAeQgHgBgBgEIAAgFQAAgJAJABQAIAAAAAJQgBAJgHAAIgBAAg");
	this.shape_6.setTransform(45,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},2).to({state:[{t:this.shape_6},{t:this.shape_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.6,-19.2,28.8,37.7);


(lib.MIX_34_pupil_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZAdQgOgNAAgRQAAgUAOgOQADgDADgCQAJgDAJABQARABANAOQAMAPgBARQgCAUgNAMIgGAEQgGACgHAAQgSAAgNgOg");

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

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92979C").s().p("AhABHIgDAAIgBAAIgEAAIgTgDQgLgCgKgEIAagWQAlggApgcIBAgyIADACIABACIAQAIIABABIABAAQAJADAJABIAAAAIAEABIABAAIACAAIABAAIABAAIABAAIAHgBIAAABQhPBRhEAnIgPACIAAAAIgHABIgHAAIgBAAg");
	this.shape.setTransform(1.9,6.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(13.3,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1E9F0").s().p("AhhBHIgBgMIAAgCIAAgBIAAgBIAAgKIACgKIADgKIADgLIAAAAIBIglIBKgoIAfgUIAAAEIACAIIAAABIADANIAHASIhIApIh3BSIgFgNg");
	this.shape_2.setTransform(-5.4,-0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BBC1C7").s().p("AhfBdQgPgRgEgTIAEANIB3hQIBJgrIAHANQALAUAPALIgDgDIhCAwQgoAegkAgIgaAWQgWgJgRgSgAhogIQAIgTALgLQAXgEBFgnIA+gmIgBAHIABAPIgfAUIhJAoIhIAlIADgIg");
	this.shape_3.setTransform(-3.7,0.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6E7175").s().p("AAGAMIgGgBIgDgJQgDgDAAgFIAAgFQAEABAEAJQAEAEABAFIAAAEg");
	this.shape_4.setTransform(11.2,-7.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#888D91").s().p("AATBBQgkgFgQggQgSggACgZQABgJAGgOQAGgMACAAQACgBAFACQAOACAQASQAvArAAAoQgBASgBABQgJAGgNAAIgHAAgAgSgBQAAAJADAIQAHARAOAAQARAAAAgRQAAgXgWgNQgEgDgEAAQgLAAAAAWg");
	this.shape_5.setTransform(10.8,-7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AiVB+QghgjAAgzQAAgfATgfQAOgaAMgJQAwgLA4giQARgKA2grQAQgNALgBQAagFAmAgQAQANATAeQAfAwgTAzQgVAdhBA8QhEA/glARQgPACgNAAQhBAAgpgtgAgwCIIADAAIABAAIAGAAIAIgBIAAAAIAPgCQBDgnBQhTIABAAIgBAAIgHAAIgBAAIgBAAIgCAAIgBAAIgBAAIgEAAIAAAAQgJgBgJgDIgBgBIgBAAIgQgHIgCgBQgOgLgMgTIgHgNIgHgTIgDgMIgBgBIgBgJIAAgDIgBgQIAAgHIg8AmQhGAogYADQgKALgIATIgEAIIAAAAIgEALIgCAKIgCAKIgBALIAAAAIAAABIAAACIACANQAFASAOARQARASAXAJQAKAEALADIATACIAEAAIABAAIAAAAgABJiQQgCABgGAMQgHANgBAJQgBAaARAiQAQAgAmAEQATACAKgIQABgBACgRQAAgogwguQgSgSgNgCIgGgBIgBAAgABcg9QgEgJABgKQgBgfAWAMQAVAMAAAaQAAAQgQAAQgQAAgHgQgABohSQAAAFADAFIAEAJIAHABIABAAIABgEQgBgEgFgHQgFgJgEgBg");

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.3,-17.1,36.7,34.3);


(lib.MIX_34_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC289D").s().p("AlJCCQABg1gBg0QgBg2gEgaIAmAAQBugCBjgHIAAALQAGCMAHAqIgDABIgEAAQhLAEhzADIg6AAgADohoQAjgIAZgJIAogPQgCAdACAzIADBnIgUAIQgVAHgzANQgEiMgHgng");
	this.shape.setTransform(9.6,-5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE33CA").s().p("AiDBxQgFiOgHgyQBCgFA8gGQBagKBAgNIABAdQAHCXgCAAQh0AfieAQg");
	this.shape_1.setTransform(17,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5248B").s().p("AkCCTQhngBhdgJIgggDIgBgnQgChNADggIACgkIA7AEQA0AEB1gBQgDAdACBAQgCBEAEAdIgDAAgAnlCIIAAAAIACAAIgCAAgAHAAtQABgzgBg1QgBgvgDgaIAigPQAFAqACAyIADA/IABAaIgMAFIgaAKIgBABIgCAAg");
	this.shape_2.setTransform(0.1,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjjD3IgCABIgBAAQgBAAgBAAQAAAAAAAAQABAAABAAQABgBACAAgAjqBtIgVgBQhegChbgIIgEAAQgQAAgQgEIgggDIgEgBIgBgiIAAgfIgBiTIgBgBIAAgBIAAgCIABgIIAAgDIAAAAQADgKAIgEQAcAEB9AKIBfAFQBSADDGgQQDJgQA6gQIBcgbIBzgrQALgBACAPQAHAlACA3QADBPAAAwIguATQgkAPgfAJQipAxivAUIACABQhdAJgbAAIgdAAIhVABIgIAAIg1AAgAnjhNQgCAiABBLIACAnIAfADQBeAIBnACIACAAIAVABIA5AAQB0gDBIgEIAFgBIACAAIASAAQCggQB1gfQANgFALgCIABAAQAygNAVgHIAUgGIAHgDIAKgEIADgBIACAAIAAgBIAbgKIALgGIAAgZIgDhBQgDgzgEgpIgiAPIgSAHIgpAPQgZAJgiAIIgVAFQhAANhcAKQg8AHhCAEIgSABQhhAHhuABIgmABIgQAAQh2ABg0gDIg6gEIgDAkgAniBJIACAAIgCAAg");
	this.shape_3.setTransform(-0.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C1247").s().p("AleCMQgEgeAChEQgChAAEgdIAQAAQADAaABA1QABA1gBA1IAAAHIgUgBgAhXgyIAAgKIASgBQAHAyAFCOIAAABIgSABQgHgqgFiNgADUhCIgBgeIAUgEQAHAnAECMIAAAAQgLACgOAEQACAAgHiXgAFLg0QgBgzABgdIATgIQACAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADg");
	this.shape_4.setTransform(9.6,-5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjqCyIgVAAQhegChbgJIgEABQgQAAgQgEIgggEIgEgBIgBgiIAAgeIgBiUIgBgBIAAgBIAAgBIABgJIAAgDIAAAAQADgJAIgEQAcAEB9AKIBfAEQBSADDGgQQDJgPA6gRIBcgbIBzgrQALAAACAOQAHAmACA2QADBNAAAwIguAVQgkAPgfAJQipAyivAUIACAAQhdAJgbAAIgdAAIhVACIgIAAIg1gBgAnjgIQgCAhABBMIACAnIAfAEQBeAIBnACIACAAIAVAAIA5AAQB0gDBIgEIAFAAIACAAIASgBQCggQB1gfQANgFALgCIABAAQAygMAVgIIAUgIIAHgCIAKgEIADgBIACgBIAAAAIAbgLIALgFIAAgaIgDg/QgDgygEgpIgiAOIgSAHIgpAPQgZAKgiAIIgVAEQhAANhcAKQg8AHhCAEIgSACQhhAGhuACIgmAAIgQABQh2ABg0gEIg6gEIgDAkgAniCOIACABIgCgBg");
	this.shape_5.setTransform(-0.1,-6.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5248B").s().p("AjwAzIADAAIAAAAIgDAAgAnTAoIAAgBIACABIgCAAgAHSgyIACAFIgCABg");
	this.shape_6.setTransform(-1.6,3.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE33CA").s().p("AjrCNQABg1gBg0QgBg2gEgaIAngBQBtgBBigHIAAALQAFCMAHAqIgDAAIgEABQhJAEhzADIg6AAgAnGCJIgggDIgBgoQgChMADggIACgkIA7AEQA0ADB1gBQgDAeACA/QgCBEAEAeIgDAAQhngChdgIgAAkCLQgFiPgHgyQBBgEA9gHQBcgKA/gNIACAeQAHCWgCABQh0AeigAQgAFGhdQAjgIAZgJIAogPQgCAdACAzIADBnIgUAIQgVAHgzANQgEiMgHgngAHAAtQABgzgBg1QgBgvgDgaIAigPQAFApACAzIADA/IABAZIgMAGIgaAKIgBAAg");
	this.shape_7.setTransform(0.1,-6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AACAAIgCAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAACAAg");
	this.shape_8.setTransform(-23.2,24.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5C1247").s().p("AleCMIAAAAQgEgeAChEQgChAAEgdIAQAAQADAaABA1QABA1gBA1IAAAHIgUgBgAhXgyIAAgKIASgBQAHAyAFCOIAAABIgSABQgHgqgFiNgADUhCIgBgeIAUgEQAHAnAECMIAAAAQgLACgOAEQACAAgHiXgAFLg0QgBgzABgdIATgIQACAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADg");
	this.shape_9.setTransform(9.6,-5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE33CA").s().p("AlJCCQABg1gBg0QgBg2gEgaIAmAAQBugCBjgHIAAALQAGCMAHAqIgDABIgEAAQhLAEhzADIg6AAgAg4CAQgFiOgHgzQBBgEA7gHQBbgKBAgNIACAeQAHCWgCABQh0AfieAQgADohoQAjgIAZgJIAogPQgCAdACAzIADBnIgUAIQgVAHgzANQgEiMgHgng");
	this.shape_10.setTransform(9.6,-5.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B5248B").s().p("AkCCTQhngBhdgJIgggDIgBgnQgChNADggIACgkIA7AEQA0AEB1gBQgDAdACBAQgCBEAEAdIgDAAgAnlCIIAAAAIACAAIgCAAgAHAAtQABgzgBg1QgBgvgDgaIAigPQAFAqACAyIADA/IABAaIgMAFIgaAKIgDABg");
	this.shape_11.setTransform(0.1,-6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5248B").s().p("AjrCNQABg1gBg0QgBg2gEgaIAngBQBtgBBigHIAAALQAFCMAHAqIgDAAIgEABQhJAEhzADIg6AAgAkCCTQhngChdgIIgggDIgBgoQgChMADggIACgkIA7AEQA0ADB1gBQgDAeACA/QgCBEAEAeIgDAAgAAkCLQgFiPgHgyQBBgEA9gHQBcgKA/gNIACAeQAHCWgCABQh0AeigAQgAnlCIIAAAAIACAAIgCAAgAFGhdQAjgIAZgJIAogPQgCAdACAzIADBnIgUAIQgVAHgzANQgEiMgHgngAHAAtQABgzgBg1QgBgvgDgaIAigPQAFApACAzIADA/IABAZIgMAGIgaAKIgBAAIgCABg");
	this.shape_12.setTransform(0.1,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).to({state:[{t:this.shape_4},{t:this.shape_8},{t:this.shape_11},{t:this.shape_10},{t:this.shape_5}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_12}]},2).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.8,-24.7,103.3,49.8);


(lib.MIX_34_Lashes_R = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGCIQgrgGgZgoQgMgSgGgZQADABAPARQAPAQAGAIQAUATAgAJQAZAGgBAIQgBAHgFAAIgCABIgVgDgAAoBiQgZgDghgkIgdgkQgEgFgEgaQgFgcABgIQAIgPAFgFQAAADgCAFQgBAEAIAeQAIAfAGAHIAOASQAJALAOALIAdAQQAQAJgBAKQgBAHgJAAIgEAAgAA/AcQgngGgXgzQgRgsADgaQACgLAFgLQAFgNAFgEIgCAEQgDAkAQArQAVA2AtAVQgFAEgGADIgGABIgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-13.8,16.3,27.8);


(lib.MIX_34_lid = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#626669").s().p("AhHA9Ig2gQIAEgFIAAAAQAQgSAXgPQAYgOAdgNQAzgYAngJQAVgEAVgDIAXgDQghAYgaAbIgDADIgnAPQgTAJgsAkIgQANIgRgDg");
	this.shape.setTransform(-16.4,-4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45474A").s().p("AAAAcIgIgFIgBAAIgJgGIgBgBIgIgJQgGgHABgFIABgFIAAAAQACgLAMgLQADAGANAIIABACIAFADIAQAGIANADIgEADQgTAQAAAOIAAAEIAAAAIgLgFg");
	this.shape_1.setTransform(-29.6,4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE33CA").s().p("AitAiIgVgDIgUgDIgDgSIACgLQABgKALgHIAHABIAAgBIAlADIAIABQgGALAAATQgBANACAHIgRgCgACjAMIAAgCQgEgbgLgKIALgCIABAAIAEAAIAEgBIAJgBIARgEIAQASIAAAAQACADAEAOIACAEQgSAGgUADIgQAEIgBgFg");
	this.shape_2.setTransform(3.8,7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#606366").s().p("Ah3BAIAAgBQgFgkANgOIAIgBQArACAwABQAtAABGgJIAfgFIACADQALALADAIIAAAAIAEAIIABARQgbAFgSACIgBgBIAAAAQg8AKg5AAIgsABIgWABQgUAAgZgCgAjeAyIgHgCIgdgIIgFgCQgZgGgSgHIAAgEQAAgOATgQIAEgDIAWAGIAKACIAGABIAfAEIAGABQgFAFgCAEQgFAMAAAVIAAAGIgCAAgAD3gBQgEgJgFgGQARgGAJgGQARgKgEgJIgFgIIgGgJQAPAGAEAEIAAgBIAQAQIABABQAFAKAAAGQAAATgmASIgOAHQgCgLgGgMgAEIhBIABAAIgBABg");
	this.shape_3.setTransform(2.2,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83888C").s().p("Aj1A6IARgNQAugkASgJIAngPQgJAMgOAXQgSAgAAARQgrgEgkgHgACqA4QgDgNgWgeQgWgagOgMIAAAAIgYgVQgRgOgOgIIAAAAQBaANA6AvQAXAQATAZIACAEIgOAHIgBAAQgSAGgMACIgeAEg");
	this.shape_4.setTransform(2.5,-3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC1C7").s().p("AgBBKQhAAAg1gFIAJgVQARglAIgLQAQgSAcgXIAbgVIAAAAQAKgGAPgFIACAAIAFAAIADAAIAAAAIAPACQAPADAYANQAWAMAgAdQAXATAUAkIAMASQhZANg8ACIgVAAIgQAAgAEVAgIADAEIgBAAgAkXAhIAAAAIABAAg");
	this.shape_5.setTransform(-0.7,-3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ai4CEQgwgJgkgJQgzgSgbgiQgJgLAAgXQADg0AqgEQAtgnA1gYQBTgmBqgLIAPgBIAcgBQAHAAAkACQBKAGBGApQAcAQAbAbQARAAAZAMQAaALAIAKQASAUgBAaQAAAagiAWQgiAWgeAJQgdAJgyAKQgyAJhZAFIhSACQhcgDgxgIgAhcA6QgMAOAFAlIAAAAQAZACAUAAIAWgBIAqAAQA7gBA7gJIABAAIABAAQASgCAbgFIgBgRIgEgIIAAAAQgDgIgLgLIgCgDIgfAFQhGAJgvAAQguAAgrgDgAizBEIgCANIADASIAUAEIAVADIARABQgCgHABgMQAAgWAGgLIgIAAIglgEIAAABIgHgBQgKAHgCAKgAjzBUIAFABIAdAJIAHABIACABIAAgGQAAgVAFgMQACgFAFgFIgGgBIgfgFIgGgCIgKgCIgWgFIgNgEIgQgFIgFgDIgDgCQgNgIgDgHQgLALgDALIAAAAIgBAGQgBAEAGAKIAIAIIABACIAJAGIABAAIAKAFIALAFIAAAAQASAHAZAGgADVAmIgJABIgEABIgEAAIgBABIgLABQALAKAEAdIAAACIABAFIAQgEQAUgDASgGIgCgFQgEgOgCgEIAAABIgQgTIgRAEgAEkgKIAFAJQAEAGgRAKQgJAHgRAFQAFAGAEAKQAGANACALIAOgHQAmgUAAgTQAAgFgFgLIgBAAIgQgOIAAAAQgEgEgPgFIAGAIgAAChxQgPAFgKAGIABAAIgcAVQgcAXgPAUQgJALgQAjIgKAVQA1AEBAABIARAAIAUAAQA9gCBYgNIgLgSQgVgigWgVQghgdgVgMQgZgNgPgDIgOgCIgBAAIgDAAIgFAAIgCAAgAg/hqQgVACgVAFQgmAIg2AYQgcAOgYAPQgXAPgQASIAAAAIAAAAIgEAFIA2AOIAQADQAkAHArAEQABgRARgeQAOgZAJgLIADgEQAbgaAggZIgXAEgACogaQAWAcADAOIABAAIAegFQAMgCATgGIAAAAIAOgFIABAAIgDgEQgTgZgXgSQg6gvhagNIAAAAQAOAIARAOIAYAVIAAAAQAOAMAWAcgAEcgTIAAAAIAAAAg");
	this.shape_6.setTransform(0.2,0.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.3,-14,71.2,28.7);


(lib.MIX_34_handR = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC1C7").s().p("AiSA/QgDgQAogdQApgaAWgBQAWgBgFARQg6BEgcACIgIABQgVAAgCgPgACiAwQgTgDgog2QAAgEADgIQAFgLAGAAIAEAAQAMAIAdAKQAdAPABAiQgJAOgQAAIgFgBgAi/AVQAAgOAkgYQAqgeArAAQARAGAAAJIAAADQgZAEgoAZQgkAVgNAVIgCAAQgWAAAAgVgAiwg5QASgWA1ACQAUACALACIgEAMQgigCg0AZQgRgHAFgMg");
	this.shape.setTransform(-0.5,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AgtAzQgBgUgXgHQABgGgFgLQgDgHgSgDIABgDQAUgqAggMQBQgfAsA8QANARgBAPIAAAAIgRgBQgkAAAAAtIAGAJQgGAEgNAFQgXAIg3ABQAEgIAAgNg");
	this.shape_1.setTransform(3.1,-3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiBB+QgrgBgCghIAAgCIgCABQgnAAgBgiQAAgaAmgfQgfgGAIgcQAMgeA7gFIAOgBQAhAAATAGQASgbAdgQQA3gfAwAXQAmATANAVQAPAYACAgQAIACAfAVQAaATgCAiQgCAVgWALQgTAKgRgEQgagGgcgwIgGAEIAAgBIAAABIgYAIQgnANhAgFIgUAWQgkArgqAAIgBAAgAgtANQgXACgoAcQgoAcACARQADAQAcgCQAdgDA6hDQAEgTgTAAIgCAAgABrABQgDAIAAAEQAnA5AUACQATADALgQQgBgigdgRQgegIgLgIIgEAAIAAAAQgGAAgFAJgAiaAFQgkAaAAAPQAAAUAXAAQANgVAlgXQAogXAZgEIAAgDQAAgJgRgGQgrAAgqAcgAgDhaQghALgUArIgBADQASAEAEAIQAFALgBAGQAXAFAAAUQABAMgEAJQA2gBAXgIQANgFAGgEIgFgJQAAgrAkAAIARABIADAAIgDAAQAAgSgMgQQgdgoguAAQgYAAgZALgAivggQgFALARAHQA0gZAiADIAEgNQgLgCgVgBIgLgBQgsAAgPAVg");
	this.shape_2.setTransform(-0.6,-0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.3,-12.8,43.4,25.3);


(lib.MIX_34_handle = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45474A").s().p("AhyDLQgmg+AAhDQgBhDAIglQAJgoA7hwQA8hxBBAkQBDAlAaAkQAHAKAFAJIgZAjIhzhTQg/AbgaBDQgpBngBBuQAAAhAUAbIAkAvIAJAMQAXAcAfAGQAOAAAJAEIgBAUQhkgEglg+g");
	this.shape.setTransform(-0.2,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhJFoQgrgEgdgfQgNgOgKgSQhOiXAYimQAQhrA/hXQBJhiBrgqQAxgIAoAdQAiAZAcAgQAaAdAOAfIhVCNIiHhVQgYAOgQAbQgWAkgOAnQgSAwgHAyQgDAYABAYQAABGA2AwQAoAiAWgIQAbAfgLAnQgFASgPAMQgNgBgeANQgSAHgSAAIgLgBgAAllJQgpAHgiAdQglAggeAoQgcAkgWApQgfA4gNA/QgIAmADAoQADAwAJAxQAKA6AXA1QAXA2A4APQA2AOAsgeIABgWIACgTQgJgEgMAAQgigGgXgcIgJgMIgkgvQgUgbABghQABhwAohlQAbhDA/gbIBzBTIAZgjIA7hTQgogqgrgjQghgbgnAAIgRABg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606366").s().p("AhSFIQg3gOgYg2QgXg2gKg5QgIgxgEgxQgDgnAJgmQANg/Afg5QAWgoAbgkQAfgoAlghQAigdApgGQAxgHAoAhQAqAjApApIg8BTQgFgJgHgKQgagkhDgkQhBglg8BxQg7BxgJAnQgIAlABBEQAABDAmA+QAlA9BkAEIgBAVQgeAVgjAAQgRAAgRgFg");
	this.shape_2.setTransform(0.2,0.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.8,-36,45.8,72.3);


(lib.MIX_34_hand_L = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC1C7").s().p("AA3AsIgkgcIAAgDQAIgNAIgBQAJAAALABQBQAaAAAYQgFARgWABQgXgBgegXgAigAqQAcgpAVgBQAUAAAAAKQADACgSAYQgRAYgRAFIgFAAQgNAAgCgXgACFAQIgIgFQgYgQgbgGQADgIAAgIIABgBQAOABAQAEQAyAMACANQACAOgLADIgIABQgGAAgEgEgABJgtQgFgLgFgHIAAgBIAjgCQAngBAGAXIADAKQgbgKgugBg");
	this.shape.setTransform(2.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AgtAuIACgEQgBgegfgDIgJAAQAAgrBOgOQAxABAZAUQARANAAAOQAAAEgEAGIgLgBQgUgBgNANQgKALAAAHIABAGQgRAEgSAAQgWAAgQgDg");
	this.shape_1.setTransform(0,-1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AASAmQgWAIgeAAQgcAAgUgFQgdAxggABQgnAAABgbQACgbAXgbQALgKAMgHIAAgFQAAgWAQgVQAageA1gFQA2gEAhAWQAQgIAnAAQA+AAAAAuQAAAIgCAEQASANAAATQAAAXghAEQAIAHAAAJQAAAKgHALQgLARgXAAQgZAAhJg1gAAlABQgIAAgJAQIAAACIAkAdQAeAXAXAAQAXAAAEgSQAAgXhQgcIgPgBIgEAAgAhuADQgVACgbAoQACAcARgFQARgFASgYQARgXgDgDQAAgKgPAAIgFAAgAhngMQAfADABAcIgBAEQAPADAWAAQAUAAAPgEIAAgGQAAgIAKgIQANgNATAAIAMACQAEgGAAgGQAAgPgRgNQgZgTgygBQhOAOAAAtIADAAIAGAAgABPgXQAAAHgEAIQAbAGAZAQIAHAGQAGAFAMgDQAMgDgDgOQgCgMgygMQgQgEgOgCIgBAAIABACgACTgfIgCgKQgHgWgnAAIgjADIgBAAIABABQAGAGAEAMQAuAAAbAKIAAAAg");
	this.shape_2.setTransform(2.7,0.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.4,-8.7,36.5,18.4);


(lib.MIX_34_bulbL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017E58").s().p("AgWBRIAJgPQATgiAQgUIgLgLQgIgHgBAAIgMADQgJACgRAAQgNAOgRAQIgQAPIgDgDIgJgKQAbgZAMgMQgKgHgDgIQgDgFAAgJQAAgKALgQQAOgVAVAAQAMAAAFAKIACALQAAALgFAJIgNAXIgBABQASgBAFgHIACgNQAHgTAFgFQAZgcAQAHQAMAGAAARQAAAagtAVIAFAIQADAEAGAAQABAAASgRQARgSAKAAQALAAADAJQABAEAAAEIgBAJIgHAKQgGAHgFADQgEADgPgBQgMAAgEAFQgGAGgZAkQgGAIgHASIgTgEgABMgPQgFADgKAKIAAABQAFgCAFgGQAEgEABgCgAgng7QgQANAAALQAAADACAEQADAGAGABQADgEAJgQQAJgRAAgEQAAgFgDAAQgEAAgJAIgAAagzQgJAKgBAKIAAAAQANgEAJgKQAJgIAAgGIAAgGQgMADgJALg");
	this.shape.setTransform(-2.3,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah2BxQgygvABhCQgBhBAygvQAxgvBFAAQBGAAAxAvQAxAvAABBQAABCgxAvQgxAvhGAAQhFAAgxgvgAhnhhQgsApAAA4QAAAtAcAkIAJAKIAHAGQAZAYAfAKIATAFQAOACAOAAQA7AAAsgpQArgpAAg4QAAg4grgpQgsgpg7AAQg8AAgrApg");
	this.shape_1.setTransform(0.1,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#21FFC0").s().p("AgbCIQAJgSAGgJQAXgjAGgGQAEgFAMAAQAPABAEgDQAGgDAGgHIAGgMIABgJQABgEgCgFQgDgIgKAAQgLAAgRARQgSASgBgBQgFAAgEgDIgDgIQArgVAAgYQAAgRgMgGQgPgHgYAcQgFAFgHAQIgEAOQgEAHgSABIAAgBIANgXQAFgIAAgKIgCgMQgEgJgNgBQgUABgPAVQgLAOAAAKQAAAIADAGQAEAHAKAIQgNAOgbAYQgcgjAAguQAAg4AsgpQArgoA7AAQA8AAAsAoQArApAAA4QAAA5grApQgsAog8AAQgNAAgOgCgAhmBiIgHgHIADAEIAQgPQARgQAOgQQAQAAAKgDIANgCQACAAAHAJIALAKQgPAUgWAiIgJAQQgfgKgZgYgAAmAvQAJgKAFgDIAAAAQAAACgFAEQgFAFgFACgAhMAVQgDgEAAgDQAAgLAQgLQARgNgBAKQAAAEgJAPQgJAQgDAEQgFgCgDgFgAgGARQACgJAGgIQAKgMALgDIAAAHQABAFgKAHQgJAKgLAEg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-15.9,33.8,32.1);


(lib.MIX_34_bulb_R = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,50,59,0.314)").s().p("AgaANQgVgOAAgFQAAgDAIgGQAJgHAIABIADAAQALgFAIgBIAEgCQADgBAHAFIAHADQAMAGAFAIQAJAHABABQAAACgFAAIAAAAIgCACQACADAAABQAAAFgdALIgBABIgBAAIgFABQAAAFgEAAQgHAAgWgSgAAKgBIAAABIAAAAIAJAAIgJgCIAAABg");
	this.shape.setTransform(10.8,14.6);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606366").s().p("Ag3AZIAZgUIApAiIgeAJgAgNgFIAQgQIApAkIgTARgAANgfIAQgQIAbAaIgEAYg");
	this.shape_1.setTransform(12.1,12.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#017E58").s().p("AAEBVQgWgkgDAAIgCABQgBABgKAAQgfAAgPgUQgKgNAAgKQAAgOAQAAQAUAAAVARIASASQAHAAAFgIIADgMQgTgFgMgKQgLgJAAgKQAAgJAEgGQAFgKANAAQARAAAKASQAEAHAHAQQAEAAAEgGQgZgdAAgbQAAgjAcAGQAcAGAAAoQAAALgEANIgFAOQAAAEAeAkIANAQIgBABIgOANIgIgLIghgsIgMAHQgHAFgCAIQgEANgPAMIAWAiIALARIgDACIgBAAIgDACIgGACIgLgQgAhMAJQAAAGAJAIQAKAKAOACIALAAQgLgOgEgDQgMgKgQgBIgBACgAgagaQAAAGAJAGQAJAHAJABQgEgQgLgJQgFgDgCAAQgFAAAAAIgAARhGQAAARATAWIAEgNIABgLQAAgUgMgIQgDgCgCAAQgHAAAAAPg");
	this.shape_2.setTransform(3.2,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21FFC0").s().p("AghCVQgwgFglgjQgpgmgEg4QgEgzAigsQAfgpAwgRQAqgQAqAIQA3AIAlAnQAmAoAEA5QADAjgZAcIgGAJIgEAFIABgBIgNgQQgegmAAgEIAFgPQAEgLAAgKQAAgogcgGQgcgGAAAjQAAAbAZAaQgEAHgEAAQgHgRgEgGQgMgRgRAAQgNABgFAJQgCAHAAAHQAAAKAJAJQAMAMAVAFIgFALQgFAJgHAAIgSgTQgTgSgUAAQgQAAAAAQQAAAKAKAMQAPAVAdAAQAKAAABgBIACgCQADABAYAjIALARQgiAPgjAAIgVgBgAgwBEIABABIABgBIgCAAgAA7BwIgYgiQARgMAEgNQACgIAHgFIAMgJIAhAuIAIAKIgoAlIgDACIgFADIgLgRgAgBBFQgOgDgKgJQgJgJAAgFIABgCQAQABAMAKQAEADAJAOgAAXASQgJgGAAgGQAAgNAMAIQALAJAGAPQgLgBgJgGgAA7gkQAAgUAMAHQAMAIAAAUIgBALIgEALQgTgVAAgQg");
	this.shape_3.setTransform(-0.9,-1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAkCaQglAKgogHQhIgKgug3Qg1g/APhOQAMg/A1gnIAVgOQAvgWAygBQA1gHAwAYQAyAYAbAyQAWAqgFAvQgDAggIAhIAdAcQAFATgGARQgQAtguASQgQAGgQAAQglAAgfgkgABBCTIAkAXIAggJIgrgigABrByIAoAoIATgRIgpgngAhAiaQgvASggApQgiAsAEAzQAFA3ApAnQAkAjAwAEQAvAGAsgTIAFgDIADgBIABgBIAEgBIAFgDIACgCIApglIAOgNIADgEIAHgJQAZgcgDgkQgEg4gmgoQglgog3gHQgPgDgNAAQgdAAgcAKgACHBZIAnAkIAEgaIgbgag");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.2,-19.1,40.4,38.2);


(lib.MIX_34_browR = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiyAWQgIg8AEgCIASgKQANgJBmgLQBkgKApgDIBMgHQAGAKAEAxIAGA2QgDAFgmALQgmAMhhARIilAXQgNgHgIg+gAiZgdQADAOABATQACAGADAeQADAaADAAIAygGQgCgvgHgmIgCgMQgfAEgXAEgAhagnQADAOAFAXQADATADArQB8gSBwgdIgFgbQhmAXgUgFQgFgBgHgfIgDgWQg9AFgvAGgAA8g4QgRADgLABIACANIAEAfIB0gQIgHgqg");
	this.shape.setTransform(-0.9,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#909499").s().p("AiUAoQgCgdgCgHQgBgSgDgOQAXgFAegEIADANQAHAlACAvIgzAHQgCgBgEgagAhVgCQgFgXgEgNQAwgHA9gFIADAWQAGAgAGAAQAUAGBmgYIAFAbQhwAdh8ASQgDgrgDgTgAAfgnIgCgNQAKgBARgDIBYgKIAHArIh0APIgEgfg");
	this.shape_1.setTransform(-0.6,-1.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.4,-10.3,36.9,18.4);


(lib.MIX_34_browL = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABfBGIhfgGIgzgBQglgBgFgDQgEgEgFgXQgFgYgFgfQgFggAKgOQAbAGAOACIBCAJQA0AIAaAFQAaAFALAEIgIBCQgEAegCACQgBACgEAAIgBAAgABTAvIAAAAIAAgMIAAgDQgQABgWgCIgmgEQgDgLABgSIABgYIABgBIgBAAIgCAAIgBAAIhcgOIADAgQACAXAKAcIAYABIAwADIAzAAIAHAAQAWAAAFABgABVATIAAgCQACgIAAgMIABgJQgSgGg4gIIgCAqIAAACIAqgCQASAAANADg");
	this.shape.setTransform(0,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#909499").s().p("AAyAsIgzgBIgwgCIgYgCQgKgcgCgWIgDghIBcAOIABAAIACABIABAAIgBAAIgBAZQgBARADAMIAlAEQAXABAQAAIAAACIAAAMIgBABQgFgCgcABgAA2ANIgpACIAAgBIACgqQA4AHASAHIgBAJQAAALgCAJIAAACQgNgDgTgBg");
	this.shape_1.setTransform(-0.1,-0.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.6,-7.5,23.1,14.1);


(lib.MIX_34_armR = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC1C7").s().p("AhzCsQgHgQgJgIQgQgQgSgDQgIgCgIABIAbgqIAHgCQAGgCAJAAQAZAAATAbIAPAUIglA4IgFgNgAAAAEQgRgegjAAIgIAAIgCAAIAkgkQAKgFAEAAQAaAAARAgIAKAUIghAjQgDgIgFgIgACIhtQgGgNgHgHQgIgJgZgKIgMgCQAYgQAZgQIAMgCQAbAAAKAjIAGASQgWANgVAQIgDgHg");
	this.shape.setTransform(0.4,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777FC7").s().p("Aj0DbIADgEQAag8Afg3QAIgDALAAQAKAAAPAPQALAKADAGIAAAAIAJAUIAFAJQgeA0gdA5IgFABQgtAAgXgwgAh8ARIgHABQAagiAdghQAagIAFAAQAYAAASAeIAIAPQgeAlgeArQghg/gkAMgAAvhqQgVgYgWgBQAcgZAegXIAIgCIAJgBQAgAAAQAbIAJAPQglAdgjAiQgEgMgNgRgADFjYQgKgTgZgKIAmgVQApANAEAsQgVAKgUAMQgBgRgGgMg");
	this.shape_1.setTransform(-0.4,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AilEiIgBgBQhDAHghhGIAAgBIADgPIAJgXIAAAAQCQk9EvidQAEgCAEABQA9APAFBBIAAADQAAADgBADQgBAEgEADQjnBxjBFwIgBABIAAAAIgBAAgAi4BkQggA3gaA8IgDAEQAZAyAxgCQAcg6Aeg0IgEgIIgKgVIABAAQgEgGgLgKQgPgPgKAAQgLAAgHADgAicBSQARADAQAQQAJAIAHAQIAGANIAkg4IgPgUQgTgbgZAAQgJAAgFACIgHACIgcAqIAFgBIAMACgAg4BEQAegrAegkIgHgQQgSgegYAAQgFAAgaAIQgdAhgaAiIAHgBQAFgCAGAAQAeAAAbA1gAgshJQAjAAARAgQAFAIADAIIAiglIgLgUQgRgggaAAQgEAAgKAFIgkAkIACAAgABFi1IgHACQgfAXgcAZQAXABAUAYQAOARAEAMQAjgiAkgdIgJgPQgQgbgfAAIgKABgACHjlQgZAQgXAQIALACQAZAKAJAJQAGAHAGANIADAHQAVgQAWgNIgGgSQgKgjgaAAIgNACgACij0QAYAJAKAUQAHALABARQAUgMAVgKQgEgsgpgMIgmAVg");
	this.shape_2.setTransform(-0.3,2.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.1,-26.8,53.5,58);


(lib.MIX_34_arm_L = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BDC2C6").s().p("ABdB7QAlgGAMgrIAVAgQgBAPgNAOQgHAHgNAEIgPAIQgJgPgMgQgAgCATQAagSAGgoIABgBIAiAeIgBAKQAAAIgFAJQgFAKgKAFIgTALIgbgYgAiihRIAGgKQAQgYgBgMIgDgaQAVAJAWAMIAEAVQAAAQgTARIgPAMg");
	this.shape.setTransform(0.9,-4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8089C0").s().p("ACBB/QAYgFARgZQAFgJAEgHQAaArAeA6QgMAZgNAGQgQAIgPAEQgTgwgfgygAAvARQAggNAHgqIAOANQAPAPASAWQgGAZgPAKQgXAPgEABgAgSgnIgogdQgZgRgWgNQARgOAEgJQAJgRAAgOIgCgNIAmAXQAXAPAZAWQAIAjgOAOQgPARgFAAIgBAAgAjdiXQgNgCAAgkQgBgNAUgSIAEgEQAHACAmAPQAHAMgCASQgCATgMATIgFAFIgpgRg");
	this.shape_1.setTransform(0.5,-0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AChD4IgZgzQgihIg/hNQgngwhdg4QhGgogVgHIhHgcQgFgRADgfQAFgjATgQQATgQAFgBIAxAUIAGACQBcAnA5ApQBIA0A4A5QATATA3BWQA6BaAEAaQgTA/hMAAIgDAAgACqBjQgRAagYAEQAfAyATAxQAPgEAQgIQANgGAMgZQgeg6gagsQgDAIgGAIgABhBSQAMAQAJAOIAPgHQANgEAHgHQANgOABgPIgVggQgMArglAGgAAvATIAmAuQAEAAAXgPQAQgKAFgZQgSgWgPgPIgOgNQgHAqggAMgAAihRQgGAqgcASIAdAXIATgJQAKgGAFgJQAFgJAAgJIABgLIgigfIgBAAIAAABgAhLiWQAAAOgJARQgEAJgRAOQAWANAZASIAoAcQAFACAQgTQAOgNgIgkQgZgVgXgPIgmgXIACAMgAiJioQABALgQAZIgGAJIAfAPIAPgMQATgQAAgQIgEgVQgWgMgVgJIADAagAjXjZQgUASABANQAAAkANABIApASIAFgFQAMgTACgTQACgTgHgLQgmgQgHgBIgEAEg");
	this.shape_2.setTransform(0.5,-0.5);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.4,-25.4,52,49.8);


(lib.XUFO = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.XBLINKY("single",0);
	this.instance.setTransform(-76.6,7.5,0.847,0.942,0,-3.4,180);

	this.instance_1 = new lib.XBLINKY("single",0);
	this.instance_1.setTransform(-42.6,16.9,1,1,0,0,180);

	this.instance_2 = new lib.XBLINKY("single",0);
	this.instance_2.setTransform(77.1,5.6,0.847,0.942,0,3.5,0);

	this.instance_3 = new lib.XBLINKY("single",0);
	this.instance_3.setTransform(44.6,17.1);

	this.instance_4 = new lib.XBLINKY("single",0);
	this.instance_4.setTransform(1.7,20.7);

	// Layer 1
	this.instance_5 = new lib.xufodoodle("synched",0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A5968D").s().p("Ag9AnQgKgSgCgTQAAghAXgWQAVgUAdgBQAegBAVATQAXAVAAAmQAAATgPAWQgWAfglAAQgpAAgUgkg");
	this.shape.setTransform(-10.2,-25.3);

	this.addChild(this.shape,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.5,-64.1,167.1,129.1);


(lib.xskilletz = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.xpanfr2("synched",0);
	this.instance.setTransform(-49.9,7.6);

	// handle
	this.instance_1 = new lib.xpanhandle("synched",0);
	this.instance_1.setTransform(240,-37.1,1,1,-2);

	// pan
	this.instance_2 = new lib.xpanbk("synched",0);
	this.instance_2.setTransform(-48.8,-2.1,1,1,-2);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.8,-72,623.7,139.8);


(lib.xlid = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D5A70").ss(3.5,1,1).p("AWThSIAwgEQBhgJBhgKQAogEAogEQAPATAGATQANArgiAoQgNACgNADQgWADgVAEQh0ARhzALQggADggACQgKABgKAAQh4AIh4AIQhDAEhCAFQjKANjJAJQg6ACg5ABQiHAEiHAEQgKAAgKAAQi8AFi/gEQjJgFjKgHQi2gGi1gGQjGgIjFgVQi4gWi2gbQgHgBgHgBQhJhIBJgxQAiADAiAEQAgADAhADQC0ASCzANQCyAOCxAJQGlAXGkACIAwAAQDsAADugHQCvgFCwgJQATgBATgBQAWgBAXgBQAZgCAZgBQBAgEBBgEQATgBATgBQCXgLCXgNg");
	this.shape.setTransform(0,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71C7B5").s().p("AgWBwQjJgEjKgHIlrgNQjGgIjFgVQi3gWi3gaIgOgCQhIhIBIgyIBEAHIBBAHQC0ARC0AOQCxANCxAKQGlAXGiABIAxAAQDuAADtgHQCwgFCwgIIAmgCIAsgDIAzgCICAgIIAmgDQCXgKCXgOIgHABIhTAHIANAiQATA0AAAPQAAAGgDAWIjxAQIiFAIQjKANjIAJIh0AEIkNAHIgVABQhlAChkAAQhaAAhYgCg");
	this.shape_1.setTransform(-17.2,54.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#64B0A0").s().p("Ai5A5QAAgQgUgzIgMgiIBTgHIAHgBIAwgEIDAgTIBQgIQAPATAGATQANArgiAoIgaAFIgrAHQhzARhyALIhAAFIgUABQAEgWAAgFg");
	this.shape_2.setTransform(155.6,51);

	this.instance = new lib.xknob("synched",0);
	this.instance.setTransform(0.8,-45.1,0.882,0.882);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(125,126,135,0.902)").ss(3.5,1,1).p("AaFFvQgthRhDhLQggglgkgiQhmhhiLhVQk6jFmJhNA6EFvQB+jjEmi2QBshFB2g1QAQgHAQgHQGxi8ItAAQEeAAD/Ay");
	this.shape_3.setTransform(0,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.702)").s().p("AlnCAQgLgVADgZQAAguAhgbQAfgWAsAAQArAAAfAWQAhAaAAAuQAABahsAAQhLAAgYgrgAAXBQQgbgpAAgvQAAhlA5gnQAygiBPATQBJASA4A0QA6A3AAA6QAAA0gYAiQglA2hcAAQiKAAg3hQg");
	this.shape_4.setTransform(55.8,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(183,225,242,0.702)").s().p("AICGZQmkgBmjgXQixgKixgNQi0gOi0gRIhBgHQB/jjEli2QBthEB2g1IAfgOQGwi8ItAAQEfAAD/AyQjWAViwBPQklCEAADnQABApAPA2QAgBpBOBYIAPAQg");
	this.shape_5.setTransform(-56.3,10.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(211,237,248,0.502)").s().p("AsLFwQhOhYgfhpQgQg2AAgpQAAjnEliEQCvhPDWgVQGHBNE7DEQCLBXBlBfQAlAjAgAkQBCBMAuBRIjCASQjBASjDANIiAAIIgzACIgsADIgmACQmcAUmdAAIgQgQgAobgnQgiAbAAAsQgDAZALAVQAYArBLAAQBsAAABhaQgBgsghgaQgegYgsAAQgsAAgeAYgAiXjGQg7AnAABlQABAxAdAnQA2BQCIAAQBcAAAlg2QAYgiAAgyQAAg8g6g3Qg4g0hHgSQgcgHgZAAQgsAAggAWg");
	this.shape_6.setTransform(76.4,13.4);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.instance,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-177.3,-65.5,354.9,131.2);


(lib.xfpfr2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xfptopfr("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-98.1,-60.5,196.4,121.2);


(lib.xfpbody = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xbolt001("single",1);
	this.instance.setTransform(-184.8,-100.1,1,1,0,180,0);

	this.instance_1 = new lib.xbolt001("single",1);
	this.instance_1.setTransform(-64.6,-83.9,1,1,0,180,0);

	this.instance_2 = new lib.xbolt001("single",1);
	this.instance_2.setTransform(-107.4,-85.4,1,1,0,180,0);

	this.instance_3 = new lib.xbolt001("single",1);
	this.instance_3.setTransform(-148.6,-91.4,1,1,0,180,0);

	this.instance_4 = new lib.xbolt001("single",1);
	this.instance_4.setTransform(127.6,-116.6);

	this.instance_5 = new lib.xbolt001("single",1);
	this.instance_5.setTransform(94.6,-104.6);

	this.instance_6 = new lib.xbolt001("single",1);
	this.instance_6.setTransform(54.8,-95.6);

	this.instance_7 = new lib.xbolt001("single",1);
	this.instance_7.setTransform(15.8,-89.6);

	this.instance_8 = new lib.xbolt001("single",1);
	this.instance_8.setTransform(-22.4,-85.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B807B").ss(3.5,1,1).p("AWdlKICJGgQhCAUhCASQk9BYk9AzQibAYiaAQQh/ANh+AHQsIArsJi0QiFggiFglIB2li");
	this.shape.setTransform(-17.4,125.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4A5573").ss(4,1,1).p("AUyyiQAAgCgBgDQAAADgBACIAAABAUsyfQABgBAAAAIAAgBQACgDACgDQgBADgCADQgBACAAABAUtydIAAgBQgBgBAAAAQAAgBAAgBQgFhynfg8Qngg7qgAeQqhAenZBmQnYBlAFBzQAEBjFrA7QA3AIA/AIQHgA7KhgeQCbgHCPgKQHjgkFrhOQGHhVBNiAQAAAJADgNAVEtRQAPgGAPgGQgUiggcilAVJsfQAHgDAYgKQAFAlADAlQAGA2AFA1QAAACAAADQABAHABAIQAxgjA0gcQBBgeBEgWQAUgHAUgFQAFgCAGgBQAcgIAdgGQAvgLAxgGQAXgDAXgCQBmgDBHAqQBmA9AnCbQAEATAEAWQA6E9g6EtQgMA8gQA8QgOA3gRAzQgqB7g+BwQgOAagPAYQgwBLhAA/QgpApg3AQQh0Afh3gYQgSgDgSgEQgygKgwgSQgJgDgIgDQgdgMgegKIgagGQgcCCgkB8IgYBFIAKALA5fS4QgDAAgDgKQhWkbg9kjQhBk2glk9IAAgBIlfnuIKZgYQhxFXjJCwEgi/gH4IE1hkQAAAAAAgBQAAgDAAgDQALADAMADIgCg1QgLgDgMgDQgChoAAhqQAAhTAChTQAAgDAAgCAVEtRIAFAyA91qSQPJD8O/hwQFTgoFShVQCogqCmg1QCfgzCfg8AWLmMIAEBCQAKgIALgJQBXhNBsghQAZgHAagFQAagFAbgDQAAAAABgBQBUh3hIiNQgEgJgFgIAV9pjQAEA0AEA0IAGBvAVtHqQAslLgHluIgCg9AWPlKIABA+AbQndQADgBAEAAQAPgCAOgBQCPgFAwCHQCagKBOihAbPndQABAAAAAAAezlfQAJAbAGAgQAkDGgiC8IDfArAcjHgQgSAVgTATQgSASgZAJQhUAehXgbQgFgBgFgBQhIgQhHgeIgigMQgUCVgdCOAYiIpQBYCHh2CbAcjHgQCnANAZCbAfEBeQgPBSgcBRQgKAagJAZQgkBgg/BMAYeIkQACADACACATPRWQAKgDALgDATPRWIAfAFASHRwQAkgNAkgNAOeS+QBGk6ASlOQifAxifAmQhmAYhnAUQjeAsjdAXQqyBJqzh8QjLgkj4g1AI7UZQA/gNA+gQQBzgcBzgiA14TvQLkC4LShBQBvgKBvgQQCQgUCPgfASHRwQh0Aqh1AkAOVqMQCBJ/ggJDA14TvQhwgdhxgiIgGAIA5lSuQAGABAGABA01LJQhqppBcpK");
	this.shape_1.setTransform(0,-18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#404A63").ss(3,1,1).p("AzlB9QKuBnKphQQCtgUCtggQClgfClgpQBvgaBughQCHgoCGguQBTgdBUggAzlB9QAAgBgBABQhggPhggS");
	this.shape_2.setTransform(-9.3,-80.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(3,1,1).p("AQ3sjIAcgGQANBOALBMQAQByAKBsQAIBeAEBaQAFBqgCBlIi0AmIkeA7QAAgMAAgMQgBimgLigQgGhagIhYQgNh7gRh2IChghIB2gZICUgfAIfsNQBLG4AGHzIJ/iDQgCnRhZnagAGwGBQqDBFqFhqQi2gejggsQA3DwBODpQAFABAFABQBmAcBlAYQKwCcKfg+QBOgHBOgKQCCgRCBgZQBugXBvgbQAxgMAxgOQA/kCARkTQhZAZhZAVQiTAjiTAbQixAgiwASg");
	this.shape_3.setTransform(-38.1,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6CBDAC").s().p("A1eCvIBTlwQLkC4LRhBQBvgKBvgQIAoGJQh/ANh+AHQiWAIiUAAQpzAAp0iSgAKoiXQA+gNA/gQQBzgcBygiQB1gkB1gqIBrGyQk9BYk9Ayg");
	this.shape_4.setTransform(-10.7,126.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8FCDC0").s().p("AitiqQCQgVCOgeIA9GTQibAYiYAQg");
	this.shape_5.setTransform(45.9,133.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4FB09C").s().p("A4lDAIB2liIAFgIQBxAiBxAdIhTFwQiFgfiFgmgAU3jqIBHgaIAfAFICJGgIiEAmg");
	this.shape_6.setTransform(-17.4,118.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9A97AD").s().p("AgDgBIAHABIgEACIgDgDg");
	this.shape_7.setTransform(157.2,36.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B9B7D0").s().p("AlMMPIgRgHQgdgLgdgKIgbgHQAeiNATiVIAiAMQBHAeBIAPIAFAGQBXCGh2CcQgxgLgxgRgAAzG/QA/hLAkhgIATgzQAchRAPhTIDfArQgMA9gPA8QgOA2gSAzQgqB7g9BxQgOAZgQAZQgZibingOgAAFoCIgcADIgGABIgBAAQBSh3hGiOIgJgRQAtgKAygHIAtgFQBmgDBHAqQBmA9AnCbQhOCiiaAKQgwiHiOAEg");
	this.shape_8.setTransform(177.6,-15.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8692AC").s().p("AWzFUQAYoahkpSQCfg4CfhHIAYgLIAYgMIACAXQAHBJAGBJIAAAEIABAOIAHBhIAKEYQAFFVgiEzQgQCKgXCEQgWB5gcBzIgSBBIgRAFIg4AZQhcAnhcAhQA4kkAOk3gAaFrXIgWAJIgiAPIA5gWIgBgDIAAABgAsMHrQhfoqBSoRQJeBbJZhDQCngTCogfQCqggCqgsQBOgVBOgXQB0JAgcIIQh6Alh6AeQhyAdhyAWQjTAqjTAVQjbAWjbAAQmFAAmIhGgAIpoFQBLG4AGHzIJ/iDQgCnRhZnagA3ZjqIkdmRIIbgTQhcEWiiCOg");
	this.shape_9.setTransform(-39.1,-0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5FA0B0").s().p("AjXBZIDpnbICTgfIlwNDQgCipgKiggAD1gvQAJBcAEBaQAEBrgBBkIi1AngAkElHICigiIiEESQgMh6gSh2g");
	this.shape_10.setTransform(52.9,-13);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8BC4D1").s().p("AjSGZIFwtCIACgBIABAAIAbgFQANBOALBMQAQByAKBsIilGrIkbA8IAAgXgAjthgICDkRIB0gZIjpHbQgFhYgJhZg");
	this.shape_11.setTransform(53.7,-12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#757593").s().p("AuHCWIgBAAQhggPhggSIggABIqZAYIgCgGIE1hkIAAgBIAAgGIAWAGIgBgzQPID6O/hxQFUgnFShTQCngqCng1QCfgzCeg8IAGAyQhUAghUAdQiGAuiGAoQhuAfhvAcQilApimAfQisAgitAUQkqAjkoAAQmCAAmDg6g");
	this.shape_12.setTransform(-44.3,-83.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#919BB3").s().p("A0TPNQhmgXhlgcIgLgCQhNjpg3jwQDfAsC3AeQKFBqKChFQCxgTCxggQCTgaCSgjQBZgVBZgZQgQEShAEDIhiAaQhuAbhvAWQiBAZiBARQhOALhOAHQi9ASjBAAQnlAAnshxgAP1EmQifAwifAmQhmAZhnAUQjeAsjdAXQqyBJqzh8QhqpoBcpMQKuBoKphQQCtgUCtggQClgfClgqQBvgbBughQCHgoCGgvQBTgdBUggIAfgNIAIBKIALBsIAAAEIACAPQAxgjA0gbQBBgfBEgWIAogMIALgDQAcgIAdgGIAJARQBICOhUB3IgBABQgbACgaAFQgaAFgZAIQhsAghXBOIgVARIgEhDIgGhvIgIhoIAIBoIAGBvIAFCAIACA+QAHFvgsFKQgUCVgdCNQgcCCgkB8IgYBGIgVAGIhIAaQh0Aqh1AjQBGk6ASlNgAUzv9IgXAKQifBHigA4QBlJSgZIbQgOE2g3EkQBcghBbgnIA4gYIARgGIAThAQAch0AWh5QAXiDAQiLQAikygFlWIgLkXIgGhhIgBgOIgBgEQgFhJgHhKIgCgWIgZAMgAyVGPQJiBuJhg9QDTgWDTgpQBygXBxgcQB6geB6glQAcoJhzo/QhOAXhPAVQipAsirAgQinAfinATQpZBDpehcQhTIRBgIqgAP1EmQAHhyAAhzQAAnbhooCQBoICAAHbQAABzgHBygAYnJBIgkgGQB2ichYiGIAGgEQBXAcBUgfQAZgJASgSQATgTASgVQCnAOAZCbQgwBLhAA/QgpAog3AQQhBAShDAAQgzAAg0gLgA7kEqQg1kWgfkeQCnieBek1IAagBQBQAQBPAOIABAAQhMIRBXIqQinghjPgwgAfDixQAii9gkjGQgGghgJgaQCagKBOiiIAIApQA6E9g6EvgA9fkUIlfnvIKZgXQhxFXjJCvgEgh/gLWIEdGQIAAABQCiiOBckWgATmspIAVgKIABAAIAAADIg5AWIAjgPg");
	this.shape_13.setTransform(0.1,8.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9EA6BE").s().p("AxhSFQhxgdhxgiIgLgCQhXkbg9kjQD5A1DKAkQjKgkj5g1QhBk2gkk9QDIiwBylXIAggBQBgASBgAPIAAAAQhcJMBqJnQK0B8KxhJQDegXDdgsQBngUBngZQCfgmCfgwQgSFOhHE6QhyAihzAcQg/APg+AOQiQAfiQAUQhvAQhvAKQi8ARi8AAQoaAAojiIgAzRQ+IAKACQBmAcBlAYQKwCcKfg+QBOgHBOgKQCCgRCBgZQBvgXBugbIBigaQA/kCARkTQhZAZhZAVQiTAjiTAbQiwAfixATQqDBFqFhqQi2gejggsQA3DwBODpgAxWIhQhYoqBMoRIAAAAQhQgNhPgQIgbABQheE1imCeQAeEdA2EXQDOAvCoAhIAAAAgA3iIGIAAAAgAG3m6IJ1iDQBZHaACHRIp/CDQgGnzhLm4gAPNnQIiUAfIh2AZIihAhQARB2ANB7QAIBYAGBYQALCgABCoIAAAYIEeg9IC0gmQAChlgFhqQgEhYgIheQgKhsgQhyQgLhMgNhOIgcAGIAAAAgA5er8IgXgGQgDhpAAhpQAAhTAChTIAHAAQAFBjFqA6QA3AJA/AIQHgA7KhgeQCagHCQgLQHjgjFshOQGGhVBNiAQABAJADgNIACgBQAcClAUCgIgfAMQieA8ifAzQinA1inAqQlTBVlTAnQkoAjkoAAQqaAAqdiug");
	this.shape_14.setTransform(-27.7,-8.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B9B9CE").s().p("AuoDnIhZgKQmwg2gFhnQgEhlGphbQGqhcJdgbQJdgbGwA2QGvA1AFBnIAAACIAAABIAAAAQhFBylgBMQk8BEmfAgQiRAMicAGQjLAKi5AAQkyAAj8gag");
	this.shape_15.setTransform(-30,-131.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D1D1E0").s().p("AxzD2QhAgIg3gJQlqg6gEhjQgFhxHYhlQHZhmKhgeQKggeHgA7QHfA8AFByIAAACIABABIAAABQhNB+mHBVQlsBOniAjQiRALibAHQjhAKjNAAQmTAAk+gngAgKkAQpdAbmqBcQmpBbAEBlQAFBnGwA2IBZAKQGUAoIegYQCcgHCRgLQGfggE8hEQFghMBFhyIAAAAIAAgBIAAgCQgFhnmvg1QkggklsAAQi4AAjJAJg");
	this.shape_16.setTransform(-30,-130.3);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-224,-158.9,448.1,318);


(lib.xdial = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2B807B").ss(2,1,1).p("AAdgcQAMAMAAAQQAAARgMAMQgNAMgQAAQgQAAgMgMQgMgMAAgRQAAgQAMgMQAMgMAQAAQAQAAANAMg");
	this.shape.setTransform(1.9,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66DBD3").s().p("AgcAdQgMgNAAgQQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAAQgMANQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(1.9,0.2);

	this.instance = new lib.xarrow("synched",0);
	this.instance.setTransform(1.2,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#3F7065").ss(2,1,1).p("AhTmOQgpAKgoARQgfAPgeATQgFADgFAEQgfAWgZAZQglAmgaAuQgeA3gNBCQgJArAAAnQAAADAAABQABBkAzBZQAIAOAJANQAiAyApAkQACACACACQAOALAOAKQA5AnBHASQAMADAMACQA7AMA1gEQBRgGBKgoQASgJASgNQAWgOATgRQAGgEAFgFQAVgTASgWQAigqAVgyQASgoAJgtQAIgqABgmQAAgCAAgCQAAhggvhXQgKgTgMgSQgOgUgPgSQgNgPgPgOQgBgCgCgBQhCg/hagcQgVgGgWgFQgjgHgigBQgKAAgJAAQglAAglAHg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#3F7065").ss(3,1,1).p("AgGnoQgSgCgRAAQgDAAgDAAQgIgBgGAAQg1ABgzAMQgzAMgwAYQgDACgEABQgZAOgZARQgSAMgQANQiLBsgiCyQgMA4ABA0QACCHBRB4QATAcAVAZQAyA7BAAmQABABACAAQACACACABQAIAFAKAEQAOAIAQAGIANAGQAqAQAuAJQAdAGAcACQAHABAHAAQADABADAAIAcABIA4AEIAGABQAVACAWgBQAOAAANgBQBhgHBZgvQAXgMAXgQQAZgQAWgSQAhgcAbghQApgxAag8QAWgxALg5QAKgxAAgvQAAgCAAgDQAAh0g4hoQgMgWgOgVQgfgvgnglQgCgBgBgCQhQhLhsghQgYgHgZgFQgUgEgTgCQgDgBgDAAQgFgBgEAAQgJgBgIAAIgHgBIgOgBIg4gDAgpHhQgQgDgPgEQgegHgbgLIgNgGQgXgJgVgMQgKgFgKgHQgcgRgZgWQgDgCgCgCQgZgWgWgaQgVgZgTgcQhSh6gBiKQAAgCAAgCQAAgvALg0QAPhNAjhBQAeg3AsguQAegfAlgaQAIgFAIgGQAcgTAdgPQAGgDAGgDQBKgiBNgHQALgBALAAQAFAAAGgBQACABADgBQAGAAAIABAgpHhQAIACAIABQANACAMACQAHABAIAA");
	this.shape_3.setTransform(-5.2,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#E2DFD7").ss(2,1,1).p("AgPkyQgIAAgIABQg4AFg1AXQgDACgEACQgXALgXAPQgHAEgGAEQgOAKgMALQgLAKgKAKID7DdIACABIACAAIgQkzgAgNkyIgBAXAj9jGQgfAggWAnQgJARgIASQgNAggHAlQgHAjAAAjQAAACAAACIAbAAIFDgGIABgCIACgFIAAgCIgFgMIAAAAIAAgBADrjYIgNAXIARgTADrjYQg5g1hOgWQgBAAgBgBQgPgEgPgDQghgGgfgBQgHgBgKABAACAYIAAADIAEABIgBAAIALAGIAAgBIDOjiAAlAsIgUgKIgBgBAEPELQAegkAUgsQADgJAEgJQAKgbAGgeQAHglAAgiQAAgBAAgBQAAAAAAgBIk6AGIgRAAgAFfAmQAAhTgqhNQgBgCgCgCQgGgMgIgMQgYgjgdgbAjmE0IDmj/IAAgIIAAAAAleA0IAbgBAkzDTQAHAOAJANQAbAoAiAeAleA0QABBTApBL");
	this.shape_4.setTransform(0.9,-4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#549486").s().p("ACsHnIgHAAIgOgCQgcgCgdgGQgugJgqgQIgLgGIgegNIgSgKIgEgCIgDgCQhAgmgyg6QgVgagTgcQhQh4gDiHQgBg0AMg4QAjiyCKhsIAigYQAZgSAagOIAGgDQAvgYAygMQAzgMA1gBIAOABIAGAAQARAAASACIAGABIAAAAIA6ADIAAABIgOgBIgFAAIgLABIgVABQhQAHhKAiIgMAGQgdAPgcATIgQALQgiAageAfQgtAugeA3QgjBBgPBNQgLA0AAAvIAAAFQABCJBSB6QATAdAVAYQAWAaAZAWIAFAEQAXAWAcASIAVAMQAUALAXAJIANAGQAbALAeAHIAfAHIAAADIAAABg");
	this.shape_5.setTransform(-29.4,-0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#71C7B5").s().p("AgeHmIgGAAIgPgCIgbgEIgQgDIgfgHQgdgHgcgLIgNgFQgWgJgVgMIgVgMQgcgRgZgWIgFgFQgZgVgWgaQgVgZgTgdQhSh5gBiKIAAgEQABgwAKg0QAPhNAjhAQAeg4AtguQAegeAkgaIAQgLQAcgUAdgPIAMgFQBKgiBQgHIAVgCIALAAIAFAAIAMAAIACAAIAMABIAIAAIAQABIAJABIAGABQATACAUAEQAZAGAYAHQBsAgBQBLIAEAEQAmAlAfAvQAOAVAMAVQA4BpAAB0IAAAGQAAAugKAxQgLA5gWAxQgaA8gpAxQgbAgghAcQgWATgZAQQgWAPgYAMQhZAwhhAHIgbABIgEAAQgRAAgUgCgAgJmVQglAAglAHQgpAKgoARQgfAPgeATIgKAHQgfAWgZAZQglAmgaAuQgeA3gNBCQgJArAAAnIAAAEQABBkAzBZIARAbQAiAyApAkIAEAEQAOALAOAKQA5AnBHASIAYAFQA7AMA1gEQBRgGBKgoQASgJASgNQAWgOATgRIALgJQAVgTASgWQAigqAVgyQASgoAJgtQAIgqABgmIAAgEQAAhggvhXQgKgTgMgSQgOgUgPgSQgNgPgPgOIgDgDQhCg/hagcQgVgGgWgFQgjgHgigBIgNAAIgGAAg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFA86E").s().p("AhnClIAAAAIgDgBIgBgDIgRkzIABgXIATAAQAfABAgAGIAfAHIACABQBMAWA5A1IgNAXIjMDiIgBABg");
	this.shape_7.setTransform(11.9,-18);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF8668").s().p("AilB3IgBgBIDMjjIARgTQAdAcAYAjIAOAXIADAFQAqBLAABVIk5AGg");
	this.shape_8.setTransform(19.3,-12.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6C63").s().p("AikhrIAQAAIE5gGIAAABIAAABQAAAjgHAkQgGAfgLAZIgHASQgTAsgeAkg");
	this.shape_9.setTransform(19.5,11);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDA78").s().p("AiwB5QAAgjAIglQAHglANgeQAHgSAKgRQAVgnAfggID6DdIgBAAIABABIAGAMIAAACIgCAFIgCACIlBAFIgcABIAAgEg");
	this.shape_10.setTransform(-16.5,-11.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF986B").s().p("AAEgKIABABIADADIgPARg");
	this.shape_11.setTransform(24,-24.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFA26D").s().p("AAAgKIABAAIgBAVg");
	this.shape_12.setTransform(-0.6,-33.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFBD73").s().p("AB6ClIj5jdIAVgVIAagUIANgJQAXgPAXgLIAIgDQAygYA4gFIAQgBIACAYIAREzIgEAAg");
	this.shape_13.setTransform(-11.6,-18.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFDE79").s().p("AAIBPIAagNIgaAOIAAgBgAghhOIAcgBIgcACIAAgBg");
	this.shape_14.setTransform(-30.8,8.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF97E").s().p("AhzA+IgRgbIAagPIgaAOQgqhJgBhTIAcgCIFBgGIACAAIgCAIIjkD9Qgigegbgng");
	this.shape_15.setTransform(-16.6,13.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D8D7C0").s().p("AhOGNIgYgFQhHgSg5gnQgOgKgOgLIgEgEQgpgkgigyIgQgbQg0hZgBhkIAAgEQAAgnAJgrQANhCAeg3QAaguAlgmQAZgZAfgWIAKgHQAegTAfgPQAogRAqgKQAkgHAlAAIATAAQAiABAjAHQAWAFAVAGQBaAcBCA/IADADQAPAOANAPQAPASAOAUQAMASAKATQAvBXAABgIAAAEQgBAmgIAqQgJAtgSAoQgVAygiAqQgSAWgVATIgKAJQgUARgWAOQgSANgSAJQhKAohRAGIgdABQgoAAgrgJgAgGleIgQABQg4AFg1AYIgHADQgYALgXAPIgMAJIgaAUIgVAUQggAhgVAmQgJARgIASQgNAhgHAkQgHAlgBAhIAAAEIAAACQACBTApBKIABABIAQAbQAbAoAiAeIAEADIAAAAQAcAZAiARQAgARAlALIAbAGQAvAKArgDQBHgDBBgiQASgJASgMQARgMAQgNQAYgTATgXIABgBQAeglATgsIAHgSQAKgbAGgeQAIgkAAghIAAgBIAAgCQAAhVgrhMIgCgFIgPgYQgXgjgdgbIgDgCIgBgCQg5g0hOgXIgCAAIgegIQghgGgfgBIgRAAIgBAAIgBAAg");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E8E6DB").s().p("AhXCyIgcgHQglgLgggRQgigRgcgYIAAAAIgEgEIDmj8IACgIIgCgBIADgBIABgFIAAgCIgGgMIAAgBIAAAAIABABIAFAAIAAACIADABIAAABIALAFIAAAAIABABIARAKIgQAAID7DdIgBABQgTAXgYAUQgQANgRALQgSAMgSAKQhBAhhHAEIgQAAQgkAAglgHg");
	this.shape_17.setTransform(2.9,16.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#88AD30").s().p("Ag3HjIAAgBIAAAAIAAgEIAQADIAbAFIANABgAAsnlIgCAAIAAgBIAOABIgMAAg");
	this.shape_18.setTransform(-3.8,0);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#ADD158").s().p("AAAABIAAgBIAAABg");
	this.shape_19.setTransform(-9.4,48);

	this.addChild(this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.2,-49.5,108.1,98.4);


(lib.xarm = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xdial("synched",0);
	this.instance.setTransform(45.3,-37.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D5A70").ss(3,1,1).p("AnnA3IAqAGIEcAoIDdAbIB9j/ICEkTIAuAMAHelmIAKACIhhEwIh3F0ImkAxIksAeIgnAEAGHg0IjOhLAA8CAIACAAIDSDAAA+CAIgCABIAAgBAihBlIANEMAm9A9IgDFS");
	this.shape.setTransform(-2.5,30.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9293B0").s().p("AAAAAIABAAIgBAAg");
	this.shape_1.setTransform(3.6,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9293B0").s().p("AmBggIEcAmIAKDDIkoAWgAB6AhIgCAAIB9kAICPA0Ih0FVg");
	this.shape_2.setTransform(-8.5,39.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8589A5").s().p("AmiCdIEogXIADBKIksAegADyBqIgBgCIB0lVIA/AXIh3F1g");
	this.shape_3.setTransform(-5.4,46.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9E9FBE").s().p("Ak/EjIFtgdIA6A1ImjAxgACghQIBgkbIA2AAIAKACIhhEwg");
	this.shape_4.setTransform(14.2,30.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B9B7D0").s().p("AkkCbIDfAbIgBABIADgBICUCJIABACIlsAdgAA1hKICFkSIAuAMIAAAgIA9AAIhgEag");
	this.shape_5.setTransform(10.6,25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#5D5A70").ss(3,1,1).p("AAIACIhAgQAA5APIgxgN");
	this.shape_6.setTransform(39.5,-7.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E9FBE").s().p("AgaAGIAFgLIAwALg");
	this.shape_7.setTransform(42.6,-6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B9B7D0").s().p("AgfAPIAAgdIA/AQIgEANg");
	this.shape_8.setTransform(37.1,-7.1);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.3,-86.9,145.5,157.7);


(lib.TrashCan = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.rivet("synched",0);
	this.instance.setTransform(16.1,177.5,0.995,0.995,5.5,0,0,3.6,4.5);

	this.instance_1 = new lib.rivet("synched",0);
	this.instance_1.setTransform(59.8,184.5,0.995,0.995,-0.9,0,0,3.7,4.5);

	this.instance_2 = new lib.rivet("synched",0);
	this.instance_2.setTransform(121.8,254.5,0.995,0.995,0,-6.2,173.7,3.6,4.4);

	this.instance_3 = new lib.rivet("synched",0);
	this.instance_3.setTransform(181.2,247.3,0.995,0.995,0,-6.2,173.7,3.6,4.4);

	this.instance_4 = new lib.rivet("synched",0);
	this.instance_4.setTransform(26.4,118.1,0.995,0.995,16.3,0,0,3.6,4.5);

	this.instance_5 = new lib.rivet("synched",0);
	this.instance_5.setTransform(64.2,253.7,0.996,0.996,4.8,0,0,3.6,4.5);

	this.instance_6 = new lib.rivet("synched",0);
	this.instance_6.setTransform(92.9,255.2,0.996,0.996,4.8,0,0,3.6,4.5);

	this.instance_7 = new lib.rivet("synched",0);
	this.instance_7.setTransform(153.4,251.3,0.995,0.995,0,-6.2,173.7,3.6,4.4);

	this.instance_8 = new lib.rivet("synched",0);
	this.instance_8.setTransform(35.2,249.3,0.996,0.996,4.8,0,0,3.6,4.5);

	this.instance_9 = new lib.rivet("synched",0);
	this.instance_9.setTransform(10.1,244.7,1,1,15,0,0,3.8,4.4);

	this.instance_10 = new lib.rivet("synched",0);
	this.instance_10.setTransform(59.7,123.2,0.996,0.996,4.8,0,0,3.6,4.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CAFAEF").s().p("AjpCJIgEkeQD3AVDWgVIAOEaQhrARiBAAQhtAAh+gNg");
	this.shape.setTransform(93,131.4,1,1,0,0,0,-1.9,-3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CAFAEF").s().p("AjxCRIgFkhQD8ARDigeIAPEpQhvASiFAAQhxAAiDgNg");
	this.shape_1.setTransform(93.9,167.9,1,1,0,0,0,-1.9,-3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#485599").ss(0.7,1,1).p("ABLj2IhQgNQgMAfgKAhIBTAKQAKghAJgcgAgsiBQgIAlgGAqIBUAJQAGgnAJglgAgbjDQgKAggHAiAhJBiIBWAIQADgoADgkIhXgMQgCAmgDAqQAAAlgBAlIBVAJQAAgnACgkAhKCsQACAlADAoIBSALQgCgqAAglAg6gyQgGAjgEAhAATAeQADgjAEgkAAph1QAFgjAKgh");
	this.shape_2.setTransform(35.9,150.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#85817E").ss(0.8,1,1).p("ABpkUIgcDXABOg7IgCAUIgpFOIh/gQQgSiEAKh4QAPiqBHiXIB3ASQhgDrAaFQABMgnIABgW");
	this.shape_3.setTransform(36.4,151);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7FA7FF").s().p("AgvAdIAKhFIBVAKQgFAhgDAmg");
	this.shape_4.setTransform(33.7,149.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4F8AFF").s().p("Ag4BuIAEhQIBXAMQgDAkgCAogAgqgmQAHgqAIglIBUAMQgIAlgGAng");
	this.shape_5.setTransform(34.2,149.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#4375D9").s().p("AhAC0IABhLIBWAJQgCAkAAAmgAgih5QAHgiAKghIBSALQgJAggGAkg");
	this.shape_6.setTransform(34.9,150.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3AE95").s().p("AAlkdIgcDXIACACIgDAUIABgWIgBAWIgnFOQgalQBejrgAAIgwg");
	this.shape_7.setTransform(43.1,151.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D0D8C9").s().p("AhcEXQgSiEAKh4QAPiqBHiXIB3ASQhgDrAaFQgAggjFQgKAggHAiQgIAlgGAqIgKBEIgFBQIgBBKIAFBNIBSALIgChPQAAgnACgkQACgoAEgkQADgjAEgkQAGgnAIglQAGgjAJghIATg9IhPgNQgNAfgJAhg");
	this.shape_8.setTransform(36.4,151);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2E60C4").s().p("AhFD5IgEhMIBVAIIABBPgAgbjDQAKghAMgfIBQANIgTA+g");
	this.shape_9.setTransform(35.9,150.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#7EC2B3").s().p("AhOEcIgCgCQgBAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQgViBAFh4QAMipBDiXIACgDIARgCQAKABAUAGIBGAMIg4I8g");
	this.shape_10.setTransform(37.8,151.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#4597A8").ss(1,1,1).p("AhQgFQAAABAAABQAAADAAADQAAAEABAEAhNAQQAAAAAAABQAAAAAAAAQABABAAABQACADACADQAEAEAFADQAMAHAMgEQAMgEAFgNQABgCABgCQAAgBABgBQAAgBAAgBQABgHgBgGQgBgBAAgCQAAgBgBgBAgWgKQgBgEgCgCQgEgHgHgEQgLgHgMADQgMAEgHANQAAADgBACAAUgJQAAgCABgBQAAgDABgCQAGgNANgEQAMgEALAHQAHAFAEAGQACADABADABPgLQAAAAAAABQABACAAACQACAGgCAGQAAABAAABQAAABAAAAQgBADgBADQgFANgNAEQgMAEgLgHQgFgDgEgFQgCgDgCgDQgBgBAAAAQAAgBAAAAQAAAAgBAAAAWAMQAAgCgBgCQgBgFgBgDQAAgDABgEQAAgBAAAA");
	this.shape_11.setTransform(106,193.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#93E0D0").s().p("Ag/AgQgFgDgEgFIgEgFIgBgCIAAgBIAAgBIgCgEIgBgIIAAgGIAAgCIABgCIAAgCIABgFQAHgNAMgEQAMgDALAHQAHAEAEAHIADAFIAAABIABAAIAAACIAAAAIABACIABADQABAGgBAHIAAACIgBACIgCAEQgFANgMAEIgJACQgIAAgHgFgAAlAdQgFgDgEgFIgEgGIgBgCIAAAAIgBAAIAAgBIgBgFIgCgHIABgHIAAgCIAAAAIABgDIABgFQAGgNANgEQAMgEALAHQAHAFAEAGIADAGIAAABIABABIAAAAIAAACIABAEQACAGgCAGIAAACIAAABIgCAFQgFAOgNADIgJACQgHAAgHgEg");
	this.shape_12.setTransform(106,193.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#636980").ss(1.5,1,1).p("ACxi/QgBgBgBAAQgIgJgHgHQgRgQgRgMQgRgMgQgJQgwgcgygDQiXgIiMDnQgEAFgEAGQgIANgGAOQgJAPgJAOQgMAYgMAZQgNAcgMAbQgGANgEAMQgMAdgUAyQA7AWA/AQQAOADAOADIAAAAQAHACAHACQExBCGChMQgbhHgMgdQkuBMkEglAC0i8QgCgCgBgBIAAAAAD1hvQgJgNgIgKQgCgBgBgCQgWgcgXgXAjbCzQAQADAQACQAHABAHACAGFCUQgkhXg0hWQgDgFgDgFQgKgQgKgPQgPgYgPgVAmBCHQBNAbBSAQQADAAAEAB");
	this.shape_13.setTransform(81.4,62.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D1B243").s().p("AAGADIAAAAIgagFIABgDQAMACAOADIAOAEIgBACIgOgDg");
	this.shape_14.setTransform(52.9,87.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8692AC").s().p("AkHAvIAAgCQAwgmAqgdQEFAkEthKQAMAdAaBFQjNAoi3AAQifAAiPgfgAmqAAQATgxAMgcIAKADQBNAbBSAQIAHABQgnAegvAiIAAADQg/gQg6gVg");
	this.shape_15.setTransform(81.4,83.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A9B6D9").s().p("AkWEMQgQgFgMgCQAugkAogeIAfAGIAPACQgrAfgvAmIgOgEgAiuDLQBqhTA8gpQCthzBOg7QAPAVAQAYIAUAgIAFAKQA0BWAkBXQjJAzi5AAQhZAAhWgNgAiuDLIAAAAgAjcDDIgHgBQhSgQhOgbQCVhaA8gjQAxgaDYh4IBcg0QAWAYAXAcQhVBAgZASIhmBEQhGAwgdAWQgzAihSA9IAAAAgAlAgKQAHgOAIgOIAIgLQCMjmCXAIQAxADAwAcIh2BMIh8BKIh2BFIhEAoIARgdg");
	this.shape_16.setTransform(81.6,60.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F7DD7D").s().p("AAGAHIgNgOIAAAAIAOAOIABABIgCgBg");
	this.shape_17.setTransform(98.3,42.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C7D5FF").s().p("AhwDcIgfgGQBSg9AzgiQAbgWBIgwIBmhEQAZgSBVhAIACADIARAWQhOA7ivBzQg8AphpBTIgOgCgAk/CnIAJgZIAZg4IAZgwIBEgoIB2hFIB5hKIB5hMQAQAJARAMQARAMARAPIAAABIAPAPIACABIAAABIAEACIhcA0QjZB2gwAcQg8AjiVBaIgJgDg");
	this.shape_18.setTransform(73.9,58.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#4597A8").ss(1.5,1,1).p("AgMkpQABABABABQBmBGBcBcQBsBsBbCJQAHAKAHAKQAyBOAuBYAnsC7QAQgZAQgYQAIgNAJgNQBgiJBzhrQBhhaBthDQADgCADgC");
	this.shape_19.setTransform(97.2,29.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#34B09B").ss(1.5,1,1).p("AjPgNQCmAxCwgjQAlgFAkgK");
	this.shape_20.setTransform(94.7,18);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#34B09B").ss(1.5,1,1).p("AAgiWQg5CzgGB6");
	this.shape_21.setTransform(80.3,33.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#6B738A").s().p("AgLAGIgCgGQAAgOANABQAOABAAAMQAAAOgNAAQgIAAgEgIg");
	this.shape_22.setTransform(38.1,95.6,1,1,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#636980").ss(1.5,1,1).p("ADEhGIAUgBQAMgBANgBQASgBATgCQANgBANgBQAGgBAGgBQAGAAAFgBQCcgPCjgdQAXgEAWgEQAXAiAbArQAVAhAXAoIgsA8QjPAjjPAPQgDABgDAAQhCAFhCACQgzACg0ABIh1AAQgIAAgIAAIg5gCQgCAAgDAAQgigBgigCQibgHicgTQgLgBgLgBQgLgCgMgBQgMgCgMgCQhXgMhXgPQgCgBgBAAIgyg9QAehIA5hKQAaAGAcAGQBGAPBJALICzAWQAXACAXACQARACARABQAEAAADAAQAGAAAGABQADAAADABIALAAAjBhDQAIAAAIABQAhABAjABIAXABQAHAAAGAAQABAAAAAAQAQAAARAAQAtAAAwgBQAQAAAQgBQAXAAAYgBQAEgBAEAAIAqgCQAGAAAHgBADBBTIBwgGQAHgBAIAAQAEAAADgBQDPgODPgkQAWgEAWgEAkYBLIBjAGAiuBSIB/AEQAIAAAIAAIDjgDAjBhDQgGAAgGgBAkzBJQABAAAAAAIASACQAEAAAEAAIAAAAAkzBJQAAAAgBAAAmpA+QALACAMABQAvAFAvADAn5A1IAFABQAGABAFAAIAPACQAFABAEAAQABAAABAAQAFABAEAAQABAAABABQAOABANABAsQAJQAaAFAbAFQBXAPBWAMQAPhNArhEAouAuQAbAEAaADALlg4QjMAujSAPQgEABgFAAQiBAKiEAAIgDhQ");
	this.shape_23.setTransform(94.4,103);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D1B243").s().p("ADaAPIAIAAIAIABIgQgBgAgVAEIAGABIACAAIgIgBgAjPgLIAJAAIAAABIgJgBgAjpgPIAFABIAGABIgLgCg");
	this.shape_24.setTransform(67.7,110);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFE47F").s().p("AgmBHIAAAAIABAAIgBAAIAAAAgAgmBHIAAgBIABABIgBAAgAgmBHIAAAAgAi1A6IgBgBIAbADIgagCgAjCA4IgBAAIACAAgADDhBIABAAIgBAAgAA+hGIAGAAIAHABIgNgBg");
	this.shape_25.setTransform(67.5,103.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6D768C").s().p("AgfBAIgIAAIgIAAIg5gCIgFAAIhEgDQibgHicgTIgWgCIgXgDIgYgEQhXgMhXgNIgDgBIgyg9IA1AKQBXAPBWAMIA1AHIAFABIALABIAPACIAJABIABAAIABAAIAJABIACABIACAAIAZACIAXADIBeAHIAAAAIABAAIABAAIASABIAIAAIAAAAIBjAGIAEABIADAAIB+AEIARAAIDjgDIgDAAIBwgGIAPgBIAHgBQDPgMDPgkIAsgIIgsA6QjPAjjPAPIgGABQhCAFhCACIhnADg");
	this.shape_26.setTransform(94.4,110.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8692AC").s().p("AiYBdIgJAAIh+gEIgDAAIgFgBIhigGIBnhEIATgNIBVg5IABAAIAhAAIBegBIAEBQQCCAACBgKIAJgBQDSgPDMguQAUAhAYAoIgsAIQjPAkjPAOIgIABIgPABIhvAGIADAAIjjADIgIAAgAoDBIIBeg7IBzhJIAQABIBDACQgdATgmAbIgbAQQg/AsgpAfIAAAAIhegIgAqfA1QAPhNArhEICzAWIATACQg3AghSA0QgkAXgeAVIg1gHg");
	this.shape_27.setTransform(105.8,102.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6B738A").s().p("AqDA2QgDgFAAgEQgBgOAPAAQAQAAAAAPQAAAFgDAFQgFAFgHAAIAAAAQgHAAgFgHgAApAWIgBgKQAAgOAPABQAOAAAAAPQABAPgOABQgLAAgEgIgAJrguQgBgPAPABQAOABABALQAAAQgPABIgBAAQgNAAAAgPg");
	this.shape_28.setTransform(99.1,99.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A9B6D9").s().p("AkCBrIgCAAIgGgBIgRgBIgBAAIgBgBQApgeA+gsIAbgTQAngZAdgSIAXAAIAGAAIAHAAIABABIhWA4IgTANIhnBFgAmTBeIgagDIgDAAIgJgBIgCAAIAAgBIgJAAIgPgCIgGgBIgFgBIgEAAQAdgVAkgXQBTg0A2ggIAVACIAGAAIAUACIAMAAIADAAIAGABIAMAAIACABIAFAAIAKAAIAMABIhzBJIheA7IgXgCgArFAyIg1gKQAehIA5hKIA2AMQBHAPBIALQgqBEgPBOQhXgMhXgQgApCAnQAAAEADAFQAGAIAHgBQAGAAAFgFQAEgFAAgFQgBgPgPAAQgPAAAAAOgABMggIAhgBIAugCIAIAAIAqgDIAGAAIAHgBIAUgBIAZgBIAlgDIAagDIAMgBIALgBQCdgQCjgdIAtgIIAxBNQjMAsjSASIgJAAQiBALiEAAgABtAGIABAKQADAIALAAQAOgBAAgPQgBgPgOAAIgBAAQgNAAAAANgAKwg0QAAAPANAAQAQgBgBgQQgBgLgOgBIgBAAQgNAAABAOg");
	this.shape_29.setTransform(92.2,99.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#38788A").ss(1.5,1,1).p("AjDhfQAWAHANAYQAHAOACAOQAAADAAADQABAIgCAIQAAACAAABQgBACAAACQgGATgRAMQgTANgWgIQgWgHgMgWQgHgNgCgOQAAgDAAgDQgBgIACgIQAAAAAAgBQABgEABgDQAFgUAQgLQATgOAWAHgAEFAbQAAADAAAFQAAAGgBAGQAAABAAAAQAAABAAAAQgBACAAABQAAADgBACQgHAVgSALQgWAOgYgIQgZgIgNgZQgGgKgCgKQgBgCAAgDACLAiQgBgHABgHQAAgDABgDQAAgBAAgBQAAgBABgBQAAgCAAgCQAFgWAUgNQAVgPAZAIQAZAIAOAZQAHALADAOAgIgNQABACAAADQAAADAAADQABACgBAEQAAAEgBAFQAAADAAACQgBAEgCADQgGATgQALQgVANgXgIQgXgIgNgYQgGgLgCgMQAAgCgBgDQAAAAAAgBQAAgBAAAAQgBgHABgGQAAgDABgDQAAgBABgBQAAgDABgBQAGgWAQgMQAUgOAYAIQAXAHANAZQAHALACALg");
	this.shape_30.setTransform(35.1,205.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#38788A").ss(1,1,1).p("AAJgdQAGABAFAEQACACACACQAGAGACAIQAAAFAAACQAAAFgBAEQgDAIgGAGQgDACgDACQgEACgEABQgFABgDAAQgDAAgDgBQgJgCgHgHQgJgKAAgMQABgNAKgJQADgEAFgCQAHgDAGAAQAEAAAEACg");
	this.shape_31.setTransform(135,173.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#38788A").ss(1.5,1,1).p("AgEA/QgZgCgRgSQgRgUABgYQABgaATgSQAMgLANgEQAKgDAJABQABAAABAAQAZACASATQASATgCAZQgBAagTASQgMAKgNAEQgKADgJAA");
	this.shape_32.setTransform(135.1,173.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#38788A").ss(1,1,1).p("AAJgdQAGABAFAEQACACACACQAGAGACAIQAAAFAAACQAAAFgBAEQgDAIgGAGQgDACgDACQgEACgEABQgFABgDAAQgDAAgDgBQgJgCgHgHQgJgKAAgMQABgNAKgJQADgEAFgCQAHgDAGAAQAEAAAEACg");
	this.shape_33.setTransform(133.6,157.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#38788A").ss(1.5,1,1).p("AgEA/QgZgCgRgSQgRgUABgYQABgaATgSQAMgLANgEQAKgDAJABQABAAABAAQAZACASATQASATgCAZQgBAagTASQgMAKgNAEQgKADgJAA");
	this.shape_34.setTransform(133.8,157.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#38788A").ss(1,1,1).p("AgfAAQABgNAKgKQADgDAEgCQAHgDAHAAQAEAAAEABQAGACAFAEQACACACACQAGAGABAIQABAEAAADQAAAFgCAEQgCAIgHAFQgDADgDACQgDACgEABQgFABgDAAQgDAAgDgBQgKgCgGgIQgJgJAAgMg");
	this.shape_35.setTransform(132,141.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#38788A").ss(1.5,1,1).p("AgEA/QgZgCgRgTQgRgTABgYQABgbATgSQAMgKANgEQAKgDAJABQABAAABAAQAZABARATQATAUgCAYQgBAbgUARQgLALgNAEQgKADgJgB");
	this.shape_36.setTransform(132.1,141.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#636980").ss(1.5,1,1).p("AOMjBIAVAYIAICgIAMBxQgMADgNADAuTBdQgRgDgQgFIADiCIAEiSIABAAIAjgXQABAAACABQF3BYFkAXQARABARABQCWAJCWgEQEPgGECguQBtgTBrgbAnahmQCZAVCVAKQCqALClgEQCBgDB/gNQB6gLB5gVQABAAACAAQAAAAAAAAQAOgDAOgCQAJgCAIgCIANgCALdh9QBZgRBYgWQAKgDAJgCAG2DDIgTkTAuTBdQDWAzDQAeQFRAwE/gIQCJgDCKgQQCQgOCNgaQASgEARgDAusi/QAQAEARAEQDcA0DVAdAuxgtQDIBCD+AWQAEhMANhFAL2CUQBUgRBSgV");
	this.shape_37.setTransform(95,247.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#38788A").ss(1,1,1).p("ADPgCQANACAIANQABACABADQABABAAACQAAABAAABQABAEAAAEQABAEgBAEQgBADAAADQAAAAgBAAQAAABAAABQgCADgCADQgDAEgFAEQgLAGgMgEQgNgEgHgNQgBgCgBgEQgBgBAAgBQgCgHABgHQAAgCAAgCQABgCAAgBQAAgBAAAAQABgDACgDQADgHAHgDQAKgGAMAEgAgkANQgBAEgDADQgCAEgEACQgLAIgMgFQgLgEgHgMQgBgBAAgBQgCgEgBgDQAAgBAAgBQgBgBAAgBQgBgEABgGQABgBAAAAQAAgEABgDQABgBAAgBQABgCACgCQACgEAFgEQAKgGAMAEQAMADAHANQAAAAAAABQABACABACQABADABACQABAFAAADQAAACgBAEQAAABgBABQAAADgBABAi1gvQACAEABADQABACAAABQABADAAADQABAEgCAGQAAADgBADQAAAAgBABQgDAIgHAEQgJAFgLgDQgMgDgGgMQgDgEAAgEQgBgCAAgCQgBgGABgGQABgEABgEQABgCAAgBQACgEADgDQACgBACgCQAGgEAHAAQAEAAAEABQAEABADADQAGAEAEAIg");
	this.shape_38.setTransform(34.7,205.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#4597A8").ss(1.5,1,1).p("AKYnqQAFAOADAKQAKAgAKAjQALAiAEASQAEASAOA0QABAGACAFQABAEABADQACAKADAKQAPA5AOA7QAKAsAKAtQAiCbAZCtQAFAeAEAfQACANACAOQABANACANQAFAnAFAoQAMBiAJBnQADAgACAgQABAKABAJQACAgACAgAOWR0QADBcACBeQgPAEgQAEQhzAbhyAVQjWAnjQAPQgqADgrACQjIAKjFgPQlegalLhlQAAg+AAg9QAAggABgfAuQMuQAHh8AJh2QABgEAAgEQABgNABgMQADglAEgkQAEgmAEglQAGgxAGgwQAtlcBSkeIAIgbQASg+AUg7QAIgVAHgUQAAgBABgBQAEgNAFgNQALgeAMgeQAEgJAYg5QAFgMAGgNQAMgaAMgbQAGgMAGgMIAzhkIABgDIAqhGAgF2fQAEgDACgCAJFq6IABACQADAGADAHQADAHAJAWIAGAQQAJAXANAgQAYA7AMAiAJRjmQBRgNA3gQIABAAAKlIOQBigRBegWAKeGkQBcgRBegVANbGYQheAThdAQQj6ArjuANIAAAAAH8tOQACADACADQAWAjAvBrAkbkoIAAAAIAAgWAkbkIIAAFYQEVAaETgjIgTkFIBVgJIALBuAFxhbIAAgBIgMhtQCGgMBigQIAAAAQACgBACAAAk3HhQAOABANABIABmTAkbkIIAAggAr0I/QAOAEAPADQAAAAABAAIAAgBApkJbQAOACAOACQAAAAABAAQANACAOACQABAAAAAAQAeAEAdADQABAAAAAAQAQACAPABAlWJ3QBTAEBaABIAAigQBiAFBdAAIABAAQAAgBAAgBABRHgQAWAAAVgBIAAABAC3HcQAvgCBEgFIgdmOAtuGHQD5BKE+AQAFnAjIAAgBAF/AgIAEAiIAAABAGRC/IAEAgIAAAAAGjFcIAMBsQB3gOB4gWAFnAjIADAiAFqAiQgCAAgBAAAAXH1QABACABADQgBAAgBAAQhTABhUgCIAAGnABRHgIAAAAQAAgBAAAAQAAgBgBAAIAAAAAAXHhQgBABAAABAKtMdQkXA0j6AHQhgAChZgEIgEkLQFRgEEtguQAkgFAkgGAB+H2IAAABAC3HdIAAgBQAAAAgBgBQAAAAAAgBAB+H2QgWABgWABAC3HcIAAAAAF6DiIgDggIAAAAAF7DCQgCAAgCAAAGRC/QgKADgMAAAGLFfQgCAAgCAAIAAAAIALBsQgoAFhAAGIAAgBALNOJQAFgBAFgBAlXKOQBVAGBYABIgIEJAlXJ1QAAABAAABIABAAAlXJ3QABABgBAAQABABAAABAnSKEQgPgCgQgBQgCgBgCAAQgZgDgagDQgBgBgCAAQgOgCgOgCQAAAAgBAAQgPgCgPgCArXJcIgBAAQgPgDgQgDAtiI8QgOgEgOgEQAAAAgBAAAnQKEQAAgBAAgCAtfIkQgPgFgPgEAKtMdQBngUBrgZALwSaIAAAA");
	this.shape_39.setTransform(95.6,144.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8B95B3").s().p("AimBDQiVgKiZgVQjVgdjcgyIghgIIAjgXIADABQF3BWFkAXIAiACQCWAJCWgEQEPgGECgsQBtgTBrgbIAVAYIgTAFQhYAWhZAPIgKACIgNACIgRAEIgcAFIAAAAIgDAAQh5AVh6ALQh/ANiBADIhZABQh5AAh9gIg");
	this.shape_40.setTransform(94.4,233.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#919BBA").s().p("AjqAcIAEiQIAAAAIAiAIQDaAzDVAeQgNBDgFBOQj7gXjIhDgACyAHIADAIQAFAKAIAAQAHAAAEgHQADgFAAgEQAAgPgPAAQgPABAAAMg");
	this.shape_41.setTransform(23.9,240.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6B738A").s().p("AHiB5QgCgEAAgEQAAgNANAAQAOgBAAAOQAAAFgEAEQgEAGgGAAQgHAAgEgHgAHVhSIgCgIQAAgOAQAAQAQAAAAAOQAAAQgPAAQgLAAgEgIgAn3hoIgDgIQAAgOAPgBQAOAAAAARQAAAEgCAFQgEAHgHAAQgIAAgFgKg");
	this.shape_42.setTransform(92.6,252.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A9B6D9").s().p("Al8B9QjQgdjWgzIghgIIADiCQDIBDD+AXQAEhOANhFQCZAVCVAKQCoALCngEQCBgEB/gMIATESQiKAQiJAEIhaABQkUAAkigqgAInCSIgTkSQB6gMB5gUIADgBIAAAAIAcgFQAOBPAIBbIAIBmQiNAbiQANgAJGBiQgNAAAAANQAAAEACAEQADAHAIAAQAGAAAEgGQAEgEAAgFQAAgNgNAAIgBAAgAIshcIACAIQAEAIALAAQAOAAAAgQQAAgOgPAAQgQAAAAAOgAIUiAg");
	this.shape_43.setTransform(83.7,252.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8692AC").s().p("AhpA8QgHhbgPhPIASgDIANgCIAKgCIAAAAQBXgRBXgWIAUgFIAHCfIANBxIgZAHQhTAVhRARIAAgBIAAABIgjAGIgJhmg");
	this.shape_44.setTransform(177.1,246.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#7EC2B3").s().p("AgMGKIAChTIAEh9QAAhWgDirQgDitAAhVQAAgcADgTQACgOAFgEIAIAFIAHAFIAAAAIAAAgIAAFaIAAGRIgZgBg");
	this.shape_45.setTransform(65.8,153.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#748F88").s().p("AhkC9IAAgTIAAgSQBlgTBrgaIACATIAEBAQhqAbhrATIgBgvgAhwi4IgBgQQBdgQBcgTIAKBPQhcAWhjARIgDhDg");
	this.shape_46.setTransform(174.3,209);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#91B3AB").s().p("ADuP0IgFiSIgBgQQBigRBegWQAMBjAJBmIAFBAQhrAahnATIgChtgAGRQWIACAHQADAGAJAAQAHAAAFgHQAEgFAAgEQAAgOgPAAQgPAAAAARgAF6NhQAAAEACADQADAHAIAAQAHAAAEgGQADgEAAgGQAAgOgOAAIgBAAQgMAAAAAQgADdKnIgFg9QgPisgXieIgOhZIgQhWIgEgUIAEgBQBRgNA4gQIAAAAIAFAUQAPA5AOA7IAUBZQAiCdAZCtIAJA9IAEAbQhdAVhcARIgFhBgAFqKVQgOAAAAAQIAAACIABAGQADAHAKAAQAMAAACgNIAAgFQAAgNgNAAIgBAAgAEGBjQgPACAAANQAAAFACAFQAEAIAIAAQAIAAAEgIQAEgFAAgGQAAgPgMAAIgDABgAnBxbIAHgFIADACQBoBGBbBcQgkALgkAHQg/hahGhXg");
	this.shape_47.setTransform(140.1,112.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#4597A8").s().p("AofQVIgBgFQABgPANABQANABgBANQAAAFgDADQgEAEgFAAQgKAAgDgHgAlHPAQAAgUAPABIAGABQAJACgBAMIgBAHIgCAFQgFAGgHAAQgOAAAAgOgAIMNoIgBgGQgBgRAPgBQAPABAAANQAAAEgEAGQgFAGgHABQgJAAgDgHgAomNUIgBgIQAAgSAPAAQAPAAAAAPQAAAGgDAFQgEAGgJABQgJgBgEgGgAlNMHQAAgVAPgBQAPgBAAASQgBAUgQAAQgNAAAAgPgAH1K0QgCgDAAgFQAAgPAOAAQANAAAAAOQAAAFgDAFQgEAFgGABQgJgBgDgGgAHXH4IgCgFIAAgDQAAgPAOAAQAOgBABAOIgBAFQgCANgMAAQgKAAgCgIgAA+gPIgCgHQAAgMAOgBQANAAAAAOQAAAFgDADQgDAEgHAAQgJAAgDgGgAFzg2QgDgFAAgFQAAgOAPgCQAPgCAAARQAAAFgDAGQgFAIgIAAQgHgBgEgHgAm8v/IgBgKQABgSAQAAQAQAAAAAQQAAAHgFAFQgFAIgIAAQgLAAgDgIg");
	this.shape_48.setTransform(128,130.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7DBFB1").s().p("ABnE1QiMm1kHl6QAkgHAlgKQBsBsBbCLIAOAUQAwBOAuBYIADAHQAWAiAvBpIABACIAGANIAMAdIAHARIAWA3QAXA7AMAhIAJAZIAUBCQAKAjAEASQAEARAOA1IADALIACAGIAAAAQg4AQhQANQgchtgihqg");
	this.shape_49.setTransform(138.5,68.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#84C9BA").s().p("AKhgIQj8AtkJAIQoDARoziAIABg+QDWAzDPAdQFSAwE+gHQCKgECJgQQCRgNCNgbIAjgGIAAAAQBTgRBTgVQADBbACBdIgfAHQhzAchyAVg");
	this.shape_50.setTransform(95.6,269.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A6FF69").s().p("AgFAgQgLgEgHgMIgBgCIgDgHIAAgCIgBgDQAAgDAAgGIABgBIABgHIABgCIADgEQACgEAFgEQAKgGAKAEQAMADAHANIAAABIACAEIACAFIABAHIgBAHIgBACIgBAEIAAABIgEAHIgGAGQgHAFgHAAQgCAAgFgCg");
	this.shape_51.setTransform(28.3,205);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B0E6DB").s().p("AlJAdIAMiMQE7BfFJAIIADB4QlwgNkjhGg");
	this.shape_52.setTransform(40.3,221.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CAFAEF").s().p("AkxB6IABgHQABgMgJgDIAJilQFMgGEQg0IAMC6Qj7A3jpAFIgrABQguAAgtgCg");
	this.shape_53.setTransform(128.6,214.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#CCFFF1","#A3FFFB"],[0,1],82,-506.9,199.9,-456.7).s().p("AsEgYIAFhMQHxCHImgSQDxgHD8gkIgDBHQj8AqjuALQhTADhRAAQnWAAmih9g");
	this.shape_54.setTransform(83.3,276.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#93E0D0").s().p("AhzVKQlfgalLhmIAAh7QIzCCIEgRQEIgJD8guIgJCLQjXAnjPAPIhVAFQhQADhPAAQh6AAh0gIgAsCS4QHpCUIzgZQDugLD8gqIADhIQj8AljxAIQonARnxiJgArxE0IAMhhQAtlcBSkeIAIgaIADgJQALgOAOAcIABAAQAGgFADgBQAFgDARAAQANAAAQAPQAQAPA5AAIBcgEQA4AABIAVQAnALATALIgKgFQgEAEgCAOQgDATAAAcQAABVADCtQADCrAABWIgEB9IgDBTQk+gQj5hLgAlPEOIADAAIgDgBgAiel7IAAAAQAKAIAAAHQAAANgKAEgAiel7IAAAAIAAAAgAiel7gAgzoPQg9gZimgCQhFgFhEgKQiHgUAAgWIgCgDIAJgZIAXg9IAdhCIAKgYIAYg1IAMgYIAzhkIACgDIAphHIAfgwIASgaQBgiLBzhrQCkAzCzgiQEGF5CPG3IgTAGQgcAHgRACQhJAFjEADQiIADhBAAQh1AAg5gZgAACzrIABAKQACAIALAAQAJAAAFgIQAEgGAAgGQAAgQgQAAQgQAAAAASgALyqZIgWg3IAaA9QAgBNAAAGIgBADQgMghgXg7gAJ9uaIgEgHQAMAQANAZQARAiAfBJQgvhrgWgig");
	this.shape_55.setTransform(83.1,152.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6FFF52").s().p("AAAAgIgDAAIgEgBQgJgCgGgHQgJgKAAgMQABgNAKgJIAHgGIAEgBQAGgCAEAAIAJACIAEABQAGADAEAEQAJAKgBAMQgBANgKAJIgBABIgDADQgIAFgJAAIAAAAg");
	this.shape_56.setTransform(133.6,157.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FF6969").s().p("AjOFuQgNgEgGgNIgDgHIgBgCQgCgGABgIIABgDIAAgEIABgBIACgFQADgHAHgEQAKgIANAEQANAEAHANIACAFIABAEIABACIABAIIgBAIIgBAFIAAABIgBACIgDAFQgEAFgFADQgGAEgIAAIgJgBgApkEuQgMgEgGgMQgCgEgBgFIgBgDQgBgHABgGIACgIIACgDQACgDADgDIADgDQAGgFAHABQAEgBAEACQAEABADACQAGAFAEAIIADAHIABADIACAFIgCAKIgBAGIAAABQgEAIgGAFQgHAEgGAAIgIgBgAJZANIgHgBQgJgDgGgGQgGgFgCgHIgBgKQABgNAKgJIAHgFQAHgEAJAAQAGABAEABQAIADAFAGQAJAKgBANIgBAHQgCAJgHAFIgEADQgIAFgKAAIgCAAgAI4ktIgGgBQgKgCgGgIQgJgKAAgNQABgOAKgJIAHgFQAIgEAIABIAIABQAGACAFAEIAEADQAGAHABAIIABAJIgCAJQgCAHgHAGIgGAFIgHADIgIABIgCAAg");
	this.shape_57.setTransform(75,175);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#609488").s().p("AjWGMQgZgIgNgaQgGgJgCgKIgBgFIgBgDQgBgHABgHIABgGIAAgCIAAgDIABgDQAFgYAUgOQAVgOAZAHQAZAIANAZQAIAOACAOIABADIAAABIAAAIIgBANIAAABIAAABIgBADIgBAFQgHAUgSAMQgOAJgPAAQgIAAgJgDgAjcEsQgHAEgDAHIgCAGIgBABIAAADIgBADQgBAIACAHIABACIADAGQAHANAMAEQANAEAKgHQAFgDAEgEIADgGIABgCIAAAAIABgGIABgIIgBgIIgBgCIgBgEIgCgFQgHgNgNgEIgJgBQgHAAgHAFgAngFoQgXgHgNgYQgGgLgCgMIgBgGIAAgCIAAgCIAAgNIABgFIAAgDIABAAIABgEQAGgVAQgMQAUgOAXAHQAYAHANAZQAHAMACALIABAEIAAAGIAAAIIgBAKIgBAEIgCAIQgHATgQAKQgMAJgOAAQgIAAgJgEgAnmELQgFAEgCAEIgDAEIAAACIgCAHIAAABQgBAGABAFIAAADIAAACIADAHIABACQAHAMAMAEQAMAEAKgHIAHgGIADgIIAAAAIABgEIACgDIAAgHIgBgIIgBgFIgDgEIAAgBQgHgNgMgEIgIgBQgHAAgHAEgApsFKQgWgHgNgYQgGgNgCgPIAAgGQgBgHACgIIAAgCIABgHQAGgTAQgLQATgOAWAHQAWAHAMAYQAIANACAPIAAAGQAAAIgBAIIAAADIgBADQgGAWgRALQgMAJgNAAQgIAAgIgDgApyDvIgDADQgDADgCAEIgCADIgCAHQgBAHABAGIABAEQABAEACAEQAGAMAMAEQALAEAKgHQAGgEAEgIIAAgCIABgGIACgKIgCgFIgBgDIgDgHQgEgIgGgEQgDgDgEgBQgEgBgEAAIAAAAQgHAAgGAEgAJVAsIgEAAQgXgCgRgTQgOgPgCgTIgBgJQACgbATgSQALgJAMgFQALgDAMABIAEAAQAYACAQASQASAUgBAaIAAAEQgCAWgTAQQgKAKgMAEQgKAEgKAAIgEgBgAJIgwIgHAFQgKAJgBANIABAKQACAIAGAEQAGAHAJACIAHABQALABAJgGIAEgDQAHgFACgJIABgHQABgNgJgKQgFgGgIgCQgEgCgGAAIgBAAQgIAAgHADgAJFhvIgEAAQgYgCgRgTQgRgTABgaQABgaATgTQAMgJANgFIAEgBQAIgBAJAAIADAAIAEABQAWADAPAQQATAUgCAaQgBAbgUARQgIAJgLAEIgEABQgJAEgKAAIgDgBgAI8jPIgEACIgIAFQgKAJAAAOQgBANAJAKQAHAIAJACIAEAAIADABQAKAAAIgFIAEgDIABgBQAKgJAAgOQABgNgJgKQgEgEgFgDIgEgCIgJgBIgCAAQgFAAgFABgAI0kOIgDAAQgYgCgRgTQgSgTABgbQABgaAUgSQALgKANgEQAKgDAMAAIABAAQAaACARATQASAUgBAaQgBAagUASQgLAKgOAEQgIADgKAAIgDAAgAInltIgHAFQgKAKgBANQAAAOAJAJQAHAIAJACIAGABIAKgBIAHgDIAGgFQAHgFACgIIACgJIgBgJQgBgIgGgGIgEgEQgFgEgGgCIgIgBIgCAAQgHAAgHADg");
	this.shape_58.setTransform(75.4,175.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B5E0D6").s().p("AiYCzIAAloIDxAYIi5AHIAFElID0Ang");
	this.shape_59.setTransform(99.4,216.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#99BDB5").s().p("AmeDvIAAmmQBTADBWgCIABAAIAAABIABABIABACIADAFQAEAFAFADQAMAHAMgEQAMgEAGgNIABgEIAtgCIAAAAIAAABIAAAAIABACIAEAGQAEAEAFAEQALAGAMgEQANgEAFgNIACgFIAAAAQDsgOD6gqIABAQIAEBCIhHAMQkuAulQADIADEKQBcAEBggDQD3gHEXg0IABATIAAATIAAAvQkCAukNAGIhVABQhsAAhtgGgAmADSIEyADIj2gmIgFkmIC8gHIjzgYg");
	this.shape_60.setTransform(122.7,213.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#7DA39B").s().p("ABCG+IAIkKQhXgBhVgFIACgNIgBgIIAAgDQBUAFBYABIAAifQBhAEBgAAIAAACIAAABIgBAIIACAJIAAAEQhVABhUgCIAAGoIgigCgAj7CgIgEAAIgzgHIgDAAIgcgEIgBAAIgegFIAAgEIACgKIAAgIIAbAFIABAAIAcADIABABIA7AHIABAAIAfADIgBAGQAAAHAAAHIgBADIgfgEgAoBB1IABgDIAAgDQACgIAAgIIAcAGIACAAIgBADIgBAFIAAANIAAACIgfgHgAqIBUIgBgBIACgZIAeAJIgCAHIAAACQgBAIAAAHIgcgHgAFIAVIAAgCQACgGgCgIIAAgEIgBgBIAqAAIAAAAIAAABIAAAIIACAIIABAFIgsACIAAgDgAJskcIAFgBQALABAKgEIAEAgIgEABQgMgBgKADgAJdm8IACAAQAMAAAKgDIAEAjIgEAAQgJgBgIACIgEABg");
	this.shape_61.setTransform(71.1,192.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#CCFFF3").s().p("AhZkGIBigZIBRIiIiCAdg");
	this.shape_62.setTransform(150.1,156.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A5CCC4").s().p("ANAKxIAAgBIAAABgAs8FGIgDgBQAGh8AKh2IACgIIAcAIIAAAGQACAOAGANQANAYAWAHQAWAIATgNQARgMAGgVIAeAGIABAAIAAADIABAFQACAMAGALQANAYAXAIQAXAIAUgNQAQgLAHgTIACgHIAeAEIACAAIAbAEIAEABIAzAGIAEABIAfADIACAAIABAFQACAKAGAKQANAZAZAIQAYAIAWgOQASgLAHgVIABgFIABgDIAAgBIAAgBQBVAGBYABIgHEJQlkgXl3hYgAiMGXIABAGQADAGAJAAQAGAAAEgEQADgDAAgFQAAgNgNgBIgCAAQgLAAAAAOgAshEzQEiBGFyAMIgDh6QlLgIk6hfgAiTDTIABAIQAEAHAJAAQAJAAAEgHQADgFAAgGQAAgOgPgBQgPAAAAASgAMnGeIAAAAIgKACIAKgCgAF6gSIgdmOIgTkHIBVgJIALBuQgNAEgLAKQgUASgBAbQgBAaASATQARATAYACIAAABIAEAiQgOAEgLAKQgTASgBAaQgBAbARATQARASAYADIAAAAIADAgQgMAEgLAKQgTASgCAaIABAKQACAUAOAQQARASAXADIAAAAIALBsIhoALg");
	this.shape_63.setTransform(87.6,193.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BAE6DC").s().p("AgMR6IgDkMQFQgDEuguIBHgMIABAQIAFCTIADBsQkYA0j5AHIhKABQg6AAg2gCgAAMRTQAAAPAOAAQAHAAAFgGIACgFQBCADBEgBQDrgFD7g4IgMi8QkQA0lPAGIgICnIgGgBQgPAAAAATgAAVOFQgPAAAAAWQAAAPAMAAQARAAAAgVQAAgQgNAAIgBAAgAlFOaIgBgBQgCgOgIgNQgNgZgZgIQgZgIgVAOQgUAOgFAYIAAAEIgBACIAAACIgfgDIgBAAIg7gHIgCAAIgbgEIgBAAIgcgEIAAgHIgBgEQgCgLgHgMQgNgYgYgIQgXgHgUAOQgQAMgGAVIgBAEIAAABIgCgBIgdgGIAAgGQgCgPgIgNQgMgYgWgHQgWgHgTAOQgQALgGAUIgegKIAHhIIAIhMQD6BLE+AQIAbABIAAmTQB3AMB3AAIAAAAIAAAAQCUAACVgSIAAAAIAHgBIAFgBIABAAIAEAAIAdGOIhyAHIBygHIAAAAIBogKIgLhsIAEAAQANAAALgEIAMBtQB3gOB5gWQh5AWh3AOIgMhtQAMgEAKgJQATgRACgYIAAgDQABgbgSgUQgQgSgYgCIAAgBIgEgfIAEgCQALgEAJgIQATgSACgaQABgbgTgTQgPgRgWgDIgDgBIgFgiQAOgEALgLQAUgSABgaQABgagSgUQgRgTgagCIgBAAQgMAAgKADIgLhuIhVAIIATEIIgEAAIgBAAIgFABIgHABIAAAAQiVASiUAAIAAAAIAAAAQh3AAh3gMIAAlaQAKgEAAgNQAAgHgKgGIAAgWIAAAWIAAAAIgIgFQgTgLgngLQhIgVg4AAIhcAEQg5AAgQgPQgQgPgNAAQgRAAgFADQgDABgGAFIgBAAQgNgcgMAOIgDAJQATg+AUg7IAOgqIABgCIACADQAAAWCHAUQBEAKBFAFQCmACA9AZQA7AZBzAAQBBAACIgDQDEgDBJgFQARgCAcgHIATgGQAiBqAbBsIgEAAIAAAAQhiARiGAMIAMBtIAAAAIAAAAIgMhtQCGgMBigRIAAAAIAEAVIAQBVIAOBaQAYCdAOCsIAFA+IAFBBQBcgRBdgWIADAaQheAUhdAQQj6AqjuAOIAAAAIAAgBIABgCQABgHgCgHIAAgEIgBgCIAAAAIABAAIgCgCIgDgGQgEgHgHgEQgLgHgMAEQgMAEgHANIgBAFIgBADIgqABIgBgDIgDgFQgEgHgHgEQgLgIgNAEQgMAEgGANIgCAFIAAACQheAAhigGIAAChQhZgBhUgFgAHXCRIAxIoICFgdIhSokgAGfBvQgOAAAAANIACAHQADAGAJAAQAHAAADgEQADgEAAgFQAAgNgMAAIgBAAgAH8g3IgBACIABAAIAAAAIAAgEIAAACgAjHvbQBghaBshDIAGgDQBGBWA/BbQhIAOhGAAQhmAAhjgfg");
	this.shape_64.setTransform(93.9,115.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#EFE16D").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_65.setTransform(144.7,109.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#ECCF60").s().p("AlaHwIABgDIABADIgCAAgAjgHhIABABIAAACgAjfHiIgBgBIABABgAjgHhIAAAAgAphHIIABgCIAAACgACNFNIABgCIAAACgAEuFIIgBgBIABABgAH6hQIAAAAIAEABIgEgBgAJhnuIAAgBIABABg");
	this.shape_66.setTransform(83.7,159.4);

	this.addChild(this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190,289.1);


(lib.teaspoonbakingpowder = function() {
	this.initialize();

	// body
	this.instance = new lib.XUFO("synched",0);
	this.instance.setTransform(130.6,275.2);

	// TEASPOON FR
	this.instance_1 = new lib.XTSPFR002("synched",0);
	this.instance_1.setTransform(292.4,289.6,1.05,1.05,0,0,0,-0.6,0);

	// BAKING SODA
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AEADB8").ss(3,1,1).p("AmYBsQgmjDDAgzQAOgEAOgBQAdhnBsgdQAKgCAKgCQAWgDAXAAQBRABA6ApQAzAjALA1QAVgMAagDQAbgEATAIQAhANAFAuQAFACAFACQAdAMAVAYQAVAZADAgQAIAagHA8QgDAUABAKQADAWAVgfQAABMg0ApQhWBCjtAAQhxAAizhVQg4gag4ggIgsgbQAAgCAAgDg");
	this.shape.setTransform(340.5,264);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E2E0E2").s().p("AlzCeIgCgBQgljDDAgzQAOgEAOgBQAchnBtgdIAUgEQh1BaAvB0QABAEAjAHQCBhNBKBXQAMANAIACQBEgvA3A9IAHALIgDAKQgSAFgOgPIgMgKQgNgJgRgBQgqACgYAhQgyhxiOBPIgLgEIgFABQhFgogxAjQgvAiAAA5IAGArQALApAWAAQAGAAACgCIADgFIACAAIAAgGIgCgEQAEgBAAgDIACgIIAAgKIAAgDIgBgCIAAgCIAMAOQAaAdApAIQBRANBQADIABAYIguAAIgSABQjBAAi0hJgADEBJIgCgMQAAgJAEgDQADgDAGgBIABgBQAGgHAOAFIACACIABADIAEAFQABACAAAHQAAANgIAGQgFAEgIAAQgOAAgFgLgAgCBBIgGgEQgDgDAAgLIAAgHIACgDQAMgEAIAEQAIAEAAAKIAAADIgBAHIgDADQgCACgIAAQgFAAgCgBgAFgATQAAgTAYAGIACADQACACAAAHIgDAIQgGAEgGABgAEMhKQAAgGAEgDQAGgGAPAEIABACQACACAAAHIgCAJQgGADgFABQgPgLAAgCgABvhXQAAgFAFgEQAHgIAMAFQAAABAAAAQABABAAAAQAAAAAAABQABAAAAAAQADACAAAHIgEAIIgKAFgABLiMIAAgKQAAgSAUgBQAVgCAAAUIgBAKIgBAGQgHADgNAAQgRAAgCgIgAABieQAAgTAYAHIACADQABACAAAHIgCAIQgFAEgHABQgNgLAAgCg");
	this.shape_1.setTransform(336.9,259.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBF7EC").s().p("Aj/DGQg4gag4ggIgsgbIACgEQC7BMDOgEIAsAAIgCgYQhQgDhQgNQgqgIgagdIgLgOIAAACIABACIgBADIABAKIgCAIQgBADgDABIACAEIgBAGIgBAAIgEAFQgBACgHAAQgWAAgKgpIgGgrQAAg3AugiQAyglBEAqIAQADQCPhRAyBxQAYgfApgCQASABANAJIALAKQAOANASgDIADgKIgGgLQg3g/hFAxQgHgCgNgPQhJhXiBBNQgjgHgCgEQguh0B0haQAWgDAXAAQBRABA6ApQAzAjALA1QAVgMAagDQAbgEATAIQAhANAFAuIAKAEQAdAMAVAYQAVAZADAgQAIAagHA8QgDAUABAKQADAWAVgfQAABMg0ApQhWBCjtAAQhxAAizhVgACpgDIgBABQgGABgCABQgEADAAAJIABAMQAFALAOAAQAIAAAGgEQAIgGAAgNQAAgHgCgCIgEgDIgBgDIgBgCQgGgCgFAAQgGAAgEAEgAgwgKIgBADIAAAHQAAAJACADIAGAEQADABAHAAQAHAAADgCIACgDIABgHIAAgDQAAgIgIgEQgDgCgGAAQgFAAgIACgAE5gcIAOAMQAFgBAHgEIACgIQAAgHgBgCIgDgDQgHgCgFAAQgMAAAAAPgADpiEQgDADAAAGQAAACAOALQAFgBAGgDIACgJQAAgHgBgCIgCgCIgKgCQgHAAgEAEgABNiRQgEAEAAAFIAOANIALgFIADgIQAAgHgCgCQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgFgCgEAAQgHAAgEAFgAA4jaQgUABAAASIAAAKQADAIARAAQAMAAAHgDIACgGIAAgKQAAgSgSAAIgDAAgAgkjPQAAACAOALQAGgBAFgEIADgIQAAgHgBgCIgCgDQgHgCgFAAQgNAAAAAOg");
	this.shape_2.setTransform(340.8,264);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C16E39").s().p("AigBEIACABIgCAEIAAgFgACRhHIAGgBIAKADg");
	this.shape_3.setTransform(315.7,268);

	// TEASPOON BK
	this.instance_2 = new lib.XTSP002("synched",0);
	this.instance_2.setTransform(292.4,289.6,1.05,1.05,0,0,0,-0.6,0);

	this.addChild(this.instance_2,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(47,211,347,129.1);


(lib.tablespoonsugar = function() {
	this.initialize();

	// body
	this.instance = new lib.XUFO("synched",0);
	this.instance.setTransform(130.6,275.2);

	// TABLESPOON FR
	this.instance_1 = new lib.XTBSP003FR("synched",0);
	this.instance_1.setTransform(292.4,289.6,1.05,1.05,0,0,0,-0.6,0);

	// SUGAR
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9EACBE").ss(3,1,1).p("AH3EMQAig2gDhJQgFhAgyhTQgyhUhNhXQgqgwgsgoQhDhGhQgmQhfgqhUAaQh8AthjBpQhuBuhSB1QhgCBA/CMQAsBnBxAQQCFAUCJADQB7ACB9gBQCTgDB/hHQAmgWAYgkg");
	this.shape.setTransform(353.2,261.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2E1F0").s().p("AhCGKQiJgDiEgUQhxgQgthnQg/iMBhiBQBRh1BuhuQBjhpB9gtQAFAOAJAPQAXAoAAAPQgBA1hkA3Qg3AdgPAMQggAZABAYQgBARAcANQAaALABAcQgBANgbAkQgbAkAAAcQgBANAfAgQAjAlAzAjQCPBhC2AHQCWAECKggQgYAkgmAWQh/BHiUADIhkAAIiUgBgAFagdQgKgBgDgJIgBgHQgBgQAPADQAFgBAFAEIABABIABAAQADAEAAAIQAAAEgDAEQgEAGgHAAIgBAAgADggrQgRgCgEgMQgCgDAAgEIgDgFIgBgHQgBgQAPACQAFAAAEADQAPADABAPIgBARQgCAJgIAAIgBAAgAgVhfQgFgIAAgFQAAgaAYgBQAVgDABAeQgBAFgFAJQgIALgIAAQgNAAgGgMgADZi7QgKgCgDgIIgBgHQgBgRAQADQANABABARQAAAEgDAEQgEAFgHAAIgBAAgAA0j8IgCgHQAAgRAPABQAPAAAAARQAAAEgDAFQgEAGgIAAIgBAAQgJAAgDgJgABAlSIgBgIQgBgRAPACQAOABABAQQgBAFgCAEQgEAGgIAAQgKgBgDgIg");
	this.shape_1.setTransform(351.7,262.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA9FbQizgHiShhQgzgigjglQgeghABgNQgBgbAcgkQAbgmAAgNQAAgbgbgLQgbgNAAgRQgBgYAhgYQAPgMA3geQBjg2ACg1QgBgQgXgoQgJgOgFgOQBWgaBfApQBOAmBDBGQAsApAqAwQBNBWAyBSQAyBWAFA/QADBKgiA2Qh5AciCAAIglgBgACiAIIACAHQADAJAKABQAIABAEgGQACgEABgEQgBgIgDgEIAAAAIgCAAQgEgEgFABIgEAAQgLAAAAALgAAbgUIABAHIADAFQAAAEACAEQAEAKASACQAIAAADgKIABgOQgBgPgQgEQgEgCgEgBIgDAAQgMAAAAAOgAirhPQgYACAAAZQgBAFAFAJQAHAMAMAAQALgBAIgKQAFgJAAgGQAAgbgUAAIgDAAgAAhiUIACAIQACAIAKACQAIAAAEgFQADgEABgFQgBgRgOgBIgEAAQgLAAAAAOgAh1jLIABAHQADAKALgBQAIAAAEgGQACgEABgFQgBgQgOgBIgCAAQgOAAABAQgAhpkiIACAIQACAIAKACQAIAAAEgGQADgFAAgFQgBgQgNAAIgEAAQgLAAAAAOg");
	this.shape_2.setTransform(368.6,256.8);

	// TABLESPOON BK
	this.instance_2 = new lib.XTBSP002("synched",0);
	this.instance_2.setTransform(292.4,289.6,1.05,1.05,0,0,0,-0.6,0);

	this.addChild(this.instance_2,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(47,211,371.6,134.3);


(lib.MeasuringCup = function() {
	this.initialize();

	// container
	this.instance = new lib.xmeasurecupfr("synched",0);
	this.instance.setTransform(242.7,190.1);

	// Layer 6
	this.instance_1 = new lib.xcornmeal("synched",0);
	this.instance_1.setTransform(262.4,252);

	// container
	this.instance_2 = new lib.xmeasurecupbk("synched",0);
	this.instance_2.setTransform(265.3,68,1,1,0,0,0,0,-0.9);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(49,52.3,387.6,262.5);


(lib.mixing_bowl = function() {
	this.initialize();

	// front
	this.instance = new lib.xbowlfront("synched",0);
	this.instance.setTransform(329.1,150.5);

	// back
	this.instance_1 = new lib.xbowlback("synched",0);
	this.instance_1.setTransform(329.1,136.8);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-16.8,662.6,307.3);


(lib.FryingPan_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xskilletz("synched",0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-279.8,-72,623.7,139.8);


(lib.FoodProcessor = function() {
	this.initialize();

	// fr
	this.instance = new lib.xfpfr2("synched",0);
	this.instance.setTransform(-3.1,-89.9,1,1,1.3);

	// bk
	this.instance_1 = new lib.xfptopbk("synched",0);
	this.instance_1.setTransform(-2.9,-96.2,1,1,1.3);

	this.instance_2 = new lib.xfpbody("synched",0);
	this.instance_2.setTransform(24.9,94,1,1,1.3);

	this.instance_3 = new lib.xfpbottom("synched",0);
	this.instance_3.setTransform(0.9,279.7,1,0.828,1.3);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-214.5,-165.4,467,548.1);


(lib.FINALcenterisland2 = function() {
	this.initialize();

	// top stuff
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6F9C5A").ss(0.5,1,1).p("AgSAEQABAAACAAQAIACAJAAQAKAAAHgCQAGgDAAgBQgCgCgHgCQgCAAgCAAQgHgCgGABQgLAAgGACQgHACABABQABACAFACg");
	this.shape.setTransform(422.1,55.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#84AD5A").s().p("AgSAEIgDgBIAPABQAIAAAHgCQAHgCgBgBQgBgCgFgCIAEABQAHABACADQAAABgGACQgHACgJABQgKAAgIgCg");
	this.shape_1.setTransform(422.4,55.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9EBE7C").s().p("AgPAFQgFgCgBgCQgBgBAHgCQAGgCAJAAQAJgBAHACQAFABABACQABABgHACQgHACgJABIgPgBgAgJgBQgBAAAAAAQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAABIAHABIAEgBQAAgBABAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAIgFgBIgGABg");
	this.shape_2.setTransform(421.7,55.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BFDE8F").s().p("AgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAFgBIAFABQABAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQgBAAAAAAQAAAAAAABQgBAAgBAAIgGABIgEgBg");
	this.shape_3.setTransform(421.4,55.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AAUAGQgLACgLAAQgNgBgIgCQgIgDABgCQABgCAKgCQAKgDALABQANAAAJADQAIACgBABQgBAEgKACg");
	this.shape_4.setTransform(422,55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CAC8C6").s().p("AgWAFQgJgDABgCQABgCAKgCQAKgDAMABQAMAAAJADQAIACgBABQgBAEgKACQgLACgLAAQgNgBgHgCg");
	this.shape_5.setTransform(422,55.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C66B94").ss(0.5,1,1).p("AAKgDQgGgBgFAAQgIABgGABQgFACABAAQABACAEABQAAAAAAAAQABAAABABQAHABAGAAQAJAAAFgCQAFgCAAgBQgCgBgGgCQgBAAgBAAg");
	this.shape_6.setTransform(427.9,48.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D687B7").s().p("AgPADIgBAAIALAAQAGAAAGgCQAFgBgBgBQgBgCgDgBIACABQAGABACACQAAABgFABQgFACgHAAIgEABIgLgCg");
	this.shape_7.setTransform(428.2,48.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EBC7DD").s().p("AgDABQAAAAgBAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIAEgBIAEABIADAAQAAAAAAAAQAAAAgBAAQAAAAAAABQgBAAAAAAIgFAAIgBABIgCgBg");
	this.shape_8.setTransform(427.3,48.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0A7CA").s().p("AgLAEIAAAAQgEgCgBgBQgBgBAFgBIAMgCIANAAQADABABACQABAAgFACQgGACgHAAIgFAAIgGAAgAgGAAQgBAAgBAAQAAAAAAAAQAAAAgBAAQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABQABAAABAAIAEAAIADgBQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIgDgBIgDAAIgEABg");
	this.shape_9.setTransform(427.6,48.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#9AB432").ss(0.5,1,1).p("AgQAEQABAAABABQAHABAJAAQAKAAAGgCQAGgCAAgCQgCgBgHgCQgCgBgBAAAgQAEQgBAAAAAAQgFgCgBgCQgBAAAGgCQAHgDAKAAQAGAAAHAB");
	this.shape_10.setTransform(425.2,53.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BDE89F").s().p("AgEABIgDgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAIAFgBIAFABIADAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgGABIgEgBg");
	this.shape_11.setTransform(424.5,53.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B5D764").s().p("AgNAFIgBAAQgFgCgBgCQgBgBAHgCQAGgCAJAAQAHgBAHACQAFABABACQABABgHACQgGACgJAAIgNAAgAgJgBQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIAEABIAFAAIAFAAQAAAAABgBQAAAAAAAAQABAAAAAAQAAAAgBAAIgCgBIgFgBIgGABg");
	this.shape_12.setTransform(424.9,53.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#A8CF49").s().p("AgSAEIgBAAIANAAQAIAAAHgDQAGgBgBgBQgBgCgFgBIADAAQAIACABACQABABgGACQgHACgIABQgKgBgIgBg");
	this.shape_13.setTransform(425.5,53.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#AEA340").ss(0.5,1,1).p("AgRADQABABACAAQAIACAIAAQAKAAAFgDQAHgCgBgBQgBgCgIgCQgBAAgCAAQgGgBgGAAQgKAAgGACQgGADABAAQAAACAFABg");
	this.shape_14.setTransform(427.1,51);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E1E99E").s().p("AgEACIgDgCQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIAFgBIAFABIADAAQAAAAAAAAQAAAAAAAAQgBAAAAABQgBAAAAAAIgGABIgEAAg");
	this.shape_15.setTransform(426.5,50.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CAD753").s().p("AgNAEQgGgBAAgCQgBgBAGgCQAGgCAIAAQAIgBAHACQAEABABACQABAAgGADQgHACgIAAQgIABgFgCgAgDgCIgFABQgBABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIADABIAGABIAEgBQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIgEgBIgCgBIgCAAg");
	this.shape_16.setTransform(426.8,50.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3C02E").s().p("AgRAEIgDgBQAGABAIAAQAIAAAHgCQAGgCgBgBQgBgCgFgBIADAAQAIACABACQABABgHACQgFACgJAAIgDAAQgIAAgGgBg");
	this.shape_17.setTransform(427.4,51);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#719F96").ss(0.5,1,1).p("AAIgDQABAAABABQAGABABABQAAABgEABQgFACgHAAQgGAAgFgBQgBAAgBAAQgEgCAAgBQgBAAAEgBQAFgCAHAAQAEAAAFAAg");
	this.shape_18.setTransform(427.1,46.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#83A7A7").s().p("AgMADIgCgBIAKAAIAKAAQAFgCgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIACAAQAGACABABQAAAAgEACQgFACgGAAIgMgBg");
	this.shape_19.setTransform(427.3,47);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#96B4B6").s().p("AgKADIgEgCQAAgBAAAAQAAAAABAAQAAAAABAAQABAAABgBQAEgCAGAAIALABQABAAAAABQABAAABAAQAAAAAAABQABAAAAAAQAAABgEACIgLAAIgKAAgAgGAAIgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAABIAEAAIADAAIABgBIgCAAIgDgBIgEABg");
	this.shape_20.setTransform(426.8,46.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BED1D1").s().p("AgCABQgBAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAAAIACAAIADAAIADAAIADAAIgCABIgEAAIgCAAg");
	this.shape_21.setTransform(426.6,46.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AAPAEQgIACgIgBQgKAAgGgCQgGgCAAgBQABgCAIgCQAIgBAIAAQAKABAHABQAGACgBABQgBACgIACg");
	this.shape_22.setTransform(427.1,47.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CAC8C6").s().p("AgBAFQgKAAgGgCQgGgCAAgBQABgCAIgCIAQgBIARACQAGACgBABQgBACgIACQgGACgIAAIgCgBg");
	this.shape_23.setTransform(427.1,47.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AgQgEQAJgCAJABQALAAAHACQAIACgCABQgBADgIACQgJACgJgBQgMAAgGgCQgIgCABgCQACgCAIgCg");
	this.shape_24.setTransform(427.9,49.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CAC8C6").s().p("AgBAGQgMAAgGgCQgIgCABgCQACgCAIgCQAJgCAJABQALAAAHACQAIACgCABQgBADgIACQgHABgJAAIgCAAg");
	this.shape_25.setTransform(427.9,49.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AASAFQgJACgKAAQgMgBgIgCQgIgDABgBQABgDAKgBQAJgCAKAAQAMAAAIADQAIACgBABQgBADgKACg");
	this.shape_26.setTransform(427.1,51.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CAC8C6").s().p("AgVAEQgIgDABgBQABgDAKgBQAJgCAKAAQAMAAAIADQAIACgBABQgBADgKACQgJACgKAAQgMgBgIgCg");
	this.shape_27.setTransform(427.1,51.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#9DA89B").ss(0.5,1,1).p("AASAFQgJACgKAAQgMgBgIgCQgIgDABgBQABgDAKgBQAJgCAKAAQAMAAAIADQAIACgBABQgBADgKACg");
	this.shape_28.setTransform(425.2,53.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#CAC8C6").s().p("AgVAEQgIgDABgBQABgDAKgBQAJgCAKAAQAMAAAIADQAIACgBABQgBADgKACQgJACgKAAQgMgBgIgCg");
	this.shape_29.setTransform(425.2,53.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#BCB1B1").ss(0.7,1,1).p("AgTAKQABAFADAEIAjAAQADgJgCgIQgBgIgIgMIgYABQgMAOAFANg");
	this.shape_30.setTransform(220.6,69.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#CBD3B4").s().p("AgQAIQgDgEgBgEQAXAAAHgCIALgFQABAHgDAIg");
	this.shape_31.setTransform(220.7,70.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D6DEC6").s().p("AgTAOQgFgOAMgNIAYgBQAIAMABAIIgKAFQgGAEgPAAIgJgBg");
	this.shape_32.setTransform(220.6,69.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#D3D3C5").ss(0.7,1,1).p("Al+gJQApACAqADQFNAQFdADIgCgGQlggClIgRQglgCglgCg");
	this.shape_33.setTransform(200.9,68.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#D3D3C5").ss(1,1,1).p("AG8AGIAHAXQl3gCl0gUQg9gDg9gEQgQAAgQAAIAngcQA5ADA6ADQFoASF5ABg");
	this.shape_34.setTransform(200.7,68);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C6BBB9").s().p("AkrgEIhTgFIAJgFIBKAEQFIARFgACIACAGQldgDlNgQg");
	this.shape_35.setTransform(200.9,68.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A7C8CF").s().p("AF7AOIAAgCIAFgBQAFAAAAACQAAACgFAAIgFgBgAFFAOIAAgCIAFgBQAFAAAAACQAAACgFAAIgFgBgAESAMIAAgBQAAgCAFAAQAFAAAAACQAAACgFAAIgFgBgADjALQAAgCAHAAQAGAAAAACQAAACgGAAQgHAAAAgCgACyAMIAAgCQAAgBAAAAQAAAAABgBQAAAAABAAQABAAABAAQAFAAAAACQAAACgFAAIgEAAgACAAKQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgCAGAAQABAAABAAQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIgFgBgABTAJQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgCAGAAQABAAABAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIgFgBgAAlAIIAAgBQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAQAFAAAAACQAAACgFAAIgEgBgAgGAGIAAgBQAAgBAAAAQAAAAABAAQAAgBABAAQABAAABAAQADAAAAACQAAACgDAAIgEgBgAg/ACQAAgBAGAAQAGAAAAABQAAACgGAAQgGAAAAgCgAhuACIgBgCQAAAAAGAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAADgEAAIgFgBgAihAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgCAGAAQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAgBAAQgBAAgBAAgAjSAAIAAgDIAEAAQAFAAAAACQAAABgFAAIgEAAgAkIgEQAAgCAGAAQABAAABAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAQgGAAAAgCgAkygGIAAgCIAEgBQAFAAAAACQAAACgFAAIgEgBgAlcgHIAAgCQAAgCAFAAQAFAAAAACQAAACgFAAIgFAAgAmDgKQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBQAAgCAFAAQABAAABAAQABAAABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQgBAAgBAAIgEAAg");
	this.shape_36.setTransform(200.6,69);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F3F2F1").s().p("Ak4ACIh6gEIAbgVIBfAFQFpASF7ABIAHAXQl3gCl0gUgAFqARIABACIAEAAQAGAAAAgCQAAgBgGAAgAE0ARIABACIAEAAQAGAAAAgCQAAgBgGAAgAEBAQIABABIAEABQAFAAABgCQgBgCgFAAQgFAAAAACgADTAQQgBACAHAAQAGAAAAgCQAAgCgGAAQgHAAABACgAChAPIAAABIAFABQAEAAAAgCQAAgCgEAAQgCAAAAAAQgBAAgBAAQAAAAgBABQAAAAAAABgABvAOQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIAEABQABAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBgBAAQgGABABACgABCANQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAABAAIAEABQABAAABgBQABAAAAAAQABAAAAgBQABAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgGAAABACgAAUALIAAACIAFABQAEAAABgDQgBgBgEAAQgCAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAgAmMgLIBUAEQFNARFdADIgDgGQlggDlHgQIhLgFgAgXAJIAAACIAEAAQAFAAABgBQgBgCgFAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAAAgAhQAHQAAACAGAAQAGAAAAgCQAAgCgGABQgGgBAAACgAh/AFIAAACIAFAAQAEAAAAgCQAAAAAAgBQAAAAgBAAQAAAAgBAAQgBAAgBAAQgFAAAAABgAizADQAAAAABABQAAAAAAAAQAAAAAAAAQAAABAAAAIAFAAQABAAABAAQABAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAQgFAAgBACgAjjAAIAAADIAEABQAGgBAAgCQAAgBgGAAIgEAAgAkYAAQAAAAAFAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgFAAAAABgAlDgDIAAACIAFABQAEAAAAgCQAAgCgEAAIgFABgAltgEIABACIAEAAQAGAAAAgCQAAgCgGAAQgFAAAAACgAmVgHQAAAAAAABQAAAAAAAAQAAAAABAAQAAAAAAAAIAFABQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQgBAAgBAAQAAAAgBAAQgGAAAAACg");
	this.shape_37.setTransform(202.3,68.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#ECE9E8").s().p("AklgBIhfgFIgbASIgfgCIAmgaIBzAFQFoARF5ABIADALQl6gDlqgQg");
	this.shape_38.setTransform(200.3,66.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#50689E").ss(0.5,1,1).p("AAngDQABAAAAgBQAAgCgMgCQgMgBgQAAQgPAAgMABQgMACABACQgBABABAAQACACAJABQAMAAAPAAQAQAAAMAAQAIgBADgCgAgmgDIAGAJQAdAHAjgGIAHgK");
	this.shape_39.setTransform(169.4,60);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#7A94B8").s().p("AgbADQgJgBgCgCQgBAAABAAQgBgBAMgBQAMgCAPAAQAQAAAMACQAMABAAABIgBAAQgDACgIABQgMACgQAAQgPAAgMgCg");
	this.shape_40.setTransform(169.4,59.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6A86AE").s().p("AggADIgGgJQACACAJABQAMACAPAAQAQAAAMgCQAIgBADgCIgHAKQgRADgPAAQgRAAgPgEg");
	this.shape_41.setTransform(169.4,60.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("ABGAAQAAAFgVADQgVAEgcAAQgbAAgVgEQgVgDAAgFQAAgEAVgDQAVgEAbAAQAcAAAVAEQAVADAAAEgAA2AAQgBACgQACQgPACgWAAQgVAAgQgCQgPgCAAgCQAAgCAPgDQAQgBAVAAQAWAAAPABQAQADABACg");
	this.shape_42.setTransform(169.2,61);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#A4A9A3").s().p("AglAFQgQgCABgDQgBgBAQgDQAQgCAVAAQAWAAAPACQAQADAAABQAAADgQACQgPACgWAAQgVAAgQgCg");
	this.shape_43.setTransform(169.2,60.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#DBDFDB").s().p("AgwAJQgVgFAAgEQAAgEAVgDQAVgEAbAAQAcAAAVAEQAVADAAAEQAAAEgVAFQgVADgcAAQgbAAgVgDgAglgFQgPADAAACQAAACAPACQAQACAVAAQAWAAAPgCQAQgCABgCQgBgCgQgDQgPgBgWAAQgVAAgQABg");
	this.shape_44.setTransform(169.2,61);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#4B824A").ss(0.5,1,1).p("AgfgCQgBAAABgBQgBgCAKgBQAKgBAMAAQANAAAKABQAKABAAACQAAABgBAAIgGAIQgdAFgXgGgAAggCQgCABgHABQgKAAgNAAQgMAAgKAAQgIgBgBgB");
	this.shape_45.setTransform(173.8,55.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#69A868").s().p("AgWADQgIgCgBgBIAAAAQgBgBAKgBQAKgBAMAAQANAAAKABQAKABAAABIgBABIgJACQgKABgNAAQgMAAgKgBg");
	this.shape_46.setTransform(173.8,55.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#549254").s().p("AgaADIgFgIQACACAHABQAKABAMAAQANAAAKgBIAJgCIgFAHQgPADgMAAQgOAAgMgDg");
	this.shape_47.setTransform(173.8,56.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AAoAGQgRAEgXAAQgXAAgQgEQgSgDAAgDQAAgDASgDQAQgDAXAAQAXAAARADQASADAAADQAAADgSADgAAeADQgMACgSAAQgRAAgNgCQgNgCAAgBQAAgCANgCQANgBARAAQASAAAMABQAOACAAACQAAABgOACg");
	this.shape_48.setTransform(173.8,56.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A4A9A3").s().p("AgeADQgNgBAAgCQAAgBANgCQANgBARgBQARABANABQAOACAAABQAAACgOABQgNACgRABQgRgBgNgCg");
	this.shape_49.setTransform(173.8,56.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#DBDFDB").s().p("AgoAGQgQgCgBgEQABgDAQgDQARgDAXAAQAXAAARADQARADABADQgBAEgRACQgRAEgXAAQgXAAgRgEgAgegDQgNACAAABQAAABANACQANACARAAQARAAANgCQAOgCAAgBQAAgBgOgCQgNgCgRAAQgRAAgNACg");
	this.shape_50.setTransform(173.8,56.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#B33C3C").ss(0.5,1,1).p("AgZgBIAAgBQAAgBAIgBQAIgBAJAAQALAAAIABQAHABABABQgBABAAAAIgFAGQgXAEgTgFgAAagBQgCABgFAAQgIAAgLAAQgJAAgIAAQgHAAgBgB");
	this.shape_51.setTransform(178.2,52.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C65354").s().p("AgVACIgEgFIAIACIARABIATgBIAHgCIgFAGQgMABgJAAQgLAAgKgCg");
	this.shape_52.setTransform(178.1,52.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CE6C6C").s().p("AgSACIgHgCIgBAAQABAAAHgBIASgBIATABQAHABAAAAIgBAAIgGACIgTABIgSgBg");
	this.shape_53.setTransform(178.2,52.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AAAAEQgOAAgKgCQgKgBAAgBQAAgBAKgBQAKgCAOAAQAPAAAKACQAKABABABQgBABgKABQgKACgPAAgAAAAIQgSAAgOgDQgNgCAAgDQAAgCANgCQAOgDASAAQATAAAOADQANACAAACQAAADgNACQgOADgTAAg");
	this.shape_54.setTransform(178,53);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#A4A9A3").s().p("AgYADQgLgCAAgBQAAgBALgBQAKgBAOAAQAOAAALABQAKABABABQgBABgKACQgLABgOAAQgOAAgKgBg");
	this.shape_55.setTransform(178,53);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DBDFDB").s().p("AggAFQgNgCAAgDQAAgCANgCQAOgDASAAQATAAAOADQAOACgBACQABADgOACQgOADgTAAQgSAAgOgDgAgYgCQgKABAAABQAAABAKABQALACANAAQAOAAALgCQAKgBABgBQgBgBgKgBQgLgCgOAAQgNAAgLACg");
	this.shape_56.setTransform(178,53);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#D3D3C5").ss(1,1,1).p("AiBA4IgegBICph2ICWAAIgGAIIhjB3g");
	this.shape_57.setTransform(170.5,57.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#ECE9E8").s().p("AifA6ICph1ICWAAIgGAIIiCABIiZBug");
	this.shape_58.setTransform(170.5,57);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F3F2F1").s().p("AiNA0ICZhuICCgBIhjB3g");
	this.shape_59.setTransform(171.7,57.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AheAAICrAKQhhAIhKgSgAhAgJICfAIQhHgPhYAHg");
	this.shape_60.setTransform(111.8,55.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#D3D3C5").ss(1,1,1).p("AP/g6IgxgGQBjgGAvgLQAVgFAKgFQAFgCACgDIIHAKQACAFABAGQACAQgIAOQgSAgg+AZgAcdhNQgDgDgKgHIhjABQApA7h3AsIAYADAcdhNQBCAziBA8IhngOASIhOIgogDAaKgtIoCghA4PgBIgygDIjxA2QAZADAZACA5BgEICxgqQAaABAZAAQDRADCqAMIgNAHIhaAuIiKBKQkygRj7gZA4PgBIHGAY");
	this.shape_61.setTransform(249.4,54.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#DBDFDB").s().p("AheAAICrAKQgeACgcAAQg9AAg0gMgAhAgJQBYgHBGAPg");
	this.shape_62.setTransform(111.8,55.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F3F2F1").s().p("A8ZA0IDwg4IHHAYInHgYICTgkIGOAOIhaAuIiLBKQkxgRj7gZgA0rAPIisgKQBJASBjgIgA25gEICgAGQgvgIg4AAQgcAAgdACgAZeARQB4g2gigrIBQgBQBCA0iBA8gAPmg9QBNgGAngJIAVgFIICAhIoCghIALgFIALgHIHyAPQACAQgIAOQgSAgg+AZg");
	this.shape_63.setTransform(251.9,55.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#ECE9E8").s().p("A8nBHIDxg4IAyACIjxA7IgygFgAZqAlQB3grgpg7IBjgCIANAKIhQABQAiArh4A2gA42APICxgoIAzABQDRADCqAMIgNAHImOgOIiSAhgA42APgAPZgrQBjgHAvgKQAVgFAKgFIAHgFIIHAJIADAMInygPIgLAHIgLAFIgogDIAoADIgVAFQgnAJhNAGg");
	this.shape_64.setTransform(248.3,52.8);

	// Layer 12
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["rgba(121,193,171,0.2)","rgba(206,205,57,0.2)"],[0,1],-167.2,0,216.2,0).s().p("AL6B6IlDAAIhmi8ICYgCIDugBQCYgBCggIIOvB6QjPA1nnAOIitAGQiVAFivAAIgdAAgAEXB5IkTgEQmQgKnVgcIE0iRQGEADFpgCIBggBIBXC7IhgAAgA5cAeIhxgJIhNgIIIMhWQBPgCAvAAQC3gBDSAEICmAEIk9CQQlegTlggbgARZhSIAIgBIAWgBIABgBQDLgOAlgWIK2AMQA8AdgDAiIgBAHQgQAnhYAegA9jAGQiJgLgmgHQgmgGgVgFQgWgFAcgJQAcgICVgKQCVgJCUgFQBogECaAAInyBQIgGgBg");
	this.shape_65.setTransform(214.3,56.2,1,1,0,0,0,-9.8,-2.8);

	// top
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#D3D3C5").ss(1,1,1).p("EAhvgDAQAHAFAHAFQABABABABQAPAMAJAOQAIANACAPQAAACAAADQAAACAAADQAAAFgCAFQAAAAAAABQAAACgBACQgCAFgDAGQgBACgBADQgUBYh9AwQkABUmVAcQgDAAgCAAQ3TCR/QkoQhRgPgMgQIgLhMQgBgBAAAAQAAgCAAgCQAHgUCvgRQA/gHBGgFQARgBASgBQAMgBANgBQA1gDA3gDQAvgCAwgCQAngBApgBQAQgBAQAAQCHgECWAAQAFAAAEAAQAhAAAhAAQCzAADIAFQAJAAAKAAQBvACBvACIAAAAQAFAAAEAAQBjACBjABQD/ADD7AAQBLgBBKAAQAGAAAFAAQA6AAA6gBQBqgBBogBQAdgBAeAAQAUgBAUAAQCbgDBygFQACAAACAAQAMgBALAAQAOgBAOgBQCTgJBBgOQAUgFAMgFQAAgDgBgCEAiegBlIADgUEAiXgBVQgBABgBACQgBABgBABQAAAAAAAAQgBABAAABIgCACQgLAOgSAMQgfAWg0ASQgFACgGACQiKAtkVAaQjAASkCAJQh/AEiOACQhoAChvAAQgnAAgnAAQhkgBhrgBQgEAAgEAAQh6gBiCgDQgcAAgcgBQlCgJlfgTQiugKi1gMQgCAAgCAAQgZgCgZgCQh7gIh/gKQhZgHhbgHQg+gGhAgDQh2gKh4gLQgDAAgCgBQghgDgfgDQgjgDgggDQgEgBgEAAQgLgCgKgBQkHgdgVgZQgBAAAAgBAQJipIADAAAU5jSQgEADgFACAVeh1IlSg0AVeh1ILCBrAFygrIASAtIAWA2IARAqAFEicIAuBxApNiFIAzgcApNiFIjEBtIh8BDAzPipIAHgBA9ogmIgFABA4PhqIhTAQIiSAdIh0AXA3Ah6IhPAQA3Ah6IDxgv");
	this.shape_66.setTransform(222.5,65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E1DFD9").s().p("EggyAAMQhRgPgMgQIgLhMIABABQAVAZEGAdIAWADIAIABIBCAGIBAAGIAGABIDuAVIB+AJIC0AOID5ASIAzAEIAEAAQC1AMCuAKQFfATFBAJIA5ABID8AEIAIAAIDPACIBNAAIDXgCQCPgCB+gEQEDgJDAgSQEUgaCLgtIALgEQA0gSAfgWQASgNALgNIACgCIAAgCIABAAIABgCIADgDQgVBYh8AwQkABUmVAcIgGAAQnqAwohAAQxZAA0+jHgAU0jSIAKAAIgJAFIgBgFg");
	this.shape_67.setTransform(222,65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E9E8E2").s().p("AKCCbIjPgBIgIAAIgRgrIvni8IAzgcIgzAcIirghIDeAFIAAAAIAJAAIgBABIOXChIAVA2IgVg2IIiBhIjXABIhOAAgAFyALIguhwIALAAIB1gBIOaAoILCBqIgKADQiLAvkVAaQjAATkCAIgAuNBiIB8hFIh8BFIgEAAIgygDIj5gTIkDiOIDwgwIAHgBIBCAAIF1CQIDnBbQiugJi1gNgA3uA0Ih0hWIBTgRICfBxIh+gKgAGFA5gEAggAAsgAVeg+IM3AjIgCACIAAABIgBABIgCACQgLAOgSAKQgfAWg0ATgA7iAeIhAgGIhDgHIgDgCIB1gVIh1AVIgFABIgVgCQkHgbgVgZIgBgCIgBgBIAAgDQAHgUCvgSQA/gGBGgFIAjgDIAZgBIA2BbIAWAkIgFAAgAlLhnQD/ADD7AAICVgBIAuBwgA5igiIhahFIBfgEIBOA4IhTARgA4OhuIAggBQCHgECWAAIACABIjwAwgAQMhyIgDAAIADAAIgHAAIAEAAIAXgBIAcgCIRbASQAJAOABAOgAFEhlgAzPhygAUQiMQAUgFAMgFIAJgEIM2ARIAOALIACABg");
	this.shape_68.setTransform(222.5,59.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F3F2F1").s().p("ADJAzIgSguINBCIQh+AEiPACgAgLCPIg4gBQlDgJlfgTIjnhbIDEhqIPnC8IARAqIj7gEgA4sA4IiehxIBPgQIEDCPIi0gOgArOhuIACgBIDFACIK+ByIASAugA+ZAYIgWgkICSgcIBzBVIjvgVgA1Ch5QC0AADHAFIAUAAICrAhIjEBqgAC3AFgA/lhnIBtgGIBbBFIiSAcgASjhEIlSg0IFSA0IubgoIDSgCIA6gBIApgBQCbgCBygGIAHAAISUArIABAFIAAAFIgCAKIAAABIgBAEIADgUIgDAUIgFALIgDAFIgCADgA8ZhyIBQgCIBOArIhPAQgAsIhTgAOBh7QCSgJBBgOINvAPQAQANAIANg");
	this.shape_69.setTransform(241.2,60.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F8F7F5").s().p("AlRBCIAFgBIADACIgIgBgAFJhBIAJAAIgHABg");
	this.shape_70.setTransform(66.1,54.5);

	// extras
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#719F96").ss(0.5,1,1).p("AANAOQAFgEACgHQABgGgEgHQgFgHgJgBQgEgCgGADAANAOQgBABgBABQgHAEgHgBQgIgCgFgHQgFgGACgHQACgIAHgEQACgBABgB");
	this.shape_71.setTransform(298.2,129.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#83A7A7").s().p("AAAATQgHgDgFgGQgFgHACgGQABgIAIgFIADgCQgFAFgBAGQgCAHAFAGQAEAHAGACQAHABAGgDIgDACQgFAEgIAAIgBAAg");
	this.shape_72.setTransform(297.8,129.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#96B4B6").s().p("AAAARQgIgCgFgGQgFgHACgGQACgHAEgEQAGgDAEACQAJABAFAHQAEAHgBAGQgCAHgFAEQgEACgEAAIgCgBgAAAgHQgDACgBACQAAADACABQACACABABQADABADgCQADgBAAgCQABgCgCgCQgCgDgDAAIgDgBIgBABg");
	this.shape_73.setTransform(298.5,129.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#BED1D1").s().p("AAAAGQgDgBgCgCQgCgDABgBQAAgCADgCQADgBABABQAEAAABADQACACgBABQAAADgDABIgEACIAAgBg");
	this.shape_74.setTransform(298.7,129.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#6F9C5A").ss(0.5,1,1).p("AASALQAEgGgBgGQgBgJgHgGQgHgGgHABQgHABgFAEQgBACgCABQgFAHABAHQABAKAGAFQAIAGAHAAQAIgCAGgHQACgBAAgBg");
	this.shape_75.setTransform(302.9,101.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#84AD5A").s().p("AgLAOQgHgGgBgIQgBgJAGgGIADgDQgDAGAAAHQABAHAHAGQAGAGAIgBQAHgBAFgEIgCADQgGAHgJABIgBAAQgGAAgHgFg");
	this.shape_76.setTransform(302.8,101.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#BFDE8F").s().p("AgEAFQgCgCgBgDQAAgBACgCQADgDACAAQADgBACADQADABAAADQABABgDADQgCADgDAAIgBAAQgBAAgDgCg");
	this.shape_77.setTransform(303.4,100.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#9EBE7C").s().p("AgKAOQgHgHgBgHQAAgHADgGQAFgEAHgBQAHgBAHAGQAHAGABAHQABAIgEAGQgFAEgHABIgDAAQgFAAgGgFgAABgJQgBAAgDADQgCACAAADQABABACACQACADADgBQADAAACgDQADgBgBgDQAAgDgDgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAgBAAIgBAAg");
	this.shape_78.setTransform(303.2,100.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#C66B94").ss(0.5,1,1).p("AgMgOQgBABgBABQgGAHABAGQABAJAGAFQAHAFAGAAQAIgCAFgGQACgBABgBQADgGAAgFQgBgIgHgGQgGgFgHABQgGABgFAEg");
	this.shape_79.setTransform(299.7,120.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EBC7DD").s().p("AgDAFQgDgDAAgCQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQABgDADAAQACAAACACQADABAAADQABABgDADQgBACgEABQgBAAgCgCg");
	this.shape_80.setTransform(300.1,119.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#E0A7CA").s().p("AgKANQgGgGAAgHQgBgGACgFQAGgEAGgBQAGgBAGAFQAHAGABAGQABAHgEAGQgEADgHABIgCAAQgFAAgGgEgAAAgIQgBAAgCADQAAAAgBAAQAAABAAAAQgBABAAABQAAAAAAABQAAABADACQACACACAAQADAAACgDQACgBAAgCQAAgDgDgBQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIgBABg");
	this.shape_81.setTransform(300,120.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#D687B7").s().p("AgKANQgHgGAAgHQgBgIAFgGIACgDQgCAGABAHQAAAGAGAGQAGAEAHAAQAHgBAEgEIgCADQgFAGgJACQgGgBgGgEg");
	this.shape_82.setTransform(299.6,120.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#AEA340").ss(0.5,1,1).p("AgMgOQgBABgBACQgFAGAAAHQABAIAHAGQAGAEAGAAQAJgBAFgGQACgCAAgBQAEgFgBgFQgBgJgGgFQgHgGgHABQgGABgFAEg");
	this.shape_83.setTransform(301.4,110.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#B3C02E").s().p("AgKANQgGgFgBgIQgBgHAGgHIACgDQgDAGABAHQABAGAGAGQAFAFAHgBQAHgBAFgDIgCACQgGAGgIACQgGAAgHgFg");
	this.shape_84.setTransform(301.2,111.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E1E99E").s().p("AgDAFQgDgCAAgDQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAABgBQACgCACAAQADgBACACQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQABABgCADQgCACgDABIgEgCg");
	this.shape_85.setTransform(301.8,110.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#CAD753").s().p("AgJANQgGgGgBgHQgBgGADgGQAFgEAGAAQAGgBAHAFQAHAGAAAGQABAHgDAGQgFADgHABIgBAAQgFAAgGgEgAABgIQgBAAgDACQAAABgBAAQAAABAAAAQgBABAAABQAAAAAAABQABABACACIAEACQAEgBABgCQADgBgBgDQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAg");
	this.shape_86.setTransform(301.6,110.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AAlAAQAAAPgLALQgLAMgPAAQgOAAgLgMQgLgLAAgPQAAgOALgLQAMgLANAAQAQAAAKALQALALAAAOgAAbAAQgBAKgHAIQgIAHgLAAQgIAAgHgHQgIgIABgKQAAgJAHgIQAIgHAIAAQAKAAAIAHQAHAIABAJg");
	this.shape_87.setTransform(297.9,129.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#A4A9A3").s().p("AgRASQgHgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQgBAKgHAIQgIAHgJAAQgJAAgIgHg");
	this.shape_88.setTransform(298,129.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#DBDFDB").s().p("AgZAaQgLgLAAgPQAAgOALgMQAMgLANABQAQgBAKALQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgLgLgAgPgRQgHAHAAAKQgBAKAIAHQAHAIAIAAQALAAAIgIQAHgHABgKQgBgKgHgHQgIgIgKAAQgIAAgIAIg");
	this.shape_89.setTransform(297.9,129.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AgkAAQAAgOALgMQAMgKANAAQAQAAAKAKQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgLgLQgLgLAAgPgAgPgRQAIgIAIAAQAKAAAIAIQAHAHABAKQgBAKgHAHQgIAIgLAAQgIAAgHgIQgIgHABgKQAAgKAHgHg");
	this.shape_90.setTransform(299.8,120.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#A4A9A3").s().p("AgRASQgHgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQgBAKgHAIQgIAHgJAAQgJAAgIgHg");
	this.shape_91.setTransform(299.9,120.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#DBDFDB").s().p("AgZAaQgLgLAAgPQAAgOALgMQAMgKANgBQAQABAKAKQALAMAAAOQAAAPgLALQgLAMgPAAQgOAAgLgMgAgPgRQgHAIAAAJQgBAKAIAHQAHAIAIAAQALAAAIgIQAHgHABgKQgBgJgHgIQgIgIgKAAQgIAAgIAIg");
	this.shape_92.setTransform(299.8,120.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AAaAaQgLALgPAAQgOAAgLgLQgLgLAAgPQAAgOALgMQAMgLANAAQAQAAAKALQALAMAAAOQAAAPgLALgAgPgRQAIgIAIAAQAKAAAIAIQAHAHABAKQgBAKgHAHQgIAIgLAAQgIAAgHgIQgIgHABgKQAAgKAHgHg");
	this.shape_93.setTransform(301.3,110.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#A4A9A3").s().p("AgRASQgHgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQgBAKgHAIQgIAHgJAAQgJAAgIgHg");
	this.shape_94.setTransform(301.5,110.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#DBDFDB").s().p("AgZAaQgLgLAAgPQAAgOALgMQAMgLANAAQAQAAAKALQALAMAAAOQAAAPgLALQgLAMgPgBQgOABgLgMgAgPgRQgHAHAAAKQgBAKAIAHQAHAIAIAAQALAAAIgIQAHgHABgKQgBgKgHgHQgIgIgKAAQgIAAgIAIg");
	this.shape_95.setTransform(301.3,110.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BDBDBD").ss(0.5,1,1).p("AAagaQALAMAAAOQAAAPgLALQgLALgPAAQgOAAgLgLQgLgLAAgPQAAgOALgMQAMgKANAAQAQAAAKAKgAATARQgIAIgLAAQgIAAgHgIQgIgHABgKQAAgJAHgIQAIgHAIAAQAKAAAIAHQAHAIABAJQgBAKgHAHg");
	this.shape_96.setTransform(303,101.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#A4A9A3").s().p("AgRASQgHgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQgBAKgHAIQgIAHgJAAQgJAAgIgHg");
	this.shape_97.setTransform(303.2,101.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#DBDFDB").s().p("AgZAaQgLgLAAgPQAAgOALgLQAMgMANAAQAQAAAKAMQALALAAAOQAAAPgLALQgLAMgPAAQgOAAgLgMgAgPgRQgHAIAAAJQgBAKAIAIQAHAHAIAAQALAAAIgHQAHgIABgKQgBgJgHgIQgIgIgKABQgIgBgIAIg");
	this.shape_98.setTransform(303,101.3);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#B1B19A").ss(0.7,1,1).p("AF2AdIhKC6IAAABQhZAHhYADQgeABgdABQiZAEiZgIIgNgIIBPmzQD1AFB1gDQB1gDAlgDQAkgDA2gDIAqAJIgcBIIgUAyAGXi4QgfACggADQgiACgjACQi/AJjQgJIhKFmQAeADAeACQCAAHCAgIQBIgFBJgJICClDgAHYjcQg/AFhBAEQgjACgiACQjTAJjagJIhYGvAEQC8ICcl2QgLABgKABAGag/IgUA0AGag/IAOgjAF8AMIAKgXAF2AdIAGgRAEHCtIAJAPAjGC3IgDAPQCUAICZgGQBVgEBXgIAmAjcICwAKIgfgKIihgIIAQAIIhMGvIgLgGIBHmxAiwjbIAWAMAnMDTQBIARBWgIIBemu");
	this.shape_99.setTransform(334.6,114.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#5E4D6F").ss(0.7,1,1).p("ACbiLIAQgZQALAGAKAGQAYAOARAOQAiAcACAZQABARgLAPQgFAHgHAGQgLAJgQAIQgLAGgOAEQgEABgFADQgTAHgYAGQgEABgDABQgDABgEABQAMAMAHAKQAXAmgvAbQgLAGgPAGQgTAGgYAHQgCAAgCABQgXAFgcAFQgZAEgfADQgcADgfACQgeADghABQgbABgdACQgRABgRAAAjGgMQAEAAAEgBQAEgBAEAAQAUgCASgBQAcgCAZgDQAZgDAXgCQAYgEAUgDQAbgDAWgEQABAAAAAAQAYgEASgEQAWgFAQgEQAPgEAKgFQAEgCAEgCQAGgFADgEQAAgBABgBIgBgBQgCgIgPgGQgIgEgNgFIAUghABdgxQACADABACACJgyQgDgEgDgEADDhwQAQgOAWACADDhwQgLAKgLATADNhKIAAAAADNhKIABAAQAZANAOAfADRheQgOADgPAMQALAAAOAFAC0hPQgEgBgDAAAC+gQQAAgXgPgPQgCgCgCgBQgHgGgIgEACJgyQASAagJAeQgBAFgCAHAC9gGQAAgFABgFAC9gGQgBAGgCAFADAiYQgQAIgJAMACchhQAAgUALgPAENhHQgagcgiAFAAygpQABACAAABQASAbgJAhABmAPQAOgggUgbAAMAcQgCAJgGAJQAZgEAWgDQACgBACgBQADgHACgIAA6BlQgDgEgEgCQAAgBgBgBQgXAHggAFQACACABADAAyBdQABAAAAAAQAegJALgKQAKgKgGgMQgFgJgNgJQgMACgLABAAMAcQAMgegXggAhUAjQAGgggNgZAhbA7QAagDAXgDQAFgLACgKAhUAjQgCALgFANQgaADgbACQgSACgUABQgYADgaACAgxCMQgBAGgGAGAg5ByQALAOgDAMAADCHQACgNgHgMAhzCdQAFgHACgGQAEgPgLgNQgdACggACQAIAPgCAMQgCAHgGAHAhzB0QAOgBAMgBQAwgEAkgFAA3CGQACgDABgEAADCHQgBAFgCAFAAEAuQgVAEgZADAi2gOQAMAVgEAeAiGAkQAEgagOgbAj8B7QALgBAKAAQAdgBAagBAi2BDQAGgQACgOAjnB6QAIAMgEANAjqCkQAFgJACgIAiGAkQgCAPgIANAB0AaQAGgCAHgCABOAiQAIgCAJgCQAEgIADgHABcBKQAIADAGAFAB7ApQgNABgOAKAB7ApQAMgCANAFABfAeQAKgDALgBAB8BtQAAgPgSgMAA6BlQAIAKgIAQAgrgbQARAbgJAg");
	this.shape_100.setTransform(399,101.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#73788C").s().p("AkJCoIBQk3QCqAMCjgVIBFgKIAxgIIiCFDQhJAJhHAFQhFAEhEAAQg8AAg8gDg");
	this.shape_101.setTransform(347.4,116.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C2BDB4").s().p("AjpDbIBPmzIAXAMIhYGugAnBDQIBHmxIARAIIhNGvgAEdCwICDlEIANghIAVgCIicF2g");
	this.shape_102.setTransform(332.4,114.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E1DFD9").s().p("Aj3DcIBYmvQDZAJDTgJIBFgEQBBgEBAgFIgcBIIgUAyIgOAjIgVA0IgKAXIgGARIhJC6IgBABQhZAHhYADIg7ACIhhABQhoAAhogFgAjMCzIgDAPQCVAICZgGQBVgEBWgIICcl2IgVACIg/AFIhFAEQi/AJjPgJgAnSDPIBNmvICvAKIheGuQgbADgZAAQg4AAgygMg");
	this.shape_103.setTransform(335.2,115.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#6B7183").s().p("AkuC2IBLlmQDRAIC9gIIBFgFIA/gEIgNAhIgyAJIhFAKQikAUipgMIhQE3Ig8gEg");
	this.shape_104.setTransform(345,115.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#D2CEC6").s().p("AjtDUIADgPIA9AEQB/AHCAgIQBIgEBJgJIAJAPQhWAIhVADQhEADhEAAQhUAAhSgEgAi9jBIgXgMQD1AFB2gDQB1gDAlgDIBZgGIArAIQhAAGhBADIhFAEQhsAFhvAAQhnAAhqgEgAmjjPIgRgIICiAIIAeALg");
	this.shape_105.setTransform(338.2,113.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#D7D4F2").s().p("AjtCOIgHgGQAAgHAHABQAFAAABAGQAAAHgFAAIgBgBgAjGCNIgGgHQAAgHAJAAQAJABAAAGQAAAHgKAAIgCAAgAiNCKQgJgBgCgEIgBgEQAAgGAHABQAPAAgBAIQAAAHgIAAIgBgBgAhQCHIgGgGQAAgJAOABQAIAAAAAHQAAAIgOAAIgCgBgAgaB5QAAgGAGAAQAGAAAAAHQAAAGgGAAIgGgHgABpBqQgHAAAAgGQAAgIAJABQAHAAAAAGQAAAIgIAAIgBgBgACIBJQAAgDAEgGQAEgHAEABQAIAAAAAIQAAACgFAGQgGAGgCAAIgHgHgAi/AJQAAgJAIABQAGAAABAGQAAALgHAAgAidACQAAgFAHAAQALABgBAJQAAAJgHAAQgKgBAAgNgAhoAPQgHAAgBgFIAAgFQAAgMAJAAQAKABABAKQAAAMgLgBIgBAAgAg2ALQgIgBgCgFIgBgFQAAgNAMABQALAAAAAMQAAALgLAAIgBAAgAgHADQgIAAgBgDIgBgFQAAgKAKAAQAJABAAAJQAAAJgIAAIgBgBgAArgGQgIAAAAgIQAAgHAIAAQAHABAAAHQAAAIgGAAIgBgBgABSgaQAAgGAGABQAFAAABAGQAAAGgGAAIgGgHgADOg4IABgCIgBAAQAAgHAGABQAGAAABAGIAAACIAAAAQAAAHgHAAIgGgHgADkhKIgCgFQAAgHAHAAQANAAgBAKQAAAHgHAAQgHAAgDgFgADfhqIAAgFQAAgHAJAAQAKAAAAAHQAAAJgJAAQgIAAgCgEgADAiDIgBgEQAAgHAIAAQAHAAAAAHQAAAIgHAAQgGAAgBgEg");
	this.shape_106.setTransform(398.4,101.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#CB961B").s().p("AgYBWIAlgHQgRAGgYAGIAEgFgAhaA/IADAFIg3ADIggABQAwgEAkgFgACghIIAOgJIgMAOIgCgFgAAJhbIACAEIgrAFIApgJg");
	this.shape_107.setTransform(407.5,105.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#9395A8").s().p("Aj7CHIAjAAIgHAQIAHgQIA5gBQgBAHgHAHQAHgHABgHIA+gDQgCAGgFAIQAFgIACgGIA8gEQgCAGgGAGQAGgGACgGIAzgFIAwgGIAIgBIgEAGIgEABQgXAFgdAFIAEgKIgEAKIg3AHIg7AGIg/ADIg4ADIgiABgAAKCEIAAAAgAAEBcQAigFAXgHIABACQAEACADAEIgHABQgXAFggADIgDgFgAA+BSIgBgCIABAAQAegJAMgKQAJgKgGgMQAOgJANgCQgNACgOAJQgEgJgOgJIARgEIAVgEIAHAPQAHAYgYARIgNgIIANAIQgQALggAIQgDgEgEgCgAB1BFIAAAAgAjOAXIArABIAogBIAygBIAxgDQgCAKgEALIgyAGQAFgNACgLQgCALgFANIg1AFQAIgNACgPQgCAPgIANIgmAEQAGgRACgOQgCAOgGARIgyAEgAgYATIAwgEQgDAJgGAJIgtAHQAEgLACgKgAAYAPIAmgEIAJgBIAqgIIAtgHIgEAKIAEgKQAWgGAUgHIAAAAIAYgJIAggQIAAABIACAEQgLAIgPAJIgaALIgJAEIADgMIgDAMQgTAGgYAFIgGACIgHACIgOAEIgVAEIAHgPIgHAPIgRAEIgXAEIAFgPIgFAPIgEABIgvAHQAGgJADgJgABqARIAAAAgADFgGIAAAAgABpg9IAlgKQAQgEAJgFIAIgEQAHgFACgEIABgCIAAgBQAKgTALgKQgLAKgKATQgDgHgOgHIgBgCQABgTAKgOQASALAKAJQALAKADAJQADAKgGAJIgBAAIAAAAIAAAAQgNgEgMgBQAPgMAOgCQgOACgPAMQAMABANAEIgCAAQgGAGgLAFIgPAGQgHgGgIgEQAIAEAHAGIghAHIgHgIIAHAIIgqAGIgCgEgAC/hcIgHgBIAHABgACSh2IAUghIAMAGQgKAOgBATIABACQgJgEgNgEg");
	this.shape_108.setTransform(397.9,102.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B9B7D0").s().p("Aj/CEIAVgBIA3gDQAGAMAAAKIAAAFIg5ABIABgIQAAgJgFgIQAFAIAAAJIgBAIIgjABgAj9CRIAHAHQAGAAAAgGQgBgHgFABIgBgBQgGAAAAAGgAjVCQIAGAHQAMAAAAgIQAAgFgJgBIgBAAQgIAAAAAHgAitCWQAAgKgGgMIA9gEQAIAKAAAKIgBAIIg+ADIAAgFgAiiCLIABAEQACAEAJABQAJABAAgHQABgIgPgBIgBAAQgGAAAAAGgAhvCYIAAAAgAhuCQQAAgKgIgKIAagBIAggBQAJAMAAAKIgBAFIg7ADIABgIgAhfCLIAGAGQAQABAAgJQAAgGgIAAIgDgBQgLAAAAAJgAgzCQQAAgKgJgMIA3gEQAFALAAAJIAAAFIg0AGIABgFgAgjCDIAGAGQAGAAAAgFQAAgHgGAAIgBAAQgFAAAAAGgAAACKQAAgJgFgLQAegDAXgFIAHgBQAEAFAAAHQAAAHgEAIIgHABIgwAGIAAgFgAA7B5QAAgHgEgFQAfgHARgMQASANAAAOQgLAHgPAGIgoAGQAEgIAAgHgABZBtQAAAHAHAAQAJAAAAgHQAAgHgHABIgCgBQgHAAAAAHgAg8B6IAAAAgAgFB2IAAAAgAB5B1IAAAAgABnBaQAYgRgHgYIAAAAIABAAIACAAIACAAIAAAAIABAAQAJAAAKADQgKgDgJAAIgBAAIAAAAIgCAAIgCAAIgBAAIAAAAIgHgPIANgDQAMALAHAKQAXAngvAaQAAgOgSgNgACDBKQgEAFAAADIAHAHQACAAAGgFQAFgGAAgCQAAgIgIAAIgBgBQgDAAgEAHgAA3BtIAAAAgAjdAsIAUgvIAIgCIAIAAQAJAPAAAUIgBAPIgsgBgAjIASIAIAKQAHAAAAgLQgBgGgGgBIgBAAQgHAAAAAIgAiwAeQAAgUgJgPIAmgEIA1gFQAJARAAAVQAAAJgCAKIgyABIABgLQAAgVgLgVQALAVAAAVIgBALIgoABIABgPgAimAMQAAANAKABQAHAAAAgJQABgMgLAAIgBAAQgGAAAAAHgAh5APIAAAEQABAGAHAAQAMAAAAgLQgBgNgKAAIAAAAQgJAAAAAOgAiJAsIAAAAgAhVAYQAAgVgJgRIAwgFIAugGIAvgHIABADQAMASAAATQAAALgDAMIgJABIgnAEQAEgKAAgLQAAgTgNgVQANAVAAATQAAALgEAKIgvAFQADgMAAgKQAAgTgLgTQALATAAATQAAAKgDAMIgxACQACgKAAgJgAhKAIIABAHQACAFAIAAQAMABAAgMQAAgLgLAAIgCgBQgKAAAAALgAgaACIABAFQABAFAIABQALABAAgLQAAgIgLAAIgBAAQgJAAAAAHgAAagEQAAAGAIAAQAHAAAAgFQAAgIgHAAIgBAAQgHAAAAAHgAA5AfQADgMAAgLQAAgTgMgSIgBgDIABAAIAtgEQALAQABASQAAALgGAPQAGgPAAgLQgBgSgLgQIApgGIAigHIAEADQAPAPAAAWIAAABIAAgBQAAgWgPgPIgEgDIAOgFQALgFAHgGIACAAIAAAAIABAAQAGgKgDgKIABAAIAKgBIAAAAIAAAAQAZAAAUAUIACACIABAAIABACIgBgCIgBAAIgCgCQgUgUgZAAIAAAAIAAAAIgKABIgBAAQgDgJgLgKIABAAIABgBQANgLASAAIAAAAIABAAIAEAAQAiAcACAaQABAQgLAQIgOAJIAAAAQgOgggZgMQAZAMAOAgIggAPIgYAHIABgJIgBAJQgUAHgXAGQADgKAAgIQAAgUgMgSQAMASAAAUQAAAIgDAKIgsAKIgqAHIAAAAgABJgQIAGAHQAGAAAAgHQgBgFgFAAIgBgBQgFAAAAAGgADFgwIABAAIgBACIAGAHQAHAAAAgHIAAAAIAAgCQgBgGgGAAIgBgBQgFAAAAAHgADZhGIACAGQADAEAHAAQAHAAAAgGQABgKgNAAQgHAAAAAGgADWhlIAAAEQACAFAIAAQAJAAAAgJQAAgHgKAAQgJAAAAAHgAi5gFIAAAAgAhegOIAAAAgADygVIAAAAgAAvggIAAAAgACkh8QAJgLAQgJQgQAJgJALIgMgGIAQgZIAVALQAYAPARANIgEAAIgBAAIAAAAQgSAAgNALIgBABIgBAAQgKgJgSgLgAC2h9IABAEQABAEAGAAQAHAAAAgIQAAgHgHAAQgIAAAAAHgADmh0IAAAAg");
	this.shape_109.setTransform(399.3,100.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#5E4D6F").ss(0.7,1,1).p("AAoAhQAAAFABADQgGgCgdgBQgbgBggAhQgDgJgBgJQgEg5BYhAIAUAtIALAXQgZAWAHAMgAAJAXQAXAEAIAGAAJAXQgkgFgeAi");
	this.shape_110.setTransform(19.9,82.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#9395A8").s().p("AgXATQACgTAigcIALAXQgYAWAGAMQgGgGgXgEg");
	this.shape_111.setTransform(23.4,83);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#7F8191").s().p("AgwAGQAdghAlAGQAWAEAJAGIAAAHQgGgCgdAAQgbgBggAeQgDgIAAgJg");
	this.shape_112.setTransform(19.1,87.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D7D4F2").s().p("AgQAJQgBgFAHgIQAJgOAKAAQAHAAACAOQgNAXgKAAQgLAAAAgKg");
	this.shape_113.setTransform(20,81.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#B9B7D0").s().p("AAgg8IAVAsQgkAcgCAUQglgGgdAjQgFg7BYg+gAgEgLQgHAKAAADQAAAKALAAQAKAAANgXQgBgOgHAAQgNAAgGAOg");
	this.shape_114.setTransform(19.4,81.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#5E4D6F").ss(0.7,1,1).p("AD+BnQgSgCgSgDQgrgFgogHQgJgBgIgCQhJgMg4gOQgKgDgIgCQg8gPgsgSQgKgEgKgEQghgNgWgRQgbgUgMgVQgEgHgCgHAichmQAFAJAKAJQAKAIARAIQAGADAHADQAiAOA2AMQAZAGAgAFQAoAGAvAGQAJABAJABQAfADAiADQAOABANABAhlg+QgEAEgEAEQgdAcACAeQABAHACAIAgPghQAAgBACgCAh+g8QAFgEAHgEAiZAAQAAAEAAAHAgiAeQgEgfAXggAh+g8QgbAUAAAoAB+A1QAAARAJAQABtA0QABAPAIAQAgiAeQABALAEALAgSAhQABAMAGAMAgSAhQgEgfAYggACDgNQgYAgACAhACVgLQgZAhACAf");
	this.shape_115.setTransform(39.9,97.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#B1B19A").ss(0.7,1,1).p("AlmjkQBMAOBKANQAzAHAxAIQDIAfCyASIAwgOIAAAhQAVAUARAUQAKANAJANQAFAIAEAIQAGAKAFAKQAwBsh9BRIAAAkIgsAaQhegJhdgRQglgGgkgHQhlgVhngeQgvgNgugPIgHgiQg3gugMglQgPgBgNgCAE+iXImyg5IjAgaIgIABIgqAFAkHibQAfAHAgAHQAuAJAuAIQCYAbChAMIACAxIAEDBIAAAJQjCgOigguQgagIgZgIQgOgEgMgEQgLgEgLgEIgqjqQAKACALADIAnDfIgSAGAE+h2IAAAAQgBABAAABAmOhvQALABALABQAJgkATgjIgKgwAlOh2IgRgDQgDAHgBAHQgKAkAGAfQAEAZAQASQAHAJAJAIIAVAKgAlci0IAOA+AljhrIgVgCAmUgrQAFAUAOAUAmUgrQgJgiAPgiAlTADIgSgDAkuAeIAMA1AEcAcQABgVADgVQACgOAEgNQADgQAFgQQAGgVAJgWAE7CvQgfhDAAhJIAAgHAjeBEIAwAPQC8AyBjAJIBhAKAESDrIgEl0");
	this.shape_116.setTransform(104.1,108);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#73788C").s().p("ADLB7IhigJQhjgJi8gyIADgCIgDgBIgUizQCOAxDcAMIAEAAIAjACIAEDAQgCgFACAAg");
	this.shape_117.setTransform(104.9,110.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#7F8191").s().p("AB5BLQgIgQgBgQQgDghAZggIASACQgZAhABAfQABASAIAPIgQgCgAgbArQgEgKgBgMQgDgeAWghIACgDQAZAGAhAFIgrgFQgXAiADAdQABAMAGAMIgSgFgAiWACIgBgLQABgnAbgVIALgHIAOAFIgJAIQgdAdADAfIACANIgTgIg");
	this.shape_118.setTransform(39.7,98.1);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#9395A8").s().p("ADWBkIhSgMQgJgQAAgRIBaAIIATACQAFAUAOAUIglgFgAgPA7QgFgMgBgMQA3ALBIAIQABAPAIAQQhJgMg5gOgAiIAVIgDgPQArAOA7AMQAAALAEALQg8gPgrgSgAjTgRQgbgUgMgVQAOATAdARQAVANAeAJIAAANQghgNgWgRgAhwg0IAIgIQAhAOA2AMIgCADQg4gJglgMgAidhHQgZgPgHgSQAPAAAPAEQAEAJALAJQAKAIARAIIgMAIQgQgHgMgGg");
	this.shape_119.setTransform(40.3,97);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#D7D4F2").s().p("ACsA3QgBgLAJAAQAFgBABAHQAAAKgIABgAAYAkIgBgEQABgKAIgBQAKgBgCAIQAAALgIAAIgBAAQgFAAgCgDgAhTAFQAAgHAJAAQAOgCgCALQAAALgLABIAAAAQgKAAAAgOgAi2gkIgDgLQAAgMAKgBQAIAAAHAKQAEAIAAAFQABAKgLABIgBAAQgJAAgGgKg");
	this.shape_120.setTransform(37,94);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B9B7D0").s().p("ADfBUIhbgJQgBgeAZgkIBBAHIAbACQgPAhAJAiIgTgBgACdAiQgJABAAALIAHAGQAIgBAAgLQgBgGgFAAIAAAAgAgMA4QgDggAXggIArAFQAnAFAwAFQgZAjADAgQhIgIg4gKgAAJALQgJABAAAKIABAFQACADAGAAQAHgBAAgLQACgHgHAAIgCAAgAiBAaQgDgdAdgdQAmAMA4AJQgWAfADAgQg7gLgqgPgAhhgMQgJABAAAIQAAANAKAAQALgBAAgJQABgMgLAAIgCAAgAjFgBQgdgRgOgUIgHgOQAbggApAAQAHASAZAPQAMAHAQAGQgbAVgBAlQgdgLgVgKgAjGhFQgKABAAALIADAMQAGALAKgBQAKgBAAgKQAAgFgFgIQgGgLgIAAIAAABg");
	this.shape_121.setTransform(39.3,94.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#DAD6CF").s().p("AAABdQgcgHgPgYIgFgIQAAgWAEgWIAFgaIAJgfQAFgWAJgVIABgCIAAgBQAUAVAQAUIATAZIAEAPIAEAUQADAegKAYQgNAggWAAIgGgBg");
	this.shape_122.setTransform(137.5,105.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C2BDB4").s().p("AD9iuIAxgOIgBAhIgBACQgJAQgFAVIgJAfIgFAcQgEAXAAAVIAAAGIAAAHQgBBHAgBDIACgCIAAAkIgrAagAktjFIAVAFIAnDfIgRAGgAEtibIAAAAIgBACIABgCgAEtibg");
	this.shape_123.setTransform(105.7,111.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#D2CEC6").s().p("AEaBBIAAgHIAFAIQAPAZAdAGQAcAGAPglQAKgYgDgeIgEgUIgEgPIAJAQIALATQAwBth9BSIgDABQgfhCAAhJgAiRCIIgzgQIgagJIgWgIIASgFIACAAIASAFIAeAHIACABIgCACIgwgPIAwAPQC8AyBjAJIBhAJQgBAAACAFIAAAJQjCgOiggtgAlnAcIASAFIgSgFIgcgDQgOgVgFgSIAtADQAEAXAQAVQAHAJAJAIIAVAJIAMA2Qg3gugMgngAlnAcgAl6hPQAJgkATgjIAOA+IgRgDIgEAOgAhuicIhkgQIiWgaIAqgFICsAWIAcADIGyA5IAAAAIgwAOQiygTjIgeg");
	this.shape_124.setTransform(104.3,105);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#6B7183").s().p("AivBvIgSgFIgCAAIgojfIA/ANIBcASQCZAbChAMIACAvIgjAAIgFAAQjcgMiNgxIATCzIgdgHg");
	this.shape_125.setTransform(101.2,104.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E1DFD9").s().p("ACaDOIhJgNQhlgVhngeIhdgdIgHghIgMg1IggiUIgOg+IgKgwICWAaIBkAQQDIAfCyASIAEF0QhegKhdgQgAivBHIAWAHIAaAJIAzAQQCgAtDCAPIAAgKIgEjAIgCgxQihgMiYgbIhcgRIg/gOIgVgFgAkAARQgJgIgHgJQgQgSgEgZQgCgMAAgNQAAgUAGgWIAEgOIARADIAgCUgAlRguQgJgiAPgiIAWACIAVACQgGAWAAAUQAAANACAMIgtgDgAkghug");
	this.shape_126.setTransform(97.4,108.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEACQABABABABQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgEgDgBgEg");
	this.shape_127.setTransform(230.5,120.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAFAAQAEAAAFADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgDgDg");
	this.shape_128.setTransform(230.2,119.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E8B642").s().p("AgKAJQgDgCgBgEQAEACAFAAQAFAAAEgFQAFgDAAgGIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_129.setTransform(230.5,120.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEAEADQAEAEAFAAQAGAAAFgEQAEgFAAgGQAAgFgEgFQgBgBgBgBAgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEAC");
	this.shape_130.setTransform(227.7,115.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#EEC86F").s().p("AgLAIIAAgEQAAgFAFgEQAEgFAEAAQAFAAAEADIABAEQAAAEgEAFQgFAFgFAAQgFAAgEgDg");
	this.shape_131.setTransform(227.4,115.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E8B642").s().p("AgKAKQgDgEgBgEQAEADAFAAQAFAAAEgEQAFgDAAgHIgBgEIACACQAFAFAAAGQAAAFgFAFQgEAEgGAAQgFAAgFgEg");
	this.shape_132.setTransform(227.7,115.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEADADQAFAEAFAAQAGAAAFgEQAEgFAAgGQAAgFgEgFQgBgBgBgBQgEgCgFAAQgFAAgFAEQgEAFAAAFQAAACAAACg");
	this.shape_133.setTransform(232.4,125.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EEC86F").s().p("AgLAIIAAgEQAAgFAEgEQAFgFAEAAQAGAAAEADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgEgDg");
	this.shape_134.setTransform(232.1,124.9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E8B642").s().p("AgKAJQgEgCAAgFQAEADAFAAQAFAAAEgEQAFgDgBgHIAAgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_135.setTransform(232.4,125.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEACQABABAAABQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEQgEgDgBgEg");
	this.shape_136.setTransform(224,112);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E8B642").s().p("AgKAJQgDgCgBgFQAEADAFAAQAFAAAEgFQAFgCAAgHIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_137.setTransform(224,112.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EEC86F").s().p("AgLAIIAAgEQAAgFAFgEQAEgFAFAAQAFAAAEADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgEgDg");
	this.shape_138.setTransform(223.7,111.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEADADQAFAEAFAAQAGAAAEgEQAFgFAAgGQAAgFgFgFQAAgBgCgBAgOAEQAAgCAAgCQAAgFAEgFQAFgEAFAAQAFAAADAC");
	this.shape_139.setTransform(207.3,139.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAEAAQAGAAADADIABAEQAAAEgEAFQgFAFgFAAQgFAAgDgDg");
	this.shape_140.setTransform(207,138.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#E8B642").s().p("AgKAKQgDgEgBgDQAEACAFAAQAFAAAEgEQAFgEAAgGIgBgEIACACQAFAEAAAHQAAAFgFAFQgEAEgGAAQgFAAgFgEg");
	this.shape_141.setTransform(207.3,139.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEACQABABABABQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgEgDgBgEg");
	this.shape_142.setTransform(203.5,133.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAFAAQAEAAAFADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgDgDg");
	this.shape_143.setTransform(203.2,132.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E8B642").s().p("AgKAJQgDgCgBgFQAEADAFAAQAFAAAEgFQAFgCAAgHIgBgEIACACQAFAEAAAHQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_144.setTransform(203.5,133.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEAEADQAEAEAFAAQAGAAAFgEQAEgFAAgGQAAgFgEgFQgBgBgBgBAgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEAC");
	this.shape_145.setTransform(199,127.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#E8B642").s().p("AgKAJQgDgCgBgFQAEADAFAAQAFAAAEgFQAFgCAAgHIgBgEIACACQAFAEAAAHQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_146.setTransform(199,127.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAFAAQAEAAAFADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgDgDg");
	this.shape_147.setTransform(198.7,126.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#2D6E6A").ss(0.7,1,1).p("AhXChIgQALIhyigIAOgJADaggQgWhPhCg8ADJgFQgQhahYhLAhXChQg5hPg6hPIgBAA");
	this.shape_148.setTransform(215.2,126.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#2B807B").ss(0.7,1,1).p("ACnjsQAQgBARAAQA6AAA+ARQgBBDgfA3QgIAOgJANQgLAOgNAOQg7A8hrAsQgGACgGADQAIAcgFAZQgEASgLAQQglA2h2AfQBLg2AQgnQACgFABgFQAEgXgRgRQAZgIAZgIQASgHASgGAiFg9QgOgPgdACQgxADheAwQA9hMAxgfQBPg0AtBFQBfheBygWQAVgFAWgCAC4htQAAAWgQAQQgQAQgWAAQgXAAgQgQQgPgQAAgWQAAgXAPgQQAQgQAXAAQAWAAAQAQQAQAQAAAXgACkhtQAAAOgKAKQgKAKgOAAQgOAAgKgKQgKgKABgOQgBgOAKgKQAKgKAOAAQAOAAAKAKQAKAKAAAOgAiEg9QANgQAOgPQAKgLAKgK");
	this.shape_149.setTransform(208.2,133.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#73C4B6").s().p("AgHCRIADgKQAEgXgRgRQAZgIAZgIIAkgNIgkANQgZAIgZAIIhzicQANgQAOgPIAUgVIgUAVQgOAPgNAQIgBAAQgOgPgdACQgxADheAwQA9hMAxgfQBPg0AtBFQBfheBygWQAVgFAWgCQBYBLAQBaQgLAOgNAOQg7A8hrAsIgMAFQAIAcgFAZQgEASgLAQQglA2h2AfQBLg2AQgngAAlBYQgNAEgJAFQAHAOgFATQgDAJgGAJQgPAcgpAkQBAgcAcggQAMgPAFgQQAFgTgGgUQgKACgNAEgABwjTQhgAThQBQIgSARIgXAbIAAAAQAxBDAfAxIABABQCdgwBlhfIAAgBQgLg6hKg/QgTABgSAEgAjKh3QgaAQgeAfQAmgTAegGQAngJAZAQQAAgCAHgIIAOgOQgRgZgaAAQgYAAgeAUgADIjtQA6AAA+ARQgBBDgfA3QgWhPhCg8gADijiQAuApAPA3QAVgmABgvQgqgMgmAAIgDABg");
	this.shape_150.setTransform(208.2,133.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#82DECF").s().p("AgPCcQAGgKADgIQAGgUgHgOQAHgEAMgEQANgFAKgBQAGAUgEASQgGARgMAPQgaAghCAcQApglARgbgAgxA4Qggg0gwhAIAAgBIAXgaIARgSQBShPBegTQASgEATgCQBLBAAKA6IAAAAQhlBfidAwIAAAAgABCiNQgPAQAAAXQAAAXAPAQQAQAQAXAAQAWAAAQgQQAQgQAAgXQAAgXgQgQQgQgPgWAAQgXAAgQAPgAjjhvQBAgrAiAwIgPAOQgHAHABACQgZgPgoAIQgdAGgnATQAfgeAZgQgADJjbQAoAAArAMQgBAugUAnQgQg3gugqg");
	this.shape_151.setTransform(210.7,132.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5FA0B0").s().p("AgWAXQgKgKAAgNQAAgNAKgKQAKgKAMAAQAOAAAKAKQAJAKAAANQAAANgJAKQgKAKgOABQgMgBgKgKg");
	this.shape_152.setTransform(221.2,122.1);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#57B09F").s().p("AjZAMIAPgJIAAAAIBzCeIgQALgAAVgFQgPgQAAgWQAAgXAPgQQAQgQAXAAQAWAAAQAQQAQAQAAAXQAAAWgQAQQgQAOgWAAQgXAAgQgOgAAlhDQgLAKABAOQgBAOALAKQAJAKAOAAQAOAAAKgKQAKgKAAgOQAAgOgKgKQgKgKgOAAQgOAAgJAKgABhiqQARgBAQAAQBCA8AWBPQgHAOgKANQgPhahZhLg");
	this.shape_153.setTransform(215.2,126.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#374C66").ss(0.7,1,1).p("AAsAWQgBgCgBgBQgNgRgMgPQgGgIgEgJQgDgDgCgDQgCgDAAgEQgBgCgCgDQgCgDgBgDQgEgDgDgCQgKgFgHAMQABACABADQAGAQAIAQQAOAXAQAVQADACADADQAFAGAGAFQAIgEADgFQADgFgBgFQgBgCgBgCgAgGg2QAIgRARANAA6gEQACAWgQAEAAhAtQACAPgLAEQgCAAgDABQgKgHgHgIQgIgJgIgJQgFgGgFgGQgHgLgHgJQgGgJgEgLQgBgBAAgBQgBgCgBgCQAAAAAAgBQgEgIgCgIQACgFADgCQAJgJANAH");
	this.shape_154.setTransform(195.2,139.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#587AA3").s().p("AgbALIgBgDIgBgBIgBgDIgDgJIACgEQAGgFAJAEIAAAAIAKAVIgPAKIgGgKgAgFgNQAEgGADADIACACIADAGIAFAGIgLAEIgGgPgAAVgKIgEgGQAFgIAIAHIAEAGIgKAHIgDgGg");
	this.shape_155.setTransform(193.6,135.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#456280").s().p("AACAyIgQgSIgKgMIgOgUQgGgJgEgLIgBgCIgCgEIAAgBIgGgQQACgFADgCQAJgJANAHIACAFQAGAQAIAQQAOAXAQAVIAGAFIALALQACAPgLAEIgFABQgKgHgHgIgAgvgsIgDAEIAEALIABADIAAABIACADIAFAKIAPgKIgKgXIAAAAQgEgCgDAAQgEAAgDADgAAWAiIgGgFQgQgVgOgXQgIgQgGgQIgCgFQAHgMAKAFIAHAFIADAGIADAFIACAHIAFAGQAEAJAGAIIAZAgIACADIACAEQABAFgDAFQgDAFgIAEIgLgLgAgWgwIAIARIALgGIgEgGIgDgGIgDgCIgDgBQgDAAgDAEgAAsAWIgCgDIgZggQgGgIgEgJIgFgGIgCgHIgDgFIgDgGQAIgRARANIAnA2QACAWgQAEIAAAAgAAAgzIAEAGIADAGIALgHIgFgGQgEgDgCAAQgEAAgDAEgAgGg2IAAAAg");
	this.shape_156.setTransform(195.2,139.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQAAgCAAgCQAAgFAEgFQAFgEAFAAQAFAAADACQACABAAABQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgFgEQgDgDgBgEg");
	this.shape_157.setTransform(191.6,144.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAEAAQAGAAADADIABAEQAAAEgEAFQgFAFgFAAQgFAAgDgDg");
	this.shape_158.setTransform(191.3,143.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E8B642").s().p("AgKAJQgDgDgBgDQAEACAFAAQAFAAAEgFQAFgDAAgGIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_159.setTransform(191.6,144.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEAEADQAEAEAFAAQAGAAAEgEQAFgFAAgGQAAgFgFgFQAAgBgBgBAgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEAC");
	this.shape_160.setTransform(182.3,154.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EEC86F").s().p("AgLAIIAAgEQAAgFAFgEQAEgFAFAAQAEAAAEADIABAEQAAAEgEAFQgFAFgFAAQgFAAgEgDg");
	this.shape_161.setTransform(182,154);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E8B642").s().p("AgKAKQgDgEgBgEQAEADAFAAQAFAAAEgEQAFgDAAgHIgBgEIACACQAFAFAAAGQAAAFgFAFQgEAEgGAAQgFAAgFgEg");
	this.shape_162.setTransform(182.3,154.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEADADQAFAEAFAAQAGAAAEgEQAFgFAAgGQAAgFgFgFQAAgBgCgBAgOAEQAAgCAAgCQAAgFAEgFQAFgEAFAAQAFAAADAC");
	this.shape_163.setTransform(187.8,139.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAFAAQAEAAAFADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgDgDg");
	this.shape_164.setTransform(187.5,139.2);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E8B642").s().p("AgKAKQgDgEgBgEQAEADAFAAQAFAAAEgEQAFgDAAgHIgBgEIACACQAFAFAAAGQAAAFgFAFQgEAEgGAAQgFAAgFgEg");
	this.shape_165.setTransform(187.8,139.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#B67616").ss(0.7,1,1).p("AgNAEQgBgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEACQABABABABQAEAFAAAFQAAAGgEAFQgFAEgGAAQgFAAgEgEQgEgDAAgEg");
	this.shape_166.setTransform(158.2,150.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E8B642").s().p("AgKAJQgDgDgBgDQAEACAFAAQAFAAAEgFQAFgDAAgGIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_167.setTransform(158.2,150.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAFgEQAEgFAEAAQAGAAADADIABAEQAAAEgEAFQgFAFgFAAQgFAAgDgDg");
	this.shape_168.setTransform(157.9,150);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQABAEAEADQAEAEAFAAQAGAAAEgEQAFgFAAgGQAAgFgFgFQAAgBgBgBAgOAEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEAC");
	this.shape_169.setTransform(158,175.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAFAAQAEAAAFADIAAAEQAAAEgFAFQgEAFgFAAQgFAAgDgDg");
	this.shape_170.setTransform(157.7,175.1);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E8B642").s().p("AgKAKQgDgDgBgFQAEADAFAAQAFAAAEgEQAFgEAAgGIgBgEIACACQAFAFAAAGQAAAFgFAFQgEAEgGAAQgFAAgFgEg");
	this.shape_171.setTransform(158,175.7);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#B67616").ss(0.7,1,1).p("AAJgMQABABAAABQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEQgEgDgBgEQAAgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEACg");
	this.shape_172.setTransform(168.5,163.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAEAAQAGAAADADIABAEQAAAEgEAFQgFAFgFAAQgFAAgDgDg");
	this.shape_173.setTransform(168.2,163.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E8B642").s().p("AgKAJQgDgCgBgEQAEACAFAAQAFAAAEgFQAFgDAAgGIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_174.setTransform(168.5,164);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#B67616").ss(0.7,1,1).p("AgOAEQAAgCAAgCQAAgFAEgFQAFgEAFAAQAFAAADACQACABAAABQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgFgEQgDgDgBgEg");
	this.shape_175.setTransform(111.5,167.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAEgEQAFgFAEAAQAGAAADADIABAEQAAAEgEAFQgFAFgFAAQgFAAgDgDg");
	this.shape_176.setTransform(111.2,167.4);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#E8B642").s().p("AgKAJQgDgCgBgFQAEADAFAAQAFAAAEgFQAFgCAAgHIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_177.setTransform(111.5,168);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#B67616").ss(0.7,1,1).p("AgNAEQAAAEAEADQAEAEAFAAQAGAAAFgEQAEgFAAgGQAAgFgEgFQgBgBgBgBAgNAEQgBgCAAgCQAAgFAFgFQAEgEAFAAQAFAAAEAC");
	this.shape_178.setTransform(142.4,158.6);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EEC86F").s().p("AgKAIIgBgEQAAgFAFgEQAEgFAEAAQAGAAADADIABAEQAAAEgEAFQgFAFgFAAQgFAAgDgDg");
	this.shape_179.setTransform(142.1,158.1);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E8B642").s().p("AgKAJQgDgDgBgDQAEACAFAAQAFAAAEgFQAFgDAAgGIgBgEIACACQAFAFAAAGQAAAFgFAEQgEAFgGAAQgFAAgFgFg");
	this.shape_180.setTransform(142.4,158.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#B67616").ss(0.7,1,1).p("AgUAFQgBgCAAgDQAAgIAHgGQAGgHAIAAQAHAAAFAEQACABABACQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHQgFgEgBgGg");
	this.shape_181.setTransform(130.6,191.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EEC86F").s().p("AgPAMIgBgGQAAgHAGgHQAHgHAHAAQAIAAAFAFIAAAFQAAAIgGAGQgGAGgIABQgHgBgFgDg");
	this.shape_182.setTransform(130.2,190.5);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E8B642").s().p("AgPANQgEgEgBgGQAFAEAHAAQAIAAAGgGQAGgFAAgJIAAgGIADADQAGAGAAAJQAAAIgGAGQgHAHgIAAQgIAAgHgHg");
	this.shape_183.setTransform(130.7,191.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#B67616").ss(0.7,1,1).p("AgUAFQABAGAFAEQAGAHAIAAQAJAAAGgHQAHgGAAgJQAAgIgHgGQgBgCgCgBAgUAFQgBgCAAgDQAAgIAHgGQAGgHAIAAQAHAAAFAE");
	this.shape_184.setTransform(85.5,177.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EEC86F").s().p("AgPAMIgBgGQAAgHAGgHQAHgGAHAAQAIgBAFAEIAAAGQAAAHgGAHQgGAHgIAAQgHAAgFgEg");
	this.shape_185.setTransform(85,177.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#E8B642").s().p("AgPAOQgEgFgBgFQAFADAHAAQAIAAAGgHQAGgEAAgJIAAgGIADACQAGAHAAAKQAAAHgGAHQgHAGgIAAQgIAAgHgGg");
	this.shape_186.setTransform(85.5,178);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#B67616").ss(0.7,1,1).p("AgUAFQgBgCAAgDQAAgIAHgGQAGgHAIAAQAHAAAFAEQACABABACQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHQgFgEgBgGg");
	this.shape_187.setTransform(58.8,198.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EEC86F").s().p("AgPAMIgBgGQAAgHAGgHQAHgHAHAAQAIAAAFAFIAAAFQAAAIgGAGQgGAGgIABQgHgBgFgDg");
	this.shape_188.setTransform(58.3,198.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E8B642").s().p("AgPANQgEgEgBgGQAFAEAHAAQAIAAAGgGQAGgFAAgJIAAgGIADADQAGAGAAAJQAAAIgGAGQgHAHgIAAQgIAAgHgHg");
	this.shape_189.setTransform(58.8,199);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#B67616").ss(0.7,1,1).p("AAMgRQgFgEgHAAQgIAAgGAHQgHAGAAAIQAAACABADAAMgRQACABABACQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHQgFgEgBgG");
	this.shape_190.setTransform(116.1,206.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E8B642").s().p("AgPAOQgEgFgBgFQAFADAHAAQAIAAAGgHQAGgEAAgKIAAgFIADACQAGAHAAAKQAAAHgGAHQgHAGgIAAQgIAAgHgGg");
	this.shape_191.setTransform(116.2,207.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EEC86F").s().p("AgPAMIgBgGQAAgHAGgHQAHgGAHAAQAHAAAGADIAAAGQAAAIgGAGQgHAHgHgBQgHAAgFgDg");
	this.shape_192.setTransform(115.7,206.3);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#B67616").ss(0.7,1,1).p("AEVjrQC0hvBogSQBngRACABALOk0QhRA7gWBJQgzALgHAUQh0A5haCGQhuAUgQBLQirAChaDuQlpgllAhKQDFk7CWAnQBYhKBcASQC9h5DagcQAKgSAygGADhCNQkvgikkhxAi+g+QE4BSDlAaAJniwQixgWihglAItiRQiOgSjGgw");
	this.shape_193.setTransform(123.6,175.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.lf(["#F7C652","#EFAD18"],[0,1],32,-49.2,67.3,-23.1).s().p("AlHBbQCkkHCFAMQD8BwBrAKQhXAphDCfQkSgPjkg4g");
	this.shape_194.setTransform(89.5,191.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.lf(["#F7C652","#EFAD18"],[0,1],20,-44.4,51.9,-21.5).s().p("AkAAIQCGhHCcgQQBxApBuAMQhRAXhPBSQiugQizg3g");
	this.shape_195.setTransform(139.6,165.7);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.lf(["#F7C652","#EFAD18"],[0,1],-15.6,-52.8,29.8,-25.3).s().p("AnsAnQBYhIBcASQE4BTDlAZQhuAUgQBMQkvgjkkhzgABfijQAKgTAygFQChAlCxAVQgzALgHAUQiNgSjHgvg");
	this.shape_196.setTransform(135.8,170.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.lf(["#F7C652","#EFAD18"],[0,1],-1.1,-29.9,34.9,-29.9).s().p("AimApQCRhfCzgWQgEAXAIAJQAIAHgEAEIgDAEQhMAmgwBDg");
	this.shape_197.setTransform(173.1,146.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#E6AD2B").s().p("ArNEOQDFk7CWAnQEkBxEvAiQisAChZDuQlpgllAhKgAqcEAQDkA5EUAOQBDifBXgqQhrgLj+hvIgMgBQiAAAidD9gAi+g+QC9h5DagcQDHAwCMASQhzA5haCGQjlgak4hSgAhghVQCxA3CwARQBQhUBRgYQhvgLhxgpQieAPiEBJgAEUjrQC0hvBpgSQBngRACABQAEAKAGAKIAOAVIAKAMIASATQhSA7gVBJQixgWiiglgAFHjzIDPAjQAwhEBMgnIAEgEQADgEgIgIQgIgJAFgWQi1AViSBig");
	this.shape_198.setTransform(123.6,175.2);

	// base
	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#58A38D").ss(1,1,1).p("AaKgiIheCXAZBCuQA3AdAEBUQABAGACAHAZ1EyQ24Ew9Gk9QAFitBNhjQABgCABgBQABgBABgBQAEgGAEgEQAUgVAYgSQAJgHALgHA2mi6IgCgEIh9kCIgDgGAYxCnQAIADAIAEA3AhHQgXALgUANAZ1EyQADgBAEAAA2+hHQgBAAgBAA");
	this.shape_199.setTransform(203.7,169.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#B67616").ss(1,1,1).p("Aa0AHIBvjNAa0AHIhtDMIhsCxAXVGOIgJAPAVvI2QAPAWgLAbQAAABAAABQgBAAAAABA59F2QgegxA3hAA7lgEIgMgYIgFgKIgDgHIjImcIhqjZMBBXgAVIkJHxAWLGMQhKAEhKADATtGvQBHgEBIgGQAjgDAkgEAUaJCQgyADgyAEAVvJrQgDAAgCAAQgLACgMACQ6uCtthjsA0IIZQjMg/iZhYQgIgEgIgFAUaJCQAmgFAngGAJtG8QE6AFFGgSAAGJiQIWATKagsAWLGMQAngBAngDIACgEAXZGIIgEAGA7UgYQGACXGzBjQPKDeTOgtA71gmIgBAAA7pggQALAEAKAEA7pggQgGgDgGgDA2cB0QFGBqFaBIQKUCKLVAMA7FALQgPgGgOgFA7FALQCSA4CXAxA58F4QgBgBAAgBA5mEBQApAYAtAWQE2CdHbBOQFYA4GtAQA0IIZQAlAMAnAL");
	this.shape_200.setTransform(222.7,124.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.lf(["#F7C652","#EFAD18"],[0,1],-27.5,2.8,25.4,2.8).s().p("AhWCtQhZgjhXgoQhEgehCghIgCgEQGACZGxBjQBRAkBUAgQlahIlEhqgAmOAfIi5l9QA5AzA8AxQDsDBEUCbIBaAyQA7AeA8AeQBQAnBUAkQmxhjmAiZg");
	this.shape_201.setTransform(87.7,118.9);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#C9FCEB","#88F0D2"],[0,1],-1002.7,-165.8,612.4,-165.8).s().p("AoTDjQirgkibgvQg8gSg6gVQjjhPi5hqIhujZQAFACgEgDQCSA4CXAxQFGBrFaBIQKSCHLXAMQE6AFFGgSIgBAEIiJALQvVBHsKiSIKCDvQmtgPlZg5g");
	this.shape_202.setTransform(199,155.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#F4BB35","#DE9F10"],[0,1],38.2,0.8,-5.1,0.8).s().p("AhbETIBJjLQgtASmJgWQgShHAGhjQKQAUD8i1QAQgLAOgNQg+B3hOBwIBujPIhuDPQhJBnhXBjQglAsgoAqQhFA4g7AAQgdAAgbgNg");
	this.shape_203.setTransform(361.3,131.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#ADF5DF").s().p("AArC/QiogCijgeQikgdkehRQAViKCKhiIACgBIADgCIAAABQCpBkEXBXQA4APA+ASQEhBQHKAKQoBBGiuAAIgJAAg");
	this.shape_204.setTransform(114.1,183.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#93E6D0").s().p("A6EElQAFitBMhjIADgDIABgCIAJgKQAUgVAXgSIAUgOQABgEAEgCIAlgTIACgBIABACIgBAAQgXALgVANQAVgNAXgLIABAAIAQAIQCmBVC+BCQjMg/iYhWIgRgKIARAKQCYBWDMA/IBNAZIAAgDQNgDsauitIAXgDIAFgBIADAAIABgCQAJADAIAEQA3AdAEBUQAGAFgDAIQgDgHAAgGQAAAGADAHIgDAFIgBAAIgHABQrNCVssAAQtNAAu3iigA28gtIgCABQiKBggVCMQEeBRCkAdQCjAeCqACQCpACIPhIQnKgKkjhQQg+gRg4gSQkXhXiphiIAAgBIgDACgAZ5EyIAHgBIAAABIgGABIgBgBgAaAExIAAAAgAZGCuIAAAAgAY1CnIABgBQANACADAGQgIgEgJgDgADICgIqCjtQMKCQPVhFICJgLIg1CUQnRAfmRAAQitAAiigGgA1OiQQgsgWgpgYQApAYAsAWIAAABQgrgVgogWIgCgEIh9kCIAdALQAFADgGgCIBuDaQC6BrDjBQQA5AUA9AQQCaAwCsAjQnbhOk2iagA4gnAIgDgGIAgARIgdgLgA4gnAIAAAAg");
	this.shape_205.setTransform(203.2,169.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#7DD1BF").s().p("AiIBSIBjgHIhlAOgAhThCICOgNIBIgHIAIgBIhdCXIgIAAIhLALIhjAHgAglBLIAAAAg");
	this.shape_206.setTransform(357.1,174.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#E3A71C").s().p("Ay8IwIhMgXQi+hBimhXIgQgJIgBgCQgegxA3hAQApAWAqAVIABgBQE2CdHbBOQFYA4GtAQQIWATKagsIgCAGIBmgNIBNgLIAIgBQAPAWgLAbIAAACIgBABIgDABIgFAAIgXAEQrTBJo9AAQsLAAn0iIgA0IIZIBMAXIAAACIhMgZgA0IIZIAAAAgAJtG8QD0gEECgSICSgMIgIAVQkAAOj4AAIiIgBgAT3GTICUgHIiWAOgAUOFUQBUAmBlhRQAogrAmgrQBXhkBIhoIhtDMIhsCxIhQAIIiUAHgAL8B7QolgkoIhEQmTgymBhoQhygfhvgjQi0g4iJgyQjvhWhvhAIhqjZMBBXgAVIkJHxQj9C0qSgTQgGBhASBJIikgKgA7FALIgggPIgMgYIgEgKIAMAGIgMgGIgCgCIAOAIIAXAMQBCAfBEAeQBXAoBZAjQiXgxiSg4gA71gmIAAAAg");
	this.shape_207.setTransform(222.7,124.6);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#DCA21B").s().p("Ah1ATICNgKIiOAOgAhtAAICUgOIBQgIIgCAEIhOAEIBOgEIACgEIgGAKIAEgGIgEAGIgJANIgJABIhHAHIiNAKgABxgMg");
	this.shape_208.setTransform(360.7,165.8);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E6AD2B").s().p("AnHEtQhTgghRgkIAIACIAGACQMfC1PQAAIABAAIAAAAQDFAADMgIIAJAAIgDAHIiSAMQkBASj0AEQrYgMqSiKgASSGiQvQAAsfi1IgGgCIgIgCQhUgkhRgnQg8geg6geIhbgyQkWibjrjBQg8gxg5gzIC5F/IgVgIIgOgIIgCgFIjImcQBvBADvBWQCJAyC0A4QBvAjBxAfQGBBoGRAyQIKBEIlAkIClAKQGJAWAtgSIhJDLIgWA/IgJAAQjMAIjFAAIAAAAIgBAAgAprDpIAAAAgA2zgZIAVAIIACAEg");
	this.shape_209.setTransform(191.7,123.9);

	// Layer 15
	this.instance = new lib.FINALcenterislandbackhalf("synched",0);
	this.instance.setTransform(378.2,45.9,1.003,0.382,0,0,0,378.5,23.1);

	// shadow
	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["rgba(0,0,0,0.2)","rgba(0,0,0,0.102)"],[0,1],-229,0,229.1,0).s().p("AAvFRQujgaq5iGQq6iGgKhqQgLhsNJhLQNJhMMygRQMzgSJ5B4QJ5B4AGCUQAFCXqSBaQoDBGqrAAQi+AAjLgFg");
	this.shape_210.setTransform(247.9,251.7,1,1,0,0,0,1.4,43.5);

	this.addChild(this.shape_210,this.instance,this.shape_209,this.shape_208,this.shape_207,this.shape_206,this.shape_205,this.shape_204,this.shape_203,this.shape_202,this.shape_201,this.shape_200,this.shape_199,this.shape_198,this.shape_197,this.shape_196,this.shape_195,this.shape_194,this.shape_193,this.shape_192,this.shape_191,this.shape_190,this.shape_189,this.shape_188,this.shape_187,this.shape_186,this.shape_185,this.shape_184,this.shape_183,this.shape_182,this.shape_181,this.shape_180,this.shape_179,this.shape_178,this.shape_177,this.shape_176,this.shape_175,this.shape_174,this.shape_173,this.shape_172,this.shape_171,this.shape_170,this.shape_169,this.shape_168,this.shape_167,this.shape_166,this.shape_165,this.shape_164,this.shape_163,this.shape_162,this.shape_161,this.shape_160,this.shape_159,this.shape_158,this.shape_157,this.shape_156,this.shape_155,this.shape_154,this.shape_153,this.shape_152,this.shape_151,this.shape_150,this.shape_149,this.shape_148,this.shape_147,this.shape_146,this.shape_145,this.shape_144,this.shape_143,this.shape_142,this.shape_141,this.shape_140,this.shape_139,this.shape_138,this.shape_137,this.shape_136,this.shape_135,this.shape_134,this.shape_133,this.shape_132,this.shape_131,this.shape_130,this.shape_129,this.shape_128,this.shape_127,this.shape_126,this.shape_125,this.shape_124,this.shape_123,this.shape_122,this.shape_121,this.shape_120,this.shape_119,this.shape_118,this.shape_117,this.shape_116,this.shape_115,this.shape_114,this.shape_113,this.shape_112,this.shape_111,this.shape_110,this.shape_109,this.shape_108,this.shape_107,this.shape_106,this.shape_105,this.shape_104,this.shape_103,this.shape_102,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,33.6,474.1,208.9);


(lib.baking_sheet01 = function() {
	this.initialize();

	// TRAY
	this.instance = new lib.xcookiesheet("synched",0);
	this.instance.setTransform(407.4,164.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.4,2.7,825.6,323.9);


(lib.Counters = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Counter_1();
	this.instance.setTransform(2005,126,1,1,0,0,180,454.4,125.5);
	this.instance.cache(-1,-1,916,255);

	this.instance_1 = new lib.Counter_1();
	this.instance_1.setTransform(454.4,125.5,1,1,0,0,0,454.4,125.5);
	this.instance_1.cache(-1,-1,916,255);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2459.4,251.6);


(lib.Utensils_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Untensils("synched",0);
	this.instance.setTransform(27.4,37,1.503,1.503,0,0,0,18.2,24.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54.8,72.4);


(lib.TrashCanButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.TrashCan("synched",0);
	this.instance.setTransform(76.9,116.7,0.807,0.807,0,0,0,95.2,144.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,153.4,233.4);


(lib.ToasterOvenButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ToasterOven("synched",0);
	this.instance.setTransform(55.1,10.8,1.819,1.818,0,-0.7,179.2,25.7,27.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,0.2,101.2,57.6);


(lib.TimerButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Timer("synched",0);
	this.instance.setTransform(38.2,36.2,1.503,1.503,0,0,0,25.4,24.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,52.8,58.2);


(lib.StoveButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Stove("synched",0);
	this.instance.setTransform(116.5,214.9,1.32,1.32,0,0,0,90.9,85.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,253.1,335.8);


(lib.SpongeButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sponge("synched",0);
	this.instance.setTransform(33.1,22.7,1.503,1.503,0,0,0,15,9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,3.9,55.5,32.6);


(lib.SoapButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FINALsoap("synched",0);
	this.instance.setTransform(13.9,31.2,0.597,0.597,0.8,0,0,2.8,-1.6);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,31.2,53.2);


(lib.SinkButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Sink("synched",0);
	this.instance.setTransform(34.1,24.7,1.503,1.503,0,0,0,22.7,16.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.3,49.6);


(lib.PlatesButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DinnerPlates("synched",0);
	this.instance.setTransform(32.2,27.4,1.503,1.503,0,0,0,21.4,18.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,64.1,54.7);


(lib.OvenMitButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.OvenMitt("synched",0);
	this.instance.setTransform(35.7,34.7,1.503,1.503,0,0,0,23.7,23.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72.3,66.9);


(lib.MixingBowlButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mixing_bowl("synched",0);
	this.instance.setTransform(57.7,29.9,0.171,0.17,0,-2.4,177.5,329,144.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115.2,57.3);


(lib.MixerButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Mixer("synched",0);
	this.instance.setTransform(51.6,45.7,1.503,1.503,0,0,0,34.3,30.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,103,91.7);


(lib.MicrowaveButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FINALmicrowave2("synched",0);
	this.instance.setTransform(15.7,51.8,1.312,1.312,-0.3,0,0,11,39.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,0,90.4,57.2);


(lib.MeasuringCupButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.MeasuringCup("single",0);
	this.instance.setTransform(37,21.3,0.195,0.195,0.5,0,0,237,159.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76.1,51.9);


(lib.JuicerButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FINALjuicer("synched",0);
	this.instance.setTransform(21.1,15,0.739,0.739,-3.1,0,0,20.7,21.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,50.4,52);


(lib.GenericLargeButton_up = function() {
	this.initialize();

	// label
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6A+QAJAAAIgBQAGgBAFgDQAFgDADgEQADgDgBgFQABgNgUgaQgKgMgFgLIgFgMQgCgGAAgHQAAgMAEgIQAEgJAJgFQAJgFAMgDQAMgCASAAIgBAZQgSABgKADQgFACgDADQgCADAAAEQAAAIADAGIAPAXQAKAOAGAJQAGASAAAJQAAAMgCAIQgEAJgHAHQgIAGgNAEQgMADgTACQABgPgCgNgAiABTQAChQgBguQAAgkgBgGIAfgEIgBCVIAygBIgGAbgAivBKIgOgIIgKgKIgHgNIgEgNQgDgOAAgUQgBgRAFgPQAEgPAJgMIAKgKQAFgFAGgDQAHgDAGgCQAHgCAIAAIAMABQgBAJABAMQgKAAgIACQgKAEgGAGQgHAIgEAMQgEANAAASQAAAOACALQADAMAGAHQAFAIALAFQAJAFAQACIgFAZQgcgHgKgFgAC0BVIgxgCIADhNIgBhbIBQAAQgDAKgBAQIgjgDIgMAAIABArIAqgBIgBAZIgagCIgPgBIAAA4IAMAAQAQADAXgCIgEAbIgegBgAgSBQQgIgGgHgKQgIgMgEgRQgCgLgCgbQAAgXACgPQAEgRAFgKQAHgKAJgFQAJgFANABQAKAAAKADQAKAFAIAJQAJAPADALQAFAZAAAQQAAAKgCAKIgEAUIgHAPIgHANQgIALgLAFQgIAFgIAAQgJAAgJgGgAgKg6QgEADgBAHQgDAIgBAKIgBAaQABAOABAMQACAMADAJQADAIAEAFQAEAEAEAAQAEAAAFgFQAEgFADgJIAFgVQACgMAAgKQAAgTgDgNQgCgMgEgGQgDgGgGgCQgFgDgEAAQgEAAgEAFg");
	this.shape.setTransform(72,19.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#804A13").s().p("AA7A/QAJAAAHgCQAHgBAFgDQAEgDADgEQADgDgBgFQAAgNgTgaQgKgMgFgLIgFgMQgCgHAAgGQAAgMAEgJQAFgIAIgFQAJgGAMgCQAMgCASAAIgBAZQgSABgKADQgFACgCADQgDADAAAEQAAAIADAGIAPAXQAKAOAFAJQAIASgBAJQAAAMgCAIQgEAJgHAHQgIAFgNAFQgMADgTACQABgOgBgNgAiABTQAChQgBguQAAglgBgFIAfgDIgBCUIAygBIgGAbgAivBKIgOgIIgKgKIgHgNIgEgNQgEgOAAgUQAAgRAFgPQAFgPAIgMIAJgKQAGgFAGgDQAHgDAGgCQAHgCAJAAIALABQgBAJABAMQgKAAgIACQgKAEgGAGQgHAIgEAMQgEANAAARQAAAPACALQADALAGAIQAGAIAKAFQAJAEAPADIgEAZQgcgHgKgFgAC0BVIgxgCIADhNIgBhbIBQAAQgDAKgBAQIgjgCIgMgBIAAArIArgBIgBAYIgagBIgQgBIAAA4IANAAQAQACAXgBIgEAbIgegBgAgSBRQgIgHgIgKQgHgMgEgRQgDgLgBgbQAAgXADgPQADgRAFgKQAHgKAJgFQAJgFANABQAKAAAKADQAKAFAIAJQAJAPADALQAFAZgBAPQAAALgBALIgEATIgHAPIgHANQgIALgLAFQgIAFgIAAQgJAAgJgFgAgKg6QgDADgDAHQgCAIgBAKIgBAaQABAOABAMQABAMAEAJQADAIAEAFQAEAEAEAAQAEAAAFgFQAEgFADgKIAFgUQACgMAAgLQAAgSgCgNQgCgLgFgHQgEgGgFgCQgFgCgDgBQgFABgEAEg");
	this.shape_1.setTransform(71,20.8);

	// PreviewButton_base
	this.instance = new lib.CloseButton_up_base();
	this.instance.setTransform(77,20.5,1,1,0,0,0,77,20.5);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.1,40.6);


(lib.GenericLargeButton_over = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6A+QAJAAAIgBQAGgBAFgDQAFgDADgEQADgDgBgFQABgNgUgaQgKgMgFgLIgFgMQgCgGAAgHQAAgMAEgIQAEgJAJgFQAJgFAMgDQAMgCASAAIgBAZQgSABgKADQgFACgDADQgCADAAAEQAAAIADAGIAPAXQAKAOAGAJQAGASAAAJQAAAMgCAIQgEAJgHAHQgIAGgNAEQgMADgTACQABgPgCgNgAiABTQAChQgBguQAAgkgBgGIAfgEIgBCVIAygBIgGAbgAivBKIgOgIIgKgKIgHgNIgEgNQgDgOAAgUQgBgRAFgPQAEgPAJgMIAKgKQAFgFAGgDQAHgDAGgCQAHgCAIAAIAMABQgBAJABAMQgKAAgIACQgKAEgGAGQgHAIgEAMQgEANAAASQAAAOACALQADAMAGAHQAFAIALAFQAJAFAQACIgFAZQgcgHgKgFgAC0BVIgxgCIADhNIgBhbIBQAAQgDAKgBAQIgjgDIgMAAIABArIAqgBIgBAZIgagCIgPgBIAAA4IAMAAQAQADAXgCIgEAbIgegBgAgSBQQgIgGgHgKQgIgMgEgRQgCgLgCgbQAAgXACgPQAEgRAFgKQAHgKAJgFQAJgFANABQAKAAAKADQAKAFAIAJQAJAPADALQAFAZAAAQQAAAKgCAKIgEAUIgHAPIgHANQgIALgLAFQgIAFgIAAQgJAAgJgGgAgKg6QgEADgBAHQgDAIgBAKIgBAaQABAOABAMQACAMADAJQADAIAEAFQAEAEAEAAQAEAAAFgFQAEgFADgJIAFgVQACgMAAgKQAAgTgDgNQgCgMgEgGQgDgGgGgCQgFgDgEAAQgEAAgEAFg");
	this.shape.setTransform(72,19.8);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#386073").s().p("AA7A/QAJAAAHgCQAHgBAFgDQAEgDADgEQADgDgBgFQAAgNgTgaQgKgMgFgLIgFgMQgCgHAAgGQAAgMAEgJQAFgIAIgFQAJgGAMgCQAMgCASAAIgBAZQgSABgKADQgFACgCADQgDADAAAEQAAAIADAGIAPAXQAKAOAFAJQAIASgBAJQAAAMgCAIQgEAJgHAHQgIAFgNAFQgMADgTACQABgOgBgNgAiABTQAChQgBguQAAglgBgFIAfgDIgBCUIAygBIgGAbgAivBKIgOgIIgKgKIgHgNIgEgNQgEgOAAgUQAAgRAFgPQAFgPAIgMIAJgKQAGgFAGgDQAHgDAGgCQAHgCAJAAIALABQgBAJABAMQgKAAgIACQgKAEgGAGQgHAIgEAMQgEANAAARQAAAPACALQADALAGAIQAGAIAKAFQAJAEAPADIgEAZQgcgHgKgFgAC0BVIgxgCIADhNIgBhbIBQAAQgDAKgBAQIgjgCIgMgBIAAArIArgBIgBAYIgagBIgQgBIAAA4IANAAQAQACAXgBIgEAbIgegBgAgSBRQgIgHgIgKQgHgMgEgRQgDgLgBgbQAAgXADgPQADgRAFgKQAHgKAJgFQAJgFANABQAKAAAKADQAKAFAIAJQAJAPADALQAFAZgBAPQAAALgBALIgEATIgHAPIgHANQgIALgLAFQgIAFgIAAQgJAAgJgFgAgKg6QgDADgDAHQgCAIgBAKIgBAaQABAOABAMQABAMAEAJQADAIAEAFQAEAEAEAAQAEAAAFgFQAEgFADgKIAFgUQACgMAAgLQAAgSgCgNQgCgLgFgHQgEgGgFgCQgFgCgDgBQgFABgEAEg");
	this.shape_1.setTransform(71,20.8);

	// Layer 1
	this.instance = new lib.CloseButton_over_base();
	this.instance.setTransform(77,20.5,1,1,0,0,0,77,20.5);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.2,40.6);


(lib.FryingPanButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FryingPan_01("synched",0);
	this.instance.setTransform(50.8,14.4,0.18,0.18,1.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,113.1,28.2);


(lib.FridgeButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FINALfridge("synched",0);
	this.instance.setTransform(129.9,256.6,1.353,1.353,0,0,0,-103.1,-18.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,258.1,423);


(lib.FoodProcessorButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FoodProcessor("single",0);
	this.instance.setTransform(36.4,28.1,0.169,0.169);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79.2,92.9);


(lib.CuttingBoardButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CuttingBoard("synched",0);
	this.instance.setTransform(71.9,25.3,1.503,1.503,0,0,0,47.8,16.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,140.5,37.8);


(lib.CookBooksButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CookBooks("synched",0);
	this.instance.setTransform(51,45.5,1.503,1.503,0,0,0,16.7,20.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(5.7,10.5,78.9,63);


(lib.BowlsButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bowls("synched",0);
	this.instance.setTransform(39.9,36.7,1.503,1.503,0,0,0,26.5,24.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80.1,73.3);


(lib.BlenderButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.FINALrocketblender("synched",0);
	this.instance.setTransform(23.9,68.4,0.741,0.741,0.3,0,0,-60.6,32.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,45.7,71.6);


(lib.BakingSheetButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.baking_sheet01("single",0);
	this.instance.setTransform(77.7,21.2,0.189,0.143,0,0,0,405.7,151.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,156.1,46.3);


(lib.BakingPansButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.BakingPans("synched",0);
	this.instance.setTransform(59.7,24.2,1.503,1.503,0,0,0,39.7,16.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,119.4,48.8);


(lib.MIX_propeller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// shadow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE33CA").s().p("Ag3AdQgXgNAAgQQAAgPAXgMQAYgNAfAAQAhAAAXANQAXAMAAAPQAAAQgXANQgXAMghAAQgfAAgYgMg");
	this.shape.setTransform(0.7,-25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDArQgdgSAAgZQAAgYAdgSQAcgSAngBQAoABAdASQAcASAAAYQAAAZgcASQgdASgoAAQgnAAgcgSgAg3gcQgXAMAAAQQAAAPAXANQAYAMAfAAQAhAAAXgMQAXgNAAgPQAAgQgXgMQgXgNghAAQgfAAgYANg");
	this.shape_1.setTransform(0.7,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(5));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606366").s().p("AgzAKQgDgJABgbIAAgEIAFADIACACIAKAEIAHACIAPABQAaAAARgEIAJgCIABAAIAEgCIAHgEIADAIIABAXIgBALQAAAAAAAAQABABAAAAQAAABAAAAQABABAAAAQAAAFgEADIAAABIgDABIgCABQgKACgaAAIgDAAIgbADQgZAAgGgVg");
	this.shape_2.setTransform(1,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgbAKIgHgBIgKgFIgCgBIgFgDQgCgBAAgDQAAgGAIABIAEABIAAAAQAUAGAKAAIASgCIAYgDIAGgBIAIgCQAIAAABAHQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIgHAEIgEABIgBABIgJACQgRADgaAAIgPgBg");
	this.shape_3.setTransform(0.8,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(5));

	// propeller
	this.instance = new lib.PROPELLORSPIN("synched",2);
	this.instance.setTransform(3.5,-23,0.657,0.121,0,2.7,-0.6,711.4,-104.4);
	this.instance.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(5));

	// stem
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9CA1A6").s().p("AgKCmIABhRIADjhIABgZIAOAAIABCIIABDEIgVgBg");
	this.shape_4.setTransform(0.7,-6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAMCmIAAgBIgBjDIgBiJIATAAQACAnACBfIAAAhQABB3gCAxIgUgCgAgeAnIACgpIAEilIAUAAIgBAZIgDDhIgBBRIgFAAIgSABQgBgwADhOg");
	this.shape_5.setTransform(0.6,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4}]}).wait(5));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgjBFQghgFgNgHQgBgGABgXQABgcAFgzQABgIACgEQAYgGATgCQA3gEAsAMQABAEABAIIADAXQAHA7ABAZIgmAMQgNADgRACIgIAAQgOAAgcgEgAgfgwIgYACIgFAnQgCAOAAAlIAIAEQAOAFAmABIACAAQAmgBAOgFIAIgEQAAglgDgOIgEgnIgZgCIgcgCIgCAAIgdACg");
	this.shape_6.setTransform(0.9,13.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#606366").s().p("AAAA0QgmAAgPgGIgHgDQgBgmADgNIAFgoIAYgCIAdgBIABAAIAdABIAZACIAEAoQADANAAAmIgIADQgPAGgmAAIgBAAg");
	this.shape_7.setTransform(0.7,14.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.7,-46,228.1,67.3);


(lib.MIX_34_head = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.MIX_34_lid("synched",0);
	this.instance.setTransform(1,-51.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#444444").s().p("ABLDfIAAgBIAAAAQgIgUgFgiQgIgrgEgQIgQg4QgKgigKgVQgZhBgZgxQgWgqgpghQgUgRgIgIIgBgBIABAAIAAgBIADgBIAPgDIABAAQAJAGAKAIQAZATAZAlQAgAuAeBLQAbBAATBGQAKAjAEAXIADAIIAFAUQABAHAAAQIAAADIgBAAIAAABIgKAEIAAABIgFACIgBAAgAByCnQgJgBgFgHIgBgLQABgQAPABQAOACgBAQQAAAFgDAFQgDAGgHAAIgBAAgAA9gYQgLAAgFgMIgCgMQAAgPASACQARADgBASQgBARgOAAIgBgBgAgfizQgPAAABgOQABgTAOADQAPADgBALQAAARgNAAIgCgBg");
	this.shape.setTransform(31.7,-18.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45474A").s().p("AA3B/IgMgEIgDAAIgDgCIgYgIIgCgBIgEgCIAAAAQgngQgdgSIgCgiIgDg/IgBhDIABgVQABgPADgEIAAAAIABgBIABAAIALgBQAtgCASAkQAFANAPAfIAGAMQAHARACAMIACAHIAHAjQAIAqABANIABAnIgBAGIAAAAIgMgEg");
	this.shape_1.setTransform(-74.1,45.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606366").s().p("AApCBIAAgHIAAgmQgCgNgIgrIgHgiIgBgHQgDgMgHgRIgGgMQgNgfgEgNQgUgkguACIgKAAIgCABIACgCIACgDIAZgEQASgEAhAZIAMAMIAOANIAFAGQAbAeALAnIAIAaIAIAkIAFAhQAHAqAAAVIAAADIgwgNg");
	this.shape_2.setTransform(-71.5,45.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777FC7").s().p("AlcCOQgWgFhogTQhPgSgLgSIgBAKIgDgXIAAgBQAAgYAEgWQAYh6Byg8QB7hBBsBYIASAPIAEADQAcAmATAvIAEAMQATAyAAAvQAAAcgEATQgEAVgLAgIgBAAIgFAGQgIAHgIAAQghAAirgugAGaAwQgFgCgCgJIgBgBIAAAAIAAgBQgFgLgDgVQgDgUAAgXQAAhlBDgbIAJgDIACADIAIAJIAEAFIABAAIAGAHIAJAMIABAAIAYAgIgBgBIgCAAIAFAFQAHAIAHALQAOAXAEAKIACAFIAAABIACAAQAJACAAAKIgBACQgIAIg/AgIg/AfQAhACgYAAIgHgBQgNAHgDAAQgGAAgEgEg");
	this.shape_3.setTransform(10.9,-7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#92979C").s().p("AlqGAQg+grggAGIgHACQAHhQAVhZQAPhBASgxQANAHAVAJIAlAPIAjAMIAWAIIAEABIgIAUIgGAAQgNADAAALQAAADADAEQADAEADACQgYBGgTBXIgRBNIgOgPgAmFB0QAAAPAVAAQAKAAAAgLQAAgOgQgCIgDAAQgMAAAAAMgAkKBiIgWgIIgqgOIhCgbQAihVBChYQALgPAogsQAogtAPgNQBDg8Bsg7IBEgmIACACQABADAHADIALAGQAMAGASAFIgNALIgTAPIAzAKQBDAMA1gBQBKABA9gKIAbgEIAygCQAJAEAAAJQgBAUhTATQhWAVhjAAQhSAAhGghIgQgIIgfAeQicCWhgDUIgHAPIgDAAg");
	this.shape_4.setTransform(-33.7,-6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83888C").s().p("AhlB8Ig4gCQhQgEhOgIQhLgJhMgLIgBgBQiDgWhqggQgBgwgIgrIAAgDQA7ARBBANQBhAUCDAOIAfAEQAPAEAQAAIAEAAQAuAFAvADQACACAEgCQBRAFBSAAIBTgBIACAAQBIgDA7gEIAAAAQAJgBACADQALAVAAAdQgBAagCASQhzAKiDAAIg5AAgAHTA4QgEg4gLgaQBNgTBGgaQBGgaAOgJIAVgPIAEgCIABAIQACAnADAYIAAABIAAAOQgsAlhRAfQhRAfgqAIIABgOg");
	this.shape_5.setTransform(10,57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626C73").s().p("AhsAZQgvgHgzgLQgKgBgYgIIBegLIBMgIIAWgCQC0gLBqAXIADACIABADIgCAFIgEABQgKAIgUAFQg7AOirAAQgsAAgogCg");
	this.shape_6.setTransform(1.6,-46.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#444444").s().p("AAzBLQgSAAAAgOQAAgMAQgBQAPAAAAANQAAAIgFADQgEADgEAAIAAAAgAhHAoQgDgCgDgEQgDgEAAgDQAAgLANgDIAGAAQAHABAAAJQAAAJgBAEQgCAGgHAAQgEAAgDgCgAAbAOQglgIgsgLIgDgBIgWgIIgjgMIglgPQgVgJgNgHIAGgRIBCAbIApAOIAXAIIADAAIAbAIQAmALA1AGIBFAKQAnAIAGACQgKAHghAAQgwAAhEgNgAiXAGQgWAAAAgNQAAgNAQACQAQACAAANQAAAJgKAAIAAAAg");
	this.shape_7.setTransform(-55.3,6.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAJJ0IgCAAIgCABQgBAAAAgBQAAAAAAAAQABAAABAAQABAAACAAgABsJqQi+gBh3gLQiKgNilglQhwgZhugpQgXgIgQgJIgCAAQgdgOgagTQgGgGgCgGIgCgCQgOiuATiJQASiHAvh3IAYguIAHgOIADgFIABgBQAhg/AcglQAzhFA6g0QBPhHBMgtQBMgsAbgHIAigJIAYgEQAbgDDhgRQAAgCA8AAQCxAAAdAXQAuANA/ApQBSAuA0AzQAxAoAsA4QAmAsAmBFIANAVQAUAeATA1IAMAcQApBeAYCXQAVCIAAB9IAAArQgKAWgmAVQgRAKgUAKQg2AZhTAaQiVAuiSAKQiaAMg6AAIgCAAgApnGWQAHArACAxQBqAgCCAXIACAAQBLAMBLAIQBOAJBRADIA4ACIA3AAQCEAAB0gKQACgSAAgaQAAgdgKgVQgCgDgKABIAAAAQg6AFhIACIgDAAIhUABQhRAAhQgFQgEACgCgCQgvgDgugFIgFAAQgPABgPgFIgggEQiCgQhhgUQhBgNg8gQIABADgAFGHcQAHAUAAAjIAAADIAAAKIgBAJIAAABIAAADIAAAFIgBAMQBKgIBDgMIA9gNQABgPAAgTQgCgtgPgVQhpAXhWAMgAMiFVIgWAOQgOAJhFAaQhGAahOATQALAbAEA5IgBAOQArgHBRggQBRggAsgmIAAgOIAAgBQgEgYgCgnIAAgIIgEADgApzHvIAAgEQgBgUgGgqIgGghIgIgkIgHgcQgMgngbgfIgFgFIgOgOIgOgLQgggZgSADIgZAFIgCACIgCACIgBABIAAAAQgDAEgBAPIgBAVIABBEIADBAIACAjQAdARApARIAAAAIAEACIACAAIAYAJIAEABIACABIAMAEIANAEIAAAAIAwANgAq+DZIAPAPQAJALAHALQANATAQAnQALAZAIAfQAsANAuAKQBWATCyAbQCxAaCvgDQDQgFDFgqQDFgrB3hAQgXi5gIgqQgNhDgQg6IgLgiQgahHggg9IABgCQAAgKgJgCIgEgHQgEgJgPgYQgHgLgGgHIgDgFIABAAIgYgfIgBAAIgJgMIgGgIIgBAAIgEgFIgIgIIgCgDQhuh3i1hbQgOA8j9AAQhEAAhlgQQgxgIgggKQgSgFgMgGIgLgGQgHgDgBgDIgCgCIhFAmQhtA7hDA7QgOAOgpAtQgoAsgLAPQhCBYgiBXIgGARQgSAxgPA/QgVBZgHBQIAHgCIAJgBQAfAAA2AmgAgipRIgXABIhLAIIhfALQAZAKAJACQAzALAvAGQAoADAtAAQCrAAA7gPQATgFALgHIAEgDIABgFIAAgEIgDgBQhIgQhqAAQgzAAg5AEg");
	this.shape_8.setTransform(0.2,10.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BBC1C7").s().p("AESJMIAAgFIAAgDIAAgBIABgJIAAgKIAAgDQAAgjgHgVQBWgLBpgXQAPAVACAtQAAATgBAPIg9ANQhDAMhKAIIABgMgAlHHOQiygahVgTQgvgKgsgOQgIgegKgZQgRgogNgSQgHgLgJgLIAQhNQAThXAYhGQADABAEAAQAIAAABgGQABgDAAgKQAAgHgHAAIAIgVQArAOAoAIQBEALAvAAQAiAAAKgIQgHgCgngFIhFgKQg0gIgogLIgcgIIAHgQQBgjVCdiXIAggeIAQAJQBGAhBSAAQBjAABXgVQBRgUAAgTQAAgKgJgEIgyADIgZAEQg9AJhKAAQg1AAhDgLIgzgLIATgOIANgLQAgAKAxAIQBlAQBGAAQD7AAAOg8QC1BaBuB4IgJADQhDAbAABkQAAAXADAXQADAUAFAMIAAAAIAAAAIABABQACAKAFACQAEADAGAAQADAAANgGIAHAAQAYAAghgBIA/gfQA/gjAIgIQAgA9AaBIIALAiQARA5AMBEQAIApAXC5Qh3BBjFArQjEAqjRAFIgkAAQieAAiegYgAoqA3QAGgDAAgHQAAgNgQAAQgPAAAAANQAAANARAAQAFAAADgDgAmpgoQBoATAWAFQCrAtAhAAQAIAAAIgHIAEgGIACgBQALgeAEgUQAEgUAAgbQAAgvgTg1IgEgMQgTgvgcglIgEgEIgSgPQhshXh7BBQhyA7gYB8QgEAWAAAZIAAAAIACAXIABgJQAMARBPASgAJfjJIAAgBIgCgFIAEAGIgCAAgAI4kIIACABIADAEIgFgFgAlRpXIAAAAIAAAAg");
	this.shape_9.setTransform(6,8.1);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83.6,-65.6,167.9,139.2);


(lib.xpotbottom = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.xhandle("synched",0);
	this.instance.setTransform(-233.8,-76.6);

	this.instance_1 = new lib.xhandle02("synched",0);
	this.instance_1.setTransform(-103.8,-56.5);

	this.instance_2 = new lib.xpot2("synched",0);
	this.instance_2.setTransform(-228.4,15.9,1,1,0,0,0,0.8,0);

	this.instance_3 = new lib.xarm("synched",0);
	this.instance_3.setTransform(275.1,-73,1,1,0,0,0,-0.4,0.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ADD158").s().p("AgSABQAAgIAFgGQAJgJASAHIADAEQACADAAAIIgEAMQgHAEgIADg");
	this.shape.setTransform(333.3,-63.2);

	this.addChild(this.shape,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-369.5,-160.5,739.1,320.6);


(lib.Teaspoons = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tablespoonsugar("single",0);
	this.instance.setTransform(21.1,-1.9,0.141,0.141,0,0,0,196.7,171.5);

	this.instance_1 = new lib.teaspoonbakingpowder("single",0);
	this.instance_1.setTransform(39.9,8.2,0.137,0.137,0,0,0,226,271);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,62.8,22.5);


(lib.CrockPot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.xlid("synched",0);
	this.instance.setTransform(81,-166.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

	// Layer 6
	this.instance_1 = new lib.xpotbottom("synched",0);
	this.instance_1.setTransform(22.3,14.7,1,1,0,0,0,-0.4,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-346.8,-231.9,739.1,406.2);


(lib.MIXIETALK = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// propeller
	this.instance = new lib.MIX_propeller("synched",0);
	this.instance.setTransform(135.1,46.3,1.166,1.166,0,0,0,1,18.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(90));

	// nose
	this.instance_1 = new lib.MIX_34_nose("synched",0);
	this.instance_1.setTransform(183.1,117.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(90));

	// pupil
	this.instance_2 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_2.setTransform(200.4,106.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},22).wait(4).to({startPosition:0,_off:false},0).wait(64));

	// pupils
	this.instance_3 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_3.setTransform(110.6,111.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},22).wait(4).to({startPosition:0,_off:false},0).wait(64));

	// eyeR
	this.instance_4 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_4.setTransform(155.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({regX:-46.3,regY:21,scaleY:0.99,x:109.2,y:128.7,startPosition:4},0).wait(4).to({regX:0,regY:0,scaleY:1,x:155.6,y:107.7,startPosition:2},0).wait(2).to({startPosition:0},0).wait(62));

	// eye_L
	this.instance_5 = new lib.MIX_43_eyeL("single",0);
	this.instance_5.setTransform(155.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(18).to({startPosition:0},0).wait(2).to({startPosition:2},0).wait(2).to({regX:50,regY:6.5,x:205.6,y:114.2,startPosition:4},0).wait(4).to({regX:0,regY:0,x:155.6,y:107.7,startPosition:2},0).wait(2).to({startPosition:0},0).wait(62));

	// mouth
	this.instance_6 = new lib.MIX_34_mouth("synched",0);
	this.instance_6.setTransform(158.3,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).wait(90));

	// head
	this.instance_7 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_7.setTransform(85.7,97.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAZgHARgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQALgKAGgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgFgCgFgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape.setTransform(210.1,92.2,1,1,0,0,0,-0.3,0);

	this.instance_8 = new lib.MIX_34_handR("synched",0);
	this.instance_8.setTransform(16.1,199.6,1,1,-5.7,0,0,8.2,-12);

	this.instance_9 = new lib.MIX_34_armR("synched",0);
	this.instance_9.setTransform(58,157.5,1,1,0,0,0,21.9,-21.8);

	this.instance_10 = new lib.MIX_34_browL("synched",0);
	this.instance_10.setTransform(188.6,75,1,1,15);

	this.instance_11 = new lib.MIX_34_browR("synched",0);
	this.instance_11.setTransform(101.6,77,1,1,-10.1);

	this.instance_12 = new lib.MIX_34_bulb_R("synched",0);
	this.instance_12.setTransform(69,64.4);

	this.instance_13 = new lib.MIX_34_head("synched",0);
	this.instance_13.setTransform(133.3,108.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AggBHQgEgEgEgNQgGgNgHgaIgMgxIAAgDIgBgHQAAgKAMgIIAIgHQAKgHAMABIAUAAQAEAAADABIABAAQAFACAFAFIAIAJQAGAIAEALIAEAIIAAAHIAHAYIACAGQAGAQAKARQAEAFACAFQgSgFgHAOIgDgBQgUgGgJAPIgJgEQgCgBgMAEQgNAGgEAFIgCgFgAgUgxQALAEAJAVQAKAUABAAQACAAABAAQAAAAABAAQAAAAAAAAQAAgBAAAAIACgHQgBgOgPgVQgGgMgGAAQgGAAgDAKg");
	this.shape_1.setTransform(280.7,169.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBC1C7").s().p("AE9CvIADgGQAGgTgSg5QgLgfgLgRIABAAQAIgFAFABQAgALAVAzQARArgEAOQgEAMgLADQgFABgIAAQgJAAgMgBgAEaCtQgkgMgPhlQANgoAeA8QAdA7gHAWIgEALQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAIgGgBgAGBCoQARg1g8hDQgKgLgJgHIACgBIAAAAIgBAAIgDgDQgDgDAKAGIARAKQAdARAPAVQAkA2gHAVQgDAJgeAIgAACA6QgJgUAHgZIAGgKIAGgIIALgFIAwgRIgEAKQgCARgBACQgEAKAKAUQAKAVARAJQggAQgcAKQgZgNgKgRgAjLAqIAAAAIgKgEIgFgQQgCgHADgKQAFgLAJgKQAHgGANgHIAEgBQAtAcAVAFIAGABIgDADQgPAGgHAUQgJAcAKATQgjgPglgXgAE5hTQgDgMgFgHIACgBQAMAAAWgLQAXgLAKAAQAKAAAGAKQAFAHAAAGQAAATgtAKIggAIIgFgSgAmihuIAAgMQgBgNADgIQABgEARgQIAFgFIAOgHQAaAVAiAaQgKAEgIAFQgSAKgEAMQgDAKACAOIABAFIg7gqg");
	this.shape_2.setTransform(254.9,173.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777FC7").s().p("AA4CgIgPgEIgBAAIgCgHIgDgJQgFgTAEgJQAFgPAQgPIAIgGQAfADAlgIIgDAHQgHAVAEAWQAGAeAZAMIgHABQgQACgRAAQgeAAgegGgAEHBuQgagJgEgdQgCgSAGgSQAAgCAEgDIACgEIAPgGQAbgPAbgOIAEgDIARBNIgLAOIgxAgIgKgCgAi7APIABAAQACgHgCgKQgBgMABgFQADgJATgLIANgJQA8AtArAaQgjAPgIAaQgEAKABAOQgkgYg5gxgAlLhtIABgDIAAgCQAHgiAfgRQAOARAfAaQgHACgIAGQgWAPgEANQgFAQABAIQgrgjAEgMg");
	this.shape_3.setTransform(240.1,167.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AFuDmQgNAAgJgHQgIgGgEgCQgHAKgJAAQgLAAgIgFQgGgDgHgFIgJgIQgMgTgJgbQgUg/gJgtQhQBGhiAUIgSADQgvACgxgLQhfgUiThyQiZh4gPgaQgCgMACgFQAHgWANgUQAMgRAmgIIBrBXQCeCAA6AUQA7AWBKgdQBMggA2giQAkgYAFgCQAfgaAiAHIAZAFIAIAJIARAEQANAAAigWQAbgPATAQQATAOAAAcQAAAMgUARQgbAWgnABIgEAAQAIATAMARQAJANAIAIQAQAVAPAMQAeAZANAmIAAABQAMAWgBATIgCACQAAAMgIALQgNATgZAAQgMAAgIgEIgDACQgKAQgXAAIgJgBgAFVB3QATA5gHATIgCAGQAWADALgCQALgEAEgMQAFgOgSgrQgUgzghgKQgEgCgJAFIgBAAQAMASAKAegAEIBWQAPBlAkAMQAIADACgEIAFgLQAHgWgeg7QgRgkgMAAQgIAAgGAQgAFiA1IAEACIgDABIACAAQAJAIAJAKQA9BEgSA0IAAACIABgBQAdgIADgJQAHgUgjg3QgPgUgegRIgQgKIgIgEIAAABgAg6AqQgQAPgFAOQgEAKAFASIADAKIACAGIABABIAPAEQAvAJAsgFIAHgCQgZgLgGgeQgEgXAHgUIADgHQgjAHgfgCIgIAGgAA5APIgLAFIgHAKIgHAJQgIAaAMATQAKARAZANQAbgKAhgQQgSgJgJgUQgKgVADgKQACgEACgRIAEgIIgwAQgAiVgCQgNAEgHAGQgKAKgEAOQgDAJABAHIAFARIAKADIABAAQAkAXAkAPQgLgTAKgbQAGgVAPgGIADgCIgFgCQgWgHgsgaIgEACgADFgwQgbAQgbAPIgPAGIgCAEQgEADAAACQgGAQACASQAEAcAaAJIAKACIAxggIALgOIgRhMgADzhUIgIAHQgMAHAAALIABAHIAAADIAMAxQAHAZAGANQAEAOAEADIACAGQAEgGANgFQAMgFAFACIAIAEQAKgPATAFIADABQAHgNASAEQgCgEgEgFQgKgRgGgPIgCgHIgGgYIgBgHIgEgJQgEgKgGgIIgIgJQgFgFgFgCIAAAAQgEgBgGAAIgTgBIgDAAQgLAAgJAHgAjRAwQgBgOAEgKQAIgYAjgPQgrgcg8gtIgNAIQgTALgDAKQgBAFABAMQACAMgCAHIgBAAQA5AuAkAZgAFShMQAGAHADANIAEARIAggIQAugKAAgSQAAgHgFgHQgHgKgKAAQgKABgWAKQgXAMgMAAIgCAAIAAAAgAlniOIgFAFQgRAQgCAEQgCAJABAMIAAAMIA7AqIgCgFQgBgOADgKQAEgLASgKQAHgGALgDQgjgagZgWIgOAHgADMhQIACAAIAFgFgAm9ibIAAACIgBAEQgEALArAkQgBgIAFgQQAEgNAWgPQAIgHAHgCQgfgZgOgRQgfARgHAhgAEjgnQgLgVgLgEQAHgWARAXQAPAWAAAOIgCAHQABAAAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgCAAgKgUg");
	this.shape_4.setTransform(251.6,171.3);

	this.instance_14 = new lib.MIX_34_handle("synched",0);
	this.instance_14.setTransform(54.9,106.4);

	this.instance_15 = new lib.MIX_34_bulbL("synched",0);
	this.instance_15.setTransform(181,58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15},{t:this.instance_14},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape},{t:this.instance_7}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.3,-28.8,314,255.9);


(lib.utensils = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.Utensils_up();
	this.instance.setTransform(27.4,37.1,1.1,1.1,0,0,0,27.4,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjrGSIgGgDIgMgJQgNgaAKgdIABgIQAFiKgBiLQAAgJgCgJQgGgbAPgQQgLgHgIgIQgyg2gQhHQgGgXAFgXQADgLAGgJQAsg5BGAOIgSg/QgBgGAAgHQADgQANgNQAfghAogUQA3gcAkAwQAwBzArB1QACAHgFAGQgWAagjAJIAHBVIAUAZIAMAAQAfhdAhhcQAIgYAQgWQAthDBNAEQAiAFAYAVQATARAMAaQAUArgNAvQgCAIgHADQhMAphMgtIgZB5IAQABQAPACAGAMIAGAQQADAXgKARQgCCKAACKIACASQACARgFATQgDAPgQAEQgyAPg0AEQgsAFgqAAQhnAAhkgbg");
	this.shape.setTransform(27.4,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AjzGvIAAAAQgJgCgHgFQgQgLgCgEIgCgEQgTglANgpQAFiKgBiKIAAAAIgBgMIAAgBQgFgXAFgRIgCgCIgBgBQg3g7gThQQgHgdAHgdIAAgBQAEgRAKgOIAAAAQAog0A5gGIgGgWIAAgBQgDgMACgNIAAgBQAEgZATgTQAjglAsgWIAAAAQBPgoAyBFIADAGQApBlAnBlQAKgZAQgYQA3hQBeAEIADABQAqAGAeAbIAAABQAZAUAPAgIAAAAQAYA1gQA5IAAABQgGAVgRAIQhIAnhJgaIgLA1QATAJAJAVIAAgBQAJARAAAFIAAACQADAcgKAXQgCCGAACGIABANIABABQADAWgGAYIgBABQgHAggiAJIABAAQg0APg4AFIABAAQguAFgrAAQhrAAhogdg");
	this.shape_1.setTransform(27.4,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.9,-9.8,72.8,92.1);


(lib.trashCan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.TrashCanButton_up();
	this.instance.setTransform(76.7,116.7,1.05,1.05,0,0,0,76.6,116.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:76.7,regY:116.7,scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjJTnQkugWkchYIgBAAQgLgEgHgKIAAAAQgIgKAAgMIAAhoIAAgBIABgWQgMgDgHgJIgCgCQgIgLABgNIAHjsIAAAAIABgIIAAABQACgLAJgIIAAAAIAEgDIABgBIANgIQAFhhAIhcIAAACIAAgDIABgFIABgTIAAgDIAGg+IAAAAIAHg+IAAgCIAAAAIAKhTQAlkcBCjsIghgpIgDgDIgBgCIgDgFIgBgBQgEgJABgJIABgCIACgJIABgCIAAgBQAbhBAzhCIAAgBQAGgIALgEQAJgDALACIAMggIAYg5IAJgUQAKgYAMgXIABgBQACgFAEgDQAAgFACgEIABgDIArhVIABgBIAAgBIABAAIABgCIAhg4IACgEQANgWAOgVIACgBIANgVIAAAAQBTh4BjhcIABAAIAAAAIACgCQBUhQBgg7IAFgDIABAAIAHgEIgBAAQALgGALABIABABQAKABAIAHQBbA9BPBRQAIAIABALQBWBYBJBwIABAAIAKAQIABABQAqBDAoBLIAAABQAKAOALAUIAAAAQAPAeAbBAIAGAMIAAABIAKAZIAAAAIAGANIAAAAIABADIAAABIAIATIAAAAIAMAcIAGgBIAAAAQALgCALAFIAAAAQAKAEAGAJIAAAAQAUAeAXAlIAAABIABABQARAbATAiQAEAGABAIIABABQABAIgDAIIAAACIgEAHIgCADIglAyIAAAAIgCADIAFAQIAAACIACAHIABABIACAMIAAgCIgBgDIABABIAAACIADAMIAAABQANAwAMAyIARBNIAAAAQAdCEAWCTIAIA1IADAXIADAWIAAAAIAIBDQAKBUAIBYIAAAAIAEA2IAAACIACANIAAACIACApIAKAKIAAABQAHAHACAKIAAgCIABAIIAAABIAGCGIALBfIAAABQACANgIAMQgGAIgJAEIAECBQABAMgIALIAAAAQgIAKgMAEIgBAAIgbAHQhjAXhhASQi4AiiyANIhIAEIgBAAQhGADhFAAQhlAAhkgHgAl/E7IAZgEIgYgmgAC0wmIAAAAIAAAAIAAAAg");
	this.shape.setTransform(76.7,116.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AjMUFQkxgXkfhYIgDgBQgRgGgLgOIgEgEQgNgSAAgVIAAhpIAAgCIAAgDQgGgEgFgGIAAAAIgCgCIgBgCQgOgTABgYIAHjqIAAgCIAAgCIACgOIABAAIALADQgDgHABgIQABgKAHgIIABAAIAAgBIABAAIAIgGIgCABIADgCIAAAAQAFhZAHhVIAAgEIAAAAIABgCIAAgBIABgQIAAgEIAAgBIAGg8IAAAAIAAgDIAAAAIAHg+IAAgBIAAgBIAKhUQAkkVBAjoIgYgdIgDgEIAAgBIgCgCIgGgKIAAAAIgBgCQgGgQACgQIgBAAIABgDQABgJADgIIABgBIABgBIAAgBQAchEA0hEIABgBIgBAAIABgBQAMgQATgGIAAAAIAJgCIAFgOIAAAAIAZg6IAAAAIAJgVQAKgYAMgXIAAAAIADgFIgBACIAEgGIACgHIgBABIADgHIAAAAIAshUIAAgBIAAgBIAAABIADgFIAAAAIAfg2IAEgGQAOgYAPgVIAAAAIABgBIAMgSIACgDQBUh6BlheIABgBIACgCQBXhSBjg8IAFgDIABgBIAAAAIADgBIABgBIACgCQAUgLAVADIACAAIABAAQASADANAMQBcA+BRBSQALALAEAPQBTBXBIBsIACADIAKAPIACACIgBAAIAAAAQArBEAoBMIAUAgIACAEQAQAeAbBCIAFAKIgBgBIACADIAKAaIABAEIABADIACAEIABACIABABIAAAAIABACIAIAUIABAEIABAEIABAAQAJAAAJAEIADABQAQAHAKAOIADADQAUAeAXAmIABABIAAAAIAAABIABABIAAgBQARAcATAiQAHALACANIAAgCIAAAEQACAPgEAOIAAABIgBADIAAgBQgDAHgEAGIAAAAIgCAEIAAAAIgfAqIABACIAAABIACAHIABAEIABADIAAACIABACIgBgBIABACIAAABIADAMIAAgBIAAABQANAwAMAzIASBOIAAAFQAdCCAWCRIAHA2IADAXIADAWIAAAAIAIBEQAKBUAJBYIAAABIAEA1IAAACIAAABIAAAAIABALIABAEIAAABIACAeIACACIgBgCIABACIAAAAQAKAKAFAOIABAEIACAOIAAACIAGCGIALBdIAAADIAAABQACAWgNAUIAAAAIgJAKIADBxIAAAAQABAVgLARIgDAEQgOATgXAGIgCAAIgaAHQhkAYhhASQi6AiizANIgBAAIhJAEIgBAAIgBAAQhHADhEAAQhnAAhlgHgAsUR5IABAAQEcBYEuAWQCoAMCsgIIABAAIBIgEQCygNC4giQBhgSBjgXIAbgHIABAAQAMgEAIgKIAAAAQAIgLgBgMIgEiBQAJgEAGgIQAIgMgCgNIAAgBIgLhfIgGiGIAAgBIgBgIIAAACQgCgKgHgHIAAgBIgKgKIgCgpIAAgCIgCgNIAAgCIgEg2IAAAAQgIhYgKhUIgIhDIAAAAIgDgWIgDgXIgIg1QgWiTgdiEIAAAAIgRhNQgMgygNgwIAAgBIgDgMIAAgCIgBgBIABADIAAACIgCgMIgBgBIgCgHIAAgCIgFgQIACgDIAAAAIAlgyIACgDIAEgHIAAgCQADgIgBgIIgBgBQgBgIgEgGQgTgigRgbIgBgBIAAgBQgXglgUgeIAAAAQgGgJgKgEIAAAAQgLgFgLACIAAAAIgGABIgMgcIAAAAIgIgTIAAgBIgBgDIAAAAIgGgNIAAAAIgKgZIAAgBIgGgMQgbhAgPgeIAAAAQgLgUgKgOIAAgBQgohLgqhDIgBgBIgKgQIgBAAQhJhwhWhYQgBgLgIgIQhPhRhbg9QgIgHgKgBIgBgBQgLgBgLAGIABAAIgHAEIgBAAIgFADQhgA7hUBQIgCACIAAAAIgBAAQhjBchTB4IAAAAIgNAVIgCABQgOAVgNAWIgCAEIghA4IgBACIgBAAIAAABIgBABIgrBVIgBADQgCAEAAAFQgEADgCAFIgBABQgMAXgKAYIgJAUIgYA5IgMAgQgKgCgKADQgKAEgHAIIAAABQgzBCgbBBIAAABIgBACIgCAJIgBACQgBAJAEAJIABABIADAFIABACIADADIAhApQhCDsglEcIgKBTIAAAAIAAACIgHA+IAAAAIgGA+IAAADIgBATIgBAFIAAADIAAgCQgIBcgFBhIgNAIIgBABIgEADIAAAAQgJAIgCALIAAgBIgBAIIAAAAIgHDsQgBANAIALIACACQAHAJAMADIgBAWIAAABIAABoQAAAMAIAKIAAAAQAHAKALAEgAHorqIAAAAIAAAAIAAgBIAAAAIAAAAIAAABIAAAAgAmYEgIA4gPIgBArIgSgQIgNAbg");
	this.shape_1.setTransform(76.7,116.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-12.5,174.6,258.5);


(lib.toasterOven = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.ToasterOvenButton_up();
	this.instance.setTransform(56.6,30.2,1.1,1.1,0,0,0,56.6,30.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgFXIgegBQhbgDhdgEIiigMQhrgHhqgSQgRgDgGgRIgDgMIAAAAQACgfADgfIACgXQACgRgCgQQgBgSAEgQQADgLAFgJQAGgLAHgJQAEgGACgGIAuiBQADgHAGgFIAGgFIgBgNQAAgHACgHIAXhLIAYhKQANgoAqgIQAMAAALACIBIATIAMAGQAfARAJAgQACAHAAAGIgDAkIAigDIBCgEIBCgEQCXgHCZAIQgDgWgBgWQgCgZANgTIAHgIQAYgZAfgJIAqgJIAqgJIAOgBQAVAAASAKQARAJAJARQAFAJADALQAZBWAWBXQACALABAMQABAOgCAOIgDALIAAABIAjArQAIAIAFAOQAGAQACATIADAZIADAdQACAdAAAeQgBAdgDAdIgDAJQgCAFgEAEIgUAPIgSAMQgnAagsARIguASIgLADIhmAIIhFADIgjABIgiABIhNAAIgsAAg");
	this.shape.setTransform(50.9,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AAfF1IAAAAIgegBQhbgDhdgEIgBAAIiigMQhtgIhrgRIgBAAQgigGgLgjIAAABQgDgIgBgJIgBgFIAAAAIAAgCQACggADgfIAAABIACgYIAAgBQABgNgBgOIAAAAQgCgXAGgVQAEgOAHgMQAGgNAIgLIABgBIACgCIAAgBIAuiBIAAgBQAEgKAIgIIAAgBIAAgDQAAgKADgKIAAABIAXhMIAAAAIAYhLIAAAAQATg5A7gKIAEgBQARgBAOAEIABAAIBJATIAEABIAPAIIAAAAQAqAXAMArIAAABQAEAMgBALIAAABIBBgEIBDgEQCGgGCJAFIAAgLIAAAAQgCgjASgbQAFgHAFgFIAAgBQAegeAngLIACAAIAqgJIApgJIAEgBIAPgBIABAAQAdgBAZAOIAAAAQAZANANAaQAHAMADANQAaBXAWBYIAAAAQADANABAOQABARgCAQIgBACIAaAgQAMANAGASIABAAQAGATADAWIAAAAIADAZIADAfQACAeAAAfQgBAegEAfQAAAJgEAJIgBABQgFAJgHAIIgCACIgVAQIAAAAIgVAOQgpAbguASIgBAAIgtARIgDACIgJACIgIACIhmAIIgBAAIhFADIgBAAIgiABIgiABIAAAAIhOAAIgtAAg");
	this.shape_1.setTransform(50.9,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.5,-8.7,122.9,74.7);


(lib.timer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.TimerButton_up();
	this.instance.setTransform(51.1,47.2,1.1,1.1,0,0,0,49.1,45.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:49.1,y:45.2},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPFdQgKgDgJgEIgKgJQgOgUgEgWIhYg2QgUAIgTgFQgUgFgLgRQgFgIgCgJQgEgNgGgNQgJgWgEgYIgHgiQgDgQAEgRIAEgLIAIgWQAHgWAFgUQAHgoASgkIAFgJQARgnAZglQAQgYAYgSQAWgRAYgPQAXgOAZgMQAzgXA0gLIABgNQAGgIAJgFQAZgRAegBQAHACAGADQAHAEAFAFQACADACAEIAKAcIAbAPQALAHAIAKQAlAxAdA4QAQAfAJAgQANAuAJAqQAGAbAJAdQADAJAFAIQALAUAEAWQACAKABALIAAAKQgDASgFAUIAGATQACAJgCAJQgBAJgGAHQgEAEgGADIgEAEIgEAEIgNAKQgHAEgHACQgHAAgHgCQgPgDgOgJQggAMghALIg0ATIgcAKIgsALIgqAMIAAgBQgCAMgLAKQgRAQgXACQgLgBgKgDg");
	this.shape.setTransform(26.2,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("Ag8F/QgNgCgNgDQgOgDgMgHIgEgCQgIgGgGgHIgCgDQgOgTgGgVIhCgpQgVAFgVgFQgggIgSgbIAAgCQgGgLgEgLQgDgMgFgLQgLgZgFgcIgGghIAAAAQgFgWAGgZIAAAAIAFgOIAIgWIAAABQAGgTAEgTIAAAAQAJgrATgpIABgBIADgGQATgpAagoIAAAAQATgbAbgWIABAAQAXgSAZgQIABAAQAZgPAagMQAsgUAvgMIADgGQAIgNAOgIQAfgVAngBIAHABQALACAKAGIAAAAQAKAFAIAJIABABQAGAGAEAJIAAABIAHASIASAKIABABQAPAKAKANIABABQAmAzAeA6IABAAQARAiAKAjIAAAAQANAuAJAsQAHAZAIAcIAAgBIAFAMIABAAQANAYAFAbQACANABANIAAgCQABAIgBAIIAAABQgDAQgEARIAEANIAAABQADAOgCAPIAAAAQgDAQgLAOIgCACQgFAGgHAEIgBABIgEADIAAABIgCACIgRAMIAAAAQgKAGgKADQgEACgGAAQgMAAgKgDQgMgDgLgFIg1ATIAAgBIg0ATIgBABIgbAJIgDABIgrALIAAAAIgeAIQgFAJgJAJIgBAAQgWAXghADIgDAAIgCAAg");
	this.shape_1.setTransform(26.2,29.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.1,-8.8,70.7,76.7);


(lib.stove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.StoveButton_up();
	this.instance.setTransform(126.5,168,1.05,1.05,0,0,0,126.5,168);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aw4cBQgLAAgLgEIgRgVQgzgbg5gRQgIgCgGgIIgFgKMgB0gqJQABgVATgJIAwgWQgQgmgFgoQgDgeAGgeQAHgmAEglIgQglQgigvAHg8IAEgqQABgmASghQARgfAggLQA8gVA7AZQARAWAVAUQALAMAHAPQARAmABApQACAwAGAvQAgAIAOAgQALAaATATIAJA7QANgjgKgjQgGgUACgVQAGgzAoggQAYgTAdAFQA9AIAEA+QADAvABAwQAAAdANAXQALARAUAEQBjACBjADQAuADAdAgQAaAcAOAjQAQAoALAoIAXgEQgOhEAGhEQADgdAMgbQABgCADgBICJg3QAGg3AcguQADgFAEgDIAagXIAPhOIgLgTQglASgkgVQgHgFgFgGQgQgUgOgUIgGgEIAPgzQgTgXgTgUIAAADIgagzQARg5A8gFIAeAFQAJg5AqgjQAGgFAIgCQA+AAAYA2IAUAtQAFAKgCAMQgDANgJALQArAMAEAwQADAjgVAeQAKAfAFAfQADAPgGAQQgIAWgXAKIgOBBQBCAogHBPQA/AoBJAZQAKAEADALIADANIBXgWQgLhAAfg0IAIgOQgDgngNgnQgRgxAKgxQALg4A0gHQAQgEAQAFQA4ANAOA1QADALgCAMQgKA9gMA9IAnCbQAHgtAUgqQAPgeADggQADgkgEgkQgEgcAAgdQAAgjAXgZQAqgqA4AXQA6AZgHA/QgIBCgbA7IAHANIgFBDQgBAHAEAGQAOAagFAdIARADQAQgvAZgqQAIgOAAgRQAAhAAbg7QAPghAigMQATgFAUAHQAjAMAPAiQATAugZArIghA9IgCAEIADAKIgQB4QAZgtAignQAFgFAAgHQABgTAOgKQAKgHACgKQANg6Acg0QAXgrAzgDQAOgDAOAEQA2APAFA2QAFA6gpAqIgxAzIADATIgeBrQBHAJAiA6QAGAJACAKQARBLgPBMQgJAzgIAzIgTB2QBtAhBhBCQAdAUAiAMQBAAXALBAQALA8gxAjIgZYcIgGAUIhDASQACBTgOBRQAAAEgEACQghAagsAJQiBAdiDAZQi4Agi4AYQlxA1l2AvQmNAymOAAIgtAAg");
	this.shape.setTransform(126.7,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("Aw4cfIAAAAQgRAAgQgHQgHgDgFgGIgNgPQgtgXgxgQIgBAAIgBAAIAAAAIgBgBQgSgDgMgRIgBgBQgFgIgDgJIgCgJMgB0gqJIAAgDQADgnAigQIABgBIAWgKQgJgdgDgdIAAgBQgEgiAGgjIAAAAQAHggAEghIgMgaQgng3AJhGIADgpQACgtAUgmIABAAQAWgqArgOIAAAAQBHgZBGAdQAHADAFAGQAPAVAUATIABAAQAOAPAJAUIAAAAQAUAsABAuQACAmAEAlQASAJANARQANguAnggIAAAAQAjgbAqAHIgBAAQBVALAGBWIAAABQADAwABAxIAAAAQAAAUAJAQIAAAAQAEAFAFACQBiACBhADIABAAQA6ADAlApIABAAQAQATAMAUIACgSIAAgBQADggANgfQAEgOARgGIABAAIB4gxQAJgzAagsIAAABQAGgJAHgHIABgBIARgOIAJgsQghADgggSIgBgBQgLgHgIgKIAAAAIgcglIgBAAQgIgGgEgJQgEgKADgJIALgkIgSgUQgJgEgEgJIgbg0QgFgKADgMQAXhMBRgHIAHAAIACAAQAQgwAnggIAAAAQALgJANgEIAKgBQBRABAfBGIAAAAIAVAtIgBgBQAKATgFAXIgBAEQAhAXAEAwIAAAAQADAngSAhQAHAaAFAaIAAABQAEAXgIAXIAAAAQgKAbgXAPIgHAgQA3ArABBJQA1AgA+AVIABAAQAQAHAIANIAjgJQgDg7AegyIgBABIAEgGQgDgfgLgeQgTg5ALg5QAQhNBJgKQAWgFAXAHQBIASASBGIAAgBIABAGQAGggAYgZIAAAAQA4g4BKAeIABAAQBOAigJBVIAAABQgHA+gYA5QAEAIgBAJIgEA4IANgYIAAAAQAEgHAAgJIAAAAQAAhHAehAQAVguAtgPIACgBQAcgHAdAKIAAAAQAwAQATAuQANAdgCAcIAOgcIAAAAQAeg4BDgFQAUgEAUAHIgBgBQBKAVAHBKIAAAAQAGBIgyA0IAAAAIgnAoIABAEQABAHgCAGIgWBMQA9ASAhA4IAAABQAIAMAEAPIAAABQASBQgQBTQgJAygIAzIgPBcQBkAiBZA9QAaASAfALQBQAdAOBQIAAAAQANBHgzAsIgZYOIgBAIIgGAUQgCAHgGAGQgFAGgIACIgsAMQgBBJgMBHQgBASgRALQgmAdgxAJIABAAQiCAdiDAZIAAAAQi5Agi4AYQlyA1l2AwQmPAymQAAIgtAAgAF80UIAMAwQAJgWACgWIAAAAQADgggEghQgCgWgBgVQgJA0gKA0g");
	this.shape_1.setTransform(126.7,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-14.6,278.6,364.8);


(lib.sponge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.SpongeButton_up();
	this.instance.setTransform(31.2,20.7,1.1,1.1,0,0,0,31.2,20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag3DQIhvguIgVgHIgEgCIgdgOIgMgGQgLgFgKgCQgWgHgTgNIgOgKIgGgGQgGgIgDgIQgCgKACgKQACgKAEgIIAAgBQgDgRgFgRIgCgGIgCgIIgCgLQgCgKAAgJQABgJAEgIIAEgGIgDgbQgBgHACgGQACgGAFgFQAGgGAHgEIAOgGIANgHIAOgHIAOgHIAOgGIAOgHIAOgGIAOgHIALgEIARgHIASgGIAQgEIARgFIAMgBIALgBQAKACAJgBIASABIAMAAIABAAQANACAPgBQALAAAJABIAeABQAZACAbAEIAUAEIAKABIAUADQAKACAKADQAHACAHAFIAHAHIAFgCIALgFIANgFIAHAAIBfAPIAIADQAKAEAFAOQACAFAAAGQAAAWgGAYIgBAIIgCAJIgBAJQgCAHABAGIACAQIgBAIIADAIIADAHIABADQADAIgBAHIgCAQIgCAIIABAHQAEAagBAbQAAAHgFAHQgCAEgDACIgOAIIgHAEIgOAGIgOAFIgHACIgOAFIgPAEIgOAEIgPAEIgPAEIgPAEIgPAEIgPADIgZAGIgHABQgOAFgPADIgxAKIgTAFIgKACIgKACIgbAGIgTABIgJgBg");
	this.shape.setTransform(31.7,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("Ag9DtIgFgBIhvguIgUgHIgBAAIgHgDIgcgOIgBAAIgKgFIgCgBQgHgEgGgBIgDgBQgagIgWgPIAAAAIgQgKIgCgCQgFgFgFgFIgBgCQgJgLgDgOIgBgBQgEgRADgQIABAAIAEgQIgFgWIAAACIgDgLIgCgGIgBgDIgCgLQgCgNAAgNIAAAAQABgOAHgNIgCgSQgBgNAEgLIAAgBQAEgNAKgKQAIgJALgGIABAAIAQgIIgCABIAOgHIAOgHIgBAAIAOgHIACgBIAMgFIAOgHIACgBIAMgFIAOgHIAHgCIAFgCIABgBIAUgHIgBAAIATgGIAAAAIARgFIATgFIABAAIAOgCIAOgBIAEABIAOAAIABAAIAUABIAKAAIABAAIAFAAQAKACALgBIABAAQANAAALABIAbABIACAAQAbACAcAFIAAgBIATAEIAMABIAUADQAMADALAEIABAAQAIACAIAFIAPgFIAJgCIAHAAIAFABIBfAPIACAAIALAEIACAAQAWAJAJAbIAAAAQAEAKAAAKIAAABQAAAagHAbIAAABIAAADIgBADIgBAGIgCAMIAAABIAAABIACATIAAACIAAADIABADIACAHIABABIABADIAAAAQAEAOgBANIAAgBIgDATIAAACIAAABIAAADQAEAcgBAdIAAAAQABARgLAPQgFAHgIAGIgCABIgMAHIgJAFIgDACIgOAGIgCABIgOAFIgCAAIgHACIgMAEIgCABIgOAEIgBAAIgOAEIAAAAIgPAEIgOADIgBABIgPAEIgPAEIgCAAIgNADIgBAAIgZAGIgDABIgFABIgdAHIABAAIgyALIABAAIgSAEIgCAAIgKACIgKACIABAAIgdAGIgCABIgWABQgHAAgIgCg");
	this.shape_1.setTransform(31.7,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.7,-3.6,72.9,47.9);


(lib.soap = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.SoapButton_up();
	this.instance.setTransform(15.6,26.6,1.1,1.1,0,0,0,15.6,26.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEE+IgbgEIgRgGIgTgGIgPgHQgIgEgHgFIgJgHQgMgLgHgNQgHgOgCgPQgCgSAFgNQADgJAFgIQAFgKAJgLQA1hDA5g+IASgTIABhLIgLgRQgEgHAAgHQgCgoAPgkQAFgKAMgEIADgBIAAgUQgMgQgHgQQgGgOgBgOQgCgPAHgPQAIgRARAAICLgGQAWAAAIAVQADAKABAJQABAQgJAOQgMAUgZAAQgVgCgRAHQgBgBAAABIgBAHQgDARgQAHIgOAFQAJABAJADQAIADAIAFQADADACAFIALAoIACAJQAIAegTAXIgHAGIgBBKQARAXARAYIAsA9IAeAoIAKAOQALAOADARQACAOAAAOQAAAXgOAQQgGAHgHAFQgwAhg9ACQgfADgfAAQgiAAgkgEg");
	this.shape.setTransform(15.2,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AgTFgQgagBgbgDIgBAAQgkgFghgOIAAAAQgSgHgQgKQgPgIgMgOIAAgBIgFgHIgBgBQgFgHgDgHIgBgBQgFgMgCgMIAAAAQgFgTACgTIAAgBQAAgXAPgVIAGgIIALgNIgBABIAQgUIABgCIAQgTIAAAAQAVgcAYgbIABgBIAPgQIAAAAIAagbIAAAAIABgBIAAg1QgUgZADghIAAAAQAEghAKgdIAFgNIAAAAQAFgKAIgHQgHgLgFgNIAAABQgJgTAAgUIAAgBQgBgMABgMIABgDIABgFIABgDQAJgcAagKIACgBIANgDIAEAAICMgGIAEAAIANACIAFACQAMAFAJAHIACACIAHAIQAEAHACAHIAAABQAIAUgDATIAAACIgCAMIAAACQgFATgKAKIgBABQgQAQgZAHIgIABIgGAAIgDAAIgMAAIAAAAIgBABIABgBIgFAAIADADIAGAHIgBAAQAHAJADANIAAgBQADAOAGAOIAAABQAHASgCAUIAAACIgBAIIAAgCQgBAcgUATIAAAyIAcAoIAAgBIAsA9IABAAIARAYIAAABQAEAFAEAEIACABQAMAMAJATIAAAAIAFAOIAAABIAHAgIAAABQADAQgEASIAAAAQgDANgHAMIgIANIAAAAQgKAQgRAMQgOAKgVAGIAAABQgTAGgUAEIgBAAQgfAHgfAAIAAAAIgSABIAAAAIgsABIgBAAIgBAAg");
	this.shape_1.setTransform(15.3,26.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-8.3,46.1,70.5);


(lib.sink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.SinkButton_up();
	this.instance.setTransform(34.1,24.9,1.1,1.1,0,0,0,34.1,24.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,y:24.8},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Al6EXQgJAAgHgGQgHgFgDgIQgDgIABgJQAMg2AigcQAJgIAPgJIAHgcIgBAAQAEgRAdguIABAAIAUgeIgKAAQgKABgYgHIgFgBIgNgGIAMgWIgCgBIgDgCQgLgHgKgFQgKgFgFgLQgEgKAEgLQAEgLAKgFIABgBIAAgPIgBgaIgDgBQgLgEgGgKQgGgKACgLQACgLAKgHIABgBQgFgDgDgFQgHgIAAgKQAAgKAGgIQAGgIAJgDQAYgHANAAQAeAAAbASIABAAQAMAIAYATIADADQABgEAOADIABAAQAjAJAGAEIgBgBQAdAPAhAkQAGAGACAIQABAJgDAHQgCAIgHAGIgKAIIAAAAQACAJgCAIQgCAIgGAGIgVATIgCABQgLAJgLAGIgBAbIAVAgQAJgeAHgSIAAAAQAJgSAUggIABAAIA/hhIgBADQAGgNAggkIAAABQAogwAdgRIADgBIApgXIABgBQA9geAUARIABABQASAJAPAXIAAAAQATAcAAAiQATgOAtgNIAJgBQAOAAATAEIADABIALADQALAEAGALQAGAKgDAMQgEALgKAHQgKAGgMgDQAMAngBAJQAAAWgEANIgEANQAJAFAEAKQAEAMgFALQgFALgMAEQgeAMgTAAIgBADQgFAKgKAFQgFADgGAJIgFAGQAEgBAUAfIAAABQAjA4AFAdQADAFALAHIAAAAIAfAUQAFADAEAGIAJAPIABABQAOAXACAPQABAIgDAIQgDAIgGAFQgHAFgIABQgWADiTAJQidAJg1AAIAAAAQg7AAlBgXg");
	this.shape.setTransform(34.1,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AABFMIgRAAIgBAAIgbgBIAAAAIgPgBIgCAAIhXgFQgegBgcgCQgXgBgWgCQgcgBgagDIAAAAIg3gEIgDAAQgRgCgPgFQgSgFgKgQQgLgOAAgRIAAgBQABgmASggIAAAAQAKgSAQgQIAAAAQAMgLANgKQAEgQAGgPIABgBIALgYIABAAIALgUIACgEQgNgEgLgFQgLgGgEgKQgEgLAFgKIAAgBIgOgLQgMgKgDgPIABABQgFgRAFgRQADgOAIgKIAFgGIgGgDIgIgIQgVgXAHgeIAAACQABgHADgGIgEgJIAAgBQgEgLACgKIAAgBQADgRAKgNQAVgbAjgDQAcgEAbAIIACABQAZAIASAPIAXAQQARACAOAFQATAEAMAHQAnAXAeAhIAAAAIAEAFIAMgSIAFgHIAIgLIABgBQAMgRAPgPIgBABIATgWIABgBQAMgPASgOIABAAQANgKAPgHIgBAAIAYgPIAAAAQATgNATgHIgBAAQAUgJAXgFIAAAAQAdgFAXAPIAFAEIAPAOQALAKAKAMIAAABQAMAQAGATQARgGASgEQAfgHAdAJIABABIAUAIIABABQAHAEAHAGIACACQAPAQgBAWQgBANgFAMIAAABQgJAUgNAHIACASIABAQIAAAAQABAQgEAPQAKAPAAAUQABAagWAPIgBABIgMAIIgDACQgUAJgWAEIgHAHIgCACIgCABIAJAMIAAAAQAJAOAJASIgBgBIALAWIABABQAIAPAEARIABABIAiAYIACABQAIAHAGAIIAAAAQAKAOAJAQIAAABIAGANQADAGABAIQADAMgCANIAAAAQgCAPgIAMIgBABQgKAOgQAFIABAAQgXAJgaABIgqADIgBAAIgpACIAAAAIgPACIgCAAIg1ACIg1ADIABAAQggADgfAAIgsABIgBAAIghABIAAAAIgBAAg");
	this.shape_1.setTransform(34.2,25.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-8.1,87.1,66.5);


(lib.plates = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.PlatesButton_up();
	this.instance.setTransform(32,27.4,1.1,1.1,0,0,0,32,27.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhSFOQg8AAg1gZIAAAAQhCgfgShCQgTgDgSgFQgogIgVghIAAAAQgXgjAggYQAJgIAMABIADAAQgkgVAMgsQACgKAIgHIAFgDQgTgTAJghIAEgIQgBgIABgKQACgLAIgHQAIgHALAAIBXgDIgDgHIglgKIgBAAIgHgBIgFgBQg+gOAJg9QACgMAJgHIAIgGQAFgEAGgCQAFgBAHAAIA+AJQgagJgYgLQgkgOgFgmIAAgBQgEgWALgLQAJgRAZAAIAIABIAnALIgBgBIBUAVIAAAAQEDA9EKAXQAKABAHAHQAIAHACAKIABAJQABASgJAOIABAGQACAegRASIABACQANAUgMAXIAAABQgSAkgqAJIgRAGQgFABgEAAIgGAAIA9ACQAKABAIAGQAHAHADAKQAFAbgTARIAAABIgGAFIAFAEQAIAIABAKQACAVgOATIABgBIgCADQALApglATIgBAAQgyAdg5ADQgIAbgZATIAAABQg4AqhHAHIABAAQgxAHgwAAIgmgBg");
	this.shape.setTransform(32,27.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 6 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AiRFlIgBAAQgogHglgUIAAAAQgbgOgUgYQgVgXgMgaIgBgBIgBgBIAAgBQgJgGgKgDIABAAQgcgJgVgPIgCgBQgNgKgMgOIAAgBQgggoAbgqIAAAAQAEgHAGgGIgEgMIAAgBQgCgLAAgJQAAgMADgLQACgIADgGIAFgHIAAAAIAAgBIgEgKIgDgIIAAgDIgBgIIAAgRIAAgCQACgMADgMIAAgBQADgLAGgKQADgGAEgGIACgCIAIgHIAIgFIgBAAIgIgLIgGgLIgBgCQgEgLgBgLIAAgBQgFgYAKgYIAAgBQAJgTAOgKIAAgBQgJgQgEgRIAAAAQgEgRABgSIAAAAQABgKAEgHQADgIAFgGIAAAAQAFgHAGgFQAIgHAMgDQAJgEALgCQAGgBAGACIAJACIABAAIB6AfIgBAAIAhAIIgBAAIAiAHIAAAAIAgAHIgBAAIAhAHIA0AKIA7AIIABAAIAeAFIgBAAIAfAEIAgAEIgBAAIAiAEIAAAAIAuAGIABAAQAdAEAcACIABABQAgADAfAJIAAAAQANAEALALQAJAIAEANIgBgBQAIAWgHAYIgDALIAAABIgBAKQgBAOgDAMIAAgBQgCAJgFAKQADAGABAIIAAgBQAAAKgBAJIgBACQgDANgFAMIAAACQgEAIgFAGIACgCIgIAJIgDAEIgCACIAHAFQAIAEAEAMIACALIAAgBIABAMQAAALgEALIAAgCQgEALgFAJQADAGACAHIABADIABALIAAABIAAAMIAAABQgCALgDAKIAAAAIgFALIAAAFIAAAFIgBAKIAAABQgDAMgGAKIAAABQgIALgKAKIgBABQgUAQgaAKIgBAAQgjAMgnAGIgBACIgEAGIgBABIgGAKIAAgBQgGAJgHAJQgIAIgIAGIgBABIgMAIIgDACIgNAGIgSAJIgBAAQgMAGgNADIACAAQgVAHgVACQgVAFgUACIgBAAQgmAEgpABIgBAAIgTABQgnAAgogJgAFAgZIABAAIgBAAIAAAAgAkRhQIAAAAIAAAAIgBAAg");
	this.shape_1.setTransform(32,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.7,-9.1,83.6,73.3);


(lib.ovenMitt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.OvenMitButton_up();
	this.instance.setTransform(52.5,51.1,1.1,1.1,0,0,0,51.5,49.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:51.5,y:49.1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWFqQg+g0gphHIAAgBIgLgWIAAAAQgcg6gdg6IgFAAIgFABQgfgCgfgHIAAAAQhBgPgog1QgjgsgUg2QgIgWAHgYIAAgBQAGgRAPgHIADgCQAigMAlAJIgBAAQAhAHAggFQALgXAUgUIAAAAQAXgXAagQIABgBQAQgKASgIQCIg7CQACQgCgOgKgLQgFgGgBgHQgCgHACgHIAEgQQACgIAFgGQAGgFAHgDQArgMAkASIABABQAUALAHAYIAAABQAKApgMAoIgCAHIAIgBQAegDAcgPIAAgBQALgGAJgJIACgBQAYgUAegBQAHAAAHADQAGAEAFAGQAMARAFAUIAAAAQARBBgNA/IAAgBQgFAbgPAWIgBABQguBDhOAVIgBBSQgBBXgcBSIAAAAQgYBHg1AyIAAABQgfAcgnAHIgCAAIgSABQg7AAgugog");
	this.shape.setTransform(35.7,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AgpGBQhCg3gshMIgBgDIgKgTIgBgDIgwhjQgdgBgegHIgCAAQhMgSgug9IAAAAQgmgwgVg7QgMgfAKgiIAAABIABgDQAKgeAagLIAGgDIAAAAQAqgPAtALIADAAQASAEASgBQAMgTAQgRIABAAIAAgBQAagYAbgSIAEgDQARgKATgIQB3g1B+gGIAAgCIgBAAQgDgOAEgPIAEgPIAAAAQADgPALgMIABgBQALgLAPgEQA2gQAvAYIAAAAIACABQAfARAKAkIAAABIAAABQAHAcgCAcIALgFIACgCQAIgEAGgGIACgCIABgBIAAAAQAhgbAogBQAPAAANAHIAAgBQANAHAJAMIAAAAQAPAWAHAZIABAEQARBFgOBFIAAADQgHAfgSAZIAAABQguBChJAZIgBA+QgBBcgdBXIgBADQgbBMg5A2IAAAAIAAAAIAAAAQgmAkgxAHIAAAAIgDABIgWABQhFAAg2gvg");
	this.shape_1.setTransform(35.7,34);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-9.2,92.3,86.5);


(lib.mixingBowl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.MixingBowlButton_up();
	this.instance.setTransform(57.6,28.6,1.1,1.1,0,0,0,57.6,28.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj2E6QgLgBgIgIQgIgIgBgLIAAgEQimgQhOhMQhUhNAAiVIAAgDIABgMQgSgEgDgDIgCgBQgegSAAhFQAAhNAcgQQAFgDAFgCIAegJQADgGASgEQALgDAdgEQA3gHB7gNQEDgcCWgCQBkgCCWADQDmAEBEAQQALACAGAJQAcAjAAA4QAAAQgIAcQgFARgFAKQgFAMgMAEIgTAIIAGA3IAAADQAABlhDBKIgBAAQhIBRiSAfIgBAOQAAALgGAIQgHAIgKACQgiAIhEAIQiDARidADIAAAAIAAAAIiZgIg");
	this.shape.setTransform(56.9,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("Aj4FYQgWgBgQgQIAAAAQgIgIgFgKQiigUhOhNIABAAQhchSgCifQgGgDgDgCQgrgXAAhZQAAhkArgTQAIgFAJgDIAAAAIASgFQAKgJAYgGQAMgCAfgFQA3gHB8gNQEFgcCXgCQBkgCCXADQDqAEBGARQAVAFANARIAAgBQAiAqAABEIAAAAQABAUgKAgQgGAVgGALIAAAAQgKAVgVAJIAEAgIAAAGIAAABQAABxhLBTIgDACQhIBPiJAiQgDAPgKANIAAAAQgNAQgVAEQgjAIhFAJQiFARieADIgBAAIAAAAIibgIg");
	this.shape_1.setTransform(56.9,28.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-6.9,137.1,70.6);


(lib.mixer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.MixerButton_up();
	this.instance.setTransform(51.5,45.8,1.1,1.1,0,0,0,51.5,45.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ao+ILQgDgGgBgGQgBgHACgGQAJgdAhgxIAAAAQAhgxAfgSQgohpgViAQgShtADgwIgBgCQgEgHgDgVIgQgWIgBAAQgZgjAAgsQAAgoAPgmQARgpAfgaIABAAQBZhJAOgJIABgBQB0hLCQgeIACgBIBwgPQB0gQATAAQCkAABgA2QBoA5gCBdQAAALgFAhIgBAFIgMAdIAAAAIgGAPIABAJIAAgBQAGAWgGAJQgEAMgMAFQgMAGgWAHIACABIAAAAQAgANADAeIB2geQAJgCAIADQAJADAFAHQAGAHAAAIIADAZQABALgGAJQgEAHgHADQAIBhgHAzIAAAAQgIBFgoBTQAwALAXAWIgBAAQAcAZgBAfQAAAQgFAHIgCAEIgGAJIAAAAQgCAFh3CGQgYAbnuAKIAAAAQjJAFh7AAQjDAAgBgLgAhiD8IBsgOQgZgsgPgqIAAAAQgYhBgKhXQgGAAgGgFQgHgIgBgKIgDgXQAAgJADgIQAEgHAHgFQAHgFAJAAICagBQAAgoApgZQifgEhSgFIgwACIgDABIAAABIgHAWQgFAbAAA4QABAsAaBsIAAAAQAVBTAUA/g");
	this.shape.setTransform(51.5,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("Am8IzQiJgBgUgaIABACQgGgLgCgNIAAAAQgBgNAEgMIgBAAQAKggAkg2IACgCQAagnAZgVQgjhjgUh1QgRhpACgzQgEgJgCgPIgLgOIAAAAIgCgCQgfgsAAg1QAAgtASgsQATgwAlgfIAAAAIABgBQBYhHARgMIABAAIABgBQB5hOCVggIgBAAIADAAIACgBIBwgPQB3gQAUAAIAAAAQCuAABlA6IAAAAQB4BCgDBtIAAABQAAANgFAkIgBAAIgCAKIgMAeIgBADIgCAEQAIAigLAQQgGAPgNAJIBagXIAAAAQARgEARAFQAQAGALAOIABAAQALAOABARIADAZIAAAAQACAVgMASIgFAHQAHBYgHAxIAAABIAAABQgHA7gdBGQAgAMASATIACACQAjAhgCAqQAAAbgJAMIgBABIgCAEIAAAAIgFAHIgBACQgNAQhuB+IgBAAQgYAloEAKIAAAAQjKAFh7AAIhBgBgAiDh7IAAAAIAAABIAAAAQgFAaAAAyQABAqAaBmIAAAGQARBAAPAzIApgFQgNgagJgaIgBgDQgXg9gKhQIgFgEIAAAAQgPgOgCgUIgCgXQgCgRAHgQIAAAAQAIgPAOgJIAAAAQAOgJARgBICBgBIACgHQhvgDhBgEg");
	this.shape_1.setTransform(51.5,45.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.3,-10.8,125.8,112.9);


(lib.microwave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.MicrowaveButton_up();
	this.instance.setTransform(47.5,28.9,1.1,1.1,0,0,0,47.5,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,y:28.8},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlCFUIgIgEQgTgKgHgUIhDgcQguAVgYguQgFgKgJgHQgLgHgBgLIgFhcQgFhQAFhOIAHhdQADgtAIgpQAEgXALgSQADgFAFgBQBAgVBCgLICVgZIA8gKIEngTQA3ACA1AIQBhAMBcAdIAYAIQARAGADAUIAjHyQACAJgHAHIgLAOQgLAQgPAJQgOAJgPgCIgEAAQgRgFgPgKIgdAEQhVAMhUAKQhfAJhgAFIgnABQh5ACh4gIIgGAHQgMANgSADIgKABQgOAAgNgFg");
	this.shape.setTransform(49.7,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AlMFwIgCAAIgKgFIgBgBQgWgMgMgVIgsgTQg/AWgihCIAAABIgFgGIgBgBQgVgQgCgYIAAAAIgFhcQgFhSAFhQIAAAAIAHheQADguAJgrIAAAAQAEgbANgWQAKgSASgEQBBgUBDgLIAAAAICVgZIAAAAIA8gLIADAAIEngTIADAAQA4ACA3AIIgBAAQBlANBeAeIABAAIAXAIIAAAAQAjALAFAnIABACIAjHwQAEAWgRATIABgBIgKALQgOAVgTAMIgBABQgWANgXgCQgHABgGgCQgPgFgPgIIgRADIgBAAQhVAMhVAJIAAAAQhgAKhgAFIgBAAIgnABIAAAAQh0AChygHQgRARgaAFIgBAAIgPABQgTAAgRgHg");
	this.shape_1.setTransform(49.7,28.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-8.8,111.7,75.1);


(lib.measuringCup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.MeasuringCupButton_up();
	this.instance.setTransform(38,25.9,1.1,1.1,0,0,0,38,25.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtE1IgtgFQiBgOhZheQgcAWgkAEQgOAAgMgDQgugMgSguQhBihgGixQAAgSAOgFQApgRAtAIIgBgRQgBgJAFgGQAXgcAkgQIBxgPIBZgEQBBgFA/gCQCIgDCIAMQAqADAoAPQAOAFAMAKQAJAHADALQAPA+gyAqIgCALQgCAngFApQgIBLgPBPQgEASgFAQQgLAfgNAfQgPAigbAZQgQAPgVAJQhRAjhWAAQgZAAgZgDg");
	this.shape.setTransform(38.1,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AApFTIgqgFQiCgOhchVQgaAOgeADIgEAAQgRAAgQgEIgBAAQg7gQgYg8QhDingGi1IAAAAQgBgoAhgMQAhgNAjgBQACgJAGgIIABgBQAbghArgTIAIgCIBygQIADAAIBZgEQBBgFA+gCIABAAQCJgDCKAMQAuAEAsAQIAAAAQASAHAQAMIABABQARAOAFAUIAAABQASBJg2A0QgDAngEAoQgJBNgPBQIAAAAQgEAUgGASIAAAAQgLAggOAgIAAABQgSAngfAdQgUATgaAKQhVAmhdAAQgbAAgbgDg");
	this.shape_1.setTransform(38.2,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,-8.2,95,68.6);


(lib.juicer = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.JuicerButton_up();
	this.instance.setTransform(25.1,26.1,1.1,1.1,0,0,0,25.1,26.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiuERIAAgBQgSgRgCg8QglgNgcguIAAAAQghg0AAg/IAAgDIAFgxQABgLAJgIQAKgIAMAAIAxADQgEgJAAgQQgBgmAmgeIAAAAQAZgTAhgIIgBAAQAKgCAEgKQASgpAGgGIABgBIAkgmIABgBQAegaAbgEIAAAAQAqgHAuAoQAcAYATAfIAAAAQALATAJASQAPABAJADIABABQA4ATATAVIAAAAQAVAUgBAjQAGATgsAlIAAAAQgQANgLAIQgFBDACBWQACBOgIAVQgNAqg+AJIABAAQgdAFhzAAIAAAAQiYAAgWghg");
	this.shape.setTransform(25.1,25.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AAUFQQjJAAgeg4IAAAAQgOgUACgkIABgBIABgLQg1gpgSggIAAAAQgegwAAhYQAAhEAjgOQANgIAiAAQADgPAJgVIAAAAQAQghAVgRIABAAQAMgKAegMIASgHIAKgUIAAAAQATgnAngkIAAAAQAogmA0AAQAXgBAlAUIAAAAQApAVAUAcIASAYIAAABQAOARAGAMIAAABQADADAFADIAAAAIAaAIIgBAAQBmAegBBdQAAAGgCAGQgQAogxAiQgBBGAABZIAAABQgCBNgPAcQgTAqg8ALQgjAHhnAAIgBAAg");
	this.shape_1.setTransform(25.2,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-7.5,64.7,67.3);


(lib.fryingPan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.FryingPanButton_up();
	this.instance.setTransform(56.6,14.1,1.1,1.1,0,0,0,56.6,14.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai5CcIgCAAIhTgCQhdgDhEgEIgBAAQgPgBgvgHIgBAAQgxgIgNgDIgBgBQgkgLgFgMQgJgKgNg2IAAAAIgVg4IAAgBQgSgwAcgVIAAgBQAHgIAsgPQAhgLAJgCIABAAQDUghDGAAQDAAAAtAEQCgAMArAwIAJgDQAhgPAMAAQAYgDA9gSIAAABQA7gRAyAAQAsAAAYAcIAAAAQAXAYgBAcQAEA5hNARQhCARjVAFIAAAAQgCADgCAMQgLBDgyAHQhvAVhXAJQhUAJhbAAg");
	this.shape.setTransform(56.7,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("Ai3C7IgFAAIgCgBIhRgDQhdgChFgEIAAAAQgQgBgxgHIgBAAIgCAAQgygJgOgEIgDAAQgzgQgHgVQgLgSgNg2IgUg1IAAgBIAAABQgahHArgfQALgMAzgSQAlgNALgBIABgBQDWghDJAAQDBAAAtADQCYAMA4AsQAggNANAAQAXgEA4gPIAFgBQA8gRA1AAQA2AAAhAjIADADQAdAgAAAmQAKBPhqAaIAAAAQg/ARjHAFQgRBThDAGQhwAVhYAKQhVAJhdAAg");
	this.shape_1.setTransform(56.7,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-4.9,136.3,37.5);


(lib.fridge = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.FridgeButton_up();
	this.instance.setTransform(129,211.5,1.05,1.05,0,0,0,129.5,210);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:129,regY:211.5,scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgJtAinQmBguhthCQhQgvhDhnQhUiAgNidQgCgBgBgHIgBgEIgBgMIgFguQgHhIgEhAQgEhBgDh1IgChxQAAoSA4oyQBCqTBoi3QBEh5Asg9QBIhiBTg7QBSg7AkgVIAAAAQA4ghA9gTQBbgcEJgYQgVgXgMgTIAAAAQgjg2gXhlQgJgogCgzQgBgWgBgKIAAgBIgEgFIAAAAQgMgHgKgUIAAAAQgKgTAAgUQAAgLACgJIAAAAIABgDQAEgMALgGQAKgGAMADIBBASIgJgEQgJgEgGgJQgFgJABgKIARhtQABgJAGgGQAGgHAIgDQAIgCAIACIAHACIgNhFQgCgKAEgJQAFgJAJgFQAJgEAJACIAqAHIgBgIIgOgEQgJgCgHgHQgGgHgBgKIgJhXQgCgJAEgIQAFgIAIgEQAEgDAFAAIAAgIIgThNQgDgLAGgKQAFgKAKgEQALgEALAEQA6AVBxALIAAgBQBGAHAnAAIBFgDQBEgEAmgEQAIgBAIAEQAIAEAFAIQAEAIAAAJIAAAAQAIgCAIADQAIACAGAHQAFAHABAIIAOBdQABALgFAJQgFAJgKAEIgMAEIgDA4IAdgGQAMgDALAHQAKAGADANQAGAaAAAPQAAA2glBAIAAAAIgMASIAPAAQAJABAHAEQAHAFAEAIQAEAIgCAJIgLBQIBeABQAMAAAIAJQAJAIAAAMIACA4IAAABQAABqg8A7Qg3A3hRgEIgzBLIBhAPQAJABAHAGQCyApCcA8IAAAAQC4BGBAA+QBKBIALAMIABABQAkAlARAiIABABQAaAuAlChIAwgYQgHgyAigsQAogzA1ABQAyAAAmAhIAAAAQAtAlAAA7QAABBg2AkIABgBQgkAZgfgBQg1AAgkgdIhMAoQAFAhAEAJQAFAJgBAKQgBAKgHAIQgIAHgKABIg3AHMAAcAkFQAAAKgFAIQiRDMkpBpQkhBlmgAAQjbAAk7gmg");
	this.shape.setTransform(128.3,213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("EgJxAjFQmKgwhvhEIAAAAQhWgyhHhtQhXiFgPigIgCgLIAAABIgCgHIAAAAIgBgNIAAAAIgFguQgHhIgEhBIAAAAQgEhBgDh2IgChyQAAoTA5ozQBDqeBqi5IAAAAIAFgJQBBh0Asg8QA/hWBIg6IAagUQBUg8AkgVIAFgCQA5giA+gSQBTgaDggWIAAgCIAAABIAAgBQglg5gZhrQgKgrgCg2IgBgUQgNgLgLgUIgBgDQgMgZAAgaQAAgQAEgNIABgCIAAgBQAHgXAVgMIAAAAQAVgMAYAGIAAAAIAQhnQADgRALgNIAAAAQAKgLAOgGIgHgjQgEgTAJgSIABgBQAIgSASgIIAGgDIAAAAIgJhXIAAAAQgCgSAIgQIAAgBQAGgKAJgIIgPg9QgGgWALgTIAAgBQALgUAUgIIABAAQAVgIAVAIIAAAAQA2ATBpALIAFAAQBEAGAmAAIBDgDQBDgEAlgDIAAAAQASgCAQAIIABAAQAPAIAJAQIAAgBIACAEIAAAAIAAAAQARAFALAOQAMANACARIAAAAIAOBdQADAVgLASIAAAAQgIANgNAIQARAAAQAKIAAAAQAVANAFAYQAHAeAAASIAAABQABA1ghA+QAPAKAHAQQAIAPgDASIAAAAIgGAvIA7AAQAYAAARARIAAAAQARARABAYIACA4IAAACIAAAAQAAB4hFBCIAAAAQg6A7hTABIgQAXIAzAHIAAAAQANACALAIQCvAoCbA7IACABQB3AtBGAqQArAaAZAaIAAAAIBXBUIABABQAnApATAlIAAgBIAAABQAXApAfB9QAEgqAegmQAyhABDACIABAAQA8AAAuAoIACABIAAABQA2AtAABIQgBBPg/AsIgCACQgtAfgngCQg1AAgngYIgoAVIADAOQAJAQgCATQgDAUgOAPIAAAAQgPAOgUADIgdAEMAAcAjqQAAATgLAQQiVDUkzBsQklBnmmAAIAAAAQjdAAk9gmgAm35EIAAABIAAgBgAEV/eIAEgBIAJgCIACgRg");
	this.shape_1.setTransform(128.3,213.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-15,284.1,456.7);


(lib.foodProcessor = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.FoodProcessorButton_up();
	this.instance.setTransform(39.6,46.5,1.1,1.1,0,0,0,39.6,46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhAIYIlLhIQgJgCgGgHQgGgGgCgJIgqjRQgCgMAHgKQAGgLAMgCIBfgXQADgSAHgHIABgBQgKgggOg9QgCgGABgGQABgGAEgFQgEgEgMgpQgWhJgpg8QgGgJAAgJQABgKAGgIQAOgTAegGIACgBIAFgBIACgYQAFgpAFgGQALgWAWgKQAagNBMgOIAIgHIABgBIADgDIgPhRQgCgJADgHIACgDQgQgTACgNQAAgSAGgFQAKgPAPAAIAGAAQBQgPAdAAQBbAABQANQBzASgIAnQAAAjgRACQgHAEgJAAQAPAEgRBIQBiANAUALQAWAJANAaQACAEABAGIAIA7QAXgIALABQA9AAASAQQAoAaAABhQAABdgpBBIAAAAQgrBEg3gCQgNAAgegIIgBAFQAKAFAEAlIBWAVQALADAGAJQAHAJgBALIgSCyQgBAJgGAHQgHAHgJADImaBpIgIABIgGgBg");
	this.shape.setTransform(39.5,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AhHI2IinglQisgmgFgCIgDgCQgSgJgGgPQgFgGgWhwQgWhtABgJQAAgnAjgKIABgBQAmgKAzgRIADgBIgBgEQgYhgAAgTIAAgCQgBgJgLgkIgBgBIg5h0IgBgCIgDgJIgCgEQgCgHAAgLQgCgKAOgUIABgBQAMgRATgLIAGgDIAFgBIAHgcIAHggIABgCQAGgXASgNQAUgQBhgWQgHgggBgaQgBgRABgKIgBAAIgBAAIAAgBQgNgVACgKQAAgsAhgNIACgBQAFgCBJgUIAHgBIBIgCIAAAAQEpAAgGBoQAAAhgNANQgEAHgJAFIgDAcQBVAKAgAfIAAAAQAaAXALA3IALgBQBZAAAeAwIAAAAQAcAkAABgQAABlgzBHQgpA4gvAMIAPAFIAAAAQAfAKAIAFIADACQAPACAAAeIAAACQgKDFgKAMIABgBQgPAegWAEIgBAAIjQA0QjVA2gJAAIgBABIgHgBg");
	this.shape_1.setTransform(39.5,46.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-10.3,98.4,113.4);


(lib.CloseButton = function() {
	this.initialize();

	// up
	this.up = new lib.GenericLargeButton_up();
	this.up.setTransform(77,20.5,1,1,0,0,0,77,20.5);

	// over
	this.over = new lib.GenericLargeButton_over();
	this.over.setTransform(77,20.5,1,1,0,0,0,77,20.5);

	// down
	this.down = new lib.GenericLargeButton_up();
	this.down.setTransform(77,23.5,1,1,0,0,0,77,20.5);

	this.addChild(this.down,this.over,this.up);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,142.2,43.6);


(lib.cuttingBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.CuttingBoardButton_up();
	this.instance.setTransform(84.5,40.3,1.1,1.1,0,0,0,84.1,37.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,x:84.1,y:37.5},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AFDDxQglABgWggIAAAAQgIgLgGgTQjBgKkdgaIAAAAQjvgVh3gOIgCAEIgCAEQgSAbgggBQgaAAgWgOQgXgPgFgZQgRgJgWgVIgBAAQgYgVgFg6IAAgDQAAABAAAAQgBABAAAAQgBAAAAAAQAAgBgBAAIABAAQgUgYADgKQAAgLAHgSIABgCQAAAAAAAAQABAAAAAAQAAAAAAABQABAAAAABQAAgKAGgIQAHgIAKgDIBQgTQACgQAOgOIAAAAQAKgMAWgHIACgBQA4gPA9gOQB+gdAsAAQAKAABcAJIgCAAQA5ACGUAUQDRALDfAAICFgBQAIAAAIAEQAHAFAEAHQAGALAAATQADALgSAYQAAAAgBABQAAAAAAAAQgBAAAAAAQgBgBAAAAIAEAVIAAABQAFAXgKAcIAAAAQgFAQgBAHQgBAdgWAZQgZAegbgCQgSADgYgWIABABIgJgIIj/B3QgBAkgWAZIAAAAQgYAdgbAAIgDgBg");
	this.shape.setTransform(69.4,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AEfEIIgBAAQgogSgSglQixgKixgPIijgPIAAAAQiNgLiNgRQgOAQgVAKIgCABQgYAJgagFQg7gKgYg1QgTgMgRgSIABACQgOgNgIgSQgNgcgDgdIgNgWIAAgBQgHgOABgOQABgTAGgQIABgCIACgFIAFgIIABgBQALgTASgFIgCABQAlgPAngLQARgnAtgNIABgBQBLgTBLgRIAAAAQBHgSBJgGIAFAAIAtAEQB/AKCHAFIABAAQEdAREgAFQB6ACB4AAQAtAAANAqIAAAAQAGAUgCAVIAAABQgDAWgKAOQADATgCATIAAABQgDAUgEARQgGAZgIAVQgTA2g2ARIgCABQgRADgQgCIgCAAQgXgFgSgNIjdBnQgFAigWAcQgaAggpAGIgDAAIgEAAQgUAAgUgIg");
	this.shape_1.setTransform(69.5,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.9,-7.3,166.9,54.5);


(lib.cookBooks = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.CookBooksButton_up();
	this.instance.setTransform(43.1,41.4,1.1,1.1,0,0,0,43.1,41.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am2F4QgJgDgFgIQgFgHAAgJIgImmQAAgHADgHQAEgHAGgEQAXgPAZgDIAAAAIApgEIAAAAQALgBALABIgPjBQgBgHADgGQACgGAFgFQAhgeAqgHQAigHAgAIIABAAQAdAIAcAJIAAAAQAKAEAFAEIAIADQAVAHAUAKIgBgBQA2AZA3ASIABAAQBSAcBPAVQAJADAGAIQAGAHABAKIACAmICIAsQAIADAFAGQAGAGABAHIBjG1QACAIgDAIQgCAIgHAFQgGAGgIABIgPACQgMACgKgGIgBgBIokAKQgIAAgIgEIj8AFIgIACIgGAAQgGAAgFgCg");
	this.shape.setTransform(45,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AnBGUIAAAAQgRgGgKgPQgLgPAAgSIgImmQAAgPAHgNIAAgBQAHgNAMgJQAdgTAhgEIAAAAIADAAIAegDIgMiiQgBgNAFgNQAFgMAKgKIAAAAQAnglAzgIQApgIAlAJIAAABIACAAQAdAIAcAJIABAAIACABQALAEAGAEIAHADIgBgBQAWAJAVAKQAyAWAyARIAGABQBQAcBPAVIAAABQASAFAMAPIABAAQAMAPABATIABASIB1AmIgBAAQAQAFAKALIABABQAKAMAEAPIBiG0IAAAAQAEARgFAPQgGAQgMALIAAAAQgNALgQACIgPADQgTADgRgIIobAKQgNABgLgFIjxAFIgFABIAAAAQgHABgGAAQgLAAgLgEg");
	this.shape_1.setTransform(45,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.5,1.3,99.3,81.8);


(lib.bowls = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.BowlsButton_up();
	this.instance.setTransform(40.1,36.6,1.1,1.1,0,0,0,40.1,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIGRIAAAAQg3gdghgwQgJAKgLAJQhXBJh0gXIAAAAQhkgUgyhcIAAAAQgagwAHg1QABgJAFgGQgEgRgBgSIAAgBIgCgOIAAgBQgEgbAJgNIgEgkQgBgJAEgIQAEgIAIgFIACgBQgahEAJhOIAAAAQABgJAFgJIAAAAIgGg0QgCgJAFgJQAFgJAJgEQAJgEAKACQA7ANA8AIQBhAFBhgHIADgIIgBAAQACgHgCgIQgKghAHgfQABgFADgEIgEgQQgEgZgCgXQgDglAZgKQAKgGAKACIBYARIAAAAQBeAVBfgGQB+gKB7gYQAJgCAJAEQAJAFAFAIQAFAJgCAKIgLBLIAAAAQAJAHACALQAIA4gSAxQAEAEACAFQAFAJgCAJIgKA0QAHANABALIAAACQADBLggBAQAJAAAHAEQAJAEAEAJQAEAJgCAJIgJAzIADAIQAKAugNAsIAAAAQgTBBgrAzIAAABQgJAKgOAFIgBAAQg9A9hUAOIAAAAQgjAHgiAAQhQAAhLglg");
	this.shape.setTransform(40.2,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AgDGsIgDgCQgugXgfgjQhhBPiBgYIgDgBQhwgYg3hnIgCgDQgdg3AIg9QABgJAEgIIgEgbIAAgCIgBgIIgBgEQgEggAIgTIgDgZIAAAAQgCgSAIgQIAAgBIAGgHQgUhDAIhJIAAgDQACgKADgJIgFgrQgDgTAKgSIAAAAQAKgRASgIIAAAAQASgIATAEQA6AMA5AIQBRAEBRgEQgHghAHggIAAAAIABgGIgCgIQgEgagCgZIAAAAQgEg/AtgOQASgJATAEIBWAQIADABQBaATBagFQB8gKB5gYIAAAAQAUgDARAIQASAJAJARIAAAAQAKASgDATIgJA+QAGAKACANIAAAAQAJA3gPAxIAAABQAJASgEATIgHAqQAFAOABANIAAABIAAAAQADBDgWA5QAKAJAGAMIAAAAQAIASgDATIgIAqIACAFIgBAAQAMA1gQA0IgBADQgUBEgtA2IAAABIgCACQgMAOgSAHQhAA+hYAQIgDAAQgmAIglAAQhXAAhPgog");
	this.shape_1.setTransform(40.2,36.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.4,-10,101.2,93.7);


(lib.blender = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.BlenderButton_up();
	this.instance.setTransform(22.9,35.9,1.1,1.1,0,0,0,22.9,35.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1,y:35.8},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ai/GkQgMAAgIgIQgIgIgBgMQgDgmAMg2QglgTgTg5IAAAAQgPgqAAgwQgDgdAqguIABAAQAbgfAHgNIAPhgIABAAQANhQAfhHIgCgFQgCgJADgJQAKgbAegsIAAAAQAbgnAIgUIACgDQAIgPAVgMIABgBQAVgLAUAAQAiAAAQASIgBgBQASAQAAAYIAAAIIALANQAYAbAkA2QADAGABAHQABAGgCAHQgBAHgEAGQAVAtATBTQATBOgDApQAaAJAWASQAtAkgBAzIgBAJQgaBYgmA8QgEAGgGAEQAJAiAAAaQAAAtgdAHIgHACIgvAGIABAAQgZAEhJADIhJACIAAAAQgQAAiLgIg");
	this.shape.setTransform(22.9,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AiZHEIgogCIAAAAQgWgBgRgQIAAAAQgQgQgCgXQgCgiAIgtQghgagTg4IgBgEQgOgsgBgxQgGgmA1g7IABgBIAAAAQAUgWAIgLIAOhbIABgFQANhLAchEQgDgQAGgQIAAAAQALgcAfgtIACgEQAYgkAIgRIABgBIADgGQAKgVAdgRIACgBQAdgPAaAAIABAAQAwABAXAbQAZAXAAAhIAEAEIAAAAQAZAcAlA5IAAAAQAHALACANIAAABQACAMgEANIgBAFQATAuASBLQAPBCABAqQAUAHARAOQA5AvgCBBIAAAAQAAAIgCAIIAAAAQgbBdgpA/IAAAAIgCADQAHAcgBAXIAAABQAABIgzAIIgKACIgBAAIgvAHIgDAAQgcAEhFADIhKACIAAAAIh1gGg");
	this.shape_1.setTransform(22.9,35.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.4,-9.9,62.8,91.7);


(lib.bakingSheet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.BakingSheetButton_up();
	this.instance.setTransform(78,23.1,1.1,1.1,0,0,0,78,23.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AsgEJIAAgBIgFgFQgYAAgRgRQgIgGgFgIIABAAIgOgTQgGgGgCgIQgFgTAHgSIAAgBIAEgJIAAgBIAMgZQgFgEgDgFIAAAAQgbglAQgiQASgqAXgqIAAAAIBHiCIABgBQAJgPASgEQAUgGAUAAIAZgzIAFgHQARgSAbgHIAAAAIAQgDIAFAAISrAAIACAAIAUACIASAEIAFACIAHADIADABQATALALAUIAAAAIAXAsQAVABATAJIABAAIABAAQAIADAIAFIABABQAPAKAIAPIABABQAwBcA0BZIAAABQARAfgSAXIgBAAQgDAFAAAFQABARgPAJIAVAsIAAAAQAEAHAAALIgBALIAAABQgMA6g1AEQgMAOgPAJIgGACIgBAAQgIAEgJgBIgCAAIgDABI3jAAIgLAAQgcAAgSgUg");
	this.shape.setTransform(78.1,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AszEgQgbgEgUgTQgKgJgIgLIgCgDIgKgOQgKgLgDgPIAAAAQgHgbAJgbIABgBIABgDIAAAAIADgHIABgDIADgHQghgyAWgvQASgqAXgqIABgCIBIiDIABgBIAAAAIAAgBQAPgaAggGQANgEANgCIASgjIAAAAQAEgIAGgHIAAAAQAWgXAhgJIAAAAIABAAIACgBIABAAIATgEIAAAAIAIAAISqAAIAFAAIACAAQAWACAVAFIAIADIAAAAIAHADIAAAAIAGACIABABIAJAGIAAAAQAUAOAMAXIAAAAIAQAeQARADAQAHIABABQAKADAIAFIAEADQAWAOALAWIABABIAAAAQAxBcAzBZIAAABIABAAIgBAAQAaAvgbAkQAAAPgIANIALAWIAAABIABABIAAABQAHAMAAASIgBANIgBAFQgPBKhBALQgMAMgQAIIAAAAIgKAFIADgCIAAAAIgEACIAAAAQgMAFgNgBIABAAIgCAAIgEAAIABAAIADAAIgFABI3iAAIgNAAQgnAAgZgbgAOGBmIAAAAIAAAAIABgBIgBABgAMBE6g");
	this.shape_1.setTransform(78.1,23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-8.5,183.9,63.2);


(lib.bakingPans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.BakingPansButton_up();
	this.instance.setTransform(59.6,24.4,1.1,1.1,0,0,0,59.6,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// glow
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsEtQgVgBgVgDIlrghIACAAQgWgBgTgEQh9gVgah5IgBgCQgNgsgEg8QgLgBgHgIQgKgHAAgNIgCgYIAAgBQAAgJAEgIIABAAQAEgJAJgEIAAgBQAIgEAJAAIABAAIA9AEQgEgXgBgaQgKgCgGgGIgBAAQgJgJgBgMIAAABIgFgjIAAAAQgCgNAIgLQAIgLANgDIACAAII6hMIAFgBIJ1ATQAMAAAKAJIAAAAQAKAKAAANIABASIAAABQABAKgFAJIgCADQgGAIgKADIgOAFIgIA1IA3gLQAIgBAIADQAIADAGAHQAFAHABAIIACAUQABALgGAJQgGAJgKADIgPAFIgTB1IgBAFQgoB3iPAbIkoBLIAAAAQhXAWhOAAQgJAFgKgCIAAAAIgFAAIgCAAIgDABIgDgBg");
	this.shape.setTransform(59.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AguFLQgWgBgUgDIlrghIgDAAQgVgBgSgEIgBgBQiQgYgeiMIgBgBQgMgogEgzQgGgEgGgFQgRgRgBgWIgCgYIAAgBIAAgCIAAgBQAAgQAIgOIAAAAIAAgBQAJgQAQgJIAAAAIABAAIACgBQANgHAPAAIABAAIABAAIABAAIAVABIgBAAIAAgBIgDgCQgOgNgEgUIgBgEIgFgjIAAgDQgCgXANgTQAPgWAagEIACgBIABAAII6hMIAAAAIAKgBIJ0ATQAYABASAPIABACQASARABAZIABATIAAABIAAABIAAACQAAARgIAPIAAgBIgCAEIgBACQgFAHgGAEQAQgCAOAGIAAAAQAQAGAKANQALAOABARIACAUIAAAAQACAVgLASIAAAAQgLARgSAHIgQBjIAAgBIgCAJIgBACQgrCHiiAeIknBLIgDABQhVAWhOAAQgMAFgOgCIgBAAIgBAAIgCAAIgFABIgFgBgAKMkjIgBgBIAAAAIABABg");
	this.shape_1.setTransform(59.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-8.8,143.7,66.4);


(lib.TeaspoonsButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Teaspoons("synched",0);
	this.instance.setTransform(47.2,15.7,1.503,1.503,0,0,0,31.4,10.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,94.4,33.8);


(lib.PressureCookerButton_up = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.CrockPot("single",0);
	this.instance.setTransform(64.9,43.4,0.187,0.187);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,138.2,75.9);


(lib.MIXIEFLYIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// propeller
	this.instance = new lib.MIX_propeller("synched",0);
	this.instance.setTransform(135.1,46.3,1.166,1.166,0,0,0,1,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(31).to({startPosition:1},0).wait(50));

	// nose
	this.instance_1 = new lib.MIX_34_nose("synched",0);
	this.instance_1.setTransform(183.1,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(31).to({startPosition:0},0).wait(50));

	// pupil
	this.instance_2 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_2.setTransform(206,113.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({x:205,y:112.9},0).wait(1).to({x:201,y:108.3},0).wait(1).to({x:200.4,y:106.2},0).wait(31).to({x:203.2,y:100.5},0).wait(2).to({x:204.2,y:98.5},0).wait(48));

	// pupils
	this.instance_3 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_3.setTransform(116.1,121.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(8).to({x:115.1,y:120.7},0).wait(1).to({x:111.6,y:113.6},0).wait(1).to({x:110.6,y:111.6},0).wait(31).to({x:120.7,y:105.3},0).wait(2).to({x:123.5,y:103.3},0).wait(48));

	// eyeR
	this.instance_4 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_4.setTransform(155.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(31).to({startPosition:0},0).wait(50));

	// eye_L
	this.instance_5 = new lib.MIX_43_eyeL("single",0);
	this.instance_5.setTransform(155.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(31).to({startPosition:0},0).wait(50));

	// mouth
	this.instance_6 = new lib.MIX_34_mouth("single",0);
	this.instance_6.setTransform(158.3,156);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83888C").s().p("AAICEQgOgGgFgFQgFgEgRgUQgRgTANhxIAEguQAKgbAUgbQAAALAEAIIANAMIABACIABADQglAkADAXQgBABATAdQgLALgBAaQAAAXALAMQABABACACIAJAMIAbANIAGACQgCAGABAKQAAASgEAEQgGAGgJAAQgHAAgJgEgAgng8IgCgpIAEAgIAAABIgGAoQABgQADgQg");
	this.shape.setTransform(42.4,190.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AC9DfQgKgDgHAAIgBgRQAGABACgCQAEgEABgCIgBgBQgRgPgUgKIgCgCIgPgFIgFgCIgEgBIgEgCQgJgLAKgbIAEgMIABAAIAoAcQApAdAHAHQAYAjgLAMQgHAGgLAAQgHAAgJgCgAhLCbIAAgBQgMgGgLgHIAAADIgSgKQgGgOgBgIQgHgfAQgPQAGgGAUgEQAFgBAFgCIAhAQIALAFQgJAHgHALQgaAlALAeIgKgEgAC8B/QglgXgdgLQAAgFgDgDQgMgNAHgQQAEgLAQggQALAGAbALQApASAWAYQAcAcgKAKIgoAYIgFAGIgUgNgACLgDQgHgGABgMQAAgPALghQAUgEAxAaQAgARAdAUQAFAHACAIQADATgOAOIgOAJQhBg8g0AKgAkYghIgBgUQAGgcAXgcIACgCQAEgDATgGIAHgCIAGABQAaAHAKAMQAOAPAEAWIABADIgIAMIgBACQgXgTgSgBQgkgHgXAlQgHALgCAJIgDgPgAAijJIgLgKIA2gNQAQAOAFAJQAIASgYAhIgoAKQAPgkgXgZg");
	this.shape_1.setTransform(31.6,179.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag+DOQhZgphVhJQhXhKAOg+QACgQAIgPQgEgJARgNQAggvBNghQEkg/BigdIASgGIAHADQAfAvgCAzQgBAGgFARIgCAHIg+AIQiAARhJAUQg4APggAVQgsgJgCAyQgBAQBeA0QAUALBGAbQAAg0AJgcQAjhxBpAgQAzAOAvApQANAOAEARQAKAigdAcIgNAMQAdAgghAhQgVAVgRADIAMANQAJAKACATQAEAYgSASQgVAUgdgEQgVgDgGgHIgBgCIgHAHIgMAJQiHgkhKgigABHAjIgEAuQgNBzARATQARAUAFAEQAFAFAQAGQAVAIAKgKQAEgEAAgSQAAgKABgGIgFgCIgbgNIgJgMQgFgCgBgBQgLgMAAgXQABgaAMgNQgTgdAAgBQgDgXAngkIgBgDIgBgCIgMgMQgHgGAAgLQgUAZgKAbgACqDoQAHAAALACQAXAGAKgKQAMgMgZgiQgGgIgpgcIgpgcIgBgBIAAAAIgEAMQgKAcAKAKIADADIAEABIAFACIAQAFIABACQAUAJARAPIABACQAAACgEADQgDADgFgBIAAARgAgNBnQgNAEgHAGQgUATAGAgQACAMAEAIQAUAKAMAEIAyAWIAEgCIgBgGIgEgbIgDgbIgDgFIABgFQgBgEAAgFQABgRgEgEIghgRIgLACgAhDCrQgLgfAaglQAIgKAJgHIgLgFIgigQQgEACgFAAQgUAEgHAGQgPAQAGAeQACAJAFAOIATAKIAAgDQALAHAMAFIAAACIAJAEIAAAAgABxBDQgHARAMANQACACABAGQAdALAkAXIAVAMIAEgGIAogXQALgLgdgbQgVgZgpgRQgbgMgLgGQgRAhgDAKgAiHCIQgRgkAagkQAHgIAIgHQgSgJgEgEQgJgFgNgNQgEgEgCgJIgBACIgIgNIgRgNQgSgOgOgDIgBAAQgUADgOANQgJAJgFAKQgEAIgBAMIACAEQAIAPAOATQAnAmBLApIAAAAgABBA4QgDAQgBAQIAGgoIAAgBIgDggIABApgAD/A7IANgKQAPgOgEgTQgCgJgFgHQgdgTgfgQQgygagTAEQgMAhAAAOQAAALAGAFIAPgBQAvAAA4A2gAjlhsQgSAGgEADIgDABQgXAdgFAcIAAATIADAPQACgJAHgKQAXgmAkAIQATAAAXAUIABgDIAIgMIgBgDQgFgWgNgOQgLgNgZgGIgGgBgAjZiAIAFACQAeAAARATQALANAKAWQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAsggBogTIAXgHIADgbQABgVgHgIQgGgGgJgCIgJgFQilAqg2AZgAAWjIIALAKQAXAagPAjIAngKQAZgggJgSQgEgKgQgOIg2ANgABcjYIAKAKQAJAKABAVQABAVgJAIIgCACIACAAIAogJQBBgNAjgCIABgRQAEgdgRgSQgEgFgLgBQgFgBgEgDIh0AagAinALIABABIAAABIgBgCg");
	this.shape_2.setTransform(31.8,178.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777FC7").s().p("AADDRQgKgEgUgKQgEgIgCgLQgGggAUgTQAHgHAMgDIAKgDIAjARQAEAEgBARQAAAGABAEIgBAFIADAEIADAcIAEAbIABAGIgEABIg0gWgAjrBEQgOgSgIgPIgCgFQABgLAEgKQAFgJAJgJQAOgNAUgCIABAAQAOACASAOIARAMIAIAOIABgBQACAIAEAFQANANAJAEQAEAEASAKQgIAGgHAJQgaAkARAjQhLgpgngmgAiYAYIAAAAIgBgBIABABgAiCg9QgKgWgLgMQgRgTgegBIgFgBQA2gaClgpIAJAEQAJADAGAGQAHAIgBAUIgDAbIgXAHQhoAUgsAgQAAgBAAgBQAAAAAAgBQgBAAAAgBQAAAAgBgBgAB2iGQAJgJgBgVQgBgVgJgJIgKgLIB0gZQAEACAFABQALACAEAEQARATgEAcIgBARQgjAChBANIgoAJg");
	this.shape_3.setTransform(30.4,177.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83888C").s().p("AANB/QgOgGgFgFQgFgEgSgSQgSgTAHhtIACgsQAJgaASgZQAAAKAHAIIALAMIACACIABACQgkAjAFAWQAAABAUAbQgMALABAZQACAWAKALQAAACAFACIAJALIAcANIAGACQgCAFABAKQABARgDAEQgGAFgJAAQgHAAgKgDgAgrg6IgEgmIAGAeIAAAAIgFAoQAAgQADgQg");
	this.shape_4.setTransform(45.5,187.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#777FC7").s().p("AASDJQgNgEgSgKQgEgHgDgLQgHgfASgSQAHgGALgEIALgCIAjAQQAEAEABAQIABAJIAAAGIADADIAEAbIAFAaIACAGIgFABIg0gVgAjjBBQgQgRgJgOIgCgFQABgLAEgKQAEgIAIgIQAOgMAUgDIABAAQAOACASANIASAMIAJANIABgBQACAJAEADQAOANAJAEQAEAFATAJQgIAFgGAJQgZAiATAjQhNgogoglgAiTAYIAAgBIgBgBIABACgAiBg6QgLgWgMgLQgSgTgeAAIgFgBQA0gZCkgoIAJAFQAJACAGAGQAHAHAAAUIgBAaIgXAGQhmAUgrAeQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAgABziAQAIgJgCgUQgCgUgJgKIgLgKIBzgYIAKAEQALABADAEQASASgCAbIAAAQQgjAChBANIgnAJg");
	this.shape_5.setTransform(32.3,175.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BBC1C7").s().p("ADKDWQgLgDgHAAIgBgQQAFABADgCQADgEABgCIgBgBQgSgOgUgKIgCgCIgQgEIgFgCIgEgBIgEgDQgKgKAJgaIADgMIABABIAqAbQArAbAHAHQAaAhgLAMQgHAGgLAAQgHAAgIgCgAhCCVIAAgBQgMgGgLgGIAAACIgTgJQgHgOgBgIQgJgdAPgPQAGgGAUgEIAKgCIAiAPIALAFQgJAHgGAKQgZAkANAdIgKgEgADDB6QglgWgegLQgBgFgCgCQgNgNAGgQQADgKAPgfIAnARQAqARAXAXQAdAbgKAKIgmAWIgFAGIgVgMgACMgDQgHgFAAgMQgBgOAKggQATgEAzAZQAgAQAeATQAGAHACAHQAFATgOANIgNAJQhEg5g0AJgAkZggIgBgTQAEgbAVgbIADgBQAEgDASgGIAHgCIAGABQAaAGALAMQAOAOAGAVIABADIgHAMIgBACQgYgTgTAAQgkgHgVAkQgHAKgBAIIgEgOgAAZjBIgLgKIA1gMQARANAFAJQAJASgXAfIgnAJQANgigYgYg");
	this.shape_6.setTransform(34,177.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgzDGQhbgnhahHQhZhHAKg7QACgPAGgPQgEgJAQgMQAeguBLgfQEhg8BhgdIARgFIAAAAIAHADQAiAtAAAxQAAAGgEAQIgCAHIg+AIQh/AQhIATQg3APgeATQgtgIAAAwQAAAPBgAyQAWALBHAZQgDgxAIgcQAdhrBqAeQA1AOAxAnQANANAFARQALAggbAbIgMALQAeAggfAfQgUAUgRADIANAMQAKAKADASQAFAXgSARQgTAUgdgEQgWgDgGgHIgCgCIgGAHQgFAGgGADQiKgihLghgABKAiIgDAsQgGBuASATQARASAGAFQAFAEAQAGQAWAIAJgKQAEgEgBgRQgBgKABgFIgFgCIgcgNIgJgLQgGgCgBgCQgLgLgBgWQgBgZAMgNQgVgbAAgBQgEgWAmgjIgCgCIgBgCIgNgMQgHgGAAgKQgTAXgIAbgAC3DeQAHAAAKADQAXAFAKgJQALgMgaghQgHgHgqgbIgqgbIgBgBIAAAAIgEAMQgIAaAKAKIAEADIAEABIAFACIAPAEIACACQAVAKARAOIABABQAAACgEAEQgCACgGgBIACAQgAgHBjQgNADgHAHQgSASAHAfQADALAEAHQAUAKALAEIA0AVIAFgCIgCgFIgFgaIgEgbIgDgEIAAgFIgBgJQgBgQgEgEIgjgQIgJACgAhDCfIAAABIAJAEQgMgdAYgkQAHgKAJgHIgMgFIgigPIgJACQgUAEgGAGQgPAPAIAdQACAIAGAOIATAJIAAgCQALAGANAGgAB1BAQgGAQAMANQADACABAFQAdALAmAWIAVAMIAEgGIAngWQAKgKgegbQgXgXgqgRIgmgRQgPAfgDAKgAiACCQgTgiAZgiQAGgJAIgGQgTgJgEgEQgJgEgOgNQgEgEgCgIIgBABIgJgMIgSgNQgSgNgOgCIgBAAQgUACgOANQgIAJgEAJQgEAIgBALIACAEQAJAPAQARQAoAlBNAnIAAAAgABFA1QgDAQAAAQIAEgnIAAgBIgFgeIAEAmgAECA4IANgJQAOgNgEgTQgDgJgFgGQgegSghgQQgygZgUAEQgKAgABAOQAAAKAHAFIAOgBQAvAAA7AzgAjqhoQgSAGgEADIgCABQgWAbgEAbIACATIADAOQACgIAGgKQAVgkAlAHQASAAAYATIABgCIAIgMIgCgDQgFgVgOgOQgMgMgZgGIgGgBgAjfh7IAFACQAeAAASASQAMAMALAWQABAAAAABQAAAAAAABQAAAAABABQAAAAAAABQArgfBmgTIAXgGIABgaQAAgUgHgIQgGgFgJgDIgHgEQimAog0AYgAAMjAIAMAKQAYAYgNAiIAngJQAXgfgKgSQgFgJgRgNIg1AMgABRjQIALAKQAJAKACAUQACAUgIAIIgCACIACgBIAngIQBBgNAjgCIAAgQQACgbgSgSQgDgEgLgCIgKgDIhzAYgAimALIABABIAAAAIgBgBg");
	this.shape_7.setTransform(34.1,176.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6,p:{mode:"single"}}]}).to({state:[{t:this.instance_6,p:{mode:"single"}}]},7).to({state:[{t:this.instance_6,p:{mode:"synched"}}]},3).to({state:[{t:this.instance_6,p:{mode:"single"}}]},29).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_6,p:{mode:"single"}}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_6,p:{mode:"single"}}]},2).wait(48));

	// head
	this.instance_7 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_7.setTransform(85.7,97.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAZgHARgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQALgKAGgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgFgCgFgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape_8.setTransform(210.1,92.2,1,1,0,0,0,-0.3,0);

	this.instance_8 = new lib.MIX_34_handR("synched",0);
	this.instance_8.setTransform(8.3,193.1,0.999,0.999,4.5,0,0,8.2,-12.1);

	this.instance_9 = new lib.MIX_34_armR("synched",0);
	this.instance_9.setTransform(57,159.2,0.999,0.999,10.3,0,0,21.9,-21.8);

	this.instance_10 = new lib.MIX_34_browL("synched",0);
	this.instance_10.setTransform(188.6,75,1,1,15);

	this.instance_11 = new lib.MIX_34_browR("synched",0);
	this.instance_11.setTransform(101.6,77,1,1,-10.1);

	this.instance_12 = new lib.MIX_34_bulb_R("synched",0);
	this.instance_12.setTransform(69,64.4);

	this.instance_13 = new lib.MIX_34_head("synched",0);
	this.instance_13.setTransform(133.3,108.5);

	this.instance_14 = new lib.MIX_34_arm_L("synched",0);
	this.instance_14.setTransform(210.3,147.1,0.999,0.999,-8.9,0,0,-18.8,-18.8);

	this.instance_15 = new lib.MIX_34_hand_L("synched",0);
	this.instance_15.setTransform(258,178.9,0.999,0.999,-8.9,0,0,-3.5,-4.8);

	this.instance_16 = new lib.MIX_34_handle("synched",0);
	this.instance_16.setTransform(54.9,106.4);

	this.instance_17 = new lib.MIX_34_bulbL("synched",0);
	this.instance_17.setTransform(181,58.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#777FC7").s().p("ABaB7QgGgPAAgPQAAgKAUgWIAQgRIAoAAQA4gBASgHQALgEAHgGIABACIACACQACABAGAAIADgBQACAGAGgEIABAEQgJAEgJAHQgLAKgFAKQgMAQgEAcIg3AGIg/AHIgRgBgAhnBQIAAgBQAAgUAOgWQALgTARgFIACACQAcAQA4AHIgEADQgRAVAAALIAGAaIAGARQhIgLgvgZgAjegDIABgCQgWgRgPgcQgQgcAAgXQAAgMAPgHIAGgDQANAMAUAQIBNA6QgPAIgNASQgOAQgEAQIghgYg");
	this.shape_9.setTransform(241.5,164.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BBC1C7").s().p("ACmB/QgFgIAAgMQAAgCALgKIABgBIAHgEIgBAIQAAAGAEAIQAGAJAKACQgEAPgKAAQgOAAgFgLgADmBbIgRgBQgCgIgFgGIAAgCQAAgRAHgKQAJgSAbgLQAFAEAEAGIAJADIAKAGIACADQAHAHgBANIAAAFIgBAFQgCAIgEAGQgJANgQAAQgPAAgIgGgAhyAEIgEgQIgEgaQAAgHARgWIAFgGIAuADIgEAFQgTAbAAARIAEAcIgpgDgAEVAEIgEABIgCAAIgCAAIgGgBIgGgCIgDgCQgGgBgEgGIgJAAIAAgCQgBgRAFgRQAIgeAfgBQALABANAVQANAIAAASQAAAFgCAEIgBAGIgBAAIgFAGQgFAFgJACQgFAEgCAAIgIgCgAk6hNIAAgDQAAgQAVgVQAMgMAOgIIAIAFIAnAXQgOAGgLAUQgOAWgEATIgzgjgAC9hOQgVgFgDAAQgKAAgJABIAFgNIACgFIAKgJQAcgWASAAQAHAAACACIAFABIACAQIACAPQAAAGgVAJIgLAGIgGgCg");
	this.shape_10.setTransform(255.8,176.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#83888C").s().p("AATBCIgogHIgJgBIgMgPQgOgSgFgIIAEgDQgEgHgBgHIAEgEIAJgZQAMgkAlAAIAUAEIABABIACADIASACQAMAAAJgIQgLAVAAAhIAAAIQACAFAFACQgSARgOAcIgHAPg");
	this.shape_11.setTransform(272.5,176.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ADIDKQgHgNAAgKQAAgKAHgMQgJgCgLgIQgOgIgCgGIgIgGQgVgTgEgMQADgDgJAAIgtABIhOABQAAACAAABQAAABAAAAQAAABgBAAQAAAAAAAAQAAABgGAAQgGABgEgHQhsAAhUgtQhagvgogpQgogrgEgPQgEgPABAAIADgBIAIAHQgKgfAAgVQAAgPAQgLIAIgEQgJgKgCgHQAUAAAWAPIglgfQDmCwBtAIQA1AEAkgBQAjgBASgEQAkgKANgBIABgCQABAAABAGQAFgBAGABQAFgJAJgIQASgRAZgIQAbgHARAJQAUAMAAAeQAAANgIAPQAPgOAUABQAYACAQAXQAQAUACAgIgGANIgFAIIgDAFIgCAEIgIAFQgMAGgIACIAEAHIgBAJQAAADADAIIABABIACAHIABAHQAAAFgHANIgGALQgWAVgxADIAAADQAAAPgOAJQgLAHgPgBQgRABgKgTgADfCdIgBABQgKALAAACQAAALAEAIQAGAMANgBQAKABAFgPQgLgCgGgKQgEgHAAgGIABgJIgHAEgAEHBuQgGAKAAARIAAACQAEAGADAJIAQAAQAJAHAPAAQAPAAAJgOQAFgGABgHIABgGIABgEQAAgNgGgIIgDgDIgKgGIgIgCQgFgHgFgDQgbALgJARgAClAjIgIAYIgEAGQABAIADAGIgDADQAEAIAPATIAMAOIAIABIArAHIAAAAIAHgPQAOgcARgQQgFgDgBgHIAAgIQAAghALgUQgJAHgNAAIgSgCIgBgDIgBgBIgVgCQgmAAgNAjgAALAKQgSAXAAAKQAAAOAFAPIAPABIA/gHIA4gGQAEgcALgQQAFgKAMgIQAIgHAKgEIgCgEQgGAEgBgFIgEABQgFAAgCgBIgDgDIgBgCQgGAGgMAEQgSAHg3ABIgoAAIgQAPgAg2gEQgSAUAAAHIAFAaIADASIApAEIgEgfQAAgRATgYIAEgFIgugDIgEAFgAFPBGQACAAAFgFQAJgCAGgHIAEgFIABgBIACgFQABgEAAgFQAAgTgNgHQgNgUgLAAQgeAAgJAdQgFAQACASIAAACIAJAAQADAGAGADIADABIAGACIAGABIADAAIABAAIAEgBIAIADgAi3gMQgNAUAAAUIAAABQAvAaBJAKIgFgRIgGgaQAAgKARgTIADgEQg6gHgbgQIgDgCQgQAFgMATgAjzg1QgVAUAAARIAAACIAzAhQAEgSAOgVQALgTAOgGIgngYIgIgFQgOAIgMANgADvgOIAGABIAMgFQAUgJAAgGIgBgQIgDgQIgFgBQgCgBgHgBQgSAAgbAXIgKAJIgCAEIgGAOQAJgCAKAAQAEAAAUAGgAlhiqQgOAGAAANQAAAWAPAcQAQAcAWARIgCACIAAAAIAhAaQAEgQAOgSQANgSAQgHIhNg7QgUgQgNgMIgHAEg");
	this.shape_12.setTransform(250.8,169.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#83888C").s().p("AgiBHQgEgEgEgNQgFgOgHgaIgKgxIABgDIgBgHQAAgLAMgGIAIgHQALgIAMACIAUABQADAAAEACIABAAQAEABAGAGIAHAJQAFAIAFALQACAEABAFIAAAGIAGAXIACAHQAFARAKARIAFAKQgRgFgIANIgDgBQgTgGgKAPIgIgFQgDgBgMAEQgNAFgFAFIgBgFgAgSgwQAKAEAIAVQAKAVACAAQABAAABAAQABAAAAgBQABAAAAAAQAAAAAAgBIABgGQAAgOgOgWQgGgNgGAAQgGAAgDALg");
	this.shape_13.setTransform(279,172.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBC1C7").s().p("AE4C5IADgFQAHgTgRg6QgJgegLgSIABAAQAIgFAFACQAgALATA0QAQArgFAOQgEAMgMADIgKAAQgKAAgNgCgAEVC2QgkgMgMhmQAPgoAbA9QAcA9gIAVQgDAKgBABQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBAAIgFgBgAF8C1QATg0g7hFQgJgLgIgIIABAAIAAgBIAAAAIgDgCQgEgDALAGIAQAKQAdATAOAUQAiA4gIAUQgDAJgeAHgAABA7QgJgUAIgZIAGgKIAHgHIALgFIAwgQIgEAKQgCAPgCAEQgEAKAJAUQAJAVASAKQghAPgcAJQgZgOgJgRgAjLAlIgBAAIgKgFQgBgIgDgIQgBgHADgJQAFgMAKgJQAHgHANgGIAEgBQAsAdAVAGIAFACIgDADQgPAFgHAUQgKAcAJASQgjgQgjgXgAE8hIQgCgMgFgHIABgBQAMAAAXgKQAXgKAKAAQAKAAAGAKQAFAIAAAGQgBATguAIIgfAHIgFgSgAmdh7IAAgMQgBgMADgIQACgFARgPIAFgFIAPgGQAYAWAiAbQgKADgIAFQgSAKgFALQgDAKABAPIABAEQghgYgYgUg");
	this.shape_14.setTransform(253.1,175.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#777FC7").s().p("AAzClIgPgFIgBAAIgCgHIgDgJQgEgTAEgJQAFgPARgOIAHgGQAfADAlgGIgCAHQgIAUADAXQAFAeAYAMIgGACIgVAAQgkAAgjgHgAEDB5QgbgKgCgdQgCgSAGgRIAFgFIACgEIAPgGQAcgOAbgPIAFgDIAOBPIgLAOIgyAeIgKgCgAi8AMIABAAQACgHgBgKQgBgMABgFQAEgJASgLIAOgIQA7AvAqAbQgkAOgJAaQgEAKAAANQgigZg4gygAlIh1IABgDIAAgCQAIghAfgQQAOARAeAbQgHABgIAHQgWAOgFANQgFAPAAAJQgqglAFgMg");
	this.shape_15.setTransform(238.6,168.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AFwDzIgIgBQgOgBgJgHQgIgGgDgCQgIAJgJAAQgLAAgIgFQgGgEgHgFIgIgIQgMgTgIgbQgShAgIgtQhRBDhjASIgTACQgvAAgvgNQhfgWiPh2QiWh+gOgaQgBgNACgFQAIgVANgTQANgSAngGIBoBbQCZCEA6AWQA5AXBLgaQBNgdA4ghQAkgWAGgCQAfgZAhAIIAaAGIAIAJQAMAEAEAAQANAAAjgUQAbgOATARQASAOgBAbQAAANgVAQQgbAWgngBIgEgBQAHASAMAUQAIANAJAIQAOAWAPANQAdAZAMAnIAAABQALAVgBAUIgCACQgBALgIAMQgOASgZgBQgMgBgHgDIgEACQgKAOgWAAIgBAAgAFSCCQAQA6gHATIgDAFQAWAEAMgCQALgDAEgMQAFgOgQgrQgTg0gggLQgEgCgJAFIgBAAQALASAKAegAEGBfQALBmAkAMQAIADACgDQACgBADgKQAIgVgcg9QgRglgMAAQgIAAgFAQgAFjBEQAJAIAJALQA6BFgTA0IAAACIABgBQAdgHAEgJQAHgUghg4QgPgUgcgTIgRgKQgKgGADADIADACIgCAAIABABgAg7ApQgQAOgGAPQgEAJAFATIACAJIACAHIABAAIAPAFQAuAKAtgDIAGgCQgZgMgEgeQgEgXAIgUIADgHQgjAGgfgDIgIAGgAA4ARIgLAFIgHAJIgHAKQgJAZALAUQAKARAYAOQAcgJAhgPQgRgKgJgVQgJgUADgKQACgEADgRIAEgKIgxAQgAiVgHQgNAGgHAFQgKAJgFANQgDAKABAHQADAIACAIIAKAFIAAAAQAkAXAjAQQgKgSAKgcQAIgUAPgFIADgDIgGgCQgVgIgrgbIgFABgADHgpQgcAPgcAOIgPAGIgCAEIgEADQgHARACASQADAdAaAKIAKACIAzgeIAKgOIgOhNgAD2hMIgJAHQgLAHgBAKIABAIIAAACIAKAyQAGAaAGANQAEANAEAEIABAGQAFgFANgGQAMgEAEABIAJAFQAKgOATAGIADABQAHgOASAGIgGgKQgJgRgFgRIgCgGIgGgYIAAgHQgBgFgDgEQgEgKgFgJIgIgJQgFgFgFgCIAAAAQgEgCgGABIgTgBIgGgBQgJAAgIAGgAjSApQAAgNAEgKQAJgYAjgOQgqgdg7gvIgNAIQgTALgDAJQgCAFABAMQABAMgCAHIAAAAQA3AwAjAZgAFVhAQAFAHADAMIAEASIAggHQAugIAAgTQAAgGgEgIQgGgKgKAAQgKAAgXAKQgXAKgMAAIgCAAIAAABgAliiZIgFAFQgSAPgBAFQgDAIAAAMIAAAMQAZAUAhAYIgCgEQgBgPAEgKQAEgLASgKQAIgFALgDQgigbgZgWIgOAGgADPhIIACgBIAFgFgAm3ioIgBACIgBADQgEAMAqAlQgBgJAGgPQAEgNAXgOQAIgHAHgBQgegbgOgRQgfAQgIAhgAEkgdQgKgWgLgEQAIgWAQAYQAOAWAAAOIgCAHQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAgBAAQgCAAgKgUg");
	this.shape_16.setTransform(249.8,172.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#83888C").s().p("AggBHQgFgEgDgNQgHgNgHgaIgLgxIAAgDQgBgEABgEQAAgKALgHIAJgHQAKgIAMACQANABAHAAQADgBAEACIABAAQAEABAGAGIAIAIQAGAJADAKIAEAJIABAGIAGAYIACAHQAGAQAJARQAEAFADAFQgSgFgHAOIgDgCQgUgFgKAPIgIgFQgCgBgNAEQgNAGgEAFIgBgFgAgTgxQAKAEAJAWQAKAUACAAQABAAABAAQABAAAAgBQAAAAAAAAQAAAAAAgBIACgGQAAgOgPgWQgHgMgGAAQgFAAgDAKg");
	this.shape_17.setTransform(280.5,170.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#777FC7").s().p("AA2ChIgPgEIgBAAIgCgHIgCgJQgFgTADgJQAFgPARgPIAIgGQAfADAlgHIgDAHQgHAUAEAXQAFAeAZAMIgGABIgdACQggAAghgHgAEGBxQgbgJgDgdQgCgSAGgSIAEgFIACgEIAPgGQAcgOAbgOIAEgDIAQBMIgKAOIgyAgIgKgCgAi8AOIABAAQACgHgBgKQgCgMACgFQADgJATgLIANgJQA8AuArAaQgkAPgIAaQgEAKABANQgkgYg5gxgAlLhwIABgDIABgCQAHghAfgRQAOARAeAaQgHACgHAGQgWAPgEANQgGAQABAIQgrgkAEgMg");
	this.shape_18.setTransform(239.9,167.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BBC1C7").s().p("AE8CyIACgGQAHgTgSg5QgKgfgMgRIABAAQAJgGAEACQAhALAUAzQARArgFAOQgEAMgLADQgFACgHAAQgJAAgMgCgAEYCvQgkgMgOhlQAOgoAdA8QAdA8gHAVIgFAMQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgGgBgAF/CrQASg0g8hEQgJgLgJgHIABgBIAAAAIAAAAIgDgCQgEgDALAGIARAJQAdASAPAUQAjA3gIAVQgDAJgdAIgAACA6QgKgUAIgZIAGgKIAGgIIALgFIAwgRIgEAKQgCARgBACQgEALAKAUQAJAUASAKQghAQgcAKQgYgOgKgRgAjLAoIgBAAIgKgEIgEgQQgCgHADgKQAFgLAJgKQAHgGANgGIAFgCQAsAcAVAGIAGABIgDADQgPAGgHAUQgKAcAKATQgjgQgkgXgAE6hQQgDgMgFgHIACgBQAMAAAWgLQAXgKAKAAQAKAAAGAJQAFAIAAAGQAAATguAJIgfAIIgFgSgAmhhyIAAgMQgBgNADgIQACgEARgQIAFgFIAOgHIA7AwQgKAEgIAFQgSAKgEALQgDAKABAPIACAEQghgXgagTg");
	this.shape_19.setTransform(254.7,174.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AF0DqIgIAAQgOgBgJgHIgLgHQgIAJgIAAQgLAAgIgFQgHgDgGgGIgJgIQgMgTgIgbQgUg/gJgtQhQBFhiAUIgTADQgvABgwgMQhfgUiShzQiYh6gPgaQgBgMABgGQAIgVANgUQAMgSAngHIBqBZQCcCBA6AUQA6AWBLgcQBMgeA3giQAkgYAFgCQAfgaAiAIIAZAFIAIAJIARAEQAMAAAjgVQAbgPATAQQASAPAAAbQAAAMgUARQgbAWgnAAIgEAAQAIATAMARQAJAOAIAIQAPAVAPAMQAeAZAMAnIABAAQALAWgBATIgCADQAAALgIAMQgOASgZAAQgMAAgHgEIgDACQgKAQgWAAIgCgBgAFUB6QASA5gHAUIgCAFQAWAEALgDQALgDAEgMQAFgOgRgrQgUg0ghgKQgEgCgJAFIgBAAQAMARAKAfgAEHBYQAOBmAkAMQAIACACgDIAFgLQAHgVgdg8QgRgkgMAAQgIAAgGAPgAFiA4IADACIgDABIACAAQAJAIAJAKQA8BEgSA1IAAACIABgBQAdgIADgIQAIgVgjg3QgPgUgdgSIgRgKIgIgEIABABgAg7ApQgQAPgFAPQgEAJAFATIADAJIACAHIABAAIAPAEQAvAJAsgEIAGgBQgZgMgFgeQgEgXAIgUIACgHQgjAHgfgDIgIAGgAA4APIgLAFIgGAKIgHAJQgJAaAMATQAKARAYAOQAcgKAhgQQgSgJgJgVQgKgUAEgKQABgEACgRIAEgIIgwAPgAiWgEQgNAEgHAHQgJAJgFAOQgDAJACAHIAEARIAKAEIABAAQAkAXAjAPQgKgTAKgbQAHgVAPgFIADgDIgGgCQgVgHgsgaIgFABgADFguQgbAQgbAOIgPAGIgCAEIgFAFQgGAQADASQADAdAaAJIAKACIAyggIAKgOIgQhMgAD0hSIgJAHQgLAHAAAKQgBAEABAEIAAADIALAxQAHAaAHANQADANAFAEIABAFQAEgFANgGQANgEAEABIAIAFQAKgPAUAFIADACQAHgOASAFQgDgFgEgFQgJgRgGgOIgCgIIgGgZIgBgGIgEgJQgDgKgGgJIgIgIQgGgGgEgBIgBAAQgEgCgFABQgHAAgNgBIgEAAQgKAAgIAGgAjSAtQAAgNADgKQAJgYAjgPQgrgcg8guIgNAJQgSALgDAJQgCAFABAMQACAMgCAHIgBAAQA5AvAjAYgAFThIQAFAHADAMIAFASIAfgIQAugKAAgTQAAgGgFgHQgGgKgKAAQgKAAgXALQgWALgMAAIgCAAIAAABgAlmiRIgFAFQgRAPgCAFQgDAIABAMIAAAMQAaAUAhAXIgCgFQgBgOADgKQAEgMASgJQAIgGAKgDIg7gwIgOAHgADNhOIACAAIAFgFgAm8ifIAAACIgBADQgEAMAqAkQAAgIAFgQQAEgNAWgPQAIgGAHgCQgegagPgRQgeARgIAhgAEjgkQgLgWgKgEQAHgWAQAYQAPAWAAAOIgCAGQABABAAAAQAAAAgBABQAAAAgBAAQgBAAgBAAQgCAAgKgUg");
	this.shape_20.setTransform(251.4,171.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#83888C").s().p("Ag+gJIAMgEQAYgGAZACQATACAVAFIAZAHQgQgBgKADIgDAAIgTABIgMAAQgWABgPAGIgEACQgIAFgHAFQAAgUgKgIg");
	this.shape_21.setTransform(228.8,182.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BBC1C7").s().p("AhMDtIgHgGQgLgPAFgLIACgBQAaAVA8gKQAZgFAVgGIABAEIABAEQAAAUgOAHIgtAMIgPABQghAAgQgPgAhLCxQgFgHACgRIABgCQAWAFAggGIAKgDQAugRACgCQAJgEAGgFQAEACADADIAFAJQAIAOgDALQgDAKgJAFIg3AQQgSADgOAAQgfAAgMgPgAh7C8QgSADgNgRQgZggARgtQAIgXAKgMIAIgIQAOgEALAPQADADAAAHIgDAEQgUAXAWAdIAFAGIgEAOQgBAPAFAOIgJAJIgKgBgAhZBxQgGgIAHgOQAIgNAJgFIAHgCIAegGIAMgCIAWgEQAIgBAOAEIASAGQAGAOgGAKQgDAFgIAFIgMAIIgWAHIgVAHQgQAEgLAAQgaAAgKgPgABygdQgUgLgUABQAXgRALgRQAMAAAGADQAOAEAOATQALANgDAOIgDAOIgVAYQAEgggcgPgAAwi6IAAAAQABgNADgGQAEgLAOgIQADgCAJgBIALABQASADAIAFQAeANAVAVQgGgCgHAAQgagBgYANQgKAEgIAIQgNgMgcgMgAhajSQgEgPACgRIAAgIIAogBQgGAMgBALQgBANAFAKIgDAAQgQgDgQgCg");
	this.shape_22.setTransform(233.4,177.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAJEZQg0gCgWgcIAAgBQgPgSgBgOIgOgBQgbgCgPgTQgVgcAAgeQgEgVALgbQAOgfASgKQACgBADgBIAGgHIARgJQAmgUAtABIAKgGIAFgCQAFgDAbgRIAggYQAYgMAQgUQAQgSgCgSIgBgBQAAgKgHgIQgCgDgHgDQgagfhjgNIg+gJIgIgCQhJgChNAFIgBgOQAIgDAKgCQAIgUATgRIAsgnIAFAHIgIAMQDYgSBiAxQBhAxAFAyQAFAygbA9QgbA8guAqIg0AuQAWAPgBASQAAAXgbAOQAGAEABAGQAHALgKAQQgPAVgbAPQgUAKglAAIgHAAgAgyDTQgFALALAPIAHAGQAUASAqgEIAvgLQAOgIAAgUIgBgDIgBgFQgVAHgbAFQg6AJgagVIgBgBIgBACgAgnCgQgCARAFAGQARAXA5gLIA4gPQAJgGADgKQADgLgIgOIgFgIQgDgEgEgBQgGAFgJADQgCACgwARIgKAEQgeAGgWgFIgBACgAhKDDIAJgJQgFgOABgOIAEgPIgFgGQgWgdAUgWIADgFQAAgHgDgDQgLgOgOADIgIAJQgKAMgIAWQgRAuAZAgQANARASgDIAKAAgAAlBCIgWAEIgMACIgcAGIgHACQgJAEgIANQgHAPAGAHQAPAWAugKIAVgHIAYgIIAMgHQAIgGADgFQAGgKgGgOIgSgFQgLgDgJAAIgEAAgABjgWQgWAPgdAOIgQAIIgBACIAIACQAVAGATAKQAiAWABAaIABACIAGgGIAlgkQAEgCABgLQACgLgKgYQgLgPgYgCIgMgBIgJABgAg6AqIgMAFQALAHgBAWQAHgFAIgEIAEgCQAPgHAZgBIAJAAIATgDIADAAQAKgDAQACIgZgIQgUgFgTgBIgOgBQgTAAgRAEgACZgXQAcAQgEAfIAVgYIADgOQADgNgLgOQgOgSgOgFQgGgCgMAAQgLAQgXASIADAAQASAAATAJgAC9ilQgSAEgGADIgLAGIgMANIAAAAQAPAPADAQQABAOgGAOQAMADANAHQAfARgBAlQA4hQghg2IgOgIIgHgEQgMgEgGAAIgFABgABtjZQgOAHgEALQgDAGgBANIAAABQAcALANAMQAIgHAKgFQAYgNAaABQAHABAGACQgVgVgegOQgIgEgSgDIgLgBQgJABgDACgAADjrQgEAKABASIAAALIACAAQAWAAAOADQAMABAYAIQgFgMAMgPQAIgJAKgIIABgBIgBAAQgYgJgiAAQgiABgEACgAg1j0IAAAJQgCAQAEAQQAQABAQAEIADgBQgFgKABgMQABgLAGgMgAg/jMIABgBIgCAAgAh0jQIAoACQgDgGACgIQgCgLAJgOQg3gBgigFQgHAKgKAKQgNAOgLAKQATgCAaAAIAnABgAkGjDQgEgEAHgFIAGgCIAAAPIgFAAg");
	this.shape_23.setTransform(229.5,176.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#777FC7").s().p("ABcCnQgBgagigWQgTgKgVgGIgIgDIABgBIAQgJQAdgQAWgOQAJgCAMACQAYACALAPQAKAagCALQgBALgEACIglAjIgGAGIgBgBgACeAMQgNgHgMgDQAGgMgBgOQgDgQgPgPIAAAAIAMgNIALgGQAGgDASgFQAGgDARAHIAHAEIAOAIQAhA2g4BOQABgmgfgQgAAQhtQgOgDgUAAIgCAAIgCgMQgBgRAGgLQAEgCAgAAQAiAAAYAJIAAABQgKAHgIAKQgMAPAFAMQgYgJgMAAgAhWh5IACAAIgBABgAiKh9Qg0gBggACQALgJANgOQAKgLAHgKQAiAGA3AAQgJAPACALQgCAHADAHIgogDg");
	this.shape_24.setTransform(231.7,168.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#83888C").s().p("Ag7gJIAMgFQAXgGAYACQASACATAFIAXAIQgPgCgKAEIgCAAIgSABIgLAAQgVABgPAGIgEACIgPAKQACgUgKgIg");
	this.shape_25.setTransform(226.3,178.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BBC1C7").s().p("AhYD2IgGgGQgKgQAFgLIACgCQAXAWA6gKQAXgFAVgHIAAAFIAAAEQgBAVgNAHIgrAMIgOABQgfAAgOgPgAhUC3QgEgGADgSIABgCQAUAFAfgGIAJgEQAsgRADgCQAIgEAHgFQADABACAEIAFAJQAHAOgEAMQgDAKgJAGIg0AQQgSADgNAAQgeAAgKgQgAiCDDQgRADgMgRQgUghASgwQAJgXAKgMIAIgJQAOgEAJAPQADADAAAIIgDAEQgVAYATAeIAEAGIgEAPQgCAPAEAPQgEADgFAGIgKgBgAhdB1QgFgIAIgPQAIgNAJgFIAGgCIAdgGIALgCIAWgFQAHgBANAFIAQAFQAFAPgGAKQgEAFgHAGIgMAIIgVAIIgVAHQgOADgLAAQgYAAgJgPgABrgeQgSgLgTABQAXgTAMgRQAKAAAGADQANAFAMATQAKAOgEAOIgEAPIgWAYQAHgggagQgAA3jBIAAAAQACgOADgGQAFgMANgHQADgDAJgBIAKABQARAEAHAEQAbAOATAWIgMgDQgZgBgXAOQgKAFgIAHQgLgMgagMgAhJjaQgDgQACgRIABgJIAmAAQgGAMgCALQgCANAEALIgDAAQgOgDgPgCg");
	this.shape_26.setTransform(231.2,173.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgZEjQgygBgUgeIAAAAQgMgTAAgPIgNgBQgagCgNgUQgSgdACgfQgDgWANgcQAPggASgKQAAAAABgBQAAAAABAAQAAgBABAAQABAAAAAAIAGgIIARgJQAlgVArABIALgGIAFgCIAdgVIAggZQAXgNARgUQAQgTgBgTIgBAAQABgLgGgIQgCgDgGgDQgXghhcgNIg6gJIgIgCQhGgDhLAGIgFgEQgDgEAHgFQAIgEAOgDQAJgVATgSIAsgoIAFAHIgJANQDNgTBZAzQBYAzACAzQABA0gdBAQgdA+guAsIg0AvQATAQgBATQgCAXgaAQQAFADABAGQAFAMgKARQgQAWgaAPQgTALghAAIgHgBgAhODbQgFALAKAQIAGAGQARATAqgEIArgMQANgIABgVIAAgDIAAgFQgVAHgZAFQg4AKgXgWIAAgBIgCACgAhACmQgDARAEAHQAPAXA2gLIA2gQQAJgFADgLQAEgLgHgPIgFgJQgCgDgDgCQgHAFgIAEQgDACgsASIgJADQgfAHgUgGIgBADgAhjDKQAFgGAEgDQgEgOACgQIAEgPIgEgGQgTgeAVgXIADgFQAAgHgDgDQgJgPgOADIgIAJQgKANgJAXQgSAvAUAhQAMASARgDIAKAAgAAOBEIgUAEIgLACIgdAGIgGACQgJAFgIAOQgIAPAFAIQANAWAtgLIATgHIAXgIIAMgHQAHgGAEgFQAGgLgFgOIgQgGQgLgDgIAAIgDAAgABNgXQgWAPgcAPIgPAJIgCABIAIACQAUAHARAKQAeAXAAAbIAAACIAHgHIAkgkQAEgCACgMQADgLgIgaQgJgPgXgCIgLgBIgJABgAhLAsIgMAEQAKAIgCAXIAPgKIAEgCQAPgHAXgBIALAAIAQgDIACAAQAKgDAPABIgXgHQgRgGgTgBIgMgBQgSAAgSAFgACAgYQAaAQgHAhIAWgZIAEgPQAEgOgKgOQgMgTgNgFQgGgCgKAAQgMARgXASIADAAQARAAARAKgACrisQgSAFgFACIgLAHIgMANIAAABQANAPACARQABAOgHAPQAKACANAIQAbARgCAnQA5hTgcg4IgMgJIgGgDQgLgFgGAAIgFABgABjjiQgNAIgFALQgDAHgCANIAAABQAaALALANQAIgIAKgFQAXgNAZABIAMADQgTgWgbgOQgHgFgRgDIgKgBQgJABgDACgAAAj1QgEALAAASIABAMIACAAQATAAAMADQAMABAWAJQgEgNAMgQQAIgJAKgIIACgBIgBAAQgXgKggAAQgfABgFACgAg0j9IgBAIQgCASADAQQAPABAOAEIADgBQgEgKACgNQACgMAGgMgAhAjUIABgBIgCAAgAhxjZQASABATACQgCgHACgIQgBgLAKgPQg0gBgggFIgSAVQgNAPgLAJQATgBAZAAIAkAAg");
	this.shape_27.setTransform(229.1,173);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#777FC7").s().p("ABICtQAAgbgfgWQgRgLgTgGIgGgCIABgCIAOgJQAcgQAWgQQAIgCALACQAXACAKAQQAHAbgCALQgCAMgEACIglAlIgGAGIAAgCgACPAMQgMgHgKgDQAGgNAAgOQgCgRgNgPIAAgBIAMgMIALgIQAFgCARgFQAHgDAPAHIAGADIANAJQAcA4g6BSQADgngcgSgAARhyQgNgCgSAAIgDgBIgBgLQAAgTAHgLQAEgCAeAAQAggBAWAKIAAABQgLAIgHAJQgNAQAEANQgVgJgMgBgAhOh+IACABIgCAAgAh/iCQgxgCgeAEQALgKANgOIASgWQAfAFA0ABQgJAQAAAKQgCAIACAIQgSgDgTgBg");
	this.shape_28.setTransform(230.4,164.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{regY:-4.8,rotation:-8.9,x:258,y:178.9}},{t:this.instance_14,p:{rotation:-8.9,x:210.3,y:147.1}},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:10.3,x:57,y:159.2,scaleX:0.999,scaleY:0.999}},{t:this.instance_8,p:{rotation:4.5,x:8.3,y:193.1,regX:8.2,regY:-12.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_8},{t:this.instance_7}]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{regY:-4.7,rotation:1.5,x:259.8,y:178.6}},{t:this.instance_14,p:{rotation:-12.2,x:210.4,y:150.5}},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:6.8,x:57.1,y:158.2,scaleX:0.999,scaleY:0.999}},{t:this.instance_8,p:{rotation:1,x:10.5,y:195,regX:8.2,regY:-12.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_8},{t:this.instance_7}]},6).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_8},{t:this.instance_7},{t:this.instance_9,p:{rotation:1.3,x:58,y:157.5,scaleX:1,scaleY:1}},{t:this.instance_8,p:{rotation:-4.4,x:15.3,y:198.7,regX:8.3,regY:-12,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:0,x:58,y:157.5,scaleX:1,scaleY:1}},{t:this.instance_8,p:{rotation:-5.7,x:16.1,y:199.6,regX:8.2,regY:-12,scaleX:1,scaleY:1}},{t:this.shape_8},{t:this.instance_7}]},2).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:0,x:58,y:157.5,scaleX:1,scaleY:1}},{t:this.instance_8,p:{rotation:-5.7,x:16.1,y:199.6,regX:8.2,regY:-12,scaleX:1,scaleY:1}},{t:this.shape_8},{t:this.instance_7}]},2).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_8},{t:this.instance_7}]},29).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_8},{t:this.instance_7}]},2).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-28.8,308.5,247.4);


(lib.MixieIdle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mixie
	this.mixie = new lib.MIXIETALK();
	this.mixie.setTransform(83.7,107.7,0.8,0.8,0,0,0,143.5,164.2);

	this.timeline.addTween(cjs.Tween.get(this.mixie).wait(1).to({y:108.7},0).wait(1).to({y:110},0).wait(1).to({y:111.5},0).wait(1).to({y:112.9},0).wait(1).to({y:114.4},0).wait(1).to({y:115.8},0).wait(1).to({y:117.2},0).wait(1).to({y:118.5},0).wait(1).to({y:119.8},0).wait(1).to({y:120.8},0).wait(1).to({y:121.7},0).wait(1).to({y:122.4},0).wait(1).to({y:122.7},0).wait(1).to({y:122.1},0).wait(1).to({y:121.5},0).wait(1).to({y:120.6},0).wait(1).to({y:119.5},0).wait(1).to({y:118.3},0).wait(1).to({y:116.8},0).wait(1).to({y:115.2},0).wait(1).to({y:113.6},0).wait(1).to({y:112},0).wait(1).to({y:110.6},0).wait(1).to({y:109.5},0).wait(1).to({y:108.6},0).wait(1).to({y:108},0).wait(1).to({y:107.7},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-45.3,251.2,203.3);


(lib.MixieFPO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MIXIEFLYIN("synched",0,false);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24,-28.8,323.2,255.9);


(lib.ItemPopup = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{onOpen:0,onOpen_stop:7,onClose:8,onClose_stop:12,onMixieEnter:33,onMixieEnter_stop:52,onMixieIdle:69,onMixieIdle_stop:70,onMixieExit:71,onMixieExit_stop:87});

	// Layer 3
	this.mixie = new lib.MixieIdle();
	this.mixie.setTransform(83,56.2,1,1,0,0,0,83,56.2);

	this.timeline.addTween(cjs.Tween.get(this.mixie).wait(88));

	// (mixie)
	this.instance = new lib.MixieFPO("synched",0,false);
	this.instance.setTransform(-215.1,-166.6,0.799,0.799,17.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({startPosition:0,_off:false},0).wait(2).to({scaleX:0.8,scaleY:0.8,rotation:21.1,x:-144.9,y:-110.2,startPosition:2},0).wait(2).to({rotation:16.8,x:-113.4,y:-49.9,startPosition:4},0).wait(2).to({scaleX:0.8,scaleY:0.8,rotation:7.5,x:-56.1,y:5.4,startPosition:6},0).wait(2).to({rotation:3.3,x:-34.9,y:6.7,startPosition:8},0).wait(2).to({scaleX:0.8,scaleY:0.8,rotation:0,x:-31.5,y:-23.7,startPosition:10},0).wait(2).to({rotation:-1.1,x:-32.5,y:-28.2,startPosition:12},0).wait(2).to({rotation:-1.6,x:-32.4,y:-29,startPosition:14},0).wait(3).to({rotation:0,x:-29.9,y:-26.3,startPosition:17},0).to({_off:true},19).wait(2).to({regX:136.3,regY:111,scaleX:0.8,scaleY:0.8,rotation:1.3,x:77,y:70,startPosition:39,_off:false},0).wait(2).to({regX:140.5,regY:108.7,rotation:3.3,x:68,y:78.1,startPosition:41},0).wait(2).to({regX:140.6,rotation:4.3,x:64,y:82.1,startPosition:43},0).wait(3).to({regX:127.5,regY:167.3,rotation:4,x:56,y:122,startPosition:45},0).wait(2).to({regX:127.6,scaleY:0.85,rotation:2.8,x:82.5,y:107.5,startPosition:47},0).wait(2).to({regX:138.5,regY:-12.3,scaleX:0.8,scaleY:0.8,rotation:-1.8,x:128.4,y:-95,startPosition:49},0).wait(1).to({rotation:-3.6,x:171.2,y:-166,startPosition:50},0).wait(1).to({rotation:-5,x:202.6,y:-227.4,startPosition:51},0).wait(1).to({x:221.1,y:-285,startPosition:52},0).wait(1).to({rotation:-6,x:244.3,y:-316.9},0).to({_off:true},1).wait(1));

	// title
	this.title = new cjs.Text("{title}", "bold 30px Cafeteria", "#FFFFFF");
	this.title.lineHeight = 32;
	this.title.lineWidth = 310;
	this.title.setTransform(460,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.title}]}).wait(88));

	// message
	this.message = new cjs.Text("{message}", "16px Helvetica", "#333333");
	this.message.lineHeight = 20;
	this.message.lineWidth = 309;
	this.message.setTransform(461.9,62.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.message}]}).wait(88));

	// icon
	this.icon = new lib.ItemPopup_icon();
	this.icon.setTransform(286.1,127.2,0.168,0.168,0,0,0,88.2,96.5);

	this.timeline.addTween(cjs.Tween.get(this.icon).to({regX:88,scaleX:1,scaleY:1,x:299,y:108.5},7,cjs.Ease.get(1)).wait(1).to({regX:88.2,scaleX:0.17,scaleY:0.17,x:286.1,y:127.2},4,cjs.Ease.get(-0.99)).wait(21).to({regX:88,scaleX:1,scaleY:1,x:299,y:108.5},0).wait(55));

	// okButton
	this.closeButton = new lib.CloseButton();
	this.closeButton.setTransform(338.1,145.5,0.168,0.168,0,0,0,77.1,22.1);

	this.timeline.addTween(cjs.Tween.get(this.closeButton).to({regX:77,regY:22,scaleX:1,scaleY:1,x:631,y:231},7,cjs.Ease.get(1)).wait(1).to({regX:77.1,regY:22.1,scaleX:0.17,scaleY:0.17,x:338.1,y:145.5},4,cjs.Ease.get(-0.99)).wait(21).to({regX:77,regY:22,scaleX:1,scaleY:1,x:631,y:231},0).wait(55));

	// base
	this.base = new lib.ItemPopup_base();
	this.base.setTransform(280.5,135.3,0.168,0.168,0,0,0,280.4,156.6);

	this.timeline.addTween(cjs.Tween.get(this.base).to({regX:280.5,regY:156.5,scaleX:1,scaleY:1,y:156.5},7,cjs.Ease.get(1)).wait(1).to({regX:280.4,regY:156.6,scaleX:0.17,scaleY:0.17,y:135.3},4,cjs.Ease.get(-0.99)).wait(21).to({regX:280.5,regY:156.5,scaleX:1,scaleY:1,y:156.5},0).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.5,-45.3,817.7,250.5);


(lib.teaspoons = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.TeaspoonsButton_up();
	this.instance.setTransform(47.2,15.5,1.1,1.1,0,0,0,47.2,15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABUCtIAAAAQgMgLgKgMIgBgBQgNgSgKgWQgNAIgOAFIABAAQgpASgxgCIgFgBIgggHIgBgBQgQgCgPAAIgLANIAAAAQgMARgOAKIgCACQgkAWgoAIIAAAAQghAHgjgBIgDAAQgPgCgQgFIABAAIgBgBIgBAAIgCAAIgBAAQhDgBgwgwIgBgCIgKgNIgBAAQgOgTgRgTIgBgBIgRgSQgIgHgBgLQgBgLAGgJIAAg4QAAgKAFgHQAKgQARgGIAAgBQAPgGALgLIABgBIAPgOIAGgIQAAgKAIgHQAFgOAZABIAAAAQAbgOAcgLIAAgBQAWgJAZAEQAbAAAaAKIACABIAWAKIgBgBIAMAFQAPgTAQgSQAFgFAGgCQAEgCAGgBIABAAIgBAAIAegPIABAAIAggQIABAAIACgBQAHgFAJAAQArgDAnAPQAjAMAhAYIgBAAQAOAJANALIABABQALAJALAIIAOAIIABABIATAKIADACIACABQAGgBAEgGQAGgHAJgDQAQgFARgDIABAAQAmgFAdAXIAMALIAVgFIAAAAQASgGAOgOIAAAAQAVgVAdgHQANgEAOAAIADAAQAhAEAUAXIAEAAQAHAAAGACQAGADAEAFIANARIABACIABABIAYAKIACAAQAIAEAIAGIAFAFQALAMgCAYIAAACIgBAKIgDATIgBACIgEAMIgBAAQgGALgFANIAAAAQgKAfgVAVIgBABIgSARIgBABQgVAWgcAGIAAgBQgfAHgfgHIgBAAIgPgEIgEAKQgRAogjAXIAAABQgnAagxACIAAAAIgDAAQhIAAg0gvg");
	this.shape.setTransform(47.3,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("ABADEIgDgDQgMgLgKgNIgCgCIABACIgBgCIgMgSIgJgQIAIARQgwAUg3gCIgBAAIgJgCIgBAAIgfgHIgBAAIAAAAIgLgCIgBAAIABABIgCACQgOATgSANIgBABIgCABIAAAAQgpAagtAJIgEAAQgjAHgkgBIgBAAIgFAAIABAAQgRgCgRgGQhOgCg4g4IAAAAIgCgCIgBgCIgKgMIAAAAIgCgCQgNgSgQgSIgBAAIgBgBIgPgQIAAAAQgQgPgCgWIAAAAQgCgQAHgPIAAgwQAAgTAKgPQAQgXAXgKIABAAQAJgEAIgHIAAgBIAAAAIACgCIAMgLQACgLAJgKQAJgaAogBIAwgWIACgBQAdgMAhAEQAfABAeALIADABIABABIgBgBIAMAGIASgVIABgBQAIgJAMgFQAGgDAHgBIAZgMIACgBIABgBIAfgOIAAAAIABgBIAAAAIACgBQAMgHAPgBIABAAQAxgDAsARIgBgBQAoAOAlAbIADACIAZATIADADIgBgBQAIAIAKAGIAAAAIAKAGIAAAAIABABIACABIAGADQAJgGAKgDIAAAAQARgGASgDIAEgBQAzgHAnAgIACABIADgBIACAAQAKgEAIgIIAAAAIAAAAQAagbAlgJIAAAAQARgFASAAIABAAIAGABQAlAEAZAWQAIACAIADQAMAGAJAJIAAABIALAOIARAHIAAAAIACABQAMAFAKAIIABABIAJAJQAUAUgEAnIAAAAIgBACIAAAIIAAAAQgBAMgDALIAAABIgBACIgFAPIgBACIgBAAIAAABIgJAWIgCADQgMAigYAZIgDACIgQAQIgBAAIAAABIgBABQgbAcgmAHIgDABQgfAGgggGQgTAnglAYIABAAIgCABIABgBQguAgg6ACIgBAAIgDAAQhTAAg9g2gAIIh/IABABIgBgBg");
	this.shape_1.setTransform(47.3,17.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-7.9,117,50.1);


(lib.pressureCooker = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// up
	this.instance = new lib.PressureCookerButton_up();
	this.instance.setTransform(69,38,1.1,1.1,0,0,0,69,38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAkHOQhSgDhMgaIgBgBQgdgLgVgRIABAAQhAgygYhQIAAAAQgqiFgBiLQhJg3hdgEIgEAAQgOgCgKAEQgTAMgXAIIgBAAQgRAGgOAKQgrAcgwAZIAAABQgRAIgPAAIAAAAQg6AAgggsIAAAAQgggtAOgyQACgIAGgGIAHgFQAJgUAVgNIABgBQBsg+B8ACIACAAQAoADApAGIABAAQBNAOBPATQgOgpApgcIABgBQAMgIALgKIAAgBQA+g7BPgjIABAAQAagMAbgGIABgBQAjgGAggKQAHgOAIgPIAAAAQAJgRAPgLIAAgBQA5gqA6AqIAEADQAHAIAHAJIgBgBQAOATAEAWQBNAMBGAkIAAAAQAZAOAZAQQAsAcAiAnQAQAEAKALQAPgYAYgSIAEgCIAOgHIADgBQBegeBQA3IAAAAQAlAZAKArIAAAAQAUBLgwA8IAAAAQgjArgzAFQgJAWgGAYIAAABQgFASgJAQQgUAjglARQgTAJgPgIIgBAAQgMgGgMgDQgCBZgfBRQgEAJgHAFQgRAugfAmIAAAAQgLAOgNAGQgZAOgbAIQgtAPgvAFQhOAJhOAAQgtAAgtgDg");
	this.shape.setTransform(69,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(1));

	// Layer 5 copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FA5482").s().p("AAjHsIgBAAQhUgDhQgbIgEgBQgfgMgYgTIgCgCQhGg4gchYIgBgGQgoh/gCiGQg+gohMgDIgBAAIgHgBIgFgBQgVANgZAJIgBAAIgBAAIABAAQgNAFgLAFQgsAfgyAaIgBABQgYAMgVgBIgBAAQhJAAgpg7IgBgCQgmg2ARg+IAAAAQAFgPALgMIAAABIAFgFQAMgWAXgPIAEgCQByhCCFACIABAAIABAAIACAAQAqACApAGIADABQA7ALA6ANQAIgfAjgZIADgBQAIgGAIgIIABgBQBCg/BTgkIABgBIAAAAQAegNAdgHIABgBIACAAIAAAAQAagEAZgIIAJgSIACgEQAMgTASgOIABgBQBKg4BMA3IAAAAIAHAFIABABQAJAJAHALIABABIABAAQAGAKgBALIgCAHIANADQBIAOBAAhIAAAAIABAAIAAABQAbAOAZARIAAAAQAsAcAjAmIACACIAAgBQAMgOAPgLIACgBIAIgFIgCABIASgJIADgBIACgBQBqghBaA8IAEACQAuAgANA2QAYBag6BHIAAAAQgkArgzAMIgIAbIAAACQgGAWgLATIAAAAQgYAsgvAUQgXAMgVgFQgGBIgaBDIAAAAQgFANgJAJQgSAtgfAmIgBABQgPAUgRAIIgBAAIgBABQgcAPgdAIIABAAQgvAQgzAFQhPAJhQAAQgtAAgugDgAsFitIABAAIABgBg");
	this.shape_1.setTransform(69,37.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.7,-11.6,167.5,99.2);


(lib.Kitchen = function() {
	this.initialize();

	// KitchenItems
	this.sink = new lib.sink();
	this.sink.setTransform(775,144,1,1,0,0,0,0.2,0.7);

	this.fryingPan = new lib.fryingPan();
	this.fryingPan.setTransform(364,176,1,1,0,0,0,0.2,0.1);

	this.pressureCooker = new lib.pressureCooker();
	this.pressureCooker.setTransform(431.1,121.1,1,1,0,0,0,-0.3,0.6);

	this.blender = new lib.blender();
	this.blender.setTransform(651,127.1,1,1,0,0,0,0.4,0.4);

	this.utensils = new lib.utensils();
	this.utensils.setTransform(894,126,1,1,0,0,0,0.5,0);

	this.soap = new lib.soap();
	this.soap.setTransform(735.1,145.1,1,1,0,0,0,0.1,0);

	this.plates = new lib.plates();
	this.plates.setTransform(1459,218.1,1,1,0,0,0,0.1,0);

	this.bowls = new lib.bowls();
	this.bowls.setTransform(1465.1,307.1,1,1,0,0,0,-0.2,-0.3);

	this.cookBooks = new lib.cookBooks();
	this.cookBooks.setTransform(1445,51.1,1,1,0,0,0,0.2,-0.3);

	this.trashCan = new lib.trashCan();
	this.trashCan.setTransform(636,336,1,1,0,0,0,0.4,0.8);

	this.cuttingBoard = new lib.cuttingBoard();
	this.cuttingBoard.setTransform(710,280.8);

	this.timer = new lib.timer();
	this.timer.setTransform(636,251,1,1,0,0,0,0.1,0.8);

	this.teaspoons = new lib.teaspoons();
	this.teaspoons.setTransform(868,290.1,1,1,0,0,0,0.2,-0.2);

	this.measuringCup = new lib.measuringCup();
	this.measuringCup.setTransform(969,274,1,1,0,0,0,0.2,0);

	this.bakingSheet = new lib.bakingSheet();
	this.bakingSheet.setTransform(1067.1,275.1,1,1,0,0,0,0,1.1);

	this.toasterOven = new lib.toasterOven();
	this.toasterOven.setTransform(1045,146.1,1,1,0,0,0,0.1,0);

	this.foodProcessor = new lib.foodProcessor();
	this.foodProcessor.setTransform(951,114,1,1,0,0,0,0.3,0);

	this.sponge = new lib.sponge();
	this.sponge.setTransform(843,164,1,1,0,0,0,0.8,0.5);

	this.juicer = new lib.juicer();
	this.juicer.setTransform(692,147);

	this.ovenMitt = new lib.ovenMitt();
	this.ovenMitt.setTransform(377.1,262,1,1,0,0,0,-0.3,0.1);

	this.mixer = new lib.mixer();
	this.mixer.setTransform(196.1,297,1,1,0,0,0,-0.4,1.2);

	this.mixingBowl = new lib.mixingBowl();
	this.mixingBowl.setTransform(180,212.1,1,1,0,0,0,0.4,0.6);

	this.bakingPans = new lib.bakingPans();
	this.bakingPans.setTransform(171,140.1,1,1,0,0,0,0.1,-0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#81FEF0").s().p("AAEgHIACADIgLAMIAJgPg");
	this.shape.setTransform(735.4,376,1.503,1.503);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#81FEF0").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(734.5,377.2,1.503,1.503);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#81FEF0").s().p("AgbAxIA2hjIAAACIABAIIg3Bbg");
	this.shape_2.setTransform(761.6,457.8,1.503,1.503);

	this.stove = new lib.stove();
	this.stove.setTransform(329.1,65.1,1,1,0,0,0,-0.3,-0.3);

	this.microwave = new lib.microwave();
	this.microwave.setTransform(556,144.1,1,1,0,0,0,0.2,0.1);

	// Island
	this.island = new lib.FINALcenterisland2();
	this.island.setTransform(935.7,425.9,1.503,1.503,0,0,0,222.9,135.5);

	// Fridge
	this.fridge = new lib.fridge();
	this.fridge.setTransform(1210.1,-32.9,1,1,0,0,0,0.8,1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#AEB9A4").ss(0.5,1,1).p("AgyAMQAEgBAGgBIAAAAQAAgBABgBQgYAEgGgLQAVgHACgEQgOgHgLgNQAFAAAKABQA4AAA0gNQgHAGgDAHQAGAAAPgDIgLARQADACADABQAFgCAFABQAAgBABAAQABgBABAAIABAAQgBAAgBACIgBAAAgoAKQgBAAAAABQgKAOgFAEIAAAEIANAAQAEgCAIgCQgCAJgGAFQAGgCAtgTQAagMAPgIQAFgGALgJABEgNQgDABgFAAQgBAAgBAAAgyAMQACAAAHgBAA1ACQAMgEAEgF");
	this.shape_3.setTransform(1271,186.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#AEB9A4").ss(1,1,1).p("AlPjMQgCgngBgoQBAAKA/gGAhZkyQABgBACAAQBKgZBjgvQBKFuCyChQglAiglAcAlPjMQAYHpBWBeQEBAKDpiz");
	this.shape_4.setTransform(1287,215.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E4F8F3").s().p("AgJAeIgBgBQAAgEADgBQABAAABAAQAAABAAAAQABABAAAAQAAABAAAAIgBACIgCACgAAIAbIgEAAIAAgIQABgEAJACIACAEIgCAEQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAgAg0AVQAAgBgBAAQAAAAAAgBQAAAAAAgBQgBAAAAgBIAAgCQACgFAEAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQACABABAEIgBAEIgFABgAAZAKIABgEIACgBIAGAFQgBAEgFABQgDgDAAgCgAgfAMIABgIIAAgCIAEAAIACAAIAEAAIABAFIgCAFIgFAAgAgJAAIgBgBIAAgCQAAgFAFAAIADABQACABAAAFIAAABIgFACgAAngCQAAgEAEgCQADABABADQAAABgBAAQAAABAAAAQgBABAAAAQgBABgBAAgAALgKQAAgDADgCIACAAIAFAAIACAEIAAAEQgEABgGAAIAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQgBgBAAgBgAAfgVIACgDQACgDADgBIACABQAAAAABAAQAAABAAAAQAAAAAAABQABAAAAABIgBACQgBADgEAAQgEAAgBgCgAAvgZQAAgEADgBIABAAQACABABADQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAg");
	this.shape_5.setTransform(1281.7,220.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D08E73").s().p("AgPAfIgTgEIgBgBIgBAAQgaAAAAgFQAAgBAKgEIAAACQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEABIAFgBIABgDQAAgEgCgCIABAAIgBgBIAOgGIgBAHIAGABIAEgBIACgEIgBgFIgEgBIAOgFIAAACIABACIAFABIADgBIAAgCQAAgEgBgCIAQgHQgCABAAAEQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQAGAAAEgCIAAgEIgCgEIgFAAIACgBIAHgEIAIgEIgCADQACACADABQAEgBABgDIABgCQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAAAgBgBIAKgDQgDACAAAEIAEACQABAAAAgBQABAAAAAAQABgBAAAAQAAgBABgBQgBgDgDgBIAEAAIACAAQAFACAAAIQAAADgHALIgLAKIgEAGQgPAQgIAAIgCAAIgBAAIACgFIgCgEQgJgCgBAFIAAAHIAFABIgNACIABgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgEACAAADIACACIgIAAgAAbAGIgBAEQAAADAEACQAEgBABgDIgFgFIgDAAgAApgCIAEACQAAAAABAAQAAgBABAAQAAgBABAAQAAgBAAAAQgBgEgCAAQgEABAAAEg");
	this.shape_6.setTransform(1281.6,220.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A8AD9E").s().p("AhEAiIgDgDIAAgEQAAgGAHAAQAGAAACAGQAAAJgIAAIgEgCgAA6gXQgBAAABgFQAAgIAHABQAGgBABAIQAAAHgHABIgHgDg");
	this.shape_7.setTransform(1276.8,212.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#785432").s().p("AhIAgIgBgCIAAgBQAAgEAPgLIAMgIIAFgCIACABQAFAAAAAHQAAACgGAGIgGAGIgDACQgKAKgHAAQgGAAAAgGgAAFgRQgCgBAAgEQAAgPAqAAIAKAAQAYABgFAGQAAAFgLAFIgFACQgQAGgQAAQgRgBgEgEg");
	this.shape_8.setTransform(1276,207.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#DCB9A3").s().p("AAMCGIgPgMIgFgGQgGgDgEgGIgDgDIgOgDIgYgHQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBQgBgCATgJIgGgJIgBgDIAAgDIgBAAIgDgBQgFgCgDgGIgDgEQAIgCAGgGIAIAOIAAAEIAAAAQAFAAAJALIAcgOQAagOAUgIIAAgFIgCgKQAHAAAHgDIACAMQALgDAEAAQAMAAABATQAAANgUAVIgGAGIABAFQAAAYgIANQgHANgQAAQgIAAgMgHgAAbB9QATAAABgdQgTALgZAAIgDAAQAZASACAAgAghBUQgJAEAAABQAAAFAaAAIABAAIABABIARAEIAHAAIACABIACgCIAPgCIABAAQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIABAAIACAAQAHAAAPgQIAAABQAJgIAGgLQAIgLAAgDQgBgIgEgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAABgBAAIgCAAIgBAAIgKADIgCgBQgDABgCADIgIAEIgIAEIgBABIgCABIgSAHIgDAAQgFAAAAAEIgMAHIgCAAIgEABIAAACIgOAGIABABIgCAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgEAAgCAFgAgUAsIgUgGQgBgFAHgGQAFgIAAgEIgCgOIAAgBQgBgGAFgCQADACABAGQACADAAAKQAAAPgIAGQACABAXABIABAEIgBAEgAhLgXQgEgCgIAAIAAAAIACgLIAEgCIAFgGQACAHABAMIAAACIgCAAgAhQhEIAHgVIACAFQgCANgDAIIABADIgCAAIgEACIABgKgAhAh2IABAAQACABABAEIgEAJQgEAIgDAAIAHgWgAAThoQgRgegYABIgDAAIAFgHQAUABANAZIAGALg");
	this.shape_9.setTransform(1279.6,214.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A97745").s().p("AhXBiIgBgFQAAgCAKgIQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAABAAQAAAGAGAAQAHAAAKgJIgCALQgUAAgFALQgFAAgCgDgAhiBRIgBgFIAXgOQgPgBgJgGQgJgEABgEQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQABgFAFAAIAPACIgHgFQgGgGAAgDQAAgIAHAAQAIAAALAJIAMADQAEgUAEgLQgUAAgSgOQgQgMAAgHQAAgHAKgBQAHAAAEAIQAFAJAEACQAQAJASADIAAgBQgRgGgNgSIgPgaQAAgMAIAAQAGgBAPAeQABABATAKIgMgSQgVgmABABQgBgKAJAAIAdArIgNghQAAgMAHAAIAhA/QAHgCAJAAIABAAQAMABAKAEIgBADQAAADAEABQABgDACgCQAIAFAGAJIgCgPQAAgKAHABQAMgBABAjQAEgJAAgDQgEgEAAgFQAAgIAJABQAIgBACAPQAAAIgHAOIgFALIARgMQAIAAAAAIQAAACgNAMQAUABAAAIQAAAHgNABIgJgBQgLgBgFgCIgEAAQgEAAgCgCIgBgCIgBgCQALgFAAgEQAFgGgYgCIgGgKQgOgXgVgBIgFAHQgLANgVACIgBAAIgBAAIgCAAIgBAAIgHAUIgCAHIgIAVIgBAJIgMAIQgPALAAAFIAAABQgHADgFAAQgHAAgCgDg");
	this.shape_10.setTransform(1276.4,202.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C5D6E4").s().p("AgdAdIgMAEIgNAAIAAgEQAFgEAKgOIABgBIAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQgYAEgGgLQAVgHACgEQgOgHgMgNIAQABQA2AAA1gNQgGAGgDAHQAGAAAPgDIgLARQADACADABIACAAIAIgBIABAAQgLAJgFAGQgPAIgbAMIgyAVQAGgFACgJg");
	this.shape_11.setTransform(1270.8,186.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.102)").s().p("Ai1E8IgGgBIgTgBQgrhBgfhuQgkiCAAiBIACh7QABgPgIg7IAXgBQAYHqBWBdQEBALDoizIAVAXQgRATggAZQg6AqhPAlQieBMhzAAQgXAAgVgDg");
	this.shape_12.setTransform(1283.4,227);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3F0D8").s().p("AAzEyIgHgSIgJgWIgEgIIgBAAIgKgRIgHgKIgNgWIgBgDIgBAAQgDAAgDgCIAHgJQAJgRABgCIgBgCIgCgEQgGgNgBgKIgCAAIgCgCIgBAAIABgCIgMgRIgFgIIAAAAIgGgJIgLgTIAAgCIABgCIACAAIAAgBQAHAAAAAKIAHALQAAAAAAABQABAAAAAAQAAABAAAAQABABAAAAIADAGIAEAFIAEAHIABABIAHALQADgEALgDIAAgBIAFgBQAMgFALgDIAQgEIgEgIIgEgGIgMgcQAAgEAEgCIAXAvIABAAIABABIAAADIAAACIACADIAEAGIACAJIAAABIAFAFIAGAEIAHADIALACIAOACQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAABQAAAAAAABQAAABAAAAQgBABAAAAQgBAAAAABIACAEIAFAIIAGAMIAEAHQAIATAEARIACAIIABAMIAAAJIgCABIgCABIgDgIIgDgKIgBgHIAAgBIgBgHQgCgLgDgGIgGgNIgFgIIgCgFIAAACIACADIADAJIADAJIAGAUIADAIIAAAAIACAIIACAHIAAACQgBALgNABIgDgCIgBgBIgDgGIgCACIAAAEIAAADIAAAEQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBAAIgCgBQgCACgGADIgBACQgBAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAIgBAAIgGgGIgEgIIgDgBIgDAAIgDAAIADALIAAACIAAAKIAAAAIAAACQAAABAAAAQAAABAAAAQgBAAgBAAQAAAAgBAAQgCAAgEgHQgCADgGACIACAEIAAAFQAAAAAAAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgFgLIgBgBIABAAIgCgEIgDgHIgDABIgBgBIACAJIAGASIAAABIgEACIAAgCgAA5EUIADAIIAAAAIABgBIAFgCIABAAQgCgDgBgEIgHACgAAnEBIADAJIADAIIADgCIgDgGIgEgKIgCgEIgCgBIACAGgAAxD8IABAEIADAKIABACIAGgCIAAAAIgEgLIgCgEIgFABgABgD4IgBACIACAFIABAEIABAGIABADQACgCAEAAIABAAIgBgBIAAgBIAAgBIgCgFIgCgEIgDgGIgCgEIgBAEgABNEBIAAABIACgBIAAgBIgCABgAA9D5IADAFIACACIAAgCIgCgHIgDACgABvDvIABAGIACAGIACAAIgCgGIgCgGIgBgCgAAhDxIAEAKIAAgCIgCgIIgEgIIgDgHIgDAAIAIAPgABTDzIADAGIABgBIgCgHIgCACgABHDzIABAFQAAAAAAgBQAAAAABgBQAAAAAAAAQAAgBABAAIgCgCIgBAAgAAwD0IAAABIADgBIAAgCIgDACgAA4DtIACAEIAAAAIAFgCIgBgGIgGAEgABjDlIAAACIADAFIABABIgBgGIgDgHIAAAFgABFDtIABgBIgCgEIABAFgAArDlIABAEIABAEIACgEIAAAAIgCgFIgCAAgAB2DqIAAAAIgBgEIgBAAgABKDeIACAEIABACIAAABIACADIADABIAAgCIgDgNIgFAEgABbDnIAAgCIgDgJgAA0DiIABACIACgCIgDAAgAAuDRQADADAAAIIAEgBIgCgHIAAAAQAAgEAFAAIAAgCQgEACgGABgAAhDbIACABIAAgIIgCgBQgCgCgDAAIAFAKgABuDPIAEAMIgCgMIgCgCIAAACgABbDPIACAGIAAABIAEgCIAAAAIgCgKIgEAFgABBDJIACAEIABADIACAFIADgCIgBgBIAAgDIAAgCIADAAIgBgEIgGAAIgDAAgAAMDBIgHAKQAFABAGAIIAAgKIAAgBIgCgDIABAAIgCgHIgBACgABYCxIgFAIIgBACIADAHIACACIACABIgCACIABABIAEgDIACAAIgBgEIgCgLIgCgGIAAgBIgBACgAArDDIACADIAFgBIACAAIABgBIAAgBIgCgGIAAgEIAAAAIgCAAIgGAKgAAhC8IAAACIgCADIAAACIAEgGIAAgCgABAC3IAEAAQAAgGgEgDgABtCqIACAEIACADIgBgDIgCgHIgCAAIgCAAIADADgAAWCtIAAABIAAAAIABgCQACgEgBgEIgCAJgABLCoIgBACIAAAAIAHAAIgBgDIgBgBQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABgBAAgABhCpQABAAABAAQABgBAAAAQABAAAAAAQAAgBABAAIgGgBIABADgAA6CeQACAEADADIAFACIAEgHIgBgBIgHgEIgHgCQAAADABACgABCCNQgCACgJABIAJADIAIAEIgCgEIgCgDIgCgDIAAAAgAAHCQIABABIABABIACADQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAIABgCIAAgBIgGACgAAjCQIAAABIAAACIAAACIACgDIABgDgAA3CAIgDAAIAGAEIAEAEIADACIgBgDIgDgFIgCgEIgEACgAiKgOIgBgDIgBgCQgHgMAAgJIAAgBQAAgHACgEQAFgLAUAAIAAAAQAHgBAFACQAIADAFAGIAHAMQAFAGABAKQAAAQgJADIgBAAIgBABQgGAFgLAAQgUAAgIgOgAiFgdIAAAEIADADIAFACQAHAAAAgJQgBgGgGAAQgIAAAAAGgAh1g0IAFAAIgEgCIgBACgAAHgfQgQAAgOgSIgDgFIgDgEQgFgIAAgHIABgEIgBgEQAAgSAKgIQAHgJAPABQASgBALAVQAIAPAAARQAAAJgFAMIgBABIgBACIgHAGQgGACgHAAgAgChWQgBAFACAAIAEADQAIgBAAgHQgBgIgHABIgBAAQgEAAAAAHgAggi6IABgEQABgGAIgKQgCACgGADIgBAEQgBAAAAABQAAAAgBAAQAAAAgBAAQgBAAgBAAQgGAAgBgEIAAgEIgKAKIgDgCQAOgcAPgUQgBgCAAgIQAAgIAFgHIAAAAQgcgBAAgMQAAgOANgDQAUgEAFgEQAKAAABAQQABABALgCQATAAgDAOQgBAHgGAJIASAWQAAAGgGAHQgHAHgIABQgLAAgDgIQgFAMgWAcQgCACgBADQgEgBAAgDgAgmjVIAGAAIgDgDIgDADgAgNjgIACADIACgEIgEABgAgdjiIgBACIAHABQgDgBgCgEIgBACgAgFjvIADAGIACgFIAAgCIgFABgAgYjqIAOAAIgEgHIgGgBIgEAIgAgRklQgBAEACAEQAJgJgGgEQgFAEABABg");
	this.shape_13.setTransform(1282.9,217.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CFB7E1").s().p("AAiDUQAAgIANACIACAAIgLgGIAUgGIAHASIgdAEIgBAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgABFDTIgFgSIAFgCIABAEIgBAAIACABIAEALQABAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAAgFIgDgEQAGgCACgDQAEAHACAAQABAAABAAQAAAAABAAQAAgBAAAAQABAAgBgBIAAgCIA8gKQAEACACADQgXALhDALgABdC5IAKgEIAGAGQgJADgHAFgABKC+IABgBIgBABgAB0C3QAHgDACgCIABABQABAAABAAQABAAAAAAQABAAAAgBQAAAAAAAAIAAgEIAGgCIADACQANgBABgLIACAAIAEAIIACgBQgEAGgVAEQgMACgJAEIABgCgAAeCoQAAgDAOgBIABAAIAEAIIgRAAIAAAAQgBAAAAgBQAAAAAAAAQgBgBAAgBQAAAAAAgBgABDCsIgDgKIAGgBIAEALgAA4CsIgDgJIACgBIAFAKgACCCrIAAgEIADgCIACAGgAByCrIgCgGIAGgBIACAFIAAABIAAABgABbCjIACgBIAAABIgCABgABPCgIABAAIAAACIgBgCgABtCcIABgCIADAAIADAGIgFABIgCgFgACACdIgCgGIACAAIACAGgACVCRIACAAIACAHIgCABIgCgIgAANCQQAAgEAIgCIAGgBIAHAKIgTAAIAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBgABICTIgBgEIAFgEIABAGIgFACgAAvCTIgIgPIADAAIADAHIAEAIgACgCLIAGACIgFAGIgBgIgACSCJIAFAAIAAAHIgCABIgDgIgAB9CRIAAgCIABACgAB1COIgDgFIABAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIABAGgABSCKIACAEIgBABIgBgFgAA6CLIADAAIABAAIgDAEIgBgEgACECMIgCgEIABAAIACAEgABdCKIADgBIAAACgAA5CGIADAAIgDABgAA9BzQAFgBAFgCIAAACQgGAAAAAEIgBABIABgBIACAHIgDABQgBgIgCgDgAAvB9IgFgKQADAAACACIACABIAAAIIgCgBgABpBxIAEgFIACAKIgEABIgCgGgABSByIAEgBIAAADIACABIgEACIgCgFgAATBtIAHgKIABgCIACAHIgBAAIACADIAAABIAAAKQgGgIgFgBgAAKBwIABAAIACADIgDgDgAB9BxIgBgCIACACgABPBrIAKAAIgIAEIgCgEgACGBjIABAAIAEAIQAAAAgBAAQAAAAAAAAQAAABAAAAQgBAAAAAAIgDgJgAA5BlIAGgKIACAAIAAAAIAAAEIACAGIgDACIgFABgACQBgIABgBIAHACIABACQAAACgGACIgDgHgABkBkIgEgHIACgCIAHgDIADALQgEABgDACgAAtBjIACgDIACgBIgEAGgAAIBkQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgEAHgGIgFgJIgCgCIgFgIIgBgBIAAgCIgHgMIgQgXIgCAAIAAgDQgKgNgBAAQgcAHgJAAQggANgHAAIgnAPIgHgHQALgGAUgIIgkAKIgCgBQgBgDgDgCQAegLBygdQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIgCAAIgBACIgaAIQAJgCAGABQAKAAAJAHQgCADgIACIACACIAAgCIAEgCQADAAACAEIACgCIAGAJIAAAAIAFAIIAKARIgBACIACAAIgIADIADAEQACgDAEgCIACAAQAEAKAFANIgEABIADAFIADgCIABACQgBACgLARgAgHAqQAAgFAEgFQgDACgEAAIgEgCIAHAKgABPBZIAAgJQADADAAAGgACFBMIAJgDIAEABIABADQAAABgKAGIgEgIgABnBRIAAABIgBABIABgCgAB9BQIABAAIABADIgCgDgAAmBGQABAEgCAEIgBABIACgJgAB4BJIACAAIABADIgDgDgABZBMIABgCIAEgBIABADIgGAAgABuBIIAGABQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAgBAAIgBgDgABIBAIAGgDIAHAEIgIAGQgDgDgCgEgABrA8IgEgFIgDACIgHgEIAHgDIgFgIIgGAFIgDgJIAFgCIgDgIIgGAEIgCgDIABgCIgBgDIADgCQgOgXgEgKIAAABIgDgCQgBABAAAAQgBAAAAAAQAAgBAAAAQAAgBABgBQAHgNADgHIAAgBQgGANgEAAQgGAAgGgGQAQgYAsgqQAqgpAGAAQABAAABAAQAAAAABAAQAAABABAAQAAABABAAIgBACQAAACADACIACgCIAAACIABgBIAFABIABADQAAAIhlBiQAKAJAVAoIAIgDIABAEIgHAEIACAEIACAFIADgCQADABABADQgDABgCACIAGAMIgKgCgABLgvIAEAEIAJgKQgGAEgHACgAAXA0IAEgBQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAIgCgDgAAxA1IACgBIgCADgABFAyQAKgBABgCIABAAIABADIgEADIgJgDgAAxAyIADgBIgDACgAAVAyIAGgDIAAACIgFACIgBgBgAAEAiQAcgWAQgGIAEABIAAAGIgCAAIAOgDIADAGQgCAEgKAIQgLADgLAFIgGABIAAABQgKADgGAEIgHgLgAAcAkIAAAAIACgBIgCABgABMAqIACgBIABADgABCAiIADAAIAEgCIACAEIgDACgAitAiIADgBIgBABgAAAAaIgDgFIALgIIAAAAIAEACIABAAIAAACIgKAQIgDgHgAiDhkIgGgVQAAgGAEgHQAAAJAIAMIABACIAAADQAJAQATAAQALgBAGgGIACgBQAJgDAAgQQgBgKgEgGIgHgMQgGgGgIgDIACAAQAVABAKANIALgEIAVgHIgFgOQAAgKAJgQQAOgWAVAAQACACAFAAIADgBQAFADALABQAOAGAHAPQAHANgBAOQgBAogXAKQgHACgHABIgDAAQgbAAgRgcIgCgCIgSAGQgBgGgDgCQgFACABAIIgGACIACAJQgCAKgFAMQgEAHgEAEQgGAFgIACIgIABQgeAAgKgVgAgJjJQgKAIAAASIAAAEIAAAEQAAAHAEAIIADAEIAEAFQALASASAAIABAAQAHAAAHgCIAGgGIACgCIAAgBQAFgMAAgJQAAgRgIgPQgKgVgVABIgBAAQgMAAgGAIgAhniSIABgCIAEACIgFAAg");
	this.shape_14.setTransform(1281.5,227.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E3C7B5").s().p("AjSC0IADgFIgBgDIADgHIgBgEQAAgFAQgOIAIgHIAJgJIgDgDQgWgCgegMIAAgEIADgBQAKAAApALIABgLIgDgiIABgCIACgBQAGAAACAlQAAAHgCAGIACAAIABAAIABgBIACgBQADACAAADIACABIAFAEIAHAHQAXATAAAEIAAABIAAABIAAACIAAAAIgBACQABAAAAAAQAAAAAAAAQAAAAgBAAQgBAAgBAAQgBAAgXgTIAAgCIgEgDIAEAFQAEAHALAMIgCAEQABAAAAAAQAAAAAAAAQgBAAAAAAQgBAAgBAAQgCAAgaghIgPAVIgaAfQgEgCAAgCgAAUBiIAAAAIgFgCIAAAAQgHgDgHgJQALAHAIAAQAQAAAHgNQgBAUgTAAIgDAAgAgKA6IAEAAQAWgBAUgLQgCAdgTAAQgCAAgXgRgAg2ALIAAAAIAAgEIgIgLQAEgEAEgHQAGgMABgKIgCgJIAGgCIAAACIADANQgBAFgFAHQgGAGAAAFIAVAGIAPAAIACgDIgCgEQgXgCgBgBQAHgFAAgPQAAgKgCgGIATgGIABACQAQAcAcAAIADAAIACAJIAAAGQgTAHgaAMIgcAPQgKgMgFAAgAhBAOIADABIACAAIgBADIABADQgEgDgBgEgAhGgRIAAAAIgCABIACgBgACtguIgBACQgEgCAAgCIABgCIABgBQgZgQgJgIQABgFADAAQAKAAAOALIAGAEIgBgEIgDgaQAAgFAEAAIAFAoIABACIAfghQABABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAACgQASIgMAOIAPgBIAAgBIAfAAIABAEIgBAEQgfAAgDACIgRAAIgDABIgBABIAAgCgAhVhJIAAgBQAAgNgCgHQAGgGAAgCQAAgHgGAAIAAgEQACgHACgOIgCgEIACgHQAEgBAEgHIADgJQAAgEgDgBIADAAIABAAIABAAQAVgCAMgOIAEAAQAZgBAPAfIAAAAIgHAAQgqAAAAAPQgBAEACABQAEAEASABQAQAAAOgGIAEgCIABACIACACQgVAAgPAWQgJAQAAAKIAFAOIgUAHIgMAEQgJgNgWgBg");
	this.shape_15.setTransform(1280.8,219);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EBEBAD").s().p("AhwE0QgMgNgNgGQgZgMABgZQgBgWATgVQgOgKAAgCQAAgRAWgRQAVgTAVgDIALAAQgBAAAAAAQAAABAAAAQABABAAAAQAAABABABIgBAEQgcAAgVASQgSAQAAAOQAAABAAAAQABABAAAAQABAAAAAAQABABABAAQAIAAAVgUQAVgVAOAAIAEACIABAEQAAAOgMAIIgbAMQgnAQABAmQgBAHAFAKQAIAQARAAQADAAAcgjQAcgkAMAAQAFAAAAAHQAAAOgTAdQgVAggXgCQABAMAWABQAXAAATgcIAYglQAEACAAAEQAAAKgjAsIAAABIAEABQAEAAAHgEQACAAACAEQgEAJgLAAQgHAAgDgEIgCgEQgRAKgKAAQgRAAgHgIgAhsEcIAAACQAegMAKgTQAGgKAGgUIgBAAIgBAAQgQAAgiA7gAh6DFQAagKAKgRIgBAAIgBAAQgJAAgZAbgACqChQgMAIgCAAQgSAAAEgrIAAgBIgJAFQgTAAgCglQgKAIgDAAQgMgBgGgMIgCgLQAAgbAIAAQAEAAAGATIgEADIgFgGIgCAKQAAAQALAAQAJAAAKghQAMgnAIgHQAGAFAAADQAAASgXAzQAAAOAMASQANgPAMghQAMgiANgOQAEABAAAEQAAACgSAlQgSAkAAAfQAAAQAHAIQAKgDAAgQQAAgMALgiQAOgsARAAIAFACIACAFIgoBeQAAAIAMAAQASAAAPgyQAPgyAWAAQAFAAABAHQAAAOgoA+IAAACIAOAAIABADQAAAFgLACQgEgDgEAAQgOAQgUAAQgKAAgFgIgACtCKQAXg0AJgXQgbAhgFAqgADcCGIABACQAYgmAKgcIgCAAQgYAAgJBAgAiZBCQgHAEgFABQgcgBAEgiIABgCQgFAIgQAAQgWAAgBgKQAEgLAAgEIgNACQgNgBgGgKIgCgKQAAgKAPgVQgNgFAAgOQAAgEAPgcQgNgDAAgMQAAgOAWgTIABAAQgbgCAAgPQAAgFAKgLQANgPAOAAQAKgBACAIQgFAGgIgCQgLgBgFAFQgMALAAAFQAAAJAgAAIACAEIgPAPQgPAOAAAIQAAAHAHAAQAMAAAQgMQADABAAADIgUASQgUARAAAOQgBAKAKAAIAKgKQAMgLAIABQAHgBAAAKQAAAOgYAHQgYAHAAAXIABAFQACAHAEAAQAXAAAKgPQALgRAGAAIAEABIACADQAAADgPAOQgOAPAAAJQgBAKANAAQAPAAAKgOQALgSACAAQADAAAAAEQAAACgPAhQAAAVAQAAIAJgCQAAgIAEgMQAGgRAJABIAEABIABAHQgBAIgNAUIACACIAMgFQADACAAACQAAACgPAIQgEgFgEAAgAiOAjIgIAPIAAABQAJgNgBgEgAjpgqIgBACQAXgBgCgLIAAgBIgFAAIgPALgABRhjQACgIAPgKIABgCIgrALQgGgBAAgCIgBgEQAAgGAPgLIAagRQgPAFgVABQgNgBgDgCIgBgEQAAgPAqgTQgYgGgNACQgGAAAAgCQAAgHBAgUQgagHgjgBQgUgBAAgGQAAgGAhgIIAlgIQgugCgIgCQgGgBAAgGQgBgEAwgWIAFgCQgdgDgHgHQAEgMATABQAegBAKAUIgIAAIg9AeQAMACA4ABQAAAAAAAAQAAABAAAAQAAABAAAAQABABAAABQAAALgXAFIgyAKIgBABQBMAJAGACQgIAJgWAIQgkAKgFADQBQgCAAgGIACADIgmASQgnASgEAIIASAAQAZgGAwgQIADABIACADQg7AdgZAXQAVgDBGgeQADABABACQAAACgYATQgbAVgSAIgAA8kyIgEACIASACIAKgBIABAAIgZgEIAAABg");
	this.shape_16.setTransform(1284.7,219.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3DBCE").s().p("AjhF7QhWhegYnpIgDhPQBAAKA/gGIAKgBIAAAAIgKABIAKgBQgKAOgFAEIAAAEIANAAIALgEQgCAKgFAFIA0gWQAagLAPgIQAGgIAKgJIABgBIADgBQBKgZBjgvQBKFuCyChQglAiglAcQjcCqjxAAIgdgBgAifDHQgWARAAARQAAACAOAKQgSAVABAWQgBAZAYAMQAOAGALANQAIAIAQAAQAKAAARgKIADAEQACAEAHAAQALAAAEgJQgBgEgDAAQgHAEgEAAIgEgBIAAgBQAjgsAAgKQAAgEgDgCIgYAlQgTAcgYAAQgWgBAAgMQAWACAWggQATgdAAgOQAAgHgGAAQgLAAgcAkQgcAjgEAAQgQAAgIgQQgGgKABgHQgBgmAogQIAbgMQAMgIAAgOIgBgEIgFgCQgNAAgVAVQgVAUgJAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBgBQAAgOASgQQAVgSAcAAIABgEQAAAAgBgBQAAgBAAAAQAAgBAAAAQAAAAAAgBIgKAAQgVADgWATgAgTFJQAAACAAABQAAAAAAABQAAAAABABQAAAAAAgBIAcgEIAAACIAEgCQBDgLAWgLQgBgDgEgCIg8AKIAAAAQAGgFAKgDIABAAQABAAAAAAQABAAABgBQAAAAABAAQAAgBABAAQAJgEAMgCQAVgEADgGIACgBIAAgJIgBgMIAFgGIgHgCQgEgRgIgTQAGgCAAgCIgCgCIgGgCIgCABIgGgMQAKgGAAgBIgBgDIgEgBIgKADIgCgEQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIgOgCIgGgMQACgCADgBQgBgDgDgBIgDACIgCgFIgCgEIAHgEIgBgEIgIADQgVgqgKgJQBlhhAAgHIgBgDIgFgBIADgBIARAAQACgCAfAAIACgEIgCgEIgeAAIAAABIgQABIANgOQAQgSAAgCQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAgBgBIgeAhIgBgCIgGgoQgEAAAAAFIAEAaIAAAEIgFgEQgOgLgLAAQgDAAgBAFQAKAIAZAQIgBABQgBAAAAgBQgBAAgBAAQAAgBgBAAQAAAAgBAAQgHAAgqAnQgrAqgOAYQAEAGAFAAQAFAAAGgNIAAABQgDAHgIANQAAABAAABQAAABAAAAQAAAAAAAAQABAAAAgBIAEACIAAgBQAEAKAOAZIgDACIgBgBIgBAAIgXgvQgCACAAAEIAKAcIgLADIABAAIABgGIgEgBQgQAGgcAWIgBgBIAKgQIAAgCIACAAQATAAACgUQAHgMAAgYIgBgFIAHgGQASgVAAgNQgBgUgMAAQgDAAgKAEIgCgMQAUgIABgoQABgOgGgNQgFgPgOgGIAJABQALgBAAgHQAAgIgSgBQANgMAAgDQAAgJgIAAIgRAOIAFgLQAHgRAAgHQgCgPgIAAQgJAAAAAIQAAAFAEAEQAAADgEAIQgBgigMABQgHgBAAAKIACAOQgGgIgIgFQAWgcAHgMQADAIALAAQAIgBAHgHQAGgHAAgGIgSgWQAGgJABgHQADgOgTAAQgNACgBgBQgBgQgKAAQgFAEgUAEQgNADAAAOQAAAMAcABIAAAAQgFAHAAAIQAAAIABACQgPAUgOAcIADACIgBAAQgLAAgHACIghg/QgHAAAAALIANAhIgdgqQgJAAABAJQgBAAAVAmIAMASQgTgKgBgBQgPgegGAAQgIAAAAAMIAPAbQANASARAGIAAAAQgSgCgQgJQgEgCgFgJQgEgIgHAAQgKAAAAAIQAAAHAQAMQASAPAUABQgEALgEAUIgMgDQgLgJgIAAQgHAAAAAHQAAAEAGAGIAHAFIgPgCQgFAAgBAEQgBABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAEAJAEQAJAGAPABIgXAOIABAEQACAEAHAAQAFAAAHgEIABACQgBAAAAAAQAAAAgBAAQAAABAAAAQAAAAAAAAQgKAIAAACIABAEQACAEAFAAQgCAEAAAHIAAABQgEAHAAAGIAGATQAKAVAeAAIAIgBIACAFQAEAGAEACQACAEAEADIAGAIQgTAKABACQAAABAAABQAAABAAAAQAAABAAAAQABAAAAgBIAYAHIAOADIADADQAEAHAGADIAFAFIARAMQAIAJAGADIgMAIIgDgGQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAAAAAgBIgHgLQAAgKgHAAIAAABQgBgBAAAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQhzAfgdALIgCABIgCABIgBAAQABgGAAgHQgCglgFAAIgDABIAAACIADAiIgBALQgqgLgJAAIgEABIAAAEQAeAMAXACIACADIgJAJIgHAHQgRAOABAFIAAAEIgCAHIAAADIgCAFQAAACAEACIAZgfIAPgVQAaAhADAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABgEQgKgMgFgHQAXATACAAQABAAAAAAQABAAAAAAQABAAgBAAQAAAAAAAAIAAgCIABAAIAAgCIAAgBIAAgBQAAgEgYgTIAogPQAHAAAfgNQAKAAAbgHQACAAAKANIAAADIACAAIAPAXIAJAMIAAACIACABIAFAIIABACIAGAJQgHAGAAAEQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAIAEABIgHAJQADACADAAIADADIAOAWIgGABQgIACAAAEQAAABAAABQAAABABAAQAAABAAAAQAAAAABgBIATAAIAKARQgOABAAADQAAABAAABQAAABAAAAQABABAAAAQAAAAABAAIARAAIAHAWIgSAGIALAGIgCAAIgFAAQgIAAAAAGgACiDNQAUAAAOgQQAEAAAEADQALgCAAgFIgCgDIgNAAIAAgCQAng+AAgOQgBgHgEAAQgXAAgPAyQgOAygTAAQgMAAAAgIIAoheIgBgFIgFgCQgSAAgOAsQgLAiAAAMQAAAQgKADQgHgIAAgQQAAgfATgkQARglAAgCQAAgEgEgBQgNAOgMAiQgLAhgOAPQgLgSAAgOQAWgzAAgSQAAgDgFgFQgJAHgLAnQgKAhgKAAQgKAAAAgQIACgKIAFAGIADgDQgFgTgFAAQgIAAAAAbIADALQAFAMAMABQADAAAKgIQADAlASAAIAKgFIAAABQgEArASAAQACAAALgIQAGAIAKAAgAipBrQAQgIAAgCQAAgCgEgCIgMAFIgBgCQANgUAAgIIAAgHIgEgBQgKgBgFARQgFAMAAAIIgIACQgQAAAAgVQAPghAAgCQAAgEgEAAQgCAAgLASQgJAOgQAAQgNAAABgKQAAgJAPgPQAOgQABgDIgCgDIgEgBQgGAAgLARQgLARgWAAQgEAAgCgHIgCgHQAAgXAZgHQAXgFABgOQAAgKgHABQgJgBgLALIgLAKQgJAAAAgKQAAgOAVgRIAUgSQAAgDgDgBQgQAMgMAAQgIAAAAgHQAAgIAPgOIAPgPIgCgEQggAAAAgJQAAgFAMgLQAFgFALABQAJACAFgGQgCgIgLABQgOAAgNAPQgJALAAAFQAAAPAaACIAAAAQgXATABAOQgBAMAOADQgQAcABAEQAAAOAMADQgOAVAAAKIACAMQAFAKANABIAOgCQAAAEgEALQAAAKAXAAQAPAAAGgIIgBACQgEAiAcABQAEgBAHgEQAFAAADAFgABKhRQgOAKgDAIIAEACQARgIAbgVQAZgTAAgCQgBgCgEgBQhFAegVADQAYgXA7gdIgBgDIgDgBQgxAQgYAGIgSAAQAEgIAngSIAlgSIgBgDQgBAGhQACQAGgDAkgKQAVgIAIgJQgFgChNgJIACgBIAygKQAXgFAAgLQgBgBAAAAQAAgBAAgBQgBAAAAAAQABgBAAAAQg5gBgLgCIA9geIAIAAQgLgUgdABQgUgBgEAMQAHAHAdADIgFACQgwAWABAEQAAAGAHABQAIACAuACIglAIQgfAIAAAGQAAAGASABQAiABAbAHQhBAUAAAHQAAACAHAAQAMgCAZAGQgqATAAAPIABAEQACACANABQAVgBAQgFIgbARQgPALAAAGIABAEQABACAGABIAqgLgAhqkgQAMgGAEgFQgEAFgMAGgAiEFAQAjg8AQABIABAAQgGAUgFAKQgKATgfAMgAAGEtIABABIADgBIADAHIgFACIgCgJgAAQErIAHgCQABAEACADIgBAAIgFACIgBABIgDgIgAAmEsIgDgLIADAAIADAAIADABIAEAIIgKAEgAABEhIADAAIADAGIgDACIgDgIgAAMEhIAHAAIAAAAIgGACIgBgCgABLEgIAFAAIABABIgGACgAA6EgIAHAAIABABIgBAAQgEAAgCACIgBgDgAA4EWIAFgBIACAEIgGABIgBgEgAgCESIACABIAAAEIAAABIgCgGgABiEXIAAgCIgCgHIABgBIADAKgAAIETIAFgBIACAEIgGABIgBgEgAAXEVIgDgFIADgCIACAHIgCAAgAgGEIIACAAIACAIIAAACIgEgKgAAqEKIACgCIACAHIgBABIgDgGgAA3EPIABgEIACAEIgDAAgAAeEKIABAAIACACQgBAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgBgFgABHEMIgBgGIABAAIACAGIgCAAgAAHELIADgCIAAACIgDABgABeEGIAAAAIACgBIAAABIgCAAgAADEAIgBgEIACgBIACAFIgDAAgAAkD8IAAgBIgBgCIgCgEIAFgEIADANIgDABIgCgDgAAvDzIADAJIAAACgABbD+IgGgUIgDgJQAAAAAAAAQAAAAABAAQAAAAAAAAQAAgBABAAIAGANQADAGACALIgEAAgAA7D+IgBAAIAAgCIAAgFIADAHQgBAAAAAAQAAgBAAAAQAAAAAAABQgBAAAAAAgAALD5IADAAIgCACIgBgCgABFDmIACAAIACAMIgEgMgAA0DsIAEgBIAAAAIgEACIAAgBgAAKDrIAAAAIgBABIABgBgAhvDOIACAAQgKARgbAKQAbgcAIABgAAaDkIAHgEIABAEIgDAAIAAACIgEABIgBgDgAAuDeIACgCIgCgBQADgCADgBIABAEIgCAAIgEADIgBgBgAAJDcIADgCIAAABIgBABIgCAAgABNDVIAAgCIACAFIAAAAIgCgDgAgGDTIACgBIAAACIgCABgAAvDIIABgBIACAGIgIADIAFgIgAgmDCIAFgBIACAEIgDACIgEgFgAgRDFIAAgBIABgBIgBACgABGDFIgCgEIgBgDIACAAIACAHgAAmC9IABABIgFABQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAgAAWC8IAIgGIABABIgEAHIgFgCgAAQCwIAHACIgGADQgBgCAAgDgAAsCuIAEgCIADAFIgHgDgAjWCrIADADIAAACIgDgFgAjTCwIAAAAgAg1CrIAHgDIACACQgEACgCADIgDgEgAC2BjQgJAXgXA0QAFgqAbghgAAXCqIAEgDIACADIACAEIgIgEgADECqQAJhAAZAAIACAAQgKAcgZAmgAAhClIAAgBIAHgFIAFAIIgHADIgFgFgAgECoIADgCIgBADIgCABgAgfCoIAFgCIgBACIgDABgAhFCVIAEACQAEAAADgCQgEAFAAAFIgHgKgAjbCbIAlgKQgUAIgLAGIgGgEgAARCbIADgCIADAFIgCABgAAbCVIAFgEIAEAIIgFACIgEgGgAgXCYIgCABIAAABIACgCgAAMCFIAEAIIgQAEQAJgIADgEgAhMCCIgEACIAAACIgCgCQAIgCABgDQgIgHgKAAQgHgBgIACIAagKIAAACIALATIgCACQgCgEgDAAgAiuBWIAJgPIAAgBQABAEgKANgAAUBEQAHgCAFgEIgIAKgAgMA+IAFgFIAIgMQgEAKgJAIIAAgBgAABAVIgBAAIAAgBQAAAAABAAQABAAAAAAQABAAAAAAQAAABABAAIgDAAgAkAgGIAPgLIAFAAIAAABQACALgXABgAheirIAKgKIAAAEQABAEAGAAQABAAABAAQABAAAAAAQABAAAAAAQAAAAABgBIABgEQAGgDACgCQgIAKgBAGQgKgEgMAAgAhMjBIADADIgGAAIADgDgAg2jJIAEgBIgCAEIgCgDgAhHjJIABgCIABgCQACAEADABIgHgBgAgujYIAGgBIAAACIgDAFIgDgGgAhBjTIAEgIIAGABIAEAHgAg6kOQgBgBAFgEQAGAEgJAJQgCgEABgEgAAhkMIADgCIAaADIgBAAIgLABIgRgCgAjJkYIAAAAg");
	this.shape_17.setTransform(1287,215.6);

	// BG - PNG
	this.background = new lib.Background();
	this.background.setTransform(975,299.9,1,1,0,0,0,975,299.9);

	this.addChild(this.background,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.fridge,this.island,this.microwave,this.stove,this.shape_2,this.shape_1,this.shape,this.bakingPans,this.mixingBowl,this.mixer,this.ovenMitt,this.juicer,this.sponge,this.foodProcessor,this.toasterOven,this.bakingSheet,this.measuringCup,this.teaspoons,this.timer,this.cuttingBoard,this.trashCan,this.cookBooks,this.bowls,this.plates,this.soap,this.utensils,this.blender,this.pressureCooker,this.fryingPan,this.sink);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-49.2,1950,649.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;