
(function(lib) {
	var Vect=function(xin,yin) {
		if(typeof(xin)=='undefined' || xin==null) {
			this.setXY(0,0);
		} else {
			this.setXY(xin,yin);
		}
	}

	var v=Vect.prototype;
	
	v.x;
	v.y;
	v.m; // magnitude
	v.a; // angle
	v.mdef; // booleans to determine whether m and a are set
	v.adef;
	
	v.setXY=function(xin,yin) {
		this.x=xin;
		this.y=yin;
		this.mdef=this.adef=false;
	}

	v.setY=function(yin) {
		this.setXY(this.x,yin);
	}
	v.setX=function(xin) {
		this.setXY(xin,this.y);
	}

	v.getMag2=function() {
		var ms=(this.x * this.x) + (this.y * this.y);
		return ms;
	}
	
	v.sum=function(v2) {
		return new Vect(this.x+v2.x,this.y+v2.y);	
	}
	
	v.diff=function(v2) {
		return new Vect(this.x-v2.x,this.y-v2.y);	
	}

	v.mult=function(s) {
		return new Vect(this.x*s,this.y*s);
	}
	
	v.multSelf=function(s) {
		this.x*=s;
		this.y*=s;
	}
	
	v.dot=function(v2) {
		return (this.x * v2.x) + (this.y * v2.y);
	}
	
	
	v.getAngle=function() {
		if(!this.adef) {
			// given deltax and delta y, get the angle (radians)
			// the trouble is what quadrant are we in?
			// avoid dividing by zero - deltax of 0 means 1/2 PI or 1.5 PI.
			if (this.x == 0) {
			//trace("ZERO " + x);
				if (this.y > 0) {
					this.a=.5 * Math.PI;
				} else {
					this.a=1.5 * Math.PI;
				}
			} else if (this.x < 0) {
				this.a = Math.atan(this.y/this.x) + Math.PI;
				//trace("NEG X " + x);
			} else {
			//	trace("POS X " + x);
				this.a = Math.atan(this.y/this.x);
			}
		adef=true;
		}
		//trace("get angle");
		if(this.a < 0) {
			//trace("made it a negative angle??");
			this.a+=2 * Math.PI;
		}
		return this.a;
	}
	

	v.getMag=function() {
		if (!this.mdef) {
			this.m = Math.sqrt(this.getMag2());
			//trace("  ROOT! in vector class using vecmag function ");
			this.mdef=true;
		}
		return this.m;
		//return Math.sqrt(this.getMag2());
	}
	
	
	v.vecAM=function(ain,mag) {
		this.a=ain;
		this.m=mag;
//		trace("doing VectorAM " + this.angle + "," + this.mag);
		this.x=this.m*Math.cos(this.a);
//		trace("this.dx=" + this.dx);
		this.y=this.m*Math.sin(this.a);
		this.mdef=this.adef=true;
	}

	v.norm=function() {
		this.a=this.getAngle();
		return new Vect(Math.cos(this.a),Math.sin(this.a));
	}
	
	v.project=function(v2) {
	// shortcut to the normalize/dot product often done - projects this vector along the input vector
		var nv=v2.norm();
		return this.dot(nv);
	}
	
	v.getRot=function(v2) {
		// get the rotation...
		// special case of the diffAngle() angle difference so that I get the +/- for clockwise/counterclockwise rotation
		var v3=this.norm();
		var v4=v2.norm();
		var an=Math.acos(v3.dot(v4));
		var perp=new Vect();
		perp.vecAM(this.getAngle() + Math.PI * .5,1);
		var v5=this.diff(v2);		
		var rev=v5.project(perp) < 0 ? -1:1;
		return an * rev;
	}

	lib.Vect=Vect;
})(plumlib = plumlib || {});
var plumlib;