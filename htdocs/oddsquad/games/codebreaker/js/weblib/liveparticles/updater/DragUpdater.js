//require.include("weblib/liveparticles/updater/BaseParticleUpdater")

//require.include("weblib/ssnamespace");
//require.include("weblib/liveparticles/updater/BaseParticleUpdater");

/*
* Class DragUpdater extends BaseParticleUpdater
*	Applies drag to slow down a particle while preserving its direction
*	The drag is dependent on the current
*/

/*
* Create a new DragUpdater
* @param drag [Number] - The magnitude of the drag coefficient to apply.  Higher number results in more drag.
*/
ss.DragUpdater = function(drag){
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;
	this.name = "DragUpdater";
	this.exposedVariables = ["dragCoeficcient"];

	//[Number] - The drag coefficient to apply.  This number should always be negative so that it works 
	//				in the opposite direction of the particle's movement.
	this.dragCoeficcient = -drag;

	/*
	* [PROTECTED OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	* @param startIndex:int - The index to start updating at 
	* @param endIndex:int - The index to end updating at
	*/
	_this.updateParticles = function(particles, delta){
		var curParticle;
		var startSpeed;
		var endSpeed;

		var velX;

		for(var i = 0; i < particles.length; i++){
			curParticle = particles[i];
			velX = curParticle.velX;

			startSpeed = Math.sqrt(curParticle.velX * curParticle.velX + curParticle.velY * curParticle.velY);
			endSpeed = startSpeed / (1 - this.dragCoeficcient * delta * startSpeed);
			curParticle.velX = curParticle.velX * (endSpeed / startSpeed);
			curParticle.velY = curParticle.velY * (endSpeed / startSpeed);
		}
	};
};

ss.DragUpdater.prototype = new ss.BaseParticleUpdater();
ss.DragUpdater.prototype.constructor = ss.DragUpdater;

//Maintain backwards compatibility
var DragUpdater = ss.DragUpdater; //jshint ignore:line