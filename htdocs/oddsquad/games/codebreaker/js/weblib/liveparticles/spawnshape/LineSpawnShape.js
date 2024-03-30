//require.include("weblib/core/Util");
//require.include("weblib/math/MathConst");
//require.include("weblib/liveparticles/spawnshape/AbstractSpawnShape");

/*
* Class LineSpawnShape extends AbstractSpawnShape
*	Spawns particles evenly spaced along a line
*/

/*
* Create a new LineSpawnShape
* @param x1:[Number] - X coordinate of the first line point
* @param y1:[Number] - Y coordinate of the first line point
* @param x2:[Number] - X coordinate of the last line point
* @param y2:[Number] - Y coordinate of the last line point
* @param minSpeed:[Number] [Optional] - Minimum speed to initialize particles with (in pixels/second).  Velocity will be directed perpendicular to the line.
* @param maxSpeed:[Number] [Optional] - Maximum speed to initialize particles with (in pixels/second).  Velocity will be directed perpendicular to the line.
* @param isBidirectional:[Boolean] - Whether particles should spawn on both sides of the line
*/
ss.LineSpawnShape = function(x1, y1, x2, y2, minSpeed, maxSpeed, isBiDirectional){
	"use strict";

	//Call base constructor
	ss.AbstractSpawnShape.call(this);
	this.name = "LineSpawnShape";
	this.exposedVariables = ["minSpeed","maxSpeed", "x1", "y1", "x2", "y2"];

	//[Number] - Minimum speed to spawn particles with
	this.minSpeed = isUndefined(minSpeed) ? 0 : minSpeed;
	//[Number] - Maximum speed to spawn particles with
	this.maxSpeed = isUndefined(maxSpeed) ? 0 : maxSpeed;

	//[Number] - X coordinate of the first line point
	this.x1 = x1;
	//[Number] - Y coordinate of the first line point
	this.y1 = y1;
	//[Number] - X coordinate of the last line point
	this.x2 = x2;
	//[Number] - Y coordinate of the last line point
	this.y2 = y2;

	//[Boolean] - Whether particles should spawn on both sides of the line
	var _isBiDirectional = isDefined(isBiDirectional) ? isBiDirectional : false;

	/*
	* Set the spawn position of a particle
	* @param particle:AbstractParticle - Particle whose position should be set
	*/
	this.setSpawnPosition = function(particle){
		var randNum = Math.random();
		var randSpeed = this.minSpeed + Math.random() * (this.maxSpeed - this.minSpeed);
		var newVel;
		var mag;

		//Set particle position
		particle.x = this.x1 + randNum * (this.x2 - this.x1);
		particle.y = this.y1 + randNum * (this.y2 - this.y1);

		//Calculate velocity to be perpendicular to the line
		newVel = new Vector2((this.y2 - this.y1), -(this.x2 - this.x1));
		mag = newVel.magnitude();
		newVel.x *= (randSpeed / mag);
		newVel.y *= (randSpeed / mag);
		
		//If bi-directional, choose the side of the line the velocity should be on
		if(_isBiDirectional){
			if(Math.floor(Math.random() * 2) == 1){
				newVel.x *= -1;
				newVel.y *= -1;
			}
		}

		particle.velX = newVel.x; 
		particle.velY = newVel.y;
	};

	/*
	* Update the line along which particles should be spawned
	* @param x1:[Number] - X coordinate of the first line point
	* @param y1:[Number] - Y coordinate of the first line point
	* @param x2:[Number] - X coordinate of the last line point
	* @param y2:[Number] - Y coordinate of the last line point
	*/
	this.updateSpawnLine = function(x1, y1, x2, y2){
		this.x1 = x1;
		this.y1 = y1;
		this.x2 = x2;
		this.y2 = y2;
	};

};

//Extend AbstractSpawnShape
ss.LineSpawnShape.prototype = new ss.AbstractSpawnShape();
ss.LineSpawnShape.prototype.constructor = ss.LineSpawnShape;

//Maintain backwards compatibility
var LineSpawnShape = ss.LineSpawnShape; //jshint ignore:line