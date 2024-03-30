/* global require, MathConst */
//require.include("weblib/math/MathConst");
//require.include("weblib/ssnamespace");



/**
 * Object for handling 2d vectors, and their operations.
 * @param x - the x component of this vector.
 * @param y - the y component of this vector.
 * @constructor
 */
ss.Vector2 = function(x, y) {
	"use strict";

	// The x component of the vector.
	this.x = x;

	// The y component of the vector.
	this.y = y;
}

ss.Vector2.prototype.constructor = ss.Vector2;

/**
* Get the magnitude of this vector.
* @return - the magnitude of the vector.
*/
ss.Vector2.prototype.magnitude = function () {
	"use strict";

	return Math.sqrt(this.sqrMagnitude());
};

/**
* Get the squared magnitude of this vector.
* @return the squared magnitude of this vector.
**/
ss.Vector2.prototype.sqrMagnitude = function () {
	"use strict";

	return this.x * this.x + this.y * this.y;
};

/**
 * Normalize this vector.
 */
ss.Vector2.prototype.normalize = function () {
	"use strict";

	if(this.magnitude() === 0){
		return this;
	}

	this.setAll(this.x / this.magnitude(), this.y / this.magnitude());
	return this;
};

/**
* Set the x and y coordinates in one handy function
* @param x:Float - The x coordinate
* @param y:Float - The y coordinate
*/
ss.Vector2.prototype.setAll = function(x, y) {
	"use strict";

	this.x = x;
	this.y = y;
};

/**
* Dot Product.
* @param other - the other vector to dot this one with.
*/
ss.Vector2.prototype.dot = function (other) {
	"use strict";

	return (this.x * other.x + this.y * other.y);
};

/**
* Add this vector to another vector.
* @param other - the other vector in the addition.
*/
ss.Vector2.prototype.add = function (other) {
	"use strict";

	return new ss.Vector2(this.x + other.x, this.y + other.y);
};

/**
* Add this vector to another vector, and save this in the vector itself.
* @param other - the other vector in the addition.
*/
ss.Vector2.prototype.addSelf = function (other) {
	"use strict";

	this.x = this.x + other.x;
	this.y = this.y + other.y;

	return this;
};

/**
* Add this vector to another vector, and save the result in the out parameter.
* @param other - the other vector in the addition.
* @param out - the out vector.
*/
ss.Vector2.prototype.addOut = function (other, out) {
	"use strict";

	out.x = this.x + other.x;
	out.y = this.y + other.y;
};

/**
 * Get the angle between this and another vector using dot product
 * @param other - the other vector.
 * @param isDegree - if the result should be in degree or radians
 * @return - the angle to the other vector.
 */
ss.Vector2.prototype.angleBetween = function (other, isDegree) {
	"use strict";

	if( (this.x === 0 && this.y === 0) || (other.x === 0 && other.y === 0)) {
		throw "Tried to get angle between a zero vector and another vector.";
	}

	if (isDegree) {
		return Math.acos(this.dot(other) / this.magnitude() * other.magnitude()) * MathConst.RAD_TO_DEG;
	}

	return Math.acos(this.dot(other) / this.magnitude() * other.magnitude());
};

/**
 * Get the angle between this and another vector using atan2
 * @param other - the other vector.
 * @param isDegree - if the result should be in degree or radians
 * @return - the angle to the other vector.
 */
ss.Vector2.prototype.angleBetween2 = function (other, isDegree) {
	"use strict";

	if( (this.x === 0 && this.y === 0) || (other.x === 0 && other.y === 0)) {
		throw "Tried to get angle between a zero vector and another vector.";
	}
	if (isDegree) {
		return (this.angleRad() - other.angleRad()) * MathConst.RAD_TO_DEG;
	}
	return this.angleRad() - other.angleRad();
};

/**
* Subtract another vector from this vector.
* @param other - the vector to subtract.
**/
ss.Vector2.prototype.subtract = function (other) {
	"use strict";

	return new ss.Vector2(this.x - other.x, this.y - other.y);
};

/**
* Subtract another vector from this vector and store the result in yourself.
* @param other - the vector to subtract from yourself.
**/
ss.Vector2.prototype.subtractSelf = function (other) {
	"use strict";

	this.x = this.x - other.x;
	this.y = this.y - other.y;
	return this;
};

/**
* Subtract another vector from this vector and store the result in out.
* @param other - the other vector to subtract.
* @param out - the output vector.
**/
ss.Vector2.prototype.subtractOut = function(other, out) {
	"use strict";

	out.x = this.x - other.x;
	out.y = this.y - other.y;
};

/**
* Multiply this vector by a scalar.
**/
ss.Vector2.prototype.mult = function(scalar) {
	"use strict";

	return new ss.Vector2(this.x * scalar, this.y * scalar);
};

/**
* Multiply this vector by a scalar, and store the result in yourself.
* @param scalar - the scalar to multiply by.
**/
ss.Vector2.prototype.multSelf = function(scalar) {
	"use strict";

	this.x = this.x * scalar;
	this.y = this.y * scalar;
};

/*
* Multiply this vector by a scalar and store the result in the out parameter.
* @param scalar - the scalar to multiply.
* @param out - the vector to output to.
*/
ss.Vector2.prototype.multOut = function (scalar, out) {
	"use strict";

	out.x = this.x * scalar;
	out.y = this.y * scalar;
};

