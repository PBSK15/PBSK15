/* global require, isDefined */

//require.include("weblib/core/Util");

/*
* Class AbstractParticleEmitter
*	Provides a base class for all particle emitters
*/

/*
* Create a new AbstractParticleEmitter
*/
function AbstractParticleEmitter(){ //jshint ignore:line

	"use strict";

	var _this = this;

	//BaseSpawnShape - Object that determines the placement of newly spawned particles
	_this._spawnShape = null;

	//BaseSpawnTimer - Object that handles the timing of particle spawning
	_this._spawnTimer = null;

	//BaseParticleFactory - Object that instantiates new particle instances
	_this._particleFactory = null;

	//Array[BaseParticleUpdater] - List of updates to be performed on particles
	_this._particleUpdaters = new Array();

	//Array[BaseParticle] - List of particles currently in existance
	//NOTE: It would likely be more efficient to use a linked list to prevent frequent array splices on this list
	_this._particles = new Array();

	//[Boolean] - Wheter new particles should inherit the transform of this emitter container
	_this._inheritTransform = false;

	//Integer - Maximum number of particles that can exist at the same time
	_this._maxParticles = 0;

	//Number - Minimum lifetime for any particle
	_this._minLifetime = 0;
	//Number - Maximum lifetime for any particle
	_this._maxLifetime = 0;

	//Point - Origin to position particles relative to
	_this._particleOrigin = null;

	//Boolean - Whether the emitter is currently set to emit particles
	_this._isEmitting = false;

	//Boolean - Whether the emitter is currently paused (no emission or updates)
	//We pause the emitter to start with to ensure no updates are made before the emitter is set up
	_this._isPaused = true;

	//[Boolean] - Whether this emitter should destroy itself when all existing particles have finished
	_this._destroyWhenDone = false;

	/*
	* Initialize this particle emitter
	*/
	function _construct(){
		return _this;
	}

	/*
	* Set this particle emitter up with a set of instantiated objects
	* @param maxParticles:Integer - Maximum particles that can exist at once
	* @param minLife:Number - Minimum lifetime of a particle
	* @param maxLife:Number - Maximum lifetime of a particle
	* @param spawnShape:BaseSpawnShape - Determines location and other starting properties of particles
	* @param spawnTimer:BaseSpawnTimer - Handles the timing of when particles are spawned
	* @param updaterList:Array[BaseParticleUpdater] - List of particles updaters defining particle updates to be made
	*/
	_this.setupFromObjects = function(maxParticles, minLife, maxLife, particleFactory, spawnTimer, spawnShape, updaterList){
		_this._maxParticles = maxParticles;
		_this._minLifetime = minLife;
		_this._maxLifetime = maxLife;

		_this._particleFactory = particleFactory;
		_this._spawnTimer = spawnTimer;
		_this._spawnShape = spawnShape;

		//Copy all updaters into a new array of updaters
		_this._particleUpdaters = updaterList.concat();

		//Start running the update loop for this emitter
		_this.resume();
	};

	/*
	* Set up this emitter using a single generic object containing configuration data
	* @param dataObj:Object - Object containing configuration data for the emitter
	*/
	_this.setupFromJson = function(dataObj){ 

		throw "AbstractParticleEmitter.setupFromJson: This method is not implemented yet!";

		//TODO: Parse JSON data and create all required objects

		//Start running the update loop for this emitter
		//_this.resume();
	};

	/*
	* Start emitting particles
	*/
	_this.startEmit = function(destroyWhenDone){
		//Start the emitter if not currently running
		if(!_this._isEmitting){
			_this._isEmitting = true;
		}

		//Reset the spawning timer to the initial state
		_this._spawnTimer.resetSpawning();

		if(isDefined(destroyWhenDone)){
			_this._destroyWhenDone = destroyWhenDone;
		}
	};

	/*
	* Stop emitting particles (existing particles will continue updating)
	* @param destroyWhenDone:[Boolean] (Optional) - Whether the emitter should destroy itself when all existing particles are gone
	*												Defaults to false
	*/
	_this.stopEmit = function(destroyWhenDone){
		//Stop the emitter if currently running
		if(_this._isEmitting){			
			_this._isEmitting = false;
		}

		//If provided, set flag for destroying when existing particles are done
		if(isDefined(destroyWhenDone)){
			_this._destroyWhenDone = destroyWhenDone;
		}
	};

	/*
	* Check if this emitter is currently emitting
	* @return:[Boolean] - True if this emitter is set to emit, false otherwise
	*/
	_this.isEmitting = function(){
		return _this._isEmitting;
	};

	/*
	* Pause all updates for this emitter
	*	This will suspend particle emissions and particle updates
	*/
	_this.pause = function(){
		//Pause the emitter if not already paused
		if(!_this._isPaused){
			_this._disableUpdates();
			_this._isPaused = true;
		}
	};

	/*
	* Resume all updates for this emitter
	*	This will resume particle emissions (if active) and particle updates
	*/
	_this.resume = function(){
		//Resume the emitter if currently paused
		if(_this._isPaused){
			_this._enableUpdates();
			_this._isPaused = false;
		}
	};

	/*
	* Check if this emitter is currently paused or not
	* @return:[Boolean] - True if the emitter is currently paused, false otherwise
	*/
	_this.isPaused = function(){
		return _this._isPaused;
	};

	/*
	* Immediately destroy this emitter and any particles associated with it
	*/
	_this.destroy = function(){
		//Disable all updates for this emitter		
		_this.pause();

		//Remove all particles from the display container
		// for(var i = 0; i < _this._particles.length; i++){
		// 	_particleContainer.removeChild(_this._particles[i]);
		// }

		//Clear the particle array
		_this._particles = new Array();

		//TODO: Clear the particle pool
	};

	/*
	* Set whether spawned particles should be positioned according to the full transform of this emitter.
	* @param shouldInherit:[Boolean] - Whether spawned particles should be positioned according to the full transform of this emitter.
	*	If true, spawned particles will use the global location, rotation, and scale of this emitter. (more expensive)
	*	If false, spawned particles will be positioned relative to this emitter, but will ignore its rotation and scaling. (less expensive)
	*/
	_this.setParticleInheritTransform = function(shouldInherit){
		_this._inheritTransform = shouldInherit;
	};

	/*
	* Handles an update tick for the particle emitter
	* @param delta:[Number] - Elapsed time in seconds
	*/
	_this._handleUpdate = function(delta){
		var numToSpawn = 0;
		var curParticle;
		//var delta = tickEvent.delta / 1000.0;
		var spawnStartIndex;		
		var i;

		if (_this._spawnTimer.isComplete()) {
			_this.stopEmit();
		}

		//Perform common updates for all particles (lifetime and velocity)
		for(i = _this._particles.length - 1; i >= 0; i--){
			curParticle = _this._particles[i];

			//Update position of particle based on its current velocity
			curParticle.x += delta * curParticle.velX;
			curParticle.y += delta * curParticle.velY;

			//Update particle lifetime
			curParticle.curLife += delta;
			curParticle.normalizedLife = curParticle.curLife / curParticle.maxLife;

			//Check if this particle should be removed from the list
			if(curParticle.normalizedLife >= 1.0){
				_this._removeParticleAt(i);
			}
		}

		//Perform additional updates on any exiting particles
		for(i = 0; i < _this._particleUpdaters.length; i++){
			_this._particleUpdaters[i].updateParticles(_this._particles, delta);
		}

		//Check for newly emitted particles if currently emitting
		if(_this._isEmitting){
			numToSpawn = _this._spawnTimer.getSpawnNumber(delta);

			//Constrain number of spawned particles to the maximum
			numToSpawn = Math.min(numToSpawn, _this._maxParticles - _this._particles.length);

			//If new particles should be spawned, spawn them and set them up
			if(numToSpawn > 0){

				//Update the origin point for positioning particles
				//This ensures that particles will be placed properly even when adding them to another container object
				_this._updateParticleOrigin();
				
				spawnStartIndex = _this._particles.length;
				
				//Spawn the new particles
				_this._spawnParticles(numToSpawn);

				//Have updaters perform any required initialization on the new particles
				for(i = 0; i < _this._particleUpdaters.length; i++){
					_this._particleUpdaters[i].initParticles(_this._particles, spawnStartIndex, _this._particles.length - 1);
				}
			}
		//if not emitting, check if all particles have completed
		} else {
			if(_this._destroyWhenDone && _this._particles.length <= 0){
				_this.destroy();
			}
		}
	};

	return _construct();
}

ss.AbstractParticleEmitter = AbstractParticleEmitter;