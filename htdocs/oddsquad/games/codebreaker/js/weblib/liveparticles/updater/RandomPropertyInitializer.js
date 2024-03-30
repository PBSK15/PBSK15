//require.include("weblib/core/Util");

/*
* class RandomPropertyInitializer
*	Initializes a property of the particles to a randomized range of values
* @param property:[String] - Name of the property to be initialized
* @param minValue:[Number] - Minimum value for the property
* @param maxValue:[Number] - Maximum value for the property
* @param subProperty:[String] (Optional) - An optional subproperty name to use in order to access structured properties (vectors, etc.)
*/
ss.RandomPropertyInitializer = function(property, minValue, maxValue, subProperty){
	"use strict";

	ss.BaseParticleUpdater.call(this);
	var _this = this;
	this.name = "RandomPropertyInitializer";
	this.exposedVariables = ["property", "minValue", "maxValue"];

	//[String] - Name of the property to be initialized
	this.property = property;
	//[String] - An optional sub-property name 
	this.subPropName = isEmpty(subProperty) ? undefined : subProperty;

	//[Number] - Minimum value for the property
	this.minValue = minValue;
	//[Number] - Maximum value for the property
	this.maxValue = maxValue;

	/*
	* Initializes a set of particles for use by this updater
	* @param particles:Array[AbstractParticle] - List of particles to be updated	
	* @param startIndex:int - The index to start updating at
	* @param endIndex:int - The index to end updating at
	*/
	_this.initParticles = function(particles, startIndex, endIndex){
		var i;
		var _range = this.maxValue - this.minValue;

		//No sub property, so set the property directly
		if(this.subPropName === undefined){
			for(i = startIndex; i <= endIndex; i++) {
				particles[i][this.property] = this.minValue + Math.random() * _range;
			}
		//Sub property provided, so set the property's sub-property
		}else{
			for(i = startIndex; i <= endIndex; i++) {
				particles[i][this.property][this.subPropName] = this.minValue + Math.random() * _range;
			}
		}
	};
};

ss.RandomPropertyInitializer.prototype = new ss.BaseParticleUpdater();
ss.RandomPropertyInitializer.prototype.constructor = ss.RandomPropertyInitializer;

//Maintain backwards compatibility
var RandomPropertyInitializer = ss.RandomPropertyInitializer; //jshint ignore:line