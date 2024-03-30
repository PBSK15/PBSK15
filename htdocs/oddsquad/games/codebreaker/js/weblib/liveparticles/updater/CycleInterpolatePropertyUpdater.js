/* global require, ss, isDefined */

//require.include("weblib/core/Util");
//require.include("weblib/liveparticles/updater/BaseParticleUpdater");

/*
* Class CycleInterpolatePropertyUpdater extends BaseParticleUpdater
*/

/*
* Create a new CycleInterpolatePropertyUpdater
* @param propertyName:String - Name of the property to update on the particle
* @param start:Number - Starting value
* @param end:Number - Ending value
* @param interpFunc:Function - Function to perform the interpolation
*		This function should take a value between 0 and 1 and return a value between 0 and 1
* @param cycleTime:Number - Time that one full cycle of updating should take (in seconds)
* @param startOffset:Number (Optional) - How far into the cycle the updater should start (in seconds) - Defaults to 0
* @param subProperty:String (Optional) - An optional subproperty name to use in order to access structured properties (vectors, etc.) - Defaults to no sub-property
*/
ss.CycleInterpolatePropertyUpdater = function(propertyName, start, end, interpFunc, cycleTime, startOffset, subProperty){
	"use strict";

	//Call base class constructor
	ss.BaseParticleUpdater.call(this);

	var _this = this;

	//Set this up for use with the visual editor
	_this.name = "CycleInterpolatePropertyUpdater";
	_this.exposedVariables = ["propName", "start", "end", "interpolationFunction", "cycleTime", "startOffset", "subProperty"];

	//[String] The name of the property to modify
	_this.propName = propertyName;

	//A subproperty name to use in order to access structured properties
	_this.subPropName = isDefined(subProperty) ? subProperty : undefined;

	//[Number] - Starting value of the property
	_this.start = start;
	//[Number] - Ending  value of the property
	_this.end = end;

	//[Function] - The interpolation function to call to update the particle property	
	_this.interpolationFunction = interpFunc;

	//[Number] - Time that one full cycle of updating should take (in seconds)
	_this.semiCycle = cycleTime / 2.0;
	//[Number] - How far into the cycle the updater should start (in seconds)
	_this.startOffset = isDefined(startOffset) ? startOffset : 0;
	//[Number] - Normalized start offset between 0 and 1
	_this.normalizedStartOffset = startOffset / _this.semiCycle;

	//[Number] - The full range of values covered 
	_this.range = _this.end - _this.start;

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
		if(_this.subPropName === undefined){
			for(i = startIndex; i <= endIndex; i++){
				particles[i][_this.propName] = _this.start + _this.interpolationFunction(_this.normalizedStartOffset) * _this.range;
			}
		//Have a subproperty, so use it for initialization
		}else{
			for(i = startIndex; i <= endIndex; i++){
				particles[i][_this.propName][_this.subPropName] = _this.start + _this.interpolationFunction(_this.normalizedStartOffset) * _this.range;
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
		var i;
		var curCycleTime;

		//No sub-property defined
		if(this.subPropName === undefined){
			for(i = 0; i < particles.length; i++){
				//Calculate the current time within the cycle 
				curCycleTime = (_this.startOffset + particles[i].curLife) % (_this.semiCycle * 2);
				if(curCycleTime >= _this.semiCycle){
					curCycleTime = _this.semiCycle - (curCycleTime - _this.semiCycle);
				}
				
				//Update property based on current cycle time
				particles[i][_this.propName] = _this.start + _this.interpolationFunction(curCycleTime / _this.semiCycle) * _this.range;
			}
		//Have a subproperty, so use it for updates
		}else{
			for(i = 0; i < particles.length; i++){
				//Calculate the current time within the cycle 
				curCycleTime = (_this.startOffset + particles[i].curLife) % (_this.semiCycle * 2);
				if(curCycleTime >= _this.semiCycle){
					curCycleTime = _this.semiCycle - (curCycleTime - _this.semiCycle);
				}
				
				//Update property based on current cycle time
				particles[i][_this.propName][_this.subPropName] = _this.start + _this.interpolationFunction(curCycleTime / _this.semiCycle) * _this.range;
			}
		}
	};

};

//Extend base classes
ss.CycleInterpolatePropertyUpdater.prototype = new ss.BaseParticleUpdater();
ss.CycleInterpolatePropertyUpdater.prototype.constructor = ss.CycleInterpolatePropertyUpdater;