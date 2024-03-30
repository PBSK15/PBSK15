/* global require, ss */
//require.include("weblib/ssnamespace");
//require.include("weblib/liveparticles/updater/BaseParticleUpdater");

/*
* Class ForceUpdater extends BaseParticleUpdater
*	Applies a constant force to all particles, modifying their velocity
*/

/*
* Create a new ForceUpdater
* @param accelX:Number - Acceleration in the X axis
* @param accelY:Number - Acceleration in the Y axis
*/
ss.ForceUpdater = function(accelX, accelY){
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;
	this.name = "ForceUpdater";
	this.exposedVariables = ["accelX", "accelY"];

	//[Number] - Acceleration along the X axis (pixels/s/s)
	this.accelX = accelX;
	//[Number] - Acceleration along the Y axis (pixels/s/s)
	this.accelY = accelY;

	/*
	* [PROTECTED OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){

		for(var i = 0; i < particles.length; i++){
			particles[i].velX += this.accelX * delta;
			particles[i].velY += this.accelY * delta;
		}
	};
};

ss.ForceUpdater.prototype = new ss.BaseParticleUpdater();
ss.ForceUpdater.prototype.constructor = ss.ForceUpdater;

//Maintain backwards compatibility
var ForceUpdater = ss.ForceUpdater; //jshint ignore:line