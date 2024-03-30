//require.include("weblib/liveparticles/updater/BaseParticleUpdater")

//require.include("weblib/ssnamespace");
//require.include("weblib/liveparticles/updater/BaseParticleUpdater");

// !! WARNING !!: The performance of this updater is currently terrible!  Please don't actually use this until performance updates have been made!

/*
* Class InterpolateColourUpdater extends BaseParticleUpdater
*	Updates particles by interpolating one property from a fixed start value to a fixed end value
*/

/*
* Create a new InterpolateColourUpdater
* @param redStart:[Number] - Starting red multiplier (between 0 and 1)
* @param greenStart:[Number] - Starting green multiplier (between 0 and 1)
* @param blueStart:[Number] - Starting blue multiplier (between 0 and 1)
* @param alphaStart:[Number] - Starting alpha multiplier (between 0 and 1)
* @param redEnd:[Number] - Ending red multiplier (between 0 and 1)
* @param greenEnd:[Number] - Ending green multiplier (between 0 and 1)
* @param blueEnd:[Number] - Ending blue multiplier (between 0 and 1)
* @param alphaEnd:[Number] - Ending alpha multiplier (between 0 and 1)
* @param interpFunc:Function - Function to perform the interpolation
*		This function should take a value between 0 and 1 and return a value between 0 and 1
*/
ss.InterpolateColourUpdater = function(redStart, greenStart, blueStart, alphaStart, redEnd, greenEnd, blueEnd, alphaEnd, interpFunc){
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;

	this.name = "InterpolateColourUpdater";
	this.exposedVariables = ["r1", "g1", "b1", "a1", "r2", "g2", "b2", "a2", "func"];

	//[Number] - Starting values for each colour component
	this.r1 = redStart;
	this.g1 = greenStart;
	this.b1 = blueStart;
	this.a1 = alphaStart;

	//[Number] - Ending values for each colour component
	this.r2 = redEnd;
	this.g2 = greenEnd;
	this.b2 = blueEnd;
	this.a2 = alphaEnd;

	//[Function] - The interpolation function to call to update the particle property.
	this.func = interpFunc;

	/*
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be initialized.
	* @param startIndex:int - The index to start intializing at (will start at 0 by default)
	* @param endIndex:int - The index to end intializing at (will go to end by default)
	*/
	_this.initParticles = function(particles, startIndex, endIndex){
		for(var i = startIndex; i <= endIndex; i++){
			particles[i].filters = [new createjs.ColorFilter(this.r1, this.g1, this.b1, this.a1, 0, 0, 0, 0)];
			particles[i].cache(0, 0, particles[i].getBounds().width, particles[i].getBounds().height);
		}
	};

	/*
	* [PROTECTED OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){ //jshint ignore:line
		var interpValue;
		var colFilter;
		var rangeR = (this.r2 - this.r1);
		var rangeG = (this.g2 - this.g1);
		var rangeB = (this.b2 - this.b1);
		var rangeA = (this.a2 - this.a1);
		for(var i = 0; i < particles.length; i++){
			interpValue = this.func(particles[i].normalizedLife);
			colFilter = particles[i].filters[0];

			colFilter.redMultiplier = this.r1 + interpValue * rangeR;
			colFilter.greenMultiplier = this.g1 + interpValue * rangeG;
			colFilter.blueMultiplier = this.b1 + interpValue * rangeB;
			colFilter.alphaMultiplier = this.a1 + interpValue * rangeA;

			particles[i].updateCache();
		}
	};

};

ss.InterpolateColourUpdater.prototype = new ss.BaseParticleUpdater();
ss.InterpolateColourUpdater.prototype.constructor = ss.InterpolateColourUpdater;

//Maintain backwards compatibility
var InterpolateColourUpdater = ss.InterpolateColourUpdater; //jshint ignore:line