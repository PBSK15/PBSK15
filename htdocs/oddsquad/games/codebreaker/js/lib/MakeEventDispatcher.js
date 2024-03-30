

function MakeEventDispatcher ( reference ) {

	"use strict";

	reference.prototype._registrations = {};

	reference.prototype._getListeners = function(type, useCapture) {
	    var captype = (useCapture ? '1' : '0') + type;
	    if (!(captype in this._registrations)) {
	        this._registrations[captype] = [];
	    }
	    return this._registrations[captype];
	};

	reference.prototype.addEventListener = function(type, listener, useCapture) {
	    var listeners = this._getListeners(type, useCapture);
	    var ix = listeners.indexOf(listener);
	    if (ix === -1) {
	        listeners.push(listener);
	    }
	};

	reference.prototype.removeEventListener = function(type, listener, useCapture) {
	    var listeners = this._getListeners(type, useCapture);
	    var ix = listeners.indexOf(listener);
	    if (ix !== -1) {
	        listeners.splice(ix, 1);
	    }
	};

	reference.prototype.dispatchEvent = function( evt ) {
		var listeners = this._getListeners(evt.type, false).slice();
	    for (var i = 0; i < listeners.length; i++) {
	        listeners[i].call(this, evt);
	    }
	    return !evt.defaultPrevented;
	};

}


function MakeEvent( type, data, preventDefault ) {
	this.type = type;
	this.data = data;
	this.defaultPrevented = preventDefault;
}