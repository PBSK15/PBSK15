//require.include("weblib/liveparticles/spawntimer/AbstractSpawnTimer");

/*
* Class UniformSpawnTimer
*	Timer for spawning particles at a uniform rate over time
*/

/*
* Create a new UniformSpawnTimer
* @param rate:Number - Rate to spawn particles (particles / second)
*/
ss.UniformSpawnTimer = function(rate){
	"use strict";

	//Call base class constructor
	ss.AbstractSpawnTimer.call(this);

	var _this = this;
	this.name = "UniformSpawnTimer";
	this.exposedVariables = ["spawnRate"];

	//Number - How many particles to spawn per second
	this.spawnRate = 0;

	//Number - Interval between particles spawns (in seconds)
	var _spawnInterval = 0;

	//Number - Counts the time since the previous particle was spawned
	var _nextSpawnCounter = 0;

	var _oldSpawnRate = this.spawnRate;

	/*
	* Initialize this spawn timer
	*/
	function _construct(rate){
		_this.setSpawnRate(rate);

		return _this;
	}

	/*
	* Set the rate to spawn particles at
	* @param rate:Number - Rate to spawn particles (particles / second)
	*/
	_this.setSpawnRate = function(rate){

		//Throw error if spawn rate is invalid
		if(rate <= 0){
			throw("ERROR: UniformSpawnTimer.setSpawnRate: Invalid spawn rate: " + rate);
		}

		this.spawnRate = rate;
		_spawnInterval = 1 / this.spawnRate;
		_oldSpawnRate = this.spawnRate;
	};

	/*
	* Get the number of particles that should be spawned due to the elapsed time
	* @param delta:Number - Time elapsed since last update (in seconds)
	* @return:Number - The number of new particles to be spawned
	*/
	_this.getSpawnNumber = function(delta){
		if (_oldSpawnRate != this.spawnRate) {
			_this.setSpawnRate(this.spawnRate);
		}
		var numSpawn = 0;

		_nextSpawnCounter += delta;

		//If enough time has elapsed to spawn new particles, calculate how many should be spawned
		if(_nextSpawnCounter >= _spawnInterval){
			numSpawn = Math.floor(_nextSpawnCounter / _spawnInterval);
			_nextSpawnCounter -= numSpawn * _spawnInterval;
		}

		return numSpawn;
	};

	return _construct(rate);

};

//Maintain backwards compatibility
var UniformSpawnTimer = ss.UniformSpawnTimer; //jshint ignore:line