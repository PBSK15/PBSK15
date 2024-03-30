//require.include("weblib/ssnamespace.js");
//require.include("weblib/core/Util.js");

/**
 * Class representing an axis aligned rectangle.
 * @param {Vector2} p1 - The top left point in the rectangle.
 * @param {Vector2} p2 - The bottom right point in the rectangle.
 */
ss.Rectangle = function(x, y, w, h) {
	"use strict";

	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}

ss.Rectangle.prototype.constructor = ss.Rectangle;

/**
 * Get the maximum x coordinate of the rectangle.
 * @return {Number} The maximum X coordinate.
 */
ss.Rectangle.prototype.getMaxX = function () {
	"use strict";
	return Math.max(this.x, (this.x + this.width));
};

/*
* Get the maximum y coordinate of the rectangle.
* @return {Number} The maximum y coordinate of the rectangle.
*/
ss.Rectangle.prototype.getMaxY = function () {
	"use strict";
	return Math.max(this.y, (this.y + this.height));
};

/*
* Get the minimum x coordinate of the rectangle.
* @return {Number} The minimum y coordinate of the rectangle.
*/
ss.Rectangle.prototype.getMinX = function () {
	"use strict";
	return Math.min(this.x, (this.x + this.width));
};

/*
* Get the minimum y coordinate of the rectangle.
* @return {Number} the minimum y coordinate of the rectangle.
*/
ss.Rectangle.prototype.getMinY = function () {
	"use strict";
	return Math.min(this.y, (this.y + this.height));
};

/*
* Get the width of the rectangle.
* @return {Number} the width of the rectangle.
*/
ss.Rectangle.prototype.getWidth = function () {
	"use strict";

	return this.width;
};

/*
* Get the Height of the rectangle.
* @return {Number} the width of the rectangle.
*/
ss.Rectangle.prototype.getHeight = function () {
	"use strict";

	return this.height;
};

/*
* Perform a hit test on the rectangle, to see if a point is within it.
* @param point {Vector2}: the point to test against the rectangle.
* @returns {Boolean}: true if the point is in the rectangle, false otherwise.
*/
ss.Rectangle.prototype.hitTest = function (point) {
	"use strict";

	if (this.getMinX() > point.x) {
		return false;
	}
	if(this.getMaxX() < point.x) {
		return false;
	}
	if(this.getMinY() > point.y) {
		return false;
	}
	if(this.getMaxY() < point.y) {
		return false;
	}
	// we passed al the test, we're inside the rectangle!
	return true;
};

ss.Rectangle.prototype.isIntersectingRectangle = function(other){
	"use strict";

	var inHorizontal = false;
	var inVertical = false;

	// check if there's an overlap in the horizontal span.
	if(this.getMinX() <= other.getMaxX() && this.getMaxX() >= other.getMinX()) {
		inHorizontal = true;
	}

	if(this.getMinX() <= other.getMaxX() && this.getMaxX() >= other.getMaxX()) {
		inHorizontal = true;
	}

	if(other.getMinX() <= this.getMinX() && other.getMaxX() >= this.getMinX()) {
		inHorizontal = true;
	}

	if(other.getMinX() <= this.getMaxX() && other.getMaxX() >= this.getMaxX()) {
		inHorizontal = true;
	}

	// check if there's an overlap in the vertical span.
	if(this.getMinY() <= other.getMinY() && this.getMaxY() >= other.getMinY()) {
		inVertical = true;
	}

	if(this.getMinY() <= other.getMaxY() && this.getMaxY() >= other.getMaxY()) {
		inVertical = true;
	}

	if(other.getMinY() <= this.getMinY() && other.getMaxY() >= this.getMinY()) {
		inVertical = true;
	}

	if(other.getMinY() <= this.getMaxY() && other.getMaxY() >= this.getMaxY()) {
		inVertical = true;
	}

	// if both, we have a hit.
	return inHorizontal && inVertical;
};

ss.Rectangle.prototype.debugDraw = function (shape, outlineColour, fillColour) {
	"use strict";

	if(isEmpty(shape)) {
		return;
	}

	if (isEmpty(outlineColour)) {
		outlineColour = "#FFFFFF";
	}

	if (isEmpty(fillColour)) {
		fillColour = "rgba(255,255,255,0.25)";
	}

	shape.graphics.clear();

	// draw the outline.
	shape.graphics.setStrokeStyle(1);
	shape.graphics.beginStroke(outlineColour);
	shape.graphics.beginFill(fillColour);
	shape.graphics.moveTo(this.x, this.y);
	shape.graphics.lineTo(this.x + this.width, this.y);
	shape.graphics.lineTo(this.x + this.width, this.y + this.height);
	shape.graphics.lineTo(this.x, this.y + this.height);
	shape.graphics.lineTo(this.x, this.y);
};
