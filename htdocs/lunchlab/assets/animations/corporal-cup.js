(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.corporalcup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"idle":0,idle_loop:239,DoubleTime:248,DoubleTime_stop:379,ProteinBuildsUpMuscle:380,ProteinBuildsUpMuscle_stop:567,LeftRightLeftRight:568,LeftRightLeftRight_stop:710});

	// anim
	this.instance = new lib.Cup_Idle("synched",0);
	this.instance.setTransform(427.4,190.1,1.41,1.41,0,4.5,-175.4);

	this.instance_1 = new lib.Cup_DoubleTime("synched",0);
	this.instance_1.setTransform(198.8,334.6,0.849,0.849,0,0,0,-71.4,63.6);

	this.instance_2 = new lib.Cup_Protein("synched",0);
	this.instance_2.setTransform(427.4,191.1,1.41,1.41,0,4.5,-175.4);

	this.instance_3 = new lib.Cup_LeftRight("synched",0);
	this.instance_3.setTransform(427.4,190.1,1.41,1.41,0,4.5,-175.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},248).to({state:[{t:this.instance_2}]},132).to({state:[{t:this.instance_3}]},188).wait(143));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.9,121,426.3,419.8);


// symbols:
(lib.Symbol5copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AggBSQg9huggiPQBPAhBEgCQAXAAATgEQgBA4APAxQAUBGAOAQQAIAJAGAEIgMAQQgoA3gNApQgzgHgqhTg");
	this.shape.setTransform(23.5,88.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AhsA4QgigVgYgXIgDACIgBgEQAAgSAHgrIADgLQAOAOASAJQAIAFAJADQAUASAbgBIADAAQBtAdBwgdIAGgJIgaABIgTABQANgIALgPIACAAQAMAGAFAHQACADACAFQADAGAAAHQABAkgWAcQgHAJgJAIQAAAFgNAJQgQALgXAAIgKgBIgVABIgKABQhRAAhEgpgAiehKQAEgNADgJIABABQAGAQAIAPIgWgKg");
	this.shape_1.setTransform(20.9,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AhIEDIgagRQgkgWAAgaIgJgjQgJglgBgMIAEhKIgIheQAAgMgGgaQgHgZAAgNQAAgIgJgpQAAgcAEgVQAJgrAcgBQAxgBAOBuIAEBuIgGAGQgDAQgJAeIgBAEIAHABQAUgdAVgLQAWgXAUgBQA5gBAZAYIAHAJQgSAGgTAaQgGADgBAFIgJANIABADQAFACAEADQAZgfAigBQAmgBAVAUQAQAPAAAOIgBAHIABACQABARgGArQgEAcgOANQABgNAAgNQgBgWgSgLIgDgCQABAagCAZQgEAhgIAMIgEANQgIAdgMAPIgHAHIgDAEQgJANgVACIABAFQhCgDhCgQg");
	this.shape_2.setTransform(22.4,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AgbBSQhAhsgmiNQBPAeBFgEQAWgCATgFQABA4ARAwQAXBFAOAPQAJAJAGAFIgLAPQgmA6gLApQgzgFguhRg");
	this.shape_3.setTransform(22.9,89.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AhpA6QgkgUgYgVIgDABIgBgEQgBgSAFgrIADgLQAOAOATAIIARAHQAVARAagBIADgBQBvAZBugiIAGgJIgaACIgTACQANgJAKgPIACAAQAMAGAFAGIAFAIQADAGAAAHQADAkgVAdQgHAJgIAIQAAAGgNAJQgPALgYACIgJgBIgVACIgXABQhKAAg/gjgAighGQACgNAEgJIABAAQAGARAIAOIgVgJg");
	this.shape_4.setTransform(19.5,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("Ag7EEIgagQQglgUgCgaIgKgjQgLglgBgMIABhKIgLhdQgBgMgHgaQgIgZAAgNQgBgIgKgoQgCgcADgVQAIgsAcgCQAxgDASBuIAIBuIgGAFQgCAQgHAfIgBADIAHAAQATgcAUgMQAWgYATgBQA4gEAaAXQAEACAEAGQgSAHgSAbQgFAEgBAEIgIANIABAEQAFABADAEQAYggAigDQAmgCAWATQAQAOABAOQABAEgBADIABACQABARgEArQgDAdgNANQAAgNgBgNQgBgWgTgKIgDgCQACAZgBAaQgCAhgIAMIgDAOQgHAdgMAPIgGAIIgDADQgJAOgVADIABAEIgFAAQhBAAg+gNg");
	this.shape_5.setTransform(19.5,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("AgeBSQg+htgjiOQBPAgBFgFQAWgBATgEQABA4APAwQAWBGANAQIAPANIgMAPQgnA5gMAqQg0gGgrhSg");
	this.shape_6.setTransform(23.1,89.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AhrA5QgjgUgYgWIgCACIgBgEQgBgSAHgrIACgLQAOAOATAIIAQAHQAVASAbgCIADAAQBtAaBwggIAGgJIgaABIgTACQANgIAKgQIACABQAMAFAFAHQADADABAFQAEAGAAAHQABAkgVAdIgPARQgBAFgMAJQgQALgYACIgJgBIgWABIgTABQhMAAhAglgAifhHQADgNAEgJIABABQAGAQAIAOIgWgJg");
	this.shape_7.setTransform(20.2,63);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AhDEEQgJgHgRgKQgkgUgBgaIgKgjQgKglAAgMIAChKIgJhdQgBgMgGgaQgHgaAAgNQgBgIgJgoQgBgcAEgVQAIgsAcgBQAxgDAQBuIAGBuIgGAGIgLAvIgBADIAGAAQAUgcAVgMQAWgYAUgBQA4gDAaAYIAHAIQgRAHgUAbQgFADgBAFIgJANIABADQAFACAEADQAZggAhgBQAmgCAWATQAQAPABANIgBAIIABACQABARgGArQgDAcgNANIAAgaQgBgWgTgKIgDgCQABAZgBAaQgDAhgIAMIgEANQgHAdgMAPIgHAHIgDAEQgJAOgVACIABAFQhCgBhCgOg");
	this.shape_8.setTransform(21.1,32.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AgdBSQg/htgkiOQBQAfBEgDQAXgBASgEQACA4APAvQAWBGAOAPQAIAKAHAEIgNAPQgmA5gLAqQg1gHgrhRg");
	this.shape_9.setTransform(23.4,89);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AhrA5QgjgUgYgWIgDACIgBgEQgBgSAHgrIADgLQANAOATAIQAIAFAJACQAVASAagBIADAAQBuAZBvggIAHgIIgaABIgTABQAMgIALgPIACAAQAMAGAFAHIAEAHQADAGAAAIQACAkgVAcQgHAJgIAIQgBAFgMAJQgQAMgXABIgKgBIgVACIgRAAQhNAAhCglgAighHIAHgWIABAAQAGARAIAOIgWgJg");
	this.shape_10.setTransform(20.3,62.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("AhAEEIgbgQQgkgWgBgaIgKgiQgKglgBgMIAChKIgKheQAAgMgHgaQgHgZAAgNIgLgxQgBgbAEgVQAIgsAcgCQAxgCAQBuIAHBuIgGAGQgDAQgHAeIgBAEIAGAAQAUgcAUgMQAWgYAUgBQA5gDAZAYIAIAIQgSAHgTAbQgFACgBAFIgJAOIABADQAFABAEAEQAZggAhgCQAmgCAWAUQAQAOABAOIgBAHIABACQABARgFAsQgEAcgNANIAAgaQgBgWgTgLIgDgBQACAZgBAaQgDAhgIAMIgEANQgHAdgMAPIgGAIIgDADQgKAOgVACIACAFQhEgBhAgOg");
	this.shape_11.setTransform(20.9,32.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("AgbBSQhBhsgkiOQBPAfBEgFQAXgBATgFQABA4AQAwQAXBGAOAPQAIAJAGAEIgLAQQgmA5gMAqQgzgFgshSg");
	this.shape_12.setTransform(23.1,89.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#526139").s().p("AhqA6QgjgUgZgVIgCABIgBgEQgBgSAGgrIACgLQAOAOATAIQAIAEAJADQAVARAagBIADgBQBuAZBvgiIAGgJIgaACIgTACQANgJAKgPIACAAQAMAGAFAGIAFAIQADAGAAAHQACAkgUAdIgQARQAAAGgMAJQgQALgXACIgKgBIgVACIgXABQhJAAhAgjgAighGIAGgWIABAAQAHARAIAOIgWgJg");
	this.shape_13.setTransform(19.8,63.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3E4E6").s().p("Ag9EEIgagQQglgUgCgaIgKgjQgKgkgBgMIABhKIgKheQgBgMgHgaQgHgZgBgNQAAgIgKgoQgCgcAEgVQAHgsAcgCQAygDARBuIAHBuIgGAFQgCARgIAeIAAADIAGAAQAUgcAUgMQAWgYATgBQA5gEAZAYIAIAIQgSAHgSAbQgGADgBAFIgIANIABADQAFACAEADQAYggAigCQAmgDAWATQAQAPABANIgBAIIABACQABARgFArQgDAcgNANQABgNgBgMQgBgWgTgLIgDgCQACAagCAZQgCAhgIAMIgDAOQgHAdgMAPIgHAIIgCADQgKAOgUADIABAEIgFAAQhBAAg+gNg");
	this.shape_14.setTransform(20.1,33);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#758A51").s().p("AgdBSQg/hsgkiNQBPAeBFgEQAWgCATgFQABA4APAwQAXBFAOAPQAIAJAHAFIgMAPQgnA6gLApQg0gFgshRg");
	this.shape_15.setTransform(23.3,89.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("AhqA6QgjgUgZgVIgCABIgBgEQgBgSAGgrIADgLQAOAOATAIQAIAEAIADQAVARAbgBIADgBQBtAZBvgiIAGgJIgZACIgTACQAMgJAKgPIACAAQANAGAFAGQACADACAFQADAGAAAHQACAkgUAdIgQARQAAAGgNAJQgPALgYACIgJgBIgWACIgXABQhJAAg/gjgAifhGQADgNADgJIABAAQAHARAHAOIgVgJg");
	this.shape_16.setTransform(20.1,63.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3E4E6").s().p("Ag/EFIgagQQglgVgBgaIgKgiQgKglgBgMIAChKIgKheQgBgMgHgaQgHgZAAgNIgLgwQgBgcAEgVQAHgsAcgCQAygDAQBuIAHBuIgGAFQgCARgIAeIgBADIAHAAQATgcAVgMQAWgYATgBQA4gEAaAYQADACAFAGQgSAHgTAbQgFADgBAFIgJANIABADQAFACAEADQAZggAhgCQAmgDAWATQAQAPABANQAAAEgBAEIABACQABARgFArQgDAcgNAOIAAgaQgBgWgTgLIgDgCQABAagBAaQgDAhgIAMIgDANQgHAdgMAPIgHAIIgCAEQgKAOgVACQAAABAAAAQAAABAAAAQABABAAABQAAAAABABIgFAAQhAAAg/gNg");
	this.shape_17.setTransform(20.6,32.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#526139").s().p("AhpA6QgkgUgYgVIgDABIgBgEQgBgSAGgrIADgLQAOAOASAIIARAHQAVARAbgBIADgBQBtAZBvgiIAGgJIgaACIgTACQANgJAKgPIACAAQAMAGAGAGQACADACAFQADAGAAAHQADAkgVAdQgHAJgIAIQgBAGgMAJQgQALgXACIgKgBIgVACIgXABQhJAAg/gjgAighGIAGgWIACAAQAGARAIAOIgWgJg");
	this.shape_18.setTransform(19.8,63.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3E4E6").s().p("Ag9EEIgbgQQgkgUgCgaIgKgjQgKglgBgLIABhKIgLheQAAgMgHgaQgIgZAAgNQgBgIgKgoQgBgcADgVQAIgsAcgCQAxgDARBuIAIBuIgGAFQgCARgIAeIgBADIAHAAQATgcAUgMQAWgYAUgBQA4gEAaAYQADACAFAGQgSAHgTAbQgFADgBAFIgIANIABADQAFACADADQAZggAhgCQAmgDAWATQAQAPABANIAAAIIABACQABARgFArQgDAcgNANQABgNgBgNQgCgVgSgLIgEgCQACAZgBAaQgCAhgIAMIgDAOQgIAdgLAPIgHAIIgDADQgJAOgVADIABAEIgEAAQhBAAg+gNg");
	this.shape_19.setTransform(20.1,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_12}]},2).wait(1));

	// Layer 2
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAIH6Qgwgkg5iWQgbhIgHgtIAAgCQgEgGAAgCQAAgIgGgeIAAgGQgZgMgNgMQgFgBgGgGIgGgUQgIgGAAgIQgBgjAKgrQAHggAMgJIABgEIAAgFQACAAADACQgJgggEgjQgChpgNhfIgNhiIAHhDQAPg+AxgBQA8gCAdBTIAQBTQgBAdgEAcIAAAHQAVgPASgBQA1gBAsAiQAXARAJAQQAPADAMAIIAHAAQAaAKANAYQAKAUABAVQABAigEAfQgLA+giABIgIgBQgCAQgFAQQgFAQgGAOQAjAFABAuQABAwgXAgQgUAbglAMQAHA6AoCUIgEAFIgMAQQgoA3gMApQgFAQgBANQgYgGgkgagAikgWIABAAIgBgBg");
	this.shape_20.setTransform(22.2,55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAnH3Qgxgig/iUQgehGgIgtIgBgBQgEgGAAgDIgIglIAAgGQgZgLgNgMQgFAAgHgGIgGgUQgJgGAAgIQgCgjAIgrQAGggALgKIAAgEIAAgFQADAAADACQgLgggFgjQgGhpgRhdIgRhiIAEhDQANg/AxgDQA8gEAgBSIATBSQAAAdgCAdIAAAGQAUgQASgBQA1gEAtAhQAYAQAKAPQAPACAMAIIAHgBQAaAKAOAXQALAUACAUQADAjgEAfQgIA/giACQgDAAgFgBQgCAQgEAQQgEATgGAMQAjAEADAuQAEAvgXAhQgSAcglANQAJA6AvCTIgEAEIgLAQQgmA5gLAqQgEAQAAAOQgYgGgmgZgAiagRIABAAIAAgCg");
	this.shape_21.setTransform(19.4,55.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAUH4Qgwgjg8iUQgchHgHgtIgBgCQgDgGAAgCQgBgIgGgeIAAgFQgZgMgNgMQgFAAgHgGIgGgUQgIgGAAgIQgCgjAKgrQAGggAMgJIABgEIgBgFQADAAADACQgKgggEgjQgEhpgOheIgPhiIAFhDQAPg/AxgCQA7gDAfBRIARBTQAAAdgDAcIAAAHQAUgQASgBQA1gDAsAhQAYARAJAQQAPACANAIIAHAAQAZAJAOAYQAKATABAVQACAjgEAfQgKA+ghACQgEAAgEgBQgCAQgFAQQgEATgHALQAkAEABAuQADAwgXAgQgUAcgkANQAHA6ArCUIgEAEIgMAQQgnA5gMApQgEAQAAAOQgYgHgmgZgAiggTIABABIgBgCg");
	this.shape_22.setTransform(21,55.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAaH4Qgxgig9iVQgchHgIgtIAAgBQgEgGAAgCQgBgIgHgeIAAgGQgYgMgOgLQgFgBgGgGIgGgTQgIgHgBgIQgBgjAJgrQAGggALgJIABgEIAAgFIAFACQgKgggEgjQgFhpgPheIgPhiIAFhDQAOg/AxgCQA7gDAfBRIASBTQAAAegDAcIAAAGQAUgPASgBQA1gDAtAhQAYARAJAPQAPACANAIIAHAAQAZAKAOAXQALAUABAVQACAigEAfQgJA+giACIgIgBQgCAQgEAQQgFATgGAMQAjAEACAuQADAwgXAgQgTAcgkANQAIA5ArCUIgDAFIgMAPQgnA5gLAqQgEAPgBAOQgYgHglgZgAifgTIABABIAAgCg");
	this.shape_23.setTransform(20.8,55.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAhH4Qgxgig+iUQgdhHgIgtIAAgBQgEgGAAgDIgIglQgBgDABgDQgZgLgNgMQgFAAgHgGIgGgUQgJgGAAgIQgCgjAJgrQAGggALgKIABgEIAAgFQACAAADACQgKgggFgiQgGhpgQheIgQhiIAFhDQANg/AxgDQA8gEAfBSIATBSQAAAdgDAdIAAAGQAUgQASgBQA1gEAtAhQAYAQAKAQQAPACAMAHIAHAAQAaAJAOAYQALATABAVQACAigDAgQgJA+ghACQgEAAgFgBIgFAgQgFATgGAMQAjAEADAuQADAvgXAhQgTAcgkANQAIA6AuCTIgEAFIgMAQQgmA5gLAqQgEAQAAANQgYgGgmgYgAicgRIABAAIAAgCg");
	this.shape_24.setTransform(20,55.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAcH4Qgwgig9iUQgdhHgIgsIgBgCQgDgGAAgCQgBgIgHgeIAAgFQgZgMgNgLQgFgBgHgFIgGgUQgIgGAAgIQgCgjAJgsQAGggALgJIABgEIAAgFQADAAADACQgLgggEgjQgFhpgPheIgQhiIAFhDQAOg/AxgDQA7gEAfBSIASBSQAAAdgDAdIABAGQAUgQASgBQA0gEAtAhQAXAQAKAQQAPACANAHIAHAAQAZAJAOAYQALATABAVQADAigEAgQgKA+ghACQgEABgEgCQgCAQgEAQQgFATgGAMQAjAEACAuQADAwgWAgQgUAcgkAOQAIA5AtCTIgEAFIgMAQQgmA5gMAqQgEAQAAANQgYgGgmgYgAidgRIABAAIgBgBg");
	this.shape_25.setTransform(20.5,55.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAhH4Qgxgig+iUQgdhHgIgtIgBgBQgDgGAAgDIgIglIAAgGQgZgLgOgMQgFAAgGgGIgGgUQgJgGAAgIQgCgjAIgrQAGggAMgKIAAgEIAAgFQADAAADACQgLgggEgiQgGhpgQheIgQhiIAEhDQAOg/AxgDQA7gEAgBSIASBSQAAAdgCAdIAAAGQAUgQASgBQA1gEAtAhQAXAQAKAQQAPACANAHIAHAAQAZAJAOAYQALATACAVQACAigDAgQgJA+giACQgDAAgFgBQgCAQgEAQQgEATgGAMQAjAEACAuQAEAvgXAhQgTAcgkANQAIA6AuCTIgEAFIgMAQQgmA5gLAqQgEAQAAANQgYgGgmgYgAicgRIABAAIgBgCg");
	this.shape_26.setTransform(20,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20}]}).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},2).to({state:[{t:this.shape_26}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1.2,42.5,107.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AgYDYQgSgCgSgNIgEgCQgIgHgJgKIgHgIIgBgBQgQgUgOgbQg9hwggiNQBPAhBGgCQAXAAATgEQgBA4APAvIAHAdIAJAcQAJAXAHAIQAIAJAGAEIAEgFIgRhAQAhg0AMg4QAPhAAGg9IgLgMQAAgJAMAFQAOAGAfAaIA/A3QALAAAAAMQABAEgCAGQgDAIABACIgIABIgCgBIgIgHQgBBagxBeQgxBghLAgQgRAHgOAAIgKgBg");
	this.shape.setTransform(32.2,84.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AhsA4QgigVgYgXIgDACIgBgEQAAgSAHgrIADgLQAOAOASAJQAIAFAJADQAUASAbgBIADAAQBtAdBwgdIAGgJIgaABIgTABQANgIALgPIACAAQAMAGAFAHQACADACAFQADAGAAAHQABAkgWAcQgHAJgJAIQAAAFgNAJQgQALgXAAIgKgBIgVABIgKABQhRAAhEgpgAiehKQAEgNADgJIABABQAGAQAIAPIgWgKg");
	this.shape_1.setTransform(20.9,62.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AhIEDIgagRQgkgWAAgaIgJgjQgJglgBgMIAEhKIgIheQAAgMgGgaQgHgZAAgNQAAgIgJgpQAAgcAEgVQAJgrAcgBQAxgBAOBuIAEBuIgGAGQgDAQgJAeIgBAEIAHABQAUgdAVgLQAWgXAUgBQA5gBAZAYIAHAJQgSAGgTAaQgGADgBAFIgJANIABADQAFACAEADQAZgfAigBQAmgBAVAUQAQAPAAAOIgBAHIABACQABARgGArQgEAcgOANQABgNAAgNQgBgWgSgLIgDgCQABAagCAZQgEAhgIAMIgEANQgIAdgMAPIgHAHIgDAEQgJANgVACIABAFQhCgDhCgQg");
	this.shape_2.setTransform(22.4,32.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AhUCvQgPgTgPgZQhBhugmiMQBQAfBGgFQAWgBATgFQACA4AQAuIAKAhQAQAqAKALQAIAJAGAEIAEgEIgSg7QAjg2ANg7QAPhAAGg9IgLgLQAAgKAMAFQAOAGAfAbIA/A3QALgBAAAMQABAFgCAGQgDAIABACIgIABIgCgBIgIgIQgBBbgxBeQgxBghLAgQgUAIgRgCIgBABQgjgDghgng");
	this.shape_3.setTransform(31.7,84.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AhpA6QgkgUgYgVIgDABIgBgEQgBgSAFgrIADgLQAOAOATAIIARAHQAVARAagBIADgBQBvAZBugiIAGgJIgaACIgTACQANgJAKgPIACAAQAMAGAFAGIAFAIQADAGAAAHQADAkgVAdQgHAJgIAIQAAAGgNAJQgPALgYACIgJgBIgVACIgXABQhKAAg/gjgAighGQACgNAEgJIABAAQAGARAIAOIgVgJg");
	this.shape_4.setTransform(19.5,63.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("Ag7EEIgagQQglgUgCgaIgKgjQgLglgBgMIABhKIgLhdQgBgMgHgaQgIgZAAgNQgBgIgKgoQgCgcADgVQAIgsAcgCQAxgDASBuIAIBuIgGAFQgCAQgHAfIgBADIAHAAQATgcAUgMQAWgYATgBQA4gEAaAXQAEACAEAGQgSAHgSAbQgFAEgBAEIgIANIABAEQAFABADAEQAYggAigDQAmgCAWATQAQAOABAOQABAEgBADIABACQABARgEArQgDAdgNANQAAgNgBgNQgBgWgTgKIgDgCQACAZgBAaQgCAhgIAMIgDAOQgHAdgMAPIgGAIIgDADQgJAOgVADIABAEIgFAAQhBAAg+gNg");
	this.shape_5.setTransform(19.5,33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("AgYDYQgTgCgSgOIgEgCQgMgKgLgOIgBgBQgQgUgOgbQg9hwggiNQBPAhBGgCQAXAAATgEQgBA4APAvIAHAdIAJAcQAJAXAHAIQAIAJAGAEIAEgFIgRhAQAhg0AMg4QAPhAAGg9IgLgMQAAgJAMAFQAOAGAfAaIA/A3QALAAAAAMQABAEgCAGQgDAIABACIgIABIgCgBIgIgHQgBBagxBeQgxBghLAgQgRAHgOAAIgKgBg");
	this.shape_6.setTransform(32.2,84.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("AhXCwQgQgTgPgbQg+hvgiiMQBPAfBGgEQAXgBATgEQAAA4APAuIAIAgQAPAsALAMIAOANIAEgFIgRg+QAig1ANg6QAPhAAGg9IgLgMQAAgJAMAFQAOAGAfAaIA/A3QALAAAAAMQABAEgCAGQgDAIABACIgIABIgCgBIgIgHQgBBagxBeQgxBghLAgQgUAJgUgCIgBACQgigEgggmg");
	this.shape_7.setTransform(31.9,84.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#526139").s().p("AhrA5QgjgUgYgWIgCACIgBgEQgBgSAHgrIACgLQAOAOATAIIAQAHQAVASAbgCIADAAQBtAaBwggIAGgJIgaABIgTACQANgIAKgQIACABQAMAFAFAHQADADABAFQAEAGAAAHQABAkgVAdIgPARQgBAFgMAJQgQALgYACIgJgBIgWABIgTABQhMAAhAglgAifhHQADgNAEgJIABABQAGAQAIAOIgWgJg");
	this.shape_8.setTransform(20.2,63);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3E4E6").s().p("AhDEEQgJgHgRgKQgkgUgBgaIgKgjQgKglAAgMIAChKIgJhdQgBgMgGgaQgHgaAAgNQgBgIgJgoQgBgcAEgVQAIgsAcgBQAxgDAQBuIAGBuIgGAGIgLAvIgBADIAGAAQAUgcAVgMQAWgYAUgBQA4gDAaAYIAHAIQgRAHgUAbQgFADgBAFIgJANIABADQAFACAEADQAZggAhgBQAmgCAWATQAQAPABANIgBAIIABACQABARgGArQgDAcgNANIAAgaQgBgWgTgKIgDgCQABAZgBAaQgDAhgIAMIgEANQgHAdgMAPIgHAHIgDAEQgJAOgVACIABAFQhCgBhCgOg");
	this.shape_9.setTransform(21.1,32.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AgSDZIAAgBQgkgEgggpQgPgSgOgZQhAhvgjiMQBPAgBHgEQAWgBATgEQABA4AQAuIAIAeIAKAbQAJAWAHAIQAIAJAGAEIAEgFIgSg+QAhg0AMg4QAPhAAGg9IgLgMQAAgJAMAFQAOAGAfAaIA/A3QALAAAAAMQABAEgCAGQgDAIABACIgIABIgCgBIgIgHQgBBagxBeQgxBghLAgQgRAHgOAAIgGAAg");
	this.shape_10.setTransform(32,84.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("AhrA5QgjgUgYgWIgDACIgBgEQgBgSAHgrIADgLQANAOATAIQAIAFAJACQAVASAagBIADAAQBuAZBvggIAHgIIgaABIgTABQAMgIALgPIACAAQAMAGAFAHIAEAHQADAGAAAIQACAkgVAcQgHAJgIAIQgBAFgMAJQgQAMgXABIgKgBIgVACIgRAAQhNAAhCglgAighHIAHgWIABAAQAGARAIAOIgWgJg");
	this.shape_11.setTransform(20.3,62.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3E4E6").s().p("AhAEEIgbgQQgkgWgBgaIgKgiQgKglgBgMIAChKIgKheQAAgMgHgaQgHgZAAgNIgLgxQgBgbAEgVQAIgsAcgCQAxgCAQBuIAHBuIgGAGQgDAQgHAeIgBAEIAGAAQAUgcAUgMQAWgYAUgBQA5gDAZAYIAIAIQgSAHgTAbQgFACgBAFIgJAOIABADQAFABAEAEQAZggAhgCQAmgCAWAUQAQAOABAOIgBAHIABACQABARgFAsQgEAcgNANIAAgaQgBgWgTgLIgDgBQACAZgBAaQgDAhgIAMIgEANQgHAdgMAPIgGAIIgDADQgKAOgVACIACAFQhEgBhAgOg");
	this.shape_12.setTransform(20.9,32.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#758A51").s().p("AhVCuQgPgSgOgZQhBhugkiMQBPAfBGgFQAXgBATgFQABA4AQAuIAJAgQAPArALAMQAIAJAGAEIAEgFIgSg9QAig1ANg6QAPhAAGg9IgLgLQAAgKAMAFQAOAGAfAbIA/A3QALgBAAAMQABAFgCAGQgDAIABACIgIABIgCgBIgIgIQgBBbgxBeQgxBghLAgQgUAIgRgCIgBACQgjgEghgog");
	this.shape_13.setTransform(31.8,84.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#526139").s().p("AhqA6QgjgUgZgVIgCABIgBgEQgBgSAGgrIACgLQAOAOATAIQAIAEAJADQAVARAagBIADgBQBuAZBvgiIAGgJIgaACIgTACQANgJAKgPIACAAQAMAGAFAGIAFAIQADAGAAAHQACAkgUAdIgQARQAAAGgMAJQgQALgXACIgKgBIgVACIgXABQhJAAhAgjgAighGIAGgWIABAAQAHARAIAOIgWgJg");
	this.shape_14.setTransform(19.8,63.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3E4E6").s().p("Ag9EEIgagQQglgUgCgaIgKgjQgKgkgBgMIABhKIgKheQgBgMgHgaQgHgZgBgNQAAgIgKgoQgCgcAEgVQAHgsAcgCQAygDARBuIAHBuIgGAFQgCARgIAeIAAADIAGAAQAUgcAUgMQAWgYATgBQA5gEAZAYIAIAIQgSAHgSAbQgGADgBAFIgIANIABADQAFACAEADQAYggAigCQAmgDAWATQAQAPABANIgBAIIABACQABARgFArQgDAcgNANQABgNgBgMQgBgWgTgLIgDgCQACAagCAZQgCAhgIAMIgDAOQgHAdgMAPIgHAIIgCADQgKAOgUADIABAEIgFAAQhBAAg+gNg");
	this.shape_15.setTransform(20.1,33);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#758A51").s().p("AhWCuQgPgSgOgZQhAhugjiMQBPAfBGgFQAWgBATgFQABA4AQAuIAIAfQAQAsAKALQAJAJAGAEIAEgEIgSg+QAhg0ANg6QAOhAAGg9IgKgLQAAgKAMAFQANAGAgAbIA/A3QALgBAAAMQAAAFgCAGQgCAIAAACIgIABIgBgBIgIgIQgBBbgxBeQgyBghLAgQgTAIgRgBIgBAAQgjgDghgog");
	this.shape_16.setTransform(31.9,84.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#526139").s().p("AhqA6QgjgUgZgVIgCABIgBgEQgBgSAGgrIADgLQAOAOATAIQAIAEAIADQAVARAbgBIADgBQBtAZBvgiIAGgJIgZACIgTACQAMgJAKgPIACAAQANAGAFAGQACADACAFQADAGAAAHQACAkgUAdIgQARQAAAGgNAJQgPALgYACIgJgBIgWACIgXABQhJAAg/gjgAifhGQADgNADgJIABAAQAHARAHAOIgVgJg");
	this.shape_17.setTransform(20.1,63.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("Ag/EFIgagQQglgVgBgaIgKgiQgKglgBgMIAChKIgKheQgBgMgHgaQgHgZAAgNIgLgwQgBgcAEgVQAHgsAcgCQAygDAQBuIAHBuIgGAFQgCARgIAeIgBADIAHAAQATgcAVgMQAWgYATgBQA4gEAaAYQADACAFAGQgSAHgTAbQgFADgBAFIgJANIABADQAFACAEADQAZggAhgCQAmgDAWATQAQAPABANQAAAEgBAEIABACQABARgFArQgDAcgNAOIAAgaQgBgWgTgLIgDgCQABAagBAaQgDAhgIAMIgDANQgHAdgMAPIgHAIIgCAEQgKAOgVACQAAABAAAAQAAABAAAAQABABAAABQAAAAABABIgFAAQhAAAg/gNg");
	this.shape_18.setTransform(20.6,32.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#758A51").s().p("AhVCuQgPgSgOgZQhBhugkiMQBPAfBGgFQAXgBATgFQABA4AQAuIAIAgQAQArALAMQAIAJAGAEIAEgFIgSg9QAig1ANg6QAPhAAGg9IgLgLQAAgKAMAFQAOAGAfAbIA/A3QALgBAAAMQABAFgCAGQgDAIABACIgIABIgCgBIgIgIQgBBbgxBeQgxBghLAgQgUAIgRgCIgBACQgjgEghgog");
	this.shape_19.setTransform(31.8,84.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#526139").s().p("AhpA6QgkgUgYgVIgDABIgBgEQgBgSAGgrIADgLQAOAOASAIIARAHQAVARAbgBIADgBQBtAZBvgiIAGgJIgaACIgTACQANgJAKgPIACAAQAMAGAGAGQACADACAFQADAGAAAHQADAkgVAdQgHAJgIAIQgBAGgMAJQgQALgXACIgKgBIgVACIgXABQhJAAg/gjgAighGIAGgWIACAAQAGARAIAOIgWgJg");
	this.shape_20.setTransform(19.8,63.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3E4E6").s().p("Ag9EEIgbgQQgkgUgCgaIgKgjQgKglgBgLIABhKIgLheQAAgMgHgaQgIgZAAgNQgBgIgKgoQgBgcADgVQAIgsAcgCQAxgDARBuIAIBuIgGAFQgCARgIAeIgBADIAHAAQATgcAUgMQAWgYAUgBQA4gEAaAYQADACAFAGQgSAHgTAbQgFADgBAFIgIANIABADQAFACADADQAZggAhgCQAmgDAWATQAQAPABANIAAAIIABACQABARgFArQgDAcgNANQABgNgBgNQgCgVgSgLIgEgCQACAZgBAaQgCAhgIAMIgDAOQgIAdgLAPIgHAIIgDADQgJAOgVADIABAEIgEAAQhBAAg+gNg");
	this.shape_21.setTransform(20.1,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape_6}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).wait(1));

	// Layer 1
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AASIZQgVgGglgaQgIgGgHgIQgsgtgwh/QgbhIgHgtIAAgCQgEgGAAgCQAAgIgGgeIAAgGQgZgMgNgMQgFgBgGgGIgGgUQgIgGAAgIQgBgjAKgrQAHggAMgJIABgEIAAgFQACAAADACQgJgggEgjQgChpgNhfIgNhiIAHhDQAPg+AxgBQA8gCAdBTIAQBTQgBAdgEAcIAAAHQAVgPASgBQA1gBAsAiQAXARAJAQQAPADAMAIIAHAAQAaAKANAYQAKAUABAVQABAigEAfQgLA+giABIgIgBQgCAQgFAQQgFAQgGAOQAjAFABAuQABAwgXAgQgUAbglAMQAEAkASBKIANgXQAQglAAgFQgBgcAShDQAShEANgPQgBAMAAAMQANAGAgAaIA/A3QALAAAAAMQAAAEgCAGQgCAIAAACIgIABIgBgBQABAsgGApQgRBxhJBYQguA4hKADIgBAAQgHAAgIgDgAjWgXIABAAIgBgBg");
	this.shape_22.setTransform(27.2,55.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAoIVIAAABQgYgGgkgZQg0gig/iUQgehGgIgtIAAgBQgEgGAAgDIgIglIAAgGQgZgLgOgMQgFAAgHgGIgGgUQgIgGgBgIQgCgjAIgrQAGggALgKIABgEIAAgFQACAAADACQgKgggFgjQgHhpgQhdIgRhiIAEhDQANg/AxgDQA7gEAgBSIAUBSQAAAdgCAdIAAAGQAUgQASgBQA2gEArAhQAYAQAKAPQAPACANAIIAHgBQAaAKAOAXQALAUABAUQADAjgDAfQgJA/ghACQgEAAgEgBQgCAQgEAQQgEATgGAMQAjAEADAuQADAvgWAhQgTAcgkANQAGAmAWBNQAPgYACgFQAPgkAAgGQAAgbAShDQARhFAOgOQgCALAAAMQAOAGAfAbIA/A3QALgBAAAMQABAFgCAGQgDAIABACIgIABIgCgBQACArgHAqQgQBwhKBZQgtA4hLACIgBAAIgJgBgAjXgRIABAAIgBgCg");
	this.shape_23.setTransform(25.6,55.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AghH4Qgzgjg7iUQgchHgIgtIAAgCQgEgGAAgCQAAgIgHgeIAAgFQgZgMgNgMQgFAAgGgGIgGgUQgIgGAAgIQgCgjAJgrQAHggALgJIABgEIAAgFQACAAADACQgKgggEgjQgEhpgOheIgOhiIAFhDQAOg/AxgCQA8gDAeBRIASBTQgBAdgDAcIAAAHQAUgQASgBQA3gDArAhQAXARAKAQQAPACAMAIIAHAAQAaAJANAYQALATABAVQACAjgEAfQgKA+giACQgDAAgFgBQgCAQgEAQQgFATgGALQAjAEACAuQACAwgXAgQgUAcgkANQAFAlAUBLQAOgXABgEQAQgkAAgGQgBgbAShDQAShFANgOQgBALAAAMQANAGAgAbIA/A3QALgBAAAMQAAAFgCAGQgCAIAAACIgIABIgBgBQABArgGAqQgRBwhJBZQguA4hKACQgGAAgJgCIAAADQgYgHgjgZgAjYgTIABABIAAgCg");
	this.shape_24.setTransform(26.5,55.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AggH2QgHgGgIgHIABgCQgrgtgyh6QgdhHgHgtIgBgCQgEgFAAgDQAAgIgHgeIAAgFQgZgMgNgMQgFAAgHgGIgGgUQgIgGAAgIQgCgjAJgrQAGggAMgJIAAgEIAAgFIAGABQgKgggFgjQgFhpgOheIgPhiIAEhDQAPg+AxgDQA7gDAfBSIASBTQgBAdgCAcIAAAHQAUgQASgBQA3gDArAhQAXARAKAQQAPACAMAIIAHgBQAaAKANAYQALATABAVQADAjgEAfQgKA+ghACIgIgBQgCAQgEAQQgFASgGANQAjAEACAuQADAwgXAgQgUAbgkANQAFAlAUBLIAOgYQAPglAAgFQAAgcAShDQARhEAOgPQgCAMAAAMQAOAGAfAaIA/A3QALAAAAAMQABAEgCAGQgDAIABACIgIABIgCgBQACAsgHApQgQBxhKBYQgtA4hLADIAAAAQgaAAgwgjgAjWgUIABAAIgBgBg");
	this.shape_25.setTransform(26.4,55.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAkIVIAAABQgYgGgkgYQgzgig+iUQgdhHgIgtIAAgBQgEgGAAgDIgIglQgBgDABgDQgZgLgNgMQgFAAgHgGIgGgUQgJgGAAgIQgCgjAJgrQAGggALgKIABgEIAAgFQACAAADACQgKgggFgiQgGhpgQheIgQhiIAFhDQANg/AxgDQA8gEAfBSIATBSQAAAdgDAdIAAAGQAUgQASgBQA3gEArAhQAYAQAKAQQAPACAMAHIAHAAQAaAJAOAYQALATABAVQACAigDAgQgJA+ghACQgEAAgFgBIgFAgQgFATgGAMQAjAEADAuQADAvgXAhQgTAcgkANQAFAmAWBLIAPgbQAQgkAAgGQgBgbAShDQAShFANgOQgBALAAAMQANAGAgAbIA/A3QALgBAAAMQAAAFgCAGQgCAIAAACIgIABIgBgBQABArgGAqQgRBwhJBZQguA4hKACIgBAAIgKgBgAjXgRIABAAIAAgCg");
	this.shape_26.setTransform(25.9,55.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAhIVIAAABQgYgGgkgZQgygig9iUQgdhGgIgtIgBgBQgDgGAAgDQgBgIgHgdIAAgGQgZgLgNgMQgFAAgHgGIgGgUQgIgGAAgIQgCgjAJgrQAGggALgKIABgEIAAgFQADAAADACQgLgggEgjQgFhpgPheIgQhhIAFhDQAOg/AxgDQA7gEAfBRIASBSQAAAegDAcIABAHQAUgQASgBQA2gEArAgQAXARAKAPQAPACANAIIAHgBQAZAKAOAXQALAUABAVQADAigEAfQgKA/ghACQgEAAgEgBQgCAQgEAQQgFATgGAMQAjAEACAuQADAvgWAhQgUAcgkANQAGAlAUBLIAOgaQAQgkAAgGQgBgbAShDQAShFANgOQgBALAAAMQANAGAgAbIA/A3QALgBAAAMQAAAFgCAGQgCAIAAACIgIABIgBgBQABArgGAqQgRBwhJBZQguA4hKACIgBAAIgKgBgAjWgRIABAAIgBgCg");
	this.shape_27.setTransform(26.2,55.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAkIVIAAABQgYgGgkgYQgzgig+iUQgdhHgIgtIgBgBQgDgGAAgDIgIglIAAgGQgZgLgOgMQgFAAgGgGIgGgUQgJgGAAgIQgCgjAIgrQAGggAMgKIAAgEIAAgFQADAAADACQgLgggEgiQgGhpgQheIgQhiIAEhDQAOg/AxgDQA7gEAgBSIASBSQAAAdgCAdIAAAGQAUgQASgBQA3gEArAhQAXAQAKAQQAPACANAHIAHAAQAZAJAOAYQALATACAVQACAigDAgQgJA+giACQgDAAgFgBQgCAQgEAQQgEATgGAMQAjAEACAuQAEAvgXAhQgTAcgkANQAFAmAWBLQAOgXABgEQAQgkAAgGQgBgbAShDQAShFANgOQgBALAAAMQANAGAgAbIA/A3QALgBAAAMQAAAFgCAGQgCAIAAACIgIABIgBgBQABArgGAqQgRBwhJBZQguA4hKACIgBAAIgKgBgAjXgRIABAAIgBgCg");
	this.shape_28.setTransform(25.9,55.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22}]}).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,1.2,52.5,108);


(lib.Symbol3copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AghgiIAkgUQAJApAdAaIhRApg");
	this.shape.setTransform(20.2,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AhOCeQgIgPgDgRQAbgRAXgVIAQgNIAKAeIAMg2IABgZIAAgVQgBgxgVg0IgVgtQASgLAOgGQAMgGAIgHIAWgTIAFgEQAFAHAEAHIAOAkIAIAZIAJAfQAMAsABAiQABATgEAWQgFAXgJAXQgKAagVAVQgUATgVAQIgWATIgcARQgTgPgJgWg");
	this.shape_1.setTransform(31.1,53.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AgtBNQgIgCgIgEQgOgLgMgaIgCgCIAAgEIAAgIQACgCAEAAQAIgBABAGIgCABQgGACABADIAAADIABgBIAAABQAEgDAJACIAFAAIACAAIAAAAIACgBIABgBIAEgBIgBAAIANgGIAkgVIAMgGQAagTALgSQAHgMACgKIAAgCIAAgEIAAgGIAPAVQAMASAGALIAFAKIgJAUIgCADIAAABQgFAIgKAJQgLALgNAKIgXAQQgSAKgQADIgbACIgCAAg");
	this.shape_2.setTransform(27.4,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AAbCWIgBAAIgEgCIgtggQgmgcgDgbQAAgKAHgEQALgHAVACQAoACANAgQgGAOgQABIgGAAQgFADgKABQgHABgMgFIgFgCQgCADABACIAEAFQASAIAYgBQAcgBAKgcQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgNgjgkgJQgUgBABgCQgPAAgKACQgCgEgFgDIgBgBIgHgIIgEgGIAAAAIgmgpIAAgBQgPgQgFgKIgBAAQgFgKAAgOIgBgBQAAgJAKgHQACANAJAOIAJAMQAfAwAoAnQACACADAAQADAAACgCIABAAIAFgCIgGgFQgVgWgjgyIgIgMQgbgqAEgPIABgDQAGgLAJgGQAEgDAFgCQAGgJAgArQgFAKADATIAAADQAEAnBEBHQACADADAAQADAAADgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQhOhdAGgVIAAAAIAAgKQAAgJADgFIAAgCQAEgFAHAAIABAAQAFgBAFABQAMABAKAMIAAAAQAQATApA6QAhApAQAcIAFAHIAAAAIAAACIAAAAIABACIAGAKIAAABIABAAIACAHQgBAHgFAJQgKAPgYARIgdATIgIAEIgBABQgKAFgLAEIgCACIgGgDg");
	this.shape_3.setTransform(17.7,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1ERIAXgNIAagSIAYgTIAYgVIAYgWIABgkQgDg1gWg3IgTgmIgVgCIgCAAQgKgBgLgIQgQgLgMgYQgDgMgCgMQgBgFAHgGIgIgGIgZgRQgtghgBghQgBgUAPgJIABAAIgDgBIgJgJIgBgCIAAgBIgDgFIgBAAIglgrQgQgRgGgMIgDgHIgCgGIAAgBIgDgQIAAgBQgCgTAWgNIABAAIABgBIACgJQABgHAEgGIADgFQAKgMANgHQAFgDAHADQANAEAWAUQAHAGAEAGQAGgEAIAAQAMgCAMADQANAFALAMQAPASApA8QAbAlARAaIACAEIAGAJIACAAQAOgEAaAnIAOAUQADAGACAHQAIAagRAYIgBABIATAtIAEAKIAFANQAFAMAFASIAHAbQAIAkACAkQAAAQgCAQQgCAcgIAaQgHAWgOAWQgOAUgRAPQgUASgVAPIgjAWIglAXIgnAUIglATIgFACg");
	this.shape_4.setTransform(22.3,39.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-0.4,39.2,80.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("Ag1AGIgGgRIBQgrQAKApAdAaIhRApQgWgTgKgdg");
	this.shape.setTransform(18.3,72.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AjUDJIAHg1IAkAEIAegGIAegIQAOgGAQgEIALAgIAEAJIALAPIALANIg0ASIgWAGIgVAFQgYAHgXAJQgOAEgNAHQgFgaAEgagAAtBlQgIgPgDgRQAbgSAXgUIAQgOIAKAfIAMg0IACgZIAAgVQgCgzgVg0IgVgtQASgLAOgGQAOgGAIgHIAWgTIAFgFQAFAHAEAIIAOAkIAIAZIAJAfQAMAsABAhQABAVgEAXQgFAXgJAVQgKAagVAVQgUASgVARIgYATIgcARQgTgQgJgVg");
	this.shape_1.setTransform(18.6,59.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AgtBNQgIgCgIgEQgOgLgMgaIgCgCIAAgEIAAgIQACgCAEAAQAIgBABAGIgCABQgGACABADIAAADIABgBIAAABQAEgDAJACIAFAAIACAAIAAAAIACgBIABgBIAEgBIgBAAIANgGIAkgVIAMgGQAagTALgSQAHgMACgKIAAgCIAAgEIAAgGIAPAVQAMASAGALIAFAKIgJAUIgCADIAAABQgFAIgKAJQgLALgNAKIgXAQQgSAKgQADIgbACIgCAAg");
	this.shape_2.setTransform(27.4,30);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AAbCWIgBAAIgEgCIgtggQgmgcgDgbQAAgKAHgEQALgHAVACQAoACANAgQgGAOgQABIgGAAQgFADgKABQgHABgMgFIgFgCQgCADABACIAEAFQASAIAYgBQAcgBAKgcQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQgNgjgkgJQgUgBABgCQgPAAgKACQgCgEgFgDIgBgBIgHgIIgEgGIAAAAIgmgpIAAgBQgPgQgFgKIgBAAQgFgKAAgOIgBgBQAAgJAKgHQACANAJAOIAJAMQAfAwAoAnQACACADAAQADAAACgCIABAAIAFgCIgGgFQgVgWgjgyIgIgMQgbgqAEgPIABgDQAGgLAJgGQAEgDAFgCQAGgJAgArQgFAKADATIAAADQAEAnBEBHQACADADAAQADAAADgDQAAAAAAAAQABAAAAAAQAAAAABAAQAAABABAAQhOhdAGgVIAAAAIAAgKQAAgJADgFIAAgCQAEgFAHAAIABAAQAFgBAFABQAMABAKAMIAAAAQAQATApA6QAhApAQAcIAFAHIAAAAIAAACIAAAAIABACIAGAKIAAABIABAAIACAHQgBAHgFAJQgKAPgYARIgdATIgIAEIgBABQgKAFgLAEIgCACIgGgDg");
	this.shape_3.setTransform(17.7,16.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(12));

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjcGmQgFgaAEgaIAHg1IAAgFIBcgXIAfgKIAfgNIAdgNIAdgRIAYgRIAagTIAYgVIAYgXIABgkQgDg1gWg3IgTgmIgVgBIgCAAQgMgCgLgHQgOgMgMgYQgDgLgCgMQgBgGAHgGIgIgFIgZgRQgtghgBghQgBgVAPgJIABAAIgDgBIgJgJIgBgCIAAgBIgDgEIgBgBIglgrQgQgRgGgMIgDgHIgCgGIAAgBIgDgPIAAgCQgCgSAWgNIABgBIABAAIACgKQABgHAEgFIADgFQAKgMANgHQAFgDAHACQANAEAWAUQAHAGAEAHQAGgEAIgBQAMgBAMADQANAFAJALQAPATArA7QAbAlARAaIACAEIAGAKIACgBQAOgDAaAmIAOAUQADAGACAHQAIAbgRAXIgBABIATAtIAEAKIAFAOQAFAOAFARIAHAZQAIAkACAkQAAAQgCAQQgCAdgIAZQgHAXgOAVQgOAVgRAPQgUARgVAPIgjAWIglAYIgpAUIgjASQghAPgkALIgBgBIh3AZg");
	this.shape_4.setTransform(19.5,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.8,-0.4,44.8,85.5);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("Ag6CXQAIgDAHgGQAHgFAEgFIACgCQAcgCAMgtIAEgUQAJgaAKgoIAAgYIAEgRIAGgbQACgEACAAQAGggABgSIAEADQAEAIACAKQADAHAAAMIgDATQgDA4gPA0IgDAJQgFAcgJAYQgXA+gsAWQgOAPgLACQAFgXAAgegAhCgYIAEgHIABANIAFgPQgDgGAAgEQAAgOALglIgGAJIALgtIAGgFIADgcQACgSAFgQQADAOgBAGIgDAXQAbhMAAArIgCAQQgGADgEAOQAAATgBARIgDARIACgCQgBAIgKAqIgFAWIgFAOIgIATIAAgBQgEAHgEAFIADAEIgGAGQgKgXgBgYg");
	this.shape.setTransform(6.7,20.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,40.9);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AAtH3QAGgHAEgIIABgFQAaAJAeABIAGgDIgBgBIAFgEQgRAEgOAAIgIAAQgKgCgIgEIgJgBIADgPQAKADAMAAQAZAAASgIQABAdgGAXIgCAAQgnAAghgLgAAgH4IABgEIgYgNQghgWgHgRIgBgDIACgIIABgCIgEgMIgLgNIAHgwQgGAGgIAGIgFAjQgJgNgIgOIgBgCIAHgEIgBgBIADAAIAAgBIgGgMIgCAAIgEgMQgIgVgFgWIgFgTIgFgfIgMgCIgBgJIAMAAQgCgTgBgSIABgGIgNgJQgIgDgGgGIgDABIAAgEIgBgEQgOgQAAgNIABgMIgBgLQAAgKAFgdIABgOIgKgKIADgJIABgIIACAAIAEgMQAFgKARgIIAAgBQgCgKgEgMIgHgRIAAgOIAAgNQgEACgDAGIgCgIQgCgLABgVQAAgWgFgUQgBgHgDgDQgHg4gNg9Ighh+QgGgYAEgqQAFg9AegHQAwgKAqBHQAbAsAHAmQAIA7ADA6IABAeIABAAQARgRAIgFQAfgWArAZQAcARAIAOIACABIAFADIAKgCIAFAFQAKACANAGQAWAKADAKQAeAZAGAcQAGAagGAdQgFAXgLAQQgCAIgEAGQgHAggTADIgHACIgEAQQgHAXgQARQACACABAFQABAFgFALQgXAPggAHQgwAKgxgMIgHgBQgRgIgPgMQgsgjgGgeIgBgEIAAgCQgJAIgGAZIgBAGIAKAKQgDAUAAATIgBAMIAJALQAOAKAXALQAdANAWAIIADADQAPAEAMABIAdgBQgZAHgVACIABACIgJgBIgJgBIAXAIIACADIAJACIAsADQAWgCAUgKQAQgHASgNQAEABABACQgOAQgOAJIAPgGQAJgDAHgFQAQgeACgrQAAgNgEgOIgBAAQgEAAgDgFQgDgDAAgCQABgGAFgDIgBgEQABgFABgBIAEAAQADADADAGQAFABAAAIIgBADIAEAMIACAKQgFAQgCATIgDAbIgGAFIgMAtIgBACIgFABQgCAAgDgDIgCADIgHAHIgBADQAAAIAEACQAGACgBAEIgIAsIABADIAIgPQABAaAKAXIgFAEIAEAKIAAAFIADAGQAIAMAAAIQAAAEgQAGIgKgCQgDgCAAgCIgDAEQgBgMgGgVIgBgDQgGgIABgFIACgCIgHgYIAAgQQgGgSAAgEIABgOIgCgDIABgDIADgFIACgJIgNABIgUgCIAAADQgFgBgDABIABgDIgfgFIgLAAIgDgBIAAABIgCgBIgIgBIgBAAQgcgFgegKIAEARIABAAIABAFIABAMQgMgDgMAAIAMACIAAAMIAMADIAAADIAAAAIAJAgIAFARIABADIALAaIAKAZIAFALIAAAAQAAAJANARIgEAGIAKALQAQATARAIIAAAAQAHAIAIAFIAAAEIAFACIgDAPIgDgBIAAABIADABIgBAFIgKAPIgHgCgAhDDlIABAEIABAAIgCgFIAAABgAh7CcIANAIIgJgHIgEgCgAiinUQgEAGgEAMQgDAMgBAWQgBALAMAxIACAFQgBASAJAaIADAJQAAAjADAUQACARAFALQAHAzAJAbIAAAGIABAzQAFAEACAGQABAHgBAOQAAAPACALQARAXABADQADANAGAMQANAcAbAVIAFACQAqAWA2gNQAOgCALgEIAIgVQAGgIAGgNQAJgVAFgeQAMg9gCgXIABACIACgFQAEACAFAIQADAHAAACIAMA5QAXgLABgmQAAgXgIgYIgCgHIAAgKIgEgKQgDgIgZgPQgCgHACABIAFgCIgGAAQgVAAgcAWQgHAFgHAHIgDgBIgEgEIgLAQQgKAOgGABQgEABgFgDQgFgDgBgDQgEgTAVgWQAUgVAdgNIgLgNQgRgIgTgBQgQgCgUAFQgTAEgTAWQAAA4gMACQgCABgFgCQgEgEgBgFIAAgDIgCADIgBAEIgIgiIAAgIIAHgKIACgDIAAgIQgDALgGACIgBAAIgDg8IgDghIABgIQACgsgJgjQADgJABgMQABgPgOgeQgTgpgegBQgKAAgHAHIgBAAgAg9kIIAAAAIAAgPIAAAPgABwGPIAKACIgEABQgDAAgDgDgAgSFwIgEgJIABAAIAGAKg");
	this.shape.setTransform(21,51.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,103);


(lib.CUP_FRONTDOWN_brow_02 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#587D74").s().p("AB6A5IgOgFIgIgEIgggLQgKgEgZgEQgogGg3AAQgzAAgJADIgNACIgBgBQgEgEgEgcQgEgfABgHIAAgFIABAAIAAgDQACgEAJACQAYgIBvAJQBpAKAaAQQAQAHABAHQACALgTA5QgDACgCAAIgEgBg");
	this.shape.setTransform(-0.1,-0.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AB3BHQgTgIgagIQgegJgjgEQghgFgoAAIgCAAIgIAAIgFAAQgkABgRADQgKAAgHgCIgEAAIAAgCIgFgFQgCgEgFgaQgCgLAAgbIABgSQADgMAJgCIAAAAQAlgEAlAAQA3gBA1AGQA4AIA2AOQAXAIAFAIQAEgDgHAfIgIAnIgEAMQgGARgHAFIAAAAIgCABIgHAAIgBAAQgFAAgEgCg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-7.4,33.6,14.8);


(lib.CUP_FRONTDOWN_brow_01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#587D74").s().p("AiCA4QgTg5ACgLQABgHAQgHQAagQBpgKQBvgKAYAJQAJgCACAEIAAADIABAAIAAAFQABAHgEAfQgEAcgEAEIgBABIgNgCQgJgDgzAAQg3AAgoAGQgZAEgKAEIggALIgIAEQgIACgGADIgEABQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAgBgBAAg");
	this.shape.setTransform(1.2,0.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiHBJIgCgBIAAAAQgHgFgGgRIgEgMIgIgnQgHgfAEADQAFgIAXgIQA2gOA4gIQA1gGA3ABQAlAAAlAEQAJACADAMIABASQAAAbgCALQgFAagCAEIgFAFIAAACIgEAAQgHACgKAAQgRgDgkgBIgFAAIgIAAIgCAAQgoAAghAFQgjAEgeAJQgaAIgTAIQgEACgGAAIgHAAg");
	this.shape_1.setTransform(1,0.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.7,-7.1,33.6,14.8);


(lib.CUP_FRONTDOWN_body = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#313D40").s().p("AviBQQgLgDgKgFIgFgDIACABIACABIAAgCIAAABQAFgRARgOQAugnCGgaIAEgBICngZIANgBIAJgBICMgMIAFAAQDBgOEGgDQAIgBAIABIAFAAQFEADDeAUQCdANBpAVQBxAWAzAeQAgATAIAYQAAAAAAgBQAAAAABAAQABgBAAAAQABAAABAAIAAAAIACgBIADgBIgCACQgQAJgUABIADgCIgBgCQgEgHgNgMQgDgFgJgFQgRgKgmgLQhxgjjxgUQjdgTlGgEIgFAAIgQAAQjeADisAKIg9AEQksAUiAApQgpANgWAPIgBgCIABACQgQAKgGAMQgCABAFAFIAAABIAPAEQgMAAgLgEg");
	this.shape.setTransform(-2.7,-81.4);

	// Layer 6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#748F94").s().p("AkGA/IgDgBIgCAAIgPgFIgBAAQgEgGACAAQAGgMAPgKIgBgDIACACQAWgPAogMQCBgpEqgVIA9gEIjLAXQhwAOgfAJIiCApQgPAEglAeIgLAJIgBABIgJgDg");
	this.shape_1.setTransform(-73,-79.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F25").s().p("AgRgrQAhgOAbgQIgEAUIgCAJIgBABIABgCIgQAvIAHgPIAHgXIAAgCIgCAKIgKA0IgBADIgBAHIgBADIgBAHIgBAFIg8AZIAZh1g");
	this.shape_2.setTransform(77.9,55.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#596743").s().p("Am7EUQAAgFACgEIAfAHQAGgCAJAFQAVAAAjADQANgBAPACQAJgBAQAAQASgBATAAQA7gIAggCIAEgCIAAgIIABAEIgBgHIABgUIAUgBQgGAmgHAKIgBAFQgMAHgZAFQgtAJhOAAQiHAAgBghgAGVCeIAKgsQAigPAegPQglCxABARQAAABAAAAQgBABAAAAQAAABABAAQAAABAAABQgJACgIADIgzAQQADgUAbh+gAowgrIAOgWIABgCIAOgUIAQgTQAPgSAjgcIABgBQAGgGAHgFIAwgdIAqACQgGANgoAfIg3AnQgKAJgmAtQgZAegKAAQgNAAgCgTgAHAgnQAGggAPg2IAVhWIAEgtIACgPIAkgTIAGgEIAXgOIgWBjIgVBiIgJAxQgdANggAMIAAgCgAhqgnQgLAAghgiIgmgpIg2gjQgvgfAAgGIABgFIATgBQAeAJAYATIADABIAoAlQASAQAaAjQAMARAKAQIACADIgCAAg");
	this.shape_3.setTransform(31.7,53.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414B32").s().p("Ag1A5IgBgGQAKgYAAgDQAAgLgOgLQAsgRAXgNIANgIIAFgDIACgBIgBABIATgKQgCgBACAAQADgDADgCIAFgCIABAOIAAAGQgBAQgJANIgxAgIgEAEQgaAPgWAPIgBgBg");
	this.shape_4.setTransform(87.1,16.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83A4A8").s().p("ANdE9QAiiPAHgyIAIg1QAAgVAPg5IBAlVQAAACAAABQAAABABgBQAAAAAAgBQAAgBAAgDQgiANg3AQQhnAeg4AKQg/AKiPAQQisAThFAAQgdAAgTgBQgRAdg+BOQhcBxgiAAQgSAAgKgDQAHgCAHgEIACgBQAVgMAJgLQAIgMAug5QAsg3BOhTQDqgODQgiQDbglBogaIAugSIABgCIAXgLQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQgFAOgDARQgDAGgBAIIgDAOIgGAeQgEAOgCATQgEAWgDAeQgDAHABAIQgCAIgBAKIgDAWQgGAcgDAiIgHAxIgCAPQgCACgFAYQgGAWgRBzQgQBbgBAMQgDAFgGAhQgCADAAAGIgEAQIgFAeIAAAEQgCAAgCANIgBAKIgFAOIgUAJIhLAiQAJgZAOg9gANjGCIACAAIgBgCIgBACgAoVkDQhWgOiFgXQjxgkhFguIgIgYQAfAUAnAMQBjAXDdAjQDJAhDiARIASATIgHACQgXAIgsAAQhAAAiggag");
	this.shape_5.setTransform(-2.8,-25.9);

	// Layer 4
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#95AEB0").s().p("AhnBMIgbgFIAAgFIgBgPQgCgCAEgBIgCAAIgFguQgHgWAEgzIAAAHIAAgOQgBgGACAAQAYAHBXADIARABIAGAAQBNAAA/gFIACAEQACAIABANQABASgCAbIgEA1IAAAGIgBAIIgBALQgBgBgBAAQgBAAAAABQgBAAAAAAQAAABAAAAQgNAAgIAFQg5AJg0AAQg0AAgzgJgAAAA8IAHgBIAbgBIAGAAIABAAQALACAggDIAKgBIAPgCQAJgGgBg/IgBgIIgBgYIgBgCQgKgHhNACIgHAAIgPAAIgBAAQhagDgPAJIgBgDIgEgFIgBAAQgDAAABAIQgFAhACAlQgBAAAEAQQgCAFAEAEIAEAEIACACQAAgBABAAQAAgBABAAQAAAAABAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAUAEAsAFIAJABIAMgBIALABgABjAKQgSgEgZAAIgTAAIgOABQg9gEAEgFQgDgGAHACIAGABQAMACAxgBIATAAIAegBQAGgCAGABQAAAFABAEIACAIIgCgBg");
	this.shape_6.setTransform(1,70.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("AAIFoIgMAAQhWgChWgEQibgLiVgjQiCgeiAgpIgRgGIAAgEQgBgSgoiwQCHBHD0AuQCjAdB9AIIADAbIAPACIAgAHQAFgDAJAGQAWAAAiACQALAAAPABQAKgBAPABQATgCASABQA8gIAfgCIAFgCIAAgIIAAADIAAgHIABgTIATgCQBrgKCEgXQC9gjB6g0QAjgPAdgQQglCxABASQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQgIACgIAEIgzAQQhlAfhnAYQiUAjibALQheAEhcACIgFAAgAF2CLIACgVQAAgZgFgmIgDgOIAagGIAogJQgGAMAAAQQAAAJgDAaQgHAaABAJIAAAIIACAEQgZAEgYAFQgBgEADgCgAmWCIIACgDIABgJIgGgjQgGgaABgJQgCgQgFgMIAnAKQANABAOAEQgCAFAAAJQgFAmABAYQABAJACANQACACAAAEIgygJgAKHgHIAAgTQAZgJAXgGQgHAOgIAbQgCAEgIBCQgBACABADQgTAFgSAHQAKgLAEhTgAqRBLIAAgFIgMhGIgPgpIAwAPIABATQAFBTAMALQgUgIgTgEgAhLBUQgCgCACABIAAABgAnKgDQhdgVhPgTQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQhzghhSgjIgLgxIgahtIgWhYIADACIAaAQQAQAKDLBmIAfAPIAvATIBIAaIAAAAIAUAJQARAJA3AVQA3ATA5AYIASAGIAKADIAIADQACACAEAAIABgBIAEABIAMgVIANgWIABgCIAPgVIAQgSQAOgSAjgcIACgBQAFgGAIgFIAvgdIArACIAOABQgDANACAWIAAACQAAAbAEBDIABAXIACAXQACAYgDAtIACATIhzgEIgFABQgFADgBAIQAAAIADAHQiXgOivgkgACyAgQgFgJgCAAIgBAAQgLgBgFACIh+ACIgRgBIgDgpIgDhFIgBgIIAAgPIgEhJIgBgZIgDgjIAIgBIA3gBQAeAIAYATIADACIApAlQARAPAbAkQAMAQAKAQIACAEIAMAVIAAABIAEAKIAEgBIAggJQAngMAlgOQAbgKAbgLQBYgnBYgtQAvgYAwgWICVhNIAjgTIAHgFIAWgNIgWBjIgUBhIgJAyQgdAMghANQg7AVhKAWQgEgBgBADQhPAUhbAUIg/ALIgHABIgLADIi9AdIgEABIgNACIgDAAQgBgJgBgDgABAg9QgjADAGAnIAIAOQAPAMAXgDQAOgCAGgLQADgJgBgKQgFghggAAIgCAAgAA5i+QgjACAGAoIAJAOQAOANAXgDQAOgBAGgOQADgJgCgJQgEghggAAIgCAAg");
	this.shape_7.setTransform(-1.3,58.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#526139").s().p("AA8DiQgHgGgBgFQgDgSASADQAQAEACANQAFAMgSACIgBAAQgEAAgHgFgAD7CVIgCgEQgKgUgUgfQgbgngXgVIgQgNQgSgNgZgKIAEgCQArAAAqgDQA9gFA9gNQBfgVBhgSQAlgHAkgJQAogLAmgNIAwgSIA/gaIAygUIABgBQAtgTAZgNIAMgIIAFgDIACgBIAAABIASgKQgBgBACAAQACgDAEgCIAFgCIAAAOIABAGQgBAQgKANIgxAiIgFAEQgaAPgXAPIgTAMQgeAQg7AiIgxAaIilBRQhXAshcAhQgdAKgeAGIgMACIgIABIgBgDgAkICIIg9gWIgZgJIgSgIIAAAAIgkgOIg2gVQgYgKgIgCIgJgDIgSgGIgwgUQgNgIgNgDQg0gUhLgpQg8gigfgQQgfgVgmgVIgVgOIgigXQgLgNgBgRIABgKIAAgDIAAgHQAGACAGAFQAAAAAAABIAIAEIAHAEIAFADQAEACADAFIAGADQBPAlC8BGIA/AUQAmALAvALIAAgCQAWAHBTAQIACAAIAGABQBJANB6ALIA0AEIgsAmIAAABIgUATQgXAYgPASQgLANgGAKQgHALgCAIIgMgEgAA1BgQgHgGgBgFQgDgRASACQAQAEACAOQAFALgSACIgBABQgEAAgHgGg");
	this.shape_8.setTransform(-1.5,33.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9CC5C9").s().p("AgRC0IgEgHIgRgZIgDgGIgPgVIgRgYQgGgKgPgLQgPgKgWgKQgWgLgugCIgDAAIgCgBIh5gCQlogRicgjIgCgBIhagXIgVgGIAAABIgKgDIgDgBIgBAAIgQgFIAAAAQgFgGACAAQAHgMAPgKIgBgDIABACQAWgPApgMQCAgrEtgVIA8gEQCsgKDfgDIAPAAIAEABQFHAEDdASQDxAUBxAlQAmAMARAKQAJAFAEAEQAMAMAEAIIABACIgDABQgVAHh8AiQieAnljANIiOAEIABACIgHAAIgBAAQhFAAgWAZIgGAGQgTAXgZArIgFAIQgHANgHAIQgNAQgIAAQgIAAgGgIg");
	this.shape_9.setTransform(-2.9,-68.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3E4E6").s().p("AASHqIgFAAIgLAAIgCAAIgDAAIgTAAIgQgBIAAAAIgmgBIhBgGQhRgJhUgMQh2gRgagIIgugMQhcgXgpgMQgqgNhlgrIhzgyIgHgEQgJgCgHgFIgIglIgBgGIgFgWIgDgRIgBgDIAAAAIAAgDIgCgHIgKgmIgUhnQgWhxgHgYIgGgaQgDgJAAgGQgGgbgDgWQgEghgGgcIgFgXIgCgSIgEgQQgEgcgEgXQgDgTgEgOIgHgeIgEgPIgEgMIgEgPIgIgZQAfAVAnAMQBjAWDdAkQDJAhDiARIASATQBFBFAnAvQAtA1AWAVQAYAUAXAJIAEACQAHACAEAAIALgBIABAAQAHgBAHgEIACgBQAVgMAJgMQAIgLAug5QAsg3BOhUQDqgODQghQDbglBogbIAugSIABgBIAXgLQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQgFAPgDARQgDAFgBAIIgDAPIgGAeQgEANgCAUQgEAWgDAdQgDAHABAIQgCAJgBAJIgDAXQgGAcgDAiIgHAxIgCAOQgCADgFAYQgGAYgRBxQgQBbgBALQgDAGgGAgQgCAEAAAGIgEAQIgFAeIAAAEQgCAAgCANIgBAKIgFAOIgUAJIhLAiIglARIgfANQghASglAKQhiAehgAYQhgAXhhAOQg/AKhAAGIhOAHIhPACIgLAAgAgikLIAAgBQgRgPgsg4IgCgCIgBgBIgQgYQgqg8gHgIIgBgCQAJAAAKACIAKAFQAQAHAKALQAJAJAbAkIAMARIAKAMQAeAnAPAEQAPAFAVgfIAMgQIATgdIAOgTQAXgkAKgIIAGgEQAKgEATAAIhABeIgBABIgDAEQg7BXgQAEIgCABQgPAAgRgWg");
	this.shape_10.setTransform(-2.8,-17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3CCCC").s().p("AvgBnQgLgDgKgFIgFgDIgFgBIgggOQgCgBAAAAQgBgBgBAAQAAAAAAAAQAAgBAAAAQgJgJAAgFQgBgEADgMQADgMAmgRQAngUA7gOQA5gRASgEQAQgFBfgTQBBgNDJgLQBigFCBgFQCIgFBdgCIAPgBIAEAAQBgACCUAGQC4AGB4AIQCKAJA0ALQBfATARAFQASAEA6ARQA6AOApATQAmASADAMIAEAQQgBAHgNAKIgaAKQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAABIgGABIAEgBIgDACQgPAJgVABIADgCIgBgCQgEgHgMgMQgEgFgJgFQgRgKgmgLQhxgljxgSQjdgTlHgEIgEAAIgPAAQjfADisAKIg8AEQktASiAArQgpANgWAPIgBgCIABACQgPAKgHAMQgCABAFAFIAAABIAQAEQgNAAgLgEgAv2BcIABABIAAgDQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAgAqBgdIANgBIABAAIgOABg");
	this.shape_11.setTransform(-2.9,-83.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D2F0F0").s().p("AgaDSIgVgNIgFgEIABAAQgEgDg5hAIhUhfIgQgSIgMgMQgCgBgDgDQgFgGgKgBIgKgBIgCAAQhwgIh/gPIiggWQh+gUhfgTQiXgjglgdIgMgLIgHgIIAAAAQgGgJgCgIIAAgBIAAgBQgCgHAAgHIABgFIAHAGIABABIACACIATANQAjARA+ARQDXA8IRAYIgBABIATADQAPAQAoAzIAVAYIANAPQBEBXAUANQASANABgEIAAABQAMASBBhVIABgBIAJgNIACgCIAEgFIAagjIAUgZQAog1APgNIAMgCIAAgBQIegUDhhDQA+gSAkgRIAJgFIALgHIACgCQAEgFAFgDIAAAGQgBARgJAPIAAABIAAABIgBAAIgBACIAAAAQgEACgBADQgGAEgFAGQgnAfiXAlQhFAQhPAOQhqARh9ARQiBANhwAGIAAAAIgHABIgNADIgCABQgOAAgMALIgKAKQgQARgfAkQgtA0ghAtQgjAtgZAFIgNABQgOAAgMgIg");
	this.shape_12.setTransform(-2.8,-53.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1F26").s().p("AlQBxIgBgKQABgWAAgTQAAgigFgTQBkASBrAIQAAAsABAfIACAYQhqgIhjgNgAC0A7IAAgbIAWgCQBNgIBJgMQgEASABAiQAAATACAWIABAKQhMAKhPAGIgVACIAEhIgABMB5IgTAAIgIABQg4gFgkABIgTABIgFAAQgBAAgBgBQAAAAAAAAQAAgBAAAAQAAgBABAAQgEgQgDgmQgEgJADgEIAAAAIAIAAIATABIBvACIASAAIAdABQAKgBACAKIABAGIgqgBIgTgBQg9gBgOADQgNACgBAJQgDAEADANIAjAMQAXAFAcAAIATAAQAVgBAYgCIACgBQgCAEAAAIIgBAAQgIAAgIACQgNgCgQAAgApjA2IgBgBQAFgCAAgHIABgKQgDgygNgoQAQADARAFICWAmIAAAKQAJBOAJAWQhjgUhbgagAHCAAQgBgHACgDQAygOBigYQAPgFARgEQgLAogBAzIAAAKQABAHAFACIgBABQhaAahjATQAJgVAGhOgAsegKQgMgvgMg5IgGgTQAeASAsAQIA5AVQANBRAIAgQhDgXg3gWgALChPIA5gUIAKgEIgZB0Ig8AVQAHgfALhSgAM9hpIAAACIgCAHIgHAWIgHASg");
	this.shape_13.setTransform(-1.2,61.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1F25").s().p("AgRgrQAhgOAbgQIgEAUIgCAJIgBABIABgCIgQAvIAHgPIAHgXIAAgCIgCAKIgKA0IgBADIgBAHIgBADIgBAHIgBAFIg8AZIAZh1g");
	this.shape_14.setTransform(77.9,55.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(31,33,38,0.322)").s().p("ADRCcIAQgGQgJAGgEAAIgDAAgAlbBJIABgLIAAgCIAAAFIAAACIgBAGgAFcibIgBAEIgBAEIACgIg");
	this.shape_15.setTransform(49.3,70.1);

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAcPIIgCAAIgDAAIgbABQhzgBh0gMQiagTiYgmQhrgbhngqIgEAFIgFgMIgFgCIgBgDQg9kMghiEIgPg8Qgfh+gIgnIAAgBQgegQgKgTQgDgLgDghIgBgmQADgOAIgEQAAgCAFgCIAAAAIgThaIgWhXIgBgLQgMhFgGgdQgYhegLhIQgKhMgOg0IgOhEQgCgMgOgxQgDgIgDgGIgEgRIgCgIQgNgUgCgXQAAgNACgMIADgPIAIgPQADgFAFgDQAQgPALgMQA2gpCOgeQCbgiD2gRQDGgOECgDIAAAAQAHgBAIABQADgBACABQE9ADDmATQDCARCDAcQCPAeA4AqQAPALAJAJIAMAOIAIAPQABAGADAJQAAAMADANQgDAXgLAVIgCAIIgDAQQgFAGAAAJQgOAwgBANIgMBDQgOA1gGBLQgJBJgUBeQgGAdgJBEQgDAGABAGIgLAuIgJArIgIAjIAAABIgIAsIgBAFIALAPIADAAIAEAIIAAABIACAoQgCAggEALQgLASgcASIgiClIgNA7IgbB/IAAAEIgBAEIg2EKQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAIAAACIgFAKIgEgFIg1AUIAAAAQgKAHgEAAIgDgBQhEAZhFASQiYAmiYATQh1AMhzABIgdgBgAKAKeIADgBIgCAAgApXKdIADABIgBgBIgCAAgAugANIAAAAIAAgCIgCgHIACAJgAv3roIABABIAAgDQgBAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAgAqCtjIANgBIABAAIgOABg");
	this.shape_16.setTransform(-2.8,0);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-96.8,224.5,193.9);


(lib.CUP_FRONT_foot = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("AhjAYQgYgCgSgEQgFgBgPgJIgEgBIAAgDIAAgDIgCgLIABgCIADgGIABgCQAIAFASAEIAAAAIADABIABAAQAwAJBXgCIBWgBQAvgDAQgJIAFgDIAGgHQAFAGAAACQABAEgDASQgOACglAIIgfAHQgdAFgWAAIguABQgyAAgkgDg");
	this.shape.setTransform(2.7,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373D48").s().p("AhrAvQgSgCgagGIABgBQAThKBHgKQAggFArAJQArAJAnAVIAFADIAGAEIAMAFQAVAOAHALIACAEIACAGQgEACgeADIgqADQgbABgsAEIg6ABQgkAAgSgCg");
	this.shape_1.setTransform(2.6,-1.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AikBJQgGgEgBgFQgEgFgDgHQgCgFAAgJIABgHIABgBQABgHAGgHIAFgFQACgZAcgcQAMgNAQgIQAbgSAmgEQAOgDARAAQAyACA1AeIAQAJIACACIADABIAFADQARALALAKQARAPAEAKQAFAAAEAGQAGAIAAAIIAAAIIgBARIAAAAIgBAEIgCADQgCAGgEAAIgDAAIAAgBQgPAJgiAGQguAJglABIg2AAQh2AAgcgQg");
	this.shape_2.setTransform(2.5,0.9);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.6,-8,36.4,18);


(lib.CUP_34DOWN_pupil_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAUQgHgJAAgLQAAgKAHgIQAFgIAIAAQAIAAAHAIQAGAIAAAKQAAALgGAJQgHAHgIAAQgIAAgFgHg");
	this.shape.setTransform(6.3,-1.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4.2,-4.5,4.4,5.6);


(lib.CUP_34DOWN_pupil = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAYQgIgLAAgNQAAgNAIgKQAIgKAJAAQALAAAIAKQAHAKAAANQAAANgHALQgIAKgLAAQgJAAgIgKg");
	this.shape.setTransform(12.8,-0.4);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(10.2,-3.9,5.3,6.9);


(lib.CUP_34DOWN_handle = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92B9BB").s().p("AjgI1QgWgLgUACICVgeQBBgNALgHQA5gjASgSQAQgVATgTQBAhBA3jGQA2jDAAikQAAhagNgtQgIgbgXgxQgZhFgtgiQgwgkhKAAIAbgFQAagFAHAAQAUAAAeAQQAkATAfAhQBUBdAACgQAAF4h3DcQh5DejSAAQggAAgJgFg");
	this.shape.setTransform(2.5,0.3);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AjJI1QgVgLgVACQgRgJgEgHIgGgBQgKgCgKgpQAAgRAOgMQANgMATAAQARAAAPAIQAPAHAYAAQCtAABZi7QBYi2AAlJQAAhhgSgqQgfhIhcAAQgkAAg5AYQg5AZgVAAQgFAAgGgJQgGgIAAgFQAAgaAUgWQAmgpBxg7IAGADIABgBIADgBIAcgFQAagFAGAAQAUAAAeAQQAlATAeAhQBVBdAACgQAAF4h4DcQh5DejRAAQghAAgJgFg");
	this.shape_1.setTransform(0.2,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(15,16,18,0.2)").s().p("AAAAAQAKgCAJAAQgTACgSADQAGgDAMAAg");
	this.shape_2.setTransform(5,-59.3);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai5JSQgTABgEgBQghgFgegXQgsghAAg0QAAgNAIgMQAQgWAmAAQAFAAAZAFQAYAFAFAAQCRAABPhuQB6imAAmgIABgeQAAgfgIgYQgXhNhVAAQgtAAg/AWQg+AWgFAAQgLAAgJgIQgOgNAAgZQAAg0A5grQAdgVBzg+QAGgDAMgCQAMgCAJABQCBAHBDCBQA0BjAAB/QAAGdiMDdQh9DFjMAAQgMAAgUgDg");
	this.shape_3.setTransform(0.1,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.5,-59.6,63.4,119.6);


(lib.CUP_34DOWN_brow_02 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49675F").s().p("AAKAuIgBgBQgKgEgWgDIADgKIACgMQAAgMAFgqIABgIQAeAFAFAKIAAAAIAAABQADAMgOBBIgCgBg");
	this.shape.setTransform(12.9,0.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83A5A8").s().p("AAAAAIABAAIAAAAIgBAAg");
	this.shape_1.setTransform(-17,-3.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#587D74").s().p("ACMAxIgBAAQgMgFgVgDQgpgGhJACIg7ADIgHgBIgiACQgTAFgGAAIgBgBQgEgEgHgfQgIgeAAgGIAAgFIALgCQgEgCgGABIACgDQB6gOAcADIAJgBQBIABAkAFQAfAFAFAKIAAABIAAAAQADAMgOBBIgCgBg");

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiSBFIgEgQQgSg9gDgYIAAgBIAAgBIACgEIgBgDQAAgFAHgFIABgBIBVgQIABAAIAHAAQAlgEA5ACQCOAFAFAWQgDBZgQAPQACAHgJACIg4gIQg6gJgNAAIhjAKIgLACIgMACIgmAFQgCAAgDgDg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-7.1,34.6,14.4);


(lib.CUP_34DOWN_brow_01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49675F").s().p("AgXAoIAAgEQAAgGADgRIAEgVQgDgMgBgKQAAgHACgGIAEABQAVABAJAHIAIAwQAAAKgFAKQgFAJgCAAIgjgDg");
	this.shape.setTransform(10.3,0.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587D74").s().p("ABRAwIhRgLQhhgNgZADQgGgmAAgKQAAgNAFgJQAFgHADAAQBHAAAsAFIBVAKIAEABQAXABAKAHIAHAvQAAAKgFALQgFAJgCAAIgkgDg");
	this.shape_1.setTransform(-0.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(15,16,18,0.2)").s().p("AgJgEQALgBAIAKQgJgFgKgEg");
	this.shape_2.setTransform(11.6,-4.6);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAVA/QgxgLgzgDQgygCgDgCQgOgFAAgjIAEgdIAEgfQAAgTBFADQAZABBvAMQAWACAQAFQANgBAIAMIAHAHQAOARAAAmQAAASgMARQgLAQgJAAQgyAAgsgKg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.6,-7.2,29.5,14.7);


(lib.CUP_34DOWN_body2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C323C").s().p("AhtEeQAAgKAKgBQADAAAJACIAMABQAkgDAngWIAAADQgDALgCAQQgdAQgZADIgQABQgiAAAAgRgAgfCqQgCgDAAgEQABgIAegFQAOgDAMgFIgGAaQgSAHgRAAQgLAAgDgFgAhCAzQgGgCABgHQAAgHAEgBIAKAAQA/AAArgXIgFAWQgmAWgQAAQgsAAgMgEgAAKhnQgEgEAAgEQAAgCAggIQAcgHAOgJQgFAMgCAQQgWALgWAAQgNAAgGgFgAgfjiQgHgDAAgHIADgIIA+gNQAigIAOgJIAigbIABgBIgDAYIgBAHIgCAIIgHAEQgxAkgwAAQgWAAgJgDg");
	this.shape.setTransform(98.6,-28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313D40").s().p("AvEBKQgIgDgHgEIADABIgBgLIABgEQABgGAEgFQAFgHAIgGQApgdCAgZQDcgtF4gDQK1gJEdA6QB2AXArAhIgBABIABgBQAPANAGAOIACAIIAIgDIADgBIgCABQgNAHgTACIAAgBQgHgOgUgMQgTgNgggKQhMgYiMgRQj/gfnUAAQmQAAi/AcQiAATgvAJQgfAIg9AZIgDACQgIAFgMARIgGAJIAHACIACAAQgIAAgHgBg");
	this.shape_1.setTransform(9.2,-81.5);

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F25").s().p("AgcgWIAEgQIAOgGQAmgQAegTQgDAKgCAKIgYBmQgnATgvARIAdhlg");
	this.shape_2.setTransform(80.4,54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#596743").s().p("AHEE4QABgMAhh8IANg0QAygUAogXQgpCzgBARIABAEIgQAGIhPAagAoGEaQgcgHgOgHQgCACgFAAQgFAAgDgOQgCgDAAgEIABgGIAUAGIAKAEQAVAEAbADIAZADIAXADQBUALAmAAQAjAAANgLQAGgGABgNQADgGABgHIAAgBIAAgCIABADIAAABQACABAXACQgCAUgCAFQgIASgXAGIgGAEQgPAGg4AAQhiAAhBgPgAkzgsQgegxgHgIQgdgkhJglIAHgVIAdARQA1AdAxAzQANAOAfAzIARAbQgHAGgLAAQgNAAgdgsgAJIjaQAEgZAGgRIA9giIAbgSQgWBVgZBwIgMAyIhLAfIgGACQAThLAXhvgAqQg6QgFgBgFgFIgGgFIgJgJIAFgGIACgCIABgBQAcglAPgLQARgOA2ghIAdgSIAOgJIAmAEQgEAOgkAVQg1AhgGAFQgKAHgjAkIgUAUQgKAMgCAAIgCgBgAnijAQABgIAGgEIASACIgJARIgQgHg");
	this.shape_3.setTransform(24.2,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414B32").s().p("AgtAwIADgPQAAgEgHgQIgEgJQAsgRAagPIAGgHIANgIIAGgDIABgBIALgHIAAAUQgBARgKAMQgLAIgoAcIgkAYIgBgHg");
	this.shape_4.setTransform(92.3,14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#748F94").s().p("AsbA8IgDAAIgGgCIAFgJQAMgRAJgFIADgCQA8gZAfgGQAwgLB/gTQC/gcGOAAQHWAAEAAfIgBACQgBACgGAAIikgLQidgKhjAAQlSAAhnAFIoRAqQhPAEhDAnQgVANgSAMIgSgFg");
	this.shape_5.setTransform(-6,-80);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#83A4A8").s().p("AMmFHQAchUABgKIAQhKQAOhAAdiYQAaiGALhrIADgfQgmAIg/AJIg+AHQhYAOh4AKQjoAVkZABQg9gBgkgHIgTAjQgcAzgMAPQggAnggAdQgjAegaALIghgQIABgBIARgFQAQgHAOgLIAHgHQBKhTBChYIALgRIADgEQATACAkAAQFqAAEvgdQDOgUBdgWQApgJAagRIAAADIgJAgIgEAMIgEAPIgGAcIgHAhIgIA0IgDAOIgEASIgDAWQgGAdgEAfIgJAxIgDAPIgHAaQgFAWgWBwIgUBnIgJAmIgDAJIgKAyIgEABIgBAEIgFASQgCAGAAAIIgDACIgPAIIgMAFIgEACIgBABIg2AZQAFgUARg3gAtvlHQhigUgqgXIgDgCIgEgCIgEgbIADABIABABIABAAIAIAFQCaA2FmAPQAEAKALARIABACQgOAGgtgBQikABinglg");
	this.shape_6.setTransform(8,-27.2);

	// Layer 5
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#95AEB0").s().p("AhdBCIgYgHIAAgTIACgDIgCAAIgDgqQgDgTAEg0IADgCIgDgCIAAgCIABgGQAXAHBbAIIB/ALQgCAHAAAQQgBBeACAhIgEABIgXAAQhnAAhVgXgAggA1QAiAGAdADQAOAEAmABQAOgBAHhiQABgKhlgLQhOgKgRAHQgEgOgDAOIgFBFQACACAAANQAAAKAHAEIADgBIABgBQAQAGAqAHgABogpIAAgBIgDgBIADACgAAKAKQgxgIABgHQAAgEAEAAIAEABQARAIBTAFIAMAAIAAAAIgBATQgYgHgvgHgAhagsIAAAAIABAAg");
	this.shape_7.setTransform(-21.9,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#728487").s().p("AgBgBIADAAIgCABIAAACIgBgDg");
	this.shape_8.setTransform(-8.3,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AGgK/IADAAIAAACIgDgCgAmiq/IAAgBIABABIgBAAg");
	this.shape_9.setTransform(-53.3,-6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("Ag5CWIgYAAIAHgKIgHABIAAghQgCglABgRIABgEIAOABIA1ABQAuAAAvgCIgFAOIgIBRIAAAEIhIABIgzAAgACSB8IAAgxIAAgcQBogIBjgSQgGAUAAAhIAAAqIgBAJQhgAOhlAHIABgWgAjVCHIgxgJQhCgMghgBIAAgCQABgPgDgnQAAgHgBgGIAAAAQCTAQARAGQALADABAHIAAAGQhpgQgUADQgLABgBAGQgCAEAAAMIAdARQApAPBAAAIgDALgAn7BbIADgOQABghgKguQA7ASAoAAIACAAIAAASIABBEIABATIhhgegAG5AKIAAgKICNglIAfgJQgNApgDAyIAAAKQAAAHAFACIgBACQhXAahcATQAJgUAKhRgAptAyIgzgdIAAgBQACgNgEgqIgEgnIAIAEQAyAZAqATIAGA8IAFAmQgigMgUgKgAKshEIAogOIAOgGQAogQAdgTQgDAKgBAKIgYBnQgpASgvARIgdALQAIgfAOhTgAsSglIgUhwQATAOAfATIgBAEIADA3IAFAlIglgRg");
	this.shape_10.setTransform(5.5,59.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AhiFqQiUgIiQggQiKggiBg6QgzgWgwgYIgFgiQgMhHgOg0IgDgQQAoAbBkAsIBPAhIADACIACAAQBkAnAqAAQABAAAFAeIACABIASAFIgBAGQAAAEACADQACAOAGAAQAEAAADgCQAOAHAcAHQBAAPBjAAQA4AAAPgGIAFgEQAYgGAIgSQACgFABgUQAjACBUAAQCPAADWgqQCdgeBugsQAygUAogXQgpCzgBARIAAAEIgQAGIhOAaQhSAahSAUQiOAkiSAKQhrAGhoAAIhCAAgABRBlIACgdIAtgCQgDAJgCAQQgEAfgBAUQgCAOABAJIgsACQAEgWAEgwgAFhCLIAEgWQABgXgDgoIgCgNIAZgFIAlgKQgGAMAAAPQAAAKgGAaIgHAjIAAAIIACAEIguAJIABgGgAovBkQABgfgNg+IgBgGIAhAMIACAwQAEAhADAPIgdgJgAJogIIABgTIAvgPQgHAPgKAbIgMBFIgBAFIgjAMQAKgKAHhUgAhbA2QgCgPgFgFQgNgNgsAHIiOgOIAAgDQgDhQABgQQAEhAAUg5IAHgRIAHgVIAdARQA1AdAxAzQANAOAfAzIARAbIADAGQAAADADABIABABIAFAHQACAAADgCIADgDIAfABQBnAAB3ghQAsgNBggjQAjgOBegfQAvgQAhgNQAagLARgJICwhdIA8giIAbgSQgVBVgZBwIgMAyIhMAfIgFACIgGADIheAfIgEABIgEABQhKAVhYAVQkNA7jMAAQgsAAgYgCgAj4hDQghADACAnIAIAOQAMAMAXgBQANgCAHgNQADgJAAgKQgDghgeAAIgCAAgAjwjEQghACACAoIAHAOQANANAXgDQANgBAHgOQADgJAAgJQgDghgeAAIgCAAgArXARIgNgHQAAgHgDgQQgEgXABgFIgFgtIAyAcQgCAHgBANIABAnQABATADANIgcgQgAn4gDIgagIIgBgDQhYgagggSQgUgLglgUIg1gbIgughIgOgJIgki6IAAgCIgBgKQAYAbAuArQAMANAfAZIATAPQAVARAfAWQBLA2AlAPIAPAJIAQAIQACADAEAAIABAAIAGADIAFgHIAEgFIgDgCIABgBIAGgHIACgDIAFgGIACgCIAAgBQAcglAPgLQASgOA2ghIAdgSIAOgJIAlAEIAEABIASACIgKARQgOAcgHArQgHAjgGBfIAAACQADADAAAFIgCAFIACASIADAMIgrgEIgKAAIgOABIgOgBIgCAAIgOAAQgEAFgCAJQgagKg6gPg");
	this.shape_11.setTransform(6.4,56.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#526139").s().p("AkUDgQgGgGAAgFQgBgRAQACQARAEAAAOQADALgRACIgBAAQgEAAgHgFgAiuAtQgigcgbgQQBEAFBFAAQEqAADbgtQBGgPA0gRQAigKAagLQBxgsBIgfQAsgUAbgPIAGgHIANgHIAGgEIABgBIALgHIAAAUQgBASgKALQgKAKgqAcIglAZIgcASQgcAQg5AiQhHAqgxASIgZALQidBAhLAXQjUBBhwAPQgfABgQABQgDg8hohXgAp4BDQgXgOgDgDQgBgFgngXQglgWgJgIIgTgTIgagWIgBgCIgCgDQhFg3gUgmIgLgwIgBgIIABgFIAZAUQA3AmBUAkIAmAQQCQA3CbAbQgXAMglAYQhSA+gQAiQg+gjgVgOgAkMBfQgHgGABgFQgCgSARADQAQAEABANQADAMgRACIgBAAQgEAAgHgFg");
	this.shape_12.setTransform(8.3,32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3CCCC").s().p("Au3BhQgIgDgHgEIgIgCIgmgKQgfgIAMgDIABAAIAAgCQAihJDtgjQDtgkCFgKQCFgKCVAFQAVgIFtAMQFvAMBXASQBXASARAEIBFAUQA1APAjARQAkASADAMIACAOQgBAJgMAHQgLAGgSAGIgCABQgNAHgTACIAAgBQgHgOgUgMQgTgNgggKQhMgaiMgRQj/gdnUAAQmQAAi/AaQiAATgvALQgfAIg9AZIgDACQgIAFgMARIgGAJIAHACIACAAQgIAAgHgBgAO+A4IABgBIAAAAg");
	this.shape_13.setTransform(7.9,-83.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2F0F0").s().p("AkfC/QgngIgngyQgphCgLgMIgmg4IgMgSIgJgNIgQgVIADgDIgKAAIgBgBQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgogBQhMgEiIgTQiKgTgogJIgkgKIgRgEIgEAAIgCgBQgPgGgOgHQglgVABgVIACgIQAEAAAFAEIABAAIAIACIAbAJQAQAEAWAIIAAABIABgBQBNAYAeAFQB7AQCkANIBxAIQAPAaAuBWQBKCBAYAAQAFAAAHgEQAhgRBLhfQBBhRAQgfIAGAAIB0ABQKegBD7g7QA6gOAhgRIATgMIACgBIAIgIIABAFQgBARgKAPIAAAAIgGAIIgLALQglAeiPAaQiOAajSANQjRANijgBIimgCQgSAEgMAIQgKAGgGAIIgGAIIgSAaQg9BVhMBDQgRAKgMAAQgGAAgGgBgAv7hSIADABIABAKIgBgDIACAWg");
	this.shape_14.setTransform(7.8,-56.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9CC5C9").s().p("AkFC8Qggg3ggguQgggxgTgRIgVgIIAAAAQgOgHgZgGQgVgHgNgCQgTgBgLgBQjGgMiFgUQgzgJgqgJIgSgEIgCgBIgHgBIAGgJQALgSAJgFIADgCQA9gZAegIQAwgLB/gSQDAgcGPAAQHUAAEAAeQCMARBLAaQAhAKATANQATAMAHAOIAAABQgGAFiFAdQiSAhlJABQlDADh9AFIgFABQgFABgFACIhTByIAAABQgZAwgaASIgCgFg");
	this.shape_15.setTransform(8.6,-67.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3E4E6").s().p("Aj+HnIgEAAQgMAAgJgDIgBAAIgNgCIgegEIgKgCIgjgHQhwgZjGg/QgOgFgQgGQgXgKgagOQgrgYhdg+QAkAXgSgNIgTgPIAAgBIgJgnIgMg4IgtkKIgIgiIggijIgJg0IgRhqIgEgbIADABIABABIABAAIAIAFQCaA2FmAPQAEAKALARIABACIAJANIAFAHQAfAxAPATQAFAGAqBCQAgAoAiAPQALAKAaAMIAJAEQADAEAFABIANAEIAsALQAFgBAAgFIgZgMIgGgEIghgQIgBgBIACAAIARgFQAQgHAOgLIAHgHQBKhTBChYIALgRIADgEQATACAkAAQFqAAEvgdQDOgUBdgWQApgJAagRIAAADIgJAgIgEAMIgEAPIgGAcIgHAhIgIA0IgDAOIgEASIgDAWQgGAdgEAfIgJAxIgDAPIgHAaQgFAYgWBuIgUBnIgJAmIgDAJIgKAyIgEABIgBAEIgFASQgCAGAAAIIgDACIgPAIIgMAFIgEACIgBABIg2AZIgkAQQhgAtg1AOIg1ANQiUAmgbAGQjHAriYAAIi0ABQg0gBgqgCgAv5mtIgBgWIABADIgCgKIgDgCIAFAfIAAAAgAu0AfIgCgJIADALIgBgCgAmHl/Qgog/gVgYIAAAAIAKAFQArARALAAIACAAIA1BSQAqA+ATAWIAEADIgLAKQgSAOgMAAIhSiAg");
	this.shape_16.setTransform(8,-18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#576367").s().p("AgQBAQADg6gBgjQABgVgFgTIACgDIACgCIAhABIgBALIgCABIADACIAAAzIgBBFQgBAHgLAFIgEgBIgQADIgCAAIAAgLg");
	this.shape_17.setTransform(-6.5,69.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#596743").s().p("AhqARQgcgGgOgIQgDADgEAAQgGAAgCgMQgCgEAAgEIABgGIATAGIALAEQAUAEAcAEIAZACIAWACQBTALAmAAQAiAAAOgLQAGgFABgNQADgGABgGIAAgCIAAgBIABADIAAAAQACACAWABQgBAUgCAFQgIARgYAFIgFAEQgPAGg4AAQhhAAhAgPg");
	this.shape_18.setTransform(-16.9,78.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(103.8,-78.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(31,33,38,0.322)").s().p("AHWJAIAVgJIgPAHQgNAGgMAEIATgIgAnipDQgFgBgDgDIAEACIABAAIAEACg");
	this.shape_20.setTransform(30,25.5);

	// Layer 6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("Ag9O9QiIgDiFgWQh+gah4giQh3gihxhKQgSh3gLg2IgUhiQgOhLgXiBQgThpgNhzIAAAAIgBgEIgCgOIAAAFIgPhIIgbiZIAAgCIggibQgGgfgIgfIgUhlIgJg0QgWiGgHg/QgDgFABgJIABgGIgBgNIAEAAQAYg9CigtQD0hEIDgMQKngHEvBDQCDAdAxAnQALAMAOAOIAIAHIAGAQIADANQACANAAANQgCAXgMATIgCAIIgDAQQgEAHgCAHQgOAxgCAMIgOBBQgNA1gKBJQgLBJgWBcQgHAcgLBEIgDALQgdB7gQA5IAMgEIgBADQAIAFACAOIgCAmQgCAhgEAKQgJAUgdARQgIAmgfB/IgNA7QghCHg8ENIgCADIgDACIgBACIgFAKIgFgFIgHADIgBABIgPAHQgNAGgMADIgBABQhJAdhLAUQiPAniRATQhtAMhtAAIhJgCgAI8KSIAEgBIgDgBgAmjJCIABAAIgBAAgAwMsCIABABIABgCIgCABg");
	this.shape_21.setTransform(8.4,0);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-99.4,-95.8,215.7,191.8);


(lib.CUP_34DOWN_body = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C323C").s().p("AhkEeQgBgKAKgBQADAAAJACIAMABQAkgDAlgWIAAADQgDALgBAQQgbAQgZADIgQABQgiAAAAgRgAgaCqQgCgDAAgEQABgIAbgFQARgDALgFIgFAaQgUAHgPAAQgLAAgDgFgAhAAzQgGgCAAgHQAAgHAEgBIAKAAQA/AAAqgXIgEAWQglAWgQAAQgsAAgMgEgAAHhnQgEgEAAgEQAAgCAfgIQAcgHANgJQgEAMgCAQQgVALgWAAQgNAAgGgFgAgmjiQgHgDAAgHIACgIIA+gNQAigIANgJIAigbIABgBIgDAYIAAAHIgCAIIgHAEQgwAkgwAAQgWAAgJgDg");
	this.shape.setTransform(94.9,-28.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#313D40").s().p("AvDBKQgJgCgHgFIADABIAAgLIAAgEQABgGAEgFQAEgGAJgHQAngdB/gZQDcgtF4gDQKzgJEgA6QB2AYAsAgIgBABIABgBQAQANAGAOIACAIIAIgDIADgBIgCABQgNAHgTACIAAgBQgHgOgUgMQgUgNgggKQhNgYiMgRQkBgfnUAAQmPAAi+AcQh/ATgwAJQgeAIg8AZIgDACQgIAFgLARIgGAJIAHACIACAAIgPgBg");
	this.shape_1.setTransform(4.1,-81.5);

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F25").s().p("AgdgWIAEgQIAOgGQAlgQAdgTIgEAUIgVBmQgmATguARIAZhlg");
	this.shape_2.setTransform(79.2,54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#596743").s().p("AHUE4QAAgMAdh8IAMg0QAygUAngXQgkCzgBARIABAEIgQAGIhOAagAn3EaQgcgHgPgHQgDACgEAAQgGAAgCgOQgCgDgBgEIABgGIAUAGIALAEQAVAEAcADIAYADIAWADQBVALAnAAQAiAAANgLQAGgGABgNQADgGAAgHIAAgBIAAgCIABADIAAABQACACAWABQAAAUgCAFQgHASgYAGIgFAEQgPAGg3AAQhjAAhBgPgAkvgsQgegxgIgIQgegkhKglIAHgVIAdARQA2AdAyAzQAOAOAhAzIARAbQgHAGgLAAQgNAAgfgsgAJHjaIAJgqIA7giIAbgSQgTBVgVBwIgLAyIhLAfIgFACQARhKAThwgAqMg6QgFgBgGgFIgFgFIgJgJIAEgGIACgCIABgBQAbglAPgLQARgOA1ghIAcgSIAOgJIAlAEQgCAOgkAVQg0AhgGAFQgJAHgiAkIgUAUQgJAMgCAAIgDgBgAnhjAQAAgIAHgEIARACQgFAIgEAJIgPgHg");
	this.shape_3.setTransform(22.3,52);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414B32").s().p("AgrAwIACgPQAAgEgHgPIgEgJQArgSAZgPIAHgHIAMgHIAGgEIABgBIAKgHIABAUQAAASgKALQgKAIgnAcIgkAYIgBgHg");
	this.shape_4.setTransform(89.9,14.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#748F94").s().p("AsaA8IgCAAIgHgCIAGgJQALgRAIgFIADgCQA8gZAegGQAwgLB/gTQC+gcGNAAQHWAAEBAfIAAACQgBACgGAAIilgLQicgKhkAAQlSAAhnAFIoQAqQhOAEhDAnQgVANgRAMIgSgFg");
	this.shape_5.setTransform(-11.2,-80);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#83A4A8").s().p("AM8FIQAZhVABgKIANhJQANhBAYiYQAWiGAIhrIACgeQgmAHg/AIIg+AIQhXAOh3AKQjoAWkZAAQg9AAgkgIIgSAjQgbAzgLAPQgfAngfAdQgiAfgbALIghgRIACgBQAIgCAJgDQAPgGAOgMIAHgHQBHhSA/hZIALgRIADgEQATACAiAAQFsAAEugdQDNgUBdgVQAogKAagRIAAAEIgIAfIgEANIgDAOIgFAcIgGAhIgHA0IgDAPIgCASIgDAVQgFAdgEAgIgHAwIgCAQIgGAaQgFAVgSBxIgRBmIgIAmIgDAJIgJAyIgEABIgBAEIgEASIgCAOIgDACIgOAIIgMAFIgEACIgBABIg1AZQAEgUAQg2gAttlGQhigVgsgXIgDgBIgDgDIgFgbIADACIABAAIABABIAIAEQCbA2FnAQQAEAJAMASIABABQgOAGgtAAQikAAiogkg");
	this.shape_6.setTransform(3.2,-27.2);

	// Layer 2
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#95AEB0").s().p("AhcBCIgYgHIgBgTIACgDIgBAAIgFgqQgDgTACg0IADgCIgDgCIAAgCIABgGQAXAHBbAIIB/ALQgBAHAAAQQACBeADAhIgEABIgXAAQhnAAhWgXgAgfA1QAiAGAdADQAPAEAmABQANgBAFhiQAAgKhlgLQhPgKgRAHQgEgOgCAOIgDBFQACACAAANQABAKAGAEIAEgBIAAgBQARAGAqAHgABmgpIAAgBIgDgBIADACgAAJAKQgwgIAAgHQAAgEAEAAIAEABQARAIBTAFIANAAIAAAAIgBATQgYgHgwgHgAhcgsIAAAAIABAAg");
	this.shape_7.setTransform(-22.6,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#728487").s().p("AgBgBIADAAIgCABIAAACIgBgDg");
	this.shape_8.setTransform(-9.3,62);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AG1K/IADAAIAAACIgDgCgAm3q/IAAgBIABABIgBAAg");
	this.shape_9.setTransform(-56.4,-6.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#1D1F26").s().p("AgwCWIgYAAIAHgKIgIABIgBghQgCglAAgRIABgEIAOABQATABAiAAQAuAAAvgCIgFAOQgBAbgEA2IgBAEIhJABIgxAAgACaB8IgBgxIgCgcQBogIBjgSQgFAUAAAhIABAqIAAAJQhfAOhlAHQABgIgBgOgAjMCHIgygJQhCgMgigBIAAgCQABgPgEgnQAAgHgCgGIABAAQCTAQARAGQAMADABAHIgBAGQhpgQgUADQgKABgCAGQgBAEAAAMIAeARQApAPBAAAIgCALgAn0BbIACgOQABghgMguQA8ASAnAAIACAAIABASIADBEIACATIhigegAG9AKIAAgKICMglIAfgJQgMApgCAyIABAKQAAAHAFACIgBACQhWAahcATQAJgUAHhRgApnAyIg0gdIAAgBQABgNgFgqIgFgnIAIAEQAzAZArATIAHA8IAGAmQgigMgUgKgAKuhEIAngOIAOgGQAogQAdgTIgEAUIgVBnQgoASgvARIgcALQAHgfALhTgAsPglQgKgygOg+QAUAOAgATIgBAEIAEA3IAGAlQgXgLgOgGg");
	this.shape_10.setTransform(4,59.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("AhNFqQiUgIiRggQiLggiDg6QgzgWgxgYIgGgiQgOhHgPg0IgEgQQAqAbBkAsIBRAhIACACIACAAQBmAnAqAAQABAAAFAeIACABIASAEIgBAHQABAEACADQACAOAGAAQAEAAADgCQAPAHAcAHQBBAPBjAAQA3AAAPgGIAFgEQAYgGAHgSQACgFAAgUQAkACBUAAQCPAADUgqQCdgeBsgsQAygUAngXQgkCzgBARIABAEIgQAGIhOAaQhQAahSAUQiNAkiRAKQhrAGhoAAIhDAAgABfBlIAAgdIAtgCIgDAZQgEAfAAAUIgBAXIgrACQAEgWACgwgAFwCLQADgMAAgKQABgXgFgoIgCgNIAZgFIAkgKQgFAMAAAPQAAAKgFAaIgFAjIAAAIIACAEIguAJIABgGgAohBkQgBgfgOg+IgBgGIAhAMIAEAwQAEAhAEAPIgdgJgAJygIIABgTIAugPQgHAPgIAbIgKBFIAAAFIgjAMQAKgKADhUgAhOA2QgDgPgFgFQgOgNgrAHIiPgOIAAgDQgFhQAAgQQAChAATg5IAGgSIAHgUIAdARQA2AdAyAzQAOAOAhAzIARAbIADAGQABADACABIACABIAEAHQADAAADgCIADgDIAfABQBnAAB2ghQArgNBggjQAhgOBegfQAugQAhgNQAagLAQgJICtheIA7ghIAbgSQgTBVgVBwIgLAyIhLAfIgFACIgGACIhdAgIgEABIgDABQhKAVhXAVQkLA7jNAAQgrAAgYgCgAjvhDQgiADAEAnIAIAOQANAMAWgBQAOgCAGgNQADgJAAgKQgEghgeAAIgCAAgAjsjEQghACAEAoIAIAOQANANAXgDQANgBAGgOQADgJgBgJQgDghgeAAIgDAAgArMARIgMgHIgFgXQgFgXACgFIgHgtIA0AcQgCAHgBANIACAnQABATADANIgcgQgAntgDIgbgIIgBgDQhYgaghgSIg6gfIg1gbIgwghIgOgJIgqi6IAAgCIgBgKQAZAbAvArQANANAfAZIATAPQAWARAgAWQBNA2AlAPIAPAJIAQAIQACADAEAAIABAAIAHADIAEgHIAFgFIgEgCIABgBIAGgHIACgDIAEgGIACgDIABAAQAbglAPgLQARgOA1ghIAcgSIAOgJIAlAEIAFABIARACQgFAIgEAJQgNAcgGArQgHAjgCBfIAAACQADADAAAFIgBAFIACASIADAMIgrgEIgJAAIgPABIgOgBIgCAAIgOAAQgEAFgCAJQgagKg6gPg");
	this.shape_11.setTransform(4.2,56.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#526139").s().p("AkHDgQgHgGAAgFQgBgRAQACQAQAEACAOQADALgSACIAAAAQgEAAgHgFgAimAtQgjgcgcgQQBEAFBFAAQEqAADagtQBFgPA0gRQAhgKAagLQBwgsBGgfQAsgUAbgPIAGgHIANgHIAFgEIACgBIAKgHIABAUQAAASgKALQgLAKgpAcIgkAYIgbATQgcAQg4AiQhFAqgwASIgZALQibBAhKAXQjSBBhxAPQgeABgQABQgFg8hqhXgApwBDQgYgOgCgDQgCgFgngXQgngWgIgIIgUgTIgagWIgBgCIgCgDQhHg3gVgmIgNgwIgBgIIAAgFIAaAUQA4AmBWAkIAmAQQCSA3CbAbQgWAMgkAYQhRA+gPAiQg+gjgWgOgAkDBfQgGgGgBgFQgCgSARADQARAEAAANQAEAMgRACIgBAAQgEAAgHgFg");
	this.shape_12.setTransform(5.8,32.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3CCCC").s().p("Au1BgQgKgCgHgEIgHgCIgngKQgfgIAMgDIABAAIABgCQAfhJDsgjQDsgkCEgKQCGgKCVAFQAUgIFtAMQFwAMBYASQBXASARAEIBGAUQA1APAkARQAkASADAMIADAOQAAAJgNAHQgKAGgSAGIgCABQgNAHgTABIAAAAQgIgOgTgNQgUgMgggKQhNgaiMgRQkBgdnUAAQmPAAi/AaQh/ATgvALQgeAIg8AZIgEABQgIAGgLARIgFAJIAHACIABAAIgOgCgAO+A4IABgBIgBAAg");
	this.shape_13.setTransform(2.7,-83.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D2F0F0").s().p("AkUC/QgngIgpgyQgrhCgKgMIgpg4IgNgSIgJgNIgQgVIADgDIgKAAIgBgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABIgogBQhMgEiJgTQiKgTgogJIglgKIgRgEIgEAAIgCgBQgPgGgPgHQglgVAAgVIABgIQAFAAAEAEIACAAIAHACIAcAJQAQAEAXAIIAAABIABgBQBOAYAeAFQB7AQClANIBxAIQAQAaAwBWQBOCBAYAAQAFAAAHgEQAggRBIhfQA/hRAPgfIAGAAIB0ABQKegBD5g7QA6gOAggRIATgMIACgBIAIgIIABAFQAAARgKAPIAAAAIgGAIIgLALQgkAeiOAaQiNAajRANQjRANijgBIimgCQgSAEgMAIQgKAGgGAIIgFAIIgSAaQg6BVhKBDQgRAKgLAAQgHAAgGgBgAv5hSIADABIACAKIAAgDIACAWg");
	this.shape_14.setTransform(2.7,-56.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#9CC5C9").s().p("Aj+C8Qghg3ghguQgigxgTgRIgWgIIAAAAQgOgHgZgGQgVgHgNgCQgTgBgLgBQjHgMiFgUQg0gIgqgKIgSgEIgCgBIgHgBIAFgJQAMgSAIgFIADgCQA8gZAegIQAvgLB/gSQC/gcGPAAQHUAAEBAeQCMARBNAaQAgALAUAMQAUAMAHAOIAAABQgGAFiEAdQiRAhlJABQlDADh9AFIgFABQgFABgFACIhPByIAAABQgYAwgZASIgDgFg");
	this.shape_15.setTransform(3.5,-67.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3E4E6").s().p("AjhHnIgEAAQgMAAgJgDIgBAAIgNgCIgegEIgLgCIgjgHQhwgZjIg/QgOgFgRgGQgWgKgbgOQgsgYhfg+QAlAXgTgNIgTgPIAAgBIgKgnIgOg4Ig1kKIgJgiIgkijIgLg0IgUhqIgFgbIADABIABABIABAAIAIAFQCbA2FnAPQAEAKAMARIABACIAKANIAEAHQAhAxAQATQAFAGArBCQAiAoAiAPQAMAKAaAMIAJAEQADAEAFAAIANAFIAsALQAFgBAAgFIgZgMIgHgEIghgQIgBgBIADAAQAIgCAJgDQAPgHAOgLIAHgHQBHhTA/hYIALgRIADgEQATACAiAAQFsAAEugdQDNgUBdgWQAogJAagRIAAADIgIAgIgEAMIgDAPIgFAcIgGAhIgHA0IgDAOIgCASIgDAWQgFAdgEAfIgHAxIgCAPIgGAaQgFAYgSBuIgRBnIgIAmIgDAJIgJAyIgEABIgBAEIgEASIgCAOIgDACIgOAIIgMAFIgEACIgBABIg1AZIgjAQQhfAtg1AOIg0ANQiTAmgbAGQjGAriYAAIi0ABQg0gBgqgCgAv3mtIgCgWIABADIgDgKIgDgCIAHAfIAAAAgAukAfIgDgJIAEALIgBgCgAmEl/Qgqg/gWgYIABAAIAJAFQAsARALAAIACAAIA3BSQAsA+AUAWIAEADIgLAKQgRAOgMAAIhWiAg");
	this.shape_16.setTransform(3.2,-18.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#576367").s().p("AgOBAQACg6gDgjQABgVgGgTIACgDIACgCIAhABIAAALIgCABIACACIACAzQACA5gBAMQAAAHgLAFIgEgBIgRADIgCAAIAAgLg");
	this.shape_17.setTransform(-7.3,69.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#596743").s().p("AhpARQgbgGgQgIQgCADgEAAQgGAAgCgMQgDgEAAgEIABgGIAUAGIAKAEQAVAEAcAEIAYACIAXACQBTALAmAAQAjAAANgLQAFgFABgNQADgGABgGIAAgCIAAgBIABADIAAAAQACACAWABQAAAUgDAFQgHARgXAFIgGAEQgOAGg4AAQhhAAhBgPg");
	this.shape_18.setTransform(-17.5,78.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(98.6,-78.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(31,33,38,0.322)").s().p("AHnJAIAVgJIgPAHQgMAGgMAEIASgIgAnypDQgGgBgDgDIADACIACAAIAEACg");
	this.shape_20.setTransform(27.9,25.5);

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgJO9QiJgDiFgWQh/gah5giQh4gihzhKQgVh3gNg2IgXhiQgRhLgaiBQgXhpgQhzIAAAAIgBgEIgDgOIAAAFIgRhIIgfiZIAAgCIglibIgPg+IgXhlIgMg0QgZiGgJg/QgDgFAAgJIABgGIgBgNIAEAAQAWg9CggtQDyhEIEgMQKmgHExBDQCEAdAyAnIAaAaIAIAHIAGAQQADAGABAHQADANgBANQAAAXgMATIgCAIIgDAQQgDAHgCAHQgMAxgCAMIgMBBQgMA1gIBJQgIBJgUBcQgGAcgJBEIgCALQgZB7gOA5IALgEIgBADQAIAFADAOIgBAmQgBAhgEAKQgIAUgdARQgHAmgaB/IgMA7QgdCHg0ENIgBADIgEACIAAACIgFAKIgFgFIgIADIgBAAIgOAIQgNAGgMADIgBAAQhIAehKAUQiOAniRATQhtAMhtAAIhIgCgAJnKSIADgBIgCgBgAl7JCIACAAIgCAAgAwMsCIABABIABgCIgCABg");
	this.shape_21.setTransform(3.2,0);

	this.addChild(this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-104.6,-95.8,215.8,191.8);


(lib.CUP_34DOWN_arm_02asdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#526139").s().p("Ag5AjQg3gjAAgcQAAgGAIgQQAIgPAGgIQAdAzBAAcQA6AcA0gBQgDAQgPAMQgQANgWAAQg5AAg5gng");
	this.shape.setTransform(-12.1,-43.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AiuBxQgpgwAAhXQAAgjANhgQAUATApAPQAkAMAUAAQgJA4gKAZQgFANAAAeQAAAlAEAHQAIALAJAXQADgDACgFIgFgYQA0AHBZg+QA3gkApgnIgKgPIgEgGIACgGQAfAQAZAoQAXAkgBAQIAAAHIgBgBIgIAAQgFgEgEgMIgCABQgvA+heAuQhSApg2AAQg4AAgkgpg");
	this.shape_1.setTransform(-0.4,-23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AhBB9IAAAAQgjgQgagcQgWgXAAgMQAAhNAygtQAigfAZAAQAYAAANAZQAIASAAARQAAArghAYQgcAVgbAAQgKAAAAglQAAgGAJgOIAcgmIAFgGIgDgBIguAoQgLALAAANQAAAdAKAQQAHALAJAAQAVAAAKgCQATgEALgNQAEAXAEAFQALASAgAAQAaAAAOgOQgIgHgcAAQgZAAgIgPIAAAAQgEgXAFgHQALgNAzgEIAAAAIAhALIgBAAIALARQAGAMAAAEQAAAmggAXQgIAGgpASIAAAAQgYAEgEAIgAAVgUQADgTAAgHQAAgQgRgiQgOgdgfAMQAbgNADgIQAEgJAUAAQAZAAAOAVIAOAUQAGAAABALIAAASQAAAdgOAKQgIAHggAIgABfgYQgFgDgIgBIAHgNQAFgLAAgOIgFgXQgGgYgEgKQBGgUAAA9QAAAPgNAVQgPAZgSAAQgFAAgDgDg");
	this.shape_2.setTransform(-4.2,-56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AirEeQgsg4AAhrIAPiDQgRgZgLgQQgDgFgBgMQAAgQATgdQAOgVAJgLQAFgFALgoQAKgoAegeQAOgWArgOQAIgEAYgSQAYgQAQAAQAWAAALALQAMALAKAAQAEAAAPgDQAOgEAFAAQAVAAAPALQAWAQAAAhQAAAfgTAaQgVAbgcgBQAOALAJAUQAGAPAAAJQABAMgDAIQgEAMgMAWQgJAPgVANIgWANIgMAdQgOAegLAHQgKAGgTADQgQADgJgBIgTBSQgBAEAAAkIABAeQAvAAA6giQAxgdBLhBIgEgHIACgGQAfARAZAoQAXAjgBASIAAAHIgBgBIgIABQg6BEhZArQhSAphEAAQg7AAgmgvg");
	this.shape_3.setTransform(-2.1,-39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34DOWN_arm_02copyasdf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AgdCFQg9gsAAhvQAAgiAMhhQAUAUAqAOQAhAMAVABQgKA4gKAZQgFANAAAeQAAAkAEAIQAIALAJAXQAEgDABgFIgFgZQAngEASgFIgWBeQgTAGgSAAQggAAgdgVg");
	this.shape.setTransform(-12.8,-23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("Ag5AjQg3gjAAgcQAAgGAIgQQAIgPAGgIQAdAzBAAcQA6AcA0gBQgDAQgPAMQgQANgWAAQg5AAg5gng");
	this.shape_1.setTransform(-12.1,-43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AhBB9IAAAAQgugWglg5QAAgpAagwQAihAAxAAQAQAAAPAPQAOASAAAbQAAArghAYQgcAVgbAAQgKAAAAglQAAgJAqg3IgEgBIguAoQgKALAAANQAAAXAHAPQAHASAMAAQAUAAALgCQAVgFAJgMQgBANAQAQQAQARAUAAQANAAAMgHIAPgHIgCgCQg3gEgFgDQgFgCgCgLIAAAAQgIgYAPgLQAOgIAqgEIAAAAIAhALIgBAAQAIAIAFAMQAEAKAAADQAAAmggAXQgIAGgpASIAAAAQgYAEgEAIQg9gQgGgDgAAVgUQADgTAAgHQAAgQgOgYQgPgbgZgLQASgBAEgJQAEgJAUAAQAZAAAOAVIAOAUQAGAAABALIAAASQAAAdgOAKQgIAHggAIgABfgYQgFgDgIgBIAHgNQAFgLAAgOIgFgXQgGgYgEgKQBGgUAAA9QAAAPgNAVQgPAZgSAAQgFAAgDgDg");
	this.shape_2.setTransform(-4.2,-56.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhzEqQg5g1AAh6IAPiDQgQgZgMgQQgDgFAAgMQAAgQASgdQAOgVAJgLQAFgFALgoQAKgoAfgeQANgWArgOQAIgEAYgSQAWgQAQAAQAYAAAMALQALALAKAAQAFAAAOgDQAOgEAFAAQAVAAAQALQAVAQAAAhQAAAfgTAaQgVAbgcgBQAOALAJAUQAHAPAAAJQAAAMgDAIQgEAMgMAWQgJAPgVANIgWANIgMAdQgNAegOAHQgKAGgTADQgOADgJgBIgTBSQgBAEAAAkIABAeQAmgFAOgEIgXB0QgCANgGAFQgEADgJAAQg4AAglgjg");
	this.shape_3.setTransform(-6.4,-39.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34DOWN_arm_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#526139").s().p("AgqAfQgjgWAAgeIAFgMQAGgLAGgIIACACQADAYANAKQAHAGAGAAQAHAFALAFQASAHAhAAQAGAAAKgCIAUgFQAFAZgNAPQgMANgUgBQgsABgigWg");
	this.shape.setTransform(-11.1,-38.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AivBOQgegwAAhpQAAgKAHgvIAhARIAcANQAGAAAJACIAUAFQgNA3AMAqQAGAXAPAXIA1gQQAxgPAhgXQAggaAWgsIADACQAcAbAeAXQAbAWALAIIAAADQgCABgJABIgQgBQgTADgiAbIguAoQgjAchoAZQhSAAgig3g");
	this.shape_1.setTransform(1.9,-22.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AhIBSQgggbAAguQAAgVAZgjQAdgoAgAAQAYASAAAZQAAATgJAWQgMAWgRAIIgagEIgBgQQAAgJAHgTQAHgSAFgFQgBgIgJAIQgJAKgHAOQgKARAAAJQAAAUAJAJQAKAKAWAAQAKAAAIgHIAUgUIAAAJQABAHALAMQALAMAKAAQAGAAADgBIAEgEIAAgCQgEgEgNgFQgLgHAAgPQAAgcAcAAQAGAAAFACIAFAFQAHADAGAPQAFANAAAJQgCARgOAQQgbAgg1AAQggAAgbgWgABEgTIAEgEQADAAACgFQACgFAAgIQAAgOgDgIQgDgKgNgXIAMgBQAhgKAAAoQgBAngeAPgAATg7QgKgagMgLQAIgEAAgDIAUAAQASAGAMAbIAJAbQAAAHgJAIQgMAMgWABQAKgPgMgdg");
	this.shape_2.setTransform(-6.3,-50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373D48").s().p("AhSAAQAbgEAWgaQARgVACgRIAuAjIAzAhQgMAVgLAQQgVAggXgBQgLAAhXhEg");
	this.shape_3.setTransform(-10.2,-26.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#758A51").s().p("ACxEvQhcgZhSgzQAYgJATgYQAQgVAEgVQAaAZBAAMQAyAJAyAAQAKABAEgCIAEgBIAAADQgIAKAAAMQAIA8AJAiIgGABIgHADQghAAg8gQgAi5BSQgygxgXhAQgWhCgCgWQgCgWADgWQAEgZADgJQALgcAQgaQAIgKAXgaQARgUAAgFQAAgGACAAQABAAABABQAAAAABAAQAAAAAAAAQABAAAAAAQA9BIAIAHQggAJgNApQgJAZAAAaQAABJA6BHIA6A5QAAASgUAXQgXAagaAAQgEAAgygxg");
	this.shape_4.setTransform(-6.9,-41.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#526139").s().p("AgHBDQghgWgVgcQg4hJBbgfQgBB8BvAOQAAARgPALQgNAJgQAAQgSAAgdgVg");
	this.shape_5.setTransform(-17.3,-73.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("AhhBOQgngdAAg2IACgPQAFgSAJgPQAegvBBAAQAmABADABQAJAEAAAdQAAANgQAZQgVAhgiAAIgOgBQgOgEgGgKQAFgOAZgXQAZgWACgIIgNADQggAHgSAWQgNARAAAQQAAALAPALQAOANAOAAQAPAAAZgJIgEAIQgJAaAPAOQAKAKAIAAIAHgBIAAgCQAAgCgKgHQgFgEAAgOIAEgSQAHgRARgBQAQAAALAPQALAOgCASQgFAuhLAAQgtABgggXgABJATIgEgJQAQgCAJgOQAJgQAAgbQgBgSAaANIAHAHQACADAAAGQAAAXgWASQgUARgUAAIgCgBgAAngIIgTgBQALgFAHgUQAFgOAAgIQAAgVgHgWQAQACAQAMQASANgBANQgEAogBAFQgEAJgRgBIgUgCg");
	this.shape_6.setTransform(-4.6,-79.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AhdAAQASgyAFAIQAIAJAXASQANALAXAEQAPAEAOAAQANAAAUgEQAXgEAMgHQAAA3g4AAQhPAAg0gsg");
	this.shape_7.setTransform(-14.5,-54.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("Ag8B2QgPgPgRgfIgDgLQADAEAMAEQAMADAHAAQAHAAAPgKIAPgLQAbAAAKALQAKAMAfABQAFgIAFAAIABAAQgcgGgRgKQgNgIAAgFQAAgVATgNQAQgJATAAQAQAAAKAIQAKAJAAAPQAAAGgIAfQgJAhgGAJQgKAPgPAIQgVAMghAAQggAAgXgXgAhWAsQgLgJAAgPQAAgQADgRQAEghAKgTIgQAdQAKg8ARgVQAKgNARAAQAPAAAGARQAFAMAAAYQAAAugLAiQgOAxgcAAQgIAAgJgIgAgQAjQAJgYAEgiQADgXAAgPQAAgUgHgZIgFgTQgDgKAEgFQAZAEAQAaQAPAXAAAbQAAAjgNADQgVAGgQApIgEAMgAA8gXIgBg0QgBgngCAAIgCgJQAXANALASQAKATAAAbQAAANgFASg");
	this.shape_8.setTransform(-11.4,-70.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AiDBsQhFhPgBiLQABgaAGgxQAbAHARAEQATACAhABQgEARAHBIQALBgAbBCIA9AGIAuACQAtAAAhgNQArgRgHggIACgJIAAAAQAOAhACAHIAQBSIADAOIgUAGIgsANQhKAOgJAAQh0AAhFhOg");
	this.shape_9.setTransform(-1.1,-31.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).wait(1));

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AimDlQgtg2AAh5IAEgkIAFgjIgGgJQgHgKABgLQgBgPAIgUIANgdIAAgUQgBgrAmgtQAsg1BAAAIAPACQANACAYAAQAVAAAMASQAKAPAAATQAAAMgJAUQgLAXgOAGQANAcAAAMQAAAKgHAQQgIAPgKAHQgWATgCAEQgCADgBARQABAXgJAIQgEAFgPAHQgcAMAAAwQAAALAGA3IADABQAUgBAdgIQAggJAZgPQAagOAagdQAagcAAgBQACABAEADQADAEAAABQAcAaAdAYQAbAVAMALIAAADQgDABgJAAIgPAAQhtCJiEAAQhLAAgngsgABvApIAAAAIAAAAg");
	this.shape_10.setTransform(1,-34.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABNF3QhVgnh3hgQhOg+gqhGQgthKAAhMQAAhKAwg7QAbggAHgKQAPgaAAgfQACgGALgMQALgPAJgGQAMgJAXgNQAVgMALgPQAXgbAmgOQAfgLAaABQA0AAA1AcQA5AeAAAiQAAAJgFAJQgFAIgOAQIgcAPQgYAMAAALQgEAsgfAOQgKAEg4AIQgGAcgUANQgPAKgVAAQgSABgJgIQgJgIgLAAQgKAAgSAbQgUAegBAcQAAA1AwBFQAxBJBFAqQA7AlAQAJQAVAKA/ASQAaAIAyADQAaADADANIAEgBIAAADQgIAKAAAMQAIA8AJAiIgGABIgIADIgBADQAAABgHAAQhnABhbgog");
	this.shape_11.setTransform(-7.9,-50.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah6EnQhNhTAAibIADgrIAEgkQgJgGgJgJQgOgNAAgHQAAgZAOgcQAOgcAAgnIgEgbIgEgbQAAgQAchWQAFgRATgJQAGgEAUgEQAVgGAHAAQBOAQAUAUIAZAYQAGAEAAAeQAAAdgDAOQgDANABAHQAAAEAEAJQAEAIAAAGQgMAwgRAwQghBegbAAQgHAAAAAEIAAAMQAAAvAOBOQAMA+AKAfQBEAFAlgCQAlgBAegPQAegPAHgKIACgJIAAAAQAOAhABAGIARBSIADAPIAFAQQgTAPg0AKQgwAJgaAAQiAAAhKhPg");
	this.shape_12.setTransform(-3,-48.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34DOWN_arm_01aaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("Ag+AoQgIgYAAgKQAAgTAGgOQAPgeAnAFIAtgOQABAgADASQAHAeAaAZQgnAMgVAEQgvAMgKAAQgIAAgJgbg");
	this.shape.setTransform(1.1,-14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AiNDOQgXgDgXgDIgWgDQgNAAgMADIAQhwIAcALQAIACAZAAQAbAAAVgDQgEAKgEAOQgDAPAAAHQAAAHAJAXQAJAWAGAKgAAkCKQgMgZAAgMQAAgtAKgFIAUgKQASgIAUgSQAAAHACAFIACACQAGgQAMg2QAAgWgMggQgKgbgJgPQANgDBkhBQABAHAWA3QAQApAAAjQAAAggOAoQgLAkgNATQgYAkgcAcQguAsgmAAQgMAAgNgeg");
	this.shape_1.setTransform(4.1,-28.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AhaBEQgYgKgBgVQBZgBA4gwQAegaAVgkIAAgBQAaAbAAAYIgBAMIgCAEQAVgMgRANQgQAKgMAQQgMAPgsAVQguAVgjAAQgQAAgRgIg");
	this.shape_2.setTransform(13.3,-50.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AAECKQgEgFgUgBIgrgPQgqgXAAgsQAAgFAHgMQAGgLAAgFQAggOAAACQAAgFAjAMQAiAMAAAQQAAAHgGAHQgDAHgDABQgUAJgMgLQgIgGgTAUIAHAEQAWAJAMAAQAfAAALgTQADgGADgXQAMAGARAFQARAGAGAAQARAAAGgGQAKgMAAgmQAAgNgMgMIgygmIgDAAIAHAHQAoAsAAANIgCAVIgDAOQgBACgKAAQgVAAgbgSQglgaAAgvQAAgOAHgQQAKgaAYAAQAiAAAoAtQAtA0AAA7QAAAJgWAWQgOANgXARIgUAOQgwAWgTgBQgCABgBgGgAiBgiQgXgUAAgdQAAgeAUgJQARgHAeAJQgLAgAAAIQAAAbAOAbQgIACgFADQgDADgFgBQgJABgRgQgAg9ggQgRgLAAgeIgBgRQAAgKAGAAQAEAAAIgVQANgVAagBQARABALAHIASAJQgYAMgOAdQgLAWAAARQAAAIAFATQgjgKgGgDg");
	this.shape_3.setTransform(3.9,-63.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AjPFxQgegEgFgTIAQhxIAAgEQBpAKBlgkQBtgnAAhAQAAgMgPgwQgEgWgTgEIgfABQgHAAgPgIQgXgJgOgPQgEgFgLgXQgIgSgSgLQgTgMgSgbQgQgbAAgRQAAgbALgMQAFgHAKgFQgaAAgXgaQgZgaAAggQAAguAagHIBEAAQAKAAAKgMQAKgMAZAAQAXAAAzAfQAtAaALAMQA9BLgCAQQgBAQAMAOQANAPAMATQAQAbAAAOQAAAOgHAQQAZA+AHAYQAJAegBAkQAACRh+BRQhpBCiMAAQhGAAgIgBg");
	this.shape_4.setTransform(4.9,-42.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34DOWN_arm_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgvAlIgBgRQAAgtAYgRQAPgKAlgPIAHgEQgDAaAAAKQALBDAGAPQgxATghAGQgLgTgDgQg");
	this.shape.setTransform(-4.9,-14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AjFCQIAQg6IAKAIIBOgMQgKAtAAAKQAAAIACANQAEAVAHAOQgNADgfACIhFADQAFgsABgNgAAPCCQgHgbAAgHQAAgnAGgNQAJgSAqghIAQgQIAGAcIAFgZQADgXAAgHIgBgWQgDgcgKgpQAOgDAWgLQAmgSAbgbQADANATBwQAABVgwA7QgsA2hZAmQgCgGgGgZg");
	this.shape_1.setTransform(-0.9,-26.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AhQATQAWAEAJAAQAiAAAcgXQAggcACgpQALAGALATQAMATAAAKQAAARgnAhQgqAjgnABQgmAAgDg0g");
	this.shape_2.setTransform(9.6,-49.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AgxBSQgVgTAAgQQAAgbANgPQAHgGAGgCQAgAAAAAdQAAAMgJAGQgLAKgCAFQABAHAKAAQAJAAAJgQQAIgQgBgPQAZAXANAAQAmAAgBgpQAAgMgHgPQgJgSgPgLIgLgHQgBANAOATQAPATgCAUQgBAKgIAAQgDAEgKAAQgiAAgJg6QgNg8AaAAQAqAAAfAwQAXAmAAAdQABAqgjAaQgaATgXAAQgrAAgcgZgAhbgaQgOgTABgTQAAgKACgHQAHgOARABIALAAQgWAwAZAhIgEAIQgMgGgLgPgAgygcQgNgFAAgMQAAgyAZgJQANgEAUAFQgJAJgGAgQgEAbACALIADAJQgEgDgbgKg");
	this.shape_3.setTransform(2.3,-59.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373D48").s().p("AgkADQgTgfgVgQIA+ghQA0AiAMARQALAQAQBCQgZAIg7AOQgGglgXgmg");
	this.shape_4.setTransform(-1.3,-18);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AlzCYQgbgdgFgRQAJABAqgHQAqgHAHABQAIABBlgbQBlgaAKgHQAJgGAXAxQAQAjAIAjQgKACh5APQh9AOgtAJQgRgIgagcgAA3ATQgTgWgkgUIBUhHQAPgQAfgpIAcgkQA5AABHAkQApAVBNAsQgXAqheBAQhdBAg0AOQADAAg2ASQgHg8gdglg");
	this.shape_5.setTransform(-0.9,-24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AgPAGQg3gUhFgIIgEg5QA9AEAiAJQBMAWB0BDIgkA4Qg7gvhAgag");
	this.shape_6.setTransform(29.6,-42.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E4E6").s().p("AAeCGIgjgNQgKgEhSgIQgYAAgGgHQgGgHgcgoQgKgNgcgYQgZgUgBgCQAcgGAVAAQAoAAAWAKIAUAKIAQAAIACgNQgigbgggRQgjgSgxgNIAMgIQALgGAUgFQAUgGALAAQALAAA7APIBYAXIAlA7QAFg1hChEIgygvQgXgXgDgKIABgFIASgBQAsAABGA0QBaBDAWBfIACgSQAAgRgQg2QgQg2AAgFQBUAOASB8QARB2g6BpQh3hBghgPg");
	this.shape_7.setTransform(26.6,-63.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AjhDEQAMgYAAgIQAAgFADABQABAAAAAAQABAAABAAQAAgBABAAQAAAAAAAAIADABIAGAEIACAAQA9gDAxgTQAygUBig9QAxgeAWhBQAPgsAAgtIgHguQgHgugEgMQBTgFAxgxQAGAzAAA0QAABmgXA9QgWA4g2A2QhKBJhqAxQh5A2iJALIArhWg");
	this.shape_8.setTransform(-1.3,-38.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3E4E6").s().p("AgzBVQgRgOAAgVQAAggAPgKQAHgFAIABQAPAAAKAIQALAKAAASQAAAHgJAIQgKAJgCADIABADQABACAHAAQALAAALgOQARgSgOgXQAgAPALAAQAdAAAKgSQAFgIgBgIQAAgUgMgTQgOgYgZgDIgOgEQAJAUAWASQAPANAAAWQAAAGgMAEQgIACgLAAQgSAAgXgVQgYgZAAgfQAAgdARgIQAOgJA+AeQAlAiAJAMQANARAAAXQAAA1gqAaQgfATgrAAQguAAgXgTgAh1gPQgQgSAAgRQAAgJAEgGQAJgOAaAAQgEATAAAKQAAAKAFAOQAHATANAHIgEAJQgYgJgQgPgAhEgPQgLgEAAgZQAAgqALgJQAGgGAngCQgNAQAAAfQAAAIAGARQAFAMAEAIIgvgEg");
	this.shape_9.setTransform(6.8,-79.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AhjAoIgEgIQAUAFARAAQBvAAARhuIAAgJQAXAOALAcQAIAUAAAUQAAAPglAdQgyAnhDAAQgVAAgcgrg");
	this.shape_10.setTransform(15.8,-71.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AkYGVQCJgLB5g2QBqgxBKhKQA2g1AWg6QAXg+AAhjQAAg0gGgzQgxAwhTAGQAEAMAHAuIAHAuQAAArgPAsQgWBCgxAeQhiA+gyAUQgxATg9ADIgCAAIgGgEIgBgEQC1gvBGg3QBUg/AAhyQAAhNgOgWQgFgIgIgCIgLgDQgfgRgIgcQgEgNgSgMIgWgTQgIgJgCgGQgHgSAGgeQglgGgRgdQgMgUAAgVQAAgYAWgLQAMgFAagJQAIgEALgKQAMgIAsAAQAsABA0AdQA0AeAHAvQAWADAQARQAgAhAAAwQAAAFgGAKQgHAJAAAFIAHB3QAAB5ggBHQgjBLhdBDQhTA9g7AaQhoAriQADgAA6ikQAdArAVAAQBFAAAxgnQAlgdAAgPQAAgWgHgUQgLgcgYgOIABAJQgSBwhxAAQgQAAgUgFgAAPkaQgPAKAAAhQAAAUARAPQAXATAwAAQArAAAfgUQAqgaAAg0QAAgZgNgSQgJgMglghQg+gegQAIQgRAJAAAcQAAAfAaAaQAXAWASAAQALAAAIgCQAMgDAAgHQAAgXgPgNQgWgSgJgVIAOAFQAZACAOAYQAMATAAAUQABAKgFAJQgKARgdAAQgLAAgggOQAOAXgRASQgNANgLAAQgHAAgBgBIgBgDQACgEAKgJQAJgHAAgHQAAgSgLgKQgKgJgPAAIgCAAQgHAAgGAEgAg7llQgEAGAAAJQAAASAQARQAQARAYAJIAEgJQgNgJgHgTQgFgNAAgLQAAgKAEgTQgaAAgJAOgAAAmCQgJAIAAAqQAAAaAJAEIAvADQgEgHgFgNQgGgQAAgJQAAgfANgQQgnADgGAGg");
	this.shape_11.setTransform(-0.1,-50.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373D48").s().p("AAMA1QgTgCgYgHQgUgGgEgCQgFgDAAgHQAGhPAYAAQAUAAAaAHQAfAIAOAAQgQAYgIA9QACAHgQAAIgLgBg");
	this.shape_12.setTransform(-2.6,-4.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#758A51").s().p("AAFBhQgHgGACgHQAAhDAggLQAJgDATgBQASAAAHgCQABAOgHALIgKAKIACAAIABADQAAABAGAAQAVAAAAgiQAAgKgEgPQARAFAygJQAxgKALgIQAEAWAAAOQAAAzgfAeQgjAjhMAAQg+AAgRgNgAjUAoIgCAAIABACIgMAAQADgfAEgcQAIg8AKgUIABgCIAFgKIADAAQAAAAAAABQABAAAAABQAAAAAAABQABABAAAAIAAADIgCALQAGAaAeAXQAeAXAkAFIABABQgLAJgKARQgPAcABAdIAAABgAjfAsIALAJIgCACg");
	this.shape_13.setTransform(2.3,-8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#526139").s().p("AhIAzQgTgJgGgZQAqAJAHAAQAtAAAmgaQAmgZAMghQAEAHAGAQQAGATgFAgIgCAAQAHAFgVAQQgcAWhCAAQgpAAgRgIg");
	this.shape_14.setTransform(15.7,-18.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3E4E6").s().p("AhIBZQgagQAAgWQAAgDAIgRQAJgSAGgEIAGgHQAFgCAGAAQASAAAGADQAKAGgBAQQABAOgMAIQgQAIgGAHIABAEQACACAHAAQAcAAAJgRQADgGADgYQAZAVASAAQAaAAAOgQQAKgNAAgQQgBgjgcgPQgLgHgBAJIAOAYQAGANABAOQgBAPgWAGQgDACgKAAQgPAAgNgVQgLgSAAgWQAAgLAHgTQALgXALAAQAoAAAdAeQAdAdAAAhQAAAngnAiQgmAhgpAAQgtAAgdgSgAh3g5QAAgHAGgJQALgOAUAAIANAAIgSAkQgEAMAAALQgBAIADAFQACAEADAAIAEADIgHAIQgggIAAgxgAhAgTQgKgGAAgIQAAgIAGgPQAIgRAMgQQAIgMAMgDQAMgEANAGIAIAEQgMAKgLAdQgKAdADASIgDAAQgYAAgMgHg");
	this.shape_15.setTransform(11.4,-28.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ah0C9QhRgZgcgSIACgCIgLgJIgCgCIAMAAIgBgDIACAAIBZAgIAAgBQgCgeAPgbQALgTALgJIgBgBQgkgGgegWQgfgXgFgYQAzAoBZAXQA+AQAtABQAVgBACgDIAEgKQgNADgWgVQgQgPgIgPQgIgMgXgVQgSgQAAgOQAAgLAQggQgVgOgKgZQgFgNgCgMQAAgIAKgRQALgRAIgDQAMgGAUgDQAWgDADgCQAQgJAJAAQBQAAAtAmQApAiAAA1IAAASQACALAFAJQAEAJAEANQADANAAAHIgMAvQABAtgBAWQgCAlgMAYQgfA8h8AAQhGAAhmgfgAAxBdQgTAAgJAEQgfAKABBDQgFAIAJAGQAQANA+AAQBLAAAkgjQAfgeAAg1QAAgOgEgXQgLAJgxAJQgzAKgRgFQAEAPABAMQgBAigUgBQgGAAAAgBIgCgCIgBAAIAKgKQAGgLAAgPQgHADgSAAgAh5CfQAAAHAGADQADACAUAGQAYAHAWADQAbACgDgIQAJhAAOgYQgNAAgegIQgdgHgTAAQgYAAgHBRgAAwAuQARAJAqgBQBEAAAcgVQAVgRgHgFIABABQAGgggHgTQgFgQgEgHQgMAhgmAZQgpAagsAAQgHAAgrgJQAHAZASAIgAAJhjIgHAHQgDAEgJASQgJARABADQAAAWAXAQQAeAQAvAAQApAAAmgfQAnghgBgnQAAgkgcgcQgegfgoAAQgLABgKAWQgJAUAAAKQAAAWAMAVQANAUAPAAQAKAAAEgCQAWgGAAgRQAAgOgHgNIgNgXQAAgKALAHQAdAPAAAjQAAASgKANQgNAQgaAAQgSAAgbgVQgEAYgDAGQgIARgdAAQgHAAgCgCIAAgEQAGgHAPgHQAMgJAAgOQAAgQgJgGQgHgFgRAAQgHAAgEAEgAghiwQgGAJgBAHQABAxAgAIIAHgIIgFgDQgCAAgCgEQgDgFAAgIQAAgLAFgMIAQgkIgMAAQgUAAgKAOgAAxjPQgMAEgIALQgLARgIAQQgGAPgBAJQABAHAJAGQANAIAbgBQgEgRALgdQALgdANgLIgKgEQgIgEgHAAQgFAAgFACg");
	this.shape_16.setTransform(3.4,-18);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AjwDsQAGhQAJgoIAFggQAPAMAHAAQB7gXAxgUQAhgOAwggQAmgZAVgTIACAlQAWgrAAgnQAAgNgIgSQgMgfgdgVQAjgRAkg1QBRBpAABIQAABFhZBNQiCBwkBAkg");
	this.shape_17.setTransform(0.9,-25.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#526139").s().p("AgiAkQAJgcALgIQAZgZAGg0IATARQARASAAAPQAAANgsAsQgoArgIADIgNACQAJgLAJgfg");
	this.shape_18.setTransform(12.1,-51.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3E4E6").s().p("AgSBNQgagaAEgWIgBgNQgIAaAAAKQAHAeAIAMQgOAEgGAAQgUAAgSgVQgRgUAAgRQAAgRAUgxQgHABgeAzIAAgPQAAgdAageQAkgnBIgQQAzgIAlAWQAfASAAASQAAAVgXAiQgaAngeANQABAEAVgDQgEAUgDAJQgJAWgOAAQghAAgZgdg");
	this.shape_19.setTransform(-0.7,-53.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).wait(1));

	// Layer 1
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ai1FQIgbgBIgCgQQAGgsAAgNIAQg6QAIgMAxgHQA8gJAOgHQBTgpAvg8IAAgWQgGg7gYgOIgUgKQgLgIgFgQQgDgKgBgXIgegTQgfgUAAglQAAgFAEgMQAEgMgBgFQAAgFgLgIQgMgJgEgEQgEgGgFgTQgGgSABgEQAAgdAagOQADgDARgBQAQgCADgCQAKgIAJAAQAVAAAkANQA0ATASAhIAVArQAMAbANAQQAXAbADAHQADAHAAAUQAAAFgEAJQgFAJABAFQAAAHAJAeIAJAdQAHA1AAAfQAAB0hsBTQhtBUieAAIgRgBg");
	this.shape_20.setTransform(-0.3,-38.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AmCGVQgRgJgagcQgbgdgFgRQAIgOAagGIA/gIQB0gQBrg7QCQhQAzhBQAfgnAAgsQAAhShyhRQAOgcAzAAQAHAAAbAHIAgAIIhtgyQgTgJAMgWQgCACAGgLQANgQA1AAQBXAAA4AZQgYgNgggnQgmguAAgRQAAgYAkAAQAqAAAbAWQANAHAQAMQAgAXA3A3QgGgPAAgKQAAgKAEgRIALgBQAHgCAGAAQAqAAAjA3QAlA6AABTQAAEGkBCdQjYCEkuAAQgkAAglgBg");
	this.shape_21.setTransform(4.8,-46.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AkYGVIArhWQAMgZAAgHQAAgFADAAQABAAAAAAQABAAABAAQAAAAABAAQAAAAAAgBIADACIgBgEQC1gvBGg3QBUg/AAhyQAAhNgOgWQgFgIgIgCIgLgDQgfgRgIgcQgEgNgSgMIgWgTQgIgJgCgGQgHgSAGgeQglgGgRgdQgMgUAAgVQAAgYAWgLQAMgFAagJQAIgEALgKQAMgIAsAAQAsABA0AdQA0AeAHAvQAWADAQARQAgAhAAAwQAAAFgGAKQgHAJAAAFIAHB3QAAB5ggBHQgjBLhdBDQhTA9g7AaQhoAriQADg");
	this.shape_22.setTransform(-0.1,-50.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ah0C9QhRgZgcgSIgLgNQADgfADgeQAJg8AKgSIABgCIAFgKIACAAQABAAAAABQAAAAABAAQAAABAAABQAAAAAAABIABADIgCALQAzAoBZAXQA+AQAtABQAVgBACgDIAEgKQgNADgWgVQgQgPgIgPQgIgMgXgVQgSgQAAgOQAAgLAQggQgVgOgKgZQgFgNgCgMQAAgIAKgRQALgRAIgDQAMgGAUgDQAWgDADgCQAQgJAJAAQBQAAAtAmQApAiAAA1IAAASQACALAFAJQAEAJAEANQADANAAAHIgMAvQABAtgBAWQgCAlgMAYQgfA8h8AAQhGAAhmgfg");
	this.shape_23.setTransform(3.4,-18);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Aj3E+IACgFIgFgBQAGhQAJgoIAFgfQCRgMBqhGQAogaAZgcQAVgYAAgLQAAgKgIgOIgKgVQgJgPgSgKQgNgHgSAEIgQAGQgKABgVgIQgYgIgEAAQgFAAgJAEQgJAEgFAAQgvAAgcgpQgYgiAAgmQAAgbAkgpQA1g7BYAAQAIAAAfAKQAkAKAOAKQAtAfAPAPQARASAAASQAAAEgGARIgGARQBGBvAEALQAEAIAHAeIAGAcQAAAugWAmQgVAjgwApQhJA/h+AuQhyAqhBAAQgOAAgPgHg");
	this.shape_24.setTransform(1.9,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_pupil_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgQAXQgHgKAAgNQAAgLAHgKQAHgKAJAAQAKAAAIAKQAGAKAAALQAAANgGAKQgIAIgKABQgJgBgHgIg");
	this.shape.setTransform(0.1,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.4,-3.1,5,6.4);


(lib.CUP_34_pupil_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOAVQgHgJABgMQgBgLAHgJQAGgKAIABQAJgBAGAKQAHAJgBALQABAMgHAJQgGAJgJAAQgIAAgGgJg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.1,-3,4.4,6.2);


(lib.CUP_34_leg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgFBFQgRgQAAgfIAAgEIgLg9QgFgkAGAAQAwgCAHARIAFAvIAIBNQAAAIgDAEQgFAIgQAAQgHAAgKgLg");
	this.shape.setTransform(1.8,14.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgiAKIAAgTIBFAAIAAATg");
	this.shape_1.setTransform(0.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AghBlIgOhzQgFgigJgnQAMgFAngIQAvAAAZAPQgMAlAAA6IACBbg");
	this.shape_2.setTransform(-0.2,-9.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgWCyQgJg8gFgXQgMg9gMhOQgQhnAAgmQAAgKAHgWQADACACAEQAMgFAngJQAwABAZAPIAAgCQANAXgCAuIgEDCQAAAPAFA0IAFA6QAAAigSAKQgJAFgUgBQgmAAgOgvg");
	this.shape_3.setTransform(0,2.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-20,15.6,45.2);


(lib.CUP_34_handle = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92B9BB").s().p("AjgI1QgWgLgUACICVgeQBBgNALgHQA5gjASgSQAQgVATgTQBAhBA3jGQA2jDAAikQAAhagNgtQgIgbgXgxQgZhFgtgiQgwgkhKAAIAbgFQAagFAHAAQAUAAAeAQQAkATAfAhQBUBdAACgQAAF4h3DcQh5DejSAAQggAAgJgFg");
	this.shape.setTransform(2.5,0.3);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AjJI1QgVgLgVACQgRgJgEgHIgGgBQgKgCgKgpQAAgRAOgMQANgMATAAQARAAAPAIQAPAHAYAAQCtAABZi7QBYi2AAlJQAAhhgSgqQgfhIhcAAQgkAAg5AYQg5AZgVAAQgFAAgGgJQgGgIAAgFQAAgaAUgWQAmgpBxg7IAGADIABgBIADgBIAcgFQAagFAGAAQAUAAAeAQQAlATAeAhQBVBdAACgQAAF4h4DcQh5DejRAAQghAAgJgFg");
	this.shape_1.setTransform(0.2,0.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(15,16,18,0.2)").s().p("AAAAAQAKgCAJAAQgTACgSADQAGgDAMAAg");
	this.shape_2.setTransform(5,-59.3);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ai5JSQgTABgEgBQghgFgegXQgsghAAg0QAAgNAIgMQAQgWAmAAQAFAAAZAFQAYAFAFAAQCRAABPhuQB6imAAmgIABgeQAAgfgIgYQgXhNhVAAQgtAAg/AWQg+AWgFAAQgLAAgJgIQgOgNAAgZQAAg0A5grQAdgVBzg+QAGgDAMgCQAMgCAJABQCBAHBDCBQA0BjAAB/QAAGdiMDdQh9DFjMAAQgMAAgUgDg");
	this.shape_3.setTransform(0.1,0.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.5,-59.6,63.4,119.6);


(lib.CUP_34_hand_01 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B3E4E6").s().p("AgkBWQAAgRAWgpQAUgoAAgEQgCgDAAgDQgNAAgWArIgDAFQgIAGgMARQgWAbgOADQgEgCAAgHQABgOAWgiQAYgiACgJQgZATgRAVIgLASIgGAAQgNAAgFgLQgEgFABgFQgBgQAzgfQAngYAKgVIADgDIAFgFQATgUAJAAQAeAAAXAfQAJALAGALIAAABIABACQAHAIANAMQAbAZAAAGQAAARgRAAQgQAAgUgPIgMgJIAAAAQgBgKgJAAQgkAAgKA6IgFAqQgFATgKAAQgUAAgBgTg");
	this.shape.setTransform(0,-1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvBsQgGgJAAgMIAAgCQgOAMgWAAQgPAAgEgLQgCgFAAgJQAAgHACgHIgDAAQgTAAgJgUQgFgMAAgJQAAgRAMgMQANgQAegRQALgIAZgZIAGgFIAFgLIAAAAIABAAQAZgnA0ASQAaAJAUATQAPAOAEAMIAAABIAAABIABAEIAFAEQAlAlABARIgEAUQgIASgZAAQgZAAgTgYIgJgNQgDAEgHAGQgQASgJAdIAAAfQgGAdgiAAQgRAAgKgNgABMgxIACADIgBgDg");
	this.shape_1.setTransform(0,-1.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-14.4,-13.4,29.1,24.4);


(lib.CUP_34_foot = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("Ai/ALIgBgLQAAgEAGAAQAFAAAAgCQAAgFABgEQBYAjEWgXQAAADAHANIgyABIgwACIkegFg");
	this.shape.setTransform(-0.1,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373D48").s().p("AigAmQAIgpAFgIQAYgjBLAAQAwAAA0AXQA0AXAXAAQAUAAAAgMQAAgHgKgCQgYgHgSgHIA2AKQAAAGANBAQg6ACg+AAQilgEglgFg");
	this.shape_1.setTransform(-0.3,-1.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AiUBSQhBgEAAgOQAAgdAkgwQAGgBAJgKQAPgTAGgGQAmgjBNAAQARAAAeAKQAgAJAMAAQAFABAJAEQAJAFADAAIBQAPQACAUgFAOQAAAHAaAZQALAKAIAfQAAAFABAEIgGAAQhfAJgKAAQjGAAg1gDg");
	this.shape_2.setTransform(0.1,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-8.4,43,17);


(lib.CUP_34_eye_03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B7B7B9").s().p("AgyCxIAKgKIAogpQA5hCAAg/QAAg0gkgxQgqg+hRgIIAOgCQApgBApAPIABABIAMAFIAFACIAAABIAAgBIATAKIAMAHIABAAQAUAOANATIAEAGQAIANAEAQQAKAeAAAeQAAATgDAVIgBACQgIAwggAnQgmAsg1AKIgSADg");
	this.shape.setTransform(4.8,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7070FF").s().p("AingDQA1hTB2gOQBWgHA3A+IgFAGIgKAKQgfgVgkgHQgPgGgHADQgvgEgwAOQgwAPgnAiQgnAfgQAyIgFARIgBAFQAEg7AfgugADCAsIACgBIAHAZQgEgNgFgLgACYgLQAGgEAFgGIAKARIANAXIgFADQgMgTgRgOg");
	this.shape_1.setTransform(-3.8,-13.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgtCvIgDAAIgHgCQg2gKgkgpQgcgggJgpIgDgVIAAgBQgBgTACgQQAFglAUgiQAagtArgaQAZgPAcgHIABAAIABAAIAQgDIAOgCQAngBApAPIABABIAOAFIAFACIABAAIATAKIALAHIABAAQAVAOANATIADAGQAIANAEAQQAKAeAAAeQAAATgDAVIAAACQgJAwggAnQgmAsg3AKIgRADIgBAAQgRACgQAAQgVAAgWgDg");
	this.shape_2.setTransform(-3.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#759396").s().p("Ag1AHIgBAAQgcgJgBgKIABgFQAGgBAgAJQAiAJAcAAQAagCAPgFQAIgCAKgFQAEABADACQgDAFgGAFIgHAEQgTANgdACIgRAAQgfAAgZgLg");
	this.shape_3.setTransform(-3.1,24.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(31,33,38,0.322)").s().p("AACAAIgEAAIgCAAIgGAAQAIgCANADIgJgBg");
	this.shape_4.setTransform(1.4,-19.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#92B9BB").s().p("AiyAYQgngTgKgRQAKAJAXAKQAXANBEALQAKAKCyABQBNgUANgTQAagPAXgsQAEACAAAJQAAAfgsAcQg+Arh5AAQhvAAhEghg");
	this.shape_5.setTransform(0,11.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7070FF").s().p("AgjCuQhogYgggLIgJgEQgKgDgFADIgBAAIgIg7IgEgoQAAhDAkg3QA1hTB3gPQBugJA6BqQAnBGAABDQAAAIgBAJQgMAQgQAfQgSAbghAlQgGAAgDACQgMACgYACQAlgnAzhWQgBgJgLAAQgQABgrBHQgLAPgtAwQgggDgugIgADRBnIgBADQABAZgFAOIgIAIIgEABIgYANQAUgZAVgng");
	this.shape_6.setTransform(-3.3,-5.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 4
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah3DhQg0gOgjgoQgRgTgLgZQgNgZgFgcIAAgDIgBgDIABhEIABgIQAEg7AfgwQA2hSB4gPQBUgHA3A+QAXgaADgOQAUhHAABFIgOAqQgHAOgIAKIALASIAMAZQAagSARgWQASgWALgiQADAEACAHIACAJIgWAzQgVAngaAJIAIAZIAEAOIAPgGQAigQAFgGIATgaQALgPAJgIIACAAIAAADQAAASgVAgQgbAogrAEQAGAcgCAgQgDA2giApQgMAPgOAOQgMANgQAJIgCACIgIAEIgRAJIgQAIIgqALIgGABIgBAAQgQABgPAAQglAAgjgJg");
	this.shape_7.setTransform(0.9,-2.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiqCtQgogUgJgSQgGgHAAgFQAAgGADgCIgIg7IgEgoQAAhDAjg3QA2hTB4gPQBsgJA7BqQAnBGAABDQAAAIgBAJQANgTAIABQAFAAAAAFQgLAagMAXIgBADQAAAZgEAOQAygzAAADQAGgBABAHIgDAIQADACAAAJQAAAfgrAeQg/Arh4AAQhwAAhDghg");
	this.shape_8.setTransform(-0.7,-3.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7}]}).to({state:[]},1).to({state:[{t:this.shape_8}]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-26.1,50.9,52.9);


(lib.CUP_34_eye_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("AAACMQAog7AAhOQAAhYhFgyQgfgVgmgRIAFAAQBIAAAsAaIARALQAJAHAIAJQAJAJAHALIACADIABABIAHANIAKAkIAEAQQACAMAAANQAAAVgEAVQgJAyggAlQggAlgvAOQAMgLANgXg");
	this.shape.setTransform(5.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AgQAPQAQgpAAgqQAxgCAKgLQgBATgDASQgKA2giAjIgJAIQgYAVgkAIQAZgXARgsg");
	this.shape_1.setTransform(9.4,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFCFCF").s().p("AAACXQAbg1AAheQAAhMgbg0Qgagsg8gwIAHABIBIAdIACABIACADIADACIAAABIABABIADADIACACIACACIACACIACACIACACIAIAIIACACIABADIAEADIACAEIACACIABACQA1BGAABOQAAAXgCAUQgDAcgGAXIgIAVIgGANQgNAagTATQgeAegqAHQAfgnALgbg");
	this.shape_2.setTransform(4.1,-1.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFCFCF").s().p("ABTBuQAVgFAPgnQAIgUAEgqQAAgQgGgWQgGgbgKgNIgOgRQgBgCgTAIIgpASQhSAihNAhQgiAOgcADQgCgJAAgIQAAgKAagPIAIgEQAngWBVgeIAEgBQCNgyAaAAQANAHAMAUQAZAnAAA8IAAADIgBAQQgEAtgZAeIgCACIgBABIgCACIgCACIgBABIgEAEIgIAGQgJAGgKAFQgXALgdAFQACgUAMgDg");
	this.shape_3.setTransform(-4.5,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7070FF").s().p("AiPgXQA+hPBtAAQAzAAArAZQAUANAQAQIgSATQgughg/AAQhhAAhBA8QgyArgMA+QAFhGAtg4gACqgDIgJgJQAIgGAHgFQAKAQAGASIACAGIgEADQgJgNgLgKg");
	this.shape_4.setTransform(-4.8,-13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiICEQgmgigJgxQgCgOAAgPIAAgCQAAg5Apg9IAHgKIACgCIAKgNIADgDIADgDIACgBIAHgHIAEgEIABgBIADgCIACgCIADgBIAJgGIAAgBIAEgCQAhgSAogBIABAAIAFAAQBFAAAuAaIARALQAJAHAIAJQAJAJAHALIACADIABABIAHANQALAXAEAdQABAMAAANQAAAVgEAVQgJAygfAlQggAlgyAOQgOAEgQACQgDgCgEAAQgEAAgIAEIgBAAIgLAAQhUAAgzgug");
	this.shape_5.setTransform(-3.4,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#759396").s().p("Ag1AGQgUgIgKgOIABgFIAlAMQAlAJAKABQAQABAcgDIAfgFQAKAAgEAEQgLAIgSAIQgUAIgQAAQgoAAgfgQg");
	this.shape_6.setTransform(-3.3,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(15,16,18,0.2)").s().p("AAAABIAAgBIAAAAIAAABg");
	this.shape_7.setTransform(14.5,-6.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7070FF").s().p("Ai9CKIgCgLIADALgAi+A/IgUAAQACgLAJgXQAOgkAYghQBHhhByAAQA0AAAqAZQA0AeATA8IAPAwQgQAOgmAaQAFgIALgcQALgeAAgFIgCgQQgBgIgCgCIgPAkQgNAggrAlIhlABIgHAAQhwAAhHgMgAC9AhIACAAIAAgDIgCAAgAC0BLIAIgEIAQgKQAFAAgDAGQAAAAAAABQAAABgBAAQAAABAAAAQABABAAAAQgLABABADIgQAAgADTA1IAAABIgBAAg");
	this.shape_8.setTransform(-4.4,-10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#759396").s().p("Ag8AGQgOgGgMgPIABgGQAJAAAeAMQAfALAoAAQAFAAAWgCQAXgFAFAAQAKAAgEADQgLAIgTAIQgUAIgRAAQgyAAgdgQg");
	this.shape_9.setTransform(-3.8,23.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AiZAdIgBgBIgCgBIgBgCIgbgrIgGgRIgDgLIgDgkIACgKQBwARBlAHQBLAGAsgBQAxgCAKgMQgBAUgDARQgKA3giAiIgKAIQgZAWgkAIQgYAGgcAAQh5AAg6hAg");
	this.shape_10.setTransform(-4.3,7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(15,16,18,0.2)").s().p("AAAAAIgBAAIABAAIACABIgCgBg");
	this.shape_11.setTransform(-22.1,8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#92B9BB").s().p("AioANQgjgOgNgRQAaAYBhAMQBKAKBRAAQBDAAArgdQAXgQAUgcIAAABIACAEQgfBWicAAQh9AAhJghg");
	this.shape_12.setTransform(-0.7,12.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7070FF").s().p("AhSCjQhLgSgZgKIgCgCIgDABIgHABIgCACQgLgcAAhJQAAhNAzhAQA+hPBsAAQBOAAA3A+QA8BHABB3IAAABQgQATgYAiQgoA6ghADIgLABQAJgHAagjQAdgqAYgpQgDgJgKAAQgDAAgzBEQgxBDgMAAQgjAAhbgWgADMB1QgFAcgLAOQgJAFgKADQASgUARgeg");
	this.shape_13.setTransform(-3.5,-5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7070FF").s().p("ACwB6IgBgEIADAAIABAPIAAANIgDgYgACoBNQgFgOgHgOIgCgFIAHgFQAIAcAFAZIgDABIgDgQgAB3gXQAIgHAGgIQALAcAJAXIgFAFQgGgTgXgWgAicguQA4hjBkAAQAsAAAkAcQAYATAPAcQgJAQgLANIgRgMQhDgvguAAQhJAAg6BNIgQAXQAJgYANgWg");
	this.shape_14.setTransform(-2.7,-16.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#759396").s().p("Ag0AHQgZgPAAgMIAAgHQBOAdAQABQAQAAAtgGQgKANgSAJQgRAJgQAAQgmAAgfgVg");
	this.shape_15.setTransform(-4.4,28.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ah4ChQgvgxgIhRQgCgRAAgRQAAhNAxhCQA1hHBJAAIABAAIABAAIADAAIAHABIBIAdIACACIACACIADACIABABIACABIADAEIACACIACABIACACIACACIACACIAIAIIACADIABACIAEAEIACADIACACIABACQA1BHAABNQAAAXgCAVQgDAbgGAXQgGATgIAPQgNAbgTASQggAegqAHQgMACgNAAQhYAAg2g5g");
	this.shape_16.setTransform(-4.9,-1.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#92B9BB").s().p("AgKARQgsgNAAgWIAHgJQAJAOATAJQAeANAsgJQgBACgBAKIABAPQgmgBgagJg");
	this.shape_17.setTransform(-31.9,1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#7070FF").s().p("AEAB7QgHg4gGgNIgCgHQAHAEAKABQAHAYAAAUQAAAXgJAMIAAgIgAj2BaIgSgGQAFgJAigLQA1gQAmgnQBRhSALgJQA2gwAzAAQA3AAAeAYIAKAKQgNAogGAKQgLAQgNAJQgYARgtALQgcAJhsAuQhXAkgcAAQgOAAgbgIgADpAVQgMgNgOgKQANACAPgCIAOAdQgKgCgGgEgACUgWQALgJARghIAEgJIAmAoIAGAKQgPAEgTAAIgqgDg");
	this.shape_18.setTransform(-8.4,-10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah5BkQg6gigIgzQgCgJAAgIQAAgKAagPIAIgFQAngVBVgeIAEgBQCNgyAaAAQANAHAMAUQAZAnAAA8IAAADIgBAPQgEAugZAdIgCADIgBABIgCACIgCACIgBABIgEADIgIAHQgJAGgKAFQgXALgdAFQgaAEgfAAQhKAAg7gjg");
	this.shape_19.setTransform(-4.5,2.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#759396").s().p("AglAOQgcgGgPgIIACgHQAJgEAHAAQAYALAmAAQAdAAAbgIQAOgEALgFQgCANgPAIQgUAOgnAAQgSAAgYgEg");
	this.shape_20.setTransform(-2.3,22.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#92B9BB").s().p("AiuAOQgWgLgOgIQAhALA6AIQA6AHBAAAQAKAABQgJQADAAARAZQgmAJgzAAQh9AAhJgggAB0AHIATgFIACAEIAOASQgLAFgMAEIgMgagACbgCIANgHIAVAHQgJAIgMAIQgGgKgHgGgAC+gXQAAgHgBAAIgJAAIgCAAIAGgFQAJgLAJABQAGAAABABIACAFQgFANgHALIgJgIg");
	this.shape_21.setTransform(-0.1,12.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#7070FF").s().p("Ah9CjQg4gRAAgMIAFgiIAEgiQAAgKgCADQgIASgTAuQgFgdgBg3QAAhNAzhAQA+hPBsAAQBOAAA3A/QA8BGABB3QgBA+gQAaIgSAFQgpAMgUACQgeAEhCAAQhMAAhBgTg");
	this.shape_22.setTransform(-3.5,-5.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("ABUBAQgEgSgFgHQgSgehMAAQiAAAhWAaQAAglAOgnIAAgBQANghALgGQgNAzAAATQAAAGADAIQCGgUAdAAQBdAAA0AMQAjAHAkARQAeAPAeAVIg2gTQAMAUABAIIgDAEIgHgHQgeghgfgHQAJAMARApQAAAGgBAAIgCAAQgRgegWgUQgSgOgNgCQAYAwAAAMQAAAGgBABIgCABQgHgEgFgOg");
	this.shape_23.setTransform(-1.4,8.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_23}]},1).wait(1));

	// Layer 4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ai6C+QhEg1AAhnQAAgWAEgSQAFhGAtg6QA+hPBvAAQAxAAArAZQAVAMAPARQAQgTAHgRIAPgmQAVA/gpAkQAKAQAGAUIACAGQAkgZAIgLQADgEAag2QAHALAAAJQgKAfgQAbQgVAlgWAHQAJASAFAUQAWgHAZgXQAagXAJgRQAJgJACAAQgKAugWAXQgWAWgkAFQAEASAAAWQAABUhAA8Qg/A7hTAAQhYAAg5gsg");
	this.shape_24.setTransform(0.8,-2.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AjBCkQhFg3AAhkQAAgGACgDIAEgNIAAAAQADgMAIgWQAPgnAYggQBHhiB0AAQAxAAArAZQA0AfASA7IAPAyIAKgJQADgFAZg1QAHAKAAAKQgGAWgYAqIgIAKIAAABQAngLATgWQALgMASgYQAJgJACAAQgLAvgZAZQgVAUgdAEQgGB0gwA3QgsAzhUAAQh4AAhEg1gAjkBNIgGgRIAAAAIAGARg");
	this.shape_25.setTransform(0,-2.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AioCuQgjgQgNgQQgJgJAAgMQAAgEABgCQgKgcAAhJQAAhNAyhAQA+hPBvAAQBLAAA3A/QA9BGAAB3IAAABQAOgQAHgEIAFADQgOAmgQAbQgFAcgKAOQAQgHAQgOQAZgUAKgVQAGACABAFQgJASgLAPIAAAAIACAEQgfBYicAAQh9AAhJghg");
	this.shape_26.setTransform(-0.7,-3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AiuDWQg/hFAAh5QAAhMAphDQAJgXANgXQA4hjBkAAQArAAAlAdQAYATAPAcQALgTAHgWQAJgaAFgaQACACABAMIABATQAAA3gUAgIgDAFQAMAbAJAaQAUgTANgVQAPgaANg0QAHANAAANQgIAegOAeQgTApgTAQQAIAcAFAZIAFgCQAYgKAPgSQAHgKAMgWQAMgZAFgIIACAAQgLA6gMAWQgSAggmAIIABAPIABANIAAAIQAACLhBA/QgsAsg7AAQhpAAg+hEg");
	this.shape_27.setTransform(-0.9,-4.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ah9CxQhKgmgHhIQgmgCgdgIQgrgNAAgZIAGgIIgDgHIAEgDIAJgBIAJAEQAFgHAigLQA1gQAmgoQBRhTALgKQA4gvAxAAQA2AAAfAYIAJAKIABgCQAJggAMAAQAHAAACADIADAHQAFAOgQAhIAmAoIAGAKQAdgJASgYQAFgGALgVQAHgLAFAAQAGAAADACIADACQAAAsgqAcQgSAMgQAEIAOAfIATABIBGgMQAKAAgHABIABAEQgNAPgiALQgWAGgPgCQAHAZAAARQAAAYgJAMQgFCgjLAAQhSAAhAgig");
	this.shape_28.setTransform(-5.6,-2.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AByCxIgCgBQgmAJgzAAQh9AAhJghQgWgKgOgKQgagLgKgPIAMgeQgGgdAAg1QAAhPAyhAQA+hPBvAAQBLAAA3A/QA9BGAAB3QAAA+gRAaIAVgFIAGgGQAJgKAJAAQAGAAABACIACAEQgFAOgHALIAiAgQAPAZABALIgCAGQgvgyAAgCQAAgFgLgFQgJAKgMAIQAIANAHAPQANAagCAIIgEAFQgJgRgWgeIgIgKQgLAFgMAEQAPAjAAANIgCAKQgFgVgVgfg");
	this.shape_29.setTransform(0,-1.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#759396").s().p("AgXAMQgkgUgIgXQAGAJA2ASQA5ARASAPIgCACQgCABgJABIgNAAQggAAghgUg");
	this.shape_30.setTransform(-15.4,16.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7070FF").s().p("ABUC4QgEgSgFgGQgSgehMAAQiAAAhWAZQAAgnAOgmQgIg1gBgHQAAhNAzhAQA+hPBuAAQCTAAAmCvQAOA8gHA6QgEAlgJAMQAeAPAeAVIg2gTQAMAUABAHIgDAFIgHgIQgegggfgHQAJAMARApQAAAGgBAAIgCAAQgRgfgWgTQgSgOgNgCQAYAwAAAMQAAAGgBABIgCABQgHgFgFgOg");
	this.shape_31.setTransform(-1.4,-3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.6,-26.1,51.1,51.9);


(lib.CUP_34_eye_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CFCFCF").s().p("AAjBOQAHgaAAgwQAAgUgKgjQgMgngOgMQgagYgTACQgPACgQgNQAQgEATADQAqAGAeApQAiAtAABDIAAAAQAABehAAVQAUghAIgbg");
	this.shape.setTransform(6.7,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CFCFCF").s().p("AgRgLIgCgoIAFgBIAfgIIAEgBQACAGAAAMQAAAOgCANQgGAogZAcIgMAKQAFgQAAg5g");
	this.shape_1.setTransform(14,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CFCFCF").s().p("AAWBRQAIgeAAgVQAAg/gthLQgWgjgWgZQAIgBAIAAQArAAAdAzQAfAzAABGIAAAEIgBAJIgCAeIgCAKIgZBEIAAABIgBABQgTAggXAMQAXgoAMgxg");
	this.shape_2.setTransform(7.3,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CFCFCF").s().p("AAUBkQASgSAJgTQANgbAAgkQhthSgrgPQASgGAaANIBZAvQAWALAMAJQASAMAAAHQAAA9guAeIgDACQgJAFgKAEIgFACg");
	this.shape_3.setTransform(4.7,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 8
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#759396").s().p("AgmAUQAAgEgGgDIgGgHQADgCAKABIARACQARAAAZgMQAOgHAOgJIABAGIgXAXQgTAOgZAAQgKAAgMgCg");
	this.shape_4.setTransform(5.4,21.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7070FF").s().p("AB8BrQAAhKgggvQglg6hFAAQgmAAgaAYIgNgNIADgDQAjguA1ACQA0ACAmAuQApAxgBBLQAAAcgDAMIgDAFIAAgCgAiCBSIABgdIABAAIACAAQgCANAAANIAAAWQgCgHAAgMgAh/AmQACgSAEgQIAGADIABAAQgHAPgDARIgDgBgAh0gLQAGgTAJgQIANAJQgIAJgHAMIgFAKIgIgFg");
	this.shape_5.setTransform(3.3,-5.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhUBaQgRgfgFgqQgBgPAAgOQAAhDAigjQASgSAVgGQARgEARADQAsAGAeApQAiAtAABDIAAAAQAABehBAVQgSAGgXAAQg5AAgdgzg");
	this.shape_6.setTransform(3,3.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#759396").s().p("AgyAEIgDgEQACAAANABIAUADQANAAAagIIAggNIABADQgPAYghAGQgGACgIAAQgXAAgTgOg");
	this.shape_7.setTransform(4.4,21);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIBNIgCAAIgCAAIgDAAIgBAAIgCAAQgpAAgdggQgZgbgIgrIgCgbIAAgBIAAABQB9gDATgBIACAAIAzgIIAGgBIAEgBIAigIIAEgBQACAGAAAMQAAAOgCANQgGAngbAcIgMAKIgCACIgFAEQgEgCgCACQgCABgCAFIgLAFIgUAHQgRAEgTACIgBAAg");
	this.shape_8.setTransform(4,8.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7070FF").s().p("AhcAqIgRglIgCgCQgCAEAAANQAAAGAGAUQAFASAEAJIAEAHQgPgFgVgbIgCgCQAJgzAagjQAigsAzAAQA/AAAvBIQAjA1AAAeIgBgCIgJAAIgsAEIhRAHIg+AFQgTgWgJgVg");
	this.shape_9.setTransform(4,-7.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhmAjQgegcgDgYQACgEADgBQACABAHAJIAWAZIAFAGIARAKQgFgEgMgZIgKgWIgPgkIAEgDQAEABAHALQAHAMALAXQAVAqAaAMIAMABIgVghQgTgfgQgfQADgFAEgDQAJAIAfAxQAdAuADAAQATgBA2gUIA/gXIACAAIABABIABAEQgBAehKASQg4ANg0AAQgZAAgegcg");
	this.shape_10.setTransform(0.5,9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#759396").s().p("AgcASQgMgHgEgLIADgCQANAFANABQALAAASgJIAegRIABAEQgJAWgNAJQgOAKgUAAQgIAAgJgFg");
	this.shape_11.setTransform(3.5,25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7070FF").s().p("AhnBsIABgBIgBAFIAAgEgAhmBZIAEgrIAEAEIgFApIgDgCgAhdAQQAEgSAFgSQAEAKAEAGQgHAMgGAQIgEgIgABhADQgjhLgyAAQgrAAgiAyIgLgWIAHgOQAihLAvAgQA6AJAbBaIAHAVIgHgQg");
	this.shape_12.setTransform(1.9,-11.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhJB7IgDgGQgGgLgFgNIgIgXIgFgbQgDgVAAgWQAAhGAeg0QAZgpAigIQAHgBAHAAQArAAAfAyQAeA0AABGIAAAEIAAAJIgDAeIgCAKIgYBDIgBABIAAACQgUAggZAMQgOAHgPgBQgqABgfgzg");
	this.shape_13.setTransform(2.9,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#759396").s().p("AgpANIgKgKIgCgDQACAAAOABIAUADQAMAAAagJIAggNIABAEQgLAQgQAIQgRAJgYAAQgRAAgKgGg");
	this.shape_14.setTransform(4.2,20.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgRBpQgrAAgZgeQgVgZgDgnIgBgPQAAgwAMgZQAJgUAPgFQASgGAaANIBZAwQAWALAMAIQASAMAAAHQAAA9guAeIgDACQgJAGgKAEIgFACIAAAAIgLADIgiAGIgEAAIgGAAg");
	this.shape_15.setTransform(2.9,4.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CFCFCF").s().p("AAxB6IAMgDQgGAEgEAAgAg6h6QAEAAAHADIgIABIgFABIACgFg");
	this.shape_16.setTransform(0.6,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#7070FF").s().p("AiYBUQAAgYADgUIAFgCQgGAmACAfQgEgIAAgPgABIA6IgCgBIgPgIIhWgvQg5gZgHgeIgEgYIgBgDQAbgaAjAAQAUAAAgAiQAZAZAaAkQAKARApAXQAgASAFAIIgLAGQgPAHgPAAQgQAAgYgKgAiNgFQAIADAHABIgFAHQgFAKgLAFQACgPAEgLgAiKgQQAIgYAMgSQAIAcASAMIgCAAQgHgCgEgBIgCAFIgKABIgVgBg");
	this.shape_17.setTransform(5.3,-5.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#92B9BB").s().p("AhOAYIAFgLQAjAIAUABQA7AAAvgWQAagJAMgQQgEAZggAPQgnAUhCgBQglABgagLgAhkAKIABgCIABgFIAMAEIgEALIgKgIgAh0gGQADABAEADIgCACIgFgGgAh8gdIgBAAIABgDIACgCIABAFIgDAAg");
	this.shape_18.setTransform(2.4,12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#7070FF").s().p("Ag9CLQgKgDgXgLQgRgIgHgCIgBgFQgBgOAAgUQgBhvAmg7QAigzAxADQAwADAkAvQAlAzABBGIAAALIgPgVQgDAVAJAlQAEAUgYATQgPAMgLAEQgbALgsAAQglAAgUgEg");
	this.shape_19.setTransform(2.1,-2.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ag2A9IANgxQgJAGgHALIgXAnQgCAEAAgKQAAgHAEgLIALgaQgLAGgMANQgIAJgDAFIgFAHQgCgEAFgNIADgKIgeAQQALgOAUgSQAVgOAlgGQAjgJAeAAQARAABKARQADgEAAgLQAAgJgFgjIgEgNIAPAjQAGAbABAlQgygXhFAAQgqAAgKAaQgGAPgHAWg");
	this.shape_20.setTransform(1.9,9.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_20}]},1).wait(1));

	// Layer 6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AA2C/IgPAAQg9AAgkgqQgigogFhKQgCgGAAgNIABgbQgagEgRgWQgKgNgKgbIAAgCIAcAfQAPARAWAFQACgSAEgQQgbgQgag3QAAgIAEgIQAFAXAYAaQANAOAMAHQAGgTAJgQQgSgPgIgVQgGgOABgVQgBgKACADIACACQAMAYAGAMQAIANAMANIADgEQAjguA1ACQA0ACAmAuQApAxgBBNQAAAagDAMIgDAFQgBB3hKAYQgKAGgKAAQgFAAgBgBg");
	this.shape_21.setTransform(0.2,1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhFCIQgkgsgEhcQgOgBgSgQQgZgXAAggQAAgKABAJIAgAmQARATAMACIAAgCIgEgGIgVgzIABgHIADgIQAEAWAUAaQAJg1AagiQAigsAwAAQBCAAAuBIQAjA2AAAeQAEAPAAAPQAABbg8AnQgpAcg/gBQgrABgdglgABPCKIALgFIAAAAIgLAFgABkB/IAAAAIAFgEIgFAEg");
	this.shape_22.setTransform(1,0.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#7070FF").s().p("AhnCEQgegdgDgaQACgDADgCQACACAHAIIAWAbQgEgMgBgYIgPgkIAEgEQAEABAHALQAChkAjg3QAigzAwADQAxADAkAvQAlAzABBGQAAA4gDAXIABAGQgBAehKASQg4ANg0AAQgZAAgegbg");
	this.shape_23.setTransform(0.6,-0.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AguC+QgtgxAAhvIADgXIABgEIgDAAQgOgFgSgiQgSgiAAgUQABAAAFAKIARAkQAJASAVANIAEgsQgSgWgWhJIABgIIADgLQAHAdAYAnIAKARQAEgVAFgRQgEgKgDgOQgJghAAgTQAAgRABgEIACADIAOAyIAIATIAGgNQAjhLAuAgQA6AJAcBaIAGAXQAWA4AAA2QAABngqA0QggAngxAAQgiABgeggg");
	this.shape_24.setTransform(0.3,-1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhtB1QgRgcgCgqQgDgIAAgPQAAgYACgTQgMADgRgHQgSgGgIgKQABgDACgBQATAJAQAAQALAAAIgEQADgOAEgOQgLgEgLgIQgbgTAAgVQAAgIABgBIADgEIADgCQAHALADAMIADASQAFAMAbADQAHgXAMgSIAAAAQgHgeAMgPQAKAKAEAMQAagZAkgBQASAAAiAjQAZAYAaAlQAJATApAXQAgASAFAIIAEgDQAKABgEAAQAAAAAAAAQABABAAAAQAAAAAAgBQABAAAAAAIAAAFQAAAKgTAKQgVALgWgGIABATQAABCgxAhQgSALgWAGQgGAEgEgBIgCAAQgUAFgVAAQg/AAgcgzgAAXCPIALgEIAAAAIgLAEg");
	this.shape_25.setTransform(3.2,0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhWC6QgBADAAgKQAHgrAFgTIgKgIIgeBHIgCgKQgCgMAXg7IgFgIQgDgBgEABQgMAMgcA2IgCgGQABgYASggQAQgbAFgBIABgCIACgCQgCgOAAgUQAAhvAmg7QAhgzAxADQAwADAkAvQAmAzAABIIAAALQAeAugWAfQgEAZggARQgnAThCAAQglAAgagLQgIATgPAxg");
	this.shape_26.setTransform(0.9,2.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7070FF").s().p("Ag2CkIANgxQgJAGgHALIgXAoQgCADAAgKQAAgGAEgLIALgbQgLAHgMAMQgIAJgDAGIgFAGQgCgEAFgNIADgKIgeAQQALgNAUgTQgCgEgCgWIgDgeQAAhrAhhCQAeg+AuAAQBOAAAiBnQAMAnACAoQACAngHAUQAGAaABAnQgygWhFAAQgqAAgKAaQgGAOgHAXg");
	this.shape_27.setTransform(1.9,-0.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#759396").s().p("AgWAbQgPAAAAgCQAQgRAbgPIAggTIgCAMQgCAIgTAOQgTATgRAAIgBAAg");
	this.shape_28.setTransform(9.8,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-18.1,32.4,42.2);


(lib.CUP_34_brow_02 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#455E5A").s().p("AgGAvIgYgFQAGhFgBgZQAnAGAKAHQAHAEAAALQAAAMgEATIgJAuIgYgGg");
	this.shape.setTransform(13.9,0);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587D74").s().p("ACEAxIgYgFIhCgEQgSgBhIAFQhKAFgVADIgCAAIAAABIgBAAIAAABIgBgDQgOgqgJgqIAMgCIgLgCQAGgGBBgGQA0gEAXAAQA4gCBQAFQApAGAKAHQAHAEAAALQAAAMgEATIgJAuIgagGg");
	this.shape_1.setTransform(0,-0.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVA7QhcAAg7ANQgGABgUgBIADAAIgDAAIgHgOQgKg3gRglIACgHQAJgkCyAAQDAAAAAAkQAAAzgIAiQgIAigNAAgAiSA1IACgCIgCAAg");
	this.shape_2.setTransform(0,-0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19,-7.9,38.3,15.7);


(lib.CUP_34_brow_01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#455E5A").s().p("AgCAuIgWgFQAIgwAAgPQAAgGgDgHIgGgNQANAEAOAAQANACAEALIAFAXQACAPAAAIQAAAIgFANQgFANgEAAQgGAAgIgDg");
	this.shape.setTransform(11.6,0.8);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#587D74").s().p("AAAApQhsgOgcAEQgHguAAgJQAAgOAHgKQAFgIADAAQAvAABLAHQBBAFAtAGIAOAAQAOADAEANIAFAWQADAQAAAHQAAAIgFANQgFANgEAAQgPAAhzgQg");
	this.shape_1.setTransform(-0.1,0);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBGQhBgMgpgDQgggCglAAQgVgFAAgrQAAgIAGhCQAAgRCkAKIAAAFQBmAJAaAOQAbAPAAAvQAAAcgOAVQgLARgKAAQglAAg5gKg");
	this.shape_2.setTransform(0.1,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.2,-8,32.8,16.2);


(lib.CUP_34_body = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C323C").s().p("AhnEtQgLgDAAgHQAAgJALgBIAWAAQAzAAA7gKIgGAbQglAIggAAQgpAAgQgFgAACC7QgegHAAgHQAAgPBCAIIALACIgFAaQgXgCgTgFgAAkA3QhOgOAAgKQAAgQBxAQIACAAIgEAYIgBAFIgggFgAAchtIgQgNQAAgRAwAGQAQACAOAEIAAAHIgDAWQgmgCgVgJgABDkFQhygaAAgIQAAgPAuAHQAjAGAwAPQAHADAaAEIgDAMIgDAMIgqgKg");
	this.shape.setTransform(91.2,-29.4);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F25").s().p("AgrgeQAMgJATgIIBHgjIgVB8IhgAoIAPhwg");
	this.shape_1.setTransform(79.6,54.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#596743").s().p("AHpE1IgBgMQAAgQAVicQAzgVAwgXIgeDGQABADgFAEQgGAEgPAGQgVAJgmAMQgDgDgCgFgAkvgtQgggugJgKQgQgQgWgRQgHgMgPgDIgWgOIgQgKIAFgZQB1AzA2BWQAJAOATAlQgKAFgMAAQgNAAgegogAIVg1QAIg1AJh7IABgKIANgHIBSgxIAPgLIAOgKQgcCegOBbQgbAPhEAYIgIADIADgcgAqihSQAOgWA1guQBJg+ATAAIA7AHIAAABIgFAJIgCAFQgDgEAAgDIAAgCQgHANgiATIg8AjIhXBKQgKAAgKgYg");
	this.shape_2.setTransform(22.5,51.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414B32").s().p("AhGBMQADgIAAgGQAAgcgRgSQBRgkBPgxIAIgHIABAZQAAAWhPA3IhBAsIgLAGg");
	this.shape_3.setTransform(86.4,15.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#98ADAF").s().p("AgnAHIgfgIIgHgDQAJgHAGgRQAGgPABgMQAZAJAeAOQAtAWAhASQAAAMgFAPIgHAVQgOgQhbghg");
	this.shape_4.setTransform(97.9,-72.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83A4A8").s().p("AL/H0IABgBQADgEABgFQALgWAZjNIAikYQAGgzAHhJIAMiAIALg9Qh3ghiPghQk+hIkQgGIgDAAQgDAVhBCVQhKCngYAAIgCAAQAIgCAFgHIABgEQgPgDiehEQAkgnAjg5QAVggAhg6QA5hcA5AAIHGAZIAaADQCbAWDDA3QDDA3BMAkIACgNQgFAvgoDnQgbCZgbC6QgSBxgWAQIgBABIgCABIgFAEIgGAEIgBABIgCACIgCABIgCABIgDACIhjAyIgJADgAwGj5IgEgNIgDgLQAHgGALgHQBggpCYg8QDFhNAXAAQAEAAARARIgcALIjWBSIiQBAQhhArgQACIgBgEg");
	this.shape_5.setTransform(0.7,-34.6);

	// Layer 2
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#95AEB0").s().p("AAABUIhDgMQgjgFgIgKQgCgCgCgRQgMhIAAguIABgJQASAEBeAKQBcAKAnACIgCAYQAAAUALBsIgoABQgvAAgogGgAhng5IAFBjIAAABIARAFQAZAIA4AGQA1AFAZAAQANAAADgUQAEgTAAgnQABgpgzACQgxAChjgPgAgLAFQgZgEgDgGQABgDADgBQBNAPAogBIAAATIhdgTg");
	this.shape_6.setTransform(-21.1,67.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("ACcAyIBUgIIB2gKQgCAbADBGQgwAHgxAFIgyADQgxAEAAACQABgWgIhOgAhDCVIAAhgICbAAIAABggAj/CGIhbgKQAAgVgHg5IAAAAICMAQIAlAEIABAUQgkgGhWgJQgKABgCABIgCADQgBADAAAHQAAANAVALQAkASBOAAIAAALIgSAAIgCAAQgRAAgpgFgAnmBkQgFgCAAgQQgKhHgDgLQAnANAjADIAbACIAJBqQhMgMgQgMgAG8A2QACgwAEgFQBAgOBogfQgDAPgDArQgDAtACAJQABAHgCgFIitAtQAFgLACgygApGBCQgagKg2ghIgBgXIgLhJQAqAWAjAMQAjALAAADIAAAGIgBAEQgBABADAhQADAkAEAUQgJgFgTgEgAKuguQACgMAQgNQAMgIATgJIBJgiIgVB7IhyAwQAMhGABgZgArzgVQgLgCgOgTQgOgSgNhYQAtAqAFACQAGADAFBHIAEAMIgDgBIABACQgBgBgKgDg");
	this.shape_7.setTransform(4.8,58.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#526139").s().p("Aj5DiQgGgGgBgEQgCgSAQADQARADABAOQAEALgRADIgBAAQgEAAgHgGgAhjBhQgjgkhYg8ICJAFQFiAADzhBQBpgdBqgyQBRglBRgyIAIgGIABAZQAAAWhPA4IhDAtIgKAGIAAAAIgQAJIh0A/QlLCik8AlQgPg2grgrgAr5giQiEhpAAhEIAAgEQBMA3A7AbQBfArEcBFQgdAOg5A0Qg1AygKASQiFhIhkhPgAj5BfQgHgGAAgEQgDgSARADQAQADACAOQAEALgSADIAAAAQgEAAgHgGg");
	this.shape_8.setTransform(5.4,31.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("Ak1FGQimghhOgfQhEgagzgYQgfgQgQgWQgIgMgCgIQgHglgPgyIgQg2QByA8A9AZQBRAiBtAbQAMADACAMIAEAQIAJADIAAAEQAAAeBuATQBSAOBIAAQAtAAAMgIQAEgDAAgLQAAgMgHgnIABAAQDDARDSgiQC2geCihAQAygVAwgXIgdDGQAAADgFAEQgGAEgOAGQgVAJgnAMQhHAWiEAgQiQAbhqAKQhWAHh7AAQh/AAjFgogABsCsIAAhlIArAAIAABlgAF+AmIA3gIIgLBwIgsAIgAoYBhQgBgBAAgBQgBAAAAgBQgBAAAAgBQAAAAAAAAIgCgkIgDg5QAWAEAFADQAFADAKBcIABAIQgfgKgEgDgAJ3AuQAFgsgBgSQgBgUAcgDIAVgDIgCAEIgNBoQgDAKgmALIAAAAQgBAAAFgpgAhEAwQABgGgBgDQgBgGgGAAIgqgFQgjgEh6gHIgIhnQAAgiAXhmIAFgZQB1AzA3BWQAJAOASAlIAAABQALAVAHAAQDPAAFFiKIAIgDIACgCIAGgCIDUhkIALgGIANgHIBSgxIAPgLIAPgKQgdCegOBbQgbAPhEAYIgIADIhSAcQh6AyjjAeQisAXh2AAQg7AAgBgJgAjmhDQghACAFAoIAIAOQANAMAXgBQANgCAGgNQADgJgBgKQgFghgeAAIgCAAgAjnjGQghACAFAoIAJAOQANAOAWgDQAOgCAFgNQADgJgBgKQgBgLgEgHQgHgMgOgDIgIAAIgDAAgArQALIgOhiIAwAaIADAWQAAAcAIAsQgrgRgCgFgAlbAIQg5gIAMAFQj0g+gtgcQgagQgngPQgegMgMgMQgfghglixIgCgKQA3BSEtCuIAEgFQABgCAAgHQAAgFAGgIQAOgWA1guQBJg+ATAAIA8AHIgBABIgEAIIgHAWQgGATgEAnQgEAogBAuQAAAuACAVIADAYIg1gEg");
	this.shape_9.setTransform(4.2,56.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#95BCBF").s().p("AAMAYIhxh6QAzgRBLBUQBHBYAGAHIgWAmQgFgIg/hGgABGBXIgBgBIgJgKg");
	this.shape_10.setTransform(-39.1,-79.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2F0F0").s().p("AlYCLQgFAAgjgwQgsg8gQgSIgtgwQgfgggWAAQgIAAgIADQgJAEADACIAAABQmKB1hQA5IAAgCIgCABIgOg3QBlg2Czg8QC4hAA/AAQAQAAA2A7IA9BEIA6BCQAVAZAFAAQAIAAAOgZQAcgzAlgxQBLhpAtgVQAigPB/AAQDAAAFDBBQCyAkCJAlQAPAEATAHQAYAJAfAMQAuAWAiAUQAAAMgFAPIgHAVQgOgQhdghIgfgKIgIgDIgMgDIjDgyQl9hYl0AAQg0AAgRARIhCBhQg7BZgWAfQgdAogFAAQgdgbgCAAgAkXAPIAMgPIgFAIQgFAHgCAAIAAAAg");
	this.shape_11.setTransform(0.2,-76.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3E4E6").s().p("AmhIVQijgniohcQhEgkgYgYQgcgdgKgvQgfiUg+jkIgDgIIgBgIIgDgKIgwirIgCgJIgBgDIgEgOIgEgLIgBgFIAUgIQBggpCYg8QDEhMAYAAQAEAAAQAQQAYAWAyA2QBTBcANAVQAcAuBFAmQBCAlAyAAIADAAQAHgBAFgIIABgDQgPgEidhEQAjgnAkg5QAUggAig6QA5hcA4AAIHHAZIAZADQCcAWDDA3QDCA3BMAlIADgOQgGAvgoDnQgaCZgbC6QgTBxgVAQIgCABIgBACIgGAEIgFADIgBACIgDABIgCABIgBABIgDACIhkAyIgIADIAAAAIgLAFIhXAeIgLAEIgDABIgPAFIgaAIQksBZlkAAQjWAAiigmg");
	this.shape_12.setTransform(0.6,-27.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6F8083").s().p("AgLBMQABgzgBgaIAAgBIgBgGIgJg7IgBgDIAEgFIAfABIABACIAAABIAAABIgBADIAAAFQAAAKAKBqQAAANgDADQgHAGgVAAIgDAAg");
	this.shape_13.setTransform(-5.8,68.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#596743").s().p("AgzAWQhugTAAgcIAAgEQAWAIAUAFQApAKBKAGQBAAHAjgBQAhAAAMgGQARgIgCgbIABAAQAGAmAAALQAAALgEADQgMAIgtAAQhHAAhRgOg");
	this.shape_14.setTransform(-17.2,78.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgDgEIAHAIIAAABg");
	this.shape_15.setTransform(-32.5,-70.9);

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AlpOEQiZglhug1QgcgOg9gmIgXhnQgKgtgHgcIgKgiQg1jSkDwdQAAgdDvhQQDvhQBYAAQA7AAAYAGQAZAGAPAQQApA+BDBBIAMgQIBGhjQAdgpAWgQQArgiCRAAQD7AAFjBQQFQBLBJA8IABABIARAOIgBALIAAgBIh4LkQALALAEAOQAEALgBASQAAAjgDAOQgGATgRAMQgLAIgNBKIgTBrIgpD4QghDFgMAbQjBBAhuAaQi9AujRAAQj6AAjkg4g");
	this.shape_16.setTransform(0.1,0);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.5,-95.6,215.3,191.4);


(lib.CUP_34_arm_02copyaf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("AgaAnIgXgaIgIgGQAmgDARgVQALgTgEgZQAtAtAGANQAGALgMAUQgKANgGAFQgTAQgUAAIgVgXg");
	this.shape.setTransform(-3.5,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AhyC1QADgIAJgwIAAgBIAFgVQAEgQAEgDQATAFAtgXQAlgUAIgKIAJARQAFgBADgDQAEgHgIgYQAMAEAWgLQAcgMAKgfQAGAQAFATQAFAUAAAIQAABDg7AqQg7AqhcAAgAhHhMQglgVgMgFQAAghARgXQASgXAYAAQAfAPAUAMQAiAVAAAaQAAANgIANQgPAYglAAg");
	this.shape_1.setTransform(-6.8,-6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AgIBCIAMgLIAPgMQAEAIABAGQAAADAFAAQAKAAgGgDIADgBQACgBAAgGQAAgHgKgTQgQgcgdgdIgEgEIgqgbQgpgZgQgGQAAggARgXQARgXAYAAQBcAtAzBBQAOASAAADQAIAMAKAhQAJAkgBAaQgBAagiAjQgjAkg0AOg");
	this.shape_2.setTransform(-6.8,-6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiDDEQAAgHAOgsIAIgZIAAgBIAFgUQACgLAAgIQAAgHAFgMQAhAAAcgQQAPgIAXgVQgJgSgqgkQgVgSg+gzIABgBIAEABQAAggARgXQARgXAYAAQgFgEgBgHQA6AJBDA7QBTBHAABSQAAAngOAbQgTAngzAfQgjAVgoAHQgTADhSAFg");
	this.shape_3.setTransform(-6.1,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgPA9QgEgVAHgFQAMgIACgEQgMgYg5guQg9gxgEgEQABgBAAAAQABAAAAAAQABAAAAAAQABAAABABQAAghARgXQARgXAYAAQgFgDgBgIQA6AJBDA7QBTBIAABSQAAA0gbAkQgiAthPAag");
	this.shape_4.setTransform(-6.1,-6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_02copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AhyC1QADgIAJgwIAAgBIAFgVQAEgQAEgDQATAFAtgXQAlgUAIgKIAJARQAFgBADgDQAEgHgIgYQAMAEAWgLQAcgMAKgfQAGAQAFATQAFAUAAAIQAABDg7AqQg7AqhcAAgAg7hFQgVgTgogOQAAghARgXQASgXAYAAIAcAOQAUAKATAPQAJAHAGAOQADAJAAAFQAAAPgMAPQgPAUgSAEIgGABQgPAAgRgRg");
	this.shape.setTransform(-6.8,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgaAnIgXgaIgIgGQAmgDARgVQALgTgEgZQAtAtAGANQAGALgMAUQgKANgGAFQgTAQgUAAIgVgXg");
	this.shape_1.setTransform(-3.5,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AgjBMQAlgRASgTIAJARQAJAAAAgLQgSgzglggIgEgEIgqgbQgpgZgQgGQAAggARgXQASgXAXAAQBcAtAzBAIANASQANARAJAcQAJAZgIA0QgIAziKA3g");
	this.shape_2.setTransform(-6.8,-6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiADEQAAgHAOgsIAIgZIAAgBIAFgUQACgLAAgIQAAgHAFgMQAhAAAcgQQAPgIAXgVQgJgSgqgkQgVgSg+gzIABgBIAEABQAAggARgXQARgXAYAAQgFgEgBgHQA6AJBDA7QBTBHgHBWQgHBXg3AkQg2AjiJAKg");
	this.shape_3.setTransform(-6.4,-5.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgrBHQAAgLAFgIIAGgFIALgHQAWgRABgDQgJgUgqgiQgVgTg+gyIABgBIAEABQAAghARgXQARgXAYAAQgFgDgBgIQA6AJBDA7QBTBIAABSQAABBgpAlQgkAihbAdg");
	this.shape_4.setTransform(-6.1,-6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_02copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("AgaAnIgXgaIgIgGQAmgDARgVQALgTgEgZQAtAtAGANQAGALgMAUQgKANgGAFQgTAQgUAAIgVgXg");
	this.shape.setTransform(-3.5,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AhyC1QADgIAJgwIAFgWQAFgQADgDQATAFAtgXQAlgUAIgKIAJARQAFgBADgDQAEgHgIgYQAMAEAWgLQAcgMAKgfQAGAQAFATQAFAUAAAIQAABDg7AqQg7AqhcAAgAhHhMQglgVgMgFQACgWANgXQARgdAbgFQAfAPAUAMQAiAVAAAaQAAANgIANQgPAYglAAg");
	this.shape_1.setTransform(-6.8,-6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AAJBVQgFAAgEgCIAFgDIABgBIABAAIAAgDIgBAAIAAgBQgUAGgRgHIgEgDIgEgBQgJgHgEgLIAJgEQAHgDAAgHQgYAGgLgFIgCAAIgBAAQgGgCgGgEQgDgEgBgFIAAgHIADgLQAAgEADgCQAIgPAKgNIADAPQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgIACQgGAEgBACIgBAAIACABQADgBAJAAIAKABIACAEIAEABIAAgHIADgOIAIgKIgBgBIABgBIAFgIIADgHQADgHgIAIIgKAJIAAAAIgFAIQABgDgBgCIgBgJIgDgTIgBgGIACgHQACgFAGgEIAFgDQAHgBAOgBIAZgBIABAAIAMAFQAhAMASATIARAZIAAABIADAVIAAACIAAAAIAAAAIgBAJQgEAQgJAOIgIAJQgQAUgYAMIgFADIgCABIgHACIgGgBg");
	this.shape_2.setTransform(-19.2,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AgJBbQgVgggcgMQAfhIgFhRIBagFQAIBzhBBsIgKgVg");
	this.shape_3.setTransform(-5.7,15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AAdBEIgBgEIABAAIADgDIAAAAIABAAIADAAIgEgIIgEgLIgIgTQgIgMgIgJQgLgLgVgMIgOgJQgLgEgMAAIABgCIAKgRIABgCIAEgDIAOgLIACAAQAFgLAaAOIABgBQANAIAQAOIACACQAgAZAAAPIADAWIABAHQAAAHgFAHIgGAKIgKALIgOAMIgDACg");
	this.shape_4.setTransform(-12,28.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AgTBXQgFgCgLgJQAIgBACgCIAAgBQgLABgOgRQgMgOgFgJQgCgIAHAAQAMAAAEgHQgUgGgIgFQgMgHAAgKQAAgNALgJQAJgJAdgOQgGAPAAAFQgGgBgHAAQgFABgBABQACADAJAGIALALQAQgSAOgJQAKgHACgDQgMACgNAHIAJgeQAEgPATAAQAgAAAZAlQAUAeAAAVQAAAbgBAIQgCAcgNAAQgFAAgLAMQgTAMglAAQgMAAgFgBg");
	this.shape_5.setTransform(-30.8,17.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AgMBDIgCgBQgFgBgCgDQAAgDAGgFQAEgDAAgqQgNg7gKgQQAdgCANAFQAbAKAAAyQAABDgvAEg");
	this.shape_6.setTransform(-19.7,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("AhLA8QgCgYgIgMQAogUAUgTQAUgVAHguIABABIAAgBIgBAAIADgQIBRgBQABBPgiAlQgiAnhhAsQAFgSgCgWg");
	this.shape_7.setTransform(-7.3,9.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_8.setTransform(-6.9,1.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AhpAtIAFgGQAEgIAIgZQAJgcgBgLQABADAhACQAhACAVgDQAjgDA6gTIAFBKQgKAIgaAIQgpANg3AAQgiAAgtgHg");
	this.shape_9.setTransform(-15.8,5.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AgmA0IABgFQAFgGALAAQALAAAHgsQAFg9AEAJQANgLAIAHQAMAKAAAWQAAAlgQAbQgQAZgVAAQgRAAgHgKg");
	this.shape_10.setTransform(-29.4,4.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("AgtBCQgWgPgGgMQAJAEACgCQgMgHgFgTQgDgJAAgHQAAgHAEgFIAGgJQALAKAIgDQgRgOgDgYQAAgfBBAKQgMAKgDADQgKgJgHAAIAGAKQAFAHAAAGIgBAGQATgEARgCIASgEIgUgFIgHgCIADAAQAAgBAPgNQAMgLAGAAQARAAASAgQARAfgCASQgDAOgHAVIgJAcQgDAIgRAGQgUAJgVAAQgVAAgbgSg");
	this.shape_11.setTransform(-38.7,0.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("Ag0AnIAHgNIAIgSQAMgdAGghIARAGQAZAFAegEIgFAQIgIAdIgJAZIgKAgg");
	this.shape_12.setTransform(1.1,-13.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#526139").s().p("AgaAbIgXgIQgHgCgCgFIgCgEQgHgLACgRIAAgLQAJASARAHQAUAGATAAQAQAAAPgFQAVgLAPgQQAAAbgNAVQgEAHgJADQgSAHgSAAQgPAAgQgGg");
	this.shape_13.setTransform(3.3,-23.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3E4E6").s().p("AgHBpQgIgEgGgGIgFgHQgJgQgCgPQgDgNgFgNQgHgQgJgPQgQgZgMgbQgDgFABgFQACgFADgCQAFgFAHgDQATACAJAQQAMARAKASIAEAJIAAABIAIAKIAEAEIAFAAIACgBQABgXgMgSIgNgUIgQgSIgJgIIgQgHQARgQAUAKQAKAEAHAHQAKALAFANQAKARAHARIALAYIACADIADABIACgBIgBgMIgBgWIgPgjQgIgQgMgNIgEgIQAbADAOAZQALASAJATQAMAcABAdIABAGIADACIAHABIADgCQACgEAAgDIAAgLQAFAQAAASQABATgDASIgXAUQgTATgbABIgDABQgOAAgLgHg");
	this.shape_14.setTransform(1.1,-36.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#758A51").s().p("AgIAlQhFgZgSgLQARgJAfgdQAdgaAJgBQAJAAAYAQQAaAPAuANIgGBVQgagBhIgbg");
	this.shape_15.setTransform(-16.5,-2.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("Ag0AjQAZgHARgNQAUgOAFgQIAHglIAfAfQgLAZgkAbQgQAOgQAIQgLAAgPgSg");
	this.shape_16.setTransform(-25.2,-8.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#B3E4E6").s().p("AhHBHQgDgEgCgKQATgTANgIIA4giQgagCgqAXIgrAZQABgqA0gZQA0gRAEgDIgEgDQgGgCgGAAQgSAAgjASIgvAcIAMgNQAbgeAlgQQAjgPApAAQASAAARAKQAaAQAAAlQAAASgdARQgQAJgaAKQglASgmAWQgaAAgGgIg");
	this.shape_17.setTransform(-35.3,-10.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#758A51").s().p("AAGAvIgXgEIACgbQgFgdgOgcIgUgjIAkgBQAUgEAUgKQAFgDANgMIAAAAIAAAAIAGAmIAJA+IgBA4QgGA3g0ADgAAohqIABgBIgBABg");
	this.shape_18.setTransform(-7.8,-8.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#526139").s().p("AgsAwQgVgTgRglQAqAaAtgPQAXgFARgRIAJgHIADgCIAGgZIALAWIAHAGQAFAOgIALQgVAhgmALIgeAJIgKABQgOAAgJgGg");
	this.shape_19.setTransform(-10.5,-23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3E4E6").s().p("AAcBDQgVgGgSgHQgMgGgNgEQgNgEgNACQgVAFgUABQgDgGgBgGQgBgGACgGQACgMAMgDIABgEQAUgJAWAAQAUAEAUgCIABgIIgIgEQgggKggAOQANgLAOgIQAOgJAQAAIAoAAIABgEIAAgFQgVgQgeAGQAXgMAXADQAfABAaAPQAaAQAJAcQAHARgHATQgCAFgEADQgOAPgUAHIgVAGIgNABIgDAAg");
	this.shape_20.setTransform(-16.6,-30.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).wait(1));

	// Layer 2
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiDDEQAAgHAOgsIAIgZIAFgVQACgLAAgIQAAgHAFgMQAhAAAcgQQAPgIAXgVQgPgTgNgOQgSgSgfgZQgegYgVgNQgGgEAAgGIABgBIAEABQABgWAOgWQARgdAagFQgFgEgBgHQA6AJBDA7QBTBHAABSQAAAngOAbQgTAngzAfQgjAVgoAHQgTADhSAFg");
	this.shape_21.setTransform(-6.1,-5.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ag2DGIgNgBIAAAAIgHgDIgPgHIgEgBIAAgBIgJgEIgFgEQgJgJgBgLIgKAAQgNgBgKgIQgGgGgBgHIgCgLQAAgKACgKIAEgJIAFgJIAGgJQABgDACgBQAJgHAJgGIgDgdQAEgJAHgJQAEgDAFgCQAKgFARAAIAUgCQACgGAEgKIgBgDQAAgDAGgGIAAAAIAAAAIAMgKQASgOALAAIACAAIACAAIAFACQAdhFgEhHICCgJQAJB7hMB1QADALAAAKQAAAJgLAWQgPAdgUAAIgDAAQgDAHgFAIQgHALgJALIgRAUQgGAHgKAFIgJADQgHACgHABIgKABIgKgBg");
	this.shape_22.setTransform(-13.8,24.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiWB7QgdgOgNgYIgHgkQgBgCgLgEQgJgHgBgQQABgIAMgNQANgRARgKQAEgCAXgCQAJgUAHgIQAGgJAIAAQAHAAATAGQAUAGAGAEQAPALAJAAQAKgDALAAIAqAPQAMAAAtgfQAEgDARglQARglAFAEQAEADACgBIgBAIIBQgGIAJABQAJADABAJQgDAugNAaQgJATgdAcQgWAWg1AaQg1AbgVATQgHAHgMAFQgTAIgRgCQgLgBgVALQgXALgRAAQgTAAgXgMg");
	this.shape_23.setTransform(-18.9,13.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgSBfQgFAAgOAEQgQACgNgDIgYgGQgMgCgTgBQhfgFAAhZIABgMQACgEAGgFQAFgDAAgGQAAgFgEgHQgFgHAAgFQAAgSAQgLQAPgKAXAAQAIAAANAFQAMAFADAAQAFAAAPgIQAPgJAFAAQASAAAOAXQARAeACACQAFADASADQAPADAGAHIAJAMQABAEAMAFQAMAFAhABQAiAAAvgHQAKgGAbgFQAGAAACAFIABAFIAGBJQAAAIADAEIgBAJIgoAPQgyAMgjAAQgKAAhjgLg");
	this.shape_24.setTransform(-26.5,1.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhDC1QAWgqAHgyQgGgEgEgFQgEgEgDgGIgEgJQgMgjASgeIgDgLQgFgQgHgQIgJgRIgVgkIgJgTQgDgKABgKQADgUAUgKIAGgMQAGgJAIgEIAdgGIAHgBIANgCIAJgBIAPABIASAIQAKAGAHAIQAXAYALAhIAEACIADADQAIAPAIASQAHAQADASQADAQgCARIgEAmQgCARAAARQAAAighALIgFARIgJAgIgKAfIgJAbg");
	this.shape_25.setTransform(1.2,-28.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AB5BzQgwgSg3gcQgigTgIAAQgCgBgTgZIgVAUQgYAQglAAQgVAAgKgPQgKgQgLAAQgVgaAAgtQAog7AogLQA6gTAfAAQAFAAAXAHQAXAIAHAFQAcAUAOANQAZAWACAUQAfASA3AZQAUALgBAIIgGBpIgJABQgUAAgtgRg");
	this.shape_26.setTransform(-27.7,-7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABQCGIghgIIgMgZIgGgTQgGgVgJgVIgOgfIgEgEQgEgBgCgCIgFgCIgFgGIgEgFIgYgpIgBgFIgCgNQgMgKgRAEIgQAGQgTAJgRgMQgEgEgBgFQgCgLACgMQADgMAHgLQAQgbAbgMIgHADQAHgOALgKQAKgKAOgGQAOgFAOgEQApACAmASQAUAKAMATQAHAJAFAKIAKATIANAZIAOAgQgDAQgHAOIgEAFIAFAfQAJAtgBAfQgBAfgDAUIgBARQgOBHg0ACg");
	this.shape_27.setTransform(-14.8,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},2).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_02copy2gg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AhSC1QAHgUAJhQQAxgIAkgkIAKARIACAAIABgHQACgEAGgFQAGgFgqgnIAAgBQhrhhgRgGQACgbAPgUQARgXAXAAIABAAIAfAQIBFAwQBTBKAABHQAABDg3ArQg3AqhYAAIgFAAg");
	this.shape.setTransform(-6.8,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B3E4E6").s().p("AgIBoQgWgLgSgbQAPABAKgBQACAOAFAJQADgDADgOQACgLAHgGQgYgJgNgKQgPgOgGgDQABAEALAQQAAAFACACIgBAAQghACgNgIQgOgHAAgYQAAgvAVghQAZglArAAQA2AAAnApQAfAiAAAaQAAALgHAMIgBgIQAAgCgFAAIgFAAIADAAQgHAvgJAIQgGAFgTAGQgBgJgGgHIgGgHIgDAfQgIAdgRAAQgJAAgJgFg");
	this.shape_1.setTransform(23.5,52.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AhbAjQgEgUALgUQAKgUAngUQAjgSAWAAQAfAAAUAXQAPARAFAVQgQgNgIgEQgMgHgfAAQgoAAgZASQgdAVgKAzQgLgQgCgNg");
	this.shape_2.setTransform(19.5,42);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1F26").s().p("AAaAtIg7hlIAAgBIBDBzg");
	this.shape_3.setTransform(-5.6,8.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#758A51").s().p("AgZBEIAAAAIAIAMIhFhyQglg+gPgXQgZgngegjIgKgNQgHgJAAgCQAAggBahAQAGAAABACIAAAAIAAAAQACAaASAgIAjA9IBCB1QCtEogBAAIAfA2QgvARgtAWg");
	this.shape_4.setTransform(-0.2,6.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#526139").s().p("AhXAxQAEgGADgDIABgBIgIAKIAAAAgAA9AIIgkAAQgvAAgaAGQgSAFgVAMIAAgkQAAgQASgMQAXgPAnAAQA3AAAXAVQARAQAAAdQAAAMgHACQADgUgXgEg");
	this.shape_5.setTransform(30.6,22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("AgfBlQgKgMgWgnQASAHAGgCQgCAPADAMQADgDAHgOQAGgLAHgDQgVgQgJgPIgPgVQACANABAEQACAFAHALIgHgEQgSAAgMgEQgVgHAAgXQALg1ANgSQAMgRAQgGQAXgKAyAAQAJAAAZARQAbARAOATQACABAEAMIAGAOQACAugEAHQgCAFgHAHQgBgGgCgDIgCgDQgGAggVAQQgRANgQgCIABgUQAAgEgGgEQgSA5gTAAQgLAAgIgKg");
	this.shape_6.setTransform(31.3,36.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("AB8BvQglhNgwgpIAWAWQgXgUgQgSQgMgMgpgZQgsgRhLgNQhLgNgKgBQgJAAgEAGQgFAGgJACIgBAAQADgOAIgTQAPgjAjgzQAGADBBAIQBBAICIBbQCKBbAvCyIAJAeQgPgCgrAFQgnAFgFACQgMgugag1g");
	this.shape_7.setTransform(7.5,-3.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhYCxQAIgVAIhPQAEgLAFgFQAFgEAHgCIACABIABgBQA1gcAAgFQAAgGgCABQgMgYg5guQg9gxgDgEQAAgBAAAAQABAAAAAAQABAAABAAQAAAAABABQgNgJAMAAIABABQACgcAPgUQARgWAXgBIgBAAIgDgLQAwAEBDA3QBcBLAABoQAAA8g8ArQg+AshoAIg");
	this.shape_8.setTransform(-6.2,-5.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AgYAPQANgRALgMQAZgZAAAbQAAAGgMAPQgMASgHAAQgSAAAAgMg");
	this.shape_9.setTransform(-0.9,-6.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABzGjQgFgGgKgXQgZgDgQgLQgOgLgBgNQgCgmgQgZQgQgYAAgZQAJgXADgQQgphag3heIjDlIIgBgGQABgFACgCIgKgNQgHgJAAgCQAAghBag/QAGAAABABIADgIQAEADB+DZIDVFzQAkAFARAUQAOARAIAmQACAJAaAaQAXAXAAAnQAAAkgPAWQgIAMgNALQgJAKgJABQgJABgJAMIgLASQgJAMgNAAQgjAAgeghg");
	this.shape_10.setTransform(7.1,19.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ACKFkQgKgLgEgJQgGgKgCgIQgDgKgCgUQgugZAAgKQAAgUAKgeIAKgcQAAgGgEgGQgFgJgCgHQgDgNAAgKQAAgbAIgNQAKgLAFgMIgOgqQgjhdg5g/Qgrgug2gaQgsgVhNgGQhJgFgJgGIgBAAQAEgOAHgSQAQgkAkg0QgCgHAKAAQCrAACJB+QCHB7AlCvIAUAHQAKADANAcQALAZgDAPIgHAZQAAAGALANIAOASQAHARAAATQAABDg+AqQgHAFgPAAQgLAAgJAMQgSAXgSAAQgUAAgQgTg");
	this.shape_11.setTransform(12.4,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_02copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AAPAuQAOANACgBIAEgCIAAACQACgZgEgKQASAEAYgQQAXgOAHgYQAGAQAFATQAFAVAAAIQAAAzgiAlQgeAhg1ASgAhHhHQglgVgMgFQAAggARgYQARgWAXAAIACAAQAfAOAUAMQAiAVAAAaQAAANgIANQgPAZglAAg");
	this.shape.setTransform(-6.8,-6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgcAnIgXgaIgIgGQAmgDARgVQALgTgEgZQAGAJAbAcQAYAXAAAEQAAAWgbAUQgYARgQAAIgVgXg");
	this.shape_1.setTransform(-3.3,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AAQg1QANAsgQAdQgNAZgVAJg");
	this.shape_2.setTransform(-18.3,18.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1F26").s().p("Ag2gGQANgVASgJQAKgEAIAAQAiAAAIALQAGAZAMAYQgUgIgVAKIgkATQgOgXgSgYg");
	this.shape_3.setTransform(-5.4,-7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#758A51").s().p("AgyCyQgCgXgIgMQAygbAQgYQAXgcgBgrQAAgMAHgKQANgWAcAAQAYAAADADQAKAKAAAtQgBA+giAnQglApheAqQAFgSgCgXgAhgiPQAcALgkgPIgIgFQAOgLAZgfQAQgVARgDQARAPBQBhIgKAAQgVgCgOAJQgJAGgUAYIhPhKg");
	this.shape_4.setTransform(-9.8,-2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AgIBoQgWgLgSgbQAPABAKgBQACAOAFAJQADgDADgOQACgLAHgGQgYgJgNgKQgPgOgGgDQABAEALAQQAAAFACACIgBAAQghACgNgIQgOgHAAgYQAAgvAVghQAZglArAAQA2AAAnApQAfAiAAAaQAAALgHAMIgBgIQAAgCgFAAIgFAAIADAAQgHAvgJAIQgGAFgTAGQgBgJgGgHIgGgHIgDAfQgIAdgRAAQgJAAgJgFg");
	this.shape_5.setTransform(23.5,52.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("Ag4geQAwghAfAAQAYAAATANQAUAPAHAbIABAFIAAABIgQgLIgFgDIgUgGQgTgEgGAAQgoAAgZASQgeAVgKAzQgpg2A+gog");
	this.shape_6.setTransform(19.3,42);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1D1F26").s().p("AAaAtIg7hlIAAgBIBDBzg");
	this.shape_7.setTransform(-5.6,8.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AgZBEIAAAAIAIAMIhFhyQglg+gPgXQgZgngegjIgKgNQgHgJAAgCQAAggBahAQAGAAABACIAAAAIAAAAQACAaASAgIAjA9IBCB1QCtEogBAAIAfA2QgvARgtAWg");
	this.shape_8.setTransform(-0.2,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},2).wait(1));

	// Layer 2
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAQAcQgIgGgTgSQgvgrgggXQgfgXgKgFQgCgBABgGQABgBAAAAQABAAAAAAQABAAABAAQAAAAABABQAAghARgXQARgWAXgBIgCAAIgDgLQA7AEBKBDQBLBDAABDQAABEgaAlQghAuhJATg");
	this.shape_9.setTransform(-6.1,-6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah3D7IArh5QAPghAVgRQAVgQAFgJIAMgYQAGgQAAgRQAAgZg4hAQg7hAgCgQIgIgFQAOgLAZgfQAQgUARgDQADgHAGgCIAGACQBQBGApBIQAjA+AAA4QAAA6gcAkQgVAdhFAvIguAYQgdAOgMASQgCADgLAFQgLAFgJAAIgDAAg");
	this.shape_10.setTransform(-8.9,0.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABzGjQgFgGgKgXQgagDgPgLQgPgLAAgNQACgtgGgGQgIAAgEgEQgGgGgGgVQgGgUAAgKQAJgXADgQQgphag3heIjDlIIgBgGQABgFACgCIgKgNQgHgJAAgCQAAghBag/QAGAAABABIADgIQAEADB+DZIDVFzQAkAFARAUQAOARAIAmQACAJAaAaQAXAXAAAnQAAAkgPAWQgEAIgRAPQgIAIgMACQgHACgCABQgEADgDAIQgMAegVAAQgjAAgeghg");
	this.shape_11.setTransform(7.1,19.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_10}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_11}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_02copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AhyC1IAFgTIAFgSIAJgkIAGgYQAsgDAlgWQASgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgEAAgCQAAgMgFgNIABAAQAlAAAWgdQAIgLAEgKQAUApgGArQgKA+g+AiQg6AihcAAIgLgBgAglg5QgggYgigOIgQgHIgBAAIAAgEQAAgaAQgUQAQgVAbgIIABABIAIAEQAsAVAfAZIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape.setTransform(-6.8,-6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgzANIgIgGQAigCASgUQALgRAAgRIgBgMQAaAWATAaIAMAQIgJARQgOAeggAJIgMADQgOgXgegag");
	this.shape_1.setTransform(-3.3,-11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AgIBNIAGgIQACgHgDgFQgPATgMADIgCAAIgBACQgGACgHAAQgFgBgDgDIgFgGIgEgJQgDgEAAgFQgDgRAAgRIAMALQAAAAABAAQAAAAABABQAAAAABAAQAAABABAAIgFAIQgDAGABADIAAACIACgBQABgEAIgFIAKgFIADACIAEgBIgGgHIgGgNIgBgNIgBAAIAAgDIgBgGIgCgHQgCgIgBALIgCALIAAAAIABAKIgDgEIgGgGIgPgLIgFgEIgCgHQgCgGADgGIACgGQAEgFALgJIAVgSIADgDQAKgGAIgCIASgDQANAGAXAIIAmALIACAEIABgBIAGAKQAHAPABAQIAAAMQAAAZgLAYIgDAGIAAABIgFAGIgFADIgJAFIADgHIAAAAIgCgEIAAABIgBgBQgNATgSAFIgFAAIgEABQgLAAgJgGg");
	this.shape_2.setTransform(-10.5,44.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#526139").s().p("AA9AiIAGAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgDIgBABIgSgGIgIgDIgcgLIg8gKIgEgBIgBAAIgGgCIgCAAIAAAFQgBACgJAAIgDgBIgBgBIAJgUQAMgWAfAAQAMAAAKABIAYAIIAdAKQAMAIAEAKQAAAAAAAAQAAABAAAAQAAAAABAAQAAAAABAAIABAAQAEAEAAAFQAAASgHAOIgCAGIgGgJg");
	this.shape_3.setTransform(-7.7,35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#758A51").s().p("AAgEHIgDAAQgOgCgLgBQATh6gThuIAAAEQgMhEgOgoIgIgUQgTgugbgsIAAgBIgBAAIgLgJIgFgGIAAAAQAAgCApgnQAWgVAKgNIAFAXQAhBFAfBYIABAAQAQAvAKAtIAAAAIAGAYIgBAAQAaCJgaB6QgWgLgbgEg");
	this.shape_4.setTransform(-10.8,3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AAJBVQgFAAgEgCIAFgDIABAAIABgBIAAgDIgBAAIAAgBQgUAHgRgIIgEgCIgEgCQgJgHgEgKIAJgFQAHgDAAgHQgYAHgLgGIgCAAIgBAAQgGgCgGgEQgDgEgBgFIAAgGIADgLQAAgFADgCQAIgPAKgNIADAPQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIgIADQgGADgBACIgBABIACAAQADgBAJAAIAKABIACAEIAEACIAAgHIADgPIAIgJIgBgBIABgCIAFgIIADgGQADgIgIAIIgKAJIAAAAIgFAIQABgCgBgDIgBgJIgDgTIgBgFIACgHQACgGAGgDIAFgDQAHgCAOgBIAZgBIABAAIAEAAQAMABAHAEQALAFAOAIIAHAGIABABIANALIAIAJQAGAKgBAMIAAAAIABADIAAAEIAAALIAAAAIAAAAIAAAAIgBAJQgEAQgJAOIgIAJQgQAUgYANIgFACIgCABIgHACIgGgBg");
	this.shape_5.setTransform(-19.2,34.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AAgA+IABAAIACAAIgDgIIAAgGIAAgBQAEgNgIgMIgGgKQgGgKgIgFIAAAAIgIgIQgCgEgJgGQgLgGgNgFQgGgEgXABIAKgRIABgCIADgDIAOgLIACAAQAGgLAaAOIAAgBQANAIAQAOIACACQAgAZAAAPIADAWIABAHQABAHgFAHIgHAKIgKALIgOAMIACgMg");
	this.shape_6.setTransform(-12,28.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("AAbDrQgUgfgagNQAhhTgKhUQgCgGgBgNQgFgkgQgnIAAAAIgGgNQgTgogcgoIgXgUIgBgBIAGgHIAQgTIAjgsQADgCADABQACAAADADQABABAFAUQAsA3AlBKIABAAIAFALQAOAgANA0IACAHIAAAAQAXCChMB+IgNgVg");
	this.shape_7.setTransform(-9.6,1.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AgIBYIgGAAIgBAAQgEgCgEAAIgFgEIgHgGIAHgBIABAAIAAAAIACgCIAAgBIAAAAQgWgFgLgQIgDgEIgDgEQgEgKACgMIAKACQAIAAADgFQgYgHgHgKIgBgBIgBAAQgFgEgCgGQgBgFACgFIADgGIAIgIQACgDAFgCQAOgJAQgHIgGAPQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQgDgCgGAAQgHAAgCACIgBABIABABQAEAAAIAFIAHAHIABAEIACADIAEgIIAKgKIAMgGIgBgBIADAAIAHgFIAEgEQAHgFgJADQgLACgCABIAAAAIgIAFIACgFIADgIIAHgSIACgGIAGgFQADgDAGAAIAGAAQAGACAMAGIAZAOIAEABIAKAUQAKATAFANQADAMAAACIgBAbQAAAGgCAJIgBAHIgMAJIgLAJIgBABIABABIgHAEIgLAFQgYAIgXAAIgDAAg");
	this.shape_8.setTransform(-30.8,17.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#526139").s().p("AgUBDIAGgBQgFgBgCgCIgBgCQADgBACgGQAEgDAAgCIACgnIgCgLIgBgLIgJgfQAAgFgDgFIgIgNIAIAAIABAAQAXgBAEABQAJACAGAEIgCABIAHAFQAHAHAAAGQAGATAAAWQAAAQgFAOIAAAAQgCAIgFAIQgFAIgHAFQgLAIgPAAIgFAAg");
	this.shape_9.setTransform(-19.7,17.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AgxDAQAAgfgKgSQAogUAVgbIAAAAQAUgYAGgYQABgOAAgNQAAgJgCgIIABAAIgHgPIgKgRIgNgWIgOgTQgVgagYgbIgygeQAAgGAHAAIADABQAng1ARgHIAGgBQAEABABAFQAFAEAFAHIAAACQAqApAyBDIAAAAIAFAGIACADQAOAXAOAoIABAAIAAACIACAEIgBgBQAJAggCAkQgFBIhPAyQgnAZgpASQADgNAAgOg");
	this.shape_10.setTransform(-9.8,-2.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("AgiA+QgDgBgBgFIALgGIABgBQANgDAHgMIAGgLQADgLADgJIAAAAIACgJQACgGAAgKQABgNgCgNQgBgGgFgLQACABAEADQAGgDAJAGIAIAFIADAJQAEALAAAJQAAALgDAPQgDATgEAGIgGANIgBAAIgBADQgNAWgSABQgRAAgHgEgAAkAmIABgCIgBACg");
	this.shape_11.setTransform(-29.4,3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("AiBCqQALgMAGgTQAHgVABgdQA7AMA8gMQAhgHAfgKQAEgCABgDIABgDIgdgEIgCgGIAAAAQgSgrgNgVQgUgfgGgKIAAAAIgSgXIguggIAKgQQAjg1ASAAIADAAQAFADAHAQIAAABIABgBQAmAoAqBCIAAABIADAFIAKAQQANAYAHAVIAAAAIAAAAQALA3gOAhQgbA5hhAMQgaACgZAAQgmAAgmgGg");
	this.shape_12.setTransform(-13.4,-7.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("AACBUIgKgCQgbgEgWgOIgFgEIgBgBIgGgFIgCgGIgDgJIAGAEIAAAAIABAAIADgBIAAgBIABAAQgRgQgCgTIAAgFIgBgCQABgLAJgJIAHAGQAGAEAGgDQgRgRgBgNIAAgBIgBgCQgCgGACgHQABgFADgCIAHgEIAKgDQAEgCAFAAQARAAARACIgNAKQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBgDgGgEQgFgDgDABIgCAAIABACQADABAEAJIADAKQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAgBABIABAEQADgDAFgBIANgEQACgBAJABIAAgBIACABIAJgBIAHAAQAJgBgLgDQgLgEgCABIABgBIgJAAQAEgBABgCIAFgFIAPgMIAFgEIAHgCQAFAAAHADIAEADQAFAFAIAMIANAWIABABIADADQAEAJABAHIAAADQABAMgBAPQABAFgCAEIAAABIgCARIgFALQgFALgKAFIgBAAIAAAAIgDACIgDACIgJAFIAAABIgKAEIgPADIgOABIgDAAg");
	this.shape_13.setTransform(-38.6,0.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3E4E6").s().p("AgCBYIgJgEQgFgCgDgEQgMgLgLgNIAQABQABAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQgBADACAHQABAGADACIABABIACgCQgCgEADgIIAEgKIAEgBIACgDIgIgCIgNgHIgJgJIgBABIgBgCIgHgGIgFgFQgGgFAFAKQAFAKACABIAAAAIAGAHIgEgBIgJgBIgUgBIgGAAIgGgEQgEgEgCgHIgDgFIAEgSIABgKIAEgDQAOgfAjgYQAmgcAZAQIAAAAIACgBIAFABQAJAGAIAIIAIAKQAQAVAGAZIABAGIAAACIAAAFIgCAGIgDAJIgDgHIAAAAIgBgBIgCgBIAAAAIgBABQABAWgLAQIgEADIgCAEQgJAHgLABIgCgKQgCgHgGgCQAAAYgHALIgBAAIAAACQgEAGgFAEQgFACgEAAIgGgCg");
	this.shape_14.setTransform(22.8,34.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_15.setTransform(22.3,23.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("AhBA3QgSgTABgEQAAgNARgTIABAAQAFgFAIgGIAAAAIgBgBIAIgJQAfgcAcgJIABgBQAGgEAGAAQANAAAGADIgBgCQANACAQATIACACIAGAIIAAABIAAABIgBAAIgBgCQgCgDgCgBIAAACQgCACgDABQgDADgHAAIgLABQgMABgMAEQgVAKgOALQgJAHgNAPIgIAIIgOARIgDAFQAAADABACIgDAHIgIgJgAAmgrIAAAAIAAAAIAAAAIAAAAg");
	this.shape_16.setTransform(18.5,27.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AggAlIAAABIAAgBIiGi2QgIgDgOgKIAAAAQgHACACgGIgCgBIADgBIACgEQAKgQARgVQAJgHAMgRIANgSQAEAIADAMIACAFIBZB2IAKAOIAAAAIDZEfQglAJgjAlIgFAFg");
	this.shape_17.setTransform(0.5,0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#526139").s().p("AgaAbIgXgIQgHgCgCgFIgCgEQgHgLACgRIAAgLQAJASARAHQAUAGATAAQAQAAAPgFQAVgLAPgQQAAAbgNAVQgEAHgJADQgSAHgSAAQgPAAgQgGg");
	this.shape_18.setTransform(3.3,-23.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#758A51").s().p("AgKCdQgKgBgIgGQgLgIgIgKQgJgLgIgLQgHgNgGgMQgGgNgFgNIgIgcIgGgbIgFgZIgEgbQgCgSgGgPQgBAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAIgBgDIAVgSQALgKAJgLIAGgIQAKgRAPgJIADAAIACAAIgHALIgBANIAAAcIACAdIAEAeQABAPADAQIAGAYIAHAZIAHAVIAHAMIAAAHIgDAGIgJAOQgDAEAAAFIACACIAGgEQAPgQALgTQANgTALgUIAIgTQAMgdAGggIARAFQAbAFAegDIgFAPIgIAdIgJAZIgIAbIgLAYQgFAMgIAMIgPAWQgKAOgRANIgGADQgIAFgIACIgHABIgKgBg");
	this.shape_19.setTransform(-6,-13.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3E4E6").s().p("AgHBpQgIgEgGgGIgFgHQgJgQgCgPQgDgNgFgNQgHgQgJgPQgQgZgMgbQgDgFABgFQACgFADgCQAFgFAHgDQATACAJAQQAMARAKASIAEAJIAAABIAIAKIAEAEIAFAAIACgBQABgXgMgSIgNgUIgQgSIgJgIIgQgHQARgQAUAKQAKAEAHAHQAKALAFANQAKARAHARIALAYIACADIADABIACgBIgBgMIgBgWIgPgjQgIgQgMgNIgEgIQAbADAOAZQALASAJATQAMAcABAdIABAGIADACIAHABIADgCQACgEAAgDIAAgLQAFAQAAASQABATgDASIgXAUQgTATgbABIgDABQgOAAgLgHg");
	this.shape_20.setTransform(1.1,-36.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#526139").s().p("AgmAsIgGAAIgIgJQAegJAWgUIAKgIIAFgNQAEgSADgTIAfAfQgHAVgRAPIgbAXQgLAKgRAFg");
	this.shape_21.setTransform(-25.2,-8.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#758A51").s().p("AAECFQgegIgfgLQgggNgdgUIAWgOQALgGAJgJIAdgeIAHgGIAfARQAlAVAsAGQADABAFgDIgxgYIgVgfIg3hIIgMADQACgGAEgFIAZggQASgXAXgMIgBAMIAZAgIAAAAIAlA9QATAhAOAgQAOAjgGAmQgEAUgPARQgDAEgGABQgMADgMABQgfgEgegIg");
	this.shape_22.setTransform(-14.2,-10.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3E4E6").s().p("AhCBHQgFgCgDgFIgCgHQATgWAagOIArgZQgzAEgnAiIgLALIgIABIgCgEQgBgOAIgNQATghAkgNIAXgGQAOAAAKgIQgJgHgKACQgjACgeAUQgRALgOARIgBgEQAvg6BFgOQASgCASAAQATAAAQAKQAHAFAGAIQAJAMADANQADAOgEAPQgYAYgjALQgKAEgJAFQgVAMgSAPQgMAJgPAAQgOAAgNgIg");
	this.shape_23.setTransform(-35.3,-10.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#758A51").s().p("AAbB0Qg6gLgThBIgVgrIgehEIAAgCIgLAAIAAgBIgBgBIAAgDIAAgCQAdgaAoAFIAFACIAFAGIAEAGIAEAFIAFAEQADADADABIAGADIANAgQAJAUAGAUIAFASIARAiIABgeQgEgcgPgcIgTgjIAjgCQAXgDATgKQAFgDANgNIABAAIAAAAIAAAAIAAAAIAAABIAGAlIAIA9IAAA5QgIA9g5AAQgKAAgMgCgABoh1IAAAIIgBACIABgKg");
	this.shape_24.setTransform(-13.8,-9.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#526139").s().p("AgkAxQgcgagSgeQAqAaAtgQQAXgEARgSIAJgHIADgCIAGgYIALAVIAHAGQAFAPgIAKQgVAhgmAMIgeAIIgZgEg");
	this.shape_25.setTransform(-10.5,-23.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B3E4E6").s().p("AAcBDQgVgGgSgHQgMgGgNgEQgNgEgNACQgVAFgUABQgDgGgBgGQgBgGACgGQACgMAMgDIABgEQAUgJAWAAQAUAEAUgCIABgIIgIgEQgggKggAOQANgLAOgIQAOgJAQAAIAoAAIABgEIAAgFQgVgQgeAGQAXgMAXADQAfABAaAPQAaAQAJAcQAHARgHATQgCAFgEADQgOAPgUAHIgVAGIgNABIgDAAg");
	this.shape_26.setTransform(-16.6,-30.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B3E4E6").s().p("AgTBuQgEgBgCgCIgMgKQgEgEgEgFQgLgSgIgUIATAHQACgCAEABQgDAFABAHQgBAKADACIAAACIACgCQAAgFAGgJIAIgMIAEAAIAEgDQgEgCgFgEIgNgMIgIgOIAAAAIgCgDIgGgJIgEgHQgGgHADAMQACAOADACIgBAAIAHALIgHgDIgIgDIgYgHIgGgCQgQgNAFgUIABgHQAEgUAJgRIABgCQAHgPAKgOIAGgHQA7gSA3AIQAaAXAVAcQAEAEADAHQAEAIAAAIIACApIgBAFIgBADIgEAHIgHAJIgBgIIAAgBIgDgDIAAABIgBgBQgGAegSAQQgDADgCAAIgEADQgMAHgOAAQABgIAAgHQAAgJgHgEQgHAggLAKIgCACIAAABQgEAIgHADIgGABIgGgBg");
	this.shape_27.setTransform(31.4,36.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#1D1F26").s().p("AgLAyQgcgTgfgNIAKgUQAQgjAdgWQAcAOAbASQAQAKAPAMQgtAOgYAvIABgBIgDAFIgLgKg");
	this.shape_28.setTransform(8.5,-13.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#758A51").s().p("ACVCqIAAAAQgth6hOhCIAEgIIAAgBQAWgtAvgLQBlBaA3CkIAAgBIAJAfQgQgDgSAAQggAAgbAJIgJAEgAhlhYQgygPg7gCIgPACQgDABgPAHQgLAEgIACIgBAAQAGghAbgrIAdgtQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAkAHAIAFQA0AHAuAPIAfALQgbAXgPAiIAAABIgKAWIgXgHg");
	this.shape_29.setTransform(7.5,-3.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#526139").s().p("AhXAxIAGgLIACAAIgCAEIgFAIIgBgBgABSAfIADgEIgBgHIgFgCQgZgJgdgCQgZgBgeAEQgQADgRAEIgLADIgMALIgBglQADgIAIgMIAAAAIAEgGQACgEApgKQAogKA2AZIAGADIAAAAQAMAQACASQAFAMgEAJIgCAEIgCAAg");
	this.shape_30.setTransform(30.6,22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).wait(1));

	// Layer 2
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ah/DGIgDgBIgBAAIAAgBIAAgBIADgRIABAAIABgBIAHgcIARhFIgBAAIAAAAIAAgBIAEgPIABAAIAAgBIAAgBIABgBIABAAIABAAIAAABIAAABQAngDAkgXIgBAAIAXgUQgPgWgagYQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIAAgEQAAgaAPgUQAQgVAbgIIAAAAQgEgBgBgEIAAAAIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBHhHAnQhCAmhtgCIAAAAIAAABIgBAAg");
	this.shape_31.setTransform(-6.1,-5.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag0GKQgIAAgGgFIgHgHQgIgJgDgJQgDgFAAgEIgCgKIgBgLQgBgDABgCQACgLAEgKIgUgVQgCgKgBgLQABgFADgEQAFgKAOgLIATgTIADgDIgBgXQgBgPANgKQAJgNAUgDQAmjxhyjBIgEgWIAAAAIAFgCIgGgFIAAAAQAAgCAqgoQAVgVALgNIADgEIAEAAQAEABACADQCiE7g6D7IABABIAIAHQALALAAAMQAAAhgPATQAAABAAABQAAAAgBABQAAAAAAABQAAAAAAAAIgEABIABAEQACANgBAOIgBAaQgBALgGAKIgFAIIgIALIgQANIgLAHIAAAAIgHABIgRAEIgDACIgBAAIgJACIgFAAQgMgCgIgIIgJAHQgJAGgLAAIgDAAgAhWkqIAAAAIAAgBIAAABg");
	this.shape_32.setTransform(-9.9,14.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("Ag2FbIgNgBIAAAAIgHgDIgPgIIgEAAIAAgBIgJgEIgFgFQgJgIgBgMIgKAAQgNAAgKgJQgGgFgBgIIgCgKQAAgLACgKIAEgIIAFgKIAGgIQABgDACgBQAJgIAJgFIgDgdQAEgJAHgKQAEgDAFgBQAKgFARAAIAUgDQACgIAEgKIgBgDQAAgDAGgFIAAgBIAAAAIAMgJQASgOALAAIACAAIACAAIAFABQBIioh/iwIgGgUIABgCIACgBIgBgBIAHgHIAQgTIAggsQADgCADABIACgCQACgCAEAAQAEAAACADQDtEUilEBQADAMAAAJQAAAKgLAWQgPAcgUAAIgDAAQgDAIgFAIQgHAKgJALIgRAVQgGAHgKAEIgJADQgHADgHABIgKAAIgKAAg");
	this.shape_33.setTransform(-13.8,9.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ah6EFIgJgCQgGgBgHgDIgSgJIgKgIIgEgGIgKgOIgDgCIAAgBQgEgEgBgEIgDgGQgDgMAFgLIgKgGQgLgGgDgMQgDgIADgHIAEgKQAEgKAIgHQAEgEADgBIAJgGQAFgBAFgEQACgCADABQALgDAKAAIAMgaQAIgGAKgFQAGgBAFACQALABAPAIIAZALIAOAHIAFgBQAJgDAIAAQAaAAAQAPQAmgSAWgZIAAAAIAAAAQAQgTAFgTQALgbgPgXIgGgJIgDgGQgmg7g7g9QgDgDAAgDIABgDIgIgFQAAgGAHAAIADABQAlg1ARgHIAGgBQAAgDACgDQACgCAEgBQAEAAADADQBDA8AvBFQAvBHgFBPQgFBRhYA3QgwAegzAVQgQAgghAAQgTAAgJgBIgCABQgMAHgNAEIgZAJIgMACIgKgBg");
	this.shape_34.setTransform(-18.9,1.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgyCzQgJAEgKAAIgFABIgBAAIAAAAQgaAAgOgIIgGgEQgJACgKgBIgagCIgbgFQgKgEgJgHIgHgFIgKgLIgKgRIgFgMIAAAAIgBgHIgBgRIgCgEIABAAIgBgKIABgHQADgMAKgGIgFgKQgHgLAEgNQABgHAGgFIAIgFQAJgGAKgCQAFgCAEABIAKgBQAGABAFAAQADgBACACQALADAJAFIAYgQQAKgBALAAIAJAHQAJAGAJAMQAAACAQAUIADAFQAYACAPAKQAPAKADANQA3AMA9gMIAbgHQgZg/ghgpIAAAAIgJgMIgjgoIABgJIgHgGIAKgQQAjg1ASAAIADABQAAgDACgDQADgCAEAAQADAAADACQBAA9AtBTQAvBUgeBBQgdBDhvAMQgbADgaAAQguAAgwgKgAhpCnIACAAIgBgBIgBABgABuihIABAAIgBgBIAAABg");
	this.shape_35.setTransform(-23.3,-6.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ACfFbQgLgCgJgFIgIgFIgHgHIgHgIQgDgCAAgDQgGgJgDgKIgdgFQgIgGgHgIQgCgFgBgFIAAgGIgEgBIgBgEIAAgCQgIgFgKgPQgPgUAAgFQAAgQAYgcIktmfQgDgEABgDIAAgCIABAAIADgCIACgDQAKgRAQgUQAJgHANgSIANgRIABgCQADgCADAAQAEABACADIFMG4IAFAAQARAAAUATQARASAAAIIgCAIIAIAHIASAUIAPAWQAGAKABALIACAJIAAAOIgFAUIgEALIAAABIgEAGIgLANIgCADIAAAAIgHAIIgFAEQgKAGgMgCIgDALQgDANgLAHQgGAEgIAAIgKgBg");
	this.shape_36.setTransform(6.8,10.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag+EBIgSgQQgJgJgHgKQgIgNgIgOQgHgNgGgNQgGgPgEgPIgHgcIgFgbQgDgUgGgVQgEgSADgRIAIgEIAVgRQALgKAJgLIAGgIQAKgQAPgJQAFgJAJAHQACADgBADIAAAcIABAcIACAdIAEAgQAGAsARArQAggzAIg/QgFgEgDgFQgEgEgDgGIgEgIQgLgiARggIgCgLQgGgQgHgQIgJgRIgVgkIgIgTQgEgKACgKQACgUAUgKIAGgMQAGgJAJgEIAagGIAIgBIANgCIAJgBIARABIASAIQAJAGAHAIQAXAYAMAhIAEACIACADQAJAPAHASQAIAQACASQADAQgCARIgEAoQgCARAAARQAAAgggALIgFARIgJAgIgKAfIgJAcQgFAOgGANQgGANgIAMIgQAYQgNASgSANQgHAEgIAEQgKAFgOACIgJABQgPAAgOgKg");
	this.shape_37.setTransform(-3.5,-22.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AB0CXQgMgDgLgFQgrgPgqgVIgYgNIgagPQgHgBgHgCQgEgBgCgCIgGgHIgNgRQgKAKgNAJQgNAIgOADIggAGIgTgEQgHgDgFgEIgFgGIgHgPIgJABIgEgEQgFgHgCgIIgFgXIgBgHIgEgWIAMgRQAagkAqgRQAhgOAmgDIASgCQAUACAUAGQALAEAJAIQAQAPARAQIAgAgIACADIAAAJIApAYIg+hPIACgIQABgGAEgFIAZggQASgXAZgMIAHgDQAVANANAVQATAhASAhQARAdANAdQAJAVAEAXQAEAagEAZQgGAdgYAPQgKAGgKADQgRAFgQAAQgSAAgSgFgAjoACIABAAIAAgCIgBAAgACKhsIABAAIgBAAg");
	this.shape_38.setTransform(-24.1,-9.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAWDNQgqgPgXgpIgBgBIgXgpQgIgOgGgQIgRgqQgEgMACgKIABgCIAJgDIAAgBIgLAAIgBgCIAAgBIgBgDIABgBQAdgZAoAGQgLgTgFgTIgCgNQgMgKgRAEIgQAGQgTAJgRgMQgEgEgBgFQgCgLACgMQADgMAHgLQAQgbAbgMIgHADQAHgOALgKQAKgKAOgGQAOgFAOgEQApACAmASQAUAKAMATQAHAJAFAKIAKATIANAZIAOAgQgDAQgHAOIgGAHQADADADAKQAHAcACASQACATgCAjIgEArIgBARQgOBJg3AAQgSAAgYgJg");
	this.shape_39.setTransform(-14.8,-17.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ACqF3IgMgEQgMgHgIgIIgIgKQgEgEgCgGIgHgNQgCgDgBgDQgDgPAAgOIghgNIgNgWIACgTQACgfAQgcIAAgBIgDgCIgEgKQgLgeAFghQADgNANgRIAAAAIAGgIIgOgqIAAAAQgxiHhdhCQgegVgigNIAAgBIgBAAIgdgKQhCgThRAEQgEAAgDgDIgCgCIgBAAQAHggAagrIAegtIAEgHIAEAAQBMAEBCAVQAYAIAXAKIABAAQAjAQAdAUQAZARAWAUIABABQBrBeA5CpIAAABIAOArIAHADIAGADIABAAIACABIAJAEIAEADQASAWACAeQAFATgJARIgBABIAQAWQAKANADASQAEATgDAUIgCAOIgCAFIAAABIgLAXIgJAPIgBAAIgGAHIgRANIgCAEIgBAAIgJAIIgIADQgOAGgNgGIgHAOQgHAPgPAGQgIACgGAAIgEAAg");
	this.shape_40.setTransform(12.4,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},2).to({state:[]},1).to({state:[{t:this.shape_36}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_40}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("AgVArQgUgXgPgNIAKAAQAZgCARgSQAQgUgGgcQAbAUAJAJQAPAPAAARQAAAcgSASQgRAQgaAAg");
	this.shape.setTransform(-3.6,-11.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AhcC2IgZgBQAFgNAHgrIAFgWIABgMIAAgBQABgGAGAAQAcAAAVgKIA8gmIAJARIAIgEQABgDgBgKQgBgKgDgIQA3AAARgyQANAUAEANQAFAOAAAmQgBAng8AuQg5AshWAAIgMAAgAhRhNIgqgZQAAghARgXQASgXAYAAQAxAYAPANQAVAQAAAUQAAAQgMAPQgPAUghAAQgHAAgjgUg");
	this.shape_1.setTransform(-6.5,-6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1D1F26").s().p("AglANQAfg4APgMQAoAVgPAiIgPAcQgIARABALg");
	this.shape_2.setTransform(-5.6,-6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AAZCKIAKg0IADAQIAKABQAFglAAgXQAAgvgGgzQgHgygLglIBLgCQAlCoghBMQgUAugTgCIgLABQgWAAgLgHgAhdAXQgVgagJgHIA4hrQABALAOAhQATArAbAiIg3A9Igggqg");
	this.shape_3.setTransform(-5.1,-14);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgmAdQgYgMgFgeQAOANAWAAQALAAAbgHQAogLAMgQQACAFAEAOQADAPAAAFQAAATgSAGQgPAFgoAAQgVAAgMgGg");
	this.shape_4.setTransform(0.9,-33.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AABBWQgDgEgMgUQgjg+g8g8IAIgLQADgFAGAAQAWAAATAXIALAOQANAQALAJIACACIAEACQAFABAAgBQACgKgMgTQgSgbglgVQAHgGAKAAQAZABAPAQIAOATQAjAmAJAJIAEAAQADAAAAgGIAAAAIgGgYQgOgcgigZQAUABAeAgQAfAfAGAcIAJAMIgBgcIgFgPQAWAdAAAaQAAArgVAPQgSANgxAAQgOAAgHgIg");
	this.shape_5.setTransform(-4.6,-44.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AgpAyQgLgKAAgKQAAgeAegfQAYgcAMAAQAOAAAPAKIAKAJQhRAYARBLIgFABQgPAAgKgKg");
	this.shape_6.setTransform(29.1,3.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E4E6").s().p("AhHBCQgmg4AAgTQAAgHADgJQAGgSAMgMQAFgGAmgLQAHgCAOgbQANgZAKAAQAKAAADADQAFADAAALQAAAggNANQgNAIgEAEQgBAGgCAFIBlALQAZACAAAbIAAAGQgCACgKAAQgLAAgcgFIgegFIADgXIgfAqQgcAogJAFQAFADAMACQAPADAEAFIAHAIQAGAGAAAQQAAAQgEAFQgCACgHAAQgdAAgqg9gAAAAtIARgZQAfARAKAHQAYATABATIgCACQgCABgGAAQg8gdgNgLg");
	this.shape_7.setTransform(40.3,8.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("ABcBlQhSg1AFgLQAPgYAWgUICjBkIgoA8QgqgZgpgbgAjWhOIAbgjQAOgVABgSICBBTIgWAhQgSAegCAFg");
	this.shape_8.setTransform(5.2,-11.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1F26").s().p("Ag2AMQAIgPAJgNIAbgjIBBAqQgGAEgTAbIgUAeg");
	this.shape_9.setTransform(3.3,-12.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AgPAuQAGgNAAgOQAAgfgHgMQgEgIgQgWQAKgFAKAAQAYAAAPAXQAOAVAAAfQABAcgKAHQgKAIgoABIAHgOg");
	this.shape_10.setTransform(-13.2,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("AgmBNIgNgMQAFABADgBQAAAAABAAQAAAAABAAQAAgBAAAAQAAAAAAAAQgPgGgHgJQgHgJgDgSIACgLQARAEAEgFQgHgKgQgGQgLgGAAgJQABgKAHgIQAOgRAigBIgJASIgNgCIgHAAIAMAHQAGAEAAAEQAAAKABgDQATgPAPgGIANgHIgHgBQgMACgHACIAVgeQAGgIAKAAQAYAAAUAaQAVAcAAAiQAAAGgNAqQAAAGgWALQgZAMgaAAQgfAAgGgGgAgzBBIAAAAIAAAAg");
	this.shape_11.setTransform(-24.5,-1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("AgwBhQgCgUgDgLQA5gSApgTIAygYIADgCIgRACQgPAAAcgNQAVgMACgEQANADANAJQAVAPAAAbQAAAkg2AXQgmAQh4AbQABgOgBgVgAhTggQgcgOg0gCQACgOASgfQARgdAJgJQASAEA6AVQA+AWARAKQgxA5gCAEIhGgTg");
	this.shape_12.setTransform(-3.4,-10.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1F26").s().p("AgaAjIgZgRQAUgsAVgKQAZgLAlAkIgpAhQgSARgMAAQgCAAgFgEg");
	this.shape_13.setTransform(2,-13.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#B3E4E6").s().p("AgIBOIAGgIQACgHgDgFQgPATgMADIgCAAIgBACQgGACgHAAQgFgBgDgDIgFgGIgEgJQgDgEAAgFQgDgRAAgRIAMALQAAAAABAAQAAAAABAAQAAABABAAQAAABABAAIgFAIQgDAGABADIAAACIACgBQABgEAIgFIAKgFIADACIAEgBIgGgHIgGgNIgBgNIgBAAIAAgDIgBgGIgCgHQgCgIgBALIgCALIAAAAIABAKIgDgEIgGgGIgPgLIgFgEIgCgHQgCgGADgGIACgGQAEgFALgJIAVgSIADgDQAKgGAIgCQAMgDAOgCIAJAAIABAAIABAAQAJgBAIACIADAAIAIACIAEACQAJAEAFAIIAAAAIADADIAAABIACACIAGAIIABgBIAGAKQAHAPABAQIAAAMQAAAZgLAYIgDAGIAAABIgFAGIgFADIgJAFIADgHIAAAAIgCgEIAAABIgBgBQgNATgSAFIgFAAIgEABQgLAAgJgGg");
	this.shape_14.setTransform(-10.5,44);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#526139").s().p("AA/AfQAAAAABABQAAAAABAAQAAAAABAAQAAAAABgBQgGgFgOgFIgEgFIgBAAQgFgNgNgEIgMgDQgLgEgIgCIABABIgMgBQgGgBgKABQgMACgMADIgDAAIgBABQgFACgHAEIgBAAQAGgTAQgNQAPgMAPAAQA0AAAbAWQAUARAAAWQAAAOgKAKg");
	this.shape_15.setTransform(-7.6,35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#1D1F26").s().p("AgygiQA9giAUAgQAIALAEAZIAIAqQgPgDgKAAQgFAAgRAEQgRAFgKAFQABgGgchRg");
	this.shape_16.setTransform(-8.3,-1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AAqELQgcgGgLgBQADgIAEgwIADg2IgBgbIgKhqQAQgQAZABQAcAEAOAAQAJB+AAAkQAABfgNAPQgMgEgbgHgAg5iQQgagwgFgFIgGgFQAGgCAagbQAagbAQgTQA/CfACAJIgJgCQgKgDgHAAQgTAAgHAFIgYANIgagwg");
	this.shape_17.setTransform(-10.8,3.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("AAJBVQgFAAgEgCIAFgDIABAAIABgBIAAgDIgBAAIAAgBQgUAHgRgIIgEgCIgEgCQgJgHgEgKIAJgFQAHgDAAgHQgYAHgLgGIgCAAIgBAAQgGgCgGgEQgDgEgBgFIAAgGIADgLQAAgFADgCQAIgPAKgNIADAPQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIgIADQgGADgBACIgBABIACAAQADgBAJAAIAKABIACAEIAEACIAAgHIADgPIAIgJIgBgBIABgCIAFgIIADgGQADgIgIAIIgKAJIAAAAIgFAIQABgCgBgDIgBgJIgDgTIgBgFIACgHQACgGAGgDIAFgDQAHgCAOgBIAZgBIAFAAIAFABQAIABAGADQALAFAOAIIAHAGIABABIANALIAIAJQAGAKgBAMIAAAAIABADIAAAEIAAALIAAAAIgBAJQgEAQgJAOIgIAJQgQAUgYANIgFACIgCABIgHACIgGgBg");
	this.shape_18.setTransform(-19.2,34.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#526139").s().p("AAgA/IADgBIgDgIIgBgGIAAgBQAEgNgHgMIgHgLQgGgKgHgFIAAABIgIgIQgCgFgJgGQgLgGgNgFQgGgEgXABQALgPAMgLQAJgIAFgDIAJAAQAPgBAhAoQAjAmAAAVQAAAKgKAQQgLASgOAGIACgMgAgbhJIAEgBQABAAABABQAAAAAAAAQgBAAgBAAQgBAAgCAAIgBAAIAAAAg");
	this.shape_19.setTransform(-11.9,28.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1F26").s().p("AguAHQgMgdAPgNQAMgKAggJQAIAAARAbQASAbAJAbQgYgQgeASQgTALgMAPQABgKgPgmg");
	this.shape_20.setTransform(-6.1,-3.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("AARDdQgSgZgTgFQAag/AAhDIACgaQAAgNgDgEQAGABATgLIAZgNQAIgEAMAAIAQACQAEAAACAgIACAqQgBApgPAyQgPA3gcAsQgIgRgPgTgAg8iKQgWgggPgNIAAAAQAzhAAMgIIBYCOQgZgLgdARQgTAMgHAMQgMgYgWgfg");
	this.shape_21.setTransform(-9.6,1.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3E4E6").s().p("AgOBYIgGAAIgCAAQgDgCgEAAIgFgEIgIgGIAHgBIABAAIABAAIACgCIgBgBIAAAAQgVgFgMgQIgDgEIgCgEQgFgKADgMIAKACQAHAAADgFQgXgHgIgKIAAgBIgCAAQgFgEgCgGQAAgFABgFIAEgGIAHgIQACgDAFgCQAPgJAPgHIgGAPQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgDgCgGAAQgHAAgCACIgBABIABABQAEAAAHAFIAIAHIAAAEIACADIAFgIIAKgKIALgGIgBgBIADAAIAIgFIAFgEQAFgFgJADQgLACgCABIABAAIgJAFIADgFIADgIIAHgSIABgGIAGgFQAEgDAGAAIAFAAQAHACAMAGIAZAOIADABIAAAAQAKAHAFAGQAHAKAHAPQADAEABAEIAAABIABADIAFAOIACAKQAAAFgBAFQgCAGgDAFIAAAAIgBADIgDAEIgEAJIAAAAIgHAJQgJAJgKAGIgGAEIgMAFQgYAIgXAAIgCAAg");
	this.shape_22.setTransform(-30.2,17.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#526139").s().p("AgQBDIgCgBQgEgBgCgCQAJgKAFgMIABgBQAJgKAAgNIAAgNQAAgJgDgKIAAAAIgDgLQgBgGgGgJIgOgWIgDgDQAegDANALQASANAAAqQAABEgvADg");
	this.shape_23.setTransform(-19.3,17.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1F26").s().p("Ag2gGQANgVASgJQAKgEAIAAQAdAAALAIQAPAMAFAoQgUgIgVAKIgkATQgOgXgSgYg");
	this.shape_24.setTransform(-5.4,-7.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("AgyCyQgCgXgIgMQAxgbARgYQAWgcAAgrQAAgMAHgKQANgWAcAAQAYAAADADQAJAKAAAtQAAA+gjAnQgkApheAqQAFgSgCgXgAhRiEQgYgdABAOQgIgFABgCIAAgDQABgBAGAAQAEAAAQgTIARgVQANgOAOgGQARAPBQBhIgKAAQgVgCgOAJQgJAGgUAYIhAg/g");
	this.shape_25.setTransform(-9.8,-2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1D1F26").s().p("AgrALQgIgMAAgFQAAgMAVgMQATgMALAAQARAAAHAGQANAOAPAxQgcgQgxAgQgFgLgNgVg");
	this.shape_26.setTransform(-6.2,-8.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#758A51").s().p("AiCCqIAGgHQAEgHAIgZQAJgegCgLQABAEA7ABQAfgBAcgFQA9gLAJgOQgPADgKgKQgGgEgDgHQASgWAaAAQAQAAAIAFQANAIAAAZQAAAygoAeQgvAihfAAQghAAgugGgAgyhfIgLgGIgHgGQAQgbAWgVQARgQALgEIAMASIABABIBIBcQg0gBgVAkIg8hCg");
	this.shape_27.setTransform(-13.3,-7.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#526139").s().p("AgmA4IALgHIABAAQAMgDAIgMIAGgMQADgKACgJIAAAAIADgJQACgGAAgLQAAgMgBgOQgBgFgGgKQAOgBALAJQAMAJgBAXQAAAlgQAbQgQAZgVAAQgLAAgMgJg");
	this.shape_28.setTransform(-29.4,3.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#B3E4E6").s().p("AACBUIgKgCQgbgEgWgOIgFgEIgBgBIgGgFIgCgGIgDgJIAGAEIAAAAIABAAIADgBIAAgBIABAAQgRgQgCgTIAAgFIgBgCQABgLAJgJIAHAGQAGAEAGgDQgRgRgBgNIAAgBIgBgCQgCgGACgHQABgFADgCIAHgEIAKgDQAEgCAFAAQARAAARACIgNAKQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBABQgBgDgGgEQgFgDgDABIgCAAIABACQADABAEAJIADAKQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAgBABIABAEQADgDAFgBIANgEQACgBAJABIAAgBIACABIAJgBIAHAAQAJgBgLgDQgLgEgCABIABgBIgJAAQAEgBABgCIAFgFIAPgMIAFgEIAHgCQAFAAAHADIAEADQAFAFAIAMIANAWIABABIADADQAEALABAIIAAAAQABAMgBAPQABAFgCAEIAAABIgCARIgFALQgFALgKAFIgBAAIgDACIgDACIgJAFIAAABIgKAEIgHACIgHABIgPABIgDAAg");
	this.shape_29.setTransform(-38.6,0.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1F26").s().p("AgqALQgJgLAAgGQABgMAwgVQAZgFAOAZIAPAmQgTgNgeAPIgcAUIgRgeg");
	this.shape_30.setTransform(-6.7,-9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#526139").s().p("AglBDIgEgBQgFgCgBgBIgEgCQAJgCAJgDIABAAQANAAAKgJIAJgKQAFgIAFgJIAAAAIAGgKQADgFADgIQADgMACgOQACgJgJgZIgCgGQANAEAGAEQAPAJAAAaQAAAkgVAdQgXAfgdAAQgHAAgJgDg");
	this.shape_31.setTransform(-31.8,0.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#758A51").s().p("AiNCaQAKgJAOgbQAOgdgCgNQBdgBAXgFQAagEA0gOQgUgFgLAAQAigWAJAAQAKAAAYAEQAPAdgUAxIgCADQgbAshlAHQgiADgcAAQg1AAgagKgAgSg/QgUgUgKgCQAmg/AJgKQAEgGADABIgBAFQAAACAoAwIAtA5IgLgCQgLAAgZAOQgWANgFAHQgRgagRgSg");
	this.shape_32.setTransform(-14.2,-8.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3E4E6").s().p("AAIBXQgMAAgPgFIgMgFQgXgLgSgTIgFgFIgBgBIgDgHIgBgGIgBgKIAFAFIABABIAAAAIADAAIAAgBIABAAQgMgTADgRQAAgDABgCIABgEQAEgLAKgHIAFAJQAGAFAGgCQgMgUACgNIAAgBIgBgCQABgHACgGQADgEAFgCIAHgCIALAAQAEgBAFACQAQAEAOAGIgNAHQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBABIgFgIQgFgFgCAAIgCgBIAAACQADADABAJIABALIgCADIgBADIAIgCIANAAIAMADIAAgBIACACIAJACIAHABQAIABgKgGQgJgGgCAAIABAAIgKgDIAFgBIAIgDIARgJIAGgCIAHAAQAGABAFAFIAEAEIAIATIAGAUIACAHIABAEQACALgBAGQgCAMgFAQIgEAIIAAABIgIAQIgHAKQgIAJgLABIAAABIgEABIgBAAIgDABIgJADIAAAAIgMACIgBAAIgBAAg");
	this.shape_33.setTransform(-39.2,-2.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B3E4E6").s().p("AgCBcIgJgEQgFgCgDgEQgMgLgLgNIAQABQABAAAAAAQABgBAAAAQABAAAAAAQABAAABAAQgBADACAHQABAGADACIABABIACgCQgCgEADgIIAEgKIAEgBIACgDIgIgCIgNgHIgJgJIgBABIgBgCIgHgGIgFgFQgGgFAFAKQAFAKACABIAAAAIAGAHIgEgBIgJgBIgUgBIgGAAIgGgEQgEgEgCgHIgDgFIACgMIACgHIAFgbIABgEIAEgKIAEgHQAIgKAMgLIAGgGIABgBIAPgKIAKgGQAKgCAIABIADABIAAABIADAAIAFABIAJACIAAAAIAHACIAEACQAOAHAMAMIAIAKQAQAVAGAZIABAGIAAACIAAAFIgCAGIgDAJIgDgHIAAAAIgBgBIgCgBIAAAAIgBABQABAWgLAQIgEADIgCAEQgJAHgLABIgCgKQgCgHgGgCQAAAYgHALIgBAAIAAACQgEAGgFAEQgFACgEAAIgGgCg");
	this.shape_34.setTransform(22.8,34.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#526139").s().p("AhJAxQgJgJAAgHQAAgUAZgXQAYgYAhgQQAggQAYADQAYAEADAaIgFgBIgEAAQgKgDgLgCIgBAAQgLgHgNAEIgMAEQgLAEgHAFIABAAQgGADgEAEQgFACgIAIQgJAJgIAJQgGAHgEAZIgCATIgEAHIgQgPg");
	this.shape_35.setTransform(18.4,27.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#1D1F26").s().p("Ag8gFQANgWAWgQQAVgOAHAEQAGAAA0BEQgQAFgbAOQgaAOgHAHg");
	this.shape_36.setTransform(-2.6,-2.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#758A51").s().p("AgmAdQAFgOAYgMQAXgLAbACICbDLQgGADgiAXIglAZgAiah9QgSgVgXgRQAKgHAagjQAZggAFgKIAfA2IBDBaQgMgGgZAUQgVAQgMASQgigxgTgVg");
	this.shape_37.setTransform(0.5,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#B3E4E6").s().p("AgWBZQgVgpgLhQIgEAAIgFADQgEAKAAAHQAAAWAGAfQAKA2AUAOIgIgBQgSgMgTgwQgRgwgBggQABhFA4gOQAwgMAaAbQAUAUAFAtQADAXAAAcQABAIAPAfQANAdAAAKQAAAPgYAAQgRAAgMgJQgNgMgKgaQgKgXgGgiQgDgVgHgFIgDAJIgBAJIAJA1QAMA3AaAMQgRACgJAAQgPAAgQgeg");
	this.shape_38.setTransform(12,20);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#526139").s().p("AAYgLQgYgOgjAAQgGAAgMADIgSAGIAAgBQAOgbAaAAQAqgBAgAWQAdAVAAAYQAAALgIAKQgFADgHAAQADgngfgSg");
	this.shape_39.setTransform(14.1,8.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#758A51").s().p("ACBB+IgkgHQgKAAgWAPQgFgQgUgYQgSgVAAgFQAAgTAegWQAbgTAKAAQAQAAAhA0QAZApAOAjQgJgDgjgHgAiNgmQgRgIgOgDQAAgOAQgjIAPgkIApAWIBdAzIgIACQgFADgZAaQgXAbgDAEQgkgZgigOg");
	this.shape_40.setTransform(0.4,-9.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1D1F26").s().p("Ag/AFQAcgvARgHQAegNA0A2QgbAIgTAZQgMAPgFANQgNgOgzgig");
	this.shape_41.setTransform(1.1,-9.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#B3E4E6").s().p("AAaB6QgagtAGhdQgGAHgEASQgGAVAAARQgCAvAOAbQgsgegEg+QAAgOABglQACgigDgTQgHAMgMA4QAAAwAIAeQAEAPAIAOIgKgIQgOgMgKgUQgNgZAAgcQAAhgAlgoQAVgXAYAAQAdAAAfAYQAkAcAAAmQAAAFgLAnQgLAlAAAFQAAALAOAzQAPAyAAAFQAAAMgaAAQgXAAgSgfg");
	this.shape_42.setTransform(-7.1,-8.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#758A51").s().p("AA7CiQgggNgSgPQAnAFALgPQAHgIABgQQAKAOAHgGQgCgLgPgWQgRgagKgaQAXgDAQgTQANgOABgQIALglQAVAfAaA8QAaA+AAAUQAAAggKAPQgNAVgmAAQgWAAgjgNgAiog2IgCgBIgCAAIgCgBIgBACQgBAAAAgGQAKgMAKgSQAHgMAHgdQAHgcAIgPQARAYgRAqQgYA7AAANg");
	this.shape_43.setTransform(-2.9,-5.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#526139").s().p("AgPBOIANgrQAKgkAAgFQAAgYgIgJQgTgWgRggIAPAGQAlAPAMAhQAJAWAAAwQAAAxgxAOg");
	this.shape_44.setTransform(1.9,-14.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1D1F26").s().p("AggAUQgbgsAAgDQAAgBAagUQAbgTAHgEIA7BHQgMgBgUATQgWAXgHAfIgfg0g");
	this.shape_45.setTransform(-8.1,-7.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B3E4E6").s().p("AhYA9QgBgmAZgRQANgHARgFIAHgEIAHgGIgVAAQgGAAgMAFQgUAJgMAPIgGAJIAAgLQAAgdAcgJQAsgJAbgKIgKgFQgLgEgGABQgVAAgYAJIgRAJQgBgMAVgXQAcgdAnAAQAnAAAdAbQAeAcABAtQAAAMgbAHQgzALgaANQgLAFgTAbQgRAagGAAQgeAAAAgog");
	this.shape_46.setTransform(-8.6,-32.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#758A51").s().p("AAICPQgmgPAAgRQAAgMAZgdQAXgbAKgDIgCA8IAIACQADgLADgSIADgQQABgNgEAXIAFgeIAAgBIAAgYQAAgVgEgNQgJgdgZg7QAQACAbgLQAggOAOgVQAVBDAVA3QAKAgAAAqQAABEgkAcQgXARgfAAQgQAAgigMgAiMhJIgHgHQAGgEAHgJQAIgJAEgIQAaAFAUgIIAcA2QgEACgYASQgYAUgDAFQgCgOgjgtg");
	this.shape_47.setTransform(-4.1,-10.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#526139").s().p("Ag7A0QgPgKAAgTQAAgFACgBQABAAABAAQABgBAAAAQAAgBAAAAQAAgBAAAAQgBgEAigBQAiAAAMgIQAPgFAFgGQAGgGAJgrIABgBQARAJAIAVIAEAVQAAAUgeAXQgiAagtABQgNAAgMgJg");
	this.shape_48.setTransform(-1.9,-29.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#758A51").s().p("AgJBOIAAAAIAAAAQAQgXAJAAIAcAKQAdALAEAAQAUAAAUgTQAagZAAglQABgKgFgUQAXABAPgDQAQgFAQgLIAFAgQADATABAGQAAAugbApQgqA/hWAAQhcgMAUhAgAiNAAIgcgxQgTglgTgUIgKgMQARgUAMgGQAPgEALgFIAFABQADADASAhQAXAoAXAfQgaAVgUAgg");
	this.shape_49.setTransform(4.8,-9.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#1D1F26").s().p("Ag8gMQAAgIATgXQAQgTAIgHIAkAnQAfAeAMACQgIAHgRAbQgSAbgCAHIhNhSg");
	this.shape_50.setTransform(-1.5,-5.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#526139").s().p("Ag4AnQgRgOABgZIAAAAQADAAAMAHQALAHAeAAQASAAAUgLQAagNAIgfIACgKQAFAFAFASQAFATAAARQAAANgUAOQgZARgjAAQggAAgRgNg");
	this.shape_51.setTransform(20.1,-19.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B3E4E6").s().p("AAGBgQgWgNgIgRQgHgQgGgZQgKgUgdgWQgZgWAAgBQAAgNAJgIQAHgHALAAQAMgBARAKQAjAVAgA3IAIgDIgcgvQghgvglgBIgDgDIALgIQALgIAJAAQAXAAAMASQAZAlAnAgIAJAAQgEgJgYgiQgagkgMgIQAgAUAeArQAnA0AAAwQAAAWgbAMIAAAAIAAAAQgYAEgQAAQgTAAgLgFg");
	this.shape_52.setTransform(14.1,-30.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#526139").s().p("AgqArQgHgJAAgDQABgVAbgcQAdgjApgKIgBAMQgGAGgMAEQgHACAAAGIgaAbQgcAYgBAgQABAGACADIAEAEIAAABQgKgIgHgNg");
	this.shape_53.setTransform(17.8,4.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B3E4E6").s().p("AAAB6QgjgUgjgWQhGgtAAgTQAAgJAEgLQAEgOAGgGQAHgIAWgJQAYgJAJgHQAJgHAKgiQAIgbATAAQAEAAAFAEQAHAGAAAOQAAAYgKAPQgNAPgFALIAJgDQAWgEA2gRQAmgIAVAHIAHgBIAAAAIgGABQAVAHAFAUQgIAFgrAHQgoAHgNAAIgBgRQgBgIgCgCIgDAJQgMAhgXAmQgWAjgJAFIAHADQABAAAGgFQAGgFAFAAQASAAAVALQATALAAAJQAAANgDADQgGAFgdAAQgEAAgFADIAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAgBgAALAqQAFgHAEgPQADgJAFAAQAhAAAfAJQAbAIAJAJQgHASgjACIgIAAQggAAgjgPg");
	this.shape_54.setTransform(30.2,7.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#758A51").s().p("AAQAuQAKgYASgWQATgYANgGQAgAXAiAmQAcAgALAUQgVAGgZAWQgXAVgIAQQgFgKhThcgAilglIgEgBIgLAEQAEgZALgiQANgpALgNIAFABQAHACBcApQghAjgRA5QgfgMgvgOg");
	this.shape_55.setTransform(2,-11.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#1D1F26").s().p("AhBAYQAJggAVgfQAKgPAKgKIBRA0QgOAJgSAWQgSAZgJAVg");
	this.shape_56.setTransform(1.5,-14.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3E4E6").s().p("ABAAzIgPgIIATADQAIgBAOgHQAQgJADgGQAEABAFAFQAIAHAAAMIgBAJIgDAKIgCABQgCABgGAAQgLAAglgSgAhlAjQgfgeAJghQgDgDAKAAQAoAAALAeQAHANgBATQAKgQABgLQAMAKAkAMQAqANADACQgEABgbAMQgYAMgGAAQg1AAgggfgAAzAZIgNgHQAHgIAGgQQAGgTgFgIQAeANALAVQANAagsAAQgGAAgFgCgAgrgOQgagNgegTIAbgPQAOgHAOAAQAvAAAUAUQANANAAATQAAAKgCAHQgHADgKAAQgXAAglgSg");
	this.shape_57.setTransform(0.9,9.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#758A51").s().p("ABBCCQgkgRgdgKQAggeAFgOQAJgWAIgKIADgQQgWAPgGAMIgNgLQAGgcAhgaQAagVAIAAQAXAAAXAuQATAkAAATQgSBFgcAgQgMgJgfgPgAiZgwQAGgRAOgaQAMgbAAgjIAFAAIBOAeQgVAQgHALQgMAPgPAwQgigNgagCg");
	this.shape_58.setTransform(-0.7,-9.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1D1F26").s().p("AhKAVQAGgnAWgZQARgUANAAQAnACAQAMQAQAUAUAOQgSANgRANQghAegFAXQgPgOg9gdg");
	this.shape_59.setTransform(-0.8,-14);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#526139").s().p("AgIAwQAIgKAAgNIAAgNQAAgKgBgIIgDgKIgFgOQgGgLgHgJIgGgGQAagGAOARQARATAAAnQAAAbgJAIQgIAHgZAEIAFgLg");
	this.shape_60.setTransform(-9.6,1.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B3E4E6").s().p("AgUBUIgCABIgGgDIgFgDIgGgGIAHAAIACgCIAAgBQgVgFgKgOQgCgCAAgDIgCgDQgEgKACgKIAJAAQAHABAEgGQgWgGgHgJIgBgBIgBgBQgFgCgCgGQAAgEABgFQABgDADgDIAGgIIAIgGQANgIAOgHIgFAOQAAABAAAAQAAABAAAAQAAABAAABQAAAAgBABQgCgCgGAAQgHAAgCACIgBABIABABQAEAAAGAFIAIAGIAAAEIACADQABgEAEgEIAJgJIALgHIgBAAIACgCIAHgEIAFgDQAEgEgIACQgKACgBABIAAAAIgIAEIACgEIAEgIIAFgSIADgFIAFgFQAEgDAFAAIAFgBIASAIIATAKIADACIAEABQAIAHAEAGIAKAPIAEAIIAEAIIAAABQADAHABAIQACAEAAAGQABAKgGAJIAAABQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQAAABAAAAIgFAIIAAAAIgGAKIgHAGQgHAHgJAFIgLAGQgYAJgXAAIgFgBg");
	this.shape_61.setTransform(-19.6,2.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#758A51").s().p("AgFCLQABgdgDgZQAAgKASgSIAagTQAMgKAWgYQAYgSAsgGQATA9gxAwQgiAgg0ARQAAgBgQAEIgNAFgAhHgwQgzgOgVgDQAFgQAVgfQAUgdAHgEQBFAPBRAzQgUALgOAOQgLAMgNAUQgSgKg3gQg");
	this.shape_62.setTransform(-5,-9.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#1D1F26").s().p("AgzATQAJgTAWgRQAUgRAIAAQAKgBAjAeQgcANgWANQgJAIgFAAQgJAAgFAHg");
	this.shape_63.setTransform(2.1,-12.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B3E4E6").s().p("AAJBtQgEAAgDgBIgMgGIgJgGQgQgNgNgQIAUABQACgCADAAQgBAFACAGQADAJADACIABABIABgCQgCgFAEgJIAFgMIAEgCIACgDIgKgDIgPgIIgMgKIAAAAIgDgCIgHgHIgGgGQgIgFAGALQAGAMADABIgBAAIAKAJIgIgCIgJgBIgYAAIgHAAQgTgIAAgVIgBgHQgBgQAEgRQACgPAFgNIADgEIAFgLIABgBQAFgJAHgIIABgBQAIgIAJgGQAKgEAMgDQATgEARAGIANAEQAQAHAQAJIATAMIALAHQAFADAFAGQAFAGADAHIANAlIAAAFIAAACIgCAGIgEAKIgDgIIAAAAIgEgCIgBABIAAgBQACAcgNASIgFAFIgDADQgJAJgOADIgDgNQgCgIgIgCQABAegIALIgBACIAAABQgDAJgHAFQgEACgFAAIgCAAg");
	this.shape_64.setTransform(23.5,52.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#526139").s().p("AhVAsIgHgUIAAgBQABgZAPgNQAOgMAsgTIAogRIAWAHQAXAIAJAGIAMANIADAUIABABIABAEIAAACIgNgIIgDgDIgBAAIgDgCIgBgBIgEgBIgIgEQgHgDgIgBQgngFgYALQgIADgGAFQgOALgJAQQgIANgFAPIgFAKIgFAKIgHgUg");
	this.shape_65.setTransform(19.4,42);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#1D1F26").s().p("AhGgQQAMgTAhgQQAagNATgCIAzBVQgZAAgeASQgZAQgKAOg");
	this.shape_66.setTransform(-1.9,4.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#758A51").s().p("AAdCfQgdgugZguQAJgPAagPQAggSAXABIB0DIIgBAAIAfA2QgnAOglARIgQAIgAiyi1QgCgCgEAAQgCAAgHgLQgRgVAAgDQAAgTAqgmQAogmAPABQAFAmAWAnQAqBBAnBDQgdAFgfASQgbAQgFALQhDhzgOgNg");
	this.shape_67.setTransform(-0.2,6.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#526139").s().p("AhRAqIACgBIgCAEIgBABIABgEgAhXgCQAAgOAPgMQAVgRAsgBQA4ABAWAUQARARAAAgQAAAEgBADIgDgEIAAgDIAAAAIgBAAIgDgBIAAgBQgJgKgJgGQgFgFgHgCQglgPgbAFQgHABgHADQgSAIgNAPIgIAIIAAAAQgNAFgHAFg");
	this.shape_68.setTransform(30.6,22.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#B3E4E6").s().p("AgTB4QgEgBgCgCIgMgKQgEgEgEgFQgLgSgIgUIATAHQACgCAEABQgDAFABAHQgBAKADACIAAACIACgCQAAgFAGgJIAIgMIAEAAIAEgDQgEgCgFgEIgNgMIgIgOIAAAAIgCgDIgGgJIgEgIQgGgIADAOQACAOADACIgBAAIAHALIgHgDIgIgDIgYgHIgGgCQgQgNAFgUIABgHQAEgUAJgRIABgCIABgEQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAAAQAFgLAIgKIAIgLIACgBIABgBQAIgIAJgGIABgCIAEgDQAIgFAIgCQALgCAMAAQANABANAGQALAFAJAIIAFAEQAZAVAUAcQAEAEADAHQAEAIAAAIIACApIgBAFIgBADIgEAHIgHAJIgBgIIAAgBIgDgDIAAABIgBgBQgGAegSAQQgDADgCAAIgEADQgMAHgOAAQABgIAAgHQAAgJgHgEQgHAggLAKIgCACIAAABQgEAIgHADIgGABIgGgBg");
	this.shape_69.setTransform(31.4,35.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#758A51").s().p("ACICQQgWg2gDgEQgOgYglgsIgigkQAAgMAZgZQAbgbAVAAQAWAAA5BjQAoBJAlBRIAJAeQgPgCgrAFQgnAFgFACQgEgLgWg4gAjRhpQgKAAgQAGQgSAIgJACIgBAAQACgNAIgTQAQglAkg0QAXAKAYAFQA0AMBMAWQgfAkgJARQgEAPgIAMQgmgMhdgMg");
	this.shape_70.setTransform(7.5,-3.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#1D1F26").s().p("AhGASIAWguQARgfAQAAQAOAABIA2QgaABgSATQgHAIgUAlQghgZglgRg");
	this.shape_71.setTransform(8.5,-13.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#1D1F26").s().p("Ag3geQASguAvABQABAAARAcQAVAiANARQgcAGgWAVQgNAOgTAgQg4g7AVgwg");
	this.shape_72.setTransform(-10,-3.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#758A51").s().p("Ag9CeQghgYAAgNQAAgOAXgUQAYgVAngTIAKAJIgXAeIgIAIQAVgEApgmQA1gtgFgoQAVAMAiAFQAoAHAagLQg1BzgyAxQgqAqgyAAQggAAgkgcgAivglQgLgRgPgNQANgYASgZIAxhFQACAGAAAUQABADAqBnQghgEg0A1QgEgQgKgRg");
	this.shape_73.setTransform(-1.7,-6.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#526139").s().p("AhNAzQgTgSAAgSQAAgJACgGIAKAKQANAJAPgBQAUgBAFACQARAHAXAFQAfAGAZglQAYgngHgkIACAEQALARACAdQAAA2gaAZQgXAXgvAAQgzAAgbgag");
	this.shape_74.setTransform(14.1,-17.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#B3E4E6").s().p("AAOBrQgKgNgIgZIgCACIgBAHQACAOAFAPQAIAOAAACIgIgFQgMgIgVgKQgNgLAAgbQgBgNAUgjQAQgbAPgYIgLAGQgNAHgPATQgOARgJAVQgXgOgDgaQAAgLAQgXQAZgiAFgKIgLAFQgLABgMASIgQAWQgWgDAAgcQAAgmAlgQQAigPAsANQAwAPAfApQAlAwgBBEQAABXg5AAQggAAgRgagAhuAcQgKgPABgMQAAgHACgKQADgMAEgFQAEAFADACIADABQgGAZAPAUQASAXAJAPQgfgHgPgXg");
	this.shape_75.setTransform(8.6,-29.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#526139").s().p("AAhAYQgigCgXgSQgOgIgNgUIAzAeQARAJAjAKg");
	this.shape_76.setTransform(11,37.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#B3E4E6").s().p("AhDBYQgsgiAAgjQAAgEAFgJQAHgIAIgGQAmAHAXAnQAXAqgqAAQAFAAgLgIQgWgOgHgGIgKAIIAKAJQAYATANgBQAYAAAOgMQAEgEAGgNQADASASAQQAUASAVgCIgDAFIgKAJIgSABQg1AAgugjgAAbBDQgMgaAAgkQAAgXAKgSQAMgWAZAAQATAAAPAWQAQAXAAAgQAAARgJASQgBAAgBgGIgBgGQgDgMgCgaQAAgHgNgIQAIA2gNAbQgKAUgSAAQgLAAgLgXgAgigOIgHgfQAAgWAMgTQANgTARAAQAKAAAKAHQAMAIAHAOQggAQgGAZQgCAHgBA7QgVgOgMgfgAhOgpQgGgPAAgGQAAgXAMgRQANgUAVAAQAKAAAIAEIgIAFQgkAPAGBUQgMgIgIgTg");
	this.shape_77.setTransform(15.1,26);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#1D1F26").s().p("Ag3gHQAQgQAFgDIA4gfIAiA5IhOA6g");
	this.shape_78.setTransform(-8.7,2.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#758A51").s().p("AAtCzQgXgbgwhIQAmgoAWgMQAPgFAEgEQA0BCAXAQIAHAEIgBAJIgJAiQgJAiACAIQAEATgCAHQgDAFgSARQgngogPgTgAiGibIAggnQARgWAFgVIAHACQAKAaAfBFIAgBHIhNAyQgmhlgTgjg");
	this.shape_79.setTransform(-7.4,2.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#758A51").s().p("AiPB7QAGgGAXgrQAZguABgKQATAIAlAAIApgCQAFAAAOARQAOAQAFAAQADAAABAAQACAAAAAAQABAAgBAAQAAAAgCAAIACAAQABgBAAgHQAAgOgegaQgVgPgSgMQAJgGALgbQASgkAAgkQBJBCAWAYQAaAcAAANQAABKhRAaQgyAQhoAAg");
	this.shape_80.setTransform(8.5,-12.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B3E4E6").s().p("AgjCkQgKgIAAgNQAAgmAOgrQARg3AbgUIgFgFQhLA4ADBgQgOgIgKgKQgTgQAAgSQAAgbATgeQAQgZA4hEIAKgKQgLAEgoAjQgrAmgKASIgHAMIgCgCQgCgDAAgHQADhWAtgiQAtgiAPgOQANgOAngEQAngDAVATQAXAVAAAoQAAALgeA5QgaAxgFAHQgJAMgHAjQgJAmgGAOQgJASgSAMQgNAJgJAAQgIAAgIgGg");
	this.shape_81.setTransform(-7.6,-17.8);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#526139").s().p("AgqBXQAJgaAegvQAVgjAAgQQAAgIgCgRQgEgRgDgIQAPAEAKAVQAJAVAAAcQAAArgeAfQgZAbgcAAIgCgBg");
	this.shape_82.setTransform(4.6,-23.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#1D1F26").s().p("Ag5AZQgQgVAAgSQABgYAsgSQAcgMAVgDQAZAoAcAkQgWAIgTAKQghAUgUAcQgOgSgXgcg");
	this.shape_83.setTransform(-9.7,2.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#758A51").s().p("AAfCwQgigQg+grQAOgZAPgPQAbgbAWACQAZACAIAOIADAFQgPAEgHAGQgHAHgIACIAFAFIALACQAIAAANgGIAYgNIABAAQAnAwAaALQAQAHAdAFQgRAMgaALQggAOgQAAQggAAgegMgAirhCQgJgIgDgGQAdgmA6hFQABANATAuQASAsAOAbQgfADgfATQgcARgFAOQgag4gGgGg");
	this.shape_84.setTransform(-3.8,-0.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#526139").s().p("AgEA+QgegEgegZQgegYgCglQADgOADgIQBABFA3AAQAUAAAOgUQAJgOATgxQAOA4gUAgQgRAegVAFIgSAFIgGABQgKAAgRgDg");
	this.shape_85.setTransform(13.3,6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#B3E4E6").s().p("AATCIQgagXgGgzQgFAKAAATQAAASAFAAIADALQgXgNgMgZQgJgQAAgKQAAgTANgSQAMgQArgqQgMgCgTANQgWANgSAXQgHgIgMgbQAAgWAQgMQAcgUALgPIAFgGQACgBgKAAQgKAAgdAWIgJAIQgEgCgGgJQgHgLAAgJQAAgTAUgOQAVgOAbAAQBAAAAoBXQAeBAAAA1QAAAegPAhQgRAlgVAAQgWgBgTgQgAhlgBQgLgVAAgMQAAgIAFgNQAGgRAGgEIALAOQgJATAAAPQANAkAPANIgEAJQgSgHgOgYg");
	this.shape_86.setTransform(9.7,-9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#B3E4E6").s().p("AhIB5IASg1QgGAFgLAQIgLASQgKgQAAgMQAAhRB1ADIgNgIQgHgGgFAAQgJAAgZAHQgOADgJgJQAGglAPgKQAJgGAbAAQAGAAANgCQAMgDAFgCQgWgMgJgBIgYACIgCgCIgBgIQAAgLAFgKQAKgUAZAAQAnAAAUAkQAQAdAAApQAABHgtAvQgqAtg6AAQgFAAgPgOgAhSgGQgCgKAAgHQAAgiAPgTQAIgLAVgNIAFABIAAATQgPAJgMAOQgZAcAQAeIgHAFQgCgEgCgIg");
	this.shape_87.setTransform(9.7,18.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#526139").s().p("AgCAiQgLgUAAgBQAAgKAJgPQAEgMAFgJIACAJIAEAIQADAEAAAGQAAAIgOAVQgBAAgBALg");
	this.shape_88.setTransform(-0.6,21.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#1D1F26").s().p("AgTBJQACgDgKgOIgKgNIgYgkQgKgOAAgHQAAgTAngWQAggUAGAAQAGAAAPAPIAtAuQgdANgfAhQgYAdgEAPg");
	this.shape_89.setTransform(-7.7,5.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#758A51").s().p("AAMCeQATgtAngaQApgcAUAhQgKAIgMATQgTAdAAAbIAAAGQgFAJgQAOgAhxhEQgEgBAAAGQAAAGgGgMIgFgEQgCgCAAgGQAAgLAmgvQAlgsAXgUIAAAcQAAAUAVA2QARAvATAlQgLACgaAPQghAVgQAWQgxhugDgBg");
	this.shape_90.setTransform(-9.6,-1.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B3E4E6").s().p("Ag/AxIgHgUIAJAFIAPAFQgFANACAJIAAACIAHgLQAIgKAMgEQgSgRgHgNQgFgMgHgNIgCAAIAAgBIAAAGQAAAHADAKIAFAKQgEgDgfgMQgRgHAAgTQAAgGANgXQANgXAMgPQANANAdAKQAbAKAXAAQANAAAPgFQAVgGAMgMQAUAfAAAtQAAAZgFAGQgHAIgHAKIABgJIgEgDIgBAAQgTAagHAIQgMAMgRAAIgIgBIgCgBIADgQQAAgGgFgEQgUAugUAAQgVAAgSgtg");
	this.shape_91.setTransform(16.2,9.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AAAAAQABgDAAAFQgDgBACgBg");
	this.shape_92.setTransform(11.2,-9.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#526139").s().p("AgxAsQgdgQAAgbQAAgBAHgVQAHgZAHgJIAIgFQgCARAAAKIACAAIAdALQAeALAUAAQAQAAALgHQAMgHAAgLIABgLQADADADAOQADAOAAAIQAAAwgPAPQgHAGgTAAQg4AAgfgRgAg2gkQgCACAFABQAAgBAAgBQAAgBgBAAQAAgBAAAAQAAgBAAAAIgCACg");
	this.shape_93.setTransform(16.6,-5.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#1D1F26").s().p("AgkAnQgMgUAAgMQAAgUAMgJQAKgIAwgcQgFAPAIAeQAJAbAOAJIhCAkQgGAAgMgUg");
	this.shape_94.setTransform(0,-28.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#758A51").s().p("ACoCOQgVgDgKgFQAYgogahUQgbhUgtAEIAbAfIgOAAIgGgGQgPgLgKgPQgIgOAAgIQAAgbAFgEQARgUBIABQA5gBAXBDQAOArAABEIgDAxIgEA8QgNABgKAAQgLAAgQgCgAjOB+QgSgUAAgZQAAgZAQgcQAQALAagWQBPhAAagUIgCAMQgEAXAIAQQAGAPASAOQgiAagcAhQgaAdgLAYIgUAPQgJAEgJAAQgRABgRgTg");
	this.shape_95.setTransform(-0.1,-23);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#758A51").s().p("AAaCZIgzhWQAJgPAagPQAggSAXABIB0DIIgBAAIAfA2QgnAOglARIgQAIgAiyi1QgCgCgEAAQgCAAgHgLQgRgVAAgDQAAgTAqgmQAogmAPABQAFAmAWAnQAqBBAnBDQgdAFgfASQgbAQgFALQhDhzgOgNg");
	this.shape_96.setTransform(-0.2,6.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B3E4E6").s().p("AAJBtQgEAAgDgBIgMgGIgJgGQgQgNgNgQIAUABQACgCADAAQgBAFACAGQADAJADACIABABIABgCQgCgFAEgJIAFgMIAEgCIACgDIgKgDIgPgIIgMgKIAAAAIgDgCIgHgHIgGgGQgIgFAGALQAGAMADABIgBAAIAKAJIgIgCIgJgBIgYAAIgHAAQgTgIAAgVIgBgHQgBgQAEgRIAAgCQAEgVAKgSIABgCIABgBQAFgJAHgIIABgBQAIgIAJgGQAKgEAMgDQATgEASAGIAMAEIAUAKQAWALAUAOQAFADAFAGQAFAGADAHIANAlIAAAFIAAACIgCAGIgEAKIgDgIIAAAAIgEgCIgBABIAAgBQACAcgNASIgFAFIgDADQgJAJgOADIgDgNQgCgIgIgCQABAegIALIgBACIAAABQgDAJgHAFQgEACgFAAIgCAAg");
	this.shape_97.setTransform(17.7,42.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#526139").s().p("AhTAiQgCgGAAgGQAAgeAigXQAWgPAUgEQAbgOAgAPQAhAOADAfIgCAAIgFgEQgKgHgKgDQgHgDgIgCQgngEgYALQgIADgGAEQgOALgJAQQgJAOgFARIgCAIIgBABIgKgYg");
	this.shape_98.setTransform(13.8,31.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#758A51").s().p("AgeAmQg4hjhThMQgNgLAAgBQAAgMBVhtIACAEQAHAOAKAeIEFHFQgVAAgiAMQglAOgGAOIhzjpg");
	this.shape_99.setTransform(-2.9,1.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#758A51").s().p("AABC0QgugegYgzQgPgigehPQgchFgXgXIgEACIAvhkIAGAhIABADQAlBPA/BbQAdAvAYAfQAAAIgDAVQgDAVgDAHQALgEAKgZQAKgaAAgWQAAgYgIgfQAWAGAngEIA0gHQAFAkAAAbQAAA+gOAfQgWAxg8AAQgiAAgngZg");
	this.shape_100.setTransform(2.4,-9.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#526139").s().p("AgjA2IgVgHQgOAAgagYQgcgYAAgTQAAgFABgEQACgHABgHQAMAMAJAGIgEgBQgCAAgEACQgDADgBACQAPAFAcAIQAaAGAFAAQA9AAAUgHQAQgGA4geIgFgBIgGACIAJgSIAGAJIAGAgQAHArg5AWQgmAOglAAQgLAAgXgGg");
	this.shape_101.setTransform(12,-16.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B3E4E6").s().p("AgFC9QgpAAgjgpQgegkAAgfQABgYAGgMQACgEAlAXQgFgFAJACQAMADALAMIAPAQIAEAEQgHAIgIAEQgHAEgCAAIgwgSIgBAGQAMASAHAFQAJAHAYAAQAMAAAHgLQAGgMALAAQAEAAAJAGQAJAGAFAAQAJAAARgQIARgPQAGAAABgIIgBgQQAAgigJgWQgHgSgNgJIgFgEQADAJADAOIAFAbQADAZAAAPQAAAKgHALQgIAMgMAAQgEAAgHgCQgLgEgHgHQgfgZAAg8QAAgrAIgOQAMgUAjAAQA1AAAgA0QAdAsABBBQAAA0giAcIgiARQAAAHghAAIgngBgAhAApQgIgHgHgQIgGgaQgEgcgBgGQABhrA+AAQARADAQAJQAjASAHAcQg8ABgKAGQgfAPAABEIAEAuIgPgEgAh5gFQgMgZAAgsQAAhFAagfQAcghAoAoIgKACQgcALgIALQgXAcAABGQAAAGAFAdIAEAaQgNgFgJgQg");
	this.shape_102.setTransform(9.1,-37.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#526139").s().p("AhYAOQAAgLAFgKIAGgLQBsgzAoAkQATARgBAaIgJgHQgJgHgLgEQgGgEgIgCQgmgIgZAKQgIADgGAEQgQALgKARQgIALgFANIgJACQgJgPAAgUg");
	this.shape_103.setTransform(27.2,10.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B3E4E6").s().p("AAAB4QgDgBgCgBIgOgIIgIgIQgOgPgMgSIATADQACgCAEAAQgCAGACAGQACAKADACIABACIABgCQgBgGADgKIAGgNIAEgBQADgCAAgCIgKgEIgOgJIgLgMIAAAAIgCgDIgHgHIgGgHQgHgHAFANQAFANADACIgBAAIAJAKIgHgDIgJgBIgYgCIgHgBQgTgKABgWIABgIQAAgSAFgSQADgNAFgLQAEgLAGgJIABgBIABgCQAGgJAHgIIABgCQAJgIAKgFQAKgEAMgCQAZgDAXAOIAMAGIATANQAOALAOAMQAFAEAFAGQAEAHACAIIALApIgBADIgBADIgCAIIgFAKIgCgIIAAAAIgEgDIgBABIAAAAQAAAfgPASIgFAFIgDADQgKAJgPACIgCgOQgBgJgHgDQgCAggJANIgBACIAAABQgEAJgHAEQgEADgFAAIgCAAg");
	this.shape_104.setTransform(30.3,22.8);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#758A51").s().p("ABOA6QgIgKgHAAQgEAAgbgVQgggbgbgNQhkg6hpAeIgGABQAKgdAIgSIAkhFQC1AjBUA7QBYA8BGCJIhoAWQglhLgUgYg");
	this.shape_105.setTransform(5.7,-9.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#B3E4E6").s().p("AgXBOQhEgwgZgNIAkAiIAPAMIAAABQgrAYgfgpQgXgfAAgWQAAgLAfguQAkg3AdAAIBCAkIBSAwIA5AiQAYAPAAAGQAAAGgCACIgGAFQgMgJhFgfQhFghgFAAQgEAAgBAEIABADQAaARBYArQAxAaABAQQgBALgHAFQgHAFgIAAQgSAAgDgIQgGgPgUgOQgVgOgygaQg3gdgPgBQASAMBXA1QAxAdgBARQAAAGgGAIQgJAKgNAAQgiAAg/gpg");
	this.shape_106.setTransform(51.6,23.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#526139").s().p("AhPBJQgVgOAAgHQAAgtAzg1QAugzAZAAQAWAAAaASQAUAMAGAPQgkgEgwAuQgyAxgCA7QgXgNgQgMgABegvIADgDQADAFABAHQgJgEACgFg");
	this.shape_107.setTransform(37.9,14.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#1D1F26").s().p("AhOAJQACgGAhghQAfgiAFgEIBWA4QgEAEgbAjQgbAlgCAFg");
	this.shape_108.setTransform(2.3,-7.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#758A51").s().p("AgXA4QACgFAagmIAfgnIDdCKQgWASgSAVQgUAYgDAPgAkAhIQgCgOAUgyIAWg1QALAJA+AoIA8AmIgkAnIgiApQgqgag9gYg");
	this.shape_109.setTransform(8.2,-4.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#526139").s().p("AhUA9QgGgMAAgKQAAgnAogqQAogqAlAAQAWAAAQAHQAMAGAHAIQgOADghASQgiATgFAJQgHAHgQAmIgWA2QgagEgLgUgABQgyQAFgDgBgJQAGAHABALg");
	this.shape_110.setTransform(22,16);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#B3E4E6").s().p("AAtBdQghgJhcgnIgGAHQAHALAEAEIAeAQIgGAGQgRAIgNAAQgsAAgWgoQgPgaAAgbQAAgOAbgoQAhgwAcAAQAEAAAzAUQAyAVAlABQAiABAaANQAbAOABAXQgXgMg1gJQgugIg0gDQASANBOASQBFAOAQAYQgIALgLAAQgGAAgjgIIgjgJIg5gSQgegJgFAAQgHAAgCADIgBAEIB0AlQA6ATAAAVQAAAKAAABQgjAFgKAAQgdAAgVgGg");
	this.shape_111.setTransform(35.5,21.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#758A51").s().p("AA0BSQgjgzgXgWQAPgRAOgNQAagaATAAQAGAAA0A5QA5BAAAAcQAAAFgfAfQgiAjgKAVQgOgygqg+gAiJhRIgDgBQgagHgQgCQACgXATgiQARghAOgMIBtBEIgIADQgGADgZAdQgYAcgDAIQgZgOgZgNg");
	this.shape_112.setTransform(1.6,-4.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1D1F26").s().p("AhEAHQAIgMAbgaQAZgXAIgEQAiAdAjAeQgxAKgYAwQgRgRgvgjg");
	this.shape_113.setTransform(0.6,-10);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#526139").s().p("AApBPIADgHIABABIAJAKQAFgEAAgOQAAgugygkQgrgjgsAAQgHAAgNADQAMgRAGgHQAPgPAkAAQA0AAAsAlQAqAjAAAkQAAAVgMAWQgOAagUAAQgNAAgJgKgAhjgwIALACIgUANIAJgPg");
	this.shape_114.setTransform(-2.5,15.1);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#B3E4E6").s().p("AAHCUQAAgFAFgLQAEgKAAgFQAAgLgig0QghgxAKgrIgBgKIgGgFQgGAJgGAQQgHASAAAMQAAACAIAUQAKAXAIAKQAMAPAWAYQAHAKAAAFQAAARgGAJQgKAJgVAAQghAAgYgeQgaghAAg2QAUhBADgfIgDgGQgCADgJAFQgLALgIAiQgMgCgFgFQgHgGAAgOQAAghAngsQAmgrAXAAQASgBAUAJQAmAQASAqQAKAXAAAHQgBAJgLAVQgLAUAAADQAAApBAAmQAjAUAJAHQAUARAAASQAAANgLAJQgGAFgPAGIgKAAQADgNAAgKQAAgKgigfQgWgVgWgSQgHgFgQgcQgPgaAAgHIgEgIIgIALIgEAHQAAAOAFAIQACAFASAZQACAEAcAVIA1AsIAFAGQADADAAAHQAAASgIAIQgJAJgXAAQgcAAgZgVg");
	this.shape_115.setTransform(-3.4,28.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#758A51").s().p("ABQCnQgMgQg+gkQAVgKAKgNQAMgPABgWIgTAWQgRgXgRgVQAOgVAXgQQAcgUASACQA7BRALASQAJASAAAWQAAAZgHAQQgNAhglAPQgNgcgJgLgAiZg/IgFgBIAOhPQAKgvAQgPQAYAhArAfQAnAbAGAHQgQACgkAaQglAcABAQQgdgPgegNg");
	this.shape_116.setTransform(-0.8,-5.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#1D1F26").s().p("AhOAFQAYgjATgNQAIgEAjgOIBIBFQgagGgdAVQgZATgGAUIhIg5g");
	this.shape_117.setTransform(-1.1,-9.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#1D1F26").s().p("AAFAHIgKgNIABgBIAKAPIgBgBg");
	this.shape_118.setTransform(1.8,-12.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#758A51").s().p("AhaC2IgZgBQADgIAJgwIABgBIAEgVQAFgQADgDQATAFAtgXQAlgUAIgKIAJARQAJAAAAgLQgSgzgkggIgEgDIgrgbQgpgZgQgGQAAghASgXQARgXAYAAQBcAtAyBBIAAAAIAMAQQAOAVAJAiQAIAkgCAjQgCAjg7AmQg8AmhaAAIAAAAg");
	this.shape_119.setTransform(-6.7,-6.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#B3E4E6").s().p("AAGBtQgEAAgCgBQgHgDgGgEIgJgGQgOgNgNgRIATACQACgCADABQgBAFACAGQACAJADABIABACIACgCQgCgFAEgKIAFgMIAEgBIADgDQgEgBgHgDIgOgIIgLgKIgBAAIgCgCIgHgHIgGgGQgIgGAGAMQAGALADACIgBAAIAJAJIgHgDIgJAAIgYgBIgHgBQgTgIAAgVIgBgHQAAgQAEgRQACgMAFgMQAEgJAGgJIABgBQAFgJAHgIIABgBQAIgIAJgFQAKgFAMgCQAPgCAQADQAIACAKAFQAPAHAOAIIAUANIALAIQAGADAFAGQAFAGACAHIAMAmIAAAEIAAABIgCAHIgFAKIgDgHIABgBIgEgCIgBABIAAAAQABAcgOARIgEAFIgDADQgKAJgOADQgBgIgCgGQgCgIgHgCQAAAegJALIgBACIAAABQgDAIgHAFQgEADgEAAIgDgBg");
	this.shape_120.setTransform(24.3,47.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#526139").s().p("AhTA0QgFgOgDgSIAAgBQgIgQASgRQARgSArgOQAqgPAOACQAOABAWAIQAWAIgOgEQAEAGAHANIADAUIAAAAIABAEIAAADIgMgHIgEgDIACAAIgFgEIgBgBIAAAAIgEgCIgFgBIgDgBIgCAAIgMgEQgngFgZAKQgHADgGAEQgPALgKAQQgFAIgEAJIgDAHIgGALIgGAKg");
	this.shape_121.setTransform(20.4,36.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#1D1F26").s().p("Ag0AcQgSgQAAgGQAAgXAmgZQATgNASgIQAiAjAgAiQgaACgdAWQgXATgIAPIglgkg");
	this.shape_122.setTransform(-0.6,-1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#758A51").s().p("AAvBxQgvhNgagcQANgXAcgRQAagPAUAAQA1A4A1BkQAqBRANAtIAAABIgLABQgTADgcAIQgoALgEAHQgVhBg0hYgAjBiQIgcgJQATg0AMgYQALgVANgPIgCADIAAABQBiBKAnAnQgRADgXAUQgbAXgJAaQhPhCgHgCg");
	this.shape_123.setTransform(1.6,5.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#1D1F26").s().p("AgvAiQgPgTAAgKQAAgaAagdQAZgbAPAAQAFAAAPAZQARAfAWAPQgfAPgRASQgVAWgFAbIgDACIghgsg");
	this.shape_124.setTransform(-1.6,1.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#758A51").s().p("AATDBQgtgYgSgiQgGgFgDgEQgGgIABgUQABgJAUgYQAWgdARgJQAXApATARQALAKAAALQAAAIgDACIgQANIACAEQACADAGAAQATAAAGgNQAHgOgIgYQASAIA3gUQAzgTAMgNQAIAtAAAJQAAAsgXAhQgeArg8AAQgnAAgrgWgAiMgHQgJgVgfg1QgcgwgFgGQAOgiAKgNIAZggQAEAOAiAwQAbAnAZAfQgxAXgQA0g");
	this.shape_125.setTransform(4.7,0);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#526139").s().p("AhMA8QgOgKgBgWIgBgIIAbAFIAaADQArAAAhgfQAZgZANgmIAFAJQAFANAIArQAAAfgwAVQgnARgpAAQgcgBgNgHg");
	this.shape_126.setTransform(16.6,-0.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#B3E4E6").s().p("AgjBzQgMgIgCAAIgNgMIgPgQIAAgBQgFgMgMgxQAAgKAKgPIAeAUQAWAOALABIADANQgLAHgPAAQgPAAgbgJQAGAJAOAJQAOAJAHAAQAFAAANgEQAMgFAFAAQABAAAhAaQAUAAATgHQAZgKAAgRQAAgNgMgYQgKgTgFgFIgFgCIAPA8QAAAFgHAFQgLAIgWAAQgSAAgLgUQgLgWAAgkQAAgOAJgQQAPgYAdAAQAbAAAWAbQAZAfAAArQAAAhgPAQQgPAPgeATIgSAGIAAABQgOACgKAAQggAAgTgJgAgmgGQgLgNgKgFQgDgFAAgcQAAgVAVgPQASgNANAAIAPAFQASAGAHAEIAAABQgdADgNATQgQATAAAhIABASgAh1hBQAAgRAIgPQAOgYAfgCQAFABAMAEQgPAIgPAfQgQAiANAPQAFABgKAAQggAAAAgkg");
	this.shape_127.setTransform(10.4,-11.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_96},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_70},{t:this.shape_71},{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},1).to({state:[{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106}]},1).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},1).wait(1));

	// Layer 2
	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AhuB5IAFgVIABgNIAAgBIACgMQACgJATgEQASgDAcgPQAcgOAIgMQgEgQgpggQgYgWhBg1QABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAggARgYQARgWAYAAIgCgEIgEgHQBMAKBBBFQBDBGABBOQACBRhDAnQhCAniGAFQAOgqAIghg");
	this.shape_128.setTransform(-6,-5.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("Ag0D3Qg2gugchUIA4hrQAYAUAcAvQAeA2ASATQgBiTgbgYQgHgGgNgJQgIgKAAghQAAgVgFgNQgFgMgVgeQgIgMgggfQgbgbAAgEQgBgXAjgUQAfgRAbgBQAwAAAXATQAoAeAFADQAMAEAQAYQARAbAAAUIgBAfIAIAdQAHAbAAAJQAAAhgYARQASBQAABTQAAAygTAtQgXAxgfABQg6gBgygrg");
	this.shape_129.setTransform(-4,-27);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("ACnDnQgMgNgWgoQgMgXgsgRQgkgOAAggQAAgRgmgVQhZgzgPgIIiGhQQhthAAAgEQAAgGgCgBIgFgCQAFgDAEgGIAcgiQAOgVAAgTIAAgDIAJgHIAGABQgBAAGFD1QAJgEAeAJQAdAHAKAHQARgbAHgIQAHgJAIAAQAWAAAJAJQAIAHAAAQQAAAXgHANIgKANQAiAKAuAGQAeAJAAAlQAAAWgSADQgJACgogFIAJADIAIAEQAMAJAHALQAGAKAAAJQAAAOgJAIQgKAKgVAAQgJAAgcgKQAHAegHAOQgGANgQAAQglAAgYgZg");
	this.shape_130.setTransform(18,-2.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AjYCMQgRgWAAgQIACgPQAAgIgEgEQgDgEgEgHIgEgJQAAgNAQgSQARgTAYgBIAWABQAMgPAIgHQAJgHAHAAQAMAAATANQASALAFAAIAWgCQASgCAIAEQANAFALALIAHAKQBEgXALgDQgSgKhOgaIhWgbIACgJQACgOATgfQAQgcAKgKIgCABIAAgHQAAgGABgBIAHgBQCmA5A9AmQBCApAAAwQAAAdgnATQgoAShcAcQhaAbgVADQgVACgJgCIggARQgcAPgiAAQgjAAgWgfg");
	this.shape_131.setTransform(-9.8,-8.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("Ag0GIQgIgBgGgEIgHgIQgIgIgDgKQgDgEAAgEIgCgLIgBgKQgBgDABgDQACgKAEgKIgUgWQgCgJgBgLQABgFADgFQAFgKAOgLIATgTIAFgEQgDgMAAgJQAAgYATgIQAVgIAEgUQAIghAAhKQAAhZgZhKQgPgvgzh4IAFgCIgGgGQAFgCAbgbQAagbAQgTQAQADAOAiQAZA+AYA3QASAoAPBoQAPBmABAgQAAAfgFA0IgGA0IAKAPQAKAQAAAEQAAAYgUAbIABAEQACANgBAPIgBAaQgBALgGAJIgFAJIgIALIgQAMIgLAHIAAAAIgHACIgRAEIgDACIgBgBIgJACIgFAAQgMgBgIgJIgJAHQgJAHgLAAIgDAAg");
	this.shape_132.setTransform(-9.9,14.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("Ag2FbIgNgBIAAAAIgHgDIgPgIIgEAAIAAgBIgJgEIgFgFQgJgIgBgMIgKAAQgNAAgKgJQgGgFgBgIIgCgKQAAgLACgKIAEgIIAFgKIAGgIQABgDACgBQAJgIAJgFIgDgdQAEgJAHgKQAEgDAFgBQAKgFARAAIAUgDIAMgWQAHgLANgJQAOgIAPgHQARgGAHgpQAGgpAAgmQgBgogJgVQgJgUgPgsQgFgTgagqQgZgpgBgGIADgDIgBAAQAzhAAKgIIAIgEQBIBaAiBEQAoBQAABHQAAAlgNA5QgMAygIATQgLAYgYAoIACAHIABAOQAAAfgbAUQgMAJgMAEIgGAMQgHAKgJALIgRAVQgGAHgKAEIgJADQgHADgHABIgKAAIgKAAg");
	this.shape_133.setTransform(-13.8,9.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("Ah6EFIgKgCQgGgBgHgDIgRgJIgLgIIgEgGIgKgOIgDgCIAAgBQgDgEgCgEIgCgGQgDgMAFgLIgKgGQgLgGgEgMQgCgIACgHIAEgKQAFgKAIgHQADgEAEgBIAIgGQAFgBAFgEQACgCADABQALgDAKAAIANgaQAIgGAKgFQAFgBAGACQAKABAPAIIAaALIAMAGQAFgDASAAIAqAPQAMAAAkgcQANgKAGgHQAGgIAKgSQAJgTgDgUQgDgWg6g/Qg5hBgCgPQgIgFABgCIAAgDQABgBAGAAQAEAAAOgTIARgVQANgOAOgGIABgFQABgEAHAAQAOAABqCEQANAUAQAyQAPAvAAANQAAA7gXAeQgXAfgiAXQgiAYgoAVQgpAUgNATQgGAIgLADQgHABgPAAQgOAAgIgCIgEACQgLAHgNAEIgaAJIgLACIgKgBg");
	this.shape_134.setTransform(-18.9,1.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgyCzIghADQgVgBgPgKQgKACgLAAIgagCIgbgGQgKgDgJgHIgHgFIgKgMIgKgQIgFgMIAAgBIgBgGIgBgSIgCgDIABAAIgBgKIABgHQADgMAKgGIgFgKQgHgLAEgNQABgIAGgFIAIgEQAJgGAKgCQAFgCAEAAIAKgBQAGACAFgBQADAAACACQALADAJAFIAYgRQAKgBALABIAJAGQAJAHAJAMQAAACAQAUIADAFQAXABARAQQAXAYAyAAQAJAAAcgEQAfgEATgEQgXg8gPgVQgQgWgRgUIgQgSIgPgQIABgJIgHgGQAQgcAWgUQARgQALgEQABgDAAgEQACgBAGAAQAGAAAFAEIAaAfQAfAjAkA5QAUAgAKAdQAKAcAAAhQAAA2gtAjQgzAnheAAQgKAAhjgKg");
	this.shape_135.setTransform(-23.3,-6.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("Ag9CjIgcAHQgNAFgUgJQgTgIgKgHQgHgBgIgCQgNgEgNgGIgXgLQgKgGgGgJIgGgIIgHgMIgFgUIgCgLIAAgBIABgHIADgRIAAgEIAAAAIACgKIADgGQAGgKAMgEIgDgJQgDgNAGgLQADgHAHgDIAJgEQALgEAKABQAGgBAEABIAJADIALADQABAAAAAAQABABAAAAQABAAAAAAQABABAAAAQAKAGAHAIIAcgKQAJABALAEQAEADADAFQAHAJAEAOIAEAHIAEAAQALgCAaAZQAZAaAuABIBUgLQgIgPgng+QgUgggRgOQgSgNAPgCQAng+AJgLQAFgGADABIABgBQBJBHAkA3QAoA8AAAzQAAAvg1AdQg3AehfAAQgKAAhkgJg");
	this.shape_136.setTransform(-23.9,-8.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("ACfFaQgLgCgJgFIgIgFIgHgHIgHgIQgDgCAAgDQgGgJgDgKIgdgFQgIgGgHgIQgCgFgBgFIAAgGQgKgFgcgvQAAgNAYgfIktmfIgCAAIAAgHQAAgKAAAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAKgHAagjQAZggAFgKIAGgBIAHACIFMG4QAGgFAYAMQAYAMADAQIACARIgBABIAHAHIASAUIAPAWQAGAKABALIACAJIAAAOIgFAUIgEALIAAABIgEAGIgLANIgCADIAAAAIgHAIIgFAEQgKAGgMgCIgDALQgDANgLAHQgGAEgIAAIgKgBg");
	this.shape_137.setTransform(6.8,10.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ABMEdQgOgFgFAAQghAAgYgsQgXguAAhHQAIgwANgTIAJgPQAMgPAAgPQAAg0hqhJQg2glg7gfIABgHQAAgOAQgkIAQgkQABgFAAgFQCSA0BvBsQAzA+AcA8QAYAuAAAVQAAASgNARQgHAJgHAGIAAAmQABAdAGABQALgBAJAkQAFARACATQAAASgrAMQgjALgdAAQgDAAgPgFg");
	this.shape_138.setTransform(3.1,4.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AAvDBQgqgMgPgYQgJgMgbgWQgigbgRAAQgKAAgNgKQgWgRgIgnQgDgRgPgYQgMgVACgLIgCgBIgBACQgBAAAAgGQAKgMAKgSQAGgMAIgdQAHgcAIgPIAFgFIAPAKIAugqQBhgNBTCEQAgAzAUA6QASA4AAAlQAAAvgTARQgQAPgnAAQggAAgegIg");
	this.shape_139.setTransform(-2.3,-7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAODzQgdgNgRgNQgfgXgrhPQgphKAAgYQAAgFABgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIgHgIQAGgDAHgIQAHgIAEgJQgSgLgLgvQgFgYgBgXQAAgaAVgnQAhg8A5ABQAMgBAgANQAjAPAKAPIAwA1QAVAYABAaQgBAGgCAKIgDAIQARAqAPArQAOAmAGAoQAFAoABANQAAA6gfAiQgdAhguAAQgMAAgegNgAAVBdQgShTgfgjQgQgTgWgTIgEAPIAiA2QAgA3AZAgIAAAAg");
	this.shape_140.setTransform(-3.9,-19.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhuChQgvg2hHh+QADgGAGgBIgKgNQARgTAMgGQAPgFALgEIAEABQABAAAAgBQAAAAAAAAQAAAAAAgBQAAAAAAAAIAGgBQAGAAAaAiQAiAsAWAbQBTBqAxAAQAVAAARgQQATgSAAgaQAAgdgZgIQgcgKgIggQgCgKgCgVQgCgVgCgIQgDgOgmgzQgcgRgGgMQgHgMAAgKQAAgGAJgLQAJgLANgJIANgPQAMgOAMABIAWACIAIABIAAgBQAAgFABgCIACgCIAJAAQA7AAA2B1QAbA7ANAiQAMAhgbAVIAHAVQAGAaAAAeQAAA1gmAwQgxA9hWAAQhTAAhOhbg");
	this.shape_141.setTransform(6,-17.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AAsDCQhWg5AAgfIADgcQgBgIgRgZQgWggg0gpQgSgRg2gaQg/gdgwgKIACgMQAEgYALgiQANgpAKgNIAGABIgBgDIABgHQACgEAGAAQAYABBLAqQAcAQBVA1QAPAJA0A9IAzA6QAFAAAXgPQAWgQASAAQALAAAKAMQAKANAAANQgDAfgHAFQAIAAAmgHQAfgFAkAAQAOAAAKAEQATALAAAaQAAASgSAGIg+APIAPACQAeACAOAOQAIAJAAAMQAAAQgjAPQgkAQgXgJQAMAKAAAOQAAAZgLAHQgMALgrAAQgbAAhTg2g");
	this.shape_142.setTransform(15.2,-2.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AA1DEQgJAAgUALIgXAKQg1AAgkgWQgqgaAAg2QAAgVAsgYQBAgjAhgjQgcgcg3gaQhEghgVgOQAGgRAOgbQAMgbAAgjIAFABIAAgEQACgFAIgFQCFA3AtAdQBiA+AABOQAAALgKAdQgFAOgSAbQgPAZAAACQAAAXATAMQATANAAAbQgBALgHALQgHAMgKAAIhKgZg");
	this.shape_143.setTransform(0,-3.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AhxC9QgEAAgFgCIgMgEIgQgJIgJgGIAAgBIgEgGQgFgFgDgIIgDgCIAAAAIgGgIIgBgFQgDgMAFgKIgJgFQgLgGgDgMQgCgHACgHQABgFADgFQAEgIAIgHIAHgHIAIgFQAEgCAFgDIAFgCIAAAAQAKgCAKAAIAMgaIAQgJQAEgBAGABQAKABAOAGIAXAKIADABQAHgFAXAAQAbAFALARQAzglAEgGQgggSg1gSQhGgXgXgKIAEgKQAFgQAVgfQAUgeAHgDIgBAAIgBgGQAAgKACADIAHgBQCHA0AKAGQBjAyAAA+QgKArgMAUIgKAOQghAjhMAgQg/AcgYAAIgFAAQgHAHgKAGQgLAGgMAFIgXAJQgIACgHAAIgGAAgAiUBAIAAAAIAAAAg");
	this.shape_144.setTransform(-9.3,-6.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("ACnHDQgNgCgKgGQgGgDgEgEIgJgHIgKgKIgEgFQgHgMgEgMIgjgEIgSgRIgDgRQgEgWADgWIgFgHQgFgEgGgIQgRgVAAgcQAAgJAGgPIAGgOQgbg+gfg4IgDgGIAAAAIgkhAQheiYhkitIgBgGQABgFACgCQgRgWAAgCQAAgTAqgnQAoglAPAAIADgIQAEADB+DZIDVFzQAnAFAVAcQAQAVAAAUIAAAAQACAHAAAHIAAAGIAPALQANAKAHAOQAJAQACASIACAOIgBAEIAAABIgEAYIgFAOIAAAAIgFAJIgNAPIgBAEIgBAAIgGAKIgHAEQgMAJgOgCIgDANQgEAPgMAKQgJAEgIABIgNgBg");
	this.shape_145.setTransform(7.1,19.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("ACqF3IgMgEQgMgHgIgIIgIgKQgEgEgCgGIgHgNQgCgDgBgDQgDgPAAgOIghgNIgNgWIACgTQACgfAQgcIAAgBQgEgEgDgIQgHgQAAgWQAAgZAMgPQALgOAAgJQAAgGgHgTIgHgRQgjhdg5g/Qgrgug2gaQgsgVhNgGQhJgFgJgGIgBAAQADgNAIgTQAPglAlgzQgCgHAKAAQB8AABqBDQBnBDAmBBQAnBBAfBPQAgBOAVAKQAMAFALARQAOAVAAAaIgIAZIARAYQAKANADASQAEATgDAUIgCAOIgCAFIAAABIgLAXIgJAPIgBAAIgGAHIgRANIgCAEIgBAAIgJAIIgIADQgOAGgNgGIgHAOQgHAPgPAGQgIACgGAAIgEAAg");
	this.shape_146.setTransform(12.4,11.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AiyCiQgzhcgHgzQANgWARgaIAxhFQACAGABAUIAGgeQA9COAfAuQAZAaANATIAmg8QALgTAAgMIgLgSQgLgTAAgEQAAgFAEgMQAFgMAAgFIgCgNQgFgNgNAAQghAAgUgkQgKgSgDgSQAAgKADgLQAHgaAKgzQAFgcAXgPQAVgQAjAAQAqAAAkAbQAYARAXAfQAYAfADALIAHAaQAEAPAUAoQASAiAAASQAAAtgaAkQg1BKgnBQQgWAtgsAbQgpAYgmAAQhSAAhGiBg");
	this.shape_147.setTransform(1.7,-15.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AAPEEQgchIgRgWQgGgHg7g9QgogqgOgkQgig9gdhFQgehGgEgkIABgIIACAAIAggnQARgWAFgVIAHACIgBgMIAMgFQAbAmAOA2QAPA4AsA/QBEBhASAQQAZAYA4AJQAOACAVAIQAXAIAGAHIAJAOQALAPAHADQAcAOALAOQAVAXAAAmQAABAgwApQgpAjgtAAQg/AAgjg+g");
	this.shape_148.setTransform(3.4,9.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AhXCyQgFAAgNAEQgOACgNgGQgEgCgLgQIgLgQQgWgKgQgPQgWgUAAgVIACgUQAAgNgCgCQgOgOAAgOQAAhtBzhEQAjgcAfAEQA9AAAUAKQASAIAcAmQAUAcAJAJIAUAQQA8AvAYAcQAYAZAAAWQAABIgyAhQg3Alh/AAQgIAAhQgJgAAKAuIgXAAIgBACQAsAIALAAQAIAAAMgDIgVgTQgIAJgWADg");
	this.shape_149.setTransform(1.5,-17.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AiECMQgzg+g1iBIAEgHQAdgmA6hFQADgDAFABQAEABABADQAaBLA0BUQAvBJAWAQQgGgNAGgaIAHgZQAAgegLgGQgSgLgDgEQgJgPgLgZQgKgVAAgCQAAgJAGgTQAIgZALgFQgBgHAEgRQAEgTAEgGQALgSAdgHQAOgDANAAQAiAAArAoQApAnATAvQAKAaACAMQADARABAmQAAAKALAXQAKAWAAAIQAAAUgMAoQAAAVhFAuQhIAwgnAAQhnAAhKhZg");
	this.shape_150.setTransform(1,-3.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("ABBEVQgUgEgIgDQghgPgDgXIACgLQgCgFgJgRQgOgWAAgJQAAgMgBgDQgDgLgNgJQgOgKgTgTIgFgHQgXgJgihAQghg9gqhlIABgHIgFgEQgCgDAAgGQAAgLAmguQAkgtAYgTIAAAFQAQAAAHAnQAMA9AZAvQAYAsAmAtQAoAsARAAQAFAAAagPQAZgSAKAAQBYAAAACPQAAA+gtA2QgoAwgkAAQgLAAgTgDg");
	this.shape_151.setTransform(-1,5.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("ABEETQgTgYAAgdQAAgGgQgNIgPgMIgHgMQgDgFAAgGQAAgWAWgaQAVgbAAgQQAAgEgFgOQgEgOAAgFQAAghAYgZQAXgaAAgSQAAghgIgdQgIgjgPABQg+gBhOBKQgoAlguA0QgDgCAHgLIgVANQgJAFgIAAQgSAAgQgRQgTgTAAgZQAAgaAQgbQADgUAughIBFguIBDgmQA1gdAAgEQAAgKAFAHQAPgQBNgFQB1AAAADMQAAAWgCAbQgBAOAFAFQADAEAFADQAOAOAAAoIgEAbQgFAVABAFQAAAVANAWQAOAWAAAbQAAApgjAfQgdAagYAAIgOAAQgHABgHAFIgOAKQgKAGgFABQgXgBgUgYg");
	this.shape_152.setTransform(2.9,-9.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("ACqF3IgMgEQgMgHgIgIIgIgKQgEgEgCgGIgHgNQgCgDgBgDQgDgPAAgOIghgNIgNgWIACgTQACgfAQgcIAAgBQgEgEgDgIQgHgQAAgWQAAgZAMgPQALgOAAgJQAAgGgHgTIgHgRQgjhdg5g/Qgrgug2gaQgsgVhNgGQhJgFgJgGIgBAAQADgNAIgTQAPglAlgzQgCgHAKAAQB8AABzBIQBkBAA6BfQAWAkAfBZQAXBBAVAKQAMAFALARQAOAVAAAaIgIAZIARAYQAKANADASQAEATgDAUIgCAOIgCAFIAAABIgLAXIgJAPIgBAAIgGAHIgRANIgCAEIgBAAIgJAIIgIADQgOAGgNgGIgHAOQgHAPgPAGQgIACgGAAIgEAAg");
	this.shape_153.setTransform(12.4,11.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("ACKGUQgNgDgKgGQgGgDgEgDIgKgIIgJgJIgFgGQgGgLgEgNIgkgEIgRgQIgDgSQgFgYAFgZIgKgTQgJgXgCAAQgGAAAAgGIACgOQAAgIACgGIAIgWIgjhJIjOlZIgBgFIAAgEQgMgMAAgBQAAgMBUhtIACAEQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAAAgBIAGAAQAGAAABABIACADQBHB8BKB8QCRD2AJAAQAbAPAQAbQAOAWAAARIgBAHIATANQANAKAIAPQAIAQADASIABANIAAAFIAAABIgEAXIgFAPIgBAAIgFAIIgMAPIgCAFIAAAAIgHAJIgHAFQgMAIgOgCIgDAOQgDAPgNAJQgJAFgHABIgNgBg");
	this.shape_154.setTransform(4.3,14.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgoFHQg0gigZg2Qgag1gVgwQgohcACgUIAuhiIAFgCQAIANBABuIAAgDQgBgTAKgZIgNgYQgMgeAAgQQAAgFAFgTQAEgUAAgFQAAgCgQgZQgQgiAAgrQAAg6ATglQAUgmAiAAQAYAAA+A1QA/A0AAASQAPAQAQAVQAhAoAIAYQAIAagFBbQASAUACAIQAEAPAAAOQAAAXgNAUQgIAMgSAQQgKAKgBAFIAAAQIACA3QAACahxAAQgoAAgqgcgAAAC3IAIAIQgBghgFgOQgGgYgZgJIAAgBQgPgJgLgKQAsBMALAQg");
	this.shape_155.setTransform(5.7,-22.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("ACvE2QgNgEgJgHQgGgEgEgEQgEgEgFgFIgIgLIgEgGQgGgNgDgOIgjgHIgQgTIgCgUQgEgeALgfIAEgOIgEABQgPAAgHgVQgEgNgBgTQAAgkAOgKQgshKgLgMQg8g6hGgcQhCgahkgLIgFABQAKgdAIgRIAkhFQANgHAKAAQA3AABEAVQBIAWAtAjQAzAkAZAaQARARAuA9IAZAuQAPAcAQAFQAKADAPALQAOAKAHAdQADAOAAAMQAAAEgDAEIAUATQAMALAGARQAIASABATIAAAPIgBAFIAAABIgGAZIgGAQIAAAAQgCAEgEAEQgGAJgIAHIgCAFIAAAAQgDAGgFAEIgHAEQgMAIgOgDIgFAPQgEAPgOAKQgIAEgJABIgMgCg");
	this.shape_156.setTransform(12.1,5.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AEGEZQgvgcgCAAQgFAAgUAFIgWAFQgcAAgfgeQgagegDAAQgfAAgagaQgVgWAAgPQAAgGAIgfIlNjLQg7gkgfgQQgEgDgPgXQgCgNAUgzIAVg1QABgMAIgCQALAGBCAqIB+BQQEUCuACACQAJgFARgIIAQgGQAeAAAiAXQAbARAEAKQADAFADASQAOAVA8AgQBWAsAUASQASAOAAAYQAAAFgNAPQAAAFAEAGQAEAFAAAFQAAAXgMAGQgKAGglAAIgMAQQgLAQgSAAQgSAAgzgdg");
	this.shape_157.setTransform(26,5.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("ADJEQQgngOgUAAQgpAbgJAAQgJAAgYgJQgjgNgOgVQgKgRgVgMQgZgOgCgDQgQgQgQg2QgWhHgGgMQgMgbhDhQQh4hNgrgoQABgWATgjQARghAPgMQA/gPB7B2QByBvAdBRIALgBIARgBQAjAAAYAMQASAKADALQADAKgEAQIAmAQQAQAGAKABQCVAOAAAuQAAAFgEAJQgEAIAAAFQAAAFAEAEQAEAEAAAFQAAAEgKAOQgLAPgCARQgEAdgCACQgIAHg1AAQgVAAgngNg");
	this.shape_158.setTransform(18.5,4.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AAOFgIgcgOQgGAAgXAGQgYACgRgLQgegVgTgiQgRghgBghQAAgLAGgdQgZgFgKgMQgHgKAAgSQAAgPALgWQAHgRAFgFQAJgNAOgQQAHgJAGgRIAKgZQAEgKAbgQQAbgOAMAAQA3gDACgBQAEgGATgMQhDhKhqhMIgFgCIAOhOQAKgwAQgPQCNBUBOBXQBKBVAABIQgIAsgNASQgIALgPAMQgQAMgIAUQgEALgCALQgLAWgLALQgPAQgSAAQgNAAgNgJIgDAIQADAnA/AzQA8AwAAAHQABAegLANQgLAPgYAAQgLAAgKAGQgLAHgUAAQgNAAgfgOg");
	this.shape_159.setTransform(-2.1,10.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AiFDEQAAgHAPgsIAHgZIAAgBIAFgUQACgLAAgIQAAgHAFgMQAiAAAcgQQAPgIAWgVQgJgSgpgkQgVgSg+gzIABgBIADABQAAggARgXQASgXAYAAQgGgEAAgHQA6AJBCA7QBTBHADBUQADBVg8AlQg9AliQALg");
	this.shape_160.setTransform(-5.9,-5.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("ACkGSQgNgDgJgGQgGgDgEgEIgJgHIgJgKIgFgGQgGgLgDgNIgqgGIgLgQIgDgRQgEgXAEgWQgCgCgDgFQgGgFgGgIQgOgUAAgiQAAgTAQgTIALgLQgHgcgzhjQg/h1g2gwQgbgYgKgHQAAAAABABQAAAAAAAAQAAAAAAAAQgBAAAAgBIg7gxQg3gvACgEQATgzAMgYQALgWANgPQAjAEAzAqQAjAcAmAqQBjBvAPATQAjAtAvBXQAlBFAKAqQABAIAEABIAZAHQAIACANAaQANAZAAAKIAAACQADAGAAAGIgBAHIAPAMQANAKAHAPQAIAQACASIABAOIAAAEIAAABIgFAYIgFAOIgBAAIgFAIIgNAPIgBAFIgBAAIgHAJIgHAEQgMAIgOgCIgDANQgEAPgNAKQgJAEgIABIgNgCg");
	this.shape_161.setTransform(7.9,19.7);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AgGDVQg6glgjg1QhEhkgjhKQgXgwAAgKQAAgHABgCIACgFQAOgiAKgNIAZggIAOgUIAwBPQAQAcAdAoQgBgJAEgQIAEgTQgfgyAAgCQAAghAQgUQATgXAoAAQATAAAyAUQA0AVAJAQQADAFANAJQAQAKAEAEQANAMALAhIALAfQALAOAMAaQAOAfAAASIgMAiIAIAXQAHAZAAAWQAAAygYAkQgkA3hTAAQglAAg0gjg");
	this.shape_162.setTransform(5.6,-1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_128}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},2).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_01copygm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AgXAqQgyhagNheQAdAPAPAGQAZAIAqAAIAqgDQAAA0AIAkQAFAUAHAQIgKCHQg0gGgwhfg");
	this.shape.setTransform(1.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("Ag7A9QhQgYAAggQAAgFAEgXIAGgeIAaAaQAMAMAMAFQAfAMBjAAIAmABQAhgCAOgOIABgBQAJAjgZAfQgXAdgiAAQg5AAhCgUgABjgNQAIgFAMgOQAMAKAGAIIgBABgAh/g+IAGgSIABABIAKAZg");
	this.shape_1.setTransform(0.9,-22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AAlDlQgHgCAJAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAAAgAhjC5QgeggAAhDQAAhygGg8IgIhCQAAgoAMgUQAKgOANAAQAfAAAMAzQAHAgAAA9QAAAjgBAFIgQApQAIgDAcgZQAZgVAOAAQAxAAAXAcQgEACgUATIgUAUQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAFADQAQgOAhgKQAgAAAQAQQAMAOAAASQgIBEgNANQAEgZgHgMQgCgEgLgJQgEBSgfAnQgKAMgMAHIgKAEIgBAEQhjAAgngqg");
	this.shape_2.setTransform(3,-46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("Ag0AwIgKhrQAiAYAsAPQAjAMAMgCQgEABgBASQgBAUACAfg");
	this.shape_3.setTransform(-4.8,-30.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgrA9QhhgrAAguIALgeQALgeAHgKQAjBJBHAfQAzAYBBAAQAKAAADgHIgWgHIAQgQQAXARAAAKQAAALgQAeQgRAfgLAAQg5AAhTgmg");
	this.shape_4.setTransform(-2.6,-43.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("Ag+DPQhAgtgOggQAnhQAHgWQALglAAhUQAAgcgJgZQgJgYAAgeQAAgMAIgQQAJgVAPABQAggBAUA0QAWBBgTBoQAJARAMgEQAigHALgBQAVABARAPQAOAKAFAPIgdAFIgdAHIAMAHQA/AOAGAEQAJAFAAAgQAAATgJAUQgLAZgRAJQADgjgCgCQgYAxgOAaQgaAugRAAQgYAAg+gqg");
	this.shape_5.setTransform(2.4,-67.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("AhdC6QgFhTAmiDQAghxAdg7QAIAIApAVQAmAUAGABQgvBYgcByQgWBmAEAvg");
	this.shape_6.setTransform(-7.7,-84.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("Ag1A3Qg0geAAgnQAAgdAbglIABAGQABAOAUAXQAUAaAaAPQBEAxAngtIgKACQAAABgKAAIgPgBIAMgBQALgEAEgDQAFgCAKgKQAJAegjAiQgdAbgPAAQgqAAgtgag");
	this.shape_7.setTransform(2.2,-109.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBAAIAAAAg");
	this.shape_8.setTransform(13.6,-115.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3E4E6").s().p("AiOBKQAAhOBPhWQBPhZBSAAQAsAAABAZQABAehZAoQgwAWgGAGQgBABgTgEQgLgDgEARIABABIAwAUQAbAMAAAUQAAAMgGAMQgHAMgJAGQgKgQgSgKQgTgKgTAAQgEAAgJAFQgLAFgGAEQAuAKAPAIQAUAMAAAYQAAAhgWAUQgTAQgOAAQgjAAAAgVQAAgIAIgRIALgUQgCgEgGgCQgOACgLAXQgKAUAAANQAAANAPALQASANAgAAIANgEQAOgEAFgDIgKAIQgTAJgMAAQhZAAAAhqgAAOB8QAIgVADgKQADgMgCgMQAIABAJgFQALgHAEgOQAPAIACAAQAGAggLAQQgMARgnAJgAAZB6IACgBIgDAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAg");
	this.shape_9.setTransform(11.1,-128.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AhUCDQAKhlBIirQALAJAhARQAcAPAPAMQg0BzgMAuQgFAjgKAig");
	this.shape_10.setTransform(-7.1,-79.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("AhCAhQgfgYAAgKQAAgNAMgRIAZgjQANAlAdAUQAbARBPgHIAAABIAFgBQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQACAAABAHQgMAlgHAJQgNAPgeAAQg7AAgrgig");
	this.shape_11.setTransform(1.8,-98.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3E4E6").s().p("AhdCwQgSgbAAglQAAhwAihfQAphzBEAAQAMAAAKAFQARAIgBAOQAAAFgRAhIgqBRQgNAdgNAEQgSAFgEAEQACAFBHABIANATQAFAIAAASIgBAQQgCAAgDAIQgHgEgPgFQgOgEgHAAIghAFIgFACIgEAJQAsgBARAHQAWAKgBAgQAAAygQASQgMANgUAAQgUAAgFgNQgEgNAEgjQgDgDgPACIgBAVQABApAQAJQAXADAMAEIAOgDQgMANgfAAQgvAAgWgjgAA8CNQAAgYAGgrIAGg1IAAgLQAXAMAGAJQALAPAAAiQAAAVgGAUQgFAVgHAAg");
	this.shape_12.setTransform(8.4,-119.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373D48").s().p("AgDAHIACgNIAFACIgGALg");
	this.shape_13.setTransform(-1.8,-6.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#758A51").s().p("AhMAMQgKgMgEgLQAAgKAEgPIBnABQACALAXAJIAVAHIgDACIAAAAQgDADgoATIgmAVQgiAAgVgZgAA6gfIAhAAIgDAMg");
	this.shape_14.setTransform(-12.9,-3.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B3E4E6").s().p("AgPB6IgggIQgOgEAAgGQAAgGgDgBQgGgDgCgDIAAAAIgCgDQgBgCAAgGQAAgZA5gZIA2gYIAbgTQAdgVAJgTIgJACIgNABIgfAfQgRALhRAdQgIAAgRATQgSAUAAASQAAAKACAIIgYABQgYAAgLgHQgQgMAAghQAAgRBCgUQBdgZAwgfIAAAAQgLgCgOAFIglAPQgeAMgeAFQgfAGgSAHQgSAHgJAMQgLAOgMAAQgmAAgIgIQgFgFgBgEQgGAAABgDIACgLQAAgVAVgGQAPgEA2ABQAPAAAcgIIAZgHQAKgDAkgWQAggVAAgCQAAgQCSgQQAnAAAcAhQAZAeAAAhQAAAzgxAMIgBgBQAFgMACgUQADgOAAgKQAAgWgFgEIgBgBIgMA3QgFATgKANQgaAjg7AbQgxAXgYAAQgIAAgPgCg");
	this.shape_15.setTransform(-5.1,12.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#526139").s().p("AhzAtQgDgQAAgKQAAgRA7gYQA9gcA1AAQAcAAATAKQAKAFAHAHQgEAEgfADIgrAGQgkAGgkAQQgNAGg8AmQgKAAgBgGg");
	this.shape_16.setTransform(-2.6,0.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AhDAQIgLgwIAuAOQAaAGAhABQASAAAegHIAAACQAAAaAEAXg");
	this.shape_17.setTransform(0.5,-3.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#526139").s().p("AhJA4QhBgWAAgVQAAgHAEgVIAGgfQAIAWA+AMQAuAKAeAAQAkAAAhgGQAogHAJgNIADAAQABA+glAYQgaARg3ABQgkgBg7gTgAB3gtQALAJAIAHIgCABIgkADQAHgFAMgPgAh+g4IAGgTIALAbg");
	this.shape_18.setTransform(0.9,-14.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3E4E6").s().p("AgYB3QgmgagDggQgDggABhDQgJgNgFgDQgHgEgEgEQgLARgMAOQgWAdgUAAQgIAAgHgHQgKgJAAgSQAAgmAkgiQAlglArAAQAXAAAbAXQgFAEgJANQgKAPAAAGQAAAGAFAHIAFAHQAjgjAIgEQAJgFAYAAQAbAGAOAJQgEAEgNAWIgOAbQABACAEACIAEABQAFgYAYgJQALgFAOABQAogBAOAeQAKAVAAAuQAAANgHALQgFgagIgLIADAQQALAjgYAqQgZAqggAAQhVAAgjgbg");
	this.shape_19.setTransform(-3.8,-31.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#526139").s().p("AAXA+QgegDgQgcQgJgOgDgOIgGgBIABgGQAUgpAVgTQgBAHgFAaIgGAaQAAALAWAWQAaAZAFAMg");
	this.shape_20.setTransform(-10.9,-10.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3E4E6").s().p("AhCBsQgGgGAAgDIAAgBQgDgEgDgFQAKAAAVgNQASgLAFgHQgBgEg1ANIAAgCQgKAFgVgJQgVgJAAgeQAAgcArgxQAzg8A6AAQAwAAAZATQAdAWAAAyQAAAGgMARIgBgKQgJgjgbgPQgUgMgaAAIgLAJQAgALAVAUQATASAAAPQAAAogTAPQgJAHgkAKQADgKADgPQADgPAAgIQAAgNgUgUQgVgagYAAQgGAAgDAHQgCAIgCACQAjAPAIAEQAOAJAAAUQAAAPgOAgQgIARgHAIQgDAGgKAEQgLAEgKAAQgKAAgHgIgABGBYQAMgDAMgXQAHgLAEgLQAFgLAJgFQAFgCAHgCQAAAhgPASQgOARgYAAg");
	this.shape_21.setTransform(3.1,-13.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373D48").s().p("AgcAdIAchDIAdAHIgHBHg");
	this.shape_22.setTransform(-8.6,-17.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#526139").s().p("Ag4AnQAAg0AbgfQAcgeA6gNQgiAjgJAQQgHAMgHAjIgDAiIABAWQAGgKAFgZIAUAiIgQANQgNAJgOAAQgqAAAAgxg");
	this.shape_23.setTransform(-2.8,-61.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#758A51").s().p("AhBCSQgZgpAAg0QAAg1AuhIQAshHBbhfQgIAeAAASIACAeQACAIgGAMIgIALIg1BPQgMAYgLAuQgLAoAAAEQAAAuAxAgQAyAZAAAHQAAAUgdAtQhUgiglg7g");
	this.shape_24.setTransform(-19.1,-39.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B3E4E6").s().p("AgdB6QgMgNgCgVQgGgqgegyQgcguAAgUQAAgYARgSQAXgWAwAAQAwAAAkAnQArAvAABSQAAASgFAMQgEAJgJALQALhUg9hQIASA3QANAlAAAnQAAAqgJALIghAUIAFgOQACgJADgTQACgRAAgIQAAgJgLgkQgLghgHgQIgGAGQAKAUAFAkQACAWAAAPQAAAogFARQgGARgMAAQgRAAgMgOg");
	this.shape_25.setTransform(10.1,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

	// Layer 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgLGUQg+g6gah0QgPhBgBgMIgGgYQgEgNgZgQQgWgPAAgWQAAg4ARgbQAIgPAGgDQACAAgNiKQgPiUAAgMIAHg3QAOgyAoAAQAgAAAWAcQAjAugMBtIgBAFQAcgMACAAQAcAAAfAUQAOAJAhAcQAgATANAKQAWARAAAnQAAA5gSAPQgeAYgRArQAcAOAAAYQAAALgFAWQgHAagIAJQgEAFgWANIgVANQADAUABAWQADArgEAlIgSCnQgggGghgggAB3ArIACgBIAAAAg");
	this.shape_26.setTransform(2.6,-27.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AiIFLIACg4QABgpgHgXQgHgUgUgUIgVgUIgBgMQAAgRAMgkQAPgrASgKQAcgRAJgcQAGgSAFglQAEgRADgeQADgYAAgKQAAgLgEgaQgEgggFgTIgCgIQgCgKgBgGQAAhZA2AAQAkAAAbAsQAqBAgYB+QAZgHARAAQAsAMAKAKQADACAMAVQALAVABAFQALAEAMALQANAMAAANQAAAngOAmQgLAbgHAHQgVAVgagDQgMgCAAAlQAAAGAQAPIAPAQQAAA4ghAdQgeAcgjgRIAGBAg");
	this.shape_27.setTransform(0.1,-60.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AjUGTQgcAYALhJQAKhJALguQAKguBJi3QAAgCgKgUIgLgXQAAgTAYgnIAXgkQAAhsBchbQBVhWBXAAQAtAAAPAOQAIAHAAATQAAAtgkAcQgbAUhDAXIgIACQAWAEAOAfQAHAQADAUQAOAFAKARQAIAOAAAGQAAAngWAYQgVAXgcgBQgBADACAKIACARQAAAwgPASQgVAbhJARQgfA2geBmQgkB4AIBAgABIhCIgHAIIALgMIAAAAIgEAEg");
	this.shape_28.setTransform(4,-106.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AjCFvQANhGASg6QAKgeAZg7QAWg0AAgEIgPgbQAAgOAZglIAcgpIAGgtQAIg9ALhEQATh3A5grQAegXAoAAQAOABARAMQAVAOAAASQAAATgRAfIg5BlIAWAJQATAKAEADQAHAGAFACQAIACAHAFQAeASAHARQAFALAAAlQAABMguAAQgSgEgHgBQgLAAAAAVQAAAFAEAMQAEALAAAFQAAAYgZAdQgUAZgOAHQgWADgPAIQgZAPgOA0IgdBdQgRA2gDASg");
	this.shape_29.setTransform(1.9,-104.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAACmQg0gKgVgNIgMgHQgEgCgKADQgKACgNAAQgdAAgQgPQgTgQAAgiQgnACgSgRQgLgLAAgRQAAgZAMgLQAJgLAUgFIABAAIAtABQAnABAdgMQgCgEgGgRQgFgRAAgEQABgFgVgMIgagOQgOgJgIgNQgJgOACgNQABgJADgBQACgCAPAAIDGADQA5ABgEABQBPAcAoAgQAzAqAAA3QAAAvgdASQgHAFgsALIgtAiQgrAigUAHQgVAHgNADQgMADgUAAIgBAAg");
	this.shape_30.setTransform(-5,10);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgWDhQgQAMgEgWIgHglQgDgPgLgEQgGgEgKgCQgJgGgKgRQgIgNAAgDQAAgVAGggQAJguAPgHQgGggAAgxIgEgOQgEgNgEgHQgJAKgeAqQgHAKgQAAQgWAAgPgRQgPgTAAgZQAAhLA/gmQAqgYApAAQAvAHANAQQAIAMAHADIAQAAQAbAAAaANQAMAFARAMQAGAFASADIAWAFQAVAHAQAjQAPAjAAAnQAAAZgJAMQgIAJgNgBQABAhgHAMQALABAGADQALAGAAARQAAAdgIAaQgHAXgLAMQgQATgOADQgKAAAAAAQAAAKAMAzgAC5BGIABAAIAAgBg");
	this.shape_31.setTransform(-3.9,-24.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("Ag9DCQgygOgUghQgphIgCgeQgBgSAHgbQAAgFgEgKQgEgLAAgFQAAglAbgcQAtgwB/g0QAogQAmARQAcANAYAbQAKATANBeQAAAFgFAUIgEASIABgBIAJAAQgFAAgHASQgHAVgFACQgaARgVALQgZAOgiAAIgigFIgggFQgUAAg0gVQgwgUgLgKQgCAKAAAKQAAA/AyAoQAwAmBIAAQARAAAugKQAxgLARgJIAQgJQgDAjg3AQQglAKgvAAQgtAAglgLgAASA8QAMACAKAAIAtgDIACgDQAEgEAKgEQgYgHgIgIQgCgBgaAAIgXAcg");
	this.shape_32.setTransform(0.5,-7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjLDeQg+gxABhTQAAglAehAQAehCAuhBQByieBXAAQATAAAYAKQAiAMAKACQAnAJAPAIQAFADAOAOQAPAQATAkQAcA2AAArQAAAcgOAVQgNAWgQAAQgEAAgMAOQgMAPgNABQgSAEgPAFQgLAGgKAAQgqAAgIgjQgQhMgRgdQgFANgHAFQgMAIgiAAQgJAAgPgEQgOgGgGgFQhBBVgWAoQgPAfAAAfQAABIB/AgIgIB0Qh2gqgsglg");
	this.shape_33.setTransform(-3.1,-41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_30}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_31}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_32}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_34_arm_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#526139").s().p("AgoAzQglgRAAgQQAAgXAIgVQALggAYgIQBCBDAbgGIAFACIAAgBIgFgBIATgDQgNA1gRAPQgIAHgUAAQgZAAgjgQg");
	this.shape.setTransform(-14.9,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AiwDNQgTgQAAgHQgFABAGgUQAGgVAbgnQAagnAUglQBNhxAigiQA0g2AlgpQAogPAmAPQAjANAAAYQAAADg7AzQhLBCg8BLQg/BUgkBNQgWAugLAAQgaAAgWgTg");
	this.shape_1.setTransform(3.4,-4.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AhBBxQg4gxAAgyQAAguAxhMQAbgpAvhGQAJALARAdQAUAlAEAUQgjAeggBBQgcA1gFAgQAIAIAdgsQAIAIA3AtQA7AtALAEIgUBgQh1g/gygsg");
	this.shape_2.setTransform(15.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#758A51").s().p("AhABqQgMgYgwiHQAQACAXgBQAYgCALgDQACAmAXAxQAYAzAaAYIACgBIgOgeQAMgbALgnQAXhMAAg/QAAgOgHgLIAFAAQAUAhAwArQghCEgPAjQgfBGgzAAQgiAAgZgzg");
	this.shape_3.setTransform(6.7,-14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgwAWQgSgPAAgoIAJAIQAMAIAcALQAWAGADAAQAMAAARgGQARgJALgMQAIAggTAPQgSAOgmAAQggAAgOgMg");
	this.shape_4.setTransform(-2.2,-24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B3E4E6").s().p("AhGBZQgXgWAAgbQAAgHAGgkIABAKQABAJAKABQAPgkATgxQAQggAigKIgGAHQgLAQgOAiIgQAvIAFgBIAZgwQAcgvAdAAQAGAAAGADIAKAHQgfAOgUAkQgPAYgEARIACADQANgCAUggQAZgnARgDQAJAAAHAVQg1BngHAQQgHASgOANQgNAOgQAAQggAAgWgWg");
	this.shape_5.setTransform(0.3,-37.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("AAAB3QgBgIAAgHQAAgTAVgJQAegMABgBIgBAAQgEgDgjgmQgjglgJgMQACAQADAKIgjAKQggAIgFABQgKAAAEgCIgDgQQAJgVA4gMQA2gJAEgBQgEgHgLgIQgHgEgSguQADgSAPAAQAIAAALAbQAMAbAagBQAWgBAUAUQATAVAAAYQAAAJgPAXIg4BcIghAMQgDgCgDgGgAhEBXQgDgFgFgEQAEgLAegXQAcgVABgCIATAYQgGAMgaARQgbAPgNABIgCgDg");
	this.shape_6.setTransform(-28.5,14);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#526139").s().p("AASA5IADgGQAAgWgUgcQgXghgigEIAFgCQAlgSAFAAQAKAAAcAhQAbAgABAMQAAAOgJAKQgKAMgSAAIgCAAg");
	this.shape_7.setTransform(-17.9,8.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#758A51").s().p("AjFBxIDDiVIgBgBIAAAAICah3IgFgNIADAGIAbAqIAWAtIgEgBQgOAAhiBJIjpCuQgSgZgcggg");
	this.shape_8.setTransform(3.7,-9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#526139").s().p("Ag9ATQgEgLAAgeQASAGAsgBQA1gBALgQQAIAbgFAOQgKAchNAAQggAAgGgQg");
	this.shape_9.setTransform(-19.6,-55.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3E4E6").s().p("AgvB5QgFgJgLgjQAVgDACgIQABgEgBgDQARAAAVAPQATAPAHAAQAEAAAJgFQANgHAJgKIgiAFQgcABAAgXQAAgLALgMQAOgNAPABQAyAAAAAoQAAAYgIAQQgFANgEAAIgcANQggALgPABQghgBgJgLgAhTA3IgCgOQACghACgIQAFgMAPADIgDAAIAAATQAAAFAEAOQAEAOAAAFQAAADgQAJQgEAAgHgFgAglAmIAAAAQgKgNABgPQgBgIAIgTIAAAAIAOgQQAGAAADADIAFACIABAjIACANQAAAGgHAJQgFAIgDACQgHgCgHgFgAAFAFIgEgoQAAgjAIgdQALggAPgBQAZAAgBAsQgGAwAAAJQAAAOADARQgBgBgTABQgUACgLAFgAA4AAIAAAAIAAAAg");
	this.shape_10.setTransform(-21.3,-71.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#758A51").s().p("ADdDRQgEgLgBAAQidgxiOiFQiOiBgFhiQASgEAUgCQAJgBALgEQArBhBwBiQByBkBfAQIgDgTIABgFIACgCIACACIABADIgBADIAlCUQAAACgDACg");
	this.shape_11.setTransform(2.2,-28.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#526139").s().p("AgxASQgPgRAAgQQAAgKADgKIABgBQACgBADgFQAIAIAhANQAfANAKAAIAegBIAAgNIABgBQAKAggEAQIgBAAQgPANgjAEQgoAAgWgYg");
	this.shape_12.setTransform(-18.5,-13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B3E4E6").s().p("AhEBbQgYgMAAgJQAAgxAeg1QAjhDAuAAQg0A0gIAOQgCANgJAQQACADAEgDQAHgGAfgoQAjgmAmgGQADABACACIAAACQgFAHgiAgQgfAegCAJIALgLQA4gyAMAAIAQABIhABgIgBABIgCAEIgHALQgTAagHANQgJARgPADIgGAAQgNAAgSgJg");
	this.shape_13.setTransform(-13,-26.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#758A51").s().p("AiIBcQg1ghgghFQAhAKAYAAIAVAAQAPAAAEAGQAKATAMAGQAlAUAeAAQA8AABLg8QBNg/gQgrIgBgEQAhASAdBaIgDAMQgBgBgBgDQgBgDgGAAQgGAAglAhQgrAogUALQgkAUgfAKQglAMgpAAQgzAAgsgcg");
	this.shape_14.setTransform(0.1,-7.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#526139").s().p("AAWAOQgTgaggABQgKAAgFACIgPAIQAGgaATgMIAUgGQAUAAAcAVQAaATAAAKIgTAiIgGAHQABgMgOgUg");
	this.shape_15.setTransform(-19.3,-4.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B3E4E6").s().p("AAoBtQgIgFAAgJQAAgUARgWQARgSACgDQgKAAgdgKQghgMgZgOIgGgEIAGAIQAGAGAAAFQAAAFgXAVQgZAYgPAGQgIgJgCgQIAEgJIgBAAQArgpAYgSQAXgPADgEIABgCQgGgEgcgHQgXgJAAgdQAAgFAHgGQAGgEAEgBIAnAdIAIAAIAFgCIARgMQAKgFAGgBQAXABAPAQQANAOAAAQQAAAJgJBGQAAAIgGARIgKAmIABABIgaAagAgpBtQgBgBAAgHQAAgFASgeIAVgoIAYALQgOAdgHANQgTAcgSAFIgEgDg");
	this.shape_16.setTransform(-27.1,6.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAACIAAgDIABAAIAAADg");
	this.shape_17.setTransform(17.9,-22.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#758A51").s().p("AibBLQgVgOgIgEQBahKCBglQBqgdAaAMQgBgHAAgJQAIACAGAEIADBPIACAYIAAAAIgCgHIgCgRIgbAAQgYgBg9AMQgUAFhbAmIhZAkQgIAAgQgNgACrhGIADAAIAAgFIgDAAg");
	this.shape_18.setTransform(0.6,-15.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3E4E6").s().p("AhCBPQgEgQAAgHQAAhWAxgoQAagYAZAAQAYAAALAcQAGAPAAAPQAAAQgJAVIgHAIIABgrQgMAJgCAZQgCASgOAAQgMAAgGgIQgFgHAAgHQAAgEAGgUQAFgTgCgHQgKACgXBEQgbBHgMAIQgCgBgEgPgAAIA9QAJgQADgNIAUgCQgBAggYAAIgHgBgAgHAHQAPAYAAAEQAAACgGAIQgFAIgIAFIgIABQAAgDAMgxg");
	this.shape_19.setTransform(-26.5,-20.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#526139").s().p("AAGgQQgCgEgmgYIgNgCQASgMAMAAQAiAAATAdQANATAAAOQgBANgGAOQgJASgRAHIgJADQAKg7gLgQg");
	this.shape_20.setTransform(-19.4,-26.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("AClBrQgBgBgBgEIgBgIIAJABQgBAHgCADQAAAAAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgBAAgAAlACQhPgqhMAAQgGAAgHAEIgPAHQAAgOgSgYQgUgZgOAAIAcgKQALgEAGAAQBwAABLAjQAlARBpBIIAEgRQADgOAHgHQADgDABABIADAEIACAJQgDAFgGAPIgEAOIgPBGQhShBg0gcg");
	this.shape_21.setTransform(1.5,-24.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#526139").s().p("AgtAkIgKgKQAdAEAegYQAigXgCgiIAOARQAHAKgBABQAAAXgbAaQgZAZgSABQgMgBgTgPg");
	this.shape_22.setTransform(-19.7,-50.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3E4E6").s().p("AAABPQgQgJAAgRQAAgHAKgJQAHgKAIAAQAFAAALAEQAJAEAGAAQALAAALgLIALgQQgBgIgGACIgOAOQgDAEgHAAQgEAAgIgDQgLgFAAgGQAAhEArAOQAQAFANARQANARAAAQQAAAggQAUQgWAagtAAQgLAAgKgGgAg7AtIgHgDIgHgFQALgIAHgDQANgEASAJIgJAJQgIAGgJAAIgJgBgAhhATQgGgCAAgGQAAgiATgfQAagqArARIAAAAIArASIgDAFQgEAFgGAAQgzAAgTAlIgMAXQgGALgLAAQgKAAgDgBgAgkAMIgCgHQADgKARgOQARgOAIgBIgDAUIgEAbg");
	this.shape_23.setTransform(-28.2,-58.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#758A51").s().p("ACbDPQgBAAAAgGIgBgKQAAgEgIgKIgXgkQhdhwghgjQgSgThFg/IhhhHIgEgDQAUgRAVgbQBLA0AOALQAkAcAyA3IA9A9IAAAAIAoAvQAAgCA4BKQAHgRADAAIABADIAAAGIgBAKIgCAHQgFAVgXAzIgCAGIgDAAIgBAAg");
	this.shape_24.setTransform(2.2,-29.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("ABQDiIgDgHIAVACQABAHgKAAQgHAAgCgCgAg5BwQhAg3AAgzQAAg5A+hSIArg2QARgcABgNQAHAHARAgQAUAjAGAXQhIBHgcBtIAIAJIAdgtQALAPA0AqQA2AqAQAEIgUBfQhmgvg5g0g");
	this.shape_25.setTransform(15.5,0.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#526139").s().p("ABIBGIgEgJQgEgHAAgFQAAgIgEgJQgFgIgBAAIgNgKQgTgOgVgMIgVgMQgpgUgXAMIAHACQAHADAAAGIgBADIgMAFIgBAAIgOAAQAEgKARgZQARgaADAAQAwAAAuAZQA6AcAAArQAAAEAEAFQAAABAAAAQAAABgBAAQgBAAAAAAQgBAAgCAAQgCABgGAHQgIAJAAAGQAAAJgFAKg");
	this.shape_26.setTransform(-1.4,34.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#758A51").s().p("AizC/QA8i1A3hLQAxhFB4haQAqA1AhArQhtBFhLBoQhNBqAFBKQg3gUgwgOg");
	this.shape_27.setTransform(12.8,6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3E4E6").s().p("AgsBcQgEgMACghIABgiQgBgBAAgBQgBgBAAAAQAAAAgBAAQAAAAAAAAIgFAAQgDgBgDABQgIADgDAhIAAABIgFgGIgJgMQgGgQAKgZQAKgZgFgJIgFAAQgGADgIAOIgFgPQgFgNA0gdIAEgCIASgHQBTgdAhBgIACAZQgBAWABADQADAHAFAEIACABQgBAGACAJQAFAggJADQgGACgcgGIgNgDIgFgIIgBgBIATgDQAXgJgegEQgfgEgTAGQgOAHAEAKQABADAXgCIABAAQAAADAFADIAAABQggAWgFACIgEAAQgXAAgEgLg");
	this.shape_28.setTransform(-4.3,43.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#526139").s().p("AgjAgQgcgYAAgQQAAgOAFgKQAJgPAYgLQgFASACATQABAJAEAJQAGAFAIAFQAjAaAmgGQgGAHgMAKQgQAPgHAAQgcAAgegbg");
	this.shape_29.setTransform(-6.2,-76.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#758A51").s().p("ADhFKQgDgDgFgNQgEgVhIglQh0g6hZhCQhUg7gpg2Qgrg3AAg4QAAgJAGgRIAvh6IA+haQAZAlAfAQQgYAZgYAmQgwBIgPBHQAAAAABABQAAAAAAAAQABAAAAAAQAAABABAAQAEgBAHgJQBxBpAqAcQAzAkCgBCIAAgHQAGgSACAAIADAEIABAWIAAAAQABB9AEASIAHARQACAMgDACg");
	this.shape_30.setTransform(-1.5,-42.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B3E4E6").s().p("AhFBkQgOgFgMgLQgKgJAAgNIAAgFIAAgKIAFgSQABgLAIgKIACgDQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIgBgCIAegdQAngpAOgMIABAAQAHgIALABIAIABIABAAQAEABADAEIABACQABAEgBAHIgCAIIAAAAQADAQhGBAIABgBQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQA9gwAIgeIABgCQAEgOgDgJIALgKQAHgJAKgCIAFgBIAMAKQADAEACAGIABADQABAMgZAeIgIAIQgiAhgTAQIgFADIADACIABAAQABADADAAIAEgBQAkgaAeghIAIgJQAJgJADgKQAGAHgBAGIAAABQgDALgEAHIgBAAQgFAIgNAKIgjAbIAAABIgEAEIgGAFIgBABQgEACgCADQgIgDgLgCQAAACgNgCQgfADgOAZIgBADQAEAUASAGQAQAFAPgCIAJgDIABgCIAAgEIgEABQgJACgEgBQgIgDgEgDIgFAAQgNgDgDgLQANgYAgADQAQACAHAGQAGAEgBAIQgEAPgUAOIgXAOIgDACQgIADgIABIgKAAQgPAAgOgGg");
	this.shape_31.setTransform(2.8,-85.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#526139").s().p("AgPBaIAEgBQADgBACACIgFABIgEgBgAg3BCQgggdAFgWQAQgnAfgjQAcgfANAAQAEAAAeAPIAmAUQgwASgWAhQgWAggDA+QgPgDgXgVgABHgwIAJgFIAEAHg");
	this.shape_32.setTransform(94,22.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B3E4E6").s().p("AA4BnIAAgBQgcgEgpgPQgYgJg4glQg2gkAAgCQAAgZAegkIAfgpIAAABQAAAEAiAEQAbADANAAQAUAAArgFQAhAAAAAaQAAALgLAEIgPADIgIgDIgCAAIABAAIhfgYIClA7QAbAPAAASQAAAGgFAGIgBABIAAAAQgHAFgWgGQgXgHgqgKQgrgJgegWIABAIQgDASBWAUQBYAUABACIABADIABAHQAAAMgIAEQgLAGgjAAQgSAAgagHQgygPgmgmIgHAKQAiAcArASQAaAJAoAMQgRAKgRAAIgIgBg");
	this.shape_33.setTransform(108.3,29);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#758A51").s().p("Ak5hrQhEgtgQgQQgRgPAAgQQAAgIAUgcIAFgHQAYAcA6AYILSFpIgzBIg");
	this.shape_34.setTransform(48.5,-2.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#526139").s().p("AhBBLQgQgfAAgiQAAg2AVgiQAVghAkgBQBFAMAQAHQg1gKgKAAQgcABgPAdQgOAdAAA9QALBTAAAGIgEAGQgTgHgPgeg");
	this.shape_35.setTransform(-2.6,-27.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#758A51").s().p("Ah4CEQg7gkAAhQQAAgjAQghQARggA0hGQAGBSAOAYQAGAKAmAaQgOAQgNAWQgWAigCANIABANIAdgpQAVgdAEgCQgEAhAAALQAAAoAVARQAMAMATAAIAOgEQAOgHAJgGQAPgLAAABQgBAJATgBQAlABALgGQAGgEAKgMIALAJIANAJQh7AjgbAHQggAJgcgBQgzAAgngXg");
	this.shape_36.setTransform(-3.2,-13.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B3E4E6").s().p("AhuCdQgKgNAAgiQAAgKAIhPIgBgZQgKhGABgQQAAgjAQgXQANgTAMAAQBRAAA8BLQA/BMAABrQAAAegLAQQgJANgQAAQgHAAgKgGQgMgHAAgJQAAhagjhJIAFAPIASB4QgBAagJAMQgNAPgaAAQgNAAgPgKQAEgLAEgdQAFgeABgNIgCgVQgHgngNgdQAQBzgXAyQgOAggZAAQgSAAgHgLg");
	this.shape_37.setTransform(7.4,-19.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgEABIgCgCIANADg");
	this.shape_38.setTransform(22.7,-23.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#758A51").s().p("AEEEyIAAgBQgDgKgegMQhtgng6gXQhcgmg3gdQgbgPgLgIQhmhDgfg2QgOgZAAgzQgBgkAUgsQAfhJBThuQAJAUAZAPQAUALANAAQgaAjgtBMQgsBMgGAWQgFAXACAFIAFAJIAEgKIAAAAQAiAhAVANQAgATBiAuQAxAZA5AQQAwAOAkAEIgDgHIAAgBIAKABIABAEIABAEIArBlQAhBSABAOIgGAJQgDgCgFgWg");
	this.shape_39.setTransform(2.4,-35.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#526139").s().p("AgiAoQgjgVABgYQAAgTAdgfIgJAcQgFAbAUARQATAQAkAAIAVgBQASgCAIgJIgIAJIgRASQgNAIgZAAQgNAAgbgQg");
	this.shape_40.setTransform(-4.5,-71.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B3E4E6").s().p("AgKApQgqghgNgDQgPgEgJAFQAjATAaARQgKAEgOAEQgOAEgIAAQgQAAgQgGQgXgKABgSQAAgjAggbQAhgaAuAAQBLAAArAjQAdAYAAASQAAAOgLATIAAgLQgFgXgegbQgfgggVAFQBQAqAAAoQAAAFgBAEIgCAHQgaAAgQgOQgJgIgRgZQgfgugvAAQgYAAgNAHIAPgDQA3gFAfAqQAhAqgDAKQgCAKgNAHIgEAAQgOAAgigcg");
	this.shape_41.setTransform(4.4,-74.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#526139").s().p("AguBpQgng9gbg8QgMgegKhAIgJhAQAbgHAWgRIAAAJQACA4BMCJQBLCOAgAAIAJABQANAKAVAXIAKAMQgoAFgJAAQgXAAhJh7QhDhpgSgtQgHAYBCBtQBCB0AuAZIglABQglAAg5heg");
	this.shape_42.setTransform(67.5,-0.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#758A51").s().p("AjBAFQhuhXAAhWQAAgQAKgTIALgUQAXAVBIAdQBoArBgAAIBzgIQAKABgHAEQgPA0BGCNQBFCOAxAWQlUhaidiBg");
	this.shape_43.setTransform(38.7,-3.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#B3E4E6").s().p("AAVGTQgagigsgsIgMgPQhChTgPgbQgTghgahNQgZhHAAgOQAQglAAgFIgCgoQARgDAFgJQAEgFAAgNQAAgRgMgdIg+iXIAwAaQAGgCACgDQACgDABgIQAAgKgHgJQgOgcgrhAQDgBLCDCUQCUCkAADbQAABCgIAZQgLAignAXQhJAqgpALQgPAEgkAAQgDAAgFgDg");
	this.shape_44.setTransform(80.4,-22.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#526139").s().p("AAABdQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAgBAAgBIAAAGIAAgBgAgFBdQgHgBgDgCIgLgFIgZgNQgagOAAgHQgBgWAUgyQARgwAIgMQAXgFAAgHIBFAUIANAFQgoAVgSAaQgZAmACBIIAGAEIgCAAgABCg8IAIgGIAEAHg");
	this.shape_45.setTransform(82.4,28.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B3E4E6").s().p("AAjBfIgqgGQgZgFg8gdQg5gcAAgEQAAglAzhFQA7ACAngIIAogIQAjAAABARQAAAPgaAKIhqgLICBAaQAwALAHAFIALAMQAHAKAAABQAAAVgqAAIgmgEIg6gPQgogIAAAHQAfAJBuAVQAQAAAMgCQAEAAAJAKQABAMgHAGQgLAMguAAQg0AAhJgoIgHAKQAlAXAuALQAZAGAqAFQgUAPgQAAIgigDg");
	this.shape_46.setTransform(97.5,32.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#758A51").s().p("AjugoQhPhggDhMQAAgPAHgeQACABBRBaQBZBlBDAvQBUA7BBAjQByA8CEAfIgPArQgOAqABAGQl3hsici+g");
	this.shape_47.setTransform(44.4,4.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#526139").s().p("AgiAjQgggSAAgYQAAgGAHgMQAJgOAPgMIAAADQgDAXAHAUQAEAHAFAGQAHAGAIABQAbAKAagHIAEABQAGgBAEgDIAFgDIACgBQgOAUgQAMQgMAJgDAAQgcABgcgSg");
	this.shape_48.setTransform(-7.3,-71.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#758A51").s().p("ADzElQgEgEgFgLQgFgPgcgKQgpgMgegMQgUgIhXgmQhZgngVgKQg/gggtgtQg3g3AAgwQAAgbAehVQAfhaAcgsQAGAGA4AoQgUAagUAmQgoBKgKBKQABAAAAAAQAAABABAAQAAAAABAAQAAAAAAAAQAEgBAGgKQB9BWApATQA4AbCjAnIAAgGQADgSADgBIABABQALAaACA1QADA5AIAaIAJAOQADAMgCACg");
	this.shape_49.setTransform(1.6,-39.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B3E4E6").s().p("AgtB4QgPgBgOgGQgLgFgDgMIgCgOIAAgSQgBgJADgIIACgHIABgDIADgCIgBgCIAVgkQAdgzAMgQIAAgBQAHgKAKgDIAHgCIAAAAQAFAAAEADIABABQACADAAAIIAAAHIAAABQAGAOg3BTIACgBIAFABIAEgCQAwhBACgfIAAgCQAAgPgEgHIAJgNQAFgLAJgFIAEgCIAOAFIAHAIIABACQAEAMgTAkIgGAKQgZAsgPATIgDAEIADABIABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAAAgBQAegjAVgpIAHgLQAGgMABgKQAHAEAAAGIAAABQAAAMgCAIIgBAAQgDAJgMAOIgbAlIAAAAIgCAFIgGAHIgBABQgDADgBAEQgJgBgKADQAAABgOADQgbAMgJAdIABADQAGASATgBQAOABARgIIAHgGQAAgBAAAAQABAAAAgBQAAAAAAAAQAAgBgBAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgEACQgJAFgEABQgJAAgDgBIgFABQgNABgFgKQAIgaAggIQAPgEAIAEQAIACgBAIQAAAQgRATIgUAVIgDACQgHAGgJAEQgPAGgPAAIgFAAg");
	this.shape_50.setTransform(-0.4,-82.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#526139").s().p("AhUAhQgIgPgKgyQAHAMASADQAKACAhAAQAQAAAugNQAfgJAMgGIgDAAIgJgCQAagYANAkQAFAWAAAMQAAASg1ATQgxASggAAQgpAAgMgXg");
	this.shape_51.setTransform(-0.7,-7.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#758A51").s().p("AhPBpQg8hCgCgsQAOgCAlgIQAkgJALgEQAyBfBHAQIgzgtQAUhBAAhfQAAgKgOglIACgFQATAFBYBRQgCB/gYBAQgaBHg5AAQgxAAg/hFg");
	this.shape_52.setTransform(10.2,0.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B3E4E6").s().p("AgiDFQgZgQgYg0QATgFALgPQAJgNAWAAQAFAAAIAJQAJAMABACQAOAIAOAAQADgBALgEQAPgFAJgJIARgKIgzAHQgOAAgPgIQgNgJAAgKQAAgWAMgIQAUgNA+ACQAWAPAMAjQAHAXAAASQAAAfgbAVQghAZhCAAQgWAAgMgIgAhXAEQgBAdAOAcQANAcAAAEQAAAKgLAEIgeABQg1hjBEgFgAhDgBQAKgxAlAFQAFADAOBFQgLAHgIAXQgIAVgHACQgpghAJgwgAgGhnQgFhPAIgMQAGgLAKABQAggBAMA0QAHAgAMCKIg/AEQgKhEgJg4g");
	this.shape_53.setTransform(-5.3,-31.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#526139").s().p("AgsBCQghgNgFgNQAjAGAyguQAugqADgYIgHABIABgNQAlAcAAAqQAAAOgQAVQgXAegtAWQgPgCgcgLg");
	this.shape_54.setTransform(-43.5,-70.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B3E4E6").s().p("AgsCKQgvgwAAgYQAAgVACgIQAHgTAZAAQBLAAAABIQAAAMgKAHQgIAEgGAAQgJAAgOgHQgPgHgLgKQgJgJgCAJQASAUAKAIQAPAOAUAAQALAAAJgMQAIgLAiAFQAZADAOgMQAMgKAIgcIADgOIgfAdQgPAOgZAAQgHAAgFgFQgFgGAAgIQAAghAcgbIAegaQAVgFAeAoQAdApgBAeQABAxg3AcQglATgaAAQgtAAg0g2gAgsACQgZgFAAgDQAAgWALgLQAHgJAOAAQAOAAAiAXQAcARAKAIQgMALgOAZQgfgZgkgJgAAjgeQgZgWgxgNQhKgTgjgqQgVgagBgQQABgMAQgHQARgIARAIIAlAPQAVAIBHBGIBIBHIgFAGQgIAGgHAAQgFAAgWgTg");
	this.shape_55.setTransform(-57.8,-88);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#758A51").s().p("AFWFaIgJgJIqtpsQAbgLAUgTQARgTAEgSIJPH3IAEADQANAPAKAaQATAzAABQQAAAKgCANQgDABgGgGg");
	this.shape_56.setTransform(-6,-33.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373D48").s().p("Ag9AKQgHgggDgFIB8gbQAHAPAGAUQAGATAAAGIgBAZIh8AYQAAgIgIglg");
	this.shape_57.setTransform(-11.7,-12.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#526139").s().p("AguBZQAbgLAMgkQAGgUAAgTQAAgVgQgeQgNgagMgJIgBAEIAAAEIgNgKQAYgDAMAAQAjAAARARQAZAaAABHQAAAbgIALQgUAahCAAIgJgBg");
	this.shape_58.setTransform(-63.2,-2.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B3E4E6").s().p("AgdBlIgMgXQAtABATgIQAYgFAAAOQAAAJgIAIQgMAMgbAAQgYAAgFgIgAA5A3QgPgMAAgSQAAgKAOgHQADAOAMAGQAHADAFAAQAGAAgBgBIgBgBQgBgKgLgQIgLgMQAAgJAFgTQACgRgMgMQgCADgFAwQgDAgggAAQgMAAgHgIQgPgNAAgmQAAgoATgRIAWgJQBBAAApAvQAiAnAAAiQAAA1gtAWQgGADg0ANQAIgmgMgKgAgtA0QgWgJAAgOQAAgKACgTQAAgFARgDIARgCQANAgARAHQARAEAMAFQgQAVgRABQgWAAgSgIgAibgTQgNgKAKgQQACgTAxgLQAngKAygCIgQA+QAAAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgEAAQgKAAgpAHIgtAIQgJAAgJgHg");
	this.shape_59.setTransform(-81.9,-3.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#758A51").s().p("Al4BcQgDgtgMgVIBTgLQAtgGAtgIIBagPQBcgRALgDQAMANAEAWQACAKAAATQAAARgEABQg6AMiAAfQh5AegmAMIgUAFQABgUgBgagACRgZQgIgngCgFQAagGAfgJQAigKBMgSQA7gOAAgLIAHAAIADABIgDgBQgCgBAAAGQAJBaARAYQABADgDACQgEgFjpAjQAAgGgIgkg");
	this.shape_60.setTransform(-18.1,-11.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#758A51").s().p("AiTAbIhNhaIARABQArAAAkgjIAAABQABAXAZAjQAlAyBCAAQAwAAA5gtQAdgXAOgQQAfALALAGQAXAOALAYIgDADQgNAPgGADIgWAUQgRAOgKAFQgyAdgYAKQgnAQgyAAQhDAAhHhHg");
	this.shape_61.setTransform(10.4,6.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#526139").s().p("AhGAnQgmgkAAgpQAAgVAEgJQATAnAGAKQAbAoAdAAQAaAAAFgCQAGgHAMgIIArgPQAagKAFgYIAFAJQAEAGAAAHQAAAtgwAbQgnAUgsAAQgRAAgfgeg");
	this.shape_62.setTransform(-11.2,-8.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B3E4E6").s().p("AhlBgQgUgtAAg1IALgvQACgJALgUQAMgWALgKQANgMAYgKQAhgOAdAAQAjAAALAHQAQAKgBAjIgDAHIgJAJIgNgLQgLgFgogPIAAABIAiAeQAgAbAHAOIAAABIABALQAAAUgGACQgJADgBAEIgogfQgTgOgWgFIgGAAQAqAdAaAaQAbAcABAUQgBAFgQAUQgRAWgQAMQAFglgIgRIgBABQgQAtgNATQgRAUgVAAQgjAAgWgzgABRAQQASgUAAgUIgFgRQgGgSAAgHQAAgKACgDIAFAAQALAKAIAOQAIANAAAGQAAAugiAQg");
	this.shape_63.setTransform(-8.6,-23.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B3E4E6").s().p("AgwggIgHABQgEABAAAGQAAAYAWAmQANAVAVAfQgsgIgmg1QgdgngCgXIgGAQQgBAKAKAUQAKATAJALIgKgFQgQgKgQgeQgOgdAAgMQAAhvBWAAQBDAAAXA3QAPAlAkAiQASAQAOALQAAAKgEAFQgIAIgYAAQgDAAgjgXQgjgagNgOIAFAKQAVAfBOA8QA8AwAAAYQAAALgFAEQgIAIgYAAQhXAAhLi7g");
	this.shape_64.setTransform(11.3,8.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#526139").s().p("AASgcQgpgeg9AUIAAAAQAKgGAdgHQA1AAAdAUQAeAVASAyIAAAMQgpg8gagUg");
	this.shape_65.setTransform(8.9,-4.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#758A51").s().p("AAQBsQgCgWgSgfQgagqglgFQAHgEATgbQAWgjAAgRQAAgGgDgCIgHgEQAAAAgBAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgCgBAAgGQAAgJAHgDQANAGAoAxQAsAyAAAIQAAAHgDAFQgGAEgGAAQgFAAgDgDQgCANgIAcQgKAhgJAPg");
	this.shape_66.setTransform(17.4,-11.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#526139").s().p("AhCAOQgdgYgCgeIAAgCQAUATASANQAlAYAiAAQAcAAAXgOQAVgQAKgbIACAPQADAJAAAKQgBANgJANQgUAbgvAAQg1AAgjgeg");
	this.shape_67.setTransform(1.5,-0.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B3E4E6").s().p("AgKBrQgLgFgiggIAHgEIATgCQALgCAGgEQAKgKAKAEQARAEAVAAQAHAAADgDIAGgHQgFgEgogNQgggKAAgJQAAgHAIgJQAHgNAMAAQAxAAAbAcQASATAAAOQAAATgTAZQgXAdgdAAQghAAgMgIgAhMA2QgGgFgFAAQgGAAgCgCIgDgGIAAgCQAeAJAPAKIgJABQgGgBgIgEgAgvAsQAMgKAGgLQAIAMAIAFIgOALQgKAAgKgHgAhjAJQgGgJAAgWQAAglAPgYQAPgZAZgFQA4gLA6BiQgRgGgYAAQgaAAgKAJQAEgegBgFQAAgCgGgEIgCABIgVBCQgIAagKAAQgfAAgLgUg");
	this.shape_68.setTransform(-0.3,-11.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#758A51").s().p("AhDCCQghgggRg2QAaAHAWAAQAMAAAWgEQAVgEAIgEQACARAJASQALATAKAAQAKAAgEgBIACgBIABgFQgNgMgGgHQgLgOAAgWQAQgbABgEQAFgeAEgGQALgSAMgoQAQgzgKgPQABgEAHAFQAWAiAOA6QAOA4gBAsIgCAAQgGAFAAgKIABgLIgCgBQgOBGgaAmQgaAmgjAAQgoAAgiggg");
	this.shape_69.setTransform(10.5,0.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#526139").s().p("AgqA9QgggXgWgmQALAEAYAGQAWAGAIAAQAVAAAOgKIBLgzIgUAGQAGg2AQAZQAPAXAAAQIABARQAAAKgHAAQgJAAADACIAHALQAIAXg7AfQgGADgNAEQgRAFgMAAQgLAAgXgQg");
	this.shape_70.setTransform(-33.9,-45.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B3E4E6").s().p("AgkCyQgtguAAhEQAAgoAggBQAZAAAUAnQAOAeAAALQAAAWgKgBQgJABgHgFQgHgFgWgVQACAQAGAMQAKAWAVAAIAMgGQAQgKAHgOIAAgIQAEATAPAJQAKAFALAAQASAAALgJQAJgJAAgMQAAgHgBAAIgJAAIgHAJQgJAKgGAAQgLAAgIgHQgIgHAAgNQAAgFAEgRQAEgSAAgGQAAgJALgFQAKgEAMAAQARAAAPAaQAQAbAAApQAAAZgWAdQgeAogxAAQgkAAgkgogAAFArQgYgjghgFIgBgSQAAgLAMgEIAOgBQARAAAOAKQAgAVAAAvQAAAGgFATIgEAQQgCgSgUgbgAATgRQgOgLgggVQgpgdgQgTQgGgHgegvQgQgbAAgOQAAgNAEgFQAFgHATAAQAZAAAXAYQAxAzBPCgIgRAJQgIgbgYgRg");
	this.shape_71.setTransform(-41.3,-67.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#758A51").s().p("ABvCaQhvgXgngcQh/hYgqglQgcgagvg/QAagJAKgHQAPgKAdghQA7BiBrBDQB1BICDAAIATAAIgFgOIgDgMQABgEADgBIAKAMQAIAJAAACIAAAAQAIAPAQApQAQAoAAAFIgBAHQgIABAAABQgOACgSAAQgyAAhSgRg");
	this.shape_72.setTransform(-3.9,-24.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B3E4E6").s().p("AA5B5QgBgCABgHIABgPIgQgmIAAgSIARgMQAHAPAVANQAAACAAABQAAABAAAAQAAgBAAgBQAAgBAAgDIgNgoIADgdQACgZgEAAQgNAWgMAaQgKASgVAAQgLAAgHgKQgKgPAAgjQAAgbAWgRIAYgNQAsAVAkAdQAbAWAJAOQAOAVAAAnQAAAcgSATQgVAVgnAAQgKAAgWgDgAggBgQgMgKgFgKIgBgJQAWAHAgAEQAXADANANIgJAKQgHAGgTABQgTAAgSgPgAgmAwQgdgQAAgSIACgPIACgJIAMgBIAagBQgHAYA6AlQgCAFgDACQgHAEgQAAQgNABgXgNgAg7giQgbgLgpgMQgdgNgKgkIADgNQgEgEAKAAQAJAAAzARQA3ATAiAFQgRAXgDAKQgDAIAEARQgggHAAgDg");
	this.shape_73.setTransform(-42.6,24.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#526139").s().p("Ag7BNQAdgKARgXQANgVAAgXQAAgbgGgVQgJgWgPgKIgBACIgMgKQA7AKATAPQAZAWAAA9QAAAkgNAPQgNASgiAAIgIAAQggAAgTgMg");
	this.shape_74.setTransform(-23.4,29.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373D48").s().p("AgSAjQghgPgQABIAbgyQASghATAAQAUAAAXANQAcARAAAWIgUAhIgYAoQgMgNgegPg");
	this.shape_75.setTransform(12.1,7.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#758A51").s().p("AjZEFIgKg+QAqgNAdgRQATgLBBgtQAJgGASgXQAPgUAOgFQAOgFAHAAQAFAAAWAMQAcAPAPAQIhLBIQg8A9geARQgYAPgyAVQgrARgHACQAAgPgDgagAB7gaQgLgOgCAAQgBAAgRgPQgNgNgeAKQAVgaAVhbQAXhfgPgZQgBgCAAgEIABAAQAkA7A5BTIAAACIgCAWIgGgIIAAAAQgHADgEATQgLAsgaBEIgNgRgADjhaIgCAAIADgGIAAABIgBAHIAAgCg");
	this.shape_76.setTransform(6.2,5.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#526139").s().p("AAAgNQAOgJAcgDQgVAZgKAFQgLAJgpANQAUgcAVgMg");
	this.shape_77.setTransform(11.6,32.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B3E4E6").s().p("AAlBnQgEgCgJgJQAsAGAtgsQAAABAFADQAHAFAAAGQAAAKgSANQgTAPgUAAQgXAAgIgEgAgBA/QgCgNgFgHQARgDAZgcQANATAgAIQAHAAAHgHIAKgKIAAAGQAEATgXANQgVAMgdAAQggAAgDgJgAB4AiQAAgOgCgMIgHgcQgDgOgBgCQgEgGgMAAQACAjAAAGQgCASgQAAQgLAAgKgMQgNgOAAgaQAAggAVgVQAQgSAQAAQAXAAAUAuQARAnAAAaQAAATgJAJQgLAKgCAFgAiNASIgMgaQARgMAhgEIB6gPQAEAYAFAQQgXAPgnALQgiAJgSAAQgqAAgNgSg");
	this.shape_78.setTransform(10.4,41.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373D48").s().p("AhSATQAfg6AYgZQAPgPAJAAQAVAAARARIAwA9Ig9BSQgWgmhSgYg");
	this.shape_79.setTransform(8.7,2.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#758A51").s().p("Ah5C1QgYgnAAgsIAFgqIAIgkQAGgUAGAAQAVAAAhAMQAtASAAAcQAAALgFAEIgPgbQgKAEgBAIQAEAQAiA0QAgA0AcAhQg+AAgqA3Qg8hQgDgFgAAYhvQgegfglAEIBchwIgCgQIAIAGQA+BYAOAYQAPAZAAATQAAAFgBABQgBgBAAAAQAAAAAAgBQgBAAAAAAQAAAAgBAAQgCgBgHgLQACgKgKAAQgHAAgTAUIgmArQgMgdgZgXg");
	this.shape_80.setTransform(12.1,6.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#526139").s().p("AgwApQgNgWgDgVQAAgRAJgUIAXgtIACABQgFAMgIA2QAAAGAWASQAdAfA5AfQgOAIgcAIQgvAAgYgsg");
	this.shape_81.setTransform(-7.3,1.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373D48").s().p("AgPAQQgCgLAFgZIACgBIAaAkQgNAFgOACQgCAAgCgGg");
	this.shape_82.setTransform(5.2,14.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#B3E4E6").s().p("AAxB/IgigjQgugtgNgKQgcgPgSgLQghgTAAgWQAAguAhgeQAegdAkAAQAsAAA0AvQA1AxgCAtIgKgPQgPgXgWgUQgigggbgDQAgAmApAmQAYAZAAAmQAAAEgLALQAAgSgmghQgigdgTgGQgKACAAADQAUARAiAmQAlArAAAIQAAARgGALQgHAQgPAAQgGAAgIgJg");
	this.shape_83.setTransform(2.6,1.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#758A51").s().p("AiXBfQgigkgGggIAzAyQARANAjAAQAUAAAGgDIAXgWQAUAWADAbQADAfgbAAQhAAAgvgygABmBJQAMgLAAgWQAAgMAGgMQAFgLAAgMQgLgqgPgXIAjgTQAUgQgEgZIAAgMIAHAHIAIANQAHAYAUCcIgFACQgFAAgGgJIgFgJQgSAWgHAMQgFAEg2AlQABgfAOgLg");
	this.shape_84.setTransform(4.6,2.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#B3E4E6").s().p("AgWBaQgHgLgHggIgIghQgBgBAAgBQgBAAAAgBQgBAAAAAAQAAABAAAAIgFABQgDAAgCACQgIAFAGAgIAAABIgHgFQgKgHgBgCQgKgOADgaQADgbgIgHIgEABQgFAEgEAQIgJgNQgIgLArgqIADgDQAHgHAIgFIAAAFIAzAEQAVAFAaAKQALAFAVAIIAAgBIAIAWQAGAYACADQAEAFAGADIACAAQABAFAEAIQANAdgIAFQgFAEgdACIgNAAIgHgHIgBAAIARgIQAUgPgeAEQgfAEgQALQgOALAGAJQACACAYgJIAAABQACACAFACIAAABQgbAfgEACQgJAEgIAAQgKAAgEgGg");
	this.shape_85.setTransform(-21.7,-10.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#526139").s().p("AAuAqIgQgGIgHgEQgWgKgNgBIgQgBIgngDIAAAAQgBgHACgGIACgFIADgUIALgMIAHgDIACgBQAYgHAXAEQAmAFAWAfIACAEIgCAEIgBAVQgFARgNAAIgBAAg");
	this.shape_86.setTransform(-19.4,-22.8);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#758A51").s().p("ADcCjQhQiUiChUQgXgRgXgMIgpgTIgBgBIgFABIgHgCIgDgDQgYgCgZAEQgQABgPAGIgBAGIA3AEIgoBLIgxgPIgRgCIgPAAQAEgIADgKQAJgdATgWQAXgZAZgXQASgRAZgJQAUgIAZgCIAvAGQBGAPBKA4QAvAiAmAoIAQATIAEAJQAIAXACAVIAEASIgGAJIgBACIAAABQgEAIADBBIAABHg");
	this.shape_87.setTransform(2.3,-24.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#526139").s().p("Ag7A9QgngUgYgTQgRgOAAgDQAAgFAEgXIAGgeQAhAeATAIQArARBVAAIAmABQAhgCAOgOIglAAQAIgFAMgOQAMAKAGAIIgBABIABgBQAJAjgZAfQgXAdgiAAQhSAAgpgUgAh/g+IAGgSIABABIAKAZg");
	this.shape_88.setTransform(0.9,-22.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#758A51").s().p("AhrBgQguhRgTh8QAdAPAPAFQAZAIAsAAIAqgCQALBoAMAiQADAIAVAYIgLg+QATgYAGgNQAJgbAFgVQAJgjAKhCIgJgJIACgEIABAAIAHAAQBdA6ACAcIgDAPIgIgBIgHgGQACBRg5BWQg6BZg5AAQgvAAgthQg");
	this.shape_89.setTransform(9.9,-3.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#B3E4E6").s().p("AAlDlQgHgCAJAAQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAgBAAIAAAAgAhjC5QgeggAAhDQAAhygGg8IgIhCQAAgoAMgUQAKgOANAAQAfAAAMAzQAHAgAAA9QAAAjgBAFIgQApQAIgDAcgZQAZgVAOAAQAxAAAXAcQgEACgUATIgUAUQAAABAAAAQAAABAAAAQABABAAAAQABAAAAABIAFADQAQgOAhgKQAgAAAQAQQAMAOAAASQgIBEgNANQAEgZgHgMQgCgEgLgJQgEBSgfAnQgKAMgMAHIgKAEIgBAEQhjAAgngqg");
	this.shape_90.setTransform(3,-46.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#758A51").s().p("Ah4BoQgdhMgdjXQAhAYAuAPQAlANALgCQgRBPAjBOQALAaAPAVQAKASADAAQAKAAgEgEQAAgLgBgCIgJgbIAOgLIANgLQAYghAHgNQAYgwgLgfIADgNIAHADIA+BUQAiAtAAAJQAAAHgFABIgFgBIgCgBIgEgDIgLgNIgHAKQg9BXgaAeQgrAxgrAAQg8AAgghUg");
	this.shape_91.setTransform(6.7,-17.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#526139").s().p("AgrA9QhhgrAAguIALgeQALgeAHgKQAjBJBHAfQAzAYBBAAQAKAAADgHIgWgHIAQgQQAXARAAAKQAAALgQAeQgRAfgLAAQg5AAhTgmg");
	this.shape_92.setTransform(-2.6,-43.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#B3E4E6").s().p("Ag+DPQhAgtgOggQAnhQAHgWQALglAAhUQAAgcgJgZQgJgYAAgeQAAgMAIgQQAJgVAPABQAggBAUA0QAWBBgTBoQAJARAMgEQAigHALgBQAVABARAPQAOAKAFAPIgdAFIgdAHIAMAHQA/AOAGAEQAJAFAAAgQAAATgJAUQgLAZgRAJQADgjgCgCQgYAxgOAaQgaAugRAAQgYAAg+gqg");
	this.shape_93.setTransform(2.4,-67.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#758A51").s().p("ACGHSQgCgBAAgHQAAgDh6hRQghgbgmgpIg+hIQg0g+gahnQgUhMAAhHQAAhZAch0QAeh6Aog/QAIAJApAUQAmAUAGABQgzBXgXBoQgRBPAABNQAACABLBwQBRB6CeBLIACABIALgKQALgGAEAEIABAFQgRAJgWApQgXArgYAQIgCgDg");
	this.shape_94.setTransform(4.9,-57.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#526139").s().p("Ag1A3Qg0geAAgnQAAgdAbglIABAGQAgBTBDANQAYAEAYgGQAUgEAHgIIgKACQAAABgKAAIgPgBIAMgBQALgEAEgDQAFgCAKgKQAJAegjAiQgdAbgPAAQgqAAgtgag");
	this.shape_95.setTransform(2.2,-109.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABAAIgBAAIAAAAg");
	this.shape_96.setTransform(13.6,-115.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B3E4E6").s().p("AiOBKQAAhOBPhWQBPhZBSAAQAsAAABAZQABAehZAoQgwAWgGAGQgBABgTgEQgLgDgEARIABABIAwAUQAbAMAAAUQAAAMgGAMQgHAMgJAGQgKgQgSgKQgTgKgTAAQgEAAgJAFQgLAFgGAEQAuAKAPAIQAUAMAAAYQAAAhgWAUQgTAQgOAAQgjAAAAgVQAAgIAIgRIALgUQgCgEgGgCQgOACgLAXQgKAUAAANQAAANAPALQASANAgAAIANgEQAOgEAFgDIgKAIQgTAJgMAAQhZAAAAhqgAAOB8QAIgVADgKQADgMgCgMQAIABAJgFQALgHAEgOQAPAIACAAQAGAggLAQQgMARgnAJgAAZB6IACgBIgDAAQAAAAAAAAQAAAAAAAAQAAABAAAAQABAAAAAAg");
	this.shape_97.setTransform(11.1,-128.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#758A51").s().p("ACcGtIgCgFQACgKgKgHIgkgRQhMgkhOhIQhShLgphUQgphXAAhkQAAg1AMhIQAXiEA2htQANAJAhARQAcAPAPAMQg4CNgPA8QgLArAAA3QAABaBBBtQAQAbBNBCQBcBMAzANQAEAAAEgFIAMgGQgEAngHAeQgNA4gaAOg");
	this.shape_98.setTransform(4.5,-50.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#526139").s().p("AhCAhQgfgYAAgKQAAgNAMgRIAZgjQANAlAdAUQAbARApAAQARAAAVgHIAAABQAJgIABAMQgMAlgHAJQgNAPgeAAQg7AAgrgig");
	this.shape_99.setTransform(1.8,-98.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#B3E4E6").s().p("AhdCwQgSgbAAglQAAhwAihfQAphzBEAAQAMAAAKAFQARAIgBAOQAAAFgRAhIgqBRQgNAdgNAEQgSAFgEAEQACAFBHABIANATQAFAIAAASIgBAQQgCAAgDAIQgHgEgPgFQgOgEgHAAIghAFIgFACIgEAJQAsgBARAHQAWAKgBAgQAAAygQASQgMANgUAAQgUAAgFgNQgEgNAEgjQgDgDgPACIgBAVQABApAQAJQAXADAMAEIAOgDQgMANgfAAQgvAAgWgjgAA8CNQAAgYAGgrIAGg1IAAgLQAXAMAGAJQALAPAAAiQAAAVgGAUQgFAVgHAAg");
	this.shape_100.setTransform(8.4,-119.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#526139").s().p("AhLgHIADgHIAEgGQAIgSAEgFQAFgHAHAAQAKAAAEADIBoAiQACAJAAAEQAAAZgIAOQgFAKgJACQgshYhVAeg");
	this.shape_101.setTransform(4.7,42.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#B3E4E6").s().p("AgsBcQgEgMACghIABgiQgBgBAAgBQgBgBAAAAQAAAAgBAAQAAAAAAAAIgFAAQgDgBgDABQgIADgDAhIAAABIgFgGIgJgMQgGgQAKgZQAKgZgFgJIgFAAQgGADgIAOIgFgPQgFgNAygcIACgBIAEgCIAKgFIAIgCQBIgZAjBGIAJAUIAAACIACAZQgBAWABADQADAHAFAEIACABQgBAGACAJQAFAggJADQgGACgcgGIgNgDIgFgIIgBgBIATgDQAXgJgegEQgfgEgTAGQgOAHAEAKQABADAXgCIABAAQAAADAFADIAAABQggAWgFACIgEAAQgXAAgEgLg");
	this.shape_102.setTransform(1.5,52.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#758A51").s().p("AiUFBIDGqAQgDgJAAgEIABgMIAEgFQAOAHBTCoQAAACgGAEIgSgZIgFAFIiwIag");
	this.shape_103.setTransform(18,3.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#526139").s().p("AgBBcIgIgCIgTAAQgLgCAAgGQAAgCgqgXQA6gOAdglQAYgaAAgbQAAgKgEgiIANABQAGABAYAbQgYgQATATIASAUQAAAhgWAgQgLASgbAWIgWAUQAAAGgBAAIAAAAg");
	this.shape_104.setTransform(-48.5,-49.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B3E4E6").s().p("AgVCcIAGgPQANAIAIAAQARAAAOgKQAVgQAIgiIgGgEQgUAhgFAFQgJAIgTAAQgFAAgDgBIgHgCIgCgPQAAgpARgPQAKgHAKABQAeAAAOAEQAUAGAIARQADgDACgDQgCgRgUgLQgVgLgiAAQgGAAgFADQgCACgEgCIhGhEQgagZgOgiQgIgVAAgLQAAhsBwCMQAkAtAqA9QAjA1AAACQAAArgbAdQgcAdgoAAQgXAAgUgPgAhWCRQgggOACgYIAAgbQAEAAAIgOQAAAUAhAVQAUANASAHQAAAKgCAHIAAAAQgCAGgFACQgFACgGAAIghgJgAhEBbQgSgQAAgVQAAgFgDgIQgEgHAAgFQAAglAkAHQAlAFANAoIACAEIgagRQgHABgEAEQAHAIAMAIQAJAFAAAFQAAAGgFALIgMAbIgDABQgSAAgQgQg");
	this.shape_105.setTransform(-58.9,-63.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#758A51").s().p("ADmCQQgmgThHgiQADgEAQgfQAPgfABgGQBjAsAtAQQAmAOAWABIADABQgBAHgeBqQgmgfhAghgAjNg1IidhBQAQgJAUghQAUgeACgRQAjAUCLBIICFBEQgBAHgMAdQgMAbgFAFQg+gah0gwg");
	this.shape_106.setTransform(-8.6,-28.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373D48").s().p("AhHAIQAEgFANgcQAMgeABgFIBUB3IgCACgABFAfQgHALgOANQAfgpgKARg");
	this.shape_107.setTransform(-2.4,-26.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373D48").s().p("Ag6AgQAHgRAAgQQAAgLgDgPQgCgSgEgBQAeACBUgFQAGABAEAOIAEASIABAMQAAAfgaAKQgSAGhdAGQAEgDAGgOg");
	this.shape_108.setTransform(-6.9,-3.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#526139").s().p("AhmAyQgmgjAAguQABgDAFgVQAHgVACgGIADAAQAbARAXAXQAXAVAKAGQAgASB2AAQAGAAAAgBIgEgHIgGgEQgDgDAlgMIgDAPQgSA0grAWQgjATg1gBQg1AAgmghg");
	this.shape_109.setTransform(-42.6,-29.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#B3E4E6").s().p("AhACWQgWgEgIgDQgMgFgkgbQgigagOgOQgBgBAAgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgCgBAAgFQAAg1AfgnQAigvA5AAQAmAAATALQATAMABAdQAAAngmAlQgnAlgtAAQgEAAgOgGQgQgJAAgJQAAgQAXgaQAUgWARgJIgBgCQgHgEgEAAQgbgCgVAhQgRAfAAAWQAAAIAPAOQAPAPAMAAQA3AABIhCQAKAVANAKQAOALAbAAQAJAAAMgFQAMgFAFgIIgRABQgpgFgIgEQgKgHgBgVQAAgTARgJQARgMAcAAQAYAAAQALQAVANABAhQAAALgIAPQgKAWgUARQgLAJgNAGQgUAKgoALQgmAKgOABQgPAAgYgGgACMgPQgPgLgJgEQAYgmgHgYQgFgZgqgmQBGAPAVARQATANAAAiQAAALgKAZQgOAggQgBQgGAAgKgGgAAVgyQgLgSAFgIQgCgDg8gbQArgZARgIQAMgEAOAAQAZAAAaAWQAYAWAAAQQAAAYgPAOQgVAVg4AJg");
	this.shape_110.setTransform(-34.8,-46.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#758A51").s().p("AjsA4Qh8hIAEg7IAEgCQAtAFAKgBQAZABAdgLQAegLAVAAQACAAAfAkQAhAmAWAKQBIAiANAEQAOADAAArQAAA0glAAQhMAAh2hGgACaBTQgIgpgRgQQBNgWAlgeQAfgbAZg4IgFgFIAEgKQAVARASAnQATAqACAlQgFADgNgFQgtAfgaAaQgaAahgAWQAHgPAAgQg");
	this.shape_111.setTransform(-13.5,-11.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B3E4E6").s().p("AgPB6IgggIQgOgEAAgGQAAgGgDgBQgGgDgCgDIAAAAIgCgDQgBgCAAgGQAAgZA5gZIA2gYIAbgTQAdgVAJgTIgJACIgNABIgfAfQgRALhRAdQgIAAgRATQgSAUAAASQAAAKACAIIgYABQgYAAgLgHQgQgMAAghQAAgRBCgUQBdgZAwgfIAAAAQgLgCgOAFIgqAQQghALg4AHQghAEAAAKQAAAEgJAMQgLAOgMAAQgmAAgIgIQgFgFgBgEQgGAAABgDIACgLQAAgVAVgGQAPgEA2ABQAPAAAcgIIAZgHQAKgDAkgWQAggVAAgCQAAgQCSgQQAnAAAcAhQAZAeAAAhQAAAzgxAMIgBgBQAFgMACgUQADgOAAgKQAAgWgFgEIgBgBIgMA3QgFATgKANQgaAjg7AbQgxAXgYAAQgIAAgPgCg");
	this.shape_112.setTransform(-5.1,12.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#758A51").s().p("Ai7BTQgKgMgEgNQAAgOAOgRIAMgOIA8gbIAAAAIA1gTQANAKAKAMQAVAUgCAcQgBAIgggHIgogKIgHABIgCADQAJAJAHAEQAMAHAcAJIgDABIAAABQgEADgnAVIgoAVQgiAAgVgZgAA7hDQBkgQAjgYQAGBHACAkIAAAHQg2gCghAGQgZAHgLABQAGgmgagwg");
	this.shape_113.setTransform(-1.8,-10.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#526139").s().p("AhzAtQgDgQAAgKQAAgRA7gYQA9gcA1AAQAcAAATAKQAKAFAHAHQgEAEgfADIgrAGQgkAGgkAQQgNAGg8AmQgKAAgBgGg");
	this.shape_114.setTransform(-2.6,0.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373D48").s().p("AgOA3QAGgfgRgcQgOgYgMgFIBJgVQAKADAHAIQANAPAAAkIgCAWQg5ASgDACIgDAFg");
	this.shape_115.setTransform(-0.7,-11.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_116.setTransform(-11.8,-23.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#526139").s().p("AgmBXQgQgTAAgbQAAgrAkgtQAjguAmAEQgyAOgSA9QgSA3ANAPIAAAAQgHAigIAAQgCAAgDgDg");
	this.shape_117.setTransform(-4.5,-26);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#758A51").s().p("AhNBpQgXgTAAgbQAAgcAcgoQAmg6BOg5IAAAJIgBgBQACCIgNANQgRASAAAKQAAALABgBIAuguIAngeIgKB4QhbAKgJAAQgsAAgYgUgAArh1IAAAAIAAAAIAAAAg");
	this.shape_118.setTransform(-16.2,-11.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B3E4E6").s().p("AhpDJQgSgQABgcQAAgTAOiWIACAAQACgCAAgGQgBgKgJgyIgDgTQABgGAFgcIACgJQADgKABgGQAAgMAdgUQAhgXAmAAQA2AAAoBFQAjA6gBA3QAAAHgCAMQgCAMgDADIgEAHQgCgVADgXQAAgXgPgxIgEAWIABCFQAAAwgGAaQgJApgZAIIgBAAQAFgLAHgnIgEhFIgEhXQgFASgEBPQgEBRgDAKQgEAQgKAPQgVAcgfAAQgKAAgKgEQAMgVAGgkQAEgdALh8IgBgnQgOA4gUCHQgIA/gYAAQgOAAgNgNg");
	this.shape_119.setTransform(6.7,-12.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#526139").s().p("Ag2AzQg1gfAAgcQAAgEAJgUQALgaAPgXQAJAtBAAiIBAAZQAAAGABgBQAEgCAFAAQAKAAAMgDQAAgBgEgDIgGgEIAEgFIAGgCQAIABACAEQAAgBAAgBQAAAAAAAAQAAABAAABQAAACAAACQABAUgTAWQgUAXgVAAQgxAAg1gfg");
	this.shape_120.setTransform(-12.6,-59.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#758A51").s().p("ACdDYQg0gJgxgLQAHgIAJgRQALgYACgYIA/ANQAkAFAdgMQARBIAAAfQgjgKgmgGgAiuBQQg3gyAAhNQAAgRAKhEQAKhCAIghQAMALANAHQAXAMAuAKQgUBAgEATQgGAaAAAqQAAAPACAKQAEAYASA5IAHggIAqAXQAdAPAAAGQAAAZgNAUQgQAYgBAEQhjg+gKgJg");
	this.shape_121.setTransform(-0.3,-30.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373D48").s().p("Ag5AUQAOgNAJgYQAHgVAAgMIBVAfQgIA1gWARg");
	this.shape_122.setTransform(0.6,-16.5);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#B3E4E6").s().p("AgsCtIg/giQgjgVAAgRQBrjsAsgBQAKAAAFAHQAHAJAAAZQAAAQgUApQgTAqgdAjIACgBIAHACQAegYAYgwQAVgsAAgZQAAgFgEgNQgEgNAAgFQAAgVAmgYQALAAANAOQAMAMAAAJQAAAXgVAmIhEBuIAKAFQATgNAagnQAfgxAUg7IANAMQAAASgiA9QgfA0gJAIQggAJgaAJQgxAUAAAjQALAhAcAAQAHAAAPgEQAYgFANgMQgCgBgXAGQgOAAgPgCQgagEAAgLQAAgVAbgOQAZgMAaAAQAPAAAFAFQAGAFAAAMQAAAbgsAsQgnAngQAEg");
	this.shape_123.setTransform(-3.6,-76.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#526139").s().p("AiIB1QgCgTAAgJQAAg8BLhWQBNheBGgBQAdAAAaAGIh5CkIiUCGQgDgOgDgVg");
	this.shape_124.setTransform(-42.5,-42.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#758A51").s().p("AimBGQAegMAugjIAygoIBCgSQBGgTAagMIgBgEQAbAnAEAQQAJAdAGAOQhMAUgrAIQhHAOhBAAg");
	this.shape_125.setTransform(7.7,-16.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#B3E4E6").s().p("AjAFaQg1gcAGgCQgHABgcgjIgIgNIgWglQgLgRAAgHQAAgGgMggIgMgfQAHgNgJgDQgBgFAzgoQA0gqAsgoQA6g4AOgiQAuhWBJgrQAUgNAvgaQAsgZAlgfQASAiAABHQAAAhgOAMQgLAJgdADIg7AHIgxAFIBBAFIAvABIAlgCQgVA/gIAQQgaA5gKAHQgKAHguABIgmgCIgpgDQBYAXAbABIgyA+QgWAcgZAWIhagYQANAJAWAMQAcAQAKACQg1ApgqAaIg+g7QATAvAbAVIhRAmQgcAKAAABQAKACAKAAQAQAAAQgEQAZgGAMgRQAJgMAWAAQAHAAANAOIALAPQg3AWg4ARQATAEAPAAQAQAAAXgFQAngHAagTIBJAjQgaAOgHAAIgUgHQgUgFgRgBIgSARQgUARgPAAQgKABgUgLgAhJESQAegRAVgZQANgOAPgZQAdgkA4APIAcgEIgJgEQgSgFgrgEQAQgRAng+QAbgtAcgFQARgCAvgSQAvgQANgIQhUASg3AIQAYgjAThAQAMgoADgZQAdgJAsgYQAugZAVgTQgGATAAA3IABA8QAAAigPAwIgcBJQgLAggcAkQgOATgjAmQgjAng3AdQhJAigxAcgAiGDsQAIgEBDgxQAsggAdAQIg4A8QglAjgQAAQgKAAgdgagAgJCTIBeh2IAbgBQgPAYgjAzQghAygCgBQgKAAgagFgACPhQQAchCAKgCIgPA3QgOArgfA8IgXAAQANgPAghLgACyjLIADgcQAAgVgEgYQgGghgLgTQACgGAWgKQAZgLAUAAQAqAAALAPQACACAEAdQABAJAYASQAZAUAEAHQgGAFg9AjQg9AjgJADIACgfQAAhWgQgLQgBBVgFAxIgMACIAFgig");
	this.shape_126.setTransform(-20.8,-36.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#526139").s().p("AgzAIQAAgIAHggQARADAcAdQAbAXAYgEIgOAJQgMAFgRAAQg8gKAAgPg");
	this.shape_127.setTransform(6.9,5.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#B3E4E6").s().p("AiKCnQgLgPAAgVQAji6AqgqIgBglQAAghATgLQAKgGAKAAQAkAAAaAPQAdASAGAhQgBADgOAAQgUAAgMADQgMACgPgBQgEAIAIALQgcA4gMCCQgFAvgJATQgMAZgdAAQgXAAgNgSgABABPQgMgGgCgCIgHgGQAVgFAVgkQATghgCgbIALgCQAPAFAGAFQAQANAAAbQAABKg9AAQgJAAgQgHgAgMAgQgHgJAAgMQAAgoAbgiQAZgcARAAQAJAAAJAHQANAJAAATQAAAmgRAcQgSAigdAAQgTAAgKgMgABchRIgMgUIAGgPQAZAcADAIIADAIIABAIQgPgBgLgQg");
	this.shape_128.setTransform(4.4,-4.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#758A51").s().p("AhxCgIAOADQAOAGAagFQAagGAAgIQAAgOANgGIAagNQAogVAAhMQAAgOgZg0IgYg0QAAgHAKgVQAPgZADgIIAIgIQAEgDAGAAQAHAAAHAHQAIAIAAAKQAAAFgDAGQgEAFAAAFQAAAHAXAcIAhAoIgBAJQgXALggBEQgQAigQApQgMAWgiAUQgfAPgOAAQgXAAgZgLg");
	this.shape_129.setTransform(16.9,-6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#526139").s().p("AhJA4QhBgWAAgVQAAgHAEgVIAGgfIA5AbQAkARA1AAQAkAAAhgGQAogHAJgNIgkADQAHgFAMgPQALAJAIAHIgCABIADAAQABA+glAYQgaARg3ABQgkgBg7gTgAh+g4IAGgTIALAbg");
	this.shape_130.setTransform(0.9,-14.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#758A51").s().p("AhrBxQgmhCgchxIAuANQAaAHAjAAQATAAAdgGIAAACQAIBJAMAiQAIAWARAKIgMg9QAAgDAMgRQAMgRAGgRQAFgTAJgnQALgxADgeIgIgIIABgEIAEgCIAAAAIACgCIADgCQAZAGAJAOIASAhQAOAbAFAAIAbgBIABAOQgBAGgBACIgBADIgUABQgfCBg3BGQguA7gsAAQgrAAgnhFg");
	this.shape_131.setTransform(10,-0.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#B3E4E6").s().p("AgTB8IgBgBQgNgHgMgNQgUgWAAgQQAAgPAEgPIADgLIADggQABgngmgPIgcAhQgWAbgPAAQgIAAgHgHQgKgJAAgSQAAgmAkgiQAlglArAAQAXAAAbAXQgFAEgJANQgKAPAAAGQAAAGAFAHIAFAHQAjgjAIgEQAJgFAYAAQAbAGAOAJQgEAEgNAWIgOAbQABACAEACIAEABQAFgYAYgJQALgFAOABQAogBAOAeQAKAVAAAuQAAANgHALQgDgZgJgLQgEgEgNgGQALAqAAASQAAAZgIAUQgPAngnAAQhaAAgZgWg");
	this.shape_132.setTransform(-3.8,-31.9);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#526139").s().p("AhMA2Qg1gbAAgzQABgJACgNQADgPADgFIADgCQAJAWAeAcQAtAoA2AAQAcABAbgLIAtgQQgBgBgGgDQgIgDgDABIADgSQARADAGAAIABAIQgBAqgUAWQgaAbg9AAQg6ABgogVgAhnhCIgKgFQAIgCAJgBIADARg");
	this.shape_133.setTransform(-15.3,-24.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgCgFIAAgCIAFACIgBANg");
	this.shape_134.setTransform(23.2,-13.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#758A51").s().p("AiTBhQhJgwgLg+QALAEAvAGQAtADAKAAQATAAAUgDQAUgFAPgKQAJAPAUAJQASALAUAAQA+AAAwgvQAogpAAgdQAAgKgGgVIgCAAQADgIAFgGIATAaQAGAKAAAIQAAAGgBACIgCAAIgFgBIgCgLQgCgJgHgGIABAIQAHAnAkBRIAHAPQAFAKgEAHIgFAAQgBgEgDgIQgEgIgEgCQg1BNgtAZQguAag6AAQhVAAhKgxg");
	this.shape_135.setTransform(0.4,-15);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#B3E4E6").s().p("Ah1EbQgTgdAAhdQAAiXAZiHQAkjGBIAAQATABAPAOQAQAPAAAWQAABAguBvQgPApgIA3QgGAygCAKIABACQAGgGAcgsQAegmAOAAQAcAAAQAOQAOAMABAVIAAAkQgOADgXASQgYATgKASIAAAEQABACAGAAIAVgWQAVgWAPAAQALAAAKAQQAPAVAAAnQAAA1gUAiQgTAggbgCQgKgFABgKIACgcIgBgcIAAgCQgBgBgGgBQgFAAgLBAQgKBBgZgBQheABgcgpg");
	this.shape_136.setTransform(-9.9,-56.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#B3E4E6").s().p("AgsBcQgEgMACghIABgiQgBgBAAgBQgBgBAAAAQAAAAgBAAQAAAAAAAAIgFAAQgDgBgDABQgIADgDAhIAAABIgFgGIgJgMQgGgQAKgZQAKgZgFgJIgFAAQgGADgIAOIgFgPQgFgNA0gdIAEgCIASgHQASgHAPAAQA5gBAaBLIACAZIAAACQgBAUABADQADAHAFAEIACABQgBAGACAJQAFAggJADQgGACgcgGIgNgDIgFgIIgBgBIATgDQAXgJgegEQgfgEgTAGQgOAHAEAKQABADAXgCIABAAQAAADAFADIAAABQggAWgFACIgEAAQgXAAgEgLg");
	this.shape_137.setTransform(-4.3,43.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#526139").s().p("ABIBGIgEgJQgEgHAAgFQAAgIgEgJQgFgIgBAAIgNgKQgaghgjgFQgpgUgXAMIAHACQAHADAAAGIgBADQgCAEgKABIgBAAIgOAAQAEgKARgZQARgaADAAQAwAAAuAZQA6AcAAArQAAAEAEAFQAAABAAAAQAAABgBAAQgBAAAAAAQgBAAgCAAQgCABgGAHQgIAJAAAGQAAAJgFAKg");
	this.shape_138.setTransform(-1.4,34.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#758A51").s().p("AjQDYQA9i1A3hLQAzhJCDhhIgHgKIgHgJQgDgEAAgHQAAgGACgBIALgCQAHACABAEQgBAMgFACIAEACIAKAIQAHAGAlAsIAoAxIALAQQAMAWAAAEQAAAGgBABIgCABIgKAAIgggoQh2BGhPBuQhMBqAEBKQg3gUgwgOg");
	this.shape_139.setTransform(15.7,3.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#526139").s().p("AAXA+QgegDgQgcQgJgOgDgOIgGgBIABgGQAUgpAVgTQgBAHgFAaIgGAaQAAALAWAWQAaAZAFAMg");
	this.shape_140.setTransform(-10.9,-10.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAAADQAAgDACgEIgCAEIAAAFIAAgCg");
	this.shape_141.setTransform(-8.2,-14.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#758A51").s().p("AimBKQgygnAAg+QAAgKACgJIABAAQANALAvASQAyATAUAAIAiAFIAiAFQAiAAA5gcQA7gfAbglIgKgSQAEgGAEgDQAGABAFADQAHAFAOAXQAMAVAGANIAHAOQAAAFgBAFQgBAAAAABQAAABgBAAQAAABgBAAQAAAAAAAAQgDABgGgIIgGgHQgVA9hFApQhGAqhSAAQhKAAgwgmg");
	this.shape_142.setTransform(6.9,-0.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#B3E4E6").s().p("Ag8BwQACgHgGgCQgIgDgGgKQAKAAAVgOQASgLAFgHQgBgDg1AMIAAgBQgKAEgVgJQgVgJAAgeQAAgcArgxQAzg8A6ABQAwgBAZAUQAdAWAAAxQAAAGgMARIgBgKQgJgjgbgPQgUgMgaAAIgLAJQAgAMAVATQATASAAAPQAAApgTAPQgJAGgkAKQADgKADgOQADgQAAgIQAAgMgUgVQgVgZgYAAQgGgBgDAHQgCAIgCACQAjAPAIAEQAOAJAAAUQAAAPgOAgQgRAigMAAQgNAAgFAEQgKAAgDgDgAhygGQAAABAAAAQAAAAAAAAQAAAAAAgBQABgBAAgCIADgGQgEAFAAAEgABGBYQAMgDAMgWQAHgMAEgLQAFgLAJgFQAFgCAHgBQAAAggPATQgOAQgYAAg");
	this.shape_143.setTransform(3.1,-13.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#526139").s().p("AgwA6IgWgPQgXgVABgiIAIAEQAPAIAYACQAQACAIAAQAdAAAegTQAdgVAJgbQACADACAJQABAGAFAAQAHAAAAARIgBAXQAAASggAWQgoAbg3AAQgFAAgFACIgBAAQgCAAAAgGg");
	this.shape_144.setTransform(-35.9,-36.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B3E4E6").s().p("AgaCgQgUgQgKgaIAJgEQAEgCABADQARAaAZAAQAJAAAOgFQATgGAHgKIgCgGQgIACgQADQgQAEgHAAIgLgBIgMgCIgEgVQAFgMAOgNQAOgOAPABQAQAAATAOQAaAVgCAkIAHgBQAGgIAAgKQAAgGgOgWQgQgZgOgJQgYgRgDgqQgCgZADgxQAAgjAQgfQAPgdAQAAQAJABAJAJQALAPAEAeQABAMAABCIAAA9QAABpgDAMQgOArhHABQgWAAgUgSgAhfBQQgWgfAlgvIAOgDQgGAXAAAKQANAlALASIgFAKQgEAFgGAAQgRAAgPgWgAg2AcQAAgEAEgPQAEgMAAgFQAAgMAPgIQANgJAOABQAHgBAJAjQAHAZAAAKIgCALIgGgQQgGgPgDgDIgEABQABANABALIACAOQAAAFgJAGQgUAIgHAFQgUgLAAgig");
	this.shape_145.setTransform(-40.4,-55.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373D48").s().p("AhOATQAOgEARgZQAOgXADgNQgCgHARADIAiAKQAYAHARAIQATAJAAAHQAAA8guABIgBAAQgeAAhQghg");
	this.shape_146.setTransform(-3.7,-9.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#758A51").s().p("AFECVQgFgOgYgDIgkAAQhVgBhkgPQAQgVAEgIQAIgQAAgUQAAgKgBgFQACAEAqAFIAsADQAwAFAyADIgIgTQAAAAABAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgBgDQAAgDAIAIIALAPQAdAoARBEIgBAGIgBABQAEADgKAAQgEAAgHgWgAihAlQgmgXgmgcQgrgfgQgWQgMgPgig2QAUABAggLQAggKAQgNQAmBGBVA2IA1AgQAWANAAAIQAAAJgNAXQgQAdgUAAQgQABg0ghg");
	this.shape_147.setTransform(-4.1,-15.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#526139").s().p("AglBJQgJgDgFgFQAUgFANgNQAdgcAAg7QAAgLgCgKQgCgMgDgBQAiADAKASQAEAHAAANQAAAhgSAeQgYAngnAGg");
	this.shape_148.setTransform(-24.8,-6.3);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#B3E4E6").s().p("AAKCMQgPgFgJgKQAEgBADgFQAGgLgEgUQAFgCANADIAUACQAJAAAGgHQAIgIgCgPIgDgGIgGAJQgHAJgGAAQgKAAgIgCQgEggAOgSQALgQAUAAQAYAAAKAVQAJATgFAbQgFAcgQATQgRAVAhg8Qg6A8gSAAIgCAAgAhABpQgLgJgDgLQgHgeAPARIAAAAQAsAlADAAIgSADIgEABQgJAAgKgIgAg0AuQgKgLAAgUIAAgPIA/ANIAAAQQAEAVgSAUQgegPgJgJgAABAJIAAABQgWgLgRgLIgQgOQgJgIgDgHIgPgVQgCgEgDgNQgTg0AZgGQAegIAPAcQAZAuAGAHIAZAZQAXAUAJAHQgEABgUALQgTAKgCADIgHgEg");
	this.shape_149.setTransform(-34.9,-15.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373D48").s().p("AgoAPIgMghQAWgBAegOQAJgFAkgHQgBABAEAQQAGARAAAOQAAANgeAMQgWAIgtAKQAGgPgDgQg");
	this.shape_150.setTransform(3.5,-1.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#758A51").s().p("AjWBvQANgMALgVQAMgXACgUQAMAFApANQAxAPAYADQANADAKAPQAJANAAAHQAAAZgIAEQgFAEghAAQhCAAhUgfgABlAzQgIgZgFgGQAQgKAig2QAkg9gFgTIgDgRQAdA8AHASQAOAlgBAnQgEABgEgIIgDgGIgJgTQgKAQgmAoIgmAqQAAgGgIgWg");
	this.shape_151.setTransform(-0.3,-10.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#526139").s().p("Ag4AnQAAg0AbgfQAcgeA6gNQgiAjgJAQQgHAMgHAjIgDAiIABAWQAGgKAFgZIAUAiIgQANQgNAJgOAAQgqAAAAgxg");
	this.shape_152.setTransform(-2.8,-61.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373D48").s().p("AhBAYIAchDQBmASABAPQgBAGgHANQgIAVgLAOg");
	this.shape_153.setTransform(-4.9,-17.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#758A51").s().p("ADbEEIgDgSQgbAEgtAAQgtABgcgDQATgfACgJQAEgIAEgXIB3AFIAAASIABAiIAAAggAjCB7QgZgpAAgzQAAg1AuhIQAshHBehgQgJAeAAASIACAeQADAIgHANIgHALIg2BPQgMAYgNAwQgLAlAAAFQAAAtAzAhQAyAZAAAGQAAAVgdAtQhWgiglg8g");
	this.shape_154.setTransform(-6.2,-37);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B3E4E6").s().p("AgdB6QgMgNgCgVQgGgqgegyQgcguAAgUQAAgYARgSQAXgWAwAAQAwAAAkAnQArAvAABSQAAASgFAMQgEAJgJALQALhUg9hQIASA3QANAlAAAnQAAAqgJALIghAUIAFgOQACgJADgTQACgRAAgIQAAgJgLgkQgLghgHgQIgGAGQAKAUAFAkQACAWAAAPQAAAogFARQgGARgMAAQgRAAgMgOg");
	this.shape_155.setTransform(10.1,-54.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_25}]},1).to({state:[]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},1).to({state:[]},1).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88}]},1).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91}]},1).to({state:[{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).to({state:[{t:this.shape_100},{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_103},{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[]},1).to({state:[{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112}]},1).to({state:[{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116}]},1).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},1).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_139},{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140}]},1).to({state:[{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144}]},1).to({state:[{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148}]},1).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152}]},1).wait(1));

	// Layer 1
	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AjMENQgogTAAgZQAAg2AWgdIAcgWQAMgKABgBQAHgXA8hcQBuiuBOhBQAvgnAoAAQAgAAAZARQAbARAAAZQAAAVg2AxQgwApADgEQgiAigvA1QgoArgFAHIgeA6QgHANgYAkQgUAhAAAJQAAAFAEAFQADAFABAFQAAAjgWAdQgZAhglAAQgfAAgkgQg");

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AhKCKQhMhHAAgyQABgwA3hXQA3hWAlgZQAEADAAAIQAJALARAeQAVAlAEATIANgBIAAgDQAAAQgSAhIguBMICABqQAMAKAJAKIAAAEIgcgEIgVBfIAOAIQh0gThKhIg");
	this.shape_157.setTransform(15.4,-0.7);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgwDWQgeg3gTg3QgSg3gSgUQgSgWAAgCQgFgNAAhPQAAgnAmhCQAshMAtAAQAoAAAeAaQAbAXAAAaQAAAJgfAxQgeAyAAATQAAAFAEALQAFALAAAFQAAALgOAYIgMAZQAAAUANApIAUAyIACAGQAQgUAOhUQANhPgFgbQADgBAFAAQAGABACACQAUAiAwApQAKAHAAAPQAAA/grBUQguBagsAAQgqAAgeg3g");
	this.shape_158.setTransform(4.5,-23.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AjOEPQgOgJAAgVQABgGACgHIACgEQgdANgMAAQgPAAgLgHQgLgIAAgKQAAgSAMgQQALgPANgDIgMADQAAAEgeAAQgOAAgFgGQgIgIAAgWQABgdAfgLQAsgKAcgKQgMgIgGgVQgDgLAAgKQAAggAigBQANAAAOAMQANANADAPQAKgMATgIQAUgIAQAAIALAAIFlkVIADAFIADAFIAbArIAXAsIADAIIlZD+QANAkgeAUIgbAPQgQAJgHAKQgZAigaAtQgTAbgjAAQgGAAgJgHgABqiCIANgLIAAAAg");
	this.shape_159.setTransform(-8.7,0.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AEUGGQgFAFgIAAQhdghhzhOQhxhPg0hHQg0hHgUg1QgNgigBgHQgFAAgNgFQgRgGgDgFQgEgFgFghQgGgjgGgKIgBgZQAAgTgPgFQgOgEAAgbQAAgwAOgOQAIgHAaAAQAGAAAHgLQAGgLAEgCQAFgBAGAAQAHAAAAABQAFg6ATgZQALgRASAAQAkAAADAuQgFA3ABASQgBAhASAOQAQAOAAAXQAAAFgHAbIgHAcQAAAFAFATQAFASAAAFQAAAhgSALQAjBaBrBhQBtBgBZARIACgFIABgCIACABIABAEIAAADIAEABQADABAAAHQAAAGgBABIgDABIAiCDQAAACgEACg");
	this.shape_160.setTransform(-3.2,-46.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("Ai0COQhBhJAAg8QAYgyAIgpQAAgEAihEQALgeAigTQAegSAdAAQAbAAAYASQAZATgBAZQAAAUgxAxQgyAwAAAaQAAAJAHAUQAIAWgBALQABAFgFAHQgFAIAAAFQAAAWAgAOQAYALAUAAQAzAABCg1QA/gyARguIAAgEQAgASAdBYIAFADQABAAAAAHQAAAGg0ArQg1ArgZAOQgeAPgaAIQgqAMgyAAQhOAAhGhQg");
	this.shape_161.setTransform(-1.7,-16.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AieC+IAAgJQgMAQgVAMQgRAKgHAAQgLAAgFgKQgDgHAAgGQAAgaAOgRIAGgLIggAaQgJAGgJAAQgIABgIgNQgIgOAAgOQgBgGAEgJQAJgRAcgVIAlgkQgRgJgLgSQgJgQAAgKQAAgMAQgMQAPgKAKAAQAGAAALAIIAQANQATguAVgJIAgAAQAGAAAEgFIAZgXQAegXAQgKIAigQQAegNARgKQAkgTBKgPQAmgHAfgDQAdAAAPADIAAAGIAEBQIACAaIAAgBIgCgHIgUAAQgpAAhxAeQiBAkAAAcQAAATgZAcQgZAeABAfQABAegQAtQgUA5gbAAQgSAAgNgfg");
	this.shape_162.setTransform(-9.7,-2.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AkZBeQAAiMBqg5QA5gfBDAAQBUAABjAvQBCAfBAAuQADgQAGgGQAEgEABABIADAEIACAJQgDAFgGARIAKALQgKADgFgCIgPBGIAAABQAAAGgCADQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgCgBgBgEIgBgIQg+grhLgkQhWgngsAAQgnAAgIAXQgLAhgbAQIgMADQgJACgDADQgKAMAAAJQAAAggUAEQgMABgdgFQgPAAgGATQgGAUgVAAQgdAAAAgpg");
	this.shape_163.setTransform(-6.6,-22.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("ADsEMQgcgtgUgWQhOhqjQifQgQAHgIAAQghAAgYghQgHgJgQgNIgRgNQgNgRgLAAQgRAAgZgWQgcgYABgYQAAgsAfgbQAZgWAVAAQAiAAAvAVQAzAWAYAdQADADABAJIAFAUIAMAMQANALAGAIQACACABAJQACAMgBAKQAtAbA7AyQA6AyA6A9IApAtQAnAtAvA/IACAFIgCAIIgFAAQgGAAgCgBQgFAVgXAzIAEAHIgCAHIgGAEQgKgEgVgig");
	this.shape_164.setTransform(-8.8,-37.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("ABRDnIgDgGQhVgQhHhGQhJhFABhIQAAgqA3hXQA3hYAngOIAEACIAAAJQAHAHASAfQATAkAHAXQALgDABABQABgCAAAAQAAgBAAAAQAAABAAABQAAABAAADQAAAIgNAWIgzBbQArAmA/AwQAqAiAAAEQAAAHgBgBQAAgBgBAAQgBgBAAAAQgBAAAAAAQAAAAAAAAIgYgEIgUBgIAOAIIgDACIgPAAQABAHgKAAQgGAAgDgDg");
	this.shape_165.setTransform(15.4,-0.2);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("Ai4FgQgHgVAAgZQgGAAgKgGQgNgJgFgOQgGgSAHgXQgLgPgIgWQgHgUA1ggIgCgBIgDgOQABgPAKgVQAKgWALgFIALgFIAOgEQANgFAGgZQAEgeAEgMQAmh0BEhYQA9hRBihFIAJALQArA0AhAsIANASQh0BHg8BSQgzBIgOAyQgFAegDAtIAPAUIAPAUQgKgMgEAgIgEArIgJAiQgBACgJAEIABADIAAADQAKAFABAiQABAtgRAHQg6gDgPgJQgEAFgIAHQgQAMgRAGQgugBgFgOg");
	this.shape_166.setTransform(7.6,19.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("ADmG2QgDgDgGgNQkLiQhjhWQhlhWABhZQAAgEAJgjQAKgnAEgJQAxhgAhgrQAQgWAGgDQAAgcAHgMQAMgXApgTIABABQAGgLAJgIIAXgYQAmgpAPgNQAJgIALgCQAJgBAKADQAGABAEAEIAFgEQASgPAWgEIAOAKIAHAJIACAEQABAFAAAFIABAIIAAAAIABABQAPANgDAOIAAABIgEAMIAAAAIgCAFIgDAFQgHAJgOAMIgiAcQgBABAAAAQgBAAAAABQAAAAgBABQAAAAAAABIgBABIgBABQgFAFgDAAIgCABIABABQALAIgEAQQgFAXgeASQgLAHgMAEIABACQgMAlguAIQgYADgdArQgSAcg5BmQA6BACEBQQBGAqBkA4QAGgRACAAIADADIABAWIAAAAQACB9ADATIASALIgFAEIgGABQACAMgDACg");
	this.shape_167.setTransform(-2,-53.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AGrFRQgrgSgvgaQglgVgFAAIgOADQgIACgIgCQgWgGgageIgWgeIgGAAQACgDAAgEIABgOIACgGIqflbQhZg/gHgIQgTgSAAgkQAAgUAOgUQARgXAagBQgBAIgPAWIASAFQAMAEAUAKIL/F8IAXgPQAlAMAdAQQAYAMAEAGQAHAJgGAJQABAGAsAAQAfAAApgDQAbADAAAnQAAANgKAJQAQAGAMAIIAVAHQAYAMAAAcIgBAOQADAPAAAUQgCAIgFAIQgJAPgQAAQgOAAgJAMQgIAMgIAAQhPgNgQgGg");
	this.shape_168.setTransform(64.8,5.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AirCyQgygqAAhOQAAhAAWgmQARgfAygrQAFgEAtg5QAegnAcAAQBoAABLBtQBCBgAABjQAAAQgHAVQgJAUgHAFQgcAShGAYQhUAdgxAAQhaAAgwgpg");
	this.shape_169.setTransform(-0.6,-18.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AEPF3QgBABgHAAQgoAAizhOQi+hTgxg0Qg2g5gJgOQgWgggDgmQgCgkAkhTQAjhUBKhmIgCgEQgCgGAAgGQAAgcA7giQA8gkA2AAQA5AAAmAWQAtAaAAAzQAAAcgbAGQgGACgfAAQgCAAgMAPQgMAPgKAAIgGgBIgDgCQgegTgKAAIgKAKQgKALgFAEIgPAGQgPAFgOAGQgMAGg2BnQgyBegJAWQADgBAZAQIA0AgQAoAXAnATQAaANBWAhQBSAgARAFIgBgBIAKABIABADIAPAGIgNgBIAqBkQAiBTAAAOIgGAIQgCgBgFgWg");
	this.shape_170.setTransform(1.3,-42.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAYGKQhWgciphJQhTgkhihiQhchcAAgiQAAgmAQgZQAJgOATgUQAtA4BWATQBIASCLAAQBbAAAcgjQAZgegOg/IAHgDQAKgCANAEIACgUQAAgXgTgoQgthdgVgvIACgCQAEgDAGAAQAiAHAYAOQg5hbgJgUIABgFQADgFAGAAQAvAABOAoQBdAuBwBcQBmBUA3CVQAtB3AABxQAABuhlA6QhQAuhsAAQhSAAhugjg");
	this.shape_171.setTransform(56.9,-21.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("ADYEaQgEAAgFAFQgFAEgEAAQgRAAgVgLQgagSgKAAQgGAAgDgFQgHgJAGgXQlOhXivizQg+hAgihEQgZg0AAghQAAg9APgMQAGgEAIABIAMACQAqAxA0A5QBrB0A/ArQA8ApBcAuQCRBNBFAAQAGAAAMgNQAMgNAFAAQAXAAA8AbQAPAHAFAKIAEAJQAWAAAmgIIApgIQAbAAAKAWQAEAKABAOQgBAHgCAEIgFAGQAtgFAXAoQARAdAAAlQAAAMgSALIgUAJQgPARgGAFQgMAJgfAAQgOAAi5g1g");
	this.shape_172.setTransform(62,9.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AD5GpQgFgFgFgLQkShFiDhoQhhhNAAhMQAAhXBnioQgBgSASghQASggAPgGIABABIAGgLIAQgeIAqhEQAHgKAKgGQAJgEAJAAQAHgBADACIADgFQAPgVAUgKIAQAGIAHAGIADADIAEAJIACAHIABABIAAAAQASAGgBAPIABABIgCANIAAABIAAAEIgDAGQgFALgLAQIgaAlIgDAEIAAACIgBABIgGAIIgCABIAAABQANADAAARQAAAWgZAcQgNANgMAJIAFAEQgKAVgRAJQgVAKgNAJQgyAmg2CaQAwAiARAJQAfATBKAkQA0AZBCAVQA9AUAgAQQAEgRACgBIABAAQALAaADA1QADA5AIAaIASAHIgGAGIgEABQAEAMgDADg");
	this.shape_173.setTransform(1,-53);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AArFdQgpgcg0hMQgPgXgRgfQgJgTgLgFQgYgMgKgNQgCgFgJgkQgHgjgBgIQABgFgNgfQgRgkgQgQQgPgPgOgzQAAgrAngPQAUgIAYgVQAXgUAWgIIgKheQAAgWAIgRQAMgYAYAAQAlAAATAoQAQAmgDBBQgCBeAeAYQAQANAFAKQAKAUAAAvIABARQACAOAGAOQAIANAEARQADAPAAAJQABAbgLALQgFAGgZANQAUAfAVAdQAOggAChLQADhNADgKIACgEQASAEBZBSIAJAMQADAOAAA2QAABIgaA5QggBJg+AAQgkAAgegUg");
	this.shape_174.setTransform(2.8,-17.2);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AFfGgIoenrQgXAFgMgBQgMAAgTgLQgbgPgNgdQgHgPgJgCQgUgFgPgJQgIgEgfgbIgogiQgPgOgDgGQgGgLAAgbQAAgOAFgPQAEgPAGgHQAMgMACABIgDgdIAEgLIAIgSQgagUgzgfQgngdAAgkQAAgUAbgMIAbgIQAyABBPBFQAWAUA7A+QAHAHAlAcQAhAZAOAUIARAZQAPAXAWAdQAJALAJAeQAIAdAAAMIEmD7QEpD+ACgBQAAgDAAAKIgBAJIgKAAQANAOAJAaQAUAzAABRQAAAKgCANQgDAAgGgFIgBAIIgBACQgBABgGAAQgDABiciNg");
	this.shape_175.setTransform(-23.6,-53.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AnGC0QgOgEgGgMQgPgVAEgVQgtgbAPgvIg1AIQgSAAgLgMQgLgMABgTQgBgTANgMQAOgMAcgHQAcgHAogEQApgDARgQQAQgPAMABQALABAUAJIAoAUQALAFAYgDIAdgDQAPgBARAGQARAFAAAEQAAAFAZAKQAWABAqgKQAogIBWgHQgIABAIgDIBUgPQBNgOAZgIIDGgsIC2gxQAMAAABAJIACABIgCgBQgCgBAAAGQAIBaARAYIAFABQABACAAAGQABAHgDABIgFABQklAmj6A8Qh9AehpAeQgsArgegCQgHAAgUgFQgVgFgPAAQgLAAgzAMQgyAMgSABIgPgBg");
	this.shape_176.setTransform(-39.1,-8.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgjEPQghgRg4g4QhEhPAAgQIAAgBQgbgGgagPQgxgeAAgvQAAgfAIgRIAHgTQAAheAXgxQAlhQBhAAQApAAAWAOQAXAPAAAdIAAALQAAAEADACQAUAPADAIQAFANAAASQABALgDAMQgFAZgPANQgcAXAAAhQAAAKAGALQAHAMAAAHQAAAegZAdIADAEQADAEAAADQAAAgAiAeQAiAeArAAQAqAAA3goIArgeIAAgBIADgEIAEAAQAJgFADAAIgEAFQAeAIAXASQAXARAAAPQAIgFAGACQgKAihJAzQhYA8hVAAQgrAAgfgQgAg3jbIABABIAAgDg");
	this.shape_177.setTransform(5.5,-10.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("ABNDsQgVgIgXgXQgVgVgagMQghgNgFgEQgkgbgNgGQgPgGgIgGQgbgUgShDQAAg8AYgqQAegzA7AAQAKAAAWADIA1hdQAAAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAQgDgBAAgGQAAgJAHgDQANAGArAxQArAyAAAKQAAAHgDAFQABAGgSA0QgTA2gIAMIAeAaQASASAAAGQAAAVgFAIQgIAKgYAEQBOAsAAAwQAAAVgIAKQgNAOgjAAQgXAAgOgFg");
	this.shape_178.setTransform(11.3,1.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AgUC6QgVgYgghKQAAgFACgBQAAAAABAAQAAABAAAAQABAAAAgBQAAAAABAAQgtgfgRgUQgPgVAAgZIgbgoIgDgyQAAgzAYgiQAXgfAdAAQA6ANATARQAOAMANAgQAQAhAKAMIAkAqQACAEAIArQAJgTAPgsQAOgrAGgNQAEAHABAHQAWAiAPA6QAOA2gBAvIgDgBQgJBIggAnQggAlgxAAQgqAAgdgkg");
	this.shape_179.setTransform(4.6,-3.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("ADCGXQhmgZh6haQhYhAgog5IgVgeQgIgLgLgEQg9gSghhXQgFgOgegpQgbguAAgwQAAgVARgSIAQgVQAAgEAGgNQAGgQAIgIQgXgegwguQglgoAAguQAAgTASgJQANgHAOAAQASAAAWAMQAXAOAMAUQArBHA0BjQARAiAUAFQAfAKAJAsQALA0AJAJQAQAPAKAUQALAVAAAQQAAAGgFALQgFALAAAGQAAAZArArQAoAqBAApQCdBkBwgJIgDgNQABgEADgBIAKAMQAIAJAAACIAAABQAIAOAQApQAQAoAAAFIgBAHQgIABAAABIAEABQAFABAFADIAAAPQiegFg6gPg");
	this.shape_180.setTransform(-16,-48.7);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AiNE3QhPgPgOgCQg3gGgLgEQgfgMAAghIABgQQgQgUgGgKQgEgJgBgJQABgKAEgQQgugFgfgpQgXgfAAgRQAAgOAIgJQAIgJAMAAQAXAAAlAWQAmAWA5AAQAHgBANgGIAMgHIAGgDQAEgCAFABQAWgBAdAdQAeAfAcAEQAqAJAkASIAcASQAiAABWg/QBlhKAbhMQAFgRAchKQAZhBABgIQAMhJAFgQQACgJAFgCQgBgCABgEIAAAAQAlA6A5BUIgBACIgCAVIgCAVQgIAngHAWQgEAQgPAkQgIATgMAVQgFAIgTAbQgPAVgBAGIACAJQgBACgGAAIgCgBQgBACgLAOQgQAUgmAjQgeAcgMAKQgbAVg5AgQg4AggXAIQgbAJgSAAIgMAYQgJAHgnAAIhNgQgAHEhzIgCgBIADgFIAAABIAAAGIgBgBg");
	this.shape_181.setTransform(-16.2,7.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AAJFZIgTgUQgPgQADgRQgoAIghgBQgqAAgUgZQgRgTAAgcQAAgRAcgEQBOgLANgEQgbgjgWghQgpg+AAg0QAAhGAdg6QAshaCKicIAEgEQAHAEgDAGQA+BYAOAYQAPAZAAATQAAAFgBABQAAgBgBAAQAAAAAAgBQAAAAgBAAQAAAAgBAAQgCgBgHgLQgHAOg7A9Qg3A6geBHQAnBIAXAYQAHAGAvAeQASAKAUAtQAUArAAAWQAAADgfBPQgNAigZAAQgEAAgWAEQgUAFgGAAQgcAAgRgZg");
	this.shape_182.setTransform(10.2,16.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("AiVB2QgzgsAAg1QAAg5AagvQAZgvAfAAQAFAAAcgRQAcgRAPAAQAiAAAxAeQAFADAzAuQADAAAVgPQAagRALgQIAAgLIAHAHIAPgBQAAAFgHAIQAIAZAUCcIgFABQgqAvgrAZQg+AkhHAAQhJAAg2gvg");
	this.shape_183.setTransform(3.7,2.6);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AjRDkQgNgSgGgZQgHABgKgDQgPgFgIgMQgLgQABgYQgPgMgNgTQgNgRAwgxQAUgTAUgKIADgMIAIgcIAEgFIAVgMIAEgLIAEgIQAKgaAQgaQALgSANgQQAMgQAPgOQAPgOASgLQAMgIAPgCQAYgHAaAAQAXAAAZADQBNAOBJA7QAtAlAgApIAJALQALAOAJARQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAIgJgLIADAKQAIAYACAUIAFARIgHAJIgBADIAAABQgDAHACBCIAABHIgNgkIgCAQQgdgahLhpQg0hHhngzIgygWQgQASgMAWIgGAJIgIAMIgJARIAKAOIgFAsQgHATgIAIQgBABAAAAQgBAAAAAAQAAABAAAAQAAAAAAABIgDABIABACIAEAIQAHAQALAJIAAADQAMACAKAgQANAsgQAMQg5AMgRgGQgDAHgGAIQgMAQgOAKQgVAGgOAAQgOAAgEgHg");
	this.shape_184.setTransform(-4.4,-22.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AhAGEQg3hEgYhzIgQhTQgDgKgSgJQgSgKgBgBIgHgQQgCgGgBgHQAAg4ARgbQAIgPAGgDQACAAgNiKQgOiUAAgMIAGg3QAOgyAoAAQAgAAAWAcQAkAugNBtIAAAFQAbgMAEAAQAcAAAdAUIAvAlIATAHQAQAFALAJQAIAIAGARQAHATAAAUQAAAUgFAZQgHAhgLAFQgQAHgKgBQgIAigIAQQAdAOAAAYQAAALgGAWQgGAagJAJQgDAFgXANIgVANIASBeQAKgXAPhBQAKgvAUgqIgBAAIADgFIAJgSIgCATQBeA6ACAcIgEAOIgIAAQgECQg9BJQgyA7hGAAQghAAgsg2gABTArIABgBIAAAAg");
	this.shape_185.setTransform(6.3,-27.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("Ag9HTQg3gxgXh5IgZiJQgEgdgBg0QABgIgOgSIgfgpQgEgFAAgKQAAgRANgkQAPgrARgKQAdgRAJgeQAFgRAFgmQAFgRADgeQACgXAAgLQAAgLgDgaQgFgggFgTIgCgIQgCgKAAgGQAAhYA1gBQAkAAAdAsQAoBAgYB+QAZgHASAAQArAMALAKQACADAMAUQALAVACAFQALAEALALQANAMAAANQAAApgOAmQgLAbgHAHQgVAVgagDQgMgCAAAjQAAAGAQAPIAPAQQAAA4ggAeQgfAcgjgRQAXCMADANQAjgsANgTQAUgdAOggIACgNIAHADIA/BUQAiAuAAAKQAAAGgFABIgGAAIgBgBIgEgDQg2BmgrArQgtArg5ABQgiAAgegbg");
	this.shape_186.setTransform(2.9,-45.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AjnCNQAAhgAfhwQAIgeAjhUQAfhLAAgIQAAgBgKgXIgLgWQAAgTAYgoIAXgkQAAhrBchcQBVhVBXAAQAtAAAPANQAIAHAAATQAAAtgkAcQgbAVhDAWIgIACQAWAEAOAfQAHARADATQAOAGAKARQAIAOAAAGQAAAngWAYQgVAWgcgBQgBADACALIACARQAAApgHAKQgHAMg1AqQgDADgnADIg1B+QgKAigNBFQgOBNAAAfQAABXAhBKQAaA5A3BEQAXAcAmAdQAZAUAxAgQAIAEAZAJQAWALAFAOQALgGAEAEIABAFQgRAJgWApQgXArgYAQQl3i/AAlmgABHlRIgHAIIALgMIAAAAIgEAEg");
	this.shape_187.setTransform(4.1,-79.5);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AClKjIgCgGQgxgKhphNQhghJgXgkQg5hWgVg2QgdhPAAhrQAAgKAGgwQAIg5AJggQAHggAjhPQAdhFAAgQIgPgbQAAgOAZglIAcgqIAGgtQAIg+ALhEQAUh3A5grQAegWAoAAQANAAARAMQAVAOAAATQAAATgQAeIg6BlQBSApAFADQAbAWAAA3QAABOguAAQgSgFgHAAQgLgBABAVQAAAGADALQAEALAAAGQAAAdgYAdQgaAdgfAFQgtAHgkCFQgbBjAAAwQAABFAXBAQAUA6AhAlQA6BCApAbQAeATA6AcQAaANACAPIAMgGQgEAogHAdQgNA5gaANg");
	this.shape_188.setTransform(3.6,-75.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AifHTQgHgVAAgZQgGgBgKgGQgNgJgFgNQgGgTAHgWQgLgPgIgWQgIgVA7gjIAHgEQAAgHAKgXIAKgVQAEgFAGgGQAMgJAVAAIDHqBQAGgHAJACIABgNIAEgFQAOAIBTCoQAAACgGAEIgGgHIiyIZQAEAOAAAGQAAAmgMATQgIAOgNADIABAHIABAJQAEAQAHAMIAAADQALAFACAjQABAtgTAHQg4gDgPgKQgEAGgIAGQgQAMgRAHQgugCgFgNg");
	this.shape_189.setTransform(11,16.7);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AFdE4QhKgjgqgYQg1gaikhHQithMhSgfQgPAMgPAAQgkAAgpggQgVgRgRgRQgJgHgEgBQgEgBgXABQgRABgcgTQgfgVAAgUQAAgfALgUQANgVAAgIQACgUANgRQALgOAKgCQgzhUAAgVQAAgPAIgRQAJgSAKgFQADgFAKAAQAzAABDBpIAuBIQAYAgAPAAQAnAAAZAgQAXAcAAAgQAAACBXAtQBhAyCVBJQBxA3BRAfQBCAZBEAkIgCABIADABQgBAIgeBqIgCAHIh3g7g");
	this.shape_190.setTransform(-22.4,-44.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("AiVEeQhvg1gog/QgGgKgRghQgQgdgKgGQgagQgQglQgNgeAAgUQAAgSANghQAOggAAgFQAAgjAJgaQAPgrApgbQAEgEBSgiIAhgZQAcgWAJgDIAegEQAZgDALgEQAXgJARAAQAnAAAfAnQAfAkgBAjQAAAHgJAYQgKAdgKAKQgQAOgDAVIgCAjQgKAegoAXQgkAVAAADQABAYgVAgQgVAhAAAHQAAANAXAWQAXAVAeAVQAdAWAxANQAzANAOAAQBfAAA9goQARgLBRhOIgEgFIADgKQAVARASAnQAUAqABAnQgEADgOgFQhDBfhxAeQg1ANhoAAQhYAAhvg1g");
	this.shape_191.setTransform(-18.2,-30.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AhJDfIgMgHQgEgCgKADQgKACgNAAQgdAAgQgPQgTgQAAgiQgnACgSgRQgLgLAAgRQAAgZAMgNQAJgLAUgFIABAAIAtABQAnABAdgMQgCgEgGgRQgFgRAAgEQABgGgvgXQgdgPAAgiQAAgnA4gaQAigRCagxIAAAAQArgLAJAAQAKAAAugOIA2gQIAIACIgBAKQAGBGACAmIABAOIgBgDQgkAKg9ALIg0ANQBPAcAoAgQAzAoAAA3QAAAxgdASQgHAFgsALIgtAhQgrAggJACQggAJgTAJQgHADgUAAQg0gKgVgNg");
	this.shape_192.setTransform(-5,2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AAADpQglgKAAg3QAAgKACgKQgBAEgiAEQgeADgMAAQiFAAAAhWQAAg7A7gyIA4guQAigeAVgcQAng1AggXQAbgUAgAAQArAAAdAOIAjAZIAwA5QAKAAACARIANAdIALBIQAAALgLATIgPAbIgKA+QgJA6gIAJQghAigUAPQghAYgdAAQg7AAgTgEgAhRhmIAAAAIAAAAg");
	this.shape_193.setTransform(-3.6,-13);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AB1G4QizgphYhDQhYhEAAhnQAAgKAPhRQAQhQAAgWIgQgXQgPgYAAgDQAAgJAHgQQAGgPAVgmQAJgOAPgGQANgFAMggQAMgiAmg9QASgfASgaQAQgZASgEQAEgCAgAAQA2gxACAAQAMAAAiAmQAhAkAAAKQAAAagHAQQgLAZgtA7QgBAFgGAIQgGAJgEABQAMALAGAPQADAJAAAGQAAAVgWAZIg3A5QAKALAAAHQAAAkgfAXQgeAVgdgDQgJAZgKAxQgLA0AAAWQAAA1A1AiQARALAqAQQAZANAeAJQA5ATBrAJIABAGQARBIAAAfIAAAGg");
	this.shape_194.setTransform(-1.2,-51.7);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AkDFxQgqgWgagpQgZgpgghTQghhVAAgdQAAhgBShYQBLhOBTgQQAogJAoADQAiAEACgCQAogTA7gsQA9grAAgJQAAgKgGgtIAVAvQAPgIAkgKQArgNATAAQAWAAANARQANAQAAAWQAAAHAHAJIAHAIQACACANAQQALANAFAAQALAAAfgPIgmAjQgCANgGAOQgGAMAAAFQAIBFAAAJQAABGgWBFQgbBZg0A0ICVgeIACAEQAbAmAEARQAJAfAGAOIAEALQg2AUhSASQhTARgtAAIhLgCQgugBgMAFQgoATgrAXIgiASQgFAAgSgFQgRgGgFAAQgGAAgRAPQgQAPgZAAQgXAAgfgQg");
	this.shape_195.setTransform(-17,-37.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AirDGQghgYAAg0QAAgHAKg4QAJg4ADgIQAEgOAphbIADg0QAMgyAtAAQAiAAAjATQAiATAvAuQAEgOALgRQAMgTAKgCIACADIAJgJQADgDAHAAQAHAAAHAHQAIAIAAALQAAAFgEAFQgDAGAAAFQgBAGAYAcIAhAoIADAAQgrB+goA2QgwBEhFAAQg2gQgVgUQgNAqgIAMQgLAPgZAAQgXAAgVgPg");
	this.shape_196.setTransform(8.2,-4.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AglEPQg+hZAAhzQAAgEgJAEQgPgBgWgYQgIgJgFgWQAAgTAGggQAJguAPgHQgGghAAgyIgDgOQgEgNgFgHQgJALgdApQgIAKgQAAQgWAAgPgRQgPgSAAgaQAAhLA/glQAqgZApAAQAsAJAQAOQAJAIAMAEQAIADAEAAQAZAAAbANQALAGARAMQAGAEATAEIAVAEQAVAHAQAkQAQAjAAAmQAAAZgJAMQgJAMgMgEQAAARgDAPQgBALgBAAIgBAEQAGACAKALQAKALABAHQABgEAOgYIgCAOQAZAGAJANIASAgQAPAaAEAAIAbgBIABAPQAAAGgCACIgBADIgMABQgFCEg9BQQg2BIhEAAQgsAAgzhMgABaBFQgOADAVBNQAHgSAMgXQAHgTABgZIACgNQgGAPgNACIgHAAIgKABgACFgfIABAAIAAgBg");
	this.shape_197.setTransform(1.2,-14.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("Ag5G/QgjgNgVgSQg7gygbgnQgUgdAAgTQAAgJgIgJIgRgRQgZgcAAg2QAAgVALgNQAMgOAagKQgGg6AGhqQAEhXAHg5QAPhtAZg9QAkhXA7AAQAhAAAVASQAUATAAAkQAAAdgWBOQgmB7gFATIALgLQAJgGALgFQALgEAIAAQAgAAAVAPQAaASAAAlIgCAVQgBARAFALQAYAwAAAZQAAA7gPAgQgGANgaAfQgLAOgCAKQAAAMgCALQgCARgIALQgHAKAAAKQAAARAPAJQAPAJAWAAQA1gBAlghQAlghAHgyIgEgGQACgDAIgDQACgIAFgGIAUAbQAFAKAAAHQAAAHgBABIgBABIgFgCIgCgLQgDgIgHgHIACAJQAHAmAkBTIABgCIAHACIgCAPQAFAKgDAIIgGAAQgbA2g/AlQg+Aig/ABQg6gBgvgPg");
	this.shape_198.setTransform(-3.2,-44.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AjOF0QgIgVAAgZQgGgBgKgGQgMgJgFgNQgGgSAHgXQgLgPgIgWQgIgUA2ghIgCAAIgDgPQABgOAJgVQALgWAKgGIAMgEIANgEQAOgFAFgaQAEgfAEgMQAmhzBFhXQBChYBthJIgHgJQgDgEAAgGQAAgHACgBIALgCQAHACABAEQgBAMgFADIAEACIAOgKIAEAIQgBAEgDADIgDACQAGAHAlArIAoAyQAGgDAJACIABAOIgFADQAMAVAAAEQAAAGgBABIgCABIgKABIgSgYQh+BLg/BXQgyBFgNA1QgIAegCAtIAQATIANAUQgIgMgDAgIgFAsIgKAiQgCACgIAEIABACIgBAEQALAEACAjQABAtgTAHQg5gDgPgKQgFAGgIAGQgQANgQAGQgugBgFgOg");
	this.shape_199.setTransform(9.9,17.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AhxDBQgygOgUghQgphIgCgeQgBgSAHgbQAAgFgEgKQgEgLAAgFQAAg0Bqg/QBeg4AiAAQAVAAAlAWQAkAVAGANQAPAhADBHIgCAXQgBAQgCAAIgFAJQAFgDAagXQAYgYAJgBQAFACAAAHQAHAFAOAXQAMASAGAOQADAAACAEQACAEAAAGQAAAFgBAEQAAABgBABQAAAAgBABQAAAAAAABQgBAAAAAAQggBIhIAqQhFAohRAAQgvAAglgLgAggA7QAMACAKAAIArgDIACgDQAEgEAKgEQgYgHgIgIQgCgBgYAAIgXAcg");
	this.shape_200.setTransform(5.7,-7.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AGMFtIgiABQnPAAioj/QgFgGgugwQgcgcgKgwQgEgRAAgiIgLgFQgNgFgFgLQgXgxAAgOQAAgdAdgQQAPgHATgEIAVgRQASgQADgBQAIgBAHABQAKAAgBACQACgyAKghQARg8AmAAQAoAAAFAyIABC9QAAAtATAiQASAgABAfQgBARgFADQgKAGgGALQAIAdAmAlQArAoA/AgQCeBTDFgBQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgCQAAgEAJAIQANAAgBAKQAAAGgBABIgBgBQAdAoARBDIAAAHIgCABQAEACgKAAQgEAAgHgVg");
	this.shape_201.setTransform(-11.4,-36.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AhqCWQgJAEgRAFQgPAEgHAAQgGAAgKgKQgMgMgLgDIgZgDQgNgCgGgFQgHgGgpgNQgbgJAAgeQAAgSAIgMIAIgMQAAgFgEgHQgFgHAAgFQAAgEAHgQQAHgRAAgFQAAgKgMgGQgPgHgKgcQgKgcAAgcQACgKAFgKQALgTAUAAQAsAAALAaQAIAiANAPQAKANApAgQAiAaAFAQQANABAeANQAgALAEAIQACAKAGAJQALASAWAKQAIAEAkAIQAoAIALAAQAWAAAmgOQAmgOARgPQAMgKAng9QAmg7AHgEIgDgQQAdA8AHARQAOAmgBAnQgEABgEgIIgDgIQhJBagzAgQg/AnhfAAQh0gYgjgLg");
	this.shape_202.setTransform(-12.6,-13.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("Ah3EOQiSg8ABh/QAAgmAehAQAehCAuhAQByifBXAAQATAAAYAKQAiAMAKACQAnAJAPAIQAFAEAOANQAPAQATAkQAcA2AAArQAAAcgOAWQgNAVgQAAQgEAAgMAPQgMAPgNABQgSADgPAGQgLAFgKAAQgqAAgIgjQgQhLgRgdQgFANgHAEQgMAJgiAAQgJAAgPgFQgOgFgGgFQhBBUgWAoQgPAfAAAfQAAAqAsAeQA4AnB8ASIgEgGICAAGIAAAkIABAiIAAAfIgBgCQg1AIgyAAQhwAAhcgng");
	this.shape_203.setTransform(-3.1,-41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_156}]}).to({state:[{t:this.shape_157}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_165}]},1).to({state:[]},1).to({state:[{t:this.shape_166}]},1).to({state:[]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-28.4,49.1,57.1);


(lib.CUP_23_MOUTH_COMPcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A83C47").s().p("AhuA8QgagTgJgQQAhgBBtgRQBmgOAugKQgUAygvAcQgsAbg4AAQgxAAgngcgAi2AAQBFhZCPADQAzABAxAMQApAKANAKQgrAShqATQhqARhVAAIgagBg");
	this.shape.setTransform(31.5,15.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#862D59").s().p("AgXAsIABABIgHgDIAAgCQgHgEgBgLQgBgLgCgIQgDgGgGggQAZgJA6gFQAQBHAAASQgcAEgUAAQgPAAgKgDg");
	this.shape_1.setTransform(28.6,23.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#411415").s().p("AiGAvQgFgLgHgfQCqgVB7hQQgCA0hTBBQhbBLhkABIgFgyg");
	this.shape_2.setTransform(48.3,18.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjsBWQgBgTgEgdQCngMCPgpQB2gjA1glQAMA2hBAbQhZAYgqAQQhXAjhSAMQgwAHg8AAg");
	this.shape_3.setTransform(40.3,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A83C47").s().p("AgUCmQgogQgQgQIgJgMIAWABQBKAAA8gKQBdgOAngiQgNArgxAkQgyAkgnAAIgBAAQgmAAghgOgAjJhLIAFgFQAwgwAngUQA6gfBOAAQAtAABeAiQitA7gaAAQgFAAgGACQgKADgOACQgYAEgogCQgaAAAAAFIAAABQgNgBgegDg");
	this.shape_4.setTransform(33,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#862D59").s().p("AgZBEQAAgdgOg1QgLgpgKgYIBOgJIAXBqQAMA3AHAFIABACQgoAHg0ACQAGgLAAgKg");
	this.shape_5.setTransform(32.2,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#411415").s().p("AiLCWQAIgUAAgKQAAgNgLg6QgLg1gFgQQA9AEB7g9QApgVBbg1QABADAAAKQAAB3hMBGQhJBFiPAfIgBgBIgDABIgBABg");
	this.shape_6.setTransform(52.2,18);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj6BgQgBgZgGgbQC2gUBhgYQB4gfBphAQAcAqgtAaQhNAfg3AdQgVAMhRAPQg+AMiaAYg");
	this.shape_7.setTransform(41.9,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A83C47").s().p("AgNDIQgfgNgFgVQCdACB8hUQg3BOggAWQgkAbg/AAQgiAAgZgLgAAaCLIADAAIABAAIgFABgAijioQA/gqBkABQAkgBAlAHQAsAIASAQQgeARg3ALQhAANghAOIi4AQQAhgmAjgWg");
	this.shape_8.setTransform(35.7,19.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#862D59").s().p("AAABMQAAgOgKgeQgXhFgRg6IAAgBIBIgNIAOA6QAJAwAGBrIAAABQg3AEAAABQAEgaAAgIg");
	this.shape_9.setTransform(38.2,23.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Aj+BkQAAgSgFgeQBZgGBFgPQBGgOBRgbICchEIAqgVIABAAIAAAAIABABIAFAOIABADQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgEAkhGAkQhbAugWAGQg4AQgiAGIjJAggAEBhMIADAFIAAADIgDgIg");
	this.shape_10.setTransform(42.5,2.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#411415").s().p("AhrDDQAAhCgeiGQBZgRBZgyQAvgZArgfQAHAgAAAMQAACFhRBHQgnAih0ArgABxjDIAAAAIAAAAIABgBIABACg");
	this.shape_11.setTransform(56,12.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A83C47").s().p("AgUDGQBPgBBcgsQBSgoAigrQAFAZggAmQgfAlgvAcQg8AjguAAQguAAgegjgAkLh7IAvgsQAtgnAcgHQAzgbBgALQBWAKAXAUQhXAoh8AVQhYAQg3AAIgWgBg");
	this.shape_12.setTransform(38.4,18.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiEAhQAEgTAZgWQAhggAqAAQApAAA2ARQA7ATAIATIhYAKIhrANQgeADgSAAQgdAAAGgIg");
	this.shape_13.setTransform(23.9,8.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#411415").s().p("AgFCRQgdg5gkhBQgIgOg3hEQgug5gDgWQCGgOBUgKIA7gHQAUAAAiA6QAiA6AAAeQAABRgoA5QgnA3g3AAQgpAAgNgZg");
	this.shape_14.setTransform(29,27.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#40152B").s().p("AgLgaQAJAKAGASQAIARAAAIQgMgcgLgZg");
	this.shape_15.setTransform(48,20.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A83C47").s().p("AAKD5QgWgXgFgoIACgBQADANASAJQASAHASAAQAVAAAjgJQAkgKAQgKIALgKIgkA/QgYAggjAAQghAAgXgVgAiYjSQAJgjAjgPQATgJAQAAQAUAAAgALQAlAOAbAXQgJgDgjgGIgmgGQgfAAgkAKQgsANgKAVg");
	this.shape_16.setTransform(27.1,25.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag9gNQAXgKAdAAQBLAAAXApQgpgFg4ADIhQAIQgDgYAegNg");
	this.shape_17.setTransform(22.4,8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#411415").s().p("AgqB0QgUgTADgVIAKAbQgSg2gMgoQgVhJAAgtQAAgXAMAAIBPgCQAmAAAUAJQA0AUAABoQAAA1gWAlQgcAugygBQgXAAgUgSg");
	this.shape_18.setTransform(26,23.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#A83C47").s().p("AAGDJQgagSgNgaIgFgPQAMALASAJQAUALAPAAQArAAAZgRQANgIAKgOIgYAxQgUAhgiAAQgMAAgWgPgAhWjKQASgNAXAAIA3AXQgYgFgqAUQgvAWgOAUQAEguAbgVg");
	this.shape_19.setTransform(23.6,22.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#411415").s().p("AgsBCQAAgHAGgSIAFgSIgPgdQgPgfAAgHQAAgRAMgOQAQgSAeAAQAeAAATAUQAUAVAAAoQAAAogPAcQgUAmgpAAQggAAAAgcg");
	this.shape_20.setTransform(21.4,15.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#A83C47").s().p("AgWCHQgEgHgDghQAHAEATAFIARADQAegGALgHIgYAmQgJANgUACIgCAAQgQAAgGgMgAgniGQAMgMAQAAQANAAASALQANAHAHAJIgKgDQgVgCgaATIglAaQgBglAQgSg");
	this.shape_21.setTransform(19.4,15.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhNBbQgxgNgzAAQgGAAgVAFIhSATQgFgQgEgbIACAIIgCgLIAAgSQABgDgBgKIAkABQCXAACBgeQB3gdCchGQgXAZgTAXQgjAsgJAwQgggEgVAAQhEAAhAAjIglAZQgSALgHAAQgQgHgYgGgACPhGIA/gaQgWAKg1AVg");
	this.shape_22.setTransform(33.6,6.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3E4E6").s().p("AkiCkQhAgcAAgrQAAgGADgFIADgFIAfgMQAcgKAGgBIgIAGQgXASgJAaQgFAOAAALQAAAKAGAEQAHgEAFgLQAFgQAFgJQASgmA3gTQgEA2A5AcQARAJAUACIArAEQAHAIAEACIAEABQAFgLAWgLQALgFApgQQA5gWAig0QAQgZAFgFQANgLATAAIAyAEQgFAvAHAPQADAEAJAAQAGABACgCIACgCQADgKAAgHIgEgpQgCgUAGgTQASg2BshtQALARgEAzIgHBJQgCBRgfA1QgiA4hTAeQhjAiirAAQiOAAhLgigAEyAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABABAAAAIAAgBIgBAAg");
	this.shape_23.setTransform(34.8,12.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A83C47").s().p("Ah6B7QgggUgKgnIAXgCIA9AFQA7AGAMACQgOAlgRAQQgKALgJAAQglAAgagQgAgNCDQANgnAQgOQAegaBjggQgsA1guAeQgpAcgZAAIgCAAgAiygmQA4gzAigSQA5gfBOAAQAyAABSAdIgMAFQhOAih2AUQhRANgvAAIgVgBg");
	this.shape_24.setTransform(30,10.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#862D59").s().p("AgagHQAagDAbgFQgLASgiANQgCgKgGgNg");
	this.shape_25.setTransform(35.3,16.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D580AA").s().p("Ag0AuQgLgfAAgHQAAgmAegYQAdgYArAAQAFAAAKASQALASgCARQgCARgJgCQgJgCgKACQgJACACBNQgzAKgKAAQgFAAgMghg");
	this.shape_26.setTransform(38.3,25.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#411415").s().p("AhkCkIgGgzQAlACgBgkQAAglgNgZQgNgXgsAGQC8hEAXgMQAlgSAbgwIgBgRQAHAjAAAXQAABbg3BFQg5BKhbAYQgfALgGAAIgBAAg");
	this.shape_27.setTransform(54.1,15.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Aj5BdQAAgTgFgbQDpgeBegcQA8gTBwg9QAEAGAFAUIABASIhkAyQgrAWghAKQhDAXjmAjg");
	this.shape_28.setTransform(42.2,5.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#A83C47").s().p("AgODIQgfgNgFgVQA3AKA2gOQArgLAAgGIAzgXQA5gZAVgNQgkBEgsAdQgrAegxAAQgwAAgZgLgAjlhsQAGgFAWgZQAUgVARgMQA4gnBrAAQAuAABWAfQhIAkh9AVQhaAPg0AAIgVgBg");
	this.shape_29.setTransform(35.9,19.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D580AA").s().p("AgoAsQgNgpAAgUQAAgmAVgVQATgUAcAAQACAAAQATQARATACAGQAAACgKAhQgKAgAAANIAIAZQAIAZAGAKQgxAJgIAAQgVAAgQg1g");
	this.shape_30.setTransform(35,26.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Aj+AvQENgpBEgVQA1gSBqg8QAPAggEAOIACAAIAAACIgCAAQgDAGgFACIgUAIQgOAFglAVQgUAJgfAOQgkARgOADIi8AsIiGAKQAAgSgFgdg");
	this.shape_31.setTransform(42.3,5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#411415").s().p("Ah1CZQgKgRAAgGQAGgIAFgOQAKgaAAgdQAAgagQgUQgagegCgEQAugJBdgjQBGgcAogSIAagTQAZgWgDgNIAAgCQAEAiAAAbQAAA9gUAwQgPAhghArQgRAWg4AkQhBArgpAAQgKAAgLgVg");
	this.shape_32.setTransform(53.1,17.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A83C47").s().p("AABDgQghgLgQgZQAiALBngfQB0ghAkgxQgKA7g5ArQg4ArhFAAQgZAAgXgHgAjwh/QAhgmAjgXQBBgqBjAAQAlAAAkAGQAsAIAQAPQhJAmh/AWQhVAOg4AAIgYAAg");
	this.shape_33.setTransform(36.7,20.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AkECLIACggIAIgjQA3ASDHgwQDNgvAZgrIAAAAIAtAlQgsBIhlApQhsAtidAAIiBgIgAkSAzQAAgtgEgmQBLAKC4goQC1gnBWgtQAGAXAAAMQAAAYgTAKQgyAZgNAJQhJAyiFAbQhmAUheAAg");
	this.shape_34.setTransform(37.7,14.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#411415").s().p("AgJAwQgOgOAAgFQAQgnAAgKQAAgSgFgPIAfgQIABACIADAzQABAMgPBJIgBABQgDgFgOgRg");
	this.shape_35.setTransform(65.4,4.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A83C47").s().p("AggC4Qg0gRgMgkQAfgDBtgHQBogJAtgSQgzA7gKAHQgqAihAAAQgaAAgggKgAjAhaQA9g5AmgTQA2gbBNAAQA1AAAiAJQAhAIAZAUQhaAhh+AUQhZAOgwAAIgWgBg");
	this.shape_36.setTransform(30.1,18.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A83C47").s().p("AhZA7QglgQgLgTQAZgGAbgFQBJgNA9AAQAhAABCAIQgSAEgPALQgTASgJAGQgWARgtAIIgoAFQgdAAgogSgAhNg6QAsgSAoAAQAvAAAqAQQAsAQArAhIgbgFQhogVhCAMQhdAQhDAYIgIADQArgzA+gZg");
	this.shape_37.setTransform(36.4,16.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#862D2F").s().p("AgQATQgLglgSgpIA5gHQAJAdAZBjIg0AFQABgLgLglg");
	this.shape_38.setTransform(28.6,23.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#411415").s().p("Ah3AVQgJgVgTgtIB6gPQAIAAAZgFIAdgCIBogGIAAgJIAHACQgDA1hgA0QhSAvhOALQgGg6gCgEg");
	this.shape_39.setTransform(45.7,21.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AjZAOQAAgSBzgQQBagMArAAICQAIIArAHIgQADIilAWQg3AHjFASQgCgJAAgKg");
	this.shape_40.setTransform(33.5,13.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#A83C47").s().p("AgiChQgmgQgRgQIANABQBCADBAgRQBMgUBDguQgFA0hAAnQg6Aig4AAQgOAAgigOgAhlieQAtgQArAAQAlAAA9AZQAxAUAQANQhdgGhTAGQhnAHhDAZQAdgzBCgXg");
	this.shape_41.setTransform(34.6,19.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AjCAgQBWgqAogOQA0gTAyAAQBIAABZArIjQAZQhfAMhVAHg");
	this.shape_42.setTransform(31.5,15.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#862D2F").s().p("AgDBKQADgmgLggQgTgogNghIA3gGQAPAnAHAaQAJAhABAgIAAAUIgpAAg");
	this.shape_43.setTransform(30.3,27.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#411415").s().p("AhsAHQgNgygKgRIAvgHQAhgGAgAAQATAAAqgMQAlgHAWAYQAVASAGAOQAEAJAAAQQAAA2jhAsQAAgagPg2g");
	this.shape_44.setTransform(46.5,26);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A83C47").s().p("Ag2CVQA0ANBEgSQAogKBmgoQhCBjhhAAQg1AAgugsgAhvivQAqgRArAAQAmAAAsAVQAsAWAqApQgmgOgNgDQgvgMg/AAQgsAAg6APQg5AOgdASQAig6A+gbg");
	this.shape_45.setTransform(35.3,22.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#862D2F").s().p("AAHB+QAEgRgLh4IABAKQgNhMgNgfIgBgEIgCgGIAAgFIARgCIAUBVQAPA+AAgVQgBgTADAaQADAcAAAVQAAAQgFAyIgBACIAAABIgQAAg");
	this.shape_46.setTransform(34.4,33.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#40152B").s().p("AgBgEIACAAIAAAEIABAFIgDgJg");
	this.shape_47.setTransform(31.3,21.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#411415").s().p("Ag0CIQAIgyAAgYQgBgNgQgxQgVhFgNgtQBKgJA/gJIAQgDIAGgBIAKAUIAHAUQAPAtAAA5QAAAogsAtQgtAugwAAIgLgBg");
	this.shape_48.setTransform(43.7,32);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ai0AlQAPgQAQgNIAEgCQAHgEAGgEQAZgOAogOQA/gVAxAAQBHAAAvAsQAKAHAIAKIgcAEIhnAOIgiAFIgbADIgCAAIimAQIgBgPg");
	this.shape_49.setTransform(30.5,15.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#A83C47").s().p("AAcDnQgUgRgKgWIACACQAdALAWAAQBOAAAzg0IASgUQgJASgKASQgwBPg3ABQgYgBgYgRgAAcC1IAAAAIAAAAIAAAAgAiDjdQAkgbAyAAQAtAAA+ApQAVAOAPAMQgmgTgwAAQh4AAhZBFQAcg+Amgcg");
	this.shape_50.setTransform(33.9,27.6);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiHAJIABgCQAHgLANgLQAjgfA9AAQBRAABJA+Ih/AQQhCAJhIAGQgCgSgEgUg");
	this.shape_51.setTransform(25.1,9.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#411415").s().p("AgWB+QgSg5gagwQgQgbg8g6QgggfgHglQAHAEANAAQAoAADugfQBBBDAAA9QAABfg1A3QgoApgpAAQg1AAgRgig");
	this.shape_52.setTransform(29.1,28.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#A83C47").s().p("AAUD+QgTgPgIgWQASAOAeAAQBfAAAvhJQgIAYgGANQgnBNhAAAQgYAAgWgSgAhHkOQBDAEBSBSQg4gkhDAAQg9AAgoAbQgZAQgLAYQAch7BTAGg");
	this.shape_53.setTransform(27.7,24.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#411415").s().p("AglBbQgNAAgHgsIgCgcIgDgTIgnhKIgIgRQAbgCA6gHIBxgOQATAqACAsQAAA6gXAoQgaAtgvAAg");
	this.shape_54.setTransform(25.6,31.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhkAeQAAgiAdgWQAZgSAeAAQBNAAAoBCIjFAXQgEgKAAgFg");
	this.shape_55.setTransform(23.3,15.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#A83C47").s().p("AgBDVQgVgRgGgcQAWAQAhAAQA/AAAfg5IAEgHQgIAYgKAUQgfBAgoAAQgUAAgRgPgAhejMQASgXAbAAQAPAAApAeQAeAVARASQghgUgmAAQgpAAghAVQgWAOgLAUQAKg4AUgZg");
	this.shape_56.setTransform(24.7,27.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#411415").s().p("AgqBUQgGgHAAgLQAAgJAGgSIAGgRIgPgcQgQgdAAgJIACgMIAHgPIABgDQAFgFAGgEQASgNAaADQAZACARASQAUAUAAAhQAABAgbAdQgTAVgeAAQgSAAgIgKgAA9hHIgBgBQAFAIACAIIgGgPg");
	this.shape_57.setTransform(22.4,23.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#A83C47").s().p("AgeCXQgRgTgCgeQAMATAlAAQAjgBAZggIAGgIIgLAbQgbA8ggAAQgLABgPgRgAgcimQANgBAWATQAdAVAKAiQgSgRgXAAQgUAAgVAOQgGACgEADQgFAEgGAJQgFAGgDAGQAEhlAhABg");
	this.shape_58.setTransform(21.5,22.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#411415").s().p("AgiAXQgNgQgMgGQAegfAcgEQAdgFAgAfIgyAiQgLAKgPAAQgHAAgLgNg");
	this.shape_59.setTransform(18.3,17.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A83C47").s().p("AgjBbQgKgQgEgVQAMAIARAAQAQAAAXgUIAngdIgLAxQgSA1giAAQgQAAgOgYgAghheQAMgUAOAAQANAAAOATQAPASATArQgogWgPAAQgFAAgPAMQgJACgGADQgGAFgHAKIgIAFQAJgyAPgZg");
	this.shape_60.setTransform(18.6,17.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhEAbIgLgEIgTgFQgIgDgGAAIhSAOIAJgEQAxgMBcgXQBIgSAeAAIA6ACIBPAEQguAKgoANQgVAIgkABQgvABgfAJQgZAJgGAAQgGAAgFgCg");
	this.shape_61.setTransform(30.2,20.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#A83C47").s().p("Ah/BZQARgbBIgTQBEgSAhAIQgNAHgHAPIgMAZQgUAdhBAAQg3gKgSgKgAiaA9QgHgKgCgKIBGgFIgwAoIgNgPgABBA+QAIgKAzgnQglAlgcAUgAhJhbQAtgRAqAAQAnAAA+AaQAwAUAQAMQiwgGghAEQgUADiAAnQAmg5BDgYg");
	this.shape_62.setTransform(31.9,21);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#D580AA").s().p("Ag3AoQgJgPAAgTQAAgbAPgSQATgXAlAGQAmgOANAOQAHAHgBALQAAAYgGADQgPAFgPAWIgHAIQgDADAAAGQAAAGAHAXIglACQgeAAgNgYg");
	this.shape_63.setTransform(34.9,29.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AjPAiQAAgXBegdQBbghA4AAQAqABAuAKQA9AQAZAaIi/AbQhRALiOAMQgBgIAAgKg");
	this.shape_64.setTransform(34.6,18.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#411415").s().p("AhcA+QgDgIAAgEQAAgGAaghQAYgbgLgjICQgUIAEAJQAEALAAAGQAAAdg3AoQg7Awg/AAQgGAAgFgKg");
	this.shape_65.setTransform(48.5,28);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A83C47").s().p("AgfCtQgygTgFggIAAAAIAeAFIAiADQBSAAAsgMQAqgMBCgqQgaBAguAdQgsAchGAAQgYABghgNgAhkijQAsgWAoABQA1gBAwAUQAwATAUAgQgNgFg1gKIg1gJQhGAAg4ASQg1AShCArQAqhHBFghg");
	this.shape_66.setTransform(34.8,24.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("Aj1AcQgCgRgGgQQAxgWA3gLQAfgFBbgKIBIgMQA9gLATAAQAqAAAhAEQAiAEAFAFIAHAwQAEAdAEAEQjCAdhlALIjFATIgHgxgAjbAeQACAAAGgBIgFAAIgEAAQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABg");
	this.shape_67.setTransform(36.5,14.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AkFCGIgEgLQAEglAKgyQAUgBBUgKQCTgSCCgMQBQgIAagIQAXgIgDgOIgLgXIADACIAZAhQgGAMgJANQgiAtgsAPQhyA2ipAQIh2AJIgmADIgCgCgAkLggQgCgLgDgMIBSgdQAsgPAvgKQAYgEATgGQAUgFAkgDIAsgEQAvgEAxAAIAhABIAEAAQAiAEAGAFIAGAwIAAABQAEAeAEAEQiaAXheALIgvAGIioAOQgMAAgDABIgOACIgGgvg");
	this.shape_68.setTransform(38.8,20.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#411415").s().p("AAMAaQgMgNgUgBQgKgWAGgaQAOADAJADQAgANgEAfQgCALgEAMQgDgGgGgFg");
	this.shape_69.setTransform(65,11.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#A83C47").s().p("AhHC8QglgRgUgUQC/gMB1gtIANgFQgNAdgGAJQgeAshEAWQgtAPgfAAQgcAAgrgUgAhkiyQA8gdA2AAQAxAAA/AWQAnANAUANIgUAAQgsAAgxAFQhLAEhLARQhMARgLAHIgMAIIgPAEQAgg0A8gdg");
	this.shape_70.setTransform(36.4,20.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_67}]},1).to({state:[]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68}]},1).wait(1));

	// Layer 8
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhrBkQgJgEgagTQgFgDgMgWQgMgYgDgCIhOgCQghgCgHgFQgXgRgSgIIgCgBIAJgHQAPAFBdAMQAXgZAngbQBQg3BWAAIBnAMIAoASIAlAQQAMAAAngSIA0gYQAUgHANABIAKADQgyAjhMAcQgyATgKAOQgGARgJAPQgVAmg1AYQg0AZg3AAQgmAAgXgKg");
	this.shape_71.setTransform(32.9,15.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag2CyQgigWgJgkQggAAgXgHQgQgEgIgGIABgJIAAgBQACgCAGAAQAKAABEAIQgQhGgGgJQgDgEgvAAQgLAAgGgPQgHgQAFgiQg9gBgygQQgggLgKgIQABgGADgCQADgBAGAAQAKAAAoAHQAmAHALAAQAXgdAogeQBQg7BdAAQANAAAcADQAqAEAfAJQANAEAWAMQASAKAGAAQAGAAAggMIA3gUQAWgIALAAQAHAAAEAFQAEAFADAJQACAKAAAHQAABRgpA3IglAsQgXAegOAgQgZA5g3AgQg0AchDAAQgpAAghgVg");
	this.shape_72.setTransform(33.1,18.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAKDjQgZgOgJgQQgLgTgbgDQgegDgHgJIADgBQAIgBAkAAIAAgdQgCgwgHgTQgIgtgOgSQgOgQggAGQggAFgDgEQgGgJgEgcIgCgdQhqAIg1gQQgkgLgKgWIAHgBIBTAKQA6AIAQAAIAZgaQAbgeAMgJQAigdA+gPQArgKAhAAQAdAABIATIBCATQCUhBALABQANAAAKAVQAOAgAABCQAABEgbAxQgOAYgyA4IgUAqQgSAogWAYQggAig3ASQgoAMghgBQgeABgfgRg");
	this.shape_73.setTransform(32.6,18);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ABOEEQgYgJgLgKIgQgZQgsAAgFgCQAAgCgFgKQA3gUAIgHQAIgIAAgjQAAgigahBQgXg6gGAAIh5AHQgYAAgDgGQgEgHgDg0IhgADQhAAAgqgSQgYgKgLgNIAAgFQABgDAFACQAFACBFAMQBFAMAngGQAYggApggQBThABZABQAbAABLAVQAmAKAhALQANAABIgmQBIgmAJABQATAAAMAsQAMApAAA8QAAAXgFAkQgHAtgLAbQgKAagbAjIACAPQAABHhEA4QhEA5hWAAQgUgBgagIg");
	this.shape_74.setTransform(32,16.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgTELQgUgagJg1QABgFABgDIADgCIAEAGIABgBIgkhTQgehEgfgbQgogggQgeQgRgeAAgnQAAg/AcgxQAfg2AyAAQA8AABiBQQBiBOARA3QAJAKAIAUQAIARAAAIQAKAaAAAIQAAAugWA0IguBpQgeBQhSAAQgdAAgTgag");
	this.shape_75.setTransform(29.3,26);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgsC3QgSgmgLhQQgDgWgdhSQgchQgCAAQgGAAAAgCIACgJQAAg3AYgeQAUgXAbAAQBfAAA+BnQA1BZAABoQAABKgkA3QgiA0gqAAQgwAAgag4g");
	this.shape_76.setTransform(24.7,22.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ag1CJQgJgTAAgaIACgPIADgXQABgJAFgLQAEgJAAgEQglhgAAgRQAAghAagVQAUgQAUAAQAnAAAkBJQAcA4AAAUQAAAnglBEQgmBFgYAAQgaAAgNgag");
	this.shape_77.setTransform(21.2,15.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("Aj8CwQhAgdAAgrQAAgGADgFIADgEQgEABgFgBQAQgUAXgJQgIgfgCg0QghgCgegKQgigMgFgPIAAgFQABgCAGAAQAZAFAhAFQBDALA0AAQAWgeAngdQBQg7BeAAQARAAA3ALQBDANAaANIAogPQA6gZAvgYQAcgPAGAAQAJAAAFACQAIAEAAAMIgIAEQALARgEA0IgHBJQgCBQgfA1QgiA5hTAdQhjAiirAAQiOAAhLghgAkNALIACAIIgCgMgAFYAKQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIAAgDIgBABgAkNgJQABgDgBgJIgBAAg");
	this.shape_78.setTransform(31,11.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAKDjQgZgOgJgQQgLgTgbgDQgegDgHgJIADgBIBXgDQgEgLgGgXQgHgbAAgIQAAgbAMgUQAMgVAAgEQAAgPgHgVQhgACg0AGQgJgCgBgOIgFgwQi3APgag3IAHgBIBTAKQA6AIAQAAIAZgaQAbgeAMgJQAigdA+gPQArgKAhAAQAeAABGATIBDATQCUhBALABQANAAAKAVQAOAgAABCQAABEgbAxQgOAYgyA4IgUAqQgSAogWAYQggAig3ASQgoAMghgBQgeABgfgRg");
	this.shape_79.setTransform(32.6,18);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAWD6QgZgQgTgXQgJgLgdACQgaACgIgSQABgDAagCIA4gDQgIgQgQgvQgQgvAAgJQAKhAASgVIAHgHQgUACgvACIg0ACQgZAAgEgHQgDgFgEg0IhXADQgxAAgfgIQgkgKgFgTIAAgGQgEgCAKAAQBWATBFAAQAegkAigfQAVgSA0gRQA3gSAsAAIAnADQAgAEAQADQAXAFAaAMQAWAKAIAAQASAAAugaIA7ghQAbgKAMABQALAAALAgQANApAAA7QAAA6gUA5QgPAqgSAWQgTAZgEAPIgOAsQgaBCg6AkQg4AihMABQgYAAgdgRg");
	this.shape_80.setTransform(32.8,19.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhVDJQgggUgUgtQg4ABgtgGQgIAAgKgEQgUgGgMgOQAEgKAFgDQAJgFAjANIANhGQgSgLgDgJQgGgPgBg9IgxABQggAAgNgDQgXgFgEgQIgDgHQANgCAKAAIBzAKQAGgkBIgpQBOgrBQAAQAWAAArAHQAjAGARAEQAPAEAWAOQASAMAGAAQAlAAArgVQAYgLAmgVQAdgNAMAMQAOAOAAA7QAAApgKAhQgLAigYAeQgZAdg4AaQgzAXgEAMQgZA7gqAgQg4AphWAAQgqAAgcgTg");
	this.shape_81.setTransform(32.9,18.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AiDBFQgcgUgQgTQhGATgyAgQAKgZA/gdIgBAAQAhg/BAghQA3gdBAAAQAzAABOAoQBBAhAMAZQA2APArAVQgHAGgagEQgPgCgngKQgjgJgigFIgHgBQgLAWgeAXQg4ArhRAAQgqAAgsgeg");
	this.shape_82.setTransform(38.7,16.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAGDCQgUgEgLgHIgiggQgdgbgPADIAEgDQANgIAMgCIAcgDQgFgOgXhFQgOgpgIAAQhUAIgKAAQgPAAgGgEQgKgGgBgSQhSAugMAJIgCAAIAAgHQAAgGAJgMQAJgLAGgGIAxgXQAvgYAWgdQAmgyA+gcQAygXAoAAQAdAAA6ATQA+AVAaAWQAWASBAAZQAsARAAAZQAAAHgGAMQgIAPgNAMQgmAqgJARQgFARgKATQgZAwg0AdQg1Aeg/AAQgNAAgSgEg");
	this.shape_83.setTransform(31.7,19.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgpC0QgfgrgTgKQACgHAIgCIAeAIQgLgWgjh1QhrALgMAAQgYAAgDgTIgkAWQgFgBAAgHQAAgIALgPQAIgNAIgGQALgJAOgJQAJgGAOgTQARgYAGgHQAyg1AlgUQAkgUAwAAQAoAABJAmQBRArAAAmQAAAGgBgBIgJgEQBEAuAYAYQAYAZAAAXQAAAKgdAzQgdAxgJAJQgqAqgnASQgjAQguAAQg8AAglglg");
	this.shape_84.setTransform(34.3,22.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AA3D9QgbgVgJghQABgEABgCQgPgIgFgGIAOABQAEAAABgEQAFgYAAgKQAAhEgYhKIgUg8IgYACQhwAMgRAAQgPAAgEgDQgGgEgDgHIgNARQgXAdgMAAQgGAAgBgCIAAgFQAOghAjgkIAAgEQAHgEAFgHIADAAIAIgHIACgCIAAgKQAAg7A7gvQA2gqAyAAQAgAABBAfQBVAoASA3IgBAGQAMAMALAQQA0BKAABjQAAAFgEAOIgDANQAFAKgGAaQgHAfgRAfQgvBShEAAQgcAAgagUgAAsC6IABAAIgBgBgAA8C5IABAAIAAgCIgBACg");
	this.shape_85.setTransform(30.6,27.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEEQQgUgWgGgcQAAgEACgDQgLgMgHgSQgKghgHgTQgNgkgTgaIhNhXQghgmAAgwQAAgPAEgNIgEAGIgFgRQABhIAhgrQAfgoAtAAQAgAABGApQBUAxASA0IAAAEIAAgBQAZAXAVAeQAeApASAvQAPAkgCAOQgHAxgOAkQAAAJgDAOQgHAggQAgQgtBVhIAAQgdAAgWgZgAiviHIABAAIAAgCIgBACg");
	this.shape_86.setTransform(29,23.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgYDXQgQgcAAgVIAAgBQgLgKgIgPQgIgRgIg1QgEgXgeg1QgLgVgHgPIgGAAIgDgcIgBgHQAAgJABgJQgDgEAAgLQAAg/AYgpQAXgmAfAAQAUAAAzArQA2AsASAmIAHAJQApAzAIBJQAFAtgKAlQACAJgCATQgEAegKAcQgdBPg6AAQgiAAgWgmg");
	this.shape_87.setTransform(25.1,26.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ag0CYQgJgYAAgYQAAgGABgBQgCgGAAgHQAAgPAFgSIAGgRIgPgaQgOgaAAgOQAAgMADgKQgCgUAAgJQAAg2AOgdQAMgYASgBQASgBAkApQAlAogFAiIALARQAFAHACAJQAMAYAAAOQAAAogNAeIgEAiQgDAdgcAiQgZAfgNAAQggAAgPgogAg/gsIAHgPIABgDQgGAIgCAKg");
	this.shape_88.setTransform(22.2,22.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgsBcQgHgWgBgUIgDgEQgPgRgMgGQgJgDgSAAIAAgKQAEgIAVgGIATgFIAFgDQACg2AVgmQASghARgBQAKAAAbArQAZAlAJAgQAfARAKALIgOABQgKABgNAGQAAAZgMAlQgUBDgqgBQgdABgOgvg");
	this.shape_89.setTransform(18.2,17.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAOCAQAAgFgFAAIgdAEIggAEQgXAAgdgKQgWgIgOgHQgOAYgKAAIgGAAIABgBIgBgKQACgFAHgMIAGgKIgHgMQgIgNgDgZQgVgCghAQQgxAYgMADQgDgCAAgGQADgKAvgmQAygnAGgIQAlgzA9ggQA6geAzAAQB2AABIBOQAJAJAZAJIAcAHQAUAIgCATIgDgBQACABAAADIg+gHQgJAAgVACQgYADgKACQgDAAgUAbIgVAdIhmBOQgFAAAAgGg");
	this.shape_90.setTransform(31.2,21.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgwCyQghgaAGgdIgagOQADgHABABIAvADQgFgJgEgQQgEgNAAgIQAKgxAFgLIg/AGQg+AFgKABQgMAAgGgEQgHgFgCgMIg6A4IgGgCQgDgCAAgHQAAgPAVgMQAbgNARgmIAIgbQAEgUAKgOQAhgvA9gfQA3gbAsAAQBXAABBAuQA4AogMAYQBPAzAAAmQguCBgRAOQgvAsgmARQgiAOgxAAQg6AAglgfg");
	this.shape_91.setTransform(32.8,24.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AkEBPQgIgPgIhDIAVgKQAxgWA3gLQAfgFBbgJIBIgNQA9gLATAAQAqAAAhAFQAiADAGAGQABgLAGgJIAOAHQgJAeALAdQAFAPALATQADAOgXAHQgaAIhQAJQiEAOiRARQhfAMgMAAQgVAAgGgMgAjcAWQACABAFgCIgFAAIgDAAQgBAAAAAAQAAAAAAAAQAAAAABABQAAAAABAAg");
	this.shape_92.setTransform(36.7,15.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AhnDAQgMgLgJgbQg+ADhGAAIAGgNIASgDQgDgCgCgGIACAAQACgWAEgZQAGgeAKgRQgQgCgFgJQgHgOgIg6QgrANgdAAQgHAAgNgCQgNgDgFgDIACgCICagtQAKgvBIgtQBRgzBNAAQA9AABBAZQA4AVAYAbQAlACAUAGQA8ATAAA5QAABgh9A6QgDA8hCAtQhBArhNAAQhZAAgmgmgADdiDIAAgBIgBAAIABABg");
	this.shape_93.setTransform(34.1,20.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_81}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},2).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_92}]},1).to({state:[]},1).to({state:[{t:this.shape_93}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.CUP_23_leg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgIA7QgMgVAAgRIAAgCQgihWAggIQAfgJAQARQADAWAGBKIADAMIACAQQAAAWgbAAQgLAAgJgUg");
	this.shape.setTransform(1.5,14.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1D1F26").s().p("AgiAKIAAgTIBFAAIAAATg");
	this.shape_1.setTransform(0.8,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#758A51").s().p("AgdBlIgPhmQgEgYgNg+QARgNAiAAQAeAAAYAHQALAEAHAEQgQAqAGBjIAAAsIgUABg");
	this.shape_2.setTransform(-0.2,-9.8);

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJC4QgSgqgDgbQgEgbgOhMQgHgXgBgKQgFgbADAAQgPhigCghQgBghACAAQADgBADgEIADAGQASgOAhAAQAfAAAXAIQAMAEAHAEIAAgCIACAAIACAFQAFAgADCSIgFBZIAKB6QAAAYgMAJQgLAJgXAAQgTAAgUgpg");
	this.shape_3.setTransform(0.1,2.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-20,15.4,45.2);


(lib.CUP_23_foot = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("AgzAOIiNgDIAAgGIADgKIABABIABAAIABAAIABgBIAFgKQAPAKBZAEQA2ABA0AAQBwAAAegCIAJgBQAKAGABAKIggABIgjACQhmAAhKgCg");
	this.shape.setTransform(0,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373D48").s().p("AgEAvQh9gCgfgHQADgRAAgGQAAgKAMgIIABgBIAAgBIgBgCIAAAAQAkgnA9AAQAvAAAzAUIABABIABABIAGADIAAAAQAlAVAgAAQAHAAAFgCQAIgEAAgGQgBgEgBgBIgBgBIgCgBQgIgBgngPIA2AKQAHAxAGAVQgxAChGAAIgvAAg");
	this.shape_1.setTransform(-0.3,-1.8);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjGBRQgGAAgFgHQgEgGAAgEQAAgVAIgQQAIgSAOgBQAEgPACgGIAAAAQAMggAxgUQBMgfA9AUQAKgCAiAOIgBgEIATAMIBWAQIADAFIABAPIAFApQAGAAAFACQALAFAGALQAFAKAAALIACAFIAAAAQACAGgGAFIAAgBQgPAKhFAAQjzgChQgCg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-8.4,42.9,17.1);


(lib.CUP_FRONT_leg_COMP2 = function() {
	this.initialize();

	// foot
	this.instance = new lib.CUP_FRONT_foot("synched",0);
	this.instance.setTransform(10.2,17.2,1,1,0,0.8,-179.1,13.2,-0.4);

	// leg
	this.instance_1 = new lib.CUP_23_leg("synched",0);
	this.instance_1.setTransform(17.4,-21.7,1,1,0,-0.7,179.2,0,-16);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.6,-25.9,36.6,53.8);


(lib.CUP_FRONT_leg_COMP = function() {
	this.initialize();

	// foot
	this.instance = new lib.CUP_FRONT_foot("synched",0);
	this.instance.setTransform(17.6,15.6,1,1,-0.7,0,0,13.2,-0.4);

	// leg
	this.instance_1 = new lib.CUP_23_leg("synched",0);
	this.instance_1.setTransform(9.4,-22,1,1,0,0,0,0,-16);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.3,-26.1,36.6,52.4);


(lib.CUP_34DOWN_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.CUP_23_MOUTH_COMPcopy("single",22);
	this.instance.setTransform(-0.3,-1.5,0.792,0.531,0,13,10.9,30.9,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.2,-7,48.4,19.2);


(lib.CUP_34_leg_COMP = function() {
	this.initialize();

	// foot
	this.instance = new lib.CUP_34_foot("synched",0);
	this.instance.setTransform(13.2,17.4,1,1,0,0,0,13.2,-0.3);

	// leg
	this.instance_1 = new lib.CUP_34_leg("synched",0);
	this.instance_1.setTransform(9.4,-22,1,1,0,0,0,0,-16);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-26.1,43,52.4);


(lib.CUP_34_arm_01copygg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{idle:50,lr:70,dbl:110});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#526139").s().p("ABDAyIgBgCIAFAAIgMgQIgBgHIgEAAIAAAAQgzg4hUgBIgBAGIAOAFIgcAIQAKgmAfgWQBSAAA8A8IAFACQAHAVgDAYIgDgDQABALgJAJIgFAFIADAEIgIAOQgBgHgHgRg");
	this.shape.setTransform(-1.6,34.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AigDmIgwgOQAdhlAvhbQA5hrBehNIBHgyIgIgKIgGgKIAAgDIAAAAQgDgEAAgDQAAgEAGgDQAGgEAIAEIABACIAAAEIgBAJIgEADIgBAAIAEACIAKAIQAbAWAjAvIAWAeIALAQQAMATAAAEQABALgOAAIgTgXIgNgRQgRAIgPALQhUA9hDBMQhNBYgJB0QgbgLgcgJg");
	this.shape_1.setTransform(15.7,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhFFEQgDhWhPgYIgfgMIgNAGIgOAFIgNADIgHAAIgGgCIgDgCQgHgNAGgOQAGgUAMgRQAKgPAQgDQAKgDALgBQAPhkAwhXQA7hsBdhOQAoghAqgdIAIAKIhHAyQheBNg5BtQgvBagdBkIAwAOQAcAJAbALQAJh0BLhWQBFhOBUg9QAPgLARgIIANARQhHApg+A6Qg9A6glBLQgfA7ADBAIgCAEIAMAKIAIAKIAHAKIAEAJIgLgGQAEAWgFAXQgFAYgIAZQgDAJgJAHIgPAGgAhJDyIABAIIAMAQIgFAAIABACQAHARABAHIAIgOIgDgEIAFgGQAJgIgBgLIADACQADgYgHgXIgFgBQg8g9hUAAQgfAXgKAmIAcgIIgOgGIABgFQBVABA0A6IAAgBgADjjQIAGgDIAJACIABAOIgFADIgLgQgACFk8IAOgJIAEAIIgCAFIgGAEIgKgIg");
	this.shape_2.setTransform(11.6,12.4);

	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(0.2,-33.8,1,1,0,0,0,20.9,51.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("ABXmBIjKKLQgdgMgLAXQgLAWgHATQgIAUAqARQArARAoALQAnALAJgbQAIgbAAgQQAAgPgEgHIhvgkACwj2Ii0Ik");
	this.shape_3.setTransform(13.4,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},40).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},9).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},8).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#526139").s().p("AgNBAQgLgDgLgHIgFgDIgFgDQgIgDgKgJQgMgKgCgDIAAgJQABgRAEgPIABgCQAKgWAFgGQAIgKANgIIABAAQAEAIANAMIAIAIIAGAEIABABQANANAPAGQAPAGAQAAIACAAIgBADIADgBIAGgCIAFgCQAEAAACACIgBAEIgHAXQgEAMgQAeIAAAAIgDAAQgWAGgJAAQgKAAgTgDgAgpguIAAAAIAAAAIAAgBg");
	this.shape_4.setTransform(-14.9,20);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjLELIgMgIIgHgFQgCgDgHgDIgDgFIAAAAIgCgCIgCgCIAAAAQgGgIAAgGQAAgMAGgWQAEgkAbgYIABgDQAIgNANABIACAAQAGgBACACIAJgQIACgBIAAACQA6iDBfhzQApg1AmggIADgDQAyg/A/ANQAaAFARASQASAQAAATQAAAig0AZIgEACQgUATgsAtQhRBTgIAMQgsBBgzBkIgCAIQAHAFABALQgBAMgOAiQgJAYgLALIgCAEQgGALgWAEIgEAAIgMAAQgjAAgigSgAi5CEQgNAIgIAKQgFAGgLAWIAAACQgFAPAAATIAAAJQACADALAKQALAJAHADIAGADIAEADQAMAHALADQAVADAKAAQAIAAAXgGIADAAIAAAAQAQgeAEgMIAHgZIAAgEQgBgCgFAAIgEACIgHACIgCABIABgDIgCAAQgQAAgQgGQgPgGgOgNIgBgBIgGgEIgJgIQgMgMgFgIIAAAAIAAAAgAihCHIAAACIABABQADAFAOAKQAOAKANAEIAAABQAQAHAJAAIAKgCIABAAQAFgPAIgOIADgEIAAgEQAeg8AFgMIAdgsIAiguQAhgtBOhJIAWgVIABgBQAQgMAKgEQAmgaAAgTQAAgPgRgMQgVgQgiAAQgiAAgaAUIAAACQAAAFhDBPQhOBdgeArQgTAagmBTQgMAbgNAWIgBgBQgDAAAAAGgAi/CYIAAgBIAAABIAAAAg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#758A51").s().p("AiXDYIAAgBQgNgEgOgJQgOgLgDgEIgBgBIAAgCQAAgHAEABQANgWAMgaQAmhWATgaQAegpBQhdQBBhOAAgGIAAgBQAagVAiAAQAiAAAVAQQARAMAAAPQAAATgmAaQgKAEgQANIgBAAIgWAVQhOBJggArIghAwIgfAtQgFAMgeA7IAAAEIgDAEQgIAOgFAPIgBAAIgKACQgJAAgQgHg");
	this.shape_6.setTransform(3.5,-4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B3E4E6").s().p("AgWBjQgHgKgHghIgIggQgBgCAAAAQgBgBAAAAQgBgBAAABQAAAAAAAAIgFABQgDAAgCACQgIAFAGAhIAAAAIgHgFQgKgHgBgCQgKgOADgcQADgZgIgHIgEABQgFAEgEAQIgJgMQgIgMArgqIADgDQAHgGAIgGQBKgxA3BTQAEAJAFAQQAGAXACADQAEAEAGACIACABQABAGAEAIQANAdgIAFQgFAEgdACIgNABIgHgIIgBAAIARgIQAUgPgeAEQgfAFgQALQgOAKAGAJQACACAYgJIAAABQACACAFADIAAABQgbAegEACQgJAEgIAAQgKAAgEgGg");
	this.shape_7.setTransform(-4,43.7,1,1,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiB0QgNgSgGgZQgHABgKgDQgPgFgIgMQgLgQABgYQgPgMgNgRQgNgSAwgwQBghZBQBsIAFAIIAEAIQAHAQALAJIAAADQAMACAKAeQANAsgQAMQg5AMgRgGQgDAHgGAIQgMAQgOAKQgUAFgNAAQgOAAgEgGgAgqAUIAIAhQAHAgAHAKQAHALAYgIQAEgDAbgeIAAgBQgFgCgCgDIAAAAQgYAJgCgDQgGgIAOgLQAQgLAfgFQAegDgUAPIgRAHIABABIAHAHIANgBQAdgCAFgDQAIgGgNgdQgEgIgBgGIgCgBQgGgBgEgFQgCgDgGgXQgFgQgEgJQg3hThKAyQgIAFgHAGIgDAEQgrApAIAMIAJANQAEgRAFgEIAEgBQAIAIgDAYQgDAcAKAOQABADAKAHIAHAEIAAAAQgGghAIgFQACgCADAAIAFAAIABgBIACADg");
	this.shape_8.setTransform(-4.3,44,1,1,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AgzCkIgOgXIgNgcIgDgLIgCgMIgBgYQABgbAJgWQATgzAYgvQAZgwAjgpQAHALAJAKQAQATAYAMIAAAEIgPARIgGAHIgGAJIgHAJQgpA3gXA9QgIAUgDAXIADAGIALgPIAOASIAFAEIg6ADIADBEIgFgHg");
	this.shape_9.setTransform(-16.3,-58.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#526139").s().p("AANA6IgegNIgEgDQgSgIgKgOIgLgQQgIgMAGgPIAEgFIAFgGIAFgHQAKgJAMgIIACAIIABAIIABAFIABADIAGAIQANARAOANQAPAPARAIQAJAEAIgFIAAgBIAFgDIAAABIgHAJIgIAHIgdAUIgJgBg");
	this.shape_10.setTransform(-6.1,-76.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhVDoQgPgRgMgSQgIgLgEgMQgKgagFgbQgDgOABgOQABgSAFgQQAHgZALgXQANgbAPgcIAgg2QAHgNAJgMQAJgKAJgJIAKgJIgEgFQAAgOAJgPQALgWAVgPQAGgFAHgDIAHgDIACACIACADIABAEIgDAGQABATALAQQAHAKAJAJQATARAWAQQAGAAACABIAGAFIgFACIAAABQgIAFgJgEQgRgIgPgPQgQgPgNgRIgGgIIgBgDIgBgFIgBgIIgCgIQgMAIgKAKIgFAGIgFAGIgDAFQgFAPAGAOIALAQQAKAOASAIIAFADIAfANIAJABIAdgTIAIgHIAHgKIAEgIQABgBAFgCIADANQgKAagYAKIgCABIgYAIIgIgDIgOAEIgOAUQgjAwgaAzIgdA4IAjAgIgUABIgEgEIgQgRIgMAPIgCgHQACgWAJgVQAZg/Amg1IAHgJIAGgIIAGgHIAPgRIAAgEQgXgNgRgTQgHgKgHgLQgkApgZAxQgZAvgTAyQgIAXgBAaIAAAZIACAMIAEALIANAcIAOAXIAFAHIABAfIgBgCg");
	this.shape_11.setTransform(-12.4,-61.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B3E4E6").s().p("AA4BmQgygHgpgXQgegQgcgSQgcgUgagTQAKgtAegiQAKgMALgKIAAAAQAlAHAlAEQAUAAATgFQAZgFAVANQALABAAARQgEAPgSAAIgBAAIgDADIhogbQBKAcBNAaQAKAEAKAGQAMAIAIAMQAEAIgFAJQgJAJgNAAQgngCgkgQIhKgkIgCAQQA5AbA/ASQAQAEAQAAQAKAAAJgCQAIAJgEALQgEANgNADIgdABQgZAAgYgKQgcgNgYgPIglgWIgHAKQAiAaAlARQAPAHAQAEIAfAKIAKADQgOAJgQAAIgMgBg");
	this.shape_12.setTransform(108.3,29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#526139").s().p("AgXBXQgPgIgMgKQgZgTgHgcIgBgIQANgcARgcQATgdAdgPIALgFQAYAHAYANQANAGALAIQgQAEgPAJQgWAPgSAYQgOAWgFAdQgEAVgBAWIAFACIACgHIAEAFIgIADIgJgFgABHgxIAIgGIAFAIg");
	this.shape_13.setTransform(94,22.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#758A51").s().p("Ak5hrQgygXgmgqIgMgNQgEgXAKgTQAMgFAIgKQAUAXAbAMIAhARILSFoQggAggSApg");
	this.shape_14.setTransform(48.5,-2.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AGsFBIgvgTQgugRgngcIAAAAQgHAHgKgDIgOgCQgRgEgNgMQgWgRgNgWIgFgKIAAABIAAABIgCgDQgCgDAAgEIABgMIACgHIqflcIglgVQgZgPgWgSQgKgHgHgLQgRgbAEgiIAAgEQAMgBAJgEQgKATAEAXIAMANQAmArAyAXIKmFeQASgpAgggIrSlpIghgQQgbgMgUgXIABgCIAMAEIAFgBIMcGLIADAAIAVgOIACgBIAeAMQAiAMAeAWQADADACAGIABAJIAAACIAoAEQAUAAASgDQALgEAMABQAWAFAKAQQAGALgBANQgBAOgIAJIASAHQAeALATAaQAFAHAAAJQAAAJgDAKQAEAOABAOQABAGgEAGQgDAHgGAFQgMAMgQgDIgJALQgIAJgOAEQgxgBgtgSgAFbB3QgLALgKAMQgeAigKAtQAaAVAcATQAcATAeAPQArAYAyAHQAWAEAUgMIgKgEIgfgJQgQgFgPgGQgngRgigbIAHgKIAlAXQAaAPAcANQAYAKAZAAIAdgBQANgEAEgMQAEgLgIgJQgJACgKAAQgQAAgQgFQg/gSg7gdIACgPIBMAmQAkAQAnACQANAAAJgJQAFgJgEgIQgIgOgMgIQgKgGgKgFQhNgZhMgcIBqAaIACgCIACAAQASgBAEgPQAAgRgLgBQgVgMgZAFQgTAEgWABQglgEglgHIABgBgAEdBFQgdAPgTAdQgRAbgMAeIABAJQAGAcAZATQAMAKAPAIIAJAFIAIgDIgEgGIgCAIIgFgCQACgWADgVQAFgdARgYQARgZAWgOQAPgKAQgDQgLgIgNgGQgYgNgYgIIgNAGgAFrBpIANACIgEgHg");
	this.shape_15.setTransform(64.8,6.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#758A51").s().p("AhRCXQgXgDgQgQQgUgVgRgZQgjg1AUg8QAXhKA3g1IAAAPQABARADAQIAHAkQAMAqApAQIgOAQIgYAhQgRAWAFAbIAQgYQASgZAUgXIgEAhQgBALABALQACAMAEANQAGASARAIQAOAJARgCQASgDALgOQAFgGAGgFIACADQAJAHALAAIAbgBQAXgCAOgTQAJANAPAFIhHAVIgtANQgnAMgmAEIgKAAQgdAAgdgEg");
	this.shape_16.setTransform(-3.2,-13.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#526139").s().p("Ag1BfQgYgfgEgnQgCgdAGgfQAGggAUgXIAQgLQAPgKARAAQAtgBApATQgggJggAAQgcAAgOAdQgFALgDAMIgFAiQgFAhAGAjIAGAfIACALQACAPgGAEQgNgGgJgMg");
	this.shape_17.setTransform(-2.7,-27.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B3E4E6").s().p("AhgCmQgEgBgEgDQgOgKgBgRQgDgZAEgaQAGghABgeIgBgNIgCgaIgIgzQgEgrAUgkQAEgHAFgFQAHgGAJgBQAjAAAfANQAlAQAaAeQAaAeAQAjQAVArAIAwQAEAVABAWQAAAJgBAIQgCAPgIAOQgDAEgFADQgSALgRgLQgIgFgEgLQAIgegGgfQgFgXgHgWQgGgSgHgPIgMgYIAFAPQAPA6ADA+IgBAAIgGAYIACAFQgKATgXADQgKADgOgDQgIgDgGgFQARgxgGg3QgDgagJgXIgIgTQABAtADAwQADAjgLAgQgFAQgKAJQgMAMgOAAQgGAAgGgCg");
	this.shape_18.setTransform(7.3,-19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ag+DbQgfgBgggHQgIgBgFgEQgNgJgMgKQgJgJgIgKQgHgJgGgKQgSghgHgkQgDgKABgLQACglAMghQAMgkAVgcQASgXAXgTIARgOQANgpAhgdQAHgGAIgEQAPgJATADQATABARAEQAQAEARAHIALAFQAcASAYAWIAWAWQAYAYAPAeQAMAYAJAaQAMAfAJAiQAKAigFAjQgDAUgMAQQgGAKgMAFQgdAMgdAJIhEAXQggAKgfAHQgWADgWAAIgQAAgAjHAUQgTA+AjA1QARAZAUAVQAQAQAWADQAjAFAhgBQAogEAmgMIAsgNIBHgVQgPgFgIgNQgPATgWACIgbABQgMAAgIgHIgDgDQgGAFgFAGQgKAOgTADQgPACgQgJQgRgIgGgSQgEgNgBgMQgBgLABgLIADghQgTAXgSAZIgQAYQgGgbARgWIAZghIAOgSQgqgQgLgoIgIgkQgDgQAAgRIAAgPQg4A1gXBIgAgRiqQgFAFgEAHQgUAkAEArIAIAzIACAcIABALQgBAegGAhQgEAaADAZQABARAOAKQAEADAEABQAUAGAQgQQAKgJAFgQQALgggDgjQgDgwgBgtIAIATQAJAXADAaQAGA3gRAxQAGAFAIADQAOADAMgDQAXgDAKgTIgCgFIAGgYIABAAQgDg+gPg6IgFgPIAMAYQAHARAGAQQAHAWAFAXQAGAfgIAeQAEALAIAFQARALASgLQAFgDADgEQAIgOACgPQABgIAAgJQgBgWgEgVQgIgugVgtQgQgjgageQgagegngQQgfgNghAAQgJABgHAGgAgYjKQgRAAgPAKIgQALQgUAXgGAgQgGAfACAfQAEAnAYAdQAJAMANAGQAGgEgCgPIgCgJIgGgfQgGgjAFgjIAFgiQADgMAFgLQAOgdAeAAQAeAAAgAJQgngSgqAAIgFAAg");
	this.shape_19.setTransform(-0.6,-18.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#526139").s().p("AgKAzQglgMgRgjIgEgJQAEgWAQgSIAJgKQgQAaAKAdIABADQAHALAKAHQAIAFAIADQAVAGAYgCQASgDARgJIgIAJQgMANgPAGIgJAEIgTADQgHgBgJgEg");
	this.shape_20.setTransform(-4.5,-71.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("Ag8CXQgdgagGglQgGgfADgiQABgPAFgLQANgcAPgcQAPgcAQgbIAhg2IAhg1QAXAlAsAJQgQAQgPASQgSAWgMAZQgJARgLAQIgIAOIgEAGIgLAdQgMAagIAdQgCAFACAGQACAHAFAIIADgKIABAAIARATIAPANIADCDQgrgfgngog");
	this.shape_21.setTransform(-14.9,-46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah3EUQgpgcgfglIAAAAQgUgagIggQgJgjAHgkQACgPAFgNQALgaAMgZIAagwIAcgxIAdgxIAYgqIgEgQIAEgIIAJgUQAMgWAZgGIAJgGQARgPAWgJQAkgMAnAAQAoAAAkAOQAnAOASAjIAGATQACAIgBAKQAAAOgGAMQgGABgFADIgKADIgOAHQgJAAgIgEQgIgDgCAFQgEAJgGAHQgMARgTgJIgXgLIgRgIIgDADIgKALQgOAMgRAIIgbAJIgnA6QguA+gbBKIgLAeIAFgBIAlAZIgKABIAAAOIgPgNIgTgTIABgFIgCAFIgDAKQgFgIgCgHQgCgGACgFQAIgdAMgcIANgdIAEgGIAIgMQALgQAJgRQAMgZASgWQAPgSAQgQQgsgJgXglIgjA1IghA2QgQAbgPAcQgPAagNAcQgFANgBAPQgDAiAGAfQAGAlAdAaQAnAoAtAfIAAATIgkgYgAgyjsQgQASgFAWIAFALQARAjAlALQAJAEAHACIATgEIAJgDQAOgHANgMIAIgJQgRAJgTADQgXACgVgGQgIgDgIgFQgLgHgGgLIgBgDQgKgfAPgaIgIAKgAARjWQAUAEAQAPIAfAaQAOALAQAJQAIAEAKACIANgLQADgSgIgSQgNgdgVgOQgVgOgXgJQgWgIgdAJIAJgEQAcgIAbALQAnANAWAkQAFAHADAHQADAJAFAGQAEAEAFAAIAEAGIAaABQALgMgGgRQgGgXgSgQQgXgXgegJIAUAEQAjAKAUAfQANAVgBAYIAEgIQAEgLABgJQACgLgFgJQgJgRgQgNQgYgUgegHQgsgLgrAEQgsAIgbAhQgNAPgDATQgEAPAIANQAGAJAMAFQAXALAbgGQANgDANgHQgVgOgWgMIgQgKIAFgDQAHAAAHACg");
	this.shape_22.setTransform(-4.2,-52.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#B3E4E6").s().p("AAcBDQgQgIgMgMIgfgaQgQgOgUgFQgHgCgHAAIgHADIASAKQAWAMAVAOQgNAHgNADQgbAGgZgKQgMgGgGgJQgIgNAEgPQADgRANgPQAdghAsgHQApgFAsALQAeAHAYAVQAQANAJARQAFAGgCALQgBAKgEAKIgEAIQABgYgNgTQgUgegjgLIgUgEQAeAKAXAWQASARAGAUQAGARgLAMIgagBIgEgGQgFAAgEgEQgFgGgDgIQgDgIgFgGQgWgjglgNQgbgKgcAHIgJAEQAdgJAWAJQAWAIAUAOQAVAOANAcQAIARgDASIgNALQgKgCgIgEg");
	this.shape_23.setTransform(4.3,-74.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#B3E4E6").s().p("AhEE0QgbgkgbgpQhWiCgEhgQAGgFADgHQAGgPABgOQABgOgBgNIgCgOIAOgCQAFgFADgFQAEgFAAgGQABgNgDgMQgFgZgIgXQgMgigQghIgfhAIAwAaIAIgCIACgJQABgFgBgFQgEgPgIgMQgYgogbgmQAfAJAeAKQAcAJAcAMQAaAMAaAPQAZANAYAQQAXAQAUASQAVASATAUIAmAnIAsA0QAPASAOAUQAMARAKATIATAlIAQAjQAMAdAFAfIAGAoIAIA/QAFAkgEAlIAAABQgLBohjAjIgkALIglAKQgJAFgMAAIgBAAIgQACQg1g0gsgtg");
	this.shape_24.setTransform(80.3,-22.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("AEpDeIgtgJQgWgGgWgHIgsgOIgqgOIgrgRIgpgRIhCggQgbgNgZgOIgzgeIgxgiQgfgSgXgbQgOgPgNgQQgYghgKgcQgJgcABgSQABgTAHgNIANgXIATARQAKAIALAFQAaAOAcALQAbALAdAHQAcAGAdAGIBYAIIBagBIAZgHIACAFIABAGQAABQA2BsQAzBqBEA5IgHgCg");
	this.shape_25.setTransform(38.7,-3.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#526139").s().p("AAbDCQgsgoghg1Ig2hlQgRgdgKhGIgIgxIgCgMIgDgNIAAgBQAMgDAMgGIALgDIAKgHIAFgFIgBAOQAAA4BHB4QBABuAzAsIACgBIABgEIAFAFIAuAtQgZAEgaACQhAg6gqhPQg/htgLgdIAAACQAAAqBBBkIArBJQAXAhAnAaIgkABIgVgFg");
	this.shape_26.setTransform(67.6,-0.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ACZGoQg9gIg7gRQgpgMgqgPIgcgKIgdgMIgpgSQhVgkhQgxQgZgQgXgRQgZgSgUgWQg7g+gnhOQADgOABgOQAEgtAkgZQALAOAPALQAYARAdAOQAaAKAeAKQAlAKAmACQBCAHBCgBIAfgBIAfgFQAYgEATgOQAPgLAHgSQAFgLADgLQAFgbgKgaIAKgIIAUAGIACgKQABgKgCgKQgNg6gdg3IgqhPIADgDQAIgFAJADQAZAEAZARIg1hVQgIgMgFgPIABgFIAJgEQASABAQAFQBQASBHAsQAnAYAmAcQAjAZAhAgIAZAcIAZAeQAoAyAmAzQAYAhAMApIAGAVQAcBmABBpIADAEIgEATQgBAigQAeQgwBYhkAYQgcAIgcAFIgCACIgBgBQggAEggAAQgeAAgegEgAAGAQIgIAGIgLAEQgMAGgMADIAAABIADANIABAMIAIAxQALBGAOAdIA2BmQAhA2AvAoIAVAEIAkgBQgngagYggIgshKQhChlAAgqIABgCQAKAcBABwQAsBOBAA7QAZgCAagEIgvguIgEgEIgBADIgDACQgygshDhwQhGh4AAg4IABgOIgFAFgAB7GTQhEg5g0hqQgzhuAAhQIgCgGIgCgFIgZAHIhZACIhagJQgdgFgcgHQgdgHgcgLQgbgJgagNQgLgGgKgIIgUgRIgMAXQgIANgBARQgBASAKAcQAJAdAZAgQAMARAOAPQAYAaAeAVIAxAhIAzAeQAaAPAbANIBDAfIAqARIAqARIAqAPIArANQAVAHAXAGIAsAKIAIABIAAAAgAASj1QAPAhAMAiQAJAXAFAYQACAMAAANQgBAGgDAFQgEAGgFAEIgOACIACAOQABAOAAANQgBAPgHAPQgDAHgFAFQADBfBXCDQAbAoAaAlQAsAtA4A0IAPgDIACAAQALAAAJgFIAlgJIAkgMQBkgiALhoIAAgBQADglgEglIgIg/IgGgnQgFgfgMgbIgQgmIgTglQgKgTgNgRQgNgTgPgTIgtgzIglgoQgUgUgVgSQgWgRgXgQQgYgQgYgOQgagOgbgNQgbgLgdgJQgegLgcgJQAYAmAYAoQAIANAEAOQACAFgBAGIgDAIIgIADIgtgaIAdBAg");
	this.shape_27.setTransform(56.9,-21.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B3E4E6").s().p("ABABiQgzAAgrgRQgggLgdgOQgegPgcgSQAGgrAagmQAJgNAKgMQAmACAlgCQAWgDAQgHQAZgJAWAKQAMgCABASQgDAQgSACIgBAAIgCADIhrgLQBNARBPAPQALACALAFQAMAGAJANQAFAHgEAHQgIALgNACQgnADgmgLIhNgYIgBANQA8AVBBAIQAQACAQgCQAKgBAJgEQAJAIgDAMQgDANgMAFIgdAFQgaAEgYgHQgegJgagLIgmgQIgHAKQAlAWAmAKQAQAFARACIAgAFIAKACQgSAOgVAAIgCAAg");
	this.shape_28.setTransform(97.5,32.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#758A51").s().p("ACpDbQlKh2h7jaIgLgTQgCgEgEgBIgCAAQgdg5ATg7IAIADIAEAAIANASQDBD9ESBqIBHAXQAjALAkAKQgKATgGAVIgGAWIgGAdg");
	this.shape_29.setTransform(44.4,4.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#526139").s().p("AgPBZIgLgEIgigRIgRgRQAGgOABgQQAAgJADgOQAEgQASgoQATgpgHASQAHgGAIgCQAFgCAGAAIAEAAIABAAQAXADAaAKQANAEAMAGQgQAGgOALQgVASgPAaQgMAYgCAeQgBAVAAAVIAFACIABgHIADAEIgFAFIgKgEgABCg8IAIgGIAEAHg");
	this.shape_30.setTransform(82.4,28.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AFkFGIgxgMQgvgLgqgWIgBAAQgFAIgJAAQgDABgEAAQgKAAgLgDIgPgIIgdgUIgGACQgFgBgCgEQgHgPADgRIh5gmQlYh5h+jhQgEgBgCgDIgHgKIAAgBQgshKAdhNQACgEADgCQAEgBADABIAKADIACgCQADgCAEAAQAEABADADIAUAcQC7D3EKBnQBJAcBNATIAHgLIAcgPIAGAFIAZAGQAkAHAfARQAEACACAGIACAJIABABIAogBQAUgDARgGQALgFANgBQAWABALAPQAIAKAAANQAAAOgHAKIASAEQAfAHAWAXQAGAGAAAJQABAJgCAKQAGANACANQABAHgCAGQgDAHgFAHQgLANgRgBIgIAMQgHALgNAGQgRACgRAAQggAAgegIgADsCkQgaAmgGAtQAcASAeAPQAeAOAfALQAuARAyAAQAXABATgPIgLgCIgggFQgQgCgQgFQgpgKgkgWIAGgKIAnAQQAcALAdAJQAZAHAZgEIAdgFQAMgFADgNQADgMgIgIQgKAEgJABQgRACgQgCQhBgIg9gVIAAgPIBQAaQAlALAogDQANgCAIgLQADgJgEgHQgJgNgNgGQgLgFgKgCQhQgPhOgRIBsALIADgDIABAAQASgCADgQQgCgSgLACQgWgKgZAJQgTAHgVADQgmACglgCQgLAMgJANgACeB8QgTAogDARQgEAQAAAIQAAAQgHAOIARARIAjARIAKAEIAKAEIAIgFIgFgEIgBAIIgFgCQgBgWACgVQACgeAOgaQAPgaAVgSQAOgLAQgGQgNgGgNgEQgZgJgZgEIgCABIgDgBQgGAAgFACQgIADgHAFIABgFIgNAcgAnejDIACABQADABACAEIALATQB7DaFNB2IB5AmIAHgcIAGgWQAFgVALgUQgkgJgkgLIhGgXQkShpjBj+IgOgSIgEgBIgIgCQgTA6AeA5gAEOB7IANAAIgFgHg");
	this.shape_31.setTransform(61.9,9.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#758A51").s().p("AhIBiQAOg1ATgvQAVgzAdgtQAIAJAKAJQASAQAZAIIABAEIgOATIgFAHIgFAJIgGAKQgeAxgQA3IhFACIAAgBg");
	this.shape_32.setTransform(-15.7,-59.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#526139").s().p("AASA1IgegHIgGgCQgSgGgMgMIgMgNQgJgNAEgNIAEgGIAEgGIAFgIQAJgKALgJIACAHIACAHIABAFIACADIAHAHQAPAOAOAKQAQANASAFQAKADAHgHIAAgBIAEgDIABABIgGAKIgIAIIgbAXIgGAAIgCAAg");
	this.shape_33.setTransform(-7.3,-71.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ah0BwIAWg7QAMgdAOgaQAGgNAIgNIAQgWIAJgKIgEgEQgCgOAHgQQALgWARgTIAMgJIAHgEIADACIABACIACAEIgCAGQADATAMAMQAIAJAKAHQAUAOAXANQAGgCADABIAFAEIgEADIAAABQgHAHgKgDQgSgFgQgNQgQgMgPgOIgHgHIgCgDIgBgFIgCgHIgCgHQgLAJgHAKIgFAIIgEAGIgEAGQgEAOAJAOIAMANQAKAMASAGIAGACIAgAHIAIAAIAbgXIAIgIIAGgKIADgJIAGgEIAEAMQgIAbgXANIgBABIgYALIgHgBIgNAGIgNAUQgeA0gUA2IgIAUIgUABQASg3AbgzIAGgKIAGgKIAFgHIANgRIAAgDQgZgJgQgQQgKgIgIgKQggAtgUAxQgUAxgNA1IAAACIgRAAQAEgTAGgSg");
	this.shape_34.setTransform(-12,-64.2);

	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(18.8,-2.8,1,1,0,0,0,6.8,20.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#0000FF").s().p("AARIJQhbgbghh6QgMgqgCgpQgZgbgBhbIgCAAIAAgJIACgnIABgPIgNgFIAAgOQgBgPACgOIAJAFIgHgJIgOgTQgMgTgDgNIgBgFQAAgWAMgVQAHgMALgMIANAOQgSAcAAAYQgBAIAJALIAFAHIALALIAEgOIAQAMIAMAKQASAOATALIgBAHQgMgIgMgKIgBAGIABAAQABAAAAAAQAAAAAAAAQABABAAAAQAAABAAABIAEACIAyAbIAGAEQABAIgMACQAKADALABIABgHIgCgQIAAgBIABgNIAGAAQAOABALACIABABIAAABIAAABIADATIABAEIADABIABgBIABgEIAAgBIAGgOIACgCIAKAFIAAAAIABAAQAKAEAJAHIgFAHIgDADQgJADgLAGIgBAWQgDAcgDAQQABAeAWBbIACAIQAMgOAMgPIAVgtQAOgcAPgOIABABIAEgEQAGADgCAIQgOA0gbAzQgMAXgOARIgIBJQgJgFgKgUIAIAdQAAANgPgEIgEgBIAFgxIgEgKIgIgBIgHgDIgDgDIABgGQAAgCAJgFIgFgRIgEgOQgagKABh5IAAgJIgBAAIACgpIgIgBIAAAAIgFgCIACgDIgGgBIgNgDIgBAAIgDgBQgHgFgKgCQgHgFgHgHIgDgEIgDgEIgEgBIAFAZIAAABIgJgCIgFgCIAAABIgBAMIAAAWIACAAQADAkAIA2QAMBNgCAHIgCAGIAAAAIAGAMQAHAlAOAcIAIANIABgFQAYAXAYAHQAWAGAYAEIgCAPIALgDQATgTAUgeQANgMAOgSIAaghIgDAJIgHAVIAIgPQALgYACgIIAAgCQAMgSAGgOQAFAGAAAMQgBAHgDAMQgEARgIARQgKAQAAADQgIAfgrAlQgKAJgLAHQABAAABAAQABABAAAAQABAAAAAAQAAABAAAAIgBADQgEACgLACQgUAWgTAHQgMAFgLACgAgrBTIAGgDIADgBIgCACIgBADIgGgBgAhvAUQgcgiAAgoQAAgdAIgZIAEgIIgEgFIAFgQQgGAEgOAEQgQAFgMABQAkgWAMgiQAIgXAAgmQAAgYgZhWQgahUAAALQAAg1AbgTQArghBjBaQAMANAJA2IACgBIATAQIAAAAQgIABgJAFQAFAkAAAeIgBAMIALgGIgKAQIABABIAcgGQAcgBAUAZIAGALIAJASIAFABQAKAPAJAIIgMABIgEAAIAAABIAJADIABAFQAHAGAHAKQAMARgCAJQALAfgHAXQgHAVgQATQgMAOgOAHIgaAeIgEAJQgVApgfAMQgHAHgCAAQheAAgtg4gAgQAyQANAFAPAAQAXAAATgVIADgGIgUAGQgQAGgEAAIgbgBIANAFIABAEIgBAAIgTACgAgeAtIAGgHIgTgCQAGAFAHAEgAg/AMQAfAIAtAAQAUAAAVgMIgjgRQAPgMATgVQAigoAIgRIAAABIAEgCQACADgBAIIAAAHIgIAXQAGABAFADQAFAEABAFIAAADQAHgGAGgLQAKgRAFgVIABgGIAEgHIABgJQABgIgLgVQACgGABABIADABIgDgDQgQgJgeAFIgQADIgBgDQgCgCABgDQgIAFgIADQgNAGgFgCQgDgBgDgEQgCgEAAgDQAGgPAZgIQAXgHAbADIAAAAQgQgFgSgMQgUgNgjgEQgFAXgGAAQgCAAgBAAQgBAAgBAAQAAAAAAAAQAAgBABAAIgBgRIgGAKIgGARQgOAhgNAAQgEAAgEgFQgCgDAAgEIATg6QARg/ABghQAAgEgCgFQgIAAgFABQgJAFgGAJQgEAHgBAGIABAIIgQAXIgDAJIgQAXIgFAKIACAKQAAAYgGAeQgIAogPAIIgBABIAAACQgDALgCAMIgCgDIAAAGIgCgCQgFAVgBAVQgCAMAEALIACADQAPANAPAMIAAgKIABgXQACgKAHgJQAAApAQAagAA+ACIADgCIgBAAIgCACgAhwgOQAGAIAKAGIgBgBIgFgFQgKgKgIgKQADAGAFAGgABTgiIAIAAQADgIgBgGQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgBAAIgHASgAh6mRQgBACAAAJQAAAQAXBIIAOAuIAJgXIARgUIAogwIAEgCQgHgJgLgNQgjgngrAAQgIAAgCAJgAh0mxQAvACAXATQASAVALAHIABgCQgGgFgUgsQgOgQgRAAQgTAAgYASgAiJnNQgGASAAASQAAABAAABQAAABAAAAQAAABAAAAQAAAAABAAIAAgCQACgPAJgNQAMgRAVgGIgFgCQgHgEgGAAQgNAAgIATgAA2oVQAGACAFAEIgEAAIgDAAQgWAAgZAOQAXgaAUAGg");
	this.shape_35.setTransform(1.6,-48.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0000FF").s().p("AjiE3IAFgFQhBkeCQj+Qg2hEAxhEQASgYAZgTIAFAAIABAKIAAAAQAfjLC1hfQBDgjA6A4QAVBmiEAqIgZAIIAdAcIAGAeQA/A7hBBHQgXAZgigBQAGAigOAfQgUACgVgEQAegUAIglQgdAgglADQgUACgRgEQgighgSgqQAOAqAdAlQg1gTgGhHIghATIgFAoIAUAcIgJADIApAYIgHgOIAIgNIAPAPQAcAcAoAAIAEgJIABAIQAFgBAGgDIAIgEQAVAGATAAIgEAGIgRAXIgbAGQiBCJAMDRIgHgDIgBgFIgBAYIgLgiQALCOBJB6IgIAHIAKANIALgFQBbBvCFA4IgFAHIAHALIgDAMIgQAGQidhDhliLIAQAQIgFgKIACgHQiUkpCbkzQgrgFglgZQiaFOCmE8QATAkAYAiIgVAEIEeC2IgBAJQglAFgfgUIAjApIgBAGQkDiAhwkUgAjBFhIgOgpIgJgBgAg/h+IgJAYIAfhAgAgqi/IALgJIgGAAgAggk2IAggDQgjABgIgkQgFgWAMgSQAKgNAPgFIADAJIgGALIACAGIgMAcIAEAHQAUAKAUgGIATgIQgMgJgCgPQgBgHABgIIAJgFIAUAYQAHgXgGgWIgEgPIgsgLIgVAMIAHgfQApgRAkAdQAJAGAIAIIAMgmQgLgegagSQgOgKgSgBQA4gvBNgUQAcgHANgcQAGgPAAgSIgCgEQg/gdg7AnIAFgBQjXCMBHDJQACAEAHAEIACgFgABhl+IgHAEQACAIAEAIQAAAAAAAAQAAABAAAAQABAAAAAAQAAAAABAAIABABIgTAQQBJgRgXhDIgJAYIAAgMQgIAUgQAOgAhol7IAEAAIABgEIAAgBg");
	this.shape_36.setTransform(5,-80);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0000FF").s().p("AhqG7IgBgFIAAAFIghgFQAGgyAOgzIAiABQgNAngGAsIAKAAIAEAYgAjOGtIAAgDIgWgGQAYi+B6ikQgshIA6g+QAOgPATgNQAAgjAGghIgHABQgDAAgDgDQgCgDAAgEQAAgMA6iAIAZhHQAcg8AtAAQApAAARAiQAWADAXANQAxBbhzBOIgMAHIgGAJIAgARIANAbQBOAogqBVQgPAfghAJIAHAOIgQAHIAAgOQgEAJgGAIIgqASIAJABQgRAIgRABIgkAPQgqgIgXgzIgEAGIgUgtIAEgFIAHgCIAFAGIgCgTIgcALIgKAnIAQAcIgKACIAmAdIgFgPIAKgLIAMARQAXAfAnAFIAFgIIAAAIQAHAAAHgDQAhgKASgcIARADQgGAcgUAWIgUATIgbADQhaBJgpBsIghgFQAfhfA/hcQgrgKgggdQhdCSgWCYIAHABIgGAuIgCgpIgEAtIAPABIACAOgAgRC3IgNAXIAmg7gAAKB6IAMgHIgGgCgAA6AjIAfgMQgjALgTggQgLgSAIgUQAGgPAMgJIAGAHIgDANIADAEIgDAeIAGAGQAXADATgKIAPgNQgOgGgGgPIgEgNIAHgHIAaAQQAAgXgMgUIgIgNIgtACIgUATIAAghQAkgdAqASQAKAEALAGIAAgpQgMgSgSgJQgIAHgHAAQgKAAAAgNIABgEQgOgDgPADQAhgwAygkQANghAAgiQgLgSgJgLQghAKgZAeIAEgCIgLANIgQAmQgpBpgFAAQgHAAAAgQIAAgGQgqB6BPBuIABABIAKABIAAgCgAgfgFIAEgBIAAgGgACrgxIgNAVQBAgkgog6IgCAZIgEgLQgCAVgMASIgEAGQADAIAGAGIACAAIABAAIABAAgAC2lnIADAsIAAAEQAIgMACgQQABgQgFgRIgEgDIgHgBIACARgABxmcIAGACQAFAAAGAEIAIgCQgGgHgIAAQgFAAgGADgAhaGlIAEAAIAAAKg");
	this.shape_37.setTransform(0,-102,1,1,-3.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#0000FF").s().p("ACEDsIgWgBQjThqhrjgIAGgGQgHgXgFgYQgIglgFglIADgjIAZADQAIA5ATA3QAZBJArBFQAUAhAZAgIgUAGIElCXIAAAJQggAIgdgMIAWAZIgBAGIgqgWgACUDhIADABIgFgDgAitg5IgQgnIgIgBgAg5gTIARAPIgGgKIABgHQgfg3gUg4QgTg3gJg5IAQACQAMA7AXA2QAWAxAfAtIgHAIIAKAMIALgGQBgBjCHAqIgEAIIAHAKIgCAMIgRAIQifgzhrh+gAiNjBIgGgYIABAXIgOgCQAAgaADgaIAgAEQgCAWgBAXIgHgDIgBgFIgCAPg");
	this.shape_38.setTransform(2.1,-34.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#0000FF").s().p("AE5E3QALgQAJgRIAKAHQAjAUAhAXIAAAGIgjgMIgBABIArApQg0gcg1gZgAGUENQgXgGgigOQAJgWAHgWIAlAOQBmAoAAARIgBAIIgBAEIgCACQgBACgGAAQgaAAg9gXgAB6DXIAAgBIgdgMIgugTQgtgSgsgRIgKgDIgTgHIAYgdIARAFIAFACIAXAHIAVADIALAGQAdAFBBAaIAFgOIADgNQg1gagugZIgbgMIgCAAIgFgDIAAAAIgBgBIgHgDIgDgBIACgEIAUgcIABABIAGACQAyATAyAZIAbAOQAHgNAPAMIARAVIBJAhQABgMAOAAQAMABADAGIAIgMQAGAFAFALQAFAKAAAFIgBAKIAXALIAIADQgHAWgJAWIgbgMQgFAPgFALIAXAPQgJARgKAQQhUgohVgkgACoC2QAvAUAlAVIAHgNIAIgNIgBgBQgtgSgtgVIgIAZgAhnB1Ih+grQgRAHgYAAQgUAAgRgWQgNgRAAgKIAAgCQgTgCgUgKQgNgDgMgHQgIAGgMAAQgwAAgcgmQgVgeAAgaQAAgWAYgQIAFgCQgFgSAAgTQAAgZAjACQgJgOgJgSIgHgIQAHgIAAgKIgXhJQAAgcAXgSIAEgEIAEACQAlgLAUAVQAMAMANAWIASAhQAQAeApA0QAiArABAEQAdAbALAZIAFAAQANABAOAHQApASAAAkIAAAAIALAFQAbALAhAPIACAAIAEACIAbAKIAmANIgWAcIgCAEIgRgHQhTgmgcgUIgDADQgOAXgNAFIgFgEQgDgEAAgGQAAgBANgVIAGgLIgEgCIgBAAQgQAAgCgLIgUgMQgDARgNARQgEAGgGAFIgHALQgVAdgiACIAMANQASARAIAAQAgAAAYgWQAYgUAEABQgCAMgFAKQAGADgBAHIAAAGQA/ARA8ATIgYAdIgPgFgAlugUQAAAEgCAFIARAIQAZAJAKAAQARAAAMgJIgCgDIARgSQAKgUgFgWQAEgEADgCIgCgGQAAgGACgDQgJgKgTgMIgEgDIgQAHIgTAIIgBAAQgDAGgDADIgEgFQAIAMgBANQAAAGgFAJQgBALgCAEIgBADQADADAEAAQAXAAAMgQQAQgZAEgDIAHgBQADABAAAGQAAAMgSAWQgWAagZAAQgRAAgLgQIgFAAIAAAGgAnYhYQgHAMAAAFQAAAQAVAWQAYAYAdAAIgHgKQgHgLgEgMQgVgOgOgYIgIgRIgGAJgAmRgaQAEAGAEAFQACgFgCgHIAAgDIgNgEIAFAIgAl0gxQgGgUgBgSQAAgJAGgGIgPgIIgBABIAAgHQgBgWAeAWIACACIAIgCQAIgDAHAAQADgFAHgDQgPgGgMgBIABgGQghACgUAWQgNAPAAAQIABAUQAKAHAMAFIAHgHQAIAAAGALIABAAIAAAAgAjXhJIAAAIIgCAFIgBABIAAABIANAEIgKgHIAQAEQACgIANABIADAAQgHgFgLgEIgQgHIAAAHgAljhRQAAAHACAJQACgDAAgCQAAgJgDgGIgBAEgAnIibQABAUAFATIAGAOIAGAMIAIALIAAgDQAEgTAKgRQAJgPAMgIIgKgDIgCACQgFgEgMgGIgTgKQgGABgEAAQgCAAgBAGgAkXiDIgGgHIgDABIgJgKQgLgIgIgBIgBgCQgBgCAAgGQAAgFABgDQgXgfglg2Qgng2gbgXQgIACgGAGQgFAHAAAFQAAAqAZArQAIAMAMARIAvAtIAAAGIANgBQAkAAAdATIANACIAAAAIAAAAgAmPk1QgVgegHAAIgCAAQANANARARg");
	this.shape_39.setTransform(-23.6,-46.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AC9FOQgPALgEAAQgQAAAAgPQAAgCAJgMQgXADgYAAIgzgFQgVAfgUAAQgPAAAAgPQABgJAPgLIgtgGQgWABhVgoQhVgogegYQgYgTgegmQgbgigIgVQgjgSgQgmQgNgdAAg+QAAgiAQgeQAGgNAIgGIAAgBQADgIAAgFQAAgjAdgqQAog4BMgIQAIgPAjgTQAwgZArAAIAJgGQAZgOAxAAQApAAAYA9QASAqgBAbQAAAKgOAaQgIAOgIAIQABAJAAAKQAAAegiAtQgkAxg4ALIgDASIgEATQABAggkAfIgBABQArA+ACACQAWASBAAYIAoANIgDgKQgBgYAVAiIADAGQAfAIAWAAQAeAAAcgHIgDgCIgOgRQgEACgEAAQgJABgEgKQgCgEAAgEQAAgMAOABQAFAAAEABQACgFAGAAQAJACAQAVIALASQAtgQAngiQAlggAYghQAFAAACABIADAEIABABQABABAAAFQgKAngkAlQgoAog5ARQAKAcAAAaIAAACQAqgPAigaQARgNAagaQASgTAGAAQAQAAgBAPQgWAiguAhQguAfg0ARQgGAKgIALQgXAfgiAVIAfgqgABcD/QAAALgMAXIAkABQAmAAAggFQAPgXgBgVQAAgJgBgJQghAHgnAAIgZgEIgOgCQAEAQAAAPgAAgEdIAAgCQAAgMAOACQAJABADAEIACgEQADgKABgaIgBAAQgQAAABgQIAAgBQhAgJhAg0Qg2grgLgeQgpAUg7AAQgUAAgRgCQBABLAKAJQBiA0AtASQArASA2AIIAAAAgAlug3QABA3AIATQAZA5BaABQA9gBAigUQADgQAJAGQAZgWACgkQgzAghMABQhMAAgkhDQgKgTgFgSQgEANAAAPgAk8jGQgPAagFAaIALAGIgNAPIgBAGQAAAfAXAiQAdAvAyAAQBIAAAogbIgDgCQgDgDAAgHQAAgDAZgIIAJgEIAQgdQgNAEgPAAQgZAAgMgOIgPANQgwAng5ABQgiAAgLgnQgDgNAAgeQAAgQAQgTQAQgUAWAAIAMACIACABQABABAAAGQAAAFgWAKQgVAKAAASQAAAXACAJQAGAaATAAQBBAAAlg4IADgEIAAgFQAIgVAHgEQAIgSgBgQQABgYgIgRQgMgfgeAAIgSABIgDAAIgBAAQhMAHgjA/gAgtiEIAEAEQACAAAAAIQAAAJgMAIIACAFQAAAJgDAKQBLgmABg8IgBgFIgDgFQgBgDAAgFIABgBIgCgCQgHgQgNAAQgmAAgjASIgjAQIgFASIgHAWQABAHgFAIQAEAJAOAAQAPAAAUgIIAVgJQAFAAACABgAinkpIgCACQAoAIAOAmQAEAMACAXIALgGQAdgQAigDIACAAIADgFQADgFAAgEQAAgUgKgWQgPgfgdAAQgzAAgjAdgAgolXQATAMALAaQALAeAAAgIgBAFQAaAEANARQAOgSAAgPQABgSgQghQgTgtgYAAQgVAAgOADg");
	this.shape_40.setTransform(-20.5,-29);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("ABsGOIgNAAIgLAAQhggChjg+Qhgg8gBg0IgVAAQgjAAgSgoQgMgaAAgUIAAgFIgKgLQgQgWgCgTQgvgFgQgkQgIgTAAgkQAAhvA+gLIAEgKQAXg9A+AAIAHAAIAJgTQATgoAcgjQBPhpBhAAQASAAAEAWIAAAXQAAAcgkAxQgkAvguAkQgIAFgYAsIgFATIAAANIAAAEIAEgBIAAASQAEAFADALIgHABIACBfIABAIQARADASAcQAZApAAAeQAAAVgWAZIAAACIAAAHQAKAKANAKQAOATAjATIAWALIAEAFQANAQAbAAIAzgBIARAAIASAAIgCgLIAPgDIADANQAbgCAZgGQAOAFApgVIAAADIAWgHIABAAIAAAAQAjgOAZgVIALgKQAdgcAIggQAAAAABABQAAAAAAAAQABAAAAAAQAAAAAAAAIAAAHQAAAJgDAKIAFAAQABABAAAGQgVAZgWAUIgGAGQgLAKgNAIQgcAVgeAMIAFAjIAAAJIAOgHQAtgaA6grIADACQgLAFgeAYQgnAggXAPIgUAMIgBAIQASgKASgLIgBADQAzgfAugoQgSArhDArQgbASgeANQgGAQgKAUIgVACQAKgPAHgOQgmASgvAGQgLADgNABIgFALIgPACIAFgMgAC7FnIAAAAQAdgHAagLIACgGQgdAPgcAJgAiBDQQgMAHgcAEIADADIABAAIABADIAOAUQAYAZA2AjIA+AVQBFAZAjAAIAegBQAIgcAEgcIgLABQh0AAhPgyQgjgWgRgVIgHAGgACtEfIgVAFQgEAcgIAcQA5gGAygWIAAgNQAAgIgEgYQgZALgtABgAkNCmQAMAiAbAAIAUAAQATgQA1gWQAAgGADgCIAGgEIAFAGIAHgEIAEgCQAXgOAAgOQAAgXgSgfQgKgRgLgKQgCAWgHAUQgYBFhPAAQgUgBgQgHIAIAWgAkRBPQAKAFANAAQgJAFgIABQAMAUAGAAQBMAAALgvQAEgPgBgbIgKgVIgEgKIgCABQgIgDgHgKQgKgPgJAAQgIAAgGACIAEAPIgEAAIgEgNIgHADQAEADACAGIAAADQgkAJAAAbQAAAHAFAHQAEAGAFADIAAACIgMALIAAAAQgCACAKAAQAbAAAJgLQAOgPAJgDIAGgBQACABAAAFQAAAOgPAOQgUAVgkAAQgLAAgGgFIACADgAkmAvQAFgEAHgPIAAgEQgngEgMgpQgGgTAAgmIABgbQgNALgFAPQgGANAAAsQAAAdAIAOQALATAZAGQAFgIAIAAQAEAAAHAJgAktiIQAGAEADAEIgLAEIgFAqQAAAfADAHQAGAPAVAPQAEgKAMgOQAYgdAjAAQAQAAAMAOQAGAAAGADIABgSQgCgLAAgJQAAhJBBhVIAigoIAAAAIAOgMIAPgRQAWgIAAgaQAAg4hAAoIgTAOQg8AYgmBuQgWBBgIBBIAAgBIgBABQgLgLgEgiIgBglIgCAAQgIAAgGAEIgBgRQgdAIgNAmg");
	this.shape_41.setTransform(-20.3,-20.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AipDgQgWgSAAgLIAAgKIgPABQgYgBgTgYQgJgMgEgOQAAg1ASgWQANgSAhgBQA2AGApgDQgXgFgfgVQgogXAAgOQAAhPBbgwQAcgOArgPQAEgGAHACQBXgeCVgiQACABAAAHQgBAMg8ARIg7ARQAMAHAKAUQANAYADAUQAygKAqAAQAIAAADAEQADADABADQgLARgnADQglACgVADIgCALQAdAIAAAVQAAAFgDADIgCADQAgADADARQAMADAPALQAwAjAAArQAAAWgKAYQgOAlgeAAIgVgDIgBAAQgFAFgGACIgEAAQgIAMgLALQg7A9h4gBQgUAAgPgHQgXAKgqAAQgUAAgXgTgAiGCyQgLAEgWACQACANAOAJQAUAOAqAAIAIgBQgQgPAAgLQAAgpATgQQALgIAngHQBdgRA7hOQADAKAAAHQAAAdggAVQgVANgxAPQg1ARgPAIQggARgBAWQAAAJAPALQAHAFAHAEIAHAAIgBABQAIADAIAAQBUAAAxgcQATgKATgXQAHgIAOgXQALgRAHgJIAAgEQAAgJgLgPQAKgRAKAMQAIAJAAANQAAATgEAQIgCAJIACgBQAWgIAKgJQALgMAAgbQAAgXgVgdQgYghgbACQgCADAAgFQgHgBgIgEQgNgGgLAAQhPAAg+AkQgTALgRAPIgLALIgHAHIgDgDQgQAEgbAAIg4gIQgzgCgNAZQgIANAAAnQAAASAXALQAMAFARADQAFgpATgSQAUgTAtgCIBPgFQArgIAZgiIAEAEQADAFABADQAAAdgkALQgPAGg7AGQg2AFgXANQgeAPgEAhQAUABAZAAQgDABgKAIgAg6gdQgcAYgEAVQAQAKAAAHQAAAFgEADIAHgBQAFgRAigTQAkgTA1gOQA1gPAkABQgFgGgJgGIgNgHIAAAAIAAAAQgRgJgUAAQgWAAgTACQgBAGgFACQgGAEgRAAQgJAAgGgCQggAKgXAUgAipgdQAAANAwARIATAIQAEgcAlgZQARgMAXgJQgUgIgRgTQALgeAvAWQAJAGALAHIAAgDIgEgaQgHgbgegIQiUA4AABCgABlhXIAQACIABAAIAAgGIgRAEgAAVimIgTAGQAjAjAAAfIAAACQASgHAjgKIAZgFIgDgMQgJgggXgaIg7ASg");
	this.shape_42.setTransform(-5.4,2.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("ABdDqIAAgBQgYAEgdAAQgXAAgOgQIgRACQgYAAgJgeQgFgPAAgPQgNABgXAAIgJAAIgBAAIgkAAIAAgCQgdgDgWgHQgTgGgKgJQgMgFgIgJQgLgMAAgLQAAg7AigtIAHgKIANgcQAigqAsgYIAXgVQANgMAFgIIABAAQAQgaAcgSQAigsBDAAQAfAAAgAUQARAKAGAHIAEAEIAAADQAAADgFAEIgEAEQAGAGAEAHQAHAKACAMIAIACQgRgdgIgGQAqABAaBCQAVA3AAA3QAAA9gkAEIABAfQAAAwgUAgQgVAhgnAQQgOAQgPAAQgFAAgEgEgABCDMIgGABIAEADQAbgCAUgHQAWgXAAgdIAHhjQAAgIgHgsIgFgeIgDgXQAAgOAMADQALADAAAPQAAAFAEALQADAKAAAEIALBCIgFBmQAAAQgOAeQAfgIAMhcIADggIgKgBIgBgDIgBgGIAOgOIABgtQAAgngSgjIgBgDIgDgWIgCgQIgGAKIgEAAIgDgZIAAgEIgDgCIADgBQgDgNgNgJQgVgPgsgBQg5AAgUAnQgFAMgBAPIgBAEQgBAHAAAJQAAAFAEAOQADAQAAAEIAAAPQALABARgEIAEAAQABAAAAAGQAAAJgMAHQgJAFgMABIAAACIAHgBQADgFAAAJQAAAFgLAHIgFAAQgCAlgHAqIgHAuIAiABQAKAAAMAEIAJADIAJhDQAAhDAEgWQAHguAJATQAIARAAAbIAAAEIAHAaQABASgBARQAAAngMA4IABACIgEATIAAACQAFABAJgDIADABQABAAAAAGQAAAJgFAFIAEACQgIADgIACIgEABIgBAAgAgJDBQgFgRAAgTQAHAMANAAQAHAAAGgLQADAQAPAFIADgIIgBgEIACgTIgpADIgDAAIgMAEIgKADIAAABQADAjAMgBIABAAIAAAAgAg1ByQgLAEgQACIAfAEIACgOIgGAEgAjbBdQAAAIAKAFQgEgPAAgZIAAgCQgGAQAAANgAisgHQgMAPgJAPQgJAdAAAgQAIACAJADIAVAJIAXAAQAGgVA2guQAYgUASgLQgUgGgPgSQgSgXAAgUQAAgOACgOQgpAfgpA5gAhCA/QgZAVgRAMQARgBAJgCQAVgGAEABQAFAAAFABIADABIADgNQAEgVADgWIggAdgADPgqIACBEQARgSAAgTQAAgIgHgvQAAgKgUgmQACA3AGARgAgwAWIAPgDIABgHIgQAKgAgEgPIAAgCIgBAAIAAABIABAAIAAABIAAAAgAhEhLQAAAUAUAUQgFgHgEgJQgGgQAAgSQAAgRACgPQgHAUAAAWgAgHi1QgKAMgHARQgJATgFAXIAIALIACACQAAgjAOgYQAZguBJAAQAdAAAUAHIgLgIIgJgEIgFAAQhJAAgqAagAhnhyIgFADIAZgLIACgHIgWAPg");
	this.shape_43.setTransform(-3.1,-13.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ABpGpQhCgNgXgNIgKgIQgOATgUAOIgGAAIAfgoIgHgFIgNgGQhtg2AAglQAAgGADgCIgFgEQgSgQgHg7QgGgpABguQAAgYAHgZQAEgLAEgHIgSgJIAIgMIgDgGIgCgFIgRgKQgGgQgCgRIATAOIABgDIgBgXQAAgCAFgOQAGgOAAgDQAAgWAzgjQAJgbgBgGIACgEIgBABQASgkATgiQBbijAwADQAGgJAPgOQAegbAVgGQAVgGAOAbQADAIAHAZIABAIQAVAVAFASQABAEAAAFIAHgDIgKAPQgCAKgHALIgJAFIgKALIg3A+IACABIAJAEIAEACIgCACIAEAFQAIAMAEARQAFAUglAyQgeAngqAXQACAJAAAEQgLAagVAYQgcAigcALIgGANIABACQgRBUAAAbQAAAVAJAkQAXAVAuAaIgEgYQAJAFAGAWIAAADIACABQA/AfA3AOQADgNgBgNIAFAAQADgCAAAHIgBAXQAjAHAgAAIAQAAQACACAAADQAAALgLAEQgGACgTAAQgIAFgJAAIgVgBIgSgFQgEANgHANQgJAPgOAPQAqALArAEQAgAEAfAAIACAAQgEAGgEACQgGADgUAAQgiAAhOgOIgRgDQgTARgbAQQATgSAPgRgAAaFrIgGAJQAxAZAwAOQAOgRAKgQQAHgMAFgLIgpgOIgMgEIg2gaQgCAVgSAfgAiNByQAAAvAGAqQAHA0AOAUIgBAAIAAABIAMANQAiAgA1AfIAYAOIAFgIQAUgfACgVIgDgCQgOgGgZgWIgXgTIAEARQAAAEgGAFQgFAFgEAAQgMAAgIgbIABgFQAAgEgMgqQgLgrgBgeQADgQAMgbIgQgMQgBgIgEgGIAJgKQgSgBgQgHQgMgDgJgFQgDAJgDARQgEAZAAAMIABASIABgEIADgNIAAAIgAh8gRQACABAAAEIAAABIARAPQAXAaAaAAIABAAIAKgLIAHAGQAIgEAHgEIAXgQIANgPQAOgQAQgXQgSAIgUAGIgGABQgDgMADgQIABAAQBPgVBAhgQgKgkgUAFQgrAMgNAOQgIARgIAIQAGACAXAFQAQADAHAIQgCAIgOAEQgVAGgUgKQgQgHgCgJQgFgSAdgcIgFABIgFgBIgEgLQgBgCAFgIQgRAFgPAIQALgSAhgpIAOgHQAlgzgGgVQAAgDgHgJQgGgKgDABQglAKhCB9IgSAkIgBACQgPAFgSAqQgRApADAKQAHAbAVgDQARAWASgBQgDAPADAMQgbADgXgZQgSgVgEgQIgKAUIgFAKQgFgWAGgaIgDADQgfAdAAAaQAAATACANIAGAHIAEACIACgDQgEgIgCgGQgCgCAHAAQAFAAAGAEIABgCIAEABgAAzjNQAPgOAQgIIgLgEIAAAAIgUAagABWjlIAJgFIgDgFIgGAKgACXm0QgMADgZAYQgLAKgIAGQAMAMAIAcQAGAZgzBNIgJAEIgNASIAQgGQAJgSAigqIAOgHQAxg/ADgcIgCgFQgCgJABgEIgDgLQgGgOgHAAIgDAAgABwjzQAQgUAdgeQAYgYAPgTIADgBQACgKgCgHQgCgJgHgJQgKAcgfArIgQAVIgOAHIgWAdIAHgCgAkXDSIADgJIAEAMIgHgDg");
	this.shape_44.setTransform(-8.1,-53);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AkOFVQgngdgYgZIgJAAQgHAAgYgGIAAgCQgBABALAAIAWgBQgJgMgGgKQgHgKgTguIgPglQgNgFgKgWQgKgVAAgPQAAhWAmhFQAjhCA8gpQA6goBAgHQAmgEAiAJQAfgVAwgHQAigcA3g1QBGg4BZgOQAdgCAOAYQAJAPgBAOIAAANQASAUALApIADALQAMgDAAAFIgJAJQAJAnAAAoQgBBMgQBEQgWBTgpAtIgYAZIAfAEQA1AKALAOQgRABgZgBIg3gDQg8AAAAAkIABAEIghAhIgEAEIANACQAoAFAfAAQAMAAA0gIIAtgIQAdgDAYgEIgBAXIABAPQgPAGgTAFQhHAUhJAAIgbgCIhxgRQgRAAgMAJIgEAFQgegKgVgLQgXASgYANIAUAHIABAEQACAEAAAGIgBAGIAAABQAmgMAhgSQgCAFAAAGQAAAGACAFQggAPgdAAIhIAKIhLAIQAJAKAAAIQgBAKgCgCIgDABQgDACgHAAQgGAAg4gqgAjbFRQAKAHAGAHQBCgBA9gRIgDAAQgRAAgbgPQgtARgzACgAknEbIALAIIA3AnQAugEArgSQgXgPgdgXIgSgPQgtAUgoAIgAiyDwQAnAgAgATQAZgPAXgTIgJgJIABgDIgBgFQAAgBAGAAIATAFQAcgaAXggQgfAAg0gLQgxAmg2AbgAhpieQgKANgEALQgYA9ghArQgPAThiBOQhXBGAAAOQAAA/BFA7QAmgKAsgVQgoglAAgOIABgGIAAgEQAOgBA3AuQAkgUAngbIAPgLQg0gOgJgTIAAgGQABgCAGAAQAVAIAfAIIAcAGQBUhBAbguIADgFQhEgFgYgWIAAgGQAAAAAHAAIAdACQAYAEAOAAQALAAAWADQArhLANgyQAFgOACgTQgoALgbAAQgSAAgGgXIADgEIAFAEQAEAEAFAAQAeAAAvgPQAEgpABg5QAAgHgJgfIgbAWQhEA6ghAMQgCAKgWAHIgbAJIALAGIgBAFQAAADgHAAIgVgDQgLAJgJAMgAAoC3QgcAmgdAdQAfAIAJgCIgBgGQAAgLANAAQAgAAAbACQAagWAZgaIgZgCQAOgTARgkIApACQAug9AchIQAjhRAAhHQgBgsgGgjQgdASg7AZIgiAOQgBAogUBHQgIAegKAcIAigGQBPgQABANQAAAKhNASIgwALQgRArgVAnIgXAnIABAAQgKAOAAAKIACAJIgIgCIgGABgAgoCRIgKAJQAfAEAbAAIAVgDQACgCADgCIANgSQAegvAYg1IgQACIgdgBQgoA6g4A1gAljhBQgzBSAABTQAAAJAHARIABAEQAQgeBFg2QBnhOAJgLQAOgUAOglQARgrAJgOQAJgQANgNIgPgDQiOAAhJB8gACDibQgNBYgvBNIAHABIAjgIIAPglQAahNABg0IgYAIgAB8k9QAMAWABBIQgBAXgCAWIAVgHQgDgngJhfIAAgIQAaAWACByIAxgVQAugWAZgIQgIgggOgYIgCAEQACAAABAAQAAAAAAAAQgBAAgBAAQgCAAgCAAQgNAAgCgVIAAgKIgNgLIABgDIAMADIABgQQgZgIgKAAQghAAg6ArgAGtEjIACgBIgCACIAAgBgAg9A2QgDgFgBgFQABgQAQACQAQADAAAOQAAADgEAGQgDAGgFAAQgLAAgGgIgAgHhbQgCgFAAgDQAAgPAOADQAQADAAAPQAAAFgFAFQgFAEgBAAQgNAAgEgMg");
	this.shape_45.setTransform(-17.1,-37.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABEFpQgKgDgJgFIgSgMIgNgLQgSgSgTgWIgLgPIgUgeQgPgWgLgYIgGgPIgGgPQgfgDgRgYIgDgIQgGgTgEgTQgEgTgCgTQAAgHABgGQgHgRgKgTQgIgNgGgQQgRgIgJgRQgJgOgGgSQgDgKAAgJQAAgLACgJQAEgRAOgKQAJgHAKgEIALgFIANgBQAJgbAVgMQAJgEAKgCQAHgEAJgCIgIg9QgCgRAAgQQAAgPAEgOQADgKAHgJQAGgJALgEQAGgCAGAAQAKAAAKAEQAKAEAGAGQANAJAHAOQAKAXABAaQABAdACAcIACASIAFAkIACASIAEAeQAlAYAGAsIADATQABAJgBAKIgCARIgCAHQAeAngCAvQgBAJgDAJQgDAGgFAEQgHAGgJAEIgMAIQASAgAXAcQAKgoAEgqIACghIABgbIgBgcIABgVIAEgDIAMANQACAigBAhIgCAiIgFAlIgDASIgFAYIgEARIAzAtQgNgCgNgIIgTgKIgMgIIgHgFIgEgDIgSgVIgTgaIgKgQIgIgPQgdAMgeAGIgSADIgTACIAIAXQAMAeAUAcIAWAcIAWAbIABAAQAMALANAKQAPAKARAHQAPAFARADIAPgEIAPgGQANgFALgJIAJgIIAAgBQAJgOAIgPQAGgNAEgNIAHgZIAFgcIACgdIAAgcIgBgdIAAgCIABgFQAFgPAAgPIAHACQAFAJAAALIABArIAAAeIgCAdIgBARQgCAVgJAVIgMAaIgIASQgJAPgOAMIgNAJQgSALgVAGIgLACQgXgBgSgHgAh4B/QADAIAIAFQANAHAPABQAPADAQgCQAigEAfgMQAYgKAVgOQAIgFAAgLQgBgYgIgVIgKgXIgZAWIASgEQgEAIgJABIgVAHQgOAEgOAIQgIAEgLgBQgfAFgegCIgUgCIgDgBIgOgOQAEAjANAggAh9gxIgDAJQgDAGgFAGQgFAGgJACIgPAEIAJARQAHAOAJANIAJALIAQASIAhABIAjAAIAhgIQARgFAPgMQAggbgHgnQgEgZgJgWQgCgGgEgEIgVgTIhDACIAAABQgPAAgHARQgEALAAALIACAGIAAACQAGAGAHAFIAOAHQAWABALgCQAQgFAOAAIgOAKIgRAJQgPAKgPgBQgVgEgPgRIgJgJgAjShvQgCAHABAHQAAAHACAHIAEAPQAIAWAXAIQAIACAJgBIAAAAQAJgBAEgJIACgFIgCgEIAAgHQgagiACgtQggACgKAdgAhzi9IgMAEQgFACgGAHQgIAMgBAOQgCAPABAQQABAOAHAMQACAGAFAFIARARIAIgCQACgZAPgRIAIgJIgOhHIgFgDQgGACgHABgAhZlQIgDAHQgCANAAALQABAdAFAeIACAOIAAAAIAUBrIA+gDIAAgGIgDgiIgDgTQgEgbgBgcQgDgmgIgkQgCgHgEgGQgFgGgGgFQgCgDgDgBIgTgIQgOAEgIAMg");
	this.shape_46.setTransform(2.8,-17.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B3E4E6").s().p("AgfDMIgQgSIgJgLQgJgNgHgOIgJgTIAPgEQAJgCAFgGQAFgFADgHIADgJIAVAAIAJAJQANARAVAEQAPABAPgJIARgKIAQgKQgQAAgQAFQgLADgWgCIgOgHQgHgFgEgGIAAgCIgCgGQAAgKAEgLQAFgRAPAAIAAgBIBFgCIAVASQAEAEACAGQAJAWAEAZQAHApggAbQgPAMgTAFIghAIIgjAAIgfgBgAhaBrQgXgIgIgWIgEgPQgCgHAAgHQgBgHACgHQAKgdAggBQgCAsAaAiIAAAHIACAEIgCAFQgEAJgJABIAAAAIAAAAIgHABIgKgCgAgxA/QgFgFgCgGQgHgMgBgOQgBgPACgOQABgOAIgMQAGgHAFgCIAMgDQAHgBAGgDIAFADIANBFIgHAJQgPARgCAZIgIACIgRgRgAgChVIAAAAIAAAAIgCgOQgFgegBgdQAAgLACgNIADgHQAGgMAOgDIATAHQADACACACQAGAFAFAGQAEAGACAHQAIAkADAmQABAcAEAcIADASIADAhIAAAFIg+AEg");
	this.shape_47.setTransform(-5.5,-31.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#758A51").s().p("AABCnQgPgHgPgKQgNgKgNgLIAAAAIgYgbIgWgcQgUgcgMgeIgIgVIATgCIASgDQAfgGAegMIAIAPIAKAOIATAaIAQAVIAEADIAHAFIAMAIIATAKQANAIANACIgzgtIAEgRIAFgWIADgSIAFglIACgiQABghgCgiIgMgNIACgEQAKgCAEAGIAAABQgCAEAEAEQAJALAOAIQAcAOAaATQAIAHAEAJIACAFQAAAPgFAPIgBAFIAAACIABAdIAAAaIgCAdIgFAcIgHAZQgEANgGANQgIAPgKAOIABAAIgJAJQgLAJgNAFIgPAGIgPAEQgRgDgPgFg");
	this.shape_48.setTransform(10.2,0.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#526139").s().p("AguA8QgPgBgNgHQgIgFgDgIQgNgggEghIAOAOIADABIAUACQAeACAfgFQAJABAIgEQAOgIAQgEIAVgHQAJgBAEgIIgSAEIAZgWIAKAXQAIAVABAWQAAALgIAFQgVAOgYAKQghAMggAEIgMABQgKAAgJgCg");
	this.shape_49.setTransform(-0.6,-8.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#758A51").s().p("AFWFaIgJgJIqtpsIABgBIABAAIAbgXIAWgVQALgLAGgMIJPH4IAEADIAGAEQANAMAAAPQAAAPAJAgQAJAhgBALIAGAyIgCAOIAAAJIgEABg");
	this.shape_50.setTransform(-6,-33.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#526139").s().p("AgaBRIAAAAQgRAAgLgLIgFgFIgXgdIAWgBQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAIAMgIQAYgNAVgPQACAAADgDQAGgKAJgKIANgNQAKgMAIgMIADgGIgDgEIgFAKIACgUIAAgBQADABADADQAFAHAFADIABACIALARIAAAAIAHAZQACAGgBAGQgCAQgLANIgJALIgWAUIgaAWIgDACIAAAAIgFAEIgCABQgIAEgKAAIgKgBg");
	this.shape_51.setTransform(-43.5,-70.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B3E4E6").s().p("AARC0IgDgBIAAgBIgWgMIgXgPIgBAAQgOgJgMgMIAAAAQgNgLgJgPQgFgHgDgHIAAAAIgDgRIAAgBQgCgPADgOIAAgBQAAgGAEgGQAHgJANgEIABAAQARgCAQAHIABAAIAYAKIAAAAQANAIAIANIACACIgBAEIAAADIAAACIABATIACAGQAAAFgDAEQgHANgOABQgLgBgKgHQgJgEgNgKIgPgLIgCAFQgBAEACADQAJAMAMALIAAAAQAQAOAUACIACAAQAYgBANgWIAAgBQAHAFALABIABAAQAMAAALgDIAPgGQAJgEAHgIQARgPAAgWIgBgDIgGAHQgIAIgIAFIgGAHQgGAGgIAEQgNAFgPABQgKgBgEgIIgBgBIAAAAIgCgJIAAgNIABgFIAAAAQAEgMAGgLQAFgKAIgIIAAgBIAGgFIADgDIAFgFIAAAAQAJgGAKgEIAAABQANgEALAGIAAAAQAPAGALANQAJAKAGALQAJANACANIADANQADARgDARQgCAPgIAKQgLANgNALQgLAKgNAGQgMAHgMAEIghAHQgTgBgSgKgAAAAQIAAAAQgMgGgNgFQgSgGgTABIgBgBIAAAAQgFgJAAgKQAAgHADgFIABgCIAGgGIAAgBIACgBIAAgBIAIgEQAFgBAGgBQANADANAGIAAAAQAPAGAQAJQAQAKAMANIAAABIABABIgDABIgCACIAAAAQgKAKgGAMIgFAKQgJgLgOgIgAA+gNIgBgBQgNgOgSgMIAAAAQgSgKgQgHIAAAAQgPgGgQgDIgCgBQgJAAgIADIgBABIAAgBIgYgRIAAAAIgYgQIAAAAIgdgUQgNgKgNgOIAAAAQgKgLgBgRIAAAAIAAgEIAAAAQAGgNAMgDIgBAAQARgDASAEIgBAAIAYAJIABAAQAPAHAOAJIAAABIARAJIASAOIgBgBIATAPIAAAAIAOAPIABAAIAOAOIABAAIAbAbQALAMAKANIAPAUQgKAEgJAIIgBgBg");
	this.shape_52.setTransform(-57.8,-87.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AH9IqIq3p1QgKAEgLABIgCAAIgBgBIgLgBQgXgBgQgPIgLgLIgdgpIgJgCQgKgDgKgGIAAAAIgYgNIgZgPIABAAQgQgKgNgNIAAAAQgOgNgLgQIAAAAQgGgJgEgJIAAgBQgDgLgBgKIAAAAQgCgSADgQQABgLAGgJIAAAAQAIgLANgGQgGgMAAgNQAAgVAOgMIgSgOIAAAAIgXgPIAAgBIgdgTIAAgBQgPgKgOgQIgBAAQgOgQgBgXIAAgBQAAgGACgFIAAAAQAJgVAUgGIABAAQAVgEAVAFIABABIAaAJIAAABQAQAHAPAKIAAAAIASAKIAAAAIASAOIABAAIASAPIABAAIARAPIAAABIAPAOIAAAAIAcAbQALANALAOIARAWIABABIABAFQAMAAALAGIAAAAQASAKANAPQAKALAHAMQAKAQADAQIACALQALAGAJAKQANAOAMAQQAJAOADATQACAPgEAMIAAACIAEAEIJOH4QADADABADQAAAEgDADQgCADgEAAIgDAAIgEgDIpOn4QgHAMgLAKIgWAVIgbAYIgBAAIgBABIKtJrIAJAKIAAACQAAAEgCADQgDACgDABIgBAAQgDAAgDgDgAj9iHIgWAAIAXAdIAEAFQAMALAQAAIABAAIAKACQAKAAAKgFIACgBIAFgEIgBABIABAAIACgCIAbgXIAVgUIAKgLQALgNACgSQABgGgCgFIgHgaIAAAAIgLgRIgBgCQgFgDgFgGQgDgEgDgBIAAACIgCAUIAFgLIADAEIgDAGQgIAMgKAMIgNAOQgJAJgGAKQgDADgEADQgVAOgYAOIgMAHIgBgBIAAABgAmgjxQAKAOAMAMIAAAAQAMAMAOAJIABAAIAXAOIAYANIAAAAIADACQASAKATABIAhgHQAMgEAMgHQANgGALgKQANgLALgNQAIgKACgPQADgRgDgRIgDgOQgCgNgJgNQgGgKgJgKQgLgNgPgJIAAABQgLgGgNADIAAAAQgKAEgJAIIAAAAIgFAFIgDADIgGAFIgBAAIABAAQgIAJgFAJQgGALgEANIAAAAIgBAEIAAAOIACAIIAAABIABAAQAEAJAKABQAPgBANgFQAIgEAGgGIAGgIQAIgEAIgIIAGgHIABACQAAAWgRAQQgHAHgJAFIgPAFQgLADgMABIgBAAQgLgBgHgFIAAABQgNAWgaABIgCAAQgUgDgQgOIAAAAQgMgKgJgNQgCgDABgDIACgFIAPALQANAKAJAEQAKAGALACQAQgBAHgNQADgEAAgFIgCgGIgBgTIAAgCIAAgDIABgEIgCgCQgIgNgPgIIAAgBIgYgJIgBgBQgQgGgRACIgBAAQgMAEgIAJQgEAGAAAGIAAABQgDAOACAPIAAAAIADASIAAAAIAAAAQADAHAFAHgAlplUQANAEANAHIABAAQAOAIAJALIAFgKQAGgMAKgKIAAAAIACgCIADgDIgBgBIAAgBQgMgNgQgKQgQgJgRgGIAAgBQgNgFgNgDQgGAAgFACIgIAEIAAABIgCABIAAAAIgGAGIgBADQgDAFAAAHQAAAKAFAJIAAAAIABABIAGAAQAQAAAPAHgAkwmEIAAABQASALANAPIABABIABAAQAJgHAKgEIgPgUQgKgNgLgMIgbgbIgBAAIgOgOIgBAAIgQgPIAAAAIgTgPIABAAIgSgNIgRgJIAAgBQgOgJgPgHIgBAAIgYgJIABAAQgRgFgSADIABAAQgMAEgGANIAAAAIAAAEIAAAAQABAQAKAMIAAAAQANAOANAKIAdAUIAAgBIAYARIAAAAIAYARIAAAAIABAAQAIgDAJAAIACAAQAQAEAPAGIAAAAQASAHASAJg");
	this.shape_53.setTransform(-24.2,-53.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373D48").s().p("Ag1AxIAAAAQACgpgUgiIB8gcQAVAngDAsIAAAAIAAACIh8AYIAAgGg");
	this.shape_54.setTransform(-11.7,-12.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#758A51").s().p("Al2BzIAAAAQAAgvgRgpQApgEAqgIIgBAAQAugFAtgJIAAAAIBggOIAAAAIBOgQIABAAIARgEQAUAhgCAlIAAAFIgBAGIgCAAQgkAJgjAHQguAKgvALIhaAXIhbAZIAAAAIgVAFQADgLAAgMgACGhFIArgKIABAAIAjgJIAAAAIBZgYQAegGAcgKIgBgEQAAgHAJACIADACQgBACgDABIgBABIAHARQAAAGACAIIABAKQAAAKACAIIACAPQAAAHAEANIADAMQAAACADADIACADIAAABIgCAEIgFgGIjpAjQACgtgUgpg");
	this.shape_55.setTransform(-18.1,-11.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#526139").s().p("AglBaIAAAAIgJgBIAMgJQAVgQAHgcQAEgLABgLQABgLgCgJQgBgLgEgJQgEgLgGgJIgGgMIgKgQQAAgFgEAAIgFgDQAAAAAAAAQgBAAAAABQAAAAAAABQAAAAAAABIABADIgBABQgGgFgHgFQAkgJAhALIABAAQAOAEAHAOIACADQAUAqAAAuIgBAHIAAAEQgCAMgEAKIAAABIgBAEIAAABIgCAFQgmAUgqAAIgEAAg");
	this.shape_56.setTransform(-63.1,-2.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B3E4E6").s().p("AgPBsIgJgDIgBAAQgEgCgDgDQgHgKgCgMQAIABAIAAQAKABAKgBQATgCARgLIACACIAJADQAFAEAAAFIgDAJQgEAJgJAEQgRAIgQgBIgNgBgAA/BjQAEgGAAgGQABgcgYgMIAAgEIAAgIQAAgFgCgFIAJgKIAFgHIAEAHQAKAPANACIABAAQAAgBABAAQAAAAAAAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIgBgBIgKgMQgHgJgFgNIAAgCIABgBQgBgNACgJIABgBIgBgBIACgYIgBAAIgBgBIgGgEIgBAAIgBAAIgGAFQgFAJABAJQACARgDAPQgCARgRAHIgDABIgBAAQgHADgHgCQgKgCgGgJQgFgHgCgIQgKggANgfQADgJAFgGIAHgLQAEgFAEgCIAEgBIABgBIAAAAQAGgBAHABQASAEARAIQALAEALAHIAeARIAAACIAMAFIAEADIAAAAQAQAWAJAZQAIAYgHAYQgHAcgXAOIAAABIgKAIQgGADgHADIgGACQgPAEgQADIgJAAIACgEgAAAA7IAAAAIAAgBQgYAFgVgLQgMgEgIgMIgCgGIAAgBQgBgOADgNIABAAIAAgBIAAgBIAAAAIgBAAIAFgEIAdgGQAGASAOAPQAHAJAKABIALABIAKAAQACAEgDAEQgFAKgKAEIgLAEIAAgBgAiUgPIAAAAQgGgDgCgDQgGgHAAgJIAEgIIADgFQAJgMAOgFQAagKAcgEIA4gFIAEgBIgHARIgFAOQgEAPAAAQQgDgCgEAAQgJgBgKABIgvAKQgNADgNACIgDAAQgGAAgGgDg");
	this.shape_57.setTransform(-81.9,-3.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Am9C1IgBAAQgQgEgMgMQgLgOAAgRIABgLQgNgGgJgMQgFgJgEgKQgGgUAHgRQgaAHgbAAQgLgBgJgEQgLgFgFgLQgHgPADgOIACgGIAFgJQAEgGAFgFQAEgEAEgCQAogVAsgGQAdgEAdgCQAOgVAYgDQAQAAAQAHQAXAKAUAPQAKACAIAEQAugOAtAOIgBAAQAUAFALASQAsgEAsgIIABAAQAtgFAsgJIAAAAIBfgQIBNgQIAYgGIABAAICQggIABAAIA1gMIAjgJIAAAAIBZgYIAAAAQAfgGAcgKQADgBAEABQADACABADIABAEQgJgDAAAIIABADQgcAKgeAHIhZAXIAAAAIgjAJIgBAAIgrAKQAUAqgCAuIDpgkIAFAFIACgDIAAgCIACABQADADABADQAAAEgCADQgCADgEABIAAAAIj2AkIAAAAIgCAAIiPAbIAAAAIgIACQgkAJgkAHQgtAKguALIhZAXIhbAZIAAAAIgbAHIAAAAIgEABIgCAJQgCADgDACQguAZg0gBQgSgBgOgGQgYAMgaADIgBAAIgZgCQgVAKgZACIgOAAgAnLCWQACAEAFACIAAAAIAJADIANABQATAAAQgIQAKgEAEgIIADgKQAAgFgFgDIgJgEIgCgCQgRAMgWABQgKABgKgBQgIAAgIgBQACAMAIAKgAl2BCIgKAKQACAEAAAGIABAHIAAAEQAYAMgCAcQAAAHgDAFIgDAEIAKAAQAPgCAPgFIAHgCQAHgCAGgEIAJgIIABAAQAWgPAIgbQAHgZgJgaQgIgZgQgUIgBAAIgDgCIgNgGIAAgCIgegRQgLgHgKgEQgRgIgTgEQgGgBgHABIAAABIgBAAIgEACQgEACgEAEIgJAMQgEAGgEAIQgNAdAKAgQADAIAFAJQAHAJALADQAHABAHgDIAAAAIAEgBQAQgHADgSQACgQgBgQQgCgIAGgIIAGgGIABAAIAAAAIAHAEIABABIAAABIgBAWIAAAAIAAABQgDAKABAMIAAABIgBACQAFAPAIAJIAKANIAAAAQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABgBAAIgBAAQgNgCgKgPIgDgGIgFAHgAkRgTIAKAQIAGAKQAGAJAEALQAEAJABALQACALgBALQgBALgEALQgHAcgVAQIgMAJIAJABIAAAAQAuABAogVIACgFIAAgBIABgEIAAgBQAEgKACgMIAAgEIABgHQAAgwgUgoIgCgDQgHgOgOgEIgBAAQgjgLgkAJQAHAFAGAFIABgBIgBgDQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIAFADIABAAQADAAAAAFgAmrBtIABAAIAAABIAMgEQAKgEAFgJQACgFgCgEIgKAAIgKgBQgMgBgIgJQgOgPgFgTIgeAFIgEAFIAAAAIABABIAAABIgBABIAAAAQgEAOABANIAAABIADAHQAHALAMAFQAWAKAXgFIABABgAi1gFQASAnAAAvIAAAAQgBAMgCAMIAVgGIgBAAIBcgYIBYgXQAvgMAugJQAjgHAkgJIACgBIABgGIAAgEQACglgUgiIgRAEIgBAAIhOAQIAAAAIhfARIABgBQgtAKguAFIABgBQgqAIgqAEgAnBgkIg4AFQgdAEgaAKQgNAGgKALIgDAEIgEAHQAAAJAGAHQADADAFADIABAAQAHAEAHgBQANgBANgEIAwgJQAJgCAKABQAEAAADACQgBgQAFgNIAFgOIAGgQgADJhHQAUAlgCAmIAAABIAAAGIB+gWIAAgCIAAgBQADgtgVgogAk1gaIAAABIABABIAAgCIgBAAg");
	this.shape_58.setTransform(-39.1,-8.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#758A51").s().p("AhBC8QgvgdhThfQAMAAAMgBQASgBASgHIAAAAQAQgGARgNIAAAAQAOgLAMgNIAAAAIABgBIAAABQBABZBVAIIAEgBQgRgJgdgTQAxg5AKjfQgJgLAAgEIABgBIABgCIAHADQAEADAAACQAAAGAUAWQARASAFADQAPANAZAPIAMAHQADgDADgBIgDAGQAEADAAABIgBABIgDAKQgEAXgEAOIgCAdQgGA5gLA2QgKA5ghAvIAAAAQghAvg0AAQg0gBgygegAC5hpIAAACIABgFIgBADg");
	this.shape_59.setTransform(6.9,-6.7);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#526139").s().p("AgYBBIAAAAIgIgCIgBgBIgNgEQgPgGgLgMIAAgBQgLgNgJgOIAAAAQgFgIgDgHIAAABQgFgOgBgOIgCgUQAAgJAEgIQAHAWANAWQAeAvAhgBIADgBIAFgBIABAAIAJgBQAKAAAUgMQAPgIAFgHIAFABQAPABAVgXIAAAAQAHgIAFgIIAFAJQAHAOgFAPQgDAJgFAJIgBACIgHAIIAAAAQgMAMgNAKIAAAAQgNALgOAFIAAAAQgQAGgPABIAAAAIgKABQgMAAgKgDg");
	this.shape_60.setTransform(-11.2,-8.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#B3E4E6").s().p("AheB0QgRgcgFgaIAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgCgCIgBgBIAAgHIAAgBIgDgoIAAAAQABgsAng2QArg6AtgBQAcABAbARIAAAAQAaARABASQAAAIgCAGIgBABIgCADIAAAAIAAABIAAACQAAADgFADIgFAEIgNgLQgVgOgYgIQgDgBgEABIAAABIAOANIAVASIAHAFIAQAMIACACIADACQALANABAOQgBALgGANIAAAAQgFAHgFAEQgIgJgLgIIghgbIgGgBQgNgEgGAAIgJgCIABACIA2AtQAMAJAIAKQALAUABAPQABAPgBgDIAAAAQgBADgCABQgBAIgFAJIABgBQgEAIgHAHIgBABQgMAOgKABIADgJIAAgBQADgNAAgGIgCgNIgBgJQgBgDgCgDIgDgCQgCAQgFARIgGARIgCAKQgCACAAAEQgCAEgLAIQgPAKgIAAIgBAAIgIABIgBAAIgIABQgYgCgWglgABNAaQAJgHAHgMIAAAAQAJgPAAgQQAAgSgOgRIAAAAIAKgNIAEAAQAEACAIAQQAHARABAHIgBAMIAAABQgBAPgPASQgNAQgLADIgEgJg");
	this.shape_61.setTransform(-8.6,-24);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ABaEjQg7AAg1ghQg0ghhghxIgLgEIgBAAQgTgJgOgPIAAAAQgMgOgJgPIAAAAQgGgKgEgLIAAAAQgFgPgCgQQgCgJAAgLQAAgTALgOIAAABIAGgHIAAAAIgBgQIAAgBIgDgoIAAAAQAAg0Asg7QAxhDA4ABQAhAAAfAUIABAAQAhAXgBAbIgBANQAMACAMAaQALAXgBAJIAAABIgBAMQAAAUgUAZQgRAYgQACIgBAXIgBAKQADABACADIAIAQQAIASgEAWQgDALgGAKQAiA0AsAYQAygyAJjlQAAgEADgDQADgCADAAIABAAIgBABQAAADAJAMQgKDfgxA5QAdASARAKIgEAAQhXgIg+hZIAAAAIgBABIAAAAQgMAMgOAMIAAAAQgRANgQAGIAAAAQgSAHgSABQgMABgMgBQBTBfAvAdQAwAfA2AAQA0AAAhgvIAAAAQAhguAKg5QALg3AGg6IACgbQAEgPAEgWIADgKQADAAACACQADACAAAEQABAkgEAgQgGA7gLA4QgLA8gkAxIABAAQgnA3g8AAIgBAAgAh3BkIAAAAQAPgBAQgGIAAAAQAOgFANgLIABAAIgBAAQANgLAMgLIAAAAIAAAAIAHgJIABgBQAFgJADgLQAFgPgHgMIgFgJQgFAIgHAGIAAAAQgVAXgPgBIgFgBQgFAIgPAJQgUAMgMAAIgJABIgBAAIgFABIgDABQghABgegxQgNgVgHgVQgEAIAAAJIACASQABAOAFANIAAAAQADAJAFAIIAAAAQAJAOALANIAAABQALALAPAHIANAEIABABIAIACIAAAAQAQAEASgCgAi4jWQgnA2gBAuIAAABIADAoIAAAAIAAAIIABAAQADADAAADQAAABAAAAQgBABAAABQAAAAAAABQgBAAAAABIAAAAQAFAaARAcQAXAkAXACIAIgCIABAAIAIgBIABAAQAIAAAPgJQAOgIABgEQAAgEACgDIACgIIAGgRQAFgQACgRIADADQADACAAAEIABAJIACAMQAAAGgDAOIAAAAIgCAIQAJgCAMgMIABAAQAHgIAEgHIAAAAQAEgJABgIQACAAABgEIAAAAQACADgCgPQgBgPgLgUQgIgJgMgKIg4gvIgBgBIAJABQAGAAAPAEIAGACIAhAbQALAJAIAJQAFgEAFgIIAAAAQAGgNABgMQgBgOgLgMIgDgCIgCgDIgPgMIgIgEIgVgTIgOgNIABAAQADgCADABQAYAIAWAOIAMALIAFgDQAFgDAAgEIAAgBIAAgBIAAAAIACgEIABAAQACgHAAgIQgBgSgZgRIAAAAIAAAAQgbgRgcAAQgwAAgrA6gAgYhaIAFAJQAKgCALgRQAPgUABgPIAAAAIABgNQgBgHgHgQQgIgRgDgCIgCAAIgLANIAAAAQANARAAASQAAAQgIARIAAAAQgHANgJAGgADugzIABgDIgBAGIAAgDg");
	this.shape_62.setTransform(1.6,-12.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#758A51").s().p("AAQBsQAAgsghgeQgWgRgcgJQAVgMAbhFIAAgDIgKgKQgHgIAAgBQAAgxBnCQQABANgDAFQgCAFgGAAQgKAAgCgEQgDACAAAEQAAADACADIACACIgBACIgNAmQgEALgMAYg");
	this.shape_63.setTransform(17.4,-11.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#526139").s().p("ABPAsIAAAAIgDgEQgPgYgKgOQgWgeglgOIgGABQgqAAgbADIgBAAIAAAAQAQgNAXAAQBbAAAcA3QAMAYgBAYIgGgIg");
	this.shape_64.setTransform(8.9,-4.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#B3E4E6").s().p("AAAA9QgagvgWguQgFAAgDAEQgBAAAAABQgBAAAAABQAAABgBAAQAAAAAAABQARAxAeAyIAJAPQgegCgdggQgSgUgNgXQgJgIgIgTIgGgTIgGAQQAAAUAcAoQgLgEgKgLQgRgUgDgFIgIgWIgHgYQAAgoAKgYQADgJAFgHIAEgGQAWgZAqAAQAoAAAWAMQAGAGAIAIIAHAIQADAHAAAGQAAACANAXIAQAcQAPAVArAdQAAANgEAFQgJAIgaAAQgegVgRgQQgSgGgPgRIgDgDQANAlBCAvQAvAjALAKQAbAXAAASQAAAOgFAEQgJAIgbAAQg5AAg1heg");
	this.shape_65.setTransform(11.3,8.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAIClIgCAAQgyAAgqg2IgBAAQgpAAgZgvQgQggAAgUQAAgsAJgaQAGgOAHgKQAEgeAfgQQAggRAuAGIAKACIAAgBIA1hcIALAKIAAADQgbBGgTAOQAaAIAVASQAjAdAAAtIAAAAIABAAQAMgZAEgLIAMglIABgCIgCgDQgCgDAAgDQAAgEADgCQACAFAKAAQAGAAACgFIABAEQgJAigMAhQgOAmgKAOIAPAPIAhAeQAAAVgCAGQgHAWgcAAQBOA2AAAgQAAAXgFAIQgMAUgtAAQg0AAgwhCgAAAB1QA0BeA6AAQAbAAAIgIQAFgEAAgOQAAgSgagXQgLgKgwgjQhBgxgOglIADADQAQARARAGQARASAeAVQAbAAAIgIQAFgFAAgPQgrgdgPgVIgQgaQgNgXAAgCQAAgGgDgHIgHgIQgIgIgGgGQgXgMgoAAQgpAAgWAaIgEAFQgFAHgEAJQgJAYAAAmIAGAYIAJAYQACAFARAUQALAMAKADQgcgoAAgWIAGgQIAHATQAIAVAJAJQAMAWASAUQAeAgAeACIgKgPQgdgygRgzQAAAAAAgBQAAAAAAgBQABAAAAgBQABgBAAAAQAEgEAFAAQAVAwAbAvgAAbhGQAKAOAPAYIADAEIAAAAIAGAIQABgYgMgYQgcg5hbAAQgXAAgQANIgBABIABgBIABAAQAbgEAqAAIAGAAQAlANAWAhg");
	this.shape_66.setTransform(11.3,2.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#526139").s().p("Ag+ARQgkgYABghIAAgCIAHAAIABAAQAEAQAVAQQAhAYAsAAQAkAAAagcQAOgQAFgNIAFAiQAAARgSAQQgYAUgoAAQgrAAgkgbg");
	this.shape_67.setTransform(1.5,-0.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#B3E4E6").s().p("AgkBdQgJgJgKgOQAIgDADgFQAIADAKAAQAIAAAMgMIAFgFQASAJAdAAQAKAAAGgGIAAgFQAAgDgngKQgmgKAAgNQAAgHAIgIQAHgNAMAAQAwAAAcAbQASAUAAAMQAAAHgEANIgDAIIgMARQgVAdgjAAQgsAAgXgWgAg+A8IgBgCIgDABQgKgBgHgEIAAAAIgBgEIgDAAIgBABQgGgEgEgGIAAgBQANAHATABIAFAFIAHAFIgFACIgDAAgAgvAsQAKgFAIgQQAEAHAIAIIAEADIgOAKQgJAAgLgHgAhZAUQgKgHAAgEIgDgOIgDgRQAAgUAMgeQAQgqAcAAQApAAAnArQAVAXAMAWQgNgGgNABQgjgEgQAMQADgQAAgNQAAgMgGAAQgJAAgJAwQgJAtgOAAQgUAAgMgJg");
	this.shape_68.setTransform(-0.3,-12);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#758A51").s().p("AhXBnQgIgOgOgdIgIgPQAZAHAfAAQAiAAAVgLIACAEQACAGAAADQAAAHAIAQQAKARAJAAIAEAAIADgCQADAAAAgGQgSgVgFgMIgIgVQAGgFAFgHQAKgRAAgbIAAgDQALgNAPgtQAIgcAHgdIgGgQIABgEQADABADADQAJAHAIATQAKAWAAAIIAMAxQAMAvAAAZIgBAIIAAAIIgCAAQgEgBgCgFIAAgKIAAgCIgCAAQgIAqgPAjQgeBGgvAAQg5AAglg9g");
	this.shape_69.setTransform(10.5,0.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgpCdQgUgggKgiQgCgHAGgCQgggMgUgYQgZgeAAgfIAAgBQgJgGgHgLQgIgKgDgMIACgHIADgDIgBgBQgHgNAAgaQAAgcANghQAUg3ArAAQBZAAApB3IAOANQAaAcAAAOIgCAMIADAHIAFAOIACgFIAUgpQAEgKAGgbQAGgXAGgMQAEAGABAIQgDgDgEgCIAAAFIAGAQQgHAdgJAbQgOAugMALIAAADQAAAdgKARQgEAGgGAGIAIAVQAFAMARAVQAAAGgCAAIgDABIgFABQgIAAgLgSQgJgPAAgHQAAgDgDgGIgBgFQgVAMghAAQgfAAgYgHIAIAPQANAdAIANQAkA+A7AAQAugBAehGQAQgjAIgpIACACIgBAKQADAEAEABQgCAmgVApQgjBFhBAAQg0AAgphBgAiAgJQAAAgAkAaQAkAbAtAAQAmAAAXgUQASgQAAgTIgEggQgFALgOAPQgaAfgiAAQguAAghgaQgVgQgFgOIAAAAIgIAAIAAAAIAAABgAhogPQAKAPAJAGQAXAXAugBQAhAAAVgcIAMgQIADgIQAEgNAAgHQAAgMgSgTQgcgeguAAQgMAAgJANQgIAKAAAIQAAANAoAJQAlALAAADIAAAEQgGAGgIAAQgdAAgUgJIgFAGQgMALgIABQgKAAgIgDQgDAEgIADgAhvgZIADAAIAGgCIgIgFIgFgFQgTgBgNgHIgCgBIACACQAEAHAGADIABgBIADAAIABAEIAAABQAHAEAKAAIADgBIABACgAhggoQALAGAJAAIAOgKIgEgDQgIgHgEgIQgIAQgKAGgAiOifQgMAeAAAUIADARIADARQAAADAKAIQAMAJAUAAQAOAAAJgwQAJgvAJgBQAGAAAAANQAAAMgDAQQATgMAiAEQALgBANAHQgMgXgTgWQgpgsgpAAQgcAAgQAqg");
	this.shape_70.setTransform(4.5,-3.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#758A51").s().p("AD3CpQhKAChJgOQg2gLgxgXQglgSgjgXQgzghgvgmQgbgUgYgXQgHgGgGgJIgOgXQgNgVgTgTQAagHAVgSQASgQAPgSIAGALIAOAVQAMASAPAQQAVAXAYAWQA9A1BIAgQA3AYA7AKQAqAIAsgBIAIgBIgFgMQgDgKAAgDQAAgBAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAIADgBQAGACAMAVIAAAAIARAiQAXA0AAAPIgBAFIgBADIgHAAIAAABIgcgBg");
	this.shape_71.setTransform(-3.9,-24.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#526139").s().p("AgTBJIgPgJQgmgagYgmQAbAQAhAAQAogBAigaIAqgiIgVAGIAOglIAIALQAJALAFANQACAGAAAGQAAAOgEAOIgCgBIgCANIgUAcQgZAhgqAEIgGABQgIAAgHgEg");
	this.shape_72.setTransform(-33.9,-45.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#B3E4E6").s().p("AgMDIQgcgTgOgeIgQgjQgNgdACgfQABgIACgIQADgHAGgDQAVgOASAPQAVARAJAaIAGANQAIAQgIARQgFAGgFgCQgOgBgLgLIgQgSQgDAhAeAOQAMAFAKgEQAIgDAHgGQALgKgBgRIAGALQAEAJAJAHQAPAKATgFQATgFAFgSQACgGgCgGIgJgBIgKAOIgMAFQgHAAgGgDQgOgGAAgRQANgWgFgZIAHgHQALgLAPABQAXADAJAWQAHARADASIAGAiQgHgBAAAKIAAADQgCAMgEALQgHATgPAOQgPAOgTAGQgPAFgOAAQgcAAgXgSgAAAAkQgTgYghgIIgBgTQAMgVAaAGQASAGALAUQAPAXAHAcIgJAqQgIgegTgXgAAlAAQgXgjgngKIgCgEQgLgNgMgMIg2g5QgSgUgKgWQgJgTAJgSQAFgDAFgBQAcgJAWATQANAMAMAOQAnAtAYA1IA0BiIgRAJg");
	this.shape_73.setTransform(-41.3,-67.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AEvGoQgqgEgqgJQgvgJgtgSQgqgRgogXQgpgYgigcQgkgegggdQglghgdgoQgLgPgGgQIgGAAIgFAAIgFgCIgGgDIgHgFQgLAAgKgGQgLgHgKgNQgNgPgKgSQgIgQgHgSIgCgFIAAgEQgOgMgKgQQgTgfgLgkQgLghAFgiQACgMAJgMQADgEAGgDIANgHIgBgBIAAgDIABgOQABgGADgGQACgFAEgEIAIgHIgJgKQgKgJgJgJIgYgcQgTgWgPgYQgPgWgGgXQgDgQAHgNQAEgKAKgEQAOgJARACQAuAGAZAoIAzBTQAdAvAYAyIAEAKIAIANIAEAHQALgCAKAFQALAGAGAKQAJAOAEAQQAFAQADAQIAEAcQAIADAHAIQAOAPAIATQAIAQAAARQAAAQgKARQAJAQAJANIANAUQAJANAJAKIAWAYQAPAPAQANQAoAeAtAXIAtAXQAeANAfAHQAtAKAtAHIAiAFIAEANIgHABQgsAAgrgIQg6gJg4gZQhJgig9g1QgWgVgVgYQgPgQgNgSIgNgVIgGgKQgPASgSAPQgWASgaAIQATATANAUIAPAXQAFAJAHAGQAZAYAaAWQAwAmAxAhQAjAXAlARQAyAYA3ALQBIANBKgBIAcAAIAHABIAHAEIAAAJIgNAGQgvAAgvgDgAjVBhIAPAKQALAFAMgDQAqgDAZgiIAUgcIACgOIACABQAEgOAAgPQAAgEgCgFQgFgNgJgMIgIgKIgOAlIAVgHIgqAhQgiAcgqAAQghABgbgTQAYAoAmAagAlCibQgGADgDAHQgCAIgBAIQgCAfANAdIAQAjQAOAeAcARQAlAbAtgOQATgGAPgOQAPgMAHgTQAEgLACgMIAAgDQAAgKAHABIgGgiQgDgSgHgRQgJgWgXgDQgPgBgLALIgHAHQAFAZgNAWQAAARAOAGQAGADAHAAIAMgFIAKgOIAJABQACAGgCAGQgFASgTAFQgTAFgPgKQgJgHgEgJIgGgLQABARgLAKQgHAGgIADQgMAEgMgFQgegOADghIAQASQALALAOABQAHACAFgGQAIgRgIgQIgGgNQgLgagVgRQgKgIgKAAQgJAAgKAHgAkyjKIABAVQAhAIAUAYQAUAXAIAeIAJgqQgHgcgPgZQgLgUgUgGIgLgCQgSAAgJARgAl3mRQgFABgFADQgJASAJATQAKAWASAUIA2A5QAMAMALANIACAEQApAKAXAkIAOAcIARgJIg0hkQgag1gngtQgMgOgNgMQgPgNgSAAQgIAAgJADgAFtEqIABAAIAAAAg");
	this.shape_74.setTransform(-16,-48.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373D48").s().p("AgwAcQgIgegZgRIB2gzQAdAUALAkQAHAUgDAWIh6ArQgBgWgGgVg");
	this.shape_75.setTransform(-3.2,-6.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#758A51").s().p("AliCzIgBAAIABgHIABgIQAKgrgKgrIADABIBcgCIABAAQAtgFAtgIIgBAAQAtgGAsgKIAAAAQAqgLAngMQAdAOAHAeQAGAXABAWIguAPIAAAAIg2AOIg0AMIAAAAIg0AJIAAAAIgzAIIhhAHIgvAAgADIAPIAAABQgMgkgcgWIAhgTQAhgUAhgWIA+gsIgCgTIAAgFQAAgGAFgBQAOARAAAnQAJBDAAAmIADAPIACAPIAAABIACAHQACAEAAAEQAAAEgDACIgFACIgFgBIgCgBIgCgQIgDgSIiDA4QABgVgGgVg");
	this.shape_76.setTransform(-13.8,-10);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#526139").s().p("AgaBZQgRgBgPgFIANgHQALgHAJgJQASgTAHgXQAFgTgFgVQgDgWgIgWIgFgLQgEgIgDADIgCACQgFgEgFgFQAlgBAfARQAPAHADAOIAGAaQAHAngMAnQgGAQgJAOQgZAIgWAAIgQgBg");
	this.shape_77.setTransform(-56.5,1.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#B3E4E6").s().p("ABDB1QgKgBgJgCQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAIADgGQADgJAAgJQAAgJgDgHIgGgLIgFgIIABgSIARgOIADAHQAEAHAFAGQAFAEAGADIACAAIABgBQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQgHgNgDgNQgCgJABgHIAKguIgHgHQgOAGgDAPQgCAQgGAOQgCAHgGAFQgKAKgOABQgOgCgFgNQAAgMgCgOQgBgJgCgJIAGgSQAHgYAUgQQANgKAOAHQARAIAPALQAgAWAZAYIAEACQAHAaAFAYQADANgCAMQgEAigcAUIgLAHQgUALgYAAIgEAAgAgpBkQgOgJACgUQARAEASADQAPADAOgEIALgBIAEACIADADIAEAJQgEAPgQADQgKACgHAAQgTAAgSgKgAgVA6QgLgDgJgFQgLgGgHgJQgHgIgBgJQgBgMAGgMIAAgBIABgBIAPgBIAVgEIAEARQACARAPAKQALAJAPABQABAIgHAEIgJAEQgHADgJAAIgMgCgAg6geIABgCIAAgBIgDAAIgGgBIgDADQghgDgdgQQgbgQAAgfQAAgNAKgGQAhADAeAMQAmAQAqgCIgSAbQgKARAGASg");
	this.shape_78.setTransform(-74.6,-1.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AkJDAQgSgEgMgIQgbAIgZgDIgZgHIgXAEIgZgBQgZgBgNgXQgLgUAIgXIgWgaIgBgDQgFgYAJgVQgUgGgUgHQgJgDgHgGQgMgMgJgMQgIgNgFgOQgFgOAFgOQAKgZAdADQAPADAOAFQAlANAkAJQAXAEAVgEQAKgIALgHQANgJALADIADABQAMAHAKAJQAdAWAcARQAwgEApAVQARAHAIATIAFABIABAEIACAAIBcgCQAsgFArgHIAAgBQAsgFArgKQAqgJAqgNICMg8IABAAIAAAAIABgBIArgYQAhgUAggWIBAgtQADgCADAAIACASIg+AsQghAWghAVIghASQAcAXAMAlIAAAAQAGATgBAVICDg3IADATIiNA6IAAABIgBAAIAAAAIiLAxIgBAAIg3AQIAAABIg3AOIAAAAIg0AMIgBAAIg0AJIgBAAIgyAIIgBAAIhgAHIAAAAIgwAAQgDAAgDgCQgEAJgIAHIgGAGQgLAHgPABQgRADgQAAQgWAAgVgFgAjkAKIAFALQAHAWAGAWQAFAVgHAVQgHAXgTATQgJAJgLAHIgNAHQAQAFAQABQAhAEAggLQAKgOAFgQQANgngIgpIgFgaQgEgOgOgHQgfgPgoABQAFAEAGADIABABIAAgDIACgBQACAAAEAGgAliBXIgBASIAGAIIAFAKQAEAIAAAIQAAAKgDAJIgDAFQAAABAAAAQAAABABAAQAAAAABAAQAAAAABAAQAJADAKAAQAZABAWgMIAMgHQAcgUAEghQABgNgCgMQgFgbgIgaIgDgCQgagWgfgVQgQgLgQgIQgPgHgMAKQgUAPgKAYIgGAQQADAJABAKQABANAAAPQAHANAOABQAPgBAJgJQAGgFADgIQAFgPADgQQACgPAOgFIAHAFIgJAwQgCAIACAIQAEAOAGAMQAAABAAAAQABAAAAABQAAAAgBABQAAAAAAAAIAAABIgDAAQgGgCgEgFQgGgGgDgHIgDgGgAmzCXQAaAQAegHQAQgEAFgPIgEgIIgDgDIgFgDIgLABQgPAEgQgCQgSgDgRgFQgBAUANAJgAiKCFIgBAJIgBAGIAAAAIABAAIAvAAIBfgHIAzgIIgBABIABAAIA0gKIAAAAIA0gMIA2gOIAAAAIAwgOQgBgXgGgWQgHgfgdgMQgpAKgqALIAAAAQgsALgtAFIABAAQgtAIgrAFIgBAAIhcACIgDgBQAKAsgKAqgAm3ApIgPAAIgCACIAAAAQgFAPABALQABAKAGAHQAHAJALAGQAKAFALAEQAOADAQgFIAJgDQAHgEgCgJQgPgBgMgJQgPgKgDgQIgEgUIgUAFgADugNQAZAQAIAfQAFAWACAWIB7grQAEgXgHgUQgLgjgdgVgAmlAYQgFgSAJgOIASgcQgpACgmgPQgfgMgggDQgLAFAAANQAAAgAcAOQAdAQAgACIADgCIAHAAIACABIAAAAIAAADIAeAEIAAAAgAI3gQIgCgRIADABQADABACAEQABADgBAEQgCADgDACIgBAAIAAgBg");
	this.shape_79.setTransform(-35.3,-6.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#526139").s().p("AgaBWQgQgCgRgHIAOgGQAKgGAJgIQASgQAHgXQAEgSgEgUQgGgWgKgWQgBgFgEgGQgFgIgDADIgBACIgMgKQApADAeATQAIAEAEAFIABABQABAEADACIABAAIACAGIAHAbQAJAlgLAlQgFAPgJANQgTAEgSAAQgNAAgPgDg");
	this.shape_80.setTransform(-23.4,29.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#B3E4E6").s().p("ABMB7QgKgBgJgEQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAAAAAgBIACgFQADgIgBgKQAAgHgEgJIgGgKIgGgIIAAgSIARgMIAEAHQAEAHAGAGQAFAFAHADIACAAIgBgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQgHgMgEgOQgDgIABgHIAIgsIgHgHQgPAFgBAOQgCAPgFAMQgDAIgGAEQgJAIgPAAQgPgDgGgNQAAgMgCgNQgCgKgDgJQACgJAEgIQAHgWAUgNQAMgJAPAIQARAKASAMQAhAXAbAbIADABQAKAZAGAaQADAMgBAMQgDAggcASIgLAFQgRAHgUAAIgMgBgAglBgQgOgKABgTQARAGATAFQAOAEAQgDIALAAIAFADIADAEIAFAIQgEAOgRACIgKAAQgXAAgXgOgAgSA6QgLgEgJgGQgMgIgIgIQgHgJgCgJQgBgLAFgMIAAAAIACgCIAPACIAVgDQADALABAGQAEARAQAKQALALAQACQACAIgHAEQgFACgFAAQgIACgFAAQgIAAgIgDgAg7gfIAAgCIAAgBIgCgBIgHgBIgDADQgigGgfgSQgcgSgCgfQAAgMAJgFQAjAGAgAPQAoASAqACIgRAZQgJAPAHASg");
	this.shape_81.setTransform(-42.6,24.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373D48").s().p("AAFAwQgigdgXAAQgHAAgIACIAIgLIABgBQASgZAPgdIAIgQQAlgEAUAQIAAABQAUAQAIAWQgTAmgZAjIgTgPg");
	this.shape_82.setTransform(12.1,7.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhqE7QgSgGgNgJQgcAFgagGIgZgIQgNAAgMACIgZgEQgagDgOgYQgNgVAIgVIgYgcIgBgCQgGgYAIgUIgqgPIgQgKQgOgOgKgOQgJgNgGgPQgFgOAFgNQAJgXAeAGIAdAKQAnAPAnANQAYAGAUgCQALgHALgFQAMgIANAEQAAAAAAAAQABABAAAAQAAAAABAAQAAAAAAAAQANAIALAKQAfAYAeATQAxAAArAZQAMAGAGALIAHADQAYgHAXgKIAAAAQBpgzBAhbIABgBQARgZAPgcIAJgTIABgCQA0hwALh7QAAgDADgDQADgCAEAAIAAAAIAHAOQgKB0gvBrQAogCAWAUIAAAAQARANAJARQAag7ALhDQABgEADgCQADgCADAAIABABIAHAKQgOBQghBFIAAABQgVAqgdAoIABACIgHAKIgCgBIAAAAIAAABQguA6g+AyQg8AwhDAeQg2AYgYAAIAAAAIgBAAIgDAAIgJATIAAABIgFAFQgLAGgPAAIgMAAQghAAgigJgAhLCNQADAFACAGQAJAWAHAVQAGAWgGATQgHAXgSAQQgKAIgKAGIgNAFQAQAHARADQAhAFAhgHQAKgNADgPQALgkgJgoIgFgbIgDgGIgBAAQgDgCgBgDIAAgCQgFgFgHgEQgggTgpgCIALAKIABAAIAAgCIACgBQADAAAEAGgAjKDMIAAARIAGAIIAGALQAEAIAAAIQABAJgDAJIgCAFQAAAAAAAAQABABAAAAQABAAAAAAQAAAAABAAQAJAEAKACQAbADAWgKIALgFQAcgRADghQABgLgDgMQgGgbgKgaIgDgCQgbgaghgXQgSgNgRgJQgPgJgMAKQgUAMgJAXQgEAIgCAJQADAJACAJQACAOAAAOQAIANAPADQAPAAAJgIQAGgFADgHQAFgPACgOQABgPAPgEIAHAGIgIAuQgBAHADAJQAEANAHANQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIABABIgCAAQgHgDgFgGQgGgFgEgIIgEgGgAAbEOQAAAAAAAAQABAAAAABQAAAAAAABQAAABAAABQAWgFAmgRQBBgdA6guQA8gwAsg5IADgDIgLgMQgdgfgeAAIgQADIgLACQg/BNhdAtIAAAAQgZALgZAHQADANABAOIACAoIACAfIADgBIABACgAkbECQAcASAegEQARgCAEgOIgFgIIgDgEIgFgDIgLABQgQACgQgEQgTgEgRgHQgBAUAOAJgAk1CXIAAABQgFANABAMQACAJAHAIQAIAJAMAHQAJAGALAFQAPAEAQgEQAFAAAFgCQAHgDgCgIQgQgDgNgKQgQgLgEgQQgBgIgDgMIgVADIgPgBIgCABgAkRCJQgHgTAJgPIARgYQgqgCgogTQgggOgjgGQgJAEAAANQACAeAcASQAfATAiAFIADgCIAHABIACABIAAAAIAAADIAgAHIAAAAgAEzAqIATAPQAZgjATgmQgIgWgUgQIAAgBQgUgQgnAEIgIAQQgPAdgSAZIgBABIgIALQAIgCAHAAQAXAAAkAdg");
	this.shape_83.setTransform(-18,7.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#758A51").s().p("AjXEqIgBgBIgDABIgCgfIgCgpQgBgOgDgMQAagIAYgKIAAAAQBdguA/hMIALgDIAPgDQAdAAAdAfIAMAMIgDADQgsA5g6AwQg7AvhBAdQgmARgWAEQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBAAgABugoIAAAAQgWgTgoABQAvhqALh0IgHgOIgBgDQAAgCAAgBQAAgBAAAAQAAAAAAAAQAAABABABQAdAgA0BUQAwBOAAAIIgBADQABAFgGAAQgFAAgagrIgHgLIAAAAIAAAAQgEgBgDACQgDACAAAEQgMBDgaA8QgJgRgRgOg");
	this.shape_84.setTransform(6.2,5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373D48").s().p("Ag+AZQgKgEgKgCQAYgxAkgvQASgFARAFQAUAIAOAPQAVAYAPAdIg9BSQghgogzgQg");
	this.shape_85.setTransform(8.7,2.6);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#758A51").s().p("AiDCkQgSgrAFgvQAFgmARgkQAAAAAAAAQAAAAABAAQAAAAABAAQABAAAAAAQAdAAAYAMQAOAJAKALQAMANAJANIgFAPIgPgbIgKAEQgDAIAFAIQAhA9ApA5IAVAbQg3gBgnAsIgKAMQgvgrgag7gAAghoQgRgRgTgKQgTgJgUACIAAgBIBchvIgCgQIAIAGIAuBBQAQAVANAXQAMAUAEAYQABAGgFABIgCgBIgHgLIgFgKQgHgCgFAFQgdAdgaAfQgMgYgRgVg");
	this.shape_86.setTransform(12.1,6.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#526139").s().p("AAWgXIAUgCIgZAdIgCAGIg4ARQAWgmApgMg");
	this.shape_87.setTransform(11.6,32.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#B3E4E6").s().p("AA/BrIgUgBQgMgBgFgMIAAgBQAbABAZgLQAKgFAJgHIAPgNIAEgDIgBACIAAAAIACABIADAAIADAEQAGAHgDAJQgDAJgEAFIgKABQgSAPgYAAIgEAAgAANBIQgKgDgEgJIgFgRQATgHAPgQIAIgIQAKAPAPAHQAdAMAPgYQABAYgWAOQgNAIgNACQgPACgQAAIgOAAgAB6AiIAAgNQABgIgCgHIgCgFIgIgBQADgNgCgPQgCgKgIgEIgJAAQgBALADAOQADARgLAOQgPAGgKgJQgOgLgEgUQgFgfARgcQAGgLALgGQAKgGANgEIAOAEQAZAXAJAjIAKAnQAGAXgQATIgKALgAiBAbQgFgCgDgDQgUgUADgZIAIACQANgJAPgDQAUAAAVAEQAVAAAWgCIA6gWQgFAdALAZIgPAGIgZALQgcAMgfAEIgQABQgXAAgVgIg");
	this.shape_88.setTransform(10.2,41.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAsFyIgKgBIgHgFQgHgDgFgFQgJgKAAgLIgGgDQgVgNgBgbIgdAGIghABQgXACgYgKQgUgGgOgUQgEgHgCgGQgDgNAAgMQAAgHADgGQADgFAEgDQAKgEAJgCIAIgCIALgBIAmgDQAQADARgGQgLgHgJgNQgOgSgNgTQgNgWgJgXQgLgcgHgcQgFgYADgZIACgRQAAgTAGgRQAGgUAIgTIAKgWIAMgXQBFh6BlheIAFADQACADgDAEIgIgGIADAQIhdBvIAAABQAUgCARAJQAVAKARARQASAVALAYQAagfAdgdQAFgFAHACIAFAKIgEAHIgIAKQgbAggeAgIgUAUIgFAHIgHALIgJAMQgVAkgUAlQAKAYAPAYQASAdAZAYQASARAVAIQAUAJALATIAKASQAUAhAGApQABAGgBAGIgCAEIgCAFIgCAGQgHAagRAWIgBANIgBAGIgDAGIgFAGQgKATgTgDQgLAEgLAAQgPAEgPABIgKAAgAAZFRQAGAMAMACIAUABQAaABAUgQIAKgCQAEgEADgJQADgKgGgGIgDgEIgDgBIgDAAIAAgBIABgBIgDADIgQANQgJAHgJAFQgZALgcgCgAAcEIQgPAQgUAIIAFARQAFAJAKADQAXABAWgDQANgCANgIQAVgOgBgYQgOAYgdgMQgPgIgLgOIgHAHgABmDIQAHAFADAKQACAPgDAPIAIABIACAFQABAHAAAHIAAAOIAMAOIAJgLQARgTgHgaIgKgmQgIgjgZgYIgPgDQgMAEgLAGQgKAGgGALQgSAcAGAfQAEAVANALQALAKAPgGQALgOgDgTQgDgOABgMgAiJEKQADAEAFACQAcAKAfgDQAfgEAdgMIAZgLIAPgHQgLgaAEgdIg5AVQgWADgVAAQgVgEgVgBQgOAEgNAIIgIgCQgDAcAUATgAAkCFQgpAMgWAnIA4gRIACgFIAZggIgUADgAhnhhQgQAkgGAmQgFAtASArQAaA7AwArIAJgMQAlgsA6ABIgWgbQgqg5ggg7QgEgIACgIIALgEIAOAbIAFgPQgJgNgMgNQgKgLgOgJQgYgNgdABIgBgBIgCABgAgljbQgkAvgYAzQAKACALAEQAyAQAhAoIA9hUQgPgdgUgYQgOgPgTgIQgJgCgJAAQgKAAgJACg");
	this.shape_89.setTransform(10.2,16.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#526139").s().p("AgkA4QgOgQgIgSQgEgLgCgKIAAgHIAFgUIAEgUQABgHAEgGQAIgMAKgMIACAAQgOAgACAjQAAAKAGAGQAbAdAiASIAoAWQgLAIgJAEIgMADIgDAAQgmAAgcgcg");
	this.shape_90.setTransform(-7.3,1.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#B3E4E6").s().p("AA0CAIhHhGQgYgXgcgRQgRgKgPgJQgMgIgHgMQgCgSAGgQQAGgQAIgPQAMgXAVgNQAWgNAaAAQAjgBAcAYIALAIQAWARASAVQAQAUAKAYQAHAPAAANQgTgjgegaQgUgSgXgKIgNgGIgDACIAYAZIAiAgQAkAgADAvQABAMgNAHQgOgogggbIgMgGQgPgJgSgFIgKACQAAADABACQAfAUAZAcIASAXIAMAUIgBAIIAFAFIgBAOQgBAHgDAIIgGANIgFgBIgFABIgHACQgGgDgFgFg");
	this.shape_91.setTransform(2.6,1.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#758A51").s().p("Ah+B3QgigUgTgiQgKgRgCgVQANAUARARQAPAPATAGQAaAHAagCQANgCAKgJIANgOIAHAGIAKAUQADAFABAHQACAOgGAPIgFANIgIAAQgwAAgrgagABaBRQANgEAFgKQAKgVgGgYQASgWgJgdQgHgXgPgUIAKgFQAZgNATgWIgDgUIAAgMIAHAHIAIANIAEAMQANAvgCAyQAAAVAGAXIAFAQIABALIgFACIgJAAIgHgSQgIAOgMANQgHAIgHAGQgYARgaARg");
	this.shape_92.setTransform(4.6,2.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373D48").s().p("AgSAWIAJgqIACgBIAaAkQgRAHgSAAIgCAAg");
	this.shape_93.setTransform(4.9,14.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AglCkQg1gDgsghQgbgTgSgcQgRgagBgiQgBgLAHgKQAAgLACgNQACgSAFgSQAQg0AygSIABAAIATgOQAbgRAdgDQARABAQADQALADAMAHIAcAQQAgATAXAeIAGgDQAkgNAUggIADAVQgTAVgZAOIgKAFQAPATAHAYQAJAcgSAXQAGAYgKAUQgFALgNADIgDAiQAagQAYgRQAHgGAHgIQAMgOAIgNIAHARIAJAAIgGAKQgKALgLAJQgYAWgaAMQgRAJgPALQgJAGgLABQgHAAgGACIgcAHQgZAIgZAAIgPgBgAioBBQATAhAiAVQAvAcA0gDIAFgNQAGgOgCgPQgBgHgDgFIgKgUIgHgFIgNANQgKAKgNACQgaACgagIQgTgGgPgOQgRgRgNgUQACAUAKASgAADBkIgHAsQATABASgIIgcgmIgDgEgAggiRQgaAAgWANQgVANgMAXQgIAPgGAQQgGAQACASQAHAMAMAIQAPALARAIQAcARAYAXIBHBGQAFAFAGADIAHgCIAFgBIAFABIAGgNQADgIABgHIABgOIgFgFIABgIIgMgUIgSgXQgZgagdgWQgDgCACgDIAIgCQASAFAPAJIAMAIQAgAZAOAoQANgHgBgMQgDgtgkgiIgiggIgYgZIADgCIANAGQAXAKAUASQAeAaATAlQAAgPgHgPQgKgYgQgUQgSgVgWgRIgLgIQgbgXggAAIgEAAgAiMhgQgKAMgJAMQgEAGgBAHIgEAUIgEAUIAAAJQABAKAFAJQAHASAPAQQAcAdAqgBIANgDQAJgEALgIIgogWQglgSgbgdQgFgGgBgKQgBgjANggIADgEgACoiJIAPgBIAAAFIgHAIg");
	this.shape_94.setTransform(3.5,2.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#758A51").s().p("AhnBjQguhdgXhzQA/AdA5AAQATAAAQgDQgCAuALAmQANA7ALAOQAIAKAGADQgEgpgHgVQATgNAThHQANg0AGgxIgIgKQAAgIAKAFQALAFAZAWIAyAuQAJAAAAAKIgCAJIgBAIIgHAAIgBgBIgHgGQgCBKgrBLQgqBNg+AZQgLAFgMAAQgvAAgnhNg");
	this.shape_95.setTransform(9.9,-3.8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#B3E4E6").s().p("AhCDSIgVgOQgcgTAAgVIgHgdQgHgeAAgKIAFg8IgEhNQAAgKgEgVQgFgVAAgKQAAgHgGgiQAAgWAEgRQAIgjAXAAQAoAAAJBaIABBaIgFAEIgLAmIgBADIAGABQARgXARgJQATgSAQAAQAuAAAUAUIAGAIQgPAFgRASQgEAEgBAEIgHAKIAAADQAEACADACQAVgZAcAAQAfAAARARQAMANAAALIAAAGIAAABQAAAOgGAjQgEAXgLAKIABgVQAAgSgPgJIgCgCQAAAVgCAVQgDAbgIAJIgDALQgHAXgLAMIgFAGIgDACQgHAMgSAAIABAEQg2gDg1gPg");
	this.shape_96.setTransform(3,-46.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#526139").s().p("AA4BQIgRABQhGAAg6glQgcgSgSgSIgCAAIgCgDQAAgOAIgjIACgJQALAMAPAIIAOAGQAQAQAVAAIADAAQBYAZBcgVIAFgGIABgBQACAFABAGQgBAdgSAXQgGAHgHAFQgBAFgKAHQgNAIgUAAIgIgBgABzgOIgQABQALgHAJgMIABABQAKAFAEAGIADAGIgBABIgVgBgAh+g+IAFgSIACABQAEANAGALIgRgHg");
	this.shape_97.setTransform(0.9,-22.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgmGcQgogfgrh7QgVg7gEglIAAgBQgDgFAAgCQAAgHgFgZIABgEQgUgLgLgKQgEAAgFgFIgDgRQgHgFAAgHQAAgcAJgjQAHgZAJgIIABgDIAAgEIAFACQgHgbgCgcQAAhWgIhNIgJhQIAHg3QAOgyAoAAQAxAAAVBEIAMBEQgCAYgDAXIgBAFQASgMAOAAQArAAAjAdQATAOAHAOQAMACAJAHIAHAAQAUAJAKAUQAIAQAAARQABAcgFAaQgKAygbAAIgHgCQgCAOgEANQgFAMgGAMQAdAFAAAlQAAAngUAZQgRAWgeAJQAEAvANAvIAKgWQAOgeAAgEQAAgXAQg2QAQg3ALgMIgCATQgKgEAAAIIAIAJQgGAygNA0QgSBJgUANQAHAVAFApQgHgDgIgLQgLgNgPg8QgLgoACgtQgQACgQAAQg6AAg/gdQAXB2AvBdQAwBgA8gZQA+gYArhNQAqhNADhKIAGAGQAAAjgGAiQgQBcg+BGQgmAtg9AAQgVAAgmgegAARCLQATAAANgIQAKgHABgFQAHgFAGgHQATgXAAgfQAAgGgCgFIAAAAIgEgGQgEgGgJgFIgCgBQgJANgLAGIAQgBIAVABIgFAGQhaAXhagbIgCAAQgWAAgQgQIgOgGQgPgIgLgMIgCAJQgHAjAAAQIABADIACAAQATASAcASQA5AlBIAAIAPgBIAJABgAAOAqIgBgEQARgBAIgLIADgCIAFgGQAKgMAIgVIADgLQAHgJAEgbQACgVgBgVIADACQAPAJAAASIgBAVQALgKAEgXQAGgjAAgOIgBgBIABgGQAAgLgMgNQgRgSgfAAQgcAAgVAaQgDgDgEgBIgBgDIAHgLQACgDAEgEQARgVAOgEIgFgIQgUgUgtAAQgRAAgTASQgRAJgSAWIgFAAIABgDIALgmIAFgFIgBhZQgJhagoAAQgXAAgIAjQgEARAAAWQAGAiAAAHQAAAKAEAVQAFAVAAAKIAEBPIgFA8QAAAKAHAeIAGAdQAAAVAdARIAVAOQA1APA2ADIAAAAgAiogWIgGASIARAFQgGgJgEgNIgBgCIAAABg");
	this.shape_98.setTransform(5.7,-27.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#B3E4E6").s().p("AhODKQgKgHgIgJIgsg4QASgTAKgZQAYg6ACg9IACguQACgcgHgZQgHgagEgbQgGgfAVgZQAFgGAHgBQAIgCAHADQAGACAGAFQAOAMAIATQAQAhADAkQADAegEAfQgCATgFATQgEAOAFAOIAJgBIADgDQAMADANgFQAbgJAbANQAXALAHAWQgfgDgbAPQAXAOAcACQATAAAOAMQAEADAAAGQACANAAAOQgCAlgUAdIgPAGIADgkIgCgCQgOAWgKAYQgTAtgmAfQg1gSgxgeg");
	this.shape_99.setTransform(2.4,-67.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#758A51").s().p("Ag9C0QgcgOgPgbQgRgegKgfQgUg+gMhCQgMhDgDhGIAeASQAtAZA0AHQgIAQABATQADBEAaA8QALAdASAaQAGAHAGgHIAAgIIAAgDIgBgCIgBgEIgIgXQAQgHALgPQAMgQAJgPQASgjAOgiIgJgZIADgNIAHADIAFAHIAQAdIAEACQADAJAHAJQAOAUARARQAOAPALAPQAFAIAAAHIgCAEIgIADIgCgBIgBgBIgDgCIgLgNIgHAKQgPATgNAUIgWAjQgWAggcAZQgcAZgiAIIgNACQgQAAgPgIg");
	this.shape_100.setTransform(6.7,-17.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#526139").s().p("AA2BcQgggEgdgKQgIgCgHgDQgWgLgTgNIgmgcQgUgPgMgVIgHgNQAEgmAZggQAZAuApAfQAeAVAhAPQAfANAkABIAiABIAFgHIgWgHIAQgQIAXAbQAAAIgDAIQgFANgIAMQgJANgLAKIgIAIIgrgHg");
	this.shape_101.setTransform(-2.6,-43.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgaHlQgZgMgRgYQgfgtgRg1QgRg3gJg2IgJg0QgMg3ACg4IABgLQgYgZgVgeQgDgFgBgGQgBgNADgMQAIgmAUggQAMgTAWgGIAQgtQAIgYAFgXQANg3gEg3QgCgfgKgdQgEgMAAgMQgBgRADgRQADgUAMgRQAOgTAWACQARAAAOAJQAmAcANAtQAFARAAASQAAA6gGA6QAUgIAXABQAeACAYAUQAVATAGAfQANABAJAKQAQARgEAVIgIAvQgFAcgNAWQgFAHgGAFQgPAMgTgEIgTAlQASAMALARQACAEAAAFQAAAQgEAPQgFAXgMATQgPAXgZACQgSgEgTACQADApAGAqQAGAjALAjIAjgsQAcglATgrIAJAZQgOAigTAjQgJARgMAQQgLAPgQAHIAIAXIACAEIABACIAAADIAAAIQgHAHgGgHQgTgagMgdQgXg+gEhEQgBgTAIgQQg0gHgtgZIgegSQAEBGALBDQAMBEAUA+QAKAfARAeQAQAbAcAOQATAKAWgEQAlgIAbgZQAdgZAVggIAXgjQAMgUAPgTIAIgKIALANQgEANgFAMQgeBBg0AxIgRAQQgoAhgzABQgUAAgRgJgAi8gEIAIAMQALAXAVAPIAmAbQATAOAVALQAHADAJACQAfAKAdAEIAsAHIAHgIQALgLAKgNQAIgLAFgOQACgHABgIIgYgcIgPAQIAWAIIgFAHIgjgBQgjgCgegNQgjgPgdgXQgpgcgaguQgZAggEAlgAhGnSQgHABgFAGQgVAZAGAfQAEAbAHAaQAHAZgCAcIgCAuQgCA/gYA6QgKAZgSATIAsA4QAIAJAKAHQAxAcA1ASQAmgfATgrQAKgYAOgWIACACIgDAkIAPgGQAUgdACglQAAgOgCgNQAAgGgEgDQgOgMgTAAQgcgCgXgOQAbgPAfADQgHgYgXgLQgbgNgbAJQgNAFgOgDIgBADIgJABQgFgOAEgOQAFgTACgTQADgfgCgeQgDgkgQghQgIgTgOgMQgGgFgGgCQgFgCgFAAIgFABg");
	this.shape_102.setTransform(2.1,-45.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#758A51").s().p("ACJHUIgCgDQgCgDAAgEIAAgEQodkwEdprQAMAQANAGQAIAGANAGQAWALAZAFQkIITHnD9IACACIAAgBIALgKQAQgMAAAPQgBgMgnA7QgoBAgCAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBg");
	this.shape_103.setTransform(4.8,-57.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#B3E4E6").s().p("AhlCqIgLgLQgKgLgKgNQgFgPgCgWIgBgYQAAgPAOgmQAMgbAOgbIATgfQBNhzBoAAQAXAAALAIQAHAEAAAEQAAAxhEAZIgwAPQgUAIgBAKQgkgNABAYQAAABAJAEQAPADANAHIAFADIAKAEQAXANAAASQAAARgNAOIgJALQgDgHgFgGQgRgXgpAAQgMAAgKAHQgGADgCAEIABAAQAaADAQAIQAnAJgBAiQgEAPgDAMQgSAqgeAAQgYAAgHgKQgFgFABgGQAAgJAHgJIACgJIAGgKIAEgJIgBgBQgDgEgEAAQgQAAgKAWIgCAGQgHASAAAMQAAANAPALQASANAhAAQARAAAOgLQgUARgVAAQgfAAgTgKgAAQB8IAAAAIAFgNQAIgUAAgOIgBgIIABAAQAVAAAKgZIAGADQAPAIAAARQAAALgLATQgDAHgHAFQgNAKgYAAIgBACIgGgCgAAZB6QAGgBgFAAIgBABg");
	this.shape_104.setTransform(10.9,-128.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#526139").s().p("AgnBEQgEgFgbgWQgOgMgHgMQgNgRAAgOQAAghAZgeIACgDIAAALQABAJACAJIALAOQAJANAQAMQAmAkAdAAIAIgBQAMADAXAAIALgFIAPgIIAAgFIgcADIgIgBIAagEQAIgGAIgJIABgBIgEAcQAAAJgZAZIgPAQIAAAAQgRANgJAAQgmAAgkgNg");
	this.shape_105.setTransform(2.2,-109.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("ACGKyQowk4Epp/IADgEQgUghAAgNQAAgmAkgoIABgBIAKgLIAAgFQAAgwAlhFQAOgaAUgeQAkg4A3gaQAjgcBCgBQBFgCAAAjQAAAvgfAaQgQAPg2AVIgmAPQAXAMAKAOQAJALAAAOQAAAKgCAKIAGAAQAPAAAKAUQAIAPAAAKQAAAWgLAWIgDAEQgSAggoACIgCAEQAFACAAAKQAAApgCAQQgCAKgWAVQgOANgJAFQgPASgXAAIgVgBIgBADQkBIEHYD3QADABABAEIAAABIgLAKIgCAAQnmj+EHoTQgZgFgWgLQgMgGgJgFQgNgHgMgQQkdJrIdEwIAAAEQAAAEACAEIACADIgEACIgDABIgEgCgAhil7QgZAeAAAhQAAAQANARQAIALANANQAbAWAFAFQAkANAlAAQAJAAARgNIAAAAIAPgQQAZgZABgJIADgeIgBABQgIAKgIAHIgaAEIAIABIAcgDIAAAFIgPAIIgLAFQgXAAgMgDIgHABQgdAAgngmQgQgMgJgNIgLgOQgCgJAAgJIgBgLIgCADgAgNonIgTAfQgOAagLAdQgPAmAAAQIABAYQACAVAFAPQAKANAKAMIALAKQAUALAcAAQAVAAAUgSQgOAMgRAAQgfAAgSgNQgPgLAAgOQAAgLAHgTIACgFQAKgXAQAAQAEAAACAFIAAABIgCAIIgFALIgDAIQgHAJAAAKQAAAFAEAFQAIAKAVAAQAeAAASgpQAFgNAFgPQAAghgpgJQgQgJgYgCIAAAAQACgEADgEQAKgGAMAAQApAAAUAXQAFAFADAHIAJgKQAMgPAAgRQAAgUgXgMIgKgFIgFgCQgOgIgQgDQgJgEAAAAQAAgZAlAOQABgKAUgIIAwgQQBEgZAAgwQAAgEgHgFQgLgIgXAAQhqAAhLB0gABAlKIAFgFIAGgIIgBAAQgEAHgGAGgABhmZQAAAOgIAUIgFANIAAAAIAGACIABgCQAYABAOgLQAGgEAEgHQAKgTAAgMQAAgRgOgHIgHgEQgJAZgWAAIgBAAIABAIgABeltQAGAAgHACIABgCg");
	this.shape_106.setTransform(4,-79.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#B3E4E6").s().p("AgWAdQgUgXAAgNQAAgIACgNQADgVAGgFQAEAFAJAmQAIAcAZAKIABAFQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAIgDABIACADIAUACQAFABAEAEIgGAGQgDACgMAAQgWAAgWgag");
	this.shape_107.setTransform(-6.2,-24.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#526139").s().p("AhMA4IAAgCQgLgCgGgHQgOgLgJgPQgQgbAFghIAAAAQAAgOAEgHIAAgBQADgDADgDIAAABIAGANIAAAAQACADAlAhIASASIABAAQAnARAiAGIABAAIAEAAQA2gHAMgEIABgBQAPgJAMgDIABgBIAAgBIAAAAIABgBIgBgCQgFgEgGAAIgGABQAEgJAAgJIAAAAQAGADAKAAIAGAAIABADQAAAngPAVQgZAlhEAAQg9AAglgTgAheg6QgKgJgJgEQAHgDAKAAIADARIgBgBg");
	this.shape_108.setTransform(-15.3,-24.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#B3E4E6").s().p("Ah0EfIgGgaIgIgdIAAgBIgGhGQAAgbAEg9QAFg+AAgaQAAg3AchpQAmiTA6gBQAbAAAOAZQAJAOAAANQAAAwgmBmQgkBlAAA+IgDASIAAABIABABIACAAIABgBIACgEQAGgOASgXIAAAAQAXguAaAAQAxAAAKAnIAAArQgdgCgpA7IgBACIACAEQABACAGAAQAHABAQgYQAOgVASAAQATAAALAmIAGAmQAAAhgJAeQgRA2goAAQgIABgCgEIgBAAIgBgDIAAAAQAFgcAAgNIgBgWIAAgCIgBgBQgBgDgFABQgHgBgDALQgCAJAAARQAAAjgTAhQgIAOgKAJIgDAAQhIAAgwgkg");
	this.shape_109.setTransform(-9.9,-56.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AAxHPQh8gBhThTQgcgcgSgiQgOgbAAgKIAAgBIADgIQgMgHgJgIQgdgaAAgmIgDgdIAAgBQAAgmAhgPQAIgEAIgBQgFgfABggQAAgfADhOQAFhsAIgnQARhlANgmQAmhsBCABQAtAAATAfIABAAQAJASAAAYQAAA1gkBlQgUA2gJApQAUgaAdAAQAtAAAUAaQAOARAAAYQAAAJgDATIgDARIAIAHQAZAeAAAxQAAAsgOAlQgRAsggALIACAHQAAAvgMAWIgHAMQAEAiAxABQBIAAAmhAQAPgYAJgdIgEgFIAAgBIAAgBIABgBIAAgBIABAAIAGgDIABAAIABAAIABABIABACQAAAKAEASIAAABIAAABIAAAAQgIAYgUAcQguBBhLAAQgjAAgUgRIAAAAQgJgJgEgLQgcAVgzgBQhBAAgqgPQALA1A8AwQBOA8BeABQBNgBBKhGQAegcAUgdIABgBIACABIABABIAJARIAAACIAAABIAAABQgOAZgpAkQhKBBhWAAIAAAAgAjyCIIgBABQgEAGAAAPIAAAAQgFAhARAdQAIAPAOALQAGAGALADIAAACQAlASA/ABQBFgBAYgkQANgVAAgpIgBgDIgGAAQgIAAgGgEIAAABQAAAJgEAJIAGgCQAGAAADAFIABACIgBABIAAAAIAAABIAAABQgLAFgPAJIAAABQgNAEg1AGIgFABIgBAAQgkgGgngTIgBAAIgSgSQglghgCgDIAAAAIgFgNIgBgBQgDADgCADgAhGm5Qg5ABgnCTQgcBpAAA3QAAAcgEA+QgFA7AAAbIAHBGIAAABIAHAdIAHAaQAvAkBLAAIACAAQAKgJAIgOQAUghAAgjQgBgRADgJQACgLAHABQAFgBACADIAAABIABACIABAWQAAANgGAcIAAAAIACADIAAAAQADAEAGgBQAoAAAQg2QAKgeAAghIgHgkQgKgmgUAAQgSAAgOAVQgOAWgHgBQgFAAgCgCIgBgCIAAgCQAng7AeACIgBgrQgJgpgvAAQgaAAgYAwIAAAAQgTAXgGAOIgCAEIgCABIgBAAIgCgBIAAgBIADgSQABhAAmhlQAlhmAAgwQAAgNgIgOQgOgZgeAAIAAAAgAjpCAQAJAEAKAJIABABIgDgRIgBAAQgJAAgHADgAEFEwIABgBQAHAAAAABIAAAHIgBAIIgHgPg");
	this.shape_110.setTransform(-3.3,-44.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#758A51").s().p("AigBWQg9gwgLgzQAqANBBAAQAzAAAdgSQAEAKAKAIIAAAAQAVARAgAAQBLAAAvg/QATgcAIgYIABAAIAAgBIAAgBQgFgTAAgKIgBgBIgBgBIAAAAQAAgIAHgGIAPATQAKAPAAAKQAAAGgDACIgEgBIgCgBQACgFgEgIQgDgHgFgFQAEAeAaBAIAPAiIAGAPIAEAIQAAAFgDAEIgFAAIAAAAIABgCIgBgBIgJgRIgBgCIgCAAIgBABQgUAcgeAdQhJBGhOAAQheAAhNg8g");
	this.shape_111.setTransform(0.5,-15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},40).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_8,p:{x:-4.3,y:44}},{t:this.shape_7,p:{x:-4,y:43.7}}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_8,p:{x:1.5,y:53}},{t:this.shape_7,p:{x:1.8,y:52.7}}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},1).to({state:[{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85}]},1).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},8).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95}]},1).to({state:[{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99}]},1).to({state:[{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

	// Layer 2
	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#0000FF").s().p("Ai+DlQgUgWgHgaQgEgcAXgVQAOgNAKACQAFgQANgTQAQgYASgSQAQgsAcgxQA3hpCnhvIgeAcIAdgCIgiAaQipCIhSDJIAEgYIgRAgQAiAIAnAYQALgnAZgqQArhfBIhLICMh+IgBAMIAKAQIgZARIAGgCIgQAMIAEgIQgsAogpAsQg+BDgyBIIAAACIg8BvQAjAWAAAEQgZBBgZADIgVACQgzAAghglgAjECnQgCAHAAAEQAFAUARASQAfAlA0gIQAQgCAIgIQACgCANgVQgmgDgwgaQgvgagHAAQAAAEgCAGg");
	this.shape_112.setTransform(3.3,3.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#B3E4E6").s().p("AgYBvQgbgDgTgTIgWgVQgCgTABgSQABgSAGgQIAAALIABAHIADACIAHAAIADgCIABgHQACgcAOgcQAJgTAMgRQAQgZAbgBIgHAHQgKANgJAPQgJARgIARIgCAXIgBAMIACABIADgBIACgDIAMgXQAIgSAKgQQAGgNAKgKQAIgHAKgDQAUgJARAQIgQAHIgKAHIgRARIgOATQgNATABAWIACABIAFAAIAEgDIAJgKIAAgBQABgFADgEQALgSAMgQQAKgPATgCQAGADAFAFQAEADABAFQABAFgDAFQgOAbgRAYQgJAPgHAQQgGAMgDANQgDAPgKAQIgFAHQgHAFgHAEQgKAFgOAAIgEAAg");
	this.shape_113.setTransform(0.2,-37.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#526139").s().p("AgqAaQgJgEgEgHQgLgVABgbQAOARAUALQAPAFAQAAQATACAVgFQAQgGAKgSIAAALQABAQgIAMIgCAEQgCAFgHABIgXAIQgPAEgNAAQgTAAgUgIg");
	this.shape_114.setTransform(-2.3,-24.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#758A51").s().p("AgPCcQgIgDgHgFIgGgDIAAAAQgRgOgKgPIgOgWQgHgMgFgMIgJgZIgIgbIgHgaIgHgdIgEgQQAdAFAbgEIASgFQAEAhALAdIAHAUQALAUAMAUQAKATAPARIAFAEIACgBQAAgFgDgFIgIgOIgDgGIABgHIAHgMQAFgKADgLIAIgYIAHgZIAGgeIAEgeIADgdIACgcIAAgNIgHgLIACAAIADAAQAPAKAJARIAGAIIATAWIATATIAAADIgEgBQgHAQgCARIgFAbIgHAZIgHAbIgJAcQgFAMgHANQgGAMgIAMQgIAMgKAKQgJAKgLAHQgIAFgKABIgHABIgKgBg");
	this.shape_115.setTransform(6.7,-14.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AAMELQgMgCgMgGIgOgJQgSgOgMgSIgPgYQgHgNgGgNIgJgcIgIgcIgJgfIgIghIgEgRQgggMACghQAAgRgBgQIgDgoQgBgRAEgRQADgRAIgQQAIgRAKgQIACgDIAEgCQANggAYgXQAHgIAKgFIASgHIARgBIAJABIANADIAHACIAbAHQAIAEAGAJQADAFACAHQAUALACAUQABAKgEAKIgKATIgWAjIgKARQgHAPgGAQIgDALQAQAhgNAhIgEAIIgGAKIgKAIQAFBAAeA1QATgrAIgsIAFggIAEgcIABgdIABgbQAAgEACgDQAJgGAFAJIgDgBIgCAAIAHALIAAAOIgCAbIgDAbIgEAeIgGAfIgHAaIgIAZQgDAKgFAKIgHANIgBAHIADAGIAIAOQADAEAAAFIgCACIgFgEQgPgRgMgTQgMgUgJgVIgHgTQgLgfgEghIgSAFQgbAEgdgFIAEAPIAHAeIAHAcIAIAaIAJAZQAFANAHALIAOAXQAKAOARAOIAAAAIAGAEQAHAFAGACQAJADAKgCQAKgBAIgGQALgHAJgJQAKgLAIgLQAIgMAGgNQAHgMAFgNIAJgcIAHgbIAHgaIAFgbQACgSAHgPIAEAAIABgCIAIAEQADASgGARQgGAVgEAUIgGAbIgIAcIgMAdQgGANgIANQgIANgJANQgIAKgJAIQgJAJgKAHQgNAJgOAAIgLgCgAh8ADQAEAIAJAEQAhANAkgKIAWgHQAHgCADgEIACgEQAHgMAAgRIgBgKQgJASgRAFQgUAIgVgCQgQgBgPgHQgUgLgPgQQgBAbAMAUgAiIhrQgBASACATIAWAVQATATAbADQAQABAOgGQAHgEAHgFIAFgHQAKgQADgPQADgNAEgMQAHgQAJgPQARgaAOgbQADgFgBgFQgBgFgEgDQgFgFgGgDQgTACgKAPQgKAQgLASQgDAEgBAFIAAABIgJAKIgEAFIgFAAIgCgDQgBgWANgTIAOgTIAPgRIAKgHIAQgHQgRgQgSAJQgKADgIAHQgKAKgIANQgKAQgIASIgMAXIgCADIgDABIgCgBIABgMIACgXQAIgRAJgRQAJgPAMgNIAHgHQgdABgQAZQgMARgJATQgOAcgCAeIgBAHIgDACIgHAAIgDgCIgBgHIAAgNQgGASgBASg");
	this.shape_116.setTransform(4.5,-23.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#758A51").s().p("AgCgBQgKgOgJgJQAbAPAQAdIgGAFQgHgNgLgNg");
	this.shape_117.setTransform(-13.2,4.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B3E4E6").s().p("AABB5QgBgIgBgJQAAgIAPgPIAAgCIASgOIAJADQADABADgCIAEgEQgUgGglgyIgbgiQgBACAAADQACALAEAKIgJADQgMAEgbAHQgWAFgHgCQgDgEgBgMQAAgNAIgDIAAgBIAAAAIAlgLIAagIQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAIACABIALgDQACgDAGgBIAGABIACAAQAIAFADgCQADAAAGgCIACgBQgGgFgFgKIgCABIgBgCIAAAAIgFgHIAAAAIgLgMIAAgBIgIgQIgCgNIABgIIABgEQABgEAPgCQAIABAJASIANAaQACAEAEABIAAAAIADACQADABADAAIAOgDQAZgCARAYIABAAQAOARABARQACARgMAQQgQAaABAHQAAADgKAQIAAAAIgSAdIgBABQgFAMgLAIIAAABQgOAJgTACQgCgBgDgFgAhEBVQgHgCgBgFQgBgSAegSQAYgNAKgIIAIAKIALAOQgLAJgUAVQgKAKgUACIgCAAQgFAAgGgCg");
	this.shape_118.setTransform(-28.5,14);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#526139").s().p("AAUAiQgCgWgRgTQgWgggjAEQAXgTAYgCQAOAAAYAhQAYAcAEATQgCADABAEQgBAHgTALIgSAIQADgLgBgMg");
	this.shape_119.setTransform(-17.9,8.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgpB/QgFgKgBgLQgBgGAEgJQgNALgYADQgKABgLgFQgTgHgBgOQgDgdApgYIgPAEQggAHgKgGIgBAAQgMgGAAgaQgBgbAUgGIAAAAIAmgMIAvgOIgJgLIgBgBIgIgSIAAAAQgDgGgBgLQgBgEADgKQgCgUAigEIABAAQASgDASAeIABABIAEAOQAdgbAigDIABAAIAIAHQAPAEAMAGQAJAJALAOQAMAPAHANIAGgFIAHAQIgFAEQAEAKAAAHQABAFgCADQAAAQgdAOQgWAMgOACIgCADQgLARAAADQABAHgOAYIgSAdIAAAAQgHAPgPALQgSANgWADIgDAAQgMAAgIgSgAgLBPIgBABQgRAQAAAIQABAIADAJQADAFADABQASgCAMgKIABAAIgBAAQAMgIAFgMIAAgBIASgdIAAgBQAKgPABgEQgCgGAQgaQANgRgCgQQgCgRgOgRIAAAAQgRgYgZACIgOADQgEAAgDgBIgCgCIgBgBQgBAAgCgEIgNgaQgLgTgIAAQgPACgBAEIgBAEIgCAIIADANIAHAPIAAABIAMANIAAAAIAFAGIABAAIACADIACgBQAFAJAFAGIgCAAQgGADgDAAQgDACgJgGIgCAAIgGAAQgGABgDADIgLADIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABIgbAIIgkALIgBAAIAAAAIABAAQgIAEAAANQAAAMADAEQAIACAWgFQAbgHAMgFIAJgCQgFgLgBgKQgBgDACgCIAbAiQAkAyAVAGIgEAEQgDACgEgBIgJgEIgPAPgAhLAqQgdARAAATQACAEAGACQAIADAFAAQAVgCAKgKQATgVANgKIgNgNIgIgKQgJAIgZANgABQhBQARAVACAWQABALgDALIASgIQATgKABgHQgBgFACgDQgEgSgYgeQgYghgPAAQgZACgWASIAGAAQAeAAAWAdg");
	this.shape_120.setTransform(-25.8,14);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#758A51").s().p("AjDCCIgHgGICkh+IgHADIAmgbIgBAAIAAAAICah3QgGgLgBgHIgBgGQAAgEAFgCQAGgBAAAFIAAADQABAFADAJQAHAPAQAZQATAdAFANIADAHIAAADIgFADIAAAAIgFgBIgCgBIgCgFQgUAKgkAYIgUAPIiIBiIgBABIh+BeQgRgfgcgPgAgJgXIACgCIAAgBg");
	this.shape_121.setTransform(4.2,-10.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AiMCkIB/hdIABgBICHhjIAVgOQAkgYATgLIADAGIACABIAEABIABAAIgKAHIhNA5IhgBFIgBAAIgBABIidB1IgHgRgAjUBsIgIgHQAFgBAGACIFmkUQACAHAFALIicB2IgLALIALgLIABABIgjAdIAGgFIikB9IAHAGQgMgGgPgEgADWhMIgDgIQAHgDACACIABABIgCAHIgGAEIABgDgACfi0IACAAQAEAAACAEQADADgBADIAAABQgDAAgCAEQgEgJgBgGg");
	this.shape_122.setTransform(3.1,-9.4);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#758A51").s().p("ADdDSIgDgJIAAgCIgCgBQl9idhBj8IAegEQANAAAPgGIAAAAIAEgCQB2DsDwBNIACAAQgDgLAAgIIAAgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAABIABAFIAEARIADAMQgBAEAIAXIAGAaIAGASQgBADAHAVIAFAYQABABgEADQgDgEgEgKg");
	this.shape_123.setTransform(2.2,-28.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#526139").s().p("Ag3AeQgJgKAAghIAAAAIAAgHIACABQAYAJAqgEIAAAAQAlgEAUgSIABAEIAAAAQADANAAAJQAAAbgCACIAAAAIgLAEIgEACIgJADIAAAAQgNAFgKAAIgCAAIgfAEQgdAAgJgHg");
	this.shape_124.setTransform(-19.6,-55.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#B3E4E6").s().p("AgnCAQgHgDgFgEIgBgBQgFgFgBgJIgFgdIAEgBIAAAAQAPgDAEgPQAKAGAMgBQADAHAIAHQAMAMAQAAQAPABASgPQADgCABgEQAAgDgBgCQgRAGgMAAIgCAAIgFABQgJAAgJgIQgFgGgBgHQABgLAKgMIAAAAQAOgMAPAAQAVAAANAIIAAAAQAQAKAAAWQgBAegNAUIgBABIgCACIABAAQgQAUgkADIgWABQgWAAgOgEgAhPA6IAAAAQgGgGAAgLQAAgxAPgCIAJABQgEAJABAKQAAATAHAMQABAPgHADIgJABQgEAAgDgCgAglAmIAAAAIgCgDIgBgBIgBgBQgGgJABgOQAAgKAEgLIABgCIABgBIABgDIAAAAQAGgPAIgBQAGAAADAEIABABIAEAhQAAAKADAFQgKAMgCALIgDACQgIgBgGgGgAAFAFIAAgBIgEgnQAAgjAIgcQAKgfAQgCQAUADADAQIAAAGIAAADIABAPIgDAXQgDAUAAAOQAAAUADALQgJgBgKAAQgQgBgQAJIAAgCg");
	this.shape_125.setTransform(-21.3,-71.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AENGPQmLijg/kHQgcgCgKgKQgOgNAAgsIgCgUQgIgKgCgNIgEgfQgFgCgEgDIAAAAQgOgKAAgVQAAhJAiACQAGAAAJACQAMgaASABQAGAAAEABQACgdAHgZQAPgvAcABIABAAQAlAFADAeIAAAAQAAAFgBAGIACAPIAAAAIgDAaQgDATAAANQAAAbAEAFQADADAAAEIAAAAIACABIAAAAQAYAPAAAhQAAAggOAYIAGAPIAAAAQAEAQAAALQAAAvgQACIgCAAQBvDgDmBMQAAAIACALIgBAAQjzhNhzjsIgEACIAAAAQgPAGgNAAIgfAEQBBD8F+CeIABAAIABACIADAJIAAAAQgCAEgDABIgEABIgDgBgAjfhhIAAAAQAAAjAJAKQAJAHAdAAIAhgEIABAAQALAAAMgFIABAAIAJgDIAEgCIALgEIAAAAQACgCAAgdQAAgJgDgNIAAAAIAAAAIgBgEQgUASglAEIgBAAQgrAEgYgJIgDgBgAjviqIAEAdQABAIAGAGIAAAAQAFAFAIACQAVAIAngEQAkgEAQgUIgBABIACgDIAAAAQAOgUAAgeQAAgWgPgKIAAgBQgOgIgUAAQgPABgOAMIAAAAQgNAMAAALQAAAHAIAGQAIAIAJAAIAGgBIACAAQAMAAARgGQABACAAADQgBAEgDACQgTAOgPAAQgPAAgOgMQgIgHgDgHQgMABgKgGQgEAPgPADIAAAAIgEABgAkGjOQAAALAHAGIAAAAQACACAFAAIAJgBQAHgEgBgOQgIgNAAgSQAAgKAEgLIgJgBQgQABAAA0gAjHjKIACgCQACgMALgLQgDgFAAgKIgEgkIgBgBQgDgDgGAAQgIABgHAPIAAgBIAAABIgBADIAAABIgBACQgFAMAAALQAAANAGAKIAAAAIABACIADADIAAABIAAgBQAGAGAIABgAillcQgIAdAAAjIAEApIAAAAIAAADQAPgLARAAQAKAAAIACQgCgMAAgTQAAgOADgUIADgXIgCgQIAAgCIABgGQgDgRgUgDQgQACgKAfgAD+EAIACABQADABACADQABADgBAEQgBADgDACg");
	this.shape_126.setTransform(-3.7,-46.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#526139").s().p("AAeAZQgJgTgVgKQgegRgdAUQAOgbAVgPQAEgCAGAAIAOAHIADgCIARAIQAeAQAJAPQgBABACAEQACAHgOASIgNARQgBgMgEgJg");
	this.shape_127.setTransform(-19.3,-4.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#758A51").s().p("AiNBUQgdgUgPgFIgDgCQA1gxA+gZQBBgcBJgSQA7gOAnAGQgBgEAAgIIAAgDQARADAEAMIAAAEIAAASIACAWQACAPAAAHIABAFIABAQIAAACQAAAHgGAAIgDgBIgBgJIgCgQQg2gEhNASQheAahVAuIgDACIgFgDgACnhKIAAADIACABIgBgFg");
	this.shape_128.setTransform(1,-15.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#B3E4E6").s().p("AAoBuQgFgGgDgHQgDgIAKgWIABgCIAKgWQAFAAAFgCQADAAACgDIADgGQgVAEgvgaQgZgLgKgHQgBACABAEQAFAGAHAIIgGAIQgKALgWATQgSAQgHABQgEgCgEgMQgEgMAGgIIgBAAIAdgcIAVgTQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAABIABgBIAJgIQABgEAGgEIAFgCIACgBQAKABACgEQADgBADgGIABgCQgFgCgHgGIgBACIgDgCIgBABQgDgCgDgBIAAAAIgPgHIAAAAIgLgLIgGgKIgCgIIAAgFQAAgEAMgJQAIgDAPALIAUASQABACADgBIABAAIACAAQADABAEgCIALgKQAWgOAWANIAAAAQASAJAHAOQAGAOgFAYQgGAfADAEQABADgFATIABABIgHAjIAAABQgBAOgIANIABABQgKAOgQAMIAAAAQgDAAgEgDgAgpBuQgGgRAVgeQASgZAFgMIAJAGQAIACAHAEQgIAPgLAcQgEAPgSAMQgEACgIACIgDAAQgEAAgCgCg");
	this.shape_129.setTransform(-27.1,6.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AieDUQgHgHgFgJQgDgGABgJQgIARgVANQgIAGgMACQgTADgEgNQgNgZAegqIgMALQgaAWgLgBIgBABQgMABgJgZQgJgaAPgPIAAAAIAfgdIAlgkIgLgGIgBgBIgNgMQgFgFgEgJQgCgDAAgJQgJgQAegVIABAAQAPgNAZATIAAAAIAKAKQASgmAegUIABgBIAIADIAEgBIALACIAFgDQA6g3BBgcQBDgdBMgSQBPgTAuAOQADABACAEQACADgBADQgBAEgEACIgDABIgBgFQgDgLgSgEIAAAEQAAAHACAFQgogGg7AOQhLAShBAcQg8Abg1AxIAEABQAOAGAeAUIAFADIACgCQBTgvBggZQBOgVA1AFIADASQg0gFhOAVQhdAYhRAuIgBAAIAAAEQAFAOgVAbQgQAVgMAKIAAADQgFAVAAADQAEAFgGAeIgGAiIgBABQgBASgKARQgMAVgUAOQgFAEgFAAQgIAAgIgJgAiSCaIgBABQgKAXADAIQADAGAFAGQAEAEADgBQAQgLAKgPIAAAAIgBAAQAIgOABgNIAAgCIAHgiIgBgBQAFgTgBgEQgDgFAGgfQAFgYgGgOQgHgOgSgIIAAAAQgWgNgWAPIgLAIQgEABgDAAIgCgBIgBAAQgDACgDgDIgUgQQgPgLgIAEQgMAJAAAEIAAAEIACAHIAGAKIALAKIAAABIAPAGIAAABQADAAADACIABAAIADABIABgBQAHAGAHACIgCABQgEAGgDACQgCADgKgBIgCABIgFADQgGADgBAEIgJAJIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAABQAAAAAAABIgVAUIgdAdIAAAAIABAAQgGAHAEANQAEALAEADQAHgCASgQQAWgTAKgLIAGgIQgHgIgFgIQgBgDABgCQAKAHAZANQAxAaAVgFIgDAHQgCADgDAAQgFACgFgBIgKAXgAjWCXQgVAeAGASQACACAHgBQAIgBAEgDQASgMAGgOQALgdAIgPQgHgDgIgCIgLgGQgFAMgSAYgAhtgZQAWAMAJARQAEAJABAMIANgRQAOgQgCgHQgCgEABgDQgJgPgegQIgRgIIgEACIgPgHQgGAAgEACQgVAPgOAbQAQgKAQAAQAOAAAOAHgAEkhtIgJgCIgBgSIANACQAEABACADQACADgBAEQAAADgDACIgFACIgCAAgAEFjIIAAgEIACAAIAAAFIgCgBg");
	this.shape_130.setTransform(-8.3,-2.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#758A51").s().p("AClBqQgBAAgBgEIgBgIIAJACQgBAGgCADQAAAAAAABQAAAAgBAAQAAAAAAAAQgBABAAAAIgBgBgACdBRIgQgPQg3gqhBgcQhCghhJgDIgDABQgMADgNAIQABgLgEgIQgKgOgNgNQgLgKgPgHQAWgKAXgEQBGgDBDATQASAFAUAIIAYALQBGAiA8AxIAEgQIAGgSQAIgRAFAZQgEAFgFAOIgEAOIgDAIIgMA+IgOgOg");
	this.shape_131.setTransform(1.5,-24.1);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#526139").s().p("AAQAiQABgTgFgPQgFgOgIgLQgSgUgcgBQAXgTAZALQAPAFALAKQAUATACAYIgBACIAAAHQgIAhghANg");
	this.shape_132.setTransform(-19.4,-26.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B3E4E6").s().p("Ag/BdQgDgCgBgEQgGgfAHghQALgyAigrQAUgbAfADQAaAEAJAYQAEAMACANIAAAKIgFAYQgDAIgIAIIAAgKIADgWQAAgFgBgFIgBgBQgIgCgCAIQgEANAAAOQAAAKgJAHQgKAEgKgGQgMgIACgOQADgQAHgNQAEgKgFgHIgIAEQgNAPABAWQgNAKgEARIgDASIgFAZQgEAWgNAOIgKACIgDgCgAANA+IAAgCIgFABIAEgGQAFgGACgKIABgHIAUgCIAAAFIAAAEQAAALgBADQgEALgQAAQgEAAgCgCgAgHAHIACAGQAEAKAHAFQAEAHgEAHQgIAQgRABQgBgcANgYg");
	this.shape_133.setTransform(-26.5,-20.3);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AkLCDQgGgEgDgFQgFgJAAgJQgDgkALglQAJgfANgbQAMgZAXgRIASgNIAHgGQAHgIAJgHQAGgFAHgDIADgBQAIABAIgDQAGABAGgDIAIgDIAIgDIAQgEIAOgFQAigFAhAEQAwADAxAOIAQAFQAaAKAaANQAuAdAuAgIAXARIgEAOQg8gxhHgiIgXgLQgUgIgUgFQhBgThGADQgXAEgWAKQAPAHALAKQANANAJAOQAFAIgBALQANgIAMgDIADgBQBHADBEAhQBBAcA3AqIAQAPIANAOIAAABIgJgCQg4glg+ghQhCgihHgNQgMgCgNABIgEACIgYAJQgDASgIAOQgGALgKAIIgMAHQgLAGgLAAIgDAAIgEAGIgDAEIgCAFIgCACIgEACQACAHgCAIQgEAMgHAJQgIAJgLAAIgTABIgIgDIgDgEIgLACQgHAAgBALQgBAGgCAGQgFAJgLAEIgKABQgIAAgHgEgAjcgtQgiArgLAyQgHAhAGAfQABAEADACIADACIAKgCQANgOAEgWIAFgZIADgSQAEgTANgKQgBgUAPgPIAIgEQAFAHgEAKQgHAMgDAPQgCAQAMAIQAKAGAKgEQAJgHAAgMQAAgOAEgLQACgIAIACIABABQABAFAAADIgDAWIAAAMQAIgIADgKIAFgWIAAgKQgCgNgEgMQgJgYgagEIgGgBQgcAAgTAZgAi4BXQACACAEAAQAQAAAEgLQABgDAAgLIAAgEIAAgFIgUACIgBAHQgCAKgFAGIgEAGIAFgBgAjaBUQARgBAKgQQAEgHgEgHQgJgFgEgKIgCgGQgNAYABAcgAiwhVQAdABASAUQAKALAEAOQAGARgBATIgJAXQAhgNAIgfIgBgHIABgCQgBgagUgTQgLgKgPgFQgKgEgKAAQgQAAgPAMgAEMAMIAEgMIAKAKIAAABIgKADIgEgCg");
	this.shape_134.setTransform(-6.6,-22.8);

	this.instance_2 = new lib.CUP_34_hand_01("synched",0);
	this.instance_2.setTransform(-18.6,25.5,1,1,0,0,0,1.7,-9);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#526139").s().p("AAhAwQgmgKgpgRQgggNACgIIAAAAQAIgTAKgWIAAgBQAIgNAUAIIAAAAIABAAIBoAiQACAGAAAHQAAAOgIAZQgFAMgPAAQgHAAgJgDg");
	this.shape_135.setTransform(4.6,42.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#758A51").s().p("AiUFBIDGqAQgDgIAAgCIAAgDQAAghARAdQAIAOAWA1QAGANAaApQAXAmAAADIgGAGIgGgHIgMgSQgEACgBADIiwIag");
	this.shape_136.setTransform(18,3.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("Ag5GIQgpgLgqgRQg2gWANgbIAAAAQAIgUALgXIAAAAQALgbAfAIIDHqBQACgEADgCQAEgCAEABIACACIAAACQAAADAEAIIjHJ/IBcAeICxoaQABgEADgCIANATIiyIZQADAJAAAOIAAAAQAAARgJAcQgFAbgdAAQgKAAgOgEgAiQEZIAAAAQgLAWgHATIAAAAQgDALAgAMQAqARAnALQAdAIAHgSQAIgYAAgOQAAgKgCgGIhqghIAAgBIgBAAQgHgDgGAAQgKAAgEAJg");
	this.shape_137.setTransform(13.3,9.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#758A51").s().p("AgJAIQgDgFAAgDQAAgLAMgBQAOAAgBAMQAAANgNAAQgFAAgEgFg");
	this.shape_138.setTransform(18.5,-19.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#758A51").s().p("ACaGoIAEgMIgDgFIghgPQgvgWgsgeQgngbgkgfQgigfgbghQgbghgUgmQgUglgOgoQgMgmgHgpQgFgsADgsQACggAFgeQAPhpAohjIAbhDQApAfAuARIABAFIguBsQgJAWgGAXQgJAfgGAhQgHAnABArQABAwANAsQAOAtAXAoQAZAsAjAhQAbAdAfAXQAkAaAlAVIA4AcIADAAIADAAIADgCIACgDIACABQAFgFAFgCQgDAHgRBMQgLA4gSAAQgFAAgBgHg");
	this.shape_139.setTransform(4.5,-50.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B3E4E6").s().p("AgeDTQgugFgYgnIgEgHQgJgcACgbQAEgxAIgxQAIgyAOg0QAFgUAHgSQAKgYAQgTQAcgiArAAQAQgBANAKQAJAHABALQABAMgGALQgEAJgFAJQghAygZA4QgHgBgGACQgKADgIAGQgDABgBADIABAFIBIABIACADIAIANQADADACAGIABALQACARgHAQIgJgFQgigQghANIAAgBIgFADIgDAJIANAAIARACQATgCASAKQAFAEADAGQAJARgEAVIgCAWQgBARgJAPQgDAFgEADQgYAPgXgMIgDgJQgJgXAHgXIgEgDIgJACIgGAOQgBAHABAHIAGAdQACALAJAGQAJAGALgBQAOAAAOgEQgUANgZAAIgEAAgABFCNIgIgKIABg9IABgDQAHgXACgXIAAgLIASALIACACQANAKAEARQAEAUgBAUQgBAQgEAPQgEAMgJAJg");
	this.shape_140.setTransform(8.4,-119.6);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#526139").s().p("AAYBBQghgFghgOQgYgLgVgRQgOgMAGgQQAHgXAQgSIAMgPQAGAUALASQAKAPAQAHIAeAKQAmALAlgOIAAABIAFgBIABgCIADgFQADAbgOAZQgFAJgMAGQgOAGgPAAIgQgCg");
	this.shape_141.setTransform(1.8,-98.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("ACjKgQiCg2hhhiQgWgVgTgWQgcgigVgmQgVgmgNgpQgNgqgGgqQgHguACgtQACgxAKgwQAKg1AQgwQASg4AXg1IAQgkQgHgIgGgKQgDgEABgFQADgTAIgRQAKgVAOgTQAHgLALgHIACgBQgBgOABgPQAFguAHgsQAJg3AOg1QALgqAXgjQAUgjAngMQAugPAaAUQAWAOgCAZQgBAbgPAWQgQAWgNAYIgcAyQAQADANAFIAJAHQAHAHAFAJQAFgBAEABQANAFAMAJQALAHAHAKQAKAOABATIABAQQAAATgCAVQgDAXgSAQQgFAFgIACIgKACQgNAAgMgFIgFAJIgGALIAAAAIADABIgBAGQAAAHAGATQgEAagPAYQgOAXgaAMIgWAIIgZAHIgFAIIgYA3QgKAXgIAXQgNApgMAtQgHAdgDAfQgEAxAIAwQAIAoAQAlQASArAcAjQAdAnAmAfQAgAYAjAWQAmAXAnATIAFAEIABAEIgBADIgCADIgDACIgDAAIgEAAIg3gcQglgVgkgaQgfgXgegdQggghgZgsQgXgogOgtQgNgugBgwQgBgrAHgnQAGghAIgfQAHgXAJgUIAuhsIgBgFQgugSgqgeIgbBDQgoBjgPBnQgEAegDAgQgDAsAGAsQAGArANAmQAOAoATAlQAVAmAbAhQAbAhAiAfQAiAfApAbQAsAeAvAWIAhAPIADAFIgEAMIgGgBgAhVkUQgQASgHAXQgFARANAMQAVASAZAKQAhAOAhAGQAXAEAWgJQALgFAGgKQANgZgCgdIgDAFIgBAEIgFABIAAgBIAAAAQgmAOgmgLIgdgMQgRgHgJgOQgMgTgFgTIgNAPgABWqLQguAAgcAiQgOATgJAYQgHASgFAUQgOA0gJA0QgHAxgEAxQgCAbAJAcIAEAHQAXAnAsAFQAbACAZgPQgOAEgQAAQgLABgKgGQgJgGgCgLIgFgdQgCgHACgHIAFgOIAKgCIADADQgGAXAIAXIADAJQAaAMAXgPQAFgDADgFQAJgPABgRIACgWQADgVgJgRQgCgGgGgEQgSgKgUACIgRgCIgOAAIAEgJIAEgDIABABQAjgNAhAQIAKAFQAHgRgCgQIgCgLQgBgGgEgFIgIgNIgCgDIhJgBIgCgFQACgDACgBQAJgGAKgDQAGgCAHABQAag4AhgyQAGgJAEgJQAFgLgBgMQgBgLgIgHQgNgJgPAAIgBAAgAB+miQgCAXgHAXIgCADIgBA9IAJAKIAZABQAIgJAEgMQAFgPABgQQABgUgEgUQgEgSgNgJIgCgCIgSgLIAAALg");
	this.shape_142.setTransform(3,-75.5);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#526139").s().p("AgNBbQgNgDgNgFIAAAAQgOgHgPgJIgNgJQATgDARgKQAZgIASgTQAKgMAIgMQAIgJAEgXIACgIQgDgFAAgEIgBgjQAJADAKAFIAAAAQAKAGAOAPIAAAAQAMAOABAFIgCAPIAAAAIAAADIgBAFIAAABQgEASgJAQQgMAWgSAUIgUASIgBACQgIAIgHABIAAACQgEACgFAAIgEAAg");
	this.shape_143.setTransform(-48.5,-49.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B3E4E6").s().p("AAXCoQgKAAgNgDQgMgEgDgDQgCgDgEgBIADgGIABAAIACgJIAEACIAAAAQAMAIARgEQAQgEAPgSQAOgRAEgUIgGgEQgFAKgMALIgJAIIAAABQgLAMgLAEQgGABgFgBQgFgCgFgHQgCgEABgEQACgfAOgXIAEgDQACABAKgFIAAAAIAFgCQAKAAAJACQAJgDARAHQAWALAEALQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAQACgDgBgEQgDgVghgKQgTgFgVAAQgDAAgKAEIABAAIgEABIgBgBIgCgCIgIgHIglgiIgEgEQgVgWgSgXQgRgXgBgGIAAgDIgHgSIgDgRQACgkAHgCQAEABAGgEIABgBIABAAQAjABAtBBQA+BgAvAxIADAEIADACIAEAEQADABABADIABAFQAAAcgEALIgDAGIgHAOQgHAMgHAGIgCACQgNANgPAGIgPAFQgLACgLAAIAAAAgAhXCLQgOgHgHgHIgEgGQgMgeAVgZQAFAQAMAPQARAVAdAFIAHADIABAHQgBAFgBAFIAAAAQgDAFgCABIgDABIgLADQgKgBgYgLgAhABcQgPgNgHgUIABgIIgGgGIgBgFQgGgdAYgNQALABALACQAAAAABAAQAAAAABAAQABABAAAAQABAAAAABQANAMAPAMQAMAJADAKIgagRIgHAAIgDAEQAGAJAIAIQAGAHAHADIgDAPIgEAEIgJAZQgUAAgOgMg");
	this.shape_144.setTransform(-59,-62.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#758A51").s().p("AgtAcIANgOQAVgTALgZQAHgPAEgOIAAAAIAjAUIgLBjIhQggg");
	this.shape_145.setTransform(-40.3,-43.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("ABKC/IgFAEIAAAAIgDACIgBAAQgOAIgPgDIAAAAQgOgDgQgGIAAAAQgNgHgQgKIgYgRIgBgBIAAAAIgBgBIgLgMQgCgCAAgEIABgCQgRgFgDgIIgBgCIgGABIgLADIgDABQgMAAgfgPQgfgPgFgQIgEgNQAAgUAGgTQAFgSAPgIQgGgcAUgYQAGgHAHgEQAEgCAEgBIgIgLIgUgcQgMgTgBgHIgGgRIgBgDIgDgRIAAgDQAEg5AXACQAFgFAHAAQArgBA0BMQA4BWAsAyQADgCAEAAQAEAAACADIACACIACAAQADgBAEABQAMADANAHIAAAAQANAFAQASIAAAAQASAVgBAIIAAABIgBASIgBADIADACIAAAAIAUALIALAGIgDAUIgjgUIAAgBQgEAPgIAPQgMAYgVAWIgNAOIBSAgIgCATIhggmgAAoC4QAHABAHgDIgBgBQAJgCAHgHIACgCIATgTQATgTALgWQAJgSAFgTIAAAAIABgFIAAgDIAAAAIABgPQgBgFgLgOIAAAAIAAAAQgOgPgLgHIABABQgKgGgJgCIAAAjQAAAEADAEIgBAJQgFAXgIAJQgHAOgMAMQgTATgZAIQgPAKgSADIANAJQANAJAOAGIgBAAQAOAGANACgAhDBpIAAAAIgDAGQADABACADQADAEANADQAOAEAKAAQAMAAAKgDIANgEQAQgHAMgNIACgCQAIgGAGgMIAHgNIADgGQAEgMAAgbIgBgGQAAgDgEAAIgEgEIgDgDIgDgEQgvgxg+hfQgthCgjgBIgBABIgBAAQgGAEgEAAQgHABgCAkIADASIAHASIAAADQABAFARAXQASAXAVAXIAEAEIAnAkIAIAHIACABIACACIADgCIAAAAQAJgEADABQAUAAASAFQAhAHADAVQABAEgCADQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQgDgKgXgLQgQgIgHADQgKgBgKAAIgFACIAAAAQgKAEgCAAIgEACQgQAYgCAeQgBAFACAEQAFAHAHABQAFACAHgCQALgDAKgNIABAAIAIgIQAKgMAFgJIAGAEQgEATgNARQgOATgQADQgRAFgOgIIAAAAIgEgDIgCAJgAiiBNIAEAGQAHAGAOAHQAYAMAKABIALgEIADAAQADgBACgFIAAgBIAAAAQACgFAAgEIgBgHIgHgDQgdgGgRgVQgMgPgFgQQgVAaAMAegAiOgBIABAEIAGAGIgBAHQAHAVAPAMQAOAMAUAAIAJgZIAEgEIADgPQgHgDgGgGQgIgIgGgHIADgEIAHgBIAaAPQgDgIgMgJQgPgLgNgNQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAQgLgEgLgCQgYAPAGAdgAiUjfIAAgBIAAABIAAAAIAAAAg");
	this.shape_146.setTransform(-54,-58.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#758A51").s().p("AEMC0IgQgNIgHgEQhRgqhUgoQAcghAHgnQBeAoBgAjQAFgCAIACIABAAIADAAIgCALQgEAbgGAUIgPAsIgEAMIgXgSgAlBhfIAMhmQCGBLCKBBIAAACQgKAtgUAVQh7g1iDg1g");
	this.shape_147.setTransform(-4.5,-27.8);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373D48").s().p("AAnA8IgBAAIhvg0QAUgYAKgsQA5AbA8AaIAAACQgGAjgbAeIAAAAIgBABIgBgBg");
	this.shape_148.setTransform(-2.2,-26.7);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AEdDSQhrg6hzg2IgBAAIgBgBIgHgEIABABIh6g6IAAAAIgBAAQh6g1iDg1IACgTQCDA1B6A1QAVgVAKgsIAAgDQiLhBiGhLIADgTQEqClE1ByIALALIAJAIIgBACIgBAAQgJgCgEACQhggjhegoQgHAngdAhQBVAoBQAqIAIAEIAPANIAYASIgDAHIgCAAIgDgBgAgwAZIBvA0IAAABIACAAIABgBIABAAIgBAAQAbgeAGgkIAAgDQg8gYg5gbQgKArgUAZg");
	this.shape_149.setTransform(-4.7,-28.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#526139").s().p("ABDAyIgBgCIAFAAIgMgQIgBgHIgEAAIAAAAQgzg4hUgBIgBAGIAOAFIgcAIQAKgmAfgWQBSAAA8A8IAFACQAHAVgDAYIgDgDQABALgJAJIgFAFIADAEIgIAOQgBgHgHgRg");
	this.shape_150.setTransform(-1.6,34.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#758A51").s().p("AigDmIgwgOQAdhlAvhbQA5hrBehNIBHgyIgIgKIgGgKIAAgDIAAAAQgDgEAAgDQAAgEAGgDQAGgEAIAEIABACIAAAEIgBAJIgEADIgBAAIAEACIAKAIQAbAWAjAvIAWAeIALAQQAMATAAAEQABALgOAAIgTgXIgNgRQgRAIgPALQhUA9hDBMQhNBYgJB0QgbgLgcgJg");
	this.shape_151.setTransform(15.7,3.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AhFFEQgDhWhPgYIgfgMIgNAGIgOAFIgNADIgHAAIgGgCIgDgCQgHgNAGgOQAGgUAMgRQAKgPAQgDQAKgDALgBQAPhkAwhXQA7hsBdhOQAoghAqgdIAIAKIhHAyQheBNg5BtQgvBagdBkIAwAOQAcAJAbALQAJh0BLhWQBFhOBUg9QAPgLARgIIANARQhHApg+A6Qg9A6glBLQgfA7ADBAIgCAEIAMAKIAIAKIAHAKIAEAJIgLgGQAEAWgFAXQgFAYgIAZQgDAJgJAHIgPAGgAhJDyIABAIIAMAQIgFAAIABACQAHARABAHIAIgOIgDgEIAFgGQAJgIgBgLIADACQADgYgHgXIgFgBQg8g9hUAAQgfAXgKAmIAcgIIgOgGIABgFQBVABA0A6IAAgBgADjjQIAGgDIAJACIABAOIgFADIgLgQgACFk8IAOgJIAEAIIgCAFIgGAEIgKgIg");
	this.shape_152.setTransform(11.6,12.4);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#758A51").s().p("AjBAsQgWgigCglIACgTIABAAQAkAkA6AAIABAAQAPAMAVAAIALgBIABABQATAKAkAAQAiAAAsgXQARgJAJgIQAUgJAVgRQAVgSALgMIgKgSQAHgPAMALQAQAMAYAxIAGAOIABADIgBAIIgDACIgBAAIgEABIgLgPIgJAMQgVAfgUAWQhMBPh0AAQhoAAgshEg");
	this.shape_153.setTransform(7,-0.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#B3E4E6").s().p("Ag8BwIABgCQgBgIgGgBIgGAAIgBgBIgFgLIAFABQAagBAXgfIgCgDQgOAKgfABIgEABIgDAAIAAgBQgcgBgMgJQgJgHAAgNIAAgGIgDgIQAAgcArgxQAyg8A7ABIAPABQAGAEAXAEQAjAFAIAXQAOAsAAALQABAKgMALQgBgUgRgVQgXgfgqAAIgJABQgDACAAAGQATAJASAKQAkAXAAAWQAAAdgJAOQgPAZgpAEQAKgbAAgVQAAgPgUgSQgRgTgcgHIgHAHIgHAKQATADAPAIQAYAMAAAZQAAARgNAbQgCACAAAFIAAAAQgMAXgQAHIgHgFQgFAAgEAFQgCACAAACQgHAAgGgDgAh0gHIABAEQABgGADgGIgFAIgABFBYQAUgMAMgaQAEgKADgLQAOgBAIgIIABADQAAAVgHAOQgNAeglAAIgFAAg");
	this.shape_154.setTransform(3.1,-13.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#526139").s().p("AgUAiIgLgPIAAgBQAAgSgIADIgBgHQAAgJALgSQAKgRAMgJIAIgIQgMAcAAAgQAAAKASAWQANAPAQAHQAAAHAFAKQgngFgWgbg");
	this.shape_155.setTransform(-10.9,-10.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AjFCAQgcgrAAgqQAAgLAEgdIABgEQgIgPAAgQIADgNIACgNQAAgXA3gqQAhgaANACQAXgTAggPQAqgVAfgBQAaAAAHALQAuAEAVApQANAbAAAfQABAPgEANIgBABIADACQAGAIAAAHQAAAdgKATIARgIQAKgHAYgcQARgSABATQgNgLgGAPIAKATQgLAMgVAPQgWASgTAJQgKAHgQAJQgtAaghAAQgkAAgTgLIgBAAIgMABQgUAAgPgPIgBAAQg7AAgjgjIgBgBIAAABIgCATQACAmAWAjQAsBEBoAAQBzAABMhQQAVgVAVghIAJgMIALAOIAEAAQgFAKgIANQgTAfgeAaQhTBKhtAAQh1AAgzhMgAggA7QAKACAMAAQAaAAAhgOIgDgDQgYAAgHgIIgCgFIgJABIgNgBQgKARgNALgAhjAiIABABIAGAAQAHACAAAHIgBACQAGADAHABQAAgCADgDQADgFAGAAIAGAGQAQgIAMgWIAAgBQAAgFAEgCQANgYAAgRQAAgagagOQgPgIgSgCIAGgLIAHgGQAcAGATATQASAUAAAQQAAAUgJAZQAogEAPgWQAJgPAAgeQAAgXgkgWQgSgLgQgIQAAgHACgCIAHAAQAqAAAYAeQARAVAAAUQAMgLAAgKQAAgLgPgsQgIgXgjgFQgWgEgHgEIgNgBQg8AAgzA7QgrAxAAAeIAEAJIgBAFQAAANAJAHQAMAIAcAAIgBACIABAAIAEAAIADgCQAgAAAOgJIABAEQgXAdgZAAIgGAAIAFAKgAjGgMIAAACIALAMQAYAbAoAFQgFgJgBgIQgPgHgNgMQgVgWAAgMQAAghAOgbIgJAHQgMAKgLARQgLARAAAKIACAJIADgBQAEAAAAAPgABSgjQgDALgEALQgLAYgVALIAFABQAlAAANgcQAHgPAAgUIAAgDQgJAHgOABgADeAXIAEACQADADAAAEIAAAFIgHgOgAiOhJIAFgIQgDAGgBAGIgBgEg");
	this.shape_156.setTransform(5.7,-7.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373D48").s().p("AhOAVQA3gigJgqQAwATA9ANQALApgoAmQhDgNg7gWg");
	this.shape_157.setTransform(-3.7,-9.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#758A51").s().p("AFECVIgDgHIgDgKQh6AChmgPIgUgDQAigmgHgrQBUAQBmAFIgIgTIgBgEIAAgEIAJAJIAKAPQAKARAMAdQAYA1AAALQAAAHgIABQgEAAgHgWgAlWiIIAEAAIAEAAIAFABIAMgCQAcgFAYgKIALgGIAMgLIABAAQA5BpCHA5IABACQAPAlg4AhQgDACgBACQilhDhUiKg");
	this.shape_158.setTransform(-4.1,-15.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#526139").s().p("AgwA8IABACQgIgDgEgFQgJgJgHgNIAAAAQgGgNgGgRIgFgNQAPAJAUACQAXAIAZgEQAPgCAOgEQALgCARgPIAGgGQAAgFADgDIAUgcQAFAHAFALIgBgBQAFALABAVQABAQgCAFQgEAFgGAGIgCACIgEADIAAABQgOALgRAIQgXALgXAEIgZACIgDAAIgFAAQgHAAgGgCg");
	this.shape_159.setTransform(-35.9,-36.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#B3E4E6").s().p("AABCvIgMgFIgSgNQgIgGgIgLQgIgLAAgEQAAgEgCgCIAGgDIAHgGIACAFIgBAAQAGAOAQAIQAPAGATgEQAVgFAOgNIgCgHQgJAEgQACIgLABIgBAAQgNADgKgEQgGgDgEgEQgEgFABgJQABgEADgEQATgVAZgJIAEAAQABACAKADIAAAAIAFABQAIAGAGAHQAJAEAIAPQALAXgEAKIAEAAQAEgBACgDQAKgTgUgbQgLgPgQgOQgCgCgKgCIgDgCIAAgCIAAgCIgCgKIgJgzIgBgFQgDgfAAgcQABgdADgFIABgDIAGgRIAHgRQAXgaAHADQACADAHAAIABABIABAAQAaAWgFBPQgHBwAGBFIgBAEIACAFIAAAGQACABgBAEIgDAEQgQAVgJAHIgGADIgNAHQgNAEgJABIgDAAIgKABQgLAAgLgDgAhBBlIgDgBIgKgDQgHgIgLgXQgHgOgCgKIABgHQAIgfAfgFQgFAOAAATQABAbASAWIAEAGIgEAHIgHAGIgFACIgCgBgAgzArQgFgTAIgUIAEgEIgBgIIADgFQANgaAaADQAGAIAGAJQAAAAABABQAAAAAAABQABABAAAAQAAABAAABIAHAhQAEAPgEAKIgJgeIgGgEIgDABIAAAXQAAAIADAHIgJAKIgFAAIgWAOQgPgMgDgSg");
	this.shape_160.setTransform(-40.6,-55.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("ACtFrIAAAAIgjgGIgBAAIgCgBQkig3h5jNIgNgHIgDgCQgKgEgHgIQgJgLgIgOQgIgPgGgSIgIgaIAAgBIgBgBIgBgQQAAgEADgDIABgBQgJgOACgIIABgCIgGgDIgKgEIgCgCQgKgHgOgfQgPgfAGgQIAEgMQAMgQAQgLQAOgLAQADQANgbAdgGQAIgCAJABIAHACIABgNIACgiQABgVADgGIAGgSIABgDIAIgQIABgCQAkgqARAQIABAAQAGAAAFAEQAiAZgGBbQgGBoAEBCQADAAADACQACACABAFIAAACIACABQADABACAEQAHAJAGAOIAAAAQAGANABAZIAAAAQABAYgFAHIAAABIgJAKIgIAFIADADQBsDDGMAVIAIATQhmgFhUgQQAHArgiAmIAUADQBmAPB6gCIADAKIADAHIgEABIgjAAQhoAAhagNgAAGEvQA8AWBFANQAngmgLgrQg8gNgzgTQAKAqg4AkgAkEBYQBUCMClBDQABgCADgCQA2ghgPgnIgBgDQiFg4g5hpIgBgBIgMALIgLAGQgYALgcAFIgMACIgFgBIgEAAIgBAAIgDAAgAkKBIIADAAIAZgDQAZgEAXgKQARgJAOgLIAAAAIAEgEIACgCQAGgGAEgFQACgFgBgPQgBgVgFgLIABAAQgFgLgFgHIgUAcQgDADAAAGIgGAFQgRANgLACQgOAHgRACQgZADgXgJQgUgDgPgGIAFAMQAGARAGAOIAAgBQAHANAJAKQAEAFAIACIgBgCQAHAEALgBgAlLg/IgGADQACACgBAEQAAAEAJALQAIALAHAGIASANIAPAFQAPAEARgCIADAAQAJgBANgEIAMgHIAGgDQAKgHAQgVIADgEQABgEgDgBIAAgGIgBgFIAAgEQgFhFAHhyQAFhPgagWIgBAAIgBgBQgHAAgDgDQgGgDgXAaIgIARIgGARIgBADQgCAFgBAdQAAAcADAfIABAFIAIA1IACAKIABACIAAACIADACQAJACACACQARAOAKAPQAUAbgKATQgCADgDABIgEAAQADgKgLgXQgIgPgIgEQgGgHgIgGIgFgBIgBAAQgKgDgBgCIgEAAQgaAJgUAVQgDAEgBAEQAAAJAEAFQAEAEAFADQAKAEAQgDIABAAIALgBQAPgCAKgEIACAHQgOANgVAFQgWAEgPgGQgPgIgGgOIAAAAIgBgFIgHAGgAmDiQIAAAHQACAKAGAOQALAXAIAIIAKADIACABQADACAFgDIAHgGIAEgHIgEgGQgSgWgCgbQAAgTAGgQQgfAHgJAfgAlEjCIgDAFIABAIIgFAGQgHAUAEATQAEASAPAMIAVgOIAGAAIALgKQgEgHAAgIIgCgXIAGgBIAFAEIAKAeQADgKgEgPIgHgjQAAgBAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQgGgJgHgIIgFAAQgXAAgLAXgAFxEIIAEAAQAEAAACADQADADgBADQAAAEgCACIgKgPg");
	this.shape_161.setTransform(-12.3,-37.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#B3E4E6").s().p("AAJCOQgMgCgJgMIADgCIAEgFIACgGIAAgOIABgKIAGgCIAFACQAGAEAIgBQAMACALgFIABgBIAHgSQAEgJgFgFIgTASIgSgCQgCgQAFgQQACgJAEgIQAIgNANgDQAWgEAPAMIAAABQAOANgBASQgBARgFAQIAAAAIAAAAQAAAVgMAQQgKAPgOAFQgPAEgPAAIgPgBgAgyBzQgPgGgEgLQgEgKAEgNIAAAAIADgFIAJAAIAhAUIADAWQgDABgEAAQgHACgHAAIgIAAgAgZBDQgKgEgIgGQgLgJgEgOQgEgPAEgSIALABIAyAfQAAAUgIAUIgGAAQgIgCgGgEgAgpgQIAAAAQgRgTgQgUQgWgbABglQABgIAGgEIAQgLIAdAPQAMAmAdAcQAQAUAWASQAJAIAKAGQgHABgGACQgMAFgKAHQgGAEgEAGg");
	this.shape_162.setTransform(-35.1,-15.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#526139").s().p("AgrBKIgIgJQAlgIAMglIAHgbQAMgigOghIAcAMIAVAQIAAACQABAsgXAlQgJAPgPAKQgQANgWAAIgLgBg");
	this.shape_163.setTransform(-24.8,-6.3);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373D48").s().p("AgrAJIgJgXQAkgEAdgSIAWgOIAKAJIAAAAIADAHQADAKAAALQABAMACAIQgvAhgyAKQAJgWgJgTg");
	this.shape_164.setTransform(3.5,-2.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#758A51").s().p("AhzCJQgygHgxgTIAQgVQARgaAFgeIAUAJQAaAMAcAHQAZAGAbACIARAEIAGAKQAFAJADAKIABAGIgCANIgGAQIgVADIgRABQgaAAgZgFgABtBKIgBgOIgCgNQgEgRgOgKIAMgMQAMgLALgPQAfgoAUgwIgFgTIgDgQIAMAYIAgBhIACAGIACAMQADAHgFAIIgDABIgFgOIgEgJIgFgKIgKAPQggAugsAlIAAgFg");
	this.shape_165.setTransform(-0.3,-10.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AASC3QgigFgigLIgygRQgUANgYAAIgTgBIgGgEQgKgKgIgKQgIgCgLAAQgOAAgLgIQgGgFgFgHIgDgFIgHgBQgUACgRgLQgHgFgFgKQgEgIgBgIQAAgMADgLQABgHAEgFIAIgHQgLgPADgQQACgLADgJQADgIAFgHQgjgdgJgsIAAgFIgCgSQgEgYASgNIAHgEQAIgGAIgDIArASIADACQAIATAKASQAFAJAHAJQASAWAUASQALAKANAJIAWAPIAGAFIAAAIIATACQAeAGAYATQAHAFABAHQACAMABAMQAjATAlAKQAZAGAaACQAgABAggKQAWgHASgNQAUgOAQgRQALgMALgMQALgPAJgRIAUgjIALgXIAGgDIAFATQgUAwgfAmQgLAPgMANIgMAMQAOAKAEARIACANIABAOIAAAFQAsglAggwIAKgPIAFAKIAEAJQgTAfgaAcQgYAagbAVQgaASgcALQgTAJgTAHQgeAJggABIgTAAQgXAAgXgCgAhFB0IgQAVQAxATAwAHQAhAGAjgCIAVgDIAGgQIACgNIgBgGQgDgKgFgJIgGgKIgRgEQgbgCgZgGQgagHgagMIgUgJQgFAegRAagAC1BIQgfASgkAEIAJAZQAJAUgJAWQA1gLAughQgCgKgBgLQAAgLgDgLIgCgHIgBAAIAAAAIgKgIIgWANgAhsA+IgJAcQgMAmgmAHIAJAJQAbAEAYgQQAOgKAJgPQAXgmgBgtIAAgBIgUgRIgcgJQANAegLAjgAjdBDIgBAKIAAAOIgCAHIgEAEIgDADQAJALAOACQAWADAXgGQAOgFAKgOQAMgRABgUIAAgBIgBABQAFgRABgQQABgTgOgLIAAAAQgPgNgWAEQgNAEgIAKQgEAIgCAJQgFAQACARIASACIATgTQAFAFgEAKIgHASIgBABQgLAEgMgCQgIABgGgEIgFgCgAkdAuIgCAGIgBAAIABAAQgFAMAEAKQAEAMAPAFQAKACAMgEQAEABADgCIgDgWIghgUgAkVAKQAEAOALAJQAIAGAKAEQAGAEAIADIAGgBQAKgTAAgVIg0gdIgLgBQgEASAEANgAkDgoIA0AiQAEgGAGgEQAKgIAMgFQAGgDAHgBQgKgGgJgIQgWgSgSgTQgdgdgMgmIgdgPIgQALQgGAFgBAHQgBAlAWAbQAQAUASATIgBAAg");
	this.shape_166.setTransform(-13.2,-13.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#B3E4E6").s().p("AgrBYQgEg5glgrQgxg7A3g2IAkgJQBbgJAmBUQAYA1gDA2QgBAWgRAPQAIhSguhDIgMgQIgCAEQAqBTgNBXQgCANgNAGQgMAEgLAHQAVg0gPg5QgIgagPgaIgGAGQAaBKgPBMQgCALgMAGIgBAAQgqAAgDgwg");
	this.shape_167.setTransform(10.1,-54.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#526139").s().p("Ag4AoQAAhyBxgNIAAACQhJA7APBeIAEgHIAEgKIABgOIABgEIAUAhQgLARgUAEIgLABQgrAAAAgwg");
	this.shape_168.setTransform(-2.8,-61.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#758A51").s().p("ADTD7IgDgRQhJAKhIgIQAKgQAIgQQAEgIACgJIAFgXIB5AHIADgTIALgeQAAAAABABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAOgCAPIgDASQgIAhAGAgIAEAUIgIAOgAihCgQhvhiBJiIQA7hwBghTQgLAfADAhQABANAFAOQhDBHgdBbQgjBtBoAlIAUAHIADAGIgFATQgDAJgEAIIgNAYIgEAFQgugOgkgig");
	this.shape_169.setTransform(-5.4,-36.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373D48").s().p("AhBAYQASgeALglQAyAHAzAPQADAVgOAVIgPAXg");
	this.shape_170.setTransform(-4.9,-17.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAEEuQhggKhUg1QhSgxgGhfQgDgvARgqQAkhSA4hIQA9hOBRg5QA+guA2AqQAdACAhAJQAUAHARAQQAIAHABANQAsAwAMBAQAKA5gnAeQgJAHgIgDIgLAPQgIAIgJAHIgJACIgTgCQgZAYgjgNQgggLAAghQAAgtgTgoIgGgFQgJALgPAHQgjAPgmgQIgBABIgFgHQg2A6giBFQgoBVBJAwQAbARAgAIQA6AQA8AOIgEgGICFAHIgDASIh5gHIgFAXQgCAJgEAIQgIAQgKAQQBJAIBJgKIACARQgsAGgtAAQgvAAgwgGgAhTEJIBoAUIAPgYQAOgVgDgXQgxgOg0gHQgLAlgSAggAjdgXQhJCIBuBiQAlAiAuAOIADgFIAOgYQAEgIACgJIAFgTIgDgGIgUgHQhoglAjhvQAdhZBDhHQgEgOgBgNQgDghALgfQhgBTg7BwgABakLIglAIQg1A2AvA7QAlAtAEA6QADAuAugBQALgDADgLQAPhNgbhLIAGgGQAQAaAHAbQAPA5gVA0QAMgGAMgFQANgFACgNQANhXgqhVIABgFIAMARQAuBEgHBSQAQgOABgWQADg5gXg0QgjhMhOAAIgSABgAg0ihQAAA2A0gHQAVgEAMgRIgUghIgBAEIgCAOIgDAKIgHAHQgNhgBJg7IAAgCQhxANABB0gABKkcIgBAAQgCAGADgGgADJDeIADgSQAIABAEADQAEADgBAEQgBADgGADQgEABgEAAIgDAAg");
	this.shape_171.setTransform(-3.1,-41.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},1).to({state:[{t:this.shape_112}]},1).to({state:[]},1).to({state:[{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},1).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},1).to({state:[]},1).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},1).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},40).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},9).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},8).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_136},{t:this.shape_137},{t:this.shape_135}]},1).to({state:[{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150}]},1).to({state:[{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157}]},1).to({state:[{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162}]},1).to({state:[{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167}]},1).wait(1));

	// Layer 1
	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#526139").s().p("AgNBAQgLgDgLgHIgFgDIgFgDQgIgDgKgJQgMgKgCgDIAAgJQABgRAEgPIABgCQAKgWAFgGQAIgKANgIIABAAQAEAIANAMIAIAIIAGAEIABABQANANAPAGQAPAGAQAAIACAAIgBADIADgBIAGgCIAFgCQAEAAACACIgBAEIgHAXQgEAMgQAeIAAAAIgDAAQgWAGgJAAQgKAAgTgDgAgpguIAAAAIAAAAIAAgBg");
	this.shape_172.setTransform(-14.9,20);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AjLELIgMgIIgHgFQgCgDgHgDIgDgFIAAAAIgCgCIgCgCIAAAAQgGgIAAgGQAAgMAGgWQAEgkAbgYIABgDQAIgNANABIACAAQAGgBACACIAJgQIACgBIAAACQA6iDBfhzQApg1AmggIADgDQAyg/A/ANQAaAFARASQASAQAAATQAAAig0AZIgEACQgUATgsAtQhRBTgIAMQgsBBgzBkIgCAIQAHAFABALQgBAMgOAiQgJAYgLALIgCAEQgGALgWAEIgEAAIgMAAQgjAAgigSgAi5CEQgNAIgIAKQgFAGgLAWIAAACQgFAPAAATIAAAJQACADALAKQALAJAHADIAGADIAEADQAMAHALADQAVADAKAAQAIAAAXgGIADAAIAAAAQAQgeAEgMIAHgZIAAgEQgBgCgFAAIgEACIgHACIgCABIABgDIgCAAQgQAAgQgGQgPgGgOgNIgBgBIgGgEIgJgIQgMgMgFgIIAAAAIAAAAgAihCHIAAACIABABQADAFAOAKQAOAKANAEIAAABQAQAHAJAAIAKgCIABAAQAFgPAIgOIADgEIAAgEQAeg8AFgMIAdgsIAiguQAhgtBOhJIAWgVIABgBQAQgMAKgEQAmgaAAgTQAAgPgRgMQgVgQgiAAQgiAAgaAUIAAACQAAAFhDBPQhOBdgeArQgTAagmBTQgMAbgNAWIgBgBQgDAAAAAGgAi/CYIAAgBIAAABIAAAAg");

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#758A51").s().p("AiXDYIAAgBQgNgEgOgJQgOgLgDgEIgBgBIAAgCQAAgHAEABQANgWAMgaQAmhWATgaQAegpBQhdQBBhOAAgGIAAgBQAagVAiAAQAiAAAVAQQARAMAAAPQAAATgmAaQgKAEgQANIgBAAIgWAVQhOBJggArIghAwIgfAtQgFAMgeA7IAAAEIgDAEQgIAOgFAPIgBAAIgKACQgJAAgQgHg");
	this.shape_174.setTransform(3.5,-4.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#758A51").s().p("ABNDbIAVACQgEAIgFAAQgLAAgBgKgABRDIQhWgvgqghQhKg7AAg3QAAgyA/hYQAcgpAdglIADgGQAAgCAAgBQAAgBAAgBQAAAAgBAAQAAAAgBABIACgHQARAGAiBXIgBAEQgFACgGAHQgUASgZAwQgsBMAAAdQAAABAIAHIAdgtQALAXAsAjQAjAbAbAMIAQAGIgNA/QgDAUgEANIgVgMg");
	this.shape_175.setTransform(15.5,0.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("ABjDmIgUgCQhLgMhGg/QhThLAAhFQgJgfA8hhQA8hhAYgKQATgJgCARIgBAHQAAgBAAAAQABAAAAAAQAAABAAABQABABAAACIgEAGQgcAlgdApQg/BYAAAyQAAA3BKA7QArAhBVAvIAVAMIAMAGQADADgGABIgNgBgAB8B9IgRgGQgbgMgigbQgtgjgKgXIgdAtQgJgHAAgBQAAgdAshLQAagxATgSQAGgGAGgDQAGgDAFAAQACgCAAAHQAAAHgrBLIgVAlQARANAvAuQBSA+ADAFQgBABgEACQgLAAgMgEg");
	this.shape_176.setTransform(15.3,-0.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#B3E4E6").s().p("AhMCrIAAAAIgBABIgCAHIAAABIABACIALAMQgLAAgMgDIgOgGIgQgKIgDgCIAAAAQgDgGgGgGQgpgxgTg/QgFgPgCgOQgGglAGgmQADgOAFgNIAAAAIAJgVIAEgJIAAAAIAGgJIAAAAQAIgbAXgQQAMgIAOgGQATgIAVgFIADgBIAUgFQAogHAdgBQATAAAbAJIAKAFIA8AcQAfAPAOAKIAJAKQAIAPACANIgBARQgDAGgGAHIgaAoQgGAIgFAJIgFANIgCgZIgCACQAAgGgLgYQgMgXAAASIACASIADAUIAAAHIgBAAIAFAbIgFAjQgDANgFAIIAJgBIAHgEIAaAEQAUAFAGAKIAFAAIAAgEQAAgIgMgNQgJgKgIgEQAEgGAFgBIAVgiQAKAoAFAoQABALgCALIgFAbQgCAJgFAHQgGAKgLAFQgQAGgRgEIgCgBIgDAAQgfAAgvgkQgGAPALAOIASASQgTAUgbAGIgJABQgFACgIAAQgrAAgtgig");
	this.shape_177.setTransform(-12.9,30.1,0.402,0.402,52);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AgyDyIAAAAQgPgEgOgFQgXgIgWgLQgPgJgNgLIgRgQQgTgTgKgZQgLgdgKgfQgKghgFggQgLhEAjg9IAAgBQAFggAagUIAZgSQAWgRAYgJIAAAAIAZgIQANgHAZgEQAfgFAfAAQAVAAA5AdIA7AgQAmARATATQAJAKAGAKQAGAbAAAXIghA/QAQATALAXIAAABQADAFABAHQABAOADAMQADANAAAMQABALgCAMQgCAZgLAXIgOAWQgLAOgRAHQgeALgdgLIgagLQgMAagcAKQgHAEgIACQgMABgMAAIAAAAIgKgDQgRADgVABIgTAAgAAJDVQAIAAAFgDIAJgBQAbgGATgUIgSgSQgLgOAGgPQAvAkAfAAIADAAIACABQARAEAQgGQALgFAGgKQAFgHACgIIAFgbQACgLgBgMQgFgogKgoIgVAiQgFABgEAGQAIAEAJAKQAMAOAAAHIAAAEIgFAAQgGgJgUgGIgagEIgHAEIgJABQAFgIADgNIAFgiIgFgcIABAAIAAgHIgDgUIgCgSQAAgSAMAYQALAXAAAGIACgCIACAXIAFgLQAFgJAGgIIAagoQAGgHADgGIABgRQgCgNgIgOIgJgLQgOgKgfgPIg8gcIgKgFQgbgIgTAAQgdAAgoAIIgUAEIgDACQgVAEgTAJQgOAGgMAIQgXAQgIAaIAAAAIgGAJIAAAAIgEAJIgJAVIAAAAQgFANgDAPQgGAmAGAkQACAPAFAOQATA/ApAyQAGAFADAGIAAAAIADACIAQAKIAOAGQAMADALABIgLgNIgBgBIAAgBIACgIIABAAIAAgBQAtAjArAAgACNBAIABAAIgBAAg");
	this.shape_178.setTransform(-12.6,30,0.402,0.402,52);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#B3E4E6").s().p("AABBZQgOgCgPgGIgLgHQgWgOgQgVIgDgFIgBgCIgDgHIAAgGIAAgKIAFAGIAAAAIABABIADAAIAAgBIABAAQgKgTAFgSQAAgBAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIABgEQAGgKAKgFIAFAJQAFAGAGgBQgJgXADgMIABgBIgBgCQABgGAEgGQADgEAFgBIAHgBIALABQAEgBAFADQAOAGAOAIIgPAFQgBAAAAABQAAAAgBABQAAAAgBAAQAAAAAAAAQAAgDgDgFQgEgGgDAAIgCgBIAAACQADADAAAJIgBALIgDACIgBAEIAJgBIAMABIAMAGIAAgBIACABIAJADIAGADQAIACgJgHQgIgIgCAAIABAAIgKgEQADAAACgBIAJgCIASgGIAGgCIAHABQAGACAEAFIAEAFQACAGADAOIAEAbIABAEQABAKgCAIQgEAMgHAPIgEAHIgBACIgJAOIgIAJQgJAIgMAAIAAAAIgEABIgEABIgKABIAAABIgFAAIgGAAg");
	this.shape_179.setTransform(37.3,2.8,0.997,0.997,0,25.9,-154);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgaBgQgMgFgMgIIgWgOQgJgHgFgKIgFgIIgFgNIgDgUIAAgLIAAAAIACgHIAFgQIAAgEIABgBIADgJIADgGQAIgJALgDIgBgLQgCgNAIgKQAEgHAHgCIAKgDQALgCAKABIAJACIAKAEQACADAGACQADAAABADQAJAHAGAIIAdgGQAJACAKAFQAEAEACAFQAGAJADARIAHAbQAFAYgDAIQgDANgFAMQgFAKgEAEIgGAKIAAAAQgGAIgJAHIgJAIQgLAJgOgCIgBAAQgKACgKAAQgPAAgRgHgAhWAUIAAAGIADAHIABACIADAFQAQAVAWAOIALAHQAPAGAPACIAKAAIAAgBIAKgBIAEgBIAEgBIAAAAQAMAAAJgIIAIgJIAJgOIABgCIAEgHQAHgPAEgMQACgIgBgLIgBgDIgEgbQgDgOgCgGIgEgFQgEgFgGgCIgHgBIgGACIgSAGIgJACQgCABgDAAIAKAEIgBAAQACAAAIAIQAJAHgIgCIgGgDIgJgDIgCgBIAAABIgMgGIgMgBIgJABIABgEIADgCIABgLQAAgJgDgDIAAgCIACABQADAAAEAGQADAFABADQABAAAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAPgFQgOgIgOgGQgFgDgEABIgLgBIgHABQgFABgDAEQgEAGgBAGIABACIgBABQgDAMAJAXQgGABgFgGIgFgJQgKAFgGAKIgBAEQAAABAAAAQgBABAAAAQAAABAAAAQgBABAAABQgFASAKATIgBAAIAAABIgDAAIgBgBIAAAAIgFgGIAAAKg");
	this.shape_180.setTransform(37.2,2.7,0.997,0.997,0,25.9,-154);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#0000FF").s().p("AhPCbQAagCAagEIACgFIAggIIAtgOIABAGQgBACgRAHIAZgFIgIgLQASgFADgCQAVAfAdAFQAsAIASgiQAMgYgEgTQACAAADgDQACgCAEABQALADgHAgQgDAUgRASQgbAbgmgHQgUgEgOgIQgGAEgIACQgPgMgpAGIgOAEIgDAHIglAJIg9AJQAKgPAHgRgAiJCpIgCAAIgCAAIgfghIACgGQAHAFAJADIgCgJIgBgEIgFgIQAUgiAlggIgBACIAKAAIgYgFIALgBIACgIIgBgFIgCgFIASgVIAAABQAOgSAXgaIgBgCIAUgcIACAHQAogrAXgEIAEABQABACAAAFIgBACIACAAQACABAAAFIgCADIAAABQghAagXAdIgIAIIABAGIgEAFQgCACgEgBIgSAXQAGADgEAMIgEAHIgDAEQgFAGgIACIgOAGIABAAIAdAIIARgEQAJgCAFgFIAEgDIgIAJQAQABAJADIAMgCIACgCIAFgCIADAAIATgBIABAAIABgJQADgQARgLQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAQAVgOAbAHIABAAQACgCgBAHQAAABgZALQgaAKgEAUQgDASARAhIAEAGIgCABQgRABgDAEIgDgJQgHgQgCgNIgFAKIgjAIIg/AHQADgKAAgKIgCAAIgBAHIgcABIgIAFIABgFQgTAAgSgBIgBAEIAAAAIAFgCIAAACQACANAGAKIgGAGIACAGQADAIAEAFIAsAAQgIAQgLAQIgaAFQgIgFgGgGgAjSCBIACgEQAHAFAHAEIgCAGIgOgLgAjHBjQgEgPABgNIgEgXQgDgRAKgXQAHgNAggrQALgSANgSIABgCIAKgNQA9hLAogKQABgBAAABQAAAAABAAQAAAAAAABQAAABAAABIAMgFQADgBgCAHQAAAChEBIIgKALIACAAQgPAPgNASIgBAAQgPAVgJASQgRAcgBARQgEAIgBAFQgCAQACAOQAMgLANgKIgCAFQgiAjgQAkQgHgKgEgLg");
	this.shape_181.setTransform(17.3,-1.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#758A51").s().p("AhoBtQgUgJgSgNQgbgTgUgbQgTgYgNgaQAsAQAvgKQAUAsAyAHQAMADANABQAegFAZgKQAogQAjgZIAWgTQAVgUAPgYIAQgbIgIgUQgBgCAAgBQAAgBAAAAQAAgBAAAAQAAAAABAAIAHAEIAGAGQAVAfAOAjIANAhIgDALIgEgBIgFgGQguAyg8AiQgrAagxALQgcAFghAAQgcAAgbgLg");
	this.shape_182.setTransform(0.1,-7.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#526139").s().p("AAAAqQgcgEgVgTQgFgEgDgGQgQgYARgaIAIAHQAKAIAMAFQAaAJAbAFQAOgBAPgDIABgLIAAAAIAAgBIAAAAIAIAXQADAMgFANIgBAAIgIAMQgUAFgVAAIgNAAg");
	this.shape_183.setTransform(-18.4,-13.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#B3E4E6").s().p("Ag5BhQgMgGgKgIQgIgGgHgHQACgwAUgmQALgVAOgTQAIgLALgJIALgJIAjgPQgcAYgYAeQgQAUgDAWIABACQAFgBACgHQAFgMAIgLQAYgdAegTQAUgNAVAAIAFABIAAAEQgCADgEADQgYASgYAXQgOANgEARIALgLIAegZIAZgTQAMgIANADQAJAMgCAPQgBAJgFAJQgFAJgIAFQgkAWgbAfQgHAHgEAKIgJAXIgBADIgWAQQgGACgFAAQgHAAgIgEg");
	this.shape_184.setTransform(-12.8,-26.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AhFDYQgkgIgdgXQgigagagiQgSgYgKgcQgFgOgHgOIgJgUQgFgQAHgOQAFgMAGgLQAEgHAFgGQAJhUA7g8QALgNAPgJQAYgOAcAAIAEAAIAEAGQATgCAPAFQAIADACAKQAQAHAGANQAFAPgEARQgBAIgFAHQgHAKgIAIQgaAXgWAZQgOAQgKAUIgGAOQAMAQACAYQABAKgBAOIABAJQAAACgDAEIgHAIQAOAgAiAKIATAEQASABAOgGIAqgPQAZgJAYgSQAdgVAUgdQAJgLAHgKIASgeIAJAUIgQAZQgPAYgVAUIgWATQgjAbgoAQQgbAKgcAFQgNgBgMgDQgygHgUguQgvAMgsgSQANAcATAYQAUAbAbATQASANAUAJQAbALAcAAQAfAAAegFQAxgLArgaQA8giAug0IAFAGIAEADIACgNQAGADAAAFIAAAEQgxA5hBAlQghAUglAKQgOAEgPACQgbAGgaADIgGAAQgWAAgVgGgAjgAiQADAGAFAEQAVATAcAEQAeACAagHIAIgMIABACIAAgBQAFgOgDgNIgIgYIAAAAIAAAAIAAABIAAAAIAAgBIgBAAIABABIgBALQgPADgOABQgdgFgagJQgMgDgKgIIgIgHQgRAYAQAagAiAi8IgLAIQgLAJgIAMQgOASgKAVQgUApgCAvQAHAIAIAGQAKAIALAGQAOAEAMgDIAXgQIABgCIAKgYQAFgJAGgIQAcgeAjgYQAJgGAEgIQAGgKABgJQABgOgIgMQgOgEgLAIIgaATIgdAaIgNALQAFgRAOgNQAZgXAYgSQAEgDACgEIAAgDIgFgCQgWAAgTANQggATgYAdQgJALgEANQgDAHgFAAIgBgCQAEgWAPgTQAZgfAdgXgAh2gRIAAAAIgBgCgAhsABg");
	this.shape_185.setTransform(-1.7,-16.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#758A51").s().p("ACbDNIgBgEIABgJIgKgPIABAAQgLgSgNgRIAAgBIgfgmIAAAAIgmgtIgdghIglgnIgigiQgVgVgYgTIAAgBIgpgiIAAAAIgWgQIglgXQATgPAOgTIAIgKIAmAZQANAJAMAJIAAABIAZASIAAAAIAaAVIAAABIAYAXIAAAAQASATATAUIAAAAIAmAnIABAAIAWAWIAAAAIAVAYIATAXIAAgBIAiAsIAWAdIAHgRIADAAIABAKQAAAEgDAMIgKAdIgSArIgCAGg");
	this.shape_186.setTransform(2.2,-29.2);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#526139").s().p("AgiAuQgMgIgKgMQAXAAASgIQAKgEAGgGQAfgUAEgmIAIAIIAFAFQANAOgKAQIgOAWQgRAYgXAKQgGACgGAAQgKAAgKgFg");
	this.shape_187.setTransform(-19.7,-50.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#B3E4E6").s().p("AgJBGIAAAAIgFgIIgCgKIALgVIAOgFIAIADQAMAFAKAAQAUgCAKgQQAFgKgCgHIgGACIgOANQgFAFgFAAQgDgFgFACQgLgCgEgJQAAgUAKgVQAEgLAKgCIAGAAQALAHAOACQAQAEAHAOQALAWgHAYQgCAKgEAKQgGAQgNAJQgUANgXABIgJAAQgUAAgNgNgAhJAkIALgHIAKgJIAFAEQAKAFANAAIAAABIgFAKIgFABQgEAAgEACIgJABQgNAAgJgIgAhnAKQABgcAMgbQAMgaAbgJQASgFASAFIAAAAIAAAAIArASIgOAKIgLgBIgLABQgdAHgOAaIgNAaQgEAJgJACIgHABQgLAAgIgJgAgdALQgKAAABgHQgBgHAFgIQAOgZAbABQAAAJgDAHQgEALAAAIIgBAMIgcgBg");
	this.shape_188.setTransform(-28.1,-58.3);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AEHExQgDgBgCgDIgRgcIgBAAQgKgSgNgQIAAAAIgdgnIAAABIgmgtIgdggIgngpIghgiQgVgUgXgTIAAAAIgnggIAAAAIgWgQIgqgaQgQAHgRgBQgQgDgMgJIgHgHQgNgOgOgMIgVgSQgGgEgCgGIgFgMQgRACgOgDQgIgBgHgEQgHgDgFgMQgJgJgNgGQgEgDgBgFQgBgNABgMQACggASgaQAVgfAlgEQAjABAfAQIAjATIAHADQARAEAQANQAIAHAGAJQAEAHACAIIADARIAEADQAQANALAPIABACQAIAQgFAPIApAcQANAJAMAKIAZASIAAABIAaAWIABAAIAZAYIAAAAQAUATATASIAAAAIAnAnIAAAAIAWAZIAAAAIAWAYIATAXIAAAAIAiArIAdAmQACADAAAEQgBADgDADQgDACgEgBQgCAAgCgCQAEgNAAgEIgCgJIgDAAIgHAQIgWgdIgigrIAAAAIgTgWIgVgYIAAAAIAAAAIgWgYIgBgBIgmgnIAAAAQgTgUgTgQIgBAAIgYgYIAAAAIgagWIAAAAIgYgSIgBAAQgMgKgKgIIgngZIgHAJQgPATgSAQIAkAWIAWARIAAAAIAnAiIAAAAQAYASAVAUIAiAiIAnAqIAdAgIAnAtIAAAAIAeAnIAAAAQANARALATIAAgBIAJAPIgBAJIABAFIAEABIACgFIACAEQACADgBAEQgBADgDACIgEACIgDgBgAhqh4QgIAHgKAEQgSAHgXAAQAKAMAMAIQAQAKAQgGQAZgLARgYIAOgXQAKgRgNgOIgFgFIgIgIQgEAngfAVgAjHirIgKAVIACAJIAEAJIAAAAQATAQAZgEQAYgBATgNQANgJAGgPQAEgKADgLQAHgZgLgWQgHgOgRgFQgOgBgKgHIgGgBQgKADgFALQgJAVAAAWQAEAJAKABQAFgCADAFQAFABAGgFIANgNIAHgFQACAKgGAJQgKARgTABQgLAAgLgEIgJgDgAkAiuIgLAHQANAMATgEQADgCAFAAIAEgBIAGgKIAAgBQgOgBgKgFIgEgEIgLAJgAj0kdQgcAJgMAbQgMAbgBAdQALANAPgEQAKgCAEgJIANgcQAOgaAcgIIANAAIAMABIAOgKIgtgSIgBAAQgJgDgJAAQgJAAgIACgAjkjYQgEAIAAAJQAAAIAJAAIAdABIACgMQAAgKAFgMQADgGAAgJIgEAAQgbAAgNAXg");
	this.shape_189.setTransform(-8.8,-37.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#526139").s().p("AAXAgQgWgKgNgBIgQgBIgngDQgBgHACgGQADgLACgOIALgMIAHgDIACgBQAYgHAXAEQAmAFAWAfIACAEIgCAEIgBAVQgFARgOAAQgCAAgVgKg");
	this.shape_190.setTransform(-19.4,-22.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("ACTBEQg1hIhlgzIgzgWQgRASgLAXIgGAIIgJAMIgIAQIAJANIgFAvQgHASgIAJQgBAAAAAAQAAAAgBABQAAAAAAAAQAAABAAAAIgDABIgKADQgVgHgLgGQgZgKgXgEIgzgEQgDgUAFgUIAIgaIAFgEIAUgMIAFgMIADgIQALgaAQgZQALgSAMgRQANgQAPgNQAPgOARgLQANgJAOgCQAZgGAaAAQAZgBAWADQBNAOBJA7QAtAlAgApIAJALQALAPAKAQQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJgJIgRgTQglgogvgiQhLg4hHgPIgugGQgYACgVAIQgYAJgTARQgYAXgXAZQgTAWgJAdQgDAKgFAIIAQAAIARACIAwAPIAphLIg3gEIABgGQAPgGAQgBQAYgEAZACIADADIAHACIAEgBIABABIAqATQAUAMAaARQCCBUBQCUIgCAQQgdgahLhogAjigFIgCABIgHAEIgLAJQgCAOgDANQgCAGABAHIAnADIAQABQAPABAWAKQAVAKACAAQAOABAFgSIABgVIACgGIgCgEQgWgcgngGIgQgBQgQAAgQAEg");
	this.shape_191.setTransform(-0.9,-26);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#758A51").s().p("ADcCjQhQiUiChUQgXgRgXgMIgpgTIgBgBIgFABIgHgCIgDgDQgYgCgZAEQgQABgPAGIgBAGIA3AEIgoBLIgxgPIgRgCIgPAAQAEgIADgKQAJgdATgWQAXgZAZgXQASgRAZgJQAUgIAZgCIAvAGQBGAPBKA4QAvAiAmAoIAQATIAEAJQAIAXACAVIAEASIgGAJIgBACIAAABQgEAIADBBIAABHg");
	this.shape_192.setTransform(2.3,-24.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#B3E4E6").s().p("AgWBjQgHgKgHghIgIggQgBgCAAAAQgBgBAAAAQgBgBAAABQAAAAAAAAIgFABQgDAAgCACQgIAFAGAhIAAAAIgHgFQgKgHgBgCQgKgOADgcQADgZgIgHIgEABQgFAEgEAQIgJgMQgIgMArgqIADgDQAHgGAIgGQBKgxA3BTQAEAJAFAQQAGAXACADQAEAEAGACIACABQABAGAEAIQANAdgIAFQgFAEgdACIgNABIgHgIIgBAAIARgIQAUgPgeAEQgfAFgQALQgOAKAGAJQACACAYgJIAAABQACACAFADIAAABQgbAegEACQgJAEgIAAQgKAAgEgGg");
	this.shape_193.setTransform(-21.7,-11.5);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgiB0QgNgSgGgZQgHABgKgDQgPgFgIgMQgLgQABgYQgPgMgNgRQgNgSAwgwQBghZBQBsIAFAIIAEAIQAHAQALAJIAAADQAMACAKAeQANAsgQAMQg5AMgRgGQgDAHgGAIQgMAQgOAKQgUAFgNAAQgOAAgEgGgAgqAUIAIAhQAHAgAHAKQAHALAYgIQAEgDAbgeIAAgBQgFgCgCgDIAAAAQgYAJgCgDQgGgIAOgLQAQgLAfgFQAegDgUAPIgRAHIABABIAHAHIANgBQAdgCAFgDQAIgGgNgdQgEgIgBgGIgCgBQgGgBgEgFQgCgDgGgXQgFgQgEgJQg3hThKAyQgIAFgHAGIgDAEQgrApAIAMIAJANQAEgRAFgEIAEgBQAIAIgDAYQgDAcAKAOQABADAKAHIAHAEIAAAAQgGghAIgFQACgCADAAIAFAAIABgBIACADg");
	this.shape_194.setTransform(-21.9,-11.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#B3E4E6").s().p("AhxBjQgLgLAAgPQgBgJABgJIAFgVQACgMAJgNIACgDIADgDIgBgCIAjgiQAugwARgOIABgBQAIgJANABIAKABIABAAQAFABAEAFIAAACQACAFgBAIIgCAJIgBABQAEAThUBMIACgBQACACADABQADAAACgCQBIg4AKgjIABgDQAEgRgDgKIANgMQAIgKAMgDIAGgBIAOAMQAEAFACAGIABAEQABAPgeAiIgJAKQgoAngXATIgFAEIAEACIABABQABACADABQADAAACgCQAqgeAjgnIAKgLQAKgLAEgLQAIAHgBAHIAAACQgEANgFAIIgBAAQgGAJgQANIgoAgIgBABIgEAFIgIAGIgBABQgEACgDADQgJgDgOgCQAAACgPgCQglADgQAeQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQAEAXAWAHQASAGATgCIAKgFIABgCQAAAAAAgBQABAAAAgBQAAgBAAAAQAAgBAAAAIgGABQgKACgFgBQgKgDgFgDIgFgBQgQgDgDgOQAPgbAmADQAUACAIAHQAHAFgCAJQgFATgXAQIgbAQIgDACQgQAFgQAAQgiAAgfgag");
	this.shape_195.setTransform(2.8,-85.5,0.847,0.847);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("Ah1ByQgJgGgHgJQgFgJgBgMQgEgaAKgbQAJgZATgPIAbgcQAvgxARgPQALgJALgDQALgBALADQAHACAFAFIAGgGQAWgRAZgEIARAMIAHAJIADAGQACAFAAAHIABAIIAAABIABABQASAPgEARIAAABIgFAOIAAABIgCAFIgEAGQgIALgQAOIgpAfQgCACgBADIgBAAIgCACQgGAFgDACIgCAAIAAABQAOAKgFASQgEAbglAWQgeATggABQgjAAgjgZgAgEhgIgBABQgRANguAxIgjAiIABACIgDACIgCAEQgJANgCAMIgFAVQgBAJABAJQABAPAKALQAtAmA0gRIADgCIAbgQQAYgQAEgTQACgJgHgFQgIgIgUgBQgmgDgPAbQADANAQAEIAFABQAFADAKADQAEABALgDIAGgBQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBABIgBACIgKAFQgTACgSgGQgWgHgEgXQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAQgeAlgCQAPABAAgBQAOACAJADQADgDAEgCIABgBIAIgGIAEgGIABAAIAoghQAQgMAGgJIABgBQAFgIAEgMIAAgCQABgHgIgHQgEALgKALIgKALQgjAmgqAfQgCACgDAAQgDgBgBgDIgBAAIgEgDIAFgDQAXgTAognIAJgKQAegjgBgPIgBgDQgCgHgEgEIgOgNIgGACQgMADgIAKIgNALQADALgEARIgBADQgKAjhIA4QgCACgDgBQgDAAgCgCIgCABQBUhMgEgUIABAAIACgJQABgJgCgEIAAgCQgEgFgFgBIgBAAIgKgBIgCgBQgMAAgHAJg");
	this.shape_196.setTransform(2.7,-85.5,0.847,0.847);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#758A51").s().p("ABNDbIAVACQgEAHgFAAQgLAAgBgJgABRDIQhWgvgqgiQhKg6AAg3QAAgyA/hYQAcgpAdglIADgGQAAgCAAgBQAAgBAAgBQAAAAgBAAQAAAAgBAAIACgHQARAHAiBYIgBACQgFAEgGAFQgUATgZAxQgsBLAAAcQAAACAIAHIAdgtQALAXAsAjQAjAaAbANIAQAGIgNA/QgDAVgEALIgVgLg");
	this.shape_197.setTransform(15.5,0.3);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373D48").s().p("Ag1ALQAEgcgLgdIAdADIAtgCIAogEQAQAbgBAWQgCAWgQALQgQALgcACIhLADQALgQAEgWg");
	this.shape_198.setTransform(-6.9,-3.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#758A51").s().p("AgyB9QgqgFgngOQg7gUgxgjIgfgVIglgeQgjgfgOgrIADgDIAHAAIAhADQAgADAXgGIAegIIAPgCIAOgEIAHgDQAgA2A4AeQArAXAyARQASBfg0AAIgFAAgACaBUQAAgigZgYQAtgIAogYQA7gkAahDIgFgFIAEgKQAFADAEAGQAkA6AOBEIgEADIgOgFQhbA/hlArQAHgPAAgQg");
	this.shape_199.setTransform(-13.5,-11.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#526139").s().p("AgdBQQgSgDgQgGQgNgDgKgGQgkgXgNgnQgEgNgBgSQABgKADgKIAIgYIADgHIACABIABgBQAbAgAiAWQATAMATAJQAMAFALgCQA2AGA3ABIAFAAIACgCQADgBgJgIQAKAEgCgCIgDgCIgFAAIAAgBIAfgPQgFAcgSAYIAAABIgGAHQgVAXgdAMQgcALgbAAIgHAAIgLABIgSgDg");
	this.shape_200.setTransform(-42.6,-29.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#B3E4E6").s().p("AhVCSQgTgGgOgLQgmgbgigfIgBgHIgEgDQABgWADgRQAGgcAVgZQAJgLALgIQAWgRAbgIQAWgFAVADIASACQANABAKALQASAVgEAdQgBAJgCAFQgJAXgPAQQgJALgLAHQgNAKgOAGQgWAMgZABIgOgGQgUgHAAgLQAAgSASgYQATgWAXgJQgBgCgEgCQgEgCgDAAQgfAAgUAmQgOAcAAASQAAAHALALIAEAEQACAHAGAFIAIACQAvABApgXQAPgJANgKIAXgYQALAlAnADQANAEAOgEIASgFIAGgLQgjADgggOQgGgCgCgHQgCgLABgLQAAgIADgIQAZgSAhAAQASAAAQAIQAGACAFAEQAIAHAFALQAEAKAAALQgBAPgFAOQgEALgIAJQgJALgLAJQgKAKgOAFQgPAGgPAEIgpAKIgpAMQgegDgegHgACTgPIgKgFIgUgKIALgTQAIgPgCgTQgBgVgNgPQgQgTgSgRQAcADAcAFQALADAKAFQAQAHAIAPQANAagGAcQgDAMgFALQgGAKgIAIIgQANIgJgGgAAVgyQgCgYgTgOIgvgSQAXgOAYgLQAKgHANgDQAVgGAUAJQAeAOAQAcQAEAIAAALQAAAGgCAHQgDAIgFAGIgRAQQgiADgfAQIgBgjg");
	this.shape_201.setTransform(-34.8,-46.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AhJE7Qg5gUg3ggQgqgbgnglQgNgOgMgPQgTgYgIggIgEgDIABgFIgTgOQgVgTgPgZQgSgbgBggIACgTIAEgUQAEgLAFgKIAHgNIACgEQABgBAAAAQAAgBABAAQAAgBAAgBQAAAAAAgBIABgFIABgQIACgXQADgjAYgbQAQgRATgOQAmgeAwgHQANgTASgNIAWgNQAigPAlAFIAMgHIAMgFIALgDQAsgGAeAeQANANALAQQAJANAGAPQAJAcgKAbIgMAZQgJAUgVAJIAAAjQgBAZgQAWQgIAKgJAIQgHAHgJAFQgTALgUAJIAAAEIgBAGIgGAeQAAAEgOAZQgJAQgDAIIgIAHIAKAPQAnA8BBAbQBEAdBKgIQAYgCAYgGQAfgHAdgQQA+giAvg+QgaBDg6AkQgoAaguAIQAZAYAAAiQAAAQgHAPQBlgrBcg/Ig2A1QgvAqg8AUQg1ATg2AEIhFAAIgCAAQhCAAhAgYgABDEbQgEAWgKARIBMgEQAcgCAQgLQAQgKACgYQACgXgRgaIgnADIgvACIgegDQALAegEAdgAksB0QAPArAjAgIAlAfIAeAVQAyAjA6AUQAoAOAnAFQA8AFgUhkQgxgRgrgZQg3geghg2IgGADIgPAEIgPACIgeAIQgXAGgggDIghgDIgGAAgAlrg8IgIAYQgDAKAAALQAAAPAFAPQANAnAkAXQAKAGAMAEQAQAGASADIASADIANgCIAHAAQAbAAAdgLQAcgLAVgYIAHgHIAAgBQASgYAEgbIgeAMIAAAAIAAABQAIAJgCACIgDACIgEAAQg4gBg2gHQgNABgLgFQgUgHgSgMQgigWgbggIgBABIgCgBIgEAHgAj8jqQgbAHgWARQgLAJgJAKQgWAZgFAfQgDARgBAVIAEADIABAHQAiAfAmAcQAOALATAFQAeAHAeADIArgMIApgKQAPgEAPgFQAOgGAKgKQAKgJAKgLQAHgJAFgLQAFgOABgOQAAgMgFgKQgEgKgIgIQgFgFgGgDQgQgIgSAAQghABgaAUQgCAHgBAIQAAALACALQACAHAGADQAfANAkgDIgGALIgSAGQgOADgNgDQgngDgMgmIgYAYQgNAKgPAJQgqAYgugBIgIgCQgGgFgCgIIgFgEQgKgKAAgIQAAgSAOgcQAUgoAfAAQADAAAEACQAEACABACQgXAJgTAYQgSAYAAASQAAALATAHIAPAGQAZgBAWgMQAOgGANgJQALgIAJgKQAPgRAJgXQADgHACgIQAEgegUgUQgKgMgOgBIgRgCIgQgBQgNAAgOAEgAgjkXQANAPABAVQACATgJAQIgLASIAUAKIALAFIAIAHIAOgNQAJgJAGgKQAFgLADgMQAGgcgNgaQgIgPgQgHQgJgFgKgDQgcgFgcgCQARARARASgAiEktQgNAEgMAGQgZALgWAOIAwASQATAOADAYIABAjQAfgPAigEIARgQQAFgGADgHQACgHAAgHQAAgLgFgIQgPgcgfgOQgMgFgNAAQgHAAgIACgAh6AFIAFABIADACIAAAAIgIgDg");
	this.shape_202.setTransform(-19.1,-30.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373D48").s().p("AgsgcQAxgBAygSIABAGQAFAdgSAVIgFAJQgpAYg1AGQATgkgHgog");
	this.shape_203.setTransform(-1.7,10.9);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#758A51").s().p("AjeAsQgxgkgggwIgDgEIARgFQAVgEARgLIAMgHQA6A+BRAcQAyATA2gBQAIAqgYAkQh1gEhdhDgACNAmQAAgGgDgFIgEgOQA5gMArgoQAhgfAUgmIAAgGIAEAJQAOAaACAXIAAACIgDAdIAAABIACgDIgBAHIAAAQIAAAAIgSAIQgRAMgYAMQgzAZg9AVQAJgRgCgTg");
	this.shape_204.setTransform(-8.5,4.3);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#526139").s().p("Ah3AVIAIgVQAPAPAWABIAPAAQBGgMA8grIAYgcQAoAqgZAqQgEAHgGAFQgrAjg1AQQgOAEgQABIgLABQg8AAgWhBgABPhMIAAgJIAPAQg");
	this.shape_205.setTransform(-40.5,-9.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#B3E4E6").s().p("Ah8DRIAAAAQASAAAGgQIABgGQBIAnAXhIIgGgIQgcAugrgWQgOgHAEgPQAWhSBJALQAjAGAMAhQANAhgOAjQgyAzhDAPQgfgOgagbgAi0BZQAGgvAmgdQgKA3AgAuIAHAHQgIARACAVIACANIgDAGIgDAFIgFAFQhEgSAKhRgAhvgLQAOgnAmgRIAQACQgIAfgDAiIAAALIAIAFQAcg/ARhFQAIgqAbghQAthEBNAMQAIACAFAHQAdAlglAnQgyA3gkA/QggA0gBA+QgzghgzAjQgSAMgQAPQglg0AUg6g");
	this.shape_206.setTransform(-40,-34);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("Ag7FtQhBgdgygvQgggfgQgnQgGACgGABIgOADQgWABgVgCQgogigYgrIACgLIAEgKQAEgKAGgKIgKgVQgxgSgKg2QgJgxAXgvQAQggAhgPQAOgcATgZQAYggAoAJIATg1QAihbBZglQAvgUAoAkQAXAXgOAdQgpBMg1BEQgWAegLAjQgTA/AYA8QAPAHALAOQAcAlACAtQACAngnAUIAdAbQAuArA5AUQAxASA1gIQBDACAvgTQAugUAvggQArgeATgjIADAFIgBAFQgTAmgiAgQgqAqg6AMIAFANQACAFAAAHQACASgJARQA9gUAzgZQAZgMAQgNIASgJIABAAIAAAIQgSAXgbAOQhbAxhlAeQgyAPgxAAQhFAAhBgegAiRDDQgSALgVAEIgRAFIADAEQAhAyAwAkQBeBDByAEQAagkgIgqQg3ABgzgTQhPgdg5g/IgMAHgAB+EpQAIAqgUAkQA1gGAsgYIAFgJQASgXgGgdIgBgGQgxASg0ABgAlOCPQAYBHBEgHQARgBAQgEQA0gQArgjQAHgFAEgHQAZgsgpgqIgXAcQg8AthJAMIgOAAQgWgBgPgRgAlOBXQAZAaAgAOQBEgOAzg0QANgjgMgfQgNghgjgFQhLgMgWBRQgDAOANAHQArAWAdguIAGAIQgXBIhIgnIgCAHQgFAPgSABIgBAAgAmGgfQgKBPBDARIAFgFIAEgFIADgGIgCgMQgDgWAJgPIgHgHQgggtAKg4QgmAdgGAwgAiGAsIAOAHIgOgQgAlBiGQgUA8AkA0QARgOASgNQAzgiA1AgQABg9Afg2QAlhAAyg2QAlgogeglQgFgGgHgCQhOgMgtBDQgaAhgLArQgRBFgbBBIgJgFIABgNQACgjAJgfIgRgCQgmARgNAng");
	this.shape_207.setTransform(-19,-21.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373D48").s().p("AgOA3QAEgegNgZQgJgUgTgNIAQgEIAAgBQAcgIAagHIABgBIACAAIADACQADACADgBIACgBIAAAAQAGAJAEAJIAGAXQAFASgEAXIg5ASQgDABgCADIgBADg");
	this.shape_208.setTransform(-0.7,-11.2);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#758A51").s().p("AivBYQgNgGgJgPQgGgJACgLQAGgXAWgNIAAAAQAMgHAMgEIABAAIAhgOIAAAAIAsgQIAKgDQABADACABQAUALAKASQALAXgFAbIhFgWQgEgBgDACIgDADQAJAIADAIIArANIgDABIAAABQgbAKgYAOQgRAKgPALIgrgUgABNgWIAAAAIgHgYQgEgLgHgKIAVgEIAAgBQAegFAcgIIAAAAIAqgNIAOgJIAAAGIADARIABAaQAEAjABAiIAAAAIgBACIAAgCIAAgNIg/AJIgDAAIAAAAIgiAGIgBAAIgWAGQADgVgFgUgADAhVIABAAIABgBIgCABg");
	this.shape_209.setTransform(-1.8,-10.5);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#526139").s().p("Ah3ATIACgKQAQgJAQgJQAYgOAagKIABAAQALgGANgEIAogHQAXgCAZAFQAWAFASAOIAAAAIADADIgTAAQgEABgCACIAAABIgeAAIgCABQgZAEgYAHIgBAAQgXAHgXAJIAAAAQgTALgSANIgUAMIgQAJQgRgNADgUg");
	this.shape_210.setTransform(-2.4,0.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#B3E4E6").s().p("AgQB6IgYgHQgMgEgKgHIABAAQgHgFgFgIIAAAAQgGgKAFgMQAEgKAHgHIABAAQAIgJALgGIABAAQAWgMAWgGIABgBQARgFAPgHIAAAAQAXgIASgSQAPgOAJgTQgJADgLAAIgCAAQgGAKgIAHQgQAPgUAJIAAAAQgPAHgOADQgaAHgYANIAAAAQgOAHgKALIgBABQgJAJgGANQgGAQAFAPQgYAHgZgGIAAAAQgXgHgDgWIAAAAQgBgKABgKQAIgRASgIIAAgBQAWgLAXgGQAZgEAZgFIAAAAQAXgDAXgLQAWgKASgRIAAAAIAAAAIgGAAQgLAAgJgCQgLAHgJAGQgWAJgVADIAAABQgaAEgZAHQgaAHgXAJIAAAAQgVAKgLAUIgigEQgMgBgGgMIAAABQgFgJACgJQAEgXAYgDIABgBQAJgCAJAAQAdADAcgDIAAAAQAcgDAagKIACgBIAWgLIAVgOQARgMAQgKIAAAAQAWgKAXgHIAAAAQAXgGAYgFIAjgBQADAAADgCIAAgBIANAAIAaAFQAXAKASASQAQARAFAWQAHAYgGAaQgGAWgWALIAAAAQgHAEgIgBIgCABIgCgBQAIgRABgTIAAAAQABgUgBgUQgBgDgCgDIgBgBIAAABQgEAOgGASIgDAIIgBAFIAAABQAAAVgNASIgBABIAAABIgLAKQgTAQgWANQgVAPgWALIAAAAQgUALgTAFQgPADgOAAQgIAAgKgCg");
	this.shape_211.setTransform(-5,12.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FF0000").s().p("AjKCDIABAAIgBAAgADKCAIAAAAIABABgAAyCAIAAAAIAAAAgABEiCIAAAAIAAAAg");
	this.shape_212.setTransform(-6,-5.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("AgSD0IgBAAIgbgIQgOgFgMgIIAAAAQgGgFgFgFIgBAAQgeAKgggIIAAAAQgigKgFgiIgBgRIgfgDQgVgDgLgTIAAAAQgIgNAEgSQAFgjAkgGIAAAAQALgDANAAIABAAQAbADAagDQATgCARgFQgRgRAEgZIABgGIgngSQgTgJgMgTQgKgQAFgTIAAAAQAHgeAcgRIAAAAQANgHANgGIABAAQARgIASgHIAAgBIAtgPIAsgPIAAAAQAcgJAdgHIAAAAQAZgHAbgFIAAABQAdgGAbgIIAAAAIA1gQQAEgBADACIACABIgBAKIgOAJIgqAMIAAABQgcAHgeAGIAAAAIgVAEQAHALAEALIAHAXIAAAAQAEAVgCAWIAWgFIAAAAIAigGIABAAIACAAIBAgLIAAAOQgpAMgYADIghAGIABAAIgjAIIgRAFIAWADIAAAAQAaAGAVARIAAABIAYAXQAbALAUATQATATAHAbQAHAdgHAeIAAAAQgIAggdAPIAAAAQgLAGgLgBQgJACgJgBIgJAJIgBABQgUAQgWAOQgWAPgWAMIgBAAQgWALgVAGIAAAAQgRAEgQAAQgJAAgLgCgAgoDbIAYAHQAXAEAYgFQATgGAUgKIAAAAQAWgLAVgPQAWgNATgQIALgKIAAgBIABgBQAMgSABgXIAAgBIABgFIADgIQAGgSAEgOIABAAQACADABADQABAUgBAUIAAAAQgBAVgIARIAAABIACAAIACgBQAIABAHgEIAAAAQAVgLAHgYQAFgagGgYQgFgWgQgRQgSgQgXgKIgagFIgNAAIAAABQgDACgDAAIgjABQgYAFgXAGIAAAAQgXAFgWAKIAAAAQgQAKgRAMIgVAOIgWALIgCABQgaAKgcADIAAAAQgcADgdgDQgJAAgJACIgBABQgYADgEAXQgCALAFAJIAAgBQAGALAMACIAiAEQALgUAVgKIAAAAQAXgMAagGQAZgHAagEIAAgBQAVgDAWgJQAJgGALgHQAIACAMAAIAGAAIAAAAQgSARgWAKQgXALgXADIAAAAQgZAFgZAGQgYAGgVALIAAABQgSAIgIARQgBAKABAKIAAAAQADAWAXAHIAAAAQAZAGAYgHQgGgPAHgQQAGgNAJgJIABgBQAKgLAOgHIAAAAQAYgNAagHQAOgFAPgHIAAAAQAUgJAQgPQAIgHAGgKIACAAQALAAAJgDQgJATgPAOQgSASgXAKIAAAAQgPAHgRAFIgBABQgWAFgWANIgBAAQgLAGgIAJIgBAAQgHAHgEAKQgFAMAGAKIAAAAIAAAAQAFAIAHAFIgBAAQAKAHAMAEgAg7gVQgQAJgQALIgCAIQgDAUARANIAQgJIAUgMQASgNATgJIAAAAQAVgLAZgHIABAAQAYgHAZgEIACgBIAeAAIAAgBQACgCAEgBIATAAIgDgDIgBAAIABAAQgSgOgWgFQgZgFgXACIgqAHQgNAEgJAGIgBAAQgaAKgYAOgAh0h+IAAABQgNAFgMAHIABAAQgWANgGAWQgDALAHAKQAIAPAOAGIAqATQAQgKAQgKQAZgOAbgLIABAAIgBAAIADgBIgrgOQgEgHgJgIIAEgEQADgBAEABIBDAWQAFgbgMgYQgHgTgUgLQgCgCgCgCIgJADIgsAPIAAAAIAAAAIgiAPgAA/i7IAAABQgdAHgbAIIgBABIgNAEQAQANAJAUQAOAbgFAeIAAABIABgBIABgDQACgDAEgBIA6gSQAEgXgFgUIgGgXQgDgJgHgJIAAAAIgBABQgEABgDgCIgDgCIgCAAg");
	this.shape_213.setTransform(-5,2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#758A51").s().p("AgrB2QgNgBgLgHQgLgFgIgIQgRgTAEgaQADgYAOgVIAMgOIAgglIAUgUIAVgWIAqgmIgBAHIAAAAIAAAAQgDAWAHAVQADALAFAKIAEAHQAEAFAGAEQALAJAMAIIgbAUQgPAJgOAPQgLALgGAOIgEALIAAABIABAGIAAAEIAFgDIAhgkIAHgHIAHgGIAIgHIAYgRIgKB4Ig5AJIgrABQgRgCgRgFg");
	this.shape_214.setTransform(-16.3,-11.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#526139").s().p("AgpBOQgNgVAAgZQgBgYALgUQAJgSALgSIALgOQANgQASgJQARgJAVgCIgIAFIAAgBIgvAlIAAAAQgEALgEAKQgIAagFAYQgDAQAFASIAAAAIAFAyQgRgEgLgQg");
	this.shape_215.setTransform(-4.5,-25.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#B3E4E6").s().p("AhcDTQgHgEgGgGQgIgGgFgJIgDgHQgDgWACgYIAOiRQABgEADgEQgHgbgDghIgCgLQgBgIABgJIAFgZIAGgZIAAAAQAIgUAVgMIAXgPIALgEIAlgEQAYACAVANQAgAVASAhIAHANIADAIIADAFQAIAOAFAQIAEARQAGAagCAbQgCAQgKAMIgCgaQgDgrgHgqIgBgFIgBADIAAABIgBAAIgBAAIAAAAIgBACIgBADQgHAcADAgIADAmIACAwQABASgCASQgCAZgJAYQgIAVgUARIgBAAQAMgXAAgbIgBgpIgCguIgDgjIgCgiQgKAbgCAbQgBATABAUIACArIABATQAAARgGAQQgHATgNAOQgJAKgKAIIgIAGIgUACIgUgEQARggADgjIADgaIAGg5IACgWQAEgngDgmQgIAKgEANQgEARgCAOIgEAsIgFA4QgCAggIAeQgFATgMAOQgGAFgIAAQgGAAgGgDg");
	this.shape_216.setTransform(6.7,-12.4);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FF0000").s().p("AAAAAIAAAAIAAAAg");
	this.shape_217.setTransform(-11.8,-23.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAvDnIgJAFIgEAAIgHAAIgQAAQgLgCgJgGQgKgHgHgLQgMgTACgXIABgTIgeAFIgBAAIguAGIgYgBQgUAAgTgFQgXgFgRgOQgLgKgHgMQgHgMgDgOIgCgNQgBgOAEgLQAHgTALgQIAMgQIABAAIAhgmIAVgVIApgmIAfgeQALgLAJgMIARgaQAPgZAZgPQATgNAZgEQATgEAUAHIAkAMIAMADIAXAKQAiAUAWAgIAJAQIgBgHIAMAXIAKAVQAEAIACAKQAGAZACAYQACAagKAWQgGAQgMAHIgBATIAAANQAAAMgCAMIgGAhQgGAUgLATQgPAYgVARIgNAIIgDABQgBgBAAAAQgBAAgBAAQAAAAgBAAQAAAAAAABQgFABgFAEQgIAHgKAEQgKAFgMACIgIABQgRAAgQgHgAA8jLIgLAEIgXAQQgVAMgGATIAAAAIgGAaIgFAZQgBAIABAIIACAMQADAgAHAbQgDAFgBAEIgOCQQgCAYADAXIADAHQAFAIAIAHQAEAFAHAEQAPAGALgHQAMgOAFgUQAIgeACgfIAFg5IAEgsQACgQAEgOQAEgOAIgJQADAkgEAoIgCAWIgGA6IgDAZQgDAkgRAgIAUADIAUgBIAKgGQAKgJAJgKQANgOAHgSQAGgRAAgQIgBgTIgCgrQgBgUABgTQACgbAKgbIACAhIADAjIACAvIABAoQAAAbgMAXIAAABIABAAQAUgRAIgWQAJgYACgYQACgTgBgSIgCgvIgDgnQgDgfAHgcIABgEIABgBIAAgBIABABIABAAIAAgCIABgCIABAFQAHAqADAqIACAaQAKgNACgOQACgcgGgaIgEgQQgFgQgIgPIgDgFIgDgIIgHgMQgSghgggWQgVgNgagBIglADgAh6hGIgWAWIgUAUIghAjIgMAQQgOAVgDAYQgDAaARASQAIAJALAFQALAGANACQAQAFASACIAsgCIA6gIIAKh6IgYATIgJAHIgGAFIgIAIIghAkIgFADIAAgEIgBgGIABgCIADgKQAGgOAMgMQAOgPAPgKIAbgTQgNgHgLgJQgFgEgFgGIgDgGQgFgKgEgLQgGgWACgVIAAAAIAAAAIABgHIgqAmgAAJjQQgQAJgPARIgLAOQgLASgJASQgLAVABAZQAAAZANAUQALAQARAFIgFgzIAAAAIAAAAQgFgSADgQQAFgaAIgZQAEgLAGgKIAAgBIAtglIAAABIAIgEQgVABgRAJg");
	this.shape_218.setTransform(-3.6,-13.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#526139").s().p("AAjBQIgBAAIgGgBIgBAAQg0gOgQgHIABABQgQgIgGgHIgCgCIgLgIIAAAAQgXgSgJgYQACgNATgjIAOgZIAAAGIABAEIABADQADAMAKAMQAPASAgATQAXAMAYAJIAAABIAcAIIgBAAIAFACIABAAIABABIABAAIADAAIAFgBQALgDAFACIAAAAIAAAAIABgCQAAgEgIgCIgCAAQABgIAJAAQAKAAAAAJIgBAEQgBADgCACQgJAfgQAPQgMAKgRAAQgHAAgHgCg");
	this.shape_219.setTransform(-12.6,-59.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373D48").s().p("Ag5AUQAageAEgoIBVAfIgEAUQgHAdgTAVg");
	this.shape_220.setTransform(0.6,-16.5);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#758A51").s().p("ADKDhQgYgHgYgEIgVgCIgXgEIg2gMIAKgOIAJgQIADgJIAHgiIAfAHIAeAEIAfADIAkgIIAMA0QAHAZgCAaQgOgFgOgCgAhfCJIgagQQgXgOgVgQQgYgSgNgaQgMgVgHgWQgGgUgCgWQgFhFAhh8IADACQAIAJATAJIAAABQAPAGAxANQgjBUAFBMIACAWIAFAWQAIAaAJAbIAHggIASAMQAZASAcAOQgBARgFAQQgHAWgRASIgegOg");
	this.shape_221.setTransform(-0.3,-30.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#B3E4E6").s().p("AgSC2IAAgBIgagIIAAAAQgXgJgXgNQgdgRgOgQQgHgIgCgJIACgHIAAgBIAAgCIAFgMIABgCIAAgBIABgCIAAAAIAEgJQAPghAfg0QAohIAQgXIAAgBQAKgOAQgEQAEgBAGAAIABAAQAHgBAGAGIABABQAEAGABAKIAAAMIAAAAQAKAXhMB2QAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQADADADgBQAEAAACgDQBEhcABgtIgBgEQAAgVgHgMQAgg1AIAKQAGABAFADQAMAGAHALIACAEQAGARgYAzIgIAPQgiA/gWAcIgFAGIAFACIACAAQACACAEAAQADgBADgDQAogyAdg7IAIgPQAJgRABgPQAMAHABAJIAAACQAAAQgEAMIAAAAQgFANgPAUIAAAAIglA1IgBAAIgDAIIgIAKIgBABQgFAEgBAFQgNgBgQACQAAACgVAEQgqAPgJApQgBACABADQAPAfAfgCQAdgDATgLQADgDABgDQABgDgCgDIgGADQgNAHgHAAQgNAAgHgCIgHAAQgRACgJgQQAKgmAvgIQAYgFANAGQAJAEABALQAAAggoAlQgjAggMALIgFAEIgBAAIgGADIgDgBg");
	this.shape_222.setTransform(-3.6,-76.7);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AB2G3IgBABQglgGgigMQgUgGgTgIIgpgPIgogTIglgSQgWgMgWgQQgTgNgQgSQgQgUgKgWQgKgYgGgcIgGggQgEhJAjiCQgWgTgIgcIgBgDQAAgPAWgqQAZgwAQACIADAAIAGgLIACgFQAPggAbguQAphJAQgYQAKgPAPgHQAMgFAPAAQAJAAAGAEQAEgIAHgIQAWgaAPgGQAHgEAGADQARAGAMAMIAFAGQAFAGACAHQACAFABAGIABAAIABABQAbAMABAWIAAABIgBASIAAACIgBAGIgDAJQgGAPgQAWIglA2IAAAAIgDAGIAAABIgCACIgJAMIgCABIAAAAQATAJABAXQADAngvArIghAeIAGAAIAAADIAEAJQABADgBADQgKAvgWARQgXAVgjgIQgjBTAFBLIAFAkIAbAUIAaASIAcAQIAaAOIAfANIAeAKIAgAJIAgAHIBeAMIABAGIgjAIIgfgDIgegFIgfgGIgIAhIgDAJIgJARIgKAOIA2AMIAXADIAVADQAZAEAYAGQAOADAOAEIAAAGIh6gLgAgmFzIBVAgQATgVAHgeIAEgVIhVggQgFApgZAfgAjcCsQACAWAHAWQAHAWALAWQANAZAYASQAWAQAWAPIAbAQIAdAOQARgSAHgWQAGgRABgQQgcgPgagSIgSgMIgGAgQgKgagHgaIgFgYIgDgWQgFhNAjhUQgwgMgQgHIAAAAQgSgHgIgJIgEgDQghB7AFBEgAhVAEIABAAIAHABIABAAQAZAGASgMQAQgPAJgfQACgCABgDIABgEQAAgJgKAAQgJABgBAHIACAAQAIACAAAEIgBACIAAAAIgBAAQgEgCgLADIgGABIgDAAIAAAAIgCgBIgBAAIgEgCIAAAAIgbgIIgBgBQgYgJgYgOQgggTgPgSQgKgMgDgMIgBgDIgBgEIAAgGIgPAZQgTAkgBAMQAJAaAWASIABAAIAKAIIADACQAGAHAPAIIAAgBQAQAIA1ALgAgqhDIAAAAIADABIAGgDIABAAIAFgDQAPgMAhgfQAoglgBggQAAgMgKgEQgNgFgYAEQguAIgLAmQAJAQAUgBIAHgBQAHADAKAAQAHAAAOgHIAGgEQABADAAADQgBAEgDACQgTAMgbACQgiACgOgeQgCgDABgCQAKgqArgPQAUgDgBgCQARgDAMACQACgGAFgEIABgBIAHgKIAEgHIAAgBIAmg2IAAgBQAOgUAFgMIABgBQAEgLgBgRIAAgBQgBgKgLgGQgCAPgIARIgIAPQgeA6goA1QgCADgEAAQgDABgDgDIgBAAIgFgCIAFgGQAVgeAig/IAIgOQAZgzgGgRIgDgEQgHgLgMgGQgFgDgFgCQgJgJgfA1QAHALAAAWIAAADQAAAuhFBdQgCADgDABQgEAAgDgCQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAABgBAAQBNh4gKgWIAAgBIgBgMQgBgKgEgFIAAgCQgEgFgIAAIAAAAQgHAAgFACQgRADgJAPIAAAAQgQAXgoBJQggA2gPAhIgEAJIAAAAIAAABIgBABIAAACIgFANIgBABIAAABIgCAIQADAIAHAIQANARAdAQQAXAOAXAJIAAAAIAaAIg");
	this.shape_223.setTransform(-1.2,-51.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#758A51").s().p("AiMBGIgaAAIARgJQAjgSAfgYQAPgMAOgNQANgOASgEQAegBAdgHQAcgGAbgNIAfgPIgBgEQAFAJAJANQARAaAAAHQAAAGAPAlIglAKQhRAWhVAIIg0ACIg0AAg");
	this.shape_224.setTransform(7.7,-16.9);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#526139").s().p("AiJBvQgDgVAEgVQADgTAHgRQAHgSAKgPQAOgUAQgTQAPgTASgRQASgRAUgOQASgPAWgMQAXgOAdgEQAdgCAbAHIgqA6IgqA7QgeAmggAiIguArQgmAignAhQgGgVgCgVg");
	this.shape_225.setTransform(-42.5,-42.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#B3E4E6").s().p("AjCFuIg1gdIAHgCIAAAAIgHACIgcgkIAAAAIAAAAIgJgMQgIgNgIgOIgNgcIgDgHIACgHIgag+IAEgCIACgDIAAgBIgBgFIgDgIIAfgcIAOgNIAQgPQAWgSAXgWIAPgOQA2grAng9IAagnQALgSANgPQAMgPAQgNQAOgNARgKQAQgLARgJQAKgEAJgHQAWgMAUgNIArgeIAVgPIAKAnIAEATIADATQACAcgFAdIgEATIgdAGIgRADIgTADQghAFghADIgXACIAPABIAUABIAQAAQARABAQABIAGAAQAcAEAegFIgNApIgHAUIgIASQgNAegSAYIgMARIgoABIgSAAIgSgBQgTAAgWgBIgLgCIAiAJIAJACIARADQATAGAVACIAJABIAGAAIgXAeIgNANIgLAPQgQAVgVAUIgNAOIhagZIAUANIAUALIAJAFIAXALIguAjIgYAQIgZAQIg9g8IACAIIAJARIAKAPIAZAdIg2AZIgbAMIgcAKIAAABQAaAGAagIQATgEARgLIAggUIAfAdIg3AWIg5ASQAbAGAcgEQAcgEAYgKIAggPIBJAjIgHAEQgHAFgIACQgPAFgQgHQgLgEgMgCIgPgCQgHAPgOAKQgOAIgRABQgQgCgPgIgAgnAlQAJACgJgEIAAACgAgnh6IAGAAIAAAAIgGAAgAhLElIAfgXQAUgSAWgVIAYgcIANgOIA3ABIAAABIAbgDIAAgHIhGgHIANgQQASgWAQgYQASgYAOgYIAKgSIAVAAQAegCAcgKQAcgKAYgOIAOgKQgzALgzAKIgkAHIAKgTQAQgdALgfQALgeAGghIAEgWIASgIQAdgLAagOQAagPAYgRIARgMQgGALgCANQgEAYABAYQABARADASQAEAbgFAbQgFAbgIAZQgPA0gZAvQgYAuglAnIgeAhIgOALIgdAVQgVAPgZANQgLAFgLABIgDACQgHAGgKADIhBAlgAiHD/IAygiIAZgQIAZgSIAHgGIApAGIgfAiIgRAQIgSAQIgWAPIgVANgAgKCmIBeh2IAagBQgXAngZAnQgRAYgTAXgABrAKIATgjIASgnQANgdAJggIAOgEIgJAiQgHAZgJAYQgPAmgUAlIgXAAIAKgTgACvinQANhKgdhEQAXgTAdgHQAhgFAeAMQAMAFAGANIgEALQgGATAOAMIAIgFIANAJQANAIAHANIAEAHQggAbggAUQglAUgkALQAEg9gLg+IgHgEQABBCgIBEIgLABIADgRgACCl3IABAAIgBAAg");
	this.shape_226.setTransform(-20.7,-38.8);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AjUGBQg1gIgngpQgNgOgJgPQgPgYgMgZQgbg3gSg5IgDgKIgFgKQgUg6AQg5QAHgXANgXQANgXAQgVQAWgbAZgZQAZgXAbgVQAQgMARgIQAQgIASgDQARgFASgCIAmACIAPACQAHgCAHAAIAOABQANAAALgGQAagRAWgRQAZgVAbgTIAkgaIASgNIgKg0IAEgDIAAAAIAVAvQALgGAMgEQAYgKAYgGQAVgEAVgBQAdADANAaIAEALQAEAPgFAQQAJADAIAFQAJAGAJAIIAOARIApgPIgmAjIgBAJIgCAJIgBAHIgDAHIgHAMIAEAUQADAUABATQABAUgBATQgEBIgbBCQgaBBgsA5IATgEQAjgGAkgIIA7gMIACAEIABAEIgeAPQgcANgcAGQgdAGgfACQgTAEgNAOQgOAPgPAMQgeAXgjATIgSAIIAaABIA0AAIA0gDQBXgHBRgWIAlgKIAEALIgGADIggAOIgrANQhDAShEAFQhAAGhBgJQgSAAgSADQgQAEgOAHQgTALgUANIgbAQQgXAQgcgDQgRgDgOgIIgIAJQgHAIgIAGQgJAFgKAAQgMACgNAAIgEAAgAkVFGIgHACIA1AdQAPAHAQADQARgBAOgJQAOgJAHgPIAPACQAMABALAFQAQAHAPgGQAIgCAHgEIAHgEIhJgkIghAQQgXAKgcAEQgcADgbgFIA5gSIA3gWIgfgdIggAUQgRAKgTAFQgaAHgagFIAAgCIAcgJIAbgMIA2gaIgZgcIgKgPIgJgRIgDgIIA+A8IAZgQIAYgQIAugjIgXgLIgJgFIgUgLIgVgNIBbAYIANgNQAVgUARgVIAMgPIALgOIAXgdIgGAAIgJgBQgTgDgUgFIgSgEIgKgCIgigIIAMABQAWACAVAAIARABIASAAIAngBIAMgRQARgZAOgdIAIgTIAHgUIANgoQgeAFgcgEIgGAAQgQgCgRAAIgPAAIgTgBIgSgCIAagCQAfgCAggFIATgDIARgDIAegGIAEgTQAFgegCgcIgDgTIgEgTIgKgmIgVAPIgrAeQgVANgVAMQgHAGgKAFQgSAJgRAKQgRALgPANQgPAMgMAQQgNAPgLASIgaAnQgoA9g1ArIgPAOQgXAVgXATIgPAOIgPAOIgeAcIADAIIAAAEIAAACIgBADIgEACIAaA+IgCAHIACAHIAOAcQAHANAJANIAJAMIAAABIAAAAIAcAkIAHgCgAgNDCIgaAcQgWAVgVARIgeAYIBEAmIBBgmQAJgCAIgGIACgCQAMgCALgEQAZgNAVgPIAdgVIAOgMIAeggQAkgoAZgtQAZgvAPgzQAHgaAGgbQAFgbgEgbQgDgSgBgRQgBgZAEgYQACgMAFgMIgQANQgYARgaAOQgaAPgdALIgSAIIgEAWQgGAggLAfQgMAfgPAdIgKASIAkgGQAzgKAzgKIgPAJQgXAOgcAKQgcAJgeACIgVABIgKARQgOAYgSAZQgQAXgTAXIgMAQIBGAHIAAAGIgcADIAAAAIg0gBIgNAOgAhJCyIgYASIgZAQIgyAiIAnAaIAVgNIAWgQIASgPIARgQIAhgiIgsgGgAAvAnIhfB2IAnAGQARgXAQgZQAagmAXgngAipjCQgdAFgYANQgVANgUAPQgUAOgSARQgSARgQASQgQAUgNAVQgKAQgHARQgIAQgDASQgDAVACAVQACAVAGAVQAoggAmgjIAtgqQAjghAdgoIAqg6IAqg7QgVgFgYAAIgKAAgACBiGQgJAfgNAeIgSAmIgTAkIgLATIAYAAQAUglAPgmQAJgYAHgZIAJgigACulYQgdAHgYATQAeBEgNBKIgDARIALgBQAIhEgBhCIAHAEQALA9gFA+QAlgLAkgVQAhgTAggbIgEgHQgHgNgNgIIgOgJIgHAEQgPgMAHgSIAEgLQgGgOgMgEQgVgJgVAAQgLAAgKACgAhMAbIAAgBQABAAABABQABAAABAAQAAABAAAAQAAAAAAAAIgEgBgAhGiEIAAABIgGAAIAGgBg");
	this.shape_227.setTransform(-17,-37.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#758A51").s().p("AhxChQAbAIAZgEQAQgCAMgNIgCgEIALgJIANgLQAKgIARgKQATgJAFgjQAGgjgBgTQgBgcgZgSIgBgMIgGgMQgPgiAAgDQAAgHAIgTIATghIABgCQAKgSAPAJQAPAIAAANQAAAGgHARQAKAMAJANQAMASAOARIAHAJIAEAGIgBAJIgNAAIgOAgIgUAsIgUAtQgLAWgSAVQgJAJgIAHQgOAKgQAJQgJAFgKADQgLADgMAAQgVAAgUgKg");
	this.shape_228.setTransform(16.9,-6.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#526139").s().p("AgzAIIAHgoIAgAJIAGAOIAFAHQAUAVAhAAIgJAGQgFAEgHABQgLADgLAAQghgCgbgXg");
	this.shape_229.setTransform(6.9,5.2);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#B3E4E6").s().p("AiBCwQgFgEgDgFQgSgcAKghIAHgdIAMgoIAJgiQAHgZAJgXQALgZAIgaIAGgBQAJgKgDgOIgCgNQgDgbAZgRIAEgCIANgEQAegBAZANQAZAMAMAYQAFAIAAAKIgDAFIgKgFQgLAAgJACQgQAFgLABIgOgBIgEAIIAIALQgPAPgDATQgDASgHARQgEAHgBAIIgDAaIgGBAIgEAtQgBAPgDAOQgCAHgEAHQgFAGgGACQgOAHgNAAQgPAAgOgJgAAsBBQAMgEAIgJQAhgjAGgvIACgGQARgHAOAPQAEAEACAFQAKATgDAYQgCAQgGAPQgFAMgJAIQgJAHgLADIgNAAQgdAAgVgUgAgMAgQgEgEgBgFIgCgMQAAgZAJgZQAFgPAOgJIACgJQAKgQATgCQAWgEANARQAHAKAAALQgBAbgKAZQgGAOgJAPQgKAOgRAEIgMABQgRAAgMgMgABmhBQgEgUgSgQIAGgPIAWAYQAFAFACAHQACAHABAJg");
	this.shape_230.setTransform(4.3,-4.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AiNDTQgWgFgQgPQgTgTgDgaIgDgUIAAgGQAFgnAGgnQAIgwAUgvQAJgTAGgUQADgKAKgIQgGgUAGgUQAKgmAjgUQAKgGAJADQAGgBAGAEQA9ADAjAuIAKAOIATAIIAIAKIATgjQAQgZAGAKIgBACIgTAhQgKATAAAHQAAADARAiIAGAMIABAMQAZASABAeQABARgGAjQgFAjgTAKQgTAJgKAJIgNAKIgLAJIACAEQgMANgQACQgZAEgZgIQAdAQAhgJQAKgDAJgFQAQgJAOgKQAKgHAJgJQASgVALgWIAUgtIAUgsIAOggIANAAIABgJQAEgCgBAIQgKAugVApQgVAqgZAlQgbApgpAWQgMAHgOACQgOADgOABQgtgEgfghQgFAdgQAYQgIALgNAEIgNABQgIAAgIgCgAhHi4IgNADIgEACQgZARADAbIACANQADAOgJAKIgGABQgIAagLAZQgJAYgHAZIgJAiIgMAnIgHAeQgKAhASAcQADAFAFAEQAaARAegPQAGgDAFgGQAEgGACgIQADgOABgOIAEgtIAGhAIADgaQABgIAEgHQAHgSADgSQADgTAPgPIgIgKIAEgJIAQABQALgBAQgFQAHgCALABIAKAEIADgEQAAgKgFgJQgMgYgXgLQgZgMgcAAIgEAAgAg/BnQAaAXAjACQAJAAALgDQAHgBAGgEIAIgGQghAAgUgXIgFgHIgGgOIgggJgABDgkIgCAFQgGAvghAjQgIAJgMAEQAZAZAmgFQALgCAJgIQAJgIAFgMQAGgOACgRQADgXgKgUQgCgFgEgEQgKgKgKAAQgFAAgGADgAAChbQgRADgKAQIgCAJQgQAJgFAPQgJAZAAAZIACAMQABAFAEADQASAQAZgFQAPgDAKgPQAJgOAGgPQAKgZABgaQAAgLgHgLQgLgNgQAAIgIAAgAAqhmQASAQAEAUIAQABQgBgIgCgIQgCgGgFgGIgWgXg");
	this.shape_231.setTransform(8.1,-4.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#758A51").s().p("AhqBwQgbg0gUg8IgEAAIgHgaIgJgoQA/AYA6gFQASgBAQgEIAAADIAAAaIAAAAQACAQAEANQANA6ALANQAIAKAHACQgFgpgHgUQAUgPAShIQANg1AHgyIgJgJQAAgGAGABIAAABIAAgBIABgDIABgBIADgBQARgBAOASIAPAaQAKATAPASQAEgEAIAAQAPgBAAAPQABAPgQABIgCAAIgBAAIgEACQgGBDgmBHQgrBQg+AeQgNAHgOAAQgtAAgkhGg");
	this.shape_232.setTransform(10,-0.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#526139").s().p("AhZAwQgcgPgSgRIgCAAIgCgDQAAgOAIgjIADgJQAKALAPAHIAOAFQAQAOAVgCIADAAQBYASBcgdIAFgHIgVACIgQABQALgHAJgNIABABQAKAEAEAFIADAHIgBAAIABAAQACAFABAGQgBAdgSAYIgNAOQgBAEgKAIQgNAJgUACQgEAAgEgBIgRACIgXABQg5AAgwgbgAh+g3IAAgCIAGgRIAHASIAEAIIgRgHg");
	this.shape_233.setTransform(0.9,-14.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#B3E4E6").s().p("AACCJIgTgNIgMgIQgHgHgDgIQgJgUgEgWQgFgFgDgGQgHgNACgNIACgWQAAgNgBgNQgCgOgFgMIgDAAQgGAAgMgLQgIAFgFAFQgGAOgHAKQgMASgQAAIgCAAIgFAJIgGAAQgIgCgFgFQgOgRAGgVQANgwAngeQAbgUAjAAQAZAAAUASIAGAFIgFAEIgCAFIgSAdIALATQAMgQAPgOQAEgGAIgEIABAAQAtgKAYAQIAHAGQgNAIgKAYQgDAFAAADQgDAGgBAHIAAACIAIADQAOgeAagGQAegHAVAOQAOAKADALIABAGIABABQAEAOADAiQADAYgJAMIgEgVQgFgRgQgHIgDgBQAGAVADAVQAEAagFAMIAAALIgBANIgEABIgIAMIgGAGIgCADQgIAMgSACIABAEIgKAAQgyAAgwgJg");
	this.shape_234.setTransform(-3.9,-31.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000000").s().p("AAJFBQgmgbgrh3IgNgqIgEgBQgJgqAHgXQgbgMgNgLQgEAAgFgFIgEgQQgGgFAAgHQAAgaAJgkIADgMIAOgfIAEABQgHgcgCgfQAAgIABgIQAEgSgHgRQgDgHgEAAIgfAuQgHAKgMAFQgNACgLgDQgVgFgJgTQgFgLgEgMQgDgMADgNQAKgtAfgkQAngrBBAAQAlAAAXAXQAJAJAEAHQAlgGAlATQAVALAKALQANAAALAFIAGgBQAWAEAOASQAMAOAEARQAIAbACAbQAEAzgaAGQgDABgEgBIABAbIgBAQIgEAAIAAAAIgCAEQAZACADAdQAIgVAGgHIgBAOIgCAAIgBABIgBADIgBAAQgFgBAAAGIAIAJQgGAwgNA1QgTBKgTAPQAHAUAEApQgGgCgJgKQgKgNgQg6QgEgOgCgQIABgBIgBgaIAAgDQgPAEgTABQg3AFg/gYIAIApIAHAZIAFABQATA9AbA0QAuBcA/gdQA+geAqhQQAmhIAGhEIAEgCIACAAIACAAQgBAggFAeQgQBdg+BMQgnAvg8AGIgDAAQgWAAglgagABbBRIAAAEQAFAhAJAfIAKgXQANgfAAgEQAAgOAGgaQgQAUgbAKgAhUAtQA5AgBHgGIARgCQAEABAEgBQATgBAOgKQAKgHABgFIANgOQASgYAAgdQAAgGgCgEIAAgBIgDgGQgEgFgKgEIgBgBQgJANgLAHIAQgCIAVgBIgGAHQhcAchXgSIgDAAQgVACgRgOIgNgFQgPgHgLgLIgCAJQgIAjAAAPIABADIACgBQATARAcAQgAh2jhIADAAQAFAMACANQABAOAAAOIgCAWQgCAOAHAMQADAGAFAFQAEAXAJATQADAIAHAIIAMAIIAVAMQAzAKA3gBIgBgDQASgDAIgMIACgCIAGgHIAIgMIAEAAIABgOIAAgLQAFgLgEgbQgDgVgGgUIADAAQAQAHAFASIAEAVQAJgNgDgXQgDglgEgNIgBgBIgBgHQgDgLgOgKQgVgNgeAGQgaAGgOAeIgIgCIAAgDQABgGADgGQAAgEADgFQAKgYANgIIgHgGQgYgPgrAJIgBABQgIAEgGAGQgPAOgMAQIgLgUIASgdIACgFIAFgEIgGgFQgUgSgZAAQgjAAgbAUQgnAegNAwQgGAVAOARQAFAGAIABIAGAAIAFgIIACAAQAQAAAMgTQAHgKAGgNQAFgFAIgFQAMALAGAAgAh5g9IgBACIARAHIgDgHIgHgTg");
	this.shape_235.setTransform(0.4,-14.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_174},{t:this.shape_173},{t:this.shape_172}]}).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_178},{t:this.shape_177}]},1).to({state:[{t:this.shape_181},{t:this.shape_180},{t:this.shape_179}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186}]},1).to({state:[]},40).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_194,p:{rotation:0,x:-21.9,y:-11.2}},{t:this.shape_193,p:{rotation:0,x:-21.7,y:-11.5}},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[]},1).to({state:[{t:this.shape_194,p:{rotation:15,x:1.5,y:53}},{t:this.shape_193,p:{rotation:15,x:1.8,y:52.7}}]},1).to({state:[{t:this.shape_196,p:{scaleX:0.847,scaleY:0.847,skewX:0,skewY:0,x:2.7,y:-85.5}},{t:this.shape_195,p:{scaleX:0.847,scaleY:0.847,skewX:0,skewY:0,x:2.8,y:-85.5}}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_196,p:{scaleX:0.857,scaleY:0.818,skewX:-12.2,skewY:-18.2,x:-0.4,y:-81.8}},{t:this.shape_195,p:{scaleX:0.857,scaleY:0.818,skewX:-12.2,skewY:-18.2,x:-0.3,y:-81.8}}]},1).to({state:[]},9).to({state:[{t:this.shape_176},{t:this.shape_175}]},1).to({state:[{t:this.shape_194,p:{rotation:0,x:-21.9,y:-11.2}},{t:this.shape_193,p:{rotation:0,x:-21.7,y:-11.5}},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},8).to({state:[{t:this.shape_176},{t:this.shape_197}]},1).to({state:[{t:this.shape_194,p:{rotation:0,x:-21.9,y:-11.2}},{t:this.shape_193,p:{rotation:0,x:-21.7,y:-11.5}},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_194,p:{rotation:15,x:1.5,y:53}},{t:this.shape_193,p:{rotation:15,x:1.8,y:52.7}}]},1).to({state:[]},1).to({state:[{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198}]},1).to({state:[{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203}]},1).to({state:[{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208}]},1).to({state:[{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214}]},1).to({state:[{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219}]},1).to({state:[{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224}]},1).to({state:[{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228}]},1).to({state:[{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232}]},1).to({state:[]},1).to({state:[{t:this.shape_194,p:{rotation:15,x:-4.3,y:44}},{t:this.shape_193,p:{rotation:15,x:-4,y:43.7}}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-28.5,49.1,57.1);


(lib.CUP_23_leg_COMP = function() {
	this.initialize();

	// foot
	this.instance = new lib.CUP_23_foot("synched",0);
	this.instance.setTransform(13.2,17.4,1,1,0,0,0,13.2,-0.3);

	// leg
	this.instance_1 = new lib.CUP_23_leg("synched",0);
	this.instance_1.setTransform(9.4,-22,1,1,0,0,0,0,-16);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-26.1,42.9,52.4);


(lib.CupHeadclipPROTEIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CUP_34DOWN_mouth
	this.instance = new lib.CUP_34DOWN_mouth("single",22);
	this.instance.setTransform(105.7,86.8,1,1,-2.1);

	this.instance_1 = new lib.CUP_23_MOUTH_COMPcopy("single",2);
	this.instance_1.setTransform(105.2,85.1,0.792,0.531,0,10.8,8.7,31,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhWAtQgggMgTgXIgGgMIgCgGIhGgGIgNgDIgIgCQgBAAABABIgRgDQgMgEgCgCIAAgBQAEgBADAAIAgAFQAZADAbABQAPgHAagIIAegJQAOgFAPgCQARgEASAAIADAAQAigDAhALQAhAHAcAJQAdAIAaAMIA7gCQAjgBAKABIALABQADAAAFACQgKABgKAFIgFACQghAChaABIgDAAIgIAPQgJAMgIAFQgSAQgdADIhAAFQgkgCgfgKgAiDgEQAEAEACAEQAPARAgANQAkAOAegBIAygGQAEgCAGAAQASgIASgKQAAAAAAgBQABAAAAgBQABAAAAAAQABAAABAAIABgCIAHgLIABAAIAAgCIACgCQiIgChegHIgCAAIACADgAglguQgNAAgKACQgSABgRAFIgJACQggAHgYAJIgDAAIEeAJIAGAAIgCgBQgigOgigIQghgIgfgDQgKgBgKAAIgMAAg");
	this.shape.setTransform(107.5,88.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A83C47").s().p("Ag9AiQgfgNgQgRQgBgEgEgEIgCgDIACAAQBdAHCJACIgDACIAAACIgBAAIgHALIgBACQgBAAAAAAQgBABgBAAQAAAAAAABQgBAAAAAAQgSALgRAHQgGAAgFACIg0AGIgDAAQgbAAgigNgACMgLIkegJIADAAQAYgJAhgHIAJgCQAQgFASgBQALgCAMAAQAQgBAPACQAgADAhAIQAiAIAjAOIACABIgHAAg");
	this.shape_1.setTransform(105.8,88.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{startPosition:2}}]},7).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:4}}]},1).to({state:[{t:this.instance_1,p:{startPosition:3}}]},2).to({state:[{t:this.instance_1,p:{startPosition:18}}]},1).to({state:[{t:this.instance_1,p:{startPosition:6}}]},1).to({state:[{t:this.instance_1,p:{startPosition:7}}]},1).to({state:[{t:this.instance_1,p:{startPosition:8}}]},1).to({state:[{t:this.instance_1,p:{startPosition:7}}]},2).to({state:[{t:this.instance_1,p:{startPosition:18}}]},1).to({state:[{t:this.instance_1,p:{startPosition:6}}]},2).to({state:[{t:this.instance_1,p:{startPosition:7}}]},1).to({state:[{t:this.instance_1,p:{startPosition:8}}]},1).to({state:[{t:this.instance_1,p:{startPosition:7}}]},3).to({state:[{t:this.instance_1,p:{startPosition:1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:18}}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}}]},3).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:11}}]},2).to({state:[{t:this.instance_1,p:{startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{startPosition:18}}]},2).to({state:[{t:this.instance_1,p:{startPosition:6}}]},2).to({state:[{t:this.instance_1,p:{startPosition:7}}]},1).to({state:[{t:this.instance_1,p:{startPosition:6}}]},2).to({state:[{t:this.instance_1,p:{startPosition:12}}]},1).to({state:[{t:this.instance_1,p:{startPosition:18}}]},2).to({state:[{t:this.instance_1,p:{startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:6}}]},61).to({state:[{t:this.instance_1,p:{startPosition:7}}]},1).to({state:[{t:this.instance_1,p:{startPosition:6}}]},2).to({state:[{t:this.instance_1,p:{startPosition:18}}]},2).to({state:[{t:this.instance_1,p:{startPosition:3}}]},3).to({state:[{t:this.instance_1,p:{startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:13}}]},2).to({state:[{t:this.instance_1,p:{startPosition:18}}]},2).to({state:[{t:this.instance_1,p:{startPosition:3}}]},2).to({state:[{t:this.instance_1,p:{startPosition:4}}]},1).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}}]},3).to({state:[{t:this.instance_1,p:{startPosition:3}}]},1).to({state:[{t:this.instance_1,p:{startPosition:2}}]},2).to({state:[{t:this.instance_1,p:{startPosition:18}}]},1).to({state:[{t:this.instance_1,p:{startPosition:13}}]},2).to({state:[{t:this.instance_1,p:{startPosition:4}}]},1).to({state:[{t:this.instance_1,p:{startPosition:3}}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}}]},1).to({state:[{t:this.instance_1,p:{startPosition:18}}]},1).to({state:[{t:this.instance_1,p:{startPosition:1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:6}}]},1).to({state:[{t:this.instance_1,p:{startPosition:7}}]},1).to({state:[{t:this.instance_1,p:{startPosition:8}}]},1).to({state:[{t:this.instance_1,p:{startPosition:7}}]},2).to({state:[{t:this.instance_1,p:{startPosition:2}}]},1).to({state:[{t:this.instance_1,p:{startPosition:1}}]},2).to({state:[{t:this.shape_1},{t:this.shape}]},16).to({state:[{t:this.instance_1,p:{startPosition:22}}]},1).to({state:[{t:this.instance}]},3).wait(7));

	// CUP_34_pupil_02
	this.instance_2 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_2.setTransform(188.7,62.3);

	this.instance_3 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_3.setTransform(53.9,65.7,1,1.212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},6).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},1).to({state:[]},1).to({state:[]},98).to({state:[]},1).to({state:[]},1).to({state:[]},4).to({state:[{t:this.instance_3,p:{scaleY:1.212,x:53.9,y:65.7}},{t:this.instance_2,p:{scaleY:1.212,x:188.5,y:64.2}}]},1).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},1).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},2).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},58).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},1).to({state:[]},1).to({state:[{t:this.instance_3,p:{scaleY:1,x:53.7,y:67.2}},{t:this.instance_2,p:{scaleY:1,x:188.2,y:65.9}}]},6).to({state:[{t:this.instance_2,p:{scaleY:1,x:188.7,y:62.3}}]},1).to({state:[]},1).to({state:[{t:this.instance_3,p:{scaleY:1,x:57.1,y:61.6}},{t:this.instance_2,p:{scaleY:1,x:191.2,y:60.3}}]},2).wait(7));

	// CUP_34_pupil_01
	this.instance_4 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_4.setTransform(191.2,60.3);

	this.instance_5 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_5.setTransform(57.1,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{x:57.1,y:61.6}},{t:this.instance_4}]}).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},6).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},1).to({state:[]},1).to({state:[]},98).to({state:[]},1).to({state:[]},1).to({state:[]},4).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},2).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},2).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},58).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},1).to({state:[]},1).to({state:[]},6).to({state:[{t:this.instance_5,p:{x:54.1,y:63.6}}]},1).to({state:[{t:this.instance_5,p:{x:57.1,y:61.6}},{t:this.instance_4}]},1).to({state:[]},2).wait(7));

	// CUP_34_brow_02
	this.instance_6 = new lib.CUP_34_brow_02("synched",0);
	this.instance_6.setTransform(187,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({rotation:3.6},0).wait(1).to({rotation:6.7,x:189.4,y:30.3},0).wait(1).to({rotation:15},0).wait(98).to({rotation:0,x:189.1,y:33.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.3,x:188.5,y:41.1},0).wait(1).to({rotation:-7.8,x:188.2,y:44.7},0).wait(4).to({scaleX:1,scaleY:1,rotation:6.5,x:190.2,y:32.4},0).wait(2).to({scaleX:1,scaleY:1,rotation:15,x:190,y:25.3},0).wait(2).to({x:189.8,y:26.5},0).wait(58).to({x:189.6,y:27.7},0).wait(1).to({rotation:0,x:188.6,y:33.7},0).wait(1).to({x:188.2,y:36.1},0).wait(6).to({x:188.4,y:34.9},0).wait(1).to({x:186.9,y:31.3},0).wait(1).to({x:187,y:29.3},0).wait(2).to({y:30.1},0).wait(7));

	// CUP_34_brow_01
	this.instance_7 = new lib.CUP_34_brow_01("synched",0);
	this.instance_7.setTransform(56.4,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({rotation:-6.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-15.6,y:34},0).wait(1).to({scaleX:1,scaleY:1,rotation:-22.6},0).wait(98).to({scaleX:1,scaleY:1,rotation:-16.3,x:56.2,y:36.4},0).wait(1).to({rotation:-7.4,x:55.8,y:42.2},0).wait(1).to({rotation:-2.1,x:55.6,y:44.6},0).wait(4).to({rotation:-22.6,x:56.8,y:37.1},0).wait(2).to({scaleX:1,scaleY:1,x:57,y:29},0).wait(2).to({x:56.8,y:30.2},0).wait(58).to({x:56.6,y:31.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-13.9,x:56,y:35},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.6,x:55.6,y:37.4},0).wait(6).to({x:55.7,y:36.2},0).wait(1).to({rotation:0,x:56.2,y:35.9},0).wait(1).to({x:56.4,y:34},0).wait(2).to({y:34.7},0).wait(7));

	// CUP_34_eye_02
	this.instance_8 = new lib.CUP_34_eye_02("single",0);
	this.instance_8.setTransform(193.9,61.3,0.924,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(6).to({scaleY:0.95,y:62.5},0).wait(1).to({scaleY:1,y:61.3,startPosition:1},0).wait(1).to({startPosition:6},0).wait(98).to({scaleY:0.98},0).wait(1).to({scaleY:0.91,y:59.2},0).wait(1).to({scaleY:0.88},0).wait(4).to({scaleY:0.92},0).wait(1).to({startPosition:1},0).wait(1).to({scaleY:1.02,y:60.7,startPosition:0},0).wait(2).to({scaleY:1,y:61.3},0).wait(58).to({scaleY:0.95,y:62.6},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(1).to({scaleY:0.94,y:62.9,startPosition:0},0).wait(1).to({scaleY:1.03,y:60.6},0).wait(2).to({scaleY:1,y:61.3},0).wait(7));

	// CUP_34_eye_01
	this.instance_9 = new lib.CUP_34_eye_01("single",0);
	this.instance_9.setTransform(52.1,58.4,1,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(6).to({scaleY:0.91,y:59.7},0).wait(1).to({scaleY:0.96,y:58.4,startPosition:1},0).wait(1).to({startPosition:6},0).wait(98).to({scaleY:0.92},0).wait(1).to({scaleY:0.89,y:57.9},0).wait(1).to({scaleY:0.86},0).wait(4).to({scaleY:0.92},0).wait(1).to({startPosition:1},0).wait(1).to({scaleY:0.98,y:57.7,startPosition:0},0).wait(2).to({scaleY:0.96,y:58.4},0).wait(58).to({scaleY:0.91,y:59.9},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(6).to({startPosition:1},0).wait(1).to({scaleY:0.9,y:60.2,startPosition:0},0).wait(1).to({scaleY:0.98,y:57.6},0).wait(2).to({scaleY:0.96,y:58.4},0).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.1,22.1,182.2,77.6);


(lib.CupHeadclipLR = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CUP_34DOWN_mouth
	this.instance = new lib.CUP_34DOWN_mouth("single",22);
	this.instance.setTransform(105.7,86.8,1,1,-2.1);

	this.instance_1 = new lib.CUP_23_MOUTH_COMPcopy("single",23);
	this.instance_1.setTransform(105.2,85.1,0.792,0.531,0,10.8,8.7,31,10.3);

	this.instance_2 = new lib.CUP_34DOWN_brow_02("synched",0);
	this.instance_2.setTransform(179.2,60.2,1.228,0.975,0,-5.1,-11.6);

	this.instance_3 = new lib.CUP_34DOWN_brow_01("synched",0);
	this.instance_3.setTransform(53.9,58.7,0.997,0.968,0,7.7,15.6);

	this.instance_4 = new lib.CUP_34_eye_02("single",6);
	this.instance_4.setTransform(185.8,76.9,0.932,0.932);

	this.instance_5 = new lib.CUP_34_eye_01("single",6);
	this.instance_5.setTransform(50.6,70.1,0.97,0.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleX:1,scaleY:1,rotation:-2.1,x:105.7,y:86.8,mode:"single",startPosition:22}}]}).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},12).to({state:[]},1).to({state:[{t:this.instance_1,p:{startPosition:28,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},13).to({state:[{t:this.instance_1,p:{startPosition:29,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:28,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance_1,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:33,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},12).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:32,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance_1,p:{startPosition:27,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},8).to({state:[{t:this.instance_1,p:{startPosition:27,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:33,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},7).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:32,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance_1,p:{startPosition:27,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},8).to({state:[{t:this.instance_1,p:{startPosition:27,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance,p:{scaleX:0.97,scaleY:0.97,rotation:0,x:106.3,y:97.5,mode:"synched",startPosition:0}}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{startPosition:26,regX:30.9,scaleX:0.768,scaleY:0.515,skewX:13,skewY:10.9,x:105.9,y:95.9}}]},6).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{startPosition:28,regX:30.9,scaleX:0.768,scaleY:0.515,skewX:13,skewY:10.9,x:105.9,y:95.9}}]},1).to({state:[{t:this.instance_1,p:{startPosition:29,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:30,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:29,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:32,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:26,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance_1,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_1,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance_1,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).wait(15));

	// CUP_34_pupil_01
	this.instance_6 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_6.setTransform(191.2,60.3);

	this.instance_7 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_7.setTransform(57.1,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{y:61.6,x:57.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:191.2,y:60.3,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_7,p:{y:61.6,x:57.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:191.2,y:60.3,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_7,p:{y:61.4,x:57.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:191,y:62.7,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.instance_7,p:{y:62.1,x:50.5,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:182.6,y:62,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.instance_7,p:{y:49,x:50.9,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:182.4,y:49.9,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_7,p:{y:49,x:50.9,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:182.4,y:49.9,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:49,x:50.9,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:182.4,y:49.9,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_7,p:{y:52.6,x:50.7,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:182.3,y:51.1,scaleX:1,scaleY:1}}]},14).to({state:[{t:this.instance_7,p:{y:71.8,x:46.6,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:172.6,y:76.8,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.instance_7,p:{y:66.5,x:46.6,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:175,y:67,scaleX:1,scaleY:1}}]},12).to({state:[{t:this.instance_7,p:{y:63.8,x:46.4,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:174.3,y:64.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:63.8,x:46.4,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:174.3,y:64.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:63.8,x:46.4,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:174.3,y:64.3,scaleX:1,scaleY:1}}]},3).to({state:[{t:this.instance_7,p:{y:63.8,x:47.9,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:175.9,y:64.5,scaleX:1,scaleY:1}}]},14).to({state:[{t:this.instance_7,p:{y:63.6,x:50.8,scaleX:1.493,scaleY:0.871}},{t:this.instance_6,p:{x:180,y:65.7,scaleX:1.569,scaleY:0.875}}]},1).to({state:[{t:this.instance_7,p:{y:63,x:55.1,scaleX:1.386,scaleY:1}},{t:this.instance_6,p:{x:186,y:65.9,scaleX:1.235,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:63,x:57.2,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:188.8,y:66,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:63,x:57.2,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:188.8,y:66,scaleX:1,scaleY:1}}]},45).to({state:[]},1).to({state:[{t:this.instance_7,p:{y:63.6,x:56.7,scaleX:1,scaleY:1.613}},{t:this.instance_6,p:{x:188.2,y:64.5,scaleX:1,scaleY:1.688}}]},8).to({state:[{t:this.instance_7,p:{y:57.7,x:57.4,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:189.1,y:58.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:57.7,x:57.4,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:189.1,y:58.6,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_7,p:{y:60,x:57.2,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:188.9,y:60.9,scaleX:1,scaleY:1}}]},7).to({state:[{t:this.instance_7,p:{y:62.3,x:57,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:188.7,y:63.2,scaleX:1,scaleY:1}}]},1).to({state:[]},1).to({state:[{t:this.instance_7,p:{y:62.3,x:57,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:188.7,y:63.2,scaleX:1,scaleY:1}}]},5).to({state:[{t:this.instance_7,p:{y:63.9,x:56.9,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:191,y:62.6,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_7,p:{y:61.6,x:57.1,scaleX:1,scaleY:1}},{t:this.instance_6,p:{x:191.2,y:60.3,scaleX:1,scaleY:1}}]},1).wait(10));

	// CUP_34_brow_02
	this.instance_8 = new lib.CUP_34_brow_02("synched",0);
	this.instance_8.setTransform(187,30.1);

	this.instance_9 = new lib.CUP_23_MOUTH_COMPcopy("single",27);
	this.instance_9.setTransform(105.9,95.9,0.768,0.515,0,13,10.9,30.9,10.3);

	this.instance_10 = new lib.CUP_34DOWN_brow_02("synched",0);
	this.instance_10.setTransform(179.1,55.7,1.228,0.975,0,-5.1,-11.6);

	this.instance_11 = new lib.CUP_34DOWN_brow_01("synched",0);
	this.instance_11.setTransform(53.9,53.4,0.997,0.968,0,7.7,15.6);

	this.instance_12 = new lib.CUP_34_eye_02("single",4);
	this.instance_12.setTransform(185.8,76.9,0.932,0.932);

	this.instance_13 = new lib.CUP_34_eye_01("single",4);
	this.instance_13.setTransform(50.6,70.1,0.97,0.97);

	this.instance_14 = new lib.CUP_34DOWN_mouth("synched",1);
	this.instance_14.setTransform(106.3,97.5,0.97,0.97);

	this.instance_15 = new lib.CUP_34DOWN_brow_02("synched",0);
	this.instance_15.setTransform(193.5,60.5,1.228,0.975,0,-5.1,-11.6);

	this.instance_16 = new lib.CUP_34_eye_02("single",6);
	this.instance_16.setTransform(200.4,75.7,0.932,0.932);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{y:30.1,rotation:0,x:187,skewX:0,skewY:0,scaleX:1,scaleY:1}}]}).to({state:[{t:this.instance_8,p:{y:30.5,rotation:0,x:187,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_8,p:{y:34.9,rotation:-8.4,x:186.6,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{y:42.1,rotation:0,x:186,skewX:165,skewY:-14.9,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{y:34.9,rotation:-8.4,x:186.6,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.instance_8,p:{y:31,rotation:-10.2,x:186.9,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_8,p:{y:30.2,rotation:-10.2,x:186.9,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:32.5,rotation:-10.2,x:186.8,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_8,p:{y:33.2,rotation:-10.2,x:186.8,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},14).to({state:[{t:this.instance_13,p:{startPosition:4,x:50.6,y:70.1}},{t:this.instance_12,p:{startPosition:4,x:185.8,y:76.9,skewY:0}},{t:this.instance_11,p:{x:53.9,y:53.4}},{t:this.instance_10,p:{x:179.1,y:55.7,skewX:-5.1,skewY:-11.6}},{t:this.instance_9,p:{skewX:13,skewY:10.9,x:105.9,y:95.9,startPosition:27}}]},1).to({state:[{t:this.instance_13,p:{startPosition:6,x:50.6,y:70.1}},{t:this.instance_12,p:{startPosition:6,x:185.8,y:76.9,skewY:0}},{t:this.instance_11,p:{x:53.7,y:57}},{t:this.instance_10,p:{x:178.9,y:61.7,skewX:-5.1,skewY:-11.6}},{t:this.instance_14,p:{x:106.3,startPosition:1,skewX:0,skewY:0,y:97.5,mode:"synched"}}]},1).to({state:[{t:this.instance_13,p:{startPosition:6,x:54,y:70.6}},{t:this.instance_12,p:{startPosition:6,x:189.2,y:77.4,skewY:0}},{t:this.instance_11,p:{x:57.1,y:57.5}},{t:this.instance_10,p:{x:182.3,y:62.2,skewX:-5.1,skewY:-11.6}},{t:this.instance_14,p:{x:108.7,startPosition:9,skewX:0,skewY:0,y:97.5,mode:"synched"}}]},8).to({state:[{t:this.instance_14,p:{x:136.8,startPosition:29,skewX:8.3,skewY:-171.6,y:99.3,mode:"single"}},{t:this.instance_16},{t:this.instance_15},{t:this.instance_12,p:{startPosition:6,x:61.6,y:76.8,skewY:180}},{t:this.instance_10,p:{x:68.5,y:61.6,skewX:5.2,skewY:-168.2}}]},2).to({state:[{t:this.instance_9,p:{skewX:-4.6,skewY:177.4,x:137.5,y:97.8,startPosition:42}},{t:this.instance_16},{t:this.instance_15},{t:this.instance_12,p:{startPosition:6,x:61.6,y:76.8,skewY:180}},{t:this.instance_10,p:{x:68.5,y:61.6,skewX:5.2,skewY:-168.2}}]},1).to({state:[{t:this.instance_8,p:{y:42.1,rotation:-10.2,x:187.6,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:25.3,rotation:-10.2,x:186.2,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:24.1,rotation:-10.2,x:186,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:27.7,rotation:-10.2,x:186.7,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},3).to({state:[{t:this.instance_8,p:{y:31.3,rotation:-13.4,x:186.5,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:32.1,rotation:-13.4,x:186.5,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},13).to({state:[{t:this.instance_8,p:{y:34.3,rotation:-13.4,x:186.9,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:39.9,rotation:-16,x:187,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:42,rotation:-16,x:187.5,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:44.5,rotation:-16,x:187.4,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},45).to({state:[]},1).to({state:[{t:this.instance_8,p:{y:39.1,rotation:-10.2,x:186,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},8).to({state:[{t:this.instance_8,p:{y:29.8,rotation:-10.2,x:187.5,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:40.6,rotation:-10.2,x:186.2,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},2).to({state:[{t:this.instance_8,p:{y:41.3,rotation:-10.2,x:186.2,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},7).to({state:[{t:this.instance_8,p:{y:42.9,rotation:-10.2,x:186,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:45.2,rotation:-10.2,x:185.8,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.instance_8,p:{y:42.9,rotation:-10.2,x:186,skewX:0,skewY:0,scaleX:0.999,scaleY:0.999}}]},5).to({state:[{t:this.instance_8,p:{y:32.9,rotation:0,x:186.8,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_8,p:{y:30.1,rotation:0,x:187,skewX:0,skewY:0,scaleX:1,scaleY:1}}]},1).wait(10));

	// CUP_34_brow_01
	this.instance_17 = new lib.CUP_34_brow_01("synched",0);
	this.instance_17.setTransform(56.4,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({y:35.1},0).wait(1).to({rotation:5.8,x:56.1,y:38.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,skewX:-158.8,skewY:21,x:55.6,y:44.3},0).wait(4).to({scaleX:1,scaleY:1,rotation:5.8,skewX:0,skewY:0,x:56.1,y:38.3},0).wait(2).to({scaleX:1,scaleY:1,rotation:9.8,x:56.3,y:34.1},0).wait(1).to({y:33.3},0).wait(2).to({x:56.2,y:35.6},0).wait(14).to({y:36.3},0).to({_off:true},1).wait(13).to({x:57,y:45.2,_off:false},0).wait(1).to({x:55.6,y:28.4},0).wait(1).to({x:55.3,y:27.2},0).wait(3).to({x:56.1,y:30.8},0).wait(1).to({x:55.7,y:32.7},0).wait(13).to({x:56,y:34.2},0).wait(1).to({x:56.5,y:36.6},0).wait(1).to({x:56.1,y:39.8},0).wait(1).to({x:56.6,y:42},0).wait(45).to({x:56.5,y:44.5},0).to({_off:true},1).wait(8).to({x:55.4,y:42.5,_off:false},0).wait(1).to({x:56.8,y:33.1},0).wait(2).to({x:55.6,y:43.9},0).wait(7).to({y:44.7},0).wait(1).to({x:55.4,y:46.2},0).wait(1).to({x:55.2,y:48.5},0).wait(5).to({x:55.4,y:46.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:56.2,y:37.5},0).wait(1).to({x:56.4,y:34.7},0).wait(10));

	// CUP_34_eye_02
	this.instance_18 = new lib.CUP_34_eye_02("single",0);
	this.instance_18.setTransform(193.9,61.3,0.924,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(2).to({regX:0.8,regY:25.8,scaleY:0.97,x:194.7,y:87.1},0).wait(1).to({regX:0,regY:0,scaleY:1,x:193.9,y:61.3,startPosition:1},0).wait(1).to({startPosition:5},0).wait(4).to({startPosition:1},0).wait(2).to({scaleY:1.03,y:60.5,startPosition:0},0).wait(1).to({scaleY:1.05,y:59.9},0).wait(2).to({scaleY:1,y:61.3},0).wait(14).to({scaleY:0.97,y:62},0).to({_off:true},1).wait(13).to({scaleY:1,y:61.3,startPosition:1,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:1.05,y:60},0).wait(3).to({scaleY:1,y:61.3},0).wait(1).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(45).to({startPosition:1},0).to({_off:true},1).wait(8).to({startPosition:1,_off:false},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:0},0).wait(7).to({scaleY:0.94,y:62.8},0).wait(1).to({scaleY:1,y:61.3,startPosition:1},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(1).to({scaleY:0.94,y:62.8,startPosition:0},0).wait(1).to({scaleY:1,y:61.3},0).wait(10));

	// CUP_34_eye_01
	this.instance_19 = new lib.CUP_34_eye_01("single",0);
	this.instance_19.setTransform(52.1,58.4,1,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(2).to({regX:0.2,regY:24,scaleY:0.92,x:52.3,y:81.4},0).wait(1).to({regX:0,regY:0,scaleY:0.96,x:52.1,y:58.4,startPosition:1},0).wait(1).to({startPosition:5},0).wait(4).to({startPosition:1},0).wait(2).to({scaleY:0.99,y:57.6,startPosition:0},0).wait(1).to({scaleY:1.01,y:56.9},0).wait(2).to({scaleY:0.96,y:58.4},0).wait(14).to({scaleY:0.93,y:59.2},0).to({_off:true},1).wait(1).wait(12).to({scaleY:0.96,y:58.4,startPosition:1,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:1.01,y:56.9},0).wait(3).to({scaleY:0.96,y:58.4},0).wait(1).to({startPosition:0},0).wait(13).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(45).to({startPosition:1},0).to({_off:true},1).wait(8).to({startPosition:1,_off:false},0).wait(1).to({startPosition:3},0).wait(2).to({startPosition:0},0).wait(7).to({scaleY:0.9,y:60.1},0).wait(1).to({scaleY:0.96,y:58.4,startPosition:1},0).wait(1).to({startPosition:2},0).wait(5).to({startPosition:1},0).wait(1).to({scaleY:0.9,y:60.1,startPosition:0},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.1,22.1,182.2,77.6);


(lib.CupHeadclipIDLE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CUP_34DOWN_mouth
	this.instance = new lib.CUP_34DOWN_mouth("single",22);
	this.instance.setTransform(105.7,86.8,1,1,-2.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({startPosition:22},0).wait(2).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(3).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(2).to({startPosition:22},0).wait(45).to({startPosition:22},0).wait(2).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(3).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(2).to({startPosition:22},0).wait(39).to({startPosition:22},0).wait(55).to({startPosition:22},0).wait(2).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(3).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(1).to({startPosition:22},0).wait(2).to({startPosition:22},0).wait(36));

	// CUP_34_pupil_01
	this.instance_1 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_1.setTransform(191.2,60.3);

	this.instance_2 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_2.setTransform(57.1,61.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]}).to({state:[{t:this.instance_2,p:{x:56.9,y:62.8}},{t:this.instance_1,p:{x:190.8,y:62.7}}]},35).to({state:[]},2).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:56.9,y:62.8}},{t:this.instance_1,p:{x:190.8,y:62.7}}]},3).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},1).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},1).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},2).to({state:[{t:this.instance_2,p:{x:56.9,y:62.8}},{t:this.instance_1,p:{x:190.8,y:62.7}}]},45).to({state:[]},2).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:56.9,y:62.8}},{t:this.instance_1,p:{x:190.8,y:62.7}}]},3).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},1).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},1).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},2).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},39).to({state:[{t:this.instance_2,p:{x:56.9,y:62.8}},{t:this.instance_1,p:{x:190.8,y:62.7}}]},55).to({state:[]},2).to({state:[]},1).to({state:[{t:this.instance_2,p:{x:56.9,y:62.8}},{t:this.instance_1,p:{x:190.8,y:62.7}}]},3).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},1).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},1).to({state:[{t:this.instance_2,p:{x:57.1,y:61.6}},{t:this.instance_1,p:{x:191.2,y:60.3}}]},2).wait(36));

	// CUP_34_brow_02
	this.instance_3 = new lib.CUP_34_brow_02("synched",0);
	this.instance_3.setTransform(187,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({x:186.2,y:34.9},0).wait(2).to({rotation:-6.6,y:40.9},0).wait(1).to({y:41.9},0).wait(3).to({rotation:0,y:34.9},0).wait(1).to({x:186.8,y:32.5},0).wait(1).to({x:187,y:29.4},0).wait(2).to({y:30.1},0).wait(45).to({x:186.2,y:34.9},0).wait(2).to({rotation:-6.6,y:40.9},0).wait(1).to({y:41.9},0).wait(3).to({rotation:0,y:34.9},0).wait(1).to({rotation:-3.6,x:187,y:30.1},0).wait(1).to({y:28.9},0).wait(2).to({y:30.1},0).wait(39).to({rotation:0},0).wait(55).to({x:186.2,y:34.9},0).wait(2).to({rotation:-6.6,y:40.9},0).wait(1).to({y:41.9},0).wait(3).to({rotation:0,y:34.9},0).wait(1).to({x:186.8,y:32.5},0).wait(1).to({x:187,y:29.4},0).wait(2).to({y:30.1},0).wait(36));

	// CUP_34_brow_01
	this.instance_4 = new lib.CUP_34_brow_01("synched",0);
	this.instance_4.setTransform(56.4,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35).to({x:55.6,y:39.5},0).wait(2).to({rotation:8,x:55.8,y:42.8},0).wait(1).to({y:44.6},0).wait(3).to({rotation:0,x:55.6,y:39.5},0).wait(1).to({x:56.2,y:37.1},0).wait(1).to({x:56.4,y:34},0).wait(2).to({y:34.7},0).wait(45).to({x:55.6,y:39.5},0).wait(2).to({rotation:8,x:55.8,y:42.8},0).wait(1).to({y:44.6},0).wait(3).to({rotation:0,x:55.6,y:39.5},0).wait(1).to({rotation:-1.2,x:56.4,y:34.7},0).wait(1).to({y:33.5},0).wait(2).to({y:34.7},0).wait(39).to({rotation:0},0).wait(55).to({x:55.6,y:39.5},0).wait(2).to({rotation:8,x:55.8,y:42.8},0).wait(1).to({y:44.6},0).wait(3).to({rotation:0,x:55.6,y:39.5},0).wait(1).to({x:56.2,y:37.1},0).wait(1).to({x:56.4,y:34},0).wait(2).to({y:34.7},0).wait(36));

	// CUP_34_eye_02
	this.instance_5 = new lib.CUP_34_eye_02("single",0);
	this.instance_5.setTransform(193.9,61.3,0.924,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(35).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:1},0).wait(1).to({scaleY:0.95,y:62.7,startPosition:0},0).wait(1).to({scaleY:1,y:61.3},0).wait(2).to({startPosition:0},0).wait(45).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:1.03,y:60.5},0).wait(2).to({scaleY:1,y:61.3},0).wait(39).to({startPosition:0},0).wait(55).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:1},0).wait(1).to({scaleY:0.95,y:62.7,startPosition:0},0).wait(1).to({scaleY:1,y:61.3},0).wait(2).to({startPosition:0},0).wait(36));

	// CUP_34_eye_01
	this.instance_6 = new lib.CUP_34_eye_01("single",0);
	this.instance_6.setTransform(52.1,58.4,1,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(35).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:1},0).wait(1).to({scaleY:0.91,y:59.9,startPosition:0},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(2).to({startPosition:0},0).wait(45).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:1},0).wait(1).to({startPosition:0},0).wait(1).to({scaleY:0.99,y:57.5},0).wait(2).to({scaleY:0.96,y:58.4},0).wait(39).to({startPosition:0},0).wait(55).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:6},0).wait(3).to({startPosition:1},0).wait(1).to({scaleY:0.91,y:59.9,startPosition:0},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(2).to({startPosition:0},0).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.1,22.1,182.2,77.6);


(lib.CupHeadclipDBL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CUP_34DOWN_mouth
	this.instance = new lib.CUP_23_MOUTH_COMPcopy("single",22);
	this.instance.setTransform(105.2,85.1,0.792,0.531,0,10.8,8.7,31,10.3);

	this.instance_1 = new lib.CUP_34DOWN_brow_02("synched",0);
	this.instance_1.setTransform(180.8,60.8,1.104,0.969,-11.1);

	this.instance_2 = new lib.CUP_34DOWN_brow_01("synched",0);
	this.instance_2.setTransform(54.9,57.7,0.903,0.969,13.4);

	this.instance_3 = new lib.CUP_34_eye_02("single",6);
	this.instance_3.setTransform(185.8,76.9,0.932,0.932);

	this.instance_4 = new lib.CUP_34_eye_01("single",6);
	this.instance_4.setTransform(50.6,70.1,0.97,0.97);

	this.instance_5 = new lib.CUP_34DOWN_mouth("single",22);
	this.instance_5.setTransform(174.3,100.3,0.97,0.97,0,0,180);

	this.instance_6 = new lib.CUP_FRONTDOWN_brow_02("synched",0);
	this.instance_6.setTransform(201.4,53.5,1,1,-14.9);

	this.instance_7 = new lib.CUP_FRONTDOWN_brow_01("synched",0);
	this.instance_7.setTransform(62.1,50.4,1,1,15);

	this.instance_8 = new lib.CUP_34_eye_03("single",2);
	this.instance_8.setTransform(65.8,74.8,0.88,0.878,0,0,180);

	this.instance_9 = new lib.CUP_34_eye_03("single",2);
	this.instance_9.setTransform(201.4,76.2,0.88,0.878);

	this.instance_10 = new lib.CUP_34DOWN_pupil("synched",0);
	this.instance_10.setTransform(163,77.4,0.97,0.97);

	this.instance_11 = new lib.CUP_34DOWN_pupil_02("synched",0);
	this.instance_11.setTransform(41.1,74,0.97,0.97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]}).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance,p:{startPosition:26,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:33,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:26,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:27,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:28,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:29,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:28,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:26,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:33,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:32,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:28,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},11).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:27,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:28,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},10).to({state:[{t:this.instance_4,p:{skewY:0,x:50.6,y:70.1,startPosition:6}},{t:this.instance_3,p:{skewY:0,x:185.8,y:76.9,startPosition:6}},{t:this.instance_2,p:{rotation:13.4,skewX:0,skewY:0,x:54.9,y:57.7}},{t:this.instance_1,p:{scaleX:1.104,scaleY:0.969,rotation:-11.1,skewX:0,skewY:0,x:180.8,y:60.8}},{t:this.instance,p:{startPosition:22,regX:30.9,scaleX:0.768,scaleY:0.515,skewX:13,skewY:10.9,x:105.9,y:95.9}}]},2).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},5).to({state:[{t:this.instance,p:{startPosition:26,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:33,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:42,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:26,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:23,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},19).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:24,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},3).to({state:[{t:this.instance,p:{startPosition:25,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance_4,p:{skewY:180,x:225.5,y:71.7,startPosition:6}},{t:this.instance_3,p:{skewY:180,x:90.3,y:78.4,startPosition:6}},{t:this.instance_2,p:{rotation:0,skewX:-13.3,skewY:166.6,x:224.7,y:58.8}},{t:this.instance_1,p:{scaleX:0.968,scaleY:0.968,rotation:0,skewX:13,skewY:-166.9,x:95.8,y:61.6}},{t:this.instance_5,p:{skewX:0,skewY:180,x:174.3,y:100.3,startPosition:22,mode:"single"}}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{skewX:8.3,skewY:-171.6,x:136.8,y:99.3,startPosition:29,mode:"single"}}]},3).to({state:[{t:this.instance_4,p:{skewY:0,x:50.6,y:70.1,startPosition:1}},{t:this.instance_11},{t:this.instance_3,p:{skewY:0,x:185.8,y:76.9,startPosition:1}},{t:this.instance_10},{t:this.instance_2,p:{rotation:-16.5,skewX:0,skewY:0,x:50.1,y:42.2}},{t:this.instance_1,p:{scaleX:0.969,scaleY:0.969,rotation:9.8,skewX:0,skewY:0,x:185,y:44.6}},{t:this.instance_5,p:{skewX:0,skewY:0,x:106.3,y:97.5,startPosition:0,mode:"synched"}}]},2).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},1).to({state:[{t:this.instance,p:{startPosition:22,regX:31,scaleX:0.792,scaleY:0.531,skewX:10.8,skewY:8.7,x:105.2,y:85.1}}]},2).wait(17));

	// CUP_34_pupil_02
	this.instance_12 = new lib.CUP_34_pupil_02("synched",0);
	this.instance_12.setTransform(191.2,60.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(2).to({x:190.8,y:62.7},0).to({_off:true},1).wait(3).to({x:191.2,y:60.3,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(11).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(19).to({startPosition:0},0).to({_off:true},2).wait(5).wait(1).to({scaleY:1.86,x:182.1,y:57.3,_off:false},0).wait(1).to({scaleY:1,x:181.6,y:52.1},0).wait(1).to({x:182.1,y:54.5},0).wait(4).to({x:179.8,y:58},0).wait(25).to({x:179.7,y:61},0).to({_off:true},2).wait(22).wait(2).to({x:191.2,y:60.3,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(17));

	// CUP_34_pupil_01
	this.instance_13 = new lib.CUP_34_pupil_01("synched",0);
	this.instance_13.setTransform(57.1,61.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(2).to({x:56.7,y:64},0).to({_off:true},1).wait(3).to({x:57.1,y:61.6,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(30).to({startPosition:0},0).to({_off:true},1).wait(11).to({startPosition:0,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(19).to({startPosition:0},0).to({_off:true},2).wait(5).wait(1).to({scaleY:1.86,x:49.7,y:58.5,_off:false},0).wait(1).to({scaleY:1,x:49.2,y:52.8},0).wait(1).to({x:49.7,y:55.2},0).wait(4).to({x:50.1,y:59.2},0).wait(25).to({x:50,y:61.7},0).to({_off:true},2).wait(22).wait(2).to({x:57.1,y:61.6,_off:false},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(17));

	// CUP_34_brow_02
	this.instance_14 = new lib.CUP_34_brow_02("synched",0);
	this.instance_14.setTransform(187,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(2).to({scaleX:1,skewX:-7.3,skewY:-12.8,x:187.2,y:36.5},0).wait(1).to({x:185.8,y:46.1},0).wait(3).to({x:186.5,y:37.9},0).wait(1).to({x:186.7,y:36.2},0).wait(1).to({x:186.8,y:34.5},0).wait(2).to({x:186.7,y:36.2},0).wait(30).to({x:186.5,y:38.6},0).wait(1).to({x:185.8,y:46.1},0).wait(11).to({x:186.4,y:39.2},0).wait(1).to({x:186.6,y:33.6},0).wait(1).to({y:31.9},0).wait(4).to({startPosition:0},0).wait(15).to({x:186.4,y:39.2},0).to({_off:true},2).wait(5).to({scaleX:1,rotation:-14.8,skewX:0,skewY:0,x:185.3,y:51.1,_off:false},0).wait(1).to({x:188.5,y:37.3},0).wait(1).to({x:187,y:30.1},0).wait(1).to({x:187.3,y:32.6},0).wait(4).to({x:186.8,y:33.1},0).wait(25).to({scaleX:1,scaleY:1,rotation:-9.8,x:188.8,y:32.7},0).wait(2).to({scaleX:1,scaleY:1,rotation:0,x:189.8,y:33.4},0).to({_off:true},17).wait(5).wait(2).to({x:186.8,y:33.3,_off:false},0).wait(1).to({x:187,y:30.1},0).wait(1).to({y:29.1},0).wait(2).to({y:30.1},0).wait(17));

	// CUP_34_brow_01
	this.instance_15 = new lib.CUP_34_brow_01("synched",0);
	this.instance_15.setTransform(56.4,34.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(2).to({rotation:9.2,y:40.4},0).wait(1).to({x:55.7,y:45.2},0).wait(3).to({rotation:15,x:55.9,y:41.8},0).wait(1).to({x:56,y:40.1},0).wait(1).to({x:56.2,y:38.4},0).wait(2).to({x:56,y:40.1},0).wait(30).to({x:55.9,y:42.3},0).wait(1).to({x:55.6,y:46},0).wait(11).to({x:55.8,y:43.1},0).wait(1).to({x:55.9,y:37.6},0).wait(1).to({x:56,y:35.9},0).wait(19).to({x:55.8,y:43.1},0).to({_off:true},2).wait(5).to({x:54.8,y:53.6,_off:false},0).wait(1).to({x:58,y:39.8},0).wait(1).to({x:56.5,y:32.6},0).wait(1).to({x:56.8,y:35.1},0).wait(4).to({x:56,y:36.8},0).wait(25).to({rotation:5,y:36.1},0).wait(2).to({rotation:0,x:56.3,y:33.8},0).to({_off:true},17).wait(5).wait(2).to({x:56.2,y:37.9,_off:false},0).wait(1).to({x:56.4,y:34.7},0).wait(1).to({y:33.7},0).wait(2).to({y:34.7},0).wait(17));

	// CUP_34_eye_02
	this.instance_16 = new lib.CUP_34_eye_02("single",0);
	this.instance_16.setTransform(193.9,61.3,0.924,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(2).to({x:193.7,y:64.3,startPosition:4},0).wait(1).to({startPosition:6},0).wait(3).to({scaleY:0.92,x:193.9,y:63.1,startPosition:4},0).wait(1).to({scaleY:1,y:61.3},0).wait(1).to({scaleY:1.04,y:60.4},0).wait(2).to({scaleY:1,y:61.3},0).wait(30).to({scaleY:0.92,y:63.3},0).wait(1).to({scaleY:1,x:195.6,y:61.3,startPosition:6},0).wait(11).to({x:193.9,startPosition:4},0).wait(1).to({scaleY:0.96,y:62.3,startPosition:0},0).wait(1).to({scaleY:1,y:61.3},0).wait(19).to({startPosition:4},0).to({_off:true},2).wait(5).to({scaleY:0.86,y:64,startPosition:6,_off:false},0).wait(1).to({scaleY:1,y:61.3,startPosition:0},0).wait(1).to({scaleY:1.07,y:59.5},0).wait(1).to({scaleY:1,y:61.3},0).wait(4).to({startPosition:0},0).wait(25).to({startPosition:4},0).wait(2).to({startPosition:2},0).to({_off:true},17).wait(5).wait(2).to({scaleY:0.91,y:63.5,startPosition:0,_off:false},0).wait(1).to({scaleY:1,y:61.3},0).wait(1).to({scaleY:1.04,y:60.2},0).wait(2).to({scaleY:1,y:61.3},0).wait(17));

	// CUP_34_eye_01
	this.instance_17 = new lib.CUP_34_eye_01("single",0);
	this.instance_17.setTransform(52.1,58.4,1,0.958);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(2).to({x:51.8,y:61.4,startPosition:4},0).wait(1).to({startPosition:6},0).wait(3).to({scaleY:0.89,x:52.1,y:60.4,startPosition:4},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(1).to({scaleY:0.99,y:57.4},0).wait(2).to({scaleY:0.96,y:58.4},0).wait(30).to({scaleY:0.88,y:60.7},0).wait(1).to({scaleY:0.96,y:58.4,startPosition:6},0).wait(11).to({startPosition:4},0).wait(1).to({scaleY:0.92,y:59.5,startPosition:0},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(19).to({startPosition:4},0).to({_off:true},2).wait(5).to({scaleY:0.82,y:61.6,startPosition:6,_off:false},0).wait(1).to({scaleY:0.96,y:58.4,startPosition:0},0).wait(1).to({scaleY:1.03,y:56.4},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(4).to({startPosition:0},0).wait(25).to({startPosition:4},0).wait(2).to({startPosition:2},0).to({_off:true},17).wait(5).wait(2).to({scaleY:0.88,y:60.9,startPosition:0,_off:false},0).wait(1).to({scaleY:0.96,y:58.4},0).wait(1).to({scaleY:1,y:57.2},0).wait(2).to({scaleY:0.96,y:58.4},0).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.1,22.1,182.2,75.8);


(lib.Cup_DoubleTimegraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CUP_23_leg_COMP
	this.instance = new lib.CUP_34_arm_01copygm1("single",11);
	this.instance.setTransform(141.7,144.9,1.011,0.976,0,10.7,-174.7,18.4,-23.9);

	this.instance_1 = new lib.CUP_34_arm_01("single",122);
	this.instance_1.setTransform(141.9,142.7,1.011,0.976,0,9,-176.5,18.4,-24);

	this.instance_2 = new lib.Symbol3copy("synched",1,false);
	this.instance_2.setTransform(182.4,80.4,1.1,1.1,0,0,0,25.8,40.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373D48").s().p("AgKgmIADgBQADAnAWAeIgjAKg");
	this.shape.setTransform(245.7,145.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AhfCIQgFgRAAgQQAdgKAagQIATgKIAFAgIAUgxIAEgWIADgUQAJhGgdhUQAvgGAPgGIABAAQATgHAIgIIAEgBQAaB3gHBAQgDAUgIAUQgIAUgNAUQgOAXgZAPQgWANgVAMQgNAHgOAFIgfALQgQgTgGgUg");
	this.shape_1.setTransform(256.7,130.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#526139").s().p("AhRA8QgPgPgIgeQgCgCgBgEIAAgDQAAgHAKABQAJAAABAGIgCAAQgIABAAAEIAAACIABAAIAAAAQAFgBAKADIAGACIADAAIAAAAIACAAIABgBIAEgBIAAABIAcgHQAagHAWgJQAhgPARgQQAKgKAEgMIAAgCIACgEIAAgFIAOAZQAQAjABALQgKAXgXAOIAAABIgMAGIgCACQgGAGgQAGQgQAFg0AIIgBAAIgHABIgBAAIgHAAQgVAAgPgMg");
	this.shape_2.setTransform(257,106.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B3E4E6").s().p("AACCtIgBAAIgDgEQgOgLgighQgmgnACgeQABgLAKgDQANgEAYAGQAuAMAJAlQgKAOgRgDIgHgBQgIACgMgBQgHgBgNgIIgGgEQgCADABADIADAGQATANAdAFQAfAEAQgbQACgDgBgCQgIgogpgSQgVgFABgCQgRgEgMAAQgBgFgFgEIgBgBIgHgKIgDgGIgBAAIgjg3IAAAAQgOgVgEgMIgBAAQgDgMABgPIAAgBQACgJALgGQACAPAHAQIAIAPQAaA6AmAzQACADAEABQADABADgCIABAAIAGgBIgFgHQgUgcgfg+IgIgPQgWgyAHgQIADgEQAHgJANgFIAKgDQAJgIAdA0QgHALgBAUIgBADQgCArBABdQACADAEABQADABADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABABAAAAQhGh2ALgVIAAAAIABgLQABgKAEgFIABgBQAGgFAIACIAAAAQAFAAAFACQAQAFAJAOIAAABQAPAXAlBIQAdA0AOAhIADAIIAAABIABABIAAABIAAACQADAGACAGIAAACIAAAAQACAEgBADQgCAIgHAIQgPAOgdANQgYALgYAHIAAgBIgaAGIgBAAIgCABIgGgEg");
	this.shape_3.setTransform(248.8,89.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhKGEIAkgJQgYgfgDgoIgDABIACgTIATgHIAcgNIAZgPIAcgQIAHghQAJhHgfhSQgiAFgXgWQgVgVgKgrIABgFIAFgIIAAgDIAHAAIgggfQgugtAFglQACgVAUgHIAAAAIgCgBIgJgMIgBgCIAAgCQgBgCgCgDIAAAAIgjg3QgPgWgFgPIgDgIIAAgGIAAgBIAAgRIAAgCQABgUAcgKIABgBIABAAIAEgJQADgHAFgGIAFgEQANgLARgEQAGgCAHAEQAPAHAVAaQAGAIAEAIQAIgDAJACQAPABALAGQANAHAKAQQAPAXAlBJQAYAuAOAgIADAFIAEALIAEAAQAQAAAWAvQAVAqgBAOIgBADQgKAZgXAPQAeB/gIBFIgHAeQgIAagLAWQgLATgRASQgRAQgUAKQgWAOgXAJIgkANQgUAIgVAHIghAIgAAGEUQgYAPgdALQAAAPAFARQAGAVAQASIAdgKQAOgGANgHQAXgMAWgNQAZgPAOgXQANgTAIgVQAIgUADgUQAHhBgah4IgEABQgIAIgTAHIgBAAQgPAGgxAHQAfBTgJBIIgDAUIgGAWIgUAxIgFgfIgTAKgAg0gcIABAEQABADACACQAIAcAPAPQARAPAYgCIAAgBIAIgBIAAAAQA3gHAQgGQAPgFAHgGIACgCIALgHIABAAQAXgNAKgYQgBgMgRgiIgNgaIgBAGIgBAEIgBACQgDALgLALQgQAQghAPQgZALgZAHIgbAGIABAAIgFABIgBAAIgBAAIgBAAIgCABIgGgCQgLgEgFACIAAgBIAAABIgBgDQAAgDAJgBIABAAQAAgHgKgBIgDgBQgHAAAAAIgAhlipQgKADgBALQgCAeAmAnQAiAhAOALIAFAEIABAAIAGAEIACgBIABAAIAYgGIAAABQAYgHAYgLQAdgNAPgOQAHgIACgIQABgDgCgEIAAAAIAAgCQgCgGgDgGIAAgCIAAgBIgBgBIAAgBIgDgIQgOghgdg2QglhIgPgXIAAgBQgHgOgQgFQgFgCgHAAIAAAAQgIgCgGAFIgBABQgEAFgBAKIgBALIAAAAQgLAVBGB4QAAAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDACgDgBQgCgBgCgDQhChfACgrIABgDQABgUAHgLQgdg0gJAIIgKADQgNAFgHAJIgDAEQgHAQAWAyIAIAPQAfA+AUAeIAFAHIgGABIgBAAQgDACgDgBQgEgBgCgDQgmg1gag6IgIgPQgHgQgCgPQgLAGgCAJIAAABQgBAPADAMIABAAQAEAMAOAVIAAAAIAjA3IABAAIADAIIAHAKIABABQAFAEABAFQAMAAARAEQgBACAVAFQApASAIAoQABACgCADQgOAbghgEQgdgFgTgNIgDgGQgBgDACgDIAGAEQANAIAHABQAMABAIgCIAHABQATADAKgOQgJglgwgMQgPgDgKAAQgHAAgFABg");
	this.shape_4.setTransform(251.4,110.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#758A51").s().p("AhdCdIAGhBQASgIAQgIIATgJIAFAfQALgYAJgYIAGgWIADgVQAIhGgchUQAvgGAQgEIAAAAQATgHAJgHIADgBQAaB6gJA/QgDAUgIAUQgIAUgNATQgOAXgZAOIgsAXIgcAMIgeAJIgLgQg");
	this.shape_5.setTransform(257.2,137.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#526139").s().p("AhRA4QgPgRgIgeIgDgFIAAgEQAAgHAKACQAKABAAAFIgCAAQgIABAAAEIAAACIABAAQAFgBAKADIAGADIADgBIAAAAIACAAIABAAIAEgBIAAABIAcgFQAZgHAXgHQAhgOARgPQAKgLAEgLIABgBIABgFIABgFIANAaQAQAkABAKQgKAXgXAOIgBABIgLAGIgCABQgHAGgQAFQgQAFg0AFIgBAAIgHAAIgBABIgFAAQgWAAgPgOg");
	this.shape_6.setTransform(257,113.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AglFwIALAQIAcgJIAbgMIAugXQAZgOAPgXQAMgTAJgUQAHgUAEgUQAIhBgZh6IgEABQgIAHgTAHIgBAAQgPAEgxAGQAeBUgKBIIgDAVIgHAWQgJAYgLAYIgFgfIgSAJQgPAJgSAHIACgVIAGgCIAZgOIAcgPIAHgiQAKhHgfhTQghADgWgXQgWgWgJgrIABgGIAFgIIABgDIAHABIghghQgtgwAGglQACgVATgGIABAAIgDgBIgIgNIgBgCIAAgBQgBgDgCgDIAAAAIgig5QgPgXgFgPIgCgIIgBgHIAAgBIAAgRIABgCQABgUAcgJIABAAIABAAQABgFADgFQADgHAFgFIAFgEQANgKARgDQAGgDAHAFQAPAIAUAbQAHAJAEAIQAHgDAJABQAPACAKAHQAPAJAJAPQAOAZAlBLQAYAvAOAhIACAFIAEALIAEABQAQAAAWAxQAUArgBAOIgBADQgLAXgWAQQAcCBgJBGIgIAdQgHAagMAWQgLATgRARQgSAPgTAKQgXAMgXAJIgkAMIgfAKgAg2gWIABAEIADAFQAHAcAPARQARAQAYgCIAAgBIAIAAIAAAAQA3gFAQgFQAQgFAGgGIACgBIAMgGIAAgBQAXgOALgVQgBgMgRgkIgNgaIAAAFIgCAFIAAABQgEALgLALQgQAPghAOQgZAJgZAHIgbAFIABgBIgFABIgBAAIgBAAIgBAAIgCABIgGgDQgLgDgFABIAAAAIgBgCQABgEAIgBIABAAQAAgHgJgBIgDAAQgHAAgBAHgAhminQgJADgBAKQgDAfAmApQAhAiAOANIAFAEIABAAIAGAEIACgBIABAAIAYgEIAAAAQAYgGAYgJQAegMAOgOQAHgHADgIQAAgDgBgEIgBgBIAAgBIgEgNIgBgCIAAgBIAAgCIAAAAIgEgJQgNghgcg4QgkhKgOgYIAAgBQgJgPgOgFIgMgDIgBAAQgHgCgGAFIgBABQgEAFgCAJIgBAMQgMAUBGB9QgBgBAAAAQAAgBgBAAQAAAAAAAAQAAAAgBAAQgDACgEgBQgBgBgCgDQhBhjACgrIABgDQABgVAIgKQgdg2gJAIQgFAAgFADQgNAEgHAJIgDAEQgHAPAVA0IAIAPQAeBAAUAgIAEAGIgFABIgBAAQgDACgDgBQgEgBgCgDQglg3gag8IgHgPQgIgSgBgOQgLAFgCAJIAAABQgBAQADALIAAABQAFAMANAVIAAABIAiA5IABAAIADAIIAHAKIABABQAEAFACAFQAMAAARAFQgBACAVAGQApAUAHApQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQgOAbgigGQgcgGgTgNQgDgDAAgEQgBgCACgDIAGAEQANAIAHABQAMACAIgCIAHACQATAEAKgOQgIgmgwgOQgRgFgLAAIgKABg");
	this.shape_7.setTransform(251.6,116.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B3E4E6").s().p("AAACxIAAgBIgEgDQgOgNghgjQgmgpADgeQABgKAJgDQAOgEAYAIQAuAOAIAmQgKANgRgEIgHgBQgIABgMgBQgHgBgNgJIgGgEQgCADABADQAAADADADQATAOAcAGQAgAGAQgbQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgHgogpgVQgVgFABgCQgRgFgMAAQgCgGgEgEIgBgBIgHgLIgDgGIgBAAIgig5IAAAAQgNgVgFgNIAAAAQgDgMABgPIAAgCQACgJALgFQABAPAIARIAHAQQAaA7AlA1QACAEAEABQADABADgDIABABIAFgCIgEgGQgUgdgehBIgIgPQgVgzAHgQIADgDQAHgKANgEQAFgCAFgBQAJgIAdA3QgIAKgBAUIgBADQgCAsA/BgQACAEADAAQAEABADgCQAAAAABAAQAAAAAAAAQABABAAAAQAAAAABABQhGh7AMgUIABgLQACgKAEgFIABgBQAGgEAHABIABAAIAKADQAQAGAJAPIAAAAQAOAYAkBLQAcA1ANAiIAEAIIAAABIAAACIAAAAIABACIAEANIAAACIABAAQABAEAAAEQgDAHgHAHQgOAOgeAMQgYAKgYAGIAAgBIgaAFIgBAAIgCAAIgGgDg");
	this.shape_8.setTransform(249,95.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#526139").s().p("AAgBiIgjg3QgcgrgWguIgghFIgfhFQAaACAdAKQAaANAVATQARATARAVQARATAQAWQAPAWAMAWQAMAWAJAYQAIATAEATQAEATABASQgBAWgFATQgGAUgIASQghgrghgsg");
	this.shape_9.setTransform(278.4,149.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#758A51").s().p("AAsA9IgxgPIgygSIgNgGIAHhaIAIADQARAKALASQALASANAQQAXAdAgAdIAPAOIgZgIg");
	this.shape_10.setTransform(233.4,163.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B3E4E6").s().p("ABpGVQgRgGgMgMQgMgOgFgRIgOgCQgNgCgLABQgQACgMgKQgIgEgGgGIgGgGIBLgNIAdAZQAVARAaAMQAbALAbADQgbgQgZgSIgygmIAigSIAcAcQAPAPASALQAXAOAbADIAAgBIgagRIgYgVIgwgoIAcgUIANgMIALgNIADgHIhFAnIgVgWIgVgXIgogwIAYgEIAKgCIAVgEIAWgHIhbgDIgLgRQgPgagNgZIgKgSIgKgRIgSgjIAGABIAJADIAoAEIARACIAJABIAjACIgMgCQgVgFgTgGIgRgFIgRgGIgngLIgJgTQgNgfgJggIgFgVIgDgVIgHgrQAcANAdAGIAGABQAPADARAGIAQAEIAQAFIASAEIgYgKQgegNgfgOIgSgIIgQgIIgcgPIAAgUQgBgeAHgaIAFgRIAHgSIAQghIASAUIAlAqIAiAlIARAQQAQAOAQAQQAOAPANARQAMAQAKATQAKATAIAUIATAtQAdBFAtA7IAMASIAmA1IAMARIANASIAZAkIgEAHIgBAEIgBABIABAEIAEAEIgjAzIABAIIgDAFIgSAXIgUAVIgLAJIggAbIgHgEIAHAEIg4AMIgRABIgOgBgAAkApIABgBQgIAAAHABgAhhEDQgJgGgHgIIgBgCQgMgFgJgIQgWgTgTgWQgNgOgMgPIgLgPQgNgUgLgUQgdgxgRg0QgRgygGg3QgEgcgBgbQAAgcAIgZQAFgQAEgRQAFgXgBgYQAAgNgDgMIAOARIAsAtQAXAWAaATIARANIAAAWQABAiAFAhQAHAgAKAiIAHAWIgigRQgxgZgvgaIANAPQAUAUAaARQAaASAcALIAUAHIAHASQALAbANAdQAMAbAPAcIAJATIhEgPIgCAHIAaAMIABgBIA1APIAKASIAVAiQARAbAQAXIAaAgIhGAQgAAjESIgSgVIgPgUIgMgVIgbgqIApAHIAGAIIAVAYIAVAXIAsAwIgqANIgTgTgAgvCXQgPgbgMgdIgkhaIAaAJIBLCPgAh0gMQgNgsgJgpQgGgagCgaIgDgkIANAIQADAhAIAhIALAqIAOAqIAHAWgAiVjPQADhDALhAIgHACQgVA3gFA9QgigWgggeQgdgcgagkIAFgGQAIgKAOgEIAPgEIAHAGQAQgHgEgTIgCgNQAIgLAMgBQAfgDAfAQQAbAPAUAZQgnA5ABBLIABASg");
	this.shape_11.setTransform(255.8,146.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABmGtQgOgEgOgHQgKgDgHgIQgIgIgEgJIgHgLQgPADgRgCQgagGgUgWIgXgYIgkgjQgNgMgOgIQgRgIgSgGQhAgKg9gZIgTgIIACgXIANAFIAyASIAzAPIAZAIIgPgOQgggcgZggQgNgQgLgSQgLgSgRgKIgHgCIABgWIAPAHQgihDgQhFQgPhKAHhGQACgTAEgTQAEgSAHgSIAGgSIgEgOIgCgHIgBgIIAAgJIABgJIghgtIAnAbIAQgMQAJgFAKgDIASgDQgCgRAFgNIAGgKQARgVAcAGQAVAHATAKQAXAOAWAQIAUARIAcgnIAEAEIgSAvIAPASIAfAkQAYAbAUAcQATAXAXAYQAKAJAMAEIANADQAIACAGAEIAPADIAlAJQARAHAQAKQARAJAOAMQAQANANAQQAXAdAVAeQAUAfARAeQANAZAIAbQAJAaADAZQAHA9gdAxIgFAJIgGAIQgZAygjAtQgQAUgSASQgLAMgPAKQgiAWgpAAQgKAAgMgCgAAiFkIAOADQAFARAMANQAMAMARAHQAPACAQgDIA4gLIgHgEIAHADIAggbIALgJIAUgUIASgXIADgGIgBgHIAjg0IgEgEIgBgDIABgBIABgEIAEgIIgZgjIgNgSIgMgSIgmg0IgMgSQgtg8gdhEIgTguQgIgUgKgTQgKgSgMgRQgNgRgOgPQgQgQgQgOIgPgPIgkglIglgqIgSgUIgQAhIgHARIgFASQgHAaABAeIAAATIAcAPIAQAJIASAIQAfAOAgAMIAWAKIgQgDIgSgFIgQgFQgRgFgPgDIgGgCQgdgFgcgOIAHArIADAVIAFAVQAJAgANAfIAJATIAnAMIARAFIASAGQASAGAVAEIAMACIgjgCIgHgBIgTgBIgogFIgJgCIgGgCIASAkIAKARIAKARQANAaARAaIAJAQIBbAEIgWAGIgVAFIgKACIgYAEIAoAwIAVAWIAVAXIBFgnIgDAGIgLAOIgNALIgcAUIAwApIAYAUIAaASIAAAAQgbgCgXgOQgSgLgPgPIgcgdIgiATIAyAlQAZASAbARQgbgDgbgMQgagMgVgRIgdgYIhLAMIAGAGQAGAGAIAFQAOAJAOgBIAKgBIAOABgAkskfQABAZgFAXQgEAQgFARQgIAZAAAbQABAcAEAbQAGA3ARAzQARAzAdAxQALAVANAUIALAPQAMAPANAOQATAVAWATQAJAIAMAGIABACQAHAIAJAGIA7A3IBGgQIgYggQgSgXgRgaIgVgjIgKgRIg1gPIgBAAIgagMIACgGIBEAOIgJgSQgPgcgMgcQgNgdgLgbIgHgTIgUgGQgcgLgagRQgagSgUgUIgNgPQAvAbAxAZIAiARIgHgWQgKgigHggQgFgigBghIAAgWIgRgOQgagTgXgWIgsgtIgOgRQADANAAAMgAgVDXIAOAUIANAVIASAVIATATIAqgNIgsgwIgVgXIgUgZIgFgHIgrgIIAbArgACAhUIAgBEQAWAuAcArIAlA3QAgAtAiArQAIgTAGgTQAFgTAAgWQAAgTgEgTQgFgTgHgSQgJgYgNgYQgMgUgPgWQgPgWgRgUQgRgUgTgTQgVgUgbgNQgcgJgbgCIAgBFgAhVBiQAMAcAPAcIAmAFIhLiOIgagJIAkBagAidiTQACAaAGAaQAJApANAsIAXAIIgHgWIgOgqIgLgrQgIgggDghIgNgIIADAjgAigjNIALAFIgBgRQgBhLAng5QgUgagbgOQgfgQgfADQgMABgIALIACAMQAEAUgQAHIgHgHIgPAEQgOAEgIALIgFAGQAaAjAdAdQAgAeAiAWQAFg9AVg3IAHgCQgLA/gDBDgAAaAqIgBACQgHgBAIgBg");
	this.shape_12.setTransform(256.9,146.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regY:-23.9,skewX:10.7,skewY:-174.7,x:141.7,y:144.9,startPosition:11}}]},110).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance,p:{regY:-24,skewX:9,skewY:-176.5,x:151.5,y:124.2,startPosition:22}}]},2).to({state:[{t:this.instance_2,p:{rotation:0,x:182.4,y:80.4,startPosition:1,regX:25.8,scaleX:1.1,scaleY:1.1,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:-5.2,x:178.8,y:72.2,startPosition:2,regX:25.8,scaleX:1.1,scaleY:1.1,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:-1.7,x:180.5,y:78.3,startPosition:3,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:0.5,x:181.9,y:83,startPosition:4,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:2.5,x:183,y:86.4,startPosition:5,regX:25.8,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:3.5,x:183.5,y:88.4,startPosition:6,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:4,x:183.7,y:89.1,startPosition:7,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:1.8,x:182.6,y:85.2,startPosition:8,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:0.3,x:181.8,y:82.9,startPosition:9,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:0,x:181.6,y:82.1,startPosition:10,regX:25.8,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:3.3,x:183.2,y:88.2,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.5}}]},1).to({state:[{t:this.instance_2,p:{rotation:5.5,x:184.3,y:92.5,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:7,x:185,y:95.1,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:7.5,x:185.1,y:96.1,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.4}}]},1).to({state:[{t:this.instance_2,p:{rotation:9.6,x:188.1,y:102.7,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.5}}]},2).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[]},2).wait(23));

	// audio
	this.instance_3 = new lib.CUP_34_arm_01copygm1("single",16);
	this.instance_3.setTransform(25.6,94,1.226,1.226,-1.7,0,0,18.4,-24.1);

	this.instance_4 = new lib.Symbol5copy("synched",1,false);
	this.instance_4.setTransform(11.1,88.4,1,1,0,0,0,27.2,55);

	this.instance_5 = new lib.CUP_34DOWN_arm_02copyasdf("single",1);
	this.instance_5.setTransform(29.7,139.7,1.125,1.124,0,-7.2,-10,12.6,-20.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373D48").s().p("AAVBHQglAAgigMIgJgEIAFgPIAFgRIAKADQAPguAHgyQAOACAngCIAMAFIAMAEQgHAtgQA7QAHACAEACQAGADAAAEQAAAMgQAEIgIABIgJAAg");
	this.shape_13.setTransform(135.7,192.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AA1CZIAIgBIgXA0IAPgzgAg7C+IABgkIABgCIgDgFQgBgEAAgGQAAgEACgIQADgLAHgSIgBgCQANhaAlhVIAFAKIAHAGQgBAXgCAWIAhAKIAYAIQAJgDALAAQAHg4gLgbQgYhAgPgJIgegUQhNBdgqBxQgFgFgHgCIAZhiIgCgGQAghbBUgYQAEgCAEAAQCTBzhdDAIgMAZQgEgDgHgCQAQg8AHgtIgMgFIgMgFQgpACgOgBQgFAxgPAxIgKgEIgFARIgFAQIAJADQgJAZgLAZg");
	this.shape_14.setTransform(133.4,184.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#758A51").s().p("AhBCEQgtgoAAghQAAgPANACIACABQAGABAGAFQAqhwBNheIAeAVQAOAJAZBAQAKAbgGA2QgLAAgKADIgYgIIghgLQADgUABgWIgIgGIgGgKQgjBVgOBaIACABQgHATgDALQgPgKgOgMg");
	this.shape_15.setTransform(131.1,181.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#758A51").s().p("AhBCFQgtgoAAgiQAAgPANACIACABQAGACAGAEQAqhwBNheIAeAUQAOAKAZA/QAKAbgGA3QgLAAgKADIgYgIIghgKQADgVABgWIgIgHIgGgJQgjBVgOBaIACABQgHASgDALQgPgJgOgLg");
	this.shape_16.setTransform(130.3,190.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#758A51").s().p("AhBCFQgtgpAAghQAAgPANACIACABQAGABAGAGQAqhxBNhdIAeAUQAOAJAZA/QAKAcgGA2QgLAAgKADIgYgIIghgKQADgUABgXIgIgGIgGgKQgjBVgOBaIACACQgHARgDAMQgPgKgOgLg");
	this.shape_17.setTransform(128.9,207.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#758A51").s().p("AhBCEQgtgnAAgiQAAgPANACIACABQAGABAGAFQAqhwBNheIAeAUQAOAKAZBAQAKAbgGA2QgLAAgKADIgYgIIghgLQADgUABgWIgIgHIgGgJQgjBVgOBaIACABIgKAdQgPgJgOgMg");
	this.shape_18.setTransform(58.3,187.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AA1CZIAIgBIgXA0IAPgzgAg7C+IABgkIABgCIgDgFQgBgEAAgGQAAgEACgIIAKgdIgBgCQANhaAlhVIAFAKIAHAGQgBAXgCAWIAhAKIAYAIQAJgDALAAQAHg4gLgbQgYhAgPgJIgegUQhNBdgqBxQgFgFgHgCIAZhiIgCgGQAghbBUgYQAEgCAEAAQCTBzhdDAIgMAZQgEgDgHgCQAQg8AHgtIgMgFIgMgFQgpACgOgBQgFAxgPAxIgKgEIgFARIgFAQIAJADQgJAZgLAZg");
	this.shape_19.setTransform(60.6,189.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#758A51").s().p("AhBCFQgtgoAAgiQAAgPANACIACABQAGACAGAEQAqhwBNhdIAeATQAOAKAZA/QAKAcgGA2QgLAAgKADIgYgIIghgKQADgVABgWIgIgHIgGgJQgjBVgOBaIACACQgHARgDALQgPgJgOgLg");
	this.shape_20.setTransform(58.7,182.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("AhBCEQgtgoAAghQAAgPANACIACABQAGACAGAFQAqhxBNhdIAeAUQAOAJAZBAQAKAagGA3QgLAAgKADIgYgIIghgLQADgTABgXIgIgGIgGgKQgjBVgOBaIACACQgHARgDAMQgPgKgOgMg");
	this.shape_21.setTransform(59.1,177.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#758A51").s().p("AhBCEQgtgoAAghQAAgPANACIACABQAGABAGAGQAqhxBNheIAeAVQAOAJAZBAQAKAagGA3QgLAAgKADIgYgIIghgLQADgTABgXIgIgGIgGgKQgjBVgOBaIACABQgHATgDALQgPgKgOgMg");
	this.shape_22.setTransform(130.4,188.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#758A51").s().p("AhBCEQgtgoAAghQAAgPANACIACABQAGABAGAGQAqhxBNheIAeAVQAOAJAZBAQAKAagGA3QgLAAgKADIgYgIIghgLQADgTABgXIgIgGIgGgKQgjBVgOBaIACABIgKAeQgPgKgOgMg");
	this.shape_23.setTransform(131,181);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#758A51").s().p("AhBCEQgtgnAAgiQAAgPANACIACABQAGACAGAEQAqhwBNheIAeAUQAOAKAZA/QAKAbgGA3QgLAAgKADIgYgIIghgKQADgVABgWIgIgHIgGgJQgjBVgOBaIACABIgKAdQgPgJgOgMg");
	this.shape_24.setTransform(130.8,183.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("AhBCEQgtgnAAgiQAAgPANACIACABQAGACAGAEQAqhwBNheIAeAUQAOAKAZA/QAKAbgGA3QgLAAgKADIgYgIIghgLQADgUABgWIgIgHIgGgJQgjBVgOBaIACABQgHATgDAKQgPgJgOgMg");
	this.shape_25.setTransform(130.2,190.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373D48").s().p("AASBHQglgBghgOIgJgEIAGgOIAEgRIALADQAQguAJgxQAOACAngBIAMAGIAMAFQgJAsgSA6IALAFQAGADAAAFQAAALgRADIgIACIgJgBg");
	this.shape_26.setTransform(63,195.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#758A51").s().p("AhFCCQgsgqABghQABgPANACIACABQAGACAGAFQAuhvBQhaIAdAVQAOAKAXBAQAJAbgIA3QgLgBgKADIgYgJIgggLQAEgUABgXIgHgHIgGgJQgmBTgRBaIABABQgIASgCALQgPgKgOgMg");
	this.shape_27.setTransform(58.7,184.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AAvCaIAIgCIgZA0IARgygAhDC6IAEgjIAAgDIgDgEQgBgEAAgHQAAgEAEgHQACgLAIgTIgBgBQARhZAmhUIAGAKIAHAHQgBAWgEAWIAgAMIAYAIQAKgCALAAQAIg4gJgbQgXhBgOgKIgdgVQhQBbguBvQgGgFgGgDIAchgIgBgHQAjhZBUgWQAEgBAFAAQCPB4hlC9IgMAYIgLgFQASg8AIgtIgLgEIgMgGQgpABgOgCQgHAxgQAwIgLgEIgEARIgGAPIAJAEQgKAZgMAYg");
	this.shape_28.setTransform(61,187.4);

	this.instance_6 = new lib.CupHeadclipDBL("synched",131);
	this.instance_6.setTransform(148.5,93.2,0.97,0.97,6.4,0,0,138.1,68.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{regY:-24.1,rotation:-1.7,x:25.6,y:94,startPosition:16,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},7).to({state:[{t:this.instance_3,p:{regY:-24,rotation:-1.4,x:26.4,y:90.8,startPosition:3,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_4,p:{y:88.4,startPosition:1}}]},2).to({state:[{t:this.instance_4,p:{y:89.2,startPosition:3}}]},2).to({state:[{t:this.instance_3,p:{regY:-24,rotation:-1.2,x:23.9,y:92.4,startPosition:3,scaleX:1.225,scaleY:1.225,skewX:0,skewY:0}}]},28).to({state:[{t:this.instance_3,p:{regY:-24,rotation:-1.7,x:24.5,y:105.6,startPosition:4,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-24.1,rotation:-3,x:26.2,y:113.1,startPosition:6,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-24.1,rotation:-3,x:26,y:116.7,startPosition:5,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-24.1,rotation:-3,x:26,y:115.9,startPosition:5,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-24.3,rotation:0,x:27.1,y:111.8,startPosition:5,scaleX:1.249,scaleY:1.192,skewX:-4.9,skewY:-12.6}}]},5).to({state:[]},2).to({state:[{t:this.instance_3,p:{regY:-24.1,rotation:-1.2,x:25.6,y:110.1,startPosition:19,scaleX:1.201,scaleY:1.201,skewX:0,skewY:0}}]},20).to({state:[{t:this.instance_5,p:{scaleX:1.125,rotation:0,skewX:-7.2,skewY:-10,x:29.7,y:139.7,scaleY:1.124}}]},2).to({state:[{t:this.instance_5,p:{scaleX:1.124,rotation:-1.2,skewX:0,skewY:0,x:28.7,y:138.3,scaleY:1.124}}]},1).to({state:[{t:this.instance_5,p:{scaleX:1.123,rotation:0,skewX:-5.1,skewY:-8.4,x:28.1,y:139.5,scaleY:1.127}}]},2).to({state:[]},2).to({state:[{t:this.shape_15,p:{x:131.1,y:181.3}},{t:this.shape_14,p:{x:133.4,y:184.2}},{t:this.shape_13,p:{x:135.7,y:192.3}}]},36).to({state:[{t:this.shape_16},{t:this.shape_14,p:{x:132.6,y:193.8}},{t:this.shape_13,p:{x:134.9,y:201.9}}]},1).to({state:[{t:this.shape_14,p:{x:131.2,y:210.6}},{t:this.shape_17,p:{x:128.9,y:207.7}},{t:this.shape_13,p:{x:133.5,y:218.7}}]},1).to({state:[{t:this.shape_19,p:{x:60.6,y:189.9}},{t:this.shape_18},{t:this.shape_13,p:{x:62.9,y:198.1}}]},1).to({state:[{t:this.shape_14,p:{x:61,y:185.1}},{t:this.shape_20},{t:this.shape_13,p:{x:63.3,y:193.3}}]},1).to({state:[{t:this.shape_14,p:{x:61.4,y:180.3}},{t:this.shape_21},{t:this.shape_13,p:{x:63.7,y:188.5}}]},1).to({state:[{t:this.shape_14,p:{x:61,y:185.1}},{t:this.shape_20},{t:this.shape_13,p:{x:63.3,y:193.3}}]},1).to({state:[{t:this.shape_22},{t:this.shape_14,p:{x:132.6,y:191}},{t:this.shape_13,p:{x:134.9,y:199.2}}]},1).to({state:[{t:this.shape_23},{t:this.shape_19,p:{x:133.2,y:183.8}},{t:this.shape_13,p:{x:135.5,y:192}}]},1).to({state:[{t:this.shape_24},{t:this.shape_19,p:{x:133,y:186.2}},{t:this.shape_13,p:{x:135.3,y:194.4}}]},1).to({state:[{t:this.shape_25},{t:this.shape_14,p:{x:132.4,y:193.4}},{t:this.shape_13,p:{x:134.7,y:201.6}}]},1).to({state:[{t:this.shape_14,p:{x:60.7,y:186.9}},{t:this.shape_15,p:{x:58.5,y:184}},{t:this.shape_13,p:{x:63,y:195}}]},1).to({state:[{t:this.shape_14,p:{x:61.3,y:180.4}},{t:this.shape_17,p:{x:59.1,y:177.6}},{t:this.shape_13,p:{x:63.6,y:188.6}}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.instance_6,p:{regY:68.9,rotation:6.4,x:148.5,y:93.2,startPosition:131,regX:138.1,scaleX:0.97,scaleY:0.97}}]},1).to({state:[{t:this.instance_6,p:{regY:69,rotation:8,x:149.5,y:96.7,startPosition:132,regX:138.1,scaleX:0.97,scaleY:0.97}}]},1).to({state:[{t:this.instance_6,p:{regY:69.1,rotation:5,x:145.2,y:102.4,startPosition:134,regX:138,scaleX:0.971,scaleY:0.971}}]},2).to({state:[{t:this.instance_6,p:{regY:69,rotation:0,x:143.6,y:89.3,startPosition:136,regX:138,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_6,p:{regY:69,rotation:0,x:138.1,y:68.9,startPosition:138,regX:138,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_6,p:{regY:69,rotation:0,x:138.2,y:65.9,startPosition:139,regX:138,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.instance_6,p:{regY:69,rotation:0,x:138.1,y:67.9,startPosition:141,regX:138,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_6,p:{regY:69,rotation:0,x:138.1,y:68.9,startPosition:143,regX:138,scaleX:1,scaleY:1}}]},2).wait(16));

	// Layer 19
	this.instance_7 = new lib.CupHeadclipDBL("synched",0);
	this.instance_7.setTransform(138.1,68.9,1,1,0,0,0,138,69);

	this.instance_8 = new lib.CUP_FRONTDOWN_body("synched",0);
	this.instance_8.setTransform(133.1,207,0.971,0.971,5,0,0,1.3,83.4);

	this.instance_9 = new lib.CUP_34_arm_02("single",68);
	this.instance_9.setTransform(228.4,139.8,1,1.159,0,3.8,7.8,-13.1,-22.3);

	this.instance_10 = new lib.CUP_34_arm_02("single",8);
	this.instance_10.setTransform(227.1,141.1,1,1,0,0,0,-13.1,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:138.1,y:68.9,startPosition:0,regY:69,scaleX:1,scaleY:1,skewY:0,skewX:0}}]}).to({state:[{t:this.instance_7,p:{regX:138.1,rotation:-3.9,x:134,y:82.1,startPosition:2,regY:69,scaleX:1,scaleY:1,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138.1,rotation:-5.5,x:132.6,y:86.1,startPosition:3,regY:68.9,scaleX:1,scaleY:1,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138.2,rotation:-3.4,x:133.3,y:82,startPosition:5,regY:68.9,scaleX:1.022,scaleY:1.022,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:-1.7,x:122.2,y:51.5,startPosition:6,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:-0.1,x:124.1,y:42.8,startPosition:7,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:125.1,y:39.8,startPosition:8,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:124.9,y:41.7,startPosition:10,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:124.9,y:42.5,startPosition:12,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:-0.7,x:123.9,y:45.1,startPosition:40,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},28).to({state:[{t:this.instance_7,p:{regX:138,rotation:-1.7,x:122,y:51.5,startPosition:41,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:-3,x:122.3,y:58.5,startPosition:43,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:-3,x:122.2,y:60.6,startPosition:45,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:-3,x:122.2,y:61.3,startPosition:46,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:-1.7,x:124.5,y:58.1,startPosition:51,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},5).to({state:[{t:this.instance_7,p:{regX:138.1,rotation:1.5,x:130.3,y:41.4,startPosition:53,regY:68.9,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:3,x:132.6,y:35.8,startPosition:54,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:3.3,x:133.1,y:34.2,startPosition:55,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:3.3,x:132.9,y:36.6,startPosition:57,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:3.3,x:132.9,y:37.4,startPosition:58,regY:69,scaleX:1.226,scaleY:1.226,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:1.8,x:130.3,y:42.5,startPosition:72,regY:69,scaleX:1.225,scaleY:1.225,skewY:0,skewX:0}}]},14).to({state:[{t:this.instance_7,p:{regX:138,rotation:-1.2,x:121.5,y:58.1,startPosition:73,regY:68.9,scaleX:1.201,scaleY:1.201,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138.1,rotation:0,x:127.2,y:82,startPosition:75,regY:69,scaleX:1.124,scaleY:1.124,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138.1,rotation:-1.2,x:126.8,y:86.9,startPosition:76,regY:69,scaleX:1.124,scaleY:1.124,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:138.1,rotation:-2.4,x:123.2,y:85.8,startPosition:78,regY:69,scaleX:1.124,scaleY:1.124,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:111.4,y:74.8,startPosition:80,regY:69,scaleX:1.087,scaleY:1.087,skewY:180,skewX:0}}]},2).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:100.8,y:46.9,startPosition:81,regY:69,scaleX:0.974,scaleY:0.974,skewY:172.8,skewX:-7.1}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:97.9,y:41.1,startPosition:82,regY:69,scaleX:0.974,scaleY:0.974,skewY:171.2,skewX:-8.7}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:96.6,y:39.2,startPosition:83,regY:69.1,scaleX:0.974,scaleY:0.974,skewY:170.4,skewX:-9.5}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:95.9,y:40.5,startPosition:85,regY:69.1,scaleX:0.974,scaleY:0.974,skewY:170.4,skewX:-9.5}}]},2).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:95.3,y:43.5,startPosition:86,regY:69,scaleX:0.974,scaleY:0.974,skewY:171.2,skewX:-8.7}}]},1).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:76.8,y:81.1,startPosition:88,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:72.9,y:78.1,startPosition:90,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:70.8,y:74.4,startPosition:91,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},1).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:64.2,y:80.2,startPosition:93,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:62.3,y:75.9,startPosition:96,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},3).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:59.8,y:78.6,startPosition:98,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:59.1,y:77.9,startPosition:101,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},3).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:58.6,y:77.1,startPosition:102,regY:69,scaleX:0.974,scaleY:0.974,skewY:169,skewX:-10.9}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:61.9,y:79.3,startPosition:105,regY:69,scaleX:0.974,scaleY:0.974,skewY:171.8,skewX:-8.1}}]},3).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:68.4,y:92.5,startPosition:106,regY:69,scaleX:0.955,scaleY:0.989,skewY:178.6,skewX:-1}}]},1).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:69,y:99.7,startPosition:108,regY:69,scaleX:0.973,scaleY:0.973,skewY:-174.3,skewX:5.6}}]},2).to({state:[{t:this.instance_7,p:{regX:138,rotation:0,x:70.1,y:102.5,startPosition:109,regY:69,scaleX:0.972,scaleY:0.972,skewY:-172.6,skewX:7.3}}]},1).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:69.5,y:96.5,startPosition:112,regY:68.9,scaleX:0.972,scaleY:0.972,skewY:-174.3,skewX:5.6}}]},3).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:76.8,y:82.4,startPosition:114,regY:68.9,scaleX:0.972,scaleY:0.972,skewY:-179.1,skewX:0.8}}]},2).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:77.2,y:75,startPosition:115,regY:69,scaleX:0.972,scaleY:0.972,skewY:177.3,skewX:-2.6}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:73.7,y:76.5,startPosition:116,regY:69,scaleX:0.972,scaleY:0.972,skewY:172,skewX:-7.9}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:75.7,y:76.4,startPosition:117,regY:69,scaleX:0.971,scaleY:0.971,skewY:175.5,skewX:-4.4}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:77.3,y:76.3,startPosition:118,regY:68.9,scaleX:0.971,scaleY:0.971,skewY:178,skewX:-1.9}}]},1).to({state:[{t:this.instance_7,p:{regX:137.9,rotation:0,x:78.4,y:76.3,startPosition:119,regY:68.9,scaleX:0.971,scaleY:0.971,skewY:180,skewX:0}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:79.1,y:76.4,startPosition:120,regY:69,scaleX:0.971,scaleY:0.971,skewY:-179.1,skewX:0.8}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:79.4,y:76.3,startPosition:121,regY:69,scaleX:0.971,scaleY:0.971,skewY:-178.6,skewX:1.3}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:77.8,y:76.5,startPosition:122,regY:69,scaleX:0.971,scaleY:0.971,skewY:179.2,skewX:-0.7}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:76.8,y:76.6,startPosition:123,regY:69,scaleX:0.971,scaleY:0.971,skewY:177.7,skewX:-2.2}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:76.6,y:76.7,startPosition:124,regY:69,scaleX:0.971,scaleY:0.971,skewY:177.3,skewX:-2.6}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:78.8,y:76.9,startPosition:125,regY:69,scaleX:0.971,scaleY:0.971,skewY:-179.4,skewX:0.5}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:80.5,y:76.9,startPosition:126,regY:68.9,scaleX:0.971,scaleY:0.971,skewY:-177.1,skewX:2.8}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:81.3,y:77.1,startPosition:127,regY:69,scaleX:0.97,scaleY:0.97,skewY:-175.6,skewX:4.3}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:81.7,y:77,startPosition:128,regY:68.9,scaleX:0.971,scaleY:0.971,skewY:-175.1,skewX:4.8}}]},1).to({state:[{t:this.instance_7,p:{regX:137.8,rotation:0,x:85.4,y:79.9,startPosition:130,regY:68.9,scaleX:0.971,scaleY:0.971,skewY:-173.1,skewX:6.8}}]},2).to({state:[]},1).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_10},{t:this.instance_9,p:{x:228.4,y:139.8,startPosition:68}}]},2).to({state:[{t:this.instance_9,p:{x:226.6,y:116.2,startPosition:69}}]},2).to({state:[]},1).wait(20));

	// CUP_23_brow_01
	this.instance_11 = new lib.CUP_34DOWN_arm_01aaf("single",1);
	this.instance_11.setTransform(220.5,137.6,1.135,1.12,0,7.2,14.1,-14.7,-19.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s().p("AABAAIACAAIgFABIADgBg");
	this.shape_29.setTransform(136.5,168.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF0000").s().p("AACAAIABAAIgFABIAEgBg");
	this.shape_30.setTransform(135.4,173.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FF0000").s().p("AABgBIACACIgFABQACgCABgBg");
	this.shape_31.setTransform(136.8,165.2);

	this.instance_12 = new lib.CUP_34_arm_02copy4("single",71);
	this.instance_12.setTransform(-9.7,130.8,0.969,0.969,0,1.2,-178.7,-13,-22.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF0000").s().p("AACgBQgBABAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIgFACQACgCACgBg");
	this.shape_32.setTransform(149.9,144.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF0000").s().p("AACAAQgBAAAAAAQAAAAABAAQAAAAAAAAQAAAAABAAIgFABQACgBACAAg");
	this.shape_33.setTransform(151.2,149.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#1D1F26").s().p("Ag3AHQAEgHAGgIIABgCIABAAIgKAVIgCgEgAAzAKIAFgEIgEAEg");
	this.shape_34.setTransform(49.1,146);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#758A51").s().p("AghCaQg+gdgOg6QgHgkAag/IAKgXIgBAAQAQgZAXgXIAOgLIAAgCQAcgbApgWQAEgDAEgCIABgBQAbAGAQATQAQATACAYIAAAEIAAAAIgPAIQggARgjAeIgKAIIgFAEIABAAQgWAWgMATQgNAlABAGQAAACADAEIAEAEIABAAIABAAIAAgBQAEgJAEgHQAKAJASALIAMAFIgIBmQgbgGgYgMg");
	this.shape_35.setTransform(52.8,150.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgiCoQhHghgOhEQgPhBAshEQAlg8BDgsIALgFIAkgLIABAAIABABIAAAGIAAgBQgBAEgEACIAAAAIgBABQgEABgEAEQgpAWgcAbIAAABIgOAMQgXAXgQAZIgBACQgGAIgEAJIACAEQgaA/AHAkQAOA6A+AdQAYALAbAGIgCATQgegGgcgNgAAWA9QgUgKgIgKQgEAIgEAJIAAAAIgBAAIgBAAIgEgDQgDgEAAgCQgBgHANgkQALgTAXgXIAEgEIAKgIQAjgdAggRIAPgIIAAAAIADgBIABAAIAAAAIABABIAAAGIAAABIgBAAIgDACIgJAHQgqAggeAhQgXAWgPAYQATAPAGADIgBAAIAKAFIgBATIgMgGg");
	this.shape_36.setTransform(52,150.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#1D1F26").s().p("AA0AMIAEgEIgDAEgAg3AGIALgQIABgBIAAAAIgKAVIgCgEg");
	this.shape_37.setTransform(48.7,146.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#758A51").s().p("AgmCcQg9gfgNg7QgGgjAcg/IALgWIgBAAQARgZAXgXIAPgLIAAgBQAdgaApgWIAIgEIABgBQAaAGARAUQAQATABAZIAAADIgBAAIgPAIQghAQgjAcIgKAJIgFADIABAAQgXAWgNATQgOAkABAHQAAACADADIAEAFIABAAIABAAIAAgBIAIgRQAGAHAKAGIgIBtQgQgFgOgHg");
	this.shape_38.setTransform(52.3,151);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgnCpQhGgjgNhFQgNhBAuhDQAng6BFgrIAKgEIAlgLIABAAIAAABIAAAGIAAAAQgBAEgDABIgBAAIgBABIgIAEQgpAWgdAaIAAABIgPAMQgXAWgRAZIgBABIgLASIACAEQgcA+AGAjQANA7A9AfQAOAHAPAFIgBAUQgUgGgRgJgAgRA8IgBAAIgEgFQgDgDAAgCQgBgGAOglQAMgSAYgWIAEgEIAKgIQAjgdAhgQIAPgHIABAAIACgBIABAAIABABIAAAAIAAAFIAAABIgBAAIgDADIgJAHQgrAfgfAgQgYAWgPAXIAVAQIgOgBIgBAOQgIgHgGgGIgIAQIAAABIgBAAg");
	this.shape_39.setTransform(51.5,151.4);

	this.instance_13 = new lib.CUP_34_arm_02("single",71);
	this.instance_13.setTransform(52.5,135.8,0.969,0.969,0,-2.2,177.7,-13,-22.5);

	this.instance_14 = new lib.CUP_FRONT_leg_COMP2("synched",0);
	this.instance_14.setTransform(124.7,213.9,0.97,0.97,0,6.8,-173.1,8.5,-18.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1D1F26").s().p("AgzAPIgHgHQAhgCAQgYQAKgSgBgTIAAgNQAbAZATAdIAOARIgIAUQgMAggfALIgMADQgPgZghgdg");
	this.shape_40.setTransform(236.9,130.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#758A51").s().p("AgYBRQAMgGALgHQARgNAIgMQAGAIAFAKIAAABIABAAIABAAIAEgGQADgDgBgDQAAgNgHgPIACAAQAkAAAVggQAHgNADgKQAXAtgDAxQgGBEg7AmQgoAag1AHgAgmg9QgigbgjgQIgRgIIAAAAIgBgEQgBgdAOgXQAOgXAbgJIABACIAJAEQAsAXAhAdIACARQACAQgCAGQgEAOgKAKQgSASgWAAIgCAAg");
	this.shape_41.setTransform(233.5,136.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgpDEQA1gIAogZQA8gmAGhFQADgwgXguQgEALgHANQgUAgglAAIgBAAQAGAPABANQAAACgDAEIgEAFIAAAAIgBAAIgBAAQgEgKgGgJQgJANgRANQgLAHgLAFIACgXIAOgKIgBAAQAGgEAPgSQgQgYgbgbQgkgjgvgiIgKgHIgEgDIgBAAIAAgBIAAgGIAAgBIAAAAIABAAIADABIABAAIARAIQAiAQAiAaIACAAQAXAAATgRQAJgKAEgOQABgGgBgQIgCgSQghgcgtgXIgJgFIgBgBIAAAAQgEgBgCgFIAAABIgBgHIABgBIABAAIAnAKIALAEQBMAvAuBAQA3BNgGBKQgGBPhEAsQgsAcg9AIgAAah3QABASgLATQgQAZggACIAIAHQAeAdAPAXIAOgCQAfgKANggIAHgTIgNgUQgUgdgcgZIABAOg");
	this.shape_42.setTransform(234.3,137);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQALgQAAgQIgBgNQAaAXATAaIAMAPIgJASQgOAcggAKIgMADQgOgXgegZg");
	this.shape_43.setTransform(236.2,130.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#758A51").s().p("AgSBEIAKgFQASgMAKgLIAJAQIAAABIABAAIABAAIAEgFQADgDAAgCQAAgMgFgOIABAAQAlAAAWgcQAIgMAEgJQAUApgGArQgKA9g+AjQghASgpAIgAglg1QgggYgigPIgQgHIgBAAIAAgEQAAgZAQgVQAQgVAbgHIABABIAIAEQAsAUAfAaIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_44.setTransform(232.7,135.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgiCuQApgIAhgSQA+gjAKg9QAGgrgUgpQgEAJgIAMQgXAcgkAAIgCAAQAGAOAAAMQAAACgDADIgFAFIAAAAIgBAAIgBgBIgJgQQgJALgSAMIgKAFIABgVIAEgDIgBAAIAXgUQgPgVgagYQghgggtgeIgKgHIgEgCIAAAAIAAgBIgBgGIABAAIAAgBIABAAIADABIAAAAIARAHQAiAPAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgagrgUIgJgEIgBgBIAAAAQgEgCgBgEIAAABIgBgGIABgBIABAAIAmAJIALAEQBJApAqA6QAyBFgKBDQgLBGhHAoQglAVgwAIgAAfhpQAAAQgNARQgSAWgfACIAHAHQAdAZAOAVIAOgCQAfgIAPgdIAIgSIgMgRQgSgagagXIAAANg");
	this.shape_45.setTransform(233.4,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11,p:{regX:-14.7,regY:-19.9,scaleX:1.135,scaleY:1.12,rotation:0,skewX:7.2,skewY:14.1,x:220.5,y:137.6}}]},75).to({state:[{t:this.instance_11,p:{regX:-14.9,regY:-20,scaleX:1.124,scaleY:1.124,rotation:-1.2,skewX:0,skewY:0,x:223.5,y:140.4}}]},1).to({state:[{t:this.instance_11,p:{regX:-14.9,regY:-19.8,scaleX:1.134,scaleY:1.118,rotation:0,skewX:1.5,skewY:6.7,x:221.1,y:137.4}}]},2).to({state:[]},2).to({state:[{t:this.shape_29}]},28).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},3).to({state:[{t:this.instance_12}]},2).to({state:[]},1).to({state:[{t:this.shape_32}]},13).to({state:[{t:this.shape_33}]},2).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.instance_14},{t:this.instance_13,p:{regX:-13,regY:-22.5,scaleX:0.969,scaleY:0.969,skewX:-2.2,skewY:177.7,x:52.5,y:135.8,startPosition:71}}]},2).to({state:[]},2).to({state:[{t:this.instance_13,p:{regX:-13.1,regY:-22.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:226.7,y:117,startPosition:70}}]},3).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},2).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},2).wait(16));

	// CUP_23_eye_02
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQALgQAAgQIgBgNQAaAXATAaIAMAPIgJASQgOAcggAKIgMADQgOgXgegZg");
	this.shape_46.setTransform(236.2,130.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#758A51").s().p("AgbBIIATgKQASgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgEAAgCQAAgMgFgOIABAAQAlAAAWgcQAIgLAEgKQAUApgGArQgKA+g+AiQgkAUguAIgAglg2QgggYgigPIgQgGIgBAAIAAgFQAAgZAQgVQAQgVAbgHIABABIAIAEQAsAUAfAaIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_47.setTransform(232.7,135.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgqCvQAtgIAlgUQA+giAKg+QAGgrgUgpQgEAKgIALQgXAcgkAAIgCAAQAGAOAAAMQAAACgDAEIgFAEIAAAAIgBAAIgBAAIgJgRQgJALgSAMIgTAKIABgSIgEgBIARgJIgBAAIAXgVQgPgVgagYQghgggtgeIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAgBIABAAIADACIAAAAIARAGQAiAPAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgagrgUIgJgEIgBgBIAAAAQgEgBgBgFIAAABIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBGhHAoQgoAXg1AIgAAfhqQAAAQgNARQgSAXgfACIAHAGQAdAaAOAVIAOgDQAfgIAPgdIAIgSIgMgRQgSgagagWIAAAMg");
	this.shape_48.setTransform(233.4,136.1);

	this.instance_15 = new lib.CUP_34_arm_02("single",62);
	this.instance_15.setTransform(229.1,127.4,0.937,0.984,0,13.8,23.4,-13.2,-22.1);

	this.instance_16 = new lib.CUP_34_arm_02("single",7);
	this.instance_16.setTransform(-20.8,137.6,0.97,0.97,0,-33.4,146.5,-13.1,-22.5);

	this.instance_17 = new lib.CUP_34_arm_02copyaf("single",1);
	this.instance_17.setTransform(-9.7,130.8,0.969,0.969,0,1.2,-178.7,-13,-22.6);

	this.instance_18 = new lib.CUP_34DOWN_body2("synched",0);
	this.instance_18.setTransform(135.2,204.9,0.97,0.97,0,6.4,-173.5,5.7,88.2);

	this.instance_19 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_19.setTransform(152.9,217,0.97,0.97,0,2.5,-177.4,8.4,-19.1);

	this.instance_20 = new lib.CUP_34DOWN_body("synched",0);
	this.instance_20.setTransform(144.3,203.6,1,1,0,0,0,5.6,88.3);

	this.instance_21 = new lib.CUP_34_body("synched",0);
	this.instance_21.setTransform(137.1,177.2,1,1,0,0,0,-1.5,82.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.instance_15,p:{regX:-13.2,regY:-22.1,scaleX:0.937,scaleY:0.984,rotation:0,skewX:13.8,skewY:23.4,x:229.1,y:127.4,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:1,scaleY:1,rotation:-5.5,skewX:0,skewY:0,x:225.5,y:128.5,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:1.028,scaleY:1.02,rotation:0,skewX:-0.7,skewY:4.6,x:227.8,y:128.5,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.166,scaleY:1.166,rotation:16.4,skewX:0,skewY:0,x:231.4,y:110.7,startPosition:64}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.226,scaleY:1.226,rotation:8.7,skewX:0,skewY:0,x:231.7,y:104.8,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.226,scaleY:1.226,rotation:8.9,skewX:0,skewY:0,x:232.4,y:102.4,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.226,scaleY:1.226,rotation:8.9,skewX:0,skewY:0,x:232.2,y:104.3,startPosition:63}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.226,scaleY:1.226,rotation:8.9,skewX:0,skewY:0,x:232.2,y:105,startPosition:63}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.226,scaleY:1.226,rotation:8.2,skewX:0,skewY:0,x:234.1,y:102.7,startPosition:72}}]},28).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.226,scaleY:1.226,rotation:7.2,skewX:0,skewY:0,x:231.2,y:110.7,startPosition:64}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.232,scaleY:1.226,rotation:0,skewX:5.9,skewY:11.4,x:232.9,y:115.2,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:1.229,scaleY:1.225,rotation:0,skewX:0.6,skewY:4.8,x:232.7,y:116.3,startPosition:62}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.2,scaleX:1.225,scaleY:1.225,rotation:0.6,skewX:0,skewY:0,x:232.7,y:116.4,startPosition:62}}]},1).to({state:[{t:this.instance_15,p:{regX:-13,regY:-22.2,scaleX:1.228,scaleY:1.225,rotation:0,skewX:1.8,skewY:6,x:233.8,y:116.5,startPosition:62}}]},5).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.224,scaleY:1.224,rotation:14.1,skewX:0,skewY:0,x:235.9,y:106,startPosition:64}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.224,scaleY:1.224,rotation:15.7,skewX:0,skewY:0,x:236.5,y:103.1,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.228,scaleY:1.27,rotation:0,skewX:15.3,skewY:16.5,x:236.7,y:103.4,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.226,scaleY:1.239,rotation:0,skewX:15.7,skewY:16.1,x:236.5,y:104.8,startPosition:63}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.224,scaleY:1.224,rotation:15.9,skewX:0,skewY:0,x:236.5,y:105.1,startPosition:63}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.224,scaleY:1.224,rotation:14.4,skewX:0,skewY:0,x:239.7,y:102.5,startPosition:72}}]},14).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.1,scaleX:1.2,scaleY:1.189,rotation:0,skewX:16.2,skewY:11.4,x:230.7,y:111.7,startPosition:73}}]},1).to({state:[]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:1.087,scaleY:1.087,rotation:0,skewX:0,skewY:180,x:16,y:130.3,startPosition:66}}]},5).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.974,scaleY:0.974,rotation:0,skewX:-7.1,skewY:172.8,x:21.4,y:107.1,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:1.018,rotation:0,skewX:0,skewY:179.8,x:20.3,y:103.5,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:1.018,rotation:0,skewX:-0.8,skewY:179,x:19.9,y:102.6,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:1.018,rotation:0,skewX:-0.8,skewY:179,x:19.1,y:103.8,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.974,scaleY:0.974,rotation:0,skewX:-2.6,skewY:177.3,x:17.7,y:105.9,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.4,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:1.8,y:146.5,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.4,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-2,y:143.4,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.4,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-4,y:139.8,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-10.7,y:145.6,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.4,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-12.6,y:141.3,startPosition:65}}]},3).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.4,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-15,y:144,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-15.8,y:143.2,startPosition:65}}]},3).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-4.9,skewY:175,x:-16.3,y:142.5,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.3,scaleX:0.973,scaleY:0.973,rotation:0,skewX:-2.1,skewY:177.8,x:-16.1,y:140.9,startPosition:65}}]},3).to({state:[{t:this.instance_15,p:{regX:-13,regY:-22.5,scaleX:0.954,scaleY:0.988,rotation:0,skewX:-4.7,skewY:175.4,x:-15,y:145.1,startPosition:65}}]},1).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.5,scaleX:0.971,scaleY:0.971,rotation:0,skewX:-6.8,skewY:173.1,x:-21.2,y:140.8,startPosition:65}}]},2).to({state:[{t:this.instance_15,p:{regX:-13.1,regY:-22.5,scaleX:0.971,scaleY:0.971,rotation:0,skewX:-5.1,skewY:174.8,x:-21.3,y:140.8,startPosition:65}}]},1).to({state:[{t:this.instance_16},{t:this.instance_15,p:{regX:-13.1,regY:-22.5,scaleX:0.97,scaleY:0.97,rotation:0,skewX:-28.8,skewY:151.1,x:-20.9,y:136.2,startPosition:67}}]},3).to({state:[{t:this.instance_17,p:{regY:-22.6,skewX:1.2,skewY:-178.7,x:-9.7,y:130.8,startPosition:1,regX:-13,scaleX:0.969,scaleY:0.969}}]},2).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:-2.2,skewY:177.7,x:-6.2,y:128.7,startPosition:11,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:-7.5,skewY:172.4,x:-4.4,y:137.6,startPosition:11,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.6,skewX:-4,skewY:175.9,x:-5.7,y:132.5,startPosition:11,regX:-12.9,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:-1.4,skewY:178.5,x:-6.5,y:128.8,startPosition:11,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:0.1,skewY:-179.8,x:-7.1,y:126,startPosition:11,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:1.3,skewY:-178.6,x:-7.5,y:124.4,startPosition:11,regX:-13,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:1.7,skewY:-178.2,x:-7.6,y:123.9,startPosition:11,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:-0.4,skewY:179.5,x:-7.2,y:127.4,startPosition:11,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.6,skewX:-1.7,skewY:178.2,x:-6.9,y:129.5,startPosition:11,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.6,skewX:-2.2,skewY:177.7,x:-6.8,y:130.2,startPosition:11,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:0.8,skewY:-179.1,x:-7.4,y:125.5,startPosition:11,regX:-12.8,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.6,skewX:3.3,skewY:-176.6,x:-7.6,y:122,startPosition:11,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:4.6,skewY:-175.3,x:-7.9,y:120,startPosition:11,regX:-12.8,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.5,skewX:5.2,skewY:-174.7,x:-7.8,y:119.3,startPosition:11,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_17,p:{regY:-22.6,skewX:7.2,skewY:-172.7,x:-5.7,y:118.8,startPosition:11,regX:-12.8,scaleX:0.968,scaleY:0.968}}]},2).to({state:[{t:this.instance_18,p:{skewX:6.4,skewY:-173.5,x:135.2,y:204.9}}]},1).to({state:[{t:this.instance_18,p:{skewX:8,skewY:-171.9,x:133.1,y:207.9}}]},1).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21,p:{x:137.1,y:177.2}}]},2).to({state:[{t:this.instance_21,p:{x:137.3,y:174.2}}]},1).to({state:[{t:this.instance_21,p:{x:137.1,y:176.2}}]},2).to({state:[{t:this.instance_21,p:{x:137.1,y:177.2}}]},2).wait(16));

	// CUP_23_eye_01
	this.instance_22 = new lib.CUP_34_body("synched",0);
	this.instance_22.setTransform(137.1,177.2,1,1,0,0,0,-1.5,82.4);

	this.instance_23 = new lib.CUP_34DOWN_body("synched",0);
	this.instance_23.setTransform(127.8,210.5,1.124,1.124,0,0,0,5.6,88.3);

	this.instance_24 = new lib.CUP_34_arm_02("single",71);
	this.instance_24.setTransform(57.7,135.2,0.969,0.969,0,-3.8,176.1,-12.9,-22.5);

	this.instance_25 = new lib.CUP_34DOWN_handle("synched",0);
	this.instance_25.setTransform(61.6,121.4,0.97,0.97,0,6.4,-173.5,-16.2,-0.5);

	this.instance_26 = new lib.CUP_34_handle("synched",0);
	this.instance_26.setTransform(227.1,106.7,1,1,0,0,0,-17.5,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22,p:{rotation:0,x:137.1,y:177.2,scaleX:1,scaleY:1,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]}).to({state:[{t:this.instance_22,p:{rotation:-3.9,x:140.6,y:190.2,scaleX:1,scaleY:1,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:-5.5,x:142.1,y:194,scaleX:1,scaleY:1,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:-3.4,x:139,y:192.5,scaleX:1.022,scaleY:1.022,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:-1.7,x:125.3,y:184.1,scaleX:1.226,scaleY:1.226,regX:-1.4,regY:82.3,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:-0.1,x:123.5,y:175.6,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:124,y:172.6,scaleX:1.226,scaleY:1.226,regX:-1.4,regY:82.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:123.8,y:174.5,scaleX:1.226,scaleY:1.226,regX:-1.4,regY:82.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:123.8,y:175.3,scaleX:1.226,scaleY:1.226,regX:-1.4,regY:82.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:-0.7,x:124.6,y:177.7,scaleX:1.226,scaleY:1.226,regX:-1.4,regY:82.3,skewY:0,skewX:0}}]},28).to({state:[{t:this.instance_22,p:{rotation:-1.7,x:124.9,y:184.3,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:-3,x:128.3,y:191.1,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:-3,x:128.1,y:193.2,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:-3,x:128.1,y:193.9,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:-1.7,x:127.6,y:190.9,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},5).to({state:[{t:this.instance_22,p:{rotation:1.5,x:125.7,y:174.2,scaleX:1.226,scaleY:1.226,regX:-1.4,regY:82.5,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:3,x:124.4,y:168.2,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:3.3,x:124.3,y:166.5,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.3,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:3.3,x:124.1,y:168.9,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.3,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:3.3,x:124.1,y:169.7,scaleX:1.226,scaleY:1.226,regX:-1.5,regY:82.3,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:1.8,x:125,y:175,scaleX:1.225,scaleY:1.225,regX:-1.5,regY:82.3,skewY:0,skewX:0}}]},14).to({state:[{t:this.instance_22,p:{rotation:-1.2,x:123.1,y:188.2,scaleX:1.201,scaleY:1.201,regX:-1.5,regY:82.5,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_23,p:{rotation:0,x:127.8,y:210.5,regY:88.3}}]},2).to({state:[{t:this.instance_23,p:{rotation:-1.2,x:130.2,y:215.3,regY:88.3}}]},1).to({state:[{t:this.instance_23,p:{rotation:-2.4,x:129.6,y:214.2,regY:88.4}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:112.4,y:192.5,scaleX:1.087,scaleY:1.087,regX:-1.5,regY:82.4,skewY:180,skewX:0}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:114.9,y:151.5,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.5,skewY:172.8,skewX:-7.1}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:114.9,y:145.3,scaleX:0.974,scaleY:0.974,regX:-1.5,regY:82.5,skewY:171.2,skewX:-8.7}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:115,y:143.1,scaleX:0.974,scaleY:0.974,regX:-1.5,regY:82.5,skewY:170.4,skewX:-9.5}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:114.3,y:144.4,scaleX:0.974,scaleY:0.974,regX:-1.5,regY:82.5,skewY:170.4,skewX:-9.5}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:112.3,y:147.8,scaleX:0.974,scaleY:0.974,regX:-1.5,regY:82.5,skewY:171.2,skewX:-8.7}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:98,y:184.5,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:94.1,y:181.4,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:92.1,y:177.8,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:85.3,y:183.6,scaleX:0.974,scaleY:0.974,regX:-1.5,regY:82.4,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:83.5,y:179.3,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},3).to({state:[{t:this.instance_22,p:{rotation:0,x:81.1,y:182,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:80.3,y:181.2,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},3).to({state:[{t:this.instance_22,p:{rotation:0,x:79.8,y:180.4,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:169,skewX:-10.9}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:77.9,y:183.6,scaleX:0.974,scaleY:0.974,regX:-1.6,regY:82.4,skewY:171.8,skewX:-8.1}}]},3).to({state:[{t:this.instance_22,p:{rotation:0,x:71.4,y:199.7,scaleX:0.955,scaleY:0.989,regX:-1.5,regY:82.5,skewY:178.6,skewX:-1}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:59.9,y:204.8,scaleX:0.973,scaleY:0.973,regX:-1.6,regY:82.5,skewY:-174.3,skewX:5.6}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:57.7,y:207.2,scaleX:0.972,scaleY:0.972,regX:-1.6,regY:82.4,skewY:-172.6,skewX:7.3}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:60.2,y:201.6,scaleX:0.972,scaleY:0.972,regX:-1.6,regY:82.5,skewY:-174.3,skewX:5.6}}]},3).to({state:[{t:this.instance_22,p:{rotation:0,x:76.3,y:187.8,scaleX:0.972,scaleY:0.972,regX:-1.4,regY:82.5,skewY:-179.1,skewX:0.8}}]},2).to({state:[{t:this.instance_22,p:{rotation:0,x:83.3,y:180.2,scaleX:0.972,scaleY:0.972,regX:-1.5,regY:82.5,skewY:177.3,skewX:-2.6}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:89.3,y:180.6,scaleX:0.972,scaleY:0.972,regX:-1.6,regY:82.5,skewY:172,skewX:-7.9}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:85.1,y:181.1,scaleX:0.971,scaleY:0.971,regX:-1.5,regY:82.6,skewY:175.5,skewX:-4.4}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:82,y:181.2,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:178,skewX:-1.9}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:79.7,y:181.4,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:180,skewX:0}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:78.4,y:181.5,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:-179.1,skewX:0.8}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:77.9,y:181.6,scaleX:0.971,scaleY:0.971,regX:-1.5,regY:82.5,skewY:-178.6,skewX:1.3}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:80.6,y:181.7,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:179.2,skewX:-0.7}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:82.1,y:181.8,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:177.7,skewX:-2.2}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:82.6,y:181.8,scaleX:0.971,scaleY:0.971,regX:-1.5,regY:82.5,skewY:177.3,skewX:-2.6}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:78.8,y:181.9,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:-179.4,skewX:0.5}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:76,y:181.9,scaleX:0.971,scaleY:0.971,regX:-1.5,regY:82.5,skewY:-177.1,skewX:2.8}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:74.5,y:181.9,scaleX:0.97,scaleY:0.97,regX:-1.6,regY:82.5,skewY:-175.6,skewX:4.3}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:73.9,y:182,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:-175.1,skewX:4.8}}]},1).to({state:[{t:this.instance_22,p:{rotation:0,x:73.9,y:184.5,scaleX:0.971,scaleY:0.971,regX:-1.6,regY:82.5,skewY:-173.1,skewX:6.8}}]},2).to({state:[{t:this.instance_25,p:{regX:-16.2,regY:-0.5,skewX:6.4,skewY:-173.5,x:61.6,y:121.4,scaleX:0.97,scaleY:0.97}},{t:this.instance_24,p:{regX:-12.9,skewX:-3.8,skewY:176.1,y:135.2,regY:-22.5,scaleX:0.969,scaleY:0.969,x:57.7,startPosition:71}}]},1).to({state:[{t:this.instance_25,p:{regX:-16.3,regY:-0.6,skewX:8,skewY:-171.9,x:61.9,y:122.3,scaleX:0.97,scaleY:0.97}},{t:this.instance_24,p:{regX:-13,skewX:-2.2,skewY:177.7,y:136.1,regY:-22.5,scaleX:0.969,scaleY:0.969,x:57.7,startPosition:71}}]},1).to({state:[]},2).to({state:[{t:this.instance_25,p:{regX:-16.2,regY:-0.6,skewX:0,skewY:0,x:229.3,y:126.5,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_26,p:{x:227.1,y:106.7}}]},2).to({state:[{t:this.instance_26,p:{x:227.3,y:103.7}}]},1).to({state:[{t:this.instance_26,p:{x:227.1,y:105.7}},{t:this.instance_24,p:{regX:-13.1,skewX:-3.4,skewY:0,y:119,regY:-22.3,scaleX:1,scaleY:1.116,x:226.5,startPosition:1}}]},2).to({state:[{t:this.instance_26,p:{x:227.1,y:106.7}},{t:this.instance_24,p:{regX:-13.1,skewX:0,skewY:0,y:120,regY:-22.3,scaleX:1,scaleY:1,x:226.5,startPosition:1}}]},2).wait(16));

	// CUP_23_eye_02
	this.instance_27 = new lib.CUP_34_arm_02("single",71);
	this.instance_27.setTransform(-9.7,130.8,0.969,0.969,0,1.2,-178.7,-13,-22.6);

	this.instance_28 = new lib.CUP_34DOWN_body2("synched",0);
	this.instance_28.setTransform(135.2,204.9,0.97,0.97,0,6.4,-173.5,5.7,88.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_27,p:{regY:-22.6,skewX:1.2,skewY:-178.7,x:-9.7,y:130.8,regX:-13,scaleX:0.969,scaleY:0.969}}]},114).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:-2.2,skewY:177.7,x:-6.2,y:128.7,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:-7.5,skewY:172.4,x:-4.4,y:137.6,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.6,skewX:-4,skewY:175.9,x:-5.7,y:132.5,regX:-12.9,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:-1.4,skewY:178.5,x:-6.5,y:128.8,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:0.1,skewY:-179.8,x:-7.1,y:126,regX:-13,scaleX:0.969,scaleY:0.969}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:1.3,skewY:-178.6,x:-7.5,y:124.4,regX:-13,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:1.7,skewY:-178.2,x:-7.6,y:123.9,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:-0.4,skewY:179.5,x:-7.2,y:127.4,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.6,skewX:-1.7,skewY:178.2,x:-6.9,y:129.5,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.6,skewX:-2.2,skewY:177.7,x:-6.8,y:130.2,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:0.8,skewY:-179.1,x:-7.4,y:125.5,regX:-12.8,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.6,skewX:3.3,skewY:-176.6,x:-7.6,y:122,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:4.6,skewY:-175.3,x:-7.9,y:120,regX:-12.8,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.5,skewX:5.2,skewY:-174.7,x:-7.8,y:119.3,regX:-12.9,scaleX:0.968,scaleY:0.968}}]},1).to({state:[{t:this.instance_27,p:{regY:-22.6,skewX:7.2,skewY:-172.7,x:-5.7,y:118.8,regX:-12.8,scaleX:0.968,scaleY:0.968}}]},2).to({state:[{t:this.instance_28,p:{skewX:6.4,skewY:-173.5,x:135.2,y:204.9}}]},1).to({state:[{t:this.instance_28,p:{skewX:8,skewY:-171.9,x:133.1,y:207.9}}]},1).to({state:[]},2).wait(25));

	// CUP_23_body
	this.instance_29 = new lib.CUP_34_arm_02("single",1);
	this.instance_29.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.instance_30 = new lib.CUP_34_handle("synched",0);
	this.instance_30.setTransform(227.1,106.7,1,1,0,0,0,-17.5,0.8);

	this.instance_31 = new lib.CUP_34DOWN_handle("synched",0);
	this.instance_31.setTransform(223.3,123.8,1.124,1.124,0,0,0,-16.2,-0.6);

	this.instance_32 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_32.setTransform(117.6,191.4,1.1,1.1,0,0,0,8.5,-18.8);

	this.instance_33 = new lib.CUP_34_leg_COMP("synched",0);
	this.instance_33.setTransform(163.3,185.8,1,1,0,0,180,8.5,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_30,p:{rotation:0,x:227.1,y:106.7,regY:0.8,scaleX:1,scaleY:1,regX:-17.5,skewY:0,skewX:0}},{t:this.instance_29}]}).to({state:[{t:this.instance_30,p:{rotation:-3.9,x:225.4,y:113.5,regY:0.8,scaleX:1,scaleY:1,regX:-17.5,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:-5.5,x:224.9,y:115.1,regY:0.8,scaleX:1,scaleY:1,regX:-17.5,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:-3.4,x:226.4,y:115,regY:0.9,scaleX:1.022,scaleY:1.022,regX:-17.5,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:-1.7,x:232.9,y:94.3,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:-0.1,x:233.5,y:88.6,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:234.2,y:86.2,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.5,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:234,y:88.1,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.5,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:234,y:88.8,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.5,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:-0.7,x:233.6,y:89.9,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.5,skewY:0,skewX:0}}]},28).to({state:[{t:this.instance_30,p:{rotation:-1.7,x:232.5,y:94.4,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.5,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:-3,x:233.9,y:98.8,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:-3,x:233.8,y:100.9,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:-3,x:233.8,y:101.6,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:-1.7,x:235.2,y:100.9,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},5).to({state:[{t:this.instance_30,p:{rotation:1.5,x:238.2,y:90.5,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:3,x:239.2,y:87.7,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:3.3,x:239.5,y:86.6,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:3.3,x:239.3,y:89,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:3.3,x:239.3,y:89.8,regY:0.8,scaleX:1.226,scaleY:1.226,regX:-17.4,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:1.8,x:238,y:92.2,regY:0.8,scaleX:1.225,scaleY:1.225,regX:-17.4,skewY:0,skewX:0}}]},14).to({state:[{t:this.instance_30,p:{rotation:-1.2,x:229.5,y:101,regY:0.8,scaleX:1.201,scaleY:1.201,regX:-17.3,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_31,p:{regX:-16.2,rotation:0,x:223.3,y:123.8}}]},2).to({state:[{t:this.instance_31,p:{regX:-16.1,rotation:-1.2,x:223.9,y:126.6}}]},1).to({state:[{t:this.instance_31,p:{regX:-16.1,rotation:-2.4,x:221.1,y:123.4}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:14.6,y:115.8,regY:0.8,scaleX:1.087,scaleY:1.087,regX:-17.5,skewY:180,skewX:0}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:19.4,y:94.4,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:172.8,skewX:-7.1}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:17.9,y:90.7,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:171.2,skewX:-8.7}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:17.2,y:89.9,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.6,skewY:170.4,skewX:-9.5}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:16.5,y:91.1,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.6,skewY:170.4,skewX:-9.5}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:15.3,y:93.2,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:171.2,skewX:-8.7}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-1.1,y:133.9,regY:0.9,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:-4.9,y:130.8,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:-6.9,y:127.1,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-13.7,y:133,regY:0.9,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:-15.5,y:128.6,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},3).to({state:[{t:this.instance_30,p:{rotation:0,x:-17.9,y:131.4,regY:0.9,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:-18.7,y:130.6,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},3).to({state:[{t:this.instance_30,p:{rotation:0,x:-19.2,y:129.8,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.7,skewY:169,skewX:-10.9}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-18.4,y:128.1,regY:0.8,scaleX:0.974,scaleY:0.974,regX:-17.8,skewY:171.8,skewX:-8.1}}]},3).to({state:[{t:this.instance_30,p:{rotation:0,x:-15.8,y:132.2,regY:0.8,scaleX:0.955,scaleY:0.989,regX:-17.7,skewY:178.6,skewX:-1}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-20.4,y:128,regY:0.8,scaleX:0.973,scaleY:0.973,regX:-17.7,skewY:-174.3,skewX:5.6}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:-20.2,y:128,regY:0.8,scaleX:0.972,scaleY:0.972,regX:-17.7,skewY:-172.6,skewX:7.3}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-20.1,y:124.7,regY:0.8,scaleX:0.972,scaleY:0.972,regX:-17.7,skewY:-174.3,skewX:5.6}}]},3).to({state:[{t:this.instance_30,p:{rotation:0,x:-9.9,y:118.1,regY:0.8,scaleX:0.972,scaleY:0.972,regX:-17.7,skewY:-179.1,skewX:0.8}}]},2).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.2,y:116,regY:0.8,scaleX:0.972,scaleY:0.972,regX:-17.7,skewY:177.3,skewX:-2.6}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-6.7,y:125,regY:0.8,scaleX:0.972,scaleY:0.972,regX:-17.7,skewY:172,skewX:-7.9}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7,y:120,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:175.5,skewX:-4.4}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.2,y:116.2,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:178,skewX:-1.9}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.6,y:113.5,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.6,skewY:180,skewX:0}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.6,y:111.8,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:-179.1,skewX:0.8}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.7,y:111.2,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:-178.6,skewX:1.3}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.7,y:114.7,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:179.2,skewX:-0.7}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.7,y:116.9,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:177.7,skewX:-2.2}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.8,y:117.6,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:177.3,skewX:-2.6}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.5,y:112.8,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:-179.4,skewX:0.5}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.3,y:109.3,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.8,skewY:-177.1,skewX:2.8}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.3,y:107.3,regY:0.8,scaleX:0.97,scaleY:0.97,regX:-17.7,skewY:-175.6,skewX:4.3}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-7.2,y:106.5,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:-175.1,skewX:4.8}}]},1).to({state:[{t:this.instance_30,p:{rotation:0,x:-4.5,y:106.2,regY:0.8,scaleX:0.971,scaleY:0.971,regX:-17.7,skewY:-173.1,skewX:6.8}}]},2).to({state:[{t:this.instance_32,p:{rotation:0,x:117.6,y:191.4,scaleX:1.1,scaleY:1.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_32,p:{rotation:1.5,x:115.9,y:193.9,scaleX:1.1,scaleY:1.1,skewX:0,skewY:0}}]},1).to({state:[]},2).to({state:[{t:this.instance_32,p:{rotation:0,x:156.1,y:207.7,scaleX:1,scaleY:1,skewX:-1.4,skewY:178.5}}]},2).to({state:[{t:this.instance_33,p:{x:163.3,y:185.8}}]},2).to({state:[{t:this.instance_33,p:{x:163.5,y:182.8}}]},1).to({state:[{t:this.instance_33,p:{x:163.3,y:184.8}}]},2).to({state:[{t:this.instance_33,p:{x:163.3,y:185.8}}]},2).wait(16));

	// CUP_23_handle
	this.instance_34 = new lib.CUP_34_leg_COMP("synched",0);
	this.instance_34.setTransform(163.3,185.8,1,1,0,0,180,8.5,-18.9);

	this.instance_35 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_35.setTransform(148.7,219.8,1.124,1.124,0,-1.4,178.5,8.6,-18.8);

	this.instance_36 = new lib.CUP_23_leg_COMP("synched",0);
	this.instance_36.setTransform(162.1,188.2,1.1,1.1,0,-1.4,178.5,8.4,-18.9);

	this.instance_37 = new lib.CUP_34_arm_01("single",124);
	this.instance_37.setTransform(215.8,148.7,1.015,0.976,0,9.2,-162.7,18.4,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34,p:{skewX:0,skewY:180,x:163.3,y:185.8,regY:-18.9,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]}).to({state:[{t:this.instance_34,p:{skewX:-3.9,skewY:176,x:167.2,y:197,regY:-18.9,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:-5.5,skewY:174.4,x:169,y:200.2,regY:-18.8,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:-3.4,skewY:176.5,x:166.3,y:199.8,regY:-18.8,regX:8.4,scaleX:1.022,scaleY:1.022,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:-0.1,skewY:179.8,x:155.7,y:186,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:-0.1,skewY:179.8,x:155.7,y:186,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:-179.9,x:156,y:183.2,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:-179.9,x:155.8,y:185.1,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:-179.9,x:155.8,y:185.9,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:-0.7,skewY:179.2,x:156.9,y:188,regY:-19,regX:8.4,scaleX:1.226,scaleY:1.226,rotation:0}}]},28).to({state:[{t:this.instance_34,p:{skewX:-1.7,skewY:178.2,x:157.4,y:193.8,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:-3,skewY:176.9,x:160.8,y:199.9,regY:-19,regX:8.6,scaleX:1.226,scaleY:1.226,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:-3,skewY:176.9,x:160.7,y:202,regY:-19,regX:8.6,scaleX:1.226,scaleY:1.226,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:-3,skewY:176.9,x:160.7,y:202.8,regY:-19,regX:8.6,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:-1.7,skewY:178.2,x:160,y:200.5,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},5).to({state:[{t:this.instance_34,p:{skewX:1.5,skewY:-178.4,x:157.5,y:185.5,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:3,skewY:-176.9,x:156,y:180.5,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:3.3,skewY:-176.6,x:155.9,y:179,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:3.3,skewY:-176.6,x:155.7,y:181.4,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:3.3,skewY:-176.6,x:155.7,y:182.1,regY:-19,regX:8.5,scaleX:1.226,scaleY:1.226,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:1.8,skewY:-178.1,x:156.9,y:186.6,regY:-19.1,regX:8.5,scaleX:1.225,scaleY:1.225,rotation:0}}]},14).to({state:[{t:this.instance_34,p:{skewX:-1.2,skewY:178.7,x:154.9,y:197.9,regY:-18.9,regX:8.5,scaleX:1.201,scaleY:1.201,rotation:0}}]},1).to({state:[{t:this.instance_35,p:{skewX:-1.4,skewY:178.5,x:148.7,y:219.8}}]},2).to({state:[{t:this.instance_35,p:{skewX:-2.6,skewY:177.3,x:150.3,y:221.7}}]},1).to({state:[{t:this.instance_35,p:{skewX:-3.9,skewY:176,x:149.7,y:220.2}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:83.9,y:202,regY:-18.8,regX:8.5,scaleX:1.087,scaleY:1.087,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:86.2,y:160.5,regY:-18.9,regX:8.6,scaleX:0.973,scaleY:0.973,rotation:30.4}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:83.9,y:154.9,regY:-18.8,regX:8.5,scaleX:0.972,scaleY:0.972,rotation:32.4}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:84.2,y:153.2,regY:-18.8,regX:8.6,scaleX:0.972,scaleY:0.972,rotation:36.6}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:83.5,y:154.4,regY:-18.8,regX:8.6,scaleX:0.972,scaleY:0.972,rotation:36.6}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:81.3,y:157.3,regY:-18.8,regX:8.5,scaleX:0.972,scaleY:0.972,rotation:28.9}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:67.3,y:195.3,regY:-18.8,regX:8.4,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:63.5,y:192.3,regY:-18.7,regX:8.4,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:61.4,y:188.6,regY:-18.7,regX:8.4,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:54.7,y:194.4,regY:-18.8,regX:8.4,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:52.9,y:190.1,regY:-18.7,regX:8.4,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},3).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:50.4,y:192.8,regY:-18.8,regX:8.4,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:49.7,y:192.1,regY:-18.7,regX:8.5,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},3).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:49.2,y:191.3,regY:-18.7,regX:8.5,scaleX:0.972,scaleY:0.972,rotation:11.6}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:46.9,y:192.9,regY:-18.7,regX:8.5,scaleX:0.972,scaleY:0.972,rotation:14.4}}]},3).to({state:[{t:this.instance_34,p:{skewX:22.9,skewY:22.3,x:40.7,y:205.2,regY:-18.9,regX:8.2,scaleX:0.944,scaleY:0.997,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:27.4,y:206.2,regY:-18.9,regX:8.3,scaleX:0.971,scaleY:0.971,rotation:28.2}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:25.3,y:207.7,regY:-18.8,regX:8.4,scaleX:0.971,scaleY:0.971,rotation:30}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:27.7,y:203.1,regY:-18.8,regX:8.3,scaleX:0.971,scaleY:0.971,rotation:28.2}}]},3).to({state:[]},2).to({state:[{t:this.instance_36,p:{regX:8.4,skewX:-1.4,skewY:178.5,x:162.1,y:188.2,scaleX:1.1,scaleY:1.1}}]},17).to({state:[{t:this.instance_36,p:{regX:8.5,skewX:0,skewY:180,x:160.4,y:192,scaleX:1.1,scaleY:1.1}}]},1).to({state:[{t:this.instance_37}]},2).to({state:[{t:this.instance_36,p:{regX:8.5,skewX:0,skewY:0,x:115.6,y:201,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:121.3,y:185.8,regY:-18.9,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:121.5,y:182.8,regY:-18.9,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]},1).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:121.3,y:184.8,regY:-18.9,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]},2).to({state:[{t:this.instance_34,p:{skewX:0,skewY:0,x:121.3,y:185.8,regY:-18.9,regX:8.5,scaleX:1,scaleY:1,rotation:0}}]},2).wait(16));

	// CUP_23_leg_COMP
	this.instance_38 = new lib.CUP_34_leg_COMP("synched",0);
	this.instance_38.setTransform(121.3,185.8,1,1,0,0,0,8.5,-18.9);

	this.instance_39 = new lib.CUP_23_leg_COMP("synched",0);
	this.instance_39.setTransform(103.3,212.2,1.124,1.124,0,0,0,8.5,-19);

	this.instance_40 = new lib.CUP_34_arm_01("single",123);
	this.instance_40.setTransform(224.2,137.7,1.006,0.948,0,2.9,-175,18.4,-23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_38,p:{rotation:0,x:121.3,y:185.8,regX:8.5,scaleX:1,scaleY:1,regY:-18.9,skewY:0,skewX:0}}]}).to({state:[{t:this.instance_38,p:{rotation:-3.9,x:125.4,y:199.9,regX:8.5,scaleX:1,scaleY:1,regY:-18.9,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:-5.5,x:127.2,y:204.2,regX:8.6,scaleX:1,scaleY:1,regY:-18.9,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:-3.4,x:123.4,y:202.4,regX:8.5,scaleX:1.022,scaleY:1.022,regY:-18.9,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:-0.1,x:104.1,y:186.2,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:-0.1,x:104.1,y:186.2,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:104.4,y:183.2,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:104.2,y:185.1,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:104.2,y:185.9,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:-0.7,x:105.2,y:188.7,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},28).to({state:[{t:this.instance_38,p:{rotation:-1.7,x:105.8,y:195.5,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:-3,x:109.4,y:202.7,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:-3,x:109.3,y:204.8,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:-3,x:109.3,y:205.6,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:-1.7,x:108.4,y:202.1,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},5).to({state:[{t:this.instance_38,p:{rotation:1.5,x:105.9,y:184.1,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19.1,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:3,x:104.5,y:177.8,regX:8.5,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:3.3,x:104.3,y:176.1,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:3.3,x:104.1,y:178.5,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:3.3,x:104.1,y:179.3,regX:8.4,scaleX:1.226,scaleY:1.226,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_38,p:{rotation:1.8,x:105.2,y:185,regX:8.4,scaleX:1.225,scaleY:1.225,regY:-19.1,skewY:0,skewX:0}}]},14).to({state:[{t:this.instance_38,p:{rotation:-1.2,x:104.4,y:199,regX:8.5,scaleX:1.201,scaleY:1.201,regY:-19,skewY:0,skewX:0}}]},1).to({state:[{t:this.instance_39,p:{rotation:0,x:103.3,y:212.2,regY:-19}}]},2).to({state:[{t:this.instance_39,p:{rotation:-1.2,x:104.8,y:215.2,regY:-19}}]},1).to({state:[{t:this.instance_39,p:{rotation:-2.4,x:104,y:214.7,regY:-18.9}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:129.6,y:202,regX:8.5,scaleX:1.087,scaleY:1.087,regY:-18.8,skewY:180,skewX:0}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:140.5,y:156.3,regX:8.6,scaleX:0.974,scaleY:0.974,regY:-18.9,skewY:142.8,skewX:-37.1}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:142.7,y:149.2,regX:8.5,scaleX:0.974,scaleY:0.974,regY:-19,skewY:137.7,skewX:-42.2}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:142.9,y:146.7,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:133.3,skewX:-46.6}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:142.1,y:148,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:133.3,skewX:-46.6}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:140,y:152.3,regX:8.6,scaleX:0.974,scaleY:0.974,regY:-19,skewY:139.9,skewX:-40}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:125.8,y:188,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:167.7,skewX:-12.2}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:122,y:184.8,regX:8.7,scaleX:0.973,scaleY:0.973,regY:-19.1,skewY:167.7,skewX:-12.2}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:119.9,y:181.2,regX:8.7,scaleX:0.973,scaleY:0.973,regY:-19.1,skewY:167.7,skewX:-12.2}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:113.2,y:187.1,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:167.7,skewX:-12.2}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:111.4,y:182.8,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:167.7,skewX:-12.2}}]},3).to({state:[{t:this.instance_38,p:{rotation:0,x:108.9,y:185.4,regX:8.7,scaleX:0.973,scaleY:0.973,regY:-19.1,skewY:167.7,skewX:-12.2}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:108.2,y:184.7,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:167.7,skewX:-12.2}}]},3).to({state:[{t:this.instance_38,p:{rotation:0,x:107.7,y:184,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19,skewY:167.7,skewX:-12.2}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:105.6,y:188.3,regX:8.6,scaleX:0.973,scaleY:0.973,regY:-19.1,skewY:170.5,skewX:-9.4}}]},3).to({state:[{t:this.instance_38,p:{rotation:0,x:98.6,y:207.9,regX:8.7,scaleX:0.959,scaleY:0.986,regY:-19,skewY:177.3,skewX:0.1}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:85.5,y:215.9,regX:8.6,scaleX:0.972,scaleY:0.972,regY:-19,skewY:-175.6,skewX:4.3}}]},2).to({state:[{t:this.instance_38,p:{rotation:0,x:83,y:219.1,regX:8.7,scaleX:0.972,scaleY:0.972,regY:-19,skewY:-173.8,skewX:6.1}}]},1).to({state:[{t:this.instance_38,p:{rotation:0,x:85.8,y:212.8,regX:8.6,scaleX:0.972,scaleY:0.972,regY:-18.9,skewY:-175.6,skewX:4.3}}]},3).to({state:[]},2).to({state:[{t:this.instance_40,p:{regX:18.4,scaleX:1.006,scaleY:0.948,skewX:2.9,skewY:-175,x:224.2,y:137.7,regY:-23.8,startPosition:123}}]},17).to({state:[{t:this.instance_40,p:{regX:18.6,scaleX:1.008,scaleY:0.954,skewX:3.5,skewY:-172.3,x:223.7,y:143.2,regY:-23.8,startPosition:123}}]},1).to({state:[]},2).to({state:[{t:this.instance_40,p:{regX:18.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:59.3,y:109,regY:-23.9,startPosition:1}}]},4).to({state:[{t:this.instance_40,p:{regX:18.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:59.5,y:106,regY:-23.9,startPosition:1}}]},1).to({state:[{t:this.instance_40,p:{regX:18.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:59.3,y:108,regY:-23.9,startPosition:1}}]},2).to({state:[{t:this.instance_40,p:{regX:18.4,scaleX:1,scaleY:1,skewX:0,skewY:0,x:59.3,y:109,regY:-23.9,startPosition:1}}]},2).wait(16));

	// CUP_23_leg_COMP
	this.instance_41 = new lib.CUP_34_arm_01("single",1);
	this.instance_41.setTransform(59.3,109,1,1,0,0,0,18.4,-23.9);

	this.instance_42 = new lib.Symbol5("synched",1,false);
	this.instance_42.setTransform(11.1,88.4,1,1,0,0,0,27.2,55);

	this.instance_43 = new lib.CUP_34DOWN_arm_02asdf("single",1);
	this.instance_43.setTransform(29.7,139.7,1.125,1.124,0,-7.2,-10,12.6,-20.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#0000FF").s().p("AAAAHQAAgNAAgNIABAnQgCgGABgHg");
	this.shape_49.setTransform(218,83.7);

	this.instance_44 = new lib.Symbol3("synched",1,false);
	this.instance_44.setTransform(182.4,80.4,1.1,1.1,0,0,0,25.8,40.5);

	this.instance_45 = new lib.CUP_34_arm_02("single",1);
	this.instance_45.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_41,p:{rotation:0,x:59.3,y:109,startPosition:1,regX:18.4,regY:-23.9,scaleX:1,scaleY:1,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_41,p:{rotation:-18.9,x:58.5,y:131.9,startPosition:112,regX:18.4,regY:-23.9,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_41,p:{rotation:-5.5,x:56.1,y:135.4,startPosition:112,regX:18.3,regY:-24,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:53.3,y:129.5,startPosition:112,regX:18.2,regY:-24,scaleX:1.023,scaleY:1.021,skewX:-8.2,skewY:-11.7}}]},2).to({state:[{t:this.instance_41,p:{rotation:-1.7,x:26,y:118.2,startPosition:125,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:-1.7,x:25.6,y:94,startPosition:126,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:-1.4,x:26.4,y:90.8,startPosition:113,regX:18.4,regY:-24,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_42,p:{y:88.4,startPosition:1}}]},2).to({state:[{t:this.instance_42,p:{y:89.2,startPosition:3}}]},2).to({state:[{t:this.instance_41,p:{rotation:-1.2,x:23.9,y:92.4,startPosition:113,regX:18.4,regY:-24,scaleX:1.225,scaleY:1.225,skewX:0,skewY:0}}]},28).to({state:[{t:this.instance_41,p:{rotation:-1.7,x:24.5,y:105.6,startPosition:114,regX:18.4,regY:-24,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:-3,x:26.2,y:113.1,startPosition:116,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_41,p:{rotation:-3,x:26,y:116.7,startPosition:115,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_41,p:{rotation:-3,x:26,y:115.9,startPosition:115,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:27.1,y:111.8,startPosition:115,regX:18.4,regY:-24.3,scaleX:1.249,scaleY:1.192,skewX:-4.9,skewY:-12.6}}]},5).to({state:[{t:this.instance_41,p:{rotation:1.5,x:29.9,y:89.7,startPosition:127,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_41,p:{rotation:3,x:31,y:81.4,startPosition:117,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:31.4,y:79.9,startPosition:117,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.274,skewX:3.1,skewY:3.4}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:31.2,y:82,startPosition:117,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.242,skewX:3.2,skewY:3.3}}]},2).to({state:[{t:this.instance_41,p:{rotation:3.3,x:31.2,y:82.6,startPosition:117,regX:18.4,regY:-24.1,scaleX:1.226,scaleY:1.226,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_41,p:{rotation:1.8,x:29.8,y:90.4,startPosition:128,regX:18.4,regY:-24.1,scaleX:1.225,scaleY:1.225,skewX:0,skewY:0}}]},14).to({state:[{t:this.instance_41,p:{rotation:-1.2,x:25.6,y:110.1,startPosition:129,regX:18.4,regY:-24.1,scaleX:1.201,scaleY:1.201,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_43,p:{scaleX:1.125,rotation:0,skewX:-7.2,skewY:-10,x:29.7,y:139.7,scaleY:1.124}}]},2).to({state:[{t:this.instance_43,p:{scaleX:1.124,rotation:-1.2,skewX:0,skewY:0,x:28.7,y:138.3,scaleY:1.124}}]},1).to({state:[{t:this.instance_43,p:{scaleX:1.123,rotation:0,skewX:-5.1,skewY:-8.4,x:28.1,y:139.5,scaleY:1.127}}]},2).to({state:[{t:this.shape_49},{t:this.instance_41,p:{rotation:0,x:196.9,y:118.4,startPosition:119,regX:18.4,regY:-23.9,scaleX:1.087,scaleY:1.087,skewX:0,skewY:180}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:181.6,y:76.1,startPosition:118,regX:18.4,regY:-23.9,scaleX:0.974,scaleY:0.974,skewX:-7.1,skewY:172.8}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:179.8,y:67.9,startPosition:118,regX:18.2,regY:-24,scaleX:1.092,scaleY:0.978,skewX:-5.3,skewY:168.5}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:178.8,y:64.8,startPosition:118,regX:18.2,regY:-24,scaleX:1.092,scaleY:0.978,skewX:-6.1,skewY:167.7}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:178.1,y:66,startPosition:118,regX:18.2,regY:-24,scaleX:1.092,scaleY:0.978,skewX:-6.1,skewY:167.7}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:177,y:70.4,startPosition:118,regX:18.4,regY:-24,scaleX:1.013,scaleY:0.978,skewX:-5.3,skewY:169.1}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:159.5,y:104.8,startPosition:118,regX:18.4,regY:-23.9,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:155.6,y:101.6,startPosition:118,regX:18.4,regY:-24,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:153.6,y:98,startPosition:118,regX:18.4,regY:-24,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:146.9,y:103.9,startPosition:118,regX:18.4,regY:-23.9,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:145,y:99.5,startPosition:118,regX:18.4,regY:-24,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},3).to({state:[{t:this.instance_41,p:{rotation:0,x:142.6,y:102.3,startPosition:118,regX:18.4,regY:-23.9,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:141.8,y:101.4,startPosition:118,regX:18.4,regY:-24,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},3).to({state:[{t:this.instance_41,p:{rotation:0,x:141.3,y:100.7,startPosition:118,regX:18.4,regY:-24,scaleX:1.013,scaleY:0.978,skewX:-7.6,skewY:166.8}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:143.4,y:106.9,startPosition:118,regX:18.4,regY:-24,scaleX:1.012,scaleY:0.977,skewX:-8,skewY:166.3}}]},3).to({state:[{t:this.instance_41,p:{rotation:0,x:147.3,y:109.7,startPosition:130,regX:18.4,regY:-24,scaleX:0.994,scaleY:1.136,skewX:10.2,skewY:178.4}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:146.8,y:134.2,startPosition:130,regX:18.4,regY:-24,scaleX:1.008,scaleY:1.091,skewX:8.9,skewY:-167.8}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:141.2,y:150.9,startPosition:131,regX:18.4,regY:-23.9,scaleX:1.011,scaleY:0.976,skewX:10.7,skewY:-174.7}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:141.7,y:144.9,startPosition:121,regX:18.4,regY:-23.9,scaleX:1.011,scaleY:0.976,skewX:10.7,skewY:-174.7}}]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:141.9,y:142.7,startPosition:122,regX:18.4,regY:-24,scaleX:1.011,scaleY:0.976,skewX:9,skewY:-176.5}}]},2).to({state:[{t:this.instance_41,p:{rotation:0,x:151.5,y:124.2,startPosition:132,regX:18.4,regY:-24,scaleX:1.011,scaleY:0.976,skewX:9,skewY:-176.5}}]},2).to({state:[{t:this.instance_44,p:{rotation:0,x:182.4,y:80.4,startPosition:1,regX:25.8,scaleX:1.1,scaleY:1.1,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:-5.2,x:178.8,y:72.2,startPosition:2,regX:25.8,scaleX:1.1,scaleY:1.1,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:-1.7,x:180.5,y:78.3,startPosition:3,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:0.5,x:181.9,y:83,startPosition:4,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:2.5,x:183,y:86.4,startPosition:5,regX:25.8,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:3.5,x:183.5,y:88.4,startPosition:6,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:4,x:183.7,y:89.1,startPosition:7,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.4}}]},1).to({state:[{t:this.instance_44,p:{rotation:1.8,x:182.6,y:85.2,startPosition:8,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.4}}]},1).to({state:[{t:this.instance_44,p:{rotation:0.3,x:181.8,y:82.9,startPosition:9,regX:25.7,scaleX:1.099,scaleY:1.099,regY:40.4}}]},1).to({state:[{t:this.instance_44,p:{rotation:0,x:181.6,y:82.1,startPosition:10,regX:25.8,scaleX:1.099,scaleY:1.099,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:3.3,x:183.2,y:88.2,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.5}}]},1).to({state:[{t:this.instance_44,p:{rotation:5.5,x:184.3,y:92.5,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.4}}]},1).to({state:[{t:this.instance_44,p:{rotation:7,x:185,y:95.1,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.4}}]},1).to({state:[{t:this.instance_44,p:{rotation:7.5,x:185.1,y:96.1,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.4}}]},1).to({state:[{t:this.instance_44,p:{rotation:9.6,x:188.1,y:102.7,startPosition:11,regX:25.8,scaleX:1.098,scaleY:1.098,regY:40.5}}]},2).to({state:[]},1).to({state:[{t:this.instance_41,p:{rotation:0,x:57.6,y:130,startPosition:1,regX:18.4,regY:-23.9,scaleX:1,scaleY:1,skewX:0,skewY:0}}]},5).to({state:[]},2).to({state:[{t:this.instance_45}]},5).wait(16));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,-0.9,245.3,231.9);


(lib.Cup_Protein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// CUP_23_eye_02
	this.instance = new lib.CUP_34_arm_02copy3("single",10);
	this.instance.setTransform(59.4,115.7,0.992,0.992,0,0.6,-179.3,-15.2,-19.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#758A51").s().p("AgeAZIgCgJIgGgcIgEgPQAdAFAZgEIASgEQAEAfAJAeg");
	this.shape.setTransform(35.7,150.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#526139").s().p("AgrAaQgJgEgDgIQgLgUABgbQAOARAUALQAPAFAQABQATACAVgEQAQgGAKgRIAAAKQAAAPgHANIgCAEQgDAEgHACIgXAHQgOADgMAAQgVAAgUgIg");
	this.shape_1.setTransform(34.9,142.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B3E4E6").s().p("AgbBvQgbgDgSgUIgVgWQgCgSABgTQACgSAGgPIgBALIACAHIADACIAHAAIADgCIABgHQADgcAOgbQAJgTANgRQAQgZAbgBIgHAHQgLANgJAPQgJARgIARIgDAXIgBALIACACIADgBIACgDIAMgXIASgiQAHgMALgKQAIgHAKgDQAUgJAQARIgQAGIgJAIIgSAQIgOATQgNASAAAXIACAAIAFABIAEgDIAJgKIAAgBQABgFAEgEQAKgRANgQQALgPATgCQAGAEAEAFQAEADABAFQABAFgDAEQgOAbgSAYQgJAOgIAQQgGAMgEANQgDAPgKAQIgFAHQgHAFgIADQgJAFgMAAIgHAAg");
	this.shape_2.setTransform(37.8,129.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAYC1QgKgegDghIgQAFQgbADgegFIAEAPIAHAeIACAKIgTgCIgCgKIgHggIgEgSQgggNACghQABgRgBgRIgCgmQAAgRAEgRQAEgRAIgQQAIgRAKgPIADgDIAEgCQANggAYgXQAIgHAKgFIARgHIAQAAIAJABIANAEIAIABQAOADANAFQAJAEAFAJQAEAGABAGQAUAMABAUQABAKgEAKIgKASIgXAjIgKARIgOAdIgDALQAPAhgOAhQgBAFgDAEIgIAKQgFAFgFADQACAlAMAigAhTBXQAEAHAJAEQAhAPAkgKIAUgHQAHgBADgFIACgEQAIgNAAgQIgBgLQgJASgRAFQgTAHgUgDQgRgBgOgGQgUgMgOgRQgCAbALAXgAhcgYQgCATACAQIAVAWQATAUAbADQAQABAMgGQAHgDAHgFIAGgHQAKgQADgPQADgLAGgMQAIgQAJgOQASgaAPgbQACgEgBgFQgBgFgDgDQgFgFgGgEQgTACgLAPQgMAQgLARQgDAEgCAFIAAABIgIAKIgFAFIgEgBIgDgCQAAgXANgSIAPgTIARgQIAKgIIAQgGQgQgRgVAJQgKADgIAHQgKAKgIAMIgRAiIgMAXIgCADIgDABIgDgCIACgLIACgXQAIgRAKgRQAJgPAKgNIAHgHQgbABgQAZQgMARgKATQgOAbgDAeIgBAHIgDACIgHAAIgDgCIgBgHIAAgNQgGARgBASg");
	this.shape_3.setTransform(37.6,135.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#758A51").s().p("AgmAnIgGgYIgHgaIgFgPQAhgBAcgJIATgJQAEAgALAaQADAKAFAIIAKAPg");
	this.shape_4.setTransform(32.1,155.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#526139").s().p("AgwAlQgJgCgEgGQgNgUACgZQAQANAWAFQAQADASgDQAUgCAXgJQATgJAKgUIABAKQAAARgJANIgCAEQgDAFgIADIgZAMQgaANgbAAQgLAAgKgCg");
	this.shape_5.setTransform(30.4,147);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B3E4E6").s().p("AhPBnIgXgRQgDgSACgTQACgSAGgSIAAANIABAGIAEABIAHgBIAEgDIABgHQADgdAPgeQALgVANgUQASgcAegHIgIAIQgMAQgJARQgLATgJATIgCAXIgCALIADAAIADAAIACgDIANgaIAUgmQAIgOAMgMQAIgJALgFQAXgOASANIgSAKIgKAKIgUAUIgQAWQgOAVAAAXIADACIAFgBIAFgGIAJgLIAAgBQACgGAEgEQALgVAOgSQAMgSAVgFQAHACAFAEQADACACAFQABAEgDAFQgQAegUAeQgKAPgIARQgHAOgEANQgDAQgLASIgGAIQgIAHgIAFQgOAJgRACIgKABQgXAAgRgNg");
	this.shape_6.setTransform(33.5,133.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAtDFIgKgPQgFgJgDgJQgLgdgEggIgRAJQgeAJghABIAFAPIAHAcIAHAYIgWgCIgGgTIgIgfIgEgQQgjgGACgiQABgRgBgQIgCgoQgBgPAFgRQAEgSAJgSQAJgSALgSIADgDIAEgDQAPgjAagcQAJgJALgIIATgLIASgEIAKgBIAOABIAIgBIAfACQAJACAGAIQAEAEACAHQAVAGACAUQABAKgFALQgEAKgHALIgZAnIgLAUQgJAQgHASIgDALQARAbgPAlQgCAFgDAFQgEAGgFAGIgLAKQAFA9AgAtgAhbBeQAEAGAKACQAlAHAngSIAXgMQAHgDAEgFIACgEQAIgPAAgRIgBgKQgKAUgSAJQgVALgXACQgSADgQgDQgWgHgPgNQgCAbAMAUgAhmgOQgBARACASIAXAQQAVAQAdgDQASgDANgJQAJgFAHgHIAGgIQALgSAEgNQADgOAHgNQAJgSAKgQQATgeAQgeQADgFgBgFQgBgFgEgCQgFgEgHgCQgUAGgNARQgNATgMAUQgEAFgBAFIAAABIgKALIgFAHIgFAAIgCgCQAAgWAOgVIAQgWIATgVIALgJIARgLQgRgMgXANQgLAFgJAJQgLAMgJAPIgTAlIgNAaIgCADIgEACIgCgBIABgLIADgYQAJgTAKgSQAKgSAMgPIAHgJQgeAIgRAcQgOAUgKAVQgQAegDAfIgBAHIgDACIgIACIgDgCIgCgGIABgNQgHATgCASg");
	this.shape_7.setTransform(33.3,140.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.992,scaleY:0.992,skewX:0.6,skewY:-179.3,x:59.4,y:115.7,startPosition:10,regY:-19.6}}]},17).to({state:[{t:this.instance,p:{regX:-15.3,scaleX:0.999,scaleY:1.061,skewX:7.7,skewY:-165.3,x:61,y:116,startPosition:11,regY:-19.6}}]},2).to({state:[{t:this.instance,p:{regX:-15.4,scaleX:0.989,scaleY:0.953,skewX:1.1,skewY:-178.3,x:61,y:117.5,startPosition:12,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.999,scaleY:1.073,skewX:10.1,skewY:-162.5,x:60.6,y:120.4,startPosition:13,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:8.4,skewY:-171.5,x:58.1,y:120.3,startPosition:13,regY:-19.4}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:8.4,skewY:-171.5,x:58.1,y:120.3,startPosition:13,regY:-19.4}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:2.2,skewY:-177.7,x:57.4,y:119.7,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.3,y:121.2,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:1.001,scaleY:1.03,skewX:13,skewY:-161.9,x:57.2,y:122.8,startPosition:13,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.5,y:121.8,startPosition:12,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:0.9,skewY:-179,x:59.1,y:120.4,startPosition:10,regY:-19.3}}]},2).to({state:[]},2).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.992,scaleY:0.992,skewX:0.6,skewY:-179.3,x:59.4,y:115.7,startPosition:10,regY:-19.6}}]},11).to({state:[{t:this.instance,p:{regX:-15.3,scaleX:0.999,scaleY:1.061,skewX:7.7,skewY:-165.3,x:61,y:116,startPosition:11,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.4,scaleX:0.989,scaleY:0.953,skewX:1.1,skewY:-178.3,x:61,y:117.5,startPosition:12,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.999,scaleY:1.073,skewX:10.1,skewY:-162.5,x:60.6,y:120.4,startPosition:13,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:8.4,skewY:-171.5,x:58.1,y:120.3,startPosition:13,regY:-19.4}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:2.2,skewY:-177.7,x:57.4,y:119.7,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.3,y:121.2,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:1.001,scaleY:1.03,skewX:13,skewY:-161.9,x:57.2,y:122.8,startPosition:13,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.5,y:121.8,startPosition:12,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:0.9,skewY:-179,x:59.1,y:120.4,startPosition:10,regY:-19.3}}]},2).to({state:[]},2).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.992,scaleY:0.992,skewX:0.6,skewY:-179.3,x:59.4,y:115.7,startPosition:10,regY:-19.6}}]},11).to({state:[{t:this.instance,p:{regX:-15.3,scaleX:0.999,scaleY:1.061,skewX:7.7,skewY:-165.3,x:61,y:116,startPosition:11,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.4,scaleX:0.989,scaleY:0.953,skewX:1.1,skewY:-178.3,x:61,y:117.5,startPosition:12,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.999,scaleY:1.073,skewX:10.1,skewY:-162.5,x:60.6,y:120.4,startPosition:13,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:8.4,skewY:-171.5,x:58.1,y:120.3,startPosition:13,regY:-19.4}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:2.2,skewY:-177.7,x:57.4,y:119.7,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.3,y:121.2,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:1.001,scaleY:1.03,skewX:13,skewY:-161.9,x:57.2,y:122.8,startPosition:13,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.5,y:121.8,startPosition:12,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:0.9,skewY:-179,x:59.1,y:120.4,startPosition:10,regY:-19.3}}]},2).to({state:[]},2).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.992,scaleY:0.992,skewX:0.6,skewY:-179.3,x:59.4,y:115.7,startPosition:10,regY:-19.6}}]},11).to({state:[{t:this.instance,p:{regX:-15.3,scaleX:0.999,scaleY:1.061,skewX:7.7,skewY:-165.3,x:61,y:116,startPosition:11,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.4,scaleX:0.989,scaleY:0.953,skewX:1.1,skewY:-178.3,x:61,y:117.5,startPosition:12,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.2,scaleX:0.999,scaleY:1.073,skewX:10.1,skewY:-162.5,x:60.6,y:120.4,startPosition:13,regY:-19.6}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:8.4,skewY:-171.5,x:58.1,y:120.3,startPosition:13,regY:-19.4}}]},1).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.998,scaleY:0.998,skewX:2.2,skewY:-177.7,x:57.4,y:119.7,startPosition:13,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:8.2,skewY:-171.7,x:57.3,y:121.2,startPosition:32,regY:-19.3}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:1.001,scaleY:1.03,skewX:13,skewY:-161.9,x:57.2,y:122.8,startPosition:33,regY:-19.3}}]},1).to({state:[{t:this.instance,p:{regX:-10.6,scaleX:1,scaleY:1.028,skewX:20.5,skewY:-162.6,x:49.2,y:143.1,startPosition:31,regY:-3.8}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:2.4,skewY:-177.5,x:57.4,y:136.6,startPosition:31,regY:-19.4}}]},2).to({state:[{t:this.instance,p:{regX:-15.1,scaleX:0.997,scaleY:0.997,skewX:-2.4,skewY:177.5,x:57.1,y:142.6,startPosition:31,regY:-19.5}}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[]},1).wait(81));

	// Layer 19
	this.instance_1 = new lib.CupHeadclipPROTEIN("synched",0);
	this.instance_1.setTransform(138.1,68.9,1,1,0,0,0,138,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({startPosition:1},0).wait(1).to({rotation:0.5,x:139,y:67.5,startPosition:2},0).wait(1).to({rotation:1.3,x:139.8,y:66.2,startPosition:3},0).wait(1).to({rotation:2.6,x:141.9,y:63.4,startPosition:4},0).wait(2).to({rotation:1.1,x:140,y:66.2,startPosition:6},0).wait(1).to({rotation:-1.1,x:136.9,y:71.4,startPosition:7},0).wait(1).to({rotation:-3.2,x:134.8,y:75.2,startPosition:8},0).wait(1).to({rotation:-5,x:133.2,y:78.6,startPosition:9},0).wait(2).to({rotation:-6.2,x:132.1,y:81.1,startPosition:11},0).wait(2).to({regX:137.9,rotation:-5.2,x:132.9,y:78.7,startPosition:13},0).wait(2).to({regX:137.8,scaleX:1,scaleY:1,rotation:-4,x:134.1,y:77.1,startPosition:15},0).wait(1).to({regX:137.9,regY:68.9,rotation:-1.9,x:135.8,y:73.7,startPosition:16},0).wait(1).to({rotation:-0.4,x:137.3,y:70.8,startPosition:17},0).wait(2).to({rotation:0.9,x:138.9,y:71.7,startPosition:19},0).wait(1).to({rotation:2.2,x:139.8,y:73.5,startPosition:20},0).wait(1).to({rotation:3.5,x:141.1,y:76.1,startPosition:21},0).wait(1).to({regY:69,rotation:6.1,x:142.1,y:82,startPosition:22},0).wait(1).to({regX:138,rotation:7.1,x:143.2,y:83.9,startPosition:23},0).wait(2).to({rotation:6.1,x:142.6,y:82.7,startPosition:25},0).wait(2).to({rotation:4.5,x:141.8,y:78.7,startPosition:27},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:139.8,y:75.7,startPosition:28},0).wait(1).to({regY:68.9,rotation:1.2,x:138.9,y:73,startPosition:29},0).wait(2).to({rotation:0.7,x:138.6,y:74,startPosition:31},0).wait(2).to({rotation:-0.6,x:136.8,y:76.7,startPosition:33},0).wait(1).to({rotation:-2.7,x:135.1,y:81.7,startPosition:34},0).wait(1).to({regY:68.8,rotation:-4.2,x:133,y:86.2,startPosition:35},0).wait(1).to({rotation:-5.7,x:131.7,y:88.8,startPosition:36},0).wait(2).to({regY:68.7,rotation:-4.2,x:132.5,y:86.2,startPosition:38},0).wait(2).to({regX:137.8,regY:69,scaleX:1,scaleY:1,rotation:-3,x:134.4,y:83.2,startPosition:40},0).wait(1).to({regX:137.9,regY:68.9,rotation:-1.4,x:135.3,y:75.6,startPosition:41},0).wait(1).to({rotation:-0.4,x:137.3,y:70.8,startPosition:42},0).wait(2).to({rotation:0.9,x:138.9,y:71.7,startPosition:44},0).wait(1).to({rotation:2.2,x:139.8,y:73.5,startPosition:45},0).wait(1).to({rotation:3.5,x:141.1,y:76.1,startPosition:46},0).wait(1).to({regY:69,rotation:6.1,x:142.1,y:82,startPosition:47},0).wait(1).to({regX:138,rotation:7.1,x:143.2,y:83.9,startPosition:48},0).wait(2).to({rotation:6.1,x:142.6,y:82.7,startPosition:50},0).wait(2).to({rotation:4.5,x:141.8,y:78.7,startPosition:52},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:139.8,y:75.7,startPosition:53},0).wait(1).to({regY:68.9,rotation:1.2,x:138.9,y:73,startPosition:54},0).wait(2).to({rotation:0.7,x:138.6,y:74,startPosition:56},0).wait(2).to({rotation:-0.6,x:136.8,y:76.7,startPosition:58},0).wait(1).to({rotation:-2.7,x:135.1,y:81.7,startPosition:59},0).wait(1).to({regY:68.8,rotation:-4.2,x:133,y:86.2,startPosition:60},0).wait(1).to({rotation:-5.7,x:131.7,y:88.8,startPosition:61},0).wait(2).to({regY:68.7,rotation:-4.2,x:132.5,y:86.2,startPosition:63},0).wait(2).to({regX:137.8,regY:69,scaleX:1,scaleY:1,rotation:-3,x:134.4,y:83.2,startPosition:65},0).wait(1).to({regX:137.9,regY:68.9,rotation:-1.4,x:135.3,y:75.6,startPosition:66},0).wait(1).to({rotation:-0.4,x:137.3,y:70.8,startPosition:67},0).wait(2).to({rotation:0.9,x:138.9,y:71.7,startPosition:69},0).wait(1).to({rotation:2.2,x:139.8,y:73.5,startPosition:70},0).wait(1).to({rotation:3.5,x:141.1,y:76.1,startPosition:71},0).wait(1).to({regY:69,rotation:6.1,x:142.1,y:82,startPosition:72},0).wait(1).to({regX:138,rotation:7.1,x:143.2,y:83.9,startPosition:73},0).wait(2).to({rotation:6.1,x:142.6,y:82.7,startPosition:75},0).wait(2).to({rotation:4.5,x:141.8,y:78.7,startPosition:77},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:139.8,y:75.7,startPosition:78},0).wait(1).to({regY:68.9,rotation:1.2,x:138.9,y:73,startPosition:79},0).wait(2).to({rotation:0.7,x:138.6,y:74,startPosition:81},0).wait(2).to({rotation:-0.6,x:136.8,y:76.7,startPosition:83},0).wait(1).to({rotation:-2.7,x:135.1,y:81.7,startPosition:84},0).wait(1).to({regY:68.8,rotation:-4.2,x:133,y:86.2,startPosition:85},0).wait(1).to({rotation:-5.7,x:131.7,y:88.8,startPosition:86},0).wait(2).to({regY:68.7,rotation:-4.2,x:132.5,y:86.2,startPosition:88},0).wait(2).to({regX:137.8,regY:69,scaleX:1,scaleY:1,rotation:-3,x:134.4,y:83.2,startPosition:90},0).wait(1).to({regX:137.9,regY:68.9,rotation:-1.4,x:135.3,y:75.6,startPosition:91},0).wait(1).to({rotation:-0.4,x:137.3,y:70.8,startPosition:92},0).wait(2).to({rotation:0.9,x:138.9,y:71.7,startPosition:94},0).wait(1).to({rotation:2.2,x:139.8,y:73.5,startPosition:95},0).wait(1).to({rotation:3.5,x:141.1,y:76.1,startPosition:96},0).wait(1).to({regY:69,rotation:6.1,x:142.1,y:82,startPosition:97},0).wait(1).to({regX:138,rotation:7.1,x:143.2,y:83.9,startPosition:98},0).wait(2).to({rotation:6.1,x:142.6,y:82.7,startPosition:100},0).wait(2).to({rotation:4.5,x:141.8,y:78.7,startPosition:102},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:139.8,y:75.7,startPosition:103},0).wait(2).to({rotation:1.7,x:138.8,y:80.6,startPosition:105},0).wait(2).to({regX:137.9,rotation:1.1,x:138.1,y:91.4,startPosition:107},0).wait(1).to({rotation:0.2,x:137.1,y:96.4,startPosition:108},0).wait(2).to({rotation:-1.6,x:130.7,y:96.6,startPosition:110},0).wait(2).to({rotation:-3.6,x:124.8,y:92.1,startPosition:112},0).wait(1).to({regX:138,scaleX:1,scaleY:1,rotation:-4.3,x:124.3,y:76.2,startPosition:113},0).wait(1).to({x:124.9,y:69,startPosition:114},0).wait(1).to({x:125.1,y:66.8,startPosition:115},0).wait(2).to({y:68.1,startPosition:117},0).wait(1).to({x:124.7,y:71.6,startPosition:118},0).wait(1).to({x:124.3,y:76.4,startPosition:119},0).wait(1).to({x:124.1,y:79.3,startPosition:120},0).wait(2).to({x:124.3,y:77.4,startPosition:122},0).wait(1).to({x:124.5,y:75,startPosition:123},0).wait(1).to({x:124.9,y:69,startPosition:124},0).wait(1).to({x:125.1,y:66.6,startPosition:125},0).wait(2).to({y:67.6,startPosition:127},0).wait(2).to({x:124.9,y:70,startPosition:129},0).wait(1).to({x:124.7,y:72.6,startPosition:130},0).wait(1).to({x:124.3,y:74.4,startPosition:131},0).wait(1).to({y:75.9,startPosition:132},0).wait(2).to({x:124.5,y:73.8,startPosition:134},0).wait(1).to({x:124.7,y:71.4,startPosition:135},0).wait(1).to({x:125.1,y:67.3,startPosition:136},0).wait(1).to({y:66.1,startPosition:137},0).wait(2).to({y:67.1,startPosition:139},0).wait(2).to({x:124.9,y:69.5,startPosition:141},0).wait(1).to({x:124.7,y:71.9,startPosition:142},0).wait(1).to({x:124.5,y:74.3,startPosition:143},0).wait(1).to({x:124.3,y:75.7,startPosition:144},0).wait(2).to({y:74.4,startPosition:146},0).wait(2).to({x:124.5,y:72,startPosition:148},0).wait(1).to({x:124.9,y:69,startPosition:149},0).wait(1).to({x:125.1,y:66.6,startPosition:150},0).wait(1).to({y:64.8,startPosition:151},0).wait(2).to({y:66.6,startPosition:153},0).wait(2).to({x:124.9,y:69,startPosition:155},0).wait(1).to({x:124.7,y:71.4,startPosition:156},0).wait(1).to({x:124.5,y:74.3,startPosition:157},0).wait(1).to({x:124.3,y:75.2,startPosition:158},0).wait(1).to({y:74.4,startPosition:159},0).wait(2).to({y:73.2,startPosition:161},0).wait(1).to({y:71.9,startPosition:162},0).wait(2).to({x:125.1,y:68.1,startPosition:164},0).wait(1).to({y:66.6,startPosition:165},0).wait(9).to({rotation:-5.4,x:124.1,y:69.2,startPosition:174},0).wait(1).to({regY:68.9,rotation:-5.9,x:123.3,y:74.6,startPosition:175},0).wait(1).to({rotation:-4.8,x:123.5,y:81.9,startPosition:176},0).wait(1).to({regY:69,scaleX:1,scaleY:1,rotation:-4.3,x:126.1,y:83.8,startPosition:177},0).wait(2).to({regY:68.9,rotation:-2.3,x:129.5,y:86,startPosition:179},0).wait(2).to({regY:69,scaleX:1,scaleY:1,rotation:-1.1,x:132.3,y:86.4,startPosition:181},0).wait(1).to({rotation:-1.6,x:135.8,y:77.1,startPosition:182},0).wait(1).to({rotation:-0.3,x:137.2,y:72,startPosition:183},0).wait(1).to({rotation:0,x:138.3,y:68,startPosition:184},0).wait(2).to({x:138.1,y:68.1,startPosition:186},0).wait(1).to({y:68.9,startPosition:187},0).wait(7));

	// CUP_23_eye_02
	this.instance_2 = new lib.CUP_34_arm_02copy2("single",1);
	this.instance_2.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.instance_3 = new lib.CUP_34_arm_02("single",1);
	this.instance_3.setTransform(226.8,120,1,1.11,0,-3.1,0,-13.1,-22.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1D1F26").s().p("Ag2gSIALgQQAQgTAbgBQAMgBALABQAVAoALAmQgOgDgSABQgQAAgTARQgOALgCAGQgJgmgRgkg");
	this.shape_8.setTransform(227.6,151.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#758A51").s().p("AABDJQAShFgNhEIACAAIARgRQARgRAOgBQAVgBAOAFIACABQAWBXgYBXgAhNhwIgYgTIgBgBIAGgIIAPgUIAggsQADgDADABQADAAACADIAHAUQAyA5AgA6QgcgIgXAOQgXANgEAOQgVgngdgmg");
	this.shape_9.setTransform(224.2,151.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABTDRQAXhXgVhXIgDgBQgOgFgUABQgOABgSARIgQARIAAAAQAKBEgPBFIgTgCQAnidh5iWIgHgVIABgBIACgBIAYATQAdAmAVAnQAEgOAXgNQAXgOAdAIQghg6gxg5IgHgUQgDgDgCAAIABgCQACgCAEAAQAEAAADADQDCDPg3DRgAAag6QgcACgQATIgLAQQARAkAJAlQADgGAMgLQAUgQAQgBQATgBAOAEQgMgmgVgoIgPgBIgHAAg");
	this.shape_10.setTransform(225.1,151.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#1D1F26").s().p("AgfAYIgXgeIALgNQASgVATAAIAdABIAEAHQASAZAKAZQgJgDgMABQgVAAgaAWIgEADIgEAAIgKgRg");
	this.shape_11.setTransform(229.9,149.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("ABvBdIhQgGIgBgEQAAgJgCgIIAJgHIAAAAQAZgWAPgBQASAAAJADIAAAAQAMAkgCAnQAAAWgIATgAg/g6IgrgYIgIgFQAAgFAIgBIADABQAlg2ARgHQADgCADABQAEAAACAFQAFAEAEAIIABACQAuAqAlAwIgXAAQgZABgZAmQgUgagagag");
	this.shape_12.setTransform(225.4,149.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABdCKQAIgUABgWQABgngLgjIgBgBQgIgCgTAAQgPABgZAVIAAABIgIAHQACAIAAAJIAAAEIgPgCQgBgPgHgNIgFgJIgEgFQgng5g+g7QgDgDgBgDIABgEIArAZQAZAaAVAaQAbgnAWAAIAYAAQglgwgugrIgBgCQgEgHgGgEQgCgFgEgBQAAgDADgCQACgEAEAAQADAAADADQBDA7AwBEQAxBDgDBRQgCAugcAngAgLgcIgLAOIAWAdIAJARIAEAAIAEgDQAcgVAVgBQAMAAAJACQgKgZgSgZIgEgHIgfgBQgTAAgQAVg");
	this.shape_13.setTransform(226.7,150.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1D1F26").s().p("AgzARIgIgHQAigDARgYQAKgTAAgSIgBgOQAbAYATAdIANAQIgIAUQgOAggfAMIgMAEQgOgZgggbg");
	this.shape_14.setTransform(235.8,136.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#758A51").s().p("AA2BLIgUgCIAEgEQADgEAAgCQAAgOgGgOIABAAQAlgBAVgiQAIgMADgKQAWAsgFAwQgHBEg9AoIgIAFgAAIBHQAJgIAFgIIAKASgAglguQghgZgjgPQgIgFgIgCIgBAAIAAgFQgBgcAPgXQAPgYAbgJIABABQAEABAEADQAtAVAgAcIABARQABAQgCAGQgEAOgLAKQgSASgWABIgCAAg");
	this.shape_15.setTransform(232.3,141.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAmCxIAIgFQA9goAIhEQAEgwgVgsQgEAKgHANQgWAhgkABIgCAAQAGAOABAOQAAACgDAEIgEAEIgDAAIgJgSQgGAIgJAIIgcgCIALgIIgBAAQAGgEAQgSQgQgagagYQgjgiguggIgKgGIgEgDIAAAAIAAgBIgBgGIAAgBIABgBIABAAIADACIAAAAQAIACAJAFQAiAPAhAZIACAAQAXgBAUgSQAJgKAEgOQACgGgBgQIgCgRQgggcgsgVQgEgDgFgBIgBgBIAAAAQgEgCgBgEIAAABIgBgHIAAgBIABgBIAnAKIALADQBKAsAtA/QA0BLgIBKQgIBOhGAuIgUAMgAAdhrQAAASgMATQgRAZggADIAIAHQAeAcAOAXIAOgEQAfgMAOgeIAIgUIgNgTQgTgcgbgYIABAOg");
	this.shape_16.setTransform(233.1,141.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQAKgRAAgQIAAgMQAaAWATAaIAMAQIgJARQgOAdgfAKIgMADQgOgXgfgZg");
	this.shape_17.setTransform(235.8,132.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#758A51").s().p("ABvBoIhNgGIACgDQADgDAAgCQAAgMgGgOIACAAQAkAAAXgfQAIgMADgJQAVArgGArQgDAUgIARgAAGBgQAJgHAGgGIAIAOgAglgKQgggYgigOIgRgHIAAAAIAAgEQAAgZAPgVQAQgVAbgIIABABIAIAEQAsAUAfAaIABAQQABAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_18.setTransform(232.3,133.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ABlB5QAJgRADgUQAFgrgUgpQgEAHgIANQgWAeglAAIgBAAQAFAOABAMQAAACgDAEIgDACIgFAAIgIgPQgFAGgIAHIgdgDIAKgFIgBAAQAGgEAQgRQgPgXgZgYQgigdgugeIgKgGIgDgDIgBAAIAAgBIAAgFIAAgBIABAAIABAAIACABIABAAIAQAGQAjAOAgAZIACAAQAWgBAUgQQAKgJAEgMQACgGAAgOIgBgQQgggZgrgVIgJgDIgBgBIAAAAQgEgCgBgEIAAAAIgBgFIABgBIABAAIAmAJIALADQBJApArA6QAzBDgKBEQgGAqgcAfgAAfhJQAAARgNARQgSAXgfACIAHAGQAdAYAOAXIAOgEQAggJAOgcIAIgRIgMgSQgTgZgagWIABALg");
	this.shape_19.setTransform(233.1,135);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQALgQAAgQIgBgNQAaAXATAaIAMAPIgJASQgOAcggAKIgMADQgOgXgegZg");
	this.shape_20.setTransform(236.4,129.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#758A51").s().p("AArAnIgHgBIgDgHIABAAQAlAAAWgfQAIgJAEgKQAUApgGArQgKA+g+AiIgOAIgAglgsQgggYgigOIgQgHIgBAAIAAgEQAAgaAQgUQAQgVAbgIIABABIAIAEQAsAVAfAZIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_21.setTransform(232.9,133.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAaCkIAOgIQA+giAKg+QAGgrgUgpQgEAKgIALQgXAdgkAAIgCAAIADAHIgcgCIACgCQgPgYgagWQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIAAAAIARAHQAiAOAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgZgrgVIgJgEIgBgBIAAAAQgEgBgBgEIAAAAIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBHhHAnQgMAHgNAGgAAfhhQAAARgNAQQgSAXgfACIAHAGQAdAaAOAVIAOgDQAfgKAPgbIAIgRIgMgSQgSgagagWIAAAMg");
	this.shape_22.setTransform(233.6,134.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQALgQAAgRIgBgMQAaAXATAZIAMAQIgJARQgOAdggALIgMACQgOgXgegZg");
	this.shape_23.setTransform(236.2,129.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#758A51").s().p("AAKCUIgYhLIAGgEQASgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgEAAgCQAAgMgFgNIABAAQAlAAAWgdQAIgLAEgKQAUApgGArQgKA+g+AiQgNAIgPAGIgJgYgAglgvQgggYgigOIgQgHIgBAAIAAgEQAAgaAQgUQAQgVAbgIIABABIAIAEQAsAVAfAZIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_24.setTransform(232.7,134.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag8C+IADAGIgCAAIgBgGgAALCfQAPgGAOgHQA+giAKg+QAGgrgUgpQgEAJgIAMQgXAcgkABIgCAAQAGANAAAMQAAACgDADIgFAFIAAAAIgBAAIgBAAIgJgRQgJALgSAMIgHAEIgEgOIgCgEIAIgFIgBAAIAXgUQgPgVgagYQghgfgtgfIgKgHIgEgCIAAAAIAAgBIgBgGIABAAIAAgBIABAAIADABIAAAAIARAIQAiAOAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgagrgUIgJgEIgBgBIAAAAQgEgCgBgDIAAAAIgBgGIABgBIABAAIAmAJIALAEQBJApAqA7QAyBEgKBDQgLBHhHAnQgPAIgRAHIgGgTgAAfhrQAAARgNAQQgSAXgfABIAHAHQAdAZAOAVIAOgCQAfgIAPgdIAIgRIgMgSQgSgagagWIAAAMg");
	this.shape_25.setTransform(233.4,135.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#758A51").s().p("AgTBFIALgGQASgMAKgLIAJAQIAAABIABAAIABAAIAEgFQADgDAAgCQAAgMgFgOIABAAQAlAAAWgcQAIgMAEgJQAUApgGArQgKA9g+AjQgiASgpAIgAglg1QgggYgigPIgQgHIgBAAIAAgEQAAgZAQgVQAQgVAbgHIABABIAIAEQAsAUAfAaIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_26.setTransform(232.7,135.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgkCuQAqgIAigSQA+gjAKg9QAGgrgUgpQgEAJgIAMQgXAcgkAAIgCAAQAGAOAAAMQAAACgDADIgFAFIAAAAIgBAAIgBgBIgJgQQgJALgSAMIgMAGIACgWIAFgDIgBAAIAXgUQgPgVgagYQghgggtgeIgKgHIgEgCIAAAAIAAgBIgBgGIABAAIAAgBIABAAIADABIAAAAIARAHQAiAPAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgagrgUIgJgEIgBgBIAAAAQgEgCgBgEIAAABIgBgGIABgBIABAAIAmAJIALAEQBJApAqA6QAyBFgKBDQgLBGhHAoQgmAVgwAIgAAfhpQAAAQgNARQgSAWgfACIAHAHQAdAZAOAVIAOgCQAfgIAPgdIAIgSIgMgRQgSgagagXIAAANg");
	this.shape_27.setTransform(233.4,136);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2,p:{regY:-22.3,scaleX:1,scaleY:1,skewX:0,skewY:0,x:226.5,y:120,startPosition:1}}]}).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1.11,rotation:0,skewX:-3.1,x:226.8,y:120,startPosition:1,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_2,p:{regY:-22.1,scaleX:0.999,scaleY:1.045,skewX:-14.7,skewY:-9.9,x:227,y:119.8,startPosition:11}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.999,scaleY:0.999,rotation:-8.9,skewX:0,x:227,y:119.2,startPosition:9,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.999,scaleY:0.999,rotation:-15.8,skewX:0,x:227.8,y:118.3,startPosition:9,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-8.1,skewX:0,x:227.4,y:118.9,startPosition:9,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-1.2,skewX:0,x:226.5,y:120.4,startPosition:9,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-3.3,skewX:0,x:226,y:121,startPosition:10,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-5.1,skewX:0,x:225.8,y:121.5,startPosition:11,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-6.3,skewX:0,x:225.6,y:121.9,startPosition:13,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-5.3,skewX:0,x:225.8,y:121.2,startPosition:14,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-4.1,skewX:0,x:226.1,y:121.5,startPosition:13,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-2,skewX:0,x:226,y:121.4,startPosition:12,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-0.5,skewX:0,x:226.2,y:120.9,startPosition:10,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-5.7,skewX:0,x:226.5,y:124.2,startPosition:9,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-16,skewX:0,x:226.3,y:127.8,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-21.5,skewX:0,x:226.3,y:132.5,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.997,scaleY:0.997,rotation:1.4,skewX:0,x:224.8,y:141.9,startPosition:15,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-0.1,skewX:0,x:224.6,y:145.4,startPosition:15,regX:-12.9,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:2.8,skewX:0,x:225.1,y:142.6,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:0.997,rotation:5.8,skewX:0,x:225.8,y:136.4,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-7.5,skewX:0,x:225.8,y:130.3,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:1.2,skewX:0,x:226.1,y:125.8,startPosition:10,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.998,scaleY:1.082,rotation:0,skewX:-0.8,x:226.2,y:125.9,startPosition:12,regX:-13.1,skewY:0.7}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.6,scaleX:1,scaleY:0.955,rotation:0,skewX:6.5,x:225.7,y:126.1,startPosition:12,regX:-13.1,skewY:8.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.998,scaleY:0.998,rotation:-2.8,skewX:0,x:225.8,y:128,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.998,scaleY:0.998,rotation:3.1,skewX:0,x:224.9,y:130.4,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.997,scaleY:0.997,rotation:5.9,skewX:0,x:224.7,y:130.4,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.997,scaleY:0.997,rotation:3.9,skewX:0,x:224.3,y:130.3,startPosition:13,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-3.1,skewX:0,x:225.6,y:129.2,startPosition:13,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.947,rotation:0,skewX:9.8,x:225.1,y:124.2,startPosition:12,regX:-13.1,skewY:6.6}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:1.04,rotation:-0.5,skewX:0,x:227.3,y:120.9,startPosition:11,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.956,rotation:0,skewX:2.8,x:226.5,y:124.2,startPosition:10,regX:-13.1,skewY:0.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:1,rotation:0,skewX:1,x:226,y:127.9,startPosition:9,regX:-13.1,skewY:4}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-8.2,skewX:0,x:226.2,y:132.4,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.998,scaleY:0.998,rotation:13.1,skewX:0,x:224.7,y:142,startPosition:15,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-0.1,skewX:0,x:224.6,y:145.4,startPosition:15,regX:-12.9,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:2.8,skewX:0,x:225.1,y:142.6,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:0.997,rotation:5.8,skewX:0,x:225.8,y:136.4,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-7.5,skewX:0,x:225.8,y:130.3,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:1.2,skewX:0,x:226.1,y:125.8,startPosition:10,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.998,scaleY:1.082,rotation:0,skewX:-0.8,x:226.2,y:125.9,startPosition:12,regX:-13.1,skewY:0.7}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.6,scaleX:1,scaleY:0.955,rotation:0,skewX:6.5,x:225.7,y:126.1,startPosition:12,regX:-13.1,skewY:8.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.998,scaleY:0.998,rotation:-2.8,skewX:0,x:225.8,y:128,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.998,scaleY:0.998,rotation:3.1,skewX:0,x:224.9,y:130.4,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.997,scaleY:0.997,rotation:5.9,skewX:0,x:224.7,y:130.4,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.997,scaleY:0.997,rotation:3.9,skewX:0,x:224.3,y:130.3,startPosition:13,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-3.1,skewX:0,x:225.6,y:129.2,startPosition:13,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.947,rotation:0,skewX:9.8,x:225.1,y:124.2,startPosition:12,regX:-13.1,skewY:6.6}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:1.04,rotation:-0.5,skewX:0,x:227.3,y:120.9,startPosition:11,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.956,rotation:0,skewX:2.8,x:226.5,y:124.2,startPosition:10,regX:-13.1,skewY:0.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:1,rotation:0,skewX:1,x:226,y:127.9,startPosition:9,regX:-13.1,skewY:4}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-8.2,skewX:0,x:226.2,y:132.4,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.998,scaleY:0.998,rotation:13.1,skewX:0,x:224.7,y:142,startPosition:15,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-0.1,skewX:0,x:224.6,y:145.4,startPosition:15,regX:-12.9,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:2.8,skewX:0,x:225.1,y:142.6,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:0.997,rotation:5.8,skewX:0,x:225.8,y:136.4,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-7.5,skewX:0,x:225.8,y:130.3,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:1.2,skewX:0,x:226.1,y:125.8,startPosition:10,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.998,scaleY:1.082,rotation:0,skewX:-0.8,x:226.2,y:125.9,startPosition:12,regX:-13.1,skewY:0.7}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.6,scaleX:1,scaleY:0.955,rotation:0,skewX:6.5,x:225.7,y:126.1,startPosition:12,regX:-13.1,skewY:8.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.998,scaleY:0.998,rotation:-2.8,skewX:0,x:225.8,y:128,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.998,scaleY:0.998,rotation:3.1,skewX:0,x:224.9,y:130.4,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.997,scaleY:0.997,rotation:5.9,skewX:0,x:224.7,y:130.4,startPosition:13,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.5,scaleX:0.997,scaleY:0.997,rotation:3.9,skewX:0,x:224.3,y:130.3,startPosition:13,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-3.1,skewX:0,x:225.6,y:129.2,startPosition:13,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.947,rotation:0,skewX:9.8,x:225.1,y:124.2,startPosition:12,regX:-13.1,skewY:6.6}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:1.04,rotation:-0.5,skewX:0,x:227.3,y:120.9,startPosition:11,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.956,rotation:0,skewX:2.8,x:226.5,y:124.2,startPosition:10,regX:-13.1,skewY:0.9}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:1,rotation:0,skewX:1,x:226,y:127.9,startPosition:9,regX:-13.1,skewY:4}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-8.2,skewX:0,x:226.2,y:132.4,startPosition:9,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.4,scaleX:0.998,scaleY:0.998,rotation:13.1,skewX:0,x:224.7,y:142,startPosition:15,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-0.1,skewX:0,x:224.6,y:145.4,startPosition:15,regX:-12.9,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:2.8,skewX:0,x:225.1,y:142.6,startPosition:15,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:0.997,rotation:5.8,skewX:0,x:225.8,y:136.4,startPosition:30,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-7.5,skewX:0,x:225.8,y:130.3,startPosition:31,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-8.2,skewX:0,x:225.6,y:134.2,startPosition:32,regX:-13,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:0.997,rotation:2.1,skewX:0,x:225.5,y:144,startPosition:4,regX:-12.9,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:-6.9,skewX:0,x:225.2,y:147.7,startPosition:4,regX:-13,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.997,scaleY:0.997,rotation:-16.5,skewX:0,x:220.7,y:144.7,startPosition:4,regX:-12.9,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1.181,scaleY:0.908,rotation:0,skewX:9.2,x:216.3,y:137,startPosition:4,regX:-12.9,skewY:13}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:120.2,startPosition:33,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217,y:113,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1.046,scaleY:1,rotation:0,skewX:-4.4,x:217.2,y:110.8,startPosition:5,regX:-13.1,skewY:-1.5}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:112.1,startPosition:5,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.8,y:115.6,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:120.4,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.2,y:123.3,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:121.4,startPosition:5,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.6,y:119,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217,y:113,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:110.6,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:111.6,startPosition:5,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-7.7,skewX:0,x:217.1,y:113.9,startPosition:5,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-9.2,skewX:0,x:216.9,y:116.7,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-10.7,skewX:0,x:216.4,y:118.4,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.2,scaleX:0.999,scaleY:0.999,rotation:-12.5,skewX:0,x:216.4,y:120,startPosition:5,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.6,y:117.8,startPosition:34,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.7,y:115.5,startPosition:35,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.2,scaleX:1.04,scaleY:1.056,rotation:0,skewX:-9.4,x:217.2,y:111.4,startPosition:36,regX:-13.1,skewY:-4.4}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:110.1,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:111.1,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217,y:113.5,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.8,y:115.9,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.6,y:118.3,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:119.7,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:118.4,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.6,y:116,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217,y:113,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:110.6,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:108.8,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:110.6,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217,y:113,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.8,y:115.4,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.6,y:118.3,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:119.2,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:118.4,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:117.2,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:216.4,y:115.9,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:112.1,startPosition:6,regX:-13.1,skewY:0}}]},2).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.4,skewX:0,x:217.2,y:110.6,startPosition:6,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:0.5,skewX:0,x:217.1,y:111.4,startPosition:6,regX:-13.1,skewY:0}}]},9).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-21,skewX:0,x:216.6,y:116.2,startPosition:12,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:1,scaleY:1,rotation:-4.9,skewX:0,x:216,y:125.2,startPosition:10,regX:-13.1,skewY:0}}]},1).to({state:[{t:this.instance_3,p:{regY:-22.3,scaleX:0.999,scaleY:0.999,rotation:-4.4,skewX:0,x:218.1,y:127.7,startPosition:9,regX:-13.2,skewY:0}}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},2).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20,p:{x:236.4,y:129.5}}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_20,p:{x:236.2,y:130.4}}]},1).wait(7));

	// CUP_23_eye_01
	this.instance_4 = new lib.CUP_34_body("synched",0);
	this.instance_4.setTransform(137.1,177.2,1,1,0,0,0,-1.5,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({startPosition:0},0).wait(1).to({rotation:0.5,x:136.8,y:175.8},0).wait(1).to({regY:82.5,rotation:1.3,x:136.4,y:174.4},0).wait(1).to({rotation:2.6,x:136,y:171.6},0).wait(2).to({rotation:1.1,x:137,y:174.5},0).wait(1).to({rotation:-1.1,x:138.4,y:179.7},0).wait(1).to({regY:82.4,rotation:-3.2,x:140.1,y:183.3},0).wait(1).to({rotation:-5,x:142,y:186.5},0).wait(2).to({rotation:-6.2,x:143.3,y:188.7},0).wait(2).to({rotation:-5.2,x:142.2,y:186.6},0).wait(2).to({regX:-1.3,scaleX:1,scaleY:1,rotation:-4,x:141.2,y:185.2},0).wait(1).to({regX:-1.4,rotation:-1.9,x:138.9,y:182},0).wait(1).to({rotation:-0.4,x:137.5,y:179.1},0).wait(2).to({rotation:0.9,x:136.3,y:180},0).wait(1).to({rotation:2.2,x:134.7,y:181.7},0).wait(1).to({rotation:3.5,x:133.6,y:184.1},0).wait(1).to({regY:82.5,rotation:6.1,x:129.9,y:189.6},0).wait(1).to({regX:-1.5,regY:82.4,rotation:7.1,x:128.8,y:191.1},0).wait(2).to({rotation:6.1,x:130.2,y:190.1},0).wait(2).to({rotation:4.5,x:132.3,y:186.4},0).wait(1).to({regX:-1.4,scaleX:1,scaleY:1,rotation:2.5,x:134.2,y:183.6},0).wait(1).to({regX:-1.5,regY:82.5,rotation:1.2,x:135.7,y:181.2},0).wait(2).to({regY:82.4,rotation:0.7,x:136.3,y:182.1},0).wait(2).to({rotation:-0.6,x:137.4,y:184.8},0).wait(1).to({rotation:-2.7,x:139.5,y:189.8},0).wait(1).to({regX:-1.4,rotation:-4.2,x:140.4,y:194.2},0).wait(1).to({rotation:-5.7,x:141.9,y:196.5},0).wait(2).to({rotation:-4.2,x:139.9,y:194.1},0).wait(2).to({regX:-1.3,scaleX:1,scaleY:1,rotation:-3,x:139.6,y:191.3},0).wait(1).to({regX:-1.4,regY:82.3,rotation:-1.4,x:137.5,y:183.9},0).wait(1).to({regY:82.4,rotation:-0.4,y:179.1},0).wait(2).to({rotation:0.9,x:136.3,y:180},0).wait(1).to({rotation:2.2,x:134.7,y:181.7},0).wait(1).to({rotation:3.5,x:133.6,y:184.1},0).wait(1).to({regY:82.5,rotation:6.1,x:129.9,y:189.6},0).wait(1).to({regX:-1.5,regY:82.4,rotation:7.1,x:128.8,y:191.1},0).wait(2).to({rotation:6.1,x:130.2,y:190.1},0).wait(2).to({rotation:4.5,x:132.3,y:186.4},0).wait(1).to({regX:-1.4,scaleX:1,scaleY:1,rotation:2.5,x:134.2,y:183.6},0).wait(1).to({regX:-1.5,regY:82.5,rotation:1.2,x:135.7,y:181.2},0).wait(2).to({regY:82.4,rotation:0.7,x:136.3,y:182.1},0).wait(2).to({rotation:-0.6,x:137.4,y:184.8},0).wait(1).to({rotation:-2.7,x:139.5,y:189.8},0).wait(1).to({regX:-1.4,rotation:-4.2,x:140.4,y:194.2},0).wait(1).to({rotation:-5.7,x:141.9,y:196.5},0).wait(2).to({rotation:-4.2,x:139.9,y:194.1},0).wait(2).to({regX:-1.3,scaleX:1,scaleY:1,rotation:-3,x:139.6,y:191.3},0).wait(1).to({regX:-1.4,regY:82.3,rotation:-1.4,x:137.5,y:183.9},0).wait(1).to({regY:82.4,rotation:-0.4,y:179.1},0).wait(2).to({rotation:0.9,x:136.3,y:180},0).wait(1).to({rotation:2.2,x:134.7,y:181.7},0).wait(1).to({rotation:3.5,x:133.6,y:184.1},0).wait(1).to({regY:82.5,rotation:6.1,x:129.9,y:189.6},0).wait(1).to({regX:-1.5,regY:82.4,rotation:7.1,x:128.8,y:191.1},0).wait(2).to({rotation:6.1,x:130.2,y:190.1},0).wait(2).to({rotation:4.5,x:132.3,y:186.4},0).wait(1).to({regX:-1.4,scaleX:1,scaleY:1,rotation:2.5,x:134.2,y:183.6},0).wait(1).to({regX:-1.5,regY:82.5,rotation:1.2,x:135.7,y:181.2},0).wait(2).to({regY:82.4,rotation:0.7,x:136.3,y:182.1},0).wait(2).to({rotation:-0.6,x:137.4,y:184.8},0).wait(1).to({rotation:-2.7,x:139.5,y:189.8},0).wait(1).to({regX:-1.4,rotation:-4.2,x:140.4,y:194.2},0).wait(1).to({rotation:-5.7,x:141.9,y:196.5},0).wait(2).to({rotation:-4.2,x:139.9,y:194.1},0).wait(2).to({regX:-1.3,scaleX:1,scaleY:1,rotation:-3,x:139.6,y:191.3},0).wait(1).to({regX:-1.4,regY:82.3,rotation:-1.4,x:137.5,y:183.9},0).wait(1).to({regY:82.4,rotation:-0.4,y:179.1},0).wait(2).to({rotation:0.9,x:136.3,y:180},0).wait(1).to({rotation:2.2,x:134.7,y:181.7},0).wait(1).to({rotation:3.5,x:133.6,y:184.1},0).wait(1).to({regY:82.5,rotation:6.1,x:129.9,y:189.6},0).wait(1).to({regX:-1.5,regY:82.4,rotation:7.1,x:128.8,y:191.1},0).wait(2).to({rotation:6.1,x:130.2,y:190.1},0).wait(2).to({rotation:4.5,x:132.3,y:186.4},0).wait(1).to({regX:-1.4,scaleX:1,scaleY:1,rotation:2.5,x:134.2,y:183.6},0).wait(2).to({regY:82.5,rotation:1.7,x:134.6,y:188.6},0).wait(2).to({regY:82.2,rotation:1.1,x:135.3,y:199.4},0).wait(1).to({rotation:0.2,x:135.8,y:204.4},0).wait(2).to({regY:82.3,rotation:-1.6,x:133.3,y:204.6},0).wait(2).to({rotation:-3.6,x:131.1,y:199.9},0).wait(1).to({regX:-1.5,regY:82.4,scaleX:1,scaleY:1,rotation:-4.3,x:131.7,y:184.2},0).wait(1).to({x:132.3,y:177},0).wait(1).to({x:132.5,y:174.9},0).wait(2).to({y:176.1},0).wait(1).to({x:132.1,y:179.7},0).wait(1).to({x:131.7,y:184.5},0).wait(1).to({x:131.5,y:187.4},0).wait(2).to({x:131.7,y:185.5},0).wait(1).to({x:131.9,y:183.1},0).wait(1).to({x:132.3,y:177},0).wait(1).to({x:132.5,y:174.6},0).wait(2).to({y:175.6},0).wait(2).to({x:132.3,y:178},0).wait(1).to({x:132.1,y:180.7},0).wait(1).to({x:131.7,y:182.5},0).wait(1).to({y:184},0).wait(2).to({x:131.9,y:181.8},0).wait(1).to({x:132.1,y:179.4},0).wait(1).to({x:132.5,y:175.4},0).wait(1).to({y:174.1},0).wait(2).to({y:175.1},0).wait(2).to({x:132.3,y:177.5},0).wait(1).to({x:132.1,y:179.9},0).wait(1).to({x:131.9,y:182.3},0).wait(1).to({x:131.7,y:183.7},0).wait(2).to({y:182.5},0).wait(2).to({x:131.9,y:180.1},0).wait(1).to({x:132.3,y:177},0).wait(1).to({x:132.5,y:174.6},0).wait(1).to({y:172.9},0).wait(2).to({y:174.6},0).wait(2).to({x:132.3,y:177},0).wait(1).to({x:132.1,y:179.4},0).wait(1).to({x:131.9,y:182.3},0).wait(1).to({x:131.7,y:183.2},0).wait(1).to({y:182.5},0).wait(2).to({y:181.2},0).wait(1).to({y:180},0).wait(2).to({x:132.5,y:176.1},0).wait(1).to({y:174.6},0).wait(9).to({regX:-1.4,rotation:-5.4,x:133.6,y:177.1},0).wait(1).to({regX:-1.5,rotation:-5.9,x:133.7,y:182.4},0).wait(1).to({rotation:-4.8,x:131.9,y:189.9},0).wait(1).to({regX:-1.4,regY:82.2,scaleX:1,scaleY:1,rotation:-4.3,x:133.6,y:191.6},0).wait(2).to({rotation:-2.3,x:133.2,y:194},0).wait(2).to({regX:-1.5,regY:82.5,scaleX:1,scaleY:1,rotation:-1.1,x:133.8,y:194.7},0).wait(1).to({regX:-1.4,regY:82.4,rotation:-1.6,x:138.2,y:185.4},0).wait(1).to({rotation:-0.3,x:137.2,y:180.3},0).wait(1).to({rotation:0,x:137.3,y:176.3},0).wait(2).to({x:137.1,y:176.4},0).wait(1).to({y:177.2},0).wait(7));

	// CUP_23_eye_02
	this.instance_5 = new lib.CUP_34_arm_02("single",1);
	this.instance_5.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({scaleY:1.11,skewX:-3,x:226.8},0).wait(1).to({regY:-22,scaleX:1,scaleY:1.05,skewX:-14.6,skewY:-9.8,x:227,y:119.8,startPosition:11},0).to({_off:true},1).wait(176).to({regX:-13.1,regY:-22.2,scaleY:1,rotation:-2.3,skewX:0,skewY:0,x:220,y:133.2,startPosition:10,_off:false},0).wait(2).to({regX:-13,regY:-22.1,scaleX:1,scaleY:1,rotation:-1.1,x:221.9,y:135.5,startPosition:11},0).wait(1).to({regY:-22.2,scaleY:1.11,rotation:-1.6,x:225.8,y:125.4,startPosition:1},0).wait(1).to({scaleY:1,rotation:-0.3,x:226.1,y:122.3},0).wait(1).to({rotation:0,x:226.7,y:119.1},0).wait(2).to({x:226.5,y:119.2},0).wait(1).to({y:120},0).wait(7));

	// CUP_23_body
	this.instance_6 = new lib.CUP_34_handle("synched",0);
	this.instance_6.setTransform(227.1,106.7,1,1,0,0,0,-17.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:0},0).wait(1).to({rotation:0.5,x:227.6,y:106.3},0).wait(1).to({regX:-17.5,rotation:1.3,x:227.9,y:106},0).wait(1).to({regX:-17.4,rotation:2.6,x:229,y:105.2},0).wait(2).to({rotation:1.1,x:228.2,y:105.6},0).wait(1).to({rotation:-1.1,x:226.7,y:107.1},0).wait(1).to({rotation:-3.2,x:225.8,y:107.6},0).wait(1).to({rotation:-5,x:225.2,y:108.2},0).wait(2).to({rotation:-6.2,x:224.7,y:108.6},0).wait(2).to({rotation:-5.2,x:225.2,y:107.9},0).wait(2).to({regY:0.9,scaleX:1,scaleY:1,rotation:-4,x:225.7,y:108.4},0).wait(1).to({rotation:-1.9,x:226.2,y:108.2},0).wait(1).to({regY:0.8,rotation:-0.4,x:226.7,y:107.6},0).wait(2).to({rotation:0.9,x:227.4,y:110.9},0).wait(1).to({rotation:2.2,x:227.3,y:114.7},0).wait(1).to({rotation:3.5,x:227.6,y:119.3},0).wait(1).to({regX:-17.2,rotation:6.1,x:226.8,y:128.9},0).wait(1).to({regX:-17.3,rotation:7.1,x:226.9,y:132.4},0).wait(2).to({rotation:6.1,x:227.1,y:129.5},0).wait(2).to({regX:-17.2,rotation:4.5,x:227.7,y:123.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:227.1,y:117.1},0).wait(1).to({rotation:1.2,x:227.2,y:112.6},0).wait(2).to({rotation:0.7,y:112.8},0).wait(2).to({rotation:-0.6,x:226.4,y:113.1},0).wait(1).to({regY:0.9,rotation:-2.7,x:225.9,y:115},0).wait(1).to({regY:0.8,rotation:-4.2,x:224.6,y:117.1},0).wait(1).to({rotation:-5.7,x:224.1,y:117.2},0).wait(2).to({rotation:-4.2,y:117.1},0).wait(2).to({regX:-17.4,regY:0.9,scaleX:1,scaleY:1,rotation:-3,x:225.5,y:116},0).wait(1).to({regX:-17.5,rotation:-1.4,x:225.3,y:110.9},0).wait(1).to({regX:-17.4,regY:0.8,rotation:-0.4,x:226.7,y:107.6},0).wait(2).to({rotation:0.9,x:227.4,y:110.9},0).wait(1).to({rotation:2.2,x:227.3,y:114.7},0).wait(1).to({rotation:3.5,x:227.6,y:119.3},0).wait(1).to({regX:-17.2,rotation:6.1,x:226.8,y:128.9},0).wait(1).to({regX:-17.3,rotation:7.1,x:226.9,y:132.4},0).wait(2).to({rotation:6.1,x:227.1,y:129.5},0).wait(2).to({regX:-17.2,rotation:4.5,x:227.7,y:123.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:227.1,y:117.1},0).wait(1).to({rotation:1.2,x:227.2,y:112.6},0).wait(2).to({rotation:0.7,y:112.8},0).wait(2).to({rotation:-0.6,x:226.4,y:113.1},0).wait(1).to({regY:0.9,rotation:-2.7,x:225.9,y:115},0).wait(1).to({regY:0.8,rotation:-4.2,x:224.6,y:117.1},0).wait(1).to({rotation:-5.7,x:224.1,y:117.2},0).wait(2).to({rotation:-4.2,y:117.1},0).wait(2).to({regX:-17.4,regY:0.9,scaleX:1,scaleY:1,rotation:-3,x:225.5,y:116},0).wait(1).to({regX:-17.5,rotation:-1.4,x:225.3,y:110.9},0).wait(1).to({regX:-17.4,regY:0.8,rotation:-0.4,x:226.7,y:107.6},0).wait(2).to({rotation:0.9,x:227.4,y:110.9},0).wait(1).to({rotation:2.2,x:227.3,y:114.7},0).wait(1).to({rotation:3.5,x:227.6,y:119.3},0).wait(1).to({regX:-17.2,rotation:6.1,x:226.8,y:128.9},0).wait(1).to({regX:-17.3,rotation:7.1,x:226.9,y:132.4},0).wait(2).to({rotation:6.1,x:227.1,y:129.5},0).wait(2).to({regX:-17.2,rotation:4.5,x:227.7,y:123.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:227.1,y:117.1},0).wait(1).to({rotation:1.2,x:227.2,y:112.6},0).wait(2).to({rotation:0.7,y:112.8},0).wait(2).to({rotation:-0.6,x:226.4,y:113.1},0).wait(1).to({regY:0.9,rotation:-2.7,x:225.9,y:115},0).wait(1).to({regY:0.8,rotation:-4.2,x:224.6,y:117.1},0).wait(1).to({rotation:-5.7,x:224.1,y:117.2},0).wait(2).to({rotation:-4.2,y:117.1},0).wait(2).to({regX:-17.4,regY:0.9,scaleX:1,scaleY:1,rotation:-3,x:225.5,y:116},0).wait(1).to({regX:-17.5,rotation:-1.4,x:225.3,y:110.9},0).wait(1).to({regX:-17.4,regY:0.8,rotation:-0.4,x:226.7,y:107.6},0).wait(2).to({rotation:0.9,x:227.4,y:110.9},0).wait(1).to({rotation:2.2,x:227.3,y:114.7},0).wait(1).to({rotation:3.5,x:227.6,y:119.3},0).wait(1).to({regX:-17.2,rotation:6.1,x:226.8,y:128.9},0).wait(1).to({regX:-17.3,rotation:7.1,x:226.9,y:132.4},0).wait(2).to({rotation:6.1,x:227.1,y:129.5},0).wait(2).to({regX:-17.2,rotation:4.5,x:227.7,y:123.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:227.1,y:117.1},0).wait(2).to({rotation:1.7,x:226.7,y:121},0).wait(2).to({rotation:1.1,x:226.6,y:130.8},0).wait(1).to({regX:-17.4,rotation:0.2,x:226,y:134.5},0).wait(2).to({regX:-17.3,rotation:-1.6,x:221,y:131.5},0).wait(2).to({rotation:-3.6,x:216.1,y:123.8},0).wait(1).to({regX:-17.4,scaleX:1,scaleY:1,rotation:-4.3,x:216,y:106.9},0).wait(1).to({x:216.6,y:99.7},0).wait(1).to({x:216.8,y:97.5},0).wait(2).to({y:98.8},0).wait(1).to({x:216.4,y:102.3},0).wait(1).to({x:216,y:107.1},0).wait(1).to({x:215.8,y:110},0).wait(2).to({x:216,y:108.1},0).wait(1).to({x:216.2,y:105.7},0).wait(1).to({x:216.6,y:99.7},0).wait(1).to({x:216.8,y:97.3},0).wait(2).to({y:98.3},0).wait(2).to({x:216.6,y:100.7},0).wait(1).to({x:216.4,y:103.3},0).wait(1).to({x:216,y:105.1},0).wait(1).to({y:106.6},0).wait(2).to({x:216.2,y:104.5},0).wait(1).to({x:216.4,y:102.1},0).wait(1).to({x:216.8,y:98},0).wait(1).to({y:96.8},0).wait(2).to({y:97.8},0).wait(2).to({x:216.6,y:100.2},0).wait(1).to({x:216.4,y:102.6},0).wait(1).to({x:216.2,y:105},0).wait(1).to({x:216,y:106.4},0).wait(2).to({y:105.1},0).wait(2).to({x:216.2,y:102.7},0).wait(1).to({x:216.6,y:99.7},0).wait(1).to({x:216.8,y:97.3},0).wait(1).to({y:95.5},0).wait(2).to({y:97.3},0).wait(2).to({x:216.6,y:99.7},0).wait(1).to({x:216.4,y:102.1},0).wait(1).to({x:216.2,y:105},0).wait(1).to({x:216,y:105.9},0).wait(1).to({y:105.1},0).wait(2).to({y:103.9},0).wait(1).to({y:102.6},0).wait(2).to({x:216.8,y:98.8},0).wait(1).to({y:97.3},0).wait(9).to({rotation:-5.4,x:216.4,y:98.2},0).wait(1).to({rotation:-5.9,x:215.8,y:102.9},0).wait(1).to({rotation:-4.8,x:215.4,y:111.9},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3,x:217.7,y:114.4},0).wait(2).to({regX:-17.3,rotation:-2.3,x:220.1,y:119.9},0).wait(2).to({regX:-17.4,scaleX:1,scaleY:1,rotation:-1.1,x:222.2,y:122.1},0).wait(1).to({regX:-17.5,rotation:-1.6,x:225.8,y:112.1},0).wait(1).to({rotation:-0.3,x:226.5,y:109},0).wait(1).to({regX:-17.4,rotation:0,x:227.3,y:105.8},0).wait(2).to({x:227.1,y:105.9},0).wait(1).to({y:106.7},0).wait(7));

	// CUP_23_handle
	this.instance_7 = new lib.CUP_34_leg_COMP("single",0);
	this.instance_7.setTransform(163.3,185.8,1,1,0,0,180,8.5,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({startPosition:0},0).wait(1).to({regX:8.6,regY:-18.7,skewX:0.5,skewY:180.6,x:162.8,y:184.8},0).wait(1).to({regX:8.5,regY:-18.8,skewX:1.3,skewY:181.4,x:162.4,y:183.7},0).wait(1).to({regY:-18.9,skewX:2.6,skewY:182.7,x:161.8,y:181.3},0).wait(2).to({skewX:1.1,skewY:181.2,x:163,y:183.6},0).wait(1).to({regY:-18.8,skewX:-1.1,skewY:178.7,x:164.8,y:187.7},0).wait(1).to({regX:8.6,regY:-18.9,skewX:-3.2,skewY:176.6,x:166.7,y:190.4},0).wait(1).to({skewX:-5,skewY:174.8,x:168.8,y:191.9},0).wait(2).to({skewX:-6.2,skewY:173.6,x:170.1,y:193.6},0).wait(2).to({skewX:-5.2,skewY:174.6,x:169,y:191.9},0).wait(2).to({scaleX:1,scaleY:1,skewX:-4,skewY:175.8,x:167.8,y:191},0).wait(1).to({skewX:-1.9,skewY:177.9,x:165.3,y:188.8},0).wait(1).to({regX:8.5,skewX:-0.4,skewY:179.4,x:163.8,y:186.6},0).wait(2).to({regX:8.4,skewX:0.9,skewY:181,x:162.4,y:188.2},0).wait(1).to({skewX:2.2,skewY:182.3,x:160.7,y:190.5},0).wait(1).to({regY:-19,skewX:3.5,skewY:183.6,x:158.8,y:192.7},0).wait(1).to({regX:8.5,skewX:4.8,skewY:184.9,x:156.9,y:197.1},0).wait(1).to({regX:8.6,regY:-18.9,skewX:7.1,skewY:187.2,x:153.5,y:201.4},0).wait(2).to({regX:8.5,skewX:6.1,skewY:186.2,x:155.1,y:199.9},0).wait(2).to({skewX:4.5,skewY:184.6,x:157.5,y:195.6},0).wait(1).to({regX:8.4,regY:-19,scaleX:1,scaleY:1,skewX:2.5,skewY:182.6,x:159.6,y:191.8},0).wait(1).to({skewX:1.2,skewY:181.3,x:161.5,y:188.8},0).wait(2).to({skewX:0.7,skewY:180.8,x:162.1,y:189.5},0).wait(2).to({skewX:-0.6,skewY:179.2,x:163.3,y:191.5},0).wait(1).to({regX:8.3,skewX:-2.7,skewY:177.1,x:165.8,y:195.5},0).wait(1).to({regX:8.2,skewX:-4.2,skewY:175.6,x:166.8,y:199.3},0).wait(1).to({skewX:-5.7,skewY:174.1,x:168.4,y:200.9},0).wait(2).to({regY:-19.2,skewX:-4.2,skewY:175.6,x:166.2,y:199.1},0).wait(2).to({regX:8.6,regY:-19,scaleX:1,scaleY:1,skewX:-3,skewY:176.8,x:166.1,y:197.6},0).wait(1).to({regX:8.5,regY:-18.9,skewX:-3.4,skewY:176.4,x:167.1,y:190.5},0).wait(1).to({skewX:-0.4,skewY:179.4,x:163.8,y:186.6},0).wait(2).to({regX:8.4,skewX:0.9,skewY:181,x:162.4,y:188.2},0).wait(1).to({skewX:2.2,skewY:182.3,x:160.7,y:190.5},0).wait(1).to({regY:-19,skewX:3.5,skewY:183.6,x:158.8,y:192.7},0).wait(1).to({regX:8.5,skewX:4.8,skewY:184.9,x:156.9,y:197.1},0).wait(1).to({regX:8.6,regY:-18.9,skewX:7.1,skewY:187.2,x:153.5,y:201.4},0).wait(2).to({regX:8.5,skewX:6.1,skewY:186.2,x:155.1,y:199.9},0).wait(2).to({skewX:4.5,skewY:184.6,x:157.5,y:195.6},0).wait(1).to({regX:8.4,regY:-19,scaleX:1,scaleY:1,skewX:2.5,skewY:182.6,x:159.6,y:191.8},0).wait(1).to({skewX:1.2,skewY:181.3,x:161.5,y:188.8},0).wait(2).to({skewX:0.7,skewY:180.8,x:162.1,y:189.5},0).wait(2).to({skewX:-0.6,skewY:179.2,x:163.3,y:191.5},0).wait(1).to({regX:8.3,skewX:-2.7,skewY:177.1,x:165.8,y:195.5},0).wait(1).to({regX:8.2,skewX:-4.2,skewY:175.6,x:166.8,y:199.3},0).wait(1).to({skewX:-5.7,skewY:174.1,x:168.4,y:200.9},0).wait(2).to({regY:-19.2,skewX:-4.2,skewY:175.6,x:166.2,y:199.1},0).wait(2).to({regX:8.6,regY:-19,scaleX:1,scaleY:1,skewX:-3,skewY:176.8,x:166.1,y:197.6},0).wait(1).to({regX:8.5,regY:-18.9,skewX:-3.4,skewY:176.4,x:167.1,y:190.5},0).wait(1).to({skewX:-0.4,skewY:179.4,x:163.8,y:186.6},0).wait(2).to({regX:8.4,skewX:0.9,skewY:181,x:162.4,y:188.2},0).wait(1).to({skewX:2.2,skewY:182.3,x:160.7,y:190.5},0).wait(1).to({regY:-19,skewX:3.5,skewY:183.6,x:158.8,y:192.7},0).wait(1).to({regX:8.5,skewX:4.8,skewY:184.9,x:156.9,y:197.1},0).wait(1).to({regX:8.6,regY:-18.9,skewX:7.1,skewY:187.2,x:153.5,y:201.4},0).wait(2).to({regX:8.5,skewX:6.1,skewY:186.2,x:155.1,y:199.9},0).wait(2).to({skewX:4.5,skewY:184.6,x:157.5,y:195.6},0).wait(1).to({regX:8.4,regY:-19,scaleX:1,scaleY:1,skewX:2.5,skewY:182.6,x:159.6,y:191.8},0).wait(1).to({skewX:1.2,skewY:181.3,x:161.5,y:188.8},0).wait(2).to({skewX:0.7,skewY:180.8,x:162.1,y:189.5},0).wait(2).to({skewX:-0.6,skewY:179.2,x:163.3,y:191.5},0).wait(1).to({regX:8.3,skewX:-2.7,skewY:177.1,x:165.8,y:195.5},0).wait(1).to({regX:8.2,skewX:-4.2,skewY:175.6,x:166.8,y:199.3},0).wait(1).to({skewX:-5.7,skewY:174.1,x:168.4,y:200.9},0).wait(2).to({regY:-19.2,skewX:-4.2,skewY:175.6,x:166.2,y:199.1},0).wait(2).to({regX:8.6,regY:-19,scaleX:1,scaleY:1,skewX:-3,skewY:176.8,x:166.1,y:197.6},0).wait(1).to({regX:8.5,regY:-18.9,skewX:-3.4,skewY:176.4,x:167.1,y:190.5},0).wait(1).to({skewX:-0.4,skewY:179.4,x:163.8,y:186.6},0).wait(2).to({regX:8.4,skewX:0.9,skewY:181,x:162.4,y:188.2},0).wait(1).to({skewX:2.2,skewY:182.3,x:160.7,y:190.5},0).wait(1).to({regY:-19,skewX:3.5,skewY:183.6,x:158.8,y:192.7},0).wait(1).to({regX:8.5,skewX:4.8,skewY:184.9,x:156.9,y:197.1},0).wait(1).to({regX:8.6,regY:-18.9,skewX:7.1,skewY:187.2,x:153.5,y:201.4},0).wait(2).to({regX:8.5,skewX:6.1,skewY:186.2,x:155.1,y:199.9},0).wait(2).to({skewX:4.5,skewY:184.6,x:157.5,y:195.6},0).wait(1).to({regX:8.4,regY:-19,scaleX:1,scaleY:1,skewX:2.5,skewY:182.6,x:159.6,y:191.8},0).wait(2).to({skewX:1.7,skewY:181.8,x:160.1,y:196.5},0).wait(2).to({regX:8.5,regY:-18.9,skewX:1.1,skewY:181.2,x:160.9,y:207.1},0).wait(1).to({regX:8.6,skewX:0.2,skewY:180.3,x:161.4,y:211.7},0).wait(2).to({regX:8.5,regY:-19,skewX:-1.6,skewY:178.2,x:159.2,y:210.9},0).wait(2).to({regX:8.4,skewX:-3.6,skewY:176.2,x:157.4,y:205.3},0).wait(1).to({regX:8.5,regY:-18.8,scaleX:1,scaleY:1,skewX:-4.3,skewY:175.5,x:158.6,y:190.7},0).wait(1).to({x:159.2,y:183.5},0).wait(1).to({x:159.4,y:181.4},0).wait(2).to({y:182.6},0).wait(1).to({x:159,y:186.2},0).wait(1).to({x:158.6,y:191},0).wait(1).to({x:158.4,y:193.9},0).wait(2).to({x:158.6,y:192},0).wait(1).to({x:158.8,y:189.6},0).wait(1).to({x:159.2,y:183.5},0).wait(1).to({x:159.4,y:181.1},0).wait(2).to({y:182.1},0).wait(2).to({x:159.2,y:184.5},0).wait(1).to({x:159,y:187.2},0).wait(1).to({x:158.6,y:189},0).wait(1).to({y:190.5},0).wait(2).to({x:158.8,y:188.3},0).wait(1).to({x:159,y:185.9},0).wait(1).to({x:159.4,y:181.9},0).wait(1).to({y:180.6},0).wait(2).to({y:181.6},0).wait(2).to({x:159.2,y:184},0).wait(1).to({x:159,y:186.4},0).wait(1).to({x:158.8,y:188.8},0).wait(1).to({x:158.6,y:190.2},0).wait(2).to({y:189},0).wait(2).to({x:158.8,y:186.6},0).wait(1).to({x:159.2,y:183.5},0).wait(1).to({x:159.4,y:181.1},0).wait(1).to({y:179.4},0).wait(2).to({y:181.1},0).wait(2).to({x:159.2,y:183.5},0).wait(1).to({x:159,y:185.9},0).wait(1).to({x:158.8,y:188.8},0).wait(1).to({x:158.6,y:189.7},0).wait(1).to({y:189},0).wait(2).to({y:187.7},0).wait(1).to({y:186.5},0).wait(2).to({x:159.4,y:182.6},0).wait(1).to({y:181.1},0).wait(9).to({regY:-18.7,skewX:-5.4,skewY:174.4,x:160.6,y:183.2},0).wait(1).to({regX:8.4,skewX:-5.9,skewY:173.9,x:160.8,y:188.3},0).wait(1).to({skewX:-4.8,skewY:175,x:158.9,y:196.3},0).wait(1).to({regX:8.3,regY:-18.9,scaleX:1,scaleY:1,skewX:-4.3,skewY:175.5,x:160.5,y:198.1},0).wait(2).to({skewX:-2.3,skewY:177.5,x:159.8,y:201.6},0).wait(2).to({regX:8.5,regY:-18.8,scaleX:1,scaleY:1,skewX:-1.1,skewY:178.7,x:160.2,y:202.7},0).wait(1).to({regX:8.4,regY:-19,skewX:-1.6,skewY:178.2,x:164.7,y:193},0).wait(1).to({regX:8.5,regY:-18.8,skewX:-0.3,skewY:179.5,x:163.5,y:188.7},0).wait(1).to({skewX:0,skewY:180,y:184.9},0).wait(2).to({x:163.3,y:185.1},0).wait(1).to({y:185.8},0).wait(7));

	// CUP_23_leg_COMP
	this.instance_8 = new lib.CUP_34_leg_COMP("single",0);
	this.instance_8.setTransform(121.3,185.8,1,1,0,0,0,8.5,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({startPosition:0},0).wait(1).to({regX:8.4,rotation:0.5,x:120.8,y:184.3},0).wait(1).to({regX:8.5,regY:-18.9,rotation:1.3,x:120.4,y:182.6},0).wait(1).to({rotation:2.6,x:119.8,y:179.4},0).wait(2).to({rotation:1.1,x:121,y:182.7},0).wait(1).to({regY:-18.8,rotation:-1.1,x:122.8,y:188.7},0).wait(1).to({regY:-18.9,rotation:-3.2,x:124.9,y:192.8},0).wait(1).to({regY:-18.7,rotation:-5,x:127,y:195.9},0).wait(2).to({regY:-18.9,rotation:-6.2,x:128.5,y:198.3},0).wait(2).to({regY:-18.8,rotation:-5.2,x:127.3,y:195.9},0).wait(2).to({regY:-18.9,scaleX:1,scaleY:1,rotation:-4,x:126,y:194.1},0).wait(1).to({regY:-18.8,rotation:-1.9,x:123.5,y:190.5},0).wait(1).to({rotation:-0.4,x:121.9,y:187.1},0).wait(2).to({regX:8.6,regY:-18.9,rotation:0.9,x:120.5,y:187.5},0).wait(1).to({rotation:2.2,x:118.8,y:188.9},0).wait(1).to({rotation:3.5,x:117,y:190.2},0).wait(1).to({regX:8.7,rotation:4.8,x:115.2,y:193.7},0).wait(1).to({rotation:7.1,x:112,y:196.1},0).wait(2).to({rotation:6.1,x:113.5,y:195.4},0).wait(2).to({rotation:4.5,x:115.7,y:192.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:117.8,y:190},0).wait(1).to({rotation:1.2,x:119.6,y:188},0).wait(2).to({regY:-19,rotation:0.7,x:120.1,y:189},0).wait(2).to({regY:-18.9,rotation:-0.6,x:121.4,y:192.2},0).wait(1).to({regY:-19,rotation:-2.7,x:123.8,y:197.6},0).wait(1).to({rotation:-4.2,x:124.8,y:202.5},0).wait(1).to({regY:-18.9,rotation:-5.7,x:126.6,y:205.2},0).wait(2).to({x:126.3,y:203.1},0).wait(2).to({regX:8.6,scaleX:1,scaleY:1,rotation:-4.2,x:126,y:200.6},0).wait(1).to({rotation:-3.4,x:125.3,y:193.2},0).wait(1).to({regX:8.5,regY:-18.8,rotation:-0.4,x:121.9,y:187.1},0).wait(2).to({regX:8.6,regY:-18.9,rotation:0.9,x:120.5,y:187.5},0).wait(1).to({rotation:2.2,x:118.8,y:188.9},0).wait(1).to({rotation:3.5,x:117,y:190.2},0).wait(1).to({regX:8.7,rotation:4.8,x:115.2,y:193.7},0).wait(1).to({rotation:7.1,x:112,y:196.1},0).wait(2).to({rotation:6.1,x:113.5,y:195.4},0).wait(2).to({rotation:4.5,x:115.7,y:192.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:117.8,y:190},0).wait(1).to({rotation:1.2,x:119.6,y:188},0).wait(2).to({regY:-19,rotation:0.7,x:120.1,y:189},0).wait(2).to({regY:-18.9,rotation:-0.6,x:121.4,y:192.2},0).wait(1).to({regY:-19,rotation:-2.7,x:123.8,y:197.6},0).wait(1).to({rotation:-4.2,x:124.8,y:202.5},0).wait(1).to({regY:-18.9,rotation:-5.7,x:126.6,y:205.2},0).wait(2).to({x:126.3,y:203.1},0).wait(2).to({regX:8.6,scaleX:1,scaleY:1,rotation:-4.2,x:126,y:200.6},0).wait(1).to({rotation:-3.4,x:125.3,y:193.2},0).wait(1).to({regX:8.5,regY:-18.8,rotation:-0.4,x:121.9,y:187.1},0).wait(2).to({regX:8.6,regY:-18.9,rotation:0.9,x:120.5,y:187.5},0).wait(1).to({rotation:2.2,x:118.8,y:188.9},0).wait(1).to({rotation:3.5,x:117,y:190.2},0).wait(1).to({regX:8.7,rotation:4.8,x:115.2,y:193.7},0).wait(1).to({rotation:7.1,x:112,y:196.1},0).wait(2).to({rotation:6.1,x:113.5,y:195.4},0).wait(2).to({rotation:4.5,x:115.7,y:192.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:117.8,y:190},0).wait(1).to({rotation:1.2,x:119.6,y:188},0).wait(2).to({regY:-19,rotation:0.7,x:120.1,y:189},0).wait(2).to({regY:-18.9,rotation:-0.6,x:121.4,y:192.2},0).wait(1).to({regY:-19,rotation:-2.7,x:123.8,y:197.6},0).wait(1).to({rotation:-4.2,x:124.8,y:202.5},0).wait(1).to({regY:-18.9,rotation:-5.7,x:126.6,y:205.2},0).wait(2).to({x:126.3,y:203.1},0).wait(2).to({regX:8.6,scaleX:1,scaleY:1,rotation:-4.2,x:126,y:200.6},0).wait(1).to({rotation:-3.4,x:125.3,y:193.2},0).wait(1).to({regX:8.5,regY:-18.8,rotation:-0.4,x:121.9,y:187.1},0).wait(2).to({regX:8.6,regY:-18.9,rotation:0.9,x:120.5,y:187.5},0).wait(1).to({rotation:2.2,x:118.8,y:188.9},0).wait(1).to({rotation:3.5,x:117,y:190.2},0).wait(1).to({regX:8.7,rotation:4.8,x:115.2,y:193.7},0).wait(1).to({rotation:7.1,x:112,y:196.1},0).wait(2).to({rotation:6.1,x:113.5,y:195.4},0).wait(2).to({rotation:4.5,x:115.7,y:192.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:2.5,x:117.8,y:190},0).wait(2).to({rotation:1.7,x:118.3,y:195.3},0).wait(2).to({regY:-19,rotation:1.1,x:119.1,y:206.2},0).wait(1).to({regX:8.6,regY:-18.9,rotation:0.2,x:119.6,y:211.6},0).wait(2).to({rotation:-1.6,x:117.3,y:212.3},0).wait(2).to({regX:8.7,regY:-19,rotation:-3.6,x:115.5,y:208.1},0).wait(1).to({regX:8.5,regY:-18.8,scaleX:1,scaleY:1,rotation:-4.3,x:116.7,y:194.1},0).wait(1).to({x:117.3,y:186.9},0).wait(1).to({x:117.5,y:184.7},0).wait(2).to({y:186},0).wait(1).to({x:117.1,y:189.5},0).wait(1).to({x:116.7,y:194.3},0).wait(1).to({x:116.5,y:197.2},0).wait(2).to({x:116.7,y:195.3},0).wait(1).to({x:116.9,y:192.9},0).wait(1).to({x:117.3,y:186.9},0).wait(1).to({x:117.5,y:184.5},0).wait(2).to({y:185.5},0).wait(2).to({x:117.3,y:187.9},0).wait(1).to({x:117.1,y:190.5},0).wait(1).to({x:116.7,y:192.3},0).wait(1).to({y:193.8},0).wait(2).to({x:116.9,y:191.7},0).wait(1).to({x:117.1,y:189.3},0).wait(1).to({x:117.5,y:185.2},0).wait(1).to({y:184},0).wait(2).to({y:185},0).wait(2).to({x:117.3,y:187.4},0).wait(1).to({x:117.1,y:189.8},0).wait(1).to({x:116.9,y:192.2},0).wait(1).to({x:116.7,y:193.6},0).wait(2).to({y:192.3},0).wait(2).to({x:116.9,y:189.9},0).wait(1).to({x:117.3,y:186.9},0).wait(1).to({x:117.5,y:184.5},0).wait(1).to({y:182.7},0).wait(2).to({y:184.5},0).wait(2).to({x:117.3,y:186.9},0).wait(1).to({x:117.1,y:189.3},0).wait(1).to({x:116.9,y:192.2},0).wait(1).to({x:116.7,y:193.1},0).wait(1).to({y:192.3},0).wait(2).to({y:191.1},0).wait(1).to({y:189.8},0).wait(2).to({x:117.5,y:186},0).wait(1).to({y:184.5},0).wait(9).to({regX:8.6,regY:-18.7,rotation:-5.4,x:118.8,y:187.3},0).wait(1).to({regY:-18.8,rotation:-5.9,x:119,y:192.7},0).wait(1).to({rotation:-4.8,x:117,y:199.9},0).wait(1).to({regY:-18.9,scaleX:1,scaleY:1,rotation:-4.3,x:118.6,y:201.4},0).wait(2).to({rotation:-2.3,x:117.9,y:203.5},0).wait(2).to({regY:-18.8,scaleX:1,scaleY:1,rotation:-1.1,x:118.4,y:203.6},0).wait(1).to({regY:-18.9,rotation:-1.6,x:122.8,y:194.4},0).wait(1).to({rotation:-0.3,x:121.6,y:189},0).wait(1).to({regX:8.5,regY:-18.8,rotation:0,x:121.5,y:184.9},0).wait(2).to({x:121.3,y:185.1},0).wait(1).to({y:185.8},0).wait(7));

	// CUP_23_leg_COMP
	this.instance_9 = new lib.CUP_34_arm_01("single",1);
	this.instance_9.setTransform(59.3,109,1,1,0,0,0,18.4,-23.9);

	this.instance_10 = new lib.CUP_34_arm_02copy("single",9);
	this.instance_10.setTransform(57.3,103.5,0.999,0.999,0,-5.9,174,-13.1,-22.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,regY:-23.9,skewY:0,x:59.3,y:109,scaleX:1,rotation:0,startPosition:1,regX:18.4}}]}).to({state:[{t:this.instance_9,p:{scaleY:1.031,skewX:-3.6,regY:-23.9,skewY:0,x:59.3,y:109,scaleX:1,rotation:0,startPosition:1,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:1.189,skewX:1.4,regY:-24,skewY:0.5,x:59.7,y:106.7,scaleX:1,rotation:0,startPosition:1,regX:18.4}}]},1).to({state:[{t:this.instance_10,p:{skewX:-5.9,skewY:174,x:57.3,y:103.5,regX:-13.1,regY:-22.4,scaleX:0.999,scaleY:0.999,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:-1.7,skewY:178.2,x:59.8,y:103.7,regX:-13.1,regY:-22.4,scaleX:0.999,scaleY:0.999,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:6.2,skewY:-173.7,x:59.8,y:103.6,regX:-13,regY:-22.5,scaleX:0.999,scaleY:0.999,startPosition:9}}]},2).to({state:[{t:this.instance_10,p:{skewX:6.5,skewY:-173.4,x:59.1,y:120.4,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:13.5,skewY:-166.4,x:60.2,y:126.5,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:-6.2,skewY:173.7,x:59.8,y:132.4,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-4.2,skewY:175.7,x:61.1,y:135.4,regX:-15.2,regY:-19.5,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:-9,skewY:170.9,x:61.4,y:131,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:16.2,skewY:-163.7,x:61.7,y:126.4,regX:-15.2,regY:-19.5,scaleX:0.993,scaleY:0.993,startPosition:9}}]},2).to({state:[{t:this.instance_10,p:{skewX:4.4,skewY:-175.5,x:59.1,y:120.3,regX:-15.2,regY:-19.5,scaleX:0.992,scaleY:0.992,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.6,skewY:-179.3,x:59.4,y:115.7,regX:-15.2,regY:-19.6,scaleX:0.992,scaleY:0.992,startPosition:10}}]},1).to({state:[{t:this.instance_10,p:{skewX:7.7,skewY:-165.3,x:61,y:116,regX:-15.3,regY:-19.6,scaleX:0.999,scaleY:1.061,startPosition:11}}]},2).to({state:[{t:this.instance_10,p:{skewX:1.1,skewY:-178.3,x:61,y:117.5,regX:-15.4,regY:-19.6,scaleX:0.989,scaleY:0.953,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:10.1,skewY:-162.5,x:60.6,y:120.4,regX:-15.2,regY:-19.6,scaleX:0.999,scaleY:1.073,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.4,skewY:-171.5,x:58.1,y:120.3,regX:-15.1,regY:-19.4,scaleX:0.998,scaleY:0.998,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.4,skewY:-171.5,x:58.1,y:120.3,regX:-15.1,regY:-19.4,scaleX:0.998,scaleY:0.998,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:2.2,skewY:-177.7,x:57.4,y:119.7,regX:-15.1,regY:-19.3,scaleX:0.998,scaleY:0.998,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.3,y:121.2,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:13,skewY:-161.9,x:57.2,y:122.8,regX:-15.1,regY:-19.3,scaleX:1.001,scaleY:1.03,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.5,y:121.8,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.9,skewY:-179,x:59.1,y:120.4,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{skewX:6.5,skewY:-173.4,x:58.9,y:123.4,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},2).to({state:[{t:this.instance_10,p:{skewX:13.5,skewY:-166.4,x:60,y:129.5,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:-6.2,skewY:173.7,x:59.8,y:132.4,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-1.9,skewY:178,x:60.9,y:138.5,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-4.2,skewY:175.7,x:61.2,y:133.9,regX:-15.2,regY:-19.5,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:-9,skewY:170.9,x:61.4,y:131,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:16.2,skewY:-163.7,x:60.5,y:121.8,regX:-15.2,regY:-19.5,scaleX:0.993,scaleY:0.993,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:4.4,skewY:-175.5,x:59.5,y:114.3,regX:-15.2,regY:-19.5,scaleX:0.992,scaleY:0.992,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.6,skewY:-179.3,x:59.4,y:115.7,regX:-15.2,regY:-19.6,scaleX:0.992,scaleY:0.992,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{skewX:7.7,skewY:-165.3,x:61,y:116,regX:-15.3,regY:-19.6,scaleX:0.999,scaleY:1.061,startPosition:11}}]},1).to({state:[{t:this.instance_10,p:{skewX:1.1,skewY:-178.3,x:61,y:117.5,regX:-15.4,regY:-19.6,scaleX:0.989,scaleY:0.953,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:10.1,skewY:-162.5,x:60.6,y:120.4,regX:-15.2,regY:-19.6,scaleX:0.999,scaleY:1.073,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.4,skewY:-171.5,x:58.1,y:120.3,regX:-15.1,regY:-19.4,scaleX:0.998,scaleY:0.998,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:2.2,skewY:-177.7,x:57.4,y:119.7,regX:-15.1,regY:-19.3,scaleX:0.998,scaleY:0.998,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.3,y:121.2,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:13,skewY:-161.9,x:57.2,y:122.8,regX:-15.1,regY:-19.3,scaleX:1.001,scaleY:1.03,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.5,y:121.8,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.9,skewY:-179,x:59.1,y:120.4,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{skewX:6.5,skewY:-173.4,x:58.9,y:123.4,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},2).to({state:[{t:this.instance_10,p:{skewX:13.5,skewY:-166.4,x:60,y:129.5,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:-6.2,skewY:173.7,x:59.8,y:132.4,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-1.9,skewY:178,x:60.9,y:138.5,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-4.2,skewY:175.7,x:61.2,y:133.9,regX:-15.2,regY:-19.5,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:-9,skewY:170.9,x:61.4,y:131,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:16.2,skewY:-163.7,x:60.5,y:121.8,regX:-15.2,regY:-19.5,scaleX:0.993,scaleY:0.993,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:4.4,skewY:-175.5,x:59.5,y:114.3,regX:-15.2,regY:-19.5,scaleX:0.992,scaleY:0.992,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.6,skewY:-179.3,x:59.4,y:115.7,regX:-15.2,regY:-19.6,scaleX:0.992,scaleY:0.992,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{skewX:7.7,skewY:-165.3,x:61,y:116,regX:-15.3,regY:-19.6,scaleX:0.999,scaleY:1.061,startPosition:11}}]},1).to({state:[{t:this.instance_10,p:{skewX:1.1,skewY:-178.3,x:61,y:117.5,regX:-15.4,regY:-19.6,scaleX:0.989,scaleY:0.953,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:10.1,skewY:-162.5,x:60.6,y:120.4,regX:-15.2,regY:-19.6,scaleX:0.999,scaleY:1.073,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.4,skewY:-171.5,x:58.1,y:120.3,regX:-15.1,regY:-19.4,scaleX:0.998,scaleY:0.998,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:2.2,skewY:-177.7,x:57.4,y:119.7,regX:-15.1,regY:-19.3,scaleX:0.998,scaleY:0.998,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.3,y:121.2,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:13,skewY:-161.9,x:57.2,y:122.8,regX:-15.1,regY:-19.3,scaleX:1.001,scaleY:1.03,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.5,y:121.8,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.9,skewY:-179,x:59.1,y:120.4,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{skewX:6.5,skewY:-173.4,x:58.9,y:123.4,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},2).to({state:[{t:this.instance_10,p:{skewX:13.5,skewY:-166.4,x:60,y:129.5,regX:-15.1,regY:-19.3,scaleX:0.996,scaleY:0.996,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:-6.2,skewY:173.7,x:59.8,y:132.4,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-1.9,skewY:178,x:60.9,y:138.5,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},1).to({state:[{t:this.instance_10,p:{skewX:-4.2,skewY:175.7,x:61.2,y:133.9,regX:-15.2,regY:-19.5,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:-9,skewY:170.9,x:61.4,y:131,regX:-15.2,regY:-19.4,scaleX:0.994,scaleY:0.994,startPosition:15}}]},2).to({state:[{t:this.instance_10,p:{skewX:16.2,skewY:-163.7,x:60.5,y:121.8,regX:-15.2,regY:-19.5,scaleX:0.993,scaleY:0.993,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:4.4,skewY:-175.5,x:59.5,y:114.3,regX:-15.2,regY:-19.5,scaleX:0.992,scaleY:0.992,startPosition:9}}]},1).to({state:[{t:this.instance_10,p:{skewX:0.6,skewY:-179.3,x:59.4,y:115.7,regX:-15.2,regY:-19.6,scaleX:0.992,scaleY:0.992,startPosition:10}}]},2).to({state:[{t:this.instance_10,p:{skewX:7.7,skewY:-165.3,x:61,y:116,regX:-15.3,regY:-19.6,scaleX:0.999,scaleY:1.061,startPosition:11}}]},1).to({state:[{t:this.instance_10,p:{skewX:1.1,skewY:-178.3,x:61,y:117.5,regX:-15.4,regY:-19.6,scaleX:0.989,scaleY:0.953,startPosition:12}}]},1).to({state:[{t:this.instance_10,p:{skewX:10.1,skewY:-162.5,x:60.6,y:120.4,regX:-15.2,regY:-19.6,scaleX:0.999,scaleY:1.073,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:8.4,skewY:-171.5,x:58.1,y:120.3,regX:-15.1,regY:-19.4,scaleX:0.998,scaleY:0.998,startPosition:13}}]},1).to({state:[{t:this.instance_10,p:{skewX:2.2,skewY:-177.7,x:57.4,y:119.7,regX:-15.1,regY:-19.3,scaleX:0.998,scaleY:0.998,startPosition:13}}]},2).to({state:[{t:this.instance_10,p:{skewX:8.2,skewY:-171.7,x:57.3,y:121.2,regX:-15.1,regY:-19.3,scaleX:0.997,scaleY:0.997,startPosition:32}}]},2).to({state:[{t:this.instance_10,p:{skewX:13,skewY:-161.9,x:57.2,y:122.8,regX:-15.1,regY:-19.3,scaleX:1.001,scaleY:1.03,startPosition:33}}]},1).to({state:[{t:this.instance_10,p:{skewX:20.5,skewY:-162.6,x:49.2,y:143.1,regX:-10.6,regY:-3.8,scaleX:1,scaleY:1.028,startPosition:31}}]},2).to({state:[{t:this.instance_10,p:{skewX:2.4,skewY:-177.5,x:57.4,y:136.6,regX:-15.1,regY:-19.4,scaleX:0.997,scaleY:0.997,startPosition:31}}]},2).to({state:[{t:this.instance_10,p:{skewX:-2.4,skewY:177.5,x:57.1,y:142.6,regX:-15.1,regY:-19.5,scaleX:0.997,scaleY:0.997,startPosition:31}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:55.7,y:144.2,scaleX:0.999,rotation:1.2,startPosition:4,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:1.2,regY:-24,skewY:-10.7,x:53.5,y:143.8,scaleX:1.121,rotation:0,startPosition:4,regX:18.6}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:122.4,scaleX:0.999,rotation:1.2,startPosition:7,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.5,y:115.2,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:1.2,regY:-24.1,skewY:-0.8,x:49.9,y:112.8,scaleX:1.043,rotation:0,startPosition:5,regX:18.6}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:114.3,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.3,y:117.9,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:122.7,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.7,y:125.6,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:123.7,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.1,y:121.3,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.5,y:115.2,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:112.8,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:113.8,scaleX:0.999,rotation:1.2,startPosition:5,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.5,y:116.2,scaleX:0.999,rotation:4.5,startPosition:5,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.3,y:118.9,scaleX:0.999,rotation:6.7,startPosition:5,regX:18.5}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:120.7,scaleX:0.999,rotation:7.4,startPosition:5,regX:18.5}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.9,skewY:0,x:48.9,y:122.1,scaleX:0.999,rotation:9,startPosition:5,regX:18.5}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.1,y:120,scaleX:0.999,rotation:1.2,startPosition:8,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.3,y:117.6,scaleX:0.999,rotation:1.2,startPosition:9,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:113.6,scaleX:0.999,rotation:1.2,startPosition:10,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:112.3,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:113.3,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.5,y:115.7,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.3,y:118.1,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.1,y:120.5,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:121.9,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:120.7,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.1,y:118.3,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.5,y:115.2,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:112.8,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:111.1,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:112.8,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.5,y:115.2,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.3,y:117.6,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.1,y:120.5,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:121.4,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:120.7,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:119.4,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:48.9,y:118.2,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:114.3,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:49.7,y:112.8,scaleX:0.999,rotation:1.2,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.9,skewY:0,x:49.6,y:116.8,scaleX:0.999,rotation:2.7,startPosition:6,regX:18.5}}]},9).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:-4.1,regY:-23.8,skewY:-14.8,x:49.2,y:123,scaleX:1.017,rotation:0,startPosition:6,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.999,skewX:0,regY:-23.8,skewY:0,x:46.5,y:128.7,scaleX:0.999,rotation:-14.2,startPosition:7,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.998,skewX:0,regY:-24,skewY:0,x:50.7,y:129.8,scaleX:0.998,rotation:-15,startPosition:0,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:0.997,skewX:0,regY:-24,skewY:0,x:52.6,y:129.5,scaleX:0.997,rotation:-29.8,startPosition:0,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:1.23,skewX:-5.6,regY:-23.8,skewY:-7.9,x:54.7,y:128.3,scaleX:0.999,rotation:0,startPosition:1,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:1.058,skewX:0,regY:-23.9,skewY:0,x:58.4,y:119.6,scaleX:1,rotation:-1.7,startPosition:1,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,regY:-23.9,skewY:0,x:58.9,y:112.7,scaleX:1,rotation:-0.4,startPosition:1,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,regY:-23.9,skewY:0,x:59.5,y:108.1,scaleX:1,rotation:0,startPosition:1,regX:18.4}}]},1).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,regY:-23.9,skewY:0,x:59.3,y:108.2,scaleX:1,rotation:0,startPosition:1,regX:18.4}}]},2).to({state:[{t:this.instance_9,p:{scaleY:1,skewX:0,regY:-23.9,skewY:0,x:59.3,y:109,scaleX:1,rotation:0,startPosition:1,regX:18.4}}]},1).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,-0.9,245.3,231.9);


(lib.Cup_LeftRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// audio
	this.instance = new lib.CupHeadclipLR("synched",28);
	this.instance.setTransform(158,102.6,0.999,0.999,1,0,0,137.9,68.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({startPosition:28,_off:false},0).wait(1).to({regX:138,regY:69,scaleX:1,scaleY:1,rotation:-3.1,x:149.8,y:105.2,startPosition:29},0).wait(1).to({rotation:-4.1,x:148.1,y:105.9,startPosition:30},0).wait(7).to({rotation:-5.1,x:144.9,y:105.3,startPosition:37},0).wait(2).to({regY:69.1,scaleX:0.94,scaleY:0.94,rotation:-1.3,x:154.5,y:107.7,startPosition:39},0).to({_off:true},2).wait(105));

	// Layer 19
	this.instance_1 = new lib.CupHeadclipLR("synched",0);
	this.instance_1.setTransform(138.1,68.9,1,1,0,0,0,138,69);

	this.instance_2 = new lib.CUP_34DOWN_arm_01("single",4);
	this.instance_2.setTransform(242.1,153.8,0.999,0.999,1,0,0,-15,-20);

	this.instance_3 = new lib.CUP_FRONTDOWN_body("synched",0);
	this.instance_3.setTransform(154.5,209.4,0.938,0.938,-1.4,0,0,1.4,83.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{rotation:0,x:138.1,y:68.9,startPosition:0,regX:138,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_1,p:{rotation:-1.9,x:136,y:75.6,startPosition:2,regX:138,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-6,x:134.9,y:87.1,startPosition:3,regX:138.1,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-7.2,x:134.3,y:89.9,startPosition:4,regX:138.1,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-7.5,x:133.7,y:91.9,startPosition:6,regX:138.1,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-5.7,x:137.1,y:91.2,startPosition:8,regX:138,scaleX:0.999,scaleY:0.999,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:10.9,x:156.2,y:60.7,startPosition:10,regX:138,scaleX:0.998,scaleY:0.998,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:12.7,x:159.9,y:54.1,startPosition:11,regX:138,scaleX:0.998,scaleY:0.998,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:13.7,x:161.5,y:56.8,startPosition:13,regX:138,scaleX:0.998,scaleY:0.998,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:16.3,x:167.7,y:80.4,startPosition:14,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:16.3,x:168.2,y:82.2,startPosition:15,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:16.3,x:170.8,y:78.5,startPosition:17,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:16.3,x:172.1,y:77,startPosition:18,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:16.3,x:172.4,y:81.2,startPosition:19,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:16.3,x:173.5,y:80.2,startPosition:21,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:11.7,x:166.6,y:83.7,startPosition:26,regX:138,scaleX:0.998,scaleY:0.998,regY:68.9,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_2,p:{regX:-15,regY:-20,scaleX:0.999,scaleY:0.999,rotation:1,skewX:0,skewY:0,x:242.1,y:153.8,startPosition:4}}]},2).to({state:[{t:this.instance_2,p:{regX:-14.9,regY:-20.1,scaleX:1.007,scaleY:0.935,rotation:0,skewX:2.7,skewY:4.7,x:237.7,y:149.8,startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{regX:-15,regY:-20,scaleX:0.999,scaleY:0.999,rotation:-5.7,skewX:0,skewY:0,x:236.6,y:149,startPosition:1}}]},1).to({state:[{t:this.instance_2,p:{regX:-15,regY:-20,scaleX:0.999,scaleY:0.999,rotation:-1.2,skewX:0,skewY:0,x:234.2,y:146.7,startPosition:1}}]},7).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:135.8,y:104.9,startPosition:41,regX:138,scaleX:0.968,scaleY:0.968,regY:69,skewX:0.3,skewY:-179.6}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:101.1,y:77,startPosition:42,regX:138,scaleX:0.968,scaleY:0.968,regY:69,skewX:-4.9,skewY:175}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:97.1,y:71.9,startPosition:43,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:96.2,y:75.4,startPosition:46,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},3).to({state:[{t:this.instance_1,p:{rotation:0,x:95.8,y:76.6,startPosition:47,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.8,y:76,startPosition:49,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:96.2,y:75.4,startPosition:60,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},11).to({state:[{t:this.instance_1,p:{rotation:0,x:94.3,y:76.8,startPosition:61,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:92.4,y:78.3,startPosition:62,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:90.6,y:79.8,startPosition:63,regX:137.9,scaleX:0.967,scaleY:0.967,regY:69.1,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:92.1,y:77.3,startPosition:64,regX:137.9,scaleX:0.967,scaleY:0.967,regY:69.2,skewX:-4.9,skewY:175}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:93.2,y:75.3,startPosition:65,regX:138,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-3.9,skewY:176}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:94.3,y:73.9,startPosition:66,regX:137.9,scaleX:0.966,scaleY:0.966,regY:69.2,skewX:-2.9,skewY:177}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95,y:72.7,startPosition:67,regX:137.9,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-2.4,skewY:177.5}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.3,y:72,startPosition:68,regX:137.9,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.5,y:71.7,startPosition:69,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:97.4,y:74.1,startPosition:70,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-0.2,skewY:179.7}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:98.9,y:76.1,startPosition:71,regX:138.1,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:1,skewY:-178.9}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:100.3,y:77.5,startPosition:72,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:2.1,skewY:-177.8}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:101.3,y:78.9,startPosition:73,regX:138,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:3,skewY:-176.9}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:102.1,y:79.8,startPosition:74,regX:138,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:3.8,skewY:-176.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:102.5,y:80.2,startPosition:75,regX:138.1,scaleX:0.966,scaleY:0.966,regY:69,skewX:4,skewY:-175.9}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:102.8,y:80.4,startPosition:76,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:4.3,skewY:-175.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:100.8,y:78.2,startPosition:77,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:2.5,skewY:-177.4}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:99.1,y:76.2,startPosition:78,regX:138.1,scaleX:0.966,scaleY:0.966,regY:69,skewX:1.1,skewY:-178.8}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:97.9,y:74.7,startPosition:79,regX:137.9,scaleX:0.966,scaleY:0.966,regY:69,skewX:0,skewY:-179.9}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:96.8,y:73.4,startPosition:80,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-0.7,skewY:179.2}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:96.1,y:72.6,startPosition:81,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-1.2,skewY:178.7}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.6,y:72,startPosition:82,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-1.7,skewY:178.2}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.5,y:71.7,startPosition:83,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:94.3,y:73.9,startPosition:84,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-2.9,skewY:177}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:93.2,y:75.8,startPosition:85,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-3.7,skewY:176.2}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:92.3,y:77.3,startPosition:86,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-4.5,skewY:175.4}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:91.7,y:78.3,startPosition:87,regX:138,scaleX:0.967,scaleY:0.967,regY:69,skewX:-5.2,skewY:174.7}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:91.2,y:79.2,startPosition:88,regX:138.1,scaleX:0.967,scaleY:0.967,regY:69,skewX:-5.5,skewY:174.4}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:90.9,y:79.8,startPosition:89,regX:138.1,scaleX:0.967,scaleY:0.967,regY:69.1,skewX:-5.7,skewY:174.2}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:90.8,y:79.9,startPosition:90,regX:138,scaleX:0.967,scaleY:0.967,regY:69.1,skewX:-5.9,skewY:174}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:92,y:77.8,startPosition:91,regX:138,scaleX:0.967,scaleY:0.967,regY:69.2,skewX:-4.7,skewY:175.2}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:93.1,y:76,startPosition:92,regX:137.9,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-3.9,skewY:176}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:93.9,y:74.5,startPosition:93,regX:138.1,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-3.2,skewY:176.7}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:94.6,y:73.4,startPosition:94,regX:138,scaleX:0.966,scaleY:0.966,regY:69.2,skewX:-2.5,skewY:177.4}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.1,y:72.5,startPosition:95,regX:138,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-2.2,skewY:177.7}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.4,y:72,startPosition:96,regX:137.9,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:95.5,y:71.7,startPosition:97,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:97.6,y:74.1,startPosition:98,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:0,skewY:180}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:99.3,y:76.1,startPosition:99,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:1.3,skewY:-178.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:100.6,y:77.8,startPosition:100,regX:138,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:101.8,y:79.1,startPosition:101,regX:138,scaleX:0.966,scaleY:0.966,regY:69.1,skewX:3.8,skewY:-176.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:102.6,y:79.9,startPosition:102,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:4.3,skewY:-175.6}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:103.1,y:80.4,startPosition:103,regX:138,scaleX:0.966,scaleY:0.966,regY:69,skewX:4.8,skewY:-175.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:103.2,y:80.6,startPosition:104,regX:138.1,scaleX:0.966,scaleY:0.966,regY:69,skewX:5.1,skewY:-174.8}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:103.7,y:88.2,startPosition:108,regX:138.1,scaleX:0.966,scaleY:0.966,regY:69,skewX:6.6,skewY:-173.3}}]},4).to({state:[{t:this.instance_1,p:{rotation:0,x:100.5,y:109.5,startPosition:109,regX:138.2,scaleX:0.939,scaleY:0.939,regY:69,skewX:10.8,skewY:-169.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:101.6,y:113.9,startPosition:110,regX:138.1,scaleX:0.939,scaleY:0.939,regY:69,skewX:12.8,skewY:-167.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:101.8,y:114.7,startPosition:111,regX:138.1,scaleX:0.939,scaleY:0.939,regY:69,skewX:12.8,skewY:-167.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:102.1,y:110.3,startPosition:114,regX:138.2,scaleX:0.939,scaleY:0.939,regY:69,skewX:10.8,skewY:-169.1}}]},3).to({state:[{t:this.instance_1,p:{rotation:1.3,x:128.5,y:116.6,startPosition:116,regX:138.1,scaleX:0.937,scaleY:0.937,regY:69.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-4.2,x:121.3,y:81.3,startPosition:117,regX:138,scaleX:1.076,scaleY:1.076,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-6.2,x:112.3,y:53,startPosition:118,regX:138,scaleX:1.148,scaleY:1.148,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-6.2,x:113.9,y:60.5,startPosition:120,regX:138,scaleX:1.135,scaleY:1.135,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-6.2,x:114.1,y:62.6,startPosition:121,regX:138,scaleX:1.135,scaleY:1.135,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-4.2,x:115.9,y:68.6,startPosition:125,regX:137.9,scaleX:1.128,scaleY:1.128,regY:69,skewX:0,skewY:0}}]},4).to({state:[{t:this.instance_1,p:{rotation:-2.4,x:117.1,y:74.3,startPosition:127,regX:137.9,scaleX:1.128,scaleY:1.128,regY:68.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-2.4,x:118.5,y:83.9,startPosition:128,regX:138,scaleX:1.114,scaleY:1.114,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-0.6,x:122.4,y:92.6,startPosition:129,regX:138,scaleX:1.09,scaleY:1.09,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:-0.6,x:125,y:100.4,startPosition:131,regX:138.1,scaleX:1.069,scaleY:1.069,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-0.4,x:126.7,y:96.4,startPosition:133,regX:138,scaleX:1.053,scaleY:1.053,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-0.4,x:130.8,y:90.4,startPosition:135,regX:138.1,scaleX:1.025,scaleY:1.025,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-1.2,x:136.5,y:77.1,startPosition:136,regX:138,scaleX:1,scaleY:1,regY:68.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:138.3,y:66.3,startPosition:137,regX:138,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:138.5,y:64.2,startPosition:138,regX:138,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:138.1,y:67.5,startPosition:140,regX:138,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:0,x:138.1,y:68.9,startPosition:141,regX:138,scaleX:1,scaleY:1,regY:69,skewX:0,skewY:0}}]},1).wait(5));

	// CUP_23_brow_01
	this.instance_4 = new lib.CUP_FRONT_leg_COMP2("synched",0);
	this.instance_4.setTransform(147.2,216.9,0.938,0.938,0,0.3,-179.6,8.4,-18.9);

	this.instance_5 = new lib.CUP_34DOWN_arm_01("single",5);
	this.instance_5.setTransform(13.7,138.8,0.939,0.939,0,10.8,-169.1,-15,-20);

	this.instance_6 = new lib.CUP_FRONTDOWN_body("synched",0);
	this.instance_6.setTransform(123.4,218.2,0.937,0.937,1.3,0,0,1.3,83.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},39).to({state:[]},2).to({state:[{t:this.instance_5,p:{regY:-20,scaleX:0.939,scaleY:0.939,skewX:10.8,skewY:-169.1,x:13.7,y:138.8,startPosition:5}}]},68).to({state:[{t:this.instance_5,p:{regY:-20.1,scaleX:0.944,scaleY:0.916,skewX:12.4,skewY:-172.8,x:9.7,y:145,startPosition:3}}]},1).to({state:[{t:this.instance_5,p:{regY:-20,scaleX:0.939,scaleY:0.939,skewX:12.8,skewY:-167.1,x:10,y:143.8,startPosition:3}}]},1).to({state:[{t:this.instance_5,p:{regY:-20.1,scaleX:0.945,scaleY:0.939,skewX:10.8,skewY:-175.5,x:11.3,y:144.3,startPosition:3}}]},3).to({state:[{t:this.instance_6}]},2).to({state:[]},1).wait(29));

	// CUP_23_eye_02
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQALgQAAgQIgBgNQAaAXATAaIAMAPIgJASQgOAcggAKIgMADQgOgXgegZg");
	this.shape.setTransform(236.2,130.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#758A51").s().p("AgbBIIATgKQASgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgEAAgCQAAgMgFgOIABAAQAlAAAWgcQAIgLAEgKQAUApgGArQgKA+g+AiQgkAUguAIgAglg2QgggYgigPIgQgGIgBAAIAAgFQAAgZAQgVQAQgVAbgHIABABIAIAEQAsAUAfAaIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_1.setTransform(232.7,135.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgrCvQAugIAlgUQA+giAKg+QAGgrgUgpQgEAKgIALQgXAdgkAAIgCAAQAGANAAAMQAAACgDAEIgFAEIAAAAIgBAAIgBAAIgJgRQgJALgSAMIgTAKIABgVIANgHIgBAAIAXgUQgPgWgagYQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIAAAAIARAHQAiAOAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgZgrgVIgJgEIgBgBIAAAAQgEgBgBgEIAAAAIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBHhHAnQgoAXg1AIgAAfhqQAAARgNAQQgSAXgfACIAHAGQAdAaAOAVIAOgDQAfgIAPgdIAIgRIgMgSQgSgagagWIAAAMg");
	this.shape_2.setTransform(233.4,136.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1D1F26").s().p("AgzARIgIgHQAigDAQgZQAKgTgBgTIAAgOQAaAZAUAdIAOARIgIAVQgMAhgeANIgMADQgQgaghgcg");
	this.shape_3.setTransform(236.7,135.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#758A51").s().p("AgRBPIARgLQARgOAJgNIAKATIABAAIABAAIAAAAIAEgFQADgEAAgCQgBgOgHgPIACgBQAkgBAUghQAHgOAEgLQAXAvgDAxQgFBHg7AqQgmAagzAKgAhshpIgRgHIAAAAIAAgFQgCgdANgYQAPgZAagJIABABIAJAFQAtAVAhAcIADASQABAQgBAHQgEAOgLALQgRATgWABIgCAAQgigagkgQg");
	this.shape_4.setTransform(233.3,141.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgjDIQAzgKAngaQA7gqAFhHQADgxgYgvQgDALgHAOQgUAhglABIgBABQAGAPABAOQAAACgCAEIgEAFIgBAAIgBAAIgBAAIgKgTQgIANgRAOIgSALIACgOIgOgBQAMgHALgJIAAAAIAUgYQgQgZgcgaQgkgjgvghIgLgHIgEgDIAAAAIAAgBIgBgGIAAgBIABAAIABAAIACABIABAAIARAHQAjAQAiAaIACAAQAXgBATgTQAJgLADgOQACgHgCgQIgCgSQghgcgtgVIgJgFIgBgBIgBAAQgDgBgCgFIAAABIgBgHIAAgBIABAAQAVAEASAFIAMADQBMAtAvBBQA3BNgFBNQgFBRhEAvQgqAeg7ALgAAah+QABATgMATQgPAbggADIAIAHQAeAcAQAYIAOgBQAfgNAMghIAHgVIgNgTQgVgdgcgZIACAOg");
	this.shape_5.setTransform(234.1,142.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#1D1F26").s().p("AgpAeQgKgZgQgUIAXgJQAmgPAogBQAOAWALAWQAFANAEAOQgygKgyASIABABIgGABIgEgLg");
	this.shape_6.setTransform(240.9,145.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#758A51").s().p("AALDAQAvhfgRhLIAJgEIABAAQAygSAvAOQARBUguBmgAgPhOQgggggwgbIgPgFQgDgCgSgCIgUgFIgBAAQAcgSA2gPIA5gPQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAXAVADAHQAnAaAdAfIASAUQgnADgmAOIAAABIgXAKIgNgPg");
	this.shape_7.setTransform(233.3,148.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABsDIQAuhlgRhVQgvgOgzATIAAAAIgJADQARBMgvBeIgVgCQA1hrgghTQgIgYgUgYIAAgBIgRgTQgqgrhHghQgEgBAAgDIAAgCIAUAEQARADAEABIAOAFQAwAbAgAgIAOAPIAWgKIAAgBQAmgOAogDIgTgUQgcgfgogaQAAgHgZgUQAAgBAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAIAIgCIADABQA8AlAoArQAPAPAMASIABAAQASAYALAcQAKAVAFAUIgBACQATBYgvBqgAATg7IgWAJQAPAWAJAZIAEAJIAGgBIAAgBQA0gQAyAKQgEgOgGgNQgKgYgPgWQgqABglAPg");
	this.shape_8.setTransform(234.4,148.9);

	this.instance_7 = new lib.CUP_34_arm_02copy("single",44);
	this.instance_7.setTransform(228.4,129.3,1,1.014,0,17.4,7.7,-13,-22.3);

	this.instance_8 = new lib.CUP_34_arm_02("single",44);
	this.instance_8.setTransform(230.2,132.9,0.998,0.998,2.4,0,0,-13,-22.3);

	this.instance_9 = new lib.CUP_34DOWN_body("synched",0);
	this.instance_9.setTransform(156.7,217,0.999,0.999,1,0,0,5.7,88.3);

	this.instance_10 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_10.setTransform(174.5,217.1,0.938,0.938,0,-3.9,176,8.4,-18.8);

	this.instance_11 = new lib.CUP_34_arm_02copy2("single",37);
	this.instance_11.setTransform(20.1,133.7,0.968,0.968,0,-4.9,175,-13.1,-22.3);

	this.instance_12 = new lib.CUP_34_arm_02copy2gg("single",3);
	this.instance_12.setTransform(17.7,130.8,0.967,0.967,0,-6.4,173.5,-13.1,-22.3);

	this.instance_13 = new lib.CUP_FRONT_leg_COMP2("synched",0);
	this.instance_13.setTransform(115.9,225.3,0.937,0.937,0,3.1,-176.8,8.4,-18.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B3E4E6").s().p("AABCDIgCAAQgOgDgMgLQAFgGADgHQAGgJgEgIQgXAYgOABIgCABIgBAAQgJAFgIgDQgGgDgEgFQgDgFAAgEIgFgSIgBgOQAAgZAEgZIAMAUQADAAACADQgFADgDAHQgGAJABAFIAAACIACAAQADgGAKgEIANgFIADADIAFgBQgCgEgCgIIgEgVIAAgTIAAAAIAAgDIAAgMIABgLQgBgMgFAQQgFAPABAEIgBgBIAAANIgEgIIgFgHIgQgYIgFgHQgGgZAQgQIAGgGQANgQAQgKQAVgOAXgFIACABQAIgCALAAIACAAQAMABAKAEQAKAHAKAJQAVAVAIAiQALAqACArQABAIgBAJQgBAKgEAIQgKAVgLAVIgEADIgCACIgHAFQgGADgFAAIAEgIIABgBIgCgFIAAAAIAAgBQgVAYgYACIgCAAIgEgBg");
	this.shape_9.setTransform(222.4,235.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgMCVQgPgGgIgPIgMAIQgPAIgPgEQgKgFgGgHQgEgGgDgHQgHgPgCgOQgCgJABgGQgBgHAAgIIACgRIABgJQAFgPAHgOIgUgjIABgeIAMgRQATgcAbgPIAZgOQARgIAPgDQASgEAUAEQAHACAIAFQAaARAWAqQAEAIACAKQAFAMABAQQADAkABAjQABAUgGATQgHAVgNAQIgKANIgEADIgBABIgVAOIgPAHIAAAAIgKABIgUAAIgFACIAAAAIgKABIgIgDgAgSBpQgDAGgFAHQAMALAOACIACABQACABAEgBQAYgBAVgYIAAABIAAgBIACAGIgBAAIgEAJQAFgBAGgDIAHgEIACgCIAEgDQALgWAKgVQAEgIABgKQABgJgBgIQgCgqgLgrQgIgigVgVQgKgJgKgGQgKgFgMgBIgCAAQgLAAgIACIgCAAQgXAEgVAPQgQAKgNAPIgGAGQgQARAGAZIAFAHIAQAXIAFAHIAEAJIAAgOIABABQgBgEAFgPQAFgPABAMIgBALIAAAMIAAACIAAAAIAAAUIAEAUQACAIACAFIgFAAIgDgCIgNAEQgKAEgDAGIgCAAIAAgCQgBgEAGgKQADgGAFgDQgCgDgDgBIgMgUQgEAZAAAZIABAOIAFASQAAAFADAEQAEAGAGADQAIACAJgEIABgBIACAAQAOgBAXgYQAEAIgGAJg");
	this.shape_10.setTransform(222.3,235.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#526139").s().p("ABEBZIAEgCIADgHQghg+hDgoIgIgFIgWgMIgQACIAUgmQAHgGANgEIAAgBQACAAAEgCQAEgDAmAWQAnAVAfA/IAEAIQABAXgJAVQgDAUgLADIgBgBgAhUAMQgEgDgCgJIAAgBQADABADgBIACgCIAAgDIABgJIAAgGIAKgGIAOAKIgCABIgBALIgOANQgFAFgDAAIgCgBg");
	this.shape_11.setTransform(226.3,223.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#758A51").s().p("ABAFRQgagYgcgLIgJgEIAKgwIABAAQAbiWgch5QAEgDAEgBIAAgBQAqgaAtAZQAjCggqDFIAAAAIgJAkQgLgQgPgNgAg5i4QgbgrglgmIAVgoIAdg8QAWAeADAKQAoAtAdAxIAUAhQgjADgdAUIgBABIgUANQgHgMgIgLg");
	this.shape_12.setTransform(225.1,183.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1D1F26").s().p("AggAtQgNgogTgiIAUgNQAfgVAjABQARAjANAkIANAsQgugTgpAbIAAAAQAAAAgBABQgBAAAAAAQgBAAAAABQgBAAAAAAIgGgSg");
	this.shape_13.setTransform(228.5,172);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("ABAG+IgCgFIAJgUIACABQALgDADgTQAJgVgBgYIgEgIQgfhBgogVQglgWgEADQgEADgCAAIAAAAQgOAFgHAGIgUAlIARgBIAWALIAIAFQBDArAhA+IgDAHIgFABQgxhIhGghIgFgDIgPgJIgKAGIAAAGIAAAIIgBADIgBADQgDABgDgCIgDgCQgFgEAAgIIABgNQAHgkAWgbQAKgKATgHIAJgDIAMgyIAAAAQAdiogpiDQgNgqgWgnIAAgBIgTggQgSgcgWgaIgHgTIgFgPIADgGQAkAmAcArQAIALAHAMIAUgNIAAgBQAegUAigDIgUghQgcgxgogtQgDgKgXgfIAGgLIABABQA+A9AoBGQARAaANAbIABABQAVApAOArQAMAhAIAkIAAADQAnCogtDNIgMA0IAFAIIAEAIIAAABIABACIAFAKIACAGQADAigOAeQgGAWgQAJIgLAEgAALhjIgBABQgDABgEADQAcB5gcCWIAAAAIgJAwIAHAEQAcALAaAYQAPANAMAQIAJgkIgBAAQAqjFgjigQgVgMgVAAQgXAAgVANgAgTjiIgUANQATAkANAoIAGASQAAAAABAAQAAgBAAAAQAAAAAAAAQABgBAAAAIAAAAQArgbAuATIgNgsQgNgmgRgjIgEAAQgiAAgcAUg");
	this.shape_14.setTransform(226,190.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#1D1F26").s().p("Ag3AUIgIgIQAkgEASgfQAMgXAAgYIgBgSQAcAfAUAmIAOAWIgJAaQgPAqgiAOIgMAFQgQghghglg");
	this.shape_15.setTransform(230.5,171.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#758A51").s().p("AAzA0IgNgBIgCgIIABAAQAnAAAYgrQAIgQAEgOQAXA8gGA+QgJBYhCAzIgSALgAgohAQgigiglgUIgSgKIAAAAIAAgGQgBgkAQgeQARgfAdgKIABABQAFACAEADQAvAdAiAkIABAXQABAVgCAIQgFARgMAOQgTAXgYAAIgDAAg");
	this.shape_16.setTransform(226.7,177.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAcDrIASgMQBCgyAJhZQAGg+gXg7QgEANgIARQgYAqgnABIgBAAIACAIIgcgCIABgBQgQgigcggQglgtgxgrIgKgKIgEgDIgBAAIAAgCIAAgIIAAAAIABgBIABAAIADABIAAAAIASALQAlAUAiAiIADAAQAYgBAVgXQAKgNAFgRQACgJgBgUIgBgXQgigkgvgdQgEgEgFgBIgBgCIgBAAQgEgCgBgGIAAABQgBgEAAgFIAAgBIABAAQAXAGATAHIAMAFQBOA6AvBTQA2BjgJBgQgLBlhLA6QgOALgQAJgAAgiNQAAAYgNAXQgTAhgiAEIAIAIQAfAlAQAfIAPgEQAhgPAPgoIAJgZIgNgZQgVglgcggIABASg");
	this.shape_17.setTransform(227.5,178.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#1D1F26").s().p("Ag2ASIgIgIQAjgDASgbQAMgUAAgUIAAgQQAbAbAUAhIANATIgJAWQgPAkghANIgNADQgPgcgggfg");
	this.shape_18.setTransform(230.6,162.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#758A51").s().p("Ag5DQIAIhvQAWgIAUgOQATgPAKgOIAKAUIAAABIABAAIABAAIAEgFQAEgFAAgCQgBgPgGgRIACAAQAmAAAYgkQAIgPAEgMQAWA0gGA1QgKBMhBArQguAfg+AJIgBgQgAgnhFQgigegjgRIgSgJIAAAAIgBgFQAAggAQgZQARgaAcgKIABABIAJAFQAuAZAhAgIABAUQABARgCAHQgEAPgNALQgTAUgYABIgCAAg");
	this.shape_19.setTransform(226.9,169);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AiHD0IAAAAIAAgBIACgLIAAACIgCALIAAgBgAhADeIAAgFQBAgIAsgfQBBgrAKhMQAGg1gWg0QgEAMgIAPQgYAjgmABIgCAAQAGARABAOQAAADgEAEIgEAGIgBAAIgBAAIAAgBIgKgUQgKAOgTAPQgUANgWAIIAAgIIgBgOQATgIATgPIgBAAIAYgZQgQgagcgeQgjgngwglIgKgIIgEgEIAAAAIAAAAIgBgIIABAAIAAgBIABAAIADABIAAAAIASAJQAjASAiAdIACAAQAYAAAVgUQALgLAEgPQACgIgBgQIgBgVQghgfgugZIgJgFIgBgBIAAAAQgEgCgBgFIAAABQgCgEABgEIABgBIABAAIAoAMIAMAEQBNAyAtBIQA1BWgKBSQgLBXhKAyQgyAihFAJIABgUgAAgiHQABAUgOAUQgSAdgiADIAIAIQAeAfAQAaIAOgCQAhgMAPgkIAJgWIgNgVQgTghgcgbIAAAQg");
	this.shape_20.setTransform(227.7,169.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#1D1F26").s().p("Ag0AOIgIgHQAigCATgVQALgRAAgQIgBgOQAbAXATAbIAMAQIgIASQgPAdggAKIgMAEQgPgYgfgag");
	this.shape_21.setTransform(231.8,152.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#758A51").s().p("AgHCOQAAgqgJgdIAJgFQASgMAKgLIAJARIABAAIABAAIAAAAIAFgFQADgDAAgCQgBgNgFgNIABAAQAmgBAXgdQAIgMAEgKQAVAqgGAsQgKA/g/AkQgaAOgeAJIgBgmgAgmg0QghgZgjgOIgRgHIAAAAIAAgEQAAgbAPgVQAQgVAcgIIABABIAJAEQAsAUAhAaIABARQAAAOgCAGQgFANgLAJQgTAQgXABIgCAAg");
	this.shape_22.setTransform(228.3,157.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AiADLIgDgBIgBAAIgBgBIAAgBIAEgRIABgBIAAAVgAgOCqQAegJAagPQBAgjAJg/QAGgtgVgqQgDAKgJANQgXAdglAAIgCAAQAGAOAAAMQAAACgDAEIgEAFIgBAAIgBAAIAAgBIgJgQQgKAKgTANIgIAFIgHgRIAKgHIAAAAQAGgEAQgQQgPgXgbgYQgigggvgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIABAAIAQAGQAjAPAiAZIACAAQAXgBAUgQQAKgKAFgMQACgGgBgPIgBgQQgggagtgVIgIgDIgCgBIAAAAQgEgCgBgEIAAAAIgBgGIABgBIABAAIAnAKIAMAEQBKApAsA7QA0BHgKBEQgKBIhJApQgdARgkAJIgBgUgAAghwQAAARgNAQQgTAYggACIAIAHQAdAaAPAVIAOgBQAggKAPgeIAIgSIgMgSQgTgagbgXIABANg");
	this.shape_23.setTransform(229,158.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#1D1F26").s().p("AgzAPIgIgHQAigCARgVQALgRgBgRIAAgMQAaAWATAZIANAQIgIARQgOAeggAKIgMADQgOgWgfgZg");
	this.shape_24.setTransform(236,136.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#758A51").s().p("AgeCGQAHgnABgZIARgJQARgNAKgLIAJAQIABABIABAAIAAAAIAEgFQADgEAAgCQAAgMgGgNIACAAQAkgBAWgdQAIgLAEgKQAVAogFAsQgJA9g9AkQgoAXgzAIQAEgSAFgbgAglg3QgggXgjgOIgQgHIgBABIAAgEQgBgaAPgVQAQgVAbgIIABABIAIADQAsAUAgAZIABAQQABAOgCAGQgEAMgLAJQgSARgXAAIgCAAg");
	this.shape_25.setTransform(232.5,142.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ah9DGIgBAAIAAgBIAAgBIADgRIAAAAIABgBIACgJIgBAPIgCAJIgBAFgAgvCsQAzgIAogXQA9gkAJg9QAFgsgVgoQgEAKgIALQgWAdgkABIgCAAQAGANAAAMQAAACgDAEIgEAFIAAAAIgBAAIgBgBIgJgQQgKALgRANIgRAJIAAgKIAAgKIALgIIAAAAIAWgUQgQgWgagXQgigfgugdIgKgGIgDgDIgBAAIAAgBIAAgFIAAgBIABAAIABAAIACABIABgBIAQAHQAjAOAgAXIACAAQAXAAAUgRQAJgJAEgMQACgGgBgOIgBgQQgggZgsgUIgIgDIgBgBIgBAAQgDgCgCgEIAAABIAAgGIAAgBIABAAIAnAIIALAEQBJAoAsA5QA0BDgJBDQgJBHhGApQguAbg9AIIAGgVgAAdhwQABARgNARQgRAXggACIAIAHQAdAZAOAVIAOgCQAggKAOgeIAIgRIgNgSQgTgZgagWIAAAMg");
	this.shape_26.setTransform(233.3,142.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#1D1F26").s().p("AgzAOIgIgHQAigCASgVQALgQAAgRIgBgMQAaAXATAZIAMAQIgJARQgOAdggALIgMACQgOgXgegZg");
	this.shape_27.setTransform(236.4,127.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#758A51").s().p("AgYBGIAQgJQASgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgEAAgCQAAgMgFgNIABAAQAlAAAWgdQAIgLAEgKQAUApgGArQgKA+g+AiQgpAXg1AHQAVheACgQgAglg3QgggYgigOIgQgHIgBAAIAAgEQAAgaAQgUQAQgVAbgIIABABIAIAEQAsAVAfAZIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_28.setTransform(232.9,133.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AiDDFIAAAAIAAgCIADgQIABgBIABgBIAAADIgBAEIgDAOIgBgBgAg6C8IADgOQA3gHAogWQA+gjAKg+QAGgqgUgpQgEAJgIAMQgXAcgkAAIgCAAQAGANAAAMQAAACgDAEIgFAEIAAAAIgBAAIgBAAIgJgRQgJALgSANIgRAIIAAgCQAAgJgCgIIAOgIIgBAAIAXgUQgPgWgagYQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABAAIAAgBIABAAIADABIAAAAIARAHQAiAOAgAZIACAAQAWgBAUgQQAKgJAFgLQACgHgBgOIgBgPQgfgagrgUIgJgFIgBgBIAAAAQgEgBgBgEIAAAAIgBgFIABgBIABAAIAmAJIALADQBJAqAqA6QAyBFgKBCQgLBHhHAoQgtAZg+AHIAAgGgAAfhtQAAARgNAQQgSAXgfACIAHAHQAdAZAOAVIAOgCQAfgJAPgdIAIgRIgMgSQgSgZgagXIAAAMg");
	this.shape_29.setTransform(233.7,133.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#1D1F26").s().p("AgzANIgIgGQAigCASgUQALgRAAgRIgBgMQAaAXATAZIAMAQIgJASQgOAdggAJIgMADQgOgXgegag");
	this.shape_30.setTransform(236.6,125.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#758A51").s().p("AgUBLIAAgGIAMgGQASgMAKgLIAJAQIAAABIABAAIABAAIAEgFQADgDAAgCQAAgNgFgNIABAAQAlAAAWgcQAIgMAEgKQAUApgGAsQgKA9g+AiQgiATgrAIIAKhngAglg2QgggXgigPIgQgHIgBAAIAAgEQAAgZAQgVQAQgVAbgHIABABIAIADQAsAVAfAZIABAQQAAAPgCAFQgEAMgMAKQgSAPgXAAIgCAAg");
	this.shape_31.setTransform(233.1,131);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgnC7IABgNQArgIAjgTQA+giAKg+QAGgrgUgpQgEAKgIALQgXAdgkAAIgCAAQAGANAAAMQAAACgDAEIgFAEIAAAAIgBAAIgBAAIgJgRQgJALgSAMIgMAHQgBgKgDgJIALgGIgBAAIAXgUQgPgWgagYQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIAAAAIARAHQAiAOAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgZgrgVIgJgEIgBgBIAAAAQgEgBgBgEIAAAAIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBHhHAnQgnAWgyAJIABgIgAAfhqQAAARgNAQQgSAXgfACIAHAGQAdAaAOAVIAOgDQAfgIAPgdIAIgRIgMgSQgSgagagWIAAAMg");
	this.shape_32.setTransform(233.8,131.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#1D1F26").s().p("AgzANIgIgGQAigCASgUQALgRAAgRIgBgMQAaAWATAaIAMAQIgJARQgOAeggAJIgMADQgOgXgegag");
	this.shape_33.setTransform(236.2,129);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#758A51").s().p("AgDBgQAAgSgEgOQARgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgDAAgCQAAgMgFgOIABAAQAlAAAWgcQAIgMAEgKQAUAqgGArQgKA9g+AjQgbAOgeAIIAHhQgAglgzQgggYgigPIgQgHIgBAAIAAgEQAAgZAQgVQAQgVAbgHIABABIAIADQAsAVAfAZIABAQQAAAOgCAGQgEAMgMAKQgSAQgXAAIgCAAg");
	this.shape_34.setTransform(232.7,134.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSCsQAfgIAbgPQA+giAKg+QAGgrgUgpQgEAKgIALQgXAdgkAAIgCAAQAGANAAAMQAAACgDAEIgFAEIAAAAIgBAAIgBAAIgJgRQgJALgSAMQgDgJgFgHIADgCIgBAAIAXgUQgPgWgagYQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIAAAAIARAHQAiAOAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgZgrgVIgJgEIgBgBIAAAAQgEgBgBgEIAAAAIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBHhHAnQgfASgmAJIACgVgAAfhoQAAARgNAQQgSAXgfACIAHAGQAdAaAOAVIAOgDQAfgIAPgdIAIgRIgMgSQgSgagagWIAAAMg");
	this.shape_35.setTransform(233.4,134.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#758A51").s().p("AgsCVQAAgFgEgUIAAgEQAHgbADgRQAQgGAOgJQASgMAKgLIAJARIAAAAIABAAIABAAIAEgEQADgEAAgCQAAgMgFgNIABAAQAlAAAWgdQAIgLAEgKQAUApgGArQgKA+g+AiQgoAWg1AIIACgfgAglg3QgggYgigOIgQgHIgBAAIAAgEQAAgaAQgUQAQgVAbgIIABABIAIAEQAsAVAfAZIABAQQAAAOgCAGQgEAMgMAJQgSAQgXAAIgCAAg");
	this.shape_36.setTransform(232.7,135.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("Ag1CwQA1gIAogWQA+giAKg+QAGgrgUgpQgEAKgIALQgXAdgkAAIgCAAQAGANAAAMQAAACgDAEIgFAEIAAAAIgBAAIgBAAIgJgRQgJALgSAMQgPAJgQAGQACgNAAgHIAAAAQAMgGAMgHIgBAAIAXgUQgPgWgagYQghgfgtgfIgKgGIgEgDIAAAAIAAgBIgBgFIABgBIAAAAIABAAIADABIAAAAIARAHQAiAOAgAYIACAAQAWAAAUgQQAKgJAFgMQACgGgBgOIgBgQQgfgZgrgVIgJgEIgBgBIAAAAQgEgBgBgEIAAAAIgBgGIABgBIABAAIAmAKIALADQBJAqAqA6QAyBFgKBCQgLBHhHAnQgsAZg8AIIACgUgAAfhrQAAARgNAQQgSAXgfACIAHAGQAdAaAOAVIAOgDQAfgIAPgdIAIgRIgMgSQgSgagagWIAAAMg");
	this.shape_37.setTransform(233.4,136.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.instance_7,p:{scaleX:1,scaleY:1.014,rotation:0,skewX:17.4,skewY:7.7,x:228.4,y:129.3}}]},1).to({state:[{t:this.instance_7,p:{scaleX:0.998,scaleY:0.998,rotation:4.3,skewX:0,skewY:0,x:228.1,y:130.8}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:0.998,scaleY:0.998,rotation:2.4,x:230.2,y:132.9,startPosition:44,regX:-13,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.1,scaleX:0.994,scaleY:0.994,rotation:8.5,x:236,y:125,startPosition:43,regX:-13,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:0.994,scaleY:0.994,rotation:10.3,x:237.8,y:120.7,startPosition:43,regX:-13,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:11.3,x:238.2,y:124.8,startPosition:43,regX:-13,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:13.8,x:241.2,y:151.8,startPosition:43,regX:-13,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:13.8,x:241.7,y:153.6,startPosition:43,regX:-13,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:13.8,x:244.3,y:149.9,startPosition:43,regX:-13,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:13.8,x:245.6,y:148.4,startPosition:43,regX:-13,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:13.8,x:245.9,y:152.6,startPosition:43,regX:-13,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.2,scaleX:0.994,scaleY:0.994,rotation:13.8,x:247,y:151.6,startPosition:43,regX:-13,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.1,scaleX:0.993,scaleY:0.993,rotation:9.3,x:245.5,y:149,startPosition:53,regX:-13,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_9,p:{regY:88.3,scaleX:0.999,scaleY:0.999,rotation:1,x:156.7,y:217}}]},2).to({state:[{t:this.instance_9,p:{regY:88.4,scaleX:1,scaleY:1,rotation:-3.2,x:157,y:219.4}}]},1).to({state:[{t:this.instance_9,p:{regY:88.4,scaleX:1,scaleY:1,rotation:-4.2,x:157.3,y:220}}]},1).to({state:[{t:this.instance_9,p:{regY:88.4,scaleX:1,scaleY:1,rotation:-5.2,x:156.2,y:219.1}}]},7).to({state:[{t:this.instance_10}]},2).to({state:[]},2).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12,p:{x:17.7,y:130.8,scaleX:0.967,skewX:-6.4,skewY:173.5,startPosition:3,regX:-13.1,scaleY:0.967,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:16.8,y:134.2,scaleX:0.967,skewX:-6.4,skewY:173.5,startPosition:3,regX:-13.1,scaleY:0.967,regY:-22.3}}]},3).to({state:[{t:this.instance_12,p:{x:16.4,y:135.4,scaleX:0.967,skewX:-6.4,skewY:173.5,startPosition:3,regX:-13.1,scaleY:0.967,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:16.4,y:134.8,scaleX:0.967,skewX:-6.4,skewY:173.5,startPosition:3,regX:-13.1,scaleY:0.967,regY:-22.3}}]},2).to({state:[{t:this.instance_12,p:{x:16.8,y:134.3,scaleX:0.99,skewX:-21.4,skewY:146.2,startPosition:4,regX:-13.1,scaleY:0.967,regY:-22.3}}]},11).to({state:[{t:this.instance_12,p:{x:15.1,y:135.6,scaleX:0.981,skewX:-52.1,skewY:146.1,startPosition:4,regX:-13.2,scaleY:0.903,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:13,y:137.2,scaleX:0.963,skewX:-7.7,skewY:173.9,startPosition:1,regX:-13.1,scaleY:1.118,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.2,y:138.5,scaleX:0.967,skewX:-6.4,skewY:173.5,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.4,y:134.2,scaleX:0.967,skewX:-4.9,skewY:175,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.7,y:130.6,scaleX:0.966,skewX:-3.9,skewY:176,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.8,y:127.8,scaleX:0.966,skewX:-2.9,skewY:177,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.8,y:125.8,scaleX:0.966,skewX:-2.4,skewY:177.5,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:12,y:124.6,scaleX:0.966,skewX:-1.9,skewY:178,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.9,y:124.2,scaleX:0.966,skewX:-1.9,skewY:178,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:12.4,y:124,scaleX:0.966,skewX:-0.2,skewY:179.7,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:12.9,y:123.7,scaleX:0.966,skewX:1,skewY:-178.9,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:13.2,y:123.6,scaleX:0.966,skewX:2.1,skewY:-177.8,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:13.5,y:123.5,scaleX:0.966,skewX:3,skewY:-176.9,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:13.7,y:123.3,scaleX:0.966,skewX:3.8,skewY:-176.1,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:13.8,y:123.3,scaleX:0.966,skewX:4,skewY:-175.9,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:13.9,y:123.3,scaleX:0.966,skewX:4.3,skewY:-175.6,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:13.4,y:123.6,scaleX:0.966,skewX:2.5,skewY:-177.4,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:12.9,y:123.8,scaleX:0.966,skewX:1.1,skewY:-178.8,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:12.5,y:123.9,scaleX:0.966,skewX:0,skewY:-179.9,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:12.2,y:124,scaleX:0.966,skewX:-0.7,skewY:179.2,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:12,y:124.2,scaleX:0.966,skewX:-1.2,skewY:178.7,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.9,y:124.1,scaleX:0.966,skewX:-1.7,skewY:178.2,startPosition:1,regX:-13,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.9,y:124.2,scaleX:0.966,skewX:-1.9,skewY:178,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:11.7,y:128,scaleX:0.966,skewX:-2.9,skewY:177,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:11.5,y:130.9,scaleX:0.966,skewX:-3.7,skewY:176.2,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.3,y:133.5,scaleX:0.966,skewX:-4.5,skewY:175.4,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.2,y:135.4,scaleX:0.967,skewX:-5.2,skewY:174.7,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:11.1,y:136.9,scaleX:0.967,skewX:-5.5,skewY:174.4,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:11,y:137.7,scaleX:0.967,skewX:-5.7,skewY:174.2,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:11,y:137.9,scaleX:0.967,skewX:-5.9,skewY:174,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.3,y:134.3,scaleX:0.967,skewX:-4.7,skewY:175.2,startPosition:1,regX:-13.1,scaleY:0.967,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.5,y:131.1,scaleX:0.966,skewX:-3.9,skewY:176,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.7,y:128.7,scaleX:0.966,skewX:-3.2,skewY:176.7,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.8,y:126.7,scaleX:0.966,skewX:-2.5,skewY:177.4,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.9,y:125.3,scaleX:0.966,skewX:-2.2,skewY:177.7,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:12,y:124.5,scaleX:0.966,skewX:-1.9,skewY:178,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.3}}]},1).to({state:[{t:this.instance_12,p:{x:11.9,y:124.2,scaleX:0.966,skewX:-1.9,skewY:178,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:12.4,y:123.6,scaleX:0.966,skewX:0,skewY:180,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:12.8,y:123.2,scaleX:0.966,skewX:1.3,skewY:-178.6,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:13.1,y:122.9,scaleX:0.966,skewX:2.8,skewY:-177.1,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:13.4,y:122.7,scaleX:0.966,skewX:3.8,skewY:-176.1,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.1}}]},1).to({state:[{t:this.instance_12,p:{x:13.6,y:122.4,scaleX:0.966,skewX:4.3,skewY:-175.6,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:13.8,y:122.3,scaleX:0.966,skewX:4.8,skewY:-175.1,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_12,p:{x:13.9,y:122.3,scaleX:0.966,skewX:5.1,skewY:-174.8,startPosition:1,regX:-13.1,scaleY:0.966,regY:-22.2}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:0.966,scaleY:0.966,rotation:0,x:13.2,y:127.5,startPosition:54,regX:-13.1,skewX:6.6,skewY:-173.3}}]},4).to({state:[]},1).to({state:[{t:this.instance_13}]},7).to({state:[{t:this.instance_8,p:{regY:-22.4,scaleX:1.076,scaleY:1.076,rotation:-19.2,x:220.3,y:128.9,startPosition:52,regX:-13.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:1.148,scaleY:1.148,rotation:-11.7,x:219.8,y:100.1,startPosition:52,regX:-13.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:1.135,scaleY:1.135,rotation:-6.2,x:220,y:107.1,startPosition:52,regX:-13.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:1.135,scaleY:1.135,rotation:-6.2,x:220.3,y:109.2,startPosition:52,regX:-13.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:1.128,scaleY:1.128,rotation:-4.2,x:219.8,y:118.5,startPosition:55,regX:-13.1,skewX:0,skewY:0}}]},4).to({state:[{t:this.instance_8,p:{regY:-22.3,scaleX:1.128,scaleY:1.128,rotation:-2.4,x:219.3,y:127.5,startPosition:56,regX:-13.1,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_8,p:{regY:-22.4,scaleX:1.113,scaleY:1.113,rotation:12,x:218.1,y:136.4,startPosition:43,regX:-13.1,skewX:0,skewY:0}}]},1).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape}]},1).wait(5));

	// CUP_23_eye_01
	this.instance_14 = new lib.CUP_34_body("synched",0);
	this.instance_14.setTransform(137.1,177.2,1,1,0,0,0,-1.5,82.4);

	this.instance_15 = new lib.CUP_34DOWN_handle("synched",0);
	this.instance_15.setTransform(242.9,141.4,0.999,0.999,1,0,0,-16.3,-0.6);

	this.instance_16 = new lib.CUP_34DOWN_arm_01("single",1);
	this.instance_16.setTransform(238.2,144.4,1.011,1,0,14.8,23.5,-14.9,-20.1);

	this.instance_17 = new lib.CUP_34DOWN_arm_02("single",1);
	this.instance_17.setTransform(66.8,159.3,1.221,1.001,0,-15.9,-33.7,12.5,-20.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#758A51").s().p("AgxDdQgkgagcgsIgHgLIgNgXQgKgVgJgZQANgHAOgLIAOgLIANgNIAAgBQANgPAMgOIATAkIAMAVQAQAZAVAMQAEACADACQAIAEADgBQABgIgDgGIgBgCQBEiJgDihIgEgBQAAgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAIADAAQAGgEANgCIAbgEIACgBIAaATIAGAFIgBADIgGANQgDBEgKBGQgIBCgXBAQgHAPgFAQQgTAqgXAiQgpA1gkgIIgBAAIAAABQgJgDgKgHg");
	this.shape_38.setTransform(43,179.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#526139").s().p("AguBPIgMgNIAAAAIAAgFQgEgKgCgPQgBgXAGAKQAIADAIACQAFABAIgBIABAAQAFgCACgEIACgDIAGgEQAjgUAVg7IAHgVQAIAKAGARIACAJQAAAjgTAaQgNAYgPAOIgBABIgEAEIgKAJIgDADQgSAQgTADQgCgDgHgEg");
	this.shape_39.setTransform(30.2,176.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B3E4E6").s().p("Ag6CWIgFgJQgEgIgCgLQgDgIAAgIIgEgqQgBgaAGgZIANgyQAPgHANAFQAIAEAFALQAGAMAEAOQAGAWgBAXQAAAWgMARIgKAOIgGgCQgEgDgCgFQgKgTAAgZIgBgNQgDgLgFgFQgGAjAGAiQADASAJAKIAMAIQAFADAEgDQAMgIAKgRQAFgQACgUIACggQAHASAOgFQAIgCAHgGQAIgIADgNQAAgLgGAHQgDAHgEACQgKAIgHgKQgKgJgBgSQgBgLAFgJIAFgOQAIgMAKABIAQAEQANAEAEAUQAEAVgEAXQgHAngLAhQgSA0ggAWIgJAHIgIABIgKABQgWAAgQgVgAgOg2QgJgHgJAAQgKgCgLACQAGgeAQgTQAEgCAEAAQAUADAPANQAIAHgEARQgDASgHARQgDAHgBAKQgDgXgNgLgAAahqQgHgPgNgEQgIgFgKgDQAGgPAHgOQAOgQAKAQQAQAXgBAkIgDAaIgGACQACgRgHgOg");
	this.shape_40.setTransform(27.8,159.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAAE9IAAgBQgvgbgkg0QgLgPgJgTQgNgZgJgfIgCAAQgDABgFgCQgEgBgDgDQgHgFgFgOIgCgDIAAgBIAAgBQgHgUgBgbQgBgMABgHQgDgBgCgCQgLgGgFgSQgFgKgCgNQgEgTgCgVQgCgSABgUQgBglALglIAKgeIAJghQAFgQAHgOQAKgTAMgEIAPghQAGgKAJgGQAIgGAHABQAJABAIAIIAGAJQAFAKADANQAJAggHAlQAJACAIAEQAHAFAFAIQAFAIACALQADAOAAAQQgBAWgEATQgEATgBAPQAOAMAFAYQACAFABAIIAAAQIgDAPQgCANgFANIgDAKIAAACQALAkARAYIAYAfIAHAEIAAAAIACgDQBAiEgDiWQAAgFACgEQACgEADgBQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABIABABIgDABQgBAAAAAAQABABAAAAQAAABAAAAQABABAAABIAEABQADCehECMIABACQADAFgBAJQgDABgIgFQgFgBgEgCQgVgMgOgZIgMgVIgTgnQgMARgNAPIAAABIgNANIgOALQgOALgNAHQAJAYAKAWIANAWIAHAMQAcAsAkAaQAIAGAJAEIAAgCIABAAQAmAJApg1QAXgiATgqQAFgQAHgQQAXg/AIhEQAKhEADhFIAGgMIABgDIAHAGQgEBRgLBOIgBABIgBAFQgJBEgaA9IgMAeQgTAqgXAiQgnAzgkAAQgLAAgJgEgAiXBJQACAPAEALIAAAEIAAABIAMANQAHAEACADQATgDASgQIAFgEIAKgIIAEgEIABgBQAPgOANgZQATgbAAghIgCgKQgGgQgIgLIgHAWQgVA4glAXIgGAEIgCADQgCAEgFABIgBAAQgIABgFgBQgIgBgIgDQAAgBgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQgDAAABAPgAipipIgNA0QgGAZABAaIAEAqQABAIACAIQADAJAEAIIAFAJQATAaAcgGIAIgBIALgHQAggWASgyQAMghAGgnQAFgZgFgVQgEgUgMgEIgRgEQgJgBgJAMIgEAOQgFAJAAALQABAUAKAJQAIAKAJgIQAFgCACgHQAGgHAAALQgDANgHAIQgIAGgHACQgOAFgHgSIgCAgQgCAUgIAQQgKARgMAIQgEADgEgDIgNgIQgJgKgDgSQgFgiAGgjQAFAFACALIACANQAAAZAKATQACAFAEADIAFACIAKgOQANgRAAgWQABgXgGgWQgFgQgGgMQgEgLgJgEQgFgCgGAAQgIAAgJAEgAiOjBQAJAAAIAHQANALAGAXQABgKACgHQAHgRAEgSQAEgRgJgHQgQgNgUgDQgEAAgEACQgRATgGAeIAMgBIAKABgAhrkmQgKAOgFAPQAKADAKAFQAMAEAIAPQAGAOgCARIAHgCIACgaQABgkgPgXQgGgIgGAAQgGAAgGAIg");
	this.shape_41.setTransform(38.9,172.7);

	this.instance_18 = new lib.CUP_34DOWN_body("synched",0);
	this.instance_18.setTransform(80,214.9,0.939,0.939,0,10.8,-169.1,5.5,88.3);

	this.instance_19 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_19.setTransform(143.1,226.7,0.937,0.937,0,-1.1,178.8,8.4,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{rotation:0,x:137.1,y:177.2,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]}).to({state:[{t:this.instance_14,p:{rotation:-1.9,x:138.9,y:183.9,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-6,x:145.3,y:194.8,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:-7.2,x:147.1,y:197.4,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:-7.5,x:147.1,y:199.3,regX:-1.4,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-5.7,x:147.2,y:198.9,regX:-1.4,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:10.9,x:134.8,y:166.6,regX:-1.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:12.7,x:135.2,y:159.3,regX:-1.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:13.7,x:134.9,y:161.6,regX:-1.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:16.3,x:136.6,y:184,regX:-1.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:16.3,x:137.1,y:185.7,regX:-1.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:16.3,x:139.7,y:182.1,regX:-1.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:16.3,x:141,y:180.6,regX:-1.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:16.3,x:141.3,y:184.7,regX:-1.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:16.3,x:142.4,y:183.7,regX:-1.4,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:11.7,x:143.7,y:189.3,regX:-1.5,scaleX:0.998,scaleY:0.998,skewX:0,skewY:0,regY:82.4}}]},5).to({state:[{t:this.instance_15,p:{scaleX:0.999,scaleY:0.999,rotation:1,x:242.9,y:141.4,regX:-16.3}}]},2).to({state:[{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:-3.2,x:237.4,y:137.5,regX:-16.3}}]},1).to({state:[{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:-4.2,x:236.1,y:136.6,regX:-16.3}}]},1).to({state:[{t:this.instance_15,p:{scaleX:1,scaleY:1,rotation:-5.2,x:233.6,y:134.4,regX:-16.2}}]},7).to({state:[{t:this.instance_17},{t:this.instance_16}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:136.3,y:209.7,regX:-1.6,scaleX:0.968,scaleY:0.968,skewX:0.3,skewY:-179.6,regY:82.4}},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:111.1,y:181.3,regX:-1.6,scaleX:0.968,scaleY:0.968,skewX:-4.9,skewY:175,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:109.9,y:176.1,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:108.9,y:179.5,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.5}}]},3).to({state:[{t:this.instance_14,p:{rotation:0,x:108.5,y:180.7,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:108.5,y:180.1,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.5}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:108.9,y:179.5,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.5}}]},11).to({state:[{t:this.instance_14,p:{rotation:0,x:107.1,y:180.8,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:105.2,y:182.2,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:103.3,y:183.7,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-6.4,skewY:173.5,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:102.3,y:181.4,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-4.9,skewY:175,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:101.4,y:179.6,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-3.9,skewY:176,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.9,y:178.1,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-2.9,skewY:177,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.4,y:177.1,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-2.4,skewY:177.5,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.1,y:176.5,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-1.9,skewY:178,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100,y:176.3,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-1.9,skewY:178,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:99,y:178.6,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:-0.2,skewY:179.7,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:97.9,y:180.5,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:1,skewY:-178.9,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:97.2,y:182,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:2.1,skewY:-177.8,regY:82.3}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:96.7,y:183.3,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:3,skewY:-176.9,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:96.1,y:184.1,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:3.8,skewY:-176.1,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:95.9,y:184.7,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:4,skewY:-175.9,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:95.8,y:184.8,regX:-1.4,scaleX:0.966,scaleY:0.966,skewX:4.3,skewY:-175.6,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:96.9,y:182.6,regX:-1.4,scaleX:0.966,scaleY:0.966,skewX:2.5,skewY:-177.4,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:97.9,y:180.7,regX:-1.3,scaleX:0.966,scaleY:0.966,skewX:1.1,skewY:-178.8,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:98.6,y:179,regX:-1.3,scaleX:0.966,scaleY:0.966,skewX:0,skewY:-179.9,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:99.3,y:177.8,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-0.7,skewY:179.2,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:99.7,y:176.9,regX:-1.4,scaleX:0.966,scaleY:0.966,skewX:-1.2,skewY:178.7,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100,y:176.4,regX:-1.4,scaleX:0.966,scaleY:0.966,skewX:-1.7,skewY:178.2,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100,y:176.3,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-1.9,skewY:178,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.7,y:178.3,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-2.9,skewY:177,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:101.5,y:179.9,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:-3.7,skewY:176.2,regY:82.3}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:101.9,y:181.4,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:-4.5,skewY:175.4,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:102.1,y:182.4,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-5.2,skewY:174.7,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:102.4,y:183.2,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-5.5,skewY:174.4,regY:82.3}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:102.6,y:183.7,regX:-1.5,scaleX:0.967,scaleY:0.967,skewX:-5.7,skewY:174.2,regY:82.3}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:102.7,y:183.9,regX:-1.6,scaleX:0.967,scaleY:0.967,skewX:-5.9,skewY:174,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:102,y:181.9,regX:-1.6,scaleX:0.967,scaleY:0.967,skewX:-4.7,skewY:175.2,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:101.3,y:180.2,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-3.9,skewY:176,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.9,y:178.7,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:-3.2,skewY:176.7,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.5,y:177.7,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-2.5,skewY:177.4,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.3,y:176.9,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:-2.2,skewY:177.7,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100.2,y:176.4,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:-1.9,skewY:178,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:100,y:176.3,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:-1.9,skewY:178,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:98.8,y:178.6,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:0,skewY:180,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:97.6,y:180.5,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:1.3,skewY:-178.6,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:96.6,y:182.1,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:2.8,skewY:-177.1,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:95.8,y:183.3,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:3.8,skewY:-176.1,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:95.4,y:184.2,regX:-1.6,scaleX:0.966,scaleY:0.966,skewX:4.3,skewY:-175.6,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:95,y:184.7,regX:-1.5,scaleX:0.966,scaleY:0.966,skewX:4.8,skewY:-175.1,regY:82.3}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:94.9,y:184.9,regX:-1.4,scaleX:0.966,scaleY:0.966,skewX:5.1,skewY:-174.8,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:92.5,y:192.3,regX:-1.3,scaleX:0.966,scaleY:0.966,skewX:6.6,skewY:-173.3,regY:82.5}}]},4).to({state:[{t:this.instance_18,p:{regY:88.3,skewX:10.8,skewY:-169.1,x:80,y:214.9}}]},1).to({state:[{t:this.instance_18,p:{regY:88.2,skewX:12.8,skewY:-167.1,x:77.3,y:218.4}}]},1).to({state:[{t:this.instance_18,p:{regY:88.2,skewX:12.8,skewY:-167.1,x:77.5,y:219.2}}]},1).to({state:[{t:this.instance_18,p:{regY:88.2,skewX:10.8,skewY:-169.1,x:81.6,y:215.6}}]},3).to({state:[{t:this.instance_19}]},2).to({state:[{t:this.instance_14,p:{rotation:-4.2,x:129,y:197.6,regX:-1.5,scaleX:1.076,scaleY:1.076,skewX:0,skewY:0,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:-6.2,x:124.9,y:176.8,regX:-1.5,scaleX:1.148,scaleY:1.148,skewX:0,skewY:0,regY:82.5}}]},1).to({state:[{t:this.instance_14,p:{rotation:-6.2,x:126.3,y:182.8,regX:-1.5,scaleX:1.135,scaleY:1.135,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-6.2,x:126.5,y:184.9,regX:-1.5,scaleX:1.135,scaleY:1.135,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:-4.2,x:124,y:190.5,regX:-1.5,scaleX:1.128,scaleY:1.128,skewX:0,skewY:0,regY:82.4}}]},4).to({state:[{t:this.instance_14,p:{rotation:-2.4,x:121.3,y:196.5,regX:-1.5,scaleX:1.128,scaleY:1.128,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-2.4,x:122.8,y:204.5,regX:-1.5,scaleX:1.114,scaleY:1.114,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:-0.6,x:122.9,y:210.5,regX:-1.5,scaleX:1.09,scaleY:1.09,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:-0.6,x:125.5,y:216.1,regX:-1.5,scaleX:1.069,scaleY:1.069,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-0.4,x:126.8,y:210.4,regX:-1.4,scaleX:1.053,scaleY:1.053,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-0.4,x:130.8,y:201.4,regX:-1.4,scaleX:1.025,scaleY:1.025,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:-1.2,x:137.9,y:185.4,regX:-1.6,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.3}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:137.4,y:174.6,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:137.5,y:172.5,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},1).to({state:[{t:this.instance_14,p:{rotation:0,x:137.1,y:175.8,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},2).to({state:[{t:this.instance_14,p:{rotation:0,x:137.1,y:177.2,regX:-1.5,scaleX:1,scaleY:1,skewX:0,skewY:0,regY:82.4}}]},1).wait(5));

	// CUP_23_eye_02
	this.instance_20 = new lib.CUP_34_arm_02("single",1);
	this.instance_20.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(2).to({regY:-22.3,scaleY:1.15,skewX:-3.8,skewY:-1.8,x:226.2,y:123.5},0).wait(1).to({regY:-22.2,scaleX:0.96,scaleY:0.95,skewX:48.6,skewY:27.9,x:229.5,y:130.5,startPosition:44},0).to({_off:true},1).wait(127).to({regY:-22.4,scaleX:1.07,scaleY:1.44,rotation:-0.5,skewX:0,skewY:0,x:219.9,y:156.4,startPosition:1,_off:false},0).wait(2).to({regY:-22.2,scaleX:1.05,scaleY:1.24,rotation:-0.3,x:220.3,y:149.3},0).wait(2).to({regX:-13.1,scaleX:1.02,scaleY:1.02,x:221.7,y:141.9},0).wait(1).to({regX:-13,scaleX:1,scaleY:1,rotation:-1.1,x:226.1,y:126.3},0).wait(1).to({rotation:0,x:226.8,y:117.4},0).wait(1).to({x:226.9,y:115.3},0).wait(2).to({x:226.5,y:118.6},0).wait(1).to({y:120},0).wait(5));

	// CUP_23_body
	this.instance_21 = new lib.CUP_34_handle("synched",0);
	this.instance_21.setTransform(227.1,106.7,1,1,0,0,0,-17.5,0.8);

	this.instance_22 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_22.setTransform(171.8,223.1,0.999,0.999,0,-0.4,179.5,8.6,-18.8);

	this.instance_23 = new lib.CUP_34DOWN_handle("synched",0);
	this.instance_23.setTransform(15.2,128.8,0.939,0.939,0,10.8,-169.1,-16.3,-0.5);

	this.instance_24 = new lib.CUP_34DOWN_arm_01("single",1);
	this.instance_24.setTransform(209.6,158.8,1.034,0.999,0,17.6,2.7,-14.9,-20.1);

	this.instance_25 = new lib.CUP_34DOWN_arm_02("single",1);
	this.instance_25.setTransform(37.3,158.2,1.206,1.087,0,-13.1,21,12.6,-20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21,p:{rotation:0,x:227.1,y:106.7,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]}).to({state:[{t:this.instance_21,p:{rotation:-1.9,x:226.3,y:110.2,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-6,x:227.3,y:115.2,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-7.2,x:227.3,y:116,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-7.5,x:226.8,y:117.5,regX:-17.6,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-5.7,x:229.4,y:119.7,regX:-17.6,scaleX:0.999,scaleY:0.999,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:10.9,x:236.2,y:114.6,regX:-17.6,scaleX:0.998,scaleY:0.998,regY:0.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:12.7,x:238.3,y:110.5,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.9,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:13.7,x:238.9,y:114.6,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.9,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:16.3,x:242.5,y:141.5,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:16.3,x:243,y:143.2,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:16.3,x:245.6,y:139.6,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:16.3,x:246.9,y:138.1,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:16.3,x:247.2,y:142.2,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:16.3,x:248.3,y:141.2,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:11.7,x:245.9,y:138.8,regX:-17.5,scaleX:0.998,scaleY:0.998,regY:1,skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_22,p:{regX:8.6,scaleX:0.999,scaleY:0.999,skewX:-0.4,skewY:179.5,x:171.8,y:223.1}}]},2).to({state:[{t:this.instance_22,p:{regX:8.5,scaleX:1,scaleY:1,skewX:-4.6,skewY:175.3,x:176.1,y:226.4}}]},1).to({state:[{t:this.instance_22,p:{regX:8.6,scaleX:1,scaleY:1,skewX:-5.7,skewY:174.2,x:176.4,y:226.7}}]},1).to({state:[{t:this.instance_22,p:{regX:8.6,scaleX:1,scaleY:1,skewX:-6.7,skewY:173.2,x:175.4,y:225.5}}]},7).to({state:[]},2).to({state:[{t:this.instance_21,p:{rotation:0,x:49.5,y:141,regX:-17.6,scaleX:0.968,scaleY:0.968,regY:0.8,skewX:0.3,skewY:-179.6}}]},2).to({state:[{t:this.instance_21,p:{rotation:0,x:18.3,y:120.9,regX:-17.5,scaleX:0.968,scaleY:0.968,regY:0.8,skewX:-4.9,skewY:175}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:15.7,y:118,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.8,y:121.5,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},3).to({state:[{t:this.instance_21,p:{rotation:0,x:14.4,y:122.7,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.4,y:122.1,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},2).to({state:[{t:this.instance_21,p:{rotation:0,x:14.8,y:121.5,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},11).to({state:[{t:this.instance_21,p:{rotation:0,x:13,y:122.9,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:11.1,y:124.3,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.1,y:125.9,regX:-17.5,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.7,y:121.4,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-4.9,skewY:175}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.1,y:117.8,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-3.9,skewY:176}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.4,y:115,regX:-17.5,scaleX:0.966,scaleY:0.966,regY:0.7,skewX:-2.9,skewY:177}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.6,y:112.9,regX:-17.5,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-2.4,skewY:177.5}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.8,y:111.7,regX:-17.5,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.9,y:111.3,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:11.7,y:111,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-0.2,skewY:179.7}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:12.6,y:110.9,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:1,skewY:-178.9}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:13.1,y:110.7,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:2.1,skewY:-177.8}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:13.6,y:110.6,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:3,skewY:-176.9}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14,y:110.5,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:3.8,skewY:-176.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.2,y:110.4,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:4,skewY:-175.9}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.3,y:110.3,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:4.3,skewY:-175.6}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:13.4,y:110.6,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:2.5,skewY:-177.4}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:12.6,y:110.8,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:1.1,skewY:-178.8}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:12,y:111,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.9,skewX:0,skewY:-179.9}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:11.5,y:111.1,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-0.7,skewY:179.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:11.1,y:111.1,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-1.2,skewY:178.7}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.9,y:111.2,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.9,skewX:-1.7,skewY:178.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.9,y:111.3,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.3,y:115,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-2.9,skewY:177}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.9,y:118.1,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-3.7,skewY:176.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.6,y:120.8,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-4.5,skewY:175.4}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.4,y:122.7,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-5.2,skewY:174.7}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.3,y:124.1,regX:-17.7,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-5.5,skewY:174.4}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.1,y:124.9,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-5.7,skewY:174.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.1,y:125.3,regX:-17.5,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-5.9,skewY:174}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.6,y:121.6,regX:-17.6,scaleX:0.967,scaleY:0.967,regY:0.8,skewX:-4.7,skewY:175.2}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:9.9,y:118.4,regX:-17.5,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-3.9,skewY:176}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.4,y:115.9,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-3.2,skewY:176.7}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.6,y:113.8,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-2.5,skewY:177.4}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.7,y:112.5,regX:-17.5,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-2.2,skewY:177.7}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.9,y:111.6,regX:-17.5,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:10.9,y:111.3,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:-1.9,skewY:178}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:11.8,y:110.8,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:0,skewY:180}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:12.6,y:110.4,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:1.3,skewY:-178.6}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:13.2,y:110,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:2.8,skewY:-177.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:13.8,y:109.7,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:3.8,skewY:-176.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.2,y:109.5,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:4.3,skewY:-175.6}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.4,y:109.3,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.8,skewX:4.8,skewY:-175.1}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.5,y:109.4,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.9,skewX:5.1,skewY:-174.8}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:14.2,y:114.7,regX:-17.6,scaleX:0.966,scaleY:0.966,regY:0.9,skewX:6.6,skewY:-173.3}}]},4).to({state:[{t:this.instance_23,p:{regY:-0.5,skewX:10.8,skewY:-169.1,x:15.2,y:128.8}}]},1).to({state:[{t:this.instance_23,p:{regY:-0.4,skewX:12.8,skewY:-167.1,x:15.5,y:130.2}}]},1).to({state:[{t:this.instance_23,p:{regY:-0.4,skewX:12.8,skewY:-167.1,x:15.7,y:131}}]},1).to({state:[{t:this.instance_23,p:{regY:-0.4,skewX:10.8,skewY:-169.1,x:16.8,y:129.7}}]},3).to({state:[{t:this.instance_25},{t:this.instance_24}]},2).to({state:[{t:this.instance_21,p:{rotation:-4.2,x:219.9,y:114.7,regX:-17.4,scaleX:1.076,scaleY:1.076,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-6.2,x:218.7,y:84.9,regX:-17.5,scaleX:1.148,scaleY:1.148,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-6.2,x:219,y:92,regX:-17.5,scaleX:1.135,scaleY:1.135,regY:0.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-6.2,x:219.3,y:94.1,regX:-17.5,scaleX:1.135,scaleY:1.135,regY:0.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-4.2,x:219.3,y:103.5,regX:-17.5,scaleX:1.128,scaleY:1.128,regY:0.7,skewX:0,skewY:0}}]},4).to({state:[{t:this.instance_21,p:{rotation:-2.4,x:219.3,y:112.5,regX:-17.5,scaleX:1.128,scaleY:1.128,regY:0.7,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-2.4,x:219.4,y:121.6,regX:-17.6,scaleX:1.114,scaleY:1.114,regY:0.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-0.6,x:219.8,y:132.4,regX:-17.6,scaleX:1.09,scaleY:1.09,regY:0.7,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:-0.6,x:220.4,y:139.5,regX:-17.6,scaleX:1.069,scaleY:1.069,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-0.4,x:220.6,y:135.4,regX:-17.6,scaleX:1.053,scaleY:1.053,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-0.4,x:222.2,y:128.4,regX:-17.6,scaleX:1.025,scaleY:1.025,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:-1.2,x:226.3,y:113,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:227.4,y:104.1,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:227.5,y:102,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_21,p:{rotation:0,x:227.1,y:105.3,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_21,p:{rotation:0,x:227.1,y:106.7,regX:-17.5,scaleX:1,scaleY:1,regY:0.8,skewX:0,skewY:0}}]},1).wait(5));

	// CUP_23_handle
	this.instance_26 = new lib.CUP_34_leg_COMP("single",0);
	this.instance_26.setTransform(163.3,185.8,1,1,0,0,180,8.5,-18.9);

	this.instance_27 = new lib.CUP_23_leg_COMP("synched",0);
	this.instance_27.setTransform(130.7,218,0.999,0.999,1,0,0,8.6,-18.8);

	this.instance_28 = new lib.CUP_FRONT_leg_COMP("synched",0);
	this.instance_28.setTransform(61.2,219.2,0.939,0.939,12.3,0,0,8.5,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:0,skewY:180,x:163.3,y:185.8,regY:-18.9,scaleX:1,scaleY:1,mode:"single",rotation:0}}]}).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-1.9,skewY:178,x:165.4,y:191.6,regY:-18.9,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:-6,skewY:173.9,x:172.2,y:200.6,regY:-19,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:-6,skewY:173.9,x:172.2,y:200.6,regY:-19,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-7.5,skewY:172.4,x:174.2,y:204.4,regY:-19,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-5.7,skewY:174.2,x:174.1,y:204.9,regY:-18.9,scaleX:0.999,scaleY:0.999,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-4,skewY:175.9,x:158.8,y:180.1,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-2.2,skewY:177.7,x:158.8,y:173.5,regY:-19,scaleX:0.999,scaleY:0.999,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-1.2,skewY:178.7,x:158.3,y:176.2,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:1.3,skewY:-178.6,x:159.1,y:199.6,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:1.3,skewY:-178.6,x:159.6,y:201.3,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:1.3,skewY:-178.6,x:162.2,y:197.7,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:1.3,skewY:-178.6,x:163.6,y:196.2,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:1.3,skewY:-178.6,x:163.3,y:199.3,regY:-19,scaleX:0.998,scaleY:0.998,mode:"synched",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:1.3,skewY:-178.6,x:164.4,y:198.3,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-3.2,skewY:176.7,x:167,y:202.1,regY:-19,scaleX:0.998,scaleY:0.998,mode:"single",rotation:0}}]},5).to({state:[{t:this.instance_27,p:{regY:-18.8,scaleX:0.999,scaleY:0.999,rotation:1,x:130.7,y:218}}]},2).to({state:[{t:this.instance_27,p:{regY:-19,scaleX:1,scaleY:1,rotation:-3.2,x:135.4,y:222.1}}]},1).to({state:[{t:this.instance_27,p:{regY:-18.9,scaleX:1,scaleY:1,rotation:-4.2,x:135.7,y:223.1}}]},1).to({state:[{t:this.instance_27,p:{regY:-19,scaleX:1,scaleY:1,rotation:-5.2,x:134.7,y:222.6}}]},7).to({state:[]},2).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:0,skewY:0,x:110.8,y:218,regY:-18.9,scaleX:0.968,scaleY:0.968,mode:"synched",rotation:0.3}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:0,skewY:0,x:86.4,y:191.9,regY:-18.9,scaleX:0.968,scaleY:0.968,mode:"synched",rotation:-4.9}}]},1).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:0,skewY:0,x:85.5,y:187.3,regY:-18.8,scaleX:0.967,scaleY:0.967,mode:"single",rotation:-6.4}}]},1).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:0,skewY:0,x:84.6,y:190.7,regY:-18.8,scaleX:0.967,scaleY:0.967,mode:"single",rotation:-6.4}}]},3).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:0,skewY:0,x:84.2,y:191.9,regY:-18.8,scaleX:0.967,scaleY:0.967,mode:"single",rotation:-6.4}}]},1).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:0,skewY:0,x:84.2,y:191.3,regY:-18.8,scaleX:0.967,scaleY:0.967,mode:"single",rotation:-6.4}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:0,skewY:0,x:84.6,y:190.7,regY:-18.8,scaleX:0.967,scaleY:0.967,mode:"single",rotation:-6.4}}]},11).to({state:[]},3).to({state:[]},45).to({state:[{t:this.instance_28,p:{rotation:12.3,x:61.2,y:219.2}}]},1).to({state:[{t:this.instance_28,p:{rotation:14.3,x:58.4,y:222.1}}]},1).to({state:[{t:this.instance_28,p:{rotation:14.3,x:58.6,y:222.9}}]},1).to({state:[{t:this.instance_28,p:{rotation:12.3,x:63.6,y:220.1}}]},3).to({state:[]},2).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-4.2,skewY:175.7,x:157.7,y:204.8,regY:-18.8,scaleX:1.076,scaleY:1.076,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-6.2,skewY:173.7,x:155.8,y:183.4,regY:-18.8,scaleX:1.148,scaleY:1.148,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-6.2,skewY:173.7,x:156.8,y:189.3,regY:-18.8,scaleX:1.135,scaleY:1.135,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-6.2,skewY:173.7,x:157.1,y:191.4,regY:-18.8,scaleX:1.135,scaleY:1.135,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-4.2,skewY:175.7,x:154.1,y:198,regY:-18.8,scaleX:1.128,scaleY:1.128,mode:"single",rotation:0}}]},4).to({state:[{t:this.instance_26,p:{regX:8.7,skewX:-2.4,skewY:177.5,x:151.1,y:204.9,regY:-18.8,scaleX:1.128,scaleY:1.128,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.7,skewX:-2.4,skewY:177.5,x:152.1,y:212.8,regY:-18.8,scaleX:1.114,scaleY:1.114,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.7,skewX:-0.6,skewY:179.3,x:151.4,y:219.6,regY:-18.8,scaleX:1.09,scaleY:1.09,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.7,skewX:1,skewY:-178.9,x:150.3,y:225.3,regY:-18.8,scaleX:1.069,scaleY:1.069,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-0.4,skewY:179.5,x:153.8,y:217.2,regY:-18.8,scaleX:1.053,scaleY:1.053,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.6,skewX:-0.4,skewY:179.5,x:157.6,y:210.1,regY:-18.8,scaleX:1.025,scaleY:1.025,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.4,skewX:-1.2,skewY:178.7,x:164.4,y:193.5,regY:-19,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:0,skewY:180,x:163.6,y:183.3,regY:-18.9,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:0,skewY:180,x:163.7,y:181.2,regY:-18.9,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},1).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:0,skewY:180,x:163.3,y:184.4,regY:-18.9,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},2).to({state:[{t:this.instance_26,p:{regX:8.5,skewX:0,skewY:180,x:163.3,y:185.8,regY:-18.9,scaleX:1,scaleY:1,mode:"single",rotation:0}}]},1).wait(5));

	// CUP_23_leg_COMP
	this.instance_29 = new lib.CUP_34_leg_COMP("single",0);
	this.instance_29.setTransform(121.3,185.8,1,1,0,0,0,8.5,-18.9);

	this.instance_30 = new lib.CUP_34DOWN_arm_02("single",3);
	this.instance_30.setTransform(69.1,144.9,0.999,0.999,1,0,0,12.6,-20.3);

	this.instance_31 = new lib.CUP_23_leg_COMP("synched",0);
	this.instance_31.setTransform(99.7,220.2,0.939,0.939,0,10.8,-169.1,8.5,-18.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29,p:{rotation:0,x:121.3,y:185.8,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]}).to({state:[{t:this.instance_29,p:{rotation:-1.9,x:123.4,y:193,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-6,x:130.5,y:205.1,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:-6,x:130.5,y:205.1,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:-7.5,x:132.5,y:209.9,regY:-19,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-5.7,x:132.3,y:209.1,regY:-19,scaleX:0.999,scaleY:0.999,regX:8.5,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:31.2,x:112.3,y:169.1,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.5,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:33,x:112.7,y:161.1,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.5,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:34,x:112.4,y:163,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:36.5,x:113.9,y:184.3,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:36.5,x:114.4,y:186.1,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:36.5,x:117,y:182.4,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:36.5,x:118.4,y:180.9,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:36.5,x:118.6,y:185.1,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"synched",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:36.5,x:119.7,y:184.1,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:32,x:121.2,y:191.5,regY:-19,scaleX:0.997,scaleY:0.997,regX:8.4,mode:"single",skewX:0,skewY:0}}]},5).to({state:[{t:this.instance_30,p:{scaleX:0.999,scaleY:0.999,rotation:1,skewX:0,skewY:0,x:69.1,y:144.9,startPosition:3,regY:-20.3}}]},2).to({state:[{t:this.instance_30,p:{scaleX:1.079,scaleY:1,rotation:0,skewX:-5.9,skewY:-5.2,x:64.8,y:154.2,startPosition:1,regY:-20.3}}]},1).to({state:[{t:this.instance_30,p:{scaleX:1,scaleY:1,rotation:-8.4,skewX:0,skewY:0,x:64.8,y:157.8,startPosition:1,regY:-20.2}}]},1).to({state:[{t:this.instance_30,p:{scaleX:1.004,scaleY:1,rotation:0,skewX:-5.2,skewY:-10.8,x:61.2,y:158,startPosition:1,regY:-20.3}}]},7).to({state:[]},2).to({state:[{t:this.instance_29,p:{rotation:0,x:151.5,y:218.2,regY:-18.9,scaleX:0.968,scaleY:0.968,regX:8.5,mode:"synched",skewX:0.3,skewY:-179.6}}]},2).to({state:[{t:this.instance_29,p:{rotation:0,x:126.9,y:188.4,regY:-18.8,scaleX:0.968,scaleY:0.968,regX:8.6,mode:"synched",skewX:-4.9,skewY:175}}]},1).to({state:[{t:this.instance_29,p:{rotation:0,x:126,y:182.6,regY:-18.9,scaleX:0.967,scaleY:0.967,regX:8.6,mode:"single",skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_29,p:{rotation:0,x:125,y:186,regY:-18.9,scaleX:0.967,scaleY:0.967,regX:8.6,mode:"single",skewX:-6.4,skewY:173.5}}]},3).to({state:[{t:this.instance_29,p:{rotation:0,x:124.6,y:187.2,regY:-18.9,scaleX:0.967,scaleY:0.967,regX:8.6,mode:"single",skewX:-6.4,skewY:173.5}}]},1).to({state:[{t:this.instance_29,p:{rotation:0,x:124.6,y:186.6,regY:-18.9,scaleX:0.967,scaleY:0.967,regX:8.6,mode:"single",skewX:-6.4,skewY:173.5}}]},2).to({state:[{t:this.instance_29,p:{rotation:0,x:125,y:186,regY:-18.9,scaleX:0.967,scaleY:0.967,regX:8.6,mode:"single",skewX:-6.4,skewY:173.5}}]},11).to({state:[]},3).to({state:[{t:this.instance_29,p:{rotation:0,x:117,y:198.4,regY:-18.8,scaleX:0.967,scaleY:0.967,regX:8.5,mode:"single",skewX:-4.9,skewY:175}}]},45).to({state:[{t:this.instance_31,p:{regX:8.5,skewX:10.8,skewY:-169.1,x:99.7,y:220.2,regY:-18.8}}]},1).to({state:[{t:this.instance_31,p:{regX:8.6,skewX:12.8,skewY:-167.1,x:96.7,y:224.5,regY:-18.8}}]},1).to({state:[{t:this.instance_31,p:{regX:8.6,skewX:12.8,skewY:-167.1,x:96.9,y:225.3,regY:-18.8}}]},1).to({state:[{t:this.instance_31,p:{regX:8.5,skewX:10.8,skewY:-169.1,x:102,y:221.1,regY:-18.9}}]},3).to({state:[]},2).to({state:[{t:this.instance_29,p:{rotation:-4.2,x:112.8,y:208,regY:-18.9,scaleX:1.076,scaleY:1.076,regX:8.6,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:-6.2,x:108,y:188.6,regY:-18.8,scaleX:1.148,scaleY:1.148,regX:8.6,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:-6.2,x:109.6,y:194.5,regY:-18.8,scaleX:1.135,scaleY:1.135,regX:8.6,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-6.2,x:109.9,y:196.6,regY:-18.8,scaleX:1.135,scaleY:1.135,regX:8.6,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:-4.2,x:107.1,y:201.5,regY:-18.8,scaleX:1.128,scaleY:1.128,regX:8.6,mode:"single",skewX:0,skewY:0}}]},4).to({state:[{t:this.instance_29,p:{rotation:-2.4,x:104.1,y:207,regY:-18.8,scaleX:1.128,scaleY:1.128,regX:8.6,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-2.4,x:105.7,y:215,regY:-18.7,scaleX:1.114,scaleY:1.114,regX:8.6,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:-0.6,x:105.9,y:220.2,regY:-18.8,scaleX:1.09,scaleY:1.09,regX:8.6,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:1,x:105.7,y:224.5,regY:-18.8,scaleX:1.069,scaleY:1.069,regX:8.6,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-0.4,x:109.6,y:217.6,regY:-18.7,scaleX:1.053,scaleY:1.053,regX:8.4,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-0.4,x:114.6,y:210.5,regY:-18.7,scaleX:1.025,scaleY:1.025,regX:8.5,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:-1.2,x:122.5,y:194.5,regY:-18.9,scaleX:1,scaleY:1,regX:8.6,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:0,x:121.6,y:183.3,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:0,x:121.7,y:181.2,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},1).to({state:[{t:this.instance_29,p:{rotation:0,x:121.3,y:184.4,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_29,p:{rotation:0,x:121.3,y:185.8,regY:-18.9,scaleX:1,scaleY:1,regX:8.5,mode:"single",skewX:0,skewY:0}}]},1).wait(5));

	// CUP_23_leg_COMP
	this.instance_32 = new lib.CUP_34_arm_01("single",1);
	this.instance_32.setTransform(59.3,109,1,1,0,0,0,18.4,-23.9);

	this.instance_33 = new lib.CUP_34DOWN_arm_01("single",2);
	this.instance_33.setTransform(228.6,145.6,1,1,0,14.8,16.5,-14.9,-20.1);

	this.instance_34 = new lib.CUP_34DOWN_arm_02("single",2);
	this.instance_34.setTransform(174.3,165.4,0.939,0.939,0,10.8,-169.1,12.5,-20.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#526139").s().p("AgcCCIAAgBQgOgDgOgGIgBAAQgGgDgGgFQgKgLgIgNIgJgTQgEgJABgNQAOAPAVALQAsAWAYgiIAEgDQAAgEACgCIAAgBIAIgKQAKgLAMgfQAIgZABgNIAEgDQANgPAHgrIAAgBQADgQABgMIAHAEQANAIACAUIAAAGIAAAAIABADIAAAVIAAACIgCAQIABAAIgLAuIAAABQgHAWgKATQgKAWgMAQIgBAAIAAABQgLAGAAAFIAAADQgHAKgKAIIAAgBQgEADgEACIAAABQgHAEgFAFQgMAGgNAAIgDAAg");
	this.shape_42.setTransform(1.7,176.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#B3E4E6").s().p("AgTDQQgagMgPgXIgBAAQABgEgBgDQgBgDgDAAIgCAAIgDgIIAAAAIgTgnIAAgBQgUgxAKhdQAKhnAogvQAWgbAbgJQAdgGAIARQAEAIAAAKIAAAAQABADAAADIgBABIABACQACAEgEAHIgCAJIgPACQgXAFgVAQQgDACgCAFIgBAAQAHACAKgBQAPgDAIABQAEgCAFAAQAJgDAIgBIADACIADgBQAPACAFAOQAFAMAAAVQAAANgCAJQgKgCgNABIgmAEIgHAFIgQAQIgIAIIACAAIA/gHQAOgBAKADQASAKAHAOQAIAMgEgCIABABIAAAIQACAIAAAOIABgBIgEAcQgFAbgGALIgCgOIgHgWQgCgGgEgGQgEgEgBgEQgCgDgDgBQgBAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAABQAFASADAWIADAXQABAIACAFQgCAFACAEQAAAGgHAUQgJAZgGAJIgBABIgHAIIAAACQgDACgDAHQgLAMgPAAQgLAAgPgIgABTg2QAEgQAAgTQAAgcgGgQQgIgTgTgEQADgPABgKIACgCQAFgCAOAJQANAKADAIIAFAOQAGAQgFAjQgDAfgIANIgHgFg");
	this.shape_43.setTransform(-1.9,160.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#758A51").s().p("AiAD+QAGgOAEgXIAJgmIABgSIABgGQAfgGApg3IAUgcQAXgsAKghIAXhSQAGgWABgQIAAgDQABhHgHhZQgLgGgBgEIABgCIAAgCIAIgCQAFAAABACQAAAHAYAJQAUAIAGABQASADAbgDIAPgBIAEgIIgBAJQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAIAAABQgCAMABACQgBAbgCAUQABARAAARIABAlIgBANQABARgEAaQgDA9g/CAQgYAxguA5QhHBVg/AHIgcAKIgRAGQAVgeALgbgACZkBIAAADIABgHIgBAEg");
	this.shape_44.setTransform(24.1,152.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AidFeQgQgDgOgGIAAAAQgJgEgIgHQgLgLgIgPQgGgKgFgLQgIgVAEgZIACgNQgFgHgCgIIAAgBIgUgmIgBgBQgWg2ALhqQANh0Atg1QAbghAjgKQAngLALAdIAEAPQALgKAVAPQASAOADAKIAAABIAFAPQAIATgFAuQgGAsgMAQIAJAZIADAMQAEgCACABIANAJQARALAFAdIAAAFQAZgXASgRQASgVAMgZQAZgyARgyQASg3gCgtIgBhmIgBgXIgBgLQAAgFACgFQADgFAEgDIAAACQAAAEALAGQAHBZAABHIAAADQgBAQgGAWIgYBSQgJAigaArIgTAbQgqA3gdAGIgBAGIgBATIgIAmQgFAWgFAOQgLAcgWAeIASgHIAbgJQA9gHBJhWQAvg5AYgwQA+iBADg8QAFgagCgSIABgNIAAglQAAgRgCgRQADgTAAgbQAAgDACgLQADgCACABQADAAABAFQADATABAUQACADAAAKQACANgBAWQABAsgBAsIgGAXIgTBMIABgGIgHATQgWA5ggA4IgLASQhvC2iRAMIgFgBQgIALgLALIghAiQgKAEgJAAIgIgBgAjbEIIAJAUQAIANAKAKQAGAGAHADIAAAAQAOAFAOAEIAAAAQAOABAQgHQAFgFAHgDIAAgBQAFgCAEgEIAAABQAJgHAIgLIgBgDQAAgEALgHIABgBIAAAAQAMgPAKgXQAKgSAHgZIAAgBIALgtIgBgBIADgPIAAgDIgBgUIgBgEIABAAIgBgFQgCgUgNgIIgHgFQAAANgDAPIAAABQgIAsgNAOIgDAEQgCANgIAZQgMAggKAMIgHAKIgBABQgBABgBAFIgDADQgbAigsgXQgVgKgOgPQAAAMADAJgAidiyQgdAJgXAbQgnAvgKBlQgKBfATAxIABABIATAnIAAAAIACAIIACAAQADAAABADQACADgBAEIABAAQAOAXAaAMQAjARATgVQAEgHACgCIABgCIAGgIIABgBQAHgJAJgZQAHgUgBgGQgBgEABgFQgCgFgBgIIgDgXQgCgWgFgSQAAgBAAAAQABAAAAAAQAAAAABgBQAAAAAAAAQAEABABADQACAEAEAEQAEAGACAGIAGAWIACAOQAHgLAFgbIADgcIAAABQAAgOgDgIIAAgIIAAgBQADACgIgOQgHgOgSgKQgJgBgOABIhBAFIgDAAIAIgGIATgQIAGgFIAmgEQANgBALACQACgJAAgNQAAgVgFgMQgGgOgOgCIgEABIgDgCQgIABgJADQgEAAgEACQgJgBgRADQgKABgGgCIAAAAQACgFAEgCQAWgQAYgFIAOgCIADgJQADgHgBgEIgBgCIAAgBQABgDgBgDIAAAAQgBgKgDgIQgGgMgRAAQgGAAgIABgAhhiUIgDACQAAAKgDAPQATAEAHATQAGAQABAcQAAATgEAQIAHAFQAHgNAEgfQAEgjgGgQIgEgOQgDgIgOgKQgLgHgFAAIgCAAgAD+kuIABgDIgBAGIAAgDg");
	this.shape_45.setTransform(14,157);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B3E4E6").s().p("AhcAXIACgNQAIghAhgOQAMgEANgBQAcgDAeACIADADQAdAPAbAUQgrAOgyAHQgxAGgrAXQgBgLABgLg");
	this.shape_46.setTransform(33,197.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#526139").s().p("AhTAtQgQghgEgjQAKgNAPgKQAigYAsgDIAcgCIAHABIABABQACACAFAAIACAAQAGAEAGAFQAfAcAQAoIgOgHIABgCQADgFgLgCQgGgCgGABQgagEgZAAQgWABgSANQgVANgLAXQgFAOgDAMIgBAQQgNgPgJgRg");
	this.shape_47.setTransform(28.2,192.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373D48").s().p("AAAAAIAAAAIAAABIAAgBg");
	this.shape_48.setTransform(39.5,154.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#758A51").s().p("AhjDQIgCAAQAAAAgBAAQAAgBgBAAQAAABgBAAQgBAAAAAAQgDgYAFgtQAJhNAdhKQAfhOAqhBIALgPQAQgVASgTIAZAmQAGAKAUAxIADAIIABACQhXB/gPBqIgBAAQgDAdACAdQgNABgPAEIgrAKIggAIIAAgDgABehYIABgCIgBgBIAAADg");
	this.shape_49.setTransform(30,163.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AhOEzQgOgLgNgRQgYglgKgqQgFgPABgOIAEgJIABAAIAQgPIgBgDIAAgBIAAAAQgIgZAHhBQAJhNAfhOQAfhRAuhDIAAgBIABAAIgCgBIAIgKIAAABQATgaAWgYIALARQgSATgQAWIgLAPQgqBBgfBNQgdBNgJBKQgFAuADAYQAAAAABgBQABAAAAAAQABAAAAAAQABAAAAABIACAAIAAADIAggIIArgLQAPgDANgBQgCgdADgdIABAAQAPhoBXiCIAIATQhJBggSB6IAAAAQgDAbABAbIAGAGQANAFALAKQAnAlAQA0IAlAcIgWAJQgbgUgdgPIgDgDQgegCgeADQgLABgMAFQghANgIAjIgCANQgCALACAMIgPAIIAAgFgAgTB/QgsADgiAYQgPAKgKAOQAEAlAQAhQAIARANAOIABgQQADgMAGgNQAKgYAWgPQASgMAWgBQAYAAAaADQAGAAAHABQALADgDAEIgCABIABABIAOAJQgQgqgfgbQgGgGgHgDIgCAAQgEAAgDgDIAAgBIgHgBIgcACg");
	this.shape_50.setTransform(30.1,172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:59.3,y:109,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:1}}]}).to({state:[{t:this.instance_32,p:{scaleY:1.039,skewX:0.5,skewY:-1.9,x:58.7,y:118.4,startPosition:96,regY:-23.9,rotation:0,regX:18.4,scaleX:1}}]},2).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:60.7,y:135.2,startPosition:97,regY:-24,rotation:-6,regX:18.4,scaleX:1}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:61.3,y:139.6,startPosition:92,regY:-24,rotation:-7.2,regX:18.4,scaleX:1}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.999,skewX:0,skewY:0,x:59.9,y:134.5,startPosition:92,regY:-24,rotation:-3.2,regX:18.3,scaleX:0.999}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.999,skewX:-2.2,skewY:-7.4,x:60.6,y:129.9,startPosition:92,regY:-24.1,rotation:0,regX:18.4,scaleX:1.003}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:73.1,y:75.8,startPosition:93,regY:-24,rotation:19,regX:18.4,scaleX:0.998}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:76.3,y:66.6,startPosition:93,regY:-24,rotation:20.8,regX:18.3,scaleX:0.998}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:77.7,y:67.7,startPosition:93,regY:-24.1,rotation:21.8,regX:18.2,scaleX:0.998}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:83.4,y:87.8,startPosition:93,regY:-24,rotation:24.3,regX:18.2,scaleX:0.998}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:83.9,y:89.5,startPosition:93,regY:-24,rotation:24.3,regX:18.2,scaleX:0.998}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:86.5,y:85.9,startPosition:93,regY:-24,rotation:24.3,regX:18.2,scaleX:0.998}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:87.9,y:84.4,startPosition:93,regY:-24,rotation:24.3,regX:18.2,scaleX:0.998}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:88.1,y:88.5,startPosition:93,regY:-24,rotation:24.3,regX:18.2,scaleX:0.998}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:89.2,y:87.5,startPosition:93,regY:-24,rotation:24.3,regX:18.2,scaleX:0.998}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.998,skewX:0,skewY:0,x:86.3,y:97.8,startPosition:98,regY:-24,rotation:19.8,regX:18.3,scaleX:0.998}}]},5).to({state:[]},2).to({state:[{t:this.instance_33}]},13).to({state:[{t:this.instance_32,p:{scaleY:0.968,skewX:-4.9,skewY:175,x:180.2,y:109.1,startPosition:94,regY:-23.8,rotation:0,regX:18.4,scaleX:0.968}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-3.2,skewY:177,x:178,y:101.9,startPosition:94,regY:-23.8,rotation:0,regX:18.4,scaleX:1.001}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-3.2,skewY:175.4,x:177,y:105.3,startPosition:94,regY:-23.9,rotation:0,regX:18.4,scaleX:0.968}}]},3).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-3.2,skewY:175.4,x:176.6,y:106.5,startPosition:94,regY:-23.9,rotation:0,regX:18.4,scaleX:0.968}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-3.2,skewY:175.4,x:176.6,y:105.9,startPosition:94,regY:-23.9,rotation:0,regX:18.4,scaleX:0.968}}]},2).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-3.2,skewY:175.4,x:177,y:105.3,startPosition:94,regY:-23.9,rotation:0,regX:18.4,scaleX:0.968}}]},11).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-4.2,skewY:174.4,x:175.9,y:105.1,startPosition:100,regY:-23.8,rotation:0,regX:18.3,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-5.2,skewY:173.2,x:174.6,y:104.9,startPosition:101,regY:-24,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-3.2,skewY:175.4,x:171.3,y:109.7,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:-1.7,skewY:176.9,x:172,y:109.1,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:-0.5,skewY:178,x:172.6,y:108.6,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:0,skewY:178.9,x:173,y:108.3,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:0.8,skewY:179.5,x:173.4,y:107.9,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1,skewY:179.9,x:173.5,y:107.9,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1.3,skewY:179.9,x:173.6,y:107.8,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:2.8,skewY:-178.4,x:174.4,y:112.3,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:4.3,skewY:-177.1,x:175.2,y:116.1,startPosition:1,regY:-23.9,rotation:0,regX:18.2,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:5.3,skewY:-175.9,x:175.7,y:119.2,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:6.3,skewY:-174.9,x:176,y:121.6,startPosition:1,regY:-24,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:7,skewY:-174.4,x:176.2,y:123.4,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:7.3,skewY:-173.9,x:176.5,y:124.5,startPosition:1,regY:-23.8,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:7.5,skewY:-173.7,x:176.5,y:124.8,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:5.8,skewY:-175.4,x:175.8,y:120.3,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:4.3,skewY:-176.9,x:175.1,y:116.4,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:3.3,skewY:-178.1,x:174.6,y:113.3,startPosition:1,regY:-24,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:2.3,skewY:-178.9,x:174.2,y:111,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1.8,skewY:-179.6,x:173.9,y:109.2,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1.3,skewY:-179.9,x:173.7,y:108.3,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1.3,skewY:179.9,x:173.6,y:107.8,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:0,skewY:179,x:173.1,y:108.5,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:-0.5,skewY:178,x:172.5,y:109,startPosition:1,regY:-24,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:-1.2,skewY:177.2,x:172.1,y:109.6,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-1.9,skewY:176.7,x:171.7,y:109.9,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-2.2,skewY:176.2,x:171.5,y:110.1,startPosition:1,regY:-24,rotation:0,regX:18.3,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-2.4,skewY:176,x:171.4,y:110.4,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.967,skewX:-2.7,skewY:175.9,x:171.3,y:110.4,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:-1.4,skewY:177,x:172.1,y:109.8,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:-0.7,skewY:178,x:172.6,y:109.1,startPosition:1,regY:-24,rotation:0,regX:18.4,scaleX:0.967}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:0,skewY:178.7,x:173,y:108.7,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:0.5,skewY:179.2,x:173.3,y:108.4,startPosition:1,regY:-23.8,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:0.8,skewY:179.7,x:173.5,y:108,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1,skewY:180,x:173.6,y:107.9,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:1.3,skewY:179.9,x:173.6,y:107.8,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:3,skewY:-178.1,x:174.4,y:112.6,startPosition:1,regY:-23.8,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:4.6,skewY:-176.6,x:175,y:116.6,startPosition:1,regY:-24,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:6,skewY:-175.4,x:175.6,y:120.1,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:7,skewY:-174.4,x:176,y:122.6,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:7.8,skewY:-173.6,x:176.2,y:124.5,startPosition:1,regY:-23.9,rotation:0,regX:18.3,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.965,skewX:8.1,skewY:-173.1,x:176.3,y:125.7,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:8.3,skewY:-173,x:176.5,y:126,startPosition:1,regY:-23.8,rotation:0,regX:18.4,scaleX:0.966}}]},1).to({state:[{t:this.instance_32,p:{scaleY:0.966,skewX:9.8,skewY:-171.4,x:175.7,y:135.5,startPosition:102,regY:-23.9,rotation:0,regX:18.4,scaleX:0.966}}]},4).to({state:[{t:this.instance_34,p:{regY:-20.3,skewX:10.8,skewY:-169.1,x:174.3,y:165.4,regX:12.5,scaleX:0.939,scaleY:0.939}}]},1).to({state:[{t:this.instance_34,p:{regY:-20.2,skewX:12.8,skewY:-167.1,x:173.3,y:172.5,regX:12.5,scaleX:0.939,scaleY:0.939}}]},1).to({state:[{t:this.instance_34,p:{regY:-20.2,skewX:12.8,skewY:-167.1,x:173.5,y:173.3,regX:12.5,scaleX:0.939,scaleY:0.939}}]},1).to({state:[{t:this.instance_34,p:{regY:-20.2,skewX:12.7,skewY:-158.6,x:175.8,y:166.2,regX:12.6,scaleX:0.952,scaleY:0.936}}]},3).to({state:[]},2).to({state:[{t:this.instance_32,p:{scaleY:1.073,skewX:0,skewY:0,x:40,y:130.6,startPosition:95,regY:-23.8,rotation:9.7,regX:18.3,scaleX:1.073}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1.148,skewX:0,skewY:0,x:27.5,y:108.8,startPosition:95,regY:-23.8,rotation:0.4,regX:18.4,scaleX:1.148}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1.135,skewX:0,skewY:0,x:30.1,y:115.5,startPosition:95,regY:-23.8,rotation:-6.2,regX:18.4,scaleX:1.135}}]},2).to({state:[{t:this.instance_32,p:{scaleY:1.135,skewX:0,skewY:0,x:30.3,y:117.6,startPosition:95,regY:-23.8,rotation:-9.5,regX:18.4,scaleX:1.135}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1.214,skewX:-7.5,skewY:-20.1,x:30.4,y:125.1,startPosition:95,regY:-23.9,rotation:0,regX:18.4,scaleX:1.1}}]},4).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.instance_32,p:{scaleY:1.113,skewX:0,skewY:0,x:38.3,y:137.6,startPosition:0,regY:-23.9,rotation:-25.2,regX:18.4,scaleX:1.113}}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.instance_32,p:{scaleY:1.219,skewX:1.9,skewY:-0.6,x:41.3,y:144.2,startPosition:1,regY:-24,rotation:0,regX:18.4,scaleX:1.069}}]},2).to({state:[{t:this.instance_32,p:{scaleY:1.137,skewX:0,skewY:0,x:44.1,y:139.4,startPosition:1,regY:-23.8,rotation:-0.4,regX:18.4,scaleX:1.053}}]},2).to({state:[{t:this.instance_32,p:{scaleY:1.025,skewX:0,skewY:0,x:50.4,y:132.3,startPosition:1,regY:-23.8,rotation:-0.4,regX:18.4,scaleX:1.025}}]},2).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:58.6,y:119,startPosition:1,regY:-24,rotation:-1.2,regX:18.3,scaleX:1}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:59.6,y:106.4,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:1}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:59.7,y:104.3,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:1}}]},1).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:59.3,y:107.6,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:1}}]},2).to({state:[{t:this.instance_32,p:{scaleY:1,skewX:0,skewY:0,x:59.3,y:109,startPosition:1,regY:-23.9,rotation:0,regX:18.4,scaleX:1}}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,-0.9,245.3,231.9);


(lib.Cup_Idle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// audio
	this.instance = new lib.CUP_34_arm_01("single",57);
	this.instance.setTransform(61.8,106.7,0.999,0.999,1,0,0,18.4,-24);

	this.instance_1 = new lib.CUP_34_arm_01copygg("single",58);
	this.instance_1.setTransform(65.1,91.4,0.999,0.999,5.8,0,0,18.4,-24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{regY:-24,rotation:1,x:61.8,y:106.7,startPosition:57,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},97).to({state:[{t:this.instance_1,p:{rotation:5.8,x:65.1,y:91.4,startPosition:58,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:7,x:65.9,y:86.1,startPosition:55,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.03,scaleY:0.979,skewX:8.6,skewY:7,regY:-24}}]},2).to({state:[{t:this.instance_1,p:{rotation:7,x:65.7,y:88.2,startPosition:55,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.03,scaleY:0.979,skewX:8.6,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:7,x:65.7,y:88.2,startPosition:55,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.03,scaleY:0.979,skewX:8.6,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:7,x:65.7,y:88.2,startPosition:55,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.03,scaleY:0.979,skewX:8.6,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.014,scaleY:0.989,skewX:7.8,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.03,scaleY:0.979,skewX:8.6,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.014,scaleY:0.989,skewX:7.8,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.03,scaleY:0.979,skewX:8.6,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.014,scaleY:0.989,skewX:7.8,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.022,scaleY:0.983,skewX:8.1,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:0,x:65.7,y:88.2,startPosition:55,scaleX:1.014,scaleY:0.989,skewX:7.8,skewY:7,regY:-24}}]},1).to({state:[{t:this.instance_1,p:{rotation:6,x:66.5,y:91.9,startPosition:61,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},7).to({state:[{t:this.instance,p:{regY:-24.1,rotation:-0.2,x:57.9,y:112.6,startPosition:59,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance_1,p:{rotation:-2.8,x:54.3,y:126.6,startPosition:56,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24.1}}]},1).to({state:[{t:this.instance_1,p:{rotation:-0.5,x:54.3,y:125.2,startPosition:56,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0,regY:-24}}]},2).to({state:[{t:this.instance,p:{regY:-24.1,rotation:-1.5,x:55.2,y:122.8,startPosition:60,scaleX:0.999,scaleY:0.999,skewX:0,skewY:0}}]},8).to({state:[{t:this.instance,p:{regY:-23.9,rotation:0,x:55.5,y:125.2,startPosition:60,scaleX:0.998,scaleY:1.015,skewX:17.9,skewY:7.3}}]},2).to({state:[{t:this.instance,p:{regY:-24.1,rotation:0,x:58.7,y:119.7,startPosition:60,scaleX:0.919,scaleY:1.032,skewX:40,skewY:21.4}}]},2).to({state:[]},1).wait(101));

	// Layer 19
	this.instance_2 = new lib.CupHeadclipIDLE("synched",0);
	this.instance_2.setTransform(138.1,68.9,1,1,0,0,0,138,69);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(90).to({rotation:-1.1,x:136.9,y:71.8,startPosition:90},0).wait(2).to({rotation:-4.3,x:133,y:80,startPosition:92},0).wait(1).to({rotation:-5.6,x:131.8,y:84.3,startPosition:93},0).wait(3).to({rotation:-4.4,x:132.5,y:82.9,startPosition:96},0).wait(1).to({regX:138.1,scaleX:1,scaleY:1,rotation:1,x:141.2,y:68,startPosition:97},0).wait(1).to({rotation:5.8,x:147.5,y:59.5,startPosition:98},0).wait(1).to({rotation:7,x:148.9,y:56,startPosition:99},0).wait(2).to({x:148.7,y:58.1,startPosition:101},0).wait(20).to({rotation:6,x:147.9,y:60.3,startPosition:121},0).wait(2).to({rotation:-0.1,x:136.3,y:72.4,startPosition:123},0).wait(1).to({rotation:-2.7,x:131,y:82.8,startPosition:124},0).wait(2).to({y:81.4,startPosition:126},0).wait(8).to({rotation:-1.4,x:132.7,y:83.2,startPosition:134},0).wait(2).to({regX:138,rotation:-0.3,x:133.6,y:85.7,startPosition:136},0).wait(2).to({regX:138.1,regY:69.1,rotation:0.8,x:135.5,y:81.9,startPosition:138},0).wait(1).to({rotation:0.5,x:136,y:79,startPosition:139},0).wait(1).to({regX:138,rotation:0.3,x:136.5,y:76.1,startPosition:140},0).wait(1).to({regX:138.1,scaleX:1,scaleY:1,x:137.1,y:73.1,startPosition:141},0).wait(1).to({rotation:0,x:137.6,y:70.2,startPosition:142},0).wait(1).to({regX:138,regY:69,x:138.1,y:67.3,startPosition:143},0).wait(3).to({y:68.5,startPosition:146},0).wait(2).to({y:68.9,startPosition:148},0).wait(92));

	// CUP_23_eye_02
	this.instance_3 = new lib.CUP_34_arm_02copy2("single",1);
	this.instance_3.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(90).to({rotation:-1.1,x:226.4,y:120.8},0).wait(2).to({rotation:-4.3,x:225.1,y:124},0).wait(1).to({rotation:-5.6,x:224.8,y:126.1},0).wait(3).to({regX:-12.9,rotation:-4.4,y:126.7},0).wait(1).to({regX:-13,scaleX:1,scaleY:1,rotation:1,x:228.6,y:120.5},0).wait(1).to({rotation:5.8,x:230.2,y:119.2},0).wait(1).to({rotation:7,y:117.5},0).wait(2).to({x:230.1,y:119.6},0).wait(20).to({regX:-12.9,rotation:6,x:230.4,y:120.3},0).wait(2).to({regX:-13,regY:-22.3,rotation:-0.1,x:224.8,y:122.9},0).wait(1).to({regY:-22.2,rotation:-2.7,x:221.6,y:129.4},0).wait(2).to({y:128},0).wait(8).to({rotation:-1.4,x:222.1,y:131.8},0).wait(2).to({regY:-22.3,rotation:-0.3,x:222.3,y:135.8},0).wait(2).to({rotation:0.8,x:223,y:134.1},0).wait(1).to({regY:-22.4,rotation:0.5,x:223.7,y:130.9},0).wait(1).to({regY:-22.3,rotation:0.3,x:224.4,y:127.8},0).wait(1).to({scaleX:1,scaleY:1,x:225.1,y:124.7},0).wait(1).to({regY:-22.4,rotation:0,x:225.8,y:121.5},0).wait(1).to({regY:-22.2,x:226.5,y:118.4},0).wait(3).to({y:119.6},0).wait(2).to({y:120},0).wait(92));

	// CUP_23_eye_01
	this.instance_4 = new lib.CUP_34_body("synched",0);
	this.instance_4.setTransform(137.1,177.2,1,1,0,0,0,-1.5,82.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(90).to({rotation:-1.1,x:138.4,y:180},0).wait(2).to({regY:82.5,rotation:-4.3,x:140.6,y:188},0).wait(1).to({rotation:-5.6,x:141.8,y:192.1},0).wait(3).to({rotation:-4.4,x:140.2,y:190.8},0).wait(1).to({regX:-1.5,regY:82.4,scaleX:1,scaleY:1,rotation:1,x:138.3,y:176.1},0).wait(1).to({regY:82.5,rotation:5.8,x:135.5,y:167.2},0).wait(1).to({rotation:7,x:134.5,y:163.3},0).wait(2).to({x:134.4,y:165.4},0).wait(20).to({rotation:6,x:135.4,y:167.8},0).wait(2).to({rotation:-0.1,x:135.8,y:180.6},0).wait(1).to({rotation:-2.7,x:135.2,y:191},0).wait(2).to({y:189.6},0).wait(8).to({regY:82.6,rotation:-1.4,x:134.4,y:191.5},0).wait(2).to({regY:82.5,rotation:-0.3,x:133.6,y:193.8},0).wait(2).to({regY:82.6,rotation:0.8,x:132.8,y:190.2},0).wait(1).to({rotation:0.5,x:133.7,y:187.3},0).wait(1).to({regX:-1.4,regY:82.5,rotation:0.3,x:134.6,y:184.3},0).wait(1).to({regX:-1.5,regY:82.6,scaleX:1,scaleY:1,x:135.3,y:181.4},0).wait(1).to({regY:82.5,rotation:0,x:136.2,y:178.5},0).wait(1).to({regX:-1.4,regY:82.4,x:137.1,y:175.6},0).wait(3).to({y:176.8},0).wait(2).to({y:177.2},0).wait(92));

	// CUP_23_eye_02
	this.instance_5 = new lib.CUP_34_arm_02("single",1);
	this.instance_5.setTransform(226.5,120,1,1,0,0,0,-13.1,-22.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90).to({rotation:-1.1,x:226.4,y:120.8},0).wait(2).to({rotation:-4.3,x:225.1,y:124},0).wait(1).to({rotation:-5.6,x:224.8,y:126.1},0).wait(3).to({regX:-12.9,rotation:-4.4,y:126.7},0).wait(1).to({regX:-13,scaleX:1,scaleY:1,rotation:1,x:228.6,y:120.5},0).wait(1).to({rotation:5.8,x:230.2,y:119.2},0).wait(1).to({rotation:7,y:117.5},0).wait(2).to({x:230.1,y:119.6},0).wait(20).to({regX:-12.9,rotation:6,x:230.4,y:120.3},0).wait(2).to({regX:-13,regY:-22.3,rotation:-0.1,x:224.8,y:122.9},0).wait(1).to({regY:-22.2,rotation:-2.7,x:221.6,y:129.4},0).wait(2).to({y:128},0).wait(8).to({rotation:-1.4,x:222.1,y:131.8},0).wait(2).to({regY:-22.3,rotation:-0.3,x:222.3,y:135.8},0).wait(2).to({rotation:0.8,x:223,y:134.1},0).wait(1).to({regY:-22.4,rotation:0.5,x:223.7,y:130.9},0).wait(1).to({regY:-22.3,rotation:0.3,x:224.4,y:127.8},0).wait(1).to({scaleX:1,scaleY:1,x:225.1,y:124.7},0).wait(1).to({regY:-22.4,rotation:0,x:225.8,y:121.5},0).wait(1).to({regY:-22.2,x:226.5,y:118.4},0).wait(3).to({y:119.6},0).wait(2).to({y:120},0).wait(92));

	// CUP_23_body
	this.instance_6 = new lib.CUP_34_handle("synched",0);
	this.instance_6.setTransform(227.1,106.7,1,1,0,0,0,-17.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(90).to({rotation:-1.1,x:226.7,y:107.5},0).wait(2).to({rotation:-4.3,x:224.7,y:110.6},0).wait(1).to({rotation:-5.6,x:224.2,y:112.8},0).wait(3).to({rotation:-4.4,y:113.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:1,x:229.4,y:107.3},0).wait(1).to({rotation:5.8,x:232.1,y:106},0).wait(1).to({rotation:7,x:232.5,y:104.4},0).wait(2).to({x:232.3,y:106.5},0).wait(20).to({regX:-17.3,regY:0.9,rotation:6,y:107.2},0).wait(2).to({regX:-17.4,regY:0.7,rotation:-0.1,x:225.3,y:109.7},0).wait(1).to({regX:-17.3,regY:0.8,rotation:-2.7,x:221.6,y:116.1},0).wait(2).to({y:114.7},0).wait(8).to({rotation:-1.4,x:222.5,y:118.5},0).wait(2).to({regX:-17.4,rotation:-0.3,x:222.8,y:122.5},0).wait(2).to({regX:-17.3,regY:0.7,rotation:0.8,x:223.9,y:120.8},0).wait(1).to({rotation:0.5,x:224.5,y:117.6},0).wait(1).to({rotation:0.3,x:225.2,y:114.5},0).wait(1).to({scaleX:1,scaleY:1,x:225.8,y:111.4},0).wait(1).to({rotation:0,x:226.5,y:108.3},0).wait(1).to({regX:-17.4,regY:0.8,x:227.1,y:105.1},0).wait(3).to({y:106.3},0).wait(2).to({y:106.7},0).wait(92));

	// CUP_23_handle
	this.instance_7 = new lib.CUP_34_leg_COMP("single",0);
	this.instance_7.setTransform(163.3,185.8,1,1,0,0,180,8.5,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(90).to({skewX:-1.1,skewY:178.7,x:164.7,y:188.1},0).wait(2).to({skewX:-4.3,skewY:175.5,x:167.4,y:194.5},0).wait(1).to({regX:8.4,skewX:-5.6,skewY:174.2,x:168.8,y:198},0).wait(3).to({regY:-18.9,skewX:-4.4,skewY:175.4,x:167.1,y:197.2},0).wait(1).to({regY:-18.7,scaleX:1,scaleY:1,skewX:1,skewY:181.1,x:164.4,y:185.3},0).wait(1).to({regX:8.5,skewX:5.8,skewY:185.9,x:160.8,y:178.4},0).wait(1).to({regX:8.6,skewX:7,skewY:187.1,x:159.5,y:175.1},0).wait(2).to({x:159.3,y:177.2},0).wait(20).to({regX:8.5,skewX:6,skewY:186.1,x:160.7,y:179.1},0).wait(2).to({regX:8.4,skewX:-0.1,skewY:179.7,x:162.1,y:189.1},0).wait(1).to({regX:8.3,skewX:-2.7,skewY:177.1,y:198.3},0).wait(2).to({y:196.9},0).wait(8).to({regX:8.4,skewX:-1.4,skewY:178.4,x:161,y:199.4},0).wait(2).to({regX:8.3,regY:-18.8,skewX:-0.3,skewY:179.5,x:160,y:202.2},0).wait(2).to({regY:-18.7,skewX:0.8,skewY:180.9,x:159.1,y:199.2},0).wait(1).to({skewX:0.5,skewY:180.6,x:160,y:196.2},0).wait(1).to({skewX:0.3,skewY:180.4,x:160.8,y:193.3},0).wait(1).to({scaleX:1,scaleY:1,x:161.7,y:190.3},0).wait(1).to({skewX:0,skewY:180.1,x:162.6,y:187.3},0).wait(1).to({regX:8.5,regY:-18.8,skewY:180,x:163.3,y:184.2},0).wait(3).to({y:185.4},0).wait(2).to({y:185.8},0).wait(92));

	// CUP_23_leg_COMP
	this.instance_8 = new lib.CUP_34_leg_COMP("single",0);
	this.instance_8.setTransform(121.3,185.8,1,1,0,0,0,8.5,-18.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(90).to({regX:8.6,rotation:-1.1,x:122.8,y:189},0).wait(2).to({regX:8.5,rotation:-4.3,x:125.5,y:197.9},0).wait(1).to({regX:8.4,rotation:-5.6,x:126.9,y:202.3},0).wait(3).to({rotation:-4.4,x:125,y:200.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:1,x:122.4,y:184.5},0).wait(1).to({regY:-18.9,rotation:5.8,x:118.9,y:174},0).wait(1).to({rotation:7,x:117.8,y:169.9},0).wait(2).to({x:117.7,y:172},0).wait(20).to({rotation:6,x:118.9,y:174.6},0).wait(2).to({regY:-19,rotation:-0.1,x:120,y:189.1},0).wait(1).to({regX:8.3,rotation:-2.7,x:119.8,y:200.2},0).wait(2).to({y:198.8},0).wait(8).to({regX:8.4,regY:-18.9,rotation:-1.4,x:118.9,y:200.4},0).wait(2).to({regX:8.3,regY:-19,rotation:-0.3,x:117.8,y:202.5},0).wait(2).to({rotation:0.8,x:116.8,y:198.3},0).wait(1).to({regX:8.4,rotation:0.5,x:117.8,y:195.5},0).wait(1).to({regX:8.3,regY:-18.9,rotation:0.3,x:118.6,y:192.7},0).wait(1).to({regY:-19,scaleX:1,scaleY:1,x:119.4,y:189.9},0).wait(1).to({rotation:0,x:120.4,y:187},0).wait(1).to({regX:8.5,regY:-18.8,x:121.3,y:184.2},0).wait(3).to({y:185.4},0).wait(2).to({y:185.8},0).wait(92));

	// CUP_23_leg_COMP
	this.instance_9 = new lib.CUP_34_arm_01("single",1);
	this.instance_9.setTransform(59.3,109,1,1,0,0,0,18.4,-23.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(90).to({regY:-23.7,scaleY:1.11,skewY:-1.1,x:59.1,y:113.8,startPosition:51},0).wait(2).to({regY:-23.9,scaleX:1,scaleY:1,rotation:1.8,skewY:0,x:66.4,y:122.6,startPosition:53},0).wait(1).to({rotation:6.2,x:59.7,y:130.2},0).wait(3).to({scaleX:1.07,scaleY:0.97,rotation:0,skewX:10.4,skewY:27.1,x:60.5,y:120},0).wait(1).to({scaleX:1,scaleY:1,rotation:1,skewX:0,skewY:0,x:61.8,y:106.7,startPosition:57},0).wait(1).to({rotation:5.8,x:65.1,y:91.4,startPosition:58},0).wait(1).to({rotation:7,x:65.9,y:86.1,startPosition:55},0).wait(2).to({scaleX:1.03,scaleY:0.98,rotation:0,skewX:8.6,skewY:7,x:65.7,y:88.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,skewX:0,skewY:0},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:0,skewX:8.6,skewY:7},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,skewX:0,skewY:0},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:0,skewX:8.6,skewY:7},0).wait(1).to({scaleX:1,scaleY:1,rotation:7,skewX:0,skewY:0},0).wait(1).to({scaleX:1.03,scaleY:0.98,rotation:0,skewX:8.6,skewY:7},0).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:7.8},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:8.6},0).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:7.8},0).wait(1).to({scaleX:1.03,scaleY:0.98,skewX:8.6},0).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:7.8},0).wait(1).to({scaleX:1.02,scaleY:0.98,skewX:8.1},0).wait(1).to({scaleX:1.01,scaleY:0.99,skewX:7.8},0).wait(7).to({scaleX:1,scaleY:1,rotation:6,skewX:0,skewY:0,x:66.5,y:91.9,startPosition:61},0).wait(2).to({regY:-24,rotation:-0.1,x:57.9,y:112.6,startPosition:59},0).wait(1).to({rotation:-2.7,x:54.3,y:126.6,startPosition:56},0).wait(2).to({regY:-23.9,rotation:-0.4,y:125.2},0).wait(8).to({regY:-24,rotation:-1.4,x:55.2,y:122.8,startPosition:60},0).wait(2).to({regY:-23.8,scaleX:1,scaleY:1.01,rotation:0,skewX:17.9,skewY:7.3,x:55.5,y:125.2},0).wait(2).to({regY:-24,scaleX:0.92,scaleY:1.03,skewX:40,skewY:21.4,x:58.7,y:119.7},0).wait(1).to({scaleX:1,scaleY:1,rotation:-9.8,skewX:0,skewY:0,x:44.9,y:112.2,startPosition:53},0).wait(1).to({rotation:-6.3,x:45.1,y:109.8},0).wait(1).to({regY:-24.1,scaleX:1,scaleY:1,rotation:-16.1,x:47.9,y:105.2},0).wait(1).to({regY:-24,scaleX:1,scaleY:1.24,rotation:0,skewX:-3,x:58.7,y:110.2,startPosition:1},0).wait(1).to({regY:-23.8,scaleY:1,skewX:0,x:59.3,y:107.4},0).wait(3).to({y:108.6},0).wait(2).to({y:109},0).wait(92));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.1,-0.9,245.3,231.9);


(lib.Cup_DoubleTime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cup_DoubleTimegraphic("synched",0);
	this.instance.setTransform(-68.8,243.4,1.66,1.66,0,4.5,-175.4,143.6,222.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(114).to({startPosition:114},0).wait(1).to({regY:222.7,x:-74.9,y:243.3,startPosition:115},0).wait(1).to({x:-81.2,startPosition:116},0).wait(1).to({x:-87.4,startPosition:117},0).wait(1).to({x:-93.7,startPosition:118},0).wait(1).to({x:-99.9,startPosition:119},0).wait(1).to({x:-106.2,startPosition:120},0).wait(1).to({x:-112.4,startPosition:121},0).wait(1).to({x:-118.7,startPosition:122},0).wait(1).to({x:-124.9,startPosition:123},0).wait(1).to({x:-131.2,startPosition:124},0).wait(1).to({x:-137.4,startPosition:125},0).wait(1).to({x:-143.7,startPosition:126},0).wait(1).to({x:-149.9,startPosition:127},0).wait(1).to({x:-156.2,startPosition:128},0).wait(1).to({x:-162.4,startPosition:129},0).wait(1).to({regY:222.8,x:-168.7,y:243.4,startPosition:130},0).wait(1).to({regX:0,regY:0,x:197.9,y:-106.5,mode:"single",startPosition:0},0).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-351.7,-244.3,686.3,599.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;