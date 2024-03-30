/* global require, createjs, AbstractParticleEmitter */

//require.include("weblib/ssnamespace");
//require.include("weblib/external/createjs.min.js");
//require.include("weblib/liveparticles/AbstractParticleEmitter");

/* 
* Class CreateJSParticleEmitter extends createjs.Container, AbstractParticleEmitter
*	Particle emitter that can be used with the CreateJS display hierarchy
*/

/*
* Create a new CreateJSParticleEmitter
*/
ss.CreateJSParticleEmitter = function(){
	"use strict";

	//Call Container base class constructor
	createjs.Container.call(this);

	//Call AbstractParticleEmitter constructor
	ss.AbstractParticleEmitter.call(this);

	var _this = this;
	var _super = new Object();

	//createjs.Contaner - The container that particles should be drawn to
	var _particleContainer;

	/*
	* Set this particle emitter up with a set of instantiated objects
	* @param maxParticles:Integer - Maximum particles that can exist at once
	* @param minLife:Number - Minimum lifetime of a particle
	* @param maxLife:Number - Maximum lifetime of a particle
	* @param spawnShape:BaseSpawnShape - Determines location and other starting properties of particles
	* @param spawnTimer:BaseSpawnTimer - Handles the timing of when particles are spawned
	* @param updaterList:Array[BaseParticleUpdater] - List of particles updaters defining particle updates to be made
	* @param particleContainer:createjs.Container [Optional] - An optional container to draw the particles to.
	* 		If not provided, particles will be drawn to this emitter object itself.
	*/
	_super.setupFromObjects = _this.setupFromObjects;
	_this.setupFromObjects = function(maxParticles, minLife, maxLife, particleFactory, spawnTimer, spawnShape, updaterList, particleContainer){
		//Set the particle container if one was provided
		_particleContainer = particleContainer ? particleContainer : _this;

		_super.setupFromObjects(maxParticles, minLife, maxLife, particleFactory, spawnTimer, spawnShape, updaterList);
	};

	/*
	* Set up this emitter using a single generic object containing configuration data
	* @param dataObj:Object - Object containing configuration data for the emitter
	* @param particleContainer:createjs.Container [Optional] - An optional container to draw the particles to.
	* 		If not provided, particles will be drawn to this emitter object itself.
	*/
	_super.setupFromJson = _this.setupFromJson;
	_this.setupFromJson = function(dataObj, particleContainer){
		//Set the particle container if one was provided
		_particleContainer = particleContainer ? particleContainer : _particleContainer;

		_super.setupFromJson(dataObj);
	};

	/*
	* Spawn a set of new particles
	* @param numToSpawn:[Number] - The number of new particles to spawn
	*/
	_this._spawnParticles = function(numToSpawn){
		var newParticle;
		var particlePos;

		//Spawn the requested number of particles
		for(var i = 0; i < numToSpawn; i++){

			//TODO: Get the particle from a particle pool

			newParticle = _this._particleFactory.createParticle();
			
			_particleContainer.addChild(newParticle);
			_this._spawnShape.setSpawnPosition(newParticle);

			//If requested, fully transform the particle according to this emitter
			if(_this._inheritTransform){
				particlePos = _this.localToGlobal(newParticle.x, newParticle.y);
				particlePos = _particleContainer.globalToLocal(particlePos.x, particlePos.y);
				newParticle.x = particlePos.x;
				newParticle.y = particlePos.y;
			//Otherwise just offset particle to account for difference between emitter location and origin of particle container
			}else{
				newParticle.x += _this._particleOrigin.x;
				newParticle.y += _this._particleOrigin.y;
			}

			_this._particles.push(newParticle);

			//Set a lifetime for this particle
			newParticle.maxLife = _this._minLifetime + Math.random() * (_this._maxLifetime - _this._minLifetime);
		}
	};

	/*
	* Helper function that enables per-frame updating of this emitter
	*/
	_this._enableUpdates = function(){
		createjs.Ticker.addEventListener("tick", _updateTick);
	};

	/*
	* Helper function that disables per-frame updating of this emitter
	*/
	_this._disableUpdates = function(){
		createjs.Ticker.removeEventListener("tick", _updateTick);
	};

	/*
	* Remove the particle at the provided index
	* @param index:int - The index of the particle to be removed
	*/
	_this._removeParticleAt = function(index){
		var remParticle = _this._particles[index];

		_particleContainer.removeChild(remParticle);
		_this._particles.splice(index, 1);

		//TODO: Return the particle object to the available pool

	};

	/*
	* Helper function that updates the origin point 
	*/
	_this._updateParticleOrigin = function(){

		//Position the spawn shape according to the emitter's position
		_this._particleOrigin = _this.localToGlobal(0, 0);
		_this._particleOrigin = _particleContainer.globalToLocal(_this._particleOrigin.x, _this._particleOrigin.y);
	};

	/*
	* Handle an update tick
	* @tickEvent:[createjs.Event] - Event containing data for the tick
	*/
	function _updateTick(tickEvent){
		_this._handleUpdate(tickEvent.delta / 1000.0);
	}

}

//Inherit from Container
ss.CreateJSParticleEmitter.prototype = new createjs.Container();
ss.CreateJSParticleEmitter.prototype.constructor = ss.CreateJSParticleEmitter;