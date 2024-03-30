//require.include("weblib/liveparticles/updater/BaseParticleUpdater");
//require.include("weblib/math/geom/Vector2");

/*
* Class ObjectSeekUpdater extends BaseParticleUpdater
*	Accelerates particles towards a particular object
*/

/*
* Create a new ObjectSeekUpdater
* @param obj [DisplayObject] - Display object to move towards
* @param accel [Number] - The magnitude of the acceleration in the direction of the object
*/
ss.ObjectSeekUpdater = function(target, accel){	
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;
	this.name = "ObjectSeekUpdater";
	this.exposedVariables = ["accel"];

	//[DisplayObject] - Display object to move towards
	var _target = target;

	//[Number] - The magnitude of the acceleration in the direction of the object
	this.accel = accel;

	/*
	* [PROTECTED OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){
		
		var dirVector = new Vector2();
		var mag;
		var curParticle;		

		for(var i = 0; i < particles.length; i++){
			curParticle = particles[i];

			dirVector.x = _target.x - curParticle.x;
			dirVector.y = _target.y - curParticle.y;

			mag = dirVector.magnitude();

			dirVector.x *= this.accel / mag;
			dirVector.y *= this.accel / mag;

			curParticle.velX += dirVector.x * delta;
			curParticle.velY += dirVector.y * delta;
		}
	};
};

ss.ObjectSeekUpdater.prototype = new ss.BaseParticleUpdater();
ss.ObjectSeekUpdater.prototype.constructor = ss.ObjectSeekUpdater;

//Maintain backwards compatibility
var ObjectSeekUpdater = ss.ObjectSeekUpdater; //jshint ignore:line