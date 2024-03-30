//require.include("weblib/event/AbstractEventDispatcher");

/**
* Singleton object dealing with storage of key value pairs.
* the basic implementation uses localstorage.
* NOTE: ALL VALUES WILL BE STORED AS STRINGS, so any more complex data will need to be parsed.
**/
var KeyValueStorage = KeyValueStorage || new function () {
	"use strict";

	// locally scoped copy of this object.
	var _this = AbstractEventDispatcher ( this );

	// defaults values.
	_this.defaults = {};

	// in memory cache for when localstorage is not available.
	_this.values = {};

	_this.gameSettingsURL = "../../php/gameSettings.php";

	var _remainingKeys = [];

	//[Boolean] - Whether persistent storage (local storage, database storage) is currently enabled
	var _persistentStorageEnabled = true;

	/*
	* Set the URL to use for retrieving data with AJAX
	* @param url:[String] - The URL to use for retrieving data with AJAX
	*/
	_this.setGameSettingsURL = function(url) {
		_this.gameSettingsURL = url;
	}

	/*
	* Attempt to update the locally cached key-value storage with values from a remove server
	* @param keys:[Array<String>] - List of keys to be updated
	*/
	_this.updateLocalCache = function(keys) {
		//DEBUG
		//_log("Attempting to update local cache");

		//Don't update if persistent storage is disabled
		if(!_persistentStorageEnabled){
			_this.dispatchEvent(new BaseEvent("CacheUpdateComplete"));
			return;
		}

		if(isEmpty(keys)) {
			_cacheUpdateError("Keys array to update was empty!");
			// make sure the parameter passed in isn't empty.
			return;
		}
		if(!keys instanceof Array) {
			_cacheUpdateError("Keys parameter was not an Array!");
			// make sure the parameter passed in is an array.
			return;
		}

		_remainingKeys = keys;

		var i;
		for (i = 0; i < keys.length; i++) {
			//_log("GETTING "+keys[i]+" from the DB.");
			var settings = {
				a: "get",
				key: keys[i]
			}

			try {
				$.ajax({
					type:"POST",
					url: _this.gameSettingsURL,
					data: settings,
					success: _cacheUpdateComplete,
					error : _cacheUpdateError,
					dataType: 'json'
				});
			} catch (e) {
				//_log("error getting value from db: " + e);
			}
		}

	}

	/*
	* Enable saving to persistent storage
	*/
	_this.enablePersistentStorage = function(){
		_persistentStorageEnabled = true;
	}

	/*
	* Disable saving to persistent storage
	*/
	_this.disablePersistentStorage = function(){
		_persistentStorageEnabled = false;
	}

	function _cacheUpdateComplete(result) {
		//DEBUG
		//_log("Cache update complete.");
		//_log("( is result empty ? "+isEmpty(result.value)+" ) ");
		//console.dir(result);
		
		if(!isEmpty(result.value)) {
			//_log("got result from DB: ");
			//_log(result);
			_this.set(result.key, result.value, false);
		}

		var key = result.key;
		var keyIndex = _remainingKeys.indexOf(key);
		if(keyIndex != -1)  {
			_remainingKeys.splice(keyIndex, 1);
		}

		if(_remainingKeys.length < 1) {
			//DEBUG
			//_log("All keys loading - dispatching update complete");

			_this.dispatchEvent(new BaseEvent("CacheUpdateComplete"));
		}
	}

	function _cacheUpdateError(result) {
		//_log("ERROR UPDATING CACHE:");
		//_log(result);
		_this.dispatchEvent(new BaseEvent("CacheUpdateError"));
	}

	/**
	* Set defaults for various keys/values.
	* The defaults should be passed in as a json object, with key value pairs within it.
	* @param defaults: A json object containing default values for the key/value pairs being stored.
	* For example:
	* {
	*	"score": 0,
	*	"lastUnlockedLevel": 1
	*	"playerName": "player"
	* }
	**/
	_this.setDefaults = function(defaults) {
		_this.defaults = defaults; 
	};

	/**
	* Resets the values to their defaults.
	* If no defaults are specified, this will do nothing.
	* @param resetDB:[Boolean] (Optional) - Whether values should be reset in the database as well.  Defaults to true.
	**/
	_this.resetToDefaults = function(resetDB) {
		var shouldResetDB = resetDB != undefined ? resetDB : true;

		for(var def in _this.defaults) {
			_this.set(def, _this.defaults[def], shouldResetDB);
		}
	};



	/**
	* Set a value.	
	* @param key: The key that the object is being stored under.
	* @param value: The value being stored at the given key.
	* @param updateDB:[Boolean] - Whether the remove database should be updated immediately or not
	**/
	_this.set = function(key, value, updateDB) {
		if(updateDB == null || updateDB == undefined) {
			updateDB = true;
		}

		// Check if we have support for localstorage in our browser, and if persistent storage is enabled
		if(typeof(Storage)!=="undefined" && _persistentStorageEnabled) {
			// if we do have support, use it.
			localStorage.setItem(key, value.toString());
		} else {
			// if we don't have support, keep an in-memory copy.
			_this.values[key] = value.toString();
		}

		//Write value to DB if requested and enabled
		if(updateDB && _persistentStorageEnabled) {
			//_log("SETTING "+key+" to "+value+" in the DB.");
			var settings = {
				a: "set",
				key: key,
				value: value
			}

			try {
				$.ajax({
					type:"POST",
					url: _this.gameSettingsURL,
					data: settings,
					success: _setValueComplete,
					error : _setValueError,
					dataType: 'json'
				});
			} catch (e) {
				//_log("ERROR getting value from db: " + e);
			}
		}
	};

	function _setValueComplete(result) {
		//_log("set value successfully in DB.")
	}

	function _setValueError(result) {
		//_log("Error setting value in DB: ");
		//_log(result);
	}

	/**
	* Get a value as a float.
	* @param key: the key whose value to get.
	**/
	_this.getFloat = function(key){
		// TODO: make sure this does something sensible if the value isn't a float, or doesn't exist.
		var val = _this.get(key);
		if(val !== null) {
			return parseFloat(val);
		} else {
			return 0;
		}
	}
	/**
	* Get a value as an integer.
	* @param key: the key whose value to get.
	**/
	_this.getInt = function(key){
		// TODO: make sure this does something sensible if the value isn't an integer, or doesn't exist.
		var val = _this.get(key);
		if(!isEmpty(val)) {
			return parseInt(val);
		} else {
			return 0;
		}
	}

	/** 
	* Get a value for a given key.
	* @param key: The key whose value to get.
	**/
	_this.get = function (key, defaultValue) {
		// Check if we have localstorage support in the browser.
		if(typeof(Storage)!=="undefined" && _persistentStorageEnabled) {

			// if we have localstorage access, check if we have the object in localstorage.
			if(localStorage.getItem(key) === null) {

				// if we don't have the object in localstorage, try to get it from the DB.

				// if we don't have the object, check if we have a default.
				if(key in _this.defaults) {
					// if we have a default, return it.
					return _this.defaults[key];
				} else {
					// if we don't have a default, return null.
					return defaultValue;
				}
			} else {

				// if we do have an item in localstorage, return it.
				return localStorage.getItem(key);
			}
		//No local storage support or persistent storage disabled
		} else {

			// if we don't have localstorage access, check if we have an in-memory copy.
			if(key in _this.values) {

				// if we have local copy return it.
				return _this.values[key];
			// if we don't have an in-memory copy, check if we have a default.
			} else {				

				if(key in _this.defaults) {

					// if we have a default, return it.
					return _this.defaults[key];
				} else {
					// if we don't have a default, return null.
					return defaultValue;
				}
			}
		}
	};

};