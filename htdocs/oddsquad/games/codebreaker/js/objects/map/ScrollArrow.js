/* global require, createjs, console */

ScrollArrow.Direction = {
	UP: 0,
	DOWN: 1
};

/**
 * The TileButton class, create a tile object with different tile states
 */
function ScrollArrow( direction ) {

	"use strict";

	var _this = new createjs.Container();
	var _arrowBtnOn;
	var _arrowBtnOff;

	// return the newly constructed canvas element container
	function _Construct () {

		_arrowBtnOn = new CodeButton( "MapScrollArrow", true);
		_arrowBtnOff = new CodeButton( "MapScrollArrowDark", true);
		_this.height = _arrowBtnOn.height;
		_this.width = _arrowBtnOn.width;
		_this.addChild(_arrowBtnOn);
		_this.addChild(_arrowBtnOff);

		if (direction == ScrollArrow.Direction.UP) {
			_arrowBtnOn.rotation = 0;
			_arrowBtnOff.rotation = 0;
		} else {
			_arrowBtnOn.rotation = 180;
			_arrowBtnOff.rotation = 180;
		}

		return _this;
	}

	_this.Active = function ( isActive ) {
		if (isActive) {
			_arrowBtnOn.visible = true;
			_arrowBtnOff.visible = false;
			_this.cursor = "pointer";
		} else {
			_arrowBtnOn.visible = false;
			_arrowBtnOff.visible = true;
			_this.cursor = "auto";
		}
	}

	return _Construct();

}

