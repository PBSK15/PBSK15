//require.include("weblib/core/Util");
//require.include("weblib/math/MathUtils");

/*
* class BaseParticleUpdater
*	Base class for classes that perform updates on a list of particles
*/
ss.RandomInitialRotationUpdater = function(minRotation, maxRotation){
	"use strict";

	ss.BaseParticleUpdater.call(this);
	var _this = this;
	this.name = "RandomInitialRotationUpdater";

	/*
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be updated	
	* @param startIndex:int - The index to start updating at
	* @param endIndex:int - The index to end updating at
	*/
	_this.initParticles = function(particles, startIndex, endIndex){
		//OVERRIDE IN SUBCLASS to perform initialization
		var i;
		for(i = startIndex; i <= endIndex; i++) {
			particles[i].rotation = MathUtils.randomRange(minRotation, maxRotation);
		}
	};


};

ss.RandomInitialRotationUpdater.prototype = new ss.BaseParticleUpdater();
ss.RandomInitialRotationUpdater.prototype.constructor = ss.RandomInitialRotationUpdater;

//Maintain backwards compatibility
var RandomInitialRotationUpdater = ss.RandomInitialRotationUpdater; //jshint ignore:line
