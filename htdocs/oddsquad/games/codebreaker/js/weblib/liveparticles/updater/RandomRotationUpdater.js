//require.include("weblib/core/Util");

/* 
* Class RandomRotationUpdater extends BaseParticleUpdater
*	Selects a random rate of rotation and updates the particles with that rate of rotation
*/

/*
* Create a new PropertyRateChangeUpdater
* @param minRotRate:[Number] - Minimum rate of rotation (in degress / second)
* @param maxRotRate:[Number] (Optional) - Maximum rate of rotation (in degress / second)
*/
ss.RandomRotationUpdater = function(minRotRate, maxRotRate){	
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;
	this.name = "RandomRotationUpdater";
	this.exposedVariables = ["minRotRate", "maxRotRate"];

	//[Number] - Minimum rate of rotation
	this.minRotRate = minRotRate;
	//[Number] - Maximum rate of rotation
	this.maxRotRate = isDefined(maxRotRate) ? maxRotRate : minRotRate;

	/*
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be updated	
	* @param startIndex:int - The index to start updating at
	* @param endIndex:int - The index to end updating at
	*/
	_this.initParticles = function(particles, startIndex, endIndex){
		var i;
		var _range = this.maxRotRate - this.minRotRate;
		for(i = startIndex; i <= endIndex; i++) {
			particles[i].rotationVel = this.minRotRate + Math.random() * _range;
		}
	};

	/*
	* [PROTECTED OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){
		for(var i = 0; i < particles.length; i++){
			particles[i].rotation += particles[i].rotationVel * delta;
		}
	};
};

ss.RandomRotationUpdater.prototype = new ss.BaseParticleUpdater();
ss.RandomRotationUpdater.prototype.constructor = ss.RandomRotationUpdater;

//Maintain backwards compatibility
var RandomRotationUpdater = ss.RandomRotationUpdater; //jshint ignore:line