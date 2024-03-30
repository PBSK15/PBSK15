// Critter
/*
The basic animal or plant, extended from createjs.Bitmap. 

Needs to have a spritesheet. 
If it's animated, uses various frames of a spritesheet.
otherwise can be a single frame from a sheet of multiple different items
*/

// namespace?



(function(plumlib) {
	var Critter=function(species,spritesheet) {
		this.ss=spritesheet;
		this.species=species;
		this.setSpriteImage(this.ss._images[0]);
		this.animated=false;
		this.animstate=0;
		this.animset=new Array;
		this.moving=false;
		this.height=300;
		this.flipped = false;
		this.initialize();
	}

	var cr=Critter.prototype=new createjs.Bitmap();
	cr.Parent_initialize=cr.initialize;
	cr.animset;
	cr.animated;
	cr.moving;
	cr.height;
	cr.width;
	cr.useframe;
	
	cr.initialize=function() {
		this.Parent_initialize(this.imageOrUri);
		plumlib.makeBasic(this);
	}


	cr.setSpriteImage=function(im) {
		if(this.image==im) {return;}
			this.imageOrUri=im;
			this.image=this.imageOrUri;
	}

	cr.setFrameset=function(whichset) {
		if(!this.ss.getAnimation(whichset)) {
//			console.log("couldn't find animation for " + whichset);
//			this.animset=this.ss.getAnimation(whichset).frames;
			return false;
		}
		this.currentframeset=whichset;
		this.animset=this.ss.getAnimation(this.currentframeset).frames;
		this.currentframe=0;	
/*		var useframe=this.ss.getFrame(this.animset[this.currentframe]);
		this.sourceRect=useframe.rect;
		this.x=this.halfwidth - useframe.regX;
		this.y=this.sourceRect.height*-1 - useframe.regY;
*/
		return true;
	}

	cr.updateFrame=function() {
		this.useframe=this.ss.getFrame(this.animset[this.currentframe]);
		if(!this.useframe) {
			this.useframe=this.ss.getFrame(0);
		}
		this.setSpriteImage(this.useframe['image']);
		
		this.sourceRect=this.useframe.rect;
		//this.halfwidth=this.sourceRect.width/2;
		this.x=this.scaleX*(this.halfwidth - this.useframe.regX);
		this.y=this.height*-1 - this.useframe.regY;
	}

	cr.face=function(right) {
	// by default, faces left. 'flipped' means face right
		if(right==this.flipped) {
			// already facing the right way
			return false;
		}
		if(right) {
			this.flipped=true;
			this.scaleX=-1;
			this.x=this.negwidth + this.useframe.regX;
		} else {
			this.flipped=false;
			this.scaleX=1;
			this.x=this.halfwidth + this.useframe.regX;
		}
		return true;
	}

	plumlib.Critter=Critter;
})(plumlib=plumlib || {});
var plumlib;


plumlib.makeBasic=function(obj) {
	obj.currentframe=0;
	obj.currentframeset;

	
	obj.setFramePoints=function() {
	
	}
	
	var fr;
	if(obj.setFrameset(obj.species)) {
	 // SINGLE FRAME!
			fr=obj.ss.getFrame(obj.animset[obj.currentframe]);
			obj.setSpriteImage(fr['image']);
			
			//console.log("SINGLE FRAME: " + fr + " " + fr.rect);
			//var useframe=this.ss.getFrame(this.animset[this.currentframe]);
		//	obj.sourceRect=fr.rect;
		//	obj.x=obj.halfwidth - fr.regX;
		//	obj.y=obj.sourceRect.height*-1 - fr.regY;	
		} else {
			obj.animated=true;
//			obj.setFrameset(0);
			plumlib.makeAnimated(obj);
			fr=obj.ss.getFrame(0);
	}
	
	obj.sourceRect=fr.rect;
	
	obj.height=fr.rect.height;
	obj.width=fr.rect.width;
	obj.sourceRect=fr.rect;
	obj.halfwidth=obj.width/-2;
	obj.negwidth=obj.halfwidth*-1;
	obj.x=obj.halfwidth - fr.regX;
	obj.y=obj.sourceRect.height*-1 - fr.regY;
	obj.useframe=fr;
	
	/*
	if(Math.random()*2 > 1) {
			obj.face(true);
		//	obj.flipped=true;
		//	obj.scaleX=-1;
		//	obj.x=obj.negwidth + fr.regX;
	}
	*/
	
	obj.animstate=0;
}


plumlib.makePlaceable=function(obj) {
	obj.offsety=0;
	obj.offsetx=0;
	obj.xloc=0;
	obj.yloc=0;
	obj.zloc=0;
	obj.species;
	obj.stackdist;
	obj.adist;
	obj.stack;
}


plumlib.makeAnimated=function(obj) {
	
			
			obj.nextFrame=function() {
				if(this.animstate==0) {
					return;
				}

				this.currentframe++;
		if (this.currentframe>=this.animset.length) {
//			this.currentframe=0;
//			console.log("go to zero");
			if(this.animstate==3) {
				this.currentframe=0; // while looping, go back to the initial frame of the set
				return;
			} else {
				// if it's NOT in a loop, need to go to the next frameset in the series.
				// _anticipation=>_loop OR _takeoff
				// _takeOff=>_loop
				// _land=>_stop
				// _stop=>nothing!
				var nextset;
				switch (this.animstate) {
					case 1:
					// move from ANTICIPATION to either TAKEOFF or loop; in either case, start moving
					if(this.ss.getAnimation('_takeOff')) {
						this.animstate=2;					
						nextset='_takeOff';
						} else {
						this.animstate=3;				
						nextset='_loop';
						}
						
					this.moving=true;
					break;

					case 2:
					// move from TAKEOFF to loop
					this.animstate=3;
					nextset='_loop';
					break;
					
					case 4:
					// move from LAND to STOP
					this.animstate=5;
					nextset='_stop';
					this.moving=false;
					break;
					
					case 5: // end of the STOP animation - stop animating.
					this.animstate=0;
					return;
					break;
				
				}
				
				this.setFrameset(nextset);
				return;
			}
		}
			}

	obj.takeoff=function() {
		// begin anticipation
		this.animstate=1;
		this.setFrameset("_anticipation");
	}
	
	obj.loop=function() {
		this.animstate=3;
		this.setFrameset("_loop");
	}
	
	obj.settle=function() {
		this.rest=10+90*Math.random();
		
		this.moving=false;
		if(this.ss.getAnimation('_land')) {
			this.animstate=4;
			this.setFrameset("_land");
		} else {
			this.animstate=5;
			this.setFrameset("_stop");
		}
	}
}
