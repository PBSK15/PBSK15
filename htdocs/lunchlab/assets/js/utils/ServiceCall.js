(function(){

	/**
	*  The wrapper for making a service call to the LL site
	*  @class lunchlab.ServiceCall
	*/
	var ServiceCall = function()
	{
		/**
		*  If the service call is active
		*  @property {Boolean} isActive
		*  @readOnly
		*/
		this.isActive = true;

		// binds of internal methods
		this._getCallback = this._getCallback.bind(this);
		this._postCallback = this._postCallback.bind(this);

		/**
		*  The external function callback
		*  @property {Function} _extCall
		*  @private
		*/
		this._extCall = null;
	},

	// Reference to the prototype
	p = ServiceCall.prototype,

	/**
	*  The poll of service calls
	*  @property {Array} _serviceCallPool
	*  @private
	*/
	_serviceCallPool = [];

	/**
	*  The base path to the form submission
	*  @property {String} BASE_PATH
	*  @static
	*  @default "/lunchlab/"
	*/
	ServiceCall.BASE_PATH = '/lunchlab/';

	/**
	*  The base path to the site gateway
	*  @property {String} GATEWAY
	*  @static
	*  @default "/lunchlab/gateway/"
	*/
	ServiceCall.GATEWAY = '/lunchlab/gateway/';

	/**
	*  Get data via the gateway
	*  @method get 
	*  @param {String} url The gateway method
	*  @param {Function} callback The gateway return when finished
	*/
	p.get = function(url, callback)
	{
		this._extCall = callback;
		if(arguments.length > 2)
		{
			for(var i = 2; i < arguments.length; ++i)
			{
				var value = arguments[i];
				url += "/" + value;
			}
		}
		$.get(ServiceCall.GATEWAY + url, null, this._getCallback, "json");
	};

	/**
	*  Handle the gateway response
	*  @method _getCallback
	*  @private
	*  @param {Object} response The gateway response
	*/
	p._getCallback = function(response)
	{
		var callback = this._extCall;
		this._extCall = null;

		_serviceCallPool.push(this);
		
		if(callback)
		{
			callback(response ? response.result : null);
		}	
	};

	/**
	*  Post the data using a form submission
	*  @method post
	*  @param {String} formClass The name of the PHP form
	*  @param {Function} callback The name of the callback
	*  @param {Object} data The data to submit
	*/
	p.post = function(formClass, callback, data)
	{
		this._extCall = callback;
		// Javascript send and response
		var postData = {

			// makes sure we get a json response
			async : true, 

			// The name of the form class in PHP
			form : formClass
		};

		for(var key in data)
		{
			postData[key] = data[key];
		}

		// Post using ajax on jquery
		$.post(ServiceCall.BASE_PATH, postData, this._postCallback);
	};

	/**
	*  Handle the post response
	*  @param {String} response.type "formFeedback"
	*  @param {Boolean} response.ifError 
	*  @param {object} response.data  Name value pairs of custom response data
	*  @param {Array} response.messages The collection of error or success messages
	*/
	p._postCallback = function(response)
	{
		if(response.ifError)
		{
			Debug.error("Errors in service call post: ");
			for(var i = 0; i < response.messages.length; ++i)
			{
				Debug.error(response.messages[i]);
			}
		}
		var callback = this._extCall;

		this._extCall = null;
		_serviceCallPool.push(this);
		
		if(callback)
		{
			callback(response ? response.data : null);
		}	
	};

	/**
	*  Create a service call
	*  @method create
	*  @static
	*  @return {ServiceCall} The new Service call created
	*/
	ServiceCall.create = function()
	{
		return _serviceCallPool.length ? _serviceCallPool.pop() : new ServiceCall();
	};

	// Assign to the namespace
	namespace('LunchLab.utils').ServiceCall = ServiceCall;

}());