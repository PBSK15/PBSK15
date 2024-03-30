/* global require, ss */
//require.include("weblib/ssnamespace");

/*
* Class AbstractSpawnTimer
*	Base class for those that handle the timing of particle spawning
*/
ss.AbstractSpawnTimer = function(){
	"use strict";

	/*
	* Reset this spawning to its initial conditions
	*/
	this.resetSpawning = function(){
		//OVERRIDE IN SUBCLASS
	};

	/*
	* Get the number of particles that should be spawned due to the elapsed time
	* @param delta:Number - Time elapsed since last update (in seconds)
	* @return:[Number] - The number of new particles to be spawned
	*/
	this.getSpawnNumber = function(delta){ //jshint ignore:line

		//OVERRIDE IN SUBCLASS

		return 0;
	};


	/*
	* Return true if the timer is done emitting particales
	* @return:[Bool] - If timer is not emitting particales, false otherwise.
	*/
	this.isComplete = function () {
		return false;
	};
};