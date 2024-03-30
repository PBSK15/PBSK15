(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.Mixie_Home = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{intro:0,intro_stop:48,idle:49,idle_loop:76});

	// (mixie)
	this.instance = new lib.MixieFPO("synched",0,false);
	this.instance.setTransform(312.7,-13.7,0.681,0.681,0,-50.7,129.2,120.5,122.4);

	this.instance_1 = new lib.MIXIEFLYIN("synched",21,false);
	this.instance_1.setTransform(209.4,175.4,0.684,0.684,0,0,180);

	this.instance_2 = new lib.MIXIETALK();
	this.instance_2.setTransform(111.3,287.7,0.684,0.684,0,0,180,143.4,164.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{skewX:-50.7,skewY:129.2,x:312.7,y:-13.7,startPosition:0,scaleX:0.681,scaleY:0.681,regX:120.5,regY:122.4}}]}).to({state:[{t:this.instance,p:{skewX:-48,skewY:131.9,x:301.7,y:48.2,startPosition:1,scaleX:0.681,scaleY:0.681,regX:120.5,regY:122.4}}]},1).to({state:[{t:this.instance,p:{skewX:-40.2,skewY:139.7,x:274.6,y:145.3,startPosition:3,scaleX:0.682,scaleY:0.682,regX:120.5,regY:122.4}}]},2).to({state:[{t:this.instance,p:{skewX:-29.1,skewY:150.8,x:236.9,y:210.4,startPosition:5,scaleX:0.682,scaleY:0.682,regX:135.4,regY:118.9}}]},2).to({state:[{t:this.instance,p:{skewX:-16.7,skewY:163.2,x:279.9,y:152.9,startPosition:6,scaleX:0.682,scaleY:0.682,regX:0,regY:0}}]},1).to({state:[{t:this.instance,p:{skewX:-7.4,skewY:172.5,x:231,y:200.3,startPosition:8,scaleX:0.682,scaleY:0.682,regX:0,regY:0}}]},2).to({state:[{t:this.instance,p:{skewX:-3.2,skewY:176.7,x:212.8,y:201.4,startPosition:10,scaleX:0.681,scaleY:0.681,regX:0,regY:0}}]},2).to({state:[{t:this.instance,p:{skewX:0,skewY:-179.9,x:209.9,y:175.3,startPosition:12,scaleX:0.682,scaleY:0.682,regX:0,regY:0}}]},2).to({state:[{t:this.instance,p:{skewX:1.3,skewY:-178.6,x:210.8,y:171.5,startPosition:14,scaleX:0.682,scaleY:0.682,regX:0,regY:0}}]},2).to({state:[{t:this.instance,p:{skewX:1.8,skewY:-178.1,x:210.7,y:170.7,startPosition:16,scaleX:0.682,scaleY:0.682,regX:0,regY:0}}]},2).to({state:[{t:this.instance,p:{skewX:0.2,skewY:-179.7,x:208.5,y:173,startPosition:19,scaleX:0.682,scaleY:0.682,regX:0,regY:0}}]},3).to({state:[{t:this.instance_1,p:{y:175.4,startPosition:21,mode:"synched",loop:false}}]},2).to({state:[{t:this.instance_1,p:{y:176.3,startPosition:22,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:177.4,startPosition:23,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:178.7,startPosition:24,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:179.9,startPosition:25,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:181.2,startPosition:26,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:182.4,startPosition:27,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:183.6,startPosition:28,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:184.7,startPosition:29,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:185.7,startPosition:30,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:186.7,startPosition:31,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:187.4,startPosition:32,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:188,startPosition:33,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:188.2,startPosition:34,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:187.8,startPosition:35,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:187.2,startPosition:36,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:186.4,startPosition:37,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:185.5,startPosition:38,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:184.5,startPosition:39,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:183.2,startPosition:40,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:181.9,startPosition:41,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:180.5,startPosition:42,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:179.1,startPosition:43,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:177.9,startPosition:44,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:177,startPosition:45,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:176.2,startPosition:46,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:175.7,startPosition:47,mode:"synched",loop:false}}]},1).to({state:[{t:this.instance_1,p:{y:175.4,startPosition:48,mode:"single",loop:undefined}}]},1).to({state:[{t:this.instance_2,p:{y:287.7,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:288.6,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:289.7,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:291,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:292.2,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:293.5,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:294.7,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:295.9,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:297,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:298.1,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:299,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:299.8,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:300.3,regY:164.2}}]},1).to({state:[{t:this.instance_2,p:{y:300.6,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:300.2,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:299.6,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:298.8,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:297.9,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:296.9,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:295.6,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:294.2,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:292.8,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:291.5,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:290.3,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:289.3,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:288.6,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:288.1,regY:164.3}}]},1).to({state:[{t:this.instance_2,p:{y:287.7,regY:164.2}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(156.7,-154.7,273,279.4);


// symbols:
(lib.PROPELLORSPIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#54565E").s().p("AHxVhQhUAKh8AQQgxAHgeABIAAAAQAAAdhrgSQhtgSiXg5QmSiYj0j5Ii6CtIBFh6QA8hsgBgRIhRiZQhTidgHgSQBQBUBMBLQA5A5AYAWQB0iRA9hIQBjh3CBiWQhjhnhXkDQhWkBABi9QAAkaCzhyQA7gmBXgXQAvgMBDgPQgSgshRjgIhjkXQoBDLjCDxQg1BCg2BqQgvBeghAhQFkCICIBGQCFBGAAAxQAAALhHALQhBAJgyAAQh9AAiMhNQiXhghWglQgxBUglDLQgdCiAABRQAAEuBuD2QBRC2CvDNQjLhMhwlHQhckOAAk6QAAh4AaiZQAThyAgh2QhSgShWgGIgHhgIAIAuQAvggAsgEQAYgCAnABQAfgFAdghQAjgpAwhnQAZg4BThbQBUhdB1hjQEbjuEShwQhJjbgmiVQgUhNgLg3IAEACQANAaA4CPQA/CiA1CUQBzghB9gaQCaghBNAAQDQAACaBLQBGAjBpBXQCBjfAcgwIAYgwIAAADQgeBbgXA+QgsBygxBUIBQBjIgkAXQgOAJgOAAQgJAAgbgWIgcgZIhJB+QCIBeBrCPQB0CdA/C/ICwgyQgVg5gsg3QgfgnAAgrIACgeIACAIQAXBMApBMQAiA/AEAAQBQAABfgIIBugKQizkcg7g0IBQgNQCvAAB2GSQAtCYAbCzQAXCdAABsQAAGyjdGMQhFB7hTBqIhEBRIAYA+IgngvQg4BEhmBNQjLCZkSBPQB7ItASBbQAQBKALBNgArMNXQDWDOD/BjQDTBSDTAAQATAABmgMQB8gQAfgOIi3rUQhUBUh9AAQiGAAhcgxQhQgrhjhxQkdGxhVBDgAFHGAIgNAaIC6MHQChhGALgIIGfiiIAmgRIjZkCQhQApguARIgMhbQAZgCA/gaQhQhbhmh/Qhfh3gcgoIjulEQCxBwCfCuQBsB2CoDpQCQjFBCjdQA7jHAAjwQABjQgwiXQg2ASg9AQQgxAOgQADQAPA0ALA7QAPBSAAA4QAABMgXA9QgVA6gxBEIgMgGQAmg+AGgNQAlhVAAhwQAAgZgPhHQgShagWgnIhgAUQhZAQgLAAQgOAAgSgIQgMgGgIgGQAfgaCbhjQhDhngkgsQgagghuh2Qgugyg5gsIg7gsIgmgcQgEgDgSAdQgfAthhChQBUA6BCBXQA/BTAcBUQjRiVh8gzQhtgsh/AAIhfAHIA3ClQAAAHgCAHIhRivQiGAXg2ARQhSAZgtAtQgxAxgWBaQgWBcAACdQAAB9BECZQBICbB9CTICAigQgQAjgrBUQgiBAAAAFQAAAuCTBNQCPBMBPAAQBGAAAvgXQAjgRAAgMIgxjXQgzjaAAgaQAAgKACgJQAMAQAOAKQAKAHAHAUQAOAkBkFrQAwgrANgPIgjBXgASGqhQALAkANBTQAMBLADApQAIAAAGCoQAEBtAABMQAAHfjuDeQByCzAkA+IAeA1QEWkPBmkqQA4inAAjAQAAi1gVhoQgfigh1k2gABqwOQBYAfBUA2QAag+ATgzQASgsAuhmQgPgPg6gZQgtgVglgLQgfgLgpgFQgrgFgUgEQhGgNg7g5QAWgbAZgQQBBglBrAAQAzAAAzATQAQAGChBKIBHh4Qh+g4iYgiQiQgghzAAQg2AAi6AUIh2AVQgIACBZEWIBbEWQAygJBSgZIBIgXQAZAAA/AWg");
	this.shape.setTransform(701.3,-65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#54565E").s().p("ACQaAQkVAaknhxQkOhojyjJQjljAiYjqQiZjrggjWQAnBKBeCAQB1CeBeBWQAggyBnh/QBziLBDg/IAEAHIADAHQABADAAAHQAABMhkBzQiACFg6BFQD7DdDfB5QFSC3GsA+IhGoJQgSAOhEgHQhIgGhVgZQjdhCheh3QgkBBiOFAQAZhPAvinQAzi0AAgRIhFh/QhIiHgOhEIAEgBQA0AsBLBRIBIBOQBWjVAzhbQAbgxAAgGQAAgFguhmQgvhxAAhFQAAh7BEh1QAkg+A8hLIgCAHIhGDmIg4C4QAAApAqAhQAYAVA3AmIAmhCQg3BmB7AyQA+AaBNAEQA6AAA8g8QBjhjAAjWQAAg7gOg5QgQg8gmhaIAeAhQAZAeASAjQA4BqAACgQAAC0hiB6QhkB9iWAAQh1AAg+hOQgKAfgUAwQglBchVCnQAgAvC4BGQC+BIBLgQIgTnDIAuHEIAtABQApAABEgLQBdgPAggYQhJi3gVhQQgRhDgRiZIDAHEQBGgkBYhZQBzhzA0h9QiVh9gwgtQgYgagSgRQgdgZgogrQgngoAAgCQAAgKAJgbQAHAMA/AKQAfAFAeADID+DOQAHgTANhJQARhcAAg3QAAhUgZhxQgeiFg2huQiNkmjqAAQgGAAgUAeIgTAdQATgkAAglQgBgtALgiQAtiSE1mnQgTBHgJBKQgIBBgJAbQgdBXjLEHQEogdB7GOQA9DHADDOQAABFgSBlQgPBVgSA6IDMCxQAUgoAahtQAjiVAAh+QAAlqjPlWQhDhthWhpQhPhYgMgQIAkgCQDjAACDEgQByD4AAFUQAACGgRBjQgfCxhWCmIFOE7QBijsAahdQAqiYAAjDQAAh0hGjfQhqk8hKjkQCADQA/DsQBCD0AAEbQAAA7gKBvQgJBggGAgQgIAtgvCLQgrB8AAAfQAAAHAdAaIAcAZIhEgfQgvB4iTCxQjRD8kAB/IB9EnQgshCgUghQgnhCg3hwQgxAqisAyQi2A2h6AAIgjgBIAaEAgABORqQAJDMAuBZQAEAIAOAMQAKAKAFACQAdATASAEQAgAIBNAAQA7AABJgQQBzgZBOg4IkAokQjsBthMgHQgFBUAEBngAI9K0IgrAgQgiAagwA1IDxI2QAPgPBng9QCEhOBKgyQEfjEAsiwQhOgwhTg8Qh1hWkhjgQilEWgnAngAxaEUQgXgQgLglQgIgYgMhNQgPhggPhCQgpAAiBgGQhvgFg6gEQAIhzAugtQAmgmBTAAIBHALQBHAMAOAEQgEg9AciHQAiigA6iJQCkmED/AZIBABIQk8DKiOEAQheCpAACRQAAAfBbALQAsAGA9AAIAZAAQALgCAHgLQAOgXALhtIgECKQA8gLBPgfIBGgdQAVAAAcAYQAfAbAZAvQiSA9ijAiQAMBDAhDZQgPAEgKAAQgJAAgch9Qgbh3gBgjQgXAEivATQAcA4AfBfQAmB0AAA5IgBARQgzgGgWgQgA1NveQBaiZB1g2QCnhMAWgNQBgg5EliZQgRhEg2ljIB/GVQA4gSCBgTQB2gSAmAAQEUAADACkQA7AzA0BEIAyBCQh/gviFgqQkDhSiVAAQgbAAg1AGIgzAGIg/AMQgOACgDAMQgGATAKA5QAZCQCKG4IiwmeIhcjrQkDBgiXBVQidBYhkBuQheBnhSCjQg6B1hpEJQAjmzCMjwg");
	this.shape_1.setTransform(710.3,-78.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#54565E").s().p("Ai0ZVQhRAIgZAAQjfAAjgiqQjRidiukVQipkOhilBQhllJAAkxQAAj2BbkFQB1lNDgjGIg8imIB1B4IA+gtQAYgRAHgBIAZANQAYASAAAZQAAAKhJBFICACEQAyiiCPg7QBogqEagWQgsibgWiYQgLhQgHhUIB1HWQBRgBBwAGICQAJIBlCBIj3A4QhHgjhSgXQgDAAAzDLIhKjMQgdgIgWgDQgOgBglgBQg4AAhbAWQi0AtisByIEaEcQAmgYBGgLQAvgIApAAQAcAAAYANQAWANAIAOQgjAGgaAIQgwANhjAsQBjBSBJCTQBGCOgGBaQAAAKg7hBIhohyQhHhOh8h+QiSCmhGCkQhCCZAACaIABAkICng1QBLgaCbhaIABATQAAB2jAA/QhgAcgkANQg8AVAAAZQAAA7BKBxQBGBtBuBxQB0B3BxBOQB+BWBbAKQAAg4A/mwQhqgagogkQgtgogyh6QBcA7CvAAQCpAABihcQBnhhAAiwQAAh9hWh2QgWgcgpguQgfgjgFgLQB8AnBGBcQBLBiAACOQAADEhdCSQh0C3jcAAIgegBIgJCNQgLCsgIC0IgQAAQAmAFAYAAQAHgBBAgIQBMgKARgHIgEAIQgOAQhbA8QheA/gYAEQgKgBgmEHIglEHQCngaB5hLQAcgSApgfQAbgVAHABIAMAFIATAJQhyCKiBA8Qg7AciEAcIgdDZgA0sqnQibEcAAEZQAACrBxEUQByEYC0EHQDGEgDVCpQDyDBDcgBIAbgBIAuoOQlphijKlOQhChuguiEQgZhGgWhPQgMAChAAWQhFAYgUAEQA/GFEnEyQCbCiESCsIgEACQgjAHg1AIQgsAGgGAAQj8AAjYmYQhUieg8i8Qg2iogPh9QiEAKgqgbQgbgQAAgvQAAgkAFgKQAGgMAVAAIArACIB0ABIgBgjIAKAfQAeABCbgeQgBgRgPg9QgMhGAKhKQAdjnDsksQiXiQhEhMQhfhrhCh0QjgEJhmC8gAFES7QhGlpglnJQAVBNAUBrQAPBSAGAsIB1NCQgkiOgki4gAPtPxQCfhYBajgQBbjiAAlAIgFhgQgFhKgEgeQAYCNAGAyQAJBEAABIQAAE3hiDOQhICWibCOgAI0OOQEuiyCqk3QCLkAAAjhQAAg3gmjIQhSAMhMARQghAIg5AAIirgGIgEgxIF0h3QgTgzhoihQiHjQhlhHQjmC0hrBBQg4AbgEAHQAti+AlhDQAbgyBeh0IiGhLIABgNQABgFAGABQAEgBAoAKQAnAKB3AAQAHAAA5gsIA3gsIBUg6QhAg4gwgkQhUg+iEhOQhZg0iag/QiKg5gKgIQAVgGA8gUQA/gRBHAAQC5AAC5BtQCjBhBrCQIA7g0IgHAuQgHApAAAVQAAADAqA6QA3BMAtBNQCZEMA8FEQBTgmAKAAQAKAAAiAvIhOBPQhCBEgNAfIgEgdQiQA/gJACIAUCQQAHA5AAAlQAAC0g+DAQg4CthhCZQhaCPhmBWQhmBXhQAAQgUAAgZgQgANixAIgWAeQAPAHAtBDQAyBNAqBYQAwBcAsBwQAtBwABAjICkg9QgiighFiIQhbiziqi7QgmA9geAqg");
	this.shape_2.setTransform(702,-76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).wait(2));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B0B6C4").s().p("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");
	this.shape_3.setTransform(709.8,-65.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B0B6C4").s().p("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");
	this.shape_4.setTransform(710.3,-78.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B0B6C4").s().p("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");
	this.shape_5.setTransform(705.9,-76.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(538.1,-281.5,343.5,432.9);


(lib.MIX_43_eyeR_v01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEDRQhUgCg5g+QgngpgMgzQgEgPgBgQQgBgNAAgMIAAgCQAAgLACgMQAJhHA0gzQA9g7BSABQBVACA6A/QANAOAKAQQAPAXAJAaQAHAaACAcIAAAPIAAAJQgGBRg5A5Qg8A5hQAAIgEAAg");
	this.shape.setTransform(-44.8,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AiIADQA9g5BSABQBVACA6A9QANAOAKAQIACADQg+gFi7AJQhDADghAEQAOgbAYgYgAh0AOQgOABAAANQAAANAPgBQAPgBgBgPIgCgFQgDgFgIAAIgCAAgABKAIQgLABAAAKQgBAMANAAQAOgBgBgMIgCgFQgEgFgHAAIgBAAg");
	this.shape_1.setTransform(-45.1,-11.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgECVQhUgCg5g+QgngpgMgxQgEgPgBgQQgBgMAAgOIAAgDQAAgLACgLQADgVAGgUIAagBQBVgMCxgGQAwgCAnABQAGAMAEANQAHAZACAdIAAAQIAAAKQgGBOg5A5Qg8A5hQAAIgEAAg");
	this.shape_2.setTransform(-44.8,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83888C").s().p("AgEDRQhUgCg5g+QgbgcgOgiQClAHBxgMQBOgHAYgHQgQAxgmAnQg8A5hQAAIgEAAgAgzA5Qh+gBgTgCIAAgBQgEgPgBgQQgBgNAAgMIAAgCQAAgLACgMQAJhHA0gzQA9g7BSABQBVACA6A/QANAOAKAQQAPAXAJAaQAHAaACAcIAAAPIAAAJIgDAYQhvATh2AAIgWAAgAhzAMQgOABABANQAAANAPgBQAOAAgBgQIgBgEQgEgGgIAAIgCAAgABSAXQgCANAOgBQANgBAAgMIgCgFQgFgFgHAAQgMABABAKg");
	this.shape_3.setTransform(-44.8,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEDvQhhgDhBhGQhDhIADhhIAAgJQABgMACgMQAGgvAXgnIADgEQAPgYAVgVQBFhFBfACQA3ABAtAYIASALQAYAQAVAWQANAOALAQQAmA6ABBLIAAAGQgCBkhFBEQhEBChbAAIgFAAg");
	this.shape_4.setTransform(-44.8,4.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgEDvQhhgDhBhGQgkgngQguQgOgpACgrIAAgJQABgMACgMQAGgvAXgnIADgEQAPgYAVgVQBFhFBfACQA3ABAtAYIASALQAYAQAVAWQANAOALAQQAmA6ABBLIAAAGQgCBkhFBEQhEBChbAAIgFAAg");
	this.shape_5.setTransform(-44.8,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-19.6,46.3,47.9);


(lib.MIX_43_eyeL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BsQgmgrgMhBQgMg9ATguQAUgyAuABQA3AAAxBAQAxBBAABNQAABAgXAZQgRATgiAAQg7AAgrgyg");
	this.shape.setTransform(45.1,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhLArQgcgsgJgyQgDgTgBgoIC+gFQAKAAAIAVQAYA+ABAoQAABAgYAZQgRATghAAQhJgBgthIg");
	this.shape_1.setTransform(45,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#83888C").s().p("Ag4gUQATgOAXAAQAUAAAaANQAgARAaAhIizAGQAJglAYgSgAgyAHQgCADAAAEQAAADACADQADADADAAQAEAAACgDQADgDAAgDQAAgEgDgDQgCgCgEAAQgDAAgDACgAA0AFQgCADAAAEQAAADACADQADADADAAQAEAAACgDQADgDAAgDQAAgEgDgDQgCgCgEAAQgDAAgDACg");
	this.shape_2.setTransform(42.8,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83888C").s().p("AgkCFQgtgbgCgfIAdABQAxAAA8gJIA7gJIABgCQAGBmhQAAQgmAAgngZgAhrAXQgJggACgnQAGhsBHAAQAxgBAuA3QAwA7AIBRQilATgjAAQgMAAgJgigAgoAdQgCADAAADQAAAEACACQADADADAAQAEAAACgDQADgCAAgEQAAgDgDgDQgCgDgEAAQgDAAgDADgABTAPQgDADAAAEQAAADADADQACADAEAAQADAAADgDQACgDAAgDQAAgEgCgDQgDgCgDAAQgEAAgCACg");
	this.shape_3.setTransform(45.1,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Layer 7
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhnBjQgnhFAAhKQAAhPAkgkQAbgcAsAAQBJAAA3BUQAyBMAABRQAAA9gSAfQgZAqg9AAQhaAAg0hZg");
	this.shape_4.setTransform(45,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[]},1).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.7,-19.2,28.8,37.7);


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

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E1E9F0").s().p("AhiA5QAAgoA0gZQBng1AegWQAEAWAIAWQglAWg3AjQg9AqgmAYQgGgRAAgKg");
	this.shape.setTransform(-5.4,-0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92979C").s().p("AhwA8IAGgFQBmhRAogeQAVgQAbAHQAOADAPAHQgpA0g6AlQgzAigbAAQgQAAgggIg");
	this.shape_1.setTransform(1.9,6.8);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6E7175").s().p("AADAJIgGgIQgDgDAAgJQAFAFAIASg");
	this.shape_2.setTransform(11.2,-7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BBC1C7").s().p("AhEB4QgagHgIgJIgSgVQgPgRgBgBQgGAAgBgJIABgSQAAghAIgPQAHgQAWgNQBKgiBJgyQARBUAaAWQAJAHARAEIAgAGQgQAahAAvQhDA0geAAQgNAAgVgFg");
	this.shape_3.setTransform(-1.1,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#888D91").s().p("AgPA1QgSgMgMgeQgDgLABgeQACgiAJAAQAfAAAbAsQAaAlAAAbQAAAKgDAIIgQADQgdAAgPgMgAgPgWIABAAQgGAPAAAIQAAANAGAJQAIAKAMAAQADAAADgDIAIgMQAIgVgSgMQgJgGgJgCIgHABg");
	this.shape_4.setTransform(11.1,-7.9);

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AiVB8QghgpAAguQAAgyAagZQAagYAqgPQAqgOAugnQAxgmAeABQAdAAAkAmQAnApAAAwQAAAggiAjIhPBMQgYAXguAVQgrAVgZABQgugBgjgsg");
	this.shape_5.setTransform(0,0.2);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.3,-16.6,36.7,33.8);


(lib.MIX_34_mouth = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C1247").s().p("AleCMQgEgeAChEQgChAAEgdIAQAAQADAaABA1QABA1gBA1IAAAHIgUgBgAhXgyIAAgKIASgBQAHAyAFCOIAAABIgSABQgHgqgFiNgADUhCIgBgeIAUgEQAHAnAECMIAAAAQgLACgOAEQACAAgHiXgAFLg0QgBgzABgdIATgIQACAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADg");
	this.shape.setTransform(9.6,-5.4);

	// Layer 5
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AACAAIgCAAIAAAAQAAAAgBAAQAAAAAAAAQAAAAABAAQAAAAACAAg");
	this.shape_1.setTransform(-23.2,24.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B5248B").s().p("Aj/CTIgDAAQhngChdgIIgggDIgBgoQgChMADggIACgkIA7AEQA0ADB1gBIAQAAQAEAaABA2QABA0gBA1IAAAHIgUgBgAnlCIIAAAAIACAAIgCAAgAHAAtQABgzgBg1QgBgvgDgaIAigPQAFApACAzIADA/IABAZIgMAGIgaAKIgBAAIgCABg");
	this.shape_2.setTransform(0.1,-6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE33CA").s().p("AiPB0QgFiOgHgzQBBgEA9gHQBagKA/gNIAVgFQAHAnAECMIgBAAQgKACgOAFQh0AfieAQg");
	this.shape_3.setTransform(18.2,-3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC289D").s().p("AlTCGQABg1gBg1QgBg1gEgaIAngBQBtgBBkgHIASgBQAHAyAFCOIAAABIgSABIgDAAIgEABQhLAEhzACIg6ABgADehkQAjgIAZgJIAogPIASgIQADAbABAvQABA0gBAzIAAAGIgCABIgKAEIgHADIgUAHQgVAIgzANQgEiMgHgng");
	this.shape_4.setTransform(10.5,-5.4);

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjjD3IgCABIgBAAQgBAAgBAAQAAAAAAAAQABAAABAAQABgBACAAgAjqBtIgVgBQhegChbgIIgEAAQgQAAgQgEIgggDIgEgBIgBgiIAAgfIgBiTIgBgBIAAgBIAAgCIABgIIAAgDIAAAAQADgKAIgEQAcAEB9AKIBfAFQBSADDGgQQDJgQA6gQIBcgbIBzgrQALgBACAPQAHAlACA3QADBPAAAwIguATQgkAPgfAJQipAxivAUIACABQhdAJgbAAIgdAAIhVABIgIAAIg1AAg");
	this.shape_5.setTransform(-0.1,0);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
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


(lib.MIX_34_lid = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45474A").s().p("AgggFIAOgcQAQAOACACQAFAEAcAJQgHAGgGALQgJAOAAAHQgpgRgCgWg");
	this.shape.setTransform(-29.6,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#626669").s().p("AhUA7QgdgGgKgKQAYgYBQgmQBUgrAkAAIAXgBQgXAWgNALQgVAUgqAQQgNAHgiAbQgeAYgEAAIgcgFg");
	this.shape_1.setTransform(-16.3,-4.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE33CA").s().p("AjZAhQgHgeARgNQAKgIAKAAQAGAAAbAGIgCAAIgDAygACRgaQALgBAngKQAEAAAJAPQAIAOAEAIIg6ASQgDgRgOgbg");
	this.shape_2.setTransform(4.1,7.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83888C").s().p("AjwA1QgigJgFgGIABgDQA+gsBRghQBPghAbAHIgNAKQhFAvgWBRQg9gFgugMgACjAFQgtg2gfgSQAmgBBFAkQBIAkANAiQgEADgZAIQgfAIgPAAQgSgYgXgcg");
	this.shape_3.setTransform(-0.7,-3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606366").s().p("AhhBBIgBgjQAAgGACgFIABgFQCTABBGgIQArgLAHAOQAEAKABAdQioAQhBAAgAjuAkQgggLgNAAQghgNgMgZIAOgcQAKAKAqAPQArAPAiACIgMAxQgGgBgjgNgAEOACIgKgTQAPgBAKgIQAMgJAAgMQAAgGgCgDIgGgIQAWACALATQAHAMAAAJQAAAZg0ASIgHgTg");
	this.shape_4.setTransform(0,4.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC1C7").s().p("AghBLQgCgDAFgBQAAAGgBAAIgCgCgAgdBIIgBgBQg1AAhEgEQATgmAagiQA0hHAsAAQAfAAAwAiQA4AoAbA6QhPANg7ADIgeABQgMAAgBgBg");
	this.shape_5.setTransform(2.5,-3.3);

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AknBnQg7geAAgtQgBgaAWgQQAIgFBHgqQA6giBbgZQBZgZArAEQAhADBAASQA6ARAPAIIBNAsQA1AbAGAEQAWARABAgQgBAyhkAfQhsAhi5AAQivAAhSgog");
	this.shape_6.setTransform(0.2,0.3);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.3,-14,71.2,28.7);


(lib.MIX_34_handR = function() {
	this.initialize();

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC1C7").s().p("AiPBKQgHgEAAgIQAAgKAigeQAnghAgAAQAGAAADACIAFABQAHASgqAjQgoAggRAAQgOAAgGgDgACCAbQgfgbAAgNQAAgGACgCIACgEIADgBQAFgCAGAAQA5AAARAoQAHAQgFAMQgFANgOAAQgNAAgfgagAi7AnQgHgDAAgQQAAgOAhgTQAngZA4gKIAJAPQgKAGgOAHQgYAOhHAvIgLgCgAi5gsQAGgQAMgHQARgJAiAAQARAAAWACIgEAIQgGAGgeAKQggALgSAAQgLAAgHgFg");
	this.shape.setTransform(-0.1,2.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AgwBJQAFgUgPgYQgPgVgVgJQAdgrAWgQQAXgPAcADQAfAEAUARQATASARAjQgTgBgQAJQgSAKAAAQQABAKAFAKQgiASgrAAg");
	this.shape_1.setTransform(3.1,-3.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AivBgQghgcgCgQQgDgPAMgVIANgSQgHABgHgJQgFgHAAgGQAAgRALgNQANgOAWAAIAsADQAnACAJgEQAOgGAMgNIAYgYQANgNAsgBQAuAAAQATQAQATATAhQATAgAIAGIAkAZQAOANAAAXQAAAVgOANQgOANgYAAQgYAAgUgZIgSgeQgNAHg2AHIg/AJIgoAgQglAegRAAQgRAAgggcg");

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.3,-12.3,42.5,24.9);


(lib.MIX_34_handle = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#45474A").s().p("AhxDKQgmg5AAhHQAAg0AfhtQAdhkAzgxQAiggAWAAQAdAAAkAbQAUAPAzAwIgXAtIhzhTQg6A5gVAlQgtBPAABQQABBSANAeQANAdAkAZIA4AWIAAAsIgFAAQhKAAgrhDg");
	this.shape.setTransform(-0.3,2.6);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#606366").s().p("AivDlQgdhMAAh6QAAiiB4hzQApgnAugaQAngUAOAAQArAAAkAdQBRAtgNAQQhABvgOAUIhzhTQgxAHgjBAQgvBTAACZQAAAQASAnQAUArASAQQAJAIAlAPQARAJAGAKIAAAvQgEAFgEADQgOAHgcAAQhZAAgohng");
	this.shape_1.setTransform(0,0.3);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AivEYQg1hYAAiHQAAirBuiEQAsg1AzgfQAvgeAlAAQAfAAAyAgQAgAUA3AsIhbC2IiDhSQgkAXgiBdQghBXAABJQAAA6AnAhQAUASAoAVIAABmIgCADQgLAOg0AAQhAAAgxhRg");
	this.shape_2.setTransform(0.2,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.7,-35.9,46,72.3);


(lib.MIX_34_hand_L = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#83888C").s().p("AAAAxIgrAAQgCgOgIgNQgMgSgTAFQgBgdAjgRQAYgLAUAAQAnAAAbAPQAaAPgBASIAAAKQgfgGgTAYQgRAVgPAAIgDAAg");
	this.shape.setTransform(0,-1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BBC1C7").s().p("AimBFIADgDQAFgXAUgZQATgVAJAAQARAAADAKQACALgJAPQgYAlgoAAQgGAAABgBgABIA3QgagPgbgaQAHgGAHgFQAGgDACAAQA8AAAcAhQALAOgEAKQgFALgWAAQgOAAgXgNgACSAVQgHgFgVgLQgbgMgQgDQACgIABgIQAuAJAKADQAbAIAFAKQAEALgIADQgGADgIAAIgCAAgABegoQgdgJgCgQQA8gKAOANQAIAHABAWQgcAAgYgHg");
	this.shape_1.setTransform(2.8,0.7);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABYBRIgkgXQgegUgEAAIgZAEIgbAEIgxgDIgcAhQgNAPgXAAQgiAAAAgbQAAgBATgeQAVghAGgOQAPglAfgUQAegTAqAAIBCASIAbgEIAXgDQAeAAANAIQANAJAIAaQAJAaAGAIQAEACAAAHQAAANgEAGQgHALgWAAIAFAEQADADAAAGQAAApgnAAQgKAAgUgKg");
	this.shape_2.setTransform(2.7,0.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-15.4,-8.7,36.5,18.4);


(lib.MIX_34_bulbL = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017E58").s().p("AgWBQIAshFIgOgLQgFgHgBAAQgUAAgRAMIg2AuIgFgVIAnglQgBAAgGgJQgGgIgCgLQgBgKAKgRQAPgVAUAAQAPAAAEAKIABALQAAAGgFAJIgJAVIgFAIQAKgDALgNQAEgHANgTQALgRASgFQAXgHAAAcQgBAGgIANQgMAQgPAKIgJACQADAMAKAAQACAAASgNQATgOAIgIQAPAMAAADQAAAIgJAGQgYANgOAKQgUAPgRAdIgOAaQgKAAgJgFgAgqg3QgMAMgCAHQADAGAIAIQAGgHAFgMQAJgQABgMQgIAEgKAKgAAhg/QgLAGgCAQIgFAJQAHgBAMgPQAKgNADgFQgHABgHACg");
	this.shape.setTransform(-2.3,5.2);

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#21FFC0").s().p("AhoBiQgrgpAAg5QAAg4ArgqQAsgoA8AAQA9AAAsAoQArAqAAA4QAAA5grApQgsAqg9AAQg8AAgsgqg");
	this.shape_1.setTransform(0,0.1);

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ah2BxQgygvABhCQgBhBAygvQAxgvBFAAQBGAAAxAvQAxAvAABBQAABCgxAvQgxAvhGAAQhFAAgxgvg");
	this.shape_2.setTransform(0.1,0.1);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.8,-15.9,33.8,32.1);


(lib.MIX_34_bulb_R = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017E58").s().p("Ag4AoQgUgEgEgDQgKgGAAgTQAAgDAFgFQAGgFAFAAQAlAMAWAXQAHgCADgDQACgDADgNQgOgEgLgGQgRgLAAgNQAAgHAFgIQAGgKALAAQAFAAALAJQANAKAIAPIABAIQAEgCAEgFIgQgWQgJgPAAgSQAAgkAcAGQAcAGAAAmQAAAFgEAPQgFAPAAAFQAAAGAEAEQAPANAYAiIgPANIgpg3QgDAEgQARQgQAUgFAEIAhA0IgNAGQgag1gtgJgAg5AbQANAIAHACIAFgCQgDgGgQgKQgMgIgHgDIgFgBQACAKAQAKgAgUgYIAFAKQAIAGAFACIADAAQgHgRgRgKQgBABAEAIgAARhGQAOAfAFAJQAFgHAAgJQgIgcgJgKQgHACAAAMg");
	this.shape.setTransform(3.2,1.7);

	// Layer 4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#505358").s().p("AgsADIAZgSIApAgIgeAJgAAAgZQAGADAnAYIgJAIg");
	this.shape_1.setTransform(11,14.3);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606366").s().p("Ag1AZIAYgUIApAiIgdAJgAgJgDQgCgBAQgRIApAkIgUARgAAtgEQgSgZAAgFIABgJIADgEQAQAQAFAUQADAJgBAFg");
	this.shape_2.setTransform(12,12.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#21FFC0").s().p("Ah2BtQgugpAAg1QAAhCAvgwQAygyBLAAQBLAAAwA8QAvA7gSA/QgKAkgsAjQg3AuhCAAQg6AAgtgpg");
	this.shape_3.setTransform(-0.9,-1.5);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAwCmQgNgJgjAAIgxAAQg5gHgugwQgwgzAAg9QAAhHAsgwQA5g8BvAAQBrAAAuBiQATAnAAArQACAogRAaIAeAcQACAJAAAKQAAAYgTAZQgbAlg0AAQgogMgPgMg");

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-20.1,-19.1,40.3,38.2);


(lib.MIX_34_browR = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909499").s().p("AiTApQgCgfgHgqQAygBADgFIAMBhIgyAHIgBABQgDAAgCgagAhUACIgKgpIBggKQAIAAAFgCIAGAjQAFAVALAAQAkAAAmgHIApgMIAFAbIizAkQgzAKgHAAQAAgmgEgTgAAdg1IAzgFIBAgIQAEAkADAGQg4AKg9AFQgDgngCgFg");
	this.shape.setTransform(-0.6,-1.1);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AirALQgGgygEgIQgDgJCugQQCtgRAFgBQAGAeAIBMQAAAQhKAOQiIAViBAYQgJgcgFg0g");
	this.shape_1.setTransform(-0.9,-1.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.1,-10.3,36.4,18.4);


(lib.MIX_34_browL = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909499").s().p("AhHAoQgHgRgKhDQBNAOASAAIAAA5IBNADIAAAOIgBABIiagFgAANAPIACgrIBKAOIgCAAIAAAfQgmgDgkABg");
	this.shape.setTransform(-0.1,-0.2);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhXA8IgRhMQgEgXgDgeQBHALBOAOIBKAOQgDA9gEAkIABACQAAABgGAAIi7gKg");
	this.shape_1.setTransform(-0.2,-0.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-11.5,-7.6,22.6,14.2);


(lib.MIX_34_armR = function() {
	this.initialize();

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBC1C7").s().p("AiCCbQgMgOgGgDQgMgHgMgCQgNgBAbgqQAPgEAGAAQAIAAASAOQAVAPAMATIgkA4QgBgNgPgSgAgdgQQgVgKgRABQAegeAIgGQAIgGAKAAQASAAAeAyIgiAmQgDgYgdgNgABwiEQgYgTgOACIAMgHIAdgTQAOgKAIAAQASAAAWA3IgqAdQABgNgYgSg");
	this.shape.setTransform(0.8,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#777FC7").s().p("AjZD4QgbgTAAgLQAAgPATgkIAgg2QAUgdAfAVQAeAUAAAgQAAgDgcA1QgfA7gLAAQgKAAgZgSgAhcAeQgXgNgQAAQAug1ALgJQANgNAQAAQARAAAPAOQANANAFATIg8BQQgIgXgdgPgAAnhqQgYgXgLgDQArgxAmAAQAjgBAQApIhIBAQgDgHgWgWgAC+jiQgOgPgOgEQAVggAfARQAdAQACAbIgpAeQACgUgQgTg");
	this.shape_1.setTransform(-0.4,2.2);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjrEKQgfgVAAgWQAAgMAVguQAag3Alg6QBrijCChYQAJgGA4gsIBFgiIAFgDIAGABIAeAHQAYAHAMAWQAMAVhfBKQhfBJgnArQgmApgTAhQgUAigVAdQgWAcgsBQQgtBQgOAAQgfAAgegVg");
	this.shape_2.setTransform(-0.3,2.4);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.1,-26.3,53.6,57.5);


(lib.MIX_34_arm_L = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8089C0").s().p("AChC7Iggg9QARgBAMgNQAJgJAMgXQAhAhAYBFQgNAXgKAGIgiAOQgDgKgPgcgABVA+IgmguQAIgEAPgTQAPgVACgKIAdAhQAUAUAAAGQAAAHgNARQgOASgRAAIgHgBgAhphjQAMgEALgUQAKgTgEgMQgBgLAQAJIAjAXIAcAWQATAXgOAYQgHAQgQAIgAjkipQgCgGgEgFQgEgGAMgXQALgYAkAPQAkAOgEAVIgHAdQgGAUgUAAQgbAAgVgjg");
	this.shape.setTransform(0.5,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDC2C6").s().p("ABdB7QALgDASgSQARgSADgKQAcAjgKAQQgKARgkAMgAgCATQAJgIALgSQAKgSADgPIAiAiQgOAxgaAAQgKAAgRgYgAiihRQAIgKAGgMQAJgPAAgNQAAgLgFgLIALAFQAYAMAGAGQAGAFAAALQAAAKgKASQgMAUgMAAQgOAAgRgPg");
	this.shape_1.setTransform(0.9,-4.7);

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ACbDIQgWg4hBhEQhBhEgngcQgjgZgdgTQgWgOhWgoQgygXAAgZQAAgrAcgWQATgQAVgBQAnAACFBlQBBAyA9A0QAJAIAiAsQAsA6AhA1IAWApQAJAQAAAOQAAAPgVAUQgaAYgnAAIgSgwg");
	this.shape_2.setTransform(0.3,-0.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.5,-25.5,51.9,49.8);


(lib.MIX_propeller = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE33CA").s().p("Ag3AdQgXgNAAgQQAAgPAXgNQAXgMAgAAQAhAAAXAMQAXANAAAPQAAAQgXANQgXAMghAAQggAAgXgMg");
	this.shape.setTransform(0.7,-25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).wait(5));

	// ball
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhDArQgdgSAAgZQAAgYAdgSQAcgTAnAAQAoAAAdATQAcASAAAYQAAAZgcASQgdASgoAAQgnAAgcgSg");
	this.shape_1.setTransform(0.7,-24.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1}]}).wait(5));

	// propeller
	this.instance = new lib.PROPELLORSPIN("synched",2);
	this.instance.setTransform(3.5,-23,0.657,0.121,0,2.7,-0.6,711.4,-104.4);
	this.instance.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(5));

	// Layer 7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#606366").s().p("AguAwQgOgDAAgKQgKgBAWhRIAAgDQASAVAeAAQAbAAANgDQANgEAEgJQAHAvAAAYQAAATgXAEQgHACgbAAQgpAAgMgDg");
	this.shape_2.setTransform(0.5,14.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9CA1A6").s().p("AgGAAQAGiiAJAAIACDvIAABVIgVABQABhSADhRg");
	this.shape_3.setTransform(0.7,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(5));

	// Layer 5
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhFDrQgKgFAAgVQAAg+AKgZQAKgaAZAFQAFicANh8QAOh7AfBqQADCNAACcIATAEQALABAGAKQAMAVgBBAQAAAagSAKQgPAJggAAQhCAAgRgLg");
	this.shape_4.setTransform(0.8,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.7,-45.9,228.1,67.2);


(lib.MIX_34_head = function() {
	this.initialize();

	// Layer 9
	this.instance = new lib.MIX_34_lid("synched",0);
	this.instance.setTransform(1,-51.5);

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#777FC7").s().p("AjyCpQhwgcg+gMIhUgTIg7gcQgGAAABgDQACgFAAgFQAAhxBJhJQBChDBegDQBfgDBBBCQBJBLAACHQAAA2gMAYQgLAZgYAAQgRAAhSgUgAGRAYQgEgPAAgxQAAgyAVgnQAXgpAfAAQAMAAAiAxQAjAxAKAYQAKAXggATQggASg4AcQgPAHgKAAQgUAAgHgXg");
	this.shape.setTransform(10.4,-7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#444444").s().p("AlvENQgEgDAAgGQAAgFAEgEQAFgEAGAAQAHAAAEAEQAFAEAAAFQAAAGgFADQgEAEgHAAQgGAAgFgEgAnoDtIgBgEQgCgCAAgGQAAgHAIgDQAHgEAIABQAHACABAKIgBAOQgBACgHABgAmbDKQiIgfgtgfIAGgRQBVAnBiAXQA3ANCCAVQgRAFgbAAQg2AAhfgWgAo/DJQgEgEAAgGQAAgFAEgEQAFgEAHAAQAGAAAFAEQAFAEAAAFQAAAGgFAEQgFAEgGAAQgHAAgFgEgAIEBHQgZhmgSglQg2htglgpQgPgRgdgXQgQgOAaAAQAZAAAdAsQAVAfBDB/QAcA1AUBCQATBBAAApQAAAMgDACIgOADIgYhlgAI4BwQgEgFAAgHQAAgHAEgGQAEgFAGAAQAGAAAFAFQAEAGAAAHQAAAHgEAFQgFAFgGAAQgGAAgEgFgAIAhPQgFgGAAgHQAAgIAFgFQAFgGAIAAQAHAAAFAGQAGAFAAAIQAAAHgGAGQgFAFgHAAQgIAAgFgFgAGmjpQgFgFAAgGQAAgHAFgEQAEgFAGAAQAGAAAFAFQAEAEAAAHQAAAGgEAFQgFAEgGAAQgGAAgEgEg");
	this.shape_1.setTransform(-14.7,-13.3);

	// Layer 12
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#45474A").s().p("AgKBmQgggKgIgJQgMgMgDgmQgCgZAAhgQAAgaAEgIQAEgJAOAAQAuAAAjBSQAgBIAABOIgBAfQgigRgrgNg");
	this.shape_2.setTransform(-74.1,45.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#92979C").s().p("AnPFdQANi3AwhkICEA0QgEAUgKAFIgSAIQAFAHAKAHQgtCRgQBZQgigphRgJgAmBBsQgFAEABAFQgBAGAFAEQAFAEAGAAQAHAAAFgEQAEgEAAgGQAAgFgEgEQgFgEgHAAQgGAAgFAEgAkyBVQgWgHhEgdQBdihAQgQIAtg7QAsg2AkgeQAsglBBgoQBNgyAdAAIAgAOQAnAQAkAJQAxANB5ADICEACQACAFAAAFQgBARg+AVQhPAZhwAAQgYAAgtgHQgwgGgTgHQgGgCgUgLQgRgIgEAAQgbAAh+CzQh+CwgKA0QgYgIgUgFg");
	this.shape_3.setTransform(-33.7,-5.9);

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#606366").s().p("AgYBpQgfgNgggUIgEiiQAAgmAMgJQASgNAyAYQAgAQAmBlQAnBigHA1QhKgUgpgRg");
	this.shape_4.setTransform(-71.7,45.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#83888C").s().p("AkpBxQi1gPhpgdIg9gRIg8gSIgBgkQgDgvgFgJQDiA0DLANQDLAPBBAGQgEgCgagDIDqgFQAJAAAEAVQAEAOAAARIgBAsIiRAHIhnADQh4AAiFgLgAHQADQgHgIgFgWQCQgsAigMQA/gWAQgSQAAATAEAoQACAXgDAKQgIARhUAiQh/AvgbADQABg3gDgMg");
	this.shape_5.setTransform(10,57);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#626C73").s().p("AjwgCQBUgNAlgEQA9gHBzAAQAwAABGAHQA8AEAGgBIAAALQgMASg3AHQg1AHh6AAQi4AAg3gdg");
	this.shape_6.setTransform(1.6,-46.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BBC1C7").s().p("AFGHYICCgVQAvgIAWgGIAOAkQALAZgIAXQgIAXhlANIhnAOQAEgrgIg4gAlzGoQhjgRhHgUIhHgTQgLgEgWg8IgSgpQgXgsgrgVQgigRgogCQAYiNAShFQAeh6BBhZIAgguQAGgLAogxQAug5A9g3QCghtAjAAQAZATAoALQAhAJBjALQBaAKAhAAQBdAABDgPQBFgRAUgdQAdACBjA/QBjA+AfApQAfAqAeAlIAcAjQA8A5A5DJQA5DDAACJQAAAIgmAQQgoARhJAWIhYAbQgbAIgrAHQg8ARhFALQiEAViwAAQjnAAjGggg");
	this.shape_7.setTransform(0.3,11);

	// Layer 4
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("An3I0QiKggiQg8QgpgRgHgVQgBgCgBg9QgBg9AMiqQAMioByjCQByjCB+hQQB/hQAggMQAUgIAogFQAagEA1gBQA/gCAegCQCHgPATAAQCMAACEBCQCIBFBoCBQDtEmAAHtQAABFiSAoQjvBBghAGQhsAUjdAAQlKAAkGg+g");
	this.shape_8.setTransform(0.6,9.9);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-83,-65.6,167.3,138.2);


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
	this.instance_6 = new lib.MIX_34_mouth("single",0);
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

	this.instance_14 = new lib.MIX_34_arm_L("synched",0);
	this.instance_14.setTransform(210.3,147.1,0.999,0.999,-8.9,0,0,-18.8,-18.8);

	this.instance_15 = new lib.MIX_34_hand_L("synched",0);
	this.instance_15.setTransform(258,178.9,0.999,0.999,-8.9,0,0,-3.5,-4.8);

	this.instance_16 = new lib.MIX_34_handle("synched",0);
	this.instance_16.setTransform(54.9,106.4);

	this.instance_17 = new lib.MIX_34_bulbL("synched",0);
	this.instance_17.setTransform(181,58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape},{t:this.instance_7}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.3,-28.7,297.8,255.7);


(lib.MIXIEFLYIN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// propeller
	this.instance = new lib.MIX_propeller("synched",0);
	this.instance.setTransform(135.1,46.3,1.166,1.166,0,0,0,1,18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(51).to({startPosition:0},0).wait(2).to({startPosition:1},0).wait(25));

	// nose
	this.instance_1 = new lib.MIX_34_nose("synched",0);
	this.instance_1.setTransform(183.1,117.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(51).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// pupil
	this.instance_2 = new lib.MIX_34_pupil_L("synched",0);
	this.instance_2.setTransform(206,113.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:0},0).wait(2).to({x:205,y:112.9},0).wait(1).to({x:201,y:108.3},0).wait(1).to({x:200.4,y:106.2},0).wait(51).to({startPosition:0},0).wait(2).to({x:203.2,y:100.5},0).wait(2).to({x:204.2,y:98.5},0).wait(23));

	// pupils
	this.instance_3 = new lib.MIX_34_pupil_R("synched",0);
	this.instance_3.setTransform(116.1,121.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({startPosition:0},0).wait(2).to({x:115.1,y:120.7},0).wait(1).to({x:111.6,y:113.6},0).wait(1).to({x:110.6,y:111.6},0).wait(51).to({startPosition:0},0).wait(2).to({x:120.7,y:105.3},0).wait(2).to({x:123.5,y:103.3},0).wait(23));

	// eyeR
	this.instance_4 = new lib.MIX_43_eyeR_v01("single",0);
	this.instance_4.setTransform(155.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(51).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// eye_L
	this.instance_5 = new lib.MIX_43_eyeL("single",0);
	this.instance_5.setTransform(155.6,107.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(3).to({startPosition:0},0).wait(51).to({startPosition:0},0).wait(2).to({startPosition:0},0).wait(25));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape.setTransform(15,179.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83888C").s().p("AujCEQgRgGgFgFQgFgEgQgUQgRgTAMhxIAFguQAKgbATgbQABALAGAIIAMAMIABACIABADQgnAkADAXQAAABAUAdQgNALgBAaQAAAXALAMQABABAFACIAJAMIAbANIAGACQgCAGAAAKQAAASgEAEQgFAGgJAAQgHAAgJgEgAvVg8IgBgpIADAgIAAABIgFAoQAAgQADgQgANahUIAMgFQAYgFAZACQAVABAVAFIAZAIQgQgCgKADIgDAAIgTADIgMAAQgYABgPAHIgEACQgIAEgHAFQAAgWgKgHg");
	this.shape_1.setTransform(136.6,190.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BBC1C7").s().p("APbDtIgHgGQgLgPAFgLIACgBQAaAVA8gKQAbgFAVgGIABAEIABAEQAAAUgOAHIgvAMIgPABQghAAgQgPgAr6DzQgKgDgHAAIgBgRQAGABACgCQAEgEABgCIgBgBQgRgPgUgKIgCgCIgPgFIgFgCIgEgBIgEgCQgJgLAKgbIAEgMIABAAIAoAcQApAdAHAHQAYAjgLAMQgHAGgMAAQgGAAgJgCgAPcCxQgFgHACgRIABgCQAWAFAggGIAKgDQAwgRACgCQAJgEAGgFQAEACADADIAFAJQAIAOgDALQgDAKgJAFIg4AQQgTADgOAAQgfAAgMgPgAOsC8QgSADgNgRQgZggARgtQAIgXAKgMIAIgIQAOgEALAPQADADAAAHIgDAEQgUAXAWAdIAFAGIgEAOQgBAPAFAOIgJAJIgKgBgAwECvIAAgBQgMgGgLgHIAAADIgSgKQgGgOgBgIQgHgfAQgPQAGgGAUgEQAFgBAFgCIAhAQIALAFQgJAHgHALQgaAlALAeIgKgEgAr7CTQglgXgdgLQAAgFgDgDQgMgNAHgQQAEgLAQggQALAGAbALQApASAWAYQAcAcgKAKIgoAYIgFAGIgUgNgAPOBxQgGgIAHgOQAIgNAJgFIAHgCIAegGIAMgCIAWgEQAKgBAOAEIASAGQAGAOgGAKQgDAFgIAFIgMAIIgYAHIgVAHQgPAEgMAAQgaAAgKgPgAssAPQgHgGABgKQAAgPALghQAUgEAxAaQAgARAdASQAFAHACAKQADATgOAOIgOAJQhBg+g0AKgASbgdQgUgLgUABQAXgRALgRQAMAAAGADQAOAEAOATQALANgDAOIgDAOIgVAYQAEgggcgPgAzRgNIgBgUQAGgcAXgcIACgCQAEgDATgGIAHgCIAGABQAaAHAKAMQAOAPAEAWIABADIgIAMIgBACQgXgTgSgBQgkgHgXAlQgHALgCAHIgDgNgAuVi1IgLgKIA2gNQAQAOAFAJQAIASgYAhIgoAKQAPgkgXgZgARZi6IAAAAQABgNADgGQAEgLAOgIQADgCAJgBIALABQASADAIAFQAeANAVAVQgGgCgHAAQgagBgYANQgKAEgIAIQgNgMgcgMgAPNjSQgEgPACgRIAAgIIAogBQgGAMgBALQgBANAFAKIgDAAQgQgDgQgCg");
	this.shape_2.setTransform(126.9,177.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#777FC7").s().p("AvXDcQgMgEgUgKQgEgIgCgMQgGggAUgTQAHgGANgEIALgCIAjARQAEAEgBARQAAAFABAEIgBAFIADAFIADAbIAEAbIABAGIgEACIg0gWgAzHBPQgOgTgIgPIgCgEQABgMAEgKQAFgKAJgJQAOgLAUgDIABAAQAOADASAMIARANIAIAPIABgCQACAJAEAEQANANAJAFQAEAEASAJQgIAHgHAIQgaAkARAkQhLgpgngmgAx0AjIAAgBIgBgBIABACgAReBaQgCgaghgWQgTgKgVgGIgJgCIABgCIAQgIQAdgOAWgPQAJgCAMACQAZACALANQAKAagDALQgBALgEACIgkAkIgHAGIAAgCgASgg/QgOgHgLgDQAGgOgBgOQgEgQgPgPIAAAAIANgNIALgGQAFgDASgEQAHgDARAGIAGAEIAOAIQAhA2g3BQQAAglgegRgAxegyQgKgWgLgNQgRgTgeAAIgFgCQA2gZCngqIAJAFQAJACAGAGQAHAIgBAVIgDAbIgXAHQhqATgsAgQAAgBAAAAQgBgBAAAAQAAgBAAgBQgBAAAAAAgAtkh8QAJgIgBgVQgBgVgJgKIgKgKIB0gaQAEADAFABQALABAEAFQARASgEAdIgBARQgjAChBANIgoAJgAQRi6QgNgDgWAAIgDAAIgCgLQgBgSAHgKQAEgCAhgBQAiAAAZAJIAAABQgLAIgHAJQgNAPAFAMQgXgIgNgBgAOqjGIACAAIgCABgAN2jJIgEAAIgDgoIA1ADQgJAOABALQgBAIACAGIgngCg");
	this.shape_3.setTransform(129.2,176.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83888C").s().p("At/B/QgQgGgFgFQgFgEgSgSQgSgTAHhtIACgsQAJgaASgZQAAAKAHAIIANAMIACACIABACQgmAjAFAWQAAABAUAbQgMALABAZQACAWAKALQACACAFACIAJALIAcANIAGACQgCAFABAKQABARgDAEQgGAFgJAAQgHAAgKgDgAu5g6IgEgmIAGAeIAAAAIgFAoQAAgQADgQgANOhLQgDgOgGgHQAJgDAPgDQAQgCAIAAQAHAAAXAEQAXAEAJADIAKADQgsAHgWgBQgLAAgYAPQgGADgDAAQgFAAAEgJg");
	this.shape_4.setTransform(136.5,187.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BBC1C7").s().p("APDD+QgWgKAAgWIABgJIACgCQAIAGAQAFQAPAFAEAAQAFAAAigGQAjgHAJgDIABAJQAAAphOAAQgQAAgOgHgArWD7QgKgCgHAAIgCgQQAGABACgDQAEgDAAgCIgBgCQgRgOgVgJIgCgCIgPgFIgFgCIgEgBIgEgCQgKgKAIgbIAEgLIABAAIAqAbQAqAcAHAHQAaAhgLALQgGAGgMAAQgGAAgJgCgAPBC9QgHgIAAgHQAAgMACgFIAIABIAQACQAfAAAkgRQAMgGAVgNQAFAGAGAMIAEANQAAAOgVANQgcASg2AAQgUAAgLgLgAOHDEQgOgJgKgSQgIgPAAgKQADgXAGgWQAMgrASAAQAPAAAFAKQACAFAAAHQAAAFgGAKQgHAKAAAFQAAAFAGAMQAHAMAAAFIgDAWIgDAggAvjC6IAAgBQgNgFgLgHIAAADIgTgKQgGgNgCgIQgIgeAPgOQAGgGAUgEIAJgCIAiAPIAMAFQgJAGgHALQgYAjAMAdIgJgEgArcCgQgmgWgdgLQgBgFgDgDQgMgMAGgQQADgKAPgfIAmAQQAqARAXAYQAeAagKAKIgnAXIgEAGIgVgMgAO8B+QgKgGAAgKQAAgWAggPQAbgMAeAAQAKAAAdAEIABAIIABALQAAAQggAQQggARgjAAQgLAAgKgHgAsUAgQgHgFAAgMQgBgOAKgeQAUgDAyAZQAhANAeAUQAFAHADAJQAEASgOAOIgNAJQhEg8g0AJgASSAGQAAgTgMgLQgKgKgagGIgKAAQACgBAhgjQAOAAAQALQATAPAAAWQAAAQgCADIgZAbgAy6AEIgCgRQAEgbAWgbIACgCQAEgDASgFIAIgCIAGABQAZAGAMAMQAOAOAFAVIACADIgIALIgBADQgYgTgSgBQglgHgVAjQgGAJgCAJIgDgOgAuGicIgMgJIA1gNQARAOAFAJQAKARgXAfIgnAKQANgigYgZgARJjBQAAgLALgPQAMgRAMAAQANAAATAIQAcAMAVAZQgbgEgRAGQgNAEgVAQIgmgYgAPHjXQAAgkABgJIAmAAQgFAJgDALQgEARAGAKIgCAAIgfgCg");
	this.shape_5.setTransform(126.9,173.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#777FC7").s().p("AuzDmQgMgEgVgKQgEgHgCgLQgIgfATgSQAGgGANgEIALgCIAjAQQAEAEABAQIABAJIAAAGIADADIAEAbIAFAaIACAGIgEABIg1gVgAyqBeQgQgRgIgOIgCgFQAAgLAEgKQAFgJAHgJQAOgMAUgDIABAAQAOACATANIASAOIAIANIABgBQACAJAFADQANANAJAEQAFAFASAJQgHAFgHAJQgZAiAUAjQhOgogoglgAxaA1IAAgBIgBgBIABACgAQpA0QgXgdgfACQBBg0AiALQAaAJAAAoQAAAPgBABQgRAOggAgQgFgWgQgVgASfgSQAFgRgTgUQgTgUgPgBQAGgTAAgKIgFgNQgGgNgEgGQAGgHAQgJQATgMALAAQAQAAAMANQAQAOgBAaQAAANgEASQgDAPgFALQgYAugEAAQgBAAADgJgAxIgdQgLgWgMgLQgSgTgeAAIgFgBQA0gZCmgoIAJAFQAKACAFAGQAIAHAAAUIgCAaIgWAGQhpAUgrAeQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAgAtShjQAJgJgDgUQgBgUgKgKIgLgKIBzgYIAKAEQALABADAEQATASgDAbIAAAQQgjAChBANIgnAJgAQLjBQgPgDgZAAQAAgDAAgJQAAgZAGgFQAFgCAfAAIAYADIAfAGIgBABQggAXAGAXQgRgHgNgCgAN4jQIgBgaIgCgQIAvACQgKAUABAWIgjgCg");
	this.shape_6.setTransform(129,172.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:15,y:179.6}}]},66).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape,p:{x:17.5,y:177.5}}]},2).wait(23));

	// mouth
	this.instance_6 = new lib.MIX_34_mouth("single",0);
	this.instance_6.setTransform(158.3,156);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag+DOQhZgphVhJQhXhKAOg+QACgQAIgPQgEgJARgNQAggvBNghQEkg/BigdIASgGIAHADQAfAvgCAzQgBAGgFARIgCAHIg+AIQiAARhJAUQg4APggAVQgsgJgCAyQgBAQBeA0QAUALBGAbQAAg0AJgcQAjhxBpAgQAzAOAvApQANAOAEARQAKAigdAcIgNAMQAdAgghAhQgVAVgRADIAMANQAJAKACATQAEAYgSASQgVAUgdgEQgVgDgGgHIgBgCIgHAHIgMAJQiHgkhKgigAB3B3IABABIgBgBgABmiQIACAAIAAgCIgCACg");
	this.shape_7.setTransform(31.8,178.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgzDGQhbgnhahHQhZhHAKg7QACgPAGgPQgEgJAQgMQAeguBLgfQEhg8BhgdIARgFIAAAAIAHADQAiAtAAAxQAAAGgEAQIgCAHIg+AIQh/AQhIATQg3APgeATQgtgIAAAwQAAAPBgAyQAWALBHAZQgDgxAIgcQAdhrBqAeQA1AOAxAnQANANAFARQALAggbAbIgMALQAeAggfAfQgUAUgRADIANAMQAKAKADASQAFAXgSARQgTAUgdgEQgWgDgGgHIgCgCIgGAHQgFAGgGADQiKgihLghgAB+ByIABABIgBgBgABfiKIACgBIAAgBIgCACg");
	this.shape_8.setTransform(34.1,176.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},9).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_6}]},51).to({state:[{t:this.shape_7},{t:this.instance_6}]},2).to({state:[{t:this.shape_8},{t:this.instance_6}]},2).wait(23));

	// head
	this.instance_7 = new lib.MIX_34_Lashes_R("synched",0);
	this.instance_7.setTransform(85.7,97.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWB+QgEAAAAgGQgCgIAWgGQAZgHARgRQAFgHAMgPQAMgPACgBQgFAXgIARQgVAjgkAGIgRABIgCAAgAgrBTQgBgJANgIIAZgPQALgKAGgKIAMgQQAFgGAGgcQAHgbgBgEQgCgFAAgCQAEAEAHAOQABAIgEAZQgEAXgCAFIgYAhQgaAfgVADIgDABQgIAAgBgHgAg5AYQgFgCgFgEQAmgTARgxQAMgngDggIgBgEQAEADAEAMQAEAKACAKQADAYgNAoQgTAuggAFIgGgBg");
	this.shape_9.setTransform(210.1,92.2,1,1,0,0,0,-0.3,0);

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

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAJEZQg0gCgWgcIAAgBQgPgSgBgOIgOgBQgbgCgPgTQgVgcAAgeQgEgVALgbQAOgfASgKQACgBADgBIAGgHIARgJQAmgUAtABIAKgGIAFgCQAFgDAbgRIAggYQAYgMAQgUQAQgSgCgSIgBgBQAAgKgHgIQgCgDgHgDQgagfhjgNIg+gJIgIgCQhJgChNAFIgBgOQAIgDAKgCQAIgUATgRIAsgnIAFAHIgIAMQDYgSBiAxQBhAxAFAyQAFAygbA9QgbA8guAqIg0AuQAWAPgBASQAAAXgbAOQAGAEABAGQAHALgKAQQgPAVgbAPQgUAKglAAIgHAAgAgyDTIACgBIgBgBIgBACgABjjkIABgBIgBAAgAkGjDQgEgEAHgFIAGgCIAAAPIgFAAg");
	this.shape_10.setTransform(229.5,176.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhbEDQgPgggHAAQgeAAgRgYQgQgXAAgqQAAhNBRgiQAqgSAygIQAqgaAUgQQAwgnAAgcQAAglhCgZQhagli5APQgEgEgBgEQASgKAJgKQAHgHAVgXQAMgNAfgaIAAgCQAFAIgIAMQBOgEASAAQBsAABOAfQBmApAABRQAABPhFBXQgmAwgwAoQARAJAAAWQAAAfgcAMQAIAJAAAKQAAAngwARIgyAKQgzAAgYggg");
	this.shape_11.setTransform(229.1,173);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{regY:-4.8,rotation:-8.9,x:258,y:178.9}},{t:this.instance_14,p:{rotation:-8.9,x:210.3,y:147.1}},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:10.3,x:57,y:159.2,scaleX:0.999,scaleY:0.999}},{t:this.instance_8,p:{rotation:4.5,x:8.3,y:193.1,regX:8.2,regY:-12.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_9},{t:this.instance_7}]}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15,p:{regY:-4.7,rotation:1.5,x:259.8,y:178.6}},{t:this.instance_14,p:{rotation:-12.2,x:210.4,y:150.5}},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:6.8,x:57.1,y:158.2,scaleX:0.999,scaleY:0.999}},{t:this.instance_8,p:{rotation:1,x:10.5,y:195,regX:8.2,regY:-12.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_9},{t:this.instance_7}]},9).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_9},{t:this.instance_7},{t:this.instance_9,p:{rotation:1.3,x:58,y:157.5,scaleX:1,scaleY:1}},{t:this.instance_8,p:{rotation:-4.4,x:15.3,y:198.7,regX:8.3,regY:-12,scaleX:1,scaleY:1}}]},2).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:0,x:58,y:157.5,scaleX:1,scaleY:1}},{t:this.instance_8,p:{rotation:-5.7,x:16.1,y:199.6,regX:8.2,regY:-12,scaleX:1,scaleY:1}},{t:this.shape_9},{t:this.instance_7}]},2).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{rotation:0,x:58,y:157.5,scaleX:1,scaleY:1}},{t:this.instance_8,p:{rotation:-5.7,x:16.1,y:199.6,regX:8.2,regY:-12,scaleX:1,scaleY:1}},{t:this.shape_9},{t:this.instance_7}]},51).to({state:[{t:this.shape_10},{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_9},{t:this.instance_7}]},2).to({state:[{t:this.shape_11},{t:this.instance_17},{t:this.instance_16},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.shape_9},{t:this.instance_7}]},2).wait(23));

	// Layer 37
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#83888C").s().p("AgqArQgTgUgBgXQAAgIARgZQASgbALgDQAMgDAUAFIAbAFQAPAAAAgEIAEgDIgGAbIgFAaQAAAEADAEQAEADAAAFQAAAFgnA3QglAAgYgXg");
	this.shape_12.setTransform(272.5,176.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#777FC7").s().p("ABTB7QgFgUAAgKIAGgMQAHgMAHgIQAIgIAFgEQAKgFAOAAQAvAAAbgDIAcgIQARgFALAGIACgBQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABIgSAPQgOANgCADIgJAWIgHAWQhKANgtAAgAg4BjQg9gSAIgCQABgLAMgZQAOgeAOAAQAEAAAdALQAeALAXADQgSAcAAAHQAAAGABAIIAGAVIADAIQgJAAg5gRgAjlgKQgdg3gKgbIAAgbQAGgEADAAQADAAAvAmIA8AwQgNAGgRAZQgOASgDAJIghgfg");
	this.shape_13.setTransform(242.1,164.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BBC1C7").s().p("AChBpIAMgNIAEgBQADAAgBAFQADAWARADQgMAPgCAAQgWAAgCgfgADxBeIgGgCQgcgFgBgPQABgOAGgOQALgcAZAAQAEAAAPAMQASAPgBAOQAAAOgHALQgKANgSAAIgJgBgAhtAAQgGAAgBgEIgEgcQgBgRAHgOQAHgMAHAAIASABIAcACQgTAbgCANQgCAJAEAcQgcgCgIgDgADrgjQAEgPANgNQAOgNAMAAQATAAALAZQAFAMACANQAAAIgJALQgJALgMAAQg8AAAKgngAkqhBQgQgKAAgGQAAgIAFgKQAIgTAVgMQAQgJAMAIQAcATAEABQgIAFgPAUQgSAYgBASIgkgVgACvhSQgQgDgNABQADgLASgRQAWgVAUAAIAPACIADAcQAAAGgLAJQgMAKgJAAIgUgEg");
	this.shape_14.setTransform(255.8,176.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#83888C").s().p("AggAxIgogTQgEAAgBgBIABgJIABgDQASgLAbgGQASgFAAgbQAAgMgKgLQACgKAKgCQAdAjAWAJQALAFAXAAIACAIIABAMQAAAQgJAUQgPAegaAAQgTAAgpgTg");
	this.shape_15.setTransform(264.9,127.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BBC1C7").s().p("AhIDhIgHgpIBEgWIgBAHIAAAHQAAALAJANQALASAWAOIgiAMIgeAJQgbAAgLgcgAktDgIgHgPQAAgNAJgcQAjAIAkAGQgFANgEAQIgEAPQAAAKAHAIQgzgGgQgOgABnA4QgYgGgDgDQAFAAACgrQAGACASADQATADAHAAQAOAAAOgJIgGA4IgVADQgJgBgWgFgAD3h4QARgBANgNQAOgNABgOIACABQAHAPAIAgQAAAJgJALQgKANgPAAQgEAAgYgogAAGiGQgEgIAAgCQAAgTACgHQAIgQAbAAQADAAAIAGIAHAHQAGAAADgCQADgCACAAIACAGIABAIQgBAPgTAHQgWAIgEAIQgCAHgBACIgCABQgJgIgIgLgADmiaIgWgNIALgMQAHgJAAgGQAAgSgFgOIAIAFQAEAJAWAPQAQALAAAXQAAAFgQAPIgZgLgACVjFQgSgXgIAAQgPAAgSATIgOgQQAGgOAZgMQAVgJAJAAQAjAAAUAXQAMAPAAANQAAAMgLAIQgIAGgGAAQgNAAgRgWg");
	this.shape_16.setTransform(252.4,141.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#777FC7").s().p("AhrCUQgMgGAAgRQAAgGABgEIAEgIIADgQQABgIAGAAIAyACQAuABASgBIgBAVQAAANAIAOQAKAOAOAIQgYAEgeAAQhIAAgWgLgAkJBmQANAKgGAHQgEAEgDACgAB0BYQgKgTAAgQIAdgfQAhgfAKggQALAKAXAHQATAGAJAAQAFAAAEgCIAHgEQgJAsglAzQghAugRAAQgdAAgPgdgAkJBlIAAgHIAWADIADAAIAHguIATAHQgFAAgDASQgDAPAAALQABAKACADgAkJATQAEADADAFQAFAHABAIIgNAxgADEhzQgLgLADggIAZAJQAZAJATACQAHgCADAUIgfAOQgdAAgLgJg");
	this.shape_17.setTransform(241.9,151.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#83888C").s().p("Ag1A7QghgVAAgmQAAgdAVgWQAYgaAnAAQArAAAYAZQAVAVAAAfQABAegQAXQgQAZgWAAQg3AAgfgTg");
	this.shape_18.setTransform(260.7,116);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BBC1C7").s().p("AgbFOQgVgVACgmQAYgHAngRQADAPANATQAOAfASAGIgXALQggAPgKAAQgMAAgPgOgAkAFPQgSgJAAgOQAAgIAIgmQACACAgAGIAlAGQgGALgDASQgCAMAAAHQAAAHACAEIAFAIQgmgCgTgKgAB8CBQgJgBgGgDQgDgCgBgIQAAgJAEghQAQAFAQAAQASAAAcgKIAAAQQAAAcgHAKQgIALgTAAQgMAAgRgEgAARhJQg4gGgRgGQgWgIAAgSQAAgHATgFQAVgFAWAIQAUAJAEAGIARAhgADKjHQAEgGARggQATgeAKAAQAKAAAHAMQAJAOgGAUQgBAEgZAQIgdATgAABkSIgEggIADgLQADgKAEgFQAQgBASAoQARAoAAAgQAAAKgXAIQgYghgKgmgABxjlQACgCgCgJIgDgQQAAgpAJgYQACgHAMgTQARASACADQACAEAAAPIgHAiIgHAmIABAIIAAABg");
	this.shape_19.setTransform(248.6,128.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#777FC7").s().p("AhVC9QgZgHgGgUIANgvQBIABAAgBQADACAcgFQATgDgJAPQABALANAYQANAZAIAEQgLACgcACIggACQgpAAgSgFgAkDCVQAFAIgBAEIgEADgAkDCPIAAgHIAXABIgCgBIAGgyIATAHQgFARgBAVQgCAUACAFgAB6B3QgLgVgDgRQAjglAghMIAmANQAJADAfAAQgcBhggAnQgSAVgQAAQgVAAgQgWgAkDBAQAFAFACAHIgHAigABsBHIADgFIgDAGIAAgBgAC0h7QABgjgFgjQAQAKAmAAQAeAIAAA2QAAABgQAIQgQAHgEAAQgoAAgEgSg");
	this.shape_20.setTransform(241.2,145.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#83888C").s().p("Ag1BAQghgTAAgqQAAgVAOgVQAYglA3ABQAygBATArQALAYAAAfQAAAZgRAMQgVARg1AAQgcAAgVgMg");
	this.shape_21.setTransform(256.4,114.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BBC1C7").s().p("AjtE6QAAgLAEggQAAAFAlADIAkADQgJAfAAASQAAAGADAFIAGAIQhNgGAAgegAgGE6QgEgigCgIIBAgdQACAQANAVQAQAZASAJQgGAEgcANIgdAMQgkAAgIgdgACABtIACguQASAHAcgFQAYgEAIgFIAAAdQAAAbgOAIQgGACgTAAQgpgDAAgKgAg+g4QgOgGAAgLQAAgTAfABQAuAAALgDQAAALAJANQAIALAEABIgIABQgwAGgKAAQgSAAgLgFgAglj9QgPgRAAgQQAAgGACgFIAFgJQAigKApBqQAAAKgSAMQgSgegfgjgACvjdQAGgMAMglQAJgcAGAAQAIAAAJAIQANALAAASQAAALgNAMQgXATgJALgABNjyQgDgCgCgDQgIgLAAg+QAAgPAIgOQAaAEAFAuIAFBAIABACIgcADQAAgJgEgDg");
	this.shape_22.setTransform(245,128);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#777FC7").s().p("AhrCoIAEgVQAEgVADgFQBFAAAtgIQABAZANAXQALAXANAEQg2AJgkAAQhJAAAAgdgAj7CeQAJAIgDAHQgCADgEABgAj7CbIAAgHIAMAAIAJgBIADgtIAAgFIATAGQgBAGgBAZQgCAZACAHgAB8BtQgOgVAAgQIAAgBQAhgXAdhVQAVAUAdAAQAQAAANgIQADAVgeBDQggBJgWAAQgcAAgSgbgAj7BSIAEAHQAAAHgEAVgACwh9QgIgOgDg0QACABAOgDQAfgGAXAEIgCACIACACQAIAJAIA0QgSANgEACQgGADgLAAQgcAAgIgNg");
	this.shape_23.setTransform(240.4,144.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#83888C").s().p("Ag+A9QgYgUgBgpQABgaAdgYQAggbAsAAQAYAAAWAdQAXAdAAAdQAABEhoAAQgbAAgTgRg");
	this.shape_24.setTransform(258.3,116.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BBC1C7").s().p("AgBE0QgHgjgEgIIAhgMIAigOQgIASAUAbQASAWANAGQgGAEgdALIgfALQgYAAgJgegAjhFBQgPgHAAgNQAAgPAJgfQAtALAaADQgHANgDASIgDARQAAAKAHAKQgtgJgOgHgACjB4QgVgFABgFIAFguQASAGAcgDQAYgCAIgGQABAtgMANQgHAHgTAAQgKAAgQgEgAgygpQAAgWAegEQAvgEAIgEQABALALAMQAIAHAFADIgpAKQgYAHgLAAQgiAAAAgQgAgijhIgOgiIABgKIAEgIQASABAhAjQAgAiAAAOQAAAKgPAPQglgSgWgngAC3jhIAHgkQAHgjALgKQAPAAALAQQAHAMAAAIQAAAJgKAMIgdAjgABMj+QgOgiABgZQAAgLAEgNQAKAGAMAFQAIAGADAJQACAKAGAkQAEAdAEAHIABABIgbAIQAAgCgOggg");
	this.shape_25.setTransform(245.1,130.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#777FC7").s().p("AhuC5QgKgHgBgOIABgGIACgEIAEgQQADgJADgEQAGgIA1gBIA5AAQgIAWAOAaQAMAYAOADQgMACgcADIgiABQg4AAgUgMgAkFCWQAGAHgEAHIgCACgAkFCRIAAgHIANAAQALAAgEAAIAAgBIAGgxIATAIQgLAZAAAXQABAKADAEIgmgNgAB0B0QgMgVAAgRQAAgLAFgDIAUgPQARgMAdhBQATAVAkACQAMAAAMgGQgBAVgiBAQgmBHgXAAQgbAAgPgdgAkFA9IACACQAFAJAAAIQAAAHgHAcgAC7h0QgDgJgDg4QAngDAagMIAEADQADAEAAAHIgBADIAEAEIAHA7IgaAMQgGAEgFAAQggAAgHgQg");
	this.shape_26.setTransform(241.5,145.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#83888C").s().p("Ag6A+QgbgTAAgrQAAgVARgVQAbgiA2AAQAoAAAUAiQAMAWAAAWQAAApgPAQQgRASgtAAQgqAAgYgPg");
	this.shape_27.setTransform(262.6,120.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#BBC1C7").s().p("AggE9QgVgaAIgdIBFgVQgBARAKAXQALAaARAKIhBAVQgLAAgRgVgAkNEqIgGgQQAAgGAFgRIAHgWQAWAIAwAKQgIANgFASIgDARIABAJIAEAKQgxgHgQgRgACXCCQgUgHgKgGQAEgNADgRIACgPQAGADATADQATAEAHAAQAOAAAOgJQgBAqgPAPIgPAGQgHAAgUgGgAgkgrQgNgGAAgKQAAgIAMgHQAMgIANAAIA0AEQgBAKAJAOQAHAKADACIgIABQgyAEgIAAQgQAAgMgGgAgJkVQAAgGACgDIAFgIQAPAEAaAkQAbAkAAAWQAAAKgUANQg3hAAAgogADSjKQAGgLAQgnQALgbAFAAQAOAAAJARQAKARgKAPQgFAHgRAQIgVASgABzjmQgJgQAAgrQAAgFAEgQQADgSAEgGQAJgIAMANQALANgBASIgDAuQgBAbACAHIAAADIgcABQACgFgFgLg");
	this.shape_28.setTransform(248.3,132.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#777FC7").s().p("AhCCyQgSgCgmgJIgLgaIASgtQBFAIAugCIgBAcQAAAMADANQAHASAQAHQgSACgRAAQghAAgXgEgABqBtQgIgTAAgTQA1gxAFgHIAVgtQAKALAVAJQASAIALAAQAGAAAEgCIAHgEQgEAZgmA8QgqBBgXAAQgcAAgNghgAkOBxIAAgIIARADIACgBIAKgyIATAJQgDAGgFAPQgGAUAAAJQAAAKACACgAkOAWQAEAEACAFQAFAIAAAIQAAAGgIAVIgDAHgADShmQgQgFAAgeQAAgVACgSQAZAEAbgEQAMgCAKgDIgLAFQAEAAADAIQADAOACAqIggAOQgUgBgJgDg");
	this.shape_29.setTransform(242.3,148.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#83888C").s().p("Ag2A0QghgbAAgaQAAgdARgVQAXgcAuAAQAxAAAXAZQAUAVgEAhQgDAegTAZQgTAZgXAAQgqAAgjgcg");
	this.shape_30.setTransform(267.9,123.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#BBC1C7").s().p("AhXEtQgMgcAGgTIAjgIIAlgKQgDAPAJAYQAJAaAQAMQgHADgdAIIgfAHQgRAAgNgegAk/EZIgFgRQAAgGAHgTIAIgTQAsAQAYAFIgJAVQgJAUAAAGQAAAKADAKQgwgJgPgSgABfB/QgbgSAZgmQAJAFAuAHQAJAAAPgHQgFAqgPAOIgOAFQgaAAgRgKgAAhhOQgtgOgPgJQgXgMAAgSQAAgKAQgDQAQgCASAHQAyAQgJAwgAD1ijQARgMAagZQASgSAGAAQAKAAACAQQADAQgHARQgDAGg9ATgABHjwQgEgSAAgiQAAgSAJgLQAEgFAHgEQAPAOADAFQAJARAAApQAAAYgEAIQgFANgWAIQgJgcgDgMgACmjRQAMgrAHgVQAMgjALgGQALgGAFALQAGAKgBAHQgBAGgQAkQgSAmgBAKIgBABg");
	this.shape_31.setTransform(252.9,134.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#777FC7").s().p("Ag9CsIg1gJQgUgEgGgMIgEgQIAWgsIBDAKQAXABAXgBIgCAcQAAAnAXANIgQAAQgaAAgfgFgABgBsIgHgdQgDgNACABQACACAcgSQAqggAQguQAJAMAUAJQASAGAMAAQAGABAEgBIAHgCQggBDgVAXQgVAXgrAgQgcAAgLgjgAkHBqIgMgHIAAgIIANABIADAAQAMgoABgJQAEADAOAHQgDAGgGAQQgGATgCAMQAAAEgFAAQgEAAgJgEgAkTAFQAEAEADAHQAEAIAAAJIgLAdgADGhsQAAgbAGgpQATALAYAGQARAEAMAAQgBAhgGANQgEAHgJAEIgGAEQgBACgHAAQgsgFAAgLg");
	this.shape_32.setTransform(242.9,150.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#83888C").s().p("AgvA2QgoggAAgdQAAgXAQgVQAXgfAtAAIAsANQAvATAAAiQAAAhgXAgQgZAigeAAQgUAAglgdg");
	this.shape_33.setTransform(270,125.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#BBC1C7").s().p("AhoEqQgMgcAGgUIAkgHIAkgKQgCARAIAXQAJAbAQAKQgGADgfAIIgfAHQgSAAgLgegAkyEhQgXgKgHgIQgFgFAAgJQAAgGAHgTIAIgTQAWAKAuANIgKAUQgJAVAAAFQAAAKADAJgABCBzQAAgGAGgUIAGgSQAHADAwAJQAJAAAPgHQgGAqgOANIgPAGQg4gIAAgOgAAihYQgigSgLgHQgdgTAAgQQAAghAqAYQAVANAWATIgDAVQgCAPABAFgAEBiHIAxgiQANgJAKAAQADAAAKAQQgEAggMAFIg9ALgAC7jCIAcg7QATghAUgJQAJABADANQADAMgDAGIgbAlQgYAigDAJIAAACgABojIQgEgmAAgQQAAg3AegSQARASgCA2QgCA4giAAIgFgBg");
	this.shape_34.setTransform(254.6,135.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#777FC7").s().p("Ah1CgQgdgNAAgTIAIgTQAJgUAEgFQAvAIAVABQAVADAZgBIgDAcQAAAmAWAOIgQAAQhJAAgkgPgABjB2QgJgTAAgTQAAgIAIgHIAhgdQAagWAUgoQAHALAVALQATAHAKgBQAHAAADgBIAHgBQgQAxgsAxQgoAsgSABQgWAAgMgZgAkKBlIgLgHIAAgJIAQACQAAgGAHgWIAGgVQAIAFAKAFIgLAVQgEAJgCAXQAAAEgFAAQgEAAgKgEgAkVAAQAFAEADAHQAEAIAAAJQAAAFgKAVIgCAFgADHhqIABgOIACgTQACgZACgLQAVARAYAKQARAHAKACIgCATQgDAJgDAGQgEAGgJAEIgGADQgCABgGAAQgsgDAAgMg");
	this.shape_35.setTransform(243,150.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#83888C").s().p("Ag0AyQgjghAAgaQABgZAQgVQAXgbAoAAQAuAAAdAgQATAXABAPQgBAWgQAeQgYArgqAAQgWAAgjghg");
	this.shape_36.setTransform(270.5,126.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#BBC1C7").s().p("AhsEnQgLgcAFgUIAkgHIAlgKQgDARAIAXQAKAbAQAKQgGADgfAIIggAHQgRAAgMgegAk1EeQgXgKgHgIQgFgFAAgJQAAgGAHgTIAIgTQAWAKAuANIgKAUQgJAVAAAFQAAAKADAJgAA/BwQAAgGAGgUIAGgSQAHADAwAJQAJAAAPgHQgHAqgOANIgOAGQg4gIAAgOgAAjhZQghgSgLgJQgbgTAAgRQAAgeAkAYQAUAMAcAVQgIAVACATgAEEh9QAOgHAcgUQAUgOAHAAQAHAAAJARQgDAhgTAFQgfACgZAFgADAi8QAKgRAWgoQAVghATgIIAHAcQgGAUgYAeQgXAfgBACIAAABgABsjjQAAhLATgOQAFgEALgEQAPAQgCAyQgDAxgrAMIgCgeg");
	this.shape_37.setTransform(254.9,135.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#777FC7").s().p("Ah1CeQgdgMAAgUIAIgTQAJgTAEgGQAvAIAVACQAUACAaAAIgDAbQAAAmAWAOIgQABQhKAAgjgQgABjB0QgJgSAAgUQAAgIAHgHIAigdQAagWATgoQAIAMAVAKQASAHALAAQAHAAADgBIAHgCQgRAxgrAxQgoAtgSAAQgWAAgMgZgAkKBjIgLgHIAAgIIAQABQAAgGAHgVIAGgWQAHAFALAFIgLAWQgEAIgCAXQgBAEgEAAQgFAAgJgEgAkVAAQAFACADAHQAEAIAAAJQAAAFgKAVIgCAFgADzhcQgsgEAAgMIABgOIACgSIADghQAMAKAZAOQAaAOAJABQACAGgBAGIgDAAQgCAKgDAFQgEAGgKAEIgFADQgCACgFAAg");
	this.shape_38.setTransform(243,151.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#83888C").s().p("AgmA7QgxgiAAgsQAAgaAZgUQAYgSAaAAQA0AAAdAmQAPAUAEAUQAAASgQAcQgWArgoAAQgYgIgYgRg");
	this.shape_39.setTransform(268.4,124.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#BBC1C7").s().p("AhhEtQgNgbAEgVIAjgJIAlgKQgCARAKAYQALAaAPAJQgFAEgeAIIgfAIQgRAAgOgdgAlKEbIgGgRQAAgGAGgTIAGgTQAiAMAjAJIgIAVQgHAVAAAFQAAAKAEAJQgxgJgPgRgAA9BxQAAgGAFgUIAEgSQAIADAwAHQAJAAAOgHQgBApgPAPIgPAGQg5gGAAgPgAAWhmIgrgeQgbgWAAgQIABgJIABgBQAHgBAMgEQAMgCAMAMIAbAcIALAKQAAAEgEAQQgDAPAAAEgAD3h6QAUgIAZgPQATgMAGAAQAKAAADABQATAughAGQgfAAghADgAC2i+QABgBAXgsQAbgsAXgDIAEAPQACAHAAAGQAAAMgXAdIghAmIgBABgABjjjQAAhUAkgSQAHADAEALQADAJAAAJIgLBCQgDAPgOAFQgQAEgFACg");
	this.shape_40.setTransform(254.2,134.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#777FC7").s().p("AhoCmQgUgEgHgMIgEgPIASgsQBTAKAggBIgCAWQAAAkAaAUIgRABQgqAAhDgNgABoBuQgHgTAAgUQA2gxADgFIAWgtQAKAMAVAKQASAGALAAQAGAAAEAAIAHgDQgHAYgdAzQgpBGgfAAQgdAAgMgggAkNBoIAAgIIANACIADgBIAKgxQAHAFAMAFQgCAFgHARQgFALAAAQQAAAKABACgAkNARIADAFQAFAJAAAHIgIAYgADRhjQgPgKAAgaIABgsIAFAGQAtAiAZABIAAAfQAAAFggAJQgTAAgKgGg");
	this.shape_41.setTransform(242.2,149.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#83888C").s().p("AgyA0QgmgaAAgeQAAgZANgTQAUgdAwAAQBkAAgEBNQgCAdgRAZQgSAYgUAAQgtAAglgag");
	this.shape_42.setTransform(263,118.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BBC1C7").s().p("Ag0EyQgNgXgBgZQAEAAA/gYQAAARAMAWQAOAbASAHIgkAOIgbAKQgTAAgPgZgAkbEwQgMgJAAgIQAAgGAEgSIAEgVQAjAKAkAGQgKAjAAANQAAAKAGAIQgsgFgTgPgABeBvQgSgQAPghQASAIAcgDQAYgCAIgFQAFA/giAAQggAAgOgMgAAJhSQgfgGgagQQgbgPgGgQQAYgPAbALIAoATQgCAXAJARgADZiqQAPgNAXgbQANgPALAAQAKAAAFAPQAFAPgHARQgCADgbALIgiANgAAij+IgKgmQAAgTAHgKIAKgJQANACALAcQALAeAAAmQAAALgEAGQgGAIgRAEQgFgMgKgngACEjVQAIgqAFgTQAJgjASgNQAUAFgCAKIgEAWQgCANgOAkQgOAkAEgHIAAACg");
	this.shape_43.setTransform(250.6,130.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#777FC7").s().p("AhlCpIgRgWIANguQBKAFApgEQgHAXAOAZQALAUAPAJQgcAEgZAAQhEAAgXgOgAkECBQAHAIgFAGIgCABgAkEB8IAAgGIAOAAQAKAAgEAAIAAgBIAGgtIgBgEQAIAFAMADQgJAZAAARQAAAJADALgAB1BpQgLgVAAgRQAwgyAFgHIARguQAEACAKAMQAPALAiAAQAGAAADgCIAGgEQgFAvglA3QghAygRAAQgcAAgRgegAkEAtQAEAHACAHQAAAHgGAYgAC/h1QgLgPAAgyQAGAIA7AMQAHgBAFAQQAEANAAALQAAAHgeAKQgeAAgKgLg");
	this.shape_44.setTransform(241.3,146.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#83888C").s().p("AhXADQAAgaAUgWQAbgcAzAAQAuAAAUAcQALARAAAVQgBAtgLAPQgQAVg2AAQhdAAAAhHg");
	this.shape_45.setTransform(259.2,116.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BBC1C7").s().p("Aj8FAQgMgJAAgKIAGguIAAAJIBIAFQgEAKgBAXQAAAVADAMQgsAAgUgPgAgUE1QgQgWgBgYIBDgbIgBAIIgBAHQADANAJAMQAOAUAXALQgGADgeAMIgdALQgQAAgQgYgAB3BtQgUgPAOgiQATAGAcgDQAYgDAIgFQAEAsgMANQgGAHgUAAQgZAAgOgKgAhPhPQAMgaAdAEQAQACAdAIIAGgBQgDAPAUAVIg3ABQglAAgRgYgAgakPQgCgHALgYQAjAPASArQAJAWABATQAAAKgVAKQguhCgFgWgADDjJIAMgcQANgcAMgMQAJgLANAPQALAOAAAOQAAALgaAVIgbASgABij5IgEgfQAAgYANgeQALANALAIQAGAGAAATIgDAhQgDAcABAHIAAACIgdAAQABgFgEgag");
	this.shape_46.setTransform(247.1,128.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#777FC7").s().p("AhhCxQgOgGgDgQIALguQBKACApgGQgHAWAPAYQAMAUAQAJQgjAGgdAAQg8AAgVgJgAj9CLIAAgIIAJABQAKgBgEAAIABgBQADghAAgKIAAgGQAIAEAMADQgHAWAAARQAAANADAKgAB2BnQgLgTAAgRQAug1AEgIIAPguQAJAJAXAHQAUAGAMAAQAGAAADgBIAHgGQAEAWgiBBQgjBGgWAAQgegBgRgcgACzh/QgGgLgCgvQAnAFAkgEIAIA2QgSAOgEABQgGADgMAAQgbAAgIgPg");
	this.shape_47.setTransform(240.6,144.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#83888C").s().p("Ag3BAQghgQAAgoQAAgcAXgYQAdgdAxgBQAnAAARAUQAPAQADAkQAEAngGAKQgRAbhMABQgbAAgUgLg");
	this.shape_48.setTransform(256.9,115.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BBC1C7").s().p("AjyEpIAFgqQAcAGAsAGQgCAHgDAQIgCAVQAAAKAHAMQhNgJAAgbgAABEyQgEgKgNglQADAAAdgNIAigPQABARANAWQAPAZAUAHIhAAbQgVAAgNgXgAB+BjIACgtQASAHAdgEQAYgEAHgFIABAdQAAAagPAIQgFACgUAAQgpgFAAgJgAg6gnQgOgFAAgKQAAgPAjgFQAygFAEgCQABALAKAMIAMALIgIABIghAGQgaAFgNgBQgIABgKgEgAgwj3QgKgXAMgNQAjgLArBjQAAAKgRANQgxgtgOgegAC6jRIgGgFIAPgxQAJgcAKAAQAGAAAJAHQAOAJAAASQgYA2gUAAQgGAAgHgGgABJj+QgJgfAAgSQAAgQAIgNQAbACAGAsIAHA/IABACIgdAEIgLglg");
	this.shape_49.setTransform(244.9,128.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#777FC7").s().p("AhiCzQgMgGAAgMQAAgHAEgOIAGgZQBJAAAqgGQgHAXAQAXQAMASARAKQgMADgcADIggABQg6AAgVgLgAj6CkIAAgOQADACAAAEQAAAIgCAAIgBAAgAj6CSIAAgIIAKABQAKAAgEgBIAAgBIADgpIgBgHQAIADANADQgHANAAAWQAAAVAEAGgAB5BqQgNgVAAgQQAtgzAEgKIANgvQAOAXAsAAQAKgBANgHQgDAvghA6QgfA1gQAAQgdAAgSgcgACuh8QgIgNAAgrQAcAAAsgJIAMBDIgWAIQgGADgMAAQgbAAgJgNg");
	this.shape_50.setTransform(240.3,143.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#83888C").s().p("Ag9A+QgbgSAAgnQAAgfAfgYQAggYApgBQAgAAAVAdQAUAbAAAfQAAAXgQAQQgZAZg5gBQgfAAgVgNg");
	this.shape_51.setTransform(256.6,115.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#BBC1C7").s().p("AjrEnIAFgqQAcAGAsAGQgDAMgBAVQAAAXAEAKQhNgJAAgbgAAIEwQgGgKgLglQADAAAdgNIAigPQAAAQAOAXQAPAZAUAHIhAAbQgVAAgNgXgACFBhIACgtQASAHAdgEQAYgEAHgFIABAdQAAAagPAIQgFACgUAAQgpgFAAgJgAhBgtQAAgRAYgHQAVgHAqAAQABAAADAJQAGALAPAMIgIACIghAIQgYAGgNAAQgigBAAgQgAg5kBQAAgHACgDIAEgIQAggMAzBgQAAAKgRAOQhIg8AAgegACyjaIAMgyQAIgdANAAQAgAAgKApQgJAngaAJgABHj7QgNgiAAgWQAAgMAGgLIAVAMQAHAFAEAIQAFALADAhQACAfAEAHIABABIgdAGQABgEgMgfg");
	this.shape_52.setTransform(244.2,128.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#777FC7").s().p("AhiC0QgMgGAAgMQAAgHAEgOIAGgZQBJAAAqgGQgHAXAQAXQAMASARAKQgMADgcADIggABQg6AAgVgLgAj6ClIAAgOQADACAAAEQAAAIgCAAIgBAAgAj6CTIAAgIIAKABQAKAAgEgBIAAgBIADgpIgBgHQAIADANADQgHANAAAWQAAAVAEAGgAB5BrQgNgVAAgQQAtgzAEgKIANgvQAOAXAsAAQAKgBANgHQgDAvghA6QgfA1gQAAQgdAAgSgcgACuh7QgIgNAAgqQAeAAASgFQALgCANgGIAMA+QgRAOgFACQgGADgMAAQgbAAgJgNg");
	this.shape_53.setTransform(240.3,143.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#BBC1C7").s().p("AgBE0QgHgjgEgIIAhgMIAigOQgIASAUAbQASAWANAGQgGAEgdALIgfALQgYAAgJgegAjhFBQgPgHAAgNQAAgPAJgfQAtALAaADQgHANgDASIgDARQAAAKAHAKQgtgJgOgHgACjB4QgVgFABgFIAFguQASAGAcgDQAYgCAIgGQABAtgMANQgHAHgTAAQgKAAgQgEgAgygpQAAgWAegEQAvgEAIgEQABALALAMQAIAHAFADIgpAKQgYAHgLAAQgiAAAAgQgAgqjwQgMgYALgNIAIgBQAIAAAfAdQAkAhAAAXQAAAKgPAPQgzgqgQgegAC3jhIAHgkQAHgjALgKQAPAAALAQQAHAMAAAIQAAAJgKAMIgdAjgABMj+QgOgiABgZQAAgLAEgNQAKAGAMAFQAIAGADAJQACAKAGAkQAEAdAEAHIABABIgbAIQAAgCgOggg");
	this.shape_54.setTransform(245.1,130.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#777FC7").s().p("AhuC5QgKgHgBgOIABgGIACgEIAEgQQADgJADgEQAGgIA1gBIA5AAQgIAWAOAaQAMAYAOADQgMACgcADIgiABQg4AAgUgMgAkFCWQAGAHgEAHIgCACgAkFCRIAAgHIANAAQALAAgEAAIAAgBIAGgxIATAIQgLAZAAAXQABAKADAEIgmgNgAB0B0QgMgVAAgRIABgEQAwgcAWhKQATAVAkACQAMAAAMgGQgBAVgiBAQgmBHgXAAQgbAAgPgdgAkFA9IACACQAFAJAAAIQAAAHgHAcgAC7h0QgDgJgDg4QAngDAagMIAEADQADAEAAAHIgBADIAEAEIAHA7IgaAMQgGAEgFAAQggAAgHgQg");
	this.shape_55.setTransform(241.5,145.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#BBC1C7").s().p("AhXEtQgMgcAGgTIAjgIIAlgKQgDAPAJAYQAJAaAQAMQgHADgdAIIgfAHQgRAAgNgegAk/EZIgFgRQAAgGAHgTIAIgTQAsAQAYAFIgJAVQgJAUAAAGQAAAKADAKQgwgJgPgSgABfB/QgbgSAZgmQAJAFAuAHQAJAAAPgHQgFAqgPAOIgOAFQgaAAgRgKgAAhhOQgtgOgPgJQgXgMAAgSIANgLQASgIATAOQAeAUACADQACABAHAlgAD1ijQARgMAagZQASgSAGAAQAKAAACAQQADAQgHARQgDAGg9ATgABHjwQgEgSAAgiQAAgSAJgLQAEgFAHgEQAPAOADAFQAJARAAApQAAAYgEAIQgFANgWAIQgJgcgDgMgACmjRQAMgrAHgVQAMgjARgLIANAVIABAIQAAAEgQAkQgSAmgBAKIgBABg");
	this.shape_56.setTransform(252.9,134.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#777FC7").s().p("Ag9CsIg1gJQgUgEgGgMIgEgQIAWgsIBDAKQAXABAXgBIgCAcQAAAnAXANIgQAAQgaAAgfgFgABgBsQgEgQgBgNQgBgNAGgBQAGgBASgNIA4hOQAJAMAUAJQASAGAMAAQAGABAEgBIAHgCIgkBIQgNAUhEA1QgcAAgLgjgAkHBqIgMgHIAAgIIANABIADAAQAMgoABgJQAEADAOAHQgDAGgGAQQgGATgCAMQAAAEgFAAQgEAAgJgEgAkTAFQAFAEACAHQAEAHAAAKIgLAdgADGhsQAAgbAGgpQATALAYAGQARAEAMAAQAAAlgGAOQgFAOgFgEQgFgDgFADQgBACgHAAQgsgFAAgLg");
	this.shape_57.setTransform(242.9,150.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#83888C").s().p("AgnA1QgogXAAgUQAAgLAIgCQAHgCAagDQAagEAGgTQAFgTgCgKQgCgIABgEQAMAEAOARIAXAdQADAEAVAFQALADAAAZQAAAVgXASQgWATgZAAQgNAAgkgUg");
	this.shape_58.setTransform(277.1,160.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#BBC1C7").s().p("AhXBfIgNg9QAYAAAqgEQgCAVACAKIAJAhIAIADIABABQgYADgQAAQgaAAgFgGgAEjBgQgNgDgCgqQAQAFAOgKQANgJAJgRIACABQAQAggMAXQgMAWgJABIgDAAQgJAAgKgDgAlSAwQAPguABgMIA2ATIAIAGQgFAQAAAcIABARgAEBAPIgKgQQAMgFAHgQQAFgKABgIQAAgKADgBQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAUAKAHAWQAEAKAAAIQAAAOgKAKQgJAIgLAAQgKAAgMgRgAAsACQgGgEAAgMQAAgdAPgJQAIgFASAAQAYAAAKANQAHAJAAAMQAAAMgZAHQgiAIgDAFIgCABQgJgEgDgEgADPgbIgPgZQgUgeghAYIgLgTQALgMAKgEQAOgHAXAAQAUAAAWASQAXAUAAAUQAAAIgIAJQgJAKgKAAQgJAAgIgMg");
	this.shape_59.setTransform(261.5,158.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#777FC7").s().p("Ag5BIIgBgVIAMgsQBjAQAIABQADAUAFARQAFARAHAJIgMACIh+gRgADDBWIgTAAQgPgeAKgnIASgJQARgCAGAAQADAAAJAJIAXAZIAPANIARAVQgGAAgmAHQgfAFgHAAIgCAAgAkNgYIgJgMIAAg0QAIACAkAUQArAYAeAMQgKATgGARQgFANAAAGQg2gSghgfg");
	this.shape_60.setTransform(243.1,159.2);

	this.instance_18 = new lib.MIX_34_arm_L("synched",0);
	this.instance_18.setTransform(210.3,147.4,0.999,0.999,-8.2,0,0,-18.8,-18.9);

	this.instance_19 = new lib.MIX_34_hand_L("synched",0);
	this.instance_19.setTransform(257.6,179.9,0.999,0.999,-5.2,0,0,-3.5,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},11).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},2).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51}]},2).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_24}]},3).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_30}]},2).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},2).to({state:[{t:this.instance_19,p:{regX:-3.5,regY:-4.8,rotation:-5.2,x:257.6,y:179.9}},{t:this.instance_18,p:{regY:-18.9,rotation:-8.2,x:210.3,y:147.4}}]},2).to({state:[{t:this.instance_19,p:{regX:-3.6,regY:-4.7,rotation:-7.6,x:257.8,y:179.2}},{t:this.instance_18,p:{regY:-18.8,rotation:-8.6,x:210.4,y:147.1}}]},2).to({state:[{t:this.instance_19,p:{regX:-3.5,regY:-4.8,rotation:-8.9,x:258,y:178.9}},{t:this.instance_18,p:{regY:-18.8,rotation:-8.9,x:210.3,y:147.1}}]},2).to({state:[]},21).wait(25));

	// Layer 36
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ADEDUQgSgKAAgbQAAgGAEgIIAEgHQgkgUgWgZIgSgUQgbACghAAQgrABAUABIgtAFQhXAAhlgqQhtgug2hKIAAiNQAMAEAOAJIgagXIAAgBQCoB3A+AdQBFAgBjAAQAvAAAJgDQAXgHAXgDQAegEAMgHQAIgEAHgJQASgQAogEQARAAALAMQALAMAAAWQAAAKgHASIAIgGQAOgHAMAAQAXAAARAZQASAXABAeQgBAVgRALQgFAEgVAHQACAJAEAPQAEAMgBAFQAAAKgPAQQgRASgRAFIgWADQgIABgCADIgDAIQgMAXgYAAIgCAAQgJAAgJgFg");
	this.shape_61.setTransform(252.3,170.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("Aj+EHIgdgPQgRgFgVAAQgIAAgOgcQgEAEgEABIAAh3QATAGAnAUQBOAdBpAAQBaAAAygxQAzgxAAhUIgDgxQgNgGAAgKQgQgCgQgIQghgSAAgkQAAghAYgNQAQgKAggBQgEgIAAgKQAAgaAdgNQAZgMAoAAQAdAAAMAFQAEACARAPQAKAIAYAKQAXAJAFAFIAuAvQAUAbAAAsQgWAwgbABQgUgBgRgPQgGgFgSgXQgCAMgPAXIgMAWQgGAOAAAHQAAE0k8AAQhkAAgtgTgAE4inIACAAIgCgEg");
	this.shape_62.setTransform(250.4,141.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AjbFvQhKgUgSgeIgEACIAAh8QAXAJAjASQA1AUBRAAQCEAAA1hAQAqgwAAhkQAAgLgEgdQgDgjgCgCQgWgRgNgDQgDAAgGACQgIACgDAAQh8AEAAhAQAAgLALgMQAPgSAaAAQAEAAAXAEQAZAHALAGQAHgegBgKQgKgPgMgXQgUgtgBgsQABgaAFgNQAGgOAMAAQAsAAAWA5QAOAkgBAcIgBAIIASgCQgJgTAAgWQAAhkAuAAQATAAAOATQAMARgBANQAAAxgHAcQgFARgHAFIAaAKQAHghAYgYQAXgXAZABQAjAAAAA0QAAAkgYAWQgTARgdACIACAKIACARQAAAvgNAdQgLAZAFAtQADAjgBAUQgBA+gUBDQgnB+huAtQhBAbh6AAQgmAAg3gPg");
	this.shape_63.setTransform(246.8,129.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AiqF1Ig2gNQgSgDgOgLQgMgJgFgMQgCACgEACIAAh5IAhAOQBEAVBYAAQDXAAgBjHQABgvgLgYQgMgegeAAQhEASgVAAQgfAAgSgOQgRgNABgPQgBgeAbgNQAdgOAzAKQAAgVgFgcIgmgxQgQgSgKgXQgKgWAAgVQgBgdAbAAQAkAAAaAqQAPAWARAkIAAAIIARgFQgLgFgEgKQgFgLgDgzQgDgzARgNQAJgGAJABQAqAAANA6QALAxgNAgIAZABQAEgBgBgHQAFgoATgXQATgWAYAAQAOAAANAQQAOATAAAfQAAAcgNAPQgLALgfAPIAKAcQAJAdAAASQAAAQgDAXIgGAEIgCACIAAACQABAHAIA1QAJAzAAAsQAADFiRBHQhQAniHAAQgPAAgugLgADohAIAAAAIAAgGIAAAGg");
	this.shape_64.setTransform(243.2,129);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("Aj8FPQgGAAgFgFQgFgFgLgSIgCACIAAh+IAKAFIAeATQA3AaCMAAQBgAAAzhEQApg4AAhTIgDg/QgfgHgKAAQgcAQgNAFQgwALgLAAQgdAAgPgOQgLgLAAgRQgBgVAXgQQAdgUAyADQgHgYAAgPQgTgDgMgOQgagfgSgiQgQggAAgVQAAgTAOgGQAFgDAOAAQAlAAAeAmQANARAOAfIABAJIAPgJQgJgHgMgfQgPgmAAgfQAAgUAPgMQAKgIAJAAQAnAAASAvQAQAqgKAqIAcAAQgCgMAAgKQAAghAXgaQATgXAVAAQASAAANAYQAMAWAAAZQAAAqgvAWQANAXAFApQAEAkgKAVQAGALAGAjQAYD+h8BgQhSBAjCAAQgNAAh6glg");
	this.shape_65.setTransform(243.4,131.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AjnFWQhGgXgNgfIAAh9IALAFIAsAZQBLAkByAAQDCAAADjxIAAgVQgWgEgKAAIgTAIQgTAIgvAAQgbAAgTgLQgVgLAAgUQAAgYATgQQAdgbA9AUQACgegJgLQgNgKgHgMQgKgQgPgrQgOgsAAgNQAAgXALgIQAEgEAKAAQAkAAAcAsQAWAiADAZIAAAIIARgFQgMgUAAgDIgEgeQgEgZAAgHQAAgjAQgQQALgLAMAAQAgAAALAfQAIAWAAA3QAAAUgHANQAZACACADQgJgZAagiQAagkAeAAQAOAAAKARQALASAAAWQAAAdgNAUQgPAZgfAFQADAIAFAYQAFAaAAAJQAAAXgDAKIgPAeIAAACIgBgBIgBACIABAEIABAAIgDBvQgaCHgqA3QgqA2hSAdQg8AXhGAAQhVAAhIgYg");
	this.shape_66.setTransform(246.7,133.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AjsFaIg+gZQgygQgQgaIAAiEQAUAJAvAaQBgApBmAAQBaAAAzhJQAzhGAAhzQAAgLgZgJIg2gQQhOgYAAgnQAAgMAMgNQAPgQAYAAQAQAAAXAKQAVAKAKALQAPgfAFgQQgHABgHgaQgHgagBg7QAAg6AoAAQAoAAAKA1QAFATAAArIgBAJIgCAIIgFAIQASABAAABIAAAAIAAAAIgCgPQAGg0ATgfQATgfAaAAQAMAAAMAOQANAQAAATQAAAHgMAcQgLAbgMATQgNASADAAIAWAPQAIgWAagUQAcgUAaAAQAVAAAJAOQAFAKABANQgBAkgXAOQgYAOgvASQABAIgFAVQgGAdgJARQgSAegPALQABAWgQBMQgSBTgRAfQgwBWhKAnQg/AhhbAAQhQAAgxgOg");
	this.shape_67.setTransform(251.8,134.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AjlFZQgzgLgbgPQgdgMgPgIQgUgLgKgOIAAiGQAUAKAvAbQBfArBnAAQBjAAAzhRQAfgvALg9QAFggAAgmQABgMgWgLIgvgUQhDgdAAgpQAAgQALgMQAOgNAVAAQAHAAAXAMQAgAPANAQQAWgcAAgFIgCgYQgDgSACgbQABgbANgmQAOgmAXAAQAXAAANAeQAKAWAAASQgLBAgDAFIgFAHIALAEQACgLAbguQAig6AagBQAPAAAJANQALANAAAXQAAAGgQAdQgQAdgWAWQgXAWAPgKIAVATQAIgOAXgPQAdgTAXgBQAqABAAAlQAAAlgoAQQgnAQgcACQgiBRgeAUQgMAJgFAQQgCAGAAAIIgEAiQgYBggDAGQgwBbhCAqQhCArhfAAQg8gBg4gLg");
	this.shape_68.setTransform(253.5,135.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AjpFVQgygKgcgQQgdgLgPgIQgUgLgKgPIAAiGQAUAKAwAcQBeArBnAAQBjAAA0hSQAWghALgpIAAAAQANgvAAg4QAAgJgUgLIgtgWQg/ghAAgpQAAgUATgLQAOgIAPAAQAFAAAZANQAfAQAMASIAPgSQAJgLAAgEIgBgSQgBgOAAgYQAAgYARgtQARgsAYAAQAWAAAMAfQAIAVAAAPQgNBFgDAFIgGAGIARAGQAAgPADgIQAEgKAQgcQAdgzAkAAQARAAAKATQAGANAAAJIgOApQgTAqgiAUIATATQAMgOAXgNQAcgQAXAAQAoAAAAAmQAAAdggAUQgfATgvgBQgkBTggAPQgOAIgDAhIgBAIIgDAAIgCAOQgYBhgDAGQgvBahDArQhBAqhfAAQg8AAg5gMg");
	this.shape_69.setTransform(253.8,136);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AjyFcQgbgHglgSQgUgGgPgIQgWgLgMgSIAAh/IBAAeQBiAnBeAAQC7AAAAkHQAAgSgUgPQgJgHgjgVQg/glAAgnQAAgRAOgKQANgKARAAQAMAAAZARQAcASALASQAZgbAAgEQAAgFgDgHQgFgIAAgGQABgtAWgvQAXgvAXAAQAPAAANAYQAMAXAAAXQgQBDgDAGIgFAGIAQAGQAfhAAHgJQAUggAdAAQASAAAJAPQAJAMgBATQAAAKgUAhQgZAngYAOIASAUQANgOAagLQAYgMASAAQAYAAAMANQAJAJAAANQABAcgWAVQgXAUgWAAQgXgBgWgDQgCAWghAkQgiAfgDAFQgEAHgLBOQgMBRgKAVQhWChi1AAQhVAAgugLg");
	this.shape_70.setTransform(252.9,134.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Aj6FWQg4gUgGAAQgDAAgHgHQgIgJgFgNIgCACIAAh7IAxAZQBQAeBqAAQBaAAAvg3QAxgzAAhXQAAg9gNgTQgMgTgqgGQg7gJgZgQQgXgQAAgfQAAgOAPgLQAOgLASAAQATAAAYAJQAWAJAJALIANglQgGgMgHgSQgOglAAgiQAAhKAmAAQA3AAAECBIgDAHIATABQgEgLgBgJQAAglATgjQATgkAYAAQARAAANAUQAMAQAAAKQgLA3gHASQgKAUgJAHIAYAOQAGgXAZgTQAagUAaAAQAZAAAJARQAGAJAAAMQAAATgKAQQgKAQgIAGQgIAHgjAIIgOAJQgCACAAAJIgGAgQgIAegHAMQgQASgCAFQgDAEAAAwQAADWhfA8Qg0AhgKAEQgbANgvAIQgZAEg5gBQgugCABAFIAAABQgtgDg5gSg");
	this.shape_71.setTransform(249.1,131);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AkZFNIgWgaIAAh0IAdAPQBFAZBYAAQBtgBA1grQA8gwAAhlIgJhYQgWgEgKAAIgUAGQgUAFgfAAQgoAAgWgOQgUgMAAgUQAAgRAQgOQASgRAeABQAIgBARAEQATADAGADQAAgKABgNIABgQIgPgQQgPgSgEgIQgag2AAgjQAAgWAIgKQAGgHAMAAQAnAAAcAxQAPAcAGAcIgBAIIASgEQgGgEgEgUQgFgVAAgbQAAgrAUgRQAKgJAKAAQAdAAALAZQALAVAAAyQAAAXgLAVIAbAFQAGggATgZQAVgdAeAAQATAAAKASQAJAQAAAXQAAAZgQAVQgTAXgeADQAEAIADAWQADAUAAAIQAAAOgFAaQAAADgLAKQgJALAAAFIAHBjQAADQiIBIQhPAriagBQgQABh/gkg");
	this.shape_72.setTransform(245.6,129.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AkCFOQgGAAgRgbIAAhzIAaAMQBFAYBZAAQBsAAA1gtQA3gwAAhmIgKhPQgXgCgJAAQgFgBgZAMQgYANgsAAQgbAAgRgMQgQgKAAgQQgBgdAagOQAcgPA2AGQgFgVAAgSQgYgSgMgKQgMgLgRgkQgQgkAAgWQAAgeAaAAQArAAAhAsQAPAWAIAZIAAAIIARgGQgJgQgHgPQgNgeAAglQAAgbASgMQAKgGAKAAQAoAAAOA1QAMArgMAkIAZAAQADgBAAgIQAGgkASgZQASgZAZAAQAOAAANAOQAPARAAAfQAAAagMAPQgLAOgdAOQAIAMAGAdQAGAZgDAQIgFAcQgCAMgEABIgDACQABACAAAEQAAAPAHAoQAFAmAAAqQAADDiTBEQhOAkiJAAQgLAAiDghg");
	this.shape_73.setTransform(243.5,129.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Aj8FMQgHAAgRgbIAAhyIAbAMQBFAXBZAAQBsAAA1gtQA3gwAAhlIgEgfIgGgqQgGAAgLgCQgKgDgGAAQgBAAgSAJQgUAKgQADQggAHgPAAQgeAAgPgPQgLgKAAgOQAAgYAXgPQAcgSA1ADQgFgTgBgTQgSgEgLgNQgOgPgVgjQgYgqAAgTQAAgRAHgIQAIgGAPAAQAiAAAbAfQAOAQAXAmIAAAJIARgIQgigeAAhCQAAgbAQgMQAKgIAKAAQAoAAAQAwQAPArgKAmQAcAAAAABIABAAIgBAAQgBgHAAgKQAAgjAXgbQAVgWASAAQAVAAAOAYQALATAAAWQAAAagQASQgIAIgaAPQAKAKAIAdQAHAaAAAVQAAAHgEANQgFARgJAKIABAAIAFgCIAAAEQgBAOAHApQAGAmAAAqQAADCiUBEQhNAkiKAAQgLAAiCghg");
	this.shape_74.setTransform(242.9,129.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Aj8FPQgGAAgFgFQgFgFgLgSIgCACIAAh+IAKAFIAeATQA3AaCMAAQBgAAAzhEQApg4AAhTIgDg/QgfgHgKAAQgcAQgNAFQgwALgLAAQgdAAgPgOQgLgLAAgRQgBgVAXgQQAdgUAyADQgHgYAAgPQgTgDgMgOQgagfgSgiQgQggAAgVQAAgTAOgGQAFgDAOAAQAlAAAeAmQANARAOAfIABAJIAPgJQgJgHgMgfQgPgmAAgfQAAgUAPgMQAKgIAJAAQAnAAASAvQAQAqgKAqIAcAAQgCgMAAgKQAAghAXgaQATgXAVAAQASAAANAYQAMAWAAAZQAAAqgvAWQASAcAGAmQAGAlgGAKQgHALgDANQAEgBAIAnQAWD2h8BgQhSBAjCAAQgNAAh6glg");
	this.shape_75.setTransform(243.4,131.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AjsFaIg+gZQgygQgQgaIAAiFQAUAKAvAaQBgApBmAAQBaAAAzhJQAzhGAAhzQAAgLgZgJIg2gQQhOgYAAgnQAAgMAMgNQAPgQAYAAQAQAAAXAKQAVAKAKALQAPgfAAgGQgEgHgFgLQgIgWgBgZQAAhxAsAAQAlAAAKA1QAFATAAArIgBAJIgCAIIgFAIQASABAAABIAAAAIAAAAIgCgPQABg0AWghQAVgdAaAAQAMAAAMAOQANAQAAATQAAAHgJAbQgJAZgHAOQgIARgMAJIAWAPQAIgWAagUQAcgUAaAAQAVAAAJAOQAFAKABANQAAAkgaAVQgaAWgrADQABAIgFAVQgGAdgJARQgSAegPALQABAWgQBMQgSBTgRAfQgwBWhKAnQg/AhhbAAQhQAAgxgOg");
	this.shape_76.setTransform(251.8,134.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgtB6QgxgEgPgCQgOgDgdgCQgegCgcgHQgcgHhIgaQhHgagXgeIgGgEIAAh8IBWAtQCDBEBdAFQBeAHAQgFQATgFAUgGQAVgHAEgMIAHgXQAJgYAmgEQADAAANACQABgGAMgNQAZgbApgDQAogCAhAXQATAOAkAhQAYASAIATQADAIANAPQAMAUAAAiQAAAWgPAUQgQAWgVAAQgqAAgRg6QgbAngUAEIgmAGQgTADgKgIQgKgHgMABQgNABgRAGQgQAGgcACIgsACIgdADIgOABQgPAAghgCgAF8AUIADABIgCgFg");
	this.shape_77.setTransform(256.3,158.2);

	this.instance_20 = new lib.MIX_34_arm_L("synched",0);
	this.instance_20.setTransform(210.3,147.4,0.999,0.999,-8.2,0,0,-18.8,-18.9);

	this.instance_21 = new lib.MIX_34_hand_L("synched",0);
	this.instance_21.setTransform(257.6,179.9,0.999,0.999,-5.2,0,0,-3.5,-4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},11).to({state:[{t:this.shape_62}]},2).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},2).to({state:[{t:this.shape_65}]},2).to({state:[{t:this.shape_66}]},2).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},2).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},2).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},2).to({state:[{t:this.shape_74}]},2).to({state:[{t:this.shape_75}]},3).to({state:[{t:this.shape_76}]},2).to({state:[{t:this.shape_77}]},2).to({state:[{t:this.instance_21,p:{regX:-3.5,regY:-4.8,rotation:-5.2,x:257.6,y:179.9}},{t:this.instance_20,p:{regY:-18.9,rotation:-8.2,x:210.3,y:147.4}}]},2).to({state:[{t:this.instance_21,p:{regX:-3.6,regY:-4.7,rotation:-7.6,x:257.8,y:179.2}},{t:this.instance_20,p:{regY:-18.8,rotation:-8.6,x:210.4,y:147.1}}]},2).to({state:[{t:this.instance_21,p:{regX:-3.5,regY:-4.8,rotation:-8.9,x:258,y:178.9}},{t:this.instance_20,p:{regY:-18.8,rotation:-8.9,x:210.3,y:147.1}}]},2).to({state:[]},21).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-28.7,307.5,247.3);


(lib.MixieFPO = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.MIXIEFLYIN("synched",0,false);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(128));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23,-28.7,320.5,255.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;