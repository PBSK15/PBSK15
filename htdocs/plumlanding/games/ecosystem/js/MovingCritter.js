

(function(xlib,plumlib) {

	var MovingCritter=function(specie,spritesheet) {
		this.ss=spritesheet;
		this.species=specie;
		this.speed=3;
//		console.log("spritesheet: "+ spritesheet);
		this.initialize();
	}

	var de=MovingCritter.prototype=new createjs.Container();
	
	de.critter;
	de.xloc;
	de.yloc;
	de.speed;
	de.alongpath;
	de.steps;
	de.movestyle;
	de.inplace;
	de.Parent_initialize=de.initialize;
	
	de.initialize=function() {
		this.Parent_initialize();
		//fpc.makeBasic(this);
		this.critter=new plumlib.Critter(this.species,this.ss);
		this.addChild(this.critter);
		this.sourceRect=this.critter.sourceRect;
		this.inplace=false;

		//console.log("children " + this.getNumChildren() + " " + this.critter.x);
	}
	
	de.setpos=function(xin,yin) {
		this.x=this.xloc=xin;
		this.y=this.yloc=yin;
	}
	
	de.update=function() {

		
		if(this.critter.animstate==0) {
			return;
		}		
// after a while, move somewhere.

// by default, critter faces LEFT
			if(this.path.x > 0) {
					this.critter.face(1);
				} else {
					this.critter.face(0);
				}
		if(this.critter.animated) {
			this.critter.nextFrame();
		}


	if(this.critter.moving && !this.inplace) {
			this.alongpath--;
			this.xloc+=this.mv.x;
			this.yloc+=this.mv.y;


			if(this.alongpath < 0) {				
				this.critter.moving=false;
				this.settle();
			}
		}

		if(this.visible) {		
			this.x=this.xloc;
			this.y=this.yloc;
			this.critter.updateFrame();
			this.sourceRect=this.critter.sourceRect;
		}
	}

	de.settle=function() {
		this.rest=10+90*Math.random();
		if(this.movestyle!="swim") {
			this.critter.moving=false;
		}
		this.critter.settle();
		}


	de.runInPlace=function(start,faceleft) {
		if(start===false) { // stop running in place
			this.inplace=false;
		} else {
			this.inplace=true;
			if(faceleft) {			
				this.path=new plumlib.Vect(-1,0); // face left
			} else {
				this.path=new plumlib.Vect(1,0);
			}
			this.critter.loop();
		}
	}

	de.headToDestination=function(dest) { // dest is a movingdisplayelement itself
		this.destination=dest;
		this.headToPoint(dest.xloc,dest.yloc);
	}


de.atdestination=function() {
		if(this.critter.animstate==0) {
			return true;
		}
		if(this.destination) {
			if(this.alongpath<0) {
				return true;
			}
			return false;
		}
		return false;
	}
	
	de.facePoint=function(xin,yin) {
		var face=new plumlib.Vect(xin-this.xloc,yin-this.yloc);
		var xaxis=(face.x>0)?1:-1; // set the x axis +/- 0 based on the direction the player is moving, because it'll get flipped
		var rc=face.getRot(new plumlib.Vect(xaxis,0)); // returns a rotation in radians
		rotationChange=rc/(2*Math.PI)*360; // convert radians to degrees
		this.rotation=rotationChange;
	}

de.headToPoint=function(xin,yin) {
			this.currentspeed=this.speed * (.95 + Math.random() * .1);
			this.dpoint=[xin,yin];
				var odv=new plumlib.Vect(xin-this.xloc,yin-this.yloc);
				this.visible=true;
				this.steps=parseInt(odv.getMag()/this.currentspeed);
				this.path=odv.norm();
				this.alongpath=this.steps;
				this.critter.takeoff();
				this.mv=new plumlib.Vect(this.path.x*this.currentspeed,this.path.y*this.currentspeed);
		}
	
	xlib.MovingCritter=MovingCritter;
})(xlib=xlib || {},plumlib=plumlib || {});

var xlib,plumlib;

