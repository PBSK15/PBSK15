/* global require, ss, isEmpty */

//equire.include("weblib/ssnamespace");
//equire.include("weblib/core/Util");

/* 
* Class PropertyRateChangeUpdater extends BaseParticleUpdater
*	Modifies a property on a particle with a constant rate of change
*/

/*
* Create a new PropertyRateChangeUpdater
* @param propertyName:[String] - Name of the property to be updated
* @param changeRate:[Number] - Rate of change for the property (units / second)
* @param subProperty:[String] (Optional) - An optional subproperty name to use in order to access structured properties (vectors, etc.)
*/
ss.PropertyRateChangeUpdater = function(propertyName, changeRate, subProperty){	
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;
	this.name = "PropertyRateChangeUpdater";
	this.exposedVariables = ["propName", "rate"];


	//[String] - Name of the property to modify
	this.propName = propertyName;

	//[String] - An optional sub-property name 
	this.subPropName = isEmpty(subProperty) ? undefined : subProperty;

	//[Number] - Rate of change to apply
	this.rate = changeRate;

	/*
	* [PROTECTED OVERRIDE]
	* Perform updates on all particles in a list
	* @param particles:Array[AbstractParticle] - List of particles to be updated
	* @param delta:Number - Time elapsed since last update (in seconds)
	*/
	_this.updateParticles = function(particles, delta){
		var i;

		if(this.subPropName === undefined){
			for(i = 0; i < particles.length; i++){
				particles[i][this.propName] += this.rate * delta;
			}
		}else{
			for(i = 0; i < particles.length; i++){
				particles[i][this.propName][this.subPropName] += this.rate * delta;
			}
		}
	};
};

ss.PropertyRateChangeUpdater.prototype = new ss.BaseParticleUpdater();
ss.PropertyRateChangeUpdater.prototype.constructor = ss.PropertyRateChangeUpdater;

//Maintain backwards compatibility
PropertyRateChangeUpdater = ss.PropertyRateChangeUpdater; //jshint ignore:line