/**
* Multiply this vector by a scalar.
**/
ss.Vector2.prototype.scale = function(scalar) {
	"use strict";

	return this.mult(scalar);
};


/**
* Multiply this vector by a scalar, and store the result in yourself.
**/
ss.Vector2.prototype.scaleSelf = function(scalar) {
	"use strict";

	return this.multSelf(scalar);
};

/**
* Multiply this vector by a scalar, and store the result in yourself.
**/
ss.Vector2.prototype.scaleOut = function(scalar, out) {
	"use strict";

	return this.multOut(scalar, out);
};

/**
 * Get the distance from this vector to another vector.
 * @param other - the other vector.
 * @return - the distance to the other vector.
 */
ss.Vector2.prototype.distance = function (other) {
	"use strict";

	return Math.sqrt(Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2));
};

/**
 * Get the distance from this vector to another vector squared.
 * @param other - the other vector.
 * @return - the distance to the other vector squared.
 */
ss.Vector2.prototype.distanceSquared = function (other ) {
	"use strict";

	return Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2);
};

/**
* Get the negative of this vector. returns a vector of the same
* magnitude as this vector, but in the opposite direction.
**/
ss.Vector2.prototype.negative = function() {
	"use strict";

	return new ss.Vector2(-this.x, -this.y);
};

/**
* negate this vector. sets this vector a vector of the same
* magnitude as this vector, but in the opposite direction.
**/
ss.Vector2.prototype.negativeSelf = function () {
	"use strict";

	this.x = -this.x;
	this.y = -this.y;
	return this;
};

/**
 * Negate this vector, and put the result in the out parameter.
 * @param  {ss.Vector2} out where to put the result of the calculation.
 */
ss.Vector2.prototype.negativeOut = function (out) {
	"use strict";

	out.x = -this.x;
	out.y = -this.y;
};

/*
* Get the angle (in radians) this vector forms with respect to the X-axis
* @return:Number - The angle (in radians) this vector forms with respect to the X-axis
*				   This will be between -PI and PI radians
*/
ss.Vector2.prototype.angleRad = function(){
	"use strict";

	return Math.atan2(this.y, this.x);
};

/*
* Get the angle (in degrees) this vector forms with respect to the X-axis
* @return:Number - The angle (in degrees) this vector forms with respect to the X-axis
*				   This will be between -180 and 180 degrees
*/
ss.Vector2.prototype.angleDeg = function(){
	"use strict";

	return this.angleRad() * MathConst.RAD_TO_DEG;
};

/*
* Shift this vector by a certain amount
* @param shiftX:Number - Amount to shift in X
* @param shiftY:Number - Amount to shift in Y
* @return:ss.Vector2 - The vector instance this was called on, updated accordingly
*/
ss.Vector2.prototype.shift = function(shiftX, shiftY){
	"use strict";

	this.x += shiftX;
	this.y += shiftY;

	return this;
};

/*
* Rotate this vector around (0, 0) by a specified amount in the positive
* @param angle:Number - The angle in degrees to rotate by
* @return:ss.Vector2 - A new Vector2 which is the rotated version of the original
*/
ss.Vector2.prototype.rotate = function(angle){
	"use strict";

	angle = angle * MathConst.DEG_TO_RAD;
	return new ss.Vector2(this.x * Math.cos(angle) - this.y * Math.sin(angle),
		this.x * Math.sin(angle) + this.y * Math.cos(angle));
};

/*
* Rotate this vector instance around (0, 0) by a specified amount
* @param angle:Number - The angle in degrees to rotate by
* @return:ss.Vector2 - The rotated instance of the Vector2 this was called on
*/
ss.Vector2.prototype.rotateSelf = function(angle){
	"use strict";

	angle = angle * MathConst.DEG_TO_RAD;

	this.setAll(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));

	return this;
};

/**
 * Rotate the vector around (0,0) by a specified amount and store the result in out.
 * @param  {[type]} angle [description]
 * @param  {[type]} out   [description]
 */
ss.Vector2.prototype.rotateOut = function (angle, out) {
	"use strict";

	angle = angle * MathConst.DEG_TO_RAD;
	out.setAll(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle));
};

/**
* Checks equality of two vectors with an optional tolerance.
* @param other: the other vector to check.
* @param tolerance: (optional) A tolerance for what to consider equal. This is to work around floating point error.
* @return: true if the vectors are equal.
**/
ss.Vector2.prototype.equals = function(other, tolerance) {
	"use strict";

	if(tolerance) {
		return (Math.abs(this.x - other.x) <= tolerance && Math.abs(this.y - other.y) <= tolerance);
	} else {
		return (other.x === this.x && other.y === this.y);
	}
};

/**
 * Copy this vector out to another one.
 * @param  {ss.Vector2} out the vector to copy to.
 */
ss.Vector2.prototype.copyOut = function(out) {
	"use strict";

	out.x = this.x;
	out.y = this.y;
};

/**
 * Clone this vector, and return a new vector containing the clone.
 * @return {ss.Vector2} a clone of this vector.
 */
ss.Vector2.prototype.clone = function () {
	"use strict";

	return new ss.Vector2(this.x, this.y);
};

/*
* Converts this object to a string
* @return: A string representing the vector's current values
*/
ss.Vector2.prototype.toString = function(){
	"use strict";

	return "(x=" + this.x + ", y=" + this.y + ")";
};

//Maintain backwards compatibility
var Vector2 = ss.Vector2;

