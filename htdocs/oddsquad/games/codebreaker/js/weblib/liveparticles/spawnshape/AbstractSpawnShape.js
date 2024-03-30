/* global require, ss */
//require.include("weblib/ssnamespace");

/*
* Class AbstractSpawnShape
*	Provides an interface for determining position of newly spawned shapes
*/

ss.AbstractSpawnShape = function(){
	"use strict";

	//Number - Origin point of this spawn shape on the X axis
	this.originX = 0;
	//Number - Origin point of this spawn shape on the Y axis
	this.originY = 0;

	/*
	* Set the spawn position of a particle
	*/
	this.setSpawnPosition = function(particle){ //jshint ignore:line
		//OVERRIDE IN SUBCLASS
	};
};