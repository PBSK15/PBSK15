/*
*	Enumeration AssetLoaderEvent
*		Defines the possible types of events that asset loaders can dispatch
*/
var AssetLoaderEvent = AssetLoaderEvent || new function AssetLoaderEvent(){
	"use strict";
	this.FILE_LOADED = "FILE_LOADED";
	this.LOAD_COMPLETE = "LOAD_COMPLETE";
	this.ASSET_PROGRESS = "ASSET_PROGRESS";
	this.LOAD_ERROR = "LOAD_ERROR";
}; // jshint ignore:line