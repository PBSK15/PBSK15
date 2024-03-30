//require.include("weblib/core/Util");
//require.include("weblib/math/MathConst");
//require.include("weblib/liveparticles/spawnshape/AbstractSpawnShape");

/*
* Class BoxSpawnShape extends AbstractSpawnShape
*	Spawns particles randomly scattered within the createjs rectangle area
*/

/*
* Create a new BoxSpawnShape
* @param rect:[Rectangle] - The create js rectangle which the particles spawns in
* @param minSpeed:[Number] [Optional] - Minimum speed to initialize particles with (in pixels/second).  Velocity will be directed perpendicular to the line.
* @param maxSpeed:[Number] [Optional] - Maximum speed to initialize particles with (in pixels/second).  Velocity will be directed perpendicular to the line.
* @param minRotate:[Number] - The initial rotation of the particle rotation
* @param maxRotate:[Number] - The initial rotation of the particle rotation
*/
ss.BoxSpawnShape = function(rect, minSpeed, maxSpeed, minRotate, maxRotate){
	"use strict";

	//Call base constructor
	ss.AbstractSpawnShape.call(this);
	this.name = "BoxSpawnShape";
	this.exposedVariables = ["minSpeed", "maxSpeed", "x", "y", "w", "h"];

	//[Number] - Minimum speed to spawn particles with
	this.minSpeed = isUndefined(minSpeed) ? 0 : minSpeed;
	//[Number] - Maximum speed to spawn particles with
	this.maxSpeed = isUndefined(maxSpeed) ? 0 : maxSpeed;

	this.minRotate = minRotate === undefined ? 0 : minRotate;
	this.maxRotate = maxRotate === undefined ? 0 : maxRotate;

	//[Number] - X coordinate of the top left corner
	this.x = rect.x;
	//[Number] - Y coordinate of the top left corner
	this.y = rect.y;
	//[Number] - width of the spawn area
	this.w = rect.width;
	//[Number] - height of the spawn area
	this.h = rect.height;

	/*
	* Set the spawn position of a particle
	* @param particle:AbstractParticle - Particle whose position should be set
	*/
	this.setSpawnPosition = function(particle){

		var randAngle = Math.random() * MathConst.TWO_PI;
		var randSpeed = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);
		var newVel;		

		//Set particle position
		particle.x = this.x + Math.random() * (this.w);
		particle.y = this.y + Math.random() * (this.h);

		//Set the partivle initial rotation
		particle.rotation = this.minRotate + (Math.random() * (this.maxRotate - this.minRotate));

		//Calculate velocity in a random direction from spawn point
		newVel = new Vector2( randSpeed * Math.cos(randAngle), randSpeed * Math.sin(randAngle));

		particle.velX = newVel.x;
		particle.velY = newVel.y;
	};
};

//Extend AbstractSpawnShape
ss.BoxSpawnShape.prototype = new ss.AbstractSpawnShape();
ss.BoxSpawnShape.prototype.constructor = ss.BoxSpawnShape;

//Maintain backwards compatibility
var BoxSpawnShape = ss.BoxSpawnShape; //jshint ignore:line