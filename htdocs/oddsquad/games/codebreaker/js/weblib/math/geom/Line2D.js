//require.include("weblib/math/geom/Vector2");
//require.include("weblib/math/MathUtils");

/**
* Class representing a 2d line segment.
* Defined by two endpoints, p1 and p2.
**/
function Line2D(p1, p2) {
	/*global Vector2 */
	"use strict";

	// The first endpoint of the line.
	this.p1 = p1;

	// The second endpoint of the line.
	this.p2 = p2;
}

Line2D.prototype.constructor = Line2D;

/**
* Get a normalized vector which is tangent to this line.
* It will point in the direction from p1 -> p2
**/
Line2D.prototype.getTangent = function() {
	"use strict";

	var tangent = this.p2.subtract(this.p1);
	if(tangent.magnitude() === 0) {
		throw "Trying to get a vector in the direction of a zero length line segment.";
	}
	tangent.normalize();
	return tangent;
};


/**
* Get a normalized vector which is tangent to this line, and store it in the out parameter.
* It will point in the direction from p1 -> p2
* @param out: the out vector to store the tangent in.
**/
Line2D.prototype.getTangentOut = function (out) {
	"use strict";

	this.p2.subtractOut(this.p1, out);
	if(out.magnitude() === 0) {
		throw "Trying to get a vector in the direction of a zero length line segment.";
	}
	out.normalize();
};

/**
* Gets a normal to the line. To get the other normal to the line,
* take the results of this and make them negative.
**/
Line2D.prototype.getNormal = function() {
	"use strict";

	var tangent = this.getTangent();
	var t = tangent.x;
	tangent.x = tangent.y;
	tangent.y = -t;

	return tangent;
};

/**
* Gets a normal to the line and stores it an an out parameter.
* To get the other normal to the line, take the results of
* this and make them negative.
* @param out - the output vector.
**/
Line2D.prototype.getNormalOut = function (out) {
	"use strict";

	this.getTangentOut(out);
	var t = out.x;
	out.x = out.y;
	out.y = -t;
};

/**
* Gets the midpoint of the line segment.
**/
Line2D.prototype.getMidpoint = function () {
	"use strict";
	var out = this.p1.add(this.p2);
	out.multSelf(0.5);

	return out;
};

/**
* Gets the midpoint of the line segment, and stores the result in
* an output parameter.
* @param out - the output vector.
**/
Line2D.prototype.getMidpointOut = function (out) {
	"use strict";

	this.p1.addOut(this.p2, out);
	out.multSelf(0.5);
};
/**
* Gets the slope of the line segment.
**/
Line2D.prototype.getSlope = function() {
	"use strict";
	if (Math.abs(this.p2.x - this.p1.x) === 0) {
		return NaN;
	}
	return (this.p2.y - this.p1.y) / (this.p2.x - this.p1.x);
};

/**
* Checks whether a given point is within the AABB defined by this line.
* @param point {Vector2} : the point to check.
* @returns: true if the point is within the AABB defined by the line,
* false otherwise.
**/
Line2D.prototype.withinLineBounds = function(point) {
	"use strict";

	if(point.x < Math.min(this.p1.x, this.p2.x) || point.x > Math.max(this.p1.x, this.p2.x)) {
		return false;
	}
	if(point.y < Math.min(this.p1.y, this.p2.y) || point.y > Math.max(this.p1.y, this.p2.y)) {
		return false;
	}
	return true;
};

/*
* Shift this entire line segment by a certain amount
* @param shiftX:Number - Amount to shift along X-axis
* @param shiftY:Number - Amount to shift along Y-axis
*/
Line2D.prototype.shift = function(shiftX, shiftY){
	"use strict";

	//Shift start point
	this.p1.shift(shiftX, shiftY);

	//Shift end point
	this.p2.shift(shiftX, shiftY);

	return this;
};

/**
* Try to get the intersection point between two line segments.
* @param other: The other line to intersect this line with.
* @returns: false if the lines don't intersect, or the intersection point if they do.
**/
Line2D.prototype.tryGetIntersection = function(other) {
	"use strict";

	var a1, b1, c1, a2, b2, c2, det, intersectionPoint;

	// determine the coeficients A, B , C for this line, if the line is expressed as Ax+By=C
	a1 = this.p2.y - this.p1.y;
	b1 = this.p1.x - this.p2.x;
	c1 = a1 * this.p1.x + b1 * this.p1.y;

	// determine the coeficients A, B , C for the other line, if the line is expressed as Ax+By=C
	a2 = other.p2.y - other.p1.y;
	b2 = other.p1.x - other.p2.x;
	c2 = a2 * other.p1.x + b2 * other.p1.y;

	det = a1 * b2 - a2 * b1;

	if( det === 0 ) {
		// lines are parallel, we need to do a bit more here.

		// if they don't line up, return false
		if(a1 !== a2 || b1 !== b2 || c1 !== c2) {
			return false;
		}

		// if they do, check if there's an overlap.
		// TODO: Deal with the possible overlaps in this situation. Currently, false is returned in all parallel cases,
		// but we should return the midpoint of the overlapping area.
		return false;


	}  else {
		// if these were lines, as opposed to line segments, they'd intersect here:
		intersectionPoint = new Vector2((b2 * c1 - b1 * c2) / det, (a1 * c2 - a2 * c1) / det);

		// If we're in both segments, return the intersection point, or return false if we're not.
		if(this.withinLineBounds(intersectionPoint) && other.withinLineBounds(intersectionPoint)) {
			return intersectionPoint;
		} else {
			return false;
		}
	}
};

