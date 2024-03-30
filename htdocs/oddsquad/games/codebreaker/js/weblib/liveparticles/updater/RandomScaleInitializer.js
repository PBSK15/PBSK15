//require.include("weblib/core/Util");

/*
* class RandomScaleInitializer
*	Initializes the x and y scale of a particle to the same randomized value
* @param minScale:[Number] - Minimum scale of the particle
* @param maxScale:[Number] - Maximum scale of the particle
*/
ss.RandomScaleInitializer = function(minScale, maxScale){
	"use strict";

	ss.BaseParticleUpdater.call(this);
	var _this = this;
	this.name = "RandomScaleInitializer";
	this.exposedVariables = ["minScale", "maxScale"];

	//[Number] - Minimum value for the property
	this.minScale = minScale;
	//[Number] - Maximum value for the property
	this.maxScale = maxScale;

	/*
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param startIndex:int - The index to start updating at
	* @param endIndex:int - The index to end updating at
	*/
	_this.initParticles = function(particles, startIndex, endIndex){
		var randScale;
		var _range = this.maxScale - this.minScale;

		for(var i = startIndex; i <= endIndex; i++) {
			randScale = this.minScale + Math.random() * _range;
			particles[i].scaleX = randScale;
			particles[i].scaleY = randScale;
		}
	};
};

ss.RandomScaleInitializer.prototype = new ss.BaseParticleUpdater();
ss.RandomScaleInitializer.prototype.constructor = ss.RandomScaleInitializer;

//Maintain backwards compatibility
var RandomScaleInitializer = ss.RandomScaleInitializer; //jshint ignore:line