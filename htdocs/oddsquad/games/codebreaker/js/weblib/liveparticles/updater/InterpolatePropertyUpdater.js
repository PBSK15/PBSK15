//require.include("weblib/liveparticles/updater/BaseParticleUpdater")

//require.include("weblib/ssnamespace");
//require.include("weblib/liveparticles/updater/BaseParticleUpdater");
//require.include("weblib/core/Util");

/*
* Class InterpolatePropertyUpdater extends BaseParticleUpdater
*	Updates particles by interpolating one property from a fixed start value to a fixed end value
*/

/*
* Create a new InterpolatePropertyUpdater
* @param propertyName:String - Name of the property to update on the particle
* @param start:Number - Starting value
* @param end:Number - Ending value
* @param interpFunc:Function - Function to perform the interpolation
*		This function should take a value between 0 and 1 and return a value between 0 and 1
* @param subProperty:String (Optional) - An optional subproperty name to use in order to access structured properties (vectors, etc.)
*/
ss.InterpolatePropertyUpdater = function(propertyName, start, end, interpFunc, subProperty){
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;
	this.name = "InterpolatePropertyUpdater";
	this.exposedVariables = ["propName", "start", "end", "interpolationFunction"];

	//[String] The name of the property to modify
	this.propName = propertyName;
	this.subPropName = isEmpty(subProperty) ? undefined : subProperty;

	//[Number] - Starting value of the property
	this.start = start;
	//[Number] - Ending  value of the property
	this.end = end;

	//[Function] - The interpolation function to call to update the particle property	
	this.interpolationFunction = interpFunc;

	/*
	* [PUBLIC OVERRIDE]
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be updated	
	* @param startIndex:int - The index to start updating at
	* @param endIndex:int - The index to end updating at
	*/
	_this.initParticles = function(particles, startIndex, endIndex){
		var i;

		//No sub-property defined
		if(this.subPropName === undefined){
			for(i = startIndex; i <= endIndex; i++){
				particles[i][this.propName] = this.start;
			}
		//Have a subproperty, so use it for initialization
		}else{
			for(i = startIndex; i <= endIndex; i++){
				particles[i][this.propName][this.subPropName] = this.start;
			}
		}
	};

	/*
	* [PUBLIC OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){ //jshint ignore:line
		var range = this.end - this.start;
		var i;

		//No sub-property defined
		if(this.subPropName === undefined){
			for(i = 0; i < particles.length; i++){
				//TESTING
				//console.log("Update - Start: " + this.start);
				//console.log("Update - Norm Life: " + particles[i].normalizedLife);
				//console.log("Update - Interpolated: " + this.interpolationFunction(particles[i].normalizedLife));
				//console.log("Update - Range: " + range);

				particles[i][this.propName] = this.start + this.interpolationFunction(particles[i].normalizedLife) * range;
			}
		//Have a subproperty, so use it for updates
		}else{
			for(i = 0; i < particles.length; i++){
				particles[i][this.propName][this.subPropName] = this.start + this.interpolationFunction(particles[i].normalizedLife) * range;
			}
		}
	};

};

ss.InterpolateColourUpdater.prototype = new ss.BaseParticleUpdater();
ss.InterpolateColourUpdater.prototype.constructor = ss.InterpolateColourUpdater;

//Maintain backwards compatibility
var InterpolateColourUpdater = ss.InterpolateColourUpdater; //jshint ignore:line