/*
* Get the point on this line segment closest to the provided point
* @param point:Vector2 - The point
* @param clamp:Boolean - Set to true if the point should be restricted to this line segment,
*	false if co-linear points beyond the start and end points are acceptable
* @return:Vector2 - The point on this line segment closest to the provided point
*/
Line2D.prototype.getClosestPointOnLine = function(point, clamp){
	"use strict";



	var out = this.p2.subtract(this.p1);
	if(this.p1.equals(this.p2)) {
		return new Vector2(this.p1.x, this.p1.y);
	}
	if (clamp) {
		out.multSelf(MathUtils.clamp(((point.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(point.y - this.p1.y) * (this.p2.y - this.p1.y)) /
		((this.p2.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(this.p2.y - this.p1.y) * (this.p2.y - this.p1.y)), 0, 1));
	} else {
		out.multSelf(((point.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(point.y - this.p1.y) * (this.p2.y - this.p1.y)) /
		((this.p2.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(this.p2.y - this.p1.y) * (this.p2.y - this.p1.y)));
	}
	this.p1.addOut(out, out);

	return out;
};

/*
* Get the point on this line segment closest to the provided point, and store the result in an out vector.
* @param point:Vector2 - The point
* @param clamp:Boolean - Set to true if the point should be restricted to this line segment,
*	false if co-linear points beyond the start and end points are acceptable
* @param out:Vector2 - the output vector.
* @return:Vector2 - The point on this line segment closest to the provided point
*/
Line2D.prototype.getClosestPointOnLineOut = function(point, clamp, out) {
	"use strict";

	this.p2.subtractOut(this.p1, out);
	if(this.p1.equals(this.p2)) {
		out.x = this.p1.x;
		out.y = this.p1.y;
		return out;
	}
	if (clamp) {
		out.multSelf(MathUtils.clamp(((point.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(point.y - this.p1.y) * (this.p2.y - this.p1.y)) /
		((this.p2.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(this.p2.y - this.p1.y) * (this.p2.y - this.p1.y)), 0, 1));
	} else {
		out.multSelf(((point.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(point.y - this.p1.y) * (this.p2.y - this.p1.y)) /
		((this.p2.x - this.p1.x) * (this.p2.x - this.p1.x) +
			(this.p2.y - this.p1.y) * (this.p2.y - this.p1.y)));
	}
	this.p1.addOut(out, out);

	return out;
};

/*
* Rotate this entire line around a particular point
* @param rotateAngle:Number - The angle to rotate around the origin point
* @param rotateOrigin:Vector2 (Optional) - Origin point to rotate around
*	If none is provided, the line will be rotated around the origin
* @return:Line2D - This Line2D instance in its updated form
*/
Line2D.prototype.rotate = function(rotateAngle, rotateOrigin){
	"use strict";

	//console.log("Line Rotate: Start: " + this);

	//If an origin was provided, offset the points to be with respect to it
	if(rotateOrigin){
		this.p1.shift(-rotateOrigin.x, -rotateOrigin.y);
		this.p2.shift(-rotateOrigin.x, -rotateOrigin.y);
	}

	//console.log("Line Rotate: After Shift: " + this);

	//Rotate the points around the origin
	this.p1.rotateSelf(rotateAngle);
	this.p2.rotateSelf(rotateAngle);

	//console.log("Line Rotate: After Rotate: " + this);

	//If we shifted points at the beginning, shift them back
	if(rotateOrigin){
		this.p1.shift(rotateOrigin.x, rotateOrigin.y);
		this.p2.shift(rotateOrigin.x, rotateOrigin.y);
	}

	//console.log("Line Rotate: After Shift Back: " + this);

	return this;
};

/*
* Create a deep copy of this line
* @return:Line2D - A deep copy of this line
*/
Line2D.prototype.clone = function(){
	"use strict";

	return new Line2D(this.p1.clone(), this.p2.clone());
};

/*
* Get a string representation of this Line2D
* @return:String - A string representation of this Line2D
*/
Line2D.prototype.toString = function(){
	"use strict";

	return this.p1.toString() + " - " + this.p2.toString();
};

/*
* Set both points of this line at the same time
* @param x1:Number - X coordinate of the first point
* @param y1:Number - Y coordinate of the first point
* @param x2:Number - X coordinate of the second point
* @param y2:Number - Y coordinate of the second point
*/
Line2D.prototype.setAll = function(x1, y1, x2, y2){
	"use strict";

	this.p1.x = x1;
	this.p1.y = y1;
	this.p2.x = x2;
	this.p2.y = y2;
};

/*
* Check if two line segments are equal.
*/
Line2D.prototype.equals = function (other, tolerance) {
	"use strict";

	return this.p1.equals(other.p1, tolerance) &&  this.p2.equals(other.p2, tolerance);
};

/*
* Get the angle of this line (in radians) with respect to the positive x axis.
* @return:[Number] - The angle of this line segment in radians, between -PI and PI
*/
Line2D.prototype.getAngle = function(){
	"use strict";

	return Math.atan2(this.p2.y - this.p1.y, this.p2.x - this.p1.x);
};