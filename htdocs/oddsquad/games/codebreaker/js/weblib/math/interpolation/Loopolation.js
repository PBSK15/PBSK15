
/**
 * Loop between time 0 to 1, return value 0 to 0.
 */

var Loopolation = Loopolation || new function () {
	"use strict";

	// create a locally scoped copy of this.
	var _this = this;


	/*
	* Sin interpolation.
	* @param t input from 0 to 1.
	* @return: 0 to 1 to -1 to 0.
	*/
	_this.easeSine = function(t) {
		return Math.sin((t * 4 - 2) * (Math.PI / 2));
	};

	return _this;
}; //jshint ignore:line