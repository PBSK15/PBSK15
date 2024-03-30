/*global require */

//require.include("weblib/math/geom/Vector2");

/**
* Class representing a polygon.
**/
function Polygon (points) {
	/* global Vector2 */
	"use strict";

	/**
	* An array containing the points that surround this polygon.
	**/
	this.points = points;

	this._i = 0;

}

Polygon.prototype.constructor = Polygon;

/**
* Gets the "center" of the polygon by averaging the positions of all the points that make it up.
**/
Polygon.prototype.getCenter = function() {
	"use strict";

	var totalPosition;
	totalPosition = new Vector2(0,0);

	for(this._i = 0; this._i < this.points.length; this._i++)
	{
		totalPosition.addSelf(this.points[this._i]);
	}
	totalPosition.multSelf(1.0/this.points.length);
	return totalPosition;
};

/**
* Gets the "center" of the polygon by averaging the positions of all the points that make it up.
**/
Polygon.prototype.getCenterOut = function(out) {
	"use strict";

	out.x = 0;
	out.y = 0;

	for(this._i = 0; this._i < this.points.length; this._i++)
	{
		out.addSelf(this.points[this._i]);
	}
	out.multSelf(1.0/this.points.length);
	return out;
};



/**
* Sort the points in this polygon in clockwise order around their center.
**/
Polygon.prototype.sortPointsClockwise = function () {
	"use strict";

	var center = this.getCenter();

	function compare(a, b) {
		var angleA, angleB;

		angleA = Math.atan2(center.y - a.y, center.x - a.x);
		angleB = Math.atan2(center.y - b.y, center.x - b.x);

		return angleB - angleA;
	}

	this.points.sort(compare);

};

/**
* Draws this polygon to a createjs graphics object.
**/
Polygon.prototype.drawToGraphics = function(color, graphics) {
	"use strict";

	graphics.clear();
	graphics.beginFill(color);

	graphics.moveTo(this.points[0].x, this.points[0].y);
	for( var i = 0; i < this.points.length; i++ ) {
		graphics.lineTo(this.points[i].x, this.points[i].y);
	}
	graphics.lineTo(this.points[0].x, this.points[0].y);
	graphics.endFill();
};