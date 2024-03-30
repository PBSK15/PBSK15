(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PlumPuppet = function() {
	this.initialize();
	cjs.MotionGuidePlugin.install();
	
	// Layer 1
	this.instance = new lib.STK_Plumcomp("single",74);
	this.instance.setTransform(224,222.1,1.6,1.6);

	this.movingparts=[];
	this.nextblink=100;// how long between blinks
	this.nextflip=60;
	this.bouncetimes; // how many times to jump for joy
	this.antennaside='left';
	
	this.topknotshape; // keep track of what Plum's topknot is showing as
	
	this.detentepoint={};
	
	this.grav=new lib.Vect(0,.98);
	//console.log("grav? " + this.grav.x + "," + this.grav.y);
	
	this.floaters=[];


	this.setMouth=function(where) {
		this.instance._mouth.gotoAndStop(0);
		this.instance._mouth._syncmouth.gotoAndStop(where);
	}
	
	this.goBlink=function() {
//		console.log("BLINK!");
		//this.instance.gotoAndStop(78);
		this.nextblink=100+parseInt(Math.random() * 200);		
		this.movingparts.push([this.instance._lidright,[1,2,3,4,5,6,7,8,9]]);
		this.movingparts.push([this.instance._lidleft,[1,2,3,4,5,6,7,8,9]]);
	}
	
	this.closeEyes=function(whicheye) {
		if(!whicheye) {
			this.movingparts.push([this.instance._lidright,[1,2,3]]);
			this.movingparts.push([this.instance._lidleft,[1,2,3]]);
		}
	}
	
	this.openEyes=function(whicheye) {
		if(!whicheye) {
			this.movingparts.push([this.instance._lidright,[3,2,1,0]]);
			this.movingparts.push([this.instance._lidleft,[3,2,1,0]]);
		}
	}
	
	this.goFlip=function() {
		//this.instance.gotoAndStop(78);
		this.nextflip=100+parseInt(Math.random() * 200);
		if(Math.random() >.5) {
			this.movingparts.push([this.instance._leftfin,[1,2,3,4,5,6,7,8,9,10]]);
		}
		if(Math.random()>.5) {
			this.movingparts.push([this.instance._rightfin,[1,2,3,4,5,6,7,8,9,10]]);
		}
	}
	
	this.lookleft=function() {
	// should consolidate the eye in the puppet...
		
		//this.instance.instance;

		
		
		var px=-70;
		var py=-40;
		cjs.Tween.get(this.instance.instance_4).to({x:px,y:py},300);
		cjs.Tween.get(this.instance.instance_3).to({x:px-11,y:py-9},300);
		
		
		// right eye detente:
		px=54;
		py=-41;
		cjs.Tween.get(this.instance.instance_1).to({x:px,y:py},300);
		cjs.Tween.get(this.instance.instance).to({x:px+11,y:py-9},300);
	}
	
	this.lookright=function() {
	// should consolidate the eye in the puppet...
		
		var px=85;
		var py=-42;
		cjs.Tween.get(this.instance.instance_1).to({x:px,y:py},300);
		cjs.Tween.get(this.instance.instance).to({x:px+11,y:py-9},300);
				// left eye detente:
		px=-36;
		py=-40;
		cjs.Tween.get(this.instance.instance_4).to({x:px,y:py},300);
		cjs.Tween.get(this.instance.instance_3).to({x:px-11,y:py-9},300);
	}
	
	
	this.flipTopknot=function() {
	
	
		this.nextflip=100+parseInt(Math.random() * 200);
	
//		console.log("FLIP! next " + this.nextflip);
		if(this.antennaside=='left') {this.movingparts.push([this.instance._antenna,[34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]]);
		
		this.antennaside='right';
		} else {
		this.movingparts.push([this.instance._antenna,[50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,25]]);
		this.antennaside='left';
		}
		
//		console.log("how many moving parts? " + this.movingparts.length);
	}
	
	this.important=function() {
		this.movingparts.push([this.instance._antenna,[70,71,72,73,74,75]]);
	}
	
	this.goPoint=function() {
		this.movingparts.push([this.instance._leftfin,[19,20,21,22,23]]);
	}
	
	this.goYay=function() {
	//	this.settleDown();
		this.detentepoint.x=this.x;
		this.detentepoint.y=this.y;
		this.armsareup=true;
		this.movingparts.push([this.instance._leftfin,[19,20,21,22,23,24,25,26]]);
		this.movingparts.push([this.instance._rightfin,[19,20,21,22,23,24,25,26]]);
		
		this.bounceAround(5);
		var me=this;
		
	}
	
	this.swapTopknot=function(from,to,callbackfunction) {
		// pass in the current topknot and another to go to
		
		console.log("cone? " + to + "," + from);
		to.visible=false;
		from.visible=false;
		
		
		
		this.te=new lib.tentacle_effect2("independent",0,false);
		this.te.scaleX=this.te.scaleY=.15;
		this.te.y=-150;
		this.te.x=-40;
		
		this.instance.addChild(this.te);
		var me=this;
		setTimeout(function() {
			to.visible=true;
			me.topknotshape=to;
			from.visible=false;
			me.te.visible=false;
			me.instance.removeChild(me.te);
			if(callbackfunction) {
				callbackfunction();
			}
		},300);
	}
	
	
	this.armsDown=function() {
		if(this.armsareup) {
			this.movingparts.push([this.instance._leftfin,[26,25,24,23,22,21,20,19,1]]);
			this.movingparts.push([this.instance._rightfin,[26,25,24,23,22,21,20,19,1]]);
			this.armsareup=false;
		} else {
			this.movingparts.push([this.instance._leftfin,[1]]);
			this.movingparts.push([this.instance._rightfin,[1]]);
		}
	}
	
	this.bounceAround=function(times) {
		if(typeof(times)=='number') {
			this.bouncetimes=times;
		} else {
			this.bouncetimes--;
		}
		if(this.bouncetimes > 0) {
			var newy=this.instance.y-30;
			var newx=this.instance.x+20;
			var me=this;
			cjs.Tween.get(this.instance).to({x:newx,y:newy},500,cjs.Ease.cubicInOut).call(function() {me.backDown();});
			cjs.Tween.get(this.instance).to({rotation:Math.random()*20-10},500,cjs.Ease.cubicInOut);
		} else {
			//this.settleDown();
			//this.stopConfetti();
		}
	}
	
	this.fullSqueeze=function(callbackfunction) {	
		var me=this;
		var time=500;
		this.squeezeIn(time);
		var time2=800;
		setTimeout(function() {me.squeezeOut();me.openEyes();},time2);
		
		if(callbackfunction) {
		setTimeout(function() {callbackfunction();},(time+time2));
		}
	}
	
	this.squeezeIn=function(timein) {
		this.closeEyes();
		var time=500;
		if(timein) {
			time=timein;
		}
		
		var tweentype=cjs.Ease.cubicOut;
		
		cjs.Tween.get(this.instance._bodyleft).to({scaleX:.65},time,tweentype);
		
		cjs.Tween.get(this.instance._bodyleft).to({rotation:5},time,tweentype);
		cjs.Tween.get(this.instance._bodyright).to({scaleX:.65},time,tweentype);
	
		cjs.Tween.get(this.instance._lefteye).to({scaleX:.65},time,tweentype);
	
		cjs.Tween.get(this.instance._righteye).to({scaleX:.65},time,tweentype);
		
		
		var nx=this.instance._leftfin.x+24;
		cjs.Tween.get(this.instance._leftfin).to({x:nx},time,tweentype);

		nx=this.instance._rightfin.x-24;
		cjs.Tween.get(this.instance._rightfin).to({x:nx},time,tweentype);


	}
	
	this.squeezeOut=function(timein) {
		var time=1000;
		if(timein) {
			time=timein;
		}
		var tweentype=cjs.Ease.elasticOut;
		var bodyscale=.84; /// magic number...
		cjs.Tween.get(this.instance._bodyleft).to({scaleX:bodyscale},time,tweentype);
		cjs.Tween.get(this.instance._bodyleft).to({rotation:0},time,tweentype);cjs.Tween.get(this.instance._bodyright).to({scaleX:bodyscale},time,tweentype);
	
		cjs.Tween.get(this.instance._lefteye).to({scaleX:1},time,tweentype);
	
		cjs.Tween.get(this.instance._righteye).to({scaleX:1},time,tweentype);
		
		
		var nx=this.instance._leftfin.x-24;
		cjs.Tween.get(this.instance._leftfin).to({x:nx},time,tweentype);

		nx=this.instance._rightfin.x+24;
		cjs.Tween.get(this.instance._rightfin).to({x:nx},time,tweentype);
	}
	
	this.settleDown=function() {
			//this.stopConfetti();
			if(this.instance.rotation!=0) {cjs.Tween.get(this.instance).to({rotation:0},500,cjs.Ease.cubicInOut);}
			if(!this.detentepoint.x) {
				this.detentepoint={x:this.x,y:this.y};
			}
			if(this.x!=this.detentepoint.x) {cjs.Tween.get(this).to({x:this.detentepoint.x,y:this.detentepoint.y},500,cjs.Ease.cubicInOut);
			}
			
			this.armsDown();
			if(!this.instance._antenna.visible) {
				this.swapTopknot(this.topknotshape,this.instance._antenna);
			}
			
			this.flipTopknot();
			
			if(this.instance._righteye.rotation!=0) {
			var eye=this.instance._righteye;
		cjs.Tween.get(eye).to({rotation:0,y:0,x:0},200,cjs.Ease.cubicInOut);
		var leye=this.instance._lefteye;
		cjs.Tween.get(leye).to({rotation:0,y:0,x:0},200,cjs.Ease.cubicInOut);
			}		
			
			this.movingparts.push([this.instance._bodyleft,[1]]);
			this.movingparts.push([this.instance._bodyright,[1]]);
	}
	
	this.backDown=function() {


		var newy=this.instance.y+30;
		var newx=this.instance.x-20;
		var me=this;
		cjs.Tween.get(this.instance).to({x:newx,y:newy},500,cjs.Ease.cubicOut).call(function() {me.bounceAround()});
		
	}
	
	this.goSad=function() {
	
		this.nextflip=200;
		
		this.movingparts=[];
		
		this.movingparts.push([this.instance._leftfin,[17,19,20,21,22]]);
		this.movingparts.push([this.instance._antenna,[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98]]);
		
		this.movingparts.push([this.instance._bodyleft,[3,5,7]]);
		this.movingparts.push([this.instance._bodyright,[3,5,7]]);		
		var eye=this.instance._righteye;
		cjs.Tween.get(eye).to({rotation:10,y:0,x:-5},200,cjs.Ease.cubicInOut);
		var leye=this.instance._lefteye;
		cjs.Tween.get(leye).to({rotation:-10,y:0,x:5},200,cjs.Ease.cubicInOut);
		
	}
	
	this.update=function() {
		var ml=this.movingparts.length-1;
		for(var i=ml;i>=0;i--) {
			var part=this.movingparts[i][0];
			var nextframe=this.movingparts[i][1].shift();
			part.gotoAndStop(nextframe);
			if(this.movingparts[i][1].length<1) {
				this.movingparts.splice(i,1);				
			}
		}
		
		var fl=this.floaters.length-1;
		for(var i=fl;i>=0;i--) {
			var floater=this.floaters[i];
			if(floater.y > 500) {
				this.instance.removeChild(floater);
				this.removeChild(floater);
				this.floaters.splice(i,1);
			} else {
				if(!floater.flipped && floater.mv.y>0) {
					floater.flipped=true;
//					console.log("child " + this.instance.getChildIndex(floater));
					this.instance.setChildIndex(floater,150);
					
//					console.log("child- " + this.instance.getChildIndex(floater));
				}
				floater.x+=floater.mv.x;
				floater.y+=floater.mv.y;
				if(floater.mv.y>0) {			
					floater.rotation+=floater.rot;
					floater.mv=floater.mv.sum(this.grav.mult(floater.wr));
				} else {
					floater.mv=floater.mv.sum(this.grav);	
				}
			}
		}
		
		this.nextblink--;
		if(this.nextblink<0) {
			this.goBlink();
		}
		this.nextflip--;
		if(this.nextflip<0) {
			this.flipTopknot();
		}
	}
	
	this.floataround=function() {
		if(!this.nofloat) {
			var newx=this.x-4 + Math.random()*8;
			var newy=this.y-10 + Math.random()*20;
		cjs.Tween.get(this).to({x:newx,y:newy},2000,cjs.Ease.cubicInOut).call(this.floataround);
		}
	}
	
	this.getSprites=function(pathtoimages) {
	
	var b=new cjs.Bitmap(pathtoimages + "PlumPuppet_confetti.png");
	
	this.confettiSprites=new cjs.SpriteSheet({"animations": {"all": {"frames": [0, 1, 2, 3, 4]}}, "images": [pathtoimages+"PlumPuppet_confetti.png"], "frames": [[45, 2, 19, 61, 0, -3, -2], [68, 2, 15, 24, 0, -1, -3], [24, 2, 17, 66, 0, -1, 0], [87, 2, 12, 18, 0, -1, -1], [2, 2, 18, 86, 0, -1, -1]]});
	
	if(this.confettiSprites.complete) {
		//console.log("done");
	}

	this.confettiSprites.onComplete=function() {
		//console.log("done");
	}
	
	}
	
	
	this.doConfetti=function() {
	
	
		this.instance._cone=new lib.Confetti_Cone();
		this.instance._cone.y=-130;
		this.instance._antenna.visible=false;

		var ready=[]
		
		
		this.instance.addChild(this.instance._cone);

		var fullscale=this.instance._cone.scaleX;
		var touchy=this.instance._cone.y;
		this.instance._cone.y+=30;
		this.instance._cone.scaleX=fullscale*.5;
		
		var me=this;

		this.con2=function() {
		cjs.Tween.get(me.instance._cone).to({y:touchy,scaleX:fullscale},500,cjs.		Ease.cubicInOut).call(function() {
			me.startConfetti(5);	
			me.goYay();
		});
		}

		this.swapTopknot(this.instance._antenna,this.instance._cone,this.con2);

	}
	

	
	this.startConfetti=function(times) {
		if(typeof(times)=='number') {
			console.log("times " + times);
			this.confettiwaves=times;
		} else {
			this.confettiwaves--;
		}


		if(this.confettiwaves > 0) {
		
		var behindCone=this.instance.getChildIndex(this.instance._cone)-1;
		
		for(var i=0;i<10;i++) {
//			var c=new lib.confettipiece();
			var c=new lib.makeSprite(this.confettiSprites);
			var sp=Math.random()*-10 - 20;
			var an=Math.random()*4-2;
			c.mv=new lib.Vect(an,sp);
			c.x=an*5;
			c.y=-185;
			c.rot=Math.random()*20-10;
			//c.rot=an*20;
			//c.rotation=an*20;
			//c.wr=.4+Math.random()*.1;
			c.wr=1-(.5*Math.random());
			this.floaters.push(c);
			this.instance.addChildAt(c,behindCone);
		}
		
		for(var i=0;i<20;i++) {
//			var c=new lib.confettipiece();
			var c=new lib.makeSprite(this.confettiSprites);
			var an=Math.random()*90 - 45;
			c.mv=new lib.Vect(Math.random(),0);
			c.x=this.instance.x+an*10;
			c.y=-500;
			c.rot=Math.random()*20-10;
			//c.rotation=c.rot;
			//c.wr=.4+Math.random()*.1;
			c.wr=1-(.9*Math.random());
			this.floaters.push(c);
			this.addChild(c);
		}
			var me=this;
			setTimeout(function(){me.startConfetti();},100);
		
		} else {
		
			var me=this;
			setTimeout(function(){me.stopConfetti();},600);
		}
	}
	
	this.stopConfetti=function() {
	//		this.instance.removeChild(this.instance._cone);
	//		this.instance._antenna.visible=true;
		this.instance._star=new cjs.Container;
		var c1=new lib.star_onconfettiCone('#FF9966');
		c1.x=5;
		var c2=new lib.star_onconfettiCone();
		this.instance._star.addChild(c1,c2);
		this.instance._star.scaleX=this.instance._star.scaleY=.6;
		this.instance._star.y=-150;
		this.instance.addChild(this.instance._star);
		this.swapTopknot(this.instance._cone,this.instance._star);

	}
		
		
	this.newfloat=function() {
	
	}
	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,470,266.6);


// symbols:

// TOPKNOTS:
// symbols:
(lib.star_onconfettiCone = function(colorin) {
	this.initialize();
	var usecolor="#E4BC1B";
	if(colorin) {
		usecolor=colorin;
	}
	
	this.graphics.f(usecolor).s().p("AkCC/ImpkNIHygeICBopID6H3IHqgwIlaFUIEGGqIofjjImcFJg");

}).prototype = p = new cjs.Shape();
p.nominalBounds = new cjs.Rectangle(-68.4,-66.1,137,132.4);


(lib.makeSprite = function(spriteSheet) {
	this.initialize();
	this.ss=spriteSheet;
	//var f=parseInt(Math.random()*this.ss.getNumFrames());
	this.setFrame();
}).prototype = p = new cjs.Bitmap();
p.setFrame=function(framenum) {
	if(typeof(framenum)=='undefined') {
		framenum=parseInt(Math.random()*this.ss.getNumFrames());
	}
	this.frame=this.ss.getFrame(framenum);
	this.sourceRect=this.frame.rect;
	this.image=this.frame.image;
//	this.x=-.5*this.sourceRect.width+this.frame.regX;
//	this.y=-.5*this.sourceRect.height+this.frame.regY;
};

/*
(lib.Star=function() {
	console.log("star!");
	this.initialize();	this.graphics.f("#FFCC66").s().p("Ah9BCIiqiBIDegDIBQjKIBHDGIDagJIimCNIA1DJIi0h6IivB/g");
//	this.shape.setTransform(275.1,200,1,1,0,0,0,0.1,0);

}).prototype = p = new cjs.Shape();
p.nominalBounds = new cjs.Rectangle(245.4,173.1,59.3,53.8);
*/

(lib.Confetti_Cone = function() {
	this.initialize();

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3gheMAr6gPbQEEK8hPIZQhQIciKGCg");
	mask.setTransform(-0.2,17.2);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.318)").s().p("A3DpJMAuHAGTQg9Ghh/Ffg");
	this.shape.setTransform(-2.1,66.7);

	this.shape.mask = mask;

	// star_on confettiCone
	this.instance = new lib.star_onconfettiCone();
	this.instance.setTransform(-97.5,-3.3,0.416,0.416,111.6);

	this.instance.mask = mask;

	// star_on confettiCone
	this.instance_1 = new lib.star_onconfettiCone();
	this.instance_1.setTransform(-17.5,6.2,0.816,0.816,84.4);

	this.instance_1.mask = mask;

	// star_on confettiCone
	this.instance_2 = new lib.star_onconfettiCone();
	this.instance_2.setTransform(77.5,59.2,0.613,0.613,68.7);

	this.instance_2.mask = mask;

	// star_on confettiCone
	this.instance_3 = new lib.star_onconfettiCone();
	this.instance_3.setTransform(71,-44.3,0.922,0.922,68.7);

	this.instance_3.mask = mask;

	// Layer 7
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AC47B8").s().p("A3gheMAr6gPbQEEK8hPIZQhQIciKGCg");
	this.shape_1.setTransform(-0.2,17.2);

	this.addChild(this.shape_1,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
	
	this.rotation=-90;
	this.x=0;
	this.scaleX=this.scaleY=.4;
	
	this.y=-110;
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-150.8,-125.3,301.7,250.7);






(lib.STK_Plum_pupil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPBZQgcgmADgzQADgzAhgmQAigkApAAQAsAAAdAkQAdAmgEAzQgEAzghAmQghAlgqAAQgsAAgcglg");
	this.shape.setTransform(-0.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4BAQgUgbADglQACgjAYgcQAXgaAdAAQAgAAATAaQAVAcgDAjQgCAlgYAbQgXAZgeAAQgfAAgUgZg");
	this.shape_1.setTransform(-0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhjBvQgjgvADhAQAFhAAqgvQApgtA0gBQA3ABAkAtQAjAvgDBAQgGBAgpAvQgpAug1ABQg3gBgjgug");
	this.shape_2.setTransform(-0.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#40AA8A").s().p("AgPCxQhAgFgpg4Qgog3AHhIQAHhJAzgxQAygwA+AEQBAAGAoA4QAoA3gHBIQgHBJgyAxQguAsg3AAIgLgBg");
	this.shape_3.setTransform(-0.7,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.2,-18.1,31.1,35.7);


(lib.STK_Plum_mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C59B7").s().p("Ag6glQgJgKAEgIIAGACQAWAHAUALQAvAdAZAvQgCgPgKgQIABAAIAJALQAHAJAEANQgIANgOADQg4gpgug3gAg+g4IgBAAIACgCIACADg");
	this.shape.setTransform(-12,-3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BA83DE").s().p("AgHgaQgUgLgWgHIgHgCIgHgDIAIACIAAAAIAEAAQA4AKAaAcQALAKAHALIAAgBIAEAHIAAAAQAJAQACAQQgZgxgugbg");
	this.shape_1.setTransform(-12.8,-4.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C59B7").s().p("AgpAzQhUgLhJgiQAOgFAGgNQgIgMgIgIIgKgJIAdgHQATgFANAAQA6ACAuAeQAPAKAJAVQgBgGgDgHQgEgRgPgJQAjgNAcAAQAvACAdAUIAcAUIAAgDQgPgSgTgLQAQgKARgBQAggCAVAHIATAFIACAAQgsA2hOAVQgpAMgnAAQgVAAgUgDgADKgkIADgDIgCADIgBAAg");
	this.shape_2.setTransform(12.1,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BA83DE").s().p("AglAFQgtgdg7gBQgNgBgTAFIgdAIIgFgGQAkgQASgBQAVgBAHABIAaAFQARAEARAIQAGADAMAHIAFgDQArgSAxAHQATAEARAIQANgJAQgDQAWgEAZAEQAWAEAVAKIABABIAAAAIACAEIgEgCIgCAAIgTgFQgVgGggACQgQAAgQAKQASAJAPATIAAACIgcgTQgcgTgwgBQgcAAgjAMQAPAHAFARQADAJAAAHQgJgYgPgJg");
	this.shape_3.setTransform(11.9,-1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB5023").s().p("Ag4AbQhpgjCHgYQA7gKAwAUQAvAUg3AYQggAOglAAQgbAAghgJg");
	this.shape_4.setTransform(11.9,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ak7hoQCaC/CngDQCqgCCMi+QhqDYjQABIgCAAQjNAAhujVg");
	this.shape_5.setTransform(2.2,-11.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgQB9QjWgBh1j4QCfDgCtABQCrABDAiPQiYCmjSAAIgCAAg");
	this.shape_6.setTransform(5.1,-12.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C59B7").s().p("AAbAwQivgXh/gqIgMgHIAGgGIAIgDQATgHAWgBQA8ACAoAlQgGgMgOgOQALgDAZgLQAXgIAQgBQBHgFAqAeQAPAKAFAXIgBgOQgDgQgOgKQAhgKAiADQAuAMAaAZIAcAXIAAgCQgOgSgSgQQARgEARADQAgAIAXAJIAVAMIACAAQgyAihRAFQgaACgZAAQgnAAglgFgAEfAJQAAAAAAAAQAAABAAAAQAAAAAAgBQAAAAABAAIgBABIAAAAIAAgBg");
	this.shape_7.setTransform(1.2,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BA83DE").s().p("ACyASQgbgYgugLQghgEghAKQANAKADAPIACAQQgGgZgOgIQgqgehHAFQgQABgXAIQgZALgMADQAPAMAGAMQgogkg9gCQgVACgTAGIgIAEIgKADIASgJQA1gZAlAPQAPAGAKAIQAsgZAXgFIAigDIAeACQAVAEAPAIIARAKQADAAADgDQAvgRAwARQARAHARAMQANgDARAAQAVADAbAHIAvAbQAAAAAAABQAAAAAAAAQAAAAAAAAQABAAAAAAIAAAAQAAADADADQgDgBgDgDIgBAAIgWgMQgWgLghgJQgQgDgRAFQARAPAPAVIAAACIgcgZg");
	this.shape_8.setTransform(1.1,-5.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB5023").s().p("AgcAfQiEghBqgeQBLgOA1AfQA2AbgwARQgbAIgdAAQgYAAgcgGg");
	this.shape_9.setTransform(8.2,-8.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C59B7").s().p("AEcBEQiFgJhtgOQlRgpjqgTQgLgCgBgKIAKgDQAlgOAqgHQBxgHBOArQgKgPgegOQAXgEAwgMQAwgIAcgBQCPgDBLAlQAeAMAFAbQAEgEgFgMQgEgSgZgNQBAgGA6ALQBZAXAzAeQArAbAJAEIAAgCQgagYgigTQAhgBAgAGQA8AOAuANQAVAIATAGIADAAQhNAXhvAAQgfAAgigCgAIdAsIABAAIAAABQgCAAAAAAQgBAAAAAAQAAAAAAAAQABAAABgBgAocggQABAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQAAABgFACQAFgCgEgCg");
	this.shape_10.setTransform(-4,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA83DE").s().p("AIbA/IgCAAQgUgFgVgJQgtgNg9gOQgggHggACQAhAUAbAYIAAACQgJgEgsgbQgzgghYgVQg7gMhAAGQAaAOADAPQAGANgEAGQgFgcgegLQhLgliQACQgcABgvAJQgxAMgXADQAeAOALAOQhOgqhxAHQgrAHgkAOIgKADQgDADgJADIAMgHQAFgBAAgCQBkguBLAPQAfAFAQAKQBaggArgCQA5gCAIACIA9ACQApAGAdAJQANADATAJQAIABADgEQBXgLBbAeQAeAKAjAQQAXgDAhAFQAqAHA0AOQAoAMAxAUQgBAAAAAAQgBAAABAAQAAAAAAAAQABAAABAAIACABQgCADAHACQgIAAgEgEg");
	this.shape_11.setTransform(-4.2,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAvAzIAAgVQgCgBgCgDIgGgIQgGgGACgBQACgBAKABIALACQAZAJAXgPQASgLgGgZQgGgYgqAFIg3ANIAAAAIgnAMIABAAIhyArQAHgDAjgXQAugcA7gUIAAAAIBBgQQA0gFAMAoQAMAjgiAXQgXAQgZgDIgNAeQgCAEgEACIAAAAQgBAAAAgVg");
	this.shape_12.setTransform(34,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},11).to({state:[{t:this.shape_4}]},1).to({state:[]},1).to({state:[{t:this.shape_5}]},4).to({state:[{t:this.shape_6}]},1).to({state:[]},22).to({state:[{t:this.shape_8},{t:this.shape_7}]},11).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},3).to({state:[{t:this.shape_12}]},1).wait(9));

	// Layer 7
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#352B62").s().p("Aj9g2QDJCPEyhNIgPAKQhuAhhdAAQirAAh2htg");
	this.shape_13.setTransform(7.8,-10.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#352B62").s().p("ADvAYIgLABIgCAAQkJAhjSheIACAAQDMBKEHghIAEAAQAhAAgJAgQAAgNgJAAg");
	this.shape_14.setTransform(9.5,-9.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#352B62").s().p("ADSAAQgYgNihAKQiOAHh0gcIABgBQBxALCPgJQCTgKApARQAeAKgKAiQACgRgYgLg");
	this.shape_15.setTransform(14.7,-8.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#352B62").s().p("ABdACQgzgRimAcQAMgOAYgFQCsglAlArIACABQAGALgJAMQABgMgcgKg");
	this.shape_16.setTransform(33,-7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#352B62").s().p("AAbAIQgFgIgSgCIAAAAQgOAAgZAPQAIglAgACIAAAAQATABAHAKQAHAJgCANQgEAJgEADQADgGgEgJg");
	this.shape_17.setTransform(45.9,-6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#352B62").s().p("Aj6gzIADABQDJCKEphLIAAACQh3AlhkAAQinAAhzhng");
	this.shape_18.setTransform(7.7,-10.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#352B62").s().p("AkYgtIACgBQDmBrFJgjIAAACQhlAThbAAQjNAAikhcg");
	this.shape_19.setTransform(4.7,-11.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#352B62").s().p("AEhAxQili5mzChIAqgVQGhioCkDng");
	this.shape_20.setTransform(0.2,-8.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#352B62").s().p("AC/hAIAAAAQjNgplXCOIASgMQFGiXDRArIAAAAQB9AiAmCNIgBACQg3h/hwgfg");
	this.shape_21.setTransform(-2.8,-5.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#352B62").s().p("AF7B0QgOg4gZg3Qgdg+g+ghQg8gfhEAFIAAAAQg+ABg7AOIAAAAQhHAPhGAZIABgBQhBAZg8AcQg0AXhEAbIACgDQA+gqAvgXQA+gcBBgZIAAAAQBGgZBKgQQA7gOBAgBQBKgFBBAiQBDAkAgBFQAbA5ABBTg");
	this.shape_22.setTransform(-4,-1.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#352B62").s().p("AFfgFQgphNhRgfIAAAAQhPgchTAQQhQAShNAgQhOAghNAmIilBQQAKgNAagSQBRgwAngTQBNgmBQggQBOghBSgSIAAAAQBZgSBUAeIAAABQBYAhAtBUQAjA/AGBBQAEAYgHAOQgWhigig7g");
	this.shape_23.setTransform(-8.1,-0.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#352B62").s().p("AF1gdQgnhchHgaIAAAAQhIgahKAHQhKAGhPAeIAAABQhRAdhIAjQhEAgi1BqQALgWAWgPQCNhYBCgfQBJgjBSgeIAAAAQBRgfBNgHQBOgIBNAcIAAAAQBOAcArBlQAlBVALBpQAAAVgIAPQgXiIgjhSg");
	this.shape_24.setTransform(-12.2,2.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#352B62").s().p("ADujAIAAAAQkNgVnbEyQALgYAagSQHTkoDzAhIAAAAQD+AjAMFqQABATgKAMQgWl0jugkg");
	this.shape_25.setTransform(-15,5.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#352B62").s().p("AkmBUQBwh0DwgzQCaggA6AEQAkACAGAQQAHALgQAPIgSASQAOgbgFgIQgFgGgUgBQg5gDiWAeQjbAvicCBQADgMAQgQg");
	this.shape_26.setTransform(6.9,-3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#352B62").s().p("AiVBbQB2h4BFgmQBEgmAiAXQAQALgLAbQgDgTgWgJQgWgJg5AhQg3AhiGBrg");
	this.shape_27.setTransform(24.1,-4.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#352B62").s().p("AhCA/QAchfAdgUQAcgXAeAZQAYATgHAfQgGgYgRgOQgRgOgZARQgWAQgtBTg");
	this.shape_28.setTransform(40.9,-6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#352B62").s().p("AgmAbIACgQQAKglAYgIQAZgIAJAIQAKAIgDANIgEANQgBgOgFgGQgGgFgTAHQgLAEgQAYIgPAdIAAgMg");
	this.shape_29.setTransform(45.4,-5.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#352B62").s().p("AkMAOIgqAIIAWgJQG3isCWDSIAKANQi1jBmOCPg");
	this.shape_30.setTransform(0.2,-7.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#352B62").s().p("ACNhPQiQgLlBCIQAQgTAlgRQEMh5CSAMQChALAVCmQAAANgEAKQgkipiQgLg");
	this.shape_31.setTransform(-2.3,-5.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#352B62").s().p("AE2gdQgsgdg9gIQlHghkVCcQAIgRAbgQQDziQFIAiIABAAQBHAKAwAhQA9AqAMBdIgBACQgghcg5gfg");
	this.shape_32.setTransform(-4.6,-6.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#352B62").s().p("AKjDTQgylPkHgqIABAAQlXghq8E0QAKgWA7gjQJ3klFbAjIABABQEnAsASF0g");
	this.shape_33.setTransform(-20.5,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},6).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},4).to({state:[]},2).to({state:[]},23).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_32}]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},1).to({state:[]},1).wait(9));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_1 = new cjs.Graphics().p("AicAuQhMgmgShVQDKChErhdQiABQhmAGIgaABQhWAAhBggg");
	var mask_graphics_2 = new cjs.Graphics().p("AjjgRQgPgogIg0QC/CVE2hPQi/CQh3AFIgHAAQhxAAgwh/g");
	var mask_graphics_3 = new cjs.Graphics().p("Aj0AAQgGgSgBgqQgBgjADgeQC/CUE2hPQhwBUhGAqQhbA2g3ACIgGAAQhxAAgxh+g");
	var mask_graphics_4 = new cjs.Graphics().p("Aj5BxQgThFAHhdQAHg5AQhCQC/CWE2hRQieCPilBcQgyAagnAJQgUAGgQAAQg2AAgKg8g");
	var mask_graphics_5 = new cjs.Graphics().p("AknCGQAChgAhhuQAVhGAihNQC/CWE3hRQirCrjWCJQg7AlgsAPQgdAKgVAAQg7AAAFhWg");
	var mask_graphics_6 = new cjs.Graphics().p("AlACVQAbi9BzjSQC9CXE5hRQi0C9j1CmQhyBMg4AAQhAAAAPhmg");
	var mask_graphics_7 = new cjs.Graphics().p("Ai2BoQhjhnAli3QDEBZEdgoQAgAEgaApQgbApgbAkQgdAigUA+QgUA9hmAeQgVAHgXAAQhPAAhNhPg");
	var mask_graphics_8 = new cjs.Graphics().p("Ag6BRQh6g3g0iVQCcATB8gHQCcgPAWAdQAWAdgzAsQg0ApARAsQARArg7AQQgOAEgRAAQg4AAhbgrg");
	var mask_graphics_11 = new cjs.Graphics().p("AicAuQhMgmgShVQDKChErhdQiABQhmAGIgaABQhWAAhBggg");
	var mask_graphics_12 = new cjs.Graphics().p("AgrBaQiTgTgkg2Qgkg0ANg4QC/CUE3hPQiEByh/AAQgSAAgTgCg");
	var mask_graphics_13 = new cjs.Graphics().p("AjjgRQgPgogIg0QC/CVE2hPQi/CQh3AFIgHAAQhxAAgwh/g");
	var mask_graphics_14 = new cjs.Graphics().p("AgrBaQiTgTgkg2Qgkg0ANg4QC/CUE3hPQiEByh/AAQgSAAgTgCg");
	var mask_graphics_15 = new cjs.Graphics().p("Ag7BdQkQgKAKhAQAKg+BJgyQDtByFDgnQhnBwjwAAIgmgBg");
	var mask_graphics_41 = new cjs.Graphics().p("Ak2AVQHVi5CYDjQj3hal2Awg");
	var mask_graphics_42 = new cjs.Graphics().p("AlmAhQJtkMBgFDQkpg6mkADg");
	var mask_graphics_43 = new cjs.Graphics().p("AmBAmQFbjEDIAcQDGAcAaDsQmphFlagbg");
	var mask_graphics_44 = new cjs.Graphics().p("AAUBmImsggQFajaDQAEQDrAFAcEcQh7gXkKgUg");
	var mask_graphics_45 = new cjs.Graphics().p("AmyBEQGkkaDfAlQDXAjALFEQnLhhmagRg");
	var mask_graphics_46 = new cjs.Graphics().p("An3BXQPjqHAMMBQm3gjo4hXg");
	var mask_graphics_47 = new cjs.Graphics().p("AkzBQQDCifDxgsQDygthTBdQhTBZAkBWQAPAnhrAAQiGAAlBg7g");
	var mask_graphics_48 = new cjs.Graphics().p("AgeBqIh1g6QB3iDBmggQBngfgoBTQgoBSAOBCQAJAng0AAQgkAAg+gSg");
	var mask_graphics_51 = new cjs.Graphics().p("Ak2AVQHVi5CYDjQj3hal2Awg");
	var mask_graphics_52 = new cjs.Graphics().p("Ak2AVQHVi5CYDjQj3hal2Awg");
	var mask_graphics_53 = new cjs.Graphics().p("AkPAnIgzACIAygYQItkEAmFTQj4hDlaAKg");
	var mask_graphics_54 = new cjs.Graphics().p("AmOA0QCriAElgKQEmgLAnC5QkGhfoXA7g");
	var mask_graphics_56 = new cjs.Graphics().p("AqmBXQU9qHAQMBQjHhuyGgMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_1,x:7.6,y:-7.6}).wait(1).to({graphics:mask_graphics_2,x:7.6,y:-4.6}).wait(1).to({graphics:mask_graphics_3,x:7.5,y:-3}).wait(1).to({graphics:mask_graphics_4,x:6.4,y:1.6}).wait(1).to({graphics:mask_graphics_5,x:3.1,y:6.3}).wait(1).to({graphics:mask_graphics_6,x:0.4,y:9.4}).wait(1).to({graphics:mask_graphics_7,x:9.1,y:4.7}).wait(1).to({graphics:mask_graphics_8,x:14.8,y:1.7}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_11,x:7.6,y:-7.6}).wait(1).to({graphics:mask_graphics_12,x:7.5,y:-6.4}).wait(1).to({graphics:mask_graphics_13,x:7.6,y:-4.6}).wait(1).to({graphics:mask_graphics_14,x:7.5,y:-6.4}).wait(1).to({graphics:mask_graphics_15,x:0.6,y:-6.7}).wait(2).to({graphics:null,x:0,y:0}).wait(24).to({graphics:mask_graphics_41,x:0.2,y:-7.7}).wait(1).to({graphics:mask_graphics_42,x:-2.9,y:-5.3}).wait(1).to({graphics:mask_graphics_43,x:-4.1,y:-0.8}).wait(1).to({graphics:mask_graphics_44,x:-8.4,y:0}).wait(1).to({graphics:mask_graphics_45,x:-12.6,y:3.2}).wait(1).to({graphics:mask_graphics_46,x:-15.5,y:6}).wait(1).to({graphics:mask_graphics_47,x:6.1,y:0.3}).wait(1).to({graphics:mask_graphics_48,x:24,y:-0.6}).wait(1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_51,x:0.2,y:-7.7}).wait(1).to({graphics:mask_graphics_52,x:0.2,y:-7.7}).wait(1).to({graphics:mask_graphics_53,x:-2.5,y:-4.7}).wait(1).to({graphics:mask_graphics_54,x:-4.7,y:-6.3}).wait(1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_graphics_56,x:-20.6,y:6}).wait(1).to({graphics:null,x:0,y:0}).wait(9));

	// Layer 8
	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AkGgMIA/hHIHOBTIguA+QhUAWhQAAQilAAiWhgg");
	this.shape_34.setTransform(2.3,-11.6,1,1,0,0,0,-0.5,-0.7);

	this.shape_34.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34}]},2).to({state:[]},7).to({state:[]},8).wait(49));

	// Layer 2
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AkYBoQgHg6AYg6IBSAYIhJgqIBMhXIHNBUIggAwIguAWIAjgEIgxBNQhtAIhkAAQiIAAh+gOg");
	this.shape_35.setTransform(0.7,-7.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EB5023").s().p("AhJA9QiYiWC7gWQB8gBArBnQAqBkhYARQgTAEgSAAQhAAAg3gzg");
	this.shape_36.setTransform(-11.9,6.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EB5023").s().p("AhKA+QiXiXC7gWQB8gBArBnQAqBkhYARQgTAEgSAAQhAAAg4gyg");
	this.shape_37.setTransform(-12.8,8.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EB5023").s().p("AhQA2QiIilC9gEQB7ALAhBoQAgBqhZAJIgUABQhKAAg6g+g");
	this.shape_38.setTransform(-21.1,11.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EB5023").s().p("AAhCBQhWgRgphVQhSjFCzAyQB1AvABBtQAABfhCAAQgKAAgMgCg");
	this.shape_39.setTransform(-28.8,18.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EB5023").s().p("AAvB9QhXgIgxhSQhmi7C6AgQB2AjAMBsQALBnhNAAIgMgBg");
	this.shape_40.setTransform(-34.7,26.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB5023").s().p("AhKA9QiXiWC7gWQB8gBArBnQAqBkhYARQgTAEgSAAQhAAAg4gzg");
	this.shape_41.setTransform(-15.4,15.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EB5023").s().p("AhKA+QiXiXC7gWQB8gBAqBnQArBkhYARQgTAEgSAAQhAAAg4gyg");
	this.shape_42.setTransform(-7,9.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AkYBoQgHg6AYg6IBSAYIhJgqIBMhXIHNBUIhcCPQhtAIhkAAQiIAAh+gOg");
	this.shape_43.setTransform(0.7,-7.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EB5023").s().p("Ah0BnQhOgXAPgcQBjgHAmgNQAngNASgaQAVgcgTgQQgRgSgGgMQgGgNAMgIQASgKA5ADQA5ACAgAnQAgAngZAmQgaAohdAmQg4AYg1AAQgeAAgdgIg");
	this.shape_44.setTransform(-4,1.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AkYBsQgHg6AXg7IBYgCIhOgQIBMhYQD4gFDUBOIgfAyIgvAPIAkADIgxBOQiKANh/AAQhqAAhkgJg");
	this.shape_45.setTransform(0.4,-7.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AjEApIhNgQIBMhWQD4gFDeA2IgmBHQg/AEg+AAQiWAAicgWg");
	this.shape_46.setTransform(2.3,-13.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AkYBsQgHg6AXg7IAKgSIBMhYQD4gFDUBOIhbCSQiKANh/AAQhqAAhkgJg");
	this.shape_47.setTransform(0.4,-7.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EB5023").s().p("Ah0BnQhOgWAPgcQBjgIAmgMQAngOATgZQAUgcgSgRQgSgSgGgMQgGgNAMgIQASgKA5ADQA6ACAfAnQAgAngZAmQgaAohcAmQg4AYg1AAQgfAAgdgIg");
	this.shape_48.setTransform(1.4,-5.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AmMBYQgJg7Agg4IB8AFIhugXIBqhRQFgASEsBhIgsAvIhDAKIAzAHIhGBKQljAAk2gng");
	this.shape_49.setTransform(-4.7,-8.2,1,1,0,0,0,0,0.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgJCnIqgg9QErj3GqhuQD6gFDfA3IA+CsIhYAPIBjAOIBcD8g");
	this.shape_50.setTransform(-21.9,5.8);

	this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_35}]},1).to({state:[]},3).to({state:[]},23).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_46}]},5).to({state:[]},1).to({state:[{t:this.shape_47}]},3).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[]},1).to({state:[{t:this.shape_50}]},1).to({state:[]},1).to({state:[]},8).wait(1));

	// Layer 6
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EB5023").s().p("AgyBVQjAheCqhQQB1gpBJBUQBIBRhNAsQgqAYgsAAQglAAgogSg");
	this.shape_51.setTransform(-22.5,0.1);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EB5023").s().p("AhKBDQiyiKDIgkQCFgKA5BkQA4BhheAWQgbAHgaAAQg+AAg7gqg");
	this.shape_52.setTransform(-26.4,7.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EB5023").s().p("AhCBDQieiKCyglQB2gJAyBkQAyBhhTAWQgYAHgXAAQg3AAg1gqg");
	this.shape_53.setTransform(0,1,1,1,0,0,0,35.1,-7.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EB5023").s().p("Ag/BPQikh0Cxg/QB3gbA2BcQA0BahSAkQgkAQgiAAQgrAAgrgcg");
	this.shape_54.setTransform(-5.6,-0.5,1,1,0,0,0,35.2,-12.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EB5023").s().p("AhPBAQimiSDLgcQCFgEAwBlQAvBkheATQgXAFgXAAQhDAAg6gvg");
	this.shape_55.setTransform(-0.7,4.1,1,1,0,0,0,50.9,-11.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EB5023").s().p("AgsBaQjHhSCkhbQBxgxBQBOQBOBMhKAzQgtAegzAAQgfAAgjgNg");
	this.shape_56.setTransform(-22.6,15.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EB5023").s().p("AhrBAQjfiSEQgcQC1gEBABlQA/Bkh+ATQgfAFgeAAQhbAAhPgvg");
	this.shape_57.setTransform(-69.3,15.8);

	this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},3).to({state:[]},1).to({state:[]},3).to({state:[]},4).to({state:[]},1).to({state:[]},1).to({state:[]},4).to({state:[]},23).to({state:[{t:this.shape_51}]},2).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[]},1).to({state:[]},3).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_57}]},3).to({state:[]},1).wait(9));

	// Layer 1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#352B62").s().p("Ag1AvQh+gchFhJQDUCEEchFIgFAFQh5AphgAAQgpAAgmgIg");
	this.shape_58.setTransform(7.9,-9.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#661B1E").s().p("AicAuQhMgmgShVQDKChErhdQiABQhmAGIgaABQhWAAhBggg");
	this.shape_59.setTransform(7.6,-7.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#661B1E").s().p("AjjgRQgPgogIg0QC/CVE2hPQi/CQh3AFIgHAAQhxAAgwh/g");
	this.shape_60.setTransform(7.6,-4.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#661B1E").s().p("Aj0AAQgGgSgBgqQgBgjADgeQC/CUE2hPQhwBUhGAqQhbA2g3ACIgGAAQhxAAgxh+g");
	this.shape_61.setTransform(7.5,-3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#661B1E").s().p("Aj5BxQgThFAHhdQAHg5AQhCQC/CWE2hRQieCPilBcQgyAagnAJQgUAGgQAAQg2AAgKg8g");
	this.shape_62.setTransform(6.4,1.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#661B1E").s().p("AknCGQAChgAhhuQAVhGAihNQC/CWE3hRQirCrjWCJQg7AlgsAPQgdAKgVAAQg7AAAFhWg");
	this.shape_63.setTransform(3.1,6.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#661B1E").s().p("AlACVQAbi9BzjSQC9CXE5hRQi0C9j1CmQhyBMg4AAQhAAAAPhmg");
	this.shape_64.setTransform(0.4,9.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#661B1E").s().p("Ai2BoQhjhnAli3QDEBZEdgoQAgAEgaApQgbApgbAkQgdAigUA+QgUA9hmAeQgVAHgXAAQhPAAhNhPg");
	this.shape_65.setTransform(9.1,4.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#661B1E").s().p("Ag6BRQh6g3g0iVQCcATB8gHQCcgPAWAdQAWAdgzAsQg0ApARAsQARArg7AQQgOAEgRAAQg4AAhbgrg");
	this.shape_66.setTransform(14.8,1.7);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#661B1E").s().p("AAjBSQg2gChGhCQhGhABCgSQAUgFAugCQBugNAcANQAbANgVAeQgVAegEAqQgDAqgyAAIgEAAg");
	this.shape_67.setTransform(32.7,-1.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#661B1E").s().p("AgCBBQgSgDgKgUQgKgVAEgaQAEgbAPgRQAPgRAQACQASADAEAOQAFANgKAUQgLARAGAQQAFARgIAQQgIANgPAAIgCAAg");
	this.shape_68.setTransform(45.2,-2.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#661B1E").s().p("AgrBaQiTgTgkg2Qgkg0ANg4QC/CUE3hPQiEByh/AAQgSAAgTgCg");
	this.shape_69.setTransform(7.5,-6.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#661B1E").s().p("Ag7BdQkQgKAKhAQAKg+BJgyQDtByFDgnQhnBwjwAAIgmgBg");
	this.shape_70.setTransform(0.6,-6.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#352B62").s().p("AkPAKIA1gXQCtg7B7AaQB+AcBEBJQjLiIlUBbg");
	this.shape_71.setTransform(5.6,-9.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#661B1E").s().p("Ak2AVQHVi5CYDjQj3hal2Awg");
	this.shape_72.setTransform(0.2,-7.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#661B1E").s().p("AlmAhQJtkMBgFDQkpg6mkADg");
	this.shape_73.setTransform(-2.9,-5.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#661B1E").s().p("AmBAmQFbjEDIAcQDGAcAaDsQmphFlagbg");
	this.shape_74.setTransform(-4.1,-0.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#661B1E").s().p("AAUBmImsggQFajaDQAEQDrAFAcEcQh7gXkKgUg");
	this.shape_75.setTransform(-8.4,0);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#661B1E").s().p("AmyBEQGkkaDfAlQDXAjALFEQnLhhmagRg");
	this.shape_76.setTransform(-12.6,3.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#661B1E").s().p("An3BXQPjqHAMMBQm3gjo4hXg");
	this.shape_77.setTransform(-15.5,6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#661B1E").s().p("AkzBQQDCifDxgsQDygthTBdQhTBZAkBWQAPAnhrAAQiGAAlBg7g");
	this.shape_78.setTransform(6.1,0.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#661B1E").s().p("AgeBqIh1g6QB3iDBmggQBngfgoBTQgoBSAOBCQAJAng0AAQgkAAg+gSg");
	this.shape_79.setTransform(24,-0.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#661B1E").s().p("AAABoQghgEgIglQgJglgQgLQAJgVAYgwQAWgwAagCQAbgCAMASQAMASABAQQAAAQgMAdQgMAcAGAUQAFATgKAaQgIAVgbAAIgJgBg");
	this.shape_80.setTransform(40.8,-1.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#661B1E").s().p("AkPAnIgzACIAygYQItkEAmFTQj4hDlaAKg");
	this.shape_81.setTransform(-2.5,-4.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#661B1E").s().p("AmOA0QCriAElgKQEmgLAnC5QkGhfoXA7g");
	this.shape_82.setTransform(-4.7,-6.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#352B62").s().p("Ahlg5QBwghCHAeQCGAfAXBgQgkhajAgbQi+gbi7CYQBXhkByggg");
	this.shape_83.setTransform(2.7,-7.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#661B1E").s().p("AqmBXQU9qHAQMBQjHhuyGgMg");
	this.shape_84.setTransform(-20.6,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58}]}).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[]},2).to({state:[{t:this.shape_71}]},23).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[]},1).wait(9));

	// Layer 4
	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#6C59B7").s().p("AijBtQiSgJAvjQIIYADQkSDWiXAAIgMAAg");
	this.shape_85.setTransform(1,13.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#6C59B7").s().p("Aj9D7Qi7gHClnuIJ0BpQmrGMiuAAIgFAAg");
	this.shape_86.setTransform(0.4,9.7);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#6C59B7").s().p("Aj7EjQiHgZA+k+QCNh9CfhAQCQg8BrALQBrALAKBOQALBVh0CFQlBEUiSAAQgMAAgLgCg");
	this.shape_87.setTransform(-7.1,10.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#6C59B7").s().p("AkJhkIISAQQgtCrisANIgUABQigAAiFjJg");
	this.shape_88.setTransform(0.6,18.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#6C59B7").s().p("AjbhGIGxAAQAhCEibAJIgQAAQiRAAiWiNg");
	this.shape_89.setTransform(15.2,11.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#6C59B7").s().p("ABgBvIn3gvIgMi1IMCAgQBvB6hDAxQgrAgh7AAQg6AAhLgHg");
	this.shape_90.setTransform(-3.4,-1.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#6C59B7").s().p("ACfBzQlQgjkTgeIgJirIN2ApQB6DKkVAAQgxAAg+gHg");
	this.shape_91.setTransform(-2.6,6.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#6C59B7").s().p("AC9BzQkqgjj1geQjNhcDFhPIMUApQBtDKj2AAQgsAAg4gHg");
	this.shape_92.setTransform(-7.9,9.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#6C59B7").s().p("AEKEoQlTgqkIgjQkKgjB+iKQJNrMGLL2QAfB+g0AxQgnAnhhAAQgmAAgugGg");
	this.shape_93.setTransform(-13.9,0);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#6C59B7").s().p("AAcCwQkHgljeguQichBAFjoISxBXQA/E2i1AKQgmACgqAAQidAAjSgdg");
	this.shape_94.setTransform(-19,16.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#6C59B7").s().p("AAOBrIlUgfIgLi+IJeAZQBvB7hCAwQgsAhh7AAQg6AAhLgIg");
	this.shape_95.setTransform(3.5,9.1);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#6C59B7").s().p("AhUBnIiNgNIgNjHIGXARQBvB6hCAwQgsAgh7AAQg4AAhLgHg");
	this.shape_96.setTransform(19,7.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#6C59B7").s().p("AhUBnIiNgNIgNjHIGXARQBvB6hCAxQgsAfh6AAQg4AAhMgHg");
	this.shape_97.setTransform(25.1,2.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C59B7").s().p("AAnCwQlkglkrguQjShBAGjoIZTBXQBVE2jzAKQg0ACg5AAQjUAAkZgdg");
	this.shape_98.setTransform(-25.4,16.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[]},2).to({state:[{t:this.shape_85}]},2).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[]},1).to({state:[]},2).to({state:[]},6).to({state:[]},23).to({state:[{t:this.shape_90}]},2).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_98}]},3).to({state:[]},1).wait(9));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.9,-15.2,49.8,11.1);


(lib.STK_Plum_highlight = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkAlQgQgPAAgWQAAgUAQgQQAQgQAUAAQAWAAAPAQQAQAQAAAUQAAAWgQAPQgPAQgWAAQgUAAgQgQg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.2,-5.2,10.7,10.7);


(lib.STK_Plum_eyewhite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlfgRQA2hnAugtQAtguBfgdQBggcB1A3QBzA2A/BnQA/BkAGBWQAGBXgGAdQg6AFg3AAQmgAAirkMg");
	this.shape.setTransform(10.3,8.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-16.9,70.5,50.2);


(lib.STK_Plum_eyelid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// lash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#352B62").s().p("AFHDbIAAg2QAAgmgPg9QgOg+gngzQgTgagtgmQgqglgggSQigheh/ApQhaAdhOBmIgEAGQA0hfBKgqQBKgqBcAMQBkAOBYA3QAjAXAyAvQAuApAcA4QAdA2AGA+QAIA9gNA3IgFAhIABghg");
	this.shape.setTransform(2.3,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#352B62").s().p("AEeCAQhKgOh/giQh+gjhdglQhQgdgngbQghgWgbgaQgPgPgUgYQBDA4BgAtQBbAoCEAoQBxAiB1AgQAVAGAmAHQAVAEABAFQAAACgHAAQgOAAgqgIg");
	this.shape_1.setTransform(1.6,6.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#352B62").s().p("AEMCKIjNiEQikhoiJgzQhEgagkgEQAZgBALABIBDAMQBwAWDxCfQDyCggOAGIgBAAQgIAAhBgqg");
	this.shape_2.setTransform(2.5,10.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#352B62").ss(2,1,1).p("AD8AFQj8Abj7gu");
	this.shape_3.setTransform(-1.7,-11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#352B62").ss(2,1,1).p("AkyhQQFCAmEjB7");
	this.shape_4.setTransform(2.2,-3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#352B62").ss(2,1,1).p("AkEhDQEdAIDsB/");
	this.shape_5.setTransform(2.9,-10.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#352B62").ss(2,1,1).p("AlLiwQFHBNFQEU");
	this.shape_6.setTransform(1.6,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#352B62").ss(2,1,1).p("AlgiDQHkh0DdGV");
	this.shape_7.setTransform(-0.2,11.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#352B62").ss(2,1,1).p("AlVhfQALgFAMgEQEShtCjBFQCmBFA5D3");
	this.shape_8.setTransform(0,7.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#352B62").ss(2,1,1).p("AlOhZQBthIBogZQB1gcBeAkQC5BHA2EPQADARADAT");
	this.shape_9.setTransform(0.9,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#352B62").s().p("AFUC9IgGgSQgFgTgIgTIgFgMIgPglIgMgYQg/iqiMg3QhbgjhyAbQgYAGgYAIIgBABIgBAAQgyAMgvAXIgeAMQgZALgXANQABgDADgDQBvhKBpgZQB5gdBgAmQC/BIA3EVIAAAAIAGAkIAAADIgFgQg");
	this.shape_10.setTransform(0.9,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#352B62").s().p("AE/C5IgWhIIgXhHQgKgegYgoQgXgrgrgoQgrgphRglQhPglhqAVQhqAUhYBLQBOhXBIgVQBKgWBQALQBNALA9AjQA+AjAhAlQAhAlATAoQAUAmASA1QASA0AOBlIgCAYQAAgRgJggg");
	this.shape_11.setTransform(2.2,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6C59B7").s().p("AhaBVQi5hQhNiPIABAAQDQguCxBKQC2BLCJC+QggABgfAAQjWAAimhHg");
	this.shape_12.setTransform(-0.6,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},2).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[]},5).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_10}]},4).to({state:[{t:this.shape}]},1).to({state:[]},1).to({state:[{t:this.shape}]},5).to({state:[{t:this.shape_11}]},1).to({state:[]},1).to({state:[]},2).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape},{t:this.shape_12}]},11).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_12}]},1).wait(12));

	// lid
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6C59B7").s().p("AhgBTQiohUhWiXQDSERHrAXQhGAJhAAAQiyAAiHhGg");
	this.shape_13.setTransform(-0.6,13.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#352B62").s().p("AElBTQg/iHgrgqQg6g4hFgUQg/gShEADQg9AChHAVQguANg3AkIgtAgQgEgEAxgmQA2gpAngOIAAAAQCJg1CMAoQBKAUA+A9QA1AzAkBOQAiBKAZBsQABAEgCAEQgYg5gghFg");
	this.shape_14.setTransform(0.1,6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6C59B7").s().p("AFXDxQgfiQhFhgQhIhihwgsQizhCjhCaIgKAGIAEgJQAPghAYgiQAmgzAqgXIAzgbQAmgSArgKQBegXB7A/QB7A/A4BlQA7BoAABXQABBAgGAmIgDAOIgEgSg");
	this.shape_15.setTransform(0.5,2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#352B62").s().p("AArA2Qjxg7hMhAQgvgogbgmIgDgFQBxB3EIA7QEzBFATA6QhCgnjzg8g");
	this.shape_16.setTransform(-1.8,11.2,1,1,0,0,0,-1.4,-2.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#6C59B7").s().p("AhcDBQi6hRhXigQAthPApgoQBJhGBygUQAygJAyAJQA2AJA6AdQA7AeAuAqQAxAsAcA0QA+BuABBWQABBSgJAiQglACgkAAQjZAAifhGg");
	this.shape_17.setTransform(0.1,2.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#352B62").s().p("ABkBeQkOhShThBQhThEgbgnIgEgGQB+COEwBXQEwBZABANQAAABAAAAQAAAAAAAAQgBAAAAABQgBAAgBAAQgYAAjxhJg");
	this.shape_18.setTransform(-1.5,11.6,1,1,0,0,0,-1.4,-1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#6C59B7").s().p("AltgzQAshfA4gtQA2gpBqgXQBkgWB7BAQA+AgArAnQAwApAeA0QA+BqACBYQABBXgHAdIgaABQoYAAiik5g");
	this.shape_19.setTransform(0.6,2.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C59B7").s().p("AhgBRQiphThViVQDdD7HgAqQhGAKhBAAQixAAiHhHg");
	this.shape_20.setTransform(-0.5,13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6C59B7").s().p("ADzAAQhIhihwgsQi3hEjnCiQAQgnAbgmQAjgzAlgUQBCgkBKgRQBkgZB1A8QB7BAA4BlQA7BnAABYQABBMgJAnQgfibhJhmg");
	this.shape_21.setTransform(0.5,2.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#352B62").s().p("AFSDIQgDhCgdhKQg5iQh+hBQilhViBAiQhbAZhOBaIgFAFQA1hUBKglQBLgkBeALQBnAOBaAzQAlAVAzArQAXASAnBKQAmBGAEAeIAJA2QADAegFAVIgFAeIAAgeg");
	this.shape_22.setTransform(1.1,21.4,1,1,0,0,0,0,17.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C59B7").s().p("AFKDNIAAAAIgBAAIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABAAIAAgCIAAgBIAAgCIgBABIgBgBIAAgBIgBAAIAAAAIgDgdIgBgKQgVg0gkg4QhciPh9gnQhpghhKAMQhgARhsBfQAXglAVgYQAegiAkgTQBPgtBVgBQBPgCBRAnQA9AdAoAlQAfAeArA/QAjAwAPBNIAEAVIAAABIAAAAIABACIAAABIABACIgBABIABABIAAABIAAAAIABAAIAAABIgBAAIAAACIABABIAAAAIAAACIAAAAIAAABIABABIAAADIAAABIAAABIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAAAIAAABIABACIAAACIAAACIAAABIAAABIAAABIAAACIAAAAIAAABIAAAKIABALIAAAEIgBABIAAAAIgBAAIgBAAIAAACIAAAAIgBAAIgBgBgAFJCzIABALIAAABIAAgGIAAgHIAAgCIgBgBIAAAAIAAgBIAAgCIAAAAIAAgBIAAgCIgBAAIAAgBIABALg");
	this.shape_23.setTransform(2,-2.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#352B62").s().p("AFHDbIAAg2QAAgmgPg9QgOg+gngzQgTgagtgmQgqglgggSQigheh/ApQhaAdhOBmIgEAGQA0hfBKgqQBKgqBcAMQBkAOBYA3QAjAXAyAvQAuApAcA4QAdA2AGA+QAIA9gNA3IgFAhIABghg");
	this.shape_24.setTransform(2.3,1.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6C59B7").s().p("AlUgqQAhg4AygqQAxgrBkgXQBlgYB0A8QB0A7A6BpQA5BlABBaIABAdQnGg/jkjBg");
	this.shape_25.setTransform(1.3,-2.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#6C59B7").s().p("AlShhQAggwAsgoQAtgpBlgWQBlgWB1A8QB1A8A5BoQA5BkAEA9QAFA7gMBRQmckzkAgtg");
	this.shape_26.setTransform(2,1.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6C59B7").s().p("AkDAmQAQgTAUgQQAxgpBjgXQAxgLA2AJQA0AJA/AcQBFAdAxA0QhYANhkAAQiWAAi2geg");
	this.shape_27.setTransform(-2,-16.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#6C59B7").s().p("Ak1gYQAVgZAYgWQAtgpBlgWQBmgWB1A7QBzA7A6BoQASAfASAsQkziJk4gcg");
	this.shape_28.setTransform(2.2,-9.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6C59B7").s().p("AkHghQAtglBggWQBmgWB1A8QBuA2A5BiQj2iEkZABg");
	this.shape_29.setTransform(2.6,-13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6C59B7").s().p("AlShhQAggwAsgoQAtgpBlgWQBmgWB1A7QBzA7A5BpQA6BlAEA9QAFA7gMBRQmckzkAgtg");
	this.shape_30.setTransform(2,1.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6C59B7").s().p("AhgC7Qi3hPhMiLQGGgKE2EqIg9ACQjWAAimhIgAllghIgBgCQAYgkAfgrQArg5ATgSQAsgoBmgXQBkgWB2A8QBzA7A6BoQA5BmAFA9QAEA5gMBWQjbmenoB+g");
	this.shape_31.setTransform(0,2.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6C59B7").s().p("AhgC7Qi3hPhMiLQFqBCFSDeIg9ACQjWAAimhIgAllghIgBgCQAYgkAfgrQArg5ATgSQAsgoBmgXQBkgWB2A8QBzA7A6BoQA5BmAFA9QAEA5gMBWQhyojpREDg");
	this.shape_32.setTransform(0,2.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C59B7").s().p("AhgC7Qi3hPhMiLQFDDJF5BXIg9ACQjWAAimhIgAENADQg9hkhegrQhhgrh0AYQh7AbiHBjIgBgCQAYgkAfgrQArg5ATgSQAsgoBmgXQBkgWB2A8QBzA7A6BoQA5BmAFA9QAEA5gMBWQgTiVg+hng");
	this.shape_33.setTransform(0,2.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6C59B7").s().p("AhaBMQi5hOhNiRIABAAQDGAGCxBMQCxBICYCLQggACgfAAQjWAAimhIg");
	this.shape_34.setTransform(-0.6,13.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6C59B7").s().p("AhaBRQi5hQhNiOIABAAQGGhFE6FpQggACgfAAQjWAAimhIg");
	this.shape_35.setTransform(-0.6,12.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#6C59B7").s().p("AhaBVQi5hQhNiPIABAAQDQguCxBKQC2BLCJC+QggABgfAAQjWAAimhHg");
	this.shape_36.setTransform(-0.6,12.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6C59B7").s().p("AFZDoIgGgSIgIgZQgWhigthKQg9hkhegrQhhgrh0AZQhTARhYAzIgRAIQgfAOgeARQAUgdAZghQArg6ATgRQAsgpBmgWQBkgWB2A7QBzA7A6BpQA5BlAFA9QADAxgIBFIgDgMg");
	this.shape_37.setTransform(0.4,0.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#6C59B7").s().p("AhaBMQi5hOhNiRIABAAQCZAgCwBMQCtBLDKBuQggACgfAAQjWAAimhIg");
	this.shape_38.setTransform(-0.6,13.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#6C59B7").s().p("AhgC7Qi5hQhNiOQAYgkAfgrQArg5ATgSQAsgoBmgXQBkgWB2A8QBzA7A6BoQA5BmAFA9QAEA6gMBXQghACghAAQjWAAimhIg");
	this.shape_39.setTransform(0,2.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C59B7").s().p("AhZBfQi5hQhNiPIABAAQALgCgOgOQC+g0DfBOQDMBXBaDEQggABggAAQjVAAimhHg");
	this.shape_40.setTransform(-0.7,11.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#352B62").s().p("ACfAQQiDhZh+gqQiAgqhsAOIgMgCQCggzDtCBQDvB+A5BlQg6g2iChag");
	this.shape_41.setTransform(34.9,29,1,1,0,0,0,34.7,15.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#6C59B7").s().p("AhhC6Qi6hQhNiPIABgEQAAgFAWgUQGMgtEuFuIgQABQggABgfAAQjWAAilhHgAFdCaIAAAAIgBgBIAAgBIAAgBIAAgBIAAAAIAAgBIAAgBIABgBIAAgBIAAgCIAAgBIgBAAIgBAAIAAgBIgBgBIAAAAIgDgdIgBgKQgVgzgkg3QhciQh9gnQhpghhKALQhgARhsBgQAXglAVgYQAegiAkgTQBPgtBVgBQBPgCBRAmQA9AdAoAmQAfAeArA/QAjAyAPBKIAEAWIAAAAIAAABIABABIAAACIABABIgBACIABABIAAAAIAAAAIABABIAAAAIgBABIAAACIABAAIAAAAIAAACIAAABIAAAAIABABIAAADIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAAAIABACIAAADIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAAKIABALIAAAEIgBAAIAAABIgBAAIgBAAIAAABIAAAAIgBABIgBgBgAFcB/IABAMIAAABIAAgHIAAgHIAAgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIAAAAIABAKg");
	this.shape_42.setTransform(0.1,2.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_14},{t:this.shape_20}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_20}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},6).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[]},1).to({state:[{t:this.shape_35}]},4).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_17},{t:this.shape_41}]},1).to({state:[{t:this.shape_42},{t:this.shape_22},{t:this.shape_20}]},2).to({state:[{t:this.shape_35}]},1).to({state:[]},11).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_31}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_20}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_24}]},1).wait(12));

	// ring
	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#6C59B7").s().p("AmBgjQAlg9AZgiQAdgoAZgYQAfgdAmgRQAigQA6gPQA1gNA/ALQA+AKBBAhQB9A+BAByQA9BwABBfQAABdgIAgIhAABQn5AAjCk6gAhgjzQhkAYgyAsQgwAshABlQC+EzH/gTQAHgeABhVQgBhXg6hmQg5hphzg6QhUgqhIAAQgeAAgeAIg");
	this.shape_43.setTransform(0.4,1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6C59B7").s().p("AmBgjQAlg9AZgiQAdgoAZgYQAfgdAmgRQAigQA6gPQA1gNA/ALQA+AKBBAhQB9A+BAByQA9BwABBfQAABdgIAgIhAABQn5AAjCk6g");
	this.shape_44.setTransform(0.4,1.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6C59B7").s().p("AmBgjQAlg9AZgiQAdgoAZgYQAfgdAmgRQAigQA6gPQA1gNA/ALQA+AKBBAhQB9A+BAByQA9BwABBfQAABdgIAgIhAABQn5AAjCk6gAhWjKQh0ANgwAhQgxAig7BcQC+EzH/gTQAAgjgThbQgUhbgwhRQgvhUhbgtQhGgkhUAAQgYAAgaADg");
	this.shape_45.setTransform(0.4,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43}]}).to({state:[{t:this.shape_43},{t:this.shape_44}]},2).to({state:[{t:this.shape_43}]},3).to({state:[{t:this.shape_43}]},29).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_43},{t:this.shape_44}]},1).to({state:[{t:this.shape_43}]},2).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_43}]},11).to({state:[{t:this.shape_43},{t:this.shape_44}]},2).to({state:[{t:this.shape_43}]},3).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-26,77.3,56);


(lib.STK_Plum_exp_vs = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB5023").s().p("Am8EMQh6g/BYieQBWicBXg1QBWg2CPglQCMglG2A3QAcAMgdACQhjgJjPALQjNAKh9BQQh9BQgsCkQgoCahWAAIgOgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.6,-26.8,103.3,53.9);


(lib.STK_Plum_exp_thqe = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB5023").s().p("AC0IVQgRhUhXi7QhXi8g8ifQg7ihgrhtQgrhsAGg2QABgmAcgIQALgCAgAIQAfAHAyBDQAyBDAeB0QAgB0AmB9QAnB8AWCRQAWCRAkC8QgEAUgCABQgEgBgWgeg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-21.2,-56.4,42.5,112.9);


(lib.STK_Plum_body_front = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C59B7").s().p("ArjJyIAAuOQA/gHA6gOQBGgRAlgWQB2hECFijQCTiRDVgLQDSgKCxB5QCBBXA9B2QA/B4AACoQgICbg+B0QhHCHimCEQijB0jfBPQlHB0mIAKIhDABg");
	this.shape.setTransform(68.8,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C59B7").s().p("ArdLVIgHAAIAAv4QBAgHA5gOQBCgPAmgUIAEgCQApgYAsgjQAsgkAzgxQAkglAlgsIAWgUQAVgSAXgQQCAhaCngHIAIAAQBwgDBnAiQBVAdBPA2IADACQB9BXA8B0IABADQArBTANBoQAGAvAAAzIAAADQgHBwghBYQgNAjgRAhIgBABQguBVhTBUQgvAwg9AwIgEADQhrBKiFA6QhDAdhKAZIgCABQhtAmh2AYQg+ANhDAKQg7AKhCAGQiEAOiNACIgZgBg");
	this.shape_1.setTransform(68.8,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C59B7").s().p("ArLLCIgbAAIAAv4QA/gHA6gNQBBgOAngTIAEgCQAqgWAsggIBkhOQApgiAlgnIAWgTQAVgRAYgOQCDhSCmgDIAIAAQBvAABlAkQBVAfBNA2IADACQB8BZA7B0IABADQAqBTAMBoQAGAugBAzIAAADQgHBugiBaQgNAjgSAhIgBABQguBVhTBRQgxAwg8AuIgEADQhtBJiFA2QhEAbhKAWIgCAAQhvAhh1ARQg7AJhGAGQg0AIhJACQiDAJiOABIgCAAg");
	this.shape_2.setTransform(69.1,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6C59B7").s().p("AnBKhQiAgBiPABIAAAAIgaAAIAAv4QA/gGA6gLQBBgNAogQIAEgCQAsgTAtgcQAcgWBPgrQAwgdAlggIAXgQQAWgPAZgMQCIhGCjAEIAIABQBuAFBjAmQBUAjBLA4IACACQB5BbA5B0IABADQApBUALBmQAFAugBAzIAAADQgIBtgjBZQgOAkgSAhIgBABQgwBThTBPQgzAvg8AsIgEACQhuBHiGAuQhFAXhLARIgCABQhyAYhyAEQg2AChLAAQgZADgrAAIg7gBg");
	this.shape_3.setTransform(69.5,9.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C59B7").s().p("AjMKFQgugHhTgJQgXABhqgLQhzgNiFgBIgqAAIAAhrIAAAAIAAuNQA+gFA6gJQBBgKArgNIAEgCQAugPAtgWQAPgKBoglQA5gWAlgVIAZgNQAWgMAbgJQCOg0ChAOIAIABQBsAMBhAqQBRAoBHA6IADACQB0BfA2B0IABADQAnBUALBlQAEAtgCAyIAAADQgIBtglBYQgPAkgTAhIgBABQgyBThUBKQg1Aug7AoIgEACQhyBDiHAkQhFAThMAJIgDABQg2AGg3AAQg9AAg7gIg");
	this.shape_4.setTransform(70.1,16.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6C59B7").s().p("AjdJgIgWgIQgngQg9gPQgSgJhkgRIgFgBQhwgciHgCIgiAAIAAhrIABAAIgBuNQA/gEA5gGQA/gHAugJQAygKAwgPIAHgDQAegFBZgUQBUgTAqgOIAdgIIAXgEQCWgdCeAcQBnAWBaAsIAGADQBQAvBDA8QBvBmA0B2QAjBTALBhIAAAEQACAugCAzQgKBqglBVIgCAEQgQAkgVAhQg0BQhUBGIgCACQg4Atg/AkQh0A+iGAXIgCABQhIAMhLABQh3gBhrgjg");
	this.shape_5.setTransform(69.6,25.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6C59B7").s().p("AgWKCQh2gNhlg0IgUgKQglgagzgVQgdgWhPgVIgGgCQhrgmiIgEIgbAAIAAhrIABAAIgBuOIB4gGIBtgJQAzgGAwgIIAHgBQApgCBNgLICBgNIAdgDIAXgBQCbgGCUAnQBlAeBWAwIAGAEQBNA0A+A+QBqBpAwB3QAjBVAIBeIAAAFQACAtgFAzQgLBpgnBUIgCAEQgQAjgWAgQg1BPhXBCIgCACQg6Asg/AhQh3A5iHAMIgCABQgiADghAAQgnAAglgEg");
	this.shape_6.setTransform(68.1,33.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C59B7").s().p("AgtKFQh0gWhfhAIgSgNQglghgsgbQgjgfhAgYIgFgCQhvgziRgCIgHAAIAAhrIABAAIgBuOIB4gDIBsgEIBlgFIAHgBQAxABBEgDQBLgBA4ADIAdABIAXABQCeANCOAvQBjAkBTA0IAFAEQBLA4A7A/QBlBsAuB3QAhBWAHBbIAAAFQABAxgFAwQgMBpgpBUIgCAEQgRAigWAfQg3BNhYBBIgCACQg8AqhAAeQh4A1iIAEIgCABIgPAAQhCAAg9gMg");
	this.shape_7.setTransform(67,39.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6C59B7").s().p("ABSKjIgCAAQhLgBhCgRQhygdhchKIgRgOQgkgngmgeQgpgng1gZIgFgDQhsg5iRgDIgEAAIAAhrIABAAIgBuOIB4gBIBsAAIBlABIAHAAIB2AFQBHAEA9AIIAdAEIAXAEQCgAZCJA1QBiAoBQA3IAGAEQBIA7A5BAQBiBuAsB4QAhBWAGBaIAAAFQAAAygGAvQgNBpgqBTIgCAEQgRAhgXAfQg4BNhZA+IgCACQg9AqhAAbQh3AxiDAAIgIAAg");
	this.shape_8.setTransform(66.2,42.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6C59B7").s().p("ABIKyIgDAAQhJgEhDgTQhxgihahPIgQgPQgjgqgjggQgsgrgvgaIgFgDQhqg+iRgDIgCAAIAAhrIABAAIgBuOIB4AAIBrACIBmAFIAHAAQA7AEA6AGQBFAIBBALIAcAFIAYAFQCiAhCFA5QBhArBPA4IAGADQBHA9A4BBQBfBvArB4QAhBXAFBaIAAAFQAAAygGAuQgOBogqBTIgCAEQgRAhgXAfQg5BMhaA9IgCACQg+AphBAaQhvAth7AAIgYAAg");
	this.shape_9.setTransform(65.8,44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6C59B7").s().p("ABEK3QjVgLiTiRQhShkhMgvQhshCiVgDIgBv5QC+gCCSAMQCUALCFAbQErA9DCCKQEjD5AQEhQgBCog+B4Qg9B2iBBXQikBvjAAAIggAAg");
	this.shape_10.setTransform(65.6,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-69.7,148.1,146.7);


(lib.STK_Plum_bodypatch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6C59B7").s().p("AoSD6Qg0gZgdhJQgchDAAhVQAAhUAchEQAdhJA0gZQDdhoE1AAQE3AADbBoQA0AZAeBJQAcBEAABUQAABVgcBDQgeBJg0AZQjbBpk3AAQk1AAjdhpg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[]},1).wait(233));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64,-35.4,128.1,71.1);


(lib.STK_Plum_Appendage = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB5023").s().p("ABpE/Qh4gQAHhyQAIhzgWhhQgXhjhRhYQhRhXgWgRQgWgSB8AnQB8AnBJA6QBKA6AvBiQAvBggGCMQgFB9hiAAQgMAAgMgCg");
	this.shape.setTransform(21.6,32.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB5023").s().p("AB6E9Qh4gMgChzQAAh0gZhgQgahihRhXQhRhYgWgQQgXgRB9AnQB9AnBHA4QBKA4AzBhQAzBfABCJQABB+hmAAIgRAAg");
	this.shape_1.setTransform(22.3,31.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB5023").s().p("ACKE6Qh1gHgMh0QgKh2gcheQgdhhhRhXQhRhXgXgQQgWgRB9AoQB9AmBIA3QBJA2A2BgQA2BdAJCHQAHCAhqAAIgKAAg");
	this.shape_2.setTransform(23,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB5023").s().p("ACaE3QhzgCgVh2QgUh2ggheQgghghQhWQhRhWgXgQQgXgQB+AnQB+AnBGA0QBJA0A6BfQA6BdAPCEQAPCChwAAIgCAAg");
	this.shape_3.setTransform(23.8,31.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB5023").s().p("AAaDAQgdh4gjhcQgkhfhQhWQhRhWgXgPQgXgQB+AnQB/AoBGAyQBHAyA+BeQA+BbAWCBQAWCChwADIgGAAQhrAAgeh0g");
	this.shape_4.setTransform(24.6,31.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB5023").s().p("AAiDAQgmh4gnhcQgnhdhQhWQhRhWgXgPQgYgPB/AnQCAAoBFAwQBHAwBBBdQBCBaAdB/QAdB/htAIIgOAAQhjAAgmhxg");
	this.shape_5.setTransform(25.4,30.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB5023").s().p("AAqDAQgwh5gqhbQgqhchQhVQhRhWgYgOQgYgPCAAnQCAAoBEAuQBHAuBFBcQBFBZAkB8QAlB8hrANIgUABQhdAAgthug");
	this.shape_6.setTransform(26.3,30.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB5023").s().p("AAyDBIhojUQgthchQhVQhQhVgZgOQgYgPCBAoQCAAoBEAtQBGAsBJBaQBIBXAsB6QArB6hpASQgNACgMAAQhXAAg0hrg");
	this.shape_7.setTransform(27.2,30.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB5023").s().p("AA5DBQhEh8gwhZQgxhahQhVQhQhUgZgOQgYgOCBAoQCBAoBDAqQBFAqBNBZQBMBXAzB3QAzB4hnAWQgQAEgPAAQhTAAg6hpg");
	this.shape_8.setTransform(28.1,30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB5023").s().p("AAqC9Qguh4gphYQgphahQhVQhRhVgYgOQgYgPCBAoQCAAoBEAtQBGAsBFBbQBFBZAfB6QAeB6hoAMIgTABQhaAAgshtg");
	this.shape_9.setTransform(25.9,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB5023").s().p("AAaC6Qgah0gghYQgihbhQhVQhRhWgYgPQgYgPCAAoQCAAnBEAwQBHAvA+BeQA+BaALB9QALB9hrACIgEAAQhnAAgahyg");
	this.shape_10.setTransform(23.9,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EB5023").s().p("AB4EuQhtgIgEhxQgFhwgZhYQgahahRhWQhRhWgXgPQgXgQB/AnQB+AoBGAyQBIAyA2BfQA2BdgJCAQgIB3hgAAIgNAAg");
	this.shape_11.setTransform(22.2,30.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB5023").s().p("ABMEvQhsgTAQhsQAQhsgShYQgThahRhXQhRhWgXgQQgXgQB+AnQB8AnBJA1QBIA0AvBiQAvBfgdCCQgZByhYAAQgMAAgOgCg");
	this.shape_12.setTransform(20.9,30.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EB5023").s().p("AAeEvQhvgcAmhpQAnhogMhYQgMhahRhXQhRhXgXgQQgWgRB9AnQB7AnBJA3QBKA4AnBjQAoBhgxCFQgnBthUAAQgRAAgUgFg");
	this.shape_13.setTransform(20,31);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB5023").s().p("AgREvQhzgmA8hlQA8hkgFhYQgEhahRhXQhRhYgWgRQgWgRB8AnQB6AmBKA6QBLA6AgBmQAfBjhDCIQg1BphSAAQgXAAgXgJg");
	this.shape_14.setTransform(19.3,31.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB5023").s().p("AAOE0QhzghAvhoQAvhogJhaQgJhdhRhXQhRhYgWgRQgWgRB8AnQB6AmBKA6QBLA6AjBlQAkBjg0CIQgrBuhTAAQgVAAgWgGg");
	this.shape_15.setTransform(19.7,31.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB5023").s().p("AAuE4Qh1gcAihrQAihsgOhcQgNhfhRhXQhRhYgWgRQgWgRB8AnQB6AmBKA6QBLA6AnBkQAoBiglCKQgfByhXAAQgSAAgTgEg");
	this.shape_16.setTransform(20.2,31.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EB5023").s().p("ABME7Qh2gVAVhvQAUhwgRheQgShhhRhXQhRhYgWgRQgWgRB8AnQB6AmBKA6QBLA6ArBjQArBhgVCLQgTB3hcAAQgOAAgRgDg");
	this.shape_17.setTransform(20.8,31.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB5023").s().p("ABTFIQiXg0A4h6QBfithBhcQglhDhphFQhsg9gRAAQgagMCDgHQCHASBUAxQBTAuAyBVQBCBtgcCxQgbCrh9AAIgLAAg");
	this.shape_18.setTransform(23.8,31.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EB5023").s().p("AiRECQkchKA4h+QA4h8DFBMQDDBNBTADQBUAEg7iXQg7iag3hZQCUBvBoCZQBoCXhGBgQgiAthBAUQg0AZhSAAQhsAAifgrgAFbDvIACACIgDABg");
	this.shape_19.setTransform(-7.4,29.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB5023").s().p("AieCyQkriFAzhkQA0hmD4CCQD3CBA2ALQAYAGARgsQAUhggmhcQgmhdgthPQCdCaA3CXQA3CZgiA1QgiA1giABQgfAGgjAAQiYAAjwhsgAGcD9IACADIgCAAg");
	this.shape_20.setTransform(-13.9,28.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EB5023").s().p("AhQGFQgRAAgvgGIgygHQBHgTBDgaQAlgPARgVQAOgUAAgeQAAgjhCiVQhFiTAAhKQABh4BAg/QAuguAwAAQBFABAcA/QATAogBAxQAAALgKBFQgJBFAAALQAAALAgBTQAfBVAAAlQAABlhBBEQhKBRiFAAIgDgBg");
	this.shape_21.setTransform(17.5,-36.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB5023").s().p("AiFG9QgUAAg0gHIg4gIQBVgVBSgfQAtgQAYgYQAXgYAEgiQAHgngvirQgxioAPhVQAaiJBThIQA/g0A4AAQBPAAAUBJQAMAtgKA4QgCANgZBPQgYBOgDANQgCANATBfQATBhgIArQgUByhYBPQhlBbiXAAIgEAAg");
	this.shape_22.setTransform(24.4,-41.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB5023").s().p("AhWiaIABgBQBBh/Bmg1QBPgoBFAKQAQADAPAKQAYARAGAdQAHAhgPAYQgLAUgjAbIhLA6QgjAdggAgIgcAfQgeAjhyCWQhkCEhUBXIgfAQQBvlQBfi6g");
	this.shape_23.setTransform(29.1,-35.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB5023").s().p("Ag0inIABgCQBxhwCPgaQBtgTBRAeQATAHAQAQQAYAXgBAgQAAAlgZAVQgTARgzARQhBAXgrARQg0AUgwAZIgsAXQguAZi3B+QigBsiABCQgCACgoAGQDnk7Cqing");
	this.shape_24.setTransform(45,-30.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EB5023").s().p("Ag3B9QiHi3iwlTQgDgMATALQAKAFALAIQEYDPCuCnQD5DpgGBvQgCAggdAWQgWAQgQABIgFAAQiUAAjJkXg");
	this.shape_25.setTransform(36.8,40.5);

	this.instance = new lib.Plum_wave("synched",0);
	this.instance.setTransform(0.1,3.3,1,1,0,-105.4,74.5,2.8,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.instance}]},1).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0,59.4,64.3);

(lib.STK_Plum_Appendagecopy001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB5023").s().p("ABpGXQh4gUAHiSQAIiTgWh8QgXh/hRhvQhRhwgWgWQgWgWB8AxQB8AyBJBKQBKBKAvB+QAvB7gGCyQgFCghjAAQgLAAgMgDg");
	this.shape.setTransform(21.6,41);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB5023").s().p("AgRGFQhzgxA8iBQA8iBgEhxQgFhzhRhwQhRhwgWgWQgWgWB8AyQB6AxBKBKQBLBLAgCCQAgCAhECtQg1CHhRAAQgXAAgYgLg");
	this.shape_1.setTransform(19.3,40);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB5023").s().p("ABCEAQhIilgzh1Qg0h4hThyQhTh0gZgUQgZgUCCA/QCBA9BDA8QBHA8BOB4QBPB2A4CdQA3CdhkAUQgLACgKAAQhXAAhCiSg");
	this.shape_2.setTransform(28.7,40.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB5023").s().p("AC8EiQivgehwhGQhyhHg6hXQg6hWgYiDQgYiEARAbQARAZBeBmQBdBlB4AvQB1AsCSAWQCRAVgEB8QgEBjhzAAQgbAAgigFg");
	this.shape_3.setTransform(34.3,29.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB5023").s().p("AhmDbQh4g8g3haQg3hXgUiFQgUiEARAbQAQAaBaBpQBbBoBvAeQBtAeCKgcQCMgbAVB5QAWB7i4AaQg3AIgxAAQhyAAhTgrg");
	this.shape_4.setTransform(33.8,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB5023").s().p("ACjFGQiRhShmhjQhqhhgvhPQguhOgniKQgoiKAQAbQAQAdBiBmQBkBlBtBHIEACrQCUBlgkBfQgUAzg0AAQgsAAhCglg");
	this.shape_5.setTransform(33.3,35.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB5023").s().p("ADLEXQixgVhzhCQh1hCg+hVQg+hSgdiCQgeiDATAZQARAaBjBhQBhBhB6ApQB3AoCTAOQCRAPACB8QABBph/AAQgWAAgbgDg");
	this.shape_6.setTransform(35.8,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,0.1,46.7,82);

(lib.Plum_wave = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.STK_Plum_Appendagecopy001("single",0);
	this.instance.setTransform(1.8,0,1,1,54.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB5023").s().p("AjYFRQg0gfgGgxQABhEAhgaQAWgSA6gGQBLgIAdgJQA9gUAqg3QA4hGAcg8QAXg1APhJQAKg0APg1QAMgqABgJQBWDMgXCBQgFAegEA8QgKA+goBIQgQAdglAkQguAqg1AaQgjARg2AMQgzAMgfAAQg5AAgvgdg");
	this.shape.setTransform(-20.6,34.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB5023").s().p("AiqHKQgtgQgHg5QgJhDAxhtQAcg+BNhOQBShTAQgbQBDhyAsiGQAtiIACghQABgfAZCOQAaCNgIBcQgHBcgzCFQgRAshKBbQhKBbgVA1QgQAogvAWQgbAMgaAAQgRAAgQgGg");
	this.shape_1.setTransform(-17.4,45.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{mode:"single",startPosition:0,loop:undefined,scaleY:1,rotation:54.2,skewX:0,skewY:0}}]}).to({state:[{t:this.instance,p:{mode:"synched",startPosition:1,loop:false,scaleY:1,rotation:54.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.shape}]},2).to({state:[{t:this.instance,p:{mode:"single",startPosition:2,loop:undefined,scaleY:1,rotation:54.2,skewX:0,skewY:0}}]},2).to({state:[{t:this.instance,p:{mode:"single",startPosition:2,loop:undefined,scaleY:1.006,rotation:0,skewX:48,skewY:54.2}}]},2).to({state:[{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-1.3,93.8,85.8);


(lib.STK_Plummouthsync = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// do lip sync here
	this._syncmouth = new lib.STK_Plum_mouth();
	this._syncmouth.setTransform(0,7.6,1,1,-2.6);

	this.timeline.addTween(cjs.Tween.get(this._syncmouth).wait(108).to({rotation:0,x:-0.2,y:6.3,mode:"single",startPosition:5},0).wait(36).to({startPosition:0},0).wait(42).to({startPosition:18},0).wait(63).to({startPosition:40},0).wait(1).to({startPosition:11},0).wait(1).to({startPosition:3},0).wait(1).to({startPosition:41},0).wait(1).to({startPosition:7},0).wait(1).to({startPosition:46},0).wait(1).to({startPosition:1},0).wait(1).to({startPosition:42},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-9.2,50.3,13.5);


(lib.STK_Plum_Antenna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB5023").s().p("AESH3QgIhjg/jKQg+jJhthlQhrhngrgiQj2jGBhhHQBLgnCXB3QBwBbBZCQQAcAtAZAxQBrDRggGFQgEAQgDAAQgEAAgDgOg");
	this.shape.setTransform(-26.4,-48.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB5023").s().p("AD4IAQgEgOgIgUQgDgDgCgGQgCgFgBgIQgJhRghh+QgHgdgIgbQgyihhVhhIgfgkQhFhMgmgnQg2gzgogsQhzh7A3g/QAZgZAwAFQAMACANAEQA1AQBDA3QAoAjApAtQA+BMAyBYQAWAoAUApIAHAQQAlBWASBjQAQBcAAByQABBegPB0QgEARgEAAQgCAAgDgHg");
	this.shape_1.setTransform(-23.2,-51);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EB5023").s().p("ACSJFQgFAAABgNQARhZgbi9Qgci9hKiSQhIiUhahwQhZhxAAhaQABgwArgUQALgEAOAAQBWgBB2CXQBYCYAhB1QAiB0AJBaQAKBcgHB1QgIB2g2DGQgIALgDAAIAAAAg");
	this.shape_2.setTransform(-13.7,-54.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EB5023").s().p("ABjI7QANh3gijXQgijXgwiKQgziMhDhuQhDhvAIhFQAEgiAhgHQALgCAdAIQAuAIBPBjQBIBiAfB2QAfB1ASBlQARBkgMCXQgMCWg1DSQgHARgDAAQgEAAAAgRg");
	this.shape_3.setTransform(-8.5,-55.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EB5023").s().p("ABVI8QAMiAgljgQgkjegpiJQgriJg7huQg8htAMg/QAFgdAdgEQALAAAhALQAhAKBCBRQBEBRAeB2QAeB2AUBoQAUBngNChQgNCig2DWQgGATgDABQgEgBAAgTg");
	this.shape_4.setTransform(-6.7,-55.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EB5023").s().p("ABjI4QAHh5grjcQgrjcgpiLQgriOg4htQg3huALg9QAFgfAcgEQAMAAAhAKQAgAKA/BQQBABPAdB2QAdB1AVBtQAWBqgJCgQgKCfgpDTQgGATgCABQgEgBgDgVg");
	this.shape_5.setTransform(-8.3,-55.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EB5023").s().p("AB8IuQgDhmg6jPQg7jQgoiaQgqicgqhuQgqhuAKg5QAGgkAdgEQALgBAfALQAgAKAzBLQA0BKAYB2QAYB2AXB5QAXB2ABCaQAACZgHDKQgGATgCABQgEAAgMgdg");
	this.shape_6.setTransform(-11.6,-55.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EB5023").s().p("ACCIdQgVhFhVi9QhTi+gmiyQgni0gThvQgRhvAJgyQAHgpAdgFQALgBAeALQAdAKAiBCQAeBCAPB2QAPB2AXCOQAZCKARCQQARCPAwC/QgFAUgDABQgEgCgZgpg");
	this.shape_7.setTransform(-13.4,-54.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EB5023").s().p("AD4IkQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBAAgBQgDgQgUgnQgWhFhBiMIgOggQhHihhLh6QgagmgUgjQgog+gXgnQg9hggchDQguhsAlgrQARgdAiACQAPACAYAJQAhAMAjAtQAOARAPAWQAiAwAdBCQAlBMAlBcQARArARAuIAFAOQAuCDAWCbIAxExIgBAOIAAgBIAAABIAAACIAAgCg");
	this.shape_8.setTransform(-22.9,-53.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EB5023").s().p("AEzHhQgOhihJjGQgjhdg0hJQgtg8g/g0QhwhhgtghQkBi3BdhMQBKgrCdBuQBBAxAwAtQA7A4AtBAQAgAuAaAtQB6DPgLF+QgDAQgEAAQgDAAgEgOg");
	this.shape_9.setTransform(-29.8,-46.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EB5023").s().p("AErHqIgBgEQgMhhhFjCIgDgIQgihfgxhJQgshBg7gyIgBgBQhuhigtghQj+i6BdhLQBLgqCaBvIACACQA9AvAyAzQA4A4AtBCQAeAtAaAtIACADQB0DPgPF+IAAADQgDAPgEAAQgDAAgEgMg");
	this.shape_10.setTransform(-29,-47);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EB5023").s().p("AEmHtIgBgEQgMhihEjDIgDgHQgihggthJQgshFg4gxIgBgBQhuhjgtghQj8i9BdhKQBLgqCaByIACACQA7AtAzA3QA1A4AuBEQAdAtAbAvIACADQBwDOgSGBIgBADQgDANgDAAQgEAAgDgNg");
	this.shape_11.setTransform(-28.5,-47.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EB5023").s().p("AEiHvIAAgEQgMhjhDjDIgDgIQgihggshJQgshHg3gwIgBgBQhthkgtghQj7i+BehKQBLgpCaByIACACQA4AtA1A5QAzA4AuBFQAdAsAbAxIACADQBvDNgUGDIgBACQgDAOgEAAQgDAAgEgOg");
	this.shape_12.setTransform(-28.2,-47.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EB5023").s().p("AEiHvQgLhihEjIQhFjGhvhjQhuhkgsghQj8i+BehKQBLgpCaByQBzBZBeCNQAcAsAbAwQBxDOgUGFQgEAQgEAAQgDAAgEgOg");
	this.shape_13.setTransform(-28.2,-47.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EB5023").s().p("AESH3QgEg1gUhRQgShIgdhfQg+jJhthlQhrhngrgiQj2jGBhhHQBLgnCXB3QBwBbBZCQQAcAtAZAxQBbCxgJEzQgCA3gFA7QgEAQgDAAQgEAAgDgOg");
	this.shape_14.setTransform(-26.4,-48.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EB5023").s().p("ADKIfQgGhLgOg7QABgBgJg0QgKg4gIglQgah0gihbQgahDgYgrQguhOhGhbQgngyhFhUQgzhBgNglQgPguAfgdQA6g2CABTQApAbBaCQQBKB1AWA0QBVCsgiGFIgEAdIgBAAQgCATgGAiQgHAugCARQgEAQgDAAQgEAAgDgOg");
	this.shape_15.setTransform(-19.2,-52.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EB5023").s().p("AgQIzQACgpgolLIgsllQgUi0ANhbQANhfA0gcQA5gVARAFQApALAeBfQAUBCgrGHQgpF0gqDMQgGAPgEAAQgDAAgCgPg");
	this.shape_16.setTransform(2.6,-54.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EB5023").s().p("AjVIUQgEAAAAgpQABgFgCgPIgEggQgvmhC2k4QA/htBNhLQBBg9AegEQAdgDAXAOQAgATABApQACBFhxCyIiGDIQgoA5gjBbQgyCFg0DiQgCALgHASIgJAYIgBABQgCAAgDgIg");
	this.shape_17.setTransform(22.6,-51.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EB5023").s().p("AlKHLQgGAAgEgSQgCgLAAgLIAGhLQAIhcARhOQAPhIAUg9QAlhrA3hJIADgEQAdgoAfgkQBnh6B1hDQCehaBCAyQAiAhgXAuQghBGibBfQguAehyBWQh1BYhVC4QgqBagaBGQgPAmgKAgQgKAegFAWIgBABQgDAAgCgIg");
	this.shape_18.setTransform(34.6,-45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EB5023").s().p("AlsGrQASjIAoiNQApiSBEhcQBDhcBahPQBehWBDgUQCIgpBhBKQAbA4goAjQgnAiiLAtQhTAahYBQQhGA+gsAzQg/BGgrBUQhiC8gYBhQgFAMgEAAQgEAAgBgRg");
	this.shape_19.setTransform(37.1,-41.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EB5023").s().p("AlmGvQAQjHAmiNIAAgBQAliMA/hcIAGgIQAcgnAgglQArgyAxgtIADgDQBLhGA8gcQAMgGAMgDQB0goBlBBIAPALQAbA2gnAlQgRAQgtASIhtAnIgEABIgUAIQhHAdhOBHIgBABIgLAKQg9A3gpAxQg9BHgrBVIAAABIgEAIQhbC3gXBfIgBACQgEAKgDAAQgFAAgBgRg");
	this.shape_20.setTransform(36.5,-41.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EB5023").s().p("AlVG7QAIjHAhiQIAAgBQAhiOA9hfIAEgHIABgBQAbgoAegmQApg0AwgvIADgDQBGhGA9giIAWgLIABAAQA5gaA8ANQArAJA1AiIAPALQAcAxgmArIgBABQgOAOguAOQhBASgmASIgDABIgTAJQg/AfhTBMIgBACIgLAKQg7A1goA1Qg5BIgoBaIAAAAIgEAJQhTC7gTBgIgBACQgEALgEAAQgEAAgCgQg");
	this.shape_21.setTransform(34.8,-43);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EB5023").s().p("Ak8HWIAAgBQgFjGAaiUQAaiPA4hkIABgCIADgEQAagsAcgoIABgCQAmg3ArgwQBChIA/gtIACgBIASgMQA+glA7gCQAxgCAsAYIACACIAMAKQAfAqgmA1QgPAVgqAZQg6AgglAXIgUANIgEADQgzAghXBTIgNALIgDADQg1AxgnA8QgzBKgkBhIgDAIIAAABQhJDBgNBhIAAACIAAABQgEAMgEAAQgEAAgDgPg");
	this.shape_22.setTransform(32.4,-45.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EB5023").s().p("AkoHvIAAgCQgNjFAViWQAUiSA1hlIABgCIADgFQAYgsAagqIABgCQAlg5ApgxQA8hIBBg0IACgCIASgNQBBgvA3gOQA0gOAlASIADACIAMAKQAhAmgmA8QgQAaglAjQgeAbg5AsIgTAPIgFAEQgrAghcBZIgNALIgDADQgyAwgoA/QgvBNgiBmIgDAJQhADEgKBjIAAADIAAABQgEANgEAAQgDAAgEgOg");
	this.shape_23.setTransform(30.4,-47.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EB5023").s().p("AkfH1QggmFBrjRQAZgxAcgtQBZiQBwhbQCXh3BLAnQBhBHj2DGQgrAihrBnQhtBlg+DJQg/DKgIBjQgDAOgEAAQgDAAgEgQg");
	this.shape_24.setTransform(29.6,-48.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EB5023").s().p("AkMG9QgDAAgEgQQgIhgAIh3QAKiIAeiIQBQltDMgSQBFgGAkAIQBAAOAkA5QArBEgdApQgpA6ixgpQhZgUhGC3QgnBhgYBNQguCSgrC+QgCAOgEAAIgBAAg");
	this.shape_25.setTransform(28.4,-41.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EB5023").s().p("AkLGzQgDAAgDgQQgEhhAOh2QAPiIAkiGQAyi6BGhgQBShvBiAgQBRAZA1BFQAoA1ALA3QAIAngQAmQgQAngeAMQhPAfhSikQgUgogpAwQgpAsgpBgQgrBggbBMQg1CPgzC9QgEANgDAAIgBAAg");
	this.shape_26.setTransform(28.2,-40.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EB5023").s().p("AkMG3QgEgBgDgPQgFhhAMh3QANiHAiiHQAvi8BFhhQBRhyBiAeQBSAZA6BBQAtAzANA1QALAngMAlQgMAngdANQhLAihsicQgYgkgnAvQgmArgoBhQgpBhgbBMQgzCQgvC9QgEAOgEAAIAAAAg");
	this.shape_27.setTransform(28.4,-40.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EB5023").s().p("AkNG7QgEgBgEgPQgGhhAKh3QALiIAgiHQAti9BDhjQBQh0BiAcQBTAYA+A9QAzAyAQAxQANAngIAlQgIAngbAPQhIAliHiVQgcggglAvQgiAognBkQgoBhgZBMQgxCRgtC+QgDAOgEAAIAAAAg");
	this.shape_28.setTransform(28.5,-41.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EB5023").s().p("AkPG+QgEAAgEgQQgIhgAJh3QAJiIAeiIQAqi+BChlQBOh3BiAbQBVAWBDA6QA4AwASAvQAQAngEAkQgEAngaAQQhEAoihiNQgfgcgkAuQgfAngnBlQgmBhgYBNQgvCSgqC+QgDAOgEAAIAAAAg");
	this.shape_29.setTransform(28.7,-41.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EB5023").s().p("AB9G9QAphHAPhQQALg6gpgjQgYgUhKgeQiMg5hnjPQgihEgZhMQgSg2gDgTQgGgyAfgkQAjgpA7ARQAjAJASAYQAkAvAhCBQAQBOAIAbQAKArAfAkQAPASAeATQAcAQAPADQBGAQAsBGQAnA/gGA4QgQCSiABWg");
	this.shape_30.setTransform(-14.8,-43.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EB5023").s().p("ADOEBQAEgyg9ghQgXgNhighQhEgYgKgXQgYg4AMg3IAahOQAMgkgTgSQgYgXhXgPQhKgNglgpQgggkAIgsQAHgrAngXQArgYA8AQQCRAnAmAXQBDAoATBhQAQBRgKA7QgDAOgXBHQCsA4AKB3QADAogPAuIgWA1QgMAfg5AbQgxAXgoAEQBnhgAEg+g");
	this.shape_31.setTransform(-14.8,-40.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#EB5023").s().p("ACWDCQAHgnhBgZQgUgIhpgaQhJgSgGgTQgXhKBJhEQAagZAAgFQAAgJguAAQhKgBgrggQgngcgCgpQgCgoAhgbQAlgeA/ACQCAAEBIAtQBLAuACBVQACBAgrAuQgJAJg2AmQCvAhACBbQABAqgvBEQgSAZg+AVQg1ATgoADQB3hNAJgxg");
	this.shape_32.setTransform(-7,-30.6);

	this.instance = new lib.STK_Plum_exp_thqe("synched",0);
	this.instance.setTransform(1,0.6,1,1,14,0,0,19.1,53.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EB5023").s().p("ABbI7QjalDgKjsQgDg1ADg0QAGiqA3iIQBIiyBTgDQB4AOh1EmQgVAzgsCPQgqCNArDOQAsDPAqBZQAEAQgEAAQgEAAgJgKg");
	this.shape_33.setTransform(-10.6,-54.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EB5023").s().p("ABsI3IgDgFQiijgg2izQgXhJgFhDQgEg1ACg0QAEiaAxiBIAJgYQBFilBOgQIALgBQBlAHg7C9QgPAwgYA6QgWA3grCMQgIAYgEAbQgXB/AqCpIAHAaQAwC3ApBSIACAJQACAHgDAAQgEAAgJgJg");
	this.shape_34.setTransform(-12.2,-54.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#EB5023").s().p("ACVIqIgEgEQi+jVhCihQgghFgKhDQgJg1AAg2QAAiXA4iHIAKgYQBHigBRgXIALgBQB2gGhGC7QgSAxgYA5QgdBAgnCEQgFAYgFAaQgYCFA8CiIAKAZQBGCtAvBQIADAJQADAIgDAAQgDAAgJgIg");
	this.shape_35.setTransform(-16.1,-52.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EB5023").s().p("ADKIXIgFgEQjujBhXiEQgug+gUhDQgQg2gDg2QgHiSBDiSIAMgZQBKiYBYghIALgDQCSgbhYC4QgZAygYA2QgmBQgfB2QgHAZgEAbQgaCOBcCWIAPAXQBpCcA7BMIAFAIQAGAKgEAAQgDAAgIgFg");
	this.shape_36.setTransform(-21,-50.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EB5023").s().p("AEOH8Qkwimh1hdQh0hdgQiKQgRiJBUiiQBTiiBrgzQDGhDh1C5QhzC5gbCqQgcCoCgCNQCiCMBJBGQALAPgGAAQgEAAgLgFg");
	this.shape_37.setTransform(-28,-48.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EB5023").s().p("AiAE1QiFgZgQgGQhogXAMhHQAHgkAJghQApijBSh5QBsifBUAOQBwAniuEHQgeArhHB/QBnA1CSAVQDRAeBigHQAfADgeALQj/AviKAAQg2AAglgHg");
	this.shape_38.setTransform(-37.4,-23.5);

	this.instance_1 = new lib.STK_Plum_exp_vs("synched",0);
	this.instance_1.setTransform(-52.3,20.7,1,0.878,0,11.6,1.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EB5023").s().p("ADJIRQADhjgmjQQgnjPhghxQhehzgngnQjdjiBpg7QBPgeCICIQBlBoBICaQAWAwATA0QBSDbhOF/QgFAOgEAAQgEAAgBgOg");
	this.shape_39.setTransform(-19.1,-51.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EB5023").s().p("ADbIDQAEhjgXjOQgXjOg0iYQg0iajQg2QjSg2BvhNQBvhNCXBCQCaBBAsCGQAtCGACCiQACCggpFmQgGAPgDAAQgEAAgCgPg");
	this.shape_40.setTransform(-21,-49.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EB5023").s().p("AB8InQgChDgBjCQgCjCgrjjQgrjliohHQirhHCxgvQCvgwBABcQBBBcAcCGQAcCGgSDRQgTDTg4EXQgHANgEAAQgEAAABgQg");
	this.shape_41.setTransform(-11.8,-53.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EB5023").s().p("Ag3IyQAEgyAZjPQAajQAgjkQAjjmith4Qiwh5CwAIQCtAHBNCZQBMCYglB6QglB7gwCxQgvCzhbENQgGAIgEAAQgIAAADgig");
	this.shape_42.setTransform(6,-56.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EB5023").s().p("AkBIjQgdjQAki0QAjiyAYhhQAYhhAgg1QAgg1BOhyQBMhyA5gKQA5gLAcABQAbABAqAyQAqAyieCJQidCJg3BvQg4Bsg7DFQg7DEgECBQgCATgEAAQgCgBgFgUg");
	this.shape_43.setTransform(27.2,-53.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EB5023").s().p("Aj5IOQgdjQARjkQAQjjAYhsQAXhtAjhGQAjhGBdgcQBbgbA7AEQA7AEA0AXQA1AXgNBSQgMBRiYgHQiWgHg3CrQg3CsglDIQgmDKgDCBQgCATgEAAQgDgBgEgUg");
	this.shape_44.setTransform(26.5,-51.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EB5023").s().p("AikI+QgpjHgNi2QgMi2gBhpQAAhqACgoQADgpAthaQAthaBMhHQBLhIBKAOQBLANA2BFQA2BFieBAQibA/goCxQgoCugQDNQgQDMACB9QABATgEABQgCgBgIgSg");
	this.shape_45.setTransform(18.3,-56.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#EB5023").s().p("AAAI7Qghkrg0h+Qg1h9gbhgQgbhhgChAQgDhAANg9QANg9BVhkQBWhkB+AyQCAAxhqBIQhrBIgnBGQglBFAIBsQAHBsAdDLQAfDMgNBnQgOBngEABQgCgBgHgSg");
	this.shape_46.setTransform(1.8,-55.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EB5023").s().p("ABbIXQAZg8APh9QARiWgqgSQgPgHgmgCIhEgEQhZgJgKgtQgKgtA8hpIAnhGQARgfgGgIQgHgKhGAEQhJAEgTgQQgtglgFhMQgFhGAdhHQAehJAwgeQA2giA5AkQAyAggoBVIgjBAQgRAjAEARQASAJAvgCQBHgCALABQBdAGgqBiQghA5gaA0Qg1BmAOAQQAMANAiACQATABAlgCQA4gBAVAaQAUAYgJA1QgOBZgjBoQgqB8gsAzg");
	this.shape_47.setTransform(-9.1,-53.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EB5023").s().p("AiQFFQhogMBwj1QBwjzBAhFQBDhFAlgLQAlgKAMAgQANAUhQBPQhRBQgrDpQgmDZhcAAQgIAAgIgCg");
	this.shape_48.setTransform(-7.8,-1.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#EB5023").s().p("AgnB2QAThCgDhxQgCg0gDgKIAAgQIgBgJQAAgRAFgHQALgQAiADQAJAEAFAGIACAAIAAABIAEAEQAKAPAGAWQALAkAAAzQAAB5hdBuIgqACQAIgEAUhBg");
	this.shape_49.setTransform(7.2,-15.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EB5023").s().p("ACDJHQgEAAAAgPQAQhjgdjFQgejGhCiPQhBiRhShwQhShwADhTQACgrAngQQAMgEATADQBIACBpCGQBTCGAhB1QAgB1ANBdQAMBegJCCQgJCAg2DKQgHANgEAAIAAAAg");
	this.shape_50.setTransform(-11.9,-55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EB5023").s().p("ABxI5QAPhsggjPQggjOg7iNQg4iOhLhvQhKhvAGhMQACgnAkgMQAMgCAXAFQA8AFBcB0QBOB0AfB2QAgB1APBiQAPBggLCMQgKCLg2DOQgHAQgDAAQgEgBAAgQg");
	this.shape_51.setTransform(-10.2,-55.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EB5023").s().p("ABjI7QANh3gijXQgijXgxiKQgziMhDhuQhDhvAJhFQAEgiAggHQAMgCAcAIQAuAIBPBjQBJBiAfB2QAfB1ASBlQARBkgMCXQgMCWg1DSQgHARgDAAQgEAAAAgRg");
	this.shape_52.setTransform(-8.4,-55.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EB5023").s().p("ABsI1QAFh1gwjYQgwjYgpiPQgsiRg1huQg0huAKg7QAFghAdgDQAMgBAgAKQAhAKA7BOQA+BOAcB2QAcB1AXBvQAWBugGCeQgGCeggDRQgGATgCAAQgEAAgGgXg");
	this.shape_53.setTransform(-9.5,-55.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EB5023").s().p("ACCIuQgChpg7jRIhmloQgtiYgthuQguhuAKg5QAFgjAcgEQAMgBAgAKQAgAJA1BLQA4BLAaB1QAbB2AYB2QAZB0ABCaQABCagKDMQgFAUgDAAQgEAAgLgbg");
	this.shape_54.setTransform(-12.1,-55.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#EB5023").s().p("ACOInQgKhehGjJQhEjJguifQguihgnhtQgmhuAIg3QAFglAdgFQALgBAgAJQAfAKAyBHQAvBHAYB2IA0DyQAbB7AICXIAUFdQgFATgDABQgDAAgQgfg");
	this.shape_55.setTransform(-13.7,-54.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EB5023").s().p("ACUIfQgQhRhRjCQhQjBgvinQguipghhtQgfhuAIg1QAFgnAcgGQALgCAfAKQAfAJArBEQApBEAXB2QAYB1AcCEQAdCCAQCSQAQCTAhDCQgFATgDABQgDgBgWgjg");
	this.shape_56.setTransform(-14.8,-54.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EB5023").s().p("ACbIYQgXhGhdi6Qhbi5gwivQgvixgahuQgYhtAHgzQAFgqAcgGQALgCAfAKQAeAIAlBBQAlBBATB1QAWB1AeCLQAgCJAXCPQAXCPA3C8QgFAUgCABQgEgBgbgng");
	this.shape_57.setTransform(-16,-54.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EB5023").s().p("ACiIRQgeg6hoizQhnixgwi4Qgxi4gShuQgShtAGgxQAFgsAcgHQALgCAeAJQAeAIAfA+QAfA9ATB2QASB1AhCSQAhCPAfCMQAeCKBNC4QgEAUgDABQgEgBgggrg");
	this.shape_58.setTransform(-17.1,-53.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EB5023").s().p("ACpIKQglgvhziqQhyiqgyjAQgxjAgMhuQgLhtAFgvQAFguAcgHQALgDAeAJQAdAIAZA6QAYA6ASB2QASB1AhCZQAkCWAmCHQAlCHBiCzQgDAUgDABQgEgBglgvg");
	this.shape_59.setTransform(-18.2,-53.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EB5023").s().p("AESH+IAAgBIgCgRQgDgXgLgiQgThTgwiEIgMghQg/irhghiIg4g9IhUhVQhVhOgpg6QhEhhA3gsQAZgSAmAGQASADAWAJQAjAOApAhQASAOATASQAtApAqA2QA2BCAvBUQAXAnAVAsIAGAMQA5B1ATCkQAQCJgDCsQgDAPgDAAQgCAAgCgJg");
	this.shape_60.setTransform(-26.2,-49.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[{t:this.shape_3}]},2).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},2).to({state:[{t:this.shape_6}]},2).to({state:[{t:this.shape_7}]},2).to({state:[{t:this.shape_8}]},2).to({state:[{t:this.shape_9}]},2).to({state:[{t:this.shape_10}]},2).to({state:[{t:this.shape_11}]},2).to({state:[{t:this.shape_12}]},2).to({state:[{t:this.shape_13}]},2).to({state:[{t:this.shape_14}]},8).to({state:[{t:this.shape_15}]},2).to({state:[{t:this.shape_16}]},2).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_20}]},2).to({state:[{t:this.shape_21}]},2).to({state:[{t:this.shape_22}]},2).to({state:[{t:this.shape_23}]},2).to({state:[{t:this.shape_24}]},2).to({state:[{t:this.shape_25}]},4).to({state:[{t:this.shape_26}]},2).to({state:[{t:this.shape_27}]},2).to({state:[{t:this.shape_28}]},2).to({state:[{t:this.shape_29}]},2).to({state:[{t:this.shape_30}]},4).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.instance,p:{regX:19.1,scaleX:1,scaleY:1,rotation:14,x:1,y:0.6,regY:53.9}}]},1).to({state:[{t:this.instance,p:{regX:19,scaleX:0.452,scaleY:0.791,rotation:4.5,x:-2.6,y:-45,regY:53.9}}]},1).to({state:[{t:this.instance,p:{regX:19,scaleX:0.452,scaleY:0.473,rotation:10.2,x:-10.1,y:-103,regY:53.6}}]},1).to({state:[]},1).to({state:[{t:this.shape_33}]},3).to({state:[{t:this.shape_34}]},2).to({state:[{t:this.shape_35}]},2).to({state:[{t:this.shape_36}]},2).to({state:[{t:this.shape_37}]},2).to({state:[{t:this.shape_38}]},2).to({state:[{t:this.instance_1,p:{scaleY:0.878,skewX:11.6,skewY:1.5,x:-52.3,y:20.7}}]},2).to({state:[{t:this.instance_1,p:{scaleY:0.946,skewX:5,skewY:0.5,x:-50,y:22.5}}]},2).to({state:[{t:this.instance_1,p:{scaleY:0.986,skewX:1.3,skewY:0,x:-48.6,y:23.6}}]},2).to({state:[{t:this.instance_1,p:{scaleY:1,skewX:0,skewY:0,x:-48.2,y:23.9}}]},2).to({state:[{t:this.shape_39}]},5).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},7).to({state:[{t:this.shape_48}]},8).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape}]},14).to({state:[]},1).to({state:[]},1).to({state:[]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_13}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-56.1,-100.3,59.3,103.5);


(lib.STK_Plumcomp = function() {
	this.initialize();

	// STK_Plum_mouth
	this._mouth = new lib.STK_Plummouthsync('single');
	this._mouth.setTransform(4.8,-13.5,0.84,0.84);

	// STK_Plum_eye 34back
	this._lidright = new lib.STK_Plum_eyelid();
	this._lidright.setTransform(71.6,-57.1,0.84,0.994,0,-5.2,180);
	this._lidright.gotoAndStop(0);

	// STK_Plum_eyemask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag5BcQgHgdgEhTQgChWArhlQAphmBcg1QBfg3BTAdQBTAcAqAtQAqAtA3BmQh2EJlgAAQgrAAgygFg");
	mask.setTransform(50.7,-39.8);

	// STK_Plum_highlight
	this.instance = new lib.STK_Plum_highlight("single",0);
	this.instance.setTransform(61.1,-49.6,1.173,1.032,-13.1);

	this.instance.mask = mask;

	// STK_Plum_pupil
	this.instance_1 = new lib.STK_Plum_pupil("single",0);
	this.instance_1.setTransform(54.4,-41,1.132,1.132,-13.1);

	this.instance_1.mask = mask;

	// STK_Plum_eye
	this.instance_2 = new lib.STK_Plum_eyewhite("single",1);
	this.instance_2.setTransform(79.8,-63,0.84,0.994,0,-5.2,180);

	this.instance_2.mask = mask;


	this._righteye=new cjs.Container();
	this._righteye.addChild(this.instance_2,this.instance_1,this.instance,this._lidright);

	// STK_Plum_eye lid
	this._lidleft = new lib.STK_Plum_eyelid();
	this._lidleft.setTransform(-56.2,-57.3,0.84,1.087,0,2.2,-1.3);
	this._lidleft.gotoAndStop(0);

	// STK_Plum_eyemask (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AmpicQAxhxApgyQAngzBSghQBRghBiA5QBcA5AxBuQAwBuACBeQABBbgGAhQg8AHg3AAQlNAAiAkXg");
	mask_1.setTransform(-42.6,-41.6);

	// STK_Plum_highlight
	this.instance_3 = new lib.STK_Plum_highlight("single",0);
	this.instance_3.setTransform(-47.1,-49.3,1.002,0.881);

	this.instance_3.mask = mask_1;

	// STK_Plum_pupil
	this.instance_4 = new lib.STK_Plum_pupil("single",0);
	this.instance_4.setTransform(-36.1,-39.7,1.153,1.153,-7.4);

	this.instance_4.mask = mask_1;

	// STK_Plum_eye
	this.instance_5 = new lib.STK_Plum_eyewhite("single",1);
	this.instance_5.setTransform(-25.3,-28.4,0.84,1.087,0,2.2,-1.3,47.8,34.2);

	this.instance_5.mask = mask_1;



	this._lefteye=new cjs.Container();
	this._lefteye.addChild(this.instance_5,this.instance_4,this.instance_3,this._lidleft);



	// fin
	this._leftfin = new lib.STK_Plum_Appendage();
	this._leftfin.setTransform(-110.1,-20.1,0.84,0.84,0,0,180);
	this._leftfin.gotoAndStop(0);

	// fin
	this._rightfin = new lib.STK_Plum_Appendage();
	this._rightfin.setTransform(124.4,-20.1,0.84,0.84);
	this._rightfin.gotoAndStop(0);

	// patch
	this.instance_8 = new lib.STK_Plum_bodypatch("synched",68);
	this.instance_8.setTransform(36.8,14.2,1.296,1.296);

	// bodyfront
	this._bodyleft = new lib.STK_Plum_body_front();
	this._bodyleft.setTransform(3.5,-45.4,0.84,0.953,0,0,180);
	this._bodyleft.gotoAndStop(0);

	// bodyback
	this._bodyright = new lib.STK_Plum_body_front();
	this._bodyright.setTransform(5.9,-44.6,0.84,0.945,0,-4,0);
	this._bodyright.gotoAndStop(0);

	// Layer 26
	this._antenna = new lib.STK_Plum_Antenna();
	this._antenna.setTransform(8.1,-70.9,0.84,0.84);
	this._antenna.gotoAndStop(25);
	//this.addChild(this._bodyright,this._bodyleft,this.instance_8,this._rightfin,this._leftfin,this.instance_5,this.instance_4,this.instance_3,this._lidleft,this.instance_2,this.instance_1,this.instance,this._lidright,this._mouth,this._antenna);
	
	this.addChild(this._bodyright,this._bodyleft,this.instance_8,this._rightfin,this._leftfin,this._lefteye,this._righteye,this._mouth,this._antenna);
	
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-147.9,-138.7,310.1,199);



/* SPARKLE FOR TENTACLE....  */
// stage content:
(lib.tentacle_effect2 = function(mode,startPosition,loop) {


	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.STK_Plum_exp_circleecopy("synched",0);
	this.instance.setTransform(289.1,223.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:23.17,scaleY:23.17},6).to({scaleX:16.9,scaleY:16.9,alpha:0},8).wait(6));

	// Layer 2
	this.instance_1 = new lib.STK_Plum_exp_Plum_tentacle_movinfcircle("synched",0,false);
	this.instance_1.setTransform(283.7,221.9,1.411,1.411,93.7);

	this.instance_2 = new lib.STK_Plum_exp_Plum_tentacle_movinfcircle("synched",0,false);
	this.instance_2.setTransform(279.1,218.6,0.633,0.633,0,-16.4,163.5);

	this.instance_3 = new lib.STK_Plum_exp_Plum_tentacle_movinfcircle("synched",0,false);
	this.instance_3.setTransform(274.1,224.1,1,1,172.5);

	this.instance_4 = new lib.STK_Plum_exp_Plum_tentacle_movinfcircle("synched",0,false);
	this.instance_4.setTransform(279.1,226.6,1,1,25.5);

	this.instance_5 = new lib.STK_Plum_exp_Plum_tentacle_movinfcircle("synched",0,false);
	this.instance_5.setTransform(288.6,225.6,1.426,1.426,-45);

	this.instance_6 = new lib.STK_Plum_exp_Plum_tentacle_movinfcircle("synched",0,false);
	this.instance_6.setTransform(287.1,216.6,0.591,0.591,0,86.6,-93.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(20));

	// Layer 3
	this.instance_7 = new lib.STK_Plum_exp_Plum_transform_ring("synched",0);
	this.instance_7.setTransform(283.3,222.2,0.627,0.627);
	this.instance_7.alpha = 0.609;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:3.85,scaleY:3.85,alpha:1},9,cjs.Ease.get(-0.99)).to({scaleX:5.89,scaleY:5.89,alpha:0},9,cjs.Ease.get(1)).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-533.9,-1111.6,1789.1,2499.2);


// symbols:
(lib.STK_Plum_exp_Plum_transform_ring = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","rgba(255,255,255,0.961)","rgba(255,255,255,0)"],[0,0.49,0.839],0,0,0,0,0,162).s().p("AxrRrQnUnUAAqXQAAqVHUnWQHWnUKVAAQKXAAHUHUQHVHWAAKVQAAKXnVHUQnUHVqXAAQqVAAnWnVg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-160,-160,320.1,320.1);


(lib.STK_Plum_exp_circleecopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,0.827],0,0,0,0,0,54.5).s().p("Al8F9QifieAAjfQAAjeCfieQCeifDeAAQDfAACeCfQCfCeAADeQAADfifCeQieCfjfAAQjeAAieifg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.9,-53.9,108,108);


(lib.STK_Plum_exp_circlee = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#27FFFF","rgba(255,255,255,0)"],[0,0.827],0,0,0,0,0,54.5).s().p("Al8F9QifieAAjfQAAjeCfieQCeifDeAAQDfAACeCfQCfCeAADeQAADfifCeQieCfjfAAQjeAAieifg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-53.9,-53.9,108,108);


(lib.STK_Plum_exp_Plum_Transform_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.STK_Plum_exp_circlee("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({guide:{path:[-0.2,0.2,-2,-1.2,-4.3,-2.1,-10.7,-5,-17.1,-2.6,-19.9,-1.7,-22.1,0]}},3).to({guide:{path:[-22.1,0.1,-25,2.5,-26.7,6.2,-29.6,12.5,-27.1,19,-24.7,25.6,-18.3,28.6,-12.2,31.5,-5.5,29.1,-4.7,28.7,-3.8,28.3]}},3).to({guide:{path:[-3.6,28.4,1.4,25.8,3.9,20.3,6.9,14.1,4.4,7.5,2.9,3.2,0,0.5]}},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-53.9,108,108);


(lib.STK_Plum_exp_Plum_tentacle_movinfcircle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.STK_Plum_exp_Plum_Transform_circle("synched",0);
	this.instance.setTransform(1,-6.5,0.352,0.352);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.41,scaleY:1.41,guide:{path:[1.1,-6.3,4.3,0.2,9.8,5.9,42.5,39.9,180,60.5,260.5,72.5,320.1,51.5]},startPosition:6},6,cjs.Ease.get(-0.99)).to({scaleX:5.03,scaleY:5.03,guide:{path:[320.1,51.5,362.6,36.6,394.6,4.9,471.4,-71.1,495.2,-155,515.1,-225.2,495.5,-260.6]},alpha:0,startPosition:0},12,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28,-26.7,49.9,49.1);

/* END TENTACLE SPARKLE */


})(plumlib = plumlib||{}, images = images||{}, createjs = createjs||{});
var plumlib, images, createjs;