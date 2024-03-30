//require.include("weblib/core/Util");

/*
* class BaseParticleUpdater
*	Base class for classes that perform updates on a list of particles
*/
ss.BaseParticleUpdater = function(){
	"use strict";

	var _this = this;

	/*
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be updated	
	* @param startIndex:int - The index to start updating at
	* @param endIndex:int - The index to end updating at
	*/
	_this.initParticles = function(particles, startIndex, endIndex){ //jshint ignore:line
		//OVERRIDE IN SUBCLASS to perform initialization
	};

	/*
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){ //jshint ignore:line
		//OVERRIDE IN SUBCLASS to perform updates
	};

	/*
	* Perform updates on all particles in a list
	* NOTE: We sanitize the start and end indices in this function, then call an internal function
	*		To perform the actual updates.  
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	* @param startIndex:int [Optional] - The index to start updating at (will start at 0 by default)
	* @param endIndex:int [Optional] - The index to end updating at (will go to end by default)
	*/
	// _this.updateParticles = function(particles, delta, startIndex, endIndex){
	// 	var start = startIndex !== undefined ? startIndex : 0;
	// 	var end = endIndex !== undefined ? endIndex : particles.length - 1;

	// 	_this._updateParticlesRanged(particles, delta, start, end);
	// }

	/*
	* [PROTECTED]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	* @param startIndex:int - The index to start updating at 
	* @param endIndex:int - The index to end updating at
	*/
	// _this._updateParticlesRanged = function(particles, delta, startIndex, endIndex){
		
	// 	//OVERRIDE IN SUBCLASS to perform updates
		
	// 	//NOTE: The start and end indices are sanitized in 
	// }

};

