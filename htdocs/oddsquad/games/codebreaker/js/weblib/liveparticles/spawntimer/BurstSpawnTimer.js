//require.include("weblib/core/Util");
//require.include("weblib/liveparticles/spawntimer/AbstractSpawnTimer");


/*
* Class BurstSpawnTimer
*	Spawns particles in a single (or close to single) burst
*/

/*
* Create a new BurstSpawnTimer
* @param numParticles:[Number] - Number of total particles in the burst
* @param maxPerFrame:[Number] (Optional) - Maximum particles to be spawned each frame.  
*		This can be used to prevent slowdown from creating all particles in a single frame
*/
ss.BurstSpawnTimer = function(numParticles, maxPerFrame){
	"use strict";

	//Call base class constructor
	ss.AbstractSpawnTimer.call(this);

	this.name = "BurstSpawnTimer";
	this.exposedVariables = ["totalParticles", "maxPerFrame"];

	//[Number] - Total number of particles to be spawned in this burst
	this.totalParticles = numParticles;

	//[Number] - Number of remaining particles to be spawned
	var _remainingParticles = numParticles;

	//[Number] - Maximum particles to be spawned each frame
	this.maxPerFrame = isUndefined(maxPerFrame) ? Number.MAX_VALUE : maxPerFrame;

	/*
	* Reset this spawning to its initial conditions
	*/
	this.resetSpawning = function(){
		_remainingParticles = this.totalParticles;
	};

	/*
	* Get the number of particles that should be spawned due to the elapsed time
	* @param delta:Number - Time elapsed since last update (in seconds)
	* @return:Number - The number of new particles to be spawned
	*/
	this.getSpawnNumber = function(delta){ //jshint ignore:line

		//If all particles have been spawned already, don't spawn any more
		if(_remainingParticles <= 0){
			return 0;
		}

		var numParticles = Math.min(this.maxPerFrame, _remainingParticles);
		_remainingParticles -= numParticles;

		return numParticles;
	};

	/*
	* Return true if the timer is done emitting particales
	* @return:[Bool] - If timer is not emitting particales, false otherwise.
	*/
	this.isComplete = function () {
		return _remainingParticles <= 0;
	};

};

//Maintain backwards compatibility
var BurstSpawnTimer = ss.BurstSpawnTimer; //jshint ignore:line