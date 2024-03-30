var Interpolation = Interpolation || new function () {
	"use strict";

	/*
	* Linear interpolation.
	* @param x: input from 0 to 1.
	* @return: a linear interpolation from 0 to 1.
	*/
	this.linear = function (x) {
		return x;
	};

	/*
	* SmoothStep interpolation.
	* @param x: input from 0 to 1.
	* @return: a smoothstep interpolation from 0 to 1.
	*/
	this.smoothStep = function(x) {
		return x * x * (3 - 2 * x);
	};

	/*
	* SmoothStep interpolation with 2 iterations.
	* @param x: input from 0 to 1.
	* @return: a smoothstep interpolation from 0 to 1 with 2 iterations.
	*/
	this.smoothStepX2 = function (x) {
		x = x * x * (3 - 2 * x);
		return x * x * (3 - 2 * x);
	};

	/*
	* SmoothStep interpolation with 3 iterations.
	* @param x: input from 0 to 1.
	* @return: a smoothstep interpolation from 0 to 1 with 3 iterations.
	*/
	this.smoothStepX3 = function (x) {
		x = x * x * (3 - 2 * x);
		x = x * x * (3 - 2 * x);
		return x * x * (3 - 2 * x);
	};

	/*
	* Square interpolation.
	* @param x input from 0 to 1.
	* @return: the number squared.
	*/
	this.squared = function (x) {
		return x * x;
	};

	/*
	* Inverse square interpolation.
	* @return: the inverse square of the number.
	*/
	this.inverseSquared = function(x) {
		return 1 - (1 - x) * (1 - x);
	};

	/*
	* Sin wave interpolation.
	* @return: interpolation along the portion of a sin wave that rises from a trough to a crest.
	*/
	this.sin = function (x) {
		return 0.5 - Math.cos(-x * Math.PI) * 0.5;
	};


	/*
	* Bounce twice interpolation
	* @return: two bounces after drop
	*/
	this.easeBounceSmall = function (t) {
		var cut1, cut2, bounceHeight1, bounceHeight2, newT, fasterT, cosT, bounceT;

		cut1 = 0.6;
		cut2 = 0.85;
		bounceHeight1 = 0.05;
		bounceHeight2 = 0.02;

		if ( t < cut1 ) {

			// first movement - drop down
			// scale t to move all the way to end position, return 0 to 1
			newT = t * (1 / cut1);

			// speed up
			fasterT = newT * newT;
			return fasterT;

		} else if ( t < cut2 ) {

			// second movement - bounce
			// scale t from between cut1 and cut2 to 0 to 1
			newT = (t - cut1) * (1 / (cut2 - cut1));

			// get 0 to 1 to 0 based on new T
			cosT = Math.abs(Math.cos((newT * 2 -1) * Math.PI / 2));

			// modify to the first bounce height magnitude
			bounceT = cosT * bounceHeight1;

			// return in respect to 1
			return 1 - bounceT;

		} else {

			// last movement - bounce
			// scale t from after cut2 to 0 to 1
			newT = (t - cut2) * (1 / (1 - cut2));

			// get 0 to 1 to 0 based on new T
			cosT = Math.abs(Math.cos((newT * 2 -1) * Math.PI / 2));

			// modify to the first bounce height magnitude
			bounceT = cosT * bounceHeight2;

			// return in respect to 1
			return 1 - bounceT;
		}
	};


	/*
	* Evaluate an interpolation for a range.
	* @param min: the min value of the range.
	* @param max: tha max value of the range.
	* @param t: how far along the curve we are (from 0 to 1)
	* @param: type the function to use for the interpolation.
	*/
	this.evaluate = function (min, max, t, type) {
		// cap t in the range of zero to 1.
		if(t > 1) {
			t = 1;
		} else if (t < 0) {
			t = 0;
		}

		// return the result.
		return min + ((max - min) * type(t));
	};
}; // jshint ignore:line


