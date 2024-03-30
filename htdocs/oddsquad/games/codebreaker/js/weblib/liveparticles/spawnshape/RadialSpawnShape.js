//require.include("weblib/core/Util");
//require.include("weblib/math/MathConst");
//require.include("weblib/liveparticles/spawnshape/AbstractSpawnShape");

/*
* Class RadialSpawnShape extends AbstractSpawnShape
*	Spawns particles within a circle of a given radius, setting the direction of their velocity away from the center
*/

/*
* Create a new RadialSpawnShape
* @param center:Vector2 - Centerpoint for the radial spawn
* @param radius:Number [Optional] - Maximum distance from the center that particles may spawn
* @param minSpeed:Number [Optional] - Minimum speed to initialize particles with (in pixels/second)
* @param maxSpeed:Number [Optional] - Maximum speed to initialize particles with (in pixels/second)
* @param minAngle:Number [Optional] - Minimum angle around a circle that particles can spawn (in degrees)
* @param maxAngle:Number [Optional] - Maximum angle around a circle that particles can spawn (in degrees)
*/
ss.RadialSpawnShape = function(center, radius, minSpeed, maxSpeed, minAngle, maxAngle){
	"use strict";

	//Call base constructor
	ss.AbstractSpawnShape.call(this);
	this.name = "RadialSpawnShape";
	this.exposedVariables = ["radius", "minSpeed", "maxSpeed", "minAngleRad", "maxAngleRad", "center"];

	//Vector2 - Centerpoint of the spawning
	this.center = center;
	//Number - Distance from  the center that particles can spawn
	this.radius = isUndefined(radius) ? 0 : radius;

	//[Number] - Minimum speed to spawn particles with
	this.minSpeed = isUndefined(minSpeed) ? 0 : minSpeed;
	//[Number] - Maximum speed to spawn particles with
	this.maxSpeed = isUndefined(maxSpeed) ? 0 : maxSpeed;

	//Number - Minimum angle around a circle that particles can spawn (in radians)
	this.minAngleRad = isUndefined(minAngle) ? 0 : minAngle * MathConst.DEG_TO_RAD;
	//Number - Maximum angle around a circle that particles can spawn (in radians)
	this.maxAngleRad = isUndefined(maxAngle) ? MathConst.TWO_PI : maxAngle * MathConst.DEG_TO_RAD;

	/*
	* Set the spawn position of a particle
	* @param particle:AbstractParticle - Particle whose position should be set
	*/
	this.setSpawnPosition = function(particle){
		var randOffset = Math.random() * this.radius;
		var randAngleRad = this.minAngleRad + Math.random() * (this.maxAngleRad - this.minAngleRad);
		var randSpeed = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);

		//Set particle position
		particle.x = this.center.x + Math.cos(randAngleRad) * randOffset;
		particle.y = this.center.y + Math.sin(randAngleRad) * randOffset;

		//Set velocity to be a normalized vector directed outwards from the center
		particle.velX = randSpeed * Math.cos(randAngleRad);
		particle.velY = randSpeed * Math.sin(randAngleRad);
	};

};

//Extend AbstractSpawnShape
ss.RadialSpawnShape.prototype = new ss.AbstractSpawnShape();
ss.RadialSpawnShape.prototype.constructor = ss.RadialSpawnShape;

//Maintain backwards compatibility
var RadialSpawnShape = ss.RadialSpawnShape; //jshint ignore:line