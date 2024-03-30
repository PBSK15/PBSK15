//require.include("weblib/math/MathUtils");
//require.include("weblib/math/geom/Vector2");

/*
* Class GeomUtils
*	Singleton class with functions for performing various geometric operations
*/

/*
* Get the singleton reference to this class
*/
var GeomUtils = GeomUtils || new function GeomUtils(){}; //jshint ignore:line

/*
* Get the points of intersection between a line and a circle of a given radius
* @param line:Line2D - The 2D line segment defining the line to check for intersection
* @param circleRadius:Number - Radius of the cirlce
* @param circleCenter:Vector2 (optional) - Center point of the circle.  If not provided, a center
*		of (0, 0) will be used by default
* @return:Array[Line2D] - An array consisting of 0, 1, or 2 points of intersection
*/
GeomUtils.getLineCircleIntersection = function(line, circleRadius, circleCenter){
	"use strict";
	var dx, dy, dr, det, disc;

	//If neccessary, shift the points on the line so the circle is centered on the origin
	if(circleCenter){
		line.shift(-circleCenter.x, -circleCenter.y);
	}

	//Change in x and y between the two points
	dx = line.p2.x - line.p1.x;
	dy = line.p2.y - line.p1.y;
	dr = Math.sqrt(dx * dx + dy * dy);

	//Determinant 
	det = line.p1.x * line.p2.y - line.p2.x * line.p1.y;

	//Discriminant
	disc = circleRadius * circleRadius * dr * dr - det * det;

	var intersectPoints = [];

	var numeratorX;
	var numeratorY;
	var intPoint;

	//If discriminant is less than zero, we will have imaginary intersection points
	//We return an empty list since there are no real intersections
	if(disc < 0){
		return intersectPoints;
	}

	numeratorX = MathUtils.getSignNonZero(dy) * dx * Math.sqrt(disc);
	numeratorY = Math.abs(dy) * Math.sqrt(disc);

	//Calculate and add the first intersection point
	intPoint = new Vector2(0, 0);
	intPoint.x = (det * dy + numeratorX) / (dr * dr);
	intPoint.y = (-det * dx + numeratorY) / (dr * dr);

	//Shift this intersection point back if we shifted for an off-center circle
	if(circleCenter){
		intPoint.x += circleCenter.x;
		intPoint.y += circleCenter.y;
	}
	intersectPoints.push(intPoint);

	//If the descriminant is nearly 0, this line is tangent to the circle and so there's only one intersection point
	var equalityTolerance = 0.00001;
	if(Math.abs(disc) <= equalityTolerance){
		return intersectPoints;
	}

	//Calculate and add the second intersection point
	intPoint = new Vector2(0, 0);
	intPoint.x = (det * dy - numeratorX) / (dr * dr);
	intPoint.y = (-det * dx - numeratorY) / (dr * dr);

		//Shift this intersection point back if we shifted for an off-center circle
	if(circleCenter){
		intPoint.x += circleCenter.x;
		intPoint.y += circleCenter.y;
	}
	intersectPoints.push(intPoint);

	return intersectPoints;
};

/*
* Get the angle (in degrees) of the line going from p1 to p2
*/
// GeomUtils.getAngleBetweenPoints = function(p1, p2){

// }

