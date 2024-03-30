//require.include("weblib/math/geom/Vector2");
//require.include("weblib/core/Util");
/*
* Class MathUtils
*	Singleton class with functions for performing various general math operations
*/

/*
* Get the singleton reference to this class
*/
var MathUtils = MathUtils || new function MathUtils(){}; // jshint ignore:line

/*
* Get the sign of a given number
* @param num:Number - The number to get the sign for
* @return:Integer - 1 if num >= 0, -1 if num < 0
* 	This differs from standard Math.sign which returns 0 if num = 0
*/
MathUtils.getSignNonZero = function(num){
	"use strict";

	return num < 0 ? -1 : 1;
};

/*
* Get the sign of a given number
* @param num:Number - The number to get the sign for
* @return:Integer - 1 if num > 0, 0 if num == 0, -1 if num < 0
* 	This differs from standard Math.sign which returns 0 if num = 0
*/
MathUtils.getSign = function(num){
	"use strict";

	if(num === 0){
		return 0;
	}else{
		return num > 0 ? 1 : -1;
	}
};

/*
* Clamp a value between a minimum and maximum value
* @param value:Number - Value to be clamped
* @param min:Number - Minimum allowed value
* @param max:Number - Maximum allowed value
*/
MathUtils.clamp = function(value, min, max){
	"use strict";

	if(value < min){
		return min;
	}else if(value > max){
		return max;
	}else{
		return value;
	}
};

/*
* Linear interpolation between to points.
* @param p1: [Vector2] the first point in the interpolation.
* @param p2: [Vector2] the second point in the interpolation.
* @param t: [Number] a vale from 0 to 1 for where along the line to interpolate.
*			NOTE: this will extrapolate beyond these values.
*/
MathUtils.lerp = function (p1, p2, t) {
	"use strict";

	var out = new Vector2(0,0);
	p2.subtractOut(p1, out);
	out.multSelf(t);
	p1.addOut(out, out);
	return out;
};

/*
* Linear interpolation between to points, using an out vector for the result.
* @param p1: [Vector2] the first point in the interpolation.
* @param p2: [Vector2] the second point in the interpolation.
* @param t: [Number] a vale from 0 to 1 for where along the line to interpolate.
*			NOTE: this will extrapolate beyond these values.
*/
MathUtils.lerpOut = function (p1, p2, t, out) {
	"use strict";

	p2.subtractOut(p1, out);
	out.multSelf(t);
	p1.addOut(out, out);
};

/*
* Get a random number betwen two numbers.
* @param min: [Number] the min value.
* @param max: [Number] the max value.
*/
MathUtils.randomRange = function (min, max) {
	"use strict";

	return (Math.random() * (max-min)) + min;
};

/*
* Get a random number between two numbers, but weigh it based on the last result.
* This prevents two extreme values from occurring in a row.
* @param min: the min number.
* @param max: the max number.
* @param last: the last result.
*/
MathUtils.weightedRandomInt = function (min, max, lastResult) {
	"use strict";

	if(isEmpty(lastResult)) {
		lastResult = (max + min) / 2;
	}

	if(lastResult < (max + min) / 2) {
		return Math.floor(MathUtils.randomRange(min + ((max + min) / 2 - lastResult), max));
	}

	if (lastResult > (max + min) / 2) {
		return Math.floor(MathUtils.randomRange(min , max - (lastResult - ((max + min) / 2))));
	}